import React, { createContext, useReducer, useEffect } from "react";

import { IS_LOADING, SINGIN_SUCCESS, SIGNIN_FAILURE } from "./types";
import authReducer from "./authReducer";

import { client } from "./authReducer";
import { loadState, saveState, removeState } from "../../utils/localStorage";
import { async } from "q";

export const AuthContext = createContext();

export const AuthState = props => {
	const initialState = {
		isLoading: false,
		signInError: null,
		signUpError: null,
		signOutError: null,
		accessToken: null,
		userProfile: null,
	};
	const loadState = loadState("auth");

	const [state, dispatch] = useReducer(
		authReducer,
		localState || initialState
	);

	useEffect(() => {
		saveState("auth", state);
	}, [state]);

	const signUpUser = async values => {
		dispatch({ types: IS_LOADING, payload: true });
		try {
			const response = await client.post("/auth/register/", values);

			dispatch({ type: SIGNUP_SUCCESS, payload: response.data });
		} catch (e) {
			console.log(e);
			dispatch({ type: SIGNUP_FAILURE, payload: e });
		}
    };
    const signInWithUserIdAndPassword = async credential => {
        dispatch ({ type: IS_LOADING, payload: true})
        try{
            const response = await client.post('/auth/login', credential)

            dispatch({ type: SIGNUP_SUCCESS, payload: response.data})
        }catch(e){
            console.log(e)
            dispatch({type: SIGNIN_FAILURE, payload: e})
        }
    }
    const signOut = () => {
        try {
          dispatch({ type: SIGNOUT_SUCCESS })
          removeState()
        } catch (error) {
          dispatch({ type: SIGNOUT_FAILURE, payload: error.message })
        }
      }
    
    return(
        <AuthContext.Provider values={{
            accessToken: state.accessToken,
            isLoading= state.isLoading,
            signInError: state.signInError,
            signUpError= state.signUpError,
            userProfile: state.userProfile,
            signInWithUserIdAndPassword,
            signUpUser,
            signOut,
        }}>{props.children}</AuthContext.Provider>
    )
};
