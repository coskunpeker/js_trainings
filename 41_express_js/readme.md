# Express JS

NodeJS tabanlı bir js web framework'üdür. Express js ile server side rest api'ler geliştirmek oldukça kolaydır.

### package.json'u Oluşturmak

> npm init

### Express JS Node Module'ü Yüklemek

> npm install express


## Express JS İçin Gerekli Module'leri Yüklemek

> npm install -D nodemon

`nodemon` js dosyalarında yapılan değişikliklerin oluşturulan express js server'a yansıması için kullanılır.

Not: Yukarıdaki komutta `-D` sadece development için gerekli olduğu anlamına gelir.

### package.json'u Script Eklemek

> nodemon server.js

Yukarıdaki script'i, `package.json` içerisine `dev` key'i ile ekleyelim.