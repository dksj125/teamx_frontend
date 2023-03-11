import "@/styles/globals.css";
import type { AppProps } from "next/app";
import styles from "@/styles/Header.module.css";
import Cookies from "js-cookie";
import Container from "react-bootstrap/Container";
import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal, Key } from "react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.contents}>
          <div className={styles.logo}>
            <a href="/">
              <img src="img/TeamXLogo2.png" className={styles.logoopacity}></img>
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
          <NavBar />
        </div>
      </header>
      <Component {...pageProps} />
      <footer className={styles.footer}>
        <p className={styles.footercontents}>
          @team-x
        </p>
      </footer>
    </>
  );
}

function NavBar() {

  const menuItems = [
    {
      title: "ABOUT",
      subMenu: [
        {
          title: "TEAM X",
          url: "/about/teamx"
        },
        {
          title: "PEOPLE",
          url: "/about/people"
        }
      ]
    },
    {
      title: "WORK",
      subMenu: [
        {
          title: "ARCHIVE",
          url: "/work/archive"
        },
        {
          title: "CLUB",
          url: "/work/club"
        }
      ]
    },
    {
      title: "FORUM",
      subMenu: [
        {
          title: "ALBUM",
          url: "/forum/album"
        },
        {
          title: "Q&A",
          url: "/forum/qa"
        },
        {
          title: "NOTICE",
          url: "/forum/notice"
        },
        {
          title: "CHAT",
          url: "/forum/chat"
        }
      ]
    }
  ]

  const Dropdown = ({ submenus } : any) => {
    return (
      <ul className="dropdown">
        {submenus.map((submenu: { url: string | undefined; title: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; }, index: Key | null | undefined) => (
          <li key={index} className="menu-items">
            <a href={submenu.url}>{submenu.title}</a>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <nav className={styles.navigation}>
      <ul className={styles.navul}>
        {menuItems.map((menuItem, index) => (
          <ul key={index} className="menu-items">
            <a href="#">{menuItem.title}</a>
            {menuItem.subMenu && <Dropdown submenus={menuItem.subMenu} />}
          </ul>
        ))}
        <li className="menu-items">
          <IsLogin></IsLogin>
        </li>
      </ul>
    </nav>
  )
}

function IsLogin() {


  if (Cookies.get("accessToken") != null) {
    return <div>로그아웃</div>;
  }
  return (
    <div>
      <a href="/login">로그인</a>
    </div>
  );
}
