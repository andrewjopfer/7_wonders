import { useState } from "react";
import Main from "./homepage/main";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [signedIn, setSignedIn] = useState<boolean>(false);

  return (
    <>
      <div>
        <Main
          signedIn={signedIn}
          setSignedIn={setSignedIn}
          username=""
          password=""
          displayName=""
        />
      </div>
    </>
  );
}

export default App;
