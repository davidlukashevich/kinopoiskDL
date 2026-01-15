import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter, Routes, Route, Link } from "react-router-dom";

const Home = () => (
  <div>
    <h1>Home</h1>
    <Link to="/favorites">Go favorites</Link>
  </div>
);

const Favorites = () => <h1>Favorites</h1>;

describe("Integration: navigation", () => {
  it("navigates between pages", async () => {
    const user = userEvent.setup();

    render(
      <MemoryRouter initialEntries={["/"]}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByText("Home")).toBeInTheDocument();

    await user.click(screen.getByText("Go favorites"));
    expect(screen.getByText("Favorites")).toBeInTheDocument();
  });
});