type loginModalProps = {
  //Establishes whether user is logged in
  signedIn: boolean;
  setSignedIn: Function;

  //Actual credential information
  username: string;
  password: string;
  displayName: string;
};

export default function LoginModal(props: loginModalProps) {
  function handleLogin() {
    console.log("Login pressed");
    props.setSignedIn(true);
  }

  function createAcct() {
    console.log("Create pressed");
  }

  return (
    <>
      <div
        className={"relative z-10 " + (props.signedIn ? "hidden" : "")}
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
      >
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full justify-center p-4 text-center sm:items-center sm:p-0">
            <div className="relative transform overflow-hidden rounded-lg border-8 border-double border-amber-600 bg-orange-200 shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
              <div className="px-4 pt-8 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="text-center px-4 pb-4">
                    <h3
                      className="text-3xl font-semibold text-yellow-900 pb-2"
                      id="modal-title center"
                    >
                      Login
                    </h3>
                    <div className="mt-2">
                      <div className="text-sm text-red-600 p-2 border-4 border-solid rounded-lg border-red-800 bg-red-200">
                        WARNING: All credentials are stored in plain text with
                        no encryption. Please do not use a real password.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="justify-items-stretch pb-8">
                <div>
                  <div>Username</div>
                  <input className="bg-white border border-gray-400 rounded mb-2"></input>
                </div>
                <div>
                  <div>Password</div>
                  <input className="bg-white border border-gray-400 rounded"></input>
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
          </div>
        </div>
      </div>
    </>
  );
}
