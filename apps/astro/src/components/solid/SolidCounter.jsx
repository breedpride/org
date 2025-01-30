import { createSignal } from 'solid-js';

function SolidCounter() {
  const [count, setCount] = createSignal(0);

  return (
    <>
      <div className="counter">
        <button onClick={() => setCount(count() - 1)}>-</button>
        <pre>{count()}</pre>
        <button onClick={() => setCount(count() + 1)}>+</button>
      </div>
    </>
  );
}

export default SolidCounter;