import Modal from "./modal";

type HomeProps = {
  //Modal settings
  showModal: boolean;
  setShowModal: Function;
  modalType: string;
  setModalType: Function;

  //Establishes whether user is logged in
  signedIn: boolean;
  setSignedIn: Function;

  //Signed in user account
  username: string;
};

export default function Home(props: HomeProps) {
  function handleOptions() {
    props.setShowModal(true);
    props.setModalType("Options");
  }

  return (
    <>
      {/* Universal modal for homepage */}
      <Modal
        showModal={props.showModal}
        setShowModal={props.setShowModal}
        modalType={props.modalType}
        setModalType={props.setModalType}
        signedIn={props.signedIn}
        setSignedIn={props.setSignedIn}
        username={props.username || ""}
      />
      <div className="h-screen bg-[url('./img/main-background.png')] bg-cover bg-center bg-no-repeat">
        {/* Options table */}
        <div className="h-screen flex items-center justify-center">
          <table className="table-auto mt-40 border-8 border-double border-violet-800 bg-transparent">
            <thead>
              <tr className="text-3xl font-medium text-violet-600 text-center bg-violet-200">
                <td>Options</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="flex items-center justify-center px-8 pt-4">
                  <button className="p-2 rounded-lg bg-indigo-500 w-40 border-2 border-indigo-700 hover:bg-indigo-600">
                    Create Game
                  </button>
                </td>
              </tr>
              <tr>
                <td className="flex items-center justify-center py-2">
                  <button className="p-2 rounded-lg bg-indigo-500 w-40 border-2 border-indigo-700 hover:bg-indigo-600">
                    Join Game
                  </button>
                </td>
              </tr>
              <tr>
                <td className="flex items-center justify-center pb-2">
                  <button
                    onClick={() => {
                      handleOptions();
                    }}
                    className="p-2 rounded-lg bg-indigo-500 w-40 border-2 border-indigo-700 hover:bg-indigo-600"
                  >
                    Options
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
