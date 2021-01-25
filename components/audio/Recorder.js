import { useEffect, useReducer } from "react";

/**
 * @typedef {Object} RecorderState
 * @prop {'idle' | 'recording' | 'complete'} RecorderState.status
 * @prop {?Date} RecorderState.startTime
 * @prop {?number} RecorderState.duration -- in milliseconds
 * @prop {?Blob} RecorderState.blob -- completed file blob
 */

let recorder;

/**
 * @type {RecorderState}
 * @constant
 */
const initialState = {
  status: "idle",
};

export default function Recorder() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const onRecClick = async () => {
    if (state.status !== "recording") {
      recorder = new AudioRecorder();
      await recorder.prepare((chunks) => {
        dispatch({ type: "stop", payload: new Blob(chunks) });
      });
      recorder?.start();
      dispatch({ type: "start" });
    } else {
      recorder?.stop();
    }
  };

  const onPlayClick = () => {
    new Audio(URL.createObjectURL(state.blob)).play();
  };

  return (
    <section>
      <button onClick={onRecClick}>
        {state.status === "recording" ? "Stop" : "Record"}
      </button>
      {state.status === "complete" ? (
        <button onClick={onPlayClick}>Play</button>
      ) : null}
    </section>
  );
}

/**
 *
 * @param {RecorderState} state
 * @param {{ type: string }} action
 * @returns {RecorderState}
 */
function reducer(state, action) {
  if (action.type === "start") {
    return {
      ...state,
      status: "recording",
      startTime: new Date(),
    };
  }
  if (action.type === "stop") {
    return {
      ...state,
      status: "complete",
      duration: Math.abs(new Date() - state.startTime),
      blob: action.payload,
    };
  }
  return state;
}

class AudioRecorder {
  constructor() {
    this.media = null;
    this.chunks = [];
  }

  async prepare(onstop) {
    this.reset();
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    this.media = new MediaRecorder(stream);
    this.media.addEventListener("dataavailable", (e) => {
      this.chunks.push(e.data);
    });
    this.media.onstop = (e) => {
      onstop(this.chunks);
    };
  }

  on(event, callback) {
    this.media.addEventListener(event, callback);
  }

  start() {
    this.media.start();
  }

  stop() {
    this.media.stop();
  }

  reset() {
    this.media = null;
    this.chunks = [];
  }
}
