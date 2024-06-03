import { useState } from "react";
import Main from "./homepage/main";

function App() {
  const [signedIn, setSignedIn] = useState<boolean>(true);

  return (
    <>
      <div className="bg-slate-500">
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
