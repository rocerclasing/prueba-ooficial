angular
  .module('app',['ngRoute'])
  .config(routeConfig);

  function routeConfig ($routeProvider) {
    $routeProvider

    .when('app/scripts/services/http.js', {
      template: '<http></http>'
    })
      .when('app/scripts/components/user-list.js', {
        template: '<user-list></user-list>',
        controller:'Controller-user-list'
      })
      
      .when('app/scripts/components/user-details.js', {
        template: '<user-details></user-details>',
        controller:'Controller-user-details'
      })

      .when('app/scripts/components/user-item.js', {
        template: '<user-item></user-item>',
        controller:'Controller-user-item'
      })

      .when('insertar.html', {
        template: '<insertar></insertar>',
        controller:'Controller-insertar'
      })
     
      .when('buscar.html', {
        template: '<buscar></buscar>',
        controller:'Controller-buscar'
      })
      
      .when('eliminar.html', {
        template: '<eliminar></eliminar>',
        controller:'Controller-eliminar'
      })

      .when('modificar.html', {
        template: '<modificar></modificar>',
        controller:'Controller-modificar'
      })

      .when('mostrartodos.html', {
        template: '<mostrartodos></mostrartodos>',
        controller:'Controller-mostrartodos'
      })

     




      .otherwise({
        redirectTo: '/'
      });
  }
