import { LISTENING, REQUESTED_TARGET, NAVIGATION_DONE, STOP_LISTENING } from '../actions/types';

const INITIAL_STATE = {
    listening: false,
    currentTarget: null,
    nextTarget: null,
};

export default (state = INITIAL_STATE, { type, payload }) => {
    switch (type) {
        case LISTENING:
            return {
                ...state,
                listening: true,
            };
        case REQUESTED_TARGET:
            return {
                ...state,
                nextTarget: payload,
            };
        case NAVIGATION_DONE:
            return {
                ...state,
                currentTarget: payload,
                nextTarget: null,
            };
        case STOP_LISTENING:
            return {
                ...state,
                listening: false,
            };
        default:
            return state;
    }
};
