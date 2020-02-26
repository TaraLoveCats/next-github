import { createStore, combineReducers, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import axios from 'axios'

const userInitialState = {}
const LOGOUT = 'LOGOUT'

//thunk
export function logout() {
	return dispatch => {
		axios.post('/logout')
			.then(resp => {
				if (resp.status === 200) {
					dispatch({ type: LOGOUT })
				} else {
					console.log('logout failed', resp)
				}
			})
			.catch(err => {
				console.log('logout failed', err)
			})
			
	}
}

function userReducer(state = userInitialState, action) {
	switch (action.type) {
		case LOGOUT:
			return {}
		default:
			return state
	}
}

const allReducers = combineReducers({
	user: userReducer,
})

//export一个创建store的函数，每次生成的store都是新的
export default function initializeStore(state) {
	const store = createStore(
		allReducers,
		{ user: userInitialState, ...state },
		composeWithDevTools(applyMiddleware(ReduxThunk)),
	)

	return store
}