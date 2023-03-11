import "@/styles/globals.css";
import type { AppProps } from "next/app";
import styles from "@/styles/Header.module.css";
import Header from "@/components/header";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <footer className={styles.footer}>
        <p className={styles.footercontents}>@team-x</p>
      </footer>
    </>
  )
}