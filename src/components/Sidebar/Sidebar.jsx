import home from '../images/home.svg'
import Book from '../images/Bookmark.svg'
import TV from '../images/tv.svg'
import Movie from '../images/movie.svg'
import Log from '../images/logo.svg'


import { NavLink } from 'react-router-dom';

import styles from './Sidebar.module.scss';

export default function Sidebar() {
  const navItems = [
    { to: '/',           icon: <img src={home} alt="Home" />,     label: 'Home' },
    { to: '/movies',     icon: <img src={Movie} alt="movie" />,    label: 'Movies' },
    { to: '/tv-series',  icon:<img src={TV} alt="Tv" /> ,       label: 'TV Series' },
    { to: '/bookmarks',  icon:<img src={Book} alt="Book" /> , label: 'Bookmarks' },
  ];

  return (
    <aside className={styles.sidebar}>
      <div className={styles.logo}>
        <img src={Log} alt="log" />
      </div>

      <nav className={styles.nav}>
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.to === '/'}
            className={({ isActive }) =>
              `${styles.navItem} ${isActive ? styles.active : ''}`
            }
            title={item.label}
          >
            {item.icon}
          </NavLink>
        ))}
      </nav>

      <div className={styles.avatar}>
        <img src="https://picsum.photos/seed/user/40/40" alt="User" />
      </div>
    </aside>
  );
}
