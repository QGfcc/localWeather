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
function btnToggle(onOff,target){
    if(onOff){
        target.addClass("active");
    } else {
        target.removeClass("active");
    }
}
function updateUnitBtn(){
    if(isFahrenheit){
        $("#FBtn").addClass("active");
        $("#CBtn").removeClass("active");
    } else {
        $("#CBtn").addClass("active");
        $("#FBtn").removeClass("active");
    }
}
function updateTemperature(){
//    $("#temperature").text(Math.floor(tempObj.currTemperature)+tempObj.unit);
    $("#temperature").text(tempObj.getTemp(isFahrenheit));
    updateUnitBtn();
}
function swapUnit(){
    if(isFahrenheit){
        isFahrenheit = 0;
    } else {
        isFahrenheit = 1;
    }
    updateTemperature();
}
function updateWeatherImg(weather){
        $("#weatherImg").attr("src",weatherIconList2[weather]);
        $("html").css("background-image","url("+weatherBackgroundList[weather]+")");
//        $("body").css("background-image","url("+weatherBackgroundList[weather]+")");
//        $("html").css("background","url("+weatherBackgroundList[weather]+") no-repeat center fixed");
//        $("html").css("background","url("+weatherBackgroundList[weather]+") no-repeat center fixed");
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
//    alert("trol");
    btnToggle(0,$("#refreshBtn"));
}
//var sampleId =1;
//var next = "weatherSample.php";
//function updateWeather(position){
//    if(sampleId){
//        sampleId =0;
//        next = "weatherSample.php";
//    } else {
//        sampleId = 1;
//        next = "weatherSample2.php";
//    }
//    $.post(
////        "http://api.openweathermap.org/data/2.5/weather",
////        "http://api.openweathermap.org/data/2.5/weather?",
////        "http://api.openweathermap.org/data/2.5/weather?lat=35&lon=139",
//        next,
//        {
//            "APPID":"b3f75a3057c526ca2b05ff4ad9d99873",
//            "lat":position.coords.latitude,
//            "lon":position.coords.longitude
//        },
//        function(data, status){
//            var dataJson = JSON.parse(data);
//            displayData(dataJson);
//        }
//    );    
//}
function updateWeatherJSONP(position){
    $.ajax({
//      url: "http://api.openweathermap.org/data/2.5/weather?lat=35&lon=139",
      url: "http://api.openweathermap.org/data/2.5/weather?"
      +"lat="+position.coords.latitude
      +"&lon="+position.coords.longitude
      +"&APPID=b3f75a3057c526ca2b05ff4ad9d99873",
      dataType: 'jsonp',
      success: displayData,
      error:function(){}
    });
}
function updateWeatherJSONPFromIP(position){
    $.ajax({
//      url: "http://api.openweathermap.org/data/2.5/weather?lat=35&lon=139",
      url: "http://api.openweathermap.org/data/2.5/weather?"
      +"lat="+position.lat
      +"&lon="+position.lon
      +"&APPID=b3f75a3057c526ca2b05ff4ad9d99873",
      dataType: 'jsonp',
      success: displayData,
      error:function(){}
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
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(updateWeatherJSONP,showError);
//        navigator.geolocation.getCurrentPosition(updateWeather,showError);
    } else {
        alert("Geolocation is not supported by this browser.");
    }
}
function getLocationJSONPFromIP() {
    $.ajax({
      url: "http://ip-api.com/json/",
      dataType: 'jsonp',
      success: updateWeatherJSONPFromIP,
      error:function(){}
    });
}
$(document).ready(function (){
    $("#weatherThumbnail").addClass("text-center");
    $("ul").addClass("list-group");
    $(".list-group > li").addClass("list-group-item");
    $(".list-group-item > h1").addClass("list-group-item-heading");
    $(".list-group-item > h4").addClass("list-group-item-text");
    
    
    updateWeatherImg(5);//deafult value
    getLocationJSONPFromIP();
    
    
    $("#FBtn").click(function(){
        isFahrenheit = 1;
        updateTemperature();
//        $("#FBtn").addClass("active");
//        $("#CBtn").removeClass("active");
    });
    $("#CBtn").click(function(){
        isFahrenheit = 0;
        updateTemperature();
//        $("#CBtn").addClass("active");
//        $("#FBtn").removeClass("active");
    });
    $("#refreshBtn").click(function(){
        getLocationJSONPFromIP();
//        alert("test");
        btnToggle(1,$("#refreshBtn"));
//        alert("test");
    });
//    var i =0;
////    $("*").click(function(){
//    $("#temperatureLi").click(function(){
//        i++;
//        updateWeatherImg(i);
////        alert(i);
//    });
    
    
    
});