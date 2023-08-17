import React from "react";
import { useDispatch } from "react-redux";
import { getOneProduct } from "../store/services/ProductsService";
// My Styles
import PDS from "../assets/css/components/ProductCardStyles.module.css";
// My Custom Function
import { longTextCut, getImage } from "../constants/Helper.js";

export default function ProductCard(props) {
  const dispatch = useDispatch();

  // Get One Product
  const handleGetOneProduct = (id) => {
    getOneProduct(id, dispatch);
  };
  // When Click On Each Card Do:
  const handleSetProuctId = (id) => {
    handleGetOneProduct(id);
  };

  return (
    <>
      <div
        className={PDS.card}
        onClick={() => {
          handleSetProuctId(props.data.id);
        }}
      >
        <div className={PDS.cardImage}>
          <img
            src={getImage(props.data.image)}
            height={215}
            alt={"img-" + props.data.id}
          />
        </div>
        <div className={PDS.cardTitleAndPrice}>
          <h4>
            <b>{longTextCut(props.data.title, 25)}</b>
          </h4>
          <p>
            <b>
              <span>$</span>
              {props.data.price}
            </b>
          </p>
        </div>
        <div className={PDS.cardDescription}>
          {longTextCut(props.data.description, 65)}
        </div>
      </div>
    </>
  );
}
