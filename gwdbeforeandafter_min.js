(function(){'use strict';var d,e="function"==typeof Object.create?Object.create:function(a){function b(){}b.prototype=a;return new b};function f(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}var g=f(this),h;
if("function"==typeof Object.setPrototypeOf)h=Object.setPrototypeOf;else{var k;a:{var l={a:!0},m={};try{m.__proto__=l;k=m.a;break a}catch(a){}k=!1}h=k?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var n=h;
function p(a,b){a.prototype=e(b.prototype);a.prototype.constructor=a;if(n)n(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var r=Object.getOwnPropertyDescriptor(b,c);r&&Object.defineProperty(a,c,r)}else a[c]=b[c];a.ca=b.prototype};function q(a,b,c){a=parseFloat(a.getAttribute(b));isFinite(a)||(a=c);return a};function t(){var a=HTMLElement.call(this)||this;a.m=!1;return a}p(t,HTMLElement);d=t.prototype;d.initialize=function(){};d.render=function(){};d.handlePointerUpdate=function(a,b){this.m=!0;this.N=a;this.O=b};d.handlePointerOut=function(){this.m=!1};d.shouldRenderOnHoverWhilePaused=function(){return!1};var u="angle autoplay delay feathering hold position speed track-mouse".split(" ");function v(){var a=t.call(this)||this;a.W=0;a.L=!1;return a}p(v,t);d=v.prototype;
d.connectedCallback=function(){var a=q(this,"angle",90);this.A=Math.max(0,Math.min(Math.PI,a*Math.PI/180));this.R=this.hasAttribute("autoplay");this.J=1E3*Math.max(0,q(this,"delay",0));this.S=Math.max(0,q(this,"feathering",20));this.h=1E3*Math.max(0,q(this,"hold",0));this.X=Math.max(0,Math.min(100,q(this,"position",50)));this.Y=q(this,"speed",20);this.v=this.hasAttribute("track-mouse");w(this)};
d.attributeChangedCallback=function(a,b,c){if(this.L&&b!==c){switch(a){case "angle":a=q(this,"angle",90);this.A=Math.max(0,Math.min(Math.PI,a*Math.PI/180));break;case "autoplay":this.R=this.hasAttribute("autoplay");break;case "delay":this.J=1E3*Math.max(0,q(this,"delay",0));break;case "feathering":this.S=Math.max(0,q(this,"feathering",20));break;case "hold":this.h=1E3*Math.max(0,q(this,"hold",0));break;case "position":this.X=Math.max(0,Math.min(100,q(this,"position",50)));break;case "speed":this.Y=
q(this,"speed",20);break;case "track-mouse":this.v=this.hasAttribute("track-mouse")}w(this)}};d.initialize=function(a,b,c){this.C=this.parentElement.querySelector("canvas").getContext("2d");this.i=this.parentElement.clientWidth*c;this.g=this.parentElement.clientHeight*c;this.ba=c;this.aa=a[0]||x(this);this.Z=a[1]||x(this);this.I=x(this);this.P=x(this);this.j=this.I.getContext("2d");this.s=this.P.getContext("2d");w(this);this.L=!0};
function w(a){a.H=Math.sin(a.A);a.B=Math.cos(a.A);a.l=1.5E-4*a.Y;a.G=Math.asin(2*a.X/100-1)/a.l;a.A<Math.PI/2?(a.u=a.H*a.i+a.B*a.g,a.D=0):(a.u=a.H*a.i-a.B*a.g,a.D=a.g);a.V=a.S*a.ba/2/a.u;a.T=a.H*a.u;a.U=a.B*a.u;a.F=Math.PI/a.l+a.h;a.o=Math.PI/2/a.l-a.G;a.v||(a.m=!1)}function x(a){var b=a.ownerDocument.createElement("canvas");b.width=a.i;b.height=a.g;return b}
d.render=function(a){if(this.L){if(this.m)var b=y(this);else if(-1===a)b=(Math.sin(this.G*this.l)+1)/2;else{if(!1===this.R&&void 0!==this.M)return;if(void 0===this.N&&void 0===this.O&&void 0!==this.M){if(a<this.J)return;a-=this.J}a+=this.W;0===this.h||a<this.o||(a=(a-this.o)%(2*this.F),a=a<this.h?this.o:a<this.F?this.o+a-this.h:a<this.F+this.h?this.o+this.F-this.h:this.o+a-2*this.h);b=Math.sin((a+this.G)*this.l);b=(b+1)/2}var c=b-this.V;b+=this.V;this.K=this.j.createLinearGradient(c*this.T,this.D+
c*this.U,b*this.T,this.D+b*this.U);this.K.addColorStop(0,"rgba(0,0,0,1)");this.K.addColorStop(1,"rgba(0,0,0,0)");this.j.clearRect(0,0,this.i,this.g);this.j.fillStyle=this.K;this.j.globalCompositeOperation="source-over";this.j.fillRect(0,0,this.i,this.g);this.s.clearRect(0,0,this.i,this.g);this.s.globalCompositeOperation="source-over";this.s.drawImage(this.I,0,0);this.s.globalCompositeOperation="source-out";this.s.drawImage(this.Z,0,0);this.j.globalCompositeOperation="source-in";this.j.drawImage(this.aa,
0,0);this.C.clearRect(0,0,this.i,this.g);this.C.globalCompositeOperation="lighter";this.C.drawImage(this.I,0,0);this.C.drawImage(this.P,0,0);this.M=a}};function y(a){return(a.H*a.N*a.i+a.B*(a.O*a.g-a.D))/a.u}d.handlePointerUpdate=function(a,b){this.v&&(this.m=!0,this.N=a,this.O=b)};d.handlePointerOut=function(){this.v&&(this.m=!1,this.W=Math.asin(2*y(this)-1)/this.l-this.G-this.M)};d.shouldRenderOnHoverWhilePaused=function(){return this.v};
g.Object.defineProperties(v,{observedAttributes:{configurable:!0,enumerable:!0,get:function(){return u}}});customElements.define("gwd-before-and-after",v);}).call(this);
