import { loadingAction } from "../store/actions/loadingActions";
import { store } from "../utils/testUtils";


describe("loadingActions", () => {
  beforeEach(() => {
    store.clearActions();
  });

  test("Dispatches FETCH_SHOWS and returns data on success", async () => {
    await store.dispatch(loadingAction());
    const actions = store.getActions();
    expect(actions[0].type).toEqual("LOADING");
  });
});
