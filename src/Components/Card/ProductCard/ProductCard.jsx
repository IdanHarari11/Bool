import React from "react";
import "./ProductCard.css";

const ProductCard = () => {
  return (
    <div className="product-card hover:bg-pink-200 duration-300 rounded-3xl border border-gray-100 w-full mt-32 hover:border-primary group bg-gradient-to-r">
      <div className="flex items-center justify-center -mt-24">
        <img
          src="https://demo2.strongtheme.com/monte/wp-content/uploads/sites/9/2021/08/mntehome04.png"
          alt=""
          className="h-60 w-60 group-hover:scale-105 duration-300"
        />
      </div>

      <div className="pt-0 -mt-8 text-center">
        <h3 className="text-lg text-gray-700">Salmon Salad</h3>
        {/* <p className="text-xs text-gray-600 border-y border-gray-200 group-hover:border-primary/30 py-2">
          Product Description
        </p> */}
      </div>
    </div>
  );
};

export default ProductCard;
