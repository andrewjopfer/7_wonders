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

export default function Main(props: loginModalProps) {
  return (
    <>
      <LoginModal
        signedIn={props.signedIn}
        setSignedIn={props.setSignedIn}
        username={props.username}
        password={props.password}
        displayName={props.displayName}
      />
      <h1>This is the main page</h1>
    </>
  );
}
