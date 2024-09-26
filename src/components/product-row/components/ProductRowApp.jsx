import { FavoritesProduct } from "@/data/ProductRow/FourRowProduct";

import SingleProduct from "../../ui/Card/SingleProduct";

import RecommendedProdcut from "./RecommendedProduct";

import FourProductApp from "./FourProductApp";

import {
  HealthProduct,
  HomeRefreshProduct,
} from "@/data/ProductRow/SingleRowProduct";

function ProductRowApp() {
  return (
    <>
      <section id='independ-product'>
        <aside>
          <SingleProduct
            key={"HealthProduct"}
            product={HealthProduct}
          />
          <SingleProduct
            key={"Kindleproduct"}
            product={HomeRefreshProduct}
          />
          <FourProductApp
            key={"FavoritesProduct"}
            products={FavoritesProduct}
          />
          <RecommendedProdcut />
        </aside>
      </section>
    </>
  );
}

export default ProductRowApp;
