$(function() {	
	
	//return self-defined object array.
	$.fn.ShadowSelect = function(cfg) {
		_shadowSelects = [];
		cfg = $.extend(true, {}, $.fn.ShadowSelect.default, cfg);
		
		this.each(function(index, selectDom) {
			var singleSelect = $.fn.ShadowSelect.init.apply(selectDom,[]);
			singleSelect.setStyle(cfg);
			_shadowSelects.push(singleSelect);
		});
		
		return _shadowSelects;		
	};	

	$.fn.ShadowSelect.default = {
		width: "150px",
		height: "30px",
		display: "inline-block",
		lineHeight: "1.2",
		maxHeight: "200px"		
	};


	$.fn.ShadowSelect.init = function() {

		var self = $(this),
			optionDoms,
			options = [],
			newSelectHtml = "<div class='shadow-select'>" +
								"<div class='shadow-select-input'></div>" +
								"<div class='shadow-select-sword'></div>" +
								"<div class='shadow-select-choice-list'>",
			newSelect;
		
		optionDoms = self.find("option");
		for (var i = 0, size = optionDoms.length; i < size; i++) {
			
			var text = optionDoms[i].text;
			newSelectHtml =  newSelectHtml + "<div class='shadow-select-option'>" + text + "</div>";
		}
		newSelectHtml += "</div></div>";
		newSelect = $(newSelectHtml).insertBefore(self);
		bindEvent(self, newSelect);
		self.hide();
		newSelect.children(".shadow-select-choice-list").hide();

		return {		
			getProtoSelect: function() { return self.get();},
			getShadowSelect: function() { return newSelect;},
			setStyle: setStyle,
			addOption: addOption,
			removeOption: removeOption,
			setValue: setValue,
			getValue: getValue
		};

	}
	
	var setStyle = function(cfg) {
		
		var self = this.getShadowSelect();
		if (cfg) {
			self.css("width", cfg.width);
			self.css("height", cfg.height);
			self.css("display", "inline-block");
			self.find(".shadow-select-input, .shadow-select-option").css("line-height", cfg.lineHeight) 
			self.children(".shadow-select-choice-list").css("max-height", cfg.maxHeight);
		}
	}
	
	var addOption = function(newOptionText, newOptionValue) {
		
		var dom = this.getProtoSelect(),
			select = this.getShadowSelect(),
			domOptions = $(dom).children("option");
		
		for (var i = 0, size = domOptions.length; i < size; i++) {
			
			if (domOptions[i].text() === newOptionText) {
				return false;
			}
		}
		if (newOptionValue) {
			$("<option value='" + newOptionValue + "'>" + newOptionText + "</option>").appendTo($(dom));			
		} else {
			$("<option>" + newOptionText + "</option>").appendTo($(dom));
		}		
		$("<div class='shadow-select-option'>" + newOptionText + "</div>" ).appendTo(select);
		return true;	
		
	}
	
	var removeOption = function(optionText) {
		
		var dom = this.getProtoSelect(),
			select = this.getShadowSelect(),
			domOptions = $(dom).children("option"),
			selectOptions = select.children(".shadow-select-option");
		
		for (var i = 0, size = domOptions.length; i < size; i++) {
			
			if (domOptions[i].text() === OptionText) {
				domOptions[i].remove();
			}
			if (selectOptions[i].text() === optionText) {
				selectOptions[i].remove();
			}
		}		
	};
	
	var setValue = function(value) {

		var dom = this.getProtoSelect(),
			select = this.getShadowSelect(),
			domOptions = $(dom).children("option");
		for (var i = 0, size = domOptions.length; i < size; i++) {
			if (domOptions[i].text === value) {
				$(dom).val(value);
				select.children(".shadow-select-input").text(value);
				return true;
			}
		}
		return false; 		
		
		
	}
	
	var getValue = function() {
	
		return this.getProtoSelect().value;
	
	};
	
	var bindEvent = function(protoSelect, shadowSelect) {
		
		$(".shadow-select-sword").on("click", function() {
			
			$(this).parent().children(".shadow-select-choice-list").show();
		});
		
		$(".shadow-select-option").on("click", function() {
			
			$(this).parent().parent().children(".shadow-select-input").text($(this).text());
			$(protoSelect.val($(this).text()));
			$(this).parent().hide();
			
		});
		
		$(document).click(function() {
			$(this).parent().children(".shadow-select-choice-list").hide();
		})
		
	}

});
	








