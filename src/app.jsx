import 'font-awesome/css/font-awesome.min.css'
import './index.css'
import './index.scss'

import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Link, Switch, Route, Redirect } from 'react-router-dom'

 import Home from 'page/home/index.jsx'


class App extends React.Component{
    render(){
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Redirect from="*" to="/"/>
                </Switch>
            </Router>
        )
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);
