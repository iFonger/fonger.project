var Bm=Object.defineProperty;var Om=(e)=>e;function zm(e,t){this[e]=Om.bind(null,t)}var Gm=(e,t)=>{for(var i in t)Bm(e,i,{get:t[i],enumerable:!0,configurable:!0,set:zm.bind(t,i)})};var Hr={};Gm(Hr,{ArcCurve:()=>Ec,CatmullRomCurve3:()=>Pc,CubicBezierCurve:()=>Jo,CubicBezierCurve3:()=>Lc,EllipseCurve:()=>yn,LineCurve:()=>Ko,LineCurve3:()=>Qo,QuadraticBezierCurve:()=>$o,QuadraticBezierCurve3:()=>jo,SplineCurve:()=>ea});var Ws="187";var lh=0,Yl=1,ch=2;var Un=1,hh=2,Qr=3,ki=0,Bt=1,mi=2,Wi=0,Lr=1,hr=2,Zl=3,Jl=4,uh=5;var Dr=100,fh=101,dh=102,ph=103,mh=104,gh=200,xh=201,_h=202,vh=203,Ea=204,wa=205,yh=206,Mh=207,Sh=208,bh=209,Th=210,Eh=211,wh=212,Ah=213,Rh=214,Xs=0,qs=1,Ys=2,Nr=3,Zs=4,Js=5,Ks=6,Qs=7,$r=0,Ch=1,Ph=2,Di=0,Fn=1,Bn=2,On=3,Ur=4,zn=5,Gn=6,Vn=7;var Aa=300,Xi=301,_r=302,$s=303,js=304,Hn=1000,di=1001,kn=1002,Nt=1003,Kl=1004;var Wn=1005;var Ot=1006,eo=1007;var Ei=1008;var Xt=1009,Ra=1010,Ca=1011,vr=1012,Xn=1013,Qt=1014,qt=1015,Lt=1016,qn=1017,Yn=1018,ir=1020,Pa=35902,Ia=35899,La=1021,Da=1022,ni=1023,Pi=1026,Ni=1027,Zn=1028,jr=1029,Ui=1030,Jn=1031;var Kn=1033,Qn=33776,$n=33777,jn=33778,es=33779,to=35840,io=35841,ro=35842,no=35843,so=36196,oo=37492,ao=37496,lo=37488,co=37489,en=37490,ho=37491,uo=37808,fo=37809,po=37810,mo=37811,go=37812,xo=37813,_o=37814,vo=37815,yo=37816,Mo=37817,So=37818,bo=37819,To=37820,Eo=37821,wo=36492,Ao=36494,Ro=36495,Co=36283,Po=36284,tn=36285,Io=36286;var rn=2300,Na=2301,Ua=2302,Ql=2303,Fa=2400,Ba=2401,Oa=2402;var Ih=3200;var rr=0,Lh=1,qi="",Dt="srgb",nn="srgb-linear",sn="linear",xt="srgb";var za=7680;var Dh=519,Nh=512,Uh=513,Fh=514,Ga=515,Bh=516,Oh=517,Va=518,Ha=519,Lo=35044;var $l="300 es",si=2000,ur=2001;function Gh(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function jl(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function on(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function ec(){let e=on("canvas");return e.style.display="block",e}var zh={},ts=null;function an(...e){let t="THREE."+e.shift();if(ts)ts("log",t,...e);else console.log(t,...e)}function Vh(e){let t=e[0];if(typeof t==="string"&&t.startsWith("TSL:")){let i=e[1];if(i&&i.isStackTrace)e[0]+=" "+i.getLocation();else e[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return e}function Ee(...e){e=Vh(e);let t="THREE."+e.shift();if(ts)ts("warn",t,...e);else{let i=e[0];if(i&&i.isStackTrace)console.warn(i.getError(t));else console.warn(t,...e)}}function Oe(...e){e=Vh(e);let t="THREE."+e.shift();if(ts)ts("error",t,...e);else{let i=e[0];if(i&&i.isStackTrace)console.error(i.getError(t));else console.error(t,...e)}}function Yi(...e){let t=e.join(" ");if(t in zh)return;zh[t]=!0,Ee(...e)}function Hh(e,t,i){return new Promise(function(r,n){function s(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:n();break;case e.TIMEOUT_EXPIRED:setTimeout(s,i);break;default:r()}}setTimeout(s,i)})}var kh={[Xs]:Xs,[Ys]:Ks,[Zs]:Zs,[Nr]:Js,[qs]:qs,[Ks]:Ys,[Qs]:Qs,[Js]:Nr};class $t{addEventListener(e,t){if(this._listeners===void 0)this._listeners={};let i=this._listeners;if(i[e]===void 0)i[e]=[];if(i[e].indexOf(t)===-1)i[e].push(t)}hasEventListener(e,t){let i=this._listeners;if(i===void 0)return!1;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let r=i[e];if(r!==void 0){let n=r.indexOf(t);if(n!==-1)r.splice(n,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let r=i.slice(0);for(let n=0,s=r.length;n<s;n++)r[n].call(this,e);e.target=null}}}var gi=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var is=Math.PI/180,ln=180/Math.PI;function oi(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(gi[e&255]+gi[e>>8&255]+gi[e>>16&255]+gi[e>>24&255]+"-"+gi[t&255]+gi[t>>8&255]+"-"+gi[t>>16&15|64]+gi[t>>24&255]+"-"+gi[i&63|128]+gi[i>>8&255]+"-"+gi[i>>16&255]+gi[i>>24&255]+gi[r&255]+gi[r>>8&255]+gi[r>>16&255]+gi[r>>24&255]).toLowerCase()}function rt(e,t,i){return Math.max(t,Math.min(i,e))}function Wh(e,t){return(e%t+t)%t}function ka(e,t,i){return(1-i)*e+i*t}function Xh(e){return Math.pow(2,Math.floor(Math.log(e)/Math.LN2))}function rs(e){switch(e.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Wa(e,t){if(t.constructor===Float32Array)return e;let i=rs(t);if(i===void 0)throw Error("THREE.MathUtils: Invalid component type.");return Math.max(e/i,-1)}function Xa(e,t){if(t.constructor===Float32Array)return e;let i=rs(t);if(i===void 0)throw Error("THREE.MathUtils: Invalid component type.");return Math.round(e*i)}class J{static{this.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=rt(this.x,e.x,t.x),this.y=rt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=rt(this.x,e,t),this.y=rt(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(rt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(rt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),r=Math.sin(t),n=this.x-e.x,s=this.y-e.y;return this.x=n*i-s*r+e.x,this.y=n*r+s*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ai{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,n,s,o){let a=i[r+0],l=i[r+1],c=i[r+2],u=i[r+3],f=n[s+0],h=n[s+1],d=n[s+2],x=n[s+3];if(u!==x||a!==f||l!==h||c!==d){let y=a*f+l*h+c*d+u*x;if(y<0)f=-f,h=-h,d=-d,x=-x,y=-y;let p=1-o;if(y<0.9995){let m=Math.acos(y),T=Math.sin(m);p=Math.sin(p*m)/T,o=Math.sin(o*m)/T,a=a*p+f*o,l=l*p+h*o,c=c*p+d*o,u=u*p+x*o}else{a=a*p+f*o,l=l*p+h*o,c=c*p+d*o,u=u*p+x*o;let m=1/Math.sqrt(a*a+l*l+c*c+u*u);a*=m,l*=m,c*=m,u*=m}}e[t]=a,e[t+1]=l,e[t+2]=c,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,r,n,s){let o=i[r],a=i[r+1],l=i[r+2],c=i[r+3],u=n[s],f=n[s+1],h=n[s+2],d=n[s+3];return e[t]=o*d+c*u+a*h-l*f,e[t+1]=a*d+c*f+l*u-o*h,e[t+2]=l*d+c*h+o*f-a*u,e[t+3]=c*d-o*u-a*f-l*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let{_x:i,_y:r,_z:n,_order:s}=e,{cos:o,sin:a}=Math,l=o(i/2),c=o(r/2),u=o(n/2),f=a(i/2),h=a(r/2),d=a(n/2);switch(s){case"XYZ":this._x=f*c*u+l*h*d,this._y=l*h*u-f*c*d,this._z=l*c*d+f*h*u,this._w=l*c*u-f*h*d;break;case"YXZ":this._x=f*c*u+l*h*d,this._y=l*h*u-f*c*d,this._z=l*c*d-f*h*u,this._w=l*c*u+f*h*d;break;case"ZXY":this._x=f*c*u-l*h*d,this._y=l*h*u+f*c*d,this._z=l*c*d+f*h*u,this._w=l*c*u-f*h*d;break;case"ZYX":this._x=f*c*u-l*h*d,this._y=l*h*u+f*c*d,this._z=l*c*d-f*h*u,this._w=l*c*u+f*h*d;break;case"YZX":this._x=f*c*u+l*h*d,this._y=l*h*u+f*c*d,this._z=l*c*d-f*h*u,this._w=l*c*u-f*h*d;break;case"XZY":this._x=f*c*u-l*h*d,this._y=l*h*u-f*c*d,this._z=l*c*d+f*h*u,this._w=l*c*u+f*h*d;break;default:Ee("Quaternion: .setFromEuler() encountered an unknown order: "+s)}if(t===!0)this._onChangeCallback();return this}setFromAxisAngle(e,t){let i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],r=t[4],n=t[8],s=t[1],o=t[5],a=t[9],l=t[2],c=t[6],u=t[10],f=i+o+u;if(f>0){let h=0.5/Math.sqrt(f+1);this._w=0.25/h,this._x=(c-a)*h,this._y=(n-l)*h,this._z=(s-r)*h}else if(i>o&&i>u){let h=2*Math.sqrt(1+i-o-u);this._w=(c-a)/h,this._x=0.25*h,this._y=(r+s)/h,this._z=(n+l)/h}else if(o>u){let h=2*Math.sqrt(1+o-i-u);this._w=(n-l)/h,this._x=(r+s)/h,this._y=0.25*h,this._z=(a+c)/h}else{let h=2*Math.sqrt(1+u-i-o);this._w=(s-r)/h,this._x=(n+l)/h,this._y=(a+c)/h,this._z=0.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;if(i<0.00000001)if(i=0,Math.abs(e.x)>Math.abs(e.z))this._x=-e.y,this._y=e.x,this._z=0,this._w=i;else this._x=0,this._y=-e.z,this._z=e.y,this._w=i;else this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i;return this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(rt(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();if(e===0)this._x=0,this._y=0,this._z=0,this._w=1;else e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e;return this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let{_x:i,_y:r,_z:n,_w:s}=e,{_x:o,_y:a,_z:l,_w:c}=t;return this._x=i*c+s*o+r*l-n*a,this._y=r*c+s*a+n*o-i*l,this._z=n*c+s*l+i*a-r*o,this._w=s*c-i*o-r*a-n*l,this._onChangeCallback(),this}slerp(e,t){let{_x:i,_y:r,_z:n,_w:s}=e,o=this.dot(e);if(o<0)i=-i,r=-r,n=-n,s=-s,o=-o;let a=1-t;if(o<0.9995){let l=Math.acos(o),c=Math.sin(l);a=Math.sin(a*l)/c,t=Math.sin(t*l)/c,this._x=this._x*a+i*t,this._y=this._y*a+r*t,this._z=this._z*a+n*t,this._w=this._w*a+s*t,this._onChangeCallback()}else this._x=this._x*a+i*t,this._y=this._y*a+r*t,this._z=this._z*a+n*t,this._w=this._w*a+s*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),n=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),n*Math.sin(t),n*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class R{static{this.prototype.isVector3=!0}constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){if(i===void 0)i=this.z;return this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(qh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(qh.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,r=this.z,n=e.elements;return this.x=n[0]*t+n[3]*i+n[6]*r,this.y=n[1]*t+n[4]*i+n[7]*r,this.z=n[2]*t+n[5]*i+n[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,n=e.elements,s=1/(n[3]*t+n[7]*i+n[11]*r+n[15]);return this.x=(n[0]*t+n[4]*i+n[8]*r+n[12])*s,this.y=(n[1]*t+n[5]*i+n[9]*r+n[13])*s,this.z=(n[2]*t+n[6]*i+n[10]*r+n[14])*s,this}applyQuaternion(e){let t=this.x,i=this.y,r=this.z,{x:n,y:s,z:o,w:a}=e,l=2*(s*r-o*i),c=2*(o*t-n*r),u=2*(n*i-s*t);return this.x=t+a*l+s*u-o*c,this.y=i+a*c+o*l-n*u,this.z=r+a*u+n*c-s*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,r=this.z,n=e.elements;return this.x=n[0]*t+n[4]*i+n[8]*r,this.y=n[1]*t+n[5]*i+n[9]*r,this.z=n[2]*t+n[6]*i+n[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=rt(this.x,e.x,t.x),this.y=rt(this.y,e.y,t.y),this.z=rt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=rt(this.x,e,t),this.y=rt(this.y,e,t),this.z=rt(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(rt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let{x:i,y:r,z:n}=e,{x:s,y:o,z:a}=t;return this.x=r*a-n*o,this.y=n*s-i*a,this.z=i*o-r*s,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return tc.copy(this).projectOnVector(e),this.sub(tc)}reflect(e){return this.sub(tc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(rt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}var tc=new R,qh=new ai;class Qe{static{this.prototype.isMatrix3=!0}constructor(e,t,i,r,n,s,o,a,l){if(this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0)this.set(e,t,i,r,n,s,o,a,l)}set(e,t,i,r,n,s,o,a,l){let c=this.elements;return c[0]=e,c[1]=r,c[2]=o,c[3]=t,c[4]=n,c[5]=a,c[6]=i,c[7]=s,c[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,n=this.elements,s=i[0],o=i[3],a=i[6],l=i[1],c=i[4],u=i[7],f=i[2],h=i[5],d=i[8],x=r[0],y=r[3],p=r[6],m=r[1],T=r[4],E=r[7],S=r[2],C=r[5],L=r[8];return n[0]=s*x+o*m+a*S,n[3]=s*y+o*T+a*C,n[6]=s*p+o*E+a*L,n[1]=l*x+c*m+u*S,n[4]=l*y+c*T+u*C,n[7]=l*p+c*E+u*L,n[2]=f*x+h*m+d*S,n[5]=f*y+h*T+d*C,n[8]=f*p+h*E+d*L,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],r=e[2],n=e[3],s=e[4],o=e[5],a=e[6],l=e[7],c=e[8];return t*s*c-t*o*l-i*n*c+i*o*a+r*n*l-r*s*a}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],n=e[3],s=e[4],o=e[5],a=e[6],l=e[7],c=e[8],u=c*s-o*l,f=o*a-c*n,h=l*n-s*a,d=t*u+i*f+r*h;if(d===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/d;return e[0]=u*x,e[1]=(r*l-c*i)*x,e[2]=(o*i-r*s)*x,e[3]=f*x,e[4]=(c*t-r*a)*x,e[5]=(r*n-o*t)*x,e[6]=h*x,e[7]=(i*a-l*t)*x,e[8]=(s*t-i*n)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,n,s,o){let a=Math.cos(n),l=Math.sin(n);return this.set(i*a,i*l,-i*(a*s+l*o)+s+e,-r*l,r*a,-r*(-l*s+a*o)+o+t,0,0,1),this}scale(e,t){return Yi("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(ic.makeScale(e,t)),this}rotate(e){return Yi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(ic.makeRotation(-e)),this}translate(e,t){return Yi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(ic.makeTranslation(e,t)),this}makeTranslation(e,t){if(e.isVector2)this.set(1,0,e.x,0,1,e.y,0,0,1);else this.set(1,0,e,0,1,t,0,0,1);return this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}var ic=new Qe;var Yh=new Qe().set(0.4123908,0.3575843,0.1804808,0.212639,0.7151687,0.0721923,0.0193308,0.1191948,0.9505322),Zh=new Qe().set(3.2409699,-1.5373832,-0.4986108,-0.9692436,1.8759675,0.0415551,0.0556301,-0.203977,1.0569715);function Vm(){let e={enabled:!0,workingColorSpace:nn,spaces:{},convert:function(n,s,o){if(this.enabled===!1||s===o||!s||!o)return n;if(this.spaces[s].transfer===xt)n.r=nr(n.r),n.g=nr(n.g),n.b=nr(n.b);if(this.spaces[s].primaries!==this.spaces[o].primaries)n.applyMatrix3(this.spaces[s].toXYZ),n.applyMatrix3(this.spaces[o].fromXYZ);if(this.spaces[o].transfer===xt)n.r=cn(n.r),n.g=cn(n.g),n.b=cn(n.b);return n},workingToColorSpace:function(n,s){return this.convert(n,this.workingColorSpace,s)},colorSpaceToWorking:function(n,s){return this.convert(n,s,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){if(n===qi)return sn;return this.spaces[n].transfer},getToneMappingMode:function(n){return this.spaces[n].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(n,s=this.workingColorSpace){return n.fromArray(this.spaces[s].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,s,o){return n.copy(this.spaces[o].fromXYZ).multiply(this.spaces[s].toXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}},t=[0.64,0.33,0.3,0.6,0.15,0.06],i=[0.2126,0.7152,0.0722],r=[0.3127,0.329];return e.define({[nn]:{primaries:t,whitePoint:r,transfer:sn,toXYZ:Yh,fromXYZ:Zh,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Dt},outputColorSpaceConfig:{drawingBufferColorSpace:Dt}},[Dt]:{primaries:t,whitePoint:r,transfer:xt,toXYZ:Yh,fromXYZ:Zh,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Dt}}}),e}var at=Vm();function nr(e){return e<0.04045?e*0.0773993808:Math.pow(e*0.9478672986+0.0521327014,2.4)}function cn(e){return e<0.0031308?e*12.92:1.055*Math.pow(e,0.41666)-0.055}var ns;class qa{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src))return e.src;if(typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{if(ns===void 0)ns=on("canvas");ns.width=e.width,ns.height=e.height;let r=ns.getContext("2d");if(e instanceof ImageData)r.putImageData(e,0,0);else r.drawImage(e,0,0,e.width,e.height);i=ns}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=on("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let r=i.getImageData(0,0,e.width,e.height),n=r.data;for(let s=0;s<n.length;s++)n[s]=nr(n[s]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)if(t instanceof Uint8Array||t instanceof Uint8ClampedArray)t[i]=Math.floor(nr(t[i]/255)*255);else t[i]=nr(t[i]);return{data:t,width:e.width,height:e.height}}else return Ee("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}var Hm=0;class fr{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Hm++}),this.uuid=oi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;if(typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement)e.set(t.videoWidth,t.videoHeight,0);else if(typeof VideoFrame<"u"&&t instanceof VideoFrame)e.set(t.displayWidth,t.displayHeight,0);else if(t!==null)e.set(t.width||0,t.height||0,t.depth||0);else e.set(0,0,0);return e}set needsUpdate(e){if(e===!0)this.version++}toJSON(e){let t=e===void 0||typeof e==="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let n;if(Array.isArray(r)){n=[];for(let s=0,o=r.length;s<o;s++)if(r[s].isDataTexture)n.push(rc(r[s].image));else n.push(rc(r[s]))}else n=rc(r);i.url=n}if(!t)e.images[this.uuid]=i;return i}}function rc(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap)return qa.getDataURL(e);else if(e.data)return{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name};else return Ee("Texture: Unable to serialize Texture."),{}}var km=0,nc=new R;class Et extends $t{constructor(e=Et.DEFAULT_IMAGE,t=Et.DEFAULT_MAPPING,i=di,r=di,n=Ot,s=Ei,o=ni,a=Xt,l=Et.DEFAULT_ANISOTROPY,c=qi){super();this.isTexture=!0,Object.defineProperty(this,"id",{value:km++}),this.uuid=oi(),this.name="",this.source=new fr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=n,this.minFilter=s,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=a,this.offset=new J(0,0),this.repeat=new J(1,1),this.center=new J(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Qe,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=e&&e.depth&&e.depth>1?!0:!1,this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(nc).x}get height(){return this.source.getSize(nc).y}get depth(){return this.source.getSize(nc).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){Ee(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){Ee(`Texture.setValues(): property '${t}' does not exist.`);continue}if(r&&i&&(r.isVector2&&i.isVector2))r.copy(i);else if(r&&i&&(r.isVector3&&i.isVector3))r.copy(i);else if(r&&i&&(r.isMatrix3&&i.isMatrix3))r.copy(i);else this[t]=i}}toJSON(e){let t=e===void 0||typeof e==="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(Object.keys(this.userData).length>0)i.userData=this.userData;if(!t)e.textures[this.uuid]=i;return i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Aa)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Hn:e.x=e.x-Math.floor(e.x);break;case di:e.x=e.x<0?0:1;break;case kn:if(Math.abs(Math.floor(e.x)%2)===1)e.x=Math.ceil(e.x)-e.x;else e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Hn:e.y=e.y-Math.floor(e.y);break;case di:e.y=e.y<0?0:1;break;case kn:if(Math.abs(Math.floor(e.y)%2)===1)e.y=Math.ceil(e.y)-e.y;else e.y=e.y-Math.floor(e.y);break}if(this.flipY)e.y=1-e.y;return e}set needsUpdate(e){if(e===!0)this.version++,this.source.needsUpdate=!0}set needsPMREMUpdate(e){if(e===!0)this.pmremVersion++}}Et.DEFAULT_IMAGE=null;Et.DEFAULT_MAPPING=Aa;Et.DEFAULT_ANISOTROPY=1;class yt{static{this.prototype.isVector4=!0}constructor(e=0,t=0,i=0,r=1){this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,n=this.w,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r+s[12]*n,this.y=s[1]*t+s[5]*i+s[9]*r+s[13]*n,this.z=s[2]*t+s[6]*i+s[10]*r+s[14]*n,this.w=s[3]*t+s[7]*i+s[11]*r+s[15]*n,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);if(t<0.0001)this.x=1,this.y=0,this.z=0;else this.x=e.x/t,this.y=e.y/t,this.z=e.z/t;return this}setAxisAngleFromRotationMatrix(e){let t,i,r,n,s=0.01,o=0.1,a=e.elements,l=a[0],c=a[4],u=a[8],f=a[1],h=a[5],d=a[9],x=a[2],y=a[6],p=a[10];if(Math.abs(c-f)<0.01&&Math.abs(u-x)<0.01&&Math.abs(d-y)<0.01){if(Math.abs(c+f)<0.1&&Math.abs(u+x)<0.1&&Math.abs(d+y)<0.1&&Math.abs(l+h+p-3)<0.1)return this.set(1,0,0,0),this;t=Math.PI;let T=(l+1)/2,E=(h+1)/2,S=(p+1)/2,C=(c+f)/4,L=(u+x)/4,g=(d+y)/4;if(T>E&&T>S)if(T<0.01)i=0,r=0.707106781,n=0.707106781;else i=Math.sqrt(T),r=C/i,n=L/i;else if(E>S)if(E<0.01)i=0.707106781,r=0,n=0.707106781;else r=Math.sqrt(E),i=C/r,n=g/r;else if(S<0.01)i=0.707106781,r=0.707106781,n=0;else n=Math.sqrt(S),i=L/n,r=g/n;return this.set(i,r,n,t),this}let m=Math.sqrt((y-d)*(y-d)+(u-x)*(u-x)+(f-c)*(f-c));if(Math.abs(m)<0.001)m=1;return this.x=(y-d)/m,this.y=(u-x)/m,this.z=(f-c)/m,this.w=Math.acos((l+h+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=rt(this.x,e.x,t.x),this.y=rt(this.y,e.y,t.y),this.z=rt(this.z,e.z,t.z),this.w=rt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=rt(this.x,e,t),this.y=rt(this.y,e,t),this.z=rt(this.z,e,t),this.w=rt(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(rt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Do extends $t{constructor(e=1,t=1,i={}){super();i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ot,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new yt(0,0,e,t),this.scissorTest=!1,this.viewport=new yt(0,0,e,t),this.textures=[];let r=i.count;for(let n=0;n<r;n++)this.textures[n]=new Et({width:e,height:t,depth:i.depth}),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Ot,generateMipmaps:!1,flipY:!1,internalFormat:null};if(e.mapping!==void 0)t.mapping=e.mapping;if(e.wrapS!==void 0)t.wrapS=e.wrapS;if(e.wrapT!==void 0)t.wrapT=e.wrapT;if(e.wrapR!==void 0)t.wrapR=e.wrapR;if(e.magFilter!==void 0)t.magFilter=e.magFilter;if(e.minFilter!==void 0)t.minFilter=e.minFilter;if(e.format!==void 0)t.format=e.format;if(e.type!==void 0)t.type=e.type;if(e.anisotropy!==void 0)t.anisotropy=e.anisotropy;if(e.colorSpace!==void 0)t.colorSpace=e.colorSpace;if(e.flipY!==void 0)t.flipY=e.flipY;if(e.generateMipmaps!==void 0)t.generateMipmaps=e.generateMipmaps;if(e.mipmapsAutoUpdate!==void 0)t.mipmapsAutoUpdate=e.mipmapsAutoUpdate;if(e.internalFormat!==void 0)t.internalFormat=e.internalFormat;for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){if(this._depthTexture!==null&&this._depthTexture.renderTarget===this)this._depthTexture.renderTarget=null;if(e!==null&&e.renderTarget===null)e.renderTarget=this;this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,n=this.textures.length;r<n;r++)if(this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0)this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let r=Object.assign({},e.textures[t].image);this.textures[t].source=new fr(r)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Pt extends Do{constructor(e=1,t=1,i={}){super(e,t,i);this.isWebGLRenderTarget=!0}}class hn extends Et{constructor(e=null,t=1,i=1,r=1){super(null);this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Nt,this.minFilter=Nt,this.wrapR=di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class ss extends Et{constructor(e=null,t=1,i=1,r=1){super(null);this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Nt,this.minFilter=Nt,this.wrapR=di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}class Je{static{this.prototype.isMatrix4=!0}constructor(e,t,i,r,n,s,o,a,l,c,u,f,h,d,x,y){if(this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0)this.set(e,t,i,r,n,s,o,a,l,c,u,f,h,d,x,y)}set(e,t,i,r,n,s,o,a,l,c,u,f,h,d,x,y){let p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=r,p[1]=n,p[5]=s,p[9]=o,p[13]=a,p[2]=l,p[6]=c,p[10]=u,p[14]=f,p[3]=h,p[7]=d,p[11]=x,p[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Je().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){if(this.determinantAffine()===0)return e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this;return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,i=e.elements,r=1/os.setFromMatrixColumn(e,0).length(),n=1/os.setFromMatrixColumn(e,1).length(),s=1/os.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*n,t[5]=i[5]*n,t[6]=i[6]*n,t[7]=0,t[8]=i[8]*s,t[9]=i[9]*s,t[10]=i[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,{x:i,y:r,z:n}=e,s=Math.cos(i),o=Math.sin(i),a=Math.cos(r),l=Math.sin(r),c=Math.cos(n),u=Math.sin(n);if(e.order==="XYZ"){let f=s*c,h=s*u,d=o*c,x=o*u;t[0]=a*c,t[4]=-a*u,t[8]=l,t[1]=h+d*l,t[5]=f-x*l,t[9]=-o*a,t[2]=x-f*l,t[6]=d+h*l,t[10]=s*a}else if(e.order==="YXZ"){let f=a*c,h=a*u,d=l*c,x=l*u;t[0]=f+x*o,t[4]=d*o-h,t[8]=s*l,t[1]=s*u,t[5]=s*c,t[9]=-o,t[2]=h*o-d,t[6]=x+f*o,t[10]=s*a}else if(e.order==="ZXY"){let f=a*c,h=a*u,d=l*c,x=l*u;t[0]=f-x*o,t[4]=-s*u,t[8]=d+h*o,t[1]=h+d*o,t[5]=s*c,t[9]=x-f*o,t[2]=-s*l,t[6]=o,t[10]=s*a}else if(e.order==="ZYX"){let f=s*c,h=s*u,d=o*c,x=o*u;t[0]=a*c,t[4]=d*l-h,t[8]=f*l+x,t[1]=a*u,t[5]=x*l+f,t[9]=h*l-d,t[2]=-l,t[6]=o*a,t[10]=s*a}else if(e.order==="YZX"){let f=s*a,h=s*l,d=o*a,x=o*l;t[0]=a*c,t[4]=x-f*u,t[8]=d*u+h,t[1]=u,t[5]=s*c,t[9]=-o*c,t[2]=-l*c,t[6]=h*u+d,t[10]=f-x*u}else if(e.order==="XZY"){let f=s*a,h=s*l,d=o*a,x=o*l;t[0]=a*c,t[4]=-u,t[8]=l*c,t[1]=f*u+x,t[5]=s*c,t[9]=h*u-d,t[2]=d*u-h,t[6]=o*c,t[10]=x*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Wm,e,Xm)}lookAt(e,t,i){let r=this.elements;if(Fi.subVectors(e,t),Fi.lengthSq()===0)Fi.z=1;if(Fi.normalize(),Fr.crossVectors(i,Fi),Fr.lengthSq()===0){if(Math.abs(i.z)===1)Fi.x+=0.0001;else Fi.z+=0.0001;Fi.normalize(),Fr.crossVectors(i,Fi)}return Fr.normalize(),Ya.crossVectors(Fi,Fr),r[0]=Fr.x,r[4]=Ya.x,r[8]=Fi.x,r[1]=Fr.y,r[5]=Ya.y,r[9]=Fi.y,r[2]=Fr.z,r[6]=Ya.z,r[10]=Fi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,n=this.elements,s=i[0],o=i[4],a=i[8],l=i[12],c=i[1],u=i[5],f=i[9],h=i[13],d=i[2],x=i[6],y=i[10],p=i[14],m=i[3],T=i[7],E=i[11],S=i[15],C=r[0],L=r[4],g=r[8],b=r[12],N=r[1],q=r[5],U=r[9],z=r[13],ne=r[2],D=r[6],ee=r[10],re=r[14],W=r[3],pe=r[7],Q=r[11],oe=r[15];return n[0]=s*C+o*N+a*ne+l*W,n[4]=s*L+o*q+a*D+l*pe,n[8]=s*g+o*U+a*ee+l*Q,n[12]=s*b+o*z+a*re+l*oe,n[1]=c*C+u*N+f*ne+h*W,n[5]=c*L+u*q+f*D+h*pe,n[9]=c*g+u*U+f*ee+h*Q,n[13]=c*b+u*z+f*re+h*oe,n[2]=d*C+x*N+y*ne+p*W,n[6]=d*L+x*q+y*D+p*pe,n[10]=d*g+x*U+y*ee+p*Q,n[14]=d*b+x*z+y*re+p*oe,n[3]=m*C+T*N+E*ne+S*W,n[7]=m*L+T*q+E*D+S*pe,n[11]=m*g+T*U+E*ee+S*Q,n[15]=m*b+T*z+E*re+S*oe,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],r=e[8],n=e[12],s=e[1],o=e[5],a=e[9],l=e[13],c=e[2],u=e[6],f=e[10],h=e[14],d=e[3],x=e[7],y=e[11],p=e[15],m=a*h-l*f,T=o*h-l*u,E=o*f-a*u,S=s*h-l*c,C=s*f-a*c,L=s*u-o*c;return t*(x*m-y*T+p*E)-i*(d*m-y*S+p*C)+r*(d*T-x*S+p*L)-n*(d*E-x*C+y*L)}determinantAffine(){let e=this.elements,t=e[0],i=e[4],r=e[8],n=e[1],s=e[5],o=e[9],a=e[2],l=e[6],c=e[10];return t*(s*c-o*l)-i*(n*c-o*a)+r*(n*l-s*a)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let r=this.elements;if(e.isVector3)r[12]=e.x,r[13]=e.y,r[14]=e.z;else r[12]=e,r[13]=t,r[14]=i;return this}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],n=e[3],s=e[4],o=e[5],a=e[6],l=e[7],c=e[8],u=e[9],f=e[10],h=e[11],d=e[12],x=e[13],y=e[14],p=e[15],m=t*o-i*s,T=t*a-r*s,E=t*l-n*s,S=i*a-r*o,C=i*l-n*o,L=r*l-n*a,g=c*x-u*d,b=c*y-f*d,N=c*p-h*d,q=u*y-f*x,U=u*p-h*x,z=f*p-h*y,ne=m*z-T*U+E*q+S*N-C*b+L*g;if(ne===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let D=1/ne;return e[0]=(o*z-a*U+l*q)*D,e[1]=(r*U-i*z-n*q)*D,e[2]=(x*L-y*C+p*S)*D,e[3]=(f*C-u*L-h*S)*D,e[4]=(a*N-s*z-l*b)*D,e[5]=(t*z-r*N+n*b)*D,e[6]=(y*E-d*L-p*T)*D,e[7]=(c*L-f*E+h*T)*D,e[8]=(s*U-o*N+l*g)*D,e[9]=(i*N-t*U-n*g)*D,e[10]=(d*C-x*E+p*m)*D,e[11]=(u*E-c*C-h*m)*D,e[12]=(o*b-s*q-a*g)*D,e[13]=(t*q-i*b+r*g)*D,e[14]=(x*T-d*S-y*m)*D,e[15]=(c*S-u*T+f*m)*D,this}scale(e){let t=this.elements,{x:i,y:r,z:n}=e;return t[0]*=i,t[4]*=r,t[8]*=n,t[1]*=i,t[5]*=r,t[9]*=n,t[2]*=i,t[6]*=r,t[10]*=n,t[3]*=i,t[7]*=r,t[11]*=n,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){if(e.isVector3)this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1);else this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1);return this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),r=Math.sin(t),n=1-i,{x:s,y:o,z:a}=e,l=n*s,c=n*o;return this.set(l*s+i,l*o-r*a,l*a+r*o,0,l*o+r*a,c*o+i,c*a-r*s,0,l*a-r*o,c*a+r*s,n*a*a+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,n,s){return this.set(1,i,n,0,e,1,s,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){let r=this.elements,{_x:n,_y:s,_z:o,_w:a}=t,l=n+n,c=s+s,u=o+o,f=n*l,h=n*c,d=n*u,x=s*c,y=s*u,p=o*u,m=a*l,T=a*c,E=a*u,{x:S,y:C,z:L}=i;return r[0]=(1-(x+p))*S,r[1]=(h+E)*S,r[2]=(d-T)*S,r[3]=0,r[4]=(h-E)*C,r[5]=(1-(f+p))*C,r[6]=(y+m)*C,r[7]=0,r[8]=(d+T)*L,r[9]=(y-m)*L,r[10]=(1-(f+x))*L,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let n=this.determinantAffine();if(n===0)return i.set(1,1,1),t.identity(),this;let s=os.set(r[0],r[1],r[2]).length(),o=os.set(r[4],r[5],r[6]).length(),a=os.set(r[8],r[9],r[10]).length();if(n<0)s=-s;sr.copy(this);let l=1/s,c=1/o,u=1/a;return sr.elements[0]*=l,sr.elements[1]*=l,sr.elements[2]*=l,sr.elements[4]*=c,sr.elements[5]*=c,sr.elements[6]*=c,sr.elements[8]*=u,sr.elements[9]*=u,sr.elements[10]*=u,t.setFromRotationMatrix(sr),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,n,s,o=si,a=!1){let l=this.elements,c=2*n/(t-e),u=2*n/(i-r),f=(t+e)/(t-e),h=(i+r)/(i-r),d,x;if(a)d=n/(s-n),x=s*n/(s-n);else if(o===si)d=-(s+n)/(s-n),x=-2*s*n/(s-n);else if(o===ur)d=-s/(s-n),x=-s*n/(s-n);else throw Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,n,s,o=si,a=!1){let l=this.elements,c=2/(t-e),u=2/(i-r),f=-(t+e)/(t-e),h=-(i+r)/(i-r),d,x;if(a)d=1/(s-n),x=s/(s-n);else if(o===si)d=-2/(s-n),x=-(s+n)/(s-n);else if(o===ur)d=-1/(s-n),x=-n/(s-n);else throw Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=0,l[12]=f,l[1]=0,l[5]=u,l[9]=0,l[13]=h,l[2]=0,l[6]=0,l[10]=d,l[14]=x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}var os=new R,sr=new Je,Wm=new R(0,0,0),Xm=new R(1,1,1),Fr=new R,Ya=new R,Fi=new R;var Jh=new Je,Kh=new ai;class xi{constructor(e=0,t=0,i=0,r=xi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let r=e.elements,n=r[0],s=r[4],o=r[8],a=r[1],l=r[5],c=r[9],u=r[2],f=r[6],h=r[10];switch(t){case"XYZ":if(this._y=Math.asin(rt(o,-1,1)),Math.abs(o)<0.9999999)this._x=Math.atan2(-c,h),this._z=Math.atan2(-s,n);else this._x=Math.atan2(f,l),this._z=0;break;case"YXZ":if(this._x=Math.asin(-rt(c,-1,1)),Math.abs(c)<0.9999999)this._y=Math.atan2(o,h),this._z=Math.atan2(a,l);else this._y=Math.atan2(-u,n),this._z=0;break;case"ZXY":if(this._x=Math.asin(rt(f,-1,1)),Math.abs(f)<0.9999999)this._y=Math.atan2(-u,h),this._z=Math.atan2(-s,l);else this._y=0,this._z=Math.atan2(a,n);break;case"ZYX":if(this._y=Math.asin(-rt(u,-1,1)),Math.abs(u)<0.9999999)this._x=Math.atan2(f,h),this._z=Math.atan2(a,n);else this._x=0,this._z=Math.atan2(-s,l);break;case"YZX":if(this._z=Math.asin(rt(a,-1,1)),Math.abs(a)<0.9999999)this._x=Math.atan2(-c,l),this._y=Math.atan2(-u,n);else this._x=0,this._y=Math.atan2(o,h);break;case"XZY":if(this._z=Math.asin(-rt(s,-1,1)),Math.abs(s)<0.9999999)this._x=Math.atan2(f,l),this._y=Math.atan2(o,n);else this._x=Math.atan2(-c,h),this._y=0;break;default:Ee("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}if(this._order=t,i===!0)this._onChangeCallback();return this}setFromQuaternion(e,t,i){return Jh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Jh,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Kh.setFromEuler(this),this.setFromQuaternion(Kh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){if(this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0)this._order=e[3];return this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}xi.DEFAULT_ORDER="XYZ";class un{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}var qm=0,Qh=new R,as=new ai,yr=new Je,Za=new R,No=new R,Ym=new R,Zm=new ai,$h=new R(1,0,0),jh=new R(0,1,0),eu=new R(0,0,1),tu={type:"added"},Jm={type:"removed"},ls={type:"childadded",child:null},sc={type:"childremoved",child:null};class ct extends $t{constructor(){super();this.isObject3D=!0,Object.defineProperty(this,"id",{value:qm++}),this.uuid=oi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ct.DEFAULT_UP.clone();let e=new R,t=new xi,i=new ai,r=new R(1,1,1);function n(){i.setFromEuler(t,!1)}function s(){t.setFromQuaternion(i,void 0,!1)}t._onChange(n),i._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Je},normalMatrix:{value:new Qe}}),this.matrix=new Je,this.matrixWorld=new Je,this.matrixAutoUpdate=ct.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ct.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new un,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null)this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return as.setFromAxisAngle(e,t),this.quaternion.multiply(as),this}rotateOnWorldAxis(e,t){return as.setFromAxisAngle(e,t),this.quaternion.premultiply(as),this}rotateX(e){return this.rotateOnAxis($h,e)}rotateY(e){return this.rotateOnAxis(jh,e)}rotateZ(e){return this.rotateOnAxis(eu,e)}translateOnAxis(e,t){return Qh.copy(e).applyQuaternion(this.quaternion),this.position.add(Qh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis($h,e)}translateY(e){return this.translateOnAxis(jh,e)}translateZ(e){return this.translateOnAxis(eu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(yr.copy(this.matrixWorld).invert())}lookAt(e,t,i){if(e.isVector3)Za.copy(e);else Za.set(e,t,i);let r=this.parent;if(this.updateWorldMatrix(!0,!1),No.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight)yr.lookAt(No,Za,this.up);else yr.lookAt(Za,No,this.up);if(this.quaternion.setFromRotationMatrix(yr),r)yr.extractRotation(r.matrixWorld),as.setFromRotationMatrix(yr),this.quaternion.premultiply(as.invert())}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}if(e===this)return Oe("Object3D.add: object can't be added as a child of itself.",e),this;if(e&&e.isObject3D)e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(tu),ls.child=e,this.dispatchEvent(ls),ls.child=null;else Oe("Object3D.add: object not an instance of THREE.Object3D.",e);return this}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);if(t!==-1)e.parent=null,this.children.splice(t,1),e.dispatchEvent(Jm),sc.child=e,this.dispatchEvent(sc),sc.child=null;return this}removeFromParent(){let e=this.parent;if(e!==null)e.remove(this);return this}clear(){return this.remove(...this.children)}attach(e){if(this.updateWorldMatrix(!0,!1),yr.copy(this.matrixWorld).invert(),e.parent!==null)e.parent.updateWorldMatrix(!0,!1),yr.multiply(e.parent.matrixWorld);return e.applyMatrix4(yr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(tu),ls.child=e,this.dispatchEvent(ls),ls.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){let s=this.children[i].getObjectByProperty(e,t);if(s!==void 0)return s}return}getObjectsByProperty(e,t,i=[]){if(this[e]===t)i.push(this);let r=this.children;for(let n=0,s=r.length;n<s;n++)r[n].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(No,e,Ym),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(No,Zm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;if(t!==null)e(t),t.traverseAncestors(e)}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let{x:t,y:i,z:r}=e,n=this.matrix.elements;n[12]+=t-n[0]*t-n[4]*i-n[8]*r,n[13]+=i-n[1]*t-n[5]*i-n[9]*r,n[14]+=r-n[2]*t-n[6]*i-n[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||e){if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,e=!0}let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){let r=this.parent;if(e===!0&&r!==null)r.updateWorldMatrix(!0,!1);if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||i){if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,i=!0}if(t===!0){let n=this.children;for(let s=0,o=n.length;s<o;s++)n[s].updateWorldMatrix(!1,!0,i)}}toJSON(e){let t=e===void 0||typeof e==="string",i={};if(t)e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"};let r={};if(r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0)r.userData=this.userData;if(r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null)r.pivot=this.pivot.toArray();if(this.morphTargetDictionary!==void 0)r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary);if(this.morphTargetInfluences!==void 0)r.morphTargetInfluences=this.morphTargetInfluences.slice();if(this.isInstancedMesh){if(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null)r.instanceColor=this.instanceColor.toJSON()}if(this.isBatchedMesh){if(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map((o)=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map((o)=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null)r.colorsTexture=this._colorsTexture.toJSON(e);if(this.boundingSphere!==null)r.boundingSphere=this.boundingSphere.toJSON();if(this.boundingBox!==null)r.boundingBox=this.boundingBox.toJSON()}function n(o,a){if(o[a.uuid]===void 0)o[a.uuid]=a.toJSON(e);return a.uuid}if(this.isScene){if(this.background){if(this.background.isColor)r.background=this.background.toJSON();else if(this.background.isTexture)r.background=this.background.toJSON(e).uuid}if(this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0)r.environment=this.environment.toJSON(e).uuid}else if(this.isMesh||this.isLine||this.isPoints){r.geometry=n(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let a=o.shapes;if(Array.isArray(a))for(let l=0,c=a.length;l<c;l++){let u=a[l];n(e.shapes,u)}else n(e.shapes,a)}}if(this.isSkinnedMesh){if(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0)n(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid}if(this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let a=0,l=this.material.length;a<l;a++)o.push(n(e.materials,this.material[a]));r.material=o}else r.material=n(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){let a=this.animations[o];r.animations.push(n(e.animations,a))}}if(t){let o=s(e.geometries),a=s(e.materials),l=s(e.textures),c=s(e.images),u=s(e.shapes),f=s(e.skeletons),h=s(e.animations),d=s(e.nodes);if(o.length>0)i.geometries=o;if(a.length>0)i.materials=a;if(l.length>0)i.textures=l;if(c.length>0)i.images=c;if(u.length>0)i.shapes=u;if(f.length>0)i.skeletons=f;if(h.length>0)i.animations=h;if(d.length>0)i.nodes=d}return i.object=r,i;function s(o){let a=[];for(let l in o){let c=o[l];delete c.metadata,a.push(c)}return a}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let r=e.children[i];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}ct.DEFAULT_UP=new R(0,1,0);ct.DEFAULT_MATRIX_AUTO_UPDATE=!0;ct.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Zi extends ct{constructor(){super();this.isGroup=!0,this.type="Group"}}var Km={type:"move"};class cs{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){if(this._hand===null)this._hand=new Zi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1};return this._hand}getTargetRaySpace(){if(this._targetRay===null)this._targetRay=new Zi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R;return this._targetRay}getGripSpace(){if(this._grip===null)this._grip=new Zi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R,this._grip.eventsEnabled=!1;return this._grip}dispatchEvent(e){if(this._targetRay!==null)this._targetRay.dispatchEvent(e);if(this._grip!==null)this._grip.dispatchEvent(e);if(this._hand!==null)this._hand.dispatchEvent(e);return this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){if(this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null)this._targetRay.visible=!1;if(this._grip!==null)this._grip.visible=!1;if(this._hand!==null)this._hand.visible=!1;return this}update(e,t,i){let r=null,n=null,s=null,o=this._targetRay,a=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){s=!0;for(let x of e.hand.values()){let y=t.getJointPose(x,i),p=this._getHandJoint(l,x);if(y!==null)p.matrix.fromArray(y.transform.matrix),p.matrix.decompose(p.position,p.quaternion,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=y.radius;p.visible=y!==null}let c=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],f=c.position.distanceTo(u.position),h=0.02,d=0.005;if(l.inputState.pinching&&f>h+d)l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this});else if(!l.inputState.pinching&&f<=h-d)l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this})}else if(a!==null&&e.gripSpace){if(n=t.getPose(e.gripSpace,i),n!==null){if(a.matrix.fromArray(n.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,n.linearVelocity)a.hasLinearVelocity=!0,a.linearVelocity.copy(n.linearVelocity);else a.hasLinearVelocity=!1;if(n.angularVelocity)a.hasAngularVelocity=!0,a.angularVelocity.copy(n.angularVelocity);else a.hasAngularVelocity=!1;if(a.eventsEnabled)a.dispatchEvent({type:"gripUpdated",data:e,target:this})}}if(o!==null){if(r=t.getPose(e.targetRaySpace,i),r===null&&n!==null)r=n;if(r!==null){if(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity)o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity);else o.hasLinearVelocity=!1;if(r.angularVelocity)o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity);else o.hasAngularVelocity=!1;this.dispatchEvent(Km)}}}if(o!==null)o.visible=r!==null;if(a!==null)a.visible=n!==null;if(l!==null)l.visible=s!==null;return this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new Zi;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}var iu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Br={h:0,s:0,l:0},Ja={h:0,s:0,l:0};function oc(e,t,i){if(i<0)i+=1;if(i>1)i-=1;if(i<0.16666666666666666)return e+(t-e)*6*i;if(i<0.5)return t;if(i<0.6666666666666666)return e+(t-e)*6*(0.6666666666666666-i);return e}class de{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let r=e;if(r&&r.isColor)this.copy(r);else if(typeof r==="number")this.setHex(r);else if(typeof r==="string")this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Dt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,at.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=at.workingColorSpace){return this.r=e,this.g=t,this.b=i,at.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=at.workingColorSpace){if(e=Wh(e,1),t=rt(t,0,1),i=rt(i,0,1),t===0)this.r=this.g=this.b=i;else{let n=i<=0.5?i*(1+t):i+t-i*t,s=2*i-n;this.r=oc(s,n,e+0.3333333333333333),this.g=oc(s,n,e),this.b=oc(s,n,e-0.3333333333333333)}return at.colorSpaceToWorking(this,r),this}setStyle(e,t=Dt){function i(n){if(n===void 0)return;if(parseFloat(n)<1)Ee("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let n,s=r[1],o=r[2];switch(s){case"rgb":case"rgba":if(n=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(n[4]),this.setRGB(Math.min(255,parseInt(n[1],10))/255,Math.min(255,parseInt(n[2],10))/255,Math.min(255,parseInt(n[3],10))/255,t);if(n=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(n[4]),this.setRGB(Math.min(100,parseFloat(n[1]))/100,Math.min(100,parseFloat(n[2]))/100,Math.min(100,parseFloat(n[3]))/100,t);break;case"hsl":case"hsla":if(n=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(n[4]),this.setHSL(parseFloat(n[1])/360,parseFloat(n[2])/100,parseFloat(n[3])/100,t);break;default:Ee("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let n=r[1],s=n.length;if(s===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);else if(s===6)return this.setHex(parseInt(n,16),t);else Ee("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Dt){let i=iu[e.toLowerCase()];if(i!==void 0)this.setHex(i,t);else Ee("Color: Unknown color "+e);return this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=nr(e.r),this.g=nr(e.g),this.b=nr(e.b),this}copyLinearToSRGB(e){return this.r=cn(e.r),this.g=cn(e.g),this.b=cn(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Dt){return at.workingToColorSpace(_i.copy(this),e),Math.round(rt(_i.r*255,0,255))*65536+Math.round(rt(_i.g*255,0,255))*256+Math.round(rt(_i.b*255,0,255))}getHexString(e=Dt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=at.workingColorSpace){at.workingToColorSpace(_i.copy(this),t);let{r:i,g:r,b:n}=_i,s=Math.max(i,r,n),o=Math.min(i,r,n),a,l,c=(o+s)/2;if(o===s)a=0,l=0;else{let u=s-o;switch(l=c<=0.5?u/(s+o):u/(2-s-o),s){case i:a=(r-n)/u+(r<n?6:0);break;case r:a=(n-i)/u+2;break;case n:a=(i-r)/u+4;break}a/=6}return e.h=a,e.s=l,e.l=c,e}getRGB(e,t=at.workingColorSpace){return at.workingToColorSpace(_i.copy(this),t),e.r=_i.r,e.g=_i.g,e.b=_i.b,e}getStyle(e=Dt){at.workingToColorSpace(_i.copy(this),e);let{r:t,g:i,b:r}=_i;if(e!==Dt)return`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`;return`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Br),this.setHSL(Br.h+e,Br.s+t,Br.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Br),e.getHSL(Ja);let i=ka(Br.h,Ja.h,t),r=ka(Br.s,Ja.s,t),n=ka(Br.l,Ja.l,t);return this.setHSL(i,r,n),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,r=this.b,n=e.elements;return this.r=n[0]*t+n[3]*i+n[6]*r,this.g=n[1]*t+n[4]*i+n[7]*r,this.b=n[2]*t+n[5]*i+n[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}var _i=new de;de.NAMES=iu;class hs{constructor(e,t=1,i=1000){this.isFog=!0,this.name="",this.color=new de(e),this.near=t,this.far=i}clone(){return new hs(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class fn extends ct{constructor(){super();if(this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new xi,this.environmentIntensity=1,this.environmentRotation=new xi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);if(this.fog!==null)t.object.fog=this.fog.toJSON();return t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}var or=new R,Mr=new R,ac=new R,Sr=new R,us=new R,fs=new R,ru=new R,lc=new R,cc=new R,hc=new R,uc=new yt,fc=new yt,dc=new yt;class vi{constructor(e=new R,t=new R,i=new R){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),or.subVectors(e,t),r.cross(or);let n=r.lengthSq();if(n>0)return r.multiplyScalar(1/Math.sqrt(n));return r.set(0,0,0)}static getBarycoord(e,t,i,r,n){or.subVectors(r,t),Mr.subVectors(i,t),ac.subVectors(e,t);let s=or.dot(or),o=or.dot(Mr),a=or.dot(ac),l=Mr.dot(Mr),c=Mr.dot(ac),u=s*l-o*o;if(u===0)return n.set(0,0,0),null;let f=1/u,h=(l*a-o*c)*f,d=(s*c-o*a)*f;return n.set(1-h-d,d,h)}static containsPoint(e,t,i,r){if(this.getBarycoord(e,t,i,r,Sr)===null)return!1;return Sr.x>=0&&Sr.y>=0&&Sr.x+Sr.y<=1}static getInterpolation(e,t,i,r,n,s,o,a){if(this.getBarycoord(e,t,i,r,Sr)===null){if(a.x=0,a.y=0,"z"in a)a.z=0;if("w"in a)a.w=0;return null}return a.setScalar(0),a.addScaledVector(n,Sr.x),a.addScaledVector(s,Sr.y),a.addScaledVector(o,Sr.z),a}static getInterpolatedAttribute(e,t,i,r,n,s){return uc.setScalar(0),fc.setScalar(0),dc.setScalar(0),uc.fromBufferAttribute(e,t),fc.fromBufferAttribute(e,i),dc.fromBufferAttribute(e,r),s.setScalar(0),s.addScaledVector(uc,n.x),s.addScaledVector(fc,n.y),s.addScaledVector(dc,n.z),s}static isFrontFacing(e,t,i,r){return or.subVectors(i,t),Mr.subVectors(e,t),or.cross(Mr).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return or.subVectors(this.c,this.b),Mr.subVectors(this.a,this.b),or.cross(Mr).length()*0.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(0.3333333333333333)}getNormal(e){return vi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return vi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,n){return vi.getInterpolation(e,this.a,this.b,this.c,t,i,r,n)}containsPoint(e){return vi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return vi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,r=this.b,n=this.c,s,o;us.subVectors(r,i),fs.subVectors(n,i),lc.subVectors(e,i);let a=us.dot(lc),l=fs.dot(lc);if(a<=0&&l<=0)return t.copy(i);cc.subVectors(e,r);let c=us.dot(cc),u=fs.dot(cc);if(c>=0&&u<=c)return t.copy(r);let f=a*u-c*l;if(f<=0&&a>=0&&c<=0&&a-c>0)return s=a/(a-c),t.copy(i).addScaledVector(us,s);hc.subVectors(e,n);let h=us.dot(hc),d=fs.dot(hc);if(d>=0&&h<=d)return t.copy(n);let x=h*l-a*d;if(x<=0&&l>=0&&d<=0)return o=l/(l-d),t.copy(i).addScaledVector(fs,o);let y=c*d-h*u;if(y<=0&&u-c>=0&&h-d>=0)return ru.subVectors(n,r),o=(u-c)/(u-c+(h-d)),t.copy(r).addScaledVector(ru,o);let p=1/(y+x+f);return s=x*p,o=f*p,t.copy(i).addScaledVector(us,s).addScaledVector(fs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class yi{constructor(e=new R(1/0,1/0,1/0),t=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(ar.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(ar.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=ar.copy(t).multiplyScalar(0.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(0.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let n=i.getAttribute("position");if(t===!0&&n!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let s=0,o=n.count;s<o;s++){if(e.isMesh===!0)e.getVertexPosition(s,ar);else ar.fromBufferAttribute(n,s);ar.applyMatrix4(e.matrixWorld),this.expandByPoint(ar)}else{if(e.boundingBox!==void 0){if(e.boundingBox===null)e.computeBoundingBox();Ka.copy(e.boundingBox)}else{if(i.boundingBox===null)i.computeBoundingBox();Ka.copy(i.boundingBox)}Ka.applyMatrix4(e.matrixWorld),this.union(Ka)}}let r=e.children;for(let n=0,s=r.length;n<s;n++)this.expandByObject(r[n],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ar),ar.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;if(e.normal.x>0)t=e.normal.x*this.min.x,i=e.normal.x*this.max.x;else t=e.normal.x*this.max.x,i=e.normal.x*this.min.x;if(e.normal.y>0)t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y;else t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y;if(e.normal.z>0)t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z;else t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z;return t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Uo),Qa.subVectors(this.max,Uo),ds.subVectors(e.a,Uo),ps.subVectors(e.b,Uo),ms.subVectors(e.c,Uo),Or.subVectors(ps,ds),zr.subVectors(ms,ps),dn.subVectors(ds,ms);let t=[0,-Or.z,Or.y,0,-zr.z,zr.y,0,-dn.z,dn.y,Or.z,0,-Or.x,zr.z,0,-zr.x,dn.z,0,-dn.x,-Or.y,Or.x,0,-zr.y,zr.x,0,-dn.y,dn.x,0];if(!pc(t,ds,ps,ms,Qa))return!1;if(t=[1,0,0,0,1,0,0,0,1],!pc(t,ds,ps,ms,Qa))return!1;return $a.crossVectors(Or,zr),t=[$a.x,$a.y,$a.z],pc(t,ds,ps,ms,Qa)}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ar).distanceTo(e)}getBoundingSphere(e){if(this.isEmpty())e.makeEmpty();else this.getCenter(e.center),e.radius=this.getSize(ar).length()*0.5;return e}intersect(e){if(this.min.max(e.min),this.max.min(e.max),this.isEmpty())this.makeEmpty();return this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){if(this.isEmpty())return this;return br[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),br[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),br[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),br[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),br[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),br[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),br[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),br[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(br),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}var br=[new R,new R,new R,new R,new R,new R,new R,new R],ar=new R,Ka=new yi,ds=new R,ps=new R,ms=new R,Or=new R,zr=new R,dn=new R,Uo=new R,Qa=new R,$a=new R,pn=new R;function pc(e,t,i,r,n){for(let s=0,o=e.length-3;s<=o;s+=3){pn.fromArray(e,s);let a=n.x*Math.abs(pn.x)+n.y*Math.abs(pn.y)+n.z*Math.abs(pn.z),l=t.dot(pn),c=i.dot(pn),u=r.dot(pn);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}var Zt=new R,ja=new J,Qm=0;class Yt extends $t{constructor(e,t,i=!1){super();if(Array.isArray(e))throw TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Qm++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Lo,this.updateRanges=[],this.gpuType=qt,this.version=0,this._normalizationScale=e!==void 0?rs(e):void 0}onUploadCallback(){}set needsUpdate(e){if(e===!0)this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,n=this.itemSize;r<n;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)ja.fromBufferAttribute(this,t),ja.applyMatrix3(e),this.setXY(t,ja.x,ja.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Zt.fromBufferAttribute(this,t),Zt.applyMatrix3(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Zt.fromBufferAttribute(this,t),Zt.applyMatrix4(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Zt.fromBufferAttribute(this,t),Zt.applyNormalMatrix(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Zt.fromBufferAttribute(this,t),Zt.transformDirection(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];if(this.normalized)i=this._denormalize(i);return i}setComponent(e,t,i){if(this.normalized)i=this._normalize(i);return this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];if(this.normalized)t=this._denormalize(t);return t}setX(e,t){if(this.normalized)t=this._normalize(t);return this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];if(this.normalized)t=this._denormalize(t);return t}setY(e,t){if(this.normalized)t=this._normalize(t);return this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];if(this.normalized)t=this._denormalize(t);return t}setZ(e,t){if(this.normalized)t=this._normalize(t);return this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];if(this.normalized)t=this._denormalize(t);return t}setW(e,t){if(this.normalized)t=this._normalize(t);return this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){if(e*=this.itemSize,this.normalized)t=this._normalize(t),i=this._normalize(i);return this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){if(e*=this.itemSize,this.normalized)t=this._normalize(t),i=this._normalize(i),r=this._normalize(r);return this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,n){if(e*=this.itemSize,this.normalized)t=this._normalize(t),i=this._normalize(i),r=this._normalize(r),n=this._normalize(n);return this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=n,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Wa(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):Xa(e,this.array)}}class Fo extends Yt{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Bo extends Yt{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Ge extends Yt{constructor(e,t,i){super(new Float32Array(e),t,i)}}var $m=new yi,Oo=new R,mc=new R;class jt{constructor(e=new R,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;if(t!==void 0)i.copy(t);else $m.setFromPoints(e).getCenter(i);let r=0;for(let n=0,s=e.length;n<s;n++)r=Math.max(r,i.distanceToSquared(e[n]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);if(t.copy(e),i>this.radius*this.radius)t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center);return t}getBoundingBox(e){if(this.isEmpty())return e.makeEmpty(),e;return e.set(this.center,this.center),e.expandByScalar(this.radius),e}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Oo.subVectors(e,this.center);let t=Oo.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),r=(i-this.radius)*0.5;this.center.addScaledVector(Oo,r/i),this.radius+=r}return this}union(e){if(e.isEmpty())return this;if(this.isEmpty())return this.copy(e),this;if(this.center.equals(e.center)===!0)this.radius=Math.max(this.radius,e.radius);else mc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Oo.copy(e.center).add(mc)),this.expandByPoint(Oo.copy(e.center).sub(mc));return this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}var jm=0,Ji=new Je,gc=new ct,gs=new R,Bi=new yi,zo=new yi,li=new R;class Ze extends $t{constructor(){super();this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:jm++}),this.uuid=oi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){if(Array.isArray(e))this.index=new((Gh(e))?Bo:Fo)(e,1);else this.index=e;return this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;if(t!==void 0)t.applyMatrix4(e),t.needsUpdate=!0;let i=this.attributes.normal;if(i!==void 0){let n=new Qe().getNormalMatrix(e);i.applyNormalMatrix(n),i.needsUpdate=!0}let r=this.attributes.tangent;if(r!==void 0)r.transformDirection(e),r.needsUpdate=!0;if(this.boundingBox!==null)this.computeBoundingBox();if(this.boundingSphere!==null)this.computeBoundingSphere();return this._transformed=!0,this}applyQuaternion(e){return Ji.makeRotationFromQuaternion(e),this.applyMatrix4(Ji),this}rotateX(e){return Ji.makeRotationX(e),this.applyMatrix4(Ji),this}rotateY(e){return Ji.makeRotationY(e),this.applyMatrix4(Ji),this}rotateZ(e){return Ji.makeRotationZ(e),this.applyMatrix4(Ji),this}translate(e,t,i){return Ji.makeTranslation(e,t,i),this.applyMatrix4(Ji),this}scale(e,t,i){return Ji.makeScale(e,t,i),this.applyMatrix4(Ji),this}lookAt(e){return gc.lookAt(e),gc.updateMatrix(),this.applyMatrix4(gc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(gs).negate(),this.translate(gs.x,gs.y,gs.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let r=0,n=e.length;r<n;r++){let s=e[r];i.push(s.x,s.y,s.z||0)}this.setAttribute("position",new Ge(i,3))}else{let i=Math.min(e.length,t.count);for(let r=0;r<i;r++){let n=e[r];t.setXYZ(r,n.x,n.y,n.z||0)}if(e.length>t.count)Ee("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.");t.needsUpdate=!0}return this}computeBoundingBox(){if(this.boundingBox===null)this.boundingBox=new yi;let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Oe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){let n=t[i];if(Bi.setFromBufferAttribute(n),this.morphTargetsRelative)li.addVectors(this.boundingBox.min,Bi.min),this.boundingBox.expandByPoint(li),li.addVectors(this.boundingBox.max,Bi.max),this.boundingBox.expandByPoint(li);else this.boundingBox.expandByPoint(Bi.min),this.boundingBox.expandByPoint(Bi.max)}}else this.boundingBox.makeEmpty();if(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))Oe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){if(this.boundingSphere===null)this.boundingSphere=new jt;let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Oe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(e){let i=this.boundingSphere.center;if(Bi.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let o=t[n];if(zo.setFromBufferAttribute(o),this.morphTargetsRelative)li.addVectors(Bi.min,zo.min),Bi.expandByPoint(li),li.addVectors(Bi.max,zo.max),Bi.expandByPoint(li);else Bi.expandByPoint(zo.min),Bi.expandByPoint(zo.max)}Bi.getCenter(i);let r=0;for(let n=0,s=e.count;n<s;n++)li.fromBufferAttribute(e,n),r=Math.max(r,i.distanceToSquared(li));if(t)for(let n=0,s=t.length;n<s;n++){let o=t[n],a=this.morphTargetsRelative;for(let l=0,c=o.count;l<c;l++){if(li.fromBufferAttribute(o,l),a)gs.fromBufferAttribute(e,l),li.add(gs);r=Math.max(r,i.distanceToSquared(li))}}if(this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius))Oe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Oe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let{position:i,normal:r,uv:n}=t,s=this.getAttribute("tangent");if(s===void 0||s.count!==i.count)s=new Yt(new Float32Array(4*i.count),4),this.setAttribute("tangent",s);let o=[],a=[],l=new Uint8Array(i.count);for(let b=0;b<i.count;b++)o[b]=new R,a[b]=new R;let c=new R,u=new R,f=new R,h=new J,d=new J,x=new J,y=new R,p=new R;function m(b,N,q){l[b]=l[N]=l[q]=1,c.fromBufferAttribute(i,b),u.fromBufferAttribute(i,N),f.fromBufferAttribute(i,q),h.fromBufferAttribute(n,b),d.fromBufferAttribute(n,N),x.fromBufferAttribute(n,q),u.sub(c),f.sub(c),d.sub(h),x.sub(h);let U=1/(d.x*x.y-x.x*d.y);if(!isFinite(U))return;y.copy(u).multiplyScalar(x.y).addScaledVector(f,-d.y).multiplyScalar(U),p.copy(f).multiplyScalar(d.x).addScaledVector(u,-x.x).multiplyScalar(U),o[b].add(y),o[N].add(y),o[q].add(y),a[b].add(p),a[N].add(p),a[q].add(p)}let T=this.groups;if(T.length===0)T=[{start:0,count:e.count}];for(let b=0,N=T.length;b<N;++b){let q=T[b],{start:U,count:z}=q;for(let ne=U,D=U+z;ne<D;ne+=3)m(e.getX(ne+0),e.getX(ne+1),e.getX(ne+2))}let E=new R,S=new R,C=new R,L=new R;function g(b){C.fromBufferAttribute(r,b),L.copy(C);let N=o[b];E.copy(N),E.sub(C.multiplyScalar(C.dot(N))).normalize(),S.crossVectors(L,N);let U=S.dot(a[b])<0?-1:1;s.setXYZW(b,E.x,E.y,E.z,U)}for(let b=0,N=i.count;b<N;++b)if(l[b])g(b);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new Yt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,h=i.count;f<h;f++)i.setXYZ(f,0,0,0);let r=new R,n=new R,s=new R,o=new R,a=new R,l=new R,c=new R,u=new R;if(e)for(let f=0,h=e.count;f<h;f+=3){let d=e.getX(f+0),x=e.getX(f+1),y=e.getX(f+2);r.fromBufferAttribute(t,d),n.fromBufferAttribute(t,x),s.fromBufferAttribute(t,y),c.subVectors(s,n),u.subVectors(r,n),c.cross(u),o.fromBufferAttribute(i,d),a.fromBufferAttribute(i,x),l.fromBufferAttribute(i,y),o.add(c),a.add(c),l.add(c),i.setXYZ(d,o.x,o.y,o.z),i.setXYZ(x,a.x,a.y,a.z),i.setXYZ(y,l.x,l.y,l.z)}else for(let f=0,h=t.count;f<h;f+=3)r.fromBufferAttribute(t,f+0),n.fromBufferAttribute(t,f+1),s.fromBufferAttribute(t,f+2),c.subVectors(s,n),u.subVectors(r,n),c.cross(u),i.setXYZ(f+0,c.x,c.y,c.z),i.setXYZ(f+1,c.x,c.y,c.z),i.setXYZ(f+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)li.fromBufferAttribute(e,t),li.normalize(),e.setXYZ(t,li.x,li.y,li.z)}toNonIndexed(){function e(o,a){let{array:l,itemSize:c,normalized:u}=o,f=new l.constructor(a.length*c),h=0,d=0;for(let x=0,y=a.length;x<y;x++){if(o.isInterleavedBufferAttribute)h=a[x]*o.data.stride+o.offset;else h=a[x]*c;for(let p=0;p<c;p++)f[d++]=l[h++]}return new Yt(f,c,u)}if(this.index===null)return Ee("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new Ze,i=this.index.array,r=this.attributes;for(let o in r){let a=r[o],l=e(a,i);t.setAttribute(o,l)}let n=this.morphAttributes;for(let o in n){let a=[],l=n[o];for(let c=0,u=l.length;c<u;c++){let f=l[c],h=e(f,i);a.push(h)}t.morphAttributes[o]=a}t.morphTargetsRelative=this.morphTargetsRelative;let s=this.groups;for(let o=0,a=s.length;o<a;o++){let l=s[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0)e.userData=this.userData;if(this.parameters!==void 0&&this._transformed!==!0){let a=this.parameters;for(let l in a)if(a[l]!==void 0)e[l]=a[l];return e}e.data={attributes:{}};let t=this.index;if(t!==null)e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)};let i=this.attributes;for(let a in i){let l=i[a];e.data.attributes[a]=l.toJSON(e.data)}let r={},n=!1;for(let a in this.morphAttributes){let l=this.morphAttributes[a],c=[];for(let u=0,f=l.length;u<f;u++){let h=l[u];c.push(h.toJSON(e.data))}if(c.length>0)r[a]=c,n=!0}if(n)e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative;let s=this.groups;if(s.length>0)e.data.groups=JSON.parse(JSON.stringify(s));let o=this.boundingSphere;if(o!==null)e.data.boundingSphere=o.toJSON();return e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;if(i!==null)this.setIndex(i.clone());let r=e.attributes;for(let l in r){let c=r[l];this.setAttribute(l,c.clone(t))}let n=e.morphAttributes;for(let l in n){let c=[],u=n[l];for(let f=0,h=u.length;f<h;f++)c.push(u[f].clone(t));this.morphAttributes[l]=c}this.morphTargetsRelative=e.morphTargetsRelative;let s=e.groups;for(let l=0,c=s.length;l<c;l++){let u=s[l];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;if(o!==null)this.boundingBox=o.clone();let a=e.boundingSphere;if(a!==null)this.boundingSphere=a.clone();return this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class xs{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Lo,this.updateRanges=[],this.version=0,this.uuid=oi()}onUploadCallback(){}set needsUpdate(e){if(e===!0)this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,n=this.stride;r<n;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){if(e.arrayBuffers===void 0)e.arrayBuffers={};let t=nu(this.array);if(e.arrayBuffers[t]===void 0)e.arrayBuffers[t]=this.array.slice(0).buffer;let i=new this.array.constructor(e.arrayBuffers[t]),r=new this.constructor(i,this.stride);return r.setUsage(this.usage),r}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){if(e.arrayBuffers===void 0)e.arrayBuffers={};let t=nu(this.array);if(e.arrayBuffers[t]===void 0)e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer));let i={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return i.usage=this.usage,i}}function nu(e){if(e.buffer._uuid===void 0)e.buffer._uuid=oi();if(e.byteOffset===0&&e.byteLength===e.buffer.byteLength)return e.buffer._uuid;return e.buffer._uuid+":"+e.byteOffset+":"+e.byteLength}var wi=new R;class mn{constructor(e,t,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=r,this._normalizationScale=e!==void 0?rs(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)wi.fromBufferAttribute(this,t),wi.applyMatrix4(e),this.setXYZ(t,wi.x,wi.y,wi.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)wi.fromBufferAttribute(this,t),wi.applyNormalMatrix(e),this.setXYZ(t,wi.x,wi.y,wi.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)wi.fromBufferAttribute(this,t),wi.transformDirection(e),this.setXYZ(t,wi.x,wi.y,wi.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];if(this.normalized)i=this._denormalize(i);return i}setComponent(e,t,i){if(this.normalized)i=this._normalize(i);return this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){if(this.normalized)t=this._normalize(t);return this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){if(this.normalized)t=this._normalize(t);return this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){if(this.normalized)t=this._normalize(t);return this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){if(this.normalized)t=this._normalize(t);return this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];if(this.normalized)t=this._denormalize(t);return t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];if(this.normalized)t=this._denormalize(t);return t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];if(this.normalized)t=this._denormalize(t);return t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];if(this.normalized)t=this._denormalize(t);return t}setXY(e,t,i){if(e=e*this.data.stride+this.offset,this.normalized)t=this._normalize(t),i=this._normalize(i);return this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,r){if(e=e*this.data.stride+this.offset,this.normalized)t=this._normalize(t),i=this._normalize(i),r=this._normalize(r);return this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,t,i,r,n){if(e=e*this.data.stride+this.offset,this.normalized)t=this._normalize(t),i=this._normalize(i),r=this._normalize(r),n=this._normalize(n);return this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=n,this}clone(e){if(e===void 0){an("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let r=i*this.data.stride+this.offset;for(let n=0;n<this.itemSize;n++)t.push(this.data.array[r+n])}return new Yt(new this.array.constructor(t),this.itemSize,this.normalized)}else{if(e.interleavedBuffers===void 0)e.interleavedBuffers={};if(e.interleavedBuffers[this.data.uuid]===void 0)e.interleavedBuffers[this.data.uuid]=this.data.clone(e);return new mn(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}}toJSON(e){if(e===void 0){an("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let r=i*this.data.stride+this.offset;for(let n=0;n<this.itemSize;n++)t.push(this.data.array[r+n])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else{if(e.interleavedBuffers===void 0)e.interleavedBuffers={};if(e.interleavedBuffers[this.data.uuid]===void 0)e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e);return{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Wa(e,this.data.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):Xa(e,this.data.array)}}var xc=new R,eg=new R,tg=new Qe;class Ai{constructor(e=new R(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let r=xc.subVectors(i,t).cross(eg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let r=e.delta(xc),n=this.normal.dot(r);if(n===0){if(this.distanceToPoint(e.start)===0)return t.copy(e.start);return null}let s=-(e.start.dot(this.normal)+this.constant)/n;if(i===!0&&(s<0||s>1))return null;return t.copy(e.start).addScaledVector(r,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||tg.getNormalMatrix(e),r=this.coplanarPoint(xc).applyMatrix4(e),n=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(n),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}var ig=0;class Ut extends $t{constructor(){super();this.isMaterial=!0,Object.defineProperty(this,"id",{value:ig++}),this.uuid=oi(),this.name="",this.type="Material",this.blending=Lr,this.side=ki,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ea,this.blendDst=wa,this.blendEquation=Dr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new de(0,0,0),this.blendAlpha=0,this.depthFunc=Nr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Dh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=za,this.stencilZFail=za,this.stencilZPass=za,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){if(this._alphaTest>0!==e>0)this.version++;this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e===void 0)return;for(let t in e){let i=e[t];if(i===void 0){Ee(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){Ee(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}if(r&&r.isColor)r.set(i);else if(r&&r.isVector2&&(i&&i.isVector2)||r&&r.isEuler&&(i&&i.isEuler)||r&&r.isVector3&&(i&&i.isVector3))r.copy(i);else this[t]=i}}toJSON(e){let t=e===void 0||typeof e==="string";if(t)e={textures:{},images:{}};let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};if(i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor)i.color=this.color.getHex();if(this.roughness!==void 0)i.roughness=this.roughness;if(this.metalness!==void 0)i.metalness=this.metalness;if(this.sheen!==void 0)i.sheen=this.sheen;if(this.sheenColor&&this.sheenColor.isColor)i.sheenColor=this.sheenColor.getHex();if(this.sheenRoughness!==void 0)i.sheenRoughness=this.sheenRoughness;if(this.emissive&&this.emissive.isColor)i.emissive=this.emissive.getHex();if(this.emissiveIntensity!==void 0)i.emissiveIntensity=this.emissiveIntensity;if(this.specular&&this.specular.isColor)i.specular=this.specular.getHex();if(this.specularIntensity!==void 0)i.specularIntensity=this.specularIntensity;if(this.specularColor&&this.specularColor.isColor)i.specularColor=this.specularColor.getHex();if(this.shininess!==void 0)i.shininess=this.shininess;if(this.clearcoat!==void 0)i.clearcoat=this.clearcoat;if(this.clearcoatRoughness!==void 0)i.clearcoatRoughness=this.clearcoatRoughness;if(this.diffuseRoughness!==void 0)i.diffuseRoughness=this.diffuseRoughness;if(this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture)i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid;if(this.clearcoatMap&&this.clearcoatMap.isTexture)i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid;if(this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture)i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid;if(this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture)i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray();if(this.sheenColorMap&&this.sheenColorMap.isTexture)i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid;if(this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture)i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid;if(this.dispersion!==void 0)i.dispersion=this.dispersion;if(this.retroreflectivity!==void 0)i.retroreflectivity=this.retroreflectivity;if(this.iridescence!==void 0)i.iridescence=this.iridescence;if(this.iridescenceIOR!==void 0)i.iridescenceIOR=this.iridescenceIOR;if(this.iridescenceThicknessMinimum!==void 0)i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum;if(this.iridescenceThicknessMaximum!==void 0)i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum;if(this.iridescenceMap&&this.iridescenceMap.isTexture)i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid;if(this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture)i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid;if(this.anisotropy!==void 0)i.anisotropy=this.anisotropy;if(this.anisotropyRotation!==void 0)i.anisotropyRotation=this.anisotropyRotation;if(this.anisotropyMap&&this.anisotropyMap.isTexture)i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid;if(this.map&&this.map.isTexture)i.map=this.map.toJSON(e).uuid;if(this.matcap&&this.matcap.isTexture)i.matcap=this.matcap.toJSON(e).uuid;if(this.alphaMap&&this.alphaMap.isTexture)i.alphaMap=this.alphaMap.toJSON(e).uuid;if(this.lightMap&&this.lightMap.isTexture)i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity;if(this.aoMap&&this.aoMap.isTexture)i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity;if(this.bumpMap&&this.bumpMap.isTexture)i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale;if(this.normalMap&&this.normalMap.isTexture)i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray();if(this.displacementMap&&this.displacementMap.isTexture)i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias;if(this.roughnessMap&&this.roughnessMap.isTexture)i.roughnessMap=this.roughnessMap.toJSON(e).uuid;if(this.metalnessMap&&this.metalnessMap.isTexture)i.metalnessMap=this.metalnessMap.toJSON(e).uuid;if(this.emissiveMap&&this.emissiveMap.isTexture)i.emissiveMap=this.emissiveMap.toJSON(e).uuid;if(this.specularMap&&this.specularMap.isTexture)i.specularMap=this.specularMap.toJSON(e).uuid;if(this.specularIntensityMap&&this.specularIntensityMap.isTexture)i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid;if(this.specularColorMap&&this.specularColorMap.isTexture)i.specularColorMap=this.specularColorMap.toJSON(e).uuid;if(this.envMap&&this.envMap.isTexture){if(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0)i.combine=this.combine}if(this.envMapRotation!==void 0)i.envMapRotation=this.envMapRotation.toArray();if(this.envMapIntensity!==void 0)i.envMapIntensity=this.envMapIntensity;if(this.reflectivity!==void 0)i.reflectivity=this.reflectivity;if(this.refractionRatio!==void 0)i.refractionRatio=this.refractionRatio;if(this.gradientMap&&this.gradientMap.isTexture)i.gradientMap=this.gradientMap.toJSON(e).uuid;if(this.transmission!==void 0)i.transmission=this.transmission;if(this.transmissionMap&&this.transmissionMap.isTexture)i.transmissionMap=this.transmissionMap.toJSON(e).uuid;if(this.thickness!==void 0)i.thickness=this.thickness;if(this.thicknessMap&&this.thicknessMap.isTexture)i.thicknessMap=this.thicknessMap.toJSON(e).uuid;if(this.attenuationDistance!==void 0)i.attenuationDistance=this.attenuationDistance;if(this.attenuationColor!==void 0)i.attenuationColor=this.attenuationColor.getHex();if(this.size!==void 0)i.size=this.size;if(this.sizeAttenuation!==void 0)i.sizeAttenuation=this.sizeAttenuation;if(Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0)i.clippingPlanes=this.clippingPlanes.map((n)=>n.toJSON());if(this.rotation!==void 0)i.rotation=this.rotation;if(this.depthPacking!==void 0)i.depthPacking=this.depthPacking;if(this.linewidth!==void 0)i.linewidth=this.linewidth;if(this.linecap!==void 0)i.linecap=this.linecap;if(this.linejoin!==void 0)i.linejoin=this.linejoin;if(this.dashSize!==void 0)i.dashSize=this.dashSize;if(this.gapSize!==void 0)i.gapSize=this.gapSize;if(this.scale!==void 0)i.scale=this.scale;if(this.wireframe!==void 0)i.wireframe=this.wireframe;if(this.wireframeLinewidth!==void 0)i.wireframeLinewidth=this.wireframeLinewidth;if(this.wireframeLinecap!==void 0)i.wireframeLinecap=this.wireframeLinecap;if(this.wireframeLinejoin!==void 0)i.wireframeLinejoin=this.wireframeLinejoin;if(this.flatShading!==void 0)i.flatShading=this.flatShading;if(this.fog!==void 0)i.fog=this.fog;if(Object.keys(this.userData).length>0)i.userData=this.userData;function r(n){let s=[];for(let o in n){let a=n[o];delete a.metadata,s.push(a)}return s}if(t){let n=r(e.textures),s=r(e.images);if(n.length>0)i.textures=n;if(s.length>0)i.images=s}return i}fromJSON(e,t){if(e.uuid!==void 0)this.uuid=e.uuid;if(e.name!==void 0)this.name=e.name;if(e.color!==void 0&&this.color!==void 0)this.color.setHex(e.color);if(e.roughness!==void 0)this.roughness=e.roughness;if(e.metalness!==void 0)this.metalness=e.metalness;if(e.sheen!==void 0)this.sheen=e.sheen;if(e.sheenColor!==void 0)this.sheenColor=new de().setHex(e.sheenColor);if(e.sheenRoughness!==void 0)this.sheenRoughness=e.sheenRoughness;if(e.emissive!==void 0&&this.emissive!==void 0)this.emissive.setHex(e.emissive);if(e.specular!==void 0&&this.specular!==void 0)this.specular.setHex(e.specular);if(e.specularIntensity!==void 0)this.specularIntensity=e.specularIntensity;if(e.specularColor!==void 0&&this.specularColor!==void 0)this.specularColor.setHex(e.specularColor);if(e.shininess!==void 0)this.shininess=e.shininess;if(e.clearcoat!==void 0)this.clearcoat=e.clearcoat;if(e.clearcoatRoughness!==void 0)this.clearcoatRoughness=e.clearcoatRoughness;if(e.diffuseRoughness!==void 0)this.diffuseRoughness=e.diffuseRoughness;if(e.dispersion!==void 0)this.dispersion=e.dispersion;if(e.retroreflectivity!==void 0)this.retroreflectivity=e.retroreflectivity;if(e.iridescence!==void 0)this.iridescence=e.iridescence;if(e.iridescenceIOR!==void 0)this.iridescenceIOR=e.iridescenceIOR;if(e.iridescenceThicknessMinimum!==void 0)this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum;if(e.iridescenceThicknessMaximum!==void 0)this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum;if(e.iridescenceThicknessRange!==void 0)this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1];if(e.transmission!==void 0)this.transmission=e.transmission;if(e.thickness!==void 0)this.thickness=e.thickness;if(e.attenuationDistance!==void 0)this.attenuationDistance=e.attenuationDistance;if(e.attenuationColor!==void 0&&this.attenuationColor!==void 0)this.attenuationColor.setHex(e.attenuationColor);if(e.anisotropy!==void 0)this.anisotropy=e.anisotropy;if(e.anisotropyRotation!==void 0)this.anisotropyRotation=e.anisotropyRotation;if(e.fog!==void 0)this.fog=e.fog;if(e.flatShading!==void 0)this.flatShading=e.flatShading;if(e.blending!==void 0)this.blending=e.blending;if(e.combine!==void 0)this.combine=e.combine;if(e.side!==void 0)this.side=e.side;if(e.shadowSide!==void 0)this.shadowSide=e.shadowSide;if(e.opacity!==void 0)this.opacity=e.opacity;if(e.transparent!==void 0)this.transparent=e.transparent;if(e.alphaTest!==void 0)this.alphaTest=e.alphaTest;if(e.alphaHash!==void 0)this.alphaHash=e.alphaHash;if(e.depthFunc!==void 0)this.depthFunc=e.depthFunc;if(e.depthTest!==void 0)this.depthTest=e.depthTest;if(e.depthWrite!==void 0)this.depthWrite=e.depthWrite;if(e.colorWrite!==void 0)this.colorWrite=e.colorWrite;if(e.clippingPlanes!==void 0)this.clippingPlanes=e.clippingPlanes.map((i)=>new Ai().fromJSON(i));if(e.clipIntersection!==void 0)this.clipIntersection=e.clipIntersection;if(e.clipShadows!==void 0)this.clipShadows=e.clipShadows;if(e.depthPacking!==void 0)this.depthPacking=e.depthPacking;if(e.blendSrc!==void 0)this.blendSrc=e.blendSrc;if(e.blendDst!==void 0)this.blendDst=e.blendDst;if(e.blendEquation!==void 0)this.blendEquation=e.blendEquation;if(e.blendSrcAlpha!==void 0)this.blendSrcAlpha=e.blendSrcAlpha;if(e.blendDstAlpha!==void 0)this.blendDstAlpha=e.blendDstAlpha;if(e.blendEquationAlpha!==void 0)this.blendEquationAlpha=e.blendEquationAlpha;if(e.blendColor!==void 0&&this.blendColor!==void 0)this.blendColor.setHex(e.blendColor);if(e.blendAlpha!==void 0)this.blendAlpha=e.blendAlpha;if(e.stencilWriteMask!==void 0)this.stencilWriteMask=e.stencilWriteMask;if(e.stencilFunc!==void 0)this.stencilFunc=e.stencilFunc;if(e.stencilRef!==void 0)this.stencilRef=e.stencilRef;if(e.stencilFuncMask!==void 0)this.stencilFuncMask=e.stencilFuncMask;if(e.stencilFail!==void 0)this.stencilFail=e.stencilFail;if(e.stencilZFail!==void 0)this.stencilZFail=e.stencilZFail;if(e.stencilZPass!==void 0)this.stencilZPass=e.stencilZPass;if(e.stencilWrite!==void 0)this.stencilWrite=e.stencilWrite;if(e.wireframe!==void 0)this.wireframe=e.wireframe;if(e.wireframeLinewidth!==void 0)this.wireframeLinewidth=e.wireframeLinewidth;if(e.wireframeLinecap!==void 0)this.wireframeLinecap=e.wireframeLinecap;if(e.wireframeLinejoin!==void 0)this.wireframeLinejoin=e.wireframeLinejoin;if(e.rotation!==void 0)this.rotation=e.rotation;if(e.linewidth!==void 0)this.linewidth=e.linewidth;if(e.linecap!==void 0)this.linecap=e.linecap;if(e.linejoin!==void 0)this.linejoin=e.linejoin;if(e.dashSize!==void 0)this.dashSize=e.dashSize;if(e.gapSize!==void 0)this.gapSize=e.gapSize;if(e.scale!==void 0)this.scale=e.scale;if(e.polygonOffset!==void 0)this.polygonOffset=e.polygonOffset;if(e.polygonOffsetFactor!==void 0)this.polygonOffsetFactor=e.polygonOffsetFactor;if(e.polygonOffsetUnits!==void 0)this.polygonOffsetUnits=e.polygonOffsetUnits;if(e.dithering!==void 0)this.dithering=e.dithering;if(e.alphaToCoverage!==void 0)this.alphaToCoverage=e.alphaToCoverage;if(e.premultipliedAlpha!==void 0)this.premultipliedAlpha=e.premultipliedAlpha;if(e.forceSinglePass!==void 0)this.forceSinglePass=e.forceSinglePass;if(e.allowOverride!==void 0)this.allowOverride=e.allowOverride;if(e.visible!==void 0)this.visible=e.visible;if(e.toneMapped!==void 0)this.toneMapped=e.toneMapped;if(e.userData!==void 0)this.userData=e.userData;if(e.vertexColors!==void 0)if(typeof e.vertexColors==="number")this.vertexColors=e.vertexColors>0;else this.vertexColors=e.vertexColors;if(e.size!==void 0)this.size=e.size;if(e.sizeAttenuation!==void 0)this.sizeAttenuation=e.sizeAttenuation;if(e.map!==void 0)this.map=t[e.map]||null;if(e.matcap!==void 0)this.matcap=t[e.matcap]||null;if(e.alphaMap!==void 0)this.alphaMap=t[e.alphaMap]||null;if(e.bumpMap!==void 0)this.bumpMap=t[e.bumpMap]||null;if(e.bumpScale!==void 0)this.bumpScale=e.bumpScale;if(e.normalMap!==void 0)this.normalMap=t[e.normalMap]||null;if(e.normalMapType!==void 0)this.normalMapType=e.normalMapType;if(e.normalScale!==void 0){let i=e.normalScale;if(Array.isArray(i)===!1)i=[i,i];this.normalScale=new J().fromArray(i)}if(e.displacementMap!==void 0)this.displacementMap=t[e.displacementMap]||null;if(e.displacementScale!==void 0)this.displacementScale=e.displacementScale;if(e.displacementBias!==void 0)this.displacementBias=e.displacementBias;if(e.roughnessMap!==void 0)this.roughnessMap=t[e.roughnessMap]||null;if(e.metalnessMap!==void 0)this.metalnessMap=t[e.metalnessMap]||null;if(e.emissiveMap!==void 0)this.emissiveMap=t[e.emissiveMap]||null;if(e.emissiveIntensity!==void 0)this.emissiveIntensity=e.emissiveIntensity;if(e.specularMap!==void 0)this.specularMap=t[e.specularMap]||null;if(e.specularIntensityMap!==void 0)this.specularIntensityMap=t[e.specularIntensityMap]||null;if(e.specularColorMap!==void 0)this.specularColorMap=t[e.specularColorMap]||null;if(e.envMap!==void 0)this.envMap=t[e.envMap]||null;if(e.envMapRotation!==void 0)this.envMapRotation.fromArray(e.envMapRotation);if(e.envMapIntensity!==void 0)this.envMapIntensity=e.envMapIntensity;if(e.reflectivity!==void 0)this.reflectivity=e.reflectivity;if(e.refractionRatio!==void 0)this.refractionRatio=e.refractionRatio;if(e.lightMap!==void 0)this.lightMap=t[e.lightMap]||null;if(e.lightMapIntensity!==void 0)this.lightMapIntensity=e.lightMapIntensity;if(e.aoMap!==void 0)this.aoMap=t[e.aoMap]||null;if(e.aoMapIntensity!==void 0)this.aoMapIntensity=e.aoMapIntensity;if(e.gradientMap!==void 0)this.gradientMap=t[e.gradientMap]||null;if(e.clearcoatMap!==void 0)this.clearcoatMap=t[e.clearcoatMap]||null;if(e.clearcoatRoughnessMap!==void 0)this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null;if(e.clearcoatNormalMap!==void 0)this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null;if(e.clearcoatNormalScale!==void 0)this.clearcoatNormalScale=new J().fromArray(e.clearcoatNormalScale);if(e.diffuseRoughnessMap!==void 0)this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null;if(e.iridescenceMap!==void 0)this.iridescenceMap=t[e.iridescenceMap]||null;if(e.iridescenceThicknessMap!==void 0)this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null;if(e.transmissionMap!==void 0)this.transmissionMap=t[e.transmissionMap]||null;if(e.thicknessMap!==void 0)this.thicknessMap=t[e.thicknessMap]||null;if(e.anisotropyMap!==void 0)this.anisotropyMap=t[e.anisotropyMap]||null;if(e.sheenColorMap!==void 0)this.sheenColorMap=t[e.sheenColorMap]||null;if(e.sheenRoughnessMap!==void 0)this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null;return this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let r=t.length;i=Array(r);for(let n=0;n!==r;++n)i[n]=t[n].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){if(e===!0)this.version++}}class Gr extends Ut{constructor(e){super();this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new de(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}var _s,Go=new R,vs=new R,ys=new R,Ms=new J,Vo=new J,au=new Je,el=new R,Ho=new R,tl=new R,su=new J,_c=new J,ou=new J;class Ss extends ct{constructor(e=new Gr){super();if(this.isSprite=!0,this.type="Sprite",_s===void 0){_s=new Ze;let t=new Float32Array([-0.5,-0.5,0,0,0,0.5,-0.5,0,1,0,0.5,0.5,0,1,1,-0.5,0.5,0,0,1]),i=new xs(t,5);_s.setIndex([0,1,2,0,2,3]),_s.setAttribute("position",new mn(i,3,0,!1)),_s.setAttribute("uv",new mn(i,2,3,!1))}this.geometry=_s,this.material=e,this.center=new J(0.5,0.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){if(e.camera===null)Oe('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.');if(vs.setFromMatrixScale(this.matrixWorld),au.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),ys.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1)vs.multiplyScalar(-ys.z);let i=this.material.rotation,r,n;if(i!==0)n=Math.cos(i),r=Math.sin(i);let s=this.center;il(el.set(-0.5,-0.5,0),ys,s,vs,r,n),il(Ho.set(0.5,-0.5,0),ys,s,vs,r,n),il(tl.set(0.5,0.5,0),ys,s,vs,r,n),su.set(0,0),_c.set(1,0),ou.set(1,1);let o=e.ray.intersectTriangle(el,Ho,tl,!1,Go);if(o===null){if(il(Ho.set(-0.5,0.5,0),ys,s,vs,r,n),_c.set(0,1),o=e.ray.intersectTriangle(el,tl,Ho,!1,Go),o===null)return}let a=e.ray.origin.distanceTo(Go);if(a<e.near||a>e.far)return;t.push({distance:a,point:Go.clone(),uv:vi.getInterpolation(Go,el,Ho,tl,su,_c,ou,new J),face:null,object:this})}copy(e,t){if(super.copy(e,t),e.center!==void 0)this.center.copy(e.center);return this.material=e.material,this}toJSON(e){let t=super.toJSON(e);return t.object.center=this.center.toArray(),t}}function il(e,t,i,r,n,s){if(Ms.subVectors(e,i).addScalar(0.5).multiply(r),n!==void 0)Vo.x=s*Ms.x-n*Ms.y,Vo.y=n*Ms.x+s*Ms.y;else Vo.copy(Ms);e.copy(t),e.x+=Vo.x,e.y+=Vo.y,e.applyMatrix4(au)}var Tr=new R,vc=new R,rl=new R,nl=new R;class dr{constructor(e=new R,t=new R(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Tr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);if(i<0)return t.copy(this.origin);return t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Tr.subVectors(e,this.origin).dot(this.direction);if(t<0)return this.origin.distanceToSquared(e);return Tr.copy(this.origin).addScaledVector(this.direction,t),Tr.distanceToSquared(e)}distanceSqToSegment(e,t,i,r){vc.copy(e).add(t).multiplyScalar(0.5),rl.copy(t).sub(e).normalize(),nl.copy(this.origin).sub(vc);let n=e.distanceTo(t)*0.5,s=-this.direction.dot(rl),o=nl.dot(this.direction),a=-nl.dot(rl),l=nl.lengthSq(),c=Math.abs(1-s*s),u,f,h,d;if(c>0)if(u=s*a-o,f=s*o-a,d=n*c,u>=0)if(f>=-d)if(f<=d){let x=1/c;u*=x,f*=x,h=u*(u+s*f+2*o)+f*(s*u+f+2*a)+l}else f=n,u=Math.max(0,-(s*f+o)),h=-u*u+f*(f+2*a)+l;else f=-n,u=Math.max(0,-(s*f+o)),h=-u*u+f*(f+2*a)+l;else if(f<=-d)u=Math.max(0,-(-s*n+o)),f=u>0?-n:Math.min(Math.max(-n,-a),n),h=-u*u+f*(f+2*a)+l;else if(f<=d)u=0,f=Math.min(Math.max(-n,-a),n),h=f*(f+2*a)+l;else u=Math.max(0,-(s*n+o)),f=u>0?n:Math.min(Math.max(-n,-a),n),h=-u*u+f*(f+2*a)+l;else f=s>0?-n:n,u=Math.max(0,-(s*f+o)),h=-u*u+f*(f+2*a)+l;if(i)i.copy(this.origin).addScaledVector(this.direction,u);if(r)r.copy(vc).addScaledVector(rl,f);return h}intersectSphere(e,t){if(e.radius<0)return null;Tr.subVectors(e.center,this.origin);let i=Tr.dot(this.direction),r=Tr.dot(Tr)-i*i,n=e.radius*e.radius;if(r>n)return null;let s=Math.sqrt(n-r),o=i-s,a=i+s;if(a<0)return null;if(o<0)return this.at(a,t);return this.at(o,t)}intersectsSphere(e){if(e.radius<0)return!1;return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0){if(e.distanceToPoint(this.origin)===0)return 0;return null}let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);if(i===null)return null;return this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);if(t===0)return!0;if(e.normal.dot(this.direction)*t<0)return!0;return!1}intersectBox(e,t){let i,r,n,s,o,a,l=1/this.direction.x,c=1/this.direction.y,u=1/this.direction.z,f=this.origin;if(l>=0)i=(e.min.x-f.x)*l,r=(e.max.x-f.x)*l;else i=(e.max.x-f.x)*l,r=(e.min.x-f.x)*l;if(c>=0)n=(e.min.y-f.y)*c,s=(e.max.y-f.y)*c;else n=(e.max.y-f.y)*c,s=(e.min.y-f.y)*c;if(i>s||n>r)return null;if(n>i||isNaN(i))i=n;if(s<r||isNaN(r))r=s;if(u>=0)o=(e.min.z-f.z)*u,a=(e.max.z-f.z)*u;else o=(e.max.z-f.z)*u,a=(e.min.z-f.z)*u;if(i>a||o>r)return null;if(o>i||i!==i)i=o;if(a<r||r!==r)r=a;if(r<0)return null;return this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Tr)!==null}intersectTriangle(e,t,i,r,n){let s=this.origin,o=this.direction,{x:a,y:l,z:c}=o,u=e.x-s.x,f=e.y-s.y,h=e.z-s.z,d=t.x-s.x,x=t.y-s.y,y=t.z-s.z,p=i.x-s.x,m=i.y-s.y,T=i.z-s.z,E=Math.abs(a),S=Math.abs(l),C=Math.abs(c),L,g,b,N,q,U,z,ne,D,ee,re,W;if(E>=S&&E>=C)if(b=a,U=u,D=d,W=p,a>=0)L=l,g=c,N=f,q=h,z=x,ne=y,ee=m,re=T;else L=c,g=l,N=h,q=f,z=y,ne=x,ee=T,re=m;else if(S>=C)if(b=l,U=f,D=x,W=m,l>=0)L=c,g=a,N=h,q=u,z=y,ne=d,ee=T,re=p;else L=a,g=c,N=u,q=h,z=d,ne=y,ee=p,re=T;else if(b=c,U=h,D=y,W=T,c>=0)L=a,g=l,N=u,q=f,z=d,ne=x,ee=p,re=m;else L=l,g=a,N=f,q=u,z=x,ne=d,ee=m,re=p;if(b===0)return null;let pe=L/b,Q=g/b,oe=1/b,ue=N-pe*U,Se=q-Q*U,ae=z-pe*D,fe=ne-Q*D,ze=ee-pe*W,Ke=re-Q*W,$e=ze*fe-Ke*ae,Ne=ue*Ke-Se*ze,_t=ae*Se-fe*ue;if(r){if($e<0||Ne<0||_t<0)return null}else if(($e<0||Ne<0||_t<0)&&($e>0||Ne>0||_t>0))return null;let tt=$e+Ne+_t;if(tt===0)return null;let it=oe*($e*U+Ne*D+_t*W);if(tt>0?it<0:it>0)return null;return this.at(it/tt,n)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class zt extends Ut{constructor(e){super();this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new de(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xi,this.combine=$r,this.reflectivity=1,this.refractionRatio=0.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}var lu=new Je,gn=new dr,sl=new jt,cu=new R,ol=new R,al=new R,ll=new R,yc=new R,cl=new R,hu=new R,hl=new R;class et extends ct{constructor(e=new Ze,t=new zt){super();this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){if(super.copy(e,t),e.morphTargetInfluences!==void 0)this.morphTargetInfluences=e.morphTargetInfluences.slice();else this.morphTargetInfluences=void 0;if(e.morphTargetDictionary!==void 0)this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary);else this.morphTargetDictionary=void 0;return this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let n=0,s=r.length;n<s;n++){let o=r[n].name||String(n);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=n}}}}getVertexPosition(e,t){let i=this.geometry,r=i.attributes.position,n=i.morphAttributes.position,s=i.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(n&&o){cl.set(0,0,0);for(let a=0,l=n.length;a<l;a++){let c=o[a],u=n[a];if(c===0)continue;if(yc.fromBufferAttribute(u,e),s)cl.addScaledVector(yc,c);else cl.addScaledVector(yc.sub(t),c)}t.add(cl)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,r=this.material,n=this.matrixWorld;if(r===void 0)return;if(i.boundingSphere===null)i.computeBoundingSphere();if(sl.copy(i.boundingSphere),sl.applyMatrix4(n),gn.copy(e.ray).recast(e.near),sl.containsPoint(gn.origin)===!1){if(gn.intersectSphere(sl,cu)===null)return;if(gn.origin.distanceToSquared(cu)>(e.far-e.near)**2)return}if(lu.copy(n).invert(),gn.copy(e.ray).applyMatrix4(lu),i.boundingBox!==null){if(gn.intersectsBox(i.boundingBox)===!1)return}this._computeIntersections(e,t,gn)}_computeIntersections(e,t,i){let r,n=this.geometry,s=this.material,o=n.index,a=n.attributes.position,l=n.attributes.uv,c=n.attributes.uv1,u=n.attributes.normal,{groups:f,drawRange:h}=n;if(o!==null)if(Array.isArray(s))for(let d=0,x=f.length;d<x;d++){let y=f[d],p=s[y.materialIndex],m=Math.max(y.start,h.start),T=Math.min(o.count,Math.min(y.start+y.count,h.start+h.count));for(let E=m,S=T;E<S;E+=3){let C=o.getX(E),L=o.getX(E+1),g=o.getX(E+2);if(r=ul(this,p,e,i,l,c,u,C,L,g),r)r.faceIndex=Math.floor(E/3),r.face.materialIndex=y.materialIndex,t.push(r)}}else{let d=Math.max(0,h.start),x=Math.min(o.count,h.start+h.count);for(let y=d,p=x;y<p;y+=3){let m=o.getX(y),T=o.getX(y+1),E=o.getX(y+2);if(r=ul(this,s,e,i,l,c,u,m,T,E),r)r.faceIndex=Math.floor(y/3),t.push(r)}}else if(a!==void 0)if(Array.isArray(s))for(let d=0,x=f.length;d<x;d++){let y=f[d],p=s[y.materialIndex],m=Math.max(y.start,h.start),T=Math.min(a.count,Math.min(y.start+y.count,h.start+h.count));for(let E=m,S=T;E<S;E+=3){let C=E,L=E+1,g=E+2;if(r=ul(this,p,e,i,l,c,u,C,L,g),r)r.faceIndex=Math.floor(E/3),r.face.materialIndex=y.materialIndex,t.push(r)}}else{let d=Math.max(0,h.start),x=Math.min(a.count,h.start+h.count);for(let y=d,p=x;y<p;y+=3){let m=y,T=y+1,E=y+2;if(r=ul(this,s,e,i,l,c,u,m,T,E),r)r.faceIndex=Math.floor(y/3),t.push(r)}}}}function rg(e,t,i,r,n,s,o,a){let l;if(t.side===Bt)l=r.intersectTriangle(o,s,n,!0,a);else l=r.intersectTriangle(n,s,o,t.side===ki,a);if(l===null)return null;hl.copy(a),hl.applyMatrix4(e.matrixWorld);let c=i.ray.origin.distanceTo(hl);if(c<i.near||c>i.far)return null;return{distance:c,point:hl.clone(),object:e}}function ul(e,t,i,r,n,s,o,a,l,c){e.getVertexPosition(a,ol),e.getVertexPosition(l,al),e.getVertexPosition(c,ll);let u=rg(e,t,i,r,ol,al,ll,hu);if(u){let f=new R;if(vi.getBarycoord(hu,ol,al,ll,f),n)u.uv=vi.getInterpolatedAttribute(n,a,l,c,f,new J);if(s)u.uv1=vi.getInterpolatedAttribute(s,a,l,c,f,new J);if(o){if(u.normal=vi.getInterpolatedAttribute(o,a,l,c,f,new R),u.normal.dot(r.direction)>0)u.normal.multiplyScalar(-1)}let h={a,b:l,c,normal:new R,materialIndex:0};vi.getNormal(ol,al,ll,h.normal),u.face=h,u.barycoord=f}return u}class pr extends Et{constructor(e=null,t=1,i=1,r,n,s,o,a,l=Nt,c=Nt,u,f){super(null,s,o,a,l,c,r,n,u,f);this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class xn extends Yt{constructor(e,t,i,r=1){super(e,t,i);this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}var bs=new Je,fu=new Je,fl=[],du=new yi,ng=new Je,ko=new et,Wo=new jt;class Xo extends et{constructor(e,t,i){super(e,t);this.isInstancedMesh=!0,this.instanceMatrix=new xn(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,ng)}computeBoundingBox(){let e=this.geometry,t=this.count;if(this.boundingBox===null)this.boundingBox=new yi;if(e.boundingBox===null)e.computeBoundingBox();this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,bs),du.copy(e.boundingBox).applyMatrix4(bs),this.boundingBox.union(du)}computeBoundingSphere(){let e=this.geometry,t=this.count;if(this.boundingSphere===null)this.boundingSphere=new jt;if(e.boundingSphere===null)e.computeBoundingSphere();this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,bs),Wo.copy(e.boundingSphere).applyMatrix4(bs),this.boundingSphere.union(Wo)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){if(this.instanceColor===null)return t.setRGB(1,1,1);else return t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,r=this.morphTexture.source.data.data,n=i.length+1,s=e*n+1;for(let o=0;o<i.length;o++)i[o]=r[s+o]}raycast(e,t){let i=this.matrixWorld,r=this.count;if(ko.geometry=this.geometry,ko.material=this.material,ko.material===void 0)return;if(this.boundingSphere===null)this.computeBoundingSphere();if(Wo.copy(this.boundingSphere),Wo.applyMatrix4(i),e.ray.intersectsSphere(Wo)===!1)return;for(let n=0;n<r;n++){this.getMatrixAt(n,bs),fu.multiplyMatrices(i,bs),ko.matrixWorld=fu,ko.raycast(e,fl);for(let s=0,o=fl.length;s<o;s++){let a=fl[s];a.instanceId=n,a.object=this,t.push(a)}fl.length=0}}setColorAt(e,t){if(this.instanceColor===null)this.instanceColor=new xn(new Float32Array(this.instanceMatrix.count*3).fill(1),3);return t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let i=t.morphTargetInfluences,r=i.length+1;if(this.morphTexture===null)this.morphTexture=new pr(new Float32Array(r*this.count),r,this.count,Zn,qt);let n=this.morphTexture.source.data.data,s=0;for(let l=0;l<i.length;l++)s+=i[l];let o=this.geometry.morphTargetsRelative?1:1-s,a=r*e;return n[a]=o,n.set(i,a+1),this}updateMorphTargets(){}dispose(){if(super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null)this.instanceColor.dispose();if(this.morphTexture!==null)this.morphTexture.dispose(),this.morphTexture=null}}var _n=new jt,sg=new J(0.5,0.5),dl=new R;class Ki{constructor(e=new Ai,t=new Ai,i=new Ai,r=new Ai,n=new Ai,s=new Ai){this.planes=[e,t,i,r,n,s]}set(e,t,i,r,n,s){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(n),o[5].copy(s),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=si,i=!1){let r=this.planes,n=e.elements,s=n[0],o=n[1],a=n[2],l=n[3],c=n[4],u=n[5],f=n[6],h=n[7],d=n[8],x=n[9],y=n[10],p=n[11],m=n[12],T=n[13],E=n[14],S=n[15];if(r[0].setComponents(l-s,h-c,p-d,S-m).normalize(),r[1].setComponents(l+s,h+c,p+d,S+m).normalize(),r[2].setComponents(l+o,h+u,p+x,S+T).normalize(),r[3].setComponents(l-o,h-u,p-x,S-T).normalize(),i)r[4].setComponents(a,f,y,E).normalize(),r[5].setComponents(l-a,h-f,p-y,S-E).normalize();else if(r[4].setComponents(l-a,h-f,p-y,S-E).normalize(),t===si)r[5].setComponents(l+a,h+f,p+y,S+E).normalize();else if(t===ur)r[5].setComponents(a,f,y,E).normalize();else throw Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0){if(e.boundingSphere===null)e.computeBoundingSphere();_n.copy(e.boundingSphere).applyMatrix4(e.matrixWorld)}else{let t=e.geometry;if(t.boundingSphere===null)t.computeBoundingSphere();_n.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(_n)}intersectsSprite(e){_n.center.set(0,0,0);let t=sg.distanceTo(e.center);return _n.radius=0.7071067811865476+t,_n.applyMatrix4(e.matrixWorld),this.intersectsSphere(_n)}intersectsSphere(e){let t=this.planes,i=e.center,r=-e.radius;for(let n=0;n<6;n++)if(t[n].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let r=t[i];if(dl.x=r.normal.x>0?e.max.x:e.min.x,dl.y=r.normal.y>0?e.max.y:e.min.y,dl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(dl)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}var pu=new Je;class Ts{constructor(){this.coordinateSystem=si,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,i=this._frustums;for(let r=0;r<t.length;r++){let n=t[r];if(pu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),i[r]===void 0)i[r]=new Ki;i[r].setFromProjectionMatrix(pu,n.coordinateSystem,n.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,i=e._frustums;for(let r=0;r<e._count;r++){if(t[r]===void 0)t[r]=new Ki;t[r].copy(i[r])}return this._count=e._count,this}clone(){return new Ts().copy(this)}}class pi extends Ut{constructor(e){super();this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new de(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}var gl=new R,xl=new R,mu=new Je,qo=new dr,pl=new jt,Mc=new R,gu=new R;class Er extends ct{constructor(e=new Ze,t=new pi){super();this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){if(super.copy(e,t),e.morphTargetInfluences!==void 0)this.morphTargetInfluences=e.morphTargetInfluences.slice();else this.morphTargetInfluences=void 0;if(e.morphTargetDictionary!==void 0)this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary);else this.morphTargetDictionary=void 0;return this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let r=1,n=t.count;r<n;r++)gl.fromBufferAttribute(t,r-1),xl.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=gl.distanceTo(xl);e.setAttribute("lineDistance",new Ge(i,1))}else Ee("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,r=this.matrixWorld,n=e.params.Line.threshold,s=i.drawRange;if(i.boundingSphere===null)i.computeBoundingSphere();if(pl.copy(i.boundingSphere),pl.applyMatrix4(r),pl.radius+=n,e.ray.intersectsSphere(pl)===!1)return;mu.copy(r).invert(),qo.copy(e.ray).applyMatrix4(mu);let o=n/((this.scale.x+this.scale.y+this.scale.z)/3),a=o*o,l=this.isLineSegments?2:1,c=i.index,f=i.attributes.position;if(c!==null){let h=Math.max(0,s.start),d=Math.min(c.count,s.start+s.count);for(let x=h,y=d-1;x<y;x+=l){let p=c.getX(x),m=c.getX(x+1),T=ml(this,e,qo,a,p,m,x);if(T)t.push(T)}if(this.isLineLoop){let x=c.getX(d-1),y=c.getX(h),p=ml(this,e,qo,a,x,y,d-1);if(p)t.push(p)}}else{let h=Math.max(0,s.start),d=Math.min(f.count,s.start+s.count);for(let x=h,y=d-1;x<y;x+=l){let p=ml(this,e,qo,a,x,x+1,x);if(p)t.push(p)}if(this.isLineLoop){let x=ml(this,e,qo,a,d-1,h,d-1);if(x)t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let n=0,s=r.length;n<s;n++){let o=r[n].name||String(n);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=n}}}}}function ml(e,t,i,r,n,s,o){let a=e.geometry.attributes.position;if(gl.fromBufferAttribute(a,n),xl.fromBufferAttribute(a,s),i.distanceSqToSegment(gl,xl,Mc,gu)>r)return;Mc.applyMatrix4(e.matrixWorld);let c=t.ray.origin.distanceTo(Mc);if(c<t.near||c>t.far)return;return{distance:c,point:gu.clone().applyMatrix4(e.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:e}}var xu=new R,_u=new R;class Ii extends Er{constructor(e,t){super(e,t);this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let r=0,n=t.count;r<n;r+=2)xu.fromBufferAttribute(t,r),_u.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+xu.distanceTo(_u);e.setAttribute("lineDistance",new Ge(i,1))}else Ee("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class vn extends Ut{constructor(e){super();this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new de(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}var vu=new Je,Sc=new dr,_l=new jt,vl=new R;class Yo extends ct{constructor(e=new Ze,t=new vn){super();this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){if(super.copy(e,t),e.morphTargetInfluences!==void 0)this.morphTargetInfluences=e.morphTargetInfluences.slice();else this.morphTargetInfluences=void 0;if(e.morphTargetDictionary!==void 0)this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary);else this.morphTargetDictionary=void 0;return this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,r=this.matrixWorld,n=e.params.Points.threshold,s=i.drawRange;if(i.boundingSphere===null)i.computeBoundingSphere();if(_l.copy(i.boundingSphere),_l.applyMatrix4(r),_l.radius+=n,e.ray.intersectsSphere(_l)===!1)return;vu.copy(r).invert(),Sc.copy(e.ray).applyMatrix4(vu);let o=n/((this.scale.x+this.scale.y+this.scale.z)/3),a=o*o,l=i.index,u=i.attributes.position;if(l!==null){let f=Math.max(0,s.start),h=Math.min(l.count,s.start+s.count);for(let d=f,x=h;d<x;d++){let y=l.getX(d);vl.fromBufferAttribute(u,y),yu(vl,y,a,r,e,t,this)}}else{let f=Math.max(0,s.start),h=Math.min(u.count,s.start+s.count);for(let d=f,x=h;d<x;d++)vl.fromBufferAttribute(u,d),yu(vl,d,a,r,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let n=0,s=r.length;n<s;n++){let o=r[n].name||String(n);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=n}}}}}function yu(e,t,i,r,n,s,o){let a=Sc.distanceSqToPoint(e);if(a<i){let l=new R;Sc.closestPointToPoint(e,l),l.applyMatrix4(r);let c=n.ray.origin.distanceTo(l);if(c<n.near||c>n.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class Vr extends Et{constructor(e=[],t=Xi,i,r,n,s,o,a,l,c){super(e,t,i,r,n,s,o,a,l,c);this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Mi extends Et{constructor(e,t,i,r,n,s,o,a,l){super(e,t,i,r,n,s,o,a,l);this.isCanvasTexture=!0,this.needsUpdate=!0}}class Oi extends Et{constructor(e,t,i=Qt,r,n,s,o=Nt,a=Nt,l,c=Pi,u=1){if(c!==Pi&&c!==Ni)throw Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:e,height:t,depth:u};super(f,r,n,s,o,a,c,i,l);this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new fr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class Es extends Oi{constructor(e,t=Qt,i=Xi,r,n,s=Nt,o=Nt,a,l=Pi){let c={width:e,height:e,depth:1},u=[c,c,c,c,c,c];super(e,e,t,i,r,n,s,o,a,l);this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class ws extends Et{constructor(e=null){super();this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Li extends Ze{constructor(e=1,t=1,i=1,r=1,n=1,s=1){super();this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:n,depthSegments:s};let o=this;r=Math.floor(r),n=Math.floor(n),s=Math.floor(s);let a=[],l=[],c=[],u=[],f=0,h=0;d("z","y","x",-1,-1,i,t,e,s,n,0),d("z","y","x",1,-1,i,t,-e,s,n,1),d("x","z","y",1,1,e,i,t,r,s,2),d("x","z","y",1,-1,e,i,-t,r,s,3),d("x","y","z",1,-1,e,t,i,r,n,4),d("x","y","z",-1,-1,e,t,-i,r,n,5),this.setIndex(a),this.setAttribute("position",new Ge(l,3)),this.setAttribute("normal",new Ge(c,3)),this.setAttribute("uv",new Ge(u,2));function d(x,y,p,m,T,E,S,C,L,g,b){let N=E/L,q=S/g,U=E/2,z=S/2,ne=C/2,D=L+1,ee=g+1,re=0,W=0,pe=new R;for(let Q=0;Q<ee;Q++){let oe=Q*q-z;for(let ue=0;ue<D;ue++){let Se=ue*N-U;pe[x]=Se*m,pe[y]=oe*T,pe[p]=ne,l.push(pe.x,pe.y,pe.z),pe[x]=0,pe[y]=0,pe[p]=C>0?1:-1,c.push(pe.x,pe.y,pe.z),u.push(ue/L),u.push(1-Q/g),re+=1}}for(let Q=0;Q<g;Q++)for(let oe=0;oe<L;oe++){let ue=f+oe+D*Q,Se=f+oe+D*(Q+1),ae=f+(oe+1)+D*(Q+1),fe=f+(oe+1)+D*Q;a.push(ue,Se,fe),a.push(Se,ae,fe),W+=6}o.addGroup(h,W,b),h+=W,f+=re}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Li(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class yl extends Ze{constructor(e=1,t=32,i=0,r=Math.PI*2){super();this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:r},t=Math.max(3,t);let n=[],s=[],o=[],a=[],l=new R,c=new J;s.push(0,0,0),o.push(0,0,1),a.push(0.5,0.5);for(let u=0,f=3;u<=t;u++,f+=3){let h=i+u/t*r;l.x=e*Math.cos(h),l.y=e*Math.sin(h),s.push(l.x,l.y,l.z),o.push(0,0,1),c.x=(s[f]/e+1)/2,c.y=(s[f+1]/e+1)/2,a.push(c.x,c.y)}for(let u=1;u<=t;u++)n.push(u,u+1,0);this.setIndex(n),this.setAttribute("position",new Ge(s,3)),this.setAttribute("normal",new Ge(o,3)),this.setAttribute("uv",new Ge(a,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yl(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Zo extends Ze{constructor(e=1,t=1,i=1,r=32,n=1,s=!1,o=0,a=Math.PI*2){super();this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:n,openEnded:s,thetaStart:o,thetaLength:a};let l=this;r=Math.floor(r),n=Math.floor(n);let c=[],u=[],f=[],h=[],d=0,x=[],y=i/2,p=0;if(m(),s===!1){if(e>0)T(!0);if(t>0)T(!1)}this.setIndex(c),this.setAttribute("position",new Ge(u,3)),this.setAttribute("normal",new Ge(f,3)),this.setAttribute("uv",new Ge(h,2));function m(){let E=new R,S=new R,C=0,L=(t-e)/i;for(let g=0;g<=n;g++){let b=[],N=g/n,q=N*(t-e)+e;for(let U=0;U<=r;U++){let z=U/r,ne=z*a+o,D=Math.sin(ne),ee=Math.cos(ne);S.x=q*D,S.y=-N*i+y,S.z=q*ee,u.push(S.x,S.y,S.z),E.set(D,L,ee).normalize(),f.push(E.x,E.y,E.z),h.push(z,1-N),b.push(d++)}x.push(b)}for(let g=0;g<r;g++)for(let b=0;b<n;b++){let N=x[b][g],q=x[b+1][g],U=x[b+1][g+1],z=x[b][g+1];if(e>0||b!==0)c.push(N,q,z),C+=3;if(t>0||b!==n-1)c.push(q,U,z),C+=3}l.addGroup(p,C,0),p+=C}function T(E){let S=d,C=new J,L=new R,g=0,b=E===!0?e:t,N=E===!0?1:-1;for(let U=1;U<=r;U++)u.push(0,y*N,0),f.push(0,N,0),h.push(0.5,0.5),d++;let q=d;for(let U=0;U<=r;U++){let ne=U/r*a+o,D=Math.cos(ne),ee=Math.sin(ne);L.x=b*ee,L.y=y*N,L.z=b*D,u.push(L.x,L.y,L.z),f.push(0,N,0),C.x=D*0.5+0.5,C.y=ee*0.5*N+0.5,h.push(C.x,C.y),d++}for(let U=0;U<r;U++){let z=S+U,ne=q+U;if(E===!0)c.push(ne,ne+1,z);else c.push(ne+1,ne,z);g+=3}l.addGroup(p,g,E===!0?1:2),p+=g}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zo(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Wt{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ee("Curve: .getPoint() not implemented.")}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,r=this.getPoint(0),n=0;t.push(0);for(let s=1;s<=e;s++)i=this.getPoint(s/e),n+=i.distanceTo(r),t.push(n),r=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let i=this.getLengths(),r=0,n=i.length,s;if(t)s=t;else s=e*i[n-1];let o=0,a=n-1,l;while(o<=a)if(r=Math.floor(o+(a-o)/2),l=i[r]-s,l<0)o=r+1;else if(l>0)a=r-1;else{a=r;break}if(r=a,i[r]===s)return r/(n-1);let c=i[r],f=i[r+1]-c,h=(s-c)/f;return(r+h)/(n-1)}getTangent(e,t){let r=e-0.0001,n=e+0.0001;if(r<0)r=0;if(n>1)n=1;let s=this.getPoint(r),o=this.getPoint(n),a=t||(s.isVector2?new J:new R);return a.copy(o).sub(s).normalize(),a}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){let i=new R,r=[],n=[],s=[],o=new R,a=new Je;for(let h=0;h<=e;h++){let d=h/e;r[h]=this.getTangentAt(d,new R)}n[0]=new R,s[0]=new R;let l=Number.MAX_VALUE,c=Math.abs(r[0].x),u=Math.abs(r[0].y),f=Math.abs(r[0].z);if(c<=l)l=c,i.set(1,0,0);if(u<=l)l=u,i.set(0,1,0);if(f<=l)i.set(0,0,1);o.crossVectors(r[0],i).normalize(),n[0].crossVectors(r[0],o),s[0].crossVectors(r[0],n[0]);for(let h=1;h<=e;h++){if(n[h]=n[h-1].clone(),s[h]=s[h-1].clone(),o.crossVectors(r[h-1],r[h]),o.length()>Number.EPSILON){o.normalize();let d=Math.acos(rt(r[h-1].dot(r[h]),-1,1));n[h].applyMatrix4(a.makeRotationAxis(o,d))}s[h].crossVectors(r[h],n[h])}if(t===!0){let h=Math.acos(rt(n[0].dot(n[e]),-1,1));if(h/=e,r[0].dot(o.crossVectors(n[0],n[e]))>0)h=-h;for(let d=1;d<=e;d++)n[d].applyMatrix4(a.makeRotationAxis(r[d],h*d)),s[d].crossVectors(r[d],n[d])}return{tangents:r,normals:n,binormals:s}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}}class yn extends Wt{constructor(e=0,t=0,i=1,r=1,n=0,s=Math.PI*2,o=!1,a=0){super();this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=r,this.aStartAngle=n,this.aEndAngle=s,this.aClockwise=o,this.aRotation=a}getPoint(e,t=new J){let i=t,r=Math.PI*2,n=this.aEndAngle-this.aStartAngle,s=Math.abs(n)<Number.EPSILON;while(n<0)n+=r;while(n>r)n-=r;if(n<Number.EPSILON)if(s)n=0;else n=r;if(this.aClockwise===!0&&!s)if(n===r)n=-r;else n=n-r;let o=this.aStartAngle+e*n,a=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let c=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=a-this.aX,h=l-this.aY;a=f*c-h*u+this.aX,l=f*u+h*c+this.aY}return i.set(a,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Ec extends yn{constructor(e,t,i,r,n,s){super(e,t,i,i,r,n,s);this.isArcCurve=!0,this.type="ArcCurve"}}function Cc(){let e=0,t=0,i=0,r=0;function n(s,o,a,l){e=s,t=a,i=-3*s+3*o-2*a-l,r=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){n(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,u,f){let h=(o-s)/c-(a-s)/(c+u)+(a-o)/u,d=(a-o)/u-(l-o)/(u+f)+(l-a)/f;h*=u,d*=u,n(o,a,h,d)},calc:function(s){let o=s*s,a=o*s;return e+t*s+i*o+r*a}}}var Mu=new R,Su=new R,wc=new Cc,Ac=new Cc,Rc=new Cc;class Pc extends Wt{constructor(e=[],t=!1,i="centripetal",r=0.5){super();this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=r}getPoint(e,t=new R){let i=t,r=this.points,n=r.length,s=(n-(this.closed?0:1))*e,o=Math.floor(s),a=s-o;if(this.closed)o+=o>0?0:(Math.floor(Math.abs(o)/n)+1)*n;else if(a===0&&o===n-1)o=n-2,a=1;let l,c;if(this.closed||o>0)l=r[(o-1)%n];else Su.subVectors(r[0],r[1]).add(r[0]),l=Su;let u=r[o%n],f=r[(o+1)%n];if(this.closed||o+2<n)c=r[(o+2)%n];else Mu.subVectors(r[n-1],r[n-2]).add(r[n-1]),c=Mu;if(this.curveType==="centripetal"||this.curveType==="chordal"){let h=this.curveType==="chordal"?0.5:0.25,d=Math.pow(l.distanceToSquared(u),h),x=Math.pow(u.distanceToSquared(f),h),y=Math.pow(f.distanceToSquared(c),h);if(x<0.0001)x=1;if(d<0.0001)d=x;if(y<0.0001)y=x;wc.initNonuniformCatmullRom(l.x,u.x,f.x,c.x,d,x,y),Ac.initNonuniformCatmullRom(l.y,u.y,f.y,c.y,d,x,y),Rc.initNonuniformCatmullRom(l.z,u.z,f.z,c.z,d,x,y)}else if(this.curveType==="catmullrom")wc.initCatmullRom(l.x,u.x,f.x,c.x,this.tension),Ac.initCatmullRom(l.y,u.y,f.y,c.y,this.tension),Rc.initCatmullRom(l.z,u.z,f.z,c.z,this.tension);return i.set(wc.calc(a),Ac.calc(a),Rc.calc(a)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(new R().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Ic(e,t,i,r,n){let s=(r-t)*0.5,o=(n-i)*0.5,a=e*e,l=e*a;return(2*i-2*r+s+o)*l+(-3*i+3*r-2*s-o)*a+s*e+i}function ag(e,t){let i=1-e;return i*i*t}function lg(e,t){return 2*(1-e)*e*t}function cg(e,t){return e*e*t}function Mn(e,t,i,r){return ag(e,t)+lg(e,i)+cg(e,r)}function hg(e,t){let i=1-e;return i*i*i*t}function ug(e,t){let i=1-e;return 3*i*i*e*t}function fg(e,t){return 3*(1-e)*e*e*t}function dg(e,t){return e*e*e*t}function Sn(e,t,i,r,n){return hg(e,t)+ug(e,i)+fg(e,r)+dg(e,n)}class Jo extends Wt{constructor(e=new J,t=new J,i=new J,r=new J){super();this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new J){let i=t,r=this.v0,n=this.v1,s=this.v2,o=this.v3;return i.set(Sn(e,r.x,n.x,s.x,o.x),Sn(e,r.y,n.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Lc extends Wt{constructor(e=new R,t=new R,i=new R,r=new R){super();this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new R){let i=t,r=this.v0,n=this.v1,s=this.v2,o=this.v3;return i.set(Sn(e,r.x,n.x,s.x,o.x),Sn(e,r.y,n.y,s.y,o.y),Sn(e,r.z,n.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Ko extends Wt{constructor(e=new J,t=new J){super();this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new J){let i=t;if(e===1)i.copy(this.v2);else i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1);return i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new J){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Qo extends Wt{constructor(e=new R,t=new R){super();this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new R){let i=t;if(e===1)i.copy(this.v2);else i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1);return i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new R){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class $o extends Wt{constructor(e=new J,t=new J,i=new J){super();this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new J){let i=t,r=this.v0,n=this.v1,s=this.v2;return i.set(Mn(e,r.x,n.x,s.x),Mn(e,r.y,n.y,s.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class jo extends Wt{constructor(e=new R,t=new R,i=new R){super();this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new R){let i=t,r=this.v0,n=this.v1,s=this.v2;return i.set(Mn(e,r.x,n.x,s.x),Mn(e,r.y,n.y,s.y),Mn(e,r.z,n.z,s.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class ea extends Wt{constructor(e=[]){super();this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new J){let i=t,r=this.points,n=(r.length-1)*e,s=Math.floor(n),o=n-s,a=r[s===0?s:s-1],l=r[s],c=r[s>r.length-2?r.length-1:s+1],u=r[s>r.length-3?r.length-1:s+2];return i.set(Ic(o,a.x,l.x,c.x,u.x),Ic(o,a.y,l.y,c.y,u.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(new J().fromArray(r))}return this}}class As extends Wt{constructor(){super();this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Hr[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),r=this.getCurveLengths(),n=0;while(n<r.length){if(r[n]>=i){let s=r[n]-i,o=this.curves[n],a=o.getLength(),l=a===0?0:1-s/a;return o.getPointAt(l,t)}n++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,r=this.curves.length;i<r;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));if(this.autoClose)t.push(t[0]);return t}getPoints(e=12){let t=[],i;for(let r=0,n=this.curves;r<n.length;r++){let s=n[r],o=s.isEllipseCurve?e*2:s.isLineCurve||s.isLineCurve3?1:s.isSplineCurve?e*s.points.length:e,a=s.getPoints(o);for(let l=0;l<a.length;l++){let c=a[l];if(i&&i.equals(c))continue;t.push(c),i=c}}if(this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0]))t.push(t[0]);return t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this.cacheLengths=null,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let r=e.curves[t];this.curves.push(new Hr[r.type]().fromJSON(r))}return this.cacheLengths=null,this}}class Rs extends As{constructor(e){super();if(this.type="Path",this.currentPoint=new J,e)this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new Ko(this.currentPoint.clone(),new J(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,r){let n=new $o(this.currentPoint.clone(),new J(e,t),new J(i,r));return this.curves.push(n),this.currentPoint.set(i,r),this}bezierCurveTo(e,t,i,r,n,s){let o=new Jo(this.currentPoint.clone(),new J(e,t),new J(i,r),new J(n,s));return this.curves.push(o),this.currentPoint.set(n,s),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new ea(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,r,n,s){let o=this.currentPoint.x,a=this.currentPoint.y;return this.absarc(e+o,t+a,i,r,n,s),this}absarc(e,t,i,r,n,s){return this.absellipse(e,t,i,i,r,n,s),this}ellipse(e,t,i,r,n,s,o,a){let l=this.currentPoint.x,c=this.currentPoint.y;return this.absellipse(e+l,t+c,i,r,n,s,o,a),this}absellipse(e,t,i,r,n,s,o,a){let l=new yn(e,t,i,r,n,s,o,a);if(this.curves.length>0){let u=l.getPoint(0);if(!u.equals(this.currentPoint))this.lineTo(u.x,u.y)}this.curves.push(l);let c=l.getPoint(1);return this.currentPoint.copy(c),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class mr extends Rs{constructor(e){super(e);this.uuid=oi(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,r=this.holes.length;i<r;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let r=e.holes[t];this.holes.push(new Rs().fromJSON(r))}return this}}function Uc(e,t,i=2){let r=t&&t.length,n=r?t[0]*i:e.length,s=Tu(e,0,n,i,!0),o=[];if(!s||s.next===s.prev)return o;let a,l,c;if(r)s=_g(e,t,s,i);if(e.length>80*i){a=e[0],l=e[1];let u=a,f=l;for(let h=i;h<n;h+=i){let d=e[h],x=e[h+1];if(d<a)a=d;if(x<l)l=x;if(d>u)u=d;if(x>f)f=x}c=Math.max(u-a,f-l),c=c!==0?32767/c:0}return ia(s,o,i,a,l,c,0),o}function Tu(e,t,i,r,n){let s;if(n===Cg(e,t,i,r)>0)for(let o=t;o<i;o+=r)s=bu(o/r|0,e[o],e[o+1],s);else for(let o=i-r;o>=t;o-=r)s=bu(o/r|0,e[o],e[o+1],s);if(s&&Cs(s,s.next))na(s),s=s.next;return s}function bn(e,t){if(!e)return e;if(!t)t=e;let i=e,r;do if(r=!1,!i.steiner&&(Cs(i,i.next)||Ht(i.prev,i,i.next)===0)){if(na(i),i=t=i.prev,i===i.next)break;r=!0}else i=i.next;while(r||i!==t);return t}function ia(e,t,i,r,n,s,o){if(!e)return;if(!o&&s)bg(e,r,n,s);let a=e;while(e.prev!==e.next){let l=e.prev,c=e.next;if(s?mg(e,r,n,s):pg(e)){t.push(l.i,e.i,c.i),na(e),e=c.next,a=c.next;continue}if(e=c,e===a){if(!o)ia(bn(e),t,i,r,n,s,1);else if(o===1)e=gg(bn(e),t),ia(e,t,i,r,n,s,2);else if(o===2)xg(e,t,i,r,n,s);break}}}function pg(e){let t=e.prev,i=e,r=e.next;if(Ht(t,i,r)>=0)return!1;let n=t.x,s=i.x,o=r.x,a=t.y,l=i.y,c=r.y,u=Math.min(n,s,o),f=Math.min(a,l,c),h=Math.max(n,s,o),d=Math.max(a,l,c),x=r.next;while(x!==t){if(x.x>=u&&x.x<=h&&x.y>=f&&x.y<=d&&ta(n,a,s,l,o,c,x.x,x.y)&&Ht(x.prev,x,x.next)>=0)return!1;x=x.next}return!0}function mg(e,t,i,r){let n=e.prev,s=e,o=e.next;if(Ht(n,s,o)>=0)return!1;let a=n.x,l=s.x,c=o.x,u=n.y,f=s.y,h=o.y,d=Math.min(a,l,c),x=Math.min(u,f,h),y=Math.max(a,l,c),p=Math.max(u,f,h),m=Dc(d,x,t,i,r),T=Dc(y,p,t,i,r),{prevZ:E,nextZ:S}=e;while(E&&E.z>=m&&S&&S.z<=T){if(E.x>=d&&E.x<=y&&E.y>=x&&E.y<=p&&E!==n&&E!==o&&ta(a,u,l,f,c,h,E.x,E.y)&&Ht(E.prev,E,E.next)>=0)return!1;if(E=E.prevZ,S.x>=d&&S.x<=y&&S.y>=x&&S.y<=p&&S!==n&&S!==o&&ta(a,u,l,f,c,h,S.x,S.y)&&Ht(S.prev,S,S.next)>=0)return!1;S=S.nextZ}while(E&&E.z>=m){if(E.x>=d&&E.x<=y&&E.y>=x&&E.y<=p&&E!==n&&E!==o&&ta(a,u,l,f,c,h,E.x,E.y)&&Ht(E.prev,E,E.next)>=0)return!1;E=E.prevZ}while(S&&S.z<=T){if(S.x>=d&&S.x<=y&&S.y>=x&&S.y<=p&&S!==n&&S!==o&&ta(a,u,l,f,c,h,S.x,S.y)&&Ht(S.prev,S,S.next)>=0)return!1;S=S.nextZ}return!0}function gg(e,t){let i=e;do{let r=i.prev,n=i.next.next;if(!Cs(r,n)&&wu(r,i,i.next,n)&&ra(r,n)&&ra(n,r))t.push(r.i,i.i,n.i),na(i),na(i.next),i=e=n;i=i.next}while(i!==e);return bn(i)}function xg(e,t,i,r,n,s){let o=e;do{let a=o.next.next;while(a!==o.prev){if(o.i!==a.i&&wg(o,a)){let l=Au(o,a);o=bn(o,o.next),l=bn(l,l.next),ia(o,t,i,r,n,s,0),ia(l,t,i,r,n,s,0);return}a=a.next}o=o.next}while(o!==e)}function _g(e,t,i,r){let n=[];for(let s=0,o=t.length;s<o;s++){let a=t[s]*r,l=s<o-1?t[s+1]*r:e.length,c=Tu(e,a,l,r,!1);if(c===c.next)c.steiner=!0;n.push(Eg(c))}n.sort(vg);for(let s=0;s<n.length;s++)i=yg(n[s],i);return i}function vg(e,t){let i=e.x-t.x;if(i===0){if(i=e.y-t.y,i===0){let r=(e.next.y-e.y)/(e.next.x-e.x),n=(t.next.y-t.y)/(t.next.x-t.x);i=r-n}}return i}function yg(e,t){let i=Mg(e,t);if(!i)return t;let r=Au(i,e);return bn(r,r.next),bn(i,i.next)}function Mg(e,t){let i=t,{x:r,y:n}=e,s=-1/0,o;if(Cs(e,i))return i;do{if(Cs(e,i.next))return i.next;else if(n<=i.y&&n>=i.next.y&&i.next.y!==i.y){let f=i.x+(n-i.y)*(i.next.x-i.x)/(i.next.y-i.y);if(f<=r&&f>s){if(s=f,o=i.x<i.next.x?i:i.next,f===r)return o}}i=i.next}while(i!==t);if(!o)return null;let a=o,l=o.x,c=o.y,u=1/0;i=o;do{if(r>=i.x&&i.x>=l&&r!==i.x&&Eu(n<c?r:s,n,l,c,n<c?s:r,n,i.x,i.y)){let f=Math.abs(n-i.y)/(r-i.x);if(ra(i,e)&&(f<u||f===u&&(i.x>o.x||i.x===o.x&&Sg(o,i))))o=i,u=f}i=i.next}while(i!==a);return o}function Sg(e,t){return Ht(e.prev,e,t.prev)<0&&Ht(t.next,e,e.next)<0}function bg(e,t,i,r){let n=e;do{if(n.z===0)n.z=Dc(n.x,n.y,t,i,r);n.prevZ=n.prev,n.nextZ=n.next,n=n.next}while(n!==e);n.prevZ.nextZ=null,n.prevZ=null,Tg(n)}function Tg(e){let t,i=1;do{let r=e,n;e=null;let s=null;t=0;while(r){t++;let o=r,a=0;for(let c=0;c<i;c++)if(a++,o=o.nextZ,!o)break;let l=i;while(a>0||l>0&&o){if(a!==0&&(l===0||!o||r.z<=o.z))n=r,r=r.nextZ,a--;else n=o,o=o.nextZ,l--;if(s)s.nextZ=n;else e=n;n.prevZ=s,s=n}r=o}s.nextZ=null,i*=2}while(t>1);return e}function Dc(e,t,i,r,n){return e=(e-i)*n|0,t=(t-r)*n|0,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e|t<<1}function Eg(e){let t=e,i=e;do{if(t.x<i.x||t.x===i.x&&t.y<i.y)i=t;t=t.next}while(t!==e);return i}function Eu(e,t,i,r,n,s,o,a){return(n-o)*(t-a)>=(e-o)*(s-a)&&(e-o)*(r-a)>=(i-o)*(t-a)&&(i-o)*(s-a)>=(n-o)*(r-a)}function ta(e,t,i,r,n,s,o,a){return!(e===o&&t===a)&&Eu(e,t,i,r,n,s,o,a)}function wg(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!Ag(e,t)&&(ra(e,t)&&ra(t,e)&&Rg(e,t)&&(Ht(e.prev,e,t.prev)||Ht(e,t.prev,t))||Cs(e,t)&&Ht(e.prev,e,e.next)>0&&Ht(t.prev,t,t.next)>0)}function Ht(e,t,i){return(t.y-e.y)*(i.x-t.x)-(t.x-e.x)*(i.y-t.y)}function Cs(e,t){return e.x===t.x&&e.y===t.y}function wu(e,t,i,r){let n=Sl(Ht(e,t,i)),s=Sl(Ht(e,t,r)),o=Sl(Ht(i,r,e)),a=Sl(Ht(i,r,t));if(n!==s&&o!==a)return!0;if(n===0&&Ml(e,i,t))return!0;if(s===0&&Ml(e,r,t))return!0;if(o===0&&Ml(i,e,r))return!0;if(a===0&&Ml(i,t,r))return!0;return!1}function Ml(e,t,i){return t.x<=Math.max(e.x,i.x)&&t.x>=Math.min(e.x,i.x)&&t.y<=Math.max(e.y,i.y)&&t.y>=Math.min(e.y,i.y)}function Sl(e){return e>0?1:e<0?-1:0}function Ag(e,t){let i=e;do{if(i.i!==e.i&&i.next.i!==e.i&&i.i!==t.i&&i.next.i!==t.i&&wu(i,i.next,e,t))return!0;i=i.next}while(i!==e);return!1}function ra(e,t){return Ht(e.prev,e,e.next)<0?Ht(e,t,e.next)>=0&&Ht(e,e.prev,t)>=0:Ht(e,t,e.prev)<0||Ht(e,e.next,t)<0}function Rg(e,t){let i=e,r=!1,n=(e.x+t.x)/2,s=(e.y+t.y)/2;do{if(i.y>s!==i.next.y>s&&i.next.y!==i.y&&n<(i.next.x-i.x)*(s-i.y)/(i.next.y-i.y)+i.x)r=!r;i=i.next}while(i!==e);return r}function Au(e,t){let i=Nc(e.i,e.x,e.y),r=Nc(t.i,t.x,t.y),n=e.next,s=t.prev;return e.next=t,t.prev=e,i.next=n,n.prev=i,r.next=i,i.prev=r,s.next=r,r.prev=s,r}function bu(e,t,i,r){let n=Nc(e,t,i);if(!r)n.prev=n,n.next=n;else n.next=r.next,n.prev=r,r.next.prev=n,r.next=n;return n}function na(e){if(e.next.prev=e.prev,e.prev.next=e.next,e.prevZ)e.prevZ.nextZ=e.nextZ;if(e.nextZ)e.nextZ.prevZ=e.prevZ}function Nc(e,t,i){return{i:e,x:t,y:i,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Cg(e,t,i,r){let n=0;for(let s=t,o=i-r;s<i;s+=r)n+=(e[o]-e[s])*(e[s+1]+e[o+1]),o=s;return n}class Fc{static triangulate(e,t,i=2){return Uc(e,t,i)}}class zi{static area(e){let t=e.length,i=0;for(let r=t-1,n=0;n<t;r=n++)i+=e[r].x*e[n].y-e[n].x*e[r].y;return i*0.5}static isClockWise(e){return zi.area(e)<0}static triangulateShape(e,t){let i=[],r=[],n=[];Ru(e),Cu(i,e);let s=e.length;t.forEach(Ru);for(let a=0;a<t.length;a++)r.push(s),s+=t[a].length,Cu(i,t[a]);let o=Fc.triangulate(i,r);for(let a=0;a<o.length;a+=3)n.push(o.slice(a,a+3));return n}}function Ru(e){let t=e.length;if(t>2&&e[t-1].equals(e[0]))e.pop()}function Cu(e,t){for(let i=0;i<t.length;i++)e.push(t[i].x),e.push(t[i].y)}class bl extends Ze{constructor(e=new mr([new J(0.5,0.5),new J(-0.5,0.5),new J(-0.5,-0.5),new J(0.5,-0.5)]),t={}){super();this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let i=this,r=[],n=[];for(let o=0,a=e.length;o<a;o++){let l=e[o];s(l)}this.setAttribute("position",new Ge(r,3)),this.setAttribute("uv",new Ge(n,2)),this.computeVertexNormals();function s(o){let a=[],l=t.curveSegments!==void 0?t.curveSegments:12,c=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,h=t.bevelThickness!==void 0?t.bevelThickness:0.2,d=t.bevelSize!==void 0?t.bevelSize:h-0.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,y=t.bevelSegments!==void 0?t.bevelSegments:3,p=t.extrudePath,m=t.UVGenerator!==void 0?t.UVGenerator:Pg,T,E=!1,S,C,L,g;if(p){T=p.getSpacedPoints(c),E=!0,f=!1;let le=p.isCatmullRomCurve3?p.closed:!1;S=p.computeFrenetFrames(c,le),C=new R,L=new R,g=new R}if(!f)y=0,h=0,d=0,x=0;let b=o.extractPoints(l),{shape:N,holes:q}=b;if(!zi.isClockWise(N)){N=N.reverse();for(let le=0,xe=q.length;le<xe;le++){let _e=q[le];if(zi.isClockWise(_e))q[le]=_e.reverse()}}function z(le){let Ue=le[0];for(let ve=1;ve<=le.length;ve++){let Ye=ve%le.length,Xe=le[Ye],Ve=Xe.x-Ue.x,nt=Xe.y-Ue.y,vt=Ve*Ve+nt*nt,O=Math.max(Math.abs(Xe.x),Math.abs(Xe.y),Math.abs(Ue.x),Math.abs(Ue.y)),Gt=0.000000000000000000010000000000000001*O*O;if(vt<=Gt){le.splice(Ye,1),ve--;continue}Ue=Xe}}z(N),q.forEach(z);let ne=q.length,D=N;for(let le=0;le<ne;le++){let xe=q[le];N=N.concat(xe)}function ee(le,xe,_e){if(!xe)Oe("ExtrudeGeometry: vec does not exist");return le.clone().addScaledVector(xe,_e)}let re=N.length;function W(le,xe,_e){let Ue,ve,Ye,Xe=le.x-xe.x,Ve=le.y-xe.y,nt=_e.x-le.x,vt=_e.y-le.y,O=Xe*Xe+Ve*Ve,Gt=Xe*vt-Ve*nt;if(Math.abs(Gt)>Number.EPSILON){let lt=Math.sqrt(O),Ft=Math.sqrt(nt*nt+vt*vt),Re=xe.x-Ve/lt,bt=xe.y+Xe/lt,je=_e.x-vt/Ft,st=_e.y+nt/Ft,pt=((je-Re)*vt-(st-bt)*nt)/(Xe*vt-Ve*nt);Ue=Re+Xe*pt-le.x,ve=bt+Ve*pt-le.y;let A=Ue*Ue+ve*ve;if(A<=2)return new J(Ue,ve);else Ye=Math.sqrt(A/2)}else{let lt=!1;if(Xe>Number.EPSILON){if(nt>Number.EPSILON)lt=!0}else if(Xe<-Number.EPSILON){if(nt<-Number.EPSILON)lt=!0}else if(Math.sign(Ve)===Math.sign(vt))lt=!0;if(lt)Ue=-Ve,ve=Xe,Ye=Math.sqrt(O);else Ue=Xe,ve=Ve,Ye=Math.sqrt(O/2)}return new J(Ue/Ye,ve/Ye)}let pe=[];for(let le=0,xe=D.length,_e=xe-1,Ue=le+1;le<xe;le++,_e++,Ue++){if(_e===xe)_e=0;if(Ue===xe)Ue=0;pe[le]=W(D[le],D[_e],D[Ue])}let Q=[],oe,ue=pe.concat();for(let le=0,xe=ne;le<xe;le++){let _e=q[le];oe=[];for(let Ue=0,ve=_e.length,Ye=ve-1,Xe=Ue+1;Ue<ve;Ue++,Ye++,Xe++){if(Ye===ve)Ye=0;if(Xe===ve)Xe=0;oe[Ue]=W(_e[Ue],_e[Ye],_e[Xe])}Q.push(oe),ue=ue.concat(oe)}let Se;if(y===0)Se=zi.triangulateShape(D,q);else{let le=[],xe=[];for(let _e=0;_e<y;_e++){let Ue=_e/y,ve=h*Math.cos(Ue*Math.PI/2),Ye=d*Math.sin(Ue*Math.PI/2)+x;for(let Xe=0,Ve=D.length;Xe<Ve;Xe++){let nt=ee(D[Xe],pe[Xe],Ye);if(Ne(nt.x,nt.y,-ve),Ue===0)le.push(nt)}for(let Xe=0,Ve=ne;Xe<Ve;Xe++){let nt=q[Xe];oe=Q[Xe];let vt=[];for(let O=0,Gt=nt.length;O<Gt;O++){let lt=ee(nt[O],oe[O],Ye);if(Ne(lt.x,lt.y,-ve),Ue===0)vt.push(lt)}if(Ue===0)xe.push(vt)}}Se=zi.triangulateShape(le,xe)}let ae=Se.length,fe=d+x;for(let le=0;le<re;le++){let xe=f?ee(N[le],ue[le],fe):N[le];if(!E)Ne(xe.x,xe.y,0);else L.copy(S.normals[0]).multiplyScalar(xe.x),C.copy(S.binormals[0]).multiplyScalar(xe.y),g.copy(T[0]).add(L).add(C),Ne(g.x,g.y,g.z)}for(let le=1;le<=c;le++)for(let xe=0;xe<re;xe++){let _e=f?ee(N[xe],ue[xe],fe):N[xe];if(!E)Ne(_e.x,_e.y,u/c*le);else L.copy(S.normals[le]).multiplyScalar(_e.x),C.copy(S.binormals[le]).multiplyScalar(_e.y),g.copy(T[le]).add(L).add(C),Ne(g.x,g.y,g.z)}for(let le=y-1;le>=0;le--){let xe=le/y,_e=h*Math.cos(xe*Math.PI/2),Ue=d*Math.sin(xe*Math.PI/2)+x;for(let ve=0,Ye=D.length;ve<Ye;ve++){let Xe=ee(D[ve],pe[ve],Ue);Ne(Xe.x,Xe.y,u+_e)}for(let ve=0,Ye=q.length;ve<Ye;ve++){let Xe=q[ve];oe=Q[ve];for(let Ve=0,nt=Xe.length;Ve<nt;Ve++){let vt=ee(Xe[Ve],oe[Ve],Ue);if(!E)Ne(vt.x,vt.y,u+_e);else Ne(vt.x,vt.y+T[c-1].y,T[c-1].x+_e)}}}ze(),Ke();function ze(){let le=r.length/3;if(f){let xe=0,_e=re*xe;for(let Ue=0;Ue<ae;Ue++){let ve=Se[Ue];_t(ve[2]+_e,ve[1]+_e,ve[0]+_e)}xe=c+y*2,_e=re*xe;for(let Ue=0;Ue<ae;Ue++){let ve=Se[Ue];_t(ve[0]+_e,ve[1]+_e,ve[2]+_e)}}else{for(let xe=0;xe<ae;xe++){let _e=Se[xe];_t(_e[2],_e[1],_e[0])}for(let xe=0;xe<ae;xe++){let _e=Se[xe];_t(_e[0]+re*c,_e[1]+re*c,_e[2]+re*c)}}i.addGroup(le,r.length/3-le,0)}function Ke(){let le=r.length/3,xe=0;$e(D,xe),xe+=D.length;for(let _e=0,Ue=q.length;_e<Ue;_e++){let ve=q[_e];$e(ve,xe),xe+=ve.length}i.addGroup(le,r.length/3-le,1)}function $e(le,xe){let _e=le.length;while(--_e>=0){let Ue=_e,ve=_e-1;if(ve<0)ve=le.length-1;for(let Ye=0,Xe=c+y*2;Ye<Xe;Ye++){let Ve=re*Ye,nt=re*(Ye+1),vt=xe+Ue+Ve,O=xe+ve+Ve,Gt=xe+ve+nt,lt=xe+Ue+nt;tt(vt,O,Gt,lt)}}}function Ne(le,xe,_e){a.push(le),a.push(xe),a.push(_e)}function _t(le,xe,_e){it(le),it(xe),it(_e);let Ue=r.length/3,ve=m.generateTopUV(i,r,Ue-3,Ue-2,Ue-1);gt(ve[0]),gt(ve[1]),gt(ve[2])}function tt(le,xe,_e,Ue){it(le),it(xe),it(Ue),it(xe),it(_e),it(Ue);let ve=r.length/3,Ye=m.generateSideWallUV(i,r,ve-6,ve-3,ve-2,ve-1);gt(Ye[0]),gt(Ye[1]),gt(Ye[3]),gt(Ye[1]),gt(Ye[2]),gt(Ye[3])}function it(le){r.push(a[le*3+0]),r.push(a[le*3+1]),r.push(a[le*3+2])}function gt(le){n.push(le.x),n.push(le.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return Ig(t,i,e)}static fromJSON(e,t){let i=[];for(let n=0,s=e.shapes.length;n<s;n++){let o=t[e.shapes[n]];i.push(o)}let r=e.options.extrudePath;if(r!==void 0)e.options.extrudePath=new Hr[r.type]().fromJSON(r);return new bl(i,e.options)}}var Pg={generateTopUV:function(e,t,i,r,n){let s=t[i*3],o=t[i*3+1],a=t[r*3],l=t[r*3+1],c=t[n*3],u=t[n*3+1];return[new J(s,o),new J(a,l),new J(c,u)]},generateSideWallUV:function(e,t,i,r,n,s){let o=t[i*3],a=t[i*3+1],l=t[i*3+2],c=t[r*3],u=t[r*3+1],f=t[r*3+2],h=t[n*3],d=t[n*3+1],x=t[n*3+2],y=t[s*3],p=t[s*3+1],m=t[s*3+2];if(Math.abs(a-u)<Math.abs(o-c))return[new J(o,1-l),new J(c,1-f),new J(h,1-x),new J(y,1-m)];else return[new J(a,1-l),new J(u,1-f),new J(d,1-x),new J(p,1-m)]}};function Ig(e,t,i){if(i.shapes=[],Array.isArray(e))for(let r=0,n=e.length;r<n;r++){let s=e[r];i.shapes.push(s.uuid)}else i.shapes.push(e.uuid);if(i.options=Object.assign({},t),t.extrudePath!==void 0)i.options.extrudePath=t.extrudePath.toJSON();return i}class Ri extends Ze{constructor(e=1,t=1,i=1,r=1){super();this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};let n=e/2,s=t/2,o=Math.floor(i),a=Math.floor(r),l=o+1,c=a+1,u=e/o,f=t/a,h=[],d=[],x=[],y=[];for(let p=0;p<c;p++){let m=p*f-s;for(let T=0;T<l;T++){let E=T*u-n;d.push(E,-m,0),x.push(0,0,1),y.push(T/o),y.push(1-p/a)}}for(let p=0;p<a;p++)for(let m=0;m<o;m++){let T=m+l*p,E=m+l*(p+1),S=m+1+l*(p+1),C=m+1+l*p;h.push(T,E,C),h.push(E,S,C)}this.setIndex(h),this.setAttribute("position",new Ge(d,3)),this.setAttribute("normal",new Ge(x,3)),this.setAttribute("uv",new Ge(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ri(e.width,e.height,e.widthSegments,e.heightSegments)}}class Tl extends Ze{constructor(e=new mr([new J(0,0.5),new J(-0.5,-0.5),new J(0.5,-0.5)]),t=12){super();this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let i=[],r=[],n=[],s=[],o=0,a=0;if(Array.isArray(e)===!1)l(e);else for(let c=0;c<e.length;c++)l(e[c]),this.addGroup(o,a,c),o+=a,a=0;this.setIndex(i),this.setAttribute("position",new Ge(r,3)),this.setAttribute("normal",new Ge(n,3)),this.setAttribute("uv",new Ge(s,2));function l(c){let u=r.length/3,f=c.extractPoints(t),{shape:h,holes:d}=f;if(zi.isClockWise(h)===!1)h=h.reverse();for(let y=0,p=d.length;y<p;y++){let m=d[y];if(zi.isClockWise(m)===!0)d[y]=m.reverse()}let x=zi.triangulateShape(h,d);for(let y=0,p=d.length;y<p;y++){let m=d[y];h=h.concat(m)}for(let y=0,p=h.length;y<p;y++){let m=h[y];r.push(m.x,m.y,0),n.push(0,0,1),s.push(m.x,m.y)}for(let y=0,p=x.length;y<p;y++){let m=x[y],T=m[0]+u,E=m[1]+u,S=m[2]+u;i.push(T,E,S),a+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return Lg(t,e)}static fromJSON(e,t){let i=[];for(let r=0,n=e.shapes.length;r<n;r++){let s=t[e.shapes[r]];i.push(s)}return new Tl(i,e.curveSegments)}}function Lg(e,t){if(t.shapes=[],Array.isArray(e))for(let i=0,r=e.length;i<r;i++){let n=e[i];t.shapes.push(n.uuid)}else t.shapes.push(e.uuid);return t}class El extends Ze{constructor(e=1,t=0.4,i=12,r=48,n=Math.PI*2,s=0,o=Math.PI*2){super();this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:r,arc:n,thetaStart:s,thetaLength:o},i=Math.floor(i),r=Math.floor(r);let a=[],l=[],c=[],u=[],f=new R,h=new R,d=new R;for(let x=0;x<=i;x++){let y=s+x/i*o;for(let p=0;p<=r;p++){let m=p/r*n;h.x=(e+t*Math.cos(y))*Math.cos(m),h.y=(e+t*Math.cos(y))*Math.sin(m),h.z=t*Math.sin(y),l.push(h.x,h.y,h.z),f.x=e*Math.cos(m),f.y=e*Math.sin(m),d.subVectors(h,f).normalize(),c.push(d.x,d.y,d.z),u.push(p/r),u.push(x/i)}}for(let x=1;x<=i;x++)for(let y=1;y<=r;y++){let p=(r+1)*x+y-1,m=(r+1)*(x-1)+y-1,T=(r+1)*(x-1)+y,E=(r+1)*x+y;a.push(p,m,E),a.push(m,T,E)}this.setIndex(a),this.setAttribute("position",new Ge(l,3)),this.setAttribute("normal",new Ge(c,3)),this.setAttribute("uv",new Ge(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new El(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}class sa extends Ze{constructor(e=new jo(new R(-1,-1,0),new R(-1,1,0),new R(1,1,0)),t=64,i=1,r=8,n=!1){super();this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:r,closed:n};let s=e.computeFrenetFrames(t,n);this.tangents=s.tangents,this.normals=s.normals,this.binormals=s.binormals;let o=new R,a=new R,l=new J,c=new R,u=[],f=[],h=[],d=[];x(),this.setIndex(d),this.setAttribute("position",new Ge(u,3)),this.setAttribute("normal",new Ge(f,3)),this.setAttribute("uv",new Ge(h,2));function x(){for(let T=0;T<t;T++)y(T);y(n===!1?t:0),m(),p()}function y(T){c=e.getPointAt(T/t,c);let E=s.normals[T],S=s.binormals[T];for(let C=0;C<=r;C++){let L=C/r*Math.PI*2,g=Math.sin(L),b=-Math.cos(L);a.x=b*E.x+g*S.x,a.y=b*E.y+g*S.y,a.z=b*E.z+g*S.z,a.normalize(),f.push(a.x,a.y,a.z),o.x=c.x+i*a.x,o.y=c.y+i*a.y,o.z=c.z+i*a.z,u.push(o.x,o.y,o.z)}}function p(){for(let T=1;T<=t;T++)for(let E=1;E<=r;E++){let S=(r+1)*(T-1)+(E-1),C=(r+1)*T+(E-1),L=(r+1)*T+E,g=(r+1)*(T-1)+E;d.push(S,C,g),d.push(C,L,g)}}function m(){for(let T=0;T<=t;T++)for(let E=0;E<=r;E++)l.x=T/t,l.y=E/r,h.push(l.x,l.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new sa(new Hr[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}function wr(e){let t={};for(let i in e){t[i]={};for(let r in e[i]){let n=e[i][r];if(Pu(n))if(n.isRenderTargetTexture)Ee("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][r]=null;else t[i][r]=n.clone();else if(Array.isArray(n))if(Pu(n[0])){let s=[];for(let o=0,a=n.length;o<a;o++)s[o]=n[o].clone();t[i][r]=s}else t[i][r]=n.slice();else t[i][r]=n}}return t}function Si(e){let t={};for(let i=0;i<e.length;i++){let r=wr(e[i]);for(let n in r)t[n]=r[n]}return t}function Pu(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function Iu(e){let t=[];for(let i=0;i<e.length;i++)t.push(e[i].clone());return t}function wl(e){let t=e.getRenderTarget();if(t===null)return e.outputColorSpace;if(t.isXRRenderTarget===!0)return t.texture.colorSpace;return at.workingColorSpace}var Qi={clone:wr,merge:Si};var Lu=`
void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}
`;var Du=`
void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}
`;class It extends Ut{constructor(e){super();if(this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Lu,this.fragmentShader=Du,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0)this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=wr(e.uniforms),this.uniformsGroups=Iu(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let s=this.uniforms[r].value;if(s&&s.isTexture)t.uniforms[r]={type:"t",value:s.toJSON(e).uuid};else if(s&&s.isColor)t.uniforms[r]={type:"c",value:s.getHex()};else if(s&&s.isVector2)t.uniforms[r]={type:"v2",value:s.toArray()};else if(s&&s.isVector3)t.uniforms[r]={type:"v3",value:s.toArray()};else if(s&&s.isVector4)t.uniforms[r]={type:"v4",value:s.toArray()};else if(s&&s.isMatrix3)t.uniforms[r]={type:"m3",value:s.toArray()};else if(s&&s.isMatrix4)t.uniforms[r]={type:"m4",value:s.toArray()};else t.uniforms[r]={value:s}}if(Object.keys(this.defines).length>0)t.defines=this.defines;t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let r in this.extensions)if(this.extensions[r]===!0)i[r]=!0;if(Object.keys(i).length>0)t.extensions=i;return t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let i in e.uniforms){let r=e.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=t[r.value]||null;break;case"c":this.uniforms[i].value=new de().setHex(r.value);break;case"v2":this.uniforms[i].value=new J().fromArray(r.value);break;case"v3":this.uniforms[i].value=new R().fromArray(r.value);break;case"v4":this.uniforms[i].value=new yt().fromArray(r.value);break;case"m3":this.uniforms[i].value=new Qe().fromArray(r.value);break;case"m4":this.uniforms[i].value=new Je().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(e.defines!==void 0)this.defines=e.defines;if(e.vertexShader!==void 0)this.vertexShader=e.vertexShader;if(e.fragmentShader!==void 0)this.fragmentShader=e.fragmentShader;if(e.glslVersion!==void 0)this.glslVersion=e.glslVersion;if(e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];if(e.lights!==void 0)this.lights=e.lights;if(e.clipping!==void 0)this.clipping=e.clipping;return this}}class Tn extends It{constructor(e){super(e);this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class ei extends Ut{constructor(e){super();this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new de(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new de(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=rr,this.normalScale=new J(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class oa extends ei{constructor(e){super();this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new J(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return rt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+0.4*t)/(1-0.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new de(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new de(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new de(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){if(this._anisotropy>0!==e>0)this.version++;this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){if(this._clearcoat>0!==e>0)this.version++;this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){if(this._diffuseRoughness>0!==e>0)this.version++;this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){if(this._iridescence>0!==e>0)this.version++;this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){if(this._dispersion>0!==e>0)this.version++;this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){if(this._retroreflectivity>0!==e>0)this.version++;this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){if(this._sheen>0!==e>0)this.version++;this._sheen=e}get transmission(){return this._transmission}set transmission(e){if(this._transmission>0!==e>0)this.version++;this._transmission=e}get iridescenceThicknessRange(){return Yi('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){Yi('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class aa extends Ut{constructor(e){super();this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new de(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new de(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=rr,this.normalScale=new J(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xi,this.combine=$r,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=0.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class la extends Ut{constructor(e){super();this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ih,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class ca extends Ut{constructor(e){super();this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function kr(e,t){if(!e||e.constructor===t)return e;if(typeof t.BYTES_PER_ELEMENT==="number")return new t(e);return Array.prototype.slice.call(e)}function Ps(e){return e!==void 0&&e.inTangents!==void 0&&e.outTangents!==void 0}class $i{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,r=t[i],n=t[i-1];i:{e:{let s;t:{r:if(!(e<r)){for(let o=i+2;;){if(r===void 0){if(e<n)break r;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(n=r,r=t[++i],e<r)break e}s=t.length;break t}if(!(e>=n)){let o=t[1];if(e<o)i=2,n=o;for(let a=i-2;;){if(n===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===a)break;if(r=n,n=t[--i-1],e>=n)break e}s=i,i=0;break t}break i}while(i<s){let o=i+s>>>1;if(e<t[o])s=o;else i=o+1}if(r=t[i],n=t[i-1],n===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,n,r)}return this.interpolate_(i,n,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,n=e*r;for(let s=0;s!==r;++s)t[s]=i[n+s];return t}interpolate_(){throw Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}}class Al extends $i{constructor(e,t,i,r){super(e,t,i,r);this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Fa,endingEnd:Fa}}intervalChanged_(e,t,i){let r=this.parameterPositions,n=e-2,s=e+1,o=r[n],a=r[s];if(o===void 0)switch(this.getSettings_().endingStart){case Ba:n=e,o=2*t-i;break;case Oa:n=r.length-2,o=t+r[n]-r[n+1];break;default:n=e,o=i}if(a===void 0)switch(this.getSettings_().endingEnd){case Ba:s=e,a=2*i-t;break;case Oa:s=1,a=i+r[1]-r[0];break;default:s=e-1,a=t}let l=(i-t)*0.5,c=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(a-i),this._offsetPrev=n*c,this._offsetNext=s*c}interpolate_(e,t,i,r){let n=this.resultBuffer,s=this.sampleValues,o=this.valueSize,a=e*o,l=a-o,c=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,h=this._weightNext,d=(i-t)/(r-t),x=d*d,y=x*d,p=-f*y+2*f*x-f*d,m=(1+f)*y+(-1.5-2*f)*x+(-0.5+f)*d+1,T=(-1-h)*y+(1.5+h)*x+0.5*d,E=h*y-h*x;for(let S=0;S!==o;++S)n[S]=p*s[c+S]+m*s[l+S]+T*s[a+S]+E*s[u+S];return n}}class ha extends $i{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let n=this.resultBuffer,s=this.sampleValues,o=this.valueSize,a=e*o,l=a-o,c=(i-t)/(r-t),u=1-c;for(let f=0;f!==o;++f)n[f]=s[l+f]*u+s[a+f]*c;return n}}class Rl extends $i{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}}class Cl extends $i{interpolate_(e,t,i,r){let n=this.resultBuffer,s=this.sampleValues,o=this.valueSize,a=e*o,l=a-o,c=this.inTangents,u=this.outTangents;if(!c||!u){let d=(i-t)/(r-t),x=1-d;for(let y=0;y!==o;++y)n[y]=s[l+y]*x+s[a+y]*d;return n}let f=o*2,h=e-1;for(let d=0;d!==o;++d){let x=s[l+d],y=s[a+d],p=h*f+d*2,m=u[p],T=u[p+1],E=e*f+d*2,S=c[E],C=c[E+1],L=Hg(i,t,m,S,r);n[d]=Uu(L,x,T,C,y)}return n}}function Uu(e,t,i,r,n){let s=1-e;return s*s*s*t+3*s*s*e*i+3*s*e*e*r+e*e*e*n}function Vg(e,t,i,r,n){let s=1-e;return 3*s*s*(i-t)+6*s*e*(r-i)+3*e*e*(n-r)}function Hg(e,t,i,r,n){let s=(e-t)/(n-t);for(let o=0;o<8;o++){let a=Uu(s,t,i,r,n)-e;if(Math.abs(a)<0.0000000001)break;let l=Vg(s,t,i,r,n);if(Math.abs(l)<0.0000000001)break;s=Math.max(0,Math.min(1,s-a/l))}return s}class ti{constructor(e,t,i,r){if(e===void 0)throw Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=kr(t,this.TimeBufferType),this.values=kr(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:kr(e.times,Array),values:kr(e.values,Array)};let r=e.getInterpolation();if(r!==e.DefaultInterpolation)i.interpolation=r;if(Ps(e.settings))i.settings={inTangents:kr(e.settings.inTangents,Array),outTangents:kr(e.settings.outTangents,Array)}}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Rl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ha(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Al(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Cl(this.times,this.values,this.getValueSize(),e);if(this.settings)t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents;return t}setInterpolation(e){let t;switch(e){case rn:t=this.InterpolantFactoryMethodDiscrete;break;case Na:t=this.InterpolantFactoryMethodLinear;break;case Ua:t=this.InterpolantFactoryMethodSmooth;break;case Ql:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(i);return Ee("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return rn;case this.InterpolantFactoryMethodLinear:return Na;case this.InterpolantFactoryMethodSmooth:return Ua;case this.InterpolantFactoryMethodBezier:return Ql}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e;if(Ps(this.settings))Fu(this.settings.inTangents,e),Fu(this.settings.outTangents,e)}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e;if(Ps(this.settings))Bu(this.settings.inTangents,e),Bu(this.settings.outTangents,e)}return this}trim(e,t){let i=this.times,r=i.length,n=0,s=r-1;while(n!==r&&i[n]<e)++n;while(s!==-1&&i[s]>t)--s;if(++s,n!==0||s!==r){if(n>=s)s=Math.max(s,1),n=s-1;let o=this.getValueSize();this.times=i.slice(n,s),this.values=this.values.slice(n*o,s*o)}return this}validate(){let e=!0,t=this.getValueSize();if(t-Math.floor(t)!==0)Oe("KeyframeTrack: Invalid value size in track.",this),e=!1;let i=this.times,r=this.values,n=i.length;if(n===0)Oe("KeyframeTrack: Track is empty.",this),e=!1;let s=null;for(let o=0;o!==n;o++){let a=i[o];if(typeof a==="number"&&isNaN(a)){Oe("KeyframeTrack: Time is not a valid number.",this,o,a),e=!1;break}if(s!==null&&s>a){Oe("KeyframeTrack: Out of order keys.",this,o,a,s),e=!1;break}s=a}if(r!==void 0){if(jl(r))for(let o=0,a=r.length;o!==a;++o){let l=r[o];if(isNaN(l)){Oe("KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===Ua,n=e.length-1,s=1;for(let o=1;o<n;++o){let a=!1,l=e[o],c=e[o+1];if(l!==c&&(o!==1||l!==e[0]))if(!r){let u=o*i,f=u-i,h=u+i;for(let d=0;d!==i;++d){let x=t[u+d];if(x!==t[f+d]||x!==t[h+d]){a=!0;break}}}else a=!0;if(a){if(o!==s){e[s]=e[o];let u=o*i,f=s*i;for(let h=0;h!==i;++h)t[f+h]=t[u+h]}++s}}if(n>0){e[s]=e[n];for(let o=n*i,a=s*i,l=0;l!==i;++l)t[a+l]=t[o+l];++s}if(s!==e.length)this.times=e.slice(0,s),this.values=t.slice(0,s*i);else this.times=e,this.values=t;return this}clone(){let e=this.times.slice(),t=this.values.slice(),r=new this.constructor(this.name,e,t);if(r.createInterpolant=this.createInterpolant,Ps(this.settings))r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()};return r}}function Fu(e,t){for(let i=0,r=e.length;i!==r;i+=2)e[i]+=t}function Bu(e,t){for(let i=0,r=e.length;i!==r;i+=2)e[i]*=t}ti.prototype.ValueTypeName="";ti.prototype.TimeBufferType=Float32Array;ti.prototype.ValueBufferType=Float32Array;ti.prototype.DefaultInterpolation=Na;class Wr extends ti{constructor(e,t,i){super(e,t,i)}}Wr.prototype.ValueTypeName="bool";Wr.prototype.ValueBufferType=Array;Wr.prototype.DefaultInterpolation=rn;Wr.prototype.InterpolantFactoryMethodLinear=void 0;Wr.prototype.InterpolantFactoryMethodSmooth=void 0;class Pl extends ti{constructor(e,t,i,r){super(e,t,i,r)}}Pl.prototype.ValueTypeName="color";class Il extends ti{constructor(e,t,i,r){super(e,t,i,r)}}Il.prototype.ValueTypeName="number";class Ll extends $i{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let n=this.resultBuffer,s=this.sampleValues,o=this.valueSize,a=(i-t)/(r-t),l=e*o;for(let c=l+o;l!==c;l+=4)ai.slerpFlat(n,0,s,l-o,s,l,a);return n}}class ua extends ti{constructor(e,t,i,r){super(e,t,i,r)}InterpolantFactoryMethodLinear(e){return new Ll(this.times,this.values,this.getValueSize(),e)}}ua.prototype.ValueTypeName="quaternion";ua.prototype.InterpolantFactoryMethodSmooth=void 0;class Xr extends ti{constructor(e,t,i){super(e,t,i)}}Xr.prototype.ValueTypeName="string";Xr.prototype.ValueBufferType=Array;Xr.prototype.DefaultInterpolation=rn;Xr.prototype.InterpolantFactoryMethodLinear=void 0;Xr.prototype.InterpolantFactoryMethodSmooth=void 0;class Dl extends ti{constructor(e,t,i,r){super(e,t,i,r)}}Dl.prototype.ValueTypeName="vector";class Nl{constructor(e,t,i){let r=this,n=!1,s=0,o=0,a=void 0,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(c){if(o++,n===!1){if(r.onStart!==void 0)r.onStart(c,s,o)}n=!0},this.itemEnd=function(c){if(s++,r.onProgress!==void 0)r.onProgress(c,s,o);if(s===o){if(n=!1,r.onLoad!==void 0)r.onLoad()}},this.itemError=function(c){if(r.onError!==void 0)r.onError(c)},this.resolveURL=function(c){if(c=c.normalize("NFC"),a)return a(c);return c},this.setURLModifier=function(c){return a=c,this},this.addHandler=function(c,u){return l.push(c,u),this},this.removeHandler=function(c){let u=l.indexOf(c);if(u!==-1)l.splice(u,2);return this},this.getHandler=function(c){for(let u=0,f=l.length;u<f;u+=2){let h=l[u],d=l[u+1];if(h.global)h.lastIndex=0;if(h.test(c))return d}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){if(!this._abortController)this._abortController=new AbortController;return this._abortController}}var Bc=new Nl;class Ci{constructor(e){if(this.manager=e!==void 0?e:Bc,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(r,n){i.load(e,r,t,n)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}}Ci.DEFAULT_MATERIAL_NAME="__DEFAULT";class Gi extends ct{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super();this.isLight=!0,this.type="Light",this.color=new de(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class fa extends Gi{constructor(e,t,i){super(e,i);this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ct.DEFAULT_UP),this.updateMatrix(),this.groundColor=new de(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}var Vc=new Je,zu=new R,Gu=new R;class qr{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new J(512,512),this.mapType=Xt,this.map=null,this.mapPass=null,this.matrix=new Je,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ki,this._frameExtents=new J(1,1),this._viewportCount=1,this._viewports=[new yt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;zu.setFromMatrixPosition(e.matrixWorld),t.position.copy(zu),Gu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Gu),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,r){Vc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(Vc,e.coordinateSystem,e.reversedDepth);let n=this._frameExtents,s=r?r.z/n.x:1,o=r?r.w/n.y:1,a=r?r.x/n.x:0,l=r?r.y/n.y:0;if(e.coordinateSystem===ur||e.reversedDepth)t.set(0.5*s,0,0,0.5*s+a,0,0.5*o,0,0.5*o+l,0,0,1,0,0,0,0,1);else t.set(0.5*s,0,0,0.5*s+a,0,0.5*o,0,0.5*o+l,0,0,0.5,0.5,0,0,0,1);t.multiply(Vc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){if(this.map)this.map.dispose();if(this.mapPass)this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}var Ul=new R,Fl=new ai,gr=new R;class wn extends ct{constructor(){super();this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Je,this.projectionMatrix=new Je,this.projectionMatrixInverse=new Je,this.coordinateSystem=si,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){if(super.updateMatrixWorld(e),this.matrixWorld.decompose(Ul,Fl,gr),gr.x===1&&gr.y===1&&gr.z===1)this.matrixWorldInverse.copy(this.matrixWorld).invert();else this.matrixWorldInverse.compose(Ul,Fl,gr.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){if(super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(Ul,Fl,gr),gr.x===1&&gr.y===1&&gr.z===1)this.matrixWorldInverse.copy(this.matrixWorld).invert();else this.matrixWorldInverse.compose(Ul,Fl,gr.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}var Yr=new R,Vu=new J,Hu=new J;class kt extends wn{constructor(e=50,t=1,i=0.1,r=2000){super();this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=0.5*this.getFilmHeight()/e;this.fov=ln*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(is*0.5*this.fov);return 0.5*this.getFilmHeight()/e}getEffectiveFOV(){return ln*2*Math.atan(Math.tan(is*0.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Yr.set(-1,-1,0.5).applyMatrix4(this.projectionMatrixInverse),t.set(Yr.x,Yr.y).multiplyScalar(-e/Yr.z),Yr.set(1,1,0.5).applyMatrix4(this.projectionMatrixInverse),i.set(Yr.x,Yr.y).multiplyScalar(-e/Yr.z)}getViewSize(e,t){return this.getViewBounds(e,Vu,Hu),t.subVectors(Hu,Vu)}setViewOffset(e,t,i,r,n,s){if(this.aspect=e/t,this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=n,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(is*0.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,n=-0.5*r,s=this.view;if(this.view!==null&&this.view.enabled){let{fullWidth:a,fullHeight:l}=s;n+=s.offsetX*r/a,t-=s.offsetY*i/l,r*=s.width/a,i*=s.height/l}let o=this.filmOffset;if(o!==0)n+=e*o/this.getFilmWidth();this.projectionMatrix.makePerspective(n,n+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);if(t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null)t.object.view=Object.assign({},this.view);return t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Hc extends qr{constructor(){super(new kt(50,1,0.5,500));this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,i=ln*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height*this.aspect,n=e.distance||t.far;if(i!==t.fov||r!==t.aspect||n!==t.far)t.fov=i,t.aspect=r,t.far=n,t.updateProjectionMatrix();super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}}class da extends Gi{constructor(e,t,i=0,r=Math.PI/3,n=0,s=2){super(e,t);this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ct.DEFAULT_UP),this.updateMatrix(),this.target=new ct,this.distance=i,this.angle=r,this.penumbra=n,this.decay=s,this.map=null,this.shadow=new Hc}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);if(t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture)t.object.map=this.map.toJSON(e).uuid;return t.object.shadow=this.shadow.toJSON(),t}}class kc extends qr{constructor(){super(new kt(90,1,0.5,500));this.isPointLightShadow=!0}}class Ar extends Gi{constructor(e,t,i=0,r=2){super(e,t);this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new kc}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class Rr extends wn{constructor(e=-1,t=1,i=1,r=-1,n=0.1,s=2000){super();this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=n,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,n,s){if(this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=n,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2,n=i-e,s=i+e,o=r+t,a=r-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;n+=l*this.view.offsetX,s=n+l*this.view.width,o-=c*this.view.offsetY,a=o-c*this.view.height}this.projectionMatrix.makeOrthographic(n,s,o,a,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);if(t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null)t.object.view=Object.assign({},this.view);return t}}class Wc extends qr{constructor(){super(new Rr(-5,5,5,-5,0.5,500));this.isDirectionalLightShadow=!0}}class An extends Gi{constructor(e,t){super(e,t);this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ct.DEFAULT_UP),this.updateMatrix(),this.target=new ct,this.shadow=new Wc}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}var Is=-90,Ls=1;class Rn extends ct{constructor(e,t,i){super();this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new kt(Is,Ls,e,t);r.layers=this.layers,this.add(r);let n=new kt(Is,Ls,e,t);n.layers=this.layers,this.add(n);let s=new kt(Is,Ls,e,t);s.layers=this.layers,this.add(s);let o=new kt(Is,Ls,e,t);o.layers=this.layers,this.add(o);let a=new kt(Is,Ls,e,t);a.layers=this.layers,this.add(a);let l=new kt(Is,Ls,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,r,n,s,o,a]=t;for(let l of t)this.remove(l);if(e===si)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),n.up.set(0,0,-1),n.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),a.up.set(0,1,0),a.lookAt(0,0,-1);else if(e===ur)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),n.up.set(0,0,1),n.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),a.up.set(0,-1,0),a.lookAt(0,0,-1);else throw Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){if(this.parent===null)this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:r}=this;if(this.coordinateSystem!==e.coordinateSystem)this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem();let[n,s,o,a,l,c]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),d=e.xr.enabled;e.xr.enabled=!1;let x=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let y=!1;if(e.isWebGLRenderer===!0)y=e.state.buffers.depth.getReversed();else y=e.reversedDepthBuffer;if(e.setRenderTarget(i,0,r),y&&e.autoClear===!1)e.clearDepth();if(e.render(t,n),e.setRenderTarget(i,1,r),y&&e.autoClear===!1)e.clearDepth();if(e.render(t,s),e.setRenderTarget(i,2,r),y&&e.autoClear===!1)e.clearDepth();if(e.render(t,o),e.setRenderTarget(i,3,r),y&&e.autoClear===!1)e.clearDepth();if(e.render(t,a),e.setRenderTarget(i,4,r),y&&e.autoClear===!1)e.clearDepth();if(e.render(t,l),i.texture.mipmapsAutoUpdate=x,e.setRenderTarget(i,5,r),y&&e.autoClear===!1)e.clearDepth();e.render(t,c),e.setRenderTarget(u,f,h),e.xr.enabled=d,i.texture.needsPMREMUpdate=!0}}class Bl extends kt{constructor(e=[]){super();this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}}class pa{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){if(this._document=e,e.hidden!==void 0)this._pageVisibilityHandler=r0.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1)}disconnect(){if(this._pageVisibilityHandler!==null)this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null;this._document=null}getDelta(){return this._delta/1000}getElapsed(){return this._elapsed/1000}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){if(this._pageVisibilityHandler!==null&&this._document.hidden===!0)this._delta=0;else this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta;return this}}function r0(){if(this._document.hidden===!1)this.reset()}var Xc="\\[\\]\\.:\\/",s0=new RegExp("["+Xc+"]","g"),qc="[^"+Xc+"]",o0="[^"+Xc.replace("\\.","")+"]",a0=/((?:WC+[\/:])*)/.source.replace("WC",qc),l0=/(WCOD+)?/.source.replace("WCOD",o0),c0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",qc),h0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",qc),u0=new RegExp("^"+a0+l0+c0+h0+"$"),f0=["material","materials","bones","map"];class Xu{constructor(e,t,i){let r=i||At.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,r=this._bindings[i];if(r!==void 0)r.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,n=i.length;r!==n;++r)i[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}}class At{constructor(e,t,i){this.path=t,this.parsedPath=i||At.parseTrackName(t),this.node=At.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){if(!(e&&e.isAnimationObjectGroup))return new At(e,t,i);else return new At.Composite(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(s0,"")}static parseTrackName(e){let t=u0.exec(e);if(t===null)throw Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=i.nodeName&&i.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let n=i.nodeName.substring(r+1);if(f0.indexOf(n)!==-1)i.nodeName=i.nodeName.substring(0,r),i.objectName=n}if(i.propertyName===null||i.propertyName.length===0)throw Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(n){for(let s=0;s<n.length;s++){let o=n[s];if(o.name===t||o.uuid===t)return o;let a=i(o.children);if(a)return a}return null},r=i(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let r=0,n=i.length;r!==n;++r)e[t++]=i[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let r=0,n=i.length;r!==n;++r)i[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let r=0,n=i.length;r!==n;++r)i[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let r=0,n=i.length;r!==n;++r)i[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,{objectName:i,propertyName:r,propertyIndex:n}=t;if(!e)e=At.findNode(this.rootNode,t.nodeName),this.node=e;if(this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ee("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let l=t.objectIndex;switch(i){case"materials":if(!e.material){Oe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Oe("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Oe("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let c=0;c<e.length;c++)if(e[c].name===l){l=c;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Oe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Oe("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){Oe("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(l!==void 0){if(e[l]===void 0){Oe("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let s=e[r];if(s===void 0){let l=t.nodeName;Oe("PropertyBinding: Trying to update property for track: "+l+"."+r+" but it wasn't found.",e);return}let o=this.Versioning.None;if(this.targetObject=e,e.isMaterial===!0)o=this.Versioning.NeedsUpdate;else if(e.isObject3D===!0)o=this.Versioning.MatrixWorldNeedsUpdate;let a=this.BindingType.Direct;if(n!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){Oe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Oe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}if(e.morphTargetDictionary[n]!==void 0)n=e.morphTargetDictionary[n]}a=this.BindingType.ArrayElement,this.resolvedProperty=s,this.propertyIndex=n}else if(s.fromArray!==void 0&&s.toArray!==void 0)a=this.BindingType.HasFromToArray,this.resolvedProperty=s;else if(Array.isArray(s))a=this.BindingType.EntireArray,this.resolvedProperty=s;else this.propertyName=r;this.getValue=this.GetterByBindingType[a],this.setValue=this.SetterByBindingTypeAndVersioning[a][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}At.Composite=Xu;At.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};At.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};At.prototype.GetterByBindingType=[At.prototype._getValue_direct,At.prototype._getValue_array,At.prototype._getValue_arrayElement,At.prototype._getValue_toArray];At.prototype.SetterByBindingTypeAndVersioning=[[At.prototype._setValue_direct,At.prototype._setValue_direct_setNeedsUpdate,At.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[At.prototype._setValue_array,At.prototype._setValue_array_setNeedsUpdate,At.prototype._setValue_array_setMatrixWorldNeedsUpdate],[At.prototype._setValue_arrayElement,At.prototype._setValue_arrayElement_setNeedsUpdate,At.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[At.prototype._setValue_fromArray,At.prototype._setValue_fromArray_setNeedsUpdate,At.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var BP=new Float32Array(1);class qu{static{this.prototype.isMatrix2=!0}constructor(e,t,i,r){if(this.elements=[1,0,0,1],e!==void 0)this.set(e,t,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,r){let n=this.elements;return n[0]=e,n[2]=t,n[1]=i,n[3]=r,this}}function Yc(e,t,i,r){let n=g0(r);switch(i){case La:return e*t;case Zn:return e*t/n.components*n.byteLength;case jr:return e*t/n.components*n.byteLength;case Ui:return e*t*2/n.components*n.byteLength;case Jn:return e*t*2/n.components*n.byteLength;case Da:return e*t*3/n.components*n.byteLength;case ni:return e*t*4/n.components*n.byteLength;case Kn:return e*t*4/n.components*n.byteLength;case Qn:case $n:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case jn:case es:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case io:case no:return Math.max(e,16)*Math.max(t,8)/4;case to:case ro:return Math.max(e,8)*Math.max(t,8)/2;case so:case oo:case lo:case co:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case ao:case en:case ho:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case uo:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case fo:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case po:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case mo:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case go:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case xo:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case _o:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case vo:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case yo:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case Mo:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case So:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case bo:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case To:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case Eo:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case wo:case Ao:case Ro:return Math.ceil(e/4)*Math.ceil(t/4)*16;case Co:case Po:return Math.ceil(e/4)*Math.ceil(t/4)*8;case tn:case Io:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw Error(`Unable to determine texture byte length for ${i} format.`)}function g0(e){switch(e){case Xt:case Ra:return{byteLength:1,components:1};case vr:case Ca:case Lt:return{byteLength:2,components:1};case qn:case Yn:return{byteLength:2,components:4};case Qt:case Xn:case qt:return{byteLength:4,components:1};case Pa:case Ia:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}if(typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ws}}));if(typeof window<"u")if(window.__THREE__)Ee("WARNING: Multiple instances of Three.js being imported.");else window.__THREE__=Ws;function Ol(){let e=null,t=!1,i=null,r=null;function n(s,o){r=e.requestAnimationFrame(n),i(s,o)}return{start:function(){if(t===!0)return;if(i===null)return;if(e===null)return;r=e.requestAnimationFrame(n),t=!0},stop:function(){if(e!==null)e.cancelAnimationFrame(r);t=!1},setAnimationLoop:function(s){i=s},setContext:function(s){e=s}}}function Yu(e){let t=new WeakMap;function i(a,l){let{array:c,usage:u}=a,f=c.byteLength,h=e.createBuffer();e.bindBuffer(l,h),e.bufferData(l,c,u),a.onUploadCallback();let d;if(c instanceof Float32Array)d=e.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=e.HALF_FLOAT;else if(c instanceof Uint16Array)if(a.isFloat16BufferAttribute)d=e.HALF_FLOAT;else d=e.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=e.SHORT;else if(c instanceof Uint32Array)d=e.UNSIGNED_INT;else if(c instanceof Int32Array)d=e.INT;else if(c instanceof Int8Array)d=e.BYTE;else if(c instanceof Uint8Array)d=e.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=e.UNSIGNED_BYTE;else throw Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function r(a,l,c){let{array:u,updateRanges:f}=l;if(e.bindBuffer(c,a),f.length===0)e.bufferSubData(c,0,u);else{f.sort((d,x)=>d.start-x.start);let h=0;for(let d=1;d<f.length;d++){let x=f[h],y=f[d];if(y.start<=x.start+x.count+1)x.count=Math.max(x.count,y.start+y.count-x.start);else++h,f[h]=y}f.length=h+1;for(let d=0,x=f.length;d<x;d++){let y=f[d];e.bufferSubData(c,y.start*u.BYTES_PER_ELEMENT,u,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function n(a){if(a.isInterleavedBufferAttribute)a=a.data;return t.get(a)}function s(a){if(a.isInterleavedBufferAttribute)a=a.data;let l=t.get(a);if(l)e.deleteBuffer(l.buffer),t.delete(a)}function o(a,l){if(a.isInterleavedBufferAttribute)a=a.data;if(a.isGLBufferAttribute){let u=t.get(a);if(!u||u.version<a.version)t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,i(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(c.buffer,a,l),c.version=a.version}}return{get:n,remove:s,update:o}}var Zu=`
#ifdef USE_ALPHAHASH

	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;

#endif
`;var Ju=`
#ifdef USE_ALPHAHASH

	/**
	 * See: https://casual-effects.com/research/Wyman2017Hashed/index.html
	 */

	const float ALPHA_HASH_SCALE = 0.05; // Derived from trials only, and may be changed.

	float hash2D( vec2 value ) {

		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );

	}

	float hash3D( vec3 value ) {

		return hash2D( vec2( hash2D( value.xy ), value.z ) );

	}

	float getAlphaHashThreshold( vec3 position ) {

		// Find the discretized derivatives of our coordinates
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );

		// Find two nearest log-discretized noise scales
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);

		// Compute alpha thresholds at our two noise scales
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);

		// Factor to interpolate lerp with
		float lerpFactor = fract( log2( pixScale ) );

		// Interpolate alpha threshold from noise at two scales
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;

		// Pass into CDF to compute uniformly distrib threshold
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);

		// Find our final, uniformly distributed alpha threshold (ατ)
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;

		// Avoids ατ == 0. Could also do ατ =1-ατ
		return clamp( threshold , 1.0e-6, 1.0 );

	}

#endif
`;var Ku=`
#ifdef USE_ALPHAMAP

	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;

#endif
`;var Qu=`
#ifdef USE_ALPHAMAP

	uniform sampler2D alphaMap;

#endif
`;var $u=`
#ifdef USE_ALPHATEST

	#ifdef ALPHA_TO_COVERAGE

	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;

	#else

	if ( diffuseColor.a < alphaTest ) discard;

	#endif

#endif
`;var ju=`
#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif
`;var ef=`
#ifdef USE_AOMAP

	// reads channel R, compatible with a combined OcclusionRoughnessMetallic (RGB) texture
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;

	reflectedLight.indirectDiffuse *= ambientOcclusion;

	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif

	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif

	#if defined( USE_ENVMAP ) && defined( STANDARD )

		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );

		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );

	#endif

#endif
`;var tf=`
#ifdef USE_AOMAP

	uniform sampler2D aoMap;
	uniform float aoMapIntensity;

#endif
`;var rf=`
#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif

	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {

		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );

	}

	float getIndirectIndex( const in int i ) {

		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );

	}

#endif

#ifdef USE_BATCHING_COLOR

	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {

		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );

	}

#endif
`;var nf=`
#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif
`;var sf=`
vec3 transformed = vec3( position );

#ifdef USE_ALPHAHASH

	vPosition = vec3( position );

#endif
`;var of=`
vec3 objectNormal = vec3( normal );

#ifdef USE_TANGENT

	vec3 objectTangent = vec3( tangent.xyz );

#endif
`;var af=`

float G_BlinnPhong_Implicit( /* const in float dotNL, const in float dotNV */ ) {

	// geometry term is (n dot l)(n dot v) / 4(n dot l)(n dot v)
	return 0.25;

}

float D_BlinnPhong( const in float shininess, const in float dotNH ) {

	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );

}

vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {

	vec3 halfDir = normalize( lightDir + viewDir );

	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );

	vec3 F = F_Schlick( specularColor, 1.0, dotVH );

	float G = G_BlinnPhong_Implicit( /* dotNL, dotNV */ );

	float D = D_BlinnPhong( shininess, dotNH );

	return F * ( G * D );

} // validated

`;var lf=`

#ifdef USE_IRIDESCENCE

	// XYZ to linear-sRGB color space
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);

	// Assume air interface for top
	// Note: We don't handle the case fresnel0 == 1
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {

		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );

	}

	// Conversion FO/IOR
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {

		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );

	}

	// ior is a value between 1.0 and 3.0. 1.0 is air interface
	float IorToFresnel0( float transmittedIor, float incidentIor ) {

		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));

	}

	// Fresnel equations for dielectric/dielectric interfaces.
	// Ref: https://belcour.github.io/blog/research/publication/2017/05/01/brdf-thin-film.html
	// Evaluation XYZ sensitivity curves in Fourier space
	vec3 evalSensitivity( float OPD, vec3 shift ) {

		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );

		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;

		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;

	}

	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {

		vec3 I;

		// Force iridescenceIOR -> outsideIOR when thinFilmThickness -> 0.0
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		// Evaluate the cosTheta on the base layer (Snell law)
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );

		// Handle TIR:
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {

			return vec3( 1.0 );

		}

		float cosTheta2 = sqrt( cosTheta2Sq );

		// First interface
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;

		// Second interface
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) ); // guard against 1.0
		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;

		// Phase shift
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;

		// Compound terms
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );

		// Reflectance term for m = 0 (DC term amplitude)
		vec3 C0 = R12 + Rs;
		I = C0;

		// Reflectance term for m > 0 (pairs of diracs)
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {

			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;

		}

		// Since out of gamut colors might be produced, negative color values are clamped to 0.
		return max( I, vec3( 0.0 ) );

	}

#endif

`;var cf=`
#ifdef USE_BUMPMAP

	uniform sampler2D bumpMap;
	uniform float bumpScale;

	// Bump Mapping Unparametrized Surfaces on the GPU by Morten S. Mikkelsen
	// https://mmikk.github.io/papers3d/mm_sfgrad_bump.pdf

	// Evaluate the derivative of the height w.r.t. screen-space using forward differencing (listing 2)

	vec2 dHdxy_fwd() {

		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );

		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;

		return vec2( dBx, dBy );

	}

	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {

		// normalize is done to ensure that the bump map looks the same regardless of the texture's scale
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm; // normalized

		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );

		float fDet = dot( vSigmaX, R1 ) * faceDirection;

		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );

	}

#endif
`;var hf=`
#if NUM_CLIPPING_PLANES > 0

	vec4 plane;

	#ifdef ALPHA_TO_COVERAGE

		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;

		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {

			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );

			if ( clipOpacity == 0.0 ) discard;

		}
		#pragma unroll_loop_end

		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES

			float unionClipOpacity = 1.0;

			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {

				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );

			}
			#pragma unroll_loop_end

			clipOpacity *= 1.0 - unionClipOpacity;

		#endif

		diffuseColor.a *= clipOpacity;

		if ( diffuseColor.a == 0.0 ) discard;

	#else

		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {

			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;

		}
		#pragma unroll_loop_end

		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES

			bool clipped = true;

			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {

				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;

			}
			#pragma unroll_loop_end

			if ( clipped ) discard;

		#endif

	#endif

#endif
`;var uf=`
#if NUM_CLIPPING_PLANES > 0

	varying vec3 vClipPosition;

	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];

#endif
`;var ff=`
#if NUM_CLIPPING_PLANES > 0

	varying vec3 vClipPosition;

#endif
`;var df=`
#if NUM_CLIPPING_PLANES > 0

	vClipPosition = - mvPosition.xyz;

#endif
`;var pf=`
#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )

	diffuseColor *= vColor;

#endif
`;var mf=`
#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )

	varying vec4 vColor;

#endif
`;var gf=`
#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )

	varying vec4 vColor;

#endif
`;var xf=`
#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )

	vColor = vec4( 1.0 );

#endif

#ifdef USE_COLOR_ALPHA

	vColor *= color;

#elif defined( USE_COLOR )

	vColor.rgb *= color;

#endif

#ifdef USE_INSTANCING_COLOR

	vColor.rgb *= instanceColor.rgb;

#endif

#ifdef USE_BATCHING_COLOR

	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );

#endif
`;var _f=`
#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6

#ifndef saturate
// <tonemapping_pars_fragment> may have defined saturate() already
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )

float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }

// expects values in the range of [0,1]x[0,1], returns values in the [0,1] range.
// do not collapse into a single function per: http://byteblacksmith.com/improvements-to-the-canonical-one-liner-glsl-rand-for-opengl-es-2-0/
highp float rand( const in vec2 uv ) {

	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );

	return fract( sin( sn ) * c );

}

#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif

struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};

struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};

#ifdef USE_ALPHAHASH

	varying vec3 vPosition;

#endif

vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

}

#define inverseTransformDirection transformDirectionByInverseViewMatrix // @deprecated r185

vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {

	// upper-left 3x3 of view matrix is assumed to be orthogonal

	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );

}

vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {

	// upper-left 3x3 of view matrix is assumed to be orthogonal

	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );

}

bool isPerspectiveMatrix( mat4 m ) {

	return m[ 2 ][ 3 ] == - 1.0;

}

vec2 equirectUv( in vec3 dir ) {

	// dir is assumed to be unit length

	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;

	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;

	return vec2( u, v );

}

vec3 BRDF_Lambert( const in vec3 diffuseColor ) {

	return RECIPROCAL_PI * diffuseColor;

} // validated

vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {

	// Original approximation by Christophe Schlick '94
	// float fresnel = pow( 1.0 - dotVH, 5.0 );

	// Optimized variant (presented by Epic at SIGGRAPH '13)
	// https://cdn2.unrealengine.com/Resources/files/2013SiggraphPresentationsNotes-26915738.pdf
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );

	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );

} // validated

float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {

	// Original approximation by Christophe Schlick '94
	// float fresnel = pow( 1.0 - dotVH, 5.0 );

	// Optimized variant (presented by Epic at SIGGRAPH '13)
	// https://cdn2.unrealengine.com/Resources/files/2013SiggraphPresentationsNotes-26915738.pdf
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );

	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );

} // validated
`;var vf=`

vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT

	vec3 transformedTangent = objectTangent;

#endif

#ifdef USE_BATCHING

	// this is in lieu of a per-instance normal-matrix
	// non-uniform scaling in the instance matrix is supported
	// shear transforms are not supported

	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;

	#ifdef USE_TANGENT

		transformedTangent = bm * transformedTangent;

	#endif

#endif

#ifdef USE_INSTANCING

	// this is in lieu of a per-instance normal-matrix
	// non-uniform scaling in the instance matrix is supported
	// shear transforms are not supported

	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;

	#ifdef USE_TANGENT

		transformedTangent = im * transformedTangent;

	#endif

#endif

transformedNormal = normalMatrix * transformedNormal;

#ifdef FLIP_SIDED

	transformedNormal = - transformedNormal;

#endif

#ifdef USE_TANGENT

	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;

#endif
`;var yf=`
#ifdef USE_DISPLACEMENTMAP

	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;

#endif
`;var Mf=`
#ifdef USE_DISPLACEMENTMAP

	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );

#endif
`;var Sf=`
#ifdef USE_EMISSIVEMAP

	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );

	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE

		// use inline sRGB decode until browsers properly support SRGB8_ALPHA8 with video textures (#26516)

		emissiveColor = sRGBTransferEOTF( emissiveColor );

	#endif

	totalEmissiveRadiance *= emissiveColor.rgb;

#endif
`;var bf=`
#ifdef USE_EMISSIVEMAP

	uniform sampler2D emissiveMap;

#endif
`;var Tf=`
gl_FragColor = linearToOutputTexel( gl_FragColor );
`;var Ef=`

vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}

vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}

vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}

`;var wf=`
#ifdef USE_ENVMAP

	#ifdef ENV_WORLDPOS

		vec3 cameraToFrag;

		if ( isOrthographic ) {

			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );

		} else {

			cameraToFrag = normalize( vWorldPosition - cameraPosition );

		}

		// Transforming Normal Vectors with the Inverse Transformation
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );

		#ifdef ENVMAP_MODE_REFLECTION

			vec3 reflectVec = reflect( cameraToFrag, worldNormal );

		#else

			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );

		#endif

	#else

		vec3 reflectVec = vReflect;

	#endif

	#ifdef ENVMAP_TYPE_CUBE

		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );

		#ifdef ENVMAP_BLENDING_MULTIPLY

			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );

		#elif defined( ENVMAP_BLENDING_MIX )

			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );

		#elif defined( ENVMAP_BLENDING_ADD )

			outgoingLight += envColor.xyz * specularStrength * reflectivity;

		#endif

	#endif

#endif
`;var Af=`
#ifdef USE_ENVMAP

	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;

	#ifdef ENVMAP_TYPE_PMREM

		// Invert PMREMGenerator.lodToRoughness(). Matches Filament's perceptualRoughnessToLod().
		// https://github.com/google/filament/blob/main/shaders/src/surface_light_indirect.fs
		float roughnessToMip( const in float roughness ) {

			float r = clamp( roughness, 0.0, 1.0 );

			return ENVMAP_MAX_LOD * r * ( 2.0 - r );

		}

	#endif

#endif
`;var Rf=`
#ifdef USE_ENVMAP

	uniform float reflectivity;

	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )

		#define ENV_WORLDPOS

	#endif

	#ifdef ENV_WORLDPOS

		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif

#endif
`;var Cf=`
#ifdef USE_ENVMAP

	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )

		#define ENV_WORLDPOS

	#endif

	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;

	#else

		varying vec3 vReflect;
		uniform float refractionRatio;

	#endif

#endif
`;var Pf=`
#ifdef USE_ENVMAP

	#ifdef ENV_WORLDPOS

		vWorldPosition = worldPosition.xyz;

	#else

		vec3 cameraToVertex;

		if ( isOrthographic ) {

			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );

		} else {

			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );

		}

		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );

		#ifdef ENVMAP_MODE_REFLECTION

			vReflect = reflect( cameraToVertex, worldNormal );

		#else

			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );

		#endif

	#endif

#endif
`;var If=`
#ifdef USE_FOG

	vFogDepth = - mvPosition.z;

#endif
`;var Lf=`
#ifdef USE_FOG

	varying float vFogDepth;

#endif
`;var Df=`
#ifdef USE_FOG

	#ifdef FOG_EXP2

		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );

	#else

		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );

	#endif

	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );

#endif
`;var Nf=`
#ifdef USE_FOG

	uniform vec3 fogColor;
	varying float vFogDepth;

	#ifdef FOG_EXP2

		uniform float fogDensity;

	#else

		uniform float fogNear;
		uniform float fogFar;

	#endif

#endif
`;var Uf=`

#ifdef USE_GRADIENTMAP

	uniform sampler2D gradientMap;

#endif

vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {

	// dotNL will be from -1.0 to 1.0
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );

	#ifdef USE_GRADIENTMAP

		return vec3( texture2D( gradientMap, coord ).r );

	#else

		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );

	#endif

}
`;var Ff=`
#ifdef USE_LIGHTMAP

	uniform sampler2D lightMap;
	uniform float lightMapIntensity;

#endif
`;var Bf=`
LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;
`;var Of=`
varying vec3 vViewPosition;

struct LambertMaterial {

	vec3 diffuseColor;
	float specularStrength;

};

void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {

	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;

	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );

}

void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {

	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );

}

#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert
`;var zf=`
uniform bool receiveShadow;
uniform vec3 ambientLightColor;

#if defined( USE_LIGHT_PROBES )

	uniform vec3 lightProbe[ 9 ];

#endif

// get the irradiance (radiance convolved with cosine lobe) at the point 'normal' on the unit sphere
// source: https://graphics.stanford.edu/papers/envmap/envmap.pdf
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {

	// normal is assumed to have unit length

	float x = normal.x, y = normal.y, z = normal.z;

	// band 0
	vec3 result = shCoefficients[ 0 ] * 0.886227;

	// band 1
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;

	// band 2
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );

	return result;

}

vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {

	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );

	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );

	return irradiance;

}

vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {

	vec3 irradiance = ambientLightColor;

	return irradiance;

}

float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {

	// based upon Frostbite 3 Moving to Physically-based Rendering
	// page 32, equation 26: E[window1]
	// https://seblagarde.files.wordpress.com/2015/07/course_notes_moving_frostbite_to_pbr_v32.pdf
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );

	if ( cutoffDistance > 0.0 ) {

		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );

	}

	return distanceFalloff;

}

float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {

	return smoothstep( coneCosine, penumbraCosine, angleCosine );

}

#if NUM_SUN_LIGHTS > 0

	struct SunLight {
		vec3 direction;
		vec3 color;
	};

	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];

	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {

		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;

	}

#endif


#if NUM_DIR_LIGHTS > 0

	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};

	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];

	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {

		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;

	}

#endif


#if NUM_POINT_LIGHTS > 0

	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};

	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];

	// light is an out parameter as having it as a return value caused compiler errors on some devices
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {

		vec3 lVector = pointLight.position - geometryPosition;

		light.direction = normalize( lVector );

		float lightDistance = length( lVector );

		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );

	}

#endif


#if NUM_SPOT_LIGHTS > 0

	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};

	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];

	// light is an out parameter as having it as a return value caused compiler errors on some devices
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {

		vec3 lVector = spotLight.position - geometryPosition;

		light.direction = normalize( lVector );

		float angleCos = dot( light.direction, spotLight.direction );

		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );

		if ( spotAttenuation > 0.0 ) {

			float lightDistance = length( lVector );

			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );

		} else {

			light.color = vec3( 0.0 );
			light.visible = false;

		}

	}

#endif


#if NUM_RECT_AREA_LIGHTS > 0

	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};

	// Pre-computed values of LinearTransformedCosine approximation of BRDF
	// BRDF approximation Texture is 64x64
	uniform sampler2D ltc_1; // RGBA Float
	uniform sampler2D ltc_2; // RGBA Float

	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];

#endif


#if NUM_HEMI_LIGHTS > 0

	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};

	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];

	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {

		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;

		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );

		return irradiance;

	}

#endif

#include <lightprobes_pars_fragment>
`;var Gf=`
#ifdef USE_ENVMAP

	vec3 getIBLIrradiance( const in vec3 normal ) {

		#ifdef ENVMAP_TYPE_PMREM

			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );

			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );

			return PI * envMapColor.rgb * envMapIntensity;

		#else

			return vec3( 0.0 );

		#endif

	}

	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {

		#ifdef ENVMAP_TYPE_PMREM

			vec3 reflectVec = reflect( - viewDir, normal );

			// Mixing the reflection with the normal is more accurate and keeps rough objects from gathering light from behind their tangent plane.
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );

			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );

			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );

			return envMapColor.rgb * envMapIntensity;

		#else

			return vec3( 0.0 );

		#endif

	}

	#ifdef USE_RETROREFLECTION

		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {

			#ifdef ENVMAP_TYPE_PMREM

				// The retroreflective lobe returns light toward its source, so the environment is sampled along the view direction
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );

				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );

				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );

				return envMapColor.rgb * envMapIntensity;

			#else

				return vec3( 0.0 );

			#endif

		}

	#endif

	#ifdef USE_ANISOTROPY

		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {

			#ifdef ENVMAP_TYPE_PMREM

			  // https://google.github.io/filament/Filament.md.html#lighting/imagebasedlights/anisotropy
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );

				return getIBLRadiance( viewDir, bentNormal, roughness );

			#else

				return vec3( 0.0 );

			#endif

		}

		#ifdef USE_RETROREFLECTION

			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {

				#ifdef ENVMAP_TYPE_PMREM

				  // https://google.github.io/filament/Filament.md.html#lighting/imagebasedlights/anisotropy
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );

					return getIBLRetroRadiance( viewDir, bentNormal, roughness );

				#else

					return vec3( 0.0 );

				#endif

			}

		#endif

	#endif

#endif
`;var Vf=`
ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;
`;var Hf=`
varying vec3 vViewPosition;

struct ToonMaterial {

	vec3 diffuseColor;

};

void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {

	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;

	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );

}

void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {

	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );

}

#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
`;var kf=`
BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;
`;var Wf=`
varying vec3 vViewPosition;

struct BlinnPhongMaterial {

	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;

};

void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {

	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;

	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );

	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;

}

void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {

	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );

}

#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
`;var Xf=`
PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;

vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );

// Minimum roughness, so even a perfect mirror samples a prefiltered level of the environment map.
// Matches Filament's desktop MIN_PERCEPTUAL_ROUGHNESS: https://github.com/google/filament/blob/main/shaders/src/surface_material.fs
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );

#ifdef USE_DIFFUSE_ROUGHNESS

	float diffuseRoughnessFactor = diffuseRoughness;

	#ifdef USE_DIFFUSE_ROUGHNESSMAP

		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;

	#endif

	material.diffuseRoughness = saturate( diffuseRoughnessFactor );

#endif

#ifdef IOR

	material.ior = ior;

	#ifdef USE_SPECULAR

		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;

		#ifdef USE_SPECULAR_COLORMAP

			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;

		#endif

		#ifdef USE_SPECULAR_INTENSITYMAP

			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;

		#endif

		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );

	#else

		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;

	#endif

	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );

#else

	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;

#endif

#ifdef USE_CLEARCOAT

	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;

	#ifdef USE_CLEARCOATMAP

		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;

	#endif

	#ifdef USE_CLEARCOAT_ROUGHNESSMAP

		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;

	#endif

	material.clearcoat = saturate( material.clearcoat ); // Burley clearcoat model
	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );

#endif

#ifdef USE_DISPERSION

	material.dispersion = dispersion;

#endif

#ifdef USE_RETROREFLECTION

	material.retroreflectivity = retroreflectivity;

#endif

#ifdef USE_IRIDESCENCE

	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;

	#ifdef USE_IRIDESCENCEMAP

		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;

	#endif

	#ifdef USE_IRIDESCENCE_THICKNESSMAP

		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;

	#else

		material.iridescenceThickness = iridescenceThicknessMaximum;

	#endif

#endif

#ifdef USE_SHEEN

	material.sheenColor = sheenColor;

	#ifdef USE_SHEEN_COLORMAP

		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;

	#endif

	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );

	#ifdef USE_SHEEN_ROUGHNESSMAP

		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;

	#endif

#endif

#ifdef USE_ANISOTROPY

	#ifdef USE_ANISOTROPYMAP

		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;

	#else

		vec2 anisotropyV = anisotropyVector;

	#endif

	material.anisotropy = length( anisotropyV );

	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}

	// Roughness along the anisotropy bitangent is the material roughness, while the tangent roughness increases with anisotropy.
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );

	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;

#endif
`;var qf=`

uniform sampler2D dfgLUT;

struct PhysicalMaterial {

	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;

	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;

	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif

	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif

	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif

	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif

	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif

	#ifdef IOR
		float ior;
	#endif

	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif

	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif

};

// temporary
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );

vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );

    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}

#ifdef USE_DIFFUSE_ROUGHNESS

	// Portsmouth et al. 2025, "EON: A Practical Energy-Preserving Rough Diffuse BRDF"
	// https://jcgt.org/published/0014/01/06/
	const float EON_EPSILON = 1e-7;

	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {

		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );

		return A * ( 1.0 + roughness * gOverPi );

	}

	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {

		vec3 rho = saturate( diffuseColor );

		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );

		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;

		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );

		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );

		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );

		return singleScatter + multiScatter;

	}

	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {

		vec3 rho = saturate( diffuseColor );

		if ( roughness <= EON_EPSILON ) return rho;

		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );

		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );

	}

#endif

// Moving Frostbite to Physically Based Rendering 3.0 - page 12, listing 2
// https://seblagarde.files.wordpress.com/2015/07/course_notes_moving_frostbite_to_pbr_v32.pdf
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {

	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );

	return 0.5 / max( gv + gl, EPSILON );

}

// Microfacet Models for Refraction through Rough Surfaces - equation (33)
// http://graphicrants.blogspot.com/2013/08/specular-brdf-reference.html
// alpha is "roughness squared" in Disney’s reparameterization
float D_GGX( const in float alpha, const in float dotNH ) {

	float a2 = pow2( alpha );

	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0; // avoid alpha = 0 with dotNH = 1

	return RECIPROCAL_PI * a2 / pow2( denom );

}

// https://google.github.io/filament/Filament.md.html#materialsystem/anisotropicmodel/anisotropicspecularbrdf
#ifdef USE_ANISOTROPY

	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {

		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );

	}

	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {

		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;

		return RECIPROCAL_PI * a2 * pow2 ( w2 );

	}

#endif

#ifdef USE_CLEARCOAT

	// GGX Distribution, Schlick Fresnel, GGX_SmithCorrelated Visibility
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {

		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 ); // punctual lights need a minimum roughness to show a highlight

		float alpha = pow2( roughness ); // UE4's roughness

		vec3 halfDir = normalize( lightDir + viewDir );

		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );

		vec3 F = F_Schlick( f0, f90, dotVH );

		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );

		float D = D_GGX( alpha, dotNH );

		return F * ( V * D );

	}

#endif

vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {

	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 ); // punctual lights need a minimum roughness to show a highlight

	float alpha = pow2( roughness ); // UE4's roughness

	vec3 halfDir = normalize( lightDir + viewDir );

	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );

	vec3 F = F_Schlick( f0, f90, dotVH );

	#ifdef USE_IRIDESCENCE

		F = mix( F, material.iridescenceFresnel, material.iridescence );

	#endif

	#ifdef USE_ANISOTROPY

		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );

		float alphaT = max( material.alphaT, alpha );

		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );

		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );

	#else

		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );

		float D = D_GGX( alpha, dotNH );

	#endif

	return F * ( V * D );

}

// Rect Area Light

// Real-Time Polygonal-Light Shading with Linearly Transformed Cosines
// by Eric Heitz, Jonathan Dupuy, Stephen Hill and David Neubelt
// code: https://github.com/selfshadow/ltc_code/

vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {

	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;

	float dotNV = saturate( dot( N, V ) );

	// texture parameterized by sqrt( GGX alpha ) and sqrt( 1 - cos( theta ) )
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );

	uv = uv * LUT_SCALE + LUT_BIAS;

	return uv;

}

float LTC_ClippedSphereFormFactor( const in vec3 f ) {

	// Real-Time Area Lighting: a Journey from Research to Production (p.102)
	// An approximation of the form factor of a horizon-clipped rectangle.

	float l = length( f );

	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );

}

vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {

	float x = dot( v1, v2 );

	float y = abs( x );

	// rational polynomial approximation to theta / sin( theta ) / 2PI
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;

	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;

	return cross( v1, v2 ) * theta_sintheta;

}

vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {

	// bail if point is on back side of plane of light
	// assumes ccw winding order of light vertices
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );

	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );

	// construct orthonormal basis around N
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 ); // negated from paper; possibly due to a different handedness of world coordinate system

	// compute transform
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );

	// transform rect
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );

	// project rect onto sphere
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );

	// calculate vector form factor
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );

	// adjust for horizon clipping
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );

/*
	// alternate method of adjusting for horizon clipping (see reference)
	// refactoring required
	float len = length( vectorFormFactor );
	float z = vectorFormFactor.z / len;

	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;

	// tabulated horizon-clipped sphere, apparently...
	vec2 uv = vec2( z * 0.5 + 0.5, len );
	uv = uv * LUT_SCALE + LUT_BIAS;

	float scale = texture2D( ltc_2, uv ).w;

	float result = len * scale;
*/

	return vec3( result );

}

// End Rect Area Light

#if defined( USE_SHEEN )

// https://github.com/google/filament/blob/main/shaders/src/surface_brdf.fs
float D_Charlie( float roughness, float dotNH ) {

	float alpha = pow2( roughness );

	// Estevez and Kulla 2017, "Production Friendly Microfacet Sheen BRDF"
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 ); // 2^(-14/2), so sin2h^2 > 0 in fp16

	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );

}

// https://github.com/google/filament/blob/main/shaders/src/surface_brdf.fs
float V_Neubelt( float dotNV, float dotNL ) {

	// Neubelt and Pettineo 2013, "Crafting a Next-gen Material Pipeline for The Order: 1886"
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );

}

vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {

	vec3 halfDir = normalize( lightDir + viewDir );

	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );

	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );

	return sheenColor * ( D * V );

}

#endif

// This is a curve-fit approximation to the "Charlie sheen" BRDF integrated over the hemisphere from
// Estevez and Kulla 2017, "Production Friendly Microfacet Sheen BRDF".
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {

	float dotNV = saturate( dot( normal, viewDir ) );

	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );

	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;

	float DG = exp( a * dotNV + b );

	return saturate( DG );

}

vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {

	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;

	return specularColor * fab.x + specularF90 * fab.y;

}

// Fdez-Agüera's "Multiple-Scattering Microfacet Model for Real-Time Image Based Lighting"
// Approximates multiscattering in order to preserve energy.
// http://www.jcgt.org/published/0008/01/03/
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif

	#ifdef USE_IRIDESCENCE

		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );

	#else

		vec3 Fr = specularColor;

	#endif

	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;

	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;

	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619; // 1/21
	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );

	singleScatter += FssEss;
	multiScatter += Fms * Ems;

}

#if NUM_RECT_AREA_LIGHTS > 0

	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {

		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;

		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight; // counterclockwise; light shines in local neg z direction
		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;

		vec2 uv = LTC_Uv( normal, viewDir, roughness );

		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );

		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);

		// LTC Fresnel Approximation by Stephen Hill
		// http://blog.selfshadow.com/publications/s2016-advances/s2016_ltc_fresnel.pdf
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );

		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );

		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );

		#ifdef USE_CLEARCOAT

			vec3 Ncc = geometryClearcoatNormal;

			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );

			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );

			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);

			// LTC Fresnel Approximation for clearcoat
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;

			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );

		#endif

	}

#endif

void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {

	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );

	vec3 irradiance = dotNL * directLight.color;

	#ifdef USE_CLEARCOAT

		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );

		vec3 ccIrradiance = dotNLcc * directLight.color;

		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );

	#endif

	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif

	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );

	#ifdef USE_RETROREFLECTION

		// Minimal Retroreflective Microfacet Model:
		// https://jcgt.org/published/0015/01/04/
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );

		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );

	#endif

	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;

	// Light reflected by the specular interface is not available to the diffuse layer ( glTF fresnel_mix )
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );

	#ifdef USE_RETROREFLECTION

		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );

		F = mix( F, retroF, saturate( material.retroreflectivity ) );

	#endif

	#ifdef USE_DIFFUSE_ROUGHNESS

		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );

	#else

		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );

	#endif

	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}

void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {

	// Energy reflected by the specular lobe is not available to the diffuse layer
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );

	#ifdef USE_IRIDESCENCE

		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );

	#else

		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );

	#endif

	#ifdef USE_DIFFUSE_ROUGHNESS

		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		// Irradiance has already integrated the cosine term, so use the directional
		// albedo to approximate EON under locally uniform incident radiance.
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );

	#else

		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );

	#endif

	#ifdef USE_SHEEN

		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );

		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;

		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;

		diffuse *= sheenEnergyComp;

	#endif

	reflectedLight.indirectDiffuse += diffuse;

}

void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {

	#ifdef USE_CLEARCOAT

		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );

	#endif

	#ifdef USE_SHEEN

		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;

 	#endif

	// Both indirect specular and indirect diffuse light accumulate here
	// Compute multiscattering separately for dielectric and metallic, then mix

	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );

	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );

	#ifdef USE_IRIDESCENCE

		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );

	#else

		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );

	#endif

	// Mix based on metalness
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );

	// Diffuse energy conservation uses dielectric path
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS

		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );

	#else

		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );

	#endif

	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;

	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;

	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;

	#ifdef USE_SHEEN

		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );

		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;

		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;

	#endif

	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;

}

#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical

// ref: https://seblagarde.files.wordpress.com/2015/07/course_notes_moving_frostbite_to_pbr_v32.pdf
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {

	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );

}
`;var Yf=`
/**
 * This is a template that can be used to light a material, it uses pluggable
 * RenderEquations (RE)for specific lighting scenarios.
 *
 * Instructions for use:
 * - Ensure that both RE_Direct, RE_IndirectDiffuse and RE_IndirectSpecular are defined
 * - Create a material parameter that is to be passed as the third parameter to your lighting functions.
 *
 * TODO:
 * - Add area light support.
 * - Add sphere light support.
 * - Add diffuse light probe (irradiance cubemap) support.
 */

vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );

vec3 geometryClearcoatNormal = vec3( 0.0 );

#ifdef USE_CLEARCOAT

	geometryClearcoatNormal = clearcoatNormal;

#endif

#ifdef USE_IRIDESCENCE

	float dotNVi = saturate( dot( normal, geometryViewDir ) );

	if ( material.iridescenceThickness == 0.0 ) {

		material.iridescence = 0.0;

	} else {

		material.iridescence = saturate( material.iridescence );

	}

	if ( material.iridescence > 0.0 ) {

		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );

		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );

		// Iridescence F0 approximation
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );

	}

#endif

#ifdef STANDARD

	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );

	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;

	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )

		// Multi-scattering energy compensation for direct lighting
		// Based on "Practical Multiple Scattering Compensation for Microfacet Models"
		// https://blog.selfshadow.com/publications/turquin/ms_comp_final.pdf

		// Energy of the single-scattering lobe in a white furnace ( F0 = F90 = 1 )
		float EssMs = material.dfg.x + material.dfg.y;

		// Compensate for the energy lost to multiple scattering, tinting the added term by F0 ( equation 16 )
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );

	#endif

#endif

IncidentLight directLight;

#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )

	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {

		pointLight = pointLights[ i ];

		getPointLightInfo( pointLight, geometryPosition, directLight );

		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif

		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );

	}
	#pragma unroll_loop_end

#endif

#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )

	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;

	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {

		spotLight = spotLights[ i ];

		getSpotLightInfo( spotLight, geometryPosition, directLight );

		// spot lights are ordered [shadows with maps, shadows without maps, maps without shadows, none]
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif

		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif

		#undef SPOT_LIGHT_MAP_INDEX

		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif

		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );

	}
	#pragma unroll_loop_end

#endif

#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )

	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {

		sunLight = sunLights[ i ];

		getSunLightInfo( sunLight, directLight );

		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif

		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );

	}
	#pragma unroll_loop_end

#endif

#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )

	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {

		directionalLight = directionalLights[ i ];

		getDirectionalLightInfo( directionalLight, directLight );

		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif

		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );

	}
	#pragma unroll_loop_end

#endif

#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )

	RectAreaLight rectAreaLight;

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {

		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );

	}
	#pragma unroll_loop_end

#endif

#if defined( RE_IndirectDiffuse )

	vec3 iblIrradiance = vec3( 0.0 );

	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );

	#if defined( USE_LIGHT_PROBES )

		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );

	#endif

	#if ( NUM_HEMI_LIGHTS > 0 )

		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {

			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );

		}
		#pragma unroll_loop_end

	#endif

	#if NUM_LIGHT_PROBE_GRIDS > 0

		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );

		// Sample the last grid whose cells contain the fragment.

		int probeGrid = - 1;

		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {

			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;

		}
		#pragma unroll_loop_end

		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {

			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );

		}
		#pragma unroll_loop_end

	#endif

#endif

#if defined( RE_IndirectSpecular )

	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );

#endif
`;var Zf=`
#if defined( RE_IndirectDiffuse )

	#ifdef USE_LIGHTMAP

		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;

		irradiance += lightMapIrradiance;

	#endif

	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )

		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )

			iblIrradiance += getIBLIrradiance( geometryNormal );

		#endif

	#endif

#endif

#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )

	#ifdef USE_ANISOTROPY

		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );

	#else

		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );

	#endif

	#ifdef USE_RETROREFLECTION

		#ifdef USE_ANISOTROPY

			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );

		#else

			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );

		#endif

		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );

	#endif

	radiance += iblRadiance;

	#ifdef USE_CLEARCOAT

		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );

	#endif

#endif
`;var Jf=`
#if defined( RE_IndirectDiffuse )

	#if defined( LAMBERT ) || defined( PHONG )

		irradiance += iblIrradiance;

	#endif

	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );

#endif

#if defined( RE_IndirectSpecular )

	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );

#endif
`;var Kf=`
#if NUM_LIGHT_PROBE_GRIDS > 0

// Single atlas 3D texture that stores all 7 SH sub-volumes stacked along Z.
// Atlas depth = 7 * ( nz + 2 ) where nz = probesResolution.z.
// Each sub-volume occupies ( nz + 2 ) slices: 1 padding + nz data + 1 padding.
// Padding is a copy of the first / last data slice and prevents color bleeding
// when the hardware linear filter reads across a sub-volume boundary.
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];

uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];

bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {

	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;

	// Grow the bounds by 1% of a cell, so fragments on the bounds aren't left out by
	// precision errors or samples outside of the triangle.

	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );

}

vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {

	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;

	// Offset sample position along normal by half a probe spacing
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;

	// The bounds hold one cell per probe, so they map directly to the probe grid.
	// Clamp to the texel centers of the outermost probes (XY and Z).
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );

	// Atlas UV mapping along Z:
	//   paddedSlices = nz + 2  (1 padding texel at each end of every sub-volume)
	//   atlasDepth   = 7 * paddedSlices
	//   For sub-volume t the first DATA texel sits at atlas slice t*paddedSlices + 1.
	//   Given probe-grid texel-centre UVZ = ( iz + 0.5 ) / nz the atlas UV is:
	//     atlasUvZ = ( uvw.z * nz + t * paddedSlices + 1 ) / atlasDepth
	//
	// uvZBase encodes the nz-scaled Z plus the intra-volume offset (+ 1 for padding),
	// so adding t*paddedSlices steps to each successive sub-volume.
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;

	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );

	// Unpack 9 vec3 SH L2 coefficients
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;

	// Evaluate L2 irradiance
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;

	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );

	return max( result, vec3( 0.0 ) );

}

#endif
`;var Qf=`
#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )

	// Doing a strict comparison with == 1.0 can cause noise artifacts
	// on some platforms. See issue #17623.
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;

#endif
`;var $f=`
#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )

	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;

#endif
`;var jf=`
#ifdef USE_LOGARITHMIC_DEPTH_BUFFER

	varying float vFragDepth;
	varying float vIsPerspective;

#endif
`;var ed=`
#ifdef USE_LOGARITHMIC_DEPTH_BUFFER

	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );

#endif
`;var td=`
#ifdef USE_MAP

	vec4 sampledDiffuseColor = texture2D( map, vMapUv );

	#ifdef DECODE_VIDEO_TEXTURE

		// use inline sRGB decode until browsers properly support SRGB8_ALPHA8 with video textures (#26516)

		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );

	#endif

	diffuseColor *= sampledDiffuseColor;

#endif
`;var id=`
#ifdef USE_MAP

	uniform sampler2D map;

#endif
`;var rd=`
#if defined( USE_MAP ) || defined( USE_ALPHAMAP )

	#if defined( USE_POINTS_UV )

		vec2 uv = vUv;

	#else

		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;

	#endif

#endif

#ifdef USE_MAP

	diffuseColor *= texture2D( map, uv );

#endif

#ifdef USE_ALPHAMAP

	diffuseColor.a *= texture2D( alphaMap, uv ).g;

#endif
`;var nd=`
#if defined( USE_POINTS_UV )

	varying vec2 vUv;

#else

	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )

		uniform mat3 uvTransform;

	#endif

#endif

#ifdef USE_MAP

	uniform sampler2D map;

#endif

#ifdef USE_ALPHAMAP

	uniform sampler2D alphaMap;

#endif
`;var sd=`
float metalnessFactor = metalness;

#ifdef USE_METALNESSMAP

	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );

	// reads channel B, compatible with a combined OcclusionRoughnessMetallic (RGB) texture
	metalnessFactor *= texelMetalness.b;

#endif
`;var od=`
#ifdef USE_METALNESSMAP

	uniform sampler2D metalnessMap;

#endif
`;var ad=`
#ifdef USE_INSTANCING_MORPH

	float morphTargetInfluences[ MORPHTARGETS_COUNT ];

	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;

	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {

		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;

	}
#endif
`;var ld=`
#if defined( USE_MORPHCOLORS )

	// morphTargetBaseInfluence is set based on BufferGeometry.morphTargetsRelative value:
	// When morphTargetsRelative is false, this is set to 1 - sum(influences); this results in normal = sum((target - base) * influence)
	// When morphTargetsRelative is true, this is set to 1; as a result, all morph targets are simply added to the base after weighting

	#if defined( USE_COLOR_ALPHA )

		vColor *= morphTargetBaseInfluence;

	#elif defined( USE_COLOR )

		vColor.rgb *= morphTargetBaseInfluence;

	#endif

	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {

		#if defined( USE_COLOR_ALPHA )

			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];

		#elif defined( USE_COLOR )

			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];

		#endif

	}

#endif
`;var cd=`
#ifdef USE_MORPHNORMALS

	// morphTargetBaseInfluence is set based on BufferGeometry.morphTargetsRelative value:
	// When morphTargetsRelative is false, this is set to 1 - sum(influences); this results in normal = sum((target - base) * influence)
	// When morphTargetsRelative is true, this is set to 1; as a result, all morph targets are simply added to the base after weighting
	objectNormal *= morphTargetBaseInfluence;

	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {

		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];

	}

#endif
`;var hd=`
#ifdef USE_MORPHTARGETS

	#ifndef USE_INSTANCING_MORPH

		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];

	#endif

	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;

	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {

		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;

		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );

	}

#endif
`;var ud=`
#ifdef USE_MORPHTARGETS

	// morphTargetBaseInfluence is set based on BufferGeometry.morphTargetsRelative value:
	// When morphTargetsRelative is false, this is set to 1 - sum(influences); this results in position = sum((target - base) * influence)
	// When morphTargetsRelative is true, this is set to 1; as a result, all morph targets are simply added to the base after weighting
	transformed *= morphTargetBaseInfluence;

	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {

		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];

	}

#endif
`;var fd=`
float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;

#ifdef FLAT_SHADED

	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );

#else

	vec3 normal = normalize( vNormal );

	#ifdef DOUBLE_SIDED

		normal *= faceDirection;

	#endif

#endif

#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )

	#ifdef USE_TANGENT

		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );

	#else

		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);

	#endif

	#ifdef DOUBLE_SIDED

		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;

	#endif

#endif

#ifdef USE_CLEARCOAT_NORMALMAP

	#ifdef USE_TANGENT

		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );

	#else

		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );

	#endif

	#ifdef DOUBLE_SIDED

		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;

	#endif

#endif

// non perturbed normal for clearcoat among others

vec3 nonPerturbedNormal = normal;

`;var dd=`

#ifdef USE_NORMALMAP_OBJECTSPACE

	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0; // overrides both flatShading and attribute normals

	#ifdef FLIP_SIDED

		normal = - normal;

	#endif

	#ifdef DOUBLE_SIDED

		normal = normal * faceDirection;

	#endif

	normal = normalize( normalMatrix * normal );

#elif defined( USE_NORMALMAP_TANGENTSPACE )

	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;

	#if defined( USE_PACKED_NORMALMAP )

		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );

	#endif

	mapN.xy *= normalScale;

	normal = normalize( tbn * mapN );

#elif defined( USE_BUMPMAP )

	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );

#endif
`;var pd=`
#ifndef FLAT_SHADED

	varying vec3 vNormal;

	#ifdef USE_TANGENT

		varying vec3 vTangent;
		varying vec3 vBitangent;

	#endif

#endif
`;var md=`
#ifndef FLAT_SHADED

	varying vec3 vNormal;

	#ifdef USE_TANGENT

		varying vec3 vTangent;
		varying vec3 vBitangent;

	#endif

#endif
`;var gd=`
#ifndef FLAT_SHADED // normal is computed with derivatives when FLAT_SHADED

	vNormal = normalize( transformedNormal );

	#ifdef USE_TANGENT

		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );

		#ifdef FLIP_SIDED

			vBitangent = - vBitangent;

		#endif

	#endif

#endif
`;var xd=`
#ifdef USE_NORMALMAP

	uniform sampler2D normalMap;
	uniform vec2 normalScale;

#endif

#ifdef USE_NORMALMAP_OBJECTSPACE

	uniform mat3 normalMatrix;

#endif

#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )

	// Normal Mapping Without Precomputed Tangents
	// http://www.thetenthplanet.de/archives/1180

	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {

		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );

		vec3 N = surf_norm; // normalized

		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );

		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;

		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );

		return mat3( T * scale, B * scale, N );

	}

#endif
`;var _d=`
#ifdef USE_CLEARCOAT

	vec3 clearcoatNormal = nonPerturbedNormal;

#endif
`;var vd=`
#ifdef USE_CLEARCOAT_NORMALMAP

	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;

	clearcoatNormal = normalize( tbn2 * clearcoatMapN );

#endif
`;var yd=`

#ifdef USE_CLEARCOATMAP

	uniform sampler2D clearcoatMap;

#endif

#ifdef USE_CLEARCOAT_NORMALMAP

	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;

#endif

#ifdef USE_CLEARCOAT_ROUGHNESSMAP

	uniform sampler2D clearcoatRoughnessMap;

#endif
`;var Md=`

#ifdef USE_IRIDESCENCEMAP

	uniform sampler2D iridescenceMap;

#endif

#ifdef USE_IRIDESCENCE_THICKNESSMAP

	uniform sampler2D iridescenceThicknessMap;

#endif
`;var Sd=`
#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif

#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif

gl_FragColor = vec4( outgoingLight, diffuseColor.a );
`;var bd=`
vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}

vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}

const float PackUpscale = 256. / 255.; // fraction -> 0..1 (including 1)
const float UnpackDownscale = 255. / 256.; // 0..1 -> fraction (excluding 1)
const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;

const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );

const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );

vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}

vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	// the 0.9999 tweak is unimportant, very tiny empirical improvement
	// return vec3( vuf * Inv255, gf * PackUpscale, bf * 0.9999 );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}

vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}

float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}

float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}

float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}

vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}

vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}

// NOTE: viewZ, the z-coordinate in camera space, is negative for points in front of the camera

float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	// -near maps to 0; -far maps to 1
	return ( viewZ + near ) / ( near - far );
}

float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {

	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;

	#else

		return depth * ( near - far ) - near;

	#endif
}

// NOTE: https://twitter.com/gonnavis/status/1377183786949959682

float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	// -near maps to 0; -far maps to 1
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}

float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER

		return ( near * far ) / ( ( near - far ) * depth - near );

	#else

		return ( near * far ) / ( ( far - near ) * depth - far );

	#endif
}
`;var Td=`
#ifdef PREMULTIPLIED_ALPHA

	gl_FragColor.rgb *= gl_FragColor.a;

#endif
`;var Ed=`
vec4 mvPosition = vec4( transformed, 1.0 );

#ifdef USE_BATCHING

	mvPosition = batchingMatrix * mvPosition;

#endif

#ifdef USE_INSTANCING

	mvPosition = instanceMatrix * mvPosition;

#endif

mvPosition = modelViewMatrix * mvPosition;

gl_Position = projectionMatrix * mvPosition;
`;var wd=`
#ifdef DITHERING

	gl_FragColor.rgb = dithering( gl_FragColor.rgb );

#endif
`;var Ad=`
#ifdef DITHERING

	// based on https://www.shadertoy.com/view/MslGR8
	vec3 dithering( vec3 color ) {
		//Calculate grid position
		float grid_position = rand( gl_FragCoord.xy );

		//Shift the individual colors differently, thus making it even harder to see the dithering pattern
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );

		//modify shift according to grid position.
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );

		//shift the color by dither_shift
		return color + dither_shift_RGB;
	}

#endif
`;var Rd=`
float roughnessFactor = roughness;

#ifdef USE_ROUGHNESSMAP

	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );

	// reads channel G, compatible with a combined OcclusionRoughnessMetallic (RGB) texture
	roughnessFactor *= texelRoughness.g;

#endif
`;var Cd=`
#ifdef USE_ROUGHNESSMAP

	uniform sampler2D roughnessMap;

#endif
`;var Pd=`
#if NUM_SPOT_LIGHT_COORDS > 0

	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];

#endif

#if NUM_SPOT_LIGHT_MAPS > 0

	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];

#endif

#ifdef USE_SHADOWMAP

	#if NUM_SUN_LIGHT_SHADOWS > 0

		// must match the cascade count in SunLightShadow

		#define SUN_LIGHT_CASCADES 2

		#if defined( SHADOWMAP_TYPE_PCF )

			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];

		#else

			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];

		#endif

		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;

		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};

		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];

	#endif

	#if NUM_DIR_LIGHT_SHADOWS > 0

		#if defined( SHADOWMAP_TYPE_PCF )

			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];

		#else

			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];

		#endif

		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];

		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};

		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];

	#endif

	#if NUM_SPOT_LIGHT_SHADOWS > 0

		#if defined( SHADOWMAP_TYPE_PCF )

			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];

		#else

			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];

		#endif

		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};

		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];

	#endif

	#if NUM_POINT_LIGHT_SHADOWS > 0

		#if defined( SHADOWMAP_TYPE_PCF )

			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];

		#elif defined( SHADOWMAP_TYPE_BASIC )

			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];

		#endif

		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];

		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};

		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];

	#endif

	#if defined( SHADOWMAP_TYPE_PCF )

		// Interleaved Gradient Noise for randomizing sampling patterns
		float interleavedGradientNoise( vec2 position ) {

			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );

		}

		// Vogel disk sampling for uniform circular distribution
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {

			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;

		}

	#endif

	#if defined( SHADOWMAP_TYPE_PCF )

		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {

			float shadow = 1.0;

			shadowCoord.xyz /= shadowCoord.w;

			#ifdef USE_REVERSED_DEPTH_BUFFER

				shadowCoord.z -= shadowBias;

			#else

				shadowCoord.z += shadowBias;

			#endif

			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;

			if ( frustumTest ) {

				// Hardware PCF with LinearFilter gives us 4-tap filtering per sample
				// 5 samples using Vogel disk + IGN = effectively 20 filtered taps with better distribution
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;

				// Use IGN to rotate sampling pattern per pixel
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;

				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;

			}

			return mix( 1.0, shadow, shadowIntensity );

		}

	#elif defined( SHADOWMAP_TYPE_VSM )

		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {

			float shadow = 1.0;

			shadowCoord.xyz /= shadowCoord.w;

			#ifdef USE_REVERSED_DEPTH_BUFFER

				shadowCoord.z -= shadowBias;

			#else

				shadowCoord.z += shadowBias;

			#endif

			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;

			if ( frustumTest ) {

				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;

				float mean = distribution.x;
				float variance = distribution.y * distribution.y;

				#ifdef USE_REVERSED_DEPTH_BUFFER

					float hard_shadow = step( mean, shadowCoord.z );

				#else

					float hard_shadow = step( shadowCoord.z, mean );

				#endif
				
				// Early return if fully lit
				if ( hard_shadow == 1.0 ) {

					shadow = 1.0;

				} else {

					// Variance must be non-zero to avoid division by zero
					variance = max( variance, 0.0000001 );

					// Distance from mean
					float d = shadowCoord.z - mean;

					// Chebyshev's inequality for upper bound on probability
					float p_max = variance / ( variance + d * d );

					// Reduce light bleeding by remapping [amount, 1] to [0, 1]
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );

					shadow = max( hard_shadow, p_max );

				}

			}

			return mix( 1.0, shadow, shadowIntensity );

		}

	#else // SHADOWMAP_TYPE_BASIC

		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {

			float shadow = 1.0;

			shadowCoord.xyz /= shadowCoord.w;

			#ifdef USE_REVERSED_DEPTH_BUFFER

				shadowCoord.z -= shadowBias;

			#else

				shadowCoord.z += shadowBias;

			#endif

			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;

			if ( frustumTest ) {

				float depth = texture2D( shadowMap, shadowCoord.xy ).r;

				#ifdef USE_REVERSED_DEPTH_BUFFER

					shadow = step( depth, shadowCoord.z );

				#else

					shadow = step( shadowCoord.z, depth );

				#endif

			}

			return mix( 1.0, shadow, shadowIntensity );

		}

	#endif

	#if NUM_SUN_LIGHT_SHADOWS > 0

		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {

			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;

			float shadow = 1.0;

			// walk the cascades back to front so each fade band can blend with the shadow behind it

			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {

				// ( begin, end, fade start ) view depths of the cascade

				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];

				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {

					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);

					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );

				}

			}

			return shadow;

		}

	#endif

	#if NUM_POINT_LIGHT_SHADOWS > 0

	#if defined( SHADOWMAP_TYPE_PCF )

	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {

		float shadow = 1.0;

		// for point lights, the uniform @vShadowCoord is re-purposed to hold
		// the vector from the light to the world-space position of the fragment.
		vec3 lightToPosition = shadowCoord.xyz;

		// Direction from light to fragment
		vec3 bd3D = normalize( lightToPosition );

		// For cube shadow maps, depth is stored as distance along each face's view axis, not radial distance
		// The view-space depth is the maximum component of the direction vector (which face is sampled)
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );

		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {

			// Each sample is compared against the depth of the point next to the fragment in its direction,
			// on whichever face of the cube it falls, so the comparison is the same on every face. A face
			// stores the depth along its own axis, which for the point at direction * lightDistance is
			// lightDistance * max( |x|, |y|, |z| ) of the direction, and perspective depth is a + b / z.
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;

			#ifdef USE_REVERSED_DEPTH_BUFFER

				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );

			#else

				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );

			#endif

			// Hardware PCF with LinearFilter gives us 4-tap filtering per sample
			// Use Vogel disk + IGN sampling for better quality
			float texelSize = shadowRadius / shadowMapSize.x;

			// Build a tangent-space coordinate system for applying offsets
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );

			// Use IGN to rotate sampling pattern per pixel
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;

			shadow = 0.0;

			for ( int i = 0; i < 5; i ++ ) {

				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );

				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );

				shadow += texture( shadowMap, vec4( direction, dp ) );

			}

			shadow *= 0.2;

		}

		return mix( 1.0, shadow, shadowIntensity );

	}

	#elif defined( SHADOWMAP_TYPE_BASIC )

	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {

		float shadow = 1.0;

		// for point lights, the uniform @vShadowCoord is re-purposed to hold
		// the vector from the light to the world-space position of the fragment.
		vec3 lightToPosition = shadowCoord.xyz;

		// For cube shadow maps, depth is stored as distance along each face's view axis, not radial distance
		// The view-space depth is the maximum component of the direction vector (which face is sampled)
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );

		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {

			// viewZ to perspective depth

			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;

			// Direction from light to fragment
			vec3 bd3D = normalize( lightToPosition );

			float depth = textureCube( shadowMap, bd3D ).r;

			#ifdef USE_REVERSED_DEPTH_BUFFER

				depth = 1.0 - depth;

			#endif

			shadow = step( dp, depth );

		}

		return mix( 1.0, shadow, shadowIntensity );

	}

	#endif

	#endif

#endif
`;var Id=`

#if NUM_SPOT_LIGHT_COORDS > 0

	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];

#endif

#ifdef USE_SHADOWMAP

	#if NUM_SUN_LIGHT_SHADOWS > 0

		// cascade selection and shadow coordinates are computed per fragment

		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;

	#endif

	#if NUM_DIR_LIGHT_SHADOWS > 0

		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];

		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};

		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];

	#endif

	#if NUM_SPOT_LIGHT_SHADOWS > 0

		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};

		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];

	#endif

	#if NUM_POINT_LIGHT_SHADOWS > 0

		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];

		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};

		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];

	#endif

	/*
	#if NUM_RECT_AREA_LIGHTS > 0

		// TODO (abelnation): uniforms for area light shadows

	#endif
	*/

#endif
`;var Ld=`

#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )

	#ifdef HAS_NORMAL

		// Offsetting the position used for querying occlusion along the world normal can be used to reduce shadow acne.

		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );

	#else

		vec3 shadowWorldNormal = vec3( 0.0 ); // fallback, see #21483

	#endif

	vec4 shadowWorldPosition;

#endif

#if defined( USE_SHADOWMAP )

	#if NUM_SUN_LIGHT_SHADOWS > 0

		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;

	#endif

	#if NUM_DIR_LIGHT_SHADOWS > 0

		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {

			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;

		}
		#pragma unroll_loop_end

	#endif

	#if NUM_POINT_LIGHT_SHADOWS > 0

		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {

			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;

		}
		#pragma unroll_loop_end

	#endif

	/*
	#if NUM_RECT_AREA_LIGHTS > 0

		// TODO (abelnation): update vAreaShadowCoord with area light info

	#endif
	*/

#endif

// spot lights can be evaluated without active shadow mapping (when SpotLight.map is used)

#if NUM_SPOT_LIGHT_COORDS > 0

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {

		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;

	}
	#pragma unroll_loop_end

#endif


`;var Dd=`
float getShadowMask() {

	float shadow = 1.0;

	#ifdef USE_SHADOWMAP

	#if NUM_SUN_LIGHT_SHADOWS > 0

	SunLightShadow sunLight;

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {

		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;

	}
	#pragma unroll_loop_end

	#endif

	#if NUM_DIR_LIGHT_SHADOWS > 0

	DirectionalLightShadow directionalLight;

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {

		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;

	}
	#pragma unroll_loop_end

	#endif

	#if NUM_SPOT_LIGHT_SHADOWS > 0

	SpotLightShadow spotLight;

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {

		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;

	}
	#pragma unroll_loop_end

	#endif

	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )

	PointLightShadow pointLight;

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {

		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;

	}
	#pragma unroll_loop_end

	#endif

	/*
	#if NUM_RECT_AREA_LIGHTS > 0

		// TODO (abelnation): update shadow for Area light

	#endif
	*/

	#endif

	return shadow;

}
`;var Nd=`
#ifdef USE_SKINNING

	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );

#endif
`;var Ud=`
#ifdef USE_SKINNING

	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;

	uniform highp sampler2D boneTexture;

	mat4 getBoneMatrix( const in float i ) {

		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );

		return mat4( v1, v2, v3, v4 );

	}

#endif
`;var Fd=`
#ifdef USE_SKINNING

	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );

	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;

	transformed = ( bindMatrixInverse * skinned ).xyz;

#endif
`;var Bd=`
#ifdef USE_SKINNING

	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;

	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;

	#ifdef USE_TANGENT

		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;

	#endif

#endif
`;var Od=`
float specularStrength;

#ifdef USE_SPECULARMAP

	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;

#else

	specularStrength = 1.0;

#endif
`;var zd=`
#ifdef USE_SPECULARMAP

	uniform sampler2D specularMap;

#endif
`;var Gd=`
#if defined( TONE_MAPPING )

	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );

#endif
`;var Vd=`
#ifndef saturate
// <common> may have defined saturate() already
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif

uniform float toneMappingExposure;

// exposure only
vec3 LinearToneMapping( vec3 color ) {

	return saturate( toneMappingExposure * color );

}

// source: https://www.cs.utah.edu/docs/techreports/2002/pdf/UUCS-02-001.pdf
vec3 ReinhardToneMapping( vec3 color ) {

	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );

}

// source: http://filmicworlds.com/blog/filmic-tonemapping-operators/
vec3 CineonToneMapping( vec3 color ) {

	// filmic operator by Jim Hejl and Richard Burgess-Dawson
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );

}

// source: https://github.com/selfshadow/ltc_code/blob/master/webgl/shaders/ltc/ltc_blit.fs
vec3 RRTAndODTFit( vec3 v ) {

	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;

}

// this implementation of ACES is modified to accommodate a brighter viewing environment.
// the scale factor of 1/0.6 is subjective. see discussion in #19621.

vec3 ACESFilmicToneMapping( vec3 color ) {

	// sRGB => XYZ => D65_2_D60 => AP1 => RRT_SAT
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ), // transposed from source
		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);

	// ODT_SAT => XYZ => D60_2_D65 => sRGB
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ), // transposed from source
		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);

	color *= toneMappingExposure / 0.6;

	color = ACESInputMat * color;

	// Apply RRT and ODT
	color = RRTAndODTFit( color );

	color = ACESOutputMat * color;

	// Clamp to [0, 1]
	return saturate( color );

}

// Matrices for rec 2020 <> rec 709 color space conversion
// matrix provided in row-major order so it has been transposed
// https://www.itu.int/pub/R-REP-BT.2407-2017
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);

const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);

// https://iolite-engine.com/blog_posts/minimal_agx_implementation
// Mean error^2: 3.6705141e-06
vec3 agxDefaultContrastApprox( vec3 x ) {

	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;

	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;

}

// AgX Tone Mapping implementation based on Filament, which in turn is based
// on Blender's implementation using rec 2020 primaries
// https://github.com/google/filament/pull/7236
// Inputs and outputs are encoded as Linear-sRGB.

vec3 AgXToneMapping( vec3 color ) {

	// AgX constants
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);

	// explicit AgXOutsetMatrix generated from Filaments AgXOutsetMatrixInv
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);

	// LOG2_MIN      = -10.0
	// LOG2_MAX      =  +6.5
	// MIDDLE_GRAY   =  0.18
	const float AgxMinEv = - 12.47393;  // log2( pow( 2, LOG2_MIN ) * MIDDLE_GRAY )
	const float AgxMaxEv = 4.026069;    // log2( pow( 2, LOG2_MAX ) * MIDDLE_GRAY )

	color *= toneMappingExposure;

	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;

	color = AgXInsetMatrix * color;

	// Log2 encoding
	color = max( color, 1e-10 ); // avoid 0 or negative numbers for log2
	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );

	color = clamp( color, 0.0, 1.0 );

	// Apply sigmoid
	color = agxDefaultContrastApprox( color );

	// Apply AgX look
	// v = agxLook(v, look);

	color = AgXOutsetMatrix * color;

	// Linearize
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );

	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;

	// Gamut mapping. Simple clamp for now.
	color = clamp( color, 0.0, 1.0 );

	return color;

}

// https://modelviewer.dev/examples/tone-mapping

vec3 NeutralToneMapping( vec3 color ) {

	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;

	color *= toneMappingExposure;

	float x = min( color.r, min( color.g, color.b ) );

	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;

	color -= offset;

	float peak = max( color.r, max( color.g, color.b ) );

	if ( peak < StartCompression ) return color;

	float d = 1. - StartCompression;

	float newPeak = 1. - d * d / ( peak + d - StartCompression );

	color *= newPeak / peak;

	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );

	return mix( color, vec3( newPeak ), g );

}

vec3 CustomToneMapping( vec3 color ) { return color; }
`;var Hd=`
#ifdef USE_TRANSMISSION

	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;

	#ifdef USE_TRANSMISSIONMAP

		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;

	#endif

	#ifdef USE_THICKNESSMAP

		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;

	#endif

	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );

	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );

	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );

	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );

#endif
`;var kd=`
#ifdef USE_TRANSMISSION

	// Transmission code is based on glTF-Sampler-Viewer
	// https://github.com/KhronosGroup/glTF-Sample-Viewer

	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;

	#ifdef USE_TRANSMISSIONMAP

		uniform sampler2D transmissionMap;

	#endif

	#ifdef USE_THICKNESSMAP

		uniform sampler2D thicknessMap;

	#endif

	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;

	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;

	varying vec3 vWorldPosition;

	// Mipped Bicubic Texture Filtering by N8
	// https://www.shadertoy.com/view/Dl2SDW

	float w0( float a ) {

		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );

	}

	float w1( float a ) {

		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );

	}

	float w2( float a ){

		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );

	}

	float w3( float a ) {

		return ( 1.0 / 6.0 ) * ( a * a * a );

	}

	// g0 and g1 are the two amplitude functions
	float g0( float a ) {

		return w0( a ) + w1( a );

	}

	float g1( float a ) {

		return w2( a ) + w3( a );

	}

	// h0 and h1 are the two offset functions
	float h0( float a ) {

		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );

	}

	float h1( float a ) {

		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );

	}

	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {

		uv = uv * texelSize.zw + 0.5;

		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );

		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );

		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;

		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );

	}

	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {

		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );

	}

	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {

		// Direction of refracted light.
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );

		// Compute rotation-independent scaling of the model matrix.
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );

		// The thickness is specified in local space.
		return normalize( refractionVector ) * thickness * modelScale;

	}

	float applyIorToRoughness( const in float roughness, const in float ior ) {

		// Scale roughness with IOR so that an IOR of 1.0 results in no microfacet refraction and
		// an IOR of 1.5 results in the default amount of microfacet refraction.
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );

	}

	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {

		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );

	}

	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {

		if ( isinf( attenuationDistance ) ) {

			// Attenuation distance is +∞, i.e. the transmitted color is not attenuated at all.
			return vec3( 1.0 );

		} else {

			// Compute light attenuation using Beer's law.
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance ); // Beer's law
			return transmittance;

		}

	}

	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {

		vec4 transmittedLight;
		vec3 transmittance;

		#ifdef USE_DISPERSION

			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );

			for ( int i = 0; i < 3; i ++ ) {

				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;

				// Project refracted vector on the framebuffer, while mapping to normalized device coordinates.
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;

				// Sample framebuffer to get pixel the refracted ray hits.
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;

				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];

			}

			transmittedLight.a /= 3.0;

		#else

			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;

			// Project refracted vector on the framebuffer, while mapping to normalized device coordinates.
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;

			// Sample framebuffer to get pixel the refracted ray hits.
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );

		#endif

		vec3 attenuatedColor = transmittance * transmittedLight.rgb;

		// Get the specular component.
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );

		// As less light is transmitted, the opacity should be increased. This simple approximation does a decent job
		// of modulating a CSS background, and has no effect when the buffer is opaque, due to a solid object or clear color.
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;

		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );

	}
#endif
`;var Wd=`
#if defined( USE_UV ) || defined( USE_ANISOTROPY )

	varying vec2 vUv;

#endif
#ifdef USE_MAP

	varying vec2 vMapUv;

#endif
#ifdef USE_ALPHAMAP

	varying vec2 vAlphaMapUv;

#endif
#ifdef USE_LIGHTMAP

	varying vec2 vLightMapUv;

#endif
#ifdef USE_AOMAP

	varying vec2 vAoMapUv;

#endif
#ifdef USE_BUMPMAP

	varying vec2 vBumpMapUv;

#endif
#ifdef USE_NORMALMAP

	varying vec2 vNormalMapUv;

#endif
#ifdef USE_EMISSIVEMAP

	varying vec2 vEmissiveMapUv;

#endif
#ifdef USE_METALNESSMAP

	varying vec2 vMetalnessMapUv;

#endif
#ifdef USE_ROUGHNESSMAP

	varying vec2 vRoughnessMapUv;

#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP

	varying vec2 vDiffuseRoughnessMapUv;

#endif
#ifdef USE_ANISOTROPYMAP

	varying vec2 vAnisotropyMapUv;

#endif
#ifdef USE_CLEARCOATMAP

	varying vec2 vClearcoatMapUv;

#endif
#ifdef USE_CLEARCOAT_NORMALMAP

	varying vec2 vClearcoatNormalMapUv;

#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP

	varying vec2 vClearcoatRoughnessMapUv;

#endif
#ifdef USE_IRIDESCENCEMAP

	varying vec2 vIridescenceMapUv;

#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP

	varying vec2 vIridescenceThicknessMapUv;

#endif
#ifdef USE_SHEEN_COLORMAP

	varying vec2 vSheenColorMapUv;

#endif
#ifdef USE_SHEEN_ROUGHNESSMAP

	varying vec2 vSheenRoughnessMapUv;

#endif
#ifdef USE_SPECULARMAP

	varying vec2 vSpecularMapUv;

#endif
#ifdef USE_SPECULAR_COLORMAP

	varying vec2 vSpecularColorMapUv;

#endif
#ifdef USE_SPECULAR_INTENSITYMAP

	varying vec2 vSpecularIntensityMapUv;

#endif
#ifdef USE_TRANSMISSIONMAP

	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;

#endif
#ifdef USE_THICKNESSMAP

	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;

#endif
`;var Xd=`
#if defined( USE_UV ) || defined( USE_ANISOTROPY )

	varying vec2 vUv;

#endif
#ifdef USE_MAP

	uniform mat3 mapTransform;
	varying vec2 vMapUv;

#endif
#ifdef USE_ALPHAMAP

	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;

#endif
#ifdef USE_LIGHTMAP

	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;

#endif
#ifdef USE_AOMAP

	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;

#endif
#ifdef USE_BUMPMAP

	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;

#endif
#ifdef USE_NORMALMAP

	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;

#endif
#ifdef USE_DISPLACEMENTMAP

	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;

#endif
#ifdef USE_EMISSIVEMAP

	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;

#endif
#ifdef USE_METALNESSMAP

	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;

#endif
#ifdef USE_ROUGHNESSMAP

	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;

#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP

	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;

#endif
#ifdef USE_ANISOTROPYMAP

	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;

#endif
#ifdef USE_CLEARCOATMAP

	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;

#endif
#ifdef USE_CLEARCOAT_NORMALMAP

	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;

#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP

	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;

#endif
#ifdef USE_SHEEN_COLORMAP

	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;

#endif
#ifdef USE_SHEEN_ROUGHNESSMAP

	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;

#endif
#ifdef USE_IRIDESCENCEMAP

	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;

#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP

	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;

#endif
#ifdef USE_SPECULARMAP

	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;

#endif
#ifdef USE_SPECULAR_COLORMAP

	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;

#endif
#ifdef USE_SPECULAR_INTENSITYMAP

	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;

#endif
#ifdef USE_TRANSMISSIONMAP

	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;

#endif
#ifdef USE_THICKNESSMAP

	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;

#endif
`;var qd=`
#if defined( USE_UV ) || defined( USE_ANISOTROPY )

	vUv = vec3( uv, 1 ).xy;

#endif
#ifdef USE_MAP

	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;

#endif
#ifdef USE_ALPHAMAP

	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_LIGHTMAP

	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_AOMAP

	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_BUMPMAP

	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_NORMALMAP

	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_DISPLACEMENTMAP

	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_EMISSIVEMAP

	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_METALNESSMAP

	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_ROUGHNESSMAP

	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP

	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_ANISOTROPYMAP

	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_CLEARCOATMAP

	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_CLEARCOAT_NORMALMAP

	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP

	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_IRIDESCENCEMAP

	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP

	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_SHEEN_COLORMAP

	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_SHEEN_ROUGHNESSMAP

	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_SPECULARMAP

	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_SPECULAR_COLORMAP

	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_SPECULAR_INTENSITYMAP

	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_TRANSMISSIONMAP

	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_THICKNESSMAP

	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;

#endif
`;var Yd=`
#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0

	vec4 worldPosition = vec4( transformed, 1.0 );

	#ifdef USE_BATCHING

		worldPosition = batchingMatrix * worldPosition;

	#endif

	#ifdef USE_INSTANCING

		worldPosition = instanceMatrix * worldPosition;

	#endif

	worldPosition = modelMatrix * worldPosition;

#endif
`;var Zd=`
varying vec2 vUv;
uniform mat3 uvTransform;

void main() {

	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;

	gl_Position = vec4( position.xy, 1.0, 1.0 );

}
`,Jd=`
uniform sampler2D t2D;
uniform float backgroundIntensity;

varying vec2 vUv;

void main() {

	vec4 texColor = texture2D( t2D, vUv );

	#ifdef DECODE_VIDEO_TEXTURE

		// use inline sRGB decode until browsers properly support SRGB8_ALPHA8 with video textures

		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );

	#endif

	texColor.rgb *= backgroundIntensity;

	gl_FragColor = texColor;

	#include <tonemapping_fragment>
	#include <colorspace_fragment>

}
`;var Kd=`
varying vec3 vWorldDirection;

#include <common>

void main() {

	vWorldDirection = transformDirection( position, modelMatrix );

	#include <begin_vertex>
	#include <project_vertex>

	gl_Position.z = gl_Position.w; // set z to camera.far

}
`,Qd=`

uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;

varying vec3 vWorldDirection;

#include <envmap_common_pars_fragment>

void main() {

	#ifdef ENVMAP_TYPE_PMREM

		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );

	#else

		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );

	#endif

	texColor.rgb *= backgroundIntensity;

	gl_FragColor = texColor;

	#include <tonemapping_fragment>
	#include <colorspace_fragment>

}
`;var $d=`
varying vec3 vWorldDirection;

#include <common>

void main() {

	vWorldDirection = transformDirection( position, modelMatrix );

	#include <begin_vertex>
	#include <project_vertex>

	gl_Position.z = gl_Position.w; // set z to camera.far

}
`,jd=`
uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;

varying vec3 vWorldDirection;

void main() {

	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );

	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;

	#include <tonemapping_fragment>
	#include <colorspace_fragment>

}
`;var ep=`
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

// This is used for computing an equivalent of gl_FragCoord.z that is as high precision as possible.
// Some platforms compute gl_FragCoord at a lower precision which makes the manually computed value better for
// depth-based postprocessing effects. Reproduced on iPad with A10 processor / iPadOS 13.3.1.
varying vec2 vHighPrecisionZW;

void main() {

	#include <uv_vertex>

	#include <batching_vertex>
	#include <skinbase_vertex>

	#include <morphinstance_vertex>

	#ifdef USE_DISPLACEMENTMAP

		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>

	#endif

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>

	vHighPrecisionZW = gl_Position.zw;

}
`,tp=`
#if DEPTH_PACKING == 3200

	uniform float opacity;

#endif

#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

varying vec2 vHighPrecisionZW;

void main() {

	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>

	#if DEPTH_PACKING == 3200

		diffuseColor.a = opacity;

	#endif

	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>

	#include <logdepthbuf_fragment>

	// Higher precision equivalent of gl_FragCoord.z

	#ifdef USE_REVERSED_DEPTH_BUFFER

		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];

	#else

		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;

	#endif

	#if DEPTH_PACKING == 3200

		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );

	#elif DEPTH_PACKING == 3201

		// TODO Deprecate
		gl_FragColor = packDepthToRGBA( fragCoordZ );

	#elif DEPTH_PACKING == 3202

		// TODO Deprecate
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );

	#elif DEPTH_PACKING == 3203

		// TODO Deprecate
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );

	#endif

}
`;var ip=`
#define DISTANCE

varying vec3 vWorldPosition;

#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>

	#include <batching_vertex>
	#include <skinbase_vertex>

	#include <morphinstance_vertex>

	#ifdef USE_DISPLACEMENTMAP

		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>

	#endif

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>

	vWorldPosition = worldPosition.xyz;

}
`,rp=`
#define DISTANCE

uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;

#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>

	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>

	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist ); // clamp to [ 0, 1 ]

	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );

}
`;var np=`
varying vec3 vWorldDirection;

#include <common>

void main() {

	vWorldDirection = transformDirection( position, modelMatrix );

	#include <begin_vertex>
	#include <project_vertex>

}
`,sp=`
uniform sampler2D tEquirect;

varying vec3 vWorldDirection;

#include <common>

void main() {

	vec3 direction = normalize( vWorldDirection );

	vec2 sampleUV = equirectUv( direction );

	gl_FragColor = texture2D( tEquirect, sampleUV );

	#include <tonemapping_fragment>
	#include <colorspace_fragment>

}
`;var op=`
uniform float scale;
attribute float lineDistance;

varying float vLineDistance;

#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	vLineDistance = scale * lineDistance;

	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>

}
`,ap=`
uniform vec3 diffuse;
uniform float opacity;

uniform float dashSize;
uniform float totalSize;

varying float vLineDistance;

#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>

	if ( mod( vLineDistance, totalSize ) > dashSize ) {

		discard;

	}

	vec3 outgoingLight = vec3( 0.0 );

	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>

	outgoingLight = diffuseColor.rgb; // simple shader

	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>

}
`;var lp=`
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>

	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )

		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>

	#endif

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>

	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>

}
`,cp=`
uniform vec3 diffuse;
uniform float opacity;

#ifndef FLAT_SHADED

	varying vec3 vNormal;

#endif

#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>

	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>

	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );

	// accumulation (baked indirect lighting only)
	#ifdef USE_LIGHTMAP

		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;

	#else

		reflectedLight.indirectDiffuse += vec3( 1.0 );

	#endif

	// modulation
	#include <aomap_fragment>

	reflectedLight.indirectDiffuse *= diffuseColor.rgb;

	vec3 outgoingLight = reflectedLight.indirectDiffuse;

	#include <envmap_fragment>

	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>

}
`;var hp=`
#define LAMBERT

varying vec3 vViewPosition;

#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>

	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>

	vViewPosition = - mvPosition.xyz;

	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>

}
`,up=`
#define LAMBERT

uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;

#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>

	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;

	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>

	// accumulation
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>

	// modulation
	#include <aomap_fragment>

	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;

	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>

}
`;var fp=`
#define MATCAP

varying vec3 vViewPosition;

#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>

#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>

	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>

	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>

	vViewPosition = - mvPosition.xyz;

}
`,dp=`
#define MATCAP

uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;

varying vec3 vViewPosition;

#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>

	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>

	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5; // 0.495 to remove artifacts caused by undersized matcap disks

	#ifdef USE_MATCAP

		vec4 matcapColor = texture2D( matcap, uv );

	#else

		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 ); // default if matcap is missing

	#endif

	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;

	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>

}
`;var pp=`
#define NORMAL

#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )

	varying vec3 vViewPosition;

#endif

#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>
	#include <batching_vertex>

	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>

#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )

	vViewPosition = - mvPosition.xyz;

#endif

}
`,mp=`
#define NORMAL

uniform float opacity;

#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )

	varying vec3 vViewPosition;

#endif

#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );

	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>

	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );

	#ifdef OPAQUE

		gl_FragColor.a = 1.0;

	#endif

}
`;var gp=`
#define PHONG

varying vec3 vViewPosition;

#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>

	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>

	vViewPosition = - mvPosition.xyz;

	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>

}
`,xp=`
#define PHONG

uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;

#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>

	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;

	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>

	// accumulation
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>

	// modulation
	#include <aomap_fragment>

	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;

	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>

}
`;var _p=`
#define STANDARD

varying vec3 vViewPosition;

#ifdef USE_TRANSMISSION

	varying vec3 vWorldPosition;

#endif

#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>

	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>

	vViewPosition = - mvPosition.xyz;

	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>

#ifdef USE_TRANSMISSION

	vWorldPosition = worldPosition.xyz;

#endif
}
`,vp=`
#define STANDARD

#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif

uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;

#ifdef IOR
	uniform float ior;
#endif

#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;

	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif

	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif

#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif

#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;

	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif

#ifdef USE_DISPERSION
	uniform float dispersion;
#endif

#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif

#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif

#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;

	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif

	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif

#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;

	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif

varying vec3 vViewPosition;

#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>

	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;

	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>

	// accumulation
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>

	// modulation
	#include <aomap_fragment>

	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;

	#include <transmission_fragment>

	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;

	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif

	#ifdef USE_CLEARCOAT

		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );

		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );

		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;

	#endif

	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>

}
`;var yp=`
#define TOON

varying vec3 vViewPosition;

#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>

	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>

	vViewPosition = - mvPosition.xyz;

	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>

}
`,Mp=`
#define TOON

uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;

#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>

	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;

	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>

	// accumulation
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>

	// modulation
	#include <aomap_fragment>

	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;

	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>

}
`;var Sp=`
uniform float size;
uniform float scale;

#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

#ifdef USE_POINTS_UV

	varying vec2 vUv;
	uniform mat3 uvTransform;

#endif

void main() {

	#ifdef USE_POINTS_UV

		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;

	#endif

	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>

	gl_PointSize = size;

	#ifdef USE_SIZEATTENUATION

		bool isPerspective = isPerspectiveMatrix( projectionMatrix );

		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );

	#endif

	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>

}
`,bp=`
uniform vec3 diffuse;
uniform float opacity;

#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>

	vec3 outgoingLight = vec3( 0.0 );

	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>

	outgoingLight = diffuseColor.rgb;

	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>

}
`;var Tp=`
#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>

void main() {

	#include <batching_vertex>

	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>

	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>

}
`,Ep=`
uniform vec3 color;
uniform float opacity;

#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>

void main() {

	#include <logdepthbuf_fragment>

	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );

	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>

}
`;var wp=`
uniform float rotation;
uniform vec2 center;

#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>

	vec4 mvPosition = modelViewMatrix[ 3 ];

	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );

	#ifndef USE_SIZEATTENUATION

		bool isPerspective = isPerspectiveMatrix( projectionMatrix );

		if ( isPerspective ) scale *= - mvPosition.z;

	#endif

	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;

	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;

	mvPosition.xy += rotatedPosition;

	gl_Position = projectionMatrix * mvPosition;

	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>

}
`,Ap=`
uniform vec3 diffuse;
uniform float opacity;

#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>

	vec3 outgoingLight = vec3( 0.0 );

	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>

	outgoingLight = diffuseColor.rgb;

	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>

}
`;var dt={alphahash_fragment:Zu,alphahash_pars_fragment:Ju,alphamap_fragment:Ku,alphamap_pars_fragment:Qu,alphatest_fragment:$u,alphatest_pars_fragment:ju,aomap_fragment:ef,aomap_pars_fragment:tf,batching_pars_vertex:rf,batching_vertex:nf,begin_vertex:sf,beginnormal_vertex:of,bsdfs:af,iridescence_fragment:lf,bumpmap_pars_fragment:cf,clipping_planes_fragment:hf,clipping_planes_pars_fragment:uf,clipping_planes_pars_vertex:ff,clipping_planes_vertex:df,color_fragment:pf,color_pars_fragment:mf,color_pars_vertex:gf,color_vertex:xf,common:_f,defaultnormal_vertex:vf,displacementmap_pars_vertex:yf,displacementmap_vertex:Mf,emissivemap_fragment:Sf,emissivemap_pars_fragment:bf,colorspace_fragment:Tf,colorspace_pars_fragment:Ef,envmap_fragment:wf,envmap_common_pars_fragment:Af,envmap_pars_fragment:Rf,envmap_pars_vertex:Cf,envmap_physical_pars_fragment:Gf,envmap_vertex:Pf,fog_vertex:If,fog_pars_vertex:Lf,fog_fragment:Df,fog_pars_fragment:Nf,gradientmap_pars_fragment:Uf,lightmap_pars_fragment:Ff,lights_lambert_fragment:Bf,lights_lambert_pars_fragment:Of,lights_pars_begin:zf,lights_toon_fragment:Vf,lights_toon_pars_fragment:Hf,lights_phong_fragment:kf,lights_phong_pars_fragment:Wf,lights_physical_fragment:Xf,lights_physical_pars_fragment:qf,lights_fragment_begin:Yf,lights_fragment_maps:Zf,lights_fragment_end:Jf,lightprobes_pars_fragment:Kf,logdepthbuf_fragment:Qf,logdepthbuf_pars_fragment:$f,logdepthbuf_pars_vertex:jf,logdepthbuf_vertex:ed,map_fragment:td,map_pars_fragment:id,map_particle_fragment:rd,map_particle_pars_fragment:nd,metalnessmap_fragment:sd,metalnessmap_pars_fragment:od,morphinstance_vertex:ad,morphcolor_vertex:ld,morphnormal_vertex:cd,morphtarget_pars_vertex:hd,morphtarget_vertex:ud,normal_fragment_begin:fd,normal_fragment_maps:dd,normal_pars_fragment:pd,normal_pars_vertex:md,normal_vertex:gd,normalmap_pars_fragment:xd,clearcoat_normal_fragment_begin:_d,clearcoat_normal_fragment_maps:vd,clearcoat_pars_fragment:yd,iridescence_pars_fragment:Md,opaque_fragment:Sd,packing:bd,premultiplied_alpha_fragment:Td,project_vertex:Ed,dithering_fragment:wd,dithering_pars_fragment:Ad,roughnessmap_fragment:Rd,roughnessmap_pars_fragment:Cd,shadowmap_pars_fragment:Pd,shadowmap_pars_vertex:Id,shadowmap_vertex:Ld,shadowmask_pars_fragment:Dd,skinbase_vertex:Nd,skinning_pars_vertex:Ud,skinning_vertex:Fd,skinnormal_vertex:Bd,specularmap_fragment:Od,specularmap_pars_fragment:zd,tonemapping_fragment:Gd,tonemapping_pars_fragment:Vd,transmission_fragment:Hd,transmission_pars_fragment:kd,uv_pars_fragment:Wd,uv_pars_vertex:Xd,uv_vertex:qd,worldpos_vertex:Yd,background_vert:Zd,background_frag:Jd,backgroundCube_vert:Kd,backgroundCube_frag:Qd,cube_vert:$d,cube_frag:jd,depth_vert:ep,depth_frag:tp,distance_vert:ip,distance_frag:rp,equirect_vert:np,equirect_frag:sp,linedashed_vert:op,linedashed_frag:ap,meshbasic_vert:lp,meshbasic_frag:cp,meshlambert_vert:hp,meshlambert_frag:up,meshmatcap_vert:fp,meshmatcap_frag:dp,meshnormal_vert:pp,meshnormal_frag:mp,meshphong_vert:gp,meshphong_frag:xp,meshphysical_vert:_p,meshphysical_frag:vp,meshtoon_vert:yp,meshtoon_frag:Mp,points_vert:Sp,points_frag:bp,shadow_vert:Tp,shadow_frag:Ep,sprite_vert:wp,sprite_frag:Ap};var Ie={common:{diffuse:{value:new de(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Qe}},envmap:{envMap:{value:null},envMapRotation:{value:new Qe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:0.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Qe},normalScale:{value:new J(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:0.00025},fogNear:{value:1},fogFar:{value:2000},fogColor:{value:new de(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new de(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0},uvTransform:{value:new Qe}},sprite:{diffuse:{value:new de(16777215)},opacity:{value:1},center:{value:new J(0.5,0.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}}};var Vi={basic:{uniforms:Si([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.fog]),vertexShader:dt.meshbasic_vert,fragmentShader:dt.meshbasic_frag},lambert:{uniforms:Si([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new de(0)},envMapIntensity:{value:1}}]),vertexShader:dt.meshlambert_vert,fragmentShader:dt.meshlambert_frag},phong:{uniforms:Si([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new de(0)},specular:{value:new de(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:dt.meshphong_vert,fragmentShader:dt.meshphong_frag},standard:{uniforms:Si([Ie.common,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.roughnessmap,Ie.metalnessmap,Ie.fog,Ie.lights,{emissive:{value:new de(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:dt.meshphysical_vert,fragmentShader:dt.meshphysical_frag},toon:{uniforms:Si([Ie.common,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.gradientmap,Ie.fog,Ie.lights,{emissive:{value:new de(0)}}]),vertexShader:dt.meshtoon_vert,fragmentShader:dt.meshtoon_frag},matcap:{uniforms:Si([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,{matcap:{value:null}}]),vertexShader:dt.meshmatcap_vert,fragmentShader:dt.meshmatcap_frag},points:{uniforms:Si([Ie.points,Ie.fog]),vertexShader:dt.points_vert,fragmentShader:dt.points_frag},dashed:{uniforms:Si([Ie.common,Ie.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:dt.linedashed_vert,fragmentShader:dt.linedashed_frag},depth:{uniforms:Si([Ie.common,Ie.displacementmap]),vertexShader:dt.depth_vert,fragmentShader:dt.depth_frag},normal:{uniforms:Si([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,{opacity:{value:1}}]),vertexShader:dt.meshnormal_vert,fragmentShader:dt.meshnormal_frag},sprite:{uniforms:Si([Ie.sprite,Ie.fog]),vertexShader:dt.sprite_vert,fragmentShader:dt.sprite_frag},background:{uniforms:{uvTransform:{value:new Qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:dt.background_vert,fragmentShader:dt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Qe}},vertexShader:dt.backgroundCube_vert,fragmentShader:dt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:dt.cube_vert,fragmentShader:dt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:dt.equirect_vert,fragmentShader:dt.equirect_frag},distance:{uniforms:Si([Ie.common,Ie.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1000}}]),vertexShader:dt.distance_vert,fragmentShader:dt.distance_frag},shadow:{uniforms:Si([Ie.lights,Ie.fog,{color:{value:new de(0)},opacity:{value:1}}]),vertexShader:dt.shadow_vert,fragmentShader:dt.shadow_frag}};Vi.physical={uniforms:Si([Vi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Qe},clearcoatNormalScale:{value:new J(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Qe},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Qe},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Qe},sheen:{value:0},sheenColor:{value:new de(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Qe},transmissionSamplerSize:{value:new J},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Qe},attenuationDistance:{value:0},attenuationColor:{value:new de(0)},specularColor:{value:new de(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Qe},anisotropyVector:{value:new J},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Qe}}]),vertexShader:dt.meshphysical_vert,fragmentShader:dt.meshphysical_frag};var zl={r:0,b:0,g:0},N0=new Je,Rp=new Qe;Rp.set(-1,0,0,0,1,0,0,0,1);function Cp(e,t,i,r,n,s){let o=new de(0),a=n===!0?0:1,l,c,u=null,f=0,h=null;function d(T){let E=T.isScene===!0?T.background:null;if(E&&E.isTexture){let S=T.backgroundBlurriness>0;E=t.get(E,S)}return E}function x(T){let E=!1,S=d(T);if(S===null)p(o,a);else if(S&&S.isColor)p(S,1),E=!0;let C=e.xr.getEnvironmentBlendMode();if(C==="additive")i.buffers.color.setClear(0,0,0,1,s);else if(C==="alpha-blend")i.buffers.color.setClear(0,0,0,0,s);if(e.autoClear||E)i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil)}function y(T,E){let S=d(E);if(S&&S.isCubeTexture){if(c===void 0)c=new et(new Li(1,1,1),new It({name:"BackgroundCubeMaterial",uniforms:wr(Vi.backgroundCube.uniforms),vertexShader:Vi.backgroundCube.vertexShader,fragmentShader:Vi.backgroundCube.fragmentShader,side:Bt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(C,L,g){this.matrixWorld.copyPosition(g.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c);if(c.material.uniforms.envMap.value=S,c.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(N0.makeRotationFromEuler(E.backgroundRotation)).transpose(),S.isRenderTargetTexture===!1)c.material.uniforms.backgroundRotation.value.premultiply(Rp);if(c.material.toneMapped=at.getTransfer(S.colorSpace)!==xt,u!==S||f!==S.version||h!==e.toneMapping)c.material.needsUpdate=!0,u=S,f=S.version,h=e.toneMapping;c.layers.enableAll(),T.unshift(c,c.geometry,c.material,0,0,null)}else if(S&&S.isTexture){if(l===void 0)l=new et(new Ri(2,2),new It({name:"BackgroundMaterial",uniforms:wr(Vi.background.uniforms),vertexShader:Vi.background.vertexShader,fragmentShader:Vi.background.fragmentShader,side:ki,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l);if(l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.toneMapped=at.getTransfer(S.colorSpace)!==xt,S.matrixAutoUpdate===!0)S.updateMatrix();if(l.material.uniforms.uvTransform.value.copy(S.matrix),u!==S||f!==S.version||h!==e.toneMapping)l.material.needsUpdate=!0,u=S,f=S.version,h=e.toneMapping;l.layers.enableAll(),T.unshift(l,l.geometry,l.material,0,0,null)}}function p(T,E){T.getRGB(zl,wl(e)),i.buffers.color.setClear(zl.r,zl.g,zl.b,E,s)}function m(){if(c!==void 0)c.geometry.dispose(),c.material.dispose(),c=void 0;if(l!==void 0)l.geometry.dispose(),l.material.dispose(),l=void 0}return{getClearColor:function(){return o},setClearColor:function(T,E=1){o.set(T),a=E,p(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(T){a=T,p(o,a)},render:x,addToRenderList:y,dispose:m}}function Pp(e,t){let i=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},n=h(null),s=n,o=!1;function a(U,z,ne,D,ee){let re=!1,W=f(U,D,ne,z);if(s!==W)s=W,c(s.object);if(re=d(U,D,ne,ee),re)x(U,D,ne,ee);if(ee!==null)t.update(ee,e.ELEMENT_ARRAY_BUFFER);if(re||o){if(o=!1,S(U,z,ne,D),ee!==null)e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(ee).buffer)}}function l(){return e.createVertexArray()}function c(U){return e.bindVertexArray(U)}function u(U){return e.deleteVertexArray(U)}function f(U,z,ne,D){let ee=D.wireframe===!0,re=r[z.id];if(re===void 0)re={},r[z.id]=re;let W=U.isInstancedMesh===!0?U.id:0,pe=re[W];if(pe===void 0)pe={},re[W]=pe;let Q=pe[ne.id];if(Q===void 0)Q={},pe[ne.id]=Q;let oe=Q[ee];if(oe===void 0)oe=h(l()),Q[ee]=oe;return oe}function h(U){let z=[],ne=[],D=[];for(let ee=0;ee<i;ee++)z[ee]=0,ne[ee]=0,D[ee]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:ne,attributeDivisors:D,object:U,attributes:{},index:null}}function d(U,z,ne,D){let ee=s.attributes,re=z.attributes,W=0,pe=ne.getAttributes();for(let Q in pe)if(pe[Q].location>=0){let ue=ee[Q],Se=re[Q];if(Se===void 0){if(Q==="instanceMatrix"&&U.instanceMatrix)Se=U.instanceMatrix;if(Q==="instanceColor"&&U.instanceColor)Se=U.instanceColor}if(ue===void 0)return!0;if(ue.attribute!==Se)return!0;if(Se&&ue.data!==Se.data)return!0;W++}if(s.attributesNum!==W)return!0;if(s.index!==D)return!0;return!1}function x(U,z,ne,D){let ee={},re=z.attributes,W=0,pe=ne.getAttributes();for(let Q in pe)if(pe[Q].location>=0){let ue=re[Q];if(ue===void 0){if(Q==="instanceMatrix"&&U.instanceMatrix)ue=U.instanceMatrix;if(Q==="instanceColor"&&U.instanceColor)ue=U.instanceColor}let Se={};if(Se.attribute=ue,ue&&ue.data)Se.data=ue.data;ee[Q]=Se,W++}s.attributes=ee,s.attributesNum=W,s.index=D}function y(){let U=s.newAttributes;for(let z=0,ne=U.length;z<ne;z++)U[z]=0}function p(U){m(U,0)}function m(U,z){let ne=s.newAttributes,D=s.enabledAttributes,ee=s.attributeDivisors;if(ne[U]=1,D[U]===0)e.enableVertexAttribArray(U),D[U]=1;if(ee[U]!==z)e.vertexAttribDivisor(U,z),ee[U]=z}function T(){let U=s.newAttributes,z=s.enabledAttributes;for(let ne=0,D=z.length;ne<D;ne++)if(z[ne]!==U[ne])e.disableVertexAttribArray(ne),z[ne]=0}function E(U,z,ne,D,ee,re,W){if(W===!0)e.vertexAttribIPointer(U,z,ne,ee,re);else e.vertexAttribPointer(U,z,ne,D,ee,re)}function S(U,z,ne,D){y();let ee=D.attributes,re=ne.getAttributes(),W=z.defaultAttributeValues;for(let pe in re){let Q=re[pe];if(Q.location>=0){let oe=ee[pe];if(oe===void 0){if(pe==="instanceMatrix"&&U.instanceMatrix)oe=U.instanceMatrix;if(pe==="instanceColor"&&U.instanceColor)oe=U.instanceColor}if(oe!==void 0){let ue=oe.normalized,Se=oe.itemSize,ae=t.get(oe);if(ae===void 0)continue;let{buffer:fe,type:ze,bytesPerElement:Ke}=ae,$e=ze===e.INT||ze===e.UNSIGNED_INT||oe.gpuType===Xn;if(oe.isInterleavedBufferAttribute){let Ne=oe.data,_t=Ne.isInterleavedBuffer===!0?Ne.stride:Ne.itemSize,tt=oe.offset;if(Ne.isInstancedInterleavedBuffer||Ne.isInstancedBufferAttribute){for(let it=0;it<Q.locationSize;it++)m(Q.location+it,Ne.meshPerAttribute);if(U.isInstancedMesh!==!0&&D._maxInstanceCount===void 0)D._maxInstanceCount=Ne.meshPerAttribute*Ne.count}else for(let it=0;it<Q.locationSize;it++)p(Q.location+it);e.bindBuffer(e.ARRAY_BUFFER,fe);for(let it=0;it<Q.locationSize;it++)E(Q.location+it,Se/Q.locationSize,ze,ue,_t*Ke,(tt+Se/Q.locationSize*it)*Ke,$e)}else{if(oe.isInstancedBufferAttribute){for(let Ne=0;Ne<Q.locationSize;Ne++)m(Q.location+Ne,oe.meshPerAttribute);if(U.isInstancedMesh!==!0&&D._maxInstanceCount===void 0)D._maxInstanceCount=oe.meshPerAttribute*oe.count}else for(let Ne=0;Ne<Q.locationSize;Ne++)p(Q.location+Ne);e.bindBuffer(e.ARRAY_BUFFER,fe);for(let Ne=0;Ne<Q.locationSize;Ne++)E(Q.location+Ne,Se/Q.locationSize,ze,ue,Se*Ke,Se/Q.locationSize*Ne*Ke,$e)}}else if(W!==void 0){let ue=W[pe];if(ue!==void 0)switch(ue.length){case 2:e.vertexAttrib2fv(Q.location,ue);break;case 3:e.vertexAttrib3fv(Q.location,ue);break;case 4:e.vertexAttrib4fv(Q.location,ue);break;default:e.vertexAttrib1fv(Q.location,ue)}}}}T()}function C(){N();for(let U in r){let z=r[U];for(let ne in z){let D=z[ne];for(let ee in D){let re=D[ee];for(let W in re)u(re[W].object),delete re[W];delete D[ee]}}delete r[U]}}function L(U){if(r[U.id]===void 0)return;let z=r[U.id];for(let ne in z){let D=z[ne];for(let ee in D){let re=D[ee];for(let W in re)u(re[W].object),delete re[W];delete D[ee]}}delete r[U.id]}function g(U){for(let z in r){let ne=r[z];for(let D in ne){let ee=ne[D];if(ee[U.id]===void 0)continue;let re=ee[U.id];for(let W in re)u(re[W].object),delete re[W];delete ee[U.id]}}}function b(U){for(let z in r){let ne=r[z],D=U.isInstancedMesh===!0?U.id:0,ee=ne[D];if(ee===void 0)continue;for(let re in ee){let W=ee[re];for(let pe in W)u(W[pe].object),delete W[pe];delete ee[re]}if(delete ne[D],Object.keys(ne).length===0)delete r[z]}}function N(){if(q(),o=!0,s===n)return;s=n,c(s.object)}function q(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:a,reset:N,resetDefaultState:q,dispose:C,releaseStatesOfGeometry:L,releaseStatesOfObject:b,releaseStatesOfProgram:g,initAttributes:y,enableAttribute:p,disableUnusedAttributes:T}}function Ip(e,t,i){let r;function n(l){r=l}function s(l,c){e.drawArrays(r,l,c),i.update(c,r,1)}function o(l,c,u){if(u===0)return;e.drawArraysInstanced(r,l,c,u),i.update(c,r,u)}function a(l,c,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,l,0,c,0,u);let h=0;for(let d=0;d<u;d++)h+=c[d];i.update(h,r,1)}this.setMode=n,this.render=s,this.renderInstances=o,this.renderMultiDraw=a}function Lp(e,t,i,r){let n;function s(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){let g=t.get("EXT_texture_filter_anisotropic");n=e.getParameter(g.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function o(g){if(g!==ni&&r.convert(g)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))return!1;return!0}function a(g){let b=g===Lt&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));if(g!==Xt&&g!==qt&&!b&&r.convert(g)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))return!1;return!0}function l(g){if(g==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";g="mediump"}if(g==="mediump"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0)return"mediump"}return"lowp"}let c=i.precision!==void 0?i.precision:"highp",u=l(c);if(u!==c)Ee("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u;let f=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),h=i.logarithmicDepthBuffer===!0&&f===!1;if(i.reversedDepthBuffer===!0&&f===!1)Ee("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");if(i.logarithmicDepthBuffer===!0&&f===!0)Ee("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let d=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),x=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=e.getParameter(e.MAX_TEXTURE_SIZE),p=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),m=e.getParameter(e.MAX_VERTEX_ATTRIBS),T=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),E=e.getParameter(e.MAX_VARYING_VECTORS),S=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),C=e.getParameter(e.MAX_SAMPLES),L=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:x,maxTextureSize:y,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:T,maxVaryings:E,maxFragmentUniforms:S,maxSamples:C,samples:L}}function Dp(e){let t=this,i=null,r=0,n=!1,s=!1,o=new Ai,a=new Qe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){let d=f.length!==0||h||r!==0||n;return n=h,r=f.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){i=u(f,h,0)},this.setState=function(f,h,d){let{clippingPlanes:x,clipIntersection:y,clipShadows:p}=f,m=e.get(f);if(!n||x===null||x.length===0||s&&!p)if(s)u(null);else c();else{let T=s?0:r,E=T*4,S=m.clippingState||null;l.value=S,S=u(x,h,E,d);for(let C=0;C!==E;++C)S[C]=i[C];m.clippingState=S,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=T}};function c(){if(l.value!==i)l.value=i,l.needsUpdate=r>0;t.numPlanes=r,t.numIntersection=0}function u(f,h,d,x){let y=f!==null?f.length:0,p=null;if(y!==0){if(p=l.value,x!==!0||p===null){let m=d+y*4,T=h.matrixWorldInverse;if(a.getNormalMatrix(T),p===null||p.length<m)p=new Float32Array(m);for(let E=0,S=d;E!==y;++E,S+=4)o.copy(f[E]).applyMatrix4(T,a),o.normal.toArray(p,S),p[S+3]=o.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,p}}class Zr extends Pt{constructor(e=1,t={}){super(e,e,t);this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Vr(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Li(5,5,5),n=new It({name:"CubemapFromEquirect",uniforms:wr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Bt,blending:Wi});n.uniforms.tEquirect.value=t;let s=new et(r,n),o=t.minFilter;if(t.minFilter===Ei)t.minFilter=Ot;return new Rn(1,10,this).update(e,s),t.minFilter=o,s.geometry.dispose(),s.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){let n=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,i,r);e.setRenderTarget(n)}}var Np=256,U0=3,F0=20,Op=256,zp=16,B0=3,O0=new R,z0=new de;class Jr{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Rn(1,10,null),this._boxMesh=new et(new Li(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,i=0.1,r=100,n={}){let{size:s=256,position:o=O0}=n,a=this._renderer;this._setSize(s);let l=this._allocateTarget(),c=this._getSourceTarget(!0);if(t>0)c.texture.mipmapsAutoUpdate=!1;let{autoClear:u,autoClearColor:f,autoClearDepth:h,autoClearStencil:d}=a,x=e.background;if(a.autoClear=!0,a.autoClearColor=!0,a.autoClearDepth=!0,a.autoClearStencil=!0,x===null)e.background=a.getClearColor(z0);let y=new Rn(i,r,c);if(y.position.copy(o),y.update(a,e),a.autoClear=u,a.autoClearColor=f,a.autoClearDepth=h,a.autoClearStencil=d,e.background=x,t>0)c.texture.mipmapsAutoUpdate=!0,this._blur(l,t);return this._applyPMREM(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){if(this._cubemapMaterial===null)this._cubemapMaterial=Bp(),this._compileMaterial(this._cubemapMaterial)}compileEquirectangularShader(){if(this._equirectMaterial===null)this._equirectMaterial=Fp(),this._compileMaterial(this._equirectMaterial)}dispose(){if(this._sourceTarget!==null)this._sourceTarget.dispose();if(this._cubemapMaterial!==null)this._cubemapMaterial.dispose();if(this._equirectMaterial!==null)this._equirectMaterial.dispose();if(this._blurMaterial!==null)this._blurMaterial.dispose();if(this._ggxMaterial!==null)this._ggxMaterial.dispose();if(this._integrationMaterial!==null)this._integrationMaterial.dispose();this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(Np,Xh(e))}_fromTexture(e,t){if(e.mapping===Xi||e.mapping===_r)this._setSize(e.image.length===0?Np:e.image[0].width||e.image[0].image.width);else this._setSize(e.image.width/4);let i=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(i),i}_allocateTarget(){let e=this._cubeSize,t=Up(e,!1,!1),i=Math.log2(e)-U0;for(let r=0;r<=i;r++)t.texture.mipmaps.push({width:e>>r,height:e>>r});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,i=this._sourceTarget;if(i===null||i.width!==t||e&&i.depthBuffer===!1){if(i!==null)i.dispose();this._sourceTarget=Up(t,!0,e)}return this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,i){let r=this._boxMesh,n=this._cubeCamera;r.material=i,n.renderTarget=e,n.activeMipmapLevel=t;let s=e.width>>t;e.viewport.set(0,0,s,s),n.update(this._renderer,r),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;if(e.mapping===Xi||e.mapping===_r){if(this._cubemapMaterial===null)this._cubemapMaterial=Bp();t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1}else{if(this._equirectMaterial===null)this._equirectMaterial=Fp();t=this._equirectMaterial}t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){if(this._ggxMaterial===null)this._ggxMaterial=G0(),this._integrationMaterial=V0();let t=this._cubeSize,i=e.texture.mipmaps.length-1,r=this._ggxMaterial.uniforms;r.envMap.value=this._sourceTarget.texture;let n=this._integrationMaterial.uniforms;n.envMap.value=this._sourceTarget.texture,n.sourceLod.value=Math.log2(t/zp);for(let s=0;s<=i;s++){let o=Jr.lodToRoughness(s,i);if(s>i-B0)n.roughness.value=o,this._renderCube(e,s,this._integrationMaterial);else{let a=o>0?Math.log2(t)+0.5*Math.log2(6/(Op*Math.pow(o,4)))+0.5:0;r.roughness.value=o,r.lodBias.value=a,this._renderCube(e,s,this._ggxMaterial)}}}_blur(e,t){if(this._blurMaterial===null)this._blurMaterial=H0();let i=this._blurMaterial,r=i.uniforms,n=this._sourceTarget;r.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,r.envMap.value=n.texture,this._renderCube(e,0,i),r.envMap.value=e.texture,this._renderCube(n,0,i)}}function Up(e,t,i){return new Zr(e,{minFilter:Ei,generateMipmaps:t,type:Lt,colorSpace:nn,depthBuffer:i})}function ma(e,t,i){return new It({name:e,uniforms:t,vertexShader:dt.cube_vert,fragmentShader:i,side:Bt,blending:Wi,depthTest:!1,depthWrite:!1})}function G0(){return ma("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Op}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function V0(){return ma("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:zp}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function H0(){return ma("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${F0}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function Fp(){return ma("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function Bp(){return ma("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Gp(e){let t=new WeakMap,i=new WeakMap,r=null;function n(h,d=!1){if(h===null||h===void 0)return null;if(d)return o(h);return s(h)}function s(h){if(h&&h.isTexture){let d=h.mapping;if(d===$s||d===js)if(t.has(h)){let x=t.get(h).texture;return a(x,h.mapping)}else{let x=h.image;if(x&&x.height>0){let y=new Zr(x.height);return y.fromEquirectangularTexture(e,h),t.set(h,y),h.addEventListener("dispose",c),a(y.texture,h.mapping)}else return null}}return h}function o(h){if(h&&h.isTexture&&h.isPMREMTexture!==!0){let d=h.mapping,x=d===$s||d===js,y=d===Xi||d===_r;if(x||y){let p=i.get(h),m=p!==void 0?p.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==m){if(r===null)r=new Jr(e);return p=x?r.fromEquirectangular(h,p):r.fromCubemap(h,p),p.texture.pmremVersion=h.pmremVersion,i.set(h,p),p.texture}else if(p!==void 0)return p.texture;else{let T=h.image;if(x&&T&&T.height>0||y&&T&&l(T)){if(r===null)r=new Jr(e);return p=x?r.fromEquirectangular(h):r.fromCubemap(h),p.texture.pmremVersion=h.pmremVersion,i.set(h,p),h.addEventListener("dispose",u),p.texture}else return null}}}return h}function a(h,d){if(d===$s)h.mapping=Xi;else if(d===js)h.mapping=_r;return h}function l(h){let d=0,x=6;for(let y=0;y<x;y++)if(h[y]!==void 0)d++;return d===x}function c(h){let d=h.target;d.removeEventListener("dispose",c);let x=t.get(d);if(x!==void 0)t.delete(d),x.dispose()}function u(h){let d=h.target;d.removeEventListener("dispose",u);let x=i.get(d);if(x!==void 0)i.delete(d),x.dispose()}function f(){if(t=new WeakMap,i=new WeakMap,r!==null)r.dispose(),r=null}return{get:n,dispose:f}}function Vp(e){let t={};function i(r){if(t[r]!==void 0)return t[r];let n=e.getExtension(r);return t[r]=n,n}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){let n=i(r);if(n===null)Yi("WebGLRenderer: "+r+" extension not supported.");return n}}}function Hp(e,t,i,r){let n={},s=new WeakMap,o=new FinalizationRegistry((x)=>delete n[x]);function a(x){l(x.target)}function l(x){if(x.index!==null)t.remove(x.index);for(let p in x.attributes)t.remove(x.attributes[p]);x.removeEventListener("dispose",a),delete n[x.id],o.unregister(x);let y=s.get(x);if(y)t.remove(y),s.delete(x);if(r.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0)delete x._maxInstanceCount;i.memory.geometries--}function c(x,y){if(n[y.id]!==void 0)return y;return y.addEventListener("dispose",a),n[y.id]=new WeakRef(y),o.register(y,y.id,y),i.memory.geometries++,y}function u(x){let y=x.attributes;for(let p in y)t.update(y[p],e.ARRAY_BUFFER)}function f(x){let y=x.index,p=x.attributes.position,m=0;if(p===void 0)return;let T=y!==null?y.array.length:p.array.length/3-1,S=new(p.count>=65535?Bo:Fo)(Math.ceil(T/3)*6,1),C=S.array;if(y!==null){let g=y.array;m=y.version;for(let b=0,N=0;b<T;b+=3){let q=g[b+0],U=g[b+1],z=g[b+2];C[N++]=q,C[N++]=U,C[N++]=U,C[N++]=z,C[N++]=z,C[N++]=q}}else{m=p.version;for(let g=0,b=0;g<T;g+=3){let N=g+0,q=g+1,U=g+2;C[b++]=N,C[b++]=q,C[b++]=q,C[b++]=U,C[b++]=U,C[b++]=N}}S.version=m;let L=s.get(x);if(L)t.remove(L);s.set(x,S)}function h(x){let y=s.get(x);if(y){let p=x.index;if(p!==null){if(y.version<p.version)f(x)}}else f(x);return s.get(x)}function d(){for(let x in n){let y=n[x].deref();if(y!==void 0)l(y)}}return{get:c,update:u,getWireframeAttribute:h,dispose:d}}function kp(e,t,i){let r;function n(f){r=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function l(f,h){e.drawElements(r,h,s,f*o),i.update(h,r,1)}function c(f,h,d){if(d===0)return;e.drawElementsInstanced(r,h,s,f*o,d),i.update(h,r,d)}function u(f,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,h,0,s,f,0,d);let y=0;for(let p=0;p<d;p++)y+=h[p];i.update(y,r,1)}this.setMode=n,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function Wp(e){let t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(s,o,a){switch(i.calls++,o){case e.TRIANGLES:i.triangles+=a*(s/3);break;case e.LINES:i.lines+=a*(s/2);break;case e.LINE_STRIP:i.lines+=a*(s-1);break;case e.LINE_LOOP:i.lines+=a*s;break;case e.POINTS:i.points+=a*s;break;default:Oe("WebGLInfo: Unknown draw mode:",o);break}}function n(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:n,update:r}}function Xp(e,t,i){let r=new WeakMap,n=new yt;function s(o,a,l){let c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0,h=r.get(a);if(h===void 0||h.count!==f){let N=function(){g.dispose(),r.delete(a),a.removeEventListener("dispose",N)};if(h!==void 0)h.texture.dispose();let d=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,y=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],T=a.morphAttributes.color||[],E=0;if(d===!0)E=1;if(x===!0)E=2;if(y===!0)E=3;let S=a.attributes.position.count*E,C=1;if(S>t.maxTextureSize)C=Math.ceil(S/t.maxTextureSize),S=t.maxTextureSize;let L=new Float32Array(S*C*4*f),g=new hn(L,S,C,f);g.type=qt,g.needsUpdate=!0;let b=E*4;for(let q=0;q<f;q++){let U=p[q],z=m[q],ne=T[q],D=S*C*4*q;for(let ee=0;ee<U.count;ee++){let re=ee*b;if(d===!0)n.fromBufferAttribute(U,ee),L[D+re+0]=n.x,L[D+re+1]=n.y,L[D+re+2]=n.z,L[D+re+3]=0;if(x===!0)n.fromBufferAttribute(z,ee),L[D+re+4]=n.x,L[D+re+5]=n.y,L[D+re+6]=n.z,L[D+re+7]=0;if(y===!0)n.fromBufferAttribute(ne,ee),L[D+re+8]=n.x,L[D+re+9]=n.y,L[D+re+10]=n.z,L[D+re+11]=ne.itemSize===4?n.w:1}}h={count:f,texture:g,size:new J(S,C)},r.set(a,h),a.addEventListener("dispose",N)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(e,"morphTexture",o.morphTexture,i);else{let d=0;for(let y=0;y<c.length;y++)d+=c[y];let x=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(e,"morphTargetBaseInfluence",x),l.getUniforms().setValue(e,"morphTargetInfluences",c)}l.getUniforms().setValue(e,"morphTargetsTexture",h.texture,i),l.getUniforms().setValue(e,"morphTargetsTextureSize",h.size)}return{update:s}}function qp(e,t,i,r,n){let s=new WeakMap;function o(c){let u=n.render.frame,f=c.geometry,h=t.get(c,f);if(s.get(h)!==u)t.update(h),s.set(h,u);if(c.isInstancedMesh){if(c.hasEventListener("dispose",l)===!1)c.addEventListener("dispose",l);if(s.get(c)!==u){if(i.update(c.instanceMatrix,e.ARRAY_BUFFER),c.instanceColor!==null)i.update(c.instanceColor,e.ARRAY_BUFFER);s.set(c,u)}}if(c.isSkinnedMesh){let d=c.skeleton;if(s.get(d)!==u)d.update(),s.set(d,u)}return h}function a(){s=new WeakMap}function l(c){let u=c.target;if(u.removeEventListener("dispose",l),r.releaseStatesOfObject(u),i.remove(u.instanceMatrix),u.instanceColor!==null)i.remove(u.instanceColor)}return{update:o,dispose:a}}var k0={[Fn]:"LINEAR_TONE_MAPPING",[Bn]:"REINHARD_TONE_MAPPING",[On]:"CINEON_TONE_MAPPING",[Ur]:"ACES_FILMIC_TONE_MAPPING",[Gn]:"AGX_TONE_MAPPING",[Vn]:"NEUTRAL_TONE_MAPPING",[zn]:"CUSTOM_TONE_MAPPING"};function Yp(e,t,i,r,n,s){let o=new Pt(t,i,{type:e,depthBuffer:n,stencilBuffer:s,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=null,u=new Ze;u.setAttribute("position",new Ge([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new Ge([0,2,0,0,2,0],2));let f=new Tn({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),h=new et(u,f),d=new Rr(-1,1,1,-1,0,1),x=null,y=null,p=!1,m,T=null,E=[],S=!1;this.setSize=function(C,L){if(o.setSize(C,L),a!==null)a.setSize(C,L);if(l!==null)l.setSize(C,L);for(let g=0;g<E.length;g++){let b=E[g];if(b.setSize)b.setSize(C,L)}},this.setEffects=function(C){E=C,S=E.length>0&&E[0].isRenderPass===!0;let{width:L,height:g}=o;if(E.length>0&&a===null)a=new Pt(L,g,{type:Lt,depthBuffer:!1,stencilBuffer:!1}),l=new Pt(L,g,{type:Lt,depthBuffer:!1,stencilBuffer:!1});let b=n===!0&&E.some((N)=>N.needsDepthTexture===!0);if(b!==(o.depthTexture!==null)){if(b===!0&&c===null){if(c=new Oi(L,g),s===!0)c.format=Ni,c.type=ir}o.dispose(),o.depthTexture=b?c:null,o.resolveDepthBuffer=b,o.storeMultisampledDepthBuffer=b}for(let N=0;N<E.length;N++){let q=E[N];if(q.setSize)q.setSize(L,g);if(b&&q.needsDepthTexture===!0&&q.setDepthTexture)q.setDepthTexture(c)}},this.begin=function(C,L){if(p)return!1;if(C.toneMapping===Di&&E.length===0)return!1;if(T=L,L!==null){let{width:g,height:b}=L;if(o.width!==g||o.height!==b)this.setSize(g,b)}if(S===!1)C.setRenderTarget(o);return m=C.toneMapping,C.toneMapping=Di,!0},this.hasRenderPass=function(){return S},this.end=function(C,L){C.toneMapping=m,p=!0;let g=o,b=a;for(let N=0;N<E.length;N++){let q=E[N];if(q.enabled===!1)continue;if(q.render(C,b,g,L),q.needsSwap!==!1)g=b,b=b===a?l:a}if(x!==C.outputColorSpace||y!==C.toneMapping){if(x=C.outputColorSpace,y=C.toneMapping,f.defines={},at.getTransfer(x)===xt)f.defines.SRGB_TRANSFER="";let N=k0[y];if(N)f.defines[N]="";f.needsUpdate=!0}f.uniforms.tDiffuse.value=g.texture,C.setRenderTarget(T),C.render(h,d),T=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){if(o.dispose(),a!==null)a.dispose();if(l!==null)l.dispose();u.dispose(),f.dispose()}}var em=new Et,tm=new Oi(1,1),im=new Es(1),rm=new hn,nm=new ss,sm=new Vr,Zp=[],Jp=[],Kp=new Float32Array(16),Qp=new Float32Array(9),$p=new Float32Array(4);function Ds(e,t,i){let r=e[0];if(r<=0||r>0)return e;let n=t*i,s=Zp[n];if(s===void 0)s=new Float32Array(n),Zp[n]=s;if(t!==0){r.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=i,e[o].toArray(s,a)}return s}function ii(e,t){if(e.length!==t.length)return!1;for(let i=0,r=e.length;i<r;i++)if(e[i]!==t[i])return!1;return!0}function ri(e,t){for(let i=0,r=t.length;i<r;i++)e[i]=t[i]}function Gl(e,t){let i=Jp[t];if(i===void 0)i=new Int32Array(t),Jp[t]=i;for(let r=0;r!==t;++r)i[r]=e.allocateTextureUnit();return i}function W0(e,t){let i=this.cache;if(i[0]===t)return;e.uniform1f(this.addr,t),i[0]=t}function X0(e,t){let i=this.cache;if(t.x!==void 0){if(i[0]!==t.x||i[1]!==t.y)e.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y}else{if(ii(i,t))return;e.uniform2fv(this.addr,t),ri(i,t)}}function q0(e,t){let i=this.cache;if(t.x!==void 0){if(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)e.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z}else if(t.r!==void 0){if(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)e.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b}else{if(ii(i,t))return;e.uniform3fv(this.addr,t),ri(i,t)}}function Y0(e,t){let i=this.cache;if(t.x!==void 0){if(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)e.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w}else{if(ii(i,t))return;e.uniform4fv(this.addr,t),ri(i,t)}}function Z0(e,t){let i=this.cache,r=t.elements;if(r===void 0){if(ii(i,t))return;e.uniformMatrix2fv(this.addr,!1,t),ri(i,t)}else{if(ii(i,r))return;$p.set(r),e.uniformMatrix2fv(this.addr,!1,$p),ri(i,r)}}function J0(e,t){let i=this.cache,r=t.elements;if(r===void 0){if(ii(i,t))return;e.uniformMatrix3fv(this.addr,!1,t),ri(i,t)}else{if(ii(i,r))return;Qp.set(r),e.uniformMatrix3fv(this.addr,!1,Qp),ri(i,r)}}function K0(e,t){let i=this.cache,r=t.elements;if(r===void 0){if(ii(i,t))return;e.uniformMatrix4fv(this.addr,!1,t),ri(i,t)}else{if(ii(i,r))return;Kp.set(r),e.uniformMatrix4fv(this.addr,!1,Kp),ri(i,r)}}function Q0(e,t){let i=this.cache;if(i[0]===t)return;e.uniform1i(this.addr,t),i[0]=t}function $0(e,t){let i=this.cache;if(t.x!==void 0){if(i[0]!==t.x||i[1]!==t.y)e.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y}else{if(ii(i,t))return;e.uniform2iv(this.addr,t),ri(i,t)}}function j0(e,t){let i=this.cache;if(t.x!==void 0){if(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)e.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z}else{if(ii(i,t))return;e.uniform3iv(this.addr,t),ri(i,t)}}function ex(e,t){let i=this.cache;if(t.x!==void 0){if(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)e.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w}else{if(ii(i,t))return;e.uniform4iv(this.addr,t),ri(i,t)}}function tx(e,t){let i=this.cache;if(i[0]===t)return;e.uniform1ui(this.addr,t),i[0]=t}function ix(e,t){let i=this.cache;if(t.x!==void 0){if(i[0]!==t.x||i[1]!==t.y)e.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y}else{if(ii(i,t))return;e.uniform2uiv(this.addr,t),ri(i,t)}}function rx(e,t){let i=this.cache;if(t.x!==void 0){if(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)e.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z}else{if(ii(i,t))return;e.uniform3uiv(this.addr,t),ri(i,t)}}function nx(e,t){let i=this.cache;if(t.x!==void 0){if(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w}else{if(ii(i,t))return;e.uniform4uiv(this.addr,t),ri(i,t)}}function Vl(e){if(e.version===0)e.compareFunction=Ha,e.needsUpdate=!0;return e}function sx(e,t,i){let r=this.cache,n=i.allocateTextureUnit();if(r[0]!==n)e.uniform1i(this.addr,n),r[0]=n;let s;if(this.type===e.SAMPLER_2D_SHADOW)s=Vl(tm);else s=em;i.setTexture2D(t||s,n)}function ox(e,t,i){let r=this.cache,n=i.allocateTextureUnit();if(r[0]!==n)e.uniform1i(this.addr,n),r[0]=n;i.setTexture3D(t||nm,n)}function ax(e,t,i){let r=this.cache,n=i.allocateTextureUnit();if(r[0]!==n)e.uniform1i(this.addr,n),r[0]=n;let s;if(this.type===e.SAMPLER_CUBE_SHADOW)s=Vl(im);else s=sm;i.setTextureCube(t||s,n)}function lx(e,t,i){let r=this.cache,n=i.allocateTextureUnit();if(r[0]!==n)e.uniform1i(this.addr,n),r[0]=n;i.setTexture2DArray(t||rm,n)}function cx(e){switch(e){case 5126:return W0;case 35664:return X0;case 35665:return q0;case 35666:return Y0;case 35674:return Z0;case 35675:return J0;case 35676:return K0;case 5124:case 35670:return Q0;case 35667:case 35671:return $0;case 35668:case 35672:return j0;case 35669:case 35673:return ex;case 5125:return tx;case 36294:return ix;case 36295:return rx;case 36296:return nx;case 35678:case 36198:case 36298:case 36306:case 35682:return sx;case 35679:case 36299:case 36307:return ox;case 35680:case 36300:case 36308:case 36293:return ax;case 36289:case 36303:case 36311:case 36292:return lx}}function hx(e,t){e.uniform1fv(this.addr,t)}function ux(e,t){let i=Ds(t,this.size,2);e.uniform2fv(this.addr,i)}function fx(e,t){let i=Ds(t,this.size,3);e.uniform3fv(this.addr,i)}function dx(e,t){let i=Ds(t,this.size,4);e.uniform4fv(this.addr,i)}function px(e,t){let i=Ds(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,i)}function mx(e,t){let i=Ds(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,i)}function gx(e,t){let i=Ds(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,i)}function xx(e,t){e.uniform1iv(this.addr,t)}function _x(e,t){e.uniform2iv(this.addr,t)}function vx(e,t){e.uniform3iv(this.addr,t)}function yx(e,t){e.uniform4iv(this.addr,t)}function Mx(e,t){e.uniform1uiv(this.addr,t)}function Sx(e,t){e.uniform2uiv(this.addr,t)}function bx(e,t){e.uniform3uiv(this.addr,t)}function Tx(e,t){e.uniform4uiv(this.addr,t)}function Ex(e,t,i){let r=this.cache,n=t.length,s=Gl(i,n);if(!ii(r,s))e.uniform1iv(this.addr,s),ri(r,s);let o;if(this.type===e.SAMPLER_2D_SHADOW)o=Vl(tm);else o=em;for(let a=0;a!==n;++a)i.setTexture2D(t[a]||o,s[a])}function wx(e,t,i){let r=this.cache,n=t.length,s=Gl(i,n);if(!ii(r,s))e.uniform1iv(this.addr,s),ri(r,s);for(let o=0;o!==n;++o)i.setTexture3D(t[o]||nm,s[o])}function Ax(e,t,i){let r=this.cache,n=t.length,s=Gl(i,n);if(!ii(r,s))e.uniform1iv(this.addr,s),ri(r,s);let o;if(this.type===e.SAMPLER_CUBE_SHADOW)o=Vl(im);else o=sm;for(let a=0;a!==n;++a)i.setTextureCube(t[a]||o,s[a])}function Rx(e,t,i){let r=this.cache,n=t.length,s=Gl(i,n);if(!ii(r,s))e.uniform1iv(this.addr,s),ri(r,s);for(let o=0;o!==n;++o)i.setTexture2DArray(t[o]||rm,s[o])}function Cx(e){switch(e){case 5126:return hx;case 35664:return ux;case 35665:return fx;case 35666:return dx;case 35674:return px;case 35675:return mx;case 35676:return gx;case 5124:case 35670:return xx;case 35667:case 35671:return _x;case 35668:case 35672:return vx;case 35669:case 35673:return yx;case 5125:return Mx;case 36294:return Sx;case 36295:return bx;case 36296:return Tx;case 35678:case 36198:case 36298:case 36306:case 35682:return Ex;case 35679:case 36299:case 36307:return wx;case 35680:case 36300:case 36308:case 36293:return Ax;case 36289:case 36303:case 36311:case 36292:return Rx}}class om{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=cx(t.type)}}class am{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Cx(t.type)}}class lm{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let r=this.seq;for(let n=0,s=r.length;n!==s;++n){let o=r[n];o.setValue(e,t[o.id],i)}}}var Zc=/(\w+)(\])?(\[|\.)?/g;function jp(e,t){e.seq.push(t),e.map[t.id]=t}function Px(e,t,i){let r=e.name,n=r.length;Zc.lastIndex=0;while(!0){let s=Zc.exec(r),o=Zc.lastIndex,a=s[1],l=s[2]==="]",c=s[3];if(l)a=a|0;if(c===void 0||c==="["&&o+2===n){jp(i,c===void 0?new om(a,e,t):new am(a,e,t));break}else{let f=i.map[a];if(f===void 0)f=new lm(a),jp(i,f);i=f}}}class Cn{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let o=e.getActiveUniform(t,s),a=e.getUniformLocation(t,o.name);Px(o,a,this)}let r=[],n=[];for(let s of this.seq)if(s.type===e.SAMPLER_2D_SHADOW||s.type===e.SAMPLER_CUBE_SHADOW||s.type===e.SAMPLER_2D_ARRAY_SHADOW)r.push(s);else n.push(s);if(r.length>0)this.seq=r.concat(n)}setValue(e,t,i,r){let n=this.map[t];if(n!==void 0)n.setValue(e,i,r)}setOptional(e,t,i){let r=t[i];if(r!==void 0)this.setValue(e,i,r)}static upload(e,t,i,r){for(let n=0,s=t.length;n!==s;++n){let o=t[n],a=i[o.id];if(a.needsUpdate!==!1)o.setValue(e,a.value,r)}}static seqWithValue(e,t){let i=[];for(let r=0,n=e.length;r!==n;++r){let s=e[r];if(s.id in t)i.push(s)}return i}}function Jc(e,t,i){let r=e.createShader(t);return e.shaderSource(r,i),e.compileShader(r),r}var Ix=37297,Lx=0;function Dx(e,t){let i=e.split(`
`),r=[],n=Math.max(t-6,0),s=Math.min(t+6,i.length);for(let o=n;o<s;o++){let a=o+1;r.push(`${a===t?">":" "} ${a}: ${i[o]}`)}return r.join(`
`)}var cm=new Qe;function Nx(e){at._getMatrix(cm,at.workingColorSpace,e);let t=`mat3( ${cm.elements.map((i)=>i.toFixed(4))} )`;switch(at.getTransfer(e)){case sn:return[t,"LinearTransferOETF"];case xt:return[t,"sRGBTransferOETF"];default:return Ee("WebGLProgram: Unsupported color space: ",e),[t,"LinearTransferOETF"]}}function hm(e,t,i){let r=e.getShaderParameter(t,e.COMPILE_STATUS),s=(e.getShaderInfoLog(t)||"").trim();if(r&&s==="")return"";let o=/ERROR: 0:(\d+)/.exec(s);if(o){let a=parseInt(o[1]);return i.toUpperCase()+`

`+s+`

`+Dx(e.getShaderSource(t),a)}else return s}function Ux(e,t){let i=Nx(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${i[1]}( vec4( ${i[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var Fx={[Fn]:"Linear",[Bn]:"Reinhard",[On]:"Cineon",[Ur]:"ACESFilmic",[Gn]:"AgX",[Vn]:"Neutral",[zn]:"Custom"};function Bx(e,t){let i=Fx[t];if(i===void 0)return Ee("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+e+"( vec3 color ) { return LinearToneMapping( color ); }";return"vec3 "+e+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}var Hl=new R;function Ox(){at.getLuminanceCoefficients(Hl);let e=Hl.x.toFixed(4),t=Hl.y.toFixed(4),i=Hl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${t}, ${i} );`,"\treturn dot( weights, rgb );","}"].join(`
`)}function zx(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ga).join(`
`)}function Gx(e){let t=[];for(let i in e){let r=e[i];if(r===!1)continue;t.push("#define "+i+" "+r)}return t.join(`
`)}function Vx(e,t){let i={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let n=0;n<r;n++){let s=e.getActiveAttrib(t,n),o=s.name,a=1;if(s.type===e.FLOAT_MAT2)a=2;if(s.type===e.FLOAT_MAT3)a=3;if(s.type===e.FLOAT_MAT4)a=4;i[o]={type:s.type,location:e.getAttribLocation(t,o),locationSize:a}}return i}function ga(e){return e!==""}function um(e,t){let i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function fm(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Hx=/^[ \t]*#include +<([\w\d./]+)>/gm;function Kc(e){return e.replace(Hx,kx)}function kx(e,t){let i=dt[t];if(i===void 0)throw Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return Kc(i)}var Wx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function dm(e){return e.replace(Wx,Xx)}function Xx(e,t,i,r){let n="";for(let s=parseInt(t);s<parseInt(i);s++)n+=r.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return n}function pm(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;if(e.precision==="highp")t+=`
#define HIGH_PRECISION`;else if(e.precision==="mediump")t+=`
#define MEDIUM_PRECISION`;else if(e.precision==="lowp")t+=`
#define LOW_PRECISION`;return t}var qx={[Un]:"SHADOWMAP_TYPE_PCF",[Qr]:"SHADOWMAP_TYPE_VSM"};function Yx(e){return qx[e.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Zx={[_r]:"ENVMAP_MODE_REFRACTION"};function Jx(e){if(e.envMap===!1)return"ENVMAP_MODE_REFLECTION";return Zx[e.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Kx={[$r]:"ENVMAP_BLENDING_MULTIPLY",[Ch]:"ENVMAP_BLENDING_MIX",[Ph]:"ENVMAP_BLENDING_ADD"};function Qx(e){if(e.envMap===!1)return"ENVMAP_BLENDING_NONE";return Kx[e.combine]||"ENVMAP_BLENDING_NONE"}function mm(e,t,i,r){let n=e.getContext(),{defines:s,vertexShader:o,fragmentShader:a}=i,l=Yx(i),c=i.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",u=Jx(i),f=Qx(i),h=zx(i),d=Gx(s),x=n.createProgram(),y,p,m=i.glslVersion?"#version "+i.glslVersion+`
`:"";if(i.isRawShaderMaterial){if(y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,d].filter(ga).join(`
`),y.length>0)y+=`
`;if(p=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,d].filter(ga).join(`
`),p.length>0)p+=`
`}else y=[pm(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,d,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+u:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+i.diffuseRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexNormals?"#define HAS_NORMAL":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+l:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","\tattribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","\tattribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","\tuniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","\tattribute vec2 uv1;","#endif","#ifdef USE_UV2","\tattribute vec2 uv2;","#endif","#ifdef USE_UV3","\tattribute vec2 uv3;","#endif","#ifdef USE_TANGENT","\tattribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","\tattribute vec4 color;","#elif defined( USE_COLOR )","\tattribute vec3 color;","#endif","#ifdef USE_SKINNING","\tattribute vec4 skinIndex;","\tattribute vec4 skinWeight;","#endif",`
`].filter(ga).join(`
`),p=[pm(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,d,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+c:"",i.envMap?"#define "+u:"",i.envMap?"#define "+f:"",i.envMapPMREM?"#define ENVMAP_MAX_LOD "+i.envMapMaxLod+".0":"",i.envMapPMREM?"#define ENVMAP_SIZE "+i.envMapSize+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",i.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.retroreflection?"#define USE_RETROREFLECTION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+l:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Di?"#define TONE_MAPPING":"",i.toneMapping!==Di?dt.tonemapping_pars_fragment:"",i.toneMapping!==Di?Bx("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",dt.colorspace_pars_fragment,Ux("linearToOutputTexel",i.outputColorSpace),Ox(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(ga).join(`
`);if(o=Kc(o),o=um(o,i),o=fm(o,i),a=Kc(a),a=um(a,i),a=fm(a,i),o=dm(o),a=dm(a),i.isRawShaderMaterial!==!0)m=`#version 300 es
`,y=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,p=["#define varying in",i.glslVersion===$l?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===$l?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p;let T=m+y+o,E=m+p+a,S=Jc(n,n.VERTEX_SHADER,T),C=Jc(n,n.FRAGMENT_SHADER,E);if(n.attachShader(x,S),n.attachShader(x,C),i.index0AttributeName!==void 0)n.bindAttribLocation(x,0,i.index0AttributeName);else if(i.hasPositionAttribute===!0)n.bindAttribLocation(x,0,"position");n.linkProgram(x);function L(q){if(e.debug.checkShaderErrors){let U=n.getProgramInfoLog(x)||"",z=n.getShaderInfoLog(S)||"",ne=n.getShaderInfoLog(C)||"",D=U.trim(),ee=z.trim(),re=ne.trim(),W=!0,pe=!0;if(n.getProgramParameter(x,n.LINK_STATUS)===!1)if(W=!1,typeof e.debug.onShaderError==="function")e.debug.onShaderError(n,x,S,C);else{let Q=hm(n,S,"vertex"),oe=hm(n,C,"fragment");Oe("WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(x,n.VALIDATE_STATUS)+`

Material Name: `+q.name+`
Material Type: `+q.type+`

Program Info Log: `+D+`
`+Q+`
`+oe)}else if(D!=="")Ee("WebGLProgram: Program Info Log:",D);else if(ee===""||re==="")pe=!1;if(pe)q.diagnostics={runnable:W,programLog:D,vertexShader:{log:ee,prefix:y},fragmentShader:{log:re,prefix:p}}}n.deleteShader(S),n.deleteShader(C),g=new Cn(n,x),b=Vx(n,x)}let g;this.getUniforms=function(){if(g===void 0)L(this);return g};let b;this.getAttributes=function(){if(b===void 0)L(this);return b};let N=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){if(N===!1)N=n.getProgramParameter(x,Ix);return N},this.destroy=function(){r.releaseStatesOfProgram(this),n.deleteProgram(x),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=Lx++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=S,this.fragmentShader=C,this}var $x=0;class Qc{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){let r=this._getShaderCacheForMaterial(e);if(r.has(t)===!1)r.add(t),t.usedTimes++;if(r.has(i)===!1)r.add(i),i.usedTimes++;return this}remove(e){let t=this.materialCache.get(e);for(let i of t)if(i.usedTimes--,i.usedTimes===0)this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);if(i===void 0)i=new Set,t.set(e,i);return i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);if(i===void 0)i=new gm(e),t.set(e,i);return i}}class gm{constructor(e){this.id=$x++,this.code=e,this.usedTimes=0}}function jx(e){return e===Ui||e===en||e===tn}function xm(e,t,i,r,n,s){let o=new un,a=new Qc,l=new Set,c=[],u=new Map,f=r.logarithmicDepthBuffer,h={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(g){if(l.add(g),g===0)return"uv";return`uv${g}`}function x(g,b,N,q,U,z){let ne=q.fog,D=U.geometry,ee=g.isMeshStandardMaterial||g.isMeshLambertMaterial||g.isMeshPhongMaterial?q.environment:null,re=g.isMeshStandardMaterial||g.isMeshLambertMaterial&&!g.envMap||g.isMeshPhongMaterial&&!g.envMap,W=t.get(g.envMap||ee,re),pe=h[g.type],Q=r.precision;if(g.precision!==null){if(Q=r.getMaxPrecision(g.precision),Q!==g.precision)Ee("WebGLProgram.getParameters:",g.precision,"not supported, using",Q,"instead.")}let oe=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,ue=oe!==void 0?oe.length:0,Se=0;if(D.morphAttributes.position!==void 0)Se=1;if(D.morphAttributes.normal!==void 0)Se=2;if(D.morphAttributes.color!==void 0)Se=3;let ae,fe,ze,Ke;if(pe){let Le=Vi[pe];ae=Le.vertexShader,fe=Le.fragmentShader}else{ae=g.vertexShader,fe=g.fragmentShader;let Le=a.getVertexShaderStage(g),wt=a.getFragmentShaderStage(g);a.update(g,Le,wt),ze=Le.id,Ke=wt.id}let $e=e.getRenderTarget(),Ne=e.state.buffers.depth.getReversed(),_t=U.isInstancedMesh===!0,tt=U.isBatchedMesh===!0,it=!!g.map,gt=!!g.matcap,le=!!W,xe=le&&W.isPMREMTexture===!0,_e=!!g.aoMap,Ue=!!g.lightMap,ve=!!g.bumpMap&&g.wireframe===!1,Ye=!!g.normalMap,Xe=!!g.displacementMap,Ve=!!g.emissiveMap,nt=!!g.metalnessMap,vt=!!g.roughnessMap,O=g.anisotropy>0,Gt=g.clearcoat>0,lt=g.diffuseRoughness>0,Ft=g.dispersion>0,Re=g.retroreflectivity>0,bt=g.iridescence>0,je=g.sheen>0,st=g.transmission>0,pt=O&&!!g.anisotropyMap,A=Gt&&!!g.clearcoatMap,_=Gt&&!!g.clearcoatNormalMap,H=Gt&&!!g.clearcoatRoughnessMap,he=lt&&!!g.diffuseRoughnessMap,ce=bt&&!!g.iridescenceMap,ye=bt&&!!g.iridescenceThicknessMap,Ae=je&&!!g.sheenColorMap,K=je&&!!g.sheenRoughnessMap,se=!!g.specularMap,Te=!!g.specularColorMap,F=!!g.specularIntensityMap,ie=st&&!!g.transmissionMap,j=st&&!!g.thicknessMap,ge=!!g.gradientMap,be=!!g.alphaMap,Ce=g.alphaTest>0,He=!!g.alphaHash,qe=!!g.extensions,Pe=Di;if(g.toneMapped){if($e===null||$e.isXRRenderTarget===!0)Pe=e.toneMapping}let ke=xe?W.isCompressedCubeTexture?W.image[0].mipmaps:W.mipmaps:null,ft={shaderID:pe,shaderType:g.type,shaderName:g.name,vertexShader:ae,fragmentShader:fe,defines:g.defines,customVertexShaderID:ze,customFragmentShaderID:Ke,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:Q,batching:tt,batchingColor:tt&&U._colorsTexture!==null,instancing:_t,instancingColor:_t&&U.instanceColor!==null,instancingMorph:_t&&U.morphTexture!==null,outputColorSpace:$e===null?e.outputColorSpace:$e.isXRRenderTarget===!0?$e.texture.colorSpace:at.workingColorSpace,alphaToCoverage:!!g.alphaToCoverage,map:it,matcap:gt,envMap:le,envMapMode:le&&W.mapping,envMapPMREM:xe,envMapMaxLod:xe?ke.length-1:null,envMapSize:xe?ke[0].width:null,aoMap:_e,lightMap:Ue,bumpMap:ve,normalMap:Ye,displacementMap:Xe,emissiveMap:Ve,normalMapObjectSpace:Ye&&g.normalMapType===Lh,normalMapTangentSpace:Ye&&g.normalMapType===rr,packedNormalMap:Ye&&g.normalMapType===rr&&jx(g.normalMap.format),metalnessMap:nt,roughnessMap:vt,anisotropy:O,anisotropyMap:pt,clearcoat:Gt,clearcoatMap:A,clearcoatNormalMap:_,clearcoatRoughnessMap:H,diffuseRoughness:lt,diffuseRoughnessMap:he,dispersion:Ft,retroreflection:Re,iridescence:bt,iridescenceMap:ce,iridescenceThicknessMap:ye,sheen:je,sheenColorMap:Ae,sheenRoughnessMap:K,specularMap:se,specularColorMap:Te,specularIntensityMap:F,transmission:st,transmissionMap:ie,thicknessMap:j,gradientMap:ge,opaque:g.transparent===!1&&g.blending===Lr&&g.alphaToCoverage===!1,alphaMap:be,alphaTest:Ce,alphaHash:He,combine:g.combine,mapUv:it&&d(g.map.channel),aoMapUv:_e&&d(g.aoMap.channel),lightMapUv:Ue&&d(g.lightMap.channel),bumpMapUv:ve&&d(g.bumpMap.channel),normalMapUv:Ye&&d(g.normalMap.channel),displacementMapUv:Xe&&d(g.displacementMap.channel),emissiveMapUv:Ve&&d(g.emissiveMap.channel),metalnessMapUv:nt&&d(g.metalnessMap.channel),roughnessMapUv:vt&&d(g.roughnessMap.channel),anisotropyMapUv:pt&&d(g.anisotropyMap.channel),clearcoatMapUv:A&&d(g.clearcoatMap.channel),clearcoatNormalMapUv:_&&d(g.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:H&&d(g.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:he&&d(g.diffuseRoughnessMap.channel),iridescenceMapUv:ce&&d(g.iridescenceMap.channel),iridescenceThicknessMapUv:ye&&d(g.iridescenceThicknessMap.channel),sheenColorMapUv:Ae&&d(g.sheenColorMap.channel),sheenRoughnessMapUv:K&&d(g.sheenRoughnessMap.channel),specularMapUv:se&&d(g.specularMap.channel),specularColorMapUv:Te&&d(g.specularColorMap.channel),specularIntensityMapUv:F&&d(g.specularIntensityMap.channel),transmissionMapUv:ie&&d(g.transmissionMap.channel),thicknessMapUv:j&&d(g.thicknessMap.channel),alphaMapUv:be&&d(g.alphaMap.channel),vertexTangents:!!D.attributes.tangent&&(Ye||O),vertexNormals:!!D.attributes.normal,vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!D.attributes.uv&&(it||be),fog:!!ne,useFog:g.fog===!0,fogExp2:!!ne&&ne.isFogExp2,flatShading:g.wireframe===!1&&(g.flatShading===!0||D.attributes.normal===void 0&&Ye===!1&&(g.isMeshLambertMaterial||g.isMeshPhongMaterial||g.isMeshStandardMaterial||g.isMeshPhysicalMaterial)),sizeAttenuation:g.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:Ne,skinning:U.isSkinnedMesh===!0,hasPositionAttribute:D.attributes.position!==void 0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:ue,morphTextureStride:Se,numSunLights:b.sun.length,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numSunLightShadows:b.sunShadowMap.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:z.filter((Le)=>Le.texture!==null).length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:g.dithering,shadowMapEnabled:e.shadowMap.enabled&&N.length>0,shadowMapType:e.shadowMap.type,toneMapping:Pe,decodeVideoTexture:it&&g.map.isVideoTexture===!0&&at.getTransfer(g.map.colorSpace)===xt,decodeVideoTextureEmissive:Ve&&g.emissiveMap.isVideoTexture===!0&&at.getTransfer(g.emissiveMap.colorSpace)===xt,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===mi,flipSided:g.side===Bt,useDepthPacking:g.depthPacking>=0,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionClipCullDistance:qe&&g.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(qe&&g.extensions.multiDraw===!0||tt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:g.customProgramCacheKey()};return ft.vertexUv1s=l.has(1),ft.vertexUv2s=l.has(2),ft.vertexUv3s=l.has(3),l.clear(),ft}function y(g){let b=[];if(g.shaderID)b.push(g.shaderID);else b.push(g.customVertexShaderID),b.push(g.customFragmentShaderID);if(g.defines!==void 0)for(let N in g.defines)b.push(N),b.push(g.defines[N]);if(g.isRawShaderMaterial===!1)p(b,g),m(b,g),b.push(e.outputColorSpace);return b.push(g.customProgramCacheKey),b.join()}function p(g,b){g.push(b.precision),g.push(b.outputColorSpace),g.push(b.envMapMode),g.push(b.envMapPMREM),g.push(b.envMapMaxLod),g.push(b.envMapSize),g.push(b.mapUv),g.push(b.alphaMapUv),g.push(b.lightMapUv),g.push(b.aoMapUv),g.push(b.bumpMapUv),g.push(b.normalMapUv),g.push(b.displacementMapUv),g.push(b.emissiveMapUv),g.push(b.metalnessMapUv),g.push(b.roughnessMapUv),g.push(b.anisotropyMapUv),g.push(b.clearcoatMapUv),g.push(b.clearcoatNormalMapUv),g.push(b.clearcoatRoughnessMapUv),g.push(b.diffuseRoughnessMapUv),g.push(b.iridescenceMapUv),g.push(b.iridescenceThicknessMapUv),g.push(b.sheenColorMapUv),g.push(b.sheenRoughnessMapUv),g.push(b.specularMapUv),g.push(b.specularColorMapUv),g.push(b.specularIntensityMapUv),g.push(b.transmissionMapUv),g.push(b.thicknessMapUv),g.push(b.combine),g.push(b.fogExp2),g.push(b.sizeAttenuation),g.push(b.morphTargetsCount),g.push(b.numSunLights),g.push(b.numDirLights),g.push(b.numPointLights),g.push(b.numSpotLights),g.push(b.numSpotLightMaps),g.push(b.numHemiLights),g.push(b.numRectAreaLights),g.push(b.numSunLightShadows),g.push(b.numDirLightShadows),g.push(b.numPointLightShadows),g.push(b.numSpotLightShadows),g.push(b.numSpotLightShadowsWithMaps),g.push(b.numLightProbes),g.push(b.numLightProbeGrids),g.push(b.shadowMapType),g.push(b.toneMapping),g.push(b.numClippingPlanes),g.push(b.numClipIntersection),g.push(b.depthPacking)}function m(g,b){if(o.disableAll(),b.instancing)o.enable(0);if(b.instancingColor)o.enable(1);if(b.instancingMorph)o.enable(2);if(b.matcap)o.enable(3);if(b.envMap)o.enable(4);if(b.normalMapObjectSpace)o.enable(5);if(b.normalMapTangentSpace)o.enable(6);if(b.clearcoat)o.enable(7);if(b.iridescence)o.enable(8);if(b.alphaTest)o.enable(9);if(b.vertexColors)o.enable(10);if(b.vertexAlphas)o.enable(11);if(b.vertexUv1s)o.enable(12);if(b.vertexUv2s)o.enable(13);if(b.vertexUv3s)o.enable(14);if(b.vertexTangents)o.enable(15);if(b.anisotropy)o.enable(16);if(b.alphaHash)o.enable(17);if(b.batching)o.enable(18);if(b.dispersion)o.enable(19);if(b.retroreflection)o.enable(24);if(b.diffuseRoughness)o.enable(25);if(b.batchingColor)o.enable(20);if(b.gradientMap)o.enable(21);if(b.packedNormalMap)o.enable(22);if(b.vertexNormals)o.enable(23);if(g.push(o.mask),o.disableAll(),b.fog)o.enable(0);if(b.useFog)o.enable(1);if(b.flatShading)o.enable(2);if(b.logarithmicDepthBuffer)o.enable(3);if(b.reversedDepthBuffer)o.enable(4);if(b.skinning)o.enable(5);if(b.morphTargets)o.enable(6);if(b.morphNormals)o.enable(7);if(b.morphColors)o.enable(8);if(b.premultipliedAlpha)o.enable(9);if(b.shadowMapEnabled)o.enable(10);if(b.doubleSided)o.enable(11);if(b.flipSided)o.enable(12);if(b.useDepthPacking)o.enable(13);if(b.dithering)o.enable(14);if(b.transmission)o.enable(15);if(b.sheen)o.enable(16);if(b.opaque)o.enable(17);if(b.pointsUvs)o.enable(18);if(b.decodeVideoTexture)o.enable(19);if(b.decodeVideoTextureEmissive)o.enable(20);if(b.alphaToCoverage)o.enable(21);if(b.numLightProbeGrids>0)o.enable(22);if(b.hasPositionAttribute)o.enable(23);g.push(o.mask)}function T(g){let b=h[g.type],N;if(b){let q=Vi[b];N=Qi.clone(q.uniforms)}else N=g.uniforms;return N}function E(g,b){let N=u.get(b);if(N!==void 0)++N.usedTimes;else N=new mm(e,b,g,n),c.push(N),u.set(b,N);return N}function S(g){if(--g.usedTimes===0){let b=c.indexOf(g);c[b]=c[c.length-1],c.pop(),u.delete(g.cacheKey),g.destroy()}}function C(g){a.remove(g)}function L(){a.dispose()}return{getParameters:x,getProgramCacheKey:y,getUniforms:T,acquireProgram:E,releaseProgram:S,releaseShaderCache:C,programs:c,dispose:L}}function _m(){let e=new WeakMap;function t(o){return e.has(o)}function i(o){let a=e.get(o);if(a===void 0)a={},e.set(o,a);return a}function r(o){e.delete(o)}function n(o,a,l){e.get(o)[a]=l}function s(){e=new WeakMap}return{has:t,get:i,remove:r,update:n,dispose:s}}function e_(e,t){if(e.groupOrder!==t.groupOrder)return e.groupOrder-t.groupOrder;else if(e.renderOrder!==t.renderOrder)return e.renderOrder-t.renderOrder;else if(e.material.id!==t.material.id)return e.material.id-t.material.id;else if(e.materialVariant!==t.materialVariant)return e.materialVariant-t.materialVariant;else if(e.z!==t.z)return e.z-t.z;else return e.id-t.id}function vm(e,t){if(e.groupOrder!==t.groupOrder)return e.groupOrder-t.groupOrder;else if(e.renderOrder!==t.renderOrder)return e.renderOrder-t.renderOrder;else if(e.z!==t.z)return t.z-e.z;else return e.id-t.id}function ym(){let e=[],t=0,i=[],r=[],n=[];function s(){t=0,i.length=0,r.length=0,n.length=0}function o(h){let d=0;if(h.isInstancedMesh)d+=2;if(h.isSkinnedMesh)d+=1;return d}function a(h,d,x,y,p,m){let T=e[t];if(T===void 0)T={id:h.id,object:h,geometry:d,material:x,materialVariant:o(h),groupOrder:y,renderOrder:h.renderOrder,z:p,group:m},e[t]=T;else T.id=h.id,T.object=h,T.geometry=d,T.material=x,T.materialVariant=o(h),T.groupOrder=y,T.renderOrder=h.renderOrder,T.z=p,T.group=m;return t++,T}function l(h,d,x,y,p,m,T){if(T.reversedDepth===!0)p=-p;let E=a(h,d,x,y,p,m);if(x.transmission>0)r.push(E);else if(x.transparent===!0)n.push(E);else i.push(E)}function c(h,d,x,y,p,m){let T=a(h,d,x,y,p,m);if(x.transmission>0)r.unshift(T);else if(x.transparent===!0)n.unshift(T);else i.unshift(T)}function u(h,d){if(i.length>1)i.sort(h||e_);if(r.length>1)r.sort(d||vm);if(n.length>1)n.sort(d||vm)}function f(){for(let h=t,d=e.length;h<d;h++){let x=e[h];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:i,transmissive:r,transparent:n,init:s,push:l,unshift:c,finish:f,sort:u}}function Mm(){let e=new WeakMap;function t(r,n){let s=e.get(r),o;if(s===void 0)o=new ym,e.set(r,[o]);else if(n>=s.length)o=new ym,s.push(o);else o=s[n];return o}function i(){e=new WeakMap}return{get:t,dispose:i}}function t_(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let i;switch(t.type){case"SunLight":case"DirectionalLight":i={direction:new R,color:new de};break;case"SpotLight":i={position:new R,direction:new R,color:new de,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new R,color:new de,distance:0,decay:0};break;case"HemisphereLight":i={direction:new R,skyColor:new de,groundColor:new de};break;case"RectAreaLight":i={color:new de,position:new R,halfWidth:new R,halfHeight:new R};break}return e[t.id]=i,i}}}function i_(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let i;switch(t.type){case"SunLight":case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new J};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new J};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new J,shadowCameraNear:1,shadowCameraFar:1000};break}return e[t.id]=i,i}}}var r_=0;function n_(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function Sm(e){let t=new t_,i=i_(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)r.probe.push(new R);let n=new R,s=new Je,o=new Je;function a(c){let u=0,f=0,h=0;for(let z=0;z<9;z++)r.probe[z].set(0,0,0);let d=0,x=0,y=0,p=0,m=0,T=0,E=0,S=0,C=0,L=0,g=0,b=0,N=0,q=0;c.sort(n_);for(let z=0,ne=c.length;z<ne;z++){let D=c[z],{color:ee,intensity:re,distance:W}=D,pe=null;if(D.shadow&&D.shadow.map)if(D.shadow.map.texture.format===Ui)pe=D.shadow.map.texture;else pe=D.shadow.map.depthTexture||D.shadow.map.texture;if(D.isAmbientLight)u+=ee.r*re,f+=ee.g*re,h+=ee.b*re;else if(D.isLightProbe){for(let Q=0;Q<9;Q++)r.probe[Q].addScaledVector(D.sh.coefficients[Q],re);q++}else if(D.isSunLight){let Q=t.get(D);if(Q.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let oe=D.shadow,ue=i.get(D);ue.shadowIntensity=oe.intensity,ue.shadowBias=oe.bias,ue.shadowNormalBias=oe.normalBias,ue.shadowRadius=oe.radius,ue.shadowMapSize.copy(oe.mapSize).multiply(oe.getFrameExtents()),r.sunShadow[x]=ue,r.sunShadowMap[x]=pe;let Se=oe.getViewportCount();for(let ae=0;ae<Se;ae++)r.sunShadowMatrix[y+ae]=oe.getMatrix(ae),r.sunShadowCascade[y+ae]=oe._cascadeData[ae];y+=Se,x++}r.sun[d]=Q,d++}else if(D.isDirectionalLight){let Q=t.get(D);if(Q.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let oe=D.shadow,ue=i.get(D);ue.shadowIntensity=oe.intensity,ue.shadowBias=oe.bias,ue.shadowNormalBias=oe.normalBias,ue.shadowRadius=oe.radius,ue.shadowMapSize=oe.mapSize,r.directionalShadow[p]=ue,r.directionalShadowMap[p]=pe,r.directionalShadowMatrix[p]=D.shadow.matrix,C++}r.directional[p]=Q,p++}else if(D.isSpotLight){let Q=t.get(D);Q.position.setFromMatrixPosition(D.matrixWorld),Q.color.copy(ee).multiplyScalar(re),Q.distance=W,Q.coneCos=Math.cos(D.angle),Q.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),Q.decay=D.decay,r.spot[T]=Q;let oe=D.shadow;if(D.map){if(r.spotLightMap[b]=D.map,b++,oe.updateMatrices(D),D.castShadow)N++}if(r.spotLightMatrix[T]=oe.matrix,D.castShadow){let ue=i.get(D);ue.shadowIntensity=oe.intensity,ue.shadowBias=oe.bias,ue.shadowNormalBias=oe.normalBias,ue.shadowRadius=oe.radius,ue.shadowMapSize=oe.mapSize,r.spotShadow[T]=ue,r.spotShadowMap[T]=pe,g++}T++}else if(D.isRectAreaLight){let Q=t.get(D);Q.color.copy(ee).multiplyScalar(re),Q.halfWidth.set(D.width*0.5,0,0),Q.halfHeight.set(0,D.height*0.5,0),r.rectArea[E]=Q,E++}else if(D.isPointLight){let Q=t.get(D);if(Q.color.copy(D.color).multiplyScalar(D.intensity),Q.distance=D.distance,Q.decay=D.decay,D.castShadow){let oe=D.shadow,ue=i.get(D);ue.shadowIntensity=oe.intensity,ue.shadowBias=oe.bias,ue.shadowNormalBias=oe.normalBias,ue.shadowRadius=oe.radius,ue.shadowMapSize=oe.mapSize,ue.shadowCameraNear=oe.camera.near,ue.shadowCameraFar=oe.camera.far,r.pointShadow[m]=ue,r.pointShadowMap[m]=pe,r.pointShadowMatrix[m]=D.shadow.matrix,L++}r.point[m]=Q,m++}else if(D.isHemisphereLight){let Q=t.get(D);Q.skyColor.copy(D.color).multiplyScalar(re),Q.groundColor.copy(D.groundColor).multiplyScalar(re),r.hemi[S]=Q,S++}}if(E>0)if(e.has("OES_texture_float_linear")===!0)r.rectAreaLTC1=Ie.LTC_FLOAT_1,r.rectAreaLTC2=Ie.LTC_FLOAT_2;else r.rectAreaLTC1=Ie.LTC_HALF_1,r.rectAreaLTC2=Ie.LTC_HALF_2;r.ambient[0]=u,r.ambient[1]=f,r.ambient[2]=h;let U=r.hash;if(U.sunLength!==d||U.directionalLength!==p||U.pointLength!==m||U.spotLength!==T||U.rectAreaLength!==E||U.hemiLength!==S||U.numSunShadows!==x||U.numDirectionalShadows!==C||U.numPointShadows!==L||U.numSpotShadows!==g||U.numSpotMaps!==b||U.numLightProbes!==q)r.sun.length=d,r.directional.length=p,r.spot.length=T,r.rectArea.length=E,r.point.length=m,r.hemi.length=S,r.sunShadow.length=x,r.sunShadowMap.length=x,r.sunShadowMatrix.length=y,r.sunShadowCascade.length=y,r.directionalShadow.length=C,r.directionalShadowMap.length=C,r.directionalShadowMatrix.length=C,r.pointShadow.length=L,r.pointShadowMap.length=L,r.pointShadowMatrix.length=L,r.spotShadow.length=g,r.spotShadowMap.length=g,r.spotLightMatrix.length=g+b-N,r.spotLightMap.length=b,r.numSpotLightShadowsWithMaps=N,r.numLightProbes=q,U.sunLength=d,U.directionalLength=p,U.pointLength=m,U.spotLength=T,U.rectAreaLength=E,U.hemiLength=S,U.numSunShadows=x,U.numDirectionalShadows=C,U.numPointShadows=L,U.numSpotShadows=g,U.numSpotMaps=b,U.numLightProbes=q,r.version=r_++}function l(c,u){let f=0,h=0,d=0,x=0,y=0,p=0,m=u.matrixWorldInverse;for(let T=0,E=c.length;T<E;T++){let S=c[T];if(S.isSunLight){let C=r.sun[f];C.direction.setFromMatrixPosition(S.matrixWorld),C.direction.transformDirection(m),f++}else if(S.isDirectionalLight){let C=r.directional[h];C.direction.setFromMatrixPosition(S.matrixWorld),n.setFromMatrixPosition(S.target.matrixWorld),C.direction.sub(n),C.direction.transformDirection(m),h++}else if(S.isSpotLight){let C=r.spot[x];C.position.setFromMatrixPosition(S.matrixWorld),C.position.applyMatrix4(m),C.direction.setFromMatrixPosition(S.matrixWorld),n.setFromMatrixPosition(S.target.matrixWorld),C.direction.sub(n),C.direction.transformDirection(m),x++}else if(S.isRectAreaLight){let C=r.rectArea[y];C.position.setFromMatrixPosition(S.matrixWorld),C.position.applyMatrix4(m),o.identity(),s.copy(S.matrixWorld),s.premultiply(m),o.extractRotation(s),C.halfWidth.set(S.width*0.5,0,0),C.halfHeight.set(0,S.height*0.5,0),C.halfWidth.applyMatrix4(o),C.halfHeight.applyMatrix4(o),y++}else if(S.isPointLight){let C=r.point[d];C.position.setFromMatrixPosition(S.matrixWorld),C.position.applyMatrix4(m),d++}else if(S.isHemisphereLight){let C=r.hemi[p];C.direction.setFromMatrixPosition(S.matrixWorld),C.direction.transformDirection(m),p++}}}return{setup:a,setupView:l,state:r}}function bm(e){let t=new Sm(e),i=[],r=[],n=[];function s(f){u.camera=f,i.length=0,r.length=0,n.length=0}function o(f){if(f.isLightProbeGrid)n.push(f);else i.push(f)}function a(f){r.push(f)}function l(){t.setup(i),n.sort((f,h)=>f.priority-h.priority||f.id-h.id)}function c(f){t.setupView(i,f)}let u={lightsArray:i,shadowsArray:r,lightProbeGridArray:n,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:u,setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function Tm(e){let t=new WeakMap;function i(n,s=0){let o=t.get(n),a;if(o===void 0)a=new bm(e),t.set(n,[a]);else if(s>=o.length)a=new bm(e),o.push(a);else a=o[s];return a}function r(){t=new WeakMap}return{get:i,dispose:r}}var Em=`
void main() {

	gl_Position = vec4( position, 1.0 );

}
`,wm=`
uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;

void main() {

	const float samples = float( VSM_SAMPLES );

	float mean = 0.0;
	float squared_mean = 0.0;

	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {

		float uvOffset = uvStart + i * uvStride;

		#ifdef HORIZONTAL_PASS

			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;

		#else

			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;

		#endif

	}

	mean = mean / samples;
	squared_mean = squared_mean / samples;

	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );

	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );

}
`;var o_=[new R(1,0,0),new R(-1,0,0),new R(0,1,0),new R(0,-1,0),new R(0,0,1),new R(0,0,-1)],a_=[new R(0,-1,0),new R(0,-1,0),new R(0,0,1),new R(0,0,-1),new R(0,-1,0),new R(0,-1,0)],Am=new Je,xa=new R,$c=new R;function Rm(e,t,i){let r=new Ki,n=new J,s=new J,o=new yt,a=new la,l=new ca,c={},u=i.maxTextureSize,f={[ki]:Bt,[Bt]:ki,[mi]:mi},h=new It({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new J},radius:{value:4}},vertexShader:Em,fragmentShader:wm}),d=h.clone();d.defines.HORIZONTAL_PASS=1;let x=new Ze;x.setAttribute("position",new Yt(new Float32Array([-1,-1,0.5,3,-1,0.5,-1,3,0.5]),3));let y=new et(x,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Un;let m=this.type;this.render=function(L,g,b){if(p.enabled===!1)return;if(p.autoUpdate===!1&&p.needsUpdate===!1)return;if(L.length===0)return;if(this.type===hh)Ee("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Un;let N=e.getRenderTarget(),q=e.getActiveCubeFace(),U=e.getActiveMipmapLevel(),z=e.state;if(z.setBlending(Wi),z.buffers.depth.getReversed()===!0)z.buffers.color.setClear(0,0,0,0);else z.buffers.color.setClear(1,1,1,1);z.buffers.depth.setTest(!0),z.setScissorTest(!1);let ne=m!==this.type;if(ne)g.traverse(function(D){if(D.material)if(Array.isArray(D.material))D.material.forEach((ee)=>ee.needsUpdate=!0);else D.material.needsUpdate=!0});for(let D=0,ee=L.length;D<ee;D++){let re=L[D],W=re.shadow;if(W===void 0){Ee("WebGLShadowMap:",re,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;n.copy(W.mapSize);let pe=W.getFrameExtents();if(n.multiply(pe),s.copy(W.mapSize),n.x>u||n.y>u){if(n.x>u)s.x=Math.floor(u/pe.x),n.x=s.x*pe.x,W.mapSize.x=s.x;if(n.y>u)s.y=Math.floor(u/pe.y),n.y=s.y*pe.y,W.mapSize.y=s.y}let Q=e.state.buffers.depth.getReversed();if(W.camera._reversedDepth=Q,W.map===null||ne===!0){if(W.map!==null){if(W.map.depthTexture!==null)W.map.depthTexture.dispose(),W.map.depthTexture=null;W.map.dispose()}if(this.type===Qr){if(re.isPointLight){Ee("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}W.map=new Pt(n.x,n.y,{format:Ui,type:Lt,minFilter:Ot,magFilter:Ot,generateMipmaps:!1}),W.map.texture.name=re.name+".shadowMap",W.map.depthTexture=new Oi(n.x,n.y,qt),W.map.depthTexture.name=re.name+".shadowMapDepth",W.map.depthTexture.format=Pi,W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=Nt,W.map.depthTexture.magFilter=Nt}else{if(re.isPointLight)W.map=new Zr(n.x),W.map.depthTexture=new Es(n.x,Qt);else W.map=new Pt(n.x,n.y),W.map.depthTexture=new Oi(n.x,n.y,Qt);if(W.map.depthTexture.name=re.name+".shadowMap",W.map.depthTexture.format=Pi,this.type===Un)W.map.depthTexture.compareFunction=Q?Va:Ga,W.map.depthTexture.minFilter=Ot,W.map.depthTexture.magFilter=Ot;else W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=Nt,W.map.depthTexture.magFilter=Nt}W.camera.updateProjectionMatrix()}if(W.map.isWebGLCubeRenderTarget!==!0&&(W.map.width!==n.x||W.map.height!==n.y))W.map.setSize(n.x,n.y);let oe=W.map.isWebGLCubeRenderTarget?6:W.getViewportCount();if(re.isPointLight!==!0)W.updateMatrices(re,b);let ue=(W.camera.layers.mask&4294967294)!==0?W.camera.layers:b.layers;for(let Se=0;Se<oe;Se++){let ae=W.getCamera(Se);if(re.isPointLight){let{camera:fe,matrix:ze}=W,Ke=re.distance||fe.far;if(Ke!==fe.far)fe.far=Ke,fe.updateProjectionMatrix();xa.setFromMatrixPosition(re.matrixWorld),fe.position.copy(xa),$c.copy(fe.position),$c.add(o_[Se]),fe.up.copy(a_[Se]),fe.lookAt($c),fe.updateMatrixWorld(),ze.makeTranslation(-xa.x,-xa.y,-xa.z),Am.multiplyMatrices(fe.projectionMatrix,fe.matrixWorldInverse),W._frustum.setFromProjectionMatrix(Am,fe.coordinateSystem,fe.reversedDepth)}if(W.map.isWebGLCubeRenderTarget)e.setRenderTarget(W.map,Se),e.clear();else{if(Se===0)e.setRenderTarget(W.map),e.clear();let fe=W.getViewport(Se);o.set(s.x*fe.x,s.y*fe.y,s.x*fe.z,s.y*fe.w),z.viewport(o)}r=W.getFrustum(Se),S(g,b,ae,re,ue,this.type)}if(W.isPointLightShadow!==!0&&this.type===Qr)T(W,b);W.needsUpdate=!1}m=this.type,p.needsUpdate=!1,e.setRenderTarget(N,q,U)};function T(L,g){let b=t.update(y);if(h.defines.VSM_SAMPLES!==L.blurSamples)h.defines.VSM_SAMPLES=L.blurSamples,d.defines.VSM_SAMPLES=L.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0;if(L.mapPass===null)L.mapPass=new Pt(n.x,n.y,{format:Ui,type:Lt});else if(L.mapPass.width!==L.map.width||L.mapPass.height!==L.map.height)L.mapPass.setSize(L.map.width,L.map.height);h.uniforms.shadow_pass.value=L.map.depthTexture,h.uniforms.resolution.value.set(L.map.width,L.map.height),h.uniforms.radius.value=L.radius,e.setRenderTarget(L.mapPass),e.clear(),e.renderBufferDirect(g,null,b,h,y,null),d.uniforms.shadow_pass.value=L.mapPass.texture,d.uniforms.resolution.value.set(L.map.width,L.map.height),d.uniforms.radius.value=L.radius,e.setRenderTarget(L.map),e.clear(),e.renderBufferDirect(g,null,b,d,y,null)}function E(L,g,b,N){let q=null,U=b.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(U!==void 0)q=U;else if(q=b.isPointLight===!0?l:a,e.localClippingEnabled&&g.clipShadows===!0&&Array.isArray(g.clippingPlanes)&&g.clippingPlanes.length!==0||g.displacementMap&&g.displacementScale!==0||g.alphaMap&&g.alphaTest>0||g.map&&g.alphaTest>0||g.alphaToCoverage===!0){let z=q.uuid,ne=g.uuid,D=c[z];if(D===void 0)D={},c[z]=D;let ee=D[ne];if(ee===void 0)ee=q.clone(),D[ne]=ee,g.addEventListener("dispose",C);q=ee}if(q.visible=g.visible,q.wireframe=g.wireframe,N===Qr)q.side=g.shadowSide!==null?g.shadowSide:g.side;else q.side=g.shadowSide!==null?g.shadowSide:f[g.side];if(q.alphaMap=g.alphaMap,q.alphaTest=g.alphaToCoverage===!0?0.5:g.alphaTest,q.map=g.map,q.clipShadows=g.clipShadows,q.clippingPlanes=g.clippingPlanes,q.clipIntersection=g.clipIntersection,q.displacementMap=g.displacementMap,q.displacementScale=g.displacementScale,q.displacementBias=g.displacementBias,q.wireframeLinewidth=g.wireframeLinewidth,q.linewidth=g.linewidth,b.isPointLight===!0&&q.isMeshDistanceMaterial===!0){let z=e.properties.get(q);z.light=b}return q}function S(L,g,b,N,q,U){if(L.visible===!1)return;if(L.layers.test(q)&&(L.isMesh||L.isLine||L.isPoints)){if((L.castShadow||L.receiveShadow&&U===Qr)&&(!L.frustumCulled||L.intersectsFrustum(r))){L.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,L.matrixWorld);let D=t.update(L),ee=L.material;if(Array.isArray(ee)){let re=D.groups;for(let W=0,pe=re.length;W<pe;W++){let Q=re[W],oe=ee[Q.materialIndex];if(oe&&oe.visible){let ue=E(L,oe,N,U);L.onBeforeShadow(e,L,g,b,D,ue,Q),e.renderBufferDirect(b,null,D,ue,L,Q),L.onAfterShadow(e,L,g,b,D,ue,Q)}}}else if(ee.visible){let re=E(L,ee,N,U);L.onBeforeShadow(e,L,g,b,D,re,null),e.renderBufferDirect(b,null,D,re,L,null),L.onAfterShadow(e,L,g,b,D,re,null)}}}let ne=L.children;for(let D=0,ee=ne.length;D<ee;D++)S(ne[D],g,b,N,q,U)}function C(L){L.target.removeEventListener("dispose",C);for(let b in c){let N=c[b],q=L.target.uuid;if(q in N)N[q].dispose(),delete N[q]}}}function Cm(e,t){function i(){let F=!1,ie=new yt,j=null,ge=new yt(0,0,0,0);return{setMask:function(be){if(j!==be&&!F)e.colorMask(be,be,be,be),j=be},setLocked:function(be){F=be},setClear:function(be,Ce,He,qe,Pe){if(Pe===!0)be*=qe,Ce*=qe,He*=qe;if(ie.set(be,Ce,He,qe),ge.equals(ie)===!1)e.clearColor(be,Ce,He,qe),ge.copy(ie)},reset:function(){F=!1,j=null,ge.set(-1,0,0,0)}}}function r(){let F=!1,ie=!1,j=null,ge=null,be=null;return{setReversed:function(Ce){if(ie!==Ce){let He=t.get("EXT_clip_control");if(Ce)He.clipControlEXT(He.LOWER_LEFT_EXT,He.ZERO_TO_ONE_EXT);else He.clipControlEXT(He.LOWER_LEFT_EXT,He.NEGATIVE_ONE_TO_ONE_EXT);ie=Ce;let qe=be;be=null,this.setClear(qe)}},getReversed:function(){return ie},setTest:function(Ce){if(Ce)Ne(e.DEPTH_TEST);else _t(e.DEPTH_TEST)},setMask:function(Ce){if(j!==Ce&&!F)e.depthMask(Ce),j=Ce},setFunc:function(Ce){if(ie)Ce=kh[Ce];if(ge!==Ce){switch(Ce){case Xs:e.depthFunc(e.NEVER);break;case qs:e.depthFunc(e.ALWAYS);break;case Ys:e.depthFunc(e.LESS);break;case Nr:e.depthFunc(e.LEQUAL);break;case Zs:e.depthFunc(e.EQUAL);break;case Js:e.depthFunc(e.GEQUAL);break;case Ks:e.depthFunc(e.GREATER);break;case Qs:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}ge=Ce}},setLocked:function(Ce){F=Ce},setClear:function(Ce){if(be!==Ce){if(be=Ce,ie)Ce=1-Ce;e.clearDepth(Ce)}},reset:function(){F=!1,j=null,ge=null,be=null,ie=!1}}}function n(){let F=!1,ie=null,j=null,ge=null,be=null,Ce=null,He=null,qe=null,Pe=null;return{setTest:function(ke){if(!F)if(ke)Ne(e.STENCIL_TEST);else _t(e.STENCIL_TEST)},setMask:function(ke){if(ie!==ke&&!F)e.stencilMask(ke),ie=ke},setFunc:function(ke,ft,Le){if(j!==ke||ge!==ft||be!==Le)e.stencilFunc(ke,ft,Le),j=ke,ge=ft,be=Le},setOp:function(ke,ft,Le){if(Ce!==ke||He!==ft||qe!==Le)e.stencilOp(ke,ft,Le),Ce=ke,He=ft,qe=Le},setLocked:function(ke){F=ke},setClear:function(ke){if(Pe!==ke)e.clearStencil(ke),Pe=ke},reset:function(){F=!1,ie=null,j=null,ge=null,be=null,Ce=null,He=null,qe=null,Pe=null}}}let s=new i,o=new r,a=new n,l={},c=new WeakMap,u={},f={},h={},d=new WeakMap,x=[],y=null,p=!1,m=null,T=null,E=null,S=null,C=null,L=null,g=null,b=new de(0,0,0),N=0,q=!1,U=null,z=null,ne=null,D=null,ee=null,re=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),W=!1,pe=0,Q=e.getParameter(e.VERSION);if(Q.indexOf("WebGL")!==-1)pe=parseFloat(/^WebGL (\d)/.exec(Q)[1]),W=pe>=1;else if(Q.indexOf("OpenGL ES")!==-1)pe=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),W=pe>=2;let oe=null,ue={},Se=e.getParameter(e.SCISSOR_BOX),ae=e.getParameter(e.VIEWPORT),fe=new yt().fromArray(Se),ze=new yt().fromArray(ae);function Ke(F,ie,j,ge){let be=new Uint8Array(4),Ce=e.createTexture();e.bindTexture(F,Ce),e.texParameteri(F,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(F,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let He=0;He<j;He++)if(F===e.TEXTURE_3D||F===e.TEXTURE_2D_ARRAY)e.texImage3D(ie,0,e.RGBA,1,1,ge,0,e.RGBA,e.UNSIGNED_BYTE,be);else e.texImage2D(ie+He,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,be);return Ce}let $e={};$e[e.TEXTURE_2D]=Ke(e.TEXTURE_2D,e.TEXTURE_2D,1),$e[e.TEXTURE_CUBE_MAP]=Ke(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),$e[e.TEXTURE_2D_ARRAY]=Ke(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),$e[e.TEXTURE_3D]=Ke(e.TEXTURE_3D,e.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),Ne(e.DEPTH_TEST),o.setFunc(Nr),ve(!1),Ye(Yl),Ne(e.CULL_FACE),_e(Wi);function Ne(F){if(u[F]!==!0)e.enable(F),u[F]=!0}function _t(F){if(u[F]!==!1)e.disable(F),u[F]=!1}function tt(F,ie){if(h[F]!==ie){if(e.bindFramebuffer(F,ie),h[F]=ie,F===e.DRAW_FRAMEBUFFER)h[e.FRAMEBUFFER]=ie;if(F===e.FRAMEBUFFER)h[e.DRAW_FRAMEBUFFER]=ie;return!0}return!1}function it(F,ie){let j=x,ge=!1;if(F){if(j=d.get(ie),j===void 0)j=[],d.set(ie,j);let be=F.textures;if(j.length!==be.length||j[0]!==e.COLOR_ATTACHMENT0){for(let Ce=0,He=be.length;Ce<He;Ce++)j[Ce]=e.COLOR_ATTACHMENT0+Ce;j.length=be.length,ge=!0}}else if(j[0]!==e.BACK)j[0]=e.BACK,ge=!0;if(ge)e.drawBuffers(j)}function gt(F){if(y!==F)return e.useProgram(F),y=F,!0;return!1}let le={[Dr]:e.FUNC_ADD,[fh]:e.FUNC_SUBTRACT,[dh]:e.FUNC_REVERSE_SUBTRACT};le[ph]=e.MIN,le[mh]=e.MAX;let xe={[gh]:e.ZERO,[xh]:e.ONE,[_h]:e.SRC_COLOR,[Ea]:e.SRC_ALPHA,[Th]:e.SRC_ALPHA_SATURATE,[Sh]:e.DST_COLOR,[yh]:e.DST_ALPHA,[vh]:e.ONE_MINUS_SRC_COLOR,[wa]:e.ONE_MINUS_SRC_ALPHA,[bh]:e.ONE_MINUS_DST_COLOR,[Mh]:e.ONE_MINUS_DST_ALPHA,[Eh]:e.CONSTANT_COLOR,[wh]:e.ONE_MINUS_CONSTANT_COLOR,[Ah]:e.CONSTANT_ALPHA,[Rh]:e.ONE_MINUS_CONSTANT_ALPHA};function _e(F,ie,j,ge,be,Ce,He,qe,Pe,ke){if(F===Wi){if(p===!0)_t(e.BLEND),p=!1;return}if(p===!1)Ne(e.BLEND),p=!0;if(F!==uh){if(F!==m||ke!==q){if(T!==Dr||C!==Dr)e.blendEquation(e.FUNC_ADD),T=Dr,C=Dr;if(ke)switch(F){case Lr:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case hr:e.blendFunc(e.ONE,e.ONE);break;case Zl:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case Jl:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:Oe("WebGLState: Invalid blending: ",F);break}else switch(F){case Lr:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case hr:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case Zl:Oe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Jl:Oe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Oe("WebGLState: Invalid blending: ",F);break}E=null,S=null,L=null,g=null,b.set(0,0,0),N=0,m=F,q=ke}return}if(be=be||ie,Ce=Ce||j,He=He||ge,ie!==T||be!==C)e.blendEquationSeparate(le[ie],le[be]),T=ie,C=be;if(j!==E||ge!==S||Ce!==L||He!==g)e.blendFuncSeparate(xe[j],xe[ge],xe[Ce],xe[He]),E=j,S=ge,L=Ce,g=He;if(qe.equals(b)===!1||Pe!==N)e.blendColor(qe.r,qe.g,qe.b,Pe),b.copy(qe),N=Pe;m=F,q=!1}function Ue(F,ie){F.side===mi?_t(e.CULL_FACE):Ne(e.CULL_FACE);let j=F.side===Bt;if(ie)j=!j;ve(j),F.blending===Lr&&F.transparent===!1?_e(Wi):_e(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),o.setFunc(F.depthFunc),o.setTest(F.depthTest),o.setMask(F.depthWrite),s.setMask(F.colorWrite);let ge=F.stencilWrite;if(a.setTest(ge),ge)a.setMask(F.stencilWriteMask),a.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),a.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass);Ve(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?Ne(e.SAMPLE_ALPHA_TO_COVERAGE):_t(e.SAMPLE_ALPHA_TO_COVERAGE)}function ve(F){if(U!==F){if(F)e.frontFace(e.CW);else e.frontFace(e.CCW);U=F}}function Ye(F){if(F!==lh){if(Ne(e.CULL_FACE),F!==z)if(F===Yl)e.cullFace(e.BACK);else if(F===ch)e.cullFace(e.FRONT);else e.cullFace(e.FRONT_AND_BACK)}else _t(e.CULL_FACE);z=F}function Xe(F){if(F!==ne){if(W)e.lineWidth(F);ne=F}}function Ve(F,ie,j){if(F){if(Ne(e.POLYGON_OFFSET_FILL),D!==ie||ee!==j){if(D=ie,ee=j,o.getReversed())ie=-ie,j=-j;e.polygonOffset(ie,j)}}else _t(e.POLYGON_OFFSET_FILL)}function nt(F){if(F)Ne(e.SCISSOR_TEST);else _t(e.SCISSOR_TEST)}function vt(F){if(F===void 0)F=e.TEXTURE0+re-1;if(oe!==F)e.activeTexture(F),oe=F}function O(F,ie,j){if(j===void 0)if(oe===null)j=e.TEXTURE0+re-1;else j=oe;let ge=ue[j];if(ge===void 0)ge={type:void 0,texture:void 0},ue[j]=ge;if(ge.type!==F||ge.texture!==ie){if(oe!==j)e.activeTexture(j),oe=j;e.bindTexture(F,ie||$e[F]),ge.type=F,ge.texture=ie}}function Gt(){let F=ue[oe];if(F!==void 0&&F.type!==void 0)e.bindTexture(F.type,null),F.type=void 0,F.texture=void 0}function lt(){try{e.compressedTexImage2D(...arguments)}catch(F){Oe("WebGLState:",F)}}function Ft(){try{e.compressedTexImage3D(...arguments)}catch(F){Oe("WebGLState:",F)}}function Re(){try{e.texSubImage2D(...arguments)}catch(F){Oe("WebGLState:",F)}}function bt(){try{e.texSubImage3D(...arguments)}catch(F){Oe("WebGLState:",F)}}function je(){try{e.compressedTexSubImage2D(...arguments)}catch(F){Oe("WebGLState:",F)}}function st(){try{e.compressedTexSubImage3D(...arguments)}catch(F){Oe("WebGLState:",F)}}function pt(){try{e.texStorage2D(...arguments)}catch(F){Oe("WebGLState:",F)}}function A(){try{e.texStorage3D(...arguments)}catch(F){Oe("WebGLState:",F)}}function _(){try{e.texImage2D(...arguments)}catch(F){Oe("WebGLState:",F)}}function H(){try{e.texImage3D(...arguments)}catch(F){Oe("WebGLState:",F)}}function he(F){if(f[F]!==void 0)return f[F];else return e.getParameter(F)}function ce(F,ie){if(f[F]!==ie)e.pixelStorei(F,ie),f[F]=ie}function ye(F){if(fe.equals(F)===!1)e.scissor(F.x,F.y,F.z,F.w),fe.copy(F)}function Ae(F){if(ze.equals(F)===!1)e.viewport(F.x,F.y,F.z,F.w),ze.copy(F)}function K(F,ie){let j=c.get(ie);if(j===void 0)j=new WeakMap,c.set(ie,j);let ge=j.get(F);if(ge===void 0)ge=e.getUniformBlockIndex(ie,F.name),e.uniformBlockBinding(ie,ge,ge),j.set(F,ge)}function se(F,ie,j){let be=c.get(ie).get(F);if(l[be]!==j)e.bindBufferBase(e.UNIFORM_BUFFER,be,j),l[be]=j}function Te(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),u={},f={},oe=null,ue={},h={},l={},d=new WeakMap,x=[],y=null,p=!1,m=null,T=null,E=null,S=null,C=null,L=null,g=null,b=new de(0,0,0),N=0,q=!1,U=null,z=null,ne=null,D=null,ee=null,fe.set(0,0,e.canvas.width,e.canvas.height),ze.set(0,0,e.canvas.width,e.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:Ne,disable:_t,bindFramebuffer:tt,drawBuffers:it,useProgram:gt,setBlending:_e,setMaterial:Ue,setFlipSided:ve,setCullFace:Ye,setLineWidth:Xe,setPolygonOffset:Ve,setScissorTest:nt,activeTexture:vt,bindTexture:O,unbindTexture:Gt,compressedTexImage2D:lt,compressedTexImage3D:Ft,texImage2D:_,texImage3D:H,pixelStorei:ce,getParameter:he,updateUBOMapping:K,uniformBlockBinding:se,texStorage2D:pt,texStorage3D:A,texSubImage2D:Re,texSubImage3D:bt,compressedTexSubImage2D:je,compressedTexSubImage3D:st,scissor:ye,viewport:Ae,reset:Te}}function Pm(e,t,i,r,n,s,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new J,u=new WeakMap,f=new Set,h,d=new WeakMap,x=new Set,y=new FinalizationRegistry((A)=>x.delete(A)),p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(A){}function m(A,_){return p?new OffscreenCanvas(A,_):on("canvas")}function T(A,_,H){let he=1,ce=pt(A);if(ce.width>H||ce.height>H)he=H/Math.max(ce.width,ce.height);if(he<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let ye=Math.floor(he*ce.width),Ae=Math.floor(he*ce.height);if(h===void 0)h=m(ye,Ae);let K=_?m(ye,Ae):h;return K.width=ye,K.height=Ae,K.getContext("2d").drawImage(A,0,0,ye,Ae),Ee("WebGLRenderer: Texture has been resized from ("+ce.width+"x"+ce.height+") to ("+ye+"x"+Ae+")."),K}else{if("data"in A)Ee("WebGLRenderer: Image in DataTexture is too big ("+ce.width+"x"+ce.height+").");return A}return A}function E(A){return A.generateMipmaps}function S(A){e.generateMipmap(A)}function C(A){if(A.isWebGLCubeRenderTarget)return e.TEXTURE_CUBE_MAP;if(A.isWebGL3DRenderTarget)return e.TEXTURE_3D;if(A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture)return e.TEXTURE_2D_ARRAY;return e.TEXTURE_2D}function L(A,_,H,he,ce,ye=!1){if(A!==null){if(e[A]!==void 0)return e[A];Ee("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let Ae;if(he){if(Ae=t.get("EXT_texture_norm16"),!Ae)Ee("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension")}let K=_;if(_===e.RED){if(H===e.FLOAT)K=e.R32F;if(H===e.HALF_FLOAT)K=e.R16F;if(H===e.UNSIGNED_BYTE)K=e.R8;if(H===e.UNSIGNED_SHORT&&Ae)K=Ae.R16_EXT;if(H===e.SHORT&&Ae)K=Ae.R16_SNORM_EXT}if(_===e.RED_INTEGER){if(H===e.UNSIGNED_BYTE)K=e.R8UI;if(H===e.UNSIGNED_SHORT)K=e.R16UI;if(H===e.UNSIGNED_INT)K=e.R32UI;if(H===e.BYTE)K=e.R8I;if(H===e.SHORT)K=e.R16I;if(H===e.INT)K=e.R32I}if(_===e.RG){if(H===e.FLOAT)K=e.RG32F;if(H===e.HALF_FLOAT)K=e.RG16F;if(H===e.UNSIGNED_BYTE)K=e.RG8;if(H===e.UNSIGNED_SHORT&&Ae)K=Ae.RG16_EXT;if(H===e.SHORT&&Ae)K=Ae.RG16_SNORM_EXT}if(_===e.RG_INTEGER){if(H===e.UNSIGNED_BYTE)K=e.RG8UI;if(H===e.UNSIGNED_SHORT)K=e.RG16UI;if(H===e.UNSIGNED_INT)K=e.RG32UI;if(H===e.BYTE)K=e.RG8I;if(H===e.SHORT)K=e.RG16I;if(H===e.INT)K=e.RG32I}if(_===e.RGB_INTEGER){if(H===e.UNSIGNED_BYTE)K=e.RGB8UI;if(H===e.UNSIGNED_SHORT)K=e.RGB16UI;if(H===e.UNSIGNED_INT)K=e.RGB32UI;if(H===e.BYTE)K=e.RGB8I;if(H===e.SHORT)K=e.RGB16I;if(H===e.INT)K=e.RGB32I}if(_===e.RGBA_INTEGER){if(H===e.UNSIGNED_BYTE)K=e.RGBA8UI;if(H===e.UNSIGNED_SHORT)K=e.RGBA16UI;if(H===e.UNSIGNED_INT)K=e.RGBA32UI;if(H===e.BYTE)K=e.RGBA8I;if(H===e.SHORT)K=e.RGBA16I;if(H===e.INT)K=e.RGBA32I}if(_===e.RGB){if(H===e.UNSIGNED_SHORT&&Ae)K=Ae.RGB16_EXT;if(H===e.SHORT&&Ae)K=Ae.RGB16_SNORM_EXT;if(H===e.UNSIGNED_INT_5_9_9_9_REV)K=e.RGB9_E5;if(H===e.UNSIGNED_INT_10F_11F_11F_REV)K=e.R11F_G11F_B10F}if(_===e.RGBA){let se=ye?sn:at.getTransfer(ce);if(H===e.FLOAT)K=e.RGBA32F;if(H===e.HALF_FLOAT)K=e.RGBA16F;if(H===e.UNSIGNED_BYTE)K=se===xt?e.SRGB8_ALPHA8:e.RGBA8;if(H===e.UNSIGNED_SHORT&&Ae)K=Ae.RGBA16_EXT;if(H===e.SHORT&&Ae)K=Ae.RGBA16_SNORM_EXT;if(H===e.UNSIGNED_SHORT_4_4_4_4)K=e.RGBA4;if(H===e.UNSIGNED_SHORT_5_5_5_1)K=e.RGB5_A1}if(K===e.R16F||K===e.R32F||K===e.RG16F||K===e.RG32F||K===e.RGBA16F||K===e.RGBA32F)t.get("EXT_color_buffer_float");return K}function g(A,_){let H;if(A){if(_===null||_===Qt||_===ir)H=e.DEPTH24_STENCIL8;else if(_===qt)H=e.DEPTH32F_STENCIL8;else if(_===vr)H=e.DEPTH24_STENCIL8,Ee("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")}else if(_===null||_===Qt||_===ir)H=e.DEPTH_COMPONENT24;else if(_===qt)H=e.DEPTH_COMPONENT32F;else if(_===vr)H=e.DEPTH_COMPONENT16;return H}function b(A,_){if(E(A)===!0||A.isFramebufferTexture&&A.minFilter!==Nt&&A.minFilter!==Ot)return Math.log2(Math.max(_.width,_.height))+1;else if(A.mipmaps.length>0)return A.mipmaps.length;else if(A.isCompressedTexture&&Array.isArray(A.image))return _.mipmaps.length;else return 1}function N(A){let _=new WeakRef(A);r.get(A).__ref=_,x.add(_),y.register(A,_,_)}function q(A){let _=r.get(A).__ref;if(_===void 0)return;x.delete(_),y.unregister(_)}function U(A){ne(A.target)}function z(A){D(A.target)}function ne(A){if(A.removeEventListener("dispose",U),q(A),re(A),A.isVideoTexture)u.delete(A);if(A.isHTMLTexture)f.delete(A)}function D(A){A.removeEventListener("dispose",z),q(A),pe(A)}function ee(){for(let A of x){let _=A.deref();if(_===void 0)continue;if(_.isRenderTarget===!0)D(_);else ne(_)}x.clear(),f.clear()}function re(A){let _=r.get(A);if(_.__webglInit===void 0)return;let H=A.source,he=d.get(H);if(he){let ce=he[_.__cacheKey];if(ce.usedTimes--,ce.usedTimes===0)W(A);if(Object.keys(he).length===0)d.delete(H)}r.remove(A)}function W(A){let _=r.get(A);e.deleteTexture(_.__webglTexture);let H=A.source,he=d.get(H);delete he[_.__cacheKey],o.memory.textures--}function pe(A){let _=r.get(A);if(_.__depthDisposeCallback)_.__depthDisposeCallback();let H=A.depthTexture;if(H&&H.renderTarget===A)ne(H);if(A.isWebGLCubeRenderTarget)for(let ce=0;ce<6;ce++){if(Array.isArray(_.__webglFramebuffer[ce]))for(let ye=0;ye<_.__webglFramebuffer[ce].length;ye++)e.deleteFramebuffer(_.__webglFramebuffer[ce][ye]);else e.deleteFramebuffer(_.__webglFramebuffer[ce]);if(_.__webglDepthbuffer)e.deleteRenderbuffer(_.__webglDepthbuffer[ce])}else{if(Array.isArray(_.__webglFramebuffer))for(let ce=0;ce<_.__webglFramebuffer.length;ce++)e.deleteFramebuffer(_.__webglFramebuffer[ce]);else e.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer)e.deleteRenderbuffer(_.__webglDepthbuffer);if(_.__webglMultisampledFramebuffer)e.deleteFramebuffer(_.__webglMultisampledFramebuffer);if(_.__webglColorRenderbuffer){for(let ce=0;ce<_.__webglColorRenderbuffer.length;ce++)if(_.__webglColorRenderbuffer[ce])e.deleteRenderbuffer(_.__webglColorRenderbuffer[ce])}if(_.__webglDepthRenderbuffer)e.deleteRenderbuffer(_.__webglDepthRenderbuffer)}let he=A.textures;for(let ce=0,ye=he.length;ce<ye;ce++){let Ae=r.get(he[ce]);if(Ae.__webglTexture)e.deleteTexture(Ae.__webglTexture),o.memory.textures--;r.remove(he[ce])}r.remove(A)}let Q=0;function oe(){Q=0}function ue(){return Q}function Se(A){Q=A}function ae(){let A=Q;if(A>=n.maxTextures)Ee("WebGLTextures: Trying to use "+(A+1)+" texture units while this GPU supports only "+n.maxTextures);return Q+=1,A}function fe(A){let _=[];return _.push(A.wrapS),_.push(A.wrapT),_.push(A.wrapR||0),_.push(A.magFilter),_.push(A.minFilter),_.push(A.anisotropy),_.push(A.internalFormat),_.push(A.format),_.push(A.type),_.push(A.generateMipmaps),_.push(A.mipmapsAutoUpdate),_.push(A.premultiplyAlpha),_.push(A.flipY),_.push(A.unpackAlignment),_.push(A.colorSpace),_.join()}function ze(A,_){let H=r.get(A);if(A.isVideoTexture)je(A);if(A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&H.__version!==A.version){let he=A.image;if(he===null)Ee("WebGLRenderer: Texture marked for update but no image data found.");else if(he.complete===!1)Ee("WebGLRenderer: Texture marked for update but image is incomplete");else{Ue(H,A,_);return}}else if(A.isExternalTexture)H.__webglTexture=A.sourceTexture?A.sourceTexture:null;i.bindTexture(e.TEXTURE_2D,H.__webglTexture,e.TEXTURE0+_)}function Ke(A,_){let H=r.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&H.__version!==A.version){Ue(H,A,_);return}else if(A.isExternalTexture)H.__webglTexture=A.sourceTexture?A.sourceTexture:null;i.bindTexture(e.TEXTURE_2D_ARRAY,H.__webglTexture,e.TEXTURE0+_)}function $e(A,_){let H=r.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&H.__version!==A.version){Ue(H,A,_);return}i.bindTexture(e.TEXTURE_3D,H.__webglTexture,e.TEXTURE0+_)}function Ne(A,_){let H=r.get(A);if(A.version>0&&H.__version!==A.version){ve(H,A,_);return}i.bindTexture(e.TEXTURE_CUBE_MAP,H.__webglTexture,e.TEXTURE0+_)}let _t={[Hn]:e.REPEAT,[di]:e.CLAMP_TO_EDGE,[kn]:e.MIRRORED_REPEAT},tt={[Nt]:e.NEAREST,[Kl]:e.NEAREST_MIPMAP_NEAREST,[Wn]:e.NEAREST_MIPMAP_LINEAR,[Ot]:e.LINEAR,[eo]:e.LINEAR_MIPMAP_NEAREST,[Ei]:e.LINEAR_MIPMAP_LINEAR},it={[Nh]:e.NEVER,[Ha]:e.ALWAYS,[Uh]:e.LESS,[Ga]:e.LEQUAL,[Fh]:e.EQUAL,[Va]:e.GEQUAL,[Bh]:e.GREATER,[Oh]:e.NOTEQUAL};function gt(A,_){if(_.type===qt&&t.has("OES_texture_float_linear")===!1&&(_.magFilter===Ot||_.magFilter===eo||_.magFilter===Wn||_.magFilter===Ei||_.minFilter===Ot||_.minFilter===eo||_.minFilter===Wn||_.minFilter===Ei))Ee("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.");if(e.texParameteri(A,e.TEXTURE_WRAP_S,_t[_.wrapS]),e.texParameteri(A,e.TEXTURE_WRAP_T,_t[_.wrapT]),A===e.TEXTURE_3D||A===e.TEXTURE_2D_ARRAY)e.texParameteri(A,e.TEXTURE_WRAP_R,_t[_.wrapR]);if(e.texParameteri(A,e.TEXTURE_MAG_FILTER,tt[_.magFilter]),e.texParameteri(A,e.TEXTURE_MIN_FILTER,tt[_.minFilter]),_.compareFunction)e.texParameteri(A,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(A,e.TEXTURE_COMPARE_FUNC,it[_.compareFunction]);if(t.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Nt)return;if(_.minFilter!==Wn&&_.minFilter!==Ei)return;if(_.type===qt&&t.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||r.get(_).__currentAnisotropy){let H=t.get("EXT_texture_filter_anisotropic");e.texParameterf(A,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,n.getMaxAnisotropy())),r.get(_).__currentAnisotropy=_.anisotropy}}}function le(A,_){let H=!1;if(A.__webglInit===void 0)A.__webglInit=!0,_.addEventListener("dispose",U),N(_);let he=_.source,ce=d.get(he);if(ce===void 0)ce={},d.set(he,ce);let ye=fe(_);if(ye!==A.__cacheKey){if(ce[ye]===void 0)ce[ye]={texture:e.createTexture(),usedTimes:0},o.memory.textures++,H=!0;ce[ye].usedTimes++;let Ae=ce[A.__cacheKey];if(Ae!==void 0){if(ce[A.__cacheKey].usedTimes--,Ae.usedTimes===0)W(_)}A.__cacheKey=ye,A.__webglTexture=ce[ye].texture}return H}function xe(A,_,H){return Math.floor(Math.floor(A/H)/_)}function _e(A,_,H,he){let ye=A.updateRanges;if(ye.length===0)i.texSubImage2D(e.TEXTURE_2D,0,0,0,_.width,_.height,H,he,_.data);else{ye.sort((F,ie)=>F.start-ie.start);let Ae=0;for(let F=1;F<ye.length;F++){let ie=ye[Ae],j=ye[F],ge=ie.start+ie.count,be=xe(j.start,_.width,4),Ce=xe(ie.start,_.width,4);if(j.start<=ge+1&&be===Ce&&xe(j.start+j.count-1,_.width,4)===be)ie.count=Math.max(ie.count,j.start+j.count-ie.start);else++Ae,ye[Ae]=j}ye.length=Ae+1;let K=i.getParameter(e.UNPACK_ROW_LENGTH),se=i.getParameter(e.UNPACK_SKIP_PIXELS),Te=i.getParameter(e.UNPACK_SKIP_ROWS);i.pixelStorei(e.UNPACK_ROW_LENGTH,_.width);for(let F=0,ie=ye.length;F<ie;F++){let j=ye[F],ge=Math.floor(j.start/4),be=Math.ceil(j.count/4),Ce=ge%_.width,He=Math.floor(ge/_.width),qe=be,Pe=1;i.pixelStorei(e.UNPACK_SKIP_PIXELS,Ce),i.pixelStorei(e.UNPACK_SKIP_ROWS,He),i.texSubImage2D(e.TEXTURE_2D,0,Ce,He,qe,1,H,he,_.data)}A.clearUpdateRanges(),i.pixelStorei(e.UNPACK_ROW_LENGTH,K),i.pixelStorei(e.UNPACK_SKIP_PIXELS,se),i.pixelStorei(e.UNPACK_SKIP_ROWS,Te)}}function Ue(A,_,H){let he=e.TEXTURE_2D;if(_.isDataArrayTexture||_.isCompressedArrayTexture)he=e.TEXTURE_2D_ARRAY;if(_.isData3DTexture)he=e.TEXTURE_3D;let ce=le(A,_),ye=_.source;i.bindTexture(he,A.__webglTexture,e.TEXTURE0+H);let Ae=r.get(ye);if(ye.version!==Ae.__version||ce===!0){if(i.activeTexture(e.TEXTURE0+H),(typeof ImageBitmap<"u"&&_.image instanceof ImageBitmap)===!1){let Pe=at.getPrimaries(at.workingColorSpace),ke=_.colorSpace===qi?null:at.getPrimaries(_.colorSpace),ft=_.colorSpace===qi||Pe===ke?e.NONE:e.BROWSER_DEFAULT_WEBGL;i.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,ft)}i.pixelStorei(e.UNPACK_ALIGNMENT,_.unpackAlignment);let se=T(_.image,!1,n.maxTextureSize);se=st(_,se);let Te=s.convert(_.format,_.colorSpace),F=s.convert(_.type),ie=L(_.internalFormat,Te,F,_.normalized,_.colorSpace,_.isVideoTexture);gt(he,_);let j,ge=_.mipmaps,be=_.isVideoTexture!==!0,Ce=Ae.__version===void 0||ce===!0,He=ye.dataReady,qe=b(_,se);if(_.isDepthTexture){if(ie=g(_.format===Ni,_.type),Ce)if(be)i.texStorage2D(e.TEXTURE_2D,1,ie,se.width,se.height);else i.texImage2D(e.TEXTURE_2D,0,ie,se.width,se.height,0,Te,F,null)}else if(_.isDataTexture)if(ge.length>0){if(be&&Ce)i.texStorage2D(e.TEXTURE_2D,qe,ie,ge[0].width,ge[0].height);for(let Pe=0,ke=ge.length;Pe<ke;Pe++)if(j=ge[Pe],be){if(He)i.texSubImage2D(e.TEXTURE_2D,Pe,0,0,j.width,j.height,Te,F,j.data)}else i.texImage2D(e.TEXTURE_2D,Pe,ie,j.width,j.height,0,Te,F,j.data);_.generateMipmaps=!1}else if(be){if(Ce)i.texStorage2D(e.TEXTURE_2D,qe,ie,se.width,se.height);if(He)_e(_,se,Te,F)}else i.texImage2D(e.TEXTURE_2D,0,ie,se.width,se.height,0,Te,F,se.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){if(be&&Ce)i.texStorage3D(e.TEXTURE_2D_ARRAY,qe,ie,ge[0].width,ge[0].height,se.depth);for(let Pe=0,ke=ge.length;Pe<ke;Pe++)if(j=ge[Pe],_.format!==ni)if(Te!==null)if(be){if(He)if(_.layerUpdates.size>0){let ft=Yc(j.width,j.height,_.format,_.type);for(let Le of _.layerUpdates){let wt=j.data.subarray(Le*ft/j.data.BYTES_PER_ELEMENT,(Le+1)*ft/j.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,Pe,0,0,Le,j.width,j.height,1,Te,wt)}}else i.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,Pe,0,0,0,j.width,j.height,se.depth,Te,j.data)}else i.compressedTexImage3D(e.TEXTURE_2D_ARRAY,Pe,ie,j.width,j.height,se.depth,0,j.data,0,0);else Ee("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(be){if(He)i.texSubImage3D(e.TEXTURE_2D_ARRAY,Pe,0,0,0,j.width,j.height,se.depth,Te,F,j.data)}else i.texImage3D(e.TEXTURE_2D_ARRAY,Pe,ie,j.width,j.height,se.depth,0,Te,F,j.data);if(_.layerUpdates.size>0)_.clearLayerUpdates()}else{if(be&&Ce)i.texStorage2D(e.TEXTURE_2D,qe,ie,ge[0].width,ge[0].height);for(let Pe=0,ke=ge.length;Pe<ke;Pe++)if(j=ge[Pe],_.format!==ni)if(Te!==null)if(be){if(He)i.compressedTexSubImage2D(e.TEXTURE_2D,Pe,0,0,j.width,j.height,Te,j.data)}else i.compressedTexImage2D(e.TEXTURE_2D,Pe,ie,j.width,j.height,0,j.data);else Ee("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(be){if(He)i.texSubImage2D(e.TEXTURE_2D,Pe,0,0,j.width,j.height,Te,F,j.data)}else i.texImage2D(e.TEXTURE_2D,Pe,ie,j.width,j.height,0,Te,F,j.data)}else if(_.isDataArrayTexture)if(be){if(Ce)i.texStorage3D(e.TEXTURE_2D_ARRAY,qe,ie,se.width,se.height,se.depth);if(He)if(_.layerUpdates.size>0){let Pe=Yc(se.width,se.height,_.format,_.type);for(let ke of _.layerUpdates){let ft=se.data.subarray(ke*Pe/se.data.BYTES_PER_ELEMENT,(ke+1)*Pe/se.data.BYTES_PER_ELEMENT);i.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,ke,se.width,se.height,1,Te,F,ft)}_.clearLayerUpdates()}else i.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,Te,F,se.data)}else i.texImage3D(e.TEXTURE_2D_ARRAY,0,ie,se.width,se.height,se.depth,0,Te,F,se.data);else if(_.isData3DTexture)if(be){if(Ce)i.texStorage3D(e.TEXTURE_3D,qe,ie,se.width,se.height,se.depth);if(He)i.texSubImage3D(e.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,Te,F,se.data)}else i.texImage3D(e.TEXTURE_3D,0,ie,se.width,se.height,se.depth,0,Te,F,se.data);else if(_.isFramebufferTexture){if(Ce)if(be)i.texStorage2D(e.TEXTURE_2D,qe,ie,se.width,se.height);else{let Pe=se.width,ke=se.height;for(let ft=0;ft<qe;ft++)i.texImage2D(e.TEXTURE_2D,ft,ie,Pe,ke,0,Te,F,null),Pe>>=1,ke>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in e){let Pe=e.canvas;if(!Pe.hasAttribute("layoutsubtree"))Pe.setAttribute("layoutsubtree","true");if(se.parentNode!==Pe){Pe.appendChild(se),f.add(_),Pe.onpaint=(ke)=>{let ft=ke.changedElements;for(let Le of f)if(ft.includes(Le.image))Le.needsUpdate=!0},Pe.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,se);else{let{RGBA:ft,RGBA:Le,UNSIGNED_BYTE:wt}=e;e.texElementImage2D(e.TEXTURE_2D,0,ft,Le,wt,se)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(ge.length>0){if(be&&Ce){let Pe=pt(ge[0]);i.texStorage2D(e.TEXTURE_2D,qe,ie,Pe.width,Pe.height)}for(let Pe=0,ke=ge.length;Pe<ke;Pe++)if(j=ge[Pe],be){if(He)i.texSubImage2D(e.TEXTURE_2D,Pe,0,0,Te,F,j)}else i.texImage2D(e.TEXTURE_2D,Pe,ie,Te,F,j);_.generateMipmaps=!1}else if(be){if(Ce){let Pe=pt(se);i.texStorage2D(e.TEXTURE_2D,qe,ie,Pe.width,Pe.height)}if(He)i.texSubImage2D(e.TEXTURE_2D,0,0,0,Te,F,se)}else i.texImage2D(e.TEXTURE_2D,0,ie,Te,F,se);if(E(_)&&_.mipmapsAutoUpdate===!0)S(he);if(Ae.__version=ye.version,_.onUpdate)_.onUpdate(_)}A.__version=_.version}function ve(A,_,H){if(_.image.length!==6)return;let he=le(A,_),ce=_.source;i.bindTexture(e.TEXTURE_CUBE_MAP,A.__webglTexture,e.TEXTURE0+H);let ye=r.get(ce);if(ce.version!==ye.__version||he===!0){i.activeTexture(e.TEXTURE0+H);let Ae=at.getPrimaries(at.workingColorSpace),K=_.colorSpace===qi?null:at.getPrimaries(_.colorSpace),se=_.colorSpace===qi||Ae===K?e.NONE:e.BROWSER_DEFAULT_WEBGL;i.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(e.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,se);let Te=_.isCompressedTexture||_.image[0].isCompressedTexture,F=_.image[0]&&_.image[0].isDataTexture,ie=[];for(let Le=0;Le<6;Le++){if(!Te&&!F)ie[Le]=T(_.image[Le],!0,n.maxCubemapSize);else ie[Le]=F?_.image[Le].image:_.image[Le];ie[Le]=st(_,ie[Le])}let j=ie[0],ge=s.convert(_.format,_.colorSpace),be=s.convert(_.type),Ce=L(_.internalFormat,ge,be,_.normalized,_.colorSpace),He=_.isVideoTexture!==!0,qe=ye.__version===void 0||he===!0,Pe=ce.dataReady,ke=b(_,j);gt(e.TEXTURE_CUBE_MAP,_);let ft;if(_.isDepthTexture){if(Ce=g(_.format===Ni,_.type),qe)if(He)i.texStorage2D(e.TEXTURE_CUBE_MAP,1,Ce,j.width,j.height);else for(let Le=0;Le<6;Le++)i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Le,0,Ce,j.width,j.height,0,ge,be,null)}else if(Te){if(He&&qe)i.texStorage2D(e.TEXTURE_CUBE_MAP,ke,Ce,j.width,j.height);for(let Le=0;Le<6;Le++){ft=ie[Le].mipmaps;for(let wt=0;wt<ft.length;wt++){let Jt=ft[wt];if(_.format!==ni)if(ge!==null)if(He){if(Pe)i.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Le,wt,0,0,Jt.width,Jt.height,ge,Jt.data)}else i.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Le,wt,Ce,Jt.width,Jt.height,0,Jt.data);else Ee("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()");else if(He){if(Pe)i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Le,wt,0,0,Jt.width,Jt.height,ge,be,Jt.data)}else i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Le,wt,Ce,Jt.width,Jt.height,0,ge,be,Jt.data)}}}else{if(ft=_.mipmaps,He&&qe){if(ft.length>0)ke++;let Le=pt(ie[0]);i.texStorage2D(e.TEXTURE_CUBE_MAP,ke,Ce,Le.width,Le.height)}for(let Le=0;Le<6;Le++)if(F){if(He){if(Pe)i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Le,0,0,0,ie[Le].width,ie[Le].height,ge,be,ie[Le].data)}else i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Le,0,Ce,ie[Le].width,ie[Le].height,0,ge,be,ie[Le].data);for(let wt=0;wt<ft.length;wt++){let bi=ft[wt].image[Le].image;if(He){if(Pe)i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Le,wt+1,0,0,bi.width,bi.height,ge,be,bi.data)}else i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Le,wt+1,Ce,bi.width,bi.height,0,ge,be,bi.data)}}else{if(He){if(Pe)i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Le,0,0,0,ge,be,ie[Le])}else i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Le,0,Ce,ge,be,ie[Le]);for(let wt=0;wt<ft.length;wt++){let Jt=ft[wt];if(He){if(Pe)i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Le,wt+1,0,0,ge,be,Jt.image[Le])}else i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Le,wt+1,Ce,ge,be,Jt.image[Le])}}}if(E(_)&&_.mipmapsAutoUpdate===!0)S(e.TEXTURE_CUBE_MAP);if(ye.__version=ce.version,_.onUpdate)_.onUpdate(_)}A.__version=_.version}function Ye(A,_,H,he,ce,ye){let Ae=s.convert(H.format,H.colorSpace),K=s.convert(H.type),se=L(H.internalFormat,Ae,K,H.normalized,H.colorSpace),Te=r.get(_),F=r.get(H);if(F.__renderTarget=_,!Te.__hasExternalTextures){let ie=Math.max(1,_.width>>ye),j=Math.max(1,_.height>>ye);if(ce===e.TEXTURE_3D||ce===e.TEXTURE_2D_ARRAY)i.texImage3D(ce,ye,se,ie,j,_.depth,0,Ae,K,null);else i.texImage2D(ce,ye,se,ie,j,0,Ae,K,null)}if(i.bindFramebuffer(e.FRAMEBUFFER,A),bt(_))a.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,he,ce,F.__webglTexture,0,Re(_));else if(ce===e.TEXTURE_2D||ce>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&ce<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)e.framebufferTexture2D(e.FRAMEBUFFER,he,ce,F.__webglTexture,ye);i.bindFramebuffer(e.FRAMEBUFFER,null)}function Xe(A,_,H){if(e.bindRenderbuffer(e.RENDERBUFFER,A),_.depthBuffer){let he=_.depthTexture,ce=he&&he.isDepthTexture?he.type:null,ye=g(_.stencilBuffer,ce),Ae=_.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(bt(_))a.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Re(_),ye,_.width,_.height);else if(H)e.renderbufferStorageMultisample(e.RENDERBUFFER,Re(_),ye,_.width,_.height);else e.renderbufferStorage(e.RENDERBUFFER,ye,_.width,_.height);e.framebufferRenderbuffer(e.FRAMEBUFFER,Ae,e.RENDERBUFFER,A)}else{let he=_.textures;for(let ce=0;ce<he.length;ce++){let ye=he[ce],Ae=s.convert(ye.format,ye.colorSpace),K=s.convert(ye.type),se=L(ye.internalFormat,Ae,K,ye.normalized,ye.colorSpace);if(bt(_))a.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Re(_),se,_.width,_.height);else if(H)e.renderbufferStorageMultisample(e.RENDERBUFFER,Re(_),se,_.width,_.height);else e.renderbufferStorage(e.RENDERBUFFER,se,_.width,_.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function Ve(A,_,H){let he=_.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(e.FRAMEBUFFER,A),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let ce=r.get(_.depthTexture);ce.__renderTarget=_;let ye=he?_.depthTexture.image[0]:_.depthTexture.image;if(!ce.__webglTexture||ye.width!==_.width||ye.height!==_.height)ye.width=_.width,ye.height=_.height,_.depthTexture.needsUpdate=!0;if(he)Ne(_.depthTexture,0);else ze(_.depthTexture,0);let Ae=ce.__webglTexture,K=Re(_),se=he?e.TEXTURE_CUBE_MAP_POSITIVE_X+H:e.TEXTURE_2D,Te=_.depthTexture.format===Ni?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(_.depthTexture.format===Pi)if(bt(_))a.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,Te,se,Ae,0,K);else e.framebufferTexture2D(e.FRAMEBUFFER,Te,se,Ae,0);else if(_.depthTexture.format===Ni)if(bt(_))a.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,Te,se,Ae,0,K);else e.framebufferTexture2D(e.FRAMEBUFFER,Te,se,Ae,0);else throw Error("THREE.WebGLTextures: Unknown depthTexture format.")}function nt(A){let _=r.get(A),H=A.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==A.depthTexture){let he=A.depthTexture;if(_.__depthDisposeCallback)_.__depthDisposeCallback();if(he){let ce=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,he.removeEventListener("dispose",ce)};he.addEventListener("dispose",ce),_.__depthDisposeCallback=ce}_.__boundDepthTexture=he}if(A.depthTexture&&!_.__autoAllocateDepthBuffer)if(H)for(let he=0;he<6;he++)Ve(_.__webglFramebuffer[he],A,he);else if(A.texture.mipmaps.length>0)Ve(_.__webglFramebuffer[0],A,0);else Ve(_.__webglFramebuffer,A,0);else if(H){_.__webglDepthbuffer=[];for(let he=0;he<6;he++)if(i.bindFramebuffer(e.FRAMEBUFFER,_.__webglFramebuffer[he]),_.__webglDepthbuffer[he]===void 0)_.__webglDepthbuffer[he]=e.createRenderbuffer(),Xe(_.__webglDepthbuffer[he],A,!1);else{let ce=A.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,ye=_.__webglDepthbuffer[he];e.bindRenderbuffer(e.RENDERBUFFER,ye),e.framebufferRenderbuffer(e.FRAMEBUFFER,ce,e.RENDERBUFFER,ye)}}else{if(A.texture.mipmaps.length>0)i.bindFramebuffer(e.FRAMEBUFFER,_.__webglFramebuffer[0]);else i.bindFramebuffer(e.FRAMEBUFFER,_.__webglFramebuffer);if(_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=e.createRenderbuffer(),Xe(_.__webglDepthbuffer,A,!1);else{let ce=A.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,ye=_.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,ye),e.framebufferRenderbuffer(e.FRAMEBUFFER,ce,e.RENDERBUFFER,ye)}}i.bindFramebuffer(e.FRAMEBUFFER,null)}function vt(A,_,H){let he=r.get(A);if(_!==void 0)Ye(he.__webglFramebuffer,A,A.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0);if(H!==void 0)nt(A)}function O(A){let _=A.texture,H=r.get(A),he=r.get(_);A.addEventListener("dispose",z),N(A);let ce=A.textures,ye=A.isWebGLCubeRenderTarget===!0,Ae=ce.length>1;if(!Ae){if(he.__webglTexture===void 0)he.__webglTexture=e.createTexture();he.__version=_.version,o.memory.textures++}if(ye){H.__webglFramebuffer=[];for(let K=0;K<6;K++)if(_.mipmaps.length>0){H.__webglFramebuffer[K]=[];for(let se=0;se<_.mipmaps.length;se++)H.__webglFramebuffer[K][se]=e.createFramebuffer()}else H.__webglFramebuffer[K]=e.createFramebuffer()}else{if(_.mipmaps.length>0){H.__webglFramebuffer=[];for(let K=0;K<_.mipmaps.length;K++)H.__webglFramebuffer[K]=e.createFramebuffer()}else H.__webglFramebuffer=e.createFramebuffer();if(Ae)for(let K=0,se=ce.length;K<se;K++){let Te=r.get(ce[K]);if(Te.__webglTexture===void 0)Te.__webglTexture=e.createTexture(),o.memory.textures++}if(A.samples>0&&bt(A)===!1){H.__webglMultisampledFramebuffer=e.createFramebuffer(),H.__webglColorRenderbuffer=[],i.bindFramebuffer(e.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let K=0;K<ce.length;K++){let se=ce[K];H.__webglColorRenderbuffer[K]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,H.__webglColorRenderbuffer[K]);let Te=s.convert(se.format,se.colorSpace),F=s.convert(se.type),ie=L(se.internalFormat,Te,F,se.normalized,se.colorSpace,A.isXRRenderTarget===!0),j=Re(A);e.renderbufferStorageMultisample(e.RENDERBUFFER,j,ie,A.width,A.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+K,e.RENDERBUFFER,H.__webglColorRenderbuffer[K])}if(e.bindRenderbuffer(e.RENDERBUFFER,null),A.depthBuffer)H.__webglDepthRenderbuffer=e.createRenderbuffer(),Xe(H.__webglDepthRenderbuffer,A,!0);i.bindFramebuffer(e.FRAMEBUFFER,null)}}if(ye){i.bindTexture(e.TEXTURE_CUBE_MAP,he.__webglTexture),gt(e.TEXTURE_CUBE_MAP,_);for(let K=0;K<6;K++)if(_.mipmaps.length>0)for(let se=0;se<_.mipmaps.length;se++)Ye(H.__webglFramebuffer[K][se],A,_,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+K,se);else Ye(H.__webglFramebuffer[K],A,_,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+K,0);if(E(_))S(e.TEXTURE_CUBE_MAP);else if(_.mipmaps.length>0)e.texParameteri(e.TEXTURE_CUBE_MAP,e.TEXTURE_MAX_LEVEL,_.mipmaps.length-1);i.unbindTexture()}else if(Ae){for(let K=0,se=ce.length;K<se;K++){let Te=ce[K],F=r.get(Te),ie=e.TEXTURE_2D;if(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)ie=A.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY;if(i.bindTexture(ie,F.__webglTexture),gt(ie,Te),Ye(H.__webglFramebuffer,A,Te,e.COLOR_ATTACHMENT0+K,ie,0),E(Te))S(ie)}i.unbindTexture()}else{let K=e.TEXTURE_2D;if(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)K=A.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY;if(i.bindTexture(K,he.__webglTexture),gt(K,_),_.mipmaps.length>0)for(let se=0;se<_.mipmaps.length;se++)Ye(H.__webglFramebuffer[se],A,_,e.COLOR_ATTACHMENT0,K,se);else Ye(H.__webglFramebuffer,A,_,e.COLOR_ATTACHMENT0,K,0);if(E(_))S(K);else if(_.mipmaps.length>0)e.texParameteri(K,e.TEXTURE_MAX_LEVEL,_.mipmaps.length-1);i.unbindTexture()}if(A.depthBuffer)nt(A)}function Gt(A){let _=A.textures;for(let H=0,he=_.length;H<he;H++){let ce=_[H];if(E(ce)&&ce.mipmapsAutoUpdate===!0){let ye=C(A),Ae=r.get(ce).__webglTexture;i.bindTexture(ye,Ae),S(ye),i.unbindTexture()}}}let lt=[];function Ft(A){if(A.samples>0){if(bt(A)===!1){let{textures:_,width:H,height:he}=A,ce=e.COLOR_BUFFER_BIT,ye=A.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,Ae=r.get(A),K=_.length>1;if(K)for(let Te=0;Te<_.length;Te++)i.bindFramebuffer(e.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+Te,e.RENDERBUFFER,null),i.bindFramebuffer(e.FRAMEBUFFER,Ae.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+Te,e.TEXTURE_2D,null,0);if(i.bindFramebuffer(e.READ_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),A.texture.mipmaps.length>0)i.bindFramebuffer(e.DRAW_FRAMEBUFFER,Ae.__webglFramebuffer[0]);else i.bindFramebuffer(e.DRAW_FRAMEBUFFER,Ae.__webglFramebuffer);for(let Te=0;Te<_.length;Te++){if(A.resolveDepthBuffer){if(A.depthBuffer)ce|=e.DEPTH_BUFFER_BIT;if(A.stencilBuffer&&A.resolveStencilBuffer)ce|=e.STENCIL_BUFFER_BIT}if(K){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,Ae.__webglColorRenderbuffer[Te]);let F=r.get(_[Te]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,F,0)}if(e.blitFramebuffer(0,0,H,he,0,0,H,he,ce,e.NEAREST),l===!0){if(lt.length=0,lt.push(e.COLOR_ATTACHMENT0+Te),A.depthBuffer&&A.storeMultisampledDepthBuffer===!1)lt.push(ye);e.invalidateFramebuffer(e.READ_FRAMEBUFFER,lt)}}if(i.bindFramebuffer(e.READ_FRAMEBUFFER,null),i.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),K)for(let Te=0;Te<_.length;Te++){i.bindFramebuffer(e.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+Te,e.RENDERBUFFER,Ae.__webglColorRenderbuffer[Te]);let F=r.get(_[Te]).__webglTexture;i.bindFramebuffer(e.FRAMEBUFFER,Ae.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+Te,e.TEXTURE_2D,F,0)}i.bindFramebuffer(e.DRAW_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&l){let _=A.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[_])}}}function Re(A){return Math.min(n.maxSamples,A.samples)}function bt(A){let _=r.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function je(A){let _=o.render.frame;if(u.get(A)!==_)u.set(A,_),A.update()}function st(A,_){let{colorSpace:H,format:he,type:ce}=A;if(A.isCompressedTexture===!0||A.isVideoTexture===!0)return _;if(H!==nn&&H!==qi)if(at.getTransfer(H)===xt){if(he!==ni||ce!==Xt)Ee("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.")}else Oe("WebGLTextures: Unsupported texture color space:",H);return _}function pt(A){if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement)c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height;else if(typeof VideoFrame<"u"&&A instanceof VideoFrame)c.width=A.displayWidth,c.height=A.displayHeight;else c.width=A.width,c.height=A.height;return c}this.allocateTextureUnit=ae,this.resetTextureUnits=oe,this.getTextureUnits=ue,this.setTextureUnits=Se,this.setTexture2D=ze,this.setTexture2DArray=Ke,this.setTexture3D=$e,this.setTextureCube=Ne,this.rebindTextures=vt,this.setupRenderTarget=O,this.updateRenderTargetMipmap=Gt,this.updateMultisampleRenderTarget=Ft,this.setupDepthRenderbuffer=nt,this.setupFrameBufferTexture=Ye,this.useMultisampledRTT=bt,this.dispose=ee}function jc(e,t){function i(r,n=qi){let s,o=at.getTransfer(n);if(r===Xt)return e.UNSIGNED_BYTE;if(r===qn)return e.UNSIGNED_SHORT_4_4_4_4;if(r===Yn)return e.UNSIGNED_SHORT_5_5_5_1;if(r===Pa)return e.UNSIGNED_INT_5_9_9_9_REV;if(r===Ia)return e.UNSIGNED_INT_10F_11F_11F_REV;if(r===Ra)return e.BYTE;if(r===Ca)return e.SHORT;if(r===vr)return e.UNSIGNED_SHORT;if(r===Xn)return e.INT;if(r===Qt)return e.UNSIGNED_INT;if(r===qt)return e.FLOAT;if(r===Lt)return e.HALF_FLOAT;if(r===La)return e.ALPHA;if(r===Da)return e.RGB;if(r===ni)return e.RGBA;if(r===Pi)return e.DEPTH_COMPONENT;if(r===Ni)return e.DEPTH_STENCIL;if(r===Zn)return e.RED;if(r===jr)return e.RED_INTEGER;if(r===Ui)return e.RG;if(r===Jn)return e.RG_INTEGER;if(r===Kn)return e.RGBA_INTEGER;if(r===Qn||r===$n||r===jn||r===es)if(o===xt)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(r===Qn)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===$n)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===jn)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===es)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(r===Qn)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===$n)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===jn)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===es)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===to||r===io||r===ro||r===no)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(r===to)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===io)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===ro)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===no)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===so||r===oo||r===ao||r===lo||r===co||r===en||r===ho)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(r===so||r===oo)return o===xt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(r===ao)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(r===lo)return s.COMPRESSED_R11_EAC;if(r===co)return s.COMPRESSED_SIGNED_R11_EAC;if(r===en)return s.COMPRESSED_RG11_EAC;if(r===ho)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===uo||r===fo||r===po||r===mo||r===go||r===xo||r===_o||r===vo||r===yo||r===Mo||r===So||r===bo||r===To||r===Eo)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(r===uo)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===fo)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===po)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===mo)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===go)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===xo)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===_o)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===vo)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===yo)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Mo)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===So)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===bo)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===To)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Eo)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===wo||r===Ao||r===Ro)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(r===wo)return o===xt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Ao)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Ro)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Co||r===Po||r===tn||r===Io)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(r===Co)return s.COMPRESSED_RED_RGTC1_EXT;if(r===Po)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===tn)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Io)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;if(r===ir)return e.UNSIGNED_INT_24_8;return e[r]!==void 0?e[r]:null}return{convert:i}}var l_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,c_=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class eh{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new ws(e.texture);if(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)this.depthNear=e.depthNear,this.depthFar=e.depthFar;this.texture=i}}getMesh(e){if(this.texture!==null){if(this.mesh===null){let t=e.cameras[0].viewport,i=new It({vertexShader:l_,fragmentShader:c_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new et(new Ri(20,20),i)}}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class th extends $t{constructor(e,t){super();let i=this,r=null,n=1,s=null,o="local-floor",a=1,l=null,c=null,u=null,f=null,h=null,d=null,x=typeof XRWebGLBinding<"u",y=new eh,p={},m=t.getContextAttributes(),T=null,E=null,S=[],C=[],L=new J,g=null,b=null,N=new kt;N.viewport=new yt;let q=new kt;q.viewport=new yt;let U=[N,q],z=new Bl,ne=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ae){let fe=S[ae];if(fe===void 0)fe=new cs,S[ae]=fe;return fe.getTargetRaySpace()},this.getControllerGrip=function(ae){let fe=S[ae];if(fe===void 0)fe=new cs,S[ae]=fe;return fe.getGripSpace()},this.getHand=function(ae){let fe=S[ae];if(fe===void 0)fe=new cs,S[ae]=fe;return fe.getHandSpace()};function ee(ae){let fe=C.indexOf(ae.inputSource);if(fe===-1)return;let ze=S[fe];if(ze!==void 0)ze.update(ae.inputSource,ae.frame,l||s),ze.dispatchEvent({type:ae.type,data:ae.inputSource})}function re(){r.removeEventListener("select",ee),r.removeEventListener("selectstart",ee),r.removeEventListener("selectend",ee),r.removeEventListener("squeeze",ee),r.removeEventListener("squeezestart",ee),r.removeEventListener("squeezeend",ee),r.removeEventListener("end",re),r.removeEventListener("inputsourceschange",W);for(let ae=0;ae<S.length;ae++){let fe=C[ae];if(fe===null)continue;C[ae]=null,S[ae].disconnect(fe)}ne=null,D=null,y.reset();for(let ae in p)delete p[ae];if(e.setRenderTarget(T),h=null,f=null,u=null,r=null,E=null,Se.stop(),i.isPresenting=!1,e.setPixelRatio(g),e.setSize(L.width,L.height,!1),b!==null){let ae=b.camera;ae.fov=b.fov,ae.zoom=b.zoom,ae.updateProjectionMatrix(),b=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ae){if(n=ae,i.isPresenting===!0)Ee("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ae){if(o=ae,i.isPresenting===!0)Ee("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||s},this.setReferenceSpace=function(ae){l=ae},this.getBaseLayer=function(){return f!==null?f:h},this.getBinding=function(){if(u===null&&x)u=new XRWebGLBinding(r,t);return u},this.getFrame=function(){return d},this.getSession=function(){return r},this.setSession=async function(ae){if(r=ae,r!==null){if(T=e.getRenderTarget(),r.addEventListener("select",ee),r.addEventListener("selectstart",ee),r.addEventListener("selectend",ee),r.addEventListener("squeeze",ee),r.addEventListener("squeezestart",ee),r.addEventListener("squeezeend",ee),r.addEventListener("end",re),r.addEventListener("inputsourceschange",W),m.xrCompatible!==!0)await t.makeXRCompatible();if(g=e.getPixelRatio(),e.getSize(L),!(x&&("createProjectionLayer"in XRWebGLBinding.prototype))){let ze={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:n};h=new XRWebGLLayer(r,t,ze),r.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),E=new Pt(h.framebufferWidth,h.framebufferHeight,{format:ni,type:Xt,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{let ze=null,Ke=null,$e=null;if(m.depth)$e=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ze=m.stencil?Ni:Pi,Ke=m.stencil?ir:Qt;let Ne={colorFormat:t.RGBA8,depthFormat:$e,scaleFactor:n};u=this.getBinding(),f=u.createProjectionLayer(Ne),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),E=new Pt(f.textureWidth,f.textureHeight,{format:ni,type:Xt,depthTexture:new Oi(f.textureWidth,f.textureHeight,Ke,void 0,void 0,void 0,void 0,void 0,void 0,ze),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(a),l=null,s=await r.requestReferenceSpace(o),Se.setContext(r),Se.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function W(ae){for(let fe=0;fe<ae.removed.length;fe++){let ze=ae.removed[fe],Ke=C.indexOf(ze);if(Ke>=0)C[Ke]=null,S[Ke].disconnect(ze)}for(let fe=0;fe<ae.added.length;fe++){let ze=ae.added[fe],Ke=C.indexOf(ze);if(Ke===-1){for(let Ne=0;Ne<S.length;Ne++)if(Ne>=C.length){C.push(ze),Ke=Ne;break}else if(C[Ne]===null){C[Ne]=ze,Ke=Ne;break}if(Ke===-1)break}let $e=S[Ke];if($e)$e.connect(ze)}}function pe(ae,fe){if(fe===null)ae.matrixWorld.copy(ae.matrix);else ae.matrixWorld.multiplyMatrices(fe.matrixWorld,ae.matrix);ae.matrixWorldInverse.copy(ae.matrixWorld).invert()}this.updateCamera=function(ae){if(r===null)return;let{near:fe,far:ze}=ae;if(y.texture!==null){if(y.depthNear>0)fe=y.depthNear;if(y.depthFar>0)ze=y.depthFar}if(z.near=q.near=N.near=fe,z.far=q.far=N.far=ze,ne!==z.near||D!==z.far)r.updateRenderState({depthNear:z.near,depthFar:z.far}),ne=z.near,D=z.far;z.layers.mask=ae.layers.mask|6,N.layers.mask=z.layers.mask&-5,q.layers.mask=z.layers.mask&-3;let Ke=ae.parent,$e=z.cameras;pe(z,Ke);for(let Ne=0;Ne<$e.length;Ne++)pe($e[Ne],Ke);if(z.projectionMatrix.copy(N.projectionMatrix),z.projectionMatrixInverse.copy(N.projectionMatrixInverse),b===null&&ae.isPerspectiveCamera)b={camera:ae,fov:ae.fov,zoom:ae.zoom};Q(ae,z,Ke)};function Q(ae,fe,ze){if(ze===null)ae.matrix.copy(fe.matrixWorld);else ae.matrix.copy(ze.matrixWorld),ae.matrix.invert(),ae.matrix.multiply(fe.matrixWorld);if(ae.matrix.decompose(ae.position,ae.quaternion,ae.scale),ae.updateMatrixWorld(!0),ae.projectionMatrix.copy(fe.projectionMatrix),ae.projectionMatrixInverse.copy(fe.projectionMatrixInverse),ae.isPerspectiveCamera)ae.fov=ln*2*Math.atan(1/ae.projectionMatrix.elements[5]),ae.zoom=1}this.getCamera=function(){return z},this.getFoveation=function(){if(f===null&&h===null)return;return a},this.setFoveation=function(ae){if(a=ae,f!==null)f.fixedFoveation=ae;if(h!==null&&h.fixedFoveation!==void 0)h.fixedFoveation=ae},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(z)},this.getCameraTexture=function(ae){return p[ae]};let oe=null;function ue(ae,fe){if(c=fe.getViewerPose(l||s),d=fe,c!==null){let ze=c.views;if(h!==null)e.setRenderTargetFramebuffer(E,h.framebuffer),e.setRenderTarget(E);let Ke=!1;if(ze.length!==z.cameras.length)z.cameras.length=0,Ke=!0;for(let tt=0;tt<ze.length;tt++){let it=ze[tt],gt=null;if(h!==null)gt=h.getViewport(it);else{let xe=u.getViewSubImage(f,it);if(gt=xe.viewport,tt===0)e.setRenderTargetTextures(E,xe.colorTexture,xe.depthStencilTexture),e.setRenderTarget(E)}let le=U[tt];if(le===void 0)le=new kt,le.layers.enable(tt),le.viewport=new yt,U[tt]=le;if(le.matrix.fromArray(it.transform.matrix),le.matrix.decompose(le.position,le.quaternion,le.scale),le.projectionMatrix.fromArray(it.projectionMatrix),le.projectionMatrixInverse.copy(le.projectionMatrix).invert(),le.viewport.set(gt.x,gt.y,gt.width,gt.height),tt===0)z.matrix.copy(le.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale);if(Ke===!0)z.cameras.push(le)}let $e=r.enabledFeatures;if($e&&$e.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&x){u=i.getBinding();let tt=u.getDepthInformation(ze[0]);if(tt&&tt.isValid&&tt.texture)y.init(tt,r.renderState)}if($e&&$e.includes("camera-access")&&x){e.state.unbindTexture(),u=i.getBinding();for(let tt=0;tt<ze.length;tt++){let it=ze[tt].camera;if(it){let gt=p[it];if(!gt)gt=new ws,p[it]=gt;let le=u.getCameraImage(it);gt.sourceTexture=le}}}}for(let ze=0;ze<S.length;ze++){let Ke=C[ze],$e=S[ze];if(Ke!==null&&$e!==void 0)$e.update(Ke,fe,l||s)}if(oe)oe(ae,fe);if(fe.detectedPlanes)i.dispatchEvent({type:"planesdetected",data:fe});d=null}let Se=new Ol;Se.setAnimationLoop(ue),this.setAnimationLoop=function(ae){oe=ae},this.dispose=function(){}}}var h_=new Je,Im=new Qe;Im.set(-1,0,0,0,1,0,0,0,1);function Lm(e,t){function i(p,m){if(p.matrixAutoUpdate===!0)p.updateMatrix();m.value.copy(p.matrix)}function r(p,m){if(m.color.getRGB(p.fogColor.value,wl(e)),m.isFog)p.fogNear.value=m.near,p.fogFar.value=m.far;else if(m.isFogExp2)p.fogDensity.value=m.density}function n(p,m,T,E,S){if(m.isNodeMaterial)m.uniformsNeedUpdate=!1;else if(m.isMeshBasicMaterial)s(p,m);else if(m.isMeshLambertMaterial){if(s(p,m),m.envMap)p.envMapIntensity.value=m.envMapIntensity}else if(m.isMeshToonMaterial)s(p,m),f(p,m);else if(m.isMeshPhongMaterial){if(s(p,m),u(p,m),m.envMap)p.envMapIntensity.value=m.envMapIntensity}else if(m.isMeshStandardMaterial){if(s(p,m),h(p,m),m.isMeshPhysicalMaterial)d(p,m,S)}else if(m.isMeshMatcapMaterial)s(p,m),x(p,m);else if(m.isMeshDepthMaterial)s(p,m);else if(m.isMeshDistanceMaterial)s(p,m),y(p,m);else if(m.isMeshNormalMaterial)s(p,m);else if(m.isLineBasicMaterial){if(o(p,m),m.isLineDashedMaterial)a(p,m)}else if(m.isPointsMaterial)l(p,m,T,E);else if(m.isSpriteMaterial)c(p,m);else if(m.isShadowMaterial)p.color.value.copy(m.color),p.opacity.value=m.opacity;else if(m.isShaderMaterial)m.uniformsNeedUpdate=!1}function s(p,m){if(p.opacity.value=m.opacity,m.color)p.diffuse.value.copy(m.color);if(m.emissive)p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity);if(m.map)p.map.value=m.map,i(m.map,p.mapTransform);if(m.alphaMap)p.alphaMap.value=m.alphaMap,i(m.alphaMap,p.alphaMapTransform);if(m.bumpMap){if(p.bumpMap.value=m.bumpMap,i(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===Bt)p.bumpScale.value*=-1}if(m.normalMap){if(p.normalMap.value=m.normalMap,i(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===Bt)p.normalScale.value.negate()}if(m.displacementMap)p.displacementMap.value=m.displacementMap,i(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias;if(m.emissiveMap)p.emissiveMap.value=m.emissiveMap,i(m.emissiveMap,p.emissiveMapTransform);if(m.specularMap)p.specularMap.value=m.specularMap,i(m.specularMap,p.specularMapTransform);if(m.alphaTest>0)p.alphaTest.value=m.alphaTest;let T=t.get(m),{envMap:E,envMapRotation:S}=T;if(E){if(p.envMap.value=E,p.envMapRotation.value.setFromMatrix4(h_.makeRotationFromEuler(S)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1)p.envMapRotation.value.premultiply(Im);p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio}if(m.lightMap)p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,i(m.lightMap,p.lightMapTransform);if(m.aoMap)p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,i(m.aoMap,p.aoMapTransform)}function o(p,m){if(p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map)p.map.value=m.map,i(m.map,p.mapTransform)}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,T,E){if(p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*T,p.scale.value=E*0.5,m.map)p.map.value=m.map,i(m.map,p.uvTransform);if(m.alphaMap)p.alphaMap.value=m.alphaMap,i(m.alphaMap,p.alphaMapTransform);if(m.alphaTest>0)p.alphaTest.value=m.alphaTest}function c(p,m){if(p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map)p.map.value=m.map,i(m.map,p.mapTransform);if(m.alphaMap)p.alphaMap.value=m.alphaMap,i(m.alphaMap,p.alphaMapTransform);if(m.alphaTest>0)p.alphaTest.value=m.alphaTest}function u(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,0.0001)}function f(p,m){if(m.gradientMap)p.gradientMap.value=m.gradientMap}function h(p,m){if(p.metalness.value=m.metalness,m.metalnessMap)p.metalnessMap.value=m.metalnessMap,i(m.metalnessMap,p.metalnessMapTransform);if(p.roughness.value=m.roughness,m.roughnessMap)p.roughnessMap.value=m.roughnessMap,i(m.roughnessMap,p.roughnessMapTransform);if(m.envMap)p.envMapIntensity.value=m.envMapIntensity}function d(p,m,T){if(p.ior.value=m.ior,m.diffuseRoughness>0){if(p.diffuseRoughness.value=m.diffuseRoughness,m.diffuseRoughnessMap)p.diffuseRoughnessMap.value=m.diffuseRoughnessMap,i(m.diffuseRoughnessMap,p.diffuseRoughnessMapTransform)}if(m.sheen>0){if(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap)p.sheenColorMap.value=m.sheenColorMap,i(m.sheenColorMap,p.sheenColorMapTransform);if(m.sheenRoughnessMap)p.sheenRoughnessMap.value=m.sheenRoughnessMap,i(m.sheenRoughnessMap,p.sheenRoughnessMapTransform)}if(m.clearcoat>0){if(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap)p.clearcoatMap.value=m.clearcoatMap,i(m.clearcoatMap,p.clearcoatMapTransform);if(m.clearcoatRoughnessMap)p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,i(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform);if(m.clearcoatNormalMap){if(p.clearcoatNormalMap.value=m.clearcoatNormalMap,i(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Bt)p.clearcoatNormalScale.value.negate()}}if(m.dispersion>0)p.dispersion.value=m.dispersion;if(m.retroreflectivity>0)p.retroreflectivity.value=m.retroreflectivity;if(m.iridescence>0){if(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessMinimum,p.iridescenceThicknessMaximum.value=m.iridescenceThicknessMaximum,m.iridescenceMap)p.iridescenceMap.value=m.iridescenceMap,i(m.iridescenceMap,p.iridescenceMapTransform);if(m.iridescenceThicknessMap)p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,i(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform)}if(m.transmission>0){if(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=T.texture,p.transmissionSamplerSize.value.set(T.width,T.height),m.transmissionMap)p.transmissionMap.value=m.transmissionMap,i(m.transmissionMap,p.transmissionMapTransform);if(p.thickness.value=m.thickness,m.thicknessMap)p.thicknessMap.value=m.thicknessMap,i(m.thicknessMap,p.thicknessMapTransform);p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)}if(m.anisotropy>0){if(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap)p.anisotropyMap.value=m.anisotropyMap,i(m.anisotropyMap,p.anisotropyMapTransform)}if(p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap)p.specularColorMap.value=m.specularColorMap,i(m.specularColorMap,p.specularColorMapTransform);if(m.specularIntensityMap)p.specularIntensityMap.value=m.specularIntensityMap,i(m.specularIntensityMap,p.specularIntensityMapTransform)}function x(p,m){if(m.matcap)p.matcap.value=m.matcap}function y(p,m){let T=t.get(m).light;p.referencePosition.value.setFromMatrixPosition(T.matrixWorld),p.nearDistance.value=T.shadow.camera.near,p.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:n}}function Dm(e,t,i,r){let n={},s={};function o(T,E){let S=E.program;r.uniformBlockBinding(T,S,n[T.id])}function a(T,E){let S=n[T.id];if(S===void 0)x(T),S=l(T),n[T.id]=S,T.addEventListener("dispose",p);let C=E.program;r.updateUBOMapping(T,C);let L=t.render.frame;if(s[T.id]!==L)c(T),s[T.id]=L}function l(T){let E=e.createBuffer(),{__size:S,usage:C}=T;return e.bindBuffer(e.UNIFORM_BUFFER,E),e.bufferData(e.UNIFORM_BUFFER,S,C),e.bindBuffer(e.UNIFORM_BUFFER,null),E}function c(T){let E=n[T.id],{uniforms:S,__cache:C}=T;e.bindBuffer(e.UNIFORM_BUFFER,E);for(let L=0,g=S.length;L<g;L++){let b=S[L];if(Array.isArray(b))for(let N=0,q=b.length;N<q;N++)u(b[N],L,N,C);else u(b,L,0,C)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function u(T,E,S,C){if(h(T,E,S,C)===!0){let{__offset:L,value:g}=T;if(Array.isArray(g)){let b=0;for(let N=0;N<g.length;N++){let q=g[N],U=y(q,!0);f(q,T.__data,b),b+=U.storage/Float32Array.BYTES_PER_ELEMENT}}else f(g,T.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,L,T.__data)}}function f(T,E,S){if(typeof T==="number"||typeof T==="boolean")E[S]=T;else if(T.isMatrix3)E[S]=T.elements[0],E[S+1]=T.elements[1],E[S+2]=T.elements[2],E[S+3]=0,E[S+4]=T.elements[3],E[S+5]=T.elements[4],E[S+6]=T.elements[5],E[S+7]=0,E[S+8]=T.elements[6],E[S+9]=T.elements[7],E[S+10]=T.elements[8],E[S+11]=0;else if(ArrayBuffer.isView(T))E.set(T.subarray(0,E.length-S),S);else T.toArray(E,S)}function h(T,E,S,C){let L=T.value,g=E+"_"+S;if(Array.isArray(L)){if(C[g]===void 0)C[g]=[];let b=C[g],N=!1;for(let q=0;q<L.length;q++)if(d(L[q],b,q)===!0)N=!0;return N}return d(L,C,g)}function d(T,E,S){if(E[S]===void 0){if(typeof T==="number"||typeof T==="boolean")E[S]=T;else if(ArrayBuffer.isView(T))E[S]=T.slice();else E[S]=T.clone();return!0}else{let C=E[S];if(typeof T==="number"||typeof T==="boolean"){if(C!==T)return E[S]=T,!0}else if(ArrayBuffer.isView(T))return!0;else if(C.equals(T)===!1)return C.copy(T),!0}return!1}function x(T){let E=T.uniforms,S=0,C=16;for(let g=0,b=E.length;g<b;g++){let N=Array.isArray(E[g])?E[g]:[E[g]];for(let q=0,U=N.length;q<U;q++){let z=N[q],ne=Array.isArray(z.value)?z.value:[z.value],D=Array.isArray(E[g])||Array.isArray(z.value),ee=S;for(let W=0,pe=ne.length;W<pe;W++){let Q=ne[W],oe=y(Q,D),ue=S%C,Se=ue%oe.boundary,ae=ue+Se;if(S+=Se,ae!==0&&C-ae<oe.storage)S+=C-ae;if(W===0)ee=S;S+=oe.storage}let re=z.type==="int"?Int32Array:z.type==="uint"?Uint32Array:Float32Array;z.__data=new re((S-ee)/Float32Array.BYTES_PER_ELEMENT),z.__offset=ee}}let L=S%C;if(L>0)S+=C-L;return T.__size=S,T.__cache={},this}function y(T,E){let S={boundary:0,storage:0};if(typeof T==="number"||typeof T==="boolean")S.boundary=4,S.storage=4;else if(T.isVector2)S.boundary=8,S.storage=8;else if(T.isVector3||T.isColor)S.boundary=16,S.storage=12;else if(T.isVector4)S.boundary=16,S.storage=16;else if(T.isMatrix3)S.boundary=16,S.storage=48;else if(T.isMatrix4)S.boundary=16,S.storage=64;else if(T.isTexture)Ee("WebGLRenderer: Texture samplers can not be part of an uniforms group.");else if(ArrayBuffer.isView(T))S.boundary=16,S.storage=T.byteLength;else Ee("WebGLRenderer: Unsupported uniform value type.",T);if(E===!0)S.boundary=16,S.storage=Math.ceil(S.storage/16)*16;return S}function p(T){let E=T.target;E.removeEventListener("dispose",p),e.deleteBuffer(n[E.id]),delete n[E.id],delete s[E.id]}function m(){for(let T in n)e.deleteBuffer(n[T]);n={},s={}}return{bind:o,update:a,dispose:m}}var u_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),xr=null;function Nm(){if(xr===null)xr=new pr(u_,16,16,Ui,Lt),xr.name="DFG_LUT",xr.minFilter=Ot,xr.magFilter=Ot,xr.wrapS=di,xr.wrapT=di,xr.generateMipmaps=!1,xr.needsUpdate=!0;return xr}class kl{constructor(e={}){let{canvas:t=ec(),context:i=null,depth:r=!0,stencil:n=!1,alpha:s=!1,antialias:o=!1,premultipliedAlpha:a=!0,preserveDrawingBuffer:l=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1,outputBufferType:h=Xt}=e;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=s;let x=h,y=new Set([Kn,Jn,jr]),p=new Set([Xt,Qt,vr,ir,qn,Yn]),m=new Uint32Array(4),T=new Int32Array(4),E={textures:[],min:[],max:[],resolution:[]},S=null,C=null,L=[],g=[],b=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Di,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let N=this,q=!1,U=null,z=null,ne=null,D=null;this._outputColorSpace=Dt;let ee=0,re=0,W=null,pe=-1,Q=null,oe=new yt,ue=new yt,Se=null,ae=new de(0),fe=0,{width:ze,height:Ke}=t,$e=1,Ne=null,_t=null,tt=new yt(0,0,ze,Ke),it=new yt(0,0,ze,Ke),gt=!1,le=new Ki,xe=new Ts,_e=!1,Ue=!1,ve=new Je,Ye=new R,Xe=new yt,Ve={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},nt=!1;function vt(){return W===null?$e:1}let O=i;function Gt(v,B){return t.getContext(v,B)}let lt,Ft,Re,bt,je,st,pt,A,_,H,he,ce,ye,Ae,K,se,Te,F,ie,j,ge,be,Ce;try{let v={alpha:!0,depth:r,stencil:n,antialias:o,premultipliedAlpha:a,preserveDrawingBuffer:l,powerPreference:c,failIfMajorPerformanceCaveat:u};if("setAttribute"in t)t.setAttribute("data-engine",`three.js r${Ws}`);if(t.addEventListener("webglcontextlost",Pe,!1),t.addEventListener("webglcontextrestored",ke,!1),t.addEventListener("webglcontextcreationerror",ft,!1),O===null){if(O=Gt("webgl2",v),O===null)if(Gt("webgl2"))throw Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.");else throw Error("THREE.WebGLRenderer: Error creating WebGL context.")}He()}catch(v){throw t.removeEventListener("webglcontextlost",Pe,!1),t.removeEventListener("webglcontextrestored",ke,!1),t.removeEventListener("webglcontextcreationerror",ft,!1),Oe("WebGLRenderer: "+v.message),v}function He(){if(lt=new Vp(O),lt.init(),ge=new jc(O,lt),Ft=new Lp(O,lt,e,ge),Re=new Cm(O,lt),Ft.reversedDepthBuffer&&f)Re.buffers.depth.setReversed(!0);z=O.createFramebuffer(),ne=O.createFramebuffer(),D=O.createFramebuffer(),bt=new Wp(O),je=new _m,st=new Pm(O,lt,Re,je,Ft,ge,bt),pt=new Gp(N),A=new Yu(O),be=new Pp(O,A),_=new Hp(O,A,bt,be),H=new qp(O,_,A,be,bt),F=new Xp(O,Ft,st),K=new Dp(je),he=new xm(N,pt,lt,Ft,be,K),ce=new Lm(N,je),ye=new Mm,Ae=new Tm(lt),Te=new Cp(N,pt,Re,H,d,a),se=new Rm(N,H,Ft),Ce=new Dm(O,bt,Ft,Re),ie=new Ip(O,lt,bt),j=new kp(O,lt,bt),bt.programs=he.programs,N.capabilities=Ft,N.extensions=lt,N.properties=je,N.renderLists=ye,N.shadowMap=se,N.state=Re,N.info=bt}if(x!==Xt)b=new Yp(x,t.width,t.height,o,r,n);let qe=new th(N,O);this.xr=qe,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){let v=lt.get("WEBGL_lose_context");if(v)v.loseContext()},this.forceContextRestore=function(){let v=lt.get("WEBGL_lose_context");if(v)v.restoreContext()},this.getPixelRatio=function(){return $e},this.setPixelRatio=function(v){if(v===void 0)return;$e=v,this.setSize(ze,Ke,!1)},this.getSize=function(v){return v.set(ze,Ke)},this.setSize=function(v,B,Y=!0){if(qe.isPresenting){Ee("WebGLRenderer: Can't change size while VR device is presenting.");return}if(ze=v,Ke=B,t.width=Math.floor(v*$e),t.height=Math.floor(B*$e),Y===!0)t.style.width=v+"px",t.style.height=B+"px";if(b!==null)b.setSize(t.width,t.height);this.setViewport(0,0,v,B)},this.getDrawingBufferSize=function(v){return v.set(ze*$e,Ke*$e).floor()},this.setDrawingBufferSize=function(v,B,Y){ze=v,Ke=B,$e=Y,t.width=Math.floor(v*Y),t.height=Math.floor(B*Y),this.setViewport(0,0,v,B)},this.setEffects=function(v){if(x===Xt){Oe("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(v){for(let B=0;B<v.length;B++)if(v[B].isOutputPass===!0){Ee("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}b.setEffects(v||[])},this.getCurrentViewport=function(v){return v.copy(oe)},this.getViewport=function(v){return v.copy(tt)},this.setViewport=function(v,B,Y,k){if(v.isVector4)tt.set(v.x,v.y,v.z,v.w);else tt.set(v,B,Y,k);Re.viewport(oe.copy(tt).multiplyScalar(vt()).round())},this.getScissor=function(v){return v.copy(it)},this.setScissor=function(v,B,Y,k){if(v.isVector4)it.set(v.x,v.y,v.z,v.w);else it.set(v,B,Y,k);Re.scissor(ue.copy(it).multiplyScalar(vt()).round())},this.getScissorTest=function(){return gt},this.setScissorTest=function(v){Re.setScissorTest(gt=v)},this.setOpaqueSort=function(v){Ne=v},this.setTransparentSort=function(v){_t=v},this.getClearColor=function(v){return v.copy(Te.getClearColor())},this.setClearColor=function(){Te.setClearColor(...arguments)},this.getClearAlpha=function(){return Te.getClearAlpha()},this.setClearAlpha=function(){Te.setClearAlpha(...arguments)},this.clear=function(v=!0,B=!0,Y=!0){let k=0;if(v){let X=!1;if(W!==null){let w=W.texture.format;X=y.has(w)}if(X){let w=W.texture.type,P=p.has(w),I=Te.getClearColor(),M=Te.getClearAlpha(),{r:V,g:te,b:G}=I;if(P)m[0]=V,m[1]=te,m[2]=G,m[3]=M,O.clearBufferuiv(O.COLOR,0,m);else T[0]=V,T[1]=te,T[2]=G,T[3]=M,O.clearBufferiv(O.COLOR,0,T)}else k|=O.COLOR_BUFFER_BIT}if(B)k|=O.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0);if(Y)k|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295);if(k!==0)O.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(v){v.setRenderer(this),U=v},this.dispose=function(){t.removeEventListener("webglcontextlost",Pe,!1),t.removeEventListener("webglcontextrestored",ke,!1),t.removeEventListener("webglcontextcreationerror",ft,!1),Te.dispose(),ye.dispose(),Ae.dispose(),st.dispose(),je.dispose(),pt.dispose(),H.dispose(),_.dispose(),be.dispose(),Ce.dispose(),he.dispose(),qe.dispose(),qe.removeEventListener("sessionstart",Bs),qe.removeEventListener("sessionend",ci),lr.stop()};function Pe(v){v.preventDefault(),an("WebGLRenderer: Context Lost."),q=!0}function ke(){an("WebGLRenderer: Context Restored."),q=!1;let v=bt.autoReset,B=se.enabled,Y=se.autoUpdate,k=se.needsUpdate,X=se.type;He(),bt.autoReset=v,se.enabled=B,se.autoUpdate=Y,se.needsUpdate=k,se.type=X}function ft(v){Oe("WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function Le(v){let B=v.target;B.removeEventListener("dispose",Le),wt(B)}function wt(v){Jt(v),je.remove(v)}function Jt(v){let B=je.get(v).programs;if(B!==void 0){if(B.forEach(function(Y){he.releaseProgram(Y)}),v.isShaderMaterial)he.releaseShaderCache(v)}}this.renderBufferDirect=function(v,B,Y,k,X,w){if(B===null)B=Ve;let P=X.isMesh&&X.matrixWorld.determinantAffine()<0,I=ql(v,B,Y,k,X);Re.setMaterial(k,P);let M=Y.index,V=1;if(k.wireframe===!0){if(M=_.getWireframeAttribute(Y),M===void 0)return;V=2}let te=Y.drawRange,G=Y.attributes.position,Z=te.start*V,Be=(te.start+te.count)*V;if(w!==null)Z=Math.max(Z,w.start*V),Be=Math.min(Be,(w.start+w.count)*V);if(M!==null)Z=Math.max(Z,0),Be=Math.min(Be,M.count);else if(G!==void 0&&G!==null)Z=Math.max(Z,0),Be=Math.min(Be,G.count);let We=Be-Z;if(We<0||We===1/0)return;be.setup(X,k,I,Y,M);let we,Fe=ie;if(M!==null)we=A.get(M),Fe=j,Fe.setIndex(we);if(X.isMesh)if(k.wireframe===!0)Re.setLineWidth(k.wireframeLinewidth*vt()),Fe.setMode(O.LINES);else Fe.setMode(O.TRIANGLES);else if(X.isLine){let De=k.linewidth;if(De===void 0)De=1;if(Re.setLineWidth(De*vt()),X.isLineSegments)Fe.setMode(O.LINES);else if(X.isLineLoop)Fe.setMode(O.LINE_LOOP);else Fe.setMode(O.LINE_STRIP)}else if(X.isPoints)Fe.setMode(O.POINTS);else if(X.isSprite)Fe.setMode(O.TRIANGLES);if(X.isBatchedMesh)if(!lt.get("WEBGL_multi_draw")){let{_multiDrawStarts:De,_multiDrawCounts:me,_multiDrawCount:ht}=X,Me=M?A.get(M).bytesPerElement:1,mt=je.get(k).currentProgram.getUniforms();for(let St=0;St<ht;St++)mt.setValue(O,"_gl_DrawID",St),Fe.render(De[St]/Me,me[St])}else Fe.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else if(X.isInstancedMesh)Fe.renderInstances(Z,We,X.count);else if(Y.isInstancedBufferGeometry){let De=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,me=Math.min(Y.instanceCount,De);Fe.renderInstances(Z,We,me)}else Fe.render(Z,We)};function bi(v,B,Y,k){if(U!==null&&v.isNodeMaterial)U.setObject(k,v);if(_e===!0)K.setState(v,Y,!1);if(v.transparent===!0&&v.side===mi&&v.forceSinglePass===!1)v.side=Bt,v.needsUpdate=!0,Cr(v,B,k),v.side=ki,v.needsUpdate=!0,Cr(v,B,k),v.side=mi;else Cr(v,B,k)}this.compile=function(v,B,Y=null){if(Y===null)Y=v;if(U!==null)U.renderStart(v,B,Y);if(C=Ae.get(Y),C.init(B),g.push(C),Y.traverseVisible(function(X){if(X.isLight&&X.layers.test(B.layers)){if(C.pushLight(X),X.castShadow)C.pushShadow(X)}}),v!==Y)v.traverseVisible(function(X){if(X.isLight&&X.layers.test(B.layers)){if(C.pushLight(X),X.castShadow)C.pushShadow(X)}});if(C.setupLights(),U!==null)U.updateLights(C.state.lightsArray);if(Ue=this.localClippingEnabled,_e=K.init(this.clippingPlanes,Ue),_e===!0)K.setGlobalState(this.clippingPlanes,B);if(U!==null)se.render(C.state.shadowsArray,Y,B);let k=new Set;if(v.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;let w=X.material;if(w)if(Array.isArray(w))for(let P=0;P<w.length;P++){let I=w[P];bi(I,Y,B,X),k.add(I)}else bi(w,Y,B,X),k.add(w)}),C=g.pop(),U!==null)U.renderEnd();return k},this.compileAsync=function(v,B,Y=null){let k=this.compile(v,B,Y);return new Promise((X)=>{function w(){if(k.forEach(function(P){let M=je.get(P).currentProgram;if(M===void 0||M.isReady())k.delete(P)}),k.size===0){X(v);return}setTimeout(w,10)}if(lt.get("KHR_parallel_shader_compile")!==null)w();else setTimeout(w,10)})};let Fs=null;function Xl(v){if(Fs)Fs(v)}function Bs(){lr.stop()}function ci(){lr.start()}let lr=new Ol;if(lr.setAnimationLoop(Xl),typeof self<"u")lr.setContext(self);this.setAnimationLoop=function(v){Fs=v,qe.setAnimationLoop(v),v===null?lr.stop():lr.start()},qe.addEventListener("sessionstart",Bs),qe.addEventListener("sessionend",ci),this.render=function(v,B){if(B!==void 0&&B.isCamera!==!0){Oe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(q===!0)return;if(U!==null)U.renderStart(v,B);let Y=qe.enabled===!0&&qe.isPresenting===!0,k=b!==null&&(W===null||Y)&&b.begin(N,W);if(v.matrixWorldAutoUpdate===!0)v.updateMatrixWorld();if(B.parent===null&&B.matrixWorldAutoUpdate===!0)B.updateMatrixWorld();if(qe.enabled===!0&&qe.isPresenting===!0&&(b===null||b.isCompositing()===!1)){if(qe.cameraAutoUpdate===!0)qe.updateCamera(B);B=qe.getCamera()}if(v.isScene===!0)v.onBeforeRender(N,v,B,W);if(C=Ae.get(v,g.length),C.init(B),C.state.textureUnits=st.getTextureUnits(),g.push(C),ve.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),B.isArrayCamera)xe.setFromArrayCamera(B);else le.setFromProjectionMatrix(ve,si,B.reversedDepth);if(Ue=this.localClippingEnabled,_e=K.init(this.clippingPlanes,Ue),S=ye.get(v,L.length),S.init(),L.push(S),this.info.render.frame++,qe.enabled===!0&&qe.isPresenting===!0){let P=N.xr.getDepthSensingMesh();if(P!==null)Ln(P,B,-1/0,N.sortObjects)}if(Ln(v,B,0,N.sortObjects),S.finish(),U!==null)U.updateLights(C.state.lightsArray);if(N.sortObjects===!0)S.sort(Ne,_t);if(nt=qe.enabled===!1||qe.isPresenting===!1||qe.hasDepthSensing()===!1,nt)Te.addToRenderList(S,v);if(this.info.autoReset===!0)this.info.reset();if(_e===!0)K.beginShadows();let X=C.state.shadowsArray;if(se.render(X,v,B),_e===!0)K.endShadows();if((k&&b.hasRenderPass())===!1){let P=S.opaque,I=S.transmissive;if(C.setupLights(),B.isArrayCamera){let M=B.cameras;if(I.length>0)for(let V=0,te=M.length;V<te;V++){let G=M[V];zs(P,I,v,G)}if(nt)Te.render(v);for(let V=0,te=M.length;V<te;V++){let G=M[V];Os(S,v,G,G.viewport)}}else{if(I.length>0)zs(P,I,v,B);if(nt)Te.render(v);Os(S,v,B)}}if(W!==null&&re===0)st.updateMultisampleRenderTarget(W),st.updateRenderTargetMipmap(W);if(k)b.end(N);if(v.isScene===!0)v.onAfterRender(N,v,B);if(be.resetDefaultState(),pe=-1,Q=null,g.pop(),g.length>0){if(C=g[g.length-1],st.setTextureUnits(C.state.textureUnits),_e===!0)K.setGlobalState(N.clippingPlanes,C.state.camera)}else C=null;if(L.pop(),L.length>0)S=L[L.length-1];else S=null;if(U!==null)U.renderEnd()};function Ln(v,B,Y,k){if(v.visible===!1)return;if(v.layers.test(B.layers)){if(v.isGroup)Y=v.renderOrder;else if(v.isLOD){if(v.autoUpdate===!0)v.update(B)}else if(v.isLight){if(C.pushLight(v),v.castShadow)C.pushShadow(v)}else if(v.isSprite){let P=B.isArrayCamera?xe:le;if(!v.frustumCulled||v.intersectsFrustum(P)){if(k)Xe.setFromMatrixPosition(v.matrixWorld).applyMatrix4(ve);let I=H.update(v),M=v.material;if(M.visible)S.push(v,I,M,Y,Xe.z,null,B)}}else if(v.isMesh||v.isLine||v.isPoints){let P=B.isArrayCamera?xe:le;if(!v.frustumCulled||v.intersectsFrustum(P)){let I=H.update(v),M=v.material;if(k){if(v.boundingSphere!==void 0){if(v.boundingSphere===null)v.computeBoundingSphere();Xe.copy(v.boundingSphere.center)}else{if(I.boundingSphere===null)I.computeBoundingSphere();Xe.copy(I.boundingSphere.center)}Xe.applyMatrix4(v.matrixWorld).applyMatrix4(ve)}if(Array.isArray(M)){let V=I.groups;for(let te=0,G=V.length;te<G;te++){let Z=V[te],Be=M[Z.materialIndex];if(Be&&Be.visible)S.push(v,I,Be,Y,Xe.z,Z,B)}}else if(M.visible)S.push(v,I,M,Y,Xe.z,null,B)}}}let w=v.children;for(let P=0,I=w.length;P<I;P++)Ln(w[P],B,Y,k)}function Os(v,B,Y,k){let{opaque:X,transmissive:w,transparent:P}=v;if(C.setupLightsView(Y),_e===!0)K.setGlobalState(N.clippingPlanes,Y);if(k)Re.viewport(oe.copy(k));if(X.length>0)Kr(X,B,Y);if(w.length>0)Kr(w,B,Y);if(P.length>0)Kr(P,B,Y);Re.buffers.depth.setTest(!0),Re.buffers.depth.setMask(!0),Re.buffers.color.setMask(!0),Re.setPolygonOffset(!1)}function zs(v,B,Y,k){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;if(C.state.transmissionRenderTarget[k.id]===void 0){let Z=lt.has("EXT_color_buffer_half_float")||lt.has("EXT_color_buffer_float");C.state.transmissionRenderTarget[k.id]=new Pt(1,1,{generateMipmaps:!0,type:Z?Lt:Xt,minFilter:Ei,samples:Math.max(4,Ft.samples),stencilBuffer:n,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:at.workingColorSpace})}let w=C.state.transmissionRenderTarget[k.id],P=k.viewport||oe;w.setSize(P.z*N.transmissionResolutionScale,P.w*N.transmissionResolutionScale);let I=N.getRenderTarget(),M=N.getActiveCubeFace(),V=N.getActiveMipmapLevel();if(N.setRenderTarget(w),N.getClearColor(ae),fe=N.getClearAlpha(),fe<1)N.setClearColor(16777215,0.5);if(N.clear(),nt)Te.render(Y);let te=N.toneMapping;N.toneMapping=Di;let G=k.viewport;if(k.viewport!==void 0)k.viewport=void 0;if(C.setupLightsView(k),_e===!0)K.setGlobalState(N.clippingPlanes,k);if(Kr(v,Y,k),st.updateMultisampleRenderTarget(w),st.updateRenderTargetMipmap(w),lt.has("WEBGL_multisampled_render_to_texture")===!1){let Z=!1;for(let Be=0,We=B.length;Be<We;Be++){let we=B[Be],{object:Fe,geometry:De,material:me,group:ht}=we;if(me.side===mi&&Fe.layers.test(k.layers)){let Me=me.side;me.side=Bt,me.needsUpdate=!0,Gs(Fe,Y,k,De,me,ht),me.side=Me,me.needsUpdate=!0,Z=!0}}if(Z===!0)st.updateMultisampleRenderTarget(w),st.updateRenderTargetMipmap(w)}if(N.setRenderTarget(I,M,V),N.setClearColor(ae,fe),G!==void 0)k.viewport=G;N.toneMapping=te}function Kr(v,B,Y){let k=B.isScene===!0?B.overrideMaterial:null;for(let X=0,w=v.length;X<w;X++){let P=v[X],{object:I,geometry:M,group:V}=P,te=P.material;if(te.allowOverride===!0&&k!==null)te=k;if(I.layers.test(Y.layers))Gs(I,B,Y,M,te,V)}}function Gs(v,B,Y,k,X,w){if(U!==null&&X.isNodeMaterial)U.setObject(v,X);if(v.onBeforeRender(N,B,Y,k,X,w),v.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),X.onBeforeRender(N,B,Y,k,v,w),X.transparent===!0&&X.side===mi&&X.forceSinglePass===!1)X.side=Bt,X.needsUpdate=!0,N.renderBufferDirect(Y,B,k,X,v,w),X.side=ki,X.needsUpdate=!0,N.renderBufferDirect(Y,B,k,X,v,w),X.side=mi;else N.renderBufferDirect(Y,B,k,X,v,w);v.onAfterRender(N,B,Y,k,X,w)}function Vs(v){let B=0;for(let Y of v)if(Y.texture!==null)B++;return B}function Cr(v,B,Y){if(B.isScene!==!0)B=Ve;let k=je.get(v),X=C.state.lights,w=C.state.shadowsArray,P=X.state.version,I=he.getParameters(v,X.state,w,B,Y,C.state.lightProbeGridArray),M=he.getProgramCacheKey(I),V=k.programs;k.environment=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?B.environment:null,k.fog=B.fog;let te=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap;if(k.envMap=pt.get(v.envMap||k.environment,te),k.envMapRotation=k.environment!==null&&v.envMap===null?B.environmentRotation:v.envMapRotation,V===void 0)v.addEventListener("dispose",Le),V=new Map,k.programs=V,k.programVariants=new Map;let G=V.get(M);if(G!==void 0){if(k.currentProgram===G&&k.lightsStateVersion===P)return er(v,I),G}else{if(I.uniforms=he.getUniforms(v),U!==null&&v.isNodeMaterial)U.build(v,Y,I);v.onBeforeCompile(I,N),G=he.acquireProgram(I,M),V.set(M,G),k.uniforms=I.uniforms}let Z=k.uniforms;if(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)Z.clippingPlanes=K.uniform;if(er(v,I),k.needsLights=Ma(v),k.lightsStateVersion=P,k.needsLights)Z.ambientLightColor.value=X.state.ambient,Z.lightProbe.value=X.state.probe,Z.sunLights.value=X.state.sun,Z.sunLightShadows.value=X.state.sunShadow,Z.directionalLights.value=X.state.directional,Z.directionalLightShadows.value=X.state.directionalShadow,Z.spotLights.value=X.state.spot,Z.spotLightShadows.value=X.state.spotShadow,Z.rectAreaLights.value=X.state.rectArea,Z.ltc_1.value=X.state.rectAreaLTC1,Z.ltc_2.value=X.state.rectAreaLTC2,Z.pointLights.value=X.state.point,Z.pointLightShadows.value=X.state.pointShadow,Z.hemisphereLights.value=X.state.hemi,Z.sunShadowMatrix.value=X.state.sunShadowMatrix,Z.sunShadowCascade.value=X.state.sunShadowCascade,Z.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Z.spotLightMatrix.value=X.state.spotLightMatrix,Z.spotLightMap.value=X.state.spotLightMap,Z.pointShadowMatrix.value=X.state.pointShadowMatrix;return k.numLightProbeGrids=Vs(C.state.lightProbeGridArray),k.currentProgram=G,k.uniformsList=null,G}function Dn(v,B,Y,k,X){let w=je.get(v),P=w.currentProgram.id+","+k+","+X,I=w.programVariants.get(P);if(I===void 0)I=Cr(v,B,Y),w.programVariants.set(P,I);else w.currentProgram=I,w.uniformsList=null,w.outputColorSpace=k,w.toneMapping=X;return I}function Pr(v){if(v.uniformsList===null){let B=v.currentProgram.getUniforms();v.uniformsList=Cn.seqWithValue(B.seq,v.uniforms)}return v.uniformsList}function er(v,B){let Y=je.get(v);Y.outputColorSpace=B.outputColorSpace,Y.batching=B.batching,Y.batchingColor=B.batchingColor,Y.instancing=B.instancing,Y.instancingColor=B.instancingColor,Y.instancingMorph=B.instancingMorph,Y.skinning=B.skinning,Y.morphTargets=B.morphTargets,Y.morphNormals=B.morphNormals,Y.morphColors=B.morphColors,Y.morphTargetsCount=B.morphTargetsCount,Y.numClippingPlanes=B.numClippingPlanes,Y.numIntersection=B.numClipIntersection,Y.vertexAlphas=B.vertexAlphas,Y.vertexTangents=B.vertexTangents,Y.toneMapping=B.toneMapping}function ql(v,B,Y,k,X){if(B.isScene!==!0)B=Ve;st.resetTextureUnits();let w=B.fog,P=k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial?B.environment:null,I=W===null?N.outputColorSpace:W.isXRRenderTarget===!0?W.texture.colorSpace:at.workingColorSpace,M=k.isMeshStandardMaterial||k.isMeshLambertMaterial&&!k.envMap||k.isMeshPhongMaterial&&!k.envMap,V=pt.get(k.envMap||P,M),te=k.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,G=!!Y.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),Z=!!Y.morphAttributes.position,Be=!!Y.morphAttributes.normal,We=!!Y.morphAttributes.color,we=Di;if(k.toneMapped){if(W===null||W.isXRRenderTarget===!0)we=N.toneMapping}let Fe=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,De=Fe!==void 0?Fe.length:0,me=je.get(k),ht=C.state.lights;if(_e===!0){if(Ue===!0||v!==Q){let Rt=v===Q&&k.id===pe;K.setState(k,v,Rt)}}let Me=!1,mt=!1;if(k.version===me.__version){if(me.needsLights&&me.lightsStateVersion!==ht.state.version)Me=!0;else if(X.isBatchedMesh&&me.batching===!1)Me=!0;else if(!X.isBatchedMesh&&me.batching===!0)Me=!0;else if(X.isBatchedMesh&&me.batchingColor===!0&&X._colorsTexture===null)Me=!0;else if(X.isBatchedMesh&&me.batchingColor===!1&&X._colorsTexture!==null)Me=!0;else if(X.isInstancedMesh&&me.instancing===!1)Me=!0;else if(!X.isInstancedMesh&&me.instancing===!0)Me=!0;else if(X.isSkinnedMesh&&me.skinning===!1)Me=!0;else if(!X.isSkinnedMesh&&me.skinning===!0)Me=!0;else if(X.isInstancedMesh&&me.instancingColor===!0&&X.instanceColor===null)Me=!0;else if(X.isInstancedMesh&&me.instancingColor===!1&&X.instanceColor!==null)Me=!0;else if(X.isInstancedMesh&&me.instancingMorph===!0&&X.morphTexture===null)Me=!0;else if(X.isInstancedMesh&&me.instancingMorph===!1&&X.morphTexture!==null)Me=!0;else if(me.envMap!==V)Me=!0;else if(k.fog===!0&&me.fog!==w)Me=!0;else if(me.numClippingPlanes!==void 0&&(me.numClippingPlanes!==K.numPlanes||me.numIntersection!==K.numIntersection))Me=!0;else if(me.vertexAlphas!==te)Me=!0;else if(me.vertexTangents!==G)Me=!0;else if(me.morphTargets!==Z)Me=!0;else if(me.morphNormals!==Be)Me=!0;else if(me.morphColors!==We)Me=!0;else if(me.morphTargetsCount!==De)Me=!0;else if(me.numLightProbeGrids!==Vs(C.state.lightProbeGridArray))Me=!0;else if(me.outputColorSpace!==I||me.toneMapping!==we)mt=!0}else Me=!0,me.__version=k.version;let St=me.currentProgram;if(Me===!0||mt===!0){if(St=mt===!0?Dn(k,B,X,I,we):Cr(k,B,X),U&&k.isNodeMaterial)U.onUpdateProgram(k,St,me)}let Ti=!1,Tt=!1,hi=!1,ut=St.getUniforms(),Mt=me.uniforms;if(Re.useProgram(St.program))Ti=!0,Tt=!0,hi=!0;if(k.id!==pe)pe=k.id,Tt=!0;if(Ti||Q!==v){if(Re.buffers.depth.getReversed()&&v.reversedDepth!==!0)v._reversedDepth=!0,v.updateProjectionMatrix();ut.setValue(O,"projectionMatrix",v.projectionMatrix),ut.setValue(O,"viewMatrix",v.matrixWorldInverse);let Kt=ut.map.cameraPosition;if(Kt!==void 0)Kt.setValue(O,Ye.setFromMatrixPosition(v.matrixWorld));if(Ft.logarithmicDepthBuffer)ut.setValue(O,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2));if(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)ut.setValue(O,"isOrthographic",v.isOrthographicCamera===!0);if(Q!==v)Q=v,Tt=!0,hi=!0}if(me.needsLights){if(ht.state.sunShadowMap.length>0)ut.setValue(O,"sunShadowMap",ht.state.sunShadowMap,st);if(ht.state.directionalShadowMap.length>0)ut.setValue(O,"directionalShadowMap",ht.state.directionalShadowMap,st);if(ht.state.spotShadowMap.length>0)ut.setValue(O,"spotShadowMap",ht.state.spotShadowMap,st);if(ht.state.pointShadowMap.length>0)ut.setValue(O,"pointShadowMap",ht.state.pointShadowMap,st)}if(X.isSkinnedMesh){ut.setOptional(O,X,"bindMatrix"),ut.setOptional(O,X,"bindMatrixInverse");let Rt=X.skeleton;if(Rt){if(Rt.boneTexture===null)Rt.computeBoneTexture();ut.setValue(O,"boneTexture",Rt.boneTexture,st)}}if(X.isBatchedMesh){if(ut.setOptional(O,X,"batchingTexture"),ut.setValue(O,"batchingTexture",X._matricesTexture,st),ut.setOptional(O,X,"batchingIdTexture"),ut.setValue(O,"batchingIdTexture",X._indirectTexture,st),ut.setOptional(O,X,"batchingColorTexture"),X._colorsTexture!==null)ut.setValue(O,"batchingColorTexture",X._colorsTexture,st)}let ui=Y.morphAttributes;if(ui.position!==void 0||ui.normal!==void 0||ui.color!==void 0)F.update(X,Y,St);if(Tt||me.receiveShadow!==X.receiveShadow)me.receiveShadow=X.receiveShadow,ut.setValue(O,"receiveShadow",X.receiveShadow);if((k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial)&&k.envMap===null&&B.environment!==null)Mt.envMapIntensity.value=B.environmentIntensity;if(Mt.dfgLUT!==void 0)Mt.dfgLUT.value=Nm();if(Tt){if(ut.setValue(O,"toneMappingExposure",N.toneMappingExposure),me.needsLights)ya(Mt,hi);if(w&&k.fog===!0)ce.refreshFogUniforms(Mt,w);if(ce.refreshMaterialUniforms(Mt,k,$e,Ke,C.state.transmissionRenderTarget[v.id]),me.needsLights&&me.numLightProbeGrids>0){let Rt=E,Kt=0;for(let Hi of C.state.lightProbeGridArray){if(Hi.texture===null)continue;Rt.textures[Kt]=Hi.texture,Rt.min[Kt]=Hi.boundingBox.min,Rt.max[Kt]=Hi.boundingBox.max,Rt.resolution[Kt]=Hi.resolution,Kt++}for(let Hi in Rt)Rt[Hi].length=Kt;Mt.probesSH.value=Rt.textures,Mt.probesMin.value=Rt.min,Mt.probesMax.value=Rt.max,Mt.probesResolution.value=Rt.resolution}Cn.upload(O,Pr(me),Mt,st)}if(k.isShaderMaterial&&k.uniformsNeedUpdate===!0)Cn.upload(O,Pr(me),Mt,st),k.uniformsNeedUpdate=!1;if(k.isSpriteMaterial)ut.setValue(O,"center",X.center);if(ut.setValue(O,"modelViewMatrix",X.modelViewMatrix),ut.setValue(O,"normalMatrix",X.normalMatrix),ut.setValue(O,"modelMatrix",X.matrixWorld),k.uniformsGroups!==void 0){let Rt=k.uniformsGroups;for(let Kt=0,Hi=Rt.length;Kt<Hi;Kt++){let Nn=Rt[Kt];Ce.update(Nn,St),Ce.bind(Nn,St)}}return St}function ya(v,B){v.ambientLightColor.needsUpdate=B,v.lightProbe.needsUpdate=B,v.sunLights.needsUpdate=B,v.sunLightShadows.needsUpdate=B,v.directionalLights.needsUpdate=B,v.directionalLightShadows.needsUpdate=B,v.pointLights.needsUpdate=B,v.pointLightShadows.needsUpdate=B,v.spotLights.needsUpdate=B,v.spotLightShadows.needsUpdate=B,v.rectAreaLights.needsUpdate=B,v.hemisphereLights.needsUpdate=B}function Ma(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return ee},this.getActiveMipmapLevel=function(){return re},this.getRenderTarget=function(){return W},this.setRenderTargetTextures=function(v,B,Y){let k=je.get(v);if(k.__autoAllocateDepthBuffer=v.resolveDepthBuffer===!1,k.__autoAllocateDepthBuffer===!1)k.__useRenderToTexture=!1;je.get(v.texture).__webglTexture=B,je.get(v.depthTexture).__webglTexture=k.__autoAllocateDepthBuffer?void 0:Y,k.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(v,B){let Y=je.get(v);Y.__webglFramebuffer=B,Y.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(v,B=0,Y=0){W=v,ee=B,re=Y;let k=null,X=!1,w=!1;if(v){let I=je.get(v);if(I.__useDefaultFramebuffer!==void 0){Re.bindFramebuffer(O.FRAMEBUFFER,I.__webglFramebuffer),oe.copy(v.viewport),ue.copy(v.scissor),Se=v.scissorTest,Re.viewport(oe),Re.scissor(ue),Re.setScissorTest(Se),pe=-1;return}else if(I.__webglFramebuffer===void 0)st.setupRenderTarget(v);else if(I.__hasExternalTextures)st.rebindTextures(v,je.get(v.texture).__webglTexture,je.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){let te=v.depthTexture;if(I.__boundDepthTexture!==te){if(te!==null&&je.has(te)&&(v.width!==te.image.width||v.height!==te.image.height))throw Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");st.setupDepthRenderbuffer(v)}}let M=v.texture;if(M.isData3DTexture||M.isDataArrayTexture||M.isCompressedArrayTexture)w=!0;let V=je.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget){if(Array.isArray(V[B]))k=V[B][Y];else k=V[B];X=!0}else if(v.samples>0&&st.useMultisampledRTT(v)===!1)k=je.get(v).__webglMultisampledFramebuffer;else if(Array.isArray(V))k=V[Y];else k=V;oe.copy(v.viewport),ue.copy(v.scissor),Se=v.scissorTest}else oe.copy(tt).multiplyScalar($e).floor(),ue.copy(it).multiplyScalar($e).floor(),Se=gt;if(Y!==0)k=z;if(Re.bindFramebuffer(O.FRAMEBUFFER,k))Re.drawBuffers(v,k);if(Re.viewport(oe),Re.scissor(ue),Re.setScissorTest(Se),X){let I=je.get(v.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+B,I.__webglTexture,Y)}else if(w){let I=B;for(let M=0;M<v.textures.length;M++){let V=je.get(v.textures[M]);O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0+M,V.__webglTexture,Y,I)}}else if(v!==null&&Y!==0){let I=je.get(v.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,I.__webglTexture,Y)}pe=-1};function Sa(v){let B=je.get(v);if(B.__readFormat!==v.format||B.__readType!==v.type)B.__readFormat=v.format,B.__readType=v.type,B.__formatReadable=Ft.textureFormatReadable(v.format),B.__typeReadable=Ft.textureTypeReadable(v.type);return B}if(this.readRenderTargetPixels=function(v,B,Y,k,X,w,P,I=0){if(!(v&&v.isWebGLRenderTarget)){Oe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let M=je.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&P!==void 0){if(M=M[P],Array.isArray(M))M=M[0]}if(M){Re.bindFramebuffer(O.FRAMEBUFFER,M);try{let V=v.textures[I],{format:te,type:G}=V;if(v.textures.length>1)O.readBuffer(O.COLOR_ATTACHMENT0+I);let Z=Sa(V);if(Z.__formatReadable===!1){Oe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Z.__typeReadable===!1){Oe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}if(B>=0&&B<=v.width-k&&(Y>=0&&Y<=v.height-X))O.readPixels(B,Y,k,X,ge.convert(te),ge.convert(G),w)}finally{let V=W!==null?je.get(W).__webglFramebuffer:null;Re.bindFramebuffer(O.FRAMEBUFFER,V)}}},this.readRenderTargetPixelsAsync=async function(v,B,Y,k,X,w,P,I=0){if(!(v&&v.isWebGLRenderTarget))throw Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let M=je.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&P!==void 0){if(M=M[P],Array.isArray(M))M=M[0]}if(M)if(B>=0&&B<=v.width-k&&(Y>=0&&Y<=v.height-X)){Re.bindFramebuffer(O.FRAMEBUFFER,M);let V=v.textures[I],{format:te,type:G}=V;if(v.textures.length>1)O.readBuffer(O.COLOR_ATTACHMENT0+I);let Z=Sa(V);if(Z.__formatReadable===!1)throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Z.__typeReadable===!1)throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Be=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,Be),O.bufferData(O.PIXEL_PACK_BUFFER,w.byteLength,O.STREAM_READ),O.readPixels(B,Y,k,X,ge.convert(te),ge.convert(G),0),O.bindBuffer(O.PIXEL_PACK_BUFFER,null);let We=W!==null?je.get(W).__webglFramebuffer:null;Re.bindFramebuffer(O.FRAMEBUFFER,We);let we=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await Hh(O,we,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,Be),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,w),O.bindBuffer(O.PIXEL_PACK_BUFFER,null),O.deleteBuffer(Be),O.deleteSync(we),w}else throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(v,B=null,Y=0){let k=Math.pow(2,-Y),X=Math.floor(v.image.width*k),w=Math.floor(v.image.height*k),P=B!==null?B.x:0,I=B!==null?B.y:0;st.setTexture2D(v,0),O.copyTexSubImage2D(O.TEXTURE_2D,Y,0,0,P,I,X,w),Re.unbindTexture()},this.copyTextureToTexture=function(v,B,Y=null,k=null,X=0,w=0){let P,I,M,V,te,G,Z,Be,We,we=v.isCompressedTexture?v.mipmaps[w]:v.image;if(Y!==null)P=Y.max.x-Y.min.x,I=Y.max.y-Y.min.y,M=Y.isBox3?Y.max.z-Y.min.z:1,V=Y.min.x,te=Y.min.y,G=Y.isBox3?Y.min.z:0;else{let ut=Math.pow(2,-X);if(P=Math.floor(v.width*ut),I=Math.floor(v.height*ut),v.isDataArrayTexture)M=we.depth;else if(v.isData3DTexture)M=Math.floor(we.depth*ut);else M=1;V=0,te=0,G=0}if(k!==null)Z=k.x,Be=k.y,We=k.z;else Z=0,Be=0,We=0;let Fe=ge.convert(B.format),De=ge.convert(B.type),me;if(B.isData3DTexture)st.setTexture3D(B,0),me=O.TEXTURE_3D;else if(B.isDataArrayTexture||B.isCompressedArrayTexture)st.setTexture2DArray(B,0),me=O.TEXTURE_2D_ARRAY;else st.setTexture2D(B,0),me=O.TEXTURE_2D;Re.activeTexture(O.TEXTURE0),Re.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,B.flipY),Re.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),Re.pixelStorei(O.UNPACK_ALIGNMENT,B.unpackAlignment);let ht=Re.getParameter(O.UNPACK_ROW_LENGTH),Me=Re.getParameter(O.UNPACK_IMAGE_HEIGHT),mt=Re.getParameter(O.UNPACK_SKIP_PIXELS),St=Re.getParameter(O.UNPACK_SKIP_ROWS),Ti=Re.getParameter(O.UNPACK_SKIP_IMAGES);Re.pixelStorei(O.UNPACK_ROW_LENGTH,we.width),Re.pixelStorei(O.UNPACK_IMAGE_HEIGHT,we.height),Re.pixelStorei(O.UNPACK_SKIP_PIXELS,V),Re.pixelStorei(O.UNPACK_SKIP_ROWS,te),Re.pixelStorei(O.UNPACK_SKIP_IMAGES,G);let Tt=v.isDataArrayTexture||v.isData3DTexture,hi=B.isDataArrayTexture||B.isData3DTexture;if(v.isDepthTexture){let ut=je.get(v),Mt=je.get(B),ui=je.get(ut.__renderTarget),Rt=je.get(Mt.__renderTarget);Re.bindFramebuffer(O.READ_FRAMEBUFFER,ui.__webglFramebuffer),Re.bindFramebuffer(O.DRAW_FRAMEBUFFER,Rt.__webglFramebuffer);for(let Kt=0;Kt<M;Kt++){if(Tt)O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,je.get(v).__webglTexture,X,G+Kt),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,je.get(B).__webglTexture,w,We+Kt);O.blitFramebuffer(V,te,V+P,te+I,Z,Be,Z+P,Be+I,O.DEPTH_BUFFER_BIT,O.NEAREST)}Re.bindFramebuffer(O.READ_FRAMEBUFFER,null),Re.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(X!==0||v.isRenderTargetTexture||je.has(v)){let ut=je.get(v),Mt=je.get(B);Re.bindFramebuffer(O.READ_FRAMEBUFFER,ne),Re.bindFramebuffer(O.DRAW_FRAMEBUFFER,D);for(let ui=0;ui<M;ui++){if(Tt)O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,ut.__webglTexture,X,G+ui);else O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,ut.__webglTexture,X);if(hi)O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Mt.__webglTexture,w,We+ui);else O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Mt.__webglTexture,w);if(X!==0)O.blitFramebuffer(V,te,V+P,te+I,Z,Be,Z+P,Be+I,O.COLOR_BUFFER_BIT,O.NEAREST);else if(hi)O.copyTexSubImage3D(me,w,Z,Be,We+ui,V,te,P,I);else O.copyTexSubImage2D(me,w,Z,Be,V,te,P,I)}Re.bindFramebuffer(O.READ_FRAMEBUFFER,null),Re.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(hi)if(v.isDataTexture||v.isData3DTexture)O.texSubImage3D(me,w,Z,Be,We,P,I,M,Fe,De,we.data);else if(B.isCompressedArrayTexture)O.compressedTexSubImage3D(me,w,Z,Be,We,we.width,we.height,M,Fe,we.data);else O.texSubImage3D(me,w,Z,Be,We,P,I,M,Fe,De,we);else if(v.isDataTexture)O.texSubImage2D(O.TEXTURE_2D,w,Z,Be,P,I,Fe,De,we.data);else if(v.isCompressedTexture)O.compressedTexSubImage2D(O.TEXTURE_2D,w,Z,Be,we.width,we.height,Fe,we.data);else O.texSubImage2D(O.TEXTURE_2D,w,Z,Be,P,I,Fe,De,we);if(Re.pixelStorei(O.UNPACK_ROW_LENGTH,ht),Re.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Me),Re.pixelStorei(O.UNPACK_SKIP_PIXELS,mt),Re.pixelStorei(O.UNPACK_SKIP_ROWS,St),Re.pixelStorei(O.UNPACK_SKIP_IMAGES,Ti),w===0&&B.generateMipmaps===!0&&B.mipmapsAutoUpdate===!0)O.generateMipmap(me);Re.unbindTexture()},this.initRenderTarget=function(v){if(je.get(v).__webglFramebuffer===void 0)st.setupRenderTarget(v)},this.initTexture=function(v){if(v.isCubeTexture)st.setTextureCube(v,0);else if(v.isData3DTexture)st.setTexture3D(v,0);else if(v.isDataArrayTexture||v.isCompressedArrayTexture)st.setTexture2DArray(v,0);else st.setTexture2D(v,0);Re.unbindTexture()},this.resetState=function(){ee=0,re=0,W=null,Re.reset(),be.reset()},typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return si}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=at._getDrawingBufferColorSpace(e),t.unpackColorSpace=at._getUnpackColorSpace()}}var Ns={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class ji{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}var d_=new Rr(-1,1,1,-1,0,1);class Um extends Ze{constructor(){super();this.setAttribute("position",new Ge([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Ge([0,2,0,0,2,0],2))}}var p_=new Um;class Pn{constructor(e){this._mesh=new et(p_,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,d_)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class ih extends ji{constructor(e,t="tDiffuse"){super();if(this.textureID=t,this.uniforms=null,this.material=null,e instanceof It)this.uniforms=e.uniforms,this.material=e;else if(e)this.uniforms=Qi.clone(e.uniforms),this.material=new It({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader});this._fsQuad=new Pn(this.material)}render(e,t,i){if(this.uniforms[this.textureID])this.uniforms[this.textureID].value=i.texture;if(this._fsQuad.material=this.material,this.renderToScreen)e.setRenderTarget(null),this._fsQuad.render(e);else{if(e.setRenderTarget(t),this.clear)e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil);this._fsQuad.render(e)}}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class Wl extends ji{constructor(e,t){super();this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){let r=e.getContext(),n=e.state;n.buffers.color.setMask(!1),n.buffers.depth.setMask(!1),n.buffers.color.setLocked(!0),n.buffers.depth.setLocked(!0);let s,o;if(this.inverse)s=0,o=1;else s=1,o=0;if(n.buffers.stencil.setTest(!0),n.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),n.buffers.stencil.setFunc(r.ALWAYS,s,4294967295),n.buffers.stencil.setClear(o),n.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear)e.clear();if(e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear)e.clear();e.render(this.scene,this.camera),n.buffers.color.setLocked(!1),n.buffers.depth.setLocked(!1),n.buffers.color.setMask(!0),n.buffers.depth.setMask(!0),n.buffers.stencil.setLocked(!1),n.buffers.stencil.setFunc(r.EQUAL,1,4294967295),n.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),n.buffers.stencil.setLocked(!0)}}class rh extends ji{constructor(){super();this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class nh{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let i=e.getSize(new J);this._width=i.width,this._height=i.height,t=new Pt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Lt}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new ih(Ns),this.copyPass.material.blending=Wi,this.timer=new pa}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);if(t!==-1)this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){if(this.timer.update(),e===void 0)e=this.timer.getDelta();let t=this.renderer.getRenderTarget(),i=!1;for(let r=0,n=this.passes.length;r<n;r++){let s=this.passes[r];if(s.enabled===!1)continue;if(s.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),s.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),s.needsSwap){if(i){let o=this.renderer.getContext(),a=this.renderer.state.buffers.stencil;a.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),a.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}if(Wl!==void 0){if(s instanceof Wl)i=!0;else if(s instanceof rh)i=!1}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new J);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let i=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(i,r),this.renderTarget2.setSize(i,r);for(let n=0;n<this.passes.length;n++)this.passes[n].setSize(i,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class sh extends ji{constructor(e,t,i=null,r=null,n=null){super();this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=r,this.clearAlpha=n,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new de}render(e,t,i){let r=e.autoClear;e.autoClear=!1;let n,s;if(this.overrideMaterial!==null)s=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial;if(this.clearColor!==null)e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha());if(this.clearAlpha!==null)n=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha);if(this.clearDepth==!0)e.clearDepth();if(e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0)e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil);if(e.render(this.scene,this.camera),this.clearColor!==null)e.setClearColor(this._oldClearColor);if(this.clearAlpha!==null)e.setClearAlpha(n);if(this.overrideMaterial!==null)this.scene.overrideMaterial=s;e.autoClear=r}}var Fm={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new de(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class In extends ji{constructor(e,t=1,i,r){super();this.strength=t,this.radius=i,this.threshold=r,this.resolution=e!==void 0?new J(e.x,e.y):new J(256,256),this.clearColor=new de(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let n=Math.round(this.resolution.x/2),s=Math.round(this.resolution.y/2);this.renderTargetBright=new Pt(n,s,{type:Lt,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let c=0;c<this.nMips;c++){let u=new Pt(n,s,{type:Lt,depthBuffer:!1});u.texture.name="UnrealBloomPass.h"+c,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);let f=new Pt(n,s,{type:Lt,depthBuffer:!1});f.texture.name="UnrealBloomPass.v"+c,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),n=Math.round(n/2),s=Math.round(s/2)}let o=Fm;this.highPassUniforms=Qi.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=r,this.highPassUniforms.smoothWidth.value=0.01,this.materialHighPassFilter=new It({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let a=[6,10,14,18,22];n=Math.round(this.resolution.x/2),s=Math.round(this.resolution.y/2);for(let c=0;c<this.nMips;c++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(a[c])),this.separableBlurMaterials[c].uniforms.invSize.value=new J(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=0.1;let l=[1,0.8,0.6,0.4,0.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new R(1,1,1),new R(1,1,1),new R(1,1,1),new R(1,1,1),new R(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Qi.clone(Ns.uniforms),this.blendMaterial=new It({uniforms:this.copyUniforms,vertexShader:Ns.vertexShader,fragmentShader:Ns.fragmentShader,premultipliedAlpha:!0,blending:hr,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new de,this._oldClearAlpha=1,this._basic=new zt,this._fsQuad=new Pn(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),r=Math.round(t/2);this.renderTargetBright.setSize(i,r);for(let n=0;n<this.nMips;n++)this.renderTargetsHorizontal[n].setSize(i,r),this.renderTargetsVertical[n].setSize(i,r),this.separableBlurMaterials[n].uniforms.invSize.value=new J(1/i,1/r),i=Math.round(i/2),r=Math.round(r/2)}render(e,t,i,r,n){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();let s=e.autoClear;if(e.autoClear=!1,e.setClearColor(this.clearColor,0),n)e.state.buffers.stencil.setTest(!1);if(this.renderToScreen)this._fsQuad.material=this._basic,this._basic.map=i.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e);this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let o=this.renderTargetBright;for(let a=0;a<this.nMips;a++)this._fsQuad.material=this.separableBlurMaterials[a],this.separableBlurMaterials[a].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[a].uniforms.direction.value=In.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[a]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[a].uniforms.colorTexture.value=this.renderTargetsHorizontal[a].texture,this.separableBlurMaterials[a].uniforms.direction.value=In.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[a]),e.clear(),this._fsQuad.render(e),o=this.renderTargetsVertical[a];if(this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,n)e.state.buffers.stencil.setTest(!0);if(this.renderToScreen)e.setRenderTarget(null),this._fsQuad.render(e);else e.setRenderTarget(i),this._fsQuad.render(e);e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=s}_getSeparableBlurMaterial(e){let t=[],i=e/3;for(let s=0;s<e;s++)t.push(0.39894*Math.exp(-0.5*s*s/(i*i))/i);let r=[],n=[];for(let s=1;s<e;s+=2){let o=t[s],a=s+1<e?t[s+1]:0,l=o+a;r.push((s*o+(s+1)*a)/l),n.push(l)}return new It({defines:{KERNEL_PAIRS:r.length},uniforms:{colorTexture:{value:null},invSize:{value:new J(0.5,0.5)},direction:{value:new J(0.5,0.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:r},gaussianWeights:{value:n}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float centerWeight;
				uniform float gaussianOffsets[KERNEL_PAIRS];
				uniform float gaussianWeights[KERNEL_PAIRS];

				void main() {

					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * centerWeight;

					for ( int i = 0; i < KERNEL_PAIRS; i ++ ) {

						vec2 uvOffset = direction * invSize * gaussianOffsets[ i ];
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * gaussianWeights[ i ];

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(e){return new It({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}}In.BlurDirectionX=new J(1,0);In.BlurDirectionY=new J(0,1);var _a={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class oh extends ji{constructor(){super();this.isOutputPass=!0,this.uniforms=Qi.clone(_a.uniforms),this.material=new Tn({name:_a.name,uniforms:this.uniforms,vertexShader:_a.vertexShader,fragmentShader:_a.fragmentShader}),this._fsQuad=new Pn(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,i){if(this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping){if(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},at.getTransfer(this._outputColorSpace)===xt)this.material.defines.SRGB_TRANSFER="";if(this._toneMapping===Fn)this.material.defines.LINEAR_TONE_MAPPING="";else if(this._toneMapping===Bn)this.material.defines.REINHARD_TONE_MAPPING="";else if(this._toneMapping===On)this.material.defines.CINEON_TONE_MAPPING="";else if(this._toneMapping===Ur)this.material.defines.ACES_FILMIC_TONE_MAPPING="";else if(this._toneMapping===Gn)this.material.defines.AGX_TONE_MAPPING="";else if(this._toneMapping===Vn)this.material.defines.NEUTRAL_TONE_MAPPING="";else if(this._toneMapping===zn)this.material.defines.CUSTOM_TONE_MAPPING="";this.material.needsUpdate=!0}if(this.renderToScreen===!0)e.setRenderTarget(null),this._fsQuad.render(e);else{if(e.setRenderTarget(t),this.clear)e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil);this._fsQuad.render(e)}}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class ah extends fn{constructor(){super();this.name="RoomEnvironment",this.position.y=-3.5;let e=new Li;e.deleteAttribute("uv");let t=new ei({side:Bt}),i=new ei,r=new Ar(16777215,900,28,2);r.position.set(0.418,16.199,0.3),this.add(r);let n=new et(e,t);n.position.set(-0.757,13.219,0.717),n.scale.set(31.713,28.305,28.591),this.add(n);let s=new Xo(e,i,6),o=new ct;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-0.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),s.setMatrixAt(0,o.matrix),o.position.set(-5.607,-0.754,-0.758),o.rotation.set(0,0.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),s.setMatrixAt(1,o.matrix),o.position.set(6.167,0.857,7.803),o.rotation.set(0,0.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),s.setMatrixAt(2,o.matrix),o.position.set(-2.017,0.018,6.124),o.rotation.set(0,0.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),s.setMatrixAt(3,o.matrix),o.position.set(2.291,-0.756,-2.621),o.rotation.set(0,-0.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),s.setMatrixAt(4,o.matrix),o.position.set(-2.193,-0.369,-5.547),o.rotation.set(0,0.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),s.setMatrixAt(5,o.matrix),this.add(s);let a=new et(e,Us(50));a.position.set(-16.116,14.37,8.208),a.scale.set(0.1,2.428,2.739),this.add(a);let l=new et(e,Us(50));l.position.set(-16.109,18.021,-8.207),l.scale.set(0.1,2.425,2.751),this.add(l);let c=new et(e,Us(17));c.position.set(14.904,12.198,-1.832),c.scale.set(0.15,4.265,6.331),this.add(c);let u=new et(e,Us(43));u.position.set(-0.462,8.89,14.52),u.scale.set(4.38,5.441,0.088),this.add(u);let f=new et(e,Us(20));f.position.set(3.235,11.486,-12.541),f.scale.set(2.5,2,0.1),this.add(f);let h=new et(e,Us(100));h.position.set(0,20,0),h.scale.set(1,0.1,1),this.add(h)}dispose(){let e=new Set;this.traverse((t)=>{if(t.isMesh)e.add(t.geometry),e.add(t.material)});for(let t of e)t.dispose()}}function Us(e){return new aa({color:0,emissive:16777215,emissiveIntensity:e})}class va extends et{constructor(e,t={}){super(e);this.isReflector=!0,this.type="Reflector",this.forceUpdate=!1,this._reflectionCameras=new WeakMap;let i=this,r=t.color!==void 0?new de(t.color):new de(8355711),n=t.textureWidth||512,s=t.textureHeight||512,o=t.clipBias||0,a=t.shader||va.ReflectorShader,l=t.multisample!==void 0?t.multisample:4,c=new Ai,u=new R,f=new R,h=new R,d=new Je,x=new R(0,0,-1),y=new yt,p=new R,m=new R,T=new yt,E=new Je,S=new Pt(n,s,{samples:l,type:Lt}),C=new It({name:a.name!==void 0?a.name:"unspecified",uniforms:Qi.clone(a.uniforms),fragmentShader:a.fragmentShader,vertexShader:a.vertexShader});C.uniforms.tDiffuse.value=S.texture,C.uniforms.color.value=r,C.uniforms.textureMatrix.value=E,this.material=C,this.onBeforeRender=function(L,g,b){let N=this.getReflectionCamera(b);if(f.setFromMatrixPosition(i.matrixWorld),h.setFromMatrixPosition(b.matrixWorld),d.extractRotation(i.matrixWorld),u.set(0,0,1),u.applyMatrix4(d),p.subVectors(f,h),p.dot(u)>0===!0&&this.forceUpdate===!1)return;p.reflect(u).negate(),p.add(f),d.extractRotation(b.matrixWorld),x.set(0,0,-1),x.applyMatrix4(d),x.add(h),m.subVectors(f,x),m.reflect(u).negate(),m.add(f),N.position.copy(p),N.up.set(0,1,0),N.up.applyMatrix4(d),N.up.reflect(u),N.lookAt(m),N.far=b.far,N.updateMatrixWorld(),N.projectionMatrix.copy(b.projectionMatrix),N.projectionMatrix.elements[8]*=-1,N.projectionMatrix.elements[12]*=-1,E.set(0.5,0,0,0.5,0,0.5,0,0.5,0,0,0.5,0.5,0,0,0,1),E.multiply(N.projectionMatrix),E.multiply(N.matrixWorldInverse),E.multiply(i.matrixWorld),c.setFromNormalAndCoplanarPoint(u,f),c.applyMatrix4(N.matrixWorldInverse),y.set(c.normal.x,c.normal.y,c.normal.z,c.constant);let U=N.projectionMatrix;if(N.isOrthographicCamera)T.x=(Math.sign(y.x)+U.elements[8])/U.elements[0],T.y=(Math.sign(y.y)+U.elements[9])/U.elements[5],T.z=-b.far,T.w=1;else T.x=(Math.sign(y.x)+U.elements[8])/U.elements[0],T.y=(Math.sign(y.y)+U.elements[9])/U.elements[5],T.z=-1,T.w=(1+U.elements[10])/U.elements[14];if(y.multiplyScalar(2/y.dot(T)),U.elements[2]=y.x,U.elements[6]=y.y,N.isOrthographicCamera)U.elements[10]=y.z-o,U.elements[14]=y.w-1;else U.elements[10]=y.z+1-o,U.elements[14]=y.w;i.visible=!1;let z=L.getRenderTarget(),ne=L.xr.enabled,D=L.shadowMap.autoUpdate;if(L.xr.enabled=!1,L.shadowMap.autoUpdate=!1,L.setRenderTarget(S),L.state.buffers.depth.setMask(!0),L.autoClear===!1)L.clear();L.render(g,N),L.xr.enabled=ne,L.shadowMap.autoUpdate=D,L.setRenderTarget(z);let ee=b.viewport;if(ee!==void 0)L.state.viewport(ee);i.visible=!0,this.forceUpdate=!1},this.getRenderTarget=function(){return S},this.dispose=function(){S.dispose(),i.material.dispose()},this.getReflectionCamera=function(L){let g=this._reflectionCameras.get(L);if(g===void 0)g=L.clone(),this._reflectionCameras.set(L,g);return g}}}va.ReflectorShader={name:"ReflectorShader",uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null}},vertexShader:`
		uniform mat4 textureMatrix;
		varying vec4 vUv;

		#include <common>
		#include <logdepthbuf_pars_vertex>

		void main() {

			vUv = textureMatrix * vec4( position, 1.0 );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

			#include <logdepthbuf_vertex>

		}`,fragmentShader:`
		uniform vec3 color;
		uniform sampler2D tDiffuse;
		varying vec4 vUv;

		#include <logdepthbuf_pars_fragment>

		float blendOverlay( float base, float blend ) {

			return( base < 0.5 ? ( 2.0 * base * blend ) : ( 1.0 - 2.0 * ( 1.0 - base ) * ( 1.0 - blend ) ) );

		}

		vec3 blendOverlay( vec3 base, vec3 blend ) {

			return vec3( blendOverlay( base.r, blend.r ), blendOverlay( base.g, blend.g ), blendOverlay( base.b, blend.b ) );

		}

		void main() {

			#include <logdepthbuf_fragment>

			vec4 base = texture2DProj( tDiffuse, vUv );
			gl_FragColor = vec4( blendOverlay( base.rgb, color ), 1.0 );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>

		}`};(function(){let e=document.documentElement,t=document.getElementById("hall"),i=document.getElementById("hallCv");if(!t||!i)return;let r=(s)=>{try{console.warn("hall",s)}catch(o){}e.classList.remove("hallon"),window.__hall=null};try{n()}catch(s){r(s)}function n(){let s=window.__hallT={t0:performance.now()},o=matchMedia("(pointer: coarse)").matches,a=/[?&]lite=1/.test(location.search),l=o||/[?&]low=1/.test(location.search),c=l?0.75:1,u=matchMedia("(prefers-reduced-motion: reduce)").matches,f=document.body,h=(w)=>document.getElementById(w),d=new kl({canvas:i,antialias:l,powerPreference:"high-performance"});d.toneMapping=Ur,d.toneMappingExposure=1.1;let x=new fn;if(function(){let w=document.createElement("canvas");w.width=16,w.height=512;let P=w.getContext("2d"),I=P.createLinearGradient(0,0,0,512);I.addColorStop(0,"#05030d"),I.addColorStop(0.55,"#1d0b33"),I.addColorStop(0.72,"#4a1560"),I.addColorStop(1,"#10081c"),P.fillStyle=I,P.fillRect(0,0,16,512);let M=new Mi(w);M.colorSpace=Dt,x.background=M}(),!l){let w=new Jr(d);x.environment=w.fromScene(new ah,0.04).texture,x.environmentIntensity=0.5}x.fog=new hs(1706542,9,26);let y=new kt(30,1.7777777777777777,0.1,60);{let w=[];for(let I=0;I<400;I++){let M=Math.random()*Math.PI*2,V=20+Math.random()*10;w.push(Math.cos(M)*V,3+Math.random()*12,-18-Math.random()*8)}let P=new Ze;P.setAttribute("position",new Ge(w,3)),x.add(new Yo(P,new vn({color:16777215,size:0.05,fog:!1,sizeAttenuation:!0})))}let p=null;if(l){let w=new et(new Ri(60,60),new zt({color:1444390}));w.rotation.x=-Math.PI/2,x.add(w)}else p=new va(new Ri(60,60),{textureWidth:512,textureHeight:512,color:5592422,clipBias:0.003});let m=0,T=!1;if(p){p.rotation.x=-Math.PI/2,x.add(p);let w=p.onBeforeRender;p.onBeforeRender=function(){if(T||m++%4!==0)return;w.apply(this,arguments)}}if(!l){let w=new et(new Ri(60,60),new zt({color:919066,transparent:!0,opacity:0.78,depthWrite:!1}));w.rotation.x=-Math.PI/2,w.position.y=0.002,x.add(w)}let E={uAge:{value:-1},uAmp:{value:0.13},uC:{value:new J(0,0)},uCol:{value:new de(16732070)}};{let M=[];for(let Z=-26;Z<=26.000001;Z+=0.5)for(let Be=-26;Be<25.999999;Be+=0.25)M.push(Z,0,Be,Z,0,Be+0.25),M.push(Be,0,Z,Be+0.25,0,Z);let V=new Ze;V.setAttribute("position",new Ge(M,3));let te=new It({transparent:!0,depthWrite:!1,uniforms:E,vertexShader:`uniform float uAge,uAmp; uniform vec2 uC; varying float vA; varying float vW;
        void main(){ vec3 p=position; float r=length(p.xz-uC); float x=r-uAge*9.0;
          float env=uAge<0.0?0.0:exp(-x*x/1.6)*exp(-uAge*.9); p.y+=.004+uAmp*env*sin(x*4.5);
          vW=env; vec4 mv=modelViewMatrix*vec4(p,1.); gl_Position=projectionMatrix*mv;
          float d=length(mv.xyz); vA=1.-smoothstep(9.,26.,d); }`,fragmentShader:`uniform vec3 uCol; varying float vA; varying float vW;
        void main(){ gl_FragColor=vec4(uCol*(1.15+vW*3.),vA*(.7+.6*vW)); }`}),G=new Ii(V,te);G.frustumCulled=!1,x.add(G)}let S={uAge:{value:-1}};{let V=function(we,Fe,De,me){I.push(we[0],0.012,we[1],Fe[0],0.012,Fe[1]),M.push(De,me)},te=function(we,Fe,De,me,ht,Me){let mt=we,St=Fe,Ti=7;for(let Tt=0;Tt<Ti;Tt++){De+=(P()-0.5)*1.2;let hi=me/Ti,ut=mt+Math.cos(De)*hi,Mt=St+Math.sin(De)*hi,ui=ht+Tt/Ti*(1-ht),Rt=ht+(Tt+1)/Ti*(1-ht);if(V([mt,St],[ut,Mt],ui,Rt),Me<1&&P()<0.5&&Tt>1)te(ut,Mt,De+(P()<0.5?-1:1)*(0.5+P()*0.6),me*0.4,Rt,Me+1);mt=ut,St=Mt}},w=7,P=()=>(w=w*16807%2147483647)/2147483647,I=[],M=[],G=17;for(let we=0;we<G;we++)te(0,0,we/G*Math.PI*2+P()*0.3,1+P()*1.6,0,0);let Z=new Ze;Z.setAttribute("position",new Ge(I,3)),Z.setAttribute("along",new Ge(M,1));let Be=new It({transparent:!0,depthWrite:!1,blending:hr,uniforms:S,vertexShader:"attribute float along; varying float vT; void main(){ vT=along; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.); }",fragmentShader:`uniform float uAge; varying float vT;
        void main(){ if(uAge<0.) discard; float grow=clamp(uAge/.5,0.,1.); grow=1.-pow(1.-grow,2.); if(vT>grow) discard;
          float fade=1.-smoothstep(1.6,3.8,uAge); float hot=1.-smoothstep(0.,1.,vT);
          vec3 c=mix(vec3(1.,.25,.62),vec3(1.,.9,.97),hot*.8*(1.-smoothstep(0.,1.2,uAge)));
          gl_FragColor=vec4(c*2.2*fade,1.); }`}),We=new Ii(Z,Be);We.frustumCulled=!1,We.name="cracks",x.add(We),window.__cracks=We}function C(w,P){let I=document.createElement("canvas");I.width=512*c,I.height=512*c;let M=I.getContext("2d");if(M.scale(c,c),M.fillStyle="#070418",M.fillRect(0,0,512,512),w===1)for(let te=0;te<6;te++)for(let G=0;G<4;G++){if((te+G)%3===0)continue;M.fillStyle=P,M.globalAlpha=0.3+0.1*te,M.fillRect(66+G*100,230+te*44,88,36)}if(w===2){M.strokeStyle=P,M.lineWidth=6;for(let te=1;te<6;te++)M.globalAlpha=1-te*0.14,M.beginPath(),M.arc(256,290,te*52,0,7),M.stroke()}if(w===3)M.fillStyle=P,M.fillRect(46,200,18,120),M.fillRect(448,280,18,120),M.fillStyle="#fff",M.beginPath(),M.arc(290,250,11,0,7),M.fill();M.globalAlpha=1,M.fillStyle=P,M.textAlign="center",M.font="800 40px Inter,Arial,sans-serif",M.fillText("COMING SOON",256,100);let V=new Mi(I);return V.colorSpace=Dt,V.anisotropy=8,V}function L(w,P){let I=document.createElement("canvas");I.width=1024*c,I.height=256*c;let M=I.getContext("2d");M.scale(c,c),M.fillStyle="#0b0410",M.fillRect(0,0,1024,256);let V=M.createLinearGradient(0,0,0,256);V.addColorStop(0,"rgba(255,255,255,.07)"),V.addColorStop(1,"rgba(255,255,255,0)"),M.fillStyle=V,M.fillRect(0,0,1024,256),M.font="900 150px Inter,Arial,sans-serif",M.textAlign="center",M.textBaseline="middle",M.shadowColor=P,M.shadowBlur=40,M.fillStyle="#fff",M.letterSpacing="18px",M.fillText(w,521,138),M.shadowBlur=18,M.fillText(w,521,138),M.strokeStyle=P,M.lineWidth=10,M.shadowBlur=24,M.strokeRect(10,10,1004,236);let te=new Mi(I);return te.colorSpace=Dt,te.anisotropy=8,te}function g(w,P){let I=document.createElement("canvas");I.width=1024*c,I.height=1024*c;let M=I.getContext("2d");M.scale(c,c),M.clearRect(0,0,1024,1024),M.strokeStyle=w,M.lineWidth=26,M.shadowColor=w,M.shadowBlur=30,M.beginPath(),M.moveTo(-50,760),M.lineTo(1100,360),M.stroke(),M.lineWidth=10,M.beginPath(),M.moveTo(-50,820),M.lineTo(1100,420),M.stroke(),M.shadowBlur=0,M.fillStyle="rgba(255,255,255,.85)",M.font="900 150px Inter,Arial",M.save(),M.translate(120,330),M.rotate(-Math.PI/2),M.fillText(P,0,0),M.restore();let V=new Mi(I);return V.colorSpace=Dt,V.anisotropy=8,V}function b(){let w=document.createElement("canvas");w.width=256*c,w.height=256*c;let P=w.getContext("2d");P.scale(c,c);let I=P.createRadialGradient(128,110,10,128,128,128);I.addColorStop(0,"#ff9fd0"),I.addColorStop(0.7,"#ff4fa6"),I.addColorStop(1,"#c21a72"),P.fillStyle=I,P.beginPath(),P.arc(128,128,126,0,7),P.fill(),P.fillStyle="#fff",P.font="900 74px Inter,Arial,sans-serif",P.textAlign="center",P.textBaseline="middle",P.letterSpacing="1px",P.shadowColor="rgba(120,0,60,.6)",P.shadowBlur=6,P.fillText("START",129,134);let M=new Mi(w);return M.colorSpace=Dt,M.anisotropy=8,M}let N=function(){let w=document.createElement("canvas");w.width=256,w.height=256;let P=w.getContext("2d"),I=P.createLinearGradient(0,0,256,256);return I.addColorStop(0,"rgba(255,255,255,.20)"),I.addColorStop(0.35,"rgba(255,255,255,.04)"),I.addColorStop(0.36,"rgba(255,255,255,0)"),I.addColorStop(1,"rgba(255,255,255,0)"),P.fillStyle=I,P.fillRect(0,0,256,256),new Mi(w)}(),q=function(){let w=document.createElement("canvas");w.width=128,w.height=128;let P=w.getContext("2d"),I=P.createRadialGradient(64,64,4,64,64,64);return I.addColorStop(0,"rgba(0,0,0,.75)"),I.addColorStop(1,"rgba(0,0,0,0)"),P.fillStyle=I,P.fillRect(0,0,128,128),new Mi(w)}(),U=document.createElement("canvas");U.width=512,U.height=512;let z=U.getContext("2d"),ne=new Mi(U);ne.colorSpace=Dt,ne.anisotropy=8;let D=[];for(let w=0;w<40;w++)D.push([Math.random()*512,Math.random()*400,Math.random()*2+1,Math.random()*6]);let ee=[];for(let w=0;w<9;w++)ee.push([30+w*56+Math.random()*20,Math.random()*500,1.6+Math.random()*1.2,w%3]);function re(w){let P=z.createLinearGradient(0,0,0,512);P.addColorStop(0,"#060c1f"),P.addColorStop(1,"#0e1c45"),z.fillStyle=P,z.fillRect(0,0,512,512),D.forEach((V)=>{z.globalAlpha=0.35+0.35*Math.sin(w*1.5+V[3]),z.fillStyle="#8fa8ff",z.fillRect(V[0],V[1],V[2],V[2])}),z.globalAlpha=1;let I=["#c6e4ff","#43c6ff","#b6ff3c"];ee.forEach((V)=>{let te=(V[1]+w*55*V[2])%540-20;z.fillStyle=I[V[3]],z.globalAlpha=0.55,z.fillRect(V[0],te-22,3,22),z.globalAlpha=0.9,z.fillRect(V[0]-4,te,11,11)}),z.globalAlpha=1,z.fillStyle="#16264f",z.fillRect(0,452,512,60),z.fillStyle="#4b6fb5",z.fillRect(0,450,512,3);let M=256+Math.sin(w*0.8)*150;if(z.fillStyle="#e0425a",z.fillRect(M-17,430,34,20),z.fillStyle="#ffd1d8",z.fillRect(M-6,420,12,12),z.textAlign="center",z.font="900 70px Inter,Arial,sans-serif",z.fillStyle="#ff7ac2",!l)z.shadowColor="#ff2e93",z.shadowBlur=18;if(z.fillText("READY?",256,200),z.shadowBlur=0,z.font="600 26px Inter,Arial,sans-serif",z.fillStyle="#c9d6ff",z.fillText("Drag to run. Don't get hit.",256,250),Math.floor(w*1.6)%2===0)z.font="800 28px Inter,Arial,sans-serif",z.fillStyle="#ff9fd0",z.fillText("PRESS START",256,312);ne.needsUpdate=!0}re(0);let W=function(){let w=document.createElement("canvas");w.width=w.height=64;let P=w.getContext("2d"),I=P.createRadialGradient(32,32,0,32,32,32);return I.addColorStop(0,"rgba(255,255,255,.9)"),I.addColorStop(1,"rgba(255,255,255,0)"),P.fillStyle=I,P.fillRect(0,0,64,64),new Mi(w)}(),pe={w:0.74,rough:0.38,metal:0.6,pts:[[-0.42,0],[0.3,0],[0.3,0.62],[0.44,0.66],[0.44,0.74],[0.22,0.94],[0.12,1.56],[0.24,1.58],[0.24,1.95],[-0.2,1.97],[-0.42,1.7]],scr:[[0.21,0.95],[0.12,1.55]],bez:[[0.215,0.9],[0.115,1.6],0.7],mq:[[0.245,1.6],[0.245,1.94],0.72],deck:[[0.44,0.745],[0.22,0.945]],stops:[1708080,722708,722708],neon:16732070};function Q(w,P,I,M,V){let te=P[0]-w[0],G=P[1]-w[1],Z=Math.hypot(te,G),Be=G/Z,We=-te/Z,we=new et(new Ri(I,Z),V);return we.rotation.x=-Math.atan2(We,Be),we.position.set(0,(w[1]+P[1])/2+We*M,(w[0]+P[0])/2+Be*M),we.userData={len:Z,nz:Be,ny:We},we}let oe=(w,P)=>new zt({color:new de(w).multiplyScalar(P),toneMapped:!1}),ue=1,Se=null,ae={1:{stops:[2767516,1516144,593194],rough:0.28,metal:0.4,neon:16732070,door:"chrome",paint:["#2a3a9c","#0c1236"],stripe:"#ff4fa6",grille:"#ff4fa6"},2:{stops:[14690950,10098016,3934764],rough:0.22,metal:0.3,neon:16752592,glow:16727968,door:"chrome",paint:["#e02a86","#6d0f46"],stripe:"#ffffff",grille:"#ffffff"},3:{stops:[1711138,921363,328967],rough:0.3,metal:0.7,neon:3729663,door:"black",paint:["#1a1c22","#08090c"],stripe:"#38e8ff",grille:"#38e8ff"},5:{stops:[1010531,608064,202778],rough:0.28,metal:0.4,neon:2868384,door:"chrome",paint:["#0f6b63","#04201f"],stripe:"#2bc4a0",grille:"#2bc4a0"},4:{stops:[4200554,2755914,918560],rough:0.3,metal:0.45,neon:16738877,door:"chrome",paint:["#40186a","#12062a"],stripe:"#ff6a3d",grille:"#ff4fa6"}};function fe(w,P,I,M,V,te){w.beginPath(),w.moveTo(P+te,I),w.arcTo(P+M,I,P+M,I+V,te),w.arcTo(P+M,I+V,P,I+V,te),w.arcTo(P,I+V,P,I,te),w.arcTo(P,I,P+M,I,te),w.closePath()}function ze(w,P,I,M,V,te){let G=w.createLinearGradient(P,I,P,I+V);G.addColorStop(0,te[0]),G.addColorStop(0.5,te[1]),G.addColorStop(1,te[2]),w.fillStyle=G,w.fillRect(P,I,M,V);for(let Z=0;Z<V;Z+=2)w.fillStyle=Math.random()<0.5?"#fff":"#000",w.globalAlpha=0.03+Math.random()*0.07,w.fillRect(P,I+Z,M,1);w.globalAlpha=1}function Ke(w,P,I,M){let V=w.createRadialGradient(P-M*0.3,I-M*0.3,1,P,I,M);V.addColorStop(0,"#fff"),V.addColorStop(1,"#4a4d5a"),w.fillStyle=V,w.beginPath(),w.arc(P,I,M,0,7),w.fill(),w.strokeStyle="#1a1b22",w.lineWidth=M*0.3,w.beginPath(),w.moveTo(P-M*0.6,I-M*0.3),w.lineTo(P+M*0.6,I+M*0.3),w.stroke()}function $e(){let I="#"+new de(Se.neon).getHexString(),M=()=>{let Me=document.createElement("canvas");return Me.width=800*c,Me.height=740*c,Me},V=M(),te=M(),G=V.getContext("2d"),Z=te.getContext("2d");G.scale(c,c),Z.scale(c,c),Z.fillStyle="#000",Z.fillRect(0,0,800,740);let Be=G.createLinearGradient(0,0,0,740);if(Be.addColorStop(0,Se.paint[0]),Be.addColorStop(1,Se.paint[1]),G.fillStyle=Be,G.fillRect(0,0,800,740),ue===3)for(let Me=0;Me<740;Me+=8)for(let mt=0;mt<800;mt+=8)G.fillStyle=(Me+mt)/8%2?"rgba(255,255,255,.035)":"rgba(0,0,0,.25)",G.fillRect(mt,Me,8,8);[45,595].forEach((Me)=>{G.fillStyle="#06070a",fe(G,Me,70,160,330,16),G.fill();for(let mt=92;mt<390;mt+=16)for(let St=Me+18;St<Me+150;St+=16)G.fillStyle="#262a38",G.beginPath(),G.arc(St,mt,4.2,0,7),G.fill(),G.fillStyle="#05060a",G.beginPath(),G.arc(St+1,mt+1,2.6,0,7),G.fill();G.strokeStyle="#3a3e50",G.lineWidth=4,fe(G,Me,70,160,330,16),G.stroke(),Z.strokeStyle=Se.grille,Z.globalAlpha=0.55,Z.lineWidth=5,fe(Z,Me-4,66,168,338,18),Z.stroke(),Z.globalAlpha=1});let We=Se.door==="chrome"?["#c9cee2","#6c7390","#b3b9d0"]:["#33353f","#0e0f14","#272932"];G.save(),G.shadowColor="rgba(0,0,0,.7)",G.shadowBlur=24,G.shadowOffsetY=8,G.fillStyle="#000",fe(G,232,52,336,432,24),G.fill(),G.restore(),G.save(),fe(G,232,52,336,432,24),G.clip(),ze(G,232,52,336,432,We),G.restore(),G.strokeStyle=Se.door==="chrome"?"#5b6076":"#4b4e5c",G.lineWidth=4,fe(G,232,52,336,432,24),G.stroke(),[[252,72],[548,72],[252,464],[548,464]].forEach((Me)=>Ke(G,Me[0],Me[1],8)),G.fillStyle="#0a0b10",fe(G,262,88,276,190,14),G.fill(),G.strokeStyle="#000",G.lineWidth=3,G.stroke(),[334,466].forEach((Me)=>{G.fillStyle="#15171f",fe(G,Me-44,104,88,156,12),G.fill(),G.strokeStyle=Se.door==="chrome"?"#c9cee0":"#555a6c",G.lineWidth=5,G.stroke(),G.fillStyle="#000",fe(G,Me-8,130,16,80,6),G.fill(),Z.fillStyle=I,Z.shadowColor=I,Z.shadowBlur=18,fe(Z,Me-5,134,10,72,4),Z.fill(),Z.shadowBlur=0,Z.strokeStyle=I,Z.globalAlpha=0.75,Z.lineWidth=5,fe(Z,Me-48,100,96,164,14),Z.stroke(),Z.globalAlpha=1,G.fillStyle="#9aa0b8",G.font="800 20px Inter,Arial,sans-serif",G.textAlign="center",G.fillText("25¢",Me,246)}),G.fillStyle="#06070b",fe(G,276,296,248,44,8),G.fill(),G.font="800 22px Inter,Arial,sans-serif",G.letterSpacing="6px",G.textAlign="center",G.textBaseline="middle",G.fillStyle=I,G.fillText("INSERT COIN",402,319),Z.font=G.font,Z.letterSpacing="6px",Z.textAlign="center",Z.textBaseline="middle",Z.fillStyle=I,Z.globalAlpha=0.9,Z.fillText("INSERT COIN",402,319),Z.globalAlpha=1,G.letterSpacing="0px",G.textBaseline="alphabetic",G.fillStyle="#0b0c11",fe(G,296,364,208,96,12),G.fill();let we=G.createLinearGradient(0,380,0,450);we.addColorStop(0,"#3a3e50"),we.addColorStop(1,"#14151c"),G.fillStyle=we,fe(G,312,380,176,66,8),G.fill(),G.fillStyle="#7b8196",G.font="700 16px Inter,Arial,sans-serif",G.textAlign="center",G.fillText("COIN RETURN",400,418),Z.fillStyle=I,Z.shadowColor=I,Z.shadowBlur=14,Z.beginPath(),Z.arc(400,352,5,0,7),Z.fill(),Z.shadowBlur=0,G.fillStyle=Se.stripe,G.globalAlpha=0.95,G.fillRect(0,520,800,14),G.globalAlpha=0.5,G.fillRect(0,542,800,5),G.globalAlpha=1,Z.fillStyle=Se.stripe,Z.globalAlpha=0.55,Z.fillRect(0,520,800,14),Z.globalAlpha=1,ze(G,0,568,800,172,Se.door==="chrome"?["#aeb3c8","#5f6580","#8b91aa"]:["#2b2d37","#0d0e12","#1d1f27"]),[[40,600],[760,600],[40,706],[760,706]].forEach((Me)=>Ke(G,Me[0],Me[1],9));let Fe=G.createLinearGradient(0,0,0,60);Fe.addColorStop(0,"rgba(0,0,0,.65)"),Fe.addColorStop(1,"rgba(0,0,0,0)"),G.fillStyle=Fe,G.fillRect(0,0,800,60);let De=G.createLinearGradient(0,700,0,740);De.addColorStop(0,"rgba(0,0,0,0)"),De.addColorStop(1,"rgba(0,0,0,.6)"),G.fillStyle=De,G.fillRect(0,700,800,40);let me=new Mi(V);me.colorSpace=Dt,me.anisotropy=8;let ht=new Mi(te);return ht.colorSpace=Dt,{map:me,emi:ht}}function Ne(w){let P=1024*c,I=document.createElement("canvas");I.width=I.height=P;let M=I.getContext("2d"),V=P/0.86,te=P/1.97;M.setTransform(V,0,0,-te,0,P);let G=(we,Fe,De,me,ht)=>{if(M.fillStyle=me,M.beginPath(),M.arc(we,Fe,De,0,7),M.fill(),M.beginPath(),M.moveTo(we-De*0.96,Fe+De*0.28),M.lineTo(we,Fe+De*2.5),M.lineTo(we+De*0.96,Fe+De*0.28),M.fill(),ht)M.globalAlpha=0.35,M.fillRect(we-De*0.12,Fe+De*2.6,De*0.24,ht),M.globalAlpha=1},Z=(we,Fe,De,me,ht,Me,mt)=>{if(M.strokeStyle=Me,M.lineWidth=ht,M.lineCap="round",mt)M.shadowColor=Me,M.shadowBlur=mt;M.beginPath(),M.moveTo(we,Fe),M.lineTo(De,me),M.stroke(),M.shadowBlur=0},Be=M.createLinearGradient(0,0,0,1.97);if(Be.addColorStop(0,Se.paint[1]),Be.addColorStop(1,Se.paint[0]),M.fillStyle=Be,M.fillRect(0,0,0.86,1.97),ue===1||ue===5)M.save(),M.shadowColor=w,M.shadowBlur=18,M.fillStyle=w,M.beginPath(),M.moveTo(0,0.3),M.lineTo(0.86,1.12),M.lineTo(0.86,1.3),M.lineTo(0,0.52),M.fill(),M.restore(),M.fillStyle="#fff",M.beginPath(),M.moveTo(0,0.55),M.lineTo(0.86,1.33),M.lineTo(0.86,1.345),M.lineTo(0,0.565),M.fill(),Z(0,0.22,0.86,1,0.035,"#43c6ff",14),Z(0,0.12,0.86,0.9,0.012,"#fff",0),[[0.12,1.74,0.022,"#c6e4ff",0.18],[0.3,1.55,0.03,"#43c6ff",0.26],[0.5,1.82,0.02,"#b6ff3c",0.14],[0.68,1.6,0.028,"#c6e4ff",0.22],[0.2,1.3,0.018,"#b6ff3c",0.1],[0.74,1.9,0.016,"#43c6ff",0.08]].forEach((we)=>G(we[0],we[1],we[2],we[3],we[4]));else if(ue===2)M.fillStyle="#fff",M.beginPath(),M.moveTo(0,0.12),M.lineTo(0.86,0.98),M.lineTo(0.86,1.22),M.lineTo(0,0.36),M.fill(),M.fillStyle="#0b0410",M.beginPath(),M.moveTo(0,0.4),M.lineTo(0.86,1.26),M.lineTo(0.86,1.32),M.lineTo(0,0.46),M.fill(),M.fillStyle="#fff",M.beginPath(),M.moveTo(0,0.5),M.lineTo(0.86,1.36),M.lineTo(0.86,1.4),M.lineTo(0,0.54),M.fill(),G(0.43,1.42,0.09,"#ffffff",0),G(0.43,1.42,0.05,"#c4156f",0),G(0.16,1.72,0.025,"#fff",0.2),G(0.7,1.62,0.03,"#fff",0.24);else if(ue===3){for(let Fe=0;Fe<1.97;Fe+=0.03)for(let De=0;De<0.86;De+=0.03)M.fillStyle=Math.round((Fe+De)/0.03)%2?"rgba(255,255,255,.045)":"rgba(0,0,0,.32)",M.fillRect(De,Fe,0.03,0.03);let we="#38e8ff";M.lineJoin="round",M.strokeStyle=we,M.shadowColor=we,M.shadowBlur=12,M.lineWidth=0.014,[[[0,0.9],[0.25,0.9],[0.4,1.05],[0.86,1.05]],[[0,1.2],[0.2,1.2],[0.34,1.34],[0.62,1.34],[0.74,1.46],[0.86,1.46]],[[0,0.6],[0.3,0.6],[0.44,0.74],[0.86,0.74]]].forEach((Fe)=>{M.beginPath(),M.moveTo(Fe[0][0],Fe[0][1]);for(let De=1;De<Fe.length;De++)M.lineTo(Fe[De][0],Fe[De][1]);M.stroke(),M.fillStyle=we,Fe.forEach((De)=>{M.beginPath(),M.arc(De[0],De[1],0.016,0,7),M.fill()})}),M.shadowBlur=0,Z(0,0.24,0.86,0.5,0.05,w,18)}else{let we=M.createLinearGradient(0,0,0,1.97);we.addColorStop(0,"#12062a"),we.addColorStop(0.45,"#3a0f5e"),we.addColorStop(0.62,"#b3207a"),we.addColorStop(0.72,"#ff5a52"),we.addColorStop(0.8,"#2a0d4a"),we.addColorStop(1,"#2a0d4a"),M.fillStyle=we,M.fillRect(0,0,0.86,1.97);let Fe=0.43,De=1.2,me=0.3,ht=M.createLinearGradient(0,De-me,0,De+me);ht.addColorStop(0,"#ff6a3d"),ht.addColorStop(1,"#ff2e93"),M.save(),M.shadowColor="#ff2e93",M.shadowBlur=28,M.fillStyle=ht,M.beginPath(),M.arc(Fe,De,me,0,7),M.fill(),M.restore(),M.fillStyle="#2a0d4a";for(let Me=0;Me<6;Me++){let mt=De-me*0.75+Me*0.075;M.fillRect(Fe-me,mt,me*2,0.008+Me*0.006)}M.strokeStyle="#ff4fa6",M.lineWidth=0.006;for(let Me=0;Me<9;Me++){let mt=0.66-Me*Me*0.0075;M.beginPath(),M.moveTo(0,mt),M.lineTo(0.86,mt),M.stroke()}for(let Me=-4;Me<=4;Me++)M.beginPath(),M.moveTo(0.43+Me*0.02,0.66),M.lineTo(0.43+Me*0.2,0),M.stroke()}M.fillStyle="rgba(0,0,0,.65)",M.fillRect(0,0,0.86,0.1);let We=new Mi(I);return We.colorSpace=Dt,We.anisotropy=8,We}function _t(w){let P=document.createElement("canvas");P.width=1024,P.height=380;let I=P.getContext("2d");I.strokeStyle=w,I.shadowColor=w,I.shadowBlur=22,I.lineWidth=16,I.lineCap="round",I.lineJoin="round",[[120,1,1],[190,1,0.5],[904,-1,1],[834,-1,0.5]].forEach((V)=>{I.globalAlpha=V[2],I.beginPath(),I.moveTo(V[0]+V[1]*22,120),I.lineTo(V[0]-V[1]*22,190),I.lineTo(V[0]+V[1]*22,260),I.stroke()}),I.globalAlpha=1,I.shadowBlur=0,I.fillStyle="rgba(255,255,255,.55)",I.font="800 30px Inter,Arial,sans-serif",I.letterSpacing="8px",I.textAlign="center",I.fillText("DRAG",150,330),I.fillText("TO RUN",874,330);let M=new Mi(P);return M.colorSpace=Dt,M}let tt={};function it(w){ue=w.v||1,Se=ae[ue],pe.stops=Se.stops,pe.rough=Se.rough,pe.metal=Se.metal,pe.neon=Se.neon;let P=pe,I=new Zi,M=new de(w.acc),{pts:V,w:te}=P,G=[],Z=(ot,Ct)=>(G.push({mat:ot,kind:Ct,base:Ct==="color"?ot.color.clone():Ct==="opacity"?ot.opacity:ot.emissiveIntensity}),ot),Be=new mr;Be.moveTo(-V[0][0],V[0][1]);for(let ot=1;ot<V.length;ot++)Be.lineTo(-V[ot][0],V[ot][1]);if(Be.closePath(),!tt["geo"+ue]){let ot=new bl(Be,{depth:te-0.07,bevelEnabled:!0,bevelThickness:0.035,bevelSize:0.035,bevelOffset:-0.035,bevelSegments:l?2:6,curveSegments:l?8:24});ot.translate(0,0,-(te-0.07)/2);let Ct=ot.attributes.position,Vt=new Float32Array(Ct.count*3),fi=P.stops;for(let tr=0;tr<Ct.count;tr++){let ba=Math.min(1,Math.max(0,Ct.getY(tr)/2.1)),Ta=ba*(fi.length-1),ks=Math.min(fi.length-2,Math.floor(Ta)),Ir=new de(fi[ks]).lerp(new de(fi[ks+1]),Ta-ks);Vt[tr*3]=Ir.r,Vt[tr*3+1]=Ir.g,Vt[tr*3+2]=Ir.b}ot.setAttribute("color",new Yt(Vt,3)),tt["geo"+ue]=ot}let We=tt["geo"+ue],we=l?new ei({vertexColors:!0,roughness:0.5,metalness:0.12,envMapIntensity:1.3}):new oa({vertexColors:!0,roughness:P.rough,metalness:P.metal,clearcoat:1,clearcoatRoughness:0.12,envMapIntensity:1.3}),Fe=new et(We,Z(we,"color"));Fe.rotation.y=Math.PI/2,I.add(Fe);let De=new et(new Ri(2,2),new zt({map:q,transparent:!0,depthWrite:!1,opacity:0.9}));De.rotation.x=-Math.PI/2,De.position.y=0.006,I.add(De),I.add(Q(P.bez[0],P.bez[1],P.bez[2],0.004,new ei({color:262410,roughness:0.15,metalness:0.8})));let me=0.6,ht=Z(new zt({map:w.tex,toneMapped:!1}),"color"),Me=Q(P.scr[0],P.scr[1],me,0.009,ht);I.add(Me),I.add(Q(P.scr[0],P.scr[1],me,0.013,new zt({map:N,transparent:!0,opacity:0.9,depthWrite:!1,toneMapped:!1})));let mt=P.scr;[-1,1].forEach((ot)=>{let Ct=Q([mt[0][0],mt[0][1]-0.02],[mt[1][0],mt[1][1]+0.02],0.012,0.015,Z(oe(5213695,1.6),"color"));Ct.position.x=ot*(me/2+0.012),I.add(Ct)}),[mt[0],mt[1]].forEach((ot,Ct)=>{let Vt=Q([ot[0],ot[1]-0.006],[ot[0],ot[1]+0.006],me+0.04,0.015,Z(oe(5213695,1.6),"color"));Vt.position.set(0,ot[1]+(Ct?0.012:-0.012)*0,ot[0]+0.015),Vt.rotation.x=0,I.add(Vt)});let St=Z(new zt({map:L(w.title,w.hex),color:12105912,toneMapped:!1}),"color");I.add(Q(P.mq[0],P.mq[1],P.mq[2],0.004,St));let Ti=Q(P.deck[0],P.deck[1],0.78,0.004,new ei({color:1708080,roughness:0.3,metalness:l?0.3:0.85}));I.add(Ti);let Tt=new Zi;Tt.rotation.copy(Ti.rotation),Tt.position.copy(Ti.position),I.add(Tt);let hi=new et(new El(0.104,0.009,12,48),new ei({color:14540253,metalness:l?0.3:1,roughness:0.18}));hi.position.z=0.006,Tt.add(hi);let ut=new Zi;ut.position.z=0.01,Tt.add(ut);let Mt=new et(new Zo(0.09,0.095,0.03,48),new ei({color:M,emissive:M,emissiveIntensity:0.9,roughness:0.25}));Mt.rotation.x=Math.PI/2,Mt.position.z=0,ut.add(Mt),Z(Mt.material,"emissive");let ui=w.hero?new zt({map:b(),toneMapped:!1}):new zt({color:3814480,toneMapped:!1}),Rt=new et(new yl(0.084,48),ui);Rt.position.z=0.0165,ut.add(Rt),Z(ui,"color");let Kt={position:{z:V[1][0]+0.01}};if(!ue){let ot=new et(new Li(0.3,0.3,0.02),new ei({color:656914,roughness:0.3,metalness:l?0.3:0.9}));ot.position.set(0,0.32,V[1][0]+0.01),I.add(ot),[-0.06,0.06].forEach((Vt)=>{let fi=new et(new Li(0.02,0.1,0.01),Z(oe(w.hex,1.5),"color"));fi.position.set(Vt,0.33,ot.position.z+0.014),I.add(fi)});let Ct=new et(new Li(0.7,0.09,0.02),new ei({color:8949928,metalness:l?0.2:0.7,roughness:0.35}));Ct.position.set(0,0.07,ot.position.z),I.add(Ct)}else{let ot=$e(),Ct=new et(new Ri(0.668,0.62),new ei({map:ot.map,emissiveMap:ot.emi,emissive:16777215,emissiveIntensity:1.3,roughness:0.5,metalness:0.3}));Ct.position.set(0,0.31,V[1][0]+0.004),I.add(Ct);let Vt=new et(new Ri(0.78,0.297),new zt({map:_t("#"+new de(Se.neon).getHexString()),transparent:!0,depthWrite:!1,toneMapped:!1}));Vt.position.z=0.0035,Tt.add(Vt);let fi=new et(new Ri(2.2,1.5),new zt({map:W,color:Se.glow||Se.neon,transparent:!0,opacity:0.55,blending:hr,depthWrite:!1,toneMapped:!1}));fi.rotation.x=-Math.PI/2,fi.position.set(0,0.012,0.15),I.add(fi),Z(fi.material,"opacity")}let Hi=te/2+0.012;[-1,1].forEach((ot)=>{let Ct=new As;for(let Vt=0;Vt<V.length;Vt++){let fi=V[Vt],tr=V[(Vt+1)%V.length];Ct.add(new Qo(new R(ot*Hi,fi[1],fi[0]),new R(ot*Hi,tr[1],tr[0])))}if(!tt.tube)tt.tube={};if(!tt.tube[ot])tt.tube[ot]=new sa(Ct,V.length*(l?3:8),0.007,5,!0);if(ue){if(!tt.tube2)tt.tube2={};if(!tt.tube2[ot])tt.tube2[ot]=new sa(Ct,V.length*(l?3:8),0.016,6,!0);let Vt=new et(tt.tube2[ot],new ei({color:328968,roughness:0.25,metalness:0.6}));Vt.position.x=-ot*0.004,I.add(Vt)}I.add(new et(tt.tube[ot],Z(oe(P.neon,1.7),"color")))});let Nn=new Tl(Be,24);Nn.computeBoundingBox();let cr=Nn.boundingBox,Hs=ue?Ne(w.hex):g(w.hex,w.title);if(Hs.repeat.set(1/(cr.max.x-cr.min.x),1/(cr.max.y-cr.min.y)),Hs.offset.set(-cr.min.x/(cr.max.x-cr.min.x),-cr.min.y/(cr.max.y-cr.min.y)),[-1,1].forEach((ot)=>{let Ct=new et(Nn,Z(ue?new ei({map:Hs,emissiveMap:Hs,emissive:16777215,emissiveIntensity:0.5,roughness:0.32,metalness:0.2,side:mi}):new zt({map:Hs,transparent:!0,side:mi,depthWrite:!1,toneMapped:!1,polygonOffset:!0,polygonOffsetFactor:-2}),"color"));if(Ct.rotation.y=ot*Math.PI/2,ot<0)Ct.scale.x=-1;Ct.position.x=ot*(te/2+0.006),I.add(Ct)}),l){let ot=(Ct,Vt,fi,tr,ba,Ta)=>{let ks=Z(new Gr({map:W,color:Ct,transparent:!0,opacity:Ta,blending:hr,depthWrite:!1,depthTest:!1,fog:!1}),"opacity"),Ir=new Ss(ks);return Ir.position.set(Vt,fi,tr),Ir.scale.set(ba,ba*0.7,1),I.add(Ir),Ir};ot(w.hex,0,1.78,0.3,1.5,0.55),ot(w.hex,0,0.86,0.36,0.5,0.6)}return I.userData={hero:!!w.hero,mqBase:new de(12105912),dimMats:G,mqMat:St,btnG:ut,bt:Mt,decal:Rt,scr:Me,deckBd:Tt},I}x.add(new fa(9075455,3151946,0.9));let gt=new An(12570879,1.1);gt.position.set(-4,6,5),x.add(gt);let le=new da(16766704,l?0:60,12,0.5,0.6,1.5);le.position.set(0,5,3.5),le.target.position.set(0,1,0);let xe=new Ar(16732070,0,7,2);if(xe.position.set(0,0.4,0.3),!l){let w=new Ar(16732070,40,9,2);w.position.set(1.6,0.6,2.4),x.add(w);let P=new Ar(5213695,30,9,2);P.position.set(-2.2,1.4,2.4),x.add(P),x.add(le,le.target,xe)}else{let w=new An(16732070,1.1);w.position.set(4,2,3),x.add(w);let P=new An(5213695,0.9);P.position.set(-4,2,3),x.add(P)}let _e=new Ss(new Gr({map:W,color:16732070,transparent:!0,opacity:0,blending:hr,depthWrite:!1,fog:!1}));if(_e.scale.set(7,3.5,1),_e.position.set(0,0.5,0.6),l)x.add(_e);let Ue=[["GAME 04",5213695,3,"Coming soon"],["GAME 02",2868384,1,"Coming soon"],["DRIPPY",16732070,0,"Survive the rain"],["GAME 03",11691775,2,"Coming soon"],["GAME 05",2868384,2,"Coming soon"]],ve=2,Ye=Ue.map((w,P)=>{let I="#"+w[1].toString(16).padStart(6,"0"),M=it({acc:w[1],hex:I,title:w[0],tex:w[2]===0?ne:C(w[2],I),hero:P===ve,v:[3,2,1,4,5][P]});return x.add(M),M}),Xe=()=>{let w=t.getBoundingClientRect();return{w:Math.max(2,Math.round(w.width)),h:Math.max(2,Math.round(w.height))}},Ve=Xe();d.setPixelRatio(a?1:l?Math.min(devicePixelRatio||1,2):Math.min(devicePixelRatio||1,1.5)),d.setSize(Ve.w,Ve.h,!1);let nt,vt;if(!l){let w=new Pt(Ve.w,Ve.h,{type:Lt,samples:0});nt=new nh(d,w),nt.addPass(new sh(x,y)),vt=new In(new J(Ve.w/2,Ve.h/2),0.42,0.45,0.92),nt.addPass(vt),nt.addPass(new oh)}else nt={render:()=>d.render(x,y),setSize:()=>{}},vt={strength:0};let O=1.78,Gt=1.95,lt=6.2,Ft=1.2,Re=1;function bt(){Ve=Xe(),O=Ve.w/Ve.h,d.setSize(Ve.w,Ve.h,!1),nt.setSize(Ve.w,Ve.h),y.aspect=O,y.updateProjectionMatrix();let w=Math.min(O,1.7);lt=5.1;let P=lt*0.536*O;if(Gt=Math.max(3.9,P*0.5+1.4),O<1)lt=5.7,Ft=1.15,Re=0.98,Gt=2.6;else Ft=1.2,Re=1}bt();let je=Ve.w,st=Ve.h;new ResizeObserver(()=>{let w=Xe();if(Math.abs(w.w-je)<3&&Math.abs(w.h-st)<3)return;je=w.w,st=w.h,bt()}).observe(t);let pt=ve,A=ve,_=0,H=0,he=null,ce=-1,ye=null,Ae=!1,K=0,se=0,Te=[0.12,0.12,0.2,0.12,0.12],F=(w)=>Math.max(0.3,1-0.45*Math.abs(w)),ie={hover:!1,press:!1};function j(w){let P=Math.abs(w),I=Math.sign(w);return{x:w*Gt,z:-(0.8*Math.min(P,3)+0.2*Math.max(0,Math.min(P,3)-1)),sc:1-0.08*Math.min(P,3),ry:-0.3*Math.max(0,1-P)-I*Math.min(1,P)*0.2-(P>1?I*0.05*(P-1):0)}}let ge=[1,0.2,1,0.55,0.12,1,1,0.4,1,0.7];function be(w){let P=w%11.7;if(P>9.6&&P<10.5)return ge[Math.floor(P*14)%ge.length];if(P>4.2&&P<4.34)return 0.3;if(P>4.5&&P<4.58)return 0.5;return 1}function Ce(w,P){let I=w.userData,M=Math.abs((I.lastK||-1)-P)>=0.003;if(I.hero&&!u){let V=be(performance.now()/1000);if(M||V!==I.lastF){if(!M)I.mqMat.color.copy(I.mqBase).multiplyScalar(P*V)}if(I.lastF=V,M)I.lastK=P,I.dimMats.forEach((te)=>{if(te.kind==="color")te.mat.color.copy(te.base).multiplyScalar(P);else if(te.kind==="opacity")te.mat.opacity=te.base*P;else te.mat.emissiveIntensity=te.base*P}),I.mqMat.color.copy(I.mqBase).multiplyScalar(P*V);return}if(!M)return;w.userData.lastK=P,w.userData.dimMats.forEach((V)=>{if(V.kind==="color")V.mat.color.copy(V.base).multiplyScalar(P);else if(V.kind==="opacity")V.mat.opacity=V.base*P;else V.mat.emissiveIntensity=V.base*P})}let He=[[0.36,0,1,1],[0.42,0,1.09,0.88],[0.54,0.4,0.98,1.03],[0.66,0,1.03,0.97],[0.8,0.07,1,1],[1,0,1,1]];function qe(w){let P=w/1.7;if(P<=0)return{y:12,sx:1,sy:1};if(P<0.36){let te=P/0.36;return{y:12*(1-te*te),sx:1,sy:1}}if(P>=1)return{y:0,sx:1,sy:1};let I=He[0],M=He[1];for(let te=0;te<He.length-1;te++)if(P>=He[te][0]&&P<He[te+1][0]){I=He[te],M=He[te+1];break}let V=(P-I[0])/(M[0]-I[0]);return V=V*V*(3-2*V),{y:I[1]+(M[1]-I[1])*V,sx:I[2]+(M[2]-I[2])*V,sy:I[3]+(M[3]-I[3])*V}}let Pe=0.612,ke=0;function ft(w){if(u){for(let P=0;P<5;P++)Te[P]=1;he=-1e9,ce=99;return}he=w,ce=0,ke=0,s.intro=performance.now()}function Le(w,P){let I=w-P*9;return Math.exp(-I*I/1.6)*Math.exp(-P*0.9)}let wt=!0;new IntersectionObserver((w)=>{wt=w[0].isIntersecting}).observe(t);let Jt=new R,bi=new R,Fs=new R,Xl=new R;function Bs(w,P){return bi.copy(P),w.localToWorld(bi),bi.project(y),[(bi.x*0.5+0.5)*Ve.w,(-bi.y*0.5+0.5)*Ve.h]}let ci=h("hallStart"),lr=h("hallName"),Ln=h("hallSub"),Os=h("hallIdx"),zs=h("hallPrevN"),Kr=h("hallNextN"),Gs=h("hallPrev"),Vs=h("hallNext"),Cr=h("hallPips");function Dn(){let w=Ue[pt];if(lr)lr.textContent=w[0];if(Ln)Ln.textContent=w[3];if(Os)Os.textContent="0"+(pt+1)+" / 05";if(Gs){if(Gs.hidden=pt<=0,zs&&pt>0)zs.textContent=Ue[pt-1][0]}if(Vs){if(Vs.hidden=pt>=4,Kr&&pt<4)Kr.textContent=Ue[pt+1][0]}if(Cr)Array.prototype.forEach.call(Cr.children,(P,I)=>P.classList.toggle("on",I===pt));if(ci)ci.disabled=pt!==ve,ci.hidden=pt!==ve;f.dataset.hall=pt===ve?"on":"off";try{window.dispatchEvent(new CustomEvent("hallchange",{detail:{index:pt,name:w[0],hero:pt===ve}}))}catch(P){}}function Pr(w){let P=Math.max(0,Math.min(4,pt+w));if(P!==pt)pt=P,Dn()}Dn(),h("hallPrev")&&h("hallPrev").addEventListener("click",()=>Pr(-1)),h("hallNext")&&h("hallNext").addEventListener("click",()=>Pr(1)),h("hallScore")&&h("hallScore").addEventListener("click",()=>document.querySelector('#switch [data-mode="score"]').click()),h("hallRules")&&h("hallRules").addEventListener("click",()=>document.querySelector('#switch [data-mode="rules"]').click()),window.addEventListener("keydown",(w)=>{if(f.classList.contains("big")||f.classList.contains("fs")||w.target.tagName==="INPUT")return;if(document.querySelector(".rmodal:not([hidden])"))return;if(w.key==="ArrowLeft")Pr(-1);if(w.key==="ArrowRight")Pr(1)});let er=null;if(t.addEventListener("pointerdown",(w)=>{if(w.target.closest("button, a"))return;er={x:w.clientX,y:w.clientY,m:!1}}),window.addEventListener("pointermove",(w)=>{if(H=(w.clientX/innerWidth-0.5)*2,er&&Math.abs(w.clientX-er.x)>8)er.m=!0}),window.addEventListener("pointerup",(w)=>{if(!er)return;let P=w.clientX-er.x,I=er.m;if(er=null,I&&Math.abs(P)>40){Pr(P<0?1:-1);return}if(!I){let M=t.getBoundingClientRect(),V=-1,te=1e9;if(Ye.forEach((G,Z)=>{let Be=Bs(G,new R(0,1,0)),We=Math.abs(Be[0]+M.left-w.clientX);if(We<te)te=We,V=Z}),V>=0&&V!==pt&&te<Ve.w*0.12)pt=V,Dn()}}),ci)ci.addEventListener("pointerenter",()=>{ie.hover=!0}),ci.addEventListener("pointerleave",()=>{ie.hover=!1,ie.press=!1}),ci.addEventListener("pointerdown",()=>{ie.press=!0}),window.addEventListener("pointerup",()=>{ie.press=!1}),ci.addEventListener("click",()=>h("btnStart").click());function ql(){let w=Ye[ve];w.updateMatrixWorld(!0);let P=[[-0.3,0.95,0.21],[0.3,0.95,0.21],[-0.3,1.55,0.12],[0.3,1.55,0.12]].map((We)=>Bs(w,new R(We[0],We[1],We[2]))),I=P.map((We)=>We[0]),M=P.map((We)=>We[1]),V=t.getBoundingClientRect(),te=Math.min(...I)+V.left,G=Math.min(...M)+V.top,Z=Math.max(...I)+V.left,Be=Math.max(...M)+V.top;return{left:te,top:G,width:Z-te,height:Be-G,right:Z,bottom:Be,x:te,y:G}}window.__hall={ready:!0,screenRect:ql,heroActive:()=>pt===ve,replay:()=>{for(let w=0;w<5;w++)Te[w]=w===ve?0.2:0.12;ft(performance.now())},setActive:(w)=>{pt=w,Dn()},instant:()=>{A=pt},seek:(w)=>{if(ye=w,he===null)he=performance.now()}};let ya=performance.now(),Ma=0,Sa=0,v=0,B=0,Y=0,k=!1;function X(w){requestAnimationFrame(X);let P=Math.min(0.05,(w-ya)/1000);if(ya=w,!s.f1)s.f1=performance.now();if(document.hidden||!wt||f.classList.contains("big")||f.classList.contains("fs"))return;let I=he===null||he!==-1e9&&K<6||Ae;if(!I&&Sa++&1)return;if(I)T=!1;if(l&&!I&&!k){if(v){if(B+=Math.min(100,w-v),++Y>=45){if(k=!0,B/Y>50&&d.getPixelRatio()>1)d.setPixelRatio(1),d.setSize(Ve.w,Ve.h,!1),nt.setSize(Ve.w,Ve.h)}}v=w}if(he===null&&se>2&&f.classList.contains("cabvis"))ft(w);if(he!==null&&ye===null&&se>2)K+=P;if(he===null)K=0;let M=he===null?-1:ye!==null?ye:K;if(ce=M,A+=(pt-A)*Math.min(1,P*7),w-Ma>(l?120:66))Ma=w,re(w/1000);let V=he===null;Ye.forEach((We,we)=>{let Fe=we-A,De=j(Fe),me=0,ht=1,Me=1;if(we===ve){if(V)me=0,ht=Me=0.001;else if(M<1.7&&!u){let Mt=qe(M);me=Mt.y,ht=Mt.sx,Me=Mt.sy}}let mt=0,St=Math.hypot(De.x,De.z-j(ve-A).z),Ti=j(ve-A).x;if(St=Math.hypot(De.x-Ti,De.z-j(ve-A).z),!V&&M>Pe&&we!==ve&&!u)mt=Math.max(0,0.09*Le(St,M-Pe)*Math.sin((St-(M-Pe)*9)*2));We.position.set(De.x,me+mt,De.z),We.scale.set(De.sc*ht,De.sc*Me,De.sc*ht),We.rotation.y=De.ry;let Tt;if(u||M>6||M<0&&!1)Tt=1;else if(V)Tt=we===ve?0.2:0.12;else if(we===ve){if(Tt=M<0.6?0.2:Math.min(1,0.2+(M-0.6)/0.5*0.8),M>1.6&&M<2.8){let Mt=M-1.6;Tt=[1.5,0.3,1.4,0.4,1,1][Math.min(5,Math.floor(Mt/1.2*6))]}}else{let Mt=Pe+St/9;Tt=Math.max(0.12,Math.min(1,(M-Mt)/0.5))}Te[we]=Tt,Ce(We,F(Fe)*Tt*(we===ve?1:1));let hi=We.userData,ut=0.8+0.35*Math.sin(w/420);if(we===ve)hi.bt.material.emissiveIntensity=(ie.hover?1.2:0.45*ut)*F(Fe)*Tt,hi.btnG.position.z=ie.press?0:0.01,hi.decal.material.color.setScalar((ie.hover?0.9:0.7+0.05*Math.sin(w/420))*F(Fe)*Tt)});let te=he===null||u?-1:M-Pe;E.uAge.value=te<0||te>6?-1:te,S.uAge.value=te<0||te>5?-1:te;let G=j(ve-A);if(E.uC.value.set(G.x,G.z),window.__cracks.position.set(G.x,0,G.z),te>=0&&te<1.2)xe.intensity=110*Math.exp(-te*4.5),_e.material.opacity=0.9*Math.exp(-te*3.5),ke=Math.max(ke,te<0.08?1:ke);else xe.intensity=0,_e.material.opacity=0;ke*=Math.exp(-P*5),vt.strength=0.42+(te>=0&&te<1?0.6*Math.exp(-te*4):0),_+=(H*0.35*(O<1?0.3:1)-_)*Math.min(1,P*3);let Z=(Math.random()-0.5)*0.09*ke,Be=(Math.random()-0.5)*0.09*ke;if(y.position.set(_+Z,Ft+Be,lt),y.lookAt(_*0.3,Re+Be,0),le.position.x=G.x,le.target.position.x=G.x,_e.position.x=G.x,_e.position.z=G.z+0.6,nt.render(),se++,ci&&!ci.hidden){let We=Ye[ve];We.updateMatrixWorld(!0);let we=We.userData,Fe=Fs;we.btnG.getWorldPosition(Fe),Fe.project(y);let De=(Fe.x*0.5+0.5)*Ve.w,me=(-Fe.y*0.5+0.5)*Ve.h,ht=Xl;we.btnG.getWorldPosition(ht),ht.x+=0.1*We.scale.x*Math.cos(We.rotation.y),ht.z-=0.1*We.scale.x*Math.sin(We.rotation.y),ht.project(y);let Me=Math.max(18,Math.abs((ht.x*0.5+0.5)*Ve.w-De)*1.15);ci.style.width=ci.style.height=(Me*2).toFixed(0)+"px",ci.style.transform="translate("+(De-Me).toFixed(1)+"px,"+(me-Me).toFixed(1)+"px)",ci.style.visibility=V||M<1.9?"hidden":"visible"}}try{x.traverse((w)=>{w.frustumCulled=!1}),Ye[ve].scale.setScalar(0.001),d.compile(x,y),nt.render(),nt.render()}catch(w){}s.compiled=performance.now(),requestAnimationFrame(X),document.dispatchEvent(new Event("hallready"))}})();
