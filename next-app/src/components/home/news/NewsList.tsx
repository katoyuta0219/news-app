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
  imageUrl: string;
}

interface NewsListProps {
  category?: string;
  filters?: {
    keyword: string;
    tags: string[];
    ratio: number;
  };
}

export default function NewsList({ category = '全て', filters }: NewsListProps) {
  const [newsList, setNewsList] = useState<News[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const getIconByName = (name: string): LucideIcon => {
    switch (name) {
      case 'カフェ': return Coffee;
      case '動物': return PawPrint;
      case 'ランチ': return Utensils;
      default: return Star;
    }
  };

  const getIconColorByName = (name: string): string => {
    switch (name) {
      case 'カフェ': return "#D2977C";
      case '動物': return "#F3A683";
      case 'ランチ': return "#EBA388";
      default: return "#D2977C";
    }
  };

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setIsLoading(true);
        // Build Params
        const params = new URLSearchParams();
        params.append('category', category);

        if (filters) {
          if (filters.keyword) params.append('keyword', filters.keyword);
          filters.tags.forEach(tag => params.append('tags', tag));
          // params.append('ratio', String(filters.ratio)); // Not using ratio for query yet 
        }

        const response = await fetch(`/api/news?${params.toString()}`);
        if (!response.ok) throw new Error('Failed to fetch');
        const data = await response.json();

        const formattedNews = data.news.map((item: any) => ({
          ...item,
          id: String(item.id),
          date: item.createdAt || new Date().toISOString()
        }));

        setNewsList(formattedNews);
      } catch (err) {
        setError('ニュースの読み込みに失敗しました');
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchNews();
  }, [category, filters]); // Re-fetch when category or filters change

  if (isLoading) {
    return <div className="text-center py-8 text-black">読み込み中...</div>;
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
          imageUrl={news.imageUrl}
          Icon={getIconByName(news.name)}
          iconColor={getIconColorByName(news.name)}
        />
      ))}
    </div>
  );
}
