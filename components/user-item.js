angular
  .module("app", [])
  .component("segundoComponent", {
    bindings:{id},
    template: ['<span>id</span>']

    .join('')
  });

  //valores por defectos para iniciar una instancia
  ngOnInit()
  {
    console.log("ngOnInit ON");
    this.id=id;
    
    if(id == ' '  || id==null)
    {
      console.log('complete el campo')
    }
   


  }

  //muestra objeto a traves de argumento

  ngOnchanges(id)
  {
    console.log("ngOnchanges ON");
    console.log(changes);

  }

  //destruye la inicializacion 
  ngOnDestroy()
  {
    console.log('ngOnDestroy ON');
    if(id == true)
    {
      console.log('insertado correctamente');
    }

  }

  
  ngPostlink($scope,$compile)
  {
    function component(id)
    {
      console.log(this.userid =id);

    }

    this.postLink = function()
    {
      var elem = document.getElementById(this.id);


    }
  }

  //los cambios que se han realizado se trabaja en esta parte del ciclo

  ngDoCheck()
  {
    if(changes)
    {
      changes.forEachAddedItem(res => console.log('Added', id));
      changes.forEachRemovedItem(res => console.log('Removed', id));

    }


  }


