import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { createServer, Model } from 'miragejs';

createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id:1,
          title: 'Website',
          type: 'deposit',
          amount: 6000,
          createdAt: new Date('2022-02-17 20:00:00')
        },
        {
          id:2,
          title: 'Aluguel',
          type: 'withdraw',
          amount: 1100,
          createdAt: new Date('2022-02-18 18:00:00')
        }
      ]
    })
  },

  routes() {
    this.namespace= 'api';

    this.get('/transactions', () => {
      return this.schema.all('transaction')
    })

    this.post('/transactions', (schema, request) => {
      //convertendo os dados para um obj
      // o schema é o banco de dados
      const data = JSON.parse(request.requestBody)

      return schema.create('transaction', data);
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
