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
        <script src="js/weatherIconList.js" type="text/javascript"></script>
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
                <div class="col-xs-12 col-sm-6 col-md-4 col-md-offset-2" id="weatherDisplay">
                    <!--<img id="weatherImg" class="img-responsive" src="">-->
                    <img id="weatherImg" class="" src="">
<!--                    <br>
                    <br>-->
                    <!--<a class="btn btn-default" id="refreshBtn">Refresh</a>-->
                </div>
                <div class="col-xs-12 col-sm-6 col-md-4" id="weatherInfo">
                    <!--<img src="http://openweathermap.org/img/w/10d.png>"></img>-->
                    <ul>
                        <!--<li >-->
                            <!--<div class="btn-toolbar">-->
                                <!--<div class="btn-group btn-group-justified">-->
                                <div class="btn-group">
                                    <!--<a class="btn btn-default" id="refreshBtn">Refresh</a>-->
                                    <a class="btn btn-default" id="refreshBtn">
                                    <img src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-refresh-128.png"
                                         width="18px">
                                    </a>
<!--                                </div>
                                <div class="btn-group btn-group-justified">
                                <div class="btn-group pull-right">-->
                                    <a class="btn btn-default" id="CBtn">
                                        °C
                                    </a>
                                    <a class="btn btn-default" id="FBtn">
                                        °F
                                    </a>
                                </div>
                            <!--</div>-->
                            
                        <!--</li>-->
                        <li >
                            <h1>Location</h1>
                            <p id="location"></p>
                            <!--<h4 id="location"></h4>-->
                            
                        </li>
                        <!--<li id="temperature">-->
                        <li id="temperatureLi">
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
                            <h1>Cloudiness</h1>
                            <p id="cloudiness"></p>
                            
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </body>
</html>
