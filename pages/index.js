import FeaturedProperties from "@/features/Home/components/FeaturedProperties";
import HeroBanner from "@/features/Home/components/HeroBanner";
import MeetTheTeam from "@/features/Home/components/MeetTheTeam";
import Partners from "@/features/Home/components/Partners";
import DefaultLayout from "@/features/Layouts/DefaultLayout";

export default function Home({ featuredProperties }) {
  // console.log(featuredProperties);
  return (
    <>
      <DefaultLayout>
        <HeroBanner />
        {/* FEATURED PROPERTIES */}
        <FeaturedProperties featuredProperties={featuredProperties} />
        {/* MEET THE TEAM */}
        <MeetTheTeam />
        {/* PARTNERS */}
        <Partners />
      </DefaultLayout>
    </>
  );
}

export async function getStaticProps() {
  const { hits } = require("@/features/data/properties");

  return {
    props: {
      featuredProperties: hits.slice(0, 6),
    },
  };
}
