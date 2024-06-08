type MenuProps = {
  //Establishes whether user is logged in
  showModal: boolean;
  setShowModal: Function;
  modalType: string;
  setModalType: Function;

  signedIn: boolean;
  setSignedIn: Function;

  //Actual credential information
  username: string;
  password: string;
  displayName: string;
};

export default function Options(props: MenuProps) {
  function handleLogout() {
    console.log("Logout pressed");
    props.setSignedIn(false);
    props.setModalType("Login");
  }

  function handleChange() {
    console.log("Change pressed");
  }

  return (
    <div>
      <div className="justify-items-stretch py-8"></div>
      <input
        className="bg-white border border-gray-400 rounded mb-2 text-center"
        value={props.displayName}
      ></input>
      <div className="justify-items-stretch"></div>
      <button
        onClick={() => {
          handleChange();
        }}
        type="button"
        className="inline-flex w-full justify-center rounded-md bg-violet-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-purple-900 sm:w-auto"
      >
        Change Display Name
      </button>
      <div className="px-4 py-3 sm:flex sm:flex-row justify-center sm:px-6">
        <button
          onClick={() => {
            handleLogout();
          }}
          type="button"
          className="inline-flex w-full justify-center rounded-md bg-violet-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-purple-900 sm:w-auto"
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export function OptionsHeader() {
  return (
    <h3
      className="text-3xl font-semibold text-yellow-900 pb-2"
      id="modal-title center"
    >
      Options
    </h3>
  );
}
