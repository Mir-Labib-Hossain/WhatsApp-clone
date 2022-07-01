import { useAppSelector } from "../redux/app/hooks";
import { RootState } from "../redux/app/store";
 
export default function useAuth() {
  const session = useAppSelector((state: RootState) => state.persistedReducer.authSlice.session);
  return session;
}