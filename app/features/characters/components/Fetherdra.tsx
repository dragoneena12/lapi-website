import React from "react"
import { Image } from "@/components/image/Image"
import classes from "./Fetherdra.module.scss"

const Fetherdra: React.FC = () => (
  <div className={classes.Container}>
    <div className={classes.Description}>
      <h2>フェザードラゴネット（Feather Dragonet）</h2>
      <ul className={classes.List}>
        <li>種族：ドラゴン？</li>
        <li>性別：♂？</li>
      </ul>
      <p>
        <a
          href="https://suko-doge.booth.pm/"
          target="_blank"
          rel="noopenner noreferrer"
          className={classes.Link}
        >
          バウワウナード
        </a>
        製のフェザドラちゃん改変です。あおくてかわいい。
      </p>
      <p>
        <a
          href="https://hub.vroid.com/characters/5332191322326023168/models/7463918390285866524"
          target="_blank"
          rel="noopenner noreferrer"
          className={classes.Link}
        >
          VRoidHubで見る
        </a>
      </p>
    </div>
    <Image
      className={`${classes.Image} ${classes.Large4}`}
      src="fetherdra/pic1.jpg"
      alt="fetherdra picture"
      width={500}
    />
    <Image
      className={`${classes.Image} ${classes.Large2}`}
      src="fetherdra/pic2.jpg"
      alt="fetherdra picture"
      width={500}
    />
    <Image
      className={`${classes.Image} ${classes.Large1}`}
      src="fetherdra/pic3.png"
      alt="fetherdra picture"
      width={500}
    />
    <Image
      className={classes.Image}
      src="fetherdra/pic4.png"
      alt="fetherdra picture"
      width={500}
    />
    <Image
      className={`${classes.Image} ${classes.Large6}`}
      src="fetherdra/pic5.png"
      alt="fetherdra picture"
      width={500}
    />
    <Image
      className={classes.Image}
      src="fetherdra/pic6.png"
      alt="fetherdra picture"
      width={500}
    />
    <Image
      className={classes.Image}
      src="fetherdra/pic7.png"
      alt="fetherdra picture"
      width={500}
    />
    <Image
      className={classes.Image}
      src="fetherdra/pic8.png"
      alt="fetherdra picture"
      width={500}
    />
    <Image
      className={classes.Image}
      src="fetherdra/pic9.png"
      alt="fetherdra picture"
      width={500}
    />
    <Image
      className={`${classes.Image} ${classes.Large5}`}
      src="fetherdra/pic10.png"
      alt="fetherdra picture"
      width={500}
    />
    <Image
      className={classes.Image}
      src="fetherdra/pic11.png"
      alt="fetherdra picture"
      width={500}
    />
    <Image
      className={`${classes.Image} ${classes.Large3}`}
      src="fetherdra/pic12.png"
      alt="fetherdra picture"
      width={500}
    />
  </div>
)

export default Fetherdra
