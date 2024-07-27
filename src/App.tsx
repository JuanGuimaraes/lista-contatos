import React from 'react';
import { Provider } from "react-redux";
import store from './store';
import ListaContatos from './components/ListaDeContatos';


function App() {
  return (
    <Provider store={store}>
    <div className='container'>
      <ListaContatos />
    </div>
  </Provider>
  )
}

export default App;
