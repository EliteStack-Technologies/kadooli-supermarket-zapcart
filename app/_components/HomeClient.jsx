"use client";

import { useState } from "react";
import Banner from "./Banner";
// import ProductList from "./ProductList";
import CTASection from "./CTASection";
import SearchBox from "./SearchBox";
import ProductModal from "./ProductModal";
import ProductCard from "./ProductList";
import Categories from "./Categories";

export default function HomeClient({ excelData, page1, page2, page3, categories }) {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <div>
      <SearchBox
        products={excelData}
        onSelect={(item) => setSelectedProduct(item)}
      />

      <Categories categories={categories} />
      <Banner />


      <h2 className="text-black mt-5 md:mt-10 md:mb-5 md:text-4xl text-lg font-extrabold pl-5">
        Best Deals
      </h2>
      <ProductCard
        products={page1}
        onProductClick={(item) => setSelectedProduct(item)}
      />

      <h2 className="text-black mt-5 md:mt-10 md:mb-5 md:text-4xl text-lg font-extrabold pl-5">
        New Arrival
      </h2>
      <ProductCard
        products={page2}
        onProductClick={(item) => setSelectedProduct(item)}
      />

      <h2 className="text-black mt-5 md:mt-10 md:mb-5 md:text-4xl text-lg font-extrabold pl-5">
       Bestsellers
      </h2>
      <ProductCard
        products={page3}
        onProductClick={(item) => setSelectedProduct(item)}
      />

      <div className="mt-5 px-5 pb-5">
        <CTASection />
      </div>

      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </div>
  );
}
