import { useState } from "react";
import Home from "./homepage/home";

function App() {
  const [showModal, setShowModal] = useState<boolean>(true);
  const [modalType, setModalType] = useState<string>("Login");
  const [signedIn, setSignedIn] = useState<boolean>(false);

  return (
    <>
      <Home
        showModal={showModal}
        setShowModal={setShowModal}
        signedIn={signedIn}
        setSignedIn={setSignedIn}
        modalType={modalType}
        setModalType={setModalType}
        username=""
      />
    </>
  );
}

export default App;
