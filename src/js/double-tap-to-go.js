/*
	By Osvaldas Valutis, www.osvaldas.info
	Available for use under the MIT License
*/
;(function(jQuery, window, document, undefined) {
    jQuery.fn.doubleTapToGo = function(params) {
        if (!('ontouchstart'in window) && !navigator.msMaxTouchPoints && !navigator.userAgent.toLowerCase().match(/windows phone os 7/i))
            return false;
        this.each(function() {
            var curItem = false;
            jQuery(this).on('click', function(e) {
            if(jQuery(window).width() > 991){
                var item = jQuery(this);
                if (item[0] != curItem[0]) {
                    e.preventDefault();
                    curItem = item;
                }
            }
            });

            jQuery(document).on('click touchstart MSPointerDown', function(e) {
                if(jQuery(window).width() > 991){
                var resetItem = true
                  , parents = jQuery(e.target).parents();
                for (var i = 0; i < parents.length; i++)
                    if (parents[i] == curItem[0])
                        resetItem = false;
                if (resetItem)
                    curItem = false;
                } else{
                    //resetItem = true;
                    //curItem = true;
                }   
            });
        });
        return this;
    }
    ;
})(jQuery, window, document);
jQuery(document).ready(function() {
    /*------------------- <Start> Double tap to Go ------------- */
    //jQuery('.menu ul li.level1.haschildren').doubleTapToGo();
    /*------------------- <END> Double tap to Go ------------- */
});