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
                    <br>
                    <br>
                    <a class="btn btn-default" id="refreshBtn">Refresh</a>
                </div>
                <div class="col-xs-12 col-sm-6 col-md-4" id="weatherInfo">
                    <!--<img src="http://openweathermap.org/img/w/10d.png>"></img>-->
                    <ul>
                        <li >
                            <h1>Location</h1>
                            <p id="location"></p>
                            <!--<h4 id="location"></h4>-->
                            
                        </li>
                        <!--<li id="temperature">-->
                        <li>
                            <h1>Temperature</h1>
                            <!--<a >-->
                                <p id="temperature"></p>
                            <!--</a>-->    
                        </li>
                        <li >
                            <h1>Sky</h1>
                            <p id="sky"></p>
                            
                        </li>
                        <li >
                            <h1>Stats</h1>
                            <p id="stat"></p>
                            
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </body>
</html>
