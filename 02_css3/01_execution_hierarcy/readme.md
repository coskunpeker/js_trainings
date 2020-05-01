# CSS Execution Hieararcy

CSS'de style'ların tanımlanma sırası önemlidir. Aynı html üzerinde iki adet style düşünelim, bu style'ların ikisi birden html üzerindeki bir elemanı etkiliyor olsun. Bu durumda hangi style ilgili elemana uygulanır?

> Yukarıdan aşağıya doğru, sonra yazılan CSS Style'i ilkini `override` edecektir. Ve ikinci ilgili elamana uygulanacaktır.

```css
a {
    color: red;
  }

#services {
    color: blue;
  }
```

Yukarıdaki örnekte id'si `services` olan bir `<a>` varsa rengi bir önceki style ile `red` yapılmış olsa bile bu değer `override` edilece ve rengi `blue` olacaktır.

Bu durumu önlemek için aşağıdaki gibi `override` edilmesi istenmeyen özelliğin yanına `important` yazılır.

```css
a {
    color: red important;
  }

#services {
    color: blue;
  }
```
