angular.module("app",[])
   .controller("UserController",['$scope','$routeParams', '$location' , '$Authentication','$User'
  , '$log','$http',
function($scope,$log,$http,$routeParams,$location,$Authentication,$User) {
  $scope.user={}
  $scope.$Authentication = Authentication;
  var formulario = document.getElementById('formulario');

  //http peticion get.
  $http({
    method: 'GET',
    url: 'https://jsonplaceholder.typicode.com/posts'
   }).then(function successCallback(response) {
  
    $scope.user = response.data;
    console.log("Success",response);
    
    }, function errorCallback(response) {
  
    console.log("Error user",response);
    
   });

   $scope.create = function(e)
   {
     e.preventdefault();
     var user = new user({
         userid: this.userid,
         id:this.id,
         title:this.title,
         body:this.body
     });

       //para enviar un post apropiado
     user.save(function(response)
     {
       location.path('user' + response.userid);

     },
     //mensaje de error
     function(errorResponse)
     {
       $scope.error = errorResponse.data.message;


     });
   }

   

     




     
   





   
 }]);
    

        



          
             
             
            
        
            

             
            




  
