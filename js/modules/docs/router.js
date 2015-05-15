define(['./guides','./docs'],function(GuidesView,DocsView){
        return {
            Page : Backbone.Router.extend({
                routes: {

                    "/":"index",
                    "guides/:tpl":"guides",
                    "docs/:tpl":"docs"

                },

                index:function(){
                    var docV = new GuidesView();
                    docV.render("setup");
                },
                guides : function(tplName) {

                    var docV = new GuidesView();
                    docV.render(tplName);
                },
                docs : function(tplName) {

                    var docV = new DocsView();
                    docV.render(tplName);
                }



            })
        }


    });