angular.module("mainApp", []).directive(            // Директивы - элемент с инкапсулированной разметкой.
    "directiva1", function() {                      // Имя директивы
    return {                                        // 
            restrict: "A",                          // restrict - способ введения
            template: "<b>Это директива!</b>"        // А - через атрибут (<div>directiva1</div> )
        }
    }
)

.directive("directive2", function() {               // restrict C - внедрение через стильный класс.  
    return{                                         // Директивы могут иметь сови контроллеры и исп. их в разметке           
        restrict: "C",
        controller: function($scope){
            $scope.data = "Data 2";
        },
        template: "<i>Это директива 2 с данными data = {{data}}</i>"
    }
})

.directive("directive3", function(){                // 
    return{                                         // 
        restrict: "E",                              // 
        scope: {},                                  // scope: {} - утворення локаоьного лекс. околу (вместо глобального, как у дерективы 2)
        replace: true,                              // replace: true - замена контейнера вместо вбудовування в нього
        controller: function($scope){
            $scope.data = "Data 3";
            $scope.addExc = () => $scope.data += "!";
        },
        template: `<div>
            <b>Это директива 3 с данными в своем кругу: {{data}}</b>
            <br>
            <button ng-click="addExc()">Добавить знак</button>
        </div>`                          
    }
})

.directive("directive4", function(){
    return {
        restrict: "M",                              // restrict: "M" - через коментарий <!-- directive4 -->
        replace: true,                              // Для этого способа replace: true - необходимо
        template: "<b>Директива 4 внедрена в комментарий</b>"
    }
})

.directive("directive5", function(){
    return{
        restrict: "ACEM",
        replace: true,
        template: "<b>Директива 5 комбинированная (класс, тег, атрибут)</b>"
    }
})

.directive("directive6", function(){                // link - обробник події життєвого циклу, яка відповідає за вбудування елемента до DOM             
    return{                                         // У функции параметры (...)
        restrict: "E",                              // scope - глобальный, element - DOM ссылка, atribute - объект с 
        replace: true,                              // 
        template: "<div>Директива</div>",               
        link: function(scope, element, atribute){
            console.log(scope);
            console.log(element);
            console.log(atribute);
        }
    }
})

.directive("calc", function(){
    return{
        restrict: "E",
        scope: {},
        template: `<div>
            <button ng-click="dec()">-</button>
            <b>{{num}}</b>
            <button ng-click="inc()">+</button>
            </div>`,
        link: function(scope, element, atribute){
            scope.num = atribute.initial;
        },
        controller: function($scope){
            $scope.inc = () => $scope.num++;
            $scope.dec = () => $scope.num--;
        }
    }
})
