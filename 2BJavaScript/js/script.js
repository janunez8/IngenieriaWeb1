var name = 'Jefferson';
var fact = 'Facturacion';
var product = ['Mantequilla', 'Mermelada', 'Jabon', 'Pepino','Pan']
var price = [ 1.30, 1.00, 1.50, 0.50, 1.00];

var data = document.getElementById('contenido');
data.innerHTML += `<h3>${name}</h3>`;
data.innerHTML += `<h4>${fact}</h4>`;

var sum=0;
function show(){    
    for (let index = 0; index < product.length; index++) {
        data.innerHTML += `${product[index]} : ${price[index]} <br>`;   
        sum = sum+price[index];
    }
    data.innerHTML += `<h6>Su factura es de: ${sum}</h6>`;
}
show();

