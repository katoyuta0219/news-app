import Footer from "@/components/layout/footer";
import BackButton from "@/components/ui/BackButton";
import { getNewsById } from "@/lib/news/getNews";
import { notFound } from "next/navigation";
import { Coffee, PawPrint, Car, Clock, Sparkles } from "lucide-react";

// Icon mapping helper
const getIcon = (categoryName: string) => {
  if (categoryName.includes('カフェ')) return <Coffee size={24} color="#F3A683" />;
  if (categoryName.includes('動物')) return <PawPrint size={24} color="#F3A683" />;
  if (categoryName.includes('おでかけ')) return <Car size={24} color="#5EA754" />;
  if (categoryName.includes('話題')) return <Clock size={24} color="#EBA388" />;
  if (categoryName.includes('未来')) return <Sparkles size={24} color="#68A76E" />;
  return <Coffee size={24} color="#F3A683" />; // Fallback
};

interface Props {
  params: Promise<{ id: string }>;
}

export default async function ArticleDetailPage({ params }: Props) {
  const { id } = await params;
  const news = getNewsById(id);

  if (!news) {
    notFound();
  }

  return (
    <div className="h-full flex flex-col bg-[#FFF9F1] overflow-hidden">
      <div className="flex-1 px-6 pt-8 pb-24 overflow-y-auto">
        <BackButton />

        <div className="mx-auto max-w-sm">
          {/* Image */}
          <div
            className="rounded-[24px] bg-gray-200 h-[220px] w-full bg-cover bg-center shadow-sm mb-6"
            style={{ backgroundImage: `url(${news.imageUrl})` }}
          />

          {/* Category Label */}
          <div className="flex items-center gap-2 mb-2">
            {getIcon(news.name)}
            <span className="text-sm font-bold text-[#F3A683]">{news.name}</span>
          </div>

          {/* Title (using name/category for now as title isn't separate in DB schema yet, or construct one) */}
          <h1 className="text-2xl font-bold text-black mb-4 leading-snug">
            {news.description.split('。')[0]}
            {/* Using first sentence as title if no title field, or just 'Title Placeholder' */}
          </h1>

          {/* Description Body */}
          <p className="text-black/70 leading-relaxed whitespace-pre-line text-[15px]">
            {news.description}
          </p>

          <div className="h-10" />



        </div>
      </div>
      <Footer />
    </div>
  );
}