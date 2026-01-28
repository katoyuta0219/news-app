import { useState, useEffect } from 'react';
import NewsCard from './NewsCard';
import { Coffee, PawPrint, Utensils, Star, LucideIcon } from 'lucide-react';

interface News {
  id: string;
  name: string;
  location: string;
  description: string;
  category: string;
  date: string;
}

interface NewsListProps {
  category?: string;
}

export default function NewsList({ category = '全て' }: NewsListProps) {
  const [newsList, setNewsList] = useState<News[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);


  // 追加しましたby駿牙
  const getIconByName = (name: string): LucideIcon => {
    switch (name) {
      case 'カフェ':
        return Coffee;
      case '動物':
        return PawPrint;
      case 'ランチ':
        return Utensils;
      default:
        return Star; // デフォルトのアイコン
    }
  };

  // 【追加】アイコンの色を決定する関数
  const getIconColorByName = (name: string): string => {
    switch (name) {
      case 'カフェ':
        return "#D2977C"; // 落ち着いた茶色
      case '動物':
        return "#F3A683"; // 優しいオレンジ（ご提示の色）
      case 'ランチ':
        return "#EBA388"; // コーラル系（Loadingで使っていた色）
      default:
        return "#D2977C";
    }
  };

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setIsLoading(true);
        // API呼び出し例（実装時に更新）
        // const response = await fetch(`/api/news?category=${category}`);
        // const data = await response.json();
        
        // ダミーデータ
        const dummyNews: News[] = [
          {
            id: '1',
            name: 'カフェ',
            location: '名古屋駅から徒歩10分',
            description: '名古屋駅に、新しくスタバができました。',
            category: '名古屋駅 x カフェ',
            date: new Date().toISOString(),
          },
          {
            id: '2',
            name: '動物',
            location:'名古屋駅から徒歩10分',
            description: 'サモエドカフェができました。',
            category: '動物 x カフェ',
            date: new Date().toISOString(),
          },
        ];

        setNewsList(dummyNews);
      } catch (err) {
        setError('ニュースの読み込みに失敗しました');
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchNews();
  }, [category]);

  if (isLoading) {
    return <div className="text-center py-8">読み込み中...</div>;
  }

  if (error) {
    return <div className="text-center py-8 text-red-600">{error}</div>;
  }

  if (newsList.length === 0) {
    return <div className="text-center py-8 text-gray-500">ニュースがありません</div>;
  }

  return (
    <div className="space-y-4">
      {newsList.map((news) => (
        <NewsCard
          key={news.id}
          id={news.id}
          location={news.location}
          name={news.name}
          description={news.description}
          category={news.category}
          Icon={getIconByName(news.name)}
          iconColor={getIconColorByName(news.name)}
        />
      ))}
    </div>
  );
}
