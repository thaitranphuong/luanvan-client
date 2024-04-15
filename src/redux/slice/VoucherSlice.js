import { createSlice } from '@reduxjs/toolkit';

const voucherSlice = createSlice({
    name: 'voucher',
    initialState: { voucher: {} },
    reducers: {
        addVoucher: (state, action) => {
            state.voucher = action.payload;
        },
    },
});

export default voucherSlice;
