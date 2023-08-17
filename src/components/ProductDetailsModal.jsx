import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeProductDetailsModal } from "../store/services/ProductsService";
// My Styles
import PDMS from "../assets/css/components/ProductDetailsModalStyles.module.css";
// Import Icons & Images
import closeIcon from "../assets/icons/close.png";
// My Custom Function
import { getImage } from "../constants/Helper.js";

export default function ProductDetailsModal() {
  const { product, loading } = useSelector((state) => state.productsReducer);
  const dispatch = useDispatch();
  // Close The Modal By Redux
  const closeModal = () => {
    closeProductDetailsModal({}, dispatch);
  };
  return (
    <div className={PDMS.modal}>
      <div className={PDMS.backdrop}></div>
      <div className={PDMS.modalContent}>
        {!loading ? (
          <div className={PDMS.modalParent}>
            <div className={PDMS.modalHead}>
              <h4>
                <b>{product.description}</b>
              </h4>
            </div>
            <img
              src={closeIcon}
              width={20}
              height={20}
              className={PDMS.closeModal}
              onClick={closeModal}
              alt="close-modal"
            />
            <div className={PDMS.modalBody}>
              <div className={PDMS.productImage}>
                <img
                  src={getImage(product.image)}
                  width={512}
                  height={432}
                  alt={"product-image-" + product.id + "213sac4322"}
                />
              </div>
              <div className={PDMS.productInfo}>
                <div className={PDMS.info}>
                  <h3>Price</h3>
                  <h2>
                    <b>${product.price.toLocaleString()}</b>
                  </h2>
                </div>
                <div className={PDMS.info}>
                  <h3>Category</h3>
                  <h3>{product.category}</h3>
                </div>
                <div className={PDMS.info}>
                  <h3>Rating</h3>
                  <h3>{product.rating.rate}</h3>
                </div>
                <h3>Description</h3>
                <br />
                <h3>{product.description}</h3>
              </div>
            </div>
          </div>
        ) : (
          "loading..."
        )}
      </div>
    </div>
  );
}
