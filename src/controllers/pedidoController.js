// src/controllers/pedidoController.js

export const listarPedidos = (req, res) => {
    const pedidos = [
      {
        numero: 'PED0001',
        cliente: 'Ana Lima',
        total: 'R$ 230,00',
        status: 'Entregue',
        data: '2025-02-21'
      },
      {
        numero: 'PED0002',
        cliente: 'Fernanda Castro',
        total: 'R$ 129,90',
        status: 'Em preparo',
        data: '2025-04-10'
      },
      {
        numero: 'PED0003',
        cliente: 'Bruno Silva',
        total: 'R$ 169,90',
        status: 'Em preparo',
        data: '2025-04-8'
      },
      {
        numero: 'PED0004',
        cliente: 'João Mendes',
        total: 'R$ 149,90',
        status: 'Aguardando Pagamento',
        data: '2025-04-10'
      },
      {
        numero: 'PED0005',
        cliente: 'Carlos Souza',
        total: 'R$ 98,50',
        status: 'Entregue',
        data: '2025-04-12'
      }
    ];
  
    res.render('pedidos', { pedidos });
  };
  