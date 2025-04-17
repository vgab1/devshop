# DevShop

**DevShop** é uma loja virtual de demonstração, desenvolvida com **React**, **Vite**, **Tailwind CSS**, **Axios**, e **Context API**, simulando uma experiência de compra online com a adição de itens ao carrinho e visualização de produtos. Este projeto utiliza o **MockAPI** para simular uma API de produtos, permitindo testar a lógica de navegação, requisições e gerenciamento de estado de forma eficiente.

## Funcionalidades

- **Visualização de Produtos**: Exibe uma lista de produtos com informações detalhadas (nome, descrição, preço, imagem).
- **Carrinho de Compras**: Permite adicionar produtos ao carrinho, e o estado do carrinho é gerenciado globalmente através da **Context API**. Notificações de sucesso são exibidas com **React Hot Toast** quando um produto é adicionado.
- **Navegação Responsiva**: Utiliza **React Router** para navegação entre as páginas de listagem e detalhamento de produtos.
- **Design Responsivo**: Utiliza **Tailwind CSS** para garantir uma interface limpa e responsiva em diferentes tamanhos de tela.

## Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para criação de interfaces interativas.
- **Vite**: Build tool de próxima geração que acelera o desenvolvimento com recarga instantânea e otimização de produção.
- **Tailwind CSS**: Framework CSS utilitário para criação de layouts flexíveis e responsivos.
- **Axios**: Cliente HTTP baseado em Promises para realizar requisições para a API.
- **React Router DOM**: Gerenciamento de navegação e rotas no React.
- **React Hot Toast**: Biblioteca de notificações para uma melhor experiência do usuário.
- **MockAPI**: API mockada para simular o backend de produtos.
- **Context API**: Usado para gerenciar o estado do carrinho de compras de maneira global, sem a necessidade de passar props entre componentes.