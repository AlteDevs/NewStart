import { CREATE_COURSE } from './actions';
import { apiUrl } from 'constants/api';

export const createCourse = formData => ({
	type: CREATE_COURSE,
	payload: fetch(`${apiUrl}/create_course`, {
		method: 'POST',
		body: formData
	})
});
