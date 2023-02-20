export const keysearch = 'KeySearch';

export const DECREMENT = 'DECREMENT';

export const keywordaction = (keyword) => {
    return {
        type: keysearch,
        payload: keyword
    };
};

