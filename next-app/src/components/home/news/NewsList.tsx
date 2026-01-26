import { useState, useEffect } from 'react';
import NewsCard from './NewsCard';

interface News {
  id: string;
  name: string;
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
            name: 'サンプル記事1',
            description: 'これはサンプルの記事です。',
            category: 'テクノロジー',
            date: new Date().toISOString(),
          },
          {
            id: '2',
            name: 'サンプル記事2',
            description: 'これも別のサンプル記事です。',
            category: 'ビジネス',
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
          name={news.name}
          description={news.description}
        />
      ))}
    </div>
  );
}
