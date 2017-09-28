import { ApiAiClient } from 'api-ai-javascript/es6/ApiAiClient';
import { LISTENING, REQUESTED_TARGET, NAVIGATION_DONE, STOP_LISTENING } from './types';
import GoogleNowSound from '../assets/sounds/google_now_voice.mp3';

export const listen = () => {
    return (dispatch) => {
        dispatch({ type: LISTENING });
        new Audio(GoogleNowSound).play();
        const client = new ApiAiClient({ accessToken: '8fd7835cb9ea4a97849eb376652e3e4e' });
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        const recognition = new SpeechRecognition();
        recognition.lang = 'en-EN';
        recognition.interimResults = false;
        recognition.maxAlternatives = 1;
        recognition.start();
        recognition.addEventListener('result', ({ results }) => {
            const last = results.length - 1;
            const text = results[last][0].transcript;
            client.textRequest(text).then(({ result }) => {
                const { action, parameters: { whereto } } = result;
                if (action === 'navigate') {
                    dispatch({
                        type: REQUESTED_TARGET,
                        payload: whereto,
                    });
                }
            }).catch((error) => {
                console.log(error);
                // TODO: Sorry! couldn't get that
            });
        });
        recognition.addEventListener('speechend', () => {
            dispatch({ type: STOP_LISTENING });
        });
    };
};

export const navigate = (nextTarget, callback) => {
    return (dispatch) => {
        callback();
        dispatch({
            type: NAVIGATION_DONE,
            payload: nextTarget,
        });
    };
};
