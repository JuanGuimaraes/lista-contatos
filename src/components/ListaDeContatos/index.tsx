import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cadastrar, editar, remover } from '../../store/reducer/contatosReducer';
import Contato from '../../models/Contato';
import Botao from '../Botao/styles';
import { RootReducer } from '../../store';

const ListaContatos: React.FC = () => {
  const dispatch = useDispatch();
  const contatos = useSelector((state: RootReducer) => state.contatos);

  const [novoContato, setNovoContato] = useState<Contato>({ id: Date.now(), nome: '', email: '', telefone: '' });
  const [editaContato, setEditaContato] = useState<Contato | null>(null);

  const adicionarContato = () => {
    if (novoContato.nome && novoContato.email && novoContato.telefone) {
      dispatch(cadastrar(novoContato));
      setNovoContato({ id: Date.now(), nome: '', email: '', telefone: ''});
    }
  };

  const editarContato = () => {
    if (editaContato) {
      dispatch(editar(editaContato));
      setEditaContato(null);
    }
  };

  const removerContato = (id: number) => {
    dispatch(remover(id));
  };

  return (
    <div>
      <h1>Lista de contatos</h1>
      <div>
        <input
          type="text"
          placeholder="Name"
          value={novoContato.nome}
          onChange={(e) => setNovoContato({ ...novoContato, nome: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email"
          value={novoContato.email}
          onChange={(e) => setNovoContato({ ...novoContato, email: e.target.value })}
        />
        <input
          type="text"
          placeholder="Telefone"
          value={novoContato.telefone}
          onChange={(e) => setNovoContato({ ...novoContato, telefone: e.target.value })}
        />
        <Botao onClick={adicionarContato}>Salvar Contato</Botao>
      </div>

      <ul>
        {contatos && contatos.contatos.length > 0 ? (
          contatos.contatos.map((contato) => (
            <li key={contato.id}>
              <span>{contato.nome} - {contato.email} - {contato.telefone}</span>
              <Botao onClick={() => removerContato(contato.id)}>Remover</Botao>
              <Botao onClick={() => setEditaContato(contato)}>Editar</Botao>
            </li>
          ))
        ) : (
          <li>Nenhum contato salvo</li>
        )}
      </ul>

      {editaContato && (
        <div>
          <input
            type="text"
            placeholder="Name"
            value={editaContato.nome}
            onChange={(e) => setEditaContato({ ...editaContato, nome: e.target.value })}
          />
          <input
            type="email"
            placeholder="Email"
            value={editaContato.email}
            onChange={(e) => setEditaContato({ ...editaContato, email: e.target.value })}
          />
          <input
            type="text"
            placeholder="Telefone"
            value={editaContato.telefone}
            onChange={(e) => setEditaContato({ ...editaContato, telefone: e.target.value })}
          />
          <Botao onClick={editarContato}>Save Changes</Botao>
        </div>
      )}
    </div>
  );
};

export default ListaContatos;
