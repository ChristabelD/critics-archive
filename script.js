function buy(product,price){

localStorage.setItem("product",product)
localStorage.setItem("price",price)

window.location.href="checkout.html"

}