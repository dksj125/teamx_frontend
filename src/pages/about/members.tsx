import React, { Component } from "react";
import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Team_X</title>
        <link rel="icon" href="img/TeamXLogo.png" />
      </Head>
      <div className={styles.about_members_page}>
        <div className={styles.member1}></div>
        <div className={styles.member2}></div>
      </div>
    </>
  );
}
