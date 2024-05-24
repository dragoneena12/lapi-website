const data = `
<?xml version="1.0" encoding="UTF-8"?><rss xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:content="http://purl.org/rss/1.0/modules/content/" xmlns:atom="http://www.w3.org/2005/Atom" version="2.0"><channel><title><![CDATA[Lapiさんのフィード]]></title><description><![CDATA[ZennのLapiさん（@lapi）のRSSフィードです]]></description><link>https://zenn.dev/lapi</link><image><url>https://storage.googleapis.com/zenn-user-upload/avatar/508ca52c42.jpeg</url><title>Lapiさんのフィード</title><link>https://zenn.dev/lapi</link></image><generator>zenn.dev</generator><lastBuildDate>Tue, 12 Mar 2024 16:01:02 GMT</lastBuildDate><atom:link href="https://zenn.dev/lapi/feed" rel="self" type="application/rss+xml"/><language><![CDATA[ja]]></language><item><title><![CDATA[DMX512を使ってテープライトを制御してみる]]></title><description><![CDATA[
 はじめに
こんにちは、Lapi（@dragoneena12）です。ステージ照明って良いですよね。でも機材がないので自作してみました。

備忘録も兼ねて作り方を書いていこうと思います！

 材料



材料名（リンクは参考）
価格
用途等




Arduino Nano Every
2,360
DMX信号を受信してテープライトに信号を送る。ATmega328Pとかを使えばもっと安くなるはず。


LTC485CN8
250
RS485トランシーバ。


USB-DMX インターフェースケーブル
2,399
PCからDMX信号を出力する。


XLR オスコネクタ
520
キャノンコネ...]]></description><link>https://zenn.dev/lapi/articles/2023-12-28-dmx-ws2812</link><guid isPermaLink="true">https://zenn.dev/lapi/articles/2023-12-28-dmx-ws2812</guid><pubDate>Wed, 27 Dec 2023 17:08:24 GMT</pubDate><enclosure url="https://res.cloudinary.com/zenn/image/upload/s--mapFjQFd--/c_fit%2Cg_north_west%2Cl_text:notosansjp-medium.otf_55:DMX512%25E3%2582%2592%25E4%25BD%25BF%25E3%2581%25A3%25E3%2581%25A6%25E3%2583%2586%25E3%2583%25BC%25E3%2583%2597%25E3%2583%25A9%25E3%2582%25A4%25E3%2583%2588%25E3%2582%2592%25E5%2588%25B6%25E5%25BE%25A1%25E3%2581%2597%25E3%2581%25A6%25E3%2581%25BF%25E3%2582%258B%2Cw_1010%2Cx_90%2Cy_100/g_south_west%2Cl_text:notosansjp-medium.otf_37:Lapi%2Cx_203%2Cy_121/g_south_west%2Ch_90%2Cl_fetch:aHR0cHM6Ly9zdG9yYWdlLmdvb2dsZWFwaXMuY29tL3plbm4tdXNlci11cGxvYWQvYXZhdGFyLzUwOGNhNTJjNDIuanBlZw==%2Cr_max%2Cw_90%2Cx_87%2Cy_95/v1627283836/default/og-base-w1200-v2.png" length="0" type="image/png"/><dc:creator>Lapi</dc:creator></item><item><title><![CDATA[2023年CKA受験体験記]]></title><description><![CDATA[
 はじめに
こんにちは、Lapi（@dragoneena12）です。
2023年7月にCKA(Certified Kubernetes Administrator)を受験し、合格したので受験体験記を書いておこうと思います。

 受験申し込み
LinuxFoundationの公式サイトより申し込みをしました。通常の英語版で申し込みました。
https://training.linuxfoundation.org/ja/certification/certified-kubernetes-administrator-cka
実は申し込みから受験までかなり時間が空いてしまったのですが、1年く...]]></description><link>https://zenn.dev/lapi/articles/2023-07-20-cka</link><guid isPermaLink="true">https://zenn.dev/lapi/articles/2023-07-20-cka</guid><pubDate>Thu, 20 Jul 2023 14:53:02 GMT</pubDate><enclosure url="https://res.cloudinary.com/zenn/image/upload/s--fe8Vx3qN--/c_fit%2Cg_north_west%2Cl_text:notosansjp-medium.otf_55:2023%25E5%25B9%25B4CKA%25E5%258F%2597%25E9%25A8%2593%25E4%25BD%2593%25E9%25A8%2593%25E8%25A8%2598%2Cw_1010%2Cx_90%2Cy_100/g_south_west%2Cl_text:notosansjp-medium.otf_37:Lapi%2Cx_203%2Cy_121/g_south_west%2Ch_90%2Cl_fetch:aHR0cHM6Ly9zdG9yYWdlLmdvb2dsZWFwaXMuY29tL3plbm4tdXNlci11cGxvYWQvYXZhdGFyLzUwOGNhNTJjNDIuanBlZw==%2Cr_max%2Cw_90%2Cx_87%2Cy_95/v1627283836/default/og-base-w1200-v2.png" length="0" type="image/png"/><dc:creator>Lapi</dc:creator></item><item><title><![CDATA[WSL2 から Vagrant-Virtualbox を動かす]]></title><description><![CDATA[
 はじめに
こんにちは、Lapi（@dragoneena12）です。
Vagrant-Virtualbox を WSL2 から動かしたいなと思ったのですが、意外としっかりした情報がなくて若干詰まったので大事なことだけまとめておきます。
WSL2 環境がある前提です。

 1. Vagrant のインストール
Windows と WSL2 の両方に同じバージョンの Vagrant をインストールする必要があります。
Windows は普通にインストーラから、WSL2 は Debian の項にある debian package を下記コマンドでインストールするのがオススメです。
$ dpk...]]></description><link>https://zenn.dev/lapi/articles/2021-06-10-vagrant_wsl2</link><guid isPermaLink="true">https://zenn.dev/lapi/articles/2021-06-10-vagrant_wsl2</guid><pubDate>Thu, 10 Jun 2021 03:18:11 GMT</pubDate><enclosure url="https://res.cloudinary.com/zenn/image/upload/s--u92sc2um--/c_fit%2Cg_north_west%2Cl_text:notosansjp-medium.otf_55:WSL2%2520%25E3%2581%258B%25E3%2582%2589%2520Vagrant-Virtualbox%2520%25E3%2582%2592%25E5%258B%2595%25E3%2581%258B%25E3%2581%2599%2Cw_1010%2Cx_90%2Cy_100/g_south_west%2Cl_text:notosansjp-medium.otf_37:Lapi%2Cx_203%2Cy_121/g_south_west%2Ch_90%2Cl_fetch:aHR0cHM6Ly9zdG9yYWdlLmdvb2dsZWFwaXMuY29tL3plbm4tdXNlci11cGxvYWQvYXZhdGFyLzUwOGNhNTJjNDIuanBlZw==%2Cr_max%2Cw_90%2Cx_87%2Cy_95/v1627283836/default/og-base-w1200-v2.png" length="0" type="image/png"/><dc:creator>Lapi</dc:creator></item><item><title><![CDATA[pquerna/otpを使いGoでワンタイムパスワード認証するチュートリアル]]></title><description><![CDATA[
 はじめに
こんにちは、Lapi（@dragoneena12）です。
趣味でGoを使って作成しているサービスでワンタイムパスワード（OTP）を実装したので、備忘録がてらやり方を書いておこうと思います。結構簡単に作れるので、OTPを組み込んだシステム作って遊んでみてください！
バージョン情報

Go v1.16.4
pquerna/otp v1.3.0


 OTPとは？
いろんなサービスの多要素認証（MFA）やGoogle Authenticatorなんかでおなじみの人も多いであろう6桁の数字が表示される一時的なパスワードです。HOTPやTOTPといった種類があるのですが、詳しくは こ...]]></description><link>https://zenn.dev/lapi/articles/2021-06-04-otp_tutorial</link><guid isPermaLink="true">https://zenn.dev/lapi/articles/2021-06-04-otp_tutorial</guid><pubDate>Mon, 07 Jun 2021 09:28:43 GMT</pubDate><enclosure url="https://res.cloudinary.com/zenn/image/upload/s--j07Jh3B_--/c_fit%2Cg_north_west%2Cl_text:notosansjp-medium.otf_55:pquerna%252Fotp%25E3%2582%2592%25E4%25BD%25BF%25E3%2581%2584Go%25E3%2581%25A7%25E3%2583%25AF%25E3%2583%25B3%25E3%2582%25BF%25E3%2582%25A4%25E3%2583%25A0%25E3%2583%2591%25E3%2582%25B9%25E3%2583%25AF%25E3%2583%25BC%25E3%2583%2589%25E8%25AA%258D%25E8%25A8%25BC%25E3%2581%2599%25E3%2582%258B%25E3%2583%2581%25E3%2583%25A5%25E3%2583%25BC%25E3%2583%2588%25E3%2583%25AA%25E3%2582%25A2%25E3%2583%25AB%2Cw_1010%2Cx_90%2Cy_100/g_south_west%2Cl_text:notosansjp-medium.otf_37:Lapi%2Cx_203%2Cy_121/g_south_west%2Ch_90%2Cl_fetch:aHR0cHM6Ly9zdG9yYWdlLmdvb2dsZWFwaXMuY29tL3plbm4tdXNlci11cGxvYWQvYXZhdGFyLzUwOGNhNTJjNDIuanBlZw==%2Cr_max%2Cw_90%2Cx_87%2Cy_95/v1627283836/default/og-base-w1200-v2.png" length="0" type="image/png"/><dc:creator>Lapi</dc:creator></item><item><title><![CDATA[istioのメトリクス(Custom Metrics)を使ってHPA(Horizontal Pod Autoscaler)を設定する]]></title><description><![CDATA[こんにちは、Lapi（@dragoneena12）です。
最近SREインターンをさせていただいている株式会社HERPさんで、istioのメトリクス（custom metrics）をもとにHPAを設定する機会があったのですが、特に日本語だとなかなか情報が限定的だったので記事を書いてみました。できるだけ詳しく書いたので、参考になると幸いです。

 HPAで使うメトリクスの種類
HPAは何らかのメトリクス値をもとにPod数を自動的に増減させる機能です。使えるメトリクスには以下の3種類があります（Support for metrics APIs | Horizontal Pod Autoscal...]]></description><link>https://zenn.dev/lapi/articles/e7ae967aa5161b</link><guid isPermaLink="true">https://zenn.dev/lapi/articles/e7ae967aa5161b</guid><pubDate>Tue, 09 Feb 2021 12:25:16 GMT</pubDate><enclosure url="https://res.cloudinary.com/zenn/image/upload/s--qqY-GmQR--/c_fit%2Cg_north_west%2Cl_text:notosansjp-medium.otf_55:istio%25E3%2581%25AE%25E3%2583%25A1%25E3%2583%2588%25E3%2583%25AA%25E3%2582%25AF%25E3%2582%25B9%2528Custom%2520Metrics%2529%25E3%2582%2592%25E4%25BD%25BF%25E3%2581%25A3%25E3%2581%25A6HPA%2528Horizontal%2520Pod%2520Autosca...%2Cw_1010%2Cx_90%2Cy_100/g_south_west%2Cl_text:notosansjp-medium.otf_37:Lapi%2Cx_203%2Cy_121/g_south_west%2Ch_90%2Cl_fetch:aHR0cHM6Ly9zdG9yYWdlLmdvb2dsZWFwaXMuY29tL3plbm4tdXNlci11cGxvYWQvYXZhdGFyLzUwOGNhNTJjNDIuanBlZw==%2Cr_max%2Cw_90%2Cx_87%2Cy_95/v1627283836/default/og-base-w1200-v2.png" length="0" type="image/png"/><dc:creator>Lapi</dc:creator></item><item><title><![CDATA[サイバーエージェントの「おうちKubernetesインターン」に参加しました！]]></title><description><![CDATA[こんにちは、Lapi（@dragoneena12）です。
9/24-30で行われた 2020年おうちKubernetesインターンに参加してきたので、内容や感想を紹介したいと思います。


 参加するまで
僕自身これまでインターンに参加したことがなかったのでそろそろ参加してみたいと思い探してみたところ、こちらのKubernetesインターンが目に止まりました。前々からインフラは好きで自宅サーバー等構築してはいたのですが、Kubernetesとなるとクラスタ環境を用意するなど費用がかかるということでなかなか踏み出せずにいました。そこで RaspberryPi4を3台ももらえるというこのイン...]]></description><link>https://zenn.dev/lapi/articles/145d76743e809439ffb7</link><guid isPermaLink="true">https://zenn.dev/lapi/articles/145d76743e809439ffb7</guid><pubDate>Fri, 02 Oct 2020 10:50:00 GMT</pubDate><enclosure url="https://res.cloudinary.com/zenn/image/upload/s--iLxbJklV--/c_fit%2Cg_north_west%2Cl_text:notosansjp-medium.otf_55:%25E3%2582%25B5%25E3%2582%25A4%25E3%2583%2590%25E3%2583%25BC%25E3%2582%25A8%25E3%2583%25BC%25E3%2582%25B8%25E3%2582%25A7%25E3%2583%25B3%25E3%2583%2588%25E3%2581%25AE%25E3%2580%258C%25E3%2581%258A%25E3%2581%2586%25E3%2581%25A1Kubernetes%25E3%2582%25A4%25E3%2583%25B3%25E3%2582%25BF%25E3%2583%25BC%25E3%2583%25B3%25E3%2580%258D%25E3%2581%25AB%25E5%258F%2582%25E5%258A%25A0%25E3%2581%2597%25E3%2581%25BE%25E3%2581%2597%25E3%2581%259F%25EF%25BC%2581%2Cw_1010%2Cx_90%2Cy_100/g_south_west%2Cl_text:notosansjp-medium.otf_37:Lapi%2Cx_203%2Cy_121/g_south_west%2Ch_90%2Cl_fetch:aHR0cHM6Ly9zdG9yYWdlLmdvb2dsZWFwaXMuY29tL3plbm4tdXNlci11cGxvYWQvYXZhdGFyLzUwOGNhNTJjNDIuanBlZw==%2Cr_max%2Cw_90%2Cx_87%2Cy_95/v1627283836/default/og-base-w1200-v2.png" length="0" type="image/png"/><dc:creator>Lapi</dc:creator></item></channel></rss>
`
export default data
