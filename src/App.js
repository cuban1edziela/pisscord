import Button from "./components/Button";
import MessageInput from "./components/MessageInput";
import Header from "./components/Header";
import { useState } from "react";

function App() {
  const [showOptions, setShowOptions] = useState(false);
  const encipher = () => {
    console.log('jebac pis')
  }

  return (
    <div>
      <Header onOpen={() => setShowOptions(!showOptions)} showOpt={showOptions} />
      {showOptions === true && <><Button text='Encipher' func={encipher} /><MessageInput /></>}
      
    </div>
  );
}

export default App;
