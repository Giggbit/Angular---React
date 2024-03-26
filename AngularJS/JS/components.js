const url = "https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json";

angular.module("mainApp", [])               // Компоненты - эволюция директив:
                                            // - изолированное окружение по умолчанию (scope: {})
.component("comp1", {                       // - внедрение
    template: "<b>Это компонент 1</b>",     //
})

.component("comp2", {
    template: `<b ng-click="addExc()">Это компонент 2 с данными {{data}}</b>`,
    controller: function($scope){
        $scope.data = "data from component 2";
        $scope.addExc = () => {
            $scope.data += "!";
        }
    }
})
                                            // У компонентов не предвидено действие link
.component("comp3", {                       // Для доступа к атрибутов тега контейнера исп. сервис $attrs     
    controller: function($scope, $attrs){                           
        $scope.x = $attrs.x;
    },
    template: `<div><b>В третьем компоненте передан атрибут x = {{x}}</b></div>`                        
})

.component("rates", {                       // Работа з мережними даними - через сервіс $http
    template: `<div>    
        <h2>Курсы валют</h2>
        <table>
            <tbody>
                <tr ng-repeat="rate in rates" class="rate-{{rate.cc=='USD' ? 'usd' : 'other'}}">
                    <td>{{$index + 1 + "."}}</td>
                    <td>{{rate.cc}}</td>
                    <td>{{rate.txt}}</td>
                    <td>{{rate.rate}}</td>
                    <td>{{rate.r030}}</td>
                </tr>
            </tbody>
        </table>
    </div>`,                                // Задача - одержати курси валют з API NBU та відобразити їх у вигляді таблиці. 
    controller: function($scope, $http){
        // http.get(url) аналог fetch(url), но имеент ряд особенностей
        // .then один (у fetch - два)
        // данные уже в виде JSON, (у fetch можно выбирать формат)
        // Тело ответа в виде JSON доступен в поле data (у fetch без вкладання)
        $http.get(url).then( response => {
            $scope.rates = response.data;
        });
        $scope.rates = [];
    }
})


