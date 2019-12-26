import React, { createContext, useEffect, useReducer } from "react";

import { IS_LOADING, LOCAL_SPOT_SUCCESS, LOCAL_SPOT_FAILURE } from "./types";

import twhereReducer from "./twhereReducer";
import { clientWithAuth } from "../../utils/api";
import { loadState, saveState } from "../../utils/localStorage";

export const TwhereContext = createContext();

export const TwhereState = props => {
	const initialState = {
		isLoading: false,
		localSpotsError: null,
		localSpots: [],
	};

	const localState = loadState("twhere");

	const [state, dispatch] = useReducer(
		twhereReducer,
		localState || initialState
	);
	useEffect(() => {
		saveState("twhere", state);
	}, [state]);

	const getLocalSpots = async () => {
		dispatch({ type: IS_LOADING, payload: true });
		try {
			const spot = await clientWithAuth.post(`search/yelp`, location);
			dispatch({
				type: LOCAL_SPOT_SUCCESS,
				payload: spot.data.spot,
			});
		} catch (error) {
			console.log(error);
			dispatch({ type: LOCAL_SPOT_FAILURE, payload: error });
		}
	};
	return (
		<TwhereContext.Provider
			value={{
				isLoading: state.isLoading,
				localSpots: state.localSpots,
				localSpotsError: state.localSpotsError,
				getLocalSpots,
			}}
		>
			{props.children}
		</TwhereContext.Provider>
	);
};
