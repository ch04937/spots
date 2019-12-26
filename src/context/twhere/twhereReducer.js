import { IS_LOADING, LOCAL_SPOT_SUCCESS, LOCAL_SPOT_FAILURE } from "./types";

const spotFormat = spot => {
	return {
		...spot,
		searches: [],
	};
};

const setIsLoading = (state, action) => {
	return {
		...state,
		isLoading: action.payload,
	};
};
const localSpotSuccess = (state, action) => {
	return {
		...state,
		isLoading: false,
		localSpot: action.payload.map(spotFormat),
	};
};
const localSpotFailure = (state, action) => {
	return {
		...state,
		isLoading: false,
		localSpotError: action.payload,
	};
};

const twhereReducer = (state, action) => {
	switch (action.type) {
		case IS_LOADING:
			return setIsLoading(state, action);
		case LOCAL_SPOT_SUCCESS:
			return localSpotSuccess(state, action);
		case LOCAL_SPOT_FAILURE:
			return localSpotFailure(state, action);
		default:
			return state;
	}
};

export default twhereReducer;
