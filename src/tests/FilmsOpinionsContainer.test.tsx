import { render, waitFor } from "@testing-library/react";
import { act } from "react";
import FilmsOpinionsContainer from "../components/FilmsOpinions/FilmsOpinionsContainer"; // поправь путь под себя

jest.mock("react-i18next");

const opinionsViewSpy = jest.fn();

jest.mock("../components/FilmsOpinions/FilmsOpinions", () => ({
  __esModule: true,
  default: (props: any) => {
    opinionsViewSpy(props);
    return null;
  }
}));

jest.mock("react-router-dom", () => ({
  __esModule: true,
  useParams: () => ({ id: "123" })
}));

jest.mock("../provider/ThemeProvider", () => ({
  __esModule: true,
  useTheme: () => ({ theme: "light" })
}));

jest.mock("react-redux", () => ({
  __esModule: true,
  useDispatch: () => jest.fn(),
  useSelector: (selector: any) =>
    selector({
      films: {
        filmDetails: {
          title: "Matrix",
          poster_path: "/poster.jpg"
        }
      }
    })
}));

describe("FilmsOpinionsContainer", () => {
  beforeEach(() => {
    opinionsViewSpy.mockClear();
    localStorage.clear();

    jest.spyOn(Date, "now").mockReturnValue(999);
    jest.spyOn(Date.prototype, "toLocaleTimeString").mockReturnValue("12:34");
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("loads opinions from localStorage for given movie id", async () => {
    localStorage.setItem(
      "reviews",
      JSON.stringify({
        "123": [{ id: 1, text: "Saved", rating: 5, date: "10:10" }]
      })
    );

    render(<FilmsOpinionsContainer />);

    await waitFor(() => {
      const lastProps = opinionsViewSpy.mock.calls.at(-1)?.[0];
      expect(lastProps.opinions).toHaveLength(1);
      expect(lastProps.opinions[0].text).toBe("Saved");
    });
  });

  it("adds opinion and syncs to localStorage", async () => {
    render(<FilmsOpinionsContainer />);

    await waitFor(() => {
      expect(opinionsViewSpy).toHaveBeenCalled();
    });

    const props = opinionsViewSpy.mock.calls.at(-1)?.[0];

    act(() => {
      props.setText("My review");
      props.setRating(4);
    });

    const propsAfterInput = opinionsViewSpy.mock.calls.at(-1)?.[0];

    act(() => {
      propsAfterInput.addOpinions();
    });

    const stored = JSON.parse(localStorage.getItem("reviews") || "{}");
    expect(stored["123"]).toHaveLength(1);
    expect(stored["123"][0]).toEqual(
      expect.objectContaining({
        id: 999,
        text: "My review",
        rating: 4,
        date: "12:34"
      })
    );
  });

  it("removes opinion and syncs to localStorage", async () => {
    localStorage.setItem(
      "reviews",
      JSON.stringify({
        "123": [
          { id: 1, text: "A", rating: 5, date: "10:10" },
          { id: 2, text: "B", rating: 4, date: "10:20" }
        ]
      })
    );

    render(<FilmsOpinionsContainer />);

    await waitFor(() => {
      const p = opinionsViewSpy.mock.calls.at(-1)?.[0];
      expect(p.opinions).toHaveLength(2);
    });

    const p = opinionsViewSpy.mock.calls.at(-1)?.[0];

    act(() => {
      p.removeOpinions(1);
    });

    const stored = JSON.parse(localStorage.getItem("reviews") || "{}");
    expect(stored["123"]).toHaveLength(1);
    expect(stored["123"][0].id).toBe(2);
  });
});