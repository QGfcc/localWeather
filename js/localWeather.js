/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

alert("qdfqsdf");
$(document).ready(function (){
alert("1");
    $.post(
        "http://api.openweathermap.org/data/2.5/weather",
        {
            "APPID":"b3f75a3057c526ca2b05ff4ad9d99873",
            "lat":"50.6739667",
            "lon":"4.61547069"
        },
        function(data, status){
            alert("1.1");
            var dataJson = JSON.parse(data);
            alert("Data: " + dataJson + "\nStatus: " + status);
        }
    );
alert("1.2");
});
alert("2");