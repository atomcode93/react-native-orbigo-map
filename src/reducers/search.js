import ActionTypes from '../actions/types'

const initialState = {
  isSearching: false,
  nearbyRegions: []
}

const SearchReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SEARCH_REQUEST:
      return { ...state, isSearching: true }
    case ActionTypes.SEARCH_SUCCESS:
      return { ...state, isSearching: false, nearbyRegions: action.regions }
    case ActionTypes.SEARCH_FAIL:
      return { ...state, isSearching: false }
    default:
      return state
  }
}

export default SearchReducer
