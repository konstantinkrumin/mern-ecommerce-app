import { loginStart, loginSuccess, loginFailure } from './userSlice';
import {
	getProductStart,
	getProductSuccess,
	getProductFailure,
	deleteProductStart,
	deleteProductSuccess,
	deleteProductFailure
} from './/productSlice';
import { publicRequest, userRequest } from '../requestMethods';

export const login = async (dispatch, user) => {
	dispatch(loginStart());

	try {
		const res = await publicRequest.post('/auth/login', user);
		dispatch(loginSuccess(res.data));
	} catch (err) {
		dispatch(loginFailure());
	}
};

export const getProducts = async dispatch => {
	dispatch(getProductStart());

	try {
		const res = await publicRequest.get('/products');
		dispatch(getProductSuccess(res.data));
	} catch (err) {
		dispatch(getProductFailure());
	}
};

export const deleteProduct = async (id, dispatch) => {
	dispatch(deleteProductStart());

	try {
		await userRequest.delete(`/products/${id}`);
		dispatch(deleteProductSuccess(id));
	} catch (err) {
		dispatch(deleteProductFailure());
	}
};
