//can set color for cities
var cities = [{
      title: "Vienna",
      latitude: 48.2092,
      longitude: 16.3728,
      //color: "white"
    }, {
      title: "Minsk",
      latitude: 53.9678,
      longitude: 27.5766
    }, {
      title: "Brussels",
      latitude: 50.8371,
      longitude: 4.3676
    }, {
      title: "Sarajevo",
      latitude: 43.8608,
      longitude: 18.4214
    }, {
      title: "Sofia",
      latitude: 42.7105,
      longitude: 23.3238
    }, {
      title: "Zagreb",
      latitude: 45.8150,
      longitude: 15.9785
    }, {
      title: "Pristina",
      latitude: 42.666667,
      longitude: 21.166667
    }, {
      title: "Prague",
      latitude: 50.0878,
      longitude: 14.4205
    }, {
      title: "Copenhagen",
      latitude: 55.6763,
      longitude: 12.5681
    }, {
      title: "Tallinn",
      latitude: 59.4389,
      longitude: 24.7545
    }, {
      title: "Helsinki",
      latitude: 60.1699,
      longitude: 24.9384
    }, {
      title: "Paris",
      latitude: 48.8567,
      longitude: 2.3510
    }, {
      title: "Berlin",
      latitude: 52.5235,
      longitude: 13.4115
    }, {
      title: "Athens",
      latitude: 37.9792,
      longitude: 23.7166
    }, {
      title: "Budapest",
      latitude: 47.4984,
      longitude: 19.0408
    }, {
      title: "Reykjavik",
      latitude: 64.1353,
      longitude: -21.8952
    }, {
      title: "Dublin",
      latitude: 53.3441,
      longitude: -6.2675
    }, {
      title: "Rome",
      latitude: 41.8955,
      longitude: 12.4823
    }, {
      title: "Riga",
      latitude: 56.9465,
      longitude: 24.1049
    }, {
      title: "Vaduz",
      latitude: 47.1411,
      longitude: 9.5215
    }, {
      title: "Vilnius",
      latitude: 54.6896,
      longitude: 25.2799
    }, {
      title: "Luxembourg",
      latitude: 49.6100,
      longitude: 6.1296
    }, {
      title: "Skopje",
      latitude: 42.0024,
      longitude: 21.4361
    }, {
      title: "Valletta",
      latitude: 35.9042,
      longitude: 14.5189
    }, {
      title: "Chisinau",
      latitude: 47.0167,
      longitude: 28.8497
    }, {
      title: "Monaco",
      latitude: 43.7325,
      longitude: 7.4189
    }, {
      title: "Podgorica",
      latitude: 42.4602,
      longitude: 19.2595
    }, {
      title: "Amsterdam",
      latitude: 52.3738,
      longitude: 4.8910
    }, {
      title: "Oslo",
      latitude: 59.9138,
      longitude: 10.7387
    }, {
      title: "Warsaw",
      latitude: 52.2297,
      longitude: 21.0122
    }, {
      title: "Lisbon",
      latitude: 38.7072,
      longitude: -9.1355
    }, {
      title: "Bucharest",
      latitude: 44.4479,
      longitude: 26.0979,
    }, {
      title: "Moscow",
      latitude: 55.7558,
      longitude: 37.6176,
      color: "white"
    }, {
      title: "San Marino",
      latitude: 43.9424,
      longitude: 12.4578
    }, {
      title: "Belgrade",
      latitude: 44.8048,
      longitude: 20.4781
    }, {
      title: "Bratislava",
      latitude: 48.2116,
      longitude: 17.1547
    }, {
      title: "Ljubljana",
      latitude: 46.0514,
      longitude: 14.5060
    }, {
      title: "Madrid",
      latitude: 40.4167,
      longitude: -3.7033
    }, {
      title: "Stockholm",
      latitude: 59.3328,
      longitude: 18.0645
    }, {
      title: "Bern",
      latitude: 46.9480,
      longitude: 7.4481
    }, {
      title: "Kiev",
      latitude: 50.4422,
      longitude: 30.5367
    }, {
      title: "London",
      latitude: 51.5002,
      longitude: -0.1262
    }, {
      title: "Gibraltar",
      latitude: 36.1377,
      longitude: -5.3453
    }, {
      title: "Saint Peter Port",
      latitude: 49.4660,
      longitude: -2.5522
    }, {
      title: "Douglas",
      latitude: 54.1670,
      longitude: -4.4821
    }, {
      title: "Saint Helier",
      latitude: 49.1919,
      longitude: -2.1071
    }, {
      title: "Longyearbyen",
      latitude: 78.2186,
      longitude: 15.6488
    }, {
      title: "Kabul",
      latitude: 34.5155,
      longitude: 69.1952
    }, {
      title: "Yerevan",
      latitude: 40.1596,
      longitude: 44.5090
    }, {
      title: "Baku",
      latitude: 40.3834,
      longitude: 49.8932
    }, {
      title: "Manama",
      latitude: 26.1921,
      longitude: 50.5354
    }, {
      title: "Dhaka",
      latitude: 23.7106,
      longitude: 90.3978
    }, {
      title: "Los Angeles",
      latitude: 34.05,
      longitude: -118.233333
    }, {
      title: "Los Gatos",
      latitude: 37.233333,
      longitude: -121.95
    }];

// svg path for target icon
var targetSVG = "M9,0C4.029,0,0,4.029,0,9s4.029,9,9,9s9-4.029,9-9S13.971,0,9,0z M9,15.93 c-3.83,0-6.93-3.1-6.93-6.93S5.17,2.07,9,2.07s6.93,3.1,6.93,6.93S12.83,15.93,9,15.93 M12.5,9c0,1.933-1.567,3.5-3.5,3.5S5.5,10.933,5.5,9S7.067,5.5,9,5.5 S12.5,7.067,12.5,9z";

var map = AmCharts.makeChart("chartdiv", {
    type: "map",
    "theme": "none",
    //pathToImages: "http://www.amcharts.com/lib/3/images/",

    "balloon": {
        "adjustBorderColor": true,
        "color": "#000000",
        "cornerRadius": 5,
        "fillColor": "#FFFFFF",
        //"balloonText": "[[title]]"
        "enabled": false
    },

    imagesSettings: {
        color:"blue"
    },

zoomControl:{buttonFillColor:"#15A892"},

areasSettings:{unlistedAreasColor:"#15A892"},

    dataProvider: {
        map: "worldLow",
        images: []
    }
    
});

//adds the cities in the array cities to the map
setTimeout(
  function() 
  {
      for(var i = 0; i < cities.length; i ++){
        var city = cities[i];
        console.dir(city.title);
        //console.dir(city.color);
        city.svgPath = targetSVG;
            city.zoomLevel = 5;
            city.scale = 0.5;
        
        // add city object to map
        map.dataProvider.images.push(city);
        map.validateData();
      }
  }, 10);