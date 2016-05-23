# Módulo Web Scrap para produtos Wine

O **wine-scrap** é um módulo para consulta de informações de produtos do Wine.

O módulo faz a consulta via get no site Wine pela URL e retorna as informações de: Nome, Preço, Imagem e ProdutoSku.

## Exemplo prático

```js

var wscrap = require('wine-scrap');
var url = 'https://www.wine.com.br/vinhos/bouchard-batard-montrachet-grand-cru-2009/prod4342.html';

wscrap.product(url).then(function(product) {
	console.log(product);
}, function(err){
	console.log(err);
});
```

### Objeto de Retorno

```js
{
  productSku: 4342,
  title: "Bouchard Batard Montrachet Grand Cru 2009 (750 ml)",
  price: "1585,25",
  thumbnail:"https://www.wine.com.br/renderImage.image?imageName=produtos/4342-01.jpg"
}
```

### Objeto de erro

```js
 { error: 'Cannot get product' }
```
