var cart = {"Samsung Galaxy A03s" : 4, "Apple iPhone 11 64GB" : 2, "Huawei Nova" : 6};
var items_count = 0;

createCart();

function createCart(){
  let inner_html = '';
  let i = 0;
  for (item in cart){
    i+= 1;
    inner_html+= `<li>
                  <span>
                    <div class = "marker">${i}</div>
                    <span>${item}</span>
                  </span>

                  <span>
                    <div class = "amount">${cart[item]}</div>
                    <button class = "remove-button" onclick="removeItem('${item}')">X</button>
                  </span>
                  </li>`;
  }

  items_list = document.querySelector('#cart-items-list');
  items_counter = document.querySelector('#items-quantity');
  items_counter.innerHTML = items_count;
  items_list.innerHTML = inner_html+'<br>';
}

function addToCart(item){
  items_count += 1;
  if (!(item in cart)){
      cart[item] = 1;
  }
  else{
    cart[item] += 1;
  }

  createCart();
}

function removeItem(item){
  items_count -=1;
  if (cart[item] === 1){
      delete(cart[item]);
  }
  else{
    cart[item] -= 1;
  }

  createCart();

}
