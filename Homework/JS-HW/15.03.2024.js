const trafficLight = angular.module('trafficLight', []);

let count = 1;

trafficLight.controller("controller", function($scope) {
    $scope.ChangeColor = function() {
        if(count <= 3 && count > 0){
            switch(count){
                case 1:
                    $scope.color_green = "green";
                    $scope.color_yellow = "grey";
                    $scope.color_red = "grey";
                    count = 2;
                    break;
    
                case 2:
                    $scope.color_green = "grey";
                    $scope.color_yellow = "yellow";
                    $scope.color_red = "grey";
                    count = 3;
                    break;
                
                case 3:
                    $scope.color_green = "grey";
                    $scope.color_yellow = "grey";
                    $scope.color_red = "red";
                    count = 2;
                    break;
            }
        }
    }
});








