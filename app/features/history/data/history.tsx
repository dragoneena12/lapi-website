import * as tags from "@/features/history/utils/tags"

const historyResource = [
  {
    startDate: new Date(2021, 4, 29),
    endDate: new Date(2021, 4, 29),
    name: "Bick8",
    eventURL: "https://bick.jp/",
    imageURL: ["history/Bick8.jpg"],
    tags: [tags.TSUKIKUSA],
    description: (
      <div>
        <p>
          初の地元熊本イベント参加でした！森都心でやってた頃から行きたかったので行けてよかった！
        </p>
      </div>
    ),
  },

  {
    startDate: new Date(2021, 2, 27),
    endDate: new Date(2021, 2, 28),
    name: "Virtual Furry β",
    eventURL: "https://sites.google.com/view/virtualfurry",
    imageURL: [
      "history/VFbeta1.png",
      "history/VFbeta2.png",
      "history/VFbeta3.png",
    ],
    tags: [tags.VR],
    description: (
      <div>
        <p>
          ワールドを巡ったり、合わせて開催されていたバウワウナード集会に参加したりしました！
        </p>
      </div>
    ),
  },

  {
    startDate: new Date(2021, 0, 7),
    endDate: new Date(2021, 0, 10),
    name: "VR JMoF 2021",
    eventURL: "https://vr.jmof.jp/",
    imageURL: [
      "history/VRJMoF1.png",
      "history/VRJMoF2.png",
      "history/VRJMoF3.png",
    ],
    tags: [tags.VR],
    description: (
      <div>
        <p>夢喰もダイアちゃんもいて本当にJMoF気分でした！</p>
      </div>
    ),
  },

  {
    startDate: new Date(2020, 10, 21),
    endDate: new Date(2020, 10, 21),
    name: "けもケット9.5",
    eventURL: "http://skypalette.jp/kemoket/",
    imageURL: ["history/kemoket9_5.JPG"],
    tags: [tags.MARKET],
    description: (
      <div>
        <p>コロナの影響下で感染症対策に万全を期しながらのけもケットでした。</p>
        <p>
          会場内のスペースが広くとられており、また入場人数も制限されていたのでめちゃくちゃ快適でした。
        </p>
      </div>
    ),
  },

  {
    startDate: new Date(2020, 10, 7),
    endDate: new Date(2020, 10, 7),
    name: "Kemocon 13",
    eventURL: "https://www.kemocon.com/record/x-archive-kc13data/",
    imageURL: ["history/kemocon13-1.jpg", "history/kemocon13-2.jpg"],
    tags: [tags.TSUKIKUSA],
    description: (
      <div>
        <p>コロナの影響で会場が変わり、まさかの木更津開催でした！</p>
        <p>フェザドラちゃんVer2と会った！</p>
        <p>翌日は鴨川シーワールドでシャチ汁を浴びて帰りました。</p>
      </div>
    ),
  },

  {
    startDate: new Date(2020, 9, 21),
    endDate: new Date(2020, 9, 25),
    name: "K-LINE 『進化と/ /深化のケモノ展』",
    eventURL: "https://kemono-line.jp/event.html",
    imageURL: ["history/k-line2020.jpg"],
    tags: [],
    description: (
      <div>
        <p>クラウドファンディングが実施されたK-LINE展でした！</p>
        <p>クラファンリターンでルーフェンくんとツーショを撮りまくりました！</p>
      </div>
    ),
  },

  {
    startDate: new Date(2020, 9, 3),
    endDate: new Date(2020, 9, 4),
    name: "VR JMoF 2021 Prologue",
    eventURL: "https://vr.jmof.jp/",
    imageURL: [
      "history/VRJMoFPrologue1.png",
      "history/VRJMoFPrologue2.png",
      "history/VRJMoFPrologue3.png",
    ],
    tags: [tags.VR],
    description: (
      <div>
        <p>単独開催としては初？のVRJMoFでした！</p>
        <p>フェザドラちゃんとたくさんイチャイチャした</p>
      </div>
    ),
  },

  {
    startDate: new Date(2020, 7, 2),
    endDate: new Date(2020, 7, 2),
    name: "はつじゅー会 ～その８～",
    eventURL: "https://twipla.jp/events/449828",
    imageURL: ["history/hatsuju8.jpg"],
    tags: [],
    description: (
      <div>
        <p>徹夜で死にかけながら参加しました！</p>
        <p>フェザドラちゃんVersion1に遭遇</p>
      </div>
    ),
  },

  {
    startDate: new Date(2020, 2, 8),
    endDate: new Date(2020, 2, 8),
    name: "第1回ドラゴンフェスティバル",
    eventURL: "https://twipla.jp/events/414908",
    imageURL: ["history/drafes01.jpg"],
    tags: [tags.TSUKIKUSA, tags.STAFF],
    description: (
      <div>
        <p>ドラゴンがたくさんでたのしかった(^^)</p>
      </div>
    ),
  },

  {
    startDate: new Date(2020, 1, 22),
    endDate: new Date(2020, 1, 22),
    name: "以茶會毛 FurryTeaParty 2020",
    eventURL: "https://www.furryteaparty.com/",
    imageURL: ["history/furryteaparty2020.jpg"],
    tags: [tags.TSUKIKUSA, tags.OVERSEAS],
    description: (
      <div>
        <p>初めての台湾でした！</p>
      </div>
    ),
  },

  {
    startDate: new Date(2020, 1, 8),
    endDate: new Date(2020, 1, 8),
    name: "みけ☆こん　よんかいめ",
    eventURL: "http://aokazetei.com/mikecon/",
    imageURL: ["history/mikecon2020.JPG"],
    tags: [tags.TSUKIKUSA],
    description: (
      <div>
        <p>初みけこん＆初川崎市産業振興会館でした！</p>
      </div>
    ),
  },

  {
    startDate: new Date(2020, 0, 26),
    endDate: new Date(2020, 0, 26),
    name: "新春けもケット6",
    eventURL: "http://skypalette.jp/kemoket/shinkemo/index.html",
    imageURL: [],
    tags: [tags.MARKET],
    description: (
      <div>
        <p>参加サークル170スペース。久々の（？）一般参加でした。</p>
      </div>
    ),
  },

  {
    startDate: new Date(2020, 0, 10),
    endDate: new Date(2020, 0, 13),
    name: "JMoF 2020 ENERGY DRINK BITERS",
    eventURL: "http://www.jmof.jp",
    imageURL: [
      "history/jmof2020.jpg",
      "history/jmof2020_2.jpg",
      "history/jmof2020_3.jpg",
    ],
    tags: [tags.TSUKIKUSA, tags.STAFF],
    description: (
      <div>
        <p>はじめてのスタッフとしてのJMoF参加。</p>
        <p>
          Web班スタッフとしてバックエンドを担当しました。チーム開発てきなことをやったのは初めてでしたがいろいろ学べました。
        </p>
        <p>
          ひたすらダイアちゃんを追いかけてた記憶しかない。ダイアちゃんかわいい。あとTRIP
          FURも最高だった。
        </p>
      </div>
    ),
  },

  {
    startDate: new Date(2019, 11, 31),
    endDate: new Date(2020, 0, 1),
    name: "年越し会",
    eventURL: "",
    imageURL: [],
    tags: [tags.TSUKIKUSA],
    description: (
      <div>
        <p>
          ふぁり研メンバーで集まってスピノンハウスで年越し会しました。なつかし。
        </p>
      </div>
    ),
  },

  {
    startDate: new Date(2019, 11, 22),
    endDate: new Date(2019, 11, 22),
    name: "ダーツ交流会＋ばけもカップ",
    eventURL: "https://twipla.jp/events/414062",
    imageURL: ["history/darts2019_1.jpg", "history/darts2019_2.jpg"],
    tags: [tags.TSUKIKUSA],
    description: (
      <div>
        <p>
          おそらく初めてのケモノたちのダーツ大会でした。慣れたら意外と投げれた。
        </p>
      </div>
    ),
  },

  {
    startDate: new Date(2019, 11, 5),
    endDate: new Date(2019, 11, 8),
    name: "Midwest Furfest 2019",
    eventURL: "https://www.furfest.org/",
    imageURL: ["history/MFF2019_1.JPG", "history/MFF2019_2.JPG"],
    tags: [tags.TSUKIKUSA, tags.OVERSEAS],
    description: (
      <div>
        <p>初の海外コンベンションでした！</p>
        <p>
          ほとんど日本人がいなかったので英語を喋らざるを得なくずっとあたふたしてました。
        </p>
        <p>
          でも意外と日本語ができる人がいたり、アジア圏を中心にたくさん海外の友達ができたりとホントに刺激的で楽しかったです。
        </p>
      </div>
    ),
  },

  {
    startDate: new Date(2019, 10, 30),
    endDate: new Date(2019, 11, 1),
    name: "Kemocon 12",
    eventURL: "https://www.kemocon.com/kemocon12-data/",
    imageURL: [
      "history/kemocon12_1.JPG",
      "history/kemocon12_2.JPG",
      "history/kemocon12_3.JPG",
    ],
    tags: [tags.TSUKIKUSA],
    description: (
      <div>
        <p>3回目の大桟橋kemoconでした！</p>
        <p>
          この年はVR勢がたくさんいてとても新鮮な感じでした。バロンくんと会った。
        </p>
      </div>
    ),
  },

  {
    startDate: new Date(2019, 10, 22),
    endDate: new Date(2019, 10, 24),
    name: "第70回駒場祭「七変華」",
    eventURL: "https://www.komabasai.net/70/visitor/",
    imageURL: [
      "history/komasai2019_1.jpg",
      "history/komasai2019_2.jpg",
      "history/komasai2019_3.jpg",
    ],
    tags: [tags.TSUKIKUSA, tags.STAFF, tags.GREETING],
    description: (
      <div>
        <p>2回目の駒場祭出展でした！</p>
        <p>
          当日雨が降ってハンドリングが変わり大忙しになったのを覚えています。謎解き企画などの新企画に多数挑戦しました。
        </p>
        <p>当日はさとみさんとながたにさんに講演していただきました。</p>
      </div>
    ),
  },

  {
    startDate: new Date(2019, 10, 15),
    endDate: new Date(2019, 10, 18),
    name: "大阪オフ",
    eventURL: "",
    imageURL: ["history/oosaka2019_1.jpg"],
    tags: [tags.TSUKIKUSA],
    description: (
      <div>
        <p>
          <s>ダイアちゃんに会いに</s>撮影会のため大阪に行ってきました！
        </p>
        <p>ドレスダイアちゃんがかわいすぎる。</p>
      </div>
    ),
  },

  {
    startDate: new Date(2019, 10, 10),
    endDate: new Date(2019, 10, 10),
    name: "第3回 夢喰ポーカー会",
    eventURL: "https://twipla.jp/events/410531",
    imageURL: ["history/poker2019_1.jpg", "history/poker2019_2.jpg"],
    tags: [tags.TSUKIKUSA, tags.STAFF],
    description: (
      <div>
        <p>ポーカー会第3回目でした！</p>
        <p>僕がカードを配ると場が荒れるというジンクス。</p>
      </div>
    ),
  },

  {
    startDate: new Date(2019, 10, 9),
    endDate: new Date(2019, 10, 9),
    name: "DISCO　Human＆Kemono",
    eventURL: "https://twipla.jp/events/383149",
    imageURL: ["history/disco2019_1.jpg", "history/disco2019_2.jpg"],
    tags: [],
    description: (
      <div>
        <p>はじめてのディスコイベントでした！</p>
        <p>ほとんどの写真にくっしーさんが写ってる。とてもチャバい。</p>
      </div>
    ),
  },

  {
    startDate: new Date(2019, 9, 19),
    endDate: new Date(2019, 9, 19),
    name: "第2回橋本ケモノラウンジ",
    eventURL: "https://kemono-square.jp/about_hklounge.html",
    imageURL: [
      "history/kemoLounge2019_1.jpg",
      "history/kemoLounge2019_2.jpg",
    ],
    tags: [tags.TSUKIKUSA],
    description: (
      <div>
        <p>2回目のケモノラウンジでした！</p>
        <p>紺青くんと初遭遇。</p>
      </div>
    ),
  },

  {
    startDate: new Date(2019, 9, 13),
    endDate: new Date(2019, 9, 13),
    name: "うるコレ〜第弐夜〜",
    eventURL: "https://twipla.jp/events/383440",
    imageURL: ["history/wolfcole2019_1.jpg"],
    tags: [tags.TSUKIKUSA],
    description: (
      <div>
        <p>うるコレ初参加でした！</p>
        <p>
          大きなパネルがあったりなかなか手の込んだ謎解き企画があったりと総合的にイベントのクオリティが高く楽しかったです。
        </p>
      </div>
    ),
  },

  {
    startDate: new Date(2019, 8, 22),
    endDate: new Date(2019, 8, 23),
    name: "Osaka Furry Fun Festa",
    eventURL: "https://www.osakafff.com/",
    imageURL: [],
    tags: [tags.TSUKIKUSA],
    description: (
      <div>
        <p>
          おそらくJMoFに次ぐ2つ目のホテル併設会場型のイベント（コンベンション）となるイベントでした。
        </p>
        <p>
          関西けもケと同じ連休に開催されたこともあってかとても盛り上がっていた印象です。
        </p>
        <p>
          是非次回ももっと盛り上げて開催して欲しいと思います！（ダイアちゃんがかわいかった）
        </p>
      </div>
    ),
  },

  {
    startDate: new Date(2019, 8, 22),
    endDate: new Date(2019, 8, 22),
    name: "関西けもケット8",
    eventURL: "http://skypalette.jp/kemoket/",
    imageURL: [],
    tags: [tags.MARKET],
    description: (
      <div>
        <p>個人的には4回目に参加した関西けもケットになります！</p>
        <p>
          東京大学Furry研究会としてサークル参加し、五月祭で発行した部誌を販売させていただきました。
        </p>
      </div>
    ),
  },

  {
    startDate: new Date(2019, 7, 9),
    endDate: new Date(2019, 7, 12),
    name: "コミックマーケット96",
    eventURL: "https://www.comiket.co.jp/",
    imageURL: [],
    tags: [tags.MARKET],
    description: (
      <div>
        <p>東京オリンピックの影響で初の4日間開催となったコミケでした！</p>
        <p>
          10,11の2日間で一般参加しました。2日目の帰りにミライトワくんとソメイティちゃんを見てきました。
        </p>
      </div>
    ),
  },

  {
    startDate: new Date(2019, 7, 3),
    endDate: new Date(2019, 7, 3),
    name: "首都けも。",
    eventURL: "https://twipla.jp/events/367150",
    imageURL: [],
    tags: [tags.TSUKIKUSA],
    description: (
      <div>
        <p>初開催イベント「首都けも。」に参加してきました！</p>
        <p>
          始終まったりした雰囲気で気楽にゆっくりと楽しめました。こういうイベントはとても落ち着く…。
        </p>
      </div>
    ),
  },

  {
    startDate: new Date(2019, 6, 7),
    endDate: new Date(2019, 6, 7),
    name: "ケモノコネクト",
    eventURL: "https://twipla.jp/events/363136",
    imageURL: [],
    tags: [tags.TSUKIKUSA],
    description: (
      <div>
        <p>初開催イベント「ケモノコネクト」に参加してきました！</p>
        <p>
          初開催ながらステージパフォーマンスを取り入れるなど積極的な展開をしている印象でした。
        </p>
        <p>お絵かき欲が高くてひたすらじゃがにくんを描いていた</p>
      </div>
    ),
  },

  {
    startDate: new Date(2019, 5, 30),
    endDate: new Date(2019, 5, 30),
    name: "第2回 夢喰ポーカー会",
    eventURL: "https://twipla.jp/events/378006",
    imageURL: [],
    tags: [tags.TSUKIKUSA, tags.STAFF],
    description: (
      <div>
        <p>ポーカー会第2回目でした！</p>
        <p>
          楽器が置いてあったりと面白い会場でした。あとうちから近いので素晴らしい。
        </p>
        <p>
          1kgチーズピザを食べたりUberEatsでタピったりと宅オフライクでゆるふわな感じでした。
        </p>
      </div>
    ),
  },

  {
    startDate: new Date(2019, 5, 15),
    endDate: new Date(2019, 5, 15),
    name: "第3回伊達けも",
    eventURL: "https://twipla.jp/events/372772",
    imageURL: [],
    tags: [tags.TSUKIKUSA],
    description: (
      <div>
        <p>伊達けも初参加でした！</p>
        <p>和室メインの会場でとてもゆっくりできました。やはり和室はよい。</p>
        <p>
          仙台まで車で行ったのでドライブもなかなかに楽しかったです。ちなみに旅行最北端記録を更新しました。
        </p>
      </div>
    ),
  },

  {
    startDate: new Date(2019, 4, 25),
    endDate: new Date(2019, 4, 25),
    name: "小規模交流もふ会",
    eventURL: "https://twipla.jp/events/368696",
    imageURL: [],
    tags: [tags.TSUKIKUSA],
    description: (
      <div>
        <p>どら公さん主催の、レンタルスペースを使った小規模オフ会でした！</p>
        <p>和室でまったりできる雰囲気でとてもゆっくりできました。</p>
        <p>
          オフ後に横浜へリアル脱出ゲームをしに行ったのでヘビロテでした。ちなみに脱出ゲームではモニターを破壊しました。
        </p>
      </div>
    ),
  },

  {
    startDate: new Date(2019, 4, 18),
    endDate: new Date(2019, 4, 19),
    name: "第92回五月祭「〈おもしろい〉が、交差する。」",
    eventURL: "https://gogatsusai.jp/92/visitor/",
    imageURL: [],
    tags: [tags.TSUKIKUSA, tags.STAFF, tags.GREETING],
    description: (
      <div>
        <p>2回目の五月祭出展でした！</p>
        <p>
          部屋交渉の結果教育学部棟のラウンジを使わせていただけることになったのですが、ここがとても良いロケーションでグリーティングがやりやすかったです。
        </p>
        <p>ながたにさんにゲストとしてご講演いただきました。</p>
      </div>
    ),
  },

  {
    startDate: new Date(2019, 4, 3),
    endDate: new Date(2019, 4, 3),
    name: "第1回橋本ケモノラウンジ",
    eventURL: "https://kemono-square.jp/about_hklounge.html",
    imageURL: [],
    tags: [],
    description: (
      <div>
        <p>初開催の橋本ケモノラウンジに行ってきました！</p>
        <p>
          実はこの時家に親が来ていたのですがどうにか理由をつけて抜け出して来ましたw
        </p>
        <p>
          CLOVER
          HILLによるライブやヒョウガくんのジャグリングなどイベント盛り沢山で楽しかったです！
        </p>
      </div>
    ),
  },

  {
    startDate: new Date(2019, 3, 29),
    endDate: new Date(2019, 3, 29),
    name: "けもケット8",
    eventURL: "http://skypalette.jp/kemoket/",
    imageURL: [],
    tags: [tags.MARKET],
    description: (
      <div>
        <p>TRCでは3回目のけもケットでした！</p>
        <p>
          東京大学Furry研究会としてサークル参加し、2018年の五月祭・駒場祭で発行した部誌を販売させていただきました。
        </p>
      </div>
    ),
  },

  {
    startDate: new Date(2019, 3, 28),
    endDate: new Date(2019, 3, 28),
    name: "はつじゅー会 ～その６～",
    eventURL: "https://twipla.jp/events/355464",
    imageURL: [],
    tags: [tags.TSUKIKUSA],
    description: (
      <div>
        <p>通しでは6回目、四街道では3回目の開催となるはつじゅー会でした。</p>
        <p>シェルムくんが可愛くてひたすら愛でてました。</p>
      </div>
    ),
  },

  {
    startDate: new Date(2019, 3, 27),
    endDate: new Date(2019, 3, 27),
    name: "あふわ会",
    eventURL: "https://twipla.jp/events/363605",
    imageURL: [],
    tags: [tags.TSUKIKUSA],
    description: (
      <div>
        <p>あふけさん主催によるイベント、あふわ会に参加してきました！</p>
        <p>
          各々自由にもふったり喋ったりとまったりできる感じの雰囲気でとてもよかったです。ハンバーガーをたくさん食べた。
        </p>
      </div>
    ),
  },

  {
    startDate: new Date(2019, 3, 14),
    endDate: new Date(2019, 3, 14),
    name: "夢喰ポーカー会",
    eventURL: "https://twipla.jp/events/377211",
    imageURL: [],
    tags: [tags.TSUKIKUSA, tags.STAFF],
    description: (
      <div>
        <p>夢喰ポーカー会の初開催でした！</p>
        <p>桜上水のエモい感じのスペースで開催されました。近くて良い。</p>
        <p>シードくんが大層かわいかった。あとTwiplaの絵を描きました。</p>
      </div>
    ),
  },

  {
    startDate: new Date(2019, 2, 2),
    endDate: new Date(2019, 2, 2),
    name: "遊び空間！彩国ぷちもふ！",
    eventURL: "https://twipla.jp/events/361601",
    imageURL: [],
    tags: [tags.TSUKIKUSA],
    description: (
      <div>
        <p>
          いつもミニもふをやっている会場で遊び特化のイベントが開催されていました！
        </p>
        <p>
          なんだかんだ雰囲気はいつものミニもふでしたが、セイルさんと共同主催ということもありダーツが盛り上がっていました。
        </p>
      </div>
    ),
  },

  {
    startDate: new Date(2019, 0, 27),
    endDate: new Date(2019, 0, 27),
    name: "新春けもケット5",
    eventURL: "http://skypalette.jp/kemoket/shinkemo/index.html",
    imageURL: [],
    tags: [tags.MARKET],
    description: (
      <div>
        <p>参加サークル170スペース。2回目のカタログ入れ替え制開催でした。</p>
      </div>
    ),
  },

  {
    startDate: new Date(2019, 0, 11),
    endDate: new Date(2019, 0, 13),
    name: "JMoF 2019 The Dogfather",
    eventURL: "https://www.jmof.jp/",
    imageURL: [],
    tags: [tags.TSUKIKUSA],
    description: (
      <div>
        <p>3年目のJMoF参加となりました！</p>
        <p>
          アルツさんのクイズ企画に参加したり、ダイアちゃんの写真を死ぬほど撮ったりしました。
        </p>
      </div>
    ),
  },

  {
    startDate: new Date(2018, 11, 9),
    endDate: new Date(2018, 11, 9),
    name: "JCF in としまえん",
    eventURL: "http://takama.ne.jp/jcf/",
    imageURL: [],
    tags: [tags.TSUKIKUSA, tags.GREETING],
    description: (
      <div>
        <p>初のJCF in としまえん参加でした！</p>
        <p>
          遊園地でキャラを出すというのが初体験で面白かったです。なかなかイベントとかでは会わない人ととも会えました。
        </p>
      </div>
    ),
  },

  {
    startDate: new Date(2018, 10, 23),
    endDate: new Date(2018, 10, 25),
    name: "第69回駒場祭「はい、ちーず」",
    eventURL: "https://www.komabasai.net/69/visitor/",
    imageURL: [],
    tags: [tags.TSUKIKUSA, tags.STAFF, tags.GREETING],
    description: (
      <div>
        <p>初の駒場祭出展でした！</p>
        <p>3日間だからたいへんでした！</p>
      </div>
    ),
  },

  {
    startDate: new Date(2018, 10, 3),
    endDate: new Date(2018, 10, 4),
    name: "Kemocon 11",
    eventURL: "https://www.kemocon.com/record/kemocon11rpg/",
    imageURL: [],
    tags: [tags.TSUKIKUSA],
    description: (
      <div>
        <p>大さん橋2回目のKemoconでした！</p>
        <p>ふぁり研メンバーでたくさんあそびました！</p>
      </div>
    ),
  },

  {
    startDate: new Date(2018, 8, 23),
    endDate: new Date(2018, 8, 23),
    name: "関西けもケット7",
    eventURL: "http://skypalette.jp/kemoket/",
    imageURL: [],
    tags: [tags.MARKET],
    description: (
      <div>
        <p>3回目の関けもでした！</p>
        <p>多分一般参加をした？？？きがします。</p>
      </div>
    ),
  },

  {
    startDate: new Date(2018, 7, 10),
    endDate: new Date(2018, 7, 12),
    name: "コミックマーケット94",
    eventURL: "https://www.comiket.co.jp/",
    imageURL: [],
    tags: [tags.MARKET],
    description: (
      <div>
        <p>なにもおぼえてない！</p>
      </div>
    ),
  },

  {
    startDate: new Date(2018, 7, 5),
    endDate: new Date(2018, 7, 5),
    name: "彩国ミニもふ８ 後の陣",
    eventURL: "https://twipla.jp/events/316196",
    imageURL: [],
    tags: [tags.TSUKIKUSA],
    description: (
      <div>
        <p>2度目の2日連続開催ミニもふ、後半戦の参加でした！</p>
        <p>ちゃまさんとえまちんが面白すぎて無限に撮ってた。</p>
      </div>
    ),
  },

  {
    startDate: new Date(2018, 6, 14),
    endDate: new Date(2018, 6, 14),
    name: "けものボックスin愛知第７回",
    eventURL: "https://twipla.jp/events/306166",
    imageURL: [],
    tags: [tags.TSUKIKUSA],
    description: (
      <div>
        <p>けものボックス初参加でした！</p>
        <p>（たぶん）喫茶マウンテンとコメダ珈琲に行きました！</p>
      </div>
    ),
  },

  {
    startDate: new Date(2018, 4, 19),
    endDate: new Date(2018, 4, 20),
    name: "第91回五月祭「渦を巻く」",
    eventURL: "https://gogatsusai.jp/91/visitor/",
    imageURL: [],
    tags: [tags.TSUKIKUSA, tags.STAFF, tags.GREETING],
    description: (
      <div>
        <p>初めての五月祭出展でした！</p>
        <p>
          たくさんサークルに興味を持った人が来てくれてとてもうれしかったです。
        </p>
      </div>
    ),
  },

  {
    startDate: new Date(2018, 3, 30),
    endDate: new Date(2018, 3, 30),
    name: "けもケット7",
    eventURL: "http://skypalette.jp/kemoket/",
    imageURL: [],
    tags: [tags.MARKET, tags.STAFF],
    description: (
      <div>
        <p>TRCで2回目のけもケットでした！</p>
        <p>スタッフをしてたかもしれません！</p>
      </div>
    ),
  },

  {
    startDate: new Date(2018, 3, 8),
    endDate: new Date(2018, 3, 8),
    name: "彩国ミニもふ７ 後の陣",
    eventURL: "https://twipla.jp/events/298797",
    imageURL: [],
    tags: [tags.TSUKIKUSA],
    description: (
      <div>
        <p>初の2日連続開催ミニもふ、後半戦の参加でした！</p>
      </div>
    ),
  },

  {
    startDate: new Date(2018, 3, 7),
    endDate: new Date(2018, 3, 7),
    name: "彩国ミニもふ７ 前の陣",
    eventURL: "https://twipla.jp/events/298786",
    imageURL: [],
    tags: [tags.TSUKIKUSA],
    description: (
      <div>
        <p>初の2日連続開催ミニもふ、前半戦の参加でした！</p>
      </div>
    ),
  },

  {
    startDate: new Date(2018, 2, 21),
    endDate: new Date(2018, 2, 21),
    name: "第2回 ささころオフ",
    eventURL: "https://twipla.jp/events/297436",
    imageURL: [],
    tags: [tags.TSUKIKUSA],
    description: (
      <div>
        <p>2回目のささころオフ参加でした！</p>
      </div>
    ),
  },

  {
    startDate: new Date(2018, 0, 26),
    endDate: new Date(2018, 0, 26),
    name: "シャーベットと撮影しよう！",
    eventURL: "https://twipla.jp/events/298044",
    imageURL: [],
    tags: [],
    description: (
      <div>
        <p>シャーベットさん主催の撮影会でした！</p>
        <p>初めてとても良い環境で撮影ができました。</p>
      </div>
    ),
  },

  {
    startDate: new Date(2018, 0, 21),
    endDate: new Date(2018, 0, 21),
    name: "新春けもケット4",
    eventURL: "http://skypalette.jp/kemoket/shinkemo/index.html",
    imageURL: [],
    tags: [tags.MARKET],
    description: (
      <div>
        <p>参加サークル194スペース。初のカタログ入れ替え制開催でした。</p>
      </div>
    ),
  },

  {
    startDate: new Date(2018, 0, 13),
    endDate: new Date(2018, 0, 13),
    name: "K-LINE展",
    eventURL: "https://kemono-line.jp/",
    imageURL: [],
    tags: [],
    description: (
      <div>
        <p>2018年のK-LINE展に参加してきました！</p>
        <p>ゆめくいがいました！</p>
      </div>
    ),
  },

  {
    startDate: new Date(2018, 0, 5),
    endDate: new Date(2018, 0, 7),
    name: "JMoF2018 JMoF以外全部沈没",
    eventURL: "https://www.jmof.jp/",
    imageURL: [],
    tags: [tags.TSUKIKUSA],
    description: (
      <div>
        <p>2回目のJMoF参加でした！テーマがヤバい。</p>
        <p>動画作品がつよかったです。</p>
      </div>
    ),
  },
]

export default historyResource
