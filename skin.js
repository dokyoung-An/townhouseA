// Garden Gnome Software - Skin
// Pano2VR 7.0.6/20004
// Filename: ???? ??A.ggsk
// Generated 2023-11-14T11:17:51

function pano2vrSkin(player,base) {
	player.addVariable('vis_mobilemenu', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_mobiletype', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_hambegur', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_buttonbg', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_buttonbg_1', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_buttonbg_2', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_buttonbg_3', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_buttonbg_4', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_buttonbg_5', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_buttonbg_6', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_type1', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_type2', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_type3', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_mobilerotate', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_mobilement', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_sidebar', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_kor', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_typebutton', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_mobilecatagory', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_button', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_button2', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_eng', 2, false, { ignoreInState: 0  });
	var me=this;
	var skin=this;
	var flag=false;
	var nodeMarker=[];
	var activeNodeMarker=[];
	var hotspotTemplates={};
	var skinKeyPressed = 0;
	this.player=player;
	player.setApiVersion(7);
	this.player.skinObj=this;
	this.divSkin=player.divSkin;
	this.ggUserdata=player.userdata;
	this.lastSize={ w: -1,h: -1 };
	var basePath="";
	var cssPrefix="";
	// auto detect base path
	if (base=='?') {
		var scripts = document.getElementsByTagName('script');
		for(var i=0;i<scripts.length;i++) {
			var src=scripts[i].src;
			if (src.indexOf('skin.js')>=0) {
				var p=src.lastIndexOf('/');
				if (p>=0) {
					basePath=src.substr(0,p+1);
				}
			}
		}
	} else
	if (base) {
		basePath=base;
	}
	this.elementMouseDown={};
	this.elementMouseOver={};
	var i;
	var hs,el,els,elo,ela,elHorScrollFg,elHorScrollBg,elVertScrollFg,elVertScrollBg,elCornerBg;
	var prefixes='Webkit,Moz,O,ms,Ms'.split(',');
	for(var i=0;i<prefixes.length;i++) {
		if (typeof document.body.style[prefixes[i] + 'Transform'] !== 'undefined') {
			cssPrefix='-' + prefixes[i].toLowerCase() + '-';
		}
	}
	
	player.setMargins(0,0,0,0);
	
	this.updateSize=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdatePosition) {
				e.ggUpdatePosition();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	
	player.addListener('changenode', function() { me.ggUserdata=player.userdata; });
	
	var parameterToTransform=function(p) {
		return p.def + 'translate(' + p.rx + 'px,' + p.ry + 'px) rotate(' + p.a + 'deg) scale(' + p.sx + ',' + p.sy + ')';
	}
	
	this.findElements=function(id,regex) {
		var r=[];
		var stack=[];
		var pat=new RegExp(id,'');
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (regex) {
				if (pat.test(e.ggId)) r.push(e);
			} else {
				if (e.ggId==id) r.push(e);
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
		return r;
	}
	
	this._=function(text, params) {
		return player._(text, params);
	}
	
	this.languageChanged=function() {
		var stack=[];
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdateText) {
				e.ggUpdateText();
			}
			if (e.ggUpdateAria) {
				e.ggUpdateAria();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	player.addListener('sizechanged', function () { me.updateSize(me.divSkin);});
	player.addListener('languagechanged', this.languageChanged);
	
	this.addSkin=function() {
		var hs='';
		this.ggCurrentTime=new Date().getTime();
		el=me.__98=document.createElement('div');
		el.ggId="\ubaa8\ubc14\uc77c \uba54\ub274";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 49px;';
		hs+='left : 10px;';
		hs+='position : absolute;';
		hs+='top : 177px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__98.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__98.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('vis_mobilemenu') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__98.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__98.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__98.style.transition='left 500ms ease 0ms, top 500ms ease 0ms';
				if (me.__98.ggCurrentLogicStatePosition == 0) {
					me.__98.style.left='10px';
					me.__98.style.top='60px';
				}
				else {
					me.__98.style.left='10px';
					me.__98.style.top='177px';
				}
			}
		}
		me.__98.logicBlock_position();
		me.__98.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize().width <= 460))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateVisible = 1;
			}
			else if (
				((me.ggUserdata.tags.indexOf("opening") != -1))
			)
			{
				newLogicStateVisible = 2;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__98.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__98.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__98.style.transition='left 500ms ease 0ms, top 500ms ease 0ms';
				if (me.__98.ggCurrentLogicStateVisible == 0) {
					me.__98.style.visibility=(Number(me.__98.style.opacity)>0||!me.__98.style.opacity)?'inherit':'hidden';
					me.__98.ggVisible=true;
				}
				else if (me.__98.ggCurrentLogicStateVisible == 1) {
					me.__98.style.visibility=(Number(me.__98.style.opacity)>0||!me.__98.style.opacity)?'inherit':'hidden';
					me.__98.ggVisible=true;
				}
				else if (me.__98.ggCurrentLogicStateVisible == 2) {
					me.__98.style.visibility="hidden";
					me.__98.ggVisible=false;
				}
				else {
					me.__98.style.visibility="hidden";
					me.__98.ggVisible=false;
				}
			}
		}
		me.__98.logicBlock_visible();
		me.__98.ggUpdatePosition=function (useTransition) {
		}
		el=me.__99=document.createElement('div');
		el.ggId="\ubaa8\ubc14\uc77c\uba54\ub274 \ubc30\uacbd";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #000000;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 4px;';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__99.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__99.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.tags.indexOf("opening") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__99.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__99.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__99.style.transition='';
				if (me.__99.ggCurrentLogicStateVisible == 0) {
					me.__99.style.visibility="hidden";
					me.__99.ggVisible=false;
				}
				else {
					me.__99.style.visibility=(Number(me.__99.style.opacity)>0||!me.__99.style.opacity)?'inherit':'hidden';
					me.__99.ggVisible=true;
				}
			}
		}
		me.__99.logicBlock_visible();
		me.__99.onclick=function (e) {
			player.setVariableValue('vis_mobiletype', false);
			player.setVariableValue('vis_hambegur', false);
			player.setVariableValue('vis_mobilecatagory', !player.getVariableValue('vis_mobilecatagory'));
		}
		me.__99.ggUpdatePosition=function (useTransition) {
		}
		el=me._container_4=document.createElement('div');
		el.ggId="Container 4";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 40%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._container_4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._container_4.ggUpdatePosition=function (useTransition) {
		}
		el=me._location=document.createElement('div');
		els=me._location__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Location";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,0.784314);';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 9px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 8px 8px 4px 8px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._location.ggUpdateText=function() {
			var params = [];
			var hs = player._("<div class=\"ggmarkdown\"><p>Location<\/p>\n<div>", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._location.ggUpdateText();
		el.appendChild(els);
		me._location.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._location.ggUpdatePosition=function (useTransition) {
		}
		me._container_4.appendChild(me._location);
		el=me.__101=document.createElement('div');
		els=me.__101__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ubaa8\ubc14\uc77c \uce35\uc218";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 96.9388%;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 10px;';
		hs+='font-weight: inherit;';
		hs+='text-align: right;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 8px 8px 4px 8px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__101.ggUpdateText=function() {
			var params = [];
			var hs = player._("", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__101.ggUpdateText();
		el.appendChild(els);
		me.__101.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__101.ggUpdatePosition=function (useTransition) {
		}
		me._container_4.appendChild(me.__101);
		me.__99.appendChild(me._container_4);
		el=me._container_5=document.createElement('div');
		el.ggId="Container 5";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 0px;';
		hs+='height : 60%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._container_5.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._container_5.ggUpdatePosition=function (useTransition) {
		}
		el=me.__100=document.createElement('div');
		els=me.__100__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc704\uce58";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 11px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 4px 8px 4px 8px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__100.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.ggUserdata.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__100.ggUpdateText();
		player.addListener('changenode', function() {
			me.__100.ggUpdateText();
		});
		el.appendChild(els);
		me.__100.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__100.ggUpdatePosition=function (useTransition) {
		}
		me._container_5.appendChild(me.__100);
		el=me._image_11=document.createElement('div');
		els=me._image_11__img=document.createElement('img');
		els.className='ggskin ggskin_image_11';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAjtJREFUeF7tm2tSwzAMhKOT0Z4MOBm5mZhkmozrKH7q4Uf7F4aS3dV+sguwTP6CyZ9/+QgwfQIQ8WdiEVZ4CfA9qQjPvQMmFWEFgFOAx7Isf5Ol4AkA60mByVKwu78Z/oZBRMQZUgAA53P7AmxEGL0QfwHgJN9lERo8BWf0j6RTAoycgr343DEnV+FBC/Hi/qUEXWUGHIWL+zEBRhqFt+KLjsDxDaOkwMWej/ngcXiQLiCjf0sBXyFE3FbkbVXu8UUWX/IIDHBQCrofLEGPCD0WYtT9ZAFeSejtnBB1P1eAnlJwi70sChCF2EMKkqKfTIEOuyAp+kUCdECFLPezOsDZDlu+Pstyv0iAhlOQ7X6xAC1iMbTvh1bY4o/GGjsnJG'+
			'OvCoONYrEo+sUUaBCL2cWXdRiKHQGNR6HK/aoS9JJgtSFWuc8pgMU5obj4WEfAWZBUU1CKPVYKGBZidfRZKEBgUeP6rLr4REZAcUVmc5+tBBVHgdV9EQGEzwms7ksKIIFFFuyJUUD4nMAefREKCHYBe/TFBWCkgpj7Yh3gbIcc12di7osLwJACUfdVBKjBIte+HzrSF1+Jxe4JGApRBHtqGKzEonj0VShQkQLR4hM7DMXGIvH6TM19tRL0khC7OFFz30qA0DlBpfjMRsBZkMgUaGDPjAIJhagafXUKEFh0r89Ui898BIgV2cR9kxIkRuHr+O+NGEYlvq6yCod+cUR8+H/CLvGgdz/TXADNh6Xe6yOAtQPW7z99Av4BNvUOymgfMjYAAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 11";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 8px;';
		hs+='position : absolute;';
		hs+='right : 10px;';
		hs+='top : calc(50% - ((8px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 8px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_11.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_11.ggUpdatePosition=function (useTransition) {
		}
		me._container_5.appendChild(me._image_11);
		me.__99.appendChild(me._container_5);
		me.__98.appendChild(me.__99);
		me.divSkin.appendChild(me.__98);
		el=me.__96=document.createElement('div');
		el.ggId="\ubaa8\ubc14\uc77c \ubbf8\ub2c8\ub9f5";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100px;';
		hs+='left : 10px;';
		hs+='position : absolute;';
		hs+='top : 70px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__96.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__96.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getViewerSize().width <= 460))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__96.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__96.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__96.style.transition='';
				if (me.__96.ggCurrentLogicStateVisible == 0) {
					me.__96.style.visibility=(Number(me.__96.style.opacity)>0||!me.__96.style.opacity)?'inherit':'hidden';
					me.__96.ggVisible=true;
				}
				else if (me.__96.ggCurrentLogicStateVisible == 1) {
					me.__96.style.visibility=(Number(me.__96.style.opacity)>0||!me.__96.style.opacity)?'inherit':'hidden';
					me.__96.ggVisible=true;
				}
				else {
					me.__96.style.visibility="hidden";
					me.__96.ggVisible=false;
				}
			}
		}
		me.__96.logicBlock_visible();
		me.__96.ggUpdatePosition=function (useTransition) {
		}
		el=me.__97=document.createElement('div');
		el.ggId="\ubaa8\ubc14\uc77c \ud3c9\uba74\ub3c4 \ubc30\uacbd";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #000000;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 6px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__97.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__97.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.tags.indexOf("opening") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__97.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__97.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__97.style.transition='';
				if (me.__97.ggCurrentLogicStateVisible == 0) {
					me.__97.style.visibility="hidden";
					me.__97.ggVisible=false;
				}
				else {
					me.__97.style.visibility=(Number(me.__97.style.opacity)>0||!me.__97.style.opacity)?'inherit':'hidden';
					me.__97.ggVisible=true;
				}
			}
		}
		me.__97.logicBlock_visible();
		me.__97.ggUpdatePosition=function (useTransition) {
		}
		el=me.__mobile=document.createElement('div');
		el.ggId="\ud3c9\uba74\ub3c4 \ucee8\ud14c\uc774\ub108-mobile";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 72.2581%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((72.2581% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__mobile.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__mobile.ggUpdatePosition=function (useTransition) {
		}
		el=me._onmobile=document.createElement('div');
		el.ggId="\ud3c9\uba74\ub3c4on-mobile";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._onmobile.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._onmobile.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.tags.indexOf("1\uce35") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._onmobile.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._onmobile.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._onmobile.style.transition='';
				if (me._onmobile.ggCurrentLogicStateVisible == 0) {
					me._onmobile.style.visibility=(Number(me._onmobile.style.opacity)>0||!me._onmobile.style.opacity)?'inherit':'hidden';
					me._onmobile.ggVisible=true;
				}
				else {
					me._onmobile.style.visibility="hidden";
					me._onmobile.ggVisible=false;
				}
			}
		}
		me._onmobile.logicBlock_visible();
		me._onmobile.ggUpdatePosition=function (useTransition) {
		}
		el=me._map_1mobile=document.createElement('div');
		el.ggFilter = '';
		el.ggFilteredIds = [];
		el.ggMapNotLoaded = true;
		el.ggMapId = 'FloorPlan01';
		el.ggId="Map 1-mobile";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_map ";
		el.ggType='map';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._map_1mobile.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._map_1mobile.ggUpdateConditionResize=function () {
			var mapDetails = player.getMapDetails(me._map_1mobile.ggMapId);
			if (mapDetails.hasOwnProperty('title')) {
				me._map_1mobile.ggCalculateFloorplanSize(mapDetails);
				me._map_1mobile.ggShowSimpleFloorplan(mapDetails);
				me._map_1mobile.ggPlaceMarkersOnSimpleFloorplan();
			}
			if (me._map_1mobile.ggRadar) me._map_1mobile.ggRadar.update();
		}
		me._map_1mobile.ggUpdatePosition=function (useTransition) {
			for (var i=0; i < me._map_1mobile.ggMarkerInstances.length; i++) {
				me._map_1mobile.ggMarkerInstances[i].ggEvent_sizechanged();
			}
			me._map_1mobile.ggUpdateConditionResize();
		}
		me._onmobile.appendChild(me._map_1mobile);
		me.__mobile.appendChild(me._onmobile);
		el=me._offmobile=document.createElement('div');
		el.ggId="\ud3c9\uba74\ub3c4off-mobile";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._offmobile.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._offmobile.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.tags.indexOf("2\uce35") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._offmobile.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._offmobile.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._offmobile.style.transition='';
				if (me._offmobile.ggCurrentLogicStateVisible == 0) {
					me._offmobile.style.visibility=(Number(me._offmobile.style.opacity)>0||!me._offmobile.style.opacity)?'inherit':'hidden';
					me._offmobile.ggVisible=true;
				}
				else {
					me._offmobile.style.visibility="hidden";
					me._offmobile.ggVisible=false;
				}
			}
		}
		me._offmobile.logicBlock_visible();
		me._offmobile.ggUpdatePosition=function (useTransition) {
		}
		el=me._map_2mobile=document.createElement('div');
		el.ggFilter = '';
		el.ggFilteredIds = [];
		el.ggMapNotLoaded = true;
		el.ggMapId = 'FloorPlan02';
		el.ggId="Map 2-mobile";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_map ";
		el.ggType='map';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._map_2mobile.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._map_2mobile.ggUpdateConditionResize=function () {
			var mapDetails = player.getMapDetails(me._map_2mobile.ggMapId);
			if (mapDetails.hasOwnProperty('title')) {
				me._map_2mobile.ggCalculateFloorplanSize(mapDetails);
				me._map_2mobile.ggShowSimpleFloorplan(mapDetails);
				me._map_2mobile.ggPlaceMarkersOnSimpleFloorplan();
			}
			if (me._map_2mobile.ggRadar) me._map_2mobile.ggRadar.update();
		}
		me._map_2mobile.ggUpdatePosition=function (useTransition) {
			for (var i=0; i < me._map_2mobile.ggMarkerInstances.length; i++) {
				me._map_2mobile.ggMarkerInstances[i].ggEvent_sizechanged();
			}
			me._map_2mobile.ggUpdateConditionResize();
		}
		me._offmobile.appendChild(me._map_2mobile);
		me.__mobile.appendChild(me._offmobile);
		me.__97.appendChild(me.__mobile);
		me.__96.appendChild(me.__97);
		me.divSkin.appendChild(me.__96);
		el=me._markertemplate=document.createElement('div');
		el.ggMarkerNodeId='';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="markertemplate";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 49px;';
		hs+='position : absolute;';
		hs+='top : 12px;';
		hs+='visibility : hidden;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._markertemplate.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me._markertemplate.ggUpdatePosition=function (useTransition) {
			me._markertemplate__normalInst.ggEvent_sizechanged();
			me._markertemplate__activeInst.ggEvent_sizechanged();
		}
		me.divSkin.appendChild(me._markertemplate);
		el=me.__95=document.createElement('div');
		el.ggId="\uc548\ub0b4\uba58\ud2b8";
		el.ggDy=10;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 50%;';
		hs+='left : 25px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50% + 0px) / 2) + 10%);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		hs+='text-shawdow:2px 2px 2px rgba(0,0,0,0.5);';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__95.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__95.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 420))
			)
			{
				newLogicStateSize = 0;
			}
			else if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateSize = 1;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me.__95.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__95.ggCurrentLogicStateSize = newLogicStateSize;
				me.__95.style.transition='width 0s, height 0s';
				if (me.__95.ggCurrentLogicStateSize == 0) {
					me.__95.style.width='95%';
					me.__95.style.height='100%';
					me.__95.style.top = 'calc(50% - (100% / 2) + (0px / 2) + 10%)';
					skin.updateSize(me.__95);
				}
				else if (me.__95.ggCurrentLogicStateSize == 1) {
					me.__95.style.width='95%';
					me.__95.style.height='100%';
					me.__95.style.top = 'calc(50% - (100% / 2) + (0px / 2) + 10%)';
					skin.updateSize(me.__95);
				}
				else {
					me.__95.style.width='100%';
					me.__95.style.height='50%';
					me.__95.style.top = 'calc(50% - (50% / 2) + (0px / 2) + 10%)';
					skin.updateSize(me.__95);
				}
			}
		}
		me.__95.logicBlock_size();
		me.__95.ggUpdatePosition=function (useTransition) {
		}
		el=me.__611=document.createElement('div');
		els=me.__611__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc548\ub0b4\uba58\ud2b86";
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.8,sy:0.8,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='background : rgba(255,255,255,0);';
		hs+='border : 1px solid rgba(0,0,0,0);';
		hs+='bottom : 0%;';
		hs+='color : rgba(255,255,255,0.901961);';
		hs+='cursor : default;';
		hs+='height : 30%;';
		hs+='left : 0%;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 90%;';
		hs+='pointer-events:auto;';
		hs+='font-size:0.9em; word-break: keep-all;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='0% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 10px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre-line;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__611.ggUpdateText=function() {
			var params = [];
			var hs = player._("* \ubcf8 \ucf58\ud150\uce20\ub294 PC \uc0ac\uc6a9\uc744 \uad8c\uc7a5\ud569\ub2c8\ub2e4.\n* \ubcf8 \ucf58\ud150\uce20\ub294 \uc18c\ube44\uc790\uc758 \uc774\ud574\ub97c \ub3d5\uae30 \uc704\ud574 \uac00\uc0c1\uc73c\ub85c \uad6c\ud604\ud55c \uc138\ub300 VR\uc774\uba70, \ucf58\ud150\uce20 \ud2b9\uc131\uc0c1 \uc65c\uace1\ub41c \uc774\ubbf8\uc9c0\ub85c \uc778\ud574 \uc2e4\uc81c\uc640 \ub2ec\ub77c\ubcf4\uc77c \uc218 \uc788\uc2b5\ub2c8\ub2e4.\n* \ubcf8 \ucf58\ud150\uce20\ub294 \uc785\uc8fc\uc790\uc758 \uc774\ud574\ub97c \ub3d5\uae30 \uc704\ud55c \uac83\uc73c\ub85c \uc0c9\uc0c1 \ubc0f \uc7ac\uc9c8\uc774 \uc2e4\uc81c \uc2dc\uacf5\uacfc\ub294 \ucc28\uc774\uac00 \uc788\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4.\n* \ubcf8 \ucf58\ud150\uce20\ub294 \uc720\uc0c1\uc635\uc158 \ud488\ubaa9\uc774 \uc801\uc6a9\ub418\uc5c8\uace0, \uc2e4\uc81c \uc2dc\uacf5 \uc2dc \uc124\uce58\ub418\uc9c0 \uc54a\ub294 \uc804\uc2dc\ud488(\uac00\uad6c, \uc2e4\ub0b4\uc7a5\uc2dd\ud488 \ub4f1)\uc774 \ud3ec\ud568\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4. \uc790\uc138\ud55c \ub0b4\uc6a9\uc740 \uacf5\uae09\uc548\ub0b4\ubb38\uacfc \ub0b4\ubd80\ub9c8\uac10\uc7ac \ub0b4\uc5ed\uc744 \ucc38\uace0\ud558\uc2dc\uae30 \ubc14\ub78d\ub2c8\ub2e4", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__611.ggUpdateText();
		el.appendChild(els);
		me.__611.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__611.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getViewerSize().height <= 690))
			)
			{
				newLogicStatePosition = 0;
			}
			else if (
				((player.getViewerSize().width <= 460))
			)
			{
				newLogicStatePosition = 1;
			}
			else if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStatePosition = 2;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__611.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__611.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__611.style.transition='left 0s, bottom 0s, width 0s, height 0s, color 0s';
				if (me.__611.ggCurrentLogicStatePosition == 0) {
					me.__611.style.left='-2%';
					me.__611.style.bottom='20%';
				}
				else if (me.__611.ggCurrentLogicStatePosition == 1) {
					me.__611.style.left='-2%';
					me.__611.style.bottom='17%';
				}
				else if (me.__611.ggCurrentLogicStatePosition == 2) {
					me.__611.style.left='-2%';
					me.__611.style.bottom='17%';
				}
				else {
					me.__611.style.left='0%';
					me.__611.style.bottom='0%';
				}
			}
		}
		me.__611.logicBlock_position();
		me.__611.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getIsMobile() == true)) && 
				((player.getViewerSize().width <= 460))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me.__611.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__611.ggCurrentLogicStateSize = newLogicStateSize;
				me.__611.style.transition='left 0s, bottom 0s, width 0s, height 0s, color 0s';
				if (me.__611.ggCurrentLogicStateSize == 0) {
					me.__611.style.width='100%';
					me.__611.style.height='20%';
					skin.updateSize(me.__611);
				}
				else {
					me.__611.style.width='90%';
					me.__611.style.height='30%';
					skin.updateSize(me.__611);
				}
			}
		}
		me.__611.logicBlock_size();
		me.__611.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize().width <= 460))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__611.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__611.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__611.style.transition='left 0s, bottom 0s, width 0s, height 0s, color 0s';
				if (me.__611.ggCurrentLogicStateVisible == 0) {
					me.__611.style.visibility=(Number(me.__611.style.opacity)>0||!me.__611.style.opacity)?'inherit':'hidden';
					me.__611.ggVisible=true;
				}
				else if (me.__611.ggCurrentLogicStateVisible == 1) {
					me.__611.style.visibility=(Number(me.__611.style.opacity)>0||!me.__611.style.opacity)?'inherit':'hidden';
					me.__611.ggVisible=true;
				}
				else {
					me.__611.style.visibility="hidden";
					me.__611.ggVisible=false;
				}
			}
		}
		me.__611.logicBlock_visible();
		me.__611.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((me.ggUserdata.tags.indexOf("opening") != -1))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me.__611.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me.__611.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me.__611.style.transition='left 0s, bottom 0s, width 0s, height 0s, color 0s';
				if (me.__611.ggCurrentLogicStateTextColor == 0) {
					me.__611.style.color="rgba(34,34,34,1)";
				}
				else {
					me.__611.style.color="rgba(255,255,255,0.901961)";
				}
			}
		}
		me.__611.logicBlock_textcolor();
		me.__611.ggUpdatePosition=function (useTransition) {
		}
		me.__95.appendChild(me.__611);
		el=me.__pc=document.createElement('div');
		els=me.__pc__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc548\ub0b4\uba58\ud2b8 - pc";
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.8,sy:0.8,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='bottom : -18%;';
		hs+='color : rgba(255,255,255,0.901961);';
		hs+='height : auto;';
		hs+='left : 0%;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='font-size:0.9em;word-break: keep-all;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='0% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='background : rgba(255,255,255,0);';
		hs+='border : 0px solid rgba(0,0,0,0);';
		hs+='cursor : default;';
		hs+='font-size: 14px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='white-space: pre-line;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__pc.ggUpdateText=function() {
			var params = [];
			var hs = player._("* \ubcf8 \ucf58\ud150\uce20\ub294 PC \uc0ac\uc6a9\uc744 \uad8c\uc7a5\ud569\ub2c8\ub2e4.\n* \ubcf8 \ucf58\ud150\uce20\ub294 \uc18c\ube44\uc790\uc758 \uc774\ud574\ub97c \ub3d5\uae30 \uc704\ud574 \uac00\uc0c1\uc73c\ub85c \uad6c\ud604\ud55c \uc138\ub300 VR\uc774\uba70, \ucf58\ud150\uce20 \ud2b9\uc131\uc0c1 \uc65c\uace1\ub41c \uc774\ubbf8\uc9c0\ub85c \uc778\ud574 \uc2e4\uc81c\uc640 \ub2ec\ub77c\ubcf4\uc77c \uc218 \uc788\uc2b5\ub2c8\ub2e4.\n* \ubcf8 \ucf58\ud150\uce20\ub294 \uc785\uc8fc\uc790\uc758 \uc774\ud574\ub97c \ub3d5\uae30 \uc704\ud55c \uac83\uc73c\ub85c \uc0c9\uc0c1 \ubc0f \uc7ac\uc9c8\uc774 \uc2e4\uc81c \uc2dc\uacf5\uacfc\ub294 \ucc28\uc774\uac00 \uc788\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4.\n* \ubcf8 \ucf58\ud150\uce20\ub294 \uc720\uc0c1\uc635\uc158 \ud488\ubaa9\uc774 \uc801\uc6a9\ub418\uc5c8\uace0, \uc2e4\uc81c \uc2dc\uacf5 \uc2dc \uc124\uce58\ub418\uc9c0 \uc54a\ub294 \uc804\uc2dc\ud488(\uac00\uad6c, \uc2e4\ub0b4\uc7a5\uc2dd\ud488 \ub4f1)\uc774 \ud3ec\ud568\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4. \uc790\uc138\ud55c \ub0b4\uc6a9\uc740 \uacf5\uae09\uc548\ub0b4\ubb38\uacfc \ub0b4\ubd80\ub9c8\uac10\uc7ac \ub0b4\uc5ed\uc744 \ucc38\uace0\ud558\uc2dc\uae30 \ubc14\ub78d\ub2c8\ub2e4", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__pc.ggUpdateText();
		el.appendChild(els);
		me.__pc.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__pc.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((me.ggUserdata.tags.indexOf("opening") != -1))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__pc.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__pc.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__pc.style.transition='left 0s, bottom 0s, width 0s, height 0s, color 0s';
				if (me.__pc.ggCurrentLogicStatePosition == 0) {
					me.__pc.style.left='0%';
					me.__pc.style.bottom='-30%';
				}
				else {
					me.__pc.style.left='0%';
					me.__pc.style.bottom='-18%';
				}
			}
		}
		me.__pc.logicBlock_position();
		me.__pc.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getIsMobile() == true)) && 
				((player.getViewerSize().width <= 420))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me.__pc.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__pc.ggCurrentLogicStateSize = newLogicStateSize;
				me.__pc__text.style.transition='left 0s, bottom 0s, width 0s, height 0s, color 0s';
				if (me.__pc.ggCurrentLogicStateSize == 0) {
					me.__pc__text.style.width='100%';
					me.__pc__text.style.height='25%';
					skin.updateSize(me.__pc);
				}
				else {
					me.__pc__text.style.width='100%';
					me.__pc__text.style.height='auto';
					skin.updateSize(me.__pc);
				}
			}
		}
		me.__pc.logicBlock_size();
		me.__pc.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize().width <= 460))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__pc.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__pc.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__pc.style.transition='left 0s, bottom 0s, width 0s, height 0s, color 0s';
				if (me.__pc.ggCurrentLogicStateVisible == 0) {
					me.__pc.style.visibility="hidden";
					me.__pc.ggVisible=false;
				}
				else if (me.__pc.ggCurrentLogicStateVisible == 1) {
					me.__pc.style.visibility="hidden";
					me.__pc.ggVisible=false;
				}
				else {
					me.__pc.style.visibility=(Number(me.__pc.style.opacity)>0||!me.__pc.style.opacity)?'inherit':'hidden';
					me.__pc.ggVisible=true;
				}
			}
		}
		me.__pc.logicBlock_visible();
		me.__pc.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((me.ggUserdata.tags.indexOf("opening") != -1))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me.__pc.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me.__pc.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me.__pc__text.style.transition='left 0s, bottom 0s, width 0s, height 0s, color 0s';
				if (me.__pc.ggCurrentLogicStateTextColor == 0) {
					me.__pc.style.color="rgba(34,34,34,1)";
				}
				else {
					me.__pc.style.color="rgba(255,255,255,0.901961)";
				}
			}
		}
		me.__pc.logicBlock_textcolor();
		me.__pc.ggUpdatePosition=function (useTransition) {
		}
		me.__95.appendChild(me.__pc);
		me.divSkin.appendChild(me.__95);
		el=me.__73=document.createElement('div');
		el.ggId="\uc0ac\uc774\ub4dc\uc2a4\ud0a8";
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.75,sy:0.75,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 590px;';
		hs+='position : absolute;';
		hs+='right : 2.5%;';
		hs+='top : 15%;';
		hs+='visibility : inherit;';
		hs+='width : 85px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me.__73.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__73.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getViewerSize().width <= 1500))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__73.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__73.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__73.style.transition='right 0s, top 0s, width 0s, height 0s';
				if (me.__73.ggCurrentLogicStatePosition == 0) {
					me.__73.style.right='3%';
					me.__73.style.top='23%';
				}
				else {
					me.__73.style.right='2.5%';
					me.__73.style.top='15%';
				}
			}
		}
		me.__73.logicBlock_position();
		me.__73.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 1500))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me.__73.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__73.ggCurrentLogicStateSize = newLogicStateSize;
				me.__73.style.transition='right 0s, top 0s, width 0s, height 0s';
				if (me.__73.ggCurrentLogicStateSize == 0) {
					me.__73.style.width='68px';
					me.__73.style.height='465px';
					skin.updateSize(me.__73);
				}
				else {
					me.__73.style.width='85px';
					me.__73.style.height='590px';
					skin.updateSize(me.__73);
				}
			}
		}
		me.__73.logicBlock_size();
		me.__73.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize().width <= 460))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__73.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__73.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__73.style.transition='right 0s, top 0s, width 0s, height 0s';
				if (me.__73.ggCurrentLogicStateVisible == 0) {
					me.__73.style.visibility="hidden";
					me.__73.ggVisible=false;
				}
				else if (me.__73.ggCurrentLogicStateVisible == 1) {
					me.__73.style.visibility="hidden";
					me.__73.ggVisible=false;
				}
				else {
					me.__73.style.visibility=(Number(me.__73.style.opacity)>0||!me.__73.style.opacity)?'inherit':'hidden';
					me.__73.ggVisible=true;
				}
			}
		}
		me.__73.logicBlock_visible();
		me.__73.ggUpdatePosition=function (useTransition) {
		}
		el=me.__74=document.createElement('div');
		el.ggId="\uc0ac\uc774\ub4dc\uc2a4\ud0a8\ubc30\uacbd";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.392157);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 15px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__74.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__74.ggUpdatePosition=function (useTransition) {
		}
		el=me.__93=document.createElement('div');
		el.ggId="\uc0ac\uc774\ub4dc-\ubbf8\ub2c8\ub9f5";
		el.ggDx=-1;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 60px;';
		hs+='left : calc(50% - ((60px + 0px) / 2) - 1px);';
		hs+='position : absolute;';
		hs+='top : 20px;';
		hs+='visibility : inherit;';
		hs+='width : 60px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__93.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__93.ggUpdatePosition=function (useTransition) {
		}
		el=me.__511=document.createElement('div');
		el.ggId="\uc0ac\uc774\ub4dc\ubc84\ud2bc\ubc30\uacbd5";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #ffffff;';
		hs+='border-radius : 15px;';
		hs+='cursor : pointer;';
		hs+='height : 60px;';
		hs+='left : calc(50% - ((60px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((60px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 60px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__511.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__511.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 1470))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me.__511.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__511.ggCurrentLogicStateSize = newLogicStateSize;
				me.__511.style.transition='width 0s, height 0s, background-color 500ms ease 0ms';
				if (me.__511.ggCurrentLogicStateSize == 0) {
					me.__511.style.width='48px';
					me.__511.style.height='48px';
					me.__511.style.left = 'calc(50% - (48px / 2))';
					me.__511.style.top = 'calc(50% - (48px / 2))';
					skin.updateSize(me.__511);
				}
				else {
					me.__511.style.width='60px';
					me.__511.style.height='60px';
					me.__511.style.left = 'calc(50% - (60px / 2))';
					me.__511.style.top = 'calc(50% - (60px / 2))';
					skin.updateSize(me.__511);
				}
			}
		}
		me.__511.logicBlock_size();
		me.__511.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('vis_buttonbg_4') == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__511.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__511.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__511.style.transition='width 0s, height 0s, background-color 500ms ease 0ms';
				if (me.__511.ggCurrentLogicStateBackgroundColor == 0) {
					me.__511.style.backgroundColor="rgba(2,2,2,1)";
				}
				else {
					me.__511.style.backgroundColor="rgba(255,255,255,1)";
				}
			}
		}
		me.__511.logicBlock_backgroundcolor();
		me.__511.onclick=function (e) {
			player.setVariableValue('vis_buttonbg_4', !player.getVariableValue('vis_buttonbg_4'));
			me.__64.ggVisible = !me.__64.ggVisible;
			var flag=me.__64.ggVisible;
			me.__64.style.transition='none';
			me.__64.style.visibility=((flag)&&(Number(me.__64.style.opacity)>0||!me.__64.style.opacity))?'inherit':'hidden';
		}
		me.__511.onmouseover=function (e) {
			me.elementMouseOver['_511']=true;
			me.__94.logicBlock_visible();
		}
		me.__511.onmouseout=function (e) {
			me.elementMouseOver['_511']=false;
			me.__94.logicBlock_visible();
		}
		me.__511.ggCurrentLogicStateSize = -1;
		me.__511.ggCurrentLogicStateBackgroundColor = -1;
		me.__511.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['_511']) {
				me.elementMouseOver['_511']=true;
				me.__94.logicBlock_visible();
			}
		}
		me.__511.ggUpdatePosition=function (useTransition) {
		}
		el=me.__94=document.createElement('div');
		els=me.__94__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ubbf8\ub2c8\ub9f5\uc628\uc624\ud504";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #595959;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 5px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 46.67%;';
		hs+='left : -105px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((46.67% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 85px;';
		hs+='pointer-events:auto;';
		hs+='text-align:center;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 3px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__94.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ubbf8\ub2c8\ub9f5 OFF\n", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__94.ggUpdateText();
		el.appendChild(els);
		me.__94.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__94.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['_511'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__94.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__94.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__94.style.transition='';
				if (me.__94.ggCurrentLogicStateVisible == 0) {
					me.__94.style.visibility=(Number(me.__94.style.opacity)>0||!me.__94.style.opacity)?'inherit':'hidden';
					me.__94.ggVisible=true;
				}
				else {
					me.__94.style.visibility="hidden";
					me.__94.ggVisible=false;
				}
			}
		}
		me.__94.logicBlock_visible();
		me.__94.logicBlock_text = function() {
			var newLogicStateText;
			if (
				((player.getVariableValue('vis_buttonbg_4') == true))
			)
			{
				newLogicStateText = 0;
			}
			else {
				newLogicStateText = -1;
			}
			if (me.__94.ggCurrentLogicStateText != newLogicStateText) {
				me.__94.ggCurrentLogicStateText = newLogicStateText;
				me.__94.style.transition='';
				if (me.__94.ggCurrentLogicStateText == 0) {
					if (me.__94.ggUpdateText) {
					me.__94.ggUpdateText=function() {
						var params = [];
						var hs = player._("\ubbf8\ub2c8\ub9f5 ON", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me.__94.ggUpdateText();
					} else {
						if (me.__94.ggUpdatePosition) me.__94.ggUpdatePosition();
					}
				}
				else {
					if (me.__94.ggUpdateText) {
					me.__94.ggUpdateText=function() {
						var params = [];
						var hs = player._("\ubbf8\ub2c8\ub9f5 OFF\n", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me.__94.ggUpdateText();
					} else {
						if (me.__94.ggUpdatePosition) me.__94.ggUpdatePosition();
					}
				}
			}
		}
		me.__94.logicBlock_text();
		me.__94.ggUpdatePosition=function (useTransition) {
		}
		me.__511.appendChild(me.__94);
		el=me._img=document.createElement('div');
		els=me._img__img=document.createElement('img');
		els.className='ggskin ggskin_img';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAYxJREFUeF7tm2sSgjAMhMvJ1JOpJ1NPppMRnE6sNoHUyvDx15Kmax67AYa08WsYz3/fKA4DABABTwR0Clw7pcRe7Rvth7ZfTAHZ9NAJgEtKKXdyStEod97sl2oAABABpAA1gCIYVXaddugCtEF4AEQIJpgVTqiws4vUlqMFdJdBDBUGIqhB1CBqEDW4eTV4KzTUU63Jji1GDx4Nt72WHNXis+fmlJIU8G+DVBMP+LSnhZXpDZz+L14ukQsAX2AkAv6dCS7OgYoBUwT0ZIIA0BgBIoAaoGaO/yaHG2dAIgUsKfBLJuhlbtER4npFpgUVBgAnd/9ZBJRUmEUNflqTqzwhWpParNnURcurDjVgO0sNiGaCIo/lINNVC/vc6RyACL'+
			'+6dAEAIAJIAWoARZAuQBuEB0CERgRgghUBBBWOlnyZvdVpgWgsAGBtcpgICEaAFCAFDA9GJOpafq4WZVvmgzVbMnOUOeB0mT6bC067ZuYEgNpQVX7Xr93kDrmeCzQ7yUzDABAZATP/hPXf9gC2KRZQ3m8duAAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\ubbf8\ub2c8\ub9f5-img";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 50%;';
		hs+='left : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 50%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._img.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._img.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_buttonbg_4') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._img.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._img.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._img.style.transition='';
				if (me._img.ggCurrentLogicStateVisible == 0) {
					me._img.style.visibility="hidden";
					me._img.ggVisible=false;
				}
				else {
					me._img.style.visibility=(Number(me._img.style.opacity)>0||!me._img.style.opacity)?'inherit':'hidden';
					me._img.ggVisible=true;
				}
			}
		}
		me._img.logicBlock_visible();
		me._img.ggUpdatePosition=function (useTransition) {
		}
		me.__511.appendChild(me._img);
		el=me._image_6=document.createElement('div');
		els=me._image_6__img=document.createElement('img');
		els.className='ggskin ggskin_image_6';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAbpJREFUeF7tm2tygzAMhOWTtTlZm5M1PZk6aiFDFAM2yHEZPv+NLZuNHrvCJDn5SPb8qqpnxCHZAAA8IBsCt04h8e72jT7Hg/25ELillC49AFDVLxG5H3IM0aiz5OzncgAA4AGEADmAJBiVeWvsUAUog/AAiBBMECqMFkAMjdwBNTh0rGrI1NJc5HCGaNEPyDRFaYicviEiIt8+maSUPteSkapaCfONzbVl098/3ORrzWIRMe+dbaSWJsHsniUlyW9QefiI6RcAwAP2h0C3KhARA4cmQgDQGIHSKkAI9CJCjR3A7kE8tdz+lRYAgMYIlHrAK5lgFXOLxqfqikwjKgwANdz9lR7wpMIK1eCcYpyqPFNrv2pzzWZGXNWqQ4/Zm3'+
			'/v0LwKDBLZys84Ft1+emIHwG5+UpoEd2/kHsL6AwCABxAC5ACS4IAAVWCJ/FAGJwjAAx71+25+AhHq0RCBCv+9LttEhaPV3+FCAACCEcADjpYEgx2gT1t8TxUAgGAESnOAbdvyc7Uo29c1TaGq1qO0PuA4ij6bC8a9mTkDYPHazgCAv3ZzP1DVe4Fmj7HdMACEecD2P+H4K38A12AvbuazjaEAAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 6";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 50%;';
		hs+='left : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 50%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_6.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_6.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_buttonbg_4') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._image_6.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._image_6.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._image_6.style.transition='';
				if (me._image_6.ggCurrentLogicStateVisible == 0) {
					me._image_6.style.visibility=(Number(me._image_6.style.opacity)>0||!me._image_6.style.opacity)?'inherit':'hidden';
					me._image_6.ggVisible=true;
				}
				else {
					me._image_6.style.visibility="hidden";
					me._image_6.ggVisible=false;
				}
			}
		}
		me._image_6.logicBlock_visible();
		me._image_6.ggUpdatePosition=function (useTransition) {
		}
		me.__511.appendChild(me._image_6);
		me.__93.appendChild(me.__511);
		me.__74.appendChild(me.__93);
		el=me.__90=document.createElement('div');
		el.ggId="\uc0ac\uc774\ub4dc-\ud654\uc0b4\ud45c";
		el.ggDx=-1;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 60px;';
		hs+='left : calc(50% - ((60px + 0px) / 2) - 1px);';
		hs+='position : absolute;';
		hs+='top : 100px;';
		hs+='visibility : inherit;';
		hs+='width : 60px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__90.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__90.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getViewerSize().width <= 1470))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__90.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__90.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__90.style.transition='left 0s, top 0s';
				if (me.__90.ggCurrentLogicStatePosition == 0) {
					me.__90.style.left = 'calc(50% - (60px / 2) + (0px / 2) + -1px)';
					me.__90.style.top='80px';
				}
				else {
					me.__90.style.left='calc(50% - ((60px + 0px) / 2) - 1px)';
					me.__90.style.top='100px';
				}
			}
		}
		me.__90.logicBlock_position();
		me.__90.ggUpdatePosition=function (useTransition) {
		}
		el=me.__110=document.createElement('div');
		el.ggId="\uc0ac\uc774\ub4dc\ubc84\ud2bc\ubc30\uacbd1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #ffffff;';
		hs+='border-radius : 15px;';
		hs+='cursor : pointer;';
		hs+='height : 60px;';
		hs+='left : calc(50% - ((60px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((60px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 60px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__110.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__110.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 1470))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me.__110.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__110.ggCurrentLogicStateSize = newLogicStateSize;
				me.__110.style.transition='width 0s, height 0s, background-color 500ms ease 0ms';
				if (me.__110.ggCurrentLogicStateSize == 0) {
					me.__110.style.width='48px';
					me.__110.style.height='48px';
					me.__110.style.left = 'calc(50% - (48px / 2))';
					me.__110.style.top = 'calc(50% - (48px / 2))';
					skin.updateSize(me.__110);
				}
				else {
					me.__110.style.width='60px';
					me.__110.style.height='60px';
					me.__110.style.left = 'calc(50% - (60px / 2))';
					me.__110.style.top = 'calc(50% - (60px / 2))';
					skin.updateSize(me.__110);
				}
			}
		}
		me.__110.logicBlock_size();
		me.__110.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('vis_buttonbg') == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__110.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__110.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__110.style.transition='width 0s, height 0s, background-color 500ms ease 0ms';
				if (me.__110.ggCurrentLogicStateBackgroundColor == 0) {
					me.__110.style.backgroundColor="rgba(2,2,2,1)";
				}
				else {
					me.__110.style.backgroundColor="rgba(255,255,255,1)";
				}
			}
		}
		me.__110.logicBlock_backgroundcolor();
		me.__110.onclick=function (e) {
			player.setVariableValue('vis_buttonbg', !player.getVariableValue('vis_buttonbg'));
			var list=me.findElements("ht_node",true);
			while(list.length>0) {
				var e=list.pop();
				e.ggVisible = !e.ggVisible;
				var flag=e.ggVisible;
				e.style.transition='none';
				e.style.visibility=((flag)&&(Number(e.style.opacity)>0||!e.style.opacity))?'inherit':'hidden';
			}
		}
		me.__110.onmouseover=function (e) {
			me.elementMouseOver['_110']=true;
			me.__92.logicBlock_visible();
		}
		me.__110.onmouseout=function (e) {
			me.elementMouseOver['_110']=false;
			me.__92.logicBlock_visible();
		}
		me.__110.ggCurrentLogicStateSize = -1;
		me.__110.ggCurrentLogicStateBackgroundColor = -1;
		me.__110.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['_110']) {
				me.elementMouseOver['_110']=true;
				me.__92.logicBlock_visible();
			}
		}
		me.__110.ggUpdatePosition=function (useTransition) {
		}
		el=me.__92=document.createElement('div');
		els=me.__92__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ud654\uc0b4\ud45c\uc628\uc624\ud504";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #595959;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 5px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 46.67%;';
		hs+='left : -105px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((46.67% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 85px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__92.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ud654\uc0b4\ud45c\uc81c\uac70", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__92.ggUpdateText();
		el.appendChild(els);
		me.__92.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__92.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['_110'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__92.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__92.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__92.style.transition='';
				if (me.__92.ggCurrentLogicStateVisible == 0) {
					me.__92.style.visibility=(Number(me.__92.style.opacity)>0||!me.__92.style.opacity)?'inherit':'hidden';
					me.__92.ggVisible=true;
				}
				else {
					me.__92.style.visibility="hidden";
					me.__92.ggVisible=false;
				}
			}
		}
		me.__92.logicBlock_visible();
		me.__92.logicBlock_text = function() {
			var newLogicStateText;
			if (
				((player.getVariableValue('vis_buttonbg') == true))
			)
			{
				newLogicStateText = 0;
			}
			else {
				newLogicStateText = -1;
			}
			if (me.__92.ggCurrentLogicStateText != newLogicStateText) {
				me.__92.ggCurrentLogicStateText = newLogicStateText;
				me.__92.style.transition='';
				if (me.__92.ggCurrentLogicStateText == 0) {
					if (me.__92.ggUpdateText) {
					me.__92.ggUpdateText=function() {
						var params = [];
						var hs = player._("\ud654\uc0b4\ud45c\uc0bd\uc785", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me.__92.ggUpdateText();
					} else {
						if (me.__92.ggUpdatePosition) me.__92.ggUpdatePosition();
					}
				}
				else {
					if (me.__92.ggUpdateText) {
					me.__92.ggUpdateText=function() {
						var params = [];
						var hs = player._("\ud654\uc0b4\ud45c\uc81c\uac70", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me.__92.ggUpdateText();
					} else {
						if (me.__92.ggUpdatePosition) me.__92.ggUpdatePosition();
					}
				}
			}
		}
		me.__92.logicBlock_text();
		me.__92.ggUpdatePosition=function (useTransition) {
		}
		me.__110.appendChild(me.__92);
		el=me.__91=document.createElement('div');
		els=me.__91__img=document.createElement('img');
		els.className='ggskin ggskin__91';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAb9JREFUeF7tmm1ugzAMQM3J1p1s28m6m20yIlXG2sT4K5g4/yqB8Xuxkwi6wORjmZwfUkBWwOQGsgUmL4BcBLMFsgUmN5AtMHkB5C6QLTCwBT4B4GN7/hcA4G/3MaoC7gBw29F+A8C7t4ERAp7BF253Cd4CWvBDJHgKoMC7S/AScATeVYKHAA68mwRrARJ4FwmWAijwZdvDa1vDbHewEkCFRzAceCYYIsFCQA/+1WyiBDwZ7g9IdWWoV4K2AC58DakRg3yg1BSgmbhmrKYMLQEWCVvE/CdDQ4BlopaxVxlSAeYJbruD2cIoEeABX0rW7FlcAWYJNVYsk2dyBJgkQty31J99VIB6AkRws3PCEQFngFdfE6gCzgSvKoEi4Izwah'+
			'J6As4MryKhJSACvFjCKwGR4EUSngmICM+WsBcQGZ4loRZwBfjDEoqAK8FTJawfZIuAn8aRVP09HOP4y72lN7FLT0Bk+F4lrGxFQP2tvtx4BfiWhD8tgBeihLfttfSwPyxwa51wX90OD77eUZgQN/YlKSD2/MmzzwqQO4wdISsg9vzJs88KkDuMHSErIPb8ybPPCpA7jB0hKyD2/Mmz/wVtzXZBX1ApowAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\ud654\uc0b4\ud45c\uc544\uc774\ucf58";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 50%;';
		hs+='left : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 50%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__91.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__91.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_buttonbg') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__91.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__91.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__91.style.transition='';
				if (me.__91.ggCurrentLogicStateVisible == 0) {
					me.__91.style.visibility="hidden";
					me.__91.ggVisible=false;
				}
				else {
					me.__91.style.visibility=(Number(me.__91.style.opacity)>0||!me.__91.style.opacity)?'inherit':'hidden';
					me.__91.ggVisible=true;
				}
			}
		}
		me.__91.logicBlock_visible();
		me.__91.ggUpdatePosition=function (useTransition) {
		}
		me.__110.appendChild(me.__91);
		el=me._image_8=document.createElement('div');
		els=me._image_8__img=document.createElement('img');
		els.className='ggskin ggskin_image_8';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAcpJREFUeF7tmmt2wiAQRpmV1a6sdWV1Z/SQAzamJLzmhQz/PEdh7uUjGaPgFh+wOL8zAZaAxQ3YEVg8AHYRtCNgR2BxA3YEFg+A3QXsCEgdAe/9t3PuK65/B4Dwmn2IJMB7/+Ocux1oHwDwyW2AXcAJfOJml8AqoAAvIoFNQCU8uwQWAY3wrBLIBXTCs0kgFTAIzyKBTEAlfLrthdvi1SC7O5AIqIUHgEeg9t6HnkBEArqACvjsbkYJoTM8Nkj7ZKAnAVVAL/yeEGOOlm4STQBm4ZhzlWSgCKAomGLOnIxhAZSFUs6dZAwJ4CiQeo1uAdSFcV0YuwRwwicRVGs2C6AqpHS1jg1T7kHKUJ/QJEASnioJ1QI0wFNIqBKgCR5bQl'+
			'GARnhMCZcCNMNjSTgVMAM8hoSsgJngRyX8EzAj/IiEFwEzw/dKeAp4B/geCZuAd4JvkLD9IJsE+IteHP05XE3fj/Ge0sZCGDEBZwKmha9IwsaWBOx/q0+fnR6+IOHvCMQUBAkf8bG02B8WMKKfm+NwHJ58xe8CVAVpmdcEaNkJqTosAVLmtaxrCdCyE1J1WAKkzGtZ1xKgZSek6rAESJnXsq4lQMtOSNXxC3uZJ1B7VK1pAAAAAElFTkSuQmCC';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 8";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 50%;';
		hs+='left : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 50%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_8.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_8.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_buttonbg') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._image_8.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._image_8.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._image_8.style.transition='';
				if (me._image_8.ggCurrentLogicStateVisible == 0) {
					me._image_8.style.visibility=(Number(me._image_8.style.opacity)>0||!me._image_8.style.opacity)?'inherit':'hidden';
					me._image_8.ggVisible=true;
				}
				else {
					me._image_8.style.visibility="hidden";
					me._image_8.ggVisible=false;
				}
			}
		}
		me._image_8.logicBlock_visible();
		me._image_8.ggUpdatePosition=function (useTransition) {
		}
		me.__110.appendChild(me._image_8);
		me.__90.appendChild(me.__110);
		me.__74.appendChild(me.__90);
		el=me.__88=document.createElement('div');
		el.ggId="\uc0ac\uc774\ub4dc-\uc804\uccb4\ud654\uba74";
		el.ggDx=-1;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 60px;';
		hs+='left : calc(50% - ((60px + 0px) / 2) - 1px);';
		hs+='position : absolute;';
		hs+='top : 180px;';
		hs+='visibility : inherit;';
		hs+='width : 60px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__88.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__88.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getViewerSize().width <= 1470))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__88.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__88.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__88.style.transition='left 0s, top 0s';
				if (me.__88.ggCurrentLogicStatePosition == 0) {
					me.__88.style.left = 'calc(50% - (60px / 2) + (0px / 2) + -1px)';
					me.__88.style.top='140px';
				}
				else {
					me.__88.style.left='calc(50% - ((60px + 0px) / 2) - 1px)';
					me.__88.style.top='180px';
				}
			}
		}
		me.__88.logicBlock_position();
		me.__88.ggUpdatePosition=function (useTransition) {
		}
		el=me.__89=document.createElement('div');
		el.ggId="\uc804\uccb4\ud654\uba74\ubc30\uacbd";
		el.ggDx=1;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #ffffff;';
		hs+='border-radius : 15px;';
		hs+='cursor : pointer;';
		hs+='height : 60px;';
		hs+='left : calc(50% - ((60px + 0px) / 2) + 1px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((60px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 60px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__89.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__89.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 1470))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me.__89.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__89.ggCurrentLogicStateSize = newLogicStateSize;
				me.__89.style.transition='width 0s, height 0s, background-color 500ms ease 0ms';
				if (me.__89.ggCurrentLogicStateSize == 0) {
					me.__89.style.width='48px';
					me.__89.style.height='48px';
					me.__89.style.left = 'calc(50% - (48px / 2) + (0px / 2) + 1px)';
					me.__89.style.top = 'calc(50% - (48px / 2))';
					skin.updateSize(me.__89);
				}
				else {
					me.__89.style.width='60px';
					me.__89.style.height='60px';
					me.__89.style.left = 'calc(50% - (60px / 2) + (0px / 2) + 1px)';
					me.__89.style.top = 'calc(50% - (60px / 2))';
					skin.updateSize(me.__89);
				}
			}
		}
		me.__89.logicBlock_size();
		me.__89.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize().width <= 480))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__89.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__89.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__89.style.transition='width 0s, height 0s, background-color 500ms ease 0ms';
				if (me.__89.ggCurrentLogicStateVisible == 0) {
					me.__89.style.visibility="hidden";
					me.__89.ggVisible=false;
				}
				else if (me.__89.ggCurrentLogicStateVisible == 1) {
					me.__89.style.visibility="hidden";
					me.__89.ggVisible=false;
				}
				else {
					me.__89.style.visibility=(Number(me.__89.style.opacity)>0||!me.__89.style.opacity)?'inherit':'hidden';
					me.__89.ggVisible=true;
				}
			}
		}
		me.__89.logicBlock_visible();
		me.__89.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('vis_buttonbg_1') == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__89.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__89.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__89.style.transition='width 0s, height 0s, background-color 500ms ease 0ms';
				if (me.__89.ggCurrentLogicStateBackgroundColor == 0) {
					me.__89.style.backgroundColor="rgba(0,0,0,1)";
				}
				else {
					me.__89.style.backgroundColor="rgba(255,255,255,1)";
				}
			}
		}
		me.__89.logicBlock_backgroundcolor();
		me.__89.onclick=function (e) {
			player.setVariableValue('vis_buttonbg_1', !player.getVariableValue('vis_buttonbg_1'));
			player.toggleFullscreen();
		}
		me.__89.onmouseover=function (e) {
			me.elementMouseOver['_89']=true;
			me.__311.logicBlock_visible();
		}
		me.__89.onmouseout=function (e) {
			me.elementMouseOver['_89']=false;
			me.__311.logicBlock_visible();
		}
		me.__89.ggCurrentLogicStateSize = -1;
		me.__89.ggCurrentLogicStateVisible = -1;
		me.__89.ggCurrentLogicStateBackgroundColor = -1;
		me.__89.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['_89']) {
				me.elementMouseOver['_89']=true;
				me.__311.logicBlock_visible();
			}
		}
		me.__89.ggUpdatePosition=function (useTransition) {
		}
		el=me._on6=document.createElement('div');
		els=me._on6__img=document.createElement('img');
		els.className='ggskin ggskin_on6';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAA35JREFUeF7tWwFOBDEI7L1MfZn6MvVlGjbHptsDBtrttrveJSZGW9oZKAXK3dI//9wA/teU0vt9DP1ufT5TSh/KAJaDZPB0kvV9/5FEfqWUkCya/3OfrO0raQREN5xvXFrst8LQCMCbMI/ks1IiYkUFSQTULkCbkTZNZJLGaj5EAMnMPx7ta2s9kFAS0AKeFtWOQc2mNQtoIfRhjzkBCHypiZJlPrca+yT/JWAGljwkC/mH1bJyArRzajm3AJ4hQzWlrtbFBGgDpTM4BEnDotqRWbBZBJxZ8yVfkoIXK2ACJCeFYoQGpQyZWh7xDQHS+Z+RAOTcLEctKplBiuwM0ZO+qPcqjVzFt7MQgK7okjbJek9tAV7tMxHeCPI0FhCN/i'+
			'5HAGuWEy2UDF2WACLCcxwuS4AHPJEUJqAUPGMU6AWvEVD6kQVjmQ1StoayuhHhgQaeqz6lT9ByGM4iqVK0+JMZo72SYAs8AZVuCHcSNzsBCDyTVUayblzugQPs3guetkZWQD/hIzwrARHwTbpBBKDsCy2OymjS/N7gCdO6L4mA2pK4uxJrsNYTfI6LCFhuu72rwho2j1fuCV6KIMU4AMXYyORrraA3eC2EXrNBGlDzeuMlxPI1R4CHBFjlY5rMb2xewDzOet+zEhvtUSS6fj7eLIhIBPTOB47SPJMQqgj1DpOPBg+PwJFF0RHgpyFgFPgpCBgJfjgBo8EPJWAG8N0IyONrqa9nFvBEQHnVm2+D3kBEFHq/eGvBc26vNjY1REP5njbP47XXoPaoWgs+l+dVQpQPMR3ekwDauFRHQICkaNSTRUYJ2IxvfRz1JlAIvHRG'+
			'6W+XIMAD/rIEeMFflgA+b57M8ggfwNf2w8PInk5Qc0rIGnoT0CUO8DpBJsWqDPUmIFQPQNqyigyaBaBjcEoCNOdVkrCWoY1L+7QENAUi2eQnAcL3APYMhLr4gL20f0Qc8CRAyFGmapPr7QPEzLU1GTrTEQg1S3vjgLMQoD78WO3ye3pgD1G9Ota1LtPN67DkIY+0Au1tEjVwIGKtJutFNi9g9eLWdHmgjeX/17pQPF/EtNaxultW2TnDkUbECMDasZr2o63z5fobYvNFoh3ZtcA88yzttygKfnGSNteygAccGoOcb40FqMmYZWa0Ueq7a+0UQ4DZx6xVGjRBeOSQprBcs/W31cs69jr3kD841VBQNZZoNwAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\uc804\uccb4\ud654\uba74ON";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='height : 50%;';
		hs+='left : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 50%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._on6.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._on6.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_buttonbg_1') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._on6.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._on6.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._on6.style.transition='';
				if (me._on6.ggCurrentLogicStateVisible == 0) {
					me._on6.style.visibility="hidden";
					me._on6.ggVisible=false;
				}
				else {
					me._on6.style.visibility=(Number(me._on6.style.opacity)>0||!me._on6.style.opacity)?'inherit':'hidden';
					me._on6.ggVisible=true;
				}
			}
		}
		me._on6.logicBlock_visible();
		me._on6.ggUpdatePosition=function (useTransition) {
		}
		me.__89.appendChild(me._on6);
		el=me._off0=document.createElement('div');
		els=me._off0__img=document.createElement('img');
		els.className='ggskin ggskin_off0';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAA69JREFUeF7tWwly3SAMhZO1OVmakzU5GRl5wMFYK4vBzv8znWlrDLwnoQ3Zu1/+8xz+EMJf59x7HAN/534f3vt/2IBsHmmO9PqHc+7Te/9JzPffOSfNBe9+wfvUvrZnnTa8bxxbLIQQKhQNCHgr3wshAMlJKJZpUQGdCGhYADZz2nSUPkis5vdWakEIQSN9aq0TCQcCGsHDoijLlZumNABUv5bQ0x53AhTg0fOYUQ3gyTFx/j8GNSDnU8wl2Ydds3ICqHNKGjcDmClDGaHu2rURwAw8ncEpSBoWZWzQho0j4LaSV3qOTQsSASfL6r1nY4QGoUx5FXHFBwJO539FAqI6kwQKRhgVctKAkgDUBU0RXVzU4ErVrhiEfAsCFC76IB'+
			'tMezEC70SANfpTRZB3IsAa/T2LgKTf8SjAP6Vk6JkExKBNcxyeSYDBE5gJKFldLgo0gAdFwQgo7ciGscwGIVtjs7oZsQADPlV9SpuA5jBZFvmVCjfLh7sceIjliWRHncQtTYAEPvMOh0jWEsYvS4AWfPQMcL7hj/kIL0mABXyrTdKUxavX4LIzatLR4MFm5PvCqsLpLkCqq2mJUbvUkeCLuwnwHpu3610VpkgRrfJI8EQEicYBUoytlXo5jtWC0eCpEHrPBuOAmtsbFSGcW7oCvEgAVz6OCLc7toofeb8nJDbdK1JSQQS7b1MbrwpioBRPZXXdwWs04NKi6NXgawgYIoWr1T7XTOkIXFIVniH5LF+YWxafCX76EZgNfioBK4AfRkARX5/6elYBHwkoXT17N6jyAkgAtb9XCz6SChkb2nBVE3MQhvBwPV7lBbDmJwh7'+
			'G8Dn+1AJwUoImg5TV8fS5ET3F6SaWCrNAiLCcTGLlPYoPW+6HDW0v4nSfDIBInjCSMF/314DVOCfTEA6gmJmecURyNz28WKksxGk7M5UI0i57KuM4EaKUBnCahLdbMCQbNB4YSnVBe9HAGO8ymOwl6Gp8zHaBgzRACnIsDx/EYB/B7C2DbBIWBr70oCXBqCfwvQ8AmjluykOkNTa8vyCI4Cm/L+CAILcn8tRIqDppn4aTaCKK5p3uTHMBxMiAepMrsMm0U/hLL0+2B64Jus0dzoCXC+u9LFUK36qEUPzISa3Ntfgsc+d9wlqWlBbwarfp6RvbZ1HFjwQmxNg7chWg6kYyEm/RVD8h5MxuWlZoALr6RXW+FZqAJmMUd8Op5o89N31apYiCyXxwV6lkVhUkpBsF9v6u2SfoERAz+ffZDNybuBVgbAAAAAASUVORK5CYI'+
			'I=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\uc804\uccb4\ud654\uba74OFF";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='height : 50%;';
		hs+='left : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 50%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._off0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._off0.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_buttonbg_1') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._off0.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._off0.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._off0.style.transition='';
				if (me._off0.ggCurrentLogicStateVisible == 0) {
					me._off0.style.visibility=(Number(me._off0.style.opacity)>0||!me._off0.style.opacity)?'inherit':'hidden';
					me._off0.ggVisible=true;
				}
				else {
					me._off0.style.visibility="hidden";
					me._off0.ggVisible=false;
				}
			}
		}
		me._off0.logicBlock_visible();
		me._off0.ggUpdatePosition=function (useTransition) {
		}
		me.__89.appendChild(me._off0);
		el=me.__311=document.createElement('div');
		els=me.__311__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ubcf5\ub3c43\uc628";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #595959;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 5px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 46.67%;';
		hs+='left : -105px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((46.67% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 85px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me.__311.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc804\uccb4\ud654\uba74", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__311.ggUpdateText();
		el.appendChild(els);
		me.__311.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__311.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['_89'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__311.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__311.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__311.style.transition='';
				if (me.__311.ggCurrentLogicStateVisible == 0) {
					me.__311.style.visibility=(Number(me.__311.style.opacity)>0||!me.__311.style.opacity)?'inherit':'hidden';
					me.__311.ggVisible=true;
				}
				else {
					me.__311.style.visibility="hidden";
					me.__311.ggVisible=false;
				}
			}
		}
		me.__311.logicBlock_visible();
		me.__311.ggUpdatePosition=function (useTransition) {
		}
		me.__89.appendChild(me.__311);
		me.__88.appendChild(me.__89);
		me.__74.appendChild(me.__88);
		el=me.__85=document.createElement('div');
		el.ggId="\uc0ac\uc774\ub4dc-\uc790\ub3d9\ud68c\uc804";
		el.ggDx=-1;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 60px;';
		hs+='left : calc(50% - ((60px + 0px) / 2) - 1px);';
		hs+='position : absolute;';
		hs+='top : 260px;';
		hs+='visibility : inherit;';
		hs+='width : 60px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__85.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__85.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getViewerSize().width <= 1470))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__85.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__85.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__85.style.transition='left 0s, top 0s';
				if (me.__85.ggCurrentLogicStatePosition == 0) {
					me.__85.style.left = 'calc(50% - (60px / 2) + (0px / 2) + -1px)';
					me.__85.style.top='200px';
				}
				else {
					me.__85.style.left='calc(50% - ((60px + 0px) / 2) - 1px)';
					me.__85.style.top='260px';
				}
			}
		}
		me.__85.logicBlock_position();
		me.__85.ggUpdatePosition=function (useTransition) {
		}
		el=me.__310=document.createElement('div');
		el.ggId="\uc0ac\uc774\ub4dc\ubc84\ud2bc\ubc30\uacbd3";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #ffffff;';
		hs+='border-radius : 15px;';
		hs+='cursor : pointer;';
		hs+='height : 60px;';
		hs+='left : calc(50% - ((60px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((60px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 60px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__310.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__310.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 1470))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me.__310.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__310.ggCurrentLogicStateSize = newLogicStateSize;
				me.__310.style.transition='width 0s, height 0s, background-color 500ms ease 0ms';
				if (me.__310.ggCurrentLogicStateSize == 0) {
					me.__310.style.width='48px';
					me.__310.style.height='48px';
					me.__310.style.left = 'calc(50% - (48px / 2))';
					me.__310.style.top = 'calc(50% - (48px / 2))';
					skin.updateSize(me.__310);
				}
				else {
					me.__310.style.width='60px';
					me.__310.style.height='60px';
					me.__310.style.left = 'calc(50% - (60px / 2))';
					me.__310.style.top = 'calc(50% - (60px / 2))';
					skin.updateSize(me.__310);
				}
			}
		}
		me.__310.logicBlock_size();
		me.__310.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('vis_buttonbg_2') == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__310.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__310.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__310.style.transition='width 0s, height 0s, background-color 500ms ease 0ms';
				if (me.__310.ggCurrentLogicStateBackgroundColor == 0) {
					me.__310.style.backgroundColor="rgba(0,0,0,1)";
				}
				else {
					me.__310.style.backgroundColor="rgba(255,255,255,1)";
				}
			}
		}
		me.__310.logicBlock_backgroundcolor();
		me.__310.onclick=function (e) {
			player.setVariableValue('vis_buttonbg_2', !player.getVariableValue('vis_buttonbg_2'));
			player.toggleAutorotate();
		}
		me.__310.onmouseover=function (e) {
			me.elementMouseOver['_310']=true;
			me.__87.logicBlock_visible();
		}
		me.__310.onmouseout=function (e) {
			me.elementMouseOver['_310']=false;
			me.__87.logicBlock_visible();
		}
		me.__310.ggCurrentLogicStateSize = -1;
		me.__310.ggCurrentLogicStateBackgroundColor = -1;
		me.__310.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['_310']) {
				me.elementMouseOver['_310']=true;
				me.__87.logicBlock_visible();
			}
		}
		me.__310.ggUpdatePosition=function (useTransition) {
		}
		el=me.__87=document.createElement('div');
		els=me.__87__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc635\uc158\uc628\uc624\ud504\uba58\ud2b8";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #595959;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 5px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 46.67%;';
		hs+='left : -105px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((46.67% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 85px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me.__87.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc790\ub3d9\ud68c\uc804", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__87.ggUpdateText();
		el.appendChild(els);
		me.__87.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__87.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['_310'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__87.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__87.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__87.style.transition='';
				if (me.__87.ggCurrentLogicStateVisible == 0) {
					me.__87.style.visibility=(Number(me.__87.style.opacity)>0||!me.__87.style.opacity)?'inherit':'hidden';
					me.__87.ggVisible=true;
				}
				else {
					me.__87.style.visibility="hidden";
					me.__87.ggVisible=false;
				}
			}
		}
		me.__87.logicBlock_visible();
		me.__87.logicBlock_text = function() {
			var newLogicStateText;
			if (
				((player.getVariableValue('vis_buttonbg_2') == true))
			)
			{
				newLogicStateText = 0;
			}
			else {
				newLogicStateText = -1;
			}
			if (me.__87.ggCurrentLogicStateText != newLogicStateText) {
				me.__87.ggCurrentLogicStateText = newLogicStateText;
				me.__87.style.transition='';
				if (me.__87.ggCurrentLogicStateText == 0) {
					if (me.__87.ggUpdateText) {
					me.__87.ggUpdateText=function() {
						var params = [];
						var hs = player._("\ud68c\uc804\uba48\ucda4", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me.__87.ggUpdateText();
					} else {
						if (me.__87.ggUpdatePosition) me.__87.ggUpdatePosition();
					}
				}
				else {
					if (me.__87.ggUpdateText) {
					me.__87.ggUpdateText=function() {
						var params = [];
						var hs = player._("\uc790\ub3d9\ud68c\uc804", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me.__87.ggUpdateText();
					} else {
						if (me.__87.ggUpdatePosition) me.__87.ggUpdatePosition();
					}
				}
			}
		}
		me.__87.logicBlock_text();
		me.__87.ggUpdatePosition=function (useTransition) {
		}
		me.__310.appendChild(me.__87);
		el=me.__86=document.createElement('div');
		els=me.__86__img=document.createElement('img');
		els.className='ggskin ggskin__86';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAABHBJREFUeF7lm7uqFEEQhv/NjUw1FIx8ARMVvIAX1MTQWFFMzgOoGAuCtzfQwEANFETwEhuJYCCGmpr4AEqtU4fe3u6uS9fM7OImh7Mz3VP/13WbntkF/vPPYiL9t7LrHBn+Pzr8/ZAc/5h8l34/iqljAmDRNzstJwi3C6A6p/03PBpAlOiaOIYR5hlRAMYWngMJAxEBgMT3urnXnbtB9ACYU3gOjHJEnmhVUL0ANkk8CyVvOJaopgrzfvi/CsgDgCbl8qWinJxERnKZo685mfF8eXm0zk/nMwQWz3MUtVoApEQthnEJs7ooXY9yixd2bmMXAI94d1wW6EbAKNqj8QCr+EjhOYseEG4A2pgfU3gOQmtTOi5PkqpOUHuhKcWzKE'+
			'8lWvP4VghoL0BZN6w1tWTXofZbmjA1AG3czylea2PKdM1Tax6gcf1tE08gVAA0ZOeI+XQlNQtUiqa1RFjyAGnyucWTMG1+KkFY0ZwD0Ky+pncw5jLX6dJC1SZtApAmnTPua4K4OaLjmrZ5xYPz1fzTWItiI+Fau/EGaWBUAUjuv4mr30JZg7GiI/UAyf03JfY9/kMwODxW7kpTUdvu/h4wu7vCU7r/AQCnANDmx2EA+wB8A/AVwDsAzwH8cKlxDGIPkOpqlPufALAzAKiZS6F4F8Arhx7zEA2AqOx/HsAdAIcUVn4a2tYICLS4vNVG23F847b8ywBaCTACwF4AT4SVL93zX+4Mh1ZoL8uhBkBE63sNwAPFyuen3ABw3zFOu2ewmAoAufJph5AXAC46xpkBtEpgRANEWZ2yvfVD1eGgdVByvlTddj1gbACt+SV9PRUo'+
			'BEBEDvgNYI+ktHD8J4D9jnGaEFgmd6bbWqEIANTcXHAIeQbgkmOcGUCrEYrIAVcBPHIIuQ7goWMcDxHLe2lDhOImbRysj7RK9pIbPwZw1iDmDQAC8N0wptRL1PYIVvqAjmuoh54BcA8A3QtIny9Dy/xWOlE4LoZ2T4b12EYQrgieQCtP3vLScwFDCVyG9tQAyD4Kh3MATgI4PlQHyvafAbwG8BTAr07xNFy1v1ECwDFPZWKuJz4B+qHa35B2hRkAJYxtgiE1QLuVLQfQKofbBEPl/uRmFgCpW24yDGn1V27vSznA07dH7BlExD3NIdlf3RVmA6QJaoZGtMy9EKStvZBngzUj5/YCSTzZvdbW18qg5aUDBhJxz+D1ACnuaV71KzIakrmhmy6+uPqlKuDJA3PGvmblSZP5TVFrIpwDgtZTm7mp5xWZPAymTIIh4lshoL'+
			'1ACcKYbbPVLjE31TzAeqGxQXjsEcW3PEDTUWlLlvdHDT2/QlGJtwLg19B73uDme4j0l2FkR7ptRdtxmlddSgtgzkOtDRF+w4IfKKa3wx6X1HqM9zxXJerZEdokCC7xUghoVqLn9XXN/NI5buE8cY8HpMZNDcL7K5Q1oFEAeOKxQYQJj/aAkqtGwQgXnRob7QG1mE1fU+OnTmn5y8sjzxPxVKqZR6YCICWz2Y7/BX3ZAFCyIiK0AAAAAElFTkSuQmCC';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\uc635\uc158\uc544\uc774\ucf58";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 50%;';
		hs+='left : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 50%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__86.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__86.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_buttonbg_2') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__86.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__86.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__86.style.transition='';
				if (me.__86.ggCurrentLogicStateVisible == 0) {
					me.__86.style.visibility="hidden";
					me.__86.ggVisible=false;
				}
				else {
					me.__86.style.visibility=(Number(me.__86.style.opacity)>0||!me.__86.style.opacity)?'inherit':'hidden';
					me.__86.ggVisible=true;
				}
			}
		}
		me.__86.logicBlock_visible();
		me.__86.ggUpdatePosition=function (useTransition) {
		}
		me.__310.appendChild(me.__86);
		el=me._image_9=document.createElement('div');
		els=me._image_9__img=document.createElement('img');
		els.className='ggskin ggskin_image_9';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAABLdJREFUeF7lm7uKFEEUhv+TG5lqKBj5Aia64AW8oCaGxopi4gOoGAuCl30DDQxWAwURdI2NRDBYDN3UxAc4cpqusaamLqdO1XTP4iTLzlRV1//VuXV1NeE//9AU+pn5QXCdU+P/p8e/u97vX9x3ROR/v5aprg2AJ/p+48wFwkMZYx1AugLoKDrFbIDRE0QXABMID4F0A9EMYBTfauZWL2kGYQYws/AQmLhFGGhVUE0ANky8E7pLRFvuH2aWDPN5/D8JqBoAM8ugLn2pKHuNxGRdmpOvXZpz44XpsXZ8ae8gOPHDGEQU1aoGEBCtmZhLYVUmOl5PYosV9tIcmwAYxZv9MqTbCUZ0PkULMIjvJrwzCDMArc+vTXgEhHZOftelIO'+
			'l+yFpARcCbTLwX5SWmVNUfsTiQBFCR6rZ6lqY10bVijslMEAVQ4fdzivfzvJbbiqWmAGh87KCJF0hlAMrVn9zn/SWuiE0rN1F+tTgUSIYIO6t4mW+t7/saw0C4BECz+qmKSuuEvdpZraAEoOT7s/l9CpxXJUoTTdm8ZMGhBXBmhaKFRK8V7TGOEkYcgML8N271c9AyMJZ0LCyg5FOb4vsWSxlhDO4Rbpz4AA60+VvALNLglObPzMcAnAcgmx8nARwBsAfgB4BPAHaI6JdVUG2/wQJKebWX+TPzWQD3RgCpuUomekxE72rFWNprAHSJ/sx8BcAjACcUE/06lq3NEMbFdVttsh03bMO5GzgHIJf/mwEw82EALwsrH3KROd1ocYeCaw/pUAOgufRl5tsAnilWPmxyl4ieGvoNXTSuPRUAMeULBiFviOiaoV81gFwKbC6A'+
			'mFmiukT72s8eER2v7eTal7KbBHdnAesGkBs/q68lA/UC0CMG/AFwyLCS+0R01NBP4wJDcNdYQA8AOwCuGoS8JqLrhn7VAHI7rD1iwC0ALwxC7hDRc0M/B6CY3mMbInLTsCgcrE9d/Ukzs5jxNoBLFWI+ABAAPyv6LDUt3OD9qwOsF6jpx8wXATwBIPcCpc93KZmJ6GOpYe53Zs4F32kBjIWJQLhZsARZ+W0ietsovrRtPrh28dlgyyRifUd3uAzgHIAzY3bYB/ANwHsAr4jod+t1tfsbsV1h9xhb0sTaj6m1Ck31L5j/4v6mtCvsAHQ9mbUu0doKUA5RLN0Neh1z6fDAwNCav+gOLUD7xHVjYZTKX9kP8J8OxWKApW5v3jPo5RYF35fLxHeFPTewAJDuzSVzK4TS/X+4+isuMObq0tOh1DxntQKF+JXVTwHQxoEQRP'+
			'M9g9UCFH4vQ+uOyChJHjTx0dWPWsDoBjVxYDbfV658Nj6lTojUAJglAFZYajY2tRyRCd1gsiDYS3zOBayBsPn4ei4QVgh3wxQDc8oCrADchbuCMAhPBr0QcO6cYG0cSNYHltdcGt9CKa68m2wNAHcMveUEt7uHWLwZNk7EP9oi23Gaoy4x4NVxKAdAJiFihweK/t6A0SStdY62nykdm3eENgyCSXwyC2iRdzrHr71crJ1ZeDEG1MxqBhCmt1BimswuEBtsAhDdhHe1gDXD6C7an29XC0i5jX9MzXvqJM3Dl6f9N8pWjrTVuKW27SQAtJOZo91fRPFlX5XlsNgAAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 9";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 50%;';
		hs+='left : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 50%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_9.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_9.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_buttonbg_2') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._image_9.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._image_9.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._image_9.style.transition='';
				if (me._image_9.ggCurrentLogicStateVisible == 0) {
					me._image_9.style.visibility=(Number(me._image_9.style.opacity)>0||!me._image_9.style.opacity)?'inherit':'hidden';
					me._image_9.ggVisible=true;
				}
				else {
					me._image_9.style.visibility="hidden";
					me._image_9.ggVisible=false;
				}
			}
		}
		me._image_9.logicBlock_visible();
		me._image_9.ggUpdatePosition=function (useTransition) {
		}
		me.__310.appendChild(me._image_9);
		me.__85.appendChild(me.__310);
		me.__74.appendChild(me.__85);
		el=me.__82=document.createElement('div');
		el.ggId="\ub9c1\ud06c\ubcf5\uc0ac";
		el.ggDx=-1;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 60px;';
		hs+='left : calc(50% - ((60px + 0px) / 2) - 1px);';
		hs+='position : absolute;';
		hs+='top : 340px;';
		hs+='visibility : inherit;';
		hs+='width : 60px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__82.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__82.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getViewerSize().width <= 1470))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__82.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__82.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__82.style.transition='left 0s, top 0s';
				if (me.__82.ggCurrentLogicStatePosition == 0) {
					me.__82.style.left = 'calc(50% - (60px / 2) + (0px / 2) + -1px)';
					me.__82.style.top='260px';
				}
				else {
					me.__82.style.left='calc(50% - ((60px + 0px) / 2) - 1px)';
					me.__82.style.top='340px';
				}
			}
		}
		me.__82.logicBlock_position();
		me.__82.ggUpdatePosition=function (useTransition) {
		}
		el=me.__410=document.createElement('div');
		el.ggId="\uc0ac\uc774\ub4dc\ubc84\ud2bc\ubc30\uacbd4";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #ffffff;';
		hs+='border-radius : 15px;';
		hs+='cursor : pointer;';
		hs+='height : 60px;';
		hs+='left : calc(50% - ((60px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((60px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 60px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__410.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__410.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 1470))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me.__410.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__410.ggCurrentLogicStateSize = newLogicStateSize;
				me.__410.style.transition='width 0s, height 0s, background-color 500ms ease 0ms';
				if (me.__410.ggCurrentLogicStateSize == 0) {
					me.__410.style.width='48px';
					me.__410.style.height='48px';
					me.__410.style.left = 'calc(50% - (48px / 2))';
					me.__410.style.top = 'calc(50% - (48px / 2))';
					skin.updateSize(me.__410);
				}
				else {
					me.__410.style.width='60px';
					me.__410.style.height='60px';
					me.__410.style.left = 'calc(50% - (60px / 2))';
					me.__410.style.top = 'calc(50% - (60px / 2))';
					skin.updateSize(me.__410);
				}
			}
		}
		me.__410.logicBlock_size();
		me.__410.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('vis_buttonbg_3') == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__410.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__410.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__410.style.transition='width 0s, height 0s, background-color 500ms ease 0ms';
				if (me.__410.ggCurrentLogicStateBackgroundColor == 0) {
					me.__410.style.backgroundColor="rgba(0,0,0,1)";
				}
				else {
					me.__410.style.backgroundColor="rgba(255,255,255,1)";
				}
			}
		}
		me.__410.logicBlock_backgroundcolor();
		me.__410.onclick=function (e) {
			player.setVariableValue('vis_buttonbg_3', !player.getVariableValue('vis_buttonbg_3'));
			"";
 let url = '';
  const textarea = document.createElement("textarea");
  document.body.appendChild(textarea);
  url = window.document.location.href;
  textarea.value = url;
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);
		}
		me.__410.onmouseover=function (e) {
			me.elementMouseOver['_410']=true;
			me.__84.logicBlock_visible();
		}
		me.__410.onmouseout=function (e) {
			me.elementMouseOver['_410']=false;
			me.__84.logicBlock_visible();
		}
		me.__410.ggCurrentLogicStateSize = -1;
		me.__410.ggCurrentLogicStateBackgroundColor = -1;
		me.__410.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['_410']) {
				me.elementMouseOver['_410']=true;
				me.__84.logicBlock_visible();
			}
		}
		me.__410.ggUpdatePosition=function (useTransition) {
		}
		el=me.__84=document.createElement('div');
		els=me.__84__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ub9c1\ud06c\ubcf5\uc0ac\uba58\ud2b8";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #595959;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 5px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 46.67%;';
		hs+='left : -105px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((46.67% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 85px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me.__84.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ub9c1\ud06c\ubcf5\uc0ac", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__84.ggUpdateText();
		el.appendChild(els);
		me.__84.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__84.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['_410'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__84.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__84.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__84.style.transition='';
				if (me.__84.ggCurrentLogicStateVisible == 0) {
					me.__84.style.visibility=(Number(me.__84.style.opacity)>0||!me.__84.style.opacity)?'inherit':'hidden';
					me.__84.ggVisible=true;
				}
				else {
					me.__84.style.visibility="hidden";
					me.__84.ggVisible=false;
				}
			}
		}
		me.__84.logicBlock_visible();
		me.__84.logicBlock_text = function() {
			var newLogicStateText;
			if (
				((player.getVariableValue('vis_buttonbg_3') == true))
			)
			{
				newLogicStateText = 0;
			}
			else {
				newLogicStateText = -1;
			}
			if (me.__84.ggCurrentLogicStateText != newLogicStateText) {
				me.__84.ggCurrentLogicStateText = newLogicStateText;
				me.__84.style.transition='';
				if (me.__84.ggCurrentLogicStateText == 0) {
					if (me.__84.ggUpdateText) {
					me.__84.ggUpdateText=function() {
						var params = [];
						var hs = player._("\ubcf5\uc0ac\uc644\ub8cc!", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me.__84.ggUpdateText();
					} else {
						if (me.__84.ggUpdatePosition) me.__84.ggUpdatePosition();
					}
				}
				else {
					if (me.__84.ggUpdateText) {
					me.__84.ggUpdateText=function() {
						var params = [];
						var hs = player._("\ub9c1\ud06c\ubcf5\uc0ac", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me.__84.ggUpdateText();
					} else {
						if (me.__84.ggUpdatePosition) me.__84.ggUpdatePosition();
					}
				}
			}
		}
		me.__84.logicBlock_text();
		me.__84.ggUpdatePosition=function (useTransition) {
		}
		me.__410.appendChild(me.__84);
		el=me.__83=document.createElement('div');
		els=me.__83__img=document.createElement('img');
		els.className='ggskin ggskin__83';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\ub9c1\ud06c\ubcf5\uc0ac\uc544\uc774\ucf58";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 50%;';
		hs+='left : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 50%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__83.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__83.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_buttonbg_3') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__83.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__83.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__83.style.transition='';
				if (me.__83.ggCurrentLogicStateVisible == 0) {
					me.__83.style.visibility="hidden";
					me.__83.ggVisible=false;
				}
				else {
					me.__83.style.visibility=(Number(me.__83.style.opacity)>0||!me.__83.style.opacity)?'inherit':'hidden';
					me.__83.ggVisible=true;
				}
			}
		}
		me.__83.logicBlock_visible();
		me.__83.ggUpdatePosition=function (useTransition) {
		}
		me.__410.appendChild(me.__83);
		el=me._image_10=document.createElement('div');
		els=me._image_10__img=document.createElement('img');
		els.className='ggskin ggskin_image_10';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAYAAAA5ZDbSAAAACXBIWXMAAA3XAAAN1wFCKJt4AAAE7mlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgOS4xLWMwMDEgNzkuMTQ2Mjg5OSwgMjAyMy8wNi8yNS0yMDowMTo1NSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YW'+
			'JvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDI1LjAgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyMy0xMC0yNFQxODoyODow'+
			'MCswOTowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjMtMTAtMjdUMTE6NTQ6NTkrMDk6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjMtMTAtMjdUMTE6NTQ6NTkrMDk6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOmIwMmZjOGQ5LTk0ZmItNWM0NC1iZjA1LWE5OWJmMDBjODdiNSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpiMDJmYzhkOS05NGZiLTVjNDQtYmYwNS1hOTliZjAwYzg3YjUiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpiMDJmYzhkOS05NGZiLTVjNDQtYmYwNS1hOTliZjAwYz'+
			'g3YjUiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmIwMmZjOGQ5LTk0ZmItNWM0NC1iZjA1LWE5OWJmMDBjODdiNSIgc3RFdnQ6d2hlbj0iMjAyMy0xMC0yNFQxODoyODowMCswOTowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDI1LjAgKFdpbmRvd3MpIi8+IDwvcmRmOlNlcT4gPC94bXBNTTpIaXN0b3J5PiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PsiQM2oAAAvASURBVHic7Z17sFVVHcc/XEFo'+
			'fIGRIAlJykUKOLcxMysLC9OpJNMeGihTgBkXrLEyzGymicBHTQjV5MWcXlr2UEIUh3wAiXExi2jCEB0YDCHKkYAhIHH1x+9u3BzO3nvttX5n733O2Z+ZPcNln/XY53vWY6/f+v1WL2MMJXWnAowHxgDDgdcDJwB9gf3ALmArsAn4K/AwsFaj4F6lwHXjbOBy4IPA6Q7pnwMeBH4O/MG1EqXA+rwLuAb4mGKevwHmAyvTJiwF1uPdwEzgo3Us4z5gAfCYbYJSYB1mAzdkWN4twJdtPlgK7MeJwL3Ae3Io+wngEuCfcR8qBXbntchM95Qc67AdmaHviPpAW3Z1aSrGAE+Sr7gAg3vq0R71gbIFp2cssAZ5hy0KO4GR1GjJZQtORxHFBegPPF7rRimwPYMoprgBI4A7qv+z7KLtqAAPIWNe0TkL+GPwRylwMhWgm+K23G'+
			'r+AnQEf5RddDyjaSxxQX6QFwd/lC04mpOB9cgERovngQ3AcuBp4D/A8cAoYBwyEx6mUM5Gel6dSoFrUwFWICY9DfYB04C7gVdiPtcLuAxYCBzjWeZlwD2lwEeiPeZuBD4EPJMizWnAEuAMj3JXAONKgQ+nHViHnrirka53v0Pa3siE6U0e5Z9UTrJeZQTwKHriLgbOwU1cgJcRE+QmjzpMKFuwUEFaWz+l/FYj4mrwTiJWqSy4txRYf8zVFDdgB/A6h3RPtXoXPZTiiwtwj2O6Y1pZ4DHAKvTEXUR9xAXZk+XCCb1Vq9E4VBDDwdFK+a0GPqKUVy02OKbr24otOBhztcTtpn4tN2AXsMchXZ9WE3gQumPu48DblfKKoy/QxyHdwVYSuIIsHGiJ+wBwrlJeSQzFrd4HWmUM1h5zu4GLlPKywfWHtLcVWvAY9MU9B8hy'+
			'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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 10";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 50%;';
		hs+='left : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 50%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_10.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_10.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_buttonbg_3') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._image_10.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._image_10.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._image_10.style.transition='';
				if (me._image_10.ggCurrentLogicStateVisible == 0) {
					me._image_10.style.visibility=(Number(me._image_10.style.opacity)>0||!me._image_10.style.opacity)?'inherit':'hidden';
					me._image_10.ggVisible=true;
				}
				else {
					me._image_10.style.visibility="hidden";
					me._image_10.ggVisible=false;
				}
			}
		}
		me._image_10.logicBlock_visible();
		me._image_10.ggUpdatePosition=function (useTransition) {
		}
		me.__410.appendChild(me._image_10);
		me.__82.appendChild(me.__410);
		me.__74.appendChild(me.__82);
		el=me.__78=document.createElement('div');
		el.ggId="\uc0ac\uc774\ub4dc-\ubc30\uacbd\uc74c\uc545";
		el.ggDx=-1;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 60px;';
		hs+='left : calc(50% - ((60px + 0px) / 2) - 1px);';
		hs+='position : absolute;';
		hs+='top : 420px;';
		hs+='visibility : inherit;';
		hs+='width : 60px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__78.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__78.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getViewerSize().width <= 1470))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__78.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__78.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__78.style.transition='left 0s, top 0s';
				if (me.__78.ggCurrentLogicStatePosition == 0) {
					me.__78.style.left = 'calc(50% - (60px / 2) + (0px / 2) + -1px)';
					me.__78.style.top='320px';
				}
				else {
					me.__78.style.left='calc(50% - ((60px + 0px) / 2) - 1px)';
					me.__78.style.top='420px';
				}
			}
		}
		me.__78.logicBlock_position();
		me.__78.ggUpdatePosition=function (useTransition) {
		}
		el=me.__79=document.createElement('div');
		el.ggId="\ubc30\uacbd\uc74c\uc545\ubc30\uacbd";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #ffffff;';
		hs+='border-radius : 15px;';
		hs+='cursor : pointer;';
		hs+='height : 60px;';
		hs+='left : calc(50% - ((60px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((60px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 60px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__79.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__79.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 1470))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me.__79.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__79.ggCurrentLogicStateSize = newLogicStateSize;
				me.__79.style.transition='width 0s, height 0s, background-color 500ms ease 0ms';
				if (me.__79.ggCurrentLogicStateSize == 0) {
					me.__79.style.width='48px';
					me.__79.style.height='48px';
					me.__79.style.left = 'calc(50% - (48px / 2))';
					me.__79.style.top = 'calc(50% - (48px / 2))';
					skin.updateSize(me.__79);
				}
				else {
					me.__79.style.width='60px';
					me.__79.style.height='60px';
					me.__79.style.left = 'calc(50% - (60px / 2))';
					me.__79.style.top = 'calc(50% - (60px / 2))';
					skin.updateSize(me.__79);
				}
			}
		}
		me.__79.logicBlock_size();
		me.__79.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('vis_buttonbg_5') == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__79.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__79.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__79.style.transition='width 0s, height 0s, background-color 500ms ease 0ms';
				if (me.__79.ggCurrentLogicStateBackgroundColor == 0) {
					me.__79.style.backgroundColor="rgba(0,0,0,1)";
				}
				else {
					me.__79.style.backgroundColor="rgba(255,255,255,1)";
				}
			}
		}
		me.__79.logicBlock_backgroundcolor();
		me.__79.onclick=function (e) {
			player.setVariableValue('vis_buttonbg_5', !player.getVariableValue('vis_buttonbg_5'));
			player.toggleMuted("_main");
		}
		me.__79.onmouseover=function (e) {
			me.elementMouseOver['_79']=true;
			me.__81.logicBlock_visible();
		}
		me.__79.onmouseout=function (e) {
			me.elementMouseOver['_79']=false;
			me.__81.logicBlock_visible();
		}
		me.__79.ggCurrentLogicStateSize = -1;
		me.__79.ggCurrentLogicStateBackgroundColor = -1;
		me.__79.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['_79']) {
				me.elementMouseOver['_79']=true;
				me.__81.logicBlock_visible();
			}
		}
		me.__79.ggUpdatePosition=function (useTransition) {
		}
		el=me.__81=document.createElement('div');
		els=me.__81__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ubc30\uacbd\uc74c\uc545\uba58\ud2b8";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #595959;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 5px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 46.67%;';
		hs+='left : -105px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((46.67% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 85px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me.__81.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc74c\uc545 ON\n", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__81.ggUpdateText();
		el.appendChild(els);
		me.__81.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__81.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['_79'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__81.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__81.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__81.style.transition='';
				if (me.__81.ggCurrentLogicStateVisible == 0) {
					me.__81.style.visibility=(Number(me.__81.style.opacity)>0||!me.__81.style.opacity)?'inherit':'hidden';
					me.__81.ggVisible=true;
				}
				else {
					me.__81.style.visibility="hidden";
					me.__81.ggVisible=false;
				}
			}
		}
		me.__81.logicBlock_visible();
		me.__81.logicBlock_text = function() {
			var newLogicStateText;
			if (
				((player.getVariableValue('vis_buttonbg_5') == true))
			)
			{
				newLogicStateText = 0;
			}
			else {
				newLogicStateText = -1;
			}
			if (me.__81.ggCurrentLogicStateText != newLogicStateText) {
				me.__81.ggCurrentLogicStateText = newLogicStateText;
				me.__81.style.transition='';
				if (me.__81.ggCurrentLogicStateText == 0) {
					if (me.__81.ggUpdateText) {
					me.__81.ggUpdateText=function() {
						var params = [];
						var hs = player._("\uc74c\uc545 OFF", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me.__81.ggUpdateText();
					} else {
						if (me.__81.ggUpdatePosition) me.__81.ggUpdatePosition();
					}
				}
				else {
					if (me.__81.ggUpdateText) {
					me.__81.ggUpdateText=function() {
						var params = [];
						var hs = player._("\uc74c\uc545 ON\n", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me.__81.ggUpdateText();
					} else {
						if (me.__81.ggUpdatePosition) me.__81.ggUpdatePosition();
					}
				}
			}
		}
		me.__81.logicBlock_text();
		me.__81.ggUpdatePosition=function (useTransition) {
		}
		me.__79.appendChild(me.__81);
		el=me.__80=document.createElement('div');
		els=me.__80__img=document.createElement('img');
		els.className='ggskin ggskin__80';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAwdJREFUeF7tmmty5DAIhMnJkj3ZJifL7sl2C1c8pXgE3SDslGX7Z0YP+GgwUvwiF39eLu6/3ABuBVycwJ0CkwngrfHnD+PbTAp4F5HfjdMfIqJ/c59ZAGydX53+JSKuEn4CgMqUkieKXvO7BUCHuD4eDeBTRNY8VQgaoYqnXXe7nrvPUQDUac3PtkipoVUQdF2FYD1mPTgCADKuygYvDRRMtx5UbW6RR0bBHA3mRzgV9gTAOF8NAKntSQV7AfAisQ1qtQ0e+KeaU725Vew8JTM2RDs8LwDfVMBszqYhkp+1DrIh0+F5tnxTAdqcdZ7N9956ng3pDu/rtbh97T51iBUARpxHRTDd4X31HFZv8FDBKIBIscukQPi1ttnEm7/4ng'+
			'WQKXYZAKiuoMOON3+ZmwGAjGLrxjoO2TCqgn+GQUsatJtbBaOdv0Y+6uTIaxABRyqwAD4AVMo5AwYpQNccUYFbSHXz0SqecbqdwwDQ8a6UHSPcOqCbWwuPOsbOZwF4gUJpYPn4cSYAsKI7xK0UOhWAkTQwC+GZFHADcN4G6GrNqh9LI3SWIqgKMB0BF6xmAZ0FAGrrpweQTYHlMHSmFHDbWuc1OE0NyHaD0wNA/widohHyWuHLA0DnCfcscIbTYOiuf1MM3UPUSu4nIaDoeQ2Q/obkD+8D2GOrjkO3M5G12CsxFBwE0JS/dpZosuVQxW1wBQAUfe8AtczNAkCyjCgB2eA1amguvERBCyBHkDzRfNTDeyk3Ev3HvqMAKpSAbOilG+M81TegzZkIrsWx9wkMMx/ZsL211oOPAkAfWlGpgzZnHGjHZFKCtaH9uArZRUUf'+
			'5R/axPo9CoEFELGHiv5eAKJ1oRoAHf09AUQgVAJA6nsqnpWb9yTK/Nut0gZP+t03R+XmXo6OfOjA5j6KftfXowBYKcG8z1kA4ejvXQN6hmuU9HkVkb/M5+yk9+mO8UgFkL6kh/U6RnRbnP5EJm3ljhNTHeNMCljZappp5FGrvIyfEUBIZDeAEK4JB98KmDCoIZcur4D/1fzD+eS0V/sAAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\ubc30\uacbd\uc74c\uc545\uc544\uc774\ucf58";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 50%;';
		hs+='left : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 50%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__80.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__80.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_buttonbg_5') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__80.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__80.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__80.style.transition='';
				if (me.__80.ggCurrentLogicStateVisible == 0) {
					me.__80.style.visibility="hidden";
					me.__80.ggVisible=false;
				}
				else {
					me.__80.style.visibility=(Number(me.__80.style.opacity)>0||!me.__80.style.opacity)?'inherit':'hidden';
					me.__80.ggVisible=true;
				}
			}
		}
		me.__80.logicBlock_visible();
		me.__80.ggUpdatePosition=function (useTransition) {
		}
		me.__79.appendChild(me.__80);
		el=me._image_12=document.createElement('div');
		els=me._image_12__img=document.createElement('img');
		els.className='ggskin ggskin_image_12';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 12";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 50%;';
		hs+='left : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 50%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_12.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_12.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_buttonbg_5') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._image_12.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._image_12.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._image_12.style.transition='';
				if (me._image_12.ggCurrentLogicStateVisible == 0) {
					me._image_12.style.visibility=(Number(me._image_12.style.opacity)>0||!me._image_12.style.opacity)?'inherit':'hidden';
					me._image_12.ggVisible=true;
				}
				else {
					me._image_12.style.visibility="hidden";
					me._image_12.ggVisible=false;
				}
			}
		}
		me._image_12.logicBlock_visible();
		me._image_12.ggUpdatePosition=function (useTransition) {
		}
		me.__79.appendChild(me._image_12);
		me.__78.appendChild(me.__79);
		me.__74.appendChild(me.__78);
		el=me.__75=document.createElement('div');
		el.ggId="\uc0ac\uc774\ub4dc-\uc548\ub0b4\uba58\ud2b8";
		el.ggDx=-1;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 60px;';
		hs+='left : calc(50% - ((60px + 0px) / 2) - 1px);';
		hs+='position : absolute;';
		hs+='top : 500px;';
		hs+='visibility : inherit;';
		hs+='width : 60px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__75.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__75.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getViewerSize().width <= 1470))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__75.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__75.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__75.style.transition='left 0s, top 0s, width 0s, height 0s';
				if (me.__75.ggCurrentLogicStatePosition == 0) {
					me.__75.style.left = 'calc(50% - (60px / 2) + (0px / 2) + -1px)';
					me.__75.style.top='380px';
				}
				else {
					me.__75.style.left='calc(50% - ((60px + 0px) / 2) - 1px)';
					me.__75.style.top='500px';
				}
			}
		}
		me.__75.logicBlock_position();
		me.__75.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 1450))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me.__75.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__75.ggCurrentLogicStateSize = newLogicStateSize;
				me.__75.style.transition='left 0s, top 0s, width 0s, height 0s';
				if (me.__75.ggCurrentLogicStateSize == 0) {
					me.__75.style.width='48px';
					me.__75.style.height='48px';
					me.__75.style.left = 'calc(50% - (48px / 2) + (0px / 2) + -1px)';
					skin.updateSize(me.__75);
				}
				else {
					me.__75.style.width='60px';
					me.__75.style.height='60px';
					me.__75.style.left = 'calc(50% - (60px / 2) + (0px / 2) + -1px)';
					skin.updateSize(me.__75);
				}
			}
		}
		me.__75.logicBlock_size();
		me.__75.ggUpdatePosition=function (useTransition) {
		}
		el=me.__610=document.createElement('div');
		el.ggId="\uc0ac\uc774\ub4dc\ubc84\ud2bc\ubc30\uacbd6";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #ffffff;';
		hs+='border-radius : 15px;';
		hs+='cursor : pointer;';
		hs+='height : 60px;';
		hs+='left : calc(50% - ((60px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((60px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 60px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__610.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__610.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 1470))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me.__610.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__610.ggCurrentLogicStateSize = newLogicStateSize;
				me.__610.style.transition='width 0s, height 0s, background-color 500ms ease 0ms';
				if (me.__610.ggCurrentLogicStateSize == 0) {
					me.__610.style.width='48px';
					me.__610.style.height='48px';
					me.__610.style.left = 'calc(50% - (48px / 2))';
					me.__610.style.top = 'calc(50% - (48px / 2))';
					skin.updateSize(me.__610);
				}
				else {
					me.__610.style.width='60px';
					me.__610.style.height='60px';
					me.__610.style.left = 'calc(50% - (60px / 2))';
					me.__610.style.top = 'calc(50% - (60px / 2))';
					skin.updateSize(me.__610);
				}
			}
		}
		me.__610.logicBlock_size();
		me.__610.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('vis_buttonbg_6') == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__610.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__610.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__610.style.transition='width 0s, height 0s, background-color 500ms ease 0ms';
				if (me.__610.ggCurrentLogicStateBackgroundColor == 0) {
					me.__610.style.backgroundColor="rgba(0,0,0,1)";
				}
				else {
					me.__610.style.backgroundColor="rgba(255,255,255,1)";
				}
			}
		}
		me.__610.logicBlock_backgroundcolor();
		me.__610.onclick=function (e) {
			player.setVariableValue('vis_buttonbg_6', !player.getVariableValue('vis_buttonbg_6'));
			me.__95.ggVisible = !me.__95.ggVisible;
			var flag=me.__95.ggVisible;
			me.__95.style.transition='none';
			me.__95.style.visibility=((flag)&&(Number(me.__95.style.opacity)>0||!me.__95.style.opacity))?'inherit':'hidden';
		}
		me.__610.onmouseover=function (e) {
			me.elementMouseOver['_610']=true;
			me.__77.logicBlock_visible();
		}
		me.__610.onmouseout=function (e) {
			me.elementMouseOver['_610']=false;
			me.__77.logicBlock_visible();
		}
		me.__610.ggCurrentLogicStateSize = -1;
		me.__610.ggCurrentLogicStateBackgroundColor = -1;
		me.__610.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['_610']) {
				me.elementMouseOver['_610']=true;
				me.__77.logicBlock_visible();
			}
		}
		me.__610.ggUpdatePosition=function (useTransition) {
		}
		el=me.__77=document.createElement('div');
		els=me.__77__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ucc38\uace0\ub0b4\uc6a9\uba58\ud2b8";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #595959;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 5px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : pointer;';
		hs+='height : 46.67%;';
		hs+='left : -105px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((46.67% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 85px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 3px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__77.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uacf5\uc9c0\uae00 OFF", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__77.ggUpdateText();
		el.appendChild(els);
		me.__77.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__77.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['_610'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__77.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__77.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__77.style.transition='';
				if (me.__77.ggCurrentLogicStateVisible == 0) {
					me.__77.style.visibility=(Number(me.__77.style.opacity)>0||!me.__77.style.opacity)?'inherit':'hidden';
					me.__77.ggVisible=true;
				}
				else {
					me.__77.style.visibility="hidden";
					me.__77.ggVisible=false;
				}
			}
		}
		me.__77.logicBlock_visible();
		me.__77.logicBlock_text = function() {
			var newLogicStateText;
			if (
				((player.getVariableValue('vis_buttonbg_6') == true))
			)
			{
				newLogicStateText = 0;
			}
			else {
				newLogicStateText = -1;
			}
			if (me.__77.ggCurrentLogicStateText != newLogicStateText) {
				me.__77.ggCurrentLogicStateText = newLogicStateText;
				me.__77.style.transition='';
				if (me.__77.ggCurrentLogicStateText == 0) {
					if (me.__77.ggUpdateText) {
					me.__77.ggUpdateText=function() {
						var params = [];
						var hs = player._("\uacf5\uc9c0\uae00 ON", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me.__77.ggUpdateText();
					} else {
						if (me.__77.ggUpdatePosition) me.__77.ggUpdatePosition();
					}
				}
				else {
					if (me.__77.ggUpdateText) {
					me.__77.ggUpdateText=function() {
						var params = [];
						var hs = player._("\uacf5\uc9c0\uae00 OFF", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me.__77.ggUpdateText();
					} else {
						if (me.__77.ggUpdatePosition) me.__77.ggUpdatePosition();
					}
				}
			}
		}
		me.__77.logicBlock_text();
		me.__77.ggUpdatePosition=function (useTransition) {
		}
		me.__610.appendChild(me.__77);
		el=me.__76=document.createElement('div');
		els=me.__76__img=document.createElement('img');
		els.className='ggskin ggskin__76';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAA25JREFUeF7tm21S3DAMhpeT0Z4MerLCycoos9oxRh+vZMkblmaGH4BjS49eybHjPF1++PW0yf9fl8uFfuh6Hsbkv71d//Y+2fPabV8nAHLuZXA868uf640tMKoBVDmtwSqHUQWg2/EZSBmIVQC7HZdALKXGCgAamHI8e3Hh4/u5IGb6I0WkQGQB/A0UN3aUjJyd1pxlZyKAUxCiACKSJ2cjTmsweApFYITHjAAgQyjy3pWKhNfpMBUiIGAbUABIvofpg05LzRB7fiMphwBAIg8NtuBwGwQEgFXwdkZdguDVJLKPgqNeHgBLam7nxRG3ukvbaQGwOoWLjGE1R4+a0CIoNY8P/VtKVe21APxTjK+IvGRsV7/shlinNABW9FcLXm'+
			'ffVsEWAUsAuqWfzlewplgQvgQvAqAi78mHVK6CznMzbYwvKpgBWNHxZgzURitCVZBhFaAAqgxjSBLoHWPQ+J9UMAPQKn9V9EeV8LRHe4QViyZJga4/o2Oa/Ksjg6ZKRTutFtyKIQJgddqrcCTbh1YLbmkwAnDlkrXizvdpKjh8ZwCPKH9vSjyU/RMAaGlw1DYPQEf1l2YCykl0vzCTUVJ63xWAFJVO2BKAoxDyoGahyCB37pHG65xuUwAqlqcah67lcHg8VoBKqCH62oJoN/BjFvwP4Brh00hyt+LOVAQ7UyBVBMcnxerA7Fbc6Z4Dvg2ArpXgTgDmOodrgLtsLM6B0wEg/3Y+C+wEYC7zx+dvd/ekUAW7AJgrwbnK70yDXQDcfY57bYruAuDucs0AtDSoXqntAOBGX3rQgV8oLNaDHQC06H8KprQJAb9WWoDQDQCK'+
			'vvaou0MFnQBCL3e1bSjrBWbF06FkZMViKPzeUQMQfs8eTAep/wqwVuBEX7NHZKqiRWf++BuB1SMyIelzwLyd2B3v8oPiEZun7fQAaPt3bMXDH5MjR5GDktUPSogqELvcuoIo4GwQvMORDA8KCgqAOkXO51I7aGAkxEIb1AY38mgRnG1A6TOIind+kTHDNSmigBEGGolRjqwiJPjjKVL0S5LU1JwFEEkJzeFv/cnMihoQBaBtwpKfO15RwAyBfke+5kCds9otO54tgp7xmY+dvD7H/5c53gWgQxXlTo9GVqWAF8V5ocMfUHOFHwsiL44qplDPrtspMbfhozb4ABBKHVDEv5l1AAAAAElFTkSuQmCC';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\ucc38\uace0\ub0b4\uc6a9\uc544\uc774\ucf58";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 55%;';
		hs+='left : calc(50% - ((55% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((55% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 55%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__76.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__76.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_buttonbg_6') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__76.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__76.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__76.style.transition='';
				if (me.__76.ggCurrentLogicStateVisible == 0) {
					me.__76.style.visibility="hidden";
					me.__76.ggVisible=false;
				}
				else {
					me.__76.style.visibility=(Number(me.__76.style.opacity)>0||!me.__76.style.opacity)?'inherit':'hidden';
					me.__76.ggVisible=true;
				}
			}
		}
		me.__76.logicBlock_visible();
		me.__76.ggUpdatePosition=function (useTransition) {
		}
		me.__610.appendChild(me.__76);
		el=me._off=document.createElement('div');
		els=me._off__img=document.createElement('img');
		els.className='ggskin ggskin_off';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAA5lJREFUeF7tm1lywjAMQOOTtZys5WSFk7mjTJwxjrVacig0M/wAsaWnzWta3vxJM/TPOX8uywIfeD6qPst3t+27ey1PSuk7Wr4wAJvSX5XiVl2u8GIUDFcAjkpjsNxhuACYoHgLxA3EEIATFD+AGA0NM4CcMyQoiHHrUxJfeb8kREt7VysIE4Cc848iuRVFQchW6a6yG1z4TQPYBEEFQOnyoKxYaczsVQmVwFD3KQawCQKW5x6TJbhG4XdF2IllEAEQdqymL1G69x+hPBdJyLEAhJYXdWZVOBKCBACV8KZZHYEAlYMabd5SShcKPAmAcTW2cU+LU22NyIkCYBoVJxkmu5fMfrfW8dI+U5pReSkAGRF+2PKIsFHtFjW6eaoLgL'+
			'H+UMILbhtyAlaqu4APACa4PjWE9vACCsLBeBoAw3G/DWaoqhLdxwHwAwDK+ikltmRKsj4zrvACIPYCKQAXwaqM3QuDGX2ACA9e0ALoZn4v69ceUs34YI1weNKEDJRYfXYAhPu7WkYSJl7/IcYGezKUABgqe17KWNoh8s0eBjUA1l0sQpz9DuYFJaxXAK/o/oIh8urZ7wAAK4lrbiMBRGR/pBJATIrWCy0hlXPuhfd5AHrJKRI2AmBNhMUDusPTKKGQxBRWbq0AhicmxFpAD/gp/RUP6MXIKQJZYpx7hyqF/wCIKeqre8DTJcFI4GiIP1MVmA3g1HHA7CpgGwgtyxIyE4xaFVbuID14ADZeDnHLpwOwVYJpY4HJAMhpfr0egK3WuofBLADEgsg+7K4BTAuDiQCwPYgjACIM4Iyey5I4s0jhnm+QSdCDPu2qMBYGrjO1'+
			'GR4gXeVqAYg3FLgJCLOdHT4OwKy/LcHvR3B7W2OYF7i5aLQHSK0PRuoBCPeCSADazV1se5zawBwui4iQwx5m2XfEAKj32TU5ARHUAyxqOKySWY/IeFkLjsisdwQcjshQ5w70R2Rm7eVrPEe5xlj+TpZwdoDDHD567WNymxdQ+UBE2cPKbRteBzhZD3g2CIoD26LRqwgAs4HaGkfUscUrhGeEoWlxRREDqDxBehEKrrUM7/kpLA4iqnOSCkA1m9PeFlHd8amUhi6lN0lMpdkEQBkSmLf/3SsztUaKuLSEPfeO2uXbBs0e0IEAX0mutXBKSX4fVrx04gKgyQ2RINwUDwEQ5BXuStdyunoAMVZvL0GXC9Tt5WloolygHi6hkliaAkAiyFn/+QWCN8pfDENywAAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\ucc38\uace0\ub0b4\uc6a9\uc544\uc774\ucf58-off";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 55%;';
		hs+='left : calc(50% - ((55% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((55% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 55%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._off.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._off.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_buttonbg_6') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._off.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._off.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._off.style.transition='';
				if (me._off.ggCurrentLogicStateVisible == 0) {
					me._off.style.visibility=(Number(me._off.style.opacity)>0||!me._off.style.opacity)?'inherit':'hidden';
					me._off.ggVisible=true;
				}
				else {
					me._off.style.visibility="hidden";
					me._off.ggVisible=false;
				}
			}
		}
		me._off.logicBlock_visible();
		me._off.ggUpdatePosition=function (useTransition) {
		}
		me.__610.appendChild(me._off);
		me.__75.appendChild(me.__610);
		me.__74.appendChild(me.__75);
		me.__73.appendChild(me.__74);
		me.divSkin.appendChild(me.__73);
		el=me.__64=document.createElement('div');
		el.ggId="\ubbf8\ub2c8\ub9f5";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 310px;';
		hs+='left : 25px;';
		hs+='position : absolute;';
		hs+='top : 14.5833%;';
		hs+='visibility : inherit;';
		hs+='width : 300px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__64.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__64.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize().width <= 460))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__64.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__64.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__64.style.transition='';
				if (me.__64.ggCurrentLogicStateVisible == 0) {
					me.__64.style.visibility="hidden";
					me.__64.ggVisible=false;
				}
				else if (me.__64.ggCurrentLogicStateVisible == 1) {
					me.__64.style.visibility="hidden";
					me.__64.ggVisible=false;
				}
				else {
					me.__64.style.visibility=(Number(me.__64.style.opacity)>0||!me.__64.style.opacity)?'inherit':'hidden';
					me.__64.ggVisible=true;
				}
			}
		}
		me.__64.logicBlock_visible();
		me.__64.ggUpdatePosition=function (useTransition) {
		}
		el=me.__67=document.createElement('div');
		el.ggId="\ud3c9\uba74\ub3c4 \ubc30\uacbd";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #000000;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 10px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='box-shadow: 0 12px 24px 0 rgb(0 0 0 \/ 10%); box-sizing:border-box;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__67.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__67.ggUpdatePosition=function (useTransition) {
		}
		el=me.__71=document.createElement('div');
		el.ggId="\ud3c9\uba74\ub3c4 \uc6b0\uce21 \ud68c\uc0c9";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(77,77,77,0.784314);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 0px 10px 0px 0px;';
		hs+='cursor : pointer;';
		hs+='height : 44px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 113px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__71.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__71.onclick=function (e) {
			me.__72.ggVisible = !me.__72.ggVisible;
			var flag=me.__72.ggVisible;
			me.__72.style.transition='none';
			me.__72.style.visibility=((flag)&&(Number(me.__72.style.opacity)>0||!me.__72.style.opacity))?'inherit':'hidden';
			me._up.ggVisible = !me._up.ggVisible;
			var flag=me._up.ggVisible;
			me._up.style.transition='none';
			me._up.style.visibility=((flag)&&(Number(me._up.style.opacity)>0||!me._up.style.opacity))?'inherit':'hidden';
			me._down.ggVisible = !me._down.ggVisible;
			var flag=me._down.ggVisible;
			me._down.style.transition='none';
			me._down.style.visibility=((flag)&&(Number(me._down.style.opacity)>0||!me._down.style.opacity))?'inherit':'hidden';
		}
		me.__71.ggUpdatePosition=function (useTransition) {
		}
		el=me.__1_1=document.createElement('div');
		els=me.__1_1__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="1\uce35 \uc124\uba85";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(254,254,254,1);';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 80%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 14px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__1_1.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.ggUserdata.description)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__1_1.ggUpdateText();
		player.addListener('changenode', function() {
			me.__1_1.ggUpdateText();
		});
		el.appendChild(els);
		me.__1_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__1_1.ggUpdatePosition=function (useTransition) {
		}
		el=me._container_3=document.createElement('div');
		el.ggId="Container 3";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 8px;';
		hs+='position : absolute;';
		hs+='right : -10px;';
		hs+='top : calc(50% - ((8px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 8px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._container_3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._container_3.ggUpdatePosition=function (useTransition) {
		}
		el=me._down=document.createElement('div');
		els=me._down__img=document.createElement('img');
		els.className='ggskin ggskin_down';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAAA7tJREFUeF7tnWFyqzAMhO2bvZ6sfSdrbuYOGcI4BLANkrzCy99MwPWX1a6ltI2BF9QORKjVcDGBQMA+BARCIGA7ALYcKgQNSErpH9iahl5OTCn9hBC+h94FnB/+8SxZKaWEs6ZxVxKnawZClfT/HPyPMf4spk6VdCXyiDF+TSvIgVAl/Zh8xRgfb0BYurrRWNTxAYQG3wXKoo49ICxddlyeRp4/bvOkToO3IfJKuTVAqBJ9Jm+l6vW43V5WSuk3hMC2ig6YNyMvKoSJS4dCdtdNdWyaer4U9rlUwOyqowiEMVgFyK46aoHQ4OW4fMTc9a2rBlSMwSJEDktVMWXRS0Qg5Dc5LFVNQJi6LsOpUkeVh7yWMo96p7MJr/YdqFJHEx'+
			'CqpJ3C/I5qdTQDYQxuh7LVrzq6S1XKosG3g5jfUYy5p2Lv+k2MwVWAmkpVc8qiSqogNMdcEYXQ4ItwTqnjlKmvlMLvc22zqY65YgqhSnZV0mzk+Z2aUxYN/rhctcZcUYVQJR9wTpeqSylrQyUc94Zw2shFSxZVsmznZXVcTlk8myw7IKIOUSCzUkaNwSLq0AAy4rj3UswVT1mDx2CxUiWasgb2ErFSpQZkoNQlrg5xD3lRHmTcK64ONSADqERFHapA7hyDr/arjrphl5uLRze/6XeDRWOueuy9eQxWK1WqKevGMVjFyMWbi0dl60YGr64OdVNfKcV7n0tdHdZAPPe5VI3cvGRlB0aXKtGMueYp6wYGb1KqzFLWRgz2NO41MfJuJcth4jJVh6mpOyxd5uroBsRJn8tcHb2BIMdgs5jbNWU56XN1KVXdUpYDL+lSqiCA'+
			'AKaururo6iHZ6X36i0Mov93bVR0QQIBU0l0dMEAQYrBlv+poXKE6wi3NSYAMvlvMhYq9IDEYolTBpCwAlXQ38q7NxVIZM/6mCpQ6oEx9pRSrQRaUOpCBWPS5YIwcumRlB0ZVlaDEXOiUZWjwcKUKMmVtxGCNcS+ckbsoWYotFVh1wJq6YumCVocLIMJ9Lmh1eAIiEYMhY66blCXc54IvVS5SlqCXwJcqd0AupC436nDjIdnp/cy414063AE5oRJX6nAJpCUGo/arjkYQMCPc0pzkhMG7iLluY29jDHZXqlymrAaVuDJyN83FUhnbGfe6VYdbU18pZT3IcquOuwDJ+1wujfw2JSs7MD5V4jHm3iZlbRj85B3PfxLv+XJ5DvG84aW1E0hph4xfJxDjDS89jkBKO2T8OoEYb3jpcQRS2iHj1wnEeMNLj/sDeQunbQVfIR'+
			'AAAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="down";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 100%;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._down.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._down.ggUpdatePosition=function (useTransition) {
		}
		me._container_3.appendChild(me._down);
		el=me._up=document.createElement('div');
		els=me._up__img=document.createElement('img');
		els.className='ggskin ggskin_up';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAAA35JREFUeF7tnFFyo0AMRD03S062uyfb3IwtXHaCvYBmhpHUDc0vVDLo0eouqcrlpguqAgXqNDrMTUDAPgIBERCwCoAdRwoRELAKgB3nFAqZpunjdrt9lFJ+g9W3+ThnATLNb15KoX8f+heYpmlWxa/Hp/iHXSXUQB6t6u+yL7CrhB3IDGP2j+VFrRJaIGvqWFChhcIMZE0d30xYWxclkDcj34qWlCphBXKPudbFqBI6INM07bYqdoOnAmIY+ZZgPkspX5aaUO6zAWlRx7PGVF5CA6RTHXRQmID0qIMuBlMAqYy5lg1QtC54IAdb1QskhhjMAORQq2KLwdBARqqDZc6FDmSkOp5Mvkopn5bhZN2HBeKkDvgYjAykal7V+yWjGj'+
			'wkkEEx12IFGYPhgDi3KvgYjAjEw8hpdiZQQCLVgRqD0YBEqgNyzgUDJMjI4VsXEhDXmGtFLpQYDAGkcS1r1bb3PkQMTgeSZOSw614EIClGvkEkXSWpQMDUATHnygaCpA6IGJwGJDnmWsaf1rpSgIC2Kog5VxYQyFaFsO4NB8Kgjsw5VwYQBnWkrXtDgZCpIyUGRwNJnVdZ0WrrfuScKwwIeMy1WIXF4BAgpK0qJQZHAWEy8tSdiTuQM6gjMgZHADmDOsLmXK5AyI08pXV5A6GMuVbk8ozBbkBA1rJWbXvvu8VgFyAnM/LQda8XkFMZeeS6dziQi6jDbc7lAeQK6nCLwUOBnDTmWsY/1OCHAblYq3Kbc40EcqlW5bXuHQLkyuoYPecaBeTK6hi67j0MROp4aV6HDX4EkFPOq6xo5bXuPQTkojHXYnVIJd1A1Kq2uRyZ'+
			'Bh8BIiPfZtKtki4gUofVte73u6D0ApE6Kpj0tK5mIDLyChI/jzSrpAeIYm4Dk1aVNAE5+Vq2ocxNjzappBqIjLwJwvvD1T/m3AJERt7PpFolVUCkjn4SrdPgWiBSxwAmNQZvAlHMHUCiIQbvAlGrGgrj/scslVhA1KrGM9k1+E0gUsd4EjUGvwdE6vBjsvljzqtApA4/EpZKtoBoXhXAZM3g/wOimBtAYicGvwBRqwqFsRqD34HIyOOZvMTgbyBSRzyJNYNfApE6Epk8Df4OREaeSOLN4J9AFHMBmMwqKVrLApBYquRh5lCnuvJhzH3IlYuT8e4CklH1nf8pIAICVgGw40ghAgJWAbDj/ANyTJQuIPfI4wAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="up";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 100%;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._up.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._up.ggUpdatePosition=function (useTransition) {
		}
		me._container_3.appendChild(me._up);
		me.__1_1.appendChild(me._container_3);
		me.__71.appendChild(me.__1_1);
		el=me._container_2=document.createElement('div');
		el.ggId="Container 2";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._container_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._container_2.ggUpdatePosition=function (useTransition) {
		}
		el=me.__72=document.createElement('div');
		el.ggId="\ub4dc\ub86d\ub2e4\uc6b4";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='z-index: 999;';
		hs+='background : rgba(153,153,153,0.588235);';
		hs+='border : 0px solid #000000;';
		hs+='bottom : -70px;';
		hs+='cursor : default;';
		hs+='height : 70px;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__72.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__72.ggUpdatePosition=function (useTransition) {
		}
		el=me.__1_0=document.createElement('div');
		els=me.__1_0__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ud3c9\uba74\ub3c4 1\uce35 \ubc84\ud2bc";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : pointer;';
		hs+='height : 50%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 5px;';
		hs+='visibility : inherit;';
		hs+='width : 79.646%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__1_0.ggUpdateText=function() {
			var params = [];
			var hs = player._("1\uce35", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__1_0.ggUpdateText();
		el.appendChild(els);
		me.__1_0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__1_0.onclick=function (e) {
			player.openNext("{node16}","");
		}
		me.__1_0.ggUpdatePosition=function (useTransition) {
		}
		me.__72.appendChild(me.__1_0);
		el=me.__2_1=document.createElement('div');
		els=me.__2_1__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ud3c9\uba74\ub3c4 2\uce35 \ubc84\ud2bc";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 0px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : pointer;';
		hs+='height : 50%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 80%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__2_1.ggUpdateText=function() {
			var params = [];
			var hs = player._("2\uce35", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__2_1.ggUpdateText();
		el.appendChild(els);
		me.__2_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__2_1.onclick=function (e) {
			player.openNext("{node6}","");
		}
		me.__2_1.ggUpdatePosition=function (useTransition) {
		}
		me.__72.appendChild(me.__2_1);
		me._container_2.appendChild(me.__72);
		me.__71.appendChild(me._container_2);
		me.__67.appendChild(me.__71);
		el=me.__69=document.createElement('div');
		el.ggId="\ud3c9\uba74\ub3c4 \uc88c\uce21 \uc81c\ubaa9";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 44px;';
		hs+='left : 10px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 300px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__69.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__69.ggUpdatePosition=function (useTransition) {
		}
		el=me.__70=document.createElement('div');
		els=me.__70__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uacf5\uac04\uba85";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(252,252,252,1);';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 40%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px 0px 0px 20px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me.__70.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.ggUserdata.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__70.ggUpdateText();
		player.addListener('changenode', function() {
			me.__70.ggUpdateText();
		});
		el.appendChild(els);
		me.__70.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__70.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_7=document.createElement('div');
		els=me._image_7__img=document.createElement('img');
		els.className='ggskin ggskin_image_7';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAABIdJREFUeF7tnWFu2zAMhe2TbT3Z1pOtO5kGphIgBHYjl++RT5rzp0DiOrY+fSRNOcm+3Q+pEdiljuY+mG0qIKWUn5WZ/f3R8WvP21Mf9fm/3esf+76356WxywOpEH51IDwD+m7AlOFIAukg9DPfA+Lofw3Otu/7b/SOPfuTAhIE4nm83pWgyAAppfzZto1pxKuJKwEmHUgpxUJGyxGvBi3i9VQwqUAErDgDnAYlBUhSrrhql1Vjb1f/ybt9OJAKw/LFLI+3yDI5FIhgvhidFGEhLAzIhGY8wwoxJRJIGZ2OwtvRoYQAEa6mrrKnJ3o6kInzxhksKhQqkAVhNEi0JM8GwswbR232NmDWmqe2YfZ9p4wdZac2KiQ7GgSboS/XN2'+
			'plZ2AYrRmKJUwgaDtcA0CaIPCqiwIEfPIuEM+ZGXxs8AQPBwK+AITCaHDAUKCWMICg2ukUGAQoUEsYQBC5gwoDDQVZcUGBgMJVCAwwFFjYQgNxhyvkbBvti5RSvFbDwhYaiPfEQu0AWrImkAw7OijemywgYQtmCKCUTLGjA2JX9J6VzLWAZNpRWz1eIJAJJWNINpAKxRO25ICkn8xoVXW2nXMhDZLYkYasAMRTtssB8ZS8EN0BhnjyyFJAIBVKMhC7k94dcdw76MpGjyEqQDwhSw7InUMAt54iDbmBLAQEkhABOSR9UiENSY+/ACCePAipFGWAbNuWmthVenFIIJ4a3iZ3atgCAIFMKBiQ2gvyKG+7gJzU1dAFgAEpee240UA8STHNEgAQSP5gAPGGLTsm2MmNmAKAAT1mqCGgsBUWukA3ZcDCFdwQwJpCm9QhCR5w'+
			'cwPUDhYQRNh65JMavl7eVD0SmvptwJ8ChoZYeMgChq02htATRoWpdnCIDm8/WVhAXFftBzPeDQVsBWWyUEIWqB1/FoUug2F+RgRtBxuI95rkq9RgecW+oOyRX/oP7xx8yRnrk1SXJ8dIrqOErJpHUMl95DzCt2HYQTUEWAKHD/bAG1LsiACypCUsO+hAFrWEZkcUkNUsmRvIYpZQYYQYsljFtQaQRSyhwwgzZBFL1gIyuyXMUpfeXDy7sEJ3Wgcu4FCbhNgRGrLITUfUwB/uJ8qOLCDo1jwVRvQaP625+NUogZZO2SAe+4+0I8WQmtxnsSQsd7TZlWJIheK9qY5uSLQdaYZMUgKH25ENRLrpmGFHKhBxS1LsUAAiaUmWHelARC1Js0MFiJol/zcQMUtSYUgYItaav4F0TUfmjXUjF5HpMGQMEbHkBvI8bZ1fjzRiwe'+
			'k2maVuf1BpvayjkUlcwJKwQypkdbkkvOmoYocqkOjWvIwdkkCiW/NKdigDibJEyg5ZIFGWqNmhDoR9oShnhzoQatNR0Q5pIOSmo6QdMwChWKJqhzwQkiWydswCBG3JDcTV9fv8kUpUxSUNYwpDwK35G4jXjq7p6L16l4cxjSGAVcWQ799CTD6p9ZCRE/pGPpkGxnSGfCN8TRGmZFcMRwzpt6lfYGm/nW4PK48v/bz31feL2H66kBUxKJnvcQPJHP2D9/4H6i15g3WNZLcAAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 7";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 15px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((15px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_7.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_7.ggUpdatePosition=function (useTransition) {
		}
		me.__70.appendChild(me._image_7);
		me.__69.appendChild(me.__70);
		me.__67.appendChild(me.__69);
		el=me.__68=document.createElement('div');
		el.ggId="\ud3c9\uba74\ub3c4 \ucee8\ud14c\uc774\ub108";
		el.ggDx=0;
		el.ggDy=23;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 72.2581%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((72.2581% + 0px) / 2) + 23px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__68.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__68.ggUpdatePosition=function (useTransition) {
		}
		el=me._on5=document.createElement('div');
		el.ggId="\ud3c9\uba74\ub3c4on";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		hs+='over-flow:hidden;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._on5.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._on5.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.tags.indexOf("1\uce35") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._on5.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._on5.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._on5.style.transition='';
				if (me._on5.ggCurrentLogicStateVisible == 0) {
					me._on5.style.visibility=(Number(me._on5.style.opacity)>0||!me._on5.style.opacity)?'inherit':'hidden';
					me._on5.ggVisible=true;
				}
				else {
					me._on5.style.visibility="hidden";
					me._on5.ggVisible=false;
				}
			}
		}
		me._on5.logicBlock_visible();
		me._on5.ggUpdatePosition=function (useTransition) {
		}
		el=me._map_1=document.createElement('div');
		el.ggFilter = '';
		el.ggFilteredIds = [];
		el.ggMapNotLoaded = true;
		el.ggMapId = 'FloorPlan01';
		el.ggId="Map 1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_map ";
		el.ggType='map';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._map_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._map_1.ggUpdateConditionResize=function () {
			var mapDetails = player.getMapDetails(me._map_1.ggMapId);
			if (mapDetails.hasOwnProperty('title')) {
				me._map_1.ggCalculateFloorplanSize(mapDetails);
				me._map_1.ggShowSimpleFloorplan(mapDetails);
				me._map_1.ggPlaceMarkersOnSimpleFloorplan();
			}
			if (me._map_1.ggRadar) me._map_1.ggRadar.update();
		}
		me._map_1.ggUpdatePosition=function (useTransition) {
			for (var i=0; i < me._map_1.ggMarkerInstances.length; i++) {
				me._map_1.ggMarkerInstances[i].ggEvent_sizechanged();
			}
			me._map_1.ggUpdateConditionResize();
		}
		me._on5.appendChild(me._map_1);
		me.__68.appendChild(me._on5);
		el=me._on20=document.createElement('div');
		el.ggId="\ud3c9\uba74\ub3c4on-2\uce35";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		hs+='over-flow:hidden;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._on20.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._on20.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.tags.indexOf("2\uce35") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._on20.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._on20.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._on20.style.transition='';
				if (me._on20.ggCurrentLogicStateVisible == 0) {
					me._on20.style.visibility=(Number(me._on20.style.opacity)>0||!me._on20.style.opacity)?'inherit':'hidden';
					me._on20.ggVisible=true;
				}
				else {
					me._on20.style.visibility="hidden";
					me._on20.ggVisible=false;
				}
			}
		}
		me._on20.logicBlock_visible();
		me._on20.ggUpdatePosition=function (useTransition) {
		}
		el=me._map_2=document.createElement('div');
		el.ggFilter = '';
		el.ggFilteredIds = [];
		el.ggMapNotLoaded = true;
		el.ggMapId = 'FloorPlan02';
		el.ggId="Map 2";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_map ";
		el.ggType='map';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._map_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._map_2.ggUpdateConditionResize=function () {
			var mapDetails = player.getMapDetails(me._map_2.ggMapId);
			if (mapDetails.hasOwnProperty('title')) {
				me._map_2.ggCalculateFloorplanSize(mapDetails);
				me._map_2.ggShowSimpleFloorplan(mapDetails);
				me._map_2.ggPlaceMarkersOnSimpleFloorplan();
			}
			if (me._map_2.ggRadar) me._map_2.ggRadar.update();
		}
		me._map_2.ggUpdatePosition=function (useTransition) {
			for (var i=0; i < me._map_2.ggMarkerInstances.length; i++) {
				me._map_2.ggMarkerInstances[i].ggEvent_sizechanged();
			}
			me._map_2.ggUpdateConditionResize();
		}
		me._on20.appendChild(me._map_2);
		me.__68.appendChild(me._on20);
		me.__67.appendChild(me.__68);
		me.__64.appendChild(me.__67);
		el=me._pc=document.createElement('div');
		el.ggId="PC-\uc704\uce58\uc124\uba85";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : -70px;';
		hs+='cursor : pointer;';
		hs+='height : 60px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._pc.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._pc.ggUpdatePosition=function (useTransition) {
		}
		el=me._pc0=document.createElement('div');
		el.ggId="pc-\uc704\uce58\uc124\uba85\ubc30\uacbd";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #000000;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 10px;';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._pc0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._pc0.onclick=function (e) {
			player.setVariableValue('vis_mobiletype', false);
			player.setVariableValue('vis_hambegur', false);
			player.setVariableValue('vis_mobilecatagory', !player.getVariableValue('vis_mobilecatagory'));
		}
		me._pc0.ggUpdatePosition=function (useTransition) {
		}
		el=me.__65=document.createElement('div');
		el.ggId="\ucee8\ud14c\uc774\ub108";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 40%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__65.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__65.ggUpdatePosition=function (useTransition) {
		}
		el=me.__66=document.createElement('div');
		els=me.__66__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uce35 \uc774\ub984";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,0.784314);';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 9px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 8px 8px 4px 8px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__66.ggUpdateText=function() {
			var params = [];
			var hs = player._("<div class=\"ggmarkdown\"><p>Location<\/p>\n<div>", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__66.ggUpdateText();
		el.appendChild(els);
		me.__66.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__66.ggUpdatePosition=function (useTransition) {
		}
		me.__65.appendChild(me.__66);
		el=me._pc2=document.createElement('div');
		els=me._pc2__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="pc\uce35\uc218";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 96.9388%;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 10px;';
		hs+='font-weight: inherit;';
		hs+='text-align: right;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 8px 8px 4px 8px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._pc2.ggUpdateText=function() {
			var params = [];
			var hs = player._("", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._pc2.ggUpdateText();
		el.appendChild(els);
		me._pc2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._pc2.ggUpdatePosition=function (useTransition) {
		}
		me.__65.appendChild(me._pc2);
		me._pc0.appendChild(me.__65);
		el=me._pc1=document.createElement('div');
		el.ggId="pc-\uc704\uce58\uc124\uba85\ucee8\ud14c\uc774\ub108";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 0px;';
		hs+='height : 60%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._pc1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._pc1.ggUpdatePosition=function (useTransition) {
		}
		el=me._room=document.createElement('div');
		els=me._room__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="room";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 11px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 4px 8px 4px 8px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._room.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.ggUserdata.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._room.ggUpdateText();
		player.addListener('changenode', function() {
			me._room.ggUpdateText();
		});
		el.appendChild(els);
		me._room.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._room.ggUpdatePosition=function (useTransition) {
		}
		me._pc1.appendChild(me._room);
		el=me._pcdown=document.createElement('div');
		els=me._pcdown__img=document.createElement('img');
		els.className='ggskin ggskin_pcdown';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAjtJREFUeF7tm2tSwzAMhKOT0Z4MOBm5mZhkmozrKH7q4Uf7F4aS3dV+sguwTP6CyZ9/+QgwfQIQ8WdiEVZ4CfA9qQjPvQMmFWEFgFOAx7Isf5Ol4AkA60mByVKwu78Z/oZBRMQZUgAA53P7AmxEGL0QfwHgJN9lERo8BWf0j6RTAoycgr343DEnV+FBC/Hi/qUEXWUGHIWL+zEBRhqFt+KLjsDxDaOkwMWej/ngcXiQLiCjf0sBXyFE3FbkbVXu8UUWX/IIDHBQCrofLEGPCD0WYtT9ZAFeSejtnBB1P1eAnlJwi70sChCF2EMKkqKfTIEOuyAp+kUCdECFLPezOsDZDlu+Pstyv0iAhlOQ7X6xAC1iMbTvh1bY4o/GGjsnJG'+
			'OvCoONYrEo+sUUaBCL2cWXdRiKHQGNR6HK/aoS9JJgtSFWuc8pgMU5obj4WEfAWZBUU1CKPVYKGBZidfRZKEBgUeP6rLr4REZAcUVmc5+tBBVHgdV9EQGEzwms7ksKIIFFFuyJUUD4nMAefREKCHYBe/TFBWCkgpj7Yh3gbIcc12di7osLwJACUfdVBKjBIte+HzrSF1+Jxe4JGApRBHtqGKzEonj0VShQkQLR4hM7DMXGIvH6TM19tRL0khC7OFFz30qA0DlBpfjMRsBZkMgUaGDPjAIJhagafXUKEFh0r89Ui898BIgV2cR9kxIkRuHr+O+NGEYlvq6yCod+cUR8+H/CLvGgdz/TXADNh6Xe6yOAtQPW7z99Av4BNvUOymgfMjYAAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="pc-down";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 8px;';
		hs+='position : absolute;';
		hs+='right : 10px;';
		hs+='top : calc(50% - ((8px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 8px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._pcdown.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._pcdown.ggUpdatePosition=function (useTransition) {
		}
		me._pc1.appendChild(me._pcdown);
		me._pc0.appendChild(me._pc1);
		me._pc.appendChild(me._pc0);
		me.__64.appendChild(me._pc);
		me.divSkin.appendChild(me.__64);
		el=me._videocontainer=document.createElement('div');
		el.ggId="video-container";
		el.ggDx=-2;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 65%;';
		hs+='left : calc(50% - ((65% + 0px) / 2) - 2%);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((65% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 65%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._videocontainer.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._videocontainer.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize().width <= 460))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._videocontainer.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._videocontainer.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._videocontainer.style.transition='';
				if (me._videocontainer.ggCurrentLogicStateVisible == 0) {
					me._videocontainer.style.visibility="hidden";
					me._videocontainer.ggVisible=false;
				}
				else {
					me._videocontainer.style.visibility="hidden";
					me._videocontainer.ggVisible=false;
				}
			}
		}
		me._videocontainer.logicBlock_visible();
		me._videocontainer.ggUpdatePosition=function (useTransition) {
		}
		el=me._videobg=document.createElement('div');
		el.ggId="video-bg";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.588235);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 10px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._videobg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._videobg.ggUpdatePosition=function (useTransition) {
		}
		el=me._video_1=document.createElement('div');
		me._video_1.seekbars = [];
			me._video_1.ggYoutubeApiReady = function() { skin.ggYoutubeApiLoaded = true;}
		me._video_1.ggInitMedia = function(media) {
			var notifySeekbars = function() {
				for (var i = 0; i < me._video_1.seekbars.length; i++) {
					var seekbar = me.findElements(me._video_1.seekbars[i]);
					if (seekbar.length > 0) seekbar[0].ggConnectToMediaEl();
				}
			}
			while (me._video_1.hasChildNodes()) {
				me._video_1.removeChild(me._video_1.lastChild);
			}
			if(media == '') {
				notifySeekbars();
				if (me._video_1.ggVideoNotLoaded == false && me._video_1.ggDeactivate && player.isPlaying('video_1')) { me._video_1.ggDeactivate(); }
				me._video_1.ggVideoNotLoaded = true;
				return;
			}
			me._video_1.ggVideoNotLoaded = false;
			me._video_1__vid=document.createElement('iframe');
			me._video_1__vid.className='ggskin ggskin_video';
			var ggYoutubeMedia = media;
			var ggTimeParam = '';
			if (ggYoutubeMedia.indexOf('&') != -1) {
				ggTimeParam = 'start' + media.slice(ggYoutubeMedia.indexOf('&') + 2) + '&amp;';
				ggYoutubeMedia = ggYoutubeMedia.slice(0, ggYoutubeMedia.indexOf('&'));
			}
			var ggVideoParams = '?' + ggTimeParam + 'autoplay=0&amp;controls=1&amp;loop=1&amp;enablejsapi=0&amp;rel=0';
			var ggVideoUrl = 'https://www.youtube.com/embed/' + ggYoutubeMedia + ggVideoParams;
			me._video_1__vid.setAttribute('src', ggVideoUrl);
			me._video_1__vid.setAttribute('width', '100%');
			me._video_1__vid.setAttribute('height', '100%');
			me._video_1__vid.setAttribute('allow', 'autoplay');
			me._video_1__vid.setAttribute('allowfullscreen', 'true');
			me._video_1__vid.setAttribute('style', 'border:none; ; ;');
			me._video_1.appendChild(me._video_1__vid);
			me._video_1.ggVideoSource = media;
			if (skin.ggYoutubeApiLoaded && skin.ggYoutubeApiLoaded == true) {me._video_1.ggYoutubeApiReady();}
		}
		el.ggId="Video 1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_video ";
		el.ggType='video';
		hs ='';
		hs+='height : 80%;';
		hs+='left : calc(50% - ((80% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((80% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 80%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._video_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._video_1.ggUpdatePosition=function (useTransition) {
		}
		me._videobg.appendChild(me._video_1);
		me._videocontainer.appendChild(me._videobg);
		me.divSkin.appendChild(me._videocontainer);
		el=me.__48=document.createElement('div');
		el.ggId="\uc0ac\uc774\ub4dc\ubc14 - \ubaa8\ubc14\uc77c";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 0px;';
		hs+='height : 65px;';
		hs+='left : 0%;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		hs+='min-width:320px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__48.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__48.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize().width <= 460))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__48.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__48.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__48.style.transition='';
				if (me.__48.ggCurrentLogicStateVisible == 0) {
					me.__48.style.visibility=(Number(me.__48.style.opacity)>0||!me.__48.style.opacity)?'inherit':'hidden';
					me.__48.ggVisible=true;
				}
				else if (me.__48.ggCurrentLogicStateVisible == 1) {
					me.__48.style.visibility=(Number(me.__48.style.opacity)>0||!me.__48.style.opacity)?'inherit':'hidden';
					me.__48.ggVisible=true;
				}
				else {
					me.__48.style.visibility="hidden";
					me.__48.ggVisible=false;
				}
			}
		}
		me.__48.logicBlock_visible();
		me.__48.ggUpdatePosition=function (useTransition) {
		}
		el=me.__49=document.createElement('div');
		el.ggId="\ubaa8\ubc14\uc77c \uc0ac\uc774\ub4dc\ubc14 \ubc30\uacbd";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 0px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='background: linear-gradient(180deg, rgba(97, 101, 105, 0.4) 0%, rgba(97, 101, 105, 0.7) 98%); box-shadow: 0 12px 24px 0 rgb(0 0 0 \/ 10%); box-sizing:content-box; padding:5px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__49.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__49.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width == 0))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me.__49.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__49.ggCurrentLogicStateSize = newLogicStateSize;
				me.__49.style.transition='width 0s, height 0s';
				if (me.__49.ggCurrentLogicStateSize == 0) {
					me.__49.style.width='100%';
					me.__49.style.height='90%';
					me.__49.style.left = 'calc(50% - (100% / 2))';
					skin.updateSize(me.__49);
				}
				else {
					me.__49.style.width='100%';
					me.__49.style.height='100%';
					me.__49.style.left = 'calc(50% - (100% / 2))';
					skin.updateSize(me.__49);
				}
			}
		}
		me.__49.logicBlock_size();
		me.__49.ggUpdatePosition=function (useTransition) {
		}
		el=me.__50=document.createElement('div');
		el.ggId="\ud3c9\uba74\ub3c4\ubcf4\uae30-\ubaa8\ubc14\uc77c";
		el.ggDx=-41;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='z-index: 99;';
		hs+='cursor : pointer;';
		hs+='height : 66.6667%;';
		hs+='left : calc(50% - ((7.8125% + 0px) / 2) - 41%);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((66.6667% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 7.8125%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__50.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__50.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 380))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me.__50.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__50.ggCurrentLogicStateSize = newLogicStateSize;
				me.__50.style.transition='width 0s, height 0s, transform 0s';
				if (me.__50.ggCurrentLogicStateSize == 0) {
					me.__50.style.width='3.81%';
					me.__50.style.height='63.67%';
					me.__50.style.left = 'calc(50% - (3.81% / 2) + (0px / 2) + -41%)';
					me.__50.style.top = 'calc(50% - (63.67% / 2))';
					skin.updateSize(me.__50);
				}
				else {
					me.__50.style.width='7.8125%';
					me.__50.style.height='66.6667%';
					me.__50.style.left = 'calc(50% - (7.8125% / 2) + (0px / 2) + -41%)';
					me.__50.style.top = 'calc(50% - (66.6667% / 2))';
					skin.updateSize(me.__50);
				}
			}
		}
		me.__50.logicBlock_size();
		me.__50.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getViewerSize().width <= 320))
			)
			{
				newLogicStateScaling = 0;
			}
			else if (
				((player.getViewerSize().width <= 380))
			)
			{
				newLogicStateScaling = 1;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me.__50.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me.__50.ggCurrentLogicStateScaling = newLogicStateScaling;
				me.__50.style.transition='width 0s, height 0s, transform 0s';
				if (me.__50.ggCurrentLogicStateScaling == 0) {
					me.__50.ggParameter.sx = 0.8;
					me.__50.ggParameter.sy = 0.8;
					me.__50.style.transform=parameterToTransform(me.__50.ggParameter);
					skin.updateSize(me.__50);
				}
				else if (me.__50.ggCurrentLogicStateScaling == 1) {
					me.__50.ggParameter.sx = 0.85;
					me.__50.ggParameter.sy = 0.85;
					me.__50.style.transform=parameterToTransform(me.__50.ggParameter);
					skin.updateSize(me.__50);
				}
				else {
					me.__50.ggParameter.sx = 1;
					me.__50.ggParameter.sy = 1;
					me.__50.style.transform=parameterToTransform(me.__50.ggParameter);
					skin.updateSize(me.__50);
				}
			}
		}
		me.__50.logicBlock_scaling();
		me.__50.ggUpdatePosition=function (useTransition) {
		}
		el=me.__510=document.createElement('div');
		el.ggId="\uc0ac\uc774\ub4dc\ubc84\ud2bc\ubc30\uacbd5-\ubaa8\ubc14\uc77c";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #ffffff;';
		hs+='border-radius : 15px;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__510.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__510.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('vis_buttonbg') == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__510.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__510.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__510.style.transition='background-color 500ms ease 0ms';
				if (me.__510.ggCurrentLogicStateBackgroundColor == 0) {
					me.__510.style.backgroundColor="rgba(0,0,0,1)";
				}
				else {
					me.__510.style.backgroundColor="rgba(255,255,255,1)";
				}
			}
		}
		me.__510.logicBlock_backgroundcolor();
		me.__510.onclick=function (e) {
			player.setVariableValue('vis_buttonbg', !player.getVariableValue('vis_buttonbg'));
			me.__96.ggVisible = !me.__96.ggVisible;
			var flag=me.__96.ggVisible;
			me.__96.style.transition='none';
			me.__96.style.visibility=((flag)&&(Number(me.__96.style.opacity)>0||!me.__96.style.opacity))?'inherit':'hidden';
			player.setVariableValue('vis_mobilemenu', !player.getVariableValue('vis_mobilemenu'));
		}
		me.__510.ggUpdatePosition=function (useTransition) {
		}
		el=me._mon0=document.createElement('div');
		els=me._mon0__img=document.createElement('img');
		els.className='ggskin ggskin_mon0';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAYxJREFUeF7tm2sSgjAMhMvJ1JOpJ1NPppMRnE6sNoHUyvDx15Kmax67AYa08WsYz3/fKA4DABABTwR0Clw7pcRe7Rvth7ZfTAHZ9NAJgEtKKXdyStEod97sl2oAABABpAA1gCIYVXaddugCtEF4AEQIJpgVTqiws4vUlqMFdJdBDBUGIqhB1CBqEDW4eTV4KzTUU63Jji1GDx4Nt72WHNXis+fmlJIU8G+DVBMP+LSnhZXpDZz+L14ukQsAX2AkAv6dCS7OgYoBUwT0ZIIA0BgBIoAaoGaO/yaHG2dAIgUsKfBLJuhlbtER4npFpgUVBgAnd/9ZBJRUmEUNflqTqzwhWpParNnURcurDjVgO0sNiGaCIo/lINNVC/vc6RyACL'+
			'+6dAEAIAJIAWoARZAuQBuEB0CERgRgghUBBBWOlnyZvdVpgWgsAGBtcpgICEaAFCAFDA9GJOpafq4WZVvmgzVbMnOUOeB0mT6bC067ZuYEgNpQVX7Xr93kDrmeCzQ7yUzDABAZATP/hPXf9gC2KRZQ3m8duAAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="m-\ubbf8\ub2c8\ub9f5ON";
		el.ggDx=0;
		el.ggDy=-5;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((20px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((20px + 0px) / 2) - 5px);';
		hs+='visibility : inherit;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._mon0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._mon0.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_buttonbg') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._mon0.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._mon0.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._mon0.style.transition='';
				if (me._mon0.ggCurrentLogicStateVisible == 0) {
					me._mon0.style.visibility="hidden";
					me._mon0.ggVisible=false;
				}
				else {
					me._mon0.style.visibility=(Number(me._mon0.style.opacity)>0||!me._mon0.style.opacity)?'inherit':'hidden';
					me._mon0.ggVisible=true;
				}
			}
		}
		me._mon0.logicBlock_visible();
		me._mon0.ggUpdatePosition=function (useTransition) {
		}
		el=me._mon_0=document.createElement('div');
		els=me._mon_0__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="m-\ubbf8\ub2c8\ub9f5ON \uba58\ud2b8";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 5px;';
		hs+='bottom : -18px;';
		hs+='color : rgba(0,0,0,1);';
		hs+='cursor : default;';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		hs+='text-align:center;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 9px;';
		hs+='font-weight: lighter;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 3px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._mon_0.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ubbf8\ub2c8\ub9f5ON", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._mon_0.ggUpdateText();
		el.appendChild(els);
		me._mon_0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._mon_0.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((player.getVariableValue('vis_buttonbg') == true))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me._mon_0.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me._mon_0.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me._mon_0.style.transition='color 0s';
				if (me._mon_0.ggCurrentLogicStateTextColor == 0) {
					me._mon_0.style.color="rgba(255,255,255,1)";
				}
				else {
					me._mon_0.style.color="rgba(0,0,0,1)";
				}
			}
		}
		me._mon_0.logicBlock_textcolor();
		me._mon_0.ggUpdatePosition=function (useTransition) {
		}
		me._mon0.appendChild(me._mon_0);
		me.__510.appendChild(me._mon0);
		el=me._moff0=document.createElement('div');
		els=me._moff0__img=document.createElement('img');
		els.className='ggskin ggskin_moff0';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAbpJREFUeF7tm2tygzAMhOWTtTlZm5M1PZk6aiFDFAM2yHEZPv+NLZuNHrvCJDn5SPb8qqpnxCHZAAA8IBsCt04h8e72jT7Hg/25ELillC49AFDVLxG5H3IM0aiz5OzncgAA4AGEADmAJBiVeWvsUAUog/AAiBBMECqMFkAMjdwBNTh0rGrI1NJc5HCGaNEPyDRFaYicviEiIt8+maSUPteSkapaCfONzbVl098/3ORrzWIRMe+dbaSWJsHsniUlyW9QefiI6RcAwAP2h0C3KhARA4cmQgDQGIHSKkAI9CJCjR3A7kE8tdz+lRYAgMYIlHrAK5lgFXOLxqfqikwjKgwANdz9lR7wpMIK1eCcYpyqPFNrv2pzzWZGXNWqQ4/Zm3'+
			'/v0LwKDBLZys84Ft1+emIHwG5+UpoEd2/kHsL6AwCABxAC5ACS4IAAVWCJ/FAGJwjAAx71+25+AhHq0RCBCv+9LttEhaPV3+FCAACCEcADjpYEgx2gT1t8TxUAgGAESnOAbdvyc7Uo29c1TaGq1qO0PuA4ij6bC8a9mTkDYPHazgCAv3ZzP1DVe4Fmj7HdMACEecD2P+H4K38A12AvbuazjaEAAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="m-\ubbf8\ub2c8\ub9f5OFF";
		el.ggDx=0;
		el.ggDy=-5;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((20px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((20px + 0px) / 2) - 5px);';
		hs+='visibility : hidden;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._moff0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._moff0.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_buttonbg') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._moff0.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._moff0.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._moff0.style.transition='';
				if (me._moff0.ggCurrentLogicStateVisible == 0) {
					me._moff0.style.visibility=(Number(me._moff0.style.opacity)>0||!me._moff0.style.opacity)?'inherit':'hidden';
					me._moff0.ggVisible=true;
				}
				else {
					me._moff0.style.visibility="hidden";
					me._moff0.ggVisible=false;
				}
			}
		}
		me._moff0.logicBlock_visible();
		me._moff0.ggUpdatePosition=function (useTransition) {
		}
		el=me._moff_0=document.createElement('div');
		els=me._moff_0__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="m-\ubbf8\ub2c8\ub9f5OFF \uba58\ud2b8";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 5px;';
		hs+='bottom : -18px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		hs+='text-align:center;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 9px;';
		hs+='font-weight: lighter;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 3px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._moff_0.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ubbf8\ub2c8\ub9f5OFF", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._moff_0.ggUpdateText();
		el.appendChild(els);
		me._moff_0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._moff_0.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((player.getVariableValue('vis_buttonbg') == true))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me._moff_0.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me._moff_0.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me._moff_0.style.transition='color 0s';
				if (me._moff_0.ggCurrentLogicStateTextColor == 0) {
					me._moff_0.style.color="rgba(255,255,255,1)";
				}
				else {
					me._moff_0.style.color="rgba(255,255,255,1)";
				}
			}
		}
		me._moff_0.logicBlock_textcolor();
		me._moff_0.ggUpdatePosition=function (useTransition) {
		}
		me._moff0.appendChild(me._moff_0);
		me.__510.appendChild(me._moff0);
		me.__50.appendChild(me.__510);
		el=me._m=document.createElement('div');
		el.ggId="\uac00\uad6c\uc628\uc624\ud504-m";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='z-index: 99;';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 170%;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._m.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._m.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getViewerSize().width <= 320))
			)
			{
				newLogicStatePosition = 0;
			}
			else if (
				((player.getViewerSize().width <= 380))
			)
			{
				newLogicStatePosition = 1;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._m.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._m.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._m.style.transition='left 0s, top 0s';
				if (me._m.ggCurrentLogicStatePosition == 0) {
					me._m.style.left='430%';
					me._m.style.top = 'calc(50% - (100% / 2))';
				}
				else if (me._m.ggCurrentLogicStatePosition == 1) {
					me._m.style.left='400%';
					me._m.style.top = 'calc(50% - (100% / 2))';
				}
				else {
					me._m.style.left='170%';
					me._m.style.top='calc(50% - ((100% + 0px) / 2) + 0px)';
				}
			}
		}
		me._m.logicBlock_position();
		me._m.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize().width <= 460))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._m.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._m.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._m.style.transition='left 0s, top 0s';
				if (me._m.ggCurrentLogicStateVisible == 0) {
					me._m.style.visibility=(Number(me._m.style.opacity)>0||!me._m.style.opacity)?'inherit':'hidden';
					me._m.ggVisible=true;
				}
				else if (me._m.ggCurrentLogicStateVisible == 1) {
					me._m.style.visibility=(Number(me._m.style.opacity)>0||!me._m.style.opacity)?'inherit':'hidden';
					me._m.ggVisible=true;
				}
				else {
					me._m.style.visibility="hidden";
					me._m.ggVisible=false;
				}
			}
		}
		me._m.logicBlock_visible();
		me._m.ggUpdatePosition=function (useTransition) {
		}
		el=me.__63=document.createElement('div');
		el.ggId="\ud654\uc0b4\ud45c \uc628\uc624\ud504";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #ffffff;';
		hs+='border-radius : 15px;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__63.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__63.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('vis_buttonbg_1') == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__63.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__63.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__63.style.transition='background-color 500ms ease 0ms';
				if (me.__63.ggCurrentLogicStateBackgroundColor == 0) {
					me.__63.style.backgroundColor="rgba(0,0,0,1)";
				}
				else {
					me.__63.style.backgroundColor="rgba(255,255,255,1)";
				}
			}
		}
		me.__63.logicBlock_backgroundcolor();
		me.__63.onclick=function (e) {
			player.setVariableValue('vis_buttonbg_1', !player.getVariableValue('vis_buttonbg_1'));
			var list=me.findElements("ht_node",true);
			while(list.length>0) {
				var e=list.pop();
				e.ggVisible = !e.ggVisible;
				var flag=e.ggVisible;
				e.style.transition='none';
				e.style.visibility=((flag)&&(Number(e.style.opacity)>0||!e.style.opacity))?'inherit':'hidden';
			}
		}
		me.__63.ggUpdatePosition=function (useTransition) {
		}
		el=me._mon=document.createElement('div');
		els=me._mon__img=document.createElement('img');
		els.className='ggskin ggskin_mon';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAb9JREFUeF7tmm1ugzAMQM3J1p1s28m6m20yIlXG2sT4K5g4/yqB8Xuxkwi6wORjmZwfUkBWwOQGsgUmL4BcBLMFsgUmN5AtMHkB5C6QLTCwBT4B4GN7/hcA4G/3MaoC7gBw29F+A8C7t4ERAp7BF253Cd4CWvBDJHgKoMC7S/AScATeVYKHAA68mwRrARJ4FwmWAijwZdvDa1vDbHewEkCFRzAceCYYIsFCQA/+1WyiBDwZ7g9IdWWoV4K2AC58DakRg3yg1BSgmbhmrKYMLQEWCVvE/CdDQ4BlopaxVxlSAeYJbruD2cIoEeABX0rW7FlcAWYJNVYsk2dyBJgkQty31J99VIB6AkRws3PCEQFngFdfE6gCzgSvKoEi4Izwah'+
			'J6As4MryKhJSACvFjCKwGR4EUSngmICM+WsBcQGZ4loRZwBfjDEoqAK8FTJawfZIuAn8aRVP09HOP4y72lN7FLT0Bk+F4lrGxFQP2tvtx4BfiWhD8tgBeihLfttfSwPyxwa51wX90OD77eUZgQN/YlKSD2/MmzzwqQO4wdISsg9vzJs88KkDuMHSErIPb8ybPPCpA7jB0hKyD2/Mmz/wVtzXZBX1ApowAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="m-\ud654\uc0b4\ud45cON";
		el.ggDx=0;
		el.ggDy=-5;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((20px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((20px + 0px) / 2) - 5px);';
		hs+='visibility : inherit;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._mon.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._mon.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_buttonbg_1') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._mon.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._mon.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._mon.style.transition='';
				if (me._mon.ggCurrentLogicStateVisible == 0) {
					me._mon.style.visibility="hidden";
					me._mon.ggVisible=false;
				}
				else {
					me._mon.style.visibility=(Number(me._mon.style.opacity)>0||!me._mon.style.opacity)?'inherit':'hidden';
					me._mon.ggVisible=true;
				}
			}
		}
		me._mon.logicBlock_visible();
		me._mon.ggUpdatePosition=function (useTransition) {
		}
		el=me._mon_=document.createElement('div');
		els=me._mon___text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="m-\ud654\uc0b4\ud45cON \uba58\ud2b8";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 5px;';
		hs+='bottom : -18px;';
		hs+='color : rgba(0,0,0,1);';
		hs+='cursor : default;';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 9px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._mon_.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ud654\uc0b4\ud45c ON\n", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._mon_.ggUpdateText();
		el.appendChild(els);
		me._mon_.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._mon_.ggUpdatePosition=function (useTransition) {
		}
		me._mon.appendChild(me._mon_);
		me.__63.appendChild(me._mon);
		el=me._moff=document.createElement('div');
		els=me._moff__img=document.createElement('img');
		els.className='ggskin ggskin_moff';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAcpJREFUeF7tmmt2wiAQRpmV1a6sdWV1Z/SQAzamJLzmhQz/PEdh7uUjGaPgFh+wOL8zAZaAxQ3YEVg8AHYRtCNgR2BxA3YEFg+A3QXsCEgdAe/9t3PuK65/B4Dwmn2IJMB7/+Ocux1oHwDwyW2AXcAJfOJml8AqoAAvIoFNQCU8uwQWAY3wrBLIBXTCs0kgFTAIzyKBTEAlfLrthdvi1SC7O5AIqIUHgEeg9t6HnkBEArqACvjsbkYJoTM8Nkj7ZKAnAVVAL/yeEGOOlm4STQBm4ZhzlWSgCKAomGLOnIxhAZSFUs6dZAwJ4CiQeo1uAdSFcV0YuwRwwicRVGs2C6AqpHS1jg1T7kHKUJ/QJEASnioJ1QI0wFNIqBKgCR5bQl'+
			'GARnhMCZcCNMNjSTgVMAM8hoSsgJngRyX8EzAj/IiEFwEzw/dKeAp4B/geCZuAd4JvkLD9IJsE+IteHP05XE3fj/Ge0sZCGDEBZwKmha9IwsaWBOx/q0+fnR6+IOHvCMQUBAkf8bG02B8WMKKfm+NwHJ58xe8CVAVpmdcEaNkJqTosAVLmtaxrCdCyE1J1WAKkzGtZ1xKgZSek6rAESJnXsq4lQMtOSNXxC3uZJ1B7VK1pAAAAAElFTkSuQmCC';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="m-\ud654\uc0b4\ud45cOFF";
		el.ggDx=0;
		el.ggDy=-5;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((20px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((20px + 0px) / 2) - 5px);';
		hs+='visibility : hidden;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._moff.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._moff.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_buttonbg_1') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._moff.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._moff.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._moff.style.transition='';
				if (me._moff.ggCurrentLogicStateVisible == 0) {
					me._moff.style.visibility=(Number(me._moff.style.opacity)>0||!me._moff.style.opacity)?'inherit':'hidden';
					me._moff.ggVisible=true;
				}
				else {
					me._moff.style.visibility="hidden";
					me._moff.ggVisible=false;
				}
			}
		}
		me._moff.logicBlock_visible();
		me._moff.ggUpdatePosition=function (useTransition) {
		}
		el=me._moff_=document.createElement('div');
		els=me._moff___text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="m-\ud654\uc0b4\ud45cOFF \uba58\ud2b8";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 5px;';
		hs+='bottom : -18px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 9px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._moff_.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ud654\uc0b4\ud45c OFF", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._moff_.ggUpdateText();
		el.appendChild(els);
		me._moff_.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._moff_.ggUpdatePosition=function (useTransition) {
		}
		me._moff.appendChild(me._moff_);
		me.__63.appendChild(me._moff);
		me._m.appendChild(me.__63);
		el=me.__51=document.createElement('div');
		el.ggId="\uc635\uc158\uc628\uc624\ud504-\ubaa8\ubc14\uc77c";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='z-index: 99;';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 170%;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__51.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__51.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getViewerSize().width <= 320))
			)
			{
				newLogicStatePosition = 0;
			}
			else if (
				((player.getViewerSize().width <= 380))
			)
			{
				newLogicStatePosition = 1;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__51.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__51.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__51.style.transition='left 0s, top 0s';
				if (me.__51.ggCurrentLogicStatePosition == 0) {
					me.__51.style.left='430%';
					me.__51.style.top = 'calc(50% - (100% / 2))';
				}
				else if (me.__51.ggCurrentLogicStatePosition == 1) {
					me.__51.style.left='400%';
					me.__51.style.top = 'calc(50% - (100% / 2))';
				}
				else {
					me.__51.style.left='170%';
					me.__51.style.top='calc(50% - ((100% + 0px) / 2) + 0px)';
				}
			}
		}
		me.__51.logicBlock_position();
		me.__51.ggUpdatePosition=function (useTransition) {
		}
		el=me.__62=document.createElement('div');
		el.ggId="\uc804\uccb4\ud654\uba74 \uc628\uc624\ud504";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #ffffff;';
		hs+='border-radius : 15px;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__62.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__62.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('vis_buttonbg_2') == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__62.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__62.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__62.style.transition='background-color 500ms ease 0ms';
				if (me.__62.ggCurrentLogicStateBackgroundColor == 0) {
					me.__62.style.backgroundColor="rgba(0,0,0,1)";
				}
				else {
					me.__62.style.backgroundColor="rgba(255,255,255,1)";
				}
			}
		}
		me.__62.logicBlock_backgroundcolor();
		me.__62.onclick=function (e) {
			player.setVariableValue('vis_buttonbg_2', !player.getVariableValue('vis_buttonbg_2'));
			player.toggleFullscreen();
		}
		me.__62.ggUpdatePosition=function (useTransition) {
		}
		el=me._m_on3=document.createElement('div');
		els=me._m_on3__img=document.createElement('img');
		els.className='ggskin ggskin_m_on3';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAA35JREFUeF7tWwFOBDEI7L1MfZn6MvVlGjbHptsDBtrttrveJSZGW9oZKAXK3dI//9wA/teU0vt9DP1ufT5TSh/KAJaDZPB0kvV9/5FEfqWUkCya/3OfrO0raQREN5xvXFrst8LQCMCbMI/ks1IiYkUFSQTULkCbkTZNZJLGaj5EAMnMPx7ta2s9kFAS0AKeFtWOQc2mNQtoIfRhjzkBCHypiZJlPrca+yT/JWAGljwkC/mH1bJyArRzajm3AJ4hQzWlrtbFBGgDpTM4BEnDotqRWbBZBJxZ8yVfkoIXK2ACJCeFYoQGpQyZWh7xDQHS+Z+RAOTcLEctKplBiuwM0ZO+qPcqjVzFt7MQgK7okjbJek9tAV7tMxHeCPI0FhCN/i'+
			'5HAGuWEy2UDF2WACLCcxwuS4AHPJEUJqAUPGMU6AWvEVD6kQVjmQ1StoayuhHhgQaeqz6lT9ByGM4iqVK0+JMZo72SYAs8AZVuCHcSNzsBCDyTVUayblzugQPs3guetkZWQD/hIzwrARHwTbpBBKDsCy2OymjS/N7gCdO6L4mA2pK4uxJrsNYTfI6LCFhuu72rwho2j1fuCV6KIMU4AMXYyORrraA3eC2EXrNBGlDzeuMlxPI1R4CHBFjlY5rMb2xewDzOet+zEhvtUSS6fj7eLIhIBPTOB47SPJMQqgj1DpOPBg+PwJFF0RHgpyFgFPgpCBgJfjgBo8EPJWAG8N0IyONrqa9nFvBEQHnVm2+D3kBEFHq/eGvBc26vNjY1REP5njbP47XXoPaoWgs+l+dVQpQPMR3ekwDauFRHQICkaNSTRUYJ2IxvfRz1JlAIvHRG'+
			'6W+XIMAD/rIEeMFflgA+b57M8ggfwNf2w8PInk5Qc0rIGnoT0CUO8DpBJsWqDPUmIFQPQNqyigyaBaBjcEoCNOdVkrCWoY1L+7QENAUi2eQnAcL3APYMhLr4gL20f0Qc8CRAyFGmapPr7QPEzLU1GTrTEQg1S3vjgLMQoD78WO3ye3pgD1G9Ota1LtPN67DkIY+0Au1tEjVwIGKtJutFNi9g9eLWdHmgjeX/17pQPF/EtNaxultW2TnDkUbECMDasZr2o63z5fobYvNFoh3ZtcA88yzttygKfnGSNteygAccGoOcb40FqMmYZWa0Ueq7a+0UQ4DZx6xVGjRBeOSQprBcs/W31cs69jr3kD841VBQNZZoNwAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="m-\uc804\uccb4\ud654\uba74 ON";
		el.ggDx=0;
		el.ggDy=-5;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((20px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((20px + 0px) / 2) - 5px);';
		hs+='visibility : inherit;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._m_on3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._m_on3.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_buttonbg_2') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._m_on3.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._m_on3.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._m_on3.style.transition='';
				if (me._m_on3.ggCurrentLogicStateVisible == 0) {
					me._m_on3.style.visibility="hidden";
					me._m_on3.ggVisible=false;
				}
				else {
					me._m_on3.style.visibility=(Number(me._m_on3.style.opacity)>0||!me._m_on3.style.opacity)?'inherit':'hidden';
					me._m_on3.ggVisible=true;
				}
			}
		}
		me._m_on3.logicBlock_visible();
		me._m_on3.ggUpdatePosition=function (useTransition) {
		}
		el=me._m_on_2=document.createElement('div');
		els=me._m_on_2__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="m-\uc804\uccb4\ud654\uba74 ON \uba58\ud2b8";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : -18px;';
		hs+='color : rgba(0,0,0,1);';
		hs+='cursor : default;';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 9px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._m_on_2.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc804\uccb4\ud654\uba74", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._m_on_2.ggUpdateText();
		el.appendChild(els);
		me._m_on_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._m_on_2.ggUpdatePosition=function (useTransition) {
		}
		me._m_on3.appendChild(me._m_on_2);
		me.__62.appendChild(me._m_on3);
		el=me._m_off3=document.createElement('div');
		els=me._m_off3__img=document.createElement('img');
		els.className='ggskin ggskin_m_off3';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAA69JREFUeF7tWwly3SAMhZO1OVmakzU5GRl5wMFYK4vBzv8znWlrDLwnoQ3Zu1/+8xz+EMJf59x7HAN/534f3vt/2IBsHmmO9PqHc+7Te/9JzPffOSfNBe9+wfvUvrZnnTa8bxxbLIQQKhQNCHgr3wshAMlJKJZpUQGdCGhYADZz2nSUPkis5vdWakEIQSN9aq0TCQcCGsHDoijLlZumNABUv5bQ0x53AhTg0fOYUQ3gyTFx/j8GNSDnU8wl2Ydds3ICqHNKGjcDmClDGaHu2rURwAw8ncEpSBoWZWzQho0j4LaSV3qOTQsSASfL6r1nY4QGoUx5FXHFBwJO539FAqI6kwQKRhgVctKAkgDUBU0RXVzU4ErVrhiEfAsCFC76IB'+
			'tMezEC70SANfpTRZB3IsAa/T2LgKTf8SjAP6Vk6JkExKBNcxyeSYDBE5gJKFldLgo0gAdFwQgo7ciGscwGIVtjs7oZsQADPlV9SpuA5jBZFvmVCjfLh7sceIjliWRHncQtTYAEPvMOh0jWEsYvS4AWfPQMcL7hj/kIL0mABXyrTdKUxavX4LIzatLR4MFm5PvCqsLpLkCqq2mJUbvUkeCLuwnwHpu3610VpkgRrfJI8EQEicYBUoytlXo5jtWC0eCpEHrPBuOAmtsbFSGcW7oCvEgAVz6OCLc7toofeb8nJDbdK1JSQQS7b1MbrwpioBRPZXXdwWs04NKi6NXgawgYIoWr1T7XTOkIXFIVniH5LF+YWxafCX76EZgNfioBK4AfRkARX5/6elYBHwkoXT17N6jyAkgAtb9XCz6SChkb2nBVE3MQhvBwPV7lBbDmJwh7'+
			'G8Dn+1AJwUoImg5TV8fS5ET3F6SaWCrNAiLCcTGLlPYoPW+6HDW0v4nSfDIBInjCSMF/314DVOCfTEA6gmJmecURyNz28WKksxGk7M5UI0i57KuM4EaKUBnCahLdbMCQbNB4YSnVBe9HAGO8ymOwl6Gp8zHaBgzRACnIsDx/EYB/B7C2DbBIWBr70oCXBqCfwvQ8AmjluykOkNTa8vyCI4Cm/L+CAILcn8tRIqDppn4aTaCKK5p3uTHMBxMiAepMrsMm0U/hLL0+2B64Jus0dzoCXC+u9LFUK36qEUPzISa3Ntfgsc+d9wlqWlBbwarfp6RvbZ1HFjwQmxNg7chWg6kYyEm/RVD8h5MxuWlZoALr6RXW+FZqAJmMUd8Op5o89N31apYiCyXxwV6lkVhUkpBsF9v6u2SfoERAz+ffZDNybuBVgbAAAAAASUVORK5CYI'+
			'I=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="m-\uc804\uccb4\ud654\uba74 OFF";
		el.ggDx=0;
		el.ggDy=-5;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((20px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((20px + 0px) / 2) - 5px);';
		hs+='visibility : hidden;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._m_off3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._m_off3.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_buttonbg_2') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._m_off3.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._m_off3.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._m_off3.style.transition='';
				if (me._m_off3.ggCurrentLogicStateVisible == 0) {
					me._m_off3.style.visibility=(Number(me._m_off3.style.opacity)>0||!me._m_off3.style.opacity)?'inherit':'hidden';
					me._m_off3.ggVisible=true;
				}
				else {
					me._m_off3.style.visibility="hidden";
					me._m_off3.ggVisible=false;
				}
			}
		}
		me._m_off3.logicBlock_visible();
		me._m_off3.ggUpdatePosition=function (useTransition) {
		}
		el=me._m_off_3=document.createElement('div');
		els=me._m_off_3__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="m-\uc804\uccb4\ud654\uba74 OFF \uba58\ud2b8";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : -18px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : pointer;';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 9px;';
		hs+='font-weight: lighter;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 2px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._m_off_3.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc804\uccb4\ud654\uba74", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._m_off_3.ggUpdateText();
		el.appendChild(els);
		me._m_off_3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._m_off_3.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((player.getVariableValue('vis_buttonbg_2') == true))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me._m_off_3.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me._m_off_3.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me._m_off_3.style.transition='color 0s';
				if (me._m_off_3.ggCurrentLogicStateTextColor == 0) {
					me._m_off_3.style.color="rgba(255,255,255,1)";
				}
				else {
					me._m_off_3.style.color="rgba(255,255,255,1)";
				}
			}
		}
		me._m_off_3.logicBlock_textcolor();
		me._m_off_3.ggUpdatePosition=function (useTransition) {
		}
		me._m_off3.appendChild(me._m_off_3);
		me.__62.appendChild(me._m_off3);
		me.__51.appendChild(me.__62);
		el=me.__52=document.createElement('div');
		el.ggId="\ubbf8\ub2c8\ub9f5\ubc84\ud2bc-\ubaa8\ubc14\uc77c";
		el.ggDx=170;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='z-index: 99;';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 170%);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__52.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__52.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getViewerSize().width <= 320))
			)
			{
				newLogicStatePosition = 0;
			}
			else if (
				((player.getViewerSize().width <= 380))
			)
			{
				newLogicStatePosition = 1;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__52.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__52.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__52.style.transition='left 0s, top 0s';
				if (me.__52.ggCurrentLogicStatePosition == 0) {
					me.__52.style.left = 'calc(50% - (100% / 2) + (0px / 2) + 430%)';
					me.__52.style.top = 'calc(50% - (100% / 2))';
				}
				else if (me.__52.ggCurrentLogicStatePosition == 1) {
					me.__52.style.left = 'calc(50% - (100% / 2) + (0px / 2) + 400%)';
					me.__52.style.top = 'calc(50% - (100% / 2))';
				}
				else {
					me.__52.style.left='calc(50% - ((100% + 0px) / 2) + 170%)';
					me.__52.style.top='calc(50% - ((100% + 0px) / 2) + 0px)';
				}
			}
		}
		me.__52.logicBlock_position();
		me.__52.ggUpdatePosition=function (useTransition) {
		}
		el=me.__61=document.createElement('div');
		el.ggId="\uc790\ub3d9\ud68c\uc804 \uc628\uc624\ud504";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #ffffff;';
		hs+='border-radius : 15px;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__61.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__61.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('vis_buttonbg_3') == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__61.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__61.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__61.style.transition='background-color 500ms ease 0ms';
				if (me.__61.ggCurrentLogicStateBackgroundColor == 0) {
					me.__61.style.backgroundColor="rgba(0,0,0,1)";
				}
				else {
					me.__61.style.backgroundColor="rgba(255,255,255,1)";
				}
			}
		}
		me.__61.logicBlock_backgroundcolor();
		me.__61.onclick=function (e) {
			player.setVariableValue('vis_buttonbg_3', !player.getVariableValue('vis_buttonbg_3'));
			player.toggleAutorotate();
		}
		me.__61.ggUpdatePosition=function (useTransition) {
		}
		el=me._m_on2=document.createElement('div');
		els=me._m_on2__img=document.createElement('img');
		els.className='ggskin ggskin_m_on2';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAABHBJREFUeF7lm7uqFEEQhv/NjUw1FIx8ARMVvIAX1MTQWFFMzgOoGAuCtzfQwEANFETwEhuJYCCGmpr4AEqtU4fe3u6uS9fM7OImh7Mz3VP/13WbntkF/vPPYiL9t7LrHBn+Pzr8/ZAc/5h8l34/iqljAmDRNzstJwi3C6A6p/03PBpAlOiaOIYR5hlRAMYWngMJAxEBgMT3urnXnbtB9ACYU3gOjHJEnmhVUL0ANkk8CyVvOJaopgrzfvi/CsgDgCbl8qWinJxERnKZo685mfF8eXm0zk/nMwQWz3MUtVoApEQthnEJs7ooXY9yixd2bmMXAI94d1wW6EbAKNqj8QCr+EjhOYseEG4A2pgfU3gOQmtTOi5PkqpOUHuhKcWzKE'+
			'8lWvP4VghoL0BZN6w1tWTXofZbmjA1AG3czylea2PKdM1Tax6gcf1tE08gVAA0ZOeI+XQlNQtUiqa1RFjyAGnyucWTMG1+KkFY0ZwD0Ky+pncw5jLX6dJC1SZtApAmnTPua4K4OaLjmrZ5xYPz1fzTWItiI+Fau/EGaWBUAUjuv4mr30JZg7GiI/UAyf03JfY9/kMwODxW7kpTUdvu/h4wu7vCU7r/AQCnANDmx2EA+wB8A/AVwDsAzwH8cKlxDGIPkOpqlPufALAzAKiZS6F4F8Arhx7zEA2AqOx/HsAdAIcUVn4a2tYICLS4vNVG23F847b8ywBaCTACwF4AT4SVL93zX+4Mh1ZoL8uhBkBE63sNwAPFyuen3ABw3zFOu2ewmAoAufJph5AXAC46xpkBtEpgRANEWZ2yvfVD1eGgdVByvlTddj1gbACt+SV9PRUo'+
			'BEBEDvgNYI+ktHD8J4D9jnGaEFgmd6bbWqEIANTcXHAIeQbgkmOcGUCrEYrIAVcBPHIIuQ7goWMcDxHLe2lDhOImbRysj7RK9pIbPwZw1iDmDQAC8N0wptRL1PYIVvqAjmuoh54BcA8A3QtIny9Dy/xWOlE4LoZ2T4b12EYQrgieQCtP3vLScwFDCVyG9tQAyD4Kh3MATgI4PlQHyvafAbwG8BTAr07xNFy1v1ECwDFPZWKuJz4B+qHa35B2hRkAJYxtgiE1QLuVLQfQKofbBEPl/uRmFgCpW24yDGn1V27vSznA07dH7BlExD3NIdlf3RVmA6QJaoZGtMy9EKStvZBngzUj5/YCSTzZvdbW18qg5aUDBhJxz+D1ACnuaV71KzIakrmhmy6+uPqlKuDJA3PGvmblSZP5TVFrIpwDgtZTm7mp5xWZPAymTIIh4lshoL'+
			'1ACcKYbbPVLjE31TzAeqGxQXjsEcW3PEDTUWlLlvdHDT2/QlGJtwLg19B73uDme4j0l2FkR7ptRdtxmlddSgtgzkOtDRF+w4IfKKa3wx6X1HqM9zxXJerZEdokCC7xUghoVqLn9XXN/NI5buE8cY8HpMZNDcL7K5Q1oFEAeOKxQYQJj/aAkqtGwQgXnRob7QG1mE1fU+OnTmn5y8sjzxPxVKqZR6YCICWz2Y7/BX3ZAFCyIiK0AAAAAElFTkSuQmCC';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="m-\uc790\ub3d9\ud68c\uc804 ON";
		el.ggDx=0;
		el.ggDy=-5;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((20px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((20px + 0px) / 2) - 5px);';
		hs+='visibility : inherit;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._m_on2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._m_on2.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_buttonbg_3') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._m_on2.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._m_on2.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._m_on2.style.transition='';
				if (me._m_on2.ggCurrentLogicStateVisible == 0) {
					me._m_on2.style.visibility=(Number(me._m_on2.style.opacity)>0||!me._m_on2.style.opacity)?'inherit':'hidden';
					me._m_on2.ggVisible=true;
				}
				else {
					me._m_on2.style.visibility=(Number(me._m_on2.style.opacity)>0||!me._m_on2.style.opacity)?'inherit':'hidden';
					me._m_on2.ggVisible=true;
				}
			}
		}
		me._m_on2.logicBlock_visible();
		me._m_on2.ggUpdatePosition=function (useTransition) {
		}
		el=me._m_on_1=document.createElement('div');
		els=me._m_on_1__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="m-\uc790\ub3d9\ud68c\uc804 ON \uba58\ud2b8";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : -18px;';
		hs+='color : rgba(0,0,0,1);';
		hs+='cursor : default;';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 9px;';
		hs+='font-weight: lighter;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._m_on_1.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ud68c\uc804 ON\n", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._m_on_1.ggUpdateText();
		el.appendChild(els);
		me._m_on_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._m_on_1.ggUpdatePosition=function (useTransition) {
		}
		me._m_on2.appendChild(me._m_on_1);
		me.__61.appendChild(me._m_on2);
		el=me._m_off2=document.createElement('div');
		els=me._m_off2__img=document.createElement('img');
		els.className='ggskin ggskin_m_off2';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAABLdJREFUeF7lm7uKFEEUhv+TG5lqKBj5Aia64AW8oCaGxopi4gOoGAuCl30DDQxWAwURdI2NRDBYDN3UxAc4cpqusaamLqdO1XTP4iTLzlRV1//VuXV1NeE//9AU+pn5QXCdU+P/p8e/u97vX9x3ROR/v5aprg2AJ/p+48wFwkMZYx1AugLoKDrFbIDRE0QXABMID4F0A9EMYBTfauZWL2kGYQYws/AQmLhFGGhVUE0ANky8E7pLRFvuH2aWDPN5/D8JqBoAM8ugLn2pKHuNxGRdmpOvXZpz44XpsXZ8ae8gOPHDGEQU1aoGEBCtmZhLYVUmOl5PYosV9tIcmwAYxZv9MqTbCUZ0PkULMIjvJrwzCDMArc+vTXgEhHZOftelIO'+
			'l+yFpARcCbTLwX5SWmVNUfsTiQBFCR6rZ6lqY10bVijslMEAVQ4fdzivfzvJbbiqWmAGh87KCJF0hlAMrVn9zn/SWuiE0rN1F+tTgUSIYIO6t4mW+t7/saw0C4BECz+qmKSuuEvdpZraAEoOT7s/l9CpxXJUoTTdm8ZMGhBXBmhaKFRK8V7TGOEkYcgML8N271c9AyMJZ0LCyg5FOb4vsWSxlhDO4Rbpz4AA60+VvALNLglObPzMcAnAcgmx8nARwBsAfgB4BPAHaI6JdVUG2/wQJKebWX+TPzWQD3RgCpuUomekxE72rFWNprAHSJ/sx8BcAjACcUE/06lq3NEMbFdVttsh03bMO5GzgHIJf/mwEw82EALwsrH3KROd1ocYeCaw/pUAOgufRl5tsAnilWPmxyl4ieGvoNXTSuPRUAMeULBiFviOiaoV81gFwKbC6A'+
			'mFmiukT72s8eER2v7eTal7KbBHdnAesGkBs/q68lA/UC0CMG/AFwyLCS+0R01NBP4wJDcNdYQA8AOwCuGoS8JqLrhn7VAHI7rD1iwC0ALwxC7hDRc0M/B6CY3mMbInLTsCgcrE9d/Ukzs5jxNoBLFWI+ABAAPyv6LDUt3OD9qwOsF6jpx8wXATwBIPcCpc93KZmJ6GOpYe53Zs4F32kBjIWJQLhZsARZ+W0ietsovrRtPrh28dlgyyRifUd3uAzgHIAzY3bYB/ANwHsAr4jod+t1tfsbsV1h9xhb0sTaj6m1Ck31L5j/4v6mtCvsAHQ9mbUu0doKUA5RLN0Neh1z6fDAwNCav+gOLUD7xHVjYZTKX9kP8J8OxWKApW5v3jPo5RYF35fLxHeFPTewAJDuzSVzK4TS/X+4+isuMObq0tOh1DxntQKF+JXVTwHQxoEQRP'+
			'M9g9UCFH4vQ+uOyChJHjTx0dWPWsDoBjVxYDbfV658Nj6lTojUAJglAFZYajY2tRyRCd1gsiDYS3zOBayBsPn4ei4QVgh3wxQDc8oCrADchbuCMAhPBr0QcO6cYG0cSNYHltdcGt9CKa68m2wNAHcMveUEt7uHWLwZNk7EP9oi23Gaoy4x4NVxKAdAJiFihweK/t6A0SStdY62nykdm3eENgyCSXwyC2iRdzrHr71crJ1ZeDEG1MxqBhCmt1BimswuEBtsAhDdhHe1gDXD6C7an29XC0i5jX9MzXvqJM3Dl6f9N8pWjrTVuKW27SQAtJOZo91fRPFlX5XlsNgAAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="m-\uc790\ub3d9\ud68c\uc804 OFF";
		el.ggDx=0;
		el.ggDy=-5;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((20px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((20px + 0px) / 2) - 5px);';
		hs+='visibility : hidden;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._m_off2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._m_off2.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_buttonbg_3') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._m_off2.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._m_off2.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._m_off2.style.transition='';
				if (me._m_off2.ggCurrentLogicStateVisible == 0) {
					me._m_off2.style.visibility=(Number(me._m_off2.style.opacity)>0||!me._m_off2.style.opacity)?'inherit':'hidden';
					me._m_off2.ggVisible=true;
				}
				else {
					me._m_off2.style.visibility="hidden";
					me._m_off2.ggVisible=false;
				}
			}
		}
		me._m_off2.logicBlock_visible();
		me._m_off2.ggUpdatePosition=function (useTransition) {
		}
		el=me._m_off_2=document.createElement('div');
		els=me._m_off_2__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="m-\uc790\ub3d9\ud68c\uc804 OFF \uba58\ud2b8";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : -18px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 9px;';
		hs+='font-weight: lighter;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._m_off_2.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ud68c\uc804 OFF\n", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._m_off_2.ggUpdateText();
		el.appendChild(els);
		me._m_off_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._m_off_2.ggUpdatePosition=function (useTransition) {
		}
		me._m_off2.appendChild(me._m_off_2);
		me.__61.appendChild(me._m_off2);
		me.__52.appendChild(me.__61);
		el=me.__53=document.createElement('div');
		el.ggId="\uc804\uccb4\ud654\uba74-\ubaa8\ubc14\uc77c";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='z-index: 99;';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 170%;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__53.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__53.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getViewerSize().width <= 320))
			)
			{
				newLogicStatePosition = 0;
			}
			else if (
				((player.getViewerSize().width <= 380))
			)
			{
				newLogicStatePosition = 1;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__53.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__53.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__53.style.transition='left 0s, top 0s';
				if (me.__53.ggCurrentLogicStatePosition == 0) {
					me.__53.style.left='430%';
					me.__53.style.top = 'calc(50% - (100% / 2))';
				}
				else if (me.__53.ggCurrentLogicStatePosition == 1) {
					me.__53.style.left='400%';
					me.__53.style.top = 'calc(50% - (100% / 2))';
				}
				else {
					me.__53.style.left='170%';
					me.__53.style.top='calc(50% - ((100% + 0px) / 2) + 0px)';
				}
			}
		}
		me.__53.logicBlock_position();
		me.__53.ggUpdatePosition=function (useTransition) {
		}
		el=me.__60=document.createElement('div');
		el.ggId="\ub9c1\ud06c\ubcf5\uc0ac \uc628\uc624\ud504";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #ffffff;';
		hs+='border-radius : 15px;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__60.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__60.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('vis_buttonbg_4') == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__60.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__60.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__60.style.transition='background-color 500ms ease 0ms';
				if (me.__60.ggCurrentLogicStateBackgroundColor == 0) {
					me.__60.style.backgroundColor="rgba(0,0,0,1)";
				}
				else {
					me.__60.style.backgroundColor="rgba(255,255,255,1)";
				}
			}
		}
		me.__60.logicBlock_backgroundcolor();
		me.__60.onclick=function (e) {
			player.setVariableValue('vis_buttonbg_4', !player.getVariableValue('vis_buttonbg_4'));
			"";
 let url = '';
  const textarea = document.createElement("textarea");
  document.body.appendChild(textarea);
  url = window.document.location.href;
  textarea.value = url;
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);
		}
		me.__60.ggUpdatePosition=function (useTransition) {
		}
		el=me._m_on1=document.createElement('div');
		els=me._m_on1__img=document.createElement('img');
		els.className='ggskin ggskin_m_on1';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="m-\ub9c1\ud06c\ubcf5\uc0ac ON";
		el.ggDx=0;
		el.ggDy=-5;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((20px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((20px + 0px) / 2) - 5px);';
		hs+='visibility : inherit;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._m_on1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._m_on1.ggUpdatePosition=function (useTransition) {
		}
		el=me._m_on_0=document.createElement('div');
		els=me._m_on_0__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="m-\ub9c1\ud06c\ubcf5\uc0ac ON \uba58\ud2b8";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 5px;';
		hs+='bottom : -18px;';
		hs+='color : rgba(0,0,0,1);';
		hs+='cursor : default;';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 9px;';
		hs+='font-weight: lighter;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._m_on_0.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ub9c1\ud06c\ubcf5\uc0ac", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._m_on_0.ggUpdateText();
		el.appendChild(els);
		me._m_on_0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._m_on_0.ggUpdatePosition=function (useTransition) {
		}
		me._m_on1.appendChild(me._m_on_0);
		me.__60.appendChild(me._m_on1);
		el=me._m_off1=document.createElement('div');
		els=me._m_off1__img=document.createElement('img');
		els.className='ggskin ggskin_m_off1';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAYAAAA5ZDbSAAAACXBIWXMAAA3XAAAN1wFCKJt4AAAE7mlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgOS4xLWMwMDEgNzkuMTQ2Mjg5OSwgMjAyMy8wNi8yNS0yMDowMTo1NSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YW'+
			'JvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDI1LjAgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyMy0xMC0yNFQxODoyODow'+
			'MCswOTowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjMtMTAtMjdUMTE6NTQ6NTkrMDk6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjMtMTAtMjdUMTE6NTQ6NTkrMDk6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOmIwMmZjOGQ5LTk0ZmItNWM0NC1iZjA1LWE5OWJmMDBjODdiNSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpiMDJmYzhkOS05NGZiLTVjNDQtYmYwNS1hOTliZjAwYzg3YjUiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpiMDJmYzhkOS05NGZiLTVjNDQtYmYwNS1hOTliZjAwYz'+
			'g3YjUiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmIwMmZjOGQ5LTk0ZmItNWM0NC1iZjA1LWE5OWJmMDBjODdiNSIgc3RFdnQ6d2hlbj0iMjAyMy0xMC0yNFQxODoyODowMCswOTowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDI1LjAgKFdpbmRvd3MpIi8+IDwvcmRmOlNlcT4gPC94bXBNTTpIaXN0b3J5PiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PsiQM2oAAAvASURBVHic7Z17sFVVHcc/XEFo'+
			'fIGRIAlJykUKOLcxMysLC9OpJNMeGihTgBkXrLEyzGymicBHTQjV5MWcXlr2UEIUh3wAiXExi2jCEB0YDCHKkYAhIHH1x+9u3BzO3nvttX5n733O2Z+ZPcNln/XY53vWY6/f+v1WL2MMJXWnAowHxgDDgdcDJwB9gf3ALmArsAn4K/AwsFaj4F6lwHXjbOBy4IPA6Q7pnwMeBH4O/MG1EqXA+rwLuAb4mGKevwHmAyvTJiwF1uPdwEzgo3Us4z5gAfCYbYJSYB1mAzdkWN4twJdtPlgK7MeJwL3Ae3Io+wngEuCfcR8qBXbntchM95Qc67AdmaHviPpAW3Z1aSrGAE+Sr7gAg3vq0R71gbIFp2cssAZ5hy0KO4GR1GjJZQtORxHFBegPPF7rRimwPYMoprgBI4A7qv+z7KLtqAAPIWNe0TkL+GPwRylwMhWgm+K23G'+
			'r+AnQEf5RddDyjaSxxQX6QFwd/lC04mpOB9cgERovngQ3AcuBp4D/A8cAoYBwyEx6mUM5Gel6dSoFrUwFWICY9DfYB04C7gVdiPtcLuAxYCBzjWeZlwD2lwEeiPeZuBD4EPJMizWnAEuAMj3JXAONKgQ+nHViHnrirka53v0Pa3siE6U0e5Z9UTrJeZQTwKHriLgbOwU1cgJcRE+QmjzpMKFuwUEFaWz+l/FYj4mrwTiJWqSy4txRYf8zVFDdgB/A6h3RPtXoXPZTiiwtwj2O6Y1pZ4DHAKvTEXUR9xAXZk+XCCb1Vq9E4VBDDwdFK+a0GPqKUVy02OKbr24otOBhztcTtpn4tN2AXsMchXZ9WE3gQumPu48DblfKKoy/QxyHdwVYSuIIsHGiJ+wBwrlJeSQzFrd4HWmUM1h5zu4GLlPKywfWHtLcVWvAY9MU9B8hy'+
			'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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="m-\ub9c1\ud06c\ubcf5\uc0ac OFF";
		el.ggDx=0;
		el.ggDy=-5;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((20px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((20px + 0px) / 2) - 5px);';
		hs+='visibility : hidden;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._m_off1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._m_off1.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_buttonbg_4') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._m_off1.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._m_off1.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._m_off1.style.transition='';
				if (me._m_off1.ggCurrentLogicStateVisible == 0) {
					me._m_off1.style.visibility=(Number(me._m_off1.style.opacity)>0||!me._m_off1.style.opacity)?'inherit':'hidden';
					me._m_off1.ggVisible=true;
				}
				else {
					me._m_off1.style.visibility="hidden";
					me._m_off1.ggVisible=false;
				}
			}
		}
		me._m_off1.logicBlock_visible();
		me._m_off1.ggUpdatePosition=function (useTransition) {
		}
		el=me._m_off_1=document.createElement('div');
		els=me._m_off_1__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="m-\ub9c1\ud06c\ubcf5\uc0ac OFF \uba58\ud2b8";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 5px;';
		hs+='bottom : -18px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 9px;';
		hs+='font-weight: lighter;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._m_off_1.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ubcf5\uc0ac\uc644\ub8cc", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._m_off_1.ggUpdateText();
		el.appendChild(els);
		me._m_off_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._m_off_1.ggUpdatePosition=function (useTransition) {
		}
		me._m_off1.appendChild(me._m_off_1);
		me.__60.appendChild(me._m_off1);
		me.__53.appendChild(me.__60);
		el=me.__54=document.createElement('div');
		el.ggId="\ub9c1\ud06c\ubcf5\uc0ac-\ubaa8\ubc14\uc77c";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='z-index: 99;';
		hs+='height : 100%;';
		hs+='left : 170%;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__54.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__54.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getViewerSize().width <= 320))
			)
			{
				newLogicStatePosition = 0;
			}
			else if (
				((player.getViewerSize().width <= 380))
			)
			{
				newLogicStatePosition = 1;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__54.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__54.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__54.style.transition='left 0s, top 0s';
				if (me.__54.ggCurrentLogicStatePosition == 0) {
					me.__54.style.left='430%';
					me.__54.style.top = 'calc(50% - (100% / 2))';
				}
				else if (me.__54.ggCurrentLogicStatePosition == 1) {
					me.__54.style.left='400%';
					me.__54.style.top = 'calc(50% - (100% / 2))';
				}
				else {
					me.__54.style.left='170%';
					me.__54.style.top='calc(50% - ((100% + 0px) / 2) + 0px)';
				}
			}
		}
		me.__54.logicBlock_position();
		me.__54.ggUpdatePosition=function (useTransition) {
		}
		el=me.__59=document.createElement('div');
		el.ggId="\ubc30\uacbd\uc74c\uc545 \uc628\uc624\ud504";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #ffffff;';
		hs+='border-radius : 15px;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__59.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__59.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('vis_buttonbg_6') == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__59.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__59.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__59.style.transition='background-color 500ms ease 0ms';
				if (me.__59.ggCurrentLogicStateBackgroundColor == 0) {
					me.__59.style.backgroundColor="rgba(0,0,0,1)";
				}
				else {
					me.__59.style.backgroundColor="rgba(255,255,255,1)";
				}
			}
		}
		me.__59.logicBlock_backgroundcolor();
		me.__59.onclick=function (e) {
			player.setVariableValue('vis_buttonbg_6', !player.getVariableValue('vis_buttonbg_6'));
			player.toggleMuted("_main");
		}
		me.__59.ggUpdatePosition=function (useTransition) {
		}
		el=me._m_on0=document.createElement('div');
		els=me._m_on0__img=document.createElement('img');
		els.className='ggskin ggskin_m_on0';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAwdJREFUeF7tmmty5DAIhMnJkj3ZJifL7sl2C1c8pXgE3SDslGX7Z0YP+GgwUvwiF39eLu6/3ABuBVycwJ0CkwngrfHnD+PbTAp4F5HfjdMfIqJ/c59ZAGydX53+JSKuEn4CgMqUkieKXvO7BUCHuD4eDeBTRNY8VQgaoYqnXXe7nrvPUQDUac3PtkipoVUQdF2FYD1mPTgCADKuygYvDRRMtx5UbW6RR0bBHA3mRzgV9gTAOF8NAKntSQV7AfAisQ1qtQ0e+KeaU725Vew8JTM2RDs8LwDfVMBszqYhkp+1DrIh0+F5tnxTAdqcdZ7N9956ng3pDu/rtbh97T51iBUARpxHRTDd4X31HFZv8FDBKIBIscukQPi1ttnEm7/4ng'+
			'WQKXYZAKiuoMOON3+ZmwGAjGLrxjoO2TCqgn+GQUsatJtbBaOdv0Y+6uTIaxABRyqwAD4AVMo5AwYpQNccUYFbSHXz0SqecbqdwwDQ8a6UHSPcOqCbWwuPOsbOZwF4gUJpYPn4cSYAsKI7xK0UOhWAkTQwC+GZFHADcN4G6GrNqh9LI3SWIqgKMB0BF6xmAZ0FAGrrpweQTYHlMHSmFHDbWuc1OE0NyHaD0wNA/widohHyWuHLA0DnCfcscIbTYOiuf1MM3UPUSu4nIaDoeQ2Q/obkD+8D2GOrjkO3M5G12CsxFBwE0JS/dpZosuVQxW1wBQAUfe8AtczNAkCyjCgB2eA1amguvERBCyBHkDzRfNTDeyk3Ev3HvqMAKpSAbOilG+M81TegzZkIrsWx9wkMMx/ZsL211oOPAkAfWlGpgzZnHGjHZFKCtaH9uArZRUUf'+
			'5R/axPo9CoEFELGHiv5eAKJ1oRoAHf09AUQgVAJA6nsqnpWb9yTK/Nut0gZP+t03R+XmXo6OfOjA5j6KftfXowBYKcG8z1kA4ejvXQN6hmuU9HkVkb/M5+yk9+mO8UgFkL6kh/U6RnRbnP5EJm3ljhNTHeNMCljZappp5FGrvIyfEUBIZDeAEK4JB98KmDCoIZcur4D/1fzD+eS0V/sAAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="m-\ubc30\uacbd\uc74c\uc545 ON";
		el.ggDx=0;
		el.ggDy=-5;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((20px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((20px + 0px) / 2) - 5px);';
		hs+='visibility : inherit;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._m_on0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._m_on0.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_buttonbg_6') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._m_on0.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._m_on0.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._m_on0.style.transition='';
				if (me._m_on0.ggCurrentLogicStateVisible == 0) {
					me._m_on0.style.visibility="hidden";
					me._m_on0.ggVisible=false;
				}
				else {
					me._m_on0.style.visibility=(Number(me._m_on0.style.opacity)>0||!me._m_on0.style.opacity)?'inherit':'hidden';
					me._m_on0.ggVisible=true;
				}
			}
		}
		me._m_on0.logicBlock_visible();
		me._m_on0.ggUpdatePosition=function (useTransition) {
		}
		el=me._m_=document.createElement('div');
		els=me._m___text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="m-\ubc30\uacbd\uc74c\uc545 \uba58\ud2b8";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : -18px;';
		hs+='color : rgba(0,0,0,1);';
		hs+='cursor : pointer;';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 9px;';
		hs+='font-weight: lighter;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 2px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._m_.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc74c\uc545 ON", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._m_.ggUpdateText();
		el.appendChild(els);
		me._m_.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._m_.ggUpdatePosition=function (useTransition) {
		}
		me._m_on0.appendChild(me._m_);
		me.__59.appendChild(me._m_on0);
		el=me._m_off0=document.createElement('div');
		els=me._m_off0__img=document.createElement('img');
		els.className='ggskin ggskin_m_off0';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="m-\ubc30\uacbd\uc74c\uc545 OFF";
		el.ggDx=0;
		el.ggDy=-5;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((20px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((20px + 0px) / 2) - 5px);';
		hs+='visibility : hidden;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._m_off0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._m_off0.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_buttonbg_6') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._m_off0.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._m_off0.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._m_off0.style.transition='';
				if (me._m_off0.ggCurrentLogicStateVisible == 0) {
					me._m_off0.style.visibility=(Number(me._m_off0.style.opacity)>0||!me._m_off0.style.opacity)?'inherit':'hidden';
					me._m_off0.ggVisible=true;
				}
				else {
					me._m_off0.style.visibility="hidden";
					me._m_off0.ggVisible=false;
				}
			}
		}
		me._m_off0.logicBlock_visible();
		me._m_off0.ggUpdatePosition=function (useTransition) {
		}
		el=me._m_off_0=document.createElement('div');
		els=me._m_off_0__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="m-\ubc30\uacbd\uc74c\uc545 OFF \uba58\ud2b8";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : -18px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : pointer;';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 9px;';
		hs+='font-weight: lighter;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 2px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._m_off_0.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc74c\uc545 OFF", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._m_off_0.ggUpdateText();
		el.appendChild(els);
		me._m_off_0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._m_off_0.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((player.getVariableValue('vis_buttonbg_6') == true))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me._m_off_0.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me._m_off_0.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me._m_off_0.style.transition='color 0s';
				if (me._m_off_0.ggCurrentLogicStateTextColor == 0) {
					me._m_off_0.style.color="rgba(255,255,255,1)";
				}
				else {
					me._m_off_0.style.color="rgba(255,255,255,1)";
				}
			}
		}
		me._m_off_0.logicBlock_textcolor();
		me._m_off_0.ggUpdatePosition=function (useTransition) {
		}
		me._m_off0.appendChild(me._m_off_0);
		me.__59.appendChild(me._m_off0);
		me.__54.appendChild(me.__59);
		el=me.__55=document.createElement('div');
		el.ggId="\ub354\ubcf4\uae30-\ubaa8\ubc14\uc77c";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='z-index: 99;';
		hs+='height : 100%;';
		hs+='left : 170%;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__55.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__55.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getViewerSize().width <= 320))
			)
			{
				newLogicStatePosition = 0;
			}
			else if (
				((player.getViewerSize().width <= 380))
			)
			{
				newLogicStatePosition = 1;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__55.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__55.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__55.style.transition='left 0s, top 0s';
				if (me.__55.ggCurrentLogicStatePosition == 0) {
					me.__55.style.left='430%';
					me.__55.style.top = 'calc(50% - (100% / 2))';
				}
				else if (me.__55.ggCurrentLogicStatePosition == 1) {
					me.__55.style.left='400%';
					me.__55.style.top = 'calc(50% - (100% / 2))';
				}
				else {
					me.__55.style.left='170%';
					me.__55.style.top='calc(50% - ((100% + 0px) / 2) + 0px)';
				}
			}
		}
		me.__55.logicBlock_position();
		me.__55.ggUpdatePosition=function (useTransition) {
		}
		el=me.__58=document.createElement('div');
		el.ggId="\uc548\ub0b4\uba58\ud2b8 \uc628\uc624\ud504";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #ffffff;';
		hs+='border-radius : 15px;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__58.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__58.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('vis_buttonbg_5') == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__58.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__58.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__58.style.transition='background-color 500ms ease 0ms';
				if (me.__58.ggCurrentLogicStateBackgroundColor == 0) {
					me.__58.style.backgroundColor="rgba(0,0,0,1)";
				}
				else {
					me.__58.style.backgroundColor="rgba(255,255,255,1)";
				}
			}
		}
		me.__58.logicBlock_backgroundcolor();
		me.__58.onclick=function (e) {
			player.setVariableValue('vis_buttonbg_5', !player.getVariableValue('vis_buttonbg_5'));
			me.__95.ggVisible = !me.__95.ggVisible;
			var flag=me.__95.ggVisible;
			me.__95.style.transition='none';
			me.__95.style.visibility=((flag)&&(Number(me.__95.style.opacity)>0||!me.__95.style.opacity))?'inherit':'hidden';
		}
		me.__58.ggUpdatePosition=function (useTransition) {
		}
		el=me._m_on=document.createElement('div');
		els=me._m_on__img=document.createElement('img');
		els.className='ggskin ggskin_m_on';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAA25JREFUeF7tm21S3DAMhpeT0Z4MerLCycoos9oxRh+vZMkblmaGH4BjS49eybHjPF1++PW0yf9fl8uFfuh6Hsbkv71d//Y+2fPabV8nAHLuZXA868uf640tMKoBVDmtwSqHUQWg2/EZSBmIVQC7HZdALKXGCgAamHI8e3Hh4/u5IGb6I0WkQGQB/A0UN3aUjJyd1pxlZyKAUxCiACKSJ2cjTmsweApFYITHjAAgQyjy3pWKhNfpMBUiIGAbUABIvofpg05LzRB7fiMphwBAIg8NtuBwGwQEgFXwdkZdguDVJLKPgqNeHgBLam7nxRG3ukvbaQGwOoWLjGE1R4+a0CIoNY8P/VtKVe21APxTjK+IvGRsV7/shlinNABW9FcLXm'+
			'ffVsEWAUsAuqWfzlewplgQvgQvAqAi78mHVK6CznMzbYwvKpgBWNHxZgzURitCVZBhFaAAqgxjSBLoHWPQ+J9UMAPQKn9V9EeV8LRHe4QViyZJga4/o2Oa/Ksjg6ZKRTutFtyKIQJgddqrcCTbh1YLbmkwAnDlkrXizvdpKjh8ZwCPKH9vSjyU/RMAaGlw1DYPQEf1l2YCykl0vzCTUVJ63xWAFJVO2BKAoxDyoGahyCB37pHG65xuUwAqlqcah67lcHg8VoBKqCH62oJoN/BjFvwP4Brh00hyt+LOVAQ7UyBVBMcnxerA7Fbc6Z4Dvg2ArpXgTgDmOodrgLtsLM6B0wEg/3Y+C+wEYC7zx+dvd/ekUAW7AJgrwbnK70yDXQDcfY57bYruAuDucs0AtDSoXqntAOBGX3rQgV8oLNaDHQC06H8KprQJAb9WWoDQDQCK'+
			'vvaou0MFnQBCL3e1bSjrBWbF06FkZMViKPzeUQMQfs8eTAep/wqwVuBEX7NHZKqiRWf++BuB1SMyIelzwLyd2B3v8oPiEZun7fQAaPt3bMXDH5MjR5GDktUPSogqELvcuoIo4GwQvMORDA8KCgqAOkXO51I7aGAkxEIb1AY38mgRnG1A6TOIind+kTHDNSmigBEGGolRjqwiJPjjKVL0S5LU1JwFEEkJzeFv/cnMihoQBaBtwpKfO15RwAyBfke+5kCds9otO54tgp7xmY+dvD7H/5c53gWgQxXlTo9GVqWAF8V5ocMfUHOFHwsiL44qplDPrtspMbfhozb4ABBKHVDEv5l1AAAAAElFTkSuQmCC';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="m-\uc548\ub0b4\uba58\ud2b8 ON";
		el.ggDx=0;
		el.ggDy=-5;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((20px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((20px + 0px) / 2) - 5px);';
		hs+='visibility : inherit;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._m_on.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._m_on.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_buttonbg_5') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._m_on.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._m_on.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._m_on.style.transition='';
				if (me._m_on.ggCurrentLogicStateVisible == 0) {
					me._m_on.style.visibility="hidden";
					me._m_on.ggVisible=false;
				}
				else {
					me._m_on.style.visibility=(Number(me._m_on.style.opacity)>0||!me._m_on.style.opacity)?'inherit':'hidden';
					me._m_on.ggVisible=true;
				}
			}
		}
		me._m_on.logicBlock_visible();
		me._m_on.ggUpdatePosition=function (useTransition) {
		}
		el=me._m_on_=document.createElement('div');
		els=me._m_on___text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="m-\uc548\ub0b4\uba58\ud2b8 ON \uba58\ud2b8";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : -18px;';
		hs+='color : rgba(0,0,0,1);';
		hs+='cursor : pointer;';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 9px;';
		hs+='font-weight: lighter;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 2px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._m_on_.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uacf5\uc9c0\uae00 ON", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._m_on_.ggUpdateText();
		el.appendChild(els);
		me._m_on_.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._m_on_.ggUpdatePosition=function (useTransition) {
		}
		me._m_on.appendChild(me._m_on_);
		me.__58.appendChild(me._m_on);
		el=me._m_off=document.createElement('div');
		els=me._m_off__img=document.createElement('img');
		els.className='ggskin ggskin_m_off';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAA5lJREFUeF7tm1lywjAMQOOTtZys5WSFk7mjTJwxjrVacig0M/wAsaWnzWta3vxJM/TPOX8uywIfeD6qPst3t+27ey1PSuk7Wr4wAJvSX5XiVl2u8GIUDFcAjkpjsNxhuACYoHgLxA3EEIATFD+AGA0NM4CcMyQoiHHrUxJfeb8kREt7VysIE4Cc848iuRVFQchW6a6yG1z4TQPYBEEFQOnyoKxYaczsVQmVwFD3KQawCQKW5x6TJbhG4XdF2IllEAEQdqymL1G69x+hPBdJyLEAhJYXdWZVOBKCBACV8KZZHYEAlYMabd5SShcKPAmAcTW2cU+LU22NyIkCYBoVJxkmu5fMfrfW8dI+U5pReSkAGRF+2PKIsFHtFjW6eaoLgL'+
			'H+UMILbhtyAlaqu4APACa4PjWE9vACCsLBeBoAw3G/DWaoqhLdxwHwAwDK+ikltmRKsj4zrvACIPYCKQAXwaqM3QuDGX2ACA9e0ALoZn4v69ceUs34YI1weNKEDJRYfXYAhPu7WkYSJl7/IcYGezKUABgqe17KWNoh8s0eBjUA1l0sQpz9DuYFJaxXAK/o/oIh8urZ7wAAK4lrbiMBRGR/pBJATIrWCy0hlXPuhfd5AHrJKRI2AmBNhMUDusPTKKGQxBRWbq0AhicmxFpAD/gp/RUP6MXIKQJZYpx7hyqF/wCIKeqre8DTJcFI4GiIP1MVmA3g1HHA7CpgGwgtyxIyE4xaFVbuID14ADZeDnHLpwOwVYJpY4HJAMhpfr0egK3WuofBLADEgsg+7K4BTAuDiQCwPYgjACIM4Iyey5I4s0jhnm+QSdCDPu2qMBYGrjO1'+
			'GR4gXeVqAYg3FLgJCLOdHT4OwKy/LcHvR3B7W2OYF7i5aLQHSK0PRuoBCPeCSADazV1se5zawBwui4iQwx5m2XfEAKj32TU5ARHUAyxqOKySWY/IeFkLjsisdwQcjshQ5w70R2Rm7eVrPEe5xlj+TpZwdoDDHD567WNymxdQ+UBE2cPKbRteBzhZD3g2CIoD26LRqwgAs4HaGkfUscUrhGeEoWlxRREDqDxBehEKrrUM7/kpLA4iqnOSCkA1m9PeFlHd8amUhi6lN0lMpdkEQBkSmLf/3SsztUaKuLSEPfeO2uXbBs0e0IEAX0mutXBKSX4fVrx04gKgyQ2RINwUDwEQ5BXuStdyunoAMVZvL0GXC9Tt5WloolygHi6hkliaAkAiyFn/+QWCN8pfDENywAAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="m-\uc548\ub0b4\uba58\ud2b8 OFF";
		el.ggDx=0;
		el.ggDy=-5;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((20px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((20px + 0px) / 2) - 5px);';
		hs+='visibility : hidden;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._m_off.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._m_off.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_buttonbg_5') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._m_off.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._m_off.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._m_off.style.transition='';
				if (me._m_off.ggCurrentLogicStateVisible == 0) {
					me._m_off.style.visibility=(Number(me._m_off.style.opacity)>0||!me._m_off.style.opacity)?'inherit':'hidden';
					me._m_off.ggVisible=true;
				}
				else {
					me._m_off.style.visibility="hidden";
					me._m_off.ggVisible=false;
				}
			}
		}
		me._m_off.logicBlock_visible();
		me._m_off.ggUpdatePosition=function (useTransition) {
		}
		el=me._m_off_=document.createElement('div');
		els=me._m_off___text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="m-\uc548\ub0b4\uba58\ud2b8 OFF \uba58\ud2b8";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : -18px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : pointer;';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 9px;';
		hs+='font-weight: lighter;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 2px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._m_off_.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uacf5\uc9c0\uae00 OFF\n\n", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._m_off_.ggUpdateText();
		el.appendChild(els);
		me._m_off_.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._m_off_.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((player.getVariableValue('vis_buttonbg_6') == true))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me._m_off_.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me._m_off_.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me._m_off_.style.transition='color 0s';
				if (me._m_off_.ggCurrentLogicStateTextColor == 0) {
					me._m_off_.style.color="rgba(255,255,255,1)";
				}
				else {
					me._m_off_.style.color="rgba(255,255,255,1)";
				}
			}
		}
		me._m_off_.logicBlock_textcolor();
		me._m_off_.ggUpdatePosition=function (useTransition) {
		}
		me._m_off.appendChild(me._m_off_);
		me.__58.appendChild(me._m_off);
		me.__55.appendChild(me.__58);
		el=me.__56=document.createElement('div');
		el.ggId="\ub354\ubcf4\uae30 \ucee8\ud14c\uc774\ub108";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 190px;';
		hs+='left : calc(50% - ((60px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : -413%;';
		hs+='visibility : hidden;';
		hs+='width : 60px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__56.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__56.ggUpdatePosition=function (useTransition) {
		}
		el=me.__57=document.createElement('div');
		el.ggId="\ub354\ubcf4\uae30\ubc30\uacbd";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 5px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__57.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__57.ggUpdatePosition=function (useTransition) {
		}
		me.__56.appendChild(me.__57);
		me.__55.appendChild(me.__56);
		me.__54.appendChild(me.__55);
		me.__53.appendChild(me.__54);
		me.__52.appendChild(me.__53);
		me.__51.appendChild(me.__52);
		me._m.appendChild(me.__51);
		me.__50.appendChild(me._m);
		me.__49.appendChild(me.__50);
		me.__48.appendChild(me.__49);
		me.divSkin.appendChild(me.__48);
		el=me.__46=document.createElement('div');
		el.ggId="\uba54\uc778\uce74\ud14c\uace0\ub9ac";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 2.5em;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 50px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__46.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__46.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize().width <= 460))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__46.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__46.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__46.style.transition='';
				if (me.__46.ggCurrentLogicStateVisible == 0) {
					me.__46.style.visibility="hidden";
					me.__46.ggVisible=false;
				}
				else if (me.__46.ggCurrentLogicStateVisible == 1) {
					me.__46.style.visibility="hidden";
					me.__46.ggVisible=false;
				}
				else {
					me.__46.style.visibility=(Number(me.__46.style.opacity)>0||!me.__46.style.opacity)?'inherit':'hidden';
					me.__46.ggVisible=true;
				}
			}
		}
		me.__46.logicBlock_visible();
		me.__46.ggUpdatePosition=function (useTransition) {
		}
		el=me.__47=document.createElement('div');
		el.ggId="\uba54\uc778\uce74\ud14c\uace0\ub9ac\ubc30\uacbd";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='background-color:rgba(0,0,0,0.65);';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__47.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__47.ggUpdatePosition=function (useTransition) {
		}
		el=me._on=document.createElement('div');
		el.ggId="\uce74\ud14c\uace0\ub9ac-\uac00\uad6con";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='position : absolute;';
		hs+='right : 1.3%;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._on.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._on.ggUpdatePosition=function (useTransition) {
		}
		el=me._on4=document.createElement('div');
		els=me._on4__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ub4dc\ub808\uc2a4\ub8f8-\uac00\uad6con";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='position : absolute;';
		hs+='right : 0%;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 9.29em;';
		hs+='pointer-events:auto;';
		hs+='letter-spacing:1px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 15px;';
		hs+='font-weight: 400;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._on4.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc548\ubc29\ub4dc\ub808\uc2a4\ub8f8", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._on4.ggUpdateText();
		el.appendChild(els);
		me._on4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._on4.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getViewerSize().width <= 1024))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._on4.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._on4.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._on4.style.transition='right 0s, top 0s, color 0s';
				if (me._on4.ggCurrentLogicStatePosition == 0) {
					me._on4.style.right='0%';
					me._on4.style.top = 'calc(50% - (100% / 2))';
				}
				else {
					me._on4.style.right='0%';
					me._on4.style.top='calc(50% - ((100% + 0px) / 2) + 0px)';
				}
			}
		}
		me._on4.logicBlock_position();
		me._on4.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((player._(me.ggUserdata.title) == "\uc548\ubc29\ud30c\uc6b0\ub354\ub8f8"))
			)
			{
				newLogicStateTextColor = 0;
			}
			else if (
				((me.elementMouseOver['on4'] == true))
			)
			{
				newLogicStateTextColor = 1;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me._on4.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me._on4.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me._on4.style.transition='right 0s, top 0s, color 0s';
				if (me._on4.ggCurrentLogicStateTextColor == 0) {
					me._on4.style.color="rgba(196,145,89,1)";
				}
				else if (me._on4.ggCurrentLogicStateTextColor == 1) {
					me._on4.style.color="rgba(196,145,89,1)";
				}
				else {
					me._on4.style.color="rgba(255,255,255,1)";
				}
			}
		}
		me._on4.logicBlock_textcolor();
		me._on4.onclick=function (e) {
			player.openNext("{node13}","");
		}
		me._on4.onmouseover=function (e) {
			me.elementMouseOver['on4']=true;
			me._on4.logicBlock_textcolor();
		}
		me._on4.onmouseout=function (e) {
			if (e && e.toElement) {
				var current = e.toElement;
				while (current = current.parentNode) {
				if (current == me._on4__text)
					return;
				}
			}
			me.elementMouseOver['on4']=false;
			me._on4.logicBlock_textcolor();
		}
		me._on4.ggCurrentLogicStatePosition = -1;
		me._on4.ggCurrentLogicStateTextColor = -1;
		me._on4.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['on4']) {
				me.elementMouseOver['on4']=true;
			}
		}
		me._on4.ggUpdatePosition=function (useTransition) {
		}
		me._on.appendChild(me._on4);
		el=me.__2on0=document.createElement('div');
		els=me.__2on0__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc695\uc2e42-\uac00\uad6con";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='position : absolute;';
		hs+='right : 7%;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 9.29em;';
		hs+='pointer-events:auto;';
		hs+='letter-spacing:1px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 15px;';
		hs+='font-weight: 400;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__2on0.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc548\ubc29\uc695\uc2e4", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__2on0.ggUpdateText();
		el.appendChild(els);
		me.__2on0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__2on0.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getViewerSize().width <= 1024))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__2on0.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__2on0.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__2on0.style.transition='right 0s, top 0s, color 0s';
				if (me.__2on0.ggCurrentLogicStatePosition == 0) {
					me.__2on0.style.right='10%';
					me.__2on0.style.top = 'calc(50% - (100% / 2))';
				}
				else {
					me.__2on0.style.right='7%';
					me.__2on0.style.top='calc(50% - ((100% + 0px) / 2) + 0px)';
				}
			}
		}
		me.__2on0.logicBlock_position();
		me.__2on0.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((player._(me.ggUserdata.title) == "\uc548\ubc29\uc695\uc2e4"))
			)
			{
				newLogicStateTextColor = 0;
			}
			else if (
				((me.elementMouseOver['_2on0'] == true))
			)
			{
				newLogicStateTextColor = 1;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me.__2on0.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me.__2on0.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me.__2on0.style.transition='right 0s, top 0s, color 0s';
				if (me.__2on0.ggCurrentLogicStateTextColor == 0) {
					me.__2on0.style.color="rgba(196,145,89,1)";
				}
				else if (me.__2on0.ggCurrentLogicStateTextColor == 1) {
					me.__2on0.style.color="rgba(196,145,89,1)";
				}
				else {
					me.__2on0.style.color="rgba(255,255,255,1)";
				}
			}
		}
		me.__2on0.logicBlock_textcolor();
		me.__2on0.onclick=function (e) {
			player.openNext("{node12}","");
		}
		me.__2on0.onmouseover=function (e) {
			me.elementMouseOver['_2on0']=true;
			me.__2on0.logicBlock_textcolor();
		}
		me.__2on0.onmouseout=function (e) {
			if (e && e.toElement) {
				var current = e.toElement;
				while (current = current.parentNode) {
				if (current == me.__2on0__text)
					return;
				}
			}
			me.elementMouseOver['_2on0']=false;
			me.__2on0.logicBlock_textcolor();
		}
		me.__2on0.ggCurrentLogicStatePosition = -1;
		me.__2on0.ggCurrentLogicStateTextColor = -1;
		me.__2on0.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['_2on0']) {
				me.elementMouseOver['_2on0']=true;
			}
		}
		me.__2on0.ggUpdatePosition=function (useTransition) {
		}
		me._on.appendChild(me.__2on0);
		el=me.__1on=document.createElement('div');
		els=me.__1on__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc695\uc2e41-\uac00\uad6con";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='position : absolute;';
		hs+='right : 14%;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 9.29em;';
		hs+='pointer-events:auto;';
		hs+='letter-spacing:1px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 15px;';
		hs+='font-weight: 400;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__1on.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uacf5\uc6a9\uc695\uc2e4", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__1on.ggUpdateText();
		el.appendChild(els);
		me.__1on.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__1on.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getViewerSize().width <= 1024))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__1on.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__1on.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__1on.style.transition='right 0s, top 0s, color 0s';
				if (me.__1on.ggCurrentLogicStatePosition == 0) {
					me.__1on.style.right='20%';
					me.__1on.style.top = 'calc(50% - (100% / 2))';
				}
				else {
					me.__1on.style.right='14%';
					me.__1on.style.top='calc(50% - ((100% + 0px) / 2) + 0px)';
				}
			}
		}
		me.__1on.logicBlock_position();
		me.__1on.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((player._(me.ggUserdata.title) == "\uacf5\uc6a9\uc695\uc2e4"))
			)
			{
				newLogicStateTextColor = 0;
			}
			else if (
				((me.elementMouseOver['_1on'] == true))
			)
			{
				newLogicStateTextColor = 1;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me.__1on.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me.__1on.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me.__1on.style.transition='right 0s, top 0s, color 0s';
				if (me.__1on.ggCurrentLogicStateTextColor == 0) {
					me.__1on.style.color="rgba(196,145,89,1)";
				}
				else if (me.__1on.ggCurrentLogicStateTextColor == 1) {
					me.__1on.style.color="rgba(196,145,89,1)";
				}
				else {
					me.__1on.style.color="rgba(255,255,255,1)";
				}
			}
		}
		me.__1on.logicBlock_textcolor();
		me.__1on.onclick=function (e) {
			player.openNext("{node20}","");
		}
		me.__1on.onmouseover=function (e) {
			me.elementMouseOver['_1on']=true;
			me.__1on.logicBlock_textcolor();
		}
		me.__1on.onmouseout=function (e) {
			if (e && e.toElement) {
				var current = e.toElement;
				while (current = current.parentNode) {
				if (current == me.__1on__text)
					return;
				}
			}
			me.elementMouseOver['_1on']=false;
			me.__1on.logicBlock_textcolor();
		}
		me.__1on.ggCurrentLogicStatePosition = -1;
		me.__1on.ggCurrentLogicStateTextColor = -1;
		me.__1on.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['_1on']) {
				me.elementMouseOver['_1on']=true;
			}
		}
		me.__1on.ggUpdatePosition=function (useTransition) {
		}
		me._on.appendChild(me.__1on);
		el=me.__4on=document.createElement('div');
		els=me.__4on__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uce68\uc2e44-\uac00\uad6con";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='position : absolute;';
		hs+='right : 21%;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 9.29em;';
		hs+='pointer-events:auto;';
		hs+='letter-spacing:1px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 15px;';
		hs+='font-weight: 400;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__4on.ggUpdateText=function() {
			var params = [];
			var hs = player._("2F \uce68\uc2e44\n", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__4on.ggUpdateText();
		el.appendChild(els);
		me.__4on.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__4on.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getViewerSize().width <= 1024))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__4on.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__4on.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__4on.style.transition='right 0s, top 0s, color 0s';
				if (me.__4on.ggCurrentLogicStatePosition == 0) {
					me.__4on.style.right='30%';
					me.__4on.style.top = 'calc(50% - (100% / 2))';
				}
				else {
					me.__4on.style.right='21%';
					me.__4on.style.top='calc(50% - ((100% + 0px) / 2) + 0px)';
				}
			}
		}
		me.__4on.logicBlock_position();
		me.__4on.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((player._(me.ggUserdata.title) == "2\uce35 \uce68\uc2e44"))
			)
			{
				newLogicStateTextColor = 0;
			}
			else if (
				((me.elementMouseOver['_4on'] == true))
			)
			{
				newLogicStateTextColor = 1;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me.__4on.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me.__4on.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me.__4on.style.transition='right 0s, top 0s, color 0s';
				if (me.__4on.ggCurrentLogicStateTextColor == 0) {
					me.__4on.style.color="rgba(196,145,89,1)";
				}
				else if (me.__4on.ggCurrentLogicStateTextColor == 1) {
					me.__4on.style.color="rgba(196,145,89,1)";
				}
				else {
					me.__4on.style.color="rgba(255,255,255,1)";
				}
			}
		}
		me.__4on.logicBlock_textcolor();
		me.__4on.onclick=function (e) {
			player.openNext("{node3}","");
		}
		me.__4on.onmouseover=function (e) {
			me.elementMouseOver['_4on']=true;
			me.__4on.logicBlock_textcolor();
		}
		me.__4on.onmouseout=function (e) {
			if (e && e.toElement) {
				var current = e.toElement;
				while (current = current.parentNode) {
				if (current == me.__4on__text)
					return;
				}
			}
			me.elementMouseOver['_4on']=false;
			me.__4on.logicBlock_textcolor();
		}
		me.__4on.ggCurrentLogicStatePosition = -1;
		me.__4on.ggCurrentLogicStateTextColor = -1;
		me.__4on.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['_4on']) {
				me.elementMouseOver['_4on']=true;
			}
		}
		me.__4on.ggUpdatePosition=function (useTransition) {
		}
		me._on.appendChild(me.__4on);
		el=me.__3on=document.createElement('div');
		els=me.__3on__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uce68\uc2e43-\uac00\uad6con";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='position : absolute;';
		hs+='right : 28%;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 9.29em;';
		hs+='pointer-events:auto;';
		hs+='letter-spacing:1px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 15px;';
		hs+='font-weight: 400;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__3on.ggUpdateText=function() {
			var params = [];
			var hs = player._("2F \uce68\uc2e43\n", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__3on.ggUpdateText();
		el.appendChild(els);
		me.__3on.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__3on.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getViewerSize().width <= 1024))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__3on.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__3on.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__3on.style.transition='right 0s, top 0s, color 0s';
				if (me.__3on.ggCurrentLogicStatePosition == 0) {
					me.__3on.style.right='30%';
					me.__3on.style.top = 'calc(50% - (100% / 2))';
				}
				else {
					me.__3on.style.right='28%';
					me.__3on.style.top='calc(50% - ((100% + 0px) / 2) + 0px)';
				}
			}
		}
		me.__3on.logicBlock_position();
		me.__3on.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((player._(me.ggUserdata.title) == "2\uce35 \uce68\uc2e43"))
			)
			{
				newLogicStateTextColor = 0;
			}
			else if (
				((me.elementMouseOver['_3on'] == true))
			)
			{
				newLogicStateTextColor = 1;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me.__3on.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me.__3on.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me.__3on.style.transition='right 0s, top 0s, color 0s';
				if (me.__3on.ggCurrentLogicStateTextColor == 0) {
					me.__3on.style.color="rgba(196,145,89,1)";
				}
				else if (me.__3on.ggCurrentLogicStateTextColor == 1) {
					me.__3on.style.color="rgba(196,145,89,1)";
				}
				else {
					me.__3on.style.color="rgba(255,255,255,1)";
				}
			}
		}
		me.__3on.logicBlock_textcolor();
		me.__3on.onclick=function (e) {
			player.openNext("{node4}","");
		}
		me.__3on.onmouseover=function (e) {
			me.elementMouseOver['_3on']=true;
			me.__3on.logicBlock_textcolor();
		}
		me.__3on.onmouseout=function (e) {
			if (e && e.toElement) {
				var current = e.toElement;
				while (current = current.parentNode) {
				if (current == me.__3on__text)
					return;
				}
			}
			me.elementMouseOver['_3on']=false;
			me.__3on.logicBlock_textcolor();
		}
		me.__3on.ggCurrentLogicStatePosition = -1;
		me.__3on.ggCurrentLogicStateTextColor = -1;
		me.__3on.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['_3on']) {
				me.elementMouseOver['_3on']=true;
			}
		}
		me.__3on.ggUpdatePosition=function (useTransition) {
		}
		me._on.appendChild(me.__3on);
		el=me.__2on=document.createElement('div');
		els=me.__2on__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uce68\uc2e42-\uac00\uad6con";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='position : absolute;';
		hs+='right : 35%;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 9.29em;';
		hs+='pointer-events:auto;';
		hs+='letter-spacing:1px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 15px;';
		hs+='font-weight: 400;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__2on.ggUpdateText=function() {
			var params = [];
			var hs = player._("2F \uce68\uc2e42\n", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__2on.ggUpdateText();
		el.appendChild(els);
		me.__2on.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__2on.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getViewerSize().width <= 1024))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__2on.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__2on.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__2on.style.transition='right 0s, top 0s, color 0s';
				if (me.__2on.ggCurrentLogicStatePosition == 0) {
					me.__2on.style.right='40%';
					me.__2on.style.top = 'calc(50% - (100% / 2))';
				}
				else {
					me.__2on.style.right='35%';
					me.__2on.style.top='calc(50% - ((100% + 0px) / 2) + 0px)';
				}
			}
		}
		me.__2on.logicBlock_position();
		me.__2on.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((player._(me.ggUserdata.title) == "2\uce35 \uce68\uc2e42"))
			)
			{
				newLogicStateTextColor = 0;
			}
			else if (
				((me.elementMouseOver['_2on'] == true))
			)
			{
				newLogicStateTextColor = 1;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me.__2on.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me.__2on.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me.__2on.style.transition='right 0s, top 0s, color 0s';
				if (me.__2on.ggCurrentLogicStateTextColor == 0) {
					me.__2on.style.color="rgba(196,145,89,1)";
				}
				else if (me.__2on.ggCurrentLogicStateTextColor == 1) {
					me.__2on.style.color="rgba(196,145,89,1)";
				}
				else {
					me.__2on.style.color="rgba(255,255,255,1)";
				}
			}
		}
		me.__2on.logicBlock_textcolor();
		me.__2on.onclick=function (e) {
			player.openNext("{node5}","");
		}
		me.__2on.onmouseover=function (e) {
			me.elementMouseOver['_2on']=true;
			me.__2on.logicBlock_textcolor();
		}
		me.__2on.onmouseout=function (e) {
			if (e && e.toElement) {
				var current = e.toElement;
				while (current = current.parentNode) {
				if (current == me.__2on__text)
					return;
				}
			}
			me.elementMouseOver['_2on']=false;
			me.__2on.logicBlock_textcolor();
		}
		me.__2on.ggCurrentLogicStatePosition = -1;
		me.__2on.ggCurrentLogicStateTextColor = -1;
		me.__2on.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['_2on']) {
				me.elementMouseOver['_2on']=true;
			}
		}
		me.__2on.ggUpdatePosition=function (useTransition) {
		}
		me._on.appendChild(me.__2on);
		el=me._on3=document.createElement('div');
		els=me._on3__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc548\ubc29-\uac00\uad6con";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='position : absolute;';
		hs+='right : 41%;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 9.29em;';
		hs+='pointer-events:auto;';
		hs+='letter-spacing:1px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 15px;';
		hs+='font-weight: 400;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._on3.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc548\ubc29\n", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._on3.ggUpdateText();
		el.appendChild(els);
		me._on3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._on3.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getViewerSize().width <= 1024))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._on3.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._on3.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._on3.style.transition='right 0s, top 0s, color 0s';
				if (me._on3.ggCurrentLogicStatePosition == 0) {
					me._on3.style.right='50%';
					me._on3.style.top = 'calc(50% - (100% / 2))';
				}
				else {
					me._on3.style.right='41%';
					me._on3.style.top='calc(50% - ((100% + 0px) / 2) + 0px)';
				}
			}
		}
		me._on3.logicBlock_position();
		me._on3.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((player._(me.ggUserdata.title) == "\uc548\ubc29"))
			)
			{
				newLogicStateTextColor = 0;
			}
			else if (
				((me.elementMouseOver['on3'] == true))
			)
			{
				newLogicStateTextColor = 1;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me._on3.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me._on3.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me._on3.style.transition='right 0s, top 0s, color 0s';
				if (me._on3.ggCurrentLogicStateTextColor == 0) {
					me._on3.style.color="rgba(196,145,89,1)";
				}
				else if (me._on3.ggCurrentLogicStateTextColor == 1) {
					me._on3.style.color="rgba(196,145,89,1)";
				}
				else {
					me._on3.style.color="rgba(255,255,255,1)";
				}
			}
		}
		me._on3.logicBlock_textcolor();
		me._on3.onclick=function (e) {
			player.openNext("{node18}","");
		}
		me._on3.onmouseover=function (e) {
			me.elementMouseOver['on3']=true;
			me._on3.logicBlock_textcolor();
		}
		me._on3.onmouseout=function (e) {
			if (e && e.toElement) {
				var current = e.toElement;
				while (current = current.parentNode) {
				if (current == me._on3__text)
					return;
				}
			}
			me.elementMouseOver['on3']=false;
			me._on3.logicBlock_textcolor();
		}
		me._on3.ggCurrentLogicStatePosition = -1;
		me._on3.ggCurrentLogicStateTextColor = -1;
		me._on3.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['on3']) {
				me.elementMouseOver['on3']=true;
			}
		}
		me._on3.ggUpdatePosition=function (useTransition) {
		}
		me._on.appendChild(me._on3);
		el=me._on2=document.createElement('div');
		els=me._on2__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc8fc\ubc29-\uac00\uad6con";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='position : absolute;';
		hs+='right : 46%;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 9.29em;';
		hs+='pointer-events:auto;';
		hs+='letter-spacing:1px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 15px;';
		hs+='font-weight: 400;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._on2.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc8fc\ubc29", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._on2.ggUpdateText();
		el.appendChild(els);
		me._on2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._on2.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getViewerSize().width <= 1024))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._on2.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._on2.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._on2.style.transition='right 0s, top 0s, color 0s';
				if (me._on2.ggCurrentLogicStatePosition == 0) {
					me._on2.style.right='60%';
					me._on2.style.top = 'calc(50% - (100% / 2))';
				}
				else {
					me._on2.style.right='46%';
					me._on2.style.top='calc(50% - ((100% + 0px) / 2) + 0px)';
				}
			}
		}
		me._on2.logicBlock_position();
		me._on2.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((player._(me.ggUserdata.title) == "\uc8fc\ubc29"))
			)
			{
				newLogicStateTextColor = 0;
			}
			else if (
				((me.elementMouseOver['on2'] == true))
			)
			{
				newLogicStateTextColor = 1;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me._on2.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me._on2.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me._on2.style.transition='right 0s, top 0s, color 0s';
				if (me._on2.ggCurrentLogicStateTextColor == 0) {
					me._on2.style.color="rgba(196,145,89,1)";
				}
				else if (me._on2.ggCurrentLogicStateTextColor == 1) {
					me._on2.style.color="rgba(196,145,89,1)";
				}
				else {
					me._on2.style.color="rgba(255,255,255,1)";
				}
			}
		}
		me._on2.logicBlock_textcolor();
		me._on2.onclick=function (e) {
			player.openNext("{node11}","");
		}
		me._on2.onmouseover=function (e) {
			me.elementMouseOver['on2']=true;
			me._on2.logicBlock_textcolor();
		}
		me._on2.onmouseout=function (e) {
			if (e && e.toElement) {
				var current = e.toElement;
				while (current = current.parentNode) {
				if (current == me._on2__text)
					return;
				}
			}
			me.elementMouseOver['on2']=false;
			me._on2.logicBlock_textcolor();
		}
		me._on2.ggCurrentLogicStatePosition = -1;
		me._on2.ggCurrentLogicStateTextColor = -1;
		me._on2.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['on2']) {
				me.elementMouseOver['on2']=true;
			}
		}
		me._on2.ggUpdatePosition=function (useTransition) {
		}
		me._on.appendChild(me._on2);
		el=me._on1=document.createElement('div');
		els=me._on1__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uac70\uc2e4-\uac00\uad6con";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='position : absolute;';
		hs+='right : 51%;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 9.29em;';
		hs+='pointer-events:auto;';
		hs+='letter-spacing:1px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 15px;';
		hs+='font-weight: 400;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._on1.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uac70\uc2e4", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._on1.ggUpdateText();
		el.appendChild(els);
		me._on1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._on1.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getViewerSize().width <= 1024))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._on1.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._on1.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._on1.style.transition='right 0s, top 0s, color 0s';
				if (me._on1.ggCurrentLogicStatePosition == 0) {
					me._on1.style.right='70%';
					me._on1.style.top = 'calc(50% - (100% / 2))';
				}
				else {
					me._on1.style.right='51%';
					me._on1.style.top='calc(50% - ((100% + 0px) / 2) + 0px)';
				}
			}
		}
		me._on1.logicBlock_position();
		me._on1.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((player._(me.ggUserdata.title) == "\uac70\uc2e4"))
			)
			{
				newLogicStateTextColor = 0;
			}
			else if (
				((me.elementMouseOver['on1'] == true))
			)
			{
				newLogicStateTextColor = 1;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me._on1.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me._on1.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me._on1.style.transition='right 0s, top 0s, color 0s';
				if (me._on1.ggCurrentLogicStateTextColor == 0) {
					me._on1.style.color="rgba(196,145,89,1)";
				}
				else if (me._on1.ggCurrentLogicStateTextColor == 1) {
					me._on1.style.color="rgba(196,145,89,1)";
				}
				else {
					me._on1.style.color="rgba(255,255,255,1)";
				}
			}
		}
		me._on1.logicBlock_textcolor();
		me._on1.onclick=function (e) {
			player.openNext("{node16}","");
		}
		me._on1.onmouseover=function (e) {
			me.elementMouseOver['on1']=true;
			me._on1.logicBlock_textcolor();
		}
		me._on1.onmouseout=function (e) {
			if (e && e.toElement) {
				var current = e.toElement;
				while (current = current.parentNode) {
				if (current == me._on1__text)
					return;
				}
			}
			me.elementMouseOver['on1']=false;
			me._on1.logicBlock_textcolor();
		}
		me._on1.ggCurrentLogicStatePosition = -1;
		me._on1.ggCurrentLogicStateTextColor = -1;
		me._on1.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['on1']) {
				me.elementMouseOver['on1']=true;
			}
		}
		me._on1.ggUpdatePosition=function (useTransition) {
		}
		me._on.appendChild(me._on1);
		el=me._on0=document.createElement('div');
		els=me._on0__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ud604\uad00-\uac00\uad6con";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='position : absolute;';
		hs+='right : 56%;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 9.29em;';
		hs+='pointer-events:auto;';
		hs+='letter-spacing:1px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 15px;';
		hs+='font-weight: 400;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._on0.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ud604\uad00", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._on0.ggUpdateText();
		el.appendChild(els);
		me._on0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._on0.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getViewerSize().width <= 1024))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._on0.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._on0.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._on0.style.transition='right 0s, top 0s, color 0s';
				if (me._on0.ggCurrentLogicStatePosition == 0) {
					me._on0.style.right='80%';
					me._on0.style.top = 'calc(50% - (100% / 2))';
				}
				else {
					me._on0.style.right='56%';
					me._on0.style.top='calc(50% - ((100% + 0px) / 2) + 0px)';
				}
			}
		}
		me._on0.logicBlock_position();
		me._on0.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((player._(me.ggUserdata.title) == "\ud604\uad00"))
			)
			{
				newLogicStateTextColor = 0;
			}
			else if (
				((me.elementMouseOver['on0'] == true))
			)
			{
				newLogicStateTextColor = 1;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me._on0.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me._on0.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me._on0.style.transition='right 0s, top 0s, color 0s';
				if (me._on0.ggCurrentLogicStateTextColor == 0) {
					me._on0.style.color="rgba(196,145,89,1)";
				}
				else if (me._on0.ggCurrentLogicStateTextColor == 1) {
					me._on0.style.color="rgba(196,145,89,1)";
				}
				else {
					me._on0.style.color="rgba(255,255,255,1)";
				}
			}
		}
		me._on0.logicBlock_textcolor();
		me._on0.onclick=function (e) {
			player.openNext("{node9}","");
		}
		me._on0.onmouseover=function (e) {
			me.elementMouseOver['on0']=true;
			me._on0.logicBlock_textcolor();
		}
		me._on0.onmouseout=function (e) {
			if (e && e.toElement) {
				var current = e.toElement;
				while (current = current.parentNode) {
				if (current == me._on0__text)
					return;
				}
			}
			me.elementMouseOver['on0']=false;
			me._on0.logicBlock_textcolor();
		}
		me._on0.ggCurrentLogicStatePosition = -1;
		me._on0.ggCurrentLogicStateTextColor = -1;
		me._on0.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['on0']) {
				me.elementMouseOver['on0']=true;
			}
		}
		me._on0.ggUpdatePosition=function (useTransition) {
		}
		me._on.appendChild(me._on0);
		me.__47.appendChild(me._on);
		me.__46.appendChild(me.__47);
		me.divSkin.appendChild(me.__46);
		el=me.__36=document.createElement('div');
		el.ggId="\uc717-\ubca0\ub108";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0%);';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__36.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__36.ggUpdatePosition=function (useTransition) {
		}
		el=me.__37=document.createElement('div');
		el.ggId="\uc717-\ubca0\ub108 \ubc30\uacbd";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #000000;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__37.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__37.ggUpdatePosition=function (useTransition) {
		}
		el=me.__45=document.createElement('div');
		el.ggId="\ub85c\uace0\ucee8\ud14c\uc774\ub108";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 165px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__45.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__45.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize().width <= 460))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__45.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__45.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__45.style.transition='';
				if (me.__45.ggCurrentLogicStateVisible == 0) {
					me.__45.style.visibility="hidden";
					me.__45.ggVisible=false;
				}
				else if (me.__45.ggCurrentLogicStateVisible == 1) {
					me.__45.style.visibility="hidden";
					me.__45.ggVisible=false;
				}
				else {
					me.__45.style.visibility=(Number(me.__45.style.opacity)>0||!me.__45.style.opacity)?'inherit':'hidden';
					me.__45.ggVisible=true;
				}
			}
		}
		me.__45.logicBlock_visible();
		me.__45.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_14=document.createElement('div');
		els=me._image_14__img=document.createElement('img');
		els.className='ggskin ggskin_image_14';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 14";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_14.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_14.ggUpdatePosition=function (useTransition) {
		}
		me.__45.appendChild(me._image_14);
		me.__37.appendChild(me.__45);
		el=me.__44=document.createElement('div');
		el.ggId="\ud584\ubc84\uac70";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='position : absolute;';
		hs+='right : 10px;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 50px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__44.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__44.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getViewerSize().width <= 320))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me.__44.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me.__44.ggCurrentLogicStateScaling = newLogicStateScaling;
				me.__44.style.transition='transform 0s';
				if (me.__44.ggCurrentLogicStateScaling == 0) {
					me.__44.ggParameter.sx = 0.9;
					me.__44.ggParameter.sy = 0.9;
					me.__44.style.transform=parameterToTransform(me.__44.ggParameter);
					skin.updateSize(me.__44);
				}
				else {
					me.__44.ggParameter.sx = 1;
					me.__44.ggParameter.sy = 1;
					me.__44.style.transform=parameterToTransform(me.__44.ggParameter);
					skin.updateSize(me.__44);
				}
			}
		}
		me.__44.logicBlock_scaling();
		me.__44.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize().width <= 460))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__44.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__44.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__44.style.transition='transform 0s';
				if (me.__44.ggCurrentLogicStateVisible == 0) {
					me.__44.style.visibility=(Number(me.__44.style.opacity)>0||!me.__44.style.opacity)?'inherit':'hidden';
					me.__44.ggVisible=true;
				}
				else {
					me.__44.style.visibility="hidden";
					me.__44.ggVisible=false;
				}
			}
		}
		me.__44.logicBlock_visible();
		me.__44.onclick=function (e) {
			player.setVariableValue('vis_sidebar', true);
		}
		me.__44.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_15=document.createElement('div');
		els=me._image_15__img=document.createElement('img');
		els.className='ggskin ggskin_image_15';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAAA3RJREFUeF7tnbtrFFEYxc+JDwQt7ESzFpa+sLOzEAQtBf8QwUp8ND7wv1E7wcbC/0BRrBSEBCxFEYyaT+4kEybJ7orcLztnd86UW5x77vnNNzf3MRPCl1QClHJjMzAQsZvAQAxELAExO64QAxFLQMyOK8RAxBIQs+MKMRCxBMTsuEIMRCwBMTuuEAMRS0DMzsQKiYhTAI6K+V0EO19JfpzUkV1AIiIWodfz0AeSu/Lf+iEiXgC4Ng8dWTCPL0lebfvUAImIzwBOLlhH56k7qySXi2FGxAEAa/PkfkG9HiL5swDxmCFCuIwpBiICo3lcGYgQjQ0r510hWkxuGYgWkIsGIgTEY4gQjO6gfhzAqpi3IdoZkVxpZ+rfABwZYgoiff'+
			'5B8nBTJa0hL5/0hmaF5GjbWlbXimfuswMzdbV3p42IOAPg2OzsDaalLyTfT+qtt3DF7gMDMRCxBMTsuEIMRCwBMTuuEAMRS0DMjivEQMQSELMztUIiYknM70LYIbn+XzN1r2fNhvs/17IMYjYgdrbSBdNdfvf5rH54NK22UNoNKsPoEcbWXkhLxY8qARqdg3J/APivKQ0m6z4GpAFiy4WBGIhYAmJ2XCGCQB4AuC/ma6h2HnoeIoS+Odtb/Gwe+Xkn5G2IVs6W40HdpZNHAO4OMQmBPj8mea9ZQumaiYh9AH4LGByShf0ky+R8Y01rUs8j4jKA6wDKW7q+8hL4BeA5yVfjJL2Fmxd0ipKBpMSYJ2IgeVmmKBlISox5IgaSl2WKkoGkxJgnYiB5WaYoGUhKjHkiBpKXZYrStJl6eU36YEorFukmsEby+6RIxn1zsaz6'+
			'lhc+fe1tAh9Int7ZRHe19xyAt3vrwepjErhA8k37e7sfchvAE8fVWwJ3SDb5e8ewNwa7Gl4qH/jzIQcdIP7EnxCLxoq/l6VGBBj5kaUF5aaBaAG5YiBCQDyGCMHoDurlZMkzMW9DtHOD5NN2Ylhe0/XKb4+3wbZ3DIuPiDCUnoCMfQt3E8oJACs9+Rpis8skt32id9p+yCUA5f9Q+cpN4BPJ15MkPW7khl2tZiDVEeYKGEhuntVqBlIdYa6AgeTmWa1mINUR5goYSG6e1WoGUh1hroCB5OZZrWYg1RHmChhIbp7VagZSHWGugIHk5lmtZiDVEeYKGEhuntVqBlIdYa7AX7fH5FoHJdXQAAAAAElFTkSuQmCC';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 15";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 50%;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 50%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_15.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_15.ggUpdatePosition=function (useTransition) {
		}
		me.__44.appendChild(me._image_15);
		me.__37.appendChild(me.__44);
		el=me.__43=document.createElement('div');
		el.ggId="\ud0c0\uc785 \uc120\ud0dd";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 55%;';
		hs+='position : absolute;';
		hs+='right : 2.3%;';
		hs+='top : calc(50% - ((55% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 110px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__43.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__43.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize().width <= 460))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__43.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__43.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__43.style.transition='';
				if (me.__43.ggCurrentLogicStateVisible == 0) {
					me.__43.style.visibility="hidden";
					me.__43.ggVisible=false;
				}
				else if (me.__43.ggCurrentLogicStateVisible == 1) {
					me.__43.style.visibility="hidden";
					me.__43.ggVisible=false;
				}
				else {
					me.__43.style.visibility=(Number(me.__43.style.opacity)>0||!me.__43.style.opacity)?'inherit':'hidden';
					me.__43.ggVisible=true;
				}
			}
		}
		me.__43.logicBlock_visible();
		me.__43.ggUpdatePosition=function (useTransition) {
		}
		el=me._d_125=document.createElement('div');
		els=me._d_125__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc5f0\ub9bd\ud615D 125\u33a1";
		el.ggDy=2;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='border-color : rgba(196,145,89,0);';
		hs+='border-radius : 0px 0px 0px 0px;';
		hs+='border-style : solid;';
		hs+='border-width : 0px 0px 1px 0px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 60%;';
		hs+='position : absolute;';
		hs+='right : 5px;';
		hs+='top : calc(50% - ((60% + 1px) / 2) + 2px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._d_125.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc5f0\ub9bd\ud615D 125m\xb2", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._d_125.ggUpdateText();
		el.appendChild(els);
		me._d_125.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._d_125.logicBlock_bordercolor = function() {
			var newLogicStateBorderColor;
			if (
				((player._(me.ggUserdata.comment) == "\uc5f0\ub9bd\ud615D"))
			)
			{
				newLogicStateBorderColor = 0;
			}
			else {
				newLogicStateBorderColor = -1;
			}
			if (me._d_125.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me._d_125.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me._d_125.style.transition='border-color 0s';
				if (me._d_125.ggCurrentLogicStateBorderColor == 0) {
					me._d_125.style.borderColor="rgba(196,145,89,1)";
				}
				else {
					me._d_125.style.borderColor="rgba(196,145,89,0)";
				}
			}
		}
		me._d_125.logicBlock_bordercolor();
		me._d_125.onclick=function (e) {
			if (
				(
					((player._(me.ggUserdata.comment) != "\uc5f0\ub9bd\ud615D"))
				)
			) {
				player.openUrl("https:\/\/web-townhoused-4fju66f2clmy8hj45.sel5.cloudtype.app\/","");
			}
		}
		me._d_125.ggUpdatePosition=function (useTransition) {
		}
		me.__43.appendChild(me._d_125);
		el=me._c_177m=document.createElement('div');
		els=me._c_177m__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc5f0\ub9bd\ud615C 177m\xb2";
		el.ggDy=2;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='border-color : rgba(196,145,89,0);';
		hs+='border-radius : 0px 0px 0px 0px;';
		hs+='border-style : solid;';
		hs+='border-width : 0px 0px 1px 0px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : -135px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 1px) / 2) + 2px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._c_177m.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc5f0\ub9bd\ud615C 177m\xb2", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._c_177m.ggUpdateText();
		el.appendChild(els);
		me._c_177m.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._c_177m.logicBlock_bordercolor = function() {
			var newLogicStateBorderColor;
			if (
				((player._(me.ggUserdata.comment) == "\uc5f0\ub9bd\ud615C"))
			)
			{
				newLogicStateBorderColor = 0;
			}
			else {
				newLogicStateBorderColor = -1;
			}
			if (me._c_177m.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me._c_177m.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me._c_177m.style.transition='border-color 0s';
				if (me._c_177m.ggCurrentLogicStateBorderColor == 0) {
					me._c_177m.style.borderColor="rgba(196,145,89,1)";
				}
				else {
					me._c_177m.style.borderColor="rgba(196,145,89,0)";
				}
			}
		}
		me._c_177m.logicBlock_bordercolor();
		me._c_177m.onclick=function (e) {
			if (
				(
					((player._(me.ggUserdata.comment) != "\uc5f0\ub9bd\ud615C"))
				)
			) {
				player.openUrl("https:\/\/web-townhousec-4fju66f2clmy8hj45.sel5.cloudtype.app\/","");
			}
		}
		me._c_177m.ggUpdatePosition=function (useTransition) {
		}
		me.__43.appendChild(me._c_177m);
		el=me._b_135m=document.createElement('div');
		els=me._b_135m__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc5f0\ub9bd\ud615B 135m\xb2";
		el.ggDy=2;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='border-color : rgba(196,145,89,0);';
		hs+='border-radius : 0px 0px 0px 0px;';
		hs+='border-style : solid;';
		hs+='border-width : 0px 0px 1px 0px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : -265px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 1px) / 2) + 2px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._b_135m.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc5f0\ub9bd\ud615B 135m\xb2", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._b_135m.ggUpdateText();
		el.appendChild(els);
		me._b_135m.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._b_135m.logicBlock_bordercolor = function() {
			var newLogicStateBorderColor;
			if (
				((player._(me.ggUserdata.comment) == "\uc5f0\ub9bd\ud615B"))
			)
			{
				newLogicStateBorderColor = 0;
			}
			else {
				newLogicStateBorderColor = -1;
			}
			if (me._b_135m.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me._b_135m.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me._b_135m.style.transition='border-color 0s';
				if (me._b_135m.ggCurrentLogicStateBorderColor == 0) {
					me._b_135m.style.borderColor="rgba(196,145,89,1)";
				}
				else {
					me._b_135m.style.borderColor="rgba(196,145,89,0)";
				}
			}
		}
		me._b_135m.logicBlock_bordercolor();
		me._b_135m.onclick=function (e) {
			if (
				(
					((player._(me.ggUserdata.comment) != "\uc5f0\ub9bd\ud615B"))
				)
			) {
				player.openUrl("https:\/\/web-townhouseb-4fju66f2clmy8hj45.sel5.cloudtype.app\/","");
			}
		}
		me._b_135m.ggUpdatePosition=function (useTransition) {
		}
		me.__43.appendChild(me._b_135m);
		el=me._a_141m=document.createElement('div');
		els=me._a_141m__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc5f0\ub9bd\ud615A 141m\xb2";
		el.ggDy=2;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='border-color : rgba(196,145,89,0);';
		hs+='border-radius : 0px 0px 0px 0px;';
		hs+='border-style : solid;';
		hs+='border-width : 0px 0px 1px 0px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : -395px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 1px) / 2) + 2px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._a_141m.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc5f0\ub9bd\ud615A 141m\xb2", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._a_141m.ggUpdateText();
		el.appendChild(els);
		me._a_141m.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._a_141m.logicBlock_bordercolor = function() {
			var newLogicStateBorderColor;
			if (
				((player._(me.ggUserdata.comment) == "\uc5f0\ub9bd\ud615A"))
			)
			{
				newLogicStateBorderColor = 0;
			}
			else {
				newLogicStateBorderColor = -1;
			}
			if (me._a_141m.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me._a_141m.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me._a_141m.style.transition='border-color 0s';
				if (me._a_141m.ggCurrentLogicStateBorderColor == 0) {
					me._a_141m.style.borderColor="rgba(196,145,89,1)";
				}
				else {
					me._a_141m.style.borderColor="rgba(196,145,89,0)";
				}
			}
		}
		me._a_141m.logicBlock_bordercolor();
		me._a_141m.onclick=function (e) {
			if (
				(
					((player._(me.ggUserdata.comment) != "\uc5f0\ub9bd\ud615A"))
				)
			) {
				player.openUrl("https:\/\/web-townhousea-4fju66f2clmy8hj45.sel5.cloudtype.app\/","");
			}
		}
		me._a_141m.ggUpdatePosition=function (useTransition) {
		}
		me.__43.appendChild(me._a_141m);
		el=me.__135m=document.createElement('div');
		els=me.__135m__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ub2e8\ub3c5\ud615 135m\xb2";
		el.ggDy=2;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='border-color : rgba(196,145,89,0);';
		hs+='border-radius : 0px 0px 0px 0px;';
		hs+='border-style : solid;';
		hs+='border-width : 0px 0px 1px 0px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : -525px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 1px) / 2) + 2px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__135m.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ub2e8\ub3c5\ud615 135m\xb2", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__135m.ggUpdateText();
		el.appendChild(els);
		me.__135m.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__135m.logicBlock_bordercolor = function() {
			var newLogicStateBorderColor;
			if (
				((player._(me.ggUserdata.comment) == "\ub2e8\ub3c5\ud615"))
			)
			{
				newLogicStateBorderColor = 0;
			}
			else {
				newLogicStateBorderColor = -1;
			}
			if (me.__135m.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me.__135m.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me.__135m.style.transition='border-color 0s';
				if (me.__135m.ggCurrentLogicStateBorderColor == 0) {
					me.__135m.style.borderColor="rgba(196,145,89,1)";
				}
				else {
					me.__135m.style.borderColor="rgba(196,145,89,0)";
				}
			}
		}
		me.__135m.logicBlock_bordercolor();
		me.__135m.onclick=function (e) {
			if (
				(
					((player._(me.ggUserdata.comment) != "\ub2e8\ub3c5\ud615"))
				)
			) {
				player.openUrl("https:\/\/web-townhouse1-4fju66f2clmy8hj45.sel5.cloudtype.app\/","");
			}
		}
		me.__135m.ggUpdatePosition=function (useTransition) {
		}
		me.__43.appendChild(me.__135m);
		me.__37.appendChild(me.__43);
		el=me._mobile=document.createElement('div');
		el.ggId="\ub85c\uace0\ucee8\ud14c\uc774\ub108-mobile";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 108%;';
		hs+='left : 0%;';
		hs+='position : absolute;';
		hs+='top : -5%;';
		hs+='visibility : hidden;';
		hs+='width : 131px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._mobile.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._mobile.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getViewerSize().width <= 320))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._mobile.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._mobile.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._mobile.style.transition='transform 0s';
				if (me._mobile.ggCurrentLogicStateScaling == 0) {
					me._mobile.ggParameter.sx = 0.9;
					me._mobile.ggParameter.sy = 0.9;
					me._mobile.style.transform=parameterToTransform(me._mobile.ggParameter);
					skin.updateSize(me._mobile);
				}
				else {
					me._mobile.ggParameter.sx = 1;
					me._mobile.ggParameter.sy = 1;
					me._mobile.style.transform=parameterToTransform(me._mobile.ggParameter);
					skin.updateSize(me._mobile);
				}
			}
		}
		me._mobile.logicBlock_scaling();
		me._mobile.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize().width <= 460))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._mobile.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._mobile.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._mobile.style.transition='transform 0s';
				if (me._mobile.ggCurrentLogicStateVisible == 0) {
					me._mobile.style.visibility=(Number(me._mobile.style.opacity)>0||!me._mobile.style.opacity)?'inherit':'hidden';
					me._mobile.ggVisible=true;
				}
				else if (me._mobile.ggCurrentLogicStateVisible == 1) {
					me._mobile.style.visibility=(Number(me._mobile.style.opacity)>0||!me._mobile.style.opacity)?'inherit':'hidden';
					me._mobile.ggVisible=true;
				}
				else {
					me._mobile.style.visibility="hidden";
					me._mobile.ggVisible=false;
				}
			}
		}
		me._mobile.logicBlock_visible();
		me._mobile.ggUpdatePosition=function (useTransition) {
		}
		el=me.__38=document.createElement('div');
		els=me.__38__img=document.createElement('img');
		els.className='ggskin ggskin__38';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\ub85c\uace0 \ubaa8\ubc14\uc77c";
		el.ggDy=-5;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 75%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((75% + 0px) / 2) - 5px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__38.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__38.ggUpdatePosition=function (useTransition) {
		}
		el=me.__39=document.createElement('div');
		el.ggId="\ubaa8\ubc14\uc77c \ud0c0\uc785\uc120\ud0dd";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='position : absolute;';
		hs+='right : -120%;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		hs+='letter-spacing:0.5px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__39.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__39.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getViewerSize().width <= 320))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__39.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__39.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__39.style.transition='right 0s, top 0s, transform 0s';
				if (me.__39.ggCurrentLogicStatePosition == 0) {
					me.__39.style.right='-100%';
					me.__39.style.top='0px';
				}
				else {
					me.__39.style.right='-120%';
					me.__39.style.top='0px';
				}
			}
		}
		me.__39.logicBlock_position();
		me.__39.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getViewerSize().width <= 320))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me.__39.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me.__39.ggCurrentLogicStateScaling = newLogicStateScaling;
				me.__39.style.transition='right 0s, top 0s, transform 0s';
				if (me.__39.ggCurrentLogicStateScaling == 0) {
					me.__39.ggParameter.sx = 0.9;
					me.__39.ggParameter.sy = 0.9;
					me.__39.style.transform=parameterToTransform(me.__39.ggParameter);
					skin.updateSize(me.__39);
				}
				else {
					me.__39.ggParameter.sx = 1;
					me.__39.ggParameter.sy = 1;
					me.__39.style.transform=parameterToTransform(me.__39.ggParameter);
					skin.updateSize(me.__39);
				}
			}
		}
		me.__39.logicBlock_scaling();
		me.__39.onclick=function (e) {
			player.setVariableValue('vis_typebutton', !player.getVariableValue('vis_typebutton'));
			me.__40.ggVisible = !me.__40.ggVisible;
			var flag=me.__40.ggVisible;
			me.__40.style.transition='none';
			me.__40.style.visibility=((flag)&&(Number(me.__40.style.opacity)>0||!me.__40.style.opacity))?'inherit':'hidden';
		}
		me.__39.ggUpdatePosition=function (useTransition) {
		}
		el=me.__41=document.createElement('div');
		els=me.__41__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ud0c0\uc785\uba85";
		el.ggDx=-15;
		el.ggDy=2;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((115% + 0px) / 2) - 15px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 2px);';
		hs+='visibility : inherit;';
		hs+='width : 115%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 16px;';
		hs+='font-weight: 500;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__41.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.ggUserdata.comment)));
			params.push(String(player._(me.ggUserdata.copyright)));
			var hs = player._("%1 %2", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__41.ggUpdateText();
		player.addListener('changenode', function() {
			me.__41.ggUpdateText();
		});
		el.appendChild(els);
		me.__41.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__41.ggUpdatePosition=function (useTransition) {
		}
		el=me.__42=document.createElement('div');
		el.ggId="\ubaa8\ubc14\uc77c \ud0c0\uc785\uba85 \uc544\uc774\ucf58";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 95%;';
		hs+='position : absolute;';
		hs+='top : 22.26%;';
		hs+='visibility : inherit;';
		hs+='width : 20px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__42.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__42.ggUpdatePosition=function (useTransition) {
		}
		el=me.__up=document.createElement('div');
		els=me.__up__img=document.createElement('img');
		els.className='ggskin ggskin__up';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAAA0ZJREFUeF7t3GF22jAQBGCLkyVHAQ7S9CDAUcrJcJ7pcx60gKXVjnaEh7+xVqv5LIhN4jToRZVAoupGzQwCITsJBCIQsgTI2tEOEQhZAmTtaIcIhCwBsna0QwRClgBZO9ohAiFLgKwd7RCBkCVA1o52iEDIEiBrRztEIGQJkLWjHSIQsgTI2ul+h5xOp48p08vl8rHZbM7b7fZMlnFRO92CHA6Hr5TSr0erHcfx936//ypKguTgLkGOx+OfYRiuO+PZq1eU7kByMG6Qzrvd7pPk5M9qoyuQQow5gK5QugExYnSH0gVIJUZXKPQgThjdoFCDOGN0gUILAsKgR6EEAWNQo9CBNMKgRaECaYxBiUIDEoRBh0IBEoxBhRIOQoJBgx'+
			'IKQoZBgRIG4owxfyn18pZ81u3WvweF3ZAMAfHGmG+xo+oWQFYf2hwEHRq6fnXiCwWagrQKq9U8CJxmIK1Daj2fF04TkKhwouatwYGDRIcSPX8pDhSEJQyWPnJwYCBsIbD18wwHAsK6eNa+bnHcQdgXzd6fKwj7YuczkblPNxDmRT56v2bt1wWEdXFLv9Uw9l0NwrioJYjbn7P1XwXCtpgSCFYUM8i7YLB90JtA3g2DCaUY5F0xWFCKQN4dgwElG2QtGNEoWSBrw4hEWQRZK0YUykuQtWNEoDwFEcb9ZWarPB6CtJrcemUdNa5FLv+BtJg0KlCPedH53IGgJ/MIhKEGMqcfEOQkDCF694DK6wry6kEuhoWE/aGyodeqIZ4o87NZkjCqTAZPlJTSpyfIanbGv4SOKOfkVGy1GM4Xj1eQsW7Txv1zS2Xf7sM9Tu7aHbL6'+
			'neH89lX1liWMJ3vMulOm37TS9BDJcRynR+aVvISxkJYF5QpiuA4RRuapW4Lycx0y1868HhFGJoY117t7We/66NXCDN0PL8n14e336XNlfjDx1F3vDyd2T9hYMCfXxa9wjXNrmDEBgRiDQw0TCCpZY12BGINDDRMIKlljXYEYg0MNEwgqWWNdgRiDQw0TCCpZY12BGINDDRMIKlljXYEYg0MNEwgqWWNdgRiDQw0TCCpZY12BGINDDRMIKlljXYEYg0MNEwgqWWNdgRiDQw0TCCpZY91vWL4D8nMQDjgAAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\ubaa8\ubc14\uc77c \ud0c0\uc785\uba85 up";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 20px;';
		hs+='position : absolute;';
		hs+='right : 2.1%;';
		hs+='top : calc(50% - ((20px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__up.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__up.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_typebutton') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__up.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__up.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__up.style.transition='';
				if (me.__up.ggCurrentLogicStateVisible == 0) {
					me.__up.style.visibility=(Number(me.__up.style.opacity)>0||!me.__up.style.opacity)?'inherit':'hidden';
					me.__up.ggVisible=true;
				}
				else {
					me.__up.style.visibility="hidden";
					me.__up.ggVisible=false;
				}
			}
		}
		me.__up.logicBlock_visible();
		me.__up.ggUpdatePosition=function (useTransition) {
		}
		me.__42.appendChild(me.__up);
		el=me.__down=document.createElement('div');
		els=me.__down__img=document.createElement('img');
		els.className='ggskin ggskin__down';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAAAydJREFUeF7t3FFyokAUhWHalZmlqAtJshB1KXFlkmpLUqZEoaG773/h+DJVM4iH83ExwITQ6IVqIKDSKEwjENhOIBCBwBqAxdGECATWACyOJkQgsAZgcTQhAoE1AIujCREIrAFYHE2IQGANwOJoQgQCawAWRxMiEFgDsDiaEIHAGoDF0YR4ADmfz9uY83q9bjebzWW3211guV3GGdPrvwk5Ho9fIYTPvq1t2/b7cDh8uWzCOHRKr38gp9Ppp2ma22S8egklXTa11xvIO8GeCJf9fv+RHm197xiD0bXS7ewhEaN7v1AG9q8UjG5VIYSPqSBxHUJ5gTIF476qS5jxZqH0gMztM4K0M4/umpR7gTMxbmuZOyH6TsmIEb8GcoGs+v'+
			'CVYzJigfEnrRDPHtu2jecgOV6rO3zlwvgDmXAeMgS3GpTcGPFKSNKZ+pDEw78vHiUnxuMpxL9rWaU+JAHSxaIle3q6/F7yw1y0XeAM/M0qn44kvfdDhNJfYY1eXt6gqvHhniamVh9v7xjWCkGHqdnD4C3cmmGIMLW3fxAkllQ7FAXGYrtHgawRxQLjdnExZW+0CpmSMceyltuZBLKGSbHESJ6Qbu+zDp1jCvrWQdiu5AlZKgoBY/KELA2FgjEbZAnfKSSMLCCeUWgY2UA8ohAxsoJ4QqFiZAfxgELGKAJCRqFjFAMhonjAKApCQvGCURyEgOIJowqIJYo3jGogFigeMaqC1ETxilEdpAaKZwwTkJIo3jHMQEqg3G8JvP0t4u62wYg/zf5v8uQbVCM2anCRzHv04OeNXMAMw3RCunJgKKYYCJACh6+Rg/C0mDkGBgSA'+
			'gsBAgRiiYDBwIAYoKAwkSEUUHAYWpAIKEgMNUhAFi4EHKYCCxnABkhEFj+EGJAOKCwxXIDNQ3GC4A5mA4grDJUgMPfKxhO4w3IIMoXh+eqrp/ZCpl2Uf3xcfL9U98Dn+vfeHPrsHyYFKWodASBqpvxYNy77IOJoQGKtABAJrABZHEyIQWAOwOJoQgcAagMXRhAgE1gAsjiZEILAGYHE0IQKBNQCLowkRCKwBWBxNiEBgDcDi/AJ2jwbyAUZLDwAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\ubaa8\ubc14\uc77c \ud0c0\uc785\uba85 down";
		el.ggDy=2;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 20px;';
		hs+='position : absolute;';
		hs+='right : 2.1%;';
		hs+='top : calc(50% - ((20px + 0px) / 2) + 2px);';
		hs+='visibility : hidden;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__down.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__down.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_typebutton') == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__down.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__down.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__down.style.transition='';
				if (me.__down.ggCurrentLogicStateVisible == 0) {
					me.__down.style.visibility=(Number(me.__down.style.opacity)>0||!me.__down.style.opacity)?'inherit':'hidden';
					me.__down.ggVisible=true;
				}
				else {
					me.__down.style.visibility="hidden";
					me.__down.ggVisible=false;
				}
			}
		}
		me.__down.logicBlock_visible();
		me.__down.ggUpdatePosition=function (useTransition) {
		}
		me.__42.appendChild(me.__down);
		me.__41.appendChild(me.__42);
		me.__39.appendChild(me.__41);
		el=me.__40=document.createElement('div');
		el.ggId="\ubaa8\ubc14\uc77c \ud0c0\uc785\uc120\ud0dd \ucee8\ud14c\uc774\ub108";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : -500%;';
		hs+='height : 460%;';
		hs+='left : calc(50% - ((120% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 120%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__40.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__40.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_2=document.createElement('div');
		el.ggId="Rectangle 2";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.392157);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 5px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_2.ggUpdatePosition=function (useTransition) {
		}
		el=me._type5=document.createElement('div');
		els=me._type5__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Type-5";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='background : rgba(255,255,255,0);';
		hs+='border-color : rgba(255,255,255,0.313726);';
		hs+='border-style : solid;';
		hs+='border-width : 0px 0px 0px 0px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 20%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 80%;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 16px;';
		hs+='font-weight: normal;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._type5.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc5f0\ub9bd\ud615D 125m\xb2", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._type5.ggUpdateText();
		el.appendChild(els);
		me._type5.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._type5.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player._(me.ggUserdata.comment) == "\uc5f0\ub9bd\ud615D"))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._type5.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._type5.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._type5.style.transition='background-color 0s';
				if (me._type5.ggCurrentLogicStateBackgroundColor == 0) {
					me._type5.style.backgroundColor="rgba(191,142,88,1)";
				}
				else {
					me._type5.style.backgroundColor="rgba(255,255,255,0)";
				}
			}
		}
		me._type5.logicBlock_backgroundcolor();
		me._type5.onclick=function (e) {
			if (
				(
					((player._(me.ggUserdata.comment) != "\uc5f0\ub9bd\ud615D"))
				)
			) {
				player.openUrl("https:\/\/web-townhoused-4fju66f2clmy8hj45.sel5.cloudtype.app\/","");
			}
		}
		me._type5.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_2.appendChild(me._type5);
		el=me._type4=document.createElement('div');
		els=me._type4__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Type-4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='background : rgba(255,255,255,0);';
		hs+='border-color : rgba(255,255,255,0.313726);';
		hs+='border-style : solid;';
		hs+='border-width : 0px 0px 1px 0px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 20%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 60%;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 16px;';
		hs+='font-weight: normal;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._type4.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc5f0\ub9bd\ud615C 177m\xb2", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._type4.ggUpdateText();
		el.appendChild(els);
		me._type4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._type4.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player._(me.ggUserdata.comment) == "\uc5f0\ub9bd\ud615C"))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._type4.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._type4.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._type4.style.transition='background-color 0s';
				if (me._type4.ggCurrentLogicStateBackgroundColor == 0) {
					me._type4.style.backgroundColor="rgba(191,142,88,1)";
				}
				else {
					me._type4.style.backgroundColor="rgba(255,255,255,0)";
				}
			}
		}
		me._type4.logicBlock_backgroundcolor();
		me._type4.onclick=function (e) {
			if (
				(
					((player._(me.ggUserdata.comment) != "\uc5f0\ub9bd\ud615C"))
				)
			) {
				player.openUrl("https:\/\/web-townhousec-4fju66f2clmy8hj45.sel5.cloudtype.app\/","");
			}
		}
		me._type4.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_2.appendChild(me._type4);
		el=me._type3=document.createElement('div');
		els=me._type3__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Type-3";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='background : rgba(255,255,255,0);';
		hs+='border-color : rgba(255,255,255,0.313726);';
		hs+='border-style : solid;';
		hs+='border-width : 0px 0px 1px 0px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 20%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 40%;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 16px;';
		hs+='font-weight: normal;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._type3.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc5f0\ub9bd\ud615B 135m\xb2", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._type3.ggUpdateText();
		el.appendChild(els);
		me._type3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._type3.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player._(me.ggUserdata.comment) == "\uc5f0\ub9bd\ud615B"))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._type3.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._type3.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._type3.style.transition='background-color 0s';
				if (me._type3.ggCurrentLogicStateBackgroundColor == 0) {
					me._type3.style.backgroundColor="rgba(191,142,88,1)";
				}
				else {
					me._type3.style.backgroundColor="rgba(255,255,255,0)";
				}
			}
		}
		me._type3.logicBlock_backgroundcolor();
		me._type3.onclick=function (e) {
			if (
				(
					((player._(me.ggUserdata.comment) != "\uc5f0\ub9bd\ud615B"))
				)
			) {
				player.openUrl("https:\/\/web-townhouseb-4fju66f2clmy8hj45.sel5.cloudtype.app\/","");
			}
		}
		me._type3.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_2.appendChild(me._type3);
		el=me._type20=document.createElement('div');
		els=me._type20__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Type-2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='background : rgba(255,255,255,0);';
		hs+='border-color : rgba(255,255,255,0.313726);';
		hs+='border-style : solid;';
		hs+='border-width : 0px 0px 1px 0px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 20%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 20%;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 16px;';
		hs+='font-weight: normal;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._type20.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc5f0\ub9bd\ud615A 141m\xb2", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._type20.ggUpdateText();
		el.appendChild(els);
		me._type20.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._type20.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player._(me.ggUserdata.comment) == "\uc5f0\ub9bd\ud615A"))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._type20.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._type20.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._type20.style.transition='background-color 0s';
				if (me._type20.ggCurrentLogicStateBackgroundColor == 0) {
					me._type20.style.backgroundColor="rgba(191,142,88,1)";
				}
				else {
					me._type20.style.backgroundColor="rgba(255,255,255,0)";
				}
			}
		}
		me._type20.logicBlock_backgroundcolor();
		me._type20.onclick=function (e) {
			if (
				(
					((player._(me.ggUserdata.comment) != "\uc5f0\ub9bd\ud615A"))
				)
			) {
				player.openUrl("https:\/\/web-townhousea-4fju66f2clmy8hj45.sel5.cloudtype.app\/","");
			}
		}
		me._type20.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_2.appendChild(me._type20);
		el=me._type1=document.createElement('div');
		els=me._type1__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Type-1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='background : rgba(255,255,255,0);';
		hs+='border-color : rgba(255,255,255,0.313726);';
		hs+='border-style : solid;';
		hs+='border-width : 0px 0px 1px 0px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 20%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 16px;';
		hs+='font-weight: normal;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._type1.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ub2e8\ub3c5\ud615 135m\xb2", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._type1.ggUpdateText();
		el.appendChild(els);
		me._type1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._type1.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player._(me.ggUserdata.comment) == "\ub2e8\ub3c5\ud615"))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._type1.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._type1.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._type1.style.transition='background-color 0s';
				if (me._type1.ggCurrentLogicStateBackgroundColor == 0) {
					me._type1.style.backgroundColor="rgba(191,142,88,1)";
				}
				else {
					me._type1.style.backgroundColor="rgba(255,255,255,0)";
				}
			}
		}
		me._type1.logicBlock_backgroundcolor();
		me._type1.onclick=function (e) {
			if (
				(
					((player._(me.ggUserdata.comment) != "\ub2e8\ub3c5\ud615"))
				)
			) {
				player.openUrl("https:\/\/web-townhouse1-4fju66f2clmy8hj45.sel5.cloudtype.app\/","");
			}
		}
		me._type1.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_2.appendChild(me._type1);
		me.__40.appendChild(me._rectangle_2);
		me.__39.appendChild(me.__40);
		me.__38.appendChild(me.__39);
		me._mobile.appendChild(me.__38);
		me.__37.appendChild(me._mobile);
		me.__36.appendChild(me.__37);
		me.divSkin.appendChild(me.__36);
		el=me.__24=document.createElement('div');
		el.ggId="\uc544\ub798-\ubca0\ub108";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 0px;';
		hs+='height : 50px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__24.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__24.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize().width <= 460))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__24.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__24.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__24.style.transition='';
				if (me.__24.ggCurrentLogicStateVisible == 0) {
					me.__24.style.visibility="hidden";
					me.__24.ggVisible=false;
				}
				else if (me.__24.ggCurrentLogicStateVisible == 1) {
					me.__24.style.visibility="hidden";
					me.__24.ggVisible=false;
				}
				else {
					me.__24.style.visibility=(Number(me.__24.style.opacity)>0||!me.__24.style.opacity)?'inherit':'hidden';
					me.__24.ggVisible=true;
				}
			}
		}
		me.__24.logicBlock_visible();
		me.__24.ggUpdatePosition=function (useTransition) {
		}
		el=me.__25=document.createElement('div');
		el.ggId="\uc544\ub798\ubc30\uacbd";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #000000;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__25.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__25.ggUpdatePosition=function (useTransition) {
		}
		el=me.__35=document.createElement('div');
		el.ggId="\uc544\ub798\ub85c\uace0";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 150px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__35.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__35.ggUpdatePosition=function (useTransition) {
		}
		me.__25.appendChild(me.__35);
		el=me.__26=document.createElement('div');
		el.ggId="\uc544\ub798\ubc84\ud2bc";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='position : absolute;';
		hs+='right : 2.5%;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__26.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__26.ggUpdatePosition=function (useTransition) {
		}
		el=me.__32=document.createElement('div');
		el.ggId="\ubc30\uacbd\uc74c\uc545";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : -20px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__32.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__32.ggUpdatePosition=function (useTransition) {
		}
		el=me._vol_offbg=document.createElement('div');
		el.ggId="vol offbg";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='cursor : default;';
		hs+='height : 60px;';
		hs+='left : calc(50% - ((60px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((60px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 60px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._vol_offbg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._vol_offbg.onclick=function (e) {
				player.pauseSound("_main");
			me._vol_offbg.style.transition='none';
			me._vol_offbg.style.visibility='hidden';
			me._vol_offbg.ggVisible=false;
			me._vol_onbg.style.transition='none';
			me._vol_onbg.style.visibility=(Number(me._vol_onbg.style.opacity)>0||!me._vol_onbg.style.opacity)?'inherit':'hidden';
			me._vol_onbg.ggVisible=true;
		}
		me._vol_offbg.ggUpdatePosition=function (useTransition) {
		}
		el=me._vol_off=document.createElement('div');
		els=me._vol_off__img=document.createElement('img');
		els.className='ggskin ggskin_vol_off';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="vol off";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 40%;';
		hs+='left : calc(50% - ((40% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((40% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 40%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._vol_off.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._vol_off.onmouseover=function (e) {
			me.elementMouseOver['vol_off']=true;
			me.__34.logicBlock_visible();
		}
		me._vol_off.onmouseout=function (e) {
			me.elementMouseOver['vol_off']=false;
			me.__34.logicBlock_visible();
		}
		me._vol_off.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['vol_off']) {
				me.elementMouseOver['vol_off']=true;
				me.__34.logicBlock_visible();
			}
		}
		me._vol_off.ggUpdatePosition=function (useTransition) {
		}
		el=me.__34=document.createElement('div');
		els=me.__34__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc74c\uc545\ub044\uae30";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : rgba(0,0,0,0.588235);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 5px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((60px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : -40px;';
		hs+='visibility : hidden;';
		hs+='width : 60px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 9px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__34.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc74c\uc545 \ub044\uae30\n", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__34.ggUpdateText();
		el.appendChild(els);
		me.__34.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__34.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['vol_off'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__34.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__34.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__34.style.transition='';
				if (me.__34.ggCurrentLogicStateVisible == 0) {
					me.__34.style.visibility=(Number(me.__34.style.opacity)>0||!me.__34.style.opacity)?'inherit':'hidden';
					me.__34.ggVisible=true;
				}
				else {
					me.__34.style.visibility="hidden";
					me.__34.ggVisible=false;
				}
			}
		}
		me.__34.logicBlock_visible();
		me.__34.ggUpdatePosition=function (useTransition) {
		}
		me._vol_off.appendChild(me.__34);
		me._vol_offbg.appendChild(me._vol_off);
		me.__32.appendChild(me._vol_offbg);
		el=me._vol_onbg=document.createElement('div');
		el.ggId="vol onbg";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 60px;';
		hs+='left : calc(50% - ((60px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((60px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 60px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._vol_onbg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._vol_onbg.onclick=function (e) {
				player.playSound("_background","5");
			me._vol_onbg.style.transition='none';
			me._vol_onbg.style.visibility='hidden';
			me._vol_onbg.ggVisible=false;
			me._vol_offbg.style.transition='none';
			me._vol_offbg.style.visibility=(Number(me._vol_offbg.style.opacity)>0||!me._vol_offbg.style.opacity)?'inherit':'hidden';
			me._vol_offbg.ggVisible=true;
		}
		me._vol_onbg.ggUpdatePosition=function (useTransition) {
		}
		el=me._vol_on=document.createElement('div');
		els=me._vol_on__img=document.createElement('img');
		els.className='ggskin ggskin_vol_on';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAxtJREFUeF7tmuF2gyAMhcmTbX2ytU+27snYwWmPpXJvEtBOtD83UPIluYSIhIP/5OD2hxPAGQEHJ3CmQE8BEGP8nOwRkbvGtm4iIMZ4DSF8zYy+iUj6G/x1AWDB+MnoC4uEzQGkMGWLYl7L/w8ABBGBNm4KIMb4HUKY8vQuIhersUvjs+fmQ+B7NgEwilPKz4dIjatsAmF8foJb+hX1YHUAbHEsRLURgtJgfMaiHqwKQLEomqNaAGmcJxVWA6AxPi26VQSMAFKKoVR4iYJVABBPPDm1JYARQl4PzN/3ojlNAQCxK0ayBoC1wiMOeIqCZgCY2JUIMACeCo+s5SkKmgDQ5vsSBASgpsLTRkE1gBrjmQjWVHjaKKgCYBE7Twp4tr'+
			'X5e9D8KfJcADxi5wRg3tYyAGj+IIZmAF6x8wDwFjcZhFh49yCGDwDzrQZUX4no/MxtKdQWxyp2gdoomB/AXmoCaRnOHhoMQG0UMCFNAFDl5LHJNEcDYIQAQ7n0UpKylwSg9GCTId7BBgDIUbDzA2y87QkAVXQQBSUd2A+AyjQoC+FeUuAEgBsesLUGhP6+Gw0gZ30vgNALANhZgrXAzjSgtBUeJgJgWQu2wTK4nUWAtxrsHgD8EAr6AvsphMiZ5dgA2HmCnQX+/WmQeN+9A4QQ/hoi7zwSM+8p1sfCv+jg9G5TS6x1O4x1hRXG009rMPxFriYA0z7bohs8PYs5oUb8yAFqiBwXAI1ntA0SBYBiw0YxlzZR3ABaQSBfhlAThF6CQkVe1XeBrO1ctYsovLhU/mqMR+t6zK+KgJkmTO3y/AoMzQQFgPzZ6f5fMgDeA9R4'+
			'fxBhukLDAM92ygBkkJPq0wuQFuFsCsCjC1oABj+kukYtnM0BWCG0BmDxfvMU8IhjSwCKFHwRz1UiwCKOjQGgjzyLO8eqAGYgYD1uyW9H12eYUgK9CQCgC3Q/18Ihna333RRd0IX0p48Qwo/mOrsGADmkQcibRYDGkJoxhQMavYvcEwBXxdgNgExwk+dpxbhqHVATzlvO7S4CrPBOAFZivY0/I6A3j1rt+QXV+knqp72fmAAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="vol on";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 45%;';
		hs+='left : calc(50% - ((45% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((45% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 45%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._vol_on.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._vol_on.onmouseover=function (e) {
			me.elementMouseOver['vol_on']=true;
			me.__33.logicBlock_visible();
		}
		me._vol_on.onmouseout=function (e) {
			me.elementMouseOver['vol_on']=false;
			me.__33.logicBlock_visible();
		}
		me._vol_on.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['vol_on']) {
				me.elementMouseOver['vol_on']=true;
				me.__33.logicBlock_visible();
			}
		}
		me._vol_on.ggUpdatePosition=function (useTransition) {
		}
		el=me.__33=document.createElement('div');
		els=me.__33__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc74c\uc545\ucf1c\uae30";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : rgba(0,0,0,0.588235);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 5px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((60px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : -40px;';
		hs+='visibility : hidden;';
		hs+='width : 60px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 9px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__33.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc74c\uc545 \ucf1c\uae30\n", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__33.ggUpdateText();
		el.appendChild(els);
		me.__33.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__33.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['vol_on'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__33.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__33.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__33.style.transition='';
				if (me.__33.ggCurrentLogicStateVisible == 0) {
					me.__33.style.visibility=(Number(me.__33.style.opacity)>0||!me.__33.style.opacity)?'inherit':'hidden';
					me.__33.ggVisible=true;
				}
				else {
					me.__33.style.visibility="hidden";
					me.__33.ggVisible=false;
				}
			}
		}
		me.__33.logicBlock_visible();
		me.__33.ggUpdatePosition=function (useTransition) {
		}
		me._vol_on.appendChild(me.__33);
		me._vol_onbg.appendChild(me._vol_on);
		me.__32.appendChild(me._vol_onbg);
		me.__26.appendChild(me.__32);
		el=me.__31=document.createElement('div');
		el.ggId="\uc790\ub3d9\ud68c\uc804";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='position : absolute;';
		hs+='right : -50px;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 60px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__31.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__31.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_1=document.createElement('div');
		el.ggId="Rectangle 1";
		el.ggDx=-40;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 60px;';
		hs+='left : calc(50% - ((60px + 0px) / 2) - 40px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((60px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 60px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_1.onclick=function (e) {
			player.toggleAutorotate();
		}
		me._rectangle_1.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_16=document.createElement('div');
		els=me._image_16__img=document.createElement('img');
		els.className='ggskin ggskin_image_16';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 16";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 43%;';
		hs+='left : calc(50% - ((43% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((43% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 43%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_16.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_16.onmouseover=function (e) {
			me.elementMouseOver['image_16']=true;
			me._text_2.logicBlock_visible();
		}
		me._image_16.onmouseout=function (e) {
			me.elementMouseOver['image_16']=false;
			me._text_2.logicBlock_visible();
		}
		me._image_16.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['image_16']) {
				me.elementMouseOver['image_16']=true;
				me._text_2.logicBlock_visible();
			}
		}
		me._image_16.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_2=document.createElement('div');
		els=me._text_2__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 2";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : rgba(0,0,0,0.588235);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 5px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((60px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : -40px;';
		hs+='visibility : hidden;';
		hs+='width : 60px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 9px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._text_2.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc790\ub3d9\ud68c\uc804\n", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_2.ggUpdateText();
		el.appendChild(els);
		me._text_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_2.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['image_16'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._text_2.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._text_2.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._text_2.style.transition='';
				if (me._text_2.ggCurrentLogicStateVisible == 0) {
					me._text_2.style.visibility=(Number(me._text_2.style.opacity)>0||!me._text_2.style.opacity)?'inherit':'hidden';
					me._text_2.ggVisible=true;
				}
				else {
					me._text_2.style.visibility="hidden";
					me._text_2.ggVisible=false;
				}
			}
		}
		me._text_2.logicBlock_visible();
		me._text_2.ggUpdatePosition=function (useTransition) {
		}
		me._image_16.appendChild(me._text_2);
		me._rectangle_1.appendChild(me._image_16);
		me.__31.appendChild(me._rectangle_1);
		me.__26.appendChild(me.__31);
		el=me.__27=document.createElement('div');
		el.ggId="\uc548\ub0b4\uba58\ud2b8\ubc84\ud2bc";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : -10px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 60px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__27.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__27.ggUpdatePosition=function (useTransition) {
		}
		el=me.__28=document.createElement('div');
		el.ggId="\uc548\ub0b4\uba58\ud2b8\ubc84\ud2bc\ubc30\uacbd";
		el.ggDx=-40;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 60px;';
		hs+='left : calc(50% - ((60px + 0px) / 2) - 40px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((60px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 60px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__28.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__28.onclick=function (e) {
			me.__95.ggVisible = !me.__95.ggVisible;
			var flag=me.__95.ggVisible;
			me.__95.style.transition='none';
			me.__95.style.visibility=((flag)&&(Number(me.__95.style.opacity)>0||!me.__95.style.opacity))?'inherit':'hidden';
		}
		me.__28.ggUpdatePosition=function (useTransition) {
		}
		el=me.__29=document.createElement('div');
		els=me.__29__img=document.createElement('img');
		els.className='ggskin ggskin__29';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\uc548\ub0b4\ubc84\ud2bc\uc774\ubbf8\uc9c0";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 53%;';
		hs+='left : calc(50% - ((53% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((53% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 53%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__29.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__29.onmouseover=function (e) {
			me.elementMouseOver['_29']=true;
			me.__30.logicBlock_visible();
		}
		me.__29.onmouseout=function (e) {
			me.elementMouseOver['_29']=false;
			me.__30.logicBlock_visible();
		}
		me.__29.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['_29']) {
				me.elementMouseOver['_29']=true;
				me.__30.logicBlock_visible();
			}
		}
		me.__29.ggUpdatePosition=function (useTransition) {
		}
		el=me.__30=document.createElement('div');
		els=me.__30__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc548\ub0b4\uba58\ud2b8\uc124\uba85";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : rgba(0,0,0,0.588235);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 5px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((60px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : -35px;';
		hs+='visibility : hidden;';
		hs+='width : 60px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 9px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__30.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc548\ub0b4\uba58\ud2b8\n", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__30.ggUpdateText();
		el.appendChild(els);
		me.__30.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__30.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['_29'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__30.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__30.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__30.style.transition='';
				if (me.__30.ggCurrentLogicStateVisible == 0) {
					me.__30.style.visibility=(Number(me.__30.style.opacity)>0||!me.__30.style.opacity)?'inherit':'hidden';
					me.__30.ggVisible=true;
				}
				else {
					me.__30.style.visibility="hidden";
					me.__30.ggVisible=false;
				}
			}
		}
		me.__30.logicBlock_visible();
		me.__30.ggUpdatePosition=function (useTransition) {
		}
		me.__29.appendChild(me.__30);
		me.__28.appendChild(me.__29);
		me.__27.appendChild(me.__28);
		me.__26.appendChild(me.__27);
		me.__25.appendChild(me.__26);
		me.__24.appendChild(me.__25);
		me.divSkin.appendChild(me.__24);
		el=me.__15=document.createElement('div');
		el.ggId="\ud584\ubc84\uac70\ubc14\uba54\ub274";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='z-index: 999;';
		hs+='height : 100%;';
		hs+='position : absolute;';
		hs+='right : -100%;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 68%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__15.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__15.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('vis_sidebar') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__15.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__15.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__15.style.transition='right 800ms linear 0ms, top 800ms linear 0ms';
				if (me.__15.ggCurrentLogicStatePosition == 0) {
					me.__15.style.right='0%';
					me.__15.style.top='0px';
				}
				else {
					me.__15.style.right='-100%';
					me.__15.style.top='0px';
				}
			}
		}
		me.__15.logicBlock_position();
		me.__15.ggUpdatePosition=function (useTransition) {
		}
		el=me.__on=document.createElement('div');
		el.ggId="\ud584\ubc84\uac70\ubc14 \ub4dc\ub86d\ub2e4\uc6b4-\uac00\uad6con";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 98.5%;';
		hs+='left : 7px;';
		hs+='position : absolute;';
		hs+='top : 16px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__on.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__on.ggUpdatePosition=function (useTransition) {
		}
		el=me.__19=document.createElement('div');
		el.ggId="\ud584\ubc84\uac70\ubc14 \ub4dc\ub86d\ub2e4\uc6b4\uba54\ub274";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__19.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__19.ggUpdatePosition=function (useTransition) {
		}
		el=me._language=document.createElement('div');
		el.ggId="language";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 40px;';
		hs+='left : 8px;';
		hs+='position : absolute;';
		hs+='top : 36px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		hs+='min-height:40px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._language.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._language.ggUpdatePosition=function (useTransition) {
		}
		el=me._type_2english=document.createElement('div');
		el.ggId="TYPE 2-english";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 40px;';
		hs+='left : 2px;';
		hs+='position : absolute;';
		hs+='top : 116.12%;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._type_2english.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._type_2english.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_eng') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._type_2english.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._type_2english.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._type_2english.style.transition='';
				if (me._type_2english.ggCurrentLogicStateVisible == 0) {
					me._type_2english.style.visibility=(Number(me._type_2english.style.opacity)>0||!me._type_2english.style.opacity)?'inherit':'hidden';
					me._type_2english.ggVisible=true;
				}
				else {
					me._type_2english.style.visibility="hidden";
					me._type_2english.ggVisible=false;
				}
			}
		}
		me._type_2english.logicBlock_visible();
		me._type_2english.ggUpdatePosition=function (useTransition) {
		}
		el=me._type2=document.createElement('div');
		els=me._type2__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="TYPE2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='color : #000000;';
		hs+='cursor : pointer;';
		hs+='height : 40px;';
		hs+='left : 10px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 120px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 16px;';
		hs+='font-weight: bold;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._type2.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.ggUserdata.comment)));
			params.push(String(player._(me.ggUserdata.copyright)));
			var hs = player._("%1 %2", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._type2.ggUpdateText();
		player.addListener('changenode', function() {
			me._type2.ggUpdateText();
		});
		el.appendChild(els);
		me._type2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._type2.ggUpdatePosition=function (useTransition) {
		}
		me._type_2english.appendChild(me._type2);
		el=me._type2menuenglish=document.createElement('div');
		el.ggId="TYPE2-menu-english";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : -760%;';
		hs+='height : 750%;';
		hs+='left : -10px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._type2menuenglish.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._type2menuenglish.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player._(me.ggUserdata.information) == "74B"))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._type2menuenglish.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._type2menuenglish.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._type2menuenglish.style.transition='';
				if (me._type2menuenglish.ggCurrentLogicStateVisible == 0) {
					me._type2menuenglish.style.visibility=(Number(me._type2menuenglish.style.opacity)>0||!me._type2menuenglish.style.opacity)?'inherit':'hidden';
					me._type2menuenglish.ggVisible=true;
				}
				else {
					me._type2menuenglish.style.visibility=(Number(me._type2menuenglish.style.opacity)>0||!me._type2menuenglish.style.opacity)?'inherit':'hidden';
					me._type2menuenglish.ggVisible=true;
				}
			}
		}
		me._type2menuenglish.logicBlock_visible();
		me._type2menuenglish.ggUpdatePosition=function (useTransition) {
		}
		el=me._type2english=document.createElement('div');
		el.ggId="TYPE2-\ubc30\uacbd-english";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #eeeeee;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 120%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._type2english.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._type2english.ggUpdatePosition=function (useTransition) {
		}
		el=me._type2english3=document.createElement('div');
		els=me._type2english3__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="TYPE2-\ud604\uad00-english";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='border-color : rgba(0,0,0,0.117647);';
		hs+='border-style : solid;';
		hs+='border-width : 0px 0px 1px 0px;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 10%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 15px;';
		hs+='font-weight: 500;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px 0px 0px 25px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._type2english3.ggUpdateText=function() {
			var params = [];
			var hs = player._("Entryway", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._type2english3.ggUpdateText();
		el.appendChild(els);
		me._type2english3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._type2english3.onclick=function (e) {
			player.openNext("{node9}","");
			player.setVariableValue('vis_sidebar', false);
		}
		me._type2english3.ggUpdatePosition=function (useTransition) {
		}
		me._type2english.appendChild(me._type2english3);
		el=me._type2english2=document.createElement('div');
		els=me._type2english2__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="TYPE2-\uac70\uc2e4-english";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='border-color : rgba(0,0,0,0.117647);';
		hs+='border-style : solid;';
		hs+='border-width : 0px 0px 1px 0px;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 10%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 10%;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 15px;';
		hs+='font-weight: 500;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px 0px 0px 25px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._type2english2.ggUpdateText=function() {
			var params = [];
			var hs = player._("Living Room", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._type2english2.ggUpdateText();
		el.appendChild(els);
		me._type2english2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._type2english2.onclick=function (e) {
			player.openNext("{node16}","");
			player.setVariableValue('vis_sidebar', false);
		}
		me._type2english2.ggUpdatePosition=function (useTransition) {
		}
		me._type2english.appendChild(me._type2english2);
		el=me._type21english0=document.createElement('div');
		els=me._type21english0__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="TYPE2-\uce68\uc2e41-english";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='border-color : rgba(0,0,0,0.117647);';
		hs+='border-style : solid;';
		hs+='border-width : 0px 0px 1px 0px;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 10%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 20%;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 15px;';
		hs+='font-weight: 500;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px 0px 0px 25px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._type21english0.ggUpdateText=function() {
			var params = [];
			var hs = player._("Bedroom 1\n", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._type21english0.ggUpdateText();
		el.appendChild(els);
		me._type21english0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._type21english0.onclick=function (e) {
			player.openNext("{node18}","");
			player.setVariableValue('vis_sidebar', false);
		}
		me._type21english0.ggUpdatePosition=function (useTransition) {
		}
		me._type2english.appendChild(me._type21english0);
		el=me._type22english0=document.createElement('div');
		els=me._type22english0__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="TYPE2-\uce68\uc2e42-english";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='border-color : rgba(0,0,0,0.117647);';
		hs+='border-style : solid;';
		hs+='border-width : 0px 0px 1px 0px;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 10%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 30%;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 15px;';
		hs+='font-weight: 500;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px 0px 0px 25px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._type22english0.ggUpdateText=function() {
			var params = [];
			var hs = player._("2F Bedroom 2\n", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._type22english0.ggUpdateText();
		el.appendChild(els);
		me._type22english0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._type22english0.onclick=function (e) {
			player.openNext("{node5}","");
			player.setVariableValue('vis_sidebar', false);
		}
		me._type22english0.ggUpdatePosition=function (useTransition) {
		}
		me._type2english.appendChild(me._type22english0);
		el=me._type23english=document.createElement('div');
		els=me._type23english__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="TYPE2-\uce68\uc2e43-english";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='border-color : rgba(0,0,0,0.117647);';
		hs+='border-style : solid;';
		hs+='border-width : 0px 0px 1px 0px;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 10%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 40%;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 15px;';
		hs+='font-weight: 500;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px 0px 0px 25px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._type23english.ggUpdateText=function() {
			var params = [];
			var hs = player._("2F Bedroom 3\n", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._type23english.ggUpdateText();
		el.appendChild(els);
		me._type23english.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._type23english.onclick=function (e) {
			player.openNext("{node4}","");
			player.setVariableValue('vis_sidebar', false);
		}
		me._type23english.ggUpdatePosition=function (useTransition) {
		}
		me._type2english.appendChild(me._type23english);
		el=me._type24english=document.createElement('div');
		els=me._type24english__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="TYPE2-\uce68\uc2e44-english";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='border-color : rgba(0,0,0,0.117647);';
		hs+='border-style : solid;';
		hs+='border-width : 0px 0px 1px 0px;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 10%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 50%;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 15px;';
		hs+='font-weight: 500;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px 0px 0px 25px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._type24english.ggUpdateText=function() {
			var params = [];
			var hs = player._("2F Bedroom 4", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._type24english.ggUpdateText();
		el.appendChild(els);
		me._type24english.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._type24english.onclick=function (e) {
			player.openNext("{node3}","");
			player.setVariableValue('vis_sidebar', false);
		}
		me._type24english.ggUpdatePosition=function (useTransition) {
		}
		me._type2english.appendChild(me._type24english);
		el=me._type2english1=document.createElement('div');
		els=me._type2english1__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="TYPE2-\uc8fc\ubc29-english";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='border-color : rgba(0,0,0,0.117647);';
		hs+='border-style : solid;';
		hs+='border-width : 0px 0px 1px 0px;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 10%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 60%;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 15px;';
		hs+='font-weight: 500;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px 0px 0px 25px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._type2english1.ggUpdateText=function() {
			var params = [];
			var hs = player._("Kitchen", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._type2english1.ggUpdateText();
		el.appendChild(els);
		me._type2english1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._type2english1.onclick=function (e) {
			player.openNext("{node11}","");
			player.setVariableValue('vis_sidebar', false);
		}
		me._type2english1.ggUpdatePosition=function (useTransition) {
		}
		me._type2english.appendChild(me._type2english1);
		el=me._type21english=document.createElement('div');
		els=me._type21english__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="TYPE2-\uc695\uc2e41-english";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='border-color : rgba(0,0,0,0.117647);';
		hs+='border-style : solid;';
		hs+='border-width : 0px 0px 1px 0px;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 10%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 70%;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 15px;';
		hs+='font-weight: 500;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px 0px 0px 25px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._type21english.ggUpdateText=function() {
			var params = [];
			var hs = player._("Bathroom 1\n", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._type21english.ggUpdateText();
		el.appendChild(els);
		me._type21english.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._type21english.onclick=function (e) {
			player.openNext("{node20}","");
			player.setVariableValue('vis_sidebar', false);
		}
		me._type21english.ggUpdatePosition=function (useTransition) {
		}
		me._type2english.appendChild(me._type21english);
		el=me._type22english=document.createElement('div');
		els=me._type22english__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="TYPE2-\uc695\uc2e42-english";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='border-color : rgba(0,0,0,0.117647);';
		hs+='border-style : solid;';
		hs+='border-width : 0px 0px 1px 0px;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 10%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 80%;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 15px;';
		hs+='font-weight: 500;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px 0px 0px 25px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._type22english.ggUpdateText=function() {
			var params = [];
			var hs = player._("Bathroom 2\n", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._type22english.ggUpdateText();
		el.appendChild(els);
		me._type22english.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._type22english.onclick=function (e) {
			player.openNext("{node12}","");
			player.setVariableValue('vis_sidebar', false);
		}
		me._type22english.ggUpdatePosition=function (useTransition) {
		}
		me._type2english.appendChild(me._type22english);
		el=me._type2english0=document.createElement('div');
		els=me._type2english0__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="TYPE2-\ub4dc\ub808\uc2a4\ub8f8-english";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='border-color : rgba(0,0,0,0.117647);';
		hs+='border-style : solid;';
		hs+='border-width : 0px 0px 0px 0px;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 10%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 90%;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 15px;';
		hs+='font-weight: 500;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px 0px 0px 25px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._type2english0.ggUpdateText=function() {
			var params = [];
			var hs = player._("Dressing Room\n", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._type2english0.ggUpdateText();
		el.appendChild(els);
		me._type2english0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._type2english0.onclick=function (e) {
			player.openNext("{node13}","");
			player.setVariableValue('vis_sidebar', false);
		}
		me._type2english0.ggUpdatePosition=function (useTransition) {
		}
		me._type2english.appendChild(me._type2english0);
		me._type2menuenglish.appendChild(me._type2english);
		me._type_2english.appendChild(me._type2menuenglish);
		me._language.appendChild(me._type_2english);
		el=me._type_2kor=document.createElement('div');
		el.ggId="TYPE 2-kor";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 40px;';
		hs+='left : 2px;';
		hs+='position : absolute;';
		hs+='top : 116.12%;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._type_2kor.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._type_2kor.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_kor') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._type_2kor.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._type_2kor.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._type_2kor.style.transition='';
				if (me._type_2kor.ggCurrentLogicStateVisible == 0) {
					me._type_2kor.style.visibility=(Number(me._type_2kor.style.opacity)>0||!me._type_2kor.style.opacity)?'inherit':'hidden';
					me._type_2kor.ggVisible=true;
				}
				else {
					me._type_2kor.style.visibility="hidden";
					me._type_2kor.ggVisible=false;
				}
			}
		}
		me._type_2kor.logicBlock_visible();
		me._type_2kor.ggUpdatePosition=function (useTransition) {
		}
		el=me._type2kor4=document.createElement('div');
		els=me._type2kor4__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="TYPE2-kor";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='color : #000000;';
		hs+='cursor : pointer;';
		hs+='height : 40px;';
		hs+='left : 10px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 120px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 16px;';
		hs+='font-weight: bold;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._type2kor4.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.ggUserdata.comment)));
			params.push(String(player._(me.ggUserdata.copyright)));
			var hs = player._("%1 %2", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._type2kor4.ggUpdateText();
		player.addListener('changenode', function() {
			me._type2kor4.ggUpdateText();
		});
		el.appendChild(els);
		me._type2kor4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._type2kor4.ggUpdatePosition=function (useTransition) {
		}
		me._type_2kor.appendChild(me._type2kor4);
		el=me._type2menukor=document.createElement('div');
		el.ggId="TYPE2-menu-kor";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : -760%;';
		hs+='height : 750%;';
		hs+='left : -10px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._type2menukor.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._type2menukor.ggUpdatePosition=function (useTransition) {
		}
		el=me._type2kor=document.createElement('div');
		el.ggId="TYPE2-\ubc30\uacbd-kor";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #eeeeee;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 120%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._type2kor.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._type2kor.ggUpdatePosition=function (useTransition) {
		}
		el=me._type2kor3=document.createElement('div');
		els=me._type2kor3__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="TYPE2-\ud604\uad00-kor";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='border-color : rgba(0,0,0,0.117647);';
		hs+='border-style : solid;';
		hs+='border-width : 0px 0px 1px 0px;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 10%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 15px;';
		hs+='font-weight: 500;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px 0px 0px 25px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._type2kor3.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ud604\uad00", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._type2kor3.ggUpdateText();
		el.appendChild(els);
		me._type2kor3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._type2kor3.onclick=function (e) {
			player.openNext("{node9}","");
			player.setVariableValue('vis_sidebar', false);
		}
		me._type2kor3.ggUpdatePosition=function (useTransition) {
		}
		me._type2kor.appendChild(me._type2kor3);
		el=me._type2kor2=document.createElement('div');
		els=me._type2kor2__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="TYPE2-\uac70\uc2e4-kor";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='border-color : rgba(0,0,0,0.117647);';
		hs+='border-style : solid;';
		hs+='border-width : 0px 0px 1px 0px;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 10%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 10%;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 15px;';
		hs+='font-weight: 500;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px 0px 0px 25px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._type2kor2.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uac70\uc2e4", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._type2kor2.ggUpdateText();
		el.appendChild(els);
		me._type2kor2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._type2kor2.onclick=function (e) {
			player.openNext("{node16}","");
			player.setVariableValue('vis_sidebar', false);
		}
		me._type2kor2.ggUpdatePosition=function (useTransition) {
		}
		me._type2kor.appendChild(me._type2kor2);
		el=me._type21kor0=document.createElement('div');
		els=me._type21kor0__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="TYPE2-\uce68\uc2e41-kor";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='border-color : rgba(0,0,0,0.117647);';
		hs+='border-style : solid;';
		hs+='border-width : 0px 0px 1px 0px;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 10%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 20%;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 15px;';
		hs+='font-weight: 500;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px 0px 0px 25px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._type21kor0.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc548\ubc29", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._type21kor0.ggUpdateText();
		el.appendChild(els);
		me._type21kor0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._type21kor0.onclick=function (e) {
			player.openNext("{node18}","");
			player.setVariableValue('vis_sidebar', false);
		}
		me._type21kor0.ggUpdatePosition=function (useTransition) {
		}
		me._type2kor.appendChild(me._type21kor0);
		el=me._type22kor0=document.createElement('div');
		els=me._type22kor0__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="TYPE2-\uce68\uc2e42-kor";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='border-color : rgba(0,0,0,0.117647);';
		hs+='border-style : solid;';
		hs+='border-width : 0px 0px 1px 0px;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 10%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 30%;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 15px;';
		hs+='font-weight: 500;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px 0px 0px 25px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._type22kor0.ggUpdateText=function() {
			var params = [];
			var hs = player._("2F \uce68\uc2e42\n", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._type22kor0.ggUpdateText();
		el.appendChild(els);
		me._type22kor0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._type22kor0.onclick=function (e) {
			player.openNext("{node5}","");
			player.setVariableValue('vis_sidebar', false);
		}
		me._type22kor0.ggUpdatePosition=function (useTransition) {
		}
		me._type2kor.appendChild(me._type22kor0);
		el=me._type23kor=document.createElement('div');
		els=me._type23kor__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="TYPE2-\uce68\uc2e43-kor";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='border-color : rgba(0,0,0,0.117647);';
		hs+='border-style : solid;';
		hs+='border-width : 0px 0px 1px 0px;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 10%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 40%;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 15px;';
		hs+='font-weight: 500;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px 0px 0px 25px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._type23kor.ggUpdateText=function() {
			var params = [];
			var hs = player._("2F \uce68\uc2e43\n", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._type23kor.ggUpdateText();
		el.appendChild(els);
		me._type23kor.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._type23kor.onclick=function (e) {
			player.openNext("{node4}","");
			player.setVariableValue('vis_sidebar', false);
		}
		me._type23kor.ggUpdatePosition=function (useTransition) {
		}
		me._type2kor.appendChild(me._type23kor);
		el=me._type24kor=document.createElement('div');
		els=me._type24kor__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="TYPE2-\uce68\uc2e44-kor";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='border-color : rgba(0,0,0,0.117647);';
		hs+='border-style : solid;';
		hs+='border-width : 0px 0px 1px 0px;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 10%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 50%;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 15px;';
		hs+='font-weight: 500;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px 0px 0px 25px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._type24kor.ggUpdateText=function() {
			var params = [];
			var hs = player._("2F \uce68\uc2e44\n", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._type24kor.ggUpdateText();
		el.appendChild(els);
		me._type24kor.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._type24kor.onclick=function (e) {
			player.openNext("{node3}","");
			player.setVariableValue('vis_sidebar', false);
		}
		me._type24kor.ggUpdatePosition=function (useTransition) {
		}
		me._type2kor.appendChild(me._type24kor);
		el=me._type2kor1=document.createElement('div');
		els=me._type2kor1__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="TYPE2-\uc8fc\ubc29-kor";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='border-color : rgba(0,0,0,0.117647);';
		hs+='border-style : solid;';
		hs+='border-width : 0px 0px 1px 0px;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 10%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 60%;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 15px;';
		hs+='font-weight: 500;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px 0px 0px 25px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._type2kor1.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc8fc\ubc29\n", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._type2kor1.ggUpdateText();
		el.appendChild(els);
		me._type2kor1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._type2kor1.onclick=function (e) {
			player.openNext("{node11}","");
			player.setVariableValue('vis_sidebar', false);
		}
		me._type2kor1.ggUpdatePosition=function (useTransition) {
		}
		me._type2kor.appendChild(me._type2kor1);
		el=me._type21kor=document.createElement('div');
		els=me._type21kor__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="TYPE2-\uc695\uc2e41-kor";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='border-color : rgba(0,0,0,0.117647);';
		hs+='border-style : solid;';
		hs+='border-width : 0px 0px 1px 0px;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 10%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 70%;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 15px;';
		hs+='font-weight: 500;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px 0px 0px 25px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._type21kor.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uacf5\uc6a9\uc695\uc2e4\n", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._type21kor.ggUpdateText();
		el.appendChild(els);
		me._type21kor.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._type21kor.onclick=function (e) {
			player.openNext("{node20}","");
			player.setVariableValue('vis_sidebar', false);
		}
		me._type21kor.ggUpdatePosition=function (useTransition) {
		}
		me._type2kor.appendChild(me._type21kor);
		el=me._type22kor=document.createElement('div');
		els=me._type22kor__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="TYPE2-\uc695\uc2e42-kor";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='border-color : rgba(0,0,0,0.117647);';
		hs+='border-style : solid;';
		hs+='border-width : 0px 0px 1px 0px;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 10%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 80%;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 15px;';
		hs+='font-weight: 500;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px 0px 0px 25px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._type22kor.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc548\ubc29\uc695\uc2e4", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._type22kor.ggUpdateText();
		el.appendChild(els);
		me._type22kor.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._type22kor.onclick=function (e) {
			player.openNext("{node12}","");
			player.setVariableValue('vis_sidebar', false);
		}
		me._type22kor.ggUpdatePosition=function (useTransition) {
		}
		me._type2kor.appendChild(me._type22kor);
		el=me._type2kor0=document.createElement('div');
		els=me._type2kor0__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="TYPE2-\ub4dc\ub808\uc2a4\ub8f8-kor";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='border-color : rgba(0,0,0,0.117647);';
		hs+='border-style : solid;';
		hs+='border-width : 0px 0px 0px 0px;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 10%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 90%;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 15px;';
		hs+='font-weight: 500;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px 0px 0px 25px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._type2kor0.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc548\ubc29 \ub4dc\ub808\uc2a4\ub8f8\n", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._type2kor0.ggUpdateText();
		el.appendChild(els);
		me._type2kor0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._type2kor0.onclick=function (e) {
			player.openNext("{node13}","");
			player.setVariableValue('vis_sidebar', false);
		}
		me._type2kor0.ggUpdatePosition=function (useTransition) {
		}
		me._type2kor.appendChild(me._type2kor0);
		me._type2menukor.appendChild(me._type2kor);
		me._type_2kor.appendChild(me._type2menukor);
		me._language.appendChild(me._type_2kor);
		el=me._kor=document.createElement('div');
		els=me._kor__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="KOR";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 10px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 15%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 12px;';
		hs+='font-weight: normal;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._kor.ggUpdateText=function() {
			var params = [];
			var hs = player._("KOR", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._kor.ggUpdateText();
		el.appendChild(els);
		me._kor.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._kor.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((player.getVariableValue('vis_kor') == true))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me._kor.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me._kor.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me._kor.style.transition='color 0s';
				if (me._kor.ggCurrentLogicStateTextColor == 0) {
					me._kor.style.color="rgba(191,142,88,1)";
				}
				else {
					me._kor.style.color="rgba(0,0,0,1)";
				}
			}
		}
		me._kor.logicBlock_textcolor();
		me._kor.onclick=function (e) {
			player.setVariableValue('vis_eng', false);
			player.setVariableValue('vis_kor', true);
		}
		me._kor.ggUpdatePosition=function (useTransition) {
		}
		me._language.appendChild(me._kor);
		el=me._text_3=document.createElement('div');
		els=me._text_3__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 3";
		el.ggDx=-23;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((15% + 0px) / 2) - 23%);';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 15%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 12px;';
		hs+='font-weight: normal;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_3.ggUpdateText=function() {
			var params = [];
			var hs = player._("ENG", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_3.ggUpdateText();
		el.appendChild(els);
		me._text_3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_3.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((player.getVariableValue('vis_eng') == true))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me._text_3.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me._text_3.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me._text_3.style.transition='color 0s';
				if (me._text_3.ggCurrentLogicStateTextColor == 0) {
					me._text_3.style.color="rgba(191,142,88,1)";
				}
				else {
					me._text_3.style.color="rgba(0,0,0,1)";
				}
			}
		}
		me._text_3.logicBlock_textcolor();
		me._text_3.onclick=function (e) {
			player.setVariableValue('vis_eng', true);
			player.setVariableValue('vis_kor', false);
		}
		me._text_3.ggUpdatePosition=function (useTransition) {
		}
		me._language.appendChild(me._text_3);
		me.__19.appendChild(me._language);
		me.__on.appendChild(me.__19);
		me.__15.appendChild(me.__on);
		el=me.__17=document.createElement('div');
		el.ggId="\ud68c\uc0ac\uc815\ubcf4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 0%;';
		hs+='height : 10%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__17.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__17.ggUpdatePosition=function (useTransition) {
		}
		el=me.__18=document.createElement('div');
		els=me.__18__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ud68c\uc0ac\uba85";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='line-height:20px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 9px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='white-space: pre;';
		hs+='padding: 0px 0px 0px 25px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__18.ggUpdateText=function() {
			var params = [];
			var hs = player._("(\uc8fc)\uc548\uac15\uac1c\ubc1c |  251-87-26146\n\ubb38\uc758\uc804\ud654 | 1644-9333\nCOPYEIFHT 2023.UNFICTION LL RESERVED", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__18.ggUpdateText();
		el.appendChild(els);
		me.__18.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__18.ggUpdatePosition=function (useTransition) {
		}
		me.__17.appendChild(me.__18);
		me.__15.appendChild(me.__17);
		el=me.__16=document.createElement('div');
		el.ggId="\ud584\ubc84\uac70\ubc14\ub85c\uace0 \ubc30\uacbd";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #000000;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 49px;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__16.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__16.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_17=document.createElement('div');
		els=me._image_17__img=document.createElement('img');
		els.className='ggskin ggskin_image_17';
		hs=basePath + 'images/image_17.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 17";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 47.77%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_17.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_17.ggUpdatePosition=function (useTransition) {
		}
		me.__16.appendChild(me._image_17);
		el=me._image_18=document.createElement('div');
		els=me._image_18__img=document.createElement('img');
		els.className='ggskin ggskin_image_18';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAA0CAYAAADFeBvrAAAACXBIWXMAAA3XAAAN1wFCKJt4AAADRklEQVRogdWaS2sUQRSFv55ko0GM/g134gN8rtWdv8GVK3+BBEFwKQii4FpBHBNNouJGnHESSdwm6gQXbhQfCxUCLozHRadlzHRX3equno4HatPV99Y91O3bt043kpB0QdJ7SZ8kXd289j+MS5I+Svog6aIkkHRew3i+DYL1jXs5cV9OJK0DOxnGAnAS+JUz1zTmgdM51zcSSXIYLgGH64mpNOaAM0WTLeCaw/gQ0IkdUQW0cZAB7mf52MnJx0F0JI01/Mw89MS4Imli0GDBY7DcIJlHntj6kia0WeWy0ZK06DHsNECm7YnptaQ92f15DizpNyoyMwYyE4M2RY56HkdLkpKayTzxxPB2KxkXoWQzaBd6NZKZNp'+
			'CZzLP1OW4i/XzPzIpydsZKyELqpdKCEoPMY89aqy4yVkIoLdkuLEQg88CzxpqkXT4/1sXGVG/6WUqzl0wIIWv69SSNB/r0vTSHSnNMQshf/ZYCfM15fL0LIVOW0Lj876muwY+lmu0Oja9szlvSr6vihnbWQCZoZ2IQQuUaWl9p/ttoNkGopfQ95MJg9QtqNMuMRHIdWM3oAscc83eBH8A5xz1vgAPAepVAYhEC6AFHStr2gf1UJAPpETwWjgOvStj1SXWLymQgLqHfpBpEN8BmlXRnvsUKIiYhAAEngDuGe58C+4i0MxliE8pgCfJnHQvHLAoZ2sBZ471d0h2NhtiEHgGnAm2iKrQxCRXJsxYskxaUyoj1DLVxk3kGzDrmDxJWHYtRsfWxNpoxGtqR9HK+RnNNw41mrQptFTKWRnNvjl1oQzsSQjMGMr4jQLcOUmXI'+
			'lFI0C0Z0hTaUzLSBzGSAv+gKbcxnpvSxWRElMuuClRXNCKQWZVBoLQtFUTSNo7JC61sg79P5IMyKpnFUVmhdzucNZKqmWdn0K1RoixxGVzRLjFIKbZ6jWhTNEsOi0A6l31Ynpk/nIyATkn7//HIwaGj+dN7AMDe0mYGlmlVSNCsO6y8HCZKmDGSa2pnQ9LuVSNqg+OQaTdGMiBfA0aLJFqmWloc+6Tl/O5GBVKFdLppsAVM51zNF83s9MVWCKFZob2S5eUXpb45fJd2WtGMbPC+WcVPSF0mfJV2XxB/AAHPf+VGAGAAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 18";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 15px;';
		hs+='position : absolute;';
		hs+='right : 10px;';
		hs+='top : calc(50% - ((15px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 15px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_18.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_18.onclick=function (e) {
			player.setVariableValue('vis_sidebar', false);
		}
		me._image_18.ggUpdatePosition=function (useTransition) {
		}
		me.__16.appendChild(me._image_18);
		me.__15.appendChild(me.__16);
		me.divSkin.appendChild(me.__15);
		el=me.__8=document.createElement('div');
		el.ggId="\ubaa8\ubc14\uc77c\ud3c9\uba74\ub3c4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 94%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 50px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__8.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__8.ggUpdatePosition=function (useTransition) {
		}
		el=me.__9=document.createElement('div');
		el.ggId="\ubaa8\ubc14\uc77c\ud3c9\uba74\ub3c4\ubc30\uacbd";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.705882);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__9.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__9.ggUpdatePosition=function (useTransition) {
		}
		el=me.__12=document.createElement('div');
		el.ggId="\ubaa8\ubc14\uc77c\ud3c9\uba74\ub3c4\ucee8\ud14c\uc774\ub108";
		el.ggDx=0;
		el.ggDy=-30;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 330px;';
		hs+='left : calc(50% - ((310px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((330px + 0px) / 2) - 30px);';
		hs+='visibility : inherit;';
		hs+='width : 310px;';
		hs+='pointer-events:none;';
		hs+='overflow:hidden;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__12.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__12.ggUpdatePosition=function (useTransition) {
		}
		el=me.__13=document.createElement('div');
		el.ggId="\ubaa8\ubc14\uc77c\ud3c9\uba74\ub3c4\ucee8\ud14c\uc774\ub108\ubc30\uacbd";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 5px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__13.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__13.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_3=document.createElement('div');
		el.ggId="Rectangle 3";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #000000;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 5px 5px 0px 0px;';
		hs+='cursor : default;';
		hs+='height : 40px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_3.onclick=function (e) {
			me.__8.style.transition='none';
			me.__8.style.visibility='hidden';
			me.__8.ggVisible=false;
			player.setVariableValue('vis_buttonbg', false);
		}
		me._rectangle_3.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_19=document.createElement('div');
		els=me._image_19__img=document.createElement('img');
		els.className='ggskin ggskin_image_19';
		hs=basePath + 'images/image_19.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 19";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 100%;';
		hs+='left : -10px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 40.48%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_19.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_19.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_3.appendChild(me._image_19);
		el=me._image_20=document.createElement('div');
		els=me._image_20__img=document.createElement('img');
		els.className='ggskin ggskin_image_20';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAA0CAYAAADFeBvrAAAACXBIWXMAAA3XAAAN1wFCKJt4AAADRklEQVRogdWaS2sUQRSFv55ko0GM/g134gN8rtWdv8GVK3+BBEFwKQii4FpBHBNNouJGnHESSdwm6gQXbhQfCxUCLozHRadlzHRX3equno4HatPV99Y91O3bt043kpB0QdJ7SZ8kXd289j+MS5I+Svog6aIkkHRew3i+DYL1jXs5cV9OJK0DOxnGAnAS+JUz1zTmgdM51zcSSXIYLgGH64mpNOaAM0WTLeCaw/gQ0IkdUQW0cZAB7mf52MnJx0F0JI01/Mw89MS4Imli0GDBY7DcIJlHntj6kia0WeWy0ZK06DHsNECm7YnptaQ92f15DizpNyoyMwYyE4M2RY56HkdLkpKayTzxxPB2KxkXoWQzaBd6NZKZNp'+
			'CZzLP1OW4i/XzPzIpydsZKyELqpdKCEoPMY89aqy4yVkIoLdkuLEQg88CzxpqkXT4/1sXGVG/6WUqzl0wIIWv69SSNB/r0vTSHSnNMQshf/ZYCfM15fL0LIVOW0Lj876muwY+lmu0Oja9szlvSr6vihnbWQCZoZ2IQQuUaWl9p/ttoNkGopfQ95MJg9QtqNMuMRHIdWM3oAscc83eBH8A5xz1vgAPAepVAYhEC6AFHStr2gf1UJAPpETwWjgOvStj1SXWLymQgLqHfpBpEN8BmlXRnvsUKIiYhAAEngDuGe58C+4i0MxliE8pgCfJnHQvHLAoZ2sBZ471d0h2NhtiEHgGnAm2iKrQxCRXJsxYskxaUyoj1DLVxk3kGzDrmDxJWHYtRsfWxNpoxGtqR9HK+RnNNw41mrQptFTKWRnNvjl1oQzsSQjMGMr4jQLcOUmXI'+
			'lFI0C0Z0hTaUzLSBzGSAv+gKbcxnpvSxWRElMuuClRXNCKQWZVBoLQtFUTSNo7JC61sg79P5IMyKpnFUVmhdzucNZKqmWdn0K1RoixxGVzRLjFIKbZ6jWhTNEsOi0A6l31Ynpk/nIyATkn7//HIwaGj+dN7AMDe0mYGlmlVSNCsO6y8HCZKmDGSa2pnQ9LuVSNqg+OQaTdGMiBfA0aLJFqmWloc+6Tl/O5GBVKFdLppsAVM51zNF83s9MVWCKFZob2S5eUXpb45fJd2WtGMbPC+WcVPSF0mfJV2XxB/AAHPf+VGAGAAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 20";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 27%;';
		hs+='position : absolute;';
		hs+='right : 10px;';
		hs+='top : calc(50% - ((27% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 3%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_20.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_20.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_3.appendChild(me._image_20);
		me.__13.appendChild(me._rectangle_3);
		el=me.__14=document.createElement('div');
		el.ggId="\ubaa8\ubc14\uc77c\ud3c9\uba74\ub3c4\uc774\ubbf8\uc9c0";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 286px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 40px;';
		hs+='visibility : inherit;';
		hs+='width : 224px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__14.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__14.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_4=document.createElement('div');
		el.ggId="Rectangle 4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border-color : #000000;';
		hs+='border-style : solid;';
		hs+='border-width : 0px 0px 1px 0px;';
		hs+='cursor : default;';
		hs+='height : 166px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_4.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_21=document.createElement('div');
		els=me._image_21__img=document.createElement('img');
		els.className='ggskin ggskin_image_21';
		hs=basePath + 'images/image_21.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 21";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 93.9759%;';
		hs+='left : calc(50% - ((70% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((93.9759% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 70%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_21.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_21.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_4=document.createElement('div');
		els=me._text_4__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 15px;';
		hs+='left : 22px;';
		hs+='position : absolute;';
		hs+='top : 144px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 10px;';
		hs+='font-weight: bold;';
		hs+='text-align: left;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_4.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uae30\ubcf8\ud615", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_4.ggUpdateText();
		el.appendChild(els);
		me._text_4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_4.ggUpdatePosition=function (useTransition) {
		}
		me._image_21.appendChild(me._text_4);
		me._rectangle_4.appendChild(me._image_21);
		me.__14.appendChild(me._rectangle_4);
		el=me._rectangle_5=document.createElement('div');
		el.ggId="Rectangle 5";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border-color : #000000;';
		hs+='border-style : solid;';
		hs+='border-width : 0px 0px 0px 1px;';
		hs+='bottom : -2px;';
		hs+='cursor : default;';
		hs+='height : 119px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 49.5%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_5.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_5.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_22=document.createElement('div');
		els=me._image_22__img=document.createElement('img');
		els.className='ggskin ggskin_image_22';
		hs=basePath + 'images/image_22.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 22";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 76.087%;';
		hs+='left : calc(50% - ((70% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((76.087% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 70%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_22.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_22.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_5=document.createElement('div');
		els=me._text_5__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 5";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 20px;';
		hs+='left : 12px;';
		hs+='position : absolute;';
		hs+='top : 82px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 10px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_5.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc635\uc1582", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_5.ggUpdateText();
		el.appendChild(els);
		me._text_5.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_5.ggUpdatePosition=function (useTransition) {
		}
		me._image_22.appendChild(me._text_5);
		me._rectangle_5.appendChild(me._image_22);
		me.__14.appendChild(me._rectangle_5);
		el=me._rectangle_6=document.createElement('div');
		el.ggId="Rectangle 6";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='bottom : -2px;';
		hs+='cursor : default;';
		hs+='height : 119px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 49.5%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_6.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_6.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_23=document.createElement('div');
		els=me._image_23__img=document.createElement('img');
		els.className='ggskin ggskin_image_23';
		hs=basePath + 'images/image_23.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 23";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 76.087%;';
		hs+='left : calc(50% - ((70% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((76.087% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 70%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_23.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_23.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_6=document.createElement('div');
		els=me._text_6__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 6";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 20px;';
		hs+='left : 12px;';
		hs+='position : absolute;';
		hs+='top : 82px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 10px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_6.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc635\uc1581", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_6.ggUpdateText();
		el.appendChild(els);
		me._text_6.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_6.ggUpdatePosition=function (useTransition) {
		}
		me._image_23.appendChild(me._text_6);
		me._rectangle_6.appendChild(me._image_23);
		me.__14.appendChild(me._rectangle_6);
		me.__13.appendChild(me.__14);
		el=me._rectangle_7=document.createElement('div');
		el.ggId="Rectangle 7";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border-color : #000000;';
		hs+='border-style : solid;';
		hs+='border-width : 0px 1px 0px 0px;';
		hs+='cursor : default;';
		hs+='height : 87.4%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 40px;';
		hs+='visibility : inherit;';
		hs+='width : 86px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_7.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_7.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_7=document.createElement('div');
		els=me._text_7__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 7";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 20px;';
		hs+='left : 15px;';
		hs+='position : absolute;';
		hs+='top : 17px;';
		hs+='visibility : inherit;';
		hs+='width : 30%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 9px;';
		hs+='font-weight: bold;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_7.ggUpdateText=function() {
			var params = [];
			var hs = player._("KOR", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_7.ggUpdateText();
		el.appendChild(els);
		me._text_7.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_7.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_8=document.createElement('div');
		els=me._text_8__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 8";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 20px;';
		hs+='left : 100%;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 9px;';
		hs+='font-weight: lighter;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_8.ggUpdateText=function() {
			var params = [];
			var hs = player._("ENG", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_8.ggUpdateText();
		el.appendChild(els);
		me._text_8.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_8.ggUpdatePosition=function (useTransition) {
		}
		me._text_7.appendChild(me._text_8);
		me._rectangle_7.appendChild(me._text_7);
		el=me._type1in=document.createElement('div');
		els=me._type1in__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="TYPE1-in-\ud3c9\uba74\ub3c4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 20px;';
		hs+='left : 15px;';
		hs+='position : absolute;';
		hs+='top : 50px;';
		hs+='visibility : inherit;';
		hs+='width : 80%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 10px;';
		hs+='font-weight: bold;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._type1in.ggUpdateText=function() {
			var params = [];
			var hs = player._("74A TYPE", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._type1in.ggUpdateText();
		el.appendChild(els);
		me._type1in.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._type1in.ggUpdatePosition=function (useTransition) {
		}
		el=me._type2in=document.createElement('div');
		els=me._type2in__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="TYPE2-in-\ud3c9\uba74\ub3c4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 20px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 22px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 10px;';
		hs+='font-weight: bold;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._type2in.ggUpdateText=function() {
			var params = [];
			var hs = player._("74B TYPE", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._type2in.ggUpdateText();
		el.appendChild(els);
		me._type2in.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._type2in.ggUpdatePosition=function (useTransition) {
		}
		el=me._type3in=document.createElement('div');
		els=me._type3in__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="TYPE3-in-\ud3c9\uba74\ub3c4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 20px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 22px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 10px;';
		hs+='font-weight: bold;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._type3in.ggUpdateText=function() {
			var params = [];
			var hs = player._("84A TYPE", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._type3in.ggUpdateText();
		el.appendChild(els);
		me._type3in.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._type3in.ggUpdatePosition=function (useTransition) {
		}
		me._type2in.appendChild(me._type3in);
		me._type1in.appendChild(me._type2in);
		me._rectangle_7.appendChild(me._type1in);
		el=me.__in=document.createElement('div');
		els=me.__in__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ud68c\uc0ac\uba85 in-\ud3c9\uba74\ub3c4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 10px;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 20px;';
		hs+='left : 15px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 80%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 8px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__in.ggUpdateText=function() {
			var params = [];
			var hs = player._("(\uc8fc)\uc548\uac15\uac1c\ubc1c", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__in.ggUpdateText();
		el.appendChild(els);
		me.__in.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__in.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_7.appendChild(me.__in);
		me.__13.appendChild(me._rectangle_7);
		me.__12.appendChild(me.__13);
		me.__9.appendChild(me.__12);
		me.__8.appendChild(me.__9);
		me.divSkin.appendChild(me.__8);
		el=me.__=document.createElement('div');
		el.ggId="\ubaa8\ubc14\uc77c \uce74\ud14c\uace0\ub9ac";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='z-index: 999;';
		hs+='bottom : -30%;';
		hs+='height : 22.5%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0%);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		hs+='min-width:360px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('vis_mobilecatagory') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__.style.transition='left 500ms ease 0ms, bottom 500ms ease 0ms, width 0s, height 0s';
				if (me.__.ggCurrentLogicStatePosition == 0) {
					me.__.style.left = 'calc(50% - (100% / 2))';
					me.__.style.bottom='0%';
				}
				else {
					me.__.style.left='calc(50% - ((100% + 0px) / 2) + 0%)';
					me.__.style.bottom='-30%';
				}
			}
		}
		me.__.logicBlock_position();
		me.__.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 460))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me.__.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__.ggCurrentLogicStateSize = newLogicStateSize;
				me.__.style.transition='left 500ms ease 0ms, bottom 500ms ease 0ms, width 0s, height 0s';
				if (me.__.ggCurrentLogicStateSize == 0) {
					me.__.style.width='100%';
					me.__.style.height='22.5%';
					me.__.style.left = 'calc(50% - (100% / 2))';
					skin.updateSize(me.__);
				}
				else {
					me.__.style.width='100%';
					me.__.style.height='22.5%';
					me.__.style.left = 'calc(50% - (100% / 2))';
					skin.updateSize(me.__);
				}
			}
		}
		me.__.logicBlock_size();
		me.__.ggUpdatePosition=function (useTransition) {
		}
		el=me.__1=document.createElement('div');
		el.ggId="\ubaa8\ubc14\uc77c\uce74\ud14c\uace0\ub9ac \ubc30\uacbd";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #212121;';
		hs+='border : 1px solid #000000;';
		hs+='border-radius : 15px 15px 0px 0px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__1.ggUpdatePosition=function (useTransition) {
		}
		el=me.__2=document.createElement('div');
		el.ggId="\ubaa8\ubc14\uc77c \uce74\ud14c\uace0\ub9ac \ud30c\ud2b8";
		el.ggDx=0;
		el.ggDy=50;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 50%);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__2.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getViewerSize().width <= 670))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__2.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__2.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__2.style.transition='left 0s, top 0s';
				if (me.__2.ggCurrentLogicStatePosition == 0) {
					me.__2.style.left = 'calc(50% - (100% / 2))';
					me.__2.style.top = 'calc(50% - (100% / 2) + (0px / 2) + 63%)';
				}
				else {
					me.__2.style.left='calc(50% - ((100% + 0px) / 2) + 0px)';
					me.__2.style.top='calc(50% - ((100% + 0px) / 2) + 50%)';
				}
			}
		}
		me.__2.logicBlock_position();
		me.__2.ggUpdatePosition=function (useTransition) {
		}
		el=me.__11=document.createElement('div');
		els=me.__11__content=document.createElement('div');
		els.className='ggskin ggskin_subelement ggskin_scrollarea';
		el.ggContent=els;
		el.appendChild(els);
		el.ggHorScrollVisible = false;
		el.ggVertScrollVisible = false;
		el.ggContentLeftOffset = 0;
		el.ggContentTopOffset = 0;
		el.ggContentWidth = 0;
		el.ggContentHeight = 0;
		el.ggDragInertiaX = 0;
		el.ggDragInertiaY = 0;
		el.ggVPercentVisible = 1.0;
		el.ggHPercentVisible = 1.0;
		el.ggIsDragging = false;
		hs ='';
		hs+='height : 127px;';
		hs+='left : 0px;';
		hs+='overflow-x : visible;';
		hs+='overflow-y : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='width : 108px;';
		hs+="";
		els.setAttribute('style',hs);
		me.__11.ggScrollByX = function(diffX) {
			if(!me.__11.ggHorScrollVisible || diffX == 0 || me.__11.ggHPercentVisible >= 1.0) return;
			me.__11.ggScrollPosX = (me.__11__horScrollFg.offsetLeft + diffX);
			me.__11.ggScrollPosX = Math.max(me.__11.ggScrollPosX, 0);
			me.__11.ggScrollPosX = Math.min(me.__11.ggScrollPosX, me.__11__horScrollBg.offsetWidth - me.__11__horScrollFg.offsetWidth);
			me.__11__horScrollFg.style.left = me.__11.ggScrollPosX + 'px';
			let percentScrolled = me.__11.ggScrollPosX / (me.__11__horScrollBg.offsetWidth - me.__11__horScrollFg.offsetWidth);
			me.__11__content.style.left = -(Math.round((me.__11.ggContentWidth * (1.0 - me.__11.ggHPercentVisible)) * percentScrolled)) + me.__11.ggContentLeftOffset + 'px';
			me.__11.ggScrollPosXPercent = (me.__11__horScrollFg.offsetLeft / me.__11__horScrollBg.offsetWidth);
		}
		me.__11.ggScrollByXSmooth = function(diffX) {
			if(!me.__11.ggHorScrollVisible || diffX == 0 || me.__11.ggHPercentVisible >= 1.0) return;
			var scrollPerInterval = diffX / 25;
			var scrollCurrX = 0;
			var id = setInterval(function() {
				scrollCurrX += scrollPerInterval;
				me.__11.ggScrollPosX += scrollPerInterval;
				if (diffX > 0 && (scrollCurrX >= diffX || me.__11.ggScrollPosX >= me.__11__horScrollBg.offsetWidth - me.__11__horScrollFg.offsetWidth)) {
					me.__11.ggScrollPosX = Math.min(me.__11.ggScrollPosX, me.__11__horScrollBg.offsetWidth - me.__11__horScrollFg.offsetWidth);
					clearInterval(id);
				}
				if (diffX < 0 && (scrollCurrX <= diffX || me.__11.ggScrollPosX <= 0)) {
					me.__11.ggScrollPosX = Math.max(me.__11.ggScrollPosX, 0);
					clearInterval(id);
				}
			me.__11__horScrollFg.style.left = me.__11.ggScrollPosX + 'px';
			let percentScrolled = me.__11.ggScrollPosX / (me.__11__horScrollBg.offsetWidth - me.__11__horScrollFg.offsetWidth);
			me.__11__content.style.left = -(Math.round((me.__11.ggContentWidth * (1.0 - me.__11.ggHPercentVisible)) * percentScrolled)) + me.__11.ggContentLeftOffset + 'px';
			me.__11.ggScrollPosXPercent = (me.__11__horScrollFg.offsetLeft / me.__11__horScrollBg.offsetWidth);
			}, 10);
		}
		me.__11.ggScrollByY = function(diffY) {
			if(!me.__11.ggVertScrollVisible || diffY == 0 || me.__11.ggVPercentVisible >= 1.0) return;
			me.__11.ggScrollPosY = (me.__11__vertScrollFg.offsetTop + diffY);
			me.__11.ggScrollPosY = Math.max(me.__11.ggScrollPosY, 0);
			me.__11.ggScrollPosY = Math.min(me.__11.ggScrollPosY, me.__11__vertScrollBg.offsetHeight - me.__11__vertScrollFg.offsetHeight);
			me.__11__vertScrollFg.style.top = me.__11.ggScrollPosY + 'px';
			let percentScrolled = me.__11.ggScrollPosY / (me.__11__vertScrollBg.offsetHeight - me.__11__vertScrollFg.offsetHeight);
			me.__11__content.style.top = -(Math.round((me.__11.ggContentHeight * (1.0 - me.__11.ggVPercentVisible)) * percentScrolled)) + me.__11.ggContentTopOffset + 'px';
			me.__11.ggScrollPosYPercent = (me.__11__vertScrollFg.offsetTop / me.__11__vertScrollBg.offsetHeight);
		}
		me.__11.ggScrollByYSmooth = function(diffY) {
			if(!me.__11.ggVertScrollVisible || diffY == 0 || me.__11.ggVPercentVisible >= 1.0) return;
			var scrollPerInterval = diffY / 25;
			var scrollCurrY = 0;
			var id = setInterval(function() {
				scrollCurrY += scrollPerInterval;
				me.__11.ggScrollPosY += scrollPerInterval;
				if (diffY > 0 && (scrollCurrY >= diffY || me.__11.ggScrollPosY >= me.__11__vertScrollBg.offsetHeight - me.__11__vertScrollFg.offsetHeight)) {
					me.__11.ggScrollPosY = Math.min(me.__11.ggScrollPosY, me.__11__vertScrollBg.offsetHeight - me.__11__vertScrollFg.offsetHeight);
					clearInterval(id);
				}
				if (diffY < 0 && (scrollCurrY <= diffY || me.__11.ggScrollPosY <= 0)) {
					me.__11.ggScrollPosY = Math.max(me.__11.ggScrollPosY, 0);
					clearInterval(id);
				}
			me.__11__vertScrollFg.style.top = me.__11.ggScrollPosY + 'px';
			let percentScrolled = me.__11.ggScrollPosY / (me.__11__vertScrollBg.offsetHeight - me.__11__vertScrollFg.offsetHeight);
			me.__11__content.style.top = -(Math.round((me.__11.ggContentHeight * (1.0 - me.__11.ggVPercentVisible)) * percentScrolled)) + me.__11.ggContentTopOffset + 'px';
			me.__11.ggScrollPosYPercent = (me.__11__vertScrollFg.offsetTop / me.__11__vertScrollBg.offsetHeight);
			}, 10);
		}
		me.__11.ggScrollIntoView = function(posX, posY, width, height) {
			if (me.__11.ggHorScrollVisible) {
				if (posX < 0) {
					var diffX = Math.floor(posX * me.__11.ggHPercentVisible);
					me.__11.ggScrollByXSmooth(diffX);
				} else if (posX + width > me.__11.clientWidth - (me.__11.ggVertScrollVisible ? 0 : 0)) {
					var diffX = Math.ceil(((posX + width) - (me.__11.clientWidth - (me.__11.ggVertScrollVisible ? 0 : 0))) * me.__11.ggHPercentVisible);
					me.__11.ggScrollByXSmooth(diffX);
				}
			}
			if (me.__11.ggVertScrollVisible) {
				if (posY < 0) {
					var diffY = Math.floor(posY * me.__11.ggVPercentVisible);
					me.__11.ggScrollByYSmooth(diffY);
				} else if (posY + height > me.__11.clientHeight - (me.__11.ggHorScrollVisible ? 0 : 0)) {
					var diffY = Math.ceil(((posY + height) - (me.__11.clientHeight - (me.__11.ggHorScrollVisible ? 0 : 0))) * me.__11.ggVPercentVisible);
					me.__11.ggScrollByYSmooth(diffY);
				}
			}
		}
		me.__11__content.mousetouchend = e => {
			let inertiaInterval = setInterval(function() {
				me.__11.ggDragInertiaX *= 0.65;
				me.__11.ggDragInertiaY *= 0.65;
				me.__11.ggScrollByX(me.__11.ggDragInertiaX);
				me.__11.ggScrollByY(me.__11.ggDragInertiaY);
				if (Math.abs(me.__11.ggDragInertiaX) < 1.0 && Math.abs(me.__11.ggDragInertiaY) < 1.0) {
					clearInterval(inertiaInterval);
				}
				}, 50);
			me.__11__content.onmouseup = null;
			me.__11__content.onmousemove = null;
			me.__11__content.ontouchend = null;
			me.__11__content.ontouchmove = null;
			me.__11__content.onpointerup = null;
			me.__11__content.onpointermove = null;
			setTimeout(function() { me.__11.ggIsDragging = false; }, 100);
		}
		me.__11__content.mousetouchmove = e => {
			e = e || window.event;
			e.preventDefault();
			var t = e.touches;
			var eventX = t ? t[0].clientX : e.clientX;
			var eventY = t ? t[0].clientY : e.clientY;
			if (Math.abs(eventX - me.__11.ggDragStartX) > 10 || Math.abs(eventY - me.__11.ggDragStartY) > 10) me.__11.ggIsDragging = true;
			var diffX = (eventX - me.__11.ggDragLastX) * me.__11.ggHPercentVisible;
			var diffY = (eventY - me.__11.ggDragLastY) * me.__11.ggVPercentVisible;
			me.__11.ggDragInertiaX = -diffX;
			me.__11.ggDragInertiaY = -diffY;
			me.__11.ggDragLastX = eventX;
			me.__11.ggDragLastY = eventY;
			me.__11.ggScrollByX(-diffX);
			me.__11.ggScrollByY(-diffY);
		}
		me.__11__content.mousetouchstart = e => {
			e = e || window.event;
			var t = e.touches;
			me.__11.ggDragLastX = me.__11.ggDragStartX = t ? t[0].clientX : e.clientX;
			me.__11.ggDragLastY = me.__11.ggDragStartY = t ? t[0].clientY : e.clientY;
			me.__11__content.onmouseup = me.__11__content.mousetouchend;
			me.__11__content.ontouchend = me.__11__content.mousetouchend;
			me.__11__content.onmousemove = me.__11__content.mousetouchmove;
			me.__11__content.ontouchmove = me.__11__content.mousetouchmove;
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				me.__11__content.onpointerup = me.__11__content.ontouchend;
				me.__11__content.onpointermove = me.__11__content.ontouchmove;
			}
		}
		els.onmousedown = me.__11__content.mousetouchstart;
		els.ontouchstart = me.__11__content.mousetouchstart;
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			els.onpointerdown = me.__11__content.mousetouchstart;
		}
		elHorScrollBg = me.__11__horScrollBg = document.createElement('div');
		el.appendChild(elHorScrollBg);
		elHorScrollBg.setAttribute('style', 'position: absolute; left: 0px; bottom: 0px; visibility: hidden; width: 640px; height: 0px; background-color: rgba(128,128,128,1); pointer-events: auto;');
		elHorScrollBg.className='ggskin ggskin_scrollarea_hscrollbg';
		elHorScrollFg = me.__11__horScrollFg = document.createElement('div');
		elHorScrollBg.appendChild(elHorScrollFg);
		elHorScrollFg.className='ggskin ggskin_scrollarea_hscrollfg';
		elHorScrollFg.setAttribute('style', 'position: absolute; left: 0px; top: 0px; visibility: hidden; width: 640px; height: 0px; background-color: rgba(192,192,192,1); pointer-events: auto;');
		me.__11.ggScrollPosX = 0;
		me.__11.ggScrollPosXPercent = 0.0;
		elHorScrollFg.onmousedown = function(e) {
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) return;
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			me.__11.ggDragLastX = e.clientX;
			document.onmouseup = function() {
				let inertiaInterval = setInterval(function() {
					me.__11.ggDragInertiaX *= 0.65;
					me.__11.ggScrollByX(me.__11.ggDragInertiaX);
					if (Math.abs(me.__11.ggDragInertiaX) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 50);
				document.onmouseup = null;
				document.onmousemove = null;
			}
			document.onmousemove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var diffX = e.clientX - me.__11.ggDragLastX;
				me.__11.ggDragInertiaX = diffX;
				me.__11.ggDragLastX = e.clientX;
				me.__11.ggScrollByX(diffX);
			}
		}
		elHorScrollFg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			me.__11.ggDragLastX = t ? t[0].clientX : e.clientX;
			document.ontouchend = function() {
				let inertiaInterval = setInterval(function() {
					me.__11.ggDragInertiaX *= 0.65;
					me.__11.ggScrollByX(me.__11.ggDragInertiaX);
					if (Math.abs(me.__11.ggDragInertiaX) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 50);
				document.ontouchend = null;
				document.ontouchmove = null;
				document.onpointerup = null;
				document.onpointermove = null;
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointerup = document.ontouchend;
			}
			document.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var t = e.touches;
				var diffX = (t ? t[0].clientX : e.clientX) - me.__11.ggDragLastX;
				me.__11.ggDragInertiaX = diffX;
				me.__11.ggDragLastX = t ? t[0].clientX : e.clientX;
				me.__11.ggScrollByX(diffX);
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointermove = document.ontouchmove;
			}
		}
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			elHorScrollFg.onpointerdown = elHorScrollFg.ontouchstart;
		}
		elHorScrollBg.onmousedown = function(e) {
			e = e || window.event;
			e.preventDefault();
			var diffX = me.__11.ggScrollWidth;
			if (e.offsetX < me.__11.ggScrollPosX) {
				diffX = diffX * -1;
			}
			me.__11.ggScrollByXSmooth(diffX);
		}
		elHorScrollBg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			var rect = me.__11__horScrollBg.getBoundingClientRect();
			var diffX = me.__11.ggScrollWidth;
			if ((t[0].clientX - rect.left) < me.__11.ggScrollPosX) {
				diffX = diffX * -1;
			}
			me.__11.ggScrollByXSmooth(diffX);
		}
		el.addEventListener('wheel', function(e) {
			e.preventDefault();
			var wheelDelta = Math.sign(e.deltaX);
			me.__11.ggScrollByXSmooth(30 * me.__11.ggHPercentVisible * wheelDelta);
		});
		elCornerBg = me.__11__cornerBg = document.createElement('div');
		el.appendChild(elCornerBg);
		elCornerBg.setAttribute('style', 'position: absolute; right: 0px; bottom: 0px; visibility: hidden; width: 0px; height: 0px; background-color: rgba(255,255,255,1);');
		elCornerBg.className='ggskin ggskin_scrollarea_scrollcorner';
		el.ggId="\ubaa8\ubc14\uc77c \uc2a4\ud06c\ub864 1\uce35";
		el.ggDx=6;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_scrollarea ";
		el.ggType='scrollarea';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 58px;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 6px);';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__11.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__11.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getViewerSize().height <= 670))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__11.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__11.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__11.style.transition='left 0s, bottom 0s, width 0s, height 0s';
				if (me.__11.ggCurrentLogicStatePosition == 0) {
					me.__11.style.left = 'calc(50% - (100% / 2))';
					me.__11.style.bottom='30px';
				}
				else {
					me.__11.style.left='calc(50% - ((100% + 0px) / 2) + 6px)';
					me.__11.style.bottom='58px';
				}
			}
		}
		me.__11.logicBlock_position();
		me.__11.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 460))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me.__11.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__11.ggCurrentLogicStateSize = newLogicStateSize;
				me.__11.style.transition='left 0s, bottom 0s, width 0s, height 0s';
				if (me.__11.ggCurrentLogicStateSize == 0) {
					me.__11.style.width='100%';
					me.__11.style.height='102%';
					me.__11.style.left = 'calc(50% - (100% / 2) + (0px / 2) + 6px)';
					skin.updateSize(me.__11);
				}
				else {
					me.__11.style.width='100%';
					me.__11.style.height='100%';
					me.__11.style.left = 'calc(50% - (100% / 2) + (0px / 2) + 6px)';
					skin.updateSize(me.__11);
				}
			}
		}
		me.__11.logicBlock_size();
		me.__11.ggUpdatePosition=function (useTransition) {
			{
				var horScrollWasVisible = this.ggHorScrollVisible;
				var vertScrollWasVisible = this.ggVertScrollVisible;
				this.ggContent.style.left = '0px';
				this.ggContent.style.top = '0px';
				this.ggContentLeftOffset = 0;
				this.ggContentTopOffset = 0;
				var offsetWidthWithScale = this.getBoundingClientRect().width;
				var offsetHeightWithScale = this.getBoundingClientRect().height;
				var domRectContent = this.ggContent.getBoundingClientRect();
				var minX = 0;
				var minY = 0;
				var maxX = 0;
				var maxY = 0;
				var stack=[];
				stack.push(this.ggContent);
				while(stack.length>0) {
					var e=stack.pop();
					if (e!=this.ggContent && e.getBoundingClientRect && e.style['display']!='none' && (e.offsetWidth != 0 || e.offsetHeight != 0)) {
						var domRectChild = e.getBoundingClientRect();
						var diffX = domRectChild.left - domRectContent.left;
						minX = Math.min(minX, diffX);
						maxX = Math.max(maxX, diffX + domRectChild.width);
						var diffY = domRectChild.top - domRectContent.top;
						minY = Math.min(minY, diffY);
						maxY = Math.max(maxY, diffY + domRectChild.height);
					}
					if (e.hasChildNodes() && e.style['display']!='none' && e.style['overflow']!='hidden') {
						for(var i=0;i<e.childNodes.length;i++) {
							stack.push(e.childNodes[i]);
						}
					}
				}
				if (minX < 0) this.ggContentLeftOffset = -minX;
				if (minY < 0) this.ggContentTopOffset = -minY;
				this.ggContent.style.left = this.ggContentLeftOffset + 'px';
				this.ggContent.style.top = this.ggContentTopOffset + 'px';
				var contentWidth = maxX - minX;
				this.ggContent.style.width = contentWidth + 'px';
				var contentHeight = maxY - minY;
				this.ggContent.style.height = contentHeight + 'px';
			var scaleX = this.getBoundingClientRect().width / this.offsetWidth;
				this.ggContentWidth = contentWidth / scaleX;
			var scaleY = this.getBoundingClientRect().height / this.offsetHeight;
				this.ggContentHeight = contentHeight / scaleY;
				this.ggContent.style.left = -(Math.round(me.__11.ggScrollPosX / me.__11.ggHPercentVisible)) + this.ggContentLeftOffset + 'px';
				this.ggContent.style.marginLeft = '0px';
				this.ggContent.style.top = this.ggContentTopOffset + 'px';
				this.ggContent.style.marginTop = '0px';
				me.__11__horScrollBg.style.visibility = 'inherit';
				me.__11__horScrollFg.style.visibility = 'inherit';
				me.__11.ggHorScrollVisible = true;
				if(me.__11.ggHorScrollVisible) {
					me.__11.ggAvailableHeight = me.__11.clientHeight - 0;
					if (me.__11.ggVertScrollVisible) {
						me.__11.ggAvailableWidth = me.__11.clientWidth - 0;
						me.__11.ggAvailableWidthWithScale = me.__11.getBoundingClientRect().width - me.__11__horScrollBg.getBoundingClientRect().height;
					} else {
						me.__11.ggAvailableWidth = me.__11.clientWidth;
						me.__11.ggAvailableWidthWithScale = me.__11.getBoundingClientRect().width;
					}
					me.__11__horScrollBg.style.width = me.__11.ggAvailableWidth + 'px';
					me.__11.ggHPercentVisible = contentWidth != 0 ? me.__11.ggAvailableWidthWithScale / contentWidth : 0.0;
					if (me.__11.ggHPercentVisible > 1.0) me.__11.ggHPercentVisible = 1.0;
					me.__11.ggScrollWidth = Math.round(me.__11__horScrollBg.offsetWidth * me.__11.ggHPercentVisible);
					me.__11__horScrollFg.style.width = me.__11.ggScrollWidth + 'px';
					me.__11.ggScrollPosX = me.__11.ggScrollPosXPercent * me.__11.ggAvailableWidth;
					me.__11.ggScrollPosX = Math.min(me.__11.ggScrollPosX, me.__11__horScrollBg.offsetWidth - me.__11__horScrollFg.offsetWidth);
					me.__11__horScrollFg.style.left = me.__11.ggScrollPosX + 'px';
					if (me.__11.ggHPercentVisible < 1.0) {
						let percentScrolled = me.__11.ggScrollPosX / (me.__11__horScrollBg.offsetWidth - me.__11__horScrollFg.offsetWidth);
						me.__11__content.style.left = -(Math.round((me.__11.ggContentWidth * (1.0 - me.__11.ggHPercentVisible)) * percentScrolled)) + this.ggContentLeftOffset + 'px';
					}
				} else {
					me.__11.ggAvailableHeight = me.__11.clientHeight;
					me.__11.ggScrollPosX = 0;
					me.__11.ggScrollPosXPercent = 0.0;
					me.__11__content.style.left = this.ggContentLeftOffset + 'px';
				}
				if(horScrollWasVisible != me.__11.ggHorScrollVisible || vertScrollWasVisible != me.__11.ggVertScrollVisible) {
					skin.updateSize(me.__11);
					me.__11.ggUpdatePosition();
				}
			}
		}
		el=me.__4=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me.__4;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="\ubaa8\ubc14\uc77c \uce74\ud14c\uace0\ub9ac \ucee8\ud14c\uc774\ub108";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__4.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 670))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me.__4.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__4.ggCurrentLogicStateSize = newLogicStateSize;
				me.__4.style.transition='width 0s, height 0s';
				if (me.__4.ggCurrentLogicStateSize == 0) {
					me.__4.style.width='100px';
					me.__4.style.height='100%';
					skin.updateSize(me.__4);
				}
				else {
					me.__4.style.width='100px';
					me.__4.style.height='100%';
					skin.updateSize(me.__4);
				}
			}
		}
		me.__4.logicBlock_size();
		me.__4.ggUpdatePosition=function (useTransition) {
		}
		el=me.__5=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me.__5;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggNumRepeat = 1;
		el.ggNumRows = 0;
		el.ggNumCols = 0;
		el.ggCloneOffset = 0;
		el.ggCloneOffsetChanged = false;
		el.ggWidth = 100;
		el.ggHeight = 108;
		el.ggUpdating = false;
		el.ggFilter = [];
		el.ggFilterHsSkinId = '';
		el.ggInstances = [];
		el.ggNumFilterPassed = 0;
		el.ggAutoPosition = function(init) {
			var currXPos = 0;
			var numElements = me.__5.ggInstances.length;
			var currElement = 0;
			for (var i=0; i<me.__5.ggNumCols; i++) {
				var colMaxWidth = 0;
				for (var j=0; j<me.__5.ggNumRows; j++) {
					if (numElements>currElement) {
						me.__5.childNodes[currElement].style['left'] = currXPos + 'px';
						me.__5.childNodes[currElement].style['width'] ='0px';
						colMaxWidth = Math.max(colMaxWidth, me.__5.childNodes[currElement].scrollWidth);
						me.__5.childNodes[currElement].style['width'] = colMaxWidth + 'px';
					}
					currElement++;
				}
				currXPos += colMaxWidth;
			}
		}
		el.getFilteredNodes = function(tourNodes, filter) {
			var filteredNodes = [];
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var passed = true;
				var nodeData = player.getNodeUserdata(nodeId);
				if (filter.length > 0) {
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) == -1) passed = false;
					}
				}
				if (passed) {
					filteredNodes.push(nodeId);
				}
			}
			return filteredNodes;
		}
		el.ggUpdate = function(filter) {
			if(me.__5.ggUpdating == true) return;
			me.__5.ggUpdating = true;
			var el=me.__5;
			var curNumRows = 0;
			curNumRows = me.__5.ggNumRepeat;
			if (curNumRows < 1) curNumRows = 1;
			if (typeof filter=='object') {
				el.ggFilter = filter;
			} else {
				filter = el.ggFilter;
			};
			if (me.ggTag) filter.push(me.ggTag);
			filter=filter.sort();
			if ((el.ggNumRows == curNumRows) && (el.ggInstances.length > 0) && (filter.length === el.ggCurrentFilter.length) && (filter.every(function(value, index) { return value === el.ggCurrentFilter[index] }) )) {
				me.__5.ggUpdating = false;
				return;
			} else {
				el.ggNumCols = 1;
				el.ggNumRows = curNumRows;
			var centerOffsetHor = 0;
			var centerOffsetVert = 0;
				me.__5.ggCloneOffsetChanged = false;
			}
			el.ggCurrentFilter = filter;
			el.ggInstances = [];
			if (el.hasChildNodes() == true) {
				while (el.firstChild) {
					el.removeChild(el.firstChild);
				}
			}
			var tourNodes = player.getNodeIds();
			var row = 0;
			var column = 0;
			var currentIndex = 0;
			var keepCloning = true;
			tourNodes = me.__5.getFilteredNodes(tourNodes, filter);
			me.__5.ggNumFilterPassed = tourNodes.length;
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var nodeData = player.getNodeUserdata(nodeId);
				if (!keepCloning || i < me.__5.ggCloneOffset) continue;
				var parameter={};
				parameter.top = centerOffsetVert + (row * me.__5.ggHeight) + 'px';
				parameter.left = centerOffsetHor + (column * me.__5.ggWidth) + 'px';
				parameter.width='100%';
				parameter.height='100%';
				parameter.index=currentIndex;
				parameter.title=nodeData['title'];
				var inst = new SkinCloner__5_Class(nodeId, me, el, parameter);
				currentIndex++;
				inst.__div.style['width'] = '0px';
				el.ggInstances.push(inst);
				el.appendChild(inst.__div);
				inst.__div.ggObj=inst;
				skin.updateSize(inst.__div);
				row++;
				if (row >= el.ggNumRows) {
					row = 0;
					column++;
					el.ggNumCols++;
				}
			}
			me.__5.ggNodeCount = me.__5.ggNumFilterPassed;
			me.__5.ggAutoPosition(true);
			me.__5.ggUpdating = false;
			player.triggerEvent('clonerchanged');
			if (me.__5.parentNode && me.__5.parentNode.classList.contains('ggskin_subelement') && me.__5.parentNode.parentNode.classList.contains('ggskin_scrollarea')) me.__5.parentNode.parentNode.ggUpdatePosition();
		}
		el.ggFilter = [];
		el.ggFilter[0] = "1층";
		el.ggId="\ubaa8\ubc14\uc77c \ud074\ub85c\ub098";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_cloner ";
		el.ggType='cloner';
		hs ='';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__5.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__5.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 460))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me.__5.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__5.ggCurrentLogicStateSize = newLogicStateSize;
				me.__5.style.transition='width 0s, height 0s';
				if (me.__5.ggCurrentLogicStateSize == 0) {
					me.__5.ggWidth=100;
					me.__5.ggHeight=100;
					me.__5.ggUpdate();
					me.__5.style.left = 'calc(50% - (100% / 2))';
					me.__5.style.top = 'calc(50% - (100% / 2))';
					skin.updateSize(me.__5);
				}
				else {
					me.__5.ggWidth=100;
					me.__5.ggHeight=108;
					me.__5.ggUpdate();
					me.__5.style.left = 'calc(50% - (100% / 2))';
					me.__5.style.top = 'calc(50% - (100% / 2))';
					skin.updateSize(me.__5);
				}
			}
		}
		me.__5.logicBlock_size();
		me.__5.ggCurrentLogicStateSize = -1;
		me.__5.ggUpdateConditionNodeChange=function () {
			var cnode=player.getCurrentNode();
			for(var i=0; i<me.__5.childNodes.length; i++) {
				var child=me.__5.childNodes[i];
				if (child.ggObj && child.ggObj.ggNodeId==cnode) {
			        var childOffX = child.offsetLeft;
			        var childOffY = child.offsetTop;
					var p = child.parentElement;
			        while (p != null && p!==this.divSkin) {
						if (p.ggType && p.ggType == 'scrollarea') {
							p.ggScrollIntoView(childOffX, childOffY, child.clientWidth, child.clientHeight);
						}
						childOffX += p.offsetLeft;
						childOffY += p.offsetTop;
						p = p.parentElement;
					}
				}
			}
		}
		me.__5.ggUpdatePosition=function (useTransition) {
			var pw = this.parentNode.clientWidth;
			this.ggWidth = (pw*100)/100.0;
			var ph = this.parentNode.clientHeight;
			this.ggHeight = (ph*100)/100.0;
			me.__5.ggUpdate();
		}
		me.__4.appendChild(me.__5);
		me.__11__content.appendChild(me.__4);
		me.__2.appendChild(me.__11);
		el=me.__21=document.createElement('div');
		els=me.__21__content=document.createElement('div');
		els.className='ggskin ggskin_subelement ggskin_scrollarea';
		el.ggContent=els;
		el.appendChild(els);
		el.ggHorScrollVisible = false;
		el.ggVertScrollVisible = false;
		el.ggContentLeftOffset = 0;
		el.ggContentTopOffset = 0;
		el.ggContentWidth = 0;
		el.ggContentHeight = 0;
		el.ggDragInertiaX = 0;
		el.ggDragInertiaY = 0;
		el.ggVPercentVisible = 1.0;
		el.ggHPercentVisible = 1.0;
		el.ggIsDragging = false;
		hs ='';
		hs+='height : 127px;';
		hs+='left : 0px;';
		hs+='overflow-x : visible;';
		hs+='overflow-y : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='width : 109px;';
		hs+="";
		els.setAttribute('style',hs);
		me.__21.ggScrollByX = function(diffX) {
			if(!me.__21.ggHorScrollVisible || diffX == 0 || me.__21.ggHPercentVisible >= 1.0) return;
			me.__21.ggScrollPosX = (me.__21__horScrollFg.offsetLeft + diffX);
			me.__21.ggScrollPosX = Math.max(me.__21.ggScrollPosX, 0);
			me.__21.ggScrollPosX = Math.min(me.__21.ggScrollPosX, me.__21__horScrollBg.offsetWidth - me.__21__horScrollFg.offsetWidth);
			me.__21__horScrollFg.style.left = me.__21.ggScrollPosX + 'px';
			let percentScrolled = me.__21.ggScrollPosX / (me.__21__horScrollBg.offsetWidth - me.__21__horScrollFg.offsetWidth);
			me.__21__content.style.left = -(Math.round((me.__21.ggContentWidth * (1.0 - me.__21.ggHPercentVisible)) * percentScrolled)) + me.__21.ggContentLeftOffset + 'px';
			me.__21.ggScrollPosXPercent = (me.__21__horScrollFg.offsetLeft / me.__21__horScrollBg.offsetWidth);
		}
		me.__21.ggScrollByXSmooth = function(diffX) {
			if(!me.__21.ggHorScrollVisible || diffX == 0 || me.__21.ggHPercentVisible >= 1.0) return;
			var scrollPerInterval = diffX / 25;
			var scrollCurrX = 0;
			var id = setInterval(function() {
				scrollCurrX += scrollPerInterval;
				me.__21.ggScrollPosX += scrollPerInterval;
				if (diffX > 0 && (scrollCurrX >= diffX || me.__21.ggScrollPosX >= me.__21__horScrollBg.offsetWidth - me.__21__horScrollFg.offsetWidth)) {
					me.__21.ggScrollPosX = Math.min(me.__21.ggScrollPosX, me.__21__horScrollBg.offsetWidth - me.__21__horScrollFg.offsetWidth);
					clearInterval(id);
				}
				if (diffX < 0 && (scrollCurrX <= diffX || me.__21.ggScrollPosX <= 0)) {
					me.__21.ggScrollPosX = Math.max(me.__21.ggScrollPosX, 0);
					clearInterval(id);
				}
			me.__21__horScrollFg.style.left = me.__21.ggScrollPosX + 'px';
			let percentScrolled = me.__21.ggScrollPosX / (me.__21__horScrollBg.offsetWidth - me.__21__horScrollFg.offsetWidth);
			me.__21__content.style.left = -(Math.round((me.__21.ggContentWidth * (1.0 - me.__21.ggHPercentVisible)) * percentScrolled)) + me.__21.ggContentLeftOffset + 'px';
			me.__21.ggScrollPosXPercent = (me.__21__horScrollFg.offsetLeft / me.__21__horScrollBg.offsetWidth);
			}, 10);
		}
		me.__21.ggScrollByY = function(diffY) {
			if(!me.__21.ggVertScrollVisible || diffY == 0 || me.__21.ggVPercentVisible >= 1.0) return;
			me.__21.ggScrollPosY = (me.__21__vertScrollFg.offsetTop + diffY);
			me.__21.ggScrollPosY = Math.max(me.__21.ggScrollPosY, 0);
			me.__21.ggScrollPosY = Math.min(me.__21.ggScrollPosY, me.__21__vertScrollBg.offsetHeight - me.__21__vertScrollFg.offsetHeight);
			me.__21__vertScrollFg.style.top = me.__21.ggScrollPosY + 'px';
			let percentScrolled = me.__21.ggScrollPosY / (me.__21__vertScrollBg.offsetHeight - me.__21__vertScrollFg.offsetHeight);
			me.__21__content.style.top = -(Math.round((me.__21.ggContentHeight * (1.0 - me.__21.ggVPercentVisible)) * percentScrolled)) + me.__21.ggContentTopOffset + 'px';
			me.__21.ggScrollPosYPercent = (me.__21__vertScrollFg.offsetTop / me.__21__vertScrollBg.offsetHeight);
		}
		me.__21.ggScrollByYSmooth = function(diffY) {
			if(!me.__21.ggVertScrollVisible || diffY == 0 || me.__21.ggVPercentVisible >= 1.0) return;
			var scrollPerInterval = diffY / 25;
			var scrollCurrY = 0;
			var id = setInterval(function() {
				scrollCurrY += scrollPerInterval;
				me.__21.ggScrollPosY += scrollPerInterval;
				if (diffY > 0 && (scrollCurrY >= diffY || me.__21.ggScrollPosY >= me.__21__vertScrollBg.offsetHeight - me.__21__vertScrollFg.offsetHeight)) {
					me.__21.ggScrollPosY = Math.min(me.__21.ggScrollPosY, me.__21__vertScrollBg.offsetHeight - me.__21__vertScrollFg.offsetHeight);
					clearInterval(id);
				}
				if (diffY < 0 && (scrollCurrY <= diffY || me.__21.ggScrollPosY <= 0)) {
					me.__21.ggScrollPosY = Math.max(me.__21.ggScrollPosY, 0);
					clearInterval(id);
				}
			me.__21__vertScrollFg.style.top = me.__21.ggScrollPosY + 'px';
			let percentScrolled = me.__21.ggScrollPosY / (me.__21__vertScrollBg.offsetHeight - me.__21__vertScrollFg.offsetHeight);
			me.__21__content.style.top = -(Math.round((me.__21.ggContentHeight * (1.0 - me.__21.ggVPercentVisible)) * percentScrolled)) + me.__21.ggContentTopOffset + 'px';
			me.__21.ggScrollPosYPercent = (me.__21__vertScrollFg.offsetTop / me.__21__vertScrollBg.offsetHeight);
			}, 10);
		}
		me.__21.ggScrollIntoView = function(posX, posY, width, height) {
			if (me.__21.ggHorScrollVisible) {
				if (posX < 0) {
					var diffX = Math.floor(posX * me.__21.ggHPercentVisible);
					me.__21.ggScrollByXSmooth(diffX);
				} else if (posX + width > me.__21.clientWidth - (me.__21.ggVertScrollVisible ? 0 : 0)) {
					var diffX = Math.ceil(((posX + width) - (me.__21.clientWidth - (me.__21.ggVertScrollVisible ? 0 : 0))) * me.__21.ggHPercentVisible);
					me.__21.ggScrollByXSmooth(diffX);
				}
			}
			if (me.__21.ggVertScrollVisible) {
				if (posY < 0) {
					var diffY = Math.floor(posY * me.__21.ggVPercentVisible);
					me.__21.ggScrollByYSmooth(diffY);
				} else if (posY + height > me.__21.clientHeight - (me.__21.ggHorScrollVisible ? 0 : 0)) {
					var diffY = Math.ceil(((posY + height) - (me.__21.clientHeight - (me.__21.ggHorScrollVisible ? 0 : 0))) * me.__21.ggVPercentVisible);
					me.__21.ggScrollByYSmooth(diffY);
				}
			}
		}
		me.__21__content.mousetouchend = e => {
			let inertiaInterval = setInterval(function() {
				me.__21.ggDragInertiaX *= 0.65;
				me.__21.ggDragInertiaY *= 0.65;
				me.__21.ggScrollByX(me.__21.ggDragInertiaX);
				me.__21.ggScrollByY(me.__21.ggDragInertiaY);
				if (Math.abs(me.__21.ggDragInertiaX) < 1.0 && Math.abs(me.__21.ggDragInertiaY) < 1.0) {
					clearInterval(inertiaInterval);
				}
				}, 50);
			me.__21__content.onmouseup = null;
			me.__21__content.onmousemove = null;
			me.__21__content.ontouchend = null;
			me.__21__content.ontouchmove = null;
			me.__21__content.onpointerup = null;
			me.__21__content.onpointermove = null;
			setTimeout(function() { me.__21.ggIsDragging = false; }, 100);
		}
		me.__21__content.mousetouchmove = e => {
			e = e || window.event;
			e.preventDefault();
			var t = e.touches;
			var eventX = t ? t[0].clientX : e.clientX;
			var eventY = t ? t[0].clientY : e.clientY;
			if (Math.abs(eventX - me.__21.ggDragStartX) > 10 || Math.abs(eventY - me.__21.ggDragStartY) > 10) me.__21.ggIsDragging = true;
			var diffX = (eventX - me.__21.ggDragLastX) * me.__21.ggHPercentVisible;
			var diffY = (eventY - me.__21.ggDragLastY) * me.__21.ggVPercentVisible;
			me.__21.ggDragInertiaX = -diffX;
			me.__21.ggDragInertiaY = -diffY;
			me.__21.ggDragLastX = eventX;
			me.__21.ggDragLastY = eventY;
			me.__21.ggScrollByX(-diffX);
			me.__21.ggScrollByY(-diffY);
		}
		me.__21__content.mousetouchstart = e => {
			e = e || window.event;
			var t = e.touches;
			me.__21.ggDragLastX = me.__21.ggDragStartX = t ? t[0].clientX : e.clientX;
			me.__21.ggDragLastY = me.__21.ggDragStartY = t ? t[0].clientY : e.clientY;
			me.__21__content.onmouseup = me.__21__content.mousetouchend;
			me.__21__content.ontouchend = me.__21__content.mousetouchend;
			me.__21__content.onmousemove = me.__21__content.mousetouchmove;
			me.__21__content.ontouchmove = me.__21__content.mousetouchmove;
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				me.__21__content.onpointerup = me.__21__content.ontouchend;
				me.__21__content.onpointermove = me.__21__content.ontouchmove;
			}
		}
		els.onmousedown = me.__21__content.mousetouchstart;
		els.ontouchstart = me.__21__content.mousetouchstart;
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			els.onpointerdown = me.__21__content.mousetouchstart;
		}
		elHorScrollBg = me.__21__horScrollBg = document.createElement('div');
		el.appendChild(elHorScrollBg);
		elHorScrollBg.setAttribute('style', 'position: absolute; left: 0px; bottom: 0px; visibility: hidden; width: 640px; height: 0px; background-color: rgba(128,128,128,1); pointer-events: auto;');
		elHorScrollBg.className='ggskin ggskin_scrollarea_hscrollbg';
		elHorScrollFg = me.__21__horScrollFg = document.createElement('div');
		elHorScrollBg.appendChild(elHorScrollFg);
		elHorScrollFg.className='ggskin ggskin_scrollarea_hscrollfg';
		elHorScrollFg.setAttribute('style', 'position: absolute; left: 0px; top: 0px; visibility: hidden; width: 640px; height: 0px; background-color: rgba(192,192,192,1); pointer-events: auto;');
		me.__21.ggScrollPosX = 0;
		me.__21.ggScrollPosXPercent = 0.0;
		elHorScrollFg.onmousedown = function(e) {
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) return;
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			me.__21.ggDragLastX = e.clientX;
			document.onmouseup = function() {
				let inertiaInterval = setInterval(function() {
					me.__21.ggDragInertiaX *= 0.65;
					me.__21.ggScrollByX(me.__21.ggDragInertiaX);
					if (Math.abs(me.__21.ggDragInertiaX) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 50);
				document.onmouseup = null;
				document.onmousemove = null;
			}
			document.onmousemove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var diffX = e.clientX - me.__21.ggDragLastX;
				me.__21.ggDragInertiaX = diffX;
				me.__21.ggDragLastX = e.clientX;
				me.__21.ggScrollByX(diffX);
			}
		}
		elHorScrollFg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			me.__21.ggDragLastX = t ? t[0].clientX : e.clientX;
			document.ontouchend = function() {
				let inertiaInterval = setInterval(function() {
					me.__21.ggDragInertiaX *= 0.65;
					me.__21.ggScrollByX(me.__21.ggDragInertiaX);
					if (Math.abs(me.__21.ggDragInertiaX) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 50);
				document.ontouchend = null;
				document.ontouchmove = null;
				document.onpointerup = null;
				document.onpointermove = null;
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointerup = document.ontouchend;
			}
			document.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var t = e.touches;
				var diffX = (t ? t[0].clientX : e.clientX) - me.__21.ggDragLastX;
				me.__21.ggDragInertiaX = diffX;
				me.__21.ggDragLastX = t ? t[0].clientX : e.clientX;
				me.__21.ggScrollByX(diffX);
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointermove = document.ontouchmove;
			}
		}
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			elHorScrollFg.onpointerdown = elHorScrollFg.ontouchstart;
		}
		elHorScrollBg.onmousedown = function(e) {
			e = e || window.event;
			e.preventDefault();
			var diffX = me.__21.ggScrollWidth;
			if (e.offsetX < me.__21.ggScrollPosX) {
				diffX = diffX * -1;
			}
			me.__21.ggScrollByXSmooth(diffX);
		}
		elHorScrollBg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			var rect = me.__21__horScrollBg.getBoundingClientRect();
			var diffX = me.__21.ggScrollWidth;
			if ((t[0].clientX - rect.left) < me.__21.ggScrollPosX) {
				diffX = diffX * -1;
			}
			me.__21.ggScrollByXSmooth(diffX);
		}
		el.addEventListener('wheel', function(e) {
			e.preventDefault();
			var wheelDelta = Math.sign(e.deltaX);
			me.__21.ggScrollByXSmooth(30 * me.__21.ggHPercentVisible * wheelDelta);
		});
		elCornerBg = me.__21__cornerBg = document.createElement('div');
		el.appendChild(elCornerBg);
		elCornerBg.setAttribute('style', 'position: absolute; right: 0px; bottom: 0px; visibility: hidden; width: 0px; height: 0px; background-color: rgba(255,255,255,1);');
		elCornerBg.className='ggskin ggskin_scrollarea_scrollcorner';
		el.ggId="\ubaa8\ubc14\uc77c \uc2a4\ud06c\ub864 2\uce35";
		el.ggDx=6;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_scrollarea ";
		el.ggType='scrollarea';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 58px;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 6px);';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__21.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__21.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getViewerSize().height <= 670))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__21.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__21.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__21.style.transition='left 0s, bottom 0s, width 0s, height 0s';
				if (me.__21.ggCurrentLogicStatePosition == 0) {
					me.__21.style.left = 'calc(50% - (100% / 2))';
					me.__21.style.bottom='30px';
				}
				else {
					me.__21.style.left='calc(50% - ((100% + 0px) / 2) + 6px)';
					me.__21.style.bottom='58px';
				}
			}
		}
		me.__21.logicBlock_position();
		me.__21.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 460))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me.__21.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__21.ggCurrentLogicStateSize = newLogicStateSize;
				me.__21.style.transition='left 0s, bottom 0s, width 0s, height 0s';
				if (me.__21.ggCurrentLogicStateSize == 0) {
					me.__21.style.width='100%';
					me.__21.style.height='102%';
					me.__21.style.left = 'calc(50% - (100% / 2) + (0px / 2) + 6px)';
					skin.updateSize(me.__21);
				}
				else {
					me.__21.style.width='100%';
					me.__21.style.height='100%';
					me.__21.style.left = 'calc(50% - (100% / 2) + (0px / 2) + 6px)';
					skin.updateSize(me.__21);
				}
			}
		}
		me.__21.logicBlock_size();
		me.__21.ggUpdatePosition=function (useTransition) {
			{
				var horScrollWasVisible = this.ggHorScrollVisible;
				var vertScrollWasVisible = this.ggVertScrollVisible;
				this.ggContent.style.left = '0px';
				this.ggContent.style.top = '0px';
				this.ggContentLeftOffset = 0;
				this.ggContentTopOffset = 0;
				var offsetWidthWithScale = this.getBoundingClientRect().width;
				var offsetHeightWithScale = this.getBoundingClientRect().height;
				var domRectContent = this.ggContent.getBoundingClientRect();
				var minX = 0;
				var minY = 0;
				var maxX = 0;
				var maxY = 0;
				var stack=[];
				stack.push(this.ggContent);
				while(stack.length>0) {
					var e=stack.pop();
					if (e!=this.ggContent && e.getBoundingClientRect && e.style['display']!='none' && (e.offsetWidth != 0 || e.offsetHeight != 0)) {
						var domRectChild = e.getBoundingClientRect();
						var diffX = domRectChild.left - domRectContent.left;
						minX = Math.min(minX, diffX);
						maxX = Math.max(maxX, diffX + domRectChild.width);
						var diffY = domRectChild.top - domRectContent.top;
						minY = Math.min(minY, diffY);
						maxY = Math.max(maxY, diffY + domRectChild.height);
					}
					if (e.hasChildNodes() && e.style['display']!='none' && e.style['overflow']!='hidden') {
						for(var i=0;i<e.childNodes.length;i++) {
							stack.push(e.childNodes[i]);
						}
					}
				}
				if (minX < 0) this.ggContentLeftOffset = -minX;
				if (minY < 0) this.ggContentTopOffset = -minY;
				this.ggContent.style.left = this.ggContentLeftOffset + 'px';
				this.ggContent.style.top = this.ggContentTopOffset + 'px';
				var contentWidth = maxX - minX;
				this.ggContent.style.width = contentWidth + 'px';
				var contentHeight = maxY - minY;
				this.ggContent.style.height = contentHeight + 'px';
			var scaleX = this.getBoundingClientRect().width / this.offsetWidth;
				this.ggContentWidth = contentWidth / scaleX;
			var scaleY = this.getBoundingClientRect().height / this.offsetHeight;
				this.ggContentHeight = contentHeight / scaleY;
				this.ggContent.style.left = -(Math.round(me.__21.ggScrollPosX / me.__21.ggHPercentVisible)) + this.ggContentLeftOffset + 'px';
				this.ggContent.style.marginLeft = '0px';
				this.ggContent.style.top = this.ggContentTopOffset + 'px';
				this.ggContent.style.marginTop = '0px';
				me.__21__horScrollBg.style.visibility = 'inherit';
				me.__21__horScrollFg.style.visibility = 'inherit';
				me.__21.ggHorScrollVisible = true;
				if(me.__21.ggHorScrollVisible) {
					me.__21.ggAvailableHeight = me.__21.clientHeight - 0;
					if (me.__21.ggVertScrollVisible) {
						me.__21.ggAvailableWidth = me.__21.clientWidth - 0;
						me.__21.ggAvailableWidthWithScale = me.__21.getBoundingClientRect().width - me.__21__horScrollBg.getBoundingClientRect().height;
					} else {
						me.__21.ggAvailableWidth = me.__21.clientWidth;
						me.__21.ggAvailableWidthWithScale = me.__21.getBoundingClientRect().width;
					}
					me.__21__horScrollBg.style.width = me.__21.ggAvailableWidth + 'px';
					me.__21.ggHPercentVisible = contentWidth != 0 ? me.__21.ggAvailableWidthWithScale / contentWidth : 0.0;
					if (me.__21.ggHPercentVisible > 1.0) me.__21.ggHPercentVisible = 1.0;
					me.__21.ggScrollWidth = Math.round(me.__21__horScrollBg.offsetWidth * me.__21.ggHPercentVisible);
					me.__21__horScrollFg.style.width = me.__21.ggScrollWidth + 'px';
					me.__21.ggScrollPosX = me.__21.ggScrollPosXPercent * me.__21.ggAvailableWidth;
					me.__21.ggScrollPosX = Math.min(me.__21.ggScrollPosX, me.__21__horScrollBg.offsetWidth - me.__21__horScrollFg.offsetWidth);
					me.__21__horScrollFg.style.left = me.__21.ggScrollPosX + 'px';
					if (me.__21.ggHPercentVisible < 1.0) {
						let percentScrolled = me.__21.ggScrollPosX / (me.__21__horScrollBg.offsetWidth - me.__21__horScrollFg.offsetWidth);
						me.__21__content.style.left = -(Math.round((me.__21.ggContentWidth * (1.0 - me.__21.ggHPercentVisible)) * percentScrolled)) + this.ggContentLeftOffset + 'px';
					}
				} else {
					me.__21.ggAvailableHeight = me.__21.clientHeight;
					me.__21.ggScrollPosX = 0;
					me.__21.ggScrollPosXPercent = 0.0;
					me.__21__content.style.left = this.ggContentLeftOffset + 'px';
				}
				if(horScrollWasVisible != me.__21.ggHorScrollVisible || vertScrollWasVisible != me.__21.ggVertScrollVisible) {
					skin.updateSize(me.__21);
					me.__21.ggUpdatePosition();
				}
			}
		}
		el=me.__22=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me.__22;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="\ubaa8\ubc14\uc77c \uce74\ud14c\uace0\ub9ac \ucee8\ud14c\uc774\ub108 2\uce35";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 110px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__22.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__22.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 670))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me.__22.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__22.ggCurrentLogicStateSize = newLogicStateSize;
				me.__22.style.transition='width 0s, height 0s';
				if (me.__22.ggCurrentLogicStateSize == 0) {
					me.__22.style.width='105px';
					me.__22.style.height='100%';
					skin.updateSize(me.__22);
				}
				else {
					me.__22.style.width='110px';
					me.__22.style.height='100%';
					skin.updateSize(me.__22);
				}
			}
		}
		me.__22.logicBlock_size();
		me.__22.ggUpdatePosition=function (useTransition) {
		}
		el=me.__23=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me.__23;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggNumRepeat = 1;
		el.ggNumRows = 0;
		el.ggNumCols = 0;
		el.ggCloneOffset = 0;
		el.ggCloneOffsetChanged = false;
		el.ggWidth = 110;
		el.ggHeight = 108;
		el.ggUpdating = false;
		el.ggFilter = [];
		el.ggFilterHsSkinId = '';
		el.ggInstances = [];
		el.ggNumFilterPassed = 0;
		el.getFilteredNodes = function(tourNodes, filter) {
			var filteredNodes = [];
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var passed = true;
				var nodeData = player.getNodeUserdata(nodeId);
				if (filter.length > 0) {
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) == -1) passed = false;
					}
				}
				if (passed) {
					filteredNodes.push(nodeId);
				}
			}
			return filteredNodes;
		}
		el.ggUpdate = function(filter) {
			if(me.__23.ggUpdating == true) return;
			me.__23.ggUpdating = true;
			var el=me.__23;
			var curNumRows = 0;
			curNumRows = me.__23.ggNumRepeat;
			if (curNumRows < 1) curNumRows = 1;
			if (typeof filter=='object') {
				el.ggFilter = filter;
			} else {
				filter = el.ggFilter;
			};
			if (me.ggTag) filter.push(me.ggTag);
			filter=filter.sort();
			if ((el.ggNumRows == curNumRows) && (el.ggInstances.length > 0) && (filter.length === el.ggCurrentFilter.length) && (filter.every(function(value, index) { return value === el.ggCurrentFilter[index] }) )) {
				me.__23.ggUpdating = false;
				return;
			} else {
				el.ggNumCols = 1;
				el.ggNumRows = curNumRows;
			var centerOffsetHor = 0;
			var centerOffsetVert = 0;
				me.__23.ggCloneOffsetChanged = false;
			}
			el.ggCurrentFilter = filter;
			el.ggInstances = [];
			if (el.hasChildNodes() == true) {
				while (el.firstChild) {
					el.removeChild(el.firstChild);
				}
			}
			var tourNodes = player.getNodeIds();
			var row = 0;
			var column = 0;
			var currentIndex = 0;
			var keepCloning = true;
			tourNodes = me.__23.getFilteredNodes(tourNodes, filter);
			me.__23.ggNumFilterPassed = tourNodes.length;
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var nodeData = player.getNodeUserdata(nodeId);
				if (!keepCloning || i < me.__23.ggCloneOffset) continue;
				var parameter={};
				parameter.top = centerOffsetVert + (row * me.__23.ggHeight) + 'px';
				parameter.left = centerOffsetHor + (column * me.__23.ggWidth) + 'px';
				parameter.width='100%';
				parameter.height='100%';
				parameter.index=currentIndex;
				parameter.title=nodeData['title'];
				var inst = new SkinCloner__23_Class(nodeId, me, el, parameter);
				currentIndex++;
				el.ggInstances.push(inst);
				el.appendChild(inst.__div);
				inst.__div.ggObj=inst;
				skin.updateSize(inst.__div);
				row++;
				if (row >= el.ggNumRows) {
					row = 0;
					column++;
					el.ggNumCols++;
				}
			}
			me.__23.ggNodeCount = me.__23.ggNumFilterPassed;
			me.__23.ggUpdating = false;
			player.triggerEvent('clonerchanged');
			if (me.__23.parentNode && me.__23.parentNode.classList.contains('ggskin_subelement') && me.__23.parentNode.parentNode.classList.contains('ggskin_scrollarea')) me.__23.parentNode.parentNode.ggUpdatePosition();
		}
		el.ggFilter = [];
		el.ggFilter[0] = "2층";
		el.ggId="\ubaa8\ubc14\uc77c \ud074\ub85c\ub098 2\uce35";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_cloner ";
		el.ggType='cloner';
		hs ='';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__23.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__23.ggUpdateConditionNodeChange=function () {
			var cnode=player.getCurrentNode();
			for(var i=0; i<me.__23.childNodes.length; i++) {
				var child=me.__23.childNodes[i];
				if (child.ggObj && child.ggObj.ggNodeId==cnode) {
			        var childOffX = child.offsetLeft;
			        var childOffY = child.offsetTop;
					var p = child.parentElement;
			        while (p != null && p!==this.divSkin) {
						if (p.ggType && p.ggType == 'scrollarea') {
							p.ggScrollIntoView(childOffX, childOffY, child.clientWidth, child.clientHeight);
						}
						childOffX += p.offsetLeft;
						childOffY += p.offsetTop;
						p = p.parentElement;
					}
				}
			}
		}
		me.__23.ggUpdatePosition=function (useTransition) {
			var pw = this.parentNode.clientWidth;
			this.ggWidth = (pw*100)/100.0;
			var ph = this.parentNode.clientHeight;
			this.ggHeight = (ph*100)/100.0;
			me.__23.ggUpdate();
		}
		me.__22.appendChild(me.__23);
		me.__21__content.appendChild(me.__22);
		me.__2.appendChild(me.__21);
		el=me.__1_=document.createElement('div');
		el.ggId="\ubaa8\ubc14\uc77c 1\uce35 \ubc84\ud2bc";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.117647);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 6px;';
		hs+='cursor : default;';
		hs+='height : 25px;';
		hs+='left : 10px;';
		hs+='position : absolute;';
		hs+='top : -90px;';
		hs+='visibility : inherit;';
		hs+='width : 60px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__1_.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__1_.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getViewerSize().width <= 640))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__1_.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__1_.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__1_.style.transition='left 0s, top 0s';
				if (me.__1_.ggCurrentLogicStatePosition == 0) {
					me.__1_.style.left='10px';
					me.__1_.style.top='-100px';
				}
				else {
					me.__1_.style.left='10px';
					me.__1_.style.top='-90px';
				}
			}
		}
		me.__1_.logicBlock_position();
		me.__1_.onclick=function (e) {
			player.setVariableValue('vis_button2', true);
			player.setVariableValue('vis_button', false);
			me.__11.style.transition='none';
			me.__11.style.visibility=(Number(me.__11.style.opacity)>0||!me.__11.style.opacity)?'inherit':'hidden';
			me.__11.ggVisible=true;
			me.__21.style.transition='none';
			me.__21.style.visibility='hidden';
			me.__21.ggVisible=false;
		}
		me.__1_.ggUpdatePosition=function (useTransition) {
		}
		el=me.__10=document.createElement('div');
		els=me.__10__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ubaa8\ubc14\uc77c 1\uce35";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 6px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='letter-spacing:2px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 14px;';
		hs+='font-weight: 500;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__10.ggUpdateText=function() {
			var params = [];
			var hs = player._("1\uce35", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__10.ggUpdateText();
		el.appendChild(els);
		me.__10.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__10.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('vis_button2') == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__10.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__10.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__10.style.transition='background-color 0s';
				if (me.__10.ggCurrentLogicStateBackgroundColor == 0) {
					me.__10.style.backgroundColor="rgba(26,109,255,1)";
				}
				else {
					me.__10.style.backgroundColor="rgba(255,255,255,0.117647)";
				}
			}
		}
		me.__10.logicBlock_backgroundcolor();
		me.__10.ggUpdatePosition=function (useTransition) {
		}
		me.__1_.appendChild(me.__10);
		me.__2.appendChild(me.__1_);
		el=me.__2_=document.createElement('div');
		el.ggId="\ubaa8\ubc14\uc77c 2\uce35 \ubc84\ud2bc";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 6px;';
		hs+='cursor : default;';
		hs+='height : 25px;';
		hs+='left : 80px;';
		hs+='position : absolute;';
		hs+='top : -90px;';
		hs+='visibility : inherit;';
		hs+='width : 60px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__2_.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__2_.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getViewerSize().width <= 640))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__2_.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__2_.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__2_.style.transition='left 0s, top 0s';
				if (me.__2_.ggCurrentLogicStatePosition == 0) {
					me.__2_.style.left='80px';
					me.__2_.style.top='-100px';
				}
				else {
					me.__2_.style.left='80px';
					me.__2_.style.top='-90px';
				}
			}
		}
		me.__2_.logicBlock_position();
		me.__2_.onclick=function (e) {
			player.setVariableValue('vis_button', true);
			player.setVariableValue('vis_button2', false);
			me.__21.style.transition='none';
			me.__21.style.visibility=(Number(me.__21.style.opacity)>0||!me.__21.style.opacity)?'inherit':'hidden';
			me.__21.ggVisible=true;
			me.__11.style.transition='none';
			me.__11.style.visibility='hidden';
			me.__11.ggVisible=false;
		}
		me.__2_.ggUpdatePosition=function (useTransition) {
		}
		el=me.__20=document.createElement('div');
		els=me.__20__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ubaa8\ubc14\uc77c 2\uce35";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : rgba(255,255,255,0.117647);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 6px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='letter-spacing:2px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 14px;';
		hs+='font-weight: 500;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__20.ggUpdateText=function() {
			var params = [];
			var hs = player._("2\uce35", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__20.ggUpdateText();
		el.appendChild(els);
		me.__20.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__20.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('vis_button') == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__20.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__20.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__20.style.transition='background-color 0s';
				if (me.__20.ggCurrentLogicStateBackgroundColor == 0) {
					me.__20.style.backgroundColor="rgba(26,109,255,1)";
				}
				else {
					me.__20.style.backgroundColor="rgba(255,255,255,0.117647)";
				}
			}
		}
		me.__20.logicBlock_backgroundcolor();
		me.__20.ggUpdatePosition=function (useTransition) {
		}
		me.__2_.appendChild(me.__20);
		me.__2.appendChild(me.__2_);
		me.__1.appendChild(me.__2);
		me.__.appendChild(me.__1);
		el=me.__0=document.createElement('div');
		els=me.__0__img=document.createElement('img');
		els.className='ggskin ggskin__0';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAAA5BJREFUeF7t3UFy2zAMhWHmZG2Oo1M0OYWOk+Rk7TC1ZrxwZIAEgZ8UvMnCkgi+T5Dk1A1fSr5QCbygqsliSoLAToIESRBYArByskMSBJYArJzskASBJQArJztkdpB933+XUv6UUurP+novpXxu2/YJm5trOXe51HFrNjWPr23b3jSFqDpk3/d68Irx6PWuHVxTKHlby1zEIE8GPfK6HIowl1fpFUQD8nF3mTo7YS+DIsSoWdVL+qukyzUgfyUHPO4rq1++FBjfkWzbJspatFE94L7v0g5Z/vKlxaCAfD+BrdYpLRiaHDQdUh/lapdoX8ugNGLUvOxv6rfL1tlj79I3+g4M1Qkp7pAjba/CtG04cnvPOatBrtYpnhg12yaQq6'+
			'B4Y3SBrI4SgdENsipKFIYJyGookRhmIKugRGOYgsyOQsAwB5kVhYIxBGQ2FBLGMJBZUGgYQ0HoKESM4SBUFCqGCwgNhYzhBkJBoWO4gkSjzIDhDhKFMgtGCIg3ykwYYSBeKLNhhIKMRpkRIxxkFMqsGAgQa5SZMTAgViizY6BAelHq/if/VeL29sMfqu9NnR3I4r3mb51YDP7oGB1neUtJKAxchxyJOqHgMLAgnZcvSacgMdAgA1GwGHiQAShojClADFHwGNOAGKBMgZEgktu/8za4zyEDP5tM0SV4EOPPJHgUNIgxxtF8aBQsyCAMPAoSZDAGGgUH4oSBRUGBdGDUPxGVv363fETvwTj+WoTFMSzn1HIsRIdYBml5rJZAe/cJBxkR4Ihj9gYt3T8UZGRwI48tDbdluzAQj8A8xmgJ/WyfEBDPoDzHssBxB4kIKGLM'+
			'VhxXkMhgIsfW4LiBEAIh1PAMxwWEFASplkc4w0GIARBrOnCGgpAnTq1tGAh1wveXCWKNQ0CIE/3pZkqr1RyENsFnTzX1fVLNpiCkiUkgiJcvM5CZMQ4YwhxMQAgT0XYE9Z7SDbISBqFTukBWxIhGaQZZGSMSpQnkChhRKGqQK2FEoKhArojhjSIGua3Tlwu6/Lxs4NmTt/2CLo3dgf6mectnl8Ycwldpq3NdDqPj8hUOsixGK0rksnnLYzSgDOkQySptl8FQoohzET9lCf7dQDxoy82UvM+TG70qFxXIHcqvu3Vx6zLVddBcvvv/st3HatpNuahByGfqCrUlCEwxQRIElgCsnOyQBIElACsnOyRBYAnAyskOSRBYArBy/gFCMtODartoiAAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\ub2eb\uae30";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 15px;';
		hs+='position : absolute;';
		hs+='right : 15px;';
		hs+='top : 15px;';
		hs+='visibility : inherit;';
		hs+='width : 15px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__0.onclick=function (e) {
			player.setVariableValue('vis_mobilecatagory', false);
		}
		me.__0.ggUpdatePosition=function (useTransition) {
		}
		me.__.appendChild(me.__0);
		me.divSkin.appendChild(me.__);
		me.__98.logicBlock_position();
		me.__98.logicBlock_visible();
		me.__99.logicBlock_visible();
		me.__96.logicBlock_visible();
		me.__97.logicBlock_visible();
		me._onmobile.logicBlock_visible();
		me._map_1mobile.ggMarkerInstances=[];
		me._map_1mobile.ggLastNodeId=null;
		me._map_1mobile.ggSimpleFloorplanMarkerArray=[];
		me._map_1mobile.ggFloorplanWidth=0;
		me._map_1mobile.ggFloorplanHeight=0;
		me._map_1mobile__mapdiv=document.createElement('div');
		me._map_1mobile__mapdiv.className='ggskin ggskin_map';
		me._map_1mobile.appendChild(me._map_1mobile__mapdiv);
		me._map_1mobile__img=document.createElement('img');
		me._map_1mobile__img.className='ggskin ggskin_map';
		me._map_1mobile__mapdiv.appendChild(me._map_1mobile__img);
		me._map_1mobile.ggRadar={ lastFov : -1, lastPan : -1, xPos : -1, yPos : -1, radarElement : null }
		me._map_1mobile.ggRadar.update=function() {
			var radar=me._map_1mobile.ggRadar;
			var d2r = Math.PI/180 ;
			var fov = player.getFov();
			var pan = player.getPanNorth();
			pan -= me._map_1mobile.ggFloorplanNorth;
			var filterpassed = true;
			var currentId = player.getCurrentNode();
			if (me._map_1mobile.ggFilteredIds.length > 0 && me._map_1mobile.ggFilteredIds.indexOf(currentId) == -1) filterpassed = false;
			if ((me._map_1mobile.ggSimpleFloorplanMarkerArray.hasOwnProperty(currentId)) && filterpassed) {
				var activeMarker = me._map_1mobile.ggSimpleFloorplanMarkerArray[currentId];
				if ((radar.radarElement) && (fov==radar.lastFov) && (pan==radar.lastPan) && (activeMarker.radarXPos==radar.xPos) && (activeMarker.radarYPos==radar.yPos)) return; 
				radar.lastPan=pan; radar.lastFov=fov;
				radar.xPos=activeMarker.radarXPos; radar.yPos=activeMarker.radarYPos;
				if (radar.radarElement) me._map_1mobile__mapdiv.removeChild(radar.radarElement);
				radar.radarElement = document.createElementNS('http://www.w3.org/2000/svg','svg');
				radar.radarElement.setAttributeNS(null,'width',60);
				radar.radarElement.setAttributeNS(null,'height',60);
				radar.radarElement.setAttributeNS(null,'viewBox','0 0 60 60');
				var radarPath = document.createElementNS('http://www.w3.org/2000/svg','path');
				radarPath.setAttributeNS(null,'id','radarPath');
				pan = -90 - pan;
				var arcX1 = 30 * Math.cos((pan - fov / 2) * d2r);
				var arcY1 = 30 * Math.sin((pan - fov / 2) * d2r);
				var arcX2 = 30 * Math.cos((pan + fov / 2) * d2r);
				var arcY2 = 30 * Math.sin((pan + fov / 2) * d2r);
				arcX1 += 30;
				arcY1 += 30;
				arcX2 += 30;
				arcY2 += 30;
				var radarPathString = 'M30,30 L' + arcX1 + ',' + arcY1 + ' A 30 30 0 0 1 ' + arcX2 + ' ' + arcY2 +' Z';
				radarPath.setAttributeNS(null,'d', radarPathString);
				radarPath.setAttributeNS(null,'fill', '#5500ff');
				radarPath.setAttributeNS(null,'fill-opacity', 0.35);
				radarPath.setAttributeNS(null,'stroke', '#5500ff');
				radarPath.setAttributeNS(null,'stroke-opacity', 0.8);
				radarPath.setAttributeNS(null,'stroke-width', 1);
				radarPath.setAttributeNS(null,'stroke-linejoin', 'miter');
				radar.radarElement.appendChild(radarPath);
				me._map_1mobile__mapdiv.appendChild(radar.radarElement);
				var radarXPos = activeMarker.radarXPos - 30;
				var radarYPos = activeMarker.radarYPos - 30;
				radar.radarElement.style['position'] = 'absolute';
				radar.radarElement.style['left'] = '' + radarXPos + 'px';
				radar.radarElement.style['top'] = '' + radarYPos + 'px';
				radar.radarElement.style['z-index'] = me._map_1mobile.style['z-index'] + 1;
			} else {
				if (radar.radarElement) {
					me._map_1mobile__mapdiv.removeChild(radar.radarElement);
					radar.radarElement = null;
				}
			}
		}
		me._map_1mobile.ggShowSimpleFloorplan=function(mapDetails) {
			var mapWidth = me._map_1mobile.clientWidth;
			var mapHeight = me._map_1mobile.clientHeight;
			var tmpWidth = mapDetails['width'];
			var tmpHeight = mapDetails['height'];
			var levelLimit = 1000;
			var levels = 1;
			while (levelLimit < mapDetails['width'] || levelLimit < mapDetails['height']) {
				tmpWidth /= 2;
				tmpHeight /= 2;
				levelLimit *= 2;
				levels++;
			}
			var level = 1;
			while (levels > level && ((mapWidth * window.devicePixelRatio) >= 2*tmpWidth || (mapHeight * window.devicePixelRatio) >= 2*tmpHeight)) {
				tmpWidth *= 2;
				tmpHeight *= 2;
				levelLimit *= 2;
				level++;
			}
			var imageFilename = basePath + 'images/maptiles/' + me._map_1mobile.ggMapId + '_' + level + '.' + mapDetails['tileformat'];
			me._map_1mobile__img.setAttribute('src', imageFilename);
		me._map_1mobile__mapdiv.setAttribute('style','position: absolute; left: 50%; margin-left: -' + me._map_1mobile.ggFloorplanWidth / 2 + 'px; top: 50%; margin-top: -' + me._map_1mobile.ggFloorplanHeight / 2 + 'px;width:' + me._map_1mobile.ggFloorplanWidth + 'px;height:' + me._map_1mobile.ggFloorplanHeight + 'px;overflow:hidden;;');
		var image_rendering_prop = (player.getBrowser() == 2 || player.getBrowser() == 3) ? 'crisp-edges' : 'pixelated';
		me._map_1mobile__img.setAttribute('style','width:' + me._map_1mobile.ggFloorplanWidth + 'px;height:' + me._map_1mobile.ggFloorplanHeight + 'px;-webkit-user-drag:none;pointer-events:none;image-rendering:' + (mapDetails['crispedges'] ? image_rendering_prop : 'auto') + ';');
		}
		me._map_1mobile.ggCalculateFloorplanSize=function(mapDetails) {
			var floorplanWidth = mapDetails['width'];
			var floorplanHeight = mapDetails['height'];
			var frameAR = me._map_1mobile.clientWidth / me._map_1mobile.clientHeight;
			var floorplanAR = floorplanWidth / floorplanHeight;
			if (frameAR > floorplanAR) {
				me._map_1mobile.ggFloorplanHeight = me._map_1mobile.clientHeight;
				me._map_1mobile.ggFloorplanWidth = me._map_1mobile.ggFloorplanHeight * floorplanAR;
			} else {
				me._map_1mobile.ggFloorplanWidth = me._map_1mobile.clientWidth;
				me._map_1mobile.ggFloorplanHeight = me._map_1mobile.ggFloorplanWidth / floorplanAR;
			}
		}
		me._map_1mobile.ggInitMap=function() {
			var mapDetails = player.getMapDetails(me._map_1mobile.ggMapId);
			if (Object.keys(mapDetails).length === 0) return;
			me._map_1mobile.style.backgroundColor = mapDetails['bgcolor'];
			if (mapDetails.hasOwnProperty('transparent') && mapDetails['transparent']) {
				me._map_1mobile.ggPermeableMap = true;
			} else {
				me._map_1mobile.ggPermeableMap = false;
			}
			me._map_1mobile.ggCalculateFloorplanSize(mapDetails);
			me._map_1mobile.ggShowSimpleFloorplan(mapDetails);
			me._map_1mobile.ggFloorplanNorth = mapDetails['floorplannorth'];
			me._map_1mobile.ggMapNotLoaded = false;
		}
		me._map_1mobile.ggClearMap=function() {
			me._map_1mobile.ggClearMapMarkers();
			me._map_1mobile.ggMapNotLoaded = true;
		}
		me._map_1mobile.ggChangeMap=function(mapId) {
			var newMapType = player.getMapType(mapId)
			if (newMapType == 'web') {
				return;
			}
			me._map_1mobile.ggMapId = mapId;
			if (!me._map_1mobile.ggMapNotLoaded) {
				me._map_1mobile.ggClearMap();
				me._map_1mobile.ggInitMap();
				me._map_1mobile.ggInitMapMarkers();
			}
		}
		me._map_1mobile.ggPlaceMarkersOnSimpleFloorplan=function() {
			var markers=me._map_1mobile.ggSimpleFloorplanMarkerArray;
			for (id in markers) {
				if (markers.hasOwnProperty(id)) {
					marker=markers[id];
					var coords = player.getNodeMapCoordsInPercent(id, me._map_1mobile.ggMapId);
					var xPos = (me._map_1mobile.ggFloorplanWidth * coords[0]) / 100.0;
					var yPos = (me._map_1mobile.ggFloorplanHeight * coords[1]) / 100.0;
					marker.radarXPos = xPos;
					marker.radarYPos = yPos;
					xPos -= me._map_1mobile.ggHMarkerAnchorOffset;
					yPos -= me._map_1mobile.ggVMarkerAnchorOffset;
					marker.style['position'] = 'absolute';
					marker.style['left'] = xPos + 'px';
					marker.style['top'] = yPos + 'px';
					marker.style['z-index'] = me._map_1mobile.style['z-index'] + 2;
				}
			}
		}
		me._map_1mobile.ggInitMapMarkers=function() {
			me._map_1mobile.ggClearMapMarkers();
			var ids=player.getNodeIds();
			me._map_1mobile.ggFilteredIds = [];
			if (me._map_1mobile.ggFilter != '') {
				var filter = me._map_1mobile.ggFilter.split(',');
				for (i=0; i < ids.length; i++) {
					var nodeId = ids[i];
					var nodeData = player.getNodeUserdata(nodeId);
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) != -1) me._map_1mobile.ggFilteredIds.push(nodeId);
					}
				}
				if (me._map_1mobile.ggFilteredIds.length > 0) ids = me._map_1mobile.ggFilteredIds;
			}
			for(var i=0; i < ids.length; i++) {
				var id = ids[i];
				var coords = player.getNodeMapCoordsInPercent(id, me._map_1mobile.ggMapId);
				if (coords.length>=2) {
					me._map_1mobile.ggHMarkerAnchorOffset = 12;
					me._map_1mobile.ggVMarkerAnchorOffset = 41;
					var markerParent = new Object();
					markerParent.ggElementNodeId=function() { return id };
					var markerClass = new SkinElement_map_pin_Class(me, markerParent);
					me._map_1mobile.ggMarkerInstances.push(markerClass);
					var marker = markerClass._map_pin;
					me._map_1mobile.ggSimpleFloorplanMarkerArray[id] = marker;
					me._map_1mobile__mapdiv.appendChild(marker);
				}
			}
			me._map_1mobile.ggPlaceMarkersOnSimpleFloorplan();
			skin.updateSize(me._map_1mobile);
		}
		me._map_1mobile.ggClearMapMarkers=function() {
			for (id in me._map_1mobile.ggSimpleFloorplanMarkerArray) {
				if (me._map_1mobile.ggSimpleFloorplanMarkerArray.hasOwnProperty(id)) {
					me._map_1mobile__mapdiv.removeChild(me._map_1mobile.ggSimpleFloorplanMarkerArray[id]);
				}
			}
			me._map_1mobile.ggMarkerInstances=[];
			me._map_1mobile.ggSimpleFloorplanMarkerArray=[];
		}
		me._offmobile.logicBlock_visible();
		me._map_2mobile.ggMarkerInstances=[];
		me._map_2mobile.ggLastNodeId=null;
		me._map_2mobile.ggSimpleFloorplanMarkerArray=[];
		me._map_2mobile.ggFloorplanWidth=0;
		me._map_2mobile.ggFloorplanHeight=0;
		me._map_2mobile__mapdiv=document.createElement('div');
		me._map_2mobile__mapdiv.className='ggskin ggskin_map';
		me._map_2mobile.appendChild(me._map_2mobile__mapdiv);
		me._map_2mobile__img=document.createElement('img');
		me._map_2mobile__img.className='ggskin ggskin_map';
		me._map_2mobile__mapdiv.appendChild(me._map_2mobile__img);
		me._map_2mobile.ggRadar={ lastFov : -1, lastPan : -1, xPos : -1, yPos : -1, radarElement : null }
		me._map_2mobile.ggRadar.update=function() {
			var radar=me._map_2mobile.ggRadar;
			var d2r = Math.PI/180 ;
			var fov = player.getFov();
			var pan = player.getPanNorth();
			pan -= me._map_2mobile.ggFloorplanNorth;
			var filterpassed = true;
			var currentId = player.getCurrentNode();
			if (me._map_2mobile.ggFilteredIds.length > 0 && me._map_2mobile.ggFilteredIds.indexOf(currentId) == -1) filterpassed = false;
			if ((me._map_2mobile.ggSimpleFloorplanMarkerArray.hasOwnProperty(currentId)) && filterpassed) {
				var activeMarker = me._map_2mobile.ggSimpleFloorplanMarkerArray[currentId];
				if ((radar.radarElement) && (fov==radar.lastFov) && (pan==radar.lastPan) && (activeMarker.radarXPos==radar.xPos) && (activeMarker.radarYPos==radar.yPos)) return; 
				radar.lastPan=pan; radar.lastFov=fov;
				radar.xPos=activeMarker.radarXPos; radar.yPos=activeMarker.radarYPos;
				if (radar.radarElement) me._map_2mobile__mapdiv.removeChild(radar.radarElement);
				radar.radarElement = document.createElementNS('http://www.w3.org/2000/svg','svg');
				radar.radarElement.setAttributeNS(null,'width',60);
				radar.radarElement.setAttributeNS(null,'height',60);
				radar.radarElement.setAttributeNS(null,'viewBox','0 0 60 60');
				var radarPath = document.createElementNS('http://www.w3.org/2000/svg','path');
				radarPath.setAttributeNS(null,'id','radarPath');
				pan = -90 - pan;
				var arcX1 = 30 * Math.cos((pan - fov / 2) * d2r);
				var arcY1 = 30 * Math.sin((pan - fov / 2) * d2r);
				var arcX2 = 30 * Math.cos((pan + fov / 2) * d2r);
				var arcY2 = 30 * Math.sin((pan + fov / 2) * d2r);
				arcX1 += 30;
				arcY1 += 30;
				arcX2 += 30;
				arcY2 += 30;
				var radarPathString = 'M30,30 L' + arcX1 + ',' + arcY1 + ' A 30 30 0 0 1 ' + arcX2 + ' ' + arcY2 +' Z';
				radarPath.setAttributeNS(null,'d', radarPathString);
				radarPath.setAttributeNS(null,'fill', '#5500ff');
				radarPath.setAttributeNS(null,'fill-opacity', 0.35);
				radarPath.setAttributeNS(null,'stroke', '#5500ff');
				radarPath.setAttributeNS(null,'stroke-opacity', 0.8);
				radarPath.setAttributeNS(null,'stroke-width', 1);
				radarPath.setAttributeNS(null,'stroke-linejoin', 'miter');
				radar.radarElement.appendChild(radarPath);
				me._map_2mobile__mapdiv.appendChild(radar.radarElement);
				var radarXPos = activeMarker.radarXPos - 30;
				var radarYPos = activeMarker.radarYPos - 30;
				radar.radarElement.style['position'] = 'absolute';
				radar.radarElement.style['left'] = '' + radarXPos + 'px';
				radar.radarElement.style['top'] = '' + radarYPos + 'px';
				radar.radarElement.style['z-index'] = me._map_2mobile.style['z-index'] + 1;
			} else {
				if (radar.radarElement) {
					me._map_2mobile__mapdiv.removeChild(radar.radarElement);
					radar.radarElement = null;
				}
			}
		}
		me._map_2mobile.ggShowSimpleFloorplan=function(mapDetails) {
			var mapWidth = me._map_2mobile.clientWidth;
			var mapHeight = me._map_2mobile.clientHeight;
			var tmpWidth = mapDetails['width'];
			var tmpHeight = mapDetails['height'];
			var levelLimit = 1000;
			var levels = 1;
			while (levelLimit < mapDetails['width'] || levelLimit < mapDetails['height']) {
				tmpWidth /= 2;
				tmpHeight /= 2;
				levelLimit *= 2;
				levels++;
			}
			var level = 1;
			while (levels > level && ((mapWidth * window.devicePixelRatio) >= 2*tmpWidth || (mapHeight * window.devicePixelRatio) >= 2*tmpHeight)) {
				tmpWidth *= 2;
				tmpHeight *= 2;
				levelLimit *= 2;
				level++;
			}
			var imageFilename = basePath + 'images/maptiles/' + me._map_2mobile.ggMapId + '_' + level + '.' + mapDetails['tileformat'];
			me._map_2mobile__img.setAttribute('src', imageFilename);
		me._map_2mobile__mapdiv.setAttribute('style','position: absolute; left: 50%; margin-left: -' + me._map_2mobile.ggFloorplanWidth / 2 + 'px; top: 50%; margin-top: -' + me._map_2mobile.ggFloorplanHeight / 2 + 'px;width:' + me._map_2mobile.ggFloorplanWidth + 'px;height:' + me._map_2mobile.ggFloorplanHeight + 'px;overflow:hidden;;');
		var image_rendering_prop = (player.getBrowser() == 2 || player.getBrowser() == 3) ? 'crisp-edges' : 'pixelated';
		me._map_2mobile__img.setAttribute('style','width:' + me._map_2mobile.ggFloorplanWidth + 'px;height:' + me._map_2mobile.ggFloorplanHeight + 'px;-webkit-user-drag:none;pointer-events:none;image-rendering:' + (mapDetails['crispedges'] ? image_rendering_prop : 'auto') + ';');
		}
		me._map_2mobile.ggCalculateFloorplanSize=function(mapDetails) {
			var floorplanWidth = mapDetails['width'];
			var floorplanHeight = mapDetails['height'];
			var frameAR = me._map_2mobile.clientWidth / me._map_2mobile.clientHeight;
			var floorplanAR = floorplanWidth / floorplanHeight;
			if (frameAR > floorplanAR) {
				me._map_2mobile.ggFloorplanHeight = me._map_2mobile.clientHeight;
				me._map_2mobile.ggFloorplanWidth = me._map_2mobile.ggFloorplanHeight * floorplanAR;
			} else {
				me._map_2mobile.ggFloorplanWidth = me._map_2mobile.clientWidth;
				me._map_2mobile.ggFloorplanHeight = me._map_2mobile.ggFloorplanWidth / floorplanAR;
			}
		}
		me._map_2mobile.ggInitMap=function() {
			var mapDetails = player.getMapDetails(me._map_2mobile.ggMapId);
			if (Object.keys(mapDetails).length === 0) return;
			me._map_2mobile.style.backgroundColor = mapDetails['bgcolor'];
			if (mapDetails.hasOwnProperty('transparent') && mapDetails['transparent']) {
				me._map_2mobile.ggPermeableMap = true;
			} else {
				me._map_2mobile.ggPermeableMap = false;
			}
			me._map_2mobile.ggCalculateFloorplanSize(mapDetails);
			me._map_2mobile.ggShowSimpleFloorplan(mapDetails);
			me._map_2mobile.ggFloorplanNorth = mapDetails['floorplannorth'];
			me._map_2mobile.ggMapNotLoaded = false;
		}
		me._map_2mobile.ggClearMap=function() {
			me._map_2mobile.ggClearMapMarkers();
			me._map_2mobile.ggMapNotLoaded = true;
		}
		me._map_2mobile.ggChangeMap=function(mapId) {
			var newMapType = player.getMapType(mapId)
			if (newMapType == 'web') {
				return;
			}
			me._map_2mobile.ggMapId = mapId;
			if (!me._map_2mobile.ggMapNotLoaded) {
				me._map_2mobile.ggClearMap();
				me._map_2mobile.ggInitMap();
				me._map_2mobile.ggInitMapMarkers();
			}
		}
		me._map_2mobile.ggPlaceMarkersOnSimpleFloorplan=function() {
			var markers=me._map_2mobile.ggSimpleFloorplanMarkerArray;
			for (id in markers) {
				if (markers.hasOwnProperty(id)) {
					marker=markers[id];
					var coords = player.getNodeMapCoordsInPercent(id, me._map_2mobile.ggMapId);
					var xPos = (me._map_2mobile.ggFloorplanWidth * coords[0]) / 100.0;
					var yPos = (me._map_2mobile.ggFloorplanHeight * coords[1]) / 100.0;
					marker.radarXPos = xPos;
					marker.radarYPos = yPos;
					xPos -= me._map_2mobile.ggHMarkerAnchorOffset;
					yPos -= me._map_2mobile.ggVMarkerAnchorOffset;
					marker.style['position'] = 'absolute';
					marker.style['left'] = xPos + 'px';
					marker.style['top'] = yPos + 'px';
					marker.style['z-index'] = me._map_2mobile.style['z-index'] + 2;
				}
			}
		}
		me._map_2mobile.ggInitMapMarkers=function() {
			me._map_2mobile.ggClearMapMarkers();
			var ids=player.getNodeIds();
			me._map_2mobile.ggFilteredIds = [];
			if (me._map_2mobile.ggFilter != '') {
				var filter = me._map_2mobile.ggFilter.split(',');
				for (i=0; i < ids.length; i++) {
					var nodeId = ids[i];
					var nodeData = player.getNodeUserdata(nodeId);
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) != -1) me._map_2mobile.ggFilteredIds.push(nodeId);
					}
				}
				if (me._map_2mobile.ggFilteredIds.length > 0) ids = me._map_2mobile.ggFilteredIds;
			}
			for(var i=0; i < ids.length; i++) {
				var id = ids[i];
				var coords = player.getNodeMapCoordsInPercent(id, me._map_2mobile.ggMapId);
				if (coords.length>=2) {
					me._map_2mobile.ggHMarkerAnchorOffset = 12;
					me._map_2mobile.ggVMarkerAnchorOffset = 41;
					var markerParent = new Object();
					markerParent.ggElementNodeId=function() { return id };
					var markerClass = new SkinElement_map_pin_Class(me, markerParent);
					me._map_2mobile.ggMarkerInstances.push(markerClass);
					var marker = markerClass._map_pin;
					me._map_2mobile.ggSimpleFloorplanMarkerArray[id] = marker;
					me._map_2mobile__mapdiv.appendChild(marker);
				}
			}
			me._map_2mobile.ggPlaceMarkersOnSimpleFloorplan();
			skin.updateSize(me._map_2mobile);
		}
		me._map_2mobile.ggClearMapMarkers=function() {
			for (id in me._map_2mobile.ggSimpleFloorplanMarkerArray) {
				if (me._map_2mobile.ggSimpleFloorplanMarkerArray.hasOwnProperty(id)) {
					me._map_2mobile__mapdiv.removeChild(me._map_2mobile.ggSimpleFloorplanMarkerArray[id]);
				}
			}
			me._map_2mobile.ggMarkerInstances=[];
			me._map_2mobile.ggSimpleFloorplanMarkerArray=[];
		}
		var clonedNormalElement = new SkinElement_map_pin_Class(this,me._markertemplate);
		me._markertemplate__normal = clonedNormalElement._map_pin;
		me._markertemplate__normalInst = clonedNormalElement;
		me._markertemplate__normal.style.visibility='inherit';
		me._markertemplate__normal.style.left='-12px';
		me._markertemplate__normal.style.top='-41px';
		me._markertemplate.ggMarkerNormal=me._markertemplate__normal;
		me._markertemplate.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_map_pin_Class(this,me._markertemplate);
		me._markertemplate__active = clonedActiveElement._map_pin;
		me._markertemplate__activeInst = clonedActiveElement;
		me._markertemplate__active.style.visibility='hidden';
		me._markertemplate__active.style.left='-12px';
		me._markertemplate__active.style.top='-41px';
		me._markertemplate.ggMarkerActive=me._markertemplate__active;
		me._markertemplate.ggMarkerInstances.push(clonedActiveElement);
		if (me._markertemplate.firstChild) {
			me._markertemplate.insertBefore(me._markertemplate__active,me._markertemplate.firstChild);
		} else {
			me._markertemplate.appendChild(me._markertemplate__active);
		}
		if (me._markertemplate.firstChild) {
			me._markertemplate.insertBefore(me._markertemplate__normal,me._markertemplate.firstChild);
		} else {
			me._markertemplate.appendChild(me._markertemplate__normal);
		}
		for (var i = 0; i < me._markertemplate.childNodes.length; i++) {
			me._markertemplate.ggMarkerInstances.push(me._markertemplate.childNodes[i]);
		}
		me.__95.logicBlock_size();
		me.__611.logicBlock_position();
		me.__611.logicBlock_size();
		me.__611.logicBlock_visible();
		me.__611.logicBlock_textcolor();
		me.__pc.logicBlock_position();
		me.__pc.logicBlock_size();
		me.__pc.logicBlock_visible();
		me.__pc.logicBlock_textcolor();
		me.__73.logicBlock_position();
		me.__73.logicBlock_size();
		me.__73.logicBlock_visible();
		me.__511.logicBlock_size();
		me.__511.logicBlock_backgroundcolor();
		me.__94.logicBlock_visible();
		me.__94.logicBlock_text();
		me._img.logicBlock_visible();
		me._image_6.logicBlock_visible();
		me.__90.logicBlock_position();
		me.__110.logicBlock_size();
		me.__110.logicBlock_backgroundcolor();
		me.__92.logicBlock_visible();
		me.__92.logicBlock_text();
		me.__91.logicBlock_visible();
		me._image_8.logicBlock_visible();
		me.__88.logicBlock_position();
		me.__89.logicBlock_size();
		me.__89.logicBlock_visible();
		me.__89.logicBlock_backgroundcolor();
		me._on6.logicBlock_visible();
		me._off0.logicBlock_visible();
		me.__311.logicBlock_visible();
		me.__85.logicBlock_position();
		me.__310.logicBlock_size();
		me.__310.logicBlock_backgroundcolor();
		me.__87.logicBlock_visible();
		me.__87.logicBlock_text();
		me.__86.logicBlock_visible();
		me._image_9.logicBlock_visible();
		me.__82.logicBlock_position();
		me.__410.logicBlock_size();
		me.__410.logicBlock_backgroundcolor();
		me.__84.logicBlock_visible();
		me.__84.logicBlock_text();
		me.__83.logicBlock_visible();
		me._image_10.logicBlock_visible();
		me.__78.logicBlock_position();
		me.__79.logicBlock_size();
		me.__79.logicBlock_backgroundcolor();
		me.__81.logicBlock_visible();
		me.__81.logicBlock_text();
		me.__80.logicBlock_visible();
		me._image_12.logicBlock_visible();
		me.__75.logicBlock_position();
		me.__75.logicBlock_size();
		me.__610.logicBlock_size();
		me.__610.logicBlock_backgroundcolor();
		me.__77.logicBlock_visible();
		me.__77.logicBlock_text();
		me.__76.logicBlock_visible();
		me._off.logicBlock_visible();
		me.__64.logicBlock_visible();
		me._on5.logicBlock_visible();
		me._map_1.ggMarkerInstances=[];
		me._map_1.ggLastNodeId=null;
		me._map_1.ggSimpleFloorplanMarkerArray=[];
		me._map_1.ggFloorplanWidth=0;
		me._map_1.ggFloorplanHeight=0;
		me._map_1__mapdiv=document.createElement('div');
		me._map_1__mapdiv.className='ggskin ggskin_map';
		me._map_1.appendChild(me._map_1__mapdiv);
		me._map_1__img=document.createElement('img');
		me._map_1__img.className='ggskin ggskin_map';
		me._map_1__mapdiv.appendChild(me._map_1__img);
		me._map_1.ggRadar={ lastFov : -1, lastPan : -1, xPos : -1, yPos : -1, radarElement : null }
		me._map_1.ggRadar.update=function() {
			var radar=me._map_1.ggRadar;
			var d2r = Math.PI/180 ;
			var fov = player.getFov();
			var pan = player.getPanNorth();
			pan -= me._map_1.ggFloorplanNorth;
			var filterpassed = true;
			var currentId = player.getCurrentNode();
			if (me._map_1.ggFilteredIds.length > 0 && me._map_1.ggFilteredIds.indexOf(currentId) == -1) filterpassed = false;
			if ((me._map_1.ggSimpleFloorplanMarkerArray.hasOwnProperty(currentId)) && filterpassed) {
				var activeMarker = me._map_1.ggSimpleFloorplanMarkerArray[currentId];
				if ((radar.radarElement) && (fov==radar.lastFov) && (pan==radar.lastPan) && (activeMarker.radarXPos==radar.xPos) && (activeMarker.radarYPos==radar.yPos)) return; 
				radar.lastPan=pan; radar.lastFov=fov;
				radar.xPos=activeMarker.radarXPos; radar.yPos=activeMarker.radarYPos;
				if (radar.radarElement) me._map_1__mapdiv.removeChild(radar.radarElement);
				radar.radarElement = document.createElementNS('http://www.w3.org/2000/svg','svg');
				radar.radarElement.setAttributeNS(null,'width',60);
				radar.radarElement.setAttributeNS(null,'height',60);
				radar.radarElement.setAttributeNS(null,'viewBox','0 0 60 60');
				var radarPath = document.createElementNS('http://www.w3.org/2000/svg','path');
				radarPath.setAttributeNS(null,'id','radarPath');
				pan = -90 - pan;
				var arcX1 = 30 * Math.cos((pan - fov / 2) * d2r);
				var arcY1 = 30 * Math.sin((pan - fov / 2) * d2r);
				var arcX2 = 30 * Math.cos((pan + fov / 2) * d2r);
				var arcY2 = 30 * Math.sin((pan + fov / 2) * d2r);
				arcX1 += 30;
				arcY1 += 30;
				arcX2 += 30;
				arcY2 += 30;
				var radarPathString = 'M30,30 L' + arcX1 + ',' + arcY1 + ' A 30 30 0 0 1 ' + arcX2 + ' ' + arcY2 +' Z';
				radarPath.setAttributeNS(null,'d', radarPathString);
				radarPath.setAttributeNS(null,'fill', '#5500ff');
				radarPath.setAttributeNS(null,'fill-opacity', 0.35);
				radarPath.setAttributeNS(null,'stroke', '#5500ff');
				radarPath.setAttributeNS(null,'stroke-opacity', 0.8);
				radarPath.setAttributeNS(null,'stroke-width', 1);
				radarPath.setAttributeNS(null,'stroke-linejoin', 'miter');
				radar.radarElement.appendChild(radarPath);
				me._map_1__mapdiv.appendChild(radar.radarElement);
				var radarXPos = activeMarker.radarXPos - 30;
				var radarYPos = activeMarker.radarYPos - 30;
				radar.radarElement.style['position'] = 'absolute';
				radar.radarElement.style['left'] = '' + radarXPos + 'px';
				radar.radarElement.style['top'] = '' + radarYPos + 'px';
				radar.radarElement.style['z-index'] = me._map_1.style['z-index'] + 1;
			} else {
				if (radar.radarElement) {
					me._map_1__mapdiv.removeChild(radar.radarElement);
					radar.radarElement = null;
				}
			}
		}
		me._map_1.ggShowSimpleFloorplan=function(mapDetails) {
			var mapWidth = me._map_1.clientWidth;
			var mapHeight = me._map_1.clientHeight;
			var tmpWidth = mapDetails['width'];
			var tmpHeight = mapDetails['height'];
			var levelLimit = 1000;
			var levels = 1;
			while (levelLimit < mapDetails['width'] || levelLimit < mapDetails['height']) {
				tmpWidth /= 2;
				tmpHeight /= 2;
				levelLimit *= 2;
				levels++;
			}
			var level = 1;
			while (levels > level && ((mapWidth * window.devicePixelRatio) >= 2*tmpWidth || (mapHeight * window.devicePixelRatio) >= 2*tmpHeight)) {
				tmpWidth *= 2;
				tmpHeight *= 2;
				levelLimit *= 2;
				level++;
			}
			var imageFilename = basePath + 'images/maptiles/' + me._map_1.ggMapId + '_' + level + '.' + mapDetails['tileformat'];
			me._map_1__img.setAttribute('src', imageFilename);
		me._map_1__mapdiv.setAttribute('style','position: absolute; left: 50%; margin-left: -' + me._map_1.ggFloorplanWidth / 2 + 'px; top: 50%; margin-top: -' + me._map_1.ggFloorplanHeight / 2 + 'px;width:' + me._map_1.ggFloorplanWidth + 'px;height:' + me._map_1.ggFloorplanHeight + 'px;overflow:hidden;;');
		var image_rendering_prop = (player.getBrowser() == 2 || player.getBrowser() == 3) ? 'crisp-edges' : 'pixelated';
		me._map_1__img.setAttribute('style','width:' + me._map_1.ggFloorplanWidth + 'px;height:' + me._map_1.ggFloorplanHeight + 'px;-webkit-user-drag:none;pointer-events:none;image-rendering:' + (mapDetails['crispedges'] ? image_rendering_prop : 'auto') + ';');
		}
		me._map_1.ggCalculateFloorplanSize=function(mapDetails) {
			var floorplanWidth = mapDetails['width'];
			var floorplanHeight = mapDetails['height'];
			var frameAR = me._map_1.clientWidth / me._map_1.clientHeight;
			var floorplanAR = floorplanWidth / floorplanHeight;
			if (frameAR > floorplanAR) {
				me._map_1.ggFloorplanHeight = me._map_1.clientHeight;
				me._map_1.ggFloorplanWidth = me._map_1.ggFloorplanHeight * floorplanAR;
			} else {
				me._map_1.ggFloorplanWidth = me._map_1.clientWidth;
				me._map_1.ggFloorplanHeight = me._map_1.ggFloorplanWidth / floorplanAR;
			}
		}
		me._map_1.ggInitMap=function() {
			var mapDetails = player.getMapDetails(me._map_1.ggMapId);
			if (Object.keys(mapDetails).length === 0) return;
			me._map_1.style.backgroundColor = mapDetails['bgcolor'];
			if (mapDetails.hasOwnProperty('transparent') && mapDetails['transparent']) {
				me._map_1.ggPermeableMap = true;
			} else {
				me._map_1.ggPermeableMap = false;
			}
			me._map_1.ggCalculateFloorplanSize(mapDetails);
			me._map_1.ggShowSimpleFloorplan(mapDetails);
			me._map_1.ggFloorplanNorth = mapDetails['floorplannorth'];
			me._map_1.ggMapNotLoaded = false;
		}
		me._map_1.ggClearMap=function() {
			me._map_1.ggClearMapMarkers();
			me._map_1.ggMapNotLoaded = true;
		}
		me._map_1.ggChangeMap=function(mapId) {
			var newMapType = player.getMapType(mapId)
			if (newMapType == 'web') {
				return;
			}
			me._map_1.ggMapId = mapId;
			if (!me._map_1.ggMapNotLoaded) {
				me._map_1.ggClearMap();
				me._map_1.ggInitMap();
				me._map_1.ggInitMapMarkers();
			}
		}
		me._map_1.ggPlaceMarkersOnSimpleFloorplan=function() {
			var markers=me._map_1.ggSimpleFloorplanMarkerArray;
			for (id in markers) {
				if (markers.hasOwnProperty(id)) {
					marker=markers[id];
					var coords = player.getNodeMapCoordsInPercent(id, me._map_1.ggMapId);
					var xPos = (me._map_1.ggFloorplanWidth * coords[0]) / 100.0;
					var yPos = (me._map_1.ggFloorplanHeight * coords[1]) / 100.0;
					marker.radarXPos = xPos;
					marker.radarYPos = yPos;
					xPos -= me._map_1.ggHMarkerAnchorOffset;
					yPos -= me._map_1.ggVMarkerAnchorOffset;
					marker.style['position'] = 'absolute';
					marker.style['left'] = xPos + 'px';
					marker.style['top'] = yPos + 'px';
					marker.style['z-index'] = me._map_1.style['z-index'] + 2;
				}
			}
		}
		me._map_1.ggInitMapMarkers=function() {
			me._map_1.ggClearMapMarkers();
			var ids=player.getNodeIds();
			me._map_1.ggFilteredIds = [];
			if (me._map_1.ggFilter != '') {
				var filter = me._map_1.ggFilter.split(',');
				for (i=0; i < ids.length; i++) {
					var nodeId = ids[i];
					var nodeData = player.getNodeUserdata(nodeId);
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) != -1) me._map_1.ggFilteredIds.push(nodeId);
					}
				}
				if (me._map_1.ggFilteredIds.length > 0) ids = me._map_1.ggFilteredIds;
			}
			for(var i=0; i < ids.length; i++) {
				var id = ids[i];
				var coords = player.getNodeMapCoordsInPercent(id, me._map_1.ggMapId);
				if (coords.length>=2) {
					me._map_1.ggHMarkerAnchorOffset = 12;
					me._map_1.ggVMarkerAnchorOffset = 41;
					var markerParent = new Object();
					markerParent.ggElementNodeId=function() { return id };
					var markerClass = new SkinElement_map_pin_Class(me, markerParent);
					me._map_1.ggMarkerInstances.push(markerClass);
					var marker = markerClass._map_pin;
					me._map_1.ggSimpleFloorplanMarkerArray[id] = marker;
					me._map_1__mapdiv.appendChild(marker);
				}
			}
			me._map_1.ggPlaceMarkersOnSimpleFloorplan();
			skin.updateSize(me._map_1);
		}
		me._map_1.ggClearMapMarkers=function() {
			for (id in me._map_1.ggSimpleFloorplanMarkerArray) {
				if (me._map_1.ggSimpleFloorplanMarkerArray.hasOwnProperty(id)) {
					me._map_1__mapdiv.removeChild(me._map_1.ggSimpleFloorplanMarkerArray[id]);
				}
			}
			me._map_1.ggMarkerInstances=[];
			me._map_1.ggSimpleFloorplanMarkerArray=[];
		}
		me._on20.logicBlock_visible();
		me._map_2.ggMarkerInstances=[];
		me._map_2.ggLastNodeId=null;
		me._map_2.ggSimpleFloorplanMarkerArray=[];
		me._map_2.ggFloorplanWidth=0;
		me._map_2.ggFloorplanHeight=0;
		me._map_2__mapdiv=document.createElement('div');
		me._map_2__mapdiv.className='ggskin ggskin_map';
		me._map_2.appendChild(me._map_2__mapdiv);
		me._map_2__img=document.createElement('img');
		me._map_2__img.className='ggskin ggskin_map';
		me._map_2__mapdiv.appendChild(me._map_2__img);
		me._map_2.ggRadar={ lastFov : -1, lastPan : -1, xPos : -1, yPos : -1, radarElement : null }
		me._map_2.ggRadar.update=function() {
			var radar=me._map_2.ggRadar;
			var d2r = Math.PI/180 ;
			var fov = player.getFov();
			var pan = player.getPanNorth();
			pan -= me._map_2.ggFloorplanNorth;
			var filterpassed = true;
			var currentId = player.getCurrentNode();
			if (me._map_2.ggFilteredIds.length > 0 && me._map_2.ggFilteredIds.indexOf(currentId) == -1) filterpassed = false;
			if ((me._map_2.ggSimpleFloorplanMarkerArray.hasOwnProperty(currentId)) && filterpassed) {
				var activeMarker = me._map_2.ggSimpleFloorplanMarkerArray[currentId];
				if ((radar.radarElement) && (fov==radar.lastFov) && (pan==radar.lastPan) && (activeMarker.radarXPos==radar.xPos) && (activeMarker.radarYPos==radar.yPos)) return; 
				radar.lastPan=pan; radar.lastFov=fov;
				radar.xPos=activeMarker.radarXPos; radar.yPos=activeMarker.radarYPos;
				if (radar.radarElement) me._map_2__mapdiv.removeChild(radar.radarElement);
				radar.radarElement = document.createElementNS('http://www.w3.org/2000/svg','svg');
				radar.radarElement.setAttributeNS(null,'width',60);
				radar.radarElement.setAttributeNS(null,'height',60);
				radar.radarElement.setAttributeNS(null,'viewBox','0 0 60 60');
				var radarPath = document.createElementNS('http://www.w3.org/2000/svg','path');
				radarPath.setAttributeNS(null,'id','radarPath');
				pan = -90 - pan;
				var arcX1 = 30 * Math.cos((pan - fov / 2) * d2r);
				var arcY1 = 30 * Math.sin((pan - fov / 2) * d2r);
				var arcX2 = 30 * Math.cos((pan + fov / 2) * d2r);
				var arcY2 = 30 * Math.sin((pan + fov / 2) * d2r);
				arcX1 += 30;
				arcY1 += 30;
				arcX2 += 30;
				arcY2 += 30;
				var radarPathString = 'M30,30 L' + arcX1 + ',' + arcY1 + ' A 30 30 0 0 1 ' + arcX2 + ' ' + arcY2 +' Z';
				radarPath.setAttributeNS(null,'d', radarPathString);
				radarPath.setAttributeNS(null,'fill', '#5500ff');
				radarPath.setAttributeNS(null,'fill-opacity', 0.35);
				radarPath.setAttributeNS(null,'stroke', '#5500ff');
				radarPath.setAttributeNS(null,'stroke-opacity', 0.8);
				radarPath.setAttributeNS(null,'stroke-width', 1);
				radarPath.setAttributeNS(null,'stroke-linejoin', 'miter');
				radar.radarElement.appendChild(radarPath);
				me._map_2__mapdiv.appendChild(radar.radarElement);
				var radarXPos = activeMarker.radarXPos - 30;
				var radarYPos = activeMarker.radarYPos - 30;
				radar.radarElement.style['position'] = 'absolute';
				radar.radarElement.style['left'] = '' + radarXPos + 'px';
				radar.radarElement.style['top'] = '' + radarYPos + 'px';
				radar.radarElement.style['z-index'] = me._map_2.style['z-index'] + 1;
			} else {
				if (radar.radarElement) {
					me._map_2__mapdiv.removeChild(radar.radarElement);
					radar.radarElement = null;
				}
			}
		}
		me._map_2.ggShowSimpleFloorplan=function(mapDetails) {
			var mapWidth = me._map_2.clientWidth;
			var mapHeight = me._map_2.clientHeight;
			var tmpWidth = mapDetails['width'];
			var tmpHeight = mapDetails['height'];
			var levelLimit = 1000;
			var levels = 1;
			while (levelLimit < mapDetails['width'] || levelLimit < mapDetails['height']) {
				tmpWidth /= 2;
				tmpHeight /= 2;
				levelLimit *= 2;
				levels++;
			}
			var level = 1;
			while (levels > level && ((mapWidth * window.devicePixelRatio) >= 2*tmpWidth || (mapHeight * window.devicePixelRatio) >= 2*tmpHeight)) {
				tmpWidth *= 2;
				tmpHeight *= 2;
				levelLimit *= 2;
				level++;
			}
			var imageFilename = basePath + 'images/maptiles/' + me._map_2.ggMapId + '_' + level + '.' + mapDetails['tileformat'];
			me._map_2__img.setAttribute('src', imageFilename);
		me._map_2__mapdiv.setAttribute('style','position: absolute; left: 50%; margin-left: -' + me._map_2.ggFloorplanWidth / 2 + 'px; top: 50%; margin-top: -' + me._map_2.ggFloorplanHeight / 2 + 'px;width:' + me._map_2.ggFloorplanWidth + 'px;height:' + me._map_2.ggFloorplanHeight + 'px;overflow:hidden;;');
		var image_rendering_prop = (player.getBrowser() == 2 || player.getBrowser() == 3) ? 'crisp-edges' : 'pixelated';
		me._map_2__img.setAttribute('style','width:' + me._map_2.ggFloorplanWidth + 'px;height:' + me._map_2.ggFloorplanHeight + 'px;-webkit-user-drag:none;pointer-events:none;image-rendering:' + (mapDetails['crispedges'] ? image_rendering_prop : 'auto') + ';');
		}
		me._map_2.ggCalculateFloorplanSize=function(mapDetails) {
			var floorplanWidth = mapDetails['width'];
			var floorplanHeight = mapDetails['height'];
			var frameAR = me._map_2.clientWidth / me._map_2.clientHeight;
			var floorplanAR = floorplanWidth / floorplanHeight;
			if (frameAR > floorplanAR) {
				me._map_2.ggFloorplanHeight = me._map_2.clientHeight;
				me._map_2.ggFloorplanWidth = me._map_2.ggFloorplanHeight * floorplanAR;
			} else {
				me._map_2.ggFloorplanWidth = me._map_2.clientWidth;
				me._map_2.ggFloorplanHeight = me._map_2.ggFloorplanWidth / floorplanAR;
			}
		}
		me._map_2.ggInitMap=function() {
			var mapDetails = player.getMapDetails(me._map_2.ggMapId);
			if (Object.keys(mapDetails).length === 0) return;
			me._map_2.style.backgroundColor = mapDetails['bgcolor'];
			if (mapDetails.hasOwnProperty('transparent') && mapDetails['transparent']) {
				me._map_2.ggPermeableMap = true;
			} else {
				me._map_2.ggPermeableMap = false;
			}
			me._map_2.ggCalculateFloorplanSize(mapDetails);
			me._map_2.ggShowSimpleFloorplan(mapDetails);
			me._map_2.ggFloorplanNorth = mapDetails['floorplannorth'];
			me._map_2.ggMapNotLoaded = false;
		}
		me._map_2.ggClearMap=function() {
			me._map_2.ggClearMapMarkers();
			me._map_2.ggMapNotLoaded = true;
		}
		me._map_2.ggChangeMap=function(mapId) {
			var newMapType = player.getMapType(mapId)
			if (newMapType == 'web') {
				return;
			}
			me._map_2.ggMapId = mapId;
			if (!me._map_2.ggMapNotLoaded) {
				me._map_2.ggClearMap();
				me._map_2.ggInitMap();
				me._map_2.ggInitMapMarkers();
			}
		}
		me._map_2.ggPlaceMarkersOnSimpleFloorplan=function() {
			var markers=me._map_2.ggSimpleFloorplanMarkerArray;
			for (id in markers) {
				if (markers.hasOwnProperty(id)) {
					marker=markers[id];
					var coords = player.getNodeMapCoordsInPercent(id, me._map_2.ggMapId);
					var xPos = (me._map_2.ggFloorplanWidth * coords[0]) / 100.0;
					var yPos = (me._map_2.ggFloorplanHeight * coords[1]) / 100.0;
					marker.radarXPos = xPos;
					marker.radarYPos = yPos;
					xPos -= me._map_2.ggHMarkerAnchorOffset;
					yPos -= me._map_2.ggVMarkerAnchorOffset;
					marker.style['position'] = 'absolute';
					marker.style['left'] = xPos + 'px';
					marker.style['top'] = yPos + 'px';
					marker.style['z-index'] = me._map_2.style['z-index'] + 2;
				}
			}
		}
		me._map_2.ggInitMapMarkers=function() {
			me._map_2.ggClearMapMarkers();
			var ids=player.getNodeIds();
			me._map_2.ggFilteredIds = [];
			if (me._map_2.ggFilter != '') {
				var filter = me._map_2.ggFilter.split(',');
				for (i=0; i < ids.length; i++) {
					var nodeId = ids[i];
					var nodeData = player.getNodeUserdata(nodeId);
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) != -1) me._map_2.ggFilteredIds.push(nodeId);
					}
				}
				if (me._map_2.ggFilteredIds.length > 0) ids = me._map_2.ggFilteredIds;
			}
			for(var i=0; i < ids.length; i++) {
				var id = ids[i];
				var coords = player.getNodeMapCoordsInPercent(id, me._map_2.ggMapId);
				if (coords.length>=2) {
					me._map_2.ggHMarkerAnchorOffset = 12;
					me._map_2.ggVMarkerAnchorOffset = 41;
					var markerParent = new Object();
					markerParent.ggElementNodeId=function() { return id };
					var markerClass = new SkinElement_map_pin_Class(me, markerParent);
					me._map_2.ggMarkerInstances.push(markerClass);
					var marker = markerClass._map_pin;
					me._map_2.ggSimpleFloorplanMarkerArray[id] = marker;
					me._map_2__mapdiv.appendChild(marker);
				}
			}
			me._map_2.ggPlaceMarkersOnSimpleFloorplan();
			skin.updateSize(me._map_2);
		}
		me._map_2.ggClearMapMarkers=function() {
			for (id in me._map_2.ggSimpleFloorplanMarkerArray) {
				if (me._map_2.ggSimpleFloorplanMarkerArray.hasOwnProperty(id)) {
					me._map_2__mapdiv.removeChild(me._map_2.ggSimpleFloorplanMarkerArray[id]);
				}
			}
			me._map_2.ggMarkerInstances=[];
			me._map_2.ggSimpleFloorplanMarkerArray=[];
		}
		me._videocontainer.logicBlock_visible();
		me._video_1.ggInitMedia('wn2XGg1FwqU');
		me.__48.logicBlock_visible();
		me.__49.logicBlock_size();
		me.__50.logicBlock_size();
		me.__50.logicBlock_scaling();
		me.__510.logicBlock_backgroundcolor();
		me._mon0.logicBlock_visible();
		me._mon_0.logicBlock_textcolor();
		me._moff0.logicBlock_visible();
		me._moff_0.logicBlock_textcolor();
		me._m.logicBlock_position();
		me._m.logicBlock_visible();
		me.__63.logicBlock_backgroundcolor();
		me._mon.logicBlock_visible();
		me._moff.logicBlock_visible();
		me.__51.logicBlock_position();
		me.__62.logicBlock_backgroundcolor();
		me._m_on3.logicBlock_visible();
		me._m_off3.logicBlock_visible();
		me._m_off_3.logicBlock_textcolor();
		me.__52.logicBlock_position();
		me.__61.logicBlock_backgroundcolor();
		me._m_on2.logicBlock_visible();
		me._m_off2.logicBlock_visible();
		me.__53.logicBlock_position();
		me.__60.logicBlock_backgroundcolor();
		me._m_off1.logicBlock_visible();
		me.__54.logicBlock_position();
		me.__59.logicBlock_backgroundcolor();
		me._m_on0.logicBlock_visible();
		me._m_off0.logicBlock_visible();
		me._m_off_0.logicBlock_textcolor();
		me.__55.logicBlock_position();
		me.__58.logicBlock_backgroundcolor();
		me._m_on.logicBlock_visible();
		me._m_off.logicBlock_visible();
		me._m_off_.logicBlock_textcolor();
		me.__46.logicBlock_visible();
		me._on4.logicBlock_position();
		me._on4.logicBlock_textcolor();
		me.__2on0.logicBlock_position();
		me.__2on0.logicBlock_textcolor();
		me.__1on.logicBlock_position();
		me.__1on.logicBlock_textcolor();
		me.__4on.logicBlock_position();
		me.__4on.logicBlock_textcolor();
		me.__3on.logicBlock_position();
		me.__3on.logicBlock_textcolor();
		me.__2on.logicBlock_position();
		me.__2on.logicBlock_textcolor();
		me._on3.logicBlock_position();
		me._on3.logicBlock_textcolor();
		me._on2.logicBlock_position();
		me._on2.logicBlock_textcolor();
		me._on1.logicBlock_position();
		me._on1.logicBlock_textcolor();
		me._on0.logicBlock_position();
		me._on0.logicBlock_textcolor();
		me.__45.logicBlock_visible();
		me.__44.logicBlock_scaling();
		me.__44.logicBlock_visible();
		me.__43.logicBlock_visible();
		me._d_125.logicBlock_bordercolor();
		me._c_177m.logicBlock_bordercolor();
		me._b_135m.logicBlock_bordercolor();
		me._a_141m.logicBlock_bordercolor();
		me.__135m.logicBlock_bordercolor();
		me._mobile.logicBlock_scaling();
		me._mobile.logicBlock_visible();
		me.__39.logicBlock_position();
		me.__39.logicBlock_scaling();
		me.__up.logicBlock_visible();
		me.__down.logicBlock_visible();
		me._type5.logicBlock_backgroundcolor();
		me._type4.logicBlock_backgroundcolor();
		me._type3.logicBlock_backgroundcolor();
		me._type20.logicBlock_backgroundcolor();
		me._type1.logicBlock_backgroundcolor();
		me.__24.logicBlock_visible();
			player.stopSound("_main");
		me.__34.logicBlock_visible();
		me.__33.logicBlock_visible();
		me._text_2.logicBlock_visible();
		me.__30.logicBlock_visible();
		me.__15.logicBlock_position();
		me._type_2english.logicBlock_visible();
		me._type2menuenglish.logicBlock_visible();
		me._type_2kor.logicBlock_visible();
		player.setVariableValue('vis_kor', true);
		me._kor.logicBlock_textcolor();
		me._text_3.logicBlock_textcolor();
		me.__.logicBlock_position();
		me.__.logicBlock_size();
		me.__2.logicBlock_position();
		me.__11.logicBlock_position();
		me.__11.logicBlock_size();
		me.__4.logicBlock_size();
		me.__5.logicBlock_size();
		me.__21.logicBlock_position();
		me.__21.logicBlock_size();
		me.__22.logicBlock_size();
		me.__1_.logicBlock_position();
		me.__10.logicBlock_backgroundcolor();
		me.__2_.logicBlock_position();
		me.__20.logicBlock_backgroundcolor();
		player.addListener('activehotspotchanged', function(event) {
			if (hotspotTemplates.hasOwnProperty('ht_node')) {
				for(var i = 0; i < hotspotTemplates['ht_node'].length; i++) {
					hotspotTemplates['ht_node'][i].ggEvent_activehotspotchanged();
				}
			}
			me._on4.logicBlock_textcolor();
			me.__2on0.logicBlock_textcolor();
			me.__1on.logicBlock_textcolor();
			me.__4on.logicBlock_textcolor();
			me.__3on.logicBlock_textcolor();
			me.__2on.logicBlock_textcolor();
			me._on3.logicBlock_textcolor();
			me._on2.logicBlock_textcolor();
			me._on1.logicBlock_textcolor();
			me._on0.logicBlock_textcolor();
			me._d_125.logicBlock_bordercolor();
			me._c_177m.logicBlock_bordercolor();
			me._b_135m.logicBlock_bordercolor();
			me._a_141m.logicBlock_bordercolor();
			me.__135m.logicBlock_bordercolor();
			me._type5.logicBlock_backgroundcolor();
			me._type4.logicBlock_backgroundcolor();
			me._type3.logicBlock_backgroundcolor();
			me._type20.logicBlock_backgroundcolor();
			me._type1.logicBlock_backgroundcolor();
			me._type2menuenglish.logicBlock_visible();
		});
		player.addListener('changenode', function(event) {
			if (hotspotTemplates.hasOwnProperty('ht_node')) {
				for(var i = 0; i < hotspotTemplates['ht_node'].length; i++) {
					hotspotTemplates['ht_node'][i].ggEvent_changenode();
				}
			}
			me.__98.logicBlock_position();
			me.__98.logicBlock_visible();
			me.__99.logicBlock_visible();
			me.__97.logicBlock_visible();
			me._onmobile.logicBlock_visible();
			for (var i=0; i < me._map_1mobile.ggMarkerInstances.length; i++) {
				me._map_1mobile.ggMarkerInstances[i].ggEvent_changenode();
			}
			var mapDetails = player.getMapDetails(me._map_1mobile.ggMapId);
			if (mapDetails.hasOwnProperty('title')) {
				me._map_1mobile.ggCalculateFloorplanSize(mapDetails);
				me._map_1mobile.ggShowSimpleFloorplan(mapDetails);
				me._map_1mobile.ggPlaceMarkersOnSimpleFloorplan();
			}
			if (me._map_1mobile.ggRadar) me._map_1mobile.ggRadar.update();
			if (me._map_1mobile.ggLastNodeId) {
				var lastActiveMarker = me._map_1mobile.ggSimpleFloorplanMarkerArray[me._map_1mobile.ggLastNodeId];
				if (lastActiveMarker && lastActiveMarker.ggDeactivate) lastActiveMarker.ggDeactivate();
			}
			var id = player.getCurrentNode();
			var marker = me._map_1mobile.ggSimpleFloorplanMarkerArray[id];
			if (marker) {
				if (marker.ggActivate) marker.ggActivate();
			}
			if (player.getMapType(me._map_1mobile.ggMapId) == 'file') {
				var coords = player.getNodeMapCoords(id, me._map_1mobile.ggMapId);
				if (coords.length < 2) {
					var mapId = player.getMapContainingNode(id);
					if (mapId != '') {
							me._map_1mobile.ggChangeMap(mapId);
					}
				}
			}
			me._map_1mobile.ggLastNodeId = id;
			me._map_1mobile.ggRadar.update();
			me._offmobile.logicBlock_visible();
			for (var i=0; i < me._map_2mobile.ggMarkerInstances.length; i++) {
				me._map_2mobile.ggMarkerInstances[i].ggEvent_changenode();
			}
			var mapDetails = player.getMapDetails(me._map_2mobile.ggMapId);
			if (mapDetails.hasOwnProperty('title')) {
				me._map_2mobile.ggCalculateFloorplanSize(mapDetails);
				me._map_2mobile.ggShowSimpleFloorplan(mapDetails);
				me._map_2mobile.ggPlaceMarkersOnSimpleFloorplan();
			}
			if (me._map_2mobile.ggRadar) me._map_2mobile.ggRadar.update();
			if (me._map_2mobile.ggLastNodeId) {
				var lastActiveMarker = me._map_2mobile.ggSimpleFloorplanMarkerArray[me._map_2mobile.ggLastNodeId];
				if (lastActiveMarker && lastActiveMarker.ggDeactivate) lastActiveMarker.ggDeactivate();
			}
			var id = player.getCurrentNode();
			var marker = me._map_2mobile.ggSimpleFloorplanMarkerArray[id];
			if (marker) {
				if (marker.ggActivate) marker.ggActivate();
			}
			if (player.getMapType(me._map_2mobile.ggMapId) == 'file') {
				var coords = player.getNodeMapCoords(id, me._map_2mobile.ggMapId);
				if (coords.length < 2) {
					var mapId = player.getMapContainingNode(id);
					if (mapId != '') {
							me._map_2mobile.ggChangeMap(mapId);
					}
				}
			}
			me._map_2mobile.ggLastNodeId = id;
			me._map_2mobile.ggRadar.update();
			me._markertemplate__normalInst.ggEvent_changenode();
			me._markertemplate__activeInst.ggEvent_changenode();
			me.__611.logicBlock_textcolor();
			me.__pc.logicBlock_position();
			me.__pc.logicBlock_textcolor();
			me.__511.logicBlock_backgroundcolor();
			me.__94.logicBlock_text();
			me._img.logicBlock_visible();
			me._image_6.logicBlock_visible();
			me.__110.logicBlock_backgroundcolor();
			me.__92.logicBlock_text();
			me.__91.logicBlock_visible();
			me._image_8.logicBlock_visible();
			me.__89.logicBlock_backgroundcolor();
			me._on6.logicBlock_visible();
			me._off0.logicBlock_visible();
			me.__310.logicBlock_backgroundcolor();
			me.__87.logicBlock_text();
			me.__86.logicBlock_visible();
			me._image_9.logicBlock_visible();
			me.__410.logicBlock_backgroundcolor();
			me.__84.logicBlock_text();
			me.__83.logicBlock_visible();
			me._image_10.logicBlock_visible();
			me.__79.logicBlock_backgroundcolor();
			me.__81.logicBlock_text();
			me.__80.logicBlock_visible();
			me._image_12.logicBlock_visible();
			me.__610.logicBlock_backgroundcolor();
			me.__77.logicBlock_text();
			me.__76.logicBlock_visible();
			me._off.logicBlock_visible();
			me._on5.logicBlock_visible();
			for (var i=0; i < me._map_1.ggMarkerInstances.length; i++) {
				me._map_1.ggMarkerInstances[i].ggEvent_changenode();
			}
			var mapDetails = player.getMapDetails(me._map_1.ggMapId);
			if (mapDetails.hasOwnProperty('title')) {
				me._map_1.ggCalculateFloorplanSize(mapDetails);
				me._map_1.ggShowSimpleFloorplan(mapDetails);
				me._map_1.ggPlaceMarkersOnSimpleFloorplan();
			}
			if (me._map_1.ggRadar) me._map_1.ggRadar.update();
			if (me._map_1.ggLastNodeId) {
				var lastActiveMarker = me._map_1.ggSimpleFloorplanMarkerArray[me._map_1.ggLastNodeId];
				if (lastActiveMarker && lastActiveMarker.ggDeactivate) lastActiveMarker.ggDeactivate();
			}
			var id = player.getCurrentNode();
			var marker = me._map_1.ggSimpleFloorplanMarkerArray[id];
			if (marker) {
				if (marker.ggActivate) marker.ggActivate();
			}
			if (player.getMapType(me._map_1.ggMapId) == 'file') {
				var coords = player.getNodeMapCoords(id, me._map_1.ggMapId);
				if (coords.length < 2) {
					var mapId = player.getMapContainingNode(id);
					if (mapId != '') {
							me._map_1.ggChangeMap(mapId);
					}
				}
			}
			me._map_1.ggLastNodeId = id;
			me._map_1.ggRadar.update();
			me._on20.logicBlock_visible();
			for (var i=0; i < me._map_2.ggMarkerInstances.length; i++) {
				me._map_2.ggMarkerInstances[i].ggEvent_changenode();
			}
			var mapDetails = player.getMapDetails(me._map_2.ggMapId);
			if (mapDetails.hasOwnProperty('title')) {
				me._map_2.ggCalculateFloorplanSize(mapDetails);
				me._map_2.ggShowSimpleFloorplan(mapDetails);
				me._map_2.ggPlaceMarkersOnSimpleFloorplan();
			}
			if (me._map_2.ggRadar) me._map_2.ggRadar.update();
			if (me._map_2.ggLastNodeId) {
				var lastActiveMarker = me._map_2.ggSimpleFloorplanMarkerArray[me._map_2.ggLastNodeId];
				if (lastActiveMarker && lastActiveMarker.ggDeactivate) lastActiveMarker.ggDeactivate();
			}
			var id = player.getCurrentNode();
			var marker = me._map_2.ggSimpleFloorplanMarkerArray[id];
			if (marker) {
				if (marker.ggActivate) marker.ggActivate();
			}
			if (player.getMapType(me._map_2.ggMapId) == 'file') {
				var coords = player.getNodeMapCoords(id, me._map_2.ggMapId);
				if (coords.length < 2) {
					var mapId = player.getMapContainingNode(id);
					if (mapId != '') {
							me._map_2.ggChangeMap(mapId);
					}
				}
			}
			me._map_2.ggLastNodeId = id;
			me._map_2.ggRadar.update();
			me.__510.logicBlock_backgroundcolor();
			me._mon0.logicBlock_visible();
			me._mon_0.logicBlock_textcolor();
			me._moff0.logicBlock_visible();
			me._moff_0.logicBlock_textcolor();
			me.__63.logicBlock_backgroundcolor();
			me._mon.logicBlock_visible();
			me._moff.logicBlock_visible();
			me.__62.logicBlock_backgroundcolor();
			me._m_on3.logicBlock_visible();
			me._m_off3.logicBlock_visible();
			me._m_off_3.logicBlock_textcolor();
			me.__61.logicBlock_backgroundcolor();
			me._m_on2.logicBlock_visible();
			me._m_off2.logicBlock_visible();
			me.__60.logicBlock_backgroundcolor();
			me._m_off1.logicBlock_visible();
			me.__59.logicBlock_backgroundcolor();
			me._m_on0.logicBlock_visible();
			me._m_off0.logicBlock_visible();
			me._m_off_0.logicBlock_textcolor();
			me.__58.logicBlock_backgroundcolor();
			me._m_on.logicBlock_visible();
			me._m_off.logicBlock_visible();
			me._m_off_.logicBlock_textcolor();
			me._on4.logicBlock_textcolor();
			me.__2on0.logicBlock_textcolor();
			me.__1on.logicBlock_textcolor();
			me.__4on.logicBlock_textcolor();
			me.__3on.logicBlock_textcolor();
			me.__2on.logicBlock_textcolor();
			me._on3.logicBlock_textcolor();
			me._on2.logicBlock_textcolor();
			me._on1.logicBlock_textcolor();
			me._on0.logicBlock_textcolor();
			me._d_125.logicBlock_bordercolor();
			me._c_177m.logicBlock_bordercolor();
			me._b_135m.logicBlock_bordercolor();
			me._a_141m.logicBlock_bordercolor();
			me.__135m.logicBlock_bordercolor();
			me.__up.logicBlock_visible();
			me.__down.logicBlock_visible();
			me._type5.logicBlock_backgroundcolor();
			me._type4.logicBlock_backgroundcolor();
			me._type3.logicBlock_backgroundcolor();
			me._type20.logicBlock_backgroundcolor();
			me._type1.logicBlock_backgroundcolor();
			me.__15.logicBlock_position();
			me._type_2english.logicBlock_visible();
			me._type2menuenglish.logicBlock_visible();
			me._type_2kor.logicBlock_visible();
			me._kor.logicBlock_textcolor();
			me._text_3.logicBlock_textcolor();
			me.__.logicBlock_position();
			me.__5.ggUpdateConditionNodeChange();
			me.__23.ggUpdateConditionNodeChange();
			me.__10.logicBlock_backgroundcolor();
			me.__20.logicBlock_backgroundcolor();
		});
		player.addListener('configloaded', function(event) {
			if (hotspotTemplates.hasOwnProperty('ht_node')) {
				for(var i = 0; i < hotspotTemplates['ht_node'].length; i++) {
					hotspotTemplates['ht_node'][i].ggEvent_configloaded();
				}
			}
			me.__98.logicBlock_position();
			me.__98.logicBlock_visible();
			me.__96.logicBlock_visible();
			for (var i=0; i < me._map_1mobile.ggMarkerInstances.length; i++) {
				me._map_1mobile.ggMarkerInstances[i].ggEvent_configloaded();
			}
			me._map_1mobile.ggClearMap();
			me._map_1mobile.ggInitMap(false);
			me._map_1mobile.ggInitMapMarkers(true);
			for (var i=0; i < me._map_2mobile.ggMarkerInstances.length; i++) {
				me._map_2mobile.ggMarkerInstances[i].ggEvent_configloaded();
			}
			me._map_2mobile.ggClearMap();
			me._map_2mobile.ggInitMap(false);
			me._map_2mobile.ggInitMapMarkers(true);
			me._markertemplate__normalInst.ggEvent_configloaded();
			me._markertemplate__activeInst.ggEvent_configloaded();
			me.__95.logicBlock_size();
			me.__611.logicBlock_position();
			me.__611.logicBlock_size();
			me.__611.logicBlock_visible();
			me.__pc.logicBlock_size();
			me.__pc.logicBlock_visible();
			me.__73.logicBlock_visible();
			me.__511.logicBlock_backgroundcolor();
			me.__94.logicBlock_text();
			me._img.logicBlock_visible();
			me._image_6.logicBlock_visible();
			me.__110.logicBlock_backgroundcolor();
			me.__92.logicBlock_text();
			me.__91.logicBlock_visible();
			me._image_8.logicBlock_visible();
			me.__89.logicBlock_visible();
			me.__89.logicBlock_backgroundcolor();
			me._on6.logicBlock_visible();
			me._off0.logicBlock_visible();
			me.__310.logicBlock_backgroundcolor();
			me.__87.logicBlock_text();
			me.__86.logicBlock_visible();
			me._image_9.logicBlock_visible();
			me.__410.logicBlock_backgroundcolor();
			me.__84.logicBlock_text();
			me.__83.logicBlock_visible();
			me._image_10.logicBlock_visible();
			me.__79.logicBlock_backgroundcolor();
			me.__81.logicBlock_text();
			me.__80.logicBlock_visible();
			me._image_12.logicBlock_visible();
			me.__610.logicBlock_backgroundcolor();
			me.__77.logicBlock_text();
			me.__76.logicBlock_visible();
			me._off.logicBlock_visible();
			me.__64.logicBlock_visible();
			for (var i=0; i < me._map_1.ggMarkerInstances.length; i++) {
				me._map_1.ggMarkerInstances[i].ggEvent_configloaded();
			}
			me._map_1.ggClearMap();
			me._map_1.ggInitMap(false);
			me._map_1.ggInitMapMarkers(true);
			for (var i=0; i < me._map_2.ggMarkerInstances.length; i++) {
				me._map_2.ggMarkerInstances[i].ggEvent_configloaded();
			}
			me._map_2.ggClearMap();
			me._map_2.ggInitMap(false);
			me._map_2.ggInitMapMarkers(true);
			me.__48.logicBlock_visible();
			me.__510.logicBlock_backgroundcolor();
			me._mon0.logicBlock_visible();
			me._mon_0.logicBlock_textcolor();
			me._moff0.logicBlock_visible();
			me._moff_0.logicBlock_textcolor();
			me._m.logicBlock_visible();
			me.__63.logicBlock_backgroundcolor();
			me._mon.logicBlock_visible();
			me._moff.logicBlock_visible();
			me.__62.logicBlock_backgroundcolor();
			me._m_on3.logicBlock_visible();
			me._m_off3.logicBlock_visible();
			me._m_off_3.logicBlock_textcolor();
			me.__61.logicBlock_backgroundcolor();
			me._m_on2.logicBlock_visible();
			me._m_off2.logicBlock_visible();
			me.__60.logicBlock_backgroundcolor();
			me._m_off1.logicBlock_visible();
			me.__59.logicBlock_backgroundcolor();
			me._m_on0.logicBlock_visible();
			me._m_off0.logicBlock_visible();
			me._m_off_0.logicBlock_textcolor();
			me.__58.logicBlock_backgroundcolor();
			me._m_on.logicBlock_visible();
			me._m_off.logicBlock_visible();
			me._m_off_.logicBlock_textcolor();
			me.__46.logicBlock_visible();
			me._on4.logicBlock_textcolor();
			me.__2on0.logicBlock_textcolor();
			me.__1on.logicBlock_textcolor();
			me.__4on.logicBlock_textcolor();
			me.__3on.logicBlock_textcolor();
			me.__2on.logicBlock_textcolor();
			me._on3.logicBlock_textcolor();
			me._on2.logicBlock_textcolor();
			me._on1.logicBlock_textcolor();
			me._on0.logicBlock_textcolor();
			me.__45.logicBlock_visible();
			me.__43.logicBlock_visible();
			me._d_125.logicBlock_bordercolor();
			me._c_177m.logicBlock_bordercolor();
			me._b_135m.logicBlock_bordercolor();
			me._a_141m.logicBlock_bordercolor();
			me.__135m.logicBlock_bordercolor();
			me._mobile.logicBlock_visible();
			me.__up.logicBlock_visible();
			me.__down.logicBlock_visible();
			me._type5.logicBlock_backgroundcolor();
			me._type4.logicBlock_backgroundcolor();
			me._type3.logicBlock_backgroundcolor();
			me._type20.logicBlock_backgroundcolor();
			me._type1.logicBlock_backgroundcolor();
			me.__24.logicBlock_visible();
			me.__15.logicBlock_position();
			me._type_2english.logicBlock_visible();
			me._type2menuenglish.logicBlock_visible();
			me._type_2kor.logicBlock_visible();
			me._kor.logicBlock_textcolor();
			me._text_3.logicBlock_textcolor();
			me.__.logicBlock_position();
			me.__11.ggUpdatePosition();
			me.__21.ggUpdatePosition();
			me.__10.logicBlock_backgroundcolor();
			me.__20.logicBlock_backgroundcolor();
		});
		player.addListener('hotspotsupdated', function(event) {
			if (hotspotTemplates.hasOwnProperty('ht_node')) {
				for(var i = 0; i < hotspotTemplates['ht_node'].length; i++) {
					hotspotTemplates['ht_node'][i].ggEvent_hotspotsupdated();
				}
			}
		});
		player.addListener('positionchanged', function(event) {
			me._map_1mobile.ggRadar.update();
			me._map_2mobile.ggRadar.update();
			me._map_1.ggRadar.update();
			me._map_2.ggRadar.update();
		});
		player.addListener('sizechanged', function(event) {
			for(var i = 0; i < me.__23.ggInstances.length; i++) {
				me.__23.ggInstances[i].ggEvent_sizechanged(event);
			}
			for(var i = 0; i < me.__5.ggInstances.length; i++) {
				me.__5.ggInstances[i].ggEvent_sizechanged(event);
			}
			if (hotspotTemplates.hasOwnProperty('ht_node')) {
				for(var i = 0; i < hotspotTemplates['ht_node'].length; i++) {
					hotspotTemplates['ht_node'][i].ggEvent_sizechanged();
				}
			}
			me.__98.logicBlock_visible();
			me.__96.logicBlock_visible();
			me.__95.logicBlock_size();
			me.__611.logicBlock_position();
			me.__611.logicBlock_size();
			me.__611.logicBlock_visible();
			me.__pc.logicBlock_size();
			me.__pc.logicBlock_visible();
			me.__73.logicBlock_position();
			me.__73.logicBlock_size();
			me.__73.logicBlock_visible();
			me.__511.logicBlock_size();
			me.__90.logicBlock_position();
			me.__110.logicBlock_size();
			me.__88.logicBlock_position();
			me.__89.logicBlock_size();
			me.__89.logicBlock_visible();
			me.__85.logicBlock_position();
			me.__310.logicBlock_size();
			me.__82.logicBlock_position();
			me.__410.logicBlock_size();
			me.__78.logicBlock_position();
			me.__79.logicBlock_size();
			me.__75.logicBlock_position();
			me.__75.logicBlock_size();
			me.__610.logicBlock_size();
			me.__64.logicBlock_visible();
			me._videocontainer.logicBlock_visible();
			me.__48.logicBlock_visible();
			me.__49.logicBlock_size();
			me.__50.logicBlock_size();
			me.__50.logicBlock_scaling();
			me._m.logicBlock_position();
			me._m.logicBlock_visible();
			me.__51.logicBlock_position();
			me.__52.logicBlock_position();
			me.__53.logicBlock_position();
			me.__54.logicBlock_position();
			me.__55.logicBlock_position();
			me.__46.logicBlock_visible();
			me._on4.logicBlock_position();
			me.__2on0.logicBlock_position();
			me.__1on.logicBlock_position();
			me.__4on.logicBlock_position();
			me.__3on.logicBlock_position();
			me.__2on.logicBlock_position();
			me._on3.logicBlock_position();
			me._on2.logicBlock_position();
			me._on1.logicBlock_position();
			me._on0.logicBlock_position();
			me.__45.logicBlock_visible();
			me.__44.logicBlock_scaling();
			me.__44.logicBlock_visible();
			me.__43.logicBlock_visible();
			me._mobile.logicBlock_scaling();
			me._mobile.logicBlock_visible();
			me.__39.logicBlock_position();
			me.__39.logicBlock_scaling();
			me.__24.logicBlock_visible();
			me.__.logicBlock_size();
			me.__2.logicBlock_position();
			me.__11.logicBlock_position();
			me.__11.logicBlock_size();
			me.__4.logicBlock_size();
			me.__5.logicBlock_size();
			me.__21.logicBlock_position();
			me.__21.logicBlock_size();
			me.__22.logicBlock_size();
			me.__1_.logicBlock_position();
			me.__2_.logicBlock_position();
		});
		player.addListener('varchanged_vis_button', function(event) {
			me.__20.logicBlock_backgroundcolor();
		});
		player.addListener('varchanged_vis_button2', function(event) {
			me.__10.logicBlock_backgroundcolor();
		});
		player.addListener('varchanged_vis_buttonbg', function(event) {
			me.__110.logicBlock_backgroundcolor();
			me.__92.logicBlock_text();
			me.__91.logicBlock_visible();
			me._image_8.logicBlock_visible();
			me.__510.logicBlock_backgroundcolor();
			me._mon0.logicBlock_visible();
			me._mon_0.logicBlock_textcolor();
			me._moff0.logicBlock_visible();
			me._moff_0.logicBlock_textcolor();
		});
		player.addListener('varchanged_vis_buttonbg_1', function(event) {
			me.__89.logicBlock_backgroundcolor();
			me._on6.logicBlock_visible();
			me._off0.logicBlock_visible();
			me.__63.logicBlock_backgroundcolor();
			me._mon.logicBlock_visible();
			me._moff.logicBlock_visible();
		});
		player.addListener('varchanged_vis_buttonbg_2', function(event) {
			me.__310.logicBlock_backgroundcolor();
			me.__87.logicBlock_text();
			me.__86.logicBlock_visible();
			me._image_9.logicBlock_visible();
			me.__62.logicBlock_backgroundcolor();
			me._m_on3.logicBlock_visible();
			me._m_off3.logicBlock_visible();
			me._m_off_3.logicBlock_textcolor();
		});
		player.addListener('varchanged_vis_buttonbg_3', function(event) {
			me.__410.logicBlock_backgroundcolor();
			me.__84.logicBlock_text();
			me.__83.logicBlock_visible();
			me._image_10.logicBlock_visible();
			me.__61.logicBlock_backgroundcolor();
			me._m_on2.logicBlock_visible();
			me._m_off2.logicBlock_visible();
		});
		player.addListener('varchanged_vis_buttonbg_4', function(event) {
			me.__511.logicBlock_backgroundcolor();
			me.__94.logicBlock_text();
			me._img.logicBlock_visible();
			me._image_6.logicBlock_visible();
			me.__60.logicBlock_backgroundcolor();
			me._m_off1.logicBlock_visible();
		});
		player.addListener('varchanged_vis_buttonbg_5', function(event) {
			me.__79.logicBlock_backgroundcolor();
			me.__81.logicBlock_text();
			me.__80.logicBlock_visible();
			me._image_12.logicBlock_visible();
			me.__58.logicBlock_backgroundcolor();
			me._m_on.logicBlock_visible();
			me._m_off.logicBlock_visible();
		});
		player.addListener('varchanged_vis_buttonbg_6', function(event) {
			me.__610.logicBlock_backgroundcolor();
			me.__77.logicBlock_text();
			me.__76.logicBlock_visible();
			me._off.logicBlock_visible();
			me.__59.logicBlock_backgroundcolor();
			me._m_on0.logicBlock_visible();
			me._m_off0.logicBlock_visible();
			me._m_off_0.logicBlock_textcolor();
			me._m_off_.logicBlock_textcolor();
		});
		player.addListener('varchanged_vis_eng', function(event) {
			me._type_2english.logicBlock_visible();
			me._text_3.logicBlock_textcolor();
		});
		player.addListener('varchanged_vis_kor', function(event) {
			me._type_2kor.logicBlock_visible();
			me._kor.logicBlock_textcolor();
		});
		player.addListener('varchanged_vis_mobilecatagory', function(event) {
			me.__.logicBlock_position();
		});
		player.addListener('varchanged_vis_mobilemenu', function(event) {
			me.__98.logicBlock_position();
		});
		player.addListener('varchanged_vis_sidebar', function(event) {
			me.__15.logicBlock_position();
		});
		player.addListener('varchanged_vis_typebutton', function(event) {
			me.__up.logicBlock_visible();
			me.__down.logicBlock_visible();
		});
		player.addListener('viewerinit', function(event) {
			me.__5.ggUpdate();
			me.__23.ggUpdate();
		});
	};
	function SkinCloner__23_Class(nodeId, parentScope, ggParent, parameter) {
		var me=this;
		var hs='';
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		me.findElements=skin.findElements;
		me.ggIndex=parameter.index;
		me.ggNodeId=nodeId;
		me.ggTitle=parameter.title;
		me.ggUserdata=skin.player.getNodeUserdata(me.ggNodeId);
		me.ggUserdata.nodeid=me.ggNodeId;
		me.elementMouseDown={};
		me.elementMouseOver={};
			me.__div=document.createElement('div');
			me.__div.setAttribute('style','visibility: inherit; overflow: visible;');
			me.__div.style.position='absolute';
			me.__div.style.left=parameter.left;
			me.__div.style.top=parameter.top;
			me.__div.style.width='';
			me.__div.style.height='';
			me.__div.style.width=parameter.width;
			me.__div.style.height=parameter.height;
			me.__div.ggIsActive = function() {
				return player.getCurrentNode()==me.ggNodeId;
			}
			me.__div.ggElementNodeId=function() {
				return me.ggNodeId;
			}
		el=me._nodeimage_1=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._nodeimage_1;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._nodeimage_1__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		els.setAttribute('src',basePath + "images/nodeimage_1_" + nodeId + ".png");
		el.ggNodeId=nodeId;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		hs+='border-radius: 50px;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="NodeImage 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		hs ='';
		hs+='height : 100px;';
		hs+='left : 9px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._nodeimage_1.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._nodeimage_1.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 460))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._nodeimage_1.ggCurrentLogicStateSize != newLogicStateSize) {
				me._nodeimage_1.ggCurrentLogicStateSize = newLogicStateSize;
				me._nodeimage_1.style.transition='width 0s, height 0s';
				if (me._nodeimage_1.ggCurrentLogicStateSize == 0) {
					me._nodeimage_1.style.width='80px';
					me._nodeimage_1.style.height='80px';
					skin.updateSize(me._nodeimage_1);
				}
				else {
					me._nodeimage_1.style.width='100px';
					me._nodeimage_1.style.height='100px';
					skin.updateSize(me._nodeimage_1);
				}
			}
		}
		me._nodeimage_1.logicBlock_size();
		me._nodeimage_1.onclick=function (e) {
			if (me._nodeimage_1.isDragging()) return;
			player.openNext("{"+me.ggNodeId+"}","");
			player.setVariableValue('vis_mobilecatagory', false);
		}
		me._nodeimage_1.ggUpdatePosition=function (useTransition) {
		}
		el=me.__2_0=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me.__2_0;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me.__2_0__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="2\uce35 \ubc29\uba85";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 0px 0px 4px 4px;';
		hs+='bottom : -28px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 30px;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 10px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 5px 1px 5px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__2_0.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.ggUserdata.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__2_0.ggUpdateText();
		player.addListener('changenode', function() {
			me.__2_0.ggUpdateText();
		});
		el.appendChild(els);
		me.__2_0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__2_0.ggUpdatePosition=function (useTransition) {
		}
		me._nodeimage_1.appendChild(me.__2_0);
		el=me.__3=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me.__3;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="\uc774\ubbf8\uc9c0 \ubc30\uacbd\uc120";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(26,109,255,0.392157);';
		hs+='border : 0px solid #1a66ff;';
		hs+='border-radius : 50px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__3.onclick=function (e) {
			if (me.__3.isDragging()) return;
			player.openNext("{"+me.ggNodeId+"}","");
		}
		me.__3.ggUpdatePosition=function (useTransition) {
		}
		me._nodeimage_1.appendChild(me.__3);
		me.__div.appendChild(me._nodeimage_1);
		me._nodeimage_1.logicBlock_size();
			me.ggEvent_sizechanged=function(event) {
				me._nodeimage_1.logicBlock_size();
			};
	};
	function SkinCloner__5_Class(nodeId, parentScope, ggParent, parameter) {
		var me=this;
		var hs='';
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		me.findElements=skin.findElements;
		me.ggIndex=parameter.index;
		me.ggNodeId=nodeId;
		me.ggTitle=parameter.title;
		me.ggUserdata=skin.player.getNodeUserdata(me.ggNodeId);
		me.ggUserdata.nodeid=me.ggNodeId;
		me.elementMouseDown={};
		me.elementMouseOver={};
			me.__div=document.createElement('div');
			me.__div.setAttribute('style','visibility: inherit; overflow: visible;');
			me.__div.style.position='absolute';
			me.__div.style.left=parameter.left;
			me.__div.style.top=parameter.top;
			me.__div.style.width='';
			me.__div.style.height='';
			me.__div.style.width=parameter.width;
			me.__div.style.height=parameter.height;
			me.__div.ggIsActive = function() {
				return player.getCurrentNode()==me.ggNodeId;
			}
			me.__div.ggElementNodeId=function() {
				return me.ggNodeId;
			}
		el=me._nodeimage_10=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._nodeimage_10;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._nodeimage_10__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		els.setAttribute('src',basePath + "images/nodeimage_1_" + nodeId + ".png");
		el.ggNodeId=nodeId;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		hs+='border-radius: 50px;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="NodeImage 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		hs ='';
		hs+='height : 100px;';
		hs+='left : 9px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._nodeimage_10.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._nodeimage_10.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 460))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._nodeimage_10.ggCurrentLogicStateSize != newLogicStateSize) {
				me._nodeimage_10.ggCurrentLogicStateSize = newLogicStateSize;
				me._nodeimage_10.style.transition='width 0s, height 0s';
				if (me._nodeimage_10.ggCurrentLogicStateSize == 0) {
					me._nodeimage_10.style.width='80px';
					me._nodeimage_10.style.height='80px';
					skin.updateSize(me._nodeimage_10);
				}
				else {
					me._nodeimage_10.style.width='100px';
					me._nodeimage_10.style.height='100px';
					skin.updateSize(me._nodeimage_10);
				}
			}
		}
		me._nodeimage_10.logicBlock_size();
		me._nodeimage_10.onclick=function (e) {
			if (me._nodeimage_10.isDragging()) return;
			player.openNext("{"+me.ggNodeId+"}","");
			player.setVariableValue('vis_mobilecatagory', false);
		}
		me._nodeimage_10.ggUpdatePosition=function (useTransition) {
		}
		el=me.__7=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me.__7;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me.__7__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ubc29\uba85";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 0px 0px 4px 4px;';
		hs+='bottom : -28px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 30px;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 10px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 5px 1px 5px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__7.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.ggUserdata.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__7.ggUpdateText();
		player.addListener('changenode', function() {
			me.__7.ggUpdateText();
		});
		el.appendChild(els);
		me.__7.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__7.ggUpdatePosition=function (useTransition) {
		}
		me._nodeimage_10.appendChild(me.__7);
		el=me.__6=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me.__6;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="\uc774\ubbf8\uc9c0 \ubc30\uacbd\uc120";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(26,109,255,0.392157);';
		hs+='border : 0px solid #1a66ff;';
		hs+='border-radius : 50px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__6.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__6.onclick=function (e) {
			if (me.__6.isDragging()) return;
			player.openNext("{"+me.ggNodeId+"}","");
		}
		me.__6.ggUpdatePosition=function (useTransition) {
		}
		me._nodeimage_10.appendChild(me.__6);
		me.__div.appendChild(me._nodeimage_10);
		me._nodeimage_10.logicBlock_size();
			me.ggEvent_sizechanged=function(event) {
				me._nodeimage_10.logicBlock_size();
			};
	};
	function SkinElement_map_pin_Class(parentScope,ggParent) {
		var me=this;
		var flag=false;
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		var nodeId=ggParent.ggElementNodeId();
		me.ggNodeId=nodeId;
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.ggUserdata.nodeid=nodeId;
		me.elementMouseDown={};
		me.elementMouseOver={};
		
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		
		el=me._map_pin=document.createElement('div');
		el.ggId="map_pin";
		el.ggDx=-128;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 439px;';
		hs+='height : 41px;';
		hs+='left : calc(50% - ((24px + 0px) / 2) - 128px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 24px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._map_pin.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		me._map_pin.onclick=function (e) {
			if (
				(
					((me._map_pin.ggIsActive() == false))
				)
			) {
				player.openNext("{"+me.ggNodeId+"}","");
			}
		}
		me._map_pin.ggUpdatePosition=function (useTransition) {
		}
		el=me._map_pin_active=document.createElement('div');
		els=me._map_pin_active__img=document.createElement('img');
		els.className='ggskin ggskin_map_pin_active';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="map_pin_active";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='bottom : 0px;';
		hs+='cursor : pointer;';
		hs+='height : 31px;';
		hs+='left : calc(50% - ((25px + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 25px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 100%';
		me._map_pin_active.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._map_pin_active.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateSize = 0;
			}
			else if (
				((player.getViewerSize().width <= 460))
			)
			{
				newLogicStateSize = 1;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._map_pin_active.ggCurrentLogicStateSize != newLogicStateSize) {
				me._map_pin_active.ggCurrentLogicStateSize = newLogicStateSize;
				me._map_pin_active.style.transition='width 0s, height 0s, transform 200ms ease 0ms, opacity 500ms ease 0ms';
				if (me._map_pin_active.ggCurrentLogicStateSize == 0) {
					me._map_pin_active.style.width='15px';
					me._map_pin_active.style.height='21px';
					me._map_pin_active.style.left = 'calc(50% - (15px / 2))';
					skin.updateSize(me._map_pin_active);
				}
				else if (me._map_pin_active.ggCurrentLogicStateSize == 1) {
					me._map_pin_active.style.width='15px';
					me._map_pin_active.style.height='21px';
					me._map_pin_active.style.left = 'calc(50% - (15px / 2))';
					skin.updateSize(me._map_pin_active);
				}
				else {
					me._map_pin_active.style.width='25px';
					me._map_pin_active.style.height='31px';
					me._map_pin_active.style.left = 'calc(50% - (25px / 2))';
					skin.updateSize(me._map_pin_active);
				}
			}
		}
		me._map_pin_active.logicBlock_size();
		me._map_pin_active.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['map_pin_active'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._map_pin_active.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._map_pin_active.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._map_pin_active.style.transition='width 0s, height 0s, transform 200ms ease 0ms, opacity 500ms ease 0ms';
				if (me._map_pin_active.ggCurrentLogicStateScaling == 0) {
					me._map_pin_active.ggParameter.sx = 1.1;
					me._map_pin_active.ggParameter.sy = 1.1;
					me._map_pin_active.style.transform=parameterToTransform(me._map_pin_active.ggParameter);
					setTimeout(function() {skin.updateSize(me._map_pin_active);}, 250);
				}
				else {
					me._map_pin_active.ggParameter.sx = 1;
					me._map_pin_active.ggParameter.sy = 1;
					me._map_pin_active.style.transform=parameterToTransform(me._map_pin_active.ggParameter);
					setTimeout(function() {skin.updateSize(me._map_pin_active);}, 250);
				}
			}
		}
		me._map_pin_active.logicBlock_scaling();
		me._map_pin_active.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me._map_pin_active.ggIsActive() == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._map_pin_active.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._map_pin_active.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._map_pin_active.style.transition='width 0s, height 0s, transform 200ms ease 0ms, opacity 500ms ease 0ms';
				if (me._map_pin_active.ggCurrentLogicStateAlpha == 0) {
					me._map_pin_active.style.visibility=me._map_pin_active.ggVisible?'inherit':'hidden';
					me._map_pin_active.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._map_pin_active.style.opacity == 0.0) { me._map_pin_active.style.visibility="hidden"; } }, 505);
					me._map_pin_active.style.opacity=0;
				}
			}
		}
		me._map_pin_active.logicBlock_alpha();
		me._map_pin_active.onmouseover=function (e) {
			me.elementMouseOver['map_pin_active']=true;
			me._map_pin_active.logicBlock_scaling();
		}
		me._map_pin_active.onmouseout=function (e) {
			me.elementMouseOver['map_pin_active']=false;
			me._map_pin_active.logicBlock_scaling();
		}
		me._map_pin_active.ggCurrentLogicStateSize = -1;
		me._map_pin_active.ggCurrentLogicStateScaling = -1;
		me._map_pin_active.ggCurrentLogicStateAlpha = -1;
		me._map_pin_active.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['map_pin_active']) {
				me.elementMouseOver['map_pin_active']=true;
			}
		}
		me._map_pin_active.ggUpdatePosition=function (useTransition) {
		}
		me._map_pin.appendChild(me._map_pin_active);
		el=me._map_pin_normal=document.createElement('div');
		els=me._map_pin_normal__img=document.createElement('img');
		els.className='ggskin ggskin_map_pin_normal';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="map_pin_normal";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='bottom : 0px;';
		hs+='cursor : pointer;';
		hs+='height : 22px;';
		hs+='left : calc(50% - ((13px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 13px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 100%';
		me._map_pin_normal.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._map_pin_normal.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateSize = 0;
			}
			else if (
				((player.getViewerSize().width <= 460))
			)
			{
				newLogicStateSize = 1;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._map_pin_normal.ggCurrentLogicStateSize != newLogicStateSize) {
				me._map_pin_normal.ggCurrentLogicStateSize = newLogicStateSize;
				me._map_pin_normal.style.transition='width 0s, height 0s, transform 200ms ease 0ms, opacity 500ms ease 0ms';
				if (me._map_pin_normal.ggCurrentLogicStateSize == 0) {
					me._map_pin_normal.style.width='7px';
					me._map_pin_normal.style.height='17px';
					me._map_pin_normal.style.left = 'calc(50% - (7px / 2))';
					skin.updateSize(me._map_pin_normal);
				}
				else if (me._map_pin_normal.ggCurrentLogicStateSize == 1) {
					me._map_pin_normal.style.width='7px';
					me._map_pin_normal.style.height='17px';
					me._map_pin_normal.style.left = 'calc(50% - (7px / 2))';
					skin.updateSize(me._map_pin_normal);
				}
				else {
					me._map_pin_normal.style.width='13px';
					me._map_pin_normal.style.height='22px';
					me._map_pin_normal.style.left = 'calc(50% - (13px / 2))';
					skin.updateSize(me._map_pin_normal);
				}
			}
		}
		me._map_pin_normal.logicBlock_size();
		me._map_pin_normal.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['map_pin_normal'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._map_pin_normal.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._map_pin_normal.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._map_pin_normal.style.transition='width 0s, height 0s, transform 200ms ease 0ms, opacity 500ms ease 0ms';
				if (me._map_pin_normal.ggCurrentLogicStateScaling == 0) {
					me._map_pin_normal.ggParameter.sx = 1.1;
					me._map_pin_normal.ggParameter.sy = 1.1;
					me._map_pin_normal.style.transform=parameterToTransform(me._map_pin_normal.ggParameter);
					setTimeout(function() {skin.updateSize(me._map_pin_normal);}, 250);
				}
				else {
					me._map_pin_normal.ggParameter.sx = 1;
					me._map_pin_normal.ggParameter.sy = 1;
					me._map_pin_normal.style.transform=parameterToTransform(me._map_pin_normal.ggParameter);
					setTimeout(function() {skin.updateSize(me._map_pin_normal);}, 250);
				}
			}
		}
		me._map_pin_normal.logicBlock_scaling();
		me._map_pin_normal.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me._map_pin_normal.ggIsActive() == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._map_pin_normal.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._map_pin_normal.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._map_pin_normal.style.transition='width 0s, height 0s, transform 200ms ease 0ms, opacity 500ms ease 0ms';
				if (me._map_pin_normal.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me._map_pin_normal.style.opacity == 0.0) { me._map_pin_normal.style.visibility="hidden"; } }, 505);
					me._map_pin_normal.style.opacity=0;
				}
				else {
					me._map_pin_normal.style.visibility=me._map_pin_normal.ggVisible?'inherit':'hidden';
					me._map_pin_normal.style.opacity=1;
				}
			}
		}
		me._map_pin_normal.logicBlock_alpha();
		me._map_pin_normal.onmouseover=function (e) {
			me.elementMouseOver['map_pin_normal']=true;
			me._map_pin_normal.logicBlock_scaling();
		}
		me._map_pin_normal.onmouseout=function (e) {
			me.elementMouseOver['map_pin_normal']=false;
			me._map_pin_normal.logicBlock_scaling();
		}
		me._map_pin_normal.ggCurrentLogicStateSize = -1;
		me._map_pin_normal.ggCurrentLogicStateScaling = -1;
		me._map_pin_normal.ggCurrentLogicStateAlpha = -1;
		me._map_pin_normal.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['map_pin_normal']) {
				me.elementMouseOver['map_pin_normal']=true;
			}
		}
		me._map_pin_normal.ggUpdatePosition=function (useTransition) {
		}
		me._map_pin.appendChild(me._map_pin_normal);
		me._map_pin_active.logicBlock_size();
		me._map_pin_active.logicBlock_scaling();
		me._map_pin_active.logicBlock_alpha();
		me._map_pin_normal.logicBlock_size();
		me._map_pin_normal.logicBlock_scaling();
		me._map_pin_normal.logicBlock_alpha();
			me.ggEvent_changenode=function() {
				me._map_pin_active.logicBlock_alpha();
				me._map_pin_normal.logicBlock_alpha();
			};
			me.ggEvent_configloaded=function() {
				me._map_pin_active.logicBlock_size();
				me._map_pin_normal.logicBlock_size();
			};
			me.ggEvent_sizechanged=function() {
				me._map_pin_active.logicBlock_size();
				me._map_pin_normal.logicBlock_size();
			};
	player.addListener('timer', function() { me._map_pin_active.ggUpdateConditionTimer();
me._map_pin_normal.ggUpdateConditionTimer(); });
	};
	function SkinHotspotClass_ht_node(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_node=document.createElement('div');
		el.ggId="ht_node";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_node.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_node.onclick=function (e) {
			player.openNext(player._(me.hotspot.url),"$(cur)");
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_node']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_node']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['ht_node']) {
				player.setActiveHotspot(me.hotspot);
				me.elementMouseOver['ht_node']=true;
			}
		}
		me._ht_node.ggUpdatePosition=function (useTransition) {
		}
		el=me._lottie_2=document.createElement('div');
		el.ggLottie = lottie.loadAnimation({
			container: el,
			path: basePath + 'images/lottie_2.json',
			autoplay: true,
			loop: 99,
			rendererSettings: {
				preserveAspectRatio: 'xMinYMin meet'
			}
		});
		el.ggLottie.setSpeed(1.5);
		el.ggId="Lottie 2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_lottie ";
		el.ggType='lottie';
		hs ='';
		hs+='background : rgba(0,0,0,0);';
		hs+='cursor : pointer;';
		hs+='height : 70px;';
		hs+='left : -30px;';
		hs+='position : absolute;';
		hs+='top : -20px;';
		hs+='visibility : inherit;';
		hs+='width : 70px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._lottie_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._lottie_2.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else if (
				((player.getViewerSize().width <= 460))
			)
			{
				newLogicStatePosition = 1;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._lottie_2.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._lottie_2.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._lottie_2.style.transition='left 0s, top 0s, width 0s, height 0s';
				if (me._lottie_2.ggCurrentLogicStatePosition == 0) {
					me._lottie_2.style.left='-20px';
					me._lottie_2.style.top='-20px';
				}
				else if (me._lottie_2.ggCurrentLogicStatePosition == 1) {
					me._lottie_2.style.left='-20px';
					me._lottie_2.style.top='-20px';
				}
				else {
					me._lottie_2.style.left='-30px';
					me._lottie_2.style.top='-20px';
				}
			}
		}
		me._lottie_2.logicBlock_position();
		me._lottie_2.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 420))
			)
			{
				newLogicStateSize = 0;
			}
			else if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateSize = 1;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._lottie_2.ggCurrentLogicStateSize != newLogicStateSize) {
				me._lottie_2.ggCurrentLogicStateSize = newLogicStateSize;
				me._lottie_2.style.transition='left 0s, top 0s, width 0s, height 0s';
				if (me._lottie_2.ggCurrentLogicStateSize == 0) {
					me._lottie_2.style.width='40px';
					me._lottie_2.style.height='40px';
					skin.updateSize(me._lottie_2);
				}
				else if (me._lottie_2.ggCurrentLogicStateSize == 1) {
					me._lottie_2.style.width='40px';
					me._lottie_2.style.height='40px';
					skin.updateSize(me._lottie_2);
				}
				else {
					me._lottie_2.style.width='70px';
					me._lottie_2.style.height='70px';
					skin.updateSize(me._lottie_2);
				}
			}
		}
		me._lottie_2.logicBlock_size();
		me._lottie_2.onclick=function (e) {
			player.openNext(player._(me.hotspot.url),"");
		}
		me._lottie_2.ggUpdatePosition=function (useTransition) {
		}
		el=me._container_6=document.createElement('div');
		el.ggId="Container 6";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 30px;';
		hs+='left : calc(50% - ((60px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((30px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 60px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._container_6.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._container_6.ggUpdatePosition=function (useTransition) {
		}
		el=me.__103=document.createElement('div');
		els=me.__103__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ubaa8\ubc14\uc77c \ub178\ub4dc\uba85";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : rgba(0,0,0,0.54902);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 3px;';
		hs+='bottom : -28px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 25px;';
		hs+='left : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		hs+='letter-spacing:2px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 12px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 2px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__103.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.hotspot.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__103.ggUpdateText();
		player.addListener('changenode', function() {
			me.__103.ggUpdateText();
		});
		el.appendChild(els);
		me.__103.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me.__103.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((Math.min(Math.min(me.hotspot.pxp, 100 - me.hotspot.pxp), Math.min(me.hotspot.pyp, 100 - me.hotspot.pyp)) == 0))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__103.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__103.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__103.style.transition='left 0s, bottom 0s, width 0s, height 0s, background-color 0s';
				if (me.__103.ggCurrentLogicStatePosition == 0) {
					me.__103.style.left = 'calc(50% - (50px / 2))';
					me.__103.style.bottom='0px';
				}
				else {
					me.__103.style.left='calc(50% - ((50px + 0px) / 2) + 0px)';
					me.__103.style.bottom='-28px';
				}
			}
		}
		me.__103.logicBlock_position();
		me.__103.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player._(me.ggUserdata.information) == "\ub113\uac8c"))
			)
			{
				newLogicStateSize = 0;
			}
			else if (
				((player.getViewerSize().width <= 460))
			)
			{
				newLogicStateSize = 1;
			}
			else if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateSize = 2;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me.__103.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__103.ggCurrentLogicStateSize = newLogicStateSize;
				me.__103.style.transition='left 0s, bottom 0s, width 0s, height 0s, background-color 0s';
				if (me.__103.ggCurrentLogicStateSize == 0) {
					me.__103.style.width='95px';
					me.__103.style.height='25px';
					me.__103.style.left = 'calc(50% - (95px / 2))';
					skin.updateSize(me.__103);
				}
				else if (me.__103.ggCurrentLogicStateSize == 1) {
					me.__103.style.width='60px';
					me.__103.style.height='25px';
					me.__103.style.left = 'calc(50% - (60px / 2))';
					skin.updateSize(me.__103);
				}
				else if (me.__103.ggCurrentLogicStateSize == 2) {
					me.__103.style.width='60px';
					me.__103.style.height='25px';
					me.__103.style.left = 'calc(50% - (60px / 2))';
					skin.updateSize(me.__103);
				}
				else {
					me.__103.style.width='50px';
					me.__103.style.height='25px';
					me.__103.style.left = 'calc(50% - (50px / 2))';
					skin.updateSize(me.__103);
				}
			}
		}
		me.__103.logicBlock_size();
		me.__103.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize().width <= 460))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__103.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__103.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__103.style.transition='left 0s, bottom 0s, width 0s, height 0s, background-color 0s';
				if (me.__103.ggCurrentLogicStateVisible == 0) {
					me.__103.style.visibility=(Number(me.__103.style.opacity)>0||!me.__103.style.opacity)?'inherit':'hidden';
					me.__103.ggVisible=true;
				}
				else if (me.__103.ggCurrentLogicStateVisible == 1) {
					me.__103.style.visibility=(Number(me.__103.style.opacity)>0||!me.__103.style.opacity)?'inherit':'hidden';
					me.__103.ggVisible=true;
				}
				else {
					me.__103.style.visibility="hidden";
					me.__103.ggVisible=false;
				}
			}
		}
		me.__103.logicBlock_visible();
		me.__103.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player._(me.hotspot.title) == "\uc5c6\uc74c"))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__103.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__103.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__103.style.transition='left 0s, bottom 0s, width 0s, height 0s, background-color 0s';
				if (me.__103.ggCurrentLogicStateBackgroundColor == 0) {
					me.__103.style.backgroundColor="rgba(0,0,0,0)";
				}
				else {
					me.__103.style.backgroundColor="rgba(0,0,0,0.54902)";
				}
			}
		}
		me.__103.logicBlock_backgroundcolor();
		me.__103.logicBlock_text = function() {
			var newLogicStateText;
			if (
				((player._(me.hotspot.title) == "\uc5c6\uc74c"))
			)
			{
				newLogicStateText = 0;
			}
			else {
				newLogicStateText = -1;
			}
			if (me.__103.ggCurrentLogicStateText != newLogicStateText) {
				me.__103.ggCurrentLogicStateText = newLogicStateText;
				me.__103.style.transition='left 0s, bottom 0s, width 0s, height 0s, background-color 0s';
				if (me.__103.ggCurrentLogicStateText == 0) {
					if (me.__103.ggUpdateText) {
					me.__103.ggUpdateText=function() {
						var params = [];
						var hs = player._("", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me.__103.ggUpdateText();
					} else {
						if (me.__103.ggUpdatePosition) me.__103.ggUpdatePosition();
					}
				}
				else {
					if (me.__103.ggUpdateText) {
					me.__103.ggUpdateText=function() {
						var params = [];
						params.push(String(player._(me.hotspot.title)));
						var hs = player._("%1", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me.__103.ggUpdateText();
					} else {
						if (me.__103.ggUpdatePosition) me.__103.ggUpdatePosition();
					}
				}
			}
		}
		me.__103.logicBlock_text();
		me.__103.ggUpdatePosition=function (useTransition) {
		}
		me._container_6.appendChild(me.__103);
		el=me.__102=document.createElement('div');
		els=me.__102__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ub178\ub4dc\uba85";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text menu";
		el.ggType='text';
		hs ='';
		hs+='background : rgba(0,0,0,0.54902);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 3px;';
		hs+='bottom : -40px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 30px;';
		hs+='left : calc(50% - ((60px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 60px;';
		hs+='pointer-events:auto;';
		hs+='letter-spacing:2px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 12px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 2px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__102.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.hotspot.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__102.ggUpdateText();
		player.addListener('changenode', function() {
			me.__102.ggUpdateText();
		});
		el.appendChild(els);
		me.__102.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me.__102.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((Math.min(Math.min(me.hotspot.pxp, 100 - me.hotspot.pxp), Math.min(me.hotspot.pyp, 100 - me.hotspot.pyp)) == 0))
			)
			{
				newLogicStatePosition = 0;
			}
			else if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStatePosition = 1;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__102.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__102.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__102.style.transition='left 0s, bottom 0s, width 0s, height 0s, background-color 0s';
				if (me.__102.ggCurrentLogicStatePosition == 0) {
					me.__102.style.left = 'calc(50% - (60px / 2))';
					me.__102.style.bottom='0px';
				}
				else if (me.__102.ggCurrentLogicStatePosition == 1) {
					me.__102.style.left = 'calc(50% - (60px / 2) + (0px / 2) + -5px)';
					me.__102.style.bottom='40px';
				}
				else {
					me.__102.style.left='calc(50% - ((60px + 0px) / 2) + 0px)';
					me.__102.style.bottom='-40px';
				}
			}
		}
		me.__102.logicBlock_position();
		me.__102.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 420))
			)
			{
				newLogicStateSize = 0;
			}
			else if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateSize = 1;
			}
			else if (
				((player._(me.ggUserdata.information) == "\ub113\uac8c"))
			)
			{
				newLogicStateSize = 2;
			}
			else if (
				((player._(me.ggUserdata.information) == "\ub354\ub113\uac8c"))
			)
			{
				newLogicStateSize = 3;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me.__102.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__102.ggCurrentLogicStateSize = newLogicStateSize;
				me.__102.style.transition='left 0s, bottom 0s, width 0s, height 0s, background-color 0s';
				if (me.__102.ggCurrentLogicStateSize == 0) {
					me.__102.style.width='50px';
					me.__102.style.height='25px';
					me.__102.style.left = 'calc(50% - (50px / 2))';
					skin.updateSize(me.__102);
				}
				else if (me.__102.ggCurrentLogicStateSize == 1) {
					me.__102.style.width='50px';
					me.__102.style.height='25px';
					me.__102.style.left = 'calc(50% - (50px / 2))';
					skin.updateSize(me.__102);
				}
				else if (me.__102.ggCurrentLogicStateSize == 2) {
					me.__102.style.width='95px';
					me.__102.style.height='30px';
					me.__102.style.left = 'calc(50% - (95px / 2))';
					skin.updateSize(me.__102);
				}
				else if (me.__102.ggCurrentLogicStateSize == 3) {
					me.__102.style.width='95px';
					me.__102.style.height='30px';
					me.__102.style.left = 'calc(50% - (95px / 2))';
					skin.updateSize(me.__102);
				}
				else {
					me.__102.style.width='60px';
					me.__102.style.height='30px';
					me.__102.style.left = 'calc(50% - (60px / 2))';
					skin.updateSize(me.__102);
				}
			}
		}
		me.__102.logicBlock_size();
		me.__102.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize().width <= 460))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__102.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__102.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__102.style.transition='left 0s, bottom 0s, width 0s, height 0s, background-color 0s';
				if (me.__102.ggCurrentLogicStateVisible == 0) {
					me.__102.style.visibility="hidden";
					me.__102.ggVisible=false;
				}
				else if (me.__102.ggCurrentLogicStateVisible == 1) {
					me.__102.style.visibility="hidden";
					me.__102.ggVisible=false;
				}
				else {
					me.__102.style.visibility=(Number(me.__102.style.opacity)>0||!me.__102.style.opacity)?'inherit':'hidden';
					me.__102.ggVisible=true;
				}
			}
		}
		me.__102.logicBlock_visible();
		me.__102.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player._(me.hotspot.title) == "\uc5c6\uc74c"))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__102.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__102.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__102.style.transition='left 0s, bottom 0s, width 0s, height 0s, background-color 0s';
				if (me.__102.ggCurrentLogicStateBackgroundColor == 0) {
					me.__102.style.backgroundColor="rgba(0,0,0,0)";
				}
				else {
					me.__102.style.backgroundColor="rgba(0,0,0,0.54902)";
				}
			}
		}
		me.__102.logicBlock_backgroundcolor();
		me.__102.logicBlock_text = function() {
			var newLogicStateText;
			if (
				((player._(me.hotspot.title) == "\uc5c6\uc74c"))
			)
			{
				newLogicStateText = 0;
			}
			else {
				newLogicStateText = -1;
			}
			if (me.__102.ggCurrentLogicStateText != newLogicStateText) {
				me.__102.ggCurrentLogicStateText = newLogicStateText;
				me.__102.style.transition='left 0s, bottom 0s, width 0s, height 0s, background-color 0s';
				if (me.__102.ggCurrentLogicStateText == 0) {
					if (me.__102.ggUpdateText) {
					me.__102.ggUpdateText=function() {
						var params = [];
						var hs = player._("", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me.__102.ggUpdateText();
					} else {
						if (me.__102.ggUpdatePosition) me.__102.ggUpdatePosition();
					}
				}
				else {
					if (me.__102.ggUpdateText) {
					me.__102.ggUpdateText=function() {
						var params = [];
						params.push(String(player._(me.hotspot.title)));
						var hs = player._("%1", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me.__102.ggUpdateText();
					} else {
						if (me.__102.ggUpdatePosition) me.__102.ggUpdatePosition();
					}
				}
			}
		}
		me.__102.logicBlock_text();
		me.__102.ggUpdatePosition=function (useTransition) {
		}
		me._container_6.appendChild(me.__102);
		me._lottie_2.appendChild(me._container_6);
		me._ht_node.appendChild(me._lottie_2);
		me._lottie_2.logicBlock_position();
		me._lottie_2.logicBlock_size();
		me.__103.logicBlock_position();
		me.__103.logicBlock_size();
		me.__103.logicBlock_visible();
		me.__103.logicBlock_backgroundcolor();
		me.__103.logicBlock_text();
		me.__102.logicBlock_position();
		me.__102.logicBlock_size();
		me.__102.logicBlock_visible();
		me.__102.logicBlock_backgroundcolor();
		me.__102.logicBlock_text();
			me.ggEvent_activehotspotchanged=function() {
				me.__103.logicBlock_size();
				me.__103.logicBlock_backgroundcolor();
				me.__103.logicBlock_text();
				me.__102.logicBlock_size();
				me.__102.logicBlock_backgroundcolor();
				me.__102.logicBlock_text();
			};
			me.ggEvent_changenode=function() {
				me.__103.logicBlock_size();
				me.__103.logicBlock_backgroundcolor();
				me.__103.logicBlock_text();
				me.__102.logicBlock_size();
				me.__102.logicBlock_backgroundcolor();
				me.__102.logicBlock_text();
			};
			me.ggEvent_configloaded=function() {
				me._lottie_2.logicBlock_position();
				me._lottie_2.logicBlock_size();
				me.__103.logicBlock_size();
				me.__103.logicBlock_visible();
				me.__103.logicBlock_backgroundcolor();
				me.__103.logicBlock_text();
				me.__102.logicBlock_position();
				me.__102.logicBlock_size();
				me.__102.logicBlock_visible();
				me.__102.logicBlock_backgroundcolor();
				me.__102.logicBlock_text();
			};
			me.ggEvent_hotspotsupdated=function() {
				me.__103.logicBlock_position();
				me.__102.logicBlock_position();
			};
			me.ggEvent_sizechanged=function() {
				me._lottie_2.logicBlock_position();
				me._lottie_2.logicBlock_size();
				me.__103.logicBlock_size();
				me.__103.logicBlock_visible();
				me.__102.logicBlock_size();
				me.__102.logicBlock_visible();
			};
			me.hotspotTimerEvent=function() {
				setTimeout(function() { me.hotspotTimerEvent(); }, 10);
				me._ht_node.ggUpdateConditionTimer();
			}
			me.hotspotTimerEvent();
			me.__div = me._ht_node;
	};
	me.addSkinHotspot=function(hotspot) {
		var hsinst = null;
		{
				hotspot.skinid = 'ht_node';
				hsinst = new SkinHotspotClass_ht_node(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		}
		return hsinst;
	}
	me.removeSkinHotspots=function() {
		hotspotTemplates = [];
	}
	player.addListener('changenode', function() {
		me.ggUserdata=player.userdata;
		var newMarker=[];
		var id=player.getCurrentNode();
		var i,j;
		var tags=me.ggUserdata.tags;
		for (i=0;i<nodeMarker.length;i++) {
			var match=false;
			if ((nodeMarker[i].ggMarkerNodeId.length > 0) && (nodeMarker[i].ggMarkerNodeId.charAt(0)=='{') && (nodeMarker[i].ggMarkerNodeId.substr(1, nodeMarker[i].ggMarkerNodeId.length - 2)==id) && (id!='')) match=true;
			for(j=0;j<tags.length;j++) {
				if (nodeMarker[i].ggMarkerNodeId==tags[j]) match=true;
			}
			if (match) {
				newMarker.push(nodeMarker[i]);
			}
		}
		for(i=0;i<activeNodeMarker.length;i++) {
			if (newMarker.indexOf(activeNodeMarker[i])<0) {
				if (activeNodeMarker[i].ggMarkerNormal) {
					activeNodeMarker[i].ggMarkerNormal.style.visibility='inherit';
				}
				if (activeNodeMarker[i].ggMarkerActive) {
					activeNodeMarker[i].ggMarkerActive.style.visibility='hidden';
				}
				if (activeNodeMarker[i].ggDeactivate) {
					activeNodeMarker[i].ggDeactivate();
				}
				activeNodeMarker[i].ggIsMarkerActive=false;
			}
		}
		for(i=0;i<newMarker.length;i++) {
			if (activeNodeMarker.indexOf(newMarker[i])<0) {
				if (newMarker[i].ggMarkerNormal) {
					newMarker[i].ggMarkerNormal.style.visibility='hidden';
				}
				if (newMarker[i].ggMarkerActive) {
					newMarker[i].ggMarkerActive.style.visibility='inherit';
				}
				if (newMarker[i].ggActivate) {
					newMarker[i].ggActivate();
				}
				newMarker[i].ggIsMarkerActive=true;
			}
		}
		activeNodeMarker=newMarker;
	});
	me.skinTimerEvent=function() {
		if (player.isInVR()) return;
		me.ggCurrentTime=new Date().getTime();
		me.__511.ggUpdateConditionTimer();
		me.__110.ggUpdateConditionTimer();
		me.__89.ggUpdateConditionTimer();
		me.__310.ggUpdateConditionTimer();
		me.__410.ggUpdateConditionTimer();
		me.__79.ggUpdateConditionTimer();
		me.__610.ggUpdateConditionTimer();
		me._on4.ggUpdateConditionTimer();
		me.__2on0.ggUpdateConditionTimer();
		me.__1on.ggUpdateConditionTimer();
		me.__4on.ggUpdateConditionTimer();
		me.__3on.ggUpdateConditionTimer();
		me.__2on.ggUpdateConditionTimer();
		me._on3.ggUpdateConditionTimer();
		me._on2.ggUpdateConditionTimer();
		me._on1.ggUpdateConditionTimer();
		me._on0.ggUpdateConditionTimer();
		me._vol_off.ggUpdateConditionTimer();
		me._vol_on.ggUpdateConditionTimer();
		me._image_16.ggUpdateConditionTimer();
		me.__29.ggUpdateConditionTimer();
	};
	player.addListener('timer', me.skinTimerEvent);
	me.addSkin();
	var style = document.createElement('style');
	style.type = 'text/css';
	style.appendChild(document.createTextNode('.ggskin { font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 14px; line-height: normal; } .ggmarkdown p,.ggmarkdown h1,.ggmarkdown h2,.ggmarkdown h3,.ggmarkdown h4 { margin-top: 0px } .ggmarkdown { white-space:normal } .menu-bar { background-image: linear-gradient(180deg, rgba(97, 101, 105, 0.4) 0%, rgba(97, 101, 105, 0.7) 98%); box-shadow: 0 12px 24px 0 rgb(0 0 0 / 10%); }'));
	document.head.appendChild(style);
	document.addEventListener('keyup', function(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			let activeElement = document.activeElement;
			if (activeElement.classList.contains('ggskin') && activeElement.onclick) activeElement.onclick();
		}
	});
	document.addEventListener('keydown', function(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			let activeElement = document.activeElement;
			if (activeElement.classList.contains('ggskin') && activeElement.onmousedown) activeElement.onmousedown();
		}
	});
	document.addEventListener('keyup', function(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			let activeElement = document.activeElement;
			if (activeElement.classList.contains('ggskin') && activeElement.onmouseup) activeElement.onmouseup();
		}
	});
	me.skinTimerEvent();
	document.fonts.onloadingdone = () => {
		me.updateSize(me.divSkin);
	}
};