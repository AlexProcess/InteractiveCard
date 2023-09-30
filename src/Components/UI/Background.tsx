import BgMobile from "../../assets/images/bg-main-mobile.png";
import MobileBack from "../../assets/images/bg-card-back.png";
import MobileFront from "../../assets/images/bg-card-front.png";

export const Background: React.FC = () => {
  return (
    <div className="absolute top-0 left-0 z-[-1]">
      {/* z-[1] */}
      <img src={BgMobile} alt="mobile-background" />
    </div>
  );
};
