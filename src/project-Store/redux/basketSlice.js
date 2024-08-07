import { createSlice } from "@reduxjs/toolkit";

const basketSlice = createSlice({
    name: "SHOPPING",
    initialState: {
        Cart: [],

    },
    reducers: {
        addToCart: (state, action) => {
            const { id, name, price, img } = action.payload
            const existence = state.Cart.find((i) => i.id === id)
            if (!existence) {
                state.Cart.push({
                    ...state,
                    Cart: state.Cart = [
                        ...state.Cart,
                        {
                            id: id,
                            name: name,
                            price: price,
                            img: img,
                            quantity: 1
                        }
                    ]
                })
            } else {
                return {
                    Cart: state.Cart.map((item) => {
                        if (item.id === id) {
                            return { ...item, quantity: item.quantity + 1 }
                        } else {
                            return item
                        }
                    })
                }
            }
        },


        removeFromCart: (state, action) => {
            const id = action.payload.id
            const existence = state.Cart.find((i) => i.id === id)
            if (existence.quantity > 1) {
                return {
                    Cart: state.Cart.map((item) => {
                        if (item.id === id) {
                            return { ...item, quantity: item.quantity - 1 }
                        } else {
                            return item
                        }
                    })
                }
            } else {
                return {
                    Cart: state.Cart.filter((i) => i.id !== id)
                }
            }
        }
    }
})

export const { addToCart, removeFromCart } = basketSlice.actions
export default basketSlice.reducer
