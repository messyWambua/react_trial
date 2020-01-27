import mockAxios from "axios";
import { fetchShow  } from "../store/actions/singleShowActions";
import { store } from "../utils/testUtils";

jest.mock("axios");

describe("ShowActions", () => {
  beforeEach(() => {
    store.clearActions();
  });

  test("Dispatches FETCH_SHOWS and returns data on success", async () => {
    mockAxios.get.mockImplementation(() =>
      Promise.resolve({
        data: {
              id: 1,
              name: 'witcher'
            }
      })
    );

    await store.dispatch(fetchShow());
    const actions = store.getActions();
    expect(actions[0].type).toEqual("FETCH_SHOW");
    expect(actions[0].payload.id).toEqual(1);
    expect(actions[0].payload.name).toEqual('witcher');
  });
});
