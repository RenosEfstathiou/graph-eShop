import { useEffect } from "react";
import ProductCard from "./Components/ProductCard";
import { useDispatch, useSelector } from "../../app/store";
import { fetchProductsAsync } from "../../entities/products/asyncThunks";
import { selectProducts, selectProductsStatus } from "../../entities/products";
import { APIStatuses } from "../../model/Common";

export default function MobilePhones() {
  const dispatch = useDispatch();
  const products = useSelector(selectProducts);
  const productsStatus = useSelector(selectProductsStatus);
  useEffect(() => {
    if (productsStatus === APIStatuses.Idle) {
      console.log("productsStatus", productsStatus);
      dispatch(fetchProductsAsync());
    }
  }, [dispatch, productsStatus]);
  return (
    <>
      {productsStatus === APIStatuses.Pending && <p>Loading...</p>}
      {productsStatus === APIStatuses.Fulfilled && (
        <div className=" gap-6 p-2 md:gap-4.8  grid md:grid-cols-6  ">
          {products.map((p) => (
            <ProductCard product={p} />
          ))}
        </div>
      )}
      {productsStatus === APIStatuses.Rejected && (
        <p>Error occurred while fetching data.</p>
      )}
    </>
  );
}
