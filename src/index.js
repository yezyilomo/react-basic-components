import React from 'react';
import ReactDOM from 'react-dom';

import {If, IfMap} from './lib';

//Component Tests 


let IfTest = props => (  
<If cond={false}>
    <div>
        The condition is True
    </div>
    <div>
        The condition is False
    </div>
</If>
)

ReactDOM.render(<IfTest/>, document.getElementById('root'));
