/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-undef */
import React from "react";
import Layout from "../../components/Layout";
import getParams from "../../utils/getParams";
import ClothingAndAccessories from "./ClothingAndAccessories";
import ProductStore from "./ProductStore";
import ProductPage from "./ProductPage";
import { useSearchParams } from "react-router-dom";
import "./style.css";

/**
 * @author
 * @function ProductListPage
 **/

const ProductListPage = (props) => {
  const renderProduct = () => {
    // console.log(props);
    // const params = getParams(props.location.search);
    // console.log(params);

    // const [getParams] = useSearchParams();
    // console.log(Object.fromEntries([...getParams]));

    //Get products according to the sort or page
    const [getParams] = useSearchParams();
    const params = Object.fromEntries([...getParams]);
    console.log(params);

    let content = null;
    switch (params.type) {
      case "store":
        content = <ProductStore {...props} />;
        break;
      case "page":
        content = <ProductPage {...props} />;
        break;
      default:
        content = <ClothingAndAccessories {...props} />;
    }
    return content;
  };
  return (
    <Layout>
      {/* <ProductStore {...props} />; */}

      {renderProduct()}
    </Layout>
  );
};
export default ProductListPage;
