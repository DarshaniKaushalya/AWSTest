/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductsBySlug } from "../../../actions";
import Card from "../../../components/UI/Card";
import { BiDollar } from "react-icons/bi";
import { Link, useParams } from "react-router-dom";

import "./style.css";

const ClothingAndAccessories = (props) => {
  const product = useSelector((state) => state.product);
  const dispatch = useDispatch();
  let { slug } = useParams();
  useEffect(() => {
    // const { match } = props;
    // dispatch(getProductsBySlug(match.params.slug));
    dispatch(getProductsBySlug(slug));
  }, []);

  return (
    <div style={{ padding: "10px" }}>
      <Card
        style={{
          boxSizing: "border-box",
          padding: "10px",
          display: "-webkit-box",
        }}
      >
        {product.products.map((product) => (
          <div className="caContainer">
            <Link
              className="caImgContainer"
              to={`/${product.slug}/${product.id}/p`}
            >
              <img src={product.productPictures[0].img} />
            </Link>
            <div>
              <div className="caProductName">{product.name}</div>
              <div className="caProductPrice">
                <BiDollar className="dol" />
                {product.price}
              </div>
            </div>
          </div>
        ))}
      </Card>
    </div>
  );
};

export default ClothingAndAccessories;
