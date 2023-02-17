import { CTABG } from "./CTAComponent.config";

const CTAComponent = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${CTABG})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="bg-black/50 w-full h-full">
        <div className="flex flex-col justify-center text-center py-24 max-w-7xl mx-auto items-center">
          <h2 className="text-5xl font-semibold text-white">
            WE SERVE YOU THE BEST
          </h2>
          <span className="w-20 h-1 bg-primary block mt-2 mb-3"></span>
          <p className="text-gray-300">
            We servce the best food to our customers and we are the best in the
            town
          </p>
          <button className="bg-primary hover:bg-secondary duration-300 px-7 py-2.5 mt-4 text-white font-semibold rounded-lg">
            Download App
          </button>
        </div>
      </div>
    </div>
  );
};

export default CTAComponent;
