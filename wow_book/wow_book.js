/* Modernizr 2.5.3 (Custom Build) | MIT & BSD
 * Build: http://www.modernizr.com/download/#-csstransforms3d-prefixed-teststyles-testprop-testallprops-prefixes-domprefixes
 */
;window.Modernizr=function(a,b,c){function y(a){i.cssText=a}function z(a,b){return y(l.join(a+";")+(b||""))}function A(a,b){return typeof a===b}function B(a,b){return!!~(""+a).indexOf(b)}function C(a,b){for(var d in a)if(i[a[d]]!==c)return b=="pfx"?a[d]:!0;return!1}function D(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:A(f,"function")?f.bind(d||b):f}return!1}function E(a,b,c){var d=a.charAt(0).toUpperCase()+a.substr(1),e=(a+" "+n.join(d+" ")+d).split(" ");return A(b,"string")||A(b,"undefined")?C(e,b):(e=(a+" "+o.join(d+" ")+d).split(" "),D(e,b,c))}var d="2.5.3",e={},f=b.documentElement,g="modernizr",h=b.createElement(g),i=h.style,j,k={}.toString,l=" -webkit- -moz- -o- -ms- ".split(" "),m="Webkit Moz O ms",n=m.split(" "),o=m.toLowerCase().split(" "),p={},q={},r={},s=[],t=s.slice,u,v=function(a,c,d,e){var h,i,j,k=b.createElement("div"),l=b.body,m=l?l:b.createElement("body");if(parseInt(d,10))while(d--)j=b.createElement("div"),j.id=e?e[d]:g+(d+1),k.appendChild(j);return h=["&#173;","<style>",a,"</style>"].join(""),k.id=g,(l?k:m).innerHTML+=h,m.appendChild(k),l||(m.style.background="",f.appendChild(m)),i=c(k,a),l?k.parentNode.removeChild(k):m.parentNode.removeChild(m),!!i},w={}.hasOwnProperty,x;!A(w,"undefined")&&!A(w.call,"undefined")?x=function(a,b){return w.call(a,b)}:x=function(a,b){return b in a&&A(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=t.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(t.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(t.call(arguments)))};return e});var F=function(a,c){var d=a.join(""),f=c.length;v(d,function(a,c){var d=b.styleSheets[b.styleSheets.length-1],g=d?d.cssRules&&d.cssRules[0]?d.cssRules[0].cssText:d.cssText||"":"",h=a.childNodes,i={};while(f--)i[h[f].id]=h[f];e.csstransforms3d=(i.csstransforms3d&&i.csstransforms3d.offsetLeft)===9&&i.csstransforms3d.offsetHeight===3},f,c)}([,["@media (",l.join("transform-3d),("),g,")","{#csstransforms3d{left:9px;position:absolute;height:3px;}}"].join("")],[,"csstransforms3d"]);p.csstransforms3d=function(){var a=!!E("perspective");return a&&"webkitPerspective"in f.style&&(a=e.csstransforms3d),a};for(var G in p)x(p,G)&&(u=G.toLowerCase(),e[u]=p[G](),s.push((e[u]?"":"no-")+u));return y(""),h=j=null,e._version=d,e._prefixes=l,e._domPrefixes=o,e._cssomPrefixes=n,e.testProp=function(a){return C([a])},e.testAllProps=E,e.testStyles=v,e.prefixed=function(a,b,c){return b?E(a,b,c):E(a,"pfx")},e}(this,this.document);

/*
 * @name wowBook
 *
 * @author Marcio Aguiar
 * @version 1.0
 * @requires jQuery v1.7.0
 * 
 * Copyright 2010 Marcio Aguiar. All rights reserved.
 * 
 * To use this file you must to buy a licence at http://codecanyon.net/user/maguiar01/portfolio
 *
 * Date: Wed Dec 8 10:05:49 2010 -0200
 */
;(function($) {

$.wowBook = function(elem){
    return $(elem).data("wowBook");
};

$.fn.wowBook = function(options) {
	if (typeof options==="string") {
		var args = Array.prototype.slice.call( arguments, 1 );
		if (options==="options" || options==="prop") {
			var instance = $.wowBook(this[0]), attr=args[0]; 
			return args.length>1 ?
				instance[attr] = args[1]
			  : instance[attr];
		}
		return this.each(function() {
			var instance = $.wowBook(this), 
			    what = instance[options];
			what.apply(instance, args)
		});
	}
    var	opts = $.extend({}, $.wowBook.defaults, options);
	return this.each(function() {
        var book  = new wowBook(this, opts);
		$(this).data('wowBook', book);
	});
}; // fn.wowBook



//
// Book constructor
// 
// params:
// 	elem - the DOM element that contains the book pages
//  opts - configuration options
//
function wowBook(elem, opts) {
	elem = $(elem);
    var book = this;
    this.elem   = elem;
	this.id     = elem.attr('id');
    this.pages  = [];
    this.opts   = opts;
    this.currentPage = null;
    this.pageWidth   = opts.width/2;
    this.pageHeight  = opts.height;
	this.transparentPages  = opts.transparentPages = false;
	this.startPage   = opts.startPage;
	this.onShowPage  = opts.onShowPage;
	this.slideShow   = opts.slideShow;
	this.slideShowDelay   = opts.slideShowDelay;
	this.pauseOnHover     = opts.pauseOnHover;
	this.turnPageDuration = opts.turnPageDuration;
	this.foldGradient     = opts.foldGradient;
	this.foldGradientThreshold = opts.foldGradientThreshold;
	this.shadows          = opts.shadows;
	this.shadowThreshold   = opts.shadowThreshold;
	this.clipBoundaries   = opts.clipBoundaries;
	this.zoomLevel        = opts.zoomLevel;
	this.zoomMax          = opts.zoomMax;
	this.zoomBoundingBox  = opts.zoomBoundingBox;
	this.zoomStep         = opts.zoomStep;
	this.onZoom           = opts.onZoom;
	this.mouseWheel       = opts.mouseWheel;
	this.flipSound        = opts.flipSound;
	this.centeredWhenClosed = opts.centeredWhenClosed;
	this.sectionDefinition = opts.sections;
	$.support.filters = 'filters' in elem[0];

	var pageWidth=this.pageWidth, pageHeight=this.pageHeight;

	// setup element css
	elem.addClass('wowbook');
	if (elem.css('position')==='static') elem.css('position', 'relative');
	elem.css({
		height : opts.height,
		width  : opts.width
	});

	var pages=elem.children();

	// page Container
	var container =
	this.pagesContainer =
	this.origin = $("<div class='wowbook-origin'></div>").css({
		position : 'absolute',
		width    : '100%',
		height   : elem.height()
	}).appendTo(elem);

	// Book Shadow element
	book.bookShadow = $("<div class='wowbook-book-shadow'></div>").appendTo(elem)
		.css({ width: opts.width, height: opts.height, top:0, position: 'absolute', display: 'none', zIndex: 0 });

	// find and Add pages
	this.insertPages(pages, true);

	//
	// create shadows and gradients
	//
	container.append("<div class='wowbook-shadow-clipper'><div class='wowbook-shadow-container'><div class='wowbook-shadow-internal'></div></div></div>");
	book.shadowContainer = $(".wowbook-shadow-container", container);
	book.internalShadow = $(".wowbook-shadow-internal", container);
	book.shadowClipper = $(".wowbook-shadow-clipper", container).css({ display:'none', width: elem.width(), height: elem.height() });
	book.foldShadow = $("<div class='wowbook-shadow-fold'></div>").appendTo(book.shadowContainer);
	book.foldGradientContainer = $("<div class='wowbook-fold-gradient-container'></div>").appendTo(book.shadowContainer);
	book.foldGradientElem  = $("<div class='wowbook-fold-gradient'></div>").appendTo(book.foldGradientContainer);
	book.hardPageShadow = $("<div class='wowbook-hard-page-shadow'></div>")
		.css({ display: 'none', width: pageWidth, height: pageHeight })
		.appendTo(container);
	if (!$.support.opacity && $.support.filters) {
		$.wowBook.applyAlphaImageLoader(["wowbook-fold-gradient", "wowbook-fold-gradient-flipped", "wowbook-shadow-fold", "wowbook-shadow-fold-flipped"]);
	}
	// for IE : without this the child elements (shadows) inside the container ignores the parent's opacity
	book.shadowContainer.css('position', 'relative');

    // create handles over the book
	this.leftHandle  = $("<div class='wowbook-handle wowbook-left'></div>")
		.data('corner', 'l').appendTo(container);
	this.rightHandle = $("<div class='wowbook-handle wowbook-right'></div>")
		.data('corner', 'r').appendTo(container);
	if (opts.handleWidth) $('.wowbook-handle', container).css('width', opts.handleWidth);
	// for some reason IE8 makes this handle disappear when zoomed if we set css 'right:0', so...
	this.rightHandle.css('left', opts.width-this.rightHandle.width() );

	// in IE, the z-index of the empty transparent divs used to
	// define the handles are ignored if any other element is on front of them
	// the OMG-I-HATE-IE solution is to make them no-transparent, but opacity=1
	if ($.browser.msie)
		$('.wowbook-handle', elem).css({
			backgroundColor: '#fff',
			filter : 'alpha(opacity=1)'
		})

	// drag a handle, hold page
	$('.wowbook-handle', container).bind('mousedown', function(e){ return book.pageEdgeDragStart(e) });

	// short-click a handle, turn page
	var mousedownAt;
	$('.wowbook-handle', container)
		.mousedown(function(){ mousedownAt = $.now(); })
		.mouseup(function(){
			var clickDuration = new Date().getTime()-mousedownAt;
			if (clickDuration>book.opts.handleClickDuration) return;
			var g = $(this).data('corner');
			if (g==='r') book.advance();
			if (g==='l') book.back();
		});

	// 	slideshow pauseOnHover
	var slideShowRunning = false;
	elem.hover(function(e){
		if (!book.pauseOnHover) return;
		slideShowRunning = book.slideShowTimer;
		var ssc = $(book.opts.controls.slideShow),
		    disabled = ssc.hasClass('wowbook-disabled');
		book.stopSlideShow();
		ssc.toggleClass('wowbook-disabled', disabled);
	}, function(){
		if (!book.pauseOnHover) return;
		if (slideShowRunning) book.startSlideShow();
	});

	// Clip Boundaries
	if (this.clipBoundaries) {
		var pageDiagonal = Math.sqrt(pageWidth*pageWidth+pageHeight*pageHeight),
			boundaries   = [pageHeight-pageDiagonal, elem.width(), pageDiagonal, 0]; // top, right, bottom, left
		this.origin.wrap("<div class='wowbook-clipper'><div class='wowbook-inner-clipper'></div></div>")
		           .css('top', -boundaries[0]);
		$(".wowbook-inner-clipper", elem).css({
			position : 'absolute',
			width    : '100%',
			height   : boundaries[2]-boundaries[0],
			top      : boundaries[0],
			overflow : 'hidden'
		});
		this.clipper = $(".wowbook-clipper", elem).css({
			position: 'absolute', left:0, top:0, width:'100%', height: elem.height(),
			overflow: 'hidden', zIndex: 1
		});
	}


	// Zoom
	elem.wrapInner("<div class='wowbook-zoomwindow'><div class='wowbook-zoomcontent'></div></div>");
	this.zoomWindow  = $('.wowbook-zoomwindow', elem);
	this.zoomContent = $('.wowbook-zoomcontent', elem);
	if ($.browser.ie8) this.zoomContent.wrapInner("<div class='IE8-zoom-helper'style='position:relative'></div>");
	this.zoomWindow.css({
		position : 'absolute',
		width    : pageWidth*2,
		height   : elem.height(),
		top      : 0
	});
	this.zoomContent.css({
		position : 'absolute',
		width    : pageWidth*2,
		height   : elem.height(),
		left     : 0,
		top      : 0
	});

	this.fillToc();

	// deep linking
	if (opts.deepLinking && this.getLocationHash()) {
		var page = book.selectorToPage('#'+this.getLocationHash());
		if (page===undefined) page=book.locationHashToPage();
		if (typeof(page)==='number') {
			book.startPage = page;
			if (!isInViewPort(book.elem)) book.elem[0].scrollIntoView();
		}
	}

	this.showPage(this.startPage, false);

	// page corners
	this.corners = {
		tl : [0, 0],
		bl : [0, pageHeight],
		tr : [pageWidth, 0],
		br : [pageWidth, pageHeight],
		l  : [0, 0],
		r  : [pageWidth, 0]
	};

	// Page flipping sound
	this.audio = this.createAudioPlayer();

	// Keyboard navigation
	if (this.opts.keyboardNavigation) {
		$(document).keydown(function(e){
			// ignore when typing in a input element
			if ($(e.target).filter('input, textarea, select').length) return;
			if (e.which===book.opts.keyboardNavigation.back) book.back();
			if (e.which===book.opts.keyboardNavigation.advance) book.advance();
		});
	}

	$(window).hashchange(function(){
		var locationHash = window.location.hash;
		if (locationHash===book.locationHashSetTo) {
			book.locationHashSetTo = undefined;
			return;
		}
		// true if location.hash is empty and does not have even a "#" sign
		var emptyHash = (locationHash==='' && !book.locationEndsInHash()); 
		var page = emptyHash ? book.startPage : book.locationHashToPage();
		if (typeof(page)!=='number') return;
		book.gotoPage(page, !emptyHash);
		if (!emptyHash && !isInViewPort(book.elem)) book.elem[0].scrollIntoView();
	});

	// forceBasicPage
	if (opts.forceBasicPage) {
		this.foldPage = this.holdHardpage = this.foldPageBasic;
	}

	if (!$.support.transform) {
		this.foldPage = this.foldPageBasic;
		if (!$.support.filters) this.holdHardpage = this.foldPageBasic;
	}

	// Mouse wheel support
	if (this.mouseWheel) {
		elem.mousewheel(function(e, delta) {
			if (!book.mouseWheel) return;
			if (book.mouseWheel==='zoom') {
				if (delta>0) book.zoomIn();
				if (delta<0) book.zoomOut();
				book.zoomedAt(e);
			} else {
				if (delta>0) book.advance();
				if (delta<0) book.back();
			}
			return false;
		});
	}

	this.touchSupport();

	// Turns elements into controls
	this.controllify(this.opts.controls);

	if (opts.slideShow) this.startSlideShow();
}// wowBook

// wowBook methods
wowBook.prototype = {

	/*
	 * Insert pages in the book
	 */
	insertPages : function(pages, dontShowPage){
		for(var i=0,l=pages.length;i<l;i++){
			this.insertPage(pages[i], true);
		};
		this.updateBook(dontShowPage);
	},

	/*
	 * Insert a single page in the book
	 * 
	 * 	content - the page content, can be a string or a jquery object
	 *  isBatchInsert - boolean, if true indicates that a group of pages are being inserted and will NOT call updateBook
	 */
	insertPage : function(content, isBatchInsert){
		var index=this.pages.length;
		content = $(content).addClass('wowbook-page-content');
		var page = $("<div class='wowbook-page'></div>")
		       .css({ width: this.pageWidth, height: this.pageHeight, display : 'none', position : 'absolute' })
		       .appendTo(this.pagesContainer)
		       .append(content);
		if ($.support.boxSizing) content.css($.support.boxSizing, 'border-box');
		boxSizingBorderBox(content, this.pageWidth, this.pageHeight);
		page.hardPageSetByUser = content.hasClass('wowbook-hardpage');
		if (this.opts.gutterShadow) {
			$("<div class='wowbook-gutter-shadow'></div>")
				.appendTo(content).css('height', this.pageHeight); // on IE7, if page content has padding the height 100% will not cover all the pageHeight
		}
		this.pages.push(page);

		if (!isBatchInsert) this.updateBook();

		return page;
	}, // insertPage

	/*
	 * Remove pages
	 */ 
	removePages : function(from, to){
		if (!arguments.length) from=0, to=-1;
		if (this.holdedPage) this.releasePage(this.holdedPage);
		// based on Array Remove By John Resig (MIT Licensed)
		var pages = this.pages,
		    to = (to || from) + 1 || pages.length,
		    deleted = pages.slice(from, to),
		    rest  = pages.slice(to);
		pages.length = (from < 0) ? pages.length + from : from;
		pages.push.apply(pages, rest);
		for(var i=0,l=deleted.length;i<l;i++) {
			deleted[i].remove();
		}
		this.updateBook();
		return pages.length;
	}, // removePages
	
	
	/*
	 * updateBook
	 * 
	 * update book after some page is inserted or removed.
	 */ 
	updateBook : function(dontShowPage){
		this.doPageNumbering();
		this.findPagesType();
		this.positionBookShadow();

		// apply left and right classes
		var left = false, page;
		for(var i=0,l=this.pages.length;i<l;i++){
			page = this.pages[i].toggleClass('wowbook-left', left).toggleClass('wowbook-right', !left)
				.data({ pageIndex: i, holded: false });
			page.pageIndex = i;
			left = !left;
		}
		this.findSections();
		if (!dontShowPage) this.showPage(this.currentPage);
	}, // updateBook

	/*
	 * Numerate the pages
	 */
	doPageNumbering : function(){
		var opts=this.opts;
		if (!opts.pageNumbers) return;
		var np = opts.numberedPages,
			lastPage = this.pages.length-1,
		    lastPageOnLeft = this.pageIsOnTheLeft(lastPage);

		if (np=="all") np = [0, -1];
		if (!np)       np = [2, lastPageOnLeft ? -3 : -2];

		var first = np[0],
		    last  = np[1];
		if (first<0) first=lastPage+first+1;
		if (first<0) first=0;
		if (first>this.pages.length-1) first=lastPage;
		if (last<0) last =lastPage+last+1;
		if (last<0) last=0;
		if (last>this.pages.length-1) last=lastPage;

		var content, pn, i,
		    pageNumber=this.opts.firstPageNumber;
		for (i=0; i<first; i++) $('.wowbook-page-number', this.pages[i]).remove();
		for (i=last+1; i<lastPage; i++) $('.wowbook-page-number', this.pages[i]).remove();
		for (i=first; i<=last; i++) {
			pn = $('.wowbook-page-number', this.pages[i]);
			if (!pn.length){
				content = $('.wowbook-page-content', this.pages[i]);
				pn = $('<div class="wowbook-page-number"></div>').appendTo(content);
			}
			pn.html(pageNumber++);
		}
	}, // doPageNumbering

	findPagesType : function(){
		var opts=this.opts,
			hp={}, index, i, l, isHardPage,
		    hardPages = opts.hardPages || [],
			allHardPages = (hardPages===true);

		if (!allHardPages) {
			// hard covers
			if (opts.hardcovers) {
				hardPages.push(0,1,-1);
				if (this.pageIsOnTheLeft(this.pages.length-1)) hardPages.push(-2);
			}

			// 'normalize' indexes and create a set
			for (i=0,l=hardPages.length;i<l;i++){
				index=hardPages[i];
				if (index<0) index=this.pages.length+index;
				if (index>=0 && index<this.pages.length) hp[index]=true;
			}
		}

		// force the second parameter to false when hp[i]===undefined, otherwise toggleClass will not remove the class
		i=this.pages.length;
		while(i--) {
			isHardPage = allHardPages || hp[i] || this.pages[i].hardPageSetByUser;
			this.pages[i].toggleClass('wowbook-hardpage', isHardPage).isHardPage = isHardPage;
		}
	}, // findPagesType

    showPage : function(pageIndex, updateLocationHash) {
		if (pageIndex < 0) pageIndex = 0;
		if (pageIndex > this.pages.length-1) pageIndex = this.pages.length-1;
		this.currentPage = pageIndex;

		var leftpage  = pageIndex-(1-pageIndex%2),
		    rightpage = leftpage+1,
		    width     = this.pageWidth,
		    left      = false,
		    zi, d;
		for(var i=0, len=this.pages.length; i<len; i++) {
			zi = left ? i : len-i;
			if (this.transparentPages)
				d = left ? ( i<=leftpage  ? 'block' : 'none') :
				           ( i>=rightpage ? 'block' : 'none')
			else
				d = (i===leftpage-2 || i===leftpage || i===rightpage || i===rightpage+2) ? 'block' : 'none';
			this.pages[i].data('zIndex', zi).css({
				display : d,
				left    : left ? 0 : width,
				top     : 0,
				zIndex  : zi
			});
			left = !left;
		} // s
		
		// enable/disable grab handles and nav controls
		var lp = (pageIndex>0), rp=this.rightPage();
		this.leftHandle.toggleClass('wowbook-disabled', !lp );
		this.rightHandle.toggleClass('wowbook-disabled', !(rp && this.backPage(rp.pageIndex)) );
		$(this.opts.controls.back).toggleClass('wowbook-disabled', !lp );
		$(this.opts.controls.next).toggleClass('wowbook-disabled', !(rp && this.backPage(rp.pageIndex)) );

		// onShowPage callback
		var onShowPage = this.onShowPage;
		if (onShowPage && $.isFunction(onShowPage)) {
			onShowPage(this, this.pages[pageIndex], pageIndex);
			var o=this.otherPage(pageIndex);
			if (o) onShowPage(this, this.pages[o], o);
		}

		// centeredWhenClosed only 1 page visible and
		if (this.opts.centeredWhenClosed) {
			var lefty = (lp && rp) ? 0 : (lp ? width/2 : -width/2 ); 
			this.origin.css('left', lefty );
		}

		this.positionBookShadow();

		if (updateLocationHash!==false
		 && this.opts.updateBrowserURL
		 && this.locationHashToPage()!=pageIndex) {
			this.locationHashSetTo = window.location.hash = this.pageToLocationHash(pageIndex);
		}
	}, // showPage

	holdPage : function(page, x, y, corner, back) {
		if (typeof(page)==='number') page=this.pages[page];
		if (!page) return;
		var pageIndex = page.data('pageIndex'),
		    last = this.pages.length-1,
		    lastPageIsOnLeft = this.pageIsOnTheLeft(last);

		if (!corner) corner=this.pageIsOnTheLeft(pageIndex) ? 'l' : 'r'
		else {
			if (!this.corners[corner] ||
			    (this.pageIsOnTheLeft(pageIndex) ? /r/ : /l/).test(corner) ) return;
		}

		if (back===undefined) back = this.backPage(pageIndex);
		if (!back) return;
		var backIndex = back.data('pageIndex');

		if (this.centeredWhenClosed && (pageIndex===0 || backIndex===0 ||
				(lastPageIsOnLeft && (backIndex===last || pageIndex===last)))) {
			var lefty=0, newx,
				width = this.pageWidth,
				trStart, trEnd,
				lrStart, lrEnd,
				xrStart, xrEnd, xbeforeStart, xafterEnd;
			if (pageIndex===0) {
				trStart = -width/2; trEnd = -width/4;
				lrStart = 0;        lrEnd = -width/2;
				xrStart = -width;   xrEnd = trEnd;
				xbeforeStart = xrStart; xafterEnd = x;
			}
			if (pageIndex===last && lastPageIsOnLeft) {
				trStart = width;    trEnd = width*3/2;
				lrStart = width/2;  lrEnd = 0;
				xrStart = width;    xrEnd = width*2;
				xbeforeStart = x; xafterEnd = xrEnd;
			}
			if (backIndex===0) {
				trStart = width/2;    trEnd = pageIndex===last ? width : width*3/2;
				lrStart = pageIndex===last ? width/2 : 0;        lrEnd = -width/2;
				xrStart = trStart;  xrEnd = width*2;
				xbeforeStart = x; xafterEnd = xrEnd;
			}
			if (backIndex===last && lastPageIsOnLeft) {
				trStart = pageIndex===0 ? 0 : -width/2; trEnd = width/2;
				lrStart =  width/2; lrEnd = pageIndex===0 ? -width/2 : 0;
				xrStart = -width;   xrEnd = trEnd;
				xbeforeStart = xrStart; xafterEnd = x;
			}

			if (x<trStart) { lefty = lrStart; newx = xbeforeStart; }
			if (x>trEnd)   { lefty = lrEnd;   newx = xafterEnd;	}
			if (x>=trStart && x<=trEnd) {
				var px = (x-trStart)/(trEnd-trStart);
				lefty  = lrStart+px*(lrEnd-lrStart);
				newx   = xrStart+px*(xrEnd-xrStart);
			}
			x = newx;
			this.origin.css('left', lefty);
			this.positionBookShadow();
		}

		if (this.zoomed || this.pageType(page)=='basic' || this.pageType(back)=='basic' ) {
			this.foldPageBasic(page, x, y, corner, back);
		} else if (page.isHardPage || (back.isHardPage)) {
			this.holdHardpage(page, x, y, corner, back);
		} else {
			this.foldPage(page, x, y, corner, back);
		}

		if (!page.data('holded')) {
			page.addClass('wowbook-page-holded');
			back.addClass('wowbook-page-holded');
			page.data('holded', true);
			this.holdedPage = page;
			this.holdedPageBack = back;
			if (this.shadows) this.shadowClipper.css('display', 'block');
			if (this.clipBoundaries) this.clipper.css('overflow', 'visible');
			this.positionBookShadow();
			if (this.opts.onHoldPage) this.opts.onHoldPage(this, pageIndex, page, back);
		}
	}, // holdPage

	/*
	*	foldPage
	*/
	foldPage : function(page, x, y, corner, back) {
		if (typeof(page)==='number') page=this.pages[page];
		var book = this;
		var pageIndex = page.data('pageIndex');
		if (back===undefined) back = this.backPage(pageIndex);
		if (!back || !back.length) return;
		var content = page.children().first(),
		    backContent = back.children().first(),
		    width      = this.pageWidth,
		    height     = this.pageHeight,
		    halfWidth  = width/2,
		    halfHeight = height/2;

		if (!corner) corner='tl';

		if (corner=='l' || corner=='r') {
			var grabPoint=page.data('grabPoint');
			if (!grabPoint) {
				grabPoint = { 
					x: (corner=='l') ? 0 : width,
					y: y 
				};
				page.data('grabPoint', grabPoint);
			};
			corner = ( (y>=grabPoint.y) ? 't' : 'b') + corner;
			var dx    = (x-grabPoint.x),
			    dy    = (y-grabPoint.y),
			    angle = Math.atan2(dy,dx),
			    corn  = { x: 0, y: (y>=grabPoint.y) ? 0 : height },
			    n     = { x: 0,	y: corn.y-grabPoint.y };
			n = rotatePoint(n, 2*angle)
			x = n.x+x; 
			y = n.y+y;
		}

		page.data('holdedAt', {x: x, y: y });
		page.data('holdedCorner', corner);

		back.css('left', page.css('left'));

		// fixed corner
		var cornerxy = this.corners[corner],
		    fx = width-cornerxy[0];
		    fy = cornerxy[1];
		var dx = (x-fx),
		    dy = (y-fy),
		    distance = Math.sqrt(dx*dx+dy*dy);
		if (distance > width) {
			x = fx+(width*dx/distance);
			y = fy+(width*dy/distance);
		}

		// second fixed corner
		fy = height-fy;
		var dx = (x-fx),
		    dy = (y-fy),
		    distance = Math.sqrt(dx*dx+dy*dy);
		    maxdistance = Math.sqrt(width*width+height*height);
		if (distance > maxdistance) {
			x = fx+(maxdistance*dx/distance);
			y = fy+(maxdistance*dy/distance);
		}

		var cx = cornerxy[0], cy=cornerxy[1];

		if (cx==x && cy==y) {
			this.releasePage(page);
			return;
		}
		if (cy==y) y=cy+0.001;

		var dx = (x-cx),
			dy = (y-cy),
			distance = Math.sqrt(dx*dx+dy*dy),
			halfd    = distance/2,
			angle    = Math.atan2(dy,dx),
			tan_a    = Math.tan(angle),
			ar       = angle,
			angle    = angle*180/Math.PI;

			content.css('transform', 'rotate('+(-angle)+'deg)');
			
			var	bc  = { x : cx-halfWidth, y: halfHeight-cy },
				bc2 = rotatePoint(bc, ar);
			var xcut = bc2.x+halfd + halfWidth;
			page.css({
				clip: 'rect(-1000px 1000px 1000px '+xcut+'px)',
				transform: 'rotate('+angle+'deg)'
			});

			/* shadow */
			var op = this.calculateOpacity(halfd, width, this.shadowThreshold, 50);
			if (this.shadows && (op > 0)) {
				var shadowHeight = 2*Math.sqrt(width*width+height*height),
				    shadowTop    = -(shadowHeight-height)/2;
				var left = xcut+parseFloat(page.css('left')),
			        top  = shadowTop;
				this.internalShadow.css({
					display : 'block',
					height : shadowHeight,
					transform: 'translate('+left+"px,"+top+"px)"   +' rotate('+angle+'deg)',
					transformOrigin : halfWidth-xcut+"px "+(halfHeight+(shadowHeight-height)/2)+"px"
				});

				var ls = xcut-this.foldShadow.width();

				this.foldShadow.css({
					display: 'block',
					height : shadowHeight,
					transform: 'translate('+(ls+parseFloat(page.css('left')))+"px,"+top+"px)"   +' rotate('+angle+'deg)',
					transformOrigin : halfWidth-ls+"px "+(halfHeight+(shadowHeight-height)/2)+"px"
				});

				this.shadowContainer.css({ opacity : op, display : 'block' });
			} else {
				this.shadowContainer.hide();
			}

			// back
			back.show();
			backContent.css('transform', 'rotate('+angle+'deg)');

			bc.x = -bc.x;
			var	bc2  = rotatePoint(bc, -ar);
			var xcut = bc2.x-halfd + halfWidth;
			back.css({
				clip: 'rect(-1000px 1000px 1000px '+xcut+'px)', zIndex: 1000,
				transform: 'rotate('+angle+'deg)'
			 });

			var t1, t2;
			t1 = { x : bc2.x-halfd, y : bc2.y+halfd*tan_a }
			t2 = { x : bc2.x-halfd, y : bc2.y-halfd/(tan_a==0 ? 0.0001 : tan_a) }
			t1 = rotatePoint(t1, -ar);
			t2 = rotatePoint(t2, -ar);
			t2 = -(t2.x + halfWidth);
			t1 = -(t1.y - halfHeight);
			var marginAdjustment = { marginLeft: cx+t2, marginTop: cy-t1 };

			back.css(marginAdjustment);

            // fold Gradient
			var op = this.calculateOpacity(halfd*2, width*2, this.foldGradientThreshold, 50);
			if (this.foldGradient && (op > 0)) {
                var foldGradientHeight = 2*Math.sqrt(width*width+height*height);

                this.foldGradientContainer.appendTo(backContent);
                this.foldGradientContainer.css({
					opacity  : op,
                    position : 'absolute',
                    left : (width-cx)-this.foldGradientElem.width()/2,
                    top  : cy-foldGradientHeight/2,
                    width : this.foldGradientElem.width(),
					height : foldGradientHeight,
					transform: 'rotate('+(-angle)+'deg)'
				});

			    this.foldGradientElem.css({
				    left   : -halfd+this.foldGradientElem.width()/2,
                    height : foldGradientHeight
			    });
			    this.foldGradientContainer.show();
            } else {
			    this.foldGradientContainer.hide();
            }
	}, // foldPage


	holdHardpage : function(page, x, y, corner, back) {
		if (typeof(page)==='number') page=this.pages[page];
		var pageIndex = page.data('pageIndex'),
			onRight   = this.pageIsOnTheRight(pageIndex),
		    width     = this.pageWidth,
		    height    = this.pageHeight;
		if (back===undefined) back = this.backPage(pageIndex);
		if (!back || !back.length) return;

		if (!corner) corner='tl';
		page.data('holdedAt', {x: x, y: y });
		page.data('holdedCorner', corner);
		var dx    = onRight ? width-x : x,
		    fixed = onRight ? 0       : width,
		    p, same;
		if (dx<0) dx=0;
		same = dx < width;
		p = same ? page : back;
		(same ? back : page).css('display', 'none');
		var pIsOnLeft = onRight!=same,
		    cx    = x-fixed;
		if (cx>width)  cx=width;
		if (cx<-width) cx=-width;
		var cy     = -Math.sqrt( 40*40*(1-cx*cx/((width+15)*(width+15))) ),
		    scaleX = Math.abs(cx/width),
		    angle  = scaleX==1 ? 0 : Math.atan2(cy,cx);

		if (this.opts.use3d && Modernizr.csstransforms3d) {
			var x0=(same ? fixed : width-fixed);
			if (pIsOnLeft)
				roty = -this._calculateAngleFromX(-cx, width, this.opts.perspective)
			else
				roty = this._calculateAngleFromX(cx, width, this.opts.perspective)
			p.css(Modernizr.prefixed('perspectiveOrigin'), '0 50%');
			p.css({
				transform       : 'perspective('+this.opts.perspective+'px) rotate3d(0, 1, 0, '+(roty)+'deg)',
				transformOrigin : x0+'px 50%',
				display : 'block',
				zIndex  : 1000
			});
		} else {
			p.css({
				transform       : 'skewY('+angle+'rad) scaleX('+scaleX+')',
				transformOrigin : (same ? fixed : width-fixed)+'px 50%',
				display : 'block',
				zIndex  : 1000
			});
		}

		if (!$.support.transform && $.support.filters) {
			var matrix = "M11="+scaleX+", M12=0, M21="+Math.tan(angle)*scaleX+", M22=1";
			// for some reason putting margins with filter in the same $().css call doesn't work
			p.css('filter', "progid:DXImageTransform.Microsoft.Matrix("+matrix+", sizingMethod='auto expand')");
			p.css({
				marginTop  : height-p.height(),
				marginLeft : ( pIsOnLeft ? width-p.width() : 0)
			})
		}
		// shadow
		if (this.shadows) this.hardPageShadow.css({
			display : 'block',
			left    : pIsOnLeft ? 0 : width,
			opacity : Math.abs(cx/width)*0.5
		});

	}, // holdHardpage

	_calculateAngleFromX : function(x, width, perspective){
		var rad2deg = 180/Math.PI,
		    w2      = width*width, p2= perspective*perspective, x2= x*x;
		angle = Math.acos( (width*p2*x - Math.sqrt(w2*w2*p2*x2 + w2*w2*x2*x2-w2*p2*x2*x2))/(w2*p2 + w2*x2));
		angle = -angle * rad2deg;
		return angle;
	}, // _calculateAngleFromX


	// foldPageBasic, does not use CSS transform
	foldPageBasic : function(page, x, y, corner, back) {
		if (typeof(page)==='number') page=this.pages[page];
		var book = this,
		    pageIndex      = page.data('pageIndex'),
		    onRight        = this.pageIsOnTheRight(pageIndex),
		    onLeft         = !onRight;
		if (back===undefined) back = this.backPage(pageIndex);
		if (!back || !back.length) return;
		var width          = this.pageWidth,
		    height         = this.pageHeight,
		    fgWidth        = this.foldGradientElem.width(),
		    fsWidth        = this.foldShadow.width();

		if (!corner) corner='tl';
		if (!page.data('foldPageBasic')) {
			page.data('foldPageBasic', true);
			this.internalShadow.css('display', 'none');
			this.foldShadow.css({
				display : 'none',
				height : height,
				transform : '',
				top : 0
			}).toggleClass('wowbook-shadow-fold-flipped', onRight);
			this.shadowContainer.css('display', 'block');
			var backContent = back.children().first();
			this.foldGradientContainer
				.appendTo(backContent)
				.css({ width : fgWidth,  height : height, top : 0, transform: '', zIndex: 1000000000 });
			this.foldGradientElem.css({
				left   : 0,
				height : height
			}).toggleClass('wowbook-fold-gradient-flipped', onRight);
		}

		page.data('holdedAt', {x: x, y: y });
		page.data('holdedCorner', corner);
		var fixed = onLeft ? width : 0 ,
		    dx    = onLeft ?     x : width-x;
		if (dx<0) dx=0;
		if (dx>2*width) dx=2*width;
		var halfd = dx/2;
		var pageclip, backclip, leftb;
		if (onLeft) {
			pageclip = 'rect(-1000px 1000px 1000px '+halfd+'px)';
			backclip = 'rect(-1000px 1000px 1000px '+(width-halfd)+'px)';
			leftb    = dx-width;
		} else {
			pageclip = 'rect(-1000px '+(width-halfd)+'px 1000px -1000px)';
			backclip = 'rect(-1000px '+halfd+'px 1000px -1000px)';
			leftb    = width-dx+width;
		}
		page.css('clip', pageclip);
		back.css({ clip: backclip, left: leftb, zIndex: 1000, display : 'block' });

		// shadow
		var op = this.calculateOpacity(halfd*2, width*2, this.shadowThreshold, 50);
		if (this.shadows && (op > 0)) {
			var leftx = onLeft ?  halfd-fsWidth : width-halfd + width;
			this.shadowContainer.css('opacity', op);
			this.foldShadow.css({
				left    : leftx,
				display : 'block'
			});
		} else {
			this.foldShadow.css('display', 'none');
		}

		// Gradient
		var op = this.calculateOpacity(halfd*2, width*2, this.foldGradientThreshold, 50);
		if (this.foldGradient && (op > 0)) {
			var leftx = onLeft ? width-halfd : halfd-fgWidth;
			this.foldGradientContainer.css({
				opacity  : op,
				left     : leftx,
				display  : 'block'
			});
		} else {
			this.foldGradientContainer.css('display', 'none');
		}
	}, // foldPageBasic


	animateFoldPage : function(page, corner, from, to, callback, arc, back) {
		var book = this;
		if (book.animating) return;
		book.animating = true;
		if (!from) from = page.data('holdedAt');
		if (!corner) corner = page.data('holdedCorner');

		var dx = (from.x-to.x),
		    dy = (from.y-to.y),
			duration = this.turnPageDuration * Math.abs(dx)/(this.pageWidth*2),
		    x, y;

		if (!page.isHardPage && duration/this.turnPageDuration>0.4) this.playFlipSound();

		this.holdPage(page, from.x, from.y, corner, back);
		this._percent = 0;
		$(this).animate({_percent:1}, {
			duration : duration,
			easing   : 'linear',
			complete : function(){ 
				book.animating = false;
				if ($.isFunction(callback)) callback();
			},
			step:function(e, b){
				x = from.x-e*dx;
				y = from.y-e*dy;
				if (arc) y -= (0.5-Math.abs(0.5-e))*book.pageHeight/10;
				book.holdPage(page, x, y, corner, back);
			}
		})
		
	}, // animateFoldPage

	stopAnimation : function(){
		$(this).stop(true, true);
	}, // stopAnimation

	releasePages : function(){
		for (var i=0,l=this.pages.length;i<l;i++){
			if (this.pages[i].data('holded')) this.releasePage(i);
		}
	}, // releasePages

	releasePage : function(page, animated, back){
		if (typeof(page)==='number') page=this.pages[page];
		var book=this,
			from   = page.data('holdedAt'),
			corner = page.data('holdedCorner');
		if (animated && from) {
			var to = { x:this.corners[corner][0], y:this.corners[corner][1] };
				
			this.animateFoldPage(page, corner, from, to, function(){
				book.releasePage(page, false, back);
			}, false, back);
			return
		}
		var pageIndex = page.data('pageIndex');

		if (back===undefined) back = this.holdedPageBack || this.backPage(pageIndex);
		this.holdedPage = null;
		this.holdedPageBack = null;
		page.data({
			holdedAt      : null,
			holdedCorner  : null,
		    grabPoint     : false,
			foldPageBasic : null,
			holded        : false
		});
		if (this.clipBoundaries && !this.zoomed) this.clipper.css('overflow', 'hidden');
		this.shadowClipper.css('display', 'none');

		this.internalShadow.parent().hide();
		this.foldGradientContainer.hide();
		this.hardPageShadow.hide();
		this.resetPage(page);

		if (back && back.length) {
			this.resetPage(back);
			back.hide();
		}

		this.foldShadow.removeClass('wowbook-shadow-fold-flipped')
			.css({ transform: '', left: '' });
		this.foldGradientElem.removeClass('wowbook-fold-gradient-flipped')
			.css('transform', '');
		this.foldGradientContainer.css('transform', '').appendTo(this.pagesContainer);
		this.positionBookShadow();
		if (this.opts.onReleasePage) this.opts.onReleasePage(this, pageIndex, page, back);
	}, // releasePage


	resetPage : function(page){
		page.removeClass('wowbook-page-holded');
		if (!this.resetCSS) this.resetCSS = {
			transform           : '',
			transformOrigin     : '',
			clip                : 'auto',
			marginLeft          : 0,
			marginTop           : 0,
			filter              : ''
		};
		var w=this.pageWidth, h=this.pageHeight;
		page.css(this.resetCSS)
		  .css({ zIndex: page.data('zIndex'), width: w, height: h
			  ,left: this.pageIsOnTheLeft(page.data('pageIndex')) ? 0 : w
		  });
		// what can i say? IE SUCKS
		if ($.browser.msie && $.browser.version<9)
			page.attr('style', page.attr('style').replace(/clip\: [^;]+;/i, ''));

		var content = $('.wowbook-page-content', page);
		content.css(this.resetCSS);
		boxSizingBorderBox(content, w, h);
	}, // resetPage

	gotoPage : function(pageIndex, updateBrowserURL){
		if (this.animating) return;
		if ((typeof pageIndex==='string') && pageIndex[0]=='#') pageIndex=this.selectorToPage(pageIndex);
		if (pageIndex<0) pageIndex = 0;
		if (pageIndex>this.pages.length-1) pageIndex = this.pages.length-1;
		if (this.isOnPage(pageIndex)) return;

		var goingBack = (pageIndex < this.currentPage);

		var book = this,
		    page = goingBack ? book.leftPage() : book.rightPage();
		if (!page) return;

		var pageBelow, back;
		if (goingBack) {
			pageBelow = this.leftPage(pageIndex);
			back      = this.rightPage(pageIndex);
		} else {
			pageBelow = this.rightPage(pageIndex);
			back      = this.leftPage(pageIndex);
		}

		// put the page to be show below the current page
		if (goingBack) {
			for(var i=page.pageIndex-1; i>=0; i--)
				this.pages[i].css('display', 'none');
		} else {
			for(var i=page.pageIndex+1, len=this.pages.length; i<len; i++)
				this.pages[i].css('display', 'none');
		}
		if (pageBelow) pageBelow.css('display', 'block');
		var pn = pageIndex;

		// turns the page
		var isHolded = page.data('holdedAt'),
			from     = page.data('holdedAt'),
			to,
		    corner   = page.data('holdedCorner') || (goingBack ? 'tl' : 'tr');
		if (goingBack) {
			from = from || { x:0, y:0};
			to   = {
				x: book.pageWidth*2,
				y: (corner!='bl' ? 0 : this.pageHeight)
			};
		} else {
			from = from || { x:this.pageWidth, y:0},
			to   = {
				x: -book.pageWidth,
				y: (corner!='br' ? 0 : this.pageHeight)
			};
		}
		book.animateFoldPage(page, corner, from, to, function(){
			book.releasePage(page, false, back);
			book.showPage(pn, updateBrowserURL);
		}, !isHolded, back);

		return pageIndex;
	}, // gotoPage

	back : function(){
		return this.gotoPage(this.currentPage-2);
	}, // back

	advance : function(){
		return this.gotoPage(this.currentPage+2);
	}, // advance

	leftPage : function(pageIndex){
		var c = (pageIndex!==undefined)? pageIndex : this.currentPage;
		if (this.pageIsOnTheRight(c)) c--;
		return this.pages[c] || null;
	}, // leftPage

	rightPage : function(pageIndex){
		var c = (pageIndex!==undefined)? pageIndex : this.currentPage;
		if (this.pageIsOnTheLeft(c)) c++;
		return this.pages[c] || null;
	}, // rightPage

	pageIsOnTheRight : function(pageIndex) {
		return !(pageIndex%2);
	}, // pageIsOnTheRight

	pageIsOnTheLeft : function(pageIndex) {
		return !!(pageIndex%2);
	}, // pageIsOnTheLeft

	otherPage : function(pageIndex) {
		var p = pageIndex + (this.pageIsOnTheRight(pageIndex) ? -1 : 1);
		if (p<0 || p>this.pages.length-1) p=null;
		return p;
	},

	isOnPage:function(pageIndex) {
		return (typeof pageIndex==='number') &&
		       (pageIndex===this.currentPage || pageIndex===this.otherPage(this.currentPage));
	}, // isOnPage

	backPage: function(pageIndex) {
		var backPageIndex = pageIndex + (this.pageIsOnTheRight(pageIndex) ? 1 : -1);
		return this.pages[backPageIndex];
	}, // backPage

	pageType: function(pageIndex){
		var page;
		page = (typeof pageIndex==='number') ? this.pages[pageIndex] : pageIndex;
		return page.isHardPage ? "hard" :
		       page.find('.wowbook-page-content.wowbook-basic-page').length ? "basic" : "soft";
	},

	calculateOpacity : function(value, max, thresholdMin, thresholdMax) {
		if (value<=thresholdMin || value>=(max-thresholdMin) )  return 0;
		if (value>=thresholdMax && value<=(max-thresholdMax) )  return 1;
		var d=thresholdMax-thresholdMin;
		if (value > thresholdMax) value = max-value; // upper bands
		return (value-thresholdMin)/d;
	}, // calculateOpacity

	//
	//
	// Slideshow methods
	//
	//
	startSlideShow : function(){
		this.slideShowRunning = true;
		this.advanceAfterTimeout(this.slideShowDelay);
		$(this.opts.controls.slideShow).addClass('wowbook-disabled');
	}, // startSlideShow

	advanceAfterTimeout : function(delay){
		var book=this;
		this.slideShowTimer = setTimeout(function(){
			if (book.animating || book.holdedPage) { book.advanceAfterTimeout(100); return };
			book.advance();
			if (!book.isOnPage(book.pages.length-1))
				book.advanceAfterTimeout(book.slideShowDelay+book.turnPageDuration)
			else
				book.stopSlideShow();
		}, delay);
	}, // advanceAfterTimeout
	
	stopSlideShow : function(){
		clearTimeout( this.slideShowTimer );
		this.slideShowTimer = undefined;
		this.slideShowRunning = false;
		$(this.opts.controls.slideShow).removeClass('wowbook-disabled');
	}, // stopSlideShow

	//
	// toggleSlideShow
	//
	toggleSlideShow : function(){
		this.slideShowRunning ? this.stopSlideShow() : this.startSlideShow()
	}, // toggleSlideShow


	//
	//
	// Sections
	//
	//
	findSections : function(s){
		if (s) this.sectionDefinition = s;
		var sectionDef = this.sectionDefinition,
			sections = [],
		    section;

		if (typeof(sectionDef)==='string') {
			section  = sectionDef;
			sectionDef = [];
			$(section, this.elem).each(function(i,e){
				sectionDef.push([ '#'+e.id, $(e).html() ]);
			});
		}
		if ($.isArray(sectionDef)) {
			for(var i=0, l=sectionDef.length; i<l; i++) {
				section = sectionDef[i];
				if (typeof(section)==='string') {
					try { section = [section, $(section, this.elem).html()]; }
					catch(e) {
						this.log("Something wrong happened at the function 'findSections' (maybe you have passed a invalid jquery selector?) :<br/>&nbsp;&nbsp;"+e)
						continue;
					}
				}
				try { section[2] = this.selectorToPage(section[0]); } 
				catch(e){
						this.log("Something wrong happened at the function 'findSections' (maybe you have passed a invalid jquery selector?) :<br/>&nbsp;&nbsp;"+e)
					continue;
				}
				if (section[2]===undefined) continue;
				sections.push({ id: section[0], title: section[1], page: section[2] });
			}
			sections = sections.sort(function(a,b){ return a.page-b.page });
		}
		this.sections = sections;
		return sections;
	}, // findSections


	/*
	 * method pageToSection
	 * 
	 * returns the section that the given page belongs
	 * 
	 * params
	 * 		pageIndex : index of the page
	 * 
	 * returns
	 * 		an object containing the section info.
	 */
	pageToSection : function(pageIndex){
		var sections = this.sections,
			section;
		for(var i=0,l=sections.length; i<l; i++){
			if (sections[i].page > pageIndex) break;
			section=sections[i];
		}
		return section;
	},

	/*
	 * method currentSection
	 * 
	 * returns the section that is being showed in the book
	 * 
	 */
	currentSection : function(){
		return this.pageToSection(this.currentPage);
	}, // currentSection

	//
	// TOC
	//
	// Experimental, use at your own risk!
	//
	fillToc : function(element, template){
		var toc = $(element || this.opts.toc),
		    sections, section, item,
		    wrapper = '';
		if (toc.length===0) return;

		sections = this.sections;
		if (typeof(template)==='undefined') template = this.opts.tocTemplate;

		if (!template) {
			wrapper  = (toc.is('UL, OL')) ? '<li>' : '<div>';
			template = '<a href="${link}">${section}</a>';
		}

		for(var i=0, l=sections.length; i<l; i++) {
			section = sections[i];
			item = template.replace(/\$\{link\}/g, '#'+this.id+'/'+section.id.substr(1))
				.replace(/\$\{section\}/g, section.title )
				.replace(/\$\{page\}/g, section.page );
			$(item).appendTo(toc).wrap(wrapper);
		}
	}, // fillToc



	// Converts a windows.location.hash into a page index
	// that matches that hash
	// #bookid/numberX    => page index X
	// #bookid/elementID  => index of the page that contains element with id elementID
	// #bookid/elementID/numberX => index of the page that contains element with id elementID PLUS numberX
	locationHashToPage : function(hash, pqp) {
		if (hash===undefined) hash=window.location.hash;
		if (hash=='#'+this.id+"/") return 0;
		hash = hash.slice(1).split("/");
		if (hash[0]!==this.id) return;
		if (hash.length===1) return 0;
		var page = parseInt(hash[1]);
		if (!isNaN(page)) return Math.max(page-1, 0);
		page = this.selectorToPage('#'+hash[1]);
		if (page===undefined) return 0;
		if (!isNaN(hash[2])) page += Math.max(parseInt(hash[2])-1, 0);
		return +page;
	}, // locationHashToPage

	// Converts a page index into a windows.location.hash
	// without sections : page index X => #bookid/pageIndexX
	// with    section  : page index X => #bookid/sectionID/offset-page-in-the-section
	pageToLocationHash : function(pageIndex) {
		var hash    = '',
			offset  = pageIndex+1,
			section = this.pageToSection(pageIndex);
		if (section) {
			hash   += '/'+section.id.replace('#','');
			offset -= section.page;
		}
		if (offset>1) hash += '/'+offset;
		return '#'+this.id+( hash || '/');
	}, // pageToLocationHash

	// return the pageIndex that contains the jquery selector
	selectorToPage : function(selector) {
		var e=$(selector, this.elem).closest('.wowbook-page');
		if (e.length) return +e.data('pageIndex');
	}, // selectorToPage

	getLocationHash : function(){
		return window.location.hash.slice(1);
	}, // getLocationHash

	locationEndsInHash : function(href){
		if (href===undefined) href= window.location.href;
		return href.lastIndexOf("#")==href.length-1;
	}, // locationEndsInHash


	//
	// Zoom
	//
	zoom : function(level){
		for(var i=0,l=this.pages.length;i<l;i++) if (this.pages[i].data('holdedAt')) return;
		if (level<1) level=1;
		if (level>this.zoomMax) level=this.zoomMax;
		if (level===this.zoomLevel) return;
		this.zoomLevel = level;
		var book = this,
		    zoomWindow    = this.zoomWindow,
		    zoomedContent = this.zoomContent,
		    boundingBox   = $(this.zoomBoundingBox);
		var scale    = level,
			zcWidth  = book.pageWidth*2*scale,
			zcHeight = book.pageHeight*scale,
			bbWidth  = boundingBox.width(),
			bbHeight = boundingBox.height(),
			zwWidth  = Math.min(zcWidth,  bbWidth),
			zwHeight = Math.min(zcHeight, bbHeight),
			zwLeft   = (this.opts.width-zwWidth)/2,
			zwTop    = (this.opts.height-zwHeight)/2;

		zoomWindow.css({
			width  : zwWidth,
			height : zwHeight,
			left   : zwLeft,
			top    : zwTop
		});

		this.zoomContentOverflowed = (zcWidth>bbWidth) || (zcHeight>bbHeight);

		// make zoomWindow inside bounding box
		var zwo = zoomWindow.offset(),
		    bbo = boundingBox[0]!==window ? boundingBox.offset() : { left: boundingBox.scrollLeft(), top: boundingBox.scrollTop() };
		zwo.right  = zwo.left+zwWidth;
		zwo.bottom = zwo.top +zwHeight;
		bbo.right  = bbo.left+bbWidth;
		bbo.bottom = bbo.top +bbHeight;
		if (zwo.left   < bbo.left)   zoomWindow.css('left', zwLeft+(bbo.left-zwo.left) );
		if (zwo.right  > bbo.right)  zoomWindow.css('left', zwLeft+(bbo.right-zwo.right) );
		if (zwo.top    < bbo.top)    zoomWindow.css('top',  zwTop+(bbo.top-zwo.top) );
		if (zwo.bottom > bbo.bottom) zoomWindow.css('top',  zwTop+(bbo.bottom-zwo.bottom) );

		var zwo = zoomWindow.offset(),
			zco = zoomedContent.offset();
		zwo.right  = zwo.left+zwWidth;
		zwo.bottom = zwo.top +zwHeight;
		zco.right  = zco.left+zcWidth;
		zco.bottom = zco.top +zcHeight;
		if (zco.left   > zwo.left)   zoomedContent.css('marginLeft', 0 );
		if (zco.right  < zwo.right)  zoomedContent.css('marginLeft', (parseFloat(zoomedContent.css('marginLeft')) || 0)+(zwo.right-zco.right) );
		if (zco.top    > zwo.top)    zoomedContent.css('marginTop',  0 );
		if (zco.bottom < zwo.bottom) zoomedContent.css('marginTop',  (parseFloat(zoomedContent.css('marginTop')) || 0)+(zwo.bottom-zco.bottom) );
		if (zwWidth===zcWidth) zoomedContent.css('marginLeft', 0);
		if (zwHeight===zcHeight) zoomedContent.css('marginTop', 0);

		if ($.support.transform) {
			zoomedContent.css({
				transform: "scale("+level+")",
				transformOrigin : "0 0"
			})
		} else {
			zoomedContent.css('zoom', level);
		}
		if (this.zoomLevel===1) {
			zoomWindow.unbind('mousemove.wowbook').css({
				overflow : 'visible',
				left : 0,
				top  : 0
			});
			if (this.clipBoundaries) this.clipper.css('overflow', 'hidden');
			zoomedContent.css({
				marginLeft : 0,
				marginTop  : 0
			});
		} else {
			if (this.clipBoundaries) this.clipper.css('overflow', 'visible');
			zoomWindow.css('overflow', 'hidden');
			if (!this.zoomed) zoomWindow.bind('mousemove.wowbook', function(e){
				book.zoomedAt(e);
			});
		}
		this.zoomed = (level!==1);
		this.positionBookShadow();
		if (this.onZoom) this.onZoom(this);
	}, // zoom

	zoomIn : function(step){
		this.zoom(this.zoomLevel + (step || this.zoomStep));
	},

	zoomOut : function(step){
		this.zoom(this.zoomLevel - (step || this.zoomStep));
	},

	//
	// Positions the zoomed book inside the zoom window
	// according to x,y coordinates.
	// Given a event e containing coordinates pageX and pageY
	//
	zoomedAt : function(e){
		if (!this.zoomContentOverflowed) return;
		var level=this.zoomLevel,
			o = this.zoomWindow.offset(),
			x = e.pageX-o.left,
			y = e.pageY-o.top,
			zwWidth = this.zoomWindow.width(),
			zcWidth = this.pageWidth*2*level,
			dx = zcWidth-zwWidth,
			xp = x/zwWidth,
			zwHeight = this.zoomWindow.height(),
			zcHeight = this.pageHeight*level,
			dy = zcHeight-zwHeight,
			yp = y/zwHeight;
			adjust = $.browser.ie8 ? level : 1;
		this.zoomContent.css({
			marginLeft : -dx*xp/adjust,
			marginTop : -dy*yp/adjust
		});
	},

	//
	// Book Shadow
	//
	positionBookShadow : function(){
		var pageLength = this.pages.length,
		    show = !!(this.opts.bookShadow && !this.zoomed && pageLength && !(pageLength<3 && this.holdedPage));
		this.bookShadow.toggle(show);
		if (!show) return;

		var pw = this.pageWidth,
		    cp = this.currentPage,
		    bp = this.holdedPageBack && this.holdedPageBack.pageIndex,
		    bpOnLeft = bp && this.pageIsOnTheLeft(bp),
		    lp = cp>0, rp=this.rightPage(),
		    noPageOnLeft    = !lp || bp===0,
		    noPageOnRight   = !rp || (bp===pageLength-1 && bpOnLeft),
			onePageVisible  = noPageOnLeft != noPageOnRight;
		if (noPageOnLeft && noPageOnRight) { this.bookShadow.hide(); return; }

		this.bookShadow.css({
			left  : (noPageOnLeft ? pw : 0) + this.pagesContainer.position().left,
			width : onePageVisible ? pw : pw*2
		});
	}, // positionBookShadow


	//
	// Page flip sound
	//
	playFlipSound : function(){
		if (!this.flipSound) return;
		var c=this.opts.onPlayFlipSound;
		if ($.isFunction(c) && (c(this)===false)) return;
		if (this.audio && this.audio.play) this.audio.play();
	}, // playFlipSound

	createAudioPlayer : function(path, files){
		if (!path)  path  = this.opts.flipSoundPath;
		if (!files) files = this.opts.flipSoundFile;
		var srcs = [];
		for (var i=0, l=files.length; i<l; i++)
			srcs.push('<source src="'+path+files[i]+'">');
		return $('<audio preload>'+srcs.join('')+'</audio>')[0];
	}, // createAudioPlayer

	_untouch : function(e){
		return (e.originalEvent.touches && e.originalEvent.touches[0]) || e;
	},

	touchSupport:function(){
		var book=this;
		book.elem.bind('touchstart', function(e){
			var touches = e.originalEvent.touches;
			if (touches.length>1) return;
			book._touchStarted = {
				x         : touches[0].pageX,
				y         : touches[0].pageY,
				timestamp : e.originalEvent.timeStamp,
				inHandle  : $(e.target).hasClass('wowbook-handle')
			}
			if (book._touchStarted.inHandle) book.pageEdgeDragStart( book._untouch(e) );
		});
		$(document).bind('touchmove', function(e){
			if (!book._touchStarted) return;
			var touches = e.originalEvent.touches;
			book._touchEnded = {
				x         : touches[0].pageX,
				y         : touches[0].pageY,
				timestamp : e.originalEvent.timeStamp
			}
			if (book._touchStarted.inHandle) return book.pageEdgeDrag( book._untouch(e) );
			var dx = book._touchEnded.x-book._touchStarted.x;
			var dy = book._touchEnded.y-book._touchStarted.y;
			if (Math.abs(dx) > 20) e.preventDefault();
			e.preventDefault();
		});

		$(document).bind('touchend touchcancel', function(e){
			if (!book._touchStarted) return;
			var _touchStarted = book._touchStarted;
			book._touchStarted = null;
			if (_touchStarted.inHandle) return book.pageEdgeDragStop({ pageX: book._touchEnded.x });
			var dx = book._touchEnded.x-_touchStarted.x;
			var dy = book._touchEnded.y-_touchStarted.y;
			var dt = book._touchEnded.timestamp-_touchStarted.timestamp;
			if (Math.abs(dx)<20 || dt>200) return
			if (Math.abs(dx) > Math.abs(dy)) {
				if (dx<0) book.advance()
				else book.back()
				return false;
			}
		});
	}, // touchSupport

	//
	// Page edge drag
	//
	pageEdgeDragStart : function(e){
		if (this.animating || this.zoomed || (!$(e.target).hasClass('wowbook-handle'))) return false;
		var book = this,
		    o    = book.elem.offset();
		book.mouseDownAtLeft  = (e.pageX-o.left < book.pageWidth);
		book.pageGrabbed      = (book.mouseDownAtLeft ? book.leftPage() : book.rightPage());
		if (!book.pageGrabbed) return false;
		book.pageGrabbedOffset = book.pageGrabbed.offset();
		$(document)
		   .bind('mousemove.wowbook', function(e){ return book.pageEdgeDrag(e) })
		   .bind('mouseup.wowbook',   function(e){ return book.pageEdgeDragStop(e) });
		return false;
	}, // pageEdgeDragStart

	pageEdgeDrag : function(e){
		var x = e.pageX - this.pageGrabbedOffset.left,
		    y = e.pageY - this.pageGrabbedOffset.top;
		this.holdPage(this.pageGrabbed, x, y);
		return false;
	}, // pageEdgeDrag

	pageEdgeDragStop : function(e){
		var book = this,
		    o    = book.elem.offset(),
		    mouseUpAtLeft = (e.pageX-o.left < book.pageWidth);

		if (book.mouseDownAtLeft && !mouseUpAtLeft) {
			book.back();
		} else if (!book.mouseDownAtLeft && mouseUpAtLeft) {
			book.advance();
		} else {
			book.releasePage(book.pageGrabbed, true);
		}

		$(document).unbind('.wowbook');
	}, // pageEdgeDragStop

	//
	// Controls
	//
	controllify : function(controls){
		var book=this;
		$(controls.zoomIn   ).click( function(){ book.zoomIn();  return false });
		$(controls.zoomOut  ).click( function(){ book.zoomOut(); return false });
		$(controls.next     ).click( function(){ book.advance(); return false });
		$(controls.back     ).click( function(){ book.back();    return false });
		$(controls.first    ).click( function(){ book.gotoPage(0); return false });
		$(controls.last     ).click( function(){ book.gotoPage(book.pages.length-1); return false });
		$(controls.slideShow).click( function(){ book.toggleSlideShow(); return false });
	},

	log : function(msg){
		if (!this.opts.debug) return;
		var e=$("#wowbook_log");
		if (!e.length)
			e=$("<div/>", {
					id    : 'wowbook_log',
					style : "position: absolute; top:0; left:0; background: #F8F800; color:black; padding:1em;"
				}).appendTo("body");
		$("<div>", { html : msg }).appendTo(e);
	} // log

} // Book methods

//
// Defaults
//
$.wowBook.defaults = {
	width                 : 500,
	height                : 300,
	startPage             : 0,
	hardcovers            : false,
	hardPages             : false,
	centeredWhenClosed    : false,
	transparentPages      : false,

	use3d                 : true,
	perspective           : 2000,

	bookShadow            : true,
	gutterShadow          : true,
	shadowThreshold       : 20,
	shadows               : true,
	foldGradient          : true,
	foldGradientThreshold : 20,

	pageNumbers           : true,
	firstPageNumber       : 1,
	numberedPages         : false,

	deepLinking           : true,
	updateBrowserURL      : true,

	slideShow             : false,
	slideShowDelay        : 1000,
	pauseOnHover          : true,

	mouseWheel            : false,
	handleWidth           : false,
	handleClickDuration   : 300,
	turnPageDuration      : 1000,
	forceBasicPage        : false,
	sections              : '.wowbook-section',

	zoomLevel             : 1,
	zoomMax               : 2,
	zoomBoundingBox       : window,
	zoomStep              : 0.05,
	onZoom                : null,

	flipSound             : true,
	flipSoundFile         : ['page-flip.mp3', 'page-flip.ogg'],
	flipSoundPath         : './wow_book/sound/',
	onPlayFlipSound       : null,

	keyboardNavigation    : {
	                          back: 37,
	                          advance: 39
	                        },
	clipBoundaries        : true,
	controls              : {},
	onShowPage            : false,
	onHoldPage  	      : null,
	onReleasePage         : null
};

//
//  Utilities
//


// Are we using ie8 ? YES, i know it sucks, but there's a special case (aka bug)
// in ie8 that i did not find another way around  besides using browser detection.
$.browser.ie8 = ($.browser.msie && $.browser.version==8);

/*
 * rotatePoint
 * 
 * rotate a point{x,y}
 * 
 * params
 * 		point : object {x: number, y:number}
 * 		angle : number, angle in radians to rotate the point 
 */
function rotatePoint(point, angle) {
	var c=Math.cos(angle),s=Math.sin(angle);
	return { x : c*point.x - s*point.y,
	         y : s*point.x + c*point.y }
} // rotatePoint

// returns true if element elem is visible (inside the browser viewport)
function isInViewPort(elem) {
	var viewportHeight = $(window).height(),
		offset = elem.offset(),
		top    = $(window).scrollTop();
	return (offset.top>top) && (offset.top+elem.height() < top+viewportHeight);
} // isInViewPort


// set width and height of element. if CSS box-sizing is not supported,
// make manually the equivalent of CSS box-sizing: border-boxSizingBorderBox
function boxSizingBorderBox(elem, width, height) {
	var pw=0, ph=0;
	if (!$.support.boxSizing) {
		var bw = bordersWidth(elem);
		pw = parseFloat(elem.css('paddingLeft'))+parseFloat(elem.css('paddingRight'))+
			 bw.left+bw.right;
		ph = parseFloat(elem.css('paddingTop'))+parseFloat(elem.css('paddingBottom'))+
			 bw.top+bw.bottom;
	}
	elem.css('width', width-pw);
	elem.css('height', height-ph);
} // boxSizingBorderBox

//
// borderWidth for ie sometimes returns strings for border width
//
var damnIE = ($.browser.msie && $.browser.version<9) ? 1 : 0,
	borderWidths = { thin: 2-damnIE, medium: 4-damnIE, thick: 6-damnIE };

function bordersWidth(e) {
	var t;
	return {
        top    : (e.css('borderTopStyle')=='none' ? 0 : (borderWidths[t=e.css('borderTopWidth')] || parseFloat(t))),
        right  : (e.css('borderRightStyle')=='none' ? 0 : (borderWidths[t=e.css('borderRightWidth')] || parseFloat(t))),
        bottom : (e.css('borderBottomStyle')=='none' ? 0 : (borderWidths[t=e.css('borderBottomWidth')] || parseFloat(t))),
        left   : (e.css('borderLeftStyle')=='none' ? 0 : (borderWidths[t=e.css('borderLeftWidth')] || parseFloat(t)))
    };
};

})(jQuery);




/*! Copyright (c) 2011 Brandon Aaron (http://brandonaaron.net)
 * Licensed under the MIT License (LICENSE.txt).
 *
 * Thanks to: http://adomas.org/javascript-mouse-wheel/ for some pointers.
 * Thanks to: Mathias Bank(http://www.mathias-bank.de) for a scope bug fix.
 * Thanks to: Seamus Leahy for adding deltaX and deltaY
 *
 * Version: 3.0.6
 * 
 * Requires: 1.2.2+
 */

(function($) {

var types = ['DOMMouseScroll', 'mousewheel'];

if ($.event.fixHooks) {
    for ( var i=types.length; i; ) {
        $.event.fixHooks[ types[--i] ] = $.event.mouseHooks;
    }
}

$.event.special.mousewheel = {
    setup: function() {
        if ( this.addEventListener ) {
            for ( var i=types.length; i; ) {
                this.addEventListener( types[--i], handler, false );
            }
        } else {
            this.onmousewheel = handler;
        }
    },
    
    teardown: function() {
        if ( this.removeEventListener ) {
            for ( var i=types.length; i; ) {
                this.removeEventListener( types[--i], handler, false );
            }
        } else {
            this.onmousewheel = null;
        }
    }
};

$.fn.extend({
    mousewheel: function(fn) {
        return fn ? this.bind("mousewheel", fn) : this.trigger("mousewheel");
    },
    
    unmousewheel: function(fn) {
        return this.unbind("mousewheel", fn);
    }
});


function handler(event) {
    var orgEvent = event || window.event, args = [].slice.call( arguments, 1 ), delta = 0, returnValue = true, deltaX = 0, deltaY = 0;
    event = $.event.fix(orgEvent);
    event.type = "mousewheel";
    
    // Old school scrollwheel delta
    if ( orgEvent.wheelDelta ) { delta = orgEvent.wheelDelta/120; }
    if ( orgEvent.detail     ) { delta = -orgEvent.detail/3; }
    
    // New school multidimensional scroll (touchpads) deltas
    deltaY = delta;
    
    // Gecko
    if ( orgEvent.axis !== undefined && orgEvent.axis === orgEvent.HORIZONTAL_AXIS ) {
        deltaY = 0;
        deltaX = -1*delta;
    }
    
    // Webkit
    if ( orgEvent.wheelDeltaY !== undefined ) { deltaY = orgEvent.wheelDeltaY/120; }
    if ( orgEvent.wheelDeltaX !== undefined ) { deltaX = -1*orgEvent.wheelDeltaX/120; }
    
    // Add event and delta to the front of the arguments
    args.unshift(event, delta, deltaX, deltaY);
    
    return ($.event.dispatch || $.event.handle).apply(this, args);
}

})(jQuery);


//
// Hooks in jQuery for 'transform' and 'transformOrigin'
//
(function($){
	if (!$.cssHooks){
		alert("jQuery 1.4.3+ is needed for this plugin to work");
		return;
	}
	var div = document.createElement('div'),
	    prefixes = ['O', 'ms', 'Webkit', 'Moz'];

	// test different vendor prefixes of this property
	function checkSupportFor(propertyName) {
		if (propertyName in div.style) return $.support[propertyName] = propertyName;
		var i = prefixes.length,
			p,
			sufix = propertyName.charAt(0).toUpperCase() + propertyName.substr(1);
		while (i--) {
			p = prefixes[i]+sufix;
			if (p in div.style) return $.support[propertyName] = p;
		}
	} // checkSupportFor
	checkSupportFor('transform');
	checkSupportFor('transformOrigin');
	checkSupportFor('boxSizing');
	// dont know why border-box is not working on IE7, so:
	if ($.support.boxSizing && $.browser.msie && $.browser.version==7) $.support.boxSizing = false;

	div = null;

    if ($.support.transform && $.support.transform!=="transform" && !$.cssHooks.transform){
		$.cssHooks.transform = {
			get: function(elem, computed, extra){
				return $.css( elem, $.support.transform );
			},
			set: function(elem, value){
				elem.style[$.support.transform] = value;
			}
		};
	}
	if ($.support.transformOrigin && $.support.transformOrigin!=="transformOrigin" && !$.cssHooks.transformOrigin){
		$.cssHooks.transformOrigin = {
			get: function(elem, computed, extra){
				return $.css( elem, $.support.transformOrigin );
			},
			set: function(elem, value){
				elem.style[$.support.transformOrigin] = value;
			}
		};
	}

	// cssClasses : array
	$.wowBook.applyAlphaImageLoader = function(cssClasses) {
		var filename, i, l, classname,
		    style = '', 
		    part1 = "{background:none; filter : progid:DXImageTransform.Microsoft.AlphaImageLoader(src='",
		    part2 = "', sizingMethod='scale'); } ",
		    dummy = $("<div style='display:none'></div>").appendTo('body');
		for (i=0,l=cssClasses.length; i<l; i++){
			classname = cssClasses[i];
			dummy.addClass(classname);
			filename = dummy.css('background-image').match(/^url\("(.*)"\)$/);
			if (!filename) continue;
			style += '.'+classname+part1+filename[1]+part2;
			dummy.removeClass(classname);
		}
		$('body').append("<style>"+style+"</style>");
	} // applyAlphaImageLoader

})(jQuery);