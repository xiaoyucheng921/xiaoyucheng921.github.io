app.controller('myCtrl',['$scope','$http', function ($scope, $http) {
    $http.get('http://szqlnet0755.get.vip/haoshifu/didisvr/public/index.php/selectInfo').then(function (res) {
        $scope.texts = res.data;
        console.log(res.data);
        //*********-改变显示数据的条数******//
        $scope.$watch('number', function (newValue, oldValue) {
            $scope.number = 10;
            if (newValue === oldValue) {
                return;
            } else {
                $scope.number = newValue;
                //*********statr--分页**********//
                $scope.pageSize = $scope.number;
                $scope.amount = Math.ceil($scope.texts.length);//总行数
                $scope.pages = Math.ceil($scope.texts.length / $scope.pageSize); //分页数
                $scope.newPages = $scope.pages > $scope.pageSize ? $scope.pageSize : $scope.pages;
                $scope.pageList = [];
                $scope.selPage = 1;
                //设置表格数据源(分页)  texts
                $scope.setData = function () {
                    $scope.items = $scope.texts.slice(($scope.pageSize * ($scope.selPage - 1)), ($scope.selPage * $scope.pageSize));//通过当前页数筛选出表格当前显示数据
                }
                $scope.items = $scope.texts.slice(0, $scope.pageSize);
                //分页要repeat的数组
                for (var i = 0; i < $scope.newPages; i++) {
                    $scope.pageList.push(i + 1);
                }
                //打印当前选中页索引
                $scope.selectPage = function (page) {
                    //不能小于1大于最大
                    if (page < 1 || page > $scope.pages) return;
                    //最多显示分页数9
                    if (page > 2) {
                        //因为只显示5个页数，大于2页开始分页转换
                        var newpageList = [];
                        for (var i = (page - 3); i < ((page + 2) > $scope.pages ? $scope.pages : (page + 2)); i++) {
                            newpageList.push(i + 1);
                        }
                        $scope.pageList = newpageList;
                    }
                    $scope.selPage = page;
                    $scope.setData();
                    $scope.isActivePage(page);
                };
//设置当前选中页样式
                $scope.isActivePage = function (page) {
                    return $scope.selPage == page;
                };
//上一页
                $scope.Previous = function () {
                    $scope.selectPage($scope.selPage - 1);
                }
//下一页
                $scope.Next = function () {
                    $scope.selectPage($scope.selPage + 1);
                };

                //********end--分页**********//
            }
        });
        //*********-改变显示数据的条数******//
    });


    //定义一个全局变量idx,用于存储选中行的索引，方便执行保存操作。idx取值为0、1、、、、都有用，所以暂取值为-1;
    var idx = -1;
    //定义一个空对象，用于保存和修改数据时临时存储
    $scope.prod = {};
    //定义一个单击删除按钮时触发的事件，用于删除选中行
    $scope.del = function ($index) {
        if ($index >= 0) {
            if (confirm("是否删除" + $scope.items[$index].construction_type_name)) {
                $scope.items.splice($index, 1);
            }
            var id = $scope.texts[$index].id;
            var url = 'http://szqlnet0755.get.vip/haoshifu/didisvr/public/index.php/del/' + id;
            $http.get(url).then(function (res) {

            });
        }
    };


    //定义一个点击保存按钮时触发的事件
    $scope.save = function () {
        var data1 = [];
        //将添加的值赋给数组
        $scope.items.construction_type_name = $scope.newName;
        $scope.items.unitprice = $scope.newUnitprice;
        $scope.items.remark = $scope.newRemark;
        $scope.items.push({
            construction_type_name: $scope.newName, unitprice: $scope.newUnitprice,
            remark: $scope.newRemark
        });
        data1.push({
            construction_type_name: $scope.newName, unitprice: $scope.newUnitprice,
            remark: $scope.newRemark
        });
        var info = JSON.stringify(data1);
        info = info.substring(1, info.length - 1);
        var url = 'http://szqlnet0755.get.vip/haoshifu/didisvr/public/index.php/addCraft/' + info;

        $http.get(url).then(function (res) {
            $scope.texts = res.data;
        });
        //关闭模块窗口
        $('#addInfo').hide();
    };


    //定义一个点击修改按钮时出发的事件，用于修改数据
    $scope.update = function ($index) {
        //将选中行的数据绑定到临时对象prod中，在下面的模态窗口中展示出来
        $scope.prod.construction_type_name = $scope.items[$index].construction_type_name;
        $scope.prod.unitprice = $scope.items[$index].unitprice;
        $scope.prod.remark = $scope.items[$index].remark;
        //选中行的索引赋值给全局变量idx
        idx = $index;
    };


    //定义一个点击确定按钮时触发的事件,
    $scope.ensure = function () {
        var updata1 = [];
        //将修改后的值赋给数组
        $scope.items[idx].construction_type_name = $scope.prod.construction_type_name;
        $scope.items[idx].unitprice = $scope.prod.unitprice;
        $scope.items[idx].remark = $scope.prod.remark;
        //关闭模块窗口
        updata1.push({
            id: $scope.items[idx].id,
            construction_type_name: $scope.prod.construction_type_name,
            unitprice: $scope.prod.unitprice,
            remark: $scope.prod.remark
        });
        updata1 = JSON.stringify(updata1);
        updata1 = updata1.substring(1, updata1.length - 1);
        console.log(updata1);
        console.log($scope.items[idx].id);
        var url =' http://szqlnet0755.get.vip/haoshifu/didisvr/public/index.php/updata/' + updata1;
        $http.get(url).then(function (res) {

        });

        $('#revamp').hide();
    };


}]);/**
 * Created by xiao on 2017/7/31.
 */
