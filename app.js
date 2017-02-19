var app = angular.module('plunker', ['angular-fancytree']);

app.controller('MainCtrl', function($scope, dataFactory, fancytreeFactory) {
  $scope.name = 'World';
  $scope.antalToppNoder = 20;
  $scope.getCurrentTree = (antal) => {
    var newTree = dataFactory.generateTree(antal,false);
    //This way is not really working
    //$scope.treeData = dataFactory.generateTree(antal,false);
    //fancytreeFactory.setData($scope.treeData, 'exampleFancytree');
    //$scope.$broadcast('reload',null);
    //var tree = $.ui.fancytree.getTree();
    //tree.reload();
    
    //Trying it another way
    var tree = $('#exampleFancytree').fancytree('getTree');
    tree.reload(newTree);
    console.log('Trying to set new data', newTree);

  };
  $scope.expandAll = () => {
    $("#exampleFancytree").fancytree("getRootNode").visit(function(node){
      node.setExpanded(true);
    });    
  }

  //$scope.treeData = dataFactory.generateTree($scope.antalToppNoder,false);//dataFactory.simpleFancyTree;
  $scope.treeData = dataFactory.simpleFancyTree;


  // Passing fancytree options
  // second arg is fancytree's element id
  fancytreeFactory.setData($scope.treeData, 'exampleFancytree');

  // Passing json with data: "function_name" : callback
  // second arg is fancytree's element id
  fancytreeFactory.setMethods({
      "select": function (event, data) {
          // You should inject required services like that
          var ExampleService = $injector.get('ExampleService');
          var node = data.node;

          if (node.isSelected()) {
              ExampleService.doSomething(node.title);
          } else {
              ExampleService.doSomethingElse(node.title);
          }
      }
  }, 'exampleFancytree');

  
});
