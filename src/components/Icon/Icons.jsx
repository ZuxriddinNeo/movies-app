export const LogoIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
  >
    <rect x="2" y="8" width="20" height="14" rx="2" fill="#ff0000" />

    <rect x="2" y="4" width="20" height="5" rx="1" fill="#e05555" />

    <line x1="6" y1="4" x2="4" y2="9" stroke="white" stroke-width="1.5" />
    <line x1="11" y1="4" x2="9" y2="9" stroke="white" stroke-width="1.5" />
    <line x1="16" y1="4" x2="14" y2="9" stroke="white" stroke-width="1.5" />
    <line x1="21" y1="4" x2="19" y2="9" stroke="white" stroke-width="1.5" />
  </svg>
);

export const HomeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
  >
    <rect x="3" y="3" width="8" height="8" rx="1.5" fill="white" />
    <rect x="13" y="3" width="8" height="8" rx="1.5" fill="white" />
    <rect x="3" y="13" width="8" height="8" rx="1.5" fill="white" />
    <rect x="13" y="13" width="8" height="8" rx="1.5" fill="white" />
  </svg>
);

export const MovieIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
  >
    <rect x="2" y="4" width="25" height="22" rx="2" fill="#3a4a5c" />
    <rect x="3" y="6" width="3" height="3" rx="0.5" fill="#1e2a3a" />
    <rect x="3" y="11" width="3" height="3" rx="0.5" fill="#1e2a3a" />
    <rect x="3" y="16" width="3" height="3" rx="0.5" fill="#1e2a3a" />
    <rect x="18" y="6" width="3" height="3" rx="0.5" fill="#1e2a3a" />
    <rect x="18" y="11" width="3" height="3" rx="0.5" fill="#1e2a3a" />
    <rect x="18" y="16" width="3" height="3" rx="0.5" fill="#1e2a3a" />
  </svg>
);

export const TVIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
  >
    <rect x="2" y="4" width="20" height="14" rx="2" fill="#3a4a5c" />
    <rect x="4" y="6" width="16" height="10" rx="1" fill="#1e2a3a" />
    <line
      x1="9"
      y1="4"
      x2="7"
      y2="1"
      stroke="#3a4a5c"
      stroke-width="1.5"
      stroke-linecap="round"
    />
    <line
      x1="15"
      y1="4"
      x2="17"
      y2="1"
      stroke="#3a4a5c"
      stroke-width="1.5"
      stroke-linecap="round"
    />
    <rect x="9" y="18" width="6" height="2" rx="1" fill="#3a4a5c" />
  </svg>
);

export const BookmarkIcon = ({ filled }) =>
  filled ? (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M6 3h12a1 1 0 0 1 1 1v17l-7-4-7 4V4a1 1 0 0 1 1-1z"
        fill="#ffffff"
        stroke="#fdfeff"
        stroke-width="2"
      />
    </svg>
  ) : (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M6 3h12a1 1 0 0 1 1 1v17l-7-4-7 4V4a1 1 0 0 1 1-1z"
        fill="none"
        stroke="white"
        stroke-width="2"
      />
    </svg>
  );

export const SearchIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="1.5" />
    <path
      d="m17 17 4 4"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

export const FilmCatIcon = () => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="0.5"
      y="1.5"
      width="11"
      height="9"
      rx="1.5"
      stroke="currentColor"
      strokeWidth="1"
    />
    <path
      d="M.5 5h11M4 1.5v3M8 1.5v3M4 7.5v3M8 7.5v3"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
    />
  </svg>
);

export const TVCatIcon = () => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="0.5"
      y="3"
      width="11"
      height="8"
      rx="1.5"
      stroke="currentColor"
      strokeWidth="1"
      fill="none"
    />
    <path
      d="M4 1L6 3l2-2"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const PlayIcon = () => (
  <svg
    width="30"
    height="30"
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="15" cy="15" r="15" fill="white" fillOpacity="0.25" />
    <path d="M12 10L22 15L12 20V10Z" fill="white" />
  </svg>
);
