// import Footer from "@/components/layouts/Footer";
import MainBanner from "@/components/page/Banner/MainBanner";
import BriefingSchedule from "@/components/page/briefingschedule/BriefingSchedule";
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
import RoadMap from "@/components/page/roadmap/RoadMap";
import Selection from "@/components/page/selection/Selection";
import PosterPopup from "@/components/ui/modal/PosterPopup";

export default function Home() {
  return (
    <main>
      {/* 포스터 팝업 제거 */}
      {/* <PosterPopup /> */}
      <MainBanner />
      <OverView />
      <Introduce />
      <Curriculum />
      {/* <MainApply /> */}
      <CampBenefit />
      {/* <CoreProgram /> */}
      <Selection />
      <Faq />
      <RoadMap />
      <BriefingSchedule />
      {/* <Location /> */}
      <CenterImageList />
      <Contact />
      {/* <Footer /> */}
    </main>
  );
}
