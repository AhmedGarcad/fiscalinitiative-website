const icons = {
  target: (
    <>
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="4.5" />
      <circle cx="12" cy="12" r="1" fill="currentColor" stroke="none" />
    </>
  ),
  binoculars: (
    <>
      <path d="M9 4l-2 6v9a2 2 0 002 2h1a2 2 0 002-2v-6" />
      <path d="M15 4l2 6v9a2 2 0 01-2 2h-1a2 2 0 01-2-2v-6" />
      <path d="M10 13h4" />
      <path d="M9 4h2M13 4h2" />
    </>
  ),
  compass: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M14.5 9.5l-2 5-3 1.5 2-5z" fill="currentColor" stroke="none" />
    </>
  ),
  flag: (
    <>
      <path d="M6 3v18" />
      <path d="M6 4h11l-2.5 4L17 12H6" />
    </>
  ),
};

export default function IconBadge({ icon = "target", size = 96 }) {
  return (
    <div
      className="rounded-full bg-[#0B2A4A] text-white flex items-center justify-center mx-auto"
      style={{ width: size, height: size }}
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ width: size * 0.45, height: size * 0.45 }}
      >
        {icons[icon] || icons.target}
      </svg>
    </div>
  );
}
