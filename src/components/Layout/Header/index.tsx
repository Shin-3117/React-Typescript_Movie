import { Link } from 'react-router-dom';
import styles from './header.module.scss';

const Header = () => {

  return (
    <header className={styles.wrap}>
      <Link to="/">
        <div className={styles.logo}>React-Typescript Movie</div>
      </Link>

    </header>
  );
};

export default Header;
