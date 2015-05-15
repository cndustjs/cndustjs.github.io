define([

    'text!./guides/setup.html',
    'text!./guides/getting-started.html',
    'text!./guides/rendering.html',
    'text!./guides/contexts.html',
    'text!./guides/context-helpers.html',
    'text!./guides/dust-helpers.html',
    'text!./guides/using-filters.html',
    'text!./guides/partials.html',
    'text!./guides/blocks.html',
    'text!./guides/onload.html',
    'text!./guides/tips-and-tricks.html',
    'text!./guides/advanced-topics.html',


], function(
    setupTpl,gettingStarted,renderTpl,contextsTpl,
    contextHelperTpl,dustHelperTpl,userFiltersTpl,
    partialsTpl,blocksTpl,onloadTpl,
    tipsTpl,advancedTopicsTpl

) {

    var guides = {
        'setup':setupTpl,
        'getting-started':gettingStarted,
        'rendering':renderTpl,
        'contexts':contextsTpl,
        'context-helpers':contextHelperTpl,
        'dust-helpers':dustHelperTpl,
        'using-filters':userFiltersTpl,
        'partials':partialsTpl,
        'blocks':blocksTpl,
        'onload':onloadTpl,
        'tips-and-tricks':tipsTpl,
        'advanced-topics':advancedTopicsTpl
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
