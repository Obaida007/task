import AboutUs from "@/components/about_us/aboutUs";
import Footer from "@/components/footer/footer";
import Headers from "@/components/header/header";
import LastNews from "@/components/last_news/lastNews";
import Services from "@/components/services/services";
import WhyUs from "@/components/why_us/whyUs";

export default function Home() {
  return (
    <>
      <Headers />
      <AboutUs />
      <Services />
      <WhyUs />
      <LastNews />
      <Footer />
    </>
  );
}
