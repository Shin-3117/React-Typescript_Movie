import styles from './footer.module.scss';

const Footer = () => {

  return (
<footer className={styles.wrap}>
  <div>
    <p className={styles.logo}>React-Typescript Movie</p>
    <p>제작: 신현중</p>
  </div>
    <a
      href="https://github.com/Shin-3117/React-Typescript_Movie"
      rel="noreferrer"
      target="_blank"
      className={styles.link}
      >
      프로젝트 깃허브 주소
    </a>
</footer>
  );
};

export default Footer;
