const initialState = {
    cursos: [],
    cursosInternal: [],
    id_curso:''
};

const AuthReducer = (state = [], action) => {

    if (state.length == 0) {
        return initialState;
    }

    if (action.type == 'cursos') {
        return { ...state, cursos: action.payload.cursos };
    }

    if (action.type == 'add_id_curso') {
        return { ...state, id_curso: action.payload.id_curso };
    }

    if (action.type == 'imagem_cursos') {
        return { ...state, cursosInternal: action.payload.cursosInternal };
    }
    
    return state;
};

export default AuthReducer;