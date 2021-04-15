//importando duas dependências.
//Sistema de módulos do ecmascript 2015, import e export
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/font-awesome/css/font-awesome.min.css'

// import '../template/custom.css'

import React from 'react'
import Menu from '../src/template/menu'
import { BrowserRouter } from 'react-router-dom'
import Contents from './contents/contents'

//componente baseado em uma função.
const App = props => (
    <div className='container'>
        <BrowserRouter>
            <Menu />
            <Contents />
        </BrowserRouter>
    </div>
)

export default App