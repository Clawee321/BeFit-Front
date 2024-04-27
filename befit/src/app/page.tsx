import Article from "@/components/Article";
import Image from "next/image";

export default function Home() {
  return (
    <div className = "bg-gradient-to-b from-white from-10% to-emerald-200 to-90%">
      <Article
                title="Pierwszy Artykuł"
                content="Treść pierwszego artykułu..."
            />
    </div>
  );
}
