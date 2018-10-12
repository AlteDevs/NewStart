import { SIGN_IN, SIGN_OUT, SIGN_UP } from './actions';

export const signIn = () => ({
	type: SIGN_IN,
	payload: fetch('/api/signIn')
});

export const signUp = () => ({
	type: SIGN_IN,
	payload: fetch('/api/signUp')
});

export const signOut = () => ({
	type: SIGN_IN,
	payload: fetch('/api/signOut')
});
