import { signIn, signOut, signUp } from './actionCreators';
import { getIsAuth, getToken } from './selectors';
import reducer from './reducer';

export { signOut, signUp, signIn, getIsAuth, getToken };

export default reducer;
