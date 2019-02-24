import React from 'react';
import ReactDOM from 'react-dom';

import { If, For, Block } from './lib';

//Component Tests 

function Tests(props) {
    let isLoggedIn = true;
    let userName = 'Jason';
    let age = 20;
    let attendee = ['John', 'James', 'Ariana', 'Rose', 'Dan', 'Vannesa'];

    return (
        <div>
            <p><b>Login Status: </b> {If(isLoggedIn, ['You are logged in..', 'Please login first..'])} </p>

            <b>Party</b>
            <If cond={age < 21} >
                <Block>
                    <div>Sorry {userName} you are not allowed to party here!..</div>
                    <div>Your age is below 21!..</div>
                </Block>
                <Block>
                    <div>Welcome {userName} </div>
                    <div>What kind drink can I get you?..</div>
                </Block>
            </If>
            
            <b><br/>Party Attendee</b>
            <For i in={attendee}>
                {i =>
                    <Block>
                        <div>
                            * {i}
                        </div>
                    </Block>
                }
            </For>

        </div>
    );
}


ReactDOM.render(<Tests />, document.getElementById('root'));
