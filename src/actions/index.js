import { ApiAiClient } from 'api-ai-javascript/es6/ApiAiClient';
import { LISTENING, REQUESTED_TARGET, NAVIGATION_DONE, STOP_LISTENING } from './types';

export const listen = () => {
    return (dispatch) => {
        dispatch({ type: LISTENING });
        const client = new ApiAiClient({ accessToken: '8fd7835cb9ea4a97849eb376652e3e4e' });
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        const recognition = new SpeechRecognition();
        recognition.lang = 'en-EN';
        recognition.interimResults = false;
        recognition.maxAlternatives = 1;
        recognition.start();
        recognition.addEventListener('speechstart', () => {
            console.log('Speech has been detected.');
        });
        recognition.addEventListener('result', ({ results }) => {
            const last = results.length - 1;
            const text = results[last][0].transcript;
            client.textRequest(text).then(({ result }) => {
                console.log(result);
                const { action, parameters: { whereto } } = result;
                if (action === 'navigate') {
                    dispatch({
                        type: REQUESTED_TARGET,
                        payload: whereto,
                    });
                }
            }).catch((error) => {
                console.log(error);
            });
        });
        recognition.addEventListener('speechend', () => {
            dispatch({ type: STOP_LISTENING });
            recognition.stop();
        });
    };
};

export const navigate = (nextTarget, callback) => {
    return (dispatch) => {
        console.log(nextTarget);
        callback();
        dispatch({
            type: NAVIGATION_DONE,
            payload: nextTarget,
        });
    };
};
