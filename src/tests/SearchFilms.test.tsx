import * as React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import type { NavigateFunction } from "react-router-dom";
import SearchFilms from "../components/SearchFilms/SearchFilms";
import type { FilmsResponse } from "../types/TFilms";

jest.mock("react-i18next");

const filmCardSpy = jest.fn();

jest.mock("../components/FilmCard/FilmCardContainer", () => ({
  __esModule: true,
  default: (props: any) => {
    filmCardSpy(props);
    return <div data-testid="film-card">{props.title}</div>;
  }
}));

describe("SearchFilms", () => {
  const navigate = (jest.fn() as unknown) as NavigateFunction;

  beforeEach(() => {
    filmCardSpy.mockClear();
    (navigate as any).mockClear?.();
  });

  it("renders title and input", () => {
    render(
      <SearchFilms
        query=""
        searchFilms={null}
        theme="light"
        setQuery={jest.fn()}
        navigate={navigate}
      />
    );

    expect(screen.getByText("search.title")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("search.placeholder")).toBeInTheDocument();
  });

  it("calls setQuery on typing", async () => {
    const user = userEvent.setup();
    const setQuerySpy = jest.fn();

    const Wrapper = () => {
      const [q, setQ] = React.useState("");

      return (
        <SearchFilms
          query={q}
          searchFilms={null}
          theme="light"
          setQuery={(v) => {
            setQ(v);
            setQuerySpy(v);
          }}
          navigate={navigate}
        />
      );
    };

    render(<Wrapper />);

    await user.type(screen.getByRole("textbox"), "matrix");
    expect(setQuerySpy).toHaveBeenLastCalledWith("matrix");
  });

  it("shows notFound when results array is empty", () => {
    const emptyResponse = { results: [] } as unknown as FilmsResponse;

    render(
      <SearchFilms
        query="abc"
        searchFilms={emptyResponse}
        theme="dark"
        setQuery={jest.fn()}
        navigate={navigate}
      />
    );

    expect(screen.getByText("search.notFound")).toBeInTheDocument();
  });

  it("renders cards and passes correct props to FilmCardContainer", () => {
    const response = {
      results: [
        { id: 1, title: "A", poster_path: "/a.jpg" },
        { id: 2, title: "B", poster_path: null }
      ]
    } as unknown as FilmsResponse;

    render(
      <SearchFilms
        query="a"
        searchFilms={response}
        theme="light"
        setQuery={jest.fn()}
        navigate={navigate}
      />
    );

    expect(screen.getAllByTestId("film-card")).toHaveLength(2);

    expect(filmCardSpy).toHaveBeenCalledWith(
      expect.objectContaining({
        id: 1,
        title: "A",
        img: "/a.jpg",
        navigate
      })
    );

    expect(filmCardSpy).toHaveBeenCalledWith(
      expect.objectContaining({
        id: 2,
        title: "B",
        img: null,
        navigate
      })
    );
  });
});