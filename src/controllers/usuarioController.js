// src/controllers/usuarioController.js

export const listarUsuarios = (req, res) => {
    const usuarios = [
      {
        nome: 'Bruno Silva',
        email: 'bruno@email.com',
        cadastro: '2024-04-01',
        acesso: 'Admin'
      },
      {
        nome: 'Ana Lima',
        email: 'ana@email.com',
        cadastro: '2024-04-05',
        acesso: 'Cliente'
      },
      {
        nome: 'Carlos Souza',
        email: 'carlos@email.com',
        cadastro: '2024-03-28',
        acesso: 'Cliente'
      },
      {
        nome: 'João Mendes',
        email: 'joao@email.com',
        cadastro: '2024-03-20',
        acesso: 'Cliente'
      },
      {
        nome: 'Fernanda Castro',
        email: 'fernanda@email.com',
        cadastro: '2024-04-02',
        acesso: 'Admin'
      }
    ];
  
    res.render('usuarios', { usuarios });
  };
  
