angular.module("app").run(["$templateCache", function($templateCache) {

  $templateCache.put("anon/home.html",
    "<!-- <img src=\"{{all.data[0].images.downsized.url}}\" alt=\"\"> -->\n" +
    "\n" +
    "<!-- <img src=\"{{lucky.data.image_url}}\" alt=\"\">\n" +
    "<input type=\"text\" id='to-copy' value=\"{{lucky.data.image_url}}\">\n" +
    "<button ng-click='copy()'>Copy</button>\n" +
    "<button ng-click='next()' type=\"button\">New Gif</button> -->\n" +
    "\n" +
    "<!-- <input ng-model='search'><button ng-click='goSearch()'>Go</button>\n" +
    "<div ng-repeat=\"element in getSearch.data\">\n" +
    "    <img src=\"{{element.images.downsized.url}}\" alt=\"\">\n" +
    "</div> -->\n" +
    "\n" +
    "\n" +
    "<!-- <input ng-model='number'><button ng-click='addNumber()'><span class=\"glyphicon glyphicon-music\">Nombre de gifs</span></button>\n" +
    "<div ng-repeat=\"element in X.data\">\n" +
    "  <img src=\"{{element.images.downsized.url}}\" alt=\"\">\n" +
    "</div> -->\n"
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
    "<div class=\"container\">\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"col-xs-offset-10 col-xs-1\">\n" +
    "            <img ng-click='loupe()' id=\"GifSearch\" src=\"https://media.giphy.com/media/reIVCrGs6pp28/giphy.gif\" alt=\"\">\n" +
    "              <img src=\"{{getSearch.images.downsized.url}}\" alt=\"\">\n" +
    "            <!-- <input ng-model='search'><button ng-click='goSearch()'>Go</button> -->\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"col-xs-offset-2 col-xs-1\">\n" +
    "            <a href=\"#\" ng-click=\"addDislike()\">dislike<img src=\"\" alt=\"\"></a>\n" +
    "        </div>\n" +
    "        <div class=\"col-xs-6\">\n" +
    "            <img src=\"{{lucky.data.image_url}}\" alt=\"\" id=\"GifMain\">\n" +
    "        </div>\n" +
    "        <div class=\"col-xs-offest-1 col-xs-1\">\n" +
    "            <a href=\"#\" ng-click=\"addLike()\">like<img src=\"\" alt=\"\"></a>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"row\">\n" +
    "      <div class=\"col-xs-offset-5 col-xs-4\">\n" +
    "        <p>like/dislike</p>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"row\">\n" +
    "      <div class=\"col-xs-offset-4 col-xs-8\">\n" +
    "        <input type=\"text\" id='to-copy' value=\"{{lucky.data.image_url}}\">\n" +
    "        <button id=\"btnCopy\" class=\"btn\" ng-click='copy()'>Copy</button>\n" +
    "      </div>\n" +
    "\n" +
    "    </div>\n" +
    "\n" +
    "</div>\n"
  );

  $templateCache.put("anon/navbar.html",
    "<nav class=\"navbar navbar-inverse\" role=\"navigation\" ng-controller=\"NavbarController\">\n" +
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
    "</nav>\n"
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
