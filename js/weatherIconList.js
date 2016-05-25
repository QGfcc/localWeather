/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var weatherIconList={
    "rain":"http://www.howtogeek.com/wp-content/uploads/2011/04/650x366xrainydays"
            +"wallpapercollectionseriesone09.jpg.pagespeed.gp+jp+jw+pj+js+rj+rp+rw+ri+cp+md.ic.BchDI3Sdd_.jpg",
//    "light rain":"http://www.howtogeek.com/wp-content/uploads/2011/04/650x366xrainydays"
//            +"wallpapercollectionseriesone09.jpg.pagespeed.gp+jp+jw+pj+js+rj+rp+rw+ri+cp+md.ic.BchDI3Sdd_.jpg",
    "heavy rain":"http://cdn.onlinewebfonts.com/svg/download_358541.png",
    "light rain":"http://www.iconarchive.com/download/i89288/icons8/ios7/Weather-Rain.ico",
//    "light rain":"http://images.clipartpanda.com/sunny-weather-clipart-sunny-weather-ed-md.png",
//    "sunny":"http://images.clipartpanda.com/sunny-weather-clipart-sunny-weather-ed-md.png"
    "sunny":"http://iconshow.me/media/images/ui/ios7-icons/png/512/sunny-outline.png",
    "snow":"http://downloadicons.net/sites/default/files/heavy-snow-icon-23780.png",
    "windy":"https://cdn3.iconfinder.com/data/icons/weather-icons-8/512/weather-windy-512.png",
    "partly cloudy":"http://www.iconarchive.com/download/i89285/icons8/ios7/Weather-Partly-Cloudy-Day.ico",
    "thunderstorm":"http://downloadicons.net/sites/default/files/thunderstorm-wear-icons-46090.png",
    "drizzle":"",
    "clear":"",
    "mist":"http://image005.flaticon.com/1/png/512/15/15774.png",
    "tornado":"https://d30y9cdsu7xlg0.cloudfront.net/png/10261-200.png"
};

var weatherIconList2={
    "1":weatherIconList["thunderstorm"],
    "2":weatherIconList["thunderstorm"],
//    "3":weatherIconList["drizzle"],
    "3":weatherIconList["light rain"],
//    "4":weatherIconList[""],
    "4":weatherIconList["heavy rain"],
    "5":weatherIconList["heavy rain"],
    "6":weatherIconList["snow"],
    "7":weatherIconList["mist"],
//    "8":weatherIconList["clear"],
    "8":weatherIconList["partly cloudy"],
    "9":weatherIconList["tornado"]
};
var weatherBackgroundLinksList={
    "rain":"",
//    "heavy rain":"http://cdn.patch.com/users/22857729/2015/07/T800x600/20150755a66924e777a.jpg",
    "heavy rain":"http://newsfirst.lk/english/wp-content/uploads/2014/08/rain.jpg",
    "light rain":"",
    "sunny":"",
    "snow":"http://s1.favim.com/orig/9/nature-photography-sky-snow-tree-Favim.com-170734.jpg",
//    "snow":"http://cyrille.diwi.org/images/kritablog/SnowMountain/Step5_flakes.png",
    "windy":"",
    "partly cloudy":"http://aaj.tv/wp-content/uploads/2015/10/partly-cloudy.jpg",
    "thunderstorm":"https://thisisengland.org.uk/wp-content/uploads/2015/08/thunderstorm.jpg",
    "drizzle":"http://www.metoffice.gov.uk/media/image/d/n/light_rain.jpg",
    "clear":"",
//    "mist":"https://tracepattern.files.wordpress.com/2012/04/brisbane-mist-april-03.jpg",
    "mist":"http://vignette1.wikia.nocookie.net/demigodshaven/images/f/f5/Mist.jpg/revision/latest?cb=20110102163040",
    "tornado":"http://i.huffpost.com/gen/2176456/images/o-TORNADO-facebook.jpg"
};
var weatherBackgroundList={
    "1":weatherBackgroundLinksList["thunderstorm"],
    "2":weatherBackgroundLinksList["thunderstorm"],
    "3":weatherBackgroundLinksList["drizzle"],
//    "3":weatherBackgroundLinksList["light rain"],
//    "4":weatherBackgroundLinksList[""],
    "4":weatherBackgroundLinksList["heavy rain"],
    "5":weatherBackgroundLinksList["heavy rain"],
    "6":weatherBackgroundLinksList["snow"],
    "7":weatherBackgroundLinksList["mist"],
//    "8":weatherBackgroundLinksList["clear"],
    "8":weatherBackgroundLinksList["partly cloudy"],
    "9":weatherBackgroundLinksList["tornado"]
};