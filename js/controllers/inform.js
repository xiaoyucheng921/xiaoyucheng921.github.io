/**
 * Created by xiao on 2017/8/4.
 */
app.controller('Infornation',['$scope','$http',function($scope,$http){
    $http.get('http://localhost/didisvr/public/index.php/userList').success(function(res){
        $scope.img= res;
        console.log(res.id_card_contrary_img)
    })
}]);