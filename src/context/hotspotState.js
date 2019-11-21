import React, { createContext, useEffect, useReducer } from "react";

import { IS_LOADING } from "./types";

import hotspot from "./hotspotReducer";
import { clientWithAuth } from "../utils/api";
import { loadState, saveState } from "../utils/localStorage";

export const HotspotContext = createContext();

export const HotspotState = props => {
	const initialState = {
		isLoading: false,
	};
	const localState = loadState("hotspot");
	const [state, dispatch] = useReducer();
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
