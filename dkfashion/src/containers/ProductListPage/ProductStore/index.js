import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductsBySlug } from "../../../actions";
import { Link, useParams } from "react-router-dom";
import Card from "../../../components/UI/Card";
import Rating from "../../../components/UI/Rating";
import Price from "../../../components/UI/Price";

//import { generatePublicUrl } from "../../../urlConfig";

const ProductStore = () => {
  const product = useSelector((state) => state.product);
  // eslint-disable-next-line no-unused-vars
  // const [priceRange, setPriceRange] = useState({
  //   under5k: 5000,
  //   under10k: 10000,
  //   under15k: 15000,
  //   under20k: 20000,
  //   under30k: 30000,
  // });
  const priceRange = product.priceRange;
  const dispatch = useDispatch();

  let { slug } = useParams();
  useEffect(() => {
    //console.log(props);
    // const { match } = props;

    //const {match} = props;
    //dispatch(getProductsBySlug(match.params.slug));
    //dispatch(getProductsBySlug(slug));

    //const {slug} = props;
    dispatch(getProductsBySlug(slug));

    //dispatch(getProductsBySlug());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {Object.keys(product.productByPrice).map((key, index) => {
        return (
          <Card
            headerLeft={`${slug} under ${priceRange[key]}`}
            headerRight={<button>View All</button>}
            style={{
              width: "calc(100% - 40px),",
              margin: "20px",
            }}
          >
            <div style={{ display: "flex" }}>
              {product.productByPrice[key].map((product) => (
                <Link
                  to={`/${product.slug}/${product.id}/p`}
                  style={{
                    display: "block",
                  }}
                  className="productContainer"
                >
                  <div className="productImgContainer">
                    <img src={product.productPictures[0].img} alt=""></img>
                    {/* <img
                      src={generatePublicUrl(product.productPictures[0].img)}
                      alt=""
                    ></img> */}
                  </div>
                  <div className="productInfo">
                    <div style={{ margin: "5px 0" }}>{product.name}</div>
                    <div>
                      <Rating value="4.3" />
                      <span
                        style={{
                          color: "777",
                          fontWeight: "500",
                          fontSize: "12px",
                        }}
                      >
                        (3333)
                      </span>
                    </div>

                    <Price value={product.price}></Price>
                  </div>
                </Link>
              ))}
            </div>
          </Card>
        );
      })}
    </>
  );
};

export default ProductStore;
