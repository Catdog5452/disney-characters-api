import axios from "axios";
import { useEffect, useReducer } from "react";

const ACTIONS = {
  MAKE_REQUEST: "make-request",
  GET_DATA: "get-data",
  ERROR: "error",
};

const BASE_URL = "https://api.disneyapi.dev/character";

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

export default function useFetchCharacters(params, page) {
  const [state, dispatch] = useReducer(reducer, {
    characters: [],
    loading: true,
    totalPages: 0,
  });

  useEffect(() => {
    dispatch({ type: ACTIONS.MAKE_REQUEST });
    axios
      .get(BASE_URL, {
        params: { pageSize: 10, page: page, ...params },
      })
      .then((res) => {
        dispatch({
          type: ACTIONS.GET_DATA,
          payload: {
            characters: res.data.data,
            totalPages: res.data.info.totalPages,
          },
        });
      })
      .catch((e) => {
        dispatch({ type: ACTIONS.ERROR, payload: { error: e } });
      });
  }, [params, page]);

  return state;
}
