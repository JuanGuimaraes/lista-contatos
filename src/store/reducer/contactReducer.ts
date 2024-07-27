import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contato from '../../models/Contato'

type ContatoState = {
  contatos: Contato[]
}

const initialState: ContatoState = {
  contatos: [
    {
      id: 1,
      nome: 'Jose',
      email: 'teste',
      telefone: '12345',
    },
    {
      id: 2,
      nome: 'Jose',
      email: 'teste',
      telefone: '123456',
    },
    {
      id: 3,
      nome: 'Jose',
      email: 'teste',
      telefone: '123456',
    }
  ]
}

const contatoSlice = createSlice({
  name: 'contatos',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.contatos = state.contatos.filter((contato) => contato.id !== action.payload)
    },
    editar: (state, action: PayloadAction<Contato>) => {
      const indexDoContato = state.contatos.findIndex(
        (contato) => contato.id === action.payload.id
      )

      if (indexDoContato >= 0) {
        state.contatos[indexDoContato] = action.payload
      }
    },
    cadastrar: (state, action: PayloadAction<Omit<Contato, 'id'>>) => {
      const contatoJaExiste = state.contatos.find(
        (contato) =>
          contato.nome.toLowerCase() === action.payload.nome.toLowerCase()
      )

      if (contatoJaExiste) {
        alert('Já existe um contato com esse nome')
      } else {
        const ultimoContato = state.contatos[state.contatos.length - 1]

        const contatoNovo = {
          ...action.payload,
          id: ultimoContato ? ultimoContato.id + 1 : 1
        }
        state.contatos.push(contatoNovo)
      }
    },
  }
})

export const { remover, editar, cadastrar } = contatoSlice.actions

export default contatoSlice.reducer

