var zm=Object.defineProperty;var Gm=(e)=>e;function Vm(e,t){this[e]=Gm.bind(null,t)}var Hm=(e,t)=>{for(var i in t)zm(e,i,{get:t[i],enumerable:!0,configurable:!0,set:Vm.bind(t,i)})};var Vr={};Hm(Vr,{ArcCurve:()=>wc,CatmullRomCurve3:()=>Ic,CubicBezierCurve:()=>Zo,CubicBezierCurve3:()=>Dc,EllipseCurve:()=>Sn,LineCurve:()=>Jo,LineCurve3:()=>Ko,QuadraticBezierCurve:()=>Qo,QuadraticBezierCurve3:()=>$o,SplineCurve:()=>jo});var ks="187";var hh=0,Zl=1,uh=2;var Nn=1,fh=2,jr=3,ki=0,Ot=1,xi=2,Wi=0,Ir=1,hr=2,Jl=3,Kl=4,dh=5;var Lr=100,ph=101,mh=102,gh=103,xh=104,_h=200,vh=201,yh=202,Mh=203,Ea=204,wa=205,Sh=206,bh=207,Th=208,Eh=209,wh=210,Ah=211,Rh=212,Ch=213,Ph=214,Ws=0,Xs=1,qs=2,Dr=3,Ys=4,Zs=5,Js=6,Ks=7,en=0,Ih=1,Lh=2,Di=0,Un=1,Fn=2,Bn=3,Nr=4,On=5,zn=6,Gn=7;var Aa=300,Xi=301,_r=302,Qs=303,$s=304,Vn=1000,pi=1001,Hn=1002,Dt=1003,Ql=1004;var kn=1005;var Gt=1006,js=1007;var Ei=1008;var Zt=1009,Ra=1010,Ca=1011,vr=1012,Wn=1013,jt=1014,Jt=1015,Pt=1016,Xn=1017,qn=1018,tr=1020,Pa=35902,Ia=35899,La=1021,Da=1022,li=1023,Pi=1026,Ni=1027,Yn=1028,tn=1029,Ui=1030,Zn=1031;var Jn=1033,Kn=33776,Qn=33777,$n=33778,jn=33779,eo=35840,to=35841,io=35842,ro=35843,no=36196,so=37492,oo=37496,ao=37488,lo=37489,rn=37490,co=37491,ho=37808,uo=37809,fo=37810,po=37811,mo=37812,go=37813,xo=37814,_o=37815,vo=37816,yo=37817,Mo=37818,So=37819,bo=37820,To=37821,Eo=36492,wo=36494,Ao=36495,Ro=36283,Co=36284,nn=36285,Po=36286;var sn=2300,Na=2301,Ua=2302,$l=2303,Fa=2400,Ba=2401,Oa=2402;var Dh=3200;var ir=0,Nh=1,qi="",Lt="srgb",on="srgb-linear",an="linear",_t="srgb";var za=7680;var Uh=519,Fh=512,Bh=513,Oh=514,Ga=515,zh=516,Gh=517,Va=518,Ha=519,Io=35044;var jl="300 es",ci=2000,ur=2001;function Hh(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function ec(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function ln(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function tc(){let e=ln("canvas");return e.style.display="block",e}var Vh={},es=null;function cn(...e){let t="THREE."+e.shift();if(es)es("log",t,...e);else console.log(t,...e)}function kh(e){let t=e[0];if(typeof t==="string"&&t.startsWith("TSL:")){let i=e[1];if(i&&i.isStackTrace)e[0]+=" "+i.getLocation();else e[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return e}function Te(...e){e=kh(e);let t="THREE."+e.shift();if(es)es("warn",t,...e);else{let i=e[0];if(i&&i.isStackTrace)console.warn(i.getError(t));else console.warn(t,...e)}}function Ge(...e){e=kh(e);let t="THREE."+e.shift();if(es)es("error",t,...e);else{let i=e[0];if(i&&i.isStackTrace)console.error(i.getError(t));else console.error(t,...e)}}function Yi(...e){let t=e.join(" ");if(t in Vh)return;Vh[t]=!0,Te(...e)}function Wh(e,t,i){return new Promise(function(r,n){function s(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:n();break;case e.TIMEOUT_EXPIRED:setTimeout(s,i);break;default:r()}}setTimeout(s,i)})}var Xh={[Ws]:Ws,[qs]:Js,[Ys]:Ys,[Dr]:Zs,[Xs]:Xs,[Js]:qs,[Ks]:Ks,[Zs]:Dr};class ei{addEventListener(e,t){if(this._listeners===void 0)this._listeners={};let i=this._listeners;if(i[e]===void 0)i[e]=[];if(i[e].indexOf(t)===-1)i[e].push(t)}hasEventListener(e,t){let i=this._listeners;if(i===void 0)return!1;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let r=i[e];if(r!==void 0){let n=r.indexOf(t);if(n!==-1)r.splice(n,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let r=i.slice(0);for(let n=0,s=r.length;n<s;n++)r[n].call(this,e);e.target=null}}}var _i=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var ts=Math.PI/180,hn=180/Math.PI;function hi(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(_i[e&255]+_i[e>>8&255]+_i[e>>16&255]+_i[e>>24&255]+"-"+_i[t&255]+_i[t>>8&255]+"-"+_i[t>>16&15|64]+_i[t>>24&255]+"-"+_i[i&63|128]+_i[i>>8&255]+"-"+_i[i>>16&255]+_i[i>>24&255]+_i[r&255]+_i[r>>8&255]+_i[r>>16&255]+_i[r>>24&255]).toLowerCase()}function st(e,t,i){return Math.max(t,Math.min(i,e))}function qh(e,t){return(e%t+t)%t}function ka(e,t,i){return(1-i)*e+i*t}function Yh(e){return Math.pow(2,Math.floor(Math.log(e)/Math.LN2))}function is(e){switch(e.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Wa(e,t){if(t.constructor===Float32Array)return e;let i=is(t);if(i===void 0)throw Error("THREE.MathUtils: Invalid component type.");return Math.max(e/i,-1)}function Xa(e,t){if(t.constructor===Float32Array)return e;let i=is(t);if(i===void 0)throw Error("THREE.MathUtils: Invalid component type.");return Math.round(e*i)}class J{static{this.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=st(this.x,e.x,t.x),this.y=st(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=st(this.x,e,t),this.y=st(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(st(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(st(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),r=Math.sin(t),n=this.x-e.x,s=this.y-e.y;return this.x=n*i-s*r+e.x,this.y=n*r+s*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ui{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,n,s,o){let a=i[r+0],l=i[r+1],c=i[r+2],f=i[r+3],u=n[s+0],h=n[s+1],p=n[s+2],x=n[s+3];if(f!==x||a!==u||l!==h||c!==p){let y=a*u+l*h+c*p+f*x;if(y<0)u=-u,h=-h,p=-p,x=-x,y=-y;let d=1-o;if(y<0.9995){let m=Math.acos(y),b=Math.sin(m);d=Math.sin(d*m)/b,o=Math.sin(o*m)/b,a=a*d+u*o,l=l*d+h*o,c=c*d+p*o,f=f*d+x*o}else{a=a*d+u*o,l=l*d+h*o,c=c*d+p*o,f=f*d+x*o;let m=1/Math.sqrt(a*a+l*l+c*c+f*f);a*=m,l*=m,c*=m,f*=m}}e[t]=a,e[t+1]=l,e[t+2]=c,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,n,s){let o=i[r],a=i[r+1],l=i[r+2],c=i[r+3],f=n[s],u=n[s+1],h=n[s+2],p=n[s+3];return e[t]=o*p+c*f+a*h-l*u,e[t+1]=a*p+c*u+l*f-o*h,e[t+2]=l*p+c*h+o*u-a*f,e[t+3]=c*p-o*f-a*u-l*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let{_x:i,_y:r,_z:n,_order:s}=e,{cos:o,sin:a}=Math,l=o(i/2),c=o(r/2),f=o(n/2),u=a(i/2),h=a(r/2),p=a(n/2);switch(s){case"XYZ":this._x=u*c*f+l*h*p,this._y=l*h*f-u*c*p,this._z=l*c*p+u*h*f,this._w=l*c*f-u*h*p;break;case"YXZ":this._x=u*c*f+l*h*p,this._y=l*h*f-u*c*p,this._z=l*c*p-u*h*f,this._w=l*c*f+u*h*p;break;case"ZXY":this._x=u*c*f-l*h*p,this._y=l*h*f+u*c*p,this._z=l*c*p+u*h*f,this._w=l*c*f-u*h*p;break;case"ZYX":this._x=u*c*f-l*h*p,this._y=l*h*f+u*c*p,this._z=l*c*p-u*h*f,this._w=l*c*f+u*h*p;break;case"YZX":this._x=u*c*f+l*h*p,this._y=l*h*f+u*c*p,this._z=l*c*p-u*h*f,this._w=l*c*f-u*h*p;break;case"XZY":this._x=u*c*f-l*h*p,this._y=l*h*f-u*c*p,this._z=l*c*p+u*h*f,this._w=l*c*f+u*h*p;break;default:Te("Quaternion: .setFromEuler() encountered an unknown order: "+s)}if(t===!0)this._onChangeCallback();return this}setFromAxisAngle(e,t){let i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],r=t[4],n=t[8],s=t[1],o=t[5],a=t[9],l=t[2],c=t[6],f=t[10],u=i+o+f;if(u>0){let h=0.5/Math.sqrt(u+1);this._w=0.25/h,this._x=(c-a)*h,this._y=(n-l)*h,this._z=(s-r)*h}else if(i>o&&i>f){let h=2*Math.sqrt(1+i-o-f);this._w=(c-a)/h,this._x=0.25*h,this._y=(r+s)/h,this._z=(n+l)/h}else if(o>f){let h=2*Math.sqrt(1+o-i-f);this._w=(n-l)/h,this._x=(r+s)/h,this._y=0.25*h,this._z=(a+c)/h}else{let h=2*Math.sqrt(1+f-i-o);this._w=(s-r)/h,this._x=(n+l)/h,this._y=(a+c)/h,this._z=0.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;if(i<0.00000001)if(i=0,Math.abs(e.x)>Math.abs(e.z))this._x=-e.y,this._y=e.x,this._z=0,this._w=i;else this._x=0,this._y=-e.z,this._z=e.y,this._w=i;else this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i;return this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(st(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();if(e===0)this._x=0,this._y=0,this._z=0,this._w=1;else e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e;return this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let{_x:i,_y:r,_z:n,_w:s}=e,{_x:o,_y:a,_z:l,_w:c}=t;return this._x=i*c+s*o+r*l-n*a,this._y=r*c+s*a+n*o-i*l,this._z=n*c+s*l+i*a-r*o,this._w=s*c-i*o-r*a-n*l,this._onChangeCallback(),this}slerp(e,t){let{_x:i,_y:r,_z:n,_w:s}=e,o=this.dot(e);if(o<0)i=-i,r=-r,n=-n,s=-s,o=-o;let a=1-t;if(o<0.9995){let l=Math.acos(o),c=Math.sin(l);a=Math.sin(a*l)/c,t=Math.sin(t*l)/c,this._x=this._x*a+i*t,this._y=this._y*a+r*t,this._z=this._z*a+n*t,this._w=this._w*a+s*t,this._onChangeCallback()}else this._x=this._x*a+i*t,this._y=this._y*a+r*t,this._z=this._z*a+n*t,this._w=this._w*a+s*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),n=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),n*Math.sin(t),n*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class R{static{this.prototype.isVector3=!0}constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){if(i===void 0)i=this.z;return this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Zh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Zh.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,r=this.z,n=e.elements;return this.x=n[0]*t+n[3]*i+n[6]*r,this.y=n[1]*t+n[4]*i+n[7]*r,this.z=n[2]*t+n[5]*i+n[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,n=e.elements,s=1/(n[3]*t+n[7]*i+n[11]*r+n[15]);return this.x=(n[0]*t+n[4]*i+n[8]*r+n[12])*s,this.y=(n[1]*t+n[5]*i+n[9]*r+n[13])*s,this.z=(n[2]*t+n[6]*i+n[10]*r+n[14])*s,this}applyQuaternion(e){let t=this.x,i=this.y,r=this.z,{x:n,y:s,z:o,w:a}=e,l=2*(s*r-o*i),c=2*(o*t-n*r),f=2*(n*i-s*t);return this.x=t+a*l+s*f-o*c,this.y=i+a*c+o*l-n*f,this.z=r+a*f+n*c-s*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,r=this.z,n=e.elements;return this.x=n[0]*t+n[4]*i+n[8]*r,this.y=n[1]*t+n[5]*i+n[9]*r,this.z=n[2]*t+n[6]*i+n[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=st(this.x,e.x,t.x),this.y=st(this.y,e.y,t.y),this.z=st(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=st(this.x,e,t),this.y=st(this.y,e,t),this.z=st(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(st(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let{x:i,y:r,z:n}=e,{x:s,y:o,z:a}=t;return this.x=r*a-n*o,this.y=n*s-i*a,this.z=i*o-r*s,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ic.copy(this).projectOnVector(e),this.sub(ic)}reflect(e){return this.sub(ic.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(st(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}var ic=new R,Zh=new ui;class et{static{this.prototype.isMatrix3=!0}constructor(e,t,i,r,n,s,o,a,l){if(this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0)this.set(e,t,i,r,n,s,o,a,l)}set(e,t,i,r,n,s,o,a,l){let c=this.elements;return c[0]=e,c[1]=r,c[2]=o,c[3]=t,c[4]=n,c[5]=a,c[6]=i,c[7]=s,c[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,n=this.elements,s=i[0],o=i[3],a=i[6],l=i[1],c=i[4],f=i[7],u=i[2],h=i[5],p=i[8],x=r[0],y=r[3],d=r[6],m=r[1],b=r[4],E=r[7],M=r[2],I=r[5],L=r[8];return n[0]=s*x+o*m+a*M,n[3]=s*y+o*b+a*I,n[6]=s*d+o*E+a*L,n[1]=l*x+c*m+f*M,n[4]=l*y+c*b+f*I,n[7]=l*d+c*E+f*L,n[2]=u*x+h*m+p*M,n[5]=u*y+h*b+p*I,n[8]=u*d+h*E+p*L,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],r=e[2],n=e[3],s=e[4],o=e[5],a=e[6],l=e[7],c=e[8];return t*s*c-t*o*l-i*n*c+i*o*a+r*n*l-r*s*a}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],n=e[3],s=e[4],o=e[5],a=e[6],l=e[7],c=e[8],f=c*s-o*l,u=o*a-c*n,h=l*n-s*a,p=t*f+i*u+r*h;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/p;return e[0]=f*x,e[1]=(r*l-c*i)*x,e[2]=(o*i-r*s)*x,e[3]=u*x,e[4]=(c*t-r*a)*x,e[5]=(r*n-o*t)*x,e[6]=h*x,e[7]=(i*a-l*t)*x,e[8]=(s*t-i*n)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,n,s,o){let a=Math.cos(n),l=Math.sin(n);return this.set(i*a,i*l,-i*(a*s+l*o)+s+e,-r*l,r*a,-r*(-l*s+a*o)+o+t,0,0,1),this}scale(e,t){return Yi("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(rc.makeScale(e,t)),this}rotate(e){return Yi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(rc.makeRotation(-e)),this}translate(e,t){return Yi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(rc.makeTranslation(e,t)),this}makeTranslation(e,t){if(e.isVector2)this.set(1,0,e.x,0,1,e.y,0,0,1);else this.set(1,0,e,0,1,t,0,0,1);return this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}var rc=new et;var Jh=new et().set(0.4123908,0.3575843,0.1804808,0.212639,0.7151687,0.0721923,0.0193308,0.1191948,0.9505322),Kh=new et().set(3.2409699,-1.5373832,-0.4986108,-0.9692436,1.8759675,0.0415551,0.0556301,-0.203977,1.0569715);function km(){let e={enabled:!0,workingColorSpace:on,spaces:{},convert:function(n,s,o){if(this.enabled===!1||s===o||!s||!o)return n;if(this.spaces[s].transfer===_t)n.r=rr(n.r),n.g=rr(n.g),n.b=rr(n.b);if(this.spaces[s].primaries!==this.spaces[o].primaries)n.applyMatrix3(this.spaces[s].toXYZ),n.applyMatrix3(this.spaces[o].fromXYZ);if(this.spaces[o].transfer===_t)n.r=un(n.r),n.g=un(n.g),n.b=un(n.b);return n},workingToColorSpace:function(n,s){return this.convert(n,this.workingColorSpace,s)},colorSpaceToWorking:function(n,s){return this.convert(n,s,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){if(n===qi)return an;return this.spaces[n].transfer},getToneMappingMode:function(n){return this.spaces[n].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(n,s=this.workingColorSpace){return n.fromArray(this.spaces[s].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,s,o){return n.copy(this.spaces[o].fromXYZ).multiply(this.spaces[s].toXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}},t=[0.64,0.33,0.3,0.6,0.15,0.06],i=[0.2126,0.7152,0.0722],r=[0.3127,0.329];return e.define({[on]:{primaries:t,whitePoint:r,transfer:an,toXYZ:Jh,fromXYZ:Kh,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Lt},outputColorSpaceConfig:{drawingBufferColorSpace:Lt}},[Lt]:{primaries:t,whitePoint:r,transfer:_t,toXYZ:Jh,fromXYZ:Kh,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Lt}}}),e}var ht=km();function rr(e){return e<0.04045?e*0.0773993808:Math.pow(e*0.9478672986+0.0521327014,2.4)}function un(e){return e<0.0031308?e*12.92:1.055*Math.pow(e,0.41666)-0.055}var rs;class qa{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src))return e.src;if(typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{if(rs===void 0)rs=ln("canvas");rs.width=e.width,rs.height=e.height;let r=rs.getContext("2d");if(e instanceof ImageData)r.putImageData(e,0,0);else r.drawImage(e,0,0,e.width,e.height);i=rs}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=ln("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let r=i.getImageData(0,0,e.width,e.height),n=r.data;for(let s=0;s<n.length;s++)n[s]=rr(n[s]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)if(t instanceof Uint8Array||t instanceof Uint8ClampedArray)t[i]=Math.floor(rr(t[i]/255)*255);else t[i]=rr(t[i]);return{data:t,width:e.width,height:e.height}}else return Te("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}var Wm=0;class fr{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Wm++}),this.uuid=hi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;if(typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement)e.set(t.videoWidth,t.videoHeight,0);else if(typeof VideoFrame<"u"&&t instanceof VideoFrame)e.set(t.displayWidth,t.displayHeight,0);else if(t!==null)e.set(t.width||0,t.height||0,t.depth||0);else e.set(0,0,0);return e}set needsUpdate(e){if(e===!0)this.version++}toJSON(e){let t=e===void 0||typeof e==="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let n;if(Array.isArray(r)){n=[];for(let s=0,o=r.length;s<o;s++)if(r[s].isDataTexture)n.push(nc(r[s].image));else n.push(nc(r[s]))}else n=nc(r);i.url=n}if(!t)e.images[this.uuid]=i;return i}}function nc(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap)return qa.getDataURL(e);else if(e.data)return{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name};else return Te("Texture: Unable to serialize Texture."),{}}var Xm=0,sc=new R;class Tt extends ei{constructor(e=Tt.DEFAULT_IMAGE,t=Tt.DEFAULT_MAPPING,i=pi,r=pi,n=Gt,s=Ei,o=li,a=Zt,l=Tt.DEFAULT_ANISOTROPY,c=qi){super();this.isTexture=!0,Object.defineProperty(this,"id",{value:Xm++}),this.uuid=hi(),this.name="",this.source=new fr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=n,this.minFilter=s,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=a,this.offset=new J(0,0),this.repeat=new J(1,1),this.center=new J(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new et,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=e&&e.depth&&e.depth>1?!0:!1,this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(sc).x}get height(){return this.source.getSize(sc).y}get depth(){return this.source.getSize(sc).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){Te(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){Te(`Texture.setValues(): property '${t}' does not exist.`);continue}if(r&&i&&(r.isVector2&&i.isVector2))r.copy(i);else if(r&&i&&(r.isVector3&&i.isVector3))r.copy(i);else if(r&&i&&(r.isMatrix3&&i.isMatrix3))r.copy(i);else this[t]=i}}toJSON(e){let t=e===void 0||typeof e==="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(Object.keys(this.userData).length>0)i.userData=this.userData;if(!t)e.textures[this.uuid]=i;return i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Aa)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Vn:e.x=e.x-Math.floor(e.x);break;case pi:e.x=e.x<0?0:1;break;case Hn:if(Math.abs(Math.floor(e.x)%2)===1)e.x=Math.ceil(e.x)-e.x;else e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Vn:e.y=e.y-Math.floor(e.y);break;case pi:e.y=e.y<0?0:1;break;case Hn:if(Math.abs(Math.floor(e.y)%2)===1)e.y=Math.ceil(e.y)-e.y;else e.y=e.y-Math.floor(e.y);break}if(this.flipY)e.y=1-e.y;return e}set needsUpdate(e){if(e===!0)this.version++,this.source.needsUpdate=!0}set needsPMREMUpdate(e){if(e===!0)this.pmremVersion++}}Tt.DEFAULT_IMAGE=null;Tt.DEFAULT_MAPPING=Aa;Tt.DEFAULT_ANISOTROPY=1;class St{static{this.prototype.isVector4=!0}constructor(e=0,t=0,i=0,r=1){this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,n=this.w,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r+s[12]*n,this.y=s[1]*t+s[5]*i+s[9]*r+s[13]*n,this.z=s[2]*t+s[6]*i+s[10]*r+s[14]*n,this.w=s[3]*t+s[7]*i+s[11]*r+s[15]*n,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);if(t<0.0001)this.x=1,this.y=0,this.z=0;else this.x=e.x/t,this.y=e.y/t,this.z=e.z/t;return this}setAxisAngleFromRotationMatrix(e){let t,i,r,n,s=0.01,o=0.1,a=e.elements,l=a[0],c=a[4],f=a[8],u=a[1],h=a[5],p=a[9],x=a[2],y=a[6],d=a[10];if(Math.abs(c-u)<0.01&&Math.abs(f-x)<0.01&&Math.abs(p-y)<0.01){if(Math.abs(c+u)<0.1&&Math.abs(f+x)<0.1&&Math.abs(p+y)<0.1&&Math.abs(l+h+d-3)<0.1)return this.set(1,0,0,0),this;t=Math.PI;let b=(l+1)/2,E=(h+1)/2,M=(d+1)/2,I=(c+u)/4,L=(f+x)/4,g=(p+y)/4;if(b>E&&b>M)if(b<0.01)i=0,r=0.707106781,n=0.707106781;else i=Math.sqrt(b),r=I/i,n=L/i;else if(E>M)if(E<0.01)i=0.707106781,r=0,n=0.707106781;else r=Math.sqrt(E),i=I/r,n=g/r;else if(M<0.01)i=0.707106781,r=0.707106781,n=0;else n=Math.sqrt(M),i=L/n,r=g/n;return this.set(i,r,n,t),this}let m=Math.sqrt((y-p)*(y-p)+(f-x)*(f-x)+(u-c)*(u-c));if(Math.abs(m)<0.001)m=1;return this.x=(y-p)/m,this.y=(f-x)/m,this.z=(u-c)/m,this.w=Math.acos((l+h+d-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=st(this.x,e.x,t.x),this.y=st(this.y,e.y,t.y),this.z=st(this.z,e.z,t.z),this.w=st(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=st(this.x,e,t),this.y=st(this.y,e,t),this.z=st(this.z,e,t),this.w=st(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(st(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Lo extends ei{constructor(e=1,t=1,i={}){super();i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Gt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new St(0,0,e,t),this.scissorTest=!1,this.viewport=new St(0,0,e,t),this.textures=[];let r=i.count;for(let n=0;n<r;n++)this.textures[n]=new Tt({width:e,height:t,depth:i.depth}),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Gt,generateMipmaps:!1,flipY:!1,internalFormat:null};if(e.mapping!==void 0)t.mapping=e.mapping;if(e.wrapS!==void 0)t.wrapS=e.wrapS;if(e.wrapT!==void 0)t.wrapT=e.wrapT;if(e.wrapR!==void 0)t.wrapR=e.wrapR;if(e.magFilter!==void 0)t.magFilter=e.magFilter;if(e.minFilter!==void 0)t.minFilter=e.minFilter;if(e.format!==void 0)t.format=e.format;if(e.type!==void 0)t.type=e.type;if(e.anisotropy!==void 0)t.anisotropy=e.anisotropy;if(e.colorSpace!==void 0)t.colorSpace=e.colorSpace;if(e.flipY!==void 0)t.flipY=e.flipY;if(e.generateMipmaps!==void 0)t.generateMipmaps=e.generateMipmaps;if(e.mipmapsAutoUpdate!==void 0)t.mipmapsAutoUpdate=e.mipmapsAutoUpdate;if(e.internalFormat!==void 0)t.internalFormat=e.internalFormat;for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){if(this._depthTexture!==null&&this._depthTexture.renderTarget===this)this._depthTexture.renderTarget=null;if(e!==null&&e.renderTarget===null)e.renderTarget=this;this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,n=this.textures.length;r<n;r++)if(this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0)this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let r=Object.assign({},e.textures[t].image);this.textures[t].source=new fr(r)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Rt extends Lo{constructor(e=1,t=1,i={}){super(e,t,i);this.isWebGLRenderTarget=!0}}class fn extends Tt{constructor(e=null,t=1,i=1,r=1){super(null);this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Dt,this.minFilter=Dt,this.wrapR=pi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class ns extends Tt{constructor(e=null,t=1,i=1,r=1){super(null);this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Dt,this.minFilter=Dt,this.wrapR=pi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}class Je{static{this.prototype.isMatrix4=!0}constructor(e,t,i,r,n,s,o,a,l,c,f,u,h,p,x,y){if(this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0)this.set(e,t,i,r,n,s,o,a,l,c,f,u,h,p,x,y)}set(e,t,i,r,n,s,o,a,l,c,f,u,h,p,x,y){let d=this.elements;return d[0]=e,d[4]=t,d[8]=i,d[12]=r,d[1]=n,d[5]=s,d[9]=o,d[13]=a,d[2]=l,d[6]=c,d[10]=f,d[14]=u,d[3]=h,d[7]=p,d[11]=x,d[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Je().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){if(this.determinantAffine()===0)return e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this;return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,i=e.elements,r=1/ss.setFromMatrixColumn(e,0).length(),n=1/ss.setFromMatrixColumn(e,1).length(),s=1/ss.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*n,t[5]=i[5]*n,t[6]=i[6]*n,t[7]=0,t[8]=i[8]*s,t[9]=i[9]*s,t[10]=i[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,{x:i,y:r,z:n}=e,s=Math.cos(i),o=Math.sin(i),a=Math.cos(r),l=Math.sin(r),c=Math.cos(n),f=Math.sin(n);if(e.order==="XYZ"){let u=s*c,h=s*f,p=o*c,x=o*f;t[0]=a*c,t[4]=-a*f,t[8]=l,t[1]=h+p*l,t[5]=u-x*l,t[9]=-o*a,t[2]=x-u*l,t[6]=p+h*l,t[10]=s*a}else if(e.order==="YXZ"){let u=a*c,h=a*f,p=l*c,x=l*f;t[0]=u+x*o,t[4]=p*o-h,t[8]=s*l,t[1]=s*f,t[5]=s*c,t[9]=-o,t[2]=h*o-p,t[6]=x+u*o,t[10]=s*a}else if(e.order==="ZXY"){let u=a*c,h=a*f,p=l*c,x=l*f;t[0]=u-x*o,t[4]=-s*f,t[8]=p+h*o,t[1]=h+p*o,t[5]=s*c,t[9]=x-u*o,t[2]=-s*l,t[6]=o,t[10]=s*a}else if(e.order==="ZYX"){let u=s*c,h=s*f,p=o*c,x=o*f;t[0]=a*c,t[4]=p*l-h,t[8]=u*l+x,t[1]=a*f,t[5]=x*l+u,t[9]=h*l-p,t[2]=-l,t[6]=o*a,t[10]=s*a}else if(e.order==="YZX"){let u=s*a,h=s*l,p=o*a,x=o*l;t[0]=a*c,t[4]=x-u*f,t[8]=p*f+h,t[1]=f,t[5]=s*c,t[9]=-o*c,t[2]=-l*c,t[6]=h*f+p,t[10]=u-x*f}else if(e.order==="XZY"){let u=s*a,h=s*l,p=o*a,x=o*l;t[0]=a*c,t[4]=-f,t[8]=l*c,t[1]=u*f+x,t[5]=s*c,t[9]=h*f-p,t[2]=p*f-h,t[6]=o*c,t[10]=x*f+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(qm,e,Ym)}lookAt(e,t,i){let r=this.elements;if(Fi.subVectors(e,t),Fi.lengthSq()===0)Fi.z=1;if(Fi.normalize(),Ur.crossVectors(i,Fi),Ur.lengthSq()===0){if(Math.abs(i.z)===1)Fi.x+=0.0001;else Fi.z+=0.0001;Fi.normalize(),Ur.crossVectors(i,Fi)}return Ur.normalize(),Ya.crossVectors(Fi,Ur),r[0]=Ur.x,r[4]=Ya.x,r[8]=Fi.x,r[1]=Ur.y,r[5]=Ya.y,r[9]=Fi.y,r[2]=Ur.z,r[6]=Ya.z,r[10]=Fi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,n=this.elements,s=i[0],o=i[4],a=i[8],l=i[12],c=i[1],f=i[5],u=i[9],h=i[13],p=i[2],x=i[6],y=i[10],d=i[14],m=i[3],b=i[7],E=i[11],M=i[15],I=r[0],L=r[4],g=r[8],S=r[12],N=r[1],W=r[5],U=r[9],X=r[13],ne=r[2],C=r[6],Q=r[10],ie=r[14],H=r[3],_e=r[7],j=r[11],se=r[15];return n[0]=s*I+o*N+a*ne+l*H,n[4]=s*L+o*W+a*C+l*_e,n[8]=s*g+o*U+a*Q+l*j,n[12]=s*S+o*X+a*ie+l*se,n[1]=c*I+f*N+u*ne+h*H,n[5]=c*L+f*W+u*C+h*_e,n[9]=c*g+f*U+u*Q+h*j,n[13]=c*S+f*X+u*ie+h*se,n[2]=p*I+x*N+y*ne+d*H,n[6]=p*L+x*W+y*C+d*_e,n[10]=p*g+x*U+y*Q+d*j,n[14]=p*S+x*X+y*ie+d*se,n[3]=m*I+b*N+E*ne+M*H,n[7]=m*L+b*W+E*C+M*_e,n[11]=m*g+b*U+E*Q+M*j,n[15]=m*S+b*X+E*ie+M*se,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],r=e[8],n=e[12],s=e[1],o=e[5],a=e[9],l=e[13],c=e[2],f=e[6],u=e[10],h=e[14],p=e[3],x=e[7],y=e[11],d=e[15],m=a*h-l*u,b=o*h-l*f,E=o*u-a*f,M=s*h-l*c,I=s*u-a*c,L=s*f-o*c;return t*(x*m-y*b+d*E)-i*(p*m-y*M+d*I)+r*(p*b-x*M+d*L)-n*(p*E-x*I+y*L)}determinantAffine(){let e=this.elements,t=e[0],i=e[4],r=e[8],n=e[1],s=e[5],o=e[9],a=e[2],l=e[6],c=e[10];return t*(s*c-o*l)-i*(n*c-o*a)+r*(n*l-s*a)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let r=this.elements;if(e.isVector3)r[12]=e.x,r[13]=e.y,r[14]=e.z;else r[12]=e,r[13]=t,r[14]=i;return this}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],n=e[3],s=e[4],o=e[5],a=e[6],l=e[7],c=e[8],f=e[9],u=e[10],h=e[11],p=e[12],x=e[13],y=e[14],d=e[15],m=t*o-i*s,b=t*a-r*s,E=t*l-n*s,M=i*a-r*o,I=i*l-n*o,L=r*l-n*a,g=c*x-f*p,S=c*y-u*p,N=c*d-h*p,W=f*y-u*x,U=f*d-h*x,X=u*d-h*y,ne=m*X-b*U+E*W+M*N-I*S+L*g;if(ne===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let C=1/ne;return e[0]=(o*X-a*U+l*W)*C,e[1]=(r*U-i*X-n*W)*C,e[2]=(x*L-y*I+d*M)*C,e[3]=(u*I-f*L-h*M)*C,e[4]=(a*N-s*X-l*S)*C,e[5]=(t*X-r*N+n*S)*C,e[6]=(y*E-p*L-d*b)*C,e[7]=(c*L-u*E+h*b)*C,e[8]=(s*U-o*N+l*g)*C,e[9]=(i*N-t*U-n*g)*C,e[10]=(p*I-x*E+d*m)*C,e[11]=(f*E-c*I-h*m)*C,e[12]=(o*S-s*W-a*g)*C,e[13]=(t*W-i*S+r*g)*C,e[14]=(x*b-p*M-y*m)*C,e[15]=(c*M-f*b+u*m)*C,this}scale(e){let t=this.elements,{x:i,y:r,z:n}=e;return t[0]*=i,t[4]*=r,t[8]*=n,t[1]*=i,t[5]*=r,t[9]*=n,t[2]*=i,t[6]*=r,t[10]*=n,t[3]*=i,t[7]*=r,t[11]*=n,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){if(e.isVector3)this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1);else this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1);return this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),r=Math.sin(t),n=1-i,{x:s,y:o,z:a}=e,l=n*s,c=n*o;return this.set(l*s+i,l*o-r*a,l*a+r*o,0,l*o+r*a,c*o+i,c*a-r*s,0,l*a-r*o,c*a+r*s,n*a*a+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,n,s){return this.set(1,i,n,0,e,1,s,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){let r=this.elements,{_x:n,_y:s,_z:o,_w:a}=t,l=n+n,c=s+s,f=o+o,u=n*l,h=n*c,p=n*f,x=s*c,y=s*f,d=o*f,m=a*l,b=a*c,E=a*f,{x:M,y:I,z:L}=i;return r[0]=(1-(x+d))*M,r[1]=(h+E)*M,r[2]=(p-b)*M,r[3]=0,r[4]=(h-E)*I,r[5]=(1-(u+d))*I,r[6]=(y+m)*I,r[7]=0,r[8]=(p+b)*L,r[9]=(y-m)*L,r[10]=(1-(u+x))*L,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let n=this.determinantAffine();if(n===0)return i.set(1,1,1),t.identity(),this;let s=ss.set(r[0],r[1],r[2]).length(),o=ss.set(r[4],r[5],r[6]).length(),a=ss.set(r[8],r[9],r[10]).length();if(n<0)s=-s;nr.copy(this);let l=1/s,c=1/o,f=1/a;return nr.elements[0]*=l,nr.elements[1]*=l,nr.elements[2]*=l,nr.elements[4]*=c,nr.elements[5]*=c,nr.elements[6]*=c,nr.elements[8]*=f,nr.elements[9]*=f,nr.elements[10]*=f,t.setFromRotationMatrix(nr),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,n,s,o=ci,a=!1){let l=this.elements,c=2*n/(t-e),f=2*n/(i-r),u=(t+e)/(t-e),h=(i+r)/(i-r),p,x;if(a)p=n/(s-n),x=s*n/(s-n);else if(o===ci)p=-(s+n)/(s-n),x=-2*s*n/(s-n);else if(o===ur)p=-s/(s-n),x=-s*n/(s-n);else throw Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=f,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,n,s,o=ci,a=!1){let l=this.elements,c=2/(t-e),f=2/(i-r),u=-(t+e)/(t-e),h=-(i+r)/(i-r),p,x;if(a)p=1/(s-n),x=s/(s-n);else if(o===ci)p=-2/(s-n),x=-(s+n)/(s-n);else if(o===ur)p=-1/(s-n),x=-n/(s-n);else throw Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=0,l[12]=u,l[1]=0,l[5]=f,l[9]=0,l[13]=h,l[2]=0,l[6]=0,l[10]=p,l[14]=x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}var ss=new R,nr=new Je,qm=new R(0,0,0),Ym=new R(1,1,1),Ur=new R,Ya=new R,Fi=new R;var Qh=new Je,$h=new ui;class vi{constructor(e=0,t=0,i=0,r=vi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let r=e.elements,n=r[0],s=r[4],o=r[8],a=r[1],l=r[5],c=r[9],f=r[2],u=r[6],h=r[10];switch(t){case"XYZ":if(this._y=Math.asin(st(o,-1,1)),Math.abs(o)<0.9999999)this._x=Math.atan2(-c,h),this._z=Math.atan2(-s,n);else this._x=Math.atan2(u,l),this._z=0;break;case"YXZ":if(this._x=Math.asin(-st(c,-1,1)),Math.abs(c)<0.9999999)this._y=Math.atan2(o,h),this._z=Math.atan2(a,l);else this._y=Math.atan2(-f,n),this._z=0;break;case"ZXY":if(this._x=Math.asin(st(u,-1,1)),Math.abs(u)<0.9999999)this._y=Math.atan2(-f,h),this._z=Math.atan2(-s,l);else this._y=0,this._z=Math.atan2(a,n);break;case"ZYX":if(this._y=Math.asin(-st(f,-1,1)),Math.abs(f)<0.9999999)this._x=Math.atan2(u,h),this._z=Math.atan2(a,n);else this._x=0,this._z=Math.atan2(-s,l);break;case"YZX":if(this._z=Math.asin(st(a,-1,1)),Math.abs(a)<0.9999999)this._x=Math.atan2(-c,l),this._y=Math.atan2(-f,n);else this._x=0,this._y=Math.atan2(o,h);break;case"XZY":if(this._z=Math.asin(-st(s,-1,1)),Math.abs(s)<0.9999999)this._x=Math.atan2(u,l),this._y=Math.atan2(o,n);else this._x=Math.atan2(-c,h),this._y=0;break;default:Te("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}if(this._order=t,i===!0)this._onChangeCallback();return this}setFromQuaternion(e,t,i){return Qh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Qh,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return $h.setFromEuler(this),this.setFromQuaternion($h,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){if(this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0)this._order=e[3];return this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}vi.DEFAULT_ORDER="XYZ";class dn{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}var Zm=0,jh=new R,os=new ui,yr=new Je,Za=new R,Do=new R,Jm=new R,Km=new ui,eu=new R(1,0,0),tu=new R(0,1,0),iu=new R(0,0,1),ru={type:"added"},Qm={type:"removed"},as={type:"childadded",child:null},oc={type:"childremoved",child:null};class ft extends ei{constructor(){super();this.isObject3D=!0,Object.defineProperty(this,"id",{value:Zm++}),this.uuid=hi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ft.DEFAULT_UP.clone();let e=new R,t=new vi,i=new ui,r=new R(1,1,1);function n(){i.setFromEuler(t,!1)}function s(){t.setFromQuaternion(i,void 0,!1)}t._onChange(n),i._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Je},normalMatrix:{value:new et}}),this.matrix=new Je,this.matrixWorld=new Je,this.matrixAutoUpdate=ft.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new dn,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null)this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return os.setFromAxisAngle(e,t),this.quaternion.multiply(os),this}rotateOnWorldAxis(e,t){return os.setFromAxisAngle(e,t),this.quaternion.premultiply(os),this}rotateX(e){return this.rotateOnAxis(eu,e)}rotateY(e){return this.rotateOnAxis(tu,e)}rotateZ(e){return this.rotateOnAxis(iu,e)}translateOnAxis(e,t){return jh.copy(e).applyQuaternion(this.quaternion),this.position.add(jh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(eu,e)}translateY(e){return this.translateOnAxis(tu,e)}translateZ(e){return this.translateOnAxis(iu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(yr.copy(this.matrixWorld).invert())}lookAt(e,t,i){if(e.isVector3)Za.copy(e);else Za.set(e,t,i);let r=this.parent;if(this.updateWorldMatrix(!0,!1),Do.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight)yr.lookAt(Do,Za,this.up);else yr.lookAt(Za,Do,this.up);if(this.quaternion.setFromRotationMatrix(yr),r)yr.extractRotation(r.matrixWorld),os.setFromRotationMatrix(yr),this.quaternion.premultiply(os.invert())}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}if(e===this)return Ge("Object3D.add: object can't be added as a child of itself.",e),this;if(e&&e.isObject3D)e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ru),as.child=e,this.dispatchEvent(as),as.child=null;else Ge("Object3D.add: object not an instance of THREE.Object3D.",e);return this}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);if(t!==-1)e.parent=null,this.children.splice(t,1),e.dispatchEvent(Qm),oc.child=e,this.dispatchEvent(oc),oc.child=null;return this}removeFromParent(){let e=this.parent;if(e!==null)e.remove(this);return this}clear(){return this.remove(...this.children)}attach(e){if(this.updateWorldMatrix(!0,!1),yr.copy(this.matrixWorld).invert(),e.parent!==null)e.parent.updateWorldMatrix(!0,!1),yr.multiply(e.parent.matrixWorld);return e.applyMatrix4(yr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ru),as.child=e,this.dispatchEvent(as),as.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){let s=this.children[i].getObjectByProperty(e,t);if(s!==void 0)return s}return}getObjectsByProperty(e,t,i=[]){if(this[e]===t)i.push(this);let r=this.children;for(let n=0,s=r.length;n<s;n++)r[n].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Do,e,Jm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Do,Km,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;if(t!==null)e(t),t.traverseAncestors(e)}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let{x:t,y:i,z:r}=e,n=this.matrix.elements;n[12]+=t-n[0]*t-n[4]*i-n[8]*r,n[13]+=i-n[1]*t-n[5]*i-n[9]*r,n[14]+=r-n[2]*t-n[6]*i-n[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||e){if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,e=!0}let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){let r=this.parent;if(e===!0&&r!==null)r.updateWorldMatrix(!0,!1);if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||i){if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,i=!0}if(t===!0){let n=this.children;for(let s=0,o=n.length;s<o;s++)n[s].updateWorldMatrix(!1,!0,i)}}toJSON(e){let t=e===void 0||typeof e==="string",i={};if(t)e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"};let r={};if(r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0)r.userData=this.userData;if(r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null)r.pivot=this.pivot.toArray();if(this.morphTargetDictionary!==void 0)r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary);if(this.morphTargetInfluences!==void 0)r.morphTargetInfluences=this.morphTargetInfluences.slice();if(this.isInstancedMesh){if(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null)r.instanceColor=this.instanceColor.toJSON()}if(this.isBatchedMesh){if(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map((o)=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map((o)=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null)r.colorsTexture=this._colorsTexture.toJSON(e);if(this.boundingSphere!==null)r.boundingSphere=this.boundingSphere.toJSON();if(this.boundingBox!==null)r.boundingBox=this.boundingBox.toJSON()}function n(o,a){if(o[a.uuid]===void 0)o[a.uuid]=a.toJSON(e);return a.uuid}if(this.isScene){if(this.background){if(this.background.isColor)r.background=this.background.toJSON();else if(this.background.isTexture)r.background=this.background.toJSON(e).uuid}if(this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0)r.environment=this.environment.toJSON(e).uuid}else if(this.isMesh||this.isLine||this.isPoints){r.geometry=n(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let a=o.shapes;if(Array.isArray(a))for(let l=0,c=a.length;l<c;l++){let f=a[l];n(e.shapes,f)}else n(e.shapes,a)}}if(this.isSkinnedMesh){if(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0)n(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid}if(this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let a=0,l=this.material.length;a<l;a++)o.push(n(e.materials,this.material[a]));r.material=o}else r.material=n(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){let a=this.animations[o];r.animations.push(n(e.animations,a))}}if(t){let o=s(e.geometries),a=s(e.materials),l=s(e.textures),c=s(e.images),f=s(e.shapes),u=s(e.skeletons),h=s(e.animations),p=s(e.nodes);if(o.length>0)i.geometries=o;if(a.length>0)i.materials=a;if(l.length>0)i.textures=l;if(c.length>0)i.images=c;if(f.length>0)i.shapes=f;if(u.length>0)i.skeletons=u;if(h.length>0)i.animations=h;if(p.length>0)i.nodes=p}return i.object=r,i;function s(o){let a=[];for(let l in o){let c=o[l];delete c.metadata,a.push(c)}return a}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let r=e.children[i];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}ft.DEFAULT_UP=new R(0,1,0);ft.DEFAULT_MATRIX_AUTO_UPDATE=!0;ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Zi extends ft{constructor(){super();this.isGroup=!0,this.type="Group"}}var $m={type:"move"};class ls{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){if(this._hand===null)this._hand=new Zi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1};return this._hand}getTargetRaySpace(){if(this._targetRay===null)this._targetRay=new Zi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R;return this._targetRay}getGripSpace(){if(this._grip===null)this._grip=new Zi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R,this._grip.eventsEnabled=!1;return this._grip}dispatchEvent(e){if(this._targetRay!==null)this._targetRay.dispatchEvent(e);if(this._grip!==null)this._grip.dispatchEvent(e);if(this._hand!==null)this._hand.dispatchEvent(e);return this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){if(this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null)this._targetRay.visible=!1;if(this._grip!==null)this._grip.visible=!1;if(this._hand!==null)this._hand.visible=!1;return this}update(e,t,i){let r=null,n=null,s=null,o=this._targetRay,a=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){s=!0;for(let x of e.hand.values()){let y=t.getJointPose(x,i),d=this._getHandJoint(l,x);if(y!==null)d.matrix.fromArray(y.transform.matrix),d.matrix.decompose(d.position,d.quaternion,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=y.radius;d.visible=y!==null}let c=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],u=c.position.distanceTo(f.position),h=0.02,p=0.005;if(l.inputState.pinching&&u>h+p)l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this});else if(!l.inputState.pinching&&u<=h-p)l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this})}else if(a!==null&&e.gripSpace){if(n=t.getPose(e.gripSpace,i),n!==null){if(a.matrix.fromArray(n.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,n.linearVelocity)a.hasLinearVelocity=!0,a.linearVelocity.copy(n.linearVelocity);else a.hasLinearVelocity=!1;if(n.angularVelocity)a.hasAngularVelocity=!0,a.angularVelocity.copy(n.angularVelocity);else a.hasAngularVelocity=!1;if(a.eventsEnabled)a.dispatchEvent({type:"gripUpdated",data:e,target:this})}}if(o!==null){if(r=t.getPose(e.targetRaySpace,i),r===null&&n!==null)r=n;if(r!==null){if(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity)o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity);else o.hasLinearVelocity=!1;if(r.angularVelocity)o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity);else o.hasAngularVelocity=!1;this.dispatchEvent($m)}}}if(o!==null)o.visible=r!==null;if(a!==null)a.visible=n!==null;if(l!==null)l.visible=s!==null;return this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new Zi;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}var nu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Fr={h:0,s:0,l:0},Ja={h:0,s:0,l:0};function ac(e,t,i){if(i<0)i+=1;if(i>1)i-=1;if(i<0.16666666666666666)return e+(t-e)*6*i;if(i<0.5)return t;if(i<0.6666666666666666)return e+(t-e)*6*(0.6666666666666666-i);return e}class ge{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let r=e;if(r&&r.isColor)this.copy(r);else if(typeof r==="number")this.setHex(r);else if(typeof r==="string")this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Lt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ht.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=ht.workingColorSpace){return this.r=e,this.g=t,this.b=i,ht.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=ht.workingColorSpace){if(e=qh(e,1),t=st(t,0,1),i=st(i,0,1),t===0)this.r=this.g=this.b=i;else{let n=i<=0.5?i*(1+t):i+t-i*t,s=2*i-n;this.r=ac(s,n,e+0.3333333333333333),this.g=ac(s,n,e),this.b=ac(s,n,e-0.3333333333333333)}return ht.colorSpaceToWorking(this,r),this}setStyle(e,t=Lt){function i(n){if(n===void 0)return;if(parseFloat(n)<1)Te("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let n,s=r[1],o=r[2];switch(s){case"rgb":case"rgba":if(n=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(n[4]),this.setRGB(Math.min(255,parseInt(n[1],10))/255,Math.min(255,parseInt(n[2],10))/255,Math.min(255,parseInt(n[3],10))/255,t);if(n=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(n[4]),this.setRGB(Math.min(100,parseFloat(n[1]))/100,Math.min(100,parseFloat(n[2]))/100,Math.min(100,parseFloat(n[3]))/100,t);break;case"hsl":case"hsla":if(n=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(n[4]),this.setHSL(parseFloat(n[1])/360,parseFloat(n[2])/100,parseFloat(n[3])/100,t);break;default:Te("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let n=r[1],s=n.length;if(s===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);else if(s===6)return this.setHex(parseInt(n,16),t);else Te("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Lt){let i=nu[e.toLowerCase()];if(i!==void 0)this.setHex(i,t);else Te("Color: Unknown color "+e);return this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=rr(e.r),this.g=rr(e.g),this.b=rr(e.b),this}copyLinearToSRGB(e){return this.r=un(e.r),this.g=un(e.g),this.b=un(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Lt){return ht.workingToColorSpace(yi.copy(this),e),Math.round(st(yi.r*255,0,255))*65536+Math.round(st(yi.g*255,0,255))*256+Math.round(st(yi.b*255,0,255))}getHexString(e=Lt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ht.workingColorSpace){ht.workingToColorSpace(yi.copy(this),t);let{r:i,g:r,b:n}=yi,s=Math.max(i,r,n),o=Math.min(i,r,n),a,l,c=(o+s)/2;if(o===s)a=0,l=0;else{let f=s-o;switch(l=c<=0.5?f/(s+o):f/(2-s-o),s){case i:a=(r-n)/f+(r<n?6:0);break;case r:a=(n-i)/f+2;break;case n:a=(i-r)/f+4;break}a/=6}return e.h=a,e.s=l,e.l=c,e}getRGB(e,t=ht.workingColorSpace){return ht.workingToColorSpace(yi.copy(this),t),e.r=yi.r,e.g=yi.g,e.b=yi.b,e}getStyle(e=Lt){ht.workingToColorSpace(yi.copy(this),e);let{r:t,g:i,b:r}=yi;if(e!==Lt)return`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`;return`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Fr),this.setHSL(Fr.h+e,Fr.s+t,Fr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Fr),e.getHSL(Ja);let i=ka(Fr.h,Ja.h,t),r=ka(Fr.s,Ja.s,t),n=ka(Fr.l,Ja.l,t);return this.setHSL(i,r,n),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,r=this.b,n=e.elements;return this.r=n[0]*t+n[3]*i+n[6]*r,this.g=n[1]*t+n[4]*i+n[7]*r,this.b=n[2]*t+n[5]*i+n[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}var yi=new ge;ge.NAMES=nu;class cs{constructor(e,t=1,i=1000){this.isFog=!0,this.name="",this.color=new ge(e),this.near=t,this.far=i}clone(){return new cs(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class pn extends ft{constructor(){super();if(this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new vi,this.environmentIntensity=1,this.environmentRotation=new vi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);if(this.fog!==null)t.object.fog=this.fog.toJSON();return t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}var sr=new R,Mr=new R,lc=new R,Sr=new R,hs=new R,us=new R,su=new R,cc=new R,hc=new R,uc=new R,fc=new St,dc=new St,pc=new St;class Mi{constructor(e=new R,t=new R,i=new R){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),sr.subVectors(e,t),r.cross(sr);let n=r.lengthSq();if(n>0)return r.multiplyScalar(1/Math.sqrt(n));return r.set(0,0,0)}static getBarycoord(e,t,i,r,n){sr.subVectors(r,t),Mr.subVectors(i,t),lc.subVectors(e,t);let s=sr.dot(sr),o=sr.dot(Mr),a=sr.dot(lc),l=Mr.dot(Mr),c=Mr.dot(lc),f=s*l-o*o;if(f===0)return n.set(0,0,0),null;let u=1/f,h=(l*a-o*c)*u,p=(s*c-o*a)*u;return n.set(1-h-p,p,h)}static containsPoint(e,t,i,r){if(this.getBarycoord(e,t,i,r,Sr)===null)return!1;return Sr.x>=0&&Sr.y>=0&&Sr.x+Sr.y<=1}static getInterpolation(e,t,i,r,n,s,o,a){if(this.getBarycoord(e,t,i,r,Sr)===null){if(a.x=0,a.y=0,"z"in a)a.z=0;if("w"in a)a.w=0;return null}return a.setScalar(0),a.addScaledVector(n,Sr.x),a.addScaledVector(s,Sr.y),a.addScaledVector(o,Sr.z),a}static getInterpolatedAttribute(e,t,i,r,n,s){return fc.setScalar(0),dc.setScalar(0),pc.setScalar(0),fc.fromBufferAttribute(e,t),dc.fromBufferAttribute(e,i),pc.fromBufferAttribute(e,r),s.setScalar(0),s.addScaledVector(fc,n.x),s.addScaledVector(dc,n.y),s.addScaledVector(pc,n.z),s}static isFrontFacing(e,t,i,r){return sr.subVectors(i,t),Mr.subVectors(e,t),sr.cross(Mr).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return sr.subVectors(this.c,this.b),Mr.subVectors(this.a,this.b),sr.cross(Mr).length()*0.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(0.3333333333333333)}getNormal(e){return Mi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Mi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,n){return Mi.getInterpolation(e,this.a,this.b,this.c,t,i,r,n)}containsPoint(e){return Mi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Mi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,r=this.b,n=this.c,s,o;hs.subVectors(r,i),us.subVectors(n,i),cc.subVectors(e,i);let a=hs.dot(cc),l=us.dot(cc);if(a<=0&&l<=0)return t.copy(i);hc.subVectors(e,r);let c=hs.dot(hc),f=us.dot(hc);if(c>=0&&f<=c)return t.copy(r);let u=a*f-c*l;if(u<=0&&a>=0&&c<=0&&a-c>0)return s=a/(a-c),t.copy(i).addScaledVector(hs,s);uc.subVectors(e,n);let h=hs.dot(uc),p=us.dot(uc);if(p>=0&&h<=p)return t.copy(n);let x=h*l-a*p;if(x<=0&&l>=0&&p<=0)return o=l/(l-p),t.copy(i).addScaledVector(us,o);let y=c*p-h*f;if(y<=0&&f-c>=0&&h-p>=0)return su.subVectors(n,r),o=(f-c)/(f-c+(h-p)),t.copy(r).addScaledVector(su,o);let d=1/(y+x+u);return s=x*d,o=u*d,t.copy(i).addScaledVector(hs,s).addScaledVector(us,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Si{constructor(e=new R(1/0,1/0,1/0),t=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(or.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(or.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=or.copy(t).multiplyScalar(0.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(0.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let n=i.getAttribute("position");if(t===!0&&n!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let s=0,o=n.count;s<o;s++){if(e.isMesh===!0)e.getVertexPosition(s,or);else or.fromBufferAttribute(n,s);or.applyMatrix4(e.matrixWorld),this.expandByPoint(or)}else{if(e.boundingBox!==void 0){if(e.boundingBox===null)e.computeBoundingBox();Ka.copy(e.boundingBox)}else{if(i.boundingBox===null)i.computeBoundingBox();Ka.copy(i.boundingBox)}Ka.applyMatrix4(e.matrixWorld),this.union(Ka)}}let r=e.children;for(let n=0,s=r.length;n<s;n++)this.expandByObject(r[n],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,or),or.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;if(e.normal.x>0)t=e.normal.x*this.min.x,i=e.normal.x*this.max.x;else t=e.normal.x*this.max.x,i=e.normal.x*this.min.x;if(e.normal.y>0)t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y;else t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y;if(e.normal.z>0)t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z;else t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z;return t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(No),Qa.subVectors(this.max,No),fs.subVectors(e.a,No),ds.subVectors(e.b,No),ps.subVectors(e.c,No),Br.subVectors(ds,fs),Or.subVectors(ps,ds),mn.subVectors(fs,ps);let t=[0,-Br.z,Br.y,0,-Or.z,Or.y,0,-mn.z,mn.y,Br.z,0,-Br.x,Or.z,0,-Or.x,mn.z,0,-mn.x,-Br.y,Br.x,0,-Or.y,Or.x,0,-mn.y,mn.x,0];if(!mc(t,fs,ds,ps,Qa))return!1;if(t=[1,0,0,0,1,0,0,0,1],!mc(t,fs,ds,ps,Qa))return!1;return $a.crossVectors(Br,Or),t=[$a.x,$a.y,$a.z],mc(t,fs,ds,ps,Qa)}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,or).distanceTo(e)}getBoundingSphere(e){if(this.isEmpty())e.makeEmpty();else this.getCenter(e.center),e.radius=this.getSize(or).length()*0.5;return e}intersect(e){if(this.min.max(e.min),this.max.min(e.max),this.isEmpty())this.makeEmpty();return this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){if(this.isEmpty())return this;return br[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),br[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),br[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),br[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),br[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),br[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),br[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),br[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(br),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}var br=[new R,new R,new R,new R,new R,new R,new R,new R],or=new R,Ka=new Si,fs=new R,ds=new R,ps=new R,Br=new R,Or=new R,mn=new R,No=new R,Qa=new R,$a=new R,gn=new R;function mc(e,t,i,r,n){for(let s=0,o=e.length-3;s<=o;s+=3){gn.fromArray(e,s);let a=n.x*Math.abs(gn.x)+n.y*Math.abs(gn.y)+n.z*Math.abs(gn.z),l=t.dot(gn),c=i.dot(gn),f=r.dot(gn);if(Math.max(-Math.max(l,c,f),Math.min(l,c,f))>a)return!1}return!0}var $t=new R,ja=new J,jm=0;class Kt extends ei{constructor(e,t,i=!1){super();if(Array.isArray(e))throw TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:jm++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Io,this.updateRanges=[],this.gpuType=Jt,this.version=0,this._normalizationScale=e!==void 0?is(e):void 0}onUploadCallback(){}set needsUpdate(e){if(e===!0)this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,n=this.itemSize;r<n;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)ja.fromBufferAttribute(this,t),ja.applyMatrix3(e),this.setXY(t,ja.x,ja.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)$t.fromBufferAttribute(this,t),$t.applyMatrix3(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)$t.fromBufferAttribute(this,t),$t.applyMatrix4(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)$t.fromBufferAttribute(this,t),$t.applyNormalMatrix(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)$t.fromBufferAttribute(this,t),$t.transformDirection(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];if(this.normalized)i=this._denormalize(i);return i}setComponent(e,t,i){if(this.normalized)i=this._normalize(i);return this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];if(this.normalized)t=this._denormalize(t);return t}setX(e,t){if(this.normalized)t=this._normalize(t);return this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];if(this.normalized)t=this._denormalize(t);return t}setY(e,t){if(this.normalized)t=this._normalize(t);return this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];if(this.normalized)t=this._denormalize(t);return t}setZ(e,t){if(this.normalized)t=this._normalize(t);return this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];if(this.normalized)t=this._denormalize(t);return t}setW(e,t){if(this.normalized)t=this._normalize(t);return this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){if(e*=this.itemSize,this.normalized)t=this._normalize(t),i=this._normalize(i);return this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){if(e*=this.itemSize,this.normalized)t=this._normalize(t),i=this._normalize(i),r=this._normalize(r);return this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,n){if(e*=this.itemSize,this.normalized)t=this._normalize(t),i=this._normalize(i),r=this._normalize(r),n=this._normalize(n);return this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=n,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Wa(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):Xa(e,this.array)}}class Uo extends Kt{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Fo extends Kt{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Ve extends Kt{constructor(e,t,i){super(new Float32Array(e),t,i)}}var eg=new Si,Bo=new R,gc=new R;class ti{constructor(e=new R,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;if(t!==void 0)i.copy(t);else eg.setFromPoints(e).getCenter(i);let r=0;for(let n=0,s=e.length;n<s;n++)r=Math.max(r,i.distanceToSquared(e[n]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);if(t.copy(e),i>this.radius*this.radius)t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center);return t}getBoundingBox(e){if(this.isEmpty())return e.makeEmpty(),e;return e.set(this.center,this.center),e.expandByScalar(this.radius),e}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Bo.subVectors(e,this.center);let t=Bo.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),r=(i-this.radius)*0.5;this.center.addScaledVector(Bo,r/i),this.radius+=r}return this}union(e){if(e.isEmpty())return this;if(this.isEmpty())return this.copy(e),this;if(this.center.equals(e.center)===!0)this.radius=Math.max(this.radius,e.radius);else gc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Bo.copy(e.center).add(gc)),this.expandByPoint(Bo.copy(e.center).sub(gc));return this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}var tg=0,Ji=new Je,xc=new ft,ms=new R,Bi=new Si,Oo=new Si,fi=new R;class Ye extends ei{constructor(){super();this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:tg++}),this.uuid=hi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){if(Array.isArray(e))this.index=new((Hh(e))?Fo:Uo)(e,1);else this.index=e;return this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;if(t!==void 0)t.applyMatrix4(e),t.needsUpdate=!0;let i=this.attributes.normal;if(i!==void 0){let n=new et().getNormalMatrix(e);i.applyNormalMatrix(n),i.needsUpdate=!0}let r=this.attributes.tangent;if(r!==void 0)r.transformDirection(e),r.needsUpdate=!0;if(this.boundingBox!==null)this.computeBoundingBox();if(this.boundingSphere!==null)this.computeBoundingSphere();return this._transformed=!0,this}applyQuaternion(e){return Ji.makeRotationFromQuaternion(e),this.applyMatrix4(Ji),this}rotateX(e){return Ji.makeRotationX(e),this.applyMatrix4(Ji),this}rotateY(e){return Ji.makeRotationY(e),this.applyMatrix4(Ji),this}rotateZ(e){return Ji.makeRotationZ(e),this.applyMatrix4(Ji),this}translate(e,t,i){return Ji.makeTranslation(e,t,i),this.applyMatrix4(Ji),this}scale(e,t,i){return Ji.makeScale(e,t,i),this.applyMatrix4(Ji),this}lookAt(e){return xc.lookAt(e),xc.updateMatrix(),this.applyMatrix4(xc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ms).negate(),this.translate(ms.x,ms.y,ms.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let r=0,n=e.length;r<n;r++){let s=e[r];i.push(s.x,s.y,s.z||0)}this.setAttribute("position",new Ve(i,3))}else{let i=Math.min(e.length,t.count);for(let r=0;r<i;r++){let n=e[r];t.setXYZ(r,n.x,n.y,n.z||0)}if(e.length>t.count)Te("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.");t.needsUpdate=!0}return this}computeBoundingBox(){if(this.boundingBox===null)this.boundingBox=new Si;let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ge("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){let n=t[i];if(Bi.setFromBufferAttribute(n),this.morphTargetsRelative)fi.addVectors(this.boundingBox.min,Bi.min),this.boundingBox.expandByPoint(fi),fi.addVectors(this.boundingBox.max,Bi.max),this.boundingBox.expandByPoint(fi);else this.boundingBox.expandByPoint(Bi.min),this.boundingBox.expandByPoint(Bi.max)}}else this.boundingBox.makeEmpty();if(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))Ge('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){if(this.boundingSphere===null)this.boundingSphere=new ti;let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ge("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(e){let i=this.boundingSphere.center;if(Bi.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let o=t[n];if(Oo.setFromBufferAttribute(o),this.morphTargetsRelative)fi.addVectors(Bi.min,Oo.min),Bi.expandByPoint(fi),fi.addVectors(Bi.max,Oo.max),Bi.expandByPoint(fi);else Bi.expandByPoint(Oo.min),Bi.expandByPoint(Oo.max)}Bi.getCenter(i);let r=0;for(let n=0,s=e.count;n<s;n++)fi.fromBufferAttribute(e,n),r=Math.max(r,i.distanceToSquared(fi));if(t)for(let n=0,s=t.length;n<s;n++){let o=t[n],a=this.morphTargetsRelative;for(let l=0,c=o.count;l<c;l++){if(fi.fromBufferAttribute(o,l),a)ms.fromBufferAttribute(e,l),fi.add(ms);r=Math.max(r,i.distanceToSquared(fi))}}if(this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius))Ge('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ge("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let{position:i,normal:r,uv:n}=t,s=this.getAttribute("tangent");if(s===void 0||s.count!==i.count)s=new Kt(new Float32Array(4*i.count),4),this.setAttribute("tangent",s);let o=[],a=[],l=new Uint8Array(i.count);for(let S=0;S<i.count;S++)o[S]=new R,a[S]=new R;let c=new R,f=new R,u=new R,h=new J,p=new J,x=new J,y=new R,d=new R;function m(S,N,W){l[S]=l[N]=l[W]=1,c.fromBufferAttribute(i,S),f.fromBufferAttribute(i,N),u.fromBufferAttribute(i,W),h.fromBufferAttribute(n,S),p.fromBufferAttribute(n,N),x.fromBufferAttribute(n,W),f.sub(c),u.sub(c),p.sub(h),x.sub(h);let U=1/(p.x*x.y-x.x*p.y);if(!isFinite(U))return;y.copy(f).multiplyScalar(x.y).addScaledVector(u,-p.y).multiplyScalar(U),d.copy(u).multiplyScalar(p.x).addScaledVector(f,-x.x).multiplyScalar(U),o[S].add(y),o[N].add(y),o[W].add(y),a[S].add(d),a[N].add(d),a[W].add(d)}let b=this.groups;if(b.length===0)b=[{start:0,count:e.count}];for(let S=0,N=b.length;S<N;++S){let W=b[S],{start:U,count:X}=W;for(let ne=U,C=U+X;ne<C;ne+=3)m(e.getX(ne+0),e.getX(ne+1),e.getX(ne+2))}let E=new R,M=new R,I=new R,L=new R;function g(S){I.fromBufferAttribute(r,S),L.copy(I);let N=o[S];E.copy(N),E.sub(I.multiplyScalar(I.dot(N))).normalize(),M.crossVectors(L,N);let U=M.dot(a[S])<0?-1:1;s.setXYZW(S,E.x,E.y,E.z,U)}for(let S=0,N=i.count;S<N;++S)if(l[S])g(S);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new Kt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let u=0,h=i.count;u<h;u++)i.setXYZ(u,0,0,0);let r=new R,n=new R,s=new R,o=new R,a=new R,l=new R,c=new R,f=new R;if(e)for(let u=0,h=e.count;u<h;u+=3){let p=e.getX(u+0),x=e.getX(u+1),y=e.getX(u+2);r.fromBufferAttribute(t,p),n.fromBufferAttribute(t,x),s.fromBufferAttribute(t,y),c.subVectors(s,n),f.subVectors(r,n),c.cross(f),o.fromBufferAttribute(i,p),a.fromBufferAttribute(i,x),l.fromBufferAttribute(i,y),o.add(c),a.add(c),l.add(c),i.setXYZ(p,o.x,o.y,o.z),i.setXYZ(x,a.x,a.y,a.z),i.setXYZ(y,l.x,l.y,l.z)}else for(let u=0,h=t.count;u<h;u+=3)r.fromBufferAttribute(t,u+0),n.fromBufferAttribute(t,u+1),s.fromBufferAttribute(t,u+2),c.subVectors(s,n),f.subVectors(r,n),c.cross(f),i.setXYZ(u+0,c.x,c.y,c.z),i.setXYZ(u+1,c.x,c.y,c.z),i.setXYZ(u+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)fi.fromBufferAttribute(e,t),fi.normalize(),e.setXYZ(t,fi.x,fi.y,fi.z)}toNonIndexed(){function e(o,a){let{array:l,itemSize:c,normalized:f}=o,u=new l.constructor(a.length*c),h=0,p=0;for(let x=0,y=a.length;x<y;x++){if(o.isInterleavedBufferAttribute)h=a[x]*o.data.stride+o.offset;else h=a[x]*c;for(let d=0;d<c;d++)u[p++]=l[h++]}return new Kt(u,c,f)}if(this.index===null)return Te("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new Ye,i=this.index.array,r=this.attributes;for(let o in r){let a=r[o],l=e(a,i);t.setAttribute(o,l)}let n=this.morphAttributes;for(let o in n){let a=[],l=n[o];for(let c=0,f=l.length;c<f;c++){let u=l[c],h=e(u,i);a.push(h)}t.morphAttributes[o]=a}t.morphTargetsRelative=this.morphTargetsRelative;let s=this.groups;for(let o=0,a=s.length;o<a;o++){let l=s[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0)e.userData=this.userData;if(this.parameters!==void 0&&this._transformed!==!0){let a=this.parameters;for(let l in a)if(a[l]!==void 0)e[l]=a[l];return e}e.data={attributes:{}};let t=this.index;if(t!==null)e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)};let i=this.attributes;for(let a in i){let l=i[a];e.data.attributes[a]=l.toJSON(e.data)}let r={},n=!1;for(let a in this.morphAttributes){let l=this.morphAttributes[a],c=[];for(let f=0,u=l.length;f<u;f++){let h=l[f];c.push(h.toJSON(e.data))}if(c.length>0)r[a]=c,n=!0}if(n)e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative;let s=this.groups;if(s.length>0)e.data.groups=JSON.parse(JSON.stringify(s));let o=this.boundingSphere;if(o!==null)e.data.boundingSphere=o.toJSON();return e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;if(i!==null)this.setIndex(i.clone());let r=e.attributes;for(let l in r){let c=r[l];this.setAttribute(l,c.clone(t))}let n=e.morphAttributes;for(let l in n){let c=[],f=n[l];for(let u=0,h=f.length;u<h;u++)c.push(f[u].clone(t));this.morphAttributes[l]=c}this.morphTargetsRelative=e.morphTargetsRelative;let s=e.groups;for(let l=0,c=s.length;l<c;l++){let f=s[l];this.addGroup(f.start,f.count,f.materialIndex)}let o=e.boundingBox;if(o!==null)this.boundingBox=o.clone();let a=e.boundingSphere;if(a!==null)this.boundingSphere=a.clone();return this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class gs{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Io,this.updateRanges=[],this.version=0,this.uuid=hi()}onUploadCallback(){}set needsUpdate(e){if(e===!0)this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,n=this.stride;r<n;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){if(e.arrayBuffers===void 0)e.arrayBuffers={};let t=ou(this.array);if(e.arrayBuffers[t]===void 0)e.arrayBuffers[t]=this.array.slice(0).buffer;let i=new this.array.constructor(e.arrayBuffers[t]),r=new this.constructor(i,this.stride);return r.setUsage(this.usage),r}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){if(e.arrayBuffers===void 0)e.arrayBuffers={};let t=ou(this.array);if(e.arrayBuffers[t]===void 0)e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer));let i={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return i.usage=this.usage,i}}function ou(e){if(e.buffer._uuid===void 0)e.buffer._uuid=hi();if(e.byteOffset===0&&e.byteLength===e.buffer.byteLength)return e.buffer._uuid;return e.buffer._uuid+":"+e.byteOffset+":"+e.byteLength}var wi=new R;class xn{constructor(e,t,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=r,this._normalizationScale=e!==void 0?is(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)wi.fromBufferAttribute(this,t),wi.applyMatrix4(e),this.setXYZ(t,wi.x,wi.y,wi.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)wi.fromBufferAttribute(this,t),wi.applyNormalMatrix(e),this.setXYZ(t,wi.x,wi.y,wi.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)wi.fromBufferAttribute(this,t),wi.transformDirection(e),this.setXYZ(t,wi.x,wi.y,wi.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];if(this.normalized)i=this._denormalize(i);return i}setComponent(e,t,i){if(this.normalized)i=this._normalize(i);return this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){if(this.normalized)t=this._normalize(t);return this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){if(this.normalized)t=this._normalize(t);return this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){if(this.normalized)t=this._normalize(t);return this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){if(this.normalized)t=this._normalize(t);return this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];if(this.normalized)t=this._denormalize(t);return t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];if(this.normalized)t=this._denormalize(t);return t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];if(this.normalized)t=this._denormalize(t);return t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];if(this.normalized)t=this._denormalize(t);return t}setXY(e,t,i){if(e=e*this.data.stride+this.offset,this.normalized)t=this._normalize(t),i=this._normalize(i);return this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,r){if(e=e*this.data.stride+this.offset,this.normalized)t=this._normalize(t),i=this._normalize(i),r=this._normalize(r);return this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,t,i,r,n){if(e=e*this.data.stride+this.offset,this.normalized)t=this._normalize(t),i=this._normalize(i),r=this._normalize(r),n=this._normalize(n);return this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=n,this}clone(e){if(e===void 0){cn("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let r=i*this.data.stride+this.offset;for(let n=0;n<this.itemSize;n++)t.push(this.data.array[r+n])}return new Kt(new this.array.constructor(t),this.itemSize,this.normalized)}else{if(e.interleavedBuffers===void 0)e.interleavedBuffers={};if(e.interleavedBuffers[this.data.uuid]===void 0)e.interleavedBuffers[this.data.uuid]=this.data.clone(e);return new xn(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}}toJSON(e){if(e===void 0){cn("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let r=i*this.data.stride+this.offset;for(let n=0;n<this.itemSize;n++)t.push(this.data.array[r+n])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else{if(e.interleavedBuffers===void 0)e.interleavedBuffers={};if(e.interleavedBuffers[this.data.uuid]===void 0)e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e);return{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Wa(e,this.data.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):Xa(e,this.data.array)}}var _c=new R,ig=new R,rg=new et;class Ai{constructor(e=new R(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let r=_c.subVectors(i,t).cross(ig.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let r=e.delta(_c),n=this.normal.dot(r);if(n===0){if(this.distanceToPoint(e.start)===0)return t.copy(e.start);return null}let s=-(e.start.dot(this.normal)+this.constant)/n;if(i===!0&&(s<0||s>1))return null;return t.copy(e.start).addScaledVector(r,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||rg.getNormalMatrix(e),r=this.coplanarPoint(_c).applyMatrix4(e),n=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(n),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}var ng=0;class Nt extends ei{constructor(){super();this.isMaterial=!0,Object.defineProperty(this,"id",{value:ng++}),this.uuid=hi(),this.name="",this.type="Material",this.blending=Ir,this.side=ki,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ea,this.blendDst=wa,this.blendEquation=Lr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ge(0,0,0),this.blendAlpha=0,this.depthFunc=Dr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Uh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=za,this.stencilZFail=za,this.stencilZPass=za,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){if(this._alphaTest>0!==e>0)this.version++;this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e===void 0)return;for(let t in e){let i=e[t];if(i===void 0){Te(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){Te(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}if(r&&r.isColor)r.set(i);else if(r&&r.isVector2&&(i&&i.isVector2)||r&&r.isEuler&&(i&&i.isEuler)||r&&r.isVector3&&(i&&i.isVector3))r.copy(i);else this[t]=i}}toJSON(e){let t=e===void 0||typeof e==="string";if(t)e={textures:{},images:{}};let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};if(i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor)i.color=this.color.getHex();if(this.roughness!==void 0)i.roughness=this.roughness;if(this.metalness!==void 0)i.metalness=this.metalness;if(this.sheen!==void 0)i.sheen=this.sheen;if(this.sheenColor&&this.sheenColor.isColor)i.sheenColor=this.sheenColor.getHex();if(this.sheenRoughness!==void 0)i.sheenRoughness=this.sheenRoughness;if(this.emissive&&this.emissive.isColor)i.emissive=this.emissive.getHex();if(this.emissiveIntensity!==void 0)i.emissiveIntensity=this.emissiveIntensity;if(this.specular&&this.specular.isColor)i.specular=this.specular.getHex();if(this.specularIntensity!==void 0)i.specularIntensity=this.specularIntensity;if(this.specularColor&&this.specularColor.isColor)i.specularColor=this.specularColor.getHex();if(this.shininess!==void 0)i.shininess=this.shininess;if(this.clearcoat!==void 0)i.clearcoat=this.clearcoat;if(this.clearcoatRoughness!==void 0)i.clearcoatRoughness=this.clearcoatRoughness;if(this.diffuseRoughness!==void 0)i.diffuseRoughness=this.diffuseRoughness;if(this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture)i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid;if(this.clearcoatMap&&this.clearcoatMap.isTexture)i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid;if(this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture)i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid;if(this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture)i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray();if(this.sheenColorMap&&this.sheenColorMap.isTexture)i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid;if(this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture)i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid;if(this.dispersion!==void 0)i.dispersion=this.dispersion;if(this.retroreflectivity!==void 0)i.retroreflectivity=this.retroreflectivity;if(this.iridescence!==void 0)i.iridescence=this.iridescence;if(this.iridescenceIOR!==void 0)i.iridescenceIOR=this.iridescenceIOR;if(this.iridescenceThicknessMinimum!==void 0)i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum;if(this.iridescenceThicknessMaximum!==void 0)i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum;if(this.iridescenceMap&&this.iridescenceMap.isTexture)i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid;if(this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture)i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid;if(this.anisotropy!==void 0)i.anisotropy=this.anisotropy;if(this.anisotropyRotation!==void 0)i.anisotropyRotation=this.anisotropyRotation;if(this.anisotropyMap&&this.anisotropyMap.isTexture)i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid;if(this.map&&this.map.isTexture)i.map=this.map.toJSON(e).uuid;if(this.matcap&&this.matcap.isTexture)i.matcap=this.matcap.toJSON(e).uuid;if(this.alphaMap&&this.alphaMap.isTexture)i.alphaMap=this.alphaMap.toJSON(e).uuid;if(this.lightMap&&this.lightMap.isTexture)i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity;if(this.aoMap&&this.aoMap.isTexture)i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity;if(this.bumpMap&&this.bumpMap.isTexture)i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale;if(this.normalMap&&this.normalMap.isTexture)i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray();if(this.displacementMap&&this.displacementMap.isTexture)i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias;if(this.roughnessMap&&this.roughnessMap.isTexture)i.roughnessMap=this.roughnessMap.toJSON(e).uuid;if(this.metalnessMap&&this.metalnessMap.isTexture)i.metalnessMap=this.metalnessMap.toJSON(e).uuid;if(this.emissiveMap&&this.emissiveMap.isTexture)i.emissiveMap=this.emissiveMap.toJSON(e).uuid;if(this.specularMap&&this.specularMap.isTexture)i.specularMap=this.specularMap.toJSON(e).uuid;if(this.specularIntensityMap&&this.specularIntensityMap.isTexture)i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid;if(this.specularColorMap&&this.specularColorMap.isTexture)i.specularColorMap=this.specularColorMap.toJSON(e).uuid;if(this.envMap&&this.envMap.isTexture){if(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0)i.combine=this.combine}if(this.envMapRotation!==void 0)i.envMapRotation=this.envMapRotation.toArray();if(this.envMapIntensity!==void 0)i.envMapIntensity=this.envMapIntensity;if(this.reflectivity!==void 0)i.reflectivity=this.reflectivity;if(this.refractionRatio!==void 0)i.refractionRatio=this.refractionRatio;if(this.gradientMap&&this.gradientMap.isTexture)i.gradientMap=this.gradientMap.toJSON(e).uuid;if(this.transmission!==void 0)i.transmission=this.transmission;if(this.transmissionMap&&this.transmissionMap.isTexture)i.transmissionMap=this.transmissionMap.toJSON(e).uuid;if(this.thickness!==void 0)i.thickness=this.thickness;if(this.thicknessMap&&this.thicknessMap.isTexture)i.thicknessMap=this.thicknessMap.toJSON(e).uuid;if(this.attenuationDistance!==void 0)i.attenuationDistance=this.attenuationDistance;if(this.attenuationColor!==void 0)i.attenuationColor=this.attenuationColor.getHex();if(this.size!==void 0)i.size=this.size;if(this.sizeAttenuation!==void 0)i.sizeAttenuation=this.sizeAttenuation;if(Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0)i.clippingPlanes=this.clippingPlanes.map((n)=>n.toJSON());if(this.rotation!==void 0)i.rotation=this.rotation;if(this.depthPacking!==void 0)i.depthPacking=this.depthPacking;if(this.linewidth!==void 0)i.linewidth=this.linewidth;if(this.linecap!==void 0)i.linecap=this.linecap;if(this.linejoin!==void 0)i.linejoin=this.linejoin;if(this.dashSize!==void 0)i.dashSize=this.dashSize;if(this.gapSize!==void 0)i.gapSize=this.gapSize;if(this.scale!==void 0)i.scale=this.scale;if(this.wireframe!==void 0)i.wireframe=this.wireframe;if(this.wireframeLinewidth!==void 0)i.wireframeLinewidth=this.wireframeLinewidth;if(this.wireframeLinecap!==void 0)i.wireframeLinecap=this.wireframeLinecap;if(this.wireframeLinejoin!==void 0)i.wireframeLinejoin=this.wireframeLinejoin;if(this.flatShading!==void 0)i.flatShading=this.flatShading;if(this.fog!==void 0)i.fog=this.fog;if(Object.keys(this.userData).length>0)i.userData=this.userData;function r(n){let s=[];for(let o in n){let a=n[o];delete a.metadata,s.push(a)}return s}if(t){let n=r(e.textures),s=r(e.images);if(n.length>0)i.textures=n;if(s.length>0)i.images=s}return i}fromJSON(e,t){if(e.uuid!==void 0)this.uuid=e.uuid;if(e.name!==void 0)this.name=e.name;if(e.color!==void 0&&this.color!==void 0)this.color.setHex(e.color);if(e.roughness!==void 0)this.roughness=e.roughness;if(e.metalness!==void 0)this.metalness=e.metalness;if(e.sheen!==void 0)this.sheen=e.sheen;if(e.sheenColor!==void 0)this.sheenColor=new ge().setHex(e.sheenColor);if(e.sheenRoughness!==void 0)this.sheenRoughness=e.sheenRoughness;if(e.emissive!==void 0&&this.emissive!==void 0)this.emissive.setHex(e.emissive);if(e.specular!==void 0&&this.specular!==void 0)this.specular.setHex(e.specular);if(e.specularIntensity!==void 0)this.specularIntensity=e.specularIntensity;if(e.specularColor!==void 0&&this.specularColor!==void 0)this.specularColor.setHex(e.specularColor);if(e.shininess!==void 0)this.shininess=e.shininess;if(e.clearcoat!==void 0)this.clearcoat=e.clearcoat;if(e.clearcoatRoughness!==void 0)this.clearcoatRoughness=e.clearcoatRoughness;if(e.diffuseRoughness!==void 0)this.diffuseRoughness=e.diffuseRoughness;if(e.dispersion!==void 0)this.dispersion=e.dispersion;if(e.retroreflectivity!==void 0)this.retroreflectivity=e.retroreflectivity;if(e.iridescence!==void 0)this.iridescence=e.iridescence;if(e.iridescenceIOR!==void 0)this.iridescenceIOR=e.iridescenceIOR;if(e.iridescenceThicknessMinimum!==void 0)this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum;if(e.iridescenceThicknessMaximum!==void 0)this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum;if(e.iridescenceThicknessRange!==void 0)this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1];if(e.transmission!==void 0)this.transmission=e.transmission;if(e.thickness!==void 0)this.thickness=e.thickness;if(e.attenuationDistance!==void 0)this.attenuationDistance=e.attenuationDistance;if(e.attenuationColor!==void 0&&this.attenuationColor!==void 0)this.attenuationColor.setHex(e.attenuationColor);if(e.anisotropy!==void 0)this.anisotropy=e.anisotropy;if(e.anisotropyRotation!==void 0)this.anisotropyRotation=e.anisotropyRotation;if(e.fog!==void 0)this.fog=e.fog;if(e.flatShading!==void 0)this.flatShading=e.flatShading;if(e.blending!==void 0)this.blending=e.blending;if(e.combine!==void 0)this.combine=e.combine;if(e.side!==void 0)this.side=e.side;if(e.shadowSide!==void 0)this.shadowSide=e.shadowSide;if(e.opacity!==void 0)this.opacity=e.opacity;if(e.transparent!==void 0)this.transparent=e.transparent;if(e.alphaTest!==void 0)this.alphaTest=e.alphaTest;if(e.alphaHash!==void 0)this.alphaHash=e.alphaHash;if(e.depthFunc!==void 0)this.depthFunc=e.depthFunc;if(e.depthTest!==void 0)this.depthTest=e.depthTest;if(e.depthWrite!==void 0)this.depthWrite=e.depthWrite;if(e.colorWrite!==void 0)this.colorWrite=e.colorWrite;if(e.clippingPlanes!==void 0)this.clippingPlanes=e.clippingPlanes.map((i)=>new Ai().fromJSON(i));if(e.clipIntersection!==void 0)this.clipIntersection=e.clipIntersection;if(e.clipShadows!==void 0)this.clipShadows=e.clipShadows;if(e.depthPacking!==void 0)this.depthPacking=e.depthPacking;if(e.blendSrc!==void 0)this.blendSrc=e.blendSrc;if(e.blendDst!==void 0)this.blendDst=e.blendDst;if(e.blendEquation!==void 0)this.blendEquation=e.blendEquation;if(e.blendSrcAlpha!==void 0)this.blendSrcAlpha=e.blendSrcAlpha;if(e.blendDstAlpha!==void 0)this.blendDstAlpha=e.blendDstAlpha;if(e.blendEquationAlpha!==void 0)this.blendEquationAlpha=e.blendEquationAlpha;if(e.blendColor!==void 0&&this.blendColor!==void 0)this.blendColor.setHex(e.blendColor);if(e.blendAlpha!==void 0)this.blendAlpha=e.blendAlpha;if(e.stencilWriteMask!==void 0)this.stencilWriteMask=e.stencilWriteMask;if(e.stencilFunc!==void 0)this.stencilFunc=e.stencilFunc;if(e.stencilRef!==void 0)this.stencilRef=e.stencilRef;if(e.stencilFuncMask!==void 0)this.stencilFuncMask=e.stencilFuncMask;if(e.stencilFail!==void 0)this.stencilFail=e.stencilFail;if(e.stencilZFail!==void 0)this.stencilZFail=e.stencilZFail;if(e.stencilZPass!==void 0)this.stencilZPass=e.stencilZPass;if(e.stencilWrite!==void 0)this.stencilWrite=e.stencilWrite;if(e.wireframe!==void 0)this.wireframe=e.wireframe;if(e.wireframeLinewidth!==void 0)this.wireframeLinewidth=e.wireframeLinewidth;if(e.wireframeLinecap!==void 0)this.wireframeLinecap=e.wireframeLinecap;if(e.wireframeLinejoin!==void 0)this.wireframeLinejoin=e.wireframeLinejoin;if(e.rotation!==void 0)this.rotation=e.rotation;if(e.linewidth!==void 0)this.linewidth=e.linewidth;if(e.linecap!==void 0)this.linecap=e.linecap;if(e.linejoin!==void 0)this.linejoin=e.linejoin;if(e.dashSize!==void 0)this.dashSize=e.dashSize;if(e.gapSize!==void 0)this.gapSize=e.gapSize;if(e.scale!==void 0)this.scale=e.scale;if(e.polygonOffset!==void 0)this.polygonOffset=e.polygonOffset;if(e.polygonOffsetFactor!==void 0)this.polygonOffsetFactor=e.polygonOffsetFactor;if(e.polygonOffsetUnits!==void 0)this.polygonOffsetUnits=e.polygonOffsetUnits;if(e.dithering!==void 0)this.dithering=e.dithering;if(e.alphaToCoverage!==void 0)this.alphaToCoverage=e.alphaToCoverage;if(e.premultipliedAlpha!==void 0)this.premultipliedAlpha=e.premultipliedAlpha;if(e.forceSinglePass!==void 0)this.forceSinglePass=e.forceSinglePass;if(e.allowOverride!==void 0)this.allowOverride=e.allowOverride;if(e.visible!==void 0)this.visible=e.visible;if(e.toneMapped!==void 0)this.toneMapped=e.toneMapped;if(e.userData!==void 0)this.userData=e.userData;if(e.vertexColors!==void 0)if(typeof e.vertexColors==="number")this.vertexColors=e.vertexColors>0;else this.vertexColors=e.vertexColors;if(e.size!==void 0)this.size=e.size;if(e.sizeAttenuation!==void 0)this.sizeAttenuation=e.sizeAttenuation;if(e.map!==void 0)this.map=t[e.map]||null;if(e.matcap!==void 0)this.matcap=t[e.matcap]||null;if(e.alphaMap!==void 0)this.alphaMap=t[e.alphaMap]||null;if(e.bumpMap!==void 0)this.bumpMap=t[e.bumpMap]||null;if(e.bumpScale!==void 0)this.bumpScale=e.bumpScale;if(e.normalMap!==void 0)this.normalMap=t[e.normalMap]||null;if(e.normalMapType!==void 0)this.normalMapType=e.normalMapType;if(e.normalScale!==void 0){let i=e.normalScale;if(Array.isArray(i)===!1)i=[i,i];this.normalScale=new J().fromArray(i)}if(e.displacementMap!==void 0)this.displacementMap=t[e.displacementMap]||null;if(e.displacementScale!==void 0)this.displacementScale=e.displacementScale;if(e.displacementBias!==void 0)this.displacementBias=e.displacementBias;if(e.roughnessMap!==void 0)this.roughnessMap=t[e.roughnessMap]||null;if(e.metalnessMap!==void 0)this.metalnessMap=t[e.metalnessMap]||null;if(e.emissiveMap!==void 0)this.emissiveMap=t[e.emissiveMap]||null;if(e.emissiveIntensity!==void 0)this.emissiveIntensity=e.emissiveIntensity;if(e.specularMap!==void 0)this.specularMap=t[e.specularMap]||null;if(e.specularIntensityMap!==void 0)this.specularIntensityMap=t[e.specularIntensityMap]||null;if(e.specularColorMap!==void 0)this.specularColorMap=t[e.specularColorMap]||null;if(e.envMap!==void 0)this.envMap=t[e.envMap]||null;if(e.envMapRotation!==void 0)this.envMapRotation.fromArray(e.envMapRotation);if(e.envMapIntensity!==void 0)this.envMapIntensity=e.envMapIntensity;if(e.reflectivity!==void 0)this.reflectivity=e.reflectivity;if(e.refractionRatio!==void 0)this.refractionRatio=e.refractionRatio;if(e.lightMap!==void 0)this.lightMap=t[e.lightMap]||null;if(e.lightMapIntensity!==void 0)this.lightMapIntensity=e.lightMapIntensity;if(e.aoMap!==void 0)this.aoMap=t[e.aoMap]||null;if(e.aoMapIntensity!==void 0)this.aoMapIntensity=e.aoMapIntensity;if(e.gradientMap!==void 0)this.gradientMap=t[e.gradientMap]||null;if(e.clearcoatMap!==void 0)this.clearcoatMap=t[e.clearcoatMap]||null;if(e.clearcoatRoughnessMap!==void 0)this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null;if(e.clearcoatNormalMap!==void 0)this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null;if(e.clearcoatNormalScale!==void 0)this.clearcoatNormalScale=new J().fromArray(e.clearcoatNormalScale);if(e.diffuseRoughnessMap!==void 0)this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null;if(e.iridescenceMap!==void 0)this.iridescenceMap=t[e.iridescenceMap]||null;if(e.iridescenceThicknessMap!==void 0)this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null;if(e.transmissionMap!==void 0)this.transmissionMap=t[e.transmissionMap]||null;if(e.thicknessMap!==void 0)this.thicknessMap=t[e.thicknessMap]||null;if(e.anisotropyMap!==void 0)this.anisotropyMap=t[e.anisotropyMap]||null;if(e.sheenColorMap!==void 0)this.sheenColorMap=t[e.sheenColorMap]||null;if(e.sheenRoughnessMap!==void 0)this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null;return this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let r=t.length;i=Array(r);for(let n=0;n!==r;++n)i[n]=t[n].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){if(e===!0)this.version++}}class zr extends Nt{constructor(e){super();this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ge(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}var xs,zo=new R,_s=new R,vs=new R,ys=new J,Go=new J,cu=new Je,el=new R,Vo=new R,tl=new R,au=new J,vc=new J,lu=new J;class Ms extends ft{constructor(e=new zr){super();if(this.isSprite=!0,this.type="Sprite",xs===void 0){xs=new Ye;let t=new Float32Array([-0.5,-0.5,0,0,0,0.5,-0.5,0,1,0,0.5,0.5,0,1,1,-0.5,0.5,0,0,1]),i=new gs(t,5);xs.setIndex([0,1,2,0,2,3]),xs.setAttribute("position",new xn(i,3,0,!1)),xs.setAttribute("uv",new xn(i,2,3,!1))}this.geometry=xs,this.material=e,this.center=new J(0.5,0.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){if(e.camera===null)Ge('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.');if(_s.setFromMatrixScale(this.matrixWorld),cu.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),vs.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1)_s.multiplyScalar(-vs.z);let i=this.material.rotation,r,n;if(i!==0)n=Math.cos(i),r=Math.sin(i);let s=this.center;il(el.set(-0.5,-0.5,0),vs,s,_s,r,n),il(Vo.set(0.5,-0.5,0),vs,s,_s,r,n),il(tl.set(0.5,0.5,0),vs,s,_s,r,n),au.set(0,0),vc.set(1,0),lu.set(1,1);let o=e.ray.intersectTriangle(el,Vo,tl,!1,zo);if(o===null){if(il(Vo.set(-0.5,0.5,0),vs,s,_s,r,n),vc.set(0,1),o=e.ray.intersectTriangle(el,tl,Vo,!1,zo),o===null)return}let a=e.ray.origin.distanceTo(zo);if(a<e.near||a>e.far)return;t.push({distance:a,point:zo.clone(),uv:Mi.getInterpolation(zo,el,Vo,tl,au,vc,lu,new J),face:null,object:this})}copy(e,t){if(super.copy(e,t),e.center!==void 0)this.center.copy(e.center);return this.material=e.material,this}toJSON(e){let t=super.toJSON(e);return t.object.center=this.center.toArray(),t}}function il(e,t,i,r,n,s){if(ys.subVectors(e,i).addScalar(0.5).multiply(r),n!==void 0)Go.x=s*ys.x-n*ys.y,Go.y=n*ys.x+s*ys.y;else Go.copy(ys);e.copy(t),e.x+=Go.x,e.y+=Go.y,e.applyMatrix4(cu)}var Tr=new R,yc=new R,rl=new R,nl=new R;class dr{constructor(e=new R,t=new R(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Tr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);if(i<0)return t.copy(this.origin);return t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Tr.subVectors(e,this.origin).dot(this.direction);if(t<0)return this.origin.distanceToSquared(e);return Tr.copy(this.origin).addScaledVector(this.direction,t),Tr.distanceToSquared(e)}distanceSqToSegment(e,t,i,r){yc.copy(e).add(t).multiplyScalar(0.5),rl.copy(t).sub(e).normalize(),nl.copy(this.origin).sub(yc);let n=e.distanceTo(t)*0.5,s=-this.direction.dot(rl),o=nl.dot(this.direction),a=-nl.dot(rl),l=nl.lengthSq(),c=Math.abs(1-s*s),f,u,h,p;if(c>0)if(f=s*a-o,u=s*o-a,p=n*c,f>=0)if(u>=-p)if(u<=p){let x=1/c;f*=x,u*=x,h=f*(f+s*u+2*o)+u*(s*f+u+2*a)+l}else u=n,f=Math.max(0,-(s*u+o)),h=-f*f+u*(u+2*a)+l;else u=-n,f=Math.max(0,-(s*u+o)),h=-f*f+u*(u+2*a)+l;else if(u<=-p)f=Math.max(0,-(-s*n+o)),u=f>0?-n:Math.min(Math.max(-n,-a),n),h=-f*f+u*(u+2*a)+l;else if(u<=p)f=0,u=Math.min(Math.max(-n,-a),n),h=u*(u+2*a)+l;else f=Math.max(0,-(s*n+o)),u=f>0?n:Math.min(Math.max(-n,-a),n),h=-f*f+u*(u+2*a)+l;else u=s>0?-n:n,f=Math.max(0,-(s*u+o)),h=-f*f+u*(u+2*a)+l;if(i)i.copy(this.origin).addScaledVector(this.direction,f);if(r)r.copy(yc).addScaledVector(rl,u);return h}intersectSphere(e,t){if(e.radius<0)return null;Tr.subVectors(e.center,this.origin);let i=Tr.dot(this.direction),r=Tr.dot(Tr)-i*i,n=e.radius*e.radius;if(r>n)return null;let s=Math.sqrt(n-r),o=i-s,a=i+s;if(a<0)return null;if(o<0)return this.at(a,t);return this.at(o,t)}intersectsSphere(e){if(e.radius<0)return!1;return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0){if(e.distanceToPoint(this.origin)===0)return 0;return null}let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);if(i===null)return null;return this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);if(t===0)return!0;if(e.normal.dot(this.direction)*t<0)return!0;return!1}intersectBox(e,t){let i,r,n,s,o,a,l=1/this.direction.x,c=1/this.direction.y,f=1/this.direction.z,u=this.origin;if(l>=0)i=(e.min.x-u.x)*l,r=(e.max.x-u.x)*l;else i=(e.max.x-u.x)*l,r=(e.min.x-u.x)*l;if(c>=0)n=(e.min.y-u.y)*c,s=(e.max.y-u.y)*c;else n=(e.max.y-u.y)*c,s=(e.min.y-u.y)*c;if(i>s||n>r)return null;if(n>i||isNaN(i))i=n;if(s<r||isNaN(r))r=s;if(f>=0)o=(e.min.z-u.z)*f,a=(e.max.z-u.z)*f;else o=(e.max.z-u.z)*f,a=(e.min.z-u.z)*f;if(i>a||o>r)return null;if(o>i||i!==i)i=o;if(a<r||r!==r)r=a;if(r<0)return null;return this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Tr)!==null}intersectTriangle(e,t,i,r,n){let s=this.origin,o=this.direction,{x:a,y:l,z:c}=o,f=e.x-s.x,u=e.y-s.y,h=e.z-s.z,p=t.x-s.x,x=t.y-s.y,y=t.z-s.z,d=i.x-s.x,m=i.y-s.y,b=i.z-s.z,E=Math.abs(a),M=Math.abs(l),I=Math.abs(c),L,g,S,N,W,U,X,ne,C,Q,ie,H;if(E>=M&&E>=I)if(S=a,U=f,C=p,H=d,a>=0)L=l,g=c,N=u,W=h,X=x,ne=y,Q=m,ie=b;else L=c,g=l,N=h,W=u,X=y,ne=x,Q=b,ie=m;else if(M>=I)if(S=l,U=u,C=x,H=m,l>=0)L=c,g=a,N=h,W=f,X=y,ne=p,Q=b,ie=d;else L=a,g=c,N=f,W=h,X=p,ne=y,Q=d,ie=b;else if(S=c,U=h,C=y,H=b,c>=0)L=a,g=l,N=f,W=u,X=p,ne=x,Q=d,ie=m;else L=l,g=a,N=u,W=f,X=x,ne=p,Q=m,ie=d;if(S===0)return null;let _e=L/S,j=g/S,se=1/S,de=N-_e*U,Fe=W-j*U,te=X-_e*C,ce=ne-j*C,He=Q-_e*H,ze=ie-j*H,Ke=He*ce-ze*te,Le=de*ze-Fe*He,yt=te*Fe-ce*de;if(r){if(Ke<0||Le<0||yt<0)return null}else if((Ke<0||Le<0||yt<0)&&(Ke>0||Le>0||yt>0))return null;let mt=Ke+Le+yt;if(mt===0)return null;let nt=se*(Ke*U+Le*C+yt*H);if(mt>0?nt<0:nt>0)return null;return this.at(nt/mt,n)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Vt extends Nt{constructor(e){super();this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vi,this.combine=en,this.reflectivity=1,this.refractionRatio=0.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}var hu=new Je,_n=new dr,sl=new ti,uu=new R,ol=new R,al=new R,ll=new R,Mc=new R,cl=new R,fu=new R,hl=new R;class rt extends ft{constructor(e=new Ye,t=new Vt){super();this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){if(super.copy(e,t),e.morphTargetInfluences!==void 0)this.morphTargetInfluences=e.morphTargetInfluences.slice();else this.morphTargetInfluences=void 0;if(e.morphTargetDictionary!==void 0)this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary);else this.morphTargetDictionary=void 0;return this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let n=0,s=r.length;n<s;n++){let o=r[n].name||String(n);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=n}}}}getVertexPosition(e,t){let i=this.geometry,r=i.attributes.position,n=i.morphAttributes.position,s=i.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(n&&o){cl.set(0,0,0);for(let a=0,l=n.length;a<l;a++){let c=o[a],f=n[a];if(c===0)continue;if(Mc.fromBufferAttribute(f,e),s)cl.addScaledVector(Mc,c);else cl.addScaledVector(Mc.sub(t),c)}t.add(cl)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,r=this.material,n=this.matrixWorld;if(r===void 0)return;if(i.boundingSphere===null)i.computeBoundingSphere();if(sl.copy(i.boundingSphere),sl.applyMatrix4(n),_n.copy(e.ray).recast(e.near),sl.containsPoint(_n.origin)===!1){if(_n.intersectSphere(sl,uu)===null)return;if(_n.origin.distanceToSquared(uu)>(e.far-e.near)**2)return}if(hu.copy(n).invert(),_n.copy(e.ray).applyMatrix4(hu),i.boundingBox!==null){if(_n.intersectsBox(i.boundingBox)===!1)return}this._computeIntersections(e,t,_n)}_computeIntersections(e,t,i){let r,n=this.geometry,s=this.material,o=n.index,a=n.attributes.position,l=n.attributes.uv,c=n.attributes.uv1,f=n.attributes.normal,{groups:u,drawRange:h}=n;if(o!==null)if(Array.isArray(s))for(let p=0,x=u.length;p<x;p++){let y=u[p],d=s[y.materialIndex],m=Math.max(y.start,h.start),b=Math.min(o.count,Math.min(y.start+y.count,h.start+h.count));for(let E=m,M=b;E<M;E+=3){let I=o.getX(E),L=o.getX(E+1),g=o.getX(E+2);if(r=ul(this,d,e,i,l,c,f,I,L,g),r)r.faceIndex=Math.floor(E/3),r.face.materialIndex=y.materialIndex,t.push(r)}}else{let p=Math.max(0,h.start),x=Math.min(o.count,h.start+h.count);for(let y=p,d=x;y<d;y+=3){let m=o.getX(y),b=o.getX(y+1),E=o.getX(y+2);if(r=ul(this,s,e,i,l,c,f,m,b,E),r)r.faceIndex=Math.floor(y/3),t.push(r)}}else if(a!==void 0)if(Array.isArray(s))for(let p=0,x=u.length;p<x;p++){let y=u[p],d=s[y.materialIndex],m=Math.max(y.start,h.start),b=Math.min(a.count,Math.min(y.start+y.count,h.start+h.count));for(let E=m,M=b;E<M;E+=3){let I=E,L=E+1,g=E+2;if(r=ul(this,d,e,i,l,c,f,I,L,g),r)r.faceIndex=Math.floor(E/3),r.face.materialIndex=y.materialIndex,t.push(r)}}else{let p=Math.max(0,h.start),x=Math.min(a.count,h.start+h.count);for(let y=p,d=x;y<d;y+=3){let m=y,b=y+1,E=y+2;if(r=ul(this,s,e,i,l,c,f,m,b,E),r)r.faceIndex=Math.floor(y/3),t.push(r)}}}}function sg(e,t,i,r,n,s,o,a){let l;if(t.side===Ot)l=r.intersectTriangle(o,s,n,!0,a);else l=r.intersectTriangle(n,s,o,t.side===ki,a);if(l===null)return null;hl.copy(a),hl.applyMatrix4(e.matrixWorld);let c=i.ray.origin.distanceTo(hl);if(c<i.near||c>i.far)return null;return{distance:c,point:hl.clone(),object:e}}function ul(e,t,i,r,n,s,o,a,l,c){e.getVertexPosition(a,ol),e.getVertexPosition(l,al),e.getVertexPosition(c,ll);let f=sg(e,t,i,r,ol,al,ll,fu);if(f){let u=new R;if(Mi.getBarycoord(fu,ol,al,ll,u),n)f.uv=Mi.getInterpolatedAttribute(n,a,l,c,u,new J);if(s)f.uv1=Mi.getInterpolatedAttribute(s,a,l,c,u,new J);if(o){if(f.normal=Mi.getInterpolatedAttribute(o,a,l,c,u,new R),f.normal.dot(r.direction)>0)f.normal.multiplyScalar(-1)}let h={a,b:l,c,normal:new R,materialIndex:0};Mi.getNormal(ol,al,ll,h.normal),f.face=h,f.barycoord=u}return f}class pr extends Tt{constructor(e=null,t=1,i=1,r,n,s,o,a,l=Dt,c=Dt,f,u){super(null,s,o,a,l,c,r,n,f,u);this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class vn extends Kt{constructor(e,t,i,r=1){super(e,t,i);this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}var Ss=new Je,pu=new Je,fl=[],mu=new Si,og=new Je,Ho=new rt,ko=new ti;class Wo extends rt{constructor(e,t,i){super(e,t);this.isInstancedMesh=!0,this.instanceMatrix=new vn(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,og)}computeBoundingBox(){let e=this.geometry,t=this.count;if(this.boundingBox===null)this.boundingBox=new Si;if(e.boundingBox===null)e.computeBoundingBox();this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Ss),mu.copy(e.boundingBox).applyMatrix4(Ss),this.boundingBox.union(mu)}computeBoundingSphere(){let e=this.geometry,t=this.count;if(this.boundingSphere===null)this.boundingSphere=new ti;if(e.boundingSphere===null)e.computeBoundingSphere();this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Ss),ko.copy(e.boundingSphere).applyMatrix4(Ss),this.boundingSphere.union(ko)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){if(this.instanceColor===null)return t.setRGB(1,1,1);else return t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,r=this.morphTexture.source.data.data,n=i.length+1,s=e*n+1;for(let o=0;o<i.length;o++)i[o]=r[s+o]}raycast(e,t){let i=this.matrixWorld,r=this.count;if(Ho.geometry=this.geometry,Ho.material=this.material,Ho.material===void 0)return;if(this.boundingSphere===null)this.computeBoundingSphere();if(ko.copy(this.boundingSphere),ko.applyMatrix4(i),e.ray.intersectsSphere(ko)===!1)return;for(let n=0;n<r;n++){this.getMatrixAt(n,Ss),pu.multiplyMatrices(i,Ss),Ho.matrixWorld=pu,Ho.raycast(e,fl);for(let s=0,o=fl.length;s<o;s++){let a=fl[s];a.instanceId=n,a.object=this,t.push(a)}fl.length=0}}setColorAt(e,t){if(this.instanceColor===null)this.instanceColor=new vn(new Float32Array(this.instanceMatrix.count*3).fill(1),3);return t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let i=t.morphTargetInfluences,r=i.length+1;if(this.morphTexture===null)this.morphTexture=new pr(new Float32Array(r*this.count),r,this.count,Yn,Jt);let n=this.morphTexture.source.data.data,s=0;for(let l=0;l<i.length;l++)s+=i[l];let o=this.geometry.morphTargetsRelative?1:1-s,a=r*e;return n[a]=o,n.set(i,a+1),this}updateMorphTargets(){}dispose(){if(super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null)this.instanceColor.dispose();if(this.morphTexture!==null)this.morphTexture.dispose(),this.morphTexture=null}}var yn=new ti,ag=new J(0.5,0.5),dl=new R;class Ki{constructor(e=new Ai,t=new Ai,i=new Ai,r=new Ai,n=new Ai,s=new Ai){this.planes=[e,t,i,r,n,s]}set(e,t,i,r,n,s){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(n),o[5].copy(s),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=ci,i=!1){let r=this.planes,n=e.elements,s=n[0],o=n[1],a=n[2],l=n[3],c=n[4],f=n[5],u=n[6],h=n[7],p=n[8],x=n[9],y=n[10],d=n[11],m=n[12],b=n[13],E=n[14],M=n[15];if(r[0].setComponents(l-s,h-c,d-p,M-m).normalize(),r[1].setComponents(l+s,h+c,d+p,M+m).normalize(),r[2].setComponents(l+o,h+f,d+x,M+b).normalize(),r[3].setComponents(l-o,h-f,d-x,M-b).normalize(),i)r[4].setComponents(a,u,y,E).normalize(),r[5].setComponents(l-a,h-u,d-y,M-E).normalize();else if(r[4].setComponents(l-a,h-u,d-y,M-E).normalize(),t===ci)r[5].setComponents(l+a,h+u,d+y,M+E).normalize();else if(t===ur)r[5].setComponents(a,u,y,E).normalize();else throw Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0){if(e.boundingSphere===null)e.computeBoundingSphere();yn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld)}else{let t=e.geometry;if(t.boundingSphere===null)t.computeBoundingSphere();yn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(yn)}intersectsSprite(e){yn.center.set(0,0,0);let t=ag.distanceTo(e.center);return yn.radius=0.7071067811865476+t,yn.applyMatrix4(e.matrixWorld),this.intersectsSphere(yn)}intersectsSphere(e){let t=this.planes,i=e.center,r=-e.radius;for(let n=0;n<6;n++)if(t[n].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let r=t[i];if(dl.x=r.normal.x>0?e.max.x:e.min.x,dl.y=r.normal.y>0?e.max.y:e.min.y,dl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(dl)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}var gu=new Je;class bs{constructor(){this.coordinateSystem=ci,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,i=this._frustums;for(let r=0;r<t.length;r++){let n=t[r];if(gu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),i[r]===void 0)i[r]=new Ki;i[r].setFromProjectionMatrix(gu,n.coordinateSystem,n.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,i=e._frustums;for(let r=0;r<e._count;r++){if(t[r]===void 0)t[r]=new Ki;t[r].copy(i[r])}return this._count=e._count,this}clone(){return new bs().copy(this)}}class mi extends Nt{constructor(e){super();this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ge(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}var gl=new R,xl=new R,xu=new Je,Xo=new dr,pl=new ti,Sc=new R,_u=new R;class Er extends ft{constructor(e=new Ye,t=new mi){super();this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){if(super.copy(e,t),e.morphTargetInfluences!==void 0)this.morphTargetInfluences=e.morphTargetInfluences.slice();else this.morphTargetInfluences=void 0;if(e.morphTargetDictionary!==void 0)this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary);else this.morphTargetDictionary=void 0;return this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let r=1,n=t.count;r<n;r++)gl.fromBufferAttribute(t,r-1),xl.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=gl.distanceTo(xl);e.setAttribute("lineDistance",new Ve(i,1))}else Te("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,r=this.matrixWorld,n=e.params.Line.threshold,s=i.drawRange;if(i.boundingSphere===null)i.computeBoundingSphere();if(pl.copy(i.boundingSphere),pl.applyMatrix4(r),pl.radius+=n,e.ray.intersectsSphere(pl)===!1)return;xu.copy(r).invert(),Xo.copy(e.ray).applyMatrix4(xu);let o=n/((this.scale.x+this.scale.y+this.scale.z)/3),a=o*o,l=this.isLineSegments?2:1,c=i.index,u=i.attributes.position;if(c!==null){let h=Math.max(0,s.start),p=Math.min(c.count,s.start+s.count);for(let x=h,y=p-1;x<y;x+=l){let d=c.getX(x),m=c.getX(x+1),b=ml(this,e,Xo,a,d,m,x);if(b)t.push(b)}if(this.isLineLoop){let x=c.getX(p-1),y=c.getX(h),d=ml(this,e,Xo,a,x,y,p-1);if(d)t.push(d)}}else{let h=Math.max(0,s.start),p=Math.min(u.count,s.start+s.count);for(let x=h,y=p-1;x<y;x+=l){let d=ml(this,e,Xo,a,x,x+1,x);if(d)t.push(d)}if(this.isLineLoop){let x=ml(this,e,Xo,a,p-1,h,p-1);if(x)t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let n=0,s=r.length;n<s;n++){let o=r[n].name||String(n);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=n}}}}}function ml(e,t,i,r,n,s,o){let a=e.geometry.attributes.position;if(gl.fromBufferAttribute(a,n),xl.fromBufferAttribute(a,s),i.distanceSqToSegment(gl,xl,Sc,_u)>r)return;Sc.applyMatrix4(e.matrixWorld);let c=t.ray.origin.distanceTo(Sc);if(c<t.near||c>t.far)return;return{distance:c,point:_u.clone().applyMatrix4(e.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:e}}var vu=new R,yu=new R;class Ii extends Er{constructor(e,t){super(e,t);this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let r=0,n=t.count;r<n;r+=2)vu.fromBufferAttribute(t,r),yu.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+vu.distanceTo(yu);e.setAttribute("lineDistance",new Ve(i,1))}else Te("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Mn extends Nt{constructor(e){super();this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ge(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}var Mu=new Je,bc=new dr,_l=new ti,vl=new R;class qo extends ft{constructor(e=new Ye,t=new Mn){super();this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){if(super.copy(e,t),e.morphTargetInfluences!==void 0)this.morphTargetInfluences=e.morphTargetInfluences.slice();else this.morphTargetInfluences=void 0;if(e.morphTargetDictionary!==void 0)this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary);else this.morphTargetDictionary=void 0;return this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,r=this.matrixWorld,n=e.params.Points.threshold,s=i.drawRange;if(i.boundingSphere===null)i.computeBoundingSphere();if(_l.copy(i.boundingSphere),_l.applyMatrix4(r),_l.radius+=n,e.ray.intersectsSphere(_l)===!1)return;Mu.copy(r).invert(),bc.copy(e.ray).applyMatrix4(Mu);let o=n/((this.scale.x+this.scale.y+this.scale.z)/3),a=o*o,l=i.index,f=i.attributes.position;if(l!==null){let u=Math.max(0,s.start),h=Math.min(l.count,s.start+s.count);for(let p=u,x=h;p<x;p++){let y=l.getX(p);vl.fromBufferAttribute(f,y),Su(vl,y,a,r,e,t,this)}}else{let u=Math.max(0,s.start),h=Math.min(f.count,s.start+s.count);for(let p=u,x=h;p<x;p++)vl.fromBufferAttribute(f,p),Su(vl,p,a,r,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let n=0,s=r.length;n<s;n++){let o=r[n].name||String(n);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=n}}}}}function Su(e,t,i,r,n,s,o){let a=bc.distanceSqToPoint(e);if(a<i){let l=new R;bc.closestPointToPoint(e,l),l.applyMatrix4(r);let c=n.ray.origin.distanceTo(l);if(c<n.near||c>n.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class Gr extends Tt{constructor(e=[],t=Xi,i,r,n,s,o,a,l,c){super(e,t,i,r,n,s,o,a,l,c);this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class bi extends Tt{constructor(e,t,i,r,n,s,o,a,l){super(e,t,i,r,n,s,o,a,l);this.isCanvasTexture=!0,this.needsUpdate=!0}}class Oi extends Tt{constructor(e,t,i=jt,r,n,s,o=Dt,a=Dt,l,c=Pi,f=1){if(c!==Pi&&c!==Ni)throw Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:e,height:t,depth:f};super(u,r,n,s,o,a,c,i,l);this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new fr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class Ts extends Oi{constructor(e,t=jt,i=Xi,r,n,s=Dt,o=Dt,a,l=Pi){let c={width:e,height:e,depth:1},f=[c,c,c,c,c,c];super(e,e,t,i,r,n,s,o,a,l);this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Es extends Tt{constructor(e=null){super();this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Li extends Ye{constructor(e=1,t=1,i=1,r=1,n=1,s=1){super();this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:n,depthSegments:s};let o=this;r=Math.floor(r),n=Math.floor(n),s=Math.floor(s);let a=[],l=[],c=[],f=[],u=0,h=0;p("z","y","x",-1,-1,i,t,e,s,n,0),p("z","y","x",1,-1,i,t,-e,s,n,1),p("x","z","y",1,1,e,i,t,r,s,2),p("x","z","y",1,-1,e,i,-t,r,s,3),p("x","y","z",1,-1,e,t,i,r,n,4),p("x","y","z",-1,-1,e,t,-i,r,n,5),this.setIndex(a),this.setAttribute("position",new Ve(l,3)),this.setAttribute("normal",new Ve(c,3)),this.setAttribute("uv",new Ve(f,2));function p(x,y,d,m,b,E,M,I,L,g,S){let N=E/L,W=M/g,U=E/2,X=M/2,ne=I/2,C=L+1,Q=g+1,ie=0,H=0,_e=new R;for(let j=0;j<Q;j++){let se=j*W-X;for(let de=0;de<C;de++){let Fe=de*N-U;_e[x]=Fe*m,_e[y]=se*b,_e[d]=ne,l.push(_e.x,_e.y,_e.z),_e[x]=0,_e[y]=0,_e[d]=I>0?1:-1,c.push(_e.x,_e.y,_e.z),f.push(de/L),f.push(1-j/g),ie+=1}}for(let j=0;j<g;j++)for(let se=0;se<L;se++){let de=u+se+C*j,Fe=u+se+C*(j+1),te=u+(se+1)+C*(j+1),ce=u+(se+1)+C*j;a.push(de,Fe,ce),a.push(Fe,te,ce),H+=6}o.addGroup(h,H,S),h+=H,u+=ie}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Li(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class yl extends Ye{constructor(e=1,t=32,i=0,r=Math.PI*2){super();this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:r},t=Math.max(3,t);let n=[],s=[],o=[],a=[],l=new R,c=new J;s.push(0,0,0),o.push(0,0,1),a.push(0.5,0.5);for(let f=0,u=3;f<=t;f++,u+=3){let h=i+f/t*r;l.x=e*Math.cos(h),l.y=e*Math.sin(h),s.push(l.x,l.y,l.z),o.push(0,0,1),c.x=(s[u]/e+1)/2,c.y=(s[u+1]/e+1)/2,a.push(c.x,c.y)}for(let f=1;f<=t;f++)n.push(f,f+1,0);this.setIndex(n),this.setAttribute("position",new Ve(s,3)),this.setAttribute("normal",new Ve(o,3)),this.setAttribute("uv",new Ve(a,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yl(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Yo extends Ye{constructor(e=1,t=1,i=1,r=32,n=1,s=!1,o=0,a=Math.PI*2){super();this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:n,openEnded:s,thetaStart:o,thetaLength:a};let l=this;r=Math.floor(r),n=Math.floor(n);let c=[],f=[],u=[],h=[],p=0,x=[],y=i/2,d=0;if(m(),s===!1){if(e>0)b(!0);if(t>0)b(!1)}this.setIndex(c),this.setAttribute("position",new Ve(f,3)),this.setAttribute("normal",new Ve(u,3)),this.setAttribute("uv",new Ve(h,2));function m(){let E=new R,M=new R,I=0,L=(t-e)/i;for(let g=0;g<=n;g++){let S=[],N=g/n,W=N*(t-e)+e;for(let U=0;U<=r;U++){let X=U/r,ne=X*a+o,C=Math.sin(ne),Q=Math.cos(ne);M.x=W*C,M.y=-N*i+y,M.z=W*Q,f.push(M.x,M.y,M.z),E.set(C,L,Q).normalize(),u.push(E.x,E.y,E.z),h.push(X,1-N),S.push(p++)}x.push(S)}for(let g=0;g<r;g++)for(let S=0;S<n;S++){let N=x[S][g],W=x[S+1][g],U=x[S+1][g+1],X=x[S][g+1];if(e>0||S!==0)c.push(N,W,X),I+=3;if(t>0||S!==n-1)c.push(W,U,X),I+=3}l.addGroup(d,I,0),d+=I}function b(E){let M=p,I=new J,L=new R,g=0,S=E===!0?e:t,N=E===!0?1:-1;for(let U=1;U<=r;U++)f.push(0,y*N,0),u.push(0,N,0),h.push(0.5,0.5),p++;let W=p;for(let U=0;U<=r;U++){let ne=U/r*a+o,C=Math.cos(ne),Q=Math.sin(ne);L.x=S*Q,L.y=y*N,L.z=S*C,f.push(L.x,L.y,L.z),u.push(0,N,0),I.x=C*0.5+0.5,I.y=Q*0.5*N+0.5,h.push(I.x,I.y),p++}for(let U=0;U<r;U++){let X=M+U,ne=W+U;if(E===!0)c.push(ne,ne+1,X);else c.push(ne+1,ne,X);g+=3}l.addGroup(d,g,E===!0?1:2),d+=g}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yo(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Yt{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Te("Curve: .getPoint() not implemented.")}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,r=this.getPoint(0),n=0;t.push(0);for(let s=1;s<=e;s++)i=this.getPoint(s/e),n+=i.distanceTo(r),t.push(n),r=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let i=this.getLengths(),r=0,n=i.length,s;if(t)s=t;else s=e*i[n-1];let o=0,a=n-1,l;while(o<=a)if(r=Math.floor(o+(a-o)/2),l=i[r]-s,l<0)o=r+1;else if(l>0)a=r-1;else{a=r;break}if(r=a,i[r]===s)return r/(n-1);let c=i[r],u=i[r+1]-c,h=(s-c)/u;return(r+h)/(n-1)}getTangent(e,t){let r=e-0.0001,n=e+0.0001;if(r<0)r=0;if(n>1)n=1;let s=this.getPoint(r),o=this.getPoint(n),a=t||(s.isVector2?new J:new R);return a.copy(o).sub(s).normalize(),a}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){let i=new R,r=[],n=[],s=[],o=new R,a=new Je;for(let h=0;h<=e;h++){let p=h/e;r[h]=this.getTangentAt(p,new R)}n[0]=new R,s[0]=new R;let l=Number.MAX_VALUE,c=Math.abs(r[0].x),f=Math.abs(r[0].y),u=Math.abs(r[0].z);if(c<=l)l=c,i.set(1,0,0);if(f<=l)l=f,i.set(0,1,0);if(u<=l)i.set(0,0,1);o.crossVectors(r[0],i).normalize(),n[0].crossVectors(r[0],o),s[0].crossVectors(r[0],n[0]);for(let h=1;h<=e;h++){if(n[h]=n[h-1].clone(),s[h]=s[h-1].clone(),o.crossVectors(r[h-1],r[h]),o.length()>Number.EPSILON){o.normalize();let p=Math.acos(st(r[h-1].dot(r[h]),-1,1));n[h].applyMatrix4(a.makeRotationAxis(o,p))}s[h].crossVectors(r[h],n[h])}if(t===!0){let h=Math.acos(st(n[0].dot(n[e]),-1,1));if(h/=e,r[0].dot(o.crossVectors(n[0],n[e]))>0)h=-h;for(let p=1;p<=e;p++)n[p].applyMatrix4(a.makeRotationAxis(r[p],h*p)),s[p].crossVectors(r[p],n[p])}return{tangents:r,normals:n,binormals:s}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}}class Sn extends Yt{constructor(e=0,t=0,i=1,r=1,n=0,s=Math.PI*2,o=!1,a=0){super();this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=r,this.aStartAngle=n,this.aEndAngle=s,this.aClockwise=o,this.aRotation=a}getPoint(e,t=new J){let i=t,r=Math.PI*2,n=this.aEndAngle-this.aStartAngle,s=Math.abs(n)<Number.EPSILON;while(n<0)n+=r;while(n>r)n-=r;if(n<Number.EPSILON)if(s)n=0;else n=r;if(this.aClockwise===!0&&!s)if(n===r)n=-r;else n=n-r;let o=this.aStartAngle+e*n,a=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let c=Math.cos(this.aRotation),f=Math.sin(this.aRotation),u=a-this.aX,h=l-this.aY;a=u*c-h*f+this.aX,l=u*f+h*c+this.aY}return i.set(a,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class wc extends Sn{constructor(e,t,i,r,n,s){super(e,t,i,i,r,n,s);this.isArcCurve=!0,this.type="ArcCurve"}}function Pc(){let e=0,t=0,i=0,r=0;function n(s,o,a,l){e=s,t=a,i=-3*s+3*o-2*a-l,r=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){n(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,f,u){let h=(o-s)/c-(a-s)/(c+f)+(a-o)/f,p=(a-o)/f-(l-o)/(f+u)+(l-a)/u;h*=f,p*=f,n(o,a,h,p)},calc:function(s){let o=s*s,a=o*s;return e+t*s+i*o+r*a}}}var bu=new R,Tu=new R,Ac=new Pc,Rc=new Pc,Cc=new Pc;class Ic extends Yt{constructor(e=[],t=!1,i="centripetal",r=0.5){super();this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=r}getPoint(e,t=new R){let i=t,r=this.points,n=r.length,s=(n-(this.closed?0:1))*e,o=Math.floor(s),a=s-o;if(this.closed)o+=o>0?0:(Math.floor(Math.abs(o)/n)+1)*n;else if(a===0&&o===n-1)o=n-2,a=1;let l,c;if(this.closed||o>0)l=r[(o-1)%n];else Tu.subVectors(r[0],r[1]).add(r[0]),l=Tu;let f=r[o%n],u=r[(o+1)%n];if(this.closed||o+2<n)c=r[(o+2)%n];else bu.subVectors(r[n-1],r[n-2]).add(r[n-1]),c=bu;if(this.curveType==="centripetal"||this.curveType==="chordal"){let h=this.curveType==="chordal"?0.5:0.25,p=Math.pow(l.distanceToSquared(f),h),x=Math.pow(f.distanceToSquared(u),h),y=Math.pow(u.distanceToSquared(c),h);if(x<0.0001)x=1;if(p<0.0001)p=x;if(y<0.0001)y=x;Ac.initNonuniformCatmullRom(l.x,f.x,u.x,c.x,p,x,y),Rc.initNonuniformCatmullRom(l.y,f.y,u.y,c.y,p,x,y),Cc.initNonuniformCatmullRom(l.z,f.z,u.z,c.z,p,x,y)}else if(this.curveType==="catmullrom")Ac.initCatmullRom(l.x,f.x,u.x,c.x,this.tension),Rc.initCatmullRom(l.y,f.y,u.y,c.y,this.tension),Cc.initCatmullRom(l.z,f.z,u.z,c.z,this.tension);return i.set(Ac.calc(a),Rc.calc(a),Cc.calc(a)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(new R().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Lc(e,t,i,r,n){let s=(r-t)*0.5,o=(n-i)*0.5,a=e*e,l=e*a;return(2*i-2*r+s+o)*l+(-3*i+3*r-2*s-o)*a+s*e+i}function cg(e,t){let i=1-e;return i*i*t}function hg(e,t){return 2*(1-e)*e*t}function ug(e,t){return e*e*t}function bn(e,t,i,r){return cg(e,t)+hg(e,i)+ug(e,r)}function fg(e,t){let i=1-e;return i*i*i*t}function dg(e,t){let i=1-e;return 3*i*i*e*t}function pg(e,t){return 3*(1-e)*e*e*t}function mg(e,t){return e*e*e*t}function Tn(e,t,i,r,n){return fg(e,t)+dg(e,i)+pg(e,r)+mg(e,n)}class Zo extends Yt{constructor(e=new J,t=new J,i=new J,r=new J){super();this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new J){let i=t,r=this.v0,n=this.v1,s=this.v2,o=this.v3;return i.set(Tn(e,r.x,n.x,s.x,o.x),Tn(e,r.y,n.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Dc extends Yt{constructor(e=new R,t=new R,i=new R,r=new R){super();this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new R){let i=t,r=this.v0,n=this.v1,s=this.v2,o=this.v3;return i.set(Tn(e,r.x,n.x,s.x,o.x),Tn(e,r.y,n.y,s.y,o.y),Tn(e,r.z,n.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Jo extends Yt{constructor(e=new J,t=new J){super();this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new J){let i=t;if(e===1)i.copy(this.v2);else i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1);return i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new J){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Ko extends Yt{constructor(e=new R,t=new R){super();this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new R){let i=t;if(e===1)i.copy(this.v2);else i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1);return i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new R){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Qo extends Yt{constructor(e=new J,t=new J,i=new J){super();this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new J){let i=t,r=this.v0,n=this.v1,s=this.v2;return i.set(bn(e,r.x,n.x,s.x),bn(e,r.y,n.y,s.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class $o extends Yt{constructor(e=new R,t=new R,i=new R){super();this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new R){let i=t,r=this.v0,n=this.v1,s=this.v2;return i.set(bn(e,r.x,n.x,s.x),bn(e,r.y,n.y,s.y),bn(e,r.z,n.z,s.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class jo extends Yt{constructor(e=[]){super();this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new J){let i=t,r=this.points,n=(r.length-1)*e,s=Math.floor(n),o=n-s,a=r[s===0?s:s-1],l=r[s],c=r[s>r.length-2?r.length-1:s+1],f=r[s>r.length-3?r.length-1:s+2];return i.set(Lc(o,a.x,l.x,c.x,f.x),Lc(o,a.y,l.y,c.y,f.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(new J().fromArray(r))}return this}}class ws extends Yt{constructor(){super();this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Vr[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),r=this.getCurveLengths(),n=0;while(n<r.length){if(r[n]>=i){let s=r[n]-i,o=this.curves[n],a=o.getLength(),l=a===0?0:1-s/a;return o.getPointAt(l,t)}n++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,r=this.curves.length;i<r;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));if(this.autoClose)t.push(t[0]);return t}getPoints(e=12){let t=[],i;for(let r=0,n=this.curves;r<n.length;r++){let s=n[r],o=s.isEllipseCurve?e*2:s.isLineCurve||s.isLineCurve3?1:s.isSplineCurve?e*s.points.length:e,a=s.getPoints(o);for(let l=0;l<a.length;l++){let c=a[l];if(i&&i.equals(c))continue;t.push(c),i=c}}if(this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0]))t.push(t[0]);return t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this.cacheLengths=null,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let r=e.curves[t];this.curves.push(new Vr[r.type]().fromJSON(r))}return this.cacheLengths=null,this}}class As extends ws{constructor(e){super();if(this.type="Path",this.currentPoint=new J,e)this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new Jo(this.currentPoint.clone(),new J(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,r){let n=new Qo(this.currentPoint.clone(),new J(e,t),new J(i,r));return this.curves.push(n),this.currentPoint.set(i,r),this}bezierCurveTo(e,t,i,r,n,s){let o=new Zo(this.currentPoint.clone(),new J(e,t),new J(i,r),new J(n,s));return this.curves.push(o),this.currentPoint.set(n,s),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new jo(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,r,n,s){let o=this.currentPoint.x,a=this.currentPoint.y;return this.absarc(e+o,t+a,i,r,n,s),this}absarc(e,t,i,r,n,s){return this.absellipse(e,t,i,i,r,n,s),this}ellipse(e,t,i,r,n,s,o,a){let l=this.currentPoint.x,c=this.currentPoint.y;return this.absellipse(e+l,t+c,i,r,n,s,o,a),this}absellipse(e,t,i,r,n,s,o,a){let l=new Sn(e,t,i,r,n,s,o,a);if(this.curves.length>0){let f=l.getPoint(0);if(!f.equals(this.currentPoint))this.lineTo(f.x,f.y)}this.curves.push(l);let c=l.getPoint(1);return this.currentPoint.copy(c),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class mr extends As{constructor(e){super(e);this.uuid=hi(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,r=this.holes.length;i<r;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let r=e.holes[t];this.holes.push(new As().fromJSON(r))}return this}}function Fc(e,t,i=2){let r=t&&t.length,n=r?t[0]*i:e.length,s=wu(e,0,n,i,!0),o=[];if(!s||s.next===s.prev)return o;let a,l,c;if(r)s=yg(e,t,s,i);if(e.length>80*i){a=e[0],l=e[1];let f=a,u=l;for(let h=i;h<n;h+=i){let p=e[h],x=e[h+1];if(p<a)a=p;if(x<l)l=x;if(p>f)f=p;if(x>u)u=x}c=Math.max(f-a,u-l),c=c!==0?32767/c:0}return ta(s,o,i,a,l,c,0),o}function wu(e,t,i,r,n){let s;if(n===Ig(e,t,i,r)>0)for(let o=t;o<i;o+=r)s=Eu(o/r|0,e[o],e[o+1],s);else for(let o=i-r;o>=t;o-=r)s=Eu(o/r|0,e[o],e[o+1],s);if(s&&Rs(s,s.next))ra(s),s=s.next;return s}function En(e,t){if(!e)return e;if(!t)t=e;let i=e,r;do if(r=!1,!i.steiner&&(Rs(i,i.next)||Wt(i.prev,i,i.next)===0)){if(ra(i),i=t=i.prev,i===i.next)break;r=!0}else i=i.next;while(r||i!==t);return t}function ta(e,t,i,r,n,s,o){if(!e)return;if(!o&&s)Eg(e,r,n,s);let a=e;while(e.prev!==e.next){let l=e.prev,c=e.next;if(s?xg(e,r,n,s):gg(e)){t.push(l.i,e.i,c.i),ra(e),e=c.next,a=c.next;continue}if(e=c,e===a){if(!o)ta(En(e),t,i,r,n,s,1);else if(o===1)e=_g(En(e),t),ta(e,t,i,r,n,s,2);else if(o===2)vg(e,t,i,r,n,s);break}}}function gg(e){let t=e.prev,i=e,r=e.next;if(Wt(t,i,r)>=0)return!1;let n=t.x,s=i.x,o=r.x,a=t.y,l=i.y,c=r.y,f=Math.min(n,s,o),u=Math.min(a,l,c),h=Math.max(n,s,o),p=Math.max(a,l,c),x=r.next;while(x!==t){if(x.x>=f&&x.x<=h&&x.y>=u&&x.y<=p&&ea(n,a,s,l,o,c,x.x,x.y)&&Wt(x.prev,x,x.next)>=0)return!1;x=x.next}return!0}function xg(e,t,i,r){let n=e.prev,s=e,o=e.next;if(Wt(n,s,o)>=0)return!1;let a=n.x,l=s.x,c=o.x,f=n.y,u=s.y,h=o.y,p=Math.min(a,l,c),x=Math.min(f,u,h),y=Math.max(a,l,c),d=Math.max(f,u,h),m=Nc(p,x,t,i,r),b=Nc(y,d,t,i,r),{prevZ:E,nextZ:M}=e;while(E&&E.z>=m&&M&&M.z<=b){if(E.x>=p&&E.x<=y&&E.y>=x&&E.y<=d&&E!==n&&E!==o&&ea(a,f,l,u,c,h,E.x,E.y)&&Wt(E.prev,E,E.next)>=0)return!1;if(E=E.prevZ,M.x>=p&&M.x<=y&&M.y>=x&&M.y<=d&&M!==n&&M!==o&&ea(a,f,l,u,c,h,M.x,M.y)&&Wt(M.prev,M,M.next)>=0)return!1;M=M.nextZ}while(E&&E.z>=m){if(E.x>=p&&E.x<=y&&E.y>=x&&E.y<=d&&E!==n&&E!==o&&ea(a,f,l,u,c,h,E.x,E.y)&&Wt(E.prev,E,E.next)>=0)return!1;E=E.prevZ}while(M&&M.z<=b){if(M.x>=p&&M.x<=y&&M.y>=x&&M.y<=d&&M!==n&&M!==o&&ea(a,f,l,u,c,h,M.x,M.y)&&Wt(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function _g(e,t){let i=e;do{let r=i.prev,n=i.next.next;if(!Rs(r,n)&&Ru(r,i,i.next,n)&&ia(r,n)&&ia(n,r))t.push(r.i,i.i,n.i),ra(i),ra(i.next),i=e=n;i=i.next}while(i!==e);return En(i)}function vg(e,t,i,r,n,s){let o=e;do{let a=o.next.next;while(a!==o.prev){if(o.i!==a.i&&Rg(o,a)){let l=Cu(o,a);o=En(o,o.next),l=En(l,l.next),ta(o,t,i,r,n,s,0),ta(l,t,i,r,n,s,0);return}a=a.next}o=o.next}while(o!==e)}function yg(e,t,i,r){let n=[];for(let s=0,o=t.length;s<o;s++){let a=t[s]*r,l=s<o-1?t[s+1]*r:e.length,c=wu(e,a,l,r,!1);if(c===c.next)c.steiner=!0;n.push(Ag(c))}n.sort(Mg);for(let s=0;s<n.length;s++)i=Sg(n[s],i);return i}function Mg(e,t){let i=e.x-t.x;if(i===0){if(i=e.y-t.y,i===0){let r=(e.next.y-e.y)/(e.next.x-e.x),n=(t.next.y-t.y)/(t.next.x-t.x);i=r-n}}return i}function Sg(e,t){let i=bg(e,t);if(!i)return t;let r=Cu(i,e);return En(r,r.next),En(i,i.next)}function bg(e,t){let i=t,{x:r,y:n}=e,s=-1/0,o;if(Rs(e,i))return i;do{if(Rs(e,i.next))return i.next;else if(n<=i.y&&n>=i.next.y&&i.next.y!==i.y){let u=i.x+(n-i.y)*(i.next.x-i.x)/(i.next.y-i.y);if(u<=r&&u>s){if(s=u,o=i.x<i.next.x?i:i.next,u===r)return o}}i=i.next}while(i!==t);if(!o)return null;let a=o,l=o.x,c=o.y,f=1/0;i=o;do{if(r>=i.x&&i.x>=l&&r!==i.x&&Au(n<c?r:s,n,l,c,n<c?s:r,n,i.x,i.y)){let u=Math.abs(n-i.y)/(r-i.x);if(ia(i,e)&&(u<f||u===f&&(i.x>o.x||i.x===o.x&&Tg(o,i))))o=i,f=u}i=i.next}while(i!==a);return o}function Tg(e,t){return Wt(e.prev,e,t.prev)<0&&Wt(t.next,e,e.next)<0}function Eg(e,t,i,r){let n=e;do{if(n.z===0)n.z=Nc(n.x,n.y,t,i,r);n.prevZ=n.prev,n.nextZ=n.next,n=n.next}while(n!==e);n.prevZ.nextZ=null,n.prevZ=null,wg(n)}function wg(e){let t,i=1;do{let r=e,n;e=null;let s=null;t=0;while(r){t++;let o=r,a=0;for(let c=0;c<i;c++)if(a++,o=o.nextZ,!o)break;let l=i;while(a>0||l>0&&o){if(a!==0&&(l===0||!o||r.z<=o.z))n=r,r=r.nextZ,a--;else n=o,o=o.nextZ,l--;if(s)s.nextZ=n;else e=n;n.prevZ=s,s=n}r=o}s.nextZ=null,i*=2}while(t>1);return e}function Nc(e,t,i,r,n){return e=(e-i)*n|0,t=(t-r)*n|0,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e|t<<1}function Ag(e){let t=e,i=e;do{if(t.x<i.x||t.x===i.x&&t.y<i.y)i=t;t=t.next}while(t!==e);return i}function Au(e,t,i,r,n,s,o,a){return(n-o)*(t-a)>=(e-o)*(s-a)&&(e-o)*(r-a)>=(i-o)*(t-a)&&(i-o)*(s-a)>=(n-o)*(r-a)}function ea(e,t,i,r,n,s,o,a){return!(e===o&&t===a)&&Au(e,t,i,r,n,s,o,a)}function Rg(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!Cg(e,t)&&(ia(e,t)&&ia(t,e)&&Pg(e,t)&&(Wt(e.prev,e,t.prev)||Wt(e,t.prev,t))||Rs(e,t)&&Wt(e.prev,e,e.next)>0&&Wt(t.prev,t,t.next)>0)}function Wt(e,t,i){return(t.y-e.y)*(i.x-t.x)-(t.x-e.x)*(i.y-t.y)}function Rs(e,t){return e.x===t.x&&e.y===t.y}function Ru(e,t,i,r){let n=Sl(Wt(e,t,i)),s=Sl(Wt(e,t,r)),o=Sl(Wt(i,r,e)),a=Sl(Wt(i,r,t));if(n!==s&&o!==a)return!0;if(n===0&&Ml(e,i,t))return!0;if(s===0&&Ml(e,r,t))return!0;if(o===0&&Ml(i,e,r))return!0;if(a===0&&Ml(i,t,r))return!0;return!1}function Ml(e,t,i){return t.x<=Math.max(e.x,i.x)&&t.x>=Math.min(e.x,i.x)&&t.y<=Math.max(e.y,i.y)&&t.y>=Math.min(e.y,i.y)}function Sl(e){return e>0?1:e<0?-1:0}function Cg(e,t){let i=e;do{if(i.i!==e.i&&i.next.i!==e.i&&i.i!==t.i&&i.next.i!==t.i&&Ru(i,i.next,e,t))return!0;i=i.next}while(i!==e);return!1}function ia(e,t){return Wt(e.prev,e,e.next)<0?Wt(e,t,e.next)>=0&&Wt(e,e.prev,t)>=0:Wt(e,t,e.prev)<0||Wt(e,e.next,t)<0}function Pg(e,t){let i=e,r=!1,n=(e.x+t.x)/2,s=(e.y+t.y)/2;do{if(i.y>s!==i.next.y>s&&i.next.y!==i.y&&n<(i.next.x-i.x)*(s-i.y)/(i.next.y-i.y)+i.x)r=!r;i=i.next}while(i!==e);return r}function Cu(e,t){let i=Uc(e.i,e.x,e.y),r=Uc(t.i,t.x,t.y),n=e.next,s=t.prev;return e.next=t,t.prev=e,i.next=n,n.prev=i,r.next=i,i.prev=r,s.next=r,r.prev=s,r}function Eu(e,t,i,r){let n=Uc(e,t,i);if(!r)n.prev=n,n.next=n;else n.next=r.next,n.prev=r,r.next.prev=n,r.next=n;return n}function ra(e){if(e.next.prev=e.prev,e.prev.next=e.next,e.prevZ)e.prevZ.nextZ=e.nextZ;if(e.nextZ)e.nextZ.prevZ=e.prevZ}function Uc(e,t,i){return{i:e,x:t,y:i,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Ig(e,t,i,r){let n=0;for(let s=t,o=i-r;s<i;s+=r)n+=(e[o]-e[s])*(e[s+1]+e[o+1]),o=s;return n}class Bc{static triangulate(e,t,i=2){return Fc(e,t,i)}}class zi{static area(e){let t=e.length,i=0;for(let r=t-1,n=0;n<t;r=n++)i+=e[r].x*e[n].y-e[n].x*e[r].y;return i*0.5}static isClockWise(e){return zi.area(e)<0}static triangulateShape(e,t){let i=[],r=[],n=[];Pu(e),Iu(i,e);let s=e.length;t.forEach(Pu);for(let a=0;a<t.length;a++)r.push(s),s+=t[a].length,Iu(i,t[a]);let o=Bc.triangulate(i,r);for(let a=0;a<o.length;a+=3)n.push(o.slice(a,a+3));return n}}function Pu(e){let t=e.length;if(t>2&&e[t-1].equals(e[0]))e.pop()}function Iu(e,t){for(let i=0;i<t.length;i++)e.push(t[i].x),e.push(t[i].y)}class bl extends Ye{constructor(e=new mr([new J(0.5,0.5),new J(-0.5,0.5),new J(-0.5,-0.5),new J(0.5,-0.5)]),t={}){super();this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let i=this,r=[],n=[];for(let o=0,a=e.length;o<a;o++){let l=e[o];s(l)}this.setAttribute("position",new Ve(r,3)),this.setAttribute("uv",new Ve(n,2)),this.computeVertexNormals();function s(o){let a=[],l=t.curveSegments!==void 0?t.curveSegments:12,c=t.steps!==void 0?t.steps:1,f=t.depth!==void 0?t.depth:1,u=t.bevelEnabled!==void 0?t.bevelEnabled:!0,h=t.bevelThickness!==void 0?t.bevelThickness:0.2,p=t.bevelSize!==void 0?t.bevelSize:h-0.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,y=t.bevelSegments!==void 0?t.bevelSegments:3,d=t.extrudePath,m=t.UVGenerator!==void 0?t.UVGenerator:Lg,b,E=!1,M,I,L,g;if(d){b=d.getSpacedPoints(c),E=!0,u=!1;let ae=d.isCatmullRomCurve3?d.closed:!1;M=d.computeFrenetFrames(c,ae),I=new R,L=new R,g=new R}if(!u)y=0,h=0,p=0,x=0;let S=o.extractPoints(l),{shape:N,holes:W}=S;if(!zi.isClockWise(N)){N=N.reverse();for(let ae=0,ye=W.length;ae<ye;ae++){let ve=W[ae];if(zi.isClockWise(ve))W[ae]=ve.reverse()}}function X(ae){let Be=ae[0];for(let Ie=1;Ie<=ae.length;Ie++){let Ze=Ie%ae.length,Ce=ae[Ze],dt=Ce.x-Be.x,gt=Ce.y-Be.y,Qe=dt*dt+gt*gt,B=Math.max(Math.abs(Ce.x),Math.abs(Ce.y),Math.abs(Be.x),Math.abs(Be.y)),Ut=0.000000000000000000010000000000000001*B*B;if(Qe<=Ut){ae.splice(Ze,1),Ie--;continue}Be=Ce}}X(N),W.forEach(X);let ne=W.length,C=N;for(let ae=0;ae<ne;ae++){let ye=W[ae];N=N.concat(ye)}function Q(ae,ye,ve){if(!ye)Ge("ExtrudeGeometry: vec does not exist");return ae.clone().addScaledVector(ye,ve)}let ie=N.length;function H(ae,ye,ve){let Be,Ie,Ze,Ce=ae.x-ye.x,dt=ae.y-ye.y,gt=ve.x-ae.x,Qe=ve.y-ae.y,B=Ce*Ce+dt*dt,Ut=Ce*Qe-dt*gt;if(Math.abs(Ut)>Number.EPSILON){let at=Math.sqrt(B),Ft=Math.sqrt(gt*gt+Qe*Qe),Ee=ye.x-dt/at,bt=ye.y+Ce/at,tt=ve.x-Qe/Ft,lt=ve.y+gt/Ft,qt=((tt-Ee)*Qe-(lt-bt)*gt)/(Ce*Qe-dt*gt);Be=Ee+Ce*qt-ae.x,Ie=bt+dt*qt-ae.y;let A=Be*Be+Ie*Ie;if(A<=2)return new J(Be,Ie);else Ze=Math.sqrt(A/2)}else{let at=!1;if(Ce>Number.EPSILON){if(gt>Number.EPSILON)at=!0}else if(Ce<-Number.EPSILON){if(gt<-Number.EPSILON)at=!0}else if(Math.sign(dt)===Math.sign(Qe))at=!0;if(at)Be=-dt,Ie=Ce,Ze=Math.sqrt(B);else Be=Ce,Ie=dt,Ze=Math.sqrt(B/2)}return new J(Be/Ze,Ie/Ze)}let _e=[];for(let ae=0,ye=C.length,ve=ye-1,Be=ae+1;ae<ye;ae++,ve++,Be++){if(ve===ye)ve=0;if(Be===ye)Be=0;_e[ae]=H(C[ae],C[ve],C[Be])}let j=[],se,de=_e.concat();for(let ae=0,ye=ne;ae<ye;ae++){let ve=W[ae];se=[];for(let Be=0,Ie=ve.length,Ze=Ie-1,Ce=Be+1;Be<Ie;Be++,Ze++,Ce++){if(Ze===Ie)Ze=0;if(Ce===Ie)Ce=0;se[Be]=H(ve[Be],ve[Ze],ve[Ce])}j.push(se),de=de.concat(se)}let Fe;if(y===0)Fe=zi.triangulateShape(C,W);else{let ae=[],ye=[];for(let ve=0;ve<y;ve++){let Be=ve/y,Ie=h*Math.cos(Be*Math.PI/2),Ze=p*Math.sin(Be*Math.PI/2)+x;for(let Ce=0,dt=C.length;Ce<dt;Ce++){let gt=Q(C[Ce],_e[Ce],Ze);if(Le(gt.x,gt.y,-Ie),Be===0)ae.push(gt)}for(let Ce=0,dt=ne;Ce<dt;Ce++){let gt=W[Ce];se=j[Ce];let Qe=[];for(let B=0,Ut=gt.length;B<Ut;B++){let at=Q(gt[B],se[B],Ze);if(Le(at.x,at.y,-Ie),Be===0)Qe.push(at)}if(Be===0)ye.push(Qe)}}Fe=zi.triangulateShape(ae,ye)}let te=Fe.length,ce=p+x;for(let ae=0;ae<ie;ae++){let ye=u?Q(N[ae],de[ae],ce):N[ae];if(!E)Le(ye.x,ye.y,0);else L.copy(M.normals[0]).multiplyScalar(ye.x),I.copy(M.binormals[0]).multiplyScalar(ye.y),g.copy(b[0]).add(L).add(I),Le(g.x,g.y,g.z)}for(let ae=1;ae<=c;ae++)for(let ye=0;ye<ie;ye++){let ve=u?Q(N[ye],de[ye],ce):N[ye];if(!E)Le(ve.x,ve.y,f/c*ae);else L.copy(M.normals[ae]).multiplyScalar(ve.x),I.copy(M.binormals[ae]).multiplyScalar(ve.y),g.copy(b[ae]).add(L).add(I),Le(g.x,g.y,g.z)}for(let ae=y-1;ae>=0;ae--){let ye=ae/y,ve=h*Math.cos(ye*Math.PI/2),Be=p*Math.sin(ye*Math.PI/2)+x;for(let Ie=0,Ze=C.length;Ie<Ze;Ie++){let Ce=Q(C[Ie],_e[Ie],Be);Le(Ce.x,Ce.y,f+ve)}for(let Ie=0,Ze=W.length;Ie<Ze;Ie++){let Ce=W[Ie];se=j[Ie];for(let dt=0,gt=Ce.length;dt<gt;dt++){let Qe=Q(Ce[dt],se[dt],Be);if(!E)Le(Qe.x,Qe.y,f+ve);else Le(Qe.x,Qe.y+b[c-1].y,b[c-1].x+ve)}}}He(),ze();function He(){let ae=r.length/3;if(u){let ye=0,ve=ie*ye;for(let Be=0;Be<te;Be++){let Ie=Fe[Be];yt(Ie[2]+ve,Ie[1]+ve,Ie[0]+ve)}ye=c+y*2,ve=ie*ye;for(let Be=0;Be<te;Be++){let Ie=Fe[Be];yt(Ie[0]+ve,Ie[1]+ve,Ie[2]+ve)}}else{for(let ye=0;ye<te;ye++){let ve=Fe[ye];yt(ve[2],ve[1],ve[0])}for(let ye=0;ye<te;ye++){let ve=Fe[ye];yt(ve[0]+ie*c,ve[1]+ie*c,ve[2]+ie*c)}}i.addGroup(ae,r.length/3-ae,0)}function ze(){let ae=r.length/3,ye=0;Ke(C,ye),ye+=C.length;for(let ve=0,Be=W.length;ve<Be;ve++){let Ie=W[ve];Ke(Ie,ye),ye+=Ie.length}i.addGroup(ae,r.length/3-ae,1)}function Ke(ae,ye){let ve=ae.length;while(--ve>=0){let Be=ve,Ie=ve-1;if(Ie<0)Ie=ae.length-1;for(let Ze=0,Ce=c+y*2;Ze<Ce;Ze++){let dt=ie*Ze,gt=ie*(Ze+1),Qe=ye+Be+dt,B=ye+Ie+dt,Ut=ye+Ie+gt,at=ye+Be+gt;mt(Qe,B,Ut,at)}}}function Le(ae,ye,ve){a.push(ae),a.push(ye),a.push(ve)}function yt(ae,ye,ve){nt(ae),nt(ye),nt(ve);let Be=r.length/3,Ie=m.generateTopUV(i,r,Be-3,Be-2,Be-1);ot(Ie[0]),ot(Ie[1]),ot(Ie[2])}function mt(ae,ye,ve,Be){nt(ae),nt(ye),nt(Be),nt(ye),nt(ve),nt(Be);let Ie=r.length/3,Ze=m.generateSideWallUV(i,r,Ie-6,Ie-3,Ie-2,Ie-1);ot(Ze[0]),ot(Ze[1]),ot(Ze[3]),ot(Ze[1]),ot(Ze[2]),ot(Ze[3])}function nt(ae){r.push(a[ae*3+0]),r.push(a[ae*3+1]),r.push(a[ae*3+2])}function ot(ae){n.push(ae.x),n.push(ae.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return Dg(t,i,e)}static fromJSON(e,t){let i=[];for(let n=0,s=e.shapes.length;n<s;n++){let o=t[e.shapes[n]];i.push(o)}let r=e.options.extrudePath;if(r!==void 0)e.options.extrudePath=new Vr[r.type]().fromJSON(r);return new bl(i,e.options)}}var Lg={generateTopUV:function(e,t,i,r,n){let s=t[i*3],o=t[i*3+1],a=t[r*3],l=t[r*3+1],c=t[n*3],f=t[n*3+1];return[new J(s,o),new J(a,l),new J(c,f)]},generateSideWallUV:function(e,t,i,r,n,s){let o=t[i*3],a=t[i*3+1],l=t[i*3+2],c=t[r*3],f=t[r*3+1],u=t[r*3+2],h=t[n*3],p=t[n*3+1],x=t[n*3+2],y=t[s*3],d=t[s*3+1],m=t[s*3+2];if(Math.abs(a-f)<Math.abs(o-c))return[new J(o,1-l),new J(c,1-u),new J(h,1-x),new J(y,1-m)];else return[new J(a,1-l),new J(f,1-u),new J(p,1-x),new J(d,1-m)]}};function Dg(e,t,i){if(i.shapes=[],Array.isArray(e))for(let r=0,n=e.length;r<n;r++){let s=e[r];i.shapes.push(s.uuid)}else i.shapes.push(e.uuid);if(i.options=Object.assign({},t),t.extrudePath!==void 0)i.options.extrudePath=t.extrudePath.toJSON();return i}class Ri extends Ye{constructor(e=1,t=1,i=1,r=1){super();this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};let n=e/2,s=t/2,o=Math.floor(i),a=Math.floor(r),l=o+1,c=a+1,f=e/o,u=t/a,h=[],p=[],x=[],y=[];for(let d=0;d<c;d++){let m=d*u-s;for(let b=0;b<l;b++){let E=b*f-n;p.push(E,-m,0),x.push(0,0,1),y.push(b/o),y.push(1-d/a)}}for(let d=0;d<a;d++)for(let m=0;m<o;m++){let b=m+l*d,E=m+l*(d+1),M=m+1+l*(d+1),I=m+1+l*d;h.push(b,E,I),h.push(E,M,I)}this.setIndex(h),this.setAttribute("position",new Ve(p,3)),this.setAttribute("normal",new Ve(x,3)),this.setAttribute("uv",new Ve(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ri(e.width,e.height,e.widthSegments,e.heightSegments)}}class Tl extends Ye{constructor(e=new mr([new J(0,0.5),new J(-0.5,-0.5),new J(0.5,-0.5)]),t=12){super();this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let i=[],r=[],n=[],s=[],o=0,a=0;if(Array.isArray(e)===!1)l(e);else for(let c=0;c<e.length;c++)l(e[c]),this.addGroup(o,a,c),o+=a,a=0;this.setIndex(i),this.setAttribute("position",new Ve(r,3)),this.setAttribute("normal",new Ve(n,3)),this.setAttribute("uv",new Ve(s,2));function l(c){let f=r.length/3,u=c.extractPoints(t),{shape:h,holes:p}=u;if(zi.isClockWise(h)===!1)h=h.reverse();for(let y=0,d=p.length;y<d;y++){let m=p[y];if(zi.isClockWise(m)===!0)p[y]=m.reverse()}let x=zi.triangulateShape(h,p);for(let y=0,d=p.length;y<d;y++){let m=p[y];h=h.concat(m)}for(let y=0,d=h.length;y<d;y++){let m=h[y];r.push(m.x,m.y,0),n.push(0,0,1),s.push(m.x,m.y)}for(let y=0,d=x.length;y<d;y++){let m=x[y],b=m[0]+f,E=m[1]+f,M=m[2]+f;i.push(b,E,M),a+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return Ng(t,e)}static fromJSON(e,t){let i=[];for(let r=0,n=e.shapes.length;r<n;r++){let s=t[e.shapes[r]];i.push(s)}return new Tl(i,e.curveSegments)}}function Ng(e,t){if(t.shapes=[],Array.isArray(e))for(let i=0,r=e.length;i<r;i++){let n=e[i];t.shapes.push(n.uuid)}else t.shapes.push(e.uuid);return t}class El extends Ye{constructor(e=1,t=0.4,i=12,r=48,n=Math.PI*2,s=0,o=Math.PI*2){super();this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:r,arc:n,thetaStart:s,thetaLength:o},i=Math.floor(i),r=Math.floor(r);let a=[],l=[],c=[],f=[],u=new R,h=new R,p=new R;for(let x=0;x<=i;x++){let y=s+x/i*o;for(let d=0;d<=r;d++){let m=d/r*n;h.x=(e+t*Math.cos(y))*Math.cos(m),h.y=(e+t*Math.cos(y))*Math.sin(m),h.z=t*Math.sin(y),l.push(h.x,h.y,h.z),u.x=e*Math.cos(m),u.y=e*Math.sin(m),p.subVectors(h,u).normalize(),c.push(p.x,p.y,p.z),f.push(d/r),f.push(x/i)}}for(let x=1;x<=i;x++)for(let y=1;y<=r;y++){let d=(r+1)*x+y-1,m=(r+1)*(x-1)+y-1,b=(r+1)*(x-1)+y,E=(r+1)*x+y;a.push(d,m,E),a.push(m,b,E)}this.setIndex(a),this.setAttribute("position",new Ve(l,3)),this.setAttribute("normal",new Ve(c,3)),this.setAttribute("uv",new Ve(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new El(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}class na extends Ye{constructor(e=new $o(new R(-1,-1,0),new R(-1,1,0),new R(1,1,0)),t=64,i=1,r=8,n=!1){super();this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:r,closed:n};let s=e.computeFrenetFrames(t,n);this.tangents=s.tangents,this.normals=s.normals,this.binormals=s.binormals;let o=new R,a=new R,l=new J,c=new R,f=[],u=[],h=[],p=[];x(),this.setIndex(p),this.setAttribute("position",new Ve(f,3)),this.setAttribute("normal",new Ve(u,3)),this.setAttribute("uv",new Ve(h,2));function x(){for(let b=0;b<t;b++)y(b);y(n===!1?t:0),m(),d()}function y(b){c=e.getPointAt(b/t,c);let E=s.normals[b],M=s.binormals[b];for(let I=0;I<=r;I++){let L=I/r*Math.PI*2,g=Math.sin(L),S=-Math.cos(L);a.x=S*E.x+g*M.x,a.y=S*E.y+g*M.y,a.z=S*E.z+g*M.z,a.normalize(),u.push(a.x,a.y,a.z),o.x=c.x+i*a.x,o.y=c.y+i*a.y,o.z=c.z+i*a.z,f.push(o.x,o.y,o.z)}}function d(){for(let b=1;b<=t;b++)for(let E=1;E<=r;E++){let M=(r+1)*(b-1)+(E-1),I=(r+1)*b+(E-1),L=(r+1)*b+E,g=(r+1)*(b-1)+E;p.push(M,I,g),p.push(I,L,g)}}function m(){for(let b=0;b<=t;b++)for(let E=0;E<=r;E++)l.x=b/t,l.y=E/r,h.push(l.x,l.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new na(new Vr[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}function wr(e){let t={};for(let i in e){t[i]={};for(let r in e[i]){let n=e[i][r];if(Lu(n))if(n.isRenderTargetTexture)Te("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][r]=null;else t[i][r]=n.clone();else if(Array.isArray(n))if(Lu(n[0])){let s=[];for(let o=0,a=n.length;o<a;o++)s[o]=n[o].clone();t[i][r]=s}else t[i][r]=n.slice();else t[i][r]=n}}return t}function Ti(e){let t={};for(let i=0;i<e.length;i++){let r=wr(e[i]);for(let n in r)t[n]=r[n]}return t}function Lu(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function Du(e){let t=[];for(let i=0;i<e.length;i++)t.push(e[i].clone());return t}function wl(e){let t=e.getRenderTarget();if(t===null)return e.outputColorSpace;if(t.isXRRenderTarget===!0)return t.texture.colorSpace;return ht.workingColorSpace}var Qi={clone:wr,merge:Ti};var Nu=`
void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}
`;var Uu=`
void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}
`;class Ct extends Nt{constructor(e){super();if(this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Nu,this.fragmentShader=Uu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0)this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=wr(e.uniforms),this.uniformsGroups=Du(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let s=this.uniforms[r].value;if(s&&s.isTexture)t.uniforms[r]={type:"t",value:s.toJSON(e).uuid};else if(s&&s.isColor)t.uniforms[r]={type:"c",value:s.getHex()};else if(s&&s.isVector2)t.uniforms[r]={type:"v2",value:s.toArray()};else if(s&&s.isVector3)t.uniforms[r]={type:"v3",value:s.toArray()};else if(s&&s.isVector4)t.uniforms[r]={type:"v4",value:s.toArray()};else if(s&&s.isMatrix3)t.uniforms[r]={type:"m3",value:s.toArray()};else if(s&&s.isMatrix4)t.uniforms[r]={type:"m4",value:s.toArray()};else t.uniforms[r]={value:s}}if(Object.keys(this.defines).length>0)t.defines=this.defines;t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let r in this.extensions)if(this.extensions[r]===!0)i[r]=!0;if(Object.keys(i).length>0)t.extensions=i;return t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let i in e.uniforms){let r=e.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=t[r.value]||null;break;case"c":this.uniforms[i].value=new ge().setHex(r.value);break;case"v2":this.uniforms[i].value=new J().fromArray(r.value);break;case"v3":this.uniforms[i].value=new R().fromArray(r.value);break;case"v4":this.uniforms[i].value=new St().fromArray(r.value);break;case"m3":this.uniforms[i].value=new et().fromArray(r.value);break;case"m4":this.uniforms[i].value=new Je().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(e.defines!==void 0)this.defines=e.defines;if(e.vertexShader!==void 0)this.vertexShader=e.vertexShader;if(e.fragmentShader!==void 0)this.fragmentShader=e.fragmentShader;if(e.glslVersion!==void 0)this.glslVersion=e.glslVersion;if(e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];if(e.lights!==void 0)this.lights=e.lights;if(e.clipping!==void 0)this.clipping=e.clipping;return this}}class wn extends Ct{constructor(e){super(e);this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class ii extends Nt{constructor(e){super();this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ge(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ir,this.normalScale=new J(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class sa extends ii{constructor(e){super();this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new J(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return st(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+0.4*t)/(1-0.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new ge(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ge(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ge(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){if(this._anisotropy>0!==e>0)this.version++;this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){if(this._clearcoat>0!==e>0)this.version++;this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){if(this._diffuseRoughness>0!==e>0)this.version++;this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){if(this._iridescence>0!==e>0)this.version++;this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){if(this._dispersion>0!==e>0)this.version++;this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){if(this._retroreflectivity>0!==e>0)this.version++;this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){if(this._sheen>0!==e>0)this.version++;this._sheen=e}get transmission(){return this._transmission}set transmission(e){if(this._transmission>0!==e>0)this.version++;this._transmission=e}get iridescenceThicknessRange(){return Yi('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){Yi('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class oa extends Nt{constructor(e){super();this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ir,this.normalScale=new J(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vi,this.combine=en,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=0.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class aa extends Nt{constructor(e){super();this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Dh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class la extends Nt{constructor(e){super();this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function Hr(e,t){if(!e||e.constructor===t)return e;if(typeof t.BYTES_PER_ELEMENT==="number")return new t(e);return Array.prototype.slice.call(e)}function Cs(e){return e!==void 0&&e.inTangents!==void 0&&e.outTangents!==void 0}class $i{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,r=t[i],n=t[i-1];i:{e:{let s;t:{r:if(!(e<r)){for(let o=i+2;;){if(r===void 0){if(e<n)break r;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(n=r,r=t[++i],e<r)break e}s=t.length;break t}if(!(e>=n)){let o=t[1];if(e<o)i=2,n=o;for(let a=i-2;;){if(n===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===a)break;if(r=n,n=t[--i-1],e>=n)break e}s=i,i=0;break t}break i}while(i<s){let o=i+s>>>1;if(e<t[o])s=o;else i=o+1}if(r=t[i],n=t[i-1],n===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,n,r)}return this.interpolate_(i,n,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,n=e*r;for(let s=0;s!==r;++s)t[s]=i[n+s];return t}interpolate_(){throw Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}}class Al extends $i{constructor(e,t,i,r){super(e,t,i,r);this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Fa,endingEnd:Fa}}intervalChanged_(e,t,i){let r=this.parameterPositions,n=e-2,s=e+1,o=r[n],a=r[s];if(o===void 0)switch(this.getSettings_().endingStart){case Ba:n=e,o=2*t-i;break;case Oa:n=r.length-2,o=t+r[n]-r[n+1];break;default:n=e,o=i}if(a===void 0)switch(this.getSettings_().endingEnd){case Ba:s=e,a=2*i-t;break;case Oa:s=1,a=i+r[1]-r[0];break;default:s=e-1,a=t}let l=(i-t)*0.5,c=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(a-i),this._offsetPrev=n*c,this._offsetNext=s*c}interpolate_(e,t,i,r){let n=this.resultBuffer,s=this.sampleValues,o=this.valueSize,a=e*o,l=a-o,c=this._offsetPrev,f=this._offsetNext,u=this._weightPrev,h=this._weightNext,p=(i-t)/(r-t),x=p*p,y=x*p,d=-u*y+2*u*x-u*p,m=(1+u)*y+(-1.5-2*u)*x+(-0.5+u)*p+1,b=(-1-h)*y+(1.5+h)*x+0.5*p,E=h*y-h*x;for(let M=0;M!==o;++M)n[M]=d*s[c+M]+m*s[l+M]+b*s[a+M]+E*s[f+M];return n}}class ca extends $i{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let n=this.resultBuffer,s=this.sampleValues,o=this.valueSize,a=e*o,l=a-o,c=(i-t)/(r-t),f=1-c;for(let u=0;u!==o;++u)n[u]=s[l+u]*f+s[a+u]*c;return n}}class Rl extends $i{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}}class Cl extends $i{interpolate_(e,t,i,r){let n=this.resultBuffer,s=this.sampleValues,o=this.valueSize,a=e*o,l=a-o,c=this.inTangents,f=this.outTangents;if(!c||!f){let p=(i-t)/(r-t),x=1-p;for(let y=0;y!==o;++y)n[y]=s[l+y]*x+s[a+y]*p;return n}let u=o*2,h=e-1;for(let p=0;p!==o;++p){let x=s[l+p],y=s[a+p],d=h*u+p*2,m=f[d],b=f[d+1],E=e*u+p*2,M=c[E],I=c[E+1],L=Wg(i,t,m,M,r);n[p]=Bu(L,x,b,I,y)}return n}}function Bu(e,t,i,r,n){let s=1-e;return s*s*s*t+3*s*s*e*i+3*s*e*e*r+e*e*e*n}function kg(e,t,i,r,n){let s=1-e;return 3*s*s*(i-t)+6*s*e*(r-i)+3*e*e*(n-r)}function Wg(e,t,i,r,n){let s=(e-t)/(n-t);for(let o=0;o<8;o++){let a=Bu(s,t,i,r,n)-e;if(Math.abs(a)<0.0000000001)break;let l=kg(s,t,i,r,n);if(Math.abs(l)<0.0000000001)break;s=Math.max(0,Math.min(1,s-a/l))}return s}class ri{constructor(e,t,i,r){if(e===void 0)throw Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Hr(t,this.TimeBufferType),this.values=Hr(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Hr(e.times,Array),values:Hr(e.values,Array)};let r=e.getInterpolation();if(r!==e.DefaultInterpolation)i.interpolation=r;if(Cs(e.settings))i.settings={inTangents:Hr(e.settings.inTangents,Array),outTangents:Hr(e.settings.outTangents,Array)}}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Rl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ca(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Al(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Cl(this.times,this.values,this.getValueSize(),e);if(this.settings)t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents;return t}setInterpolation(e){let t;switch(e){case sn:t=this.InterpolantFactoryMethodDiscrete;break;case Na:t=this.InterpolantFactoryMethodLinear;break;case Ua:t=this.InterpolantFactoryMethodSmooth;break;case $l:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(i);return Te("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return sn;case this.InterpolantFactoryMethodLinear:return Na;case this.InterpolantFactoryMethodSmooth:return Ua;case this.InterpolantFactoryMethodBezier:return $l}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e;if(Cs(this.settings))Ou(this.settings.inTangents,e),Ou(this.settings.outTangents,e)}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e;if(Cs(this.settings))zu(this.settings.inTangents,e),zu(this.settings.outTangents,e)}return this}trim(e,t){let i=this.times,r=i.length,n=0,s=r-1;while(n!==r&&i[n]<e)++n;while(s!==-1&&i[s]>t)--s;if(++s,n!==0||s!==r){if(n>=s)s=Math.max(s,1),n=s-1;let o=this.getValueSize();this.times=i.slice(n,s),this.values=this.values.slice(n*o,s*o)}return this}validate(){let e=!0,t=this.getValueSize();if(t-Math.floor(t)!==0)Ge("KeyframeTrack: Invalid value size in track.",this),e=!1;let i=this.times,r=this.values,n=i.length;if(n===0)Ge("KeyframeTrack: Track is empty.",this),e=!1;let s=null;for(let o=0;o!==n;o++){let a=i[o];if(typeof a==="number"&&isNaN(a)){Ge("KeyframeTrack: Time is not a valid number.",this,o,a),e=!1;break}if(s!==null&&s>a){Ge("KeyframeTrack: Out of order keys.",this,o,a,s),e=!1;break}s=a}if(r!==void 0){if(ec(r))for(let o=0,a=r.length;o!==a;++o){let l=r[o];if(isNaN(l)){Ge("KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===Ua,n=e.length-1,s=1;for(let o=1;o<n;++o){let a=!1,l=e[o],c=e[o+1];if(l!==c&&(o!==1||l!==e[0]))if(!r){let f=o*i,u=f-i,h=f+i;for(let p=0;p!==i;++p){let x=t[f+p];if(x!==t[u+p]||x!==t[h+p]){a=!0;break}}}else a=!0;if(a){if(o!==s){e[s]=e[o];let f=o*i,u=s*i;for(let h=0;h!==i;++h)t[u+h]=t[f+h]}++s}}if(n>0){e[s]=e[n];for(let o=n*i,a=s*i,l=0;l!==i;++l)t[a+l]=t[o+l];++s}if(s!==e.length)this.times=e.slice(0,s),this.values=t.slice(0,s*i);else this.times=e,this.values=t;return this}clone(){let e=this.times.slice(),t=this.values.slice(),r=new this.constructor(this.name,e,t);if(r.createInterpolant=this.createInterpolant,Cs(this.settings))r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()};return r}}function Ou(e,t){for(let i=0,r=e.length;i!==r;i+=2)e[i]+=t}function zu(e,t){for(let i=0,r=e.length;i!==r;i+=2)e[i]*=t}ri.prototype.ValueTypeName="";ri.prototype.TimeBufferType=Float32Array;ri.prototype.ValueBufferType=Float32Array;ri.prototype.DefaultInterpolation=Na;class kr extends ri{constructor(e,t,i){super(e,t,i)}}kr.prototype.ValueTypeName="bool";kr.prototype.ValueBufferType=Array;kr.prototype.DefaultInterpolation=sn;kr.prototype.InterpolantFactoryMethodLinear=void 0;kr.prototype.InterpolantFactoryMethodSmooth=void 0;class Pl extends ri{constructor(e,t,i,r){super(e,t,i,r)}}Pl.prototype.ValueTypeName="color";class Il extends ri{constructor(e,t,i,r){super(e,t,i,r)}}Il.prototype.ValueTypeName="number";class Ll extends $i{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let n=this.resultBuffer,s=this.sampleValues,o=this.valueSize,a=(i-t)/(r-t),l=e*o;for(let c=l+o;l!==c;l+=4)ui.slerpFlat(n,0,s,l-o,s,l,a);return n}}class ha extends ri{constructor(e,t,i,r){super(e,t,i,r)}InterpolantFactoryMethodLinear(e){return new Ll(this.times,this.values,this.getValueSize(),e)}}ha.prototype.ValueTypeName="quaternion";ha.prototype.InterpolantFactoryMethodSmooth=void 0;class Wr extends ri{constructor(e,t,i){super(e,t,i)}}Wr.prototype.ValueTypeName="string";Wr.prototype.ValueBufferType=Array;Wr.prototype.DefaultInterpolation=sn;Wr.prototype.InterpolantFactoryMethodLinear=void 0;Wr.prototype.InterpolantFactoryMethodSmooth=void 0;class Dl extends ri{constructor(e,t,i,r){super(e,t,i,r)}}Dl.prototype.ValueTypeName="vector";class Nl{constructor(e,t,i){let r=this,n=!1,s=0,o=0,a=void 0,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(c){if(o++,n===!1){if(r.onStart!==void 0)r.onStart(c,s,o)}n=!0},this.itemEnd=function(c){if(s++,r.onProgress!==void 0)r.onProgress(c,s,o);if(s===o){if(n=!1,r.onLoad!==void 0)r.onLoad()}},this.itemError=function(c){if(r.onError!==void 0)r.onError(c)},this.resolveURL=function(c){if(c=c.normalize("NFC"),a)return a(c);return c},this.setURLModifier=function(c){return a=c,this},this.addHandler=function(c,f){return l.push(c,f),this},this.removeHandler=function(c){let f=l.indexOf(c);if(f!==-1)l.splice(f,2);return this},this.getHandler=function(c){for(let f=0,u=l.length;f<u;f+=2){let h=l[f],p=l[f+1];if(h.global)h.lastIndex=0;if(h.test(c))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){if(!this._abortController)this._abortController=new AbortController;return this._abortController}}var Oc=new Nl;class Ci{constructor(e){if(this.manager=e!==void 0?e:Oc,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(r,n){i.load(e,r,t,n)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}}Ci.DEFAULT_MATERIAL_NAME="__DEFAULT";class Gi extends ft{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super();this.isLight=!0,this.type="Light",this.color=new ge(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class ua extends Gi{constructor(e,t,i){super(e,i);this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ft.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ge(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}var Hc=new Je,Vu=new R,Hu=new R;class Xr{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new J(512,512),this.mapType=Zt,this.map=null,this.mapPass=null,this.matrix=new Je,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ki,this._frameExtents=new J(1,1),this._viewportCount=1,this._viewports=[new St(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Vu.setFromMatrixPosition(e.matrixWorld),t.position.copy(Vu),Hu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Hu),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,r){Hc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(Hc,e.coordinateSystem,e.reversedDepth);let n=this._frameExtents,s=r?r.z/n.x:1,o=r?r.w/n.y:1,a=r?r.x/n.x:0,l=r?r.y/n.y:0;if(e.coordinateSystem===ur||e.reversedDepth)t.set(0.5*s,0,0,0.5*s+a,0,0.5*o,0,0.5*o+l,0,0,1,0,0,0,0,1);else t.set(0.5*s,0,0,0.5*s+a,0,0.5*o,0,0.5*o+l,0,0,0.5,0.5,0,0,0,1);t.multiply(Hc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){if(this.map)this.map.dispose();if(this.mapPass)this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}var Ul=new R,Fl=new ui,gr=new R;class Rn extends ft{constructor(){super();this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Je,this.projectionMatrix=new Je,this.projectionMatrixInverse=new Je,this.coordinateSystem=ci,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){if(super.updateMatrixWorld(e),this.matrixWorld.decompose(Ul,Fl,gr),gr.x===1&&gr.y===1&&gr.z===1)this.matrixWorldInverse.copy(this.matrixWorld).invert();else this.matrixWorldInverse.compose(Ul,Fl,gr.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){if(super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(Ul,Fl,gr),gr.x===1&&gr.y===1&&gr.z===1)this.matrixWorldInverse.copy(this.matrixWorld).invert();else this.matrixWorldInverse.compose(Ul,Fl,gr.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}var qr=new R,ku=new J,Wu=new J;class Xt extends Rn{constructor(e=50,t=1,i=0.1,r=2000){super();this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=0.5*this.getFilmHeight()/e;this.fov=hn*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(ts*0.5*this.fov);return 0.5*this.getFilmHeight()/e}getEffectiveFOV(){return hn*2*Math.atan(Math.tan(ts*0.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){qr.set(-1,-1,0.5).applyMatrix4(this.projectionMatrixInverse),t.set(qr.x,qr.y).multiplyScalar(-e/qr.z),qr.set(1,1,0.5).applyMatrix4(this.projectionMatrixInverse),i.set(qr.x,qr.y).multiplyScalar(-e/qr.z)}getViewSize(e,t){return this.getViewBounds(e,ku,Wu),t.subVectors(Wu,ku)}setViewOffset(e,t,i,r,n,s){if(this.aspect=e/t,this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=n,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(ts*0.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,n=-0.5*r,s=this.view;if(this.view!==null&&this.view.enabled){let{fullWidth:a,fullHeight:l}=s;n+=s.offsetX*r/a,t-=s.offsetY*i/l,r*=s.width/a,i*=s.height/l}let o=this.filmOffset;if(o!==0)n+=e*o/this.getFilmWidth();this.projectionMatrix.makePerspective(n,n+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);if(t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null)t.object.view=Object.assign({},this.view);return t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class kc extends Xr{constructor(){super(new Xt(50,1,0.5,500));this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,i=hn*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height*this.aspect,n=e.distance||t.far;if(i!==t.fov||r!==t.aspect||n!==t.far)t.fov=i,t.aspect=r,t.far=n,t.updateProjectionMatrix();super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}}class fa extends Gi{constructor(e,t,i=0,r=Math.PI/3,n=0,s=2){super(e,t);this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ft.DEFAULT_UP),this.updateMatrix(),this.target=new ft,this.distance=i,this.angle=r,this.penumbra=n,this.decay=s,this.map=null,this.shadow=new kc}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);if(t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture)t.object.map=this.map.toJSON(e).uuid;return t.object.shadow=this.shadow.toJSON(),t}}class Wc extends Xr{constructor(){super(new Xt(90,1,0.5,500));this.isPointLightShadow=!0}}class Ar extends Gi{constructor(e,t,i=0,r=2){super(e,t);this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new Wc}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class Rr extends Rn{constructor(e=-1,t=1,i=1,r=-1,n=0.1,s=2000){super();this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=n,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,n,s){if(this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=n,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2,n=i-e,s=i+e,o=r+t,a=r-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;n+=l*this.view.offsetX,s=n+l*this.view.width,o-=c*this.view.offsetY,a=o-c*this.view.height}this.projectionMatrix.makeOrthographic(n,s,o,a,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);if(t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null)t.object.view=Object.assign({},this.view);return t}}class Xc extends Xr{constructor(){super(new Rr(-5,5,5,-5,0.5,500));this.isDirectionalLightShadow=!0}}class Cn extends Gi{constructor(e,t){super(e,t);this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ft.DEFAULT_UP),this.updateMatrix(),this.target=new ft,this.shadow=new Xc}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}var Ps=-90,Is=1;class Pn extends ft{constructor(e,t,i){super();this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Xt(Ps,Is,e,t);r.layers=this.layers,this.add(r);let n=new Xt(Ps,Is,e,t);n.layers=this.layers,this.add(n);let s=new Xt(Ps,Is,e,t);s.layers=this.layers,this.add(s);let o=new Xt(Ps,Is,e,t);o.layers=this.layers,this.add(o);let a=new Xt(Ps,Is,e,t);a.layers=this.layers,this.add(a);let l=new Xt(Ps,Is,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,r,n,s,o,a]=t;for(let l of t)this.remove(l);if(e===ci)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),n.up.set(0,0,-1),n.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),a.up.set(0,1,0),a.lookAt(0,0,-1);else if(e===ur)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),n.up.set(0,0,1),n.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),a.up.set(0,-1,0),a.lookAt(0,0,-1);else throw Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){if(this.parent===null)this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:r}=this;if(this.coordinateSystem!==e.coordinateSystem)this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem();let[n,s,o,a,l,c]=this.children,f=e.getRenderTarget(),u=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let x=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let y=!1;if(e.isWebGLRenderer===!0)y=e.state.buffers.depth.getReversed();else y=e.reversedDepthBuffer;if(e.setRenderTarget(i,0,r),y&&e.autoClear===!1)e.clearDepth();if(e.render(t,n),e.setRenderTarget(i,1,r),y&&e.autoClear===!1)e.clearDepth();if(e.render(t,s),e.setRenderTarget(i,2,r),y&&e.autoClear===!1)e.clearDepth();if(e.render(t,o),e.setRenderTarget(i,3,r),y&&e.autoClear===!1)e.clearDepth();if(e.render(t,a),e.setRenderTarget(i,4,r),y&&e.autoClear===!1)e.clearDepth();if(e.render(t,l),i.texture.mipmapsAutoUpdate=x,e.setRenderTarget(i,5,r),y&&e.autoClear===!1)e.clearDepth();e.render(t,c),e.setRenderTarget(f,u,h),e.xr.enabled=p,i.texture.needsPMREMUpdate=!0}}class Bl extends Xt{constructor(e=[]){super();this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}}class da{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){if(this._document=e,e.hidden!==void 0)this._pageVisibilityHandler=s0.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1)}disconnect(){if(this._pageVisibilityHandler!==null)this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null;this._document=null}getDelta(){return this._delta/1000}getElapsed(){return this._elapsed/1000}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){if(this._pageVisibilityHandler!==null&&this._document.hidden===!0)this._delta=0;else this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta;return this}}function s0(){if(this._document.hidden===!1)this.reset()}var qc="\\[\\]\\.:\\/",a0=new RegExp("["+qc+"]","g"),Yc="[^"+qc+"]",l0="[^"+qc.replace("\\.","")+"]",c0=/((?:WC+[\/:])*)/.source.replace("WC",Yc),h0=/(WCOD+)?/.source.replace("WCOD",l0),u0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Yc),f0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Yc),d0=new RegExp("^"+c0+h0+u0+f0+"$"),p0=["material","materials","bones","map"];class Yu{constructor(e,t,i){let r=i||wt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,r=this._bindings[i];if(r!==void 0)r.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,n=i.length;r!==n;++r)i[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}}class wt{constructor(e,t,i){this.path=t,this.parsedPath=i||wt.parseTrackName(t),this.node=wt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){if(!(e&&e.isAnimationObjectGroup))return new wt(e,t,i);else return new wt.Composite(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(a0,"")}static parseTrackName(e){let t=d0.exec(e);if(t===null)throw Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=i.nodeName&&i.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let n=i.nodeName.substring(r+1);if(p0.indexOf(n)!==-1)i.nodeName=i.nodeName.substring(0,r),i.objectName=n}if(i.propertyName===null||i.propertyName.length===0)throw Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(n){for(let s=0;s<n.length;s++){let o=n[s];if(o.name===t||o.uuid===t)return o;let a=i(o.children);if(a)return a}return null},r=i(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let r=0,n=i.length;r!==n;++r)e[t++]=i[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let r=0,n=i.length;r!==n;++r)i[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let r=0,n=i.length;r!==n;++r)i[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let r=0,n=i.length;r!==n;++r)i[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,{objectName:i,propertyName:r,propertyIndex:n}=t;if(!e)e=wt.findNode(this.rootNode,t.nodeName),this.node=e;if(this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Te("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let l=t.objectIndex;switch(i){case"materials":if(!e.material){Ge("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Ge("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Ge("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let c=0;c<e.length;c++)if(e[c].name===l){l=c;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Ge("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Ge("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){Ge("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(l!==void 0){if(e[l]===void 0){Ge("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let s=e[r];if(s===void 0){let l=t.nodeName;Ge("PropertyBinding: Trying to update property for track: "+l+"."+r+" but it wasn't found.",e);return}let o=this.Versioning.None;if(this.targetObject=e,e.isMaterial===!0)o=this.Versioning.NeedsUpdate;else if(e.isObject3D===!0)o=this.Versioning.MatrixWorldNeedsUpdate;let a=this.BindingType.Direct;if(n!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){Ge("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Ge("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}if(e.morphTargetDictionary[n]!==void 0)n=e.morphTargetDictionary[n]}a=this.BindingType.ArrayElement,this.resolvedProperty=s,this.propertyIndex=n}else if(s.fromArray!==void 0&&s.toArray!==void 0)a=this.BindingType.HasFromToArray,this.resolvedProperty=s;else if(Array.isArray(s))a=this.BindingType.EntireArray,this.resolvedProperty=s;else this.propertyName=r;this.getValue=this.GetterByBindingType[a],this.setValue=this.SetterByBindingTypeAndVersioning[a][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}wt.Composite=Yu;wt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};wt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};wt.prototype.GetterByBindingType=[wt.prototype._getValue_direct,wt.prototype._getValue_array,wt.prototype._getValue_arrayElement,wt.prototype._getValue_toArray];wt.prototype.SetterByBindingTypeAndVersioning=[[wt.prototype._setValue_direct,wt.prototype._setValue_direct_setNeedsUpdate,wt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[wt.prototype._setValue_array,wt.prototype._setValue_array_setNeedsUpdate,wt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[wt.prototype._setValue_arrayElement,wt.prototype._setValue_arrayElement_setNeedsUpdate,wt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[wt.prototype._setValue_fromArray,wt.prototype._setValue_fromArray_setNeedsUpdate,wt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var zP=new Float32Array(1);class Zu{static{this.prototype.isMatrix2=!0}constructor(e,t,i,r){if(this.elements=[1,0,0,1],e!==void 0)this.set(e,t,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,r){let n=this.elements;return n[0]=e,n[2]=t,n[1]=i,n[3]=r,this}}function Zc(e,t,i,r){let n=_0(r);switch(i){case La:return e*t;case Yn:return e*t/n.components*n.byteLength;case tn:return e*t/n.components*n.byteLength;case Ui:return e*t*2/n.components*n.byteLength;case Zn:return e*t*2/n.components*n.byteLength;case Da:return e*t*3/n.components*n.byteLength;case li:return e*t*4/n.components*n.byteLength;case Jn:return e*t*4/n.components*n.byteLength;case Kn:case Qn:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case $n:case jn:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case to:case ro:return Math.max(e,16)*Math.max(t,8)/4;case eo:case io:return Math.max(e,8)*Math.max(t,8)/2;case no:case so:case ao:case lo:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case oo:case rn:case co:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case ho:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case uo:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case fo:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case po:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case mo:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case go:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case xo:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case _o:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case vo:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case yo:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case Mo:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case So:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case bo:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case To:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case Eo:case wo:case Ao:return Math.ceil(e/4)*Math.ceil(t/4)*16;case Ro:case Co:return Math.ceil(e/4)*Math.ceil(t/4)*8;case nn:case Po:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw Error(`Unable to determine texture byte length for ${i} format.`)}function _0(e){switch(e){case Zt:case Ra:return{byteLength:1,components:1};case vr:case Ca:case Pt:return{byteLength:2,components:1};case Xn:case qn:return{byteLength:2,components:4};case jt:case Wn:case Jt:return{byteLength:4,components:1};case Pa:case Ia:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}if(typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ks}}));if(typeof window<"u")if(window.__THREE__)Te("WARNING: Multiple instances of Three.js being imported.");else window.__THREE__=ks;function Ol(){let e=null,t=!1,i=null,r=null;function n(s,o){r=e.requestAnimationFrame(n),i(s,o)}return{start:function(){if(t===!0)return;if(i===null)return;if(e===null)return;r=e.requestAnimationFrame(n),t=!0},stop:function(){if(e!==null)e.cancelAnimationFrame(r);t=!1},setAnimationLoop:function(s){i=s},setContext:function(s){e=s}}}function Ju(e){let t=new WeakMap;function i(a,l){let{array:c,usage:f}=a,u=c.byteLength,h=e.createBuffer();e.bindBuffer(l,h),e.bufferData(l,c,f),a.onUploadCallback();let p;if(c instanceof Float32Array)p=e.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=e.HALF_FLOAT;else if(c instanceof Uint16Array)if(a.isFloat16BufferAttribute)p=e.HALF_FLOAT;else p=e.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=e.SHORT;else if(c instanceof Uint32Array)p=e.UNSIGNED_INT;else if(c instanceof Int32Array)p=e.INT;else if(c instanceof Int8Array)p=e.BYTE;else if(c instanceof Uint8Array)p=e.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=e.UNSIGNED_BYTE;else throw Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function r(a,l,c){let{array:f,updateRanges:u}=l;if(e.bindBuffer(c,a),u.length===0)e.bufferSubData(c,0,f);else{u.sort((p,x)=>p.start-x.start);let h=0;for(let p=1;p<u.length;p++){let x=u[h],y=u[p];if(y.start<=x.start+x.count+1)x.count=Math.max(x.count,y.start+y.count-x.start);else++h,u[h]=y}u.length=h+1;for(let p=0,x=u.length;p<x;p++){let y=u[p];e.bufferSubData(c,y.start*f.BYTES_PER_ELEMENT,f,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function n(a){if(a.isInterleavedBufferAttribute)a=a.data;return t.get(a)}function s(a){if(a.isInterleavedBufferAttribute)a=a.data;let l=t.get(a);if(l)e.deleteBuffer(l.buffer),t.delete(a)}function o(a,l){if(a.isInterleavedBufferAttribute)a=a.data;if(a.isGLBufferAttribute){let f=t.get(a);if(!f||f.version<a.version)t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,i(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(c.buffer,a,l),c.version=a.version}}return{get:n,remove:s,update:o}}var Ku=`
#ifdef USE_ALPHAHASH

	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;

#endif
`;var Qu=`
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
`;var $u=`
#ifdef USE_ALPHAMAP

	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;

#endif
`;var ju=`
#ifdef USE_ALPHAMAP

	uniform sampler2D alphaMap;

#endif
`;var ef=`
#ifdef USE_ALPHATEST

	#ifdef ALPHA_TO_COVERAGE

	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;

	#else

	if ( diffuseColor.a < alphaTest ) discard;

	#endif

#endif
`;var tf=`
#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif
`;var rf=`
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
`;var nf=`
#ifdef USE_AOMAP

	uniform sampler2D aoMap;
	uniform float aoMapIntensity;

#endif
`;var sf=`
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
`;var of=`
#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif
`;var af=`
vec3 transformed = vec3( position );

#ifdef USE_ALPHAHASH

	vPosition = vec3( position );

#endif
`;var lf=`
vec3 objectNormal = vec3( normal );

#ifdef USE_TANGENT

	vec3 objectTangent = vec3( tangent.xyz );

#endif
`;var cf=`

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

`;var hf=`

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

`;var uf=`
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
`;var ff=`
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
`;var df=`
#if NUM_CLIPPING_PLANES > 0

	varying vec3 vClipPosition;

	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];

#endif
`;var pf=`
#if NUM_CLIPPING_PLANES > 0

	varying vec3 vClipPosition;

#endif
`;var mf=`
#if NUM_CLIPPING_PLANES > 0

	vClipPosition = - mvPosition.xyz;

#endif
`;var gf=`
#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )

	diffuseColor *= vColor;

#endif
`;var xf=`
#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )

	varying vec4 vColor;

#endif
`;var _f=`
#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )

	varying vec4 vColor;

#endif
`;var vf=`
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
`;var yf=`
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
`;var Mf=`

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
`;var Sf=`
#ifdef USE_DISPLACEMENTMAP

	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;

#endif
`;var bf=`
#ifdef USE_DISPLACEMENTMAP

	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );

#endif
`;var Tf=`
#ifdef USE_EMISSIVEMAP

	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );

	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE

		// use inline sRGB decode until browsers properly support SRGB8_ALPHA8 with video textures (#26516)

		emissiveColor = sRGBTransferEOTF( emissiveColor );

	#endif

	totalEmissiveRadiance *= emissiveColor.rgb;

#endif
`;var Ef=`
#ifdef USE_EMISSIVEMAP

	uniform sampler2D emissiveMap;

#endif
`;var wf=`
gl_FragColor = linearToOutputTexel( gl_FragColor );
`;var Af=`

vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}

vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}

vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}

`;var Rf=`
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
`;var Cf=`
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
`;var Pf=`
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
`;var If=`
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
`;var Lf=`
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
`;var Df=`
#ifdef USE_FOG

	vFogDepth = - mvPosition.z;

#endif
`;var Nf=`
#ifdef USE_FOG

	varying float vFogDepth;

#endif
`;var Uf=`
#ifdef USE_FOG

	#ifdef FOG_EXP2

		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );

	#else

		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );

	#endif

	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );

#endif
`;var Ff=`
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
`;var Bf=`

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
`;var Of=`
#ifdef USE_LIGHTMAP

	uniform sampler2D lightMap;
	uniform float lightMapIntensity;

#endif
`;var zf=`
LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;
`;var Gf=`
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
`;var Vf=`
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
`;var Hf=`
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
`;var kf=`
ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;
`;var Wf=`
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
`;var Xf=`
BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;
`;var qf=`
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
`;var Yf=`
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
`;var Zf=`

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
`;var Jf=`
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
`;var Kf=`
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
`;var Qf=`
#if defined( RE_IndirectDiffuse )

	#if defined( LAMBERT ) || defined( PHONG )

		irradiance += iblIrradiance;

	#endif

	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );

#endif

#if defined( RE_IndirectSpecular )

	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );

#endif
`;var $f=`
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
`;var jf=`
#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )

	// Doing a strict comparison with == 1.0 can cause noise artifacts
	// on some platforms. See issue #17623.
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;

#endif
`;var ed=`
#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )

	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;

#endif
`;var td=`
#ifdef USE_LOGARITHMIC_DEPTH_BUFFER

	varying float vFragDepth;
	varying float vIsPerspective;

#endif
`;var id=`
#ifdef USE_LOGARITHMIC_DEPTH_BUFFER

	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );

#endif
`;var rd=`
#ifdef USE_MAP

	vec4 sampledDiffuseColor = texture2D( map, vMapUv );

	#ifdef DECODE_VIDEO_TEXTURE

		// use inline sRGB decode until browsers properly support SRGB8_ALPHA8 with video textures (#26516)

		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );

	#endif

	diffuseColor *= sampledDiffuseColor;

#endif
`;var nd=`
#ifdef USE_MAP

	uniform sampler2D map;

#endif
`;var sd=`
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
`;var od=`
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
`;var ad=`
float metalnessFactor = metalness;

#ifdef USE_METALNESSMAP

	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );

	// reads channel B, compatible with a combined OcclusionRoughnessMetallic (RGB) texture
	metalnessFactor *= texelMetalness.b;

#endif
`;var ld=`
#ifdef USE_METALNESSMAP

	uniform sampler2D metalnessMap;

#endif
`;var cd=`
#ifdef USE_INSTANCING_MORPH

	float morphTargetInfluences[ MORPHTARGETS_COUNT ];

	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;

	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {

		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;

	}
#endif
`;var hd=`
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
`;var ud=`
#ifdef USE_MORPHNORMALS

	// morphTargetBaseInfluence is set based on BufferGeometry.morphTargetsRelative value:
	// When morphTargetsRelative is false, this is set to 1 - sum(influences); this results in normal = sum((target - base) * influence)
	// When morphTargetsRelative is true, this is set to 1; as a result, all morph targets are simply added to the base after weighting
	objectNormal *= morphTargetBaseInfluence;

	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {

		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];

	}

#endif
`;var fd=`
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
`;var dd=`
#ifdef USE_MORPHTARGETS

	// morphTargetBaseInfluence is set based on BufferGeometry.morphTargetsRelative value:
	// When morphTargetsRelative is false, this is set to 1 - sum(influences); this results in position = sum((target - base) * influence)
	// When morphTargetsRelative is true, this is set to 1; as a result, all morph targets are simply added to the base after weighting
	transformed *= morphTargetBaseInfluence;

	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {

		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];

	}

#endif
`;var pd=`
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

`;var md=`

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
`;var gd=`
#ifndef FLAT_SHADED

	varying vec3 vNormal;

	#ifdef USE_TANGENT

		varying vec3 vTangent;
		varying vec3 vBitangent;

	#endif

#endif
`;var xd=`
#ifndef FLAT_SHADED

	varying vec3 vNormal;

	#ifdef USE_TANGENT

		varying vec3 vTangent;
		varying vec3 vBitangent;

	#endif

#endif
`;var _d=`
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
`;var vd=`
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
`;var yd=`
#ifdef USE_CLEARCOAT

	vec3 clearcoatNormal = nonPerturbedNormal;

#endif
`;var Md=`
#ifdef USE_CLEARCOAT_NORMALMAP

	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;

	clearcoatNormal = normalize( tbn2 * clearcoatMapN );

#endif
`;var Sd=`

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
`;var bd=`

#ifdef USE_IRIDESCENCEMAP

	uniform sampler2D iridescenceMap;

#endif

#ifdef USE_IRIDESCENCE_THICKNESSMAP

	uniform sampler2D iridescenceThicknessMap;

#endif
`;var Td=`
#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif

#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif

gl_FragColor = vec4( outgoingLight, diffuseColor.a );
`;var Ed=`
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
`;var wd=`
#ifdef PREMULTIPLIED_ALPHA

	gl_FragColor.rgb *= gl_FragColor.a;

#endif
`;var Ad=`
vec4 mvPosition = vec4( transformed, 1.0 );

#ifdef USE_BATCHING

	mvPosition = batchingMatrix * mvPosition;

#endif

#ifdef USE_INSTANCING

	mvPosition = instanceMatrix * mvPosition;

#endif

mvPosition = modelViewMatrix * mvPosition;

gl_Position = projectionMatrix * mvPosition;
`;var Rd=`
#ifdef DITHERING

	gl_FragColor.rgb = dithering( gl_FragColor.rgb );

#endif
`;var Cd=`
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
`;var Pd=`
float roughnessFactor = roughness;

#ifdef USE_ROUGHNESSMAP

	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );

	// reads channel G, compatible with a combined OcclusionRoughnessMetallic (RGB) texture
	roughnessFactor *= texelRoughness.g;

#endif
`;var Id=`
#ifdef USE_ROUGHNESSMAP

	uniform sampler2D roughnessMap;

#endif
`;var Ld=`
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
`;var Dd=`

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
`;var Nd=`

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


`;var Ud=`
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
`;var Fd=`
#ifdef USE_SKINNING

	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );

#endif
`;var Bd=`
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
`;var Od=`
#ifdef USE_SKINNING

	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );

	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;

	transformed = ( bindMatrixInverse * skinned ).xyz;

#endif
`;var zd=`
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
`;var Gd=`
float specularStrength;

#ifdef USE_SPECULARMAP

	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;

#else

	specularStrength = 1.0;

#endif
`;var Vd=`
#ifdef USE_SPECULARMAP

	uniform sampler2D specularMap;

#endif
`;var Hd=`
#if defined( TONE_MAPPING )

	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );

#endif
`;var kd=`
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
`;var Wd=`
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
`;var Xd=`
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
`;var qd=`
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
`;var Yd=`
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
`;var Zd=`
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
`;var Jd=`
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
`;var Kd=`
varying vec2 vUv;
uniform mat3 uvTransform;

void main() {

	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;

	gl_Position = vec4( position.xy, 1.0, 1.0 );

}
`,Qd=`
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
`;var ep=`
varying vec3 vWorldDirection;

#include <common>

void main() {

	vWorldDirection = transformDirection( position, modelMatrix );

	#include <begin_vertex>
	#include <project_vertex>

	gl_Position.z = gl_Position.w; // set z to camera.far

}
`,tp=`
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
`;var ip=`
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
`,rp=`
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
`;var np=`
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
`,sp=`
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
`;var op=`
varying vec3 vWorldDirection;

#include <common>

void main() {

	vWorldDirection = transformDirection( position, modelMatrix );

	#include <begin_vertex>
	#include <project_vertex>

}
`,ap=`
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
`;var lp=`
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
`,cp=`
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
`;var hp=`
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
`,up=`
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
`;var fp=`
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
`,dp=`
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
`;var pp=`
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
`,mp=`
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
`;var gp=`
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
`,xp=`
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
`;var _p=`
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
`,vp=`
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
`;var yp=`
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
`,Mp=`
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
`;var Sp=`
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
`,bp=`
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
`;var Tp=`
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
`,Ep=`
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
`;var wp=`
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
`,Ap=`
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
`;var Rp=`
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
`,Cp=`
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
`;var pt={alphahash_fragment:Ku,alphahash_pars_fragment:Qu,alphamap_fragment:$u,alphamap_pars_fragment:ju,alphatest_fragment:ef,alphatest_pars_fragment:tf,aomap_fragment:rf,aomap_pars_fragment:nf,batching_pars_vertex:sf,batching_vertex:of,begin_vertex:af,beginnormal_vertex:lf,bsdfs:cf,iridescence_fragment:hf,bumpmap_pars_fragment:uf,clipping_planes_fragment:ff,clipping_planes_pars_fragment:df,clipping_planes_pars_vertex:pf,clipping_planes_vertex:mf,color_fragment:gf,color_pars_fragment:xf,color_pars_vertex:_f,color_vertex:vf,common:yf,defaultnormal_vertex:Mf,displacementmap_pars_vertex:Sf,displacementmap_vertex:bf,emissivemap_fragment:Tf,emissivemap_pars_fragment:Ef,colorspace_fragment:wf,colorspace_pars_fragment:Af,envmap_fragment:Rf,envmap_common_pars_fragment:Cf,envmap_pars_fragment:Pf,envmap_pars_vertex:If,envmap_physical_pars_fragment:Hf,envmap_vertex:Lf,fog_vertex:Df,fog_pars_vertex:Nf,fog_fragment:Uf,fog_pars_fragment:Ff,gradientmap_pars_fragment:Bf,lightmap_pars_fragment:Of,lights_lambert_fragment:zf,lights_lambert_pars_fragment:Gf,lights_pars_begin:Vf,lights_toon_fragment:kf,lights_toon_pars_fragment:Wf,lights_phong_fragment:Xf,lights_phong_pars_fragment:qf,lights_physical_fragment:Yf,lights_physical_pars_fragment:Zf,lights_fragment_begin:Jf,lights_fragment_maps:Kf,lights_fragment_end:Qf,lightprobes_pars_fragment:$f,logdepthbuf_fragment:jf,logdepthbuf_pars_fragment:ed,logdepthbuf_pars_vertex:td,logdepthbuf_vertex:id,map_fragment:rd,map_pars_fragment:nd,map_particle_fragment:sd,map_particle_pars_fragment:od,metalnessmap_fragment:ad,metalnessmap_pars_fragment:ld,morphinstance_vertex:cd,morphcolor_vertex:hd,morphnormal_vertex:ud,morphtarget_pars_vertex:fd,morphtarget_vertex:dd,normal_fragment_begin:pd,normal_fragment_maps:md,normal_pars_fragment:gd,normal_pars_vertex:xd,normal_vertex:_d,normalmap_pars_fragment:vd,clearcoat_normal_fragment_begin:yd,clearcoat_normal_fragment_maps:Md,clearcoat_pars_fragment:Sd,iridescence_pars_fragment:bd,opaque_fragment:Td,packing:Ed,premultiplied_alpha_fragment:wd,project_vertex:Ad,dithering_fragment:Rd,dithering_pars_fragment:Cd,roughnessmap_fragment:Pd,roughnessmap_pars_fragment:Id,shadowmap_pars_fragment:Ld,shadowmap_pars_vertex:Dd,shadowmap_vertex:Nd,shadowmask_pars_fragment:Ud,skinbase_vertex:Fd,skinning_pars_vertex:Bd,skinning_vertex:Od,skinnormal_vertex:zd,specularmap_fragment:Gd,specularmap_pars_fragment:Vd,tonemapping_fragment:Hd,tonemapping_pars_fragment:kd,transmission_fragment:Wd,transmission_pars_fragment:Xd,uv_pars_fragment:qd,uv_pars_vertex:Yd,uv_vertex:Zd,worldpos_vertex:Jd,background_vert:Kd,background_frag:Qd,backgroundCube_vert:$d,backgroundCube_frag:jd,cube_vert:ep,cube_frag:tp,depth_vert:ip,depth_frag:rp,distance_vert:np,distance_frag:sp,equirect_vert:op,equirect_frag:ap,linedashed_vert:lp,linedashed_frag:cp,meshbasic_vert:hp,meshbasic_frag:up,meshlambert_vert:fp,meshlambert_frag:dp,meshmatcap_vert:pp,meshmatcap_frag:mp,meshnormal_vert:gp,meshnormal_frag:xp,meshphong_vert:_p,meshphong_frag:vp,meshphysical_vert:yp,meshphysical_frag:Mp,meshtoon_vert:Sp,meshtoon_frag:bp,points_vert:Tp,points_frag:Ep,shadow_vert:wp,shadow_frag:Ap,sprite_vert:Rp,sprite_frag:Cp};var Pe={common:{diffuse:{value:new ge(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new et}},envmap:{envMap:{value:null},envMapRotation:{value:new et},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:0.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new et}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new et}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new et},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new et},normalScale:{value:new J(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new et},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new et}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new et}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new et}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:0.00025},fogNear:{value:1},fogFar:{value:2000},fogColor:{value:new ge(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new ge(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0},uvTransform:{value:new et}},sprite:{diffuse:{value:new ge(16777215)},opacity:{value:1},center:{value:new J(0.5,0.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}}};var Vi={basic:{uniforms:Ti([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.fog]),vertexShader:pt.meshbasic_vert,fragmentShader:pt.meshbasic_frag},lambert:{uniforms:Ti([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new ge(0)},envMapIntensity:{value:1}}]),vertexShader:pt.meshlambert_vert,fragmentShader:pt.meshlambert_frag},phong:{uniforms:Ti([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new ge(0)},specular:{value:new ge(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:pt.meshphong_vert,fragmentShader:pt.meshphong_frag},standard:{uniforms:Ti([Pe.common,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.roughnessmap,Pe.metalnessmap,Pe.fog,Pe.lights,{emissive:{value:new ge(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag},toon:{uniforms:Ti([Pe.common,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.gradientmap,Pe.fog,Pe.lights,{emissive:{value:new ge(0)}}]),vertexShader:pt.meshtoon_vert,fragmentShader:pt.meshtoon_frag},matcap:{uniforms:Ti([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,{matcap:{value:null}}]),vertexShader:pt.meshmatcap_vert,fragmentShader:pt.meshmatcap_frag},points:{uniforms:Ti([Pe.points,Pe.fog]),vertexShader:pt.points_vert,fragmentShader:pt.points_frag},dashed:{uniforms:Ti([Pe.common,Pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:pt.linedashed_vert,fragmentShader:pt.linedashed_frag},depth:{uniforms:Ti([Pe.common,Pe.displacementmap]),vertexShader:pt.depth_vert,fragmentShader:pt.depth_frag},normal:{uniforms:Ti([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,{opacity:{value:1}}]),vertexShader:pt.meshnormal_vert,fragmentShader:pt.meshnormal_frag},sprite:{uniforms:Ti([Pe.sprite,Pe.fog]),vertexShader:pt.sprite_vert,fragmentShader:pt.sprite_frag},background:{uniforms:{uvTransform:{value:new et},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:pt.background_vert,fragmentShader:pt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new et}},vertexShader:pt.backgroundCube_vert,fragmentShader:pt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:pt.cube_vert,fragmentShader:pt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:pt.equirect_vert,fragmentShader:pt.equirect_frag},distance:{uniforms:Ti([Pe.common,Pe.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1000}}]),vertexShader:pt.distance_vert,fragmentShader:pt.distance_frag},shadow:{uniforms:Ti([Pe.lights,Pe.fog,{color:{value:new ge(0)},opacity:{value:1}}]),vertexShader:pt.shadow_vert,fragmentShader:pt.shadow_frag}};Vi.physical={uniforms:Ti([Vi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new et},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new et},clearcoatNormalScale:{value:new J(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new et},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new et},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new et},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new et},sheen:{value:0},sheenColor:{value:new ge(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new et},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new et},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new et},transmissionSamplerSize:{value:new J},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new et},attenuationDistance:{value:0},attenuationColor:{value:new ge(0)},specularColor:{value:new ge(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new et},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new et},anisotropyVector:{value:new J},anisotropyMap:{value:null},anisotropyMapTransform:{value:new et}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag};var zl={r:0,b:0,g:0},F0=new Je,Pp=new et;Pp.set(-1,0,0,0,1,0,0,0,1);function Ip(e,t,i,r,n,s){let o=new ge(0),a=n===!0?0:1,l,c,f=null,u=0,h=null;function p(b){let E=b.isScene===!0?b.background:null;if(E&&E.isTexture){let M=b.backgroundBlurriness>0;E=t.get(E,M)}return E}function x(b){let E=!1,M=p(b);if(M===null)d(o,a);else if(M&&M.isColor)d(M,1),E=!0;let I=e.xr.getEnvironmentBlendMode();if(I==="additive")i.buffers.color.setClear(0,0,0,1,s);else if(I==="alpha-blend")i.buffers.color.setClear(0,0,0,0,s);if(e.autoClear||E)i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil)}function y(b,E){let M=p(E);if(M&&M.isCubeTexture){if(c===void 0)c=new rt(new Li(1,1,1),new Ct({name:"BackgroundCubeMaterial",uniforms:wr(Vi.backgroundCube.uniforms),vertexShader:Vi.backgroundCube.vertexShader,fragmentShader:Vi.backgroundCube.fragmentShader,side:Ot,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(I,L,g){this.matrixWorld.copyPosition(g.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c);if(c.material.uniforms.envMap.value=M,c.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(F0.makeRotationFromEuler(E.backgroundRotation)).transpose(),M.isRenderTargetTexture===!1)c.material.uniforms.backgroundRotation.value.premultiply(Pp);if(c.material.toneMapped=ht.getTransfer(M.colorSpace)!==_t,f!==M||u!==M.version||h!==e.toneMapping)c.material.needsUpdate=!0,f=M,u=M.version,h=e.toneMapping;c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null)}else if(M&&M.isTexture){if(l===void 0)l=new rt(new Ri(2,2),new Ct({name:"BackgroundMaterial",uniforms:wr(Vi.background.uniforms),vertexShader:Vi.background.vertexShader,fragmentShader:Vi.background.fragmentShader,side:ki,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l);if(l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.toneMapped=ht.getTransfer(M.colorSpace)!==_t,M.matrixAutoUpdate===!0)M.updateMatrix();if(l.material.uniforms.uvTransform.value.copy(M.matrix),f!==M||u!==M.version||h!==e.toneMapping)l.material.needsUpdate=!0,f=M,u=M.version,h=e.toneMapping;l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null)}}function d(b,E){b.getRGB(zl,wl(e)),i.buffers.color.setClear(zl.r,zl.g,zl.b,E,s)}function m(){if(c!==void 0)c.geometry.dispose(),c.material.dispose(),c=void 0;if(l!==void 0)l.geometry.dispose(),l.material.dispose(),l=void 0}return{getClearColor:function(){return o},setClearColor:function(b,E=1){o.set(b),a=E,d(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(b){a=b,d(o,a)},render:x,addToRenderList:y,dispose:m}}function Lp(e,t){let i=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},n=h(null),s=n,o=!1;function a(U,X,ne,C,Q){let ie=!1,H=u(U,C,ne,X);if(s!==H)s=H,c(s.object);if(ie=p(U,C,ne,Q),ie)x(U,C,ne,Q);if(Q!==null)t.update(Q,e.ELEMENT_ARRAY_BUFFER);if(ie||o){if(o=!1,M(U,X,ne,C),Q!==null)e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(Q).buffer)}}function l(){return e.createVertexArray()}function c(U){return e.bindVertexArray(U)}function f(U){return e.deleteVertexArray(U)}function u(U,X,ne,C){let Q=C.wireframe===!0,ie=r[X.id];if(ie===void 0)ie={},r[X.id]=ie;let H=U.isInstancedMesh===!0?U.id:0,_e=ie[H];if(_e===void 0)_e={},ie[H]=_e;let j=_e[ne.id];if(j===void 0)j={},_e[ne.id]=j;let se=j[Q];if(se===void 0)se=h(l()),j[Q]=se;return se}function h(U){let X=[],ne=[],C=[];for(let Q=0;Q<i;Q++)X[Q]=0,ne[Q]=0,C[Q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:X,enabledAttributes:ne,attributeDivisors:C,object:U,attributes:{},index:null}}function p(U,X,ne,C){let Q=s.attributes,ie=X.attributes,H=0,_e=ne.getAttributes();for(let j in _e)if(_e[j].location>=0){let de=Q[j],Fe=ie[j];if(Fe===void 0){if(j==="instanceMatrix"&&U.instanceMatrix)Fe=U.instanceMatrix;if(j==="instanceColor"&&U.instanceColor)Fe=U.instanceColor}if(de===void 0)return!0;if(de.attribute!==Fe)return!0;if(Fe&&de.data!==Fe.data)return!0;H++}if(s.attributesNum!==H)return!0;if(s.index!==C)return!0;return!1}function x(U,X,ne,C){let Q={},ie=X.attributes,H=0,_e=ne.getAttributes();for(let j in _e)if(_e[j].location>=0){let de=ie[j];if(de===void 0){if(j==="instanceMatrix"&&U.instanceMatrix)de=U.instanceMatrix;if(j==="instanceColor"&&U.instanceColor)de=U.instanceColor}let Fe={};if(Fe.attribute=de,de&&de.data)Fe.data=de.data;Q[j]=Fe,H++}s.attributes=Q,s.attributesNum=H,s.index=C}function y(){let U=s.newAttributes;for(let X=0,ne=U.length;X<ne;X++)U[X]=0}function d(U){m(U,0)}function m(U,X){let ne=s.newAttributes,C=s.enabledAttributes,Q=s.attributeDivisors;if(ne[U]=1,C[U]===0)e.enableVertexAttribArray(U),C[U]=1;if(Q[U]!==X)e.vertexAttribDivisor(U,X),Q[U]=X}function b(){let U=s.newAttributes,X=s.enabledAttributes;for(let ne=0,C=X.length;ne<C;ne++)if(X[ne]!==U[ne])e.disableVertexAttribArray(ne),X[ne]=0}function E(U,X,ne,C,Q,ie,H){if(H===!0)e.vertexAttribIPointer(U,X,ne,Q,ie);else e.vertexAttribPointer(U,X,ne,C,Q,ie)}function M(U,X,ne,C){y();let Q=C.attributes,ie=ne.getAttributes(),H=X.defaultAttributeValues;for(let _e in ie){let j=ie[_e];if(j.location>=0){let se=Q[_e];if(se===void 0){if(_e==="instanceMatrix"&&U.instanceMatrix)se=U.instanceMatrix;if(_e==="instanceColor"&&U.instanceColor)se=U.instanceColor}if(se!==void 0){let de=se.normalized,Fe=se.itemSize,te=t.get(se);if(te===void 0)continue;let{buffer:ce,type:He,bytesPerElement:ze}=te,Ke=He===e.INT||He===e.UNSIGNED_INT||se.gpuType===Wn;if(se.isInterleavedBufferAttribute){let Le=se.data,yt=Le.isInterleavedBuffer===!0?Le.stride:Le.itemSize,mt=se.offset;if(Le.isInstancedInterleavedBuffer||Le.isInstancedBufferAttribute){for(let nt=0;nt<j.locationSize;nt++)m(j.location+nt,Le.meshPerAttribute);if(U.isInstancedMesh!==!0&&C._maxInstanceCount===void 0)C._maxInstanceCount=Le.meshPerAttribute*Le.count}else for(let nt=0;nt<j.locationSize;nt++)d(j.location+nt);e.bindBuffer(e.ARRAY_BUFFER,ce);for(let nt=0;nt<j.locationSize;nt++)E(j.location+nt,Fe/j.locationSize,He,de,yt*ze,(mt+Fe/j.locationSize*nt)*ze,Ke)}else{if(se.isInstancedBufferAttribute){for(let Le=0;Le<j.locationSize;Le++)m(j.location+Le,se.meshPerAttribute);if(U.isInstancedMesh!==!0&&C._maxInstanceCount===void 0)C._maxInstanceCount=se.meshPerAttribute*se.count}else for(let Le=0;Le<j.locationSize;Le++)d(j.location+Le);e.bindBuffer(e.ARRAY_BUFFER,ce);for(let Le=0;Le<j.locationSize;Le++)E(j.location+Le,Fe/j.locationSize,He,de,Fe*ze,Fe/j.locationSize*Le*ze,Ke)}}else if(H!==void 0){let de=H[_e];if(de!==void 0)switch(de.length){case 2:e.vertexAttrib2fv(j.location,de);break;case 3:e.vertexAttrib3fv(j.location,de);break;case 4:e.vertexAttrib4fv(j.location,de);break;default:e.vertexAttrib1fv(j.location,de)}}}}b()}function I(){N();for(let U in r){let X=r[U];for(let ne in X){let C=X[ne];for(let Q in C){let ie=C[Q];for(let H in ie)f(ie[H].object),delete ie[H];delete C[Q]}}delete r[U]}}function L(U){if(r[U.id]===void 0)return;let X=r[U.id];for(let ne in X){let C=X[ne];for(let Q in C){let ie=C[Q];for(let H in ie)f(ie[H].object),delete ie[H];delete C[Q]}}delete r[U.id]}function g(U){for(let X in r){let ne=r[X];for(let C in ne){let Q=ne[C];if(Q[U.id]===void 0)continue;let ie=Q[U.id];for(let H in ie)f(ie[H].object),delete ie[H];delete Q[U.id]}}}function S(U){for(let X in r){let ne=r[X],C=U.isInstancedMesh===!0?U.id:0,Q=ne[C];if(Q===void 0)continue;for(let ie in Q){let H=Q[ie];for(let _e in H)f(H[_e].object),delete H[_e];delete Q[ie]}if(delete ne[C],Object.keys(ne).length===0)delete r[X]}}function N(){if(W(),o=!0,s===n)return;s=n,c(s.object)}function W(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:a,reset:N,resetDefaultState:W,dispose:I,releaseStatesOfGeometry:L,releaseStatesOfObject:S,releaseStatesOfProgram:g,initAttributes:y,enableAttribute:d,disableUnusedAttributes:b}}function Dp(e,t,i){let r;function n(l){r=l}function s(l,c){e.drawArrays(r,l,c),i.update(c,r,1)}function o(l,c,f){if(f===0)return;e.drawArraysInstanced(r,l,c,f),i.update(c,r,f)}function a(l,c,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,l,0,c,0,f);let h=0;for(let p=0;p<f;p++)h+=c[p];i.update(h,r,1)}this.setMode=n,this.render=s,this.renderInstances=o,this.renderMultiDraw=a}function Np(e,t,i,r){let n;function s(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){let g=t.get("EXT_texture_filter_anisotropic");n=e.getParameter(g.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function o(g){if(g!==li&&r.convert(g)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))return!1;return!0}function a(g){let S=g===Pt&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));if(g!==Zt&&g!==Jt&&!S&&r.convert(g)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))return!1;return!0}function l(g){if(g==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";g="mediump"}if(g==="mediump"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0)return"mediump"}return"lowp"}let c=i.precision!==void 0?i.precision:"highp",f=l(c);if(f!==c)Te("WebGLRenderer:",c,"not supported, using",f,"instead."),c=f;let u=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),h=i.logarithmicDepthBuffer===!0&&u===!1;if(i.reversedDepthBuffer===!0&&u===!1)Te("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");if(i.logarithmicDepthBuffer===!0&&u===!0)Te("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),x=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=e.getParameter(e.MAX_TEXTURE_SIZE),d=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),m=e.getParameter(e.MAX_VERTEX_ATTRIBS),b=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),E=e.getParameter(e.MAX_VARYING_VECTORS),M=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),I=e.getParameter(e.MAX_SAMPLES),L=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:u,maxTextures:p,maxVertexTextures:x,maxTextureSize:y,maxCubemapSize:d,maxAttributes:m,maxVertexUniforms:b,maxVaryings:E,maxFragmentUniforms:M,maxSamples:I,samples:L}}function Up(e){let t=this,i=null,r=0,n=!1,s=!1,o=new Ai,a=new et,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,h){let p=u.length!==0||h||r!==0||n;return n=h,r=u.length,p},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,h){i=f(u,h,0)},this.setState=function(u,h,p){let{clippingPlanes:x,clipIntersection:y,clipShadows:d}=u,m=e.get(u);if(!n||x===null||x.length===0||s&&!d)if(s)f(null);else c();else{let b=s?0:r,E=b*4,M=m.clippingState||null;l.value=M,M=f(x,h,E,p);for(let I=0;I!==E;++I)M[I]=i[I];m.clippingState=M,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=b}};function c(){if(l.value!==i)l.value=i,l.needsUpdate=r>0;t.numPlanes=r,t.numIntersection=0}function f(u,h,p,x){let y=u!==null?u.length:0,d=null;if(y!==0){if(d=l.value,x!==!0||d===null){let m=p+y*4,b=h.matrixWorldInverse;if(a.getNormalMatrix(b),d===null||d.length<m)d=new Float32Array(m);for(let E=0,M=p;E!==y;++E,M+=4)o.copy(u[E]).applyMatrix4(b,a),o.normal.toArray(d,M),d[M+3]=o.constant}l.value=d,l.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,d}}class Yr extends Rt{constructor(e=1,t={}){super(e,e,t);this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Gr(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Li(5,5,5),n=new Ct({name:"CubemapFromEquirect",uniforms:wr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ot,blending:Wi});n.uniforms.tEquirect.value=t;let s=new rt(r,n),o=t.minFilter;if(t.minFilter===Ei)t.minFilter=Gt;return new Pn(1,10,this).update(e,s),t.minFilter=o,s.geometry.dispose(),s.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){let n=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,i,r);e.setRenderTarget(n)}}var Fp=256,B0=3,O0=20,Gp=256,Vp=16,z0=3,G0=new R,V0=new ge;class Zr{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Pn(1,10,null),this._boxMesh=new rt(new Li(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,i=0.1,r=100,n={}){let{size:s=256,position:o=G0}=n,a=this._renderer;this._setSize(s);let l=this._allocateTarget(),c=this._getSourceTarget(!0);if(t>0)c.texture.mipmapsAutoUpdate=!1;let{autoClear:f,autoClearColor:u,autoClearDepth:h,autoClearStencil:p}=a,x=e.background;if(a.autoClear=!0,a.autoClearColor=!0,a.autoClearDepth=!0,a.autoClearStencil=!0,x===null)e.background=a.getClearColor(V0);let y=new Pn(i,r,c);if(y.position.copy(o),y.update(a,e),a.autoClear=f,a.autoClearColor=u,a.autoClearDepth=h,a.autoClearStencil=p,e.background=x,t>0)c.texture.mipmapsAutoUpdate=!0,this._blur(l,t);return this._applyPMREM(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){if(this._cubemapMaterial===null)this._cubemapMaterial=zp(),this._compileMaterial(this._cubemapMaterial)}compileEquirectangularShader(){if(this._equirectMaterial===null)this._equirectMaterial=Op(),this._compileMaterial(this._equirectMaterial)}dispose(){if(this._sourceTarget!==null)this._sourceTarget.dispose();if(this._cubemapMaterial!==null)this._cubemapMaterial.dispose();if(this._equirectMaterial!==null)this._equirectMaterial.dispose();if(this._blurMaterial!==null)this._blurMaterial.dispose();if(this._ggxMaterial!==null)this._ggxMaterial.dispose();if(this._integrationMaterial!==null)this._integrationMaterial.dispose();this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(Fp,Yh(e))}_fromTexture(e,t){if(e.mapping===Xi||e.mapping===_r)this._setSize(e.image.length===0?Fp:e.image[0].width||e.image[0].image.width);else this._setSize(e.image.width/4);let i=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(i),i}_allocateTarget(){let e=this._cubeSize,t=Bp(e,!1,!1),i=Math.log2(e)-B0;for(let r=0;r<=i;r++)t.texture.mipmaps.push({width:e>>r,height:e>>r});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,i=this._sourceTarget;if(i===null||i.width!==t||e&&i.depthBuffer===!1){if(i!==null)i.dispose();this._sourceTarget=Bp(t,!0,e)}return this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,i){let r=this._boxMesh,n=this._cubeCamera;r.material=i,n.renderTarget=e,n.activeMipmapLevel=t;let s=e.width>>t;e.viewport.set(0,0,s,s),n.update(this._renderer,r),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;if(e.mapping===Xi||e.mapping===_r){if(this._cubemapMaterial===null)this._cubemapMaterial=zp();t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1}else{if(this._equirectMaterial===null)this._equirectMaterial=Op();t=this._equirectMaterial}t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){if(this._ggxMaterial===null)this._ggxMaterial=H0(),this._integrationMaterial=k0();let t=this._cubeSize,i=e.texture.mipmaps.length-1,r=this._ggxMaterial.uniforms;r.envMap.value=this._sourceTarget.texture;let n=this._integrationMaterial.uniforms;n.envMap.value=this._sourceTarget.texture,n.sourceLod.value=Math.log2(t/Vp);for(let s=0;s<=i;s++){let o=Zr.lodToRoughness(s,i);if(s>i-z0)n.roughness.value=o,this._renderCube(e,s,this._integrationMaterial);else{let a=o>0?Math.log2(t)+0.5*Math.log2(6/(Gp*Math.pow(o,4)))+0.5:0;r.roughness.value=o,r.lodBias.value=a,this._renderCube(e,s,this._ggxMaterial)}}}_blur(e,t){if(this._blurMaterial===null)this._blurMaterial=W0();let i=this._blurMaterial,r=i.uniforms,n=this._sourceTarget;r.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,r.envMap.value=n.texture,this._renderCube(e,0,i),r.envMap.value=e.texture,this._renderCube(n,0,i)}}function Bp(e,t,i){return new Yr(e,{minFilter:Ei,generateMipmaps:t,type:Pt,colorSpace:on,depthBuffer:i})}function pa(e,t,i){return new Ct({name:e,uniforms:t,vertexShader:pt.cube_vert,fragmentShader:i,side:Ot,blending:Wi,depthTest:!1,depthWrite:!1})}function H0(){return pa("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Gp}u

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
	`)}function k0(){return pa("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Vp}},`

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
	`)}function W0(){return pa("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${O0}
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
	`)}function Op(){return pa("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function zp(){return pa("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Hp(e){let t=new WeakMap,i=new WeakMap,r=null;function n(h,p=!1){if(h===null||h===void 0)return null;if(p)return o(h);return s(h)}function s(h){if(h&&h.isTexture){let p=h.mapping;if(p===Qs||p===$s)if(t.has(h)){let x=t.get(h).texture;return a(x,h.mapping)}else{let x=h.image;if(x&&x.height>0){let y=new Yr(x.height);return y.fromEquirectangularTexture(e,h),t.set(h,y),h.addEventListener("dispose",c),a(y.texture,h.mapping)}else return null}}return h}function o(h){if(h&&h.isTexture&&h.isPMREMTexture!==!0){let p=h.mapping,x=p===Qs||p===$s,y=p===Xi||p===_r;if(x||y){let d=i.get(h),m=d!==void 0?d.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==m){if(r===null)r=new Zr(e);return d=x?r.fromEquirectangular(h,d):r.fromCubemap(h,d),d.texture.pmremVersion=h.pmremVersion,i.set(h,d),d.texture}else if(d!==void 0)return d.texture;else{let b=h.image;if(x&&b&&b.height>0||y&&b&&l(b)){if(r===null)r=new Zr(e);return d=x?r.fromEquirectangular(h):r.fromCubemap(h),d.texture.pmremVersion=h.pmremVersion,i.set(h,d),h.addEventListener("dispose",f),d.texture}else return null}}}return h}function a(h,p){if(p===Qs)h.mapping=Xi;else if(p===$s)h.mapping=_r;return h}function l(h){let p=0,x=6;for(let y=0;y<x;y++)if(h[y]!==void 0)p++;return p===x}function c(h){let p=h.target;p.removeEventListener("dispose",c);let x=t.get(p);if(x!==void 0)t.delete(p),x.dispose()}function f(h){let p=h.target;p.removeEventListener("dispose",f);let x=i.get(p);if(x!==void 0)i.delete(p),x.dispose()}function u(){if(t=new WeakMap,i=new WeakMap,r!==null)r.dispose(),r=null}return{get:n,dispose:u}}function kp(e){let t={};function i(r){if(t[r]!==void 0)return t[r];let n=e.getExtension(r);return t[r]=n,n}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){let n=i(r);if(n===null)Yi("WebGLRenderer: "+r+" extension not supported.");return n}}}function Wp(e,t,i,r){let n={},s=new WeakMap,o=new FinalizationRegistry((x)=>delete n[x]);function a(x){l(x.target)}function l(x){if(x.index!==null)t.remove(x.index);for(let d in x.attributes)t.remove(x.attributes[d]);x.removeEventListener("dispose",a),delete n[x.id],o.unregister(x);let y=s.get(x);if(y)t.remove(y),s.delete(x);if(r.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0)delete x._maxInstanceCount;i.memory.geometries--}function c(x,y){if(n[y.id]!==void 0)return y;return y.addEventListener("dispose",a),n[y.id]=new WeakRef(y),o.register(y,y.id,y),i.memory.geometries++,y}function f(x){let y=x.attributes;for(let d in y)t.update(y[d],e.ARRAY_BUFFER)}function u(x){let y=x.index,d=x.attributes.position,m=0;if(d===void 0)return;let b=y!==null?y.array.length:d.array.length/3-1,M=new(d.count>=65535?Fo:Uo)(Math.ceil(b/3)*6,1),I=M.array;if(y!==null){let g=y.array;m=y.version;for(let S=0,N=0;S<b;S+=3){let W=g[S+0],U=g[S+1],X=g[S+2];I[N++]=W,I[N++]=U,I[N++]=U,I[N++]=X,I[N++]=X,I[N++]=W}}else{m=d.version;for(let g=0,S=0;g<b;g+=3){let N=g+0,W=g+1,U=g+2;I[S++]=N,I[S++]=W,I[S++]=W,I[S++]=U,I[S++]=U,I[S++]=N}}M.version=m;let L=s.get(x);if(L)t.remove(L);s.set(x,M)}function h(x){let y=s.get(x);if(y){let d=x.index;if(d!==null){if(y.version<d.version)u(x)}}else u(x);return s.get(x)}function p(){for(let x in n){let y=n[x].deref();if(y!==void 0)l(y)}}return{get:c,update:f,getWireframeAttribute:h,dispose:p}}function Xp(e,t,i){let r;function n(u){r=u}let s,o;function a(u){s=u.type,o=u.bytesPerElement}function l(u,h){e.drawElements(r,h,s,u*o),i.update(h,r,1)}function c(u,h,p){if(p===0)return;e.drawElementsInstanced(r,h,s,u*o,p),i.update(h,r,p)}function f(u,h,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,h,0,s,u,0,p);let y=0;for(let d=0;d<p;d++)y+=h[d];i.update(y,r,1)}this.setMode=n,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=f}function qp(e){let t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(s,o,a){switch(i.calls++,o){case e.TRIANGLES:i.triangles+=a*(s/3);break;case e.LINES:i.lines+=a*(s/2);break;case e.LINE_STRIP:i.lines+=a*(s-1);break;case e.LINE_LOOP:i.lines+=a*s;break;case e.POINTS:i.points+=a*s;break;default:Ge("WebGLInfo: Unknown draw mode:",o);break}}function n(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:n,update:r}}function Yp(e,t,i){let r=new WeakMap,n=new St;function s(o,a,l){let c=o.morphTargetInfluences,f=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=f!==void 0?f.length:0,h=r.get(a);if(h===void 0||h.count!==u){let N=function(){g.dispose(),r.delete(a),a.removeEventListener("dispose",N)};if(h!==void 0)h.texture.dispose();let p=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,y=a.morphAttributes.color!==void 0,d=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],b=a.morphAttributes.color||[],E=0;if(p===!0)E=1;if(x===!0)E=2;if(y===!0)E=3;let M=a.attributes.position.count*E,I=1;if(M>t.maxTextureSize)I=Math.ceil(M/t.maxTextureSize),M=t.maxTextureSize;let L=new Float32Array(M*I*4*u),g=new fn(L,M,I,u);g.type=Jt,g.needsUpdate=!0;let S=E*4;for(let W=0;W<u;W++){let U=d[W],X=m[W],ne=b[W],C=M*I*4*W;for(let Q=0;Q<U.count;Q++){let ie=Q*S;if(p===!0)n.fromBufferAttribute(U,Q),L[C+ie+0]=n.x,L[C+ie+1]=n.y,L[C+ie+2]=n.z,L[C+ie+3]=0;if(x===!0)n.fromBufferAttribute(X,Q),L[C+ie+4]=n.x,L[C+ie+5]=n.y,L[C+ie+6]=n.z,L[C+ie+7]=0;if(y===!0)n.fromBufferAttribute(ne,Q),L[C+ie+8]=n.x,L[C+ie+9]=n.y,L[C+ie+10]=n.z,L[C+ie+11]=ne.itemSize===4?n.w:1}}h={count:u,texture:g,size:new J(M,I)},r.set(a,h),a.addEventListener("dispose",N)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(e,"morphTexture",o.morphTexture,i);else{let p=0;for(let y=0;y<c.length;y++)p+=c[y];let x=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(e,"morphTargetBaseInfluence",x),l.getUniforms().setValue(e,"morphTargetInfluences",c)}l.getUniforms().setValue(e,"morphTargetsTexture",h.texture,i),l.getUniforms().setValue(e,"morphTargetsTextureSize",h.size)}return{update:s}}function Zp(e,t,i,r,n){let s=new WeakMap;function o(c){let f=n.render.frame,u=c.geometry,h=t.get(c,u);if(s.get(h)!==f)t.update(h),s.set(h,f);if(c.isInstancedMesh){if(c.hasEventListener("dispose",l)===!1)c.addEventListener("dispose",l);if(s.get(c)!==f){if(i.update(c.instanceMatrix,e.ARRAY_BUFFER),c.instanceColor!==null)i.update(c.instanceColor,e.ARRAY_BUFFER);s.set(c,f)}}if(c.isSkinnedMesh){let p=c.skeleton;if(s.get(p)!==f)p.update(),s.set(p,f)}return h}function a(){s=new WeakMap}function l(c){let f=c.target;if(f.removeEventListener("dispose",l),r.releaseStatesOfObject(f),i.remove(f.instanceMatrix),f.instanceColor!==null)i.remove(f.instanceColor)}return{update:o,dispose:a}}var X0={[Un]:"LINEAR_TONE_MAPPING",[Fn]:"REINHARD_TONE_MAPPING",[Bn]:"CINEON_TONE_MAPPING",[Nr]:"ACES_FILMIC_TONE_MAPPING",[zn]:"AGX_TONE_MAPPING",[Gn]:"NEUTRAL_TONE_MAPPING",[On]:"CUSTOM_TONE_MAPPING"};function Jp(e,t,i,r,n,s){let o=new Rt(t,i,{type:e,depthBuffer:n,stencilBuffer:s,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=null,f=new Ye;f.setAttribute("position",new Ve([-1,3,0,-1,-1,0,3,-1,0],3)),f.setAttribute("uv",new Ve([0,2,0,0,2,0],2));let u=new wn({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),h=new rt(f,u),p=new Rr(-1,1,1,-1,0,1),x=null,y=null,d=!1,m,b=null,E=[],M=!1;this.setSize=function(I,L){if(o.setSize(I,L),a!==null)a.setSize(I,L);if(l!==null)l.setSize(I,L);for(let g=0;g<E.length;g++){let S=E[g];if(S.setSize)S.setSize(I,L)}},this.setEffects=function(I){E=I,M=E.length>0&&E[0].isRenderPass===!0;let{width:L,height:g}=o;if(E.length>0&&a===null)a=new Rt(L,g,{type:Pt,depthBuffer:!1,stencilBuffer:!1}),l=new Rt(L,g,{type:Pt,depthBuffer:!1,stencilBuffer:!1});let S=n===!0&&E.some((N)=>N.needsDepthTexture===!0);if(S!==(o.depthTexture!==null)){if(S===!0&&c===null){if(c=new Oi(L,g),s===!0)c.format=Ni,c.type=tr}o.dispose(),o.depthTexture=S?c:null,o.resolveDepthBuffer=S,o.storeMultisampledDepthBuffer=S}for(let N=0;N<E.length;N++){let W=E[N];if(W.setSize)W.setSize(L,g);if(S&&W.needsDepthTexture===!0&&W.setDepthTexture)W.setDepthTexture(c)}},this.begin=function(I,L){if(d)return!1;if(I.toneMapping===Di&&E.length===0)return!1;if(b=L,L!==null){let{width:g,height:S}=L;if(o.width!==g||o.height!==S)this.setSize(g,S)}if(M===!1)I.setRenderTarget(o);return m=I.toneMapping,I.toneMapping=Di,!0},this.hasRenderPass=function(){return M},this.end=function(I,L){I.toneMapping=m,d=!0;let g=o,S=a;for(let N=0;N<E.length;N++){let W=E[N];if(W.enabled===!1)continue;if(W.render(I,S,g,L),W.needsSwap!==!1)g=S,S=S===a?l:a}if(x!==I.outputColorSpace||y!==I.toneMapping){if(x=I.outputColorSpace,y=I.toneMapping,u.defines={},ht.getTransfer(x)===_t)u.defines.SRGB_TRANSFER="";let N=X0[y];if(N)u.defines[N]="";u.needsUpdate=!0}u.uniforms.tDiffuse.value=g.texture,I.setRenderTarget(b),I.render(h,p),b=null,d=!1},this.isCompositing=function(){return d},this.dispose=function(){if(o.dispose(),a!==null)a.dispose();if(l!==null)l.dispose();f.dispose(),u.dispose()}}var im=new Tt,rm=new Oi(1,1),nm=new Ts(1),sm=new fn,om=new ns,am=new Gr,Kp=[],Qp=[],$p=new Float32Array(16),jp=new Float32Array(9),em=new Float32Array(4);function Ls(e,t,i){let r=e[0];if(r<=0||r>0)return e;let n=t*i,s=Kp[n];if(s===void 0)s=new Float32Array(n),Kp[n]=s;if(t!==0){r.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=i,e[o].toArray(s,a)}return s}function ni(e,t){if(e.length!==t.length)return!1;for(let i=0,r=e.length;i<r;i++)if(e[i]!==t[i])return!1;return!0}function si(e,t){for(let i=0,r=t.length;i<r;i++)e[i]=t[i]}function Gl(e,t){let i=Qp[t];if(i===void 0)i=new Int32Array(t),Qp[t]=i;for(let r=0;r!==t;++r)i[r]=e.allocateTextureUnit();return i}function q0(e,t){let i=this.cache;if(i[0]===t)return;e.uniform1f(this.addr,t),i[0]=t}function Y0(e,t){let i=this.cache;if(t.x!==void 0){if(i[0]!==t.x||i[1]!==t.y)e.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y}else{if(ni(i,t))return;e.uniform2fv(this.addr,t),si(i,t)}}function Z0(e,t){let i=this.cache;if(t.x!==void 0){if(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)e.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z}else if(t.r!==void 0){if(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)e.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b}else{if(ni(i,t))return;e.uniform3fv(this.addr,t),si(i,t)}}function J0(e,t){let i=this.cache;if(t.x!==void 0){if(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)e.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w}else{if(ni(i,t))return;e.uniform4fv(this.addr,t),si(i,t)}}function K0(e,t){let i=this.cache,r=t.elements;if(r===void 0){if(ni(i,t))return;e.uniformMatrix2fv(this.addr,!1,t),si(i,t)}else{if(ni(i,r))return;em.set(r),e.uniformMatrix2fv(this.addr,!1,em),si(i,r)}}function Q0(e,t){let i=this.cache,r=t.elements;if(r===void 0){if(ni(i,t))return;e.uniformMatrix3fv(this.addr,!1,t),si(i,t)}else{if(ni(i,r))return;jp.set(r),e.uniformMatrix3fv(this.addr,!1,jp),si(i,r)}}function $0(e,t){let i=this.cache,r=t.elements;if(r===void 0){if(ni(i,t))return;e.uniformMatrix4fv(this.addr,!1,t),si(i,t)}else{if(ni(i,r))return;$p.set(r),e.uniformMatrix4fv(this.addr,!1,$p),si(i,r)}}function j0(e,t){let i=this.cache;if(i[0]===t)return;e.uniform1i(this.addr,t),i[0]=t}function ex(e,t){let i=this.cache;if(t.x!==void 0){if(i[0]!==t.x||i[1]!==t.y)e.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y}else{if(ni(i,t))return;e.uniform2iv(this.addr,t),si(i,t)}}function tx(e,t){let i=this.cache;if(t.x!==void 0){if(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)e.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z}else{if(ni(i,t))return;e.uniform3iv(this.addr,t),si(i,t)}}function ix(e,t){let i=this.cache;if(t.x!==void 0){if(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)e.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w}else{if(ni(i,t))return;e.uniform4iv(this.addr,t),si(i,t)}}function rx(e,t){let i=this.cache;if(i[0]===t)return;e.uniform1ui(this.addr,t),i[0]=t}function nx(e,t){let i=this.cache;if(t.x!==void 0){if(i[0]!==t.x||i[1]!==t.y)e.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y}else{if(ni(i,t))return;e.uniform2uiv(this.addr,t),si(i,t)}}function sx(e,t){let i=this.cache;if(t.x!==void 0){if(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)e.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z}else{if(ni(i,t))return;e.uniform3uiv(this.addr,t),si(i,t)}}function ox(e,t){let i=this.cache;if(t.x!==void 0){if(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w}else{if(ni(i,t))return;e.uniform4uiv(this.addr,t),si(i,t)}}function Vl(e){if(e.version===0)e.compareFunction=Ha,e.needsUpdate=!0;return e}function ax(e,t,i){let r=this.cache,n=i.allocateTextureUnit();if(r[0]!==n)e.uniform1i(this.addr,n),r[0]=n;let s;if(this.type===e.SAMPLER_2D_SHADOW)s=Vl(rm);else s=im;i.setTexture2D(t||s,n)}function lx(e,t,i){let r=this.cache,n=i.allocateTextureUnit();if(r[0]!==n)e.uniform1i(this.addr,n),r[0]=n;i.setTexture3D(t||om,n)}function cx(e,t,i){let r=this.cache,n=i.allocateTextureUnit();if(r[0]!==n)e.uniform1i(this.addr,n),r[0]=n;let s;if(this.type===e.SAMPLER_CUBE_SHADOW)s=Vl(nm);else s=am;i.setTextureCube(t||s,n)}function hx(e,t,i){let r=this.cache,n=i.allocateTextureUnit();if(r[0]!==n)e.uniform1i(this.addr,n),r[0]=n;i.setTexture2DArray(t||sm,n)}function ux(e){switch(e){case 5126:return q0;case 35664:return Y0;case 35665:return Z0;case 35666:return J0;case 35674:return K0;case 35675:return Q0;case 35676:return $0;case 5124:case 35670:return j0;case 35667:case 35671:return ex;case 35668:case 35672:return tx;case 35669:case 35673:return ix;case 5125:return rx;case 36294:return nx;case 36295:return sx;case 36296:return ox;case 35678:case 36198:case 36298:case 36306:case 35682:return ax;case 35679:case 36299:case 36307:return lx;case 35680:case 36300:case 36308:case 36293:return cx;case 36289:case 36303:case 36311:case 36292:return hx}}function fx(e,t){e.uniform1fv(this.addr,t)}function dx(e,t){let i=Ls(t,this.size,2);e.uniform2fv(this.addr,i)}function px(e,t){let i=Ls(t,this.size,3);e.uniform3fv(this.addr,i)}function mx(e,t){let i=Ls(t,this.size,4);e.uniform4fv(this.addr,i)}function gx(e,t){let i=Ls(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,i)}function xx(e,t){let i=Ls(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,i)}function _x(e,t){let i=Ls(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,i)}function vx(e,t){e.uniform1iv(this.addr,t)}function yx(e,t){e.uniform2iv(this.addr,t)}function Mx(e,t){e.uniform3iv(this.addr,t)}function Sx(e,t){e.uniform4iv(this.addr,t)}function bx(e,t){e.uniform1uiv(this.addr,t)}function Tx(e,t){e.uniform2uiv(this.addr,t)}function Ex(e,t){e.uniform3uiv(this.addr,t)}function wx(e,t){e.uniform4uiv(this.addr,t)}function Ax(e,t,i){let r=this.cache,n=t.length,s=Gl(i,n);if(!ni(r,s))e.uniform1iv(this.addr,s),si(r,s);let o;if(this.type===e.SAMPLER_2D_SHADOW)o=Vl(rm);else o=im;for(let a=0;a!==n;++a)i.setTexture2D(t[a]||o,s[a])}function Rx(e,t,i){let r=this.cache,n=t.length,s=Gl(i,n);if(!ni(r,s))e.uniform1iv(this.addr,s),si(r,s);for(let o=0;o!==n;++o)i.setTexture3D(t[o]||om,s[o])}function Cx(e,t,i){let r=this.cache,n=t.length,s=Gl(i,n);if(!ni(r,s))e.uniform1iv(this.addr,s),si(r,s);let o;if(this.type===e.SAMPLER_CUBE_SHADOW)o=Vl(nm);else o=am;for(let a=0;a!==n;++a)i.setTextureCube(t[a]||o,s[a])}function Px(e,t,i){let r=this.cache,n=t.length,s=Gl(i,n);if(!ni(r,s))e.uniform1iv(this.addr,s),si(r,s);for(let o=0;o!==n;++o)i.setTexture2DArray(t[o]||sm,s[o])}function Ix(e){switch(e){case 5126:return fx;case 35664:return dx;case 35665:return px;case 35666:return mx;case 35674:return gx;case 35675:return xx;case 35676:return _x;case 5124:case 35670:return vx;case 35667:case 35671:return yx;case 35668:case 35672:return Mx;case 35669:case 35673:return Sx;case 5125:return bx;case 36294:return Tx;case 36295:return Ex;case 36296:return wx;case 35678:case 36198:case 36298:case 36306:case 35682:return Ax;case 35679:case 36299:case 36307:return Rx;case 35680:case 36300:case 36308:case 36293:return Cx;case 36289:case 36303:case 36311:case 36292:return Px}}class lm{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=ux(t.type)}}class cm{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Ix(t.type)}}class hm{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let r=this.seq;for(let n=0,s=r.length;n!==s;++n){let o=r[n];o.setValue(e,t[o.id],i)}}}var Jc=/(\w+)(\])?(\[|\.)?/g;function tm(e,t){e.seq.push(t),e.map[t.id]=t}function Lx(e,t,i){let r=e.name,n=r.length;Jc.lastIndex=0;while(!0){let s=Jc.exec(r),o=Jc.lastIndex,a=s[1],l=s[2]==="]",c=s[3];if(l)a=a|0;if(c===void 0||c==="["&&o+2===n){tm(i,c===void 0?new lm(a,e,t):new cm(a,e,t));break}else{let u=i.map[a];if(u===void 0)u=new hm(a),tm(i,u);i=u}}}class In{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let o=e.getActiveUniform(t,s),a=e.getUniformLocation(t,o.name);Lx(o,a,this)}let r=[],n=[];for(let s of this.seq)if(s.type===e.SAMPLER_2D_SHADOW||s.type===e.SAMPLER_CUBE_SHADOW||s.type===e.SAMPLER_2D_ARRAY_SHADOW)r.push(s);else n.push(s);if(r.length>0)this.seq=r.concat(n)}setValue(e,t,i,r){let n=this.map[t];if(n!==void 0)n.setValue(e,i,r)}setOptional(e,t,i){let r=t[i];if(r!==void 0)this.setValue(e,i,r)}static upload(e,t,i,r){for(let n=0,s=t.length;n!==s;++n){let o=t[n],a=i[o.id];if(a.needsUpdate!==!1)o.setValue(e,a.value,r)}}static seqWithValue(e,t){let i=[];for(let r=0,n=e.length;r!==n;++r){let s=e[r];if(s.id in t)i.push(s)}return i}}function Kc(e,t,i){let r=e.createShader(t);return e.shaderSource(r,i),e.compileShader(r),r}var Dx=37297,Nx=0;function Ux(e,t){let i=e.split(`
`),r=[],n=Math.max(t-6,0),s=Math.min(t+6,i.length);for(let o=n;o<s;o++){let a=o+1;r.push(`${a===t?">":" "} ${a}: ${i[o]}`)}return r.join(`
`)}var um=new et;function Fx(e){ht._getMatrix(um,ht.workingColorSpace,e);let t=`mat3( ${um.elements.map((i)=>i.toFixed(4))} )`;switch(ht.getTransfer(e)){case an:return[t,"LinearTransferOETF"];case _t:return[t,"sRGBTransferOETF"];default:return Te("WebGLProgram: Unsupported color space: ",e),[t,"LinearTransferOETF"]}}function fm(e,t,i){let r=e.getShaderParameter(t,e.COMPILE_STATUS),s=(e.getShaderInfoLog(t)||"").trim();if(r&&s==="")return"";let o=/ERROR: 0:(\d+)/.exec(s);if(o){let a=parseInt(o[1]);return i.toUpperCase()+`

`+s+`

`+Ux(e.getShaderSource(t),a)}else return s}function Bx(e,t){let i=Fx(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${i[1]}( vec4( ${i[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var Ox={[Un]:"Linear",[Fn]:"Reinhard",[Bn]:"Cineon",[Nr]:"ACESFilmic",[zn]:"AgX",[Gn]:"Neutral",[On]:"Custom"};function zx(e,t){let i=Ox[t];if(i===void 0)return Te("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+e+"( vec3 color ) { return LinearToneMapping( color ); }";return"vec3 "+e+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}var Hl=new R;function Gx(){ht.getLuminanceCoefficients(Hl);let e=Hl.x.toFixed(4),t=Hl.y.toFixed(4),i=Hl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${t}, ${i} );`,"\treturn dot( weights, rgb );","}"].join(`
`)}function Vx(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ma).join(`
`)}function Hx(e){let t=[];for(let i in e){let r=e[i];if(r===!1)continue;t.push("#define "+i+" "+r)}return t.join(`
`)}function kx(e,t){let i={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let n=0;n<r;n++){let s=e.getActiveAttrib(t,n),o=s.name,a=1;if(s.type===e.FLOAT_MAT2)a=2;if(s.type===e.FLOAT_MAT3)a=3;if(s.type===e.FLOAT_MAT4)a=4;i[o]={type:s.type,location:e.getAttribLocation(t,o),locationSize:a}}return i}function ma(e){return e!==""}function dm(e,t){let i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function pm(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Wx=/^[ \t]*#include +<([\w\d./]+)>/gm;function Qc(e){return e.replace(Wx,Xx)}function Xx(e,t){let i=pt[t];if(i===void 0)throw Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return Qc(i)}var qx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function mm(e){return e.replace(qx,Yx)}function Yx(e,t,i,r){let n="";for(let s=parseInt(t);s<parseInt(i);s++)n+=r.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return n}function gm(e){let t=`precision ${e.precision} float;
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
#define LOW_PRECISION`;return t}var Zx={[Nn]:"SHADOWMAP_TYPE_PCF",[jr]:"SHADOWMAP_TYPE_VSM"};function Jx(e){return Zx[e.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Kx={[_r]:"ENVMAP_MODE_REFRACTION"};function Qx(e){if(e.envMap===!1)return"ENVMAP_MODE_REFLECTION";return Kx[e.envMapMode]||"ENVMAP_MODE_REFLECTION"}var $x={[en]:"ENVMAP_BLENDING_MULTIPLY",[Ih]:"ENVMAP_BLENDING_MIX",[Lh]:"ENVMAP_BLENDING_ADD"};function jx(e){if(e.envMap===!1)return"ENVMAP_BLENDING_NONE";return $x[e.combine]||"ENVMAP_BLENDING_NONE"}function xm(e,t,i,r){let n=e.getContext(),{defines:s,vertexShader:o,fragmentShader:a}=i,l=Jx(i),c=i.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",f=Qx(i),u=jx(i),h=Vx(i),p=Hx(s),x=n.createProgram(),y,d,m=i.glslVersion?"#version "+i.glslVersion+`
`:"";if(i.isRawShaderMaterial){if(y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,p].filter(ma).join(`
`),y.length>0)y+=`
`;if(d=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,p].filter(ma).join(`
`),d.length>0)d+=`
`}else y=[gm(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,p,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+f:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+i.diffuseRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexNormals?"#define HAS_NORMAL":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+l:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","\tattribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","\tattribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","\tuniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","\tattribute vec2 uv1;","#endif","#ifdef USE_UV2","\tattribute vec2 uv2;","#endif","#ifdef USE_UV3","\tattribute vec2 uv3;","#endif","#ifdef USE_TANGENT","\tattribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","\tattribute vec4 color;","#elif defined( USE_COLOR )","\tattribute vec3 color;","#endif","#ifdef USE_SKINNING","\tattribute vec4 skinIndex;","\tattribute vec4 skinWeight;","#endif",`
`].filter(ma).join(`
`),d=[gm(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,p,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+c:"",i.envMap?"#define "+f:"",i.envMap?"#define "+u:"",i.envMapPMREM?"#define ENVMAP_MAX_LOD "+i.envMapMaxLod+".0":"",i.envMapPMREM?"#define ENVMAP_SIZE "+i.envMapSize+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",i.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.retroreflection?"#define USE_RETROREFLECTION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+l:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Di?"#define TONE_MAPPING":"",i.toneMapping!==Di?pt.tonemapping_pars_fragment:"",i.toneMapping!==Di?zx("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",pt.colorspace_pars_fragment,Bx("linearToOutputTexel",i.outputColorSpace),Gx(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(ma).join(`
`);if(o=Qc(o),o=dm(o,i),o=pm(o,i),a=Qc(a),a=dm(a,i),a=pm(a,i),o=mm(o),a=mm(a),i.isRawShaderMaterial!==!0)m=`#version 300 es
`,y=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,d=["#define varying in",i.glslVersion===jl?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===jl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d;let b=m+y+o,E=m+d+a,M=Kc(n,n.VERTEX_SHADER,b),I=Kc(n,n.FRAGMENT_SHADER,E);if(n.attachShader(x,M),n.attachShader(x,I),i.index0AttributeName!==void 0)n.bindAttribLocation(x,0,i.index0AttributeName);else if(i.hasPositionAttribute===!0)n.bindAttribLocation(x,0,"position");n.linkProgram(x);function L(W){if(e.debug.checkShaderErrors){let U=n.getProgramInfoLog(x)||"",X=n.getShaderInfoLog(M)||"",ne=n.getShaderInfoLog(I)||"",C=U.trim(),Q=X.trim(),ie=ne.trim(),H=!0,_e=!0;if(n.getProgramParameter(x,n.LINK_STATUS)===!1)if(H=!1,typeof e.debug.onShaderError==="function")e.debug.onShaderError(n,x,M,I);else{let j=fm(n,M,"vertex"),se=fm(n,I,"fragment");Ge("WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(x,n.VALIDATE_STATUS)+`

Material Name: `+W.name+`
Material Type: `+W.type+`

Program Info Log: `+C+`
`+j+`
`+se)}else if(C!=="")Te("WebGLProgram: Program Info Log:",C);else if(Q===""||ie==="")_e=!1;if(_e)W.diagnostics={runnable:H,programLog:C,vertexShader:{log:Q,prefix:y},fragmentShader:{log:ie,prefix:d}}}n.deleteShader(M),n.deleteShader(I),g=new In(n,x),S=kx(n,x)}let g;this.getUniforms=function(){if(g===void 0)L(this);return g};let S;this.getAttributes=function(){if(S===void 0)L(this);return S};let N=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){if(N===!1)N=n.getProgramParameter(x,Dx);return N},this.destroy=function(){r.releaseStatesOfProgram(this),n.deleteProgram(x),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=Nx++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=M,this.fragmentShader=I,this}var e_=0;class $c{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){let r=this._getShaderCacheForMaterial(e);if(r.has(t)===!1)r.add(t),t.usedTimes++;if(r.has(i)===!1)r.add(i),i.usedTimes++;return this}remove(e){let t=this.materialCache.get(e);for(let i of t)if(i.usedTimes--,i.usedTimes===0)this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);if(i===void 0)i=new Set,t.set(e,i);return i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);if(i===void 0)i=new _m(e),t.set(e,i);return i}}class _m{constructor(e){this.id=e_++,this.code=e,this.usedTimes=0}}function t_(e){return e===Ui||e===rn||e===nn}function vm(e,t,i,r,n,s){let o=new dn,a=new $c,l=new Set,c=[],f=new Map,u=r.logarithmicDepthBuffer,h={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(g){if(l.add(g),g===0)return"uv";return`uv${g}`}function x(g,S,N,W,U,X){let ne=W.fog,C=U.geometry,Q=g.isMeshStandardMaterial||g.isMeshLambertMaterial||g.isMeshPhongMaterial?W.environment:null,ie=g.isMeshStandardMaterial||g.isMeshLambertMaterial&&!g.envMap||g.isMeshPhongMaterial&&!g.envMap,H=t.get(g.envMap||Q,ie),_e=h[g.type],j=r.precision;if(g.precision!==null){if(j=r.getMaxPrecision(g.precision),j!==g.precision)Te("WebGLProgram.getParameters:",g.precision,"not supported, using",j,"instead.")}let se=C.morphAttributes.position||C.morphAttributes.normal||C.morphAttributes.color,de=se!==void 0?se.length:0,Fe=0;if(C.morphAttributes.position!==void 0)Fe=1;if(C.morphAttributes.normal!==void 0)Fe=2;if(C.morphAttributes.color!==void 0)Fe=3;let te,ce,He,ze;if(_e){let Re=Vi[_e];te=Re.vertexShader,ce=Re.fragmentShader}else{te=g.vertexShader,ce=g.fragmentShader;let Re=a.getVertexShaderStage(g),Et=a.getFragmentShaderStage(g);a.update(g,Re,Et),He=Re.id,ze=Et.id}let Ke=e.getRenderTarget(),Le=e.state.buffers.depth.getReversed(),yt=U.isInstancedMesh===!0,mt=U.isBatchedMesh===!0,nt=!!g.map,ot=!!g.matcap,ae=!!H,ye=ae&&H.isPMREMTexture===!0,ve=!!g.aoMap,Be=!!g.lightMap,Ie=!!g.bumpMap&&g.wireframe===!1,Ze=!!g.normalMap,Ce=!!g.displacementMap,dt=!!g.emissiveMap,gt=!!g.metalnessMap,Qe=!!g.roughnessMap,B=g.anisotropy>0,Ut=g.clearcoat>0,at=g.diffuseRoughness>0,Ft=g.dispersion>0,Ee=g.retroreflectivity>0,bt=g.iridescence>0,tt=g.sheen>0,lt=g.transmission>0,qt=B&&!!g.anisotropyMap,A=Ut&&!!g.clearcoatMap,_=Ut&&!!g.clearcoatNormalMap,G=Ut&&!!g.clearcoatRoughnessMap,fe=at&&!!g.diffuseRoughnessMap,le=bt&&!!g.iridescenceMap,me=bt&&!!g.iridescenceThicknessMap,be=tt&&!!g.sheenColorMap,K=tt&&!!g.sheenRoughnessMap,oe=!!g.specularMap,Me=!!g.specularColorMap,F=!!g.specularIntensityMap,re=lt&&!!g.transmissionMap,ee=lt&&!!g.thicknessMap,pe=!!g.gradientMap,xe=!!g.alphaMap,we=g.alphaTest>0,$e=!!g.alphaHash,qe=!!g.extensions,Ae=Di;if(g.toneMapped){if(Ke===null||Ke.isXRRenderTarget===!0)Ae=e.toneMapping}let it=ye?H.isCompressedCubeTexture?H.image[0].mipmaps:H.mipmaps:null,ut={shaderID:_e,shaderType:g.type,shaderName:g.name,vertexShader:te,fragmentShader:ce,defines:g.defines,customVertexShaderID:He,customFragmentShaderID:ze,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:j,batching:mt,batchingColor:mt&&U._colorsTexture!==null,instancing:yt,instancingColor:yt&&U.instanceColor!==null,instancingMorph:yt&&U.morphTexture!==null,outputColorSpace:Ke===null?e.outputColorSpace:Ke.isXRRenderTarget===!0?Ke.texture.colorSpace:ht.workingColorSpace,alphaToCoverage:!!g.alphaToCoverage,map:nt,matcap:ot,envMap:ae,envMapMode:ae&&H.mapping,envMapPMREM:ye,envMapMaxLod:ye?it.length-1:null,envMapSize:ye?it[0].width:null,aoMap:ve,lightMap:Be,bumpMap:Ie,normalMap:Ze,displacementMap:Ce,emissiveMap:dt,normalMapObjectSpace:Ze&&g.normalMapType===Nh,normalMapTangentSpace:Ze&&g.normalMapType===ir,packedNormalMap:Ze&&g.normalMapType===ir&&t_(g.normalMap.format),metalnessMap:gt,roughnessMap:Qe,anisotropy:B,anisotropyMap:qt,clearcoat:Ut,clearcoatMap:A,clearcoatNormalMap:_,clearcoatRoughnessMap:G,diffuseRoughness:at,diffuseRoughnessMap:fe,dispersion:Ft,retroreflection:Ee,iridescence:bt,iridescenceMap:le,iridescenceThicknessMap:me,sheen:tt,sheenColorMap:be,sheenRoughnessMap:K,specularMap:oe,specularColorMap:Me,specularIntensityMap:F,transmission:lt,transmissionMap:re,thicknessMap:ee,gradientMap:pe,opaque:g.transparent===!1&&g.blending===Ir&&g.alphaToCoverage===!1,alphaMap:xe,alphaTest:we,alphaHash:$e,combine:g.combine,mapUv:nt&&p(g.map.channel),aoMapUv:ve&&p(g.aoMap.channel),lightMapUv:Be&&p(g.lightMap.channel),bumpMapUv:Ie&&p(g.bumpMap.channel),normalMapUv:Ze&&p(g.normalMap.channel),displacementMapUv:Ce&&p(g.displacementMap.channel),emissiveMapUv:dt&&p(g.emissiveMap.channel),metalnessMapUv:gt&&p(g.metalnessMap.channel),roughnessMapUv:Qe&&p(g.roughnessMap.channel),anisotropyMapUv:qt&&p(g.anisotropyMap.channel),clearcoatMapUv:A&&p(g.clearcoatMap.channel),clearcoatNormalMapUv:_&&p(g.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:G&&p(g.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:fe&&p(g.diffuseRoughnessMap.channel),iridescenceMapUv:le&&p(g.iridescenceMap.channel),iridescenceThicknessMapUv:me&&p(g.iridescenceThicknessMap.channel),sheenColorMapUv:be&&p(g.sheenColorMap.channel),sheenRoughnessMapUv:K&&p(g.sheenRoughnessMap.channel),specularMapUv:oe&&p(g.specularMap.channel),specularColorMapUv:Me&&p(g.specularColorMap.channel),specularIntensityMapUv:F&&p(g.specularIntensityMap.channel),transmissionMapUv:re&&p(g.transmissionMap.channel),thicknessMapUv:ee&&p(g.thicknessMap.channel),alphaMapUv:xe&&p(g.alphaMap.channel),vertexTangents:!!C.attributes.tangent&&(Ze||B),vertexNormals:!!C.attributes.normal,vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!C.attributes.color&&C.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!C.attributes.uv&&(nt||xe),fog:!!ne,useFog:g.fog===!0,fogExp2:!!ne&&ne.isFogExp2,flatShading:g.wireframe===!1&&(g.flatShading===!0||C.attributes.normal===void 0&&Ze===!1&&(g.isMeshLambertMaterial||g.isMeshPhongMaterial||g.isMeshStandardMaterial||g.isMeshPhysicalMaterial)),sizeAttenuation:g.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:Le,skinning:U.isSkinnedMesh===!0,hasPositionAttribute:C.attributes.position!==void 0,morphTargets:C.morphAttributes.position!==void 0,morphNormals:C.morphAttributes.normal!==void 0,morphColors:C.morphAttributes.color!==void 0,morphTargetsCount:de,morphTextureStride:Fe,numSunLights:S.sun.length,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numSunLightShadows:S.sunShadowMap.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numLightProbeGrids:X.filter((Re)=>Re.texture!==null).length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:g.dithering,shadowMapEnabled:e.shadowMap.enabled&&N.length>0,shadowMapType:e.shadowMap.type,toneMapping:Ae,decodeVideoTexture:nt&&g.map.isVideoTexture===!0&&ht.getTransfer(g.map.colorSpace)===_t,decodeVideoTextureEmissive:dt&&g.emissiveMap.isVideoTexture===!0&&ht.getTransfer(g.emissiveMap.colorSpace)===_t,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===xi,flipSided:g.side===Ot,useDepthPacking:g.depthPacking>=0,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionClipCullDistance:qe&&g.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(qe&&g.extensions.multiDraw===!0||mt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:g.customProgramCacheKey()};return ut.vertexUv1s=l.has(1),ut.vertexUv2s=l.has(2),ut.vertexUv3s=l.has(3),l.clear(),ut}function y(g){let S=[];if(g.shaderID)S.push(g.shaderID);else S.push(g.customVertexShaderID),S.push(g.customFragmentShaderID);if(g.defines!==void 0)for(let N in g.defines)S.push(N),S.push(g.defines[N]);if(g.isRawShaderMaterial===!1)d(S,g),m(S,g),S.push(e.outputColorSpace);return S.push(g.customProgramCacheKey),S.join()}function d(g,S){g.push(S.precision),g.push(S.outputColorSpace),g.push(S.envMapMode),g.push(S.envMapPMREM),g.push(S.envMapMaxLod),g.push(S.envMapSize),g.push(S.mapUv),g.push(S.alphaMapUv),g.push(S.lightMapUv),g.push(S.aoMapUv),g.push(S.bumpMapUv),g.push(S.normalMapUv),g.push(S.displacementMapUv),g.push(S.emissiveMapUv),g.push(S.metalnessMapUv),g.push(S.roughnessMapUv),g.push(S.anisotropyMapUv),g.push(S.clearcoatMapUv),g.push(S.clearcoatNormalMapUv),g.push(S.clearcoatRoughnessMapUv),g.push(S.diffuseRoughnessMapUv),g.push(S.iridescenceMapUv),g.push(S.iridescenceThicknessMapUv),g.push(S.sheenColorMapUv),g.push(S.sheenRoughnessMapUv),g.push(S.specularMapUv),g.push(S.specularColorMapUv),g.push(S.specularIntensityMapUv),g.push(S.transmissionMapUv),g.push(S.thicknessMapUv),g.push(S.combine),g.push(S.fogExp2),g.push(S.sizeAttenuation),g.push(S.morphTargetsCount),g.push(S.numSunLights),g.push(S.numDirLights),g.push(S.numPointLights),g.push(S.numSpotLights),g.push(S.numSpotLightMaps),g.push(S.numHemiLights),g.push(S.numRectAreaLights),g.push(S.numSunLightShadows),g.push(S.numDirLightShadows),g.push(S.numPointLightShadows),g.push(S.numSpotLightShadows),g.push(S.numSpotLightShadowsWithMaps),g.push(S.numLightProbes),g.push(S.numLightProbeGrids),g.push(S.shadowMapType),g.push(S.toneMapping),g.push(S.numClippingPlanes),g.push(S.numClipIntersection),g.push(S.depthPacking)}function m(g,S){if(o.disableAll(),S.instancing)o.enable(0);if(S.instancingColor)o.enable(1);if(S.instancingMorph)o.enable(2);if(S.matcap)o.enable(3);if(S.envMap)o.enable(4);if(S.normalMapObjectSpace)o.enable(5);if(S.normalMapTangentSpace)o.enable(6);if(S.clearcoat)o.enable(7);if(S.iridescence)o.enable(8);if(S.alphaTest)o.enable(9);if(S.vertexColors)o.enable(10);if(S.vertexAlphas)o.enable(11);if(S.vertexUv1s)o.enable(12);if(S.vertexUv2s)o.enable(13);if(S.vertexUv3s)o.enable(14);if(S.vertexTangents)o.enable(15);if(S.anisotropy)o.enable(16);if(S.alphaHash)o.enable(17);if(S.batching)o.enable(18);if(S.dispersion)o.enable(19);if(S.retroreflection)o.enable(24);if(S.diffuseRoughness)o.enable(25);if(S.batchingColor)o.enable(20);if(S.gradientMap)o.enable(21);if(S.packedNormalMap)o.enable(22);if(S.vertexNormals)o.enable(23);if(g.push(o.mask),o.disableAll(),S.fog)o.enable(0);if(S.useFog)o.enable(1);if(S.flatShading)o.enable(2);if(S.logarithmicDepthBuffer)o.enable(3);if(S.reversedDepthBuffer)o.enable(4);if(S.skinning)o.enable(5);if(S.morphTargets)o.enable(6);if(S.morphNormals)o.enable(7);if(S.morphColors)o.enable(8);if(S.premultipliedAlpha)o.enable(9);if(S.shadowMapEnabled)o.enable(10);if(S.doubleSided)o.enable(11);if(S.flipSided)o.enable(12);if(S.useDepthPacking)o.enable(13);if(S.dithering)o.enable(14);if(S.transmission)o.enable(15);if(S.sheen)o.enable(16);if(S.opaque)o.enable(17);if(S.pointsUvs)o.enable(18);if(S.decodeVideoTexture)o.enable(19);if(S.decodeVideoTextureEmissive)o.enable(20);if(S.alphaToCoverage)o.enable(21);if(S.numLightProbeGrids>0)o.enable(22);if(S.hasPositionAttribute)o.enable(23);g.push(o.mask)}function b(g){let S=h[g.type],N;if(S){let W=Vi[S];N=Qi.clone(W.uniforms)}else N=g.uniforms;return N}function E(g,S){let N=f.get(S);if(N!==void 0)++N.usedTimes;else N=new xm(e,S,g,n),c.push(N),f.set(S,N);return N}function M(g){if(--g.usedTimes===0){let S=c.indexOf(g);c[S]=c[c.length-1],c.pop(),f.delete(g.cacheKey),g.destroy()}}function I(g){a.remove(g)}function L(){a.dispose()}return{getParameters:x,getProgramCacheKey:y,getUniforms:b,acquireProgram:E,releaseProgram:M,releaseShaderCache:I,programs:c,dispose:L}}function ym(){let e=new WeakMap;function t(o){return e.has(o)}function i(o){let a=e.get(o);if(a===void 0)a={},e.set(o,a);return a}function r(o){e.delete(o)}function n(o,a,l){e.get(o)[a]=l}function s(){e=new WeakMap}return{has:t,get:i,remove:r,update:n,dispose:s}}function i_(e,t){if(e.groupOrder!==t.groupOrder)return e.groupOrder-t.groupOrder;else if(e.renderOrder!==t.renderOrder)return e.renderOrder-t.renderOrder;else if(e.material.id!==t.material.id)return e.material.id-t.material.id;else if(e.materialVariant!==t.materialVariant)return e.materialVariant-t.materialVariant;else if(e.z!==t.z)return e.z-t.z;else return e.id-t.id}function Mm(e,t){if(e.groupOrder!==t.groupOrder)return e.groupOrder-t.groupOrder;else if(e.renderOrder!==t.renderOrder)return e.renderOrder-t.renderOrder;else if(e.z!==t.z)return t.z-e.z;else return e.id-t.id}function Sm(){let e=[],t=0,i=[],r=[],n=[];function s(){t=0,i.length=0,r.length=0,n.length=0}function o(h){let p=0;if(h.isInstancedMesh)p+=2;if(h.isSkinnedMesh)p+=1;return p}function a(h,p,x,y,d,m){let b=e[t];if(b===void 0)b={id:h.id,object:h,geometry:p,material:x,materialVariant:o(h),groupOrder:y,renderOrder:h.renderOrder,z:d,group:m},e[t]=b;else b.id=h.id,b.object=h,b.geometry=p,b.material=x,b.materialVariant=o(h),b.groupOrder=y,b.renderOrder=h.renderOrder,b.z=d,b.group=m;return t++,b}function l(h,p,x,y,d,m,b){if(b.reversedDepth===!0)d=-d;let E=a(h,p,x,y,d,m);if(x.transmission>0)r.push(E);else if(x.transparent===!0)n.push(E);else i.push(E)}function c(h,p,x,y,d,m){let b=a(h,p,x,y,d,m);if(x.transmission>0)r.unshift(b);else if(x.transparent===!0)n.unshift(b);else i.unshift(b)}function f(h,p){if(i.length>1)i.sort(h||i_);if(r.length>1)r.sort(p||Mm);if(n.length>1)n.sort(p||Mm)}function u(){for(let h=t,p=e.length;h<p;h++){let x=e[h];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:i,transmissive:r,transparent:n,init:s,push:l,unshift:c,finish:u,sort:f}}function bm(){let e=new WeakMap;function t(r,n){let s=e.get(r),o;if(s===void 0)o=new Sm,e.set(r,[o]);else if(n>=s.length)o=new Sm,s.push(o);else o=s[n];return o}function i(){e=new WeakMap}return{get:t,dispose:i}}function r_(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let i;switch(t.type){case"SunLight":case"DirectionalLight":i={direction:new R,color:new ge};break;case"SpotLight":i={position:new R,direction:new R,color:new ge,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new R,color:new ge,distance:0,decay:0};break;case"HemisphereLight":i={direction:new R,skyColor:new ge,groundColor:new ge};break;case"RectAreaLight":i={color:new ge,position:new R,halfWidth:new R,halfHeight:new R};break}return e[t.id]=i,i}}}function n_(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let i;switch(t.type){case"SunLight":case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new J};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new J};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new J,shadowCameraNear:1,shadowCameraFar:1000};break}return e[t.id]=i,i}}}var s_=0;function o_(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function Tm(e){let t=new r_,i=n_(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)r.probe.push(new R);let n=new R,s=new Je,o=new Je;function a(c){let f=0,u=0,h=0;for(let X=0;X<9;X++)r.probe[X].set(0,0,0);let p=0,x=0,y=0,d=0,m=0,b=0,E=0,M=0,I=0,L=0,g=0,S=0,N=0,W=0;c.sort(o_);for(let X=0,ne=c.length;X<ne;X++){let C=c[X],{color:Q,intensity:ie,distance:H}=C,_e=null;if(C.shadow&&C.shadow.map)if(C.shadow.map.texture.format===Ui)_e=C.shadow.map.texture;else _e=C.shadow.map.depthTexture||C.shadow.map.texture;if(C.isAmbientLight)f+=Q.r*ie,u+=Q.g*ie,h+=Q.b*ie;else if(C.isLightProbe){for(let j=0;j<9;j++)r.probe[j].addScaledVector(C.sh.coefficients[j],ie);W++}else if(C.isSunLight){let j=t.get(C);if(j.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let se=C.shadow,de=i.get(C);de.shadowIntensity=se.intensity,de.shadowBias=se.bias,de.shadowNormalBias=se.normalBias,de.shadowRadius=se.radius,de.shadowMapSize.copy(se.mapSize).multiply(se.getFrameExtents()),r.sunShadow[x]=de,r.sunShadowMap[x]=_e;let Fe=se.getViewportCount();for(let te=0;te<Fe;te++)r.sunShadowMatrix[y+te]=se.getMatrix(te),r.sunShadowCascade[y+te]=se._cascadeData[te];y+=Fe,x++}r.sun[p]=j,p++}else if(C.isDirectionalLight){let j=t.get(C);if(j.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let se=C.shadow,de=i.get(C);de.shadowIntensity=se.intensity,de.shadowBias=se.bias,de.shadowNormalBias=se.normalBias,de.shadowRadius=se.radius,de.shadowMapSize=se.mapSize,r.directionalShadow[d]=de,r.directionalShadowMap[d]=_e,r.directionalShadowMatrix[d]=C.shadow.matrix,I++}r.directional[d]=j,d++}else if(C.isSpotLight){let j=t.get(C);j.position.setFromMatrixPosition(C.matrixWorld),j.color.copy(Q).multiplyScalar(ie),j.distance=H,j.coneCos=Math.cos(C.angle),j.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),j.decay=C.decay,r.spot[b]=j;let se=C.shadow;if(C.map){if(r.spotLightMap[S]=C.map,S++,se.updateMatrices(C),C.castShadow)N++}if(r.spotLightMatrix[b]=se.matrix,C.castShadow){let de=i.get(C);de.shadowIntensity=se.intensity,de.shadowBias=se.bias,de.shadowNormalBias=se.normalBias,de.shadowRadius=se.radius,de.shadowMapSize=se.mapSize,r.spotShadow[b]=de,r.spotShadowMap[b]=_e,g++}b++}else if(C.isRectAreaLight){let j=t.get(C);j.color.copy(Q).multiplyScalar(ie),j.halfWidth.set(C.width*0.5,0,0),j.halfHeight.set(0,C.height*0.5,0),r.rectArea[E]=j,E++}else if(C.isPointLight){let j=t.get(C);if(j.color.copy(C.color).multiplyScalar(C.intensity),j.distance=C.distance,j.decay=C.decay,C.castShadow){let se=C.shadow,de=i.get(C);de.shadowIntensity=se.intensity,de.shadowBias=se.bias,de.shadowNormalBias=se.normalBias,de.shadowRadius=se.radius,de.shadowMapSize=se.mapSize,de.shadowCameraNear=se.camera.near,de.shadowCameraFar=se.camera.far,r.pointShadow[m]=de,r.pointShadowMap[m]=_e,r.pointShadowMatrix[m]=C.shadow.matrix,L++}r.point[m]=j,m++}else if(C.isHemisphereLight){let j=t.get(C);j.skyColor.copy(C.color).multiplyScalar(ie),j.groundColor.copy(C.groundColor).multiplyScalar(ie),r.hemi[M]=j,M++}}if(E>0)if(e.has("OES_texture_float_linear")===!0)r.rectAreaLTC1=Pe.LTC_FLOAT_1,r.rectAreaLTC2=Pe.LTC_FLOAT_2;else r.rectAreaLTC1=Pe.LTC_HALF_1,r.rectAreaLTC2=Pe.LTC_HALF_2;r.ambient[0]=f,r.ambient[1]=u,r.ambient[2]=h;let U=r.hash;if(U.sunLength!==p||U.directionalLength!==d||U.pointLength!==m||U.spotLength!==b||U.rectAreaLength!==E||U.hemiLength!==M||U.numSunShadows!==x||U.numDirectionalShadows!==I||U.numPointShadows!==L||U.numSpotShadows!==g||U.numSpotMaps!==S||U.numLightProbes!==W)r.sun.length=p,r.directional.length=d,r.spot.length=b,r.rectArea.length=E,r.point.length=m,r.hemi.length=M,r.sunShadow.length=x,r.sunShadowMap.length=x,r.sunShadowMatrix.length=y,r.sunShadowCascade.length=y,r.directionalShadow.length=I,r.directionalShadowMap.length=I,r.directionalShadowMatrix.length=I,r.pointShadow.length=L,r.pointShadowMap.length=L,r.pointShadowMatrix.length=L,r.spotShadow.length=g,r.spotShadowMap.length=g,r.spotLightMatrix.length=g+S-N,r.spotLightMap.length=S,r.numSpotLightShadowsWithMaps=N,r.numLightProbes=W,U.sunLength=p,U.directionalLength=d,U.pointLength=m,U.spotLength=b,U.rectAreaLength=E,U.hemiLength=M,U.numSunShadows=x,U.numDirectionalShadows=I,U.numPointShadows=L,U.numSpotShadows=g,U.numSpotMaps=S,U.numLightProbes=W,r.version=s_++}function l(c,f){let u=0,h=0,p=0,x=0,y=0,d=0,m=f.matrixWorldInverse;for(let b=0,E=c.length;b<E;b++){let M=c[b];if(M.isSunLight){let I=r.sun[u];I.direction.setFromMatrixPosition(M.matrixWorld),I.direction.transformDirection(m),u++}else if(M.isDirectionalLight){let I=r.directional[h];I.direction.setFromMatrixPosition(M.matrixWorld),n.setFromMatrixPosition(M.target.matrixWorld),I.direction.sub(n),I.direction.transformDirection(m),h++}else if(M.isSpotLight){let I=r.spot[x];I.position.setFromMatrixPosition(M.matrixWorld),I.position.applyMatrix4(m),I.direction.setFromMatrixPosition(M.matrixWorld),n.setFromMatrixPosition(M.target.matrixWorld),I.direction.sub(n),I.direction.transformDirection(m),x++}else if(M.isRectAreaLight){let I=r.rectArea[y];I.position.setFromMatrixPosition(M.matrixWorld),I.position.applyMatrix4(m),o.identity(),s.copy(M.matrixWorld),s.premultiply(m),o.extractRotation(s),I.halfWidth.set(M.width*0.5,0,0),I.halfHeight.set(0,M.height*0.5,0),I.halfWidth.applyMatrix4(o),I.halfHeight.applyMatrix4(o),y++}else if(M.isPointLight){let I=r.point[p];I.position.setFromMatrixPosition(M.matrixWorld),I.position.applyMatrix4(m),p++}else if(M.isHemisphereLight){let I=r.hemi[d];I.direction.setFromMatrixPosition(M.matrixWorld),I.direction.transformDirection(m),d++}}}return{setup:a,setupView:l,state:r}}function Em(e){let t=new Tm(e),i=[],r=[],n=[];function s(u){f.camera=u,i.length=0,r.length=0,n.length=0}function o(u){if(u.isLightProbeGrid)n.push(u);else i.push(u)}function a(u){r.push(u)}function l(){t.setup(i),n.sort((u,h)=>u.priority-h.priority||u.id-h.id)}function c(u){t.setupView(i,u)}let f={lightsArray:i,shadowsArray:r,lightProbeGridArray:n,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:f,setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function wm(e){let t=new WeakMap;function i(n,s=0){let o=t.get(n),a;if(o===void 0)a=new Em(e),t.set(n,[a]);else if(s>=o.length)a=new Em(e),o.push(a);else a=o[s];return a}function r(){t=new WeakMap}return{get:i,dispose:r}}var Am=`
void main() {

	gl_Position = vec4( position, 1.0 );

}
`,Rm=`
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
`;var l_=[new R(1,0,0),new R(-1,0,0),new R(0,1,0),new R(0,-1,0),new R(0,0,1),new R(0,0,-1)],c_=[new R(0,-1,0),new R(0,-1,0),new R(0,0,1),new R(0,0,-1),new R(0,-1,0),new R(0,-1,0)],Cm=new Je,ga=new R,jc=new R;function Pm(e,t,i){let r=new Ki,n=new J,s=new J,o=new St,a=new aa,l=new la,c={},f=i.maxTextureSize,u={[ki]:Ot,[Ot]:ki,[xi]:xi},h=new Ct({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new J},radius:{value:4}},vertexShader:Am,fragmentShader:Rm}),p=h.clone();p.defines.HORIZONTAL_PASS=1;let x=new Ye;x.setAttribute("position",new Kt(new Float32Array([-1,-1,0.5,3,-1,0.5,-1,3,0.5]),3));let y=new rt(x,h),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Nn;let m=this.type;this.render=function(L,g,S){if(d.enabled===!1)return;if(d.autoUpdate===!1&&d.needsUpdate===!1)return;if(L.length===0)return;if(this.type===fh)Te("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Nn;let N=e.getRenderTarget(),W=e.getActiveCubeFace(),U=e.getActiveMipmapLevel(),X=e.state;if(X.setBlending(Wi),X.buffers.depth.getReversed()===!0)X.buffers.color.setClear(0,0,0,0);else X.buffers.color.setClear(1,1,1,1);X.buffers.depth.setTest(!0),X.setScissorTest(!1);let ne=m!==this.type;if(ne)g.traverse(function(C){if(C.material)if(Array.isArray(C.material))C.material.forEach((Q)=>Q.needsUpdate=!0);else C.material.needsUpdate=!0});for(let C=0,Q=L.length;C<Q;C++){let ie=L[C],H=ie.shadow;if(H===void 0){Te("WebGLShadowMap:",ie,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;n.copy(H.mapSize);let _e=H.getFrameExtents();if(n.multiply(_e),s.copy(H.mapSize),n.x>f||n.y>f){if(n.x>f)s.x=Math.floor(f/_e.x),n.x=s.x*_e.x,H.mapSize.x=s.x;if(n.y>f)s.y=Math.floor(f/_e.y),n.y=s.y*_e.y,H.mapSize.y=s.y}let j=e.state.buffers.depth.getReversed();if(H.camera._reversedDepth=j,H.map===null||ne===!0){if(H.map!==null){if(H.map.depthTexture!==null)H.map.depthTexture.dispose(),H.map.depthTexture=null;H.map.dispose()}if(this.type===jr){if(ie.isPointLight){Te("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new Rt(n.x,n.y,{format:Ui,type:Pt,minFilter:Gt,magFilter:Gt,generateMipmaps:!1}),H.map.texture.name=ie.name+".shadowMap",H.map.depthTexture=new Oi(n.x,n.y,Jt),H.map.depthTexture.name=ie.name+".shadowMapDepth",H.map.depthTexture.format=Pi,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Dt,H.map.depthTexture.magFilter=Dt}else{if(ie.isPointLight)H.map=new Yr(n.x),H.map.depthTexture=new Ts(n.x,jt);else H.map=new Rt(n.x,n.y),H.map.depthTexture=new Oi(n.x,n.y,jt);if(H.map.depthTexture.name=ie.name+".shadowMap",H.map.depthTexture.format=Pi,this.type===Nn)H.map.depthTexture.compareFunction=j?Va:Ga,H.map.depthTexture.minFilter=Gt,H.map.depthTexture.magFilter=Gt;else H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Dt,H.map.depthTexture.magFilter=Dt}H.camera.updateProjectionMatrix()}if(H.map.isWebGLCubeRenderTarget!==!0&&(H.map.width!==n.x||H.map.height!==n.y))H.map.setSize(n.x,n.y);let se=H.map.isWebGLCubeRenderTarget?6:H.getViewportCount();if(ie.isPointLight!==!0)H.updateMatrices(ie,S);let de=(H.camera.layers.mask&4294967294)!==0?H.camera.layers:S.layers;for(let Fe=0;Fe<se;Fe++){let te=H.getCamera(Fe);if(ie.isPointLight){let{camera:ce,matrix:He}=H,ze=ie.distance||ce.far;if(ze!==ce.far)ce.far=ze,ce.updateProjectionMatrix();ga.setFromMatrixPosition(ie.matrixWorld),ce.position.copy(ga),jc.copy(ce.position),jc.add(l_[Fe]),ce.up.copy(c_[Fe]),ce.lookAt(jc),ce.updateMatrixWorld(),He.makeTranslation(-ga.x,-ga.y,-ga.z),Cm.multiplyMatrices(ce.projectionMatrix,ce.matrixWorldInverse),H._frustum.setFromProjectionMatrix(Cm,ce.coordinateSystem,ce.reversedDepth)}if(H.map.isWebGLCubeRenderTarget)e.setRenderTarget(H.map,Fe),e.clear();else{if(Fe===0)e.setRenderTarget(H.map),e.clear();let ce=H.getViewport(Fe);o.set(s.x*ce.x,s.y*ce.y,s.x*ce.z,s.y*ce.w),X.viewport(o)}r=H.getFrustum(Fe),M(g,S,te,ie,de,this.type)}if(H.isPointLightShadow!==!0&&this.type===jr)b(H,S);H.needsUpdate=!1}m=this.type,d.needsUpdate=!1,e.setRenderTarget(N,W,U)};function b(L,g){let S=t.update(y);if(h.defines.VSM_SAMPLES!==L.blurSamples)h.defines.VSM_SAMPLES=L.blurSamples,p.defines.VSM_SAMPLES=L.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0;if(L.mapPass===null)L.mapPass=new Rt(n.x,n.y,{format:Ui,type:Pt});else if(L.mapPass.width!==L.map.width||L.mapPass.height!==L.map.height)L.mapPass.setSize(L.map.width,L.map.height);h.uniforms.shadow_pass.value=L.map.depthTexture,h.uniforms.resolution.value.set(L.map.width,L.map.height),h.uniforms.radius.value=L.radius,e.setRenderTarget(L.mapPass),e.clear(),e.renderBufferDirect(g,null,S,h,y,null),p.uniforms.shadow_pass.value=L.mapPass.texture,p.uniforms.resolution.value.set(L.map.width,L.map.height),p.uniforms.radius.value=L.radius,e.setRenderTarget(L.map),e.clear(),e.renderBufferDirect(g,null,S,p,y,null)}function E(L,g,S,N){let W=null,U=S.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(U!==void 0)W=U;else if(W=S.isPointLight===!0?l:a,e.localClippingEnabled&&g.clipShadows===!0&&Array.isArray(g.clippingPlanes)&&g.clippingPlanes.length!==0||g.displacementMap&&g.displacementScale!==0||g.alphaMap&&g.alphaTest>0||g.map&&g.alphaTest>0||g.alphaToCoverage===!0){let X=W.uuid,ne=g.uuid,C=c[X];if(C===void 0)C={},c[X]=C;let Q=C[ne];if(Q===void 0)Q=W.clone(),C[ne]=Q,g.addEventListener("dispose",I);W=Q}if(W.visible=g.visible,W.wireframe=g.wireframe,N===jr)W.side=g.shadowSide!==null?g.shadowSide:g.side;else W.side=g.shadowSide!==null?g.shadowSide:u[g.side];if(W.alphaMap=g.alphaMap,W.alphaTest=g.alphaToCoverage===!0?0.5:g.alphaTest,W.map=g.map,W.clipShadows=g.clipShadows,W.clippingPlanes=g.clippingPlanes,W.clipIntersection=g.clipIntersection,W.displacementMap=g.displacementMap,W.displacementScale=g.displacementScale,W.displacementBias=g.displacementBias,W.wireframeLinewidth=g.wireframeLinewidth,W.linewidth=g.linewidth,S.isPointLight===!0&&W.isMeshDistanceMaterial===!0){let X=e.properties.get(W);X.light=S}return W}function M(L,g,S,N,W,U){if(L.visible===!1)return;if(L.layers.test(W)&&(L.isMesh||L.isLine||L.isPoints)){if((L.castShadow||L.receiveShadow&&U===jr)&&(!L.frustumCulled||L.intersectsFrustum(r))){L.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,L.matrixWorld);let C=t.update(L),Q=L.material;if(Array.isArray(Q)){let ie=C.groups;for(let H=0,_e=ie.length;H<_e;H++){let j=ie[H],se=Q[j.materialIndex];if(se&&se.visible){let de=E(L,se,N,U);L.onBeforeShadow(e,L,g,S,C,de,j),e.renderBufferDirect(S,null,C,de,L,j),L.onAfterShadow(e,L,g,S,C,de,j)}}}else if(Q.visible){let ie=E(L,Q,N,U);L.onBeforeShadow(e,L,g,S,C,ie,null),e.renderBufferDirect(S,null,C,ie,L,null),L.onAfterShadow(e,L,g,S,C,ie,null)}}}let ne=L.children;for(let C=0,Q=ne.length;C<Q;C++)M(ne[C],g,S,N,W,U)}function I(L){L.target.removeEventListener("dispose",I);for(let S in c){let N=c[S],W=L.target.uuid;if(W in N)N[W].dispose(),delete N[W]}}}function Im(e,t){function i(){let F=!1,re=new St,ee=null,pe=new St(0,0,0,0);return{setMask:function(xe){if(ee!==xe&&!F)e.colorMask(xe,xe,xe,xe),ee=xe},setLocked:function(xe){F=xe},setClear:function(xe,we,$e,qe,Ae){if(Ae===!0)xe*=qe,we*=qe,$e*=qe;if(re.set(xe,we,$e,qe),pe.equals(re)===!1)e.clearColor(xe,we,$e,qe),pe.copy(re)},reset:function(){F=!1,ee=null,pe.set(-1,0,0,0)}}}function r(){let F=!1,re=!1,ee=null,pe=null,xe=null;return{setReversed:function(we){if(re!==we){let $e=t.get("EXT_clip_control");if(we)$e.clipControlEXT($e.LOWER_LEFT_EXT,$e.ZERO_TO_ONE_EXT);else $e.clipControlEXT($e.LOWER_LEFT_EXT,$e.NEGATIVE_ONE_TO_ONE_EXT);re=we;let qe=xe;xe=null,this.setClear(qe)}},getReversed:function(){return re},setTest:function(we){if(we)Le(e.DEPTH_TEST);else yt(e.DEPTH_TEST)},setMask:function(we){if(ee!==we&&!F)e.depthMask(we),ee=we},setFunc:function(we){if(re)we=Xh[we];if(pe!==we){switch(we){case Ws:e.depthFunc(e.NEVER);break;case Xs:e.depthFunc(e.ALWAYS);break;case qs:e.depthFunc(e.LESS);break;case Dr:e.depthFunc(e.LEQUAL);break;case Ys:e.depthFunc(e.EQUAL);break;case Zs:e.depthFunc(e.GEQUAL);break;case Js:e.depthFunc(e.GREATER);break;case Ks:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}pe=we}},setLocked:function(we){F=we},setClear:function(we){if(xe!==we){if(xe=we,re)we=1-we;e.clearDepth(we)}},reset:function(){F=!1,ee=null,pe=null,xe=null,re=!1}}}function n(){let F=!1,re=null,ee=null,pe=null,xe=null,we=null,$e=null,qe=null,Ae=null;return{setTest:function(it){if(!F)if(it)Le(e.STENCIL_TEST);else yt(e.STENCIL_TEST)},setMask:function(it){if(re!==it&&!F)e.stencilMask(it),re=it},setFunc:function(it,ut,Re){if(ee!==it||pe!==ut||xe!==Re)e.stencilFunc(it,ut,Re),ee=it,pe=ut,xe=Re},setOp:function(it,ut,Re){if(we!==it||$e!==ut||qe!==Re)e.stencilOp(it,ut,Re),we=it,$e=ut,qe=Re},setLocked:function(it){F=it},setClear:function(it){if(Ae!==it)e.clearStencil(it),Ae=it},reset:function(){F=!1,re=null,ee=null,pe=null,xe=null,we=null,$e=null,qe=null,Ae=null}}}let s=new i,o=new r,a=new n,l={},c=new WeakMap,f={},u={},h={},p=new WeakMap,x=[],y=null,d=!1,m=null,b=null,E=null,M=null,I=null,L=null,g=null,S=new ge(0,0,0),N=0,W=!1,U=null,X=null,ne=null,C=null,Q=null,ie=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),H=!1,_e=0,j=e.getParameter(e.VERSION);if(j.indexOf("WebGL")!==-1)_e=parseFloat(/^WebGL (\d)/.exec(j)[1]),H=_e>=1;else if(j.indexOf("OpenGL ES")!==-1)_e=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),H=_e>=2;let se=null,de={},Fe=e.getParameter(e.SCISSOR_BOX),te=e.getParameter(e.VIEWPORT),ce=new St().fromArray(Fe),He=new St().fromArray(te);function ze(F,re,ee,pe){let xe=new Uint8Array(4),we=e.createTexture();e.bindTexture(F,we),e.texParameteri(F,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(F,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let $e=0;$e<ee;$e++)if(F===e.TEXTURE_3D||F===e.TEXTURE_2D_ARRAY)e.texImage3D(re,0,e.RGBA,1,1,pe,0,e.RGBA,e.UNSIGNED_BYTE,xe);else e.texImage2D(re+$e,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,xe);return we}let Ke={};Ke[e.TEXTURE_2D]=ze(e.TEXTURE_2D,e.TEXTURE_2D,1),Ke[e.TEXTURE_CUBE_MAP]=ze(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ke[e.TEXTURE_2D_ARRAY]=ze(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),Ke[e.TEXTURE_3D]=ze(e.TEXTURE_3D,e.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),Le(e.DEPTH_TEST),o.setFunc(Dr),Ie(!1),Ze(Zl),Le(e.CULL_FACE),ve(Wi);function Le(F){if(f[F]!==!0)e.enable(F),f[F]=!0}function yt(F){if(f[F]!==!1)e.disable(F),f[F]=!1}function mt(F,re){if(h[F]!==re){if(e.bindFramebuffer(F,re),h[F]=re,F===e.DRAW_FRAMEBUFFER)h[e.FRAMEBUFFER]=re;if(F===e.FRAMEBUFFER)h[e.DRAW_FRAMEBUFFER]=re;return!0}return!1}function nt(F,re){let ee=x,pe=!1;if(F){if(ee=p.get(re),ee===void 0)ee=[],p.set(re,ee);let xe=F.textures;if(ee.length!==xe.length||ee[0]!==e.COLOR_ATTACHMENT0){for(let we=0,$e=xe.length;we<$e;we++)ee[we]=e.COLOR_ATTACHMENT0+we;ee.length=xe.length,pe=!0}}else if(ee[0]!==e.BACK)ee[0]=e.BACK,pe=!0;if(pe)e.drawBuffers(ee)}function ot(F){if(y!==F)return e.useProgram(F),y=F,!0;return!1}let ae={[Lr]:e.FUNC_ADD,[ph]:e.FUNC_SUBTRACT,[mh]:e.FUNC_REVERSE_SUBTRACT};ae[gh]=e.MIN,ae[xh]=e.MAX;let ye={[_h]:e.ZERO,[vh]:e.ONE,[yh]:e.SRC_COLOR,[Ea]:e.SRC_ALPHA,[wh]:e.SRC_ALPHA_SATURATE,[Th]:e.DST_COLOR,[Sh]:e.DST_ALPHA,[Mh]:e.ONE_MINUS_SRC_COLOR,[wa]:e.ONE_MINUS_SRC_ALPHA,[Eh]:e.ONE_MINUS_DST_COLOR,[bh]:e.ONE_MINUS_DST_ALPHA,[Ah]:e.CONSTANT_COLOR,[Rh]:e.ONE_MINUS_CONSTANT_COLOR,[Ch]:e.CONSTANT_ALPHA,[Ph]:e.ONE_MINUS_CONSTANT_ALPHA};function ve(F,re,ee,pe,xe,we,$e,qe,Ae,it){if(F===Wi){if(d===!0)yt(e.BLEND),d=!1;return}if(d===!1)Le(e.BLEND),d=!0;if(F!==dh){if(F!==m||it!==W){if(b!==Lr||I!==Lr)e.blendEquation(e.FUNC_ADD),b=Lr,I=Lr;if(it)switch(F){case Ir:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case hr:e.blendFunc(e.ONE,e.ONE);break;case Jl:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case Kl:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:Ge("WebGLState: Invalid blending: ",F);break}else switch(F){case Ir:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case hr:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case Jl:Ge("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Kl:Ge("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ge("WebGLState: Invalid blending: ",F);break}E=null,M=null,L=null,g=null,S.set(0,0,0),N=0,m=F,W=it}return}if(xe=xe||re,we=we||ee,$e=$e||pe,re!==b||xe!==I)e.blendEquationSeparate(ae[re],ae[xe]),b=re,I=xe;if(ee!==E||pe!==M||we!==L||$e!==g)e.blendFuncSeparate(ye[ee],ye[pe],ye[we],ye[$e]),E=ee,M=pe,L=we,g=$e;if(qe.equals(S)===!1||Ae!==N)e.blendColor(qe.r,qe.g,qe.b,Ae),S.copy(qe),N=Ae;m=F,W=!1}function Be(F,re){F.side===xi?yt(e.CULL_FACE):Le(e.CULL_FACE);let ee=F.side===Ot;if(re)ee=!ee;Ie(ee),F.blending===Ir&&F.transparent===!1?ve(Wi):ve(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),o.setFunc(F.depthFunc),o.setTest(F.depthTest),o.setMask(F.depthWrite),s.setMask(F.colorWrite);let pe=F.stencilWrite;if(a.setTest(pe),pe)a.setMask(F.stencilWriteMask),a.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),a.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass);dt(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?Le(e.SAMPLE_ALPHA_TO_COVERAGE):yt(e.SAMPLE_ALPHA_TO_COVERAGE)}function Ie(F){if(U!==F){if(F)e.frontFace(e.CW);else e.frontFace(e.CCW);U=F}}function Ze(F){if(F!==hh){if(Le(e.CULL_FACE),F!==X)if(F===Zl)e.cullFace(e.BACK);else if(F===uh)e.cullFace(e.FRONT);else e.cullFace(e.FRONT_AND_BACK)}else yt(e.CULL_FACE);X=F}function Ce(F){if(F!==ne){if(H)e.lineWidth(F);ne=F}}function dt(F,re,ee){if(F){if(Le(e.POLYGON_OFFSET_FILL),C!==re||Q!==ee){if(C=re,Q=ee,o.getReversed())re=-re,ee=-ee;e.polygonOffset(re,ee)}}else yt(e.POLYGON_OFFSET_FILL)}function gt(F){if(F)Le(e.SCISSOR_TEST);else yt(e.SCISSOR_TEST)}function Qe(F){if(F===void 0)F=e.TEXTURE0+ie-1;if(se!==F)e.activeTexture(F),se=F}function B(F,re,ee){if(ee===void 0)if(se===null)ee=e.TEXTURE0+ie-1;else ee=se;let pe=de[ee];if(pe===void 0)pe={type:void 0,texture:void 0},de[ee]=pe;if(pe.type!==F||pe.texture!==re){if(se!==ee)e.activeTexture(ee),se=ee;e.bindTexture(F,re||Ke[F]),pe.type=F,pe.texture=re}}function Ut(){let F=de[se];if(F!==void 0&&F.type!==void 0)e.bindTexture(F.type,null),F.type=void 0,F.texture=void 0}function at(){try{e.compressedTexImage2D(...arguments)}catch(F){Ge("WebGLState:",F)}}function Ft(){try{e.compressedTexImage3D(...arguments)}catch(F){Ge("WebGLState:",F)}}function Ee(){try{e.texSubImage2D(...arguments)}catch(F){Ge("WebGLState:",F)}}function bt(){try{e.texSubImage3D(...arguments)}catch(F){Ge("WebGLState:",F)}}function tt(){try{e.compressedTexSubImage2D(...arguments)}catch(F){Ge("WebGLState:",F)}}function lt(){try{e.compressedTexSubImage3D(...arguments)}catch(F){Ge("WebGLState:",F)}}function qt(){try{e.texStorage2D(...arguments)}catch(F){Ge("WebGLState:",F)}}function A(){try{e.texStorage3D(...arguments)}catch(F){Ge("WebGLState:",F)}}function _(){try{e.texImage2D(...arguments)}catch(F){Ge("WebGLState:",F)}}function G(){try{e.texImage3D(...arguments)}catch(F){Ge("WebGLState:",F)}}function fe(F){if(u[F]!==void 0)return u[F];else return e.getParameter(F)}function le(F,re){if(u[F]!==re)e.pixelStorei(F,re),u[F]=re}function me(F){if(ce.equals(F)===!1)e.scissor(F.x,F.y,F.z,F.w),ce.copy(F)}function be(F){if(He.equals(F)===!1)e.viewport(F.x,F.y,F.z,F.w),He.copy(F)}function K(F,re){let ee=c.get(re);if(ee===void 0)ee=new WeakMap,c.set(re,ee);let pe=ee.get(F);if(pe===void 0)pe=e.getUniformBlockIndex(re,F.name),e.uniformBlockBinding(re,pe,pe),ee.set(F,pe)}function oe(F,re,ee){let xe=c.get(re).get(F);if(l[xe]!==ee)e.bindBufferBase(e.UNIFORM_BUFFER,xe,ee),l[xe]=ee}function Me(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),f={},u={},se=null,de={},h={},l={},p=new WeakMap,x=[],y=null,d=!1,m=null,b=null,E=null,M=null,I=null,L=null,g=null,S=new ge(0,0,0),N=0,W=!1,U=null,X=null,ne=null,C=null,Q=null,ce.set(0,0,e.canvas.width,e.canvas.height),He.set(0,0,e.canvas.width,e.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:Le,disable:yt,bindFramebuffer:mt,drawBuffers:nt,useProgram:ot,setBlending:ve,setMaterial:Be,setFlipSided:Ie,setCullFace:Ze,setLineWidth:Ce,setPolygonOffset:dt,setScissorTest:gt,activeTexture:Qe,bindTexture:B,unbindTexture:Ut,compressedTexImage2D:at,compressedTexImage3D:Ft,texImage2D:_,texImage3D:G,pixelStorei:le,getParameter:fe,updateUBOMapping:K,uniformBlockBinding:oe,texStorage2D:qt,texStorage3D:A,texSubImage2D:Ee,texSubImage3D:bt,compressedTexSubImage2D:tt,compressedTexSubImage3D:lt,scissor:me,viewport:be,reset:Me}}function Lm(e,t,i,r,n,s,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new J,f=new WeakMap,u=new Set,h,p=new WeakMap,x=new Set,y=new FinalizationRegistry((A)=>x.delete(A)),d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(A){}function m(A,_){return d?new OffscreenCanvas(A,_):ln("canvas")}function b(A,_,G){let fe=1,le=qt(A);if(le.width>G||le.height>G)fe=G/Math.max(le.width,le.height);if(fe<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let me=Math.floor(fe*le.width),be=Math.floor(fe*le.height);if(h===void 0)h=m(me,be);let K=_?m(me,be):h;return K.width=me,K.height=be,K.getContext("2d").drawImage(A,0,0,me,be),Te("WebGLRenderer: Texture has been resized from ("+le.width+"x"+le.height+") to ("+me+"x"+be+")."),K}else{if("data"in A)Te("WebGLRenderer: Image in DataTexture is too big ("+le.width+"x"+le.height+").");return A}return A}function E(A){return A.generateMipmaps}function M(A){e.generateMipmap(A)}function I(A){if(A.isWebGLCubeRenderTarget)return e.TEXTURE_CUBE_MAP;if(A.isWebGL3DRenderTarget)return e.TEXTURE_3D;if(A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture)return e.TEXTURE_2D_ARRAY;return e.TEXTURE_2D}function L(A,_,G,fe,le,me=!1){if(A!==null){if(e[A]!==void 0)return e[A];Te("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let be;if(fe){if(be=t.get("EXT_texture_norm16"),!be)Te("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension")}let K=_;if(_===e.RED){if(G===e.FLOAT)K=e.R32F;if(G===e.HALF_FLOAT)K=e.R16F;if(G===e.UNSIGNED_BYTE)K=e.R8;if(G===e.UNSIGNED_SHORT&&be)K=be.R16_EXT;if(G===e.SHORT&&be)K=be.R16_SNORM_EXT}if(_===e.RED_INTEGER){if(G===e.UNSIGNED_BYTE)K=e.R8UI;if(G===e.UNSIGNED_SHORT)K=e.R16UI;if(G===e.UNSIGNED_INT)K=e.R32UI;if(G===e.BYTE)K=e.R8I;if(G===e.SHORT)K=e.R16I;if(G===e.INT)K=e.R32I}if(_===e.RG){if(G===e.FLOAT)K=e.RG32F;if(G===e.HALF_FLOAT)K=e.RG16F;if(G===e.UNSIGNED_BYTE)K=e.RG8;if(G===e.UNSIGNED_SHORT&&be)K=be.RG16_EXT;if(G===e.SHORT&&be)K=be.RG16_SNORM_EXT}if(_===e.RG_INTEGER){if(G===e.UNSIGNED_BYTE)K=e.RG8UI;if(G===e.UNSIGNED_SHORT)K=e.RG16UI;if(G===e.UNSIGNED_INT)K=e.RG32UI;if(G===e.BYTE)K=e.RG8I;if(G===e.SHORT)K=e.RG16I;if(G===e.INT)K=e.RG32I}if(_===e.RGB_INTEGER){if(G===e.UNSIGNED_BYTE)K=e.RGB8UI;if(G===e.UNSIGNED_SHORT)K=e.RGB16UI;if(G===e.UNSIGNED_INT)K=e.RGB32UI;if(G===e.BYTE)K=e.RGB8I;if(G===e.SHORT)K=e.RGB16I;if(G===e.INT)K=e.RGB32I}if(_===e.RGBA_INTEGER){if(G===e.UNSIGNED_BYTE)K=e.RGBA8UI;if(G===e.UNSIGNED_SHORT)K=e.RGBA16UI;if(G===e.UNSIGNED_INT)K=e.RGBA32UI;if(G===e.BYTE)K=e.RGBA8I;if(G===e.SHORT)K=e.RGBA16I;if(G===e.INT)K=e.RGBA32I}if(_===e.RGB){if(G===e.UNSIGNED_SHORT&&be)K=be.RGB16_EXT;if(G===e.SHORT&&be)K=be.RGB16_SNORM_EXT;if(G===e.UNSIGNED_INT_5_9_9_9_REV)K=e.RGB9_E5;if(G===e.UNSIGNED_INT_10F_11F_11F_REV)K=e.R11F_G11F_B10F}if(_===e.RGBA){let oe=me?an:ht.getTransfer(le);if(G===e.FLOAT)K=e.RGBA32F;if(G===e.HALF_FLOAT)K=e.RGBA16F;if(G===e.UNSIGNED_BYTE)K=oe===_t?e.SRGB8_ALPHA8:e.RGBA8;if(G===e.UNSIGNED_SHORT&&be)K=be.RGBA16_EXT;if(G===e.SHORT&&be)K=be.RGBA16_SNORM_EXT;if(G===e.UNSIGNED_SHORT_4_4_4_4)K=e.RGBA4;if(G===e.UNSIGNED_SHORT_5_5_5_1)K=e.RGB5_A1}if(K===e.R16F||K===e.R32F||K===e.RG16F||K===e.RG32F||K===e.RGBA16F||K===e.RGBA32F)t.get("EXT_color_buffer_float");return K}function g(A,_){let G;if(A){if(_===null||_===jt||_===tr)G=e.DEPTH24_STENCIL8;else if(_===Jt)G=e.DEPTH32F_STENCIL8;else if(_===vr)G=e.DEPTH24_STENCIL8,Te("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")}else if(_===null||_===jt||_===tr)G=e.DEPTH_COMPONENT24;else if(_===Jt)G=e.DEPTH_COMPONENT32F;else if(_===vr)G=e.DEPTH_COMPONENT16;return G}function S(A,_){if(E(A)===!0||A.isFramebufferTexture&&A.minFilter!==Dt&&A.minFilter!==Gt)return Math.log2(Math.max(_.width,_.height))+1;else if(A.mipmaps.length>0)return A.mipmaps.length;else if(A.isCompressedTexture&&Array.isArray(A.image))return _.mipmaps.length;else return 1}function N(A){let _=new WeakRef(A);r.get(A).__ref=_,x.add(_),y.register(A,_,_)}function W(A){let _=r.get(A).__ref;if(_===void 0)return;x.delete(_),y.unregister(_)}function U(A){ne(A.target)}function X(A){C(A.target)}function ne(A){if(A.removeEventListener("dispose",U),W(A),ie(A),A.isVideoTexture)f.delete(A);if(A.isHTMLTexture)u.delete(A)}function C(A){A.removeEventListener("dispose",X),W(A),_e(A)}function Q(){for(let A of x){let _=A.deref();if(_===void 0)continue;if(_.isRenderTarget===!0)C(_);else ne(_)}x.clear(),u.clear()}function ie(A){let _=r.get(A);if(_.__webglInit===void 0)return;let G=A.source,fe=p.get(G);if(fe){let le=fe[_.__cacheKey];if(le.usedTimes--,le.usedTimes===0)H(A);if(Object.keys(fe).length===0)p.delete(G)}r.remove(A)}function H(A){let _=r.get(A);e.deleteTexture(_.__webglTexture);let G=A.source,fe=p.get(G);delete fe[_.__cacheKey],o.memory.textures--}function _e(A){let _=r.get(A);if(_.__depthDisposeCallback)_.__depthDisposeCallback();let G=A.depthTexture;if(G&&G.renderTarget===A)ne(G);if(A.isWebGLCubeRenderTarget)for(let le=0;le<6;le++){if(Array.isArray(_.__webglFramebuffer[le]))for(let me=0;me<_.__webglFramebuffer[le].length;me++)e.deleteFramebuffer(_.__webglFramebuffer[le][me]);else e.deleteFramebuffer(_.__webglFramebuffer[le]);if(_.__webglDepthbuffer)e.deleteRenderbuffer(_.__webglDepthbuffer[le])}else{if(Array.isArray(_.__webglFramebuffer))for(let le=0;le<_.__webglFramebuffer.length;le++)e.deleteFramebuffer(_.__webglFramebuffer[le]);else e.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer)e.deleteRenderbuffer(_.__webglDepthbuffer);if(_.__webglMultisampledFramebuffer)e.deleteFramebuffer(_.__webglMultisampledFramebuffer);if(_.__webglColorRenderbuffer){for(let le=0;le<_.__webglColorRenderbuffer.length;le++)if(_.__webglColorRenderbuffer[le])e.deleteRenderbuffer(_.__webglColorRenderbuffer[le])}if(_.__webglDepthRenderbuffer)e.deleteRenderbuffer(_.__webglDepthRenderbuffer)}let fe=A.textures;for(let le=0,me=fe.length;le<me;le++){let be=r.get(fe[le]);if(be.__webglTexture)e.deleteTexture(be.__webglTexture),o.memory.textures--;r.remove(fe[le])}r.remove(A)}let j=0;function se(){j=0}function de(){return j}function Fe(A){j=A}function te(){let A=j;if(A>=n.maxTextures)Te("WebGLTextures: Trying to use "+(A+1)+" texture units while this GPU supports only "+n.maxTextures);return j+=1,A}function ce(A){let _=[];return _.push(A.wrapS),_.push(A.wrapT),_.push(A.wrapR||0),_.push(A.magFilter),_.push(A.minFilter),_.push(A.anisotropy),_.push(A.internalFormat),_.push(A.format),_.push(A.type),_.push(A.generateMipmaps),_.push(A.mipmapsAutoUpdate),_.push(A.premultiplyAlpha),_.push(A.flipY),_.push(A.unpackAlignment),_.push(A.colorSpace),_.join()}function He(A,_){let G=r.get(A);if(A.isVideoTexture)tt(A);if(A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&G.__version!==A.version){let fe=A.image;if(fe===null)Te("WebGLRenderer: Texture marked for update but no image data found.");else if(fe.complete===!1)Te("WebGLRenderer: Texture marked for update but image is incomplete");else{Be(G,A,_);return}}else if(A.isExternalTexture)G.__webglTexture=A.sourceTexture?A.sourceTexture:null;i.bindTexture(e.TEXTURE_2D,G.__webglTexture,e.TEXTURE0+_)}function ze(A,_){let G=r.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&G.__version!==A.version){Be(G,A,_);return}else if(A.isExternalTexture)G.__webglTexture=A.sourceTexture?A.sourceTexture:null;i.bindTexture(e.TEXTURE_2D_ARRAY,G.__webglTexture,e.TEXTURE0+_)}function Ke(A,_){let G=r.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&G.__version!==A.version){Be(G,A,_);return}i.bindTexture(e.TEXTURE_3D,G.__webglTexture,e.TEXTURE0+_)}function Le(A,_){let G=r.get(A);if(A.version>0&&G.__version!==A.version){Ie(G,A,_);return}i.bindTexture(e.TEXTURE_CUBE_MAP,G.__webglTexture,e.TEXTURE0+_)}let yt={[Vn]:e.REPEAT,[pi]:e.CLAMP_TO_EDGE,[Hn]:e.MIRRORED_REPEAT},mt={[Dt]:e.NEAREST,[Ql]:e.NEAREST_MIPMAP_NEAREST,[kn]:e.NEAREST_MIPMAP_LINEAR,[Gt]:e.LINEAR,[js]:e.LINEAR_MIPMAP_NEAREST,[Ei]:e.LINEAR_MIPMAP_LINEAR},nt={[Fh]:e.NEVER,[Ha]:e.ALWAYS,[Bh]:e.LESS,[Ga]:e.LEQUAL,[Oh]:e.EQUAL,[Va]:e.GEQUAL,[zh]:e.GREATER,[Gh]:e.NOTEQUAL};function ot(A,_){if(_.type===Jt&&t.has("OES_texture_float_linear")===!1&&(_.magFilter===Gt||_.magFilter===js||_.magFilter===kn||_.magFilter===Ei||_.minFilter===Gt||_.minFilter===js||_.minFilter===kn||_.minFilter===Ei))Te("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.");if(e.texParameteri(A,e.TEXTURE_WRAP_S,yt[_.wrapS]),e.texParameteri(A,e.TEXTURE_WRAP_T,yt[_.wrapT]),A===e.TEXTURE_3D||A===e.TEXTURE_2D_ARRAY)e.texParameteri(A,e.TEXTURE_WRAP_R,yt[_.wrapR]);if(e.texParameteri(A,e.TEXTURE_MAG_FILTER,mt[_.magFilter]),e.texParameteri(A,e.TEXTURE_MIN_FILTER,mt[_.minFilter]),_.compareFunction)e.texParameteri(A,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(A,e.TEXTURE_COMPARE_FUNC,nt[_.compareFunction]);if(t.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Dt)return;if(_.minFilter!==kn&&_.minFilter!==Ei)return;if(_.type===Jt&&t.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||r.get(_).__currentAnisotropy){let G=t.get("EXT_texture_filter_anisotropic");e.texParameterf(A,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,n.getMaxAnisotropy())),r.get(_).__currentAnisotropy=_.anisotropy}}}function ae(A,_){let G=!1;if(A.__webglInit===void 0)A.__webglInit=!0,_.addEventListener("dispose",U),N(_);let fe=_.source,le=p.get(fe);if(le===void 0)le={},p.set(fe,le);let me=ce(_);if(me!==A.__cacheKey){if(le[me]===void 0)le[me]={texture:e.createTexture(),usedTimes:0},o.memory.textures++,G=!0;le[me].usedTimes++;let be=le[A.__cacheKey];if(be!==void 0){if(le[A.__cacheKey].usedTimes--,be.usedTimes===0)H(_)}A.__cacheKey=me,A.__webglTexture=le[me].texture}return G}function ye(A,_,G){return Math.floor(Math.floor(A/G)/_)}function ve(A,_,G,fe){let me=A.updateRanges;if(me.length===0)i.texSubImage2D(e.TEXTURE_2D,0,0,0,_.width,_.height,G,fe,_.data);else{me.sort((F,re)=>F.start-re.start);let be=0;for(let F=1;F<me.length;F++){let re=me[be],ee=me[F],pe=re.start+re.count,xe=ye(ee.start,_.width,4),we=ye(re.start,_.width,4);if(ee.start<=pe+1&&xe===we&&ye(ee.start+ee.count-1,_.width,4)===xe)re.count=Math.max(re.count,ee.start+ee.count-re.start);else++be,me[be]=ee}me.length=be+1;let K=i.getParameter(e.UNPACK_ROW_LENGTH),oe=i.getParameter(e.UNPACK_SKIP_PIXELS),Me=i.getParameter(e.UNPACK_SKIP_ROWS);i.pixelStorei(e.UNPACK_ROW_LENGTH,_.width);for(let F=0,re=me.length;F<re;F++){let ee=me[F],pe=Math.floor(ee.start/4),xe=Math.ceil(ee.count/4),we=pe%_.width,$e=Math.floor(pe/_.width),qe=xe,Ae=1;i.pixelStorei(e.UNPACK_SKIP_PIXELS,we),i.pixelStorei(e.UNPACK_SKIP_ROWS,$e),i.texSubImage2D(e.TEXTURE_2D,0,we,$e,qe,1,G,fe,_.data)}A.clearUpdateRanges(),i.pixelStorei(e.UNPACK_ROW_LENGTH,K),i.pixelStorei(e.UNPACK_SKIP_PIXELS,oe),i.pixelStorei(e.UNPACK_SKIP_ROWS,Me)}}function Be(A,_,G){let fe=e.TEXTURE_2D;if(_.isDataArrayTexture||_.isCompressedArrayTexture)fe=e.TEXTURE_2D_ARRAY;if(_.isData3DTexture)fe=e.TEXTURE_3D;let le=ae(A,_),me=_.source;i.bindTexture(fe,A.__webglTexture,e.TEXTURE0+G);let be=r.get(me);if(me.version!==be.__version||le===!0){if(i.activeTexture(e.TEXTURE0+G),(typeof ImageBitmap<"u"&&_.image instanceof ImageBitmap)===!1){let Ae=ht.getPrimaries(ht.workingColorSpace),it=_.colorSpace===qi?null:ht.getPrimaries(_.colorSpace),ut=_.colorSpace===qi||Ae===it?e.NONE:e.BROWSER_DEFAULT_WEBGL;i.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,ut)}i.pixelStorei(e.UNPACK_ALIGNMENT,_.unpackAlignment);let oe=b(_.image,!1,n.maxTextureSize);oe=lt(_,oe);let Me=s.convert(_.format,_.colorSpace),F=s.convert(_.type),re=L(_.internalFormat,Me,F,_.normalized,_.colorSpace,_.isVideoTexture);ot(fe,_);let ee,pe=_.mipmaps,xe=_.isVideoTexture!==!0,we=be.__version===void 0||le===!0,$e=me.dataReady,qe=S(_,oe);if(_.isDepthTexture){if(re=g(_.format===Ni,_.type),we)if(xe)i.texStorage2D(e.TEXTURE_2D,1,re,oe.width,oe.height);else i.texImage2D(e.TEXTURE_2D,0,re,oe.width,oe.height,0,Me,F,null)}else if(_.isDataTexture)if(pe.length>0){if(xe&&we)i.texStorage2D(e.TEXTURE_2D,qe,re,pe[0].width,pe[0].height);for(let Ae=0,it=pe.length;Ae<it;Ae++)if(ee=pe[Ae],xe){if($e)i.texSubImage2D(e.TEXTURE_2D,Ae,0,0,ee.width,ee.height,Me,F,ee.data)}else i.texImage2D(e.TEXTURE_2D,Ae,re,ee.width,ee.height,0,Me,F,ee.data);_.generateMipmaps=!1}else if(xe){if(we)i.texStorage2D(e.TEXTURE_2D,qe,re,oe.width,oe.height);if($e)ve(_,oe,Me,F)}else i.texImage2D(e.TEXTURE_2D,0,re,oe.width,oe.height,0,Me,F,oe.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){if(xe&&we)i.texStorage3D(e.TEXTURE_2D_ARRAY,qe,re,pe[0].width,pe[0].height,oe.depth);for(let Ae=0,it=pe.length;Ae<it;Ae++)if(ee=pe[Ae],_.format!==li)if(Me!==null)if(xe){if($e)if(_.layerUpdates.size>0){let ut=Zc(ee.width,ee.height,_.format,_.type);for(let Re of _.layerUpdates){let Et=ee.data.subarray(Re*ut/ee.data.BYTES_PER_ELEMENT,(Re+1)*ut/ee.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,Ae,0,0,Re,ee.width,ee.height,1,Me,Et)}}else i.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,Ae,0,0,0,ee.width,ee.height,oe.depth,Me,ee.data)}else i.compressedTexImage3D(e.TEXTURE_2D_ARRAY,Ae,re,ee.width,ee.height,oe.depth,0,ee.data,0,0);else Te("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(xe){if($e)i.texSubImage3D(e.TEXTURE_2D_ARRAY,Ae,0,0,0,ee.width,ee.height,oe.depth,Me,F,ee.data)}else i.texImage3D(e.TEXTURE_2D_ARRAY,Ae,re,ee.width,ee.height,oe.depth,0,Me,F,ee.data);if(_.layerUpdates.size>0)_.clearLayerUpdates()}else{if(xe&&we)i.texStorage2D(e.TEXTURE_2D,qe,re,pe[0].width,pe[0].height);for(let Ae=0,it=pe.length;Ae<it;Ae++)if(ee=pe[Ae],_.format!==li)if(Me!==null)if(xe){if($e)i.compressedTexSubImage2D(e.TEXTURE_2D,Ae,0,0,ee.width,ee.height,Me,ee.data)}else i.compressedTexImage2D(e.TEXTURE_2D,Ae,re,ee.width,ee.height,0,ee.data);else Te("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(xe){if($e)i.texSubImage2D(e.TEXTURE_2D,Ae,0,0,ee.width,ee.height,Me,F,ee.data)}else i.texImage2D(e.TEXTURE_2D,Ae,re,ee.width,ee.height,0,Me,F,ee.data)}else if(_.isDataArrayTexture)if(xe){if(we)i.texStorage3D(e.TEXTURE_2D_ARRAY,qe,re,oe.width,oe.height,oe.depth);if($e)if(_.layerUpdates.size>0){let Ae=Zc(oe.width,oe.height,_.format,_.type);for(let it of _.layerUpdates){let ut=oe.data.subarray(it*Ae/oe.data.BYTES_PER_ELEMENT,(it+1)*Ae/oe.data.BYTES_PER_ELEMENT);i.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,it,oe.width,oe.height,1,Me,F,ut)}_.clearLayerUpdates()}else i.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,oe.width,oe.height,oe.depth,Me,F,oe.data)}else i.texImage3D(e.TEXTURE_2D_ARRAY,0,re,oe.width,oe.height,oe.depth,0,Me,F,oe.data);else if(_.isData3DTexture)if(xe){if(we)i.texStorage3D(e.TEXTURE_3D,qe,re,oe.width,oe.height,oe.depth);if($e)i.texSubImage3D(e.TEXTURE_3D,0,0,0,0,oe.width,oe.height,oe.depth,Me,F,oe.data)}else i.texImage3D(e.TEXTURE_3D,0,re,oe.width,oe.height,oe.depth,0,Me,F,oe.data);else if(_.isFramebufferTexture){if(we)if(xe)i.texStorage2D(e.TEXTURE_2D,qe,re,oe.width,oe.height);else{let Ae=oe.width,it=oe.height;for(let ut=0;ut<qe;ut++)i.texImage2D(e.TEXTURE_2D,ut,re,Ae,it,0,Me,F,null),Ae>>=1,it>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in e){let Ae=e.canvas;if(!Ae.hasAttribute("layoutsubtree"))Ae.setAttribute("layoutsubtree","true");if(oe.parentNode!==Ae){Ae.appendChild(oe),u.add(_),Ae.onpaint=(it)=>{let ut=it.changedElements;for(let Re of u)if(ut.includes(Re.image))Re.needsUpdate=!0},Ae.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,oe);else{let{RGBA:ut,RGBA:Re,UNSIGNED_BYTE:Et}=e;e.texElementImage2D(e.TEXTURE_2D,0,ut,Re,Et,oe)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(pe.length>0){if(xe&&we){let Ae=qt(pe[0]);i.texStorage2D(e.TEXTURE_2D,qe,re,Ae.width,Ae.height)}for(let Ae=0,it=pe.length;Ae<it;Ae++)if(ee=pe[Ae],xe){if($e)i.texSubImage2D(e.TEXTURE_2D,Ae,0,0,Me,F,ee)}else i.texImage2D(e.TEXTURE_2D,Ae,re,Me,F,ee);_.generateMipmaps=!1}else if(xe){if(we){let Ae=qt(oe);i.texStorage2D(e.TEXTURE_2D,qe,re,Ae.width,Ae.height)}if($e)i.texSubImage2D(e.TEXTURE_2D,0,0,0,Me,F,oe)}else i.texImage2D(e.TEXTURE_2D,0,re,Me,F,oe);if(E(_)&&_.mipmapsAutoUpdate===!0)M(fe);if(be.__version=me.version,_.onUpdate)_.onUpdate(_)}A.__version=_.version}function Ie(A,_,G){if(_.image.length!==6)return;let fe=ae(A,_),le=_.source;i.bindTexture(e.TEXTURE_CUBE_MAP,A.__webglTexture,e.TEXTURE0+G);let me=r.get(le);if(le.version!==me.__version||fe===!0){i.activeTexture(e.TEXTURE0+G);let be=ht.getPrimaries(ht.workingColorSpace),K=_.colorSpace===qi?null:ht.getPrimaries(_.colorSpace),oe=_.colorSpace===qi||be===K?e.NONE:e.BROWSER_DEFAULT_WEBGL;i.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(e.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,oe);let Me=_.isCompressedTexture||_.image[0].isCompressedTexture,F=_.image[0]&&_.image[0].isDataTexture,re=[];for(let Re=0;Re<6;Re++){if(!Me&&!F)re[Re]=b(_.image[Re],!0,n.maxCubemapSize);else re[Re]=F?_.image[Re].image:_.image[Re];re[Re]=lt(_,re[Re])}let ee=re[0],pe=s.convert(_.format,_.colorSpace),xe=s.convert(_.type),we=L(_.internalFormat,pe,xe,_.normalized,_.colorSpace),$e=_.isVideoTexture!==!0,qe=me.__version===void 0||fe===!0,Ae=le.dataReady,it=S(_,ee);ot(e.TEXTURE_CUBE_MAP,_);let ut;if(_.isDepthTexture){if(we=g(_.format===Ni,_.type),qe)if($e)i.texStorage2D(e.TEXTURE_CUBE_MAP,1,we,ee.width,ee.height);else for(let Re=0;Re<6;Re++)i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0,we,ee.width,ee.height,0,pe,xe,null)}else if(Me){if($e&&qe)i.texStorage2D(e.TEXTURE_CUBE_MAP,it,we,ee.width,ee.height);for(let Re=0;Re<6;Re++){ut=re[Re].mipmaps;for(let Et=0;Et<ut.length;Et++){let Qt=ut[Et];if(_.format!==li)if(pe!==null)if($e){if(Ae)i.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Re,Et,0,0,Qt.width,Qt.height,pe,Qt.data)}else i.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Re,Et,we,Qt.width,Qt.height,0,Qt.data);else Te("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()");else if($e){if(Ae)i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Re,Et,0,0,Qt.width,Qt.height,pe,xe,Qt.data)}else i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Re,Et,we,Qt.width,Qt.height,0,pe,xe,Qt.data)}}}else{if(ut=_.mipmaps,$e&&qe){if(ut.length>0)it++;let Re=qt(re[0]);i.texStorage2D(e.TEXTURE_CUBE_MAP,it,we,Re.width,Re.height)}for(let Re=0;Re<6;Re++)if(F){if($e){if(Ae)i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0,0,0,re[Re].width,re[Re].height,pe,xe,re[Re].data)}else i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0,we,re[Re].width,re[Re].height,0,pe,xe,re[Re].data);for(let Et=0;Et<ut.length;Et++){let Hi=ut[Et].image[Re].image;if($e){if(Ae)i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Re,Et+1,0,0,Hi.width,Hi.height,pe,xe,Hi.data)}else i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Re,Et+1,we,Hi.width,Hi.height,0,pe,xe,Hi.data)}}else{if($e){if(Ae)i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0,0,0,pe,xe,re[Re])}else i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0,we,pe,xe,re[Re]);for(let Et=0;Et<ut.length;Et++){let Qt=ut[Et];if($e){if(Ae)i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Re,Et+1,0,0,pe,xe,Qt.image[Re])}else i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Re,Et+1,we,pe,xe,Qt.image[Re])}}}if(E(_)&&_.mipmapsAutoUpdate===!0)M(e.TEXTURE_CUBE_MAP);if(me.__version=le.version,_.onUpdate)_.onUpdate(_)}A.__version=_.version}function Ze(A,_,G,fe,le,me){let be=s.convert(G.format,G.colorSpace),K=s.convert(G.type),oe=L(G.internalFormat,be,K,G.normalized,G.colorSpace),Me=r.get(_),F=r.get(G);if(F.__renderTarget=_,!Me.__hasExternalTextures){let re=Math.max(1,_.width>>me),ee=Math.max(1,_.height>>me);if(le===e.TEXTURE_3D||le===e.TEXTURE_2D_ARRAY)i.texImage3D(le,me,oe,re,ee,_.depth,0,be,K,null);else i.texImage2D(le,me,oe,re,ee,0,be,K,null)}if(i.bindFramebuffer(e.FRAMEBUFFER,A),bt(_))a.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,fe,le,F.__webglTexture,0,Ee(_));else if(le===e.TEXTURE_2D||le>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&le<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)e.framebufferTexture2D(e.FRAMEBUFFER,fe,le,F.__webglTexture,me);i.bindFramebuffer(e.FRAMEBUFFER,null)}function Ce(A,_,G){if(e.bindRenderbuffer(e.RENDERBUFFER,A),_.depthBuffer){let fe=_.depthTexture,le=fe&&fe.isDepthTexture?fe.type:null,me=g(_.stencilBuffer,le),be=_.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(bt(_))a.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Ee(_),me,_.width,_.height);else if(G)e.renderbufferStorageMultisample(e.RENDERBUFFER,Ee(_),me,_.width,_.height);else e.renderbufferStorage(e.RENDERBUFFER,me,_.width,_.height);e.framebufferRenderbuffer(e.FRAMEBUFFER,be,e.RENDERBUFFER,A)}else{let fe=_.textures;for(let le=0;le<fe.length;le++){let me=fe[le],be=s.convert(me.format,me.colorSpace),K=s.convert(me.type),oe=L(me.internalFormat,be,K,me.normalized,me.colorSpace);if(bt(_))a.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Ee(_),oe,_.width,_.height);else if(G)e.renderbufferStorageMultisample(e.RENDERBUFFER,Ee(_),oe,_.width,_.height);else e.renderbufferStorage(e.RENDERBUFFER,oe,_.width,_.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function dt(A,_,G){let fe=_.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(e.FRAMEBUFFER,A),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let le=r.get(_.depthTexture);le.__renderTarget=_;let me=fe?_.depthTexture.image[0]:_.depthTexture.image;if(!le.__webglTexture||me.width!==_.width||me.height!==_.height)me.width=_.width,me.height=_.height,_.depthTexture.needsUpdate=!0;if(fe)Le(_.depthTexture,0);else He(_.depthTexture,0);let be=le.__webglTexture,K=Ee(_),oe=fe?e.TEXTURE_CUBE_MAP_POSITIVE_X+G:e.TEXTURE_2D,Me=_.depthTexture.format===Ni?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(_.depthTexture.format===Pi)if(bt(_))a.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,Me,oe,be,0,K);else e.framebufferTexture2D(e.FRAMEBUFFER,Me,oe,be,0);else if(_.depthTexture.format===Ni)if(bt(_))a.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,Me,oe,be,0,K);else e.framebufferTexture2D(e.FRAMEBUFFER,Me,oe,be,0);else throw Error("THREE.WebGLTextures: Unknown depthTexture format.")}function gt(A){let _=r.get(A),G=A.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==A.depthTexture){let fe=A.depthTexture;if(_.__depthDisposeCallback)_.__depthDisposeCallback();if(fe){let le=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,fe.removeEventListener("dispose",le)};fe.addEventListener("dispose",le),_.__depthDisposeCallback=le}_.__boundDepthTexture=fe}if(A.depthTexture&&!_.__autoAllocateDepthBuffer)if(G)for(let fe=0;fe<6;fe++)dt(_.__webglFramebuffer[fe],A,fe);else if(A.texture.mipmaps.length>0)dt(_.__webglFramebuffer[0],A,0);else dt(_.__webglFramebuffer,A,0);else if(G){_.__webglDepthbuffer=[];for(let fe=0;fe<6;fe++)if(i.bindFramebuffer(e.FRAMEBUFFER,_.__webglFramebuffer[fe]),_.__webglDepthbuffer[fe]===void 0)_.__webglDepthbuffer[fe]=e.createRenderbuffer(),Ce(_.__webglDepthbuffer[fe],A,!1);else{let le=A.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,me=_.__webglDepthbuffer[fe];e.bindRenderbuffer(e.RENDERBUFFER,me),e.framebufferRenderbuffer(e.FRAMEBUFFER,le,e.RENDERBUFFER,me)}}else{if(A.texture.mipmaps.length>0)i.bindFramebuffer(e.FRAMEBUFFER,_.__webglFramebuffer[0]);else i.bindFramebuffer(e.FRAMEBUFFER,_.__webglFramebuffer);if(_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=e.createRenderbuffer(),Ce(_.__webglDepthbuffer,A,!1);else{let le=A.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,me=_.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,me),e.framebufferRenderbuffer(e.FRAMEBUFFER,le,e.RENDERBUFFER,me)}}i.bindFramebuffer(e.FRAMEBUFFER,null)}function Qe(A,_,G){let fe=r.get(A);if(_!==void 0)Ze(fe.__webglFramebuffer,A,A.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0);if(G!==void 0)gt(A)}function B(A){let _=A.texture,G=r.get(A),fe=r.get(_);A.addEventListener("dispose",X),N(A);let le=A.textures,me=A.isWebGLCubeRenderTarget===!0,be=le.length>1;if(!be){if(fe.__webglTexture===void 0)fe.__webglTexture=e.createTexture();fe.__version=_.version,o.memory.textures++}if(me){G.__webglFramebuffer=[];for(let K=0;K<6;K++)if(_.mipmaps.length>0){G.__webglFramebuffer[K]=[];for(let oe=0;oe<_.mipmaps.length;oe++)G.__webglFramebuffer[K][oe]=e.createFramebuffer()}else G.__webglFramebuffer[K]=e.createFramebuffer()}else{if(_.mipmaps.length>0){G.__webglFramebuffer=[];for(let K=0;K<_.mipmaps.length;K++)G.__webglFramebuffer[K]=e.createFramebuffer()}else G.__webglFramebuffer=e.createFramebuffer();if(be)for(let K=0,oe=le.length;K<oe;K++){let Me=r.get(le[K]);if(Me.__webglTexture===void 0)Me.__webglTexture=e.createTexture(),o.memory.textures++}if(A.samples>0&&bt(A)===!1){G.__webglMultisampledFramebuffer=e.createFramebuffer(),G.__webglColorRenderbuffer=[],i.bindFramebuffer(e.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let K=0;K<le.length;K++){let oe=le[K];G.__webglColorRenderbuffer[K]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,G.__webglColorRenderbuffer[K]);let Me=s.convert(oe.format,oe.colorSpace),F=s.convert(oe.type),re=L(oe.internalFormat,Me,F,oe.normalized,oe.colorSpace,A.isXRRenderTarget===!0),ee=Ee(A);e.renderbufferStorageMultisample(e.RENDERBUFFER,ee,re,A.width,A.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+K,e.RENDERBUFFER,G.__webglColorRenderbuffer[K])}if(e.bindRenderbuffer(e.RENDERBUFFER,null),A.depthBuffer)G.__webglDepthRenderbuffer=e.createRenderbuffer(),Ce(G.__webglDepthRenderbuffer,A,!0);i.bindFramebuffer(e.FRAMEBUFFER,null)}}if(me){i.bindTexture(e.TEXTURE_CUBE_MAP,fe.__webglTexture),ot(e.TEXTURE_CUBE_MAP,_);for(let K=0;K<6;K++)if(_.mipmaps.length>0)for(let oe=0;oe<_.mipmaps.length;oe++)Ze(G.__webglFramebuffer[K][oe],A,_,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+K,oe);else Ze(G.__webglFramebuffer[K],A,_,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+K,0);if(E(_))M(e.TEXTURE_CUBE_MAP);else if(_.mipmaps.length>0)e.texParameteri(e.TEXTURE_CUBE_MAP,e.TEXTURE_MAX_LEVEL,_.mipmaps.length-1);i.unbindTexture()}else if(be){for(let K=0,oe=le.length;K<oe;K++){let Me=le[K],F=r.get(Me),re=e.TEXTURE_2D;if(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)re=A.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY;if(i.bindTexture(re,F.__webglTexture),ot(re,Me),Ze(G.__webglFramebuffer,A,Me,e.COLOR_ATTACHMENT0+K,re,0),E(Me))M(re)}i.unbindTexture()}else{let K=e.TEXTURE_2D;if(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)K=A.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY;if(i.bindTexture(K,fe.__webglTexture),ot(K,_),_.mipmaps.length>0)for(let oe=0;oe<_.mipmaps.length;oe++)Ze(G.__webglFramebuffer[oe],A,_,e.COLOR_ATTACHMENT0,K,oe);else Ze(G.__webglFramebuffer,A,_,e.COLOR_ATTACHMENT0,K,0);if(E(_))M(K);else if(_.mipmaps.length>0)e.texParameteri(K,e.TEXTURE_MAX_LEVEL,_.mipmaps.length-1);i.unbindTexture()}if(A.depthBuffer)gt(A)}function Ut(A){let _=A.textures;for(let G=0,fe=_.length;G<fe;G++){let le=_[G];if(E(le)&&le.mipmapsAutoUpdate===!0){let me=I(A),be=r.get(le).__webglTexture;i.bindTexture(me,be),M(me),i.unbindTexture()}}}let at=[];function Ft(A){if(A.samples>0){if(bt(A)===!1){let{textures:_,width:G,height:fe}=A,le=e.COLOR_BUFFER_BIT,me=A.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,be=r.get(A),K=_.length>1;if(K)for(let Me=0;Me<_.length;Me++)i.bindFramebuffer(e.FRAMEBUFFER,be.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+Me,e.RENDERBUFFER,null),i.bindFramebuffer(e.FRAMEBUFFER,be.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+Me,e.TEXTURE_2D,null,0);if(i.bindFramebuffer(e.READ_FRAMEBUFFER,be.__webglMultisampledFramebuffer),A.texture.mipmaps.length>0)i.bindFramebuffer(e.DRAW_FRAMEBUFFER,be.__webglFramebuffer[0]);else i.bindFramebuffer(e.DRAW_FRAMEBUFFER,be.__webglFramebuffer);for(let Me=0;Me<_.length;Me++){if(A.resolveDepthBuffer){if(A.depthBuffer)le|=e.DEPTH_BUFFER_BIT;if(A.stencilBuffer&&A.resolveStencilBuffer)le|=e.STENCIL_BUFFER_BIT}if(K){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,be.__webglColorRenderbuffer[Me]);let F=r.get(_[Me]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,F,0)}if(e.blitFramebuffer(0,0,G,fe,0,0,G,fe,le,e.NEAREST),l===!0){if(at.length=0,at.push(e.COLOR_ATTACHMENT0+Me),A.depthBuffer&&A.storeMultisampledDepthBuffer===!1)at.push(me);e.invalidateFramebuffer(e.READ_FRAMEBUFFER,at)}}if(i.bindFramebuffer(e.READ_FRAMEBUFFER,null),i.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),K)for(let Me=0;Me<_.length;Me++){i.bindFramebuffer(e.FRAMEBUFFER,be.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+Me,e.RENDERBUFFER,be.__webglColorRenderbuffer[Me]);let F=r.get(_[Me]).__webglTexture;i.bindFramebuffer(e.FRAMEBUFFER,be.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+Me,e.TEXTURE_2D,F,0)}i.bindFramebuffer(e.DRAW_FRAMEBUFFER,be.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&l){let _=A.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[_])}}}function Ee(A){return Math.min(n.maxSamples,A.samples)}function bt(A){let _=r.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function tt(A){let _=o.render.frame;if(f.get(A)!==_)f.set(A,_),A.update()}function lt(A,_){let{colorSpace:G,format:fe,type:le}=A;if(A.isCompressedTexture===!0||A.isVideoTexture===!0)return _;if(G!==on&&G!==qi)if(ht.getTransfer(G)===_t){if(fe!==li||le!==Zt)Te("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.")}else Ge("WebGLTextures: Unsupported texture color space:",G);return _}function qt(A){if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement)c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height;else if(typeof VideoFrame<"u"&&A instanceof VideoFrame)c.width=A.displayWidth,c.height=A.displayHeight;else c.width=A.width,c.height=A.height;return c}this.allocateTextureUnit=te,this.resetTextureUnits=se,this.getTextureUnits=de,this.setTextureUnits=Fe,this.setTexture2D=He,this.setTexture2DArray=ze,this.setTexture3D=Ke,this.setTextureCube=Le,this.rebindTextures=Qe,this.setupRenderTarget=B,this.updateRenderTargetMipmap=Ut,this.updateMultisampleRenderTarget=Ft,this.setupDepthRenderbuffer=gt,this.setupFrameBufferTexture=Ze,this.useMultisampledRTT=bt,this.dispose=Q}function eh(e,t){function i(r,n=qi){let s,o=ht.getTransfer(n);if(r===Zt)return e.UNSIGNED_BYTE;if(r===Xn)return e.UNSIGNED_SHORT_4_4_4_4;if(r===qn)return e.UNSIGNED_SHORT_5_5_5_1;if(r===Pa)return e.UNSIGNED_INT_5_9_9_9_REV;if(r===Ia)return e.UNSIGNED_INT_10F_11F_11F_REV;if(r===Ra)return e.BYTE;if(r===Ca)return e.SHORT;if(r===vr)return e.UNSIGNED_SHORT;if(r===Wn)return e.INT;if(r===jt)return e.UNSIGNED_INT;if(r===Jt)return e.FLOAT;if(r===Pt)return e.HALF_FLOAT;if(r===La)return e.ALPHA;if(r===Da)return e.RGB;if(r===li)return e.RGBA;if(r===Pi)return e.DEPTH_COMPONENT;if(r===Ni)return e.DEPTH_STENCIL;if(r===Yn)return e.RED;if(r===tn)return e.RED_INTEGER;if(r===Ui)return e.RG;if(r===Zn)return e.RG_INTEGER;if(r===Jn)return e.RGBA_INTEGER;if(r===Kn||r===Qn||r===$n||r===jn)if(o===_t)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(r===Kn)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Qn)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===$n)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===jn)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(r===Kn)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Qn)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===$n)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===jn)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===eo||r===to||r===io||r===ro)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(r===eo)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===to)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===io)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===ro)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===no||r===so||r===oo||r===ao||r===lo||r===rn||r===co)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(r===no||r===so)return o===_t?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(r===oo)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(r===ao)return s.COMPRESSED_R11_EAC;if(r===lo)return s.COMPRESSED_SIGNED_R11_EAC;if(r===rn)return s.COMPRESSED_RG11_EAC;if(r===co)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===ho||r===uo||r===fo||r===po||r===mo||r===go||r===xo||r===_o||r===vo||r===yo||r===Mo||r===So||r===bo||r===To)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(r===ho)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===uo)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===fo)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===po)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===mo)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===go)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===xo)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===_o)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===vo)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===yo)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Mo)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===So)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===bo)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===To)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Eo||r===wo||r===Ao)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(r===Eo)return o===_t?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===wo)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Ao)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Ro||r===Co||r===nn||r===Po)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(r===Ro)return s.COMPRESSED_RED_RGTC1_EXT;if(r===Co)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===nn)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Po)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;if(r===tr)return e.UNSIGNED_INT_24_8;return e[r]!==void 0?e[r]:null}return{convert:i}}var h_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,u_=`
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

}`;class th{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new Es(e.texture);if(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)this.depthNear=e.depthNear,this.depthFar=e.depthFar;this.texture=i}}getMesh(e){if(this.texture!==null){if(this.mesh===null){let t=e.cameras[0].viewport,i=new Ct({vertexShader:h_,fragmentShader:u_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new rt(new Ri(20,20),i)}}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class ih extends ei{constructor(e,t){super();let i=this,r=null,n=1,s=null,o="local-floor",a=1,l=null,c=null,f=null,u=null,h=null,p=null,x=typeof XRWebGLBinding<"u",y=new th,d={},m=t.getContextAttributes(),b=null,E=null,M=[],I=[],L=new J,g=null,S=null,N=new Xt;N.viewport=new St;let W=new Xt;W.viewport=new St;let U=[N,W],X=new Bl,ne=null,C=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(te){let ce=M[te];if(ce===void 0)ce=new ls,M[te]=ce;return ce.getTargetRaySpace()},this.getControllerGrip=function(te){let ce=M[te];if(ce===void 0)ce=new ls,M[te]=ce;return ce.getGripSpace()},this.getHand=function(te){let ce=M[te];if(ce===void 0)ce=new ls,M[te]=ce;return ce.getHandSpace()};function Q(te){let ce=I.indexOf(te.inputSource);if(ce===-1)return;let He=M[ce];if(He!==void 0)He.update(te.inputSource,te.frame,l||s),He.dispatchEvent({type:te.type,data:te.inputSource})}function ie(){r.removeEventListener("select",Q),r.removeEventListener("selectstart",Q),r.removeEventListener("selectend",Q),r.removeEventListener("squeeze",Q),r.removeEventListener("squeezestart",Q),r.removeEventListener("squeezeend",Q),r.removeEventListener("end",ie),r.removeEventListener("inputsourceschange",H);for(let te=0;te<M.length;te++){let ce=I[te];if(ce===null)continue;I[te]=null,M[te].disconnect(ce)}ne=null,C=null,y.reset();for(let te in d)delete d[te];if(e.setRenderTarget(b),h=null,u=null,f=null,r=null,E=null,Fe.stop(),i.isPresenting=!1,e.setPixelRatio(g),e.setSize(L.width,L.height,!1),S!==null){let te=S.camera;te.fov=S.fov,te.zoom=S.zoom,te.updateProjectionMatrix(),S=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(te){if(n=te,i.isPresenting===!0)Te("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(te){if(o=te,i.isPresenting===!0)Te("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||s},this.setReferenceSpace=function(te){l=te},this.getBaseLayer=function(){return u!==null?u:h},this.getBinding=function(){if(f===null&&x)f=new XRWebGLBinding(r,t);return f},this.getFrame=function(){return p},this.getSession=function(){return r},this.setSession=async function(te){if(r=te,r!==null){if(b=e.getRenderTarget(),r.addEventListener("select",Q),r.addEventListener("selectstart",Q),r.addEventListener("selectend",Q),r.addEventListener("squeeze",Q),r.addEventListener("squeezestart",Q),r.addEventListener("squeezeend",Q),r.addEventListener("end",ie),r.addEventListener("inputsourceschange",H),m.xrCompatible!==!0)await t.makeXRCompatible();if(g=e.getPixelRatio(),e.getSize(L),!(x&&("createProjectionLayer"in XRWebGLBinding.prototype))){let He={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:n};h=new XRWebGLLayer(r,t,He),r.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),E=new Rt(h.framebufferWidth,h.framebufferHeight,{format:li,type:Zt,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{let He=null,ze=null,Ke=null;if(m.depth)Ke=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,He=m.stencil?Ni:Pi,ze=m.stencil?tr:jt;let Le={colorFormat:t.RGBA8,depthFormat:Ke,scaleFactor:n};f=this.getBinding(),u=f.createProjectionLayer(Le),r.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),E=new Rt(u.textureWidth,u.textureHeight,{format:li,type:Zt,depthTexture:new Oi(u.textureWidth,u.textureHeight,ze,void 0,void 0,void 0,void 0,void 0,void 0,He),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(a),l=null,s=await r.requestReferenceSpace(o),Fe.setContext(r),Fe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function H(te){for(let ce=0;ce<te.removed.length;ce++){let He=te.removed[ce],ze=I.indexOf(He);if(ze>=0)I[ze]=null,M[ze].disconnect(He)}for(let ce=0;ce<te.added.length;ce++){let He=te.added[ce],ze=I.indexOf(He);if(ze===-1){for(let Le=0;Le<M.length;Le++)if(Le>=I.length){I.push(He),ze=Le;break}else if(I[Le]===null){I[Le]=He,ze=Le;break}if(ze===-1)break}let Ke=M[ze];if(Ke)Ke.connect(He)}}function _e(te,ce){if(ce===null)te.matrixWorld.copy(te.matrix);else te.matrixWorld.multiplyMatrices(ce.matrixWorld,te.matrix);te.matrixWorldInverse.copy(te.matrixWorld).invert()}this.updateCamera=function(te){if(r===null)return;let{near:ce,far:He}=te;if(y.texture!==null){if(y.depthNear>0)ce=y.depthNear;if(y.depthFar>0)He=y.depthFar}if(X.near=W.near=N.near=ce,X.far=W.far=N.far=He,ne!==X.near||C!==X.far)r.updateRenderState({depthNear:X.near,depthFar:X.far}),ne=X.near,C=X.far;X.layers.mask=te.layers.mask|6,N.layers.mask=X.layers.mask&-5,W.layers.mask=X.layers.mask&-3;let ze=te.parent,Ke=X.cameras;_e(X,ze);for(let Le=0;Le<Ke.length;Le++)_e(Ke[Le],ze);if(X.projectionMatrix.copy(N.projectionMatrix),X.projectionMatrixInverse.copy(N.projectionMatrixInverse),S===null&&te.isPerspectiveCamera)S={camera:te,fov:te.fov,zoom:te.zoom};j(te,X,ze)};function j(te,ce,He){if(He===null)te.matrix.copy(ce.matrixWorld);else te.matrix.copy(He.matrixWorld),te.matrix.invert(),te.matrix.multiply(ce.matrixWorld);if(te.matrix.decompose(te.position,te.quaternion,te.scale),te.updateMatrixWorld(!0),te.projectionMatrix.copy(ce.projectionMatrix),te.projectionMatrixInverse.copy(ce.projectionMatrixInverse),te.isPerspectiveCamera)te.fov=hn*2*Math.atan(1/te.projectionMatrix.elements[5]),te.zoom=1}this.getCamera=function(){return X},this.getFoveation=function(){if(u===null&&h===null)return;return a},this.setFoveation=function(te){if(a=te,u!==null)u.fixedFoveation=te;if(h!==null&&h.fixedFoveation!==void 0)h.fixedFoveation=te},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(X)},this.getCameraTexture=function(te){return d[te]};let se=null;function de(te,ce){if(c=ce.getViewerPose(l||s),p=ce,c!==null){let He=c.views;if(h!==null)e.setRenderTargetFramebuffer(E,h.framebuffer),e.setRenderTarget(E);let ze=!1;if(He.length!==X.cameras.length)X.cameras.length=0,ze=!0;for(let mt=0;mt<He.length;mt++){let nt=He[mt],ot=null;if(h!==null)ot=h.getViewport(nt);else{let ye=f.getViewSubImage(u,nt);if(ot=ye.viewport,mt===0)e.setRenderTargetTextures(E,ye.colorTexture,ye.depthStencilTexture),e.setRenderTarget(E)}let ae=U[mt];if(ae===void 0)ae=new Xt,ae.layers.enable(mt),ae.viewport=new St,U[mt]=ae;if(ae.matrix.fromArray(nt.transform.matrix),ae.matrix.decompose(ae.position,ae.quaternion,ae.scale),ae.projectionMatrix.fromArray(nt.projectionMatrix),ae.projectionMatrixInverse.copy(ae.projectionMatrix).invert(),ae.viewport.set(ot.x,ot.y,ot.width,ot.height),mt===0)X.matrix.copy(ae.matrix),X.matrix.decompose(X.position,X.quaternion,X.scale);if(ze===!0)X.cameras.push(ae)}let Ke=r.enabledFeatures;if(Ke&&Ke.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&x){f=i.getBinding();let mt=f.getDepthInformation(He[0]);if(mt&&mt.isValid&&mt.texture)y.init(mt,r.renderState)}if(Ke&&Ke.includes("camera-access")&&x){e.state.unbindTexture(),f=i.getBinding();for(let mt=0;mt<He.length;mt++){let nt=He[mt].camera;if(nt){let ot=d[nt];if(!ot)ot=new Es,d[nt]=ot;let ae=f.getCameraImage(nt);ot.sourceTexture=ae}}}}for(let He=0;He<M.length;He++){let ze=I[He],Ke=M[He];if(ze!==null&&Ke!==void 0)Ke.update(ze,ce,l||s)}if(se)se(te,ce);if(ce.detectedPlanes)i.dispatchEvent({type:"planesdetected",data:ce});p=null}let Fe=new Ol;Fe.setAnimationLoop(de),this.setAnimationLoop=function(te){se=te},this.dispose=function(){}}}var f_=new Je,Dm=new et;Dm.set(-1,0,0,0,1,0,0,0,1);function Nm(e,t){function i(d,m){if(d.matrixAutoUpdate===!0)d.updateMatrix();m.value.copy(d.matrix)}function r(d,m){if(m.color.getRGB(d.fogColor.value,wl(e)),m.isFog)d.fogNear.value=m.near,d.fogFar.value=m.far;else if(m.isFogExp2)d.fogDensity.value=m.density}function n(d,m,b,E,M){if(m.isNodeMaterial)m.uniformsNeedUpdate=!1;else if(m.isMeshBasicMaterial)s(d,m);else if(m.isMeshLambertMaterial){if(s(d,m),m.envMap)d.envMapIntensity.value=m.envMapIntensity}else if(m.isMeshToonMaterial)s(d,m),u(d,m);else if(m.isMeshPhongMaterial){if(s(d,m),f(d,m),m.envMap)d.envMapIntensity.value=m.envMapIntensity}else if(m.isMeshStandardMaterial){if(s(d,m),h(d,m),m.isMeshPhysicalMaterial)p(d,m,M)}else if(m.isMeshMatcapMaterial)s(d,m),x(d,m);else if(m.isMeshDepthMaterial)s(d,m);else if(m.isMeshDistanceMaterial)s(d,m),y(d,m);else if(m.isMeshNormalMaterial)s(d,m);else if(m.isLineBasicMaterial){if(o(d,m),m.isLineDashedMaterial)a(d,m)}else if(m.isPointsMaterial)l(d,m,b,E);else if(m.isSpriteMaterial)c(d,m);else if(m.isShadowMaterial)d.color.value.copy(m.color),d.opacity.value=m.opacity;else if(m.isShaderMaterial)m.uniformsNeedUpdate=!1}function s(d,m){if(d.opacity.value=m.opacity,m.color)d.diffuse.value.copy(m.color);if(m.emissive)d.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity);if(m.map)d.map.value=m.map,i(m.map,d.mapTransform);if(m.alphaMap)d.alphaMap.value=m.alphaMap,i(m.alphaMap,d.alphaMapTransform);if(m.bumpMap){if(d.bumpMap.value=m.bumpMap,i(m.bumpMap,d.bumpMapTransform),d.bumpScale.value=m.bumpScale,m.side===Ot)d.bumpScale.value*=-1}if(m.normalMap){if(d.normalMap.value=m.normalMap,i(m.normalMap,d.normalMapTransform),d.normalScale.value.copy(m.normalScale),m.side===Ot)d.normalScale.value.negate()}if(m.displacementMap)d.displacementMap.value=m.displacementMap,i(m.displacementMap,d.displacementMapTransform),d.displacementScale.value=m.displacementScale,d.displacementBias.value=m.displacementBias;if(m.emissiveMap)d.emissiveMap.value=m.emissiveMap,i(m.emissiveMap,d.emissiveMapTransform);if(m.specularMap)d.specularMap.value=m.specularMap,i(m.specularMap,d.specularMapTransform);if(m.alphaTest>0)d.alphaTest.value=m.alphaTest;let b=t.get(m),{envMap:E,envMapRotation:M}=b;if(E){if(d.envMap.value=E,d.envMapRotation.value.setFromMatrix4(f_.makeRotationFromEuler(M)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1)d.envMapRotation.value.premultiply(Dm);d.reflectivity.value=m.reflectivity,d.ior.value=m.ior,d.refractionRatio.value=m.refractionRatio}if(m.lightMap)d.lightMap.value=m.lightMap,d.lightMapIntensity.value=m.lightMapIntensity,i(m.lightMap,d.lightMapTransform);if(m.aoMap)d.aoMap.value=m.aoMap,d.aoMapIntensity.value=m.aoMapIntensity,i(m.aoMap,d.aoMapTransform)}function o(d,m){if(d.diffuse.value.copy(m.color),d.opacity.value=m.opacity,m.map)d.map.value=m.map,i(m.map,d.mapTransform)}function a(d,m){d.dashSize.value=m.dashSize,d.totalSize.value=m.dashSize+m.gapSize,d.scale.value=m.scale}function l(d,m,b,E){if(d.diffuse.value.copy(m.color),d.opacity.value=m.opacity,d.size.value=m.size*b,d.scale.value=E*0.5,m.map)d.map.value=m.map,i(m.map,d.uvTransform);if(m.alphaMap)d.alphaMap.value=m.alphaMap,i(m.alphaMap,d.alphaMapTransform);if(m.alphaTest>0)d.alphaTest.value=m.alphaTest}function c(d,m){if(d.diffuse.value.copy(m.color),d.opacity.value=m.opacity,d.rotation.value=m.rotation,m.map)d.map.value=m.map,i(m.map,d.mapTransform);if(m.alphaMap)d.alphaMap.value=m.alphaMap,i(m.alphaMap,d.alphaMapTransform);if(m.alphaTest>0)d.alphaTest.value=m.alphaTest}function f(d,m){d.specular.value.copy(m.specular),d.shininess.value=Math.max(m.shininess,0.0001)}function u(d,m){if(m.gradientMap)d.gradientMap.value=m.gradientMap}function h(d,m){if(d.metalness.value=m.metalness,m.metalnessMap)d.metalnessMap.value=m.metalnessMap,i(m.metalnessMap,d.metalnessMapTransform);if(d.roughness.value=m.roughness,m.roughnessMap)d.roughnessMap.value=m.roughnessMap,i(m.roughnessMap,d.roughnessMapTransform);if(m.envMap)d.envMapIntensity.value=m.envMapIntensity}function p(d,m,b){if(d.ior.value=m.ior,m.diffuseRoughness>0){if(d.diffuseRoughness.value=m.diffuseRoughness,m.diffuseRoughnessMap)d.diffuseRoughnessMap.value=m.diffuseRoughnessMap,i(m.diffuseRoughnessMap,d.diffuseRoughnessMapTransform)}if(m.sheen>0){if(d.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),d.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap)d.sheenColorMap.value=m.sheenColorMap,i(m.sheenColorMap,d.sheenColorMapTransform);if(m.sheenRoughnessMap)d.sheenRoughnessMap.value=m.sheenRoughnessMap,i(m.sheenRoughnessMap,d.sheenRoughnessMapTransform)}if(m.clearcoat>0){if(d.clearcoat.value=m.clearcoat,d.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap)d.clearcoatMap.value=m.clearcoatMap,i(m.clearcoatMap,d.clearcoatMapTransform);if(m.clearcoatRoughnessMap)d.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,i(m.clearcoatRoughnessMap,d.clearcoatRoughnessMapTransform);if(m.clearcoatNormalMap){if(d.clearcoatNormalMap.value=m.clearcoatNormalMap,i(m.clearcoatNormalMap,d.clearcoatNormalMapTransform),d.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Ot)d.clearcoatNormalScale.value.negate()}}if(m.dispersion>0)d.dispersion.value=m.dispersion;if(m.retroreflectivity>0)d.retroreflectivity.value=m.retroreflectivity;if(m.iridescence>0){if(d.iridescence.value=m.iridescence,d.iridescenceIOR.value=m.iridescenceIOR,d.iridescenceThicknessMinimum.value=m.iridescenceThicknessMinimum,d.iridescenceThicknessMaximum.value=m.iridescenceThicknessMaximum,m.iridescenceMap)d.iridescenceMap.value=m.iridescenceMap,i(m.iridescenceMap,d.iridescenceMapTransform);if(m.iridescenceThicknessMap)d.iridescenceThicknessMap.value=m.iridescenceThicknessMap,i(m.iridescenceThicknessMap,d.iridescenceThicknessMapTransform)}if(m.transmission>0){if(d.transmission.value=m.transmission,d.transmissionSamplerMap.value=b.texture,d.transmissionSamplerSize.value.set(b.width,b.height),m.transmissionMap)d.transmissionMap.value=m.transmissionMap,i(m.transmissionMap,d.transmissionMapTransform);if(d.thickness.value=m.thickness,m.thicknessMap)d.thicknessMap.value=m.thicknessMap,i(m.thicknessMap,d.thicknessMapTransform);d.attenuationDistance.value=m.attenuationDistance,d.attenuationColor.value.copy(m.attenuationColor)}if(m.anisotropy>0){if(d.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap)d.anisotropyMap.value=m.anisotropyMap,i(m.anisotropyMap,d.anisotropyMapTransform)}if(d.specularIntensity.value=m.specularIntensity,d.specularColor.value.copy(m.specularColor),m.specularColorMap)d.specularColorMap.value=m.specularColorMap,i(m.specularColorMap,d.specularColorMapTransform);if(m.specularIntensityMap)d.specularIntensityMap.value=m.specularIntensityMap,i(m.specularIntensityMap,d.specularIntensityMapTransform)}function x(d,m){if(m.matcap)d.matcap.value=m.matcap}function y(d,m){let b=t.get(m).light;d.referencePosition.value.setFromMatrixPosition(b.matrixWorld),d.nearDistance.value=b.shadow.camera.near,d.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:n}}function Um(e,t,i,r){let n={},s={};function o(b,E){let M=E.program;r.uniformBlockBinding(b,M,n[b.id])}function a(b,E){let M=n[b.id];if(M===void 0)x(b),M=l(b),n[b.id]=M,b.addEventListener("dispose",d);let I=E.program;r.updateUBOMapping(b,I);let L=t.render.frame;if(s[b.id]!==L)c(b),s[b.id]=L}function l(b){let E=e.createBuffer(),{__size:M,usage:I}=b;return e.bindBuffer(e.UNIFORM_BUFFER,E),e.bufferData(e.UNIFORM_BUFFER,M,I),e.bindBuffer(e.UNIFORM_BUFFER,null),E}function c(b){let E=n[b.id],{uniforms:M,__cache:I}=b;e.bindBuffer(e.UNIFORM_BUFFER,E);for(let L=0,g=M.length;L<g;L++){let S=M[L];if(Array.isArray(S))for(let N=0,W=S.length;N<W;N++)f(S[N],L,N,I);else f(S,L,0,I)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function f(b,E,M,I){if(h(b,E,M,I)===!0){let{__offset:L,value:g}=b;if(Array.isArray(g)){let S=0;for(let N=0;N<g.length;N++){let W=g[N],U=y(W,!0);u(W,b.__data,S),S+=U.storage/Float32Array.BYTES_PER_ELEMENT}}else u(g,b.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,L,b.__data)}}function u(b,E,M){if(typeof b==="number"||typeof b==="boolean")E[M]=b;else if(b.isMatrix3)E[M]=b.elements[0],E[M+1]=b.elements[1],E[M+2]=b.elements[2],E[M+3]=0,E[M+4]=b.elements[3],E[M+5]=b.elements[4],E[M+6]=b.elements[5],E[M+7]=0,E[M+8]=b.elements[6],E[M+9]=b.elements[7],E[M+10]=b.elements[8],E[M+11]=0;else if(ArrayBuffer.isView(b))E.set(b.subarray(0,E.length-M),M);else b.toArray(E,M)}function h(b,E,M,I){let L=b.value,g=E+"_"+M;if(Array.isArray(L)){if(I[g]===void 0)I[g]=[];let S=I[g],N=!1;for(let W=0;W<L.length;W++)if(p(L[W],S,W)===!0)N=!0;return N}return p(L,I,g)}function p(b,E,M){if(E[M]===void 0){if(typeof b==="number"||typeof b==="boolean")E[M]=b;else if(ArrayBuffer.isView(b))E[M]=b.slice();else E[M]=b.clone();return!0}else{let I=E[M];if(typeof b==="number"||typeof b==="boolean"){if(I!==b)return E[M]=b,!0}else if(ArrayBuffer.isView(b))return!0;else if(I.equals(b)===!1)return I.copy(b),!0}return!1}function x(b){let E=b.uniforms,M=0,I=16;for(let g=0,S=E.length;g<S;g++){let N=Array.isArray(E[g])?E[g]:[E[g]];for(let W=0,U=N.length;W<U;W++){let X=N[W],ne=Array.isArray(X.value)?X.value:[X.value],C=Array.isArray(E[g])||Array.isArray(X.value),Q=M;for(let H=0,_e=ne.length;H<_e;H++){let j=ne[H],se=y(j,C),de=M%I,Fe=de%se.boundary,te=de+Fe;if(M+=Fe,te!==0&&I-te<se.storage)M+=I-te;if(H===0)Q=M;M+=se.storage}let ie=X.type==="int"?Int32Array:X.type==="uint"?Uint32Array:Float32Array;X.__data=new ie((M-Q)/Float32Array.BYTES_PER_ELEMENT),X.__offset=Q}}let L=M%I;if(L>0)M+=I-L;return b.__size=M,b.__cache={},this}function y(b,E){let M={boundary:0,storage:0};if(typeof b==="number"||typeof b==="boolean")M.boundary=4,M.storage=4;else if(b.isVector2)M.boundary=8,M.storage=8;else if(b.isVector3||b.isColor)M.boundary=16,M.storage=12;else if(b.isVector4)M.boundary=16,M.storage=16;else if(b.isMatrix3)M.boundary=16,M.storage=48;else if(b.isMatrix4)M.boundary=16,M.storage=64;else if(b.isTexture)Te("WebGLRenderer: Texture samplers can not be part of an uniforms group.");else if(ArrayBuffer.isView(b))M.boundary=16,M.storage=b.byteLength;else Te("WebGLRenderer: Unsupported uniform value type.",b);if(E===!0)M.boundary=16,M.storage=Math.ceil(M.storage/16)*16;return M}function d(b){let E=b.target;E.removeEventListener("dispose",d),e.deleteBuffer(n[E.id]),delete n[E.id],delete s[E.id]}function m(){for(let b in n)e.deleteBuffer(n[b]);n={},s={}}return{bind:o,update:a,dispose:m}}var d_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),xr=null;function Fm(){if(xr===null)xr=new pr(d_,16,16,Ui,Pt),xr.name="DFG_LUT",xr.minFilter=Gt,xr.magFilter=Gt,xr.wrapS=pi,xr.wrapT=pi,xr.generateMipmaps=!1,xr.needsUpdate=!0;return xr}class kl{constructor(e={}){let{canvas:t=tc(),context:i=null,depth:r=!0,stencil:n=!1,alpha:s=!1,antialias:o=!1,premultipliedAlpha:a=!0,preserveDrawingBuffer:l=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:u=!1,outputBufferType:h=Zt}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=s;let x=h,y=new Set([Jn,Zn,tn]),d=new Set([Zt,jt,vr,tr,Xn,qn]),m=new Uint32Array(4),b=new Int32Array(4),E={textures:[],min:[],max:[],resolution:[]},M=null,I=null,L=[],g=[],S=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Di,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let N=this,W=!1,U=null,X=null,ne=null,C=null;this._outputColorSpace=Lt;let Q=0,ie=0,H=null,_e=-1,j=null,se=new St,de=new St,Fe=null,te=new ge(0),ce=0,{width:He,height:ze}=t,Ke=1,Le=null,yt=null,mt=new St(0,0,He,ze),nt=new St(0,0,He,ze),ot=!1,ae=new Ki,ye=new bs,ve=!1,Be=!1,Ie=new Je,Ze=new R,Ce=new St,dt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},gt=!1;function Qe(){return H===null?Ke:1}let B=i;function Ut(v,O){return t.getContext(v,O)}let at,Ft,Ee,bt,tt,lt,qt,A,_,G,fe,le,me,be,K,oe,Me,F,re,ee,pe,xe,we;try{let v={alpha:!0,depth:r,stencil:n,antialias:o,premultipliedAlpha:a,preserveDrawingBuffer:l,powerPreference:c,failIfMajorPerformanceCaveat:f};if("setAttribute"in t)t.setAttribute("data-engine",`three.js r${ks}`);if(t.addEventListener("webglcontextlost",Ae,!1),t.addEventListener("webglcontextrestored",it,!1),t.addEventListener("webglcontextcreationerror",ut,!1),B===null){if(B=Ut("webgl2",v),B===null)if(Ut("webgl2"))throw Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.");else throw Error("THREE.WebGLRenderer: Error creating WebGL context.")}$e()}catch(v){throw t.removeEventListener("webglcontextlost",Ae,!1),t.removeEventListener("webglcontextrestored",it,!1),t.removeEventListener("webglcontextcreationerror",ut,!1),Ge("WebGLRenderer: "+v.message),v}function $e(){if(at=new kp(B),at.init(),pe=new eh(B,at),Ft=new Np(B,at,e,pe),Ee=new Im(B,at),Ft.reversedDepthBuffer&&u)Ee.buffers.depth.setReversed(!0);X=B.createFramebuffer(),ne=B.createFramebuffer(),C=B.createFramebuffer(),bt=new qp(B),tt=new ym,lt=new Lm(B,at,Ee,tt,Ft,pe,bt),qt=new Hp(N),A=new Ju(B),xe=new Lp(B,A),_=new Wp(B,A,bt,xe),G=new Zp(B,_,A,xe,bt),F=new Yp(B,Ft,lt),K=new Up(tt),fe=new vm(N,qt,at,Ft,xe,K),le=new Nm(N,tt),me=new bm,be=new wm(at),Me=new Ip(N,qt,Ee,G,p,a),oe=new Pm(N,G,Ft),we=new Um(B,bt,Ft,Ee),re=new Dp(B,at,bt),ee=new Xp(B,at,bt),bt.programs=fe.programs,N.capabilities=Ft,N.extensions=at,N.properties=tt,N.renderLists=me,N.shadowMap=oe,N.state=Ee,N.info=bt}if(x!==Zt)S=new Jp(x,t.width,t.height,o,r,n);let qe=new ih(N,B);this.xr=qe,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){let v=at.get("WEBGL_lose_context");if(v)v.loseContext()},this.forceContextRestore=function(){let v=at.get("WEBGL_lose_context");if(v)v.restoreContext()},this.getPixelRatio=function(){return Ke},this.setPixelRatio=function(v){if(v===void 0)return;Ke=v,this.setSize(He,ze,!1)},this.getSize=function(v){return v.set(He,ze)},this.setSize=function(v,O,Y=!0){if(qe.isPresenting){Te("WebGLRenderer: Can't change size while VR device is presenting.");return}if(He=v,ze=O,t.width=Math.floor(v*Ke),t.height=Math.floor(O*Ke),Y===!0)t.style.width=v+"px",t.style.height=O+"px";if(S!==null)S.setSize(t.width,t.height);this.setViewport(0,0,v,O)},this.getDrawingBufferSize=function(v){return v.set(He*Ke,ze*Ke).floor()},this.setDrawingBufferSize=function(v,O,Y){He=v,ze=O,Ke=Y,t.width=Math.floor(v*Y),t.height=Math.floor(O*Y),this.setViewport(0,0,v,O)},this.setEffects=function(v){if(x===Zt){Ge("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(v){for(let O=0;O<v.length;O++)if(v[O].isOutputPass===!0){Te("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}S.setEffects(v||[])},this.getCurrentViewport=function(v){return v.copy(se)},this.getViewport=function(v){return v.copy(mt)},this.setViewport=function(v,O,Y,V){if(v.isVector4)mt.set(v.x,v.y,v.z,v.w);else mt.set(v,O,Y,V);Ee.viewport(se.copy(mt).multiplyScalar(Qe()).round())},this.getScissor=function(v){return v.copy(nt)},this.setScissor=function(v,O,Y,V){if(v.isVector4)nt.set(v.x,v.y,v.z,v.w);else nt.set(v,O,Y,V);Ee.scissor(de.copy(nt).multiplyScalar(Qe()).round())},this.getScissorTest=function(){return ot},this.setScissorTest=function(v){Ee.setScissorTest(ot=v)},this.setOpaqueSort=function(v){Le=v},this.setTransparentSort=function(v){yt=v},this.getClearColor=function(v){return v.copy(Me.getClearColor())},this.setClearColor=function(){Me.setClearColor(...arguments)},this.getClearAlpha=function(){return Me.getClearAlpha()},this.setClearAlpha=function(){Me.setClearAlpha(...arguments)},this.clear=function(v=!0,O=!0,Y=!0){let V=0;if(v){let k=!1;if(H!==null){let Se=H.texture.format;k=y.has(Se)}if(k){let Se=H.texture.type,ke=d.has(Se),w=Me.getClearColor(),P=Me.getClearAlpha(),{r:D,g:T,b:Z}=w;if(ke)m[0]=D,m[1]=T,m[2]=Z,m[3]=P,B.clearBufferuiv(B.COLOR,0,m);else b[0]=D,b[1]=T,b[2]=Z,b[3]=P,B.clearBufferiv(B.COLOR,0,b)}else V|=B.COLOR_BUFFER_BIT}if(O)V|=B.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0);if(Y)V|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295);if(V!==0)B.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(v){v.setRenderer(this),U=v},this.dispose=function(){t.removeEventListener("webglcontextlost",Ae,!1),t.removeEventListener("webglcontextrestored",it,!1),t.removeEventListener("webglcontextcreationerror",ut,!1),Me.dispose(),me.dispose(),be.dispose(),lt.dispose(),tt.dispose(),qt.dispose(),G.dispose(),_.dispose(),xe.dispose(),we.dispose(),fe.dispose(),qe.dispose(),qe.removeEventListener("sessionstart",ya),qe.removeEventListener("sessionend",Ma),ar.stop()};function Ae(v){v.preventDefault(),cn("WebGLRenderer: Context Lost."),W=!0}function it(){cn("WebGLRenderer: Context Restored."),W=!1;let v=bt.autoReset,O=oe.enabled,Y=oe.autoUpdate,V=oe.needsUpdate,k=oe.type;$e(),bt.autoReset=v,oe.enabled=O,oe.autoUpdate=Y,oe.needsUpdate=V,oe.type=k}function ut(v){Ge("WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function Re(v){let O=v.target;O.removeEventListener("dispose",Re),Et(O)}function Et(v){Qt(v),tt.remove(v)}function Qt(v){let O=tt.get(v).programs;if(O!==void 0){if(O.forEach(function(Y){fe.releaseProgram(Y)}),v.isShaderMaterial)fe.releaseShaderCache(v)}}this.renderBufferDirect=function(v,O,Y,V,k,Se){if(O===null)O=dt;let ke=k.isMesh&&k.matrixWorld.determinantAffine()<0,w=$r(v,O,Y,V,k);Ee.setMaterial(V,ke);let P=Y.index,D=1;if(V.wireframe===!0){if(P=_.getWireframeAttribute(Y),P===void 0)return;D=2}let T=Y.drawRange,Z=Y.attributes.position,q=T.start*D,z=(T.start+T.count)*D;if(Se!==null)q=Math.max(q,Se.start*D),z=Math.min(z,(Se.start+Se.count)*D);if(P!==null)q=Math.max(q,0),z=Math.min(z,P.count);else if(Z!==void 0&&Z!==null)q=Math.max(q,0),z=Math.min(z,Z.count);let ue=z-q;if(ue<0||ue===1/0)return;xe.setup(k,V,w,Y,P);let Xe,Oe=re;if(P!==null)Xe=A.get(P),Oe=ee,Oe.setIndex(Xe);if(k.isMesh)if(V.wireframe===!0)Ee.setLineWidth(V.wireframeLinewidth*Qe()),Oe.setMode(B.LINES);else Oe.setMode(B.TRIANGLES);else if(k.isLine){let Ne=V.linewidth;if(Ne===void 0)Ne=1;if(Ee.setLineWidth(Ne*Qe()),k.isLineSegments)Oe.setMode(B.LINES);else if(k.isLineLoop)Oe.setMode(B.LINE_LOOP);else Oe.setMode(B.LINE_STRIP)}else if(k.isPoints)Oe.setMode(B.POINTS);else if(k.isSprite)Oe.setMode(B.TRIANGLES);if(k.isBatchedMesh)if(!at.get("WEBGL_multi_draw")){let{_multiDrawStarts:Ne,_multiDrawCounts:he,_multiDrawCount:Ue}=k,We=P?A.get(P).bytesPerElement:1,vt=tt.get(V).currentProgram.getUniforms();for(let De=0;De<Ue;De++)vt.setValue(B,"_gl_DrawID",De),Oe.render(Ne[De]/We,he[De])}else Oe.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else if(k.isInstancedMesh)Oe.renderInstances(q,ue,k.count);else if(Y.isInstancedBufferGeometry){let Ne=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,he=Math.min(Y.instanceCount,Ne);Oe.renderInstances(q,ue,he)}else Oe.render(q,ue)};function Hi(v,O,Y,V){if(U!==null&&v.isNodeMaterial)U.setObject(V,v);if(ve===!0)K.setState(v,Y,!1);if(v.transparent===!0&&v.side===xi&&v.forceSinglePass===!1)v.side=Ot,v.needsUpdate=!0,Cr(v,O,V),v.side=ki,v.needsUpdate=!0,Cr(v,O,V),v.side=xi;else Cr(v,O,V)}this.compile=function(v,O,Y=null){if(Y===null)Y=v;if(U!==null)U.renderStart(v,O,Y);if(I=be.get(Y),I.init(O),g.push(I),Y.traverseVisible(function(k){if(k.isLight&&k.layers.test(O.layers)){if(I.pushLight(k),k.castShadow)I.pushShadow(k)}}),v!==Y)v.traverseVisible(function(k){if(k.isLight&&k.layers.test(O.layers)){if(I.pushLight(k),k.castShadow)I.pushShadow(k)}});if(I.setupLights(),U!==null)U.updateLights(I.state.lightsArray);if(Be=this.localClippingEnabled,ve=K.init(this.clippingPlanes,Be),ve===!0)K.setGlobalState(this.clippingPlanes,O);if(U!==null)oe.render(I.state.shadowsArray,Y,O);let V=new Set;if(v.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;let Se=k.material;if(Se)if(Array.isArray(Se))for(let ke=0;ke<Se.length;ke++){let w=Se[ke];Hi(w,Y,O,k),V.add(w)}else Hi(Se,Y,O,k),V.add(Se)}),I=g.pop(),U!==null)U.renderEnd();return V},this.compileAsync=function(v,O,Y=null){let V=this.compile(v,O,Y);return new Promise((k)=>{function Se(){if(V.forEach(function(ke){let P=tt.get(ke).currentProgram;if(P===void 0||P.isReady())V.delete(ke)}),V.size===0){k(v);return}setTimeout(Se,10)}if(at.get("KHR_parallel_shader_compile")!==null)Se();else setTimeout(Se,10)})};let va=null;function Jr(v){if(va)va(v)}function ya(){ar.stop()}function Ma(){ar.start()}let ar=new Ol;if(ar.setAnimationLoop(Jr),typeof self<"u")ar.setContext(self);this.setAnimationLoop=function(v){va=v,qe.setAnimationLoop(v),v===null?ar.stop():ar.start()},qe.addEventListener("sessionstart",ya),qe.addEventListener("sessionend",Ma),this.render=function(v,O){if(O!==void 0&&O.isCamera!==!0){Ge("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(W===!0)return;if(U!==null)U.renderStart(v,O);let Y=qe.enabled===!0&&qe.isPresenting===!0,V=S!==null&&(H===null||Y)&&S.begin(N,H);if(v.matrixWorldAutoUpdate===!0)v.updateMatrixWorld();if(O.parent===null&&O.matrixWorldAutoUpdate===!0)O.updateMatrixWorld();if(qe.enabled===!0&&qe.isPresenting===!0&&(S===null||S.isCompositing()===!1)){if(qe.cameraAutoUpdate===!0)qe.updateCamera(O);O=qe.getCamera()}if(v.isScene===!0)v.onBeforeRender(N,v,O,H);if(I=be.get(v,g.length),I.init(O),I.state.textureUnits=lt.getTextureUnits(),g.push(I),Ie.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),O.isArrayCamera)ye.setFromArrayCamera(O);else ae.setFromProjectionMatrix(Ie,ci,O.reversedDepth);if(Be=this.localClippingEnabled,ve=K.init(this.clippingPlanes,Be),M=me.get(v,L.length),M.init(),L.push(M),this.info.render.frame++,qe.enabled===!0&&qe.isPresenting===!0){let ke=N.xr.getDepthSensingMesh();if(ke!==null)oi(ke,O,-1/0,N.sortObjects)}if(oi(v,O,0,N.sortObjects),M.finish(),U!==null)U.updateLights(I.state.lightsArray);if(N.sortObjects===!0)M.sort(Le,yt);if(gt=qe.enabled===!1||qe.isPresenting===!1||qe.hasDepthSensing()===!1,gt)Me.addToRenderList(M,v);if(this.info.autoReset===!0)this.info.reset();if(ve===!0)K.beginShadows();let k=I.state.shadowsArray;if(oe.render(k,v,O),ve===!0)K.endShadows();if((V&&S.hasRenderPass())===!1){let ke=M.opaque,w=M.transmissive;if(I.setupLights(),O.isArrayCamera){let P=O.cameras;if(w.length>0)for(let D=0,T=P.length;D<T;D++){let Z=P[D];Fs(ke,w,v,Z)}if(gt)Me.render(v);for(let D=0,T=P.length;D<T;D++){let Z=P[D];Us(M,v,Z,Z.viewport)}}else{if(w.length>0)Fs(ke,w,v,O);if(gt)Me.render(v);Us(M,v,O)}}if(H!==null&&ie===0)lt.updateMultisampleRenderTarget(H),lt.updateRenderTargetMipmap(H);if(V)S.end(N);if(v.isScene===!0)v.onAfterRender(N,v,O);if(xe.resetDefaultState(),_e=-1,j=null,g.pop(),g.length>0){if(I=g[g.length-1],lt.setTextureUnits(I.state.textureUnits),ve===!0)K.setGlobalState(N.clippingPlanes,I.state.camera)}else I=null;if(L.pop(),L.length>0)M=L[L.length-1];else M=null;if(U!==null)U.renderEnd()};function oi(v,O,Y,V){if(v.visible===!1)return;if(v.layers.test(O.layers)){if(v.isGroup)Y=v.renderOrder;else if(v.isLOD){if(v.autoUpdate===!0)v.update(O)}else if(v.isLight){if(I.pushLight(v),v.castShadow)I.pushShadow(v)}else if(v.isSprite){let ke=O.isArrayCamera?ye:ae;if(!v.frustumCulled||v.intersectsFrustum(ke)){if(V)Ce.setFromMatrixPosition(v.matrixWorld).applyMatrix4(Ie);let w=G.update(v),P=v.material;if(P.visible)M.push(v,w,P,Y,Ce.z,null,O)}}else if(v.isMesh||v.isLine||v.isPoints){let ke=O.isArrayCamera?ye:ae;if(!v.frustumCulled||v.intersectsFrustum(ke)){let w=G.update(v),P=v.material;if(V){if(v.boundingSphere!==void 0){if(v.boundingSphere===null)v.computeBoundingSphere();Ce.copy(v.boundingSphere.center)}else{if(w.boundingSphere===null)w.computeBoundingSphere();Ce.copy(w.boundingSphere.center)}Ce.applyMatrix4(v.matrixWorld).applyMatrix4(Ie)}if(Array.isArray(P)){let D=w.groups;for(let T=0,Z=D.length;T<Z;T++){let q=D[T],z=P[q.materialIndex];if(z&&z.visible)M.push(v,w,z,Y,Ce.z,q,O)}}else if(P.visible)M.push(v,w,P,Y,Ce.z,null,O)}}}let Se=v.children;for(let ke=0,w=Se.length;ke<w;ke++)oi(Se[ke],O,Y,V)}function Us(v,O,Y,V){let{opaque:k,transmissive:Se,transparent:ke}=v;if(I.setupLightsView(Y),ve===!0)K.setGlobalState(N.clippingPlanes,Y);if(V)Ee.viewport(se.copy(V));if(k.length>0)Kr(k,O,Y);if(Se.length>0)Kr(Se,O,Y);if(ke.length>0)Kr(ke,O,Y);Ee.buffers.depth.setTest(!0),Ee.buffers.depth.setMask(!0),Ee.buffers.color.setMask(!0),Ee.setPolygonOffset(!1)}function Fs(v,O,Y,V){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;if(I.state.transmissionRenderTarget[V.id]===void 0){let q=at.has("EXT_color_buffer_half_float")||at.has("EXT_color_buffer_float");I.state.transmissionRenderTarget[V.id]=new Rt(1,1,{generateMipmaps:!0,type:q?Pt:Zt,minFilter:Ei,samples:Math.max(4,Ft.samples),stencilBuffer:n,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ht.workingColorSpace})}let Se=I.state.transmissionRenderTarget[V.id],ke=V.viewport||se;Se.setSize(ke.z*N.transmissionResolutionScale,ke.w*N.transmissionResolutionScale);let w=N.getRenderTarget(),P=N.getActiveCubeFace(),D=N.getActiveMipmapLevel();if(N.setRenderTarget(Se),N.getClearColor(te),ce=N.getClearAlpha(),ce<1)N.setClearColor(16777215,0.5);if(N.clear(),gt)Me.render(Y);let T=N.toneMapping;N.toneMapping=Di;let Z=V.viewport;if(V.viewport!==void 0)V.viewport=void 0;if(I.setupLightsView(V),ve===!0)K.setGlobalState(N.clippingPlanes,V);if(Kr(v,Y,V),lt.updateMultisampleRenderTarget(Se),lt.updateRenderTargetMipmap(Se),at.has("WEBGL_multisampled_render_to_texture")===!1){let q=!1;for(let z=0,ue=O.length;z<ue;z++){let Xe=O[z],{object:Oe,geometry:Ne,material:he,group:Ue}=Xe;if(he.side===xi&&Oe.layers.test(V.layers)){let We=he.side;he.side=Ot,he.needsUpdate=!0,Bs(Oe,Y,V,Ne,he,Ue),he.side=We,he.needsUpdate=!0,q=!0}}if(q===!0)lt.updateMultisampleRenderTarget(Se),lt.updateRenderTargetMipmap(Se)}if(N.setRenderTarget(w,P,D),N.setClearColor(te,ce),Z!==void 0)V.viewport=Z;N.toneMapping=T}function Kr(v,O,Y){let V=O.isScene===!0?O.overrideMaterial:null;for(let k=0,Se=v.length;k<Se;k++){let ke=v[k],{object:w,geometry:P,group:D}=ke,T=ke.material;if(T.allowOverride===!0&&V!==null)T=V;if(w.layers.test(Y.layers))Bs(w,O,Y,P,T,D)}}function Bs(v,O,Y,V,k,Se){if(U!==null&&k.isNodeMaterial)U.setObject(v,k);if(v.onBeforeRender(N,O,Y,V,k,Se),v.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),k.onBeforeRender(N,O,Y,V,v,Se),k.transparent===!0&&k.side===xi&&k.forceSinglePass===!1)k.side=Ot,k.needsUpdate=!0,N.renderBufferDirect(Y,O,V,k,v,Se),k.side=ki,k.needsUpdate=!0,N.renderBufferDirect(Y,O,V,k,v,Se),k.side=xi;else N.renderBufferDirect(Y,O,V,k,v,Se);v.onAfterRender(N,O,Y,V,k,Se)}function Os(v){let O=0;for(let Y of v)if(Y.texture!==null)O++;return O}function Cr(v,O,Y){if(O.isScene!==!0)O=dt;let V=tt.get(v),k=I.state.lights,Se=I.state.shadowsArray,ke=k.state.version,w=fe.getParameters(v,k.state,Se,O,Y,I.state.lightProbeGridArray),P=fe.getProgramCacheKey(w),D=V.programs;V.environment=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?O.environment:null,V.fog=O.fog;let T=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap;if(V.envMap=qt.get(v.envMap||V.environment,T),V.envMapRotation=V.environment!==null&&v.envMap===null?O.environmentRotation:v.envMapRotation,D===void 0)v.addEventListener("dispose",Re),D=new Map,V.programs=D,V.programVariants=new Map;let Z=D.get(P);if(Z!==void 0){if(V.currentProgram===Z&&V.lightsStateVersion===ke)return Qr(v,w),Z}else{if(w.uniforms=fe.getUniforms(v),U!==null&&v.isNodeMaterial)U.build(v,Y,w);v.onBeforeCompile(w,N),Z=fe.acquireProgram(w,P),D.set(P,Z),V.uniforms=w.uniforms}let q=V.uniforms;if(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)q.clippingPlanes=K.uniform;if(Qr(v,w),V.needsLights=Xl(v),V.lightsStateVersion=ke,V.needsLights)q.ambientLightColor.value=k.state.ambient,q.lightProbe.value=k.state.probe,q.sunLights.value=k.state.sun,q.sunLightShadows.value=k.state.sunShadow,q.directionalLights.value=k.state.directional,q.directionalLightShadows.value=k.state.directionalShadow,q.spotLights.value=k.state.spot,q.spotLightShadows.value=k.state.spotShadow,q.rectAreaLights.value=k.state.rectArea,q.ltc_1.value=k.state.rectAreaLTC1,q.ltc_2.value=k.state.rectAreaLTC2,q.pointLights.value=k.state.point,q.pointLightShadows.value=k.state.pointShadow,q.hemisphereLights.value=k.state.hemi,q.sunShadowMatrix.value=k.state.sunShadowMatrix,q.sunShadowCascade.value=k.state.sunShadowCascade,q.directionalShadowMatrix.value=k.state.directionalShadowMatrix,q.spotLightMatrix.value=k.state.spotLightMatrix,q.spotLightMap.value=k.state.spotLightMap,q.pointShadowMatrix.value=k.state.pointShadowMatrix;return V.numLightProbeGrids=Os(I.state.lightProbeGridArray),V.currentProgram=Z,V.uniformsList=null,Z}function Sa(v,O,Y,V,k){let Se=tt.get(v),ke=Se.currentProgram.id+","+V+","+k,w=Se.programVariants.get(ke);if(w===void 0)w=Cr(v,O,Y),Se.programVariants.set(ke,w);else Se.currentProgram=w,Se.uniformsList=null,Se.outputColorSpace=V,Se.toneMapping=k;return w}function zs(v){if(v.uniformsList===null){let O=v.currentProgram.getUniforms();v.uniformsList=In.seqWithValue(O.seq,v.uniforms)}return v.uniformsList}function Qr(v,O){let Y=tt.get(v);Y.outputColorSpace=O.outputColorSpace,Y.batching=O.batching,Y.batchingColor=O.batchingColor,Y.instancing=O.instancing,Y.instancingColor=O.instancingColor,Y.instancingMorph=O.instancingMorph,Y.skinning=O.skinning,Y.morphTargets=O.morphTargets,Y.morphNormals=O.morphNormals,Y.morphColors=O.morphColors,Y.morphTargetsCount=O.morphTargetsCount,Y.numClippingPlanes=O.numClippingPlanes,Y.numIntersection=O.numClipIntersection,Y.vertexAlphas=O.vertexAlphas,Y.vertexTangents=O.vertexTangents,Y.toneMapping=O.toneMapping}function $r(v,O,Y,V,k){if(O.isScene!==!0)O=dt;lt.resetTextureUnits();let Se=O.fog,ke=V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial?O.environment:null,w=H===null?N.outputColorSpace:H.isXRRenderTarget===!0?H.texture.colorSpace:ht.workingColorSpace,P=V.isMeshStandardMaterial||V.isMeshLambertMaterial&&!V.envMap||V.isMeshPhongMaterial&&!V.envMap,D=qt.get(V.envMap||ke,P),T=V.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,Z=!!Y.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),q=!!Y.morphAttributes.position,z=!!Y.morphAttributes.normal,ue=!!Y.morphAttributes.color,Xe=Di;if(V.toneMapped){if(H===null||H.isXRRenderTarget===!0)Xe=N.toneMapping}let Oe=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,Ne=Oe!==void 0?Oe.length:0,he=tt.get(V),Ue=I.state.lights;if(ve===!0){if(Be===!0||v!==j){let xt=v===j&&V.id===_e;K.setState(V,v,xt)}}let We=!1,vt=!1;if(V.version===he.__version){if(he.needsLights&&he.lightsStateVersion!==Ue.state.version)We=!0;else if(k.isBatchedMesh&&he.batching===!1)We=!0;else if(!k.isBatchedMesh&&he.batching===!0)We=!0;else if(k.isBatchedMesh&&he.batchingColor===!0&&k._colorsTexture===null)We=!0;else if(k.isBatchedMesh&&he.batchingColor===!1&&k._colorsTexture!==null)We=!0;else if(k.isInstancedMesh&&he.instancing===!1)We=!0;else if(!k.isInstancedMesh&&he.instancing===!0)We=!0;else if(k.isSkinnedMesh&&he.skinning===!1)We=!0;else if(!k.isSkinnedMesh&&he.skinning===!0)We=!0;else if(k.isInstancedMesh&&he.instancingColor===!0&&k.instanceColor===null)We=!0;else if(k.isInstancedMesh&&he.instancingColor===!1&&k.instanceColor!==null)We=!0;else if(k.isInstancedMesh&&he.instancingMorph===!0&&k.morphTexture===null)We=!0;else if(k.isInstancedMesh&&he.instancingMorph===!1&&k.morphTexture!==null)We=!0;else if(he.envMap!==D)We=!0;else if(V.fog===!0&&he.fog!==Se)We=!0;else if(he.numClippingPlanes!==void 0&&(he.numClippingPlanes!==K.numPlanes||he.numIntersection!==K.numIntersection))We=!0;else if(he.vertexAlphas!==T)We=!0;else if(he.vertexTangents!==Z)We=!0;else if(he.morphTargets!==q)We=!0;else if(he.morphNormals!==z)We=!0;else if(he.morphColors!==ue)We=!0;else if(he.morphTargetsCount!==Ne)We=!0;else if(he.numLightProbeGrids!==Os(I.state.lightProbeGridArray))We=!0;else if(he.outputColorSpace!==w||he.toneMapping!==Xe)vt=!0}else We=!0,he.__version=V.version;let De=he.currentProgram;if(We===!0||vt===!0){if(De=vt===!0?Sa(V,O,k,w,Xe):Cr(V,O,k),U&&V.isNodeMaterial)U.onUpdateProgram(V,De,he)}let Mt=!1,Bt=!1,ai=!1,je=De.getUniforms(),It=he.uniforms;if(Ee.useProgram(De.program))Mt=!0,Bt=!0,ai=!0;if(V.id!==_e)_e=V.id,Bt=!0;if(Mt||j!==v){if(Ee.buffers.depth.getReversed()&&v.reversedDepth!==!0)v._reversedDepth=!0,v.updateProjectionMatrix();je.setValue(B,"projectionMatrix",v.projectionMatrix),je.setValue(B,"viewMatrix",v.matrixWorldInverse);let zt=je.map.cameraPosition;if(zt!==void 0)zt.setValue(B,Ze.setFromMatrixPosition(v.matrixWorld));if(Ft.logarithmicDepthBuffer)je.setValue(B,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2));if(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)je.setValue(B,"isOrthographic",v.isOrthographicCamera===!0);if(j!==v)j=v,Bt=!0,ai=!0}if(he.needsLights){if(Ue.state.sunShadowMap.length>0)je.setValue(B,"sunShadowMap",Ue.state.sunShadowMap,lt);if(Ue.state.directionalShadowMap.length>0)je.setValue(B,"directionalShadowMap",Ue.state.directionalShadowMap,lt);if(Ue.state.spotShadowMap.length>0)je.setValue(B,"spotShadowMap",Ue.state.spotShadowMap,lt);if(Ue.state.pointShadowMap.length>0)je.setValue(B,"pointShadowMap",Ue.state.pointShadowMap,lt)}if(k.isSkinnedMesh){je.setOptional(B,k,"bindMatrix"),je.setOptional(B,k,"bindMatrixInverse");let xt=k.skeleton;if(xt){if(xt.boneTexture===null)xt.computeBoneTexture();je.setValue(B,"boneTexture",xt.boneTexture,lt)}}if(k.isBatchedMesh){if(je.setOptional(B,k,"batchingTexture"),je.setValue(B,"batchingTexture",k._matricesTexture,lt),je.setOptional(B,k,"batchingIdTexture"),je.setValue(B,"batchingIdTexture",k._indirectTexture,lt),je.setOptional(B,k,"batchingColorTexture"),k._colorsTexture!==null)je.setValue(B,"batchingColorTexture",k._colorsTexture,lt)}let Ht=Y.morphAttributes;if(Ht.position!==void 0||Ht.normal!==void 0||Ht.color!==void 0)F.update(k,Y,De);if(Bt||he.receiveShadow!==k.receiveShadow)he.receiveShadow=k.receiveShadow,je.setValue(B,"receiveShadow",k.receiveShadow);if((V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial)&&V.envMap===null&&O.environment!==null)It.envMapIntensity.value=O.environmentIntensity;if(It.dfgLUT!==void 0)It.dfgLUT.value=Fm();if(Bt){if(je.setValue(B,"toneMappingExposure",N.toneMappingExposure),he.needsLights)lr(It,ai);if(Se&&V.fog===!0)le.refreshFogUniforms(It,Se);if(le.refreshMaterialUniforms(It,V,Ke,ze,I.state.transmissionRenderTarget[v.id]),he.needsLights&&he.numLightProbeGrids>0){let xt=E,zt=0;for(let gi of I.state.lightProbeGridArray){if(gi.texture===null)continue;xt.textures[zt]=gi.texture,xt.min[zt]=gi.boundingBox.min,xt.max[zt]=gi.boundingBox.max,xt.resolution[zt]=gi.resolution,zt++}for(let gi in xt)xt[gi].length=zt;It.probesSH.value=xt.textures,It.probesMin.value=xt.min,It.probesMax.value=xt.max,It.probesResolution.value=xt.resolution}In.upload(B,zs(he),It,lt)}if(V.isShaderMaterial&&V.uniformsNeedUpdate===!0)In.upload(B,zs(he),It,lt),V.uniformsNeedUpdate=!1;if(V.isSpriteMaterial)je.setValue(B,"center",k.center);if(je.setValue(B,"modelViewMatrix",k.modelViewMatrix),je.setValue(B,"normalMatrix",k.normalMatrix),je.setValue(B,"modelMatrix",k.matrixWorld),V.uniformsGroups!==void 0){let xt=V.uniformsGroups;for(let zt=0,gi=xt.length;zt<gi;zt++){let ql=xt[zt];we.update(ql,De),we.bind(ql,De)}}return De}function lr(v,O){v.ambientLightColor.needsUpdate=O,v.lightProbe.needsUpdate=O,v.sunLights.needsUpdate=O,v.sunLightShadows.needsUpdate=O,v.directionalLights.needsUpdate=O,v.directionalLightShadows.needsUpdate=O,v.pointLights.needsUpdate=O,v.pointLightShadows.needsUpdate=O,v.spotLights.needsUpdate=O,v.spotLightShadows.needsUpdate=O,v.rectAreaLights.needsUpdate=O,v.hemisphereLights.needsUpdate=O}function Xl(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return Q},this.getActiveMipmapLevel=function(){return ie},this.getRenderTarget=function(){return H},this.setRenderTargetTextures=function(v,O,Y){let V=tt.get(v);if(V.__autoAllocateDepthBuffer=v.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1)V.__useRenderToTexture=!1;tt.get(v.texture).__webglTexture=O,tt.get(v.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:Y,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(v,O){let Y=tt.get(v);Y.__webglFramebuffer=O,Y.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(v,O=0,Y=0){H=v,Q=O,ie=Y;let V=null,k=!1,Se=!1;if(v){let w=tt.get(v);if(w.__useDefaultFramebuffer!==void 0){Ee.bindFramebuffer(B.FRAMEBUFFER,w.__webglFramebuffer),se.copy(v.viewport),de.copy(v.scissor),Fe=v.scissorTest,Ee.viewport(se),Ee.scissor(de),Ee.setScissorTest(Fe),_e=-1;return}else if(w.__webglFramebuffer===void 0)lt.setupRenderTarget(v);else if(w.__hasExternalTextures)lt.rebindTextures(v,tt.get(v.texture).__webglTexture,tt.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){let T=v.depthTexture;if(w.__boundDepthTexture!==T){if(T!==null&&tt.has(T)&&(v.width!==T.image.width||v.height!==T.image.height))throw Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");lt.setupDepthRenderbuffer(v)}}let P=v.texture;if(P.isData3DTexture||P.isDataArrayTexture||P.isCompressedArrayTexture)Se=!0;let D=tt.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget){if(Array.isArray(D[O]))V=D[O][Y];else V=D[O];k=!0}else if(v.samples>0&&lt.useMultisampledRTT(v)===!1)V=tt.get(v).__webglMultisampledFramebuffer;else if(Array.isArray(D))V=D[Y];else V=D;se.copy(v.viewport),de.copy(v.scissor),Fe=v.scissorTest}else se.copy(mt).multiplyScalar(Ke).floor(),de.copy(nt).multiplyScalar(Ke).floor(),Fe=ot;if(Y!==0)V=X;if(Ee.bindFramebuffer(B.FRAMEBUFFER,V))Ee.drawBuffers(v,V);if(Ee.viewport(se),Ee.scissor(de),Ee.setScissorTest(Fe),k){let w=tt.get(v.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+O,w.__webglTexture,Y)}else if(Se){let w=O;for(let P=0;P<v.textures.length;P++){let D=tt.get(v.textures[P]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+P,D.__webglTexture,Y,w)}}else if(v!==null&&Y!==0){let w=tt.get(v.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,w.__webglTexture,Y)}_e=-1};function Gs(v){let O=tt.get(v);if(O.__readFormat!==v.format||O.__readType!==v.type)O.__readFormat=v.format,O.__readType=v.type,O.__formatReadable=Ft.textureFormatReadable(v.format),O.__typeReadable=Ft.textureTypeReadable(v.type);return O}if(this.readRenderTargetPixels=function(v,O,Y,V,k,Se,ke,w=0){if(!(v&&v.isWebGLRenderTarget)){Ge("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let P=tt.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&ke!==void 0){if(P=P[ke],Array.isArray(P))P=P[0]}if(P){Ee.bindFramebuffer(B.FRAMEBUFFER,P);try{let D=v.textures[w],{format:T,type:Z}=D;if(v.textures.length>1)B.readBuffer(B.COLOR_ATTACHMENT0+w);let q=Gs(D);if(q.__formatReadable===!1){Ge("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(q.__typeReadable===!1){Ge("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}if(O>=0&&O<=v.width-V&&(Y>=0&&Y<=v.height-k))B.readPixels(O,Y,V,k,pe.convert(T),pe.convert(Z),Se)}finally{let D=H!==null?tt.get(H).__webglFramebuffer:null;Ee.bindFramebuffer(B.FRAMEBUFFER,D)}}},this.readRenderTargetPixelsAsync=async function(v,O,Y,V,k,Se,ke,w=0){if(!(v&&v.isWebGLRenderTarget))throw Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let P=tt.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&ke!==void 0){if(P=P[ke],Array.isArray(P))P=P[0]}if(P)if(O>=0&&O<=v.width-V&&(Y>=0&&Y<=v.height-k)){Ee.bindFramebuffer(B.FRAMEBUFFER,P);let D=v.textures[w],{format:T,type:Z}=D;if(v.textures.length>1)B.readBuffer(B.COLOR_ATTACHMENT0+w);let q=Gs(D);if(q.__formatReadable===!1)throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(q.__typeReadable===!1)throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let z=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,z),B.bufferData(B.PIXEL_PACK_BUFFER,Se.byteLength,B.STREAM_READ),B.readPixels(O,Y,V,k,pe.convert(T),pe.convert(Z),0),B.bindBuffer(B.PIXEL_PACK_BUFFER,null);let ue=H!==null?tt.get(H).__webglFramebuffer:null;Ee.bindFramebuffer(B.FRAMEBUFFER,ue);let Xe=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await Wh(B,Xe,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,z),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,Se),B.bindBuffer(B.PIXEL_PACK_BUFFER,null),B.deleteBuffer(z),B.deleteSync(Xe),Se}else throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(v,O=null,Y=0){let V=Math.pow(2,-Y),k=Math.floor(v.image.width*V),Se=Math.floor(v.image.height*V),ke=O!==null?O.x:0,w=O!==null?O.y:0;lt.setTexture2D(v,0),B.copyTexSubImage2D(B.TEXTURE_2D,Y,0,0,ke,w,k,Se),Ee.unbindTexture()},this.copyTextureToTexture=function(v,O,Y=null,V=null,k=0,Se=0){let ke,w,P,D,T,Z,q,z,ue,Xe=v.isCompressedTexture?v.mipmaps[Se]:v.image;if(Y!==null)ke=Y.max.x-Y.min.x,w=Y.max.y-Y.min.y,P=Y.isBox3?Y.max.z-Y.min.z:1,D=Y.min.x,T=Y.min.y,Z=Y.isBox3?Y.min.z:0;else{let je=Math.pow(2,-k);if(ke=Math.floor(v.width*je),w=Math.floor(v.height*je),v.isDataArrayTexture)P=Xe.depth;else if(v.isData3DTexture)P=Math.floor(Xe.depth*je);else P=1;D=0,T=0,Z=0}if(V!==null)q=V.x,z=V.y,ue=V.z;else q=0,z=0,ue=0;let Oe=pe.convert(O.format),Ne=pe.convert(O.type),he;if(O.isData3DTexture)lt.setTexture3D(O,0),he=B.TEXTURE_3D;else if(O.isDataArrayTexture||O.isCompressedArrayTexture)lt.setTexture2DArray(O,0),he=B.TEXTURE_2D_ARRAY;else lt.setTexture2D(O,0),he=B.TEXTURE_2D;Ee.activeTexture(B.TEXTURE0),Ee.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,O.flipY),Ee.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),Ee.pixelStorei(B.UNPACK_ALIGNMENT,O.unpackAlignment);let Ue=Ee.getParameter(B.UNPACK_ROW_LENGTH),We=Ee.getParameter(B.UNPACK_IMAGE_HEIGHT),vt=Ee.getParameter(B.UNPACK_SKIP_PIXELS),De=Ee.getParameter(B.UNPACK_SKIP_ROWS),Mt=Ee.getParameter(B.UNPACK_SKIP_IMAGES);Ee.pixelStorei(B.UNPACK_ROW_LENGTH,Xe.width),Ee.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Xe.height),Ee.pixelStorei(B.UNPACK_SKIP_PIXELS,D),Ee.pixelStorei(B.UNPACK_SKIP_ROWS,T),Ee.pixelStorei(B.UNPACK_SKIP_IMAGES,Z);let Bt=v.isDataArrayTexture||v.isData3DTexture,ai=O.isDataArrayTexture||O.isData3DTexture;if(v.isDepthTexture){let je=tt.get(v),It=tt.get(O),Ht=tt.get(je.__renderTarget),xt=tt.get(It.__renderTarget);Ee.bindFramebuffer(B.READ_FRAMEBUFFER,Ht.__webglFramebuffer),Ee.bindFramebuffer(B.DRAW_FRAMEBUFFER,xt.__webglFramebuffer);for(let zt=0;zt<P;zt++){if(Bt)B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,tt.get(v).__webglTexture,k,Z+zt),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,tt.get(O).__webglTexture,Se,ue+zt);B.blitFramebuffer(D,T,D+ke,T+w,q,z,q+ke,z+w,B.DEPTH_BUFFER_BIT,B.NEAREST)}Ee.bindFramebuffer(B.READ_FRAMEBUFFER,null),Ee.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(k!==0||v.isRenderTargetTexture||tt.has(v)){let je=tt.get(v),It=tt.get(O);Ee.bindFramebuffer(B.READ_FRAMEBUFFER,ne),Ee.bindFramebuffer(B.DRAW_FRAMEBUFFER,C);for(let Ht=0;Ht<P;Ht++){if(Bt)B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,je.__webglTexture,k,Z+Ht);else B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,je.__webglTexture,k);if(ai)B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,It.__webglTexture,Se,ue+Ht);else B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,It.__webglTexture,Se);if(k!==0)B.blitFramebuffer(D,T,D+ke,T+w,q,z,q+ke,z+w,B.COLOR_BUFFER_BIT,B.NEAREST);else if(ai)B.copyTexSubImage3D(he,Se,q,z,ue+Ht,D,T,ke,w);else B.copyTexSubImage2D(he,Se,q,z,D,T,ke,w)}Ee.bindFramebuffer(B.READ_FRAMEBUFFER,null),Ee.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(ai)if(v.isDataTexture||v.isData3DTexture)B.texSubImage3D(he,Se,q,z,ue,ke,w,P,Oe,Ne,Xe.data);else if(O.isCompressedArrayTexture)B.compressedTexSubImage3D(he,Se,q,z,ue,Xe.width,Xe.height,P,Oe,Xe.data);else B.texSubImage3D(he,Se,q,z,ue,ke,w,P,Oe,Ne,Xe);else if(v.isDataTexture)B.texSubImage2D(B.TEXTURE_2D,Se,q,z,ke,w,Oe,Ne,Xe.data);else if(v.isCompressedTexture)B.compressedTexSubImage2D(B.TEXTURE_2D,Se,q,z,Xe.width,Xe.height,Oe,Xe.data);else B.texSubImage2D(B.TEXTURE_2D,Se,q,z,ke,w,Oe,Ne,Xe);if(Ee.pixelStorei(B.UNPACK_ROW_LENGTH,Ue),Ee.pixelStorei(B.UNPACK_IMAGE_HEIGHT,We),Ee.pixelStorei(B.UNPACK_SKIP_PIXELS,vt),Ee.pixelStorei(B.UNPACK_SKIP_ROWS,De),Ee.pixelStorei(B.UNPACK_SKIP_IMAGES,Mt),Se===0&&O.generateMipmaps===!0&&O.mipmapsAutoUpdate===!0)B.generateMipmap(he);Ee.unbindTexture()},this.initRenderTarget=function(v){if(tt.get(v).__webglFramebuffer===void 0)lt.setupRenderTarget(v)},this.initTexture=function(v){if(v.isCubeTexture)lt.setTextureCube(v,0);else if(v.isData3DTexture)lt.setTexture3D(v,0);else if(v.isDataArrayTexture||v.isCompressedArrayTexture)lt.setTexture2DArray(v,0);else lt.setTexture2D(v,0);Ee.unbindTexture()},this.resetState=function(){Q=0,ie=0,H=null,Ee.reset(),xe.reset()},typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ci}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=ht._getDrawingBufferColorSpace(e),t.unpackColorSpace=ht._getUnpackColorSpace()}}var Ds={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class ji{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}var m_=new Rr(-1,1,1,-1,0,1);class Bm extends Ye{constructor(){super();this.setAttribute("position",new Ve([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Ve([0,2,0,0,2,0],2))}}var g_=new Bm;class Ln{constructor(e){this._mesh=new rt(g_,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,m_)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class rh extends ji{constructor(e,t="tDiffuse"){super();if(this.textureID=t,this.uniforms=null,this.material=null,e instanceof Ct)this.uniforms=e.uniforms,this.material=e;else if(e)this.uniforms=Qi.clone(e.uniforms),this.material=new Ct({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader});this._fsQuad=new Ln(this.material)}render(e,t,i){if(this.uniforms[this.textureID])this.uniforms[this.textureID].value=i.texture;if(this._fsQuad.material=this.material,this.renderToScreen)e.setRenderTarget(null),this._fsQuad.render(e);else{if(e.setRenderTarget(t),this.clear)e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil);this._fsQuad.render(e)}}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class Wl extends ji{constructor(e,t){super();this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){let r=e.getContext(),n=e.state;n.buffers.color.setMask(!1),n.buffers.depth.setMask(!1),n.buffers.color.setLocked(!0),n.buffers.depth.setLocked(!0);let s,o;if(this.inverse)s=0,o=1;else s=1,o=0;if(n.buffers.stencil.setTest(!0),n.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),n.buffers.stencil.setFunc(r.ALWAYS,s,4294967295),n.buffers.stencil.setClear(o),n.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear)e.clear();if(e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear)e.clear();e.render(this.scene,this.camera),n.buffers.color.setLocked(!1),n.buffers.depth.setLocked(!1),n.buffers.color.setMask(!0),n.buffers.depth.setMask(!0),n.buffers.stencil.setLocked(!1),n.buffers.stencil.setFunc(r.EQUAL,1,4294967295),n.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),n.buffers.stencil.setLocked(!0)}}class nh extends ji{constructor(){super();this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class sh{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let i=e.getSize(new J);this._width=i.width,this._height=i.height,t=new Rt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Pt}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new rh(Ds),this.copyPass.material.blending=Wi,this.timer=new da}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);if(t!==-1)this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){if(this.timer.update(),e===void 0)e=this.timer.getDelta();let t=this.renderer.getRenderTarget(),i=!1;for(let r=0,n=this.passes.length;r<n;r++){let s=this.passes[r];if(s.enabled===!1)continue;if(s.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),s.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),s.needsSwap){if(i){let o=this.renderer.getContext(),a=this.renderer.state.buffers.stencil;a.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),a.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}if(Wl!==void 0){if(s instanceof Wl)i=!0;else if(s instanceof nh)i=!1}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new J);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let i=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(i,r),this.renderTarget2.setSize(i,r);for(let n=0;n<this.passes.length;n++)this.passes[n].setSize(i,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class oh extends ji{constructor(e,t,i=null,r=null,n=null){super();this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=r,this.clearAlpha=n,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new ge}render(e,t,i){let r=e.autoClear;e.autoClear=!1;let n,s;if(this.overrideMaterial!==null)s=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial;if(this.clearColor!==null)e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha());if(this.clearAlpha!==null)n=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha);if(this.clearDepth==!0)e.clearDepth();if(e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0)e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil);if(e.render(this.scene,this.camera),this.clearColor!==null)e.setClearColor(this._oldClearColor);if(this.clearAlpha!==null)e.setClearAlpha(n);if(this.overrideMaterial!==null)this.scene.overrideMaterial=s;e.autoClear=r}}var Om={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new ge(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class Dn extends ji{constructor(e,t=1,i,r){super();this.strength=t,this.radius=i,this.threshold=r,this.resolution=e!==void 0?new J(e.x,e.y):new J(256,256),this.clearColor=new ge(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let n=Math.round(this.resolution.x/2),s=Math.round(this.resolution.y/2);this.renderTargetBright=new Rt(n,s,{type:Pt,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let c=0;c<this.nMips;c++){let f=new Rt(n,s,{type:Pt,depthBuffer:!1});f.texture.name="UnrealBloomPass.h"+c,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);let u=new Rt(n,s,{type:Pt,depthBuffer:!1});u.texture.name="UnrealBloomPass.v"+c,u.texture.generateMipmaps=!1,this.renderTargetsVertical.push(u),n=Math.round(n/2),s=Math.round(s/2)}let o=Om;this.highPassUniforms=Qi.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=r,this.highPassUniforms.smoothWidth.value=0.01,this.materialHighPassFilter=new Ct({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let a=[6,10,14,18,22];n=Math.round(this.resolution.x/2),s=Math.round(this.resolution.y/2);for(let c=0;c<this.nMips;c++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(a[c])),this.separableBlurMaterials[c].uniforms.invSize.value=new J(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=0.1;let l=[1,0.8,0.6,0.4,0.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new R(1,1,1),new R(1,1,1),new R(1,1,1),new R(1,1,1),new R(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Qi.clone(Ds.uniforms),this.blendMaterial=new Ct({uniforms:this.copyUniforms,vertexShader:Ds.vertexShader,fragmentShader:Ds.fragmentShader,premultipliedAlpha:!0,blending:hr,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new ge,this._oldClearAlpha=1,this._basic=new Vt,this._fsQuad=new Ln(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),r=Math.round(t/2);this.renderTargetBright.setSize(i,r);for(let n=0;n<this.nMips;n++)this.renderTargetsHorizontal[n].setSize(i,r),this.renderTargetsVertical[n].setSize(i,r),this.separableBlurMaterials[n].uniforms.invSize.value=new J(1/i,1/r),i=Math.round(i/2),r=Math.round(r/2)}render(e,t,i,r,n){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();let s=e.autoClear;if(e.autoClear=!1,e.setClearColor(this.clearColor,0),n)e.state.buffers.stencil.setTest(!1);if(this.renderToScreen)this._fsQuad.material=this._basic,this._basic.map=i.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e);this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let o=this.renderTargetBright;for(let a=0;a<this.nMips;a++)this._fsQuad.material=this.separableBlurMaterials[a],this.separableBlurMaterials[a].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[a].uniforms.direction.value=Dn.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[a]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[a].uniforms.colorTexture.value=this.renderTargetsHorizontal[a].texture,this.separableBlurMaterials[a].uniforms.direction.value=Dn.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[a]),e.clear(),this._fsQuad.render(e),o=this.renderTargetsVertical[a];if(this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,n)e.state.buffers.stencil.setTest(!0);if(this.renderToScreen)e.setRenderTarget(null),this._fsQuad.render(e);else e.setRenderTarget(i),this._fsQuad.render(e);e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=s}_getSeparableBlurMaterial(e){let t=[],i=e/3;for(let s=0;s<e;s++)t.push(0.39894*Math.exp(-0.5*s*s/(i*i))/i);let r=[],n=[];for(let s=1;s<e;s+=2){let o=t[s],a=s+1<e?t[s+1]:0,l=o+a;r.push((s*o+(s+1)*a)/l),n.push(l)}return new Ct({defines:{KERNEL_PAIRS:r.length},uniforms:{colorTexture:{value:null},invSize:{value:new J(0.5,0.5)},direction:{value:new J(0.5,0.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:r},gaussianWeights:{value:n}},vertexShader:`

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

				}`})}_getCompositeMaterial(e){return new Ct({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

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

				}`})}}Dn.BlurDirectionX=new J(1,0);Dn.BlurDirectionY=new J(0,1);var xa={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class ah extends ji{constructor(){super();this.isOutputPass=!0,this.uniforms=Qi.clone(xa.uniforms),this.material=new wn({name:xa.name,uniforms:this.uniforms,vertexShader:xa.vertexShader,fragmentShader:xa.fragmentShader}),this._fsQuad=new Ln(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,i){if(this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping){if(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},ht.getTransfer(this._outputColorSpace)===_t)this.material.defines.SRGB_TRANSFER="";if(this._toneMapping===Un)this.material.defines.LINEAR_TONE_MAPPING="";else if(this._toneMapping===Fn)this.material.defines.REINHARD_TONE_MAPPING="";else if(this._toneMapping===Bn)this.material.defines.CINEON_TONE_MAPPING="";else if(this._toneMapping===Nr)this.material.defines.ACES_FILMIC_TONE_MAPPING="";else if(this._toneMapping===zn)this.material.defines.AGX_TONE_MAPPING="";else if(this._toneMapping===Gn)this.material.defines.NEUTRAL_TONE_MAPPING="";else if(this._toneMapping===On)this.material.defines.CUSTOM_TONE_MAPPING="";this.material.needsUpdate=!0}if(this.renderToScreen===!0)e.setRenderTarget(null),this._fsQuad.render(e);else{if(e.setRenderTarget(t),this.clear)e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil);this._fsQuad.render(e)}}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class lh extends pn{constructor(){super();this.name="RoomEnvironment",this.position.y=-3.5;let e=new Li;e.deleteAttribute("uv");let t=new ii({side:Ot}),i=new ii,r=new Ar(16777215,900,28,2);r.position.set(0.418,16.199,0.3),this.add(r);let n=new rt(e,t);n.position.set(-0.757,13.219,0.717),n.scale.set(31.713,28.305,28.591),this.add(n);let s=new Wo(e,i,6),o=new ft;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-0.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),s.setMatrixAt(0,o.matrix),o.position.set(-5.607,-0.754,-0.758),o.rotation.set(0,0.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),s.setMatrixAt(1,o.matrix),o.position.set(6.167,0.857,7.803),o.rotation.set(0,0.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),s.setMatrixAt(2,o.matrix),o.position.set(-2.017,0.018,6.124),o.rotation.set(0,0.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),s.setMatrixAt(3,o.matrix),o.position.set(2.291,-0.756,-2.621),o.rotation.set(0,-0.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),s.setMatrixAt(4,o.matrix),o.position.set(-2.193,-0.369,-5.547),o.rotation.set(0,0.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),s.setMatrixAt(5,o.matrix),this.add(s);let a=new rt(e,Ns(50));a.position.set(-16.116,14.37,8.208),a.scale.set(0.1,2.428,2.739),this.add(a);let l=new rt(e,Ns(50));l.position.set(-16.109,18.021,-8.207),l.scale.set(0.1,2.425,2.751),this.add(l);let c=new rt(e,Ns(17));c.position.set(14.904,12.198,-1.832),c.scale.set(0.15,4.265,6.331),this.add(c);let f=new rt(e,Ns(43));f.position.set(-0.462,8.89,14.52),f.scale.set(4.38,5.441,0.088),this.add(f);let u=new rt(e,Ns(20));u.position.set(3.235,11.486,-12.541),u.scale.set(2.5,2,0.1),this.add(u);let h=new rt(e,Ns(100));h.position.set(0,20,0),h.scale.set(1,0.1,1),this.add(h)}dispose(){let e=new Set;this.traverse((t)=>{if(t.isMesh)e.add(t.geometry),e.add(t.material)});for(let t of e)t.dispose()}}function Ns(e){return new oa({color:0,emissive:16777215,emissiveIntensity:e})}class _a extends rt{constructor(e,t={}){super(e);this.isReflector=!0,this.type="Reflector",this.forceUpdate=!1,this._reflectionCameras=new WeakMap;let i=this,r=t.color!==void 0?new ge(t.color):new ge(8355711),n=t.textureWidth||512,s=t.textureHeight||512,o=t.clipBias||0,a=t.shader||_a.ReflectorShader,l=t.multisample!==void 0?t.multisample:4,c=new Ai,f=new R,u=new R,h=new R,p=new Je,x=new R(0,0,-1),y=new St,d=new R,m=new R,b=new St,E=new Je,M=new Rt(n,s,{samples:l,type:Pt}),I=new Ct({name:a.name!==void 0?a.name:"unspecified",uniforms:Qi.clone(a.uniforms),fragmentShader:a.fragmentShader,vertexShader:a.vertexShader});I.uniforms.tDiffuse.value=M.texture,I.uniforms.color.value=r,I.uniforms.textureMatrix.value=E,this.material=I,this.onBeforeRender=function(L,g,S){let N=this.getReflectionCamera(S);if(u.setFromMatrixPosition(i.matrixWorld),h.setFromMatrixPosition(S.matrixWorld),p.extractRotation(i.matrixWorld),f.set(0,0,1),f.applyMatrix4(p),d.subVectors(u,h),d.dot(f)>0===!0&&this.forceUpdate===!1)return;d.reflect(f).negate(),d.add(u),p.extractRotation(S.matrixWorld),x.set(0,0,-1),x.applyMatrix4(p),x.add(h),m.subVectors(u,x),m.reflect(f).negate(),m.add(u),N.position.copy(d),N.up.set(0,1,0),N.up.applyMatrix4(p),N.up.reflect(f),N.lookAt(m),N.far=S.far,N.updateMatrixWorld(),N.projectionMatrix.copy(S.projectionMatrix),N.projectionMatrix.elements[8]*=-1,N.projectionMatrix.elements[12]*=-1,E.set(0.5,0,0,0.5,0,0.5,0,0.5,0,0,0.5,0.5,0,0,0,1),E.multiply(N.projectionMatrix),E.multiply(N.matrixWorldInverse),E.multiply(i.matrixWorld),c.setFromNormalAndCoplanarPoint(f,u),c.applyMatrix4(N.matrixWorldInverse),y.set(c.normal.x,c.normal.y,c.normal.z,c.constant);let U=N.projectionMatrix;if(N.isOrthographicCamera)b.x=(Math.sign(y.x)+U.elements[8])/U.elements[0],b.y=(Math.sign(y.y)+U.elements[9])/U.elements[5],b.z=-S.far,b.w=1;else b.x=(Math.sign(y.x)+U.elements[8])/U.elements[0],b.y=(Math.sign(y.y)+U.elements[9])/U.elements[5],b.z=-1,b.w=(1+U.elements[10])/U.elements[14];if(y.multiplyScalar(2/y.dot(b)),U.elements[2]=y.x,U.elements[6]=y.y,N.isOrthographicCamera)U.elements[10]=y.z-o,U.elements[14]=y.w-1;else U.elements[10]=y.z+1-o,U.elements[14]=y.w;i.visible=!1;let X=L.getRenderTarget(),ne=L.xr.enabled,C=L.shadowMap.autoUpdate;if(L.xr.enabled=!1,L.shadowMap.autoUpdate=!1,L.setRenderTarget(M),L.state.buffers.depth.setMask(!0),L.autoClear===!1)L.clear();L.render(g,N),L.xr.enabled=ne,L.shadowMap.autoUpdate=C,L.setRenderTarget(X);let Q=S.viewport;if(Q!==void 0)L.state.viewport(Q);i.visible=!0,this.forceUpdate=!1},this.getRenderTarget=function(){return M},this.dispose=function(){M.dispose(),i.material.dispose()},this.getReflectionCamera=function(L){let g=this._reflectionCameras.get(L);if(g===void 0)g=L.clone(),this._reflectionCameras.set(L,g);return g}}}_a.ReflectorShader={name:"ReflectorShader",uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null}},vertexShader:`
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

		}`};(function(){let e=document.documentElement,t=document.getElementById("hall"),i=document.getElementById("hallCv");if(!t||!i)return;let r=(s)=>{try{console.warn("hall",s)}catch(o){}e.classList.remove("hallon"),window.__hall=null};try{n()}catch(s){r(s)}function n(){let s=window.__hallT={t0:performance.now()},o=matchMedia("(pointer: coarse)").matches,a=/[?&]lite=1/.test(location.search),l=/[?&]low=1/.test(location.search),c=o&&!l,f=/[?&]nopg=1/.test(location.search),u=l?0.75:1,h=matchMedia("(prefers-reduced-motion: reduce)").matches,p=document.body,x=(w)=>document.getElementById(w),y=new kl({canvas:i,antialias:l,powerPreference:"high-performance"});y.toneMapping=Nr,y.toneMappingExposure=1.1;let d=new pn;if(function(){let w=document.createElement("canvas");w.width=16,w.height=512;let P=w.getContext("2d"),D=P.createLinearGradient(0,0,0,512);D.addColorStop(0,"#05030d"),D.addColorStop(0.55,"#1d0b33"),D.addColorStop(0.72,"#4a1560"),D.addColorStop(1,"#10081c"),P.fillStyle=D,P.fillRect(0,0,16,512);let T=new bi(w);T.colorSpace=Lt,d.background=T}(),!l){let w=new Zr(y);d.environment=w.fromScene(new lh,0.04).texture,d.environmentIntensity=0.5}d.fog=new cs(1706542,9,26);let m=new Xt(30,1.7777777777777777,0.1,60);{let w=[];for(let D=0;D<400;D++){let T=Math.random()*Math.PI*2,Z=20+Math.random()*10;w.push(Math.cos(T)*Z,3+Math.random()*12,-18-Math.random()*8)}let P=new Ye;P.setAttribute("position",new Ve(w,3)),d.add(new qo(P,new Mn({color:16777215,size:0.05,fog:!1,sizeAttenuation:!0})))}let b=null;if(l){let w=new rt(new Ri(60,60),new Vt({color:1444390}));w.rotation.x=-Math.PI/2,d.add(w)}else b=new _a(new Ri(60,60),{textureWidth:512,textureHeight:512,color:5592422,clipBias:0.003});let E=0,M=!1;if(b){b.rotation.x=-Math.PI/2,d.add(b);let w=b.onBeforeRender;b.onBeforeRender=function(){if(M||E++%4!==0)return;w.apply(this,arguments)}}if(!l){let w=new rt(new Ri(60,60),new Vt({color:919066,transparent:!0,opacity:0.78,depthWrite:!1}));w.rotation.x=-Math.PI/2,w.position.y=0.002,d.add(w)}let I={uAge:{value:-1},uAmp:{value:0.13},uC:{value:new J(0,0)},uCol:{value:new ge(16732070)}};{let T=[];for(let ue=-26;ue<=26.000001;ue+=0.5)for(let Xe=-26;Xe<25.999999;Xe+=0.25)T.push(ue,0,Xe,ue,0,Xe+0.25),T.push(Xe,0,ue,Xe+0.25,0,ue);let Z=new Ye;Z.setAttribute("position",new Ve(T,3));let q=new Ct({transparent:!0,depthWrite:!1,uniforms:I,vertexShader:`uniform float uAge,uAmp; uniform vec2 uC; varying float vA; varying float vW;
        void main(){ vec3 p=position; float r=length(p.xz-uC); float x=r-uAge*9.0;
          float env=uAge<0.0?0.0:exp(-x*x/1.6)*exp(-uAge*.9); p.y+=.004+uAmp*env*sin(x*4.5);
          vW=env; vec4 mv=modelViewMatrix*vec4(p,1.); gl_Position=projectionMatrix*mv;
          float d=length(mv.xyz); vA=1.-smoothstep(9.,26.,d); }`,fragmentShader:`uniform vec3 uCol; varying float vA; varying float vW;
        void main(){ gl_FragColor=vec4(uCol*(1.15+vW*3.),vA*(.7+.6*vW)); }`}),z=new Ii(Z,q);z.frustumCulled=!1,d.add(z)}let L={uAge:{value:-1}};{let Z=function(Ne,he,Ue,We){D.push(Ne[0],0.012,Ne[1],he[0],0.012,he[1]),T.push(Ue,We)},q=function(Ne,he,Ue,We,vt,De){let Mt=Ne,Bt=he,ai=7;for(let je=0;je<ai;je++){Ue+=(P()-0.5)*1.2;let It=We/ai,Ht=Mt+Math.cos(Ue)*It,xt=Bt+Math.sin(Ue)*It,zt=vt+je/ai*(1-vt),gi=vt+(je+1)/ai*(1-vt);if(Z([Mt,Bt],[Ht,xt],zt,gi),De<1&&P()<0.5&&je>1)q(Ht,xt,Ue+(P()<0.5?-1:1)*(0.5+P()*0.6),We*0.4,gi,De+1);Mt=Ht,Bt=xt}},w=7,P=()=>(w=w*16807%2147483647)/2147483647,D=[],T=[],z=17;for(let Ne=0;Ne<z;Ne++)q(0,0,Ne/z*Math.PI*2+P()*0.3,1+P()*1.6,0,0);let ue=new Ye;ue.setAttribute("position",new Ve(D,3)),ue.setAttribute("along",new Ve(T,1));let Xe=new Ct({transparent:!0,depthWrite:!1,blending:hr,uniforms:L,vertexShader:"attribute float along; varying float vT; void main(){ vT=along; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.); }",fragmentShader:`uniform float uAge; varying float vT;
        void main(){ if(uAge<0.) discard; float grow=clamp(uAge/.5,0.,1.); grow=1.-pow(1.-grow,2.); if(vT>grow) discard;
          float fade=1.-smoothstep(1.6,3.8,uAge); float hot=1.-smoothstep(0.,1.,vT);
          vec3 c=mix(vec3(1.,.25,.62),vec3(1.,.9,.97),hot*.8*(1.-smoothstep(0.,1.2,uAge)));
          gl_FragColor=vec4(c*2.2*fade,1.); }`}),Oe=new Ii(ue,Xe);Oe.frustumCulled=!1,Oe.name="cracks",d.add(Oe),window.__cracks=Oe}function g(w,P){let D=document.createElement("canvas");D.width=512*u,D.height=512*u;let T=D.getContext("2d");if(T.scale(u,u),T.fillStyle="#070418",T.fillRect(0,0,512,512),w===1)for(let q=0;q<6;q++)for(let z=0;z<4;z++){if((q+z)%3===0)continue;T.fillStyle=P,T.globalAlpha=0.3+0.1*q,T.fillRect(66+z*100,230+q*44,88,36)}if(w===2){T.strokeStyle=P,T.lineWidth=6;for(let q=1;q<6;q++)T.globalAlpha=1-q*0.14,T.beginPath(),T.arc(256,290,q*52,0,7),T.stroke()}if(w===3)T.fillStyle=P,T.fillRect(46,200,18,120),T.fillRect(448,280,18,120),T.fillStyle="#fff",T.beginPath(),T.arc(290,250,11,0,7),T.fill();T.globalAlpha=1,T.fillStyle=P,T.textAlign="center",T.font="800 40px Inter,Arial,sans-serif",T.fillText("COMING SOON",256,100);let Z=new bi(D);return Z.colorSpace=Lt,Z.anisotropy=8,Z}function S(w,P){let D=document.createElement("canvas");D.width=1024*u,D.height=256*u;let T=D.getContext("2d");T.scale(u,u),T.fillStyle="#0b0410",T.fillRect(0,0,1024,256);let Z=T.createLinearGradient(0,0,0,256);Z.addColorStop(0,"rgba(255,255,255,.07)"),Z.addColorStop(1,"rgba(255,255,255,0)"),T.fillStyle=Z,T.fillRect(0,0,1024,256),T.font="900 150px Inter,Arial,sans-serif",T.textAlign="center",T.textBaseline="middle",T.shadowColor=P,T.shadowBlur=40,T.fillStyle="#fff",T.letterSpacing="18px",T.fillText(w,521,138),T.shadowBlur=18,T.fillText(w,521,138),T.strokeStyle=P,T.lineWidth=10,T.shadowBlur=24,T.strokeRect(10,10,1004,236);let q=new bi(D);return q.colorSpace=Lt,q.anisotropy=8,q}function N(w,P){let D=document.createElement("canvas");D.width=1024*u,D.height=1024*u;let T=D.getContext("2d");T.scale(u,u),T.clearRect(0,0,1024,1024),T.strokeStyle=w,T.lineWidth=26,T.shadowColor=w,T.shadowBlur=30,T.beginPath(),T.moveTo(-50,760),T.lineTo(1100,360),T.stroke(),T.lineWidth=10,T.beginPath(),T.moveTo(-50,820),T.lineTo(1100,420),T.stroke(),T.shadowBlur=0,T.fillStyle="rgba(255,255,255,.85)",T.font="900 150px Inter,Arial",T.save(),T.translate(120,330),T.rotate(-Math.PI/2),T.fillText(P,0,0),T.restore();let Z=new bi(D);return Z.colorSpace=Lt,Z.anisotropy=8,Z}function W(){let w=document.createElement("canvas");w.width=256*u,w.height=256*u;let P=w.getContext("2d");P.scale(u,u);let D=P.createRadialGradient(128,110,10,128,128,128);D.addColorStop(0,"#ff9fd0"),D.addColorStop(0.7,"#ff4fa6"),D.addColorStop(1,"#c21a72"),P.fillStyle=D,P.beginPath(),P.arc(128,128,126,0,7),P.fill(),P.fillStyle="#fff",P.font="900 74px Inter,Arial,sans-serif",P.textAlign="center",P.textBaseline="middle",P.letterSpacing="1px",P.shadowColor="rgba(120,0,60,.6)",P.shadowBlur=6,P.fillText("START",129,134);let T=new bi(w);return T.colorSpace=Lt,T.anisotropy=8,T}let U=function(){let w=document.createElement("canvas");w.width=256,w.height=256;let P=w.getContext("2d"),D=P.createLinearGradient(0,0,256,256);return D.addColorStop(0,"rgba(255,255,255,.20)"),D.addColorStop(0.35,"rgba(255,255,255,.04)"),D.addColorStop(0.36,"rgba(255,255,255,0)"),D.addColorStop(1,"rgba(255,255,255,0)"),P.fillStyle=D,P.fillRect(0,0,256,256),new bi(w)}(),X=function(){let w=document.createElement("canvas");w.width=128,w.height=128;let P=w.getContext("2d"),D=P.createRadialGradient(64,64,4,64,64,64);return D.addColorStop(0,"rgba(0,0,0,.75)"),D.addColorStop(1,"rgba(0,0,0,0)"),P.fillStyle=D,P.fillRect(0,0,128,128),new bi(w)}(),ne=document.createElement("canvas");ne.width=512,ne.height=512;let C=ne.getContext("2d"),Q=new bi(ne);Q.colorSpace=Lt,Q.anisotropy=8;let ie=[];for(let w=0;w<40;w++)ie.push([Math.random()*512,Math.random()*400,Math.random()*2+1,Math.random()*6]);let H=[];for(let w=0;w<9;w++)H.push([30+w*56+Math.random()*20,Math.random()*500,1.6+Math.random()*1.2,w%3]);function _e(w){let P=C.createLinearGradient(0,0,0,512);P.addColorStop(0,"#060c1f"),P.addColorStop(1,"#0e1c45"),C.fillStyle=P,C.fillRect(0,0,512,512),ie.forEach((Z)=>{C.globalAlpha=0.35+0.35*Math.sin(w*1.5+Z[3]),C.fillStyle="#8fa8ff",C.fillRect(Z[0],Z[1],Z[2],Z[2])}),C.globalAlpha=1;let D=["#c6e4ff","#43c6ff","#b6ff3c"];H.forEach((Z)=>{let q=(Z[1]+w*55*Z[2])%540-20;C.fillStyle=D[Z[3]],C.globalAlpha=0.55,C.fillRect(Z[0],q-22,3,22),C.globalAlpha=0.9,C.fillRect(Z[0]-4,q,11,11)}),C.globalAlpha=1,C.fillStyle="#16264f",C.fillRect(0,452,512,60),C.fillStyle="#4b6fb5",C.fillRect(0,450,512,3);let T=256+Math.sin(w*0.8)*150;if(C.fillStyle="#e0425a",C.fillRect(T-17,430,34,20),C.fillStyle="#ffd1d8",C.fillRect(T-6,420,12,12),C.textAlign="center",C.font="900 70px Inter,Arial,sans-serif",C.fillStyle="#ff7ac2",!l)C.shadowColor="#ff2e93",C.shadowBlur=18;if(C.fillText("READY?",256,200),C.shadowBlur=0,C.font="600 26px Inter,Arial,sans-serif",C.fillStyle="#c9d6ff",C.fillText("Drag to run. Don't get hit.",256,250),Math.floor(w*1.6)%2===0)C.font="800 28px Inter,Arial,sans-serif",C.fillStyle="#ff9fd0",C.fillText("PRESS START",256,312);Q.needsUpdate=!0}_e(0);let j=function(){let w=document.createElement("canvas");w.width=w.height=64;let P=w.getContext("2d"),D=P.createRadialGradient(32,32,0,32,32,32);return D.addColorStop(0,"rgba(255,255,255,.9)"),D.addColorStop(1,"rgba(255,255,255,0)"),P.fillStyle=D,P.fillRect(0,0,64,64),new bi(w)}(),se={w:0.74,rough:0.38,metal:0.6,pts:[[-0.42,0],[0.3,0],[0.3,0.62],[0.44,0.66],[0.44,0.74],[0.22,0.94],[0.12,1.56],[0.24,1.58],[0.24,1.95],[-0.2,1.97],[-0.42,1.7]],scr:[[0.21,0.95],[0.12,1.55]],bez:[[0.215,0.9],[0.115,1.6],0.7],mq:[[0.245,1.6],[0.245,1.94],0.72],deck:[[0.44,0.745],[0.22,0.945]],stops:[1708080,722708,722708],neon:16732070};function de(w,P,D,T,Z){let q=P[0]-w[0],z=P[1]-w[1],ue=Math.hypot(q,z),Xe=z/ue,Oe=-q/ue,Ne=new rt(new Ri(D,ue),Z);return Ne.rotation.x=-Math.atan2(Oe,Xe),Ne.position.set(0,(w[1]+P[1])/2+Oe*T,(w[0]+P[0])/2+Xe*T),Ne.userData={len:ue,nz:Xe,ny:Oe},Ne}let Fe=(w,P)=>new Vt({color:new ge(w).multiplyScalar(P),toneMapped:!1}),te=1,ce=null,He={1:{stops:[2767516,1516144,593194],rough:0.28,metal:0.4,neon:16732070,door:"chrome",paint:["#2a3a9c","#0c1236"],stripe:"#ff4fa6",grille:"#ff4fa6"},2:{stops:[14690950,10098016,3934764],rough:0.22,metal:0.3,neon:16752592,glow:16727968,door:"chrome",paint:["#e02a86","#6d0f46"],stripe:"#ffffff",grille:"#ffffff"},3:{stops:[1711138,921363,328967],rough:0.3,metal:0.7,neon:3729663,door:"black",paint:["#1a1c22","#08090c"],stripe:"#38e8ff",grille:"#38e8ff"},5:{stops:[1010531,608064,202778],rough:0.28,metal:0.4,neon:2868384,door:"chrome",paint:["#0f6b63","#04201f"],stripe:"#2bc4a0",grille:"#2bc4a0"},4:{stops:[4200554,2755914,918560],rough:0.3,metal:0.45,neon:16738877,door:"chrome",paint:["#40186a","#12062a"],stripe:"#ff6a3d",grille:"#ff4fa6"}};function ze(w,P,D,T,Z,q){w.beginPath(),w.moveTo(P+q,D),w.arcTo(P+T,D,P+T,D+Z,q),w.arcTo(P+T,D+Z,P,D+Z,q),w.arcTo(P,D+Z,P,D,q),w.arcTo(P,D,P+T,D,q),w.closePath()}function Ke(w,P,D,T,Z,q){let z=w.createLinearGradient(P,D,P,D+Z);z.addColorStop(0,q[0]),z.addColorStop(0.5,q[1]),z.addColorStop(1,q[2]),w.fillStyle=z,w.fillRect(P,D,T,Z);for(let ue=0;ue<Z;ue+=2)w.fillStyle=Math.random()<0.5?"#fff":"#000",w.globalAlpha=0.03+Math.random()*0.07,w.fillRect(P,D+ue,T,1);w.globalAlpha=1}function Le(w,P,D,T){let Z=w.createRadialGradient(P-T*0.3,D-T*0.3,1,P,D,T);Z.addColorStop(0,"#fff"),Z.addColorStop(1,"#4a4d5a"),w.fillStyle=Z,w.beginPath(),w.arc(P,D,T,0,7),w.fill(),w.strokeStyle="#1a1b22",w.lineWidth=T*0.3,w.beginPath(),w.moveTo(P-T*0.6,D-T*0.3),w.lineTo(P+T*0.6,D+T*0.3),w.stroke()}function yt(){let D="#"+new ge(ce.neon).getHexString(),T=()=>{let De=document.createElement("canvas");return De.width=800*u,De.height=740*u,De},Z=T(),q=T(),z=Z.getContext("2d"),ue=q.getContext("2d");z.scale(u,u),ue.scale(u,u),ue.fillStyle="#000",ue.fillRect(0,0,800,740);let Xe=z.createLinearGradient(0,0,0,740);if(Xe.addColorStop(0,ce.paint[0]),Xe.addColorStop(1,ce.paint[1]),z.fillStyle=Xe,z.fillRect(0,0,800,740),te===3)for(let De=0;De<740;De+=8)for(let Mt=0;Mt<800;Mt+=8)z.fillStyle=(De+Mt)/8%2?"rgba(255,255,255,.035)":"rgba(0,0,0,.25)",z.fillRect(Mt,De,8,8);[45,595].forEach((De)=>{z.fillStyle="#06070a",ze(z,De,70,160,330,16),z.fill();for(let Mt=92;Mt<390;Mt+=16)for(let Bt=De+18;Bt<De+150;Bt+=16)z.fillStyle="#262a38",z.beginPath(),z.arc(Bt,Mt,4.2,0,7),z.fill(),z.fillStyle="#05060a",z.beginPath(),z.arc(Bt+1,Mt+1,2.6,0,7),z.fill();z.strokeStyle="#3a3e50",z.lineWidth=4,ze(z,De,70,160,330,16),z.stroke(),ue.strokeStyle=ce.grille,ue.globalAlpha=0.55,ue.lineWidth=5,ze(ue,De-4,66,168,338,18),ue.stroke(),ue.globalAlpha=1});let Oe=ce.door==="chrome"?["#c9cee2","#6c7390","#b3b9d0"]:["#33353f","#0e0f14","#272932"];z.save(),z.shadowColor="rgba(0,0,0,.7)",z.shadowBlur=24,z.shadowOffsetY=8,z.fillStyle="#000",ze(z,232,52,336,432,24),z.fill(),z.restore(),z.save(),ze(z,232,52,336,432,24),z.clip(),Ke(z,232,52,336,432,Oe),z.restore(),z.strokeStyle=ce.door==="chrome"?"#5b6076":"#4b4e5c",z.lineWidth=4,ze(z,232,52,336,432,24),z.stroke(),[[252,72],[548,72],[252,464],[548,464]].forEach((De)=>Le(z,De[0],De[1],8)),z.fillStyle="#0a0b10",ze(z,262,88,276,190,14),z.fill(),z.strokeStyle="#000",z.lineWidth=3,z.stroke(),[334,466].forEach((De)=>{z.fillStyle="#15171f",ze(z,De-44,104,88,156,12),z.fill(),z.strokeStyle=ce.door==="chrome"?"#c9cee0":"#555a6c",z.lineWidth=5,z.stroke(),z.fillStyle="#000",ze(z,De-8,130,16,80,6),z.fill(),ue.fillStyle=D,ue.shadowColor=D,ue.shadowBlur=18,ze(ue,De-5,134,10,72,4),ue.fill(),ue.shadowBlur=0,ue.strokeStyle=D,ue.globalAlpha=0.75,ue.lineWidth=5,ze(ue,De-48,100,96,164,14),ue.stroke(),ue.globalAlpha=1,z.fillStyle="#9aa0b8",z.font="800 20px Inter,Arial,sans-serif",z.textAlign="center",z.fillText("25¢",De,246)}),z.fillStyle="#06070b",ze(z,276,296,248,44,8),z.fill(),z.font="800 22px Inter,Arial,sans-serif",z.letterSpacing="6px",z.textAlign="center",z.textBaseline="middle",z.fillStyle=D,z.fillText("INSERT COIN",402,319),ue.font=z.font,ue.letterSpacing="6px",ue.textAlign="center",ue.textBaseline="middle",ue.fillStyle=D,ue.globalAlpha=0.9,ue.fillText("INSERT COIN",402,319),ue.globalAlpha=1,z.letterSpacing="0px",z.textBaseline="alphabetic",z.fillStyle="#0b0c11",ze(z,296,364,208,96,12),z.fill();let Ne=z.createLinearGradient(0,380,0,450);Ne.addColorStop(0,"#3a3e50"),Ne.addColorStop(1,"#14151c"),z.fillStyle=Ne,ze(z,312,380,176,66,8),z.fill(),z.fillStyle="#7b8196",z.font="700 16px Inter,Arial,sans-serif",z.textAlign="center",z.fillText("COIN RETURN",400,418),ue.fillStyle=D,ue.shadowColor=D,ue.shadowBlur=14,ue.beginPath(),ue.arc(400,352,5,0,7),ue.fill(),ue.shadowBlur=0,z.fillStyle=ce.stripe,z.globalAlpha=0.95,z.fillRect(0,520,800,14),z.globalAlpha=0.5,z.fillRect(0,542,800,5),z.globalAlpha=1,ue.fillStyle=ce.stripe,ue.globalAlpha=0.55,ue.fillRect(0,520,800,14),ue.globalAlpha=1,Ke(z,0,568,800,172,ce.door==="chrome"?["#aeb3c8","#5f6580","#8b91aa"]:["#2b2d37","#0d0e12","#1d1f27"]),[[40,600],[760,600],[40,706],[760,706]].forEach((De)=>Le(z,De[0],De[1],9));let he=z.createLinearGradient(0,0,0,60);he.addColorStop(0,"rgba(0,0,0,.65)"),he.addColorStop(1,"rgba(0,0,0,0)"),z.fillStyle=he,z.fillRect(0,0,800,60);let Ue=z.createLinearGradient(0,700,0,740);Ue.addColorStop(0,"rgba(0,0,0,0)"),Ue.addColorStop(1,"rgba(0,0,0,.6)"),z.fillStyle=Ue,z.fillRect(0,700,800,40);let We=new bi(Z);We.colorSpace=Lt,We.anisotropy=8;let vt=new bi(q);return vt.colorSpace=Lt,{map:We,emi:vt}}function mt(w){let P=1024*u,D=document.createElement("canvas");D.width=D.height=P;let T=D.getContext("2d"),Z=P/0.86,q=P/1.97;T.setTransform(Z,0,0,-q,0,P);let z=(Ne,he,Ue,We,vt)=>{if(T.fillStyle=We,T.beginPath(),T.arc(Ne,he,Ue,0,7),T.fill(),T.beginPath(),T.moveTo(Ne-Ue*0.96,he+Ue*0.28),T.lineTo(Ne,he+Ue*2.5),T.lineTo(Ne+Ue*0.96,he+Ue*0.28),T.fill(),vt)T.globalAlpha=0.35,T.fillRect(Ne-Ue*0.12,he+Ue*2.6,Ue*0.24,vt),T.globalAlpha=1},ue=(Ne,he,Ue,We,vt,De,Mt)=>{if(T.strokeStyle=De,T.lineWidth=vt,T.lineCap="round",Mt)T.shadowColor=De,T.shadowBlur=Mt;T.beginPath(),T.moveTo(Ne,he),T.lineTo(Ue,We),T.stroke(),T.shadowBlur=0},Xe=T.createLinearGradient(0,0,0,1.97);if(Xe.addColorStop(0,ce.paint[1]),Xe.addColorStop(1,ce.paint[0]),T.fillStyle=Xe,T.fillRect(0,0,0.86,1.97),te===1||te===5)T.save(),T.shadowColor=w,T.shadowBlur=18,T.fillStyle=w,T.beginPath(),T.moveTo(0,0.3),T.lineTo(0.86,1.12),T.lineTo(0.86,1.3),T.lineTo(0,0.52),T.fill(),T.restore(),T.fillStyle="#fff",T.beginPath(),T.moveTo(0,0.55),T.lineTo(0.86,1.33),T.lineTo(0.86,1.345),T.lineTo(0,0.565),T.fill(),ue(0,0.22,0.86,1,0.035,"#43c6ff",14),ue(0,0.12,0.86,0.9,0.012,"#fff",0),[[0.12,1.74,0.022,"#c6e4ff",0.18],[0.3,1.55,0.03,"#43c6ff",0.26],[0.5,1.82,0.02,"#b6ff3c",0.14],[0.68,1.6,0.028,"#c6e4ff",0.22],[0.2,1.3,0.018,"#b6ff3c",0.1],[0.74,1.9,0.016,"#43c6ff",0.08]].forEach((Ne)=>z(Ne[0],Ne[1],Ne[2],Ne[3],Ne[4]));else if(te===2)T.fillStyle="#fff",T.beginPath(),T.moveTo(0,0.12),T.lineTo(0.86,0.98),T.lineTo(0.86,1.22),T.lineTo(0,0.36),T.fill(),T.fillStyle="#0b0410",T.beginPath(),T.moveTo(0,0.4),T.lineTo(0.86,1.26),T.lineTo(0.86,1.32),T.lineTo(0,0.46),T.fill(),T.fillStyle="#fff",T.beginPath(),T.moveTo(0,0.5),T.lineTo(0.86,1.36),T.lineTo(0.86,1.4),T.lineTo(0,0.54),T.fill(),z(0.43,1.42,0.09,"#ffffff",0),z(0.43,1.42,0.05,"#c4156f",0),z(0.16,1.72,0.025,"#fff",0.2),z(0.7,1.62,0.03,"#fff",0.24);else if(te===3){for(let he=0;he<1.97;he+=0.03)for(let Ue=0;Ue<0.86;Ue+=0.03)T.fillStyle=Math.round((he+Ue)/0.03)%2?"rgba(255,255,255,.045)":"rgba(0,0,0,.32)",T.fillRect(Ue,he,0.03,0.03);let Ne="#38e8ff";T.lineJoin="round",T.strokeStyle=Ne,T.shadowColor=Ne,T.shadowBlur=12,T.lineWidth=0.014,[[[0,0.9],[0.25,0.9],[0.4,1.05],[0.86,1.05]],[[0,1.2],[0.2,1.2],[0.34,1.34],[0.62,1.34],[0.74,1.46],[0.86,1.46]],[[0,0.6],[0.3,0.6],[0.44,0.74],[0.86,0.74]]].forEach((he)=>{T.beginPath(),T.moveTo(he[0][0],he[0][1]);for(let Ue=1;Ue<he.length;Ue++)T.lineTo(he[Ue][0],he[Ue][1]);T.stroke(),T.fillStyle=Ne,he.forEach((Ue)=>{T.beginPath(),T.arc(Ue[0],Ue[1],0.016,0,7),T.fill()})}),T.shadowBlur=0,ue(0,0.24,0.86,0.5,0.05,w,18)}else{let Ne=T.createLinearGradient(0,0,0,1.97);Ne.addColorStop(0,"#12062a"),Ne.addColorStop(0.45,"#3a0f5e"),Ne.addColorStop(0.62,"#b3207a"),Ne.addColorStop(0.72,"#ff5a52"),Ne.addColorStop(0.8,"#2a0d4a"),Ne.addColorStop(1,"#2a0d4a"),T.fillStyle=Ne,T.fillRect(0,0,0.86,1.97);let he=0.43,Ue=1.2,We=0.3,vt=T.createLinearGradient(0,Ue-We,0,Ue+We);vt.addColorStop(0,"#ff6a3d"),vt.addColorStop(1,"#ff2e93"),T.save(),T.shadowColor="#ff2e93",T.shadowBlur=28,T.fillStyle=vt,T.beginPath(),T.arc(he,Ue,We,0,7),T.fill(),T.restore(),T.fillStyle="#2a0d4a";for(let De=0;De<6;De++){let Mt=Ue-We*0.75+De*0.075;T.fillRect(he-We,Mt,We*2,0.008+De*0.006)}T.strokeStyle="#ff4fa6",T.lineWidth=0.006;for(let De=0;De<9;De++){let Mt=0.66-De*De*0.0075;T.beginPath(),T.moveTo(0,Mt),T.lineTo(0.86,Mt),T.stroke()}for(let De=-4;De<=4;De++)T.beginPath(),T.moveTo(0.43+De*0.02,0.66),T.lineTo(0.43+De*0.2,0),T.stroke()}T.fillStyle="rgba(0,0,0,.65)",T.fillRect(0,0,0.86,0.1);let Oe=new bi(D);return Oe.colorSpace=Lt,Oe.anisotropy=8,Oe}function nt(w){let P=document.createElement("canvas");P.width=1024,P.height=380;let D=P.getContext("2d");D.strokeStyle=w,D.shadowColor=w,D.shadowBlur=22,D.lineWidth=16,D.lineCap="round",D.lineJoin="round",[[120,1,1],[190,1,0.5],[904,-1,1],[834,-1,0.5]].forEach((Z)=>{D.globalAlpha=Z[2],D.beginPath(),D.moveTo(Z[0]+Z[1]*22,120),D.lineTo(Z[0]-Z[1]*22,190),D.lineTo(Z[0]+Z[1]*22,260),D.stroke()}),D.globalAlpha=1,D.shadowBlur=0,D.fillStyle="rgba(255,255,255,.55)",D.font="800 30px Inter,Arial,sans-serif",D.letterSpacing="8px",D.textAlign="center",D.fillText("DRAG",150,330),D.fillText("TO RUN",874,330);let T=new bi(P);return T.colorSpace=Lt,T}let ot={};function ae(w){te=w.v||1,ce=He[te],se.stops=ce.stops,se.rough=ce.rough,se.metal=ce.metal,se.neon=ce.neon;let P=se,D=new Zi,T=new ge(w.acc),{pts:Z,w:q}=P,z=[],ue=(ct,At)=>(z.push({mat:ct,kind:At,base:At==="color"?ct.color.clone():At==="opacity"?ct.opacity:ct.emissiveIntensity}),ct),Xe=new mr;Xe.moveTo(-Z[0][0],Z[0][1]);for(let ct=1;ct<Z.length;ct++)Xe.lineTo(-Z[ct][0],Z[ct][1]);if(Xe.closePath(),!ot["geo"+te]){let ct=new bl(Xe,{depth:q-0.07,bevelEnabled:!0,bevelThickness:0.035,bevelSize:0.035,bevelOffset:-0.035,bevelSegments:l?2:6,curveSegments:l?8:24});ct.translate(0,0,-(q-0.07)/2);let At=ct.attributes.position,kt=new Float32Array(At.count*3),di=P.stops;for(let er=0;er<At.count;er++){let ba=Math.min(1,Math.max(0,At.getY(er)/2.1)),Ta=ba*(di.length-1),Hs=Math.min(di.length-2,Math.floor(Ta)),Pr=new ge(di[Hs]).lerp(new ge(di[Hs+1]),Ta-Hs);kt[er*3]=Pr.r,kt[er*3+1]=Pr.g,kt[er*3+2]=Pr.b}ct.setAttribute("color",new Kt(kt,3)),ot["geo"+te]=ct}let Oe=ot["geo"+te],Ne=l?new ii({vertexColors:!0,roughness:0.5,metalness:0.12,envMapIntensity:1.3}):new sa({vertexColors:!0,roughness:P.rough,metalness:P.metal,clearcoat:1,clearcoatRoughness:0.12,envMapIntensity:1.3}),he=new rt(Oe,ue(Ne,"color"));he.rotation.y=Math.PI/2,D.add(he);let Ue=new rt(new Ri(2,2),new Vt({map:X,transparent:!0,depthWrite:!1,opacity:0.9}));Ue.rotation.x=-Math.PI/2,Ue.position.y=0.006,D.add(Ue),D.add(de(P.bez[0],P.bez[1],P.bez[2],0.004,new ii({color:262410,roughness:0.15,metalness:0.8})));let We=0.6,vt=ue(new Vt({map:w.tex,toneMapped:!1}),"color"),De=de(P.scr[0],P.scr[1],We,0.009,vt);D.add(De),D.add(de(P.scr[0],P.scr[1],We,0.013,new Vt({map:U,transparent:!0,opacity:0.9,depthWrite:!1,toneMapped:!1})));let Mt=P.scr;[-1,1].forEach((ct)=>{let At=de([Mt[0][0],Mt[0][1]-0.02],[Mt[1][0],Mt[1][1]+0.02],0.012,0.015,ue(Fe(5213695,1.6),"color"));At.position.x=ct*(We/2+0.012),D.add(At)}),[Mt[0],Mt[1]].forEach((ct,At)=>{let kt=de([ct[0],ct[1]-0.006],[ct[0],ct[1]+0.006],We+0.04,0.015,ue(Fe(5213695,1.6),"color"));kt.position.set(0,ct[1]+(At?0.012:-0.012)*0,ct[0]+0.015),kt.rotation.x=0,D.add(kt)});let Bt=ue(new Vt({map:S(w.title,w.hex),color:12105912,toneMapped:!1}),"color");D.add(de(P.mq[0],P.mq[1],P.mq[2],0.004,Bt));let ai=de(P.deck[0],P.deck[1],0.78,0.004,new ii({color:1708080,roughness:0.3,metalness:l?0.3:0.85}));D.add(ai);let je=new Zi;je.rotation.copy(ai.rotation),je.position.copy(ai.position),D.add(je);let It=new rt(new El(0.104,0.009,12,48),new ii({color:14540253,metalness:l?0.3:1,roughness:0.18}));It.position.z=0.006,je.add(It);let Ht=new Zi;Ht.position.z=0.01,je.add(Ht);let xt=new rt(new Yo(0.09,0.095,0.03,48),new ii({color:T,emissive:T,emissiveIntensity:0.9,roughness:0.25}));xt.rotation.x=Math.PI/2,xt.position.z=0,Ht.add(xt),ue(xt.material,"emissive");let zt=w.hero?new Vt({map:W(),toneMapped:!1}):new Vt({color:3814480,toneMapped:!1}),gi=new rt(new yl(0.084,48),zt);gi.position.z=0.0165,Ht.add(gi),ue(zt,"color");let ql={position:{z:Z[1][0]+0.01}};if(!te){let ct=new rt(new Li(0.3,0.3,0.02),new ii({color:656914,roughness:0.3,metalness:l?0.3:0.9}));ct.position.set(0,0.32,Z[1][0]+0.01),D.add(ct),[-0.06,0.06].forEach((kt)=>{let di=new rt(new Li(0.02,0.1,0.01),ue(Fe(w.hex,1.5),"color"));di.position.set(kt,0.33,ct.position.z+0.014),D.add(di)});let At=new rt(new Li(0.7,0.09,0.02),new ii({color:8949928,metalness:l?0.2:0.7,roughness:0.35}));At.position.set(0,0.07,ct.position.z),D.add(At)}else{let ct=yt(),At=new rt(new Ri(0.668,0.62),new ii({map:ct.map,emissiveMap:ct.emi,emissive:16777215,emissiveIntensity:1.3,roughness:0.5,metalness:0.3}));At.position.set(0,0.31,Z[1][0]+0.004),D.add(At);let kt=new rt(new Ri(0.78,0.297),new Vt({map:nt("#"+new ge(ce.neon).getHexString()),transparent:!0,depthWrite:!1,toneMapped:!1}));kt.position.z=0.0035,je.add(kt);let di=new rt(new Ri(2.2,1.5),new Vt({map:j,color:ce.glow||ce.neon,transparent:!0,opacity:0.55,blending:hr,depthWrite:!1,toneMapped:!1}));di.rotation.x=-Math.PI/2,di.position.set(0,0.012,0.15),D.add(di),ue(di.material,"opacity")}let ch=q/2+0.012;[-1,1].forEach((ct)=>{let At=new ws;for(let kt=0;kt<Z.length;kt++){let di=Z[kt],er=Z[(kt+1)%Z.length];At.add(new Ko(new R(ct*ch,di[1],di[0]),new R(ct*ch,er[1],er[0])))}if(!ot.tube)ot.tube={};if(!ot.tube[ct])ot.tube[ct]=new na(At,Z.length*(l?3:8),0.007,5,!0);if(te){if(!ot.tube2)ot.tube2={};if(!ot.tube2[ct])ot.tube2[ct]=new na(At,Z.length*(l?3:8),0.016,6,!0);let kt=new rt(ot.tube2[ct],new ii({color:328968,roughness:0.25,metalness:0.6}));kt.position.x=-ct*0.004,D.add(kt)}D.add(new rt(ot.tube[ct],ue(Fe(P.neon,1.7),"color")))});let Yl=new Tl(Xe,24);Yl.computeBoundingBox();let cr=Yl.boundingBox,Vs=te?mt(w.hex):N(w.hex,w.title);if(Vs.repeat.set(1/(cr.max.x-cr.min.x),1/(cr.max.y-cr.min.y)),Vs.offset.set(-cr.min.x/(cr.max.x-cr.min.x),-cr.min.y/(cr.max.y-cr.min.y)),[-1,1].forEach((ct)=>{let At=new rt(Yl,ue(te?new ii({map:Vs,emissiveMap:Vs,emissive:16777215,emissiveIntensity:0.5,roughness:0.32,metalness:0.2,side:xi}):new Vt({map:Vs,transparent:!0,side:xi,depthWrite:!1,toneMapped:!1,polygonOffset:!0,polygonOffsetFactor:-2}),"color"));if(At.rotation.y=ct*Math.PI/2,ct<0)At.scale.x=-1;At.position.x=ct*(q/2+0.006),D.add(At)}),l){let ct=(At,kt,di,er,ba,Ta)=>{let Hs=ue(new zr({map:j,color:At,transparent:!0,opacity:Ta,blending:hr,depthWrite:!1,depthTest:!1,fog:!1}),"opacity"),Pr=new Ms(Hs);return Pr.position.set(kt,di,er),Pr.scale.set(ba,ba*0.7,1),D.add(Pr),Pr};ct(w.hex,0,1.78,0.3,1.5,0.55),ct(w.hex,0,0.86,0.36,0.5,0.6)}return D.userData={hero:!!w.hero,mqBase:new ge(12105912),dimMats:z,mqMat:Bt,btnG:Ht,bt:xt,decal:gi,scr:De,deckBd:je},D}d.add(new ua(9075455,3151946,0.9));let ye=new Cn(12570879,1.1);ye.position.set(-4,6,5),d.add(ye);let ve=new fa(16766704,l?0:60,12,0.5,0.6,1.5);ve.position.set(0,5,3.5),ve.target.position.set(0,1,0);let Be=new Ar(16732070,0,7,2);if(Be.position.set(0,0.4,0.3),!l){let w=new Ar(16732070,40,9,2);w.position.set(1.6,0.6,2.4),d.add(w);let P=new Ar(5213695,30,9,2);P.position.set(-2.2,1.4,2.4),d.add(P),d.add(ve,ve.target,Be)}else{let w=new Cn(16732070,1.1);w.position.set(4,2,3),d.add(w);let P=new Cn(5213695,0.9);P.position.set(-4,2,3),d.add(P)}let Ie=new Ms(new zr({map:j,color:16732070,transparent:!0,opacity:0,blending:hr,depthWrite:!1,fog:!1}));if(Ie.scale.set(7,3.5,1),Ie.position.set(0,0.5,0.6),l)d.add(Ie);let Ze=[["GAME 04",5213695,3,"Coming soon"],["GAME 02",2868384,1,"Coming soon"],["DRIPPY",16732070,0,"Survive the rain"],["GAME 03",11691775,2,"Coming soon"],["GAME 05",2868384,2,"Coming soon"]],Ce=2,dt=Ze.map((w,P)=>{let D="#"+w[1].toString(16).padStart(6,"0"),T=ae({acc:w[1],hex:D,title:w[0],tex:w[2]===0?Q:g(w[2],D),hero:P===Ce,v:[3,2,1,4,5][P]});return d.add(T),T}),gt=()=>{let w=t.getBoundingClientRect();return{w:Math.max(2,Math.round(w.width)),h:Math.max(2,Math.round(w.height))}},Qe=gt();y.setPixelRatio(a?1:l?Math.min(devicePixelRatio||1,2):c?Math.min(devicePixelRatio||1,2):Math.min(devicePixelRatio||1,1.5)),y.setSize(Qe.w,Qe.h,!1);let B,Ut;if(!l){let w=new Rt(Qe.w,Qe.h,{type:Pt,samples:0});B=new sh(y,w),B.addPass(new oh(d,m)),Ut=new Dn(new J(Qe.w/2,Qe.h/2),0.42,0.45,0.92),B.addPass(Ut),B.addPass(new ah)}else B={render:()=>y.render(d,m),setSize:()=>{}},Ut={strength:0};let at=1.78,Ft=1.95,Ee=6.2,bt=1.2,tt=1;function lt(){Qe=gt(),at=Qe.w/Qe.h,y.setSize(Qe.w,Qe.h,!1),B.setSize(Qe.w,Qe.h),m.aspect=at,m.updateProjectionMatrix();let w=Math.min(at,1.7);Ee=5.1;let P=Ee*0.536*at;if(Ft=Math.max(3.9,P*0.5+1.4),at<1)Ee=5.7,bt=1.15,tt=0.98,Ft=2.6;else bt=1.2,tt=1}lt();let qt=Qe.w,A=Qe.h;new ResizeObserver(()=>{let w=gt();if(Math.abs(w.w-qt)<3&&Math.abs(w.h-A)<3)return;qt=w.w,A=w.h,lt()}).observe(t);let _=Ce,G=Ce,fe=0,le=0,me=null,be=-1,K=null,oe=!1,Me=0,F=0,re=[0.12,0.12,0.2,0.12,0.12],ee=(w)=>Math.max(0.3,1-0.45*Math.abs(w)),pe={hover:!1,press:!1};function xe(w){let P=Math.abs(w),D=Math.sign(w);return{x:w*Ft,z:-(0.8*Math.min(P,3)+0.2*Math.max(0,Math.min(P,3)-1)),sc:1-0.08*Math.min(P,3),ry:-0.3*Math.max(0,1-P)-D*Math.min(1,P)*0.2-(P>1?D*0.05*(P-1):0)}}let we=[1,0.2,1,0.55,0.12,1,1,0.4,1,0.7];function $e(w){let P=w%11.7;if(P>9.6&&P<10.5)return we[Math.floor(P*14)%we.length];if(P>4.2&&P<4.34)return 0.3;if(P>4.5&&P<4.58)return 0.5;return 1}function qe(w,P){let D=w.userData,T=Math.abs((D.lastK||-1)-P)>=0.003;if(D.hero&&!h){let Z=$e(performance.now()/1000);if(T||Z!==D.lastF){if(!T)D.mqMat.color.copy(D.mqBase).multiplyScalar(P*Z)}if(D.lastF=Z,T)D.lastK=P,D.dimMats.forEach((q)=>{if(q.kind==="color")q.mat.color.copy(q.base).multiplyScalar(P);else if(q.kind==="opacity")q.mat.opacity=q.base*P;else q.mat.emissiveIntensity=q.base*P}),D.mqMat.color.copy(D.mqBase).multiplyScalar(P*Z);return}if(!T)return;w.userData.lastK=P,w.userData.dimMats.forEach((Z)=>{if(Z.kind==="color")Z.mat.color.copy(Z.base).multiplyScalar(P);else if(Z.kind==="opacity")Z.mat.opacity=Z.base*P;else Z.mat.emissiveIntensity=Z.base*P})}let Ae=[[0.36,0,1,1],[0.42,0,1.09,0.88],[0.54,0.4,0.98,1.03],[0.66,0,1.03,0.97],[0.8,0.07,1,1],[1,0,1,1]];function it(w){let P=w/1.7;if(P<=0)return{y:12,sx:1,sy:1};if(P<0.36){let q=P/0.36;return{y:12*(1-q*q),sx:1,sy:1}}if(P>=1)return{y:0,sx:1,sy:1};let D=Ae[0],T=Ae[1];for(let q=0;q<Ae.length-1;q++)if(P>=Ae[q][0]&&P<Ae[q+1][0]){D=Ae[q],T=Ae[q+1];break}let Z=(P-D[0])/(T[0]-D[0]);return Z=Z*Z*(3-2*Z),{y:D[1]+(T[1]-D[1])*Z,sx:D[2]+(T[2]-D[2])*Z,sy:D[3]+(T[3]-D[3])*Z}}let ut=0.612,Re=0;function Et(w){if(h){for(let P=0;P<5;P++)re[P]=1;me=-1e9,be=99;return}me=w,be=0,Re=0,s.intro=performance.now()}function Qt(w,P){let D=w-P*9;return Math.exp(-D*D/1.6)*Math.exp(-P*0.9)}let Hi=!0;new IntersectionObserver((w)=>{Hi=w[0].isIntersecting}).observe(t);let va=new R,Jr=new R,ya=new R,Ma=new R;function ar(w,P){return Jr.copy(P),w.localToWorld(Jr),Jr.project(m),[(Jr.x*0.5+0.5)*Qe.w,(-Jr.y*0.5+0.5)*Qe.h]}let oi=x("hallStart"),Us=x("hallName"),Fs=x("hallSub"),Kr=x("hallIdx"),Bs=x("hallPrevN"),Os=x("hallNextN"),Cr=x("hallPrev"),Sa=x("hallNext"),zs=x("hallPips");function Qr(){let w=Ze[_];if(Us)Us.textContent=w[0];if(Fs)Fs.textContent=w[3];if(Kr)Kr.textContent="0"+(_+1)+" / 05";if(Cr){if(Cr.hidden=_<=0,Bs&&_>0)Bs.textContent=Ze[_-1][0]}if(Sa){if(Sa.hidden=_>=4,Os&&_<4)Os.textContent=Ze[_+1][0]}if(zs)Array.prototype.forEach.call(zs.children,(P,D)=>P.classList.toggle("on",D===_));if(oi)oi.disabled=_!==Ce,oi.hidden=_!==Ce;p.dataset.hall=_===Ce?"on":"off";try{window.dispatchEvent(new CustomEvent("hallchange",{detail:{index:_,name:w[0],hero:_===Ce}}))}catch(P){}}function $r(w){let P=Math.max(0,Math.min(4,_+w));if(P!==_)_=P,Qr()}Qr(),x("hallPrev")&&x("hallPrev").addEventListener("click",()=>$r(-1)),x("hallNext")&&x("hallNext").addEventListener("click",()=>$r(1)),x("hallScore")&&x("hallScore").addEventListener("click",()=>document.querySelector('#switch [data-mode="score"]').click()),x("hallRules")&&x("hallRules").addEventListener("click",()=>document.querySelector('#switch [data-mode="rules"]').click()),window.addEventListener("keydown",(w)=>{if(p.classList.contains("big")||p.classList.contains("fs")||w.target.tagName==="INPUT")return;if(document.querySelector(".rmodal:not([hidden])"))return;if(w.key==="ArrowLeft")$r(-1);if(w.key==="ArrowRight")$r(1)});let lr=null;if(t.addEventListener("pointerdown",(w)=>{if(w.target.closest("button, a"))return;lr={x:w.clientX,y:w.clientY,m:!1}}),window.addEventListener("pointermove",(w)=>{if(le=(w.clientX/innerWidth-0.5)*2,lr&&Math.abs(w.clientX-lr.x)>8)lr.m=!0}),window.addEventListener("pointerup",(w)=>{if(!lr)return;let P=w.clientX-lr.x,D=lr.m;if(lr=null,D&&Math.abs(P)>40){$r(P<0?1:-1);return}if(!D){let T=t.getBoundingClientRect(),Z=-1,q=1e9;if(dt.forEach((z,ue)=>{let Xe=ar(z,new R(0,1,0)),Oe=Math.abs(Xe[0]+T.left-w.clientX);if(Oe<q)q=Oe,Z=ue}),Z>=0&&Z!==_&&q<Qe.w*0.12)_=Z,Qr()}}),oi)oi.addEventListener("pointerenter",()=>{pe.hover=!0}),oi.addEventListener("pointerleave",()=>{pe.hover=!1,pe.press=!1}),oi.addEventListener("pointerdown",()=>{pe.press=!0}),window.addEventListener("pointerup",()=>{pe.press=!1}),oi.addEventListener("click",()=>x("btnStart").click());function Xl(){let w=dt[Ce];w.updateMatrixWorld(!0);let P=[[-0.3,0.95,0.21],[0.3,0.95,0.21],[-0.3,1.55,0.12],[0.3,1.55,0.12]].map((Oe)=>ar(w,new R(Oe[0],Oe[1],Oe[2]))),D=P.map((Oe)=>Oe[0]),T=P.map((Oe)=>Oe[1]),Z=t.getBoundingClientRect(),q=Math.min(...D)+Z.left,z=Math.min(...T)+Z.top,ue=Math.max(...D)+Z.left,Xe=Math.max(...T)+Z.top;return{left:q,top:z,width:ue-q,height:Xe-z,right:ue,bottom:Xe,x:q,y:z}}window.__hall={ready:!0,screenRect:Xl,heroActive:()=>_===Ce,replay:()=>{for(let w=0;w<5;w++)re[w]=w===Ce?0.2:0.12;Et(performance.now())},setActive:(w)=>{_=w,Qr()},instant:()=>{G=_},seek:(w)=>{if(K=w,me===null)me=performance.now()}};let Gs=performance.now(),v=0,O=0,Y=0,V=0,k=0,Se=0;function ke(w){requestAnimationFrame(ke);let P=Math.min(0.05,(w-Gs)/1000);if(Gs=w,!s.f1)s.f1=performance.now();if(document.hidden||!Hi||p.classList.contains("big")||p.classList.contains("fs"))return;let D=me===null||me!==-1e9&&Me<6||oe;if(!D&&O++&1)return;if(D)M=!1;if(c&&!f&&!D&&Se<2){if(Y){if(V+=Math.min(100,w-Y),++k>=50){let Oe=V/k;if(V=0,k=0,Oe<=48)Se=2;else if(Se===0&&y.getPixelRatio()>1)Se=1,y.setPixelRatio(1),y.setSize(Qe.w,Qe.h,!1),B.setSize(Qe.w,Qe.h);else if(Se=2,Ut.enabled=!1,b)b.visible=!1}}Y=w}if(me===null&&F>2&&p.classList.contains("cabvis"))Et(w);if(me!==null&&K===null&&F>2)Me+=P;if(me===null)Me=0;let T=me===null?-1:K!==null?K:Me;if(be=T,G+=(_-G)*Math.min(1,P*7),w-v>(l?120:66))v=w,_e(w/1000);let Z=me===null;dt.forEach((Oe,Ne)=>{let he=Ne-G,Ue=xe(he),We=0,vt=1,De=1;if(Ne===Ce){if(Z)We=0,vt=De=0.001;else if(T<1.7&&!h){let xt=it(T);We=xt.y,vt=xt.sx,De=xt.sy}}let Mt=0,Bt=Math.hypot(Ue.x,Ue.z-xe(Ce-G).z),ai=xe(Ce-G).x;if(Bt=Math.hypot(Ue.x-ai,Ue.z-xe(Ce-G).z),!Z&&T>ut&&Ne!==Ce&&!h)Mt=Math.max(0,0.09*Qt(Bt,T-ut)*Math.sin((Bt-(T-ut)*9)*2));Oe.position.set(Ue.x,We+Mt,Ue.z),Oe.scale.set(Ue.sc*vt,Ue.sc*De,Ue.sc*vt),Oe.rotation.y=Ue.ry;let je;if(h||T>6||T<0&&!1)je=1;else if(Z)je=Ne===Ce?0.2:0.12;else if(Ne===Ce){if(je=T<0.6?0.2:Math.min(1,0.2+(T-0.6)/0.5*0.8),T>1.6&&T<2.8){let xt=T-1.6;je=[1.5,0.3,1.4,0.4,1,1][Math.min(5,Math.floor(xt/1.2*6))]}}else{let xt=ut+Bt/9;je=Math.max(0.12,Math.min(1,(T-xt)/0.5))}re[Ne]=je,qe(Oe,ee(he)*je*(Ne===Ce?1:1));let It=Oe.userData,Ht=0.8+0.35*Math.sin(w/420);if(Ne===Ce)It.bt.material.emissiveIntensity=(pe.hover?1.2:0.45*Ht)*ee(he)*je,It.btnG.position.z=pe.press?0:0.01,It.decal.material.color.setScalar((pe.hover?0.9:0.7+0.05*Math.sin(w/420))*ee(he)*je)});let q=me===null||h?-1:T-ut;I.uAge.value=q<0||q>6?-1:q,L.uAge.value=q<0||q>5?-1:q;let z=xe(Ce-G);if(I.uC.value.set(z.x,z.z),window.__cracks.position.set(z.x,0,z.z),q>=0&&q<1.2)Be.intensity=110*Math.exp(-q*4.5),Ie.material.opacity=0.9*Math.exp(-q*3.5),Re=Math.max(Re,q<0.08?1:Re);else Be.intensity=0,Ie.material.opacity=0;Re*=Math.exp(-P*5),Ut.strength=0.42+(q>=0&&q<1?0.6*Math.exp(-q*4):0),fe+=(le*0.35*(at<1?0.3:1)-fe)*Math.min(1,P*3);let ue=(Math.random()-0.5)*0.09*Re,Xe=(Math.random()-0.5)*0.09*Re;if(m.position.set(fe+ue,bt+Xe,Ee),m.lookAt(fe*0.3,tt+Xe,0),ve.position.x=z.x,ve.target.position.x=z.x,Ie.position.x=z.x,Ie.position.z=z.z+0.6,B.render(),F++,oi&&!oi.hidden){let Oe=dt[Ce];Oe.updateMatrixWorld(!0);let Ne=Oe.userData,he=ya;Ne.btnG.getWorldPosition(he),he.project(m);let Ue=(he.x*0.5+0.5)*Qe.w,We=(-he.y*0.5+0.5)*Qe.h,vt=Ma;Ne.btnG.getWorldPosition(vt),vt.x+=0.1*Oe.scale.x*Math.cos(Oe.rotation.y),vt.z-=0.1*Oe.scale.x*Math.sin(Oe.rotation.y),vt.project(m);let De=Math.max(18,Math.abs((vt.x*0.5+0.5)*Qe.w-Ue)*1.15);oi.style.width=oi.style.height=(De*2).toFixed(0)+"px",oi.style.transform="translate("+(Ue-De).toFixed(1)+"px,"+(We-De).toFixed(1)+"px)",oi.style.visibility=Z||T<1.9?"hidden":"visible"}}try{d.traverse((w)=>{w.frustumCulled=!1}),dt[Ce].scale.setScalar(0.001),y.compile(d,m),B.render(),B.render()}catch(w){}s.compiled=performance.now(),requestAnimationFrame(ke),document.dispatchEvent(new Event("hallready"))}})();
