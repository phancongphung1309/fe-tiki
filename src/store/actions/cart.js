import { actionTypes } from "./actionTypes";

export const addProductToCart = product => {
    return {
        type: actionTypes.ADD_PRODUCT_TO_CART,
        product
    };
};

export const removeProductFromCart = index => {
    return {
        type: actionTypes.REMOVE_PRODUCT_FROM_CART,
        index
    };
};


export const resetProductOfCart = index => {
    return {
        type: actionTypes.RESET_PRODUCT_OF_CART,
        index
    };
};
