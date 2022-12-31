function randomElement(list) {
	return list[Math.floor(Math.random() * list.length)];
}

function randomIndex(exclusiveCap) {
	return Math.floor(Math.random() * exclusiveCap);
}

function capitalize(string) {
	return string[0].toUpperCase() + string.substring(1);
}

function makeClothing(id) {
	const names = ["camisa", "blusa", "jaqueta", "vestido", "calca", "short", "saia", "sapato", "salto", "bolsa", "cinto"]
	const colors = ["preto", "branco", "azul", "amarelo", "vermelho", "verde", "dourado", "roxo", "marrom", "laranja"]
	const imageAPI = "https://picsum.photos/";
	const imageRes = 300;
	var product = {};
	product.id = id;
	product.name = capitalize(randomElement(names))
		+ " " + randomElement(colors);
	product.price = randomIndex(300);
	product.stock = randomIndex(30);
	//product.image = imageAPI + (id + minImageRes).toString();
	product.image = imageAPI + imageRes + "?random=" + id;
	product.tags = product.name.toLowerCase().split(" ");
	return product;
}

var dataset = [];
const count = 50;
for (var id = 1; id < count+1; id++) {
	var clothing = makeClothing(id);
	dataset.push(clothing);
}
JSON.stringify(dataset);
//console.log(dataset);
console.log(JSON.stringify(dataset));

