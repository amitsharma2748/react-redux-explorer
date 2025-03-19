import { PayloadAction } from "@reduxjs/toolkit";
import userListReducer, { fetchUsers } from "../userListSlice";
import { API_STATUS_TYPE } from "../../../utils/globalTypes";

//  Define Initial State
const initialState = {
  status: API_STATUS_TYPE.NONE,
  resData: null,
  filteredList: null,
};

Object.defineProperty(import.meta, "env", {
    value: {
      VITE_BACKEND_URL: "https://jsonplaceholder.typicode.com/",
    },
    writable: true,
  });

test("should handle fetchUsers.rejected", () => {
  //  Simulate rejected action with an error payload
  const action: PayloadAction<string> = {
    type: fetchUsers.rejected.type,
    payload: "Error fetching users",
  };

  //  Call reducer with the action
  const newState = userListReducer(initialState, action);

  //  Assertions
  expect(newState.status).toBe(API_STATUS_TYPE.ERROR);
  expect(newState.resData).toBeNull(); // Ensure resData is cleared
});
