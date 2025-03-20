import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store"; 
import { TABLE_HEADER } from "../IndexUsersTypes";
import { updateFilteredList } from "../../../redux/slice/userListSlice";
import UserTableActionBar from "./UserTableActionBar";
import "@testing-library/jest-dom";


const mockStore = configureStore([]);
const mockDispatch = jest.fn();

jest.mock("../../../redux/store", () => ({
  ...jest.requireActual("../../../redux/store"),
  useAppDispatch: () => mockDispatch,
}));

describe("UserTableActionBar Component", () => {
  let store: any;

  beforeEach(() => {
    store = mockStore({
      userList: {
        resData: [
          { id: 1, name: "Alice", email: "alice@example.com", company: { name: "TechCorp" } },
          { id: 2, name: "Bob", email: "bob@example.com", company: { name: "DevHouse" } },
        ],
      },
    });
    store.dispatch = mockDispatch;
  });

  test("renders search input and dropdown correctly", () => {
    render(
      <Provider store={store}>
        <UserTableActionBar />
      </Provider>
    );

    // Check dropdown presence
    expect(screen.getByRole("combobox")).toBeInTheDocument();

    // Check input field presence
    expect(screen.getByPlaceholderText("Search by Name")).toBeInTheDocument();
  });

  test("updates selected column when dropdown is changed", async () => {
    render(
      <Provider store={store}>
        <UserTableActionBar />
      </Provider>
    );

    const dropdown = screen.getByRole("combobox");

    // Change selection to "Email"
    await userEvent.selectOptions(dropdown, TABLE_HEADER.EMAIL);
    expect(dropdown).toHaveValue(TABLE_HEADER.EMAIL);
  });

  test("dispatches action when user types in search input", async () => {
    render(
      <Provider store={store}>
        <UserTableActionBar />
      </Provider>
    );

    const searchInput = screen.getByPlaceholderText("Search by Name");

    // Type "Alice" in the search box
    await userEvent.type(searchInput, "Alice");

    expect(mockDispatch).toHaveBeenCalledWith(
      updateFilteredList([{ id: 1, name: "Alice", email: "alice@example.com", company: { name: "TechCorp" } }])
    );
  });
});
