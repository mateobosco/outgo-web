(function () {

    var app = angular.module('outgoesApp', []);

    app.controller('OutgoesAppController', ['$http', function ($http) {
        var app = this;
        app.outgoes = [];

        $http.get('http://outgoes.herokuapp.com/api/v1.0/outgo/get_outgoes').success(function(data){
            app.outgoes = data.outgoes;
        });
    }]);

    var outgoes = [
    {
      cost: 12, 
      date: "Mon, 02 Feb 2015 23:13:15 GMT", 
      description: "hola", 
      tags: [
        "bla", 
        "bla", 
        "bla"
      ], 
      "uri": "http://outgoes.herokuapp.com/api/v1.0/outgo/get_outgo_by_id/54d0048ba731e212cae70e7a"
    }, 
    {
      cost: 21, 
      date: "Mon, 02 Feb 2015 23:13:54 GMT", 
      description: "blas", 
      tags: [
        "qw"
      ], 
      "uri": "http://outgoes.herokuapp.com/api/v1.0/outgo/get_outgo_by_id/54d004b2a731e212cfc2f9a1"
    }, 
    {
      cost: 34, 
      date: null, 
      description: "gasto en mucha caca", 
      tags: [
        "caca", 
        "mas caca", 
        "comida"
      ], 
      "uri": "http://outgoes.herokuapp.com/api/v1.0/outgo/get_outgo_by_id/54d00daaa731e217c048bee8"
    }
  ];


})();

$.getScript('http://timschlechter.github.io/bootstrap-tagsinput/dist/bootstrap-tagsinput.js',function(){ 
});