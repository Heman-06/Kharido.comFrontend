import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: []    },
    reducers: {
        addItem: (state, action) => {
            const newItem = action.payload;
            const existingItem = state.items.find(item => item.id === newItem.id);
            if (!existingItem) {
                state.items.push({ ...newItem, quantity: 1 });
            }
            else{
                alert("item is already added")
            }
        },
        removeItem: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload);
        },
        increaseQuantity: (state, action) => {
            const item = state.items.find(item => item.id === action.payload);
            if (item) {
                item.quantity = item.quantity + 1;
            }
        },
        decreaseQuantity: (state, action) => {
            const item = state.items.find(item => item.id === action.payload);
            if (item && item.quantity > 0) {
                item.quantity = item.quantity - 1;
            }
        },
        updateQuantity: (state, action) => {
            const { id, quantity } = action.payload;
            const itemIndex = state.items.findIndex(item => item.id === id);
            if (itemIndex !== -1) {
                state.items[itemIndex].quantity = quantity;
            }
        },
        clearCart: (state, action) => {
            state.items = [];
        }
    }
});

export const { addItem, removeItem, updateQuantity, clearCart, increaseQuantity, decreaseQuantity } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
