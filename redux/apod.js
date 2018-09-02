import {
    FETCHING_APOD,
    FETCHING_APOD_SUCCESS,
    FETCHING_APOD_FAILURE,
    FETCH_IMAGE_OF_THE_DAY
} from './actions'

const initialState = {
    image: {},
    apod: [],
    isFetching: false,
    error: false,
}

export const fetchImageOfTheDay = (state = initialState, action) => {
    switch (action.type) {
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
        case FETCH_IMAGE_OF_THE_DAY:
            return {
                ...state,
                isFetching: false,
                image: action.payload
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
