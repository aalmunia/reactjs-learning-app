var React = require('react');
var Button = require('./Button.jsx');

var ButtonContainer = React.createClass({
    hndlClick: function(oSynthEvent) {
        console.log('Boton pulsado');
        console.log(oSynthEvent);
        for(var prop in oSynthEvent) {
            console.log(prop);
            console.log(oSynthEvent[prop]);
        }
        /* console.log(b);
        console.log(c); */
    },
    render: function() {
        return (
            <div>
                <Button text='Boton 1' onClick={this.hndlClick} /><br />
                <Button text='Boton 2' onClick={this.hndlClick} /><br />
                <Button text='Boton 3' onClick={this.hndlClick} /><br />
            </div>
        );
    }
});

module.exports = ButtonContainer;