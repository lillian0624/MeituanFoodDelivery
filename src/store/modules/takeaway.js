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
    try {
      const res = await axios.get("http://localhost:3004/takeaway");
      dispatch(setFoodList(res.data));
    } catch (error) {
      console.error("Failed to fetch foods list:", error);
    }
  };
};

export { fetchFoodsList };
const reducers = foodsStore.reducer;
export default reducers;
