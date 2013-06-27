(function( $ ){ 

	$.fn.wizard = function(options) {

		var settings = $.extend({
			defaultTitle : 'Step',
			nextClass: 'next',
			prevClass: 'previous',
			jumperClass: 'jump'
		}, options );

		this.each(function() {
			$(this).data('wizard', new Wizard(this, settings));
		});
		return this;
	}

	function Wizard(wizard, settings) {
		this.settings = settings;
		this.$wizard = $(wizard);
		this.createBreadcrumb();
		this.initEvents();
	}

	Wizard.prototype.initEvents = function() {
		var _this = this;
		this.$wizard.on('click', '.' + this.settings.nextClass, function(e) {
			e.stopPropagation();
			var $fieldset = $(this).closest('fieldset'),
				validation = $fieldset.data('validation');
			if (validation) {
				if (validation($fieldset)) {
					$nextFieldset = $fieldset.next('fieldset');
					_this.showFieldset($fieldset, $nextFieldset);
				}
			} else  {
				$nextFieldset = $fieldset.next('fieldset');
				_this.showFieldset($fieldset, $nextFieldset);
			}
			return false;
		});	

		this.$wizard.on('click', '.' + this.settings.prevClass, function(e) {
			e.stopPropagation();
			var $fieldset = $(this).closest('fieldset'),
			$prevFieldset = $fieldset.prev('fieldset');
			_this.showFieldset($fieldset, $prevFieldset);
			return false;
		});

		this.$wizard.on('click', 'a.' + this.settings.jumperClass, function(e) {
			var step = this.href.split('#')[1];
			e.stopPropagation();
			_this.showFieldset($('fieldset:visible'), $('fieldset:eq('+step+')'));
			return false;
		});

	};

	Wizard.prototype.createBreadcrumb = function() {
		var _this = this, 
		$fieldsets = this.$wizard.find('fieldset');
		this.$breadcrumb = $(document.createElement('ul')).addClass('breadcrumb');
		$fieldsets.each(function(i) {
			var $fieldset = $(this);
			var $li =  $(document.createElement('li'));
			if (i == 0) $li.addClass('active');
			var $value =  $(document.createElement('span')).addClass('value');
			if ($fieldset.find('legend').length) $value.text($fieldset.find('legend').text());
			else $value.text((i + 1) + '. ' + _this.settings.defaultTitle);
			$li.append($value);
			if (i < $fieldsets.length - 1 ) {
				var $divider =  $(document.createElement('span')).addClass('divider');
				$divider.append($(document.createElement('i')).addClass('icon-play'));
				$li.append($divider);
			}
			_this.$breadcrumb.append($li);				
		});
		$fieldsets.hide();
		this.$breadcrumb.insertBefore($fieldsets.first().show());
	};

	Wizard.prototype.showFieldset = function($oldFieldset, $newFieldset) {
		var _this = this;
		$oldFieldset.hide().trigger('hide');
		$newFieldset.show().trigger('show');		
		$('li.active', _this.$breadcrumb).removeClass('active').trigger('deactivate');
		$('li', _this.$breadcrumb).eq($('fieldset').index($newFieldset)).addClass('active').trigger('activate');
		$('li:not(.active)', _this.$breadcrumb).each(function() {
			var $this = $(this);
			if ($this.index() > $('fieldset').index($newFieldset)) {
				$('.value', $(this)).html($(this).text());	
				return true;
			}
			var link = $(document.createElement('a'))
				.addClass(_this.settings.jumperClass)
				.prop('href', '#' + $this.index())
				.append($('.value', $this).text());
			$('.value', $this).html(link);
		});
		$('li.active', _this.$breadcrumb).each(function() {
			$('.value', $(this)).html($(this).text());	
		});
	};

})( window.jQuery );

