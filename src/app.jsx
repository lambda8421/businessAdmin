import './index.scss'

import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Link, Switch, Route, Redirect } from 'react-router-dom'

import Home from 'page/home/index.jsx'
import Layout from 'component/layout/index.jsx'

class App extends React.Component{
    render(){
        return (
            <Router>
                <Layout>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Redirect from="*" to="/"/>
                    </Switch>
                </Layout>
            </Router>
        )
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);
