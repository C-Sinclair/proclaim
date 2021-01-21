import { useCallback, useEffect, useReducer } from "react";

/**
 * @typedef {Object} RecorderState
 * @prop {'idle' | 'recording' | 'complete'} RecorderState.status
 * @prop {?Date} RecorderState.startTime
 * @prop {?number} RecorderState.duration -- in milliseconds
 * @prop {?string[]} RecorderState.chunks -- chunks of recorded audio
 * @prop {?Blob} RecorderState.blob -- completed file blob
 */

/**
 * @type {RecorderState}
 * @constant
 */
const initialState = {
  status: "idle",
};

export default function Recorder() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {}, [dispatch]);

  const onRecClick = () =>
    state.status === "recording" ? state.media.stop : state.media?.start;

  const onPlayClick = () => {
    new Audio(URL.createObjectURL(state.blob)).play();
  };

  return (
    <section>
      <button onClick={onRecClick(state.status)}>
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
  if (action.type === "freshchunk") {
    return {
      ...state,
      chunks: [...(state.chunks ?? []), action.payload],
    };
  }
  return state;
}

class AudioRecorder {
  constructor() {
    this.media = null;
  }

  async prepare() {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    this.media = new MediaRecorder(stream);
  }

  on(event, callback) {
    // "dataavailable" | "stop"
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
  }
}
