const app = angular.module("myApp", ["ngRoute"]);
      app.config([
        "$routeProvider",
        "$locationProvider",
        function ($routeProvider, $locationProvider) {
          $routeProvider
          .when("/", {
            templateUrl: "templates/home.html",
            
          })
            .when("/tourism", {
              templateUrl: "templates/tourism.html",
              
            })
            .when("/species/normal", {
              templateUrl: "templates/normal.html",
              controller : "normal"
            })
            .when("/species/endangered", {
              templateUrl: "templates/endangered.html",
              controller : "endangered"
            })
            .when("/species/extinct", {
              templateUrl: "templates/extinct.html",
              controller : "extinct"
            })
            .when("/species/rare", {
              templateUrl: "templates/rare.html",
              controller : "rare"
            })
            .when("/species/endemic", {
              templateUrl: "templates/endemic.html",
              controller : "endemic"
            })
            .when("/species/vulnerable", {
              templateUrl: "templates/vulnerable.html",
              controller : "vulnerable"
            })
            .when("/parks", {
              templateUrl: "templates/parks.html",
              
            }).when("/fun/randomcutedogs", {
              templateUrl: "templates/dog.html",
              
            }).when("/contact", {
              templateUrl: "templates/contact.html",
              
            })
            .when("/stats", {
              templateUrl: "templates/stats.html",
              
            });
        //   $locationProvider.html5Mode(true);
        },
      ]);
      app.controller("normal", function ($scope) {
        $scope.title = "Normal Scpecies";
        
      });
      app.controller("extinct", function ($scope) {
        $scope.title = "Extinct Scpecies";
        
      });
      app.controller("endangered", function ($scope) {
        $scope.title = "Endangered Scpecies";
        
      });
      app.controller("endemic", function ($scope) {
        $scope.title = "Endemic Scpecies";
        
      });
      app.controller("rare", function ($scope) {
        $scope.title = "Rare Species";
        
      });
      app.controller("vulnerable", function ($scope) {
        $scope.title = "Vulnerable Species";
        
      });
