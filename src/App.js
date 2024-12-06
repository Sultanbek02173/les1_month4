import { useState } from "react";
import Header from "./components/header/Header";
import Cancel from "./components/Cancel";

function App() {
  const [num, setNum] = useState(0);

  const sum = () => {
    if(num < 10) setNum(num + 1)
  }

  const min = () => {
    if(num > 0) setNum(num - 1)
  }
  
  return (
    <div>
      <Header />
      <h1>Hello React</h1>
      <h2>{num}</h2>
      <button onClick={sum}>sum (+)</button>
      <button onClick={min}>min (-)</button>
      <Cancel setNum={setNum} />
    </div>
  );
}

export default App;
