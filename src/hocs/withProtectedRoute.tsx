import {FC, useContext} from "react";
import {UserContext} from "../store/UserContext";
import {ProtectedRouteProps} from "../types/protected-route-props";

const withProtectedRoute = <TProps extends ProtectedRouteProps & JSX.IntrinsicAttributes,>(Component: FC<TProps>) => (props: TProps) => {
  const { user } = useContext(UserContext);

  if (!user || user === 'unset') return null;

  return <Component {...props} user={user} />
}

export default withProtectedRoute;
