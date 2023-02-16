import playStoreIcon from "../../assets/images/icons/playstore.png";
import appleStoreIcon from "../../assets/images/icons/applestore.png";

export const DOWNLOAD_TITLE = "Download Our App";
export const DOWNLOAD_SUBTITLE = "Get the app today";
export const DOWNLOAD_GROUP = [
  {
    id: 1,
    icon: playStoreIcon,
    link: "https://play.google.com/store/apps/details?id=com.bool.delivery",
    downloadText: "Download on",
    storeName: "Google Play Store",
  },
  {
    id: 2,
    icon: appleStoreIcon,
    link: "https://apps.apple.com/il/app/bool-%D7%91%D7%95%D7%9C/id1665889586",
    downloadText: "Download on",
    storeName: "Apple Store",
  },
];

export const FOOTER_TEXT = `© ${new Date().getFullYear()} Bool. All rights reserved.`;

export const FOOTER_LINKS = [
  {
    id: 1,
    title: "Home",
    link: "/",
  },
  {
    id: 2,
    title: "Privacy Policy",
    link: "#privacy",
  },
  {
    id: 3,
    title: "Terms & Conditions",
    link: "#terms",
  },
];
