import { IS_LOADING, USER_ROOM_SUCCESS, USER_ROOM_FAILURE } from "./types";

const setIsLoading = (state, action) => {
	return {
		...state,
		isLoading: action.payload,
	};
};
const userRoomSuccess = (state, action) => {
	return {
		...state,
		isLoading: false,
		userRoom: action.payload,
	};
};
const userRoomFailure = (state, action) => {
	return {
		...state,
		isLoading: false,
		userRoomError: action.payload,
	};
};

const hotspotReducer = (state, action) => {
	switch (action.type) {
		case IS_LOADING:
			return setIsLoading(state, action);
		case USER_ROOM_SUCCESS:
			return userRoomSuccess(state, action);
		case USER_ROOM_FAILURE:
			return userRoomFailure(state, action);
		default:
			return state;
	}
};

export default hotspotReducer;
