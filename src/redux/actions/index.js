export const SET_PERSON = "SET_PERSON";
export const SET_PERSON_DATA = "SET_PERSON_DATA";

const setPerson = payload => ({ type:SET_PERSON, payload});
const setDataPerson = payload => ({type:SET_PERSON_DATA,payload});

export const setSeletedPerson = payload => {
    return dispatch => {
        //Activas en el estado un indicador de busqueda de datos
        dispatch(setPerson(payload));
    }
};

export const getDataPeople = ()=>{

    return dispatch => {
        console.log("ejecutando funcion");
        //Activas en el estado un indicador de busqueda de datos
        dispatch(setDataPerson());
    }
}