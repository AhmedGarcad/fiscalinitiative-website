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
  chart: (
    <>
      <path d="M4 4v16h16" />
      <path d="M8 16v-5M12 16V8M16 16V9" />
    </>
  ),
  scales: (
    <>
      <path d="M12 4v16M8 20h8M5 7h14" />
      <path d="M5 7l-3 6a3 3 0 006 0z" />
      <path d="M19 7l-3 6a3 3 0 006 0z" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M3.5 12h17" />
      <path d="M12 3.5c2.4 2.3 3.5 5.2 3.5 8.5s-1.1 6.2-3.5 8.5c-2.4-2.3-3.5-5.2-3.5-8.5s1.1-6.2 3.5-8.5z" />
    </>
  ),
  people: (
    <>
      <circle cx="12" cy="8" r="3" />
      <path d="M6.5 20v-1a5.5 5.5 0 0111 0v1" />
      <circle cx="5" cy="10.5" r="2" />
      <circle cx="19" cy="10.5" r="2" />
      <path d="M2 19a3.5 3.5 0 014.5-3.3M22 19a3.5 3.5 0 00-4.5-3.3" />
    </>
  ),
  sprout: (
    <>
      <path d="M12 20v-8" />
      <path d="M12 12C12 8 9 5 4 5c0 4 3 7 8 7z" />
      <path d="M12 14c0-3 2.5-5.5 7-5.5 0 3.5-2.5 5.5-7 5.5z" />
      <path d="M7 20h10" />
    </>
  ),
  chip: (
    <>
      <path d="M7 7h10v10H7z" />
      <path d="M10 10h4v4h-4z" />
      <path d="M10 3v4M14 3v4M10 17v4M14 17v4M3 10h4M3 14h4M17 10h4M17 14h4" />
    </>
  ),
  receipt: (
    <>
      <path d="M6 3h12v18l-2-1.5-2 1.5-2-1.5-2 1.5-2-1.5-2 1.5z" />
      <path d="M9.5 14.5l5-5" />
      <circle cx="9.75" cy="9.75" r="0.75" />
      <circle cx="14.25" cy="14.25" r="0.75" />
    </>
  ),
  pie: (
    <>
      <path d="M11 4a8 8 0 108 9h-8z" />
      <path d="M14 3a7 7 0 017 7h-7z" />
    </>
  ),
  coins: (
    <>
      <ellipse cx="12" cy="6" rx="7" ry="2.5" />
      <path d="M5 6v4c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5V6" />
      <path d="M5 10v4c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5v-4" />
      <path d="M5 14v4c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5v-4" />
    </>
  ),
  network: (
    <>
      <circle cx="12" cy="5.5" r="2.5" />
      <circle cx="5" cy="18" r="2.5" />
      <circle cx="19" cy="18" r="2.5" />
      <path d="M10.8 7.7l-4.6 8M13.2 7.7l4.6 8M7.5 18h9" />
    </>
  ),
  partnership: (
    <>
      <circle cx="9" cy="12" r="5.5" />
      <circle cx="15" cy="12" r="5.5" />
    </>
  ),
  institution: (
    <>
      <path d="M3 9l9-5 9 5H3z" />
      <path d="M6 9v8M10 9v8M14 9v8M18 9v8" />
      <path d="M4 17h16M3 20h18" />
    </>
  ),
  document: (
    <>
      <path d="M6 3h8l4 4v14H6z" />
      <path d="M14 3v4h4" />
      <path d="M9 11h6M9 14h6M9 17h4" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3l7 3v5c0 4.5-3 8.5-7 10-4-1.5-7-5.5-7-10V6z" />
      <path d="M9 12l2 2 4-4" />
    </>
  ),
  exchange: (
    <>
      <path d="M4 8h15l-3-3" />
      <path d="M20 16H5l3 3" />
    </>
  ),
  growth: (
    <>
      <path d="M3 17l6-6 4 4 8-8" />
      <path d="M15 7h6v6" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21s-6.5-5.5-6.5-11a6.5 6.5 0 0113 0c0 5.5-6.5 11-6.5 11z" />
      <circle cx="12" cy="10" r="2.2" />
    </>
  ),
  store: (
    <>
      <path d="M4 9l1.5-5h13L20 9" />
      <path d="M4 9a2.7 2.7 0 005.3 0 2.7 2.7 0 005.4 0 2.7 2.7 0 005.3 0" />
      <path d="M5 11.5V20h14v-8.5" />
      <path d="M10 20v-5h4v5" />
    </>
  ),
  truck: (
    <>
      <path d="M3 6h11v10H3z" />
      <path d="M14 9h4l3 3v4h-7" />
      <circle cx="7" cy="17.5" r="1.8" />
      <circle cx="17" cy="17.5" r="1.8" />
    </>
  ),
  graduation: (
    <>
      <path d="M2 9l10-5 10 5-10 5z" />
      <path d="M6 11v5c0 1.5 2.7 3 6 3s6-1.5 6-3v-5" />
      <path d="M22 9v5" />
    </>
  ),
  health: (
    <>
      <path d="M12 20C6 16 4 13 4 9.5A4.5 4.5 0 0112 7a4.5 4.5 0 018 2.5C20 13 18 16 12 20z" />
      <path d="M8 12h2l1-2 2 4 1-2h2" />
    </>
  ),
  umbrella: (
    <>
      <path d="M3 12a9 9 0 0118 0z" />
      <path d="M12 12v6a2 2 0 01-4 0" />
    </>
  ),
  calendar: (
    <>
      <path d="M4 6h16v14H4z" />
      <path d="M4 10h16M8 3v5M16 3v5" />
      <path d="M8 14h2M14 14h2M8 17h2" />
    </>
  ),
  briefcase: (
    <>
      <path d="M3 8h18v11H3z" />
      <path d="M9 8V6a1 1 0 011-1h4a1 1 0 011 1v2" />
      <path d="M3 13h18" />
    </>
  ),
};

export default function IconBadge({ icon = "target", size = 96 }) {
  return (
    <div
      className="rounded-full bg-[#00564F] text-white flex items-center justify-center mx-auto"
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
