# Babel

Babel, js ES6 ve ES7 kodlarını ES5'e çeviren bir **transpiler**'dır.

ES6 ve ES7 ile gelen feature'lar, kimi 
browser'larda neredeyse tamamen, kimi browser'larda ise kısmen desteklenmez.
İşte tam da bu noktada ES6 veya ES7 feature'ları kullanılarak geliştirilmiş js projeleri **Babel** kullanılarak 
ES5'e çevrilir ve istenilen browser'da çalıştırılabilir.

> Bu adresten, browser ve ilgili js sürümleri için table of support görüntülenebilir. https://kangax.github.io/compat-table/es6/

### Babel İçin Gerekli Node Modulleri

* @babel/cli: Babel'i terminal üzerinde kullanmaya yarayan bir araçtır.

* @babel/core: core babel compiler.

* @babel/polyfill: ES2015+ environment'ına uyum için gerekli olan fonksiyonaliteyi sağlar. Örneğin `async` ve `await` gibi ES7 feature'ları kullanılarak yazılan kodların da dönüşümünü sağlar.

* @babel/preset-env: target environment için hangi syntax converting işlemlerinin gerekli olduğunu yönetmek için kullanılır.

### Babel'in Kullanımı

Öncelikle `npm init` diyerek, kendi modulümüzü yaratmalıyız. Bu bir `package.json` oluşturacak.

### Babel Node Modulleri'nin Kurulumu

> npm install @babel/cli @babel/core @babel/polyfill @babel/preset-env --save-dev

### .babelrc Config Dosyası

İçeriği aşağıdaki gibi olacak bir `.babelrc` dosyası oluşturalım.

```json
{
    "presets": ["@babel/preset-env"]
}
```
### package.json'a Script Eklenmesi

> babel src -d lib

yukarıdaki satırı `package.json` içindeki `scripts` alanına `build` key'i ile ekleyelim.

### package.json'ın Son Hali

```json
{
  "name": "babel_training",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "dependencies": {},
  "devDependencies": {
    "@babel/cli": "^7.8.4",
    "@babel/core": "^7.9.0",
    "@babel/polyfill": "^7.8.7",
    "@babel/preset-env": "^7.9.5"
  },
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "babel src -d lib"
  },
  "author": "",
  "license": "ISC"
}
```

### ES6 ve ES7 to ES5 İşlemi

`src` dizini altındaki `test1.js` ve `test2.js` dosyaları artık dönüşüm için hazır.

> npm run build 

yukarıdaki komut ile `lib` dizini altında `test1.js` ve `test2.js` dosyalarının `ES5` versiyonları hazırlanmış olacaklar.