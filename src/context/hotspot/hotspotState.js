import React, { createContext, useEffect, useReducer } from "react";

import { IS_LOADING } from "./types";

import hotspotReducer from "./hotspotReducer";
import { clientWithAuth } from "../../utils/api";
import { loadState, saveState } from "../../utils/localStorage";

export const HotspotContext = createContext();

export const HotspotState = props => {
	const initialState = {
		isLoading: false,
	};

	const localState = loadState("hotspot");

	const [state, dispatch] = useReducer(
		hotspotReducer,
		localState || initialState
	);
	useEffect(() => {
		saveState("hotspot", state);
	}, [state]);

	const getUserRoom = async () => {
		dispatch({ type: IS_LOADING, payload: true });
	};
	return (
		<HotspotContext.Provider
			value={{
				isLoading: state.isLoading,
			}}
		>
			{props.children}
		</HotspotContext.Provider>
	);
};
