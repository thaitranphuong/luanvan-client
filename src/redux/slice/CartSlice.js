import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import api from '../../utils/api';
import { getUser } from '../../utils/localstorage';

const cartSlice = createSlice({
    name: 'cart',
    initialState: { cartItems: [], checkoutProducts: [] },
    reducers: {
        addCheckoutProduct: (state, action) => {
            state.checkoutProducts.push(action.payload);
        },
        removeCheckoutProduct: (state, action) => {
            state.checkoutProducts.forEach((item, index) => {
                item.id === action.payload.id && state.checkoutProducts.splice(index, 1);
            });
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getCart.fulfilled, (state, action) => {
                state.cartItems = action.payload;
            })
            .addCase(addToCart.fulfilled, (state, action) => {
                state.cartItems = action.payload;
            })
            .addCase(deleteFromCart.fulfilled, (state, action) => {
                state.cartItems = action.payload;
            })
            .addCase(changeCartQuantity.fulfilled, (state, action) => {
                state.cartItems = action.payload;
            });
    },
});

export const getCart = createAsyncThunk('cart/getCart', async () => {
    const result = await api.getRequest('/cart/' + getUser().id);
    if (result && result.statusCode === 200) return result.data;
    return [];
});

export const addToCart = createAsyncThunk('cart/addToCart', async (cartItem) => {
    let result = await api.postRequest('/cart', cartItem);
    if (result && result.statusCode === 200) {
        result = await api.getRequest('/cart/' + getUser().id);
        return result.data;
    }
});

export const deleteFromCart = createAsyncThunk('cart/deleteFromCart', async (id) => {
    let result = await api.deleteRequest('/cart/' + id);
    if (result && result.statusCode === 200) {
        result = await api.getRequest('/cart/' + getUser().id);
        return result.data;
    }
});

export const changeCartQuantity = createAsyncThunk('cart/changeCartQuantity', async (cartItem) => {
    let result = await api.putRequest('/cart', cartItem);
    if (result && result.statusCode === 200) {
        result = await api.getRequest('/cart/' + getUser().id);
        return result.data;
    }
});

export default cartSlice;
