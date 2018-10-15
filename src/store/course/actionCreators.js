import { FETCH_COURSE } from './actions';
import { apiUrl } from 'constants/api';

export const fetchCourse = courseId => ({
	type: FETCH_COURSE,
	payload: fetch(`${apiUrl}/get_course?course_id=${courseId}`).then(response =>
		response.json()
	)
});
