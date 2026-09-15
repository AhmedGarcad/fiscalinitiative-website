create table if not exists public.site_content (
  id uuid primary key default gen_random_uuid(),
  content_type text not null,
  title text not null,
  slug text unique,
  summary text,
  body text,
  url text,
  image_url text,
  file_url text,
  file_type text,
  video_url text,
  published boolean not null default true,
  user_id uuid references auth.users(id) on delete set null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.site_content add column if not exists slug text unique;
alter table public.site_content add column if not exists file_url text;
alter table public.site_content add column if not exists file_type text;
alter table public.site_content add column if not exists video_url text;

alter table public.site_content enable row level security;

drop policy if exists "Published content is public" on public.site_content;
create policy "Published content is public"
on public.site_content for select
using (published = true);

drop policy if exists "Authenticated users can create content" on public.site_content;
create policy "Authenticated users can create content"
on public.site_content for insert
to authenticated
with check (auth.uid() = user_id);

drop policy if exists "Authenticated users can update own content" on public.site_content;
create policy "Authenticated users can update own content"
on public.site_content for update
to authenticated
using (auth.uid() = user_id)
with check (auth.uid() = user_id);

drop policy if exists "Authenticated users can delete own content" on public.site_content;
create policy "Authenticated users can delete own content"
on public.site_content for delete
to authenticated
using (auth.uid() = user_id);

create or replace function public.set_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

drop trigger if exists set_site_content_updated_at on public.site_content;
create trigger set_site_content_updated_at
before update on public.site_content
for each row
execute function public.set_updated_at();

insert into storage.buckets (id, name, public)
values
  ('publication-pdfs', 'publication-pdfs', true),
  ('media-files', 'media-files', true),
  ('video-files', 'video-files', true)
on conflict (id) do update
set public = true;

drop policy if exists "Website files are publicly readable" on storage.objects;
create policy "Website files are publicly readable"
on storage.objects for select
using (
  bucket_id in (
    'publication-pdfs',
    'media-files',
    'video-files'
  )
);

drop policy if exists "Authenticated users can upload website files" on storage.objects;
create policy "Authenticated users can upload website files"
on storage.objects for insert
to authenticated
with check (
  bucket_id in (
    'publication-pdfs',
    'media-files',
    'video-files'
  )
);

drop policy if exists "Authenticated users can update website files" on storage.objects;
create policy "Authenticated users can update website files"
on storage.objects for update
to authenticated
using (
  bucket_id in (
    'publication-pdfs',
    'media-files',
    'video-files'
  )
)
with check (
  bucket_id in (
    'publication-pdfs',
    'media-files',
    'video-files'
  )
);

drop policy if exists "Authenticated users can delete website files" on storage.objects;
create policy "Authenticated users can delete website files"
on storage.objects for delete
to authenticated
using (
  bucket_id in (
    'publication-pdfs',
    'media-files',
    'video-files'
  )
);
