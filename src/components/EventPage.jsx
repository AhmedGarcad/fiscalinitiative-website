import { Navigate, useParams } from "react-router-dom";
import SequenceDetail from "./SequenceDetail";
import { events } from "../content/siteContent";
import { profileAssets } from "../content/profileAssets";
import { slugify } from "../lib/slugify";

export default function EventPage() {
  const { slug } = useParams();
  const index = events.findIndex((event) => slugify(event.title) === slug);

  if (index === -1) return <Navigate to="/events" replace />;

  const event = events[index];

  return (
    <SequenceDetail
      items={events}
      index={index}
      hrefFor={(item) => `/events/${slugify(item.title)}`}
      backTo="/events"
      backLabel="All events"
      eyebrow={event.group}
      background={profileAssets.approach}
    >
      <span className="inline-block rounded-full bg-emerald-50 px-4 py-1.5 text-sm font-semibold text-emerald-800 mb-6">
        {event.group}
      </span>
      <p className="text-gray-700 text-lg leading-relaxed">{event.description}</p>
    </SequenceDetail>
  );
}
