import { SearchIcon } from '../../components/icon/Icons';
import styles from './SearchBar.module.scss';

export default function SearchBar({ placeholder, value, onChange }) {
  return (
    <div className={styles.searchBar}>
      <span className={styles.icon}>
        <SearchIcon />
      </span>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={styles.input}
      />
    </div>
  );
}
