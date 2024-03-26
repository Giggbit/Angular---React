let count = 0;
let colors = ["green", "yellow", "red", "yellow"];

angular.module("tr", [])

.directive("directive1", function(){
    return{
        restrict: "E",
        scope: {},
        replace: true,
        controller: function($scope){            
            $scope.color = "white";
            $scope.ChangeColor = () => {
                switch(count){
                    case 0:
                        $scope.color = colors[count];
                        count++;
                        break;

                    case 1:
                        $scope.color = colors[count];
                        count++;
                        break;

                    case 2:
                        $scope.color = colors[count];
                        count++;
                        break;

                    case 3:
                        $scope.color = colors[count];
                        count = 0;
                        break;
                }
            };
        },
        template: `<div>
        <div class="circle" style="background-color: {{color}};"></div>
        <button id="btn" ng-click="ChangeColor()">Change Color</button>
        </div>`,
    }
})








