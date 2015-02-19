;
(function ($) {

	function Select(wrap) {

		var select = this;
		select.el = $(wrap);

		var el = {
			dom: select.el.get(0),
			select: select.el
		};

		var o = {

		};

		select.init = function (options) {

			setProperties(options);

			if (el.dom.customSelect) {
				return el.dom.customSelect;
			}

			prepare();
			bindEvents();

			el.dom.customSelect = select;
			return el.dom.customSelect
		};

		function setProperties(options) {

			$.extend(o, options);

		}

		function prepare() {
			el.wrap = $('<div class="Select">');
			el.value = $('<span class="Select-value">');

			el.wrap
				.insertAfter(el.select)
				.append(el.select)
				.append(el.value);

			render();
		}

		function bindEvents() {

			var events = {
				change: function () {
					render();
				}
			};

			el.select.on('change.select', events.change);
		}

		function render() {
			el.value.html(el.select.find(':selected').html());
		}
	}

	$.fn.customSelect = function (options) {
		return this.each(function () {
			var opts = $(this).data('select');
			if (typeof opts === 'string') {
				opts = new Function('return {' + opts + '};')();
			}
			opts = $.extend({}, options, opts);
			return new Select(this).init(opts);
		});
	};

})(jQuery || Zepto);