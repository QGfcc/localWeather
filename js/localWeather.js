//function kelvinToCelsius(temperature){
//    return temperature-273.15;
//}
//function celsiusToFahrenheit(temperature){
//    return (temperature*9/5)+32;
//}
//function fahrenheitToCelsius(temperature){
//    return (temperature-32)*5/9;
//}
//function Temperature(kelvin) {
//    this.currTemperature = this.init(kelvin);
//    this.isCelsius = 1;
//    this.unit=" °C";
//    this.KToC = function(temperature){
//        this.currTemperature = temperature-273.15;
//    };
//    this.CToF = function(){
//        this.currTemperature = (this.currTemperature*9/5)+32;;
//        this.isCelsius = 0;
//        this.unit=" °F";
//    };
//    this.FToC = function(){
//        this.currTemperature = (this.currTemperature-32)*5/9;
//        this.isCelsius = 1;
//        this.unit=" °C";
//    };
//    this.swapUnit = function(){
//        if(isCelsius){
//            this.CToF();
//        } else {
//            this.FToC();
//        }
//    };
//    this.updateTemp = function(kelvin){
//        this.KToC(kelvin);
//        if(!isCelsius){
//            this.FToC();
//        }
//    };
//}
function Temp(tempVal,unitVal){
    this.currentTemperature=tempVal;
    this.unit=unitVal;
}
function Temperature(kelvin) {
//    this.currTemperature = this.init(kelvin);
//    this.isCelsius = 1;
//    this.unit=" °C";
    this.KToC = function(kelvin){
        return kelvin-273.15;
    };
    this.CToF = function(celsius){
        return (celsius*9/5)+32;
    };
//    this.tempArr=[0,0,0,0];
    this.tempArr=[];
    this.tempArr.push(new Temp(this.KToC(kelvin)," °C"));
    this.tempArr.push(new Temp(this.CToF(this.KToC(kelvin))," °F"));
//    this.tempArr[0].currentTemperature = this.KToC(kelvin);
//    this.tempArr[1].currentTemperature = this.CToF(this.KToC(kelvin));
//    this.tempArr[0].unit = " °C";
//    this.tempArr[1].unit = " °F";
    this.getTemp = function(isFahrenheit){
        return Math.floor(this.tempArr[isFahrenheit].currentTemperature)+this.tempArr[isFahrenheit].unit;
    };
}
var tempObj;
//var tempObj = new Temperature(283);
//var tempObj = {
//    currTemperature :0,
//    isCelsius :0,
//    unit:" °C"
//}
//var currTemperature = 0;
var isFahrenheit = 0;
//function swapTemperatureUnit(){
//    if(tempObj.isCelsius){
//        tempObj.isCelsius=0;
//        tempObj.currTemperature = celsiusToFahrenheit(tempObj.currTemperature);
//        tempObj=" °F";
//    } else {
//        tempObj.isCelsius=1;
//        tempObj.currTemperature = fahrenheitToCelsius(tempObj.currTemperature);
//        tempObj=" °C";
//    }
//}
function updateTemperature(){
//    $("#temperature").text(Math.floor(tempObj.currTemperature)+tempObj.unit);
    $("#temperature").text(tempObj.getTemp(isFahrenheit));
}
function swapUnit(){
    if(isFahrenheit){
        isFahrenheit = 0;
    } else {
        isFahrenheit = 1;
    }
    updateTemperature();
}
function displayData (weather){
//    tempObj.currTemperature = celsiusToFahrenheit(kelvinToCelsius(weather.main.temp));
    tempObj = new Temperature(weather.main.temp);
    $("#location").text(weather.name+" ("+weather.sys.country+(")"));
//    $("#temperature").text(Math.floor(currTemperature)+" C°");
    updateTemperature();
//    $("#sky").text(weather.weather[0].main);
    $("#sky").text(weather.weather[0].description);
//    updateWeatherImg(weather.weather[0].description);
    updateWeatherImg(weather.weather[0].id.toString().charAt(0));
//    updateWeatherImg("sunny");
//    updateWeatherImg("light rain");
//    updateWeatherImg("partly cloudy");
//    updateWeatherImg("rain");
//    updateWeatherImg("windy");
//    updateWeatherImg("snowy");
//    updateWeatherImg("thunderstorm");
//    updateWeatherImg(2);
//    updateWeatherImg(3);
//    updateWeatherImg(4);
//    updateWeatherImg(5);
//    updateWeatherImg(6);
//    updateWeatherImg(7);
//    updateWeatherImg(8);
//    updateWeatherImg(9);
    $("#cloudiness").text(weather.clouds.all+"%");
}
var sampleId =1;
var next = "weatherSample.php";
function updateWeather(position){
    if(sampleId){
        sampleId =0;
        next = "weatherSample.php";
    } else {
        sampleId = 1;
        next = "weatherSample2.php";
    }
    $.post(
//        "http://api.openweathermap.org/data/2.5/weather",
//        "http://api.openweathermap.org/data/2.5/weather?",
//        "http://api.openweathermap.org/data/2.5/weather?lat=35&lon=139",
        next,
        {
            "APPID":"b3f75a3057c526ca2b05ff4ad9d99873",
            "lat":position.coords.latitude,
            "lon":position.coords.longitude
        },
        function(data, status){
            var dataJson = JSON.parse(data);
            displayData(dataJson);
        }
    );    
}
function updateWeatherJSONP(position){
    $.ajax({
//      url: "http://api.openweathermap.org/data/2.5/weather?lat=35&lon=139",
      url: "http://api.openweathermap.org/data/2.5/weather?"
      +"lat="+position.coords.latitude
      +"&lon="+position.coords.longitude
      +"&APPID=b3f75a3057c526ca2b05ff4ad9d99873",
      dataType: 'jsonp',
      success: displayData
    });
}
function showError(error) {
    switch(error.code) {
        case error.PERMISSION_DENIED:
            alert("User denied the request for Geolocation.");
            break;
        case error.POSITION_UNAVAILABLE:
            alert("Location information is unavailable.");
            break;
        case error.TIMEOUT:
            alert("The request to get user location timed out.");
            break;
        case error.UNKNOWN_ERROR:
            alert("An unknown error occurred.");
            break;
    }
}
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(updateWeatherJSONP,showError);
//        navigator.geolocation.getCurrentPosition(updateWeather,showError);
    } else {
        alert("Geolocation is not supported by this browser.");
    }
}
function updateWeatherImg(weather){
        $("#weatherImg").attr("src",weatherIconList2[weather]);
}
$(document).ready(function (){
    getLocation();
    $("#temperatureLi").click(function(){
        swapUnit();
    });
    $("#refreshBtn").click(function(){
        getLocation();
    });
//    var i =0;
//    $("*").click(function(){
//        i++;
//        updateWeatherImg(2);
////        alert(i);
//    });
    
    
    
    $("#weatherThumbnail").addClass("text-center");
    $("ul").addClass("list-group");
    $(".list-group > li").addClass("list-group-item");
    $(".list-group-item > h1").addClass("list-group-item-heading");
    $(".list-group-item > h4").addClass("list-group-item-text");
});