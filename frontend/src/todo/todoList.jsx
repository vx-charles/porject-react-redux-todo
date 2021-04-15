import React from 'react'
import { connect } from 'react-redux'
import IconButton from '../template/iconButton'
import { bindActionCreators } from 'redux'
import { markAsDone, markAsPending, remove } from '../store/actions/todoActions'
import styled from 'styled-components'

const Table = styled.table`
    td, th {
        padding: 0.6rem;
        vertical-align: middle;
    }

    th:first-child {
        border-top: 0;
    }

    .btn {
        margin-right: 5px;
        color: #fff;
    }

    .markedAsDone {
        text-decoration: line-through;
        color: #777;
    }

    .tableActions {
        width: 115px;
    }    
`;

const TodoList = props => {

    const renderRows = () => {
        //se exitir a lista ele seta, senão ele seta um array de uma lista vazia.
        const list = props.list || []

        //chama na "list" o método map() e dentro do map() seto os elementos no "todo".
        return list.map(todo => (
            //._id --> "undescore id" (_id) é a chave gerado pelo mongo, sua chave de identificador único.
            <tr key={todo._id}>
                <td className={todo.done ? 'markedAsDone' : ''}>{todo.description}</td>
                <td>
                    <IconButton styles='success' icon='check' hide={todo.done}
                        onClick={() => props.markAsDone(todo)}>
                    </IconButton>
                    <IconButton styles='warning' icon='undo' hide={!todo.done}
                        onClick={() => props.markAsPending(todo)}>
                    </IconButton>
                    <IconButton styles='danger' icon='trash-o' hide={!todo.done}
                        onClick={() => props.remove(todo)}>
                    </IconButton>
                </td>
            </tr>
        ))
    }

    return (
        <Table className='table'>
            <thead>
                <tr>
                    <th>Descrição</th>
                    <th className='tableActions'>Ações</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </Table>
    )
}

const mapStateToProps = state => ({ list: state.todo.list }) // "list" está vindo da store do arquivo reducers.js
const mapDispatchToProps = dispatch => bindActionCreators({ markAsDone, markAsPending, remove }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TodoList) // faz a conexão do "mapStateToProps" com o "TodoList" para trazer os estados.
