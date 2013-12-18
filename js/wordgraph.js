var WordnetGraph = function( elementId ) {
   this.elementId = elementId;
   this.width = 1000;
   this.height = 1000;
};
WordnetGraph.prototype.render = function()  {
 d3.json('data/graph.json', function( json ) {
      var force = d3.layout.force().
                    nodes( json.nodes ).
                        links( json.links )
                        .size( [ this.width,this.height ] ).start();

 });

};