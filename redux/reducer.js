import { combineReducers, applyMiddleware } from 'redux'
import { fetchImageOfTheDay } from './apod'

export default rootReducer = combineReducers({
    apod: fetchImageOfTheDay,
})
