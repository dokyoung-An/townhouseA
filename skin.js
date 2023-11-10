// Garden Gnome Software - Skin
// Pano2VR 7.0.6/20004
// Filename: coohome-version-?? ???A.ggsk
// Generated 2023-11-10T15:39:02

function pano2vrSkin(player,base) {
	player.addVariable('vis_catagory', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_button', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_button2', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_type', 1, 135.00, { ignoreInState: 0  });
	player.addVariable('vis_mobilecatagory', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_circle', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_circle2', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_circle3', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_circle4', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_mobilemenu', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_mobiletype', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_typeD', 0, "\uc5f0\ub9bd\ud615D", { ignoreInState: 0  });
	player.addVariable('vis_hambegur', 2, false, { ignoreInState: 0  });
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
		el=me.__94=document.createElement('div');
		el.ggId="\uc544\ub798 \uba54\ub274\ubc14";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='z-index: 999;';
		hs+='bottom : 0px;';
		hs+='height : 72px;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		hs+='padding:15px; box-sizing:border-box; over-flow:hidden;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__94.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__94.logicBlock_visible = function() {
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
			if (me.__94.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__94.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__94.style.transition='';
				if (me.__94.ggCurrentLogicStateVisible == 0) {
					me.__94.style.visibility="hidden";
					me.__94.ggVisible=false;
				}
				else if (me.__94.ggCurrentLogicStateVisible == 1) {
					me.__94.style.visibility="hidden";
					me.__94.ggVisible=false;
				}
				else if (me.__94.ggCurrentLogicStateVisible == 2) {
					me.__94.style.visibility="hidden";
					me.__94.ggVisible=false;
				}
				else {
					me.__94.style.visibility=(Number(me.__94.style.opacity)>0||!me.__94.style.opacity)?'inherit':'hidden';
					me.__94.ggVisible=true;
				}
			}
		}
		me.__94.logicBlock_visible();
		me.__94.ggUpdatePosition=function (useTransition) {
		}
		el=me.__95=document.createElement('div');
		el.ggId="\uc804\uccb4\ubc30\uacbd";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle menu-bar";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 8px 8px 0px 0px;';
		hs+='bottom : 0%;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((97% + 0px) / 2) + 0%);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 97%;';
		hs+='pointer-events:auto;';
		hs+='background: linear-gradient(180deg, rgba(97, 101, 105, 0.4) 0%, rgba(97, 101, 105, 0.7) 98%); box-shadow: 0 12px 24px 0 rgb(0 0 0 \/ 10%); min-width:750px; box-sizing:border-box;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__95.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__95.ggUpdatePosition=function (useTransition) {
		}
		el=me.__223=document.createElement('div');
		el.ggId="\uc544\uc774\ucf58 \ucee8\ud14c\uc774\ub108 2";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 72px;';
		hs+='position : absolute;';
		hs+='right : 216px;';
		hs+='top : calc(50% - ((72px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 89px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__223.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__223.onclick=function (e) {
			me.__73.ggVisible = !me.__73.ggVisible;
			var flag=me.__73.ggVisible;
			me.__73.style.transition='none';
			me.__73.style.visibility=((flag)&&(Number(me.__73.style.opacity)>0||!me.__73.style.opacity))?'inherit':'hidden';
		}
		me.__223.onmouseover=function (e) {
			me.elementMouseOver['_223']=true;
			me.__224.logicBlock_backgroundcolor();
		}
		me.__223.onmouseout=function (e) {
			me.elementMouseOver['_223']=false;
			me.__224.logicBlock_backgroundcolor();
		}
		me.__223.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['_223']) {
				me.elementMouseOver['_223']=true;
				me.__224.logicBlock_backgroundcolor();
			}
		}
		me.__223.ggUpdatePosition=function (useTransition) {
		}
		el=me.__224=document.createElement('div');
		el.ggId="\uc544\uc774\ucf58 \ubc30\uacbd 2";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='margin-left:4px; padding:5px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__224.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__224.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['_223'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__224.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__224.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__224.style.transition='background-color 500ms ease 0ms';
				if (me.__224.ggCurrentLogicStateBackgroundColor == 0) {
					me.__224.style.backgroundColor="rgba(77,77,77,0.784314)";
				}
				else {
					me.__224.style.backgroundColor="rgba(255,255,255,0)";
				}
			}
		}
		me.__224.logicBlock_backgroundcolor();
		me.__224.onmouseover=function (e) {
			me.elementMouseOver['_224']=true;
			me._image_2.logicBlock_alpha();
		}
		me.__224.onmouseout=function (e) {
			me.elementMouseOver['_224']=false;
			me._image_2.logicBlock_alpha();
		}
		me.__224.ggCurrentLogicStateBackgroundColor = -1;
		me.__224.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['_224']) {
				me.elementMouseOver['_224']=true;
				me._image_2.logicBlock_alpha();
			}
		}
		me.__224.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_2=document.createElement('div');
		els=me._image_2__img=document.createElement('img');
		els.className='ggskin ggskin_image_2';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAAA1xJREFUeF7tnW1W4zAMAOOTLZyM5WQLJ/M+Q3jQNCSSbMlqO/xFkZWZ2PlynbLwl4pASVUNxSwISXYQIAQhyQgkK4cegpBkBJKVQw9BSDICycqhh9yykFrrv2VZnpLtw62U81pK+XtWrLiH1FpbspezhPz/kMBbKeX5KEIjpAK7n0Ap5ZA5QvoZqzJ4C3lTVRMXvHeem1HrVR2eQk7Hwzj+ly3VWrfD65Ra9y6CEPLpCiGzekdrlx4yk/5O2whByC4BziErFnoIPYQecnQM0EPoIfQQekiSu19JZ2TIklAKjEFIIGxJUwiRUAqMQUggbElTCJFQCoxBSCBsSVMIkVAKjEFIIGxJUwiRUAqMQUggbElTCJFQCoxBSCBsSVMIkV'+
			'AKjNkRIppXO7pEXuGuRHdAIGT00abNt04O/7MsS5MxY9Zim4509WuBh5wop5XnFY8QL7LGvAgxgvPaDCFeZI15EWIE57UZQrzIGvMixAjOazOEeJE15kWIEZzXZgjZkK21Ps26S2+lIOSHkM0DxucZYhDy/XBxu8gBvzH0GpcleS1HpiSvNsZSR8/CAVOOOgkUCwhJXm2MpQ6EaCkr4hHyfQ5Rv4dQcBaHIgQhx0sNiQ+lwYG/rOt1uCzS4BK+0rXlrC7WO3nIN4aZF1pDiNOhb02LECs5p+0eVUgbt9uVVra/0+lId3kf8mVhnQo0UkqbVrRdlKxNMXoXNNJupE+nI921EAEkVcgvC4EOfXCJEIUShChgRYSmF9KmaXqCkIy5nu1vc2cXEsXi9MokqpD2BnJ79XZ2Gautreccom2rJ37oibOnkM2byOEHC0IMdtah'+
			'S3QZq01/E0JGDwtaSJHxvUJOb3Q6d2babzs66zZv3iMk7StcM40EGyIkgYSfJSAEIckIJCuHHoKQZASSlUMPQUgyAspy1udZbTbJu+Sra8r08s93Z1k/RLuDI+N3nvYOvxdjyFIYs8xEVKT/CEWIghhCFLAiQhESQVnRBkIUsCJCswtpDLwfv0dw1rSh/lCkJnnvSV3b1l3Gj3551nOVdZeAtTs1UwjfUr+2NW+SQ6uFb6pfGBl+l646h2i7MvE2AuJziC09W2kJIERLzDkeIc6AtekRoiXmHI8QZ8Da9AjREnOOR4gzYG36/3AERZKrMvjRAAAAAElFTkSuQmCC';
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
		el.ggId="Image 2";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((20px + 0px) / 2) + 0px);';
		hs+='opacity : 0.7;';
		hs+='position : absolute;';
		hs+='top : 16px;';
		hs+='visibility : inherit;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_2.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['_224'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._image_2.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._image_2.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._image_2.style.transition='opacity 500ms ease 0ms';
				if (me._image_2.ggCurrentLogicStateAlpha == 0) {
					me._image_2.style.visibility=me._image_2.ggVisible?'inherit':'hidden';
					me._image_2.style.opacity=1;
				}
				else {
					me._image_2.style.visibility=me._image_2.ggVisible?'inherit':'hidden';
					me._image_2.style.opacity=0.7;
				}
			}
		}
		me._image_2.logicBlock_alpha();
		me._image_2.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_2=document.createElement('div');
		els=me._text_2__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 2";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : -25px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((100px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
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
		hs+='font-size: 12px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_2.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ud3c9\uba74\ub3c4", params);
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
		me._text_2.ggUpdatePosition=function (useTransition) {
		}
		me._image_2.appendChild(me._text_2);
		me.__224.appendChild(me._image_2);
		me.__223.appendChild(me.__224);
		me.__95.appendChild(me.__223);
		el=me.__313=document.createElement('div');
		el.ggId="\uc544\uc774\ucf58 \ucee8\ud14c\uc774\ub108 3";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 72px;';
		hs+='position : absolute;';
		hs+='right : 123px;';
		hs+='top : calc(50% - ((72px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 89px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__313.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__313.onmouseover=function (e) {
			me.elementMouseOver['_313']=true;
			me.__314.logicBlock_backgroundcolor();
		}
		me.__313.onmouseout=function (e) {
			me.elementMouseOver['_313']=false;
			me.__314.logicBlock_backgroundcolor();
		}
		me.__313.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['_313']) {
				me.elementMouseOver['_313']=true;
				me.__314.logicBlock_backgroundcolor();
			}
		}
		me.__313.ggUpdatePosition=function (useTransition) {
		}
		el=me.__314=document.createElement('div');
		el.ggId="\uc544\uc774\ucf58 \ubc30\uacbd 3";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='margin-left:4px; padding:5px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__314.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__314.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['_313'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__314.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__314.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__314.style.transition='background-color 500ms ease 0ms';
				if (me.__314.ggCurrentLogicStateBackgroundColor == 0) {
					me.__314.style.backgroundColor="rgba(77,77,77,0.784314)";
				}
				else {
					me.__314.style.backgroundColor="rgba(255,255,255,0)";
				}
			}
		}
		me.__314.logicBlock_backgroundcolor();
		me.__314.onclick=function (e) {
			player.toggleMuted("_main");
		}
		me.__314.onmouseover=function (e) {
			me.elementMouseOver['_314']=true;
			me._image_3.logicBlock_alpha();
			me._image_31.logicBlock_alpha();
		}
		me.__314.onmouseout=function (e) {
			me.elementMouseOver['_314']=false;
			me._image_3.logicBlock_alpha();
			me._image_31.logicBlock_alpha();
		}
		me.__314.ggCurrentLogicStateBackgroundColor = -1;
		me.__314.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['_314']) {
				me.elementMouseOver['_314']=true;
				me._image_3.logicBlock_alpha();
				me._image_31.logicBlock_alpha();
			}
		}
		me.__314.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_3=document.createElement('div');
		els=me._image_3__img=document.createElement('img');
		els.className='ggskin ggskin_image_3';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAABNlJREFUeF7tnGF2ozAMhOFk255styfb7sm8zy3pI2AJSR4HkUx/u8KZzyNZNsk88S+VAnOq2XAyE4EkWwQEQiDJFEg2HTqEQJIpkGw6dAiBJFMg2XToEAJJpkCy6dAhBJJMgWTToUMIJJkCyaZDhxBIMgWSTYcOIZBkCiSbDh1CIMkUSDYdOoRAkimQbDp0iAFIKeXPNE2f8zx/GoZ3DSGQA/lKKWU1pEJ571L84J8vD2Tk6l1i/95oOBTKZYGUUt6mafp7E2ueZ/hnEYDUR37M81zTGPwP/iHgM2wEbAk1CMgd9M1UhkC5FJDFFTWFVKHu/kYAqQ9QXDLEKZcBciDMNArIAqWmxt0iWFbEO3L3lR6I5oq1RUYCWaCsd1vrR0'+
			'NTV2ogR65AAVmeU10mFurtJmJUPUkLxAOjihN1yKbPUOuCNqfo83e18BG7Is8zvCB6tr3KqhfrwuitcCqHRGFEHaI8T2z+tNSFcEkKID0gehwSLdYjXXI6EASMqEN6+oxG7flaG70uOQ0ICkSvQ46gSAIr8+/qS04BgoaBWJmRNCS4pKsv6QKyfIhfyi7q33ZvX0rRul7Phsx0dLIU4dpl1yOXep9RBWvea3jTkPBZuk6Dw0CkyW8U3U3uBCCtBdBMK16XSON76kgIyEHXumZyKhBlntq2tnVE0hyvxA+nrSiQesSwvbhppZtTgRwcDDZF8656dB15BSDi4mmlFu+q9wI8KpJPD+RgWyu5xJO2msCjdeQlgGgdueASs8iSowjk4E7d08h50lDkgFJLW6/kEOl+fJe2PCJ7xh7Vj68G1zJoO8bRaZ++y1rP3boj8ops'+
			'jWvR+tWAtJpEqcdoFXapoWyNDfUiBPL9iujubURh1ROIxebWw0VragGlrNCp78s4xNPweYB4xloW1ysBkTr23Ur29BYEIiwzrRHz3oNLJ9KeoxY2hkpjqBz5SwXdsxszd/VMWd/v5movTJvT1TRN0g6reeFGhwgOUdwhHSxKN5qeLW/41vDpi7qw1R19QRXa8oaPTg7eZ0pzY6gcvaOucF1uGlZDlg96e3FAek2/Djv9LGvz9vyH9OVN705MuY0Mp6suh1hot8ZYv17gjR8torfnBGqN+fTY81lCNcTzAGms48TY9LgeIJG32hWA4fpxikM2x+GWtDcUSOQra5G3WUwfInofYg1uHYdwS9Qhyvtl2k5MKuahI/e1TqelrMalV5dbIkAiKz3yP9aFeXrKEoq+9Z2vu38PAjEfOBqKf1ftuMVP45De2hIBIvRTkW9PdW'+
			'11U6asXrdEgax6qreOL31C3JEyZUVrSw8QS46PFH9L3O2YlCkr4paRQA7e2Ie54xIOadSWnx+cucu9A358Zkln2iaje5t7WYdswOz6gBEOedSPBVymqGs5+EE/zyQ1gLBd1VM4pOGW3VfnIgW1saFopathMC5XQxAie2M0Cjq0iD+dQ7wCR8bfvjg66lfknqKGRIS9wv9cpg+5gpiIORIIQkVgDAIBiokIRSAIFYExCAQoJiIUgSBUBMYgEKCYiFAEglARGINAgGIiQhEIQkVgDAIBiokIRSAIFYExCAQoJiIUgSBUBMYgEKCYiFAEglARGINAgGIiQhEIQkVgDAIBiokIRSAIFYExCAQoJiIUgSBUBMb4D+eAW5J5Vh+GAAAAAElFTkSuQmCC';
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
		el.ggId="Image 3";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((20px + 0px) / 2) + 0px);';
		hs+='opacity : 0.7;';
		hs+='position : absolute;';
		hs+='top : 16px;';
		hs+='visibility : inherit;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_3.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['_314'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._image_3.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._image_3.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._image_3.style.transition='opacity 500ms ease 0ms';
				if (me._image_3.ggCurrentLogicStateAlpha == 0) {
					me._image_3.style.visibility=me._image_3.ggVisible?'inherit':'hidden';
					me._image_3.style.opacity=1;
				}
				else {
					me._image_3.style.visibility=me._image_3.ggVisible?'inherit':'hidden';
					me._image_3.style.opacity=0.7;
				}
			}
		}
		me._image_3.logicBlock_alpha();
		me._image_3.onclick=function (e) {
			me._image_31.style.transition='none';
			me._image_31.style.visibility=(Number(me._image_31.style.opacity)>0||!me._image_31.style.opacity)?'inherit':'hidden';
			me._image_31.ggVisible=true;
			me._image_3.style.transition='none';
			me._image_3.style.visibility='hidden';
			me._image_3.ggVisible=false;
		}
		me._image_3.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_3=document.createElement('div');
		els=me._text_3__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 3";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : -25px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((100px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
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
		hs+='font-size: 12px;';
		hs+='font-weight: inherit;';
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
			var hs = player._("\ubc30\uacbd\uc74c\uc545 \ucf1c\uae30", params);
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
		me._text_3.ggUpdatePosition=function (useTransition) {
		}
		me._image_3.appendChild(me._text_3);
		me.__314.appendChild(me._image_3);
		el=me._image_31=document.createElement('div');
		els=me._image_31__img=document.createElement('img');
		els.className='ggskin ggskin_image_31';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAAAwtJREFUeF7tnG1yhCAQROFm2ZMlOVn2ZqSowi3zwTKDQ6qjzz/5M2CnHw2KujlxSDmQpdQgJgFEbBAABCBiDojJISEAEXNATA4JAYiYA2JySAhAxBwQk0NCACLmgJgcEgIQMQfE5JAQgIg5ICaHhABEzAExOSQEIGIOiMkhIQARc0BMDgkBiJgDYnJOl5BSyltK6Z5zvot5bZJzGiCllJeU0mtKqf6tx+0/QjkFkJaKCmN/AMSUycCiX1IBkEB/XV11UgEQl4tBxaWUj91a0euVKSvI7243hlSQkNUQtv6dMLjKWgVmAsQmhSkrGsoBGCQkEsZBECREEAYJOQolKBVcZR0FUdsvgEFCrMbmnL/sny2CARDj3XNSAvJtMLznnO'+
			'vW/fCYbTfsOKWYz6LbJl/dzhgeKkA6yRxCmW03NKYVhGy/e6YdISClY1IXyuD/DLkRvSQQQ6J/QDEMOoAMpoGnBhkMfkDx1Fqnpl7dJRPi2LB8b7Xfn0bu/RyuOx5IlwZivVR/YmgojHqeywM5ACUcBkB2Q9+wTiybpvYdkxA/lCXJ2GQABCCae1lMWW1kOo3wXEGab9QmNSyZui4/ZU3C2AZGOJRLAzHA4MbQMyexddJxwDDSHi3/wW5v1crmYmAytq66i/pgt3d2+z1kPYlaQ+o3GTygChhVIUDafpDlBWge4Q6ghQHZQXl6ypzzbV/gWX+cA9B0HzL7CVyb9uoAC/10LhSI07BH+SIoJiCzmle1kwDS0mVeh4xmAMRo1NMy6+tEhnMBxGCSqcTwEoKlH4BYXPLUHEwLQDxmW2sPLPgAsZrsrRt8/tzrDiBeo731'+
			'zrQAxGvwTL0jLQCZMXi2jSEtAJk1d7YdP60x69zidvz4zGKDZ7rn55lmXPuDNg3Mi/VrqD+Q5DqFzOaiS/WJiwEiBhcgABFzQEwOCQGImANickgIQMQcEJNDQgAi5oCYHBICEDEHxOSQEICIOSAmh4QARMwBMTkkBCBiDojJISEAEXNATA4JAYiYA2JySAhAxBwQk0NCxIB8AvU38nQiVY9jAAAAAElFTkSuQmCC';
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
		el.ggId="Image 3-1";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((20px + 0px) / 2) + 0px);';
		hs+='opacity : 0.7;';
		hs+='position : absolute;';
		hs+='top : 16px;';
		hs+='visibility : hidden;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_31.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_31.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['_314'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._image_31.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._image_31.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._image_31.style.transition='opacity 500ms ease 0ms';
				if (me._image_31.ggCurrentLogicStateAlpha == 0) {
					me._image_31.style.visibility=me._image_31.ggVisible?'inherit':'hidden';
					me._image_31.style.opacity=1;
				}
				else {
					me._image_31.style.visibility=me._image_31.ggVisible?'inherit':'hidden';
					me._image_31.style.opacity=0.7;
				}
			}
		}
		me._image_31.logicBlock_alpha();
		me._image_31.onclick=function (e) {
			me._image_3.style.transition='none';
			me._image_3.style.visibility=(Number(me._image_3.style.opacity)>0||!me._image_3.style.opacity)?'inherit':'hidden';
			me._image_3.ggVisible=true;
			me._image_31.style.transition='none';
			me._image_31.style.visibility='hidden';
			me._image_31.ggVisible=false;
		}
		me._image_31.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_31=document.createElement('div');
		els=me._text_31__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 3-1";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : -25px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((100px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
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
		hs+='font-size: 12px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_31.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ubc30\uacbd\uc74c\uc545 \ub044\uae30", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_31.ggUpdateText();
		el.appendChild(els);
		me._text_31.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_31.ggUpdatePosition=function (useTransition) {
		}
		me._image_31.appendChild(me._text_31);
		me.__314.appendChild(me._image_31);
		me.__313.appendChild(me.__314);
		me.__95.appendChild(me.__313);
		el=me.__412=document.createElement('div');
		el.ggId="\uc544\uc774\ucf58 \ucee8\ud14c\uc774\ub108 4";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 72px;';
		hs+='position : absolute;';
		hs+='right : 30px;';
		hs+='top : calc(50% - ((72px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 89px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__412.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__412.onclick=function (e) {
			me.__96.ggVisible = !me.__96.ggVisible;
			var flag=me.__96.ggVisible;
			me.__96.style.transition='none';
			me.__96.style.visibility=((flag)&&(Number(me.__96.style.opacity)>0||!me.__96.style.opacity))?'inherit':'hidden';
		}
		me.__412.onmouseover=function (e) {
			me.elementMouseOver['_412']=true;
			me.__413.logicBlock_backgroundcolor();
		}
		me.__412.onmouseout=function (e) {
			me.elementMouseOver['_412']=false;
			me.__413.logicBlock_backgroundcolor();
		}
		me.__412.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['_412']) {
				me.elementMouseOver['_412']=true;
				me.__413.logicBlock_backgroundcolor();
			}
		}
		me.__412.ggUpdatePosition=function (useTransition) {
		}
		el=me.__413=document.createElement('div');
		el.ggId="\uc544\uc774\ucf58 \ubc30\uacbd 4";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='margin-left:4px; padding:5px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__413.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__413.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['_412'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__413.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__413.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__413.style.transition='background-color 500ms ease 0ms';
				if (me.__413.ggCurrentLogicStateBackgroundColor == 0) {
					me.__413.style.backgroundColor="rgba(77,77,77,0.784314)";
				}
				else {
					me.__413.style.backgroundColor="rgba(255,255,255,0)";
				}
			}
		}
		me.__413.logicBlock_backgroundcolor();
		me.__413.onmouseover=function (e) {
			me.elementMouseOver['_413']=true;
			me._image_4.logicBlock_alpha();
		}
		me.__413.onmouseout=function (e) {
			me.elementMouseOver['_413']=false;
			me._image_4.logicBlock_alpha();
		}
		me.__413.ggCurrentLogicStateBackgroundColor = -1;
		me.__413.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['_413']) {
				me.elementMouseOver['_413']=true;
				me._image_4.logicBlock_alpha();
			}
		}
		me.__413.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_4=document.createElement('div');
		els=me._image_4__img=document.createElement('img');
		els.className='ggskin ggskin_image_4';
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
		el.ggId="Image 4";
		el.ggDx=-5;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((20px + 0px) / 2) - 5px);';
		hs+='opacity : 0.7;';
		hs+='position : absolute;';
		hs+='top : 16px;';
		hs+='visibility : inherit;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_4.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['_413'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._image_4.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._image_4.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._image_4.style.transition='opacity 500ms ease 0ms';
				if (me._image_4.ggCurrentLogicStateAlpha == 0) {
					me._image_4.style.visibility=me._image_4.ggVisible?'inherit':'hidden';
					me._image_4.style.opacity=1;
				}
				else {
					me._image_4.style.visibility=me._image_4.ggVisible?'inherit':'hidden';
					me._image_4.style.opacity=0.7;
				}
			}
		}
		me._image_4.logicBlock_alpha();
		me._image_4.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_4=document.createElement('div');
		els=me._text_4__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 4";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : -25px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((100px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
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
		hs+='font-size: 12px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_4.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ub354\ubcf4\uae30", params);
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
		me._image_4.appendChild(me._text_4);
		me.__413.appendChild(me._image_4);
		me.__412.appendChild(me.__413);
		el=me.__96=document.createElement('div');
		el.ggId="\uc790\ub3d9\ud68c\uc804";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((89px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : -120%;';
		hs+='visibility : hidden;';
		hs+='width : 89px;';
		hs+='pointer-events:none;';
		hs+='margin-left:4px; padding:5px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__96.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__96.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_1=document.createElement('div');
		el.ggId="Rectangle 1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(77,77,77,0.784314);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 6px;';
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
		el=me._image_8=document.createElement('div');
		els=me._image_8__img=document.createElement('img');
		els.className='ggskin ggskin_image_8';
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
		el.ggId="Image 8";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 30px;';
		hs+='left : calc(50% - ((30px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 16px;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
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
		me._image_8.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_6=document.createElement('div');
		els=me._text_6__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 6";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : -25px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((100px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 12px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_6.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc790\ub3d9\ud68c\uc804", params);
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
		me._image_8.appendChild(me._text_6);
		me._rectangle_1.appendChild(me._image_8);
		me.__96.appendChild(me._rectangle_1);
		me.__412.appendChild(me.__96);
		me.__95.appendChild(me.__412);
		el=me.__124=document.createElement('div');
		el.ggId="\uc544\uc774\ucf58 \ucee8\ud14c\uc774\ub108 1";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 72px;';
		hs+='position : absolute;';
		hs+='right : 309px;';
		hs+='top : calc(50% - ((72px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 89px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__124.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__124.onclick=function (e) {
			player.setVariableValue('vis_catagory', !player.getVariableValue('vis_catagory'));
			player.setVariableValue('vis_button2', true);
		}
		me.__124.onmouseover=function (e) {
			me.elementMouseOver['_124']=true;
			me.__125.logicBlock_backgroundcolor();
		}
		me.__124.onmouseout=function (e) {
			me.elementMouseOver['_124']=false;
			me.__125.logicBlock_backgroundcolor();
		}
		me.__124.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['_124']) {
				me.elementMouseOver['_124']=true;
				me.__125.logicBlock_backgroundcolor();
			}
		}
		me.__124.ggUpdatePosition=function (useTransition) {
		}
		el=me.__125=document.createElement('div');
		el.ggId="\uc544\uc774\ucf58 \ubc30\uacbd 1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='margin-left:4px; padding:5px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__125.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__125.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['_124'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__125.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__125.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__125.style.transition='background-color 500ms ease 0ms';
				if (me.__125.ggCurrentLogicStateBackgroundColor == 0) {
					me.__125.style.backgroundColor="rgba(77,77,77,0.784314)";
				}
				else {
					me.__125.style.backgroundColor="rgba(255,255,255,0)";
				}
			}
		}
		me.__125.logicBlock_backgroundcolor();
		me.__125.onclick=function (e) {
			me.__pc.ggVisible = !me.__pc.ggVisible;
			var flag=me.__pc.ggVisible;
			me.__pc.style.transition='none';
			me.__pc.style.visibility=((flag)&&(Number(me.__pc.style.opacity)>0||!me.__pc.style.opacity))?'inherit':'hidden';
		}
		me.__125.onmouseover=function (e) {
			me.elementMouseOver['_125']=true;
			me._image_1.logicBlock_alpha();
		}
		me.__125.onmouseout=function (e) {
			me.elementMouseOver['_125']=false;
			me._image_1.logicBlock_alpha();
		}
		me.__125.ggCurrentLogicStateBackgroundColor = -1;
		me.__125.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['_125']) {
				me.elementMouseOver['_125']=true;
				me._image_1.logicBlock_alpha();
			}
		}
		me.__125.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_1=document.createElement('div');
		els=me._image_1__img=document.createElement('img');
		els.className='ggskin ggskin_image_1';
		hs='data:image/png;base64,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'+
			'Mws4U+df5sLYklDQHLQAAAAASUVORK5CYII=';
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
		el.ggId="Image 1";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((20px + 0px) / 2) + 0px);';
		hs+='opacity : 0.7;';
		hs+='position : absolute;';
		hs+='top : 16px;';
		hs+='visibility : inherit;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_1.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['_125'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._image_1.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._image_1.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._image_1.style.transition='opacity 500ms ease 0ms';
				if (me._image_1.ggCurrentLogicStateAlpha == 0) {
					me._image_1.style.visibility=me._image_1.ggVisible?'inherit':'hidden';
					me._image_1.style.opacity=1;
				}
				else {
					me._image_1.style.visibility=me._image_1.ggVisible?'inherit':'hidden';
					me._image_1.style.opacity=0.7;
				}
			}
		}
		me._image_1.logicBlock_alpha();
		me._image_1.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_1=document.createElement('div');
		els=me._text_1__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 1";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : -25px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((100px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
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
		hs+='font-size: 12px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_1.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uacf5\uac04 \uc120\ud0dd", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_1.ggUpdateText();
		el.appendChild(els);
		me._text_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_1.ggUpdatePosition=function (useTransition) {
		}
		me._image_1.appendChild(me._text_1);
		me.__125.appendChild(me._image_1);
		me.__124.appendChild(me.__125);
		me.__95.appendChild(me.__124);
		me.__94.appendChild(me.__95);
		me.divSkin.appendChild(me.__94);
		el=me.__90=document.createElement('div');
		el.ggId="\uacf5\uac04\uc120\ud0dd";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : -200px;';
		hs+='height : 140px;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__90.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__90.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('vis_catagory') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__90.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__90.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__90.style.transition='left 1000ms ease 0ms, bottom 1000ms ease 0ms';
				if (me.__90.ggCurrentLogicStatePosition == 0) {
					me.__90.style.left = 'calc(50% - (100% / 2))';
					me.__90.style.bottom='120px';
				}
				else {
					me.__90.style.left='calc(50% - ((100% + 0px) / 2) + 0px)';
					me.__90.style.bottom='-200px';
				}
			}
		}
		me.__90.logicBlock_position();
		me.__90.logicBlock_visible = function() {
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
			if (me.__90.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__90.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__90.style.transition='left 1000ms ease 0ms, bottom 1000ms ease 0ms';
				if (me.__90.ggCurrentLogicStateVisible == 0) {
					me.__90.style.visibility="hidden";
					me.__90.ggVisible=false;
				}
				else if (me.__90.ggCurrentLogicStateVisible == 1) {
					me.__90.style.visibility="hidden";
					me.__90.ggVisible=false;
				}
				else {
					me.__90.style.visibility=(Number(me.__90.style.opacity)>0||!me.__90.style.opacity)?'inherit':'hidden';
					me.__90.ggVisible=true;
				}
			}
		}
		me.__90.logicBlock_visible();
		me.__90.ggUpdatePosition=function (useTransition) {
		}
		el=me.__91=document.createElement('div');
		el.ggId="\uacf5\uac04\uc120\ud0dd \ubc30\uacbd";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='padding: 16px 0; background: rgba(25,29,33,.5); backdrop-filter: blur(10px); box-shadow: 0 12px 24px 0 rgb(0 0 0 \/ 10%);';
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
		me.__91.ggUpdatePosition=function (useTransition) {
		}
		el=me.__92=document.createElement('div');
		el.ggId="\uacf5\uac04";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
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
		me.__92.ggUpdatePosition=function (useTransition) {
		}
		el=me._scrollarea_1=document.createElement('div');
		els=me._scrollarea_1__content=document.createElement('div');
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
		hs+='height : 105px;';
		hs+='left : 0px;';
		hs+='overflow-x : visible;';
		hs+='overflow-y : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='width : 130px;';
		hs+="";
		els.setAttribute('style',hs);
		me._scrollarea_1.ggScrollByX = function(diffX) {
			if(!me._scrollarea_1.ggHorScrollVisible || diffX == 0 || me._scrollarea_1.ggHPercentVisible >= 1.0) return;
			me._scrollarea_1.ggScrollPosX = (me._scrollarea_1__horScrollFg.offsetLeft + diffX);
			me._scrollarea_1.ggScrollPosX = Math.max(me._scrollarea_1.ggScrollPosX, 0);
			me._scrollarea_1.ggScrollPosX = Math.min(me._scrollarea_1.ggScrollPosX, me._scrollarea_1__horScrollBg.offsetWidth - me._scrollarea_1__horScrollFg.offsetWidth);
			me._scrollarea_1__horScrollFg.style.left = me._scrollarea_1.ggScrollPosX + 'px';
			let percentScrolled = me._scrollarea_1.ggScrollPosX / (me._scrollarea_1__horScrollBg.offsetWidth - me._scrollarea_1__horScrollFg.offsetWidth);
			me._scrollarea_1__content.style.left = -(Math.round((me._scrollarea_1.ggContentWidth * (1.0 - me._scrollarea_1.ggHPercentVisible)) * percentScrolled)) + me._scrollarea_1.ggContentLeftOffset + 'px';
			me._scrollarea_1.ggScrollPosXPercent = (me._scrollarea_1__horScrollFg.offsetLeft / me._scrollarea_1__horScrollBg.offsetWidth);
		}
		me._scrollarea_1.ggScrollByXSmooth = function(diffX) {
			if(!me._scrollarea_1.ggHorScrollVisible || diffX == 0 || me._scrollarea_1.ggHPercentVisible >= 1.0) return;
			var scrollPerInterval = diffX / 25;
			var scrollCurrX = 0;
			var id = setInterval(function() {
				scrollCurrX += scrollPerInterval;
				me._scrollarea_1.ggScrollPosX += scrollPerInterval;
				if (diffX > 0 && (scrollCurrX >= diffX || me._scrollarea_1.ggScrollPosX >= me._scrollarea_1__horScrollBg.offsetWidth - me._scrollarea_1__horScrollFg.offsetWidth)) {
					me._scrollarea_1.ggScrollPosX = Math.min(me._scrollarea_1.ggScrollPosX, me._scrollarea_1__horScrollBg.offsetWidth - me._scrollarea_1__horScrollFg.offsetWidth);
					clearInterval(id);
				}
				if (diffX < 0 && (scrollCurrX <= diffX || me._scrollarea_1.ggScrollPosX <= 0)) {
					me._scrollarea_1.ggScrollPosX = Math.max(me._scrollarea_1.ggScrollPosX, 0);
					clearInterval(id);
				}
			me._scrollarea_1__horScrollFg.style.left = me._scrollarea_1.ggScrollPosX + 'px';
			let percentScrolled = me._scrollarea_1.ggScrollPosX / (me._scrollarea_1__horScrollBg.offsetWidth - me._scrollarea_1__horScrollFg.offsetWidth);
			me._scrollarea_1__content.style.left = -(Math.round((me._scrollarea_1.ggContentWidth * (1.0 - me._scrollarea_1.ggHPercentVisible)) * percentScrolled)) + me._scrollarea_1.ggContentLeftOffset + 'px';
			me._scrollarea_1.ggScrollPosXPercent = (me._scrollarea_1__horScrollFg.offsetLeft / me._scrollarea_1__horScrollBg.offsetWidth);
			}, 10);
		}
		me._scrollarea_1.ggScrollByY = function(diffY) {
			if(!me._scrollarea_1.ggVertScrollVisible || diffY == 0 || me._scrollarea_1.ggVPercentVisible >= 1.0) return;
			me._scrollarea_1.ggScrollPosY = (me._scrollarea_1__vertScrollFg.offsetTop + diffY);
			me._scrollarea_1.ggScrollPosY = Math.max(me._scrollarea_1.ggScrollPosY, 0);
			me._scrollarea_1.ggScrollPosY = Math.min(me._scrollarea_1.ggScrollPosY, me._scrollarea_1__vertScrollBg.offsetHeight - me._scrollarea_1__vertScrollFg.offsetHeight);
			me._scrollarea_1__vertScrollFg.style.top = me._scrollarea_1.ggScrollPosY + 'px';
			let percentScrolled = me._scrollarea_1.ggScrollPosY / (me._scrollarea_1__vertScrollBg.offsetHeight - me._scrollarea_1__vertScrollFg.offsetHeight);
			me._scrollarea_1__content.style.top = -(Math.round((me._scrollarea_1.ggContentHeight * (1.0 - me._scrollarea_1.ggVPercentVisible)) * percentScrolled)) + me._scrollarea_1.ggContentTopOffset + 'px';
			me._scrollarea_1.ggScrollPosYPercent = (me._scrollarea_1__vertScrollFg.offsetTop / me._scrollarea_1__vertScrollBg.offsetHeight);
		}
		me._scrollarea_1.ggScrollByYSmooth = function(diffY) {
			if(!me._scrollarea_1.ggVertScrollVisible || diffY == 0 || me._scrollarea_1.ggVPercentVisible >= 1.0) return;
			var scrollPerInterval = diffY / 25;
			var scrollCurrY = 0;
			var id = setInterval(function() {
				scrollCurrY += scrollPerInterval;
				me._scrollarea_1.ggScrollPosY += scrollPerInterval;
				if (diffY > 0 && (scrollCurrY >= diffY || me._scrollarea_1.ggScrollPosY >= me._scrollarea_1__vertScrollBg.offsetHeight - me._scrollarea_1__vertScrollFg.offsetHeight)) {
					me._scrollarea_1.ggScrollPosY = Math.min(me._scrollarea_1.ggScrollPosY, me._scrollarea_1__vertScrollBg.offsetHeight - me._scrollarea_1__vertScrollFg.offsetHeight);
					clearInterval(id);
				}
				if (diffY < 0 && (scrollCurrY <= diffY || me._scrollarea_1.ggScrollPosY <= 0)) {
					me._scrollarea_1.ggScrollPosY = Math.max(me._scrollarea_1.ggScrollPosY, 0);
					clearInterval(id);
				}
			me._scrollarea_1__vertScrollFg.style.top = me._scrollarea_1.ggScrollPosY + 'px';
			let percentScrolled = me._scrollarea_1.ggScrollPosY / (me._scrollarea_1__vertScrollBg.offsetHeight - me._scrollarea_1__vertScrollFg.offsetHeight);
			me._scrollarea_1__content.style.top = -(Math.round((me._scrollarea_1.ggContentHeight * (1.0 - me._scrollarea_1.ggVPercentVisible)) * percentScrolled)) + me._scrollarea_1.ggContentTopOffset + 'px';
			me._scrollarea_1.ggScrollPosYPercent = (me._scrollarea_1__vertScrollFg.offsetTop / me._scrollarea_1__vertScrollBg.offsetHeight);
			}, 10);
		}
		me._scrollarea_1.ggScrollIntoView = function(posX, posY, width, height) {
			if (me._scrollarea_1.ggHorScrollVisible) {
				if (posX < 0) {
					var diffX = Math.floor(posX * me._scrollarea_1.ggHPercentVisible);
					me._scrollarea_1.ggScrollByXSmooth(diffX);
				} else if (posX + width > me._scrollarea_1.clientWidth - (me._scrollarea_1.ggVertScrollVisible ? 0 : 0)) {
					var diffX = Math.ceil(((posX + width) - (me._scrollarea_1.clientWidth - (me._scrollarea_1.ggVertScrollVisible ? 0 : 0))) * me._scrollarea_1.ggHPercentVisible);
					me._scrollarea_1.ggScrollByXSmooth(diffX);
				}
			}
			if (me._scrollarea_1.ggVertScrollVisible) {
				if (posY < 0) {
					var diffY = Math.floor(posY * me._scrollarea_1.ggVPercentVisible);
					me._scrollarea_1.ggScrollByYSmooth(diffY);
				} else if (posY + height > me._scrollarea_1.clientHeight - (me._scrollarea_1.ggHorScrollVisible ? 0 : 0)) {
					var diffY = Math.ceil(((posY + height) - (me._scrollarea_1.clientHeight - (me._scrollarea_1.ggHorScrollVisible ? 0 : 0))) * me._scrollarea_1.ggVPercentVisible);
					me._scrollarea_1.ggScrollByYSmooth(diffY);
				}
			}
		}
		me._scrollarea_1__content.mousetouchend = e => {
			let inertiaInterval = setInterval(function() {
				me._scrollarea_1.ggDragInertiaX *= 0.65;
				me._scrollarea_1.ggDragInertiaY *= 0.65;
				me._scrollarea_1.ggScrollByX(me._scrollarea_1.ggDragInertiaX);
				me._scrollarea_1.ggScrollByY(me._scrollarea_1.ggDragInertiaY);
				if (Math.abs(me._scrollarea_1.ggDragInertiaX) < 1.0 && Math.abs(me._scrollarea_1.ggDragInertiaY) < 1.0) {
					clearInterval(inertiaInterval);
				}
				}, 50);
			me._scrollarea_1__content.onmouseup = null;
			me._scrollarea_1__content.onmousemove = null;
			me._scrollarea_1__content.ontouchend = null;
			me._scrollarea_1__content.ontouchmove = null;
			me._scrollarea_1__content.onpointerup = null;
			me._scrollarea_1__content.onpointermove = null;
			setTimeout(function() { me._scrollarea_1.ggIsDragging = false; }, 100);
		}
		me._scrollarea_1__content.mousetouchmove = e => {
			e = e || window.event;
			e.preventDefault();
			var t = e.touches;
			var eventX = t ? t[0].clientX : e.clientX;
			var eventY = t ? t[0].clientY : e.clientY;
			if (Math.abs(eventX - me._scrollarea_1.ggDragStartX) > 10 || Math.abs(eventY - me._scrollarea_1.ggDragStartY) > 10) me._scrollarea_1.ggIsDragging = true;
			var diffX = (eventX - me._scrollarea_1.ggDragLastX) * me._scrollarea_1.ggHPercentVisible;
			var diffY = (eventY - me._scrollarea_1.ggDragLastY) * me._scrollarea_1.ggVPercentVisible;
			me._scrollarea_1.ggDragInertiaX = -diffX;
			me._scrollarea_1.ggDragInertiaY = -diffY;
			me._scrollarea_1.ggDragLastX = eventX;
			me._scrollarea_1.ggDragLastY = eventY;
			me._scrollarea_1.ggScrollByX(-diffX);
			me._scrollarea_1.ggScrollByY(-diffY);
		}
		me._scrollarea_1__content.mousetouchstart = e => {
			e = e || window.event;
			var t = e.touches;
			me._scrollarea_1.ggDragLastX = me._scrollarea_1.ggDragStartX = t ? t[0].clientX : e.clientX;
			me._scrollarea_1.ggDragLastY = me._scrollarea_1.ggDragStartY = t ? t[0].clientY : e.clientY;
			me._scrollarea_1__content.onmouseup = me._scrollarea_1__content.mousetouchend;
			me._scrollarea_1__content.ontouchend = me._scrollarea_1__content.mousetouchend;
			me._scrollarea_1__content.onmousemove = me._scrollarea_1__content.mousetouchmove;
			me._scrollarea_1__content.ontouchmove = me._scrollarea_1__content.mousetouchmove;
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				me._scrollarea_1__content.onpointerup = me._scrollarea_1__content.ontouchend;
				me._scrollarea_1__content.onpointermove = me._scrollarea_1__content.ontouchmove;
			}
		}
		els.onmousedown = me._scrollarea_1__content.mousetouchstart;
		els.ontouchstart = me._scrollarea_1__content.mousetouchstart;
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			els.onpointerdown = me._scrollarea_1__content.mousetouchstart;
		}
		elHorScrollBg = me._scrollarea_1__horScrollBg = document.createElement('div');
		el.appendChild(elHorScrollBg);
		elHorScrollBg.setAttribute('style', 'position: absolute; left: 0px; bottom: 0px; visibility: hidden; width: 640px; height: 0px; background-color: rgba(128,128,128,1); pointer-events: auto;');
		elHorScrollBg.className='ggskin ggskin_scrollarea_hscrollbg';
		elHorScrollFg = me._scrollarea_1__horScrollFg = document.createElement('div');
		elHorScrollBg.appendChild(elHorScrollFg);
		elHorScrollFg.className='ggskin ggskin_scrollarea_hscrollfg';
		elHorScrollFg.setAttribute('style', 'position: absolute; left: 0px; top: 0px; visibility: hidden; width: 640px; height: 0px; background-color: rgba(192,192,192,1); pointer-events: auto;');
		me._scrollarea_1.ggScrollPosX = 0;
		me._scrollarea_1.ggScrollPosXPercent = 0.0;
		elHorScrollFg.onmousedown = function(e) {
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) return;
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			me._scrollarea_1.ggDragLastX = e.clientX;
			document.onmouseup = function() {
				let inertiaInterval = setInterval(function() {
					me._scrollarea_1.ggDragInertiaX *= 0.65;
					me._scrollarea_1.ggScrollByX(me._scrollarea_1.ggDragInertiaX);
					if (Math.abs(me._scrollarea_1.ggDragInertiaX) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 50);
				document.onmouseup = null;
				document.onmousemove = null;
			}
			document.onmousemove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var diffX = e.clientX - me._scrollarea_1.ggDragLastX;
				me._scrollarea_1.ggDragInertiaX = diffX;
				me._scrollarea_1.ggDragLastX = e.clientX;
				me._scrollarea_1.ggScrollByX(diffX);
			}
		}
		elHorScrollFg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			me._scrollarea_1.ggDragLastX = t ? t[0].clientX : e.clientX;
			document.ontouchend = function() {
				let inertiaInterval = setInterval(function() {
					me._scrollarea_1.ggDragInertiaX *= 0.65;
					me._scrollarea_1.ggScrollByX(me._scrollarea_1.ggDragInertiaX);
					if (Math.abs(me._scrollarea_1.ggDragInertiaX) < 1.0) {
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
				var diffX = (t ? t[0].clientX : e.clientX) - me._scrollarea_1.ggDragLastX;
				me._scrollarea_1.ggDragInertiaX = diffX;
				me._scrollarea_1.ggDragLastX = t ? t[0].clientX : e.clientX;
				me._scrollarea_1.ggScrollByX(diffX);
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
			var diffX = me._scrollarea_1.ggScrollWidth;
			if (e.offsetX < me._scrollarea_1.ggScrollPosX) {
				diffX = diffX * -1;
			}
			me._scrollarea_1.ggScrollByXSmooth(diffX);
		}
		elHorScrollBg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			var rect = me._scrollarea_1__horScrollBg.getBoundingClientRect();
			var diffX = me._scrollarea_1.ggScrollWidth;
			if ((t[0].clientX - rect.left) < me._scrollarea_1.ggScrollPosX) {
				diffX = diffX * -1;
			}
			me._scrollarea_1.ggScrollByXSmooth(diffX);
		}
		el.addEventListener('wheel', function(e) {
			e.preventDefault();
			var wheelDelta = Math.sign(e.deltaX);
			me._scrollarea_1.ggScrollByXSmooth(30 * me._scrollarea_1.ggHPercentVisible * wheelDelta);
		});
		elCornerBg = me._scrollarea_1__cornerBg = document.createElement('div');
		el.appendChild(elCornerBg);
		elCornerBg.setAttribute('style', 'position: absolute; right: 0px; bottom: 0px; visibility: hidden; width: 0px; height: 0px; background-color: rgba(255,255,255,1);');
		elCornerBg.className='ggskin ggskin_scrollarea_scrollcorner';
		el.ggId="Scrollarea 1";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_scrollarea ";
		el.ggType='scrollarea';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 16px;';
		hs+='height : 102px;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._scrollarea_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._scrollarea_1.ggUpdatePosition=function (useTransition) {
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
				this.ggContent.style.left = -(Math.round(me._scrollarea_1.ggScrollPosX / me._scrollarea_1.ggHPercentVisible)) + this.ggContentLeftOffset + 'px';
				this.ggContent.style.marginLeft = '0px';
				this.ggContent.style.top = this.ggContentTopOffset + 'px';
				this.ggContent.style.marginTop = '0px';
				me._scrollarea_1__horScrollBg.style.visibility = 'inherit';
				me._scrollarea_1__horScrollFg.style.visibility = 'inherit';
				me._scrollarea_1.ggHorScrollVisible = true;
				if(me._scrollarea_1.ggHorScrollVisible) {
					me._scrollarea_1.ggAvailableHeight = me._scrollarea_1.clientHeight - 0;
					if (me._scrollarea_1.ggVertScrollVisible) {
						me._scrollarea_1.ggAvailableWidth = me._scrollarea_1.clientWidth - 0;
						me._scrollarea_1.ggAvailableWidthWithScale = me._scrollarea_1.getBoundingClientRect().width - me._scrollarea_1__horScrollBg.getBoundingClientRect().height;
					} else {
						me._scrollarea_1.ggAvailableWidth = me._scrollarea_1.clientWidth;
						me._scrollarea_1.ggAvailableWidthWithScale = me._scrollarea_1.getBoundingClientRect().width;
					}
					me._scrollarea_1__horScrollBg.style.width = me._scrollarea_1.ggAvailableWidth + 'px';
					me._scrollarea_1.ggHPercentVisible = contentWidth != 0 ? me._scrollarea_1.ggAvailableWidthWithScale / contentWidth : 0.0;
					if (me._scrollarea_1.ggHPercentVisible > 1.0) me._scrollarea_1.ggHPercentVisible = 1.0;
					me._scrollarea_1.ggScrollWidth = Math.round(me._scrollarea_1__horScrollBg.offsetWidth * me._scrollarea_1.ggHPercentVisible);
					me._scrollarea_1__horScrollFg.style.width = me._scrollarea_1.ggScrollWidth + 'px';
					me._scrollarea_1.ggScrollPosX = me._scrollarea_1.ggScrollPosXPercent * me._scrollarea_1.ggAvailableWidth;
					me._scrollarea_1.ggScrollPosX = Math.min(me._scrollarea_1.ggScrollPosX, me._scrollarea_1__horScrollBg.offsetWidth - me._scrollarea_1__horScrollFg.offsetWidth);
					me._scrollarea_1__horScrollFg.style.left = me._scrollarea_1.ggScrollPosX + 'px';
					if (me._scrollarea_1.ggHPercentVisible < 1.0) {
						let percentScrolled = me._scrollarea_1.ggScrollPosX / (me._scrollarea_1__horScrollBg.offsetWidth - me._scrollarea_1__horScrollFg.offsetWidth);
						me._scrollarea_1__content.style.left = -(Math.round((me._scrollarea_1.ggContentWidth * (1.0 - me._scrollarea_1.ggHPercentVisible)) * percentScrolled)) + this.ggContentLeftOffset + 'px';
					}
				} else {
					me._scrollarea_1.ggAvailableHeight = me._scrollarea_1.clientHeight;
					me._scrollarea_1.ggScrollPosX = 0;
					me._scrollarea_1.ggScrollPosXPercent = 0.0;
					me._scrollarea_1__content.style.left = this.ggContentLeftOffset + 'px';
				}
				if(horScrollWasVisible != me._scrollarea_1.ggHorScrollVisible || vertScrollWasVisible != me._scrollarea_1.ggVertScrollVisible) {
					skin.updateSize(me._scrollarea_1);
					me._scrollarea_1.ggUpdatePosition();
				}
			}
		}
		el=me._container_1=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._container_1;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="Container 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 102px;';
		hs+='left : 1px;';
		hs+='position : absolute;';
		hs+='top : 1px;';
		hs+='visibility : inherit;';
		hs+='width : 130px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._container_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._container_1.ggUpdatePosition=function (useTransition) {
		}
		el=me._cloner_1=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._cloner_1;
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
		el.ggWidth = 130;
		el.ggHeight = 102;
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
			if(me._cloner_1.ggUpdating == true) return;
			me._cloner_1.ggUpdating = true;
			var el=me._cloner_1;
			var curNumRows = 0;
			curNumRows = me._cloner_1.ggNumRepeat;
			if (curNumRows < 1) curNumRows = 1;
			if (typeof filter=='object') {
				el.ggFilter = filter;
			} else {
				filter = el.ggFilter;
			};
			if (me.ggTag) filter.push(me.ggTag);
			filter=filter.sort();
			if ((el.ggNumRows == curNumRows) && (el.ggInstances.length > 0) && (filter.length === el.ggCurrentFilter.length) && (filter.every(function(value, index) { return value === el.ggCurrentFilter[index] }) )) {
				me._cloner_1.ggUpdating = false;
				return;
			} else {
				el.ggNumCols = 1;
				el.ggNumRows = curNumRows;
			var centerOffsetHor = 0;
			var centerOffsetVert = 0;
				me._cloner_1.ggCloneOffsetChanged = false;
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
			tourNodes = me._cloner_1.getFilteredNodes(tourNodes, filter);
			me._cloner_1.ggNumFilterPassed = tourNodes.length;
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var nodeData = player.getNodeUserdata(nodeId);
				if (!keepCloning || i < me._cloner_1.ggCloneOffset) continue;
				var parameter={};
				parameter.top = centerOffsetVert + (row * me._cloner_1.ggHeight) + 'px';
				parameter.left = centerOffsetHor + (column * me._cloner_1.ggWidth) + 'px';
				parameter.width='100%';
				parameter.height='100%';
				parameter.index=currentIndex;
				parameter.title=nodeData['title'];
				var inst = new SkinCloner_cloner_1_Class(nodeId, me, el, parameter);
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
			me._cloner_1.ggNodeCount = me._cloner_1.ggNumFilterPassed;
			me._cloner_1.ggUpdating = false;
			player.triggerEvent('clonerchanged');
			if (me._cloner_1.parentNode && me._cloner_1.parentNode.classList.contains('ggskin_subelement') && me._cloner_1.parentNode.parentNode.classList.contains('ggskin_scrollarea')) me._cloner_1.parentNode.parentNode.ggUpdatePosition();
		}
		el.ggFilter = [];
		el.ggFilter[0] = "타운하우스";
		el.ggId="Cloner 1";
		el.ggDx=-1;
		el.ggDy=-1;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_cloner ";
		el.ggType='cloner';
		hs ='';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) - 1px);';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) - 1px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._cloner_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._cloner_1.ggUpdateConditionNodeChange=function () {
			var cnode=player.getCurrentNode();
			for(var i=0; i<me._cloner_1.childNodes.length; i++) {
				var child=me._cloner_1.childNodes[i];
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
		me._cloner_1.ggUpdatePosition=function (useTransition) {
			var pw = this.parentNode.clientWidth;
			this.ggWidth = (pw*100)/100.0;
			var ph = this.parentNode.clientHeight;
			this.ggHeight = (ph*100)/100.0;
			me._cloner_1.ggUpdate();
		}
		me._container_1.appendChild(me._cloner_1);
		me._scrollarea_1__content.appendChild(me._container_1);
		me.__92.appendChild(me._scrollarea_1);
		me.__91.appendChild(me.__92);
		el=me.__122=document.createElement('div');
		el.ggId="\uacf5\uac04 1\uce35";
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
		me.__122.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__122.ggUpdatePosition=function (useTransition) {
		}
		el=me.__1_4=document.createElement('div');
		els=me.__1_4__content=document.createElement('div');
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
		hs+='height : 105px;';
		hs+='left : 0px;';
		hs+='overflow-x : visible;';
		hs+='overflow-y : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='width : 130px;';
		hs+="";
		els.setAttribute('style',hs);
		me.__1_4.ggScrollByX = function(diffX) {
			if(!me.__1_4.ggHorScrollVisible || diffX == 0 || me.__1_4.ggHPercentVisible >= 1.0) return;
			me.__1_4.ggScrollPosX = (me.__1_4__horScrollFg.offsetLeft + diffX);
			me.__1_4.ggScrollPosX = Math.max(me.__1_4.ggScrollPosX, 0);
			me.__1_4.ggScrollPosX = Math.min(me.__1_4.ggScrollPosX, me.__1_4__horScrollBg.offsetWidth - me.__1_4__horScrollFg.offsetWidth);
			me.__1_4__horScrollFg.style.left = me.__1_4.ggScrollPosX + 'px';
			let percentScrolled = me.__1_4.ggScrollPosX / (me.__1_4__horScrollBg.offsetWidth - me.__1_4__horScrollFg.offsetWidth);
			me.__1_4__content.style.left = -(Math.round((me.__1_4.ggContentWidth * (1.0 - me.__1_4.ggHPercentVisible)) * percentScrolled)) + me.__1_4.ggContentLeftOffset + 'px';
			me.__1_4.ggScrollPosXPercent = (me.__1_4__horScrollFg.offsetLeft / me.__1_4__horScrollBg.offsetWidth);
		}
		me.__1_4.ggScrollByXSmooth = function(diffX) {
			if(!me.__1_4.ggHorScrollVisible || diffX == 0 || me.__1_4.ggHPercentVisible >= 1.0) return;
			var scrollPerInterval = diffX / 25;
			var scrollCurrX = 0;
			var id = setInterval(function() {
				scrollCurrX += scrollPerInterval;
				me.__1_4.ggScrollPosX += scrollPerInterval;
				if (diffX > 0 && (scrollCurrX >= diffX || me.__1_4.ggScrollPosX >= me.__1_4__horScrollBg.offsetWidth - me.__1_4__horScrollFg.offsetWidth)) {
					me.__1_4.ggScrollPosX = Math.min(me.__1_4.ggScrollPosX, me.__1_4__horScrollBg.offsetWidth - me.__1_4__horScrollFg.offsetWidth);
					clearInterval(id);
				}
				if (diffX < 0 && (scrollCurrX <= diffX || me.__1_4.ggScrollPosX <= 0)) {
					me.__1_4.ggScrollPosX = Math.max(me.__1_4.ggScrollPosX, 0);
					clearInterval(id);
				}
			me.__1_4__horScrollFg.style.left = me.__1_4.ggScrollPosX + 'px';
			let percentScrolled = me.__1_4.ggScrollPosX / (me.__1_4__horScrollBg.offsetWidth - me.__1_4__horScrollFg.offsetWidth);
			me.__1_4__content.style.left = -(Math.round((me.__1_4.ggContentWidth * (1.0 - me.__1_4.ggHPercentVisible)) * percentScrolled)) + me.__1_4.ggContentLeftOffset + 'px';
			me.__1_4.ggScrollPosXPercent = (me.__1_4__horScrollFg.offsetLeft / me.__1_4__horScrollBg.offsetWidth);
			}, 10);
		}
		me.__1_4.ggScrollByY = function(diffY) {
			if(!me.__1_4.ggVertScrollVisible || diffY == 0 || me.__1_4.ggVPercentVisible >= 1.0) return;
			me.__1_4.ggScrollPosY = (me.__1_4__vertScrollFg.offsetTop + diffY);
			me.__1_4.ggScrollPosY = Math.max(me.__1_4.ggScrollPosY, 0);
			me.__1_4.ggScrollPosY = Math.min(me.__1_4.ggScrollPosY, me.__1_4__vertScrollBg.offsetHeight - me.__1_4__vertScrollFg.offsetHeight);
			me.__1_4__vertScrollFg.style.top = me.__1_4.ggScrollPosY + 'px';
			let percentScrolled = me.__1_4.ggScrollPosY / (me.__1_4__vertScrollBg.offsetHeight - me.__1_4__vertScrollFg.offsetHeight);
			me.__1_4__content.style.top = -(Math.round((me.__1_4.ggContentHeight * (1.0 - me.__1_4.ggVPercentVisible)) * percentScrolled)) + me.__1_4.ggContentTopOffset + 'px';
			me.__1_4.ggScrollPosYPercent = (me.__1_4__vertScrollFg.offsetTop / me.__1_4__vertScrollBg.offsetHeight);
		}
		me.__1_4.ggScrollByYSmooth = function(diffY) {
			if(!me.__1_4.ggVertScrollVisible || diffY == 0 || me.__1_4.ggVPercentVisible >= 1.0) return;
			var scrollPerInterval = diffY / 25;
			var scrollCurrY = 0;
			var id = setInterval(function() {
				scrollCurrY += scrollPerInterval;
				me.__1_4.ggScrollPosY += scrollPerInterval;
				if (diffY > 0 && (scrollCurrY >= diffY || me.__1_4.ggScrollPosY >= me.__1_4__vertScrollBg.offsetHeight - me.__1_4__vertScrollFg.offsetHeight)) {
					me.__1_4.ggScrollPosY = Math.min(me.__1_4.ggScrollPosY, me.__1_4__vertScrollBg.offsetHeight - me.__1_4__vertScrollFg.offsetHeight);
					clearInterval(id);
				}
				if (diffY < 0 && (scrollCurrY <= diffY || me.__1_4.ggScrollPosY <= 0)) {
					me.__1_4.ggScrollPosY = Math.max(me.__1_4.ggScrollPosY, 0);
					clearInterval(id);
				}
			me.__1_4__vertScrollFg.style.top = me.__1_4.ggScrollPosY + 'px';
			let percentScrolled = me.__1_4.ggScrollPosY / (me.__1_4__vertScrollBg.offsetHeight - me.__1_4__vertScrollFg.offsetHeight);
			me.__1_4__content.style.top = -(Math.round((me.__1_4.ggContentHeight * (1.0 - me.__1_4.ggVPercentVisible)) * percentScrolled)) + me.__1_4.ggContentTopOffset + 'px';
			me.__1_4.ggScrollPosYPercent = (me.__1_4__vertScrollFg.offsetTop / me.__1_4__vertScrollBg.offsetHeight);
			}, 10);
		}
		me.__1_4.ggScrollIntoView = function(posX, posY, width, height) {
			if (me.__1_4.ggHorScrollVisible) {
				if (posX < 0) {
					var diffX = Math.floor(posX * me.__1_4.ggHPercentVisible);
					me.__1_4.ggScrollByXSmooth(diffX);
				} else if (posX + width > me.__1_4.clientWidth - (me.__1_4.ggVertScrollVisible ? 0 : 0)) {
					var diffX = Math.ceil(((posX + width) - (me.__1_4.clientWidth - (me.__1_4.ggVertScrollVisible ? 0 : 0))) * me.__1_4.ggHPercentVisible);
					me.__1_4.ggScrollByXSmooth(diffX);
				}
			}
			if (me.__1_4.ggVertScrollVisible) {
				if (posY < 0) {
					var diffY = Math.floor(posY * me.__1_4.ggVPercentVisible);
					me.__1_4.ggScrollByYSmooth(diffY);
				} else if (posY + height > me.__1_4.clientHeight - (me.__1_4.ggHorScrollVisible ? 0 : 0)) {
					var diffY = Math.ceil(((posY + height) - (me.__1_4.clientHeight - (me.__1_4.ggHorScrollVisible ? 0 : 0))) * me.__1_4.ggVPercentVisible);
					me.__1_4.ggScrollByYSmooth(diffY);
				}
			}
		}
		me.__1_4__content.mousetouchend = e => {
			let inertiaInterval = setInterval(function() {
				me.__1_4.ggDragInertiaX *= 0.65;
				me.__1_4.ggDragInertiaY *= 0.65;
				me.__1_4.ggScrollByX(me.__1_4.ggDragInertiaX);
				me.__1_4.ggScrollByY(me.__1_4.ggDragInertiaY);
				if (Math.abs(me.__1_4.ggDragInertiaX) < 1.0 && Math.abs(me.__1_4.ggDragInertiaY) < 1.0) {
					clearInterval(inertiaInterval);
				}
				}, 50);
			me.__1_4__content.onmouseup = null;
			me.__1_4__content.onmousemove = null;
			me.__1_4__content.ontouchend = null;
			me.__1_4__content.ontouchmove = null;
			me.__1_4__content.onpointerup = null;
			me.__1_4__content.onpointermove = null;
			setTimeout(function() { me.__1_4.ggIsDragging = false; }, 100);
		}
		me.__1_4__content.mousetouchmove = e => {
			e = e || window.event;
			e.preventDefault();
			var t = e.touches;
			var eventX = t ? t[0].clientX : e.clientX;
			var eventY = t ? t[0].clientY : e.clientY;
			if (Math.abs(eventX - me.__1_4.ggDragStartX) > 10 || Math.abs(eventY - me.__1_4.ggDragStartY) > 10) me.__1_4.ggIsDragging = true;
			var diffX = (eventX - me.__1_4.ggDragLastX) * me.__1_4.ggHPercentVisible;
			var diffY = (eventY - me.__1_4.ggDragLastY) * me.__1_4.ggVPercentVisible;
			me.__1_4.ggDragInertiaX = -diffX;
			me.__1_4.ggDragInertiaY = -diffY;
			me.__1_4.ggDragLastX = eventX;
			me.__1_4.ggDragLastY = eventY;
			me.__1_4.ggScrollByX(-diffX);
			me.__1_4.ggScrollByY(-diffY);
		}
		me.__1_4__content.mousetouchstart = e => {
			e = e || window.event;
			var t = e.touches;
			me.__1_4.ggDragLastX = me.__1_4.ggDragStartX = t ? t[0].clientX : e.clientX;
			me.__1_4.ggDragLastY = me.__1_4.ggDragStartY = t ? t[0].clientY : e.clientY;
			me.__1_4__content.onmouseup = me.__1_4__content.mousetouchend;
			me.__1_4__content.ontouchend = me.__1_4__content.mousetouchend;
			me.__1_4__content.onmousemove = me.__1_4__content.mousetouchmove;
			me.__1_4__content.ontouchmove = me.__1_4__content.mousetouchmove;
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				me.__1_4__content.onpointerup = me.__1_4__content.ontouchend;
				me.__1_4__content.onpointermove = me.__1_4__content.ontouchmove;
			}
		}
		els.onmousedown = me.__1_4__content.mousetouchstart;
		els.ontouchstart = me.__1_4__content.mousetouchstart;
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			els.onpointerdown = me.__1_4__content.mousetouchstart;
		}
		elHorScrollBg = me.__1_4__horScrollBg = document.createElement('div');
		el.appendChild(elHorScrollBg);
		elHorScrollBg.setAttribute('style', 'position: absolute; left: 0px; bottom: 0px; visibility: hidden; width: 640px; height: 0px; background-color: rgba(128,128,128,1); pointer-events: auto;');
		elHorScrollBg.className='ggskin ggskin_scrollarea_hscrollbg';
		elHorScrollFg = me.__1_4__horScrollFg = document.createElement('div');
		elHorScrollBg.appendChild(elHorScrollFg);
		elHorScrollFg.className='ggskin ggskin_scrollarea_hscrollfg';
		elHorScrollFg.setAttribute('style', 'position: absolute; left: 0px; top: 0px; visibility: hidden; width: 640px; height: 0px; background-color: rgba(192,192,192,1); pointer-events: auto;');
		me.__1_4.ggScrollPosX = 0;
		me.__1_4.ggScrollPosXPercent = 0.0;
		elHorScrollFg.onmousedown = function(e) {
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) return;
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			me.__1_4.ggDragLastX = e.clientX;
			document.onmouseup = function() {
				let inertiaInterval = setInterval(function() {
					me.__1_4.ggDragInertiaX *= 0.65;
					me.__1_4.ggScrollByX(me.__1_4.ggDragInertiaX);
					if (Math.abs(me.__1_4.ggDragInertiaX) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 50);
				document.onmouseup = null;
				document.onmousemove = null;
			}
			document.onmousemove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var diffX = e.clientX - me.__1_4.ggDragLastX;
				me.__1_4.ggDragInertiaX = diffX;
				me.__1_4.ggDragLastX = e.clientX;
				me.__1_4.ggScrollByX(diffX);
			}
		}
		elHorScrollFg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			me.__1_4.ggDragLastX = t ? t[0].clientX : e.clientX;
			document.ontouchend = function() {
				let inertiaInterval = setInterval(function() {
					me.__1_4.ggDragInertiaX *= 0.65;
					me.__1_4.ggScrollByX(me.__1_4.ggDragInertiaX);
					if (Math.abs(me.__1_4.ggDragInertiaX) < 1.0) {
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
				var diffX = (t ? t[0].clientX : e.clientX) - me.__1_4.ggDragLastX;
				me.__1_4.ggDragInertiaX = diffX;
				me.__1_4.ggDragLastX = t ? t[0].clientX : e.clientX;
				me.__1_4.ggScrollByX(diffX);
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
			var diffX = me.__1_4.ggScrollWidth;
			if (e.offsetX < me.__1_4.ggScrollPosX) {
				diffX = diffX * -1;
			}
			me.__1_4.ggScrollByXSmooth(diffX);
		}
		elHorScrollBg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			var rect = me.__1_4__horScrollBg.getBoundingClientRect();
			var diffX = me.__1_4.ggScrollWidth;
			if ((t[0].clientX - rect.left) < me.__1_4.ggScrollPosX) {
				diffX = diffX * -1;
			}
			me.__1_4.ggScrollByXSmooth(diffX);
		}
		el.addEventListener('wheel', function(e) {
			e.preventDefault();
			var wheelDelta = Math.sign(e.deltaX);
			me.__1_4.ggScrollByXSmooth(30 * me.__1_4.ggHPercentVisible * wheelDelta);
		});
		elCornerBg = me.__1_4__cornerBg = document.createElement('div');
		el.appendChild(elCornerBg);
		elCornerBg.setAttribute('style', 'position: absolute; right: 0px; bottom: 0px; visibility: hidden; width: 0px; height: 0px; background-color: rgba(255,255,255,1);');
		elCornerBg.className='ggskin ggskin_scrollarea_scrollcorner';
		el.ggId="1\uce35 \uc2a4\ud06c\ub864";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_scrollarea ";
		el.ggType='scrollarea';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 16px;';
		hs+='height : 102px;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__1_4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__1_4.ggUpdatePosition=function (useTransition) {
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
				this.ggContent.style.left = -(Math.round(me.__1_4.ggScrollPosX / me.__1_4.ggHPercentVisible)) + this.ggContentLeftOffset + 'px';
				this.ggContent.style.marginLeft = '0px';
				this.ggContent.style.top = this.ggContentTopOffset + 'px';
				this.ggContent.style.marginTop = '0px';
				me.__1_4__horScrollBg.style.visibility = 'inherit';
				me.__1_4__horScrollFg.style.visibility = 'inherit';
				me.__1_4.ggHorScrollVisible = true;
				if(me.__1_4.ggHorScrollVisible) {
					me.__1_4.ggAvailableHeight = me.__1_4.clientHeight - 0;
					if (me.__1_4.ggVertScrollVisible) {
						me.__1_4.ggAvailableWidth = me.__1_4.clientWidth - 0;
						me.__1_4.ggAvailableWidthWithScale = me.__1_4.getBoundingClientRect().width - me.__1_4__horScrollBg.getBoundingClientRect().height;
					} else {
						me.__1_4.ggAvailableWidth = me.__1_4.clientWidth;
						me.__1_4.ggAvailableWidthWithScale = me.__1_4.getBoundingClientRect().width;
					}
					me.__1_4__horScrollBg.style.width = me.__1_4.ggAvailableWidth + 'px';
					me.__1_4.ggHPercentVisible = contentWidth != 0 ? me.__1_4.ggAvailableWidthWithScale / contentWidth : 0.0;
					if (me.__1_4.ggHPercentVisible > 1.0) me.__1_4.ggHPercentVisible = 1.0;
					me.__1_4.ggScrollWidth = Math.round(me.__1_4__horScrollBg.offsetWidth * me.__1_4.ggHPercentVisible);
					me.__1_4__horScrollFg.style.width = me.__1_4.ggScrollWidth + 'px';
					me.__1_4.ggScrollPosX = me.__1_4.ggScrollPosXPercent * me.__1_4.ggAvailableWidth;
					me.__1_4.ggScrollPosX = Math.min(me.__1_4.ggScrollPosX, me.__1_4__horScrollBg.offsetWidth - me.__1_4__horScrollFg.offsetWidth);
					me.__1_4__horScrollFg.style.left = me.__1_4.ggScrollPosX + 'px';
					if (me.__1_4.ggHPercentVisible < 1.0) {
						let percentScrolled = me.__1_4.ggScrollPosX / (me.__1_4__horScrollBg.offsetWidth - me.__1_4__horScrollFg.offsetWidth);
						me.__1_4__content.style.left = -(Math.round((me.__1_4.ggContentWidth * (1.0 - me.__1_4.ggHPercentVisible)) * percentScrolled)) + this.ggContentLeftOffset + 'px';
					}
				} else {
					me.__1_4.ggAvailableHeight = me.__1_4.clientHeight;
					me.__1_4.ggScrollPosX = 0;
					me.__1_4.ggScrollPosXPercent = 0.0;
					me.__1_4__content.style.left = this.ggContentLeftOffset + 'px';
				}
				if(horScrollWasVisible != me.__1_4.ggHorScrollVisible || vertScrollWasVisible != me.__1_4.ggVertScrollVisible) {
					skin.updateSize(me.__1_4);
					me.__1_4.ggUpdatePosition();
				}
			}
		}
		el=me.__1_5=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me.__1_5;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="1\uce35 \ucee8\ud14c\uc774\ub108";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 102px;';
		hs+='left : 1px;';
		hs+='position : absolute;';
		hs+='top : 1px;';
		hs+='visibility : inherit;';
		hs+='width : 130px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__1_5.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__1_5.ggUpdatePosition=function (useTransition) {
		}
		el=me.__1_6=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me.__1_6;
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
		el.ggWidth = 130;
		el.ggHeight = 102;
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
			if(me.__1_6.ggUpdating == true) return;
			me.__1_6.ggUpdating = true;
			var el=me.__1_6;
			var curNumRows = 0;
			curNumRows = me.__1_6.ggNumRepeat;
			if (curNumRows < 1) curNumRows = 1;
			if (typeof filter=='object') {
				el.ggFilter = filter;
			} else {
				filter = el.ggFilter;
			};
			if (me.ggTag) filter.push(me.ggTag);
			filter=filter.sort();
			if ((el.ggNumRows == curNumRows) && (el.ggInstances.length > 0) && (filter.length === el.ggCurrentFilter.length) && (filter.every(function(value, index) { return value === el.ggCurrentFilter[index] }) )) {
				me.__1_6.ggUpdating = false;
				return;
			} else {
				el.ggNumCols = 1;
				el.ggNumRows = curNumRows;
			var centerOffsetHor = 0;
			var centerOffsetVert = 0;
				me.__1_6.ggCloneOffsetChanged = false;
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
			tourNodes = me.__1_6.getFilteredNodes(tourNodes, filter);
			me.__1_6.ggNumFilterPassed = tourNodes.length;
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var nodeData = player.getNodeUserdata(nodeId);
				if (!keepCloning || i < me.__1_6.ggCloneOffset) continue;
				var parameter={};
				parameter.top = centerOffsetVert + (row * me.__1_6.ggHeight) + 'px';
				parameter.left = centerOffsetHor + (column * me.__1_6.ggWidth) + 'px';
				parameter.width='100%';
				parameter.height='100%';
				parameter.index=currentIndex;
				parameter.title=nodeData['title'];
				var inst = new SkinCloner__1_6_Class(nodeId, me, el, parameter);
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
			me.__1_6.ggNodeCount = me.__1_6.ggNumFilterPassed;
			me.__1_6.ggUpdating = false;
			player.triggerEvent('clonerchanged');
			if (me.__1_6.parentNode && me.__1_6.parentNode.classList.contains('ggskin_subelement') && me.__1_6.parentNode.parentNode.classList.contains('ggskin_scrollarea')) me.__1_6.parentNode.parentNode.ggUpdatePosition();
		}
		el.ggFilter = [];
		el.ggFilter[0] = "1층";
		el.ggId="1\uce35 \ud074\ub85c\ub098";
		el.ggDx=-1;
		el.ggDy=-1;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_cloner ";
		el.ggType='cloner';
		hs ='';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) - 1px);';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) - 1px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__1_6.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__1_6.ggUpdateConditionNodeChange=function () {
			var cnode=player.getCurrentNode();
			for(var i=0; i<me.__1_6.childNodes.length; i++) {
				var child=me.__1_6.childNodes[i];
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
		me.__1_6.ggUpdatePosition=function (useTransition) {
			var pw = this.parentNode.clientWidth;
			this.ggWidth = (pw*100)/100.0;
			var ph = this.parentNode.clientHeight;
			this.ggHeight = (ph*100)/100.0;
			me.__1_6.ggUpdate();
		}
		me.__1_5.appendChild(me.__1_6);
		me.__1_4__content.appendChild(me.__1_5);
		me.__122.appendChild(me.__1_4);
		me.__91.appendChild(me.__122);
		el=me.__221=document.createElement('div');
		el.ggId="\uacf5\uac04 2\uce35";
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
		me.__221.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__221.ggUpdatePosition=function (useTransition) {
		}
		el=me.__2_8=document.createElement('div');
		els=me.__2_8__content=document.createElement('div');
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
		hs+='height : 105px;';
		hs+='left : 0px;';
		hs+='overflow-x : visible;';
		hs+='overflow-y : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='width : 130px;';
		hs+="";
		els.setAttribute('style',hs);
		me.__2_8.ggScrollByX = function(diffX) {
			if(!me.__2_8.ggHorScrollVisible || diffX == 0 || me.__2_8.ggHPercentVisible >= 1.0) return;
			me.__2_8.ggScrollPosX = (me.__2_8__horScrollFg.offsetLeft + diffX);
			me.__2_8.ggScrollPosX = Math.max(me.__2_8.ggScrollPosX, 0);
			me.__2_8.ggScrollPosX = Math.min(me.__2_8.ggScrollPosX, me.__2_8__horScrollBg.offsetWidth - me.__2_8__horScrollFg.offsetWidth);
			me.__2_8__horScrollFg.style.left = me.__2_8.ggScrollPosX + 'px';
			let percentScrolled = me.__2_8.ggScrollPosX / (me.__2_8__horScrollBg.offsetWidth - me.__2_8__horScrollFg.offsetWidth);
			me.__2_8__content.style.left = -(Math.round((me.__2_8.ggContentWidth * (1.0 - me.__2_8.ggHPercentVisible)) * percentScrolled)) + me.__2_8.ggContentLeftOffset + 'px';
			me.__2_8.ggScrollPosXPercent = (me.__2_8__horScrollFg.offsetLeft / me.__2_8__horScrollBg.offsetWidth);
		}
		me.__2_8.ggScrollByXSmooth = function(diffX) {
			if(!me.__2_8.ggHorScrollVisible || diffX == 0 || me.__2_8.ggHPercentVisible >= 1.0) return;
			var scrollPerInterval = diffX / 25;
			var scrollCurrX = 0;
			var id = setInterval(function() {
				scrollCurrX += scrollPerInterval;
				me.__2_8.ggScrollPosX += scrollPerInterval;
				if (diffX > 0 && (scrollCurrX >= diffX || me.__2_8.ggScrollPosX >= me.__2_8__horScrollBg.offsetWidth - me.__2_8__horScrollFg.offsetWidth)) {
					me.__2_8.ggScrollPosX = Math.min(me.__2_8.ggScrollPosX, me.__2_8__horScrollBg.offsetWidth - me.__2_8__horScrollFg.offsetWidth);
					clearInterval(id);
				}
				if (diffX < 0 && (scrollCurrX <= diffX || me.__2_8.ggScrollPosX <= 0)) {
					me.__2_8.ggScrollPosX = Math.max(me.__2_8.ggScrollPosX, 0);
					clearInterval(id);
				}
			me.__2_8__horScrollFg.style.left = me.__2_8.ggScrollPosX + 'px';
			let percentScrolled = me.__2_8.ggScrollPosX / (me.__2_8__horScrollBg.offsetWidth - me.__2_8__horScrollFg.offsetWidth);
			me.__2_8__content.style.left = -(Math.round((me.__2_8.ggContentWidth * (1.0 - me.__2_8.ggHPercentVisible)) * percentScrolled)) + me.__2_8.ggContentLeftOffset + 'px';
			me.__2_8.ggScrollPosXPercent = (me.__2_8__horScrollFg.offsetLeft / me.__2_8__horScrollBg.offsetWidth);
			}, 10);
		}
		me.__2_8.ggScrollByY = function(diffY) {
			if(!me.__2_8.ggVertScrollVisible || diffY == 0 || me.__2_8.ggVPercentVisible >= 1.0) return;
			me.__2_8.ggScrollPosY = (me.__2_8__vertScrollFg.offsetTop + diffY);
			me.__2_8.ggScrollPosY = Math.max(me.__2_8.ggScrollPosY, 0);
			me.__2_8.ggScrollPosY = Math.min(me.__2_8.ggScrollPosY, me.__2_8__vertScrollBg.offsetHeight - me.__2_8__vertScrollFg.offsetHeight);
			me.__2_8__vertScrollFg.style.top = me.__2_8.ggScrollPosY + 'px';
			let percentScrolled = me.__2_8.ggScrollPosY / (me.__2_8__vertScrollBg.offsetHeight - me.__2_8__vertScrollFg.offsetHeight);
			me.__2_8__content.style.top = -(Math.round((me.__2_8.ggContentHeight * (1.0 - me.__2_8.ggVPercentVisible)) * percentScrolled)) + me.__2_8.ggContentTopOffset + 'px';
			me.__2_8.ggScrollPosYPercent = (me.__2_8__vertScrollFg.offsetTop / me.__2_8__vertScrollBg.offsetHeight);
		}
		me.__2_8.ggScrollByYSmooth = function(diffY) {
			if(!me.__2_8.ggVertScrollVisible || diffY == 0 || me.__2_8.ggVPercentVisible >= 1.0) return;
			var scrollPerInterval = diffY / 25;
			var scrollCurrY = 0;
			var id = setInterval(function() {
				scrollCurrY += scrollPerInterval;
				me.__2_8.ggScrollPosY += scrollPerInterval;
				if (diffY > 0 && (scrollCurrY >= diffY || me.__2_8.ggScrollPosY >= me.__2_8__vertScrollBg.offsetHeight - me.__2_8__vertScrollFg.offsetHeight)) {
					me.__2_8.ggScrollPosY = Math.min(me.__2_8.ggScrollPosY, me.__2_8__vertScrollBg.offsetHeight - me.__2_8__vertScrollFg.offsetHeight);
					clearInterval(id);
				}
				if (diffY < 0 && (scrollCurrY <= diffY || me.__2_8.ggScrollPosY <= 0)) {
					me.__2_8.ggScrollPosY = Math.max(me.__2_8.ggScrollPosY, 0);
					clearInterval(id);
				}
			me.__2_8__vertScrollFg.style.top = me.__2_8.ggScrollPosY + 'px';
			let percentScrolled = me.__2_8.ggScrollPosY / (me.__2_8__vertScrollBg.offsetHeight - me.__2_8__vertScrollFg.offsetHeight);
			me.__2_8__content.style.top = -(Math.round((me.__2_8.ggContentHeight * (1.0 - me.__2_8.ggVPercentVisible)) * percentScrolled)) + me.__2_8.ggContentTopOffset + 'px';
			me.__2_8.ggScrollPosYPercent = (me.__2_8__vertScrollFg.offsetTop / me.__2_8__vertScrollBg.offsetHeight);
			}, 10);
		}
		me.__2_8.ggScrollIntoView = function(posX, posY, width, height) {
			if (me.__2_8.ggHorScrollVisible) {
				if (posX < 0) {
					var diffX = Math.floor(posX * me.__2_8.ggHPercentVisible);
					me.__2_8.ggScrollByXSmooth(diffX);
				} else if (posX + width > me.__2_8.clientWidth - (me.__2_8.ggVertScrollVisible ? 0 : 0)) {
					var diffX = Math.ceil(((posX + width) - (me.__2_8.clientWidth - (me.__2_8.ggVertScrollVisible ? 0 : 0))) * me.__2_8.ggHPercentVisible);
					me.__2_8.ggScrollByXSmooth(diffX);
				}
			}
			if (me.__2_8.ggVertScrollVisible) {
				if (posY < 0) {
					var diffY = Math.floor(posY * me.__2_8.ggVPercentVisible);
					me.__2_8.ggScrollByYSmooth(diffY);
				} else if (posY + height > me.__2_8.clientHeight - (me.__2_8.ggHorScrollVisible ? 0 : 0)) {
					var diffY = Math.ceil(((posY + height) - (me.__2_8.clientHeight - (me.__2_8.ggHorScrollVisible ? 0 : 0))) * me.__2_8.ggVPercentVisible);
					me.__2_8.ggScrollByYSmooth(diffY);
				}
			}
		}
		me.__2_8__content.mousetouchend = e => {
			let inertiaInterval = setInterval(function() {
				me.__2_8.ggDragInertiaX *= 0.65;
				me.__2_8.ggDragInertiaY *= 0.65;
				me.__2_8.ggScrollByX(me.__2_8.ggDragInertiaX);
				me.__2_8.ggScrollByY(me.__2_8.ggDragInertiaY);
				if (Math.abs(me.__2_8.ggDragInertiaX) < 1.0 && Math.abs(me.__2_8.ggDragInertiaY) < 1.0) {
					clearInterval(inertiaInterval);
				}
				}, 50);
			me.__2_8__content.onmouseup = null;
			me.__2_8__content.onmousemove = null;
			me.__2_8__content.ontouchend = null;
			me.__2_8__content.ontouchmove = null;
			me.__2_8__content.onpointerup = null;
			me.__2_8__content.onpointermove = null;
			setTimeout(function() { me.__2_8.ggIsDragging = false; }, 100);
		}
		me.__2_8__content.mousetouchmove = e => {
			e = e || window.event;
			e.preventDefault();
			var t = e.touches;
			var eventX = t ? t[0].clientX : e.clientX;
			var eventY = t ? t[0].clientY : e.clientY;
			if (Math.abs(eventX - me.__2_8.ggDragStartX) > 10 || Math.abs(eventY - me.__2_8.ggDragStartY) > 10) me.__2_8.ggIsDragging = true;
			var diffX = (eventX - me.__2_8.ggDragLastX) * me.__2_8.ggHPercentVisible;
			var diffY = (eventY - me.__2_8.ggDragLastY) * me.__2_8.ggVPercentVisible;
			me.__2_8.ggDragInertiaX = -diffX;
			me.__2_8.ggDragInertiaY = -diffY;
			me.__2_8.ggDragLastX = eventX;
			me.__2_8.ggDragLastY = eventY;
			me.__2_8.ggScrollByX(-diffX);
			me.__2_8.ggScrollByY(-diffY);
		}
		me.__2_8__content.mousetouchstart = e => {
			e = e || window.event;
			var t = e.touches;
			me.__2_8.ggDragLastX = me.__2_8.ggDragStartX = t ? t[0].clientX : e.clientX;
			me.__2_8.ggDragLastY = me.__2_8.ggDragStartY = t ? t[0].clientY : e.clientY;
			me.__2_8__content.onmouseup = me.__2_8__content.mousetouchend;
			me.__2_8__content.ontouchend = me.__2_8__content.mousetouchend;
			me.__2_8__content.onmousemove = me.__2_8__content.mousetouchmove;
			me.__2_8__content.ontouchmove = me.__2_8__content.mousetouchmove;
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				me.__2_8__content.onpointerup = me.__2_8__content.ontouchend;
				me.__2_8__content.onpointermove = me.__2_8__content.ontouchmove;
			}
		}
		els.onmousedown = me.__2_8__content.mousetouchstart;
		els.ontouchstart = me.__2_8__content.mousetouchstart;
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			els.onpointerdown = me.__2_8__content.mousetouchstart;
		}
		elHorScrollBg = me.__2_8__horScrollBg = document.createElement('div');
		el.appendChild(elHorScrollBg);
		elHorScrollBg.setAttribute('style', 'position: absolute; left: 0px; bottom: 0px; visibility: hidden; width: 640px; height: 0px; background-color: rgba(128,128,128,1); pointer-events: auto;');
		elHorScrollBg.className='ggskin ggskin_scrollarea_hscrollbg';
		elHorScrollFg = me.__2_8__horScrollFg = document.createElement('div');
		elHorScrollBg.appendChild(elHorScrollFg);
		elHorScrollFg.className='ggskin ggskin_scrollarea_hscrollfg';
		elHorScrollFg.setAttribute('style', 'position: absolute; left: 0px; top: 0px; visibility: hidden; width: 640px; height: 0px; background-color: rgba(192,192,192,1); pointer-events: auto;');
		me.__2_8.ggScrollPosX = 0;
		me.__2_8.ggScrollPosXPercent = 0.0;
		elHorScrollFg.onmousedown = function(e) {
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) return;
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			me.__2_8.ggDragLastX = e.clientX;
			document.onmouseup = function() {
				let inertiaInterval = setInterval(function() {
					me.__2_8.ggDragInertiaX *= 0.65;
					me.__2_8.ggScrollByX(me.__2_8.ggDragInertiaX);
					if (Math.abs(me.__2_8.ggDragInertiaX) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 50);
				document.onmouseup = null;
				document.onmousemove = null;
			}
			document.onmousemove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var diffX = e.clientX - me.__2_8.ggDragLastX;
				me.__2_8.ggDragInertiaX = diffX;
				me.__2_8.ggDragLastX = e.clientX;
				me.__2_8.ggScrollByX(diffX);
			}
		}
		elHorScrollFg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			me.__2_8.ggDragLastX = t ? t[0].clientX : e.clientX;
			document.ontouchend = function() {
				let inertiaInterval = setInterval(function() {
					me.__2_8.ggDragInertiaX *= 0.65;
					me.__2_8.ggScrollByX(me.__2_8.ggDragInertiaX);
					if (Math.abs(me.__2_8.ggDragInertiaX) < 1.0) {
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
				var diffX = (t ? t[0].clientX : e.clientX) - me.__2_8.ggDragLastX;
				me.__2_8.ggDragInertiaX = diffX;
				me.__2_8.ggDragLastX = t ? t[0].clientX : e.clientX;
				me.__2_8.ggScrollByX(diffX);
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
			var diffX = me.__2_8.ggScrollWidth;
			if (e.offsetX < me.__2_8.ggScrollPosX) {
				diffX = diffX * -1;
			}
			me.__2_8.ggScrollByXSmooth(diffX);
		}
		elHorScrollBg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			var rect = me.__2_8__horScrollBg.getBoundingClientRect();
			var diffX = me.__2_8.ggScrollWidth;
			if ((t[0].clientX - rect.left) < me.__2_8.ggScrollPosX) {
				diffX = diffX * -1;
			}
			me.__2_8.ggScrollByXSmooth(diffX);
		}
		el.addEventListener('wheel', function(e) {
			e.preventDefault();
			var wheelDelta = Math.sign(e.deltaX);
			me.__2_8.ggScrollByXSmooth(30 * me.__2_8.ggHPercentVisible * wheelDelta);
		});
		elCornerBg = me.__2_8__cornerBg = document.createElement('div');
		el.appendChild(elCornerBg);
		elCornerBg.setAttribute('style', 'position: absolute; right: 0px; bottom: 0px; visibility: hidden; width: 0px; height: 0px; background-color: rgba(255,255,255,1);');
		elCornerBg.className='ggskin ggskin_scrollarea_scrollcorner';
		el.ggId="2\uce35 \uc2a4\ud06c\ub864";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_scrollarea ";
		el.ggType='scrollarea';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 16px;';
		hs+='height : 102px;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__2_8.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__2_8.ggUpdatePosition=function (useTransition) {
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
				this.ggContent.style.left = -(Math.round(me.__2_8.ggScrollPosX / me.__2_8.ggHPercentVisible)) + this.ggContentLeftOffset + 'px';
				this.ggContent.style.marginLeft = '0px';
				this.ggContent.style.top = this.ggContentTopOffset + 'px';
				this.ggContent.style.marginTop = '0px';
				me.__2_8__horScrollBg.style.visibility = 'inherit';
				me.__2_8__horScrollFg.style.visibility = 'inherit';
				me.__2_8.ggHorScrollVisible = true;
				if(me.__2_8.ggHorScrollVisible) {
					me.__2_8.ggAvailableHeight = me.__2_8.clientHeight - 0;
					if (me.__2_8.ggVertScrollVisible) {
						me.__2_8.ggAvailableWidth = me.__2_8.clientWidth - 0;
						me.__2_8.ggAvailableWidthWithScale = me.__2_8.getBoundingClientRect().width - me.__2_8__horScrollBg.getBoundingClientRect().height;
					} else {
						me.__2_8.ggAvailableWidth = me.__2_8.clientWidth;
						me.__2_8.ggAvailableWidthWithScale = me.__2_8.getBoundingClientRect().width;
					}
					me.__2_8__horScrollBg.style.width = me.__2_8.ggAvailableWidth + 'px';
					me.__2_8.ggHPercentVisible = contentWidth != 0 ? me.__2_8.ggAvailableWidthWithScale / contentWidth : 0.0;
					if (me.__2_8.ggHPercentVisible > 1.0) me.__2_8.ggHPercentVisible = 1.0;
					me.__2_8.ggScrollWidth = Math.round(me.__2_8__horScrollBg.offsetWidth * me.__2_8.ggHPercentVisible);
					me.__2_8__horScrollFg.style.width = me.__2_8.ggScrollWidth + 'px';
					me.__2_8.ggScrollPosX = me.__2_8.ggScrollPosXPercent * me.__2_8.ggAvailableWidth;
					me.__2_8.ggScrollPosX = Math.min(me.__2_8.ggScrollPosX, me.__2_8__horScrollBg.offsetWidth - me.__2_8__horScrollFg.offsetWidth);
					me.__2_8__horScrollFg.style.left = me.__2_8.ggScrollPosX + 'px';
					if (me.__2_8.ggHPercentVisible < 1.0) {
						let percentScrolled = me.__2_8.ggScrollPosX / (me.__2_8__horScrollBg.offsetWidth - me.__2_8__horScrollFg.offsetWidth);
						me.__2_8__content.style.left = -(Math.round((me.__2_8.ggContentWidth * (1.0 - me.__2_8.ggHPercentVisible)) * percentScrolled)) + this.ggContentLeftOffset + 'px';
					}
				} else {
					me.__2_8.ggAvailableHeight = me.__2_8.clientHeight;
					me.__2_8.ggScrollPosX = 0;
					me.__2_8.ggScrollPosXPercent = 0.0;
					me.__2_8__content.style.left = this.ggContentLeftOffset + 'px';
				}
				if(horScrollWasVisible != me.__2_8.ggHorScrollVisible || vertScrollWasVisible != me.__2_8.ggVertScrollVisible) {
					skin.updateSize(me.__2_8);
					me.__2_8.ggUpdatePosition();
				}
			}
		}
		el=me.__2_9=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me.__2_9;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="2\uce35 \ucee8\ud14c\uc774\ub108";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 102px;';
		hs+='left : 1px;';
		hs+='position : absolute;';
		hs+='top : 1px;';
		hs+='visibility : inherit;';
		hs+='width : 130px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__2_9.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__2_9.ggUpdatePosition=function (useTransition) {
		}
		el=me.__2_10=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me.__2_10;
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
		el.ggWidth = 130;
		el.ggHeight = 102;
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
			if(me.__2_10.ggUpdating == true) return;
			me.__2_10.ggUpdating = true;
			var el=me.__2_10;
			var curNumRows = 0;
			curNumRows = me.__2_10.ggNumRepeat;
			if (curNumRows < 1) curNumRows = 1;
			if (typeof filter=='object') {
				el.ggFilter = filter;
			} else {
				filter = el.ggFilter;
			};
			if (me.ggTag) filter.push(me.ggTag);
			filter=filter.sort();
			if ((el.ggNumRows == curNumRows) && (el.ggInstances.length > 0) && (filter.length === el.ggCurrentFilter.length) && (filter.every(function(value, index) { return value === el.ggCurrentFilter[index] }) )) {
				me.__2_10.ggUpdating = false;
				return;
			} else {
				el.ggNumCols = 1;
				el.ggNumRows = curNumRows;
			var centerOffsetHor = 0;
			var centerOffsetVert = 0;
				me.__2_10.ggCloneOffsetChanged = false;
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
			tourNodes = me.__2_10.getFilteredNodes(tourNodes, filter);
			me.__2_10.ggNumFilterPassed = tourNodes.length;
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var nodeData = player.getNodeUserdata(nodeId);
				if (!keepCloning || i < me.__2_10.ggCloneOffset) continue;
				var parameter={};
				parameter.top = centerOffsetVert + (row * me.__2_10.ggHeight) + 'px';
				parameter.left = centerOffsetHor + (column * me.__2_10.ggWidth) + 'px';
				parameter.width='100%';
				parameter.height='100%';
				parameter.index=currentIndex;
				parameter.title=nodeData['title'];
				var inst = new SkinCloner__2_10_Class(nodeId, me, el, parameter);
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
			me.__2_10.ggNodeCount = me.__2_10.ggNumFilterPassed;
			me.__2_10.ggUpdating = false;
			player.triggerEvent('clonerchanged');
			if (me.__2_10.parentNode && me.__2_10.parentNode.classList.contains('ggskin_subelement') && me.__2_10.parentNode.parentNode.classList.contains('ggskin_scrollarea')) me.__2_10.parentNode.parentNode.ggUpdatePosition();
		}
		el.ggFilter = [];
		el.ggFilter[0] = "2층";
		el.ggId="2\uce35 \ud074\ub85c\ub098";
		el.ggDx=-1;
		el.ggDy=-1;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_cloner ";
		el.ggType='cloner';
		hs ='';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) - 1px);';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) - 1px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__2_10.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__2_10.ggUpdateConditionNodeChange=function () {
			var cnode=player.getCurrentNode();
			for(var i=0; i<me.__2_10.childNodes.length; i++) {
				var child=me.__2_10.childNodes[i];
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
		me.__2_10.ggUpdatePosition=function (useTransition) {
			var pw = this.parentNode.clientWidth;
			this.ggWidth = (pw*100)/100.0;
			var ph = this.parentNode.clientHeight;
			this.ggHeight = (ph*100)/100.0;
			me.__2_10.ggUpdate();
		}
		me.__2_9.appendChild(me.__2_10);
		me.__2_8__content.appendChild(me.__2_9);
		me.__221.appendChild(me.__2_8);
		me.__91.appendChild(me.__221);
		el=me.__1_3=document.createElement('div');
		el.ggId="1\uce35 \ubc84\ud2bc";
		el.ggDx=-60;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.117647);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 6px;';
		hs+='cursor : default;';
		hs+='height : 28px;';
		hs+='left : calc(50% - ((90px + 0px) / 2) - 60px);';
		hs+='position : absolute;';
		hs+='top : 16px;';
		hs+='visibility : inherit;';
		hs+='width : 90px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__1_3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__1_3.onclick=function (e) {
			player.setVariableValue('vis_button2', true);
			player.setVariableValue('vis_button', false);
			me.__122.style.transition='none';
			me.__122.style.visibility=(Number(me.__122.style.opacity)>0||!me.__122.style.opacity)?'inherit':'hidden';
			me.__122.ggVisible=true;
			me.__92.style.transition='none';
			me.__92.style.visibility='hidden';
			me.__92.ggVisible=false;
			me.__221.style.transition='none';
			me.__221.style.visibility='hidden';
			me.__221.ggVisible=false;
		}
		me.__1_3.ggUpdatePosition=function (useTransition) {
		}
		el=me.__119=document.createElement('div');
		els=me.__119__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="1\uce35";
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
		me.__119.ggUpdateText=function() {
			var params = [];
			var hs = player._("1\uce35", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__119.ggUpdateText();
		el.appendChild(els);
		me.__119.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__119.logicBlock_backgroundcolor = function() {
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
			if (me.__119.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__119.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__119.style.transition='background-color 0s';
				if (me.__119.ggCurrentLogicStateBackgroundColor == 0) {
					me.__119.style.backgroundColor="rgba(26,109,255,1)";
				}
				else {
					me.__119.style.backgroundColor="rgba(255,255,255,0.117647)";
				}
			}
		}
		me.__119.logicBlock_backgroundcolor();
		me.__119.ggUpdatePosition=function (useTransition) {
		}
		me.__1_3.appendChild(me.__119);
		me.__91.appendChild(me.__1_3);
		el=me.__2_7=document.createElement('div');
		el.ggId="2\uce35 \ubc84\ud2bc";
		el.ggDx=60;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 6px;';
		hs+='cursor : default;';
		hs+='height : 28px;';
		hs+='left : calc(50% - ((90px + 0px) / 2) + 60px);';
		hs+='position : absolute;';
		hs+='top : 16px;';
		hs+='visibility : inherit;';
		hs+='width : 90px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__2_7.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__2_7.onclick=function (e) {
			player.setVariableValue('vis_button', true);
			player.setVariableValue('vis_button2', false);
			me.__221.style.transition='none';
			me.__221.style.visibility=(Number(me.__221.style.opacity)>0||!me.__221.style.opacity)?'inherit':'hidden';
			me.__221.ggVisible=true;
			me.__92.style.transition='none';
			me.__92.style.visibility='hidden';
			me.__92.ggVisible=false;
			me.__122.style.transition='none';
			me.__122.style.visibility='hidden';
			me.__122.ggVisible=false;
		}
		me.__2_7.ggUpdatePosition=function (useTransition) {
		}
		el=me.__220=document.createElement('div');
		els=me.__220__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="2\uce35";
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
		me.__220.ggUpdateText=function() {
			var params = [];
			var hs = player._("2\uce35", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__220.ggUpdateText();
		el.appendChild(els);
		me.__220.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__220.logicBlock_backgroundcolor = function() {
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
			if (me.__220.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__220.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__220.style.transition='background-color 0s';
				if (me.__220.ggCurrentLogicStateBackgroundColor == 0) {
					me.__220.style.backgroundColor="rgba(26,109,255,1)";
				}
				else {
					me.__220.style.backgroundColor="rgba(255,255,255,0.117647)";
				}
			}
		}
		me.__220.logicBlock_backgroundcolor();
		me.__220.ggUpdatePosition=function (useTransition) {
		}
		me.__2_7.appendChild(me.__220);
		me.__91.appendChild(me.__2_7);
		me.__90.appendChild(me.__91);
		me.divSkin.appendChild(me.__90);
		el=me.__73=document.createElement('div');
		el.ggId="\ud3c9\uba74\ub3c4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 310px;';
		hs+='left : 25px;';
		hs+='position : absolute;';
		hs+='top : 70px;';
		hs+='visibility : inherit;';
		hs+='width : 300px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__73.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
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
			else if (
				((me.ggUserdata.tags.indexOf("opening") != -1))
			)
			{
				newLogicStateVisible = 2;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__73.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__73.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__73.style.transition='';
				if (me.__73.ggCurrentLogicStateVisible == 0) {
					me.__73.style.visibility="hidden";
					me.__73.ggVisible=false;
				}
				else if (me.__73.ggCurrentLogicStateVisible == 1) {
					me.__73.style.visibility="hidden";
					me.__73.ggVisible=false;
				}
				else if (me.__73.ggCurrentLogicStateVisible == 2) {
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
		el.ggId="\ud3c9\uba74\ub3c4 \ubc30\uacbd";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #595959;';
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
		hs+='background: linear-gradient(180deg, rgba(97, 101, 105, 0.4) 0%, rgba(97, 101, 105, 0.7) 98%); box-shadow: 0 12px 24px 0 rgb(0 0 0 \/ 10%); box-sizing:border-box;';
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
		el=me.__88=document.createElement('div');
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
		me.__88.onclick=function (e) {
			me.__89.ggVisible = !me.__89.ggVisible;
			var flag=me.__89.ggVisible;
			me.__89.style.transition='none';
			me.__89.style.visibility=((flag)&&(Number(me.__89.style.opacity)>0||!me.__89.style.opacity))?'inherit':'hidden';
			me._image_5.ggVisible = !me._image_5.ggVisible;
			var flag=me._image_5.ggVisible;
			me._image_5.style.transition='none';
			me._image_5.style.visibility=((flag)&&(Number(me._image_5.style.opacity)>0||!me._image_5.style.opacity))?'inherit':'hidden';
			me._image_6.ggVisible = !me._image_6.ggVisible;
			var flag=me._image_6.ggVisible;
			me._image_6.style.transition='none';
			me._image_6.style.visibility=((flag)&&(Number(me._image_6.style.opacity)>0||!me._image_6.style.opacity))?'inherit':'hidden';
		}
		me.__88.ggUpdatePosition=function (useTransition) {
		}
		el=me.__1_2=document.createElement('div');
		els=me.__1_2__text=document.createElement('div');
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
		me.__1_2.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.ggUserdata.description)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__1_2.ggUpdateText();
		player.addListener('changenode', function() {
			me.__1_2.ggUpdateText();
		});
		el.appendChild(els);
		me.__1_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__1_2.ggUpdatePosition=function (useTransition) {
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
		el=me._image_5=document.createElement('div');
		els=me._image_5__img=document.createElement('img');
		els.className='ggskin ggskin_image_5';
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
		el.ggId="Image 5";
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
		me._image_5.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_5.ggUpdatePosition=function (useTransition) {
		}
		me._container_3.appendChild(me._image_5);
		el=me._image_6=document.createElement('div');
		els=me._image_6__img=document.createElement('img');
		els.className='ggskin ggskin_image_6';
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
		el.ggId="Image 6";
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
		me._image_6.ggUpdatePosition=function (useTransition) {
		}
		me._container_3.appendChild(me._image_6);
		me.__1_2.appendChild(me._container_3);
		me.__88.appendChild(me.__1_2);
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
		el=me.__89=document.createElement('div');
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
		me.__89.ggUpdatePosition=function (useTransition) {
		}
		el=me.__1_1=document.createElement('div');
		els=me.__1_1__text=document.createElement('div');
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
		me.__1_1.ggUpdateText=function() {
			var params = [];
			var hs = player._("1\uce35", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__1_1.ggUpdateText();
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
		me.__1_1.onclick=function (e) {
			player.openNext("{node16}","");
		}
		me.__1_1.ggUpdatePosition=function (useTransition) {
		}
		me.__89.appendChild(me.__1_1);
		el=me.__2_6=document.createElement('div');
		els=me.__2_6__text=document.createElement('div');
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
		me.__2_6.ggUpdateText=function() {
			var params = [];
			var hs = player._("2\uce35", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__2_6.ggUpdateText();
		el.appendChild(els);
		me.__2_6.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__2_6.onclick=function (e) {
			player.openNext("{node21}","");
		}
		me.__2_6.ggUpdatePosition=function (useTransition) {
		}
		me.__89.appendChild(me.__2_6);
		me._container_2.appendChild(me.__89);
		me.__88.appendChild(me._container_2);
		me.__74.appendChild(me.__88);
		el=me.__86=document.createElement('div');
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
		me.__86.ggUpdatePosition=function (useTransition) {
		}
		el=me.__87=document.createElement('div');
		els=me.__87__text=document.createElement('div');
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
		hs+='width : 33.3333%;';
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
		me.__87.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.ggUserdata.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__87.ggUpdateText();
		player.addListener('changenode', function() {
			me.__87.ggUpdateText();
		});
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
		me.__87.ggUpdatePosition=function (useTransition) {
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
		me.__87.appendChild(me._image_7);
		me.__86.appendChild(me.__87);
		me.__74.appendChild(me.__86);
		el=me.__75=document.createElement('div');
		el.ggId="\ud3c9\uba74\ub3c4 \ucee8\ud14c\uc774\ub108";
		el.ggDx=0;
		el.ggDy=20;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 72.2581%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((72.2581% + 0px) / 2) + 20px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
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
		me.__75.logicBlock_visible = function() {
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
			if (me.__75.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__75.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__75.style.transition='';
				if (me.__75.ggCurrentLogicStateVisible == 0) {
					me.__75.style.visibility="hidden";
					me.__75.ggVisible=false;
				}
				else if (me.__75.ggCurrentLogicStateVisible == 1) {
					me.__75.style.visibility="hidden";
					me.__75.ggVisible=false;
				}
				else {
					me.__75.style.visibility=(Number(me.__75.style.opacity)>0||!me.__75.style.opacity)?'inherit':'hidden';
					me.__75.ggVisible=true;
				}
			}
		}
		me.__75.logicBlock_visible();
		me.__75.ggUpdatePosition=function (useTransition) {
		}
		el=me._dpc=document.createElement('div');
		el.ggId="\uc5f0\ub9bd\ud615D-pc";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 95%;';
		hs+='left : calc(50% - ((95% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((95% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 95%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._dpc.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._dpc.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player._(me.ggUserdata.comment) == "\uc5f0\ub9bd\ud615A"))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._dpc.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._dpc.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._dpc.style.transition='';
				if (me._dpc.ggCurrentLogicStateVisible == 0) {
					me._dpc.style.visibility=(Number(me._dpc.style.opacity)>0||!me._dpc.style.opacity)?'inherit':'hidden';
					me._dpc.ggVisible=true;
				}
				else {
					me._dpc.style.visibility="hidden";
					me._dpc.ggVisible=false;
				}
			}
		}
		me._dpc.logicBlock_visible();
		me._dpc.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_18=document.createElement('div');
		els=me._image_18__img=document.createElement('img');
		els.className='ggskin ggskin_image_18';
		hs=basePath + 'images/image_18.png';
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
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
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
		me._image_18.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player._(me.ggUserdata.description) == "1\uce35"))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._image_18.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._image_18.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._image_18.style.transition='';
				if (me._image_18.ggCurrentLogicStateVisible == 0) {
					me._image_18.style.visibility=(Number(me._image_18.style.opacity)>0||!me._image_18.style.opacity)?'inherit':'hidden';
					me._image_18.ggVisible=true;
				}
				else {
					me._image_18.style.visibility="hidden";
					me._image_18.ggVisible=false;
				}
			}
		}
		me._image_18.logicBlock_visible();
		me._image_18.ggUpdatePosition=function (useTransition) {
		}
		el=me.__85=document.createElement('div');
		el.ggMarkerNodeId='{node9}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="\ud604\uad00";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 157px;';
		hs+='position : absolute;';
		hs+='top : 23px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__85.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me.__85.onclick=function (e) {
			player.openNext('{node9}');
		}
		me.__85.ggUpdatePosition=function (useTransition) {
		}
		me._image_18.appendChild(me.__85);
		el=me.__84=document.createElement('div');
		el.ggMarkerNodeId='{node15}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="\ubcf5\ub3c4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 150px;';
		hs+='position : absolute;';
		hs+='top : 54px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__84.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me.__84.onclick=function (e) {
			player.openNext('{node15}');
		}
		me.__84.ggUpdatePosition=function (useTransition) {
		}
		me._image_18.appendChild(me.__84);
		el=me.__83=document.createElement('div');
		el.ggMarkerNodeId='{node19}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="\ubcf4\uc870\uc8fc\ubc29";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 182px;';
		hs+='position : absolute;';
		hs+='top : 46px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__83.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me.__83.onclick=function (e) {
			player.openNext('{node19}');
		}
		me.__83.ggUpdatePosition=function (useTransition) {
		}
		me._image_18.appendChild(me.__83);
		el=me.__82=document.createElement('div');
		el.ggMarkerNodeId='{node20}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="\uacf5\uc6a9\uc695\uc2e4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 126px;';
		hs+='position : absolute;';
		hs+='top : 68px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__82.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me.__82.onclick=function (e) {
			player.openNext('{node20}');
		}
		me.__82.ggUpdatePosition=function (useTransition) {
		}
		me._image_18.appendChild(me.__82);
		el=me.__81=document.createElement('div');
		el.ggMarkerNodeId='{node12}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="\uc548\ubc29\uc695\uc2e4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 115px;';
		hs+='position : absolute;';
		hs+='top : 93px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__81.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me.__81.onclick=function (e) {
			player.openNext('{node12}');
		}
		me.__81.ggUpdatePosition=function (useTransition) {
		}
		me._image_18.appendChild(me.__81);
		el=me.__80=document.createElement('div');
		el.ggMarkerNodeId='{node13}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="\uc548\ubc29 \ub4dc\ub808\uc2a4\ub8f8";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 118px;';
		hs+='position : absolute;';
		hs+='top : 131px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__80.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me.__80.onclick=function (e) {
			player.openNext('{node13}');
		}
		me.__80.ggUpdatePosition=function (useTransition) {
		}
		me._image_18.appendChild(me.__80);
		el=me.__79=document.createElement('div');
		el.ggMarkerNodeId='{node18}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="\uc548\ubc29";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 132px;';
		hs+='position : absolute;';
		hs+='top : 165px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__79.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me.__79.onclick=function (e) {
			player.openNext('{node18}');
		}
		me.__79.ggUpdatePosition=function (useTransition) {
		}
		me._image_18.appendChild(me.__79);
		el=me.__118=document.createElement('div');
		el.ggMarkerNodeId='{node14}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="\uc548\ubc291-1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 100px;';
		hs+='position : absolute;';
		hs+='top : 191px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__118.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me.__118.onclick=function (e) {
			player.openNext('{node14}');
		}
		me.__118.ggUpdatePosition=function (useTransition) {
		}
		me._image_18.appendChild(me.__118);
		el=me.__78=document.createElement('div');
		el.ggMarkerNodeId='{node16}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="\uac70\uc2e4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 175px;';
		hs+='position : absolute;';
		hs+='top : 160px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__78.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me.__78.onclick=function (e) {
			player.openNext('{node16}');
		}
		me.__78.ggUpdatePosition=function (useTransition) {
		}
		me._image_18.appendChild(me.__78);
		el=me.__117=document.createElement('div');
		el.ggMarkerNodeId='{node17}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="\uac70\uc2e41-1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 149px;';
		hs+='position : absolute;';
		hs+='top : 203px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__117.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me.__117.onclick=function (e) {
			player.openNext('{node17}');
		}
		me.__117.ggUpdatePosition=function (useTransition) {
		}
		me._image_18.appendChild(me.__117);
		el=me.__77=document.createElement('div');
		el.ggMarkerNodeId='{node1}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="\uacc4\ub2e8";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 196px;';
		hs+='position : absolute;';
		hs+='top : 105px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__77.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me.__77.onclick=function (e) {
			player.openNext('{node1}');
		}
		me.__77.ggUpdatePosition=function (useTransition) {
		}
		me._image_18.appendChild(me.__77);
		el=me.__76=document.createElement('div');
		el.ggMarkerNodeId='{node11}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="\uc8fc\ubc29";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 174px;';
		hs+='position : absolute;';
		hs+='top : 77px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__76.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me.__76.onclick=function (e) {
			player.openNext('{node11}');
		}
		me.__76.ggUpdatePosition=function (useTransition) {
		}
		me._image_18.appendChild(me.__76);
		el=me.__116=document.createElement('div');
		el.ggMarkerNodeId='{node10}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="\uc8fc\ubc291-1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 148px;';
		hs+='position : absolute;';
		hs+='top : 125px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__116.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me.__116.onclick=function (e) {
			player.openNext('{node10}');
		}
		me.__116.ggUpdatePosition=function (useTransition) {
		}
		me._image_18.appendChild(me.__116);
		el=me.__121=document.createElement('div');
		el.ggMarkerNodeId='{node26}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="\uc8fc\ubc291-2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 149px;';
		hs+='position : absolute;';
		hs+='top : 146px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__121.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me.__121.onclick=function (e) {
			player.openNext('{node26}');
		}
		me.__121.ggUpdatePosition=function (useTransition) {
		}
		me._image_18.appendChild(me.__121);
		el=me.__120=document.createElement('div');
		el.ggMarkerNodeId='{node22}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="\uac70\uc2e41-2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 173px;';
		hs+='position : absolute;';
		hs+='top : 203px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__120.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me.__120.onclick=function (e) {
			player.openNext('{node22}');
		}
		me.__120.ggUpdatePosition=function (useTransition) {
		}
		me._image_18.appendChild(me.__120);
		me._dpc.appendChild(me._image_18);
		el=me._image_12=document.createElement('div');
		els=me._image_12__img=document.createElement('img');
		els.className='ggskin ggskin_image_12';
		hs=basePath + 'images/image_12.png';
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
		el.ggDx=1;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 1px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
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
				((player._(me.ggUserdata.description) == "2\uce35"))
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
		el=me.__2_5=document.createElement('div');
		el.ggMarkerNodeId='{node2}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="2\uce35 \ud604\uad00";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 199px;';
		hs+='position : absolute;';
		hs+='top : 57px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__2_5.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me.__2_5.onclick=function (e) {
			player.openNext('{node2}');
		}
		me.__2_5.ggUpdatePosition=function (useTransition) {
		}
		me._image_12.appendChild(me.__2_5);
		el=me.__312=document.createElement('div');
		el.ggMarkerNodeId='{node3}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="\uce68\uc2e4 3";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 153px;';
		hs+='position : absolute;';
		hs+='top : 41px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__312.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me.__312.onclick=function (e) {
			player.openNext('{node3}');
		}
		me.__312.ggUpdatePosition=function (useTransition) {
		}
		me._image_12.appendChild(me.__312);
		el=me.__2_4=document.createElement('div');
		el.ggMarkerNodeId='{node7}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="2\uce35 \uc695\uc2e4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 117px;';
		hs+='position : absolute;';
		hs+='top : 140px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__2_4.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me.__2_4.onclick=function (e) {
			player.openNext('{node7}');
		}
		me.__2_4.ggUpdatePosition=function (useTransition) {
		}
		me._image_12.appendChild(me.__2_4);
		el=me.__2_20=document.createElement('div');
		el.ggMarkerNodeId='{node4}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="2\uce35 \uce68\uc2e42";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 118px;';
		hs+='position : absolute;';
		hs+='top : 103px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__2_20.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me.__2_20.onclick=function (e) {
			player.openNext('{node4}');
		}
		me.__2_20.ggUpdatePosition=function (useTransition) {
		}
		me._image_12.appendChild(me.__2_20);
		el=me.__2_3=document.createElement('div');
		el.ggMarkerNodeId='{node5}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="2\uce35 \uce68\uc2e4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 124px;';
		hs+='position : absolute;';
		hs+='top : 177px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__2_3.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me.__2_3.onclick=function (e) {
			player.openNext('{node5}');
		}
		me.__2_3.ggUpdatePosition=function (useTransition) {
		}
		me._image_12.appendChild(me.__2_3);
		el=me.__2_2=document.createElement('div');
		el.ggMarkerNodeId='{node21}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="2\uce35 \uac70\uc2e4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 159px;';
		hs+='position : absolute;';
		hs+='top : 138px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__2_2.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me.__2_2.onclick=function (e) {
			player.openNext('{node21}');
		}
		me.__2_2.ggUpdatePosition=function (useTransition) {
		}
		me._image_12.appendChild(me.__2_2);
		el=me.__219=document.createElement('div');
		el.ggMarkerNodeId='{node1}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="\uacc4\ub2e82";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 201px;';
		hs+='position : absolute;';
		hs+='top : 96px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__219.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me.__219.onclick=function (e) {
			player.openNext('{node1}');
		}
		me.__219.ggUpdatePosition=function (useTransition) {
		}
		me._image_12.appendChild(me.__219);
		el=me.__2_1=document.createElement('div');
		el.ggMarkerNodeId='{node8}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="2\uce35 \ubcf5\ub3c4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 163px;';
		hs+='position : absolute;';
		hs+='top : 87px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__2_1.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me.__2_1.onclick=function (e) {
			player.openNext('{node8}');
		}
		me.__2_1.ggUpdatePosition=function (useTransition) {
		}
		me._image_12.appendChild(me.__2_1);
		el=me.__2_0=document.createElement('div');
		el.ggMarkerNodeId='{node6}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="2\uce35 \uc8fc\ubc29";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 161px;';
		hs+='position : absolute;';
		hs+='top : 107px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__2_0.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me.__2_0.onclick=function (e) {
			player.openNext('{node6}');
		}
		me.__2_0.ggUpdatePosition=function (useTransition) {
		}
		me._image_12.appendChild(me.__2_0);
		me._dpc.appendChild(me._image_12);
		me.__75.appendChild(me._dpc);
		me.__74.appendChild(me.__75);
		me.__73.appendChild(me.__74);
		me.divSkin.appendChild(me.__73);
		el=me.__72=document.createElement('div');
		el.ggId="\uc624\ub978\ucabd \uc804\uccb4\ud654\uba74";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 40px;';
		hs+='position : absolute;';
		hs+='right : 25px;';
		hs+='top : 95px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__72.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__72.logicBlock_visible = function() {
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
			if (me.__72.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__72.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__72.style.transition='';
				if (me.__72.ggCurrentLogicStateVisible == 0) {
					me.__72.style.visibility="hidden";
					me.__72.ggVisible=false;
				}
				else if (me.__72.ggCurrentLogicStateVisible == 1) {
					me.__72.style.visibility="hidden";
					me.__72.ggVisible=false;
				}
				else if (me.__72.ggCurrentLogicStateVisible == 2) {
					me.__72.style.visibility="hidden";
					me.__72.ggVisible=false;
				}
				else {
					me.__72.style.visibility=(Number(me.__72.style.opacity)>0||!me.__72.style.opacity)?'inherit':'hidden';
					me.__72.ggVisible=true;
				}
			}
		}
		me.__72.logicBlock_visible();
		me.__72.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_2=document.createElement('div');
		el.ggId="Rectangle 2";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 100px;';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='padding: 16px 0; background: rgba(96,96,98,.3); backdrop-filter: blur(10px); box-shadow: 0 12px 24px 0 rgb(0 0 0 \/ 10%); box-sizing:border-box;';
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
		me._rectangle_2.onclick=function (e) {
			player.toggleFullscreen();
		}
		me._rectangle_2.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_9=document.createElement('div');
		els=me._image_9__img=document.createElement('img');
		els.className='ggskin ggskin_image_9';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAAA+NJREFUeF7tneF2pCAMheHJtn2y3T5Z2ydjT2bEOipOuJIM2Dv/2hMSvJ8BBMQY+OtKgdhVbViZ4AYkpfQvhPAnhPD2y3X/CiF8xxhFj83PHEhKSQB8/nIIpcv/WIMxBTJlxV/COFTgAYo1kEQYKgXeY4zSlNn1IcwOFYhs9BVjfCeQKs1MjV2ASEdeGlF9mF5ev86Lo8wY4637MOtDUkolIPPd0K9uNjU7asYJxEbzQ68E8gLRj0ISCIH8KHDFPmSadTia+rk/S0zPFOv7gRnSMEMqn6s2UyJSFQJpBASZj8ujpmUVCKQdkKNnKvXEIYG0AyJT5bWTpJtmi0AI5LqjrMpOXYRghjRKiF03QMdOIFZAABjMkM5gEIgFEDAzcl'+
			'XmVcD8D46yTlA6CUMiE8gJ/R+KVsCQZVeZ21o/o+yu+TBDAEI1MPIk4lQmQynuuSKQSiAIjJoQBFKj1n02VjNntekbtGEIRKvUHYZmhyUMg9PvFTAmsZ4BOQWDQCqBTIKVdlqehkEgGJC9afYmMAgEALJ4opbm6630ygDqmp06qpxROQIxEhZ1SyCockblCMRIWNQtgaDKGZUjECNhUbcEgipnVI5AjIRF3RIIqpxROQIxEhZ1SyCockblCMRIWNQtgaDKGZUjECNhUbcEgipnVI5AjIRF3RIIqpxRORjIauNXTweOHR7+ZaRjM7cQEODFlGYVrnS0+6ZrpQ9X82ogA8HIQg4FBQEy4oFjzXaFWKdLFZABsyPrN8zpQrVANPtarW8ixP9lgZSaq9v5HcDv6ZkglT6L/vZOTaj07WJemyElIFDH2frwmaOd6QSiuJ8I'+
			'ZCsSM0Rx43iaEIin2opYBKIQydOEQDzVVsQiEIVIniYE4qm2IhaBKETyNCEQT7UVsQhEIZKnCYF4qq2IRSAKkTxNegUiGiAzyK1njz1ZLGPtXsfm6wgpJa/Z3lcJ0XPc7QddDIA8O6qiZ4G86zYvccwfdGkNRK5IebqO98V3F2+5nmMNhFnyHP/+Z/MsMmTKknwEXk8b7p7LZG8hAxuB8TDAMc2Q5TVNQz75l3wYC/ldZZQl174BkQVxA4IQWAEt7ooZZU1dowGBaFRytCEQR7E1oQhEo5KjDYE4iq0JRSAalRxtCMRRbE0oAtGo5GhDII5ia0IRiEYlRxsCcRRbE4pANCo52hCIo9iaUBogt3fDNc6MbYpf2rzq5CLfMTS+ozTulxkyKhDolTuNOK+wWQIZcrn1Ss2V3AAzEPljwHfVL5UdGyCDQbkcjF0gud2csk'+
			'XWv3vanJA3BBTXpF/R7reM+dBktXRMX5gCBILpZlbqP1cAF6HWbcH8AAAAAElFTkSuQmCC';
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
		me._image_9.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_2.appendChild(me._image_9);
		me.__72.appendChild(me._rectangle_2);
		me.divSkin.appendChild(me.__72);
		el=me.__65=document.createElement('div');
		el.ggId="\uc624\ub978\ucabd \uacf5\uc720\ud654\uba74";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 40px;';
		hs+='position : absolute;';
		hs+='right : 25px;';
		hs+='top : 150px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__65.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__65.logicBlock_visible = function() {
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
			if (me.__65.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__65.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__65.style.transition='';
				if (me.__65.ggCurrentLogicStateVisible == 0) {
					me.__65.style.visibility="hidden";
					me.__65.ggVisible=false;
				}
				else if (me.__65.ggCurrentLogicStateVisible == 1) {
					me.__65.style.visibility="hidden";
					me.__65.ggVisible=false;
				}
				else if (me.__65.ggCurrentLogicStateVisible == 2) {
					me.__65.style.visibility="hidden";
					me.__65.ggVisible=false;
				}
				else {
					me.__65.style.visibility=(Number(me.__65.style.opacity)>0||!me.__65.style.opacity)?'inherit':'hidden';
					me.__65.ggVisible=true;
				}
			}
		}
		me.__65.logicBlock_visible();
		me.__65.ggUpdatePosition=function (useTransition) {
		}
		el=me.__70=document.createElement('div');
		el.ggId="\uacf5\uc720\ud654\uba74\ubc30\uacbd";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 100px;';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='padding: 16px 0; background: rgba(96,96,98,.3); backdrop-filter: blur(10px); box-shadow: 0 12px 24px 0 rgb(0 0 0 \/ 10%); box-sizing:border-box;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
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
		me.__70.onclick=function (e) {
			me.__66.ggVisible = !me.__66.ggVisible;
			var flag=me.__66.ggVisible;
			me.__66.style.transition='none';
			me.__66.style.visibility=((flag)&&(Number(me.__66.style.opacity)>0||!me.__66.style.opacity))?'inherit':'hidden';
		}
		me.__70.ggUpdatePosition=function (useTransition) {
		}
		el=me.__71=document.createElement('div');
		els=me.__71__img=document.createElement('img');
		els.className='ggskin ggskin__71';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAABJlJREFUeF7tnQly3SAMQPHJ2pyszcnanIyOiHExq8DCCJBnMpOfj4mthxaEsA8lBysJHKyuhvnFaK1/KqXgB44fzu/w+e/59y/4/TgO+7nqrgQIQlxa699KqV+Ipm4TAPJZC0aAZKTcCCLW4wcWjABJANFa//FMUqWCBM3BjH2UOhEgnoROPwEwehxFKAIkBEKtGT7YLBQB4oirg5lKaRk4ewgUgkOAnCIhdOBYUxeFIkD+A+ltqkJtOI5A/gJEKdXZkec0JtASAfIN5HXtOCkJkNhw1VprrOGnbnd4Zmt7DRlorgxbAfLuRBCjULe0imjIdwa318xcgGAk4LYZbbKUUqIhPjRx6rXDuHP7gWFvkNfa3ocA6wFpEzvEgnWS7Y'+
			'EMhBGEvCYM7mwN2HY/EkRqlr4lkBME3HvtGjnl4EquiWylIQy0Iuk77BdbAGEEAuSeLXhYGggzEEUYy/oQIhCfkWK4Vj+SXLL1O1xKQwhBQEhq1rzP1AoEALZisQYKQL36wpy4BBAiECCv5Eh2wEC7HByoWPxKFTGUoEwN5ATh19iW7jn2Pdqk2JNPQFdf2MrE0sVNCYRwLlENoiTQp99PB4TIPLEDMd08ZHUQ0wDZBQR7IFQgnmyeeeoPWs5n50MIQVTF/y3C63FOMxA/7LtUrnErFxGI7FyihwCp+0QDcfbXYdLW6O1cI+cS1MKk6K8IhCDmj+b+Cfq19882hG0BlAVCaEbg2q60M1G/S4HIRlkPE2q5gQGmrCVJ5/a5JIgkEAaFYymgS4PIARlVmp8EMdtcosV3RIEMLBiLZmDhj61p7CdCGXnu5dSZmaotzFMM'+
			'vAuEg6naFsTNZDHQju1B+EBaHq5CZWrRzwGh+oec+zEma7AzF+1wRogFMmzTY66wgPNI7nVtAqSXZBv7FSCNgut1GgcfIk494kMkyuo15Cv7tRoyEgh6Mavy3qZs7s7UR0ZaIDwB425pI1o0ohiVW4O5rRiO3K8dIbklGB/ISF+S0q6twARr6oxMlw9oCzDRIgfGUJZ3/smqkw5QTBKRsIBiSY3B1GVRLFwFGV1CMEtli4tAzvS8Ld2p2WuH2tolYO6uEgXEPcWp6QVIsJ3MPZpf1SBgvsVYDYRi5pfrg3A5eUpTxg6IhUUYVEwFhi0QYjDTRGTsgewGZhogu4CZDogThteE4NPkyaYE4mgLhN5DwCA2HNm3tFW9GGxqIG+DeRD5oeEsAeQNMA9g+OYyG4YvBaQTGMg+YDa61syZ93zmImE6pkbY2LZRKEtqiC8Rxm'+
			'D2frI1UzA3n7KFhkygMReULYF0cP5Yv5FqJ0AiazwUE8xmMPbVR1trSMSUjSyDMloiQBwqhItjLZpiIi4BwgeIeX2FALkDGWmyBAgzHyJABEiLq3vxHHHqLwob+68Gbskwey3FqXukCNc9sGPAthMgMYkNAnJlfUVDIlQGQLm2hguQhGF50ZdI+h1j3F+KuIL1ddGQDJ3OUKLFDgKkoC6dVhmTlScCBGO/6F5gXNzEJECQQKDZA20pgrCXIUAqgERWGe0uMv9p3QYAtK99zK0AaQTS67R/CENFg5QtN4wAAAAASUVORK5CYII=';
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
		el.ggId="\uacf5\uc720 \uc544\uc774\ucf58";
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
		me.__71.ggUpdatePosition=function (useTransition) {
		}
		me.__70.appendChild(me.__71);
		me.__65.appendChild(me.__70);
		el=me.__66=document.createElement('div');
		el.ggId="\uacf5\uc720 \uc8fc\uc18c";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : -70px;';
		hs+='height : 80px;';
		hs+='left : -300px;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 280px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
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
		el=me.__67=document.createElement('div');
		el.ggId="\uacf5\uc720\uc804\uccb4\ubc30\uacbd";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 8px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='background: linear-gradient(180deg, rgba(97, 101, 105, 0.4) 0%, rgba(97, 101, 105, 0.7) 98%); box-shadow: 0 12px 24px 0 rgb(0 0 0 \/ 10%); box-sizing:border-box;';
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
		el=me.__68=document.createElement('div');
		el.ggId="\uc8fc\uc18c\uc785\ub825\ub780";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 0px solid #ffffff;';
		hs+='cursor : default;';
		hs+='height : 40px;';
		hs+='left : 25px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((40px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 165px;';
		hs+='pointer-events:auto;';
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
		el=me.__69=document.createElement('div');
		el.ggId="\ubcf5\uc0ac \ubc84\ud2bc";
		el.ggDy=-1;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(77,77,77,0.784314);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 0px 5px 5px 0px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='position : absolute;';
		hs+='right : -70px;';
		hs+='top : calc(50% - ((100% + 0px) / 2) - 1px);';
		hs+='visibility : inherit;';
		hs+='width : 70px;';
		hs+='pointer-events:auto;';
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
		me.__69.onclick=function (e) {
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
		me.__69.ggUpdatePosition=function (useTransition) {
		}
		el=me._button=document.createElement('div');
		els=me._button__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="button";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
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
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._button.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ubcf5\uc0ac", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._button.ggUpdateText();
		el.appendChild(els);
		me._button.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._button.ggUpdatePosition=function (useTransition) {
		}
		me.__69.appendChild(me._button);
		me.__68.appendChild(me.__69);
		el=me._text_8=document.createElement('div');
		els=me._text_8__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 8";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='border : 1px solid rgba(255,255,255,0.588235);';
		hs+='border-radius : 5px 0px 0px 5px;';
		hs+='color : rgba(252,252,252,0.588235);';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 2px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 2px) / 2) + 0px);';
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
		hs+='font-size: 12px;';
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
		me._text_8.ggUpdateText=function() {
			var params = [];
			var hs = player._("", params);
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
		me.__68.appendChild(me._text_8);
		me.__67.appendChild(me.__68);
		me.__66.appendChild(me.__67);
		me.__65.appendChild(me.__66);
		me.divSkin.appendChild(me.__65);
		el=me.__57=document.createElement('div');
		el.ggId="\ubaa8\ub378\ud558\uc6b0\uc2a4 \ud0c0\uc785";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='z-index: 999;';
		hs+='height : 56px;';
		hs+='left : calc(50% - ((330px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 330px;';
		hs+='pointer-events:none;';
		hs+='min-width:330px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__57.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__57.logicBlock_visible = function() {
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
			if (me.__57.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__57.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__57.style.transition='';
				if (me.__57.ggCurrentLogicStateVisible == 0) {
					me.__57.style.visibility="hidden";
					me.__57.ggVisible=false;
				}
				else if (me.__57.ggCurrentLogicStateVisible == 1) {
					me.__57.style.visibility="hidden";
					me.__57.ggVisible=false;
				}
				else if (me.__57.ggCurrentLogicStateVisible == 2) {
					me.__57.style.visibility="hidden";
					me.__57.ggVisible=false;
				}
				else {
					me.__57.style.visibility=(Number(me.__57.style.opacity)>0||!me.__57.style.opacity)?'inherit':'hidden';
					me.__57.ggVisible=true;
				}
			}
		}
		me.__57.logicBlock_visible();
		me.__57.ggUpdatePosition=function (useTransition) {
		}
		el=me.__60=document.createElement('div');
		el.ggId="\ud0c0\uc785 \ubc30\uacbd";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(51,51,51,0.901961);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 0px 0px 6px 6px;';
		hs+='cursor : pointer;';
		hs+='height : 56px;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((56px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='background: linear-gradient(180deg, rgba(51, 51, 51, 0.8) 0%, rgba(97, 101, 105, 0.7) 98%); box-shadow: 0 12px 24px 0 rgb(0 0 0 \/ 10%);';
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
		me.__60.onclick=function (e) {
			me.__64.ggVisible = !me.__64.ggVisible;
			var flag=me.__64.ggVisible;
			me.__64.style.transition='none';
			me.__64.style.visibility=((flag)&&(Number(me.__64.style.opacity)>0||!me.__64.style.opacity))?'inherit':'hidden';
			me.__63.ggVisible = !me.__63.ggVisible;
			var flag=me.__63.ggVisible;
			me.__63.style.transition='none';
			me.__63.style.visibility=((flag)&&(Number(me.__63.style.opacity)>0||!me.__63.style.opacity))?'inherit':'hidden';
			me.__58.ggVisible = !me.__58.ggVisible;
			var flag=me.__58.ggVisible;
			me.__58.style.transition='none';
			me.__58.style.visibility=((flag)&&(Number(me.__58.style.opacity)>0||!me.__58.style.opacity))?'inherit':'hidden';
		}
		me.__60.ggUpdatePosition=function (useTransition) {
		}
		el=me.__61=document.createElement('div');
		els=me.__61__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ud0c0\uc785\uc81c\ubaa9";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(254,254,254,1);';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 50%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 21px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__61.ggUpdateText=function() {
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
		me.__61.ggUpdateText();
		player.addListener('changenode', function() {
			me.__61.ggUpdateText();
		});
		el.appendChild(els);
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
		me.__61.ggUpdatePosition=function (useTransition) {
		}
		el=me.__64=document.createElement('div');
		els=me.__64__img=document.createElement('img');
		els.className='ggskin ggskin__64';
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
		el.ggId="\uc5c5 \uba54\ub274";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 9px;';
		hs+='position : absolute;';
		hs+='right : -10px;';
		hs+='top : calc(50% - ((9px + 0px) / 2) + 0%);';
		hs+='visibility : hidden;';
		hs+='width : 12px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__64.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__64.ggUpdatePosition=function (useTransition) {
		}
		me.__61.appendChild(me.__64);
		el=me.__63=document.createElement('div');
		els=me.__63__img=document.createElement('img');
		els.className='ggskin ggskin__63';
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
		el.ggId="\ub2e4\uc6b4 \uba54\ub274";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 9px;';
		hs+='position : absolute;';
		hs+='right : -10px;';
		hs+='top : calc(50% - ((9px + 0px) / 2) + 0%);';
		hs+='visibility : inherit;';
		hs+='width : 12px;';
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
		me.__63.ggUpdatePosition=function (useTransition) {
		}
		me.__61.appendChild(me.__63);
		el=me._image_10=document.createElement('div');
		els=me._image_10__img=document.createElement('img');
		els.className='ggskin ggskin_image_10';
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
		el.ggId="Image 10";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 17px;';
		hs+='left : -10px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((17px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 17px;';
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
		me._image_10.ggUpdatePosition=function (useTransition) {
		}
		me.__61.appendChild(me._image_10);
		el=me.__62=document.createElement('div');
		els=me.__62__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc81c\uacf1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 15px;';
		hs+='position : absolute;';
		hs+='right : -5px;';
		hs+='top : 10px;';
		hs+='visibility : inherit;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: left;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__62.ggUpdateText=function() {
			var params = [];
			var hs = player._("2\n", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__62.ggUpdateText();
		el.appendChild(els);
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
		me.__62.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player._(me.ggUserdata.comment) == "\ub2e8\ub3c5\ud615"))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__62.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__62.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__62.style.transition='right 0s, top 0s';
				if (me.__62.ggCurrentLogicStatePosition == 0) {
					me.__62.style.right='0px';
					me.__62.style.top='10px';
				}
				else {
					me.__62.style.right='-5px';
					me.__62.style.top='10px';
				}
			}
		}
		me.__62.logicBlock_position();
		me.__62.ggUpdatePosition=function (useTransition) {
		}
		me.__61.appendChild(me.__62);
		me.__60.appendChild(me.__61);
		me.__57.appendChild(me.__60);
		el=me.__58=document.createElement('div');
		el.ggId="\ub4dc\ub86d\ub2e4\uc6b4 \ubc30\uacbd";
		el.ggDx=7;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 6px;';
		hs+='bottom : -235px;';
		hs+='cursor : pointer;';
		hs+='height : 225px;';
		hs+='left : calc(50% - ((230px + 0px) / 2) + 7px);';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 230px;';
		hs+='pointer-events:auto;';
		hs+='background: linear-gradient(180deg, rgba(97, 101, 105, 0.4) 0%, rgba(97, 101, 105, 0.7) 98%); box-shadow: 0 12px 24px 0 rgb(0 0 0 \/ 10%);';
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
		me.__58.ggUpdatePosition=function (useTransition) {
		}
		el=me.__114=document.createElement('div');
		els=me.__114__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ud0c0\uc785 1";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='border-color : rgba(255,255,255,0.784314) rgba(255,255,255,0.784314) rgba(253,253,253,0.392157) rgba(255,255,255,0.784314);';
		hs+='border-style : solid;';
		hs+='border-width : 0px 0px 1px 0px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : pointer;';
		hs+='height : 45px;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 18px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 4px 0px 4px 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__114.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ub2e8\ub3c5\ud615 135m", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__114.ggUpdateText();
		el.appendChild(els);
		me.__114.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__114.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['_114'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__114.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__114.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__114.style.transition='background-color 0s, color 0s';
				if (me.__114.ggCurrentLogicStateBackgroundColor == 0) {
					me.__114.style.backgroundColor="rgba(77,77,77,1)";
				}
				else {
					me.__114.style.backgroundColor="rgba(255,255,255,0)";
				}
			}
		}
		me.__114.logicBlock_backgroundcolor();
		me.__114.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((player._(me.ggUserdata.comment) == "\ub2e8\ub3c5\ud615"))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me.__114.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me.__114.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me.__114.style.transition='background-color 0s, color 0s';
				if (me.__114.ggCurrentLogicStateTextColor == 0) {
					me.__114.style.color="rgba(26,109,255,1)";
				}
				else {
					me.__114.style.color="rgba(255,255,255,1)";
				}
			}
		}
		me.__114.logicBlock_textcolor();
		me.__114.onclick=function (e) {
			player.openUrl("https:\/\/web-townhouse1-4fju66f2clmy8hj45.sel5.cloudtype.app\/","_self");
		}
		me.__114.onmouseover=function (e) {
			me.elementMouseOver['_114']=true;
			me.__114.logicBlock_backgroundcolor();
		}
		me.__114.onmouseout=function (e) {
			if (e && e.toElement) {
				var current = e.toElement;
				while (current = current.parentNode) {
				if (current == me.__114__text)
					return;
				}
			}
			me.elementMouseOver['_114']=false;
			me.__114.logicBlock_backgroundcolor();
		}
		me.__114.ggCurrentLogicStateBackgroundColor = -1;
		me.__114.ggCurrentLogicStateTextColor = -1;
		me.__114.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['_114']) {
				me.elementMouseOver['_114']=true;
			}
		}
		me.__114.ggUpdatePosition=function (useTransition) {
		}
		el=me.__115=document.createElement('div');
		els=me.__115__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc81c\uacf11";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 20px;';
		hs+='position : absolute;';
		hs+='right : 24%;';
		hs+='top : 8px;';
		hs+='visibility : inherit;';
		hs+='width : 10px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 12px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me.__115.ggUpdateText=function() {
			var params = [];
			var hs = player._("2\n", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__115.ggUpdateText();
		el.appendChild(els);
		me.__115.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__115.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((player._(me.ggUserdata.comment) == "\ub2e8\ub3c5\ud615"))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me.__115.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me.__115.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me.__115.style.transition='color 0s';
				if (me.__115.ggCurrentLogicStateTextColor == 0) {
					me.__115.style.color="rgba(26,109,255,1)";
				}
				else {
					me.__115.style.color="rgba(255,255,255,1)";
				}
			}
		}
		me.__115.logicBlock_textcolor();
		me.__115.ggUpdatePosition=function (useTransition) {
		}
		me.__114.appendChild(me.__115);
		me.__58.appendChild(me.__114);
		el=me.__217=document.createElement('div');
		els=me.__217__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ud0c0\uc785 2";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='border-color : rgba(255,255,255,0.784314) rgba(255,255,255,0.784314) rgba(253,253,253,0.392157) rgba(255,255,255,0.784314);';
		hs+='border-style : solid;';
		hs+='border-width : 0px 0px 1px 0px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : pointer;';
		hs+='height : 45px;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 45px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 18px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 4px 0px 4px 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__217.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc5f0\ub9bd\ud615A 141m", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__217.ggUpdateText();
		el.appendChild(els);
		me.__217.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__217.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['_217'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__217.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__217.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__217.style.transition='background-color 0s, color 0s';
				if (me.__217.ggCurrentLogicStateBackgroundColor == 0) {
					me.__217.style.backgroundColor="rgba(77,77,77,1)";
				}
				else {
					me.__217.style.backgroundColor="rgba(255,255,255,0)";
				}
			}
		}
		me.__217.logicBlock_backgroundcolor();
		me.__217.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((player._(me.ggUserdata.comment) == "\uc5f0\ub9bd\ud615A"))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me.__217.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me.__217.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me.__217.style.transition='background-color 0s, color 0s';
				if (me.__217.ggCurrentLogicStateTextColor == 0) {
					me.__217.style.color="rgba(26,109,255,1)";
				}
				else {
					me.__217.style.color="rgba(255,255,255,1)";
				}
			}
		}
		me.__217.logicBlock_textcolor();
		me.__217.onclick=function (e) {
			player.openUrl("","_self");
		}
		me.__217.onmouseover=function (e) {
			me.elementMouseOver['_217']=true;
			me.__217.logicBlock_backgroundcolor();
		}
		me.__217.onmouseout=function (e) {
			if (e && e.toElement) {
				var current = e.toElement;
				while (current = current.parentNode) {
				if (current == me.__217__text)
					return;
				}
			}
			me.elementMouseOver['_217']=false;
			me.__217.logicBlock_backgroundcolor();
		}
		me.__217.ggCurrentLogicStateBackgroundColor = -1;
		me.__217.ggCurrentLogicStateTextColor = -1;
		me.__217.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['_217']) {
				me.elementMouseOver['_217']=true;
			}
		}
		me.__217.ggUpdatePosition=function (useTransition) {
		}
		el=me.__218=document.createElement('div');
		els=me.__218__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc81c\uacf12";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 20px;';
		hs+='position : absolute;';
		hs+='right : 21%;';
		hs+='top : 8px;';
		hs+='visibility : inherit;';
		hs+='width : 10px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 12px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me.__218.ggUpdateText=function() {
			var params = [];
			var hs = player._("2\n", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__218.ggUpdateText();
		el.appendChild(els);
		me.__218.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__218.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((player._(me.ggUserdata.comment) == "\uc5f0\ub9bd\ud615A"))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me.__218.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me.__218.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me.__218.style.transition='color 0s';
				if (me.__218.ggCurrentLogicStateTextColor == 0) {
					me.__218.style.color="rgba(26,109,255,1)";
				}
				else {
					me.__218.style.color="rgba(255,255,255,1)";
				}
			}
		}
		me.__218.logicBlock_textcolor();
		me.__218.ggUpdatePosition=function (useTransition) {
		}
		me.__217.appendChild(me.__218);
		me.__58.appendChild(me.__217);
		el=me.__310=document.createElement('div');
		els=me.__310__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ud0c0\uc785 3";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='border-color : rgba(255,255,255,0.784314) rgba(255,255,255,0.784314) rgba(253,253,253,0.392157) rgba(255,255,255,0.784314);';
		hs+='border-style : solid;';
		hs+='border-width : 0px 0px 1px 0px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : pointer;';
		hs+='height : 45px;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 90px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 18px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 4px 0px 4px 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__310.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc5f0\ub9bd\ud615B 135m", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__310.ggUpdateText();
		el.appendChild(els);
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
		me.__310.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['_310'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__310.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__310.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__310.style.transition='background-color 0s, color 0s';
				if (me.__310.ggCurrentLogicStateBackgroundColor == 0) {
					me.__310.style.backgroundColor="rgba(77,77,77,1)";
				}
				else {
					me.__310.style.backgroundColor="rgba(255,255,255,0)";
				}
			}
		}
		me.__310.logicBlock_backgroundcolor();
		me.__310.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((player._(me.ggUserdata.comment) == "\uc5f0\ub9bd\ud615B"))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me.__310.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me.__310.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me.__310.style.transition='background-color 0s, color 0s';
				if (me.__310.ggCurrentLogicStateTextColor == 0) {
					me.__310.style.color="rgba(26,109,255,1)";
				}
				else {
					me.__310.style.color="rgba(255,255,255,1)";
				}
			}
		}
		me.__310.logicBlock_textcolor();
		me.__310.onclick=function (e) {
			player.openUrl("","_self");
		}
		me.__310.onmouseover=function (e) {
			me.elementMouseOver['_310']=true;
			me.__310.logicBlock_backgroundcolor();
		}
		me.__310.onmouseout=function (e) {
			if (e && e.toElement) {
				var current = e.toElement;
				while (current = current.parentNode) {
				if (current == me.__310__text)
					return;
				}
			}
			me.elementMouseOver['_310']=false;
			me.__310.logicBlock_backgroundcolor();
		}
		me.__310.ggCurrentLogicStateBackgroundColor = -1;
		me.__310.ggCurrentLogicStateTextColor = -1;
		me.__310.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['_310']) {
				me.elementMouseOver['_310']=true;
			}
		}
		me.__310.ggUpdatePosition=function (useTransition) {
		}
		el=me.__311=document.createElement('div');
		els=me.__311__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc81c\uacf13";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 20px;';
		hs+='position : absolute;';
		hs+='right : 21%;';
		hs+='top : 8px;';
		hs+='visibility : inherit;';
		hs+='width : 10px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 12px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me.__311.ggUpdateText=function() {
			var params = [];
			var hs = player._("2\n", params);
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
		me.__311.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((player._(me.ggUserdata.comment) == "\uc5f0\ub9bd\ud615B"))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me.__311.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me.__311.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me.__311.style.transition='color 0s';
				if (me.__311.ggCurrentLogicStateTextColor == 0) {
					me.__311.style.color="rgba(26,109,255,1)";
				}
				else {
					me.__311.style.color="rgba(255,255,255,1)";
				}
			}
		}
		me.__311.logicBlock_textcolor();
		me.__311.ggUpdatePosition=function (useTransition) {
		}
		me.__310.appendChild(me.__311);
		me.__58.appendChild(me.__310);
		el=me.__410=document.createElement('div');
		els=me.__410__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ud0c0\uc785 4";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='border-color : rgba(255,255,255,0.784314) rgba(255,255,255,0.784314) rgba(253,253,253,0.392157) rgba(255,255,255,0.784314);';
		hs+='border-style : solid;';
		hs+='border-width : 0px 0px 1px 0px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : pointer;';
		hs+='height : 45px;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 135px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 18px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 4px 0px 4px 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__410.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc5f0\ub9bd\ud615C 177m", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__410.ggUpdateText();
		el.appendChild(els);
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
		me.__410.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['_410'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__410.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__410.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__410.style.transition='background-color 0s, color 0s';
				if (me.__410.ggCurrentLogicStateBackgroundColor == 0) {
					me.__410.style.backgroundColor="rgba(77,77,77,1)";
				}
				else {
					me.__410.style.backgroundColor="rgba(255,255,255,0)";
				}
			}
		}
		me.__410.logicBlock_backgroundcolor();
		me.__410.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((player._(me.ggUserdata.comment) == "\uc5f0\ub9bd\ud615C"))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me.__410.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me.__410.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me.__410.style.transition='background-color 0s, color 0s';
				if (me.__410.ggCurrentLogicStateTextColor == 0) {
					me.__410.style.color="rgba(26,109,255,1)";
				}
				else {
					me.__410.style.color="rgba(255,255,255,1)";
				}
			}
		}
		me.__410.logicBlock_textcolor();
		me.__410.onclick=function (e) {
			player.openUrl("","_self");
		}
		me.__410.onmouseover=function (e) {
			me.elementMouseOver['_410']=true;
			me.__410.logicBlock_backgroundcolor();
		}
		me.__410.onmouseout=function (e) {
			if (e && e.toElement) {
				var current = e.toElement;
				while (current = current.parentNode) {
				if (current == me.__410__text)
					return;
				}
			}
			me.elementMouseOver['_410']=false;
			me.__410.logicBlock_backgroundcolor();
		}
		me.__410.ggCurrentLogicStateBackgroundColor = -1;
		me.__410.ggCurrentLogicStateTextColor = -1;
		me.__410.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['_410']) {
				me.elementMouseOver['_410']=true;
			}
		}
		me.__410.ggUpdatePosition=function (useTransition) {
		}
		el=me.__411=document.createElement('div');
		els=me.__411__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc81c\uacf14";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 20px;';
		hs+='position : absolute;';
		hs+='right : 21%;';
		hs+='top : 8px;';
		hs+='visibility : inherit;';
		hs+='width : 10px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 12px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me.__411.ggUpdateText=function() {
			var params = [];
			var hs = player._("2\n", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__411.ggUpdateText();
		el.appendChild(els);
		me.__411.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__411.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((player._(me.ggUserdata.comment) == "\uc5f0\ub9bd\ud615C"))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me.__411.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me.__411.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me.__411.style.transition='color 0s';
				if (me.__411.ggCurrentLogicStateTextColor == 0) {
					me.__411.style.color="rgba(26,109,255,1)";
				}
				else {
					me.__411.style.color="rgba(255,255,255,1)";
				}
			}
		}
		me.__411.logicBlock_textcolor();
		me.__411.ggUpdatePosition=function (useTransition) {
		}
		me.__410.appendChild(me.__411);
		me.__58.appendChild(me.__410);
		el=me.__59=document.createElement('div');
		els=me.__59__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ud0c0\uc785 5";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='border-color : rgba(255,255,255,0.784314) rgba(255,255,255,0.784314) rgba(77,77,77,0.705882) rgba(255,255,255,0.784314);';
		hs+='border-style : solid;';
		hs+='border-width : 0px 0px 0px 0px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : pointer;';
		hs+='height : 45px;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 180px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 18px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 4px 0px 4px 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__59.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc5f0\ub9bd\ud615D 125m", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__59.ggUpdateText();
		el.appendChild(els);
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
				((me.elementMouseOver['_59'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__59.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__59.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__59.style.transition='background-color 0s, color 0s';
				if (me.__59.ggCurrentLogicStateBackgroundColor == 0) {
					me.__59.style.backgroundColor="rgba(77,77,77,1)";
				}
				else {
					me.__59.style.backgroundColor="rgba(255,255,255,0)";
				}
			}
		}
		me.__59.logicBlock_backgroundcolor();
		me.__59.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((player._(me.ggUserdata.comment) == "\uc5f0\ub9bd\ud615D"))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me.__59.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me.__59.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me.__59.style.transition='background-color 0s, color 0s';
				if (me.__59.ggCurrentLogicStateTextColor == 0) {
					me.__59.style.color="rgba(26,109,255,1)";
				}
				else {
					me.__59.style.color="rgba(255,255,255,1)";
				}
			}
		}
		me.__59.logicBlock_textcolor();
		me.__59.onclick=function (e) {
			player.openUrl("","_self");
		}
		me.__59.onmouseover=function (e) {
			me.elementMouseOver['_59']=true;
			me.__59.logicBlock_backgroundcolor();
		}
		me.__59.onmouseout=function (e) {
			if (e && e.toElement) {
				var current = e.toElement;
				while (current = current.parentNode) {
				if (current == me.__59__text)
					return;
				}
			}
			me.elementMouseOver['_59']=false;
			me.__59.logicBlock_backgroundcolor();
		}
		me.__59.ggCurrentLogicStateBackgroundColor = -1;
		me.__59.ggCurrentLogicStateTextColor = -1;
		me.__59.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['_59']) {
				me.elementMouseOver['_59']=true;
			}
		}
		me.__59.ggUpdatePosition=function (useTransition) {
		}
		el=me.__510=document.createElement('div');
		els=me.__510__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc81c\uacf15";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 20px;';
		hs+='position : absolute;';
		hs+='right : 21%;';
		hs+='top : 8px;';
		hs+='visibility : inherit;';
		hs+='width : 10px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 12px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me.__510.ggUpdateText=function() {
			var params = [];
			var hs = player._("2\n", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__510.ggUpdateText();
		el.appendChild(els);
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
		me.__510.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((player._(me.ggUserdata.comment) == "\uc5f0\ub9bd\ud615D"))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me.__510.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me.__510.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me.__510.style.transition='color 0s';
				if (me.__510.ggCurrentLogicStateTextColor == 0) {
					me.__510.style.color="rgba(26,109,255,1)";
				}
				else {
					me.__510.style.color="rgba(255,255,255,1)";
				}
			}
		}
		me.__510.logicBlock_textcolor();
		me.__510.ggUpdatePosition=function (useTransition) {
		}
		me.__59.appendChild(me.__510);
		me.__58.appendChild(me.__59);
		me.__57.appendChild(me.__58);
		me.divSkin.appendChild(me.__57);
		el=me.__46=document.createElement('div');
		el.ggId="\ubaa8\ubc14\uc77c \uce74\ud14c\uace0\ub9ac";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='z-index: 999;';
		hs+='bottom : -40%;';
		hs+='height : 40%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0%);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		hs+='min-width:360px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__46.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__46.logicBlock_position = function() {
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
			if (me.__46.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__46.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__46.style.transition='left 500ms ease 0ms, bottom 500ms ease 0ms';
				if (me.__46.ggCurrentLogicStatePosition == 0) {
					me.__46.style.left = 'calc(50% - (100% / 2))';
					me.__46.style.bottom='0%';
				}
				else {
					me.__46.style.left='calc(50% - ((100% + 0px) / 2) + 0%)';
					me.__46.style.bottom='-40%';
				}
			}
		}
		me.__46.logicBlock_position();
		me.__46.ggUpdatePosition=function (useTransition) {
		}
		el=me.__47=document.createElement('div');
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
		el=me.__53=document.createElement('div');
		el.ggId="\ubaa8\ubc14\uc77c \ud3c9\uba74\ub3c4\ud30c\ud2b8";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 40%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 100px;';
		hs+='visibility : hidden;';
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
		me.__53.ggUpdatePosition=function (useTransition) {
		}
		el=me.__54=document.createElement('div');
		el.ggId="\ub2e8\ub3c5\ud615 \ubaa8\ubc14\uc77c \ud3c9\uba74\ub3c4";
		el.ggDx=0;
		el.ggDy=20;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 90%;';
		hs+='left : calc(50% - ((90% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((90% + 0px) / 2) + 20px);';
		hs+='visibility : hidden;';
		hs+='width : 90%;';
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
		me.__54.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player._(me.ggUserdata.comment) == "\uc5f0\ub9bd\ud615A"))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__54.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__54.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__54.style.transition='';
				if (me.__54.ggCurrentLogicStateVisible == 0) {
					me.__54.style.visibility=(Number(me.__54.style.opacity)>0||!me.__54.style.opacity)?'inherit':'hidden';
					me.__54.ggVisible=true;
				}
				else {
					me.__54.style.visibility="hidden";
					me.__54.ggVisible=false;
				}
			}
		}
		me.__54.logicBlock_visible();
		me.__54.ggUpdatePosition=function (useTransition) {
		}
		el=me.__1_0=document.createElement('div');
		els=me.__1_0__img=document.createElement('img');
		els.className='ggskin ggskin__1_0';
		hs=basePath + 'images/_1_0.png';
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
		el.ggId="\ub2e8\ub3c5\ud615 1\uce35- \ubaa8\ubc14\uc77c";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
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
		me.__1_0.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player._(me.ggUserdata.description) == "1\uce35"))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__1_0.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__1_0.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__1_0.style.transition='';
				if (me.__1_0.ggCurrentLogicStateVisible == 0) {
					me.__1_0.style.visibility=(Number(me.__1_0.style.opacity)>0||!me.__1_0.style.opacity)?'inherit':'hidden';
					me.__1_0.ggVisible=true;
				}
				else {
					me.__1_0.style.visibility="hidden";
					me.__1_0.ggVisible=false;
				}
			}
		}
		me.__1_0.logicBlock_visible();
		me.__1_0.ggUpdatePosition=function (useTransition) {
		}
		me.__54.appendChild(me.__1_0);
		el=me.__216=document.createElement('div');
		els=me.__216__img=document.createElement('img');
		els.className='ggskin ggskin__216';
		hs=basePath + 'images/_216.png';
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
		el.ggId="\ub2e8\ub3c5\ud615 2\uce35-\ubaa8\ubc14\uc77c";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__216.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__216.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player._(me.ggUserdata.description) == "2\uce35"))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__216.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__216.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__216.style.transition='';
				if (me.__216.ggCurrentLogicStateVisible == 0) {
					me.__216.style.visibility=(Number(me.__216.style.opacity)>0||!me.__216.style.opacity)?'inherit':'hidden';
					me.__216.ggVisible=true;
				}
				else {
					me.__216.style.visibility="hidden";
					me.__216.ggVisible=false;
				}
			}
		}
		me.__216.logicBlock_visible();
		me.__216.ggUpdatePosition=function (useTransition) {
		}
		me.__54.appendChild(me.__216);
		me.__53.appendChild(me.__54);
		me.__47.appendChild(me.__53);
		el=me.__48=document.createElement('div');
		el.ggId="\ubaa8\ubc14\uc77c \uce74\ud14c\uace0\ub9ac \ud30c\ud2b8";
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
		me.__48.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__48.ggUpdatePosition=function (useTransition) {
		}
		el=me.__113=document.createElement('div');
		els=me.__113__content=document.createElement('div');
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
		hs+='height : 107px;';
		hs+='left : 0px;';
		hs+='overflow-x : visible;';
		hs+='overflow-y : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='width : 99px;';
		hs+="";
		els.setAttribute('style',hs);
		me.__113.ggScrollByX = function(diffX) {
			if(!me.__113.ggHorScrollVisible || diffX == 0 || me.__113.ggHPercentVisible >= 1.0) return;
			me.__113.ggScrollPosX = (me.__113__horScrollFg.offsetLeft + diffX);
			me.__113.ggScrollPosX = Math.max(me.__113.ggScrollPosX, 0);
			me.__113.ggScrollPosX = Math.min(me.__113.ggScrollPosX, me.__113__horScrollBg.offsetWidth - me.__113__horScrollFg.offsetWidth);
			me.__113__horScrollFg.style.left = me.__113.ggScrollPosX + 'px';
			let percentScrolled = me.__113.ggScrollPosX / (me.__113__horScrollBg.offsetWidth - me.__113__horScrollFg.offsetWidth);
			me.__113__content.style.left = -(Math.round((me.__113.ggContentWidth * (1.0 - me.__113.ggHPercentVisible)) * percentScrolled)) + me.__113.ggContentLeftOffset + 'px';
			me.__113.ggScrollPosXPercent = (me.__113__horScrollFg.offsetLeft / me.__113__horScrollBg.offsetWidth);
		}
		me.__113.ggScrollByXSmooth = function(diffX) {
			if(!me.__113.ggHorScrollVisible || diffX == 0 || me.__113.ggHPercentVisible >= 1.0) return;
			var scrollPerInterval = diffX / 25;
			var scrollCurrX = 0;
			var id = setInterval(function() {
				scrollCurrX += scrollPerInterval;
				me.__113.ggScrollPosX += scrollPerInterval;
				if (diffX > 0 && (scrollCurrX >= diffX || me.__113.ggScrollPosX >= me.__113__horScrollBg.offsetWidth - me.__113__horScrollFg.offsetWidth)) {
					me.__113.ggScrollPosX = Math.min(me.__113.ggScrollPosX, me.__113__horScrollBg.offsetWidth - me.__113__horScrollFg.offsetWidth);
					clearInterval(id);
				}
				if (diffX < 0 && (scrollCurrX <= diffX || me.__113.ggScrollPosX <= 0)) {
					me.__113.ggScrollPosX = Math.max(me.__113.ggScrollPosX, 0);
					clearInterval(id);
				}
			me.__113__horScrollFg.style.left = me.__113.ggScrollPosX + 'px';
			let percentScrolled = me.__113.ggScrollPosX / (me.__113__horScrollBg.offsetWidth - me.__113__horScrollFg.offsetWidth);
			me.__113__content.style.left = -(Math.round((me.__113.ggContentWidth * (1.0 - me.__113.ggHPercentVisible)) * percentScrolled)) + me.__113.ggContentLeftOffset + 'px';
			me.__113.ggScrollPosXPercent = (me.__113__horScrollFg.offsetLeft / me.__113__horScrollBg.offsetWidth);
			}, 10);
		}
		me.__113.ggScrollByY = function(diffY) {
			if(!me.__113.ggVertScrollVisible || diffY == 0 || me.__113.ggVPercentVisible >= 1.0) return;
			me.__113.ggScrollPosY = (me.__113__vertScrollFg.offsetTop + diffY);
			me.__113.ggScrollPosY = Math.max(me.__113.ggScrollPosY, 0);
			me.__113.ggScrollPosY = Math.min(me.__113.ggScrollPosY, me.__113__vertScrollBg.offsetHeight - me.__113__vertScrollFg.offsetHeight);
			me.__113__vertScrollFg.style.top = me.__113.ggScrollPosY + 'px';
			let percentScrolled = me.__113.ggScrollPosY / (me.__113__vertScrollBg.offsetHeight - me.__113__vertScrollFg.offsetHeight);
			me.__113__content.style.top = -(Math.round((me.__113.ggContentHeight * (1.0 - me.__113.ggVPercentVisible)) * percentScrolled)) + me.__113.ggContentTopOffset + 'px';
			me.__113.ggScrollPosYPercent = (me.__113__vertScrollFg.offsetTop / me.__113__vertScrollBg.offsetHeight);
		}
		me.__113.ggScrollByYSmooth = function(diffY) {
			if(!me.__113.ggVertScrollVisible || diffY == 0 || me.__113.ggVPercentVisible >= 1.0) return;
			var scrollPerInterval = diffY / 25;
			var scrollCurrY = 0;
			var id = setInterval(function() {
				scrollCurrY += scrollPerInterval;
				me.__113.ggScrollPosY += scrollPerInterval;
				if (diffY > 0 && (scrollCurrY >= diffY || me.__113.ggScrollPosY >= me.__113__vertScrollBg.offsetHeight - me.__113__vertScrollFg.offsetHeight)) {
					me.__113.ggScrollPosY = Math.min(me.__113.ggScrollPosY, me.__113__vertScrollBg.offsetHeight - me.__113__vertScrollFg.offsetHeight);
					clearInterval(id);
				}
				if (diffY < 0 && (scrollCurrY <= diffY || me.__113.ggScrollPosY <= 0)) {
					me.__113.ggScrollPosY = Math.max(me.__113.ggScrollPosY, 0);
					clearInterval(id);
				}
			me.__113__vertScrollFg.style.top = me.__113.ggScrollPosY + 'px';
			let percentScrolled = me.__113.ggScrollPosY / (me.__113__vertScrollBg.offsetHeight - me.__113__vertScrollFg.offsetHeight);
			me.__113__content.style.top = -(Math.round((me.__113.ggContentHeight * (1.0 - me.__113.ggVPercentVisible)) * percentScrolled)) + me.__113.ggContentTopOffset + 'px';
			me.__113.ggScrollPosYPercent = (me.__113__vertScrollFg.offsetTop / me.__113__vertScrollBg.offsetHeight);
			}, 10);
		}
		me.__113.ggScrollIntoView = function(posX, posY, width, height) {
			if (me.__113.ggHorScrollVisible) {
				if (posX < 0) {
					var diffX = Math.floor(posX * me.__113.ggHPercentVisible);
					me.__113.ggScrollByXSmooth(diffX);
				} else if (posX + width > me.__113.clientWidth - (me.__113.ggVertScrollVisible ? 0 : 0)) {
					var diffX = Math.ceil(((posX + width) - (me.__113.clientWidth - (me.__113.ggVertScrollVisible ? 0 : 0))) * me.__113.ggHPercentVisible);
					me.__113.ggScrollByXSmooth(diffX);
				}
			}
			if (me.__113.ggVertScrollVisible) {
				if (posY < 0) {
					var diffY = Math.floor(posY * me.__113.ggVPercentVisible);
					me.__113.ggScrollByYSmooth(diffY);
				} else if (posY + height > me.__113.clientHeight - (me.__113.ggHorScrollVisible ? 0 : 0)) {
					var diffY = Math.ceil(((posY + height) - (me.__113.clientHeight - (me.__113.ggHorScrollVisible ? 0 : 0))) * me.__113.ggVPercentVisible);
					me.__113.ggScrollByYSmooth(diffY);
				}
			}
		}
		me.__113__content.mousetouchend = e => {
			let inertiaInterval = setInterval(function() {
				me.__113.ggDragInertiaX *= 0.65;
				me.__113.ggDragInertiaY *= 0.65;
				me.__113.ggScrollByX(me.__113.ggDragInertiaX);
				me.__113.ggScrollByY(me.__113.ggDragInertiaY);
				if (Math.abs(me.__113.ggDragInertiaX) < 1.0 && Math.abs(me.__113.ggDragInertiaY) < 1.0) {
					clearInterval(inertiaInterval);
				}
				}, 50);
			me.__113__content.onmouseup = null;
			me.__113__content.onmousemove = null;
			me.__113__content.ontouchend = null;
			me.__113__content.ontouchmove = null;
			me.__113__content.onpointerup = null;
			me.__113__content.onpointermove = null;
			setTimeout(function() { me.__113.ggIsDragging = false; }, 100);
		}
		me.__113__content.mousetouchmove = e => {
			e = e || window.event;
			e.preventDefault();
			var t = e.touches;
			var eventX = t ? t[0].clientX : e.clientX;
			var eventY = t ? t[0].clientY : e.clientY;
			if (Math.abs(eventX - me.__113.ggDragStartX) > 10 || Math.abs(eventY - me.__113.ggDragStartY) > 10) me.__113.ggIsDragging = true;
			var diffX = (eventX - me.__113.ggDragLastX) * me.__113.ggHPercentVisible;
			var diffY = (eventY - me.__113.ggDragLastY) * me.__113.ggVPercentVisible;
			me.__113.ggDragInertiaX = -diffX;
			me.__113.ggDragInertiaY = -diffY;
			me.__113.ggDragLastX = eventX;
			me.__113.ggDragLastY = eventY;
			me.__113.ggScrollByX(-diffX);
			me.__113.ggScrollByY(-diffY);
		}
		me.__113__content.mousetouchstart = e => {
			e = e || window.event;
			var t = e.touches;
			me.__113.ggDragLastX = me.__113.ggDragStartX = t ? t[0].clientX : e.clientX;
			me.__113.ggDragLastY = me.__113.ggDragStartY = t ? t[0].clientY : e.clientY;
			me.__113__content.onmouseup = me.__113__content.mousetouchend;
			me.__113__content.ontouchend = me.__113__content.mousetouchend;
			me.__113__content.onmousemove = me.__113__content.mousetouchmove;
			me.__113__content.ontouchmove = me.__113__content.mousetouchmove;
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				me.__113__content.onpointerup = me.__113__content.ontouchend;
				me.__113__content.onpointermove = me.__113__content.ontouchmove;
			}
		}
		els.onmousedown = me.__113__content.mousetouchstart;
		els.ontouchstart = me.__113__content.mousetouchstart;
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			els.onpointerdown = me.__113__content.mousetouchstart;
		}
		elHorScrollBg = me.__113__horScrollBg = document.createElement('div');
		el.appendChild(elHorScrollBg);
		elHorScrollBg.setAttribute('style', 'position: absolute; left: 0px; bottom: 0px; visibility: hidden; width: 640px; height: 0px; background-color: rgba(128,128,128,1); pointer-events: auto;');
		elHorScrollBg.className='ggskin ggskin_scrollarea_hscrollbg';
		elHorScrollFg = me.__113__horScrollFg = document.createElement('div');
		elHorScrollBg.appendChild(elHorScrollFg);
		elHorScrollFg.className='ggskin ggskin_scrollarea_hscrollfg';
		elHorScrollFg.setAttribute('style', 'position: absolute; left: 0px; top: 0px; visibility: hidden; width: 640px; height: 0px; background-color: rgba(192,192,192,1); pointer-events: auto;');
		me.__113.ggScrollPosX = 0;
		me.__113.ggScrollPosXPercent = 0.0;
		elHorScrollFg.onmousedown = function(e) {
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) return;
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			me.__113.ggDragLastX = e.clientX;
			document.onmouseup = function() {
				let inertiaInterval = setInterval(function() {
					me.__113.ggDragInertiaX *= 0.65;
					me.__113.ggScrollByX(me.__113.ggDragInertiaX);
					if (Math.abs(me.__113.ggDragInertiaX) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 50);
				document.onmouseup = null;
				document.onmousemove = null;
			}
			document.onmousemove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var diffX = e.clientX - me.__113.ggDragLastX;
				me.__113.ggDragInertiaX = diffX;
				me.__113.ggDragLastX = e.clientX;
				me.__113.ggScrollByX(diffX);
			}
		}
		elHorScrollFg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			me.__113.ggDragLastX = t ? t[0].clientX : e.clientX;
			document.ontouchend = function() {
				let inertiaInterval = setInterval(function() {
					me.__113.ggDragInertiaX *= 0.65;
					me.__113.ggScrollByX(me.__113.ggDragInertiaX);
					if (Math.abs(me.__113.ggDragInertiaX) < 1.0) {
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
				var diffX = (t ? t[0].clientX : e.clientX) - me.__113.ggDragLastX;
				me.__113.ggDragInertiaX = diffX;
				me.__113.ggDragLastX = t ? t[0].clientX : e.clientX;
				me.__113.ggScrollByX(diffX);
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
			var diffX = me.__113.ggScrollWidth;
			if (e.offsetX < me.__113.ggScrollPosX) {
				diffX = diffX * -1;
			}
			me.__113.ggScrollByXSmooth(diffX);
		}
		elHorScrollBg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			var rect = me.__113__horScrollBg.getBoundingClientRect();
			var diffX = me.__113.ggScrollWidth;
			if ((t[0].clientX - rect.left) < me.__113.ggScrollPosX) {
				diffX = diffX * -1;
			}
			me.__113.ggScrollByXSmooth(diffX);
		}
		el.addEventListener('wheel', function(e) {
			e.preventDefault();
			var wheelDelta = Math.sign(e.deltaX);
			me.__113.ggScrollByXSmooth(30 * me.__113.ggHPercentVisible * wheelDelta);
		});
		elCornerBg = me.__113__cornerBg = document.createElement('div');
		el.appendChild(elCornerBg);
		elCornerBg.setAttribute('style', 'position: absolute; right: 0px; bottom: 0px; visibility: hidden; width: 0px; height: 0px; background-color: rgba(255,255,255,1);');
		elCornerBg.className='ggskin ggskin_scrollarea_scrollcorner';
		el.ggId="\ubaa8\ubc14\uc77c \uc2a4\ud06c\ub864 1\uce35";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_scrollarea ";
		el.ggType='scrollarea';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : -100%;';
		hs+='height : 102px;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__113.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__113.logicBlock_position = function() {
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
			if (me.__113.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__113.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__113.style.transition='left 0s, bottom 0s';
				if (me.__113.ggCurrentLogicStatePosition == 0) {
					me.__113.style.left = 'calc(50% - (100% / 2))';
					me.__113.style.bottom='-120%';
				}
				else {
					me.__113.style.left='calc(50% - ((100% + 0px) / 2) + 0px)';
					me.__113.style.bottom='-100%';
				}
			}
		}
		me.__113.logicBlock_position();
		me.__113.ggUpdatePosition=function (useTransition) {
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
				this.ggContent.style.left = -(Math.round(me.__113.ggScrollPosX / me.__113.ggHPercentVisible)) + this.ggContentLeftOffset + 'px';
				this.ggContent.style.marginLeft = '0px';
				this.ggContent.style.top = this.ggContentTopOffset + 'px';
				this.ggContent.style.marginTop = '0px';
				me.__113__horScrollBg.style.visibility = 'inherit';
				me.__113__horScrollFg.style.visibility = 'inherit';
				me.__113.ggHorScrollVisible = true;
				if(me.__113.ggHorScrollVisible) {
					me.__113.ggAvailableHeight = me.__113.clientHeight - 0;
					if (me.__113.ggVertScrollVisible) {
						me.__113.ggAvailableWidth = me.__113.clientWidth - 0;
						me.__113.ggAvailableWidthWithScale = me.__113.getBoundingClientRect().width - me.__113__horScrollBg.getBoundingClientRect().height;
					} else {
						me.__113.ggAvailableWidth = me.__113.clientWidth;
						me.__113.ggAvailableWidthWithScale = me.__113.getBoundingClientRect().width;
					}
					me.__113__horScrollBg.style.width = me.__113.ggAvailableWidth + 'px';
					me.__113.ggHPercentVisible = contentWidth != 0 ? me.__113.ggAvailableWidthWithScale / contentWidth : 0.0;
					if (me.__113.ggHPercentVisible > 1.0) me.__113.ggHPercentVisible = 1.0;
					me.__113.ggScrollWidth = Math.round(me.__113__horScrollBg.offsetWidth * me.__113.ggHPercentVisible);
					me.__113__horScrollFg.style.width = me.__113.ggScrollWidth + 'px';
					me.__113.ggScrollPosX = me.__113.ggScrollPosXPercent * me.__113.ggAvailableWidth;
					me.__113.ggScrollPosX = Math.min(me.__113.ggScrollPosX, me.__113__horScrollBg.offsetWidth - me.__113__horScrollFg.offsetWidth);
					me.__113__horScrollFg.style.left = me.__113.ggScrollPosX + 'px';
					if (me.__113.ggHPercentVisible < 1.0) {
						let percentScrolled = me.__113.ggScrollPosX / (me.__113__horScrollBg.offsetWidth - me.__113__horScrollFg.offsetWidth);
						me.__113__content.style.left = -(Math.round((me.__113.ggContentWidth * (1.0 - me.__113.ggHPercentVisible)) * percentScrolled)) + this.ggContentLeftOffset + 'px';
					}
				} else {
					me.__113.ggAvailableHeight = me.__113.clientHeight;
					me.__113.ggScrollPosX = 0;
					me.__113.ggScrollPosXPercent = 0.0;
					me.__113__content.style.left = this.ggContentLeftOffset + 'px';
				}
				if(horScrollWasVisible != me.__113.ggHorScrollVisible || vertScrollWasVisible != me.__113.ggVertScrollVisible) {
					skin.updateSize(me.__113);
					me.__113.ggUpdatePosition();
				}
			}
		}
		el=me.__50=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me.__50;
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
		hs+='height : 102px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
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
		me.__50.ggUpdatePosition=function (useTransition) {
		}
		el=me.__51=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me.__51;
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
		el.ggHeight = 102;
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
			if(me.__51.ggUpdating == true) return;
			me.__51.ggUpdating = true;
			var el=me.__51;
			var curNumRows = 0;
			curNumRows = me.__51.ggNumRepeat;
			if (curNumRows < 1) curNumRows = 1;
			if (typeof filter=='object') {
				el.ggFilter = filter;
			} else {
				filter = el.ggFilter;
			};
			if (me.ggTag) filter.push(me.ggTag);
			filter=filter.sort();
			if ((el.ggNumRows == curNumRows) && (el.ggInstances.length > 0) && (filter.length === el.ggCurrentFilter.length) && (filter.every(function(value, index) { return value === el.ggCurrentFilter[index] }) )) {
				me.__51.ggUpdating = false;
				return;
			} else {
				el.ggNumCols = 1;
				el.ggNumRows = curNumRows;
			var centerOffsetHor = 0;
			var centerOffsetVert = 0;
				me.__51.ggCloneOffsetChanged = false;
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
			tourNodes = me.__51.getFilteredNodes(tourNodes, filter);
			me.__51.ggNumFilterPassed = tourNodes.length;
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var nodeData = player.getNodeUserdata(nodeId);
				if (!keepCloning || i < me.__51.ggCloneOffset) continue;
				var parameter={};
				parameter.top = centerOffsetVert + (row * me.__51.ggHeight) + 'px';
				parameter.left = centerOffsetHor + (column * me.__51.ggWidth) + 'px';
				parameter.width='100%';
				parameter.height='100%';
				parameter.index=currentIndex;
				parameter.title=nodeData['title'];
				var inst = new SkinCloner__51_Class(nodeId, me, el, parameter);
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
			me.__51.ggNodeCount = me.__51.ggNumFilterPassed;
			me.__51.ggUpdating = false;
			player.triggerEvent('clonerchanged');
			if (me.__51.parentNode && me.__51.parentNode.classList.contains('ggskin_subelement') && me.__51.parentNode.parentNode.classList.contains('ggskin_scrollarea')) me.__51.parentNode.parentNode.ggUpdatePosition();
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
		me.__51.ggUpdateConditionNodeChange=function () {
			var cnode=player.getCurrentNode();
			for(var i=0; i<me.__51.childNodes.length; i++) {
				var child=me.__51.childNodes[i];
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
		me.__51.ggUpdatePosition=function (useTransition) {
			var pw = this.parentNode.clientWidth;
			this.ggWidth = (pw*100)/100.0;
			var ph = this.parentNode.clientHeight;
			this.ggHeight = (ph*100)/100.0;
			me.__51.ggUpdate();
		}
		me.__50.appendChild(me.__51);
		me.__113__content.appendChild(me.__50);
		me.__48.appendChild(me.__113);
		el=me.__213=document.createElement('div');
		els=me.__213__content=document.createElement('div');
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
		hs+='height : 107px;';
		hs+='left : 0px;';
		hs+='overflow-x : visible;';
		hs+='overflow-y : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='width : 99px;';
		hs+="";
		els.setAttribute('style',hs);
		me.__213.ggScrollByX = function(diffX) {
			if(!me.__213.ggHorScrollVisible || diffX == 0 || me.__213.ggHPercentVisible >= 1.0) return;
			me.__213.ggScrollPosX = (me.__213__horScrollFg.offsetLeft + diffX);
			me.__213.ggScrollPosX = Math.max(me.__213.ggScrollPosX, 0);
			me.__213.ggScrollPosX = Math.min(me.__213.ggScrollPosX, me.__213__horScrollBg.offsetWidth - me.__213__horScrollFg.offsetWidth);
			me.__213__horScrollFg.style.left = me.__213.ggScrollPosX + 'px';
			let percentScrolled = me.__213.ggScrollPosX / (me.__213__horScrollBg.offsetWidth - me.__213__horScrollFg.offsetWidth);
			me.__213__content.style.left = -(Math.round((me.__213.ggContentWidth * (1.0 - me.__213.ggHPercentVisible)) * percentScrolled)) + me.__213.ggContentLeftOffset + 'px';
			me.__213.ggScrollPosXPercent = (me.__213__horScrollFg.offsetLeft / me.__213__horScrollBg.offsetWidth);
		}
		me.__213.ggScrollByXSmooth = function(diffX) {
			if(!me.__213.ggHorScrollVisible || diffX == 0 || me.__213.ggHPercentVisible >= 1.0) return;
			var scrollPerInterval = diffX / 25;
			var scrollCurrX = 0;
			var id = setInterval(function() {
				scrollCurrX += scrollPerInterval;
				me.__213.ggScrollPosX += scrollPerInterval;
				if (diffX > 0 && (scrollCurrX >= diffX || me.__213.ggScrollPosX >= me.__213__horScrollBg.offsetWidth - me.__213__horScrollFg.offsetWidth)) {
					me.__213.ggScrollPosX = Math.min(me.__213.ggScrollPosX, me.__213__horScrollBg.offsetWidth - me.__213__horScrollFg.offsetWidth);
					clearInterval(id);
				}
				if (diffX < 0 && (scrollCurrX <= diffX || me.__213.ggScrollPosX <= 0)) {
					me.__213.ggScrollPosX = Math.max(me.__213.ggScrollPosX, 0);
					clearInterval(id);
				}
			me.__213__horScrollFg.style.left = me.__213.ggScrollPosX + 'px';
			let percentScrolled = me.__213.ggScrollPosX / (me.__213__horScrollBg.offsetWidth - me.__213__horScrollFg.offsetWidth);
			me.__213__content.style.left = -(Math.round((me.__213.ggContentWidth * (1.0 - me.__213.ggHPercentVisible)) * percentScrolled)) + me.__213.ggContentLeftOffset + 'px';
			me.__213.ggScrollPosXPercent = (me.__213__horScrollFg.offsetLeft / me.__213__horScrollBg.offsetWidth);
			}, 10);
		}
		me.__213.ggScrollByY = function(diffY) {
			if(!me.__213.ggVertScrollVisible || diffY == 0 || me.__213.ggVPercentVisible >= 1.0) return;
			me.__213.ggScrollPosY = (me.__213__vertScrollFg.offsetTop + diffY);
			me.__213.ggScrollPosY = Math.max(me.__213.ggScrollPosY, 0);
			me.__213.ggScrollPosY = Math.min(me.__213.ggScrollPosY, me.__213__vertScrollBg.offsetHeight - me.__213__vertScrollFg.offsetHeight);
			me.__213__vertScrollFg.style.top = me.__213.ggScrollPosY + 'px';
			let percentScrolled = me.__213.ggScrollPosY / (me.__213__vertScrollBg.offsetHeight - me.__213__vertScrollFg.offsetHeight);
			me.__213__content.style.top = -(Math.round((me.__213.ggContentHeight * (1.0 - me.__213.ggVPercentVisible)) * percentScrolled)) + me.__213.ggContentTopOffset + 'px';
			me.__213.ggScrollPosYPercent = (me.__213__vertScrollFg.offsetTop / me.__213__vertScrollBg.offsetHeight);
		}
		me.__213.ggScrollByYSmooth = function(diffY) {
			if(!me.__213.ggVertScrollVisible || diffY == 0 || me.__213.ggVPercentVisible >= 1.0) return;
			var scrollPerInterval = diffY / 25;
			var scrollCurrY = 0;
			var id = setInterval(function() {
				scrollCurrY += scrollPerInterval;
				me.__213.ggScrollPosY += scrollPerInterval;
				if (diffY > 0 && (scrollCurrY >= diffY || me.__213.ggScrollPosY >= me.__213__vertScrollBg.offsetHeight - me.__213__vertScrollFg.offsetHeight)) {
					me.__213.ggScrollPosY = Math.min(me.__213.ggScrollPosY, me.__213__vertScrollBg.offsetHeight - me.__213__vertScrollFg.offsetHeight);
					clearInterval(id);
				}
				if (diffY < 0 && (scrollCurrY <= diffY || me.__213.ggScrollPosY <= 0)) {
					me.__213.ggScrollPosY = Math.max(me.__213.ggScrollPosY, 0);
					clearInterval(id);
				}
			me.__213__vertScrollFg.style.top = me.__213.ggScrollPosY + 'px';
			let percentScrolled = me.__213.ggScrollPosY / (me.__213__vertScrollBg.offsetHeight - me.__213__vertScrollFg.offsetHeight);
			me.__213__content.style.top = -(Math.round((me.__213.ggContentHeight * (1.0 - me.__213.ggVPercentVisible)) * percentScrolled)) + me.__213.ggContentTopOffset + 'px';
			me.__213.ggScrollPosYPercent = (me.__213__vertScrollFg.offsetTop / me.__213__vertScrollBg.offsetHeight);
			}, 10);
		}
		me.__213.ggScrollIntoView = function(posX, posY, width, height) {
			if (me.__213.ggHorScrollVisible) {
				if (posX < 0) {
					var diffX = Math.floor(posX * me.__213.ggHPercentVisible);
					me.__213.ggScrollByXSmooth(diffX);
				} else if (posX + width > me.__213.clientWidth - (me.__213.ggVertScrollVisible ? 0 : 0)) {
					var diffX = Math.ceil(((posX + width) - (me.__213.clientWidth - (me.__213.ggVertScrollVisible ? 0 : 0))) * me.__213.ggHPercentVisible);
					me.__213.ggScrollByXSmooth(diffX);
				}
			}
			if (me.__213.ggVertScrollVisible) {
				if (posY < 0) {
					var diffY = Math.floor(posY * me.__213.ggVPercentVisible);
					me.__213.ggScrollByYSmooth(diffY);
				} else if (posY + height > me.__213.clientHeight - (me.__213.ggHorScrollVisible ? 0 : 0)) {
					var diffY = Math.ceil(((posY + height) - (me.__213.clientHeight - (me.__213.ggHorScrollVisible ? 0 : 0))) * me.__213.ggVPercentVisible);
					me.__213.ggScrollByYSmooth(diffY);
				}
			}
		}
		me.__213__content.mousetouchend = e => {
			let inertiaInterval = setInterval(function() {
				me.__213.ggDragInertiaX *= 0.65;
				me.__213.ggDragInertiaY *= 0.65;
				me.__213.ggScrollByX(me.__213.ggDragInertiaX);
				me.__213.ggScrollByY(me.__213.ggDragInertiaY);
				if (Math.abs(me.__213.ggDragInertiaX) < 1.0 && Math.abs(me.__213.ggDragInertiaY) < 1.0) {
					clearInterval(inertiaInterval);
				}
				}, 50);
			me.__213__content.onmouseup = null;
			me.__213__content.onmousemove = null;
			me.__213__content.ontouchend = null;
			me.__213__content.ontouchmove = null;
			me.__213__content.onpointerup = null;
			me.__213__content.onpointermove = null;
			setTimeout(function() { me.__213.ggIsDragging = false; }, 100);
		}
		me.__213__content.mousetouchmove = e => {
			e = e || window.event;
			e.preventDefault();
			var t = e.touches;
			var eventX = t ? t[0].clientX : e.clientX;
			var eventY = t ? t[0].clientY : e.clientY;
			if (Math.abs(eventX - me.__213.ggDragStartX) > 10 || Math.abs(eventY - me.__213.ggDragStartY) > 10) me.__213.ggIsDragging = true;
			var diffX = (eventX - me.__213.ggDragLastX) * me.__213.ggHPercentVisible;
			var diffY = (eventY - me.__213.ggDragLastY) * me.__213.ggVPercentVisible;
			me.__213.ggDragInertiaX = -diffX;
			me.__213.ggDragInertiaY = -diffY;
			me.__213.ggDragLastX = eventX;
			me.__213.ggDragLastY = eventY;
			me.__213.ggScrollByX(-diffX);
			me.__213.ggScrollByY(-diffY);
		}
		me.__213__content.mousetouchstart = e => {
			e = e || window.event;
			var t = e.touches;
			me.__213.ggDragLastX = me.__213.ggDragStartX = t ? t[0].clientX : e.clientX;
			me.__213.ggDragLastY = me.__213.ggDragStartY = t ? t[0].clientY : e.clientY;
			me.__213__content.onmouseup = me.__213__content.mousetouchend;
			me.__213__content.ontouchend = me.__213__content.mousetouchend;
			me.__213__content.onmousemove = me.__213__content.mousetouchmove;
			me.__213__content.ontouchmove = me.__213__content.mousetouchmove;
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				me.__213__content.onpointerup = me.__213__content.ontouchend;
				me.__213__content.onpointermove = me.__213__content.ontouchmove;
			}
		}
		els.onmousedown = me.__213__content.mousetouchstart;
		els.ontouchstart = me.__213__content.mousetouchstart;
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			els.onpointerdown = me.__213__content.mousetouchstart;
		}
		elHorScrollBg = me.__213__horScrollBg = document.createElement('div');
		el.appendChild(elHorScrollBg);
		elHorScrollBg.setAttribute('style', 'position: absolute; left: 0px; bottom: 0px; visibility: hidden; width: 640px; height: 0px; background-color: rgba(128,128,128,1); pointer-events: auto;');
		elHorScrollBg.className='ggskin ggskin_scrollarea_hscrollbg';
		elHorScrollFg = me.__213__horScrollFg = document.createElement('div');
		elHorScrollBg.appendChild(elHorScrollFg);
		elHorScrollFg.className='ggskin ggskin_scrollarea_hscrollfg';
		elHorScrollFg.setAttribute('style', 'position: absolute; left: 0px; top: 0px; visibility: hidden; width: 640px; height: 0px; background-color: rgba(192,192,192,1); pointer-events: auto;');
		me.__213.ggScrollPosX = 0;
		me.__213.ggScrollPosXPercent = 0.0;
		elHorScrollFg.onmousedown = function(e) {
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) return;
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			me.__213.ggDragLastX = e.clientX;
			document.onmouseup = function() {
				let inertiaInterval = setInterval(function() {
					me.__213.ggDragInertiaX *= 0.65;
					me.__213.ggScrollByX(me.__213.ggDragInertiaX);
					if (Math.abs(me.__213.ggDragInertiaX) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 50);
				document.onmouseup = null;
				document.onmousemove = null;
			}
			document.onmousemove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var diffX = e.clientX - me.__213.ggDragLastX;
				me.__213.ggDragInertiaX = diffX;
				me.__213.ggDragLastX = e.clientX;
				me.__213.ggScrollByX(diffX);
			}
		}
		elHorScrollFg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			me.__213.ggDragLastX = t ? t[0].clientX : e.clientX;
			document.ontouchend = function() {
				let inertiaInterval = setInterval(function() {
					me.__213.ggDragInertiaX *= 0.65;
					me.__213.ggScrollByX(me.__213.ggDragInertiaX);
					if (Math.abs(me.__213.ggDragInertiaX) < 1.0) {
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
				var diffX = (t ? t[0].clientX : e.clientX) - me.__213.ggDragLastX;
				me.__213.ggDragInertiaX = diffX;
				me.__213.ggDragLastX = t ? t[0].clientX : e.clientX;
				me.__213.ggScrollByX(diffX);
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
			var diffX = me.__213.ggScrollWidth;
			if (e.offsetX < me.__213.ggScrollPosX) {
				diffX = diffX * -1;
			}
			me.__213.ggScrollByXSmooth(diffX);
		}
		elHorScrollBg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			var rect = me.__213__horScrollBg.getBoundingClientRect();
			var diffX = me.__213.ggScrollWidth;
			if ((t[0].clientX - rect.left) < me.__213.ggScrollPosX) {
				diffX = diffX * -1;
			}
			me.__213.ggScrollByXSmooth(diffX);
		}
		el.addEventListener('wheel', function(e) {
			e.preventDefault();
			var wheelDelta = Math.sign(e.deltaX);
			me.__213.ggScrollByXSmooth(30 * me.__213.ggHPercentVisible * wheelDelta);
		});
		elCornerBg = me.__213__cornerBg = document.createElement('div');
		el.appendChild(elCornerBg);
		elCornerBg.setAttribute('style', 'position: absolute; right: 0px; bottom: 0px; visibility: hidden; width: 0px; height: 0px; background-color: rgba(255,255,255,1);');
		elCornerBg.className='ggskin ggskin_scrollarea_scrollcorner';
		el.ggId="\ubaa8\ubc14\uc77c \uc2a4\ud06c\ub864 2\uce35";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_scrollarea ";
		el.ggType='scrollarea';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : -100%;';
		hs+='height : 102px;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__213.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__213.logicBlock_position = function() {
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
			if (me.__213.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__213.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__213.style.transition='left 0s, bottom 0s';
				if (me.__213.ggCurrentLogicStatePosition == 0) {
					me.__213.style.left = 'calc(50% - (100% / 2))';
					me.__213.style.bottom='-120%';
				}
				else {
					me.__213.style.left='calc(50% - ((100% + 0px) / 2) + 0px)';
					me.__213.style.bottom='-100%';
				}
			}
		}
		me.__213.logicBlock_position();
		me.__213.ggUpdatePosition=function (useTransition) {
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
				this.ggContent.style.left = -(Math.round(me.__213.ggScrollPosX / me.__213.ggHPercentVisible)) + this.ggContentLeftOffset + 'px';
				this.ggContent.style.marginLeft = '0px';
				this.ggContent.style.top = this.ggContentTopOffset + 'px';
				this.ggContent.style.marginTop = '0px';
				me.__213__horScrollBg.style.visibility = 'inherit';
				me.__213__horScrollFg.style.visibility = 'inherit';
				me.__213.ggHorScrollVisible = true;
				if(me.__213.ggHorScrollVisible) {
					me.__213.ggAvailableHeight = me.__213.clientHeight - 0;
					if (me.__213.ggVertScrollVisible) {
						me.__213.ggAvailableWidth = me.__213.clientWidth - 0;
						me.__213.ggAvailableWidthWithScale = me.__213.getBoundingClientRect().width - me.__213__horScrollBg.getBoundingClientRect().height;
					} else {
						me.__213.ggAvailableWidth = me.__213.clientWidth;
						me.__213.ggAvailableWidthWithScale = me.__213.getBoundingClientRect().width;
					}
					me.__213__horScrollBg.style.width = me.__213.ggAvailableWidth + 'px';
					me.__213.ggHPercentVisible = contentWidth != 0 ? me.__213.ggAvailableWidthWithScale / contentWidth : 0.0;
					if (me.__213.ggHPercentVisible > 1.0) me.__213.ggHPercentVisible = 1.0;
					me.__213.ggScrollWidth = Math.round(me.__213__horScrollBg.offsetWidth * me.__213.ggHPercentVisible);
					me.__213__horScrollFg.style.width = me.__213.ggScrollWidth + 'px';
					me.__213.ggScrollPosX = me.__213.ggScrollPosXPercent * me.__213.ggAvailableWidth;
					me.__213.ggScrollPosX = Math.min(me.__213.ggScrollPosX, me.__213__horScrollBg.offsetWidth - me.__213__horScrollFg.offsetWidth);
					me.__213__horScrollFg.style.left = me.__213.ggScrollPosX + 'px';
					if (me.__213.ggHPercentVisible < 1.0) {
						let percentScrolled = me.__213.ggScrollPosX / (me.__213__horScrollBg.offsetWidth - me.__213__horScrollFg.offsetWidth);
						me.__213__content.style.left = -(Math.round((me.__213.ggContentWidth * (1.0 - me.__213.ggHPercentVisible)) * percentScrolled)) + this.ggContentLeftOffset + 'px';
					}
				} else {
					me.__213.ggAvailableHeight = me.__213.clientHeight;
					me.__213.ggScrollPosX = 0;
					me.__213.ggScrollPosXPercent = 0.0;
					me.__213__content.style.left = this.ggContentLeftOffset + 'px';
				}
				if(horScrollWasVisible != me.__213.ggHorScrollVisible || vertScrollWasVisible != me.__213.ggVertScrollVisible) {
					skin.updateSize(me.__213);
					me.__213.ggUpdatePosition();
				}
			}
		}
		el=me.__214=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me.__214;
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
		hs+='height : 102px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__214.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__214.ggUpdatePosition=function (useTransition) {
		}
		el=me.__215=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me.__215;
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
		el.ggHeight = 102;
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
			if(me.__215.ggUpdating == true) return;
			me.__215.ggUpdating = true;
			var el=me.__215;
			var curNumRows = 0;
			curNumRows = me.__215.ggNumRepeat;
			if (curNumRows < 1) curNumRows = 1;
			if (typeof filter=='object') {
				el.ggFilter = filter;
			} else {
				filter = el.ggFilter;
			};
			if (me.ggTag) filter.push(me.ggTag);
			filter=filter.sort();
			if ((el.ggNumRows == curNumRows) && (el.ggInstances.length > 0) && (filter.length === el.ggCurrentFilter.length) && (filter.every(function(value, index) { return value === el.ggCurrentFilter[index] }) )) {
				me.__215.ggUpdating = false;
				return;
			} else {
				el.ggNumCols = 1;
				el.ggNumRows = curNumRows;
			var centerOffsetHor = 0;
			var centerOffsetVert = 0;
				me.__215.ggCloneOffsetChanged = false;
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
			tourNodes = me.__215.getFilteredNodes(tourNodes, filter);
			me.__215.ggNumFilterPassed = tourNodes.length;
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var nodeData = player.getNodeUserdata(nodeId);
				if (!keepCloning || i < me.__215.ggCloneOffset) continue;
				var parameter={};
				parameter.top = centerOffsetVert + (row * me.__215.ggHeight) + 'px';
				parameter.left = centerOffsetHor + (column * me.__215.ggWidth) + 'px';
				parameter.width='100%';
				parameter.height='100%';
				parameter.index=currentIndex;
				parameter.title=nodeData['title'];
				var inst = new SkinCloner__215_Class(nodeId, me, el, parameter);
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
			me.__215.ggNodeCount = me.__215.ggNumFilterPassed;
			me.__215.ggUpdating = false;
			player.triggerEvent('clonerchanged');
			if (me.__215.parentNode && me.__215.parentNode.classList.contains('ggskin_subelement') && me.__215.parentNode.parentNode.classList.contains('ggskin_scrollarea')) me.__215.parentNode.parentNode.ggUpdatePosition();
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
		me.__215.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__215.ggUpdateConditionNodeChange=function () {
			var cnode=player.getCurrentNode();
			for(var i=0; i<me.__215.childNodes.length; i++) {
				var child=me.__215.childNodes[i];
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
		me.__215.ggUpdatePosition=function (useTransition) {
			var pw = this.parentNode.clientWidth;
			this.ggWidth = (pw*100)/100.0;
			var ph = this.parentNode.clientHeight;
			this.ggHeight = (ph*100)/100.0;
			me.__215.ggUpdate();
		}
		me.__214.appendChild(me.__215);
		me.__213__content.appendChild(me.__214);
		me.__48.appendChild(me.__213);
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
		hs+='top : 80px;';
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
		me.__1_.onclick=function (e) {
			player.setVariableValue('vis_button2', true);
			player.setVariableValue('vis_button', false);
			me.__113.style.transition='none';
			me.__113.style.visibility=(Number(me.__113.style.opacity)>0||!me.__113.style.opacity)?'inherit':'hidden';
			me.__113.ggVisible=true;
			me.__213.style.transition='none';
			me.__213.style.visibility='hidden';
			me.__213.ggVisible=false;
			me.__216.style.transition='none';
			me.__216.style.visibility='hidden';
			me.__216.ggVisible=false;
			me.__1_0.style.transition='none';
			me.__1_0.style.visibility=(Number(me.__1_0.style.opacity)>0||!me.__1_0.style.opacity)?'inherit':'hidden';
			me.__1_0.ggVisible=true;
		}
		me.__1_.ggUpdatePosition=function (useTransition) {
		}
		el=me.__112=document.createElement('div');
		els=me.__112__text=document.createElement('div');
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
		me.__112.ggUpdateText=function() {
			var params = [];
			var hs = player._("1\uce35", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__112.ggUpdateText();
		el.appendChild(els);
		me.__112.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__112.logicBlock_backgroundcolor = function() {
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
			if (me.__112.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__112.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__112.style.transition='background-color 0s';
				if (me.__112.ggCurrentLogicStateBackgroundColor == 0) {
					me.__112.style.backgroundColor="rgba(26,109,255,1)";
				}
				else {
					me.__112.style.backgroundColor="rgba(255,255,255,0.117647)";
				}
			}
		}
		me.__112.logicBlock_backgroundcolor();
		me.__112.ggUpdatePosition=function (useTransition) {
		}
		me.__1_.appendChild(me.__112);
		me.__48.appendChild(me.__1_);
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
		hs+='top : 80px;';
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
		me.__2_.onclick=function (e) {
			player.setVariableValue('vis_button', true);
			player.setVariableValue('vis_button2', false);
			me.__213.style.transition='none';
			me.__213.style.visibility=(Number(me.__213.style.opacity)>0||!me.__213.style.opacity)?'inherit':'hidden';
			me.__213.ggVisible=true;
			me.__113.style.transition='none';
			me.__113.style.visibility='hidden';
			me.__113.ggVisible=false;
			me.__216.style.transition='none';
			me.__216.style.visibility=(Number(me.__216.style.opacity)>0||!me.__216.style.opacity)?'inherit':'hidden';
			me.__216.ggVisible=true;
			me.__1_0.style.transition='none';
			me.__1_0.style.visibility='hidden';
			me.__1_0.ggVisible=false;
		}
		me.__2_.ggUpdatePosition=function (useTransition) {
		}
		el=me.__212=document.createElement('div');
		els=me.__212__text=document.createElement('div');
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
		me.__212.ggUpdateText=function() {
			var params = [];
			var hs = player._("2\uce35", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__212.ggUpdateText();
		el.appendChild(els);
		me.__212.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__212.logicBlock_backgroundcolor = function() {
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
			if (me.__212.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__212.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__212.style.transition='background-color 0s';
				if (me.__212.ggCurrentLogicStateBackgroundColor == 0) {
					me.__212.style.backgroundColor="rgba(26,109,255,1)";
				}
				else {
					me.__212.style.backgroundColor="rgba(255,255,255,0.117647)";
				}
			}
		}
		me.__212.logicBlock_backgroundcolor();
		me.__212.ggUpdatePosition=function (useTransition) {
		}
		me.__2_.appendChild(me.__212);
		me.__48.appendChild(me.__2_);
		me.__47.appendChild(me.__48);
		me.__46.appendChild(me.__47);
		el=me._image_13=document.createElement('div');
		els=me._image_13__img=document.createElement('img');
		els.className='ggskin ggskin_image_13';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAAAopJREFUeF7t3dtxwjAQhWHRWShHVSSpgnYoLeNMnAR80W1XOoN+noW0nI9FHkYeXwIvqQQuUtVQTABE7EsACCBiCYiVQ4cAIpaAWDl0CCBiCYiVQ4cAIpaAWDl0CCBiCYiVI9sht9vtI8b4IZaXezmSIAtGCOE9hHCPMV7dUxBaQA7kH8Ya01QoUiA7GNOhyICcYKwo1xjjXejXxaUUCZAMjM9ZNvjhIGA8NtpQEDC2v3rDQMDY34KGgIBxfD3QHQSM84uzriBgpK+Uu4GAkcZYRnQBASMPowsIGPkY7iBglGG4goBRjuEGAkYdhgsIGPUY5iBgtGGYgoDRjmEGAoYNhgkIGHYYzSBg2GI0gYBhj1ENAoYPRhUIGH4YxSBg+G'+
			'IUgYDhj5ENAkYfjCwQMPphJEHA6ItxCgJGf4xDEDDGYOyCZGAs73v5U+i9SdYbkx5OnWRi9K51ivVijN8WvyBgjHUHZGz+m9U3IMsIumSc0i5IAQqburHd7qa+rpHRKdPcYmace3K6w7O9oCSzcxlwetgaFJfMTydNnn4HpS9KEiRzo2dPMXLLAgHFKO2MabJBQMlI02BIEQgoBoknpigGAcUXpQoEFD+UahBQfFCaQECxR2kGAcUWxQQEFDsUMxBQbFBMQUBpRzEHAaUNxQUElHoUNxBQ6lBcQUApR3EHAaUMpQsIKPko3UBAyUPpCgJKGqU7CCjnKENAQDlGGQYCyj7KUBBQtijDQUB5RJEAAeUPRQYkgTLNc6ikQA5QpsFYPr8cyBPKVBiyID8obzM8BOz5OkuyQ9J/MLzuCEDEbAEBRCwBsXLoEEDEEhArhw4B'+
			'RCwBsXLoEEDEEhArhw4BRCwBsXLoEDGQL5r9bHRpS9uWAAAAAElFTkSuQmCC';
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
		el.ggId="Image 13";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 18px;';
		hs+='left : 10px;';
		hs+='position : absolute;';
		hs+='top : 15px;';
		hs+='visibility : inherit;';
		hs+='width : 13px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_13.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_13.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_3=document.createElement('div');
		el.ggId="Rectangle 3";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='z-index: 99;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 200%;';
		hs+='left : calc(50% - ((300% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((200% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 300%;';
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
			player.setVariableValue('vis_mobilecatagory', false);
		}
		me._rectangle_3.ggUpdatePosition=function (useTransition) {
		}
		me._image_13.appendChild(me._rectangle_3);
		me.__46.appendChild(me._image_13);
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
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 20px;';
		hs+='position : absolute;';
		hs+='right : 20px;';
		hs+='top : 50px;';
		hs+='visibility : hidden;';
		hs+='width : 20px;';
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
		me.__46.appendChild(me._image_14);
		me.divSkin.appendChild(me.__46);
		el=me.__39=document.createElement('div');
		el.ggId="\ubaa8\ubc14\uc77c \uc0bc\uc120";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 30px;';
		hs+='position : absolute;';
		hs+='right : 10px;';
		hs+='top : 80px;';
		hs+='visibility : hidden;';
		hs+='width : 30px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__39.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__39.logicBlock_visible = function() {
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
			else if (
				((me.ggUserdata.tags.indexOf("opening") != -1))
			)
			{
				newLogicStateVisible = 2;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__39.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__39.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__39.style.transition='';
				if (me.__39.ggCurrentLogicStateVisible == 0) {
					me.__39.style.visibility=(Number(me.__39.style.opacity)>0||!me.__39.style.opacity)?'inherit':'hidden';
					me.__39.ggVisible=true;
				}
				else if (me.__39.ggCurrentLogicStateVisible == 1) {
					me.__39.style.visibility=(Number(me.__39.style.opacity)>0||!me.__39.style.opacity)?'inherit':'hidden';
					me.__39.ggVisible=true;
				}
				else if (me.__39.ggCurrentLogicStateVisible == 2) {
					me.__39.style.visibility="hidden";
					me.__39.ggVisible=false;
				}
				else {
					me.__39.style.visibility="hidden";
					me.__39.ggVisible=false;
				}
			}
		}
		me.__39.logicBlock_visible();
		me.__39.ggUpdatePosition=function (useTransition) {
		}
		el=me.__45=document.createElement('div');
		el.ggId="\ubaa8\ubc14\uc77c \uc544\uc774\ucf58 \ubc30\uacbd";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.196078);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
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
				((me.ggUserdata.tags.indexOf("opening") != -1))
			)
			{
				newLogicStateVisible = 0;
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
				else {
					me.__45.style.visibility=(Number(me.__45.style.opacity)>0||!me.__45.style.opacity)?'inherit':'hidden';
					me.__45.ggVisible=true;
				}
			}
		}
		me.__45.logicBlock_visible();
		me.__45.onclick=function (e) {
			me.__27.style.transition='none';
			me.__27.style.visibility=(Number(me.__27.style.opacity)>0||!me.__27.style.opacity)?'inherit':'hidden';
			me.__27.ggVisible=true;
			me.__6.ggVisible = !me.__6.ggVisible;
			var flag=me.__6.ggVisible;
			me.__6.style.transition='none';
			me.__6.style.visibility=((flag)&&(Number(me.__6.style.opacity)>0||!me.__6.style.opacity))?'inherit':'hidden';
			player.setVariableValue('vis_mobiletype', false);
			player.setVariableValue('vis_mobilecatagory', false);
			player.setVariableValue('vis_hambegur', !player.getVariableValue('vis_hambegur'));
		}
		me.__45.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_15=document.createElement('div');
		els=me._image_15__img=document.createElement('img');
		els.className='ggskin ggskin_image_15';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAAAlxJREFUeF7tnFFOhEAQRGdOpp5MPZnrycYMShajMXSFgkp8/O2G7qm8R38As9sbRxSBHpWGMA0hYRcBQhASRiAsDhOCkDACYXGYEISEEQiLw4QgJIxAWBwmBCFhBMLiMCEICSMQFocJQUgYgbA4TAhCwgiExWFCkoWMMR5ba8+bjPMzx/EEbq2199m29/6ybb9MyBhjfrkVcXwEOv5F4HUV05ERc6Xceu9PU8iIifTPg/R5ICTnKkBIjoslCUIQEkYgLA4TgpAwAmFx1gl5a61xR369nOXmkDv160XMBPc79W2er7v2+dUDU2MzNZ9jrccUsf3MzxFs2MXGPH4XwbnKEOIiK/ZFiAjOVYYQF1mxL0JEcK4yhLjIin0RIoJzlS'+
			'HERVbsixARnKvsmxC2Abkw/+jLNqDTUGsLsQ1I42at+nz8zq4TK+RSc17hlnD5T0aIn3FpBYSUcPlPRoifcWkFhJRw+U9GiJ9xaQWElHD5T16F8GMdP+s9K7Avaw+lk85hX9ZJoH9bhn1ZF8IvL837kDIybwFCvHzL3RFSRuYtQIiXb7k7QsrIvAUI8fItd0dIGZm3ACFevuXubAMqIzukgG1Ah2D0NWEbkI+t3Jl/A5LRmQp5QWUCq7ZFiErOVIcQE1i1LUJUcqY6hJjAqm0RopIz1fFvQCawYlt2nYjgHGXsOnFQ3dmTXSc7QUWcxuP3CA33EAhBSBiBsDhMCELCCITFYUIQEkYgLA4TgpAwAmFxmBCEhBEIi8OEICSMQFgcJgQhYQTC4jAhCAkjEBaHCUFIGIGwOExImJAPQxO4ZXQMnVIAAAAASUVORK5CYII='+
			'';
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
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.9,sy:0.9,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 80%;';
		hs+='left : calc(50% - ((60% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((80% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 60%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
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
		me.__45.appendChild(me._image_15);
		me.__39.appendChild(me.__45);
		me.divSkin.appendChild(me.__39);
		el=me.__27=document.createElement('div');
		el.ggId="\ubaa8\ubc14\uc77c \uc0bc\uc120 \uba54\ub274";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 0px;';
		hs+='height : 40%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		hs+='min-width:360px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__27.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__27.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_4=document.createElement('div');
		el.ggId="Rectangle 4";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #212121;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 10px 10px 0px 0px;';
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
		me._rectangle_4.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_hambegur') == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._rectangle_4.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._rectangle_4.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._rectangle_4.style.transition='';
				if (me._rectangle_4.ggCurrentLogicStateVisible == 0) {
					me._rectangle_4.style.visibility="hidden";
					me._rectangle_4.ggVisible=false;
				}
				else {
					me._rectangle_4.style.visibility=(Number(me._rectangle_4.style.opacity)>0||!me._rectangle_4.style.opacity)?'inherit':'hidden';
					me._rectangle_4.ggVisible=true;
				}
			}
		}
		me._rectangle_4.logicBlock_visible();
		me._rectangle_4.ggUpdatePosition=function (useTransition) {
		}
		el=me.__38=document.createElement('div');
		el.ggId="\uc124\uc815";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 30px;';
		hs+='left : 15px;';
		hs+='position : absolute;';
		hs+='top : 8px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:none;';
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
		el=me._text_9=document.createElement('div');
		els=me._text_9__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 9";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #1a6dff;';
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
		hs+='padding: 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_9.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc124\uc815", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_9.ggUpdateText();
		el.appendChild(els);
		me._text_9.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_9.ggUpdatePosition=function (useTransition) {
		}
		me.__38.appendChild(me._text_9);
		me._rectangle_4.appendChild(me.__38);
		el=me.__28=document.createElement('div');
		el.ggId="\uc0bc\uc120 \uba54\ub274 \ucee8\ud14c\uc774\ub108";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 70%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 70px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		hs+='padding:0 10px;';
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
		me.__28.ggUpdatePosition=function (useTransition) {
		}
		el=me.__111=document.createElement('div');
		el.ggId="\uc0bc\uc120\uba54\ub274 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(51,51,51,0.784314);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 6px;';
		hs+='cursor : default;';
		hs+='height : 40%;';
		hs+='left : 10px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 42%;';
		hs+='pointer-events:auto;';
		hs+='min-width:150px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__111.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__111.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_10=document.createElement('div');
		els=me._text_10__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 10";
		el.ggDx=3;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 50%;';
		hs+='left : calc(50% - ((100px + 0px) / 2) + 3px);';
		hs+='position : absolute;';
		hs+='top : 10px;';
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
		hs+='font-size: 14px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._text_10.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc790\uc774\ub85c\uc2a4\ucf54\ud504", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_10.ggUpdateText();
		el.appendChild(els);
		me._text_10.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_10.ggUpdatePosition=function (useTransition) {
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
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -28px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((20px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 20px;';
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
		me._image_16.ggUpdatePosition=function (useTransition) {
		}
		me._text_10.appendChild(me._image_16);
		me.__111.appendChild(me._text_10);
		el=me._rectangle_5=document.createElement('div');
		el.ggId="Rectangle 5";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #000000;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 25px;';
		hs+='bottom : 10px;';
		hs+='cursor : default;';
		hs+='height : 20px;';
		hs+='position : absolute;';
		hs+='right : 15px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
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
		me._rectangle_5.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('vis_circle') == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._rectangle_5.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._rectangle_5.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._rectangle_5.style.transition='background-color 500ms ease 0ms';
				if (me._rectangle_5.ggCurrentLogicStateBackgroundColor == 0) {
					me._rectangle_5.style.backgroundColor="rgba(26,109,255,1)";
				}
				else {
					me._rectangle_5.style.backgroundColor="rgba(0,0,0,1)";
				}
			}
		}
		me._rectangle_5.logicBlock_backgroundcolor();
		me._rectangle_5.onclick=function (e) {
			player.setVariableValue('vis_circle', !player.getVariableValue('vis_circle'));
		}
		me._rectangle_5.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_17=document.createElement('div');
		els=me._image_17__img=document.createElement('img');
		els.className='ggskin ggskin_image_17';
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
		el.ggId="Image 17";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 20px;';
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
		me._image_17.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('vis_circle') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._image_17.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._image_17.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._image_17.style.transition='left 500ms ease 0ms, top 500ms ease 0ms';
				if (me._image_17.ggCurrentLogicStatePosition == 0) {
					me._image_17.style.left='20px';
					me._image_17.style.top='0px';
				}
				else {
					me._image_17.style.left='0px';
					me._image_17.style.top='0px';
				}
			}
		}
		me._image_17.logicBlock_position();
		me._image_17.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_5.appendChild(me._image_17);
		me.__111.appendChild(me._rectangle_5);
		me.__28.appendChild(me.__111);
		el=me.__210=document.createElement('div');
		el.ggId="\uc0bc\uc120\uba54\ub274 2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(51,51,51,0.784314);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 6px;';
		hs+='cursor : default;';
		hs+='height : 40%;';
		hs+='position : absolute;';
		hs+='right : 35px;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 42%;';
		hs+='pointer-events:auto;';
		hs+='min-width:150px; margin-left:5px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__210.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__210.ggUpdatePosition=function (useTransition) {
		}
		el=me.__36=document.createElement('div');
		els=me.__36__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc0bc\uc120\uba54\ub274 \uae00";
		el.ggDx=3;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 50%;';
		hs+='left : calc(50% - ((100px + 0px) / 2) + 3px);';
		hs+='position : absolute;';
		hs+='top : 10px;';
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
		hs+='font-size: 14px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me.__36.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc790\ub3d9\ud68c\uc804", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__36.ggUpdateText();
		el.appendChild(els);
		me.__36.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__36.ggUpdatePosition=function (useTransition) {
		}
		el=me.__37=document.createElement('div');
		els=me.__37__img=document.createElement('img');
		els.className='ggskin ggskin__37';
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
		el.ggId="\uc774\ubbf8\uc9c0";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -28px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((20px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 20px;';
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
		me.__36.appendChild(me.__37);
		me.__210.appendChild(me.__36);
		el=me.__211=document.createElement('div');
		el.ggId="\uc635\uc158 \ubc30\uacbd 2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #000000;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 25px;';
		hs+='bottom : 9px;';
		hs+='cursor : default;';
		hs+='height : 20px;';
		hs+='position : absolute;';
		hs+='right : 15px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__211.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__211.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('vis_circle2') == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__211.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__211.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__211.style.transition='background-color 500ms ease 0ms';
				if (me.__211.ggCurrentLogicStateBackgroundColor == 0) {
					me.__211.style.backgroundColor="rgba(26,109,255,1)";
				}
				else {
					me.__211.style.backgroundColor="rgba(0,0,0,1)";
				}
			}
		}
		me.__211.logicBlock_backgroundcolor();
		me.__211.onclick=function (e) {
			player.setVariableValue('vis_circle2', !player.getVariableValue('vis_circle2'));
			player.toggleAutorotate();
		}
		me.__211.ggUpdatePosition=function (useTransition) {
		}
		el=me.__110=document.createElement('div');
		els=me.__110__img=document.createElement('img');
		els.className='ggskin ggskin__110';
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
		el.ggId="\uc635\uc158 \uc6d0 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 20px;';
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
		me.__110.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('vis_circle2') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__110.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__110.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__110.style.transition='left 500ms ease 0ms, top 500ms ease 0ms';
				if (me.__110.ggCurrentLogicStatePosition == 0) {
					me.__110.style.left='20px';
					me.__110.style.top='0px';
				}
				else {
					me.__110.style.left='0px';
					me.__110.style.top='0px';
				}
			}
		}
		me.__110.logicBlock_position();
		me.__110.ggUpdatePosition=function (useTransition) {
		}
		me.__211.appendChild(me.__110);
		me.__210.appendChild(me.__211);
		me.__28.appendChild(me.__210);
		el=me.__31=document.createElement('div');
		el.ggId="\uc0bc\uc120\uba54\ub274 3";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(51,51,51,0.784314);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 6px;';
		hs+='bottom : 10%;';
		hs+='cursor : default;';
		hs+='height : 40%;';
		hs+='left : 10px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 42%;';
		hs+='pointer-events:auto;';
		hs+='min-width:150px;';
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
		el=me.__34=document.createElement('div');
		els=me.__34__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc0bc\uc120 \uba54\ub274\uae00 3";
		el.ggDx=3;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 50%;';
		hs+='left : calc(50% - ((100px + 0px) / 2) + 3px);';
		hs+='position : absolute;';
		hs+='top : 10px;';
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
		hs+='font-size: 14px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me.__34.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ud3c9\uba74\ub3c4", params);
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
		me.__34.ggUpdatePosition=function (useTransition) {
		}
		el=me.__35=document.createElement('div');
		els=me.__35__img=document.createElement('img');
		els.className='ggskin ggskin__35';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAAAupJREFUeF7tnP9N3EAQRmdJFaB0kQIS+oG0ANdCSD85ekFQRdjIkU5yiDH741vdd+d3f++Mx+951rf2yin4WRFIVtVQTCDE7CJACELMCJiVQ4cgxIyAWTl0CELMCJiVQ4cgxIyAWTl0CELMCJiVQ4cgxIyAWTl0CELMCJiVQ4cgxIyAWTl0yLkLufqe73OOrynim9W5ptg9/0j3VjUtFCPvkKvbnF1P+vkhyc9Xfa7yAp2FXOS4fvqZ9mqIynwIUdIU5EKIAKIyBUKUNAW5ECKAqEyBECVNQa5NCYkUuzmz0nXJ55v835pq1L+1bQlZuILX1ibTIjdy3L174Q9YbG5eyNra5EMhEaFebG5byAdX+DRVvab4tXZrQEjHjbN1pT'+
			'6/h/xOcTd/ToeQIwiZH/LtNIYQhNQROPeHi3RI3fWwOrr1HsKUJZQwT4WQQWBb0yKkldygOIQMAtuaFiGt5AbFIWQQ2Na0CGklNygOIYPAtqZFSCu5QXEIGQS2NS1CWsktx71M74NWUn5ZPZzo7d5JP8vKEfuU4rHXy8Vr7EveYS+9+z4cuyS+pM6TFjJtKijdSFACw2EMQhwszGpACEL6CPzzgoopqxrm2F0nCEFINYHKAO4hlcBGD0fIaMKV+RFSCaxm+OVt/rsr8VOOXenCESE1hCvGzsFOTxReHtJ1SThCSig1jJm647AlFCENANUhCFET7cyHkE6A6nCEqIl25kNIJ0B1OELURDvzIaQToDocIWqinfkQ0glQHY4QNdHOfAjpBKgOR4iaaGc+hHQCVIcjRE20Mx9COgGqwxGiJtqZb5NCVHt7O9kvh88+u1RT'+
			'59tvEvNpjSF22pPaC5lPBe2neTqR9kJKPvp1Orjfr/Qwzal398u3kp4D7GOeA0KOSX/h2AhBiBkBs3LoEISYETArhw5BiBkBs3LoEISYETArhw5BiBkBs3LoEISYETArhw5BiBkBs3LoEISYETArhw5BiBkBs3L+AI6JuIP9nH5dAAAAAElFTkSuQmCC';
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
		el.ggId="\uc774\ubbf8\uc9c0 3";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 23px;';
		hs+='left : -28px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((23px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 23px;';
		hs+='pointer-events:auto;';
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
		me.__34.appendChild(me.__35);
		me.__31.appendChild(me.__34);
		el=me.__32=document.createElement('div');
		el.ggId="\uc635\uc158\ubc30\uacbd 3";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #000000;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 25px;';
		hs+='bottom : 10px;';
		hs+='cursor : default;';
		hs+='height : 20px;';
		hs+='position : absolute;';
		hs+='right : 15px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
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
		me.__32.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('vis_circle3') == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__32.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__32.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__32.style.transition='background-color 500ms ease 0ms';
				if (me.__32.ggCurrentLogicStateBackgroundColor == 0) {
					me.__32.style.backgroundColor="rgba(26,109,255,1)";
				}
				else {
					me.__32.style.backgroundColor="rgba(0,0,0,1)";
				}
			}
		}
		me.__32.logicBlock_backgroundcolor();
		me.__32.onclick=function (e) {
			player.setVariableValue('vis_circle3', !player.getVariableValue('vis_circle3'));
			me.__19.ggVisible = !me.__19.ggVisible;
			var flag=me.__19.ggVisible;
			me.__19.style.transition='none';
			me.__19.style.visibility=((flag)&&(Number(me.__19.style.opacity)>0||!me.__19.style.opacity))?'inherit':'hidden';
			player.setVariableValue('vis_mobilemenu', !player.getVariableValue('vis_mobilemenu'));
		}
		me.__32.ggUpdatePosition=function (useTransition) {
		}
		el=me.__33=document.createElement('div');
		els=me.__33__img=document.createElement('img');
		els.className='ggskin ggskin__33';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAABYtJREFUeF7tnV3IZVMYx///d3wMRkzIBRc+piiRSJMLTXEjxAWKJOMSZVzJx4USRS4omXKjRi4oRHGhEC4kjUaSGkwj5QZNPhozjPHXms4+s9/znn322muvvfbaZz/r8n3Xep7/en7rWWu3z1prE1ayigCzUlMjRtI6AHcAuBfAFQBWKpr8B+BLAC8CeInkv0PpZ7ZAJJ0FYDeAkyIH8x8Al5B0trMrWQGR9BGALYmj9DXJixP7rHTXOxBJzwHYlklAXiV5e59aegMiyc3zvfmvCzrJXrQldypJdcHI7P8rJJNpTgZkgCBWjYtUGdM5EEnvALg+s1EfKucbkheFNvZp1ymQoWfFggCuI+nWwOilEyCS3gJwU3S1eRnsJFuiA1'+
			'nirJg7HGKvLVGBjA1GQSgmlChAJG0A8GdeM0pyNZtI7mnrtTUQSZcC2NVWyJK0v4vky2360gqIpKsBfNBGwBK2fYjk06H9CgYiyb2Q+yrU8ZK3C86UICCS1gM4sORBbdu980jubWokFEiydztNO5RT/ZCnr8ZAxvpoGwq6KZRGQAxGGJYmULyBSNoO4J4wSaNvtYvkZT5RaALE1g2fiFbX8fpdxQuITVXtSDR5xVILRNKzAB6II2n0VnaSdNuXKosPEJuqIo6jugV+IRBJhwAcE1GPmXI7OxZsoKgDYtnRwRAKAmILeQckSiaroFRmiAHJCIik/QBO7FaSWZ+XJXMzxLIjzWDxAiLpZgCvp5E0ei/bSd5XjsKaDLHsSDtIZrPEgKSN/xpvC4FIegTAkz1rHJv7D0leM33fVe69TVf9jIVylqyasgxIRkAkOTidbCDu'+
			'p5uD8noGyV+d4mmGLNmxgUHRALCP5GmzQOxFYo8Yi3WknCEGxID0GIHMXFuGZAbE3UrhDpcembLsOEEWdK4l+V4BxB3cdwf4rfQXgTdI3lIA6eNKi/66nqfn/SQ3FED+AHBynjrHo8ot7AUQe+TNgLsByQBCWYIByRhI1jfzZBa3zuSUM2QfgI2deTLDXhEoA3kXwHVeraxSVxH4neSpxVPW3e6yyK48mV2vCOwgubUAciwAdzmklf4isJnk5/b6vT8Aqzzb295MQBQyDIgBySwCmcmZlyEvTK7wzkzqKOTsJnmh66nty8qD93qSfxuQPGCsOnNoGZIBlEVbSW8E8HYGGsck4XmS908ff2d7bvt7044FOx+SNt613nyAnA/g+1pLViFGBLaS3FE2ZIc+Y4Q10IbXoU9nW9JOAJcH+rFmfhE4SPKE2ap2cYBf8KLXCr'+
			'nJ4S8AawhGVzZSg42BTKYu26/VwYAJunxmAuQ7AJs60DRmk4dIHlcVALvALPHQaHWB2SRLrgLwSWLdy+ruMZKPL+pcbYbYWhJvbNRlh/PkBcSgtIfiA6MpkCsBfNpe2igtPEzyKZ+ee2fIJEsOAjjex7DVORoB3+xolCGFeXs932yoNYERBMTWE38gTWEEAzEoXlC87nqftdRoDSk3lrQC4LCXtPFV2kjyt5BuBwOZZIl7BXBk+4qVaQTOJvlTaDxaAZlAsUw5Gv1TSLoTzcGlNRB7+prGPmjNiLaGzBsCY30kDnmaqkqhaBlSypQx/bAlkm7KjlaiA5msK+57S19EU5mnoTtJvhJbWidAln1diTlFdbqGVKwry5Qtt5F8LXZWlO11miFlR5LcF6Xdl6WHWH4meWYK4cmAlKaxIV1ScJhk0k8+JQdSAvM+gOkV2ylG'+
			'XwMfP5A8t0H9aFV7A1ICczqAX6L1qJ2hC0h+285Eu9a9A5lZZzYD+Kxdlxq3voGku1oki5IVkNmISHoUwBORI/UMyQcj24xmLmsgFY/RTrPbmnQrgC0AzplseXV/PwDgRwAfA3gTgPsUxKDusx8ckGhDMVND/wNgZsJ0zg3EaAAAAABJRU5ErkJggg==';
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
		el.ggId="\uc635\uc158 \uc6d0 3";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
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
		me.__33.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('vis_circle3') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__33.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__33.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__33.style.transition='left 500ms ease 0ms, top 500ms ease 0ms';
				if (me.__33.ggCurrentLogicStatePosition == 0) {
					me.__33.style.left='20px';
					me.__33.style.top='0px';
				}
				else {
					me.__33.style.left='0px';
					me.__33.style.top='0px';
				}
			}
		}
		me.__33.logicBlock_position();
		me.__33.ggUpdatePosition=function (useTransition) {
		}
		me.__32.appendChild(me.__33);
		me.__31.appendChild(me.__32);
		me.__28.appendChild(me.__31);
		el=me.__40=document.createElement('div');
		el.ggId="\uc0bc\uc120\uba54\ub274 4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(51,51,51,0.784314);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 6px;';
		hs+='bottom : 10%;';
		hs+='cursor : default;';
		hs+='height : 40%;';
		hs+='position : absolute;';
		hs+='right : 35px;';
		hs+='visibility : inherit;';
		hs+='width : 42%;';
		hs+='pointer-events:auto;';
		hs+='min-width:150px; margin-left:5px;';
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
		me.__40.onclick=function (e) {
			me.__29.style.transition='none';
			me.__29.style.visibility='hidden';
			me.__29.ggVisible=false;
		}
		me.__40.ggUpdatePosition=function (useTransition) {
		}
		el=me.__43=document.createElement('div');
		el.ggId="\uc635\uc158 \ubc30\uacbd 4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #000000;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 25px;';
		hs+='bottom : 10px;';
		hs+='cursor : default;';
		hs+='height : 20px;';
		hs+='position : absolute;';
		hs+='right : 15px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
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
		me.__43.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('vis_circle4') == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__43.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__43.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__43.style.transition='background-color 500ms ease 0ms';
				if (me.__43.ggCurrentLogicStateBackgroundColor == 0) {
					me.__43.style.backgroundColor="rgba(26,109,255,1)";
				}
				else {
					me.__43.style.backgroundColor="rgba(0,0,0,1)";
				}
			}
		}
		me.__43.logicBlock_backgroundcolor();
		me.__43.onclick=function (e) {
			player.setVariableValue('vis_circle4', !player.getVariableValue('vis_circle4'));
			"";
 let url = '';
  const textarea = document.createElement("textarea");
  document.body.appendChild(textarea);
  url = window.document.location.href;
  textarea.value = url;
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);
			me.__29.style.transition='none';
			me.__29.style.visibility=(Number(me.__29.style.opacity)>0||!me.__29.style.opacity)?'inherit':'hidden';
			me.__29.ggVisible=true;
		}
		me.__43.ggUpdatePosition=function (useTransition) {
		}
		el=me.__44=document.createElement('div');
		els=me.__44__img=document.createElement('img');
		els.className='ggskin ggskin__44';
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
		el.ggId="\uc635\uc158 \uc6d0 4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
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
		me.__44.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('vis_circle4') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__44.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__44.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__44.style.transition='left 500ms ease 0ms, top 500ms ease 0ms';
				if (me.__44.ggCurrentLogicStatePosition == 0) {
					me.__44.style.left='20px';
					me.__44.style.top='0px';
				}
				else {
					me.__44.style.left='0px';
					me.__44.style.top='0px';
				}
			}
		}
		me.__44.logicBlock_position();
		me.__44.ggUpdatePosition=function (useTransition) {
		}
		me.__43.appendChild(me.__44);
		me.__40.appendChild(me.__43);
		el=me.__41=document.createElement('div');
		els=me.__41__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc0bc\uc120\uba54\ub274 \uae00 4";
		el.ggDx=3;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 50%;';
		hs+='left : calc(50% - ((100px + 0px) / 2) + 3px);';
		hs+='position : absolute;';
		hs+='top : 10px;';
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
		hs+='font-size: 14px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me.__41.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ub9c1\ud06c", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__41.ggUpdateText();
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
		els=me.__42__img=document.createElement('img');
		els.className='ggskin ggskin__42';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAABPlJREFUeF7tnWtS3DAMgG16ijK9S+E+pVeAvULpfYC7dOgpSjoOhMluLOvlJIqt/cdgK7I+S/IrTgz+M2WBaEobVyY4EGOdwIG0BOTbj+Hm7SrcDEP4bqxdm6sTY3hJD716C89/fsdnqQJsD0kQ/sVwH0O4kT60i3oxnF5/xQduW1lArn8OD2EI99yHdF2eCYYExL1C16WGEJ6/DOFECWUokDFPxPCkU8lrj/llCLcYlCIQh1G/I2FQikC+3g1PnrzrQknh6+9jvIWkgkA8gdcFcSatkOhhIHfDsKJKtkTHcJrmD1hHnCfoVDbNwSRRBApdWSCYUrasqdQm01vB3An0bEloh0JXHkhH3vH6GLM2yBkZ6tXSwU/u2QtlpMKV/X'+
			'SX6qUEm4sSEDypzXKAF0C6ClchBMjIOTtAHiK2WSYEdg8kAHnhOhO2IY+S5JAUEnLyFkCkwneJObUe+jHKmsQVVyZmIzLtkpIDqQWwkhwHUsmQtcQ4kFqWrCTHgVQyZC0xDqSWJSvJUQNJAirp0o2Y0jqXGgg0Zu/GuoKGliaNDkRgUG0VB6K1YOX6DqSyQbXiHIjWgpXrOxChQdO6FHYiRCLagTCslhZSU/H50DSNfNKxUMmpw9yjHQgBCHlDiXnq0IEQjH9ZhLuZhJ2jwlRwDylYiAsjicLOUTkQzALA/yUwPkUpQpd7SAZIySjzkASV03iJA7kAQoUxVYPKQ4chMId1IDMLcWF8QskccJAmdwfyYVUpjFQ9d+LEPQSLBcLRFNbTcyA9h+wEg3uml6Jm1yFLE6ZKs3dpuBrDX+G9zKY3qNaCod0l7RKIZm2qWFcx'+
			'IcSG0dAqAO8oaQUFKXGXWyY3KoJkzMPE2jC6DFlk75gRSjlhCxhdApGsUaWhL3igunIU6C6HSICAIbEyjC49pNrrEyvA6BKIJIcsPGQlGF0CUYesFWF0B0TtHSvDaBLI/JK0s4PLMZxUV0VtAKM5IGoPgIZTG8FoCog6N2RgcO6t4q4WQOWbmIdoYYwTv6vzKwi1dyFKAR0eSA0YaxwJ7RKIFoZmZ09qcKzeYT1ECwNazsYMtvb/DwmkBozJsJrdvTXgHA4IpjD3cjAHouhW2LbrOFJi3BPsOWRFGGmkxJ4YbjjhozYdiwCXF2LusoWLecZ82MpZXrcWrg4xU+fAmHrhWCe9GlC6cNKgd5gHUgpB2InCrfbAqaGIWs50yILCT6swTHsI1FNahnE8IEjcP2qYmoczsyErG64KQFqAYdpDckCgiVwrMEwDoeaQlmCYBo'+
			'IZ+qjzDGz4azaHJMU5s+6zhhqd9GEwTHtIUo69NpUqHRiGeSCYgosed3AYWHvNvEGFXdG9x+kQSviRlDGdQy4bNF80HKNTDC97nQ6RGJtS51BAKA06ehkHYoygA+kJiMU9a2P2X6hTnHvV+MKOxW1Sy1CKbwhTgGCTN2z/wrJxttYNO29G+ijYOJlBPpvnXkJDK7Ej+Rt+Lc6iaWbll8KizCgRWIXIAiEJ/NBzuueWr3Z7NTifYYWijH+ceI9+Ifk4cdJTvFy+RyMP8kxs6uAfuN8YJDZKLQJJunLyycZtO9zjMBjvuZ7ww5bLCSK6LsLZTiABmayJTXS6tjrUeOYmGwuIg6F3OY5XzKWKgEwCplsW0t9pDE5Xt82SNTbYVEDaNOu+rXIg+9p/8XQH4kCMWcCYOv8B35vUsKKwQNoAAAAASUVORK5CYII=';
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
		el.ggId="\uc774\ubbf8\uc9c0 4";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -28px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((20px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
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
		me.__41.appendChild(me.__42);
		el=me.__29=document.createElement('div');
		els=me.__29__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ubcf5\uc0ac \uc548\ub0b4";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : rgba(0,0,0,0.784314);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 5px;';
		hs+='bottom : 0px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 25px;';
		hs+='left : calc(50% - ((100px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
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
		hs+='font-size: 12px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 6px 3px 6px 3px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__29.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ubcf5\uc0ac\ub418\uc5c8\uc2b5\ub2c8\ub2e4.", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__29.ggUpdateText();
		el.appendChild(els);
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
		me.__29.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.__29.ggIsActive() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__29.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__29.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__29.style.transition='';
				if (me.__29.ggCurrentLogicStateVisible == 0) {
					me.__29.style.visibility="hidden";
					me.__29.ggVisible=false;
				}
				else {
					me.__29.style.visibility="hidden";
					me.__29.ggVisible=false;
				}
			}
		}
		me.__29.logicBlock_visible();
		me.__29.ggUpdatePosition=function (useTransition) {
		}
		me.__41.appendChild(me.__29);
		me.__40.appendChild(me.__41);
		me.__28.appendChild(me.__40);
		me._rectangle_4.appendChild(me.__28);
		me.__27.appendChild(me._rectangle_4);
		me.divSkin.appendChild(me.__27);
		el=me.__23=document.createElement('div');
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
		me.__23.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__23.logicBlock_position = function() {
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
			if (me.__23.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__23.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__23.style.transition='left 500ms ease 0ms, top 500ms ease 0ms';
				if (me.__23.ggCurrentLogicStatePosition == 0) {
					me.__23.style.left='10px';
					me.__23.style.top='20px';
				}
				else {
					me.__23.style.left='10px';
					me.__23.style.top='177px';
				}
			}
		}
		me.__23.logicBlock_position();
		me.__23.logicBlock_visible = function() {
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
			if (me.__23.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__23.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__23.style.transition='left 500ms ease 0ms, top 500ms ease 0ms';
				if (me.__23.ggCurrentLogicStateVisible == 0) {
					me.__23.style.visibility=(Number(me.__23.style.opacity)>0||!me.__23.style.opacity)?'inherit':'hidden';
					me.__23.ggVisible=true;
				}
				else if (me.__23.ggCurrentLogicStateVisible == 1) {
					me.__23.style.visibility=(Number(me.__23.style.opacity)>0||!me.__23.style.opacity)?'inherit':'hidden';
					me.__23.ggVisible=true;
				}
				else if (me.__23.ggCurrentLogicStateVisible == 2) {
					me.__23.style.visibility="hidden";
					me.__23.ggVisible=false;
				}
				else {
					me.__23.style.visibility="hidden";
					me.__23.ggVisible=false;
				}
			}
		}
		me.__23.logicBlock_visible();
		me.__23.ggUpdatePosition=function (useTransition) {
		}
		el=me.__24=document.createElement('div');
		el.ggId="\ubaa8\ubc14\uc77c\uba54\ub274 \ubc30\uacbd";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.196078);';
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
		me.__24.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__24.logicBlock_visible = function() {
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
			if (me.__24.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__24.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__24.style.transition='';
				if (me.__24.ggCurrentLogicStateVisible == 0) {
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
		me.__24.onclick=function (e) {
			player.setVariableValue('vis_mobilecatagory', !player.getVariableValue('vis_mobilecatagory'));
			player.setVariableValue('vis_mobiletype', false);
			player.setVariableValue('vis_hambegur', false);
		}
		me.__24.ggUpdatePosition=function (useTransition) {
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
		el=me.__26=document.createElement('div');
		els=me.__26__text=document.createElement('div');
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
		me.__26.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.ggUserdata.description)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__26.ggUpdateText();
		player.addListener('changenode', function() {
			me.__26.ggUpdateText();
		});
		el.appendChild(els);
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
		me._container_4.appendChild(me.__26);
		me.__24.appendChild(me._container_4);
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
		el=me.__25=document.createElement('div');
		els=me.__25__text=document.createElement('div');
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
		me.__25.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.ggUserdata.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__25.ggUpdateText();
		player.addListener('changenode', function() {
			me.__25.ggUpdateText();
		});
		el.appendChild(els);
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
		me._container_5.appendChild(me.__25);
		el=me._image_11=document.createElement('div');
		els=me._image_11__img=document.createElement('img');
		els.className='ggskin ggskin_image_11';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAABUlJREFUeF7tnTvoHUUYxc9J1ESITwQjvkFIFwI2iqgEksoinWAp+AAVCxFCsBREtAghwRdobSnBUkVTqIUgdmKlAUUUX/GBMZgjY/av93//9+58s3fu7uzOt+2e/Wbm/ObbuTO7O5fwoygHWFRtvDJwIIV1AgfiQApzoLDqeIY4kMIcKKw6niE9AZEkklG/o4Ke6jvZYiT9AuDy0EAHMiBmSZcC+GO2Cg5kICDh9rSoaAfSMxBJdwM4taxYB9IjkGVZ4besHiGEoiSdAPC4pVjPEItLK2gsWeEZsoLB1kslnQZwo1W/ofMMSXUsope0A8CfHcOGieG22LU+MYw51JyX9BeAi43yRbJzJC+JXe9A4lmxB8DnMSMN58+QvCKmcy'+
			'AtDqUO2hGzPyZ5pwOJObDgvKQnARzrcGnbJS+QPByL6Rky51DmrJiN/gDJNx1IzIH/B+0PANxjlHeR7SH5RexCz5ALs+2Fi4Ex8xLP7yAZfqm1HlUDkfQjgKtiJuU4b5kUhnKqBCLpSgA/5TDaGsOBLHFK0vkhOqID2frr6T4Ab1t7dG6dA5lxtKdBu32wNrzgMPkxRNJbAA7l7u1d4lWdIeGNGwBhrCjmqBaIpB8AXF0MiaYi1QFZ8VnF2vlVBaSEQTtGtAogku4F8H7MjBLOTx7IGLJitiNMFoik1wA8XEKvT6jDdySvtehHtZY1tqyYAfAOyYOTASLpWwCmHmZp9ACaoySfspRbdIZIugjAOUtDCtccInnSUsdigQy1KmsxrYPmOpIhy6NHcUAk7QPwabTm4xJsJ2layikKyIgH7Vj32EbS9Ji4CCCSXgTwdKxV'+
			'Yz1vnYOE9g0OZMJZ8V//GQUQSd8DuGasvT6l3kUDKX1VNsVoq7ZYIJL+BhB9Jd/a0LHoigMiKdcb5GNhsKmeRQGpYdCO9ZIigEh6AsDxWGVrOD84EM+Kzd1sMCCS3gOwv4Zen9LG3oGU+NpNimFr1p4ludNaxsoz9VJfu7Ea0IPuS5K3WsvpDETSZQDOWAuqWGd+Wth5LavWCV7HTvU8ySPWa5MyRNIdAD6yBnfdvw4cIPmu1QszEP8pa7V0i+56kt9Yr44CkfQGgAetAV23xYFdJH+3+tIKxLPCamOrzvy0cOmg3nW3myzVn1iQlEnhFiATeu2mGKwrAZlvhaTtAO4H8DKA6MYpxbhQUEWyArG2qwEX9gZ5rITn9NZ696EbBIi1YZJuA/ASgPAZQXTvKGvcknVFA7EaJ+kuAM9OYeV4EkAs4JofIHsBhC9tk/c/tJ'+
			'SRQ1MNkGVmDbFtRhu46oFsmFPKpNaBzHTXAqCYdiKdzbDoWlaO++iQMSSFDSzDa0hDHL+RDM+NzMfkgQQnJO0C8KvZlXzC0yRvTglXBZABx5Wkp4WhnlUBabLF9J1GSq9u0T5D8rmUWNUBaaB8CCC6h26KkUu0+0kmbWxQJZAGSh8flN5C8qsUsNUC6Wlc2UnyrANJcWCN28SmTgqrHNSXsZL0KoBHElm2yh1IBjdzzu4dSAYgOX8aO5BMQHJBcSAZgTRQHgXwStewDqSrc5Hruo4rDmRNQLrewhzIGoE0UJI+63YgawbSQLkdwCeWohyIxaVMGsO4cp5keNEw6ah+LSvJrTlxBErSt4UboR3IKkQurIOFP4YJfxAzf3xN8obU8A4k1bEFekk3AZhfZj9JMvmfGRxIBiAbIeZuYQ+RfD01vANJdcw+idxH8rPU8A4k'+
			'1TGDvvngaS/Jnw3yTRIHkuqYUS9pt3Vr2NmQDsRocF8yB9KX08ZyHIjRqL5kDqQvp43l/APOeYp0rt1mtgAAAABJRU5ErkJggg==';
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
		me.__24.appendChild(me._container_5);
		me.__23.appendChild(me.__24);
		me.divSkin.appendChild(me.__23);
		el=me.__19=document.createElement('div');
		el.ggId="\ubaa8\ubc14\uc77c \ud3c9\uba74\ub3c4";
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
		me.__19.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__19.logicBlock_visible = function() {
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
			if (me.__19.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__19.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__19.style.transition='';
				if (me.__19.ggCurrentLogicStateVisible == 0) {
					me.__19.style.visibility=(Number(me.__19.style.opacity)>0||!me.__19.style.opacity)?'inherit':'hidden';
					me.__19.ggVisible=true;
				}
				else if (me.__19.ggCurrentLogicStateVisible == 1) {
					me.__19.style.visibility=(Number(me.__19.style.opacity)>0||!me.__19.style.opacity)?'inherit':'hidden';
					me.__19.ggVisible=true;
				}
				else {
					me.__19.style.visibility="hidden";
					me.__19.ggVisible=false;
				}
			}
		}
		me.__19.logicBlock_visible();
		me.__19.ggUpdatePosition=function (useTransition) {
		}
		el=me.__22=document.createElement('div');
		el.ggId="\ubaa8\ubc14\uc77c \ud3c9\uba74\ub3c4 \ubc30\uacbd";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.588235);';
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
		me.__22.logicBlock_visible = function() {
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
			if (me.__22.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__22.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__22.style.transition='';
				if (me.__22.ggCurrentLogicStateVisible == 0) {
					me.__22.style.visibility="hidden";
					me.__22.ggVisible=false;
				}
				else {
					me.__22.style.visibility=(Number(me.__22.style.opacity)>0||!me.__22.style.opacity)?'inherit':'hidden';
					me.__22.ggVisible=true;
				}
			}
		}
		me.__22.logicBlock_visible();
		me.__22.ggUpdatePosition=function (useTransition) {
		}
		el=me._a=document.createElement('div');
		el.ggId="\uc5f0\ub9bd\ud615A";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.9,sy:0.9,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 90%;';
		hs+='left : calc(50% - ((90% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((90% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 90%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me._a.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._a.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player._(me.ggUserdata.comment) == "\uc5f0\ub9bd\ud615A"))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._a.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._a.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._a.style.transition='';
				if (me._a.ggCurrentLogicStateVisible == 0) {
					me._a.style.visibility=(Number(me._a.style.opacity)>0||!me._a.style.opacity)?'inherit':'hidden';
					me._a.ggVisible=true;
				}
				else {
					me._a.style.visibility="hidden";
					me._a.ggVisible=false;
				}
			}
		}
		me._a.logicBlock_visible();
		me._a.ggUpdatePosition=function (useTransition) {
		}
		el=me._d_1=document.createElement('div');
		els=me._d_1__img=document.createElement('img');
		els.className='ggskin ggskin_d_1';
		hs=basePath + 'images/d_1.png';
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
		el.ggId="\uc5f0\ub9bd\ud615D 1\uce35";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._d_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._d_1.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player._(me.ggUserdata.description) == "1\uce35"))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._d_1.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._d_1.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._d_1.style.transition='';
				if (me._d_1.ggCurrentLogicStateVisible == 0) {
					me._d_1.style.visibility=(Number(me._d_1.style.opacity)>0||!me._d_1.style.opacity)?'inherit':'hidden';
					me._d_1.ggVisible=true;
				}
				else {
					me._d_1.style.visibility="hidden";
					me._d_1.ggVisible=false;
				}
			}
		}
		me._d_1.logicBlock_visible();
		me._d_1.ggUpdatePosition=function (useTransition) {
		}
		el=me._a0=document.createElement('div');
		el.ggMarkerNodeId='{node9}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="A\ud604\uad00";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 49px;';
		hs+='position : absolute;';
		hs+='top : 11px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._a0.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me._a0.onclick=function (e) {
			player.openNext('{node9}');
		}
		me._a0.ggUpdatePosition=function (useTransition) {
		}
		me._d_1.appendChild(me._a0);
		el=me._a_10=document.createElement('div');
		el.ggMarkerNodeId='{node19}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="A \ubcf4\uc870\uc8fc\ubc29";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 60px;';
		hs+='position : absolute;';
		hs+='top : 17px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._a_10.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me._a_10.onclick=function (e) {
			player.openNext('{node19}');
		}
		me._a_10.ggUpdatePosition=function (useTransition) {
		}
		me._d_1.appendChild(me._a_10);
		el=me._a_9=document.createElement('div');
		el.ggMarkerNodeId='{node20}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="A \uacf5\uc6a9\uc695\uc2e4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 40px;';
		hs+='position : absolute;';
		hs+='top : 28px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._a_9.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me._a_9.onclick=function (e) {
			player.openNext('{node20}');
		}
		me._a_9.ggUpdatePosition=function (useTransition) {
		}
		me._d_1.appendChild(me._a_9);
		el=me._a_8=document.createElement('div');
		el.ggMarkerNodeId='{node12}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="A \uc548\ubc29\uc695\uc2e4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 36px;';
		hs+='position : absolute;';
		hs+='top : 37px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._a_8.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me._a_8.onclick=function (e) {
			player.openNext('{node12}');
		}
		me._a_8.ggUpdatePosition=function (useTransition) {
		}
		me._d_1.appendChild(me._a_8);
		el=me._a_7=document.createElement('div');
		el.ggMarkerNodeId='{node13}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="A \uc548\ubc29\ub4dc\ub808\uc2a4\ub8f8";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 37px;';
		hs+='position : absolute;';
		hs+='top : 53px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._a_7.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me._a_7.onclick=function (e) {
			player.openNext('{node13}');
		}
		me._a_7.ggUpdatePosition=function (useTransition) {
		}
		me._d_1.appendChild(me._a_7);
		el=me._a_6=document.createElement('div');
		el.ggMarkerNodeId='{node18}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="A \uc548\ubc29";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 40px;';
		hs+='position : absolute;';
		hs+='top : 70px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._a_6.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me._a_6.onclick=function (e) {
			player.openNext('{node18}');
		}
		me._a_6.ggUpdatePosition=function (useTransition) {
		}
		me._d_1.appendChild(me._a_6);
		el=me._a_111=document.createElement('div');
		el.ggMarkerNodeId='{node14}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="A \uc548\ubc291-1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 32px;';
		hs+='position : absolute;';
		hs+='top : 82px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._a_111.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me._a_111.onclick=function (e) {
			player.openNext('{node14}');
		}
		me._a_111.ggUpdatePosition=function (useTransition) {
		}
		me._d_1.appendChild(me._a_111);
		el=me._a_5=document.createElement('div');
		el.ggMarkerNodeId='{node16}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="A \uac70\uc2e4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 59px;';
		hs+='position : absolute;';
		hs+='top : 69px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._a_5.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me._a_5.onclick=function (e) {
			player.openNext('{node16}');
		}
		me._a_5.ggUpdatePosition=function (useTransition) {
		}
		me._d_1.appendChild(me._a_5);
		el=me._a_110=document.createElement('div');
		el.ggMarkerNodeId='{node17}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="A \uac70\uc2e41-1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 49px;';
		hs+='position : absolute;';
		hs+='top : 85px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._a_110.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me._a_110.onclick=function (e) {
			player.openNext('{node17}');
		}
		me._a_110.ggUpdatePosition=function (useTransition) {
		}
		me._d_1.appendChild(me._a_110);
		el=me._a_4=document.createElement('div');
		el.ggMarkerNodeId='{node11}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="A \uc8fc\ubc29";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 48px;';
		hs+='position : absolute;';
		hs+='top : 39px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._a_4.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me._a_4.onclick=function (e) {
			player.openNext('{node11}');
		}
		me._a_4.ggUpdatePosition=function (useTransition) {
		}
		me._d_1.appendChild(me._a_4);
		el=me._a_11=document.createElement('div');
		el.ggMarkerNodeId='{node10}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="A \uc8fc\ubc291-1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 49px;';
		hs+='position : absolute;';
		hs+='top : 53px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._a_11.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me._a_11.onclick=function (e) {
			player.openNext('{node10}');
		}
		me._a_11.ggUpdatePosition=function (useTransition) {
		}
		me._d_1.appendChild(me._a_11);
		el=me._a_0=document.createElement('div');
		el.ggMarkerNodeId='{node15}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="A \ubcf5\ub3c4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 49px;';
		hs+='position : absolute;';
		hs+='top : 29px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._a_0.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me._a_0.onclick=function (e) {
			player.openNext('{node15}');
		}
		me._a_0.ggUpdatePosition=function (useTransition) {
		}
		me._d_1.appendChild(me._a_0);
		el=me._a_=document.createElement('div');
		el.ggMarkerNodeId='{node1}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="A \uacc4\ub2e8";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 64px;';
		hs+='position : absolute;';
		hs+='top : 47px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._a_.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me._a_.onclick=function (e) {
			player.openNext('{node1}');
		}
		me._a_.ggUpdatePosition=function (useTransition) {
		}
		me._d_1.appendChild(me._a_);
		me._a.appendChild(me._d_1);
		el=me._d_2=document.createElement('div');
		els=me._d_2__img=document.createElement('img');
		els.className='ggskin ggskin_d_2';
		hs=basePath + 'images/d_2.png';
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
		el.ggId="\uc5f0\ub9bd\ud615D 2\uce35";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._d_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._d_2.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player._(me.ggUserdata.description) == "2\uce35"))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._d_2.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._d_2.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._d_2.style.transition='';
				if (me._d_2.ggCurrentLogicStateVisible == 0) {
					me._d_2.style.visibility=(Number(me._d_2.style.opacity)>0||!me._d_2.style.opacity)?'inherit':'hidden';
					me._d_2.ggVisible=true;
				}
				else {
					me._d_2.style.visibility="hidden";
					me._d_2.ggVisible=false;
				}
			}
		}
		me._d_2.logicBlock_visible();
		me._d_2.ggUpdatePosition=function (useTransition) {
		}
		el=me._a_1=document.createElement('div');
		el.ggMarkerNodeId='{node1}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="A \uacc4\ub2e81";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 63px;';
		hs+='position : absolute;';
		hs+='top : 44px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._a_1.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me._a_1.onclick=function (e) {
			player.openNext('{node1}');
		}
		me._a_1.ggUpdatePosition=function (useTransition) {
		}
		me._d_2.appendChild(me._a_1);
		el=me._a_2_3=document.createElement('div');
		el.ggMarkerNodeId='{node2}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="A 2\uce35 \ud604\uad00";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 63px;';
		hs+='position : absolute;';
		hs+='top : 22px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._a_2_3.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me._a_2_3.onclick=function (e) {
			player.openNext('{node2}');
		}
		me._a_2_3.ggUpdatePosition=function (useTransition) {
		}
		me._d_2.appendChild(me._a_2_3);
		el=me._a_3=document.createElement('div');
		el.ggMarkerNodeId='{node3}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="A \uce68\uc2e43";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 46px;';
		hs+='position : absolute;';
		hs+='top : 17px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._a_3.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me._a_3.onclick=function (e) {
			player.openNext('{node3}');
		}
		me._a_3.ggUpdatePosition=function (useTransition) {
		}
		me._d_2.appendChild(me._a_3);
		el=me._a_21=document.createElement('div');
		el.ggMarkerNodeId='{node4}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="A \uce68\uc2e42-1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 37px;';
		hs+='position : absolute;';
		hs+='top : 43px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._a_21.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me._a_21.onclick=function (e) {
			player.openNext('{node4}');
		}
		me._a_21.ggUpdatePosition=function (useTransition) {
		}
		me._d_2.appendChild(me._a_21);
		el=me._a_2=document.createElement('div');
		el.ggMarkerNodeId='{node5}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="A \uce68\uc2e42";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 36px;';
		hs+='position : absolute;';
		hs+='top : 76px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._a_2.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me._a_2.onclick=function (e) {
			player.openNext('{node5}');
		}
		me._a_2.ggUpdatePosition=function (useTransition) {
		}
		me._d_2.appendChild(me._a_2);
		el=me._a_2_2=document.createElement('div');
		el.ggMarkerNodeId='{node7}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="A 2\uce35 \uc695\uc2e4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 34px;';
		hs+='position : absolute;';
		hs+='top : 58px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._a_2_2.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me._a_2_2.onclick=function (e) {
			player.openNext('{node7}');
		}
		me._a_2_2.ggUpdatePosition=function (useTransition) {
		}
		me._d_2.appendChild(me._a_2_2);
		el=me._a_2_1=document.createElement('div');
		el.ggMarkerNodeId='{node21}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="A 2\uce35 \uac70\uc2e4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 58px;';
		hs+='position : absolute;';
		hs+='top : 57px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._a_2_1.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me._a_2_1.onclick=function (e) {
			player.openNext('{node21}');
		}
		me._a_2_1.ggUpdatePosition=function (useTransition) {
		}
		me._d_2.appendChild(me._a_2_1);
		el=me._a_2_0=document.createElement('div');
		el.ggMarkerNodeId='{node6}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="A 2\uce35 \uc8fc\ubc29";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 54px;';
		hs+='position : absolute;';
		hs+='top : 44px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._a_2_0.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me._a_2_0.onclick=function (e) {
			player.openNext('{node6}');
		}
		me._a_2_0.ggUpdatePosition=function (useTransition) {
		}
		me._d_2.appendChild(me._a_2_0);
		el=me._a_2_=document.createElement('div');
		el.ggMarkerNodeId='{node8}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="A 2\uce35 \ubcf5\ub3c4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 50px;';
		hs+='position : absolute;';
		hs+='top : 35px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._a_2_.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me._a_2_.onclick=function (e) {
			player.openNext('{node8}');
		}
		me._a_2_.ggUpdatePosition=function (useTransition) {
		}
		me._d_2.appendChild(me._a_2_);
		me._a.appendChild(me._d_2);
		me.__22.appendChild(me._a);
		me.__19.appendChild(me.__22);
		me.divSkin.appendChild(me.__19);
		el=me.__16=document.createElement('div');
		el.ggId="\ubaa8\ubc14\uc77c \uc804\uccb4\ud654\uba74";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 30px;';
		hs+='position : absolute;';
		hs+='right : 10px;';
		hs+='top : 120px;';
		hs+='visibility : hidden;';
		hs+='width : 30px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__16.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__16.logicBlock_visible = function() {
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
			else if (
				((me.ggUserdata.tags.indexOf("opening") != -1))
			)
			{
				newLogicStateVisible = 2;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__16.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__16.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__16.style.transition='';
				if (me.__16.ggCurrentLogicStateVisible == 0) {
					me.__16.style.visibility=(Number(me.__16.style.opacity)>0||!me.__16.style.opacity)?'inherit':'hidden';
					me.__16.ggVisible=true;
				}
				else if (me.__16.ggCurrentLogicStateVisible == 1) {
					me.__16.style.visibility=(Number(me.__16.style.opacity)>0||!me.__16.style.opacity)?'inherit':'hidden';
					me.__16.ggVisible=true;
				}
				else if (me.__16.ggCurrentLogicStateVisible == 2) {
					me.__16.style.visibility="hidden";
					me.__16.ggVisible=false;
				}
				else {
					me.__16.style.visibility="hidden";
					me.__16.ggVisible=false;
				}
			}
		}
		me.__16.logicBlock_visible();
		me.__16.ggUpdatePosition=function (useTransition) {
		}
		el=me.__17=document.createElement('div');
		el.ggId="\ubaa8\ubc14\uc77c \uc544\uc774\ucf58 \ubc30\uacbd 1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.196078);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
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
		me.__17.logicBlock_visible = function() {
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
			if (me.__17.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__17.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__17.style.transition='';
				if (me.__17.ggCurrentLogicStateVisible == 0) {
					me.__17.style.visibility="hidden";
					me.__17.ggVisible=false;
				}
				else {
					me.__17.style.visibility=(Number(me.__17.style.opacity)>0||!me.__17.style.opacity)?'inherit':'hidden';
					me.__17.ggVisible=true;
				}
			}
		}
		me.__17.logicBlock_visible();
		me.__17.onclick=function (e) {
			player.toggleFullscreen();
		}
		me.__17.ggUpdatePosition=function (useTransition) {
		}
		el=me.__18=document.createElement('div');
		els=me.__18__img=document.createElement('img');
		els.className='ggskin ggskin__18';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAAA+NJREFUeF7tneF2pCAMheHJtn2y3T5Z2ydjT2bEOipOuJIM2Dv/2hMSvJ8BBMQY+OtKgdhVbViZ4AYkpfQvhPAnhPD2y3X/CiF8xxhFj83PHEhKSQB8/nIIpcv/WIMxBTJlxV/COFTgAYo1kEQYKgXeY4zSlNn1IcwOFYhs9BVjfCeQKs1MjV2ASEdeGlF9mF5ev86Lo8wY4637MOtDUkolIPPd0K9uNjU7asYJxEbzQ68E8gLRj0ISCIH8KHDFPmSadTia+rk/S0zPFOv7gRnSMEMqn6s2UyJSFQJpBASZj8ujpmUVCKQdkKNnKvXEIYG0AyJT5bWTpJtmi0AI5LqjrMpOXYRghjRKiF03QMdOIFZAABjMkM5gEIgFEDAzcl'+
			'XmVcD8D46yTlA6CUMiE8gJ/R+KVsCQZVeZ21o/o+yu+TBDAEI1MPIk4lQmQynuuSKQSiAIjJoQBFKj1n02VjNntekbtGEIRKvUHYZmhyUMg9PvFTAmsZ4BOQWDQCqBTIKVdlqehkEgGJC9afYmMAgEALJ4opbm6630ygDqmp06qpxROQIxEhZ1SyCockblCMRIWNQtgaDKGZUjECNhUbcEgipnVI5AjIRF3RIIqpxROQIxEhZ1SyCockblCMRIWNQtgaDKGZUjECNhUbcEgipnVI5AjIRF3RIIqpxRORjIauNXTweOHR7+ZaRjM7cQEODFlGYVrnS0+6ZrpQ9X82ogA8HIQg4FBQEy4oFjzXaFWKdLFZABsyPrN8zpQrVANPtarW8ixP9lgZSaq9v5HcDv6ZkglT6L/vZOTaj07WJemyElIFDH2frwmaOd6QSiuJ8I'+
			'ZCsSM0Rx43iaEIin2opYBKIQydOEQDzVVsQiEIVIniYE4qm2IhaBKETyNCEQT7UVsQhEIZKnCYF4qq2IRSAKkTxNegUiGiAzyK1njz1ZLGPtXsfm6wgpJa/Z3lcJ0XPc7QddDIA8O6qiZ4G86zYvccwfdGkNRK5IebqO98V3F2+5nmMNhFnyHP/+Z/MsMmTKknwEXk8b7p7LZG8hAxuB8TDAMc2Q5TVNQz75l3wYC/ldZZQl174BkQVxA4IQWAEt7ooZZU1dowGBaFRytCEQR7E1oQhEo5KjDYE4iq0JRSAalRxtCMRRbE0oAtGo5GhDII5ia0IRiEYlRxsCcRRbE4pANCo52hCIo9iaUBogt3fDNc6MbYpf2rzq5CLfMTS+ozTulxkyKhDolTuNOK+wWQIZcrn1Ss2V3AAzEPljwHfVL5UdGyCDQbkcjF0gud2csk'+
			'XWv3vanJA3BBTXpF/R7reM+dBktXRMX5gCBILpZlbqP1cAF6HWbcH8AAAAAElFTkSuQmCC';
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
		el.ggId="\ubaa8\ubc14\uc77c \uc804\uccb4\ud654\uba74 \uc544\uc774\ucf58";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.9,sy:0.9,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 60%;';
		hs+='left : calc(50% - ((60% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((60% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 60%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
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
		me.__16.appendChild(me.__17);
		me.divSkin.appendChild(me.__16);
		el=me.__14=document.createElement('div');
		el.ggId="\ubaa8\ubc14\uc77c \ubc30\uacbd\uc74c\uc545";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 30px;';
		hs+='position : absolute;';
		hs+='right : 10px;';
		hs+='top : 160px;';
		hs+='visibility : hidden;';
		hs+='width : 30px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__14.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__14.logicBlock_visible = function() {
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
			else if (
				((me.ggUserdata.tags.indexOf("opening") != -1))
			)
			{
				newLogicStateVisible = 2;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__14.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__14.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__14.style.transition='';
				if (me.__14.ggCurrentLogicStateVisible == 0) {
					me.__14.style.visibility=(Number(me.__14.style.opacity)>0||!me.__14.style.opacity)?'inherit':'hidden';
					me.__14.ggVisible=true;
				}
				else if (me.__14.ggCurrentLogicStateVisible == 1) {
					me.__14.style.visibility=(Number(me.__14.style.opacity)>0||!me.__14.style.opacity)?'inherit':'hidden';
					me.__14.ggVisible=true;
				}
				else if (me.__14.ggCurrentLogicStateVisible == 2) {
					me.__14.style.visibility="hidden";
					me.__14.ggVisible=false;
				}
				else {
					me.__14.style.visibility="hidden";
					me.__14.ggVisible=false;
				}
			}
		}
		me.__14.logicBlock_visible();
		me.__14.ggUpdatePosition=function (useTransition) {
		}
		el=me.__20=document.createElement('div');
		el.ggId="\ubaa8\ubc14\uc77c \uc544\uc774\ucf58 \ubc30\uacbd 2";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.196078);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
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
		me.__20.logicBlock_visible = function() {
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
			if (me.__20.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__20.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__20.style.transition='';
				if (me.__20.ggCurrentLogicStateVisible == 0) {
					me.__20.style.visibility="hidden";
					me.__20.ggVisible=false;
				}
				else {
					me.__20.style.visibility=(Number(me.__20.style.opacity)>0||!me.__20.style.opacity)?'inherit':'hidden';
					me.__20.ggVisible=true;
				}
			}
		}
		me.__20.logicBlock_visible();
		me.__20.onclick=function (e) {
			me.__15.ggVisible = !me.__15.ggVisible;
			var flag=me.__15.ggVisible;
			me.__15.style.transition='none';
			me.__15.style.visibility=((flag)&&(Number(me.__15.style.opacity)>0||!me.__15.style.opacity))?'inherit':'hidden';
			me.__21.ggVisible = !me.__21.ggVisible;
			var flag=me.__21.ggVisible;
			me.__21.style.transition='none';
			me.__21.style.visibility=((flag)&&(Number(me.__21.style.opacity)>0||!me.__21.style.opacity))?'inherit':'hidden';
			player.toggleMuted("_main");
		}
		me.__20.ggUpdatePosition=function (useTransition) {
		}
		el=me.__15=document.createElement('div');
		els=me.__15__img=document.createElement('img');
		els.className='ggskin ggskin__15';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAABNlJREFUeF7tnGF2ozAMhOFk255styfb7sm8zy3pI2AJSR4HkUx/u8KZzyNZNsk88S+VAnOq2XAyE4EkWwQEQiDJFEg2HTqEQJIpkGw6dAiBJFMg2XToEAJJpkCy6dAhBJJMgWTToUMIJJkCyaZDhxBIMgWSTYcOIZBkCiSbDh1CIMkUSDYdOoRAkimQbDp0iAFIKeXPNE2f8zx/GoZ3DSGQA/lKKWU1pEJ571L84J8vD2Tk6l1i/95oOBTKZYGUUt6mafp7E2ueZ/hnEYDUR37M81zTGPwP/iHgM2wEbAk1CMgd9M1UhkC5FJDFFTWFVKHu/kYAqQ9QXDLEKZcBciDMNArIAqWmxt0iWFbEO3L3lR6I5oq1RUYCWaCsd1vrR0'+
			'NTV2ogR65AAVmeU10mFurtJmJUPUkLxAOjihN1yKbPUOuCNqfo83e18BG7Is8zvCB6tr3KqhfrwuitcCqHRGFEHaI8T2z+tNSFcEkKID0gehwSLdYjXXI6EASMqEN6+oxG7flaG70uOQ0ICkSvQ46gSAIr8+/qS04BgoaBWJmRNCS4pKsv6QKyfIhfyi7q33ZvX0rRul7Phsx0dLIU4dpl1yOXep9RBWvea3jTkPBZuk6Dw0CkyW8U3U3uBCCtBdBMK16XSON76kgIyEHXumZyKhBlntq2tnVE0hyvxA+nrSiQesSwvbhppZtTgRwcDDZF8656dB15BSDi4mmlFu+q9wI8KpJPD+RgWyu5xJO2msCjdeQlgGgdueASs8iSowjk4E7d08h50lDkgFJLW6/kEOl+fJe2PCJ7xh7Vj68G1zJoO8bRaZ++y1rP3boj8ops'+
			'jWvR+tWAtJpEqcdoFXapoWyNDfUiBPL9iujubURh1ROIxebWw0VragGlrNCp78s4xNPweYB4xloW1ysBkTr23Ur29BYEIiwzrRHz3oNLJ9KeoxY2hkpjqBz5SwXdsxszd/VMWd/v5movTJvT1TRN0g6reeFGhwgOUdwhHSxKN5qeLW/41vDpi7qw1R19QRXa8oaPTg7eZ0pzY6gcvaOucF1uGlZDlg96e3FAek2/Djv9LGvz9vyH9OVN705MuY0Mp6suh1hot8ZYv17gjR8torfnBGqN+fTY81lCNcTzAGms48TY9LgeIJG32hWA4fpxikM2x+GWtDcUSOQra5G3WUwfInofYg1uHYdwS9Qhyvtl2k5MKuahI/e1TqelrMalV5dbIkAiKz3yP9aFeXrKEoq+9Z2vu38PAjEfOBqKf1ftuMVP45De2hIBIvRTkW9PdW'+
			'11U6asXrdEgax6qreOL31C3JEyZUVrSw8QS46PFH9L3O2YlCkr4paRQA7e2Ie54xIOadSWnx+cucu9A358Zkln2iaje5t7WYdswOz6gBEOedSPBVymqGs5+EE/zyQ1gLBd1VM4pOGW3VfnIgW1saFopathMC5XQxAie2M0Cjq0iD+dQ7wCR8bfvjg66lfknqKGRIS9wv9cpg+5gpiIORIIQkVgDAIBiokIRSAIFYExCAQoJiIUgSBUBMYgEKCYiFAEglARGINAgGIiQhEIQkVgDAIBiokIRSAIFYExCAQoJiIUgSBUBMYgEKCYiFAEglARGINAgGIiQhEIQkVgDAIBiokIRSAIFYExCAQoJiIUgSBUBMb4D+eAW5J5Vh+GAAAAAElFTkSuQmCC';
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
		el.ggId="\ubaa8\ubc14\uc77c \ubc30\uacbd\uc74c\uc545 \uc544\uc774\ucf58";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.9,sy:0.9,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
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
		el.style.transform=parameterToTransform(el.ggParameter);
		me.__15.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__15.ggUpdatePosition=function (useTransition) {
		}
		me.__20.appendChild(me.__15);
		el=me.__21=document.createElement('div');
		els=me.__21__img=document.createElement('img');
		els.className='ggskin ggskin__21';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAAAwtJREFUeF7tnG1yhCAQROFm2ZMlOVn2ZqSowi3zwTKDQ6qjzz/5M2CnHw2KujlxSDmQpdQgJgFEbBAABCBiDojJISEAEXNATA4JAYiYA2JySAhAxBwQk0NCACLmgJgcEgIQMQfE5JAQgIg5ICaHhABEzAExOSQEIGIOiMkhIQARc0BMDgkBiJgDYnJOl5BSyltK6Z5zvot5bZJzGiCllJeU0mtKqf6tx+0/QjkFkJaKCmN/AMSUycCiX1IBkEB/XV11UgEQl4tBxaWUj91a0euVKSvI7243hlSQkNUQtv6dMLjKWgVmAsQmhSkrGsoBGCQkEsZBECREEAYJOQolKBVcZR0FUdsvgEFCrMbmnL/sny2CARDj3XNSAvJtMLznnO'+
			'vW/fCYbTfsOKWYz6LbJl/dzhgeKkA6yRxCmW03NKYVhGy/e6YdISClY1IXyuD/DLkRvSQQQ6J/QDEMOoAMpoGnBhkMfkDx1Fqnpl7dJRPi2LB8b7Xfn0bu/RyuOx5IlwZivVR/YmgojHqeywM5ACUcBkB2Q9+wTiybpvYdkxA/lCXJ2GQABCCae1lMWW1kOo3wXEGab9QmNSyZui4/ZU3C2AZGOJRLAzHA4MbQMyexddJxwDDSHi3/wW5v1crmYmAytq66i/pgt3d2+z1kPYlaQ+o3GTygChhVIUDafpDlBWge4Q6ghQHZQXl6ypzzbV/gWX+cA9B0HzL7CVyb9uoAC/10LhSI07BH+SIoJiCzmle1kwDS0mVeh4xmAMRo1NMy6+tEhnMBxGCSqcTwEoKlH4BYXPLUHEwLQDxmW2sPLPgAsZrsrRt8/tzrDiBeo731'+
			'zrQAxGvwTL0jLQCZMXi2jSEtAJk1d7YdP60x69zidvz4zGKDZ7rn55lmXPuDNg3Mi/VrqD+Q5DqFzOaiS/WJiwEiBhcgABFzQEwOCQGImANickgIQMQcEJNDQgAi5oCYHBICEDEHxOSQEICIOSAmh4QARMwBMTkkBCBiDojJISEAEXNATA4JAYiYA2JySAhAxBwQk0NCxIB8AvU38nQiVY9jAAAAAElFTkSuQmCC';
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
		el.ggId="\ubaa8\ubc14\uc77c \ubc30\uacbd\uc74c\uc545 \uc544\uc774\ucf58 2";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.9,sy:0.9,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 80%;';
		hs+='left : calc(50% - ((80% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((80% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 80%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
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
		me.__21.ggUpdatePosition=function (useTransition) {
		}
		me.__20.appendChild(me.__21);
		me.__14.appendChild(me.__20);
		me.divSkin.appendChild(me.__14);
		el=me.__12=document.createElement('div');
		el.ggId="\ubaa8\ubc14\uc77c \uacf5\uc720";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 30px;';
		hs+='position : absolute;';
		hs+='right : 10px;';
		hs+='top : 200px;';
		hs+='visibility : hidden;';
		hs+='width : 30px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__12.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__12.logicBlock_visible = function() {
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
			else if (
				((me.ggUserdata.tags.indexOf("opening") != -1))
			)
			{
				newLogicStateVisible = 2;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__12.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__12.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__12.style.transition='';
				if (me.__12.ggCurrentLogicStateVisible == 0) {
					me.__12.style.visibility=(Number(me.__12.style.opacity)>0||!me.__12.style.opacity)?'inherit':'hidden';
					me.__12.ggVisible=true;
				}
				else if (me.__12.ggCurrentLogicStateVisible == 1) {
					me.__12.style.visibility=(Number(me.__12.style.opacity)>0||!me.__12.style.opacity)?'inherit':'hidden';
					me.__12.ggVisible=true;
				}
				else if (me.__12.ggCurrentLogicStateVisible == 2) {
					me.__12.style.visibility="hidden";
					me.__12.ggVisible=false;
				}
				else {
					me.__12.style.visibility="hidden";
					me.__12.ggVisible=false;
				}
			}
		}
		me.__12.logicBlock_visible();
		me.__12.ggUpdatePosition=function (useTransition) {
		}
		el=me.__30=document.createElement('div');
		el.ggId="\ubaa8\ubc14\uc77c \uc544\uc774\ucf58 \ubc30\uacbd 3";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.196078);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
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
				((me.ggUserdata.tags.indexOf("opening") != -1))
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
					me.__30.style.visibility="hidden";
					me.__30.ggVisible=false;
				}
				else {
					me.__30.style.visibility=(Number(me.__30.style.opacity)>0||!me.__30.style.opacity)?'inherit':'hidden';
					me.__30.ggVisible=true;
				}
			}
		}
		me.__30.logicBlock_visible();
		me.__30.onclick=function (e) {
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
		me.__30.ggUpdatePosition=function (useTransition) {
		}
		el=me.__13=document.createElement('div');
		els=me.__13__img=document.createElement('img');
		els.className='ggskin ggskin__13';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAABJlJREFUeF7tnQly3SAMQPHJ2pyszcnanIyOiHExq8DCCJBnMpOfj4mthxaEsA8lBysJHKyuhvnFaK1/KqXgB44fzu/w+e/59y/4/TgO+7nqrgQIQlxa699KqV+Ipm4TAPJZC0aAZKTcCCLW4wcWjABJANFa//FMUqWCBM3BjH2UOhEgnoROPwEwehxFKAIkBEKtGT7YLBQB4oirg5lKaRk4ewgUgkOAnCIhdOBYUxeFIkD+A+ltqkJtOI5A/gJEKdXZkec0JtASAfIN5HXtOCkJkNhw1VprrOGnbnd4Zmt7DRlorgxbAfLuRBCjULe0imjIdwa318xcgGAk4LYZbbKUUqIhPjRx6rXDuHP7gWFvkNfa3ocA6wFpEzvEgnWS7Y'+
			'EMhBGEvCYM7mwN2HY/EkRqlr4lkBME3HvtGjnl4EquiWylIQy0Iuk77BdbAGEEAuSeLXhYGggzEEUYy/oQIhCfkWK4Vj+SXLL1O1xKQwhBQEhq1rzP1AoEALZisQYKQL36wpy4BBAiECCv5Eh2wEC7HByoWPxKFTGUoEwN5ATh19iW7jn2Pdqk2JNPQFdf2MrE0sVNCYRwLlENoiTQp99PB4TIPLEDMd08ZHUQ0wDZBQR7IFQgnmyeeeoPWs5n50MIQVTF/y3C63FOMxA/7LtUrnErFxGI7FyihwCp+0QDcfbXYdLW6O1cI+cS1MKk6K8IhCDmj+b+Cfq19882hG0BlAVCaEbg2q60M1G/S4HIRlkPE2q5gQGmrCVJ5/a5JIgkEAaFYymgS4PIARlVmp8EMdtcosV3RIEMLBiLZmDhj61p7CdCGXnu5dSZmaotzFMM'+
			'vAuEg6naFsTNZDHQju1B+EBaHq5CZWrRzwGh+oec+zEma7AzF+1wRogFMmzTY66wgPNI7nVtAqSXZBv7FSCNgut1GgcfIk494kMkyuo15Cv7tRoyEgh6Mavy3qZs7s7UR0ZaIDwB425pI1o0ohiVW4O5rRiO3K8dIbklGB/ISF+S0q6twARr6oxMlw9oCzDRIgfGUJZ3/smqkw5QTBKRsIBiSY3B1GVRLFwFGV1CMEtli4tAzvS8Ld2p2WuH2tolYO6uEgXEPcWp6QVIsJ3MPZpf1SBgvsVYDYRi5pfrg3A5eUpTxg6IhUUYVEwFhi0QYjDTRGTsgewGZhogu4CZDogThteE4NPkyaYE4mgLhN5DwCA2HNm3tFW9GGxqIG+DeRD5oeEsAeQNMA9g+OYyG4YvBaQTGMg+YDa61syZ93zmImE6pkbY2LZRKEtqiC8Rxm'+
			'D2frI1UzA3n7KFhkygMReULYF0cP5Yv5FqJ0AiazwUE8xmMPbVR1trSMSUjSyDMloiQBwqhItjLZpiIi4BwgeIeX2FALkDGWmyBAgzHyJABEiLq3vxHHHqLwob+68Gbskwey3FqXukCNc9sGPAthMgMYkNAnJlfUVDIlQGQLm2hguQhGF50ZdI+h1j3F+KuIL1ddGQDJ3OUKLFDgKkoC6dVhmTlScCBGO/6F5gXNzEJECQQKDZA20pgrCXIUAqgERWGe0uMv9p3QYAtK99zK0AaQTS67R/CENFg5QtN4wAAAAASUVORK5CYII=';
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
		el.ggId="\ubaa8\ubc14\uc77c \uacf5\uc720 \uc544\uc774\ucf58";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.9,sy:0.9,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 60%;';
		hs+='left : calc(50% - ((60% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((60% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 60%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
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
		me.__30.appendChild(me.__13);
		me.__12.appendChild(me.__30);
		me.divSkin.appendChild(me.__12);
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
		}
		me.divSkin.appendChild(me._markertemplate);
		el=me.__5=document.createElement('div');
		el.ggId="\ubaa8\ubc14\uc77c \ud0c0\uc785";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0%);';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__5.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__5.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize().width <= 420))
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
			if (me.__5.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__5.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__5.style.transition='';
				if (me.__5.ggCurrentLogicStateVisible == 0) {
					me.__5.style.visibility=(Number(me.__5.style.opacity)>0||!me.__5.style.opacity)?'inherit':'hidden';
					me.__5.ggVisible=true;
				}
				else if (me.__5.ggCurrentLogicStateVisible == 1) {
					me.__5.style.visibility=(Number(me.__5.style.opacity)>0||!me.__5.style.opacity)?'inherit':'hidden';
					me.__5.ggVisible=true;
				}
				else {
					me.__5.style.visibility="hidden";
					me.__5.ggVisible=false;
				}
			}
		}
		me.__5.logicBlock_visible();
		me.__5.ggUpdatePosition=function (useTransition) {
		}
		el=me.__7=document.createElement('div');
		el.ggId="\ubaa8\ubc14\uc77c \ud0c0\uc785 \ubc30\uacbd";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(245,245,245,0.588235);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 0px 0px 6px 6px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='box-shadow: 0 12px 24px 0 rgb(0 0 0 \/ 10%); min-width:350px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
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
		me.__7.logicBlock_visible = function() {
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
			if (me.__7.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__7.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__7.style.transition='';
				if (me.__7.ggCurrentLogicStateVisible == 0) {
					me.__7.style.visibility="hidden";
					me.__7.ggVisible=false;
				}
				else {
					me.__7.style.visibility=(Number(me.__7.style.opacity)>0||!me.__7.style.opacity)?'inherit':'hidden';
					me.__7.ggVisible=true;
				}
			}
		}
		me.__7.logicBlock_visible();
		me.__7.onclick=function (e) {
			me.__9.ggVisible = !me.__9.ggVisible;
			var flag=me.__9.ggVisible;
			me.__9.style.transition='none';
			me.__9.style.visibility=((flag)&&(Number(me.__9.style.opacity)>0||!me.__9.style.opacity))?'inherit':'hidden';
			me.__10.ggVisible = !me.__10.ggVisible;
			var flag=me.__10.ggVisible;
			me.__10.style.transition='none';
			me.__10.style.visibility=((flag)&&(Number(me.__10.style.opacity)>0||!me.__10.style.opacity))?'inherit':'hidden';
			player.setVariableValue('vis_mobiletype', !player.getVariableValue('vis_mobiletype'));
			me.__6.ggVisible = !me.__6.ggVisible;
			var flag=me.__6.ggVisible;
			me.__6.style.transition='none';
			me.__6.style.visibility=((flag)&&(Number(me.__6.style.opacity)>0||!me.__6.style.opacity))?'inherit':'hidden';
			player.setVariableValue('vis_mobilecatagory', false);
			player.setVariableValue('vis_hambegur', false);
		}
		me.__7.ggUpdatePosition=function (useTransition) {
		}
		el=me.__8=document.createElement('div');
		els=me.__8__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ubaa8\ubc14\uc77c \ud0c0\uc785\uba85";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(33,33,33,1);';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((27% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 27%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 18px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__8.ggUpdateText=function() {
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
		me.__8.ggUpdateText();
		player.addListener('changenode', function() {
			me.__8.ggUpdateText();
		});
		el.appendChild(els);
		me.__8.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__8.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 400))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me.__8.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__8.ggCurrentLogicStateSize = newLogicStateSize;
				me.__8.style.transition='width 0s, height 0s';
				if (me.__8.ggCurrentLogicStateSize == 0) {
					me.__8.style.width='45%';
					me.__8.style.height='100%';
					me.__8.style.left = 'calc(50% - (45% / 2))';
					skin.updateSize(me.__8);
				}
				else {
					me.__8.style.width='27%';
					me.__8.style.height='100%';
					me.__8.style.left = 'calc(50% - (27% / 2))';
					skin.updateSize(me.__8);
				}
			}
		}
		me.__8.logicBlock_size();
		me.__8.ggUpdatePosition=function (useTransition) {
		}
		el=me.__11=document.createElement('div');
		els=me.__11__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ubaa8\ubc14\uc77c \uc81c\uacf1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(33,33,33,1);';
		hs+='cursor : default;';
		hs+='height : 20px;';
		hs+='position : absolute;';
		hs+='right : -6px;';
		hs+='top : 7px;';
		hs+='visibility : inherit;';
		hs+='width : 10px;';
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
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__11.ggUpdateText=function() {
			var params = [];
			var hs = player._("2\n", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__11.ggUpdateText();
		el.appendChild(els);
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
			var newConditionsTruePosition = [];
			var deltaX = 0;
			var deltaY = 0;
			if (
				((player.getViewerSize().width <= 400))
			)
			{
				newConditionsTruePosition.push(0);
			}
			if (JSON.stringify(me.__11.ggConditionsTruePosition) != JSON.stringify(newConditionsTruePosition)) {
				me.__11.ggConditionsTruePosition = newConditionsTruePosition;
				me.__11.style.transition='right 0s, top 0s';
				if (me.__11.ggConditionsTruePosition.includes(0)) {
					deltaX += 20;
					deltaY += 0;
				}
					me.__11.style.right=(-6+deltaX) + 'px';
					me.__11.style.top=(7+deltaY) + 'px';
			}
		}
		me.__11.logicBlock_position();
		me.__11.ggUpdatePosition=function (useTransition) {
		}
		me.__8.appendChild(me.__11);
		el=me.__10=document.createElement('div');
		els=me.__10__img=document.createElement('img');
		els.className='ggskin ggskin__10';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAAA41JREFUeF7t3FFyo0AMBFDjkxifxDnZJifbnMT4JmzhKhKSZayZYSS1oPc33pjw0lJnqHJ34j+oO9BBXQ0v5kQQsF8CghAE7A6AXQ4TQhCwOwB2ObtIyOVyuZ3P59v9fn8Hu7/Fl7MLkL7vx+knH4Yh/M8T/ge4Xq/v4zj+mUC6rvuInpLQINOo6rru73IuRE9JaJC+7yeM2xIkekrCgqylY4aJjBIWZC0dexhdIUGWizzVK6OmJCTIXHOlkh9xwYcDkUZV9AUfCuTVIk+lZRzHt8fj8SmlCeXroUBK0hG1cYUBqUlHRJQwIDXpiFiDQ4Dk1FxpB0SpwfAgW0bVb6QINRgeZOuoilaDoUFapiPKgocGaZmORVI+h2F4k3aO19'+
			'dhQTTSESElsCC551W1v8moCx4SpEXNlaBQazAciOaoilCD4UCUFvlqYBBTAgVimQ7UBQ8FYpkO1HMuGBCLRR7hcS8MiHbNlVoXSg2GAPEaVYjnXO4gHosc+XGvOwhCOpAalysIUjpQUFxBkNKBUoPdQDxrrtS4PP+CdwFBHFUo51wuIKijCqEGm4NESIfngjcHiZAOz8e9piCR0uGVElMQ7/MqqV2lvm55zmUGglxzJSjLGmwCEnFUedVgE5Bgi9z1ca86yB7SYbng1UH2kA7Lcy5VkMiL3OtxrypI1JortS7NGqwGsrdRZXXOpQKyp0Vu/bhXBWTP6dBuXM1BjpAOTZTmIEdIh2YNbgqyx5orNa7W51zNQI40qjTPuZqBHG1UadXgJiBHTkfrBd8E5MjpaP24dzMI0/FN0mLBbwbZ63mV1K60HvduAjlizZWgtqak'+
			'GoSjKk2z5TS4GoSLPA2yJSVVIEyHNLjqP4e+CoTpkEGmV9SMrmIQLvI8jOlVNaOrGIQ1Nx+kJiVFIBxVZRg1KckG4SIvx5j/R8mHOWeDMB31ICW7JAuE6ajHKD0NzgJhOraD5C54EYQ1tw1G7oJ/CcJR1Q5j/k7SH4svQTiq2oNICz4JwnS0x8hZ8EkQpkMP5HQ6JT/MeRWE6VDFeH7z1OhaBeF5lT5Iqgb/B8Kaa4ORSskPEI4qO4xUDf4BwkVuD/J7l3yBMB32GGs1+AuE6fADWS74JwgXuS/GcsE/QVhz/UHmlHQcVRgYc0q6aZnjXBKvRHwewltkewcIYnu/xXcjiHiLbF9AENv7Lb4bQcRbZPsCgtjeb/Hd/gHgY8T6+2hvfQAAAABJRU5ErkJggg==';
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
		el.ggId="\ubaa8\ubc14\uc77c \uc5c5 \uba54\ub274";
		el.ggDy=4;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 7px;';
		hs+='position : absolute;';
		hs+='right : -25px;';
		hs+='top : calc(50% - ((7px + 0px) / 2) + 4%);';
		hs+='visibility : hidden;';
		hs+='width : 10px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
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
		me.__10.ggUpdatePosition=function (useTransition) {
		}
		me.__8.appendChild(me.__10);
		el=me.__9=document.createElement('div');
		els=me.__9__img=document.createElement('img');
		els.className='ggskin ggskin__9';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAAA71JREFUeF7tnWuSmzAQhNFNjE+SPVk2J4tPYnwSk/JuyZFZgSWY0fRA78/EgbE++oGUSkLHH6gVCFDTcJiOQMAeAgIhELAVABuHCkEDcjqdfoHNdOhxwvl8/hzH8fehVwHny1++LKvv+xFnpuNOMgxD+AJCldg/BCGEP9fr9fMZ6lSJKZTLMAwfjwmeQKgSOyDjOH7cbrfLCxBalxmQpzp+AGHAt4eSqiMLhNbVDkoM8vSO2Td1BnwbKI+aO71TFghVog9kalXxjrN7WX3f/+26jtsqOmxegvytZbFx6VCIV51TRzbU01FoXSpgZtXxFghrsDyQJXUUAaFK5KDkam5Ry5p+iDVYBMqiVb1tWcwSEQjPi7yzqiogbF2b4RSpoy'+
			'hD4iiPo94QwuPdhD+VK1CqjiogVEklhf8fL1ZHNRDW4Hoouf2qpatU/zUg1uByKCU1d1XtZQ0uh5B8ssqqqlsWa3AdlJogT69cbVnxD9O6FgGtUseqUE/H4Bt8HspadWwGQpX8BLImyEUsK16EKnmFUltzRVoWA17eqja1rEwN5nFv160OclHL4pbK93JuCXJxIIQio47NLYtv8LLqEAdyxBq8teaKt6yDq0QkyFUy5IhbKlJBrgrkQAEvrg7xDImkj3Dcq6EONSAHUImKOlSBPC6+132urftV+Y2X719dfR6ydNE9B7x0zVWvvTuvwWpWFddNVSF7yxKtIFevvVOV7OQNXl0d6hmSgvEe8C3U0RSIZ5VoB3lzy4o39KoSzZrbvGWlN/SoklZW1axlZWqwp+PeJkFuZlneanBrdTQNdYfW1VwdZkA87HNZqMMUCHLA'+
			't6y5pi3LyT6XiVWZtSz0LLGyKggggK3LVB2mGRKfCKTjXmt1QAABUom5OmCAINTglvtV03Jj+qY+N4xlDbasuVC1F6QGQ1gVTMuyrsEIQQ5pWXGoxtYFpQ6oUE+fklYHWWjqgAXSQiVIQQ5tWXE4bZWg1FzoltUq4BGtCrJlZWqwxnEvXJC7sCytLRVkdcCGuqJ1QavDBRDJfS50dbgBIlGDUWuum5YlvM8Fb1UuWpZUlniwKndANrQuN+pwkyHx6Vlz3OtJHe6ArFCJK3W4BFJTg1H3q6aFxc2b+tzgJTXYS811W3sra7A7q3LZskprsLcgd29Z8QvMWJdbdbgN9fSJmh5keVbHLoCkKvEa5LuxrPhFoko81tzdtKxpwN/v90v8T+KXej7676n/WyfoC4A2H4GAESEQAgFbAbBxqBACAVsBsHGoEDAg/wArJ5JFah'+
			'oMWwAAAABJRU5ErkJggg==';
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
		el.ggId="\ubaa8\ubc14\uc77c \ub2e4\uc6b4 \uba54\ub274";
		el.ggDy=4;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 7px;';
		hs+='position : absolute;';
		hs+='right : -25px;';
		hs+='top : calc(50% - ((7px + 0px) / 2) + 4%);';
		hs+='visibility : inherit;';
		hs+='width : 10px;';
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
		me.__8.appendChild(me.__9);
		me.__7.appendChild(me.__8);
		me.__5.appendChild(me.__7);
		me.divSkin.appendChild(me.__5);
		el=me.__3=document.createElement('div');
		el.ggId="\ubaa8\ubc14\uc77c \ud0c0\uc785 \uba54\ub274";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : -40%;';
		hs+='height : 35%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__3.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__3.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('vis_mobiletype') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else if (
				((player.getViewerSize().height <= 670))
			)
			{
				newLogicStatePosition = 1;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__3.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__3.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__3.style.transition='left 500ms ease 0ms, bottom 500ms ease 0ms, width 0s, height 0s';
				if (me.__3.ggCurrentLogicStatePosition == 0) {
					me.__3.style.left = 'calc(50% - (100% / 2))';
					me.__3.style.bottom='0%';
				}
				else if (me.__3.ggCurrentLogicStatePosition == 1) {
					me.__3.style.left = 'calc(50% - (100% / 2))';
					me.__3.style.bottom='-45%';
				}
				else {
					me.__3.style.left='calc(50% - ((100% + 0px) / 2) + 0px)';
					me.__3.style.bottom='-40%';
				}
			}
		}
		me.__3.logicBlock_position();
		me.__3.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().height <= 670))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me.__3.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__3.ggCurrentLogicStateSize = newLogicStateSize;
				me.__3.style.transition='left 500ms ease 0ms, bottom 500ms ease 0ms, width 0s, height 0s';
				if (me.__3.ggCurrentLogicStateSize == 0) {
					me.__3.style.width='100%';
					me.__3.style.height='45%';
					me.__3.style.left = 'calc(50% - (100% / 2))';
					skin.updateSize(me.__3);
				}
				else {
					me.__3.style.width='100%';
					me.__3.style.height='35%';
					me.__3.style.left = 'calc(50% - (100% / 2))';
					skin.updateSize(me.__3);
				}
			}
		}
		me.__3.logicBlock_size();
		me.__3.logicBlock_visible = function() {
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
			if (me.__3.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__3.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__3.style.transition='left 500ms ease 0ms, bottom 500ms ease 0ms, width 0s, height 0s';
				if (me.__3.ggCurrentLogicStateVisible == 0) {
					me.__3.style.visibility=(Number(me.__3.style.opacity)>0||!me.__3.style.opacity)?'inherit':'hidden';
					me.__3.ggVisible=true;
				}
				else if (me.__3.ggCurrentLogicStateVisible == 1) {
					me.__3.style.visibility=(Number(me.__3.style.opacity)>0||!me.__3.style.opacity)?'inherit':'hidden';
					me.__3.ggVisible=true;
				}
				else {
					me.__3.style.visibility="hidden";
					me.__3.ggVisible=false;
				}
			}
		}
		me.__3.logicBlock_visible();
		me.__3.onclick=function (e) {
			me.__6.ggVisible = !me.__6.ggVisible;
			var flag=me.__6.ggVisible;
			me.__6.style.transition='none';
			me.__6.style.visibility=((flag)&&(Number(me.__6.style.opacity)>0||!me.__6.style.opacity))?'inherit':'hidden';
		}
		me.__3.ggUpdatePosition=function (useTransition) {
		}
		el=me.__4=document.createElement('div');
		el.ggId="\ubaa8\ubc14\uc77c \ub4dc\ub86d\ub2e4\uc6b4 \ubc30\uacbd";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 5px;';
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
		me.__4.ggUpdatePosition=function (useTransition) {
		}
		el=me._container_9=document.createElement('div');
		el.ggId="Container 9";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 90%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((90% + 0px) / 2) + 0%);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._container_9.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._container_9.ggUpdatePosition=function (useTransition) {
		}
		el=me._m_5=document.createElement('div');
		els=me._m_5__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="m\ud0c0\uc785 5";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='border-color : rgba(255,255,255,0.784314) rgba(255,255,255,0.784314) rgba(77,77,77,0.705882) rgba(255,255,255,0.784314);';
		hs+='border-style : solid;';
		hs+='border-width : 0px 0px 0px 0px;';
		hs+='color : rgba(33,33,33,1);';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 200px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 16px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 4px 0px 4px 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._m_5.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc5f0\ub9bd\ud615D 125m", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._m_5.ggUpdateText();
		el.appendChild(els);
		me._m_5.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._m_5.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['m_5'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._m_5.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._m_5.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._m_5.style.transition='background-color 0s, color 0s';
				if (me._m_5.ggCurrentLogicStateBackgroundColor == 0) {
					me._m_5.style.backgroundColor="rgba(77,77,77,1)";
				}
				else {
					me._m_5.style.backgroundColor="rgba(255,255,255,0)";
				}
			}
		}
		me._m_5.logicBlock_backgroundcolor();
		me._m_5.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((player._(me.ggUserdata.comment) == "\uc5f0\ub9bd\ud615D"))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me._m_5.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me._m_5.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me._m_5.style.transition='background-color 0s, color 0s';
				if (me._m_5.ggCurrentLogicStateTextColor == 0) {
					me._m_5.style.color="rgba(26,109,255,1)";
				}
				else {
					me._m_5.style.color="rgba(33,33,33,1)";
				}
			}
		}
		me._m_5.logicBlock_textcolor();
		me._m_5.onclick=function (e) {
			player.openUrl("","_self");
		}
		me._m_5.onmouseover=function (e) {
			me.elementMouseOver['m_5']=true;
			me._m_5.logicBlock_backgroundcolor();
		}
		me._m_5.onmouseout=function (e) {
			if (e && e.toElement) {
				var current = e.toElement;
				while (current = current.parentNode) {
				if (current == me._m_5__text)
					return;
				}
			}
			me.elementMouseOver['m_5']=false;
			me._m_5.logicBlock_backgroundcolor();
		}
		me._m_5.ggCurrentLogicStateBackgroundColor = -1;
		me._m_5.ggCurrentLogicStateTextColor = -1;
		me._m_5.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['m_5']) {
				me.elementMouseOver['m_5']=true;
			}
		}
		me._m_5.ggUpdatePosition=function (useTransition) {
		}
		el=me._m5=document.createElement('div');
		els=me._m5__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="m\uc81c\uacf15";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(33,33,33,1);';
		hs+='cursor : default;';
		hs+='height : 20px;';
		hs+='position : absolute;';
		hs+='right : 35.5%;';
		hs+='top : 15px;';
		hs+='visibility : inherit;';
		hs+='width : 10px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 10px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._m5.ggUpdateText=function() {
			var params = [];
			var hs = player._("2\n", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._m5.ggUpdateText();
		el.appendChild(els);
		me._m5.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._m5.logicBlock_position = function() {
			var newConditionsTruePosition = [];
			var deltaX = 0;
			var deltaY = 0;
			if (
				((player.getViewerSize().width <= 400))
			)
			{
				newConditionsTruePosition.push(0);
			}
			if (JSON.stringify(me._m5.ggConditionsTruePosition) != JSON.stringify(newConditionsTruePosition)) {
				me._m5.ggConditionsTruePosition = newConditionsTruePosition;
				me._m5.style.transition='right 0s, top 0s, color 0s';
				if (me._m5.ggConditionsTruePosition.includes(0)) {
					deltaX += -2.5;
					deltaY += 0;
				}
					me._m5.style.right=(35.5+deltaX) + '%';
					me._m5.style.top=(15+deltaY) + 'px';
			}
		}
		me._m5.logicBlock_position();
		me._m5.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((player._(me.ggUserdata.comment) == "\uc5f0\ub9bd\ud615D"))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me._m5.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me._m5.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me._m5.style.transition='right 0s, top 0s, color 0s';
				if (me._m5.ggCurrentLogicStateTextColor == 0) {
					me._m5.style.color="rgba(26,109,255,1)";
				}
				else {
					me._m5.style.color="rgba(33,33,33,1)";
				}
			}
		}
		me._m5.logicBlock_textcolor();
		me._m5.ggUpdatePosition=function (useTransition) {
		}
		me._m_5.appendChild(me._m5);
		me._container_9.appendChild(me._m_5);
		el=me._m_4=document.createElement('div');
		els=me._m_4__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="m\ud0c0\uc785 4";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='border-color : rgba(255,255,255,0.784314) rgba(255,255,255,0.784314) rgba(77,77,77,0.392157) rgba(255,255,255,0.784314);';
		hs+='border-style : solid;';
		hs+='border-width : 0px 0px 1px 0px;';
		hs+='color : rgba(33,33,33,1);';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 150px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 16px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 4px 0px 4px 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._m_4.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc5f0\ub9bd\ud615C 177m", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._m_4.ggUpdateText();
		el.appendChild(els);
		me._m_4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._m_4.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['m_4'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._m_4.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._m_4.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._m_4.style.transition='background-color 0s, color 0s';
				if (me._m_4.ggCurrentLogicStateBackgroundColor == 0) {
					me._m_4.style.backgroundColor="rgba(77,77,77,1)";
				}
				else {
					me._m_4.style.backgroundColor="rgba(255,255,255,0)";
				}
			}
		}
		me._m_4.logicBlock_backgroundcolor();
		me._m_4.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((player._(me.ggUserdata.comment) == "\uc5f0\ub9bd\ud615C"))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me._m_4.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me._m_4.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me._m_4.style.transition='background-color 0s, color 0s';
				if (me._m_4.ggCurrentLogicStateTextColor == 0) {
					me._m_4.style.color="rgba(26,109,255,1)";
				}
				else {
					me._m_4.style.color="rgba(33,33,33,1)";
				}
			}
		}
		me._m_4.logicBlock_textcolor();
		me._m_4.onclick=function (e) {
			player.openUrl("","_self");
		}
		me._m_4.onmouseover=function (e) {
			me.elementMouseOver['m_4']=true;
			me._m_4.logicBlock_backgroundcolor();
		}
		me._m_4.onmouseout=function (e) {
			if (e && e.toElement) {
				var current = e.toElement;
				while (current = current.parentNode) {
				if (current == me._m_4__text)
					return;
				}
			}
			me.elementMouseOver['m_4']=false;
			me._m_4.logicBlock_backgroundcolor();
		}
		me._m_4.ggCurrentLogicStateBackgroundColor = -1;
		me._m_4.ggCurrentLogicStateTextColor = -1;
		me._m_4.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['m_4']) {
				me.elementMouseOver['m_4']=true;
			}
		}
		me._m_4.ggUpdatePosition=function (useTransition) {
		}
		el=me._m4=document.createElement('div');
		els=me._m4__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="m\uc81c\uacf14";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(33,33,33,1);';
		hs+='cursor : default;';
		hs+='height : 20px;';
		hs+='position : absolute;';
		hs+='right : 35.5%;';
		hs+='top : 15px;';
		hs+='visibility : inherit;';
		hs+='width : 10px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 10px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._m4.ggUpdateText=function() {
			var params = [];
			var hs = player._("2\n", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._m4.ggUpdateText();
		el.appendChild(els);
		me._m4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._m4.logicBlock_position = function() {
			var newConditionsTruePosition = [];
			var deltaX = 0;
			var deltaY = 0;
			if (
				((player.getViewerSize().width <= 400))
			)
			{
				newConditionsTruePosition.push(0);
			}
			if (JSON.stringify(me._m4.ggConditionsTruePosition) != JSON.stringify(newConditionsTruePosition)) {
				me._m4.ggConditionsTruePosition = newConditionsTruePosition;
				me._m4.style.transition='right 0s, top 0s, color 0s';
				if (me._m4.ggConditionsTruePosition.includes(0)) {
					deltaX += -2.5;
					deltaY += 0;
				}
					me._m4.style.right=(35.5+deltaX) + '%';
					me._m4.style.top=(15+deltaY) + 'px';
			}
		}
		me._m4.logicBlock_position();
		me._m4.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((player._(me.ggUserdata.comment) == "\uc5f0\ub9bd\ud615C"))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me._m4.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me._m4.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me._m4.style.transition='right 0s, top 0s, color 0s';
				if (me._m4.ggCurrentLogicStateTextColor == 0) {
					me._m4.style.color="rgba(26,109,255,1)";
				}
				else {
					me._m4.style.color="rgba(33,33,33,1)";
				}
			}
		}
		me._m4.logicBlock_textcolor();
		me._m4.ggUpdatePosition=function (useTransition) {
		}
		me._m_4.appendChild(me._m4);
		me._container_9.appendChild(me._m_4);
		el=me._m_3=document.createElement('div');
		els=me._m_3__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="m\ud0c0\uc785 3";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='border-color : rgba(255,255,255,0.784314) rgba(255,255,255,0.784314) rgba(77,77,77,0.392157) rgba(255,255,255,0.784314);';
		hs+='border-style : solid;';
		hs+='border-width : 0px 0px 1px 0px;';
		hs+='color : rgba(33,33,33,1);';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 100px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 16px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 4px 0px 4px 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._m_3.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc5f0\ub9bd\ud615B 135m", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._m_3.ggUpdateText();
		el.appendChild(els);
		me._m_3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._m_3.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['m_3'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._m_3.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._m_3.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._m_3.style.transition='background-color 0s, color 0s';
				if (me._m_3.ggCurrentLogicStateBackgroundColor == 0) {
					me._m_3.style.backgroundColor="rgba(77,77,77,1)";
				}
				else {
					me._m_3.style.backgroundColor="rgba(255,255,255,0)";
				}
			}
		}
		me._m_3.logicBlock_backgroundcolor();
		me._m_3.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((player._(me.ggUserdata.comment) == "\uc5f0\ub9bd\ud615B"))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me._m_3.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me._m_3.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me._m_3.style.transition='background-color 0s, color 0s';
				if (me._m_3.ggCurrentLogicStateTextColor == 0) {
					me._m_3.style.color="rgba(26,109,255,1)";
				}
				else {
					me._m_3.style.color="rgba(33,33,33,1)";
				}
			}
		}
		me._m_3.logicBlock_textcolor();
		me._m_3.onclick=function (e) {
			player.openUrl("","_self");
		}
		me._m_3.onmouseover=function (e) {
			me.elementMouseOver['m_3']=true;
			me._m_3.logicBlock_backgroundcolor();
		}
		me._m_3.onmouseout=function (e) {
			if (e && e.toElement) {
				var current = e.toElement;
				while (current = current.parentNode) {
				if (current == me._m_3__text)
					return;
				}
			}
			me.elementMouseOver['m_3']=false;
			me._m_3.logicBlock_backgroundcolor();
		}
		me._m_3.ggCurrentLogicStateBackgroundColor = -1;
		me._m_3.ggCurrentLogicStateTextColor = -1;
		me._m_3.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['m_3']) {
				me.elementMouseOver['m_3']=true;
			}
		}
		me._m_3.ggUpdatePosition=function (useTransition) {
		}
		el=me._m3=document.createElement('div');
		els=me._m3__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="m\uc81c\uacf13";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(33,33,33,1);';
		hs+='cursor : default;';
		hs+='height : 20px;';
		hs+='position : absolute;';
		hs+='right : 35.5%;';
		hs+='top : 15px;';
		hs+='visibility : inherit;';
		hs+='width : 10px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 10px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._m3.ggUpdateText=function() {
			var params = [];
			var hs = player._("2\n", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._m3.ggUpdateText();
		el.appendChild(els);
		me._m3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._m3.logicBlock_position = function() {
			var newConditionsTruePosition = [];
			var deltaX = 0;
			var deltaY = 0;
			if (
				((player.getViewerSize().width <= 400))
			)
			{
				newConditionsTruePosition.push(0);
			}
			if (JSON.stringify(me._m3.ggConditionsTruePosition) != JSON.stringify(newConditionsTruePosition)) {
				me._m3.ggConditionsTruePosition = newConditionsTruePosition;
				me._m3.style.transition='right 0s, top 0s, color 0s';
				if (me._m3.ggConditionsTruePosition.includes(0)) {
					deltaX += -2.5;
					deltaY += 0;
				}
					me._m3.style.right=(35.5+deltaX) + '%';
					me._m3.style.top=(15+deltaY) + 'px';
			}
		}
		me._m3.logicBlock_position();
		me._m3.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((player._(me.ggUserdata.comment) == "\uc5f0\ub9bd\ud615B"))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me._m3.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me._m3.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me._m3.style.transition='right 0s, top 0s, color 0s';
				if (me._m3.ggCurrentLogicStateTextColor == 0) {
					me._m3.style.color="rgba(26,109,255,1)";
				}
				else {
					me._m3.style.color="rgba(33,33,33,1)";
				}
			}
		}
		me._m3.logicBlock_textcolor();
		me._m3.ggUpdatePosition=function (useTransition) {
		}
		me._m_3.appendChild(me._m3);
		me._container_9.appendChild(me._m_3);
		el=me._m_2=document.createElement('div');
		els=me._m_2__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="m\ud0c0\uc785 2";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='border-color : rgba(255,255,255,0.784314) rgba(255,255,255,0.784314) rgba(77,77,77,0.392157) rgba(255,255,255,0.784314);';
		hs+='border-style : solid;';
		hs+='border-width : 0px 0px 1px 0px;';
		hs+='color : rgba(33,33,33,1);';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 50px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 16px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 4px 0px 4px 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._m_2.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc5f0\ub9bd\ud615A 141m", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._m_2.ggUpdateText();
		el.appendChild(els);
		me._m_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._m_2.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['m_2'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._m_2.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._m_2.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._m_2.style.transition='background-color 0s, color 0s';
				if (me._m_2.ggCurrentLogicStateBackgroundColor == 0) {
					me._m_2.style.backgroundColor="rgba(77,77,77,1)";
				}
				else {
					me._m_2.style.backgroundColor="rgba(255,255,255,0)";
				}
			}
		}
		me._m_2.logicBlock_backgroundcolor();
		me._m_2.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((player._(me.ggUserdata.comment) == "\uc5f0\ub9bd\ud615A"))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me._m_2.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me._m_2.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me._m_2.style.transition='background-color 0s, color 0s';
				if (me._m_2.ggCurrentLogicStateTextColor == 0) {
					me._m_2.style.color="rgba(26,109,255,1)";
				}
				else {
					me._m_2.style.color="rgba(33,33,33,1)";
				}
			}
		}
		me._m_2.logicBlock_textcolor();
		me._m_2.onclick=function (e) {
			player.openUrl("","_self");
		}
		me._m_2.onmouseover=function (e) {
			me.elementMouseOver['m_2']=true;
			me._m_2.logicBlock_backgroundcolor();
		}
		me._m_2.onmouseout=function (e) {
			if (e && e.toElement) {
				var current = e.toElement;
				while (current = current.parentNode) {
				if (current == me._m_2__text)
					return;
				}
			}
			me.elementMouseOver['m_2']=false;
			me._m_2.logicBlock_backgroundcolor();
		}
		me._m_2.ggCurrentLogicStateBackgroundColor = -1;
		me._m_2.ggCurrentLogicStateTextColor = -1;
		me._m_2.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['m_2']) {
				me.elementMouseOver['m_2']=true;
			}
		}
		me._m_2.ggUpdatePosition=function (useTransition) {
		}
		el=me._m2=document.createElement('div');
		els=me._m2__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="m\uc81c\uacf12";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(33,33,33,1);';
		hs+='cursor : default;';
		hs+='height : 20px;';
		hs+='position : absolute;';
		hs+='right : 35.5%;';
		hs+='top : 15px;';
		hs+='visibility : inherit;';
		hs+='width : 10px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 10px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._m2.ggUpdateText=function() {
			var params = [];
			var hs = player._("2\n", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._m2.ggUpdateText();
		el.appendChild(els);
		me._m2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._m2.logicBlock_position = function() {
			var newConditionsTruePosition = [];
			var deltaX = 0;
			var deltaY = 0;
			if (
				((player.getViewerSize().width <= 400))
			)
			{
				newConditionsTruePosition.push(0);
			}
			if (JSON.stringify(me._m2.ggConditionsTruePosition) != JSON.stringify(newConditionsTruePosition)) {
				me._m2.ggConditionsTruePosition = newConditionsTruePosition;
				me._m2.style.transition='right 0s, top 0s, color 0s';
				if (me._m2.ggConditionsTruePosition.includes(0)) {
					deltaX += -2.5;
					deltaY += 0;
				}
					me._m2.style.right=(35.5+deltaX) + '%';
					me._m2.style.top=(15+deltaY) + 'px';
			}
		}
		me._m2.logicBlock_position();
		me._m2.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((player._(me.ggUserdata.comment) == "\uc5f0\ub9bd\ud615A"))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me._m2.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me._m2.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me._m2.style.transition='right 0s, top 0s, color 0s';
				if (me._m2.ggCurrentLogicStateTextColor == 0) {
					me._m2.style.color="rgba(26,109,255,1)";
				}
				else {
					me._m2.style.color="rgba(33,33,33,1)";
				}
			}
		}
		me._m2.logicBlock_textcolor();
		me._m2.ggUpdatePosition=function (useTransition) {
		}
		me._m_2.appendChild(me._m2);
		me._container_9.appendChild(me._m_2);
		el=me._m_1=document.createElement('div');
		els=me._m_1__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="m\ud0c0\uc785 1";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='border-color : rgba(255,255,255,0.784314) rgba(255,255,255,0.784314) rgba(77,77,77,0.392157) rgba(255,255,255,0.784314);';
		hs+='border-style : solid;';
		hs+='border-width : 0px 0px 1px 0px;';
		hs+='color : rgba(33,33,33,1);';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 16px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 4px 0px 4px 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._m_1.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ub2e8\ub3c5\ud615 135m", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._m_1.ggUpdateText();
		el.appendChild(els);
		me._m_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._m_1.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['m_1'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._m_1.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._m_1.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._m_1.style.transition='background-color 0s, color 0s';
				if (me._m_1.ggCurrentLogicStateBackgroundColor == 0) {
					me._m_1.style.backgroundColor="rgba(77,77,77,1)";
				}
				else {
					me._m_1.style.backgroundColor="rgba(255,255,255,0)";
				}
			}
		}
		me._m_1.logicBlock_backgroundcolor();
		me._m_1.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((player._(me.ggUserdata.comment) == "\ub2e8\ub3c5\ud615"))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me._m_1.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me._m_1.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me._m_1.style.transition='background-color 0s, color 0s';
				if (me._m_1.ggCurrentLogicStateTextColor == 0) {
					me._m_1.style.color="rgba(26,109,255,1)";
				}
				else {
					me._m_1.style.color="rgba(33,33,33,1)";
				}
			}
		}
		me._m_1.logicBlock_textcolor();
		me._m_1.onclick=function (e) {
			player.openUrl("https:\/\/web-townhouse1-4fju66f2clmy8hj45.sel5.cloudtype.app\/","_self");
		}
		me._m_1.onmouseover=function (e) {
			me.elementMouseOver['m_1']=true;
			me._m_1.logicBlock_backgroundcolor();
		}
		me._m_1.onmouseout=function (e) {
			if (e && e.toElement) {
				var current = e.toElement;
				while (current = current.parentNode) {
				if (current == me._m_1__text)
					return;
				}
			}
			me.elementMouseOver['m_1']=false;
			me._m_1.logicBlock_backgroundcolor();
		}
		me._m_1.ggCurrentLogicStateBackgroundColor = -1;
		me._m_1.ggCurrentLogicStateTextColor = -1;
		me._m_1.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['m_1']) {
				me.elementMouseOver['m_1']=true;
			}
		}
		me._m_1.ggUpdatePosition=function (useTransition) {
		}
		el=me._m1=document.createElement('div');
		els=me._m1__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="m\uc81c\uacf11";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(33,33,33,1);';
		hs+='cursor : default;';
		hs+='height : 20px;';
		hs+='position : absolute;';
		hs+='right : 37%;';
		hs+='top : 15px;';
		hs+='visibility : inherit;';
		hs+='width : 10px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 10px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._m1.ggUpdateText=function() {
			var params = [];
			var hs = player._("2\n", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._m1.ggUpdateText();
		el.appendChild(els);
		me._m1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._m1.logicBlock_position = function() {
			var newConditionsTruePosition = [];
			var deltaX = 0;
			var deltaY = 0;
			if (
				((player.getViewerSize().width <= 400))
			)
			{
				newConditionsTruePosition.push(0);
			}
			if (JSON.stringify(me._m1.ggConditionsTruePosition) != JSON.stringify(newConditionsTruePosition)) {
				me._m1.ggConditionsTruePosition = newConditionsTruePosition;
				me._m1.style.transition='right 0s, top 0s, color 0s';
				if (me._m1.ggConditionsTruePosition.includes(0)) {
					deltaX += -2.5;
					deltaY += 0;
				}
					me._m1.style.right=(37+deltaX) + '%';
					me._m1.style.top=(15+deltaY) + 'px';
			}
		}
		me._m1.logicBlock_position();
		me._m1.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((player._(me.ggUserdata.comment) == "\ub2e8\ub3c5\ud615"))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me._m1.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me._m1.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me._m1.style.transition='right 0s, top 0s, color 0s';
				if (me._m1.ggCurrentLogicStateTextColor == 0) {
					me._m1.style.color="rgba(26,109,255,1)";
				}
				else {
					me._m1.style.color="rgba(33,33,33,1)";
				}
			}
		}
		me._m1.logicBlock_textcolor();
		me._m1.ggUpdatePosition=function (useTransition) {
		}
		me._m_1.appendChild(me._m1);
		me._container_9.appendChild(me._m_1);
		me.__4.appendChild(me._container_9);
		me.__3.appendChild(me.__4);
		me.divSkin.appendChild(me.__3);
		el=me.__0=document.createElement('div');
		el.ggId="\ub85c\uace0\uc790\ub9ac";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 32px;';
		hs+='left : 30px;';
		hs+='position : absolute;';
		hs+='top : 10px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__0.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__0.logicBlock_visible = function() {
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
			if (me.__0.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__0.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__0.style.transition='';
				if (me.__0.ggCurrentLogicStateVisible == 0) {
					me.__0.style.visibility="hidden";
					me.__0.ggVisible=false;
				}
				else {
					me.__0.style.visibility=(Number(me.__0.style.opacity)>0||!me.__0.style.opacity)?'inherit':'hidden';
					me.__0.ggVisible=true;
				}
			}
		}
		me.__0.logicBlock_visible();
		me.__0.ggUpdatePosition=function (useTransition) {
		}
		el=me.__2=document.createElement('div');
		els=me.__2__img=document.createElement('img');
		els.className='ggskin ggskin__2';
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
		el.ggId="\ub85c\uace0";
		el.ggDx=5;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 48px;';
		hs+='left : calc(50% - ((150px + 0px) / 2) + 5px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((48px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 150px;';
		hs+='pointer-events:auto;';
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
		me.__2.logicBlock_visible = function() {
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
			if (me.__2.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__2.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__2.style.transition='';
				if (me.__2.ggCurrentLogicStateVisible == 0) {
					me.__2.style.visibility="hidden";
					me.__2.ggVisible=false;
				}
				else if (me.__2.ggCurrentLogicStateVisible == 1) {
					me.__2.style.visibility="hidden";
					me.__2.ggVisible=false;
				}
				else {
					me.__2.style.visibility=(Number(me.__2.style.opacity)>0||!me.__2.style.opacity)?'inherit':'hidden';
					me.__2.ggVisible=true;
				}
			}
		}
		me.__2.logicBlock_visible();
		me.__2.ggUpdatePosition=function (useTransition) {
		}
		me.__0.appendChild(me.__2);
		el=me.__1=document.createElement('div');
		els=me.__1__img=document.createElement('img');
		els.className='ggskin ggskin__1';
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
		el.ggId="\ubaa8\ubc14\uc77c\ub85c\uace0";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 50px;';
		hs+='left : -30px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 123px;';
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
		me.__1.logicBlock_visible = function() {
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
			if (me.__1.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__1.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__1.style.transition='';
				if (me.__1.ggCurrentLogicStateVisible == 0) {
					me.__1.style.visibility=(Number(me.__1.style.opacity)>0||!me.__1.style.opacity)?'inherit':'hidden';
					me.__1.ggVisible=true;
				}
				else if (me.__1.ggCurrentLogicStateVisible == 1) {
					me.__1.style.visibility=(Number(me.__1.style.opacity)>0||!me.__1.style.opacity)?'inherit':'hidden';
					me.__1.ggVisible=true;
				}
				else {
					me.__1.style.visibility="hidden";
					me.__1.ggVisible=false;
				}
			}
		}
		me.__1.logicBlock_visible();
		me.__1.ggUpdatePosition=function (useTransition) {
		}
		me.__0.appendChild(me.__1);
		me.divSkin.appendChild(me.__0);
		el=me.__=document.createElement('div');
		el.ggId="\uc548\ub0b4\uba58\ud2b8";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 20%;';
		hs+='height : 50%;';
		hs+='position : absolute;';
		hs+='right : 4.69%;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		hs+='text-shawdow:2px 2px 2px rgba(0,0,0,0.5);';
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
				((player.getIsMobile() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__.style.transition='right 0s, bottom 0s, width 0s, height 0s';
				if (me.__.ggCurrentLogicStatePosition == 0) {
					me.__.style.right='3%';
					me.__.style.bottom='25%';
				}
				else {
					me.__.style.right='4.69%';
					me.__.style.bottom='20%';
				}
			}
		}
		me.__.logicBlock_position();
		me.__.logicBlock_size = function() {
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
			if (me.__.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__.ggCurrentLogicStateSize = newLogicStateSize;
				me.__.style.transition='right 0s, bottom 0s, width 0s, height 0s';
				if (me.__.ggCurrentLogicStateSize == 0) {
					me.__.style.width='95%';
					me.__.style.height='100%';
					skin.updateSize(me.__);
				}
				else if (me.__.ggCurrentLogicStateSize == 1) {
					me.__.style.width='95%';
					me.__.style.height='100%';
					skin.updateSize(me.__);
				}
				else {
					me.__.style.width='100%';
					me.__.style.height='50%';
					skin.updateSize(me.__);
				}
			}
		}
		me.__.logicBlock_size();
		me.__.ggUpdatePosition=function (useTransition) {
		}
		el=me.__6=document.createElement('div');
		els=me.__6__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc548\ub0b4\uba58\ud2b86";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='bottom : -19%;';
		hs+='color : rgba(253,253,253,0.901961);';
		hs+='height : auto;';
		hs+='position : absolute;';
		hs+='right : 0%;';
		hs+='visibility : hidden;';
		hs+='width : calc(100% + 2px);';
		hs+='pointer-events:auto;';
		hs+='font-size:0.9em;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='background : rgba(255,255,255,0);';
		hs+='border : 1px solid rgba(0,0,0,0);';
		hs+='cursor : default;';
		hs+='font-size: 10px;';
		hs+='font-weight: inherit;';
		hs+='text-align: right;';
		hs+='white-space: pre-line;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__6.ggUpdateText=function() {
			var params = [];
			var hs = player._("* \ubcf8 \ucee8\ud150\uce20\ub294 PC \uc0ac\uc6a9\uc744 \uad8c\uc7a5\ud569\ub2c8\ub2e4.\n* \ubcf8 \ucf58\ud150\uce20\ub294 \uc18c\ube44\uc790\uc758 \uc774\ud574\ub97c \ub3d5\uae30 \uc704\ud574 \uac00\uc0c1\uc73c\ub85c \uad6c\ud604\ub41c \uc138\ub300 VR\uc774\uba70, \n\ucf58\ud150\uce20 \ud2b9\uc131\uc0c1 \uc65c\uace1\ub41c \uc774\ubbf8\uc9c0\ub85c \uc778\ud574 \uc2e4\uc81c\uc640 \ub2ec\ub77c \ubcf4\uc77c \uc218 \uc788\uc2b5\ub2c8\ub2e4.", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__6.ggUpdateText();
		el.appendChild(els);
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
		me.__6.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getViewerSize().width <= 460))
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
			if (me.__6.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__6.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__6.style.transition='right 0s, bottom 0s, width 0s, height 0s';
				if (me.__6.ggCurrentLogicStatePosition == 0) {
					me.__6.style.right='0%';
					me.__6.style.bottom='-23%';
				}
				else if (me.__6.ggCurrentLogicStatePosition == 1) {
					me.__6.style.right='0%';
					me.__6.style.bottom='-23%';
				}
				else {
					me.__6.style.right='0%';
					me.__6.style.bottom='-19%';
				}
			}
		}
		me.__6.logicBlock_position();
		me.__6.logicBlock_size = function() {
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
			if (me.__6.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__6.ggCurrentLogicStateSize = newLogicStateSize;
				me.__6__text.style.transition='right 0s, bottom 0s, width 0s, height 0s';
				if (me.__6.ggCurrentLogicStateSize == 0) {
					me.__6__text.style.width='100%';
					me.__6__text.style.height='25%';
					skin.updateSize(me.__6);
				}
				else {
					me.__6__text.style.width='calc(100% + 2px)';
					me.__6__text.style.height='auto';
					skin.updateSize(me.__6);
				}
			}
		}
		me.__6.logicBlock_size();
		me.__6.logicBlock_visible = function() {
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
			if (me.__6.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__6.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__6.style.transition='right 0s, bottom 0s, width 0s, height 0s';
				if (me.__6.ggCurrentLogicStateVisible == 0) {
					me.__6.style.visibility=(Number(me.__6.style.opacity)>0||!me.__6.style.opacity)?'inherit':'hidden';
					me.__6.ggVisible=true;
				}
				else if (me.__6.ggCurrentLogicStateVisible == 1) {
					me.__6.style.visibility=(Number(me.__6.style.opacity)>0||!me.__6.style.opacity)?'inherit':'hidden';
					me.__6.ggVisible=true;
				}
				else {
					me.__6.style.visibility="hidden";
					me.__6.ggVisible=false;
				}
			}
		}
		me.__6.logicBlock_visible();
		me.__6.ggUpdatePosition=function (useTransition) {
		}
		me.__.appendChild(me.__6);
		el=me.__pc=document.createElement('div');
		els=me.__pc__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc548\ub0b4\uba58\ud2b8 - pc";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='bottom : -18%;';
		hs+='color : rgba(255,255,255,0.901961);';
		hs+='height : auto;';
		hs+='position : absolute;';
		hs+='right : 0%;';
		hs+='visibility : inherit;';
		hs+='width : calc(100% + 2px);';
		hs+='pointer-events:auto;';
		hs+='font-size:0.9em;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='background : rgba(255,255,255,0);';
		hs+='border : 1px solid rgba(0,0,0,0);';
		hs+='cursor : default;';
		hs+='font-size: 14px;';
		hs+='font-weight: inherit;';
		hs+='text-align: right;';
		hs+='white-space: pre-line;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__pc.ggUpdateText=function() {
			var params = [];
			var hs = player._("* \ubcf8 \ucee8\ud150\uce20\ub294 PC \uc0ac\uc6a9\uc744 \uad8c\uc7a5\ud569\ub2c8\ub2e4.\n* \ubcf8 \ucf58\ud150\uce20\ub294 \uc18c\ube44\uc790\uc758 \uc774\ud574\ub97c \ub3d5\uae30 \uc704\ud574 \uac00\uc0c1\uc73c\ub85c \uad6c\ud604\ub41c \uc138\ub300 VR\uc774\uba70, \n\ucf58\ud150\uce20 \ud2b9\uc131\uc0c1 \uc65c\uace1\ub41c \uc774\ubbf8\uc9c0\ub85c \uc778\ud574 \uc2e4\uc81c\uc640 \ub2ec\ub77c \ubcf4\uc77c \uc218 \uc788\uc2b5\ub2c8\ub2e4.", params);
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
				me.__pc.style.transition='right 0s, bottom 0s, width 0s, height 0s';
				if (me.__pc.ggCurrentLogicStatePosition == 0) {
					me.__pc.style.right='0%';
					me.__pc.style.bottom='-30%';
				}
				else {
					me.__pc.style.right='0%';
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
				me.__pc__text.style.transition='right 0s, bottom 0s, width 0s, height 0s';
				if (me.__pc.ggCurrentLogicStateSize == 0) {
					me.__pc__text.style.width='100%';
					me.__pc__text.style.height='25%';
					skin.updateSize(me.__pc);
				}
				else {
					me.__pc__text.style.width='calc(100% + 2px)';
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
				me.__pc.style.transition='right 0s, bottom 0s, width 0s, height 0s';
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
		me.__pc.ggUpdatePosition=function (useTransition) {
		}
		me.__.appendChild(me.__pc);
		me.divSkin.appendChild(me.__);
		me.__94.logicBlock_visible();
		me.__224.logicBlock_backgroundcolor();
		me._image_2.logicBlock_alpha();
		me.__314.logicBlock_backgroundcolor();
		me._image_3.logicBlock_alpha();
		me._image_31.logicBlock_alpha();
		me.__413.logicBlock_backgroundcolor();
		me._image_4.logicBlock_alpha();
		me.__125.logicBlock_backgroundcolor();
		me._image_1.logicBlock_alpha();
		me.__90.logicBlock_position();
		me.__90.logicBlock_visible();
		me.__119.logicBlock_backgroundcolor();
		me.__220.logicBlock_backgroundcolor();
		me.__73.logicBlock_visible();
		me.__75.logicBlock_visible();
		me._dpc.logicBlock_visible();
		me._image_18.logicBlock_visible();
		var clonedNormalElement = new SkinElement_map_pin_Class(this,me.__85);
		me.__85__normal = clonedNormalElement._map_pin;
		me.__85__normalInst = clonedNormalElement;
		me.__85__normal.style.visibility='inherit';
		me.__85__normal.style.left='-12px';
		me.__85__normal.style.top='-41px';
		me.__85.ggMarkerNormal=me.__85__normal;
		me.__85.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_map_pin_Class(this,me.__85);
		me.__85__active = clonedActiveElement._map_pin;
		me.__85__activeInst = clonedActiveElement;
		me.__85__active.style.visibility='hidden';
		me.__85__active.style.left='-12px';
		me.__85__active.style.top='-41px';
		me.__85.ggMarkerActive=me.__85__active;
		me.__85.ggMarkerInstances.push(clonedActiveElement);
		if (me.__85.firstChild) {
			me.__85.insertBefore(me.__85__active,me.__85.firstChild);
		} else {
			me.__85.appendChild(me.__85__active);
		}
		if (me.__85.firstChild) {
			me.__85.insertBefore(me.__85__normal,me.__85.firstChild);
		} else {
			me.__85.appendChild(me.__85__normal);
		}
		for (var i = 0; i < me.__85.childNodes.length; i++) {
			me.__85.ggMarkerInstances.push(me.__85.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement_map_pin_Class(this,me.__84);
		me.__84__normal = clonedNormalElement._map_pin;
		me.__84__normalInst = clonedNormalElement;
		me.__84__normal.style.visibility='inherit';
		me.__84__normal.style.left='-12px';
		me.__84__normal.style.top='-41px';
		me.__84.ggMarkerNormal=me.__84__normal;
		me.__84.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_map_pin_Class(this,me.__84);
		me.__84__active = clonedActiveElement._map_pin;
		me.__84__activeInst = clonedActiveElement;
		me.__84__active.style.visibility='hidden';
		me.__84__active.style.left='-12px';
		me.__84__active.style.top='-41px';
		me.__84.ggMarkerActive=me.__84__active;
		me.__84.ggMarkerInstances.push(clonedActiveElement);
		if (me.__84.firstChild) {
			me.__84.insertBefore(me.__84__active,me.__84.firstChild);
		} else {
			me.__84.appendChild(me.__84__active);
		}
		if (me.__84.firstChild) {
			me.__84.insertBefore(me.__84__normal,me.__84.firstChild);
		} else {
			me.__84.appendChild(me.__84__normal);
		}
		for (var i = 0; i < me.__84.childNodes.length; i++) {
			me.__84.ggMarkerInstances.push(me.__84.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement_map_pin_Class(this,me.__83);
		me.__83__normal = clonedNormalElement._map_pin;
		me.__83__normalInst = clonedNormalElement;
		me.__83__normal.style.visibility='inherit';
		me.__83__normal.style.left='-12px';
		me.__83__normal.style.top='-41px';
		me.__83.ggMarkerNormal=me.__83__normal;
		me.__83.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_map_pin_Class(this,me.__83);
		me.__83__active = clonedActiveElement._map_pin;
		me.__83__activeInst = clonedActiveElement;
		me.__83__active.style.visibility='hidden';
		me.__83__active.style.left='-12px';
		me.__83__active.style.top='-41px';
		me.__83.ggMarkerActive=me.__83__active;
		me.__83.ggMarkerInstances.push(clonedActiveElement);
		if (me.__83.firstChild) {
			me.__83.insertBefore(me.__83__active,me.__83.firstChild);
		} else {
			me.__83.appendChild(me.__83__active);
		}
		if (me.__83.firstChild) {
			me.__83.insertBefore(me.__83__normal,me.__83.firstChild);
		} else {
			me.__83.appendChild(me.__83__normal);
		}
		for (var i = 0; i < me.__83.childNodes.length; i++) {
			me.__83.ggMarkerInstances.push(me.__83.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement_map_pin_Class(this,me.__82);
		me.__82__normal = clonedNormalElement._map_pin;
		me.__82__normalInst = clonedNormalElement;
		me.__82__normal.style.visibility='inherit';
		me.__82__normal.style.left='-12px';
		me.__82__normal.style.top='-41px';
		me.__82.ggMarkerNormal=me.__82__normal;
		me.__82.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_map_pin_Class(this,me.__82);
		me.__82__active = clonedActiveElement._map_pin;
		me.__82__activeInst = clonedActiveElement;
		me.__82__active.style.visibility='hidden';
		me.__82__active.style.left='-12px';
		me.__82__active.style.top='-41px';
		me.__82.ggMarkerActive=me.__82__active;
		me.__82.ggMarkerInstances.push(clonedActiveElement);
		if (me.__82.firstChild) {
			me.__82.insertBefore(me.__82__active,me.__82.firstChild);
		} else {
			me.__82.appendChild(me.__82__active);
		}
		if (me.__82.firstChild) {
			me.__82.insertBefore(me.__82__normal,me.__82.firstChild);
		} else {
			me.__82.appendChild(me.__82__normal);
		}
		for (var i = 0; i < me.__82.childNodes.length; i++) {
			me.__82.ggMarkerInstances.push(me.__82.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement_map_pin_Class(this,me.__81);
		me.__81__normal = clonedNormalElement._map_pin;
		me.__81__normalInst = clonedNormalElement;
		me.__81__normal.style.visibility='inherit';
		me.__81__normal.style.left='-12px';
		me.__81__normal.style.top='-41px';
		me.__81.ggMarkerNormal=me.__81__normal;
		me.__81.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_map_pin_Class(this,me.__81);
		me.__81__active = clonedActiveElement._map_pin;
		me.__81__activeInst = clonedActiveElement;
		me.__81__active.style.visibility='hidden';
		me.__81__active.style.left='-12px';
		me.__81__active.style.top='-41px';
		me.__81.ggMarkerActive=me.__81__active;
		me.__81.ggMarkerInstances.push(clonedActiveElement);
		if (me.__81.firstChild) {
			me.__81.insertBefore(me.__81__active,me.__81.firstChild);
		} else {
			me.__81.appendChild(me.__81__active);
		}
		if (me.__81.firstChild) {
			me.__81.insertBefore(me.__81__normal,me.__81.firstChild);
		} else {
			me.__81.appendChild(me.__81__normal);
		}
		for (var i = 0; i < me.__81.childNodes.length; i++) {
			me.__81.ggMarkerInstances.push(me.__81.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement_map_pin_Class(this,me.__80);
		me.__80__normal = clonedNormalElement._map_pin;
		me.__80__normalInst = clonedNormalElement;
		me.__80__normal.style.visibility='inherit';
		me.__80__normal.style.left='-12px';
		me.__80__normal.style.top='-41px';
		me.__80.ggMarkerNormal=me.__80__normal;
		me.__80.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_map_pin_Class(this,me.__80);
		me.__80__active = clonedActiveElement._map_pin;
		me.__80__activeInst = clonedActiveElement;
		me.__80__active.style.visibility='hidden';
		me.__80__active.style.left='-12px';
		me.__80__active.style.top='-41px';
		me.__80.ggMarkerActive=me.__80__active;
		me.__80.ggMarkerInstances.push(clonedActiveElement);
		if (me.__80.firstChild) {
			me.__80.insertBefore(me.__80__active,me.__80.firstChild);
		} else {
			me.__80.appendChild(me.__80__active);
		}
		if (me.__80.firstChild) {
			me.__80.insertBefore(me.__80__normal,me.__80.firstChild);
		} else {
			me.__80.appendChild(me.__80__normal);
		}
		for (var i = 0; i < me.__80.childNodes.length; i++) {
			me.__80.ggMarkerInstances.push(me.__80.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement_map_pin_Class(this,me.__79);
		me.__79__normal = clonedNormalElement._map_pin;
		me.__79__normalInst = clonedNormalElement;
		me.__79__normal.style.visibility='inherit';
		me.__79__normal.style.left='-12px';
		me.__79__normal.style.top='-41px';
		me.__79.ggMarkerNormal=me.__79__normal;
		me.__79.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_map_pin_Class(this,me.__79);
		me.__79__active = clonedActiveElement._map_pin;
		me.__79__activeInst = clonedActiveElement;
		me.__79__active.style.visibility='hidden';
		me.__79__active.style.left='-12px';
		me.__79__active.style.top='-41px';
		me.__79.ggMarkerActive=me.__79__active;
		me.__79.ggMarkerInstances.push(clonedActiveElement);
		if (me.__79.firstChild) {
			me.__79.insertBefore(me.__79__active,me.__79.firstChild);
		} else {
			me.__79.appendChild(me.__79__active);
		}
		if (me.__79.firstChild) {
			me.__79.insertBefore(me.__79__normal,me.__79.firstChild);
		} else {
			me.__79.appendChild(me.__79__normal);
		}
		for (var i = 0; i < me.__79.childNodes.length; i++) {
			me.__79.ggMarkerInstances.push(me.__79.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement_map_pin_Class(this,me.__118);
		me.__118__normal = clonedNormalElement._map_pin;
		me.__118__normalInst = clonedNormalElement;
		me.__118__normal.style.visibility='inherit';
		me.__118__normal.style.left='-12px';
		me.__118__normal.style.top='-41px';
		me.__118.ggMarkerNormal=me.__118__normal;
		me.__118.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_map_pin_Class(this,me.__118);
		me.__118__active = clonedActiveElement._map_pin;
		me.__118__activeInst = clonedActiveElement;
		me.__118__active.style.visibility='hidden';
		me.__118__active.style.left='-12px';
		me.__118__active.style.top='-41px';
		me.__118.ggMarkerActive=me.__118__active;
		me.__118.ggMarkerInstances.push(clonedActiveElement);
		if (me.__118.firstChild) {
			me.__118.insertBefore(me.__118__active,me.__118.firstChild);
		} else {
			me.__118.appendChild(me.__118__active);
		}
		if (me.__118.firstChild) {
			me.__118.insertBefore(me.__118__normal,me.__118.firstChild);
		} else {
			me.__118.appendChild(me.__118__normal);
		}
		for (var i = 0; i < me.__118.childNodes.length; i++) {
			me.__118.ggMarkerInstances.push(me.__118.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement_map_pin_Class(this,me.__78);
		me.__78__normal = clonedNormalElement._map_pin;
		me.__78__normalInst = clonedNormalElement;
		me.__78__normal.style.visibility='inherit';
		me.__78__normal.style.left='-12px';
		me.__78__normal.style.top='-41px';
		me.__78.ggMarkerNormal=me.__78__normal;
		me.__78.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_map_pin_Class(this,me.__78);
		me.__78__active = clonedActiveElement._map_pin;
		me.__78__activeInst = clonedActiveElement;
		me.__78__active.style.visibility='hidden';
		me.__78__active.style.left='-12px';
		me.__78__active.style.top='-41px';
		me.__78.ggMarkerActive=me.__78__active;
		me.__78.ggMarkerInstances.push(clonedActiveElement);
		if (me.__78.firstChild) {
			me.__78.insertBefore(me.__78__active,me.__78.firstChild);
		} else {
			me.__78.appendChild(me.__78__active);
		}
		if (me.__78.firstChild) {
			me.__78.insertBefore(me.__78__normal,me.__78.firstChild);
		} else {
			me.__78.appendChild(me.__78__normal);
		}
		for (var i = 0; i < me.__78.childNodes.length; i++) {
			me.__78.ggMarkerInstances.push(me.__78.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement_map_pin_Class(this,me.__117);
		me.__117__normal = clonedNormalElement._map_pin;
		me.__117__normalInst = clonedNormalElement;
		me.__117__normal.style.visibility='inherit';
		me.__117__normal.style.left='-12px';
		me.__117__normal.style.top='-41px';
		me.__117.ggMarkerNormal=me.__117__normal;
		me.__117.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_map_pin_Class(this,me.__117);
		me.__117__active = clonedActiveElement._map_pin;
		me.__117__activeInst = clonedActiveElement;
		me.__117__active.style.visibility='hidden';
		me.__117__active.style.left='-12px';
		me.__117__active.style.top='-41px';
		me.__117.ggMarkerActive=me.__117__active;
		me.__117.ggMarkerInstances.push(clonedActiveElement);
		if (me.__117.firstChild) {
			me.__117.insertBefore(me.__117__active,me.__117.firstChild);
		} else {
			me.__117.appendChild(me.__117__active);
		}
		if (me.__117.firstChild) {
			me.__117.insertBefore(me.__117__normal,me.__117.firstChild);
		} else {
			me.__117.appendChild(me.__117__normal);
		}
		for (var i = 0; i < me.__117.childNodes.length; i++) {
			me.__117.ggMarkerInstances.push(me.__117.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement_map_pin_Class(this,me.__77);
		me.__77__normal = clonedNormalElement._map_pin;
		me.__77__normalInst = clonedNormalElement;
		me.__77__normal.style.visibility='inherit';
		me.__77__normal.style.left='-12px';
		me.__77__normal.style.top='-41px';
		me.__77.ggMarkerNormal=me.__77__normal;
		me.__77.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_map_pin_Class(this,me.__77);
		me.__77__active = clonedActiveElement._map_pin;
		me.__77__activeInst = clonedActiveElement;
		me.__77__active.style.visibility='hidden';
		me.__77__active.style.left='-12px';
		me.__77__active.style.top='-41px';
		me.__77.ggMarkerActive=me.__77__active;
		me.__77.ggMarkerInstances.push(clonedActiveElement);
		if (me.__77.firstChild) {
			me.__77.insertBefore(me.__77__active,me.__77.firstChild);
		} else {
			me.__77.appendChild(me.__77__active);
		}
		if (me.__77.firstChild) {
			me.__77.insertBefore(me.__77__normal,me.__77.firstChild);
		} else {
			me.__77.appendChild(me.__77__normal);
		}
		for (var i = 0; i < me.__77.childNodes.length; i++) {
			me.__77.ggMarkerInstances.push(me.__77.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement_map_pin_Class(this,me.__76);
		me.__76__normal = clonedNormalElement._map_pin;
		me.__76__normalInst = clonedNormalElement;
		me.__76__normal.style.visibility='inherit';
		me.__76__normal.style.left='-12px';
		me.__76__normal.style.top='-41px';
		me.__76.ggMarkerNormal=me.__76__normal;
		me.__76.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_map_pin_Class(this,me.__76);
		me.__76__active = clonedActiveElement._map_pin;
		me.__76__activeInst = clonedActiveElement;
		me.__76__active.style.visibility='hidden';
		me.__76__active.style.left='-12px';
		me.__76__active.style.top='-41px';
		me.__76.ggMarkerActive=me.__76__active;
		me.__76.ggMarkerInstances.push(clonedActiveElement);
		if (me.__76.firstChild) {
			me.__76.insertBefore(me.__76__active,me.__76.firstChild);
		} else {
			me.__76.appendChild(me.__76__active);
		}
		if (me.__76.firstChild) {
			me.__76.insertBefore(me.__76__normal,me.__76.firstChild);
		} else {
			me.__76.appendChild(me.__76__normal);
		}
		for (var i = 0; i < me.__76.childNodes.length; i++) {
			me.__76.ggMarkerInstances.push(me.__76.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement_map_pin_Class(this,me.__116);
		me.__116__normal = clonedNormalElement._map_pin;
		me.__116__normalInst = clonedNormalElement;
		me.__116__normal.style.visibility='inherit';
		me.__116__normal.style.left='-12px';
		me.__116__normal.style.top='-41px';
		me.__116.ggMarkerNormal=me.__116__normal;
		me.__116.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_map_pin_Class(this,me.__116);
		me.__116__active = clonedActiveElement._map_pin;
		me.__116__activeInst = clonedActiveElement;
		me.__116__active.style.visibility='hidden';
		me.__116__active.style.left='-12px';
		me.__116__active.style.top='-41px';
		me.__116.ggMarkerActive=me.__116__active;
		me.__116.ggMarkerInstances.push(clonedActiveElement);
		if (me.__116.firstChild) {
			me.__116.insertBefore(me.__116__active,me.__116.firstChild);
		} else {
			me.__116.appendChild(me.__116__active);
		}
		if (me.__116.firstChild) {
			me.__116.insertBefore(me.__116__normal,me.__116.firstChild);
		} else {
			me.__116.appendChild(me.__116__normal);
		}
		for (var i = 0; i < me.__116.childNodes.length; i++) {
			me.__116.ggMarkerInstances.push(me.__116.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement_map_pin_Class(this,me.__121);
		me.__121__normal = clonedNormalElement._map_pin;
		me.__121__normalInst = clonedNormalElement;
		me.__121__normal.style.visibility='inherit';
		me.__121__normal.style.left='-12px';
		me.__121__normal.style.top='-41px';
		me.__121.ggMarkerNormal=me.__121__normal;
		me.__121.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_map_pin_Class(this,me.__121);
		me.__121__active = clonedActiveElement._map_pin;
		me.__121__activeInst = clonedActiveElement;
		me.__121__active.style.visibility='hidden';
		me.__121__active.style.left='-12px';
		me.__121__active.style.top='-41px';
		me.__121.ggMarkerActive=me.__121__active;
		me.__121.ggMarkerInstances.push(clonedActiveElement);
		if (me.__121.firstChild) {
			me.__121.insertBefore(me.__121__active,me.__121.firstChild);
		} else {
			me.__121.appendChild(me.__121__active);
		}
		if (me.__121.firstChild) {
			me.__121.insertBefore(me.__121__normal,me.__121.firstChild);
		} else {
			me.__121.appendChild(me.__121__normal);
		}
		for (var i = 0; i < me.__121.childNodes.length; i++) {
			me.__121.ggMarkerInstances.push(me.__121.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement_map_pin_Class(this,me.__120);
		me.__120__normal = clonedNormalElement._map_pin;
		me.__120__normalInst = clonedNormalElement;
		me.__120__normal.style.visibility='inherit';
		me.__120__normal.style.left='-12px';
		me.__120__normal.style.top='-41px';
		me.__120.ggMarkerNormal=me.__120__normal;
		me.__120.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_map_pin_Class(this,me.__120);
		me.__120__active = clonedActiveElement._map_pin;
		me.__120__activeInst = clonedActiveElement;
		me.__120__active.style.visibility='hidden';
		me.__120__active.style.left='-12px';
		me.__120__active.style.top='-41px';
		me.__120.ggMarkerActive=me.__120__active;
		me.__120.ggMarkerInstances.push(clonedActiveElement);
		if (me.__120.firstChild) {
			me.__120.insertBefore(me.__120__active,me.__120.firstChild);
		} else {
			me.__120.appendChild(me.__120__active);
		}
		if (me.__120.firstChild) {
			me.__120.insertBefore(me.__120__normal,me.__120.firstChild);
		} else {
			me.__120.appendChild(me.__120__normal);
		}
		for (var i = 0; i < me.__120.childNodes.length; i++) {
			me.__120.ggMarkerInstances.push(me.__120.childNodes[i]);
		}
		me._image_12.logicBlock_visible();
		var clonedNormalElement = new SkinElement_map_pin_Class(this,me.__2_5);
		me.__2_5__normal = clonedNormalElement._map_pin;
		me.__2_5__normalInst = clonedNormalElement;
		me.__2_5__normal.style.visibility='inherit';
		me.__2_5__normal.style.left='-12px';
		me.__2_5__normal.style.top='-41px';
		me.__2_5.ggMarkerNormal=me.__2_5__normal;
		me.__2_5.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_map_pin_Class(this,me.__2_5);
		me.__2_5__active = clonedActiveElement._map_pin;
		me.__2_5__activeInst = clonedActiveElement;
		me.__2_5__active.style.visibility='hidden';
		me.__2_5__active.style.left='-12px';
		me.__2_5__active.style.top='-41px';
		me.__2_5.ggMarkerActive=me.__2_5__active;
		me.__2_5.ggMarkerInstances.push(clonedActiveElement);
		if (me.__2_5.firstChild) {
			me.__2_5.insertBefore(me.__2_5__active,me.__2_5.firstChild);
		} else {
			me.__2_5.appendChild(me.__2_5__active);
		}
		if (me.__2_5.firstChild) {
			me.__2_5.insertBefore(me.__2_5__normal,me.__2_5.firstChild);
		} else {
			me.__2_5.appendChild(me.__2_5__normal);
		}
		for (var i = 0; i < me.__2_5.childNodes.length; i++) {
			me.__2_5.ggMarkerInstances.push(me.__2_5.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement_map_pin_Class(this,me.__312);
		me.__312__normal = clonedNormalElement._map_pin;
		me.__312__normalInst = clonedNormalElement;
		me.__312__normal.style.visibility='inherit';
		me.__312__normal.style.left='-12px';
		me.__312__normal.style.top='-41px';
		me.__312.ggMarkerNormal=me.__312__normal;
		me.__312.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_map_pin_Class(this,me.__312);
		me.__312__active = clonedActiveElement._map_pin;
		me.__312__activeInst = clonedActiveElement;
		me.__312__active.style.visibility='hidden';
		me.__312__active.style.left='-12px';
		me.__312__active.style.top='-41px';
		me.__312.ggMarkerActive=me.__312__active;
		me.__312.ggMarkerInstances.push(clonedActiveElement);
		if (me.__312.firstChild) {
			me.__312.insertBefore(me.__312__active,me.__312.firstChild);
		} else {
			me.__312.appendChild(me.__312__active);
		}
		if (me.__312.firstChild) {
			me.__312.insertBefore(me.__312__normal,me.__312.firstChild);
		} else {
			me.__312.appendChild(me.__312__normal);
		}
		for (var i = 0; i < me.__312.childNodes.length; i++) {
			me.__312.ggMarkerInstances.push(me.__312.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement_map_pin_Class(this,me.__2_4);
		me.__2_4__normal = clonedNormalElement._map_pin;
		me.__2_4__normalInst = clonedNormalElement;
		me.__2_4__normal.style.visibility='inherit';
		me.__2_4__normal.style.left='-12px';
		me.__2_4__normal.style.top='-41px';
		me.__2_4.ggMarkerNormal=me.__2_4__normal;
		me.__2_4.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_map_pin_Class(this,me.__2_4);
		me.__2_4__active = clonedActiveElement._map_pin;
		me.__2_4__activeInst = clonedActiveElement;
		me.__2_4__active.style.visibility='hidden';
		me.__2_4__active.style.left='-12px';
		me.__2_4__active.style.top='-41px';
		me.__2_4.ggMarkerActive=me.__2_4__active;
		me.__2_4.ggMarkerInstances.push(clonedActiveElement);
		if (me.__2_4.firstChild) {
			me.__2_4.insertBefore(me.__2_4__active,me.__2_4.firstChild);
		} else {
			me.__2_4.appendChild(me.__2_4__active);
		}
		if (me.__2_4.firstChild) {
			me.__2_4.insertBefore(me.__2_4__normal,me.__2_4.firstChild);
		} else {
			me.__2_4.appendChild(me.__2_4__normal);
		}
		for (var i = 0; i < me.__2_4.childNodes.length; i++) {
			me.__2_4.ggMarkerInstances.push(me.__2_4.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement_map_pin_Class(this,me.__2_20);
		me.__2_20__normal = clonedNormalElement._map_pin;
		me.__2_20__normalInst = clonedNormalElement;
		me.__2_20__normal.style.visibility='inherit';
		me.__2_20__normal.style.left='-12px';
		me.__2_20__normal.style.top='-41px';
		me.__2_20.ggMarkerNormal=me.__2_20__normal;
		me.__2_20.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_map_pin_Class(this,me.__2_20);
		me.__2_20__active = clonedActiveElement._map_pin;
		me.__2_20__activeInst = clonedActiveElement;
		me.__2_20__active.style.visibility='hidden';
		me.__2_20__active.style.left='-12px';
		me.__2_20__active.style.top='-41px';
		me.__2_20.ggMarkerActive=me.__2_20__active;
		me.__2_20.ggMarkerInstances.push(clonedActiveElement);
		if (me.__2_20.firstChild) {
			me.__2_20.insertBefore(me.__2_20__active,me.__2_20.firstChild);
		} else {
			me.__2_20.appendChild(me.__2_20__active);
		}
		if (me.__2_20.firstChild) {
			me.__2_20.insertBefore(me.__2_20__normal,me.__2_20.firstChild);
		} else {
			me.__2_20.appendChild(me.__2_20__normal);
		}
		for (var i = 0; i < me.__2_20.childNodes.length; i++) {
			me.__2_20.ggMarkerInstances.push(me.__2_20.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement_map_pin_Class(this,me.__2_3);
		me.__2_3__normal = clonedNormalElement._map_pin;
		me.__2_3__normalInst = clonedNormalElement;
		me.__2_3__normal.style.visibility='inherit';
		me.__2_3__normal.style.left='-12px';
		me.__2_3__normal.style.top='-41px';
		me.__2_3.ggMarkerNormal=me.__2_3__normal;
		me.__2_3.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_map_pin_Class(this,me.__2_3);
		me.__2_3__active = clonedActiveElement._map_pin;
		me.__2_3__activeInst = clonedActiveElement;
		me.__2_3__active.style.visibility='hidden';
		me.__2_3__active.style.left='-12px';
		me.__2_3__active.style.top='-41px';
		me.__2_3.ggMarkerActive=me.__2_3__active;
		me.__2_3.ggMarkerInstances.push(clonedActiveElement);
		if (me.__2_3.firstChild) {
			me.__2_3.insertBefore(me.__2_3__active,me.__2_3.firstChild);
		} else {
			me.__2_3.appendChild(me.__2_3__active);
		}
		if (me.__2_3.firstChild) {
			me.__2_3.insertBefore(me.__2_3__normal,me.__2_3.firstChild);
		} else {
			me.__2_3.appendChild(me.__2_3__normal);
		}
		for (var i = 0; i < me.__2_3.childNodes.length; i++) {
			me.__2_3.ggMarkerInstances.push(me.__2_3.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement_map_pin_Class(this,me.__2_2);
		me.__2_2__normal = clonedNormalElement._map_pin;
		me.__2_2__normalInst = clonedNormalElement;
		me.__2_2__normal.style.visibility='inherit';
		me.__2_2__normal.style.left='-12px';
		me.__2_2__normal.style.top='-41px';
		me.__2_2.ggMarkerNormal=me.__2_2__normal;
		me.__2_2.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_map_pin_Class(this,me.__2_2);
		me.__2_2__active = clonedActiveElement._map_pin;
		me.__2_2__activeInst = clonedActiveElement;
		me.__2_2__active.style.visibility='hidden';
		me.__2_2__active.style.left='-12px';
		me.__2_2__active.style.top='-41px';
		me.__2_2.ggMarkerActive=me.__2_2__active;
		me.__2_2.ggMarkerInstances.push(clonedActiveElement);
		if (me.__2_2.firstChild) {
			me.__2_2.insertBefore(me.__2_2__active,me.__2_2.firstChild);
		} else {
			me.__2_2.appendChild(me.__2_2__active);
		}
		if (me.__2_2.firstChild) {
			me.__2_2.insertBefore(me.__2_2__normal,me.__2_2.firstChild);
		} else {
			me.__2_2.appendChild(me.__2_2__normal);
		}
		for (var i = 0; i < me.__2_2.childNodes.length; i++) {
			me.__2_2.ggMarkerInstances.push(me.__2_2.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement_map_pin_Class(this,me.__219);
		me.__219__normal = clonedNormalElement._map_pin;
		me.__219__normalInst = clonedNormalElement;
		me.__219__normal.style.visibility='inherit';
		me.__219__normal.style.left='-12px';
		me.__219__normal.style.top='-41px';
		me.__219.ggMarkerNormal=me.__219__normal;
		me.__219.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_map_pin_Class(this,me.__219);
		me.__219__active = clonedActiveElement._map_pin;
		me.__219__activeInst = clonedActiveElement;
		me.__219__active.style.visibility='hidden';
		me.__219__active.style.left='-12px';
		me.__219__active.style.top='-41px';
		me.__219.ggMarkerActive=me.__219__active;
		me.__219.ggMarkerInstances.push(clonedActiveElement);
		if (me.__219.firstChild) {
			me.__219.insertBefore(me.__219__active,me.__219.firstChild);
		} else {
			me.__219.appendChild(me.__219__active);
		}
		if (me.__219.firstChild) {
			me.__219.insertBefore(me.__219__normal,me.__219.firstChild);
		} else {
			me.__219.appendChild(me.__219__normal);
		}
		for (var i = 0; i < me.__219.childNodes.length; i++) {
			me.__219.ggMarkerInstances.push(me.__219.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement_map_pin_Class(this,me.__2_1);
		me.__2_1__normal = clonedNormalElement._map_pin;
		me.__2_1__normalInst = clonedNormalElement;
		me.__2_1__normal.style.visibility='inherit';
		me.__2_1__normal.style.left='-12px';
		me.__2_1__normal.style.top='-41px';
		me.__2_1.ggMarkerNormal=me.__2_1__normal;
		me.__2_1.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_map_pin_Class(this,me.__2_1);
		me.__2_1__active = clonedActiveElement._map_pin;
		me.__2_1__activeInst = clonedActiveElement;
		me.__2_1__active.style.visibility='hidden';
		me.__2_1__active.style.left='-12px';
		me.__2_1__active.style.top='-41px';
		me.__2_1.ggMarkerActive=me.__2_1__active;
		me.__2_1.ggMarkerInstances.push(clonedActiveElement);
		if (me.__2_1.firstChild) {
			me.__2_1.insertBefore(me.__2_1__active,me.__2_1.firstChild);
		} else {
			me.__2_1.appendChild(me.__2_1__active);
		}
		if (me.__2_1.firstChild) {
			me.__2_1.insertBefore(me.__2_1__normal,me.__2_1.firstChild);
		} else {
			me.__2_1.appendChild(me.__2_1__normal);
		}
		for (var i = 0; i < me.__2_1.childNodes.length; i++) {
			me.__2_1.ggMarkerInstances.push(me.__2_1.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement_map_pin_Class(this,me.__2_0);
		me.__2_0__normal = clonedNormalElement._map_pin;
		me.__2_0__normalInst = clonedNormalElement;
		me.__2_0__normal.style.visibility='inherit';
		me.__2_0__normal.style.left='-12px';
		me.__2_0__normal.style.top='-41px';
		me.__2_0.ggMarkerNormal=me.__2_0__normal;
		me.__2_0.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_map_pin_Class(this,me.__2_0);
		me.__2_0__active = clonedActiveElement._map_pin;
		me.__2_0__activeInst = clonedActiveElement;
		me.__2_0__active.style.visibility='hidden';
		me.__2_0__active.style.left='-12px';
		me.__2_0__active.style.top='-41px';
		me.__2_0.ggMarkerActive=me.__2_0__active;
		me.__2_0.ggMarkerInstances.push(clonedActiveElement);
		if (me.__2_0.firstChild) {
			me.__2_0.insertBefore(me.__2_0__active,me.__2_0.firstChild);
		} else {
			me.__2_0.appendChild(me.__2_0__active);
		}
		if (me.__2_0.firstChild) {
			me.__2_0.insertBefore(me.__2_0__normal,me.__2_0.firstChild);
		} else {
			me.__2_0.appendChild(me.__2_0__normal);
		}
		for (var i = 0; i < me.__2_0.childNodes.length; i++) {
			me.__2_0.ggMarkerInstances.push(me.__2_0.childNodes[i]);
		}
		me.__72.logicBlock_visible();
		me.__65.logicBlock_visible();
		me.__57.logicBlock_visible();
		me.__62.logicBlock_position();
		me.__114.logicBlock_backgroundcolor();
		me.__114.logicBlock_textcolor();
		me.__115.logicBlock_textcolor();
		me.__217.logicBlock_backgroundcolor();
		me.__217.logicBlock_textcolor();
		me.__218.logicBlock_textcolor();
		me.__310.logicBlock_backgroundcolor();
		me.__310.logicBlock_textcolor();
		me.__311.logicBlock_textcolor();
		me.__410.logicBlock_backgroundcolor();
		me.__410.logicBlock_textcolor();
		me.__411.logicBlock_textcolor();
		me.__59.logicBlock_backgroundcolor();
		me.__59.logicBlock_textcolor();
		me.__510.logicBlock_textcolor();
		me.__46.logicBlock_position();
		me.__54.logicBlock_visible();
		me.__1_0.logicBlock_visible();
		me.__216.logicBlock_visible();
		me.__113.logicBlock_position();
		me.__213.logicBlock_position();
		me.__112.logicBlock_backgroundcolor();
		me.__212.logicBlock_backgroundcolor();
		me.__39.logicBlock_visible();
		me.__45.logicBlock_visible();
		me._rectangle_4.logicBlock_visible();
		me._rectangle_5.logicBlock_backgroundcolor();
		me._image_17.logicBlock_position();
		me.__211.logicBlock_backgroundcolor();
		me.__110.logicBlock_position();
		me.__32.logicBlock_backgroundcolor();
		me.__33.logicBlock_position();
		me.__43.logicBlock_backgroundcolor();
		me.__44.logicBlock_position();
		me.__29.logicBlock_visible();
		me.__23.logicBlock_position();
		me.__23.logicBlock_visible();
		me.__24.logicBlock_visible();
		me.__19.logicBlock_visible();
		me.__22.logicBlock_visible();
		me._a.logicBlock_visible();
		me._d_1.logicBlock_visible();
		var clonedNormalElement = new SkinElement_map_pin_Class(this,me._a0);
		me._a0__normal = clonedNormalElement._map_pin;
		me._a0__normalInst = clonedNormalElement;
		me._a0__normal.style.visibility='inherit';
		me._a0__normal.style.left='-12px';
		me._a0__normal.style.top='-41px';
		me._a0.ggMarkerNormal=me._a0__normal;
		me._a0.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_map_pin_Class(this,me._a0);
		me._a0__active = clonedActiveElement._map_pin;
		me._a0__activeInst = clonedActiveElement;
		me._a0__active.style.visibility='hidden';
		me._a0__active.style.left='-12px';
		me._a0__active.style.top='-41px';
		me._a0.ggMarkerActive=me._a0__active;
		me._a0.ggMarkerInstances.push(clonedActiveElement);
		if (me._a0.firstChild) {
			me._a0.insertBefore(me._a0__active,me._a0.firstChild);
		} else {
			me._a0.appendChild(me._a0__active);
		}
		if (me._a0.firstChild) {
			me._a0.insertBefore(me._a0__normal,me._a0.firstChild);
		} else {
			me._a0.appendChild(me._a0__normal);
		}
		for (var i = 0; i < me._a0.childNodes.length; i++) {
			me._a0.ggMarkerInstances.push(me._a0.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement_map_pin_Class(this,me._a_10);
		me._a_10__normal = clonedNormalElement._map_pin;
		me._a_10__normalInst = clonedNormalElement;
		me._a_10__normal.style.visibility='inherit';
		me._a_10__normal.style.left='-12px';
		me._a_10__normal.style.top='-41px';
		me._a_10.ggMarkerNormal=me._a_10__normal;
		me._a_10.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_map_pin_Class(this,me._a_10);
		me._a_10__active = clonedActiveElement._map_pin;
		me._a_10__activeInst = clonedActiveElement;
		me._a_10__active.style.visibility='hidden';
		me._a_10__active.style.left='-12px';
		me._a_10__active.style.top='-41px';
		me._a_10.ggMarkerActive=me._a_10__active;
		me._a_10.ggMarkerInstances.push(clonedActiveElement);
		if (me._a_10.firstChild) {
			me._a_10.insertBefore(me._a_10__active,me._a_10.firstChild);
		} else {
			me._a_10.appendChild(me._a_10__active);
		}
		if (me._a_10.firstChild) {
			me._a_10.insertBefore(me._a_10__normal,me._a_10.firstChild);
		} else {
			me._a_10.appendChild(me._a_10__normal);
		}
		for (var i = 0; i < me._a_10.childNodes.length; i++) {
			me._a_10.ggMarkerInstances.push(me._a_10.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement_map_pin_Class(this,me._a_9);
		me._a_9__normal = clonedNormalElement._map_pin;
		me._a_9__normalInst = clonedNormalElement;
		me._a_9__normal.style.visibility='inherit';
		me._a_9__normal.style.left='-12px';
		me._a_9__normal.style.top='-41px';
		me._a_9.ggMarkerNormal=me._a_9__normal;
		me._a_9.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_map_pin_Class(this,me._a_9);
		me._a_9__active = clonedActiveElement._map_pin;
		me._a_9__activeInst = clonedActiveElement;
		me._a_9__active.style.visibility='hidden';
		me._a_9__active.style.left='-12px';
		me._a_9__active.style.top='-41px';
		me._a_9.ggMarkerActive=me._a_9__active;
		me._a_9.ggMarkerInstances.push(clonedActiveElement);
		if (me._a_9.firstChild) {
			me._a_9.insertBefore(me._a_9__active,me._a_9.firstChild);
		} else {
			me._a_9.appendChild(me._a_9__active);
		}
		if (me._a_9.firstChild) {
			me._a_9.insertBefore(me._a_9__normal,me._a_9.firstChild);
		} else {
			me._a_9.appendChild(me._a_9__normal);
		}
		for (var i = 0; i < me._a_9.childNodes.length; i++) {
			me._a_9.ggMarkerInstances.push(me._a_9.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement_map_pin_Class(this,me._a_8);
		me._a_8__normal = clonedNormalElement._map_pin;
		me._a_8__normalInst = clonedNormalElement;
		me._a_8__normal.style.visibility='inherit';
		me._a_8__normal.style.left='-12px';
		me._a_8__normal.style.top='-41px';
		me._a_8.ggMarkerNormal=me._a_8__normal;
		me._a_8.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_map_pin_Class(this,me._a_8);
		me._a_8__active = clonedActiveElement._map_pin;
		me._a_8__activeInst = clonedActiveElement;
		me._a_8__active.style.visibility='hidden';
		me._a_8__active.style.left='-12px';
		me._a_8__active.style.top='-41px';
		me._a_8.ggMarkerActive=me._a_8__active;
		me._a_8.ggMarkerInstances.push(clonedActiveElement);
		if (me._a_8.firstChild) {
			me._a_8.insertBefore(me._a_8__active,me._a_8.firstChild);
		} else {
			me._a_8.appendChild(me._a_8__active);
		}
		if (me._a_8.firstChild) {
			me._a_8.insertBefore(me._a_8__normal,me._a_8.firstChild);
		} else {
			me._a_8.appendChild(me._a_8__normal);
		}
		for (var i = 0; i < me._a_8.childNodes.length; i++) {
			me._a_8.ggMarkerInstances.push(me._a_8.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement_map_pin_Class(this,me._a_7);
		me._a_7__normal = clonedNormalElement._map_pin;
		me._a_7__normalInst = clonedNormalElement;
		me._a_7__normal.style.visibility='inherit';
		me._a_7__normal.style.left='-12px';
		me._a_7__normal.style.top='-41px';
		me._a_7.ggMarkerNormal=me._a_7__normal;
		me._a_7.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_map_pin_Class(this,me._a_7);
		me._a_7__active = clonedActiveElement._map_pin;
		me._a_7__activeInst = clonedActiveElement;
		me._a_7__active.style.visibility='hidden';
		me._a_7__active.style.left='-12px';
		me._a_7__active.style.top='-41px';
		me._a_7.ggMarkerActive=me._a_7__active;
		me._a_7.ggMarkerInstances.push(clonedActiveElement);
		if (me._a_7.firstChild) {
			me._a_7.insertBefore(me._a_7__active,me._a_7.firstChild);
		} else {
			me._a_7.appendChild(me._a_7__active);
		}
		if (me._a_7.firstChild) {
			me._a_7.insertBefore(me._a_7__normal,me._a_7.firstChild);
		} else {
			me._a_7.appendChild(me._a_7__normal);
		}
		for (var i = 0; i < me._a_7.childNodes.length; i++) {
			me._a_7.ggMarkerInstances.push(me._a_7.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement_map_pin_Class(this,me._a_6);
		me._a_6__normal = clonedNormalElement._map_pin;
		me._a_6__normalInst = clonedNormalElement;
		me._a_6__normal.style.visibility='inherit';
		me._a_6__normal.style.left='-12px';
		me._a_6__normal.style.top='-41px';
		me._a_6.ggMarkerNormal=me._a_6__normal;
		me._a_6.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_map_pin_Class(this,me._a_6);
		me._a_6__active = clonedActiveElement._map_pin;
		me._a_6__activeInst = clonedActiveElement;
		me._a_6__active.style.visibility='hidden';
		me._a_6__active.style.left='-12px';
		me._a_6__active.style.top='-41px';
		me._a_6.ggMarkerActive=me._a_6__active;
		me._a_6.ggMarkerInstances.push(clonedActiveElement);
		if (me._a_6.firstChild) {
			me._a_6.insertBefore(me._a_6__active,me._a_6.firstChild);
		} else {
			me._a_6.appendChild(me._a_6__active);
		}
		if (me._a_6.firstChild) {
			me._a_6.insertBefore(me._a_6__normal,me._a_6.firstChild);
		} else {
			me._a_6.appendChild(me._a_6__normal);
		}
		for (var i = 0; i < me._a_6.childNodes.length; i++) {
			me._a_6.ggMarkerInstances.push(me._a_6.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement_map_pin_Class(this,me._a_111);
		me._a_111__normal = clonedNormalElement._map_pin;
		me._a_111__normalInst = clonedNormalElement;
		me._a_111__normal.style.visibility='inherit';
		me._a_111__normal.style.left='-12px';
		me._a_111__normal.style.top='-41px';
		me._a_111.ggMarkerNormal=me._a_111__normal;
		me._a_111.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_map_pin_Class(this,me._a_111);
		me._a_111__active = clonedActiveElement._map_pin;
		me._a_111__activeInst = clonedActiveElement;
		me._a_111__active.style.visibility='hidden';
		me._a_111__active.style.left='-12px';
		me._a_111__active.style.top='-41px';
		me._a_111.ggMarkerActive=me._a_111__active;
		me._a_111.ggMarkerInstances.push(clonedActiveElement);
		if (me._a_111.firstChild) {
			me._a_111.insertBefore(me._a_111__active,me._a_111.firstChild);
		} else {
			me._a_111.appendChild(me._a_111__active);
		}
		if (me._a_111.firstChild) {
			me._a_111.insertBefore(me._a_111__normal,me._a_111.firstChild);
		} else {
			me._a_111.appendChild(me._a_111__normal);
		}
		for (var i = 0; i < me._a_111.childNodes.length; i++) {
			me._a_111.ggMarkerInstances.push(me._a_111.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement_map_pin_Class(this,me._a_5);
		me._a_5__normal = clonedNormalElement._map_pin;
		me._a_5__normalInst = clonedNormalElement;
		me._a_5__normal.style.visibility='inherit';
		me._a_5__normal.style.left='-12px';
		me._a_5__normal.style.top='-41px';
		me._a_5.ggMarkerNormal=me._a_5__normal;
		me._a_5.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_map_pin_Class(this,me._a_5);
		me._a_5__active = clonedActiveElement._map_pin;
		me._a_5__activeInst = clonedActiveElement;
		me._a_5__active.style.visibility='hidden';
		me._a_5__active.style.left='-12px';
		me._a_5__active.style.top='-41px';
		me._a_5.ggMarkerActive=me._a_5__active;
		me._a_5.ggMarkerInstances.push(clonedActiveElement);
		if (me._a_5.firstChild) {
			me._a_5.insertBefore(me._a_5__active,me._a_5.firstChild);
		} else {
			me._a_5.appendChild(me._a_5__active);
		}
		if (me._a_5.firstChild) {
			me._a_5.insertBefore(me._a_5__normal,me._a_5.firstChild);
		} else {
			me._a_5.appendChild(me._a_5__normal);
		}
		for (var i = 0; i < me._a_5.childNodes.length; i++) {
			me._a_5.ggMarkerInstances.push(me._a_5.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement_map_pin_Class(this,me._a_110);
		me._a_110__normal = clonedNormalElement._map_pin;
		me._a_110__normalInst = clonedNormalElement;
		me._a_110__normal.style.visibility='inherit';
		me._a_110__normal.style.left='-12px';
		me._a_110__normal.style.top='-41px';
		me._a_110.ggMarkerNormal=me._a_110__normal;
		me._a_110.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_map_pin_Class(this,me._a_110);
		me._a_110__active = clonedActiveElement._map_pin;
		me._a_110__activeInst = clonedActiveElement;
		me._a_110__active.style.visibility='hidden';
		me._a_110__active.style.left='-12px';
		me._a_110__active.style.top='-41px';
		me._a_110.ggMarkerActive=me._a_110__active;
		me._a_110.ggMarkerInstances.push(clonedActiveElement);
		if (me._a_110.firstChild) {
			me._a_110.insertBefore(me._a_110__active,me._a_110.firstChild);
		} else {
			me._a_110.appendChild(me._a_110__active);
		}
		if (me._a_110.firstChild) {
			me._a_110.insertBefore(me._a_110__normal,me._a_110.firstChild);
		} else {
			me._a_110.appendChild(me._a_110__normal);
		}
		for (var i = 0; i < me._a_110.childNodes.length; i++) {
			me._a_110.ggMarkerInstances.push(me._a_110.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement_map_pin_Class(this,me._a_4);
		me._a_4__normal = clonedNormalElement._map_pin;
		me._a_4__normalInst = clonedNormalElement;
		me._a_4__normal.style.visibility='inherit';
		me._a_4__normal.style.left='-12px';
		me._a_4__normal.style.top='-41px';
		me._a_4.ggMarkerNormal=me._a_4__normal;
		me._a_4.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_map_pin_Class(this,me._a_4);
		me._a_4__active = clonedActiveElement._map_pin;
		me._a_4__activeInst = clonedActiveElement;
		me._a_4__active.style.visibility='hidden';
		me._a_4__active.style.left='-12px';
		me._a_4__active.style.top='-41px';
		me._a_4.ggMarkerActive=me._a_4__active;
		me._a_4.ggMarkerInstances.push(clonedActiveElement);
		if (me._a_4.firstChild) {
			me._a_4.insertBefore(me._a_4__active,me._a_4.firstChild);
		} else {
			me._a_4.appendChild(me._a_4__active);
		}
		if (me._a_4.firstChild) {
			me._a_4.insertBefore(me._a_4__normal,me._a_4.firstChild);
		} else {
			me._a_4.appendChild(me._a_4__normal);
		}
		for (var i = 0; i < me._a_4.childNodes.length; i++) {
			me._a_4.ggMarkerInstances.push(me._a_4.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement_map_pin_Class(this,me._a_11);
		me._a_11__normal = clonedNormalElement._map_pin;
		me._a_11__normalInst = clonedNormalElement;
		me._a_11__normal.style.visibility='inherit';
		me._a_11__normal.style.left='-12px';
		me._a_11__normal.style.top='-41px';
		me._a_11.ggMarkerNormal=me._a_11__normal;
		me._a_11.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_map_pin_Class(this,me._a_11);
		me._a_11__active = clonedActiveElement._map_pin;
		me._a_11__activeInst = clonedActiveElement;
		me._a_11__active.style.visibility='hidden';
		me._a_11__active.style.left='-12px';
		me._a_11__active.style.top='-41px';
		me._a_11.ggMarkerActive=me._a_11__active;
		me._a_11.ggMarkerInstances.push(clonedActiveElement);
		if (me._a_11.firstChild) {
			me._a_11.insertBefore(me._a_11__active,me._a_11.firstChild);
		} else {
			me._a_11.appendChild(me._a_11__active);
		}
		if (me._a_11.firstChild) {
			me._a_11.insertBefore(me._a_11__normal,me._a_11.firstChild);
		} else {
			me._a_11.appendChild(me._a_11__normal);
		}
		for (var i = 0; i < me._a_11.childNodes.length; i++) {
			me._a_11.ggMarkerInstances.push(me._a_11.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement_map_pin_Class(this,me._a_0);
		me._a_0__normal = clonedNormalElement._map_pin;
		me._a_0__normalInst = clonedNormalElement;
		me._a_0__normal.style.visibility='inherit';
		me._a_0__normal.style.left='-12px';
		me._a_0__normal.style.top='-41px';
		me._a_0.ggMarkerNormal=me._a_0__normal;
		me._a_0.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_map_pin_Class(this,me._a_0);
		me._a_0__active = clonedActiveElement._map_pin;
		me._a_0__activeInst = clonedActiveElement;
		me._a_0__active.style.visibility='hidden';
		me._a_0__active.style.left='-12px';
		me._a_0__active.style.top='-41px';
		me._a_0.ggMarkerActive=me._a_0__active;
		me._a_0.ggMarkerInstances.push(clonedActiveElement);
		if (me._a_0.firstChild) {
			me._a_0.insertBefore(me._a_0__active,me._a_0.firstChild);
		} else {
			me._a_0.appendChild(me._a_0__active);
		}
		if (me._a_0.firstChild) {
			me._a_0.insertBefore(me._a_0__normal,me._a_0.firstChild);
		} else {
			me._a_0.appendChild(me._a_0__normal);
		}
		for (var i = 0; i < me._a_0.childNodes.length; i++) {
			me._a_0.ggMarkerInstances.push(me._a_0.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement_map_pin_Class(this,me._a_);
		me._a___normal = clonedNormalElement._map_pin;
		me._a___normalInst = clonedNormalElement;
		me._a___normal.style.visibility='inherit';
		me._a___normal.style.left='-12px';
		me._a___normal.style.top='-41px';
		me._a_.ggMarkerNormal=me._a___normal;
		me._a_.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_map_pin_Class(this,me._a_);
		me._a___active = clonedActiveElement._map_pin;
		me._a___activeInst = clonedActiveElement;
		me._a___active.style.visibility='hidden';
		me._a___active.style.left='-12px';
		me._a___active.style.top='-41px';
		me._a_.ggMarkerActive=me._a___active;
		me._a_.ggMarkerInstances.push(clonedActiveElement);
		if (me._a_.firstChild) {
			me._a_.insertBefore(me._a___active,me._a_.firstChild);
		} else {
			me._a_.appendChild(me._a___active);
		}
		if (me._a_.firstChild) {
			me._a_.insertBefore(me._a___normal,me._a_.firstChild);
		} else {
			me._a_.appendChild(me._a___normal);
		}
		for (var i = 0; i < me._a_.childNodes.length; i++) {
			me._a_.ggMarkerInstances.push(me._a_.childNodes[i]);
		}
		me._d_2.logicBlock_visible();
		var clonedNormalElement = new SkinElement_map_pin_Class(this,me._a_1);
		me._a_1__normal = clonedNormalElement._map_pin;
		me._a_1__normalInst = clonedNormalElement;
		me._a_1__normal.style.visibility='inherit';
		me._a_1__normal.style.left='-12px';
		me._a_1__normal.style.top='-41px';
		me._a_1.ggMarkerNormal=me._a_1__normal;
		me._a_1.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_map_pin_Class(this,me._a_1);
		me._a_1__active = clonedActiveElement._map_pin;
		me._a_1__activeInst = clonedActiveElement;
		me._a_1__active.style.visibility='hidden';
		me._a_1__active.style.left='-12px';
		me._a_1__active.style.top='-41px';
		me._a_1.ggMarkerActive=me._a_1__active;
		me._a_1.ggMarkerInstances.push(clonedActiveElement);
		if (me._a_1.firstChild) {
			me._a_1.insertBefore(me._a_1__active,me._a_1.firstChild);
		} else {
			me._a_1.appendChild(me._a_1__active);
		}
		if (me._a_1.firstChild) {
			me._a_1.insertBefore(me._a_1__normal,me._a_1.firstChild);
		} else {
			me._a_1.appendChild(me._a_1__normal);
		}
		for (var i = 0; i < me._a_1.childNodes.length; i++) {
			me._a_1.ggMarkerInstances.push(me._a_1.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement_map_pin_Class(this,me._a_2_3);
		me._a_2_3__normal = clonedNormalElement._map_pin;
		me._a_2_3__normalInst = clonedNormalElement;
		me._a_2_3__normal.style.visibility='inherit';
		me._a_2_3__normal.style.left='-12px';
		me._a_2_3__normal.style.top='-41px';
		me._a_2_3.ggMarkerNormal=me._a_2_3__normal;
		me._a_2_3.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_map_pin_Class(this,me._a_2_3);
		me._a_2_3__active = clonedActiveElement._map_pin;
		me._a_2_3__activeInst = clonedActiveElement;
		me._a_2_3__active.style.visibility='hidden';
		me._a_2_3__active.style.left='-12px';
		me._a_2_3__active.style.top='-41px';
		me._a_2_3.ggMarkerActive=me._a_2_3__active;
		me._a_2_3.ggMarkerInstances.push(clonedActiveElement);
		if (me._a_2_3.firstChild) {
			me._a_2_3.insertBefore(me._a_2_3__active,me._a_2_3.firstChild);
		} else {
			me._a_2_3.appendChild(me._a_2_3__active);
		}
		if (me._a_2_3.firstChild) {
			me._a_2_3.insertBefore(me._a_2_3__normal,me._a_2_3.firstChild);
		} else {
			me._a_2_3.appendChild(me._a_2_3__normal);
		}
		for (var i = 0; i < me._a_2_3.childNodes.length; i++) {
			me._a_2_3.ggMarkerInstances.push(me._a_2_3.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement_map_pin_Class(this,me._a_3);
		me._a_3__normal = clonedNormalElement._map_pin;
		me._a_3__normalInst = clonedNormalElement;
		me._a_3__normal.style.visibility='inherit';
		me._a_3__normal.style.left='-12px';
		me._a_3__normal.style.top='-41px';
		me._a_3.ggMarkerNormal=me._a_3__normal;
		me._a_3.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_map_pin_Class(this,me._a_3);
		me._a_3__active = clonedActiveElement._map_pin;
		me._a_3__activeInst = clonedActiveElement;
		me._a_3__active.style.visibility='hidden';
		me._a_3__active.style.left='-12px';
		me._a_3__active.style.top='-41px';
		me._a_3.ggMarkerActive=me._a_3__active;
		me._a_3.ggMarkerInstances.push(clonedActiveElement);
		if (me._a_3.firstChild) {
			me._a_3.insertBefore(me._a_3__active,me._a_3.firstChild);
		} else {
			me._a_3.appendChild(me._a_3__active);
		}
		if (me._a_3.firstChild) {
			me._a_3.insertBefore(me._a_3__normal,me._a_3.firstChild);
		} else {
			me._a_3.appendChild(me._a_3__normal);
		}
		for (var i = 0; i < me._a_3.childNodes.length; i++) {
			me._a_3.ggMarkerInstances.push(me._a_3.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement_map_pin_Class(this,me._a_21);
		me._a_21__normal = clonedNormalElement._map_pin;
		me._a_21__normalInst = clonedNormalElement;
		me._a_21__normal.style.visibility='inherit';
		me._a_21__normal.style.left='-12px';
		me._a_21__normal.style.top='-41px';
		me._a_21.ggMarkerNormal=me._a_21__normal;
		me._a_21.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_map_pin_Class(this,me._a_21);
		me._a_21__active = clonedActiveElement._map_pin;
		me._a_21__activeInst = clonedActiveElement;
		me._a_21__active.style.visibility='hidden';
		me._a_21__active.style.left='-12px';
		me._a_21__active.style.top='-41px';
		me._a_21.ggMarkerActive=me._a_21__active;
		me._a_21.ggMarkerInstances.push(clonedActiveElement);
		if (me._a_21.firstChild) {
			me._a_21.insertBefore(me._a_21__active,me._a_21.firstChild);
		} else {
			me._a_21.appendChild(me._a_21__active);
		}
		if (me._a_21.firstChild) {
			me._a_21.insertBefore(me._a_21__normal,me._a_21.firstChild);
		} else {
			me._a_21.appendChild(me._a_21__normal);
		}
		for (var i = 0; i < me._a_21.childNodes.length; i++) {
			me._a_21.ggMarkerInstances.push(me._a_21.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement_map_pin_Class(this,me._a_2);
		me._a_2__normal = clonedNormalElement._map_pin;
		me._a_2__normalInst = clonedNormalElement;
		me._a_2__normal.style.visibility='inherit';
		me._a_2__normal.style.left='-12px';
		me._a_2__normal.style.top='-41px';
		me._a_2.ggMarkerNormal=me._a_2__normal;
		me._a_2.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_map_pin_Class(this,me._a_2);
		me._a_2__active = clonedActiveElement._map_pin;
		me._a_2__activeInst = clonedActiveElement;
		me._a_2__active.style.visibility='hidden';
		me._a_2__active.style.left='-12px';
		me._a_2__active.style.top='-41px';
		me._a_2.ggMarkerActive=me._a_2__active;
		me._a_2.ggMarkerInstances.push(clonedActiveElement);
		if (me._a_2.firstChild) {
			me._a_2.insertBefore(me._a_2__active,me._a_2.firstChild);
		} else {
			me._a_2.appendChild(me._a_2__active);
		}
		if (me._a_2.firstChild) {
			me._a_2.insertBefore(me._a_2__normal,me._a_2.firstChild);
		} else {
			me._a_2.appendChild(me._a_2__normal);
		}
		for (var i = 0; i < me._a_2.childNodes.length; i++) {
			me._a_2.ggMarkerInstances.push(me._a_2.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement_map_pin_Class(this,me._a_2_2);
		me._a_2_2__normal = clonedNormalElement._map_pin;
		me._a_2_2__normalInst = clonedNormalElement;
		me._a_2_2__normal.style.visibility='inherit';
		me._a_2_2__normal.style.left='-12px';
		me._a_2_2__normal.style.top='-41px';
		me._a_2_2.ggMarkerNormal=me._a_2_2__normal;
		me._a_2_2.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_map_pin_Class(this,me._a_2_2);
		me._a_2_2__active = clonedActiveElement._map_pin;
		me._a_2_2__activeInst = clonedActiveElement;
		me._a_2_2__active.style.visibility='hidden';
		me._a_2_2__active.style.left='-12px';
		me._a_2_2__active.style.top='-41px';
		me._a_2_2.ggMarkerActive=me._a_2_2__active;
		me._a_2_2.ggMarkerInstances.push(clonedActiveElement);
		if (me._a_2_2.firstChild) {
			me._a_2_2.insertBefore(me._a_2_2__active,me._a_2_2.firstChild);
		} else {
			me._a_2_2.appendChild(me._a_2_2__active);
		}
		if (me._a_2_2.firstChild) {
			me._a_2_2.insertBefore(me._a_2_2__normal,me._a_2_2.firstChild);
		} else {
			me._a_2_2.appendChild(me._a_2_2__normal);
		}
		for (var i = 0; i < me._a_2_2.childNodes.length; i++) {
			me._a_2_2.ggMarkerInstances.push(me._a_2_2.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement_map_pin_Class(this,me._a_2_1);
		me._a_2_1__normal = clonedNormalElement._map_pin;
		me._a_2_1__normalInst = clonedNormalElement;
		me._a_2_1__normal.style.visibility='inherit';
		me._a_2_1__normal.style.left='-12px';
		me._a_2_1__normal.style.top='-41px';
		me._a_2_1.ggMarkerNormal=me._a_2_1__normal;
		me._a_2_1.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_map_pin_Class(this,me._a_2_1);
		me._a_2_1__active = clonedActiveElement._map_pin;
		me._a_2_1__activeInst = clonedActiveElement;
		me._a_2_1__active.style.visibility='hidden';
		me._a_2_1__active.style.left='-12px';
		me._a_2_1__active.style.top='-41px';
		me._a_2_1.ggMarkerActive=me._a_2_1__active;
		me._a_2_1.ggMarkerInstances.push(clonedActiveElement);
		if (me._a_2_1.firstChild) {
			me._a_2_1.insertBefore(me._a_2_1__active,me._a_2_1.firstChild);
		} else {
			me._a_2_1.appendChild(me._a_2_1__active);
		}
		if (me._a_2_1.firstChild) {
			me._a_2_1.insertBefore(me._a_2_1__normal,me._a_2_1.firstChild);
		} else {
			me._a_2_1.appendChild(me._a_2_1__normal);
		}
		for (var i = 0; i < me._a_2_1.childNodes.length; i++) {
			me._a_2_1.ggMarkerInstances.push(me._a_2_1.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement_map_pin_Class(this,me._a_2_0);
		me._a_2_0__normal = clonedNormalElement._map_pin;
		me._a_2_0__normalInst = clonedNormalElement;
		me._a_2_0__normal.style.visibility='inherit';
		me._a_2_0__normal.style.left='-12px';
		me._a_2_0__normal.style.top='-41px';
		me._a_2_0.ggMarkerNormal=me._a_2_0__normal;
		me._a_2_0.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_map_pin_Class(this,me._a_2_0);
		me._a_2_0__active = clonedActiveElement._map_pin;
		me._a_2_0__activeInst = clonedActiveElement;
		me._a_2_0__active.style.visibility='hidden';
		me._a_2_0__active.style.left='-12px';
		me._a_2_0__active.style.top='-41px';
		me._a_2_0.ggMarkerActive=me._a_2_0__active;
		me._a_2_0.ggMarkerInstances.push(clonedActiveElement);
		if (me._a_2_0.firstChild) {
			me._a_2_0.insertBefore(me._a_2_0__active,me._a_2_0.firstChild);
		} else {
			me._a_2_0.appendChild(me._a_2_0__active);
		}
		if (me._a_2_0.firstChild) {
			me._a_2_0.insertBefore(me._a_2_0__normal,me._a_2_0.firstChild);
		} else {
			me._a_2_0.appendChild(me._a_2_0__normal);
		}
		for (var i = 0; i < me._a_2_0.childNodes.length; i++) {
			me._a_2_0.ggMarkerInstances.push(me._a_2_0.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement_map_pin_Class(this,me._a_2_);
		me._a_2___normal = clonedNormalElement._map_pin;
		me._a_2___normalInst = clonedNormalElement;
		me._a_2___normal.style.visibility='inherit';
		me._a_2___normal.style.left='-12px';
		me._a_2___normal.style.top='-41px';
		me._a_2_.ggMarkerNormal=me._a_2___normal;
		me._a_2_.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_map_pin_Class(this,me._a_2_);
		me._a_2___active = clonedActiveElement._map_pin;
		me._a_2___activeInst = clonedActiveElement;
		me._a_2___active.style.visibility='hidden';
		me._a_2___active.style.left='-12px';
		me._a_2___active.style.top='-41px';
		me._a_2_.ggMarkerActive=me._a_2___active;
		me._a_2_.ggMarkerInstances.push(clonedActiveElement);
		if (me._a_2_.firstChild) {
			me._a_2_.insertBefore(me._a_2___active,me._a_2_.firstChild);
		} else {
			me._a_2_.appendChild(me._a_2___active);
		}
		if (me._a_2_.firstChild) {
			me._a_2_.insertBefore(me._a_2___normal,me._a_2_.firstChild);
		} else {
			me._a_2_.appendChild(me._a_2___normal);
		}
		for (var i = 0; i < me._a_2_.childNodes.length; i++) {
			me._a_2_.ggMarkerInstances.push(me._a_2_.childNodes[i]);
		}
		me.__16.logicBlock_visible();
		me.__17.logicBlock_visible();
		me.__14.logicBlock_visible();
		me.__20.logicBlock_visible();
		me.__12.logicBlock_visible();
		me.__30.logicBlock_visible();
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
		me.__5.logicBlock_visible();
		me.__7.logicBlock_visible();
		me.__8.logicBlock_size();
		me.__11.logicBlock_position();
		me.__3.logicBlock_position();
		me.__3.logicBlock_size();
		me.__3.logicBlock_visible();
		me._m_5.logicBlock_backgroundcolor();
		me._m_5.logicBlock_textcolor();
		me._m5.logicBlock_position();
		me._m5.logicBlock_textcolor();
		me._m_4.logicBlock_backgroundcolor();
		me._m_4.logicBlock_textcolor();
		me._m4.logicBlock_position();
		me._m4.logicBlock_textcolor();
		me._m_3.logicBlock_backgroundcolor();
		me._m_3.logicBlock_textcolor();
		me._m3.logicBlock_position();
		me._m3.logicBlock_textcolor();
		me._m_2.logicBlock_backgroundcolor();
		me._m_2.logicBlock_textcolor();
		me._m2.logicBlock_position();
		me._m2.logicBlock_textcolor();
		me._m_1.logicBlock_backgroundcolor();
		me._m_1.logicBlock_textcolor();
		me._m1.logicBlock_position();
		me._m1.logicBlock_textcolor();
		me.__0.logicBlock_visible();
		me.__2.logicBlock_visible();
		me.__1.logicBlock_visible();
		me.__.logicBlock_position();
		me.__.logicBlock_size();
		me.__6.logicBlock_position();
		me.__6.logicBlock_size();
		me.__6.logicBlock_visible();
		me.__pc.logicBlock_position();
		me.__pc.logicBlock_size();
		me.__pc.logicBlock_visible();
		player.addListener('activehotspotchanged', function(event) {
			if (hotspotTemplates.hasOwnProperty('ht_node')) {
				for(var i = 0; i < hotspotTemplates['ht_node'].length; i++) {
					hotspotTemplates['ht_node'][i].ggEvent_activehotspotchanged();
				}
			}
			me._dpc.logicBlock_visible();
			me._image_18.logicBlock_visible();
			me._image_12.logicBlock_visible();
			me.__62.logicBlock_position();
			me.__114.logicBlock_textcolor();
			me.__115.logicBlock_textcolor();
			me.__217.logicBlock_textcolor();
			me.__218.logicBlock_textcolor();
			me.__310.logicBlock_textcolor();
			me.__311.logicBlock_textcolor();
			me.__410.logicBlock_textcolor();
			me.__411.logicBlock_textcolor();
			me.__59.logicBlock_textcolor();
			me.__510.logicBlock_textcolor();
			me.__54.logicBlock_visible();
			me.__1_0.logicBlock_visible();
			me.__216.logicBlock_visible();
			me._a.logicBlock_visible();
			me._d_1.logicBlock_visible();
			me._d_2.logicBlock_visible();
			me._m_5.logicBlock_textcolor();
			me._m5.logicBlock_textcolor();
			me._m_4.logicBlock_textcolor();
			me._m4.logicBlock_textcolor();
			me._m_3.logicBlock_textcolor();
			me._m3.logicBlock_textcolor();
			me._m_2.logicBlock_textcolor();
			me._m2.logicBlock_textcolor();
			me._m_1.logicBlock_textcolor();
			me._m1.logicBlock_textcolor();
		});
		player.addListener('changenode', function(event) {
			if (hotspotTemplates.hasOwnProperty('ht_node')) {
				for(var i = 0; i < hotspotTemplates['ht_node'].length; i++) {
					hotspotTemplates['ht_node'][i].ggEvent_changenode();
				}
			}
			me.__94.logicBlock_visible();
			me.__90.logicBlock_position();
			me._cloner_1.ggUpdateConditionNodeChange();
			me.__1_6.ggUpdateConditionNodeChange();
			me.__2_10.ggUpdateConditionNodeChange();
			me.__119.logicBlock_backgroundcolor();
			me.__220.logicBlock_backgroundcolor();
			me.__73.logicBlock_visible();
			me._dpc.logicBlock_visible();
			me._image_18.logicBlock_visible();
			me.__85__normalInst.ggEvent_changenode();
			me.__85__activeInst.ggEvent_changenode();
			me.__84__normalInst.ggEvent_changenode();
			me.__84__activeInst.ggEvent_changenode();
			me.__83__normalInst.ggEvent_changenode();
			me.__83__activeInst.ggEvent_changenode();
			me.__82__normalInst.ggEvent_changenode();
			me.__82__activeInst.ggEvent_changenode();
			me.__81__normalInst.ggEvent_changenode();
			me.__81__activeInst.ggEvent_changenode();
			me.__80__normalInst.ggEvent_changenode();
			me.__80__activeInst.ggEvent_changenode();
			me.__79__normalInst.ggEvent_changenode();
			me.__79__activeInst.ggEvent_changenode();
			me.__118__normalInst.ggEvent_changenode();
			me.__118__activeInst.ggEvent_changenode();
			me.__78__normalInst.ggEvent_changenode();
			me.__78__activeInst.ggEvent_changenode();
			me.__117__normalInst.ggEvent_changenode();
			me.__117__activeInst.ggEvent_changenode();
			me.__77__normalInst.ggEvent_changenode();
			me.__77__activeInst.ggEvent_changenode();
			me.__76__normalInst.ggEvent_changenode();
			me.__76__activeInst.ggEvent_changenode();
			me.__116__normalInst.ggEvent_changenode();
			me.__116__activeInst.ggEvent_changenode();
			me.__121__normalInst.ggEvent_changenode();
			me.__121__activeInst.ggEvent_changenode();
			me.__120__normalInst.ggEvent_changenode();
			me.__120__activeInst.ggEvent_changenode();
			me._image_12.logicBlock_visible();
			me.__2_5__normalInst.ggEvent_changenode();
			me.__2_5__activeInst.ggEvent_changenode();
			me.__312__normalInst.ggEvent_changenode();
			me.__312__activeInst.ggEvent_changenode();
			me.__2_4__normalInst.ggEvent_changenode();
			me.__2_4__activeInst.ggEvent_changenode();
			me.__2_20__normalInst.ggEvent_changenode();
			me.__2_20__activeInst.ggEvent_changenode();
			me.__2_3__normalInst.ggEvent_changenode();
			me.__2_3__activeInst.ggEvent_changenode();
			me.__2_2__normalInst.ggEvent_changenode();
			me.__2_2__activeInst.ggEvent_changenode();
			me.__219__normalInst.ggEvent_changenode();
			me.__219__activeInst.ggEvent_changenode();
			me.__2_1__normalInst.ggEvent_changenode();
			me.__2_1__activeInst.ggEvent_changenode();
			me.__2_0__normalInst.ggEvent_changenode();
			me.__2_0__activeInst.ggEvent_changenode();
			me.__72.logicBlock_visible();
			me.__65.logicBlock_visible();
			me.__57.logicBlock_visible();
			me.__62.logicBlock_position();
			me.__114.logicBlock_textcolor();
			me.__115.logicBlock_textcolor();
			me.__217.logicBlock_textcolor();
			me.__218.logicBlock_textcolor();
			me.__310.logicBlock_textcolor();
			me.__311.logicBlock_textcolor();
			me.__410.logicBlock_textcolor();
			me.__411.logicBlock_textcolor();
			me.__59.logicBlock_textcolor();
			me.__510.logicBlock_textcolor();
			me.__46.logicBlock_position();
			me.__54.logicBlock_visible();
			me.__1_0.logicBlock_visible();
			me.__216.logicBlock_visible();
			me.__51.ggUpdateConditionNodeChange();
			me.__215.ggUpdateConditionNodeChange();
			me.__112.logicBlock_backgroundcolor();
			me.__212.logicBlock_backgroundcolor();
			me.__39.logicBlock_visible();
			me.__45.logicBlock_visible();
			me._rectangle_4.logicBlock_visible();
			me._rectangle_5.logicBlock_backgroundcolor();
			me._image_17.logicBlock_position();
			me.__211.logicBlock_backgroundcolor();
			me.__110.logicBlock_position();
			me.__32.logicBlock_backgroundcolor();
			me.__33.logicBlock_position();
			me.__43.logicBlock_backgroundcolor();
			me.__44.logicBlock_position();
			me.__29.logicBlock_visible();
			me.__23.logicBlock_position();
			me.__23.logicBlock_visible();
			me.__24.logicBlock_visible();
			me.__22.logicBlock_visible();
			me._a.logicBlock_visible();
			me._d_1.logicBlock_visible();
			me._a0__normalInst.ggEvent_changenode();
			me._a0__activeInst.ggEvent_changenode();
			me._a_10__normalInst.ggEvent_changenode();
			me._a_10__activeInst.ggEvent_changenode();
			me._a_9__normalInst.ggEvent_changenode();
			me._a_9__activeInst.ggEvent_changenode();
			me._a_8__normalInst.ggEvent_changenode();
			me._a_8__activeInst.ggEvent_changenode();
			me._a_7__normalInst.ggEvent_changenode();
			me._a_7__activeInst.ggEvent_changenode();
			me._a_6__normalInst.ggEvent_changenode();
			me._a_6__activeInst.ggEvent_changenode();
			me._a_111__normalInst.ggEvent_changenode();
			me._a_111__activeInst.ggEvent_changenode();
			me._a_5__normalInst.ggEvent_changenode();
			me._a_5__activeInst.ggEvent_changenode();
			me._a_110__normalInst.ggEvent_changenode();
			me._a_110__activeInst.ggEvent_changenode();
			me._a_4__normalInst.ggEvent_changenode();
			me._a_4__activeInst.ggEvent_changenode();
			me._a_11__normalInst.ggEvent_changenode();
			me._a_11__activeInst.ggEvent_changenode();
			me._a_0__normalInst.ggEvent_changenode();
			me._a_0__activeInst.ggEvent_changenode();
			me._a___normalInst.ggEvent_changenode();
			me._a___activeInst.ggEvent_changenode();
			me._d_2.logicBlock_visible();
			me._a_1__normalInst.ggEvent_changenode();
			me._a_1__activeInst.ggEvent_changenode();
			me._a_2_3__normalInst.ggEvent_changenode();
			me._a_2_3__activeInst.ggEvent_changenode();
			me._a_3__normalInst.ggEvent_changenode();
			me._a_3__activeInst.ggEvent_changenode();
			me._a_21__normalInst.ggEvent_changenode();
			me._a_21__activeInst.ggEvent_changenode();
			me._a_2__normalInst.ggEvent_changenode();
			me._a_2__activeInst.ggEvent_changenode();
			me._a_2_2__normalInst.ggEvent_changenode();
			me._a_2_2__activeInst.ggEvent_changenode();
			me._a_2_1__normalInst.ggEvent_changenode();
			me._a_2_1__activeInst.ggEvent_changenode();
			me._a_2_0__normalInst.ggEvent_changenode();
			me._a_2_0__activeInst.ggEvent_changenode();
			me._a_2___normalInst.ggEvent_changenode();
			me._a_2___activeInst.ggEvent_changenode();
			me.__16.logicBlock_visible();
			me.__17.logicBlock_visible();
			me.__14.logicBlock_visible();
			me.__20.logicBlock_visible();
			me.__12.logicBlock_visible();
			me.__30.logicBlock_visible();
			me._markertemplate__normalInst.ggEvent_changenode();
			me._markertemplate__activeInst.ggEvent_changenode();
			me.__7.logicBlock_visible();
			me.__3.logicBlock_position();
			me._m_5.logicBlock_textcolor();
			me._m5.logicBlock_textcolor();
			me._m_4.logicBlock_textcolor();
			me._m4.logicBlock_textcolor();
			me._m_3.logicBlock_textcolor();
			me._m3.logicBlock_textcolor();
			me._m_2.logicBlock_textcolor();
			me._m2.logicBlock_textcolor();
			me._m_1.logicBlock_textcolor();
			me._m1.logicBlock_textcolor();
			me.__0.logicBlock_visible();
			me.__pc.logicBlock_position();
		});
		player.addListener('configloaded', function(event) {
			if (hotspotTemplates.hasOwnProperty('ht_node')) {
				for(var i = 0; i < hotspotTemplates['ht_node'].length; i++) {
					hotspotTemplates['ht_node'][i].ggEvent_configloaded();
				}
			}
			me.__94.logicBlock_visible();
			me.__90.logicBlock_position();
			me.__90.logicBlock_visible();
			me._scrollarea_1.ggUpdatePosition();
			me.__1_4.ggUpdatePosition();
			me.__2_8.ggUpdatePosition();
			me.__119.logicBlock_backgroundcolor();
			me.__220.logicBlock_backgroundcolor();
			me.__73.logicBlock_visible();
			me.__75.logicBlock_visible();
			me._dpc.logicBlock_visible();
			me._image_18.logicBlock_visible();
			me._image_12.logicBlock_visible();
			me.__72.logicBlock_visible();
			me.__65.logicBlock_visible();
			me.__57.logicBlock_visible();
			me.__62.logicBlock_position();
			me.__114.logicBlock_textcolor();
			me.__115.logicBlock_textcolor();
			me.__217.logicBlock_textcolor();
			me.__218.logicBlock_textcolor();
			me.__310.logicBlock_textcolor();
			me.__311.logicBlock_textcolor();
			me.__410.logicBlock_textcolor();
			me.__411.logicBlock_textcolor();
			me.__59.logicBlock_textcolor();
			me.__510.logicBlock_textcolor();
			me.__46.logicBlock_position();
			me.__54.logicBlock_visible();
			me.__1_0.logicBlock_visible();
			me.__216.logicBlock_visible();
			me.__113.ggUpdatePosition();
			me.__213.ggUpdatePosition();
			me.__112.logicBlock_backgroundcolor();
			me.__212.logicBlock_backgroundcolor();
			me.__39.logicBlock_visible();
			me._rectangle_4.logicBlock_visible();
			me._rectangle_5.logicBlock_backgroundcolor();
			me._image_17.logicBlock_position();
			me.__211.logicBlock_backgroundcolor();
			me.__110.logicBlock_position();
			me.__32.logicBlock_backgroundcolor();
			me.__33.logicBlock_position();
			me.__43.logicBlock_backgroundcolor();
			me.__44.logicBlock_position();
			me.__23.logicBlock_position();
			me.__23.logicBlock_visible();
			me.__19.logicBlock_visible();
			me._a.logicBlock_visible();
			me._d_1.logicBlock_visible();
			me._d_2.logicBlock_visible();
			me.__16.logicBlock_visible();
			me.__14.logicBlock_visible();
			me.__12.logicBlock_visible();
			me.__5.logicBlock_visible();
			me.__3.logicBlock_position();
			me.__3.logicBlock_visible();
			me._m_5.logicBlock_textcolor();
			me._m5.logicBlock_textcolor();
			me._m_4.logicBlock_textcolor();
			me._m4.logicBlock_textcolor();
			me._m_3.logicBlock_textcolor();
			me._m3.logicBlock_textcolor();
			me._m_2.logicBlock_textcolor();
			me._m2.logicBlock_textcolor();
			me._m_1.logicBlock_textcolor();
			me._m1.logicBlock_textcolor();
			me.__2.logicBlock_visible();
			me.__1.logicBlock_visible();
			me.__.logicBlock_position();
			me.__.logicBlock_size();
			me.__6.logicBlock_position();
			me.__6.logicBlock_size();
			me.__6.logicBlock_visible();
			me.__pc.logicBlock_size();
			me.__pc.logicBlock_visible();
		});
		player.addListener('hotspotsupdated', function(event) {
			if (hotspotTemplates.hasOwnProperty('ht_node')) {
				for(var i = 0; i < hotspotTemplates['ht_node'].length; i++) {
					hotspotTemplates['ht_node'][i].ggEvent_hotspotsupdated();
				}
			}
		});
		player.addListener('sizechanged', function(event) {
			if (hotspotTemplates.hasOwnProperty('ht_node')) {
				for(var i = 0; i < hotspotTemplates['ht_node'].length; i++) {
					hotspotTemplates['ht_node'][i].ggEvent_sizechanged();
				}
			}
			me.__94.logicBlock_visible();
			me.__90.logicBlock_visible();
			me.__73.logicBlock_visible();
			me.__75.logicBlock_visible();
			me.__72.logicBlock_visible();
			me.__65.logicBlock_visible();
			me.__57.logicBlock_visible();
			me.__113.logicBlock_position();
			me.__213.logicBlock_position();
			me.__39.logicBlock_visible();
			me.__23.logicBlock_visible();
			me.__19.logicBlock_visible();
			me.__16.logicBlock_visible();
			me.__14.logicBlock_visible();
			me.__12.logicBlock_visible();
			me.__5.logicBlock_visible();
			me.__8.logicBlock_size();
			me.__11.logicBlock_position();
			me.__3.logicBlock_position();
			me.__3.logicBlock_size();
			me.__3.logicBlock_visible();
			me._m5.logicBlock_position();
			me._m4.logicBlock_position();
			me._m3.logicBlock_position();
			me._m2.logicBlock_position();
			me._m1.logicBlock_position();
			me.__2.logicBlock_visible();
			me.__1.logicBlock_visible();
			me.__.logicBlock_size();
			me.__6.logicBlock_position();
			me.__6.logicBlock_size();
			me.__6.logicBlock_visible();
			me.__pc.logicBlock_size();
			me.__pc.logicBlock_visible();
		});
		player.addListener('varchanged_vis_button', function(event) {
			me.__220.logicBlock_backgroundcolor();
			me.__212.logicBlock_backgroundcolor();
		});
		player.addListener('varchanged_vis_button2', function(event) {
			me.__119.logicBlock_backgroundcolor();
			me.__112.logicBlock_backgroundcolor();
		});
		player.addListener('varchanged_vis_catagory', function(event) {
			me.__90.logicBlock_position();
		});
		player.addListener('varchanged_vis_circle', function(event) {
			me._rectangle_5.logicBlock_backgroundcolor();
			me._image_17.logicBlock_position();
		});
		player.addListener('varchanged_vis_circle2', function(event) {
			me.__211.logicBlock_backgroundcolor();
			me.__110.logicBlock_position();
		});
		player.addListener('varchanged_vis_circle3', function(event) {
			me.__32.logicBlock_backgroundcolor();
			me.__33.logicBlock_position();
		});
		player.addListener('varchanged_vis_circle4', function(event) {
			me.__43.logicBlock_backgroundcolor();
			me.__44.logicBlock_position();
		});
		player.addListener('varchanged_vis_hambegur', function(event) {
			me._rectangle_4.logicBlock_visible();
		});
		player.addListener('varchanged_vis_mobilecatagory', function(event) {
			me.__46.logicBlock_position();
		});
		player.addListener('varchanged_vis_mobilemenu', function(event) {
			me.__23.logicBlock_position();
		});
		player.addListener('varchanged_vis_mobiletype', function(event) {
			me.__3.logicBlock_position();
		});
		player.addListener('viewerinit', function(event) {
			me._cloner_1.ggUpdate();
			me.__1_6.ggUpdate();
			me.__2_10.ggUpdate();
			me.__51.ggUpdate();
			me.__215.ggUpdate();
		});
	};
	function SkinCloner__215_Class(nodeId, parentScope, ggParent, parameter) {
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
		hs+='height : 80px;';
		hs+='left : 9px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 80px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._nodeimage_1.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._nodeimage_1.onclick=function (e) {
			if (me._nodeimage_1.isDragging()) return;
			player.openNext("{"+me.ggNodeId+"}","");
			player.setVariableValue('vis_mobilecatagory', !player.getVariableValue('vis_mobilecatagory'));
		}
		me._nodeimage_1.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_5=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._text_5;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._text_5__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 5";
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
		me._text_5.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.ggUserdata.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_5.ggUpdateText();
		player.addListener('changenode', function() {
			me._text_5.ggUpdateText();
		});
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
		me._nodeimage_1.appendChild(me._text_5);
		el=me.__49=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me.__49;
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
		me.__49.onclick=function (e) {
			if (me.__49.isDragging()) return;
			player.openNext("{"+me.ggNodeId+"}","");
		}
		me.__49.ggUpdatePosition=function (useTransition) {
		}
		me._nodeimage_1.appendChild(me.__49);
		me.__div.appendChild(me._nodeimage_1);
	};
	function SkinCloner__51_Class(nodeId, parentScope, ggParent, parameter) {
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
		hs+='height : 80px;';
		hs+='left : 9px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 80px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._nodeimage_10.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._nodeimage_10.onclick=function (e) {
			if (me._nodeimage_10.isDragging()) return;
			player.openNext("{"+me.ggNodeId+"}","");
			player.setVariableValue('vis_mobilecatagory', !player.getVariableValue('vis_mobilecatagory'));
		}
		me._nodeimage_10.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_50=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._text_50;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._text_50__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 5";
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
		me._text_50.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.ggUserdata.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_50.ggUpdateText();
		player.addListener('changenode', function() {
			me._text_50.ggUpdateText();
		});
		el.appendChild(els);
		me._text_50.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_50.ggUpdatePosition=function (useTransition) {
		}
		me._nodeimage_10.appendChild(me._text_50);
		el=me.__52=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me.__52;
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
		me.__52.onclick=function (e) {
			if (me.__52.isDragging()) return;
			player.openNext("{"+me.ggNodeId+"}","");
		}
		me.__52.ggUpdatePosition=function (useTransition) {
		}
		me._nodeimage_10.appendChild(me.__52);
		me.__div.appendChild(me._nodeimage_10);
	};
	function SkinCloner__2_10_Class(nodeId, parentScope, ggParent, parameter) {
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
		el=me.__2_11=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me.__2_11;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me.__2_11__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		els.setAttribute('src',basePath + "images/_1_7_" + nodeId + ".png");
		el.ggNodeId=nodeId;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		hs+='border-radius: 4px;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="2\uce35 \uc774\ubbf8\uc9c0";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		hs ='';
		hs+='height : 104px;';
		hs+='left : 9px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 104px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__2_11.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me.__2_11.onclick=function (e) {
			if (me.__2_11.isDragging()) return;
			player.openNext("{"+me.ggNodeId+"}","");
		}
		me.__2_11.onmouseover=function (e) {
			me.elementMouseOver['_2_11']=true;
			me.__222.logicBlock_visible();
		}
		me.__2_11.onmouseout=function (e) {
			me.elementMouseOver['_2_11']=false;
			me.__222.logicBlock_visible();
		}
		me.__2_11.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['_2_11']) {
				me.elementMouseOver['_2_11']=true;
				me.__222.logicBlock_visible();
			}
		}
		me.__2_11.ggUpdatePosition=function (useTransition) {
		}
		el=me.__2_12=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me.__2_12;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me.__2_12__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="2\uce35 \uacf5\uac04\uc124\uba85";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : rgba(0,0,0,0.705882);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 0px 0px 4px 4px;';
		hs+='bottom : 0px;';
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
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 5px 1px 5px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__2_12.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.ggUserdata.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__2_12.ggUpdateText();
		player.addListener('changenode', function() {
			me.__2_12.ggUpdateText();
		});
		el.appendChild(els);
		me.__2_12.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__2_12.ggUpdatePosition=function (useTransition) {
		}
		me.__2_11.appendChild(me.__2_12);
		el=me.__222=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me.__222;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="\uc774\ubbf8\uc9c0 \ubc30\uacbd\uc120 2";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 2px solid #1a66ff;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 4px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 4px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__222.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__222.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['_2_11'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__222.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__222.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__222.style.transition='';
				if (me.__222.ggCurrentLogicStateVisible == 0) {
					me.__222.style.visibility=(Number(me.__222.style.opacity)>0||!me.__222.style.opacity)?'inherit':'hidden';
					me.__222.ggVisible=true;
				}
				else {
					me.__222.style.visibility="hidden";
					me.__222.ggVisible=false;
				}
			}
		}
		me.__222.logicBlock_visible();
		me.__222.ggUpdatePosition=function (useTransition) {
		}
		me.__2_11.appendChild(me.__222);
		me.__div.appendChild(me.__2_11);
		me.__222.logicBlock_visible();
	};
	function SkinCloner__1_6_Class(nodeId, parentScope, ggParent, parameter) {
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
		el=me.__1_7=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me.__1_7;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me.__1_7__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		els.setAttribute('src',basePath + "images/_1_7_" + nodeId + ".png");
		el.ggNodeId=nodeId;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		hs+='border-radius: 4px;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="1\uce35 \uc774\ubbf8\uc9c0";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		hs ='';
		hs+='height : 104px;';
		hs+='left : 9px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 104px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__1_7.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me.__1_7.onclick=function (e) {
			if (me.__1_7.isDragging()) return;
			player.openNext("{"+me.ggNodeId+"}","");
		}
		me.__1_7.onmouseover=function (e) {
			me.elementMouseOver['_1_7']=true;
			me.__123.logicBlock_visible();
		}
		me.__1_7.onmouseout=function (e) {
			me.elementMouseOver['_1_7']=false;
			me.__123.logicBlock_visible();
		}
		me.__1_7.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['_1_7']) {
				me.elementMouseOver['_1_7']=true;
				me.__123.logicBlock_visible();
			}
		}
		me.__1_7.ggUpdatePosition=function (useTransition) {
		}
		el=me.__1_8=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me.__1_8;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me.__1_8__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="1\uce35 \uacf5\uac04\uc124\uba85";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : rgba(0,0,0,0.705882);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 0px 0px 4px 4px;';
		hs+='bottom : 0px;';
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
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 5px 1px 5px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__1_8.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.ggUserdata.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__1_8.ggUpdateText();
		player.addListener('changenode', function() {
			me.__1_8.ggUpdateText();
		});
		el.appendChild(els);
		me.__1_8.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__1_8.ggUpdatePosition=function (useTransition) {
		}
		me.__1_7.appendChild(me.__1_8);
		el=me.__123=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me.__123;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="\uc774\ubbf8\uc9c0 \ubc30\uacbd\uc120 1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 2px solid #1a66ff;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 4px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 4px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__123.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__123.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['_1_7'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__123.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__123.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__123.style.transition='';
				if (me.__123.ggCurrentLogicStateVisible == 0) {
					me.__123.style.visibility=(Number(me.__123.style.opacity)>0||!me.__123.style.opacity)?'inherit':'hidden';
					me.__123.ggVisible=true;
				}
				else {
					me.__123.style.visibility="hidden";
					me.__123.ggVisible=false;
				}
			}
		}
		me.__123.logicBlock_visible();
		me.__123.ggUpdatePosition=function (useTransition) {
		}
		me.__1_7.appendChild(me.__123);
		me.__div.appendChild(me.__1_7);
		me.__123.logicBlock_visible();
	};
	function SkinCloner_cloner_1_Class(nodeId, parentScope, ggParent, parameter) {
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
		el=me._nodeimage_11=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._nodeimage_11;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._nodeimage_11__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		els.setAttribute('src',basePath + "images/_1_7_" + nodeId + ".png");
		el.ggNodeId=nodeId;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		hs+='border-radius: 4px;';
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
		hs+='height : 104px;';
		hs+='left : 9px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 104px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._nodeimage_11.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._nodeimage_11.onclick=function (e) {
			if (me._nodeimage_11.isDragging()) return;
			player.openNext("{"+me.ggNodeId+"}","");
		}
		me._nodeimage_11.onmouseover=function (e) {
			me.elementMouseOver['nodeimage_11']=true;
			me.__93.logicBlock_visible();
		}
		me._nodeimage_11.onmouseout=function (e) {
			me.elementMouseOver['nodeimage_11']=false;
			me.__93.logicBlock_visible();
		}
		me._nodeimage_11.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['nodeimage_11']) {
				me.elementMouseOver['nodeimage_11']=true;
				me.__93.logicBlock_visible();
			}
		}
		me._nodeimage_11.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_51=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._text_51;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._text_51__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 5";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : rgba(0,0,0,0.705882);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 0px 0px 4px 4px;';
		hs+='bottom : 0px;';
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
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 5px 1px 5px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_51.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.ggUserdata.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_51.ggUpdateText();
		player.addListener('changenode', function() {
			me._text_51.ggUpdateText();
		});
		el.appendChild(els);
		me._text_51.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_51.ggUpdatePosition=function (useTransition) {
		}
		me._nodeimage_11.appendChild(me._text_51);
		el=me.__93=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me.__93;
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
		hs+='border : 2px solid #1a66ff;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 4px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 4px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
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
		me.__93.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['nodeimage_11'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__93.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__93.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__93.style.transition='';
				if (me.__93.ggCurrentLogicStateVisible == 0) {
					me.__93.style.visibility=(Number(me.__93.style.opacity)>0||!me.__93.style.opacity)?'inherit':'hidden';
					me.__93.ggVisible=true;
				}
				else {
					me.__93.style.visibility="hidden";
					me.__93.ggVisible=false;
				}
			}
		}
		me.__93.logicBlock_visible();
		me.__93.ggUpdatePosition=function (useTransition) {
		}
		me._nodeimage_11.appendChild(me.__93);
		me.__div.appendChild(me._nodeimage_11);
		me.__93.logicBlock_visible();
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
				me._map_pin_active.style.transition='transform 200ms ease 0ms, opacity 500ms ease 0ms';
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
				me._map_pin_active.style.transition='transform 200ms ease 0ms, opacity 500ms ease 0ms';
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
				me._map_pin_normal.style.transition='transform 200ms ease 0ms, opacity 500ms ease 0ms';
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
				me._map_pin_normal.style.transition='transform 200ms ease 0ms, opacity 500ms ease 0ms';
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
		me._map_pin_active.logicBlock_scaling();
		me._map_pin_active.logicBlock_alpha();
		me._map_pin_normal.logicBlock_scaling();
		me._map_pin_normal.logicBlock_alpha();
			me.ggEvent_changenode=function() {
				me._map_pin_active.logicBlock_alpha();
				me._map_pin_normal.logicBlock_alpha();
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
			player.openNext(player._(me.hotspot.url),player._(me.hotspot.target));
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
		el=me.__56=document.createElement('div');
		els=me.__56__text=document.createElement('div');
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
		me.__56.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.hotspot.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__56.ggUpdateText();
		player.addListener('changenode', function() {
			me.__56.ggUpdateText();
		});
		el.appendChild(els);
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
			return me.ggNodeId;
		}
		me.__56.logicBlock_position = function() {
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
			if (me.__56.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__56.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__56.style.transition='left 0s, bottom 0s, width 0s, height 0s, background-color 0s';
				if (me.__56.ggCurrentLogicStatePosition == 0) {
					me.__56.style.left = 'calc(50% - (50px / 2))';
					me.__56.style.bottom='0px';
				}
				else {
					me.__56.style.left='calc(50% - ((50px + 0px) / 2) + 0px)';
					me.__56.style.bottom='-28px';
				}
			}
		}
		me.__56.logicBlock_position();
		me.__56.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player._(me.ggUserdata.information) == "\ub354 \ub113\uac8c"))
			)
			{
				newLogicStateSize = 0;
			}
			else if (
				((player._(me.ggUserdata.information) == "\ub113\uac8c"))
			)
			{
				newLogicStateSize = 1;
			}
			else if (
				((player.getViewerSize().width <= 460))
			)
			{
				newLogicStateSize = 2;
			}
			else if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateSize = 3;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me.__56.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__56.ggCurrentLogicStateSize = newLogicStateSize;
				me.__56.style.transition='left 0s, bottom 0s, width 0s, height 0s, background-color 0s';
				if (me.__56.ggCurrentLogicStateSize == 0) {
					me.__56.style.width='115px';
					me.__56.style.height='25px';
					me.__56.style.left = 'calc(50% - (115px / 2))';
					skin.updateSize(me.__56);
				}
				else if (me.__56.ggCurrentLogicStateSize == 1) {
					me.__56.style.width='95px';
					me.__56.style.height='25px';
					me.__56.style.left = 'calc(50% - (95px / 2))';
					skin.updateSize(me.__56);
				}
				else if (me.__56.ggCurrentLogicStateSize == 2) {
					me.__56.style.width='60px';
					me.__56.style.height='25px';
					me.__56.style.left = 'calc(50% - (60px / 2))';
					skin.updateSize(me.__56);
				}
				else if (me.__56.ggCurrentLogicStateSize == 3) {
					me.__56.style.width='60px';
					me.__56.style.height='25px';
					me.__56.style.left = 'calc(50% - (60px / 2))';
					skin.updateSize(me.__56);
				}
				else {
					me.__56.style.width='50px';
					me.__56.style.height='25px';
					me.__56.style.left = 'calc(50% - (50px / 2))';
					skin.updateSize(me.__56);
				}
			}
		}
		me.__56.logicBlock_size();
		me.__56.logicBlock_visible = function() {
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
			if (me.__56.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__56.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__56.style.transition='left 0s, bottom 0s, width 0s, height 0s, background-color 0s';
				if (me.__56.ggCurrentLogicStateVisible == 0) {
					me.__56.style.visibility=(Number(me.__56.style.opacity)>0||!me.__56.style.opacity)?'inherit':'hidden';
					me.__56.ggVisible=true;
				}
				else if (me.__56.ggCurrentLogicStateVisible == 1) {
					me.__56.style.visibility=(Number(me.__56.style.opacity)>0||!me.__56.style.opacity)?'inherit':'hidden';
					me.__56.ggVisible=true;
				}
				else {
					me.__56.style.visibility="hidden";
					me.__56.ggVisible=false;
				}
			}
		}
		me.__56.logicBlock_visible();
		me.__56.logicBlock_backgroundcolor = function() {
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
			if (me.__56.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__56.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__56.style.transition='left 0s, bottom 0s, width 0s, height 0s, background-color 0s';
				if (me.__56.ggCurrentLogicStateBackgroundColor == 0) {
					me.__56.style.backgroundColor="rgba(0,0,0,0)";
				}
				else {
					me.__56.style.backgroundColor="rgba(0,0,0,0.54902)";
				}
			}
		}
		me.__56.logicBlock_backgroundcolor();
		me.__56.ggUpdatePosition=function (useTransition) {
		}
		me._container_6.appendChild(me.__56);
		el=me.__55=document.createElement('div');
		els=me.__55__text=document.createElement('div');
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
		me.__55.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.hotspot.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__55.ggUpdateText();
		player.addListener('changenode', function() {
			me.__55.ggUpdateText();
		});
		el.appendChild(els);
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
			return me.ggNodeId;
		}
		me.__55.logicBlock_position = function() {
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
			if (me.__55.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__55.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__55.style.transition='left 0s, bottom 0s, width 0s, height 0s, background-color 0s';
				if (me.__55.ggCurrentLogicStatePosition == 0) {
					me.__55.style.left = 'calc(50% - (60px / 2))';
					me.__55.style.bottom='0px';
				}
				else if (me.__55.ggCurrentLogicStatePosition == 1) {
					me.__55.style.left = 'calc(50% - (60px / 2) + (0px / 2) + -5px)';
					me.__55.style.bottom='40px';
				}
				else {
					me.__55.style.left='calc(50% - ((60px + 0px) / 2) + 0px)';
					me.__55.style.bottom='-40px';
				}
			}
		}
		me.__55.logicBlock_position();
		me.__55.logicBlock_size = function() {
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
				((player._(me.ggUserdata.information) == "\ub354 \ub113\uac8c"))
			)
			{
				newLogicStateSize = 3;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me.__55.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__55.ggCurrentLogicStateSize = newLogicStateSize;
				me.__55.style.transition='left 0s, bottom 0s, width 0s, height 0s, background-color 0s';
				if (me.__55.ggCurrentLogicStateSize == 0) {
					me.__55.style.width='50px';
					me.__55.style.height='25px';
					me.__55.style.left = 'calc(50% - (50px / 2))';
					skin.updateSize(me.__55);
				}
				else if (me.__55.ggCurrentLogicStateSize == 1) {
					me.__55.style.width='50px';
					me.__55.style.height='25px';
					me.__55.style.left = 'calc(50% - (50px / 2))';
					skin.updateSize(me.__55);
				}
				else if (me.__55.ggCurrentLogicStateSize == 2) {
					me.__55.style.width='95px';
					me.__55.style.height='30px';
					me.__55.style.left = 'calc(50% - (95px / 2))';
					skin.updateSize(me.__55);
				}
				else if (me.__55.ggCurrentLogicStateSize == 3) {
					me.__55.style.width='115px';
					me.__55.style.height='30px';
					me.__55.style.left = 'calc(50% - (115px / 2))';
					skin.updateSize(me.__55);
				}
				else {
					me.__55.style.width='60px';
					me.__55.style.height='30px';
					me.__55.style.left = 'calc(50% - (60px / 2))';
					skin.updateSize(me.__55);
				}
			}
		}
		me.__55.logicBlock_size();
		me.__55.logicBlock_visible = function() {
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
			if (me.__55.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__55.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__55.style.transition='left 0s, bottom 0s, width 0s, height 0s, background-color 0s';
				if (me.__55.ggCurrentLogicStateVisible == 0) {
					me.__55.style.visibility="hidden";
					me.__55.ggVisible=false;
				}
				else if (me.__55.ggCurrentLogicStateVisible == 1) {
					me.__55.style.visibility="hidden";
					me.__55.ggVisible=false;
				}
				else {
					me.__55.style.visibility=(Number(me.__55.style.opacity)>0||!me.__55.style.opacity)?'inherit':'hidden';
					me.__55.ggVisible=true;
				}
			}
		}
		me.__55.logicBlock_visible();
		me.__55.logicBlock_backgroundcolor = function() {
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
			if (me.__55.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__55.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__55.style.transition='left 0s, bottom 0s, width 0s, height 0s, background-color 0s';
				if (me.__55.ggCurrentLogicStateBackgroundColor == 0) {
					me.__55.style.backgroundColor="rgba(0,0,0,0)";
				}
				else {
					me.__55.style.backgroundColor="rgba(0,0,0,0.54902)";
				}
			}
		}
		me.__55.logicBlock_backgroundcolor();
		me.__55.ggUpdatePosition=function (useTransition) {
		}
		me._container_6.appendChild(me.__55);
		me._lottie_2.appendChild(me._container_6);
		me._ht_node.appendChild(me._lottie_2);
		me._lottie_2.logicBlock_position();
		me._lottie_2.logicBlock_size();
		me.__56.logicBlock_position();
		me.__56.logicBlock_size();
		me.__56.logicBlock_visible();
		me.__56.logicBlock_backgroundcolor();
		me.__55.logicBlock_position();
		me.__55.logicBlock_size();
		me.__55.logicBlock_visible();
		me.__55.logicBlock_backgroundcolor();
			me.ggEvent_activehotspotchanged=function() {
				me.__56.logicBlock_size();
				me.__56.logicBlock_backgroundcolor();
				me.__55.logicBlock_size();
				me.__55.logicBlock_backgroundcolor();
			};
			me.ggEvent_changenode=function() {
				me.__56.logicBlock_size();
				me.__56.logicBlock_backgroundcolor();
				me.__55.logicBlock_size();
				me.__55.logicBlock_backgroundcolor();
			};
			me.ggEvent_configloaded=function() {
				me._lottie_2.logicBlock_position();
				me._lottie_2.logicBlock_size();
				me.__56.logicBlock_size();
				me.__56.logicBlock_visible();
				me.__56.logicBlock_backgroundcolor();
				me.__55.logicBlock_position();
				me.__55.logicBlock_size();
				me.__55.logicBlock_visible();
				me.__55.logicBlock_backgroundcolor();
			};
			me.ggEvent_hotspotsupdated=function() {
				me.__56.logicBlock_position();
				me.__55.logicBlock_position();
			};
			me.ggEvent_sizechanged=function() {
				me._lottie_2.logicBlock_position();
				me._lottie_2.logicBlock_size();
				me.__56.logicBlock_size();
				me.__56.logicBlock_visible();
				me.__55.logicBlock_size();
				me.__55.logicBlock_visible();
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
		me.__223.ggUpdateConditionTimer();
		me.__224.ggUpdateConditionTimer();
		me.__313.ggUpdateConditionTimer();
		me.__314.ggUpdateConditionTimer();
		me.__412.ggUpdateConditionTimer();
		me.__413.ggUpdateConditionTimer();
		me.__124.ggUpdateConditionTimer();
		me.__125.ggUpdateConditionTimer();
		me.__114.ggUpdateConditionTimer();
		me.__217.ggUpdateConditionTimer();
		me.__310.ggUpdateConditionTimer();
		me.__410.ggUpdateConditionTimer();
		me.__59.ggUpdateConditionTimer();
		me._m_5.ggUpdateConditionTimer();
		me._m_4.ggUpdateConditionTimer();
		me._m_3.ggUpdateConditionTimer();
		me._m_2.ggUpdateConditionTimer();
		me._m_1.ggUpdateConditionTimer();
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