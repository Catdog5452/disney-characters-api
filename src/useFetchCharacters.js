import axios from "axios";
import { useEffect, useReducer } from "react";

// Action types for the reducer
const ACTIONS = {
  MAKE_REQUEST: "make-request",
  GET_DATA: "get-data",
  ERROR: "error",
};

// Base URL for the Disney API
const BASE_URL = "https://api.disneyapi.dev/character";

// Reducer function to handle state transitions
function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.MAKE_REQUEST:
      return { loading: true, characters: [], totalPages: 0 };
    case ACTIONS.GET_DATA:
      return {
        ...state,
        loading: false,
        characters: action.payload.characters,
        totalPages: action.payload.totalPages,
      };
    case ACTIONS.ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        totalPages: 0,
        characters: [],
      };
    default:
      return state;
  }
}

/**
 * Custom hook for fetching Disney characters.
 * @param {Object} params - The parameters for the API request.
 * @param {number} page - The current page number.
 * @returns {Object} The state object containing characters, loading status, and error information.
 */
export default function useFetchCharacters(params, page) {
  // Initial state using useReducer
  const [state, dispatch] = useReducer(reducer, {
    characters: [],
    loading: true,
    totalPages: 0,
  });

  // Effect to handle API request when params or page change
  useEffect(() => {
    // Dispatch action to indicate the start of the request
    dispatch({ type: ACTIONS.MAKE_REQUEST });

    // Make the API request using Axios
    axios
      .get(BASE_URL, {
        params: { pageSize: 10, page: page, ...params },
      })
      .then((res) => {
        // Dispatch action to update state with received data
        dispatch({
          type: ACTIONS.GET_DATA,
          payload: {
            characters: res.data.data,
            totalPages: res.data.info.totalPages,
          },
        });
      })
      .catch((e) => {
        // Dispatch action to handle errors
        dispatch({ type: ACTIONS.ERROR, payload: { error: e } });
      });
  }, [params, page]);

  // Return the current state
  return state;
}
