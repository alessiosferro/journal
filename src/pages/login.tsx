import GoogleButton from "react-google-button";
import {signInWithGoogle} from "../firebase";
import {Center} from "@chakra-ui/react";

const LoginPage = () => {
  return (
    <Center minHeight="100vh">
      <GoogleButton onClick={signInWithGoogle} />
    </Center>
  );
}

export default LoginPage;
