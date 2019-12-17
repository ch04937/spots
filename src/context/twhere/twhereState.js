import React, { createContext, useEffect, useReducer } from "react";

import { IS_LOADING, USER_ROOM_SUCCESS, USER_ROOM_FAILURE } from "./types";

import twhereReducer from "./twhereReducer";
import { clientWithAuth } from "../../utils/api";
import { loadState, saveState } from "../../utils/localStorage";

export const TwhereContext = createContext();

export const TwhereState = props => {
	const initialState = {
		isLoading: false,
		userRoom: [],
		userRoomError: null,
	};

	const localState = loadState("twhere");

	const [state, dispatch] = useReducer(
		twhereReducer,
		localState || initialState
	);
	useEffect(() => {
		saveState("twhere", state);
	}, [state]);

	const getUserRoom = async () => {
		dispatch({ type: IS_LOADING, payload: true });
		try {
			const room = await clientWithAuth(`users/room`);
			console.log(room);
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
		<TwhereContext.Provider
			value={{
				isLoading: state.isLoading,
				userRoom: state.userRoom,
				userRoomError: state.userRoomError,
				getUserRoom,
			}}
		>
			{props.children}
		</TwhereContext.Provider>
	);
};
