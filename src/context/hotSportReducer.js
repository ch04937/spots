import { IS_LOADING } from "./types";

const setIsLoading = (state, action) => {
	return {
		...state,
		isLoading: action.payload,
	};
};

const hotspotReducer = (state, action) => {
	switch (action.type) {
		case IS_LOADING:
			return setIsLoading(state, action);
		default:
			return state;
	}
};

export default hotspotReducer;
