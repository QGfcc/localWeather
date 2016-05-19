<!DOCTYPE html>
<!--
To change this license header, choose License Headers in Project Properties.
To change this template file, choose Tools | Templates
and open the template in the editor.
-->
<html>
    <head>
        <meta charset="utf-8"> 
        <meta name="viewport" content="width=device-width, initial-scale=1">    
        <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js"></script>
        <script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>
        <link href="css/localWeather.css" rel="stylesheet" type="text/css"/>
        <script src="js/localWeather.js" type="text/javascript"></script>
        <title>Local Weather</title>
    </head>
    <body>
        <?php
        // put your code here
        ?>
        <div class="container">
            <h1 class="text-center"> Your Local Weather </h1>
            <div class="row" id="weatherThumbnail">
                <div class="col-xs-12 col-sm-6 col-md-4 col-md-offset-2" id="weatherIcon">
                    <img src="http://images.clipartpanda.com/sunny-weather-clipart-sunny-weather-ed-md.png">
                </div>
                <div class="col-xs-12 col-sm-6 col-md-4" id="weatherInfo">
                    <ul>
                        <li id="location">
                            
                        </li>
                        <li id="temperature">
                            
                        </li>
                        <li id="sky">
                            
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </body>
</html>
