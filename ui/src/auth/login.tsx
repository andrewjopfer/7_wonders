import { useEffect } from "react";
import audio from "../audio/background.mp3";

type LoginProps = {
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

export default function Login(props: LoginProps) {
  var bgMusic = new Audio(audio);
  bgMusic.volume = 0.2;
  bgMusic.loop = true;

  function handleLogin() {
    console.log("Login pressed");
    props.setShowModal(false);
    props.setSignedIn(true);
    bgMusic.play();
  }

  function createAcct() {
    console.log("Create pressed");
    bgMusic.pause();
  }

  return (
    <div>
      <div className="justify-items-stretch py-8">
        <div>
          <div>Username</div>
          <input className="bg-white border border-gray-400 rounded mb-2 text-center"></input>
        </div>
        <div>
          <div>Password</div>
          <input
            type="password"
            className="bg-white border border-gray-400 rounded text-center"
          ></input>
        </div>
      </div>
      <div className="px-4 py-3 sm:flex sm:flex-row justify-center sm:px-6">
        <button
          onClick={() => {
            handleLogin();
          }}
          type="button"
          className="inline-flex w-full justify-center rounded-md bg-violet-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-purple-900 sm:w-auto"
        >
          Login
        </button>
        <button
          onClick={() => {
            createAcct();
          }}
          type="button"
          className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-200 sm:ml-3 sm:mt-0 sm:w-auto"
        >
          Create Account
        </button>
      </div>
    </div>
  );
}

export function LoginHeader() {
  return (
    <h3
      className="text-3xl font-semibold text-yellow-900 pb-2"
      id="modal-title center"
    >
      Login
    </h3>
  );
}

export function LoginWarning() {
  return (
    <div className="text-sm text-red-600 p-2 border-4 border-solid rounded-lg border-red-800 bg-red-200">
      WARNING: All credentials are stored in plain text with no encryption.
      Please do not use a real password.
    </div>
  );
}
