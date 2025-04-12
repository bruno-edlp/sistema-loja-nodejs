
  export const dashboard = (req, res) => {
    res.render('dashboard');
  };
  
  export const listarProdutos = (req, res) => {
    const produtos = [
      {
        nome: "Tênis Esportivo",
        descricao: "Confortável, leve e ideal para corridas diárias.",
        imagem: "https://static.netshoes.com.br/produtos/tenis-adidas-coreracer-masculino/09/NQQ-4635-309/NQQ-4635-309_zoom1.jpg?ts=1707512854&ims=1088x",
        estoque: 25,
        vendasHoje: 8,
        custoCompra: 120,
        precoVenda: 199.9,
        categoria: 'Calçados'
      },
      {
        nome: "Camiseta Dry Fit",
        descricao: "Tecnologia que absorve o suor e oferece conforto.",
        imagem: "https://berzerk.com.br/cdn/shop/files/LOGO_975e904d-ceab-4721-8dce-f3534e3551b8.jpg?v=1719328980&width=800",
        estoque: 50,
        vendasHoje: 12,
        custoCompra: 40,
        precoVenda: 89.9,
        categoria: 'Roupas'
      },
      {
        nome: "Mochila Esportiva",
        descricao: "Espaçosa, resistente e ideal para o dia a dia.",
        imagem: "https://m.media-amazon.com/images/I/41evW2MWKNL._AC_SX522_.jpg",
        estoque: 18,
        vendasHoje: 4,
        custoCompra: 90,
        precoVenda: 149.9,
        categoria: 'Mochilas'
      },
      {
        nome: "Short Esportivo",
        descricao: "Otimo para esportes e dia-a-dia, qualidade e leveza.",
        imagem: "https://static.netshoes.com.br/produtos/short-adidas-plain-masculino/26/NQQ-4558-026/NQQ-4558-026_zoom1.jpg?ts=1723706172&ims=1088x",
        estoque: 30,
        vendasHoje: 13,
        custoCompra: 84.80,
        precoVenda: 159.90,
        categoria: 'Roupas'
      },
      {
        nome: "Oculos de Sol Unisexx Esportivo",
        descricao: "Polarizado, leve e resistente.",
        imagem: "https://static.netshoes.com.br/produtos/kit-2-oculos-sol-unissex-beach-tennis-corrida-ciclismo-uv400/84/7EI-0476-384/7EI-0476-384_zoom2.jpg?ts=1706542101",
        estoque: 9,
        vendasHoje: 1,
        custoCompra: 70.60,
        precoVenda: 164.90,
        categoria: 'Acessorios'
      },
      {
        nome: "Par Meia esportiva",
        descricao: "Conforto, durabilidade e qualidade.",
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoJX134RsUhApaYoIGM8DzGLW3PfSaCQVkYg&s",
        estoque: 58,
        vendasHoje: 31,
        custoCompra: 27.50,
        precoVenda: 39.90,
        categoria: 'Roupas'
      }
    ];
  
    res.render('produtos', { produtos });
  };
  