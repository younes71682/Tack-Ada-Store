import { createSlice } from "@reduxjs/toolkit";

const basketSlice = createSlice({
    name: "SHOPPING",
    initialState: {
        Cart: [],
    },
    reducers: {
        addToCart: (state, action) => {
            const { id, name, price, img } = action.payload;
            const existingItem = state.Cart.find((item) => item.id === id);
            if (!existingItem) {
                state.Cart.push({
                    id: id,
                    name: name,
                    price: price,
                    img: img,
                    quantity: 1
                });
            } else {
                existingItem.quantity += 1;
            }
        },

        removeFromCart: (state, action) => {
            const id = action.payload;
            const existingItem = state.Cart.find((item) => item.id === id);
            if (existingItem) {
                if (existingItem.quantity > 1) {
                    existingItem.quantity -= 1;
                } else {
                    state.Cart = state.Cart.filter((item) => item.id !== id);
                }
            }
        }
    }
});

export const { addToCart, removeFromCart } = basketSlice.actions;
export default basketSlice.reducer;
