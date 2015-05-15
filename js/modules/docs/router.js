define(['./guides','./docs'],function(GuidesView,DocsView){
        return {
            Page : Backbone.Router.extend({
                routes: {

                    "guides/:tpl":"guides",
                    "docs/:tpl":"docs"

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