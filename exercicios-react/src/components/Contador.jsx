import React, { Component } from 'react';

export default class Contador extends Component {
  state = {
    numero: this.props.numeroInicial
  }

  maisUm = () => {
    this.setState({ numero: this.state.numero + 1})
    // this.state.numero++
  }

  menosUm = () => {
    this.setState({ numero: this.state.numero - 1})
    // this.state.numero++
  }
  
  render() {
    return (
      <div>
        <div>Número: {this.state.numero}</div>
        <button onClick={this.maisUm}>Inc</button>
        <button>Dec</button>
      </div>
    )
  }
}

//1ª SOLUÇÃO - Bind
// constructor(props) {
  //   // A palavra-chave super é usada para acessar o objeto pai de um objeto, em outros casos, é usada para acessar a classe pai de uma classe.
  //   super(props)
  //   //neste caso, o this sempre vai apontar para uma instancia de contador
  //   this.maisUm = this.maisUm.bind(this);
  // }
  
//2ª SOLUÇÃO - Função arrow(onClick)
//   render() {
//     return (
  //       <div>
//         <div>Número: {this.props.numero}</div>
//         <button onClick={() => this.maisUm}>Inc</button>
//         <button>Dec</button>
//       </div>
//     )
//   }
// }

//3ª SOLUÇÃO - Função arrow
// maisUm = () => {
//   // this.props.numero++
//   console.log(this);
// }