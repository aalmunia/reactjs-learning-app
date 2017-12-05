var React = require('react');

var TextBox = function statelessFunctionComponentClass(props) {
    return (
        <input type='text' id={props.uuid} value={props.value} />
    );
}