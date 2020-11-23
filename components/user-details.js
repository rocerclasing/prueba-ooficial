angular
  .module("app", [])
  .component("primerComponent", {
    bindings:{userid},
    template: ['userid'],
    templateUrl:'docheck-component'

    .join('')
  });

  //valores por defectos para iniciar una instancia
  ngOnInit()
  {
    console.log("ngOnInit ON");
    this.userid=userid;
    
    if(userid == ' '  || userid==null)
    {
      console.log('complete el campo')
    }
   


  }

  //muestra objeto a traves de argumento

  ngOnchanges(userid)
  {
    console.log("ngOnchanges ON");
    console.log(changes);

  }

  //destruye la inicializacion 
  ngOnDestroy()
  {
    console.log('ngOnDestroy ON');
    if(userid == true)
    {
      console.log('insertado correctamente');
    }

  }

  
  ngPostlink($scope,$compile)
  {
    function component(userid)
    {
      console.log(this.userid = userid);

    }

    this.postLink = function()
    {
      var elem = document.getElementById(this.userid);


    }
  }

  //los cambios que se han realizado se trabaja en esta parte del ciclo

  ngDoCheck()
  {
    if(changes)
    {
      changes.forEachAddedItem(res => console.log('Added', userid));
      changes.forEachRemovedItem(res => console.log('Removed', userid));

    }


  }

