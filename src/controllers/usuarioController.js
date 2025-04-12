// src/controllers/usuarioController.js

export const listarUsuarios = (req, res) => {
    const usuarios = [
      {
        nome: 'Bruno Silva',
        email: 'bruno@email.com',
        cadastro: '2024-04-01',
        acesso: 'Admin',
        cpf: '123.456.789-00',
        endereco: 'Rua das Abelhas, 123 - Registro/SP'
      },
      {
        nome: 'Ana Lima',
        email: 'ana@email.com',
        cadastro: '2024-04-05',
        acesso: 'Cliente',
        cpf: '987.654.321-00',
        endereco: 'Av. Meliponário, 456 - São Paulo/SP'
      },
      {
        nome: 'Carlos Souza',
        email: 'carlos@email.com',
        cadastro: '2024-03-28',
        acesso: 'Cliente',
        cpf: '321.654.987-00',
        endereco: 'Rua das Flores, 789 - Santos/SP'
      },
      {
        nome: 'João Mendes',
        email: 'joao@email.com',
        cadastro: '2024-03-20',
        acesso: 'Cliente',
        cpf: '371.873.987-10',
        endereco: 'Rua da moringa, 429 - Juquiá/SP'
      },
      {
        nome: 'Fernanda Castro',
        email: 'fernanda@email.com',
        cadastro: '2024-04-02',
        acesso: 'Admin',
        cpf: '020.224.867-91',
        endereco: 'Av. Balneario Rios, 1002 - Ilha-Comprida/SP'
      }
    ];
  
    res.render('usuarios', { usuarios });
  };
  
