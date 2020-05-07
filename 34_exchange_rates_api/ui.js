class UI{

    constructor(firstSelectList, secondSelectList){
        this.firstSelectList = firstSelectList;
        this.secondSelectList = secondSelectList;

        this.outputFirst = document.querySelector("#outputFirst");
        this.outputSecond = document.querySelector("#outputSecond");
        this.outputResult = document.querySelector("#outputResult");
    }

    
    changeFirst(selected){
        this.outputFirst.textContent = selected;
    }

    changeSecond(selected){
        this.outputSecond.textContent = selected;
    }

    displayResult(result){
        this.outputResult.value = result; 
    }

}