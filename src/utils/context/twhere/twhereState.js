import React, { createContext, useEffect, useReducer } from "react";

import { IS_LOADING, LOCAL_SPOT_SUCCESS, LOCAL_SPOT_FAILURE } from "./types";

import twhereReducer from "./twhereReducer";
import { loadState, saveState } from "../../localStorage";
import axios from "axios";
export const TwhereContext = createContext();

export const TwhereState = props => {
	const initialState = {
		isLoading: false
	};
	const localState = loadState("twhere");

	const [state, dispatch] = useReducer(
		twhereReducer,
		localState || initialState
	);
	useEffect(() => {
		saveState("twhere", state);
	}, [state]);

	const getLocalSpots = async location => {
		dispatch({ type: IS_LOADING, payload: true });
		try {
			const spot = await axios.get(
				"http://localhost:3300/search/yelp",
				location
			);
			dispatch({
				type: LOCAL_SPOT_SUCCESS,
				payload: spot.data.spot
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
				savedSpots: state.savedSpots,
				savedSpotsError: state.savedSpotsError,
				getLocalSpots
			}}
		>
			{props.children}
		</TwhereContext.Provider>
	);
};
