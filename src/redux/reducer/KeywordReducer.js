
import { DECREMENT, keysearch } from '../action/KeyAction';
const INITIAL_STATE = {
    keyword: [],
    actionid: null
};
const KeywordReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case keysearch: {


            const newstate = [...state.keyword];
            newstate.push(action.payload)


            return {

                ...state, keyword: newstate


            };

            break
        }


        default: return state;
    }
};

export default KeywordReducer;