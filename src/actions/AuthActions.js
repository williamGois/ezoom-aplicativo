export const intiCurso = () => {

    return (dispatch) => {
      
        try {
            return fetch('https://fiuzas.com.br/ezoom/api/cursos', {
                method: 'GET',
            }).then((response) => response.json()).then((responseJson) => {

                // alert(JSON.stringify(responseJson));
                dispatch({
                    type: 'cursos',
                    payload: {
                        cursos: responseJson,
                    }
                });
            }).catch((error) => {
            });
        } catch (error) {
        }
    }
}

export const idCurso = (id) => {

    return (dispatch) => {
        dispatch({
            type: 'add_id_curso',
            payload: {
                id_curso: id,
            }
        });
    }
}

export const intiCursoImagemCursos = (id) => {

    return (dispatch) => {
      
        try {
            return fetch('https://fiuzas.com.br/ezoom/api/curso/'+id+'', {
                method: 'GET',
            }).then((response) => response.json()).then((responseJson) => {

                // alert(JSON.stringify(responseJson));
                dispatch({
                    type: 'imagem_cursos',
                    payload: {
                        cursosInternal: responseJson,
                    }
                });
            }).catch((error) => {
            });
        } catch (error) {
        }
    }
}