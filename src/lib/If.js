import React from 'react';
import { IfMap } from '.';


function If() {
    let props = arguments[0];
    if(props.cond !== undefined && props.children !== undefined){
        // As React component
        return IfMap(props.cond, props.children);
    }

    // As JS function
    return IfMap(arguments[0], arguments[1])
}


export { If }