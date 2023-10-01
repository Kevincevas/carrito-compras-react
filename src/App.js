import { Component } from 'react';
import './App.css';
import Productos from './components/Productos'
import React from 'react';
import Layout from './components/Layout'
import Title from './components/Title'
import Navbar from './components/Navbar'


class App extends Component {
  state = {
    productos: [
      { name:'tomate', price: 1500, img:`${process.env.PUBLIC_URL}/productos/tomate.jpg` },
      { name:'arbeja', price: 2500, img:`${process.env.PUBLIC_URL}/productos/arbeja.jpg` },
      { name:'lechuga', price: 500, img:`${process.env.PUBLIC_URL}/productos/lechuga.jpg` },
    ],
    carro: [],
    esCarroVisible: false,
  }

  agregarAlcarro = (producto) => {
    const {carro} = this.state
    if (carro.find(x => x.name === producto.name)) {
      const newCarro = carro.map(x => x.name === producto.name
        ? ({ ...x, cantidad: x.cantidad +1 })
        : x)
      return this.setState({ carro: newCarro })
    }
    return this.setState({
      carro: this.state.carro.concat({...producto, cantidad:1})
    })
  }

  mostrarCarro = () => {
    if (!this.state.carro.length) {
      return
    }
    this.setState({ esCarroVisible: !this.state.esCarroVisible })
  }

  render() {
    const {esCarroVisible} = this.state
    return(
      <div>
        <Navbar carro={this.state.carro} esCarroVisible={esCarroVisible} mostrarCarro={this.mostrarCarro} />
        <Layout>
          <Title />
          <Productos 
            agregarAlCarro={ this.agregarAlcarro }
            productos={this.state.productos}
          />
        </Layout>
      </div>
    )
  }
}

export default App;
