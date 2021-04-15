import React from 'react'

// Dependências externas
import PageHeader from '../template/pageHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'

const Todo = props => (
    <div>
        <PageHeader name='Tarefas' small='Cadastro'></PageHeader>
        <TodoForm />
        <TodoList />
    </div>
)

export default Todo