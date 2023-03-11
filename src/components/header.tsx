import styles from "@/styles/Header.module.css";
import image from "../../public/img/TeamXLogo2.png";
import Image from "next/image";

export default function Header() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.contents}>
          <div className={styles.logo}>
            <a href="/">
              <Image src={image} alt="TeamXLogo2" width={100} height={100} />
            </a>
          </div>

          {/* <nav className={styles.navigation}>
            <ul className={styles.navul}>
              <ul className={styles.navli} id={styles.dropdowncontainer}>
                ABOUT
              </ul>
              <ul className={styles.navli}>WORK</ul>
              <ul className={styles.navli}>FORUM</ul>
              <li className={styles.navli}>
                <IsLogin></IsLogin>
              </li>
            </ul>
          </nav> */}
        </div>
      </header>
    </>
  );
}
