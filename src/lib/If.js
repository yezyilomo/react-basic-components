import React from 'react';


class If extends React.Component {
    constructor(props) {
        super(props);
    }

    render(props) {
        if (!(this.props.cond === undefined || this.props.conds === undefined)) {
            throw new Error("You can't pass both 'cond', and 'conds' props at the same time on If Component");
        }
        else if (this.props.cond === undefined) {
            if (this.props.conds.length !== this.props.children.length) {
                throw new Error("Number of conditions doesn't match number of Components on If Component");
            }
            for (let i = 0; i < this.props.conds.length; i++) {
                if (this.props.conds[i]) {
                    return this.props.children[i];
                }
            }
        }
        else {
            if (this.props.cond) {
                return this.props.children;
            }
            else {
                return null;
            }
        }
    }
}


export {If}