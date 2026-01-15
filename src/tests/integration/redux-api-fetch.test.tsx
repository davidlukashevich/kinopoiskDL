import { configureStore, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Provider, useDispatch, useSelector } from "react-redux";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

type Film = {
  id: number;
  title: string;
};

export const fetchFilms = createAsyncThunk("films/fetch", async () => {
  const res = await fetch("https://example.com/api");
  const data = await res.json();
  return data as Film[];
});

type FilmsState = {
  items: Film[];
  loading: boolean;
};

const filmsSlice = createSlice({
  name: "films",
  initialState: { items: [], loading: false } as FilmsState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchFilms.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchFilms.fulfilled, (state, action) => {
      state.loading = false;
      state.items = action.payload;
    });
  }
});

const FilmsList = () => {
  const dispatch = useDispatch<any>();
  const { items, loading } = useSelector((s: { films: FilmsState }) => s.films);

  return (
    <div>
      <button onClick={() => dispatch(fetchFilms())}>Load</button>

      {loading && <p>Loading...</p>}

      <ul>
        {items.map((f) => (
          <li key={f.id}>{f.title}</li>
        ))}
      </ul>
    </div>
  );
};

describe("Integration: Redux + API fetching", () => {
  it("loads data from API and renders list", async () => {
    const user = userEvent.setup();

    global.fetch = jest.fn().mockResolvedValue({
      json: async () => [
        { id: 1, title: "Matrix" },
        { id: 2, title: "Interstellar" }
      ]
    }) as any;

    const store = configureStore({
      reducer: { films: filmsSlice.reducer }
    });

    render(
      <Provider store={store}>
        <FilmsList />
      </Provider>
    );

    await user.click(screen.getByText("Load"));

    expect(await screen.findByText("Matrix")).toBeInTheDocument();
    expect(await screen.findByText("Interstellar")).toBeInTheDocument();
  });
});