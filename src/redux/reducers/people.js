import { SET_PERSON_DATA} from "../../redux/actions";

export const people = (state = {},action)=>{
    switch(action.type){
        case 'SET_PERSON_DATA':
            return {...state, data:action.payload};
            break;
        default:
            return state;
            break;
    }
};