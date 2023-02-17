import {
  CTABG,
  CTA_BUTTON_TEXT,
  CTA_SUBTITLE,
  CTA_TITLE,
} from "./CTAComponent.config";

const CTAComponent = () => {
  return (
    <div
      id="cta"
      className="scrollMarginTop"
      style={{
        backgroundImage: `url(${CTABG})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="bg-black/50 w-full h-full">
        <div className="flex flex-col justify-center text-center py-24 max-w-7xl mx-auto items-center px-5">
          <h2 className="text-4xl md:text-5xl font-semibold text-white">
            {CTA_TITLE}
          </h2>
          <span className="w-32 h-1 bg-primary block my-3"></span>
          <p className="text-gray-300">{CTA_SUBTITLE}</p>
          <button className="bg-primary hover:bg-secondary duration-300 px-7 py-2.5 mt-4 text-white font-semibold rounded-lg">
            {CTA_BUTTON_TEXT}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CTAComponent;
