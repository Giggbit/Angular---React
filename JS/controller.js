// Инициализация приложения
const mainApp = angular.module('mainApp', []);
// Название константи (const mainApp) произвольная,
// название модуля "mainApp" должен отвечать атрибуту (ng-app="mainApp") 
// второй параметр [] - перечисление зависимостей от других модулей.
//

mainApp.controller (        // Инициализация контролера
    "firstController",      // Название, должно быть как и в ng-controller="firstController"
    function($scope) {      // Функция инициализации (конструктор), параметр $scope - 
        $scope.data =       // инжекция референсу на лекс. округ, название должно быть точно таким же.
        "Hello world";     // Создаем объект "data" в середине этого округа
        
        $scope.Add = function() {  // Для работы с данными в контроллере создаются функции,
            $scope.data += "!";         // которые вызываются с UI и изменяют данныне
        }
    }
)

angular.module("mainApp").controller (
    "secondController",
    function($scope) {
        $scope.data = "Data from second controller";
    }
)   // fluid interface, можно продолжать одну за другой
.controller (
    "calcController",
    function($scope) {
        $scope.num = 10;
        $scope.inc = () => $scope.num++;
        $scope.dec = () => $scope.num--;
    }
)
