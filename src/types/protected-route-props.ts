import firebase from "firebase/compat";

export interface ProtectedRouteProps {
  user?: firebase.User;
}
