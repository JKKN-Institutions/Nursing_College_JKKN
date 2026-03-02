import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import ImageCarousel from "@/components/ImageCarousel";
import { createClient } from "@/lib/supabase/server";

export const revalidate = 60;

export default async function Gallery() {
  const supabase = await createClient();
  const collegeId = process.env.NEXT_PUBLIC_COLLEGE_ID!;

  const { data: albums } = await supabase
    .from("gallery_albums")
    .select("id, name")
    .eq("college_id", collegeId)
    .order("created_at", { ascending: false });

  const albumsWithImages = await Promise.all(
    (albums ?? []).map(async (album) => {
      const { data: images } = await supabase
        .from("gallery_images")
        .select("image_url")
        .eq("album_id", album.id)
        .eq("college_id", collegeId)
        .order("display_order", { ascending: true });

      return {
        name: album.name,
        images: (images ?? []).map((img) => img.image_url),
      };
    })
  );

  const hasAlbums = albumsWithImages.some((a) => a.images.length > 0);

  // Fallback hardcoded albums shown when no admin albums exist
  const fallbackAlbums = [
    {
      name: "Founders Day 2022",
      images: [
        "/images/foundersday-1.jpg",
        "/images/foundersday-2.jpg",
        "/images/foundersday-3.jpg",
        "/images/foundersday-4.jpg",
        "/images/foundersday-5.jpg",
        "/images/foundersday-6.jpg",
        "/images/foundersday-7.jpg",
        "/images/foundersday-8.jpg",
      ],
    },
    {
      name: "Vollymania 2023",
      images: [
        "/images/volleymania-1.jpg",
        "/images/volleymania-2.jpg",
        "/images/volleymania-3.jpg",
        "/images/volleymania-4.jpg",
        "/images/volleymania-5.jpg",
        "/images/volleymania-6.jpg",
        "/images/volleymania-7.jpg",
      ],
    },
    {
      name: "JKKN Pongal Celebration 2023",
      images: [
        "/images/pongal_celebration-1.jpg",
        "/images/pongal_celebration-2.jpg",
        "/images/pongal_celebration-3.jpg",
        "/images/pongal_celebration-4.jpg",
        "/images/pongal_celebration-5.jpg",
      ],
    },
  ];

  const displayAlbums = hasAlbums ? albumsWithImages : fallbackAlbums;

  return (
    <>
      <Header />

      <main className="bg-cream pt-24 sm:pt-28 lg:pt-32 pb-8 sm:pb-12 lg:pb-20">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          {displayAlbums.map((album) =>
            album.images.length > 0 ? (
              <section key={album.name} className="mb-10 sm:mb-14 lg:mb-20">
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[42px] font-bold text-[#002309] mb-4 sm:mb-6 lg:mb-12">
                  {album.name}
                </h2>
                <ImageCarousel images={album.images} eventName={album.name} />
              </section>
            ) : null
          )}
        </div>
      </main>

      <Footer hideLifeAtJKKN={true} />
      <FloatingButtons />
    </>
  );
}
