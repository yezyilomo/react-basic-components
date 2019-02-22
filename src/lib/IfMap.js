function IfMap(conds, actions, notFound = null) {
    if (!Array.isArray(conds)) {
        conds = [conds];
    }
    if (!Array.isArray(actions)) {
        actions = [actions];
    }

    if (conds.length === actions.length - 1) {
        for (var i = 0; i < conds.length; i++) {
            if (conds[i]) {
                return actions[i];
            }
        }
        return actions[i];
    }
    else if (conds.length === actions.length) {
        for (var i = 0; i < conds.length; i++) {
            if (conds[i]) {
                return actions[i];
            }
        }
        return notFound;
    }
    else {
        throw "Number of actions do not match number of conditions in If clause";
    }

}

export { IfMap };