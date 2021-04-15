import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import Todo from '../todo/todo'
import About from '../about/about'

const Contents = props => (
    <div>
        <Switch>
            <Route path="/about">
                <About />
            </Route>

            <Route path="/todos">
                <Todo />
            </Route>

            <Route exact path="/">
                <Redirect to="/todos" />
            </Route>

        </Switch>
    </div>
)

export default Contents