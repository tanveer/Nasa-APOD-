import {FETCHING_APOD, FETCHING_APOD_SUCCESS, FETCHING_APOD_FAILURE} from './actions'

const initialState = {
    apod: [],
    isFetching: false,
    error: false,
  }

export default apod = (state = initialState, action) => {
    switch(action.type) {
        case FETCHING_APOD: 
            return {
                ...state,
                isFetching: true
            }
        case FETCHING_APOD_SUCCESS: 
            return {
                ...state,
                isFetching: false,
                apod: action.payload
            }
        case FETCHING_APOD_FAILURE: 
            return {
                ...state,
                isFetching: false,
                error: true
            }
        default: 
            return state
    }
}