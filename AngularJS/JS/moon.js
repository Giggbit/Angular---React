const url = "https://www.icalendar37.net/lunar/api/?year=2024&month=3&shadeColor=gray&size=150&texturize=true";

angular.module("mainApp", [])
.component("moon", {
    template: `<div class="moon-container">
        <div class="day">{{moonData.nameDay[day - 1]}}</div>
        <div class="month">{{selectedDate + " " + moonData.monthName + " " + moonData.year}}</div>
        <div class="moon-svg" ng-bind-html="toTrusted(moonData.phase[selectedDate].svg)"></div>
        <div class="phase">{{moonData.phase[selectedDate].npWidget}}</div>
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
    $scope.selectedDate = new Date().getDate();
    $scope.day = new Date().getDay();
    $scope.toTrusted = $sce.trustAsHtml;

    $scope.selectedDateChange = () => {
        // moonData.phase = $scope.day;
        $scope.date = $scope.selectedDate.getDate();
        console.log($scope.date);
        console.log($scope.selectedDate);
        $scope.moonData.phase[$scope.selectedDate].svg;
    }
}





