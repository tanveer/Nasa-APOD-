export const FETCHING_APOD_SUCCESS = 'FETCH_APOD_SUCCESS'
export const FETCHING_APOD = 'FETCHING_APOD'
export const FETCHING_APOD_FAILURE = 'FETCH_APOD_FAILURE'

const key = '5LquIng3MJwMKoodIStkbl18Ba2ZUusx4wE9P5xo'
const base_url = 'https://api.nasa.gov/planetary/apod?'
const date = '2018-07-01'
const url = `${base_url}api_key=${key}&start_date=${date}`

export const ferchApodFromAPI = () => {
    return (dispatch) => {
        dispatch(fetchApod())
        fetch(url)
        .then(data => data.json())
        .then(result => dispatch(fetchApodSuccess(result)))
        .catch(err => dispatch(fetchApodFailure(err)))    
    }
}

const fetchApodSuccess = (data) => {
    return {
        type: FETCHING_APOD_SUCCESS,
        payload: data 
    }
}

const fetchApod = () => {
    return {
       type: FETCHING_APOD,
    }
}

const fetchApodFailure = () => {
    return {
        type: FETCHING_APOD_FAILURE,
        error: true,
    }
}
