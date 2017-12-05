var React = require('react');
var TextBoxContainer = require('./TextBoxContainer.jsx');
var ButtonContainer = require('./ButtonContainer.jsx');
var Button = require('./Button.jsx');

// <Button text='Obtener datos de contenedores' onClick={this.hndlClick} />

var MultiContainer = React.createClass({
    hndlClick: function(oSynthEvent) {
        console.log(oSynthEvent.target);
    },
    hndlSubmit: function(a, b, c) {
        console.log('En hndlSubmit()');
        console.log(a);
        console.log(b);
        console.log(c);
        a.preventDefault();                
    },
    render: function() {
        return (
            <form onSubmit={this.hndlSubmit}>
                <TextBoxContainer /><br />
                <ButtonContainer /><br />
                <input type='submit' value='Leer datos' />                
            </form>
        );
    }
});

module.exports = MultiContainer;