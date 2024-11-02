// import Footer from "@/components/layouts/Footer";
import MainBanner from "@/components/page/Banner/MainBanner";
import CampBenefit from "@/components/page/campbenefit/CampBenefit";
import Contact from "@/components/page/contact/Contact";
// import CoreProgram from "@/components/page/coreprogram/CoreProgram";
import Faq from "@/components/page/faq/Faq";
import CenterImageList from "@/components/page/imageofcenter/CenterImageList";
import Curriculum from "@/components/page/introduce/Curriculum";
import Introduce from "@/components/page/introduce/Introduce";
// import Location from "@/components/page/location/Location";
// import MainApply from "@/components/page/mainApply/MainApply";
import OverView from "@/components/page/overview/OverView";
import Selection from "@/components/page/selection/Selection"; 

export default function Home() {
  return (
    <main>
      <MainBanner />
      <Introduce />
      <OverView />
      <Curriculum />
      {/* <MainApply /> */}
      <CampBenefit />
      {/* <CoreProgram /> */}
      <Selection />
      <Faq />
      {/* <Location /> */}
      <CenterImageList />
      <Contact />
      {/* <Footer /> */}
    </main>
  );
}
