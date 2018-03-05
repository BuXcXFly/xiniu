define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	var ifhid = -1;
	var Model = function(){
		this.callParent();
	};

	Model.prototype.col7Click = function(event){

	};

	Model.prototype.col8Click = function(event){

	};

	Model.prototype.inviteRowClick = function(event){

	};

	Model.prototype.row1Click = function(event){

	};

	Model.prototype.col17Click = function(event){

	};

	Model.prototype.row14Click = function(event){

	};

	Model.prototype.row16Click = function(event){

	};

	Model.prototype.row15Click = function(event){

	};

	Model.prototype.showhidBtnClick = function(event){

	};

	Model.prototype.changepasswordClick = function(event){
		ifhid = -ifhid;
			if(ifhid == 1){
				$(this.getElementByXid("hidRow")).show(199);
			}
			else {
				$(this.getElementByXid("hidRow")).hide(199);
			}

	};

	Model.prototype.modelLoad = function(event){
		$(this.getElementByXid("hidRow")).hide();
	};

	return Model;
});
