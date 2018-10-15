import { CREATE_COURSE, FETCH_COURSES } from './actions';
import { apiUrl } from 'constants/api';

export const createCourse = formData => ({
	type: CREATE_COURSE,
	payload: fetch(`${apiUrl}/create_course`, {
		method: 'POST',
		body: formData
	})
});

export const fetchCourses = () => ({
	type: FETCH_COURSES,
	payload: fetch(`${apiUrl}/get_all_courses`).then(response => response.json())
});
