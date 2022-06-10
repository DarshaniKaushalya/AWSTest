/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductDetailsById } from "../../actions";
import Layout from "../../components/Layout";
import { useParams, useNavigate } from "react-router-dom";
import { BiDollar } from "react-icons/bi";
import { AiFillThunderbolt } from "react-icons/ai";
import { MaterialButton } from "../../components/MaterialUI";
import { IoIosArrowForward, IoIosStar, IoMdCart } from "react-icons/io";
import "./style.css";
import { addToCart } from "../../actions/cart.action";

const ProductDetailsPage = (props) => {
  let { productId } = useParams();
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const product = useSelector((state) => state.product);

  useEffect(() => {
    const payload = {
      params: {
        productId,
      },
    };

    dispatch(getProductDetailsById(payload));
    console.log(payload);
  }, []);

  if (Object.keys(product.productDetails).length === 0) {
    return null;
  }

  return (
    <Layout>
      {/* <div>{product.productDetails.name}</div> */}
      <div className="productDescriptionContainer">
        <div className="flexRow">
          <div className="verticalImageStack">
            {product.productDetails.productPictures.map((thumb, index) => (
              <div className="thumbnail">
                {/* <img src={generatePublicUrl(thumb.img)} alt={thumb.img} /> */}
                <img src={thumb.img} alt={thumb.img} />
              </div>
            ))}
            {/* <div className="thumbnail active">
              {
                product.productDetails.productPictures.map((thumb, index) => 
                <img src={generatePublicUrl(thumb.img)} alt={thumb.img} />)
              }
            </div> */}
          </div>
        </div>
        {/* ghjghgj */}
        <div className="productDescContainer">
          <div className="productDescImgContainer">
            <img
              src={product.productDetails.productPictures[0].img}
              alt={`${product.productDetails.productPictures[0].img}`}
            />
          </div>

          {/* action buttons */}
          <div className="flex">
            <MaterialButton
              title="ADD TO CART"
              bgColor="#ff9f00"
              textColor="#ffffff"
              style={{
                marginBottom: "10px",
                padding: "5px",
                // marginRight: "5px",
              }}
              icon={<IoMdCart className="flex" />}
              onClick={() => {
                const { id, name, price } = product.productDetails;
                const img = product.productDetails.productPictures[0].img;
                dispatch(addToCart({ id, name, price, img }));
                navigate(`/cart`);
              }}
            />
            <MaterialButton
              title="BUY NOW"
              bgColor="#fb641b"
              textColor="#ffffff"
              style={{
                padding: "5px",

                // marginLeft: "5px",
              }}
              icon={<AiFillThunderbolt className="flex" />}
            />
          </div>
        </div>

        <div>
          {/* home > category > subCategory > productName */}
          <div className="breed">
            <ul>
              <li>
                <a href="#">Home</a>
                <IoIosArrowForward />
              </li>
              <li>
                <a href="#">Mobiles</a>
                <IoIosArrowForward />
              </li>
              <li>
                <a href="#">Samsung</a>
                <IoIosArrowForward />
              </li>
              <li>
                <a href="#">{product.productDetails.name}</a>
              </li>
            </ul>
          </div>
          {/* product description */}
          <div className="productDetails">
            <p className="productTitle">{product.productDetails.name}</p>
            <div>
              <span className="ratingCount">
                4.3 <IoIosStar />
              </span>
              <span className="ratingNumbersReviews">
                72,234 Ratings & 8,140 Reviews
              </span>
            </div>
            <div className="extraOffer">
              Extra <BiDollar />
              4500 off{" "}
            </div>
            <div className="flexRow priceContainer ">
              <span className="price">
                <BiDollar />
                {product.productDetails.price}
              </span>
              <span className="discount" style={{ margin: "0 10px" }}>
                22% off
              </span>
              {/* <span>i</span> */}
            </div>
            <div>
              <p
                style={{
                  color: "#212121",
                  fontSize: "14px",
                  fontWeight: "600",
                }}
              >
                Available Offers
              </p>
              <p style={{ display: "flex" }}>
                <span
                  style={{
                    width: "100px",
                    fontSize: "12px",
                    color: "#878787",
                    fontWeight: "600",
                    marginRight: "20px",
                  }}
                >
                  Description
                </span>
                <span
                  style={{
                    fontSize: "12px",
                    color: "#212121",
                  }}
                >
                  {product.productDetails.description}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetailsPage;
