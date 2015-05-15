define([],function () {

    var __app =  {
        register:function(moduleConfig){
            this.router(moduleConfig.Routers);
        },

        router:function(Routers){
            if(Routers){
                for (var router in Routers) {
                    new Routers[router];
                }
            }
        },

        start: function () {
            Backbone.history.start();
        }

    }

    return __app;

});