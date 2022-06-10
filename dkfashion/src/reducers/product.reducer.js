import { productConstants } from "../actions/constants";

const initState = {
  products: [],
  priceRange: {},
  productByPrice: {
    // under5k: [],
    // under10k: [],
    // under15k: [],
    // under20k: [],
    // under30k: [],
  },
  pageRequest: false,
  page: {},
  error: null,
  productDetails: {},
  loading: false,
};
// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initState, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case productConstants.GET_PRODUCTS_BY_SLUG:
      state = {
        ...state,
        products: action.payload.products,
        priceRange: action.payload.priceRange,
        productByPrice: {
          ...action.payload.productByPrice,
        },
      };
      break;
    //one
    case productConstants.GET_PRODUCT_PAGE_REQUEST:
      state = {
        ...state,
        pageRequest: true,
      };
      break;
    //Two
    case productConstants.GET_PRODUCT_PAGE_SUCCESS:
      state = {
        ...state,
        page: action.payload.page,
        pageRequest: false,
      };
      break;
    //Three
    case productConstants.GET_PRODUCT_PAGE_FAILURE:
      state = {
        ...state,
        pageRequest: false,
        error: action.payload.error,
      };
      break;
    //one
    case productConstants.GET_PRODUCT_DETAILS_BY_ID_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    //Two
    case productConstants.GET_PRODUCT_DETAILS_BY_ID_SUCCESS:
      state = {
        ...state,
        loading: false,
        productDetails: action.payload.productDetails,
      };
      break;
    //Three
    case productConstants.GET_PRODUCT_DETAILS_BY_ID_FAILURE:
      state = {
        ...state,
        loading: false,
        error: action.payload.error,
      };
      break;
  }
  return state;
};
