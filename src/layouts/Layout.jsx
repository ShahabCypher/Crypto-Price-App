import styles from "./Layout.module.css";

const Layout = ({ children }) => {
  return (
    <>
      <header className={styles.header}>
        <h1>Crypto App</h1>
        <p>
          <a href="https://github.com/ShahabCypher" target="_blank">
            By Cypher
          </a>
        </p>
      </header>
      {children}
      <footer className={styles.footer}>
        <p>Developed by Cypher with ❤️</p>
      </footer>
    </>
  );
};

export default Layout;
