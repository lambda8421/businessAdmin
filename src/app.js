import 'font-awesome/css/font-awesome.min.css'
import './index.css'
import './index.scss'

import React from 'react'
import ReactDOM from 'react-dom'

console.log("hello");

let a = 123;
let test = (value)=> value;
test(a)

ReactDOM.render(
    <div>
        <i className="fa fa-address-book"></i>
        <h1>Hello, world!</h1>
    </div>
    ,
document.getElementById('root')
);