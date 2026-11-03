var Hs="187";var _h=0,jl=1,vh=2;var zn=1,yh=2,nn=3,Ni=0,dt=1,Ht=2,Ui=0,Ir=1,sn=2,ec=3,tc=4,Mh=5;var Lr=100,Sh=101,bh=102,Th=103,Eh=104,wh=200,Ah=201,Rh=202,Ch=203,_a=204,va=205,Ph=206,Ih=207,Lh=208,Dh=209,Nh=210,Uh=211,Fh=212,Oh=213,Bh=214,Ws=0,Xs=1,qs=2,Dr=3,Ys=4,Zs=5,Js=6,Ks=7,on=0,zh=1,Gh=2,Ti=0,Gn=1,Vn=2,kn=3,Nr=4,Hn=5,Wn=6,Xn=7;var ya=300,Fi=301,xr=302,Qs=303,$s=304,Ur=1000,Kt=1001,qn=1002,ut=1003,ic=1004;var Yn=1005;var gt=1006,js=1007;var ui=1008;var Tt=1009,Ma=1010,Sa=1011,_r=1012,Zn=1013,Lt=1014,Et=1015,xt=1016,Jn=1017,Kn=1018,Qi=1020,ba=35902,Ta=35899,Ea=1021,wa=1022,Wt=1023,_i=1026,Ei=1027,Qn=1028,an=1029,wi=1030,$n=1031;var jn=1033,es=33776,ts=33777,is=33778,rs=33779,eo=35840,to=35841,io=35842,ro=35843,no=36196,so=37492,oo=37496,ao=37488,lo=37489,ln=37490,co=37491,ho=37808,uo=37809,fo=37810,po=37811,mo=37812,go=37813,xo=37814,_o=37815,vo=37816,yo=37817,Mo=37818,So=37819,bo=37820,To=37821,Eo=36492,wo=36494,Ao=36495,Ro=36283,Co=36284,cn=36285,Po=36286;var hn=2300,Aa=2301,Ra=2302,rc=2303,Ca=2400,Pa=2401,Ia=2402;var Vh=3200;var $i=0,kh=1,Oi="",Dt="srgb",un="srgb-linear",fn="linear",Je="srgb";var La=7680;var Hh=519,Wh=512,Xh=513,qh=514,Da=515,Yh=516,Zh=517,Na=518,Ua=519,Io=35044;var nc="300 es",Xt=2000,sr=2001;function Kh(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function sc(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function Fr(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function oc(){let e=Fr("canvas");return e.style.display="block",e}var Jh={},ns=null;function dn(...e){let t="THREE."+e.shift();if(ns)ns("log",t,...e);else console.log(t,...e)}function Qh(e){let t=e[0];if(typeof t==="string"&&t.startsWith("TSL:")){let i=e[1];if(i&&i.isStackTrace)e[0]+=" "+i.getLocation();else e[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return e}function le(...e){e=Qh(e);let t="THREE."+e.shift();if(ns)ns("warn",t,...e);else{let i=e[0];if(i&&i.isStackTrace)console.warn(i.getError(t));else console.warn(t,...e)}}function ye(...e){e=Qh(e);let t="THREE."+e.shift();if(ns)ns("error",t,...e);else{let i=e[0];if(i&&i.isStackTrace)console.error(i.getError(t));else console.error(t,...e)}}function Bi(...e){let t=e.join(" ");if(t in Jh)return;Jh[t]=!0,le(...e)}function $h(e,t,i){return new Promise(function(r,n){function s(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:n();break;case e.TIMEOUT_EXPIRED:setTimeout(s,i);break;default:r()}}setTimeout(s,i)})}var jh={[Ws]:Ws,[qs]:Js,[Ys]:Ys,[Dr]:Zs,[Xs]:Xs,[Js]:qs,[Ks]:Ks,[Zs]:Dr};class Nt{addEventListener(e,t){if(this._listeners===void 0)this._listeners={};let i=this._listeners;if(i[e]===void 0)i[e]=[];if(i[e].indexOf(t)===-1)i[e].push(t)}hasEventListener(e,t){let i=this._listeners;if(i===void 0)return!1;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let r=i[e];if(r!==void 0){let n=r.indexOf(t);if(n!==-1)r.splice(n,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let r=i.slice(0);for(let n=0,s=r.length;n<s;n++)r[n].call(this,e);e.target=null}}}var si=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var pn=Math.PI/180,mn=180/Math.PI;function Qt(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(si[e&255]+si[e>>8&255]+si[e>>16&255]+si[e>>24&255]+"-"+si[t&255]+si[t>>8&255]+"-"+si[t>>16&15|64]+si[t>>24&255]+"-"+si[i&63|128]+si[i>>8&255]+"-"+si[i>>16&255]+si[i>>24&255]+si[r&255]+si[r>>8&255]+si[r>>16&255]+si[r>>24&255]).toLowerCase()}function ze(e,t,i){return Math.max(t,Math.min(i,e))}function eu(e,t){return(e%t+t)%t}function Fa(e,t,i){return(1-i)*e+i*t}function tu(e){return Math.pow(2,Math.floor(Math.log(e)/Math.LN2))}function ss(e){switch(e.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Oa(e,t){if(t.constructor===Float32Array)return e;let i=ss(t);if(i===void 0)throw Error("THREE.MathUtils: Invalid component type.");return Math.max(e/i,-1)}function Ba(e,t){if(t.constructor===Float32Array)return e;let i=ss(t);if(i===void 0)throw Error("THREE.MathUtils: Invalid component type.");return Math.round(e*i)}class ee{static{this.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ze(this.x,e.x,t.x),this.y=ze(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ze(this.x,e,t),this.y=ze(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ze(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(ze(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),r=Math.sin(t),n=this.x-e.x,s=this.y-e.y;return this.x=n*i-s*r+e.x,this.y=n*r+s*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class qt{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,n,s,o){let a=i[r+0],l=i[r+1],c=i[r+2],h=i[r+3],d=n[s+0],u=n[s+1],p=n[s+2],x=n[s+3];if(h!==x||a!==d||l!==u||c!==p){let M=a*d+l*u+c*p+h*x;if(M<0)d=-d,u=-u,p=-p,x=-x,M=-M;let f=1-o;if(M<0.9995){let m=Math.acos(M),b=Math.sin(m);f=Math.sin(f*m)/b,o=Math.sin(o*m)/b,a=a*f+d*o,l=l*f+u*o,c=c*f+p*o,h=h*f+x*o}else{a=a*f+d*o,l=l*f+u*o,c=c*f+p*o,h=h*f+x*o;let m=1/Math.sqrt(a*a+l*l+c*c+h*h);a*=m,l*=m,c*=m,h*=m}}e[t]=a,e[t+1]=l,e[t+2]=c,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,r,n,s){let o=i[r],a=i[r+1],l=i[r+2],c=i[r+3],h=n[s],d=n[s+1],u=n[s+2],p=n[s+3];return e[t]=o*p+c*h+a*u-l*d,e[t+1]=a*p+c*d+l*h-o*u,e[t+2]=l*p+c*u+o*d-a*h,e[t+3]=c*p-o*h-a*d-l*u,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let{_x:i,_y:r,_z:n,_order:s}=e,{cos:o,sin:a}=Math,l=o(i/2),c=o(r/2),h=o(n/2),d=a(i/2),u=a(r/2),p=a(n/2);switch(s){case"XYZ":this._x=d*c*h+l*u*p,this._y=l*u*h-d*c*p,this._z=l*c*p+d*u*h,this._w=l*c*h-d*u*p;break;case"YXZ":this._x=d*c*h+l*u*p,this._y=l*u*h-d*c*p,this._z=l*c*p-d*u*h,this._w=l*c*h+d*u*p;break;case"ZXY":this._x=d*c*h-l*u*p,this._y=l*u*h+d*c*p,this._z=l*c*p+d*u*h,this._w=l*c*h-d*u*p;break;case"ZYX":this._x=d*c*h-l*u*p,this._y=l*u*h+d*c*p,this._z=l*c*p-d*u*h,this._w=l*c*h+d*u*p;break;case"YZX":this._x=d*c*h+l*u*p,this._y=l*u*h+d*c*p,this._z=l*c*p-d*u*h,this._w=l*c*h-d*u*p;break;case"XZY":this._x=d*c*h-l*u*p,this._y=l*u*h-d*c*p,this._z=l*c*p+d*u*h,this._w=l*c*h+d*u*p;break;default:le("Quaternion: .setFromEuler() encountered an unknown order: "+s)}if(t===!0)this._onChangeCallback();return this}setFromAxisAngle(e,t){let i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],r=t[4],n=t[8],s=t[1],o=t[5],a=t[9],l=t[2],c=t[6],h=t[10],d=i+o+h;if(d>0){let u=0.5/Math.sqrt(d+1);this._w=0.25/u,this._x=(c-a)*u,this._y=(n-l)*u,this._z=(s-r)*u}else if(i>o&&i>h){let u=2*Math.sqrt(1+i-o-h);this._w=(c-a)/u,this._x=0.25*u,this._y=(r+s)/u,this._z=(n+l)/u}else if(o>h){let u=2*Math.sqrt(1+o-i-h);this._w=(n-l)/u,this._x=(r+s)/u,this._y=0.25*u,this._z=(a+c)/u}else{let u=2*Math.sqrt(1+h-i-o);this._w=(s-r)/u,this._x=(n+l)/u,this._y=(a+c)/u,this._z=0.25*u}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;if(i<0.00000001)if(i=0,Math.abs(e.x)>Math.abs(e.z))this._x=-e.y,this._y=e.x,this._z=0,this._w=i;else this._x=0,this._y=-e.z,this._z=e.y,this._w=i;else this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i;return this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ze(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();if(e===0)this._x=0,this._y=0,this._z=0,this._w=1;else e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e;return this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let{_x:i,_y:r,_z:n,_w:s}=e,{_x:o,_y:a,_z:l,_w:c}=t;return this._x=i*c+s*o+r*l-n*a,this._y=r*c+s*a+n*o-i*l,this._z=n*c+s*l+i*a-r*o,this._w=s*c-i*o-r*a-n*l,this._onChangeCallback(),this}slerp(e,t){let{_x:i,_y:r,_z:n,_w:s}=e,o=this.dot(e);if(o<0)i=-i,r=-r,n=-n,s=-s,o=-o;let a=1-t;if(o<0.9995){let l=Math.acos(o),c=Math.sin(l);a=Math.sin(a*l)/c,t=Math.sin(t*l)/c,this._x=this._x*a+i*t,this._y=this._y*a+r*t,this._z=this._z*a+n*t,this._w=this._w*a+s*t,this._onChangeCallback()}else this._x=this._x*a+i*t,this._y=this._y*a+r*t,this._z=this._z*a+n*t,this._w=this._w*a+s*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),n=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),n*Math.sin(t),n*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class A{static{this.prototype.isVector3=!0}constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){if(i===void 0)i=this.z;return this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(iu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(iu.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,r=this.z,n=e.elements;return this.x=n[0]*t+n[3]*i+n[6]*r,this.y=n[1]*t+n[4]*i+n[7]*r,this.z=n[2]*t+n[5]*i+n[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,n=e.elements,s=1/(n[3]*t+n[7]*i+n[11]*r+n[15]);return this.x=(n[0]*t+n[4]*i+n[8]*r+n[12])*s,this.y=(n[1]*t+n[5]*i+n[9]*r+n[13])*s,this.z=(n[2]*t+n[6]*i+n[10]*r+n[14])*s,this}applyQuaternion(e){let t=this.x,i=this.y,r=this.z,{x:n,y:s,z:o,w:a}=e,l=2*(s*r-o*i),c=2*(o*t-n*r),h=2*(n*i-s*t);return this.x=t+a*l+s*h-o*c,this.y=i+a*c+o*l-n*h,this.z=r+a*h+n*c-s*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,r=this.z,n=e.elements;return this.x=n[0]*t+n[4]*i+n[8]*r,this.y=n[1]*t+n[5]*i+n[9]*r,this.z=n[2]*t+n[6]*i+n[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ze(this.x,e.x,t.x),this.y=ze(this.y,e.y,t.y),this.z=ze(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ze(this.x,e,t),this.y=ze(this.y,e,t),this.z=ze(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ze(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let{x:i,y:r,z:n}=e,{x:s,y:o,z:a}=t;return this.x=r*a-n*o,this.y=n*s-i*a,this.z=i*o-r*s,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ac.copy(this).projectOnVector(e),this.sub(ac)}reflect(e){return this.sub(ac.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(ze(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}var ac=new A,iu=new qt;class Ie{static{this.prototype.isMatrix3=!0}constructor(e,t,i,r,n,s,o,a,l){if(this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0)this.set(e,t,i,r,n,s,o,a,l)}set(e,t,i,r,n,s,o,a,l){let c=this.elements;return c[0]=e,c[1]=r,c[2]=o,c[3]=t,c[4]=n,c[5]=a,c[6]=i,c[7]=s,c[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,n=this.elements,s=i[0],o=i[3],a=i[6],l=i[1],c=i[4],h=i[7],d=i[2],u=i[5],p=i[8],x=r[0],M=r[3],f=r[6],m=r[1],b=r[4],E=r[7],S=r[2],w=r[5],P=r[8];return n[0]=s*x+o*m+a*S,n[3]=s*M+o*b+a*w,n[6]=s*f+o*E+a*P,n[1]=l*x+c*m+h*S,n[4]=l*M+c*b+h*w,n[7]=l*f+c*E+h*P,n[2]=d*x+u*m+p*S,n[5]=d*M+u*b+p*w,n[8]=d*f+u*E+p*P,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],r=e[2],n=e[3],s=e[4],o=e[5],a=e[6],l=e[7],c=e[8];return t*s*c-t*o*l-i*n*c+i*o*a+r*n*l-r*s*a}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],n=e[3],s=e[4],o=e[5],a=e[6],l=e[7],c=e[8],h=c*s-o*l,d=o*a-c*n,u=l*n-s*a,p=t*h+i*d+r*u;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/p;return e[0]=h*x,e[1]=(r*l-c*i)*x,e[2]=(o*i-r*s)*x,e[3]=d*x,e[4]=(c*t-r*a)*x,e[5]=(r*n-o*t)*x,e[6]=u*x,e[7]=(i*a-l*t)*x,e[8]=(s*t-i*n)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,n,s,o){let a=Math.cos(n),l=Math.sin(n);return this.set(i*a,i*l,-i*(a*s+l*o)+s+e,-r*l,r*a,-r*(-l*s+a*o)+o+t,0,0,1),this}scale(e,t){return Bi("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(lc.makeScale(e,t)),this}rotate(e){return Bi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(lc.makeRotation(-e)),this}translate(e,t){return Bi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(lc.makeTranslation(e,t)),this}makeTranslation(e,t){if(e.isVector2)this.set(1,0,e.x,0,1,e.y,0,0,1);else this.set(1,0,e,0,1,t,0,0,1);return this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}var lc=new Ie;var ru=new Ie().set(0.4123908,0.3575843,0.1804808,0.212639,0.7151687,0.0721923,0.0193308,0.1191948,0.9505322),nu=new Ie().set(3.2409699,-1.5373832,-0.4986108,-0.9692436,1.8759675,0.0415551,0.0556301,-0.203977,1.0569715);function pg(){let e={enabled:!0,workingColorSpace:un,spaces:{},convert:function(n,s,o){if(this.enabled===!1||s===o||!s||!o)return n;if(this.spaces[s].transfer===Je)n.r=ji(n.r),n.g=ji(n.g),n.b=ji(n.b);if(this.spaces[s].primaries!==this.spaces[o].primaries)n.applyMatrix3(this.spaces[s].toXYZ),n.applyMatrix3(this.spaces[o].fromXYZ);if(this.spaces[o].transfer===Je)n.r=gn(n.r),n.g=gn(n.g),n.b=gn(n.b);return n},workingToColorSpace:function(n,s){return this.convert(n,this.workingColorSpace,s)},colorSpaceToWorking:function(n,s){return this.convert(n,s,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){if(n===Oi)return fn;return this.spaces[n].transfer},getToneMappingMode:function(n){return this.spaces[n].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(n,s=this.workingColorSpace){return n.fromArray(this.spaces[s].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,s,o){return n.copy(this.spaces[o].fromXYZ).multiply(this.spaces[s].toXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}},t=[0.64,0.33,0.3,0.6,0.15,0.06],i=[0.2126,0.7152,0.0722],r=[0.3127,0.329];return e.define({[un]:{primaries:t,whitePoint:r,transfer:fn,toXYZ:ru,fromXYZ:nu,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Dt},outputColorSpaceConfig:{drawingBufferColorSpace:Dt}},[Dt]:{primaries:t,whitePoint:r,transfer:Je,toXYZ:ru,fromXYZ:nu,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Dt}}}),e}var Ge=pg();function ji(e){return e<0.04045?e*0.0773993808:Math.pow(e*0.9478672986+0.0521327014,2.4)}function gn(e){return e<0.0031308?e*12.92:1.055*Math.pow(e,0.41666)-0.055}var os;class za{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src))return e.src;if(typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{if(os===void 0)os=Fr("canvas");os.width=e.width,os.height=e.height;let r=os.getContext("2d");if(e instanceof ImageData)r.putImageData(e,0,0);else r.drawImage(e,0,0,e.width,e.height);i=os}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Fr("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let r=i.getImageData(0,0,e.width,e.height),n=r.data;for(let s=0;s<n.length;s++)n[s]=ji(n[s]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)if(t instanceof Uint8Array||t instanceof Uint8ClampedArray)t[i]=Math.floor(ji(t[i]/255)*255);else t[i]=ji(t[i]);return{data:t,width:e.width,height:e.height}}else return le("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}var mg=0;class or{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:mg++}),this.uuid=Qt(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;if(typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement)e.set(t.videoWidth,t.videoHeight,0);else if(typeof VideoFrame<"u"&&t instanceof VideoFrame)e.set(t.displayWidth,t.displayHeight,0);else if(t!==null)e.set(t.width||0,t.height||0,t.depth||0);else e.set(0,0,0);return e}set needsUpdate(e){if(e===!0)this.version++}toJSON(e){let t=e===void 0||typeof e==="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let n;if(Array.isArray(r)){n=[];for(let s=0,o=r.length;s<o;s++)if(r[s].isDataTexture)n.push(cc(r[s].image));else n.push(cc(r[s]))}else n=cc(r);i.url=n}if(!t)e.images[this.uuid]=i;return i}}function cc(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap)return za.getDataURL(e);else if(e.data)return{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name};else return le("Texture: Unable to serialize Texture."),{}}var gg=0,hc=new A;class et extends Nt{constructor(e=et.DEFAULT_IMAGE,t=et.DEFAULT_MAPPING,i=Kt,r=Kt,n=gt,s=ui,o=Wt,a=Tt,l=et.DEFAULT_ANISOTROPY,c=Oi){super();this.isTexture=!0,Object.defineProperty(this,"id",{value:gg++}),this.uuid=Qt(),this.name="",this.source=new or(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=n,this.minFilter=s,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=a,this.offset=new ee(0,0),this.repeat=new ee(1,1),this.center=new ee(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ie,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=e&&e.depth&&e.depth>1?!0:!1,this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(hc).x}get height(){return this.source.getSize(hc).y}get depth(){return this.source.getSize(hc).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){le(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){le(`Texture.setValues(): property '${t}' does not exist.`);continue}if(r&&i&&(r.isVector2&&i.isVector2))r.copy(i);else if(r&&i&&(r.isVector3&&i.isVector3))r.copy(i);else if(r&&i&&(r.isMatrix3&&i.isMatrix3))r.copy(i);else this[t]=i}}toJSON(e){let t=e===void 0||typeof e==="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(Object.keys(this.userData).length>0)i.userData=this.userData;if(!t)e.textures[this.uuid]=i;return i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ya)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ur:e.x=e.x-Math.floor(e.x);break;case Kt:e.x=e.x<0?0:1;break;case qn:if(Math.abs(Math.floor(e.x)%2)===1)e.x=Math.ceil(e.x)-e.x;else e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ur:e.y=e.y-Math.floor(e.y);break;case Kt:e.y=e.y<0?0:1;break;case qn:if(Math.abs(Math.floor(e.y)%2)===1)e.y=Math.ceil(e.y)-e.y;else e.y=e.y-Math.floor(e.y);break}if(this.flipY)e.y=1-e.y;return e}set needsUpdate(e){if(e===!0)this.version++,this.source.needsUpdate=!0}set needsPMREMUpdate(e){if(e===!0)this.pmremVersion++}}et.DEFAULT_IMAGE=null;et.DEFAULT_MAPPING=ya;et.DEFAULT_ANISOTROPY=1;class tt{static{this.prototype.isVector4=!0}constructor(e=0,t=0,i=0,r=1){this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,n=this.w,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r+s[12]*n,this.y=s[1]*t+s[5]*i+s[9]*r+s[13]*n,this.z=s[2]*t+s[6]*i+s[10]*r+s[14]*n,this.w=s[3]*t+s[7]*i+s[11]*r+s[15]*n,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);if(t<0.0001)this.x=1,this.y=0,this.z=0;else this.x=e.x/t,this.y=e.y/t,this.z=e.z/t;return this}setAxisAngleFromRotationMatrix(e){let t,i,r,n,s=0.01,o=0.1,a=e.elements,l=a[0],c=a[4],h=a[8],d=a[1],u=a[5],p=a[9],x=a[2],M=a[6],f=a[10];if(Math.abs(c-d)<0.01&&Math.abs(h-x)<0.01&&Math.abs(p-M)<0.01){if(Math.abs(c+d)<0.1&&Math.abs(h+x)<0.1&&Math.abs(p+M)<0.1&&Math.abs(l+u+f-3)<0.1)return this.set(1,0,0,0),this;t=Math.PI;let b=(l+1)/2,E=(u+1)/2,S=(f+1)/2,w=(c+d)/4,P=(h+x)/4,g=(p+M)/4;if(b>E&&b>S)if(b<0.01)i=0,r=0.707106781,n=0.707106781;else i=Math.sqrt(b),r=w/i,n=P/i;else if(E>S)if(E<0.01)i=0.707106781,r=0,n=0.707106781;else r=Math.sqrt(E),i=w/r,n=g/r;else if(S<0.01)i=0.707106781,r=0.707106781,n=0;else n=Math.sqrt(S),i=P/n,r=g/n;return this.set(i,r,n,t),this}let m=Math.sqrt((M-p)*(M-p)+(h-x)*(h-x)+(d-c)*(d-c));if(Math.abs(m)<0.001)m=1;return this.x=(M-p)/m,this.y=(h-x)/m,this.z=(d-c)/m,this.w=Math.acos((l+u+f-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ze(this.x,e.x,t.x),this.y=ze(this.y,e.y,t.y),this.z=ze(this.z,e.z,t.z),this.w=ze(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ze(this.x,e,t),this.y=ze(this.y,e,t),this.z=ze(this.z,e,t),this.w=ze(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ze(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Lo extends Nt{constructor(e=1,t=1,i={}){super();i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:gt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new tt(0,0,e,t),this.scissorTest=!1,this.viewport=new tt(0,0,e,t),this.textures=[];let r=i.count;for(let n=0;n<r;n++)this.textures[n]=new et({width:e,height:t,depth:i.depth}),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:gt,generateMipmaps:!1,flipY:!1,internalFormat:null};if(e.mapping!==void 0)t.mapping=e.mapping;if(e.wrapS!==void 0)t.wrapS=e.wrapS;if(e.wrapT!==void 0)t.wrapT=e.wrapT;if(e.wrapR!==void 0)t.wrapR=e.wrapR;if(e.magFilter!==void 0)t.magFilter=e.magFilter;if(e.minFilter!==void 0)t.minFilter=e.minFilter;if(e.format!==void 0)t.format=e.format;if(e.type!==void 0)t.type=e.type;if(e.anisotropy!==void 0)t.anisotropy=e.anisotropy;if(e.colorSpace!==void 0)t.colorSpace=e.colorSpace;if(e.flipY!==void 0)t.flipY=e.flipY;if(e.generateMipmaps!==void 0)t.generateMipmaps=e.generateMipmaps;if(e.mipmapsAutoUpdate!==void 0)t.mipmapsAutoUpdate=e.mipmapsAutoUpdate;if(e.internalFormat!==void 0)t.internalFormat=e.internalFormat;for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){if(this._depthTexture!==null&&this._depthTexture.renderTarget===this)this._depthTexture.renderTarget=null;if(e!==null&&e.renderTarget===null)e.renderTarget=this;this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,n=this.textures.length;r<n;r++)if(this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0)this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let r=Object.assign({},e.textures[t].image);this.textures[t].source=new or(r)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class pt extends Lo{constructor(e=1,t=1,i={}){super(e,t,i);this.isWebGLRenderTarget=!0}}class xn extends et{constructor(e=null,t=1,i=1,r=1){super(null);this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=ut,this.minFilter=ut,this.wrapR=Kt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class as extends et{constructor(e=null,t=1,i=1,r=1){super(null);this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=ut,this.minFilter=ut,this.wrapR=Kt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}class Ue{static{this.prototype.isMatrix4=!0}constructor(e,t,i,r,n,s,o,a,l,c,h,d,u,p,x,M){if(this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0)this.set(e,t,i,r,n,s,o,a,l,c,h,d,u,p,x,M)}set(e,t,i,r,n,s,o,a,l,c,h,d,u,p,x,M){let f=this.elements;return f[0]=e,f[4]=t,f[8]=i,f[12]=r,f[1]=n,f[5]=s,f[9]=o,f[13]=a,f[2]=l,f[6]=c,f[10]=h,f[14]=d,f[3]=u,f[7]=p,f[11]=x,f[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ue().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){if(this.determinantAffine()===0)return e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this;return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,i=e.elements,r=1/ls.setFromMatrixColumn(e,0).length(),n=1/ls.setFromMatrixColumn(e,1).length(),s=1/ls.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*n,t[5]=i[5]*n,t[6]=i[6]*n,t[7]=0,t[8]=i[8]*s,t[9]=i[9]*s,t[10]=i[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,{x:i,y:r,z:n}=e,s=Math.cos(i),o=Math.sin(i),a=Math.cos(r),l=Math.sin(r),c=Math.cos(n),h=Math.sin(n);if(e.order==="XYZ"){let d=s*c,u=s*h,p=o*c,x=o*h;t[0]=a*c,t[4]=-a*h,t[8]=l,t[1]=u+p*l,t[5]=d-x*l,t[9]=-o*a,t[2]=x-d*l,t[6]=p+u*l,t[10]=s*a}else if(e.order==="YXZ"){let d=a*c,u=a*h,p=l*c,x=l*h;t[0]=d+x*o,t[4]=p*o-u,t[8]=s*l,t[1]=s*h,t[5]=s*c,t[9]=-o,t[2]=u*o-p,t[6]=x+d*o,t[10]=s*a}else if(e.order==="ZXY"){let d=a*c,u=a*h,p=l*c,x=l*h;t[0]=d-x*o,t[4]=-s*h,t[8]=p+u*o,t[1]=u+p*o,t[5]=s*c,t[9]=x-d*o,t[2]=-s*l,t[6]=o,t[10]=s*a}else if(e.order==="ZYX"){let d=s*c,u=s*h,p=o*c,x=o*h;t[0]=a*c,t[4]=p*l-u,t[8]=d*l+x,t[1]=a*h,t[5]=x*l+d,t[9]=u*l-p,t[2]=-l,t[6]=o*a,t[10]=s*a}else if(e.order==="YZX"){let d=s*a,u=s*l,p=o*a,x=o*l;t[0]=a*c,t[4]=x-d*h,t[8]=p*h+u,t[1]=h,t[5]=s*c,t[9]=-o*c,t[2]=-l*c,t[6]=u*h+p,t[10]=d-x*h}else if(e.order==="XZY"){let d=s*a,u=s*l,p=o*a,x=o*l;t[0]=a*c,t[4]=-h,t[8]=l*c,t[1]=d*h+x,t[5]=s*c,t[9]=u*h-p,t[2]=p*h-u,t[6]=o*c,t[10]=x*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(xg,e,_g)}lookAt(e,t,i){let r=this.elements;if(Ai.subVectors(e,t),Ai.lengthSq()===0)Ai.z=1;if(Ai.normalize(),Or.crossVectors(i,Ai),Or.lengthSq()===0){if(Math.abs(i.z)===1)Ai.x+=0.0001;else Ai.z+=0.0001;Ai.normalize(),Or.crossVectors(i,Ai)}return Or.normalize(),Ga.crossVectors(Ai,Or),r[0]=Or.x,r[4]=Ga.x,r[8]=Ai.x,r[1]=Or.y,r[5]=Ga.y,r[9]=Ai.y,r[2]=Or.z,r[6]=Ga.z,r[10]=Ai.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,n=this.elements,s=i[0],o=i[4],a=i[8],l=i[12],c=i[1],h=i[5],d=i[9],u=i[13],p=i[2],x=i[6],M=i[10],f=i[14],m=i[3],b=i[7],E=i[11],S=i[15],w=r[0],P=r[4],g=r[8],y=r[12],D=r[1],V=r[5],L=r[9],z=r[13],J=r[2],R=r[6],X=r[10],K=r[14],B=r[3],ce=r[7],W=r[11],j=r[15];return n[0]=s*w+o*D+a*J+l*B,n[4]=s*P+o*V+a*R+l*ce,n[8]=s*g+o*L+a*X+l*W,n[12]=s*y+o*z+a*K+l*j,n[1]=c*w+h*D+d*J+u*B,n[5]=c*P+h*V+d*R+u*ce,n[9]=c*g+h*L+d*X+u*W,n[13]=c*y+h*z+d*K+u*j,n[2]=p*w+x*D+M*J+f*B,n[6]=p*P+x*V+M*R+f*ce,n[10]=p*g+x*L+M*X+f*W,n[14]=p*y+x*z+M*K+f*j,n[3]=m*w+b*D+E*J+S*B,n[7]=m*P+b*V+E*R+S*ce,n[11]=m*g+b*L+E*X+S*W,n[15]=m*y+b*z+E*K+S*j,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],r=e[8],n=e[12],s=e[1],o=e[5],a=e[9],l=e[13],c=e[2],h=e[6],d=e[10],u=e[14],p=e[3],x=e[7],M=e[11],f=e[15],m=a*u-l*d,b=o*u-l*h,E=o*d-a*h,S=s*u-l*c,w=s*d-a*c,P=s*h-o*c;return t*(x*m-M*b+f*E)-i*(p*m-M*S+f*w)+r*(p*b-x*S+f*P)-n*(p*E-x*w+M*P)}determinantAffine(){let e=this.elements,t=e[0],i=e[4],r=e[8],n=e[1],s=e[5],o=e[9],a=e[2],l=e[6],c=e[10];return t*(s*c-o*l)-i*(n*c-o*a)+r*(n*l-s*a)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let r=this.elements;if(e.isVector3)r[12]=e.x,r[13]=e.y,r[14]=e.z;else r[12]=e,r[13]=t,r[14]=i;return this}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],n=e[3],s=e[4],o=e[5],a=e[6],l=e[7],c=e[8],h=e[9],d=e[10],u=e[11],p=e[12],x=e[13],M=e[14],f=e[15],m=t*o-i*s,b=t*a-r*s,E=t*l-n*s,S=i*a-r*o,w=i*l-n*o,P=r*l-n*a,g=c*x-h*p,y=c*M-d*p,D=c*f-u*p,V=h*M-d*x,L=h*f-u*x,z=d*f-u*M,J=m*z-b*L+E*V+S*D-w*y+P*g;if(J===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let R=1/J;return e[0]=(o*z-a*L+l*V)*R,e[1]=(r*L-i*z-n*V)*R,e[2]=(x*P-M*w+f*S)*R,e[3]=(d*w-h*P-u*S)*R,e[4]=(a*D-s*z-l*y)*R,e[5]=(t*z-r*D+n*y)*R,e[6]=(M*E-p*P-f*b)*R,e[7]=(c*P-d*E+u*b)*R,e[8]=(s*L-o*D+l*g)*R,e[9]=(i*D-t*L-n*g)*R,e[10]=(p*w-x*E+f*m)*R,e[11]=(h*E-c*w-u*m)*R,e[12]=(o*y-s*V-a*g)*R,e[13]=(t*V-i*y+r*g)*R,e[14]=(x*b-p*S-M*m)*R,e[15]=(c*S-h*b+d*m)*R,this}scale(e){let t=this.elements,{x:i,y:r,z:n}=e;return t[0]*=i,t[4]*=r,t[8]*=n,t[1]*=i,t[5]*=r,t[9]*=n,t[2]*=i,t[6]*=r,t[10]*=n,t[3]*=i,t[7]*=r,t[11]*=n,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){if(e.isVector3)this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1);else this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1);return this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),r=Math.sin(t),n=1-i,{x:s,y:o,z:a}=e,l=n*s,c=n*o;return this.set(l*s+i,l*o-r*a,l*a+r*o,0,l*o+r*a,c*o+i,c*a-r*s,0,l*a-r*o,c*a+r*s,n*a*a+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,n,s){return this.set(1,i,n,0,e,1,s,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){let r=this.elements,{_x:n,_y:s,_z:o,_w:a}=t,l=n+n,c=s+s,h=o+o,d=n*l,u=n*c,p=n*h,x=s*c,M=s*h,f=o*h,m=a*l,b=a*c,E=a*h,{x:S,y:w,z:P}=i;return r[0]=(1-(x+f))*S,r[1]=(u+E)*S,r[2]=(p-b)*S,r[3]=0,r[4]=(u-E)*w,r[5]=(1-(d+f))*w,r[6]=(M+m)*w,r[7]=0,r[8]=(p+b)*P,r[9]=(M-m)*P,r[10]=(1-(d+x))*P,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let n=this.determinantAffine();if(n===0)return i.set(1,1,1),t.identity(),this;let s=ls.set(r[0],r[1],r[2]).length(),o=ls.set(r[4],r[5],r[6]).length(),a=ls.set(r[8],r[9],r[10]).length();if(n<0)s=-s;er.copy(this);let l=1/s,c=1/o,h=1/a;return er.elements[0]*=l,er.elements[1]*=l,er.elements[2]*=l,er.elements[4]*=c,er.elements[5]*=c,er.elements[6]*=c,er.elements[8]*=h,er.elements[9]*=h,er.elements[10]*=h,t.setFromRotationMatrix(er),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,n,s,o=Xt,a=!1){let l=this.elements,c=2*n/(t-e),h=2*n/(i-r),d=(t+e)/(t-e),u=(i+r)/(i-r),p,x;if(a)p=n/(s-n),x=s*n/(s-n);else if(o===Xt)p=-(s+n)/(s-n),x=-2*s*n/(s-n);else if(o===sr)p=-s/(s-n),x=-s*n/(s-n);else throw Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,n,s,o=Xt,a=!1){let l=this.elements,c=2/(t-e),h=2/(i-r),d=-(t+e)/(t-e),u=-(i+r)/(i-r),p,x;if(a)p=1/(s-n),x=s/(s-n);else if(o===Xt)p=-2/(s-n),x=-(s+n)/(s-n);else if(o===sr)p=-1/(s-n),x=-n/(s-n);else throw Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=h,l[9]=0,l[13]=u,l[2]=0,l[6]=0,l[10]=p,l[14]=x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}var ls=new A,er=new Ue,xg=new A(0,0,0),_g=new A(1,1,1),Or=new A,Ga=new A,Ai=new A;var su=new Ue,ou=new qt;class oi{constructor(e=0,t=0,i=0,r=oi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let r=e.elements,n=r[0],s=r[4],o=r[8],a=r[1],l=r[5],c=r[9],h=r[2],d=r[6],u=r[10];switch(t){case"XYZ":if(this._y=Math.asin(ze(o,-1,1)),Math.abs(o)<0.9999999)this._x=Math.atan2(-c,u),this._z=Math.atan2(-s,n);else this._x=Math.atan2(d,l),this._z=0;break;case"YXZ":if(this._x=Math.asin(-ze(c,-1,1)),Math.abs(c)<0.9999999)this._y=Math.atan2(o,u),this._z=Math.atan2(a,l);else this._y=Math.atan2(-h,n),this._z=0;break;case"ZXY":if(this._x=Math.asin(ze(d,-1,1)),Math.abs(d)<0.9999999)this._y=Math.atan2(-h,u),this._z=Math.atan2(-s,l);else this._y=0,this._z=Math.atan2(a,n);break;case"ZYX":if(this._y=Math.asin(-ze(h,-1,1)),Math.abs(h)<0.9999999)this._x=Math.atan2(d,u),this._z=Math.atan2(a,n);else this._x=0,this._z=Math.atan2(-s,l);break;case"YZX":if(this._z=Math.asin(ze(a,-1,1)),Math.abs(a)<0.9999999)this._x=Math.atan2(-c,l),this._y=Math.atan2(-h,n);else this._x=0,this._y=Math.atan2(o,u);break;case"XZY":if(this._z=Math.asin(-ze(s,-1,1)),Math.abs(s)<0.9999999)this._x=Math.atan2(d,l),this._y=Math.atan2(o,n);else this._x=Math.atan2(-c,u),this._y=0;break;default:le("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}if(this._order=t,i===!0)this._onChangeCallback();return this}setFromQuaternion(e,t,i){return su.makeRotationFromQuaternion(e),this.setFromRotationMatrix(su,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ou.setFromEuler(this),this.setFromQuaternion(ou,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){if(this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0)this._order=e[3];return this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}oi.DEFAULT_ORDER="XYZ";class Br{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}var vg=0,au=new A,cs=new qt,vr=new Ue,Va=new A,Do=new A,yg=new A,Mg=new qt,lu=new A(1,0,0),cu=new A(0,1,0),hu=new A(0,0,1),uu={type:"added"},Sg={type:"removed"},hs={type:"childadded",child:null},uc={type:"childremoved",child:null};class He extends Nt{constructor(){super();this.isObject3D=!0,Object.defineProperty(this,"id",{value:vg++}),this.uuid=Qt(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=He.DEFAULT_UP.clone();let e=new A,t=new oi,i=new qt,r=new A(1,1,1);function n(){i.setFromEuler(t,!1)}function s(){t.setFromQuaternion(i,void 0,!1)}t._onChange(n),i._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ue},normalMatrix:{value:new Ie}}),this.matrix=new Ue,this.matrixWorld=new Ue,this.matrixAutoUpdate=He.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=He.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Br,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null)this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return cs.setFromAxisAngle(e,t),this.quaternion.multiply(cs),this}rotateOnWorldAxis(e,t){return cs.setFromAxisAngle(e,t),this.quaternion.premultiply(cs),this}rotateX(e){return this.rotateOnAxis(lu,e)}rotateY(e){return this.rotateOnAxis(cu,e)}rotateZ(e){return this.rotateOnAxis(hu,e)}translateOnAxis(e,t){return au.copy(e).applyQuaternion(this.quaternion),this.position.add(au.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(lu,e)}translateY(e){return this.translateOnAxis(cu,e)}translateZ(e){return this.translateOnAxis(hu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(vr.copy(this.matrixWorld).invert())}lookAt(e,t,i){if(e.isVector3)Va.copy(e);else Va.set(e,t,i);let r=this.parent;if(this.updateWorldMatrix(!0,!1),Do.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight)vr.lookAt(Do,Va,this.up);else vr.lookAt(Va,Do,this.up);if(this.quaternion.setFromRotationMatrix(vr),r)vr.extractRotation(r.matrixWorld),cs.setFromRotationMatrix(vr),this.quaternion.premultiply(cs.invert())}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}if(e===this)return ye("Object3D.add: object can't be added as a child of itself.",e),this;if(e&&e.isObject3D)e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(uu),hs.child=e,this.dispatchEvent(hs),hs.child=null;else ye("Object3D.add: object not an instance of THREE.Object3D.",e);return this}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);if(t!==-1)e.parent=null,this.children.splice(t,1),e.dispatchEvent(Sg),uc.child=e,this.dispatchEvent(uc),uc.child=null;return this}removeFromParent(){let e=this.parent;if(e!==null)e.remove(this);return this}clear(){return this.remove(...this.children)}attach(e){if(this.updateWorldMatrix(!0,!1),vr.copy(this.matrixWorld).invert(),e.parent!==null)e.parent.updateWorldMatrix(!0,!1),vr.multiply(e.parent.matrixWorld);return e.applyMatrix4(vr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(uu),hs.child=e,this.dispatchEvent(hs),hs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){let s=this.children[i].getObjectByProperty(e,t);if(s!==void 0)return s}return}getObjectsByProperty(e,t,i=[]){if(this[e]===t)i.push(this);let r=this.children;for(let n=0,s=r.length;n<s;n++)r[n].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Do,e,yg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Do,Mg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;if(t!==null)e(t),t.traverseAncestors(e)}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let{x:t,y:i,z:r}=e,n=this.matrix.elements;n[12]+=t-n[0]*t-n[4]*i-n[8]*r,n[13]+=i-n[1]*t-n[5]*i-n[9]*r,n[14]+=r-n[2]*t-n[6]*i-n[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||e){if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,e=!0}let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){let r=this.parent;if(e===!0&&r!==null)r.updateWorldMatrix(!0,!1);if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||i){if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,i=!0}if(t===!0){let n=this.children;for(let s=0,o=n.length;s<o;s++)n[s].updateWorldMatrix(!1,!0,i)}}toJSON(e){let t=e===void 0||typeof e==="string",i={};if(t)e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"};let r={};if(r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0)r.userData=this.userData;if(r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null)r.pivot=this.pivot.toArray();if(this.morphTargetDictionary!==void 0)r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary);if(this.morphTargetInfluences!==void 0)r.morphTargetInfluences=this.morphTargetInfluences.slice();if(this.isInstancedMesh){if(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null)r.instanceColor=this.instanceColor.toJSON()}if(this.isBatchedMesh){if(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map((o)=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map((o)=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null)r.colorsTexture=this._colorsTexture.toJSON(e);if(this.boundingSphere!==null)r.boundingSphere=this.boundingSphere.toJSON();if(this.boundingBox!==null)r.boundingBox=this.boundingBox.toJSON()}function n(o,a){if(o[a.uuid]===void 0)o[a.uuid]=a.toJSON(e);return a.uuid}if(this.isScene){if(this.background){if(this.background.isColor)r.background=this.background.toJSON();else if(this.background.isTexture)r.background=this.background.toJSON(e).uuid}if(this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0)r.environment=this.environment.toJSON(e).uuid}else if(this.isMesh||this.isLine||this.isPoints){r.geometry=n(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let a=o.shapes;if(Array.isArray(a))for(let l=0,c=a.length;l<c;l++){let h=a[l];n(e.shapes,h)}else n(e.shapes,a)}}if(this.isSkinnedMesh){if(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0)n(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid}if(this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let a=0,l=this.material.length;a<l;a++)o.push(n(e.materials,this.material[a]));r.material=o}else r.material=n(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){let a=this.animations[o];r.animations.push(n(e.animations,a))}}if(t){let o=s(e.geometries),a=s(e.materials),l=s(e.textures),c=s(e.images),h=s(e.shapes),d=s(e.skeletons),u=s(e.animations),p=s(e.nodes);if(o.length>0)i.geometries=o;if(a.length>0)i.materials=a;if(l.length>0)i.textures=l;if(c.length>0)i.images=c;if(h.length>0)i.shapes=h;if(d.length>0)i.skeletons=d;if(u.length>0)i.animations=u;if(p.length>0)i.nodes=p}return i.object=r,i;function s(o){let a=[];for(let l in o){let c=o[l];delete c.metadata,a.push(c)}return a}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let r=e.children[i];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}He.DEFAULT_UP=new A(0,1,0);He.DEFAULT_MATRIX_AUTO_UPDATE=!0;He.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Ut extends He{constructor(){super();this.isGroup=!0,this.type="Group"}}var bg={type:"move"};class us{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){if(this._hand===null)this._hand=new Ut,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1};return this._hand}getTargetRaySpace(){if(this._targetRay===null)this._targetRay=new Ut,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new A,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new A;return this._targetRay}getGripSpace(){if(this._grip===null)this._grip=new Ut,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new A,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new A,this._grip.eventsEnabled=!1;return this._grip}dispatchEvent(e){if(this._targetRay!==null)this._targetRay.dispatchEvent(e);if(this._grip!==null)this._grip.dispatchEvent(e);if(this._hand!==null)this._hand.dispatchEvent(e);return this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){if(this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null)this._targetRay.visible=!1;if(this._grip!==null)this._grip.visible=!1;if(this._hand!==null)this._hand.visible=!1;return this}update(e,t,i){let r=null,n=null,s=null,o=this._targetRay,a=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){s=!0;for(let x of e.hand.values()){let M=t.getJointPose(x,i),f=this._getHandJoint(l,x);if(M!==null)f.matrix.fromArray(M.transform.matrix),f.matrix.decompose(f.position,f.quaternion,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=M.radius;f.visible=M!==null}let c=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],d=c.position.distanceTo(h.position),u=0.02,p=0.005;if(l.inputState.pinching&&d>u+p)l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this});else if(!l.inputState.pinching&&d<=u-p)l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this})}else if(a!==null&&e.gripSpace){if(n=t.getPose(e.gripSpace,i),n!==null){if(a.matrix.fromArray(n.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,n.linearVelocity)a.hasLinearVelocity=!0,a.linearVelocity.copy(n.linearVelocity);else a.hasLinearVelocity=!1;if(n.angularVelocity)a.hasAngularVelocity=!0,a.angularVelocity.copy(n.angularVelocity);else a.hasAngularVelocity=!1;if(a.eventsEnabled)a.dispatchEvent({type:"gripUpdated",data:e,target:this})}}if(o!==null){if(r=t.getPose(e.targetRaySpace,i),r===null&&n!==null)r=n;if(r!==null){if(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity)o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity);else o.hasLinearVelocity=!1;if(r.angularVelocity)o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity);else o.hasAngularVelocity=!1;this.dispatchEvent(bg)}}}if(o!==null)o.visible=r!==null;if(a!==null)a.visible=n!==null;if(l!==null)l.visible=s!==null;return this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new Ut;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}var fu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},zr={h:0,s:0,l:0},ka={h:0,s:0,l:0};function fc(e,t,i){if(i<0)i+=1;if(i>1)i-=1;if(i<0.16666666666666666)return e+(t-e)*6*i;if(i<0.5)return t;if(i<0.6666666666666666)return e+(t-e)*6*(0.6666666666666666-i);return e}class ie{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let r=e;if(r&&r.isColor)this.copy(r);else if(typeof r==="number")this.setHex(r);else if(typeof r==="string")this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Dt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ge.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=Ge.workingColorSpace){return this.r=e,this.g=t,this.b=i,Ge.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=Ge.workingColorSpace){if(e=eu(e,1),t=ze(t,0,1),i=ze(i,0,1),t===0)this.r=this.g=this.b=i;else{let n=i<=0.5?i*(1+t):i+t-i*t,s=2*i-n;this.r=fc(s,n,e+0.3333333333333333),this.g=fc(s,n,e),this.b=fc(s,n,e-0.3333333333333333)}return Ge.colorSpaceToWorking(this,r),this}setStyle(e,t=Dt){function i(n){if(n===void 0)return;if(parseFloat(n)<1)le("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let n,s=r[1],o=r[2];switch(s){case"rgb":case"rgba":if(n=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(n[4]),this.setRGB(Math.min(255,parseInt(n[1],10))/255,Math.min(255,parseInt(n[2],10))/255,Math.min(255,parseInt(n[3],10))/255,t);if(n=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(n[4]),this.setRGB(Math.min(100,parseFloat(n[1]))/100,Math.min(100,parseFloat(n[2]))/100,Math.min(100,parseFloat(n[3]))/100,t);break;case"hsl":case"hsla":if(n=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(n[4]),this.setHSL(parseFloat(n[1])/360,parseFloat(n[2])/100,parseFloat(n[3])/100,t);break;default:le("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let n=r[1],s=n.length;if(s===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);else if(s===6)return this.setHex(parseInt(n,16),t);else le("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Dt){let i=fu[e.toLowerCase()];if(i!==void 0)this.setHex(i,t);else le("Color: Unknown color "+e);return this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ji(e.r),this.g=ji(e.g),this.b=ji(e.b),this}copyLinearToSRGB(e){return this.r=gn(e.r),this.g=gn(e.g),this.b=gn(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Dt){return Ge.workingToColorSpace(ai.copy(this),e),Math.round(ze(ai.r*255,0,255))*65536+Math.round(ze(ai.g*255,0,255))*256+Math.round(ze(ai.b*255,0,255))}getHexString(e=Dt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ge.workingColorSpace){Ge.workingToColorSpace(ai.copy(this),t);let{r:i,g:r,b:n}=ai,s=Math.max(i,r,n),o=Math.min(i,r,n),a,l,c=(o+s)/2;if(o===s)a=0,l=0;else{let h=s-o;switch(l=c<=0.5?h/(s+o):h/(2-s-o),s){case i:a=(r-n)/h+(r<n?6:0);break;case r:a=(n-i)/h+2;break;case n:a=(i-r)/h+4;break}a/=6}return e.h=a,e.s=l,e.l=c,e}getRGB(e,t=Ge.workingColorSpace){return Ge.workingToColorSpace(ai.copy(this),t),e.r=ai.r,e.g=ai.g,e.b=ai.b,e}getStyle(e=Dt){Ge.workingToColorSpace(ai.copy(this),e);let{r:t,g:i,b:r}=ai;if(e!==Dt)return`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`;return`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(zr),this.setHSL(zr.h+e,zr.s+t,zr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(zr),e.getHSL(ka);let i=Fa(zr.h,ka.h,t),r=Fa(zr.s,ka.s,t),n=Fa(zr.l,ka.l,t);return this.setHSL(i,r,n),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,r=this.b,n=e.elements;return this.r=n[0]*t+n[3]*i+n[6]*r,this.g=n[1]*t+n[4]*i+n[7]*r,this.b=n[2]*t+n[5]*i+n[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}var ai=new ie;ie.NAMES=fu;class fs{constructor(e,t=1,i=1000){this.isFog=!0,this.name="",this.color=new ie(e),this.near=t,this.far=i}clone(){return new fs(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class _n extends He{constructor(){super();if(this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new oi,this.environmentIntensity=1,this.environmentRotation=new oi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);if(this.fog!==null)t.object.fog=this.fog.toJSON();return t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}var tr=new A,yr=new A,dc=new A,Mr=new A,ds=new A,ps=new A,du=new A,pc=new A,mc=new A,gc=new A,xc=new tt,_c=new tt,vc=new tt;class $t{constructor(e=new A,t=new A,i=new A){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),tr.subVectors(e,t),r.cross(tr);let n=r.lengthSq();if(n>0)return r.multiplyScalar(1/Math.sqrt(n));return r.set(0,0,0)}static getBarycoord(e,t,i,r,n){tr.subVectors(r,t),yr.subVectors(i,t),dc.subVectors(e,t);let s=tr.dot(tr),o=tr.dot(yr),a=tr.dot(dc),l=yr.dot(yr),c=yr.dot(dc),h=s*l-o*o;if(h===0)return n.set(0,0,0),null;let d=1/h,u=(l*a-o*c)*d,p=(s*c-o*a)*d;return n.set(1-u-p,p,u)}static containsPoint(e,t,i,r){if(this.getBarycoord(e,t,i,r,Mr)===null)return!1;return Mr.x>=0&&Mr.y>=0&&Mr.x+Mr.y<=1}static getInterpolation(e,t,i,r,n,s,o,a){if(this.getBarycoord(e,t,i,r,Mr)===null){if(a.x=0,a.y=0,"z"in a)a.z=0;if("w"in a)a.w=0;return null}return a.setScalar(0),a.addScaledVector(n,Mr.x),a.addScaledVector(s,Mr.y),a.addScaledVector(o,Mr.z),a}static getInterpolatedAttribute(e,t,i,r,n,s){return xc.setScalar(0),_c.setScalar(0),vc.setScalar(0),xc.fromBufferAttribute(e,t),_c.fromBufferAttribute(e,i),vc.fromBufferAttribute(e,r),s.setScalar(0),s.addScaledVector(xc,n.x),s.addScaledVector(_c,n.y),s.addScaledVector(vc,n.z),s}static isFrontFacing(e,t,i,r){return tr.subVectors(i,t),yr.subVectors(e,t),tr.cross(yr).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return tr.subVectors(this.c,this.b),yr.subVectors(this.a,this.b),tr.cross(yr).length()*0.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(0.3333333333333333)}getNormal(e){return $t.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return $t.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,n){return $t.getInterpolation(e,this.a,this.b,this.c,t,i,r,n)}containsPoint(e){return $t.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return $t.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,r=this.b,n=this.c,s,o;ds.subVectors(r,i),ps.subVectors(n,i),pc.subVectors(e,i);let a=ds.dot(pc),l=ps.dot(pc);if(a<=0&&l<=0)return t.copy(i);mc.subVectors(e,r);let c=ds.dot(mc),h=ps.dot(mc);if(c>=0&&h<=c)return t.copy(r);let d=a*h-c*l;if(d<=0&&a>=0&&c<=0&&a-c>0)return s=a/(a-c),t.copy(i).addScaledVector(ds,s);gc.subVectors(e,n);let u=ds.dot(gc),p=ps.dot(gc);if(p>=0&&u<=p)return t.copy(n);let x=u*l-a*p;if(x<=0&&l>=0&&p<=0)return o=l/(l-p),t.copy(i).addScaledVector(ps,o);let M=c*p-u*h;if(M<=0&&h-c>=0&&u-p>=0)return du.subVectors(n,r),o=(h-c)/(h-c+(u-p)),t.copy(r).addScaledVector(du,o);let f=1/(M+x+d);return s=x*f,o=d*f,t.copy(i).addScaledVector(ds,s).addScaledVector(ps,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class li{constructor(e=new A(1/0,1/0,1/0),t=new A(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(ir.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(ir.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=ir.copy(t).multiplyScalar(0.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(0.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let n=i.getAttribute("position");if(t===!0&&n!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let s=0,o=n.count;s<o;s++){if(e.isMesh===!0)e.getVertexPosition(s,ir);else ir.fromBufferAttribute(n,s);ir.applyMatrix4(e.matrixWorld),this.expandByPoint(ir)}else{if(e.boundingBox!==void 0){if(e.boundingBox===null)e.computeBoundingBox();Ha.copy(e.boundingBox)}else{if(i.boundingBox===null)i.computeBoundingBox();Ha.copy(i.boundingBox)}Ha.applyMatrix4(e.matrixWorld),this.union(Ha)}}let r=e.children;for(let n=0,s=r.length;n<s;n++)this.expandByObject(r[n],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ir),ir.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;if(e.normal.x>0)t=e.normal.x*this.min.x,i=e.normal.x*this.max.x;else t=e.normal.x*this.max.x,i=e.normal.x*this.min.x;if(e.normal.y>0)t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y;else t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y;if(e.normal.z>0)t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z;else t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z;return t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(No),Wa.subVectors(this.max,No),ms.subVectors(e.a,No),gs.subVectors(e.b,No),xs.subVectors(e.c,No),Gr.subVectors(gs,ms),Vr.subVectors(xs,gs),vn.subVectors(ms,xs);let t=[0,-Gr.z,Gr.y,0,-Vr.z,Vr.y,0,-vn.z,vn.y,Gr.z,0,-Gr.x,Vr.z,0,-Vr.x,vn.z,0,-vn.x,-Gr.y,Gr.x,0,-Vr.y,Vr.x,0,-vn.y,vn.x,0];if(!yc(t,ms,gs,xs,Wa))return!1;if(t=[1,0,0,0,1,0,0,0,1],!yc(t,ms,gs,xs,Wa))return!1;return Xa.crossVectors(Gr,Vr),t=[Xa.x,Xa.y,Xa.z],yc(t,ms,gs,xs,Wa)}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ir).distanceTo(e)}getBoundingSphere(e){if(this.isEmpty())e.makeEmpty();else this.getCenter(e.center),e.radius=this.getSize(ir).length()*0.5;return e}intersect(e){if(this.min.max(e.min),this.max.min(e.max),this.isEmpty())this.makeEmpty();return this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){if(this.isEmpty())return this;return Sr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Sr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Sr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Sr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Sr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Sr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Sr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Sr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Sr),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}var Sr=[new A,new A,new A,new A,new A,new A,new A,new A],ir=new A,Ha=new li,ms=new A,gs=new A,xs=new A,Gr=new A,Vr=new A,vn=new A,No=new A,Wa=new A,Xa=new A,yn=new A;function yc(e,t,i,r,n){for(let s=0,o=e.length-3;s<=o;s+=3){yn.fromArray(e,s);let a=n.x*Math.abs(yn.x)+n.y*Math.abs(yn.y)+n.z*Math.abs(yn.z),l=t.dot(yn),c=i.dot(yn),h=r.dot(yn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var It=new A,qa=new ee,Tg=0;class Ft extends Nt{constructor(e,t,i=!1){super();if(Array.isArray(e))throw TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Tg++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Io,this.updateRanges=[],this.gpuType=Et,this.version=0,this._normalizationScale=e!==void 0?ss(e):void 0}onUploadCallback(){}set needsUpdate(e){if(e===!0)this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,n=this.itemSize;r<n;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)qa.fromBufferAttribute(this,t),qa.applyMatrix3(e),this.setXY(t,qa.x,qa.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)It.fromBufferAttribute(this,t),It.applyMatrix3(e),this.setXYZ(t,It.x,It.y,It.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)It.fromBufferAttribute(this,t),It.applyMatrix4(e),this.setXYZ(t,It.x,It.y,It.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)It.fromBufferAttribute(this,t),It.applyNormalMatrix(e),this.setXYZ(t,It.x,It.y,It.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)It.fromBufferAttribute(this,t),It.transformDirection(e),this.setXYZ(t,It.x,It.y,It.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];if(this.normalized)i=this._denormalize(i);return i}setComponent(e,t,i){if(this.normalized)i=this._normalize(i);return this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];if(this.normalized)t=this._denormalize(t);return t}setX(e,t){if(this.normalized)t=this._normalize(t);return this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];if(this.normalized)t=this._denormalize(t);return t}setY(e,t){if(this.normalized)t=this._normalize(t);return this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];if(this.normalized)t=this._denormalize(t);return t}setZ(e,t){if(this.normalized)t=this._normalize(t);return this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];if(this.normalized)t=this._denormalize(t);return t}setW(e,t){if(this.normalized)t=this._normalize(t);return this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){if(e*=this.itemSize,this.normalized)t=this._normalize(t),i=this._normalize(i);return this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){if(e*=this.itemSize,this.normalized)t=this._normalize(t),i=this._normalize(i),r=this._normalize(r);return this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,n){if(e*=this.itemSize,this.normalized)t=this._normalize(t),i=this._normalize(i),r=this._normalize(r),n=this._normalize(n);return this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=n,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Oa(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):Ba(e,this.array)}}class Uo extends Ft{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Fo extends Ft{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Ae extends Ft{constructor(e,t,i){super(new Float32Array(e),t,i)}}var Eg=new li,Oo=new A,Mc=new A;class Yt{constructor(e=new A,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;if(t!==void 0)i.copy(t);else Eg.setFromPoints(e).getCenter(i);let r=0;for(let n=0,s=e.length;n<s;n++)r=Math.max(r,i.distanceToSquared(e[n]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);if(t.copy(e),i>this.radius*this.radius)t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center);return t}getBoundingBox(e){if(this.isEmpty())return e.makeEmpty(),e;return e.set(this.center,this.center),e.expandByScalar(this.radius),e}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Oo.subVectors(e,this.center);let t=Oo.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),r=(i-this.radius)*0.5;this.center.addScaledVector(Oo,r/i),this.radius+=r}return this}union(e){if(e.isEmpty())return this;if(this.isEmpty())return this.copy(e),this;if(this.center.equals(e.center)===!0)this.radius=Math.max(this.radius,e.radius);else Mc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Oo.copy(e.center).add(Mc)),this.expandByPoint(Oo.copy(e.center).sub(Mc));return this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}var wg=0,zi=new Ue,Sc=new He,_s=new A,Ri=new li,Bo=new li,Zt=new A;class Le extends Nt{constructor(){super();this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:wg++}),this.uuid=Qt(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){if(Array.isArray(e))this.index=new((Kh(e))?Fo:Uo)(e,1);else this.index=e;return this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;if(t!==void 0)t.applyMatrix4(e),t.needsUpdate=!0;let i=this.attributes.normal;if(i!==void 0){let n=new Ie().getNormalMatrix(e);i.applyNormalMatrix(n),i.needsUpdate=!0}let r=this.attributes.tangent;if(r!==void 0)r.transformDirection(e),r.needsUpdate=!0;if(this.boundingBox!==null)this.computeBoundingBox();if(this.boundingSphere!==null)this.computeBoundingSphere();return this._transformed=!0,this}applyQuaternion(e){return zi.makeRotationFromQuaternion(e),this.applyMatrix4(zi),this}rotateX(e){return zi.makeRotationX(e),this.applyMatrix4(zi),this}rotateY(e){return zi.makeRotationY(e),this.applyMatrix4(zi),this}rotateZ(e){return zi.makeRotationZ(e),this.applyMatrix4(zi),this}translate(e,t,i){return zi.makeTranslation(e,t,i),this.applyMatrix4(zi),this}scale(e,t,i){return zi.makeScale(e,t,i),this.applyMatrix4(zi),this}lookAt(e){return Sc.lookAt(e),Sc.updateMatrix(),this.applyMatrix4(Sc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(_s).negate(),this.translate(_s.x,_s.y,_s.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let r=0,n=e.length;r<n;r++){let s=e[r];i.push(s.x,s.y,s.z||0)}this.setAttribute("position",new Ae(i,3))}else{let i=Math.min(e.length,t.count);for(let r=0;r<i;r++){let n=e[r];t.setXYZ(r,n.x,n.y,n.z||0)}if(e.length>t.count)le("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.");t.needsUpdate=!0}return this}computeBoundingBox(){if(this.boundingBox===null)this.boundingBox=new li;let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ye("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new A(-1/0,-1/0,-1/0),new A(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){let n=t[i];if(Ri.setFromBufferAttribute(n),this.morphTargetsRelative)Zt.addVectors(this.boundingBox.min,Ri.min),this.boundingBox.expandByPoint(Zt),Zt.addVectors(this.boundingBox.max,Ri.max),this.boundingBox.expandByPoint(Zt);else this.boundingBox.expandByPoint(Ri.min),this.boundingBox.expandByPoint(Ri.max)}}else this.boundingBox.makeEmpty();if(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))ye('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){if(this.boundingSphere===null)this.boundingSphere=new Yt;let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ye("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new A,1/0);return}if(e){let i=this.boundingSphere.center;if(Ri.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let o=t[n];if(Bo.setFromBufferAttribute(o),this.morphTargetsRelative)Zt.addVectors(Ri.min,Bo.min),Ri.expandByPoint(Zt),Zt.addVectors(Ri.max,Bo.max),Ri.expandByPoint(Zt);else Ri.expandByPoint(Bo.min),Ri.expandByPoint(Bo.max)}Ri.getCenter(i);let r=0;for(let n=0,s=e.count;n<s;n++)Zt.fromBufferAttribute(e,n),r=Math.max(r,i.distanceToSquared(Zt));if(t)for(let n=0,s=t.length;n<s;n++){let o=t[n],a=this.morphTargetsRelative;for(let l=0,c=o.count;l<c;l++){if(Zt.fromBufferAttribute(o,l),a)_s.fromBufferAttribute(e,l),Zt.add(_s);r=Math.max(r,i.distanceToSquared(Zt))}}if(this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius))ye('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){ye("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let{position:i,normal:r,uv:n}=t,s=this.getAttribute("tangent");if(s===void 0||s.count!==i.count)s=new Ft(new Float32Array(4*i.count),4),this.setAttribute("tangent",s);let o=[],a=[],l=new Uint8Array(i.count);for(let y=0;y<i.count;y++)o[y]=new A,a[y]=new A;let c=new A,h=new A,d=new A,u=new ee,p=new ee,x=new ee,M=new A,f=new A;function m(y,D,V){l[y]=l[D]=l[V]=1,c.fromBufferAttribute(i,y),h.fromBufferAttribute(i,D),d.fromBufferAttribute(i,V),u.fromBufferAttribute(n,y),p.fromBufferAttribute(n,D),x.fromBufferAttribute(n,V),h.sub(c),d.sub(c),p.sub(u),x.sub(u);let L=1/(p.x*x.y-x.x*p.y);if(!isFinite(L))return;M.copy(h).multiplyScalar(x.y).addScaledVector(d,-p.y).multiplyScalar(L),f.copy(d).multiplyScalar(p.x).addScaledVector(h,-x.x).multiplyScalar(L),o[y].add(M),o[D].add(M),o[V].add(M),a[y].add(f),a[D].add(f),a[V].add(f)}let b=this.groups;if(b.length===0)b=[{start:0,count:e.count}];for(let y=0,D=b.length;y<D;++y){let V=b[y],{start:L,count:z}=V;for(let J=L,R=L+z;J<R;J+=3)m(e.getX(J+0),e.getX(J+1),e.getX(J+2))}let E=new A,S=new A,w=new A,P=new A;function g(y){w.fromBufferAttribute(r,y),P.copy(w);let D=o[y];E.copy(D),E.sub(w.multiplyScalar(w.dot(D))).normalize(),S.crossVectors(P,D);let L=S.dot(a[y])<0?-1:1;s.setXYZW(y,E.x,E.y,E.z,L)}for(let y=0,D=i.count;y<D;++y)if(l[y])g(y);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new Ft(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,u=i.count;d<u;d++)i.setXYZ(d,0,0,0);let r=new A,n=new A,s=new A,o=new A,a=new A,l=new A,c=new A,h=new A;if(e)for(let d=0,u=e.count;d<u;d+=3){let p=e.getX(d+0),x=e.getX(d+1),M=e.getX(d+2);r.fromBufferAttribute(t,p),n.fromBufferAttribute(t,x),s.fromBufferAttribute(t,M),c.subVectors(s,n),h.subVectors(r,n),c.cross(h),o.fromBufferAttribute(i,p),a.fromBufferAttribute(i,x),l.fromBufferAttribute(i,M),o.add(c),a.add(c),l.add(c),i.setXYZ(p,o.x,o.y,o.z),i.setXYZ(x,a.x,a.y,a.z),i.setXYZ(M,l.x,l.y,l.z)}else for(let d=0,u=t.count;d<u;d+=3)r.fromBufferAttribute(t,d+0),n.fromBufferAttribute(t,d+1),s.fromBufferAttribute(t,d+2),c.subVectors(s,n),h.subVectors(r,n),c.cross(h),i.setXYZ(d+0,c.x,c.y,c.z),i.setXYZ(d+1,c.x,c.y,c.z),i.setXYZ(d+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Zt.fromBufferAttribute(e,t),Zt.normalize(),e.setXYZ(t,Zt.x,Zt.y,Zt.z)}toNonIndexed(){function e(o,a){let{array:l,itemSize:c,normalized:h}=o,d=new l.constructor(a.length*c),u=0,p=0;for(let x=0,M=a.length;x<M;x++){if(o.isInterleavedBufferAttribute)u=a[x]*o.data.stride+o.offset;else u=a[x]*c;for(let f=0;f<c;f++)d[p++]=l[u++]}return new Ft(d,c,h)}if(this.index===null)return le("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new Le,i=this.index.array,r=this.attributes;for(let o in r){let a=r[o],l=e(a,i);t.setAttribute(o,l)}let n=this.morphAttributes;for(let o in n){let a=[],l=n[o];for(let c=0,h=l.length;c<h;c++){let d=l[c],u=e(d,i);a.push(u)}t.morphAttributes[o]=a}t.morphTargetsRelative=this.morphTargetsRelative;let s=this.groups;for(let o=0,a=s.length;o<a;o++){let l=s[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0)e.userData=this.userData;if(this.parameters!==void 0&&this._transformed!==!0){let a=this.parameters;for(let l in a)if(a[l]!==void 0)e[l]=a[l];return e}e.data={attributes:{}};let t=this.index;if(t!==null)e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)};let i=this.attributes;for(let a in i){let l=i[a];e.data.attributes[a]=l.toJSON(e.data)}let r={},n=!1;for(let a in this.morphAttributes){let l=this.morphAttributes[a],c=[];for(let h=0,d=l.length;h<d;h++){let u=l[h];c.push(u.toJSON(e.data))}if(c.length>0)r[a]=c,n=!0}if(n)e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative;let s=this.groups;if(s.length>0)e.data.groups=JSON.parse(JSON.stringify(s));let o=this.boundingSphere;if(o!==null)e.data.boundingSphere=o.toJSON();return e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;if(i!==null)this.setIndex(i.clone());let r=e.attributes;for(let l in r){let c=r[l];this.setAttribute(l,c.clone(t))}let n=e.morphAttributes;for(let l in n){let c=[],h=n[l];for(let d=0,u=h.length;d<u;d++)c.push(h[d].clone(t));this.morphAttributes[l]=c}this.morphTargetsRelative=e.morphTargetsRelative;let s=e.groups;for(let l=0,c=s.length;l<c;l++){let h=s[l];this.addGroup(h.start,h.count,h.materialIndex)}let o=e.boundingBox;if(o!==null)this.boundingBox=o.clone();let a=e.boundingSphere;if(a!==null)this.boundingSphere=a.clone();return this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class vs{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Io,this.updateRanges=[],this.version=0,this.uuid=Qt()}onUploadCallback(){}set needsUpdate(e){if(e===!0)this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,n=this.stride;r<n;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){if(e.arrayBuffers===void 0)e.arrayBuffers={};let t=pu(this.array);if(e.arrayBuffers[t]===void 0)e.arrayBuffers[t]=this.array.slice(0).buffer;let i=new this.array.constructor(e.arrayBuffers[t]),r=new this.constructor(i,this.stride);return r.setUsage(this.usage),r}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){if(e.arrayBuffers===void 0)e.arrayBuffers={};let t=pu(this.array);if(e.arrayBuffers[t]===void 0)e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer));let i={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return i.usage=this.usage,i}}function pu(e){if(e.buffer._uuid===void 0)e.buffer._uuid=Qt();if(e.byteOffset===0&&e.byteLength===e.buffer.byteLength)return e.buffer._uuid;return e.buffer._uuid+":"+e.byteOffset+":"+e.byteLength}var fi=new A;class Mn{constructor(e,t,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=r,this._normalizationScale=e!==void 0?ss(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)fi.fromBufferAttribute(this,t),fi.applyMatrix4(e),this.setXYZ(t,fi.x,fi.y,fi.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)fi.fromBufferAttribute(this,t),fi.applyNormalMatrix(e),this.setXYZ(t,fi.x,fi.y,fi.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)fi.fromBufferAttribute(this,t),fi.transformDirection(e),this.setXYZ(t,fi.x,fi.y,fi.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];if(this.normalized)i=this._denormalize(i);return i}setComponent(e,t,i){if(this.normalized)i=this._normalize(i);return this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){if(this.normalized)t=this._normalize(t);return this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){if(this.normalized)t=this._normalize(t);return this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){if(this.normalized)t=this._normalize(t);return this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){if(this.normalized)t=this._normalize(t);return this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];if(this.normalized)t=this._denormalize(t);return t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];if(this.normalized)t=this._denormalize(t);return t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];if(this.normalized)t=this._denormalize(t);return t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];if(this.normalized)t=this._denormalize(t);return t}setXY(e,t,i){if(e=e*this.data.stride+this.offset,this.normalized)t=this._normalize(t),i=this._normalize(i);return this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,r){if(e=e*this.data.stride+this.offset,this.normalized)t=this._normalize(t),i=this._normalize(i),r=this._normalize(r);return this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,t,i,r,n){if(e=e*this.data.stride+this.offset,this.normalized)t=this._normalize(t),i=this._normalize(i),r=this._normalize(r),n=this._normalize(n);return this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=n,this}clone(e){if(e===void 0){dn("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let r=i*this.data.stride+this.offset;for(let n=0;n<this.itemSize;n++)t.push(this.data.array[r+n])}return new Ft(new this.array.constructor(t),this.itemSize,this.normalized)}else{if(e.interleavedBuffers===void 0)e.interleavedBuffers={};if(e.interleavedBuffers[this.data.uuid]===void 0)e.interleavedBuffers[this.data.uuid]=this.data.clone(e);return new Mn(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}}toJSON(e){if(e===void 0){dn("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let r=i*this.data.stride+this.offset;for(let n=0;n<this.itemSize;n++)t.push(this.data.array[r+n])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else{if(e.interleavedBuffers===void 0)e.interleavedBuffers={};if(e.interleavedBuffers[this.data.uuid]===void 0)e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e);return{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Oa(e,this.data.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):Ba(e,this.data.array)}}var bc=new A,Ag=new A,Rg=new Ie;class Ci{constructor(e=new A(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let r=bc.subVectors(i,t).cross(Ag.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let r=e.delta(bc),n=this.normal.dot(r);if(n===0){if(this.distanceToPoint(e.start)===0)return t.copy(e.start);return null}let s=-(e.start.dot(this.normal)+this.constant)/n;if(i===!0&&(s<0||s>1))return null;return t.copy(e.start).addScaledVector(r,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||Rg.getNormalMatrix(e),r=this.coplanarPoint(bc).applyMatrix4(e),n=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(n),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}var Cg=0;class mt extends Nt{constructor(){super();this.isMaterial=!0,Object.defineProperty(this,"id",{value:Cg++}),this.uuid=Qt(),this.name="",this.type="Material",this.blending=Ir,this.side=Ni,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=_a,this.blendDst=va,this.blendEquation=Lr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ie(0,0,0),this.blendAlpha=0,this.depthFunc=Dr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Hh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=La,this.stencilZFail=La,this.stencilZPass=La,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){if(this._alphaTest>0!==e>0)this.version++;this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e===void 0)return;for(let t in e){let i=e[t];if(i===void 0){le(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){le(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}if(r&&r.isColor)r.set(i);else if(r&&r.isVector2&&(i&&i.isVector2)||r&&r.isEuler&&(i&&i.isEuler)||r&&r.isVector3&&(i&&i.isVector3))r.copy(i);else this[t]=i}}toJSON(e){let t=e===void 0||typeof e==="string";if(t)e={textures:{},images:{}};let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};if(i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor)i.color=this.color.getHex();if(this.roughness!==void 0)i.roughness=this.roughness;if(this.metalness!==void 0)i.metalness=this.metalness;if(this.sheen!==void 0)i.sheen=this.sheen;if(this.sheenColor&&this.sheenColor.isColor)i.sheenColor=this.sheenColor.getHex();if(this.sheenRoughness!==void 0)i.sheenRoughness=this.sheenRoughness;if(this.emissive&&this.emissive.isColor)i.emissive=this.emissive.getHex();if(this.emissiveIntensity!==void 0)i.emissiveIntensity=this.emissiveIntensity;if(this.specular&&this.specular.isColor)i.specular=this.specular.getHex();if(this.specularIntensity!==void 0)i.specularIntensity=this.specularIntensity;if(this.specularColor&&this.specularColor.isColor)i.specularColor=this.specularColor.getHex();if(this.shininess!==void 0)i.shininess=this.shininess;if(this.clearcoat!==void 0)i.clearcoat=this.clearcoat;if(this.clearcoatRoughness!==void 0)i.clearcoatRoughness=this.clearcoatRoughness;if(this.diffuseRoughness!==void 0)i.diffuseRoughness=this.diffuseRoughness;if(this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture)i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid;if(this.clearcoatMap&&this.clearcoatMap.isTexture)i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid;if(this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture)i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid;if(this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture)i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray();if(this.sheenColorMap&&this.sheenColorMap.isTexture)i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid;if(this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture)i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid;if(this.dispersion!==void 0)i.dispersion=this.dispersion;if(this.retroreflectivity!==void 0)i.retroreflectivity=this.retroreflectivity;if(this.iridescence!==void 0)i.iridescence=this.iridescence;if(this.iridescenceIOR!==void 0)i.iridescenceIOR=this.iridescenceIOR;if(this.iridescenceThicknessMinimum!==void 0)i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum;if(this.iridescenceThicknessMaximum!==void 0)i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum;if(this.iridescenceMap&&this.iridescenceMap.isTexture)i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid;if(this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture)i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid;if(this.anisotropy!==void 0)i.anisotropy=this.anisotropy;if(this.anisotropyRotation!==void 0)i.anisotropyRotation=this.anisotropyRotation;if(this.anisotropyMap&&this.anisotropyMap.isTexture)i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid;if(this.map&&this.map.isTexture)i.map=this.map.toJSON(e).uuid;if(this.matcap&&this.matcap.isTexture)i.matcap=this.matcap.toJSON(e).uuid;if(this.alphaMap&&this.alphaMap.isTexture)i.alphaMap=this.alphaMap.toJSON(e).uuid;if(this.lightMap&&this.lightMap.isTexture)i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity;if(this.aoMap&&this.aoMap.isTexture)i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity;if(this.bumpMap&&this.bumpMap.isTexture)i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale;if(this.normalMap&&this.normalMap.isTexture)i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray();if(this.displacementMap&&this.displacementMap.isTexture)i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias;if(this.roughnessMap&&this.roughnessMap.isTexture)i.roughnessMap=this.roughnessMap.toJSON(e).uuid;if(this.metalnessMap&&this.metalnessMap.isTexture)i.metalnessMap=this.metalnessMap.toJSON(e).uuid;if(this.emissiveMap&&this.emissiveMap.isTexture)i.emissiveMap=this.emissiveMap.toJSON(e).uuid;if(this.specularMap&&this.specularMap.isTexture)i.specularMap=this.specularMap.toJSON(e).uuid;if(this.specularIntensityMap&&this.specularIntensityMap.isTexture)i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid;if(this.specularColorMap&&this.specularColorMap.isTexture)i.specularColorMap=this.specularColorMap.toJSON(e).uuid;if(this.envMap&&this.envMap.isTexture){if(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0)i.combine=this.combine}if(this.envMapRotation!==void 0)i.envMapRotation=this.envMapRotation.toArray();if(this.envMapIntensity!==void 0)i.envMapIntensity=this.envMapIntensity;if(this.reflectivity!==void 0)i.reflectivity=this.reflectivity;if(this.refractionRatio!==void 0)i.refractionRatio=this.refractionRatio;if(this.gradientMap&&this.gradientMap.isTexture)i.gradientMap=this.gradientMap.toJSON(e).uuid;if(this.transmission!==void 0)i.transmission=this.transmission;if(this.transmissionMap&&this.transmissionMap.isTexture)i.transmissionMap=this.transmissionMap.toJSON(e).uuid;if(this.thickness!==void 0)i.thickness=this.thickness;if(this.thicknessMap&&this.thicknessMap.isTexture)i.thicknessMap=this.thicknessMap.toJSON(e).uuid;if(this.attenuationDistance!==void 0)i.attenuationDistance=this.attenuationDistance;if(this.attenuationColor!==void 0)i.attenuationColor=this.attenuationColor.getHex();if(this.size!==void 0)i.size=this.size;if(this.sizeAttenuation!==void 0)i.sizeAttenuation=this.sizeAttenuation;if(Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0)i.clippingPlanes=this.clippingPlanes.map((n)=>n.toJSON());if(this.rotation!==void 0)i.rotation=this.rotation;if(this.depthPacking!==void 0)i.depthPacking=this.depthPacking;if(this.linewidth!==void 0)i.linewidth=this.linewidth;if(this.linecap!==void 0)i.linecap=this.linecap;if(this.linejoin!==void 0)i.linejoin=this.linejoin;if(this.dashSize!==void 0)i.dashSize=this.dashSize;if(this.gapSize!==void 0)i.gapSize=this.gapSize;if(this.scale!==void 0)i.scale=this.scale;if(this.wireframe!==void 0)i.wireframe=this.wireframe;if(this.wireframeLinewidth!==void 0)i.wireframeLinewidth=this.wireframeLinewidth;if(this.wireframeLinecap!==void 0)i.wireframeLinecap=this.wireframeLinecap;if(this.wireframeLinejoin!==void 0)i.wireframeLinejoin=this.wireframeLinejoin;if(this.flatShading!==void 0)i.flatShading=this.flatShading;if(this.fog!==void 0)i.fog=this.fog;if(Object.keys(this.userData).length>0)i.userData=this.userData;function r(n){let s=[];for(let o in n){let a=n[o];delete a.metadata,s.push(a)}return s}if(t){let n=r(e.textures),s=r(e.images);if(n.length>0)i.textures=n;if(s.length>0)i.images=s}return i}fromJSON(e,t){if(e.uuid!==void 0)this.uuid=e.uuid;if(e.name!==void 0)this.name=e.name;if(e.color!==void 0&&this.color!==void 0)this.color.setHex(e.color);if(e.roughness!==void 0)this.roughness=e.roughness;if(e.metalness!==void 0)this.metalness=e.metalness;if(e.sheen!==void 0)this.sheen=e.sheen;if(e.sheenColor!==void 0)this.sheenColor=new ie().setHex(e.sheenColor);if(e.sheenRoughness!==void 0)this.sheenRoughness=e.sheenRoughness;if(e.emissive!==void 0&&this.emissive!==void 0)this.emissive.setHex(e.emissive);if(e.specular!==void 0&&this.specular!==void 0)this.specular.setHex(e.specular);if(e.specularIntensity!==void 0)this.specularIntensity=e.specularIntensity;if(e.specularColor!==void 0&&this.specularColor!==void 0)this.specularColor.setHex(e.specularColor);if(e.shininess!==void 0)this.shininess=e.shininess;if(e.clearcoat!==void 0)this.clearcoat=e.clearcoat;if(e.clearcoatRoughness!==void 0)this.clearcoatRoughness=e.clearcoatRoughness;if(e.diffuseRoughness!==void 0)this.diffuseRoughness=e.diffuseRoughness;if(e.dispersion!==void 0)this.dispersion=e.dispersion;if(e.retroreflectivity!==void 0)this.retroreflectivity=e.retroreflectivity;if(e.iridescence!==void 0)this.iridescence=e.iridescence;if(e.iridescenceIOR!==void 0)this.iridescenceIOR=e.iridescenceIOR;if(e.iridescenceThicknessMinimum!==void 0)this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum;if(e.iridescenceThicknessMaximum!==void 0)this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum;if(e.iridescenceThicknessRange!==void 0)this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1];if(e.transmission!==void 0)this.transmission=e.transmission;if(e.thickness!==void 0)this.thickness=e.thickness;if(e.attenuationDistance!==void 0)this.attenuationDistance=e.attenuationDistance;if(e.attenuationColor!==void 0&&this.attenuationColor!==void 0)this.attenuationColor.setHex(e.attenuationColor);if(e.anisotropy!==void 0)this.anisotropy=e.anisotropy;if(e.anisotropyRotation!==void 0)this.anisotropyRotation=e.anisotropyRotation;if(e.fog!==void 0)this.fog=e.fog;if(e.flatShading!==void 0)this.flatShading=e.flatShading;if(e.blending!==void 0)this.blending=e.blending;if(e.combine!==void 0)this.combine=e.combine;if(e.side!==void 0)this.side=e.side;if(e.shadowSide!==void 0)this.shadowSide=e.shadowSide;if(e.opacity!==void 0)this.opacity=e.opacity;if(e.transparent!==void 0)this.transparent=e.transparent;if(e.alphaTest!==void 0)this.alphaTest=e.alphaTest;if(e.alphaHash!==void 0)this.alphaHash=e.alphaHash;if(e.depthFunc!==void 0)this.depthFunc=e.depthFunc;if(e.depthTest!==void 0)this.depthTest=e.depthTest;if(e.depthWrite!==void 0)this.depthWrite=e.depthWrite;if(e.colorWrite!==void 0)this.colorWrite=e.colorWrite;if(e.clippingPlanes!==void 0)this.clippingPlanes=e.clippingPlanes.map((i)=>new Ci().fromJSON(i));if(e.clipIntersection!==void 0)this.clipIntersection=e.clipIntersection;if(e.clipShadows!==void 0)this.clipShadows=e.clipShadows;if(e.depthPacking!==void 0)this.depthPacking=e.depthPacking;if(e.blendSrc!==void 0)this.blendSrc=e.blendSrc;if(e.blendDst!==void 0)this.blendDst=e.blendDst;if(e.blendEquation!==void 0)this.blendEquation=e.blendEquation;if(e.blendSrcAlpha!==void 0)this.blendSrcAlpha=e.blendSrcAlpha;if(e.blendDstAlpha!==void 0)this.blendDstAlpha=e.blendDstAlpha;if(e.blendEquationAlpha!==void 0)this.blendEquationAlpha=e.blendEquationAlpha;if(e.blendColor!==void 0&&this.blendColor!==void 0)this.blendColor.setHex(e.blendColor);if(e.blendAlpha!==void 0)this.blendAlpha=e.blendAlpha;if(e.stencilWriteMask!==void 0)this.stencilWriteMask=e.stencilWriteMask;if(e.stencilFunc!==void 0)this.stencilFunc=e.stencilFunc;if(e.stencilRef!==void 0)this.stencilRef=e.stencilRef;if(e.stencilFuncMask!==void 0)this.stencilFuncMask=e.stencilFuncMask;if(e.stencilFail!==void 0)this.stencilFail=e.stencilFail;if(e.stencilZFail!==void 0)this.stencilZFail=e.stencilZFail;if(e.stencilZPass!==void 0)this.stencilZPass=e.stencilZPass;if(e.stencilWrite!==void 0)this.stencilWrite=e.stencilWrite;if(e.wireframe!==void 0)this.wireframe=e.wireframe;if(e.wireframeLinewidth!==void 0)this.wireframeLinewidth=e.wireframeLinewidth;if(e.wireframeLinecap!==void 0)this.wireframeLinecap=e.wireframeLinecap;if(e.wireframeLinejoin!==void 0)this.wireframeLinejoin=e.wireframeLinejoin;if(e.rotation!==void 0)this.rotation=e.rotation;if(e.linewidth!==void 0)this.linewidth=e.linewidth;if(e.linecap!==void 0)this.linecap=e.linecap;if(e.linejoin!==void 0)this.linejoin=e.linejoin;if(e.dashSize!==void 0)this.dashSize=e.dashSize;if(e.gapSize!==void 0)this.gapSize=e.gapSize;if(e.scale!==void 0)this.scale=e.scale;if(e.polygonOffset!==void 0)this.polygonOffset=e.polygonOffset;if(e.polygonOffsetFactor!==void 0)this.polygonOffsetFactor=e.polygonOffsetFactor;if(e.polygonOffsetUnits!==void 0)this.polygonOffsetUnits=e.polygonOffsetUnits;if(e.dithering!==void 0)this.dithering=e.dithering;if(e.alphaToCoverage!==void 0)this.alphaToCoverage=e.alphaToCoverage;if(e.premultipliedAlpha!==void 0)this.premultipliedAlpha=e.premultipliedAlpha;if(e.forceSinglePass!==void 0)this.forceSinglePass=e.forceSinglePass;if(e.allowOverride!==void 0)this.allowOverride=e.allowOverride;if(e.visible!==void 0)this.visible=e.visible;if(e.toneMapped!==void 0)this.toneMapped=e.toneMapped;if(e.userData!==void 0)this.userData=e.userData;if(e.vertexColors!==void 0)if(typeof e.vertexColors==="number")this.vertexColors=e.vertexColors>0;else this.vertexColors=e.vertexColors;if(e.size!==void 0)this.size=e.size;if(e.sizeAttenuation!==void 0)this.sizeAttenuation=e.sizeAttenuation;if(e.map!==void 0)this.map=t[e.map]||null;if(e.matcap!==void 0)this.matcap=t[e.matcap]||null;if(e.alphaMap!==void 0)this.alphaMap=t[e.alphaMap]||null;if(e.bumpMap!==void 0)this.bumpMap=t[e.bumpMap]||null;if(e.bumpScale!==void 0)this.bumpScale=e.bumpScale;if(e.normalMap!==void 0)this.normalMap=t[e.normalMap]||null;if(e.normalMapType!==void 0)this.normalMapType=e.normalMapType;if(e.normalScale!==void 0){let i=e.normalScale;if(Array.isArray(i)===!1)i=[i,i];this.normalScale=new ee().fromArray(i)}if(e.displacementMap!==void 0)this.displacementMap=t[e.displacementMap]||null;if(e.displacementScale!==void 0)this.displacementScale=e.displacementScale;if(e.displacementBias!==void 0)this.displacementBias=e.displacementBias;if(e.roughnessMap!==void 0)this.roughnessMap=t[e.roughnessMap]||null;if(e.metalnessMap!==void 0)this.metalnessMap=t[e.metalnessMap]||null;if(e.emissiveMap!==void 0)this.emissiveMap=t[e.emissiveMap]||null;if(e.emissiveIntensity!==void 0)this.emissiveIntensity=e.emissiveIntensity;if(e.specularMap!==void 0)this.specularMap=t[e.specularMap]||null;if(e.specularIntensityMap!==void 0)this.specularIntensityMap=t[e.specularIntensityMap]||null;if(e.specularColorMap!==void 0)this.specularColorMap=t[e.specularColorMap]||null;if(e.envMap!==void 0)this.envMap=t[e.envMap]||null;if(e.envMapRotation!==void 0)this.envMapRotation.fromArray(e.envMapRotation);if(e.envMapIntensity!==void 0)this.envMapIntensity=e.envMapIntensity;if(e.reflectivity!==void 0)this.reflectivity=e.reflectivity;if(e.refractionRatio!==void 0)this.refractionRatio=e.refractionRatio;if(e.lightMap!==void 0)this.lightMap=t[e.lightMap]||null;if(e.lightMapIntensity!==void 0)this.lightMapIntensity=e.lightMapIntensity;if(e.aoMap!==void 0)this.aoMap=t[e.aoMap]||null;if(e.aoMapIntensity!==void 0)this.aoMapIntensity=e.aoMapIntensity;if(e.gradientMap!==void 0)this.gradientMap=t[e.gradientMap]||null;if(e.clearcoatMap!==void 0)this.clearcoatMap=t[e.clearcoatMap]||null;if(e.clearcoatRoughnessMap!==void 0)this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null;if(e.clearcoatNormalMap!==void 0)this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null;if(e.clearcoatNormalScale!==void 0)this.clearcoatNormalScale=new ee().fromArray(e.clearcoatNormalScale);if(e.diffuseRoughnessMap!==void 0)this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null;if(e.iridescenceMap!==void 0)this.iridescenceMap=t[e.iridescenceMap]||null;if(e.iridescenceThicknessMap!==void 0)this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null;if(e.transmissionMap!==void 0)this.transmissionMap=t[e.transmissionMap]||null;if(e.thicknessMap!==void 0)this.thicknessMap=t[e.thicknessMap]||null;if(e.anisotropyMap!==void 0)this.anisotropyMap=t[e.anisotropyMap]||null;if(e.sheenColorMap!==void 0)this.sheenColorMap=t[e.sheenColorMap]||null;if(e.sheenRoughnessMap!==void 0)this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null;return this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let r=t.length;i=Array(r);for(let n=0;n!==r;++n)i[n]=t[n].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){if(e===!0)this.version++}}class Sn extends mt{constructor(e){super();this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ie(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}var ys,zo=new A,Ms=new A,Ss=new A,bs=new ee,Go=new ee,xu=new Ue,Ya=new A,Vo=new A,Za=new A,mu=new ee,Tc=new ee,gu=new ee;class ko extends He{constructor(e=new Sn){super();if(this.isSprite=!0,this.type="Sprite",ys===void 0){ys=new Le;let t=new Float32Array([-0.5,-0.5,0,0,0,0.5,-0.5,0,1,0,0.5,0.5,0,1,1,-0.5,0.5,0,0,1]),i=new vs(t,5);ys.setIndex([0,1,2,0,2,3]),ys.setAttribute("position",new Mn(i,3,0,!1)),ys.setAttribute("uv",new Mn(i,2,3,!1))}this.geometry=ys,this.material=e,this.center=new ee(0.5,0.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){if(e.camera===null)ye('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.');if(Ms.setFromMatrixScale(this.matrixWorld),xu.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Ss.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1)Ms.multiplyScalar(-Ss.z);let i=this.material.rotation,r,n;if(i!==0)n=Math.cos(i),r=Math.sin(i);let s=this.center;Ja(Ya.set(-0.5,-0.5,0),Ss,s,Ms,r,n),Ja(Vo.set(0.5,-0.5,0),Ss,s,Ms,r,n),Ja(Za.set(0.5,0.5,0),Ss,s,Ms,r,n),mu.set(0,0),Tc.set(1,0),gu.set(1,1);let o=e.ray.intersectTriangle(Ya,Vo,Za,!1,zo);if(o===null){if(Ja(Vo.set(-0.5,0.5,0),Ss,s,Ms,r,n),Tc.set(0,1),o=e.ray.intersectTriangle(Ya,Za,Vo,!1,zo),o===null)return}let a=e.ray.origin.distanceTo(zo);if(a<e.near||a>e.far)return;t.push({distance:a,point:zo.clone(),uv:$t.getInterpolation(zo,Ya,Vo,Za,mu,Tc,gu,new ee),face:null,object:this})}copy(e,t){if(super.copy(e,t),e.center!==void 0)this.center.copy(e.center);return this.material=e.material,this}toJSON(e){let t=super.toJSON(e);return t.object.center=this.center.toArray(),t}}function Ja(e,t,i,r,n,s){if(bs.subVectors(e,i).addScalar(0.5).multiply(r),n!==void 0)Go.x=s*bs.x-n*bs.y,Go.y=n*bs.x+s*bs.y;else Go.copy(bs);e.copy(t),e.x+=Go.x,e.y+=Go.y,e.applyMatrix4(xu)}var br=new A,Ec=new A,Ka=new A,Qa=new A;class ar{constructor(e=new A,t=new A(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,br)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);if(i<0)return t.copy(this.origin);return t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=br.subVectors(e,this.origin).dot(this.direction);if(t<0)return this.origin.distanceToSquared(e);return br.copy(this.origin).addScaledVector(this.direction,t),br.distanceToSquared(e)}distanceSqToSegment(e,t,i,r){Ec.copy(e).add(t).multiplyScalar(0.5),Ka.copy(t).sub(e).normalize(),Qa.copy(this.origin).sub(Ec);let n=e.distanceTo(t)*0.5,s=-this.direction.dot(Ka),o=Qa.dot(this.direction),a=-Qa.dot(Ka),l=Qa.lengthSq(),c=Math.abs(1-s*s),h,d,u,p;if(c>0)if(h=s*a-o,d=s*o-a,p=n*c,h>=0)if(d>=-p)if(d<=p){let x=1/c;h*=x,d*=x,u=h*(h+s*d+2*o)+d*(s*h+d+2*a)+l}else d=n,h=Math.max(0,-(s*d+o)),u=-h*h+d*(d+2*a)+l;else d=-n,h=Math.max(0,-(s*d+o)),u=-h*h+d*(d+2*a)+l;else if(d<=-p)h=Math.max(0,-(-s*n+o)),d=h>0?-n:Math.min(Math.max(-n,-a),n),u=-h*h+d*(d+2*a)+l;else if(d<=p)h=0,d=Math.min(Math.max(-n,-a),n),u=d*(d+2*a)+l;else h=Math.max(0,-(s*n+o)),d=h>0?n:Math.min(Math.max(-n,-a),n),u=-h*h+d*(d+2*a)+l;else d=s>0?-n:n,h=Math.max(0,-(s*d+o)),u=-h*h+d*(d+2*a)+l;if(i)i.copy(this.origin).addScaledVector(this.direction,h);if(r)r.copy(Ec).addScaledVector(Ka,d);return u}intersectSphere(e,t){if(e.radius<0)return null;br.subVectors(e.center,this.origin);let i=br.dot(this.direction),r=br.dot(br)-i*i,n=e.radius*e.radius;if(r>n)return null;let s=Math.sqrt(n-r),o=i-s,a=i+s;if(a<0)return null;if(o<0)return this.at(a,t);return this.at(o,t)}intersectsSphere(e){if(e.radius<0)return!1;return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0){if(e.distanceToPoint(this.origin)===0)return 0;return null}let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);if(i===null)return null;return this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);if(t===0)return!0;if(e.normal.dot(this.direction)*t<0)return!0;return!1}intersectBox(e,t){let i,r,n,s,o,a,l=1/this.direction.x,c=1/this.direction.y,h=1/this.direction.z,d=this.origin;if(l>=0)i=(e.min.x-d.x)*l,r=(e.max.x-d.x)*l;else i=(e.max.x-d.x)*l,r=(e.min.x-d.x)*l;if(c>=0)n=(e.min.y-d.y)*c,s=(e.max.y-d.y)*c;else n=(e.max.y-d.y)*c,s=(e.min.y-d.y)*c;if(i>s||n>r)return null;if(n>i||isNaN(i))i=n;if(s<r||isNaN(r))r=s;if(h>=0)o=(e.min.z-d.z)*h,a=(e.max.z-d.z)*h;else o=(e.max.z-d.z)*h,a=(e.min.z-d.z)*h;if(i>a||o>r)return null;if(o>i||i!==i)i=o;if(a<r||r!==r)r=a;if(r<0)return null;return this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,br)!==null}intersectTriangle(e,t,i,r,n){let s=this.origin,o=this.direction,{x:a,y:l,z:c}=o,h=e.x-s.x,d=e.y-s.y,u=e.z-s.z,p=t.x-s.x,x=t.y-s.y,M=t.z-s.z,f=i.x-s.x,m=i.y-s.y,b=i.z-s.z,E=Math.abs(a),S=Math.abs(l),w=Math.abs(c),P,g,y,D,V,L,z,J,R,X,K,B;if(E>=S&&E>=w)if(y=a,L=h,R=p,B=f,a>=0)P=l,g=c,D=d,V=u,z=x,J=M,X=m,K=b;else P=c,g=l,D=u,V=d,z=M,J=x,X=b,K=m;else if(S>=w)if(y=l,L=d,R=x,B=m,l>=0)P=c,g=a,D=u,V=h,z=M,J=p,X=b,K=f;else P=a,g=c,D=h,V=u,z=p,J=M,X=f,K=b;else if(y=c,L=u,R=M,B=b,c>=0)P=a,g=l,D=h,V=d,z=p,J=x,X=f,K=m;else P=l,g=a,D=d,V=h,z=x,J=p,X=m,K=f;if(y===0)return null;let ce=P/y,W=g/y,j=1/y,se=D-ce*L,Re=V-W*L,Z=z-ce*R,ne=J-W*R,Te=X-ce*B,Fe=K-W*B,Oe=Te*ne-Fe*Z,Ee=se*Fe-Re*Te,nt=Z*Re-ne*se;if(r){if(Oe<0||Ee<0||nt<0)return null}else if((Oe<0||Ee<0||nt<0)&&(Oe>0||Ee>0||nt>0))return null;let Ze=Oe+Ee+nt;if(Ze===0)return null;let Xe=j*(Oe*L+Ee*R+nt*B);if(Ze>0?Xe<0:Xe>0)return null;return this.at(Xe/Ze,n)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class wt extends mt{constructor(e){super();this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ie(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new oi,this.combine=on,this.reflectivity=1,this.refractionRatio=0.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}var _u=new Ue,bn=new ar,$a=new Yt,vu=new A,ja=new A,el=new A,tl=new A,wc=new A,il=new A,yu=new A,rl=new A;class we extends He{constructor(e=new Le,t=new wt){super();this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){if(super.copy(e,t),e.morphTargetInfluences!==void 0)this.morphTargetInfluences=e.morphTargetInfluences.slice();else this.morphTargetInfluences=void 0;if(e.morphTargetDictionary!==void 0)this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary);else this.morphTargetDictionary=void 0;return this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let n=0,s=r.length;n<s;n++){let o=r[n].name||String(n);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=n}}}}getVertexPosition(e,t){let i=this.geometry,r=i.attributes.position,n=i.morphAttributes.position,s=i.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(n&&o){il.set(0,0,0);for(let a=0,l=n.length;a<l;a++){let c=o[a],h=n[a];if(c===0)continue;if(wc.fromBufferAttribute(h,e),s)il.addScaledVector(wc,c);else il.addScaledVector(wc.sub(t),c)}t.add(il)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,r=this.material,n=this.matrixWorld;if(r===void 0)return;if(i.boundingSphere===null)i.computeBoundingSphere();if($a.copy(i.boundingSphere),$a.applyMatrix4(n),bn.copy(e.ray).recast(e.near),$a.containsPoint(bn.origin)===!1){if(bn.intersectSphere($a,vu)===null)return;if(bn.origin.distanceToSquared(vu)>(e.far-e.near)**2)return}if(_u.copy(n).invert(),bn.copy(e.ray).applyMatrix4(_u),i.boundingBox!==null){if(bn.intersectsBox(i.boundingBox)===!1)return}this._computeIntersections(e,t,bn)}_computeIntersections(e,t,i){let r,n=this.geometry,s=this.material,o=n.index,a=n.attributes.position,l=n.attributes.uv,c=n.attributes.uv1,h=n.attributes.normal,{groups:d,drawRange:u}=n;if(o!==null)if(Array.isArray(s))for(let p=0,x=d.length;p<x;p++){let M=d[p],f=s[M.materialIndex],m=Math.max(M.start,u.start),b=Math.min(o.count,Math.min(M.start+M.count,u.start+u.count));for(let E=m,S=b;E<S;E+=3){let w=o.getX(E),P=o.getX(E+1),g=o.getX(E+2);if(r=nl(this,f,e,i,l,c,h,w,P,g),r)r.faceIndex=Math.floor(E/3),r.face.materialIndex=M.materialIndex,t.push(r)}}else{let p=Math.max(0,u.start),x=Math.min(o.count,u.start+u.count);for(let M=p,f=x;M<f;M+=3){let m=o.getX(M),b=o.getX(M+1),E=o.getX(M+2);if(r=nl(this,s,e,i,l,c,h,m,b,E),r)r.faceIndex=Math.floor(M/3),t.push(r)}}else if(a!==void 0)if(Array.isArray(s))for(let p=0,x=d.length;p<x;p++){let M=d[p],f=s[M.materialIndex],m=Math.max(M.start,u.start),b=Math.min(a.count,Math.min(M.start+M.count,u.start+u.count));for(let E=m,S=b;E<S;E+=3){let w=E,P=E+1,g=E+2;if(r=nl(this,f,e,i,l,c,h,w,P,g),r)r.faceIndex=Math.floor(E/3),r.face.materialIndex=M.materialIndex,t.push(r)}}else{let p=Math.max(0,u.start),x=Math.min(a.count,u.start+u.count);for(let M=p,f=x;M<f;M+=3){let m=M,b=M+1,E=M+2;if(r=nl(this,s,e,i,l,c,h,m,b,E),r)r.faceIndex=Math.floor(M/3),t.push(r)}}}}function Pg(e,t,i,r,n,s,o,a){let l;if(t.side===dt)l=r.intersectTriangle(o,s,n,!0,a);else l=r.intersectTriangle(n,s,o,t.side===Ni,a);if(l===null)return null;rl.copy(a),rl.applyMatrix4(e.matrixWorld);let c=i.ray.origin.distanceTo(rl);if(c<i.near||c>i.far)return null;return{distance:c,point:rl.clone(),object:e}}function nl(e,t,i,r,n,s,o,a,l,c){e.getVertexPosition(a,ja),e.getVertexPosition(l,el),e.getVertexPosition(c,tl);let h=Pg(e,t,i,r,ja,el,tl,yu);if(h){let d=new A;if($t.getBarycoord(yu,ja,el,tl,d),n)h.uv=$t.getInterpolatedAttribute(n,a,l,c,d,new ee);if(s)h.uv1=$t.getInterpolatedAttribute(s,a,l,c,d,new ee);if(o){if(h.normal=$t.getInterpolatedAttribute(o,a,l,c,d,new A),h.normal.dot(r.direction)>0)h.normal.multiplyScalar(-1)}let u={a,b:l,c,normal:new A,materialIndex:0};$t.getNormal(ja,el,tl,u.normal),h.face=u,h.barycoord=d}return h}class lr extends et{constructor(e=null,t=1,i=1,r,n,s,o,a,l=ut,c=ut,h,d){super(null,s,o,a,l,c,r,n,h,d);this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Tn extends Ft{constructor(e,t,i,r=1){super(e,t,i);this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}var Ts=new Ue,Su=new Ue,sl=[],bu=new li,Ig=new Ue,Ho=new we,Wo=new Yt;class Xo extends we{constructor(e,t,i){super(e,t);this.isInstancedMesh=!0,this.instanceMatrix=new Tn(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,Ig)}computeBoundingBox(){let e=this.geometry,t=this.count;if(this.boundingBox===null)this.boundingBox=new li;if(e.boundingBox===null)e.computeBoundingBox();this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Ts),bu.copy(e.boundingBox).applyMatrix4(Ts),this.boundingBox.union(bu)}computeBoundingSphere(){let e=this.geometry,t=this.count;if(this.boundingSphere===null)this.boundingSphere=new Yt;if(e.boundingSphere===null)e.computeBoundingSphere();this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Ts),Wo.copy(e.boundingSphere).applyMatrix4(Ts),this.boundingSphere.union(Wo)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){if(this.instanceColor===null)return t.setRGB(1,1,1);else return t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,r=this.morphTexture.source.data.data,n=i.length+1,s=e*n+1;for(let o=0;o<i.length;o++)i[o]=r[s+o]}raycast(e,t){let i=this.matrixWorld,r=this.count;if(Ho.geometry=this.geometry,Ho.material=this.material,Ho.material===void 0)return;if(this.boundingSphere===null)this.computeBoundingSphere();if(Wo.copy(this.boundingSphere),Wo.applyMatrix4(i),e.ray.intersectsSphere(Wo)===!1)return;for(let n=0;n<r;n++){this.getMatrixAt(n,Ts),Su.multiplyMatrices(i,Ts),Ho.matrixWorld=Su,Ho.raycast(e,sl);for(let s=0,o=sl.length;s<o;s++){let a=sl[s];a.instanceId=n,a.object=this,t.push(a)}sl.length=0}}setColorAt(e,t){if(this.instanceColor===null)this.instanceColor=new Tn(new Float32Array(this.instanceMatrix.count*3).fill(1),3);return t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let i=t.morphTargetInfluences,r=i.length+1;if(this.morphTexture===null)this.morphTexture=new lr(new Float32Array(r*this.count),r,this.count,Qn,Et);let n=this.morphTexture.source.data.data,s=0;for(let l=0;l<i.length;l++)s+=i[l];let o=this.geometry.morphTargetsRelative?1:1-s,a=r*e;return n[a]=o,n.set(i,a+1),this}updateMorphTargets(){}dispose(){if(super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null)this.instanceColor.dispose();if(this.morphTexture!==null)this.morphTexture.dispose(),this.morphTexture=null}}var En=new Yt,Lg=new ee(0.5,0.5),ol=new A;class Gi{constructor(e=new Ci,t=new Ci,i=new Ci,r=new Ci,n=new Ci,s=new Ci){this.planes=[e,t,i,r,n,s]}set(e,t,i,r,n,s){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(n),o[5].copy(s),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Xt,i=!1){let r=this.planes,n=e.elements,s=n[0],o=n[1],a=n[2],l=n[3],c=n[4],h=n[5],d=n[6],u=n[7],p=n[8],x=n[9],M=n[10],f=n[11],m=n[12],b=n[13],E=n[14],S=n[15];if(r[0].setComponents(l-s,u-c,f-p,S-m).normalize(),r[1].setComponents(l+s,u+c,f+p,S+m).normalize(),r[2].setComponents(l+o,u+h,f+x,S+b).normalize(),r[3].setComponents(l-o,u-h,f-x,S-b).normalize(),i)r[4].setComponents(a,d,M,E).normalize(),r[5].setComponents(l-a,u-d,f-M,S-E).normalize();else if(r[4].setComponents(l-a,u-d,f-M,S-E).normalize(),t===Xt)r[5].setComponents(l+a,u+d,f+M,S+E).normalize();else if(t===sr)r[5].setComponents(a,d,M,E).normalize();else throw Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0){if(e.boundingSphere===null)e.computeBoundingSphere();En.copy(e.boundingSphere).applyMatrix4(e.matrixWorld)}else{let t=e.geometry;if(t.boundingSphere===null)t.computeBoundingSphere();En.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(En)}intersectsSprite(e){En.center.set(0,0,0);let t=Lg.distanceTo(e.center);return En.radius=0.7071067811865476+t,En.applyMatrix4(e.matrixWorld),this.intersectsSphere(En)}intersectsSphere(e){let t=this.planes,i=e.center,r=-e.radius;for(let n=0;n<6;n++)if(t[n].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let r=t[i];if(ol.x=r.normal.x>0?e.max.x:e.min.x,ol.y=r.normal.y>0?e.max.y:e.min.y,ol.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ol)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}var Tu=new Ue;class Es{constructor(){this.coordinateSystem=Xt,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,i=this._frustums;for(let r=0;r<t.length;r++){let n=t[r];if(Tu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),i[r]===void 0)i[r]=new Gi;i[r].setFromProjectionMatrix(Tu,n.coordinateSystem,n.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,i=e._frustums;for(let r=0;r<e._count;r++){if(t[r]===void 0)t[r]=new Gi;t[r].copy(i[r])}return this._count=e._count,this}clone(){return new Es().copy(this)}}class At extends mt{constructor(e){super();this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ie(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}var cl=new A,hl=new A,Eu=new Ue,qo=new ar,al=new Yt,Ac=new A,wu=new A;class Vi extends He{constructor(e=new Le,t=new At){super();this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){if(super.copy(e,t),e.morphTargetInfluences!==void 0)this.morphTargetInfluences=e.morphTargetInfluences.slice();else this.morphTargetInfluences=void 0;if(e.morphTargetDictionary!==void 0)this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary);else this.morphTargetDictionary=void 0;return this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let r=1,n=t.count;r<n;r++)cl.fromBufferAttribute(t,r-1),hl.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=cl.distanceTo(hl);e.setAttribute("lineDistance",new Ae(i,1))}else le("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,r=this.matrixWorld,n=e.params.Line.threshold,s=i.drawRange;if(i.boundingSphere===null)i.computeBoundingSphere();if(al.copy(i.boundingSphere),al.applyMatrix4(r),al.radius+=n,e.ray.intersectsSphere(al)===!1)return;Eu.copy(r).invert(),qo.copy(e.ray).applyMatrix4(Eu);let o=n/((this.scale.x+this.scale.y+this.scale.z)/3),a=o*o,l=this.isLineSegments?2:1,c=i.index,d=i.attributes.position;if(c!==null){let u=Math.max(0,s.start),p=Math.min(c.count,s.start+s.count);for(let x=u,M=p-1;x<M;x+=l){let f=c.getX(x),m=c.getX(x+1),b=ll(this,e,qo,a,f,m,x);if(b)t.push(b)}if(this.isLineLoop){let x=c.getX(p-1),M=c.getX(u),f=ll(this,e,qo,a,x,M,p-1);if(f)t.push(f)}}else{let u=Math.max(0,s.start),p=Math.min(d.count,s.start+s.count);for(let x=u,M=p-1;x<M;x+=l){let f=ll(this,e,qo,a,x,x+1,x);if(f)t.push(f)}if(this.isLineLoop){let x=ll(this,e,qo,a,p-1,u,p-1);if(x)t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let n=0,s=r.length;n<s;n++){let o=r[n].name||String(n);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=n}}}}}function ll(e,t,i,r,n,s,o){let a=e.geometry.attributes.position;if(cl.fromBufferAttribute(a,n),hl.fromBufferAttribute(a,s),i.distanceSqToSegment(cl,hl,Ac,wu)>r)return;Ac.applyMatrix4(e.matrixWorld);let c=t.ray.origin.distanceTo(Ac);if(c<t.near||c>t.far)return;return{distance:c,point:wu.clone().applyMatrix4(e.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:e}}var Au=new A,Ru=new A;class Pi extends Vi{constructor(e,t){super(e,t);this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let r=0,n=t.count;r<n;r+=2)Au.fromBufferAttribute(t,r),Ru.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Au.distanceTo(Ru);e.setAttribute("lineDistance",new Ae(i,1))}else le("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Yo extends Vi{constructor(e,t){super(e,t);this.isLineLoop=!0,this.type="LineLoop"}}class kr extends et{constructor(e=[],t=Fi,i,r,n,s,o,a,l,c){super(e,t,i,r,n,s,o,a,l,c);this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ul extends et{constructor(e,t,i,r,n,s,o,a,l){super(e,t,i,r,n,s,o,a,l);this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ii extends et{constructor(e,t,i=Lt,r,n,s,o=ut,a=ut,l,c=_i,h=1){if(c!==_i&&c!==Ei)throw Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:h};super(d,r,n,s,o,a,c,i,l);this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new or(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class ws extends Ii{constructor(e,t=Lt,i=Fi,r,n,s=ut,o=ut,a,l=_i){let c={width:e,height:e,depth:1},h=[c,c,c,c,c,c];super(e,e,t,i,r,n,s,o,a,l);this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class As extends et{constructor(e=null){super();this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class di extends Le{constructor(e=1,t=1,i=1,r=1,n=1,s=1){super();this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:n,depthSegments:s};let o=this;r=Math.floor(r),n=Math.floor(n),s=Math.floor(s);let a=[],l=[],c=[],h=[],d=0,u=0;p("z","y","x",-1,-1,i,t,e,s,n,0),p("z","y","x",1,-1,i,t,-e,s,n,1),p("x","z","y",1,1,e,i,t,r,s,2),p("x","z","y",1,-1,e,i,-t,r,s,3),p("x","y","z",1,-1,e,t,i,r,n,4),p("x","y","z",-1,-1,e,t,-i,r,n,5),this.setIndex(a),this.setAttribute("position",new Ae(l,3)),this.setAttribute("normal",new Ae(c,3)),this.setAttribute("uv",new Ae(h,2));function p(x,M,f,m,b,E,S,w,P,g,y){let D=E/P,V=S/g,L=E/2,z=S/2,J=w/2,R=P+1,X=g+1,K=0,B=0,ce=new A;for(let W=0;W<X;W++){let j=W*V-z;for(let se=0;se<R;se++){let Re=se*D-L;ce[x]=Re*m,ce[M]=j*b,ce[f]=J,l.push(ce.x,ce.y,ce.z),ce[x]=0,ce[M]=0,ce[f]=w>0?1:-1,c.push(ce.x,ce.y,ce.z),h.push(se/P),h.push(1-W/g),K+=1}}for(let W=0;W<g;W++)for(let j=0;j<P;j++){let se=d+j+R*W,Re=d+j+R*(W+1),Z=d+(j+1)+R*(W+1),ne=d+(j+1)+R*W;a.push(se,Re,ne),a.push(Re,Z,ne),B+=6}o.addGroup(u,B,y),u+=B,d+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new di(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Zo extends Le{constructor(e=1,t=32,i=0,r=Math.PI*2){super();this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:r},t=Math.max(3,t);let n=[],s=[],o=[],a=[],l=new A,c=new ee;s.push(0,0,0),o.push(0,0,1),a.push(0.5,0.5);for(let h=0,d=3;h<=t;h++,d+=3){let u=i+h/t*r;l.x=e*Math.cos(u),l.y=e*Math.sin(u),s.push(l.x,l.y,l.z),o.push(0,0,1),c.x=(s[d]/e+1)/2,c.y=(s[d+1]/e+1)/2,a.push(c.x,c.y)}for(let h=1;h<=t;h++)n.push(h,h+1,0);this.setIndex(n),this.setAttribute("position",new Ae(s,3)),this.setAttribute("normal",new Ae(o,3)),this.setAttribute("uv",new Ae(a,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zo(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Tr extends Le{constructor(e=1,t=1,i=1,r=32,n=1,s=!1,o=0,a=Math.PI*2){super();this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:n,openEnded:s,thetaStart:o,thetaLength:a};let l=this;r=Math.floor(r),n=Math.floor(n);let c=[],h=[],d=[],u=[],p=0,x=[],M=i/2,f=0;if(m(),s===!1){if(e>0)b(!0);if(t>0)b(!1)}this.setIndex(c),this.setAttribute("position",new Ae(h,3)),this.setAttribute("normal",new Ae(d,3)),this.setAttribute("uv",new Ae(u,2));function m(){let E=new A,S=new A,w=0,P=(t-e)/i;for(let g=0;g<=n;g++){let y=[],D=g/n,V=D*(t-e)+e;for(let L=0;L<=r;L++){let z=L/r,J=z*a+o,R=Math.sin(J),X=Math.cos(J);S.x=V*R,S.y=-D*i+M,S.z=V*X,h.push(S.x,S.y,S.z),E.set(R,P,X).normalize(),d.push(E.x,E.y,E.z),u.push(z,1-D),y.push(p++)}x.push(y)}for(let g=0;g<r;g++)for(let y=0;y<n;y++){let D=x[y][g],V=x[y+1][g],L=x[y+1][g+1],z=x[y][g+1];if(e>0||y!==0)c.push(D,V,z),w+=3;if(t>0||y!==n-1)c.push(V,L,z),w+=3}l.addGroup(f,w,0),f+=w}function b(E){let S=p,w=new ee,P=new A,g=0,y=E===!0?e:t,D=E===!0?1:-1;for(let L=1;L<=r;L++)h.push(0,M*D,0),d.push(0,D,0),u.push(0.5,0.5),p++;let V=p;for(let L=0;L<=r;L++){let J=L/r*a+o,R=Math.cos(J),X=Math.sin(J);P.x=y*X,P.y=M*D,P.z=y*R,h.push(P.x,P.y,P.z),d.push(0,D,0),w.x=R*0.5+0.5,w.y=X*0.5*D+0.5,u.push(w.x,w.y),p++}for(let L=0;L<r;L++){let z=S+L,J=V+L;if(E===!0)c.push(J,J+1,z);else c.push(J+1,J,z);g+=3}l.addGroup(f,g,E===!0?1:2),f+=g}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Tr(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Rs extends Tr{constructor(e=1,t=1,i=32,r=1,n=!1,s=0,o=Math.PI*2){super(0,e,t,i,r,n,s,o);this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:r,openEnded:n,thetaStart:s,thetaLength:o}}static fromJSON(e){return new Rs(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}var fl=new A,dl=new A,Pc=new A,pl=new $t;class Ic extends Le{constructor(e=null,t=1){super();if(this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let r=Math.pow(10,4),n=Math.cos(pn*t),s=e.getIndex(),o=e.getAttribute("position"),a=s?s.count:o.count,l=[0,0,0],c=["a","b","c"],h=[,,,],d=new Map,u=[];for(let p=0;p<a;p+=3){if(s)l[0]=s.getX(p),l[1]=s.getX(p+1),l[2]=s.getX(p+2);else l[0]=p,l[1]=p+1,l[2]=p+2;let{a:x,b:M,c:f}=pl;if(x.fromBufferAttribute(o,l[0]),M.fromBufferAttribute(o,l[1]),f.fromBufferAttribute(o,l[2]),pl.getNormal(Pc),h[0]=`${Math.round(x.x*r)},${Math.round(x.y*r)},${Math.round(x.z*r)}`,h[1]=`${Math.round(M.x*r)},${Math.round(M.y*r)},${Math.round(M.z*r)}`,h[2]=`${Math.round(f.x*r)},${Math.round(f.y*r)},${Math.round(f.z*r)}`,h[0]===h[1]||h[1]===h[2]||h[2]===h[0])continue;for(let m=0;m<3;m++){let b=(m+1)%3,E=h[m],S=h[b],w=pl[c[m]],P=pl[c[b]],g=`${E}_${S}`,y=`${S}_${E}`,D=d.get(y);if(D){if(Pc.dot(D.normal)<=n)u.push(w.x,w.y,w.z),u.push(P.x,P.y,P.z);d.set(y,null)}else if(!d.has(g))d.set(g,{index0:l[m],index1:l[b],normal:Pc.clone()})}}for(let p of d.values())if(p){let{index0:x,index1:M}=p;fl.fromBufferAttribute(o,x),dl.fromBufferAttribute(o,M),u.push(fl.x,fl.y,fl.z),u.push(dl.x,dl.y,dl.z)}this.setAttribute("position",new Ae(u,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class vi extends Le{constructor(e=1,t=1,i=1,r=1){super();this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};let n=e/2,s=t/2,o=Math.floor(i),a=Math.floor(r),l=o+1,c=a+1,h=e/o,d=t/a,u=[],p=[],x=[],M=[];for(let f=0;f<c;f++){let m=f*d-s;for(let b=0;b<l;b++){let E=b*h-n;p.push(E,-m,0),x.push(0,0,1),M.push(b/o),M.push(1-f/a)}}for(let f=0;f<a;f++)for(let m=0;m<o;m++){let b=m+l*f,E=m+l*(f+1),S=m+1+l*(f+1),w=m+1+l*f;u.push(b,E,w),u.push(E,S,w)}this.setIndex(u),this.setAttribute("position",new Ae(p,3)),this.setAttribute("normal",new Ae(x,3)),this.setAttribute("uv",new Ae(M,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vi(e.width,e.height,e.widthSegments,e.heightSegments)}}class gl extends Le{constructor(e=0.5,t=1,i=32,r=1,n=0,s=Math.PI*2){super();this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:r,thetaStart:n,thetaLength:s},i=Math.max(3,i),r=Math.max(1,r);let o=[],a=[],l=[],c=[],h=e,d=(t-e)/r,u=new A,p=new ee;for(let x=0;x<=r;x++){for(let M=0;M<=i;M++){let f=n+M/i*s;u.x=h*Math.cos(f),u.y=h*Math.sin(f),a.push(u.x,u.y,u.z),l.push(0,0,1),p.x=(u.x/t+1)/2,p.y=(u.y/t+1)/2,c.push(p.x,p.y)}h+=d}for(let x=0;x<r;x++){let M=x*(i+1);for(let f=0;f<i;f++){let m=f+M,b=m,E=m+i+1,S=m+i+2,w=m+1;o.push(b,E,w),o.push(E,S,w)}}this.setIndex(o),this.setAttribute("position",new Ae(a,3)),this.setAttribute("normal",new Ae(l,3)),this.setAttribute("uv",new Ae(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gl(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Hr extends Le{constructor(e=1,t=32,i=16,r=0,n=Math.PI*2,s=0,o=Math.PI){super();this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:n,thetaStart:s,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let a=Math.min(s+o,Math.PI),l=0,c=[],h=new A,d=new A,u=[],p=[],x=[],M=[];for(let f=0;f<=i;f++){let m=[],b=f/i,E=s+b*o,S=e*Math.cos(E),w=Math.sqrt(e*e-S*S),P=0;if(f===0&&s===0)P=0.5/t;else if(f===i&&a===Math.PI)P=-0.5/t;for(let g=0;g<=t;g++){let y=g/t,D=r+y*n;h.x=-w*Math.cos(D),h.y=S,h.z=w*Math.sin(D),p.push(h.x,h.y,h.z),d.copy(h).normalize(),x.push(d.x,d.y,d.z),M.push(y+P,1-b),m.push(l++)}c.push(m)}for(let f=0;f<i;f++)for(let m=0;m<t;m++){let b=c[f][m+1],E=c[f][m],S=c[f+1][m],w=c[f+1][m+1];if(f!==0||s>0)u.push(b,E,w);if(f!==i-1||a<Math.PI)u.push(E,S,w)}this.setIndex(u),this.setAttribute("position",new Ae(p,3)),this.setAttribute("normal",new Ae(x,3)),this.setAttribute("uv",new Ae(M,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Hr(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Cs extends Le{constructor(e=1,t=0.4,i=12,r=48,n=Math.PI*2,s=0,o=Math.PI*2){super();this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:r,arc:n,thetaStart:s,thetaLength:o},i=Math.floor(i),r=Math.floor(r);let a=[],l=[],c=[],h=[],d=new A,u=new A,p=new A;for(let x=0;x<=i;x++){let M=s+x/i*o;for(let f=0;f<=r;f++){let m=f/r*n;u.x=(e+t*Math.cos(M))*Math.cos(m),u.y=(e+t*Math.cos(M))*Math.sin(m),u.z=t*Math.sin(M),l.push(u.x,u.y,u.z),d.x=e*Math.cos(m),d.y=e*Math.sin(m),p.subVectors(u,d).normalize(),c.push(p.x,p.y,p.z),h.push(f/r),h.push(x/i)}}for(let x=1;x<=i;x++)for(let M=1;M<=r;M++){let f=(r+1)*x+M-1,m=(r+1)*(x-1)+M-1,b=(r+1)*(x-1)+M,E=(r+1)*x+M;a.push(f,m,E),a.push(m,b,E)}this.setIndex(a),this.setAttribute("position",new Ae(l,3)),this.setAttribute("normal",new Ae(c,3)),this.setAttribute("uv",new Ae(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Cs(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}function Er(e){let t={};for(let i in e){t[i]={};for(let r in e[i]){let n=e[i][r];if(Lu(n))if(n.isRenderTargetTexture)le("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][r]=null;else t[i][r]=n.clone();else if(Array.isArray(n))if(Lu(n[0])){let s=[];for(let o=0,a=n.length;o<a;o++)s[o]=n[o].clone();t[i][r]=s}else t[i][r]=n.slice();else t[i][r]=n}}return t}function ci(e){let t={};for(let i=0;i<e.length;i++){let r=Er(e[i]);for(let n in r)t[n]=r[n]}return t}function Lu(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function Du(e){let t=[];for(let i=0;i<e.length;i++)t.push(e[i].clone());return t}function xl(e){let t=e.getRenderTarget();if(t===null)return e.outputColorSpace;if(t.isXRRenderTarget===!0)return t.texture.colorSpace;return Ge.workingColorSpace}var hr={clone:Er,merge:ci};var Nu=`
void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}
`;var Uu=`
void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}
`;class _t extends mt{constructor(e){super();if(this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Nu,this.fragmentShader=Uu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0)this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Er(e.uniforms),this.uniformsGroups=Du(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let s=this.uniforms[r].value;if(s&&s.isTexture)t.uniforms[r]={type:"t",value:s.toJSON(e).uuid};else if(s&&s.isColor)t.uniforms[r]={type:"c",value:s.getHex()};else if(s&&s.isVector2)t.uniforms[r]={type:"v2",value:s.toArray()};else if(s&&s.isVector3)t.uniforms[r]={type:"v3",value:s.toArray()};else if(s&&s.isVector4)t.uniforms[r]={type:"v4",value:s.toArray()};else if(s&&s.isMatrix3)t.uniforms[r]={type:"m3",value:s.toArray()};else if(s&&s.isMatrix4)t.uniforms[r]={type:"m4",value:s.toArray()};else t.uniforms[r]={value:s}}if(Object.keys(this.defines).length>0)t.defines=this.defines;t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let r in this.extensions)if(this.extensions[r]===!0)i[r]=!0;if(Object.keys(i).length>0)t.extensions=i;return t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let i in e.uniforms){let r=e.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=t[r.value]||null;break;case"c":this.uniforms[i].value=new ie().setHex(r.value);break;case"v2":this.uniforms[i].value=new ee().fromArray(r.value);break;case"v3":this.uniforms[i].value=new A().fromArray(r.value);break;case"v4":this.uniforms[i].value=new tt().fromArray(r.value);break;case"m3":this.uniforms[i].value=new Ie().fromArray(r.value);break;case"m4":this.uniforms[i].value=new Ue().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(e.defines!==void 0)this.defines=e.defines;if(e.vertexShader!==void 0)this.vertexShader=e.vertexShader;if(e.fragmentShader!==void 0)this.fragmentShader=e.fragmentShader;if(e.glslVersion!==void 0)this.glslVersion=e.glslVersion;if(e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];if(e.lights!==void 0)this.lights=e.lights;if(e.clipping!==void 0)this.clipping=e.clipping;return this}}class wn extends _t{constructor(e){super(e);this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class yi extends mt{constructor(e){super();this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ie(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ie(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=$i,this.normalScale=new ee(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new oi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Jo extends yi{constructor(e){super();this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ee(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ze(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+0.4*t)/(1-0.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new ie(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ie(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ie(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){if(this._anisotropy>0!==e>0)this.version++;this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){if(this._clearcoat>0!==e>0)this.version++;this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){if(this._diffuseRoughness>0!==e>0)this.version++;this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){if(this._iridescence>0!==e>0)this.version++;this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){if(this._dispersion>0!==e>0)this.version++;this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){if(this._retroreflectivity>0!==e>0)this.version++;this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){if(this._sheen>0!==e>0)this.version++;this._sheen=e}get transmission(){return this._transmission}set transmission(e){if(this._transmission>0!==e>0)this.version++;this._transmission=e}get iridescenceThicknessRange(){return Bi('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){Bi('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Ko extends mt{constructor(e){super();this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ie(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ie(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=$i,this.normalScale=new ee(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new oi,this.combine=on,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=0.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Qo extends mt{constructor(e){super();this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Vh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class $o extends mt{constructor(e){super();this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class jo extends At{constructor(e){super();this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}function Wr(e,t){if(!e||e.constructor===t)return e;if(typeof t.BYTES_PER_ELEMENT==="number")return new t(e);return Array.prototype.slice.call(e)}function Ps(e){return e!==void 0&&e.inTangents!==void 0&&e.outTangents!==void 0}class ki{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,r=t[i],n=t[i-1];i:{e:{let s;t:{r:if(!(e<r)){for(let o=i+2;;){if(r===void 0){if(e<n)break r;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(n=r,r=t[++i],e<r)break e}s=t.length;break t}if(!(e>=n)){let o=t[1];if(e<o)i=2,n=o;for(let a=i-2;;){if(n===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===a)break;if(r=n,n=t[--i-1],e>=n)break e}s=i,i=0;break t}break i}while(i<s){let o=i+s>>>1;if(e<t[o])s=o;else i=o+1}if(r=t[i],n=t[i-1],n===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,n,r)}return this.interpolate_(i,n,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,n=e*r;for(let s=0;s!==r;++s)t[s]=i[n+s];return t}interpolate_(){throw Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}}class _l extends ki{constructor(e,t,i,r){super(e,t,i,r);this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ca,endingEnd:Ca}}intervalChanged_(e,t,i){let r=this.parameterPositions,n=e-2,s=e+1,o=r[n],a=r[s];if(o===void 0)switch(this.getSettings_().endingStart){case Pa:n=e,o=2*t-i;break;case Ia:n=r.length-2,o=t+r[n]-r[n+1];break;default:n=e,o=i}if(a===void 0)switch(this.getSettings_().endingEnd){case Pa:s=e,a=2*i-t;break;case Ia:s=1,a=i+r[1]-r[0];break;default:s=e-1,a=t}let l=(i-t)*0.5,c=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(a-i),this._offsetPrev=n*c,this._offsetNext=s*c}interpolate_(e,t,i,r){let n=this.resultBuffer,s=this.sampleValues,o=this.valueSize,a=e*o,l=a-o,c=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,u=this._weightNext,p=(i-t)/(r-t),x=p*p,M=x*p,f=-d*M+2*d*x-d*p,m=(1+d)*M+(-1.5-2*d)*x+(-0.5+d)*p+1,b=(-1-u)*M+(1.5+u)*x+0.5*p,E=u*M-u*x;for(let S=0;S!==o;++S)n[S]=f*s[c+S]+m*s[l+S]+b*s[a+S]+E*s[h+S];return n}}class ea extends ki{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let n=this.resultBuffer,s=this.sampleValues,o=this.valueSize,a=e*o,l=a-o,c=(i-t)/(r-t),h=1-c;for(let d=0;d!==o;++d)n[d]=s[l+d]*h+s[a+d]*c;return n}}class vl extends ki{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}}class yl extends ki{interpolate_(e,t,i,r){let n=this.resultBuffer,s=this.sampleValues,o=this.valueSize,a=e*o,l=a-o,c=this.inTangents,h=this.outTangents;if(!c||!h){let p=(i-t)/(r-t),x=1-p;for(let M=0;M!==o;++M)n[M]=s[l+M]*x+s[a+M]*p;return n}let d=o*2,u=e-1;for(let p=0;p!==o;++p){let x=s[l+p],M=s[a+p],f=u*d+p*2,m=h[f],b=h[f+1],E=e*d+p*2,S=c[E],w=c[E+1],P=Kg(i,t,m,S,r);n[p]=Ou(P,x,b,w,M)}return n}}function Ou(e,t,i,r,n){let s=1-e;return s*s*s*t+3*s*s*e*i+3*s*e*e*r+e*e*e*n}function Jg(e,t,i,r,n){let s=1-e;return 3*s*s*(i-t)+6*s*e*(r-i)+3*e*e*(n-r)}function Kg(e,t,i,r,n){let s=(e-t)/(n-t);for(let o=0;o<8;o++){let a=Ou(s,t,i,r,n)-e;if(Math.abs(a)<0.0000000001)break;let l=Jg(s,t,i,r,n);if(Math.abs(l)<0.0000000001)break;s=Math.max(0,Math.min(1,s-a/l))}return s}class Ot{constructor(e,t,i,r){if(e===void 0)throw Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Wr(t,this.TimeBufferType),this.values=Wr(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Wr(e.times,Array),values:Wr(e.values,Array)};let r=e.getInterpolation();if(r!==e.DefaultInterpolation)i.interpolation=r;if(Ps(e.settings))i.settings={inTangents:Wr(e.settings.inTangents,Array),outTangents:Wr(e.settings.outTangents,Array)}}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new vl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ea(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new _l(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new yl(this.times,this.values,this.getValueSize(),e);if(this.settings)t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents;return t}setInterpolation(e){let t;switch(e){case hn:t=this.InterpolantFactoryMethodDiscrete;break;case Aa:t=this.InterpolantFactoryMethodLinear;break;case Ra:t=this.InterpolantFactoryMethodSmooth;break;case rc:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(i);return le("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return hn;case this.InterpolantFactoryMethodLinear:return Aa;case this.InterpolantFactoryMethodSmooth:return Ra;case this.InterpolantFactoryMethodBezier:return rc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e;if(Ps(this.settings))Bu(this.settings.inTangents,e),Bu(this.settings.outTangents,e)}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e;if(Ps(this.settings))zu(this.settings.inTangents,e),zu(this.settings.outTangents,e)}return this}trim(e,t){let i=this.times,r=i.length,n=0,s=r-1;while(n!==r&&i[n]<e)++n;while(s!==-1&&i[s]>t)--s;if(++s,n!==0||s!==r){if(n>=s)s=Math.max(s,1),n=s-1;let o=this.getValueSize();this.times=i.slice(n,s),this.values=this.values.slice(n*o,s*o)}return this}validate(){let e=!0,t=this.getValueSize();if(t-Math.floor(t)!==0)ye("KeyframeTrack: Invalid value size in track.",this),e=!1;let i=this.times,r=this.values,n=i.length;if(n===0)ye("KeyframeTrack: Track is empty.",this),e=!1;let s=null;for(let o=0;o!==n;o++){let a=i[o];if(typeof a==="number"&&isNaN(a)){ye("KeyframeTrack: Time is not a valid number.",this,o,a),e=!1;break}if(s!==null&&s>a){ye("KeyframeTrack: Out of order keys.",this,o,a,s),e=!1;break}s=a}if(r!==void 0){if(sc(r))for(let o=0,a=r.length;o!==a;++o){let l=r[o];if(isNaN(l)){ye("KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===Ra,n=e.length-1,s=1;for(let o=1;o<n;++o){let a=!1,l=e[o],c=e[o+1];if(l!==c&&(o!==1||l!==e[0]))if(!r){let h=o*i,d=h-i,u=h+i;for(let p=0;p!==i;++p){let x=t[h+p];if(x!==t[d+p]||x!==t[u+p]){a=!0;break}}}else a=!0;if(a){if(o!==s){e[s]=e[o];let h=o*i,d=s*i;for(let u=0;u!==i;++u)t[d+u]=t[h+u]}++s}}if(n>0){e[s]=e[n];for(let o=n*i,a=s*i,l=0;l!==i;++l)t[a+l]=t[o+l];++s}if(s!==e.length)this.times=e.slice(0,s),this.values=t.slice(0,s*i);else this.times=e,this.values=t;return this}clone(){let e=this.times.slice(),t=this.values.slice(),r=new this.constructor(this.name,e,t);if(r.createInterpolant=this.createInterpolant,Ps(this.settings))r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()};return r}}function Bu(e,t){for(let i=0,r=e.length;i!==r;i+=2)e[i]+=t}function zu(e,t){for(let i=0,r=e.length;i!==r;i+=2)e[i]*=t}Ot.prototype.ValueTypeName="";Ot.prototype.TimeBufferType=Float32Array;Ot.prototype.ValueBufferType=Float32Array;Ot.prototype.DefaultInterpolation=Aa;class Xr extends Ot{constructor(e,t,i){super(e,t,i)}}Xr.prototype.ValueTypeName="bool";Xr.prototype.ValueBufferType=Array;Xr.prototype.DefaultInterpolation=hn;Xr.prototype.InterpolantFactoryMethodLinear=void 0;Xr.prototype.InterpolantFactoryMethodSmooth=void 0;class Ml extends Ot{constructor(e,t,i,r){super(e,t,i,r)}}Ml.prototype.ValueTypeName="color";class Sl extends Ot{constructor(e,t,i,r){super(e,t,i,r)}}Sl.prototype.ValueTypeName="number";class bl extends ki{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let n=this.resultBuffer,s=this.sampleValues,o=this.valueSize,a=(i-t)/(r-t),l=e*o;for(let c=l+o;l!==c;l+=4)qt.slerpFlat(n,0,s,l-o,s,l,a);return n}}class ta extends Ot{constructor(e,t,i,r){super(e,t,i,r)}InterpolantFactoryMethodLinear(e){return new bl(this.times,this.values,this.getValueSize(),e)}}ta.prototype.ValueTypeName="quaternion";ta.prototype.InterpolantFactoryMethodSmooth=void 0;class qr extends Ot{constructor(e,t,i){super(e,t,i)}}qr.prototype.ValueTypeName="string";qr.prototype.ValueBufferType=Array;qr.prototype.DefaultInterpolation=hn;qr.prototype.InterpolantFactoryMethodLinear=void 0;qr.prototype.InterpolantFactoryMethodSmooth=void 0;class Tl extends Ot{constructor(e,t,i,r){super(e,t,i,r)}}Tl.prototype.ValueTypeName="vector";var An={enabled:!1,files:{},add:function(e,t){if(this.enabled===!1)return;if(Vu(e))return;this.files[e]=t},get:function(e){if(this.enabled===!1)return;if(Vu(e))return;return this.files[e]},remove:function(e){delete this.files[e]},clear:function(){this.files={}}};function Vu(e){try{let t=e.slice(e.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch(t){return!1}}class El{constructor(e,t,i){let r=this,n=!1,s=0,o=0,a=void 0,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(c){if(o++,n===!1){if(r.onStart!==void 0)r.onStart(c,s,o)}n=!0},this.itemEnd=function(c){if(s++,r.onProgress!==void 0)r.onProgress(c,s,o);if(s===o){if(n=!1,r.onLoad!==void 0)r.onLoad()}},this.itemError=function(c){if(r.onError!==void 0)r.onError(c)},this.resolveURL=function(c){if(c=c.normalize("NFC"),a)return a(c);return c},this.setURLModifier=function(c){return a=c,this},this.addHandler=function(c,h){return l.push(c,h),this},this.removeHandler=function(c){let h=l.indexOf(c);if(h!==-1)l.splice(h,2);return this},this.getHandler=function(c){for(let h=0,d=l.length;h<d;h+=2){let u=l[h],p=l[h+1];if(u.global)u.lastIndex=0;if(u.test(c))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){if(!this._abortController)this._abortController=new AbortController;return this._abortController}}var Nc=new El;class jt{constructor(e){if(this.manager=e!==void 0?e:Nc,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(r,n){i.load(e,r,t,n)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}}jt.DEFAULT_MATERIAL_NAME="__DEFAULT";var Is=new WeakMap;class Ls extends jt{constructor(e){super(e)}load(e,t,i,r){if(this.path!==void 0)e=this.path+e;e=this.manager.resolveURL(e);let n=this,s=An.get(`image:${e}`);if(s!==void 0){if(s.complete===!0)n.manager.itemStart(e),setTimeout(function(){if(t)t(s);n.manager.itemEnd(e)},0);else{let h=Is.get(s);if(h===void 0)h=[],Is.set(s,h);h.push({onLoad:t,onError:r})}return s}let o=Fr("img");function a(){if(c(),t)t(this);let h=Is.get(this)||[];for(let d=0;d<h.length;d++){let u=h[d];if(u.onLoad)u.onLoad(this)}Is.delete(this),n.manager.itemEnd(e)}function l(h){if(c(),r)r(h);An.remove(`image:${e}`);let d=Is.get(this)||[];for(let u=0;u<d.length;u++){let p=d[u];if(p.onError)p.onError(h)}Is.delete(this),n.manager.itemError(e),n.manager.itemEnd(e)}function c(){o.removeEventListener("load",a,!1),o.removeEventListener("error",l,!1)}if(o.addEventListener("load",a,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"){if(this.crossOrigin!==void 0)o.crossOrigin=this.crossOrigin}return An.add(`image:${e}`,o),n.manager.itemStart(e),o.fetchPriority=this.priority,o.src=e,o}}class wl extends jt{constructor(e){super(e)}load(e,t,i,r){let n=new et,s=new Ls(this.manager);return s.setPriority(this.priority),s.setCache(this.cache),s.setCrossOrigin(this.crossOrigin),s.setPath(this.path),s.load(e,function(o){if(n.image=o,n.needsUpdate=!0,t!==void 0)t(n)},i,r),n}}class Hi extends He{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super();this.isLight=!0,this.type="Light",this.color=new ie(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class ia extends Hi{constructor(e,t,i){super(e,i);this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(He.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ie(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}var Fc=new Ue,ku=new A,Hu=new A;class Cn{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ee(512,512),this.mapType=Tt,this.map=null,this.mapPass=null,this.matrix=new Ue,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Gi,this._frameExtents=new ee(1,1),this._viewportCount=1,this._viewports=[new tt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;ku.setFromMatrixPosition(e.matrixWorld),t.position.copy(ku),Hu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Hu),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,r){Fc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(Fc,e.coordinateSystem,e.reversedDepth);let n=this._frameExtents,s=r?r.z/n.x:1,o=r?r.w/n.y:1,a=r?r.x/n.x:0,l=r?r.y/n.y:0;if(e.coordinateSystem===sr||e.reversedDepth)t.set(0.5*s,0,0,0.5*s+a,0,0.5*o,0,0.5*o+l,0,0,1,0,0,0,0,1);else t.set(0.5*s,0,0,0.5*s+a,0,0.5*o,0,0.5*o+l,0,0,0.5,0.5,0,0,0,1);t.multiply(Fc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){if(this.map)this.map.dispose();if(this.mapPass)this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}var Al=new A,Rl=new qt,ur=new A;class Pn extends He{constructor(){super();this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ue,this.projectionMatrix=new Ue,this.projectionMatrixInverse=new Ue,this.coordinateSystem=Xt,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){if(super.updateMatrixWorld(e),this.matrixWorld.decompose(Al,Rl,ur),ur.x===1&&ur.y===1&&ur.z===1)this.matrixWorldInverse.copy(this.matrixWorld).invert();else this.matrixWorldInverse.compose(Al,Rl,ur.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){if(super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(Al,Rl,ur),ur.x===1&&ur.y===1&&ur.z===1)this.matrixWorldInverse.copy(this.matrixWorld).invert();else this.matrixWorldInverse.compose(Al,Rl,ur.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}var Yr=new A,Wu=new ee,Xu=new ee;class Mt extends Pn{constructor(e=50,t=1,i=0.1,r=2000){super();this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=0.5*this.getFilmHeight()/e;this.fov=mn*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(pn*0.5*this.fov);return 0.5*this.getFilmHeight()/e}getEffectiveFOV(){return mn*2*Math.atan(Math.tan(pn*0.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Yr.set(-1,-1,0.5).applyMatrix4(this.projectionMatrixInverse),t.set(Yr.x,Yr.y).multiplyScalar(-e/Yr.z),Yr.set(1,1,0.5).applyMatrix4(this.projectionMatrixInverse),i.set(Yr.x,Yr.y).multiplyScalar(-e/Yr.z)}getViewSize(e,t){return this.getViewBounds(e,Wu,Xu),t.subVectors(Xu,Wu)}setViewOffset(e,t,i,r,n,s){if(this.aspect=e/t,this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=n,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(pn*0.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,n=-0.5*r,s=this.view;if(this.view!==null&&this.view.enabled){let{fullWidth:a,fullHeight:l}=s;n+=s.offsetX*r/a,t-=s.offsetY*i/l,r*=s.width/a,i*=s.height/l}let o=this.filmOffset;if(o!==0)n+=e*o/this.getFilmWidth();this.projectionMatrix.makePerspective(n,n+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);if(t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null)t.object.view=Object.assign({},this.view);return t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Oc extends Cn{constructor(){super(new Mt(50,1,0.5,500));this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,i=mn*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height*this.aspect,n=e.distance||t.far;if(i!==t.fov||r!==t.aspect||n!==t.far)t.fov=i,t.aspect=r,t.far=n,t.updateProjectionMatrix();super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}}class ra extends Hi{constructor(e,t,i=0,r=Math.PI/3,n=0,s=2){super(e,t);this.isSpotLight=!0,this.type="SpotLight",this.position.copy(He.DEFAULT_UP),this.updateMatrix(),this.target=new He,this.distance=i,this.angle=r,this.penumbra=n,this.decay=s,this.map=null,this.shadow=new Oc}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);if(t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture)t.object.map=this.map.toJSON(e).uuid;return t.object.shadow=this.shadow.toJSON(),t}}class Bc extends Cn{constructor(){super(new Mt(90,1,0.5,500));this.isPointLightShadow=!0}}class In extends Hi{constructor(e,t,i=0,r=2){super(e,t);this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new Bc}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class Zr extends Pn{constructor(e=-1,t=1,i=1,r=-1,n=0.1,s=2000){super();this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=n,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,n,s){if(this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=n,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2,n=i-e,s=i+e,o=r+t,a=r-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;n+=l*this.view.offsetX,s=n+l*this.view.width,o-=c*this.view.offsetY,a=o-c*this.view.height}this.projectionMatrix.makeOrthographic(n,s,o,a,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);if(t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null)t.object.view=Object.assign({},this.view);return t}}var Ds=-90,Ns=1;class Ln extends He{constructor(e,t,i){super();this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Mt(Ds,Ns,e,t);r.layers=this.layers,this.add(r);let n=new Mt(Ds,Ns,e,t);n.layers=this.layers,this.add(n);let s=new Mt(Ds,Ns,e,t);s.layers=this.layers,this.add(s);let o=new Mt(Ds,Ns,e,t);o.layers=this.layers,this.add(o);let a=new Mt(Ds,Ns,e,t);a.layers=this.layers,this.add(a);let l=new Mt(Ds,Ns,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,r,n,s,o,a]=t;for(let l of t)this.remove(l);if(e===Xt)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),n.up.set(0,0,-1),n.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),a.up.set(0,1,0),a.lookAt(0,0,-1);else if(e===sr)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),n.up.set(0,0,1),n.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),a.up.set(0,-1,0),a.lookAt(0,0,-1);else throw Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){if(this.parent===null)this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:r}=this;if(this.coordinateSystem!==e.coordinateSystem)this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem();let[n,s,o,a,l,c]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),u=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let x=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let M=!1;if(e.isWebGLRenderer===!0)M=e.state.buffers.depth.getReversed();else M=e.reversedDepthBuffer;if(e.setRenderTarget(i,0,r),M&&e.autoClear===!1)e.clearDepth();if(e.render(t,n),e.setRenderTarget(i,1,r),M&&e.autoClear===!1)e.clearDepth();if(e.render(t,s),e.setRenderTarget(i,2,r),M&&e.autoClear===!1)e.clearDepth();if(e.render(t,o),e.setRenderTarget(i,3,r),M&&e.autoClear===!1)e.clearDepth();if(e.render(t,a),e.setRenderTarget(i,4,r),M&&e.autoClear===!1)e.clearDepth();if(e.render(t,l),i.texture.mipmapsAutoUpdate=x,e.setRenderTarget(i,5,r),M&&e.autoClear===!1)e.clearDepth();e.render(t,c),e.setRenderTarget(h,d,u),e.xr.enabled=p,i.texture.needsPMREMUpdate=!0}}class Cl extends Mt{constructor(e=[]){super();this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}}class na{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){if(this._document=e,e.hidden!==void 0)this._pageVisibilityHandler=f0.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1)}disconnect(){if(this._pageVisibilityHandler!==null)this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null;this._document=null}getDelta(){return this._delta/1000}getElapsed(){return this._elapsed/1000}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){if(this._pageVisibilityHandler!==null&&this._document.hidden===!0)this._delta=0;else this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta;return this}}function f0(){if(this._document.hidden===!1)this.reset()}var zc="\\[\\]\\.:\\/",p0=new RegExp("["+zc+"]","g"),Gc="[^"+zc+"]",m0="[^"+zc.replace("\\.","")+"]",g0=/((?:WC+[\/:])*)/.source.replace("WC",Gc),x0=/(WCOD+)?/.source.replace("WCOD",m0),_0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Gc),v0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Gc),y0=new RegExp("^"+g0+x0+_0+v0+"$"),M0=["material","materials","bones","map"];class Zu{constructor(e,t,i){let r=i||rt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,r=this._bindings[i];if(r!==void 0)r.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,n=i.length;r!==n;++r)i[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}}class rt{constructor(e,t,i){this.path=t,this.parsedPath=i||rt.parseTrackName(t),this.node=rt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){if(!(e&&e.isAnimationObjectGroup))return new rt(e,t,i);else return new rt.Composite(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(p0,"")}static parseTrackName(e){let t=y0.exec(e);if(t===null)throw Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=i.nodeName&&i.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let n=i.nodeName.substring(r+1);if(M0.indexOf(n)!==-1)i.nodeName=i.nodeName.substring(0,r),i.objectName=n}if(i.propertyName===null||i.propertyName.length===0)throw Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(n){for(let s=0;s<n.length;s++){let o=n[s];if(o.name===t||o.uuid===t)return o;let a=i(o.children);if(a)return a}return null},r=i(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let r=0,n=i.length;r!==n;++r)e[t++]=i[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let r=0,n=i.length;r!==n;++r)i[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let r=0,n=i.length;r!==n;++r)i[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let r=0,n=i.length;r!==n;++r)i[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,{objectName:i,propertyName:r,propertyIndex:n}=t;if(!e)e=rt.findNode(this.rootNode,t.nodeName),this.node=e;if(this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){le("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let l=t.objectIndex;switch(i){case"materials":if(!e.material){ye("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){ye("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){ye("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let c=0;c<e.length;c++)if(e[c].name===l){l=c;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){ye("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){ye("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){ye("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(l!==void 0){if(e[l]===void 0){ye("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let s=e[r];if(s===void 0){let l=t.nodeName;ye("PropertyBinding: Trying to update property for track: "+l+"."+r+" but it wasn't found.",e);return}let o=this.Versioning.None;if(this.targetObject=e,e.isMaterial===!0)o=this.Versioning.NeedsUpdate;else if(e.isObject3D===!0)o=this.Versioning.MatrixWorldNeedsUpdate;let a=this.BindingType.Direct;if(n!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){ye("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){ye("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}if(e.morphTargetDictionary[n]!==void 0)n=e.morphTargetDictionary[n]}a=this.BindingType.ArrayElement,this.resolvedProperty=s,this.propertyIndex=n}else if(s.fromArray!==void 0&&s.toArray!==void 0)a=this.BindingType.HasFromToArray,this.resolvedProperty=s;else if(Array.isArray(s))a=this.BindingType.EntireArray,this.resolvedProperty=s;else this.propertyName=r;this.getValue=this.GetterByBindingType[a],this.setValue=this.SetterByBindingTypeAndVersioning[a][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}rt.Composite=Zu;rt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};rt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};rt.prototype.GetterByBindingType=[rt.prototype._getValue_direct,rt.prototype._getValue_array,rt.prototype._getValue_arrayElement,rt.prototype._getValue_toArray];rt.prototype.SetterByBindingTypeAndVersioning=[[rt.prototype._setValue_direct,rt.prototype._setValue_direct_setNeedsUpdate,rt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[rt.prototype._setValue_array,rt.prototype._setValue_array_setNeedsUpdate,rt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[rt.prototype._setValue_arrayElement,rt.prototype._setValue_arrayElement_setNeedsUpdate,rt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[rt.prototype._setValue_fromArray,rt.prototype._setValue_fromArray_setNeedsUpdate,rt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var M3=new Float32Array(1);var Ju=new Ue;class Pl{constructor(e,t,i=0,r=1/0){this.ray=new ar(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new Br,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){if(t.isPerspectiveCamera)this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,0.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t;else if(t.isOrthographicCamera)this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t;else ye("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Ju.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Ju),this}intersectObject(e,t=!0,i=[]){return Vc(e,this,i,t),i.sort(Ku),i}intersectObjects(e,t=!0,i=[]){for(let r=0,n=e.length;r<n;r++)Vc(e[r],this,i,t);return i.sort(Ku),i}}function Ku(e,t){return e.distance-t.distance}function Vc(e,t,i,r){let n=!0;if(e.layers.test(t.layers)){if(e.raycast(t,i)===!1)n=!1}if(n===!0&&r===!0){let s=e.children;for(let o=0,a=s.length;o<a;o++)Vc(s[o],t,i,!0)}}class Il{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,le("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=performance.now();e=(t-this.oldTime)/1000,this.oldTime=t,this.elapsedTime+=e}return e}}class Qu{static{this.prototype.isMatrix2=!0}constructor(e,t,i,r){if(this.elements=[1,0,0,1],e!==void 0)this.set(e,t,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,r){let n=this.elements;return n[0]=e,n[2]=t,n[1]=i,n[3]=r,this}}function kc(e,t,i,r){let n=E0(r);switch(i){case Ea:return e*t;case Qn:return e*t/n.components*n.byteLength;case an:return e*t/n.components*n.byteLength;case wi:return e*t*2/n.components*n.byteLength;case $n:return e*t*2/n.components*n.byteLength;case wa:return e*t*3/n.components*n.byteLength;case Wt:return e*t*4/n.components*n.byteLength;case jn:return e*t*4/n.components*n.byteLength;case es:case ts:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case is:case rs:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case to:case ro:return Math.max(e,16)*Math.max(t,8)/4;case eo:case io:return Math.max(e,8)*Math.max(t,8)/2;case no:case so:case ao:case lo:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case oo:case ln:case co:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case ho:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case uo:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case fo:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case po:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case mo:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case go:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case xo:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case _o:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case vo:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case yo:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case Mo:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case So:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case bo:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case To:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case Eo:case wo:case Ao:return Math.ceil(e/4)*Math.ceil(t/4)*16;case Ro:case Co:return Math.ceil(e/4)*Math.ceil(t/4)*8;case cn:case Po:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw Error(`Unable to determine texture byte length for ${i} format.`)}function E0(e){switch(e){case Tt:case Ma:return{byteLength:1,components:1};case _r:case Sa:case xt:return{byteLength:2,components:1};case Jn:case Kn:return{byteLength:2,components:4};case Lt:case Zn:case Et:return{byteLength:4,components:1};case ba:case Ta:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}if(typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Hs}}));if(typeof window<"u")if(window.__THREE__)le("WARNING: Multiple instances of Three.js being imported.");else window.__THREE__=Hs;function Ll(){let e=null,t=!1,i=null,r=null;function n(s,o){r=e.requestAnimationFrame(n),i(s,o)}return{start:function(){if(t===!0)return;if(i===null)return;if(e===null)return;r=e.requestAnimationFrame(n),t=!0},stop:function(){if(e!==null)e.cancelAnimationFrame(r);t=!1},setAnimationLoop:function(s){i=s},setContext:function(s){e=s}}}function $u(e){let t=new WeakMap;function i(a,l){let{array:c,usage:h}=a,d=c.byteLength,u=e.createBuffer();e.bindBuffer(l,u),e.bufferData(l,c,h),a.onUploadCallback();let p;if(c instanceof Float32Array)p=e.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=e.HALF_FLOAT;else if(c instanceof Uint16Array)if(a.isFloat16BufferAttribute)p=e.HALF_FLOAT;else p=e.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=e.SHORT;else if(c instanceof Uint32Array)p=e.UNSIGNED_INT;else if(c instanceof Int32Array)p=e.INT;else if(c instanceof Int8Array)p=e.BYTE;else if(c instanceof Uint8Array)p=e.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=e.UNSIGNED_BYTE;else throw Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function r(a,l,c){let{array:h,updateRanges:d}=l;if(e.bindBuffer(c,a),d.length===0)e.bufferSubData(c,0,h);else{d.sort((p,x)=>p.start-x.start);let u=0;for(let p=1;p<d.length;p++){let x=d[u],M=d[p];if(M.start<=x.start+x.count+1)x.count=Math.max(x.count,M.start+M.count-x.start);else++u,d[u]=M}d.length=u+1;for(let p=0,x=d.length;p<x;p++){let M=d[p];e.bufferSubData(c,M.start*h.BYTES_PER_ELEMENT,h,M.start,M.count)}l.clearUpdateRanges()}l.onUploadCallback()}function n(a){if(a.isInterleavedBufferAttribute)a=a.data;return t.get(a)}function s(a){if(a.isInterleavedBufferAttribute)a=a.data;let l=t.get(a);if(l)e.deleteBuffer(l.buffer),t.delete(a)}function o(a,l){if(a.isInterleavedBufferAttribute)a=a.data;if(a.isGLBufferAttribute){let h=t.get(a);if(!h||h.version<a.version)t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,i(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(c.buffer,a,l),c.version=a.version}}return{get:n,remove:s,update:o}}var ju=`
#ifdef USE_ALPHAHASH

	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;

#endif
`;var ef=`
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
`;var tf=`
#ifdef USE_ALPHAMAP

	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;

#endif
`;var rf=`
#ifdef USE_ALPHAMAP

	uniform sampler2D alphaMap;

#endif
`;var nf=`
#ifdef USE_ALPHATEST

	#ifdef ALPHA_TO_COVERAGE

	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;

	#else

	if ( diffuseColor.a < alphaTest ) discard;

	#endif

#endif
`;var sf=`
#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif
`;var of=`
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
`;var af=`
#ifdef USE_AOMAP

	uniform sampler2D aoMap;
	uniform float aoMapIntensity;

#endif
`;var lf=`
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
`;var cf=`
#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif
`;var hf=`
vec3 transformed = vec3( position );

#ifdef USE_ALPHAHASH

	vPosition = vec3( position );

#endif
`;var uf=`
vec3 objectNormal = vec3( normal );

#ifdef USE_TANGENT

	vec3 objectTangent = vec3( tangent.xyz );

#endif
`;var ff=`

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

`;var df=`

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

`;var pf=`
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
`;var mf=`
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
`;var gf=`
#if NUM_CLIPPING_PLANES > 0

	varying vec3 vClipPosition;

	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];

#endif
`;var xf=`
#if NUM_CLIPPING_PLANES > 0

	varying vec3 vClipPosition;

#endif
`;var _f=`
#if NUM_CLIPPING_PLANES > 0

	vClipPosition = - mvPosition.xyz;

#endif
`;var vf=`
#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )

	diffuseColor *= vColor;

#endif
`;var yf=`
#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )

	varying vec4 vColor;

#endif
`;var Mf=`
#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )

	varying vec4 vColor;

#endif
`;var Sf=`
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
`;var bf=`
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
`;var Tf=`

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
`;var Ef=`
#ifdef USE_DISPLACEMENTMAP

	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;

#endif
`;var wf=`
#ifdef USE_DISPLACEMENTMAP

	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );

#endif
`;var Af=`
#ifdef USE_EMISSIVEMAP

	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );

	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE

		// use inline sRGB decode until browsers properly support SRGB8_ALPHA8 with video textures (#26516)

		emissiveColor = sRGBTransferEOTF( emissiveColor );

	#endif

	totalEmissiveRadiance *= emissiveColor.rgb;

#endif
`;var Rf=`
#ifdef USE_EMISSIVEMAP

	uniform sampler2D emissiveMap;

#endif
`;var Cf=`
gl_FragColor = linearToOutputTexel( gl_FragColor );
`;var Pf=`

vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}

vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}

vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}

`;var If=`
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
`;var Lf=`
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
`;var Df=`
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
`;var Nf=`
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
`;var Uf=`
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
`;var Ff=`
#ifdef USE_FOG

	vFogDepth = - mvPosition.z;

#endif
`;var Of=`
#ifdef USE_FOG

	varying float vFogDepth;

#endif
`;var Bf=`
#ifdef USE_FOG

	#ifdef FOG_EXP2

		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );

	#else

		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );

	#endif

	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );

#endif
`;var zf=`
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
`;var Gf=`

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
`;var Vf=`
#ifdef USE_LIGHTMAP

	uniform sampler2D lightMap;
	uniform float lightMapIntensity;

#endif
`;var kf=`
LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;
`;var Hf=`
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
`;var Wf=`
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
`;var Xf=`
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
`;var qf=`
ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;
`;var Yf=`
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
`;var Zf=`
BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;
`;var Jf=`
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
`;var Kf=`
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
`;var Qf=`

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
`;var $f=`
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
`;var jf=`
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
`;var ed=`
#if defined( RE_IndirectDiffuse )

	#if defined( LAMBERT ) || defined( PHONG )

		irradiance += iblIrradiance;

	#endif

	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );

#endif

#if defined( RE_IndirectSpecular )

	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );

#endif
`;var td=`
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
`;var id=`
#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )

	// Doing a strict comparison with == 1.0 can cause noise artifacts
	// on some platforms. See issue #17623.
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;

#endif
`;var rd=`
#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )

	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;

#endif
`;var nd=`
#ifdef USE_LOGARITHMIC_DEPTH_BUFFER

	varying float vFragDepth;
	varying float vIsPerspective;

#endif
`;var sd=`
#ifdef USE_LOGARITHMIC_DEPTH_BUFFER

	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );

#endif
`;var od=`
#ifdef USE_MAP

	vec4 sampledDiffuseColor = texture2D( map, vMapUv );

	#ifdef DECODE_VIDEO_TEXTURE

		// use inline sRGB decode until browsers properly support SRGB8_ALPHA8 with video textures (#26516)

		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );

	#endif

	diffuseColor *= sampledDiffuseColor;

#endif
`;var ad=`
#ifdef USE_MAP

	uniform sampler2D map;

#endif
`;var ld=`
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
`;var cd=`
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
`;var hd=`
float metalnessFactor = metalness;

#ifdef USE_METALNESSMAP

	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );

	// reads channel B, compatible with a combined OcclusionRoughnessMetallic (RGB) texture
	metalnessFactor *= texelMetalness.b;

#endif
`;var ud=`
#ifdef USE_METALNESSMAP

	uniform sampler2D metalnessMap;

#endif
`;var fd=`
#ifdef USE_INSTANCING_MORPH

	float morphTargetInfluences[ MORPHTARGETS_COUNT ];

	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;

	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {

		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;

	}
#endif
`;var dd=`
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
`;var pd=`
#ifdef USE_MORPHNORMALS

	// morphTargetBaseInfluence is set based on BufferGeometry.morphTargetsRelative value:
	// When morphTargetsRelative is false, this is set to 1 - sum(influences); this results in normal = sum((target - base) * influence)
	// When morphTargetsRelative is true, this is set to 1; as a result, all morph targets are simply added to the base after weighting
	objectNormal *= morphTargetBaseInfluence;

	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {

		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];

	}

#endif
`;var md=`
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
`;var gd=`
#ifdef USE_MORPHTARGETS

	// morphTargetBaseInfluence is set based on BufferGeometry.morphTargetsRelative value:
	// When morphTargetsRelative is false, this is set to 1 - sum(influences); this results in position = sum((target - base) * influence)
	// When morphTargetsRelative is true, this is set to 1; as a result, all morph targets are simply added to the base after weighting
	transformed *= morphTargetBaseInfluence;

	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {

		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];

	}

#endif
`;var xd=`
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

`;var _d=`

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
`;var vd=`
#ifndef FLAT_SHADED

	varying vec3 vNormal;

	#ifdef USE_TANGENT

		varying vec3 vTangent;
		varying vec3 vBitangent;

	#endif

#endif
`;var yd=`
#ifndef FLAT_SHADED

	varying vec3 vNormal;

	#ifdef USE_TANGENT

		varying vec3 vTangent;
		varying vec3 vBitangent;

	#endif

#endif
`;var Md=`
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
`;var Sd=`
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
`;var bd=`
#ifdef USE_CLEARCOAT

	vec3 clearcoatNormal = nonPerturbedNormal;

#endif
`;var Td=`
#ifdef USE_CLEARCOAT_NORMALMAP

	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;

	clearcoatNormal = normalize( tbn2 * clearcoatMapN );

#endif
`;var Ed=`

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
`;var wd=`

#ifdef USE_IRIDESCENCEMAP

	uniform sampler2D iridescenceMap;

#endif

#ifdef USE_IRIDESCENCE_THICKNESSMAP

	uniform sampler2D iridescenceThicknessMap;

#endif
`;var Ad=`
#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif

#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif

gl_FragColor = vec4( outgoingLight, diffuseColor.a );
`;var Rd=`
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
`;var Cd=`
#ifdef PREMULTIPLIED_ALPHA

	gl_FragColor.rgb *= gl_FragColor.a;

#endif
`;var Pd=`
vec4 mvPosition = vec4( transformed, 1.0 );

#ifdef USE_BATCHING

	mvPosition = batchingMatrix * mvPosition;

#endif

#ifdef USE_INSTANCING

	mvPosition = instanceMatrix * mvPosition;

#endif

mvPosition = modelViewMatrix * mvPosition;

gl_Position = projectionMatrix * mvPosition;
`;var Id=`
#ifdef DITHERING

	gl_FragColor.rgb = dithering( gl_FragColor.rgb );

#endif
`;var Ld=`
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
`;var Dd=`
float roughnessFactor = roughness;

#ifdef USE_ROUGHNESSMAP

	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );

	// reads channel G, compatible with a combined OcclusionRoughnessMetallic (RGB) texture
	roughnessFactor *= texelRoughness.g;

#endif
`;var Nd=`
#ifdef USE_ROUGHNESSMAP

	uniform sampler2D roughnessMap;

#endif
`;var Ud=`
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
`;var Fd=`

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
`;var Od=`

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


`;var Bd=`
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
`;var zd=`
#ifdef USE_SKINNING

	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );

#endif
`;var Gd=`
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
`;var Vd=`
#ifdef USE_SKINNING

	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );

	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;

	transformed = ( bindMatrixInverse * skinned ).xyz;

#endif
`;var kd=`
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
`;var Hd=`
float specularStrength;

#ifdef USE_SPECULARMAP

	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;

#else

	specularStrength = 1.0;

#endif
`;var Wd=`
#ifdef USE_SPECULARMAP

	uniform sampler2D specularMap;

#endif
`;var Xd=`
#if defined( TONE_MAPPING )

	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );

#endif
`;var qd=`
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
`;var Yd=`
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
`;var Zd=`
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
`;var Jd=`
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
`;var Kd=`
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
`;var Qd=`
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
`;var $d=`
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
`;var jd=`
varying vec2 vUv;
uniform mat3 uvTransform;

void main() {

	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;

	gl_Position = vec4( position.xy, 1.0, 1.0 );

}
`,ep=`
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
`;var tp=`
varying vec3 vWorldDirection;

#include <common>

void main() {

	vWorldDirection = transformDirection( position, modelMatrix );

	#include <begin_vertex>
	#include <project_vertex>

	gl_Position.z = gl_Position.w; // set z to camera.far

}
`,ip=`

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
`;var rp=`
varying vec3 vWorldDirection;

#include <common>

void main() {

	vWorldDirection = transformDirection( position, modelMatrix );

	#include <begin_vertex>
	#include <project_vertex>

	gl_Position.z = gl_Position.w; // set z to camera.far

}
`,np=`
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
`;var sp=`
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
`,op=`
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
`;var ap=`
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
`,lp=`
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
`;var cp=`
varying vec3 vWorldDirection;

#include <common>

void main() {

	vWorldDirection = transformDirection( position, modelMatrix );

	#include <begin_vertex>
	#include <project_vertex>

}
`,hp=`
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
`;var up=`
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
`,fp=`
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
`;var dp=`
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
`,pp=`
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
`;var mp=`
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
`,gp=`
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
`;var xp=`
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
`,_p=`
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
`;var vp=`
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
`,yp=`
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
`;var Mp=`
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
`,Sp=`
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
`;var bp=`
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
`,Tp=`
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
`;var Ep=`
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
`,wp=`
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
`;var Ap=`
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
`,Rp=`
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
`;var Cp=`
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
`,Pp=`
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
`;var Ip=`
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
`,Lp=`
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
`;var We={alphahash_fragment:ju,alphahash_pars_fragment:ef,alphamap_fragment:tf,alphamap_pars_fragment:rf,alphatest_fragment:nf,alphatest_pars_fragment:sf,aomap_fragment:of,aomap_pars_fragment:af,batching_pars_vertex:lf,batching_vertex:cf,begin_vertex:hf,beginnormal_vertex:uf,bsdfs:ff,iridescence_fragment:df,bumpmap_pars_fragment:pf,clipping_planes_fragment:mf,clipping_planes_pars_fragment:gf,clipping_planes_pars_vertex:xf,clipping_planes_vertex:_f,color_fragment:vf,color_pars_fragment:yf,color_pars_vertex:Mf,color_vertex:Sf,common:bf,defaultnormal_vertex:Tf,displacementmap_pars_vertex:Ef,displacementmap_vertex:wf,emissivemap_fragment:Af,emissivemap_pars_fragment:Rf,colorspace_fragment:Cf,colorspace_pars_fragment:Pf,envmap_fragment:If,envmap_common_pars_fragment:Lf,envmap_pars_fragment:Df,envmap_pars_vertex:Nf,envmap_physical_pars_fragment:Xf,envmap_vertex:Uf,fog_vertex:Ff,fog_pars_vertex:Of,fog_fragment:Bf,fog_pars_fragment:zf,gradientmap_pars_fragment:Gf,lightmap_pars_fragment:Vf,lights_lambert_fragment:kf,lights_lambert_pars_fragment:Hf,lights_pars_begin:Wf,lights_toon_fragment:qf,lights_toon_pars_fragment:Yf,lights_phong_fragment:Zf,lights_phong_pars_fragment:Jf,lights_physical_fragment:Kf,lights_physical_pars_fragment:Qf,lights_fragment_begin:$f,lights_fragment_maps:jf,lights_fragment_end:ed,lightprobes_pars_fragment:td,logdepthbuf_fragment:id,logdepthbuf_pars_fragment:rd,logdepthbuf_pars_vertex:nd,logdepthbuf_vertex:sd,map_fragment:od,map_pars_fragment:ad,map_particle_fragment:ld,map_particle_pars_fragment:cd,metalnessmap_fragment:hd,metalnessmap_pars_fragment:ud,morphinstance_vertex:fd,morphcolor_vertex:dd,morphnormal_vertex:pd,morphtarget_pars_vertex:md,morphtarget_vertex:gd,normal_fragment_begin:xd,normal_fragment_maps:_d,normal_pars_fragment:vd,normal_pars_vertex:yd,normal_vertex:Md,normalmap_pars_fragment:Sd,clearcoat_normal_fragment_begin:bd,clearcoat_normal_fragment_maps:Td,clearcoat_pars_fragment:Ed,iridescence_pars_fragment:wd,opaque_fragment:Ad,packing:Rd,premultiplied_alpha_fragment:Cd,project_vertex:Pd,dithering_fragment:Id,dithering_pars_fragment:Ld,roughnessmap_fragment:Dd,roughnessmap_pars_fragment:Nd,shadowmap_pars_fragment:Ud,shadowmap_pars_vertex:Fd,shadowmap_vertex:Od,shadowmask_pars_fragment:Bd,skinbase_vertex:zd,skinning_pars_vertex:Gd,skinning_vertex:Vd,skinnormal_vertex:kd,specularmap_fragment:Hd,specularmap_pars_fragment:Wd,tonemapping_fragment:Xd,tonemapping_pars_fragment:qd,transmission_fragment:Yd,transmission_pars_fragment:Zd,uv_pars_fragment:Jd,uv_pars_vertex:Kd,uv_vertex:Qd,worldpos_vertex:$d,background_vert:jd,background_frag:ep,backgroundCube_vert:tp,backgroundCube_frag:ip,cube_vert:rp,cube_frag:np,depth_vert:sp,depth_frag:op,distance_vert:ap,distance_frag:lp,equirect_vert:cp,equirect_frag:hp,linedashed_vert:up,linedashed_frag:fp,meshbasic_vert:dp,meshbasic_frag:pp,meshlambert_vert:mp,meshlambert_frag:gp,meshmatcap_vert:xp,meshmatcap_frag:_p,meshnormal_vert:vp,meshnormal_frag:yp,meshphong_vert:Mp,meshphong_frag:Sp,meshphysical_vert:bp,meshphysical_frag:Tp,meshtoon_vert:Ep,meshtoon_frag:wp,points_vert:Ap,points_frag:Rp,shadow_vert:Cp,shadow_frag:Pp,sprite_vert:Ip,sprite_frag:Lp};var me={common:{diffuse:{value:new ie(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ie},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ie}},envmap:{envMap:{value:null},envMapRotation:{value:new Ie},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:0.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ie}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ie}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ie},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ie},normalScale:{value:new ee(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ie},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ie}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ie}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ie}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:0.00025},fogNear:{value:1},fogFar:{value:2000},fogColor:{value:new ie(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new ie(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0},uvTransform:{value:new Ie}},sprite:{diffuse:{value:new ie(16777215)},opacity:{value:1},center:{value:new ee(0.5,0.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ie},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0}}};var Li={basic:{uniforms:ci([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.fog]),vertexShader:We.meshbasic_vert,fragmentShader:We.meshbasic_frag},lambert:{uniforms:ci([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new ie(0)},envMapIntensity:{value:1}}]),vertexShader:We.meshlambert_vert,fragmentShader:We.meshlambert_frag},phong:{uniforms:ci([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new ie(0)},specular:{value:new ie(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:We.meshphong_vert,fragmentShader:We.meshphong_frag},standard:{uniforms:ci([me.common,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.roughnessmap,me.metalnessmap,me.fog,me.lights,{emissive:{value:new ie(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag},toon:{uniforms:ci([me.common,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.gradientmap,me.fog,me.lights,{emissive:{value:new ie(0)}}]),vertexShader:We.meshtoon_vert,fragmentShader:We.meshtoon_frag},matcap:{uniforms:ci([me.common,me.bumpmap,me.normalmap,me.displacementmap,me.fog,{matcap:{value:null}}]),vertexShader:We.meshmatcap_vert,fragmentShader:We.meshmatcap_frag},points:{uniforms:ci([me.points,me.fog]),vertexShader:We.points_vert,fragmentShader:We.points_frag},dashed:{uniforms:ci([me.common,me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:We.linedashed_vert,fragmentShader:We.linedashed_frag},depth:{uniforms:ci([me.common,me.displacementmap]),vertexShader:We.depth_vert,fragmentShader:We.depth_frag},normal:{uniforms:ci([me.common,me.bumpmap,me.normalmap,me.displacementmap,{opacity:{value:1}}]),vertexShader:We.meshnormal_vert,fragmentShader:We.meshnormal_frag},sprite:{uniforms:ci([me.sprite,me.fog]),vertexShader:We.sprite_vert,fragmentShader:We.sprite_frag},background:{uniforms:{uvTransform:{value:new Ie},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:We.background_vert,fragmentShader:We.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ie}},vertexShader:We.backgroundCube_vert,fragmentShader:We.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:We.cube_vert,fragmentShader:We.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:We.equirect_vert,fragmentShader:We.equirect_frag},distance:{uniforms:ci([me.common,me.displacementmap,{referencePosition:{value:new A},nearDistance:{value:1},farDistance:{value:1000}}]),vertexShader:We.distance_vert,fragmentShader:We.distance_frag},shadow:{uniforms:ci([me.lights,me.fog,{color:{value:new ie(0)},opacity:{value:1}}]),vertexShader:We.shadow_vert,fragmentShader:We.shadow_frag}};Li.physical={uniforms:ci([Li.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ie},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ie},clearcoatNormalScale:{value:new ee(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ie},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Ie},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ie},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ie},sheen:{value:0},sheenColor:{value:new ie(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ie},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ie},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ie},transmissionSamplerSize:{value:new ee},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ie},attenuationDistance:{value:0},attenuationColor:{value:new ie(0)},specularColor:{value:new ie(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ie},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ie},anisotropyVector:{value:new ee},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ie}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag};var Dl={r:0,b:0,g:0},H0=new Ue,Dp=new Ie;Dp.set(-1,0,0,0,1,0,0,0,1);function Np(e,t,i,r,n,s){let o=new ie(0),a=n===!0?0:1,l,c,h=null,d=0,u=null;function p(b){let E=b.isScene===!0?b.background:null;if(E&&E.isTexture){let S=b.backgroundBlurriness>0;E=t.get(E,S)}return E}function x(b){let E=!1,S=p(b);if(S===null)f(o,a);else if(S&&S.isColor)f(S,1),E=!0;let w=e.xr.getEnvironmentBlendMode();if(w==="additive")i.buffers.color.setClear(0,0,0,1,s);else if(w==="alpha-blend")i.buffers.color.setClear(0,0,0,0,s);if(e.autoClear||E)i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil)}function M(b,E){let S=p(E);if(S&&S.isCubeTexture){if(c===void 0)c=new we(new di(1,1,1),new _t({name:"BackgroundCubeMaterial",uniforms:Er(Li.backgroundCube.uniforms),vertexShader:Li.backgroundCube.vertexShader,fragmentShader:Li.backgroundCube.fragmentShader,side:dt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,P,g){this.matrixWorld.copyPosition(g.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c);if(c.material.uniforms.envMap.value=S,c.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(H0.makeRotationFromEuler(E.backgroundRotation)).transpose(),S.isRenderTargetTexture===!1)c.material.uniforms.backgroundRotation.value.premultiply(Dp);if(c.material.toneMapped=Ge.getTransfer(S.colorSpace)!==Je,h!==S||d!==S.version||u!==e.toneMapping)c.material.needsUpdate=!0,h=S,d=S.version,u=e.toneMapping;c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null)}else if(S&&S.isTexture){if(l===void 0)l=new we(new vi(2,2),new _t({name:"BackgroundMaterial",uniforms:Er(Li.background.uniforms),vertexShader:Li.background.vertexShader,fragmentShader:Li.background.fragmentShader,side:Ni,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l);if(l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.toneMapped=Ge.getTransfer(S.colorSpace)!==Je,S.matrixAutoUpdate===!0)S.updateMatrix();if(l.material.uniforms.uvTransform.value.copy(S.matrix),h!==S||d!==S.version||u!==e.toneMapping)l.material.needsUpdate=!0,h=S,d=S.version,u=e.toneMapping;l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null)}}function f(b,E){b.getRGB(Dl,xl(e)),i.buffers.color.setClear(Dl.r,Dl.g,Dl.b,E,s)}function m(){if(c!==void 0)c.geometry.dispose(),c.material.dispose(),c=void 0;if(l!==void 0)l.geometry.dispose(),l.material.dispose(),l=void 0}return{getClearColor:function(){return o},setClearColor:function(b,E=1){o.set(b),a=E,f(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(b){a=b,f(o,a)},render:x,addToRenderList:M,dispose:m}}function Up(e,t){let i=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},n=u(null),s=n,o=!1;function a(L,z,J,R,X){let K=!1,B=d(L,R,J,z);if(s!==B)s=B,c(s.object);if(K=p(L,R,J,X),K)x(L,R,J,X);if(X!==null)t.update(X,e.ELEMENT_ARRAY_BUFFER);if(K||o){if(o=!1,S(L,z,J,R),X!==null)e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(X).buffer)}}function l(){return e.createVertexArray()}function c(L){return e.bindVertexArray(L)}function h(L){return e.deleteVertexArray(L)}function d(L,z,J,R){let X=R.wireframe===!0,K=r[z.id];if(K===void 0)K={},r[z.id]=K;let B=L.isInstancedMesh===!0?L.id:0,ce=K[B];if(ce===void 0)ce={},K[B]=ce;let W=ce[J.id];if(W===void 0)W={},ce[J.id]=W;let j=W[X];if(j===void 0)j=u(l()),W[X]=j;return j}function u(L){let z=[],J=[],R=[];for(let X=0;X<i;X++)z[X]=0,J[X]=0,R[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:J,attributeDivisors:R,object:L,attributes:{},index:null}}function p(L,z,J,R){let X=s.attributes,K=z.attributes,B=0,ce=J.getAttributes();for(let W in ce)if(ce[W].location>=0){let se=X[W],Re=K[W];if(Re===void 0){if(W==="instanceMatrix"&&L.instanceMatrix)Re=L.instanceMatrix;if(W==="instanceColor"&&L.instanceColor)Re=L.instanceColor}if(se===void 0)return!0;if(se.attribute!==Re)return!0;if(Re&&se.data!==Re.data)return!0;B++}if(s.attributesNum!==B)return!0;if(s.index!==R)return!0;return!1}function x(L,z,J,R){let X={},K=z.attributes,B=0,ce=J.getAttributes();for(let W in ce)if(ce[W].location>=0){let se=K[W];if(se===void 0){if(W==="instanceMatrix"&&L.instanceMatrix)se=L.instanceMatrix;if(W==="instanceColor"&&L.instanceColor)se=L.instanceColor}let Re={};if(Re.attribute=se,se&&se.data)Re.data=se.data;X[W]=Re,B++}s.attributes=X,s.attributesNum=B,s.index=R}function M(){let L=s.newAttributes;for(let z=0,J=L.length;z<J;z++)L[z]=0}function f(L){m(L,0)}function m(L,z){let J=s.newAttributes,R=s.enabledAttributes,X=s.attributeDivisors;if(J[L]=1,R[L]===0)e.enableVertexAttribArray(L),R[L]=1;if(X[L]!==z)e.vertexAttribDivisor(L,z),X[L]=z}function b(){let L=s.newAttributes,z=s.enabledAttributes;for(let J=0,R=z.length;J<R;J++)if(z[J]!==L[J])e.disableVertexAttribArray(J),z[J]=0}function E(L,z,J,R,X,K,B){if(B===!0)e.vertexAttribIPointer(L,z,J,X,K);else e.vertexAttribPointer(L,z,J,R,X,K)}function S(L,z,J,R){M();let X=R.attributes,K=J.getAttributes(),B=z.defaultAttributeValues;for(let ce in K){let W=K[ce];if(W.location>=0){let j=X[ce];if(j===void 0){if(ce==="instanceMatrix"&&L.instanceMatrix)j=L.instanceMatrix;if(ce==="instanceColor"&&L.instanceColor)j=L.instanceColor}if(j!==void 0){let se=j.normalized,Re=j.itemSize,Z=t.get(j);if(Z===void 0)continue;let{buffer:ne,type:Te,bytesPerElement:Fe}=Z,Oe=Te===e.INT||Te===e.UNSIGNED_INT||j.gpuType===Zn;if(j.isInterleavedBufferAttribute){let Ee=j.data,nt=Ee.isInterleavedBuffer===!0?Ee.stride:Ee.itemSize,Ze=j.offset;if(Ee.isInstancedInterleavedBuffer||Ee.isInstancedBufferAttribute){for(let Xe=0;Xe<W.locationSize;Xe++)m(W.location+Xe,Ee.meshPerAttribute);if(L.isInstancedMesh!==!0&&R._maxInstanceCount===void 0)R._maxInstanceCount=Ee.meshPerAttribute*Ee.count}else for(let Xe=0;Xe<W.locationSize;Xe++)f(W.location+Xe);e.bindBuffer(e.ARRAY_BUFFER,ne);for(let Xe=0;Xe<W.locationSize;Xe++)E(W.location+Xe,Re/W.locationSize,Te,se,nt*Fe,(Ze+Re/W.locationSize*Xe)*Fe,Oe)}else{if(j.isInstancedBufferAttribute){for(let Ee=0;Ee<W.locationSize;Ee++)m(W.location+Ee,j.meshPerAttribute);if(L.isInstancedMesh!==!0&&R._maxInstanceCount===void 0)R._maxInstanceCount=j.meshPerAttribute*j.count}else for(let Ee=0;Ee<W.locationSize;Ee++)f(W.location+Ee);e.bindBuffer(e.ARRAY_BUFFER,ne);for(let Ee=0;Ee<W.locationSize;Ee++)E(W.location+Ee,Re/W.locationSize,Te,se,Re*Fe,Re/W.locationSize*Ee*Fe,Oe)}}else if(B!==void 0){let se=B[ce];if(se!==void 0)switch(se.length){case 2:e.vertexAttrib2fv(W.location,se);break;case 3:e.vertexAttrib3fv(W.location,se);break;case 4:e.vertexAttrib4fv(W.location,se);break;default:e.vertexAttrib1fv(W.location,se)}}}}b()}function w(){D();for(let L in r){let z=r[L];for(let J in z){let R=z[J];for(let X in R){let K=R[X];for(let B in K)h(K[B].object),delete K[B];delete R[X]}}delete r[L]}}function P(L){if(r[L.id]===void 0)return;let z=r[L.id];for(let J in z){let R=z[J];for(let X in R){let K=R[X];for(let B in K)h(K[B].object),delete K[B];delete R[X]}}delete r[L.id]}function g(L){for(let z in r){let J=r[z];for(let R in J){let X=J[R];if(X[L.id]===void 0)continue;let K=X[L.id];for(let B in K)h(K[B].object),delete K[B];delete X[L.id]}}}function y(L){for(let z in r){let J=r[z],R=L.isInstancedMesh===!0?L.id:0,X=J[R];if(X===void 0)continue;for(let K in X){let B=X[K];for(let ce in B)h(B[ce].object),delete B[ce];delete X[K]}if(delete J[R],Object.keys(J).length===0)delete r[z]}}function D(){if(V(),o=!0,s===n)return;s=n,c(s.object)}function V(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:a,reset:D,resetDefaultState:V,dispose:w,releaseStatesOfGeometry:P,releaseStatesOfObject:y,releaseStatesOfProgram:g,initAttributes:M,enableAttribute:f,disableUnusedAttributes:b}}function Fp(e,t,i){let r;function n(l){r=l}function s(l,c){e.drawArrays(r,l,c),i.update(c,r,1)}function o(l,c,h){if(h===0)return;e.drawArraysInstanced(r,l,c,h),i.update(c,r,h)}function a(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,l,0,c,0,h);let u=0;for(let p=0;p<h;p++)u+=c[p];i.update(u,r,1)}this.setMode=n,this.render=s,this.renderInstances=o,this.renderMultiDraw=a}function Op(e,t,i,r){let n;function s(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){let g=t.get("EXT_texture_filter_anisotropic");n=e.getParameter(g.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function o(g){if(g!==Wt&&r.convert(g)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))return!1;return!0}function a(g){let y=g===xt&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));if(g!==Tt&&g!==Et&&!y&&r.convert(g)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))return!1;return!0}function l(g){if(g==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";g="mediump"}if(g==="mediump"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0)return"mediump"}return"lowp"}let c=i.precision!==void 0?i.precision:"highp",h=l(c);if(h!==c)le("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h;let d=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),u=i.logarithmicDepthBuffer===!0&&d===!1;if(i.reversedDepthBuffer===!0&&d===!1)le("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");if(i.logarithmicDepthBuffer===!0&&d===!0)le("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),x=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=e.getParameter(e.MAX_TEXTURE_SIZE),f=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),m=e.getParameter(e.MAX_VERTEX_ATTRIBS),b=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),E=e.getParameter(e.MAX_VARYING_VECTORS),S=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),w=e.getParameter(e.MAX_SAMPLES),P=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:x,maxTextureSize:M,maxCubemapSize:f,maxAttributes:m,maxVertexUniforms:b,maxVaryings:E,maxFragmentUniforms:S,maxSamples:w,samples:P}}function Bp(e){let t=this,i=null,r=0,n=!1,s=!1,o=new Ci,a=new Ie,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let p=d.length!==0||u||r!==0||n;return n=u,r=d.length,p},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,u){i=h(d,u,0)},this.setState=function(d,u,p){let{clippingPlanes:x,clipIntersection:M,clipShadows:f}=d,m=e.get(d);if(!n||x===null||x.length===0||s&&!f)if(s)h(null);else c();else{let b=s?0:r,E=b*4,S=m.clippingState||null;l.value=S,S=h(x,u,E,p);for(let w=0;w!==E;++w)S[w]=i[w];m.clippingState=S,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=b}};function c(){if(l.value!==i)l.value=i,l.needsUpdate=r>0;t.numPlanes=r,t.numIntersection=0}function h(d,u,p,x){let M=d!==null?d.length:0,f=null;if(M!==0){if(f=l.value,x!==!0||f===null){let m=p+M*4,b=u.matrixWorldInverse;if(a.getNormalMatrix(b),f===null||f.length<m)f=new Float32Array(m);for(let E=0,S=p;E!==M;++E,S+=4)o.copy(d[E]).applyMatrix4(b,a),o.normal.toArray(f,S),f[S+3]=o.constant}l.value=f,l.needsUpdate=!0}return t.numPlanes=M,t.numIntersection=0,f}}class Jr extends pt{constructor(e=1,t={}){super(e,e,t);this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new kr(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new di(5,5,5),n=new _t({name:"CubemapFromEquirect",uniforms:Er(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:dt,blending:Ui});n.uniforms.tEquirect.value=t;let s=new we(r,n),o=t.minFilter;if(t.minFilter===ui)t.minFilter=gt;return new Ln(1,10,this).update(e,s),t.minFilter=o,s.geometry.dispose(),s.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){let n=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,i,r);e.setRenderTarget(n)}}var zp=256,W0=3,X0=20,Hp=256,Wp=16,q0=3,Y0=new A,Z0=new ie;class Kr{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Ln(1,10,null),this._boxMesh=new we(new di(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,i=0.1,r=100,n={}){let{size:s=256,position:o=Y0}=n,a=this._renderer;this._setSize(s);let l=this._allocateTarget(),c=this._getSourceTarget(!0);if(t>0)c.texture.mipmapsAutoUpdate=!1;let{autoClear:h,autoClearColor:d,autoClearDepth:u,autoClearStencil:p}=a,x=e.background;if(a.autoClear=!0,a.autoClearColor=!0,a.autoClearDepth=!0,a.autoClearStencil=!0,x===null)e.background=a.getClearColor(Z0);let M=new Ln(i,r,c);if(M.position.copy(o),M.update(a,e),a.autoClear=h,a.autoClearColor=d,a.autoClearDepth=u,a.autoClearStencil=p,e.background=x,t>0)c.texture.mipmapsAutoUpdate=!0,this._blur(l,t);return this._applyPMREM(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){if(this._cubemapMaterial===null)this._cubemapMaterial=kp(),this._compileMaterial(this._cubemapMaterial)}compileEquirectangularShader(){if(this._equirectMaterial===null)this._equirectMaterial=Vp(),this._compileMaterial(this._equirectMaterial)}dispose(){if(this._sourceTarget!==null)this._sourceTarget.dispose();if(this._cubemapMaterial!==null)this._cubemapMaterial.dispose();if(this._equirectMaterial!==null)this._equirectMaterial.dispose();if(this._blurMaterial!==null)this._blurMaterial.dispose();if(this._ggxMaterial!==null)this._ggxMaterial.dispose();if(this._integrationMaterial!==null)this._integrationMaterial.dispose();this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(zp,tu(e))}_fromTexture(e,t){if(e.mapping===Fi||e.mapping===xr)this._setSize(e.image.length===0?zp:e.image[0].width||e.image[0].image.width);else this._setSize(e.image.width/4);let i=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(i),i}_allocateTarget(){let e=this._cubeSize,t=Gp(e,!1,!1),i=Math.log2(e)-W0;for(let r=0;r<=i;r++)t.texture.mipmaps.push({width:e>>r,height:e>>r});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,i=this._sourceTarget;if(i===null||i.width!==t||e&&i.depthBuffer===!1){if(i!==null)i.dispose();this._sourceTarget=Gp(t,!0,e)}return this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,i){let r=this._boxMesh,n=this._cubeCamera;r.material=i,n.renderTarget=e,n.activeMipmapLevel=t;let s=e.width>>t;e.viewport.set(0,0,s,s),n.update(this._renderer,r),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;if(e.mapping===Fi||e.mapping===xr){if(this._cubemapMaterial===null)this._cubemapMaterial=kp();t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1}else{if(this._equirectMaterial===null)this._equirectMaterial=Vp();t=this._equirectMaterial}t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){if(this._ggxMaterial===null)this._ggxMaterial=J0(),this._integrationMaterial=K0();let t=this._cubeSize,i=e.texture.mipmaps.length-1,r=this._ggxMaterial.uniforms;r.envMap.value=this._sourceTarget.texture;let n=this._integrationMaterial.uniforms;n.envMap.value=this._sourceTarget.texture,n.sourceLod.value=Math.log2(t/Wp);for(let s=0;s<=i;s++){let o=Kr.lodToRoughness(s,i);if(s>i-q0)n.roughness.value=o,this._renderCube(e,s,this._integrationMaterial);else{let a=o>0?Math.log2(t)+0.5*Math.log2(6/(Hp*Math.pow(o,4)))+0.5:0;r.roughness.value=o,r.lodBias.value=a,this._renderCube(e,s,this._ggxMaterial)}}}_blur(e,t){if(this._blurMaterial===null)this._blurMaterial=Q0();let i=this._blurMaterial,r=i.uniforms,n=this._sourceTarget;r.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,r.envMap.value=n.texture,this._renderCube(e,0,i),r.envMap.value=e.texture,this._renderCube(n,0,i)}}function Gp(e,t,i){return new Jr(e,{minFilter:ui,generateMipmaps:t,type:xt,colorSpace:un,depthBuffer:i})}function sa(e,t,i){return new _t({name:e,uniforms:t,vertexShader:We.cube_vert,fragmentShader:i,side:dt,blending:Ui,depthTest:!1,depthWrite:!1})}function J0(){return sa("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Hp}u

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
	`)}function K0(){return sa("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Wp}},`

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
	`)}function Q0(){return sa("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${X0}
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
	`)}function Vp(){return sa("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function kp(){return sa("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Xp(e){let t=new WeakMap,i=new WeakMap,r=null;function n(u,p=!1){if(u===null||u===void 0)return null;if(p)return o(u);return s(u)}function s(u){if(u&&u.isTexture){let p=u.mapping;if(p===Qs||p===$s)if(t.has(u)){let x=t.get(u).texture;return a(x,u.mapping)}else{let x=u.image;if(x&&x.height>0){let M=new Jr(x.height);return M.fromEquirectangularTexture(e,u),t.set(u,M),u.addEventListener("dispose",c),a(M.texture,u.mapping)}else return null}}return u}function o(u){if(u&&u.isTexture&&u.isPMREMTexture!==!0){let p=u.mapping,x=p===Qs||p===$s,M=p===Fi||p===xr;if(x||M){let f=i.get(u),m=f!==void 0?f.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==m){if(r===null)r=new Kr(e);return f=x?r.fromEquirectangular(u,f):r.fromCubemap(u,f),f.texture.pmremVersion=u.pmremVersion,i.set(u,f),f.texture}else if(f!==void 0)return f.texture;else{let b=u.image;if(x&&b&&b.height>0||M&&b&&l(b)){if(r===null)r=new Kr(e);return f=x?r.fromEquirectangular(u):r.fromCubemap(u),f.texture.pmremVersion=u.pmremVersion,i.set(u,f),u.addEventListener("dispose",h),f.texture}else return null}}}return u}function a(u,p){if(p===Qs)u.mapping=Fi;else if(p===$s)u.mapping=xr;return u}function l(u){let p=0,x=6;for(let M=0;M<x;M++)if(u[M]!==void 0)p++;return p===x}function c(u){let p=u.target;p.removeEventListener("dispose",c);let x=t.get(p);if(x!==void 0)t.delete(p),x.dispose()}function h(u){let p=u.target;p.removeEventListener("dispose",h);let x=i.get(p);if(x!==void 0)i.delete(p),x.dispose()}function d(){if(t=new WeakMap,i=new WeakMap,r!==null)r.dispose(),r=null}return{get:n,dispose:d}}function qp(e){let t={};function i(r){if(t[r]!==void 0)return t[r];let n=e.getExtension(r);return t[r]=n,n}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){let n=i(r);if(n===null)Bi("WebGLRenderer: "+r+" extension not supported.");return n}}}function Yp(e,t,i,r){let n={},s=new WeakMap,o=new FinalizationRegistry((x)=>delete n[x]);function a(x){l(x.target)}function l(x){if(x.index!==null)t.remove(x.index);for(let f in x.attributes)t.remove(x.attributes[f]);x.removeEventListener("dispose",a),delete n[x.id],o.unregister(x);let M=s.get(x);if(M)t.remove(M),s.delete(x);if(r.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0)delete x._maxInstanceCount;i.memory.geometries--}function c(x,M){if(n[M.id]!==void 0)return M;return M.addEventListener("dispose",a),n[M.id]=new WeakRef(M),o.register(M,M.id,M),i.memory.geometries++,M}function h(x){let M=x.attributes;for(let f in M)t.update(M[f],e.ARRAY_BUFFER)}function d(x){let M=x.index,f=x.attributes.position,m=0;if(f===void 0)return;let b=M!==null?M.array.length:f.array.length/3-1,S=new(f.count>=65535?Fo:Uo)(Math.ceil(b/3)*6,1),w=S.array;if(M!==null){let g=M.array;m=M.version;for(let y=0,D=0;y<b;y+=3){let V=g[y+0],L=g[y+1],z=g[y+2];w[D++]=V,w[D++]=L,w[D++]=L,w[D++]=z,w[D++]=z,w[D++]=V}}else{m=f.version;for(let g=0,y=0;g<b;g+=3){let D=g+0,V=g+1,L=g+2;w[y++]=D,w[y++]=V,w[y++]=V,w[y++]=L,w[y++]=L,w[y++]=D}}S.version=m;let P=s.get(x);if(P)t.remove(P);s.set(x,S)}function u(x){let M=s.get(x);if(M){let f=x.index;if(f!==null){if(M.version<f.version)d(x)}}else d(x);return s.get(x)}function p(){for(let x in n){let M=n[x].deref();if(M!==void 0)l(M)}}return{get:c,update:h,getWireframeAttribute:u,dispose:p}}function Zp(e,t,i){let r;function n(d){r=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,u){e.drawElements(r,u,s,d*o),i.update(u,r,1)}function c(d,u,p){if(p===0)return;e.drawElementsInstanced(r,u,s,d*o,p),i.update(u,r,p)}function h(d,u,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,u,0,s,d,0,p);let M=0;for(let f=0;f<p;f++)M+=u[f];i.update(M,r,1)}this.setMode=n,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function Jp(e){let t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(s,o,a){switch(i.calls++,o){case e.TRIANGLES:i.triangles+=a*(s/3);break;case e.LINES:i.lines+=a*(s/2);break;case e.LINE_STRIP:i.lines+=a*(s-1);break;case e.LINE_LOOP:i.lines+=a*s;break;case e.POINTS:i.points+=a*s;break;default:ye("WebGLInfo: Unknown draw mode:",o);break}}function n(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:n,update:r}}function Kp(e,t,i){let r=new WeakMap,n=new tt;function s(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0,u=r.get(a);if(u===void 0||u.count!==d){let D=function(){g.dispose(),r.delete(a),a.removeEventListener("dispose",D)};if(u!==void 0)u.texture.dispose();let p=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,M=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],b=a.morphAttributes.color||[],E=0;if(p===!0)E=1;if(x===!0)E=2;if(M===!0)E=3;let S=a.attributes.position.count*E,w=1;if(S>t.maxTextureSize)w=Math.ceil(S/t.maxTextureSize),S=t.maxTextureSize;let P=new Float32Array(S*w*4*d),g=new xn(P,S,w,d);g.type=Et,g.needsUpdate=!0;let y=E*4;for(let V=0;V<d;V++){let L=f[V],z=m[V],J=b[V],R=S*w*4*V;for(let X=0;X<L.count;X++){let K=X*y;if(p===!0)n.fromBufferAttribute(L,X),P[R+K+0]=n.x,P[R+K+1]=n.y,P[R+K+2]=n.z,P[R+K+3]=0;if(x===!0)n.fromBufferAttribute(z,X),P[R+K+4]=n.x,P[R+K+5]=n.y,P[R+K+6]=n.z,P[R+K+7]=0;if(M===!0)n.fromBufferAttribute(J,X),P[R+K+8]=n.x,P[R+K+9]=n.y,P[R+K+10]=n.z,P[R+K+11]=J.itemSize===4?n.w:1}}u={count:d,texture:g,size:new ee(S,w)},r.set(a,u),a.addEventListener("dispose",D)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(e,"morphTexture",o.morphTexture,i);else{let p=0;for(let M=0;M<c.length;M++)p+=c[M];let x=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(e,"morphTargetBaseInfluence",x),l.getUniforms().setValue(e,"morphTargetInfluences",c)}l.getUniforms().setValue(e,"morphTargetsTexture",u.texture,i),l.getUniforms().setValue(e,"morphTargetsTextureSize",u.size)}return{update:s}}function Qp(e,t,i,r,n){let s=new WeakMap;function o(c){let h=n.render.frame,d=c.geometry,u=t.get(c,d);if(s.get(u)!==h)t.update(u),s.set(u,h);if(c.isInstancedMesh){if(c.hasEventListener("dispose",l)===!1)c.addEventListener("dispose",l);if(s.get(c)!==h){if(i.update(c.instanceMatrix,e.ARRAY_BUFFER),c.instanceColor!==null)i.update(c.instanceColor,e.ARRAY_BUFFER);s.set(c,h)}}if(c.isSkinnedMesh){let p=c.skeleton;if(s.get(p)!==h)p.update(),s.set(p,h)}return u}function a(){s=new WeakMap}function l(c){let h=c.target;if(h.removeEventListener("dispose",l),r.releaseStatesOfObject(h),i.remove(h.instanceMatrix),h.instanceColor!==null)i.remove(h.instanceColor)}return{update:o,dispose:a}}var $0={[Gn]:"LINEAR_TONE_MAPPING",[Vn]:"REINHARD_TONE_MAPPING",[kn]:"CINEON_TONE_MAPPING",[Nr]:"ACES_FILMIC_TONE_MAPPING",[Wn]:"AGX_TONE_MAPPING",[Xn]:"NEUTRAL_TONE_MAPPING",[Hn]:"CUSTOM_TONE_MAPPING"};function $p(e,t,i,r,n,s){let o=new pt(t,i,{type:e,depthBuffer:n,stencilBuffer:s,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=null,h=new Le;h.setAttribute("position",new Ae([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new Ae([0,2,0,0,2,0],2));let d=new wn({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new we(h,d),p=new Zr(-1,1,1,-1,0,1),x=null,M=null,f=!1,m,b=null,E=[],S=!1;this.setSize=function(w,P){if(o.setSize(w,P),a!==null)a.setSize(w,P);if(l!==null)l.setSize(w,P);for(let g=0;g<E.length;g++){let y=E[g];if(y.setSize)y.setSize(w,P)}},this.setEffects=function(w){E=w,S=E.length>0&&E[0].isRenderPass===!0;let{width:P,height:g}=o;if(E.length>0&&a===null)a=new pt(P,g,{type:xt,depthBuffer:!1,stencilBuffer:!1}),l=new pt(P,g,{type:xt,depthBuffer:!1,stencilBuffer:!1});let y=n===!0&&E.some((D)=>D.needsDepthTexture===!0);if(y!==(o.depthTexture!==null)){if(y===!0&&c===null){if(c=new Ii(P,g),s===!0)c.format=Ei,c.type=Qi}o.dispose(),o.depthTexture=y?c:null,o.resolveDepthBuffer=y,o.storeMultisampledDepthBuffer=y}for(let D=0;D<E.length;D++){let V=E[D];if(V.setSize)V.setSize(P,g);if(y&&V.needsDepthTexture===!0&&V.setDepthTexture)V.setDepthTexture(c)}},this.begin=function(w,P){if(f)return!1;if(w.toneMapping===Ti&&E.length===0)return!1;if(b=P,P!==null){let{width:g,height:y}=P;if(o.width!==g||o.height!==y)this.setSize(g,y)}if(S===!1)w.setRenderTarget(o);return m=w.toneMapping,w.toneMapping=Ti,!0},this.hasRenderPass=function(){return S},this.end=function(w,P){w.toneMapping=m,f=!0;let g=o,y=a;for(let D=0;D<E.length;D++){let V=E[D];if(V.enabled===!1)continue;if(V.render(w,y,g,P),V.needsSwap!==!1)g=y,y=y===a?l:a}if(x!==w.outputColorSpace||M!==w.toneMapping){if(x=w.outputColorSpace,M=w.toneMapping,d.defines={},Ge.getTransfer(x)===Je)d.defines.SRGB_TRANSFER="";let D=$0[M];if(D)d.defines[D]="";d.needsUpdate=!0}d.uniforms.tDiffuse.value=g.texture,w.setRenderTarget(b),w.render(u,p),b=null,f=!1},this.isCompositing=function(){return f},this.dispose=function(){if(o.dispose(),a!==null)a.dispose();if(l!==null)l.dispose();h.dispose(),d.dispose()}}var sm=new et,om=new Ii(1,1),am=new ws(1),lm=new xn,cm=new as,hm=new kr,jp=[],em=[],tm=new Float32Array(16),im=new Float32Array(9),rm=new Float32Array(4);function Us(e,t,i){let r=e[0];if(r<=0||r>0)return e;let n=t*i,s=jp[n];if(s===void 0)s=new Float32Array(n),jp[n]=s;if(t!==0){r.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=i,e[o].toArray(s,a)}return s}function Bt(e,t){if(e.length!==t.length)return!1;for(let i=0,r=e.length;i<r;i++)if(e[i]!==t[i])return!1;return!0}function zt(e,t){for(let i=0,r=t.length;i<r;i++)e[i]=t[i]}function Nl(e,t){let i=em[t];if(i===void 0)i=new Int32Array(t),em[t]=i;for(let r=0;r!==t;++r)i[r]=e.allocateTextureUnit();return i}function j0(e,t){let i=this.cache;if(i[0]===t)return;e.uniform1f(this.addr,t),i[0]=t}function ex(e,t){let i=this.cache;if(t.x!==void 0){if(i[0]!==t.x||i[1]!==t.y)e.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y}else{if(Bt(i,t))return;e.uniform2fv(this.addr,t),zt(i,t)}}function tx(e,t){let i=this.cache;if(t.x!==void 0){if(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)e.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z}else if(t.r!==void 0){if(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)e.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b}else{if(Bt(i,t))return;e.uniform3fv(this.addr,t),zt(i,t)}}function ix(e,t){let i=this.cache;if(t.x!==void 0){if(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)e.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w}else{if(Bt(i,t))return;e.uniform4fv(this.addr,t),zt(i,t)}}function rx(e,t){let i=this.cache,r=t.elements;if(r===void 0){if(Bt(i,t))return;e.uniformMatrix2fv(this.addr,!1,t),zt(i,t)}else{if(Bt(i,r))return;rm.set(r),e.uniformMatrix2fv(this.addr,!1,rm),zt(i,r)}}function nx(e,t){let i=this.cache,r=t.elements;if(r===void 0){if(Bt(i,t))return;e.uniformMatrix3fv(this.addr,!1,t),zt(i,t)}else{if(Bt(i,r))return;im.set(r),e.uniformMatrix3fv(this.addr,!1,im),zt(i,r)}}function sx(e,t){let i=this.cache,r=t.elements;if(r===void 0){if(Bt(i,t))return;e.uniformMatrix4fv(this.addr,!1,t),zt(i,t)}else{if(Bt(i,r))return;tm.set(r),e.uniformMatrix4fv(this.addr,!1,tm),zt(i,r)}}function ox(e,t){let i=this.cache;if(i[0]===t)return;e.uniform1i(this.addr,t),i[0]=t}function ax(e,t){let i=this.cache;if(t.x!==void 0){if(i[0]!==t.x||i[1]!==t.y)e.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y}else{if(Bt(i,t))return;e.uniform2iv(this.addr,t),zt(i,t)}}function lx(e,t){let i=this.cache;if(t.x!==void 0){if(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)e.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z}else{if(Bt(i,t))return;e.uniform3iv(this.addr,t),zt(i,t)}}function cx(e,t){let i=this.cache;if(t.x!==void 0){if(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)e.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w}else{if(Bt(i,t))return;e.uniform4iv(this.addr,t),zt(i,t)}}function hx(e,t){let i=this.cache;if(i[0]===t)return;e.uniform1ui(this.addr,t),i[0]=t}function ux(e,t){let i=this.cache;if(t.x!==void 0){if(i[0]!==t.x||i[1]!==t.y)e.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y}else{if(Bt(i,t))return;e.uniform2uiv(this.addr,t),zt(i,t)}}function fx(e,t){let i=this.cache;if(t.x!==void 0){if(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)e.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z}else{if(Bt(i,t))return;e.uniform3uiv(this.addr,t),zt(i,t)}}function dx(e,t){let i=this.cache;if(t.x!==void 0){if(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w}else{if(Bt(i,t))return;e.uniform4uiv(this.addr,t),zt(i,t)}}function Ul(e){if(e.version===0)e.compareFunction=Ua,e.needsUpdate=!0;return e}function px(e,t,i){let r=this.cache,n=i.allocateTextureUnit();if(r[0]!==n)e.uniform1i(this.addr,n),r[0]=n;let s;if(this.type===e.SAMPLER_2D_SHADOW)s=Ul(om);else s=sm;i.setTexture2D(t||s,n)}function mx(e,t,i){let r=this.cache,n=i.allocateTextureUnit();if(r[0]!==n)e.uniform1i(this.addr,n),r[0]=n;i.setTexture3D(t||cm,n)}function gx(e,t,i){let r=this.cache,n=i.allocateTextureUnit();if(r[0]!==n)e.uniform1i(this.addr,n),r[0]=n;let s;if(this.type===e.SAMPLER_CUBE_SHADOW)s=Ul(am);else s=hm;i.setTextureCube(t||s,n)}function xx(e,t,i){let r=this.cache,n=i.allocateTextureUnit();if(r[0]!==n)e.uniform1i(this.addr,n),r[0]=n;i.setTexture2DArray(t||lm,n)}function _x(e){switch(e){case 5126:return j0;case 35664:return ex;case 35665:return tx;case 35666:return ix;case 35674:return rx;case 35675:return nx;case 35676:return sx;case 5124:case 35670:return ox;case 35667:case 35671:return ax;case 35668:case 35672:return lx;case 35669:case 35673:return cx;case 5125:return hx;case 36294:return ux;case 36295:return fx;case 36296:return dx;case 35678:case 36198:case 36298:case 36306:case 35682:return px;case 35679:case 36299:case 36307:return mx;case 35680:case 36300:case 36308:case 36293:return gx;case 36289:case 36303:case 36311:case 36292:return xx}}function vx(e,t){e.uniform1fv(this.addr,t)}function yx(e,t){let i=Us(t,this.size,2);e.uniform2fv(this.addr,i)}function Mx(e,t){let i=Us(t,this.size,3);e.uniform3fv(this.addr,i)}function Sx(e,t){let i=Us(t,this.size,4);e.uniform4fv(this.addr,i)}function bx(e,t){let i=Us(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,i)}function Tx(e,t){let i=Us(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,i)}function Ex(e,t){let i=Us(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,i)}function wx(e,t){e.uniform1iv(this.addr,t)}function Ax(e,t){e.uniform2iv(this.addr,t)}function Rx(e,t){e.uniform3iv(this.addr,t)}function Cx(e,t){e.uniform4iv(this.addr,t)}function Px(e,t){e.uniform1uiv(this.addr,t)}function Ix(e,t){e.uniform2uiv(this.addr,t)}function Lx(e,t){e.uniform3uiv(this.addr,t)}function Dx(e,t){e.uniform4uiv(this.addr,t)}function Nx(e,t,i){let r=this.cache,n=t.length,s=Nl(i,n);if(!Bt(r,s))e.uniform1iv(this.addr,s),zt(r,s);let o;if(this.type===e.SAMPLER_2D_SHADOW)o=Ul(om);else o=sm;for(let a=0;a!==n;++a)i.setTexture2D(t[a]||o,s[a])}function Ux(e,t,i){let r=this.cache,n=t.length,s=Nl(i,n);if(!Bt(r,s))e.uniform1iv(this.addr,s),zt(r,s);for(let o=0;o!==n;++o)i.setTexture3D(t[o]||cm,s[o])}function Fx(e,t,i){let r=this.cache,n=t.length,s=Nl(i,n);if(!Bt(r,s))e.uniform1iv(this.addr,s),zt(r,s);let o;if(this.type===e.SAMPLER_CUBE_SHADOW)o=Ul(am);else o=hm;for(let a=0;a!==n;++a)i.setTextureCube(t[a]||o,s[a])}function Ox(e,t,i){let r=this.cache,n=t.length,s=Nl(i,n);if(!Bt(r,s))e.uniform1iv(this.addr,s),zt(r,s);for(let o=0;o!==n;++o)i.setTexture2DArray(t[o]||lm,s[o])}function Bx(e){switch(e){case 5126:return vx;case 35664:return yx;case 35665:return Mx;case 35666:return Sx;case 35674:return bx;case 35675:return Tx;case 35676:return Ex;case 5124:case 35670:return wx;case 35667:case 35671:return Ax;case 35668:case 35672:return Rx;case 35669:case 35673:return Cx;case 5125:return Px;case 36294:return Ix;case 36295:return Lx;case 36296:return Dx;case 35678:case 36198:case 36298:case 36306:case 35682:return Nx;case 35679:case 36299:case 36307:return Ux;case 35680:case 36300:case 36308:case 36293:return Fx;case 36289:case 36303:case 36311:case 36292:return Ox}}class um{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=_x(t.type)}}class fm{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Bx(t.type)}}class dm{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let r=this.seq;for(let n=0,s=r.length;n!==s;++n){let o=r[n];o.setValue(e,t[o.id],i)}}}var Hc=/(\w+)(\])?(\[|\.)?/g;function nm(e,t){e.seq.push(t),e.map[t.id]=t}function zx(e,t,i){let r=e.name,n=r.length;Hc.lastIndex=0;while(!0){let s=Hc.exec(r),o=Hc.lastIndex,a=s[1],l=s[2]==="]",c=s[3];if(l)a=a|0;if(c===void 0||c==="["&&o+2===n){nm(i,c===void 0?new um(a,e,t):new fm(a,e,t));break}else{let d=i.map[a];if(d===void 0)d=new dm(a),nm(i,d);i=d}}}class Dn{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let o=e.getActiveUniform(t,s),a=e.getUniformLocation(t,o.name);zx(o,a,this)}let r=[],n=[];for(let s of this.seq)if(s.type===e.SAMPLER_2D_SHADOW||s.type===e.SAMPLER_CUBE_SHADOW||s.type===e.SAMPLER_2D_ARRAY_SHADOW)r.push(s);else n.push(s);if(r.length>0)this.seq=r.concat(n)}setValue(e,t,i,r){let n=this.map[t];if(n!==void 0)n.setValue(e,i,r)}setOptional(e,t,i){let r=t[i];if(r!==void 0)this.setValue(e,i,r)}static upload(e,t,i,r){for(let n=0,s=t.length;n!==s;++n){let o=t[n],a=i[o.id];if(a.needsUpdate!==!1)o.setValue(e,a.value,r)}}static seqWithValue(e,t){let i=[];for(let r=0,n=e.length;r!==n;++r){let s=e[r];if(s.id in t)i.push(s)}return i}}function Wc(e,t,i){let r=e.createShader(t);return e.shaderSource(r,i),e.compileShader(r),r}var Gx=37297,Vx=0;function kx(e,t){let i=e.split(`
`),r=[],n=Math.max(t-6,0),s=Math.min(t+6,i.length);for(let o=n;o<s;o++){let a=o+1;r.push(`${a===t?">":" "} ${a}: ${i[o]}`)}return r.join(`
`)}var pm=new Ie;function Hx(e){Ge._getMatrix(pm,Ge.workingColorSpace,e);let t=`mat3( ${pm.elements.map((i)=>i.toFixed(4))} )`;switch(Ge.getTransfer(e)){case fn:return[t,"LinearTransferOETF"];case Je:return[t,"sRGBTransferOETF"];default:return le("WebGLProgram: Unsupported color space: ",e),[t,"LinearTransferOETF"]}}function mm(e,t,i){let r=e.getShaderParameter(t,e.COMPILE_STATUS),s=(e.getShaderInfoLog(t)||"").trim();if(r&&s==="")return"";let o=/ERROR: 0:(\d+)/.exec(s);if(o){let a=parseInt(o[1]);return i.toUpperCase()+`

`+s+`

`+kx(e.getShaderSource(t),a)}else return s}function Wx(e,t){let i=Hx(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${i[1]}( vec4( ${i[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var Xx={[Gn]:"Linear",[Vn]:"Reinhard",[kn]:"Cineon",[Nr]:"ACESFilmic",[Wn]:"AgX",[Xn]:"Neutral",[Hn]:"Custom"};function qx(e,t){let i=Xx[t];if(i===void 0)return le("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+e+"( vec3 color ) { return LinearToneMapping( color ); }";return"vec3 "+e+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}var Fl=new A;function Yx(){Ge.getLuminanceCoefficients(Fl);let e=Fl.x.toFixed(4),t=Fl.y.toFixed(4),i=Fl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${t}, ${i} );`,"\treturn dot( weights, rgb );","}"].join(`
`)}function Zx(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(oa).join(`
`)}function Jx(e){let t=[];for(let i in e){let r=e[i];if(r===!1)continue;t.push("#define "+i+" "+r)}return t.join(`
`)}function Kx(e,t){let i={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let n=0;n<r;n++){let s=e.getActiveAttrib(t,n),o=s.name,a=1;if(s.type===e.FLOAT_MAT2)a=2;if(s.type===e.FLOAT_MAT3)a=3;if(s.type===e.FLOAT_MAT4)a=4;i[o]={type:s.type,location:e.getAttribLocation(t,o),locationSize:a}}return i}function oa(e){return e!==""}function gm(e,t){let i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function xm(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Qx=/^[ \t]*#include +<([\w\d./]+)>/gm;function Xc(e){return e.replace(Qx,$x)}function $x(e,t){let i=We[t];if(i===void 0)throw Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return Xc(i)}var jx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function _m(e){return e.replace(jx,e_)}function e_(e,t,i,r){let n="";for(let s=parseInt(t);s<parseInt(i);s++)n+=r.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return n}function vm(e){let t=`precision ${e.precision} float;
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
#define LOW_PRECISION`;return t}var t_={[zn]:"SHADOWMAP_TYPE_PCF",[nn]:"SHADOWMAP_TYPE_VSM"};function i_(e){return t_[e.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var r_={[xr]:"ENVMAP_MODE_REFRACTION"};function n_(e){if(e.envMap===!1)return"ENVMAP_MODE_REFLECTION";return r_[e.envMapMode]||"ENVMAP_MODE_REFLECTION"}var s_={[on]:"ENVMAP_BLENDING_MULTIPLY",[zh]:"ENVMAP_BLENDING_MIX",[Gh]:"ENVMAP_BLENDING_ADD"};function o_(e){if(e.envMap===!1)return"ENVMAP_BLENDING_NONE";return s_[e.combine]||"ENVMAP_BLENDING_NONE"}function ym(e,t,i,r){let n=e.getContext(),{defines:s,vertexShader:o,fragmentShader:a}=i,l=i_(i),c=i.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=n_(i),d=o_(i),u=Zx(i),p=Jx(s),x=n.createProgram(),M,f,m=i.glslVersion?"#version "+i.glslVersion+`
`:"";if(i.isRawShaderMaterial){if(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,p].filter(oa).join(`
`),M.length>0)M+=`
`;if(f=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,p].filter(oa).join(`
`),f.length>0)f+=`
`}else M=[vm(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,p,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+h:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+i.diffuseRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexNormals?"#define HAS_NORMAL":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+l:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","\tattribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","\tattribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","\tuniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","\tattribute vec2 uv1;","#endif","#ifdef USE_UV2","\tattribute vec2 uv2;","#endif","#ifdef USE_UV3","\tattribute vec2 uv3;","#endif","#ifdef USE_TANGENT","\tattribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","\tattribute vec4 color;","#elif defined( USE_COLOR )","\tattribute vec3 color;","#endif","#ifdef USE_SKINNING","\tattribute vec4 skinIndex;","\tattribute vec4 skinWeight;","#endif",`
`].filter(oa).join(`
`),f=[vm(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,p,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+c:"",i.envMap?"#define "+h:"",i.envMap?"#define "+d:"",i.envMapPMREM?"#define ENVMAP_MAX_LOD "+i.envMapMaxLod+".0":"",i.envMapPMREM?"#define ENVMAP_SIZE "+i.envMapSize+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",i.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.retroreflection?"#define USE_RETROREFLECTION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+l:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Ti?"#define TONE_MAPPING":"",i.toneMapping!==Ti?We.tonemapping_pars_fragment:"",i.toneMapping!==Ti?qx("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",We.colorspace_pars_fragment,Wx("linearToOutputTexel",i.outputColorSpace),Yx(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(oa).join(`
`);if(o=Xc(o),o=gm(o,i),o=xm(o,i),a=Xc(a),a=gm(a,i),a=xm(a,i),o=_m(o),a=_m(a),i.isRawShaderMaterial!==!0)m=`#version 300 es
`,M=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,f=["#define varying in",i.glslVersion===nc?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===nc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f;let b=m+M+o,E=m+f+a,S=Wc(n,n.VERTEX_SHADER,b),w=Wc(n,n.FRAGMENT_SHADER,E);if(n.attachShader(x,S),n.attachShader(x,w),i.index0AttributeName!==void 0)n.bindAttribLocation(x,0,i.index0AttributeName);else if(i.hasPositionAttribute===!0)n.bindAttribLocation(x,0,"position");n.linkProgram(x);function P(V){if(e.debug.checkShaderErrors){let L=n.getProgramInfoLog(x)||"",z=n.getShaderInfoLog(S)||"",J=n.getShaderInfoLog(w)||"",R=L.trim(),X=z.trim(),K=J.trim(),B=!0,ce=!0;if(n.getProgramParameter(x,n.LINK_STATUS)===!1)if(B=!1,typeof e.debug.onShaderError==="function")e.debug.onShaderError(n,x,S,w);else{let W=mm(n,S,"vertex"),j=mm(n,w,"fragment");ye("WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(x,n.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+R+`
`+W+`
`+j)}else if(R!=="")le("WebGLProgram: Program Info Log:",R);else if(X===""||K==="")ce=!1;if(ce)V.diagnostics={runnable:B,programLog:R,vertexShader:{log:X,prefix:M},fragmentShader:{log:K,prefix:f}}}n.deleteShader(S),n.deleteShader(w),g=new Dn(n,x),y=Kx(n,x)}let g;this.getUniforms=function(){if(g===void 0)P(this);return g};let y;this.getAttributes=function(){if(y===void 0)P(this);return y};let D=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){if(D===!1)D=n.getProgramParameter(x,Gx);return D},this.destroy=function(){r.releaseStatesOfProgram(this),n.deleteProgram(x),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=Vx++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=S,this.fragmentShader=w,this}var a_=0;class qc{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){let r=this._getShaderCacheForMaterial(e);if(r.has(t)===!1)r.add(t),t.usedTimes++;if(r.has(i)===!1)r.add(i),i.usedTimes++;return this}remove(e){let t=this.materialCache.get(e);for(let i of t)if(i.usedTimes--,i.usedTimes===0)this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);if(i===void 0)i=new Set,t.set(e,i);return i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);if(i===void 0)i=new Mm(e),t.set(e,i);return i}}class Mm{constructor(e){this.id=a_++,this.code=e,this.usedTimes=0}}function l_(e){return e===wi||e===ln||e===cn}function Sm(e,t,i,r,n,s){let o=new Br,a=new qc,l=new Set,c=[],h=new Map,d=r.logarithmicDepthBuffer,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(g){if(l.add(g),g===0)return"uv";return`uv${g}`}function x(g,y,D,V,L,z){let J=V.fog,R=L.geometry,X=g.isMeshStandardMaterial||g.isMeshLambertMaterial||g.isMeshPhongMaterial?V.environment:null,K=g.isMeshStandardMaterial||g.isMeshLambertMaterial&&!g.envMap||g.isMeshPhongMaterial&&!g.envMap,B=t.get(g.envMap||X,K),ce=u[g.type],W=r.precision;if(g.precision!==null){if(W=r.getMaxPrecision(g.precision),W!==g.precision)le("WebGLProgram.getParameters:",g.precision,"not supported, using",W,"instead.")}let j=R.morphAttributes.position||R.morphAttributes.normal||R.morphAttributes.color,se=j!==void 0?j.length:0,Re=0;if(R.morphAttributes.position!==void 0)Re=1;if(R.morphAttributes.normal!==void 0)Re=2;if(R.morphAttributes.color!==void 0)Re=3;let Z,ne,Te,Fe;if(ce){let _e=Li[ce];Z=_e.vertexShader,ne=_e.fragmentShader}else{Z=g.vertexShader,ne=g.fragmentShader;let _e=a.getVertexShaderStage(g),ot=a.getFragmentShaderStage(g);a.update(g,_e,ot),Te=_e.id,Fe=ot.id}let Oe=e.getRenderTarget(),Ee=e.state.buffers.depth.getReversed(),nt=L.isInstancedMesh===!0,Ze=L.isBatchedMesh===!0,Xe=!!g.map,ft=!!g.matcap,$e=!!B,bt=$e&&B.isPMREMTexture===!0,Rt=!!g.aoMap,mi=!!g.lightMap,bi=!!g.bumpMap&&g.wireframe===!1,Ct=!!g.normalMap,ti=!!g.displacementMap,gi=!!g.emissiveMap,xi=!!g.metalnessMap,Zi=!!g.roughnessMap,N=g.anisotropy>0,Ji=g.clearcoat>0,st=g.diffuseRoughness>0,Gt=g.dispersion>0,ge=g.retroreflectivity>0,ct=g.iridescence>0,Be=g.sheen>0,Ve=g.transmission>0,ii=N&&!!g.anisotropyMap,T=Ji&&!!g.clearcoatMap,_=Ji&&!!g.clearcoatNormalMap,U=Ji&&!!g.clearcoatRoughnessMap,te=st&&!!g.diffuseRoughnessMap,Q=ct&&!!g.iridescenceMap,ae=ct&&!!g.iridescenceThicknessMap,ue=Be&&!!g.sheenColorMap,k=Be&&!!g.sheenRoughnessMap,Y=!!g.specularMap,he=!!g.specularColorMap,C=!!g.specularIntensityMap,q=Ve&&!!g.transmissionMap,H=Ve&&!!g.thicknessMap,re=!!g.gradientMap,oe=!!g.alphaMap,pe=g.alphaTest>0,De=!!g.alphaHash,Pe=!!g.extensions,xe=Ti;if(g.toneMapped){if(Oe===null||Oe.isXRRenderTarget===!0)xe=e.toneMapping}let Ne=bt?B.isCompressedCubeTexture?B.image[0].mipmaps:B.mipmaps:null,qe={shaderID:ce,shaderType:g.type,shaderName:g.name,vertexShader:Z,fragmentShader:ne,defines:g.defines,customVertexShaderID:Te,customFragmentShaderID:Fe,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:W,batching:Ze,batchingColor:Ze&&L._colorsTexture!==null,instancing:nt,instancingColor:nt&&L.instanceColor!==null,instancingMorph:nt&&L.morphTexture!==null,outputColorSpace:Oe===null?e.outputColorSpace:Oe.isXRRenderTarget===!0?Oe.texture.colorSpace:Ge.workingColorSpace,alphaToCoverage:!!g.alphaToCoverage,map:Xe,matcap:ft,envMap:$e,envMapMode:$e&&B.mapping,envMapPMREM:bt,envMapMaxLod:bt?Ne.length-1:null,envMapSize:bt?Ne[0].width:null,aoMap:Rt,lightMap:mi,bumpMap:bi,normalMap:Ct,displacementMap:ti,emissiveMap:gi,normalMapObjectSpace:Ct&&g.normalMapType===kh,normalMapTangentSpace:Ct&&g.normalMapType===$i,packedNormalMap:Ct&&g.normalMapType===$i&&l_(g.normalMap.format),metalnessMap:xi,roughnessMap:Zi,anisotropy:N,anisotropyMap:ii,clearcoat:Ji,clearcoatMap:T,clearcoatNormalMap:_,clearcoatRoughnessMap:U,diffuseRoughness:st,diffuseRoughnessMap:te,dispersion:Gt,retroreflection:ge,iridescence:ct,iridescenceMap:Q,iridescenceThicknessMap:ae,sheen:Be,sheenColorMap:ue,sheenRoughnessMap:k,specularMap:Y,specularColorMap:he,specularIntensityMap:C,transmission:Ve,transmissionMap:q,thicknessMap:H,gradientMap:re,opaque:g.transparent===!1&&g.blending===Ir&&g.alphaToCoverage===!1,alphaMap:oe,alphaTest:pe,alphaHash:De,combine:g.combine,mapUv:Xe&&p(g.map.channel),aoMapUv:Rt&&p(g.aoMap.channel),lightMapUv:mi&&p(g.lightMap.channel),bumpMapUv:bi&&p(g.bumpMap.channel),normalMapUv:Ct&&p(g.normalMap.channel),displacementMapUv:ti&&p(g.displacementMap.channel),emissiveMapUv:gi&&p(g.emissiveMap.channel),metalnessMapUv:xi&&p(g.metalnessMap.channel),roughnessMapUv:Zi&&p(g.roughnessMap.channel),anisotropyMapUv:ii&&p(g.anisotropyMap.channel),clearcoatMapUv:T&&p(g.clearcoatMap.channel),clearcoatNormalMapUv:_&&p(g.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:U&&p(g.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:te&&p(g.diffuseRoughnessMap.channel),iridescenceMapUv:Q&&p(g.iridescenceMap.channel),iridescenceThicknessMapUv:ae&&p(g.iridescenceThicknessMap.channel),sheenColorMapUv:ue&&p(g.sheenColorMap.channel),sheenRoughnessMapUv:k&&p(g.sheenRoughnessMap.channel),specularMapUv:Y&&p(g.specularMap.channel),specularColorMapUv:he&&p(g.specularColorMap.channel),specularIntensityMapUv:C&&p(g.specularIntensityMap.channel),transmissionMapUv:q&&p(g.transmissionMap.channel),thicknessMapUv:H&&p(g.thicknessMap.channel),alphaMapUv:oe&&p(g.alphaMap.channel),vertexTangents:!!R.attributes.tangent&&(Ct||N),vertexNormals:!!R.attributes.normal,vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!R.attributes.color&&R.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!R.attributes.uv&&(Xe||oe),fog:!!J,useFog:g.fog===!0,fogExp2:!!J&&J.isFogExp2,flatShading:g.wireframe===!1&&(g.flatShading===!0||R.attributes.normal===void 0&&Ct===!1&&(g.isMeshLambertMaterial||g.isMeshPhongMaterial||g.isMeshStandardMaterial||g.isMeshPhysicalMaterial)),sizeAttenuation:g.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Ee,skinning:L.isSkinnedMesh===!0,hasPositionAttribute:R.attributes.position!==void 0,morphTargets:R.morphAttributes.position!==void 0,morphNormals:R.morphAttributes.normal!==void 0,morphColors:R.morphAttributes.color!==void 0,morphTargetsCount:se,morphTextureStride:Re,numSunLights:y.sun.length,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numSunLightShadows:y.sunShadowMap.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numLightProbeGrids:z.filter((_e)=>_e.texture!==null).length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:g.dithering,shadowMapEnabled:e.shadowMap.enabled&&D.length>0,shadowMapType:e.shadowMap.type,toneMapping:xe,decodeVideoTexture:Xe&&g.map.isVideoTexture===!0&&Ge.getTransfer(g.map.colorSpace)===Je,decodeVideoTextureEmissive:gi&&g.emissiveMap.isVideoTexture===!0&&Ge.getTransfer(g.emissiveMap.colorSpace)===Je,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===Ht,flipSided:g.side===dt,useDepthPacking:g.depthPacking>=0,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionClipCullDistance:Pe&&g.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Pe&&g.extensions.multiDraw===!0||Ze)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:g.customProgramCacheKey()};return qe.vertexUv1s=l.has(1),qe.vertexUv2s=l.has(2),qe.vertexUv3s=l.has(3),l.clear(),qe}function M(g){let y=[];if(g.shaderID)y.push(g.shaderID);else y.push(g.customVertexShaderID),y.push(g.customFragmentShaderID);if(g.defines!==void 0)for(let D in g.defines)y.push(D),y.push(g.defines[D]);if(g.isRawShaderMaterial===!1)f(y,g),m(y,g),y.push(e.outputColorSpace);return y.push(g.customProgramCacheKey),y.join()}function f(g,y){g.push(y.precision),g.push(y.outputColorSpace),g.push(y.envMapMode),g.push(y.envMapPMREM),g.push(y.envMapMaxLod),g.push(y.envMapSize),g.push(y.mapUv),g.push(y.alphaMapUv),g.push(y.lightMapUv),g.push(y.aoMapUv),g.push(y.bumpMapUv),g.push(y.normalMapUv),g.push(y.displacementMapUv),g.push(y.emissiveMapUv),g.push(y.metalnessMapUv),g.push(y.roughnessMapUv),g.push(y.anisotropyMapUv),g.push(y.clearcoatMapUv),g.push(y.clearcoatNormalMapUv),g.push(y.clearcoatRoughnessMapUv),g.push(y.diffuseRoughnessMapUv),g.push(y.iridescenceMapUv),g.push(y.iridescenceThicknessMapUv),g.push(y.sheenColorMapUv),g.push(y.sheenRoughnessMapUv),g.push(y.specularMapUv),g.push(y.specularColorMapUv),g.push(y.specularIntensityMapUv),g.push(y.transmissionMapUv),g.push(y.thicknessMapUv),g.push(y.combine),g.push(y.fogExp2),g.push(y.sizeAttenuation),g.push(y.morphTargetsCount),g.push(y.numSunLights),g.push(y.numDirLights),g.push(y.numPointLights),g.push(y.numSpotLights),g.push(y.numSpotLightMaps),g.push(y.numHemiLights),g.push(y.numRectAreaLights),g.push(y.numSunLightShadows),g.push(y.numDirLightShadows),g.push(y.numPointLightShadows),g.push(y.numSpotLightShadows),g.push(y.numSpotLightShadowsWithMaps),g.push(y.numLightProbes),g.push(y.numLightProbeGrids),g.push(y.shadowMapType),g.push(y.toneMapping),g.push(y.numClippingPlanes),g.push(y.numClipIntersection),g.push(y.depthPacking)}function m(g,y){if(o.disableAll(),y.instancing)o.enable(0);if(y.instancingColor)o.enable(1);if(y.instancingMorph)o.enable(2);if(y.matcap)o.enable(3);if(y.envMap)o.enable(4);if(y.normalMapObjectSpace)o.enable(5);if(y.normalMapTangentSpace)o.enable(6);if(y.clearcoat)o.enable(7);if(y.iridescence)o.enable(8);if(y.alphaTest)o.enable(9);if(y.vertexColors)o.enable(10);if(y.vertexAlphas)o.enable(11);if(y.vertexUv1s)o.enable(12);if(y.vertexUv2s)o.enable(13);if(y.vertexUv3s)o.enable(14);if(y.vertexTangents)o.enable(15);if(y.anisotropy)o.enable(16);if(y.alphaHash)o.enable(17);if(y.batching)o.enable(18);if(y.dispersion)o.enable(19);if(y.retroreflection)o.enable(24);if(y.diffuseRoughness)o.enable(25);if(y.batchingColor)o.enable(20);if(y.gradientMap)o.enable(21);if(y.packedNormalMap)o.enable(22);if(y.vertexNormals)o.enable(23);if(g.push(o.mask),o.disableAll(),y.fog)o.enable(0);if(y.useFog)o.enable(1);if(y.flatShading)o.enable(2);if(y.logarithmicDepthBuffer)o.enable(3);if(y.reversedDepthBuffer)o.enable(4);if(y.skinning)o.enable(5);if(y.morphTargets)o.enable(6);if(y.morphNormals)o.enable(7);if(y.morphColors)o.enable(8);if(y.premultipliedAlpha)o.enable(9);if(y.shadowMapEnabled)o.enable(10);if(y.doubleSided)o.enable(11);if(y.flipSided)o.enable(12);if(y.useDepthPacking)o.enable(13);if(y.dithering)o.enable(14);if(y.transmission)o.enable(15);if(y.sheen)o.enable(16);if(y.opaque)o.enable(17);if(y.pointsUvs)o.enable(18);if(y.decodeVideoTexture)o.enable(19);if(y.decodeVideoTextureEmissive)o.enable(20);if(y.alphaToCoverage)o.enable(21);if(y.numLightProbeGrids>0)o.enable(22);if(y.hasPositionAttribute)o.enable(23);g.push(o.mask)}function b(g){let y=u[g.type],D;if(y){let V=Li[y];D=hr.clone(V.uniforms)}else D=g.uniforms;return D}function E(g,y){let D=h.get(y);if(D!==void 0)++D.usedTimes;else D=new ym(e,y,g,n),c.push(D),h.set(y,D);return D}function S(g){if(--g.usedTimes===0){let y=c.indexOf(g);c[y]=c[c.length-1],c.pop(),h.delete(g.cacheKey),g.destroy()}}function w(g){a.remove(g)}function P(){a.dispose()}return{getParameters:x,getProgramCacheKey:M,getUniforms:b,acquireProgram:E,releaseProgram:S,releaseShaderCache:w,programs:c,dispose:P}}function bm(){let e=new WeakMap;function t(o){return e.has(o)}function i(o){let a=e.get(o);if(a===void 0)a={},e.set(o,a);return a}function r(o){e.delete(o)}function n(o,a,l){e.get(o)[a]=l}function s(){e=new WeakMap}return{has:t,get:i,remove:r,update:n,dispose:s}}function c_(e,t){if(e.groupOrder!==t.groupOrder)return e.groupOrder-t.groupOrder;else if(e.renderOrder!==t.renderOrder)return e.renderOrder-t.renderOrder;else if(e.material.id!==t.material.id)return e.material.id-t.material.id;else if(e.materialVariant!==t.materialVariant)return e.materialVariant-t.materialVariant;else if(e.z!==t.z)return e.z-t.z;else return e.id-t.id}function Tm(e,t){if(e.groupOrder!==t.groupOrder)return e.groupOrder-t.groupOrder;else if(e.renderOrder!==t.renderOrder)return e.renderOrder-t.renderOrder;else if(e.z!==t.z)return t.z-e.z;else return e.id-t.id}function Em(){let e=[],t=0,i=[],r=[],n=[];function s(){t=0,i.length=0,r.length=0,n.length=0}function o(u){let p=0;if(u.isInstancedMesh)p+=2;if(u.isSkinnedMesh)p+=1;return p}function a(u,p,x,M,f,m){let b=e[t];if(b===void 0)b={id:u.id,object:u,geometry:p,material:x,materialVariant:o(u),groupOrder:M,renderOrder:u.renderOrder,z:f,group:m},e[t]=b;else b.id=u.id,b.object=u,b.geometry=p,b.material=x,b.materialVariant=o(u),b.groupOrder=M,b.renderOrder=u.renderOrder,b.z=f,b.group=m;return t++,b}function l(u,p,x,M,f,m,b){if(b.reversedDepth===!0)f=-f;let E=a(u,p,x,M,f,m);if(x.transmission>0)r.push(E);else if(x.transparent===!0)n.push(E);else i.push(E)}function c(u,p,x,M,f,m){let b=a(u,p,x,M,f,m);if(x.transmission>0)r.unshift(b);else if(x.transparent===!0)n.unshift(b);else i.unshift(b)}function h(u,p){if(i.length>1)i.sort(u||c_);if(r.length>1)r.sort(p||Tm);if(n.length>1)n.sort(p||Tm)}function d(){for(let u=t,p=e.length;u<p;u++){let x=e[u];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:i,transmissive:r,transparent:n,init:s,push:l,unshift:c,finish:d,sort:h}}function wm(){let e=new WeakMap;function t(r,n){let s=e.get(r),o;if(s===void 0)o=new Em,e.set(r,[o]);else if(n>=s.length)o=new Em,s.push(o);else o=s[n];return o}function i(){e=new WeakMap}return{get:t,dispose:i}}function h_(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let i;switch(t.type){case"SunLight":case"DirectionalLight":i={direction:new A,color:new ie};break;case"SpotLight":i={position:new A,direction:new A,color:new ie,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new A,color:new ie,distance:0,decay:0};break;case"HemisphereLight":i={direction:new A,skyColor:new ie,groundColor:new ie};break;case"RectAreaLight":i={color:new ie,position:new A,halfWidth:new A,halfHeight:new A};break}return e[t.id]=i,i}}}function u_(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let i;switch(t.type){case"SunLight":case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ee};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ee};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ee,shadowCameraNear:1,shadowCameraFar:1000};break}return e[t.id]=i,i}}}var f_=0;function d_(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function Am(e){let t=new h_,i=u_(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)r.probe.push(new A);let n=new A,s=new Ue,o=new Ue;function a(c){let h=0,d=0,u=0;for(let z=0;z<9;z++)r.probe[z].set(0,0,0);let p=0,x=0,M=0,f=0,m=0,b=0,E=0,S=0,w=0,P=0,g=0,y=0,D=0,V=0;c.sort(d_);for(let z=0,J=c.length;z<J;z++){let R=c[z],{color:X,intensity:K,distance:B}=R,ce=null;if(R.shadow&&R.shadow.map)if(R.shadow.map.texture.format===wi)ce=R.shadow.map.texture;else ce=R.shadow.map.depthTexture||R.shadow.map.texture;if(R.isAmbientLight)h+=X.r*K,d+=X.g*K,u+=X.b*K;else if(R.isLightProbe){for(let W=0;W<9;W++)r.probe[W].addScaledVector(R.sh.coefficients[W],K);V++}else if(R.isSunLight){let W=t.get(R);if(W.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let j=R.shadow,se=i.get(R);se.shadowIntensity=j.intensity,se.shadowBias=j.bias,se.shadowNormalBias=j.normalBias,se.shadowRadius=j.radius,se.shadowMapSize.copy(j.mapSize).multiply(j.getFrameExtents()),r.sunShadow[x]=se,r.sunShadowMap[x]=ce;let Re=j.getViewportCount();for(let Z=0;Z<Re;Z++)r.sunShadowMatrix[M+Z]=j.getMatrix(Z),r.sunShadowCascade[M+Z]=j._cascadeData[Z];M+=Re,x++}r.sun[p]=W,p++}else if(R.isDirectionalLight){let W=t.get(R);if(W.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let j=R.shadow,se=i.get(R);se.shadowIntensity=j.intensity,se.shadowBias=j.bias,se.shadowNormalBias=j.normalBias,se.shadowRadius=j.radius,se.shadowMapSize=j.mapSize,r.directionalShadow[f]=se,r.directionalShadowMap[f]=ce,r.directionalShadowMatrix[f]=R.shadow.matrix,w++}r.directional[f]=W,f++}else if(R.isSpotLight){let W=t.get(R);W.position.setFromMatrixPosition(R.matrixWorld),W.color.copy(X).multiplyScalar(K),W.distance=B,W.coneCos=Math.cos(R.angle),W.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),W.decay=R.decay,r.spot[b]=W;let j=R.shadow;if(R.map){if(r.spotLightMap[y]=R.map,y++,j.updateMatrices(R),R.castShadow)D++}if(r.spotLightMatrix[b]=j.matrix,R.castShadow){let se=i.get(R);se.shadowIntensity=j.intensity,se.shadowBias=j.bias,se.shadowNormalBias=j.normalBias,se.shadowRadius=j.radius,se.shadowMapSize=j.mapSize,r.spotShadow[b]=se,r.spotShadowMap[b]=ce,g++}b++}else if(R.isRectAreaLight){let W=t.get(R);W.color.copy(X).multiplyScalar(K),W.halfWidth.set(R.width*0.5,0,0),W.halfHeight.set(0,R.height*0.5,0),r.rectArea[E]=W,E++}else if(R.isPointLight){let W=t.get(R);if(W.color.copy(R.color).multiplyScalar(R.intensity),W.distance=R.distance,W.decay=R.decay,R.castShadow){let j=R.shadow,se=i.get(R);se.shadowIntensity=j.intensity,se.shadowBias=j.bias,se.shadowNormalBias=j.normalBias,se.shadowRadius=j.radius,se.shadowMapSize=j.mapSize,se.shadowCameraNear=j.camera.near,se.shadowCameraFar=j.camera.far,r.pointShadow[m]=se,r.pointShadowMap[m]=ce,r.pointShadowMatrix[m]=R.shadow.matrix,P++}r.point[m]=W,m++}else if(R.isHemisphereLight){let W=t.get(R);W.skyColor.copy(R.color).multiplyScalar(K),W.groundColor.copy(R.groundColor).multiplyScalar(K),r.hemi[S]=W,S++}}if(E>0)if(e.has("OES_texture_float_linear")===!0)r.rectAreaLTC1=me.LTC_FLOAT_1,r.rectAreaLTC2=me.LTC_FLOAT_2;else r.rectAreaLTC1=me.LTC_HALF_1,r.rectAreaLTC2=me.LTC_HALF_2;r.ambient[0]=h,r.ambient[1]=d,r.ambient[2]=u;let L=r.hash;if(L.sunLength!==p||L.directionalLength!==f||L.pointLength!==m||L.spotLength!==b||L.rectAreaLength!==E||L.hemiLength!==S||L.numSunShadows!==x||L.numDirectionalShadows!==w||L.numPointShadows!==P||L.numSpotShadows!==g||L.numSpotMaps!==y||L.numLightProbes!==V)r.sun.length=p,r.directional.length=f,r.spot.length=b,r.rectArea.length=E,r.point.length=m,r.hemi.length=S,r.sunShadow.length=x,r.sunShadowMap.length=x,r.sunShadowMatrix.length=M,r.sunShadowCascade.length=M,r.directionalShadow.length=w,r.directionalShadowMap.length=w,r.directionalShadowMatrix.length=w,r.pointShadow.length=P,r.pointShadowMap.length=P,r.pointShadowMatrix.length=P,r.spotShadow.length=g,r.spotShadowMap.length=g,r.spotLightMatrix.length=g+y-D,r.spotLightMap.length=y,r.numSpotLightShadowsWithMaps=D,r.numLightProbes=V,L.sunLength=p,L.directionalLength=f,L.pointLength=m,L.spotLength=b,L.rectAreaLength=E,L.hemiLength=S,L.numSunShadows=x,L.numDirectionalShadows=w,L.numPointShadows=P,L.numSpotShadows=g,L.numSpotMaps=y,L.numLightProbes=V,r.version=f_++}function l(c,h){let d=0,u=0,p=0,x=0,M=0,f=0,m=h.matrixWorldInverse;for(let b=0,E=c.length;b<E;b++){let S=c[b];if(S.isSunLight){let w=r.sun[d];w.direction.setFromMatrixPosition(S.matrixWorld),w.direction.transformDirection(m),d++}else if(S.isDirectionalLight){let w=r.directional[u];w.direction.setFromMatrixPosition(S.matrixWorld),n.setFromMatrixPosition(S.target.matrixWorld),w.direction.sub(n),w.direction.transformDirection(m),u++}else if(S.isSpotLight){let w=r.spot[x];w.position.setFromMatrixPosition(S.matrixWorld),w.position.applyMatrix4(m),w.direction.setFromMatrixPosition(S.matrixWorld),n.setFromMatrixPosition(S.target.matrixWorld),w.direction.sub(n),w.direction.transformDirection(m),x++}else if(S.isRectAreaLight){let w=r.rectArea[M];w.position.setFromMatrixPosition(S.matrixWorld),w.position.applyMatrix4(m),o.identity(),s.copy(S.matrixWorld),s.premultiply(m),o.extractRotation(s),w.halfWidth.set(S.width*0.5,0,0),w.halfHeight.set(0,S.height*0.5,0),w.halfWidth.applyMatrix4(o),w.halfHeight.applyMatrix4(o),M++}else if(S.isPointLight){let w=r.point[p];w.position.setFromMatrixPosition(S.matrixWorld),w.position.applyMatrix4(m),p++}else if(S.isHemisphereLight){let w=r.hemi[f];w.direction.setFromMatrixPosition(S.matrixWorld),w.direction.transformDirection(m),f++}}}return{setup:a,setupView:l,state:r}}function Rm(e){let t=new Am(e),i=[],r=[],n=[];function s(d){h.camera=d,i.length=0,r.length=0,n.length=0}function o(d){if(d.isLightProbeGrid)n.push(d);else i.push(d)}function a(d){r.push(d)}function l(){t.setup(i),n.sort((d,u)=>d.priority-u.priority||d.id-u.id)}function c(d){t.setupView(i,d)}let h={lightsArray:i,shadowsArray:r,lightProbeGridArray:n,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:h,setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function Cm(e){let t=new WeakMap;function i(n,s=0){let o=t.get(n),a;if(o===void 0)a=new Rm(e),t.set(n,[a]);else if(s>=o.length)a=new Rm(e),o.push(a);else a=o[s];return a}function r(){t=new WeakMap}return{get:i,dispose:r}}var Pm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}
`,Im=`
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
`;var m_=[new A(1,0,0),new A(-1,0,0),new A(0,1,0),new A(0,-1,0),new A(0,0,1),new A(0,0,-1)],g_=[new A(0,-1,0),new A(0,-1,0),new A(0,0,1),new A(0,0,-1),new A(0,-1,0),new A(0,-1,0)],Lm=new Ue,aa=new A,Yc=new A;function Dm(e,t,i){let r=new Gi,n=new ee,s=new ee,o=new tt,a=new Qo,l=new $o,c={},h=i.maxTextureSize,d={[Ni]:dt,[dt]:Ni,[Ht]:Ht},u=new _t({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ee},radius:{value:4}},vertexShader:Pm,fragmentShader:Im}),p=u.clone();p.defines.HORIZONTAL_PASS=1;let x=new Le;x.setAttribute("position",new Ft(new Float32Array([-1,-1,0.5,3,-1,0.5,-1,3,0.5]),3));let M=new we(x,u),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=zn;let m=this.type;this.render=function(P,g,y){if(f.enabled===!1)return;if(f.autoUpdate===!1&&f.needsUpdate===!1)return;if(P.length===0)return;if(this.type===yh)le("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=zn;let D=e.getRenderTarget(),V=e.getActiveCubeFace(),L=e.getActiveMipmapLevel(),z=e.state;if(z.setBlending(Ui),z.buffers.depth.getReversed()===!0)z.buffers.color.setClear(0,0,0,0);else z.buffers.color.setClear(1,1,1,1);z.buffers.depth.setTest(!0),z.setScissorTest(!1);let J=m!==this.type;if(J)g.traverse(function(R){if(R.material)if(Array.isArray(R.material))R.material.forEach((X)=>X.needsUpdate=!0);else R.material.needsUpdate=!0});for(let R=0,X=P.length;R<X;R++){let K=P[R],B=K.shadow;if(B===void 0){le("WebGLShadowMap:",K,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;n.copy(B.mapSize);let ce=B.getFrameExtents();if(n.multiply(ce),s.copy(B.mapSize),n.x>h||n.y>h){if(n.x>h)s.x=Math.floor(h/ce.x),n.x=s.x*ce.x,B.mapSize.x=s.x;if(n.y>h)s.y=Math.floor(h/ce.y),n.y=s.y*ce.y,B.mapSize.y=s.y}let W=e.state.buffers.depth.getReversed();if(B.camera._reversedDepth=W,B.map===null||J===!0){if(B.map!==null){if(B.map.depthTexture!==null)B.map.depthTexture.dispose(),B.map.depthTexture=null;B.map.dispose()}if(this.type===nn){if(K.isPointLight){le("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}B.map=new pt(n.x,n.y,{format:wi,type:xt,minFilter:gt,magFilter:gt,generateMipmaps:!1}),B.map.texture.name=K.name+".shadowMap",B.map.depthTexture=new Ii(n.x,n.y,Et),B.map.depthTexture.name=K.name+".shadowMapDepth",B.map.depthTexture.format=_i,B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=ut,B.map.depthTexture.magFilter=ut}else{if(K.isPointLight)B.map=new Jr(n.x),B.map.depthTexture=new ws(n.x,Lt);else B.map=new pt(n.x,n.y),B.map.depthTexture=new Ii(n.x,n.y,Lt);if(B.map.depthTexture.name=K.name+".shadowMap",B.map.depthTexture.format=_i,this.type===zn)B.map.depthTexture.compareFunction=W?Na:Da,B.map.depthTexture.minFilter=gt,B.map.depthTexture.magFilter=gt;else B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=ut,B.map.depthTexture.magFilter=ut}B.camera.updateProjectionMatrix()}if(B.map.isWebGLCubeRenderTarget!==!0&&(B.map.width!==n.x||B.map.height!==n.y))B.map.setSize(n.x,n.y);let j=B.map.isWebGLCubeRenderTarget?6:B.getViewportCount();if(K.isPointLight!==!0)B.updateMatrices(K,y);let se=(B.camera.layers.mask&4294967294)!==0?B.camera.layers:y.layers;for(let Re=0;Re<j;Re++){let Z=B.getCamera(Re);if(K.isPointLight){let{camera:ne,matrix:Te}=B,Fe=K.distance||ne.far;if(Fe!==ne.far)ne.far=Fe,ne.updateProjectionMatrix();aa.setFromMatrixPosition(K.matrixWorld),ne.position.copy(aa),Yc.copy(ne.position),Yc.add(m_[Re]),ne.up.copy(g_[Re]),ne.lookAt(Yc),ne.updateMatrixWorld(),Te.makeTranslation(-aa.x,-aa.y,-aa.z),Lm.multiplyMatrices(ne.projectionMatrix,ne.matrixWorldInverse),B._frustum.setFromProjectionMatrix(Lm,ne.coordinateSystem,ne.reversedDepth)}if(B.map.isWebGLCubeRenderTarget)e.setRenderTarget(B.map,Re),e.clear();else{if(Re===0)e.setRenderTarget(B.map),e.clear();let ne=B.getViewport(Re);o.set(s.x*ne.x,s.y*ne.y,s.x*ne.z,s.y*ne.w),z.viewport(o)}r=B.getFrustum(Re),S(g,y,Z,K,se,this.type)}if(B.isPointLightShadow!==!0&&this.type===nn)b(B,y);B.needsUpdate=!1}m=this.type,f.needsUpdate=!1,e.setRenderTarget(D,V,L)};function b(P,g){let y=t.update(M);if(u.defines.VSM_SAMPLES!==P.blurSamples)u.defines.VSM_SAMPLES=P.blurSamples,p.defines.VSM_SAMPLES=P.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0;if(P.mapPass===null)P.mapPass=new pt(n.x,n.y,{format:wi,type:xt});else if(P.mapPass.width!==P.map.width||P.mapPass.height!==P.map.height)P.mapPass.setSize(P.map.width,P.map.height);u.uniforms.shadow_pass.value=P.map.depthTexture,u.uniforms.resolution.value.set(P.map.width,P.map.height),u.uniforms.radius.value=P.radius,e.setRenderTarget(P.mapPass),e.clear(),e.renderBufferDirect(g,null,y,u,M,null),p.uniforms.shadow_pass.value=P.mapPass.texture,p.uniforms.resolution.value.set(P.map.width,P.map.height),p.uniforms.radius.value=P.radius,e.setRenderTarget(P.map),e.clear(),e.renderBufferDirect(g,null,y,p,M,null)}function E(P,g,y,D){let V=null,L=y.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(L!==void 0)V=L;else if(V=y.isPointLight===!0?l:a,e.localClippingEnabled&&g.clipShadows===!0&&Array.isArray(g.clippingPlanes)&&g.clippingPlanes.length!==0||g.displacementMap&&g.displacementScale!==0||g.alphaMap&&g.alphaTest>0||g.map&&g.alphaTest>0||g.alphaToCoverage===!0){let z=V.uuid,J=g.uuid,R=c[z];if(R===void 0)R={},c[z]=R;let X=R[J];if(X===void 0)X=V.clone(),R[J]=X,g.addEventListener("dispose",w);V=X}if(V.visible=g.visible,V.wireframe=g.wireframe,D===nn)V.side=g.shadowSide!==null?g.shadowSide:g.side;else V.side=g.shadowSide!==null?g.shadowSide:d[g.side];if(V.alphaMap=g.alphaMap,V.alphaTest=g.alphaToCoverage===!0?0.5:g.alphaTest,V.map=g.map,V.clipShadows=g.clipShadows,V.clippingPlanes=g.clippingPlanes,V.clipIntersection=g.clipIntersection,V.displacementMap=g.displacementMap,V.displacementScale=g.displacementScale,V.displacementBias=g.displacementBias,V.wireframeLinewidth=g.wireframeLinewidth,V.linewidth=g.linewidth,y.isPointLight===!0&&V.isMeshDistanceMaterial===!0){let z=e.properties.get(V);z.light=y}return V}function S(P,g,y,D,V,L){if(P.visible===!1)return;if(P.layers.test(V)&&(P.isMesh||P.isLine||P.isPoints)){if((P.castShadow||P.receiveShadow&&L===nn)&&(!P.frustumCulled||P.intersectsFrustum(r))){P.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,P.matrixWorld);let R=t.update(P),X=P.material;if(Array.isArray(X)){let K=R.groups;for(let B=0,ce=K.length;B<ce;B++){let W=K[B],j=X[W.materialIndex];if(j&&j.visible){let se=E(P,j,D,L);P.onBeforeShadow(e,P,g,y,R,se,W),e.renderBufferDirect(y,null,R,se,P,W),P.onAfterShadow(e,P,g,y,R,se,W)}}}else if(X.visible){let K=E(P,X,D,L);P.onBeforeShadow(e,P,g,y,R,K,null),e.renderBufferDirect(y,null,R,K,P,null),P.onAfterShadow(e,P,g,y,R,K,null)}}}let J=P.children;for(let R=0,X=J.length;R<X;R++)S(J[R],g,y,D,V,L)}function w(P){P.target.removeEventListener("dispose",w);for(let y in c){let D=c[y],V=P.target.uuid;if(V in D)D[V].dispose(),delete D[V]}}}function Nm(e,t){function i(){let C=!1,q=new tt,H=null,re=new tt(0,0,0,0);return{setMask:function(oe){if(H!==oe&&!C)e.colorMask(oe,oe,oe,oe),H=oe},setLocked:function(oe){C=oe},setClear:function(oe,pe,De,Pe,xe){if(xe===!0)oe*=Pe,pe*=Pe,De*=Pe;if(q.set(oe,pe,De,Pe),re.equals(q)===!1)e.clearColor(oe,pe,De,Pe),re.copy(q)},reset:function(){C=!1,H=null,re.set(-1,0,0,0)}}}function r(){let C=!1,q=!1,H=null,re=null,oe=null;return{setReversed:function(pe){if(q!==pe){let De=t.get("EXT_clip_control");if(pe)De.clipControlEXT(De.LOWER_LEFT_EXT,De.ZERO_TO_ONE_EXT);else De.clipControlEXT(De.LOWER_LEFT_EXT,De.NEGATIVE_ONE_TO_ONE_EXT);q=pe;let Pe=oe;oe=null,this.setClear(Pe)}},getReversed:function(){return q},setTest:function(pe){if(pe)Ee(e.DEPTH_TEST);else nt(e.DEPTH_TEST)},setMask:function(pe){if(H!==pe&&!C)e.depthMask(pe),H=pe},setFunc:function(pe){if(q)pe=jh[pe];if(re!==pe){switch(pe){case Ws:e.depthFunc(e.NEVER);break;case Xs:e.depthFunc(e.ALWAYS);break;case qs:e.depthFunc(e.LESS);break;case Dr:e.depthFunc(e.LEQUAL);break;case Ys:e.depthFunc(e.EQUAL);break;case Zs:e.depthFunc(e.GEQUAL);break;case Js:e.depthFunc(e.GREATER);break;case Ks:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}re=pe}},setLocked:function(pe){C=pe},setClear:function(pe){if(oe!==pe){if(oe=pe,q)pe=1-pe;e.clearDepth(pe)}},reset:function(){C=!1,H=null,re=null,oe=null,q=!1}}}function n(){let C=!1,q=null,H=null,re=null,oe=null,pe=null,De=null,Pe=null,xe=null;return{setTest:function(Ne){if(!C)if(Ne)Ee(e.STENCIL_TEST);else nt(e.STENCIL_TEST)},setMask:function(Ne){if(q!==Ne&&!C)e.stencilMask(Ne),q=Ne},setFunc:function(Ne,qe,_e){if(H!==Ne||re!==qe||oe!==_e)e.stencilFunc(Ne,qe,_e),H=Ne,re=qe,oe=_e},setOp:function(Ne,qe,_e){if(pe!==Ne||De!==qe||Pe!==_e)e.stencilOp(Ne,qe,_e),pe=Ne,De=qe,Pe=_e},setLocked:function(Ne){C=Ne},setClear:function(Ne){if(xe!==Ne)e.clearStencil(Ne),xe=Ne},reset:function(){C=!1,q=null,H=null,re=null,oe=null,pe=null,De=null,Pe=null,xe=null}}}let s=new i,o=new r,a=new n,l={},c=new WeakMap,h={},d={},u={},p=new WeakMap,x=[],M=null,f=!1,m=null,b=null,E=null,S=null,w=null,P=null,g=null,y=new ie(0,0,0),D=0,V=!1,L=null,z=null,J=null,R=null,X=null,K=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),B=!1,ce=0,W=e.getParameter(e.VERSION);if(W.indexOf("WebGL")!==-1)ce=parseFloat(/^WebGL (\d)/.exec(W)[1]),B=ce>=1;else if(W.indexOf("OpenGL ES")!==-1)ce=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),B=ce>=2;let j=null,se={},Re=e.getParameter(e.SCISSOR_BOX),Z=e.getParameter(e.VIEWPORT),ne=new tt().fromArray(Re),Te=new tt().fromArray(Z);function Fe(C,q,H,re){let oe=new Uint8Array(4),pe=e.createTexture();e.bindTexture(C,pe),e.texParameteri(C,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(C,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let De=0;De<H;De++)if(C===e.TEXTURE_3D||C===e.TEXTURE_2D_ARRAY)e.texImage3D(q,0,e.RGBA,1,1,re,0,e.RGBA,e.UNSIGNED_BYTE,oe);else e.texImage2D(q+De,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,oe);return pe}let Oe={};Oe[e.TEXTURE_2D]=Fe(e.TEXTURE_2D,e.TEXTURE_2D,1),Oe[e.TEXTURE_CUBE_MAP]=Fe(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),Oe[e.TEXTURE_2D_ARRAY]=Fe(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),Oe[e.TEXTURE_3D]=Fe(e.TEXTURE_3D,e.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),Ee(e.DEPTH_TEST),o.setFunc(Dr),bi(!1),Ct(jl),Ee(e.CULL_FACE),Rt(Ui);function Ee(C){if(h[C]!==!0)e.enable(C),h[C]=!0}function nt(C){if(h[C]!==!1)e.disable(C),h[C]=!1}function Ze(C,q){if(u[C]!==q){if(e.bindFramebuffer(C,q),u[C]=q,C===e.DRAW_FRAMEBUFFER)u[e.FRAMEBUFFER]=q;if(C===e.FRAMEBUFFER)u[e.DRAW_FRAMEBUFFER]=q;return!0}return!1}function Xe(C,q){let H=x,re=!1;if(C){if(H=p.get(q),H===void 0)H=[],p.set(q,H);let oe=C.textures;if(H.length!==oe.length||H[0]!==e.COLOR_ATTACHMENT0){for(let pe=0,De=oe.length;pe<De;pe++)H[pe]=e.COLOR_ATTACHMENT0+pe;H.length=oe.length,re=!0}}else if(H[0]!==e.BACK)H[0]=e.BACK,re=!0;if(re)e.drawBuffers(H)}function ft(C){if(M!==C)return e.useProgram(C),M=C,!0;return!1}let $e={[Lr]:e.FUNC_ADD,[Sh]:e.FUNC_SUBTRACT,[bh]:e.FUNC_REVERSE_SUBTRACT};$e[Th]=e.MIN,$e[Eh]=e.MAX;let bt={[wh]:e.ZERO,[Ah]:e.ONE,[Rh]:e.SRC_COLOR,[_a]:e.SRC_ALPHA,[Nh]:e.SRC_ALPHA_SATURATE,[Lh]:e.DST_COLOR,[Ph]:e.DST_ALPHA,[Ch]:e.ONE_MINUS_SRC_COLOR,[va]:e.ONE_MINUS_SRC_ALPHA,[Dh]:e.ONE_MINUS_DST_COLOR,[Ih]:e.ONE_MINUS_DST_ALPHA,[Uh]:e.CONSTANT_COLOR,[Fh]:e.ONE_MINUS_CONSTANT_COLOR,[Oh]:e.CONSTANT_ALPHA,[Bh]:e.ONE_MINUS_CONSTANT_ALPHA};function Rt(C,q,H,re,oe,pe,De,Pe,xe,Ne){if(C===Ui){if(f===!0)nt(e.BLEND),f=!1;return}if(f===!1)Ee(e.BLEND),f=!0;if(C!==Mh){if(C!==m||Ne!==V){if(b!==Lr||w!==Lr)e.blendEquation(e.FUNC_ADD),b=Lr,w=Lr;if(Ne)switch(C){case Ir:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case sn:e.blendFunc(e.ONE,e.ONE);break;case ec:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case tc:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:ye("WebGLState: Invalid blending: ",C);break}else switch(C){case Ir:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case sn:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case ec:ye("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case tc:ye("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ye("WebGLState: Invalid blending: ",C);break}E=null,S=null,P=null,g=null,y.set(0,0,0),D=0,m=C,V=Ne}return}if(oe=oe||q,pe=pe||H,De=De||re,q!==b||oe!==w)e.blendEquationSeparate($e[q],$e[oe]),b=q,w=oe;if(H!==E||re!==S||pe!==P||De!==g)e.blendFuncSeparate(bt[H],bt[re],bt[pe],bt[De]),E=H,S=re,P=pe,g=De;if(Pe.equals(y)===!1||xe!==D)e.blendColor(Pe.r,Pe.g,Pe.b,xe),y.copy(Pe),D=xe;m=C,V=!1}function mi(C,q){C.side===Ht?nt(e.CULL_FACE):Ee(e.CULL_FACE);let H=C.side===dt;if(q)H=!H;bi(H),C.blending===Ir&&C.transparent===!1?Rt(Ui):Rt(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.blendColor,C.blendAlpha,C.premultipliedAlpha),o.setFunc(C.depthFunc),o.setTest(C.depthTest),o.setMask(C.depthWrite),s.setMask(C.colorWrite);let re=C.stencilWrite;if(a.setTest(re),re)a.setMask(C.stencilWriteMask),a.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),a.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass);gi(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?Ee(e.SAMPLE_ALPHA_TO_COVERAGE):nt(e.SAMPLE_ALPHA_TO_COVERAGE)}function bi(C){if(L!==C){if(C)e.frontFace(e.CW);else e.frontFace(e.CCW);L=C}}function Ct(C){if(C!==_h){if(Ee(e.CULL_FACE),C!==z)if(C===jl)e.cullFace(e.BACK);else if(C===vh)e.cullFace(e.FRONT);else e.cullFace(e.FRONT_AND_BACK)}else nt(e.CULL_FACE);z=C}function ti(C){if(C!==J){if(B)e.lineWidth(C);J=C}}function gi(C,q,H){if(C){if(Ee(e.POLYGON_OFFSET_FILL),R!==q||X!==H){if(R=q,X=H,o.getReversed())q=-q,H=-H;e.polygonOffset(q,H)}}else nt(e.POLYGON_OFFSET_FILL)}function xi(C){if(C)Ee(e.SCISSOR_TEST);else nt(e.SCISSOR_TEST)}function Zi(C){if(C===void 0)C=e.TEXTURE0+K-1;if(j!==C)e.activeTexture(C),j=C}function N(C,q,H){if(H===void 0)if(j===null)H=e.TEXTURE0+K-1;else H=j;let re=se[H];if(re===void 0)re={type:void 0,texture:void 0},se[H]=re;if(re.type!==C||re.texture!==q){if(j!==H)e.activeTexture(H),j=H;e.bindTexture(C,q||Oe[C]),re.type=C,re.texture=q}}function Ji(){let C=se[j];if(C!==void 0&&C.type!==void 0)e.bindTexture(C.type,null),C.type=void 0,C.texture=void 0}function st(){try{e.compressedTexImage2D(...arguments)}catch(C){ye("WebGLState:",C)}}function Gt(){try{e.compressedTexImage3D(...arguments)}catch(C){ye("WebGLState:",C)}}function ge(){try{e.texSubImage2D(...arguments)}catch(C){ye("WebGLState:",C)}}function ct(){try{e.texSubImage3D(...arguments)}catch(C){ye("WebGLState:",C)}}function Be(){try{e.compressedTexSubImage2D(...arguments)}catch(C){ye("WebGLState:",C)}}function Ve(){try{e.compressedTexSubImage3D(...arguments)}catch(C){ye("WebGLState:",C)}}function ii(){try{e.texStorage2D(...arguments)}catch(C){ye("WebGLState:",C)}}function T(){try{e.texStorage3D(...arguments)}catch(C){ye("WebGLState:",C)}}function _(){try{e.texImage2D(...arguments)}catch(C){ye("WebGLState:",C)}}function U(){try{e.texImage3D(...arguments)}catch(C){ye("WebGLState:",C)}}function te(C){if(d[C]!==void 0)return d[C];else return e.getParameter(C)}function Q(C,q){if(d[C]!==q)e.pixelStorei(C,q),d[C]=q}function ae(C){if(ne.equals(C)===!1)e.scissor(C.x,C.y,C.z,C.w),ne.copy(C)}function ue(C){if(Te.equals(C)===!1)e.viewport(C.x,C.y,C.z,C.w),Te.copy(C)}function k(C,q){let H=c.get(q);if(H===void 0)H=new WeakMap,c.set(q,H);let re=H.get(C);if(re===void 0)re=e.getUniformBlockIndex(q,C.name),e.uniformBlockBinding(q,re,re),H.set(C,re)}function Y(C,q,H){let oe=c.get(q).get(C);if(l[oe]!==H)e.bindBufferBase(e.UNIFORM_BUFFER,oe,H),l[oe]=H}function he(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),h={},d={},j=null,se={},u={},l={},p=new WeakMap,x=[],M=null,f=!1,m=null,b=null,E=null,S=null,w=null,P=null,g=null,y=new ie(0,0,0),D=0,V=!1,L=null,z=null,J=null,R=null,X=null,ne.set(0,0,e.canvas.width,e.canvas.height),Te.set(0,0,e.canvas.width,e.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:Ee,disable:nt,bindFramebuffer:Ze,drawBuffers:Xe,useProgram:ft,setBlending:Rt,setMaterial:mi,setFlipSided:bi,setCullFace:Ct,setLineWidth:ti,setPolygonOffset:gi,setScissorTest:xi,activeTexture:Zi,bindTexture:N,unbindTexture:Ji,compressedTexImage2D:st,compressedTexImage3D:Gt,texImage2D:_,texImage3D:U,pixelStorei:Q,getParameter:te,updateUBOMapping:k,uniformBlockBinding:Y,texStorage2D:ii,texStorage3D:T,texSubImage2D:ge,texSubImage3D:ct,compressedTexSubImage2D:Be,compressedTexSubImage3D:Ve,scissor:ae,viewport:ue,reset:he}}function Um(e,t,i,r,n,s,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ee,h=new WeakMap,d=new Set,u,p=new WeakMap,x=new Set,M=new FinalizationRegistry((T)=>x.delete(T)),f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(T){}function m(T,_){return f?new OffscreenCanvas(T,_):Fr("canvas")}function b(T,_,U){let te=1,Q=ii(T);if(Q.width>U||Q.height>U)te=U/Math.max(Q.width,Q.height);if(te<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){let ae=Math.floor(te*Q.width),ue=Math.floor(te*Q.height);if(u===void 0)u=m(ae,ue);let k=_?m(ae,ue):u;return k.width=ae,k.height=ue,k.getContext("2d").drawImage(T,0,0,ae,ue),le("WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+ae+"x"+ue+")."),k}else{if("data"in T)le("WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+").");return T}return T}function E(T){return T.generateMipmaps}function S(T){e.generateMipmap(T)}function w(T){if(T.isWebGLCubeRenderTarget)return e.TEXTURE_CUBE_MAP;if(T.isWebGL3DRenderTarget)return e.TEXTURE_3D;if(T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture)return e.TEXTURE_2D_ARRAY;return e.TEXTURE_2D}function P(T,_,U,te,Q,ae=!1){if(T!==null){if(e[T]!==void 0)return e[T];le("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let ue;if(te){if(ue=t.get("EXT_texture_norm16"),!ue)le("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension")}let k=_;if(_===e.RED){if(U===e.FLOAT)k=e.R32F;if(U===e.HALF_FLOAT)k=e.R16F;if(U===e.UNSIGNED_BYTE)k=e.R8;if(U===e.UNSIGNED_SHORT&&ue)k=ue.R16_EXT;if(U===e.SHORT&&ue)k=ue.R16_SNORM_EXT}if(_===e.RED_INTEGER){if(U===e.UNSIGNED_BYTE)k=e.R8UI;if(U===e.UNSIGNED_SHORT)k=e.R16UI;if(U===e.UNSIGNED_INT)k=e.R32UI;if(U===e.BYTE)k=e.R8I;if(U===e.SHORT)k=e.R16I;if(U===e.INT)k=e.R32I}if(_===e.RG){if(U===e.FLOAT)k=e.RG32F;if(U===e.HALF_FLOAT)k=e.RG16F;if(U===e.UNSIGNED_BYTE)k=e.RG8;if(U===e.UNSIGNED_SHORT&&ue)k=ue.RG16_EXT;if(U===e.SHORT&&ue)k=ue.RG16_SNORM_EXT}if(_===e.RG_INTEGER){if(U===e.UNSIGNED_BYTE)k=e.RG8UI;if(U===e.UNSIGNED_SHORT)k=e.RG16UI;if(U===e.UNSIGNED_INT)k=e.RG32UI;if(U===e.BYTE)k=e.RG8I;if(U===e.SHORT)k=e.RG16I;if(U===e.INT)k=e.RG32I}if(_===e.RGB_INTEGER){if(U===e.UNSIGNED_BYTE)k=e.RGB8UI;if(U===e.UNSIGNED_SHORT)k=e.RGB16UI;if(U===e.UNSIGNED_INT)k=e.RGB32UI;if(U===e.BYTE)k=e.RGB8I;if(U===e.SHORT)k=e.RGB16I;if(U===e.INT)k=e.RGB32I}if(_===e.RGBA_INTEGER){if(U===e.UNSIGNED_BYTE)k=e.RGBA8UI;if(U===e.UNSIGNED_SHORT)k=e.RGBA16UI;if(U===e.UNSIGNED_INT)k=e.RGBA32UI;if(U===e.BYTE)k=e.RGBA8I;if(U===e.SHORT)k=e.RGBA16I;if(U===e.INT)k=e.RGBA32I}if(_===e.RGB){if(U===e.UNSIGNED_SHORT&&ue)k=ue.RGB16_EXT;if(U===e.SHORT&&ue)k=ue.RGB16_SNORM_EXT;if(U===e.UNSIGNED_INT_5_9_9_9_REV)k=e.RGB9_E5;if(U===e.UNSIGNED_INT_10F_11F_11F_REV)k=e.R11F_G11F_B10F}if(_===e.RGBA){let Y=ae?fn:Ge.getTransfer(Q);if(U===e.FLOAT)k=e.RGBA32F;if(U===e.HALF_FLOAT)k=e.RGBA16F;if(U===e.UNSIGNED_BYTE)k=Y===Je?e.SRGB8_ALPHA8:e.RGBA8;if(U===e.UNSIGNED_SHORT&&ue)k=ue.RGBA16_EXT;if(U===e.SHORT&&ue)k=ue.RGBA16_SNORM_EXT;if(U===e.UNSIGNED_SHORT_4_4_4_4)k=e.RGBA4;if(U===e.UNSIGNED_SHORT_5_5_5_1)k=e.RGB5_A1}if(k===e.R16F||k===e.R32F||k===e.RG16F||k===e.RG32F||k===e.RGBA16F||k===e.RGBA32F)t.get("EXT_color_buffer_float");return k}function g(T,_){let U;if(T){if(_===null||_===Lt||_===Qi)U=e.DEPTH24_STENCIL8;else if(_===Et)U=e.DEPTH32F_STENCIL8;else if(_===_r)U=e.DEPTH24_STENCIL8,le("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")}else if(_===null||_===Lt||_===Qi)U=e.DEPTH_COMPONENT24;else if(_===Et)U=e.DEPTH_COMPONENT32F;else if(_===_r)U=e.DEPTH_COMPONENT16;return U}function y(T,_){if(E(T)===!0||T.isFramebufferTexture&&T.minFilter!==ut&&T.minFilter!==gt)return Math.log2(Math.max(_.width,_.height))+1;else if(T.mipmaps.length>0)return T.mipmaps.length;else if(T.isCompressedTexture&&Array.isArray(T.image))return _.mipmaps.length;else return 1}function D(T){let _=new WeakRef(T);r.get(T).__ref=_,x.add(_),M.register(T,_,_)}function V(T){let _=r.get(T).__ref;if(_===void 0)return;x.delete(_),M.unregister(_)}function L(T){J(T.target)}function z(T){R(T.target)}function J(T){if(T.removeEventListener("dispose",L),V(T),K(T),T.isVideoTexture)h.delete(T);if(T.isHTMLTexture)d.delete(T)}function R(T){T.removeEventListener("dispose",z),V(T),ce(T)}function X(){for(let T of x){let _=T.deref();if(_===void 0)continue;if(_.isRenderTarget===!0)R(_);else J(_)}x.clear(),d.clear()}function K(T){let _=r.get(T);if(_.__webglInit===void 0)return;let U=T.source,te=p.get(U);if(te){let Q=te[_.__cacheKey];if(Q.usedTimes--,Q.usedTimes===0)B(T);if(Object.keys(te).length===0)p.delete(U)}r.remove(T)}function B(T){let _=r.get(T);e.deleteTexture(_.__webglTexture);let U=T.source,te=p.get(U);delete te[_.__cacheKey],o.memory.textures--}function ce(T){let _=r.get(T);if(_.__depthDisposeCallback)_.__depthDisposeCallback();let U=T.depthTexture;if(U&&U.renderTarget===T)J(U);if(T.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(_.__webglFramebuffer[Q]))for(let ae=0;ae<_.__webglFramebuffer[Q].length;ae++)e.deleteFramebuffer(_.__webglFramebuffer[Q][ae]);else e.deleteFramebuffer(_.__webglFramebuffer[Q]);if(_.__webglDepthbuffer)e.deleteRenderbuffer(_.__webglDepthbuffer[Q])}else{if(Array.isArray(_.__webglFramebuffer))for(let Q=0;Q<_.__webglFramebuffer.length;Q++)e.deleteFramebuffer(_.__webglFramebuffer[Q]);else e.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer)e.deleteRenderbuffer(_.__webglDepthbuffer);if(_.__webglMultisampledFramebuffer)e.deleteFramebuffer(_.__webglMultisampledFramebuffer);if(_.__webglColorRenderbuffer){for(let Q=0;Q<_.__webglColorRenderbuffer.length;Q++)if(_.__webglColorRenderbuffer[Q])e.deleteRenderbuffer(_.__webglColorRenderbuffer[Q])}if(_.__webglDepthRenderbuffer)e.deleteRenderbuffer(_.__webglDepthRenderbuffer)}let te=T.textures;for(let Q=0,ae=te.length;Q<ae;Q++){let ue=r.get(te[Q]);if(ue.__webglTexture)e.deleteTexture(ue.__webglTexture),o.memory.textures--;r.remove(te[Q])}r.remove(T)}let W=0;function j(){W=0}function se(){return W}function Re(T){W=T}function Z(){let T=W;if(T>=n.maxTextures)le("WebGLTextures: Trying to use "+(T+1)+" texture units while this GPU supports only "+n.maxTextures);return W+=1,T}function ne(T){let _=[];return _.push(T.wrapS),_.push(T.wrapT),_.push(T.wrapR||0),_.push(T.magFilter),_.push(T.minFilter),_.push(T.anisotropy),_.push(T.internalFormat),_.push(T.format),_.push(T.type),_.push(T.generateMipmaps),_.push(T.mipmapsAutoUpdate),_.push(T.premultiplyAlpha),_.push(T.flipY),_.push(T.unpackAlignment),_.push(T.colorSpace),_.join()}function Te(T,_){let U=r.get(T);if(T.isVideoTexture)Be(T);if(T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&U.__version!==T.version){let te=T.image;if(te===null)le("WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)le("WebGLRenderer: Texture marked for update but image is incomplete");else{mi(U,T,_);return}}else if(T.isExternalTexture)U.__webglTexture=T.sourceTexture?T.sourceTexture:null;i.bindTexture(e.TEXTURE_2D,U.__webglTexture,e.TEXTURE0+_)}function Fe(T,_){let U=r.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&U.__version!==T.version){mi(U,T,_);return}else if(T.isExternalTexture)U.__webglTexture=T.sourceTexture?T.sourceTexture:null;i.bindTexture(e.TEXTURE_2D_ARRAY,U.__webglTexture,e.TEXTURE0+_)}function Oe(T,_){let U=r.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&U.__version!==T.version){mi(U,T,_);return}i.bindTexture(e.TEXTURE_3D,U.__webglTexture,e.TEXTURE0+_)}function Ee(T,_){let U=r.get(T);if(T.version>0&&U.__version!==T.version){bi(U,T,_);return}i.bindTexture(e.TEXTURE_CUBE_MAP,U.__webglTexture,e.TEXTURE0+_)}let nt={[Ur]:e.REPEAT,[Kt]:e.CLAMP_TO_EDGE,[qn]:e.MIRRORED_REPEAT},Ze={[ut]:e.NEAREST,[ic]:e.NEAREST_MIPMAP_NEAREST,[Yn]:e.NEAREST_MIPMAP_LINEAR,[gt]:e.LINEAR,[js]:e.LINEAR_MIPMAP_NEAREST,[ui]:e.LINEAR_MIPMAP_LINEAR},Xe={[Wh]:e.NEVER,[Ua]:e.ALWAYS,[Xh]:e.LESS,[Da]:e.LEQUAL,[qh]:e.EQUAL,[Na]:e.GEQUAL,[Yh]:e.GREATER,[Zh]:e.NOTEQUAL};function ft(T,_){if(_.type===Et&&t.has("OES_texture_float_linear")===!1&&(_.magFilter===gt||_.magFilter===js||_.magFilter===Yn||_.magFilter===ui||_.minFilter===gt||_.minFilter===js||_.minFilter===Yn||_.minFilter===ui))le("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.");if(e.texParameteri(T,e.TEXTURE_WRAP_S,nt[_.wrapS]),e.texParameteri(T,e.TEXTURE_WRAP_T,nt[_.wrapT]),T===e.TEXTURE_3D||T===e.TEXTURE_2D_ARRAY)e.texParameteri(T,e.TEXTURE_WRAP_R,nt[_.wrapR]);if(e.texParameteri(T,e.TEXTURE_MAG_FILTER,Ze[_.magFilter]),e.texParameteri(T,e.TEXTURE_MIN_FILTER,Ze[_.minFilter]),_.compareFunction)e.texParameteri(T,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(T,e.TEXTURE_COMPARE_FUNC,Xe[_.compareFunction]);if(t.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===ut)return;if(_.minFilter!==Yn&&_.minFilter!==ui)return;if(_.type===Et&&t.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||r.get(_).__currentAnisotropy){let U=t.get("EXT_texture_filter_anisotropic");e.texParameterf(T,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,n.getMaxAnisotropy())),r.get(_).__currentAnisotropy=_.anisotropy}}}function $e(T,_){let U=!1;if(T.__webglInit===void 0)T.__webglInit=!0,_.addEventListener("dispose",L),D(_);let te=_.source,Q=p.get(te);if(Q===void 0)Q={},p.set(te,Q);let ae=ne(_);if(ae!==T.__cacheKey){if(Q[ae]===void 0)Q[ae]={texture:e.createTexture(),usedTimes:0},o.memory.textures++,U=!0;Q[ae].usedTimes++;let ue=Q[T.__cacheKey];if(ue!==void 0){if(Q[T.__cacheKey].usedTimes--,ue.usedTimes===0)B(_)}T.__cacheKey=ae,T.__webglTexture=Q[ae].texture}return U}function bt(T,_,U){return Math.floor(Math.floor(T/U)/_)}function Rt(T,_,U,te){let ae=T.updateRanges;if(ae.length===0)i.texSubImage2D(e.TEXTURE_2D,0,0,0,_.width,_.height,U,te,_.data);else{ae.sort((C,q)=>C.start-q.start);let ue=0;for(let C=1;C<ae.length;C++){let q=ae[ue],H=ae[C],re=q.start+q.count,oe=bt(H.start,_.width,4),pe=bt(q.start,_.width,4);if(H.start<=re+1&&oe===pe&&bt(H.start+H.count-1,_.width,4)===oe)q.count=Math.max(q.count,H.start+H.count-q.start);else++ue,ae[ue]=H}ae.length=ue+1;let k=i.getParameter(e.UNPACK_ROW_LENGTH),Y=i.getParameter(e.UNPACK_SKIP_PIXELS),he=i.getParameter(e.UNPACK_SKIP_ROWS);i.pixelStorei(e.UNPACK_ROW_LENGTH,_.width);for(let C=0,q=ae.length;C<q;C++){let H=ae[C],re=Math.floor(H.start/4),oe=Math.ceil(H.count/4),pe=re%_.width,De=Math.floor(re/_.width),Pe=oe,xe=1;i.pixelStorei(e.UNPACK_SKIP_PIXELS,pe),i.pixelStorei(e.UNPACK_SKIP_ROWS,De),i.texSubImage2D(e.TEXTURE_2D,0,pe,De,Pe,1,U,te,_.data)}T.clearUpdateRanges(),i.pixelStorei(e.UNPACK_ROW_LENGTH,k),i.pixelStorei(e.UNPACK_SKIP_PIXELS,Y),i.pixelStorei(e.UNPACK_SKIP_ROWS,he)}}function mi(T,_,U){let te=e.TEXTURE_2D;if(_.isDataArrayTexture||_.isCompressedArrayTexture)te=e.TEXTURE_2D_ARRAY;if(_.isData3DTexture)te=e.TEXTURE_3D;let Q=$e(T,_),ae=_.source;i.bindTexture(te,T.__webglTexture,e.TEXTURE0+U);let ue=r.get(ae);if(ae.version!==ue.__version||Q===!0){if(i.activeTexture(e.TEXTURE0+U),(typeof ImageBitmap<"u"&&_.image instanceof ImageBitmap)===!1){let xe=Ge.getPrimaries(Ge.workingColorSpace),Ne=_.colorSpace===Oi?null:Ge.getPrimaries(_.colorSpace),qe=_.colorSpace===Oi||xe===Ne?e.NONE:e.BROWSER_DEFAULT_WEBGL;i.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,qe)}i.pixelStorei(e.UNPACK_ALIGNMENT,_.unpackAlignment);let Y=b(_.image,!1,n.maxTextureSize);Y=Ve(_,Y);let he=s.convert(_.format,_.colorSpace),C=s.convert(_.type),q=P(_.internalFormat,he,C,_.normalized,_.colorSpace,_.isVideoTexture);ft(te,_);let H,re=_.mipmaps,oe=_.isVideoTexture!==!0,pe=ue.__version===void 0||Q===!0,De=ae.dataReady,Pe=y(_,Y);if(_.isDepthTexture){if(q=g(_.format===Ei,_.type),pe)if(oe)i.texStorage2D(e.TEXTURE_2D,1,q,Y.width,Y.height);else i.texImage2D(e.TEXTURE_2D,0,q,Y.width,Y.height,0,he,C,null)}else if(_.isDataTexture)if(re.length>0){if(oe&&pe)i.texStorage2D(e.TEXTURE_2D,Pe,q,re[0].width,re[0].height);for(let xe=0,Ne=re.length;xe<Ne;xe++)if(H=re[xe],oe){if(De)i.texSubImage2D(e.TEXTURE_2D,xe,0,0,H.width,H.height,he,C,H.data)}else i.texImage2D(e.TEXTURE_2D,xe,q,H.width,H.height,0,he,C,H.data);_.generateMipmaps=!1}else if(oe){if(pe)i.texStorage2D(e.TEXTURE_2D,Pe,q,Y.width,Y.height);if(De)Rt(_,Y,he,C)}else i.texImage2D(e.TEXTURE_2D,0,q,Y.width,Y.height,0,he,C,Y.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){if(oe&&pe)i.texStorage3D(e.TEXTURE_2D_ARRAY,Pe,q,re[0].width,re[0].height,Y.depth);for(let xe=0,Ne=re.length;xe<Ne;xe++)if(H=re[xe],_.format!==Wt)if(he!==null)if(oe){if(De)if(_.layerUpdates.size>0){let qe=kc(H.width,H.height,_.format,_.type);for(let _e of _.layerUpdates){let ot=H.data.subarray(_e*qe/H.data.BYTES_PER_ELEMENT,(_e+1)*qe/H.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,xe,0,0,_e,H.width,H.height,1,he,ot)}}else i.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,xe,0,0,0,H.width,H.height,Y.depth,he,H.data)}else i.compressedTexImage3D(e.TEXTURE_2D_ARRAY,xe,q,H.width,H.height,Y.depth,0,H.data,0,0);else le("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(oe){if(De)i.texSubImage3D(e.TEXTURE_2D_ARRAY,xe,0,0,0,H.width,H.height,Y.depth,he,C,H.data)}else i.texImage3D(e.TEXTURE_2D_ARRAY,xe,q,H.width,H.height,Y.depth,0,he,C,H.data);if(_.layerUpdates.size>0)_.clearLayerUpdates()}else{if(oe&&pe)i.texStorage2D(e.TEXTURE_2D,Pe,q,re[0].width,re[0].height);for(let xe=0,Ne=re.length;xe<Ne;xe++)if(H=re[xe],_.format!==Wt)if(he!==null)if(oe){if(De)i.compressedTexSubImage2D(e.TEXTURE_2D,xe,0,0,H.width,H.height,he,H.data)}else i.compressedTexImage2D(e.TEXTURE_2D,xe,q,H.width,H.height,0,H.data);else le("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(oe){if(De)i.texSubImage2D(e.TEXTURE_2D,xe,0,0,H.width,H.height,he,C,H.data)}else i.texImage2D(e.TEXTURE_2D,xe,q,H.width,H.height,0,he,C,H.data)}else if(_.isDataArrayTexture)if(oe){if(pe)i.texStorage3D(e.TEXTURE_2D_ARRAY,Pe,q,Y.width,Y.height,Y.depth);if(De)if(_.layerUpdates.size>0){let xe=kc(Y.width,Y.height,_.format,_.type);for(let Ne of _.layerUpdates){let qe=Y.data.subarray(Ne*xe/Y.data.BYTES_PER_ELEMENT,(Ne+1)*xe/Y.data.BYTES_PER_ELEMENT);i.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,Ne,Y.width,Y.height,1,he,C,qe)}_.clearLayerUpdates()}else i.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,Y.width,Y.height,Y.depth,he,C,Y.data)}else i.texImage3D(e.TEXTURE_2D_ARRAY,0,q,Y.width,Y.height,Y.depth,0,he,C,Y.data);else if(_.isData3DTexture)if(oe){if(pe)i.texStorage3D(e.TEXTURE_3D,Pe,q,Y.width,Y.height,Y.depth);if(De)i.texSubImage3D(e.TEXTURE_3D,0,0,0,0,Y.width,Y.height,Y.depth,he,C,Y.data)}else i.texImage3D(e.TEXTURE_3D,0,q,Y.width,Y.height,Y.depth,0,he,C,Y.data);else if(_.isFramebufferTexture){if(pe)if(oe)i.texStorage2D(e.TEXTURE_2D,Pe,q,Y.width,Y.height);else{let xe=Y.width,Ne=Y.height;for(let qe=0;qe<Pe;qe++)i.texImage2D(e.TEXTURE_2D,qe,q,xe,Ne,0,he,C,null),xe>>=1,Ne>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in e){let xe=e.canvas;if(!xe.hasAttribute("layoutsubtree"))xe.setAttribute("layoutsubtree","true");if(Y.parentNode!==xe){xe.appendChild(Y),d.add(_),xe.onpaint=(Ne)=>{let qe=Ne.changedElements;for(let _e of d)if(qe.includes(_e.image))_e.needsUpdate=!0},xe.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,Y);else{let{RGBA:qe,RGBA:_e,UNSIGNED_BYTE:ot}=e;e.texElementImage2D(e.TEXTURE_2D,0,qe,_e,ot,Y)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(re.length>0){if(oe&&pe){let xe=ii(re[0]);i.texStorage2D(e.TEXTURE_2D,Pe,q,xe.width,xe.height)}for(let xe=0,Ne=re.length;xe<Ne;xe++)if(H=re[xe],oe){if(De)i.texSubImage2D(e.TEXTURE_2D,xe,0,0,he,C,H)}else i.texImage2D(e.TEXTURE_2D,xe,q,he,C,H);_.generateMipmaps=!1}else if(oe){if(pe){let xe=ii(Y);i.texStorage2D(e.TEXTURE_2D,Pe,q,xe.width,xe.height)}if(De)i.texSubImage2D(e.TEXTURE_2D,0,0,0,he,C,Y)}else i.texImage2D(e.TEXTURE_2D,0,q,he,C,Y);if(E(_)&&_.mipmapsAutoUpdate===!0)S(te);if(ue.__version=ae.version,_.onUpdate)_.onUpdate(_)}T.__version=_.version}function bi(T,_,U){if(_.image.length!==6)return;let te=$e(T,_),Q=_.source;i.bindTexture(e.TEXTURE_CUBE_MAP,T.__webglTexture,e.TEXTURE0+U);let ae=r.get(Q);if(Q.version!==ae.__version||te===!0){i.activeTexture(e.TEXTURE0+U);let ue=Ge.getPrimaries(Ge.workingColorSpace),k=_.colorSpace===Oi?null:Ge.getPrimaries(_.colorSpace),Y=_.colorSpace===Oi||ue===k?e.NONE:e.BROWSER_DEFAULT_WEBGL;i.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(e.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,Y);let he=_.isCompressedTexture||_.image[0].isCompressedTexture,C=_.image[0]&&_.image[0].isDataTexture,q=[];for(let _e=0;_e<6;_e++){if(!he&&!C)q[_e]=b(_.image[_e],!0,n.maxCubemapSize);else q[_e]=C?_.image[_e].image:_.image[_e];q[_e]=Ve(_,q[_e])}let H=q[0],re=s.convert(_.format,_.colorSpace),oe=s.convert(_.type),pe=P(_.internalFormat,re,oe,_.normalized,_.colorSpace),De=_.isVideoTexture!==!0,Pe=ae.__version===void 0||te===!0,xe=Q.dataReady,Ne=y(_,H);ft(e.TEXTURE_CUBE_MAP,_);let qe;if(_.isDepthTexture){if(pe=g(_.format===Ei,_.type),Pe)if(De)i.texStorage2D(e.TEXTURE_CUBE_MAP,1,pe,H.width,H.height);else for(let _e=0;_e<6;_e++)i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,pe,H.width,H.height,0,re,oe,null)}else if(he){if(De&&Pe)i.texStorage2D(e.TEXTURE_CUBE_MAP,Ne,pe,H.width,H.height);for(let _e=0;_e<6;_e++){qe=q[_e].mipmaps;for(let ot=0;ot<qe.length;ot++){let Vt=qe[ot];if(_.format!==Wt)if(re!==null)if(De){if(xe)i.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+_e,ot,0,0,Vt.width,Vt.height,re,Vt.data)}else i.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+_e,ot,pe,Vt.width,Vt.height,0,Vt.data);else le("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()");else if(De){if(xe)i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+_e,ot,0,0,Vt.width,Vt.height,re,oe,Vt.data)}else i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+_e,ot,pe,Vt.width,Vt.height,0,re,oe,Vt.data)}}}else{if(qe=_.mipmaps,De&&Pe){if(qe.length>0)Ne++;let _e=ii(q[0]);i.texStorage2D(e.TEXTURE_CUBE_MAP,Ne,pe,_e.width,_e.height)}for(let _e=0;_e<6;_e++)if(C){if(De){if(xe)i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,q[_e].width,q[_e].height,re,oe,q[_e].data)}else i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,pe,q[_e].width,q[_e].height,0,re,oe,q[_e].data);for(let ot=0;ot<qe.length;ot++){let mr=qe[ot].image[_e].image;if(De){if(xe)i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+_e,ot+1,0,0,mr.width,mr.height,re,oe,mr.data)}else i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+_e,ot+1,pe,mr.width,mr.height,0,re,oe,mr.data)}}else{if(De){if(xe)i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,re,oe,q[_e])}else i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,pe,re,oe,q[_e]);for(let ot=0;ot<qe.length;ot++){let Vt=qe[ot];if(De){if(xe)i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+_e,ot+1,0,0,re,oe,Vt.image[_e])}else i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+_e,ot+1,pe,re,oe,Vt.image[_e])}}}if(E(_)&&_.mipmapsAutoUpdate===!0)S(e.TEXTURE_CUBE_MAP);if(ae.__version=Q.version,_.onUpdate)_.onUpdate(_)}T.__version=_.version}function Ct(T,_,U,te,Q,ae){let ue=s.convert(U.format,U.colorSpace),k=s.convert(U.type),Y=P(U.internalFormat,ue,k,U.normalized,U.colorSpace),he=r.get(_),C=r.get(U);if(C.__renderTarget=_,!he.__hasExternalTextures){let q=Math.max(1,_.width>>ae),H=Math.max(1,_.height>>ae);if(Q===e.TEXTURE_3D||Q===e.TEXTURE_2D_ARRAY)i.texImage3D(Q,ae,Y,q,H,_.depth,0,ue,k,null);else i.texImage2D(Q,ae,Y,q,H,0,ue,k,null)}if(i.bindFramebuffer(e.FRAMEBUFFER,T),ct(_))a.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,te,Q,C.__webglTexture,0,ge(_));else if(Q===e.TEXTURE_2D||Q>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)e.framebufferTexture2D(e.FRAMEBUFFER,te,Q,C.__webglTexture,ae);i.bindFramebuffer(e.FRAMEBUFFER,null)}function ti(T,_,U){if(e.bindRenderbuffer(e.RENDERBUFFER,T),_.depthBuffer){let te=_.depthTexture,Q=te&&te.isDepthTexture?te.type:null,ae=g(_.stencilBuffer,Q),ue=_.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(ct(_))a.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,ge(_),ae,_.width,_.height);else if(U)e.renderbufferStorageMultisample(e.RENDERBUFFER,ge(_),ae,_.width,_.height);else e.renderbufferStorage(e.RENDERBUFFER,ae,_.width,_.height);e.framebufferRenderbuffer(e.FRAMEBUFFER,ue,e.RENDERBUFFER,T)}else{let te=_.textures;for(let Q=0;Q<te.length;Q++){let ae=te[Q],ue=s.convert(ae.format,ae.colorSpace),k=s.convert(ae.type),Y=P(ae.internalFormat,ue,k,ae.normalized,ae.colorSpace);if(ct(_))a.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,ge(_),Y,_.width,_.height);else if(U)e.renderbufferStorageMultisample(e.RENDERBUFFER,ge(_),Y,_.width,_.height);else e.renderbufferStorage(e.RENDERBUFFER,Y,_.width,_.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function gi(T,_,U){let te=_.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(e.FRAMEBUFFER,T),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let Q=r.get(_.depthTexture);Q.__renderTarget=_;let ae=te?_.depthTexture.image[0]:_.depthTexture.image;if(!Q.__webglTexture||ae.width!==_.width||ae.height!==_.height)ae.width=_.width,ae.height=_.height,_.depthTexture.needsUpdate=!0;if(te)Ee(_.depthTexture,0);else Te(_.depthTexture,0);let ue=Q.__webglTexture,k=ge(_),Y=te?e.TEXTURE_CUBE_MAP_POSITIVE_X+U:e.TEXTURE_2D,he=_.depthTexture.format===Ei?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(_.depthTexture.format===_i)if(ct(_))a.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,he,Y,ue,0,k);else e.framebufferTexture2D(e.FRAMEBUFFER,he,Y,ue,0);else if(_.depthTexture.format===Ei)if(ct(_))a.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,he,Y,ue,0,k);else e.framebufferTexture2D(e.FRAMEBUFFER,he,Y,ue,0);else throw Error("THREE.WebGLTextures: Unknown depthTexture format.")}function xi(T){let _=r.get(T),U=T.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==T.depthTexture){let te=T.depthTexture;if(_.__depthDisposeCallback)_.__depthDisposeCallback();if(te){let Q=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,te.removeEventListener("dispose",Q)};te.addEventListener("dispose",Q),_.__depthDisposeCallback=Q}_.__boundDepthTexture=te}if(T.depthTexture&&!_.__autoAllocateDepthBuffer)if(U)for(let te=0;te<6;te++)gi(_.__webglFramebuffer[te],T,te);else if(T.texture.mipmaps.length>0)gi(_.__webglFramebuffer[0],T,0);else gi(_.__webglFramebuffer,T,0);else if(U){_.__webglDepthbuffer=[];for(let te=0;te<6;te++)if(i.bindFramebuffer(e.FRAMEBUFFER,_.__webglFramebuffer[te]),_.__webglDepthbuffer[te]===void 0)_.__webglDepthbuffer[te]=e.createRenderbuffer(),ti(_.__webglDepthbuffer[te],T,!1);else{let Q=T.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,ae=_.__webglDepthbuffer[te];e.bindRenderbuffer(e.RENDERBUFFER,ae),e.framebufferRenderbuffer(e.FRAMEBUFFER,Q,e.RENDERBUFFER,ae)}}else{if(T.texture.mipmaps.length>0)i.bindFramebuffer(e.FRAMEBUFFER,_.__webglFramebuffer[0]);else i.bindFramebuffer(e.FRAMEBUFFER,_.__webglFramebuffer);if(_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=e.createRenderbuffer(),ti(_.__webglDepthbuffer,T,!1);else{let Q=T.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,ae=_.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,ae),e.framebufferRenderbuffer(e.FRAMEBUFFER,Q,e.RENDERBUFFER,ae)}}i.bindFramebuffer(e.FRAMEBUFFER,null)}function Zi(T,_,U){let te=r.get(T);if(_!==void 0)Ct(te.__webglFramebuffer,T,T.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0);if(U!==void 0)xi(T)}function N(T){let _=T.texture,U=r.get(T),te=r.get(_);T.addEventListener("dispose",z),D(T);let Q=T.textures,ae=T.isWebGLCubeRenderTarget===!0,ue=Q.length>1;if(!ue){if(te.__webglTexture===void 0)te.__webglTexture=e.createTexture();te.__version=_.version,o.memory.textures++}if(ae){U.__webglFramebuffer=[];for(let k=0;k<6;k++)if(_.mipmaps.length>0){U.__webglFramebuffer[k]=[];for(let Y=0;Y<_.mipmaps.length;Y++)U.__webglFramebuffer[k][Y]=e.createFramebuffer()}else U.__webglFramebuffer[k]=e.createFramebuffer()}else{if(_.mipmaps.length>0){U.__webglFramebuffer=[];for(let k=0;k<_.mipmaps.length;k++)U.__webglFramebuffer[k]=e.createFramebuffer()}else U.__webglFramebuffer=e.createFramebuffer();if(ue)for(let k=0,Y=Q.length;k<Y;k++){let he=r.get(Q[k]);if(he.__webglTexture===void 0)he.__webglTexture=e.createTexture(),o.memory.textures++}if(T.samples>0&&ct(T)===!1){U.__webglMultisampledFramebuffer=e.createFramebuffer(),U.__webglColorRenderbuffer=[],i.bindFramebuffer(e.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let k=0;k<Q.length;k++){let Y=Q[k];U.__webglColorRenderbuffer[k]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,U.__webglColorRenderbuffer[k]);let he=s.convert(Y.format,Y.colorSpace),C=s.convert(Y.type),q=P(Y.internalFormat,he,C,Y.normalized,Y.colorSpace,T.isXRRenderTarget===!0),H=ge(T);e.renderbufferStorageMultisample(e.RENDERBUFFER,H,q,T.width,T.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+k,e.RENDERBUFFER,U.__webglColorRenderbuffer[k])}if(e.bindRenderbuffer(e.RENDERBUFFER,null),T.depthBuffer)U.__webglDepthRenderbuffer=e.createRenderbuffer(),ti(U.__webglDepthRenderbuffer,T,!0);i.bindFramebuffer(e.FRAMEBUFFER,null)}}if(ae){i.bindTexture(e.TEXTURE_CUBE_MAP,te.__webglTexture),ft(e.TEXTURE_CUBE_MAP,_);for(let k=0;k<6;k++)if(_.mipmaps.length>0)for(let Y=0;Y<_.mipmaps.length;Y++)Ct(U.__webglFramebuffer[k][Y],T,_,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+k,Y);else Ct(U.__webglFramebuffer[k],T,_,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+k,0);if(E(_))S(e.TEXTURE_CUBE_MAP);else if(_.mipmaps.length>0)e.texParameteri(e.TEXTURE_CUBE_MAP,e.TEXTURE_MAX_LEVEL,_.mipmaps.length-1);i.unbindTexture()}else if(ue){for(let k=0,Y=Q.length;k<Y;k++){let he=Q[k],C=r.get(he),q=e.TEXTURE_2D;if(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)q=T.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY;if(i.bindTexture(q,C.__webglTexture),ft(q,he),Ct(U.__webglFramebuffer,T,he,e.COLOR_ATTACHMENT0+k,q,0),E(he))S(q)}i.unbindTexture()}else{let k=e.TEXTURE_2D;if(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)k=T.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY;if(i.bindTexture(k,te.__webglTexture),ft(k,_),_.mipmaps.length>0)for(let Y=0;Y<_.mipmaps.length;Y++)Ct(U.__webglFramebuffer[Y],T,_,e.COLOR_ATTACHMENT0,k,Y);else Ct(U.__webglFramebuffer,T,_,e.COLOR_ATTACHMENT0,k,0);if(E(_))S(k);else if(_.mipmaps.length>0)e.texParameteri(k,e.TEXTURE_MAX_LEVEL,_.mipmaps.length-1);i.unbindTexture()}if(T.depthBuffer)xi(T)}function Ji(T){let _=T.textures;for(let U=0,te=_.length;U<te;U++){let Q=_[U];if(E(Q)&&Q.mipmapsAutoUpdate===!0){let ae=w(T),ue=r.get(Q).__webglTexture;i.bindTexture(ae,ue),S(ae),i.unbindTexture()}}}let st=[];function Gt(T){if(T.samples>0){if(ct(T)===!1){let{textures:_,width:U,height:te}=T,Q=e.COLOR_BUFFER_BIT,ae=T.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,ue=r.get(T),k=_.length>1;if(k)for(let he=0;he<_.length;he++)i.bindFramebuffer(e.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+he,e.RENDERBUFFER,null),i.bindFramebuffer(e.FRAMEBUFFER,ue.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+he,e.TEXTURE_2D,null,0);if(i.bindFramebuffer(e.READ_FRAMEBUFFER,ue.__webglMultisampledFramebuffer),T.texture.mipmaps.length>0)i.bindFramebuffer(e.DRAW_FRAMEBUFFER,ue.__webglFramebuffer[0]);else i.bindFramebuffer(e.DRAW_FRAMEBUFFER,ue.__webglFramebuffer);for(let he=0;he<_.length;he++){if(T.resolveDepthBuffer){if(T.depthBuffer)Q|=e.DEPTH_BUFFER_BIT;if(T.stencilBuffer&&T.resolveStencilBuffer)Q|=e.STENCIL_BUFFER_BIT}if(k){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,ue.__webglColorRenderbuffer[he]);let C=r.get(_[he]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,C,0)}if(e.blitFramebuffer(0,0,U,te,0,0,U,te,Q,e.NEAREST),l===!0){if(st.length=0,st.push(e.COLOR_ATTACHMENT0+he),T.depthBuffer&&T.storeMultisampledDepthBuffer===!1)st.push(ae);e.invalidateFramebuffer(e.READ_FRAMEBUFFER,st)}}if(i.bindFramebuffer(e.READ_FRAMEBUFFER,null),i.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),k)for(let he=0;he<_.length;he++){i.bindFramebuffer(e.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+he,e.RENDERBUFFER,ue.__webglColorRenderbuffer[he]);let C=r.get(_[he]).__webglTexture;i.bindFramebuffer(e.FRAMEBUFFER,ue.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+he,e.TEXTURE_2D,C,0)}i.bindFramebuffer(e.DRAW_FRAMEBUFFER,ue.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.storeMultisampledDepthBuffer===!1&&l){let _=T.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[_])}}}function ge(T){return Math.min(n.maxSamples,T.samples)}function ct(T){let _=r.get(T);return T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function Be(T){let _=o.render.frame;if(h.get(T)!==_)h.set(T,_),T.update()}function Ve(T,_){let{colorSpace:U,format:te,type:Q}=T;if(T.isCompressedTexture===!0||T.isVideoTexture===!0)return _;if(U!==un&&U!==Oi)if(Ge.getTransfer(U)===Je){if(te!==Wt||Q!==Tt)le("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.")}else ye("WebGLTextures: Unsupported texture color space:",U);return _}function ii(T){if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement)c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height;else if(typeof VideoFrame<"u"&&T instanceof VideoFrame)c.width=T.displayWidth,c.height=T.displayHeight;else c.width=T.width,c.height=T.height;return c}this.allocateTextureUnit=Z,this.resetTextureUnits=j,this.getTextureUnits=se,this.setTextureUnits=Re,this.setTexture2D=Te,this.setTexture2DArray=Fe,this.setTexture3D=Oe,this.setTextureCube=Ee,this.rebindTextures=Zi,this.setupRenderTarget=N,this.updateRenderTargetMipmap=Ji,this.updateMultisampleRenderTarget=Gt,this.setupDepthRenderbuffer=xi,this.setupFrameBufferTexture=Ct,this.useMultisampledRTT=ct,this.dispose=X}function Zc(e,t){function i(r,n=Oi){let s,o=Ge.getTransfer(n);if(r===Tt)return e.UNSIGNED_BYTE;if(r===Jn)return e.UNSIGNED_SHORT_4_4_4_4;if(r===Kn)return e.UNSIGNED_SHORT_5_5_5_1;if(r===ba)return e.UNSIGNED_INT_5_9_9_9_REV;if(r===Ta)return e.UNSIGNED_INT_10F_11F_11F_REV;if(r===Ma)return e.BYTE;if(r===Sa)return e.SHORT;if(r===_r)return e.UNSIGNED_SHORT;if(r===Zn)return e.INT;if(r===Lt)return e.UNSIGNED_INT;if(r===Et)return e.FLOAT;if(r===xt)return e.HALF_FLOAT;if(r===Ea)return e.ALPHA;if(r===wa)return e.RGB;if(r===Wt)return e.RGBA;if(r===_i)return e.DEPTH_COMPONENT;if(r===Ei)return e.DEPTH_STENCIL;if(r===Qn)return e.RED;if(r===an)return e.RED_INTEGER;if(r===wi)return e.RG;if(r===$n)return e.RG_INTEGER;if(r===jn)return e.RGBA_INTEGER;if(r===es||r===ts||r===is||r===rs)if(o===Je)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(r===es)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===ts)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===is)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===rs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(r===es)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===ts)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===is)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===rs)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===eo||r===to||r===io||r===ro)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(r===eo)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===to)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===io)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===ro)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===no||r===so||r===oo||r===ao||r===lo||r===ln||r===co)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(r===no||r===so)return o===Je?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(r===oo)return o===Je?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(r===ao)return s.COMPRESSED_R11_EAC;if(r===lo)return s.COMPRESSED_SIGNED_R11_EAC;if(r===ln)return s.COMPRESSED_RG11_EAC;if(r===co)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===ho||r===uo||r===fo||r===po||r===mo||r===go||r===xo||r===_o||r===vo||r===yo||r===Mo||r===So||r===bo||r===To)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(r===ho)return o===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===uo)return o===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===fo)return o===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===po)return o===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===mo)return o===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===go)return o===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===xo)return o===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===_o)return o===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===vo)return o===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===yo)return o===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Mo)return o===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===So)return o===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===bo)return o===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===To)return o===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Eo||r===wo||r===Ao)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(r===Eo)return o===Je?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===wo)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Ao)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Ro||r===Co||r===cn||r===Po)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(r===Ro)return s.COMPRESSED_RED_RGTC1_EXT;if(r===Co)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===cn)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Po)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;if(r===Qi)return e.UNSIGNED_INT_24_8;return e[r]!==void 0?e[r]:null}return{convert:i}}var x_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,__=`
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

}`;class Jc{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new As(e.texture);if(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)this.depthNear=e.depthNear,this.depthFar=e.depthFar;this.texture=i}}getMesh(e){if(this.texture!==null){if(this.mesh===null){let t=e.cameras[0].viewport,i=new _t({vertexShader:x_,fragmentShader:__,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new we(new vi(20,20),i)}}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Kc extends Nt{constructor(e,t){super();let i=this,r=null,n=1,s=null,o="local-floor",a=1,l=null,c=null,h=null,d=null,u=null,p=null,x=typeof XRWebGLBinding<"u",M=new Jc,f={},m=t.getContextAttributes(),b=null,E=null,S=[],w=[],P=new ee,g=null,y=null,D=new Mt;D.viewport=new tt;let V=new Mt;V.viewport=new tt;let L=[D,V],z=new Cl,J=null,R=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let ne=S[Z];if(ne===void 0)ne=new us,S[Z]=ne;return ne.getTargetRaySpace()},this.getControllerGrip=function(Z){let ne=S[Z];if(ne===void 0)ne=new us,S[Z]=ne;return ne.getGripSpace()},this.getHand=function(Z){let ne=S[Z];if(ne===void 0)ne=new us,S[Z]=ne;return ne.getHandSpace()};function X(Z){let ne=w.indexOf(Z.inputSource);if(ne===-1)return;let Te=S[ne];if(Te!==void 0)Te.update(Z.inputSource,Z.frame,l||s),Te.dispatchEvent({type:Z.type,data:Z.inputSource})}function K(){r.removeEventListener("select",X),r.removeEventListener("selectstart",X),r.removeEventListener("selectend",X),r.removeEventListener("squeeze",X),r.removeEventListener("squeezestart",X),r.removeEventListener("squeezeend",X),r.removeEventListener("end",K),r.removeEventListener("inputsourceschange",B);for(let Z=0;Z<S.length;Z++){let ne=w[Z];if(ne===null)continue;w[Z]=null,S[Z].disconnect(ne)}J=null,R=null,M.reset();for(let Z in f)delete f[Z];if(e.setRenderTarget(b),u=null,d=null,h=null,r=null,E=null,Re.stop(),i.isPresenting=!1,e.setPixelRatio(g),e.setSize(P.width,P.height,!1),y!==null){let Z=y.camera;Z.fov=y.fov,Z.zoom=y.zoom,Z.updateProjectionMatrix(),y=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){if(n=Z,i.isPresenting===!0)le("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){if(o=Z,i.isPresenting===!0)le("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||s},this.setReferenceSpace=function(Z){l=Z},this.getBaseLayer=function(){return d!==null?d:u},this.getBinding=function(){if(h===null&&x)h=new XRWebGLBinding(r,t);return h},this.getFrame=function(){return p},this.getSession=function(){return r},this.setSession=async function(Z){if(r=Z,r!==null){if(b=e.getRenderTarget(),r.addEventListener("select",X),r.addEventListener("selectstart",X),r.addEventListener("selectend",X),r.addEventListener("squeeze",X),r.addEventListener("squeezestart",X),r.addEventListener("squeezeend",X),r.addEventListener("end",K),r.addEventListener("inputsourceschange",B),m.xrCompatible!==!0)await t.makeXRCompatible();if(g=e.getPixelRatio(),e.getSize(P),!(x&&("createProjectionLayer"in XRWebGLBinding.prototype))){let Te={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:n};u=new XRWebGLLayer(r,t,Te),r.updateRenderState({baseLayer:u}),e.setPixelRatio(1),e.setSize(u.framebufferWidth,u.framebufferHeight,!1),E=new pt(u.framebufferWidth,u.framebufferHeight,{format:Wt,type:Tt,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let Te=null,Fe=null,Oe=null;if(m.depth)Oe=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Te=m.stencil?Ei:_i,Fe=m.stencil?Qi:Lt;let Ee={colorFormat:t.RGBA8,depthFormat:Oe,scaleFactor:n};h=this.getBinding(),d=h.createProjectionLayer(Ee),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),E=new pt(d.textureWidth,d.textureHeight,{format:Wt,type:Tt,depthTexture:new Ii(d.textureWidth,d.textureHeight,Fe,void 0,void 0,void 0,void 0,void 0,void 0,Te),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(a),l=null,s=await r.requestReferenceSpace(o),Re.setContext(r),Re.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function B(Z){for(let ne=0;ne<Z.removed.length;ne++){let Te=Z.removed[ne],Fe=w.indexOf(Te);if(Fe>=0)w[Fe]=null,S[Fe].disconnect(Te)}for(let ne=0;ne<Z.added.length;ne++){let Te=Z.added[ne],Fe=w.indexOf(Te);if(Fe===-1){for(let Ee=0;Ee<S.length;Ee++)if(Ee>=w.length){w.push(Te),Fe=Ee;break}else if(w[Ee]===null){w[Ee]=Te,Fe=Ee;break}if(Fe===-1)break}let Oe=S[Fe];if(Oe)Oe.connect(Te)}}function ce(Z,ne){if(ne===null)Z.matrixWorld.copy(Z.matrix);else Z.matrixWorld.multiplyMatrices(ne.matrixWorld,Z.matrix);Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(r===null)return;let{near:ne,far:Te}=Z;if(M.texture!==null){if(M.depthNear>0)ne=M.depthNear;if(M.depthFar>0)Te=M.depthFar}if(z.near=V.near=D.near=ne,z.far=V.far=D.far=Te,J!==z.near||R!==z.far)r.updateRenderState({depthNear:z.near,depthFar:z.far}),J=z.near,R=z.far;z.layers.mask=Z.layers.mask|6,D.layers.mask=z.layers.mask&-5,V.layers.mask=z.layers.mask&-3;let Fe=Z.parent,Oe=z.cameras;ce(z,Fe);for(let Ee=0;Ee<Oe.length;Ee++)ce(Oe[Ee],Fe);if(z.projectionMatrix.copy(D.projectionMatrix),z.projectionMatrixInverse.copy(D.projectionMatrixInverse),y===null&&Z.isPerspectiveCamera)y={camera:Z,fov:Z.fov,zoom:Z.zoom};W(Z,z,Fe)};function W(Z,ne,Te){if(Te===null)Z.matrix.copy(ne.matrixWorld);else Z.matrix.copy(Te.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(ne.matrixWorld);if(Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(ne.projectionMatrix),Z.projectionMatrixInverse.copy(ne.projectionMatrixInverse),Z.isPerspectiveCamera)Z.fov=mn*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1}this.getCamera=function(){return z},this.getFoveation=function(){if(d===null&&u===null)return;return a},this.setFoveation=function(Z){if(a=Z,d!==null)d.fixedFoveation=Z;if(u!==null&&u.fixedFoveation!==void 0)u.fixedFoveation=Z},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(z)},this.getCameraTexture=function(Z){return f[Z]};let j=null;function se(Z,ne){if(c=ne.getViewerPose(l||s),p=ne,c!==null){let Te=c.views;if(u!==null)e.setRenderTargetFramebuffer(E,u.framebuffer),e.setRenderTarget(E);let Fe=!1;if(Te.length!==z.cameras.length)z.cameras.length=0,Fe=!0;for(let Ze=0;Ze<Te.length;Ze++){let Xe=Te[Ze],ft=null;if(u!==null)ft=u.getViewport(Xe);else{let bt=h.getViewSubImage(d,Xe);if(ft=bt.viewport,Ze===0)e.setRenderTargetTextures(E,bt.colorTexture,bt.depthStencilTexture),e.setRenderTarget(E)}let $e=L[Ze];if($e===void 0)$e=new Mt,$e.layers.enable(Ze),$e.viewport=new tt,L[Ze]=$e;if($e.matrix.fromArray(Xe.transform.matrix),$e.matrix.decompose($e.position,$e.quaternion,$e.scale),$e.projectionMatrix.fromArray(Xe.projectionMatrix),$e.projectionMatrixInverse.copy($e.projectionMatrix).invert(),$e.viewport.set(ft.x,ft.y,ft.width,ft.height),Ze===0)z.matrix.copy($e.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale);if(Fe===!0)z.cameras.push($e)}let Oe=r.enabledFeatures;if(Oe&&Oe.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&x){h=i.getBinding();let Ze=h.getDepthInformation(Te[0]);if(Ze&&Ze.isValid&&Ze.texture)M.init(Ze,r.renderState)}if(Oe&&Oe.includes("camera-access")&&x){e.state.unbindTexture(),h=i.getBinding();for(let Ze=0;Ze<Te.length;Ze++){let Xe=Te[Ze].camera;if(Xe){let ft=f[Xe];if(!ft)ft=new As,f[Xe]=ft;let $e=h.getCameraImage(Xe);ft.sourceTexture=$e}}}}for(let Te=0;Te<S.length;Te++){let Fe=w[Te],Oe=S[Te];if(Fe!==null&&Oe!==void 0)Oe.update(Fe,ne,l||s)}if(j)j(Z,ne);if(ne.detectedPlanes)i.dispatchEvent({type:"planesdetected",data:ne});p=null}let Re=new Ll;Re.setAnimationLoop(se),this.setAnimationLoop=function(Z){j=Z},this.dispose=function(){}}}var v_=new Ue,Fm=new Ie;Fm.set(-1,0,0,0,1,0,0,0,1);function Om(e,t){function i(f,m){if(f.matrixAutoUpdate===!0)f.updateMatrix();m.value.copy(f.matrix)}function r(f,m){if(m.color.getRGB(f.fogColor.value,xl(e)),m.isFog)f.fogNear.value=m.near,f.fogFar.value=m.far;else if(m.isFogExp2)f.fogDensity.value=m.density}function n(f,m,b,E,S){if(m.isNodeMaterial)m.uniformsNeedUpdate=!1;else if(m.isMeshBasicMaterial)s(f,m);else if(m.isMeshLambertMaterial){if(s(f,m),m.envMap)f.envMapIntensity.value=m.envMapIntensity}else if(m.isMeshToonMaterial)s(f,m),d(f,m);else if(m.isMeshPhongMaterial){if(s(f,m),h(f,m),m.envMap)f.envMapIntensity.value=m.envMapIntensity}else if(m.isMeshStandardMaterial){if(s(f,m),u(f,m),m.isMeshPhysicalMaterial)p(f,m,S)}else if(m.isMeshMatcapMaterial)s(f,m),x(f,m);else if(m.isMeshDepthMaterial)s(f,m);else if(m.isMeshDistanceMaterial)s(f,m),M(f,m);else if(m.isMeshNormalMaterial)s(f,m);else if(m.isLineBasicMaterial){if(o(f,m),m.isLineDashedMaterial)a(f,m)}else if(m.isPointsMaterial)l(f,m,b,E);else if(m.isSpriteMaterial)c(f,m);else if(m.isShadowMaterial)f.color.value.copy(m.color),f.opacity.value=m.opacity;else if(m.isShaderMaterial)m.uniformsNeedUpdate=!1}function s(f,m){if(f.opacity.value=m.opacity,m.color)f.diffuse.value.copy(m.color);if(m.emissive)f.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity);if(m.map)f.map.value=m.map,i(m.map,f.mapTransform);if(m.alphaMap)f.alphaMap.value=m.alphaMap,i(m.alphaMap,f.alphaMapTransform);if(m.bumpMap){if(f.bumpMap.value=m.bumpMap,i(m.bumpMap,f.bumpMapTransform),f.bumpScale.value=m.bumpScale,m.side===dt)f.bumpScale.value*=-1}if(m.normalMap){if(f.normalMap.value=m.normalMap,i(m.normalMap,f.normalMapTransform),f.normalScale.value.copy(m.normalScale),m.side===dt)f.normalScale.value.negate()}if(m.displacementMap)f.displacementMap.value=m.displacementMap,i(m.displacementMap,f.displacementMapTransform),f.displacementScale.value=m.displacementScale,f.displacementBias.value=m.displacementBias;if(m.emissiveMap)f.emissiveMap.value=m.emissiveMap,i(m.emissiveMap,f.emissiveMapTransform);if(m.specularMap)f.specularMap.value=m.specularMap,i(m.specularMap,f.specularMapTransform);if(m.alphaTest>0)f.alphaTest.value=m.alphaTest;let b=t.get(m),{envMap:E,envMapRotation:S}=b;if(E){if(f.envMap.value=E,f.envMapRotation.value.setFromMatrix4(v_.makeRotationFromEuler(S)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1)f.envMapRotation.value.premultiply(Fm);f.reflectivity.value=m.reflectivity,f.ior.value=m.ior,f.refractionRatio.value=m.refractionRatio}if(m.lightMap)f.lightMap.value=m.lightMap,f.lightMapIntensity.value=m.lightMapIntensity,i(m.lightMap,f.lightMapTransform);if(m.aoMap)f.aoMap.value=m.aoMap,f.aoMapIntensity.value=m.aoMapIntensity,i(m.aoMap,f.aoMapTransform)}function o(f,m){if(f.diffuse.value.copy(m.color),f.opacity.value=m.opacity,m.map)f.map.value=m.map,i(m.map,f.mapTransform)}function a(f,m){f.dashSize.value=m.dashSize,f.totalSize.value=m.dashSize+m.gapSize,f.scale.value=m.scale}function l(f,m,b,E){if(f.diffuse.value.copy(m.color),f.opacity.value=m.opacity,f.size.value=m.size*b,f.scale.value=E*0.5,m.map)f.map.value=m.map,i(m.map,f.uvTransform);if(m.alphaMap)f.alphaMap.value=m.alphaMap,i(m.alphaMap,f.alphaMapTransform);if(m.alphaTest>0)f.alphaTest.value=m.alphaTest}function c(f,m){if(f.diffuse.value.copy(m.color),f.opacity.value=m.opacity,f.rotation.value=m.rotation,m.map)f.map.value=m.map,i(m.map,f.mapTransform);if(m.alphaMap)f.alphaMap.value=m.alphaMap,i(m.alphaMap,f.alphaMapTransform);if(m.alphaTest>0)f.alphaTest.value=m.alphaTest}function h(f,m){f.specular.value.copy(m.specular),f.shininess.value=Math.max(m.shininess,0.0001)}function d(f,m){if(m.gradientMap)f.gradientMap.value=m.gradientMap}function u(f,m){if(f.metalness.value=m.metalness,m.metalnessMap)f.metalnessMap.value=m.metalnessMap,i(m.metalnessMap,f.metalnessMapTransform);if(f.roughness.value=m.roughness,m.roughnessMap)f.roughnessMap.value=m.roughnessMap,i(m.roughnessMap,f.roughnessMapTransform);if(m.envMap)f.envMapIntensity.value=m.envMapIntensity}function p(f,m,b){if(f.ior.value=m.ior,m.diffuseRoughness>0){if(f.diffuseRoughness.value=m.diffuseRoughness,m.diffuseRoughnessMap)f.diffuseRoughnessMap.value=m.diffuseRoughnessMap,i(m.diffuseRoughnessMap,f.diffuseRoughnessMapTransform)}if(m.sheen>0){if(f.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),f.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap)f.sheenColorMap.value=m.sheenColorMap,i(m.sheenColorMap,f.sheenColorMapTransform);if(m.sheenRoughnessMap)f.sheenRoughnessMap.value=m.sheenRoughnessMap,i(m.sheenRoughnessMap,f.sheenRoughnessMapTransform)}if(m.clearcoat>0){if(f.clearcoat.value=m.clearcoat,f.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap)f.clearcoatMap.value=m.clearcoatMap,i(m.clearcoatMap,f.clearcoatMapTransform);if(m.clearcoatRoughnessMap)f.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,i(m.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform);if(m.clearcoatNormalMap){if(f.clearcoatNormalMap.value=m.clearcoatNormalMap,i(m.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===dt)f.clearcoatNormalScale.value.negate()}}if(m.dispersion>0)f.dispersion.value=m.dispersion;if(m.retroreflectivity>0)f.retroreflectivity.value=m.retroreflectivity;if(m.iridescence>0){if(f.iridescence.value=m.iridescence,f.iridescenceIOR.value=m.iridescenceIOR,f.iridescenceThicknessMinimum.value=m.iridescenceThicknessMinimum,f.iridescenceThicknessMaximum.value=m.iridescenceThicknessMaximum,m.iridescenceMap)f.iridescenceMap.value=m.iridescenceMap,i(m.iridescenceMap,f.iridescenceMapTransform);if(m.iridescenceThicknessMap)f.iridescenceThicknessMap.value=m.iridescenceThicknessMap,i(m.iridescenceThicknessMap,f.iridescenceThicknessMapTransform)}if(m.transmission>0){if(f.transmission.value=m.transmission,f.transmissionSamplerMap.value=b.texture,f.transmissionSamplerSize.value.set(b.width,b.height),m.transmissionMap)f.transmissionMap.value=m.transmissionMap,i(m.transmissionMap,f.transmissionMapTransform);if(f.thickness.value=m.thickness,m.thicknessMap)f.thicknessMap.value=m.thicknessMap,i(m.thicknessMap,f.thicknessMapTransform);f.attenuationDistance.value=m.attenuationDistance,f.attenuationColor.value.copy(m.attenuationColor)}if(m.anisotropy>0){if(f.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap)f.anisotropyMap.value=m.anisotropyMap,i(m.anisotropyMap,f.anisotropyMapTransform)}if(f.specularIntensity.value=m.specularIntensity,f.specularColor.value.copy(m.specularColor),m.specularColorMap)f.specularColorMap.value=m.specularColorMap,i(m.specularColorMap,f.specularColorMapTransform);if(m.specularIntensityMap)f.specularIntensityMap.value=m.specularIntensityMap,i(m.specularIntensityMap,f.specularIntensityMapTransform)}function x(f,m){if(m.matcap)f.matcap.value=m.matcap}function M(f,m){let b=t.get(m).light;f.referencePosition.value.setFromMatrixPosition(b.matrixWorld),f.nearDistance.value=b.shadow.camera.near,f.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:n}}function Bm(e,t,i,r){let n={},s={};function o(b,E){let S=E.program;r.uniformBlockBinding(b,S,n[b.id])}function a(b,E){let S=n[b.id];if(S===void 0)x(b),S=l(b),n[b.id]=S,b.addEventListener("dispose",f);let w=E.program;r.updateUBOMapping(b,w);let P=t.render.frame;if(s[b.id]!==P)c(b),s[b.id]=P}function l(b){let E=e.createBuffer(),{__size:S,usage:w}=b;return e.bindBuffer(e.UNIFORM_BUFFER,E),e.bufferData(e.UNIFORM_BUFFER,S,w),e.bindBuffer(e.UNIFORM_BUFFER,null),E}function c(b){let E=n[b.id],{uniforms:S,__cache:w}=b;e.bindBuffer(e.UNIFORM_BUFFER,E);for(let P=0,g=S.length;P<g;P++){let y=S[P];if(Array.isArray(y))for(let D=0,V=y.length;D<V;D++)h(y[D],P,D,w);else h(y,P,0,w)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function h(b,E,S,w){if(u(b,E,S,w)===!0){let{__offset:P,value:g}=b;if(Array.isArray(g)){let y=0;for(let D=0;D<g.length;D++){let V=g[D],L=M(V,!0);d(V,b.__data,y),y+=L.storage/Float32Array.BYTES_PER_ELEMENT}}else d(g,b.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,P,b.__data)}}function d(b,E,S){if(typeof b==="number"||typeof b==="boolean")E[S]=b;else if(b.isMatrix3)E[S]=b.elements[0],E[S+1]=b.elements[1],E[S+2]=b.elements[2],E[S+3]=0,E[S+4]=b.elements[3],E[S+5]=b.elements[4],E[S+6]=b.elements[5],E[S+7]=0,E[S+8]=b.elements[6],E[S+9]=b.elements[7],E[S+10]=b.elements[8],E[S+11]=0;else if(ArrayBuffer.isView(b))E.set(b.subarray(0,E.length-S),S);else b.toArray(E,S)}function u(b,E,S,w){let P=b.value,g=E+"_"+S;if(Array.isArray(P)){if(w[g]===void 0)w[g]=[];let y=w[g],D=!1;for(let V=0;V<P.length;V++)if(p(P[V],y,V)===!0)D=!0;return D}return p(P,w,g)}function p(b,E,S){if(E[S]===void 0){if(typeof b==="number"||typeof b==="boolean")E[S]=b;else if(ArrayBuffer.isView(b))E[S]=b.slice();else E[S]=b.clone();return!0}else{let w=E[S];if(typeof b==="number"||typeof b==="boolean"){if(w!==b)return E[S]=b,!0}else if(ArrayBuffer.isView(b))return!0;else if(w.equals(b)===!1)return w.copy(b),!0}return!1}function x(b){let E=b.uniforms,S=0,w=16;for(let g=0,y=E.length;g<y;g++){let D=Array.isArray(E[g])?E[g]:[E[g]];for(let V=0,L=D.length;V<L;V++){let z=D[V],J=Array.isArray(z.value)?z.value:[z.value],R=Array.isArray(E[g])||Array.isArray(z.value),X=S;for(let B=0,ce=J.length;B<ce;B++){let W=J[B],j=M(W,R),se=S%w,Re=se%j.boundary,Z=se+Re;if(S+=Re,Z!==0&&w-Z<j.storage)S+=w-Z;if(B===0)X=S;S+=j.storage}let K=z.type==="int"?Int32Array:z.type==="uint"?Uint32Array:Float32Array;z.__data=new K((S-X)/Float32Array.BYTES_PER_ELEMENT),z.__offset=X}}let P=S%w;if(P>0)S+=w-P;return b.__size=S,b.__cache={},this}function M(b,E){let S={boundary:0,storage:0};if(typeof b==="number"||typeof b==="boolean")S.boundary=4,S.storage=4;else if(b.isVector2)S.boundary=8,S.storage=8;else if(b.isVector3||b.isColor)S.boundary=16,S.storage=12;else if(b.isVector4)S.boundary=16,S.storage=16;else if(b.isMatrix3)S.boundary=16,S.storage=48;else if(b.isMatrix4)S.boundary=16,S.storage=64;else if(b.isTexture)le("WebGLRenderer: Texture samplers can not be part of an uniforms group.");else if(ArrayBuffer.isView(b))S.boundary=16,S.storage=b.byteLength;else le("WebGLRenderer: Unsupported uniform value type.",b);if(E===!0)S.boundary=16,S.storage=Math.ceil(S.storage/16)*16;return S}function f(b){let E=b.target;E.removeEventListener("dispose",f),e.deleteBuffer(n[E.id]),delete n[E.id],delete s[E.id]}function m(){for(let b in n)e.deleteBuffer(n[b]);n={},s={}}return{bind:o,update:a,dispose:m}}var y_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),fr=null;function zm(){if(fr===null)fr=new lr(y_,16,16,wi,xt),fr.name="DFG_LUT",fr.minFilter=gt,fr.magFilter=gt,fr.wrapS=Kt,fr.wrapT=Kt,fr.generateMipmaps=!1,fr.needsUpdate=!0;return fr}class Ol{constructor(e={}){let{canvas:t=oc(),context:i=null,depth:r=!0,stencil:n=!1,alpha:s=!1,antialias:o=!1,premultipliedAlpha:a=!0,preserveDrawingBuffer:l=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1,outputBufferType:u=Tt}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=s;let x=u,M=new Set([jn,$n,an]),f=new Set([Tt,Lt,_r,Qi,Jn,Kn]),m=new Uint32Array(4),b=new Int32Array(4),E={textures:[],min:[],max:[],resolution:[]},S=null,w=null,P=[],g=[],y=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ti,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let D=this,V=!1,L=null,z=null,J=null,R=null;this._outputColorSpace=Dt;let X=0,K=0,B=null,ce=-1,W=null,j=new tt,se=new tt,Re=null,Z=new ie(0),ne=0,{width:Te,height:Fe}=t,Oe=1,Ee=null,nt=null,Ze=new tt(0,0,Te,Fe),Xe=new tt(0,0,Te,Fe),ft=!1,$e=new Gi,bt=new Es,Rt=!1,mi=!1,bi=new Ue,Ct=new A,ti=new tt,gi={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},xi=!1;function Zi(){return B===null?Oe:1}let N=i;function Ji(v,I){return t.getContext(v,I)}let st,Gt,ge,ct,Be,Ve,ii,T,_,U,te,Q,ae,ue,k,Y,he,C,q,H,re,oe,pe;try{let v={alpha:!0,depth:r,stencil:n,antialias:o,premultipliedAlpha:a,preserveDrawingBuffer:l,powerPreference:c,failIfMajorPerformanceCaveat:h};if("setAttribute"in t)t.setAttribute("data-engine",`three.js r${Hs}`);if(t.addEventListener("webglcontextlost",xe,!1),t.addEventListener("webglcontextrestored",Ne,!1),t.addEventListener("webglcontextcreationerror",qe,!1),N===null){if(N=Ji("webgl2",v),N===null)if(Ji("webgl2"))throw Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.");else throw Error("THREE.WebGLRenderer: Error creating WebGL context.")}De()}catch(v){throw t.removeEventListener("webglcontextlost",xe,!1),t.removeEventListener("webglcontextrestored",Ne,!1),t.removeEventListener("webglcontextcreationerror",qe,!1),ye("WebGLRenderer: "+v.message),v}function De(){if(st=new qp(N),st.init(),re=new Zc(N,st),Gt=new Op(N,st,e,re),ge=new Nm(N,st),Gt.reversedDepthBuffer&&d)ge.buffers.depth.setReversed(!0);z=N.createFramebuffer(),J=N.createFramebuffer(),R=N.createFramebuffer(),ct=new Jp(N),Be=new bm,Ve=new Um(N,st,ge,Be,Gt,re,ct),ii=new Xp(D),T=new $u(N),oe=new Up(N,T),_=new Yp(N,T,ct,oe),U=new Qp(N,_,T,oe,ct),C=new Kp(N,Gt,Ve),k=new Bp(Be),te=new Sm(D,ii,st,Gt,oe,k),Q=new Om(D,Be),ae=new wm,ue=new Cm(st),he=new Np(D,ii,ge,U,p,a),Y=new Dm(D,U,Gt),pe=new Bm(N,ct,Gt,ge),q=new Fp(N,st,ct),H=new Zp(N,st,ct),ct.programs=te.programs,D.capabilities=Gt,D.extensions=st,D.properties=Be,D.renderLists=ae,D.shadowMap=Y,D.state=ge,D.info=ct}if(x!==Tt)y=new $p(x,t.width,t.height,o,r,n);let Pe=new Kc(D,N);this.xr=Pe,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){let v=st.get("WEBGL_lose_context");if(v)v.loseContext()},this.forceContextRestore=function(){let v=st.get("WEBGL_lose_context");if(v)v.restoreContext()},this.getPixelRatio=function(){return Oe},this.setPixelRatio=function(v){if(v===void 0)return;Oe=v,this.setSize(Te,Fe,!1)},this.getSize=function(v){return v.set(Te,Fe)},this.setSize=function(v,I,G=!0){if(Pe.isPresenting){le("WebGLRenderer: Can't change size while VR device is presenting.");return}if(Te=v,Fe=I,t.width=Math.floor(v*Oe),t.height=Math.floor(I*Oe),G===!0)t.style.width=v+"px",t.style.height=I+"px";if(y!==null)y.setSize(t.width,t.height);this.setViewport(0,0,v,I)},this.getDrawingBufferSize=function(v){return v.set(Te*Oe,Fe*Oe).floor()},this.setDrawingBufferSize=function(v,I,G){Te=v,Fe=I,Oe=G,t.width=Math.floor(v*G),t.height=Math.floor(I*G),this.setViewport(0,0,v,I)},this.setEffects=function(v){if(x===Tt){ye("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(v){for(let I=0;I<v.length;I++)if(v[I].isOutputPass===!0){le("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}y.setEffects(v||[])},this.getCurrentViewport=function(v){return v.copy(j)},this.getViewport=function(v){return v.copy(Ze)},this.setViewport=function(v,I,G,F){if(v.isVector4)Ze.set(v.x,v.y,v.z,v.w);else Ze.set(v,I,G,F);ge.viewport(j.copy(Ze).multiplyScalar(Zi()).round())},this.getScissor=function(v){return v.copy(Xe)},this.setScissor=function(v,I,G,F){if(v.isVector4)Xe.set(v.x,v.y,v.z,v.w);else Xe.set(v,I,G,F);ge.scissor(se.copy(Xe).multiplyScalar(Zi()).round())},this.getScissorTest=function(){return ft},this.setScissorTest=function(v){ge.setScissorTest(ft=v)},this.setOpaqueSort=function(v){Ee=v},this.setTransparentSort=function(v){nt=v},this.getClearColor=function(v){return v.copy(he.getClearColor())},this.setClearColor=function(){he.setClearColor(...arguments)},this.getClearAlpha=function(){return he.getClearAlpha()},this.setClearAlpha=function(){he.setClearAlpha(...arguments)},this.clear=function(v=!0,I=!0,G=!0){let F=0;if(v){let O=!1;if(B!==null){let fe=B.texture.format;O=M.has(fe)}if(O){let fe=B.texture.type,Me=f.has(fe),de=he.getClearColor(),ve=he.getClearAlpha(),{r:Ce,g:ke,b:Ke}=de;if(Me)m[0]=Ce,m[1]=ke,m[2]=Ke,m[3]=ve,N.clearBufferuiv(N.COLOR,0,m);else b[0]=Ce,b[1]=ke,b[2]=Ke,b[3]=ve,N.clearBufferiv(N.COLOR,0,b)}else F|=N.COLOR_BUFFER_BIT}if(I)F|=N.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0);if(G)F|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295);if(F!==0)N.clear(F)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(v){v.setRenderer(this),L=v},this.dispose=function(){t.removeEventListener("webglcontextlost",xe,!1),t.removeEventListener("webglcontextrestored",Ne,!1),t.removeEventListener("webglcontextcreationerror",qe,!1),he.dispose(),ae.dispose(),ue.dispose(),Ve.dispose(),Be.dispose(),ii.dispose(),U.dispose(),_.dispose(),oe.dispose(),pe.dispose(),te.dispose(),Pe.dispose(),Pe.removeEventListener("sessionstart",lh),Pe.removeEventListener("sessionend",ch),en.stop()};function xe(v){v.preventDefault(),dn("WebGLRenderer: Context Lost."),V=!0}function Ne(){dn("WebGLRenderer: Context Restored."),V=!1;let v=ct.autoReset,I=Y.enabled,G=Y.autoUpdate,F=Y.needsUpdate,O=Y.type;De(),ct.autoReset=v,Y.enabled=I,Y.autoUpdate=G,Y.needsUpdate=F,Y.type=O}function qe(v){ye("WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function _e(v){let I=v.target;I.removeEventListener("dispose",_e),ot(I)}function ot(v){Vt(v),Be.remove(v)}function Vt(v){let I=Be.get(v).programs;if(I!==void 0){if(I.forEach(function(G){te.releaseProgram(G)}),v.isShaderMaterial)te.releaseShaderCache(v)}}this.renderBufferDirect=function(v,I,G,F,O,fe){if(I===null)I=gi;let Me=O.isMesh&&O.matrixWorld.determinantAffine()<0,de=ug(v,I,G,F,O);ge.setMaterial(F,Me);let ve=G.index,Ce=1;if(F.wireframe===!0){if(ve=_.getWireframeAttribute(G),ve===void 0)return;Ce=2}let ke=G.drawRange,Ke=G.attributes.position,Se=ke.start*Ce,Qe=(ke.start+ke.count)*Ce;if(fe!==null)Se=Math.max(Se,fe.start*Ce),Qe=Math.min(Qe,(fe.start+fe.count)*Ce);if(ve!==null)Se=Math.max(Se,0),Qe=Math.min(Qe,ve.count);else if(Ke!==void 0&&Ke!==null)Se=Math.max(Se,0),Qe=Math.min(Qe,Ke.count);let Pt=Qe-Se;if(Pt<0||Pt===1/0)return;oe.setup(O,F,de,G,ve);let ht,lt=q;if(ve!==null)ht=T.get(ve),lt=H,lt.setIndex(ht);if(O.isMesh)if(F.wireframe===!0)ge.setLineWidth(F.wireframeLinewidth*Zi()),lt.setMode(N.LINES);else lt.setMode(N.TRIANGLES);else if(O.isLine){let ri=F.linewidth;if(ri===void 0)ri=1;if(ge.setLineWidth(ri*Zi()),O.isLineSegments)lt.setMode(N.LINES);else if(O.isLineLoop)lt.setMode(N.LINE_LOOP);else lt.setMode(N.LINE_STRIP)}else if(O.isPoints)lt.setMode(N.POINTS);else if(O.isSprite)lt.setMode(N.TRIANGLES);if(O.isBatchedMesh)if(!st.get("WEBGL_multi_draw")){let{_multiDrawStarts:ri,_multiDrawCounts:be,_multiDrawCount:hi}=O,it=ve?T.get(ve).bytesPerElement:1,tn=Be.get(F).currentProgram.getUniforms();for(let ni=0;ni<hi;ni++)tn.setValue(N,"_gl_DrawID",ni),lt.render(ri[ni]/it,be[ni])}else lt.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else if(O.isInstancedMesh)lt.renderInstances(Se,Pt,O.count);else if(G.isInstancedBufferGeometry){let ri=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,be=Math.min(G.instanceCount,ri);lt.renderInstances(Se,Pt,be)}else lt.render(Se,Pt)};function mr(v,I,G,F){if(L!==null&&v.isNodeMaterial)L.setObject(F,v);if(Rt===!0)k.setState(v,G,!1);if(v.transparent===!0&&v.side===Ht&&v.forceSinglePass===!1)v.side=dt,v.needsUpdate=!0,ks(v,I,F),v.side=Ni,v.needsUpdate=!0,ks(v,I,F),v.side=Ht;else ks(v,I,F)}this.compile=function(v,I,G=null){if(G===null)G=v;if(L!==null)L.renderStart(v,I,G);if(w=ue.get(G),w.init(I),g.push(w),G.traverseVisible(function(O){if(O.isLight&&O.layers.test(I.layers)){if(w.pushLight(O),O.castShadow)w.pushShadow(O)}}),v!==G)v.traverseVisible(function(O){if(O.isLight&&O.layers.test(I.layers)){if(w.pushLight(O),O.castShadow)w.pushShadow(O)}});if(w.setupLights(),L!==null)L.updateLights(w.state.lightsArray);if(mi=this.localClippingEnabled,Rt=k.init(this.clippingPlanes,mi),Rt===!0)k.setGlobalState(this.clippingPlanes,I);if(L!==null)Y.render(w.state.shadowsArray,G,I);let F=new Set;if(v.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;let fe=O.material;if(fe)if(Array.isArray(fe))for(let Me=0;Me<fe.length;Me++){let de=fe[Me];mr(de,G,I,O),F.add(de)}else mr(fe,G,I,O),F.add(fe)}),w=g.pop(),L!==null)L.renderEnd();return F},this.compileAsync=function(v,I,G=null){let F=this.compile(v,I,G);return new Promise((O)=>{function fe(){if(F.forEach(function(Me){let ve=Be.get(Me).currentProgram;if(ve===void 0||ve.isReady())F.delete(Me)}),F.size===0){O(v);return}setTimeout(fe,10)}if(st.get("KHR_parallel_shader_compile")!==null)fe();else setTimeout(fe,10)})};let Ql=null;function cg(v){if(Ql)Ql(v)}function lh(){en.stop()}function ch(){en.start()}let en=new Ll;if(en.setAnimationLoop(cg),typeof self<"u")en.setContext(self);this.setAnimationLoop=function(v){Ql=v,Pe.setAnimationLoop(v),v===null?en.stop():en.start()},Pe.addEventListener("sessionstart",lh),Pe.addEventListener("sessionend",ch),this.render=function(v,I){if(I!==void 0&&I.isCamera!==!0){ye("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(V===!0)return;if(L!==null)L.renderStart(v,I);let G=Pe.enabled===!0&&Pe.isPresenting===!0,F=y!==null&&(B===null||G)&&y.begin(D,B);if(v.matrixWorldAutoUpdate===!0)v.updateMatrixWorld();if(I.parent===null&&I.matrixWorldAutoUpdate===!0)I.updateMatrixWorld();if(Pe.enabled===!0&&Pe.isPresenting===!0&&(y===null||y.isCompositing()===!1)){if(Pe.cameraAutoUpdate===!0)Pe.updateCamera(I);I=Pe.getCamera()}if(v.isScene===!0)v.onBeforeRender(D,v,I,B);if(w=ue.get(v,g.length),w.init(I),w.state.textureUnits=Ve.getTextureUnits(),g.push(w),bi.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),I.isArrayCamera)bt.setFromArrayCamera(I);else $e.setFromProjectionMatrix(bi,Xt,I.reversedDepth);if(mi=this.localClippingEnabled,Rt=k.init(this.clippingPlanes,mi),S=ae.get(v,P.length),S.init(),P.push(S),this.info.render.frame++,Pe.enabled===!0&&Pe.isPresenting===!0){let Me=D.xr.getDepthSensingMesh();if(Me!==null)$l(Me,I,-1/0,D.sortObjects)}if($l(v,I,0,D.sortObjects),S.finish(),L!==null)L.updateLights(w.state.lightsArray);if(D.sortObjects===!0)S.sort(Ee,nt);if(xi=Pe.enabled===!1||Pe.isPresenting===!1||Pe.hasDepthSensing()===!1,xi)he.addToRenderList(S,v);if(this.info.autoReset===!0)this.info.reset();if(Rt===!0)k.beginShadows();let O=w.state.shadowsArray;if(Y.render(O,v,I),Rt===!0)k.endShadows();if((F&&y.hasRenderPass())===!1){let Me=S.opaque,de=S.transmissive;if(w.setupLights(),I.isArrayCamera){let ve=I.cameras;if(de.length>0)for(let Ce=0,ke=ve.length;Ce<ke;Ce++){let Ke=ve[Ce];uh(Me,de,v,Ke)}if(xi)he.render(v);for(let Ce=0,ke=ve.length;Ce<ke;Ce++){let Ke=ve[Ce];hh(S,v,Ke,Ke.viewport)}}else{if(de.length>0)uh(Me,de,v,I);if(xi)he.render(v);hh(S,v,I)}}if(B!==null&&K===0)Ve.updateMultisampleRenderTarget(B),Ve.updateRenderTargetMipmap(B);if(F)y.end(D);if(v.isScene===!0)v.onAfterRender(D,v,I);if(oe.resetDefaultState(),ce=-1,W=null,g.pop(),g.length>0){if(w=g[g.length-1],Ve.setTextureUnits(w.state.textureUnits),Rt===!0)k.setGlobalState(D.clippingPlanes,w.state.camera)}else w=null;if(P.pop(),P.length>0)S=P[P.length-1];else S=null;if(L!==null)L.renderEnd()};function $l(v,I,G,F){if(v.visible===!1)return;if(v.layers.test(I.layers)){if(v.isGroup)G=v.renderOrder;else if(v.isLOD){if(v.autoUpdate===!0)v.update(I)}else if(v.isLight){if(w.pushLight(v),v.castShadow)w.pushShadow(v)}else if(v.isSprite){let Me=I.isArrayCamera?bt:$e;if(!v.frustumCulled||v.intersectsFrustum(Me)){if(F)ti.setFromMatrixPosition(v.matrixWorld).applyMatrix4(bi);let de=U.update(v),ve=v.material;if(ve.visible)S.push(v,de,ve,G,ti.z,null,I)}}else if(v.isMesh||v.isLine||v.isPoints){let Me=I.isArrayCamera?bt:$e;if(!v.frustumCulled||v.intersectsFrustum(Me)){let de=U.update(v),ve=v.material;if(F){if(v.boundingSphere!==void 0){if(v.boundingSphere===null)v.computeBoundingSphere();ti.copy(v.boundingSphere.center)}else{if(de.boundingSphere===null)de.computeBoundingSphere();ti.copy(de.boundingSphere.center)}ti.applyMatrix4(v.matrixWorld).applyMatrix4(bi)}if(Array.isArray(ve)){let Ce=de.groups;for(let ke=0,Ke=Ce.length;ke<Ke;ke++){let Se=Ce[ke],Qe=ve[Se.materialIndex];if(Qe&&Qe.visible)S.push(v,de,Qe,G,ti.z,Se,I)}}else if(ve.visible)S.push(v,de,ve,G,ti.z,null,I)}}}let fe=v.children;for(let Me=0,de=fe.length;Me<de;Me++)$l(fe[Me],I,G,F)}function hh(v,I,G,F){let{opaque:O,transmissive:fe,transparent:Me}=v;if(w.setupLightsView(G),Rt===!0)k.setGlobalState(D.clippingPlanes,G);if(F)ge.viewport(j.copy(F));if(O.length>0)ga(O,I,G);if(fe.length>0)ga(fe,I,G);if(Me.length>0)ga(Me,I,G);ge.buffers.depth.setTest(!0),ge.buffers.depth.setMask(!0),ge.buffers.color.setMask(!0),ge.setPolygonOffset(!1)}function uh(v,I,G,F){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[F.id]===void 0){let Se=st.has("EXT_color_buffer_half_float")||st.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[F.id]=new pt(1,1,{generateMipmaps:!0,type:Se?xt:Tt,minFilter:ui,samples:Math.max(4,Gt.samples),stencilBuffer:n,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Ge.workingColorSpace})}let fe=w.state.transmissionRenderTarget[F.id],Me=F.viewport||j;fe.setSize(Me.z*D.transmissionResolutionScale,Me.w*D.transmissionResolutionScale);let de=D.getRenderTarget(),ve=D.getActiveCubeFace(),Ce=D.getActiveMipmapLevel();if(D.setRenderTarget(fe),D.getClearColor(Z),ne=D.getClearAlpha(),ne<1)D.setClearColor(16777215,0.5);if(D.clear(),xi)he.render(G);let ke=D.toneMapping;D.toneMapping=Ti;let Ke=F.viewport;if(F.viewport!==void 0)F.viewport=void 0;if(w.setupLightsView(F),Rt===!0)k.setGlobalState(D.clippingPlanes,F);if(ga(v,G,F),Ve.updateMultisampleRenderTarget(fe),Ve.updateRenderTargetMipmap(fe),st.has("WEBGL_multisampled_render_to_texture")===!1){let Se=!1;for(let Qe=0,Pt=I.length;Qe<Pt;Qe++){let ht=I[Qe],{object:lt,geometry:ri,material:be,group:hi}=ht;if(be.side===Ht&&lt.layers.test(F.layers)){let it=be.side;be.side=dt,be.needsUpdate=!0,fh(lt,G,F,ri,be,hi),be.side=it,be.needsUpdate=!0,Se=!0}}if(Se===!0)Ve.updateMultisampleRenderTarget(fe),Ve.updateRenderTargetMipmap(fe)}if(D.setRenderTarget(de,ve,Ce),D.setClearColor(Z,ne),Ke!==void 0)F.viewport=Ke;D.toneMapping=ke}function ga(v,I,G){let F=I.isScene===!0?I.overrideMaterial:null;for(let O=0,fe=v.length;O<fe;O++){let Me=v[O],{object:de,geometry:ve,group:Ce}=Me,ke=Me.material;if(ke.allowOverride===!0&&F!==null)ke=F;if(de.layers.test(G.layers))fh(de,I,G,ve,ke,Ce)}}function fh(v,I,G,F,O,fe){if(L!==null&&O.isNodeMaterial)L.setObject(v,O);if(v.onBeforeRender(D,I,G,F,O,fe),v.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),O.onBeforeRender(D,I,G,F,v,fe),O.transparent===!0&&O.side===Ht&&O.forceSinglePass===!1)O.side=dt,O.needsUpdate=!0,D.renderBufferDirect(G,I,F,O,v,fe),O.side=Ni,O.needsUpdate=!0,D.renderBufferDirect(G,I,F,O,v,fe),O.side=Ht;else D.renderBufferDirect(G,I,F,O,v,fe);v.onAfterRender(D,I,G,F,O,fe)}function dh(v){let I=0;for(let G of v)if(G.texture!==null)I++;return I}function ks(v,I,G){if(I.isScene!==!0)I=gi;let F=Be.get(v),O=w.state.lights,fe=w.state.shadowsArray,Me=O.state.version,de=te.getParameters(v,O.state,fe,I,G,w.state.lightProbeGridArray),ve=te.getProgramCacheKey(de),Ce=F.programs;F.environment=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?I.environment:null,F.fog=I.fog;let ke=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap;if(F.envMap=ii.get(v.envMap||F.environment,ke),F.envMapRotation=F.environment!==null&&v.envMap===null?I.environmentRotation:v.envMapRotation,Ce===void 0)v.addEventListener("dispose",_e),Ce=new Map,F.programs=Ce,F.programVariants=new Map;let Ke=Ce.get(ve);if(Ke!==void 0){if(F.currentProgram===Ke&&F.lightsStateVersion===Me)return mh(v,de),Ke}else{if(de.uniforms=te.getUniforms(v),L!==null&&v.isNodeMaterial)L.build(v,G,de);v.onBeforeCompile(de,D),Ke=te.acquireProgram(de,ve),Ce.set(ve,Ke),F.uniforms=de.uniforms}let Se=F.uniforms;if(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)Se.clippingPlanes=k.uniform;if(mh(v,de),F.needsLights=dg(v),F.lightsStateVersion=Me,F.needsLights)Se.ambientLightColor.value=O.state.ambient,Se.lightProbe.value=O.state.probe,Se.sunLights.value=O.state.sun,Se.sunLightShadows.value=O.state.sunShadow,Se.directionalLights.value=O.state.directional,Se.directionalLightShadows.value=O.state.directionalShadow,Se.spotLights.value=O.state.spot,Se.spotLightShadows.value=O.state.spotShadow,Se.rectAreaLights.value=O.state.rectArea,Se.ltc_1.value=O.state.rectAreaLTC1,Se.ltc_2.value=O.state.rectAreaLTC2,Se.pointLights.value=O.state.point,Se.pointLightShadows.value=O.state.pointShadow,Se.hemisphereLights.value=O.state.hemi,Se.sunShadowMatrix.value=O.state.sunShadowMatrix,Se.sunShadowCascade.value=O.state.sunShadowCascade,Se.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Se.spotLightMatrix.value=O.state.spotLightMatrix,Se.spotLightMap.value=O.state.spotLightMap,Se.pointShadowMatrix.value=O.state.pointShadowMatrix;return F.numLightProbeGrids=dh(w.state.lightProbeGridArray),F.currentProgram=Ke,F.uniformsList=null,Ke}function hg(v,I,G,F,O){let fe=Be.get(v),Me=fe.currentProgram.id+","+F+","+O,de=fe.programVariants.get(Me);if(de===void 0)de=ks(v,I,G),fe.programVariants.set(Me,de);else fe.currentProgram=de,fe.uniformsList=null,fe.outputColorSpace=F,fe.toneMapping=O;return de}function ph(v){if(v.uniformsList===null){let I=v.currentProgram.getUniforms();v.uniformsList=Dn.seqWithValue(I.seq,v.uniforms)}return v.uniformsList}function mh(v,I){let G=Be.get(v);G.outputColorSpace=I.outputColorSpace,G.batching=I.batching,G.batchingColor=I.batchingColor,G.instancing=I.instancing,G.instancingColor=I.instancingColor,G.instancingMorph=I.instancingMorph,G.skinning=I.skinning,G.morphTargets=I.morphTargets,G.morphNormals=I.morphNormals,G.morphColors=I.morphColors,G.morphTargetsCount=I.morphTargetsCount,G.numClippingPlanes=I.numClippingPlanes,G.numIntersection=I.numClipIntersection,G.vertexAlphas=I.vertexAlphas,G.vertexTangents=I.vertexTangents,G.toneMapping=I.toneMapping}function ug(v,I,G,F,O){if(I.isScene!==!0)I=gi;Ve.resetTextureUnits();let fe=I.fog,Me=F.isMeshStandardMaterial||F.isMeshLambertMaterial||F.isMeshPhongMaterial?I.environment:null,de=B===null?D.outputColorSpace:B.isXRRenderTarget===!0?B.texture.colorSpace:Ge.workingColorSpace,ve=F.isMeshStandardMaterial||F.isMeshLambertMaterial&&!F.envMap||F.isMeshPhongMaterial&&!F.envMap,Ce=ii.get(F.envMap||Me,ve),ke=F.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Ke=!!G.attributes.tangent&&(!!F.normalMap||F.anisotropy>0),Se=!!G.morphAttributes.position,Qe=!!G.morphAttributes.normal,Pt=!!G.morphAttributes.color,ht=Ti;if(F.toneMapped){if(B===null||B.isXRRenderTarget===!0)ht=D.toneMapping}let lt=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,ri=lt!==void 0?lt.length:0,be=Be.get(F),hi=w.state.lights;if(Rt===!0){if(mi===!0||v!==W){let yt=v===W&&F.id===ce;k.setState(F,v,yt)}}let it=!1,tn=!1;if(F.version===be.__version){if(be.needsLights&&be.lightsStateVersion!==hi.state.version)it=!0;else if(O.isBatchedMesh&&be.batching===!1)it=!0;else if(!O.isBatchedMesh&&be.batching===!0)it=!0;else if(O.isBatchedMesh&&be.batchingColor===!0&&O._colorsTexture===null)it=!0;else if(O.isBatchedMesh&&be.batchingColor===!1&&O._colorsTexture!==null)it=!0;else if(O.isInstancedMesh&&be.instancing===!1)it=!0;else if(!O.isInstancedMesh&&be.instancing===!0)it=!0;else if(O.isSkinnedMesh&&be.skinning===!1)it=!0;else if(!O.isSkinnedMesh&&be.skinning===!0)it=!0;else if(O.isInstancedMesh&&be.instancingColor===!0&&O.instanceColor===null)it=!0;else if(O.isInstancedMesh&&be.instancingColor===!1&&O.instanceColor!==null)it=!0;else if(O.isInstancedMesh&&be.instancingMorph===!0&&O.morphTexture===null)it=!0;else if(O.isInstancedMesh&&be.instancingMorph===!1&&O.morphTexture!==null)it=!0;else if(be.envMap!==Ce)it=!0;else if(F.fog===!0&&be.fog!==fe)it=!0;else if(be.numClippingPlanes!==void 0&&(be.numClippingPlanes!==k.numPlanes||be.numIntersection!==k.numIntersection))it=!0;else if(be.vertexAlphas!==ke)it=!0;else if(be.vertexTangents!==Ke)it=!0;else if(be.morphTargets!==Se)it=!0;else if(be.morphNormals!==Qe)it=!0;else if(be.morphColors!==Pt)it=!0;else if(be.morphTargetsCount!==ri)it=!0;else if(be.numLightProbeGrids!==dh(w.state.lightProbeGridArray))it=!0;else if(be.outputColorSpace!==de||be.toneMapping!==ht)tn=!0}else it=!0,be.__version=F.version;let ni=be.currentProgram;if(it===!0||tn===!0){if(ni=tn===!0?hg(F,I,O,de,ht):ks(F,I,O),L&&F.isNodeMaterial)L.onUpdateProgram(F,ni,be)}let xa=!1,Pr=!1,rn=!1,je=ni.getUniforms(),Jt=be.uniforms;if(ge.useProgram(ni.program))xa=!0,Pr=!0,rn=!0;if(F.id!==ce)ce=F.id,Pr=!0;if(xa||W!==v){if(ge.buffers.depth.getReversed()&&v.reversedDepth!==!0)v._reversedDepth=!0,v.updateProjectionMatrix();je.setValue(N,"projectionMatrix",v.projectionMatrix),je.setValue(N,"viewMatrix",v.matrixWorldInverse);let kt=je.map.cameraPosition;if(kt!==void 0)kt.setValue(N,Ct.setFromMatrixPosition(v.matrixWorld));if(Gt.logarithmicDepthBuffer)je.setValue(N,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2));if(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial)je.setValue(N,"isOrthographic",v.isOrthographicCamera===!0);if(W!==v)W=v,Pr=!0,rn=!0}if(be.needsLights){if(hi.state.sunShadowMap.length>0)je.setValue(N,"sunShadowMap",hi.state.sunShadowMap,Ve);if(hi.state.directionalShadowMap.length>0)je.setValue(N,"directionalShadowMap",hi.state.directionalShadowMap,Ve);if(hi.state.spotShadowMap.length>0)je.setValue(N,"spotShadowMap",hi.state.spotShadowMap,Ve);if(hi.state.pointShadowMap.length>0)je.setValue(N,"pointShadowMap",hi.state.pointShadowMap,Ve)}if(O.isSkinnedMesh){je.setOptional(N,O,"bindMatrix"),je.setOptional(N,O,"bindMatrixInverse");let yt=O.skeleton;if(yt){if(yt.boneTexture===null)yt.computeBoneTexture();je.setValue(N,"boneTexture",yt.boneTexture,Ve)}}if(O.isBatchedMesh){if(je.setOptional(N,O,"batchingTexture"),je.setValue(N,"batchingTexture",O._matricesTexture,Ve),je.setOptional(N,O,"batchingIdTexture"),je.setValue(N,"batchingIdTexture",O._indirectTexture,Ve),je.setOptional(N,O,"batchingColorTexture"),O._colorsTexture!==null)je.setValue(N,"batchingColorTexture",O._colorsTexture,Ve)}let Ki=G.morphAttributes;if(Ki.position!==void 0||Ki.normal!==void 0||Ki.color!==void 0)C.update(O,G,ni);if(Pr||be.receiveShadow!==O.receiveShadow)be.receiveShadow=O.receiveShadow,je.setValue(N,"receiveShadow",O.receiveShadow);if((F.isMeshStandardMaterial||F.isMeshLambertMaterial||F.isMeshPhongMaterial)&&F.envMap===null&&I.environment!==null)Jt.envMapIntensity.value=I.environmentIntensity;if(Jt.dfgLUT!==void 0)Jt.dfgLUT.value=zm();if(Pr){if(je.setValue(N,"toneMappingExposure",D.toneMappingExposure),be.needsLights)fg(Jt,rn);if(fe&&F.fog===!0)Q.refreshFogUniforms(Jt,fe);if(Q.refreshMaterialUniforms(Jt,F,Oe,Fe,w.state.transmissionRenderTarget[v.id]),be.needsLights&&be.numLightProbeGrids>0){let yt=E,kt=0;for(let gr of w.state.lightProbeGridArray){if(gr.texture===null)continue;yt.textures[kt]=gr.texture,yt.min[kt]=gr.boundingBox.min,yt.max[kt]=gr.boundingBox.max,yt.resolution[kt]=gr.resolution,kt++}for(let gr in yt)yt[gr].length=kt;Jt.probesSH.value=yt.textures,Jt.probesMin.value=yt.min,Jt.probesMax.value=yt.max,Jt.probesResolution.value=yt.resolution}Dn.upload(N,ph(be),Jt,Ve)}if(F.isShaderMaterial&&F.uniformsNeedUpdate===!0)Dn.upload(N,ph(be),Jt,Ve),F.uniformsNeedUpdate=!1;if(F.isSpriteMaterial)je.setValue(N,"center",O.center);if(je.setValue(N,"modelViewMatrix",O.modelViewMatrix),je.setValue(N,"normalMatrix",O.normalMatrix),je.setValue(N,"modelMatrix",O.matrixWorld),F.uniformsGroups!==void 0){let yt=F.uniformsGroups;for(let kt=0,gr=yt.length;kt<gr;kt++){let xh=yt[kt];pe.update(xh,ni),pe.bind(xh,ni)}}return ni}function fg(v,I){v.ambientLightColor.needsUpdate=I,v.lightProbe.needsUpdate=I,v.sunLights.needsUpdate=I,v.sunLightShadows.needsUpdate=I,v.directionalLights.needsUpdate=I,v.directionalLightShadows.needsUpdate=I,v.pointLights.needsUpdate=I,v.pointLightShadows.needsUpdate=I,v.spotLights.needsUpdate=I,v.spotLightShadows.needsUpdate=I,v.rectAreaLights.needsUpdate=I,v.hemisphereLights.needsUpdate=I}function dg(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return X},this.getActiveMipmapLevel=function(){return K},this.getRenderTarget=function(){return B},this.setRenderTargetTextures=function(v,I,G){let F=Be.get(v);if(F.__autoAllocateDepthBuffer=v.resolveDepthBuffer===!1,F.__autoAllocateDepthBuffer===!1)F.__useRenderToTexture=!1;Be.get(v.texture).__webglTexture=I,Be.get(v.depthTexture).__webglTexture=F.__autoAllocateDepthBuffer?void 0:G,F.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(v,I){let G=Be.get(v);G.__webglFramebuffer=I,G.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(v,I=0,G=0){B=v,X=I,K=G;let F=null,O=!1,fe=!1;if(v){let de=Be.get(v);if(de.__useDefaultFramebuffer!==void 0){ge.bindFramebuffer(N.FRAMEBUFFER,de.__webglFramebuffer),j.copy(v.viewport),se.copy(v.scissor),Re=v.scissorTest,ge.viewport(j),ge.scissor(se),ge.setScissorTest(Re),ce=-1;return}else if(de.__webglFramebuffer===void 0)Ve.setupRenderTarget(v);else if(de.__hasExternalTextures)Ve.rebindTextures(v,Be.get(v.texture).__webglTexture,Be.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){let ke=v.depthTexture;if(de.__boundDepthTexture!==ke){if(ke!==null&&Be.has(ke)&&(v.width!==ke.image.width||v.height!==ke.image.height))throw Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Ve.setupDepthRenderbuffer(v)}}let ve=v.texture;if(ve.isData3DTexture||ve.isDataArrayTexture||ve.isCompressedArrayTexture)fe=!0;let Ce=Be.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget){if(Array.isArray(Ce[I]))F=Ce[I][G];else F=Ce[I];O=!0}else if(v.samples>0&&Ve.useMultisampledRTT(v)===!1)F=Be.get(v).__webglMultisampledFramebuffer;else if(Array.isArray(Ce))F=Ce[G];else F=Ce;j.copy(v.viewport),se.copy(v.scissor),Re=v.scissorTest}else j.copy(Ze).multiplyScalar(Oe).floor(),se.copy(Xe).multiplyScalar(Oe).floor(),Re=ft;if(G!==0)F=z;if(ge.bindFramebuffer(N.FRAMEBUFFER,F))ge.drawBuffers(v,F);if(ge.viewport(j),ge.scissor(se),ge.setScissorTest(Re),O){let de=Be.get(v.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+I,de.__webglTexture,G)}else if(fe){let de=I;for(let ve=0;ve<v.textures.length;ve++){let Ce=Be.get(v.textures[ve]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+ve,Ce.__webglTexture,G,de)}}else if(v!==null&&G!==0){let de=Be.get(v.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,de.__webglTexture,G)}ce=-1};function gh(v){let I=Be.get(v);if(I.__readFormat!==v.format||I.__readType!==v.type)I.__readFormat=v.format,I.__readType=v.type,I.__formatReadable=Gt.textureFormatReadable(v.format),I.__typeReadable=Gt.textureTypeReadable(v.type);return I}if(this.readRenderTargetPixels=function(v,I,G,F,O,fe,Me,de=0){if(!(v&&v.isWebGLRenderTarget)){ye("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ve=Be.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&Me!==void 0){if(ve=ve[Me],Array.isArray(ve))ve=ve[0]}if(ve){ge.bindFramebuffer(N.FRAMEBUFFER,ve);try{let Ce=v.textures[de],{format:ke,type:Ke}=Ce;if(v.textures.length>1)N.readBuffer(N.COLOR_ATTACHMENT0+de);let Se=gh(Ce);if(Se.__formatReadable===!1){ye("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Se.__typeReadable===!1){ye("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}if(I>=0&&I<=v.width-F&&(G>=0&&G<=v.height-O))N.readPixels(I,G,F,O,re.convert(ke),re.convert(Ke),fe)}finally{let Ce=B!==null?Be.get(B).__webglFramebuffer:null;ge.bindFramebuffer(N.FRAMEBUFFER,Ce)}}},this.readRenderTargetPixelsAsync=async function(v,I,G,F,O,fe,Me,de=0){if(!(v&&v.isWebGLRenderTarget))throw Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ve=Be.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&Me!==void 0){if(ve=ve[Me],Array.isArray(ve))ve=ve[0]}if(ve)if(I>=0&&I<=v.width-F&&(G>=0&&G<=v.height-O)){ge.bindFramebuffer(N.FRAMEBUFFER,ve);let Ce=v.textures[de],{format:ke,type:Ke}=Ce;if(v.textures.length>1)N.readBuffer(N.COLOR_ATTACHMENT0+de);let Se=gh(Ce);if(Se.__formatReadable===!1)throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Se.__typeReadable===!1)throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Qe=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,Qe),N.bufferData(N.PIXEL_PACK_BUFFER,fe.byteLength,N.STREAM_READ),N.readPixels(I,G,F,O,re.convert(ke),re.convert(Ke),0),N.bindBuffer(N.PIXEL_PACK_BUFFER,null);let Pt=B!==null?Be.get(B).__webglFramebuffer:null;ge.bindFramebuffer(N.FRAMEBUFFER,Pt);let ht=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await $h(N,ht,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,Qe),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,fe),N.bindBuffer(N.PIXEL_PACK_BUFFER,null),N.deleteBuffer(Qe),N.deleteSync(ht),fe}else throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(v,I=null,G=0){let F=Math.pow(2,-G),O=Math.floor(v.image.width*F),fe=Math.floor(v.image.height*F),Me=I!==null?I.x:0,de=I!==null?I.y:0;Ve.setTexture2D(v,0),N.copyTexSubImage2D(N.TEXTURE_2D,G,0,0,Me,de,O,fe),ge.unbindTexture()},this.copyTextureToTexture=function(v,I,G=null,F=null,O=0,fe=0){let Me,de,ve,Ce,ke,Ke,Se,Qe,Pt,ht=v.isCompressedTexture?v.mipmaps[fe]:v.image;if(G!==null)Me=G.max.x-G.min.x,de=G.max.y-G.min.y,ve=G.isBox3?G.max.z-G.min.z:1,Ce=G.min.x,ke=G.min.y,Ke=G.isBox3?G.min.z:0;else{let je=Math.pow(2,-O);if(Me=Math.floor(v.width*je),de=Math.floor(v.height*je),v.isDataArrayTexture)ve=ht.depth;else if(v.isData3DTexture)ve=Math.floor(ht.depth*je);else ve=1;Ce=0,ke=0,Ke=0}if(F!==null)Se=F.x,Qe=F.y,Pt=F.z;else Se=0,Qe=0,Pt=0;let lt=re.convert(I.format),ri=re.convert(I.type),be;if(I.isData3DTexture)Ve.setTexture3D(I,0),be=N.TEXTURE_3D;else if(I.isDataArrayTexture||I.isCompressedArrayTexture)Ve.setTexture2DArray(I,0),be=N.TEXTURE_2D_ARRAY;else Ve.setTexture2D(I,0),be=N.TEXTURE_2D;ge.activeTexture(N.TEXTURE0),ge.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,I.flipY),ge.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),ge.pixelStorei(N.UNPACK_ALIGNMENT,I.unpackAlignment);let hi=ge.getParameter(N.UNPACK_ROW_LENGTH),it=ge.getParameter(N.UNPACK_IMAGE_HEIGHT),tn=ge.getParameter(N.UNPACK_SKIP_PIXELS),ni=ge.getParameter(N.UNPACK_SKIP_ROWS),xa=ge.getParameter(N.UNPACK_SKIP_IMAGES);ge.pixelStorei(N.UNPACK_ROW_LENGTH,ht.width),ge.pixelStorei(N.UNPACK_IMAGE_HEIGHT,ht.height),ge.pixelStorei(N.UNPACK_SKIP_PIXELS,Ce),ge.pixelStorei(N.UNPACK_SKIP_ROWS,ke),ge.pixelStorei(N.UNPACK_SKIP_IMAGES,Ke);let Pr=v.isDataArrayTexture||v.isData3DTexture,rn=I.isDataArrayTexture||I.isData3DTexture;if(v.isDepthTexture){let je=Be.get(v),Jt=Be.get(I),Ki=Be.get(je.__renderTarget),yt=Be.get(Jt.__renderTarget);ge.bindFramebuffer(N.READ_FRAMEBUFFER,Ki.__webglFramebuffer),ge.bindFramebuffer(N.DRAW_FRAMEBUFFER,yt.__webglFramebuffer);for(let kt=0;kt<ve;kt++){if(Pr)N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Be.get(v).__webglTexture,O,Ke+kt),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Be.get(I).__webglTexture,fe,Pt+kt);N.blitFramebuffer(Ce,ke,Ce+Me,ke+de,Se,Qe,Se+Me,Qe+de,N.DEPTH_BUFFER_BIT,N.NEAREST)}ge.bindFramebuffer(N.READ_FRAMEBUFFER,null),ge.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(O!==0||v.isRenderTargetTexture||Be.has(v)){let je=Be.get(v),Jt=Be.get(I);ge.bindFramebuffer(N.READ_FRAMEBUFFER,J),ge.bindFramebuffer(N.DRAW_FRAMEBUFFER,R);for(let Ki=0;Ki<ve;Ki++){if(Pr)N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,je.__webglTexture,O,Ke+Ki);else N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,je.__webglTexture,O);if(rn)N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Jt.__webglTexture,fe,Pt+Ki);else N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Jt.__webglTexture,fe);if(O!==0)N.blitFramebuffer(Ce,ke,Ce+Me,ke+de,Se,Qe,Se+Me,Qe+de,N.COLOR_BUFFER_BIT,N.NEAREST);else if(rn)N.copyTexSubImage3D(be,fe,Se,Qe,Pt+Ki,Ce,ke,Me,de);else N.copyTexSubImage2D(be,fe,Se,Qe,Ce,ke,Me,de)}ge.bindFramebuffer(N.READ_FRAMEBUFFER,null),ge.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(rn)if(v.isDataTexture||v.isData3DTexture)N.texSubImage3D(be,fe,Se,Qe,Pt,Me,de,ve,lt,ri,ht.data);else if(I.isCompressedArrayTexture)N.compressedTexSubImage3D(be,fe,Se,Qe,Pt,ht.width,ht.height,ve,lt,ht.data);else N.texSubImage3D(be,fe,Se,Qe,Pt,Me,de,ve,lt,ri,ht);else if(v.isDataTexture)N.texSubImage2D(N.TEXTURE_2D,fe,Se,Qe,Me,de,lt,ri,ht.data);else if(v.isCompressedTexture)N.compressedTexSubImage2D(N.TEXTURE_2D,fe,Se,Qe,ht.width,ht.height,lt,ht.data);else N.texSubImage2D(N.TEXTURE_2D,fe,Se,Qe,Me,de,lt,ri,ht);if(ge.pixelStorei(N.UNPACK_ROW_LENGTH,hi),ge.pixelStorei(N.UNPACK_IMAGE_HEIGHT,it),ge.pixelStorei(N.UNPACK_SKIP_PIXELS,tn),ge.pixelStorei(N.UNPACK_SKIP_ROWS,ni),ge.pixelStorei(N.UNPACK_SKIP_IMAGES,xa),fe===0&&I.generateMipmaps===!0&&I.mipmapsAutoUpdate===!0)N.generateMipmap(be);ge.unbindTexture()},this.initRenderTarget=function(v){if(Be.get(v).__webglFramebuffer===void 0)Ve.setupRenderTarget(v)},this.initTexture=function(v){if(v.isCubeTexture)Ve.setTextureCube(v,0);else if(v.isData3DTexture)Ve.setTexture3D(v,0);else if(v.isDataArrayTexture||v.isCompressedArrayTexture)Ve.setTexture2DArray(v,0);else Ve.setTexture2D(v,0);ge.unbindTexture()},this.resetState=function(){X=0,K=0,B=null,ge.reset(),oe.reset()},typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Xt}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Ge._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ge._getUnpackColorSpace()}}var Fs={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class Wi{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}var S_=new Zr(-1,1,1,-1,0,1);class Gm extends Le{constructor(){super();this.setAttribute("position",new Ae([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Ae([0,2,0,0,2,0],2))}}var b_=new Gm;class Nn{constructor(e){this._mesh=new we(b_,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,S_)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class Qc extends Wi{constructor(e,t="tDiffuse"){super();if(this.textureID=t,this.uniforms=null,this.material=null,e instanceof _t)this.uniforms=e.uniforms,this.material=e;else if(e)this.uniforms=hr.clone(e.uniforms),this.material=new _t({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader});this._fsQuad=new Nn(this.material)}render(e,t,i){if(this.uniforms[this.textureID])this.uniforms[this.textureID].value=i.texture;if(this._fsQuad.material=this.material,this.renderToScreen)e.setRenderTarget(null),this._fsQuad.render(e);else{if(e.setRenderTarget(t),this.clear)e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil);this._fsQuad.render(e)}}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class Bl extends Wi{constructor(e,t){super();this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){let r=e.getContext(),n=e.state;n.buffers.color.setMask(!1),n.buffers.depth.setMask(!1),n.buffers.color.setLocked(!0),n.buffers.depth.setLocked(!0);let s,o;if(this.inverse)s=0,o=1;else s=1,o=0;if(n.buffers.stencil.setTest(!0),n.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),n.buffers.stencil.setFunc(r.ALWAYS,s,4294967295),n.buffers.stencil.setClear(o),n.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear)e.clear();if(e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear)e.clear();e.render(this.scene,this.camera),n.buffers.color.setLocked(!1),n.buffers.depth.setLocked(!1),n.buffers.color.setMask(!0),n.buffers.depth.setMask(!0),n.buffers.stencil.setLocked(!1),n.buffers.stencil.setFunc(r.EQUAL,1,4294967295),n.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),n.buffers.stencil.setLocked(!0)}}class $c extends Wi{constructor(){super();this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class jc{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let i=e.getSize(new ee);this._width=i.width,this._height=i.height,t=new pt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:xt}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Qc(Fs),this.copyPass.material.blending=Ui,this.timer=new na}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);if(t!==-1)this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){if(this.timer.update(),e===void 0)e=this.timer.getDelta();let t=this.renderer.getRenderTarget(),i=!1;for(let r=0,n=this.passes.length;r<n;r++){let s=this.passes[r];if(s.enabled===!1)continue;if(s.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),s.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),s.needsSwap){if(i){let o=this.renderer.getContext(),a=this.renderer.state.buffers.stencil;a.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),a.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}if(Bl!==void 0){if(s instanceof Bl)i=!0;else if(s instanceof $c)i=!1}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new ee);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let i=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(i,r),this.renderTarget2.setSize(i,r);for(let n=0;n<this.passes.length;n++)this.passes[n].setSize(i,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class eh extends Wi{constructor(e,t,i=null,r=null,n=null){super();this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=r,this.clearAlpha=n,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new ie}render(e,t,i){let r=e.autoClear;e.autoClear=!1;let n,s;if(this.overrideMaterial!==null)s=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial;if(this.clearColor!==null)e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha());if(this.clearAlpha!==null)n=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha);if(this.clearDepth==!0)e.clearDepth();if(e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0)e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil);if(e.render(this.scene,this.camera),this.clearColor!==null)e.setClearColor(this._oldClearColor);if(this.clearAlpha!==null)e.setClearAlpha(n);if(this.overrideMaterial!==null)this.scene.overrideMaterial=s;e.autoClear=r}}var Vm={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new ie(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class Un extends Wi{constructor(e,t=1,i,r){super();this.strength=t,this.radius=i,this.threshold=r,this.resolution=e!==void 0?new ee(e.x,e.y):new ee(256,256),this.clearColor=new ie(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let n=Math.round(this.resolution.x/2),s=Math.round(this.resolution.y/2);this.renderTargetBright=new pt(n,s,{type:xt,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let c=0;c<this.nMips;c++){let h=new pt(n,s,{type:xt,depthBuffer:!1});h.texture.name="UnrealBloomPass.h"+c,h.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(h);let d=new pt(n,s,{type:xt,depthBuffer:!1});d.texture.name="UnrealBloomPass.v"+c,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),n=Math.round(n/2),s=Math.round(s/2)}let o=Vm;this.highPassUniforms=hr.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=r,this.highPassUniforms.smoothWidth.value=0.01,this.materialHighPassFilter=new _t({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let a=[6,10,14,18,22];n=Math.round(this.resolution.x/2),s=Math.round(this.resolution.y/2);for(let c=0;c<this.nMips;c++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(a[c])),this.separableBlurMaterials[c].uniforms.invSize.value=new ee(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=0.1;let l=[1,0.8,0.6,0.4,0.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new A(1,1,1),new A(1,1,1),new A(1,1,1),new A(1,1,1),new A(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=hr.clone(Fs.uniforms),this.blendMaterial=new _t({uniforms:this.copyUniforms,vertexShader:Fs.vertexShader,fragmentShader:Fs.fragmentShader,premultipliedAlpha:!0,blending:sn,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new ie,this._oldClearAlpha=1,this._basic=new wt,this._fsQuad=new Nn(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),r=Math.round(t/2);this.renderTargetBright.setSize(i,r);for(let n=0;n<this.nMips;n++)this.renderTargetsHorizontal[n].setSize(i,r),this.renderTargetsVertical[n].setSize(i,r),this.separableBlurMaterials[n].uniforms.invSize.value=new ee(1/i,1/r),i=Math.round(i/2),r=Math.round(r/2)}render(e,t,i,r,n){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();let s=e.autoClear;if(e.autoClear=!1,e.setClearColor(this.clearColor,0),n)e.state.buffers.stencil.setTest(!1);if(this.renderToScreen)this._fsQuad.material=this._basic,this._basic.map=i.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e);this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let o=this.renderTargetBright;for(let a=0;a<this.nMips;a++)this._fsQuad.material=this.separableBlurMaterials[a],this.separableBlurMaterials[a].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[a].uniforms.direction.value=Un.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[a]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[a].uniforms.colorTexture.value=this.renderTargetsHorizontal[a].texture,this.separableBlurMaterials[a].uniforms.direction.value=Un.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[a]),e.clear(),this._fsQuad.render(e),o=this.renderTargetsVertical[a];if(this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,n)e.state.buffers.stencil.setTest(!0);if(this.renderToScreen)e.setRenderTarget(null),this._fsQuad.render(e);else e.setRenderTarget(i),this._fsQuad.render(e);e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=s}_getSeparableBlurMaterial(e){let t=[],i=e/3;for(let s=0;s<e;s++)t.push(0.39894*Math.exp(-0.5*s*s/(i*i))/i);let r=[],n=[];for(let s=1;s<e;s+=2){let o=t[s],a=s+1<e?t[s+1]:0,l=o+a;r.push((s*o+(s+1)*a)/l),n.push(l)}return new _t({defines:{KERNEL_PAIRS:r.length},uniforms:{colorTexture:{value:null},invSize:{value:new ee(0.5,0.5)},direction:{value:new ee(0.5,0.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:r},gaussianWeights:{value:n}},vertexShader:`

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

				}`})}_getCompositeMaterial(e){return new _t({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

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

				}`})}}Un.BlurDirectionX=new ee(1,0);Un.BlurDirectionY=new ee(0,1);var la={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class th extends Wi{constructor(){super();this.isOutputPass=!0,this.uniforms=hr.clone(la.uniforms),this.material=new wn({name:la.name,uniforms:this.uniforms,vertexShader:la.vertexShader,fragmentShader:la.fragmentShader}),this._fsQuad=new Nn(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,i){if(this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping){if(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},Ge.getTransfer(this._outputColorSpace)===Je)this.material.defines.SRGB_TRANSFER="";if(this._toneMapping===Gn)this.material.defines.LINEAR_TONE_MAPPING="";else if(this._toneMapping===Vn)this.material.defines.REINHARD_TONE_MAPPING="";else if(this._toneMapping===kn)this.material.defines.CINEON_TONE_MAPPING="";else if(this._toneMapping===Nr)this.material.defines.ACES_FILMIC_TONE_MAPPING="";else if(this._toneMapping===Wn)this.material.defines.AGX_TONE_MAPPING="";else if(this._toneMapping===Xn)this.material.defines.NEUTRAL_TONE_MAPPING="";else if(this._toneMapping===Hn)this.material.defines.CUSTOM_TONE_MAPPING="";this.material.needsUpdate=!0}if(this.renderToScreen===!0)e.setRenderTarget(null),this._fsQuad.render(e);else{if(e.setRenderTarget(t),this.clear)e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil);this._fsQuad.render(e)}}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class ih extends _n{constructor(){super();this.name="RoomEnvironment",this.position.y=-3.5;let e=new di;e.deleteAttribute("uv");let t=new yi({side:dt}),i=new yi,r=new In(16777215,900,28,2);r.position.set(0.418,16.199,0.3),this.add(r);let n=new we(e,t);n.position.set(-0.757,13.219,0.717),n.scale.set(31.713,28.305,28.591),this.add(n);let s=new Xo(e,i,6),o=new He;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-0.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),s.setMatrixAt(0,o.matrix),o.position.set(-5.607,-0.754,-0.758),o.rotation.set(0,0.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),s.setMatrixAt(1,o.matrix),o.position.set(6.167,0.857,7.803),o.rotation.set(0,0.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),s.setMatrixAt(2,o.matrix),o.position.set(-2.017,0.018,6.124),o.rotation.set(0,0.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),s.setMatrixAt(3,o.matrix),o.position.set(2.291,-0.756,-2.621),o.rotation.set(0,-0.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),s.setMatrixAt(4,o.matrix),o.position.set(-2.193,-0.369,-5.547),o.rotation.set(0,0.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),s.setMatrixAt(5,o.matrix),this.add(s);let a=new we(e,Os(50));a.position.set(-16.116,14.37,8.208),a.scale.set(0.1,2.428,2.739),this.add(a);let l=new we(e,Os(50));l.position.set(-16.109,18.021,-8.207),l.scale.set(0.1,2.425,2.751),this.add(l);let c=new we(e,Os(17));c.position.set(14.904,12.198,-1.832),c.scale.set(0.15,4.265,6.331),this.add(c);let h=new we(e,Os(43));h.position.set(-0.462,8.89,14.52),h.scale.set(4.38,5.441,0.088),this.add(h);let d=new we(e,Os(20));d.position.set(3.235,11.486,-12.541),d.scale.set(2.5,2,0.1),this.add(d);let u=new we(e,Os(100));u.position.set(0,20,0),u.scale.set(1,0.1,1),this.add(u)}dispose(){let e=new Set;this.traverse((t)=>{if(t.isMesh)e.add(t.geometry),e.add(t.material)});for(let t of e)t.dispose()}}function Os(e){return new Ko({color:0,emissive:16777215,emissiveIntensity:e})}var ca=new A;function Xi(e,t,i,r,n,s){let o=2*Math.PI*n/4,a=Math.max(s-2*n,0),l=Math.PI/4;ca.copy(t),ca[r]=0,ca.normalize();let c=0.5*o/(o+a),h=1-ca.angleTo(e)/l;if(Math.sign(ca[i])===1)return h*c;else return a/(o+a)+c+c*(1-h)}class zl extends di{constructor(e=1,t=1,i=1,r=2,n=0.1){let s=r*2+1;n=Math.min(e/2,t/2,i/2,n);super(1,1,1,s,s,s);if(this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:i,segments:r,radius:n},s===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let a=new A,l=new A,c=new A(e,t,i).divideScalar(2).subScalar(n),h=this.attributes.position.array,d=this.attributes.normal.array,u=this.attributes.uv.array,p=h.length/6,x=new A,M=0.5/s;for(let f=0,m=0;f<h.length;f+=3,m+=2)switch(a.fromArray(h,f),l.copy(a),l.x-=Math.sign(l.x)*M,l.y-=Math.sign(l.y)*M,l.z-=Math.sign(l.z)*M,l.normalize(),h[f+0]=c.x*Math.sign(a.x)+l.x*n,h[f+1]=c.y*Math.sign(a.y)+l.y*n,h[f+2]=c.z*Math.sign(a.z)+l.z*n,d[f+0]=l.x,d[f+1]=l.y,d[f+2]=l.z,Math.floor(f/p)){case 0:x.set(1,0,0),u[m+0]=Xi(x,l,"z","y",n,i),u[m+1]=1-Xi(x,l,"y","z",n,t);break;case 1:x.set(-1,0,0),u[m+0]=1-Xi(x,l,"z","y",n,i),u[m+1]=1-Xi(x,l,"y","z",n,t);break;case 2:x.set(0,1,0),u[m+0]=1-Xi(x,l,"x","z",n,e),u[m+1]=Xi(x,l,"z","x",n,i);break;case 3:x.set(0,-1,0),u[m+0]=1-Xi(x,l,"x","z",n,e),u[m+1]=1-Xi(x,l,"z","x",n,i);break;case 4:x.set(0,0,1),u[m+0]=1-Xi(x,l,"x","y",n,e),u[m+1]=1-Xi(x,l,"y","x",n,t);break;case 5:x.set(0,0,-1),u[m+0]=Xi(x,l,"x","y",n,e),u[m+1]=1-Xi(x,l,"y","x",n,t);break}}static fromJSON(e){return new zl(e.width,e.height,e.depth,e.segments,e.radius)}}var Yi=window.FUNUI,pi=(e)=>document.querySelector(e),Fn=matchMedia("(pointer:coarse)").matches||innerWidth<820;if(Fn)document.body.classList.add("touch");var dr=pi("#c"),On=new Ol({canvas:dr,antialias:!Fn,powerPreference:"high-performance"});On.setPixelRatio(Math.min(devicePixelRatio||1,Fn?1.5:2));On.toneMapping=Nr;On.toneMappingExposure=1.05;var St=new _n;St.background=new ie(329498);St.fog=new fs(329498,16,34);var T_=new Kr(On);St.environment=T_.fromScene(new ih,0.04).texture;St.environmentIntensity=0.28;var Ar=new Mt(68,1,0.05,60),Qr=null;function Hm(){let e=innerWidth,t=innerHeight;if(On.setSize(e,t,!1),Ar.aspect=e/t,Ar.fov=e/t<1?80:68,Ar.updateProjectionMatrix(),Qr)Qr.setSize(e,t)}if(!Fn)Qr=new jc(On),Qr.addPass(new eh(St,Ar)),Qr.addPass(new Un(new ee(innerWidth,innerHeight),0.28,0.5,0.9)),Qr.addPass(new th);addEventListener("resize",Hm);Hm();function pr(e,t,i,r){let n=document.createElement("canvas");n.width=e,n.height=t,i(n.getContext("2d"),e,t);let s=new ul(n);if(s.colorSpace=Dt,s.anisotropy=8,r)s.wrapS=s.wrapT=Ur,s.repeat.set(r[0],r[1]);return s}var vt=(e,t={})=>new yi({color:e,roughness:t.r??0.6,metalness:t.m??0.1,emissive:t.e??0,emissiveIntensity:t.ei??1,side:t.side}),$r=(e,t=1)=>new wt({color:new ie(e).multiplyScalar(t),toneMapped:!1}),at=(e,t,i,r,n=0,s=0,o=0,a=St)=>{let l=new we(new di(e,t,i),r);return l.position.set(n,s,o),a.add(l),l};function Gs(e,t,i,r,n,s,o,a=0){let l=new we(new vi(e,t),new wt({map:i,transparent:!0,toneMapped:!1}));return l.position.set(n,s,o),l.rotation.y=a,r.add(l),l}function Wm(e,{w:t=1024,h:i=384,font:r="900 250px Inter,Arial,sans-serif",color:n="#3dff9a",fill:s="#c8ffe2",lw:o=10,blur:a=30}={}){return pr(t,i,(l,c,h)=>{l.clearRect(0,0,c,h),l.font=r,l.textAlign="center",l.textBaseline="middle",l.shadowColor=n,l.shadowBlur=a,l.lineWidth=o,l.strokeStyle=n,l.lineJoin="round",l.strokeText(e,c/2,h/2+6),l.shadowBlur=0,l.fillStyle=s,l.fillText(e,c/2,h/2+6)})}function E_(e,t="#3dff9a"){let i=Wm(e,{w:768,h:192,font:"800 96px Inter,Arial,sans-serif",color:t,fill:"#ffffff",lw:6,blur:18}),r=new ko(new Sn({map:i,transparent:!0,depthWrite:!1,toneMapped:!1}));return r.scale.set(2.4,0.6,1),r}var Gl=(()=>{let e=11;return()=>(e=e*16807%2147483647)/2147483647})(),Di=16,Si=12,Mi=4.2,w_=pr(512,512,(e,t,i)=>{e.fillStyle="#120e27",e.fillRect(0,0,t,i),e.strokeStyle="#2a2252",e.lineWidth=3;for(let r=0;r<=8;r++)e.beginPath(),e.moveTo(r*64,0),e.lineTo(r*64,i),e.stroke(),e.beginPath(),e.moveTo(0,r*64),e.lineTo(t,r*64),e.stroke()},[8,6]),Xm=new we(new vi(Di,Si),new yi({map:w_,roughness:0.38,metalness:0.25}));Xm.rotation.x=-Math.PI/2;St.add(Xm);var A_=pr(512,512,(e,t,i)=>{let r=e.createLinearGradient(0,0,0,i);r.addColorStop(0,"#0a0f2c"),r.addColorStop(1,"#161d4a"),e.fillStyle=r,e.fillRect(0,0,t,i),e.strokeStyle="#26307a",e.lineWidth=3,e.globalAlpha=0.55,e.beginPath(),e.moveTo(2,0),e.lineTo(2,i),e.stroke()},[Di/2,1]),R_=new yi({map:A_,roughness:0.85,metalness:0});function Yl(e,t,i,r,n,s){let o=new we(new vi(e,t),R_);return o.position.set(i,r,n),o.rotation.y=s,St.add(o),o}Yl(Di,Mi,0,Mi/2,-Si/2,0);Yl(Di,Mi,0,Mi/2,Si/2,Math.PI);Yl(Si,Mi,-Di/2,Mi/2,0,Math.PI/2);Yl(Si,Mi,Di/2,Mi/2,0,-Math.PI/2);var nh=new we(new vi(Di,Si),vt(395288,{r:0.9}));nh.rotation.x=Math.PI/2;nh.position.y=Mi;St.add(nh);var Zl=$r(3820496,0.9);at(Di,0.06,0.06,Zl,0,0.1,-Si/2+0.03);at(Di,0.06,0.06,Zl,0,0.1,Si/2-0.03);at(0.06,0.06,Si,Zl,-Di/2+0.03,0.1,0);at(0.06,0.06,Si,Zl,Di/2-0.03,0.1,0);[[-5,3729663],[0,4063130],[5,16732070]].forEach(([e,t])=>at(0.08,0.04,Si-1,$r(t,1.3),e,Mi-0.03,0));[[-3.5,7177983],[3.5,7177983]].forEach(([e,t])=>at(Di-1,0.04,0.08,$r(t,1.1),0,Mi-0.03,e));St.add(new ia(9414399,1708080,0.9));function Vs(e,t,i,r,n,s){let o=new In(e,t,i,1.6);return o.position.set(r,n,s),St.add(o),o}Vs(4063130,14,9,-1.2,3.4,-5.2);Vs(3729663,4,7,-6.2,2.6,-2);Vs(16742954,9,7,2,2.6,-4.6);Vs(3824895,12,8,5.4,2.2,-4.2);Vs(16732070,11,8,4.4,2.4,2.4);var Wl=new ra(14676735,45,14,0.62,0.55,1.4);Wl.position.set(-1.2,Mi-0.1,-0.3);Wl.target.position.set(-1.2,0,-0.3);St.add(Wl,Wl.target);var qm=new we(new Rs(3.4,Mi-0.15,40,1,!0),new wt({color:12577535,transparent:!0,opacity:0.014,side:Ht,depthWrite:!1,blending:sn,toneMapped:!1}));qm.position.set(-1.2,(Mi-0.15)/2,-0.3);St.add(qm);var XW=Gs(4.4,1.65,Wm("FUN",{w:1024,h:384}),St,-1.2,3.1,-Si/2+0.03);var C_=window.FUNUI&&window.FUNUI.summary("bad").k[0][0]||"0–0",[P_,I_]=C_.split("–"),L_=pr(768,288,(e,t,i)=>{e.fillStyle="#04060f",e.fillRect(0,0,t,i),e.strokeStyle="#14503a",e.lineWidth=8,e.strokeRect(6,6,t-12,i-12),e.font="800 150px ui-monospace,Menlo,Consolas,monospace",e.textAlign="center",e.fillStyle="#3dff9a",e.shadowColor="#3dff9a",e.shadowBlur=24,e.fillText(P_+" : "+I_,t/2,170),e.shadowBlur=0,e.font="600 30px Inter,Arial",e.fillStyle="#5e8f7c",e.fillText("WINS : LOSSES · 2026",t/2,240)});Gs(2.2,0.82,L_,St,-1.2,1.78,-Si/2+0.03);var Cr=new Ut;Cr.position.set(-1.2,0,-0.3);St.add(Cr);var D_=pr(768,1280,(e,t,i)=>{e.fillStyle="#16345a",e.fillRect(0,0,t,i),e.strokeStyle="#eaf4ff",e.lineWidth=7;let r=34;e.strokeRect(r,r,t-2*r,i-2*r);let n=78;e.strokeRect(n,r,t-2*n,i-2*r),e.beginPath(),e.moveTo(r,i/2),e.lineTo(t-r,i/2),e.stroke(),e.beginPath(),e.moveTo(t/2,r),e.lineTo(t/2,i/2-190),e.moveTo(t/2,i/2+190),e.lineTo(t/2,i-r),e.stroke(),e.beginPath(),e.moveTo(r,i/2-190),e.lineTo(t-r,i/2-190),e.moveTo(r,i/2+190),e.lineTo(t-r,i/2+190),e.stroke()}),sh=new we(new vi(4.4,7.4),new yi({map:D_,roughness:0.45,metalness:0.1,emissive:666186,emissiveIntensity:0.12}));sh.rotation.x=-Math.PI/2;sh.position.y=0.012;Cr.add(sh);var N_=new Yo(new Le().setFromPoints([[-2.2,0.02,-3.7],[2.2,0.02,-3.7],[2.2,0.02,3.7],[-2.2,0.02,3.7]].map((e)=>new A(...e))),new At({color:new ie(4063130).multiplyScalar(2.2),toneMapped:!1}));Cr.add(N_);var U_=pr(256,64,(e,t,i)=>{e.clearRect(0,0,t,i),e.strokeStyle="rgba(232,244,255,.75)",e.lineWidth=2;for(let r=0;r<=32;r++)e.beginPath(),e.moveTo(r*8,0),e.lineTo(r*8,i),e.stroke();for(let r=0;r<=8;r++)e.beginPath(),e.moveTo(0,r*8),e.lineTo(t,r*8),e.stroke()}),Ym=new we(new vi(4.7,0.76),new wt({map:U_,transparent:!0,side:Ht,toneMapped:!1}));Ym.position.set(0,1.17,0);Cr.add(Ym);at(4.7,0.05,0.03,vt(16777215,{r:0.4}),0,1.55,0,Cr);[-2.35,2.35].forEach((e)=>{at(0.06,1.6,0.06,vt(11187944,{r:0.4,m:0.5}),e,0.8,0,Cr),at(0.3,0.04,0.3,vt(2238016),e,0.02,0,Cr)});var ua=new Ut;ua.add(new we(new Hr(0.022,12,12),vt(16777215)));var Zm=new we(new Rs(0.05,0.08,16,1,!0),new yi({color:16777215,side:Ht,roughness:0.5}));Zm.position.y=0.06;ua.add(Zm);Cr.add(ua);var nr=new Ut;nr.position.set(-Di/2+0.2,0,-2);nr.rotation.y=Math.PI/2;St.add(nr);at(5.6,3.7,0.25,vt(1712720,{r:0.8}),0,2,0,nr);[[0,3.87,5.8,0.06],[0,0.13,5.8,0.06]].forEach(([e,t,i,r])=>at(i,r,0.08,$r(3729663,0.8),e,t,0.12,nr));[-2.9,2.9].forEach((e)=>at(0.06,3.8,0.08,$r(3729663,0.8),e,2,0.12,nr));var F_=[16732070,3729663,4063130,16752451,11691775,16777215];for(let e=0;e<70;e++){let t=F_[Math.floor(Gl()*6)],i=0.05+Gl()*0.05,r=new we(new Hr(i,12,10),vt(t,{e:t,ei:0.18,r:0.5}));r.scale.z=0.55,r.position.set((Gl()-0.5)*5.2,0.45+Gl()*3.1,0.18),nr.add(r)}var Jm=[[-2,0.6],[-1.4,1.2],[-1.7,1.9],[-0.7,2.4],[-0.1,1.9],[0.7,2.6],[1.3,3.2],[1.9,3.6]];Jm.forEach(([e,t],i)=>{let r=new we(new Hr(0.1,14,10),new wt({color:new ie(16777215).multiplyScalar(1.1),toneMapped:!1}));r.scale.z=0.6,r.position.set(e,t,0.2),nr.add(r)});nr.add(new Vi(new Le().setFromPoints(Jm.map(([e,t])=>new A(e,t,0.2))),new jo({color:16777215,dashSize:0.08,gapSize:0.1,transparent:!0,opacity:0.6}))).computeLineDistances?.();nr.children[nr.children.length-1].computeLineDistances();var Bn=new Ut;Bn.position.set(2,2.3,-Si/2+0.05);St.add(Bn);var Km=window.FUNUI?window.FUNUI.summary("strava").k:[["12/20"],["9 400"]],[Qm,$m]=Km[0][0].split("/").map(Number);Bn.add(new we(new Cs(0.85,0.1,16,72),vt(2761296,{r:0.6})));var jm=2*Math.PI*Qm/$m,eg=new we(new Cs(0.85,0.1,16,160,jm),new wt({color:new ie(16534530).multiplyScalar(1.5),toneMapped:!1}));eg.rotation.z=Math.PI/2-jm;Bn.add(eg);var O_=pr(512,384,(e,t,i)=>{e.textAlign="center",e.fillStyle="#fff",e.font="800 140px Inter,Arial",e.fillText(Qm+"",t/2-40,190),e.fillStyle="#b8a9c9",e.font="700 70px Inter,Arial",e.fillText("/"+$m,t/2+90,190),e.font="600 34px Inter,Arial",e.fillText("A C T I V E   D A Y S",t/2,250)});Gs(1.5,1.12,O_,Bn,0,0,0.02);var tg=(e,t)=>pr(768,96,(i,r,n)=>{i.fillStyle="rgba(10,15,44,.85)",i.beginPath(),i.roundRect(4,4,r-8,n-8,44),i.fill(),i.strokeStyle=t,i.lineWidth=4,i.stroke(),i.fillStyle=t,i.textAlign="center",i.font="700 40px Inter,Arial",i.fillText(e,r/2,62)});Gs(1.9,0.24,tg("\uD83D\uDC63  "+Km[1][0]+" STEPS / DAY","#3dff9a"),Bn,0,-1.3,0.02);Gs(1.9,0.24,tg("GYM 3× · YOGA 2× · WALKS","#8a96c4"),Bn,0,-1.62,0.02);var ei=new Ut;ei.position.set(5.4,0,-5.45);St.add(ei);var ig=vt(790562,{r:0.4,m:0.4});at(2.4,0.05,0.85,ig,0,0.75,0,ei);[[-1.15,-0.38],[1.15,-0.38],[-1.15,0.38],[1.15,0.38]].forEach(([e,t])=>at(0.05,0.75,0.05,ig,e,0.375,t,ei));at(2.4,0.015,0.02,$r(3824895,1.4),0,0.72,0.43,ei);var B_=pr(512,300,(e,t,i)=>{e.fillStyle="#12062a",e.fillRect(0,0,t,i),e.strokeStyle="#ff4fa6",e.globalAlpha=0.5,e.lineWidth=2,e.beginPath(),e.moveTo(20,40),e.quadraticCurveTo(70,80,40,140),e.moveTo(490,30),e.quadraticCurveTo(440,90,470,150),e.stroke(),e.globalAlpha=1,e.font="900 100px Inter,Arial",e.textAlign="center",e.shadowColor="#ff4f8a",e.shadowBlur=24,e.lineWidth=6,e.strokeStyle="#ff4f8a",e.strokeText("FONGER",t/2,180),e.shadowBlur=0,e.fillStyle="#2a0a2e",e.fillText("FONGER",t/2,180)}),z_=Yi&&Yi.games||[],G_=pr(512,300,(e,t,i)=>{let r=e.createLinearGradient(0,0,t,i);r.addColorStop(0,"#10163f"),r.addColorStop(0.55,"#2a1a6e"),r.addColorStop(1,"#5a1f78"),e.fillStyle=r,e.fillRect(0,0,t,i),z_.forEach((n,s)=>{let o=60+s%3*150,a=40+Math.floor(s/3)*110;e.fillStyle=n[2],e.beginPath(),e.roundRect(o,a,90,90,20),e.fill(),e.fillStyle=n[3],e.font="900 30px Inter,Arial",e.textAlign="center",e.fillText(n[0],o+45,a+56)}),e.fillStyle="rgba(5,6,15,.9)",e.fillRect(0,i-26,t,26),e.fillStyle="#38e8ff",e.fillRect(10,i-20,14,14)});function rg(e,t){let i=new Ut;i.position.set(e,1.12,-0.15),ei.add(i),at(0.84,0.5,0.04,vt(329231,{r:0.3,m:0.6}),0,0,0,i),Gs(0.78,0.44,t,i,0,0,0.022),at(0.05,0.3,0.05,vt(1449284),0,-0.38,-0.03,i),at(0.3,0.015,0.2,vt(1449284),0,-0.52,0.02,i)}rg(-0.55,B_);rg(0.5,G_);var qW=at(0.44,0.022,0.14,vt(461340,{r:0.4,m:0.5,e:3824895,ei:0.3}),-0.1,0.786,0.18,ei);at(0.4,0.002,0.005,$r(7177983,1.5),-0.1,0.8,0.14,ei);var oh=new we(new Hr(0.035,16,12),vt(1054266,{e:4063130,ei:0.25,r:0.4}));oh.scale.set(0.8,0.55,1.35);oh.position.set(0.3,0.792,0.2);ei.add(oh);var pa=new Ut;pa.position.set(-0.95,0.775,0.1);ei.add(pa);var ng=vt(15241802,{r:0.45});{let e=new we(new Tr(0.02,0.025,0.2,12),vt(1449284));e.position.y=0.1,pa.add(e)}var sg=new we(new Cs(0.085,0.01,8,24,Math.PI),ng);sg.position.y=0.26;pa.add(sg);[-0.085,0.085].forEach((e)=>{let t=new we(new Tr(0.048,0.048,0.035,20),ng);t.rotation.z=Math.PI/2,t.position.set(e,0.265,0),pa.add(t)});var fa=new Ut;fa.position.set(1.55,0.31,-0.08);ei.add(fa);at(0.24,0.62,0.5,vt(526872,{r:0.35,m:0.5}),0,0,0,fa);[0.17,0,-0.17].forEach((e)=>{let t=new we(new Zo(0.068,28),$r(1850623,1.6));t.position.set(0,e,0.252),fa.add(t);let i=new we(new Zo(0.02,16),new wt({color:659258}));i.position.set(0,e,0.254),fa.add(i)});var YW=Vs(1850623,3.5,3.2,6.95,0.5,-5.2),jr=new Ut;jr.position.set(0.1,0,0.85);jr.rotation.y=0.25;ei.add(jr);var og=vt(1054266,{r:0.7});at(0.5,0.08,0.5,og,0,0.48,0,jr);at(0.5,0.62,0.07,og,0,0.82,0.24,jr);at(0.06,0.45,0.06,vt(329231),0,0.24,0,jr);at(0.55,0.03,0.05,vt(329231),0,0.03,0,jr);at(0.05,0.03,0.55,vt(329231),0,0.03,0,jr);var wr=new Ut;wr.position.set(4.6,0,2.5);wr.rotation.y=-0.32;St.add(wr);{let r=vt(723984,{r:0.38,m:0.65}),n=vt(328966,{r:0.9}),s=new wl().load("fun-print.jpg");s.colorSpace=Dt,s.anisotropy=8;let o=new we(new zl(2.4,0.042,0.6,4,0.014),r);o.position.y=0.6789999999999999,wr.add(o);let a=new we(new vi(2.364,0.564),new Jo({map:s,roughness:0.5,clearcoat:0.35,clearcoatRoughness:0.35}));a.rotation.x=-Math.PI/2,a.position.y=0.7011999999999999,wr.add(a);let l=vt(460812);[-0.6,0,0.6].forEach((p)=>at(0.005,0.0012,0.58,l,p,0.7016,0,wr)),[-1,1].forEach((p)=>at(2.3,0.03,0.02,r,0,0.6399999999999999,p*0.255,wr));let c=1.0999999999999999,h=0.255,d=(p,x,M,f,m,b)=>{let E=new we(new Tr(p,p,x,16),M);return E.position.set(f,m,b),wr.add(E),E};[-1,0,1].forEach((p)=>[-1,1].forEach((x)=>{let M=p*c,f=x*h;d(0.0175,0.38,r,M,0.47,f),d(0.024,0.05,r,M,0.36,f),d(0.0145,0.36,r,M,0.18,f),d(0.019,0.02,n,M,0.01,f)}));let u=(p,x,M)=>{let f=new A(...p),m=new A(...x),b=m.clone().sub(f),E=new we(new Tr(M,M,b.length(),10),r);E.position.copy(f.clone().add(m).multiplyScalar(0.5)),E.quaternion.setFromUnitVectors(new A(0,1,0),b.normalize()),wr.add(E)};[-c,0,c].forEach((p)=>u([p,0.2,-h],[p,0.2,h],0.011)),[-c,c].forEach((p)=>u([p,0.56,-h],[p,0.56,h],0.009))}var Xl=[{k:"bad",x:-1.2,z:-0.3,r:3.7,c:"#3dff9a",label:"BADMINTON",ly:3},{k:"climb",x:-6,z:-2,r:2.3,c:"#38e8ff",label:"CLIMBING",ly:3.6},{k:"strava",x:2,z:-4.1,r:2.4,c:"#ff7a2a",label:"STRAVA",ly:3.6},{k:"games",x:5.4,z:-4,r:2.1,c:"#6d86ff",label:"GAMES",ly:2.5},{k:"beer",x:4.6,z:2.5,r:2.5,c:"#ff6a80",label:"BEER PONG",ly:2.2}];Xl.forEach((e)=>{let t=E_(e.label,e.c);if(t.position.set(e.x,e.ly,e.z),e.k==="bad")t.position.set(-1.2,2.5,-0.3);if(e.k==="strava")t.position.set(2,3.65,-5.9);if(e.k==="climb")t.position.set(-7.2,3.95,-2);if(e.k==="games")t.position.set(5.4,2.55,-5.85);if(St.add(t),e.k!=="bad"){let i=new we(new gl(e.r*0.55,e.r*0.55+0.05,64),new wt({color:new ie(e.c).multiplyScalar(1.5),transparent:!0,opacity:0.55,side:Ht,toneMapped:!1}));i.rotation.x=-Math.PI/2,i.position.set(e.k==="climb"?-6:e.x,0.015,e.z),St.add(i),e.ring=i}});var ha=[];function ma(e,t,i,r,n,s,o,a,l){let c=new di(t,i,r),h=new we(c,new wt({visible:!1}));h.position.set(n,s,o),l.add(h);let d=new Pi(new Ic(c),new At({color:new ie(a).multiplyScalar(2),transparent:!0,opacity:0.3,toneMapped:!1}));d.position.copy(h.position),l.add(d),ha.push({id:e,hit:h,lines:d,ph:Math.random()*6})}ma("pc",0.27,0.65,0.53,1.55,0.31,-0.08,7177983,ei);ma("kb",0.47,0.05,0.17,-0.1,0.79,0.18,7177983,ei);ma("ms",0.1,0.05,0.15,0.3,0.792,0.2,4063130,ei);ma("hp",0.24,0.32,0.1,-0.95,0.95,0.1,16751178,ei);ma("mon",0.84,0.5,0.05,0.5,1.12,-0.15,3729663,ei);ha.find((e)=>e.id==="mon").lines.visible=!1;var Ye={x:0,z:4.7,yaw:0,pitch:0,vx:0,vz:0},V_=1.65,ag=[],Jl=(e,t,i,r,n)=>{let s=Math.max(1,Math.ceil(Math.hypot(i-e,r-t)/(n*0.9)));for(let o=0;o<=s;o++)ag.push([e+(i-e)*o/s,t+(r-t)*o/s,n])};Jl(4.2,-5.5,6.6,-5.5,0.55);Jl(6.95,-5.55,6.95,-5.55,0.35);Jl(4.55-0.8*Math.cos(0.32),2.5-0.8*Math.sin(0.32),4.55+0.8*Math.cos(0.32),2.5+0.8*Math.sin(0.32),0.42);Jl(-3.5,-0.3,1.1,-0.3,0.22);var Vl={x0:-7.2,x1:7.4,z0:-5.3,z1:5.4};function k_(){Ye.x=Math.min(Vl.x1,Math.max(Vl.x0,Ye.x)),Ye.z=Math.min(Vl.z1,Math.max(Vl.z0,Ye.z)),ag.forEach(([e,t,i])=>{let r=Ye.x-e,n=Ye.z-t,s=Math.hypot(r,n),o=i+0.28;if(s<o&&s>0.0001)Ye.x=e+r/s*o,Ye.z=t+n/s*o})}var rr={},Rr=!1,ql=!1,zs={x:0,y:0};addEventListener("keydown",(e)=>{if(!Rr||Yi.isOpen())return;if(rr[e.code]=!0,e.code==="KeyE"||e.code==="Enter")Kl();if(e.code.startsWith("Arrow")||e.code==="Space")e.preventDefault()});addEventListener("keyup",(e)=>{rr[e.code]=!1});document.addEventListener("pointerlockchange",()=>{if(ql=document.pointerLockElement===dr,!ql&&Rr&&!Yi.isOpen())pi("#start").classList.add("on"),pi("#start").dataset.paused="1"});addEventListener("mousemove",(e)=>{if(!Rr||Yi.isOpen())return;if(ql||ah)Ye.yaw-=e.movementX*0.0022,Ye.pitch=Math.max(-1.2,Math.min(1.2,Ye.pitch-e.movementY*0.0022))});var ah=!1;dr.addEventListener("mousedown",()=>{if(ah=!0,da==="mon"&&ql)return Kl()});addEventListener("mouseup",()=>{ah=!1});function H_(){if(Rr=!0,pi("#start").classList.remove("on"),pi("#hud").classList.add("on"),!Fn&&dr.requestPointerLock)try{let e=dr.requestPointerLock();if(e&&e.catch)e.catch(()=>{})}catch(e){}}pi("#start").addEventListener("click",H_);Yi.setOnClose(()=>{if(!Fn)pi("#start").classList.add("on"),pi("#start").dataset.paused="1"});if(Fn){let e=pi("#joy"),t=pi("#knob"),i=null,r=null,n=0,s=0;e.addEventListener("pointerdown",(c)=>{i=c.pointerId,e.setPointerCapture(i),o(c)});let o=(c)=>{let h=e.getBoundingClientRect(),d=h.left+h.width/2,u=h.top+h.height/2,p=(c.clientX-d)/(h.width/2),x=(c.clientY-u)/(h.height/2),M=Math.hypot(p,x);if(M>1)p/=M,x/=M;zs.x=p,zs.y=x,t.style.transform=`translate(${p*34}px,${x*34}px)`};e.addEventListener("pointermove",(c)=>{if(c.pointerId===i)o(c)});let a=(c)=>{if(c.pointerId===i)i=null,zs.x=zs.y=0,t.style.transform=""};e.addEventListener("pointerup",a),e.addEventListener("pointercancel",a),dr.addEventListener("pointerdown",(c)=>{if(!Rr||Yi.isOpen()||r!==null)return;r=c.pointerId,n=c.clientX,s=c.clientY,dr.setPointerCapture(r)}),dr.addEventListener("pointermove",(c)=>{if(c.pointerId!==r)return;Ye.yaw-=(c.clientX-n)*0.005,Ye.pitch=Math.max(-1.1,Math.min(1.1,Ye.pitch-(c.clientY-s)*0.005)),n=c.clientX,s=c.clientY});let l=(c)=>{if(c.pointerId===r)r=null};dr.addEventListener("pointerup",l),dr.addEventListener("pointercancel",l),pi("#act").addEventListener("click",()=>Kl())}var qi=null,da=null,rh=new Pl;rh.far=5.5;var kl=pi("#prompt"),Hl=pi("#sum");function W_(e){if(e===(qi&&qi.k))return;if(qi=e?Xl.find((i)=>i.k===e):null,!qi){kl.classList.remove("on"),Hl.classList.remove("on");return}let t=Yi.summary(e);kl.querySelector("b").textContent=t.t,kl.style.setProperty("--c",qi.c),Hl.style.setProperty("--c",qi.c),Hl.innerHTML=`<h4>${t.t}</h4><p>${t.s}</p><div>${t.k.map((i)=>`<span><b>${i[0]}</b><i>${i[1]}</i></span>`).join("")}</div>`,kl.classList.add("on"),Hl.classList.add("on")}function Kl(){if(Yi.isOpen())return;if(document.pointerLockElement)document.exitPointerLock();if(da==="mon")return Yi.open("games");if(qi)Yi.open(qi.k)}function km(e){if(e===da)return;da=e,["pc","hp","kb","ms"].forEach((t)=>document.body.classList.toggle(t,t===e))}var X_=new Il,Bs=0;function lg(){let e=Math.min(X_.getDelta(),0.05);Bs+=e;let t=Yi.isOpen();if(Rr&&!t){let a=(rr.ArrowLeft?1:0)-(rr.ArrowRight?1:0);Ye.yaw+=a*1.9*e;let l=(rr.KeyW||rr.ArrowUp?1:0)-(rr.KeyS||rr.ArrowDown?1:0)-zs.y,c=(rr.KeyD?1:0)-(rr.KeyA?1:0)+zs.x,h=rr.ShiftLeft?5.2:3.2,d=(-Math.sin(Ye.yaw)*l+Math.cos(Ye.yaw)*c)*h,u=(-Math.cos(Ye.yaw)*l-Math.sin(Ye.yaw)*c)*h,p=Math.hypot(d,u);if(p>h)d*=h/p,u*=h/p;let x=1-Math.exp(-10*e);Ye.vx+=(d-Ye.vx)*x,Ye.vz+=(u-Ye.vz)*x,Ye.x+=Ye.vx*e,Ye.z+=Ye.vz*e,k_()}Ar.position.set(Ye.x,V_+Math.sin(Bs*6)*0+0,Ye.z),Ar.rotation.order="YXZ",Ar.rotation.set(Ye.pitch,Ye.yaw,0);let i=null,r=9;if(Xl.forEach((a)=>{let l=Math.hypot(Ye.x-a.x,Ye.z-a.z)/a.r;if(l<1&&l<r)r=l,i=a.k}),W_(i&&Rr&&!t?i:t?qi&&qi.k:null),Rr&&!t){rh.setFromCamera(new ee(0,0),Ar);let a=rh.intersectObjects(ha.map((l)=>l.hit),!1)[0];km(a?ha.find((l)=>l.hit===a.object).id:null)}else km(null);ha.forEach((a)=>{a.lines.material.opacity=da===a.id?1:0.22+0.22*(0.5+0.5*Math.sin(Bs*1.9+a.ph))});let n=Bs*0.45%2,s=n<1?1:-1,o=n%1;if(ua.position.set(Math.sin(Bs*0.7)*0.5,0.5+1.5*(1-Math.pow(2*o-1,2))*0.85+0.2,s*(-2.7+5.4*o)),ua.rotation.x=s*(0.8-o*1.6)+(s>0?Math.PI/2:-Math.PI/2),Xl.forEach((a)=>{if(a.ring)a.ring.material.opacity=qi&&qi.k===a.k?0.95:0.35+0.15*Math.sin(Bs*2)}),Qr)Qr.render();else On.render(St,Ar);requestAnimationFrame(lg)}requestAnimationFrame(lg);window.__fun={go(e,t,i=0,r=0){Ye.x=e,Ye.z=t,Ye.yaw=i,Ye.pitch=r,Ye.vx=Ye.vz=0},start(){Rr=!0,pi("#start").classList.remove("on"),pi("#hud").classList.add("on")},interact:Kl};if(location.hash==="#badminton");
