import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const foodsStore = createSlice({
  name: "foods",
  initialState: {
    foodsList: [],
  },
  reducers: {
    setFoodList(state, action) {
      state.foodsList = action.payload;
    },
  },
});

const { setFoodList } = foodsStore.actions;
const fetchFoodsList = () => {
  return async (dispatch) => {
    const res = axios.get("http://localhost:3004/takeaway");

    dispatch(setFoodList(res.data));
  };
};

export { fetchFoodsList };
const reducers = foodsStore.reducer;
export default reducers;
