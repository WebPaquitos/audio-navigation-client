export default (state = {}, { type, payload }) => {
    switch (type) {
        case 'JARVIS':
            return payload;
        default:
            return state;
    }
};
