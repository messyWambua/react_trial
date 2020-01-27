import mockAxios from "axios";
import { convertSpeechToText  } from "../store/actions/voiceActions";
import { store } from "../utils/testUtils";

jest.mock("axios");

describe("VoiceActions", () => {
  beforeEach(() => {
    store.clearActions();
  });

  test("Dispatches FETCH_SHOWS and returns data on success", async () => {
    mockAxios.mockImplementation(() =>
      Promise.resolve({
        data: {
              speech: 'voice'
            }
      })
    );

    await store.dispatch(convertSpeechToText({data: '<p>hello</p>'}));
    const actions = store.getActions();
    expect(actions[0].type).toEqual("CONVERT_TEXT_TO_SPEECH");
    expect(actions[0].payload.speech).toEqual('voice');
  });
});
