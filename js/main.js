// Check for modern css support.
// cssvhunit not working properly on android so removed.
//if (Modernizr.flexbox && Modernizr.flexwrap && Modernizr.csscalc && Modernizr.cssvhunit && Modernizr.cssvwunit) 
if (Modernizr.flexbox && Modernizr.flexwrap && Modernizr.csscalc) 
{
}
else 
{
   window.location = './basic/index.html';
}

// Called when page has loaded.
window.onload = function () 
{ 
    var slideshow = new jcSlideShow();
    onScroll();
    jcDOM.on(window, 'scroll resize', jcDOM.debounce(onScroll));
} 

function onScroll()
{
    jcDOM.lazyLoadImages();
}
// DOM.
var jcDOM = (function (window, document, undefined)
{
    'use strict';

    var o =  
    {
        lazyLoadImages : function () 
        {
            var buffer = this.viewportHeight();
            var topOfScreen = this.pageTopOffset() - buffer;
            var bottomOfScreen = this.pageBottomOffset() + buffer;

            [].forEach.call(document.querySelectorAll('[data-src]'), function(elt) 
            {
                var topOfElement = this.offset(elt);
                var bottomOfElement = this.offset(elt) + this.bounds(elt).height;

                if((bottomOfScreen > topOfElement) && (topOfScreen < bottomOfElement))
                {
                    var src = elt.getAttribute('data-src');
                    elt.removeAttribute('data-src');
                    if (elt.nodeName == 'IMG')
                    {
                        elt.setAttribute('src', src);
                        elt.onload = function() 
                        {
                            this.addClass(elt, 'bg-img-complete');
                        }.bind(this);
                    }
                    else
                    {
                        var img = document.createElement('img'); 
                        img.setAttribute('src', src);
                        img.onload = function() 
                        {
                            elt.style.backgroundImage = 'url(' + src + ')';
                            this.addClass(elt, 'bg-img-complete');
                        }.bind(this);
                    }
                }
            }.bind(this));
        }, 

        addClass : function (element, className)
        {
            element.className += ' ' + className;
        },

        removeClass : function (element, className)
        {
            element.className = element.className.replace(new RegExp('(?:^|\\s)'+ className + '(?:\\s|$)'), ' ');
        },

        hasClass : function (element, className)
        {
            return (' ' + element.className + ' ').indexOf(' ' + className + ' ') > -1;
        },

        on : function (element, types, listener, useCapture)
        {
            useCapture = useCapture === undefined ? true : false;
            var arrTypes = types.split(' ');
            for (var i = 0; i < arrTypes.length; i++)  
            {
                var type = arrTypes[i].trim();
                element.addEventListener(type, listener, useCapture);
            }
        },

        off : function (element, types, listener, useCapture)
        {
            useCapture = useCapture === undefined ? true : false;
            var arrTypes = types.split(' ');
            for (var i = 0; i < arrTypes.length; i++)  
            {
                var type = arrTypes[i].trim();
                element.removeEventListener(type, listener, useCapture);
            }
        },

        bounds : function (element) 
        {
            return element.getBoundingClientRect();
        },

        offset : function (element) 
        {
            return this.pageOffset().y + this.bounds(element).top;
        },

        viewportHeight : function () 
        {
            return document.documentElement.clientHeight;
        },

        pageOffset : function () 
        {
            var doc = document.documentElement;
            return {
                x : (window.pageXOffset || doc.scrollLeft) - (doc.clientLeft || 0),
                y : (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0)
            };
        },

        pageTopOffset : function () 
        {
            return this.pageOffset().y;
        },

        pageBottomOffset : function () 
        {
            return this.pageTopOffset() + this.viewportHeight();
        },

        debounce : function (func, wait, immediate) 
        {
            var timeout;
            return function() 
            {
                var me = this, args = arguments;
                var later = function() 
                {
                    timeout = null;
                    if (!immediate) func.apply(me, args);
                };
                var callNow = immediate && !timeout;
                clearTimeout(timeout);
                timeout = setTimeout(later, wait || 250);
                if (callNow) func.apply(me, args);
            };
        }
    }
    return o;
}) (window, document);

// Slideshow.
var jcSlideShow = (function ($, window, document, undefined)
{
    'use strict';

    var keyDown, touchStart, touchMove, xDown = null;

    var Slideshow = function (options)
    {
        this._container = init(this);

        keyDown  = onKeyDown.bind(this);
        touchStart = onTouchStart.bind(this);
        touchMove = onTouchMove.bind(this);

        return this;
    };

    function init(oSlideshow)
    {
        var strHtml = '<div class="slideshow-slides">';

        [].forEach.call(document.querySelectorAll('.slide'), function(elt, index) 
        {
            var src = elt.getAttribute('data-src');
            var title = elt.getAttribute('data-title');

            (function (_oSlideshow, _src) {
                $.on(elt, 'click', function(e)
                {
                    _oSlideshow.open(_src);
                });
            })(oSlideshow, src);

            var slideShowIcon = document.createElement('div');
            $.addClass(slideShowIcon, 'slideshow-icon')
            elt.appendChild(slideShowIcon);

            if (index === 0) 
                strHtml += '<div class="slideshow-slide slideshow-slide-active">';
            else 
                strHtml += '<div class="slideshow-slide">';

                    strHtml += '<div class="slideshow-img flex-box">';
                        strHtml += '<img src="'+src+'" alt="'+title+'" />';
                    strHtml += '</div>';
                    strHtml += '<div class="slideshow-text">'+title+'</div>';
                strHtml += '</div>';
        });

        strHtml += '</div>'
        strHtml += '<div class="slideshow-prev flex-box" role="button" tabindex="0">&#10094;</div>';
        strHtml += '<div class="slideshow-next flex-box" role="button" tabindex="0">&#10095;</div>';
        strHtml += '<div class="slideshow-close flex-box" role="button" tabindex="0">&times;</div>';

        var parent = document.createElement('div');
        $.addClass(parent, 'slideshow')
        parent.innerHTML = strHtml;
        $.on(parent, 'click', function (e)
        {
            if ($.hasClass(e.target, 'slideshow-prev')) oSlideshow.prev();
            else if ($.hasClass(e.target, 'slideshow-close')) oSlideshow.close();
            else oSlideshow.next();
        }, false);
        document.querySelector('body').appendChild(parent);

        return parent;
    }

    Slideshow.prototype.open = function (src)
    {
        if (this._container !== null)
        {
            $.on(document, 'keydown', keyDown);
            $.on(document, 'touchstart', touchStart);
            $.on(document, 'touchmove', touchMove);

            $.addClass(document.body, 'slideshow-hide-scrollbars');
            if (src !== undefined) this.show(src);
            $.addClass(this._container, 'slideshow-active');
        }
        return this;
    };

    Slideshow.prototype.close = function ()
    {
        if (this._container !== null)
        {
            $.off(document, 'keydown', keyDown);
            $.off(document, 'touchstart', touchStart);
            $.off(document, 'touchmove', touchMove);
            $.removeClass(document.body, 'slideshow-hide-scrollbars');
            $.removeClass(this._container, 'slideshow-active');
        }
        return this;
    };

    Slideshow.prototype.show = function (src)
    { 
        if (this._container !== null && src !== undefined)
        {
            var as = this.activeSlide()
            $.addClass(this.slide(src), 'slideshow-slide-active');
            $.removeClass(as, 'slideshow-slide-active');
        }
        return this;
    };

    Slideshow.prototype.next = function ()
    {
        if (this._container !== null)
        {
            var as = this.activeSlide()
            $.addClass(this.nextSlide(), 'slideshow-slide-active');
            $.removeClass(as, 'slideshow-slide-active');
        }
        return this;
    };
    
    Slideshow.prototype.prev = function ()
    {
        if (this._container !== null)
        {
            var as = this.activeSlide()
            $.addClass(this.prevSlide(), 'slideshow-slide-active');
            $.removeClass(as, 'slideshow-slide-active');
        }
        return this;
    };

    Slideshow.prototype.slide = function (src) 
    {             
        return this._container.querySelector('img[src="'+src+'"]').parentElement.parentElement;
    }

    Slideshow.prototype.activeSlide = function () 
    {             
        return this._container.querySelector('.slideshow-slide-active');;
    }

    Slideshow.prototype.nextSlide = function () 
    {           
        var s = this.activeSlide();  
        return (s.nextElementSibling !== null ? s.nextElementSibling : s.parentNode.firstElementChild);
    }     

    Slideshow.prototype.prevSlide = function () 
    {            
        var s = this.activeSlide();
        return (s.previousElementSibling !== null ? s.previousElementSibling : s.parentNode.lastElementChild);
    }     
     
    function onTouchStart (evt) 
    {             
        xDown = evt.touches[0].clientX;                                      
    }     

    function onTouchMove (evt) 
    {
        if (!xDown) return;
        var xUp = evt.touches[0].clientX;     
        var xDiff = xDown - xUp;
        if ( xDiff > 0 ) this.next();
        else  this.prev();
        xDown = null;
    }

    function onKeyDown (evt)
    {
        evt = evt || window.event;
        if (evt.keyCode === 37)  this.prev()
        else if (evt.keyCode === 39) this.next();
        else if (evt.keyCode === 27)  this.close();
    }

    return Slideshow;

}) (jcDOM, window, document);