var React = require('react');
var TextBox = require('./TextBox.jsx');

var TextBoxContainer = React.createClass({
    hndlClick: function(oSynthEvent) {
        console.log(oSynthEvent.target);
        if(oSynthEvent.target.hasOwnProperty('value')) {
            console.log('Valor caja de texto: ' + oSynthEvent.target.value);
        }
    },
    render: function() {
        return (
            <div>
                <TextBox uuid='text_1' value='Caja de texto 1' onClick={this.hndlClick} /><br />
                <TextBox uuid='text_2' value='Caja de texto 2' onClick={this.hndlClick} /><br />
                <TextBox uuid='text_3' value='Caja de texto 3' onClick={this.hndlClick} /><br />
            </div>
        )
    }
});

module.exports = TextBoxContainer;