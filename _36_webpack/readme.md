# Webpack

Javascript file'ları, diğer project file'ları anlamlı bir biçimde gruplandırmaya ve kullanmaya yarar.

### package.json'u Oluşturmak

`npm init`

### Babel Node Modulleri'nin Kurulumu

> npm install @babel/core @babel/polyfill @babel/preset-env babel-loader --save-dev

`babel loader` webpack ile babel arasındaki enterasyon için kullanılan node module'dür.

### Webpack Node Modulleri'nin Kurulumu

> npm install webpack webpack-cli  --save-dev

* webpack: webpack core module.

* webpack-cli: webpack'i termilde kullanmak için gerekli node module.

### Webpack Config Dosyası

`webpack.config.js` isimli dosya ile config yapılır.

* `entry` alanına `async` ve `await` için `@babel/polyfill` eklenir.

* `entry` alanına başlangıç dosyası olarak `./src/index.js` verilir.

* `output` webpack birleştirme işleminin path'ini
ve oluşacak js file'ın ismi burada verilir.

* `rules` alanında loader olarak `babel-loader` verilir.

* `rules` alanında preset `@babel/preset-env` olarak verilir.

### package.json'a Script Eklenmesi

> webpack --watch

yukarıdaki satırı `package.json` içindeki `scripts` alanına `build` key'i ile ekleyelim.

**Not**: `--watch` birleştirilecek dosyalarda değişiklik olma ihtimaline karşı, sürekli o dosyaları takip eder ve değişiklileri `bundle.js`'e yansıtır.


### package.json'ın Son Hali

```json
{
  "name": "webpack-training",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "webpack --watch"
  },
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "@babel/core": "^7.9.0",
    "@babel/polyfill": "^7.8.7",
    "@babel/preset-env": "^7.9.5",
    "babel-loader": "^8.1.0",
    "webpack": "^4.42.1",
    "webpack-cli": "^3.3.11"
  }
}
```


### Webpack'in çalıştırılması

> npm run build

yukarıdaki komut aracılığı ile az önce `package.json`'a tanımladığımız `webpack --watch` script'i
çalışacak ve `bundles` dizini altına, `index.js`'ten başlayarak bütün js dosylarımızın birleştirilmiş hali olan `bundle.js` oluşturulacak.

### Oluşturulan bundle.js'in Kullanımı

Bir `index.html` dosyası oluşturup `body` alanına
aşaıdaki satırı ekleyelim.


```html
<script src="./bundles/bundle.js"></script>
```
