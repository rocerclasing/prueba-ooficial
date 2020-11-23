angular
  .module("app", [])
  .component("tercerComponent", {
    bindings:{registrar},
    template: ['<button type="submit" ng-click="create"name="registrar">Registrar</button>']

    .join('')
  });

   //valores por defectos para iniciar una instancia
   ngOnInit()
   {
     console.log("ngOnInit ON");
     this.registrar=registrar;
     
     if(registrar == ' '  || registrar==null)
     {
       console.log('complete el campo')
     }
    
 
 
   }
 
   //muestra objeto a traves de argumento
 
   ngOnchanges(registrar)
   {
     console.log("ngOnchanges ON");
     console.log(changes);
 
   }
 
   //destruye la inicializacion 
   ngOnDestroy()
   {
     console.log('ngOnDestroy ON');
     if(registrar == true)
     {
       console.log('insertado correctamente');
     }
 
   }
 
   
   ngPostlink($scope,$compile)
   {
     function component(registrar)
     {
       console.log(this.registrar =registrar);
 
     }
 
     this.postLink = function()
     {
       var elem = document.getElementById(this.registrar);
 
 
     }
   }
 
   //los cambios que se han realizado se trabaja en esta parte del ciclo
 
   ngDoCheck()
   {
     if(changes)
     {
       changes.forEachAddedItem(res => console.log('Added', registrar));
       changes.forEachRemovedItem(res => console.log('Removed', registrar));
 
     }
 
 
   }
 
 
 