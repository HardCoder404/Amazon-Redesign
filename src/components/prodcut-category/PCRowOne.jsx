import SingleProduct from "../ui/Card/SingleProduct";

import {
  BeautyPicks,
  HomeUnder30,
  ComputersAndAccessories,
  DealsTools,
} from "@/data/ProductRow/SingleRowProduct";

function PCRowOne() {
  return (
    <>
      <section id='product-category'>
        <aside>
          <SingleProduct product={BeautyPicks} />
          <SingleProduct product={HomeUnder30} />
          <SingleProduct product={ComputersAndAccessories} />
          <SingleProduct product={DealsTools} />
        </aside>
      </section>
    </>
  );
}

export default PCRowOne;
