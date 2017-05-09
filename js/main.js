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
    var slideshow = new jcSlideShow.Slideshow();
    onScroll();
    on(window, 'scroll resize', debounce(onScroll));
} 

function onScroll()
{
    lazyLoadImages();
}

// Lazy Load slides images.
function lazyLoadImages () 
{
    var buffer = viewportHeight();
    var topOfScreen = pageTopOffset() - buffer;
    var bottomOfScreen = pageBottomOffset() + buffer;

    [].forEach.call(document.querySelectorAll('[data-src]'), function(elt) 
    {
        var topOfElement = offset(elt);
        var bottomOfElement = offset(elt) + bounds(elt).height;

        if((bottomOfScreen > topOfElement) && (topOfScreen < bottomOfElement))
        {
            var src = elt.getAttribute('data-src');
            elt.removeAttribute('data-src');
            if (elt.nodeName == 'IMG')
            {
                elt.removeAttribute('data-src');
                elt.setAttribute('src', src);
                elt.onload = function() 
                {
                    addClass(elt, 'bg-img-complete');
                }
            }
            else
            {
                var img = document.createElement('img'); 
                img.setAttribute('src', src);
                img.onload = function() 
                {
                    elt.style.backgroundImage = 'url(' + src + ')';
                    addClass(elt, 'bg-img-complete');
                }
            }
        }
    });
}

// Slideshow.
var jcSlideShow = (function ($, window, document, undefined)
{
    'use strict';

    var o = {};

    var keyDown, touchStart, touchMove, xDown = null;

    o.Slideshow = function (options)
    {
        this._container = getHtml(this);

        keyDown  = onKeyDown.bind(this);
        touchStart = onTouchStart.bind(this);
        touchMove = onTouchMove.bind(this);

        return this;
    };

    function getHtml(oSlideshow)
    {
        var strHtml = '<div class="slideshow-slides">';

        [].forEach.call(document.querySelectorAll('.slide'), function(elt, index) 
        {
            var src = elt.getAttribute('data-src');
            var title = elt.getAttribute('data-title');

            (function (_oSlideshow, _src) {
                on(elt, 'click', function(e)
                {
                    _oSlideshow.open(_src);
                });
            })(oSlideshow, src);

            var slideShowIcon = document.createElement('div');
            addClass(slideShowIcon, 'slideshow-icon')
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

        var elt = document.createElement('div');
        addClass(elt, 'slideshow')
        elt.innerHTML = strHtml;
        on(elt, 'click', function (e)
        {
            console.log(e)
            if (hasClass(e.target, 'slideshow-prev')) oSlideshow.prev();
            else if (hasClass(e.target, 'slideshow-close')) oSlideshow.close();
            else oSlideshow.next();
        }, false);
        document.querySelector('body').appendChild(elt);

        return elt;
    }

    o.Slideshow.prototype.open = function (src)
    {
        if (this._container !== null)
        {
            on(document, 'keydown', keyDown);
            on(document, 'touchstart', touchStart);
            on(document, 'touchmove', touchMove);

            addClass(document.body, 'slideshow-hide-scrollbars');
            this.show(src);
            addClass(this._container, 'slideshow-active');
        }
        return this;
    };

    o.Slideshow.prototype.close = function ()
    {
        if (this._container !== null)
        {
            off(document, 'keydown', keyDown);
            off(document, 'touchstart', touchStart);
            off(document, 'touchmove', touchMove);

            removeClass(document.body, 'slideshow-hide-scrollbars');
            removeClass(this._container, 'slideshow-active');
        }
        return this;
    };

    o.Slideshow.prototype.show = function (src)
    { 
        if (this._container !== null && src !== undefined)
        {
            var as = this.activeSlide()
            addClass(this.slide(src), 'slideshow-slide-active');
            removeClass(as, 'slideshow-slide-active');
        }
        return this;
    };

    o.Slideshow.prototype.next = function ()
    {
        if (this._container !== null)
        {
            var as = this.activeSlide()
            addClass(this.nextSlide(), 'slideshow-slide-active');
            removeClass(as, 'slideshow-slide-active');
        }
        return this;
    };
    
    o.Slideshow.prototype.prev = function ()
    {
        if (this._container !== null)
        {
            var as = this.activeSlide()
            addClass(this.prevSlide(), 'slideshow-slide-active');
            removeClass(as, 'slideshow-slide-active');
        }
        return this;
    };

    o.Slideshow.prototype.slide = function (src) 
    {             
        return this._container.querySelector('img[src="'+src+'"]').parentElement.parentElement;
    }

    o.Slideshow.prototype.activeSlide = function () 
    {             
        return this._container.querySelector('.slideshow-slide-active');;
    }

    o.Slideshow.prototype.nextSlide = function () 
    {           
        var s = this.activeSlide();  
        return (s.nextElementSibling !== null ? s.nextElementSibling : s.parentNode.firstElementChild);
    }     

    o.Slideshow.prototype.prevSlide = function () 
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

    return o;

}) ({}, window, document);

// Util functions.
function addClass (element, className)
{
    element.className += ' ' + className;
}
function removeClass (element, className)
{
    element.className = element.className.replace(new RegExp('(?:^|\\s)'+ className + '(?:\\s|$)'), ' ');
}
function hasClass (element, className)
{
    return (' ' + element.className + ' ').indexOf(' ' + className + ' ') > -1;
}
function on(element, types, listener, useCapture)
{
    useCapture = useCapture === undefined ? true : false;
    var arrTypes = types.split(' ');
    for (var i = 0; i < arrTypes.length; i++)  
    {
        var type = arrTypes[i].trim();
        element.addEventListener(type, listener, useCapture);
    }
}
function off(element, types, listener, useCapture)
{
    useCapture = useCapture === undefined ? true : false;
    var arrTypes = types.split(' ');
    for (var i = 0; i < arrTypes.length; i++)  
    {
        var type = arrTypes[i].trim();
        element.removeEventListener(type, listener, useCapture);
    }
}
function bounds(element) 
{
    return element.getBoundingClientRect();
}
function offset(element) 
{
    return pageOffset().y + bounds(element).top;
}
function viewportHeight() 
{
    return document.documentElement.clientHeight;
}
function pageOffset() 
{
    var doc = document.documentElement;
    return {
        x : (window.pageXOffset || doc.scrollLeft) - (doc.clientLeft || 0),
        y : (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0)
    };
}
function pageTopOffset() 
{
    return pageOffset().y;
}
function pageBottomOffset() 
{
    return pageTopOffset() + viewportHeight();
}
function debounce(func, wait, immediate) 
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