function IfMap(conds, actions) {
    if (Array.isArray(conds)) {
        if (conds.length === actions.length - 1 || conds.length === actions.length) {
            for (let i = 0; i < conds.length; i++) {
                if (conds[i]) {
                    return actions[i];
                }
            }
        }
        else {
            throw "Invalid number of actions in your If";
        }
    }
    else {
        if (actions.length < 3) {
            if (conds) {
                return actions[0];
            }
            else {
                return actions[1];
            }
        }
        else {
            throw "Invalid number of actions in your If";
        }
    }
}

export {IfMap};