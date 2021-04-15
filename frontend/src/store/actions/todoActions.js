import axios from 'axios'

const URL = 'http://localhost:3005/api/todos'

// ACTION CREATOR - é um objeto que tem o atributo type e payload
export const changeDescription = event => ({
    type: 'DESCRIPTION_CHANGED',
    payload: event.target.value
})

export const search = () => {

    return (dispatch, getState) => { // middleware thunk tem 2 parâmetros dispatch e getState
        const description = getState().todo.description // ele vai lá na store e pega os valores do objeto.
        const search = description ? `&description__regex=/${description}/` : ''
        axios.get(`${URL}?sort=-createdAt${search}`) // faz a pesquisa de ordem decrescente de forma assíncrona (promisse)
            .then(resp => dispatch({ type: 'TODO_SEARCHED', payload: resp.data }))
    }
}

export const add = (description) => {
    return dispatch => { // dispatch aqui é um parâmetro do tipo função ou método e ele é responsável por disparar os eventos para o reducer.
        if(description !== ""){
        axios.post(URL, { description })
            .then(resp => dispatch(clear()))
            .then(resp => dispatch(search())) // retorna uma action e por si já manda para o reducer
        }
    }
}   

export const markAsDone = (todo) => {
    return dispatch => {
        axios.put(`${URL}/${todo._id}`, { ...todo, done: true })
            //.then(resp => dispatch({ type: 'TODO_MARKED_AS_DONE', payload: resp.data }))
            .then(resp => dispatch(search()))
    }
}

export const markAsPending = todo => {
    return dispatch => {
        axios.put(`${URL}/${todo._id}`, { ...todo, done: false })
            .then(resp => dispatch(search()))
    }
}

export const remove = todo => {
    return dispatch => {
        axios.delete(`${URL}/${todo._id}`)
            .then(resp => dispatch(search()))
    }
}

export const clear = () => {
    return [ // esses colchetes (um array) está usando um middleware "multi" para executar várias actions numa function.
        { type: 'TODO_CLEAR' },
        search()
    ]
}