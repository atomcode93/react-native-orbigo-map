import { AsyncStorage } from 'react-native'

import ActionTypes from '../actions/types'

const InitialState = {
	uid: null,
	method: null,
	isLoading: false,
	isSocial: false,
	isCompleted: false,
	profile: {},
	errorMessage: null
}

const AuthReducer = (state = InitialState, action) => {
		switch(action.type){
			case ActionTypes.SOCIAL_SIGNUP_REQUEST:
				return { ...state, isSocial: true }
			case ActionTypes.SOCIAL_SIGNUP_FAIL:
				return { ...state, isSocial: false }
			case ActionTypes.LOGIN_REQUEST:
				return { ...state, isLoading: true };
			case ActionTypes.LOGIN_SUCCESS:
				return { ...state, uid: action.uid, method: action.method, isLoading: false, profile: action.profile}
			case ActionTypes.LOGIN_FAIL:
				return { ...state, isLoading: false };
			case ActionTypes.SIGNUP_REQUEST:
				return { ...state, isLoading: true };
			case ActionTypes.SIGNUP_SUCCESS:
				return { ...state, uid: action.uid, method: action.method, isLoading: false, isSocial: false, profile: action.profile };
			case ActionTypes.SIGNUP_FAIL:
				return { ...state, isLoading: false, isSocial: false, errorMessage: action.error };
			case ActionTypes.SIGNOUT:
				return InitialState;
			case ActionTypes.COMPLETE_PROFILE_REQUEST:
				return { ...state, isLoading: true };
			case ActionTypes.COMPLETE_PROFILE:
				return { ...state, isLoading: false, isCompleted: true };
			default:
				return state;
	}
}
export default AuthReducer;