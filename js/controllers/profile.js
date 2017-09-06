app.controller('Profile', ['$scope', function ($scope) {
    //获取当前时间
    var now1 = new Date();
    $scope.data = now1.getFullYear() + '/' + (now1.getMonth()+1 )+ '/' + now1.getDate();
    //让时间在页面显示
    $scope.Now = now1.getHours() + ':' + now1.getMinutes() + ':' + now1.getSeconds();
    //写一个方法获取当前时间
    $scope.SetTimer = function () {
        //angularjs的特性，需要手动把变化映射到html元素上面
        $scope.$apply(function () {
            var now = new Date();
            $scope.Now = now.getHours() + ':' + now.getMinutes() + ':' + now.getSeconds();
        });
    };
    //每隔1秒刷新一次时间
    $scope.SetTimerInterval = setInterval($scope.SetTimer, 1000);
}]);