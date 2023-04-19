// import { getDiscountedPricePercentage } from "@/utils/helper";
// import Image from "next/image";
import Link from "next/link";
import React from "react";
const ProductCard = () => {
    return (
        <Link
            href={`/product/1`}
            className="transform overflow-hidden 
            bg-white duration-200 hover:scale-105 cursor-pointer"
        >
            <img
                src="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/71fcee3e-07d3-4cbf-bf2f-b20dbc9de658/air-jordan-1-retro-high-og-shoes-Pz6fZ9.png"
                alt="product image"
            />
            <div className="p-4 text-black/[0.9]">
                <h2 className="text-lg font-medium">Product Name</h2>
                <div className="flex items-center">
                    <p className="mr-2 text-lg font-semibold">&#8377;16 995</p>
                    <p className="text-base font-medium line-through">
                        &#8377; 20000
                    </p>
                    <p className="ml-auto text-base font-medium 
                    text-green-500">
                        17% off
                    </p>
                </div>
            </div>
        </Link>
    );
};

export default ProductCard;