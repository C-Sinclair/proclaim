export default function Controls({ onPlay, onPause }) {
  return (
    <article>
      <button onClick={onPlay}>Play</button>
      <button onClick={onPause}>Pause</button>
    </article>
  );
}
