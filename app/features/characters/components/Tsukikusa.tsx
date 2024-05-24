import React from "react"
import { Image } from "@/components/image/Image"
import classes from "./Tsukikusa.module.scss"

const Tsukikusa: React.FC = () => (
  <div className={classes.Container}>
    <div className={classes.Description}>
      <h2>つきくさ(Tsukikusa)</h2>
      <ul className={classes.List}>
        <li>種族：けも竜</li>
        <li>性別：♂</li>
      </ul>
      <p>
        自作をしたキャラクターです。とある別のドラゴンのキャラクターに感動してその勢いで制作してしまいました。ほっぺの模様がチャームポイント。割と恥ずかしがりなところもあるので優しく接してあげてください。
      </p>
    </div>
    <Image
      className={`${classes.Image} ${classes.Large1}`}
      src="tsukikusa/pic1.jpg"
      alt="tsukikusa picture"
      width={500}
    />
    <Image
      className={`${classes.Image} ${classes.Large2}`}
      src="tsukikusa/pic2.jpg"
      alt="tsukikusa picture"
      width={500}
    />
    <Image
      className={classes.Image}
      src="tsukikusa/pic3.jpg"
      alt="tsukikusa picture"
      width={500}
    />
    <Image
      className={classes.Image}
      src="tsukikusa/pic4.jpg"
      alt="tsukikusa picture"
      width={500}
    />
    <Image
      className={`${classes.Image} ${classes.Large6}`}
      src="tsukikusa/pic5.jpg"
      alt="tsukikusa picture"
      width={500}
    />
    <Image
      className={`${classes.Image} ${classes.Large4}`}
      src="tsukikusa/pic6.jpg"
      alt="tsukikusa picture"
      width={500}
    />
    <Image
      className={classes.Image}
      src="tsukikusa/pic7.jpg"
      alt="tsukikusa picture"
      width={500}
    />
    <Image
      className={classes.Image}
      src="tsukikusa/pic8.jpg"
      alt="tsukikusa picture"
      width={500}
    />
    <Image
      className={classes.Image}
      src="tsukikusa/pic9.jpg"
      alt="tsukikusa picture"
      width={500}
    />
    <Image
      className={`${classes.Image} ${classes.Large5}`}
      src="tsukikusa/fig1.png"
      alt="tsukikusa picture"
      width={500}
    />
    <Image
      className={classes.Image}
      src="tsukikusa/fig2.jpg"
      alt="tsukikusa picture"
      width={500}
    />
    <Image
      className={`${classes.Image} ${classes.Large3}`}
      src="tsukikusa/fig3.png"
      alt="tsukikusa picture"
      width={500}
    />
  </div>
)

export default Tsukikusa
