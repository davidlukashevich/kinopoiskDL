import { configureStore, createSlice } from "@reduxjs/toolkit";
import { Provider, useDispatch, useSelector } from "react-redux";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

type State = {
  count: number;
};

const counterSlice = createSlice({
  name: "counter",
  initialState: { count: 0 } as State,
  reducers: {
    increment: (state) => {
      state.count += 1;
    }
  }
});

const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector((s: { counter: State }) => s.counter.count);

  return (
    <div>
      <p data-testid="count">{count}</p>
      <button onClick={() => dispatch(counterSlice.actions.increment())}>
        Increment
      </button>
    </div>
  );
};

describe("Integration: Redux component state", () => {
  it("updates UI after state change", async () => {
    const user = userEvent.setup();

    const store = configureStore({
      reducer: { counter: counterSlice.reducer }
    });

    render(
      <Provider store={store}>
        <Counter />
      </Provider>
    );

    expect(screen.getByTestId("count")).toHaveTextContent("0");

    await user.click(screen.getByText("Increment"));
    expect(screen.getByTestId("count")).toHaveTextContent("1");
  });
});