function kelvinToCelsius(temperature){
    return temperature-273.15;
}
function celsiusToFahrenheit(temperature){
    return (temperature*9/5)+32;
}
function fahrenheitToCelsius(temperature){
    return (temperature-32)*5/9;
}
var currTemperature = 0;
var isCelsius = 1;
function updateTemperature(){
    if(isCelsius){
        isCelsius=0;
        currTemperature = celsiusToFahrenheit(currTemperature);
        $("#temperature").text(currTemperature+" F°");
    } else {
        isCelsius=1;
        currTemperature = fahrenheitToCelsius(currTemperature);
        $("#temperature").text(currTemperature+" C°");
    }
}
function displayData (weather){
    currTemperature = kelvinToCelsius(weather.main.temp);
    isCelsius = 1;
    $("#location").text(weather.name+" ("+weather.sys.country+(")"));
    $("#temperature").text(currTemperature+" C°");
//    $("#sky").text(weather.weather[0].main);
    $("#sky").text(weather.weather[0].description);
//    $("#stat").text("Rain Volume : "+weather.rain["1h"] + "L, Cloudiness : "+weather.clouds.all+"%");
    $("#stat").text("Cloudiness : "+weather.clouds.all+"%");
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
//            "lat":"50.6739667",
//            "lon":"4.61547069"
            "lat":position.coords.latitude,
            "lon":position.coords.longitude
        },
        function(data, status){
            var dataJson = JSON.parse(data);
            displayData(dataJson);
        }
    );    
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
        navigator.geolocation.getCurrentPosition(updateWeather,showError);
    } else {
        alert("Geolocation is not supported by this browser.");
    }
}
$(document).ready(function (){
//    updateWeather();
    getLocation();
    $("#temperature").click(function(){
        updateTemperature();
    });
    $("#refreshBtn").click(function(){
//        updateWeather();
        getLocation();
    });
    $("#weatherThumbnail").addClass("text-center");
    $("ul").addClass("list-group");
    $(".list-group > li").addClass("list-group-item");
    $(".list-group-item > h1").addClass("list-group-item-heading");
    $(".list-group-item > h4").addClass("list-group-item-text");
//    $(".list-group").append($('<img src="http://openweathermap.org/img/w/10d.png>"></img>'))
});