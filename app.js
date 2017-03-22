var app = angular.module('formApp', []);

// app.directive('hello', function () {
//     var directive = {};
//     directive.restrict = 'E';
//     directive.scope = true;
//     directive.controller = 'formController';
//     directive.transclude = true;
//     directive.link = function (scope, element, attr) {

//         // scope.SubmitButtonValue = communicator.SubmitButtonValue;
//     }
//     return directive;
// });

app.directive('directivecommunication', function () {
    var directive = {};
    directive.restrict = 'E';
    // directive.require = "^hello";
    directive.scope = {
        name: "=directivename",
    }
    directive.template = "<input type='button' class='btnSubmit' value={{name}} ng-click='SubmitForm()'/>";
    directive.controller = function ($scope) {
        // $scope.SubmitForm = function () {
        //     if ($scope.$parent.myForm.$invalid) {
        //         alert("Directive Template");
        //     }
        // }
    };
    directive.link = function (scope, element, attr, Submitname) {
        debugger;
        scope.name = attr.directivename;
        element.bind('click', function (e) {
            if (e.target.form.checkValidity() == false) {
                for (let i = 0; i < e.target.form.length; i++) {
                    if (e.target.form[i].validity.valid == false) {
                        e.target.form[i].classList.add("Erroroneous");
                    }
                    else {
                        e.target.form[i].classList.remove("Erroroneous");
                    }
                }
            }
        });

        // scope.SubmitButtonValue = communicator.SubmitButtonValue;
    }
    return directive;
});
app.controller('formController', function ($scope, $window) {
    console.log($window.navigator.userAgent);
});