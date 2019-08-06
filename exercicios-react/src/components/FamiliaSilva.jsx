import React from 'react';
import Membro from './Membro'

export default props =>
<div>
  <Membro nome="Rafel" sobrenome={props.sobrenome}/>
  <Membro nome="Daniela" sobrenome={props.sobrenome}/>
  <Membro nome="Pedro" sobrenome={props.sobrenome}/>
  <Membro nome="Ana" sobrenome={props.sobrenome}/>
</div>