 import { createStore, applyMiddleware } from 'redux';
 import thunk from 'redux-thunk';


//api
import api from '../utils/api';


const INITIAL_STATE = {
    products: [],
    user: null,
    productsLoaded: false,
    updatingUserInfo: false,
    orderBy: 'lowest_price'
}

function storeReducer(state = INITIAL_STATE, action){
    switch (action.type) {
        
        case 'GET_PRODUCTS_REQUEST' : {
            const { products } = action.payload;

            return {
                ...state,
                products
            }
        }
        case 'PRODUCTS_LOAD_SUCCESS' : {
            return{
                ...state,
                productsLoaded: true
            }
        }
        case 'GET_USER_REQUEST': {
            const { user } = action.payload;

            return {
                ...state,
                user
            }
        }
        case 'UPDATE_USER_INFO': {
            return {
                ...state,
                updatingUserInfo: true
            }
        }
        case 'UPDATE_USER_INFO_SUCCESS':{
            return {
                ...state,
                updatingUserInfo: false
            }
        }
        case 'CHANGE_PRODUCTS_ORDER': {
            const { orderBy } = action.payload;

            return {
                ...state,
                orderBy
            }
        }
        default:{
            return state;
        }
    }
}

//thunks
const getProductsItems = () => {
    return async function(dispatch) {
        const response = await api.getProducts();
        const products = await response;
        dispatch(getProductsRequest(products));
        dispatch(productsLoadedSuccess());
    }
}

const getUser = () => {
    return async function(dispatch) {
        dispatch(updateUserInfo())
        const response = await api.getUser();
        const user = await response;
        dispatch(getUserRequest(user));
        dispatch(updateUserInfoSuccess());
    }
}

const addPoints = (points) => {
    return async function() {
        const response = await api.addPoints(points);
        const data = await response;
        alert(data.message)
    }
}

//actions creators
const getProductsRequest = (products) => ({
    type: 'GET_PRODUCTS_REQUEST',
    payload: {
        products
    }
});

const getUserRequest = (user) => ({
    type: 'GET_USER_REQUEST',
    payload: {
        user
    }
});

const productsLoadedSuccess = () => ({
    type: 'PRODUCTS_LOAD_SUCCESS'
})

const changeProductsOrder = (orderBy) => ({
    type: 'CHANGE_PRODUCTS_ORDER',
    payload: {
        orderBy
    }
}); 

const updateUserInfo = () => ({
    type: 'UPDATE_USER_INFO'
});

const updateUserInfoSuccess = () => ({
    type: 'UPDATE_USER_INFO_SUCCESS'
});

const middlewares = applyMiddleware(thunk)
const store = createStore(storeReducer, middlewares);

export {
    store as default, 
    getProductsItems,
    getUser,
    changeProductsOrder,
    addPoints
}