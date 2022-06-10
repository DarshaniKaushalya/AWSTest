import axios from "../helpers/axios";
import { categoryConstants } from "./constants";

export const getAllCategory = () => {
    return async dispatch => {
        dispatch({ type: categoryConstants.GET_ALL_CATEGORY_REQUEST });
        const res = await axios.get(`/categoriess`);
        console.log(res);
        if (res.status === 200) {
            const { categoryList } = res.data;
            dispatch({
                type: categoryConstants.GET_ALL_CATEGORY_SUCCESS,
                payload: { categories: categoryList }
            });
        } else {
            dispatch({
                type: categoryConstants.GET_ALL_CATEGORY_FAILURE,
                payload: { error: res.data.error }
            });
        }
    }
}

