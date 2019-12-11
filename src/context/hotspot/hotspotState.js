import React, { createContext, useEffect, useReducer } from "react";

import { IS_LOADING, USER_ROOM_SUCCESS, USER_ROOM_FAILURE } from "./types";

import hotspotReducer from "./hotspotReducer";
import { clientWithAuth } from "../../utils/api";
import { loadState, saveState } from "../../utils/localStorage";

export const HotspotContext = createContext();

export const HotspotState = props => {
	const initialState = {
		isLoading: false,
		userRoom: [],
		userRoomError: null,
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
		try {
			const room = await clientWithAuth(`users/room`);
			dispatch({
				type: USER_ROOM_SUCCESS,
				payload: room.data.room,
			});
		} catch (error) {
			console.log(error);
			dispatch({ type: USER_ROOM_FAILURE, payload: error });
		}
	};
	return (
		<HotspotContext.Provider
			value={{
				isLoading: state.isLoading,
				userRoom: state.userRoom,
				userRoomError: state.userRoomError,
				getUserRoom,
			}}
		>
			{props.children}
		</HotspotContext.Provider>
	);
};
