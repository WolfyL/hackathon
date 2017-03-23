angular.module("app").run(["$templateCache", function($templateCache) {

  $templateCache.put("anon/home.html",
    "<object width=\"425\" height=\"344\" data=\"https://www.youtube.com/v/qSjN6r9Up6g&hl=en&fs=1\"></object>\n" +
    "<iframe src=\"{{trustSrc(show)}}\" width=\"425\" height=\"344\"></iframe>\n" +
    "\n" +
    "<!-- <!DOCTYPE html>\n" +
    "<html>https://www.youtube.com/watch?v=qSjN6r9Up6g\n" +
    "  <head>\n" +
    "    <title>Simple Map</title>\n" +
    "    <meta name=\"viewport\" content=\"initial-scale=1.0\">\n" +
    "    <meta charset=\"utf-8\">\n" +
    "    <style>\n" +
    "      /* Always set the map height explicitly to define the size of the div\n" +
    "       * element that contains the map. */\n" +
    "      #map {\n" +
    "        height: 100%;\n" +
    "      }\n" +
    "      /* Optional: Makes the sample page fill the window. */\n" +
    "      html, body {\n" +
    "        height: 100%;\n" +
    "        margin: 0;\n" +
    "        padding: 0;\n" +
    "      }\n" +
    "    </style>\n" +
    "  </head>\n" +
    "  <body>\n" +
    "    <div id=\"map\"></div>\n" +
    "    <script>\n" +
    "      var map;\n" +
    "      function initMap() {\n" +
    "        map = new google.maps.Map(document.getElementById('map'), {\n" +
    "          center: {lat: -34.397, lng: 150.644},\n" +
    "          zoom: 8\n" +
    "        });\n" +
    "      }\n" +
    "\n" +
    "\n" +
    "    </script>\n" +
    "    <script src=\"https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap\"\n" +
    "    async defer></script>\n" +
    "  </body>\n" +
    "  </html> -->\n"
  );

  $templateCache.put("anon/login.html",
    "<div class=\"row\">\n" +
    "    <div class=\"col-xs-6 col-xs-offset-3\">\n" +
    "        <form class=\"form\" name=\"loginForm\" novalidate ng-submit=\"login()\">\n" +
    "            <div ng-repeat=\"error in errors\">{{error.error}}</div>\n" +
    "            <div class=\"input-group\">\n" +
    "                <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-user\"></i></span>\n" +
    "                <input id=\"email\" type=\"email\" class=\"form-control\" ng-model=\"user.email\" required placeholder=\"Email Address\">\n" +
    "            </div>\n" +
    "            <div class=\"input-group\">\n" +
    "                <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-lock\"></i></span>\n" +
    "                <input id=\"password\" type=\"password\" class=\"form-control\" ng-model=\"user.password\" required placeholder=\"Password\">\n" +
    "            </div>\n" +
    "            <button type=\"submit\" class=\"btn btn-primary btn-block\">Login</button>\n" +
    "        </form>\n" +
    "    </div>\n" +
    "</div>\n"
  );

  $templateCache.put("anon/main.html",
    ""
  );

  $templateCache.put("anon/navbar.html",
    "<!-- <nav class=\"navbar navbar-inverse\" role=\"navigation\" ng-controller=\"NavbarController\">\n" +
    "    <div class=\"container-fluid\" id=\"navBackground\">\n" +
    "        <div class=\"navbar-header\">\n" +
    "            <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#navbar\">\n" +
    "        <span class=\"sr-only\">Toggle navigation</span>\n" +
    "        <span class=\"icon-bar\"></span>\n" +
    "        <span class=\"icon-bar\"></span>\n" +
    "        <span class=\"icon-bar\"></span>\n" +
    "      </button>\n" +
    "\n" +
    "            <a class=\"navbar-brand\" href=\"/#!/main\" id=\"navbarTitle\">GifMeImFamous*</a>\n" +
    "\n" +
    "        </div>\n" +
    "        <div class=\"nav\">\n" +
    "        <div class=\"collapse navbar-collapse\" id=\"navbar\">\n" +
    "\n" +
    "            <ul class=\"nav navbar-nav navbar-right\">\n" +
    "                <li>\n" +
    "                    <li ui-sref-active=\"active\"><a ui-sref=\"anon.login\" ng-hide=\"auth.isAuthenticated()\" >Logout</a></li>\n" +
    "                    <li ui-sref-active=\"active\"><a ui-sref=\"anon.history\" ng-hide=\"auth.isAuthenticated()\" >Hystory</a></li>\n" +
    "                    <li ui-sref-active=\"active\"><a ui-sref=\"user.dashboard\" ng-show=\"auth.isAuthenticated()\">Dashboard</a></li>\n" +
    "                    <li><a ng-click=\"logout()\" ng-show=\"auth.isAuthenticated()\" href='#'>Logout</a></li>\n" +
    "                </li>\n" +
    "            </ul>\n" +
    "        </div>\n" +
    "\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</nav> -->\n"
  );

  $templateCache.put("anon/register.html",
    "<div class=\"row\">\n" +
    "    <div class=\"col-xs-6 col-xs-offset-3\">\n" +
    "        <form class=\"form\" name=\"loginForm\" novalidate ng-submit=\"register()\">\n" +
    "            <div ng-repeat=\"error in errors\">{{error.error}}</div>\n" +
    "            <div class=\"input-group\">\n" +
    "                <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-user\"></i></span>\n" +
    "                <input id=\"email\" type=\"email\" class=\"form-control\" ng-model=\"user.email\" required placeholder=\"Email Address\">\n" +
    "            </div>\n" +
    "            <div class=\"input-group\">\n" +
    "                <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-lock\"></i></span>\n" +
    "                <input id=\"password\" type=\"password\" class=\"form-control\" ng-model=\"user.password\" required placeholder=\"Password\">\n" +
    "            </div>\n" +
    "            <button type=\"submit\" class=\"btn btn-primary btn-block\">Register</button>\n" +
    "        </form>\n" +
    "    </div>\n" +
    "</div>\n"
  );

  $templateCache.put("anon/search.html",
    "<!-- <input ng-model='search'><button ng-click='goSearch()'>Go</button>\n" +
    "<img src=\"{{getSearch.images.downsized.url}}\" alt=\"\"> -->\n"
  );

  $templateCache.put("user/dashboard.html",
    "Dashboard de {{user.email}}\n"
  );

  $templateCache.put("user/navbar.html",
    "<nav class=\"navbar navbar-default\" role=\"navigation\" ng-controller=\"NavbarController\">\n" +
    "    <div class=\"container-fluid\">\n" +
    "        <div class=\"navbar-header\">\n" +
    "            <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#navbar\">\n" +
    "        <span class=\"sr-only\">Toggle navigation</span>\n" +
    "        <span class=\"icon-bar\"></span>\n" +
    "        <span class=\"icon-bar\"></span>\n" +
    "        <span class=\"icon-bar\"></span>\n" +
    "      </button>\n" +
    "            <a class=\"navbar-brand\" href=\"#\"></a>\n" +
    "        </div>\n" +
    "        <div class=\"collapse navbar-collapse\" id=\"navbar\">\n" +
    "            <ul class=\"nav navbar-nav\">\n" +
    "                <li ui-sref-active=\"active\"><a ui-sref=\"user.dashboard\" ng-show=\"auth.isAuthenticated()\">Dashboard</a></li>\n" +
    "                <li ui-sref-active=\"active\"><a ui-sref=\"user.profile\" ng-show=\"auth.isAuthenticated()\">Profile</a></li>\n" +
    "\n" +
    "            </ul>\n" +
    "            <ul class=\"nav navbar-nav navbar-right\">\n" +
    "                <li>\n" +
    "                <li ui-sref-active=\"active\"><a ui-sref=\"anon.home\">Website</a></li>\n" +
    "                    <li><a ng-click=\"logout()\" ng-show=\"auth.isAuthenticated()\" href='#'>Logout</a></li>\n" +
    "                </li>\n" +
    "            </ul>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</nav>\n"
  );

  $templateCache.put("user/profile.html",
    "Profile de {{user.email}}\n"
  );

}]);
