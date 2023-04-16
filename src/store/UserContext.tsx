import {createContext, PropsWithChildren, useEffect, useState} from "react";
import {auth} from "../firebase";
import {useNavigate} from "react-router-dom";
import {AppUser} from "../types/user";

export const UserContext = createContext<{ user: AppUser }>({
  user: null
});

const UserContextProvider = ({ children }: PropsWithChildren) => {
  const [user, setUser] = useState<AppUser>("unset");
  const navigate = useNavigate();

  useEffect(() => auth.onAuthStateChanged(user => {
    setUser(user);
  }), []);

  useEffect(() => {
    if (user === "unset") return;

    if (!user && location.pathname !== '/login') {
      return navigate('/login');
    }

    if (user && location.pathname === '/login') {
      return navigate('/');
    }
  }, [user]);

  return (
    <UserContext.Provider value={{ user }}>
      {children}
    </UserContext.Provider>
  )
}

export default UserContextProvider;
