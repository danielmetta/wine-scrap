'use strict';
require('es6-promise').polyfill();
var request = require('request')
var cheerio = require('cheerio');

exports.product = function(url) {
  return new Promise(function(acept, error) {
    var options = {
      url: url,
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2228.0 Safari/537.36'
      }
    };
    request(options, function(error, response, html) {
      if(!error) {
        var $ = cheerio.load(html),
        product = {};
        product.productSku = $('.colunaDireita').attr('data-sku');
        product.title = $('#boxProduto').children('h1[itemprop=name]').text().trim().toString().replace(/\t/g, '').replace('\n', ' ');
        product.price = $('.boxPreco').children('.preco').text().trim().toString().replace(/\t/g, '').replace('/\n/g', '').replace('\n', ' ').replace('R$', '').replace(' ', '').substring(0, 8).trim();
        product.image = 'https://www.wine.com.br/renderImage.image?imageName=' + $('.fotoPrincipal').children('img').attr('data-imagem-source');
        acept(product);
        console.log(product);
      } else {
        error({ error:"Cannot get product" });
      }
    });
  });
};
product('https://www.wine.com.br/vinhos/bouchard-batard-montrachet-grand-cru-2009/prod4342.html');
