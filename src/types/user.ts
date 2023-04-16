import {auth} from "../firebase";

export type AppUser = typeof auth.currentUser | "unset";
