import {Component} from 'react'
import React from 'react'

const styles = {
    button: {
        backgroundColor: '#0A283E',
        color:'white',
        padding: '15px 20px',
        border:'none',
        borderRadius:'5px',
        cursor: 'pointer',
    }
}

class Button extends Component {
    render() {
        return(
            <button style={styles.button} {...this.props} /> //...this.props = pasa todas las propiedades que nosotros le pasemos al componente de button en producto.js
        )
    }
}
export default Button