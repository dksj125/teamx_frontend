import styles from "@/styles/Header.module.css";
import Cookies from "js-cookie";

export default function NavBar() {
  const menuItems = [
    {
      title: "ABOUT",
      subMenu: [
        {
          title: "TEAM X",
          url: "/about/teamx",
        },
        {
          title: "PEOPLE",
          url: "/about/people",
        },
      ],
    },
    {
      title: "WORK",
      subMenu: [
        {
          title: "ARCHIVE",
          url: "/work/archive",
        },
        {
          title: "CLUB",
          url: "/work/club",
        },
      ],
    },
    {
      title: "FORUM",
      subMenu: [
        {
          title: "ALBUM",
          url: "/forum/album",
        },
        {
          title: "Q&A",
          url: "/forum/qa",
        },
        {
          title: "NOTICE",
          url: "/forum/notice",
        },
        {
          title: "CHAT",
          url: "/forum/chat",
        },
      ],
    },
  ];

  const Dropdown = ({ submenus }: any) => {
    return (
      <ul className="dropdown">
        {submenus.map(
          (
            submenu: {
              url: string | undefined;
              title: any;
            },
            index: any
          ) => (
            <li key={index} className="menu-items">
              <a href={submenu.url}>{submenu.title}</a>
            </li>
          )
        )}
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
  );
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
