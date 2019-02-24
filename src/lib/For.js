function For(props) {
    let func = props.children;
    let val = props.in;
    return val.map(func);
}

export {For};