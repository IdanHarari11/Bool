import playStore from "../../../../assets/images/icons/google-play-badge.png";
import appStore from "../../../../assets/images/icons/play-store.png";
import burger from "../../../../assets/images/hero/burger.png";
import heroBG from "../../../../assets/images/background/heroBG.jpg";

// Import Icons
import { ImSpoonKnife } from "react-icons/im";
import { SlDrop } from "react-icons/sl";
import { TbLeaf } from "react-icons/tb";

export const PLAY_STORE = playStore;
export const APP_STORE = appStore;
export const BURGER = burger;
export const HERO_BG = heroBG;

export const HERO_TITLE = "Order Food Anytime";
export const HERO_SUBTITLE =
  "Test our best food and enjoy your meal with your family and friends.";
export const DOWNLOAD_TEXT = "Download our mobile app";

export const HERO_FEATURES = [
  {
    _id: 1,
    title: "Delicious",
    icon: <ImSpoonKnife className="text-primary text-5xl" />,
  },
  {
    _id: 2,
    title: "Fresh",
    icon: <SlDrop className="text-primary text-5xl" />,
  },
  {
    _id: 3,
    title: "Organic",
    icon: <TbLeaf className="text-primary text-5xl" />,
  },
];

// Download Button
export const DOWNLOAD_APP_BUTTONS = [
  {
    _id: 1,
    title: "Play Store for Android",
    icon: PLAY_STORE,
    link: "https://play.google.com/store/apps/details?id=com.bool.delivery",
  },
  {
    _id: 2,
    title: "App Store for iOS",
    icon: APP_STORE,
    link: "https://apps.apple.com/il/app/bool-%D7%91%D7%95%D7%9C/id1665889586",
  },
];
