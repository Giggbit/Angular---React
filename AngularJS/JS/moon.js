const url = "https://www.icalendar37.net/lunar/api/?year=2024&month=3&shadeColor=gray&size=150&texturize=true";

angular.module("mainApp", [])
.component("moon", {
    template: `<div class="moon-container">
        <div class="day">{{moonData.nameDay[currentDay]}}</div>
        <div class="month">{{currentDate + " " + moonData.nameMonth[currentMonth] + " " + currentYear}}</div>
        <div class="moon-svg" ng-bind-html="toTrusted(moonData.phase[currentDate].svg)"></div>
        <div class="phase">{{moonData.phase[currentDate].npWidget}}</div>
    </div>
    <input type="date" ng-model="selectedDate" ng-change="selectedDateChange()">`,
    controller: moonController
});

function  moonController($scope, $http, $sce) {
    $http.get(url).then( response => {
        $scope.moonData = response.data;
        console.log($scope.moonData);
    });
    $scope.moonData = {
        phase: {}
    };
    $scope.selectedDate = new Date();
    $scope.currentDate = $scope.selectedDate.getDate();
    $scope.currentDay = ($scope.selectedDate.getDay() + 6) % 7;
    $scope.currentYear = $scope.selectedDate.getFullYear();
    $scope.currentMonth = $scope.selectedDate.getMonth();
    $scope.toTrusted = $sce.trustAsHtml;

    $scope.selectedDateChange = () => {
        if($scope.selectedDate.getMonth() + 1 == 3 && $scope.selectedDate.getFullYear() == 2024) {
            
        }

        $scope.currentDate = $scope.selectedDate.getDate();
        $scope.currentDay = ($scope.selectedDate.getDay() + 6) % 7;
        $scope.currentYear = $scope.selectedDate.getFullYear();
        $scope.currentMonth = $scope.selectedDate.getMonth();  

        console.log($scope.selectedDate.getMonth(), $scope.currentDay);
    }
}





