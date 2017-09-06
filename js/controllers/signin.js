'use strict';

/* Controllers */
// signin controller
app.controller('SigninFormController', ['$scope', '$http', '$state', function ($scope, $http, $state) {
    $scope.user = {};
    $scope.authError = null;
    $scope.onFocuse=function(){
        $scope.authError = null;
    };

    $scope.login = function () {

        var login = [];
        login.push({
            username: $scope.user.name, password_hash: $scope.user.password
        });
        login = JSON.stringify(login);
        login = login.substring(1, login.length - 1);
        var url = 'http://szqlnet0755.get.vip/haoshifu/didisvr/public/index.php/adminLogin/' + login;
        $http.get(url).then(function (res) {
            if (res.data == 1) {
                $scope.authError = '密码不正确';
            } else if (res.data == 2) {
                $scope.authError = '用户名不正确';
            }
            else {
                $state.go('app.purlist');
            }
        }, function (x) {
            $scope.authError = 'Server Error';
        });
    };
}])
;