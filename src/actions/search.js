import ActionTypes from './types';
import axios from 'axios';
import { API_URL } from '../config'

import lithgow from '../assets/maps/lithgow.geo'
import wollongong from '../assets/maps/wollongong.geo'
import blueMountains from '../assets/maps/blueMountains.geo'

// const searchActions = {
//   searchSuccess () {
//     return dispatch => {
//       dispatch({
//         type: ActionTypes.SEARCH_SUCCESS
//       })
//     }
//   }
// }

// export default searchActions

export const searchNearByRegions = (lat, lng) => {
	const formData = new FormData();
	formData.append("location", {"lat": lat, "lng": lng});

	const config = {
		headers: {
			"Content-Type": "multipart/form-data; charset=utf-8;"
		}
	};
  return (dispatch) => {
		dispatch({
			type: ActionTypes.SEARCH_REQUEST
		})
		return new Promise(function(resolve, reject){
			fetch(API_URL + '/Polygons/get_regions_in_polygon', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					"location":{"lat":"-33.8082","lng":"151.0835"} 
				})
			})
			.then((response) => response.json())
			.then((responseJson) => {
				dispatch({
					type: ActionTypes.SEARCH_SUCCESS,
					regions: responseJson.regions
				});
				resolve(true);
			})
			.catch((error) => {
				dispatch({
					type: ActionTypes.SEARCH_FAIL,
					error: error.message
				});
				reject(error.message);
			})
			
		})
	}
}
