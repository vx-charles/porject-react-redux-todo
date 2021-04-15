import React from 'react'
import Grid from '../template/grid'
import IconButton from '../template/iconButton'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { changeDescription, search, add, clear } from '../store/actions/todoActions'
import styled from 'styled-components'

const Form = styled.div`
    padding-bottom: 60px;    
    display: flex;

    .btn {
        margin-right: 5px;
    }

    .btn.btn-default {
        background: #ccc;
    }
`;

const TodoForm = props => {

    const keyHandler = (e) => {
        const { add, search, description, clear } = props
        if (e.key === 'Enter') {
            e.shiftKey ? search() : add(description)
        } else if (e.key === 'Escape') {
            clear()
        }
    }

    // Inicializa a pesquisa para trazer os dados das tarefas.
    window.onload = function () {
        search()
    }

    const { add, search, description, clear } = props

    return (
        <Form role='form' className='todoForm'>
            <Grid cols='12 9 10'>
                <input id='description' className='form-control'
                    placeholder='Adicione uma tarefa'
                    onChange={props.changeDescription}
                    onKeyUp={keyHandler}
                    value={props.description}
                />
            </Grid>

            <Grid cols='12 3 2'>
                <IconButton styles='primary' icon='plus'
                    onClick={() => add(description)}></IconButton>
                <IconButton styles='info' icon='search'
                    onClick={search}></IconButton>
                <IconButton styles='default' icon='close'
                    onClick={() => clear()}></IconButton>
            </Grid>
        </Form>
    )
}

const mapStateToProps = state => ({ description: state.todo.description }) // retorna um objeto que vai ensinar para o react-redux como ele vai mapear os estados para os atributos que está dentro de props do componente.
const mapDispatchToProps = dispatch => bindActionCreators({ changeDescription, search, add, clear }, dispatch) // faz a ligação que passa as action do objeto e manda para os reducers e o segundo parâmetro para fazer o dispatch.
export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)