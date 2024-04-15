import { createSlice } from '@reduxjs/toolkit';

const shippingSlice = createSlice({
    name: 'shipping',
    initialState: { shipping: {} },
    reducers: {
        addShipping: (state, action) => {
            state.shipping = action.payload;
        },
    },
});

export default shippingSlice;
