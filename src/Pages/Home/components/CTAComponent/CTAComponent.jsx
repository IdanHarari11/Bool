import {
  CTABG,
  CTA_BUTTON_TEXT,
  CTA_IMAGE,
  CTA_SUBTITLE,
  CTA_TITLE,
} from "./CTAComponent.config";

const CTAComponent = () => {
  const goto = (link) => {
    document.getElementById(link).scrollIntoView({ behavior: "smooth" });
  };

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
      <div className="bg-gray-900/60 dark:bg-gray-900/80 w-full h-full">
        <div className="py-24 max-w-6xl mx-auto px-5 grid grid-cols-1 md:grid-cols-3 place-items-center gap-5">
          <div>
            <img
              src={CTA_IMAGE}
              alt="Mobile App Screenshot"
              className="max-w-xs h-auto mx-auto md:mx-0 md:ml-auto hover:-translate-y-2 duration-300"
            />
          </div>
          <div className="flex flex-col justify-center text-center md:text-left items-center md:items-start space-y-8 md:col-span-2">
            <div>
              <h2 className="text-4xl md:text-5xl font-semibold text-white mb-3">
                {CTA_TITLE}
              </h2>
              <span className="w-32 h-1 bg-primary block mx-auto md:mx-0"></span>
            </div>
            <p className="text-gray-300">{CTA_SUBTITLE}</p>
            <button
              className="bg-primary hover:bg-secondary duration-300 px-7 py-2.5 mt-4 text-white font-semibold rounded-lg"
              onClick={() => goto("join")}
            >
              {CTA_BUTTON_TEXT}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTAComponent;
