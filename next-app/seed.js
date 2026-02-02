const Database = require('better-sqlite3');
const db = new Database('./data/news.db');

const categories = [
    { id: 1, name: 'カフェ', icon: 'Coffee', color: '#D2977C' },
    { id: 2, name: '動物', icon: 'PawPrint', color: '#F3A683' },
    { id: 3, name: 'おでかけ', icon: 'Car', color: '#5EA754' },
    { id: 4, name: '今週の話題', icon: 'Clock', color: '#EBA388' },
    { id: 5, name: 'ちょっと未来', icon: 'Sparkles', color: '#68A76E' },
];

const news = [
    // --- カフェ (6件) ---
    {
        name: 'カフェ',
        location: '名古屋駅から徒歩10分',
        description: '名古屋駅に、新しくスターバックスがオープンしました。\n本屋と併設されており、落ち着いた時間を過ごせます。',
        category: 'カフェ,ショッピング',
        imageUrl: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80',
        latitude: 35.170915,
        longitude: 136.881537
    },
    {
        name: 'カフェ',
        location: '大須観音',
        description: '大須商店街の路地裏に「古民家カフェ」が誕生。\n昭和レトロな雰囲気で、自家製プリンが絶品です。',
        category: 'カフェ,レトロ,スイーツ',
        imageUrl: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80',
        latitude: 35.160,
        longitude: 136.900
    },
    {
        name: 'カフェ',
        location: '覚王山',
        description: '覚王山にフルーツタルト専門店がオープン。\n旬のフルーツをふんだんに使ったタルトは手土産にも最適。',
        category: 'カフェ,スイーツ',
        imageUrl: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&w=800&q=80',
        latitude: 35.168,
        longitude: 136.950
    },
    {
        name: 'カフェ',
        location: '本山',
        description: '本山の隠れ家ブックカフェ。\n壁一面の本棚に囲まれて、静かな読書タイムを楽しめます。',
        category: 'カフェ,本',
        imageUrl: 'https://images.unsplash.com/photo-1506097425191-7ad538b29cef?auto=format&fit=crop&w=800&q=80',
        latitude: 35.163,
        longitude: 136.963
    },
    {
        name: 'カフェ',
        location: '金山',
        description: '金山駅直結のベーカリーカフェ。\n焼きたてのクロワッサンとこだわりのコーヒーで贅沢な朝食を。',
        category: 'カフェ,パン',
        imageUrl: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80',
        latitude: 35.143,
        longitude: 136.901
    },
    {
        name: 'カフェ',
        location: '星が丘',
        description: '星が丘テラスに紅茶専門店がオープン。\n世界各国の紅茶とアフタヌーンティーセットが楽しめます。',
        category: 'カフェ,紅茶',
        imageUrl: 'https://images.unsplash.com/photo-1594489689842-88775438840b?auto=format&fit=crop&w=800&q=80',
        latitude: 35.162,
        longitude: 136.986
    },

    // --- 動物 (6件) ---
    {
        name: '動物',
        location: '栄駅からスグ',
        description: '栄に新しく「うさぎカフェ」がオープン！\nもふもふのうさぎ達と触れ合って癒やされませんか？',
        category: '動物,カフェ',
        imageUrl: 'https://images.unsplash.com/photo-1591382386627-349b692688ff?auto=format&fit=crop&w=800&q=80',
        latitude: 35.169123,
        longitude: 136.908887
    },
    {
        name: '動物',
        location: '東山動植物園',
        description: '東山動植物園でイケメンゴリラ「シャバーニ」が大人気。\n新しい展示エリアも完成し、週末は家族連れで賑わっています。',
        category: '動物,おでかけ',
        imageUrl: 'https://images.unsplash.com/photo-1548545812-78d1672322a3?auto=format&fit=crop&w=800&q=80',
        latitude: 35.157,
        longitude: 136.975
    },
    {
        name: '動物',
        location: '大須',
        description: '猫カフェ「にゃんこ茶屋」がリニューアル。\n保護猫たちの譲渡会も定期的に開催されています。',
        category: '動物,ボランティア',
        imageUrl: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=800&q=80',
        latitude: 35.159,
        longitude: 136.902
    },
    {
        name: '動物',
        location: '熱田神宮周辺',
        description: '珍しいフクロウカフェが登場。\n様々な種類のフクロウと写真撮影ができると話題です。',
        category: '動物,カフェ',
        imageUrl: 'https://images.unsplash.com/photo-1512821216652-33ff539e083f?auto=format&fit=crop&w=800&q=80',
        latitude: 35.125,
        longitude: 136.909
    },
    {
        name: '動物',
        location: '長久手',
        description: '愛・地球博記念公園近くでアルパカ牧場体験。\nふわふわのアルパカに餌やり体験ができます。',
        category: '動物,自然',
        imageUrl: 'https://images.unsplash.com/photo-1533514114760-43846ba72741?auto=format&fit=crop&w=800&q=80',
        latitude: 35.176,
        longitude: 137.060
    },
    {
        name: '動物',
        location: '南知多',
        description: '南知多ビーチランドでペンギンのお散歩イベント。\nよちよち歩く可愛いペンギンたちを間近で見られます。',
        category: '動物,海',
        imageUrl: 'https://images.unsplash.com/photo-1598439210625-5067c578f3f6?auto=format&fit=crop&w=800&q=80',
        latitude: 34.782,
        longitude: 136.848
    },

    // --- おでかけ (6件) ---
    {
        name: 'おでかけ',
        location: '鶴舞公園',
        description: '春のピクニック日和。\n鶴舞公園で週末マルシェが開催されます。美味しいキッチンカーが大集合！',
        category: 'おでかけ,グルメ',
        imageUrl: 'https://images.unsplash.com/photo-1574068468668-a29927cb7e1e?auto=format&fit=crop&w=800&q=80',
        latitude: 35.1555,
        longitude: 136.9205
    },
    {
        name: 'おでかけ',
        location: '名古屋港水族館',
        description: '名古屋港水族館でナイトショー開催。\nイルカたちの幻想的なパフォーマンスを夜の水族館で楽しめます。',
        category: 'おでかけ,夜景',
        imageUrl: 'https://images.unsplash.com/photo-1582201959114-1ee518835e32?auto=format&fit=crop&w=800&q=80',
        latitude: 35.090,
        longitude: 136.878
    },
    {
        name: 'おでかけ',
        location: 'レゴランド',
        description: 'レゴランド・ジャパンで新アトラクションが登場！\n子供も大人も楽しめる忍者修行エリアを体験しよう。',
        category: 'おでかけ,テーマパーク',
        imageUrl: 'https://images.unsplash.com/photo-1560963689-093a2e7c1bb3?auto=format&fit=crop&w=800&q=80',
        latitude: 35.050,
        longitude: 136.845
    },
    {
        name: 'おでかけ',
        location: 'オアシス21',
        description: 'オアシス21「水の宇宙船」がライトアップ。\nフォトジェニックな夜景スポットとしてカップルに人気。',
        category: 'おでかけ,夜景',
        imageUrl: 'https://images.unsplash.com/photo-1565507973030-cf2f51199327?auto=format&fit=crop&w=800&q=80',
        latitude: 35.171,
        longitude: 136.909
    },
    {
        name: 'おでかけ',
        location: '則武の森',
        description: 'ノリタケの森でアンティーク食器市。\n緑豊かな赤レンガ倉庫の敷地で掘り出し物を探そう。',
        category: 'おでかけ,ショッピング',
        imageUrl: 'https://images.unsplash.com/photo-1596706982928-86d49822a101?auto=format&fit=crop&w=800&q=80',
        latitude: 35.179,
        longitude: 136.883
    },
    {
        name: 'おでかけ',
        location: '白鳥庭園',
        description: '白鳥庭園で秋の紅葉ライトアップ。\n美しい日本庭園と紅葉のコントラストは圧巻です。',
        category: 'おでかけ,自然',
        imageUrl: 'https://images.unsplash.com/photo-1510797215324-95aa89f43c33?auto=format&fit=crop&w=800&q=80',
        latitude: 35.126,
        longitude: 136.904
    },

    // --- 今週の話題 (6件) ---
    {
        name: '今週の話題',
        location: '久屋大通',
        description: '久屋大通パークで「パン祭り」開催中！\n全国の人気ベーカリーが名古屋に集結しています。',
        category: '今週の話題,グルメ',
        imageUrl: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80',
        latitude: 35.1765,
        longitude: 136.9085
    },
    {
        name: '今週の話題',
        location: 'ナゴヤドーム',
        description: '人気アーティストのライブツアーがついに名古屋へ。\n周辺ホテルや飲食店も歓迎ムードで盛り上がっています。',
        category: '今週の話題,音楽',
        imageUrl: 'https://images.unsplash.com/photo-1459749411177-275307bbc05c?auto=format&fit=crop&w=800&q=80',
        latitude: 35.185,
        longitude: 136.947
    },
    {
        name: '今週の話題',
        location: '名駅地下',
        description: '名駅地下街に巨大なデジタルアートが出現。\nSNS映えスポットとして若者を中心に話題沸騰中です。',
        category: '今週の話題,アート',
        imageUrl: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&w=800&q=80',
        latitude: 35.170,
        longitude: 136.882
    },
    {
        name: '今週の話題',
        location: '栄・広小路通',
        description: '名古屋まつりのパレード開催日時が決定！\n英傑行列を見ようと沿道には朝から場所取りの列が。',
        category: '今週の話題,お祭り',
        imageUrl: 'https://images.unsplash.com/photo-1533727937480-da3a97967e95?auto=format&fit=crop&w=800&q=80',
        latitude: 35.168,
        longitude: 136.908
    },
    {
        name: '今週の話題',
        location: '伏見',
        description: '新しい科学ミュージアムの入場者数が10万人突破。\n体験型の展示が子供たちの知的好奇心を刺激しています。',
        category: '今週の話題,教育',
        imageUrl: 'https://images.unsplash.com/photo-1566415759381-d1f506871576?auto=format&fit=crop&w=800&q=80',
        latitude: 35.166,
        longitude: 136.900
    },
    {
        name: '今週の話題',
        location: '瑞穂区',
        description: '地元高校の野球部が甲子園出場決定！\n商店街では祝賀セールが行われ、街全体が喜びに包まれています。',
        category: '今週の話題,スポーツ',
        imageUrl: 'https://images.unsplash.com/photo-1568284561858-a40ce2407632?auto=format&fit=crop&w=800&q=80',
        latitude: 35.120,
        longitude: 136.935
    },

    // --- ちょっと未来 (6件) ---
    {
        name: 'ちょっと未来',
        location: '名古屋市科学館',
        description: '最新のプラネタリウムプログラムが開始。\nAIが解説する星空ツアーで、未来の宇宙旅行を体験しよう。',
        category: 'ちょっと未来,おでかけ',
        imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80',
        latitude: 35.165,
        longitude: 136.899
    },
    {
        name: 'ちょっと未来',
        location: '栄',
        description: '自動運転バスの公道実験がスタート。\n栄エリアをゆっくり走行する未来の乗り物に試乗できます。',
        category: 'ちょっと未来,テクノロジー',
        imageUrl: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80',
        latitude: 35.168,
        longitude: 136.908
    },
    {
        name: 'ちょっと未来',
        location: '名駅',
        description: '完全無人のコンビニ「Future Mart」がオープン。\n顔認証決済でスムーズにお買い物が楽しめます。',
        category: 'ちょっと未来,ショッピング',
        imageUrl: 'https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?auto=format&fit=crop&w=800&q=80',
        latitude: 35.171,
        longitude: 136.883
    },
    {
        name: 'ちょっと未来',
        location: '名古屋城',
        description: '名古屋城でAR（拡張現実）を使った歴史体験。\nスマホをかざすと江戸時代の城下町が目の前に蘇ります。',
        category: 'ちょっと未来,歴史',
        imageUrl: 'https://images.unsplash.com/photo-1614730341194-75c60740a2d3?auto=format&fit=crop&w=800&q=80',
        latitude: 35.185,
        longitude: 136.900
    },
    {
        name: 'ちょっと未来',
        location: '中部国際空港',
        description: '空港で警備ロボットが本格稼働。\nAI搭載のロボットが安全を見守り、道案内もしてくれます。',
        category: 'ちょっと未来,ロボット',
        imageUrl: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80',
        latitude: 34.858,
        longitude: 136.812
    },
    {
        name: 'ちょっと未来',
        location: '大曽根',
        description: 'ドローン宅配サービスの実証実験が開始。\n空から美味しいピザが届く、そんな未来もうすぐそこ？',
        category: 'ちょっと未来,ドローン',
        imageUrl: 'https://images.unsplash.com/photo-1506947411487-a56738267384?auto=format&fit=crop&w=800&q=80',
        latitude: 35.192,
        longitude: 136.936
    }
];

const insertCategory = db.prepare('INSERT OR REPLACE INTO categories (id, name, icon, color) VALUES (@id, @name, @icon, @color)');
const insertNews = db.prepare('INSERT INTO news (name, location, description, category, imageUrl, latitude, longitude) VALUES (@name, @location, @description, @category, @imageUrl, @latitude, @longitude)');

db.transaction(() => {
    // Clear existing
    db.prepare('DELETE FROM news').run();
    db.prepare('DELETE FROM categories').run();

    for (const cat of categories) insertCategory.run(cat);
    for (const n of news) insertNews.run(n);
})();

console.log('Seed completed with 30 items!');
