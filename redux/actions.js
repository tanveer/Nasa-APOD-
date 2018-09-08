export const FETCHING_APOD_SUCCESS = 'FETCH_APOD_SUCCESS'
export const FETCHING_APOD = 'FETCHING_APOD'
export const FETCHING_APOD_FAILURE = 'FETCH_APOD_FAILURE'
export const FETCH_IMAGE_OF_THE_DAY = 'FETCH_IMAGE_OF_THE_DAY'

const key = '5LquIng3MJwMKoodIStkbl18Ba2ZUusx4wE9P5xo'
const base_url = 'https://api.nasa.gov/planetary/apod?'
const start_date = '2018-08-01'


const url = `${base_url}api_key=${key}&start_date=${start_date}`
const daily_image_url = 'https://api.nasa.gov/planetary/apod?api_key=5LquIng3MJwMKoodIStkbl18Ba2ZUusx4wE9P5xo'

export const ferchApodFromAPI = () => {
    return (dispatch) => {
        dispatch(fetchApod())
        fetch(url)
            .then(data => data.json())
            .then(result => dispatch(fetchApodSuccess(result)))
            .catch(err => dispatch(fetchApodFailure(err)))
    }
}

export const fetchImageOfTheDay = () => {
    return (dispatch) => {
        dispatch(fetchApod())
        fetch(daily_image_url)
            .then(data => data.json())
            .then(result => dispatch(fecthDailyImage(result)))
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

const fecthDailyImage = (data) => {
    return {
        type: FETCH_IMAGE_OF_THE_DAY,
        payload: data
    }
}
