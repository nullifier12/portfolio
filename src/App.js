import { useEffect, useState } from "react";
import Main from "./components/Main";
function App() {
  const [fadeIn, setFade] = useState(false);
  useEffect(() => {
    setFade(true);
  }, []);
  return (
    <div className={`fade-in ${fadeIn ? "visible" : ""}`}>
      <Main />;
    </div>
  );
}

export default App;
