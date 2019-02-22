import React from 'react';
import ReactDOM from 'react-dom';

import {If} from './lib';

//Component Tests 

function IfTest(props) {
    let isLoggedIn = true;
    let age = 26;

    return <div>
               {If(isLoggedIn, ['You are logged in..', 'Please login first..'])}
               <If cond={age<21} >
                   <div>You are still young for a beer!..</div>
                   <div>You are old enough to drink a beer!..</div>
               </If>
           </div>
}

ReactDOM.render(<IfTest />, document.getElementById('root'));
