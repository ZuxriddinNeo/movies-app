
export const LogoIcon = () => (
  <svg width="33" height="27" viewBox="0 0 33 27" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="33" height="27" rx="4" fill="#FC4747"/>
    <path d="M3 9h5M3 14h5M3 19h5M25 9h5M25 14h5M25 19h5M10 5v18M23 5v18M10 5h13M10 23h13" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
  </svg>
);

export const HomeIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1 8.5 10 2l9 6.5V18a1 1 0 01-1 1h-5v-5H7v5H2a1 1 0 01-1-1V8.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" fill="none"/>
  </svg>
);

export const MovieIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="1" y="4" width="18" height="13" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none"/>
    <path d="M1 9h18M6.5 4v5M10 4v5M13.5 4v5M6.5 12v5M10 12v5M13.5 12v5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

export const TVIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="1" y="5" width="18" height="13" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none"/>
    <path d="M6.5 2L10 5l3.5-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const BookmarkIcon = ({ filled }) => (
  filled ? (
    <svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1 1h10v12L6 10 1 13V1Z" fill="#FC4747"/>
    </svg>
  ) : (
    <svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1 1h10v12L6 10 1 13V1Z" stroke="white" strokeWidth="1.5" strokeLinejoin="round"/>
    </svg>
  )
);

export const SearchIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="1.5"/>
    <path d="m17 17 4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

export const FilmCatIcon = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="0.5" y="1.5" width="11" height="9" rx="1.5" stroke="currentColor" strokeWidth="1"/>
    <path d="M.5 5h11M4 1.5v3M8 1.5v3M4 7.5v3M8 7.5v3" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
  </svg>
);

export const TVCatIcon = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="0.5" y="3" width="11" height="8" rx="1.5" stroke="currentColor" strokeWidth="1" fill="none"/>
    <path d="M4 1L6 3l2-2" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const PlayIcon = () => (
  <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="15" cy="15" r="15" fill="white" fillOpacity="0.25"/>
    <path d="M12 10L22 15L12 20V10Z" fill="white"/>
  </svg>
);
