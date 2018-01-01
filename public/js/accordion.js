$(function() {
	var Accordion = function(el, multiple) {
		this.el = el || {};
		this.multiple = multiple || false;

		// Variables privadas
		var links = this.el.find('.link');
		var submenu = this.el.find('.submenu li');
		// Evento
		links.on('click', {el: this.el, multiple: this.multiple, ms:false}, this.dropdown)
		submenu.on('click', {el: this.el, multiple: this.multiple, ms:true}, this.dropdown)
	}

	Accordion.prototype.dropdown = function(e) {
		var $el = e.data.el;
			$this = $(this),
			$next = $this.next();

		if(!e.data.ms){
			$next.slideToggle();
			$this.parent().toggleClass('open');

			if (!e.data.multiple) {
				$el.find('.submenu').not($next).slideUp().parent().removeClass('open');
			};
		}else{
			if(!$this.hasClass('active')){
				$this.parent().parent().parent().find("li").removeClass('active');
				$this.addClass('active');
				if($this.data().href){
				  urlLoad($this.data().href);
				}
			}
		}
	}	

	var accordion = new Accordion($('#accordion'), false);
});