<<<<<<< HEAD
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
=======
//构造时调用的函数
function select(selector_id) {
	
	var selector = $("#" + selector_id)[0];	
	var newSelector = createSelector(selector);
	selector.parentNode.insertBefore(newSelector, selector);
	addClass(selector, "hide");//将原有select元素隐藏
	addChooseListenerForSelector(selector, newSelector);
	
}

//参数为select元素，并根据select的option创建自定义select
function createSelector(selector) {
	
	
	var newSelector = document.createElement("div");
	addClass(newSelector, "selector");
	
	var inputContainer = document.createElement("div");
	addClass(inputContainer, "input_container");	
	
>>>>>>> ccb1fdd8a3aa284e4252bff7929b408ad706141a
		
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

<<<<<<< HEAD
		return {		
			getProtoSelect: function() { return self.get();},
			getShadowSelect: function() { return newSelect;},
			setStyle: setStyle,
			addOption: addOption,
			removeOption: removeOption,
			setValue: setValue,
			getValue: getValue
		};
=======
//事件监听与数据同步
function addChooseListenerForSelector(selector, newSelector) {
>>>>>>> ccb1fdd8a3aa284e4252bff7929b408ad706141a

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
		
<<<<<<< HEAD
		for (var i = 0, size = domOptions.length; i < size; i++) {
			
			if (domOptions[i].text() === OptionText) {
				domOptions[i].remove();
=======
		//同步原select元素的value
		var options = selector.getElementsByTagName("option");
		for (var i = 0; i < options.length; i++) {
			if(options[i].innerText.trim() == choice) {
				options[i].selected = true;
>>>>>>> ccb1fdd8a3aa284e4252bff7929b408ad706141a
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
		
<<<<<<< HEAD
=======
		removeClass(list, "fadeIn");
		addClass(list, "hide");
	
	}); 	
}
//改变select的value
function changeValue(selector, newValue) {
>>>>>>> ccb1fdd8a3aa284e4252bff7929b408ad706141a
		
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
	








