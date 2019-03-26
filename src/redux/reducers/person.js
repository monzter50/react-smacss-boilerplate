import {SET_PERSON} from '../../redux/actions'
export const person = (state={},action)=>{
    switch(action.type){
        case SET_PERSON:
            return  action.payload;
              break;
        default:
            return state;
             break;
    }
};