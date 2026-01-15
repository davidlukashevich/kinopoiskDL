import * as React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import FilmsOpinions from "../components/FilmsOpinions/FilmsOpinions"; // поправь путь под себя
import type { Opinions } from "../types/TOpinions";

jest.mock("react-i18next");

describe("FilmsOpinions", () => {
  const baseProps = {
    title: "Matrix",
    poster: "/poster.jpg",
    opinions: [] as Opinions[],
    theme: "light" as const,
    setRating: jest.fn(),
    addOpinions: jest.fn(),
    removeOpinions: jest.fn()
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders movie title and poster", () => {
    render(
      <FilmsOpinions
        {...baseProps}
        text=""
        rating={0}
        setText={jest.fn()}
      />
    );

    expect(screen.getByText("Matrix")).toBeInTheDocument();

    const img = screen.getByRole("img");
    expect(img).toHaveAttribute(
      "src",
      expect.stringContaining("https://image.tmdb.org/t/p/w500")
    );
  });

  it("uses placeholder when poster is missing", () => {
    render(
      <FilmsOpinions
        {...baseProps}
        poster={null}
        text=""
        rating={0}
        setText={jest.fn()}
      />
    );

    const img = screen.getByRole("img");
    expect(img).toHaveAttribute("src", expect.stringContaining("placehold.co"));
  });

  it("calls setText on textarea typing", async () => {
    const user = userEvent.setup();
    const setTextSpy = jest.fn();

    const Wrapper = () => {
      const [text, setText] = React.useState("");
      return (
        <FilmsOpinions
          {...baseProps}
          text={text}
          rating={0}
          setText={(v) => {
            setText(v);
            setTextSpy(v);
          }}
        />
      );
    };

    render(<Wrapper />);

    await user.type(screen.getByRole("textbox"), "Hello!");
    expect(setTextSpy).toHaveBeenLastCalledWith("Hello!");
  });

  it("calls setRating when star is clicked", async () => {
    const user = userEvent.setup();

    render(
      <FilmsOpinions
        {...baseProps}
        text=""
        rating={0}
        setText={jest.fn()}
      />
    );

    const buttons = screen.getAllByRole("button");
    const starButtons = buttons.slice(0, 5);

    await user.click(starButtons[2]);
    expect(baseProps.setRating).toHaveBeenCalledWith(3);
  });

  it("calls addOpinions on add button click", async () => {
    const user = userEvent.setup();

    render(
      <FilmsOpinions
        {...baseProps}
        text=""
        rating={0}
        setText={jest.fn()}
      />
    );

    await user.click(screen.getByText("opinions.add"));
    expect(baseProps.addOpinions).toHaveBeenCalled();
  });

  it("renders reviews and calls removeOpinions on close click", async () => {
    const user = userEvent.setup();

    const opinions: Opinions[] = [
      { id: 101, text: "Great movie", rating: 4, date: "10:10" }
    ];

    render(
      <FilmsOpinions
        {...baseProps}
        opinions={opinions}
        text=""
        rating={0}
        setText={jest.fn()}
      />
    );

    expect(screen.getByText("Great movie")).toBeInTheDocument();

    await user.click(screen.getByText("✕"));
    expect(baseProps.removeOpinions).toHaveBeenCalledWith(101);
  });

  it("review text supports word breaking", () => {
    const longText = "a".repeat(300);
    const opinions: Opinions[] = [
      { id: 1, text: longText, rating: 5, date: "10:10" }
    ];

    render(
      <FilmsOpinions
        {...baseProps}
        opinions={opinions}
        text=""
        rating={0}
        setText={jest.fn()}
      />
    );

    const review = screen.getByText(longText);
    expect(review).toHaveClass("break-words");
  });
});