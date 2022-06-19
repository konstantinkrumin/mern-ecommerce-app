import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api';
const TOKEN =
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYTk2YmRlM2ZjNmRjOWJkOGIwYTY4MiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1NTYwNDE4NCwiZXhwIjoxNjU1ODYzMzg0fQ.bbNkZUHxxTbA71uXP66bRPkn4rve9GM4POgDtaCjLDA';

export const publicRequest = axios.create({
	baseURL: BASE_URL
});

export const userRequest = axios.create({
	baseURL: BASE_URL,
	header: { token: `Bearer ${TOKEN}` }
});
