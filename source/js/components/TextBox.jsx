var React = require('react');

var TextBox = function statelessFunctionComponentClass(props) {
    return (
        <input type='text' id={props.uuid} defaultValue={props.value} onClick={props.onClick} />
    );
}

module.exports = TextBox;