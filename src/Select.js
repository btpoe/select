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
			component: 'Select',
			valueClass: 'value'
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

			if (!(el.wrap = el.select.parent('.' + o.component )).length) {
				el.wrap = $('<div class="' + o.component + '">').insertAfter(el.select)
					.append(el.select);
			}
			if (!(el.value = el.select.siblings('.' + descendant('value') )).length) {
				el.value = $('<span class="' + descendant('value') + '">')
					.appendTo(el.wrap);
			}

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

		function descendant(selector) {
			return o.component + '-' + o[selector+'Class'];
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