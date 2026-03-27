
import { NavLink } from 'react-router-dom';
import { LogoIcon, HomeIcon, MovieIcon, TVIcon, BookmarkIcon } from '../../components/icon/Icons';
import styles from './Sidebar.module.scss';

export default function Sidebar() {
  const navItems = [
    { to: '/',           icon: <HomeIcon />,     label: 'Home' },
    { to: '/movies',     icon: <MovieIcon />,    label: 'Movies' },
    { to: '/tv-series',  icon: <TVIcon />,       label: 'TV Series' },
    { to: '/bookmarks',  icon: <BookmarkIcon />, label: 'Bookmarks' },
  ];

  return (
    <aside className={styles.sidebar}>
      <div className={styles.logo}>
        <LogoIcon />
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
