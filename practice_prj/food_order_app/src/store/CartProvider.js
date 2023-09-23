import React, { useReducer } from "react";
import CartContext from "./cart-context";
const defaultCartState = {
  items: [],
  totalAmount: 0,
};
const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
    const existingCartItemIndex = state.items.findIndex((item) => item.id === action.item.id);

    const existingCartItem = state.items[existingCartItemIndex];
    let updatedItems;
    if (existingCartItem) {
      let updatedItem;
      updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }

    return { items: updatedItems, totalAmount: updatedTotalAmount };
  }
  if (action.type === "REMOVE") {
    const existingCartItemIndex = state.items.findIndex((item) => item.id === action.id); // 선택될 요소 배열 인덱스를 가지고 옴
    const existingItem = state.items[existingCartItemIndex]; // 선택된 요소를 existingItem에 저장
    const updatedTotalAmount = state.totalAmount - existingItem.price; //현재 totalAmount에서 선택된 요소의 가격을 뺌
    let updatedItems;
    if (existingItem.amount === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.id); // id가 같은 해당 요소 삭제
    } else {
      const updatedItem = { ...existingItem, amount: existingItem.amount - 1 }; // amount요소를 하나씩 뺌
      updatedItems = [...state.items]; // 변경되지 않는 부분은 나둠
      updatedItems[existingCartItemIndex] = updatedItem; // 변경된 부분만 업데이트
    }
    return { items: updatedItems, totalAmount: updatedTotalAmount };
  }
  if (action.type === "CLEAR") {
    return defaultCartState;
  }
  return defaultCartState;
};

const CartProvider = ({ children }) => {
  const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);
  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: "ADD", item: item });
  };
  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };

  const clearCartHandler = () => {
    dispatchCartAction({ type: "CLEAR" });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
    clearCart: clearCartHandler,
  };
  return <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>;
};

export default CartProvider;
