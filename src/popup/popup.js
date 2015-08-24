// =================================================================================================
// Slate.js | Popup Bubbles
// (c) 2015 Mathigon / Philipp Legner
// =================================================================================================



import { $, customElement } from 'elements';

let activePopup;

export default customElement('x-popup', {

    created: function($el, $shadow) {
        // TODO
    },

    attached: function() {
        // TODO
    },

    detached: function() {
        // TODO
    },

    template: '<popup-pubble>'

});




/*
M.Popup = function($popup, chapter) {

    var _this = this;

    var $bubble = $C('popup-bubble',$popup);
    if (!$bubble) return;

    var $bubbleBox = $C('bubble-box',$bubble);
    $N('span', {'class': 'bubble-arrow'}, $bubble);

    _this.open = function() {

        if (chapter.activePopup) chapter.activePopup.close();
        $bubble.css('display', 'block');

        // In off state, $bubble is scaled to 0.5 of the size. We have to adjust the top offset:
        var bounds = $bubble.$el.getBoundingClientRect();
        var top = bounds.top - bounds.height;
        var left = bounds.left - bounds.width/2;
        var right = bounds.right + bounds.width/2;

        var pageLeft = chapter.$container.offset().left;
        var pageRight = M.browser.width;

        if (left < pageLeft + 10)
            $bubbleBox.translateX(pageLeft + 10 - left);

        if (right > pageRight - 54)
            $bubbleBox.translateX(pageRight - 54 - right);

        M.redraw();
        if (top < 27 ) { chapter.scrollBy(top - 27); }

        $popup.addClass('on');
        chapter.activePopup = _this;
    };

    _this.close = function() {
        $popup.removeClass('on');
        chapter.activePopup = null;
        setTimeout( function(){ $bubble.css('display', 'none'); }, 200);
    };

    _this.delete = function() { $popup.off('click', click); };

    var click = function(e) {
        e.preventDefault();
        e.stopPropagation();

        if ($popup.hasClass('on')) {
            _this.close();
        } else {
            _this.open();
        }
    };

    $bubble.click(function(e){ e.stopPropagation(); });
    $popup.click(click);
};
*/