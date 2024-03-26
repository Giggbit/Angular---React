const url = "https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json";

angular.module("21.03", [])
.component("rate", {
    template: `<div>    
        <b> $scope.accent = {{accent}}</b>
        <table>
            <tbody>
                <tr ng-repeat="rate in rates" class="{{accent==rate.cc ? 'USD' : 'other'}}">
                    <td>{{$index + 1 + "."}}</td>
                    <td>{{rate.cc}}</td>
                    <td>{{rate.txt}}</td>
                    <td>{{rate.rate}}</td>
                    <td>{{rate.r030}}</td>
                </tr>
            </tbody>
        </table>
    </div>`,    
    controller: function($scope, $http, $attrs) {
        $http.get(url).then( response => {
            $scope.rates = response.data;
        });
        $scope.rates = [];
        $scope.accent = $attrs.accent;
    }
})