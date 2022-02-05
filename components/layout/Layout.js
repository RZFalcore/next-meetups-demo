import MainNav from "./MainNav";
import styles from "./Layout.module.css";

const Layout = ({ children }) => {
  return (
    <div>
      <MainNav />
      <main className={styles.main}>{children}</main>
    </div>
  );
};

export default Layout;
