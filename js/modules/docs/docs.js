define([

    'text!./docs/syntax.html',
    'text!./docs/api.html',
    'text!./docs/helper-api.html',
    'text!./docs/filter-api.html',
    'text!./docs/dustc-api.html',

], function(
    syntaxTpl,apiTpl,helperApiTpl,filterApiTpl,dustcApiTpl

) {

    var guides = {
        'syntax':syntaxTpl,
        'api':apiTpl,
        'helper-api':helperApiTpl,
        'filter-api':filterApiTpl,
        'dustc-api':dustcApiTpl
    }

    return Backbone.View.extend({

        el: '#content',
        initialize: function() {

        },
        render:function(tplName){
            tplName = tplName||"setup";
            $("body")[0].scrollTop =0;
            var tgtEl = this.$el;
            var output = guides[tplName];
            tgtEl.html(output);

        }
    });


});
