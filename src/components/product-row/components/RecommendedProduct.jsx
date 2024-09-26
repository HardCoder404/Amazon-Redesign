import recommend_1 from '@/data/img/productRow/recommended_1.jpg';
import recommend_2 from '@/data/img/productRow/recommended_2.jpg';
import recommend_3 from '@/data/img/productRow/recommended_3.jpg';
import recommend_4 from '@/data/img/productRow/recommended_4.jpg';
import { useGlobalContext } from "@/context/useContext";
function RecommendedProdcut() {
  const { lang } = useGlobalContext();
  return (
    <>
      <div>
        <h4>{lang.title.recommend_our_brand}</h4>
        <div className='column'>
          <div className='column-1'>
            <img
              src={recommend_1}
              alt='Product_One'
            />
          </div>
          <div className='column-2'>
            <img
              src={recommend_2}
              alt='Product_Two'
            />
          </div>
        </div>
        <div className='column'>
          <div className='column-1'>
            <img
              src={recommend_3}
              alt='Product_Three'
            />
          </div>
          <div className='column-2'>
            <img
              src={recommend_4}
              alt='Product_Four'
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default RecommendedProdcut;
