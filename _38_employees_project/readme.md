# Proje İçin Genel Bilgiler

### Babel Modüllerinin Kurulumu

> npm install @babel/core @babel/polyfill @babel/preset-env babel-loader --save-dev

### Webpack Modüllerinin Kurulumu

> npm install webpack webpack-cli webpack-dev-server --save-dev

### webpack-dev-server Ne İçin Kullanılır?

Bu server module ile bir back-end server oluşturulup kullanılır.

### package.json Scriptleri

> webpack-dev-server --output-public-path=/bundles/  --mode development --open --hot

yukarıdaki script, `webpack-dev-server`'ın config'idir. Server'in bundle'ı hangi dizinde arayacağı, mode gibi bilgiler tanımlanır ve server'ın başlatılması için kullanılır.

> webpack --progress

yukarıdaki script ise `bundles` dizinini oluşturur.

### package.json Son Hali

```json
{
  "name": "employees-project",
  "version": "1.0.0",
  "description": "",
  "main": "./src/index.js",
  "scripts": {
    "test": "This is a test",
    "start": "webpack-dev-server --output-public-path=/bundles/  --mode development --open --hot",
    "build": "webpack --progress"
  },
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "@babel/core": "^7.9.0",
    "@babel/polyfill": "^7.8.7",
    "@babel/preset-env": "^7.9.5",
    "babel-loader": "^8.1.0",
    "webpack": "^4.42.1",
    "webpack-cli": "^3.3.11",
    "webpack-dev-server": "^3.10.3"
  }
}
```

### webpack.config.js Değişiklikleri

```
  devServer: {
    port: 3200,
    index: 'index.html'
  }
```

yukarıdaki json alanı `webpack.config.js`'a eklenmelidir.

`webpack-dev-server`'ın hizmet vereceği port ve main page bilgisi burada tutulur.

### Projeyi Çalıştırma

> npm run build

yukarıdaki komut bir defa çalıştırılarak `bundles` dizinin oluşturulması sağlanır.

> npm run start

yukarıdaki komut ise server'ı başlatır ve http://localhost:3200/ adresinde `ui`'yı hazır eder.



### JSON Server Kurulumu

> npm install -g json-server


### JSON Server'ı başlatma

> json-server --watch fake_api/employee.json




