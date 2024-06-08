import { useState } from "react";
import Home from "./homepage/home";

function App() {
  const [signedIn, setSignedIn] = useState<boolean>(false);

  return (
    <>
      <Home
        signedIn={signedIn}
        setSignedIn={setSignedIn}
        username="Test"
        password="other"
        displayName=""
      />
    </>
  );
}

export default App;
