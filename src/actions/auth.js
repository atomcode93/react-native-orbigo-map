import ActionTypes from './types';
import firebase, { firebaseDB, firebaseApp } from '../config/firebase';

export const loginRequest = (email, password) => {
	return (dispatch) => {
		dispatch({
			type: ActionTypes.LOGIN_REQUEST
		})
		return new Promise(function(resolve, reject){{
			console.log(email, password);
			firebaseApp.auth().signInWithEmailAndPassword(email, password)
			.then( user => {
				console.log(user);
				const userRef = firebaseDB.child(`users/${user.uid}`);
				userRef.on('value', snapshot => {
					dispatch({
						type: ActionTypes.LOGIN_SUCCESS,
						uid: user.uid,
						profile: snapshot.val(),
						method: 'email'
					});
				})
				resolve(true);
			})
			.catch(error => {
				dispatch({
					type: ActionTypes.LOGIN_FAIL,
					error: error.message
				});
				reject(error.message);
			})
		}})
	}
}

export const signupRequest = (profileData) => {
	return (dispatch) => {
		dispatch({
			type: ActionTypes.SIGNUP_REQUEST
		})
		return new Promise(function(resolve, reject){{
			firebaseApp.auth().createUserWithEmailAndPassword(profileData.email, profileData.password)
			.then( user => {
				console.log("firebase signup uid", user.uid);
				const userRef = firebaseDB.child(`users/${user.uid}`);
				userRef.update(profileData);
				dispatch({
					type: ActionTypes.SIGNUP_SUCCESS,
					uid: user.uid,
					profile: profileData,
					method: 'email'
				});
				resolve(true);
			})
			.catch(error => {
				dispatch({
					type: ActionTypes.SIGNUP_FAIL,
					error: error.message
				});
				console.log(error.message);
				reject(error.message);
			})
		}})
	}
}
