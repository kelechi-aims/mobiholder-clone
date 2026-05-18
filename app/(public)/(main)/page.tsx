import HomeAbout from "../../_components/_public/HomeAbout";
import HomeHero from "../../_components/_public/HomeHero";
import HomeFeatures from "../../_components/_public/HomeFeatures";
import HomeCallToAction from "../../_components/_public/HomeCallToAction";
import HomeNews from "../../_components/_public/HomeNews";
import HomeFaqs from "../../_components/_public/HomeFaqs";

export default function Home() {
  return (
    <div>
      <HomeHero />
      <HomeAbout />
      <HomeFeatures />
      <HomeCallToAction />
      <HomeNews />
      <HomeFaqs />
    </div>
  );
}
