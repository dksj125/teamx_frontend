import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Team_X</title>
        <link rel="icon" href="img/TeamXLogo.png" />
      </Head>
      <div className={styles.mainbgsize}>
        <img src="img/main.jpeg" className={styles.mainbg}></img>
        <div className={styles.playfont}>할땐 하고 놀땐 놀자</div>
      </div>
      <div className={styles.mainbgsize2}>
        <img src="img/main2.jpeg" className={styles.mainbg2}></img>
        <div className={styles.respectfont}>존중&시너지</div>
      </div>
      <div className={styles.lookmore}>
        <a>더 알아 보기</a>
      </div>
    </>
  );
}
