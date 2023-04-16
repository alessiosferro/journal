import GoogleButton from "react-google-button";

const App = () => {
  const loginHandler = () => {
    console.log('login');
  }

  return (
    <GoogleButton onClick={loginHandler} />
  );
}

export default App
