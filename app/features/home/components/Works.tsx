import React from "react";

import Heading from "@/components/heading/Heading";
import classes from "./Works.module.scss";

const Works: React.FC = () => {
  return (
    <>
      <Heading>Works</Heading>
      <div className={classes.Works}>
        <div className={classes.Box}>
          <a
            href="https://lapi.tokyo/hotel"
            target="_blank"
            rel="noopener noreferrer"
            className={classes.Link}
          >
            <h2 className={classes.BoxHeading}>Lapi Hotel System</h2>
          </a>
          <div className={classes.Languages}>
            <div className={classes.TSText}>TypeScript</div>
            <div className={classes.ReactText}>React</div>
            <div className={classes.RemixText}>Remix</div>
            <div className={classes.GraphqlText}>Graphql</div>
            <div className={classes.GoText}>Go</div>
            <div className={classes.CloudflareText}>Cloudflare</div>
            <div className={classes.Auth0Text}>Auth0</div>
          </div>
          <p>
            宅オフの実績を付けて特典を受けられるシステム。うちに誰か来たら使うかも？
          </p>

          <a
            href="https://github.com/dragoneena12/lapi-hotel-system"
            target="_blank"
            rel="noopener noreferrer"
            className={classes.Link}
          >
            <div className={classes.GithubText}>Github</div>
          </a>
        </div>

        <div className={classes.Box}>
          <a
            href="https://www.jmof.jp/"
            target="_blank"
            rel="noopener noreferrer"
            className={classes.Link}
          >
            <h2 className={classes.BoxHeading}>JMoF2022 Website</h2>
          </a>
          <p>公式Webサイトのフロントエンドコーディングを担当しました。</p>
        </div>

        <div className={classes.Box}>
          <h2 className={classes.BoxHeading}>Texias Hold&apos;em</h2>
          <div className={classes.Languages}>
            <div className={classes.TSText}>TypeScript</div>
            <div className={classes.ReactText}>React</div>
            <div className={classes.NextText}>Next.js</div>
            <div className={classes.PythonText}>Python3</div>
          </div>
          <p>
            簡単にテキサスホールデムのネット対戦を楽しめるアプリ。開発停止中…
          </p>

          <a
            href="https://github.com/dragoneena12/holdem-front"
            target="_blank"
            rel="noopener noreferrer"
            className={classes.Link}
          >
            <div className={classes.GithubText}>Github</div>
          </a>
        </div>

        <div className={classes.Box}>
          <h2 className={classes.BoxHeading}>FurPort</h2>
          <div className={classes.Languages}>
            <div className={classes.TSText}>TypeScript</div>
            <div className={classes.ReactText}>React</div>
            <div className={classes.RemixText}>Remix</div>
            <div className={classes.DenoText}>Deno</div>
            <div className={classes.CloudflareText}>Cloudflare</div>
            <div className={classes.AWSText}>AWS</div>
          </div>
          <p>
            ケモノ・Furryイベントの情報をまとめ、記録ができるアプリ。再開発中…
          </p>

          <a
            href="https://github.com/lapi-hotel-group/furport-front"
            target="_blank"
            rel="noopener noreferrer"
            className={classes.Link}
          >
            <div className={classes.GithubText}>Github</div>
          </a>
        </div>
      </div>
    </>
  );
};

export default Works;
