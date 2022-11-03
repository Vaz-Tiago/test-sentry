import { useState } from "react";
import "./App.css";

import Panel from "./components/Panel";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Panel list={"teste"} />
    </div>
  );
}

export default App;
