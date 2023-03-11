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
      <div className={styles.divide_first_box}>
      <div className={styles.divide_first}></div>
      <div className={styles.divide_first}>
        <img src="img/TeamXLogo.png" className={styles.about_teamxlogosize}></img>
      </div>
      <div className={styles.divide_introduce}>
        <div className={styles.about_teamx_introduce}>
          <b>SINCE</b>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;1990.07.07<br></br>
          <br></br><br></br>
          Team-x는 경희대학교 공과대학 건축학과 사하의 작업실입니다<br></br>
          24시간 불이 꺼지지 않는 열정 넘치는 작업실로 30여년간 건축분야는 물론<br></br>
          사회 전반에 우수한 인재들을 배출해냈습니다.<br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <b>LOGO</b>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;30기 임형주<br></br>
          <br></br><br></br>
          우리는 무한한 가능성을 가진 존재입니다. 개인의 역량이 합해지고&#40;+&#41;<br></br>
          같은 가치를 추구하며 함께 나아갈 때 우리의 능력은 배가 됩니다.&#40;x&#41;<br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <b>CONTACT</b>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;30기 장태수<br></br>
          <br></br>
          <b>TEL</b>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;010-4592-0344<br></br>
          <br></br>
          <b>SNS</b>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;@dakhu_team.x<br></br>
          <br></br>&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; WWW.FACEBOOK.COM/TEAMX<br></br>
          
        </div>
      </div>
      </div>

      <div className={styles.divide_second}>
        <img src="img/plan.jpg" className={styles.plan}/>
      </div>

      <div className={styles.divide_third}>
        <div className={styles.image_slide}>
        <SimpleSlider/>
        </div>
      </div>
      
    </>
  );
}



function SampleNextArrow(props:any) {
  const { className, style, onClick } = props;
  return (
    <div style={{ position: 'absolute', top: 160, right: -80 }}>
            <Image
                src="/img/right.png"
                alt="Picture of the author"
                width={30}
                height={80}
                onClick={onClick}
            />
        </div>
  );
}

function SamplePrevArrow(props:any) {
  const { className, style, onClick } = props;
  return (
    <div style={{ position: 'absolute', top: 160, left: -80 }}>
            <Image
                src="/img/left.png"
                alt="Picture of the author"
                width={30}
                height={80}
                onClick={onClick}
            />
        </div>
  );
}

class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      autoplay: true,
      autoplaySpeed: 2000,
    };
    return (
      <div>
        <Slider {...settings}>
          <div className={styles.image_slide}>
            <h3>1</h3>
          </div>
          <div className={styles.image_slide}>
            <h3>2</h3>
          </div>
          <div className={styles.image_slide}>
            <h3>3</h3>
          </div>
          <div className={styles.image_slide}>
            <h3>4</h3>
          </div>
          <div className={styles.image_slide}>
            <h3>5</h3>
          </div>
          <div className={styles.image_slide}>
            <h3>6</h3>
          </div>
        </Slider>
      </div>
    );
  }
}