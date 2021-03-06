import React, {Component} from 'react'
import styled from 'styled-components'

const CommentContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 5px;
`

const InputComentario = styled.input`
    width: 100%;
    margin-right: 4px;
`

export class SecaoComentario extends Component {
	state = {
		comentario:""
	};
	
	adicionaComentario = () =>{
	const novoComentario = this.state.comentario;
}
	onChangeComentario = (event) => {
	this.setState({ novoComentario: event.target.value });
};

	render() {
		return <CommentContainer>
			<InputComentario
				placeholder={'Comentário'}
				value={this.state.adicionaComentario}
				onChange={this.onChangeComentario}
			/>
			<button onClick={this.props.aoEnviar}>Enviar</button>
		</CommentContainer>
	}
}

