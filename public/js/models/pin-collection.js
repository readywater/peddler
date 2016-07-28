/*global cardflip, Backbone*/

peddler.Collections = peddler.Collections || {};

(function () {
    'use strict';

    peddler.Collections.CardsCollection = Backbone.Collection.extend({

        model: peddler.Models.CardModel,

    	url: 'scripts/data/bio.json',

    	selected: [],

        init: function() {

        },

        getCardByCategory: function(id,prev) {
	        var list = _.map(this.pluck(id)[0].cards, function(v) {
	        	return v.title
	        });
	        if(!_.isUndefined(prev)) list = _.difference(list,prev); // remove previous
	        var len = _.size(list);
	        return list[Math.floor(Math.random() * len)]
        },
    });

})();