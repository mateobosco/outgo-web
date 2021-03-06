﻿(function () {

	var app = angular.module('outgoesApp', ['tc.chartjs']);

	app.controller('LeftController', ['$http', function LeftController($http,SelectedOutgo) {
		var leftCtrl = this;
		leftCtrl.outgoes = [];

		$http.get('http://outgoes.herokuapp.com/api/v1.0/outgo/get_outgoes').success(function(data){
      console.log("llamada a "+'http://outgoes.herokuapp.com/api/v1.0/outgo/get_outgoes');
			leftCtrl.outgoes = data.outgoes;
		});

    this.selectOutgo = function(uri,SelectedOutgo){
      $http.get(uri).success(function(data,SelectedOutgo){
        SelectedOutgo.setSelectedOutgo(data.outgo);
        console.log("llamada a "+uri);
        console.log(data.outgo);
      });
    };
	}]);

	app.filter('reverse', function() {
		return function(items) {
			return items.slice().reverse();
		}; 
	});

  app.controller("UpdateOutgoController", function UpdateOutgoController($scope,SelectedOutgo){
    var updateOutgoController = this;
    updateOutgoController.outgo = 0;

    $scope.$watch(function () { return SelectedOutgo.getSelectedOutgo(); }, function (newValue) {
      if (newValue) {
        $scope.SelectedOutgo = newValue;
        updateOutgoController.outgo = newValue;
        consele.log("modifica el valor del outgo a updatear");
      }
    });

    updateOutgoController.SelectedOutgo = SelectedOutgo;
    console.log("creo el update outgo controller")
  })

  app.factory('SelectedOutgo', function(){
    var data =
        {
            SelectedOutgo: ''
        };
    
    return {
        getSelectedOutgo: function () {
            return data.SelectedOutgo;
        },
        setSelectedOutgo: function (outgo) {
            data.SelectedOutgo = outgo;
        }
    };
  });



	app.controller( 'RightController', function RightController( $scope ) {

    // Chart.js Data
    $scope.data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'My First dataset',
          fillColor: 'rgba(220,220,220,0.2)',
          strokeColor: 'rgba(220,220,220,1)',
          pointColor: 'rgba(220,220,220,1)',
          pointStrokeColor: '#fff',
          pointHighlightFill: '#fff',
          pointHighlightStroke: 'rgba(220,220,220,1)',
          data: [65, 59, 80, 81, 56, 55, 40]
        },
        {
          label: 'My Second dataset',
          fillColor: 'rgba(151,187,205,0.2)',
          strokeColor: 'rgba(151,187,205,1)',
          pointColor: 'rgba(151,187,205,1)',
          pointStrokeColor: '#fff',
          pointHighlightFill: '#fff',
          pointHighlightStroke: 'rgba(151,187,205,1)',
          data: [28, 48, 40, 19, 86, 27, 90]
        }
      ]
    };

    // Chart.js Options
    $scope.options =  {

      // Sets the chart to be responsive
      responsive: true,

      ///Boolean - Whether grid lines are shown across the chart
      scaleShowGridLines : true,

      //String - Colour of the grid lines
      scaleGridLineColor : "rgba(0,0,0,.05)",

      //Number - Width of the grid lines
      scaleGridLineWidth : 1,

      //Boolean - Whether the line is curved between points
      bezierCurve : true,

      //Number - Tension of the bezier curve between points
      bezierCurveTension : 0.4,

      //Boolean - Whether to show a dot for each point
      pointDot : true,

      //Number - Radius of each point dot in pixels
      pointDotRadius : 4,

      //Number - Pixel width of point dot stroke
      pointDotStrokeWidth : 1,

      //Number - amount extra to add to the radius to cater for hit detection outside the drawn point
      pointHitDetectionRadius : 20,

      //Boolean - Whether to show a stroke for datasets
      datasetStroke : true,

      //Number - Pixel width of dataset stroke
      datasetStrokeWidth : 2,

      //Boolean - Whether to fill the dataset with a colour
      datasetFill : true,

      // Function - on animation progress
      onAnimationProgress: function(){},

      // Function - on animation complete
      onAnimationComplete: function(){},

      //String - A legend template
      legendTemplate : '<ul class="tc-chart-js-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].strokeColor%>"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>'
    };

  });

})();

/*$('#updateOutgo').on('show.bs.modal', function (event) {
  var button = $(event.relatedTarget) // Button that triggered the modal
  var recipient = button.data('uotgotomodif') // Extract info from data-* attributes
  alert(recipient)
  var outgo
  $.get(recipient).success(function(data,status){
  	outgo = data;
  	alert("Data: " + data + "\nStatus: " + status);
  });
  var modal = $(this)
  modal.find('.modal-body input').val("outgo.uri")
})
*/


$.getScript('http://timschlechter.github.io/bootstrap-tagsinput/dist/bootstrap-tagsinput.js',function(){ 
});

