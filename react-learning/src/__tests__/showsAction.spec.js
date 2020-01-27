import mockAxios from "axios";
import { fetchShows } from "../store/actions/allShowsActions";
import { store } from "../utils/testUtils";

jest.mock("axios");

describe("meetupActions", () => {
  beforeEach(() => {
    store.clearActions();
  });

  test("Dispatches FETCH_SHOWS and returns data on success", async () => {
    mockAxios.get.mockImplementation(() =>
      Promise.resolve({
        data: {
          data: [
            {
              id: 1,
              season: "Another episode"
            }
          ]
        }
      })
    );

    await store.dispatch(fetchShows());
    const actions = store.getActions();
    expect(actions[0].type).toEqual("FETCH_SCHEDULE_SHOWS");
    expect(actions[0].payload.data[0].id).toEqual(1);
    expect(actions[0].payload.data[0].season).toEqual("Another episode");
  });
});

