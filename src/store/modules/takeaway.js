import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const foodsStore = createSlice({
  name: "foods",
  initialState: {
    foodsList: [],
    activeIndex: 0,
    cartList: [],
  },
  reducers: {
    setFoodList(state, action) {
      state.foodsList = action.payload;
    },
    changeActiveIndex(state, action) {
      state.activeIndex = action.payload;
    },
    addCart(state, action) {
      const item = state.cartList.find((item) => item.id === action.payload.id);
      if (item) {
        item.count++;
      } else {
        state.cartList.push({ ...action.payload, count: 1 });
      }
    },
  },
});

const { setFoodList, changeActiveIndex, addCart } = foodsStore.actions;

const fetchFoodsList = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get("http://localhost:3004/takeaway");
      const foodsWithCount = res.data.map((food) => ({ ...food, count: 1 }));
      dispatch(setFoodList(foodsWithCount));
    } catch (error) {
      console.error("Failed to fetch foods list:", error);
    }
  };
};

export { fetchFoodsList, changeActiveIndex, addCart };
const reducers = foodsStore.reducer;
export default reducers;
