// Array para armazenar os itens do carrinho
var cart = [];

// Função para adicionar um item ao carrinho
function addToCart(product, price) {
  var item = {
    product: product,
    price: price,
    quantity: 1
  };
  
  // verifica se o item já existe no carrinho
  var existing = cart.find(function(i) {
    return i.product === item.product;
  });
  
  if (existing) {
    existing.quantity++;
  } else {
    cart.push(item);
  }
  
  updateCart();
}

// Função para remover um item do carrinho
function removeFromCart(product) {
  cart = cart.filter(function(item) {
    return item.product !== product;
  });
  updateCart();
}

// Função para atualizar a exibição do carrinho
function updateCart() {
  var total = 0;
  var items = cart.map(function(item) {
    total += item.price * item.quantity;
    return '<tr>' +
           '  <td>' + item.product + '</td>' +
           '  <td>$' + item.price + '</td>' +
           '  <td>' + item.quantity + '</td>' +
           '  <td>$' + (item.price * item.quantity) + '</td>' ;
  }
