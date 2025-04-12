
# 🛒 Painel Administrativo de E-commerce

Este é um projeto básico de painel administrativo feito com **Node.js**, **Express.js**, **EJS** e **Bootstrap**. Ele simula o gerenciamento de um e-commerce, com páginas para visualização de produtos, usuários, pedidos e dashboard geral.

---

## 📁 Estrutura do Projeto

```
exercicio-mvc/
├── public/                 # Arquivos estáticos (CSS, imagens, JS)
│   └── images/             # Imagens usadas nos produtos
├── src/
│   ├── controllers/        # Lógica dos dados (fakes por enquanto)
│   ├── routes/             # Definição das rotas
│   └── views/              # Páginas EJS com partials (navbar, header, footer)
│       └── partials/       # Componentes reaproveitáveis
├── app.js                  # Arquivo principal da aplicação
└── package.json            # Arquivo de dependências
```

---

## 🚀 Como rodar o projeto localmente

1. **Clone o repositório:**
```bash
git clone https://github.com/bruno-edl/sistema-loja-nodejs.git
```

2. **Instale as dependências:**
```bash
npm install
```

3. **Execute o projeto com `nodemon` ou `node`:**
```bash
nodemon app.js
# ou
node app.js
```

> Acesse o projeto em: `http://localhost:3000`

---

## 🎨 Como alterar as cores e estilo do projeto

Os estilos são controlados via **Bootstrap** (CDN) e podem ser personalizados em um arquivo CSS dentro de `public/css` (crie o arquivo se ainda não existir).

1. Crie o arquivo:
```bash
/public/css/custom.css
```

2. Importe esse arquivo dentro do `header.ejs` **após** o Bootstrap:
```html
<link rel="stylesheet" href="/css/custom.css">
```

3. Agora você pode sobrescrever classes do Bootstrap:
```css
body {
  background-color: #f9f9f9;
}

.navbar {
  background-color: #1f1f1f;
}
```

---

## 🖼️ Como trocar as imagens dos produtos

As imagens estão armazenadas em:

```
/public/images/
```

### Para adicionar novas imagens:
1. Salve a imagem desejada na pasta `public/images/`
2. No `produtoController.js`, atualize o caminho da imagem:
```js
imagem: '/images/nome-da-sua-imagem.jpg'
```

---

## 🌐 Como alterar ou adicionar novas rotas

As rotas estão separadas no diretório:

```
/src/routes/
```

### Exemplo: adicionar nova rota `/relatorios`
1. Crie o arquivo: `relatorios.js` em `/routes`
2. No `app.js`, registre a rota:
```js
import relatorioRoutes from './src/routes/relatorios.js';
app.use('/admin/relatorios', relatorioRoutes);
```

3. Crie o controller e a view correspondente.

---

## 📦 Dependências utilizadas

- [express](https://www.npmjs.com/package/express)
- [ejs](https://www.npmjs.com/package/ejs)
- [nodemon](https://www.npmjs.com/package/nodemon) (para desenvolvimento)
- [Bootstrap 5](https://getbootstrap.com/) (via CDN)

---

## ✍️ Autor

Feito por **Bruno** 🚀  
Desenvolvido com base no modelo MVC usando Node.js e Express.

---
