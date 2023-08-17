import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// My Components
import WelcomeScreen from "../../components/WelcomeScreen";
import ProductCard from "../../components/ProductCard";
import ProductDetailsModal from "../../components/ProductDetailsMOdal";
import LoadingSpinner from "../../components/shared/others/LoadingSpinner";
// My Styles
import PPS from "../../assets/css/pages/product/ProductsPageStyles.module.css";
// My Services
import { indexProducts } from "../../store/services/ProductsService";

export default function ProductsPage() {
  // Here we distructuring (produst) state from (productsReducer) directly
  const { products, loading, product, showModal } = useSelector(
    (state) => state.productsReducer
  );
  const dispatch = useDispatch();
  // This for Show Welcome Screen For 3 Seconds
  const [showScreen, setShowScreen] = useState(false);

  // Get All Products
  const handleIndexProducts = () => {
    indexProducts(dispatch);
  };

  useEffect(() => {
    if (localStorage.getItem("isWelcomeMessageShowed") == null) {
      setShowScreen(true);
      setTimeout(() => {
        localStorage.setItem("isWelcomeMessageShowed", "true");
        setShowScreen(false);
      }, 3000);
    }
    // If there is no products then:
    if (products.length == 0) {
      handleIndexProducts();
    }
  }, [products]);

  // const show
  return (
    <>
      {showScreen ? (
        <WelcomeScreen />
      ) : !loading && products.length > 0 ? (
        <div className={PPS.allProductsCard}>
          {products &&
            products.map((product) => {
              return <ProductCard data={product} key={product.id} />;
            })}
        </div>
      ) : !loading && products.length == 0 ? (
        "No Data Found"
      ) : (
        <>
          <br />
          <br />
          <LoadingSpinner />
        </>
      )}
      {showModal ? <ProductDetailsModal /> : ""}
    </>
  );
}
