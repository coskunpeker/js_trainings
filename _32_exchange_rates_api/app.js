

const amountElement = document.querySelector("#amount");
const firstSelectList = document.querySelector("#firstCurrency");
const secondSelectList = document.querySelector("#secondCurrency");
const currency = new Currency("USD","TRY");
const ui = new UI(firstSelectList, secondSelectList);

eventListeners = () => {

    // input değiştiği zaman trigger olan event
    amountElement.addEventListener("input",  exchangeCurrency);

    // burada addEventListener kullanılmıyor.
    // select list'lerdeki addEventListener bazı browserlarda 
    // sorun yaratıyor.
    firstSelectList.onchange = () => {
        const selected = firstSelectList.options[firstSelectList.selectedIndex].textContent;
        currency.changeFirstCurrency(selected);

        ui.changeFirst(selected);
    };

    secondSelectList.onchange = () => {
        const selected = secondSelectList.options[secondSelectList.selectedIndex].textContent;
        currency.changeSecondCurrency(selected);

        ui.changeSecond(selected);
    };
}

exchangeCurrency = () => {
    currency.changeAmount(amountElement.value);

    currency.exchange()
    .then(result => ui.displayResult(result))
    .catch(err => console.log(err));
};

// eğer call edilen fonksiyon bir arrow function ise
// call edilmeden önce tanımının yapılmış olması gerekiyor.
eventListeners();