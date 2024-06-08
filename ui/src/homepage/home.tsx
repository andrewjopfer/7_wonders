import LoginModal from "../auth/login";

type loginModalProps = {
  //Establishes whether user is logged in
  signedIn: boolean;
  setSignedIn: Function;

  //Actual credential information
  username: string;
  password: string;
  displayName: string;
};

export default function Home(props: loginModalProps) {
  console.log(props.signedIn);
  return (
    <>
      <LoginModal
        signedIn={props.signedIn}
        setSignedIn={props.setSignedIn}
        username={props.username}
        password={props.password}
        displayName={props.displayName}
      />
      <div className="h-screen bg-[url('./img/main-background.png')] bg-cover bg-center bg-no-repeat">
        {/* Options table */}
        <div className="h-screen flex items-center justify-center">
          <table className="table-auto mt-20 border-8 border-double border-violet-800 bg-violet-200">
            <thead>
              <tr className="text-3xl font-medium text-violet-600">Options</tr>
            </thead>
            <tr>
              <td className="flex items-center justify-center">
                <button className="p-2 rounded-tl-lg bg-indigo-500">
                  Create Game
                </button>
              </td>
            </tr>
            <td className="flex items-center justify-center">
              <button className="bg-indigo-500 animate-bounce">
                Join Game
              </button>
            </td>
            <tr>
              <td className="flex items-center justify-center">
                <button>Options</button>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </>
  );
}
