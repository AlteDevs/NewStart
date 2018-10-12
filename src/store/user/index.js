import { fetchUser } from './actionCreators';
import { FETCH_PENDING, FETCH_SUCCEEDED, FETCH_FAILED } from './actions';
import { getUser } from './selectors';
import reducer from './reducer';

export { fetchUser, FETCH_PENDING, FETCH_SUCCEEDED, FETCH_FAILED, getUser };

export default reducer;
