import { fetchFilmDetails } from "../store/reducers/filmsReducer";

describe("fetchFilmDetails action", () => {
  it("creates correct action with payload", () => {
    const action = fetchFilmDetails({ id: "10", lang: "en-US" });

    expect(action).toEqual({
      type: "fetchFilmDetails",
      payload: { id: "10", lang: "en-US" }
    });
  });

  it("allows undefined id (payload stays valid)", () => {
    const action = fetchFilmDetails({ id: undefined, lang: "pl-PL" });

    expect(action.type).toBe("fetchFilmDetails");
    expect(action.payload).toEqual({ id: undefined, lang: "pl-PL" });
  });
});