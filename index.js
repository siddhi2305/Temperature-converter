const tempType = document.querySelector("#temp-type");
const degreeField = document.querySelector("#degree");
const resultType = document.querySelector("#result-type");
const convertBtn = document.querySelector("#convert");

const resultField = document.querySelector("#result");



window.addEventListener("load", () => {
    degreeField.value = "";
    resultField.innerHTML = "";
})

convertBtn.addEventListener("click", (e) => {
    e.preventDefault();
    convertIntoresultType();
})

function convertIntoresultType(){
    let inputValue = degreeField.value;
    if(inputValue === ""){
        alert("Please Enter temperature")
        location.reload()
    }
    else if(tempType.value === "celsius" && resultType.value === "fahrenheit"){
        //(0C * 9/5) + 32 = 32F
        const celsiusTofahrenheit = (inputValue *9/5) + 32;
        resultField.innerHTML = `${celsiusTofahrenheit.toFixed(2)}&deg;
        F`;
    }
    else if(tempType.value === "celsius" && resultType.value === "kelvin"){
        //0C + 273.15 = 273K
        const celsiusTokelvin = inputValue+273.15;
        resultField.innerHTML = `${celsiusTokelvin.toFixed(2)}&deg;
        K`;
    }
    else if(tempType.value === "fahrenheit" && resultType.value === "celsius"){
        //(0F - 32) * 5/9 = -17.78C
        const fahrenheitTocelsius = (inputValue - 32) * 5/9;
        resultField.innerHTML = `${fahrenheitTocelsius.toFixed(2)}&deg;
        C`;
    }
    else if(tempType.value === "fahrenheit" && resultType.value === "kelvin"){
        //(0F - 32) * 5/9 + 273.15 = 255.22K
        const fahrenheitTokelvin = (inputValue - 32) * 5/9  + 273.15;
        resultField.innerHTML = `${fahrenheitTokelvin.toFixed(2)}&deg;
        K`;
    }
    else if(tempType.value === "kelvin" && resultType.value === "celsius"){
        //0K - 273.15 = -273C
        const kelvinTocelsius = inputValue  - 273.15;
        resultField.innerHTML = `${kelvinTocelsius.toFixed(2)}&deg;
        C`;
    }
    else if(tempType.value === "kelvin" && resultType.value === "fahrenheit"){
        //(0K - 273.15) * 9/5 + 32 = -459.7F
        const kelvinTofahrenheit = (inputValue  - 273.15) * 9/5 + 32;
        resultField.innerHTML = `${kelvinTofahrenheit.toFixed(2)}&deg;
        F`;
    }
}