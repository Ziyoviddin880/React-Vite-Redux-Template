import { useSelector, useDispatch } from "react-redux";
import { addCount, removeCount, resetCount } from "./store/counterSlice/index";

function App() {
  const value = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="container">
      <h1>{value}</h1>
      <button onClick={() => dispatch(addCount())}>Plus</button>
      <button onClick={() => dispatch(resetCount())}>Reset</button>
      <button onClick={() => dispatch(removeCount())}>Minus</button>
    </div>
  );
}

export default App;
