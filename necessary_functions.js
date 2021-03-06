
function getParamFromURL( name )
{
  name = name.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");
  var regexS = "[\?&]"+name+"=([^&#]*)";
  var regex = new RegExp( regexS );
  var results = regex.exec( window.location.href );
  if( results == null )
    return "";
  else
    return results[1];
}

function getSecs(){
	var totalPageTime = $('#totalPageTime');
	var tarrT = 0;
	var delayT = 10;
	setInterval(function() {
		tarrT = tarrT + delayT;
		totalPageTime.text(tarrT);
	}, delayT);
}

function updateTime(varName){
	d3.select(varName).node().value = d3.select("#totalPageTime").node().innerHTML;

}
// Modern Combo Box  Script
// copyright Stephen Chapman, 18th October 2008
// you may copy this script provided that you retain the copyright notice
// you should not need to alter the below code - http://jsfiddle.net/P39W5/
function combo(id, h, l) {
	var self = this;
	self.h = h;
	self.l = l;
	self.inp = document.getElementById(id);
	self.hasfocus = false;
	self.sel = -1;
	self.ul = self.inp.nextSibling;
	while (self.ul.nodeType == 3) self.ul = self.ul.nextSibling;
	self.ul.onmouseover = function() {
		self.ul.className = '';
	};
	self.ul.onmouseout = function() {
		self.ul.className = 'focused';
		if (!self.hasfocus) self.ul.style.display = 'none';
	};
	self.list = self.ul.getElementsByTagName('li');
	for (var i = self.list.length - 1; i >= 0; i--) {
		self.list[i].onclick = function() {
			self.inp.value = this.firstChild.data;
			self.rset(self);
		}
	}
	self.inp.onfocus = function() {
		self.ul.style.display = 'table-cell';
		self.ul.className = 'focused';
		self.hasfocus = true;
		self.sel = -1;
	};
	self.inp.onblur = function() {
		if (self.ul.className == 'focused') {
			self.rset(self);
		}
		self.ul.className = '';
		self.hasfocus = false;
	};
	self.inp.onkeyup = function(e) {
		var k = (e) ? e.keyCode : event.keyCode;
		if (k == 40 || k == 13) {
			if (self.sel == self.list.length - 1) {
				self.list[self.sel].style.backgroundColor = self.l;
				self.sel = -1;
			}
			if (self.sel > -1) self.list[self.sel].style.backgroundColor = self.l;
			self.inp.value = self.list[++self.sel].firstChild.data;
			self.list[self.sel].style.backgroundColor = self.h;
		} else if (k == 38 && self.sel > 0) {
			self.list[self.sel].style.backgroundColor = self.l;
			self.inp.value = self.list[--self.sel].firstChild.data;
			self.list[self.sel].style.backgroundColor = self.h;
		}
		return false;
	};
}
combo.prototype.rset = function(self) {
	self.ul.style.display = 'none';
	self.sel = -1;
	for (var i = self.list.length - 1; i >= 0; i--) {
		self.list[i].style.backgroundColor = self.l;
	}
	return false;
};
