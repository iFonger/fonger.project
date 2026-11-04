var c0=Object.defineProperty;var h0=(e)=>e;function u0(e,t){this[e]=h0.bind(null,t)}var f0=(e,t)=>{for(var i in t)c0(e,i,{get:t[i],enumerable:!0,configurable:!0,set:u0.bind(t,i)})};var rr={};f0(rr,{ArcCurve:()=>Ac,CatmullRomCurve3:()=>ws,CubicBezierCurve:()=>Xo,CubicBezierCurve3:()=>Dc,EllipseCurve:()=>Dr,LineCurve:()=>qo,LineCurve3:()=>Nc,QuadraticBezierCurve:()=>Yo,QuadraticBezierCurve3:()=>Zo,SplineCurve:()=>Jo});var qs="187";var Mh=0,Jl=1,Sh=2;var Xr=1,ya=2,gr=3,nn=0,Lt=1,Gt=2,Sn=0,qn=1,Kl=2,$l=3,Ql=4,bh=5;var Yn=100,Eh=101,Th=102,wh=103,Ah=104,Rh=200,Ch=201,Ih=202,Ph=203,va=204,Ma=205,Lh=206,Dh=207,Nh=208,Uh=209,Fh=210,Bh=211,Oh=212,zh=213,Gh=214,Ys=0,Zs=1,Js=2,Zn=3,Ks=4,$s=5,Qs=6,js=7,xr=0,Hh=1,kh=2,Yi=0,Sa=1,ba=2,Ea=3,qr=4,Ta=5,wa=6,Aa=7;var Ra=300,rn=301,Ln=302,eo=303,to=304,Dn=1000,Mi=1001,Yr=1002,Ut=1003,jl=1004;var Zr=1005;var Ot=1006,io=1007;var Oi=1008;var Jt=1009,Ca=1010,Ia=1011,Nn=1012,Jr=1013,ri=1014,Kt=1015,mi=1016,Kr=1017,$r=1018,dn=1020,Pa=35902,La=35899,Da=1021,Na=1022,gi=1023,Hi=1026,Zi=1027,Qr=1028,_r=1029,Ji=1030,jr=1031;var es=1033,ts=33776,is=33777,ns=33778,rs=33779,no=35840,ro=35841,so=35842,oo=35843,ao=36196,lo=37492,co=37496,ho=37488,uo=37489,yr=37490,fo=37491,po=37808,mo=37809,go=37810,xo=37811,_o=37812,yo=37813,vo=37814,Mo=37815,So=37816,bo=37817,Eo=37818,To=37819,wo=37820,Ao=37821,Ro=36492,Co=36494,Io=36495,Po=36283,Lo=36284,vr=36285,Do=36286;var Mr=2300,Ua=2301,Fa=2302,ec=2303,Ba=2400,Oa=2401,za=2402;var Vh=3200;var pn=0,Wh=1,sn="",Tt="srgb",Sr="srgb-linear",br="linear",xt="srgb";var Ga=7680;var Xh=519,qh=512,Yh=513,Zh=514,Ha=515,Jh=516,Kh=517,ka=518,Va=519,Wa=35044;var tc="300 es",xi=2000,bn=2001;function Qh(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function ic(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function Jn(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function nc(){let e=Jn("canvas");return e.style.display="block",e}var $h={},ss=null;function No(...e){let t="THREE."+e.shift();if(ss)ss("log",t,...e);else console.log(t,...e)}function jh(e){let t=e[0];if(typeof t==="string"&&t.startsWith("TSL:")){let i=e[1];if(i&&i.isStackTrace)e[0]+=" "+i.getLocation();else e[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return e}function ge(...e){e=jh(e);let t="THREE."+e.shift();if(ss)ss("warn",t,...e);else{let i=e[0];if(i&&i.isStackTrace)console.warn(i.getError(t));else console.warn(t,...e)}}function Fe(...e){e=jh(e);let t="THREE."+e.shift();if(ss)ss("error",t,...e);else{let i=e[0];if(i&&i.isStackTrace)console.error(i.getError(t));else console.error(t,...e)}}function on(...e){let t=e.join(" ");if(t in $h)return;$h[t]=!0,ge(...e)}function eu(e,t,i){return new Promise(function(n,r){function s(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:r();break;case e.TIMEOUT_EXPIRED:setTimeout(s,i);break;default:n()}}setTimeout(s,i)})}var tu={[Ys]:Ys,[Js]:Qs,[Ks]:Ks,[Zn]:$s,[Zs]:Zs,[Qs]:Js,[js]:js,[$s]:Zn};class si{addEventListener(e,t){if(this._listeners===void 0)this._listeners={};let i=this._listeners;if(i[e]===void 0)i[e]=[];if(i[e].indexOf(t)===-1)i[e].push(t)}hasEventListener(e,t){let i=this._listeners;if(i===void 0)return!1;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let n=i[e];if(n!==void 0){let r=n.indexOf(t);if(r!==-1)n.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let n=i.slice(0);for(let r=0,s=n.length;r<s;r++)n[r].call(this,e);e.target=null}}}var Ci=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var os=Math.PI/180,as=180/Math.PI;function Ii(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ci[e&255]+Ci[e>>8&255]+Ci[e>>16&255]+Ci[e>>24&255]+"-"+Ci[t&255]+Ci[t>>8&255]+"-"+Ci[t>>16&15|64]+Ci[t>>24&255]+"-"+Ci[i&63|128]+Ci[i>>8&255]+"-"+Ci[i>>16&255]+Ci[i>>24&255]+Ci[n&255]+Ci[n>>8&255]+Ci[n>>16&255]+Ci[n>>24&255]).toLowerCase()}function Qe(e,t,i){return Math.max(t,Math.min(i,e))}function iu(e,t){return(e%t+t)%t}function Xa(e,t,i){return(1-i)*e+i*t}function nu(e){return Math.pow(2,Math.floor(Math.log(e)/Math.LN2))}function Uo(e){switch(e.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function rc(e,t){if(t.constructor===Float32Array)return e;let i=Uo(t);if(i===void 0)throw Error("THREE.MathUtils: Invalid component type.");return Math.max(e/i,-1)}function sc(e,t){if(t.constructor===Float32Array)return e;let i=Uo(t);if(i===void 0)throw Error("THREE.MathUtils: Invalid component type.");return Math.round(e*i)}class Z{static{this.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,n=e.elements;return this.x=n[0]*t+n[3]*i+n[6],this.y=n[1]*t+n[4]*i+n[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Qe(this.x,e.x,t.x),this.y=Qe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Qe(this.x,e,t),this.y=Qe(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Qe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Qe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),n=Math.sin(t),r=this.x-e.x,s=this.y-e.y;return this.x=r*i-s*n+e.x,this.y=r*n+s*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Qt{constructor(e=0,t=0,i=0,n=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=n}static slerpFlat(e,t,i,n,r,s,o){let a=i[n+0],l=i[n+1],c=i[n+2],h=i[n+3],f=r[s+0],u=r[s+1],m=r[s+2],g=r[s+3];if(h!==g||a!==f||l!==u||c!==m){let _=a*f+l*u+c*m+h*g;if(_<0)f=-f,u=-u,m=-m,g=-g,_=-_;let p=1-o;if(_<0.9995){let d=Math.acos(_),v=Math.sin(d);p=Math.sin(p*d)/v,o=Math.sin(o*d)/v,a=a*p+f*o,l=l*p+u*o,c=c*p+m*o,h=h*p+g*o}else{a=a*p+f*o,l=l*p+u*o,c=c*p+m*o,h=h*p+g*o;let d=1/Math.sqrt(a*a+l*l+c*c+h*h);a*=d,l*=d,c*=d,h*=d}}e[t]=a,e[t+1]=l,e[t+2]=c,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,n,r,s){let o=i[n],a=i[n+1],l=i[n+2],c=i[n+3],h=r[s],f=r[s+1],u=r[s+2],m=r[s+3];return e[t]=o*m+c*h+a*u-l*f,e[t+1]=a*m+c*f+l*h-o*u,e[t+2]=l*m+c*u+o*f-a*h,e[t+3]=c*m-o*h-a*f-l*u,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,n){return this._x=e,this._y=t,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let{_x:i,_y:n,_z:r,_order:s}=e,{cos:o,sin:a}=Math,l=o(i/2),c=o(n/2),h=o(r/2),f=a(i/2),u=a(n/2),m=a(r/2);switch(s){case"XYZ":this._x=f*c*h+l*u*m,this._y=l*u*h-f*c*m,this._z=l*c*m+f*u*h,this._w=l*c*h-f*u*m;break;case"YXZ":this._x=f*c*h+l*u*m,this._y=l*u*h-f*c*m,this._z=l*c*m-f*u*h,this._w=l*c*h+f*u*m;break;case"ZXY":this._x=f*c*h-l*u*m,this._y=l*u*h+f*c*m,this._z=l*c*m+f*u*h,this._w=l*c*h-f*u*m;break;case"ZYX":this._x=f*c*h-l*u*m,this._y=l*u*h+f*c*m,this._z=l*c*m-f*u*h,this._w=l*c*h+f*u*m;break;case"YZX":this._x=f*c*h+l*u*m,this._y=l*u*h+f*c*m,this._z=l*c*m-f*u*h,this._w=l*c*h-f*u*m;break;case"XZY":this._x=f*c*h-l*u*m,this._y=l*u*h-f*c*m,this._z=l*c*m+f*u*h,this._w=l*c*h+f*u*m;break;default:ge("Quaternion: .setFromEuler() encountered an unknown order: "+s)}if(t===!0)this._onChangeCallback();return this}setFromAxisAngle(e,t){let i=t/2,n=Math.sin(i);return this._x=e.x*n,this._y=e.y*n,this._z=e.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],n=t[4],r=t[8],s=t[1],o=t[5],a=t[9],l=t[2],c=t[6],h=t[10],f=i+o+h;if(f>0){let u=0.5/Math.sqrt(f+1);this._w=0.25/u,this._x=(c-a)*u,this._y=(r-l)*u,this._z=(s-n)*u}else if(i>o&&i>h){let u=2*Math.sqrt(1+i-o-h);this._w=(c-a)/u,this._x=0.25*u,this._y=(n+s)/u,this._z=(r+l)/u}else if(o>h){let u=2*Math.sqrt(1+o-i-h);this._w=(r-l)/u,this._x=(n+s)/u,this._y=0.25*u,this._z=(a+c)/u}else{let u=2*Math.sqrt(1+h-i-o);this._w=(s-n)/u,this._x=(r+l)/u,this._y=(a+c)/u,this._z=0.25*u}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;if(i<0.00000001)if(i=0,Math.abs(e.x)>Math.abs(e.z))this._x=-e.y,this._y=e.x,this._z=0,this._w=i;else this._x=0,this._y=-e.z,this._z=e.y,this._w=i;else this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i;return this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Qe(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let n=Math.min(1,t/i);return this.slerp(e,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();if(e===0)this._x=0,this._y=0,this._z=0,this._w=1;else e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e;return this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let{_x:i,_y:n,_z:r,_w:s}=e,{_x:o,_y:a,_z:l,_w:c}=t;return this._x=i*c+s*o+n*l-r*a,this._y=n*c+s*a+r*o-i*l,this._z=r*c+s*l+i*a-n*o,this._w=s*c-i*o-n*a-r*l,this._onChangeCallback(),this}slerp(e,t){let{_x:i,_y:n,_z:r,_w:s}=e,o=this.dot(e);if(o<0)i=-i,n=-n,r=-r,s=-s,o=-o;let a=1-t;if(o<0.9995){let l=Math.acos(o),c=Math.sin(l);a=Math.sin(a*l)/c,t=Math.sin(t*l)/c,this._x=this._x*a+i*t,this._y=this._y*a+n*t,this._z=this._z*a+r*t,this._w=this._w*a+s*t,this._onChangeCallback()}else this._x=this._x*a+i*t,this._y=this._y*a+n*t,this._z=this._z*a+r*t,this._w=this._w*a+s*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),n=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(n*Math.sin(e),n*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class C{static{this.prototype.isVector3=!0}constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){if(i===void 0)i=this.z;return this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ru.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ru.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,n=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*n,this.y=r[1]*t+r[4]*i+r[7]*n,this.z=r[2]*t+r[5]*i+r[8]*n,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,n=this.z,r=e.elements,s=1/(r[3]*t+r[7]*i+r[11]*n+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*n+r[12])*s,this.y=(r[1]*t+r[5]*i+r[9]*n+r[13])*s,this.z=(r[2]*t+r[6]*i+r[10]*n+r[14])*s,this}applyQuaternion(e){let t=this.x,i=this.y,n=this.z,{x:r,y:s,z:o,w:a}=e,l=2*(s*n-o*i),c=2*(o*t-r*n),h=2*(r*i-s*t);return this.x=t+a*l+s*h-o*c,this.y=i+a*c+o*l-r*h,this.z=n+a*h+r*c-s*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,n=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*n,this.y=r[1]*t+r[5]*i+r[9]*n,this.z=r[2]*t+r[6]*i+r[10]*n,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Qe(this.x,e.x,t.x),this.y=Qe(this.y,e.y,t.y),this.z=Qe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Qe(this.x,e,t),this.y=Qe(this.y,e,t),this.z=Qe(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Qe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let{x:i,y:n,z:r}=e,{x:s,y:o,z:a}=t;return this.x=n*a-r*o,this.y=r*s-i*a,this.z=i*o-n*s,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return oc.copy(this).projectOnVector(e),this.sub(oc)}reflect(e){return this.sub(oc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Qe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,n=this.z-e.z;return t*t+i*i+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let n=Math.sin(t)*e;return this.x=n*Math.sin(i),this.y=Math.cos(t)*e,this.z=n*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),n=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=n,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}var oc=new C,ru=new Qt;class qe{static{this.prototype.isMatrix3=!0}constructor(e,t,i,n,r,s,o,a,l){if(this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0)this.set(e,t,i,n,r,s,o,a,l)}set(e,t,i,n,r,s,o,a,l){let c=this.elements;return c[0]=e,c[1]=n,c[2]=o,c[3]=t,c[4]=r,c[5]=a,c[6]=i,c[7]=s,c[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,n=t.elements,r=this.elements,s=i[0],o=i[3],a=i[6],l=i[1],c=i[4],h=i[7],f=i[2],u=i[5],m=i[8],g=n[0],_=n[3],p=n[6],d=n[1],v=n[4],M=n[7],S=n[2],T=n[5],w=n[8];return r[0]=s*g+o*d+a*S,r[3]=s*_+o*v+a*T,r[6]=s*p+o*M+a*w,r[1]=l*g+c*d+h*S,r[4]=l*_+c*v+h*T,r[7]=l*p+c*M+h*w,r[2]=f*g+u*d+m*S,r[5]=f*_+u*v+m*T,r[8]=f*p+u*M+m*w,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],n=e[2],r=e[3],s=e[4],o=e[5],a=e[6],l=e[7],c=e[8];return t*s*c-t*o*l-i*r*c+i*o*a+n*r*l-n*s*a}invert(){let e=this.elements,t=e[0],i=e[1],n=e[2],r=e[3],s=e[4],o=e[5],a=e[6],l=e[7],c=e[8],h=c*s-o*l,f=o*a-c*r,u=l*r-s*a,m=t*h+i*f+n*u;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let g=1/m;return e[0]=h*g,e[1]=(n*l-c*i)*g,e[2]=(o*i-n*s)*g,e[3]=f*g,e[4]=(c*t-n*a)*g,e[5]=(n*r-o*t)*g,e[6]=u*g,e[7]=(i*a-l*t)*g,e[8]=(s*t-i*r)*g,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,n,r,s,o){let a=Math.cos(r),l=Math.sin(r);return this.set(i*a,i*l,-i*(a*s+l*o)+s+e,-n*l,n*a,-n*(-l*s+a*o)+o+t,0,0,1),this}scale(e,t){return on("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(ac.makeScale(e,t)),this}rotate(e){return on("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(ac.makeRotation(-e)),this}translate(e,t){return on("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(ac.makeTranslation(e,t)),this}makeTranslation(e,t){if(e.isVector2)this.set(1,0,e.x,0,1,e.y,0,0,1);else this.set(1,0,e,0,1,t,0,0,1);return this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let n=0;n<9;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}var ac=new qe;var su=new qe().set(0.4123908,0.3575843,0.1804808,0.212639,0.7151687,0.0721923,0.0193308,0.1191948,0.9505322),ou=new qe().set(3.2409699,-1.5373832,-0.4986108,-0.9692436,1.8759675,0.0415551,0.0556301,-0.203977,1.0569715);function d0(){let e={enabled:!0,workingColorSpace:Sr,spaces:{},convert:function(r,s,o){if(this.enabled===!1||s===o||!s||!o)return r;if(this.spaces[s].transfer===xt)r.r=mn(r.r),r.g=mn(r.g),r.b=mn(r.b);if(this.spaces[s].primaries!==this.spaces[o].primaries)r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ);if(this.spaces[o].transfer===xt)r.r=Er(r.r),r.g=Er(r.g),r.b=Er(r.b);return r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){if(r===sn)return br;return this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[o].fromXYZ).multiply(this.spaces[s].toXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}},t=[0.64,0.33,0.3,0.6,0.15,0.06],i=[0.2126,0.7152,0.0722],n=[0.3127,0.329];return e.define({[Sr]:{primaries:t,whitePoint:n,transfer:br,toXYZ:su,fromXYZ:ou,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Tt},outputColorSpaceConfig:{drawingBufferColorSpace:Tt}},[Tt]:{primaries:t,whitePoint:n,transfer:xt,toXYZ:su,fromXYZ:ou,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Tt}}}),e}var it=d0();function mn(e){return e<0.04045?e*0.0773993808:Math.pow(e*0.9478672986+0.0521327014,2.4)}function Er(e){return e<0.0031308?e*12.92:1.055*Math.pow(e,0.41666)-0.055}var ls;class qa{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src))return e.src;if(typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{if(ls===void 0)ls=Jn("canvas");ls.width=e.width,ls.height=e.height;let n=ls.getContext("2d");if(e instanceof ImageData)n.putImageData(e,0,0);else n.drawImage(e,0,0,e.width,e.height);i=ls}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Jn("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let n=i.getImageData(0,0,e.width,e.height),r=n.data;for(let s=0;s<r.length;s++)r[s]=mn(r[s]/255)*255;return i.putImageData(n,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)if(t instanceof Uint8Array||t instanceof Uint8ClampedArray)t[i]=Math.floor(mn(t[i]/255)*255);else t[i]=mn(t[i]);return{data:t,width:e.width,height:e.height}}else return ge("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}var p0=0;class En{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:p0++}),this.uuid=Ii(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;if(typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement)e.set(t.videoWidth,t.videoHeight,0);else if(typeof VideoFrame<"u"&&t instanceof VideoFrame)e.set(t.displayWidth,t.displayHeight,0);else if(t!==null)e.set(t.width||0,t.height||0,t.depth||0);else e.set(0,0,0);return e}set needsUpdate(e){if(e===!0)this.version++}toJSON(e){let t=e===void 0||typeof e==="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let r;if(Array.isArray(n)){r=[];for(let s=0,o=n.length;s<o;s++)if(n[s].isDataTexture)r.push(lc(n[s].image));else r.push(lc(n[s]))}else r=lc(n);i.url=r}if(!t)e.images[this.uuid]=i;return i}}function lc(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap)return qa.getDataURL(e);else if(e.data)return{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name};else return ge("Texture: Unable to serialize Texture."),{}}var m0=0,cc=new C;class vt extends si{constructor(e=vt.DEFAULT_IMAGE,t=vt.DEFAULT_MAPPING,i=Mi,n=Mi,r=Ot,s=Oi,o=gi,a=Jt,l=vt.DEFAULT_ANISOTROPY,c=sn){super();this.isTexture=!0,Object.defineProperty(this,"id",{value:m0++}),this.uuid=Ii(),this.name="",this.source=new En(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=r,this.minFilter=s,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=a,this.offset=new Z(0,0),this.repeat=new Z(1,1),this.center=new Z(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qe,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=e&&e.depth&&e.depth>1?!0:!1,this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(cc).x}get height(){return this.source.getSize(cc).y}get depth(){return this.source.getSize(cc).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){ge(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let n=this[t];if(n===void 0){ge(`Texture.setValues(): property '${t}' does not exist.`);continue}if(n&&i&&(n.isVector2&&i.isVector2))n.copy(i);else if(n&&i&&(n.isVector3&&i.isVector3))n.copy(i);else if(n&&i&&(n.isMatrix3&&i.isMatrix3))n.copy(i);else this[t]=i}}toJSON(e){let t=e===void 0||typeof e==="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(Object.keys(this.userData).length>0)i.userData=this.userData;if(!t)e.textures[this.uuid]=i;return i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ra)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Dn:e.x=e.x-Math.floor(e.x);break;case Mi:e.x=e.x<0?0:1;break;case Yr:if(Math.abs(Math.floor(e.x)%2)===1)e.x=Math.ceil(e.x)-e.x;else e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Dn:e.y=e.y-Math.floor(e.y);break;case Mi:e.y=e.y<0?0:1;break;case Yr:if(Math.abs(Math.floor(e.y)%2)===1)e.y=Math.ceil(e.y)-e.y;else e.y=e.y-Math.floor(e.y);break}if(this.flipY)e.y=1-e.y;return e}set needsUpdate(e){if(e===!0)this.version++,this.source.needsUpdate=!0}set needsPMREMUpdate(e){if(e===!0)this.pmremVersion++}}vt.DEFAULT_IMAGE=null;vt.DEFAULT_MAPPING=Ra;vt.DEFAULT_ANISOTROPY=1;class Mt{static{this.prototype.isVector4=!0}constructor(e=0,t=0,i=0,n=1){this.x=e,this.y=t,this.z=i,this.w=n}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,n){return this.x=e,this.y=t,this.z=i,this.w=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,n=this.z,r=this.w,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*n+s[12]*r,this.y=s[1]*t+s[5]*i+s[9]*n+s[13]*r,this.z=s[2]*t+s[6]*i+s[10]*n+s[14]*r,this.w=s[3]*t+s[7]*i+s[11]*n+s[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);if(t<0.0001)this.x=1,this.y=0,this.z=0;else this.x=e.x/t,this.y=e.y/t,this.z=e.z/t;return this}setAxisAngleFromRotationMatrix(e){let t,i,n,r,s=0.01,o=0.1,a=e.elements,l=a[0],c=a[4],h=a[8],f=a[1],u=a[5],m=a[9],g=a[2],_=a[6],p=a[10];if(Math.abs(c-f)<0.01&&Math.abs(h-g)<0.01&&Math.abs(m-_)<0.01){if(Math.abs(c+f)<0.1&&Math.abs(h+g)<0.1&&Math.abs(m+_)<0.1&&Math.abs(l+u+p-3)<0.1)return this.set(1,0,0,0),this;t=Math.PI;let v=(l+1)/2,M=(u+1)/2,S=(p+1)/2,T=(c+f)/4,w=(h+g)/4,x=(m+_)/4;if(v>M&&v>S)if(v<0.01)i=0,n=0.707106781,r=0.707106781;else i=Math.sqrt(v),n=T/i,r=w/i;else if(M>S)if(M<0.01)i=0.707106781,n=0,r=0.707106781;else n=Math.sqrt(M),i=T/n,r=x/n;else if(S<0.01)i=0.707106781,n=0.707106781,r=0;else r=Math.sqrt(S),i=w/r,n=x/r;return this.set(i,n,r,t),this}let d=Math.sqrt((_-m)*(_-m)+(h-g)*(h-g)+(f-c)*(f-c));if(Math.abs(d)<0.001)d=1;return this.x=(_-m)/d,this.y=(h-g)/d,this.z=(f-c)/d,this.w=Math.acos((l+u+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Qe(this.x,e.x,t.x),this.y=Qe(this.y,e.y,t.y),this.z=Qe(this.z,e.z,t.z),this.w=Qe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Qe(this.x,e,t),this.y=Qe(this.y,e,t),this.z=Qe(this.z,e,t),this.w=Qe(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Qe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Fo extends si{constructor(e=1,t=1,i={}){super();i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ot,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Mt(0,0,e,t),this.scissorTest=!1,this.viewport=new Mt(0,0,e,t),this.textures=[];let n=i.count;for(let r=0;r<n;r++)this.textures[r]=new vt({width:e,height:t,depth:i.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Ot,generateMipmaps:!1,flipY:!1,internalFormat:null};if(e.mapping!==void 0)t.mapping=e.mapping;if(e.wrapS!==void 0)t.wrapS=e.wrapS;if(e.wrapT!==void 0)t.wrapT=e.wrapT;if(e.wrapR!==void 0)t.wrapR=e.wrapR;if(e.magFilter!==void 0)t.magFilter=e.magFilter;if(e.minFilter!==void 0)t.minFilter=e.minFilter;if(e.format!==void 0)t.format=e.format;if(e.type!==void 0)t.type=e.type;if(e.anisotropy!==void 0)t.anisotropy=e.anisotropy;if(e.colorSpace!==void 0)t.colorSpace=e.colorSpace;if(e.flipY!==void 0)t.flipY=e.flipY;if(e.generateMipmaps!==void 0)t.generateMipmaps=e.generateMipmaps;if(e.mipmapsAutoUpdate!==void 0)t.mipmapsAutoUpdate=e.mipmapsAutoUpdate;if(e.internalFormat!==void 0)t.internalFormat=e.internalFormat;for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){if(this._depthTexture!==null&&this._depthTexture.renderTarget===this)this._depthTexture.renderTarget=null;if(e!==null&&e.renderTarget===null)e.renderTarget=this;this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let n=0,r=this.textures.length;n<r;n++)if(this.textures[n].image.width=e,this.textures[n].image.height=t,this.textures[n].image.depth=i,this.textures[n].isData3DTexture!==!0)this.textures[n].isArrayTexture=this.textures[n].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new En(n)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class oi extends Fo{constructor(e=1,t=1,i={}){super(e,t,i);this.isWebGLRenderTarget=!0}}class Tr extends vt{constructor(e=null,t=1,i=1,n=1){super(null);this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=Ut,this.minFilter=Ut,this.wrapR=Mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class cs extends vt{constructor(e=null,t=1,i=1,n=1){super(null);this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=Ut,this.minFilter=Ut,this.wrapR=Mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}class Je{static{this.prototype.isMatrix4=!0}constructor(e,t,i,n,r,s,o,a,l,c,h,f,u,m,g,_){if(this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0)this.set(e,t,i,n,r,s,o,a,l,c,h,f,u,m,g,_)}set(e,t,i,n,r,s,o,a,l,c,h,f,u,m,g,_){let p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=n,p[1]=r,p[5]=s,p[9]=o,p[13]=a,p[2]=l,p[6]=c,p[10]=h,p[14]=f,p[3]=u,p[7]=m,p[11]=g,p[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Je().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){if(this.determinantAffine()===0)return e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this;return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,i=e.elements,n=1/hs.setFromMatrixColumn(e,0).length(),r=1/hs.setFromMatrixColumn(e,1).length(),s=1/hs.setFromMatrixColumn(e,2).length();return t[0]=i[0]*n,t[1]=i[1]*n,t[2]=i[2]*n,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*s,t[9]=i[9]*s,t[10]=i[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,{x:i,y:n,z:r}=e,s=Math.cos(i),o=Math.sin(i),a=Math.cos(n),l=Math.sin(n),c=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){let f=s*c,u=s*h,m=o*c,g=o*h;t[0]=a*c,t[4]=-a*h,t[8]=l,t[1]=u+m*l,t[5]=f-g*l,t[9]=-o*a,t[2]=g-f*l,t[6]=m+u*l,t[10]=s*a}else if(e.order==="YXZ"){let f=a*c,u=a*h,m=l*c,g=l*h;t[0]=f+g*o,t[4]=m*o-u,t[8]=s*l,t[1]=s*h,t[5]=s*c,t[9]=-o,t[2]=u*o-m,t[6]=g+f*o,t[10]=s*a}else if(e.order==="ZXY"){let f=a*c,u=a*h,m=l*c,g=l*h;t[0]=f-g*o,t[4]=-s*h,t[8]=m+u*o,t[1]=u+m*o,t[5]=s*c,t[9]=g-f*o,t[2]=-s*l,t[6]=o,t[10]=s*a}else if(e.order==="ZYX"){let f=s*c,u=s*h,m=o*c,g=o*h;t[0]=a*c,t[4]=m*l-u,t[8]=f*l+g,t[1]=a*h,t[5]=g*l+f,t[9]=u*l-m,t[2]=-l,t[6]=o*a,t[10]=s*a}else if(e.order==="YZX"){let f=s*a,u=s*l,m=o*a,g=o*l;t[0]=a*c,t[4]=g-f*h,t[8]=m*h+u,t[1]=h,t[5]=s*c,t[9]=-o*c,t[2]=-l*c,t[6]=u*h+m,t[10]=f-g*h}else if(e.order==="XZY"){let f=s*a,u=s*l,m=o*a,g=o*l;t[0]=a*c,t[4]=-h,t[8]=l*c,t[1]=f*h+g,t[5]=s*c,t[9]=u*h-m,t[2]=m*h-u,t[6]=o*c,t[10]=g*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(g0,e,x0)}lookAt(e,t,i){let n=this.elements;if(Ki.subVectors(e,t),Ki.lengthSq()===0)Ki.z=1;if(Ki.normalize(),Kn.crossVectors(i,Ki),Kn.lengthSq()===0){if(Math.abs(i.z)===1)Ki.x+=0.0001;else Ki.z+=0.0001;Ki.normalize(),Kn.crossVectors(i,Ki)}return Kn.normalize(),Ya.crossVectors(Ki,Kn),n[0]=Kn.x,n[4]=Ya.x,n[8]=Ki.x,n[1]=Kn.y,n[5]=Ya.y,n[9]=Ki.y,n[2]=Kn.z,n[6]=Ya.z,n[10]=Ki.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,n=t.elements,r=this.elements,s=i[0],o=i[4],a=i[8],l=i[12],c=i[1],h=i[5],f=i[9],u=i[13],m=i[2],g=i[6],_=i[10],p=i[14],d=i[3],v=i[7],M=i[11],S=i[15],T=n[0],w=n[4],x=n[8],y=n[12],A=n[1],U=n[5],P=n[9],O=n[13],ee=n[2],I=n[6],X=n[10],L=n[14],N=n[3],Q=n[7],z=n[11],W=n[15];return r[0]=s*T+o*A+a*ee+l*N,r[4]=s*w+o*U+a*I+l*Q,r[8]=s*x+o*P+a*X+l*z,r[12]=s*y+o*O+a*L+l*W,r[1]=c*T+h*A+f*ee+u*N,r[5]=c*w+h*U+f*I+u*Q,r[9]=c*x+h*P+f*X+u*z,r[13]=c*y+h*O+f*L+u*W,r[2]=m*T+g*A+_*ee+p*N,r[6]=m*w+g*U+_*I+p*Q,r[10]=m*x+g*P+_*X+p*z,r[14]=m*y+g*O+_*L+p*W,r[3]=d*T+v*A+M*ee+S*N,r[7]=d*w+v*U+M*I+S*Q,r[11]=d*x+v*P+M*X+S*z,r[15]=d*y+v*O+M*L+S*W,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],n=e[8],r=e[12],s=e[1],o=e[5],a=e[9],l=e[13],c=e[2],h=e[6],f=e[10],u=e[14],m=e[3],g=e[7],_=e[11],p=e[15],d=a*u-l*f,v=o*u-l*h,M=o*f-a*h,S=s*u-l*c,T=s*f-a*c,w=s*h-o*c;return t*(g*d-_*v+p*M)-i*(m*d-_*S+p*T)+n*(m*v-g*S+p*w)-r*(m*M-g*T+_*w)}determinantAffine(){let e=this.elements,t=e[0],i=e[4],n=e[8],r=e[1],s=e[5],o=e[9],a=e[2],l=e[6],c=e[10];return t*(s*c-o*l)-i*(r*c-o*a)+n*(r*l-s*a)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let n=this.elements;if(e.isVector3)n[12]=e.x,n[13]=e.y,n[14]=e.z;else n[12]=e,n[13]=t,n[14]=i;return this}invert(){let e=this.elements,t=e[0],i=e[1],n=e[2],r=e[3],s=e[4],o=e[5],a=e[6],l=e[7],c=e[8],h=e[9],f=e[10],u=e[11],m=e[12],g=e[13],_=e[14],p=e[15],d=t*o-i*s,v=t*a-n*s,M=t*l-r*s,S=i*a-n*o,T=i*l-r*o,w=n*l-r*a,x=c*g-h*m,y=c*_-f*m,A=c*p-u*m,U=h*_-f*g,P=h*p-u*g,O=f*p-u*_,ee=d*O-v*P+M*U+S*A-T*y+w*x;if(ee===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let I=1/ee;return e[0]=(o*O-a*P+l*U)*I,e[1]=(n*P-i*O-r*U)*I,e[2]=(g*w-_*T+p*S)*I,e[3]=(f*T-h*w-u*S)*I,e[4]=(a*A-s*O-l*y)*I,e[5]=(t*O-n*A+r*y)*I,e[6]=(_*M-m*w-p*v)*I,e[7]=(c*w-f*M+u*v)*I,e[8]=(s*P-o*A+l*x)*I,e[9]=(i*A-t*P-r*x)*I,e[10]=(m*T-g*M+p*d)*I,e[11]=(h*M-c*T-u*d)*I,e[12]=(o*y-s*U-a*x)*I,e[13]=(t*U-i*y+n*x)*I,e[14]=(g*v-m*S-_*d)*I,e[15]=(c*S-h*v+f*d)*I,this}scale(e){let t=this.elements,{x:i,y:n,z:r}=e;return t[0]*=i,t[4]*=n,t[8]*=r,t[1]*=i,t[5]*=n,t[9]*=r,t[2]*=i,t[6]*=n,t[10]*=r,t[3]*=i,t[7]*=n,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],n=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,n))}makeTranslation(e,t,i){if(e.isVector3)this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1);else this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1);return this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),n=Math.sin(t),r=1-i,{x:s,y:o,z:a}=e,l=r*s,c=r*o;return this.set(l*s+i,l*o-n*a,l*a+n*o,0,l*o+n*a,c*o+i,c*a-n*s,0,l*a-n*o,c*a+n*s,r*a*a+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,n,r,s){return this.set(1,i,r,0,e,1,s,0,t,n,1,0,0,0,0,1),this}compose(e,t,i){let n=this.elements,{_x:r,_y:s,_z:o,_w:a}=t,l=r+r,c=s+s,h=o+o,f=r*l,u=r*c,m=r*h,g=s*c,_=s*h,p=o*h,d=a*l,v=a*c,M=a*h,{x:S,y:T,z:w}=i;return n[0]=(1-(g+p))*S,n[1]=(u+M)*S,n[2]=(m-v)*S,n[3]=0,n[4]=(u-M)*T,n[5]=(1-(f+p))*T,n[6]=(_+d)*T,n[7]=0,n[8]=(m+v)*w,n[9]=(_-d)*w,n[10]=(1-(f+g))*w,n[11]=0,n[12]=e.x,n[13]=e.y,n[14]=e.z,n[15]=1,this}decompose(e,t,i){let n=this.elements;e.x=n[12],e.y=n[13],e.z=n[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),t.identity(),this;let s=hs.set(n[0],n[1],n[2]).length(),o=hs.set(n[4],n[5],n[6]).length(),a=hs.set(n[8],n[9],n[10]).length();if(r<0)s=-s;gn.copy(this);let l=1/s,c=1/o,h=1/a;return gn.elements[0]*=l,gn.elements[1]*=l,gn.elements[2]*=l,gn.elements[4]*=c,gn.elements[5]*=c,gn.elements[6]*=c,gn.elements[8]*=h,gn.elements[9]*=h,gn.elements[10]*=h,t.setFromRotationMatrix(gn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,n,r,s,o=xi,a=!1){let l=this.elements,c=2*r/(t-e),h=2*r/(i-n),f=(t+e)/(t-e),u=(i+n)/(i-n),m,g;if(a)m=r/(s-r),g=s*r/(s-r);else if(o===xi)m=-(s+r)/(s-r),g=-2*s*r/(s-r);else if(o===bn)m=-s/(s-r),g=-s*r/(s-r);else throw Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=h,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,n,r,s,o=xi,a=!1){let l=this.elements,c=2/(t-e),h=2/(i-n),f=-(t+e)/(t-e),u=-(i+n)/(i-n),m,g;if(a)m=1/(s-r),g=s/(s-r);else if(o===xi)m=-2/(s-r),g=-(s+r)/(s-r);else if(o===bn)m=-1/(s-r),g=-r/(s-r);else throw Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=0,l[12]=f,l[1]=0,l[5]=h,l[9]=0,l[13]=u,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let n=0;n<16;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}var hs=new C,gn=new Je,g0=new C(0,0,0),x0=new C(1,1,1),Kn=new C,Ya=new C,Ki=new C;var au=new Je,lu=new Qt;class Pi{constructor(e=0,t=0,i=0,n=Pi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=n}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,n=this._order){return this._x=e,this._y=t,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let n=e.elements,r=n[0],s=n[4],o=n[8],a=n[1],l=n[5],c=n[9],h=n[2],f=n[6],u=n[10];switch(t){case"XYZ":if(this._y=Math.asin(Qe(o,-1,1)),Math.abs(o)<0.9999999)this._x=Math.atan2(-c,u),this._z=Math.atan2(-s,r);else this._x=Math.atan2(f,l),this._z=0;break;case"YXZ":if(this._x=Math.asin(-Qe(c,-1,1)),Math.abs(c)<0.9999999)this._y=Math.atan2(o,u),this._z=Math.atan2(a,l);else this._y=Math.atan2(-h,r),this._z=0;break;case"ZXY":if(this._x=Math.asin(Qe(f,-1,1)),Math.abs(f)<0.9999999)this._y=Math.atan2(-h,u),this._z=Math.atan2(-s,l);else this._y=0,this._z=Math.atan2(a,r);break;case"ZYX":if(this._y=Math.asin(-Qe(h,-1,1)),Math.abs(h)<0.9999999)this._x=Math.atan2(f,u),this._z=Math.atan2(a,r);else this._x=0,this._z=Math.atan2(-s,l);break;case"YZX":if(this._z=Math.asin(Qe(a,-1,1)),Math.abs(a)<0.9999999)this._x=Math.atan2(-c,l),this._y=Math.atan2(-h,r);else this._x=0,this._y=Math.atan2(o,u);break;case"XZY":if(this._z=Math.asin(-Qe(s,-1,1)),Math.abs(s)<0.9999999)this._x=Math.atan2(f,l),this._y=Math.atan2(o,r);else this._x=Math.atan2(-c,u),this._y=0;break;default:ge("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}if(this._order=t,i===!0)this._onChangeCallback();return this}setFromQuaternion(e,t,i){return au.makeRotationFromQuaternion(e),this.setFromRotationMatrix(au,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return lu.setFromEuler(this),this.setFromQuaternion(lu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){if(this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0)this._order=e[3];return this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Pi.DEFAULT_ORDER="XYZ";class wr{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}var _0=0,cu=new C,us=new Qt,Un=new Je,Za=new C,Bo=new C,y0=new C,v0=new Qt,hu=new C(1,0,0),uu=new C(0,1,0),fu=new C(0,0,1),du={type:"added"},M0={type:"removed"},fs={type:"childadded",child:null},hc={type:"childremoved",child:null};class lt extends si{constructor(){super();this.isObject3D=!0,Object.defineProperty(this,"id",{value:_0++}),this.uuid=Ii(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=lt.DEFAULT_UP.clone();let e=new C,t=new Pi,i=new Qt,n=new C(1,1,1);function r(){i.setFromEuler(t,!1)}function s(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new Je},normalMatrix:{value:new qe}}),this.matrix=new Je,this.matrixWorld=new Je,this.matrixAutoUpdate=lt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=lt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new wr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null)this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return us.setFromAxisAngle(e,t),this.quaternion.multiply(us),this}rotateOnWorldAxis(e,t){return us.setFromAxisAngle(e,t),this.quaternion.premultiply(us),this}rotateX(e){return this.rotateOnAxis(hu,e)}rotateY(e){return this.rotateOnAxis(uu,e)}rotateZ(e){return this.rotateOnAxis(fu,e)}translateOnAxis(e,t){return cu.copy(e).applyQuaternion(this.quaternion),this.position.add(cu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(hu,e)}translateY(e){return this.translateOnAxis(uu,e)}translateZ(e){return this.translateOnAxis(fu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Un.copy(this.matrixWorld).invert())}lookAt(e,t,i){if(e.isVector3)Za.copy(e);else Za.set(e,t,i);let n=this.parent;if(this.updateWorldMatrix(!0,!1),Bo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight)Un.lookAt(Bo,Za,this.up);else Un.lookAt(Za,Bo,this.up);if(this.quaternion.setFromRotationMatrix(Un),n)Un.extractRotation(n.matrixWorld),us.setFromRotationMatrix(Un),this.quaternion.premultiply(us.invert())}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}if(e===this)return Fe("Object3D.add: object can't be added as a child of itself.",e),this;if(e&&e.isObject3D)e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(du),fs.child=e,this.dispatchEvent(fs),fs.child=null;else Fe("Object3D.add: object not an instance of THREE.Object3D.",e);return this}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);if(t!==-1)e.parent=null,this.children.splice(t,1),e.dispatchEvent(M0),hc.child=e,this.dispatchEvent(hc),hc.child=null;return this}removeFromParent(){let e=this.parent;if(e!==null)e.remove(this);return this}clear(){return this.remove(...this.children)}attach(e){if(this.updateWorldMatrix(!0,!1),Un.copy(this.matrixWorld).invert(),e.parent!==null)e.parent.updateWorldMatrix(!0,!1),Un.multiply(e.parent.matrixWorld);return e.applyMatrix4(Un),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(du),fs.child=e,this.dispatchEvent(fs),fs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,n=this.children.length;i<n;i++){let s=this.children[i].getObjectByProperty(e,t);if(s!==void 0)return s}return}getObjectsByProperty(e,t,i=[]){if(this[e]===t)i.push(this);let n=this.children;for(let r=0,s=n.length;r<s;r++)n[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bo,e,y0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bo,v0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;if(t!==null)e(t),t.traverseAncestors(e)}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let{x:t,y:i,z:n}=e,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*n,r[13]+=i-r[1]*t-r[5]*i-r[9]*n,r[14]+=n-r[2]*t-r[6]*i-r[10]*n}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||e){if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,e=!0}let t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){let n=this.parent;if(e===!0&&n!==null)n.updateWorldMatrix(!0,!1);if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||i){if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,i=!0}if(t===!0){let r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0,i)}}toJSON(e){let t=e===void 0||typeof e==="string",i={};if(t)e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"};let n={};if(n.uuid=this.uuid,n.type=this.type,n.name=this.name,n.castShadow=this.castShadow,n.receiveShadow=this.receiveShadow,n.visible=this.visible,n.frustumCulled=this.frustumCulled,n.renderOrder=this.renderOrder,n.static=this.static,n.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0)n.userData=this.userData;if(n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.pivot!==null)n.pivot=this.pivot.toArray();if(this.morphTargetDictionary!==void 0)n.morphTargetDictionary=Object.assign({},this.morphTargetDictionary);if(this.morphTargetInfluences!==void 0)n.morphTargetInfluences=this.morphTargetInfluences.slice();if(this.isInstancedMesh){if(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null)n.instanceColor=this.instanceColor.toJSON()}if(this.isBatchedMesh){if(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.geometryInfo=this._geometryInfo.map((o)=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),n.instanceInfo=this._instanceInfo.map((o)=>({...o})),n.availableInstanceIds=this._availableInstanceIds.slice(),n.availableGeometryIds=this._availableGeometryIds.slice(),n.nextIndexStart=this._nextIndexStart,n.nextVertexStart=this._nextVertexStart,n.geometryCount=this._geometryCount,n.maxInstanceCount=this._maxInstanceCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.matricesTexture=this._matricesTexture.toJSON(e),n.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null)n.colorsTexture=this._colorsTexture.toJSON(e);if(this.boundingSphere!==null)n.boundingSphere=this.boundingSphere.toJSON();if(this.boundingBox!==null)n.boundingBox=this.boundingBox.toJSON()}function r(o,a){if(o[a.uuid]===void 0)o[a.uuid]=a.toJSON(e);return a.uuid}if(this.isScene){if(this.background){if(this.background.isColor)n.background=this.background.toJSON();else if(this.background.isTexture)n.background=this.background.toJSON(e).uuid}if(this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0)n.environment=this.environment.toJSON(e).uuid}else if(this.isMesh||this.isLine||this.isPoints){n.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let a=o.shapes;if(Array.isArray(a))for(let l=0,c=a.length;l<c;l++){let h=a[l];r(e.shapes,h)}else r(e.shapes,a)}}if(this.isSkinnedMesh){if(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0)r(e.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid}if(this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let a=0,l=this.material.length;a<l;a++)o.push(r(e.materials,this.material[a]));n.material=o}else n.material=r(e.materials,this.material);if(this.children.length>0){n.children=[];for(let o=0;o<this.children.length;o++)n.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){n.animations=[];for(let o=0;o<this.animations.length;o++){let a=this.animations[o];n.animations.push(r(e.animations,a))}}if(t){let o=s(e.geometries),a=s(e.materials),l=s(e.textures),c=s(e.images),h=s(e.shapes),f=s(e.skeletons),u=s(e.animations),m=s(e.nodes);if(o.length>0)i.geometries=o;if(a.length>0)i.materials=a;if(l.length>0)i.textures=l;if(c.length>0)i.images=c;if(h.length>0)i.shapes=h;if(f.length>0)i.skeletons=f;if(u.length>0)i.animations=u;if(m.length>0)i.nodes=m}return i.object=n,i;function s(o){let a=[];for(let l in o){let c=o[l];delete c.metadata,a.push(c)}return a}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let n=e.children[i];this.add(n.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}lt.DEFAULT_UP=new C(0,1,0);lt.DEFAULT_MATRIX_AUTO_UPDATE=!0;lt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class ut extends lt{constructor(){super();this.isGroup=!0,this.type="Group"}}var S0={type:"move"};class ds{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){if(this._hand===null)this._hand=new ut,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1};return this._hand}getTargetRaySpace(){if(this._targetRay===null)this._targetRay=new ut,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C;return this._targetRay}getGripSpace(){if(this._grip===null)this._grip=new ut,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C,this._grip.eventsEnabled=!1;return this._grip}dispatchEvent(e){if(this._targetRay!==null)this._targetRay.dispatchEvent(e);if(this._grip!==null)this._grip.dispatchEvent(e);if(this._hand!==null)this._hand.dispatchEvent(e);return this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){if(this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null)this._targetRay.visible=!1;if(this._grip!==null)this._grip.visible=!1;if(this._hand!==null)this._hand.visible=!1;return this}update(e,t,i){let n=null,r=null,s=null,o=this._targetRay,a=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){s=!0;for(let g of e.hand.values()){let _=t.getJointPose(g,i),p=this._getHandJoint(l,g);if(_!==null)p.matrix.fromArray(_.transform.matrix),p.matrix.decompose(p.position,p.quaternion,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=_.radius;p.visible=_!==null}let c=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],f=c.position.distanceTo(h.position),u=0.02,m=0.005;if(l.inputState.pinching&&f>u+m)l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this});else if(!l.inputState.pinching&&f<=u-m)l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this})}else if(a!==null&&e.gripSpace){if(r=t.getPose(e.gripSpace,i),r!==null){if(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity)a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity);else a.hasLinearVelocity=!1;if(r.angularVelocity)a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity);else a.hasAngularVelocity=!1;if(a.eventsEnabled)a.dispatchEvent({type:"gripUpdated",data:e,target:this})}}if(o!==null){if(n=t.getPose(e.targetRaySpace,i),n===null&&r!==null)n=r;if(n!==null){if(o.matrix.fromArray(n.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,n.linearVelocity)o.hasLinearVelocity=!0,o.linearVelocity.copy(n.linearVelocity);else o.hasLinearVelocity=!1;if(n.angularVelocity)o.hasAngularVelocity=!0,o.angularVelocity.copy(n.angularVelocity);else o.hasAngularVelocity=!1;this.dispatchEvent(S0)}}}if(o!==null)o.visible=n!==null;if(a!==null)a.visible=r!==null;if(l!==null)l.visible=s!==null;return this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new ut;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}var pu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},$n={h:0,s:0,l:0},Ja={h:0,s:0,l:0};function uc(e,t,i){if(i<0)i+=1;if(i>1)i-=1;if(i<0.16666666666666666)return e+(t-e)*6*i;if(i<0.5)return t;if(i<0.6666666666666666)return e+(t-e)*6*(0.6666666666666666-i);return e}class xe{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let n=e;if(n&&n.isColor)this.copy(n);else if(typeof n==="number")this.setHex(n);else if(typeof n==="string")this.setStyle(n)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Tt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,it.colorSpaceToWorking(this,t),this}setRGB(e,t,i,n=it.workingColorSpace){return this.r=e,this.g=t,this.b=i,it.colorSpaceToWorking(this,n),this}setHSL(e,t,i,n=it.workingColorSpace){if(e=iu(e,1),t=Qe(t,0,1),i=Qe(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=0.5?i*(1+t):i+t-i*t,s=2*i-r;this.r=uc(s,r,e+0.3333333333333333),this.g=uc(s,r,e),this.b=uc(s,r,e-0.3333333333333333)}return it.colorSpaceToWorking(this,n),this}setStyle(e,t=Tt){function i(r){if(r===void 0)return;if(parseFloat(r)<1)ge("Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,s=n[1],o=n[2];switch(s){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:ge("Color: Unknown color model "+e)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=n[1],s=r.length;if(s===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);else if(s===6)return this.setHex(parseInt(r,16),t);else ge("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Tt){let i=pu[e.toLowerCase()];if(i!==void 0)this.setHex(i,t);else ge("Color: Unknown color "+e);return this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=mn(e.r),this.g=mn(e.g),this.b=mn(e.b),this}copyLinearToSRGB(e){return this.r=Er(e.r),this.g=Er(e.g),this.b=Er(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Tt){return it.workingToColorSpace(Li.copy(this),e),Math.round(Qe(Li.r*255,0,255))*65536+Math.round(Qe(Li.g*255,0,255))*256+Math.round(Qe(Li.b*255,0,255))}getHexString(e=Tt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=it.workingColorSpace){it.workingToColorSpace(Li.copy(this),t);let{r:i,g:n,b:r}=Li,s=Math.max(i,n,r),o=Math.min(i,n,r),a,l,c=(o+s)/2;if(o===s)a=0,l=0;else{let h=s-o;switch(l=c<=0.5?h/(s+o):h/(2-s-o),s){case i:a=(n-r)/h+(n<r?6:0);break;case n:a=(r-i)/h+2;break;case r:a=(i-n)/h+4;break}a/=6}return e.h=a,e.s=l,e.l=c,e}getRGB(e,t=it.workingColorSpace){return it.workingToColorSpace(Li.copy(this),t),e.r=Li.r,e.g=Li.g,e.b=Li.b,e}getStyle(e=Tt){it.workingToColorSpace(Li.copy(this),e);let{r:t,g:i,b:n}=Li;if(e!==Tt)return`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`;return`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(e,t,i){return this.getHSL($n),this.setHSL($n.h+e,$n.s+t,$n.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL($n),e.getHSL(Ja);let i=Xa($n.h,Ja.h,t),n=Xa($n.s,Ja.s,t),r=Xa($n.l,Ja.l,t);return this.setHSL(i,n,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,n=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*n,this.g=r[1]*t+r[4]*i+r[7]*n,this.b=r[2]*t+r[5]*i+r[8]*n,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}var Li=new xe;xe.NAMES=pu;class Ar extends lt{constructor(){super();if(this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Pi,this.environmentIntensity=1,this.environmentRotation=new Pi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);if(this.fog!==null)t.object.fog=this.fog.toJSON();return t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}var xn=new C,Fn=new C,fc=new C,Bn=new C,ps=new C,ms=new C,mu=new C,dc=new C,pc=new C,mc=new C,gc=new Mt,xc=new Mt,_c=new Mt;class zi{constructor(e=new C,t=new C,i=new C){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,n){n.subVectors(i,t),xn.subVectors(e,t),n.cross(xn);let r=n.lengthSq();if(r>0)return n.multiplyScalar(1/Math.sqrt(r));return n.set(0,0,0)}static getBarycoord(e,t,i,n,r){xn.subVectors(n,t),Fn.subVectors(i,t),fc.subVectors(e,t);let s=xn.dot(xn),o=xn.dot(Fn),a=xn.dot(fc),l=Fn.dot(Fn),c=Fn.dot(fc),h=s*l-o*o;if(h===0)return r.set(0,0,0),null;let f=1/h,u=(l*a-o*c)*f,m=(s*c-o*a)*f;return r.set(1-u-m,m,u)}static containsPoint(e,t,i,n){if(this.getBarycoord(e,t,i,n,Bn)===null)return!1;return Bn.x>=0&&Bn.y>=0&&Bn.x+Bn.y<=1}static getInterpolation(e,t,i,n,r,s,o,a){if(this.getBarycoord(e,t,i,n,Bn)===null){if(a.x=0,a.y=0,"z"in a)a.z=0;if("w"in a)a.w=0;return null}return a.setScalar(0),a.addScaledVector(r,Bn.x),a.addScaledVector(s,Bn.y),a.addScaledVector(o,Bn.z),a}static getInterpolatedAttribute(e,t,i,n,r,s){return gc.setScalar(0),xc.setScalar(0),_c.setScalar(0),gc.fromBufferAttribute(e,t),xc.fromBufferAttribute(e,i),_c.fromBufferAttribute(e,n),s.setScalar(0),s.addScaledVector(gc,r.x),s.addScaledVector(xc,r.y),s.addScaledVector(_c,r.z),s}static isFrontFacing(e,t,i,n){return xn.subVectors(i,t),Fn.subVectors(e,t),xn.cross(Fn).dot(n)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,n){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[n]),this}setFromAttributeAndIndices(e,t,i,n){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return xn.subVectors(this.c,this.b),Fn.subVectors(this.a,this.b),xn.cross(Fn).length()*0.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(0.3333333333333333)}getNormal(e){return zi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return zi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,n,r){return zi.getInterpolation(e,this.a,this.b,this.c,t,i,n,r)}containsPoint(e){return zi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return zi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,n=this.b,r=this.c,s,o;ps.subVectors(n,i),ms.subVectors(r,i),dc.subVectors(e,i);let a=ps.dot(dc),l=ms.dot(dc);if(a<=0&&l<=0)return t.copy(i);pc.subVectors(e,n);let c=ps.dot(pc),h=ms.dot(pc);if(c>=0&&h<=c)return t.copy(n);let f=a*h-c*l;if(f<=0&&a>=0&&c<=0&&a-c>0)return s=a/(a-c),t.copy(i).addScaledVector(ps,s);mc.subVectors(e,r);let u=ps.dot(mc),m=ms.dot(mc);if(m>=0&&u<=m)return t.copy(r);let g=u*l-a*m;if(g<=0&&l>=0&&m<=0)return o=l/(l-m),t.copy(i).addScaledVector(ms,o);let _=c*m-u*h;if(_<=0&&h-c>=0&&u-m>=0)return mu.subVectors(r,n),o=(h-c)/(h-c+(u-m)),t.copy(n).addScaledVector(mu,o);let p=1/(_+g+f);return s=g*p,o=f*p,t.copy(i).addScaledVector(ps,s).addScaledVector(ms,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Di{constructor(e=new C(1/0,1/0,1/0),t=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(_n.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(_n.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=_n.copy(t).multiplyScalar(0.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(0.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let s=0,o=r.count;s<o;s++){if(e.isMesh===!0)e.getVertexPosition(s,_n);else _n.fromBufferAttribute(r,s);_n.applyMatrix4(e.matrixWorld),this.expandByPoint(_n)}else{if(e.boundingBox!==void 0){if(e.boundingBox===null)e.computeBoundingBox();Ka.copy(e.boundingBox)}else{if(i.boundingBox===null)i.computeBoundingBox();Ka.copy(i.boundingBox)}Ka.applyMatrix4(e.matrixWorld),this.union(Ka)}}let n=e.children;for(let r=0,s=n.length;r<s;r++)this.expandByObject(n[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,_n),_n.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;if(e.normal.x>0)t=e.normal.x*this.min.x,i=e.normal.x*this.max.x;else t=e.normal.x*this.max.x,i=e.normal.x*this.min.x;if(e.normal.y>0)t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y;else t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y;if(e.normal.z>0)t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z;else t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z;return t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Oo),$a.subVectors(this.max,Oo),gs.subVectors(e.a,Oo),xs.subVectors(e.b,Oo),_s.subVectors(e.c,Oo),Qn.subVectors(xs,gs),jn.subVectors(_s,xs),Rr.subVectors(gs,_s);let t=[0,-Qn.z,Qn.y,0,-jn.z,jn.y,0,-Rr.z,Rr.y,Qn.z,0,-Qn.x,jn.z,0,-jn.x,Rr.z,0,-Rr.x,-Qn.y,Qn.x,0,-jn.y,jn.x,0,-Rr.y,Rr.x,0];if(!yc(t,gs,xs,_s,$a))return!1;if(t=[1,0,0,0,1,0,0,0,1],!yc(t,gs,xs,_s,$a))return!1;return Qa.crossVectors(Qn,jn),t=[Qa.x,Qa.y,Qa.z],yc(t,gs,xs,_s,$a)}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,_n).distanceTo(e)}getBoundingSphere(e){if(this.isEmpty())e.makeEmpty();else this.getCenter(e.center),e.radius=this.getSize(_n).length()*0.5;return e}intersect(e){if(this.min.max(e.min),this.max.min(e.max),this.isEmpty())this.makeEmpty();return this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){if(this.isEmpty())return this;return On[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),On[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),On[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),On[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),On[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),On[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),On[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),On[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(On),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}var On=[new C,new C,new C,new C,new C,new C,new C,new C],_n=new C,Ka=new Di,gs=new C,xs=new C,_s=new C,Qn=new C,jn=new C,Rr=new C,Oo=new C,$a=new C,Qa=new C,Cr=new C;function yc(e,t,i,n,r){for(let s=0,o=e.length-3;s<=o;s+=3){Cr.fromArray(e,s);let a=r.x*Math.abs(Cr.x)+r.y*Math.abs(Cr.y)+r.z*Math.abs(Cr.z),l=t.dot(Cr),c=i.dot(Cr),h=n.dot(Cr);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var jt=new C,ja=new Z,b0=0;class Xt extends si{constructor(e,t,i=!1){super();if(Array.isArray(e))throw TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:b0++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Wa,this.updateRanges=[],this.gpuType=Kt,this.version=0,this._normalizationScale=e!==void 0?Uo(e):void 0}onUploadCallback(){}set needsUpdate(e){if(e===!0)this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let n=0,r=this.itemSize;n<r;n++)this.array[e+n]=t.array[i+n];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)ja.fromBufferAttribute(this,t),ja.applyMatrix3(e),this.setXY(t,ja.x,ja.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)jt.fromBufferAttribute(this,t),jt.applyMatrix3(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)jt.fromBufferAttribute(this,t),jt.applyMatrix4(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)jt.fromBufferAttribute(this,t),jt.applyNormalMatrix(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)jt.fromBufferAttribute(this,t),jt.transformDirection(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];if(this.normalized)i=this._denormalize(i);return i}setComponent(e,t,i){if(this.normalized)i=this._normalize(i);return this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];if(this.normalized)t=this._denormalize(t);return t}setX(e,t){if(this.normalized)t=this._normalize(t);return this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];if(this.normalized)t=this._denormalize(t);return t}setY(e,t){if(this.normalized)t=this._normalize(t);return this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];if(this.normalized)t=this._denormalize(t);return t}setZ(e,t){if(this.normalized)t=this._normalize(t);return this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];if(this.normalized)t=this._denormalize(t);return t}setW(e,t){if(this.normalized)t=this._normalize(t);return this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){if(e*=this.itemSize,this.normalized)t=this._normalize(t),i=this._normalize(i);return this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,n){if(e*=this.itemSize,this.normalized)t=this._normalize(t),i=this._normalize(i),n=this._normalize(n);return this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this}setXYZW(e,t,i,n,r){if(e*=this.itemSize,this.normalized)t=this._normalize(t),i=this._normalize(i),n=this._normalize(n),r=this._normalize(r);return this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):rc(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):sc(e,this.array)}}class zo extends Xt{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Go extends Xt{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Ae extends Xt{constructor(e,t,i){super(new Float32Array(e),t,i)}}var E0=new Di,Ho=new C,vc=new C;class Si{constructor(e=new C,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;if(t!==void 0)i.copy(t);else E0.setFromPoints(e).getCenter(i);let n=0;for(let r=0,s=e.length;r<s;r++)n=Math.max(n,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(n),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);if(t.copy(e),i>this.radius*this.radius)t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center);return t}getBoundingBox(e){if(this.isEmpty())return e.makeEmpty(),e;return e.set(this.center,this.center),e.expandByScalar(this.radius),e}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ho.subVectors(e,this.center);let t=Ho.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),n=(i-this.radius)*0.5;this.center.addScaledVector(Ho,n/i),this.radius+=n}return this}union(e){if(e.isEmpty())return this;if(this.isEmpty())return this.copy(e),this;if(this.center.equals(e.center)===!0)this.radius=Math.max(this.radius,e.radius);else vc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ho.copy(e.center).add(vc)),this.expandByPoint(Ho.copy(e.center).sub(vc));return this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}var T0=0,an=new Je,Mc=new lt,ys=new C,$i=new Di,ko=new Di,_i=new C;class Ve extends si{constructor(){super();this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:T0++}),this.uuid=Ii(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){if(Array.isArray(e))this.index=new((Qh(e))?Go:zo)(e,1);else this.index=e;return this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;if(t!==void 0)t.applyMatrix4(e),t.needsUpdate=!0;let i=this.attributes.normal;if(i!==void 0){let r=new qe().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let n=this.attributes.tangent;if(n!==void 0)n.transformDirection(e),n.needsUpdate=!0;if(this.boundingBox!==null)this.computeBoundingBox();if(this.boundingSphere!==null)this.computeBoundingSphere();return this._transformed=!0,this}applyQuaternion(e){return an.makeRotationFromQuaternion(e),this.applyMatrix4(an),this}rotateX(e){return an.makeRotationX(e),this.applyMatrix4(an),this}rotateY(e){return an.makeRotationY(e),this.applyMatrix4(an),this}rotateZ(e){return an.makeRotationZ(e),this.applyMatrix4(an),this}translate(e,t,i){return an.makeTranslation(e,t,i),this.applyMatrix4(an),this}scale(e,t,i){return an.makeScale(e,t,i),this.applyMatrix4(an),this}lookAt(e){return Mc.lookAt(e),Mc.updateMatrix(),this.applyMatrix4(Mc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ys).negate(),this.translate(ys.x,ys.y,ys.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let n=0,r=e.length;n<r;n++){let s=e[n];i.push(s.x,s.y,s.z||0)}this.setAttribute("position",new Ae(i,3))}else{let i=Math.min(e.length,t.count);for(let n=0;n<i;n++){let r=e[n];t.setXYZ(n,r.x,r.y,r.z||0)}if(e.length>t.count)ge("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.");t.needsUpdate=!0}return this}computeBoundingBox(){if(this.boundingBox===null)this.boundingBox=new Di;let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Fe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,n=t.length;i<n;i++){let r=t[i];if($i.setFromBufferAttribute(r),this.morphTargetsRelative)_i.addVectors(this.boundingBox.min,$i.min),this.boundingBox.expandByPoint(_i),_i.addVectors(this.boundingBox.max,$i.max),this.boundingBox.expandByPoint(_i);else this.boundingBox.expandByPoint($i.min),this.boundingBox.expandByPoint($i.max)}}else this.boundingBox.makeEmpty();if(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))Fe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){if(this.boundingSphere===null)this.boundingSphere=new Si;let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Fe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new C,1/0);return}if(e){let i=this.boundingSphere.center;if($i.setFromBufferAttribute(e),t)for(let r=0,s=t.length;r<s;r++){let o=t[r];if(ko.setFromBufferAttribute(o),this.morphTargetsRelative)_i.addVectors($i.min,ko.min),$i.expandByPoint(_i),_i.addVectors($i.max,ko.max),$i.expandByPoint(_i);else $i.expandByPoint(ko.min),$i.expandByPoint(ko.max)}$i.getCenter(i);let n=0;for(let r=0,s=e.count;r<s;r++)_i.fromBufferAttribute(e,r),n=Math.max(n,i.distanceToSquared(_i));if(t)for(let r=0,s=t.length;r<s;r++){let o=t[r],a=this.morphTargetsRelative;for(let l=0,c=o.count;l<c;l++){if(_i.fromBufferAttribute(o,l),a)ys.fromBufferAttribute(e,l),_i.add(ys);n=Math.max(n,i.distanceToSquared(_i))}}if(this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius))Fe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Fe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let{position:i,normal:n,uv:r}=t,s=this.getAttribute("tangent");if(s===void 0||s.count!==i.count)s=new Xt(new Float32Array(4*i.count),4),this.setAttribute("tangent",s);let o=[],a=[],l=new Uint8Array(i.count);for(let y=0;y<i.count;y++)o[y]=new C,a[y]=new C;let c=new C,h=new C,f=new C,u=new Z,m=new Z,g=new Z,_=new C,p=new C;function d(y,A,U){l[y]=l[A]=l[U]=1,c.fromBufferAttribute(i,y),h.fromBufferAttribute(i,A),f.fromBufferAttribute(i,U),u.fromBufferAttribute(r,y),m.fromBufferAttribute(r,A),g.fromBufferAttribute(r,U),h.sub(c),f.sub(c),m.sub(u),g.sub(u);let P=1/(m.x*g.y-g.x*m.y);if(!isFinite(P))return;_.copy(h).multiplyScalar(g.y).addScaledVector(f,-m.y).multiplyScalar(P),p.copy(f).multiplyScalar(m.x).addScaledVector(h,-g.x).multiplyScalar(P),o[y].add(_),o[A].add(_),o[U].add(_),a[y].add(p),a[A].add(p),a[U].add(p)}let v=this.groups;if(v.length===0)v=[{start:0,count:e.count}];for(let y=0,A=v.length;y<A;++y){let U=v[y],{start:P,count:O}=U;for(let ee=P,I=P+O;ee<I;ee+=3)d(e.getX(ee+0),e.getX(ee+1),e.getX(ee+2))}let M=new C,S=new C,T=new C,w=new C;function x(y){T.fromBufferAttribute(n,y),w.copy(T);let A=o[y];M.copy(A),M.sub(T.multiplyScalar(T.dot(A))).normalize(),S.crossVectors(w,A);let P=S.dot(a[y])<0?-1:1;s.setXYZW(y,M.x,M.y,M.z,P)}for(let y=0,A=i.count;y<A;++y)if(l[y])x(y);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new Xt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,u=i.count;f<u;f++)i.setXYZ(f,0,0,0);let n=new C,r=new C,s=new C,o=new C,a=new C,l=new C,c=new C,h=new C;if(e)for(let f=0,u=e.count;f<u;f+=3){let m=e.getX(f+0),g=e.getX(f+1),_=e.getX(f+2);n.fromBufferAttribute(t,m),r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),c.subVectors(s,r),h.subVectors(n,r),c.cross(h),o.fromBufferAttribute(i,m),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),o.add(c),a.add(c),l.add(c),i.setXYZ(m,o.x,o.y,o.z),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z)}else for(let f=0,u=t.count;f<u;f+=3)n.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),s.fromBufferAttribute(t,f+2),c.subVectors(s,r),h.subVectors(n,r),c.cross(h),i.setXYZ(f+0,c.x,c.y,c.z),i.setXYZ(f+1,c.x,c.y,c.z),i.setXYZ(f+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)_i.fromBufferAttribute(e,t),_i.normalize(),e.setXYZ(t,_i.x,_i.y,_i.z)}toNonIndexed(){function e(o,a){let{array:l,itemSize:c,normalized:h}=o,f=new l.constructor(a.length*c),u=0,m=0;for(let g=0,_=a.length;g<_;g++){if(o.isInterleavedBufferAttribute)u=a[g]*o.data.stride+o.offset;else u=a[g]*c;for(let p=0;p<c;p++)f[m++]=l[u++]}return new Xt(f,c,h)}if(this.index===null)return ge("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new Ve,i=this.index.array,n=this.attributes;for(let o in n){let a=n[o],l=e(a,i);t.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let a=[],l=r[o];for(let c=0,h=l.length;c<h;c++){let f=l[c],u=e(f,i);a.push(u)}t.morphAttributes[o]=a}t.morphTargetsRelative=this.morphTargetsRelative;let s=this.groups;for(let o=0,a=s.length;o<a;o++){let l=s[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0)e.userData=this.userData;if(this.parameters!==void 0&&this._transformed!==!0){let a=this.parameters;for(let l in a)if(a[l]!==void 0)e[l]=a[l];return e}e.data={attributes:{}};let t=this.index;if(t!==null)e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)};let i=this.attributes;for(let a in i){let l=i[a];e.data.attributes[a]=l.toJSON(e.data)}let n={},r=!1;for(let a in this.morphAttributes){let l=this.morphAttributes[a],c=[];for(let h=0,f=l.length;h<f;h++){let u=l[h];c.push(u.toJSON(e.data))}if(c.length>0)n[a]=c,r=!0}if(r)e.data.morphAttributes=n,e.data.morphTargetsRelative=this.morphTargetsRelative;let s=this.groups;if(s.length>0)e.data.groups=JSON.parse(JSON.stringify(s));let o=this.boundingSphere;if(o!==null)e.data.boundingSphere=o.toJSON();return e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;if(i!==null)this.setIndex(i.clone());let n=e.attributes;for(let l in n){let c=n[l];this.setAttribute(l,c.clone(t))}let r=e.morphAttributes;for(let l in r){let c=[],h=r[l];for(let f=0,u=h.length;f<u;f++)c.push(h[f].clone(t));this.morphAttributes[l]=c}this.morphTargetsRelative=e.morphTargetsRelative;let s=e.groups;for(let l=0,c=s.length;l<c;l++){let h=s[l];this.addGroup(h.start,h.count,h.materialIndex)}let o=e.boundingBox;if(o!==null)this.boundingBox=o.clone();let a=e.boundingSphere;if(a!==null)this.boundingSphere=a.clone();return this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}var Sc=new C,w0=new C,A0=new qe;class Qi{constructor(e=new C(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,n){return this.normal.set(e,t,i),this.constant=n,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let n=Sc.subVectors(i,t).cross(w0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(n,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let n=e.delta(Sc),r=this.normal.dot(n);if(r===0){if(this.distanceToPoint(e.start)===0)return t.copy(e.start);return null}let s=-(e.start.dot(this.normal)+this.constant)/r;if(i===!0&&(s<0||s>1))return null;return t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||A0.getNormalMatrix(e),n=this.coplanarPoint(Sc).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}var R0=0;class Ht extends si{constructor(){super();this.isMaterial=!0,Object.defineProperty(this,"id",{value:R0++}),this.uuid=Ii(),this.name="",this.type="Material",this.blending=qn,this.side=nn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=va,this.blendDst=Ma,this.blendEquation=Yn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new xe(0,0,0),this.blendAlpha=0,this.depthFunc=Zn,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Xh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ga,this.stencilZFail=Ga,this.stencilZPass=Ga,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){if(this._alphaTest>0!==e>0)this.version++;this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e===void 0)return;for(let t in e){let i=e[t];if(i===void 0){ge(`Material: parameter '${t}' has value of undefined.`);continue}let n=this[t];if(n===void 0){ge(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}if(n&&n.isColor)n.set(i);else if(n&&n.isVector2&&(i&&i.isVector2)||n&&n.isEuler&&(i&&i.isEuler)||n&&n.isVector3&&(i&&i.isVector3))n.copy(i);else this[t]=i}}toJSON(e){let t=e===void 0||typeof e==="string";if(t)e={textures:{},images:{}};let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};if(i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor)i.color=this.color.getHex();if(this.roughness!==void 0)i.roughness=this.roughness;if(this.metalness!==void 0)i.metalness=this.metalness;if(this.sheen!==void 0)i.sheen=this.sheen;if(this.sheenColor&&this.sheenColor.isColor)i.sheenColor=this.sheenColor.getHex();if(this.sheenRoughness!==void 0)i.sheenRoughness=this.sheenRoughness;if(this.emissive&&this.emissive.isColor)i.emissive=this.emissive.getHex();if(this.emissiveIntensity!==void 0)i.emissiveIntensity=this.emissiveIntensity;if(this.specular&&this.specular.isColor)i.specular=this.specular.getHex();if(this.specularIntensity!==void 0)i.specularIntensity=this.specularIntensity;if(this.specularColor&&this.specularColor.isColor)i.specularColor=this.specularColor.getHex();if(this.shininess!==void 0)i.shininess=this.shininess;if(this.clearcoat!==void 0)i.clearcoat=this.clearcoat;if(this.clearcoatRoughness!==void 0)i.clearcoatRoughness=this.clearcoatRoughness;if(this.diffuseRoughness!==void 0)i.diffuseRoughness=this.diffuseRoughness;if(this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture)i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid;if(this.clearcoatMap&&this.clearcoatMap.isTexture)i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid;if(this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture)i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid;if(this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture)i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray();if(this.sheenColorMap&&this.sheenColorMap.isTexture)i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid;if(this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture)i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid;if(this.dispersion!==void 0)i.dispersion=this.dispersion;if(this.retroreflectivity!==void 0)i.retroreflectivity=this.retroreflectivity;if(this.iridescence!==void 0)i.iridescence=this.iridescence;if(this.iridescenceIOR!==void 0)i.iridescenceIOR=this.iridescenceIOR;if(this.iridescenceThicknessMinimum!==void 0)i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum;if(this.iridescenceThicknessMaximum!==void 0)i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum;if(this.iridescenceMap&&this.iridescenceMap.isTexture)i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid;if(this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture)i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid;if(this.anisotropy!==void 0)i.anisotropy=this.anisotropy;if(this.anisotropyRotation!==void 0)i.anisotropyRotation=this.anisotropyRotation;if(this.anisotropyMap&&this.anisotropyMap.isTexture)i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid;if(this.map&&this.map.isTexture)i.map=this.map.toJSON(e).uuid;if(this.matcap&&this.matcap.isTexture)i.matcap=this.matcap.toJSON(e).uuid;if(this.alphaMap&&this.alphaMap.isTexture)i.alphaMap=this.alphaMap.toJSON(e).uuid;if(this.lightMap&&this.lightMap.isTexture)i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity;if(this.aoMap&&this.aoMap.isTexture)i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity;if(this.bumpMap&&this.bumpMap.isTexture)i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale;if(this.normalMap&&this.normalMap.isTexture)i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray();if(this.displacementMap&&this.displacementMap.isTexture)i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias;if(this.roughnessMap&&this.roughnessMap.isTexture)i.roughnessMap=this.roughnessMap.toJSON(e).uuid;if(this.metalnessMap&&this.metalnessMap.isTexture)i.metalnessMap=this.metalnessMap.toJSON(e).uuid;if(this.emissiveMap&&this.emissiveMap.isTexture)i.emissiveMap=this.emissiveMap.toJSON(e).uuid;if(this.specularMap&&this.specularMap.isTexture)i.specularMap=this.specularMap.toJSON(e).uuid;if(this.specularIntensityMap&&this.specularIntensityMap.isTexture)i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid;if(this.specularColorMap&&this.specularColorMap.isTexture)i.specularColorMap=this.specularColorMap.toJSON(e).uuid;if(this.envMap&&this.envMap.isTexture){if(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0)i.combine=this.combine}if(this.envMapRotation!==void 0)i.envMapRotation=this.envMapRotation.toArray();if(this.envMapIntensity!==void 0)i.envMapIntensity=this.envMapIntensity;if(this.reflectivity!==void 0)i.reflectivity=this.reflectivity;if(this.refractionRatio!==void 0)i.refractionRatio=this.refractionRatio;if(this.gradientMap&&this.gradientMap.isTexture)i.gradientMap=this.gradientMap.toJSON(e).uuid;if(this.transmission!==void 0)i.transmission=this.transmission;if(this.transmissionMap&&this.transmissionMap.isTexture)i.transmissionMap=this.transmissionMap.toJSON(e).uuid;if(this.thickness!==void 0)i.thickness=this.thickness;if(this.thicknessMap&&this.thicknessMap.isTexture)i.thicknessMap=this.thicknessMap.toJSON(e).uuid;if(this.attenuationDistance!==void 0)i.attenuationDistance=this.attenuationDistance;if(this.attenuationColor!==void 0)i.attenuationColor=this.attenuationColor.getHex();if(this.size!==void 0)i.size=this.size;if(this.sizeAttenuation!==void 0)i.sizeAttenuation=this.sizeAttenuation;if(Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0)i.clippingPlanes=this.clippingPlanes.map((r)=>r.toJSON());if(this.rotation!==void 0)i.rotation=this.rotation;if(this.depthPacking!==void 0)i.depthPacking=this.depthPacking;if(this.linewidth!==void 0)i.linewidth=this.linewidth;if(this.linecap!==void 0)i.linecap=this.linecap;if(this.linejoin!==void 0)i.linejoin=this.linejoin;if(this.dashSize!==void 0)i.dashSize=this.dashSize;if(this.gapSize!==void 0)i.gapSize=this.gapSize;if(this.scale!==void 0)i.scale=this.scale;if(this.wireframe!==void 0)i.wireframe=this.wireframe;if(this.wireframeLinewidth!==void 0)i.wireframeLinewidth=this.wireframeLinewidth;if(this.wireframeLinecap!==void 0)i.wireframeLinecap=this.wireframeLinecap;if(this.wireframeLinejoin!==void 0)i.wireframeLinejoin=this.wireframeLinejoin;if(this.flatShading!==void 0)i.flatShading=this.flatShading;if(this.fog!==void 0)i.fog=this.fog;if(Object.keys(this.userData).length>0)i.userData=this.userData;function n(r){let s=[];for(let o in r){let a=r[o];delete a.metadata,s.push(a)}return s}if(t){let r=n(e.textures),s=n(e.images);if(r.length>0)i.textures=r;if(s.length>0)i.images=s}return i}fromJSON(e,t){if(e.uuid!==void 0)this.uuid=e.uuid;if(e.name!==void 0)this.name=e.name;if(e.color!==void 0&&this.color!==void 0)this.color.setHex(e.color);if(e.roughness!==void 0)this.roughness=e.roughness;if(e.metalness!==void 0)this.metalness=e.metalness;if(e.sheen!==void 0)this.sheen=e.sheen;if(e.sheenColor!==void 0)this.sheenColor=new xe().setHex(e.sheenColor);if(e.sheenRoughness!==void 0)this.sheenRoughness=e.sheenRoughness;if(e.emissive!==void 0&&this.emissive!==void 0)this.emissive.setHex(e.emissive);if(e.specular!==void 0&&this.specular!==void 0)this.specular.setHex(e.specular);if(e.specularIntensity!==void 0)this.specularIntensity=e.specularIntensity;if(e.specularColor!==void 0&&this.specularColor!==void 0)this.specularColor.setHex(e.specularColor);if(e.shininess!==void 0)this.shininess=e.shininess;if(e.clearcoat!==void 0)this.clearcoat=e.clearcoat;if(e.clearcoatRoughness!==void 0)this.clearcoatRoughness=e.clearcoatRoughness;if(e.diffuseRoughness!==void 0)this.diffuseRoughness=e.diffuseRoughness;if(e.dispersion!==void 0)this.dispersion=e.dispersion;if(e.retroreflectivity!==void 0)this.retroreflectivity=e.retroreflectivity;if(e.iridescence!==void 0)this.iridescence=e.iridescence;if(e.iridescenceIOR!==void 0)this.iridescenceIOR=e.iridescenceIOR;if(e.iridescenceThicknessMinimum!==void 0)this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum;if(e.iridescenceThicknessMaximum!==void 0)this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum;if(e.iridescenceThicknessRange!==void 0)this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1];if(e.transmission!==void 0)this.transmission=e.transmission;if(e.thickness!==void 0)this.thickness=e.thickness;if(e.attenuationDistance!==void 0)this.attenuationDistance=e.attenuationDistance;if(e.attenuationColor!==void 0&&this.attenuationColor!==void 0)this.attenuationColor.setHex(e.attenuationColor);if(e.anisotropy!==void 0)this.anisotropy=e.anisotropy;if(e.anisotropyRotation!==void 0)this.anisotropyRotation=e.anisotropyRotation;if(e.fog!==void 0)this.fog=e.fog;if(e.flatShading!==void 0)this.flatShading=e.flatShading;if(e.blending!==void 0)this.blending=e.blending;if(e.combine!==void 0)this.combine=e.combine;if(e.side!==void 0)this.side=e.side;if(e.shadowSide!==void 0)this.shadowSide=e.shadowSide;if(e.opacity!==void 0)this.opacity=e.opacity;if(e.transparent!==void 0)this.transparent=e.transparent;if(e.alphaTest!==void 0)this.alphaTest=e.alphaTest;if(e.alphaHash!==void 0)this.alphaHash=e.alphaHash;if(e.depthFunc!==void 0)this.depthFunc=e.depthFunc;if(e.depthTest!==void 0)this.depthTest=e.depthTest;if(e.depthWrite!==void 0)this.depthWrite=e.depthWrite;if(e.colorWrite!==void 0)this.colorWrite=e.colorWrite;if(e.clippingPlanes!==void 0)this.clippingPlanes=e.clippingPlanes.map((i)=>new Qi().fromJSON(i));if(e.clipIntersection!==void 0)this.clipIntersection=e.clipIntersection;if(e.clipShadows!==void 0)this.clipShadows=e.clipShadows;if(e.depthPacking!==void 0)this.depthPacking=e.depthPacking;if(e.blendSrc!==void 0)this.blendSrc=e.blendSrc;if(e.blendDst!==void 0)this.blendDst=e.blendDst;if(e.blendEquation!==void 0)this.blendEquation=e.blendEquation;if(e.blendSrcAlpha!==void 0)this.blendSrcAlpha=e.blendSrcAlpha;if(e.blendDstAlpha!==void 0)this.blendDstAlpha=e.blendDstAlpha;if(e.blendEquationAlpha!==void 0)this.blendEquationAlpha=e.blendEquationAlpha;if(e.blendColor!==void 0&&this.blendColor!==void 0)this.blendColor.setHex(e.blendColor);if(e.blendAlpha!==void 0)this.blendAlpha=e.blendAlpha;if(e.stencilWriteMask!==void 0)this.stencilWriteMask=e.stencilWriteMask;if(e.stencilFunc!==void 0)this.stencilFunc=e.stencilFunc;if(e.stencilRef!==void 0)this.stencilRef=e.stencilRef;if(e.stencilFuncMask!==void 0)this.stencilFuncMask=e.stencilFuncMask;if(e.stencilFail!==void 0)this.stencilFail=e.stencilFail;if(e.stencilZFail!==void 0)this.stencilZFail=e.stencilZFail;if(e.stencilZPass!==void 0)this.stencilZPass=e.stencilZPass;if(e.stencilWrite!==void 0)this.stencilWrite=e.stencilWrite;if(e.wireframe!==void 0)this.wireframe=e.wireframe;if(e.wireframeLinewidth!==void 0)this.wireframeLinewidth=e.wireframeLinewidth;if(e.wireframeLinecap!==void 0)this.wireframeLinecap=e.wireframeLinecap;if(e.wireframeLinejoin!==void 0)this.wireframeLinejoin=e.wireframeLinejoin;if(e.rotation!==void 0)this.rotation=e.rotation;if(e.linewidth!==void 0)this.linewidth=e.linewidth;if(e.linecap!==void 0)this.linecap=e.linecap;if(e.linejoin!==void 0)this.linejoin=e.linejoin;if(e.dashSize!==void 0)this.dashSize=e.dashSize;if(e.gapSize!==void 0)this.gapSize=e.gapSize;if(e.scale!==void 0)this.scale=e.scale;if(e.polygonOffset!==void 0)this.polygonOffset=e.polygonOffset;if(e.polygonOffsetFactor!==void 0)this.polygonOffsetFactor=e.polygonOffsetFactor;if(e.polygonOffsetUnits!==void 0)this.polygonOffsetUnits=e.polygonOffsetUnits;if(e.dithering!==void 0)this.dithering=e.dithering;if(e.alphaToCoverage!==void 0)this.alphaToCoverage=e.alphaToCoverage;if(e.premultipliedAlpha!==void 0)this.premultipliedAlpha=e.premultipliedAlpha;if(e.forceSinglePass!==void 0)this.forceSinglePass=e.forceSinglePass;if(e.allowOverride!==void 0)this.allowOverride=e.allowOverride;if(e.visible!==void 0)this.visible=e.visible;if(e.toneMapped!==void 0)this.toneMapped=e.toneMapped;if(e.userData!==void 0)this.userData=e.userData;if(e.vertexColors!==void 0)if(typeof e.vertexColors==="number")this.vertexColors=e.vertexColors>0;else this.vertexColors=e.vertexColors;if(e.size!==void 0)this.size=e.size;if(e.sizeAttenuation!==void 0)this.sizeAttenuation=e.sizeAttenuation;if(e.map!==void 0)this.map=t[e.map]||null;if(e.matcap!==void 0)this.matcap=t[e.matcap]||null;if(e.alphaMap!==void 0)this.alphaMap=t[e.alphaMap]||null;if(e.bumpMap!==void 0)this.bumpMap=t[e.bumpMap]||null;if(e.bumpScale!==void 0)this.bumpScale=e.bumpScale;if(e.normalMap!==void 0)this.normalMap=t[e.normalMap]||null;if(e.normalMapType!==void 0)this.normalMapType=e.normalMapType;if(e.normalScale!==void 0){let i=e.normalScale;if(Array.isArray(i)===!1)i=[i,i];this.normalScale=new Z().fromArray(i)}if(e.displacementMap!==void 0)this.displacementMap=t[e.displacementMap]||null;if(e.displacementScale!==void 0)this.displacementScale=e.displacementScale;if(e.displacementBias!==void 0)this.displacementBias=e.displacementBias;if(e.roughnessMap!==void 0)this.roughnessMap=t[e.roughnessMap]||null;if(e.metalnessMap!==void 0)this.metalnessMap=t[e.metalnessMap]||null;if(e.emissiveMap!==void 0)this.emissiveMap=t[e.emissiveMap]||null;if(e.emissiveIntensity!==void 0)this.emissiveIntensity=e.emissiveIntensity;if(e.specularMap!==void 0)this.specularMap=t[e.specularMap]||null;if(e.specularIntensityMap!==void 0)this.specularIntensityMap=t[e.specularIntensityMap]||null;if(e.specularColorMap!==void 0)this.specularColorMap=t[e.specularColorMap]||null;if(e.envMap!==void 0)this.envMap=t[e.envMap]||null;if(e.envMapRotation!==void 0)this.envMapRotation.fromArray(e.envMapRotation);if(e.envMapIntensity!==void 0)this.envMapIntensity=e.envMapIntensity;if(e.reflectivity!==void 0)this.reflectivity=e.reflectivity;if(e.refractionRatio!==void 0)this.refractionRatio=e.refractionRatio;if(e.lightMap!==void 0)this.lightMap=t[e.lightMap]||null;if(e.lightMapIntensity!==void 0)this.lightMapIntensity=e.lightMapIntensity;if(e.aoMap!==void 0)this.aoMap=t[e.aoMap]||null;if(e.aoMapIntensity!==void 0)this.aoMapIntensity=e.aoMapIntensity;if(e.gradientMap!==void 0)this.gradientMap=t[e.gradientMap]||null;if(e.clearcoatMap!==void 0)this.clearcoatMap=t[e.clearcoatMap]||null;if(e.clearcoatRoughnessMap!==void 0)this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null;if(e.clearcoatNormalMap!==void 0)this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null;if(e.clearcoatNormalScale!==void 0)this.clearcoatNormalScale=new Z().fromArray(e.clearcoatNormalScale);if(e.diffuseRoughnessMap!==void 0)this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null;if(e.iridescenceMap!==void 0)this.iridescenceMap=t[e.iridescenceMap]||null;if(e.iridescenceThicknessMap!==void 0)this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null;if(e.transmissionMap!==void 0)this.transmissionMap=t[e.transmissionMap]||null;if(e.thicknessMap!==void 0)this.thicknessMap=t[e.thicknessMap]||null;if(e.anisotropyMap!==void 0)this.anisotropyMap=t[e.anisotropyMap]||null;if(e.sheenColorMap!==void 0)this.sheenColorMap=t[e.sheenColorMap]||null;if(e.sheenRoughnessMap!==void 0)this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null;return this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let n=t.length;i=Array(n);for(let r=0;r!==n;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){if(e===!0)this.version++}}var zn=new C,Ec=new C,tl=new C,il=new C;class er{constructor(e=new C,t=new C(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,zn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);if(i<0)return t.copy(this.origin);return t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=zn.subVectors(e,this.origin).dot(this.direction);if(t<0)return this.origin.distanceToSquared(e);return zn.copy(this.origin).addScaledVector(this.direction,t),zn.distanceToSquared(e)}distanceSqToSegment(e,t,i,n){Ec.copy(e).add(t).multiplyScalar(0.5),tl.copy(t).sub(e).normalize(),il.copy(this.origin).sub(Ec);let r=e.distanceTo(t)*0.5,s=-this.direction.dot(tl),o=il.dot(this.direction),a=-il.dot(tl),l=il.lengthSq(),c=Math.abs(1-s*s),h,f,u,m;if(c>0)if(h=s*a-o,f=s*o-a,m=r*c,h>=0)if(f>=-m)if(f<=m){let g=1/c;h*=g,f*=g,u=h*(h+s*f+2*o)+f*(s*h+f+2*a)+l}else f=r,h=Math.max(0,-(s*f+o)),u=-h*h+f*(f+2*a)+l;else f=-r,h=Math.max(0,-(s*f+o)),u=-h*h+f*(f+2*a)+l;else if(f<=-m)h=Math.max(0,-(-s*r+o)),f=h>0?-r:Math.min(Math.max(-r,-a),r),u=-h*h+f*(f+2*a)+l;else if(f<=m)h=0,f=Math.min(Math.max(-r,-a),r),u=f*(f+2*a)+l;else h=Math.max(0,-(s*r+o)),f=h>0?r:Math.min(Math.max(-r,-a),r),u=-h*h+f*(f+2*a)+l;else f=s>0?-r:r,h=Math.max(0,-(s*f+o)),u=-h*h+f*(f+2*a)+l;if(i)i.copy(this.origin).addScaledVector(this.direction,h);if(n)n.copy(Ec).addScaledVector(tl,f);return u}intersectSphere(e,t){if(e.radius<0)return null;zn.subVectors(e.center,this.origin);let i=zn.dot(this.direction),n=zn.dot(zn)-i*i,r=e.radius*e.radius;if(n>r)return null;let s=Math.sqrt(r-n),o=i-s,a=i+s;if(a<0)return null;if(o<0)return this.at(a,t);return this.at(o,t)}intersectsSphere(e){if(e.radius<0)return!1;return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0){if(e.distanceToPoint(this.origin)===0)return 0;return null}let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);if(i===null)return null;return this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);if(t===0)return!0;if(e.normal.dot(this.direction)*t<0)return!0;return!1}intersectBox(e,t){let i,n,r,s,o,a,l=1/this.direction.x,c=1/this.direction.y,h=1/this.direction.z,f=this.origin;if(l>=0)i=(e.min.x-f.x)*l,n=(e.max.x-f.x)*l;else i=(e.max.x-f.x)*l,n=(e.min.x-f.x)*l;if(c>=0)r=(e.min.y-f.y)*c,s=(e.max.y-f.y)*c;else r=(e.max.y-f.y)*c,s=(e.min.y-f.y)*c;if(i>s||r>n)return null;if(r>i||isNaN(i))i=r;if(s<n||isNaN(n))n=s;if(h>=0)o=(e.min.z-f.z)*h,a=(e.max.z-f.z)*h;else o=(e.max.z-f.z)*h,a=(e.min.z-f.z)*h;if(i>a||o>n)return null;if(o>i||i!==i)i=o;if(a<n||n!==n)n=a;if(n<0)return null;return this.at(i>=0?i:n,t)}intersectsBox(e){return this.intersectBox(e,zn)!==null}intersectTriangle(e,t,i,n,r){let s=this.origin,o=this.direction,{x:a,y:l,z:c}=o,h=e.x-s.x,f=e.y-s.y,u=e.z-s.z,m=t.x-s.x,g=t.y-s.y,_=t.z-s.z,p=i.x-s.x,d=i.y-s.y,v=i.z-s.z,M=Math.abs(a),S=Math.abs(l),T=Math.abs(c),w,x,y,A,U,P,O,ee,I,X,L,N;if(M>=S&&M>=T)if(y=a,P=h,I=m,N=p,a>=0)w=l,x=c,A=f,U=u,O=g,ee=_,X=d,L=v;else w=c,x=l,A=u,U=f,O=_,ee=g,X=v,L=d;else if(S>=T)if(y=l,P=f,I=g,N=d,l>=0)w=c,x=a,A=u,U=h,O=_,ee=m,X=v,L=p;else w=a,x=c,A=h,U=u,O=m,ee=_,X=p,L=v;else if(y=c,P=u,I=_,N=v,c>=0)w=a,x=l,A=h,U=f,O=m,ee=g,X=p,L=d;else w=l,x=a,A=f,U=h,O=g,ee=m,X=d,L=p;if(y===0)return null;let Q=w/y,z=x/y,W=1/y,Y=A-Q*P,fe=U-z*P,k=O-Q*I,j=ee-z*I,ye=X-Q*N,ve=L-z*N,Be=ye*j-ve*k,Ee=Y*ve-fe*ye,ht=k*fe-j*Y;if(n){if(Be<0||Ee<0||ht<0)return null}else if((Be<0||Ee<0||ht<0)&&(Be>0||Ee>0||ht>0))return null;let De=Be+Ee+ht;if(De===0)return null;let Ne=W*(Be*P+Ee*I+ht*N);if(De>0?Ne<0:Ne>0)return null;return this.at(Ne/De,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class kt extends Ht{constructor(e){super();this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pi,this.combine=xr,this.reflectivity=1,this.refractionRatio=0.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}var xu=new Je,Ir=new er,nl=new Si,_u=new C,rl=new C,sl=new C,ol=new C,Tc=new C,al=new C,yu=new C,ll=new C;class ne extends lt{constructor(e=new Ve,t=new kt){super();this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){if(super.copy(e,t),e.morphTargetInfluences!==void 0)this.morphTargetInfluences=e.morphTargetInfluences.slice();else this.morphTargetInfluences=void 0;if(e.morphTargetDictionary!==void 0)this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary);else this.morphTargetDictionary=void 0;return this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=n.length;r<s;r++){let o=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let i=this.geometry,n=i.attributes.position,r=i.morphAttributes.position,s=i.morphTargetsRelative;t.fromBufferAttribute(n,e);let o=this.morphTargetInfluences;if(r&&o){al.set(0,0,0);for(let a=0,l=r.length;a<l;a++){let c=o[a],h=r[a];if(c===0)continue;if(Tc.fromBufferAttribute(h,e),s)al.addScaledVector(Tc,c);else al.addScaledVector(Tc.sub(t),c)}t.add(al)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,n=this.material,r=this.matrixWorld;if(n===void 0)return;if(i.boundingSphere===null)i.computeBoundingSphere();if(nl.copy(i.boundingSphere),nl.applyMatrix4(r),Ir.copy(e.ray).recast(e.near),nl.containsPoint(Ir.origin)===!1){if(Ir.intersectSphere(nl,_u)===null)return;if(Ir.origin.distanceToSquared(_u)>(e.far-e.near)**2)return}if(xu.copy(r).invert(),Ir.copy(e.ray).applyMatrix4(xu),i.boundingBox!==null){if(Ir.intersectsBox(i.boundingBox)===!1)return}this._computeIntersections(e,t,Ir)}_computeIntersections(e,t,i){let n,r=this.geometry,s=this.material,o=r.index,a=r.attributes.position,l=r.attributes.uv,c=r.attributes.uv1,h=r.attributes.normal,{groups:f,drawRange:u}=r;if(o!==null)if(Array.isArray(s))for(let m=0,g=f.length;m<g;m++){let _=f[m],p=s[_.materialIndex],d=Math.max(_.start,u.start),v=Math.min(o.count,Math.min(_.start+_.count,u.start+u.count));for(let M=d,S=v;M<S;M+=3){let T=o.getX(M),w=o.getX(M+1),x=o.getX(M+2);if(n=cl(this,p,e,i,l,c,h,T,w,x),n)n.faceIndex=Math.floor(M/3),n.face.materialIndex=_.materialIndex,t.push(n)}}else{let m=Math.max(0,u.start),g=Math.min(o.count,u.start+u.count);for(let _=m,p=g;_<p;_+=3){let d=o.getX(_),v=o.getX(_+1),M=o.getX(_+2);if(n=cl(this,s,e,i,l,c,h,d,v,M),n)n.faceIndex=Math.floor(_/3),t.push(n)}}else if(a!==void 0)if(Array.isArray(s))for(let m=0,g=f.length;m<g;m++){let _=f[m],p=s[_.materialIndex],d=Math.max(_.start,u.start),v=Math.min(a.count,Math.min(_.start+_.count,u.start+u.count));for(let M=d,S=v;M<S;M+=3){let T=M,w=M+1,x=M+2;if(n=cl(this,p,e,i,l,c,h,T,w,x),n)n.faceIndex=Math.floor(M/3),n.face.materialIndex=_.materialIndex,t.push(n)}}else{let m=Math.max(0,u.start),g=Math.min(a.count,u.start+u.count);for(let _=m,p=g;_<p;_+=3){let d=_,v=_+1,M=_+2;if(n=cl(this,s,e,i,l,c,h,d,v,M),n)n.faceIndex=Math.floor(_/3),t.push(n)}}}}function C0(e,t,i,n,r,s,o,a){let l;if(t.side===Lt)l=n.intersectTriangle(o,s,r,!0,a);else l=n.intersectTriangle(r,s,o,t.side===nn,a);if(l===null)return null;ll.copy(a),ll.applyMatrix4(e.matrixWorld);let c=i.ray.origin.distanceTo(ll);if(c<i.near||c>i.far)return null;return{distance:c,point:ll.clone(),object:e}}function cl(e,t,i,n,r,s,o,a,l,c){e.getVertexPosition(a,rl),e.getVertexPosition(l,sl),e.getVertexPosition(c,ol);let h=C0(e,t,i,n,rl,sl,ol,yu);if(h){let f=new C;if(zi.getBarycoord(yu,rl,sl,ol,f),r)h.uv=zi.getInterpolatedAttribute(r,a,l,c,f,new Z);if(s)h.uv1=zi.getInterpolatedAttribute(s,a,l,c,f,new Z);if(o){if(h.normal=zi.getInterpolatedAttribute(o,a,l,c,f,new C),h.normal.dot(n.direction)>0)h.normal.multiplyScalar(-1)}let u={a,b:l,c,normal:new C,materialIndex:0};zi.getNormal(rl,sl,ol,u.normal),h.face=u,h.barycoord=f}return h}class Tn extends vt{constructor(e=null,t=1,i=1,n,r,s,o,a,l=Ut,c=Ut,h,f){super(null,s,o,a,l,c,n,r,h,f);this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class tr extends Xt{constructor(e,t,i,n=1){super(e,t,i);this.isInstancedBufferAttribute=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}var vs=new Je,Mu=new Je,hl=[],Su=new Di,I0=new Je,Vo=new ne,Wo=new Si;class yn extends ne{constructor(e,t,i){super(e,t);this.isInstancedMesh=!0,this.instanceMatrix=new tr(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let n=0;n<i;n++)this.setMatrixAt(n,I0)}computeBoundingBox(){let e=this.geometry,t=this.count;if(this.boundingBox===null)this.boundingBox=new Di;if(e.boundingBox===null)e.computeBoundingBox();this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,vs),Su.copy(e.boundingBox).applyMatrix4(vs),this.boundingBox.union(Su)}computeBoundingSphere(){let e=this.geometry,t=this.count;if(this.boundingSphere===null)this.boundingSphere=new Si;if(e.boundingSphere===null)e.computeBoundingSphere();this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,vs),Wo.copy(e.boundingSphere).applyMatrix4(vs),this.boundingSphere.union(Wo)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){if(this.instanceColor===null)return t.setRGB(1,1,1);else return t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,n=this.morphTexture.source.data.data,r=i.length+1,s=e*r+1;for(let o=0;o<i.length;o++)i[o]=n[s+o]}raycast(e,t){let i=this.matrixWorld,n=this.count;if(Vo.geometry=this.geometry,Vo.material=this.material,Vo.material===void 0)return;if(this.boundingSphere===null)this.computeBoundingSphere();if(Wo.copy(this.boundingSphere),Wo.applyMatrix4(i),e.ray.intersectsSphere(Wo)===!1)return;for(let r=0;r<n;r++){this.getMatrixAt(r,vs),Mu.multiplyMatrices(i,vs),Vo.matrixWorld=Mu,Vo.raycast(e,hl);for(let s=0,o=hl.length;s<o;s++){let a=hl[s];a.instanceId=r,a.object=this,t.push(a)}hl.length=0}}setColorAt(e,t){if(this.instanceColor===null)this.instanceColor=new tr(new Float32Array(this.instanceMatrix.count*3).fill(1),3);return t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let i=t.morphTargetInfluences,n=i.length+1;if(this.morphTexture===null)this.morphTexture=new Tn(new Float32Array(n*this.count),n,this.count,Qr,Kt);let r=this.morphTexture.source.data.data,s=0;for(let l=0;l<i.length;l++)s+=i[l];let o=this.geometry.morphTargetsRelative?1:1-s,a=n*e;return r[a]=o,r.set(i,a+1),this}updateMorphTargets(){}dispose(){if(super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null)this.instanceColor.dispose();if(this.morphTexture!==null)this.morphTexture.dispose(),this.morphTexture=null}}var Pr=new Si,P0=new Z(0.5,0.5),ul=new C;class ln{constructor(e=new Qi,t=new Qi,i=new Qi,n=new Qi,r=new Qi,s=new Qi){this.planes=[e,t,i,n,r,s]}set(e,t,i,n,r,s){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(n),o[4].copy(r),o[5].copy(s),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=xi,i=!1){let n=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],h=r[5],f=r[6],u=r[7],m=r[8],g=r[9],_=r[10],p=r[11],d=r[12],v=r[13],M=r[14],S=r[15];if(n[0].setComponents(l-s,u-c,p-m,S-d).normalize(),n[1].setComponents(l+s,u+c,p+m,S+d).normalize(),n[2].setComponents(l+o,u+h,p+g,S+v).normalize(),n[3].setComponents(l-o,u-h,p-g,S-v).normalize(),i)n[4].setComponents(a,f,_,M).normalize(),n[5].setComponents(l-a,u-f,p-_,S-M).normalize();else if(n[4].setComponents(l-a,u-f,p-_,S-M).normalize(),t===xi)n[5].setComponents(l+a,u+f,p+_,S+M).normalize();else if(t===bn)n[5].setComponents(a,f,_,M).normalize();else throw Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0){if(e.boundingSphere===null)e.computeBoundingSphere();Pr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld)}else{let t=e.geometry;if(t.boundingSphere===null)t.computeBoundingSphere();Pr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Pr)}intersectsSprite(e){Pr.center.set(0,0,0);let t=P0.distanceTo(e.center);return Pr.radius=0.7071067811865476+t,Pr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Pr)}intersectsSphere(e){let t=this.planes,i=e.center,n=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<n)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let n=t[i];if(ul.x=n.normal.x>0?e.max.x:e.min.x,ul.y=n.normal.y>0?e.max.y:e.min.y,ul.z=n.normal.z>0?e.max.z:e.min.z,n.distanceToPoint(ul)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}var bu=new Je;class Ms{constructor(){this.coordinateSystem=xi,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,i=this._frustums;for(let n=0;n<t.length;n++){let r=t[n];if(bu.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),i[n]===void 0)i[n]=new ln;i[n].setFromProjectionMatrix(bu,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,i=e._frustums;for(let n=0;n<e._count;n++){if(t[n]===void 0)t[n]=new ln;t[n].copy(i[n])}return this._count=e._count,this}clone(){return new Ms().copy(this)}}class ir extends vt{constructor(e=[],t=rn,i,n,r,s,o,a,l,c){super(e,t,i,n,r,s,o,a,l,c);this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Vi extends vt{constructor(e,t,i,n,r,s,o,a,l){super(e,t,i,n,r,s,o,a,l);this.isCanvasTexture=!0,this.needsUpdate=!0}}class ji extends vt{constructor(e,t,i=ri,n,r,s,o=Ut,a=Ut,l,c=Hi,h=1){if(c!==Hi&&c!==Zi)throw Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:e,height:t,depth:h};super(f,n,r,s,o,a,c,i,l);this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new En(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class bs extends ji{constructor(e,t=ri,i=rn,n,r,s=Ut,o=Ut,a,l=Hi){let c={width:e,height:e,depth:1},h=[c,c,c,c,c,c];super(e,e,t,i,n,r,s,o,a,l);this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Es extends vt{constructor(e=null){super();this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Ft extends Ve{constructor(e=1,t=1,i=1,n=1,r=1,s=1){super();this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:n,heightSegments:r,depthSegments:s};let o=this;n=Math.floor(n),r=Math.floor(r),s=Math.floor(s);let a=[],l=[],c=[],h=[],f=0,u=0;m("z","y","x",-1,-1,i,t,e,s,r,0),m("z","y","x",1,-1,i,t,-e,s,r,1),m("x","z","y",1,1,e,i,t,n,s,2),m("x","z","y",1,-1,e,i,-t,n,s,3),m("x","y","z",1,-1,e,t,i,n,r,4),m("x","y","z",-1,-1,e,t,-i,n,r,5),this.setIndex(a),this.setAttribute("position",new Ae(l,3)),this.setAttribute("normal",new Ae(c,3)),this.setAttribute("uv",new Ae(h,2));function m(g,_,p,d,v,M,S,T,w,x,y){let A=M/w,U=S/x,P=M/2,O=S/2,ee=T/2,I=w+1,X=x+1,L=0,N=0,Q=new C;for(let z=0;z<X;z++){let W=z*U-O;for(let Y=0;Y<I;Y++){let fe=Y*A-P;Q[g]=fe*d,Q[_]=W*v,Q[p]=ee,l.push(Q.x,Q.y,Q.z),Q[g]=0,Q[_]=0,Q[p]=T>0?1:-1,c.push(Q.x,Q.y,Q.z),h.push(Y/w),h.push(1-z/x),L+=1}}for(let z=0;z<x;z++)for(let W=0;W<w;W++){let Y=f+W+I*z,fe=f+W+I*(z+1),k=f+(W+1)+I*(z+1),j=f+(W+1)+I*z;a.push(Y,fe,j),a.push(fe,k,j),N+=6}o.addGroup(u,N,y),u+=N,f+=L}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ft(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class fl extends Ve{constructor(e=1,t=1,i=4,n=8,r=1){super();this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:i,radialSegments:n,heightSegments:r},t=Math.max(0,t),i=Math.max(1,Math.floor(i)),n=Math.max(3,Math.floor(n)),r=Math.max(1,Math.floor(r));let s=[],o=[],a=[],l=[],c=t/2,h=Math.PI/2*e,f=t,u=2*h+f,m=i*2+r,g=n+1,_=new C,p=new C;for(let d=0;d<=m;d++){let v=0,M=0,S=0,T=0;if(d<=i){let y=d/i,A=y*Math.PI/2;M=-c-e*Math.cos(A),S=e*Math.sin(A),T=-e*Math.cos(A),v=y*h}else if(d<=i+r){let y=(d-i)/r;M=-c+y*t,S=e,T=0,v=h+y*f}else{let y=(d-i-r)/i,A=y*Math.PI/2;M=c+e*Math.sin(A),S=e*Math.cos(A),T=e*Math.sin(A),v=h+f+y*h}let w=Math.max(0,Math.min(1,v/u)),x=0;if(d===0)x=0.5/n;else if(d===m)x=-0.5/n;for(let y=0;y<=n;y++){let A=y/n,U=A*Math.PI*2,P=Math.sin(U),O=Math.cos(U);p.x=-S*O,p.y=M,p.z=S*P,o.push(p.x,p.y,p.z),_.set(-S*O,T,S*P),_.normalize(),a.push(_.x,_.y,_.z),l.push(A+x,w)}if(d>0){let y=(d-1)*g;for(let A=0;A<n;A++){let U=y+A,P=y+A+1,O=d*g+A,ee=d*g+A+1;s.push(U,P,O),s.push(P,ee,O)}}}this.setIndex(s),this.setAttribute("position",new Ae(o,3)),this.setAttribute("normal",new Ae(a,3)),this.setAttribute("uv",new Ae(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fl(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}}class nr extends Ve{constructor(e=1,t=32,i=0,n=Math.PI*2){super();this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:n},t=Math.max(3,t);let r=[],s=[],o=[],a=[],l=new C,c=new Z;s.push(0,0,0),o.push(0,0,1),a.push(0.5,0.5);for(let h=0,f=3;h<=t;h++,f+=3){let u=i+h/t*n;l.x=e*Math.cos(u),l.y=e*Math.sin(u),s.push(l.x,l.y,l.z),o.push(0,0,1),c.x=(s[f]/e+1)/2,c.y=(s[f+1]/e+1)/2,a.push(c.x,c.y)}for(let h=1;h<=t;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new Ae(s,3)),this.setAttribute("normal",new Ae(o,3)),this.setAttribute("uv",new Ae(a,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new nr(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Rt extends Ve{constructor(e=1,t=1,i=1,n=32,r=1,s=!1,o=0,a=Math.PI*2){super();this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:n,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a};let l=this;n=Math.floor(n),r=Math.floor(r);let c=[],h=[],f=[],u=[],m=0,g=[],_=i/2,p=0;if(d(),s===!1){if(e>0)v(!0);if(t>0)v(!1)}this.setIndex(c),this.setAttribute("position",new Ae(h,3)),this.setAttribute("normal",new Ae(f,3)),this.setAttribute("uv",new Ae(u,2));function d(){let M=new C,S=new C,T=0,w=(t-e)/i;for(let x=0;x<=r;x++){let y=[],A=x/r,U=A*(t-e)+e;for(let P=0;P<=n;P++){let O=P/n,ee=O*a+o,I=Math.sin(ee),X=Math.cos(ee);S.x=U*I,S.y=-A*i+_,S.z=U*X,h.push(S.x,S.y,S.z),M.set(I,w,X).normalize(),f.push(M.x,M.y,M.z),u.push(O,1-A),y.push(m++)}g.push(y)}for(let x=0;x<n;x++)for(let y=0;y<r;y++){let A=g[y][x],U=g[y+1][x],P=g[y+1][x+1],O=g[y][x+1];if(e>0||y!==0)c.push(A,U,O),T+=3;if(t>0||y!==r-1)c.push(U,P,O),T+=3}l.addGroup(p,T,0),p+=T}function v(M){let S=m,T=new Z,w=new C,x=0,y=M===!0?e:t,A=M===!0?1:-1;for(let P=1;P<=n;P++)h.push(0,_*A,0),f.push(0,A,0),u.push(0.5,0.5),m++;let U=m;for(let P=0;P<=n;P++){let ee=P/n*a+o,I=Math.cos(ee),X=Math.sin(ee);w.x=y*X,w.y=_*A,w.z=y*I,h.push(w.x,w.y,w.z),f.push(0,A,0),T.x=I*0.5+0.5,T.y=X*0.5*A+0.5,u.push(T.x,T.y),m++}for(let P=0;P<n;P++){let O=S+P,ee=U+P;if(M===!0)c.push(ee,ee+1,O);else c.push(ee+1,ee,O);x+=3}l.addGroup(p,x,M===!0?1:2),p+=x}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Rt(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ts extends Rt{constructor(e=1,t=1,i=32,n=1,r=!1,s=0,o=Math.PI*2){super(0,e,t,i,n,r,s,o);this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:n,openEnded:r,thetaStart:s,thetaLength:o}}static fromJSON(e){return new Ts(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Lr extends Ve{constructor(e=[],t=[],i=1,n=0){super();this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:n};let r=[],s=[];if(o(n),l(i),c(),this.setAttribute("position",new Ae(r,3)),this.setAttribute("normal",new Ae(r.slice(),3)),this.setAttribute("uv",new Ae(s,2)),n===0)this.computeVertexNormals();else this.normalizeNormals();function o(d){let v=new C,M=new C,S=new C;for(let T=0;T<t.length;T+=3)u(t[T+0],v),u(t[T+1],M),u(t[T+2],S),a(v,M,S,d)}function a(d,v,M,S){let T=S+1,w=[];for(let x=0;x<=T;x++){w[x]=[];let y=d.clone().lerp(M,x/T),A=v.clone().lerp(M,x/T),U=T-x;for(let P=0;P<=U;P++)if(P===0&&x===T)w[x][P]=y;else w[x][P]=y.clone().lerp(A,P/U)}for(let x=0;x<T;x++)for(let y=0;y<2*(T-x)-1;y++){let A=Math.floor(y/2);if(y%2===0)f(w[x][A+1]),f(w[x+1][A]),f(w[x][A]);else f(w[x][A+1]),f(w[x+1][A+1]),f(w[x+1][A])}}function l(d){let v=new C;for(let M=0;M<r.length;M+=3)v.x=r[M+0],v.y=r[M+1],v.z=r[M+2],v.normalize().multiplyScalar(d),r[M+0]=v.x,r[M+1]=v.y,r[M+2]=v.z}function c(){let d=new C;for(let v=0;v<r.length;v+=3){d.x=r[v+0],d.y=r[v+1],d.z=r[v+2];let M=_(d)/2/Math.PI+0.5,S=p(d)/Math.PI+0.5;s.push(M,1-S)}m(),h()}function h(){for(let d=0;d<s.length;d+=6){let v=s[d+0],M=s[d+2],S=s[d+4],T=Math.max(v,M,S),w=Math.min(v,M,S);if(T>0.9&&w<0.1){if(v<0.2)s[d+0]+=1;if(M<0.2)s[d+2]+=1;if(S<0.2)s[d+4]+=1}}}function f(d){r.push(d.x,d.y,d.z)}function u(d,v){let M=d*3;v.x=e[M+0],v.y=e[M+1],v.z=e[M+2]}function m(){let d=new C,v=new C,M=new C,S=new C,T=new Z,w=new Z,x=new Z;for(let y=0,A=0;y<r.length;y+=9,A+=6){d.set(r[y+0],r[y+1],r[y+2]),v.set(r[y+3],r[y+4],r[y+5]),M.set(r[y+6],r[y+7],r[y+8]),T.set(s[A+0],s[A+1]),w.set(s[A+2],s[A+3]),x.set(s[A+4],s[A+5]),S.copy(d).add(v).add(M).divideScalar(3);let U=_(S);g(T,A+0,d,U),g(w,A+2,v,U),g(x,A+4,M,U)}}function g(d,v,M,S){if(S<0&&d.x===1)s[v]=d.x-1;if(M.x===0&&M.z===0)s[v]=S/2/Math.PI+0.5}function _(d){return Math.atan2(d.z,-d.x)}function p(d){return Math.atan2(-d.y,Math.sqrt(d.x*d.x+d.z*d.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Lr(e.vertices,e.indices,e.radius,e.detail)}}class dl extends Lr{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,n=1/i,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-n,-i,0,-n,i,0,n,-i,0,n,i,-n,-i,0,-n,i,0,n,-i,0,n,i,0,-i,0,-n,i,0,-n,-i,0,n,i,0,n],s=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,s,e,t);this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new dl(e.radius,e.detail)}}class qt{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){ge("Curve: .getPoint() not implemented.")}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,n=this.getPoint(0),r=0;t.push(0);for(let s=1;s<=e;s++)i=this.getPoint(s/e),r+=i.distanceTo(n),t.push(r),n=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let i=this.getLengths(),n=0,r=i.length,s;if(t)s=t;else s=e*i[r-1];let o=0,a=r-1,l;while(o<=a)if(n=Math.floor(o+(a-o)/2),l=i[n]-s,l<0)o=n+1;else if(l>0)a=n-1;else{a=n;break}if(n=a,i[n]===s)return n/(r-1);let c=i[n],f=i[n+1]-c,u=(s-c)/f;return(n+u)/(r-1)}getTangent(e,t){let n=e-0.0001,r=e+0.0001;if(n<0)n=0;if(r>1)r=1;let s=this.getPoint(n),o=this.getPoint(r),a=t||(s.isVector2?new Z:new C);return a.copy(o).sub(s).normalize(),a}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){let i=new C,n=[],r=[],s=[],o=new C,a=new Je;for(let u=0;u<=e;u++){let m=u/e;n[u]=this.getTangentAt(m,new C)}r[0]=new C,s[0]=new C;let l=Number.MAX_VALUE,c=Math.abs(n[0].x),h=Math.abs(n[0].y),f=Math.abs(n[0].z);if(c<=l)l=c,i.set(1,0,0);if(h<=l)l=h,i.set(0,1,0);if(f<=l)i.set(0,0,1);o.crossVectors(n[0],i).normalize(),r[0].crossVectors(n[0],o),s[0].crossVectors(n[0],r[0]);for(let u=1;u<=e;u++){if(r[u]=r[u-1].clone(),s[u]=s[u-1].clone(),o.crossVectors(n[u-1],n[u]),o.length()>Number.EPSILON){o.normalize();let m=Math.acos(Qe(n[u-1].dot(n[u]),-1,1));r[u].applyMatrix4(a.makeRotationAxis(o,m))}s[u].crossVectors(n[u],r[u])}if(t===!0){let u=Math.acos(Qe(r[0].dot(r[e]),-1,1));if(u/=e,n[0].dot(o.crossVectors(r[0],r[e]))>0)u=-u;for(let m=1;m<=e;m++)r[m].applyMatrix4(a.makeRotationAxis(n[m],u*m)),s[m].crossVectors(n[m],r[m])}return{tangents:n,normals:r,binormals:s}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}}class Dr extends qt{constructor(e=0,t=0,i=1,n=1,r=0,s=Math.PI*2,o=!1,a=0){super();this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=n,this.aStartAngle=r,this.aEndAngle=s,this.aClockwise=o,this.aRotation=a}getPoint(e,t=new Z){let i=t,n=Math.PI*2,r=this.aEndAngle-this.aStartAngle,s=Math.abs(r)<Number.EPSILON;while(r<0)r+=n;while(r>n)r-=n;if(r<Number.EPSILON)if(s)r=0;else r=n;if(this.aClockwise===!0&&!s)if(r===n)r=-n;else r=r-n;let o=this.aStartAngle+e*r,a=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let c=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=a-this.aX,u=l-this.aY;a=f*c-u*h+this.aX,l=f*h+u*c+this.aY}return i.set(a,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Ac extends Dr{constructor(e,t,i,n,r,s){super(e,t,i,i,n,r,s);this.isArcCurve=!0,this.type="ArcCurve"}}function Pc(){let e=0,t=0,i=0,n=0;function r(s,o,a,l){e=s,t=a,i=-3*s+3*o-2*a-l,n=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){r(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,h,f){let u=(o-s)/c-(a-s)/(c+h)+(a-o)/h,m=(a-o)/h-(l-o)/(h+f)+(l-a)/f;u*=h,m*=h,r(o,a,u,m)},calc:function(s){let o=s*s,a=o*s;return e+t*s+i*o+n*a}}}var Tu=new C,wu=new C,Rc=new Pc,Cc=new Pc,Ic=new Pc;class ws extends qt{constructor(e=[],t=!1,i="centripetal",n=0.5){super();this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=n}getPoint(e,t=new C){let i=t,n=this.points,r=n.length,s=(r-(this.closed?0:1))*e,o=Math.floor(s),a=s-o;if(this.closed)o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r;else if(a===0&&o===r-1)o=r-2,a=1;let l,c;if(this.closed||o>0)l=n[(o-1)%r];else wu.subVectors(n[0],n[1]).add(n[0]),l=wu;let h=n[o%r],f=n[(o+1)%r];if(this.closed||o+2<r)c=n[(o+2)%r];else Tu.subVectors(n[r-1],n[r-2]).add(n[r-1]),c=Tu;if(this.curveType==="centripetal"||this.curveType==="chordal"){let u=this.curveType==="chordal"?0.5:0.25,m=Math.pow(l.distanceToSquared(h),u),g=Math.pow(h.distanceToSquared(f),u),_=Math.pow(f.distanceToSquared(c),u);if(g<0.0001)g=1;if(m<0.0001)m=g;if(_<0.0001)_=g;Rc.initNonuniformCatmullRom(l.x,h.x,f.x,c.x,m,g,_),Cc.initNonuniformCatmullRom(l.y,h.y,f.y,c.y,m,g,_),Ic.initNonuniformCatmullRom(l.z,h.z,f.z,c.z,m,g,_)}else if(this.curveType==="catmullrom")Rc.initCatmullRom(l.x,h.x,f.x,c.x,this.tension),Cc.initCatmullRom(l.y,h.y,f.y,c.y,this.tension),Ic.initCatmullRom(l.z,h.z,f.z,c.z,this.tension);return i.set(Rc.calc(a),Cc.calc(a),Ic.calc(a)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let n=e.points[t];this.points.push(n.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let n=this.points[t];e.points.push(n.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let n=e.points[t];this.points.push(new C().fromArray(n))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Lc(e,t,i,n,r){let s=(n-t)*0.5,o=(r-i)*0.5,a=e*e,l=e*a;return(2*i-2*n+s+o)*l+(-3*i+3*n-2*s-o)*a+s*e+i}function D0(e,t){let i=1-e;return i*i*t}function N0(e,t){return 2*(1-e)*e*t}function U0(e,t){return e*e*t}function Nr(e,t,i,n){return D0(e,t)+N0(e,i)+U0(e,n)}function F0(e,t){let i=1-e;return i*i*i*t}function B0(e,t){let i=1-e;return 3*i*i*e*t}function O0(e,t){return 3*(1-e)*e*e*t}function z0(e,t){return e*e*e*t}function Ur(e,t,i,n,r){return F0(e,t)+B0(e,i)+O0(e,n)+z0(e,r)}class Xo extends qt{constructor(e=new Z,t=new Z,i=new Z,n=new Z){super();this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=n}getPoint(e,t=new Z){let i=t,n=this.v0,r=this.v1,s=this.v2,o=this.v3;return i.set(Ur(e,n.x,r.x,s.x,o.x),Ur(e,n.y,r.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Dc extends qt{constructor(e=new C,t=new C,i=new C,n=new C){super();this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=n}getPoint(e,t=new C){let i=t,n=this.v0,r=this.v1,s=this.v2,o=this.v3;return i.set(Ur(e,n.x,r.x,s.x,o.x),Ur(e,n.y,r.y,s.y,o.y),Ur(e,n.z,r.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class qo extends qt{constructor(e=new Z,t=new Z){super();this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Z){let i=t;if(e===1)i.copy(this.v2);else i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1);return i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Z){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Nc extends qt{constructor(e=new C,t=new C){super();this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new C){let i=t;if(e===1)i.copy(this.v2);else i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1);return i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new C){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Yo extends qt{constructor(e=new Z,t=new Z,i=new Z){super();this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new Z){let i=t,n=this.v0,r=this.v1,s=this.v2;return i.set(Nr(e,n.x,r.x,s.x),Nr(e,n.y,r.y,s.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Zo extends qt{constructor(e=new C,t=new C,i=new C){super();this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new C){let i=t,n=this.v0,r=this.v1,s=this.v2;return i.set(Nr(e,n.x,r.x,s.x),Nr(e,n.y,r.y,s.y),Nr(e,n.z,r.z,s.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Jo extends qt{constructor(e=[]){super();this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Z){let i=t,n=this.points,r=(n.length-1)*e,s=Math.floor(r),o=r-s,a=n[s===0?s:s-1],l=n[s],c=n[s>n.length-2?n.length-1:s+1],h=n[s>n.length-3?n.length-1:s+2];return i.set(Lc(o,a.x,l.x,c.x,h.x),Lc(o,a.y,l.y,c.y,h.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let n=e.points[t];this.points.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let n=this.points[t];e.points.push(n.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let n=e.points[t];this.points.push(new Z().fromArray(n))}return this}}class pl extends qt{constructor(){super();this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new rr[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),n=this.getCurveLengths(),r=0;while(r<n.length){if(n[r]>=i){let s=n[r]-i,o=this.curves[r],a=o.getLength(),l=a===0?0:1-s/a;return o.getPointAt(l,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,n=this.curves.length;i<n;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));if(this.autoClose)t.push(t[0]);return t}getPoints(e=12){let t=[],i;for(let n=0,r=this.curves;n<r.length;n++){let s=r[n],o=s.isEllipseCurve?e*2:s.isLineCurve||s.isLineCurve3?1:s.isSplineCurve?e*s.points.length:e,a=s.getPoints(o);for(let l=0;l<a.length;l++){let c=a[l];if(i&&i.equals(c))continue;t.push(c),i=c}}if(this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0]))t.push(t[0]);return t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let n=e.curves[t];this.curves.push(n.clone())}return this.autoClose=e.autoClose,this.cacheLengths=null,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let n=this.curves[t];e.curves.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let n=e.curves[t];this.curves.push(new rr[n.type]().fromJSON(n))}return this.cacheLengths=null,this}}class As extends pl{constructor(e){super();if(this.type="Path",this.currentPoint=new Z,e)this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new qo(this.currentPoint.clone(),new Z(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,n){let r=new Yo(this.currentPoint.clone(),new Z(e,t),new Z(i,n));return this.curves.push(r),this.currentPoint.set(i,n),this}bezierCurveTo(e,t,i,n,r,s){let o=new Xo(this.currentPoint.clone(),new Z(e,t),new Z(i,n),new Z(r,s));return this.curves.push(o),this.currentPoint.set(r,s),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new Jo(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,n,r,s){let o=this.currentPoint.x,a=this.currentPoint.y;return this.absarc(e+o,t+a,i,n,r,s),this}absarc(e,t,i,n,r,s){return this.absellipse(e,t,i,i,n,r,s),this}ellipse(e,t,i,n,r,s,o,a){let l=this.currentPoint.x,c=this.currentPoint.y;return this.absellipse(e+l,t+c,i,n,r,s,o,a),this}absellipse(e,t,i,n,r,s,o,a){let l=new Dr(e,t,i,n,r,s,o,a);if(this.curves.length>0){let h=l.getPoint(0);if(!h.equals(this.currentPoint))this.lineTo(h.x,h.y)}this.curves.push(l);let c=l.getPoint(1);return this.currentPoint.copy(c),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Gi extends As{constructor(e){super(e);this.uuid=Ii(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,n=this.holes.length;i<n;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let n=e.holes[t];this.holes.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let n=this.holes[t];e.holes.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let n=e.holes[t];this.holes.push(new As().fromJSON(n))}return this}}function Bc(e,t,i=2){let n=t&&t.length,r=n?t[0]*i:e.length,s=Ru(e,0,r,i,!0),o=[];if(!s||s.next===s.prev)return o;let a,l,c;if(n)s=W0(e,t,s,i);if(e.length>80*i){a=e[0],l=e[1];let h=a,f=l;for(let u=i;u<r;u+=i){let m=e[u],g=e[u+1];if(m<a)a=m;if(g<l)l=g;if(m>h)h=m;if(g>f)f=g}c=Math.max(h-a,f-l),c=c!==0?32767/c:0}return $o(s,o,i,a,l,c,0),o}function Ru(e,t,i,n,r){let s;if(r===tg(e,t,i,n)>0)for(let o=t;o<i;o+=n)s=Au(o/n|0,e[o],e[o+1],s);else for(let o=i-n;o>=t;o-=n)s=Au(o/n|0,e[o],e[o+1],s);if(s&&Rs(s,s.next))jo(s),s=s.next;return s}function Fr(e,t){if(!e)return e;if(!t)t=e;let i=e,n;do if(n=!1,!i.steiner&&(Rs(i,i.next)||Vt(i.prev,i,i.next)===0)){if(jo(i),i=t=i.prev,i===i.next)break;n=!0}else i=i.next;while(n||i!==t);return t}function $o(e,t,i,n,r,s,o){if(!e)return;if(!o&&s)J0(e,n,r,s);let a=e;while(e.prev!==e.next){let l=e.prev,c=e.next;if(s?H0(e,n,r,s):G0(e)){t.push(l.i,e.i,c.i),jo(e),e=c.next,a=c.next;continue}if(e=c,e===a){if(!o)$o(Fr(e),t,i,n,r,s,1);else if(o===1)e=k0(Fr(e),t),$o(e,t,i,n,r,s,2);else if(o===2)V0(e,t,i,n,r,s);break}}}function G0(e){let t=e.prev,i=e,n=e.next;if(Vt(t,i,n)>=0)return!1;let r=t.x,s=i.x,o=n.x,a=t.y,l=i.y,c=n.y,h=Math.min(r,s,o),f=Math.min(a,l,c),u=Math.max(r,s,o),m=Math.max(a,l,c),g=n.next;while(g!==t){if(g.x>=h&&g.x<=u&&g.y>=f&&g.y<=m&&Ko(r,a,s,l,o,c,g.x,g.y)&&Vt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function H0(e,t,i,n){let r=e.prev,s=e,o=e.next;if(Vt(r,s,o)>=0)return!1;let a=r.x,l=s.x,c=o.x,h=r.y,f=s.y,u=o.y,m=Math.min(a,l,c),g=Math.min(h,f,u),_=Math.max(a,l,c),p=Math.max(h,f,u),d=Uc(m,g,t,i,n),v=Uc(_,p,t,i,n),{prevZ:M,nextZ:S}=e;while(M&&M.z>=d&&S&&S.z<=v){if(M.x>=m&&M.x<=_&&M.y>=g&&M.y<=p&&M!==r&&M!==o&&Ko(a,h,l,f,c,u,M.x,M.y)&&Vt(M.prev,M,M.next)>=0)return!1;if(M=M.prevZ,S.x>=m&&S.x<=_&&S.y>=g&&S.y<=p&&S!==r&&S!==o&&Ko(a,h,l,f,c,u,S.x,S.y)&&Vt(S.prev,S,S.next)>=0)return!1;S=S.nextZ}while(M&&M.z>=d){if(M.x>=m&&M.x<=_&&M.y>=g&&M.y<=p&&M!==r&&M!==o&&Ko(a,h,l,f,c,u,M.x,M.y)&&Vt(M.prev,M,M.next)>=0)return!1;M=M.prevZ}while(S&&S.z<=v){if(S.x>=m&&S.x<=_&&S.y>=g&&S.y<=p&&S!==r&&S!==o&&Ko(a,h,l,f,c,u,S.x,S.y)&&Vt(S.prev,S,S.next)>=0)return!1;S=S.nextZ}return!0}function k0(e,t){let i=e;do{let n=i.prev,r=i.next.next;if(!Rs(n,r)&&Iu(n,i,i.next,r)&&Qo(n,r)&&Qo(r,n))t.push(n.i,i.i,r.i),jo(i),jo(i.next),i=e=r;i=i.next}while(i!==e);return Fr(i)}function V0(e,t,i,n,r,s){let o=e;do{let a=o.next.next;while(a!==o.prev){if(o.i!==a.i&&Q0(o,a)){let l=Pu(o,a);o=Fr(o,o.next),l=Fr(l,l.next),$o(o,t,i,n,r,s,0),$o(l,t,i,n,r,s,0);return}a=a.next}o=o.next}while(o!==e)}function W0(e,t,i,n){let r=[];for(let s=0,o=t.length;s<o;s++){let a=t[s]*n,l=s<o-1?t[s+1]*n:e.length,c=Ru(e,a,l,n,!1);if(c===c.next)c.steiner=!0;r.push($0(c))}r.sort(X0);for(let s=0;s<r.length;s++)i=q0(r[s],i);return i}function X0(e,t){let i=e.x-t.x;if(i===0){if(i=e.y-t.y,i===0){let n=(e.next.y-e.y)/(e.next.x-e.x),r=(t.next.y-t.y)/(t.next.x-t.x);i=n-r}}return i}function q0(e,t){let i=Y0(e,t);if(!i)return t;let n=Pu(i,e);return Fr(n,n.next),Fr(i,i.next)}function Y0(e,t){let i=t,{x:n,y:r}=e,s=-1/0,o;if(Rs(e,i))return i;do{if(Rs(e,i.next))return i.next;else if(r<=i.y&&r>=i.next.y&&i.next.y!==i.y){let f=i.x+(r-i.y)*(i.next.x-i.x)/(i.next.y-i.y);if(f<=n&&f>s){if(s=f,o=i.x<i.next.x?i:i.next,f===n)return o}}i=i.next}while(i!==t);if(!o)return null;let a=o,l=o.x,c=o.y,h=1/0;i=o;do{if(n>=i.x&&i.x>=l&&n!==i.x&&Cu(r<c?n:s,r,l,c,r<c?s:n,r,i.x,i.y)){let f=Math.abs(r-i.y)/(n-i.x);if(Qo(i,e)&&(f<h||f===h&&(i.x>o.x||i.x===o.x&&Z0(o,i))))o=i,h=f}i=i.next}while(i!==a);return o}function Z0(e,t){return Vt(e.prev,e,t.prev)<0&&Vt(t.next,e,e.next)<0}function J0(e,t,i,n){let r=e;do{if(r.z===0)r.z=Uc(r.x,r.y,t,i,n);r.prevZ=r.prev,r.nextZ=r.next,r=r.next}while(r!==e);r.prevZ.nextZ=null,r.prevZ=null,K0(r)}function K0(e){let t,i=1;do{let n=e,r;e=null;let s=null;t=0;while(n){t++;let o=n,a=0;for(let c=0;c<i;c++)if(a++,o=o.nextZ,!o)break;let l=i;while(a>0||l>0&&o){if(a!==0&&(l===0||!o||n.z<=o.z))r=n,n=n.nextZ,a--;else r=o,o=o.nextZ,l--;if(s)s.nextZ=r;else e=r;r.prevZ=s,s=r}n=o}s.nextZ=null,i*=2}while(t>1);return e}function Uc(e,t,i,n,r){return e=(e-i)*r|0,t=(t-n)*r|0,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e|t<<1}function $0(e){let t=e,i=e;do{if(t.x<i.x||t.x===i.x&&t.y<i.y)i=t;t=t.next}while(t!==e);return i}function Cu(e,t,i,n,r,s,o,a){return(r-o)*(t-a)>=(e-o)*(s-a)&&(e-o)*(n-a)>=(i-o)*(t-a)&&(i-o)*(s-a)>=(r-o)*(n-a)}function Ko(e,t,i,n,r,s,o,a){return!(e===o&&t===a)&&Cu(e,t,i,n,r,s,o,a)}function Q0(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!j0(e,t)&&(Qo(e,t)&&Qo(t,e)&&eg(e,t)&&(Vt(e.prev,e,t.prev)||Vt(e,t.prev,t))||Rs(e,t)&&Vt(e.prev,e,e.next)>0&&Vt(t.prev,t,t.next)>0)}function Vt(e,t,i){return(t.y-e.y)*(i.x-t.x)-(t.x-e.x)*(i.y-t.y)}function Rs(e,t){return e.x===t.x&&e.y===t.y}function Iu(e,t,i,n){let r=gl(Vt(e,t,i)),s=gl(Vt(e,t,n)),o=gl(Vt(i,n,e)),a=gl(Vt(i,n,t));if(r!==s&&o!==a)return!0;if(r===0&&ml(e,i,t))return!0;if(s===0&&ml(e,n,t))return!0;if(o===0&&ml(i,e,n))return!0;if(a===0&&ml(i,t,n))return!0;return!1}function ml(e,t,i){return t.x<=Math.max(e.x,i.x)&&t.x>=Math.min(e.x,i.x)&&t.y<=Math.max(e.y,i.y)&&t.y>=Math.min(e.y,i.y)}function gl(e){return e>0?1:e<0?-1:0}function j0(e,t){let i=e;do{if(i.i!==e.i&&i.next.i!==e.i&&i.i!==t.i&&i.next.i!==t.i&&Iu(i,i.next,e,t))return!0;i=i.next}while(i!==e);return!1}function Qo(e,t){return Vt(e.prev,e,e.next)<0?Vt(e,t,e.next)>=0&&Vt(e,e.prev,t)>=0:Vt(e,t,e.prev)<0||Vt(e,e.next,t)<0}function eg(e,t){let i=e,n=!1,r=(e.x+t.x)/2,s=(e.y+t.y)/2;do{if(i.y>s!==i.next.y>s&&i.next.y!==i.y&&r<(i.next.x-i.x)*(s-i.y)/(i.next.y-i.y)+i.x)n=!n;i=i.next}while(i!==e);return n}function Pu(e,t){let i=Fc(e.i,e.x,e.y),n=Fc(t.i,t.x,t.y),r=e.next,s=t.prev;return e.next=t,t.prev=e,i.next=r,r.prev=i,n.next=i,i.prev=n,s.next=n,n.prev=s,n}function Au(e,t,i,n){let r=Fc(e,t,i);if(!n)r.prev=r,r.next=r;else r.next=n.next,r.prev=n,n.next.prev=r,n.next=r;return r}function jo(e){if(e.next.prev=e.prev,e.prev.next=e.next,e.prevZ)e.prevZ.nextZ=e.nextZ;if(e.nextZ)e.nextZ.prevZ=e.prevZ}function Fc(e,t,i){return{i:e,x:t,y:i,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function tg(e,t,i,n){let r=0;for(let s=t,o=i-n;s<i;s+=n)r+=(e[o]-e[s])*(e[s+1]+e[o+1]),o=s;return r}class Oc{static triangulate(e,t,i=2){return Bc(e,t,i)}}class en{static area(e){let t=e.length,i=0;for(let n=t-1,r=0;r<t;n=r++)i+=e[n].x*e[r].y-e[r].x*e[n].y;return i*0.5}static isClockWise(e){return en.area(e)<0}static triangulateShape(e,t){let i=[],n=[],r=[];Lu(e),Du(i,e);let s=e.length;t.forEach(Lu);for(let a=0;a<t.length;a++)n.push(s),s+=t[a].length,Du(i,t[a]);let o=Oc.triangulate(i,n);for(let a=0;a<o.length;a+=3)r.push(o.slice(a,a+3));return r}}function Lu(e){let t=e.length;if(t>2&&e[t-1].equals(e[0]))e.pop()}function Du(e,t){for(let i=0;i<t.length;i++)e.push(t[i].x),e.push(t[i].y)}class Cs extends Ve{constructor(e=new Gi([new Z(0.5,0.5),new Z(-0.5,0.5),new Z(-0.5,-0.5),new Z(0.5,-0.5)]),t={}){super();this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let i=this,n=[],r=[];for(let o=0,a=e.length;o<a;o++){let l=e[o];s(l)}this.setAttribute("position",new Ae(n,3)),this.setAttribute("uv",new Ae(r,2)),this.computeVertexNormals();function s(o){let a=[],l=t.curveSegments!==void 0?t.curveSegments:12,c=t.steps!==void 0?t.steps:1,h=t.depth!==void 0?t.depth:1,f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,u=t.bevelThickness!==void 0?t.bevelThickness:0.2,m=t.bevelSize!==void 0?t.bevelSize:u-0.1,g=t.bevelOffset!==void 0?t.bevelOffset:0,_=t.bevelSegments!==void 0?t.bevelSegments:3,p=t.extrudePath,d=t.UVGenerator!==void 0?t.UVGenerator:ig,v,M=!1,S,T,w,x;if(p){v=p.getSpacedPoints(c),M=!0,f=!1;let re=p.isCatmullRomCurve3?p.closed:!1;S=p.computeFrenetFrames(c,re),T=new C,w=new C,x=new C}if(!f)_=0,u=0,m=0,g=0;let y=o.extractPoints(l),{shape:A,holes:U}=y;if(!en.isClockWise(A)){A=A.reverse();for(let re=0,ce=U.length;re<ce;re++){let ue=U[re];if(en.isClockWise(ue))U[re]=ue.reverse()}}function O(re){let Ce=re[0];for(let Ue=1;Ue<=re.length;Ue++){let Ye=Ue%re.length,He=re[Ye],ot=He.x-Ce.x,ft=He.y-Ce.y,bt=ot*ot+ft*ft,B=Math.max(Math.abs(He.x),Math.abs(He.y),Math.abs(Ce.x),Math.abs(Ce.y)),ii=0.000000000000000000010000000000000001*B*B;if(bt<=ii){re.splice(Ye,1),Ue--;continue}Ce=He}}O(A),U.forEach(O);let ee=U.length,I=A;for(let re=0;re<ee;re++){let ce=U[re];A=A.concat(ce)}function X(re,ce,ue){if(!ce)Fe("ExtrudeGeometry: vec does not exist");return re.clone().addScaledVector(ce,ue)}let L=A.length;function N(re,ce,ue){let Ce,Ue,Ye,He=re.x-ce.x,ot=re.y-ce.y,ft=ue.x-re.x,bt=ue.y-re.y,B=He*He+ot*ot,ii=He*bt-ot*ft;if(Math.abs(ii)>Number.EPSILON){let at=Math.sqrt(B),Zt=Math.sqrt(ft*ft+bt*bt),we=ce.x-ot/at,At=ce.y+He/at,$e=ue.x-bt/Zt,tt=ue.y+ft/Zt,ni=(($e-we)*bt-(tt-At)*ft)/(He*bt-ot*ft);Ce=we+He*ni-re.x,Ue=At+ot*ni-re.y;let R=Ce*Ce+Ue*Ue;if(R<=2)return new Z(Ce,Ue);else Ye=Math.sqrt(R/2)}else{let at=!1;if(He>Number.EPSILON){if(ft>Number.EPSILON)at=!0}else if(He<-Number.EPSILON){if(ft<-Number.EPSILON)at=!0}else if(Math.sign(ot)===Math.sign(bt))at=!0;if(at)Ce=-ot,Ue=He,Ye=Math.sqrt(B);else Ce=He,Ue=ot,Ye=Math.sqrt(B/2)}return new Z(Ce/Ye,Ue/Ye)}let Q=[];for(let re=0,ce=I.length,ue=ce-1,Ce=re+1;re<ce;re++,ue++,Ce++){if(ue===ce)ue=0;if(Ce===ce)Ce=0;Q[re]=N(I[re],I[ue],I[Ce])}let z=[],W,Y=Q.concat();for(let re=0,ce=ee;re<ce;re++){let ue=U[re];W=[];for(let Ce=0,Ue=ue.length,Ye=Ue-1,He=Ce+1;Ce<Ue;Ce++,Ye++,He++){if(Ye===Ue)Ye=0;if(He===Ue)He=0;W[Ce]=N(ue[Ce],ue[Ye],ue[He])}z.push(W),Y=Y.concat(W)}let fe;if(_===0)fe=en.triangulateShape(I,U);else{let re=[],ce=[];for(let ue=0;ue<_;ue++){let Ce=ue/_,Ue=u*Math.cos(Ce*Math.PI/2),Ye=m*Math.sin(Ce*Math.PI/2)+g;for(let He=0,ot=I.length;He<ot;He++){let ft=X(I[He],Q[He],Ye);if(Ee(ft.x,ft.y,-Ue),Ce===0)re.push(ft)}for(let He=0,ot=ee;He<ot;He++){let ft=U[He];W=z[He];let bt=[];for(let B=0,ii=ft.length;B<ii;B++){let at=X(ft[B],W[B],Ye);if(Ee(at.x,at.y,-Ue),Ce===0)bt.push(at)}if(Ce===0)ce.push(bt)}}fe=en.triangulateShape(re,ce)}let k=fe.length,j=m+g;for(let re=0;re<L;re++){let ce=f?X(A[re],Y[re],j):A[re];if(!M)Ee(ce.x,ce.y,0);else w.copy(S.normals[0]).multiplyScalar(ce.x),T.copy(S.binormals[0]).multiplyScalar(ce.y),x.copy(v[0]).add(w).add(T),Ee(x.x,x.y,x.z)}for(let re=1;re<=c;re++)for(let ce=0;ce<L;ce++){let ue=f?X(A[ce],Y[ce],j):A[ce];if(!M)Ee(ue.x,ue.y,h/c*re);else w.copy(S.normals[re]).multiplyScalar(ue.x),T.copy(S.binormals[re]).multiplyScalar(ue.y),x.copy(v[re]).add(w).add(T),Ee(x.x,x.y,x.z)}for(let re=_-1;re>=0;re--){let ce=re/_,ue=u*Math.cos(ce*Math.PI/2),Ce=m*Math.sin(ce*Math.PI/2)+g;for(let Ue=0,Ye=I.length;Ue<Ye;Ue++){let He=X(I[Ue],Q[Ue],Ce);Ee(He.x,He.y,h+ue)}for(let Ue=0,Ye=U.length;Ue<Ye;Ue++){let He=U[Ue];W=z[Ue];for(let ot=0,ft=He.length;ot<ft;ot++){let bt=X(He[ot],W[ot],Ce);if(!M)Ee(bt.x,bt.y,h+ue);else Ee(bt.x,bt.y+v[c-1].y,v[c-1].x+ue)}}}ye(),ve();function ye(){let re=n.length/3;if(f){let ce=0,ue=L*ce;for(let Ce=0;Ce<k;Ce++){let Ue=fe[Ce];ht(Ue[2]+ue,Ue[1]+ue,Ue[0]+ue)}ce=c+_*2,ue=L*ce;for(let Ce=0;Ce<k;Ce++){let Ue=fe[Ce];ht(Ue[0]+ue,Ue[1]+ue,Ue[2]+ue)}}else{for(let ce=0;ce<k;ce++){let ue=fe[ce];ht(ue[2],ue[1],ue[0])}for(let ce=0;ce<k;ce++){let ue=fe[ce];ht(ue[0]+L*c,ue[1]+L*c,ue[2]+L*c)}}i.addGroup(re,n.length/3-re,0)}function ve(){let re=n.length/3,ce=0;Be(I,ce),ce+=I.length;for(let ue=0,Ce=U.length;ue<Ce;ue++){let Ue=U[ue];Be(Ue,ce),ce+=Ue.length}i.addGroup(re,n.length/3-re,1)}function Be(re,ce){let ue=re.length;while(--ue>=0){let Ce=ue,Ue=ue-1;if(Ue<0)Ue=re.length-1;for(let Ye=0,He=c+_*2;Ye<He;Ye++){let ot=L*Ye,ft=L*(Ye+1),bt=ce+Ce+ot,B=ce+Ue+ot,ii=ce+Ue+ft,at=ce+Ce+ft;De(bt,B,ii,at)}}}function Ee(re,ce,ue){a.push(re),a.push(ce),a.push(ue)}function ht(re,ce,ue){Ne(re),Ne(ce),Ne(ue);let Ce=n.length/3,Ue=d.generateTopUV(i,n,Ce-3,Ce-2,Ce-1);nt(Ue[0]),nt(Ue[1]),nt(Ue[2])}function De(re,ce,ue,Ce){Ne(re),Ne(ce),Ne(Ce),Ne(ce),Ne(ue),Ne(Ce);let Ue=n.length/3,Ye=d.generateSideWallUV(i,n,Ue-6,Ue-3,Ue-2,Ue-1);nt(Ye[0]),nt(Ye[1]),nt(Ye[3]),nt(Ye[1]),nt(Ye[2]),nt(Ye[3])}function Ne(re){n.push(a[re*3+0]),n.push(a[re*3+1]),n.push(a[re*3+2])}function nt(re){r.push(re.x),r.push(re.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return ng(t,i,e)}static fromJSON(e,t){let i=[];for(let r=0,s=e.shapes.length;r<s;r++){let o=t[e.shapes[r]];i.push(o)}let n=e.options.extrudePath;if(n!==void 0)e.options.extrudePath=new rr[n.type]().fromJSON(n);return new Cs(i,e.options)}}var ig={generateTopUV:function(e,t,i,n,r){let s=t[i*3],o=t[i*3+1],a=t[n*3],l=t[n*3+1],c=t[r*3],h=t[r*3+1];return[new Z(s,o),new Z(a,l),new Z(c,h)]},generateSideWallUV:function(e,t,i,n,r,s){let o=t[i*3],a=t[i*3+1],l=t[i*3+2],c=t[n*3],h=t[n*3+1],f=t[n*3+2],u=t[r*3],m=t[r*3+1],g=t[r*3+2],_=t[s*3],p=t[s*3+1],d=t[s*3+2];if(Math.abs(a-h)<Math.abs(o-c))return[new Z(o,1-l),new Z(c,1-f),new Z(u,1-g),new Z(_,1-d)];else return[new Z(a,1-l),new Z(h,1-f),new Z(m,1-g),new Z(p,1-d)]}};function ng(e,t,i){if(i.shapes=[],Array.isArray(e))for(let n=0,r=e.length;n<r;n++){let s=e[n];i.shapes.push(s.uuid)}else i.shapes.push(e.uuid);if(i.options=Object.assign({},t),t.extrudePath!==void 0)i.options.extrudePath=t.extrudePath.toJSON();return i}class xl extends Ve{constructor(e=[new Z(0,-0.5),new Z(0.5,0),new Z(0,0.5)],t=12,i=0,n=Math.PI*2){super();this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:n},t=Math.floor(t),n=Qe(n,0,Math.PI*2);let r=[],s=[],o=[],a=[],l=[],c=1/t,h=new C,f=new Z,u=new C,m=new C,g=new C,_=0,p=0;for(let d=0;d<=e.length-1;d++)switch(d){case 0:_=e[d+1].x-e[d].x,p=e[d+1].y-e[d].y,u.x=p*1,u.y=-_,u.z=p*0,g.copy(u),u.normalize(),a.push(u.x,u.y,u.z);break;case e.length-1:g.normalize(),a.push(g.x,g.y,g.z);break;default:_=e[d+1].x-e[d].x,p=e[d+1].y-e[d].y,u.x=p*1,u.y=-_,u.z=p*0,m.copy(u),u.x+=g.x,u.y+=g.y,u.z+=g.z,u.normalize(),a.push(u.x,u.y,u.z),g.copy(m)}for(let d=0;d<=t;d++){let v=i+d*c*n,M=Math.sin(v),S=Math.cos(v);for(let T=0;T<=e.length-1;T++){h.x=e[T].x*M,h.y=e[T].y,h.z=e[T].x*S,s.push(h.x,h.y,h.z),f.x=d/t,f.y=T/(e.length-1),o.push(f.x,f.y);let w=a[3*T+0]*M,x=a[3*T+1],y=a[3*T+0]*S;l.push(w,x,y)}}for(let d=0;d<t;d++)for(let v=0;v<e.length-1;v++){let M=v+d*e.length,S=M,T=M+e.length,w=M+e.length+1,x=M+1;r.push(S,T,x),r.push(w,x,T)}this.setIndex(r),this.setAttribute("position",new Ae(s,3)),this.setAttribute("uv",new Ae(o,2)),this.setAttribute("normal",new Ae(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xl(e.points,e.segments,e.phiStart,e.phiLength)}}class Dt extends Ve{constructor(e=1,t=1,i=1,n=1){super();this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:n};let r=e/2,s=t/2,o=Math.floor(i),a=Math.floor(n),l=o+1,c=a+1,h=e/o,f=t/a,u=[],m=[],g=[],_=[];for(let p=0;p<c;p++){let d=p*f-s;for(let v=0;v<l;v++){let M=v*h-r;m.push(M,-d,0),g.push(0,0,1),_.push(v/o),_.push(1-p/a)}}for(let p=0;p<a;p++)for(let d=0;d<o;d++){let v=d+l*p,M=d+l*(p+1),S=d+1+l*(p+1),T=d+1+l*p;u.push(v,M,T),u.push(M,S,T)}this.setIndex(u),this.setAttribute("position",new Ae(m,3)),this.setAttribute("normal",new Ae(g,3)),this.setAttribute("uv",new Ae(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Dt(e.width,e.height,e.widthSegments,e.heightSegments)}}class ea extends Ve{constructor(e=0.5,t=1,i=32,n=1,r=0,s=Math.PI*2){super();this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:n,thetaStart:r,thetaLength:s},i=Math.max(3,i),n=Math.max(1,n);let o=[],a=[],l=[],c=[],h=e,f=(t-e)/n,u=new C,m=new Z;for(let g=0;g<=n;g++){for(let _=0;_<=i;_++){let p=r+_/i*s;u.x=h*Math.cos(p),u.y=h*Math.sin(p),a.push(u.x,u.y,u.z),l.push(0,0,1),m.x=(u.x/t+1)/2,m.y=(u.y/t+1)/2,c.push(m.x,m.y)}h+=f}for(let g=0;g<n;g++){let _=g*(i+1);for(let p=0;p<i;p++){let d=p+_,v=d,M=d+i+1,S=d+i+2,T=d+1;o.push(v,M,T),o.push(M,S,T)}}this.setIndex(o),this.setAttribute("position",new Ae(a,3)),this.setAttribute("normal",new Ae(l,3)),this.setAttribute("uv",new Ae(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ea(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Is extends Ve{constructor(e=new Gi([new Z(0,0.5),new Z(-0.5,-0.5),new Z(0.5,-0.5)]),t=12){super();this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let i=[],n=[],r=[],s=[],o=0,a=0;if(Array.isArray(e)===!1)l(e);else for(let c=0;c<e.length;c++)l(e[c]),this.addGroup(o,a,c),o+=a,a=0;this.setIndex(i),this.setAttribute("position",new Ae(n,3)),this.setAttribute("normal",new Ae(r,3)),this.setAttribute("uv",new Ae(s,2));function l(c){let h=n.length/3,f=c.extractPoints(t),{shape:u,holes:m}=f;if(en.isClockWise(u)===!1)u=u.reverse();for(let _=0,p=m.length;_<p;_++){let d=m[_];if(en.isClockWise(d)===!0)m[_]=d.reverse()}let g=en.triangulateShape(u,m);for(let _=0,p=m.length;_<p;_++){let d=m[_];u=u.concat(d)}for(let _=0,p=u.length;_<p;_++){let d=u[_];n.push(d.x,d.y,0),r.push(0,0,1),s.push(d.x,d.y)}for(let _=0,p=g.length;_<p;_++){let d=g[_],v=d[0]+h,M=d[1]+h,S=d[2]+h;i.push(v,M,S),a+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return rg(t,e)}static fromJSON(e,t){let i=[];for(let n=0,r=e.shapes.length;n<r;n++){let s=t[e.shapes[n]];i.push(s)}return new Is(i,e.curveSegments)}}function rg(e,t){if(t.shapes=[],Array.isArray(e))for(let i=0,n=e.length;i<n;i++){let r=e[i];t.shapes.push(r.uuid)}else t.shapes.push(e.uuid);return t}class wn extends Ve{constructor(e=1,t=32,i=16,n=0,r=Math.PI*2,s=0,o=Math.PI){super();this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:n,phiLength:r,thetaStart:s,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let a=Math.min(s+o,Math.PI),l=0,c=[],h=new C,f=new C,u=[],m=[],g=[],_=[];for(let p=0;p<=i;p++){let d=[],v=p/i,M=s+v*o,S=e*Math.cos(M),T=Math.sqrt(e*e-S*S),w=0;if(p===0&&s===0)w=0.5/t;else if(p===i&&a===Math.PI)w=-0.5/t;for(let x=0;x<=t;x++){let y=x/t,A=n+y*r;h.x=-T*Math.cos(A),h.y=S,h.z=T*Math.sin(A),m.push(h.x,h.y,h.z),f.copy(h).normalize(),g.push(f.x,f.y,f.z),_.push(y+w,1-v),d.push(l++)}c.push(d)}for(let p=0;p<i;p++)for(let d=0;d<t;d++){let v=c[p][d+1],M=c[p][d],S=c[p+1][d],T=c[p+1][d+1];if(p!==0||s>0)u.push(v,M,T);if(p!==i-1||a<Math.PI)u.push(M,S,T)}this.setIndex(u),this.setAttribute("position",new Ae(m,3)),this.setAttribute("normal",new Ae(g,3)),this.setAttribute("uv",new Ae(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wn(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Br extends Ve{constructor(e=1,t=0.4,i=12,n=48,r=Math.PI*2,s=0,o=Math.PI*2){super();this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:n,arc:r,thetaStart:s,thetaLength:o},i=Math.floor(i),n=Math.floor(n);let a=[],l=[],c=[],h=[],f=new C,u=new C,m=new C;for(let g=0;g<=i;g++){let _=s+g/i*o;for(let p=0;p<=n;p++){let d=p/n*r;u.x=(e+t*Math.cos(_))*Math.cos(d),u.y=(e+t*Math.cos(_))*Math.sin(d),u.z=t*Math.sin(_),l.push(u.x,u.y,u.z),f.x=e*Math.cos(d),f.y=e*Math.sin(d),m.subVectors(u,f).normalize(),c.push(m.x,m.y,m.z),h.push(p/n),h.push(g/i)}}for(let g=1;g<=i;g++)for(let _=1;_<=n;_++){let p=(n+1)*g+_-1,d=(n+1)*(g-1)+_-1,v=(n+1)*(g-1)+_,M=(n+1)*g+_;a.push(p,d,M),a.push(d,v,M)}this.setIndex(a),this.setAttribute("position",new Ae(l,3)),this.setAttribute("normal",new Ae(c,3)),this.setAttribute("uv",new Ae(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Br(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}class ta extends Ve{constructor(e=new Zo(new C(-1,-1,0),new C(-1,1,0),new C(1,1,0)),t=64,i=1,n=8,r=!1){super();this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:n,closed:r};let s=e.computeFrenetFrames(t,r);this.tangents=s.tangents,this.normals=s.normals,this.binormals=s.binormals;let o=new C,a=new C,l=new Z,c=new C,h=[],f=[],u=[],m=[];g(),this.setIndex(m),this.setAttribute("position",new Ae(h,3)),this.setAttribute("normal",new Ae(f,3)),this.setAttribute("uv",new Ae(u,2));function g(){for(let v=0;v<t;v++)_(v);_(r===!1?t:0),d(),p()}function _(v){c=e.getPointAt(v/t,c);let M=s.normals[v],S=s.binormals[v];for(let T=0;T<=n;T++){let w=T/n*Math.PI*2,x=Math.sin(w),y=-Math.cos(w);a.x=y*M.x+x*S.x,a.y=y*M.y+x*S.y,a.z=y*M.z+x*S.z,a.normalize(),f.push(a.x,a.y,a.z),o.x=c.x+i*a.x,o.y=c.y+i*a.y,o.z=c.z+i*a.z,h.push(o.x,o.y,o.z)}}function p(){for(let v=1;v<=t;v++)for(let M=1;M<=n;M++){let S=(n+1)*(v-1)+(M-1),T=(n+1)*v+(M-1),w=(n+1)*v+M,x=(n+1)*(v-1)+M;m.push(S,T,x),m.push(T,w,x)}}function d(){for(let v=0;v<=t;v++)for(let M=0;M<=n;M++)l.x=v/t,l.y=M/n,u.push(l.x,l.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new ta(new rr[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}function Gn(e){let t={};for(let i in e){t[i]={};for(let n in e[i]){let r=e[i][n];if(Nu(r))if(r.isRenderTargetTexture)ge("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][n]=null;else t[i][n]=r.clone();else if(Array.isArray(r))if(Nu(r[0])){let s=[];for(let o=0,a=r.length;o<a;o++)s[o]=r[o].clone();t[i][n]=s}else t[i][n]=r.slice();else t[i][n]=r}}return t}function Ni(e){let t={};for(let i=0;i<e.length;i++){let n=Gn(e[i]);for(let r in n)t[r]=n[r]}return t}function Nu(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function Uu(e){let t=[];for(let i=0;i<e.length;i++)t.push(e[i].clone());return t}function _l(e){let t=e.getRenderTarget();if(t===null)return e.outputColorSpace;if(t.isXRRenderTarget===!0)return t.texture.colorSpace;return it.workingColorSpace}var zc={clone:Gn,merge:Ni};var Fu=`
void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}
`;var Bu=`
void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}
`;class Ui extends Ht{constructor(e){super();if(this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Fu,this.fragmentShader=Bu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0)this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Gn(e.uniforms),this.uniformsGroups=Uu(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let s=this.uniforms[n].value;if(s&&s.isTexture)t.uniforms[n]={type:"t",value:s.toJSON(e).uuid};else if(s&&s.isColor)t.uniforms[n]={type:"c",value:s.getHex()};else if(s&&s.isVector2)t.uniforms[n]={type:"v2",value:s.toArray()};else if(s&&s.isVector3)t.uniforms[n]={type:"v3",value:s.toArray()};else if(s&&s.isVector4)t.uniforms[n]={type:"v4",value:s.toArray()};else if(s&&s.isMatrix3)t.uniforms[n]={type:"m3",value:s.toArray()};else if(s&&s.isMatrix4)t.uniforms[n]={type:"m4",value:s.toArray()};else t.uniforms[n]={value:s}}if(Object.keys(this.defines).length>0)t.defines=this.defines;t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let n in this.extensions)if(this.extensions[n]===!0)i[n]=!0;if(Object.keys(i).length>0)t.extensions=i;return t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let i in e.uniforms){let n=e.uniforms[i];switch(this.uniforms[i]={},n.type){case"t":this.uniforms[i].value=t[n.value]||null;break;case"c":this.uniforms[i].value=new xe().setHex(n.value);break;case"v2":this.uniforms[i].value=new Z().fromArray(n.value);break;case"v3":this.uniforms[i].value=new C().fromArray(n.value);break;case"v4":this.uniforms[i].value=new Mt().fromArray(n.value);break;case"m3":this.uniforms[i].value=new qe().fromArray(n.value);break;case"m4":this.uniforms[i].value=new Je().fromArray(n.value);break;default:this.uniforms[i].value=n.value}}if(e.defines!==void 0)this.defines=e.defines;if(e.vertexShader!==void 0)this.vertexShader=e.vertexShader;if(e.fragmentShader!==void 0)this.fragmentShader=e.fragmentShader;if(e.glslVersion!==void 0)this.glslVersion=e.glslVersion;if(e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];if(e.lights!==void 0)this.lights=e.lights;if(e.clipping!==void 0)this.clipping=e.clipping;return this}}class ia extends Ui{constructor(e){super(e);this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class dt extends Ht{constructor(e){super();this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new xe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=pn,this.normalScale=new Z(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Ps extends dt{constructor(e){super();this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Z(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Qe(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+0.4*t)/(1-0.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new xe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new xe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new xe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){if(this._anisotropy>0!==e>0)this.version++;this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){if(this._clearcoat>0!==e>0)this.version++;this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){if(this._diffuseRoughness>0!==e>0)this.version++;this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){if(this._iridescence>0!==e>0)this.version++;this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){if(this._dispersion>0!==e>0)this.version++;this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){if(this._retroreflectivity>0!==e>0)this.version++;this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){if(this._sheen>0!==e>0)this.version++;this._sheen=e}get transmission(){return this._transmission}set transmission(e){if(this._transmission>0!==e>0)this.version++;this._transmission=e}get iridescenceThicknessRange(){return on('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){on('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class na extends Ht{constructor(e){super();this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=pn,this.normalScale=new Z(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pi,this.combine=xr,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=0.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ra extends Ht{constructor(e){super();this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Vh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class sa extends Ht{constructor(e){super();this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function sr(e,t){if(!e||e.constructor===t)return e;if(typeof t.BYTES_PER_ELEMENT==="number")return new t(e);return Array.prototype.slice.call(e)}function Ls(e){return e!==void 0&&e.inTangents!==void 0&&e.outTangents!==void 0}class cn{constructor(e,t,i,n){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=n!==void 0?n:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,n=t[i],r=t[i-1];i:{e:{let s;t:{n:if(!(e<n)){for(let o=i+2;;){if(n===void 0){if(e<r)break n;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=n,n=t[++i],e<n)break e}s=t.length;break t}if(!(e>=r)){let o=t[1];if(e<o)i=2,r=o;for(let a=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===a)break;if(n=r,r=t[--i-1],e>=r)break e}s=i,i=0;break t}break i}while(i<s){let o=i+s>>>1;if(e<t[o])s=o;else i=o+1}if(n=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,n)}return this.interpolate_(i,r,e,n)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,n=this.valueSize,r=e*n;for(let s=0;s!==n;++s)t[s]=i[r+s];return t}interpolate_(){throw Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}}class yl extends cn{constructor(e,t,i,n){super(e,t,i,n);this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ba,endingEnd:Ba}}intervalChanged_(e,t,i){let n=this.parameterPositions,r=e-2,s=e+1,o=n[r],a=n[s];if(o===void 0)switch(this.getSettings_().endingStart){case Oa:r=e,o=2*t-i;break;case za:r=n.length-2,o=t+n[r]-n[r+1];break;default:r=e,o=i}if(a===void 0)switch(this.getSettings_().endingEnd){case Oa:s=e,a=2*i-t;break;case za:s=1,a=i+n[1]-n[0];break;default:s=e-1,a=t}let l=(i-t)*0.5,c=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(a-i),this._offsetPrev=r*c,this._offsetNext=s*c}interpolate_(e,t,i,n){let r=this.resultBuffer,s=this.sampleValues,o=this.valueSize,a=e*o,l=a-o,c=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,u=this._weightNext,m=(i-t)/(n-t),g=m*m,_=g*m,p=-f*_+2*f*g-f*m,d=(1+f)*_+(-1.5-2*f)*g+(-0.5+f)*m+1,v=(-1-u)*_+(1.5+u)*g+0.5*m,M=u*_-u*g;for(let S=0;S!==o;++S)r[S]=p*s[c+S]+d*s[l+S]+v*s[a+S]+M*s[h+S];return r}}class oa extends cn{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){let r=this.resultBuffer,s=this.sampleValues,o=this.valueSize,a=e*o,l=a-o,c=(i-t)/(n-t),h=1-c;for(let f=0;f!==o;++f)r[f]=s[l+f]*h+s[a+f]*c;return r}}class vl extends cn{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e){return this.copySampleValue_(e-1)}}class Ml extends cn{interpolate_(e,t,i,n){let r=this.resultBuffer,s=this.sampleValues,o=this.valueSize,a=e*o,l=a-o,c=this.inTangents,h=this.outTangents;if(!c||!h){let m=(i-t)/(n-t),g=1-m;for(let _=0;_!==o;++_)r[_]=s[l+_]*g+s[a+_]*m;return r}let f=o*2,u=e-1;for(let m=0;m!==o;++m){let g=s[l+m],_=s[a+m],p=u*f+m*2,d=h[p],v=h[p+1],M=e*f+m*2,S=c[M],T=c[M+1],w=pg(i,t,d,S,n);r[m]=zu(w,g,v,T,_)}return r}}function zu(e,t,i,n,r){let s=1-e;return s*s*s*t+3*s*s*e*i+3*s*e*e*n+e*e*e*r}function dg(e,t,i,n,r){let s=1-e;return 3*s*s*(i-t)+6*s*e*(n-i)+3*e*e*(r-n)}function pg(e,t,i,n,r){let s=(e-t)/(r-t);for(let o=0;o<8;o++){let a=zu(s,t,i,n,r)-e;if(Math.abs(a)<0.0000000001)break;let l=dg(s,t,i,n,r);if(Math.abs(l)<0.0000000001)break;s=Math.max(0,Math.min(1,s-a/l))}return s}class ai{constructor(e,t,i,n){if(e===void 0)throw Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=sr(t,this.TimeBufferType),this.values=sr(i,this.ValueBufferType),this.setInterpolation(n||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:sr(e.times,Array),values:sr(e.values,Array)};let n=e.getInterpolation();if(n!==e.DefaultInterpolation)i.interpolation=n;if(Ls(e.settings))i.settings={inTangents:sr(e.settings.inTangents,Array),outTangents:sr(e.settings.outTangents,Array)}}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new vl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new oa(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new yl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Ml(this.times,this.values,this.getValueSize(),e);if(this.settings)t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents;return t}setInterpolation(e){let t;switch(e){case Mr:t=this.InterpolantFactoryMethodDiscrete;break;case Ua:t=this.InterpolantFactoryMethodLinear;break;case Fa:t=this.InterpolantFactoryMethodSmooth;break;case ec:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(i);return ge("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Mr;case this.InterpolantFactoryMethodLinear:return Ua;case this.InterpolantFactoryMethodSmooth:return Fa;case this.InterpolantFactoryMethodBezier:return ec}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]+=e;if(Ls(this.settings))Gu(this.settings.inTangents,e),Gu(this.settings.outTangents,e)}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]*=e;if(Ls(this.settings))Hu(this.settings.inTangents,e),Hu(this.settings.outTangents,e)}return this}trim(e,t){let i=this.times,n=i.length,r=0,s=n-1;while(r!==n&&i[r]<e)++r;while(s!==-1&&i[s]>t)--s;if(++s,r!==0||s!==n){if(r>=s)s=Math.max(s,1),r=s-1;let o=this.getValueSize();this.times=i.slice(r,s),this.values=this.values.slice(r*o,s*o)}return this}validate(){let e=!0,t=this.getValueSize();if(t-Math.floor(t)!==0)Fe("KeyframeTrack: Invalid value size in track.",this),e=!1;let i=this.times,n=this.values,r=i.length;if(r===0)Fe("KeyframeTrack: Track is empty.",this),e=!1;let s=null;for(let o=0;o!==r;o++){let a=i[o];if(typeof a==="number"&&isNaN(a)){Fe("KeyframeTrack: Time is not a valid number.",this,o,a),e=!1;break}if(s!==null&&s>a){Fe("KeyframeTrack: Out of order keys.",this,o,a,s),e=!1;break}s=a}if(n!==void 0){if(ic(n))for(let o=0,a=n.length;o!==a;++o){let l=n[o];if(isNaN(l)){Fe("KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),n=this.getInterpolation()===Fa,r=e.length-1,s=1;for(let o=1;o<r;++o){let a=!1,l=e[o],c=e[o+1];if(l!==c&&(o!==1||l!==e[0]))if(!n){let h=o*i,f=h-i,u=h+i;for(let m=0;m!==i;++m){let g=t[h+m];if(g!==t[f+m]||g!==t[u+m]){a=!0;break}}}else a=!0;if(a){if(o!==s){e[s]=e[o];let h=o*i,f=s*i;for(let u=0;u!==i;++u)t[f+u]=t[h+u]}++s}}if(r>0){e[s]=e[r];for(let o=r*i,a=s*i,l=0;l!==i;++l)t[a+l]=t[o+l];++s}if(s!==e.length)this.times=e.slice(0,s),this.values=t.slice(0,s*i);else this.times=e,this.values=t;return this}clone(){let e=this.times.slice(),t=this.values.slice(),n=new this.constructor(this.name,e,t);if(n.createInterpolant=this.createInterpolant,Ls(this.settings))n.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()};return n}}function Gu(e,t){for(let i=0,n=e.length;i!==n;i+=2)e[i]+=t}function Hu(e,t){for(let i=0,n=e.length;i!==n;i+=2)e[i]*=t}ai.prototype.ValueTypeName="";ai.prototype.TimeBufferType=Float32Array;ai.prototype.ValueBufferType=Float32Array;ai.prototype.DefaultInterpolation=Ua;class or extends ai{constructor(e,t,i){super(e,t,i)}}or.prototype.ValueTypeName="bool";or.prototype.ValueBufferType=Array;or.prototype.DefaultInterpolation=Mr;or.prototype.InterpolantFactoryMethodLinear=void 0;or.prototype.InterpolantFactoryMethodSmooth=void 0;class Sl extends ai{constructor(e,t,i,n){super(e,t,i,n)}}Sl.prototype.ValueTypeName="color";class bl extends ai{constructor(e,t,i,n){super(e,t,i,n)}}bl.prototype.ValueTypeName="number";class El extends cn{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){let r=this.resultBuffer,s=this.sampleValues,o=this.valueSize,a=(i-t)/(n-t),l=e*o;for(let c=l+o;l!==c;l+=4)Qt.slerpFlat(r,0,s,l-o,s,l,a);return r}}class aa extends ai{constructor(e,t,i,n){super(e,t,i,n)}InterpolantFactoryMethodLinear(e){return new El(this.times,this.values,this.getValueSize(),e)}}aa.prototype.ValueTypeName="quaternion";aa.prototype.InterpolantFactoryMethodSmooth=void 0;class ar extends ai{constructor(e,t,i){super(e,t,i)}}ar.prototype.ValueTypeName="string";ar.prototype.ValueBufferType=Array;ar.prototype.DefaultInterpolation=Mr;ar.prototype.InterpolantFactoryMethodLinear=void 0;ar.prototype.InterpolantFactoryMethodSmooth=void 0;class Tl extends ai{constructor(e,t,i,n){super(e,t,i,n)}}Tl.prototype.ValueTypeName="vector";var Or={enabled:!1,files:{},add:function(e,t){if(this.enabled===!1)return;if(Vu(e))return;this.files[e]=t},get:function(e){if(this.enabled===!1)return;if(Vu(e))return;return this.files[e]},remove:function(e){delete this.files[e]},clear:function(){this.files={}}};function Vu(e){try{let t=e.slice(e.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch(t){return!1}}class wl{constructor(e,t,i){let n=this,r=!1,s=0,o=0,a=void 0,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(c){if(o++,r===!1){if(n.onStart!==void 0)n.onStart(c,s,o)}r=!0},this.itemEnd=function(c){if(s++,n.onProgress!==void 0)n.onProgress(c,s,o);if(s===o){if(r=!1,n.onLoad!==void 0)n.onLoad()}},this.itemError=function(c){if(n.onError!==void 0)n.onError(c)},this.resolveURL=function(c){if(c=c.normalize("NFC"),a)return a(c);return c},this.setURLModifier=function(c){return a=c,this},this.addHandler=function(c,h){return l.push(c,h),this},this.removeHandler=function(c){let h=l.indexOf(c);if(h!==-1)l.splice(h,2);return this},this.getHandler=function(c){for(let h=0,f=l.length;h<f;h+=2){let u=l[h],m=l[h+1];if(u.global)u.lastIndex=0;if(u.test(c))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){if(!this._abortController)this._abortController=new AbortController;return this._abortController}}var Gc=new wl;class bi{constructor(e){if(this.manager=e!==void 0?e:Gc,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(n,r){i.load(e,n,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}}bi.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ds=new WeakMap;class Ns extends bi{constructor(e){super(e)}load(e,t,i,n){if(this.path!==void 0)e=this.path+e;e=this.manager.resolveURL(e);let r=this,s=Or.get(`image:${e}`);if(s!==void 0){if(s.complete===!0)r.manager.itemStart(e),setTimeout(function(){if(t)t(s);r.manager.itemEnd(e)},0);else{let h=Ds.get(s);if(h===void 0)h=[],Ds.set(s,h);h.push({onLoad:t,onError:n})}return s}let o=Jn("img");function a(){if(c(),t)t(this);let h=Ds.get(this)||[];for(let f=0;f<h.length;f++){let u=h[f];if(u.onLoad)u.onLoad(this)}Ds.delete(this),r.manager.itemEnd(e)}function l(h){if(c(),n)n(h);Or.remove(`image:${e}`);let f=Ds.get(this)||[];for(let u=0;u<f.length;u++){let m=f[u];if(m.onError)m.onError(h)}Ds.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function c(){o.removeEventListener("load",a,!1),o.removeEventListener("error",l,!1)}if(o.addEventListener("load",a,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"){if(this.crossOrigin!==void 0)o.crossOrigin=this.crossOrigin}return Or.add(`image:${e}`,o),r.manager.itemStart(e),o.fetchPriority=this.priority,o.src=e,o}}class Us extends bi{constructor(e){super(e)}load(e,t,i,n){let r=new vt,s=new Ns(this.manager);return s.setPriority(this.priority),s.setCache(this.cache),s.setCrossOrigin(this.crossOrigin),s.setPath(this.path),s.load(e,function(o){if(r.image=o,r.needsUpdate=!0,t!==void 0)t(r)},i,n),r}}class hn extends lt{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super();this.isLight=!0,this.type="Light",this.color=new xe(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class la extends hn{constructor(e,t,i){super(e,i);this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(lt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new xe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}var kc=new Je,Wu=new C,Xu=new C;class Fs{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Z(512,512),this.mapType=Jt,this.map=null,this.mapPass=null,this.matrix=new Je,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ln,this._frameExtents=new Z(1,1),this._viewportCount=1,this._viewports=[new Mt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Wu.setFromMatrixPosition(e.matrixWorld),t.position.copy(Wu),Xu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Xu),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,n){kc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(kc,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,s=n?n.z/r.x:1,o=n?n.w/r.y:1,a=n?n.x/r.x:0,l=n?n.y/r.y:0;if(e.coordinateSystem===bn||e.reversedDepth)t.set(0.5*s,0,0,0.5*s+a,0,0.5*o,0,0.5*o+l,0,0,1,0,0,0,0,1);else t.set(0.5*s,0,0,0.5*s+a,0,0.5*o,0,0.5*o+l,0,0,0.5,0.5,0,0,0,1);t.multiply(kc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){if(this.map)this.map.dispose();if(this.mapPass)this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}var Al=new C,Rl=new Qt,An=new C;class Gr extends lt{constructor(){super();this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Je,this.projectionMatrix=new Je,this.projectionMatrixInverse=new Je,this.coordinateSystem=xi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){if(super.updateMatrixWorld(e),this.matrixWorld.decompose(Al,Rl,An),An.x===1&&An.y===1&&An.z===1)this.matrixWorldInverse.copy(this.matrixWorld).invert();else this.matrixWorldInverse.compose(Al,Rl,An.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){if(super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(Al,Rl,An),An.x===1&&An.y===1&&An.z===1)this.matrixWorldInverse.copy(this.matrixWorld).invert();else this.matrixWorldInverse.compose(Al,Rl,An.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}var lr=new C,qu=new Z,Yu=new Z;class Yt extends Gr{constructor(e=50,t=1,i=0.1,n=2000){super();this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=0.5*this.getFilmHeight()/e;this.fov=as*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(os*0.5*this.fov);return 0.5*this.getFilmHeight()/e}getEffectiveFOV(){return as*2*Math.atan(Math.tan(os*0.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){lr.set(-1,-1,0.5).applyMatrix4(this.projectionMatrixInverse),t.set(lr.x,lr.y).multiplyScalar(-e/lr.z),lr.set(1,1,0.5).applyMatrix4(this.projectionMatrixInverse),i.set(lr.x,lr.y).multiplyScalar(-e/lr.z)}getViewSize(e,t){return this.getViewBounds(e,qu,Yu),t.subVectors(Yu,qu)}setViewOffset(e,t,i,n,r,s){if(this.aspect=e/t,this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(os*0.5*this.fov)/this.zoom,i=2*t,n=this.aspect*i,r=-0.5*n,s=this.view;if(this.view!==null&&this.view.enabled){let{fullWidth:a,fullHeight:l}=s;r+=s.offsetX*n/a,t-=s.offsetY*i/l,n*=s.width/a,i*=s.height/l}let o=this.filmOffset;if(o!==0)r+=e*o/this.getFilmWidth();this.projectionMatrix.makePerspective(r,r+n,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);if(t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null)t.object.view=Object.assign({},this.view);return t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Vc extends Fs{constructor(){super(new Yt(90,1,0.5,500));this.isPointLightShadow=!0}}class Hn extends hn{constructor(e,t,i=0,n=2){super(e,t);this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=n,this.shadow=new Vc}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class kn extends Gr{constructor(e=-1,t=1,i=1,n=-1,r=0.1,s=2000){super();this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=n,this.near=r,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,n,r,s){if(this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2,r=i-e,s=i+e,o=n+t,a=n-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,s=r+l*this.view.width,o-=c*this.view.offsetY,a=o-c*this.view.height}this.projectionMatrix.makeOrthographic(r,s,o,a,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);if(t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null)t.object.view=Object.assign({},this.view);return t}}class ca extends hn{constructor(e,t){super(e,t);this.isAmbientLight=!0,this.type="AmbientLight"}}var Bs=-90,Os=1;class Hr extends lt{constructor(e,t,i){super();this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let n=new Yt(Bs,Os,e,t);n.layers=this.layers,this.add(n);let r=new Yt(Bs,Os,e,t);r.layers=this.layers,this.add(r);let s=new Yt(Bs,Os,e,t);s.layers=this.layers,this.add(s);let o=new Yt(Bs,Os,e,t);o.layers=this.layers,this.add(o);let a=new Yt(Bs,Os,e,t);a.layers=this.layers,this.add(a);let l=new Yt(Bs,Os,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,n,r,s,o,a]=t;for(let l of t)this.remove(l);if(e===xi)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),a.up.set(0,1,0),a.lookAt(0,0,-1);else if(e===bn)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),a.up.set(0,-1,0),a.lookAt(0,0,-1);else throw Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){if(this.parent===null)this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:n}=this;if(this.coordinateSystem!==e.coordinateSystem)this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem();let[r,s,o,a,l,c]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),u=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;let g=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let _=!1;if(e.isWebGLRenderer===!0)_=e.state.buffers.depth.getReversed();else _=e.reversedDepthBuffer;if(e.setRenderTarget(i,0,n),_&&e.autoClear===!1)e.clearDepth();if(e.render(t,r),e.setRenderTarget(i,1,n),_&&e.autoClear===!1)e.clearDepth();if(e.render(t,s),e.setRenderTarget(i,2,n),_&&e.autoClear===!1)e.clearDepth();if(e.render(t,o),e.setRenderTarget(i,3,n),_&&e.autoClear===!1)e.clearDepth();if(e.render(t,a),e.setRenderTarget(i,4,n),_&&e.autoClear===!1)e.clearDepth();if(e.render(t,l),i.texture.mipmapsAutoUpdate=g,e.setRenderTarget(i,5,n),_&&e.autoClear===!1)e.clearDepth();e.render(t,c),e.setRenderTarget(h,f,u),e.xr.enabled=m,i.texture.needsPMREMUpdate=!0}}class Cl extends Yt{constructor(e=[]){super();this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}}var Wc="\\[\\]\\.:\\/",Ug=new RegExp("["+Wc+"]","g"),Xc="[^"+Wc+"]",Fg="[^"+Wc.replace("\\.","")+"]",Bg=/((?:WC+[\/:])*)/.source.replace("WC",Xc),Og=/(WCOD+)?/.source.replace("WCOD",Fg),zg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Xc),Gg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Xc),Hg=new RegExp("^"+Bg+Og+zg+Gg+"$"),kg=["material","materials","bones","map"];class Ku{constructor(e,t,i){let n=i||wt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,n)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,n=this._bindings[i];if(n!==void 0)n.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let n=this._targetGroup.nCachedObjects_,r=i.length;n!==r;++n)i[n].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}}class wt{constructor(e,t,i){this.path=t,this.parsedPath=i||wt.parseTrackName(t),this.node=wt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){if(!(e&&e.isAnimationObjectGroup))return new wt(e,t,i);else return new wt.Composite(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Ug,"")}static parseTrackName(e){let t=Hg.exec(e);if(t===null)throw Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},n=i.nodeName&&i.nodeName.lastIndexOf(".");if(n!==void 0&&n!==-1){let r=i.nodeName.substring(n+1);if(kg.indexOf(r)!==-1)i.nodeName=i.nodeName.substring(0,n),i.objectName=r}if(i.propertyName===null||i.propertyName.length===0)throw Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let s=0;s<r.length;s++){let o=r[s];if(o.name===t||o.uuid===t)return o;let a=i(o.children);if(a)return a}return null},n=i(e.children);if(n)return n}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)e[t++]=i[n]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,{objectName:i,propertyName:n,propertyIndex:r}=t;if(!e)e=wt.findNode(this.rootNode,t.nodeName),this.node=e;if(this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){ge("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let l=t.objectIndex;switch(i){case"materials":if(!e.material){Fe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Fe("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Fe("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let c=0;c<e.length;c++)if(e[c].name===l){l=c;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Fe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Fe("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){Fe("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(l!==void 0){if(e[l]===void 0){Fe("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let s=e[n];if(s===void 0){let l=t.nodeName;Fe("PropertyBinding: Trying to update property for track: "+l+"."+n+" but it wasn't found.",e);return}let o=this.Versioning.None;if(this.targetObject=e,e.isMaterial===!0)o=this.Versioning.NeedsUpdate;else if(e.isObject3D===!0)o=this.Versioning.MatrixWorldNeedsUpdate;let a=this.BindingType.Direct;if(r!==void 0){if(n==="morphTargetInfluences"){if(!e.geometry){Fe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Fe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}if(e.morphTargetDictionary[r]!==void 0)r=e.morphTargetDictionary[r]}a=this.BindingType.ArrayElement,this.resolvedProperty=s,this.propertyIndex=r}else if(s.fromArray!==void 0&&s.toArray!==void 0)a=this.BindingType.HasFromToArray,this.resolvedProperty=s;else if(Array.isArray(s))a=this.BindingType.EntireArray,this.resolvedProperty=s;else this.propertyName=n;this.getValue=this.GetterByBindingType[a],this.setValue=this.SetterByBindingTypeAndVersioning[a][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}wt.Composite=Ku;wt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};wt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};wt.prototype.GetterByBindingType=[wt.prototype._getValue_direct,wt.prototype._getValue_array,wt.prototype._getValue_arrayElement,wt.prototype._getValue_toArray];wt.prototype.SetterByBindingTypeAndVersioning=[[wt.prototype._setValue_direct,wt.prototype._setValue_direct_setNeedsUpdate,wt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[wt.prototype._setValue_array,wt.prototype._setValue_array_setNeedsUpdate,wt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[wt.prototype._setValue_arrayElement,wt.prototype._setValue_arrayElement_setNeedsUpdate,wt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[wt.prototype._setValue_fromArray,wt.prototype._setValue_fromArray_setNeedsUpdate,wt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var IP=new Float32Array(1);class Il{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,ge("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=performance.now();e=(t-this.oldTime)/1000,this.oldTime=t,this.elapsedTime+=e}return e}}class $u{static{this.prototype.isMatrix2=!0}constructor(e,t,i,n){if(this.elements=[1,0,0,1],e!==void 0)this.set(e,t,i,n)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,n){let r=this.elements;return r[0]=e,r[2]=t,r[1]=i,r[3]=n,this}}function qc(e,t,i,n){let r=qg(n);switch(i){case Da:return e*t;case Qr:return e*t/r.components*r.byteLength;case _r:return e*t/r.components*r.byteLength;case Ji:return e*t*2/r.components*r.byteLength;case jr:return e*t*2/r.components*r.byteLength;case Na:return e*t*3/r.components*r.byteLength;case gi:return e*t*4/r.components*r.byteLength;case es:return e*t*4/r.components*r.byteLength;case ts:case is:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case ns:case rs:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case ro:case oo:return Math.max(e,16)*Math.max(t,8)/4;case no:case so:return Math.max(e,8)*Math.max(t,8)/2;case ao:case lo:case ho:case uo:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case co:case yr:case fo:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case po:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case mo:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case go:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case xo:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case _o:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case yo:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case vo:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case Mo:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case So:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case bo:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case Eo:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case To:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case wo:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case Ao:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case Ro:case Co:case Io:return Math.ceil(e/4)*Math.ceil(t/4)*16;case Po:case Lo:return Math.ceil(e/4)*Math.ceil(t/4)*8;case vr:case Do:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw Error(`Unable to determine texture byte length for ${i} format.`)}function qg(e){switch(e){case Jt:case Ca:return{byteLength:1,components:1};case Nn:case Ia:case mi:return{byteLength:2,components:1};case Kr:case $r:return{byteLength:2,components:4};case ri:case Jr:case Kt:return{byteLength:4,components:1};case Pa:case La:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}if(typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:qs}}));if(typeof window<"u")if(window.__THREE__)ge("WARNING: Multiple instances of Three.js being imported.");else window.__THREE__=qs;function Pl(){let e=null,t=!1,i=null,n=null;function r(s,o){n=e.requestAnimationFrame(r),i(s,o)}return{start:function(){if(t===!0)return;if(i===null)return;if(e===null)return;n=e.requestAnimationFrame(r),t=!0},stop:function(){if(e!==null)e.cancelAnimationFrame(n);t=!1},setAnimationLoop:function(s){i=s},setContext:function(s){e=s}}}function Qu(e){let t=new WeakMap;function i(a,l){let{array:c,usage:h}=a,f=c.byteLength,u=e.createBuffer();e.bindBuffer(l,u),e.bufferData(l,c,h),a.onUploadCallback();let m;if(c instanceof Float32Array)m=e.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)m=e.HALF_FLOAT;else if(c instanceof Uint16Array)if(a.isFloat16BufferAttribute)m=e.HALF_FLOAT;else m=e.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=e.SHORT;else if(c instanceof Uint32Array)m=e.UNSIGNED_INT;else if(c instanceof Int32Array)m=e.INT;else if(c instanceof Int8Array)m=e.BYTE;else if(c instanceof Uint8Array)m=e.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=e.UNSIGNED_BYTE;else throw Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function n(a,l,c){let{array:h,updateRanges:f}=l;if(e.bindBuffer(c,a),f.length===0)e.bufferSubData(c,0,h);else{f.sort((m,g)=>m.start-g.start);let u=0;for(let m=1;m<f.length;m++){let g=f[u],_=f[m];if(_.start<=g.start+g.count+1)g.count=Math.max(g.count,_.start+_.count-g.start);else++u,f[u]=_}f.length=u+1;for(let m=0,g=f.length;m<g;m++){let _=f[m];e.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){if(a.isInterleavedBufferAttribute)a=a.data;return t.get(a)}function s(a){if(a.isInterleavedBufferAttribute)a=a.data;let l=t.get(a);if(l)e.deleteBuffer(l.buffer),t.delete(a)}function o(a,l){if(a.isInterleavedBufferAttribute)a=a.data;if(a.isGLBufferAttribute){let h=t.get(a);if(!h||h.version<a.version)t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,i(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var ju=`
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
`;var nf=`
#ifdef USE_ALPHAMAP

	uniform sampler2D alphaMap;

#endif
`;var rf=`
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
`;var yf=`
#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )

	diffuseColor *= vColor;

#endif
`;var vf=`
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
`;var Ef=`

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
`;var Tf=`
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
`;var If=`

vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}

vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}

vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}

`;var Pf=`
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
`;var Bf=`
#ifdef USE_FOG

	varying float vFogDepth;

#endif
`;var Of=`
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
`;var Hf=`
#ifdef USE_LIGHTMAP

	uniform sampler2D lightMap;
	uniform float lightMapIntensity;

#endif
`;var kf=`
LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;
`;var Vf=`
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
`;var $f=`

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
`;var Qf=`
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
`;var nd=`
#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )

	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;

#endif
`;var rd=`
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
`;var yd=`
#ifndef FLAT_SHADED

	varying vec3 vNormal;

	#ifdef USE_TANGENT

		varying vec3 vTangent;
		varying vec3 vBitangent;

	#endif

#endif
`;var vd=`
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
`;var Ed=`
#ifdef USE_CLEARCOAT_NORMALMAP

	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;

	clearcoatNormal = normalize( tbn2 * clearcoatMapN );

#endif
`;var Td=`

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
`;var Id=`
vec4 mvPosition = vec4( transformed, 1.0 );

#ifdef USE_BATCHING

	mvPosition = batchingMatrix * mvPosition;

#endif

#ifdef USE_INSTANCING

	mvPosition = instanceMatrix * mvPosition;

#endif

mvPosition = modelViewMatrix * mvPosition;

gl_Position = projectionMatrix * mvPosition;
`;var Pd=`
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
`;var Bd=`

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


`;var Od=`
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
`;var Hd=`
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
`;var Vd=`
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
`;var $d=`
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
`;var Qd=`
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
`;var np=`
varying vec3 vWorldDirection;

#include <common>

void main() {

	vWorldDirection = transformDirection( position, modelMatrix );

	#include <begin_vertex>
	#include <project_vertex>

	gl_Position.z = gl_Position.w; // set z to camera.far

}
`,rp=`
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
`;var yp=`
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
`,vp=`
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
`,Ep=`
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
`;var Tp=`
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
`,Ip=`
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
`;var Pp=`
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
`;var st={alphahash_fragment:ju,alphahash_pars_fragment:ef,alphamap_fragment:tf,alphamap_pars_fragment:nf,alphatest_fragment:rf,alphatest_pars_fragment:sf,aomap_fragment:of,aomap_pars_fragment:af,batching_pars_vertex:lf,batching_vertex:cf,begin_vertex:hf,beginnormal_vertex:uf,bsdfs:ff,iridescence_fragment:df,bumpmap_pars_fragment:pf,clipping_planes_fragment:mf,clipping_planes_pars_fragment:gf,clipping_planes_pars_vertex:xf,clipping_planes_vertex:_f,color_fragment:yf,color_pars_fragment:vf,color_pars_vertex:Mf,color_vertex:Sf,common:bf,defaultnormal_vertex:Ef,displacementmap_pars_vertex:Tf,displacementmap_vertex:wf,emissivemap_fragment:Af,emissivemap_pars_fragment:Rf,colorspace_fragment:Cf,colorspace_pars_fragment:If,envmap_fragment:Pf,envmap_common_pars_fragment:Lf,envmap_pars_fragment:Df,envmap_pars_vertex:Nf,envmap_physical_pars_fragment:Xf,envmap_vertex:Uf,fog_vertex:Ff,fog_pars_vertex:Bf,fog_fragment:Of,fog_pars_fragment:zf,gradientmap_pars_fragment:Gf,lightmap_pars_fragment:Hf,lights_lambert_fragment:kf,lights_lambert_pars_fragment:Vf,lights_pars_begin:Wf,lights_toon_fragment:qf,lights_toon_pars_fragment:Yf,lights_phong_fragment:Zf,lights_phong_pars_fragment:Jf,lights_physical_fragment:Kf,lights_physical_pars_fragment:$f,lights_fragment_begin:Qf,lights_fragment_maps:jf,lights_fragment_end:ed,lightprobes_pars_fragment:td,logdepthbuf_fragment:id,logdepthbuf_pars_fragment:nd,logdepthbuf_pars_vertex:rd,logdepthbuf_vertex:sd,map_fragment:od,map_pars_fragment:ad,map_particle_fragment:ld,map_particle_pars_fragment:cd,metalnessmap_fragment:hd,metalnessmap_pars_fragment:ud,morphinstance_vertex:fd,morphcolor_vertex:dd,morphnormal_vertex:pd,morphtarget_pars_vertex:md,morphtarget_vertex:gd,normal_fragment_begin:xd,normal_fragment_maps:_d,normal_pars_fragment:yd,normal_pars_vertex:vd,normal_vertex:Md,normalmap_pars_fragment:Sd,clearcoat_normal_fragment_begin:bd,clearcoat_normal_fragment_maps:Ed,clearcoat_pars_fragment:Td,iridescence_pars_fragment:wd,opaque_fragment:Ad,packing:Rd,premultiplied_alpha_fragment:Cd,project_vertex:Id,dithering_fragment:Pd,dithering_pars_fragment:Ld,roughnessmap_fragment:Dd,roughnessmap_pars_fragment:Nd,shadowmap_pars_fragment:Ud,shadowmap_pars_vertex:Fd,shadowmap_vertex:Bd,shadowmask_pars_fragment:Od,skinbase_vertex:zd,skinning_pars_vertex:Gd,skinning_vertex:Hd,skinnormal_vertex:kd,specularmap_fragment:Vd,specularmap_pars_fragment:Wd,tonemapping_fragment:Xd,tonemapping_pars_fragment:qd,transmission_fragment:Yd,transmission_pars_fragment:Zd,uv_pars_fragment:Jd,uv_pars_vertex:Kd,uv_vertex:$d,worldpos_vertex:Qd,background_vert:jd,background_frag:ep,backgroundCube_vert:tp,backgroundCube_frag:ip,cube_vert:np,cube_frag:rp,depth_vert:sp,depth_frag:op,distance_vert:ap,distance_frag:lp,equirect_vert:cp,equirect_frag:hp,linedashed_vert:up,linedashed_frag:fp,meshbasic_vert:dp,meshbasic_frag:pp,meshlambert_vert:mp,meshlambert_frag:gp,meshmatcap_vert:xp,meshmatcap_frag:_p,meshnormal_vert:yp,meshnormal_frag:vp,meshphong_vert:Mp,meshphong_frag:Sp,meshphysical_vert:bp,meshphysical_frag:Ep,meshtoon_vert:Tp,meshtoon_frag:wp,points_vert:Ap,points_frag:Rp,shadow_vert:Cp,shadow_frag:Ip,sprite_vert:Pp,sprite_frag:Lp};var Re={common:{diffuse:{value:new xe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qe}},envmap:{envMap:{value:null},envMapRotation:{value:new qe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:0.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qe},normalScale:{value:new Z(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:0.00025},fogNear:{value:1},fogFar:{value:2000},fogColor:{value:new xe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new xe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0},uvTransform:{value:new qe}},sprite:{diffuse:{value:new xe(16777215)},opacity:{value:1},center:{value:new Z(0.5,0.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}}};var tn={basic:{uniforms:Ni([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.fog]),vertexShader:st.meshbasic_vert,fragmentShader:st.meshbasic_frag},lambert:{uniforms:Ni([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new xe(0)},envMapIntensity:{value:1}}]),vertexShader:st.meshlambert_vert,fragmentShader:st.meshlambert_frag},phong:{uniforms:Ni([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new xe(0)},specular:{value:new xe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:st.meshphong_vert,fragmentShader:st.meshphong_frag},standard:{uniforms:Ni([Re.common,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.roughnessmap,Re.metalnessmap,Re.fog,Re.lights,{emissive:{value:new xe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:st.meshphysical_vert,fragmentShader:st.meshphysical_frag},toon:{uniforms:Ni([Re.common,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.gradientmap,Re.fog,Re.lights,{emissive:{value:new xe(0)}}]),vertexShader:st.meshtoon_vert,fragmentShader:st.meshtoon_frag},matcap:{uniforms:Ni([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,{matcap:{value:null}}]),vertexShader:st.meshmatcap_vert,fragmentShader:st.meshmatcap_frag},points:{uniforms:Ni([Re.points,Re.fog]),vertexShader:st.points_vert,fragmentShader:st.points_frag},dashed:{uniforms:Ni([Re.common,Re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:st.linedashed_vert,fragmentShader:st.linedashed_frag},depth:{uniforms:Ni([Re.common,Re.displacementmap]),vertexShader:st.depth_vert,fragmentShader:st.depth_frag},normal:{uniforms:Ni([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,{opacity:{value:1}}]),vertexShader:st.meshnormal_vert,fragmentShader:st.meshnormal_frag},sprite:{uniforms:Ni([Re.sprite,Re.fog]),vertexShader:st.sprite_vert,fragmentShader:st.sprite_frag},background:{uniforms:{uvTransform:{value:new qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:st.background_vert,fragmentShader:st.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new qe}},vertexShader:st.backgroundCube_vert,fragmentShader:st.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:st.cube_vert,fragmentShader:st.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:st.equirect_vert,fragmentShader:st.equirect_frag},distance:{uniforms:Ni([Re.common,Re.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1000}}]),vertexShader:st.distance_vert,fragmentShader:st.distance_frag},shadow:{uniforms:Ni([Re.lights,Re.fog,{color:{value:new xe(0)},opacity:{value:1}}]),vertexShader:st.shadow_vert,fragmentShader:st.shadow_frag}};tn.physical={uniforms:Ni([tn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qe},clearcoatNormalScale:{value:new Z(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qe},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new qe},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qe},sheen:{value:0},sheenColor:{value:new xe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qe},transmissionSamplerSize:{value:new Z},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qe},attenuationDistance:{value:0},attenuationColor:{value:new xe(0)},specularColor:{value:new xe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qe},anisotropyVector:{value:new Z},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qe}}]),vertexShader:st.meshphysical_vert,fragmentShader:st.meshphysical_frag};var Ll={r:0,b:0,g:0},ux=new Je,Dp=new qe;Dp.set(-1,0,0,0,1,0,0,0,1);function Np(e,t,i,n,r,s){let o=new xe(0),a=r===!0?0:1,l,c,h=null,f=0,u=null;function m(v){let M=v.isScene===!0?v.background:null;if(M&&M.isTexture){let S=v.backgroundBlurriness>0;M=t.get(M,S)}return M}function g(v){let M=!1,S=m(v);if(S===null)p(o,a);else if(S&&S.isColor)p(S,1),M=!0;let T=e.xr.getEnvironmentBlendMode();if(T==="additive")i.buffers.color.setClear(0,0,0,1,s);else if(T==="alpha-blend")i.buffers.color.setClear(0,0,0,0,s);if(e.autoClear||M)i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil)}function _(v,M){let S=m(M);if(S&&S.isCubeTexture){if(c===void 0)c=new ne(new Ft(1,1,1),new Ui({name:"BackgroundCubeMaterial",uniforms:Gn(tn.backgroundCube.uniforms),vertexShader:tn.backgroundCube.vertexShader,fragmentShader:tn.backgroundCube.fragmentShader,side:Lt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(T,w,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c);if(c.material.uniforms.envMap.value=S,c.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(ux.makeRotationFromEuler(M.backgroundRotation)).transpose(),S.isRenderTargetTexture===!1)c.material.uniforms.backgroundRotation.value.premultiply(Dp);if(c.material.toneMapped=it.getTransfer(S.colorSpace)!==xt,h!==S||f!==S.version||u!==e.toneMapping)c.material.needsUpdate=!0,h=S,f=S.version,u=e.toneMapping;c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)}else if(S&&S.isTexture){if(l===void 0)l=new ne(new Dt(2,2),new Ui({name:"BackgroundMaterial",uniforms:Gn(tn.background.uniforms),vertexShader:tn.background.vertexShader,fragmentShader:tn.background.fragmentShader,side:nn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l);if(l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=it.getTransfer(S.colorSpace)!==xt,S.matrixAutoUpdate===!0)S.updateMatrix();if(l.material.uniforms.uvTransform.value.copy(S.matrix),h!==S||f!==S.version||u!==e.toneMapping)l.material.needsUpdate=!0,h=S,f=S.version,u=e.toneMapping;l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null)}}function p(v,M){v.getRGB(Ll,_l(e)),i.buffers.color.setClear(Ll.r,Ll.g,Ll.b,M,s)}function d(){if(c!==void 0)c.geometry.dispose(),c.material.dispose(),c=void 0;if(l!==void 0)l.geometry.dispose(),l.material.dispose(),l=void 0}return{getClearColor:function(){return o},setClearColor:function(v,M=1){o.set(v),a=M,p(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(v){a=v,p(o,a)},render:g,addToRenderList:_,dispose:d}}function Up(e,t){let i=e.getParameter(e.MAX_VERTEX_ATTRIBS),n={},r=u(null),s=r,o=!1;function a(P,O,ee,I,X){let L=!1,N=f(P,I,ee,O);if(s!==N)s=N,c(s.object);if(L=m(P,I,ee,X),L)g(P,I,ee,X);if(X!==null)t.update(X,e.ELEMENT_ARRAY_BUFFER);if(L||o){if(o=!1,S(P,O,ee,I),X!==null)e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(X).buffer)}}function l(){return e.createVertexArray()}function c(P){return e.bindVertexArray(P)}function h(P){return e.deleteVertexArray(P)}function f(P,O,ee,I){let X=I.wireframe===!0,L=n[O.id];if(L===void 0)L={},n[O.id]=L;let N=P.isInstancedMesh===!0?P.id:0,Q=L[N];if(Q===void 0)Q={},L[N]=Q;let z=Q[ee.id];if(z===void 0)z={},Q[ee.id]=z;let W=z[X];if(W===void 0)W=u(l()),z[X]=W;return W}function u(P){let O=[],ee=[],I=[];for(let X=0;X<i;X++)O[X]=0,ee[X]=0,I[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:ee,attributeDivisors:I,object:P,attributes:{},index:null}}function m(P,O,ee,I){let X=s.attributes,L=O.attributes,N=0,Q=ee.getAttributes();for(let z in Q)if(Q[z].location>=0){let Y=X[z],fe=L[z];if(fe===void 0){if(z==="instanceMatrix"&&P.instanceMatrix)fe=P.instanceMatrix;if(z==="instanceColor"&&P.instanceColor)fe=P.instanceColor}if(Y===void 0)return!0;if(Y.attribute!==fe)return!0;if(fe&&Y.data!==fe.data)return!0;N++}if(s.attributesNum!==N)return!0;if(s.index!==I)return!0;return!1}function g(P,O,ee,I){let X={},L=O.attributes,N=0,Q=ee.getAttributes();for(let z in Q)if(Q[z].location>=0){let Y=L[z];if(Y===void 0){if(z==="instanceMatrix"&&P.instanceMatrix)Y=P.instanceMatrix;if(z==="instanceColor"&&P.instanceColor)Y=P.instanceColor}let fe={};if(fe.attribute=Y,Y&&Y.data)fe.data=Y.data;X[z]=fe,N++}s.attributes=X,s.attributesNum=N,s.index=I}function _(){let P=s.newAttributes;for(let O=0,ee=P.length;O<ee;O++)P[O]=0}function p(P){d(P,0)}function d(P,O){let ee=s.newAttributes,I=s.enabledAttributes,X=s.attributeDivisors;if(ee[P]=1,I[P]===0)e.enableVertexAttribArray(P),I[P]=1;if(X[P]!==O)e.vertexAttribDivisor(P,O),X[P]=O}function v(){let P=s.newAttributes,O=s.enabledAttributes;for(let ee=0,I=O.length;ee<I;ee++)if(O[ee]!==P[ee])e.disableVertexAttribArray(ee),O[ee]=0}function M(P,O,ee,I,X,L,N){if(N===!0)e.vertexAttribIPointer(P,O,ee,X,L);else e.vertexAttribPointer(P,O,ee,I,X,L)}function S(P,O,ee,I){_();let X=I.attributes,L=ee.getAttributes(),N=O.defaultAttributeValues;for(let Q in L){let z=L[Q];if(z.location>=0){let W=X[Q];if(W===void 0){if(Q==="instanceMatrix"&&P.instanceMatrix)W=P.instanceMatrix;if(Q==="instanceColor"&&P.instanceColor)W=P.instanceColor}if(W!==void 0){let Y=W.normalized,fe=W.itemSize,k=t.get(W);if(k===void 0)continue;let{buffer:j,type:ye,bytesPerElement:ve}=k,Be=ye===e.INT||ye===e.UNSIGNED_INT||W.gpuType===Jr;if(W.isInterleavedBufferAttribute){let Ee=W.data,ht=Ee.isInterleavedBuffer===!0?Ee.stride:Ee.itemSize,De=W.offset;if(Ee.isInstancedInterleavedBuffer||Ee.isInstancedBufferAttribute){for(let Ne=0;Ne<z.locationSize;Ne++)d(z.location+Ne,Ee.meshPerAttribute);if(P.isInstancedMesh!==!0&&I._maxInstanceCount===void 0)I._maxInstanceCount=Ee.meshPerAttribute*Ee.count}else for(let Ne=0;Ne<z.locationSize;Ne++)p(z.location+Ne);e.bindBuffer(e.ARRAY_BUFFER,j);for(let Ne=0;Ne<z.locationSize;Ne++)M(z.location+Ne,fe/z.locationSize,ye,Y,ht*ve,(De+fe/z.locationSize*Ne)*ve,Be)}else{if(W.isInstancedBufferAttribute){for(let Ee=0;Ee<z.locationSize;Ee++)d(z.location+Ee,W.meshPerAttribute);if(P.isInstancedMesh!==!0&&I._maxInstanceCount===void 0)I._maxInstanceCount=W.meshPerAttribute*W.count}else for(let Ee=0;Ee<z.locationSize;Ee++)p(z.location+Ee);e.bindBuffer(e.ARRAY_BUFFER,j);for(let Ee=0;Ee<z.locationSize;Ee++)M(z.location+Ee,fe/z.locationSize,ye,Y,fe*ve,fe/z.locationSize*Ee*ve,Be)}}else if(N!==void 0){let Y=N[Q];if(Y!==void 0)switch(Y.length){case 2:e.vertexAttrib2fv(z.location,Y);break;case 3:e.vertexAttrib3fv(z.location,Y);break;case 4:e.vertexAttrib4fv(z.location,Y);break;default:e.vertexAttrib1fv(z.location,Y)}}}}v()}function T(){A();for(let P in n){let O=n[P];for(let ee in O){let I=O[ee];for(let X in I){let L=I[X];for(let N in L)h(L[N].object),delete L[N];delete I[X]}}delete n[P]}}function w(P){if(n[P.id]===void 0)return;let O=n[P.id];for(let ee in O){let I=O[ee];for(let X in I){let L=I[X];for(let N in L)h(L[N].object),delete L[N];delete I[X]}}delete n[P.id]}function x(P){for(let O in n){let ee=n[O];for(let I in ee){let X=ee[I];if(X[P.id]===void 0)continue;let L=X[P.id];for(let N in L)h(L[N].object),delete L[N];delete X[P.id]}}}function y(P){for(let O in n){let ee=n[O],I=P.isInstancedMesh===!0?P.id:0,X=ee[I];if(X===void 0)continue;for(let L in X){let N=X[L];for(let Q in N)h(N[Q].object),delete N[Q];delete X[L]}if(delete ee[I],Object.keys(ee).length===0)delete n[O]}}function A(){if(U(),o=!0,s===r)return;s=r,c(s.object)}function U(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:A,resetDefaultState:U,dispose:T,releaseStatesOfGeometry:w,releaseStatesOfObject:y,releaseStatesOfProgram:x,initAttributes:_,enableAttribute:p,disableUnusedAttributes:v}}function Fp(e,t,i){let n;function r(l){n=l}function s(l,c){e.drawArrays(n,l,c),i.update(c,n,1)}function o(l,c,h){if(h===0)return;e.drawArraysInstanced(n,l,c,h),i.update(c,n,h)}function a(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let m=0;m<h;m++)u+=c[m];i.update(u,n,1)}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a}function Bp(e,t,i,n){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){let x=t.get("EXT_texture_filter_anisotropic");r=e.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(x){if(x!==gi&&n.convert(x)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))return!1;return!0}function a(x){let y=x===mi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));if(x!==Jt&&x!==Kt&&!y&&n.convert(x)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))return!1;return!0}function l(x){if(x==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";x="mediump"}if(x==="mediump"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0)return"mediump"}return"lowp"}let c=i.precision!==void 0?i.precision:"highp",h=l(c);if(h!==c)ge("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h;let f=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),u=i.logarithmicDepthBuffer===!0&&f===!1;if(i.reversedDepthBuffer===!0&&f===!1)ge("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");if(i.logarithmicDepthBuffer===!0&&f===!0)ge("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let m=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),g=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=e.getParameter(e.MAX_TEXTURE_SIZE),p=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),d=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),M=e.getParameter(e.MAX_VARYING_VECTORS),S=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),T=e.getParameter(e.MAX_SAMPLES),w=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:m,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:p,maxAttributes:d,maxVertexUniforms:v,maxVaryings:M,maxFragmentUniforms:S,maxSamples:T,samples:w}}function Op(e){let t=this,i=null,n=0,r=!1,s=!1,o=new Qi,a=new qe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){let m=f.length!==0||u||n!==0||r;return r=u,n=f.length,m},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,u){i=h(f,u,0)},this.setState=function(f,u,m){let{clippingPlanes:g,clipIntersection:_,clipShadows:p}=f,d=e.get(f);if(!r||g===null||g.length===0||s&&!p)if(s)h(null);else c();else{let v=s?0:n,M=v*4,S=d.clippingState||null;l.value=S,S=h(g,u,M,m);for(let T=0;T!==M;++T)S[T]=i[T];d.clippingState=S,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function c(){if(l.value!==i)l.value=i,l.needsUpdate=n>0;t.numPlanes=n,t.numIntersection=0}function h(f,u,m,g){let _=f!==null?f.length:0,p=null;if(_!==0){if(p=l.value,g!==!0||p===null){let d=m+_*4,v=u.matrixWorldInverse;if(a.getNormalMatrix(v),p===null||p.length<d)p=new Float32Array(d);for(let M=0,S=m;M!==_;++M,S+=4)o.copy(f[M]).applyMatrix4(v,a),o.normal.toArray(p,S),p[S+3]=o.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,p}}class cr extends oi{constructor(e=1,t={}){super(e,e,t);this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},n=[i,i,i,i,i,i];this.texture=new ir(n),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},n=new Ft(5,5,5),r=new Ui({name:"CubemapFromEquirect",uniforms:Gn(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Lt,blending:Sn});r.uniforms.tEquirect.value=t;let s=new ne(n,r),o=t.minFilter;if(t.minFilter===Oi)t.minFilter=Ot;return new Hr(1,10,this).update(e,s),t.minFilter=o,s.geometry.dispose(),s.material.dispose(),this}clear(e,t=!0,i=!0,n=!0){let r=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,i,n);e.setRenderTarget(r)}}var zp=256,fx=3,dx=20,Vp=256,Wp=16,px=3,mx=new C,gx=new xe;class hr{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Hr(1,10,null),this._boxMesh=new ne(new Ft(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,i=0.1,n=100,r={}){let{size:s=256,position:o=mx}=r,a=this._renderer;this._setSize(s);let l=this._allocateTarget(),c=this._getSourceTarget(!0);if(t>0)c.texture.mipmapsAutoUpdate=!1;let{autoClear:h,autoClearColor:f,autoClearDepth:u,autoClearStencil:m}=a,g=e.background;if(a.autoClear=!0,a.autoClearColor=!0,a.autoClearDepth=!0,a.autoClearStencil=!0,g===null)e.background=a.getClearColor(gx);let _=new Hr(i,n,c);if(_.position.copy(o),_.update(a,e),a.autoClear=h,a.autoClearColor=f,a.autoClearDepth=u,a.autoClearStencil=m,e.background=g,t>0)c.texture.mipmapsAutoUpdate=!0,this._blur(l,t);return this._applyPMREM(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){if(this._cubemapMaterial===null)this._cubemapMaterial=kp(),this._compileMaterial(this._cubemapMaterial)}compileEquirectangularShader(){if(this._equirectMaterial===null)this._equirectMaterial=Hp(),this._compileMaterial(this._equirectMaterial)}dispose(){if(this._sourceTarget!==null)this._sourceTarget.dispose();if(this._cubemapMaterial!==null)this._cubemapMaterial.dispose();if(this._equirectMaterial!==null)this._equirectMaterial.dispose();if(this._blurMaterial!==null)this._blurMaterial.dispose();if(this._ggxMaterial!==null)this._ggxMaterial.dispose();if(this._integrationMaterial!==null)this._integrationMaterial.dispose();this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(zp,nu(e))}_fromTexture(e,t){if(e.mapping===rn||e.mapping===Ln)this._setSize(e.image.length===0?zp:e.image[0].width||e.image[0].image.width);else this._setSize(e.image.width/4);let i=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(i),i}_allocateTarget(){let e=this._cubeSize,t=Gp(e,!1,!1),i=Math.log2(e)-fx;for(let n=0;n<=i;n++)t.texture.mipmaps.push({width:e>>n,height:e>>n});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,i=this._sourceTarget;if(i===null||i.width!==t||e&&i.depthBuffer===!1){if(i!==null)i.dispose();this._sourceTarget=Gp(t,!0,e)}return this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,i){let n=this._boxMesh,r=this._cubeCamera;n.material=i,r.renderTarget=e,r.activeMipmapLevel=t;let s=e.width>>t;e.viewport.set(0,0,s,s),r.update(this._renderer,n),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;if(e.mapping===rn||e.mapping===Ln){if(this._cubemapMaterial===null)this._cubemapMaterial=kp();t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1}else{if(this._equirectMaterial===null)this._equirectMaterial=Hp();t=this._equirectMaterial}t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){if(this._ggxMaterial===null)this._ggxMaterial=xx(),this._integrationMaterial=_x();let t=this._cubeSize,i=e.texture.mipmaps.length-1,n=this._ggxMaterial.uniforms;n.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/Wp);for(let s=0;s<=i;s++){let o=hr.lodToRoughness(s,i);if(s>i-px)r.roughness.value=o,this._renderCube(e,s,this._integrationMaterial);else{let a=o>0?Math.log2(t)+0.5*Math.log2(6/(Vp*Math.pow(o,4)))+0.5:0;n.roughness.value=o,n.lodBias.value=a,this._renderCube(e,s,this._ggxMaterial)}}}_blur(e,t){if(this._blurMaterial===null)this._blurMaterial=yx();let i=this._blurMaterial,n=i.uniforms,r=this._sourceTarget;n.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,n.envMap.value=r.texture,this._renderCube(e,0,i),n.envMap.value=e.texture,this._renderCube(r,0,i)}}function Gp(e,t,i){return new cr(e,{minFilter:Oi,generateMipmaps:t,type:mi,colorSpace:Sr,depthBuffer:i})}function ha(e,t,i){return new Ui({name:e,uniforms:t,vertexShader:st.cube_vert,fragmentShader:i,side:Lt,blending:Sn,depthTest:!1,depthWrite:!1})}function xx(){return ha("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Vp}u

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
	`)}function _x(){return ha("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Wp}},`

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
	`)}function yx(){return ha("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${dx}
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
	`)}function Hp(){return ha("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function kp(){return ha("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Xp(e){let t=new WeakMap,i=new WeakMap,n=null;function r(u,m=!1){if(u===null||u===void 0)return null;if(m)return o(u);return s(u)}function s(u){if(u&&u.isTexture){let m=u.mapping;if(m===eo||m===to)if(t.has(u)){let g=t.get(u).texture;return a(g,u.mapping)}else{let g=u.image;if(g&&g.height>0){let _=new cr(g.height);return _.fromEquirectangularTexture(e,u),t.set(u,_),u.addEventListener("dispose",c),a(_.texture,u.mapping)}else return null}}return u}function o(u){if(u&&u.isTexture&&u.isPMREMTexture!==!0){let m=u.mapping,g=m===eo||m===to,_=m===rn||m===Ln;if(g||_){let p=i.get(u),d=p!==void 0?p.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==d){if(n===null)n=new hr(e);return p=g?n.fromEquirectangular(u,p):n.fromCubemap(u,p),p.texture.pmremVersion=u.pmremVersion,i.set(u,p),p.texture}else if(p!==void 0)return p.texture;else{let v=u.image;if(g&&v&&v.height>0||_&&v&&l(v)){if(n===null)n=new hr(e);return p=g?n.fromEquirectangular(u):n.fromCubemap(u),p.texture.pmremVersion=u.pmremVersion,i.set(u,p),u.addEventListener("dispose",h),p.texture}else return null}}}return u}function a(u,m){if(m===eo)u.mapping=rn;else if(m===to)u.mapping=Ln;return u}function l(u){let m=0,g=6;for(let _=0;_<g;_++)if(u[_]!==void 0)m++;return m===g}function c(u){let m=u.target;m.removeEventListener("dispose",c);let g=t.get(m);if(g!==void 0)t.delete(m),g.dispose()}function h(u){let m=u.target;m.removeEventListener("dispose",h);let g=i.get(m);if(g!==void 0)i.delete(m),g.dispose()}function f(){if(t=new WeakMap,i=new WeakMap,n!==null)n.dispose(),n=null}return{get:r,dispose:f}}function qp(e){let t={};function i(n){if(t[n]!==void 0)return t[n];let r=e.getExtension(n);return t[n]=r,r}return{has:function(n){return i(n)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(n){let r=i(n);if(r===null)on("WebGLRenderer: "+n+" extension not supported.");return r}}}function Yp(e,t,i,n){let r={},s=new WeakMap,o=new FinalizationRegistry((g)=>delete r[g]);function a(g){l(g.target)}function l(g){if(g.index!==null)t.remove(g.index);for(let p in g.attributes)t.remove(g.attributes[p]);g.removeEventListener("dispose",a),delete r[g.id],o.unregister(g);let _=s.get(g);if(_)t.remove(_),s.delete(g);if(n.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0)delete g._maxInstanceCount;i.memory.geometries--}function c(g,_){if(r[_.id]!==void 0)return _;return _.addEventListener("dispose",a),r[_.id]=new WeakRef(_),o.register(_,_.id,_),i.memory.geometries++,_}function h(g){let _=g.attributes;for(let p in _)t.update(_[p],e.ARRAY_BUFFER)}function f(g){let _=g.index,p=g.attributes.position,d=0;if(p===void 0)return;let v=_!==null?_.array.length:p.array.length/3-1,S=new(p.count>=65535?Go:zo)(Math.ceil(v/3)*6,1),T=S.array;if(_!==null){let x=_.array;d=_.version;for(let y=0,A=0;y<v;y+=3){let U=x[y+0],P=x[y+1],O=x[y+2];T[A++]=U,T[A++]=P,T[A++]=P,T[A++]=O,T[A++]=O,T[A++]=U}}else{d=p.version;for(let x=0,y=0;x<v;x+=3){let A=x+0,U=x+1,P=x+2;T[y++]=A,T[y++]=U,T[y++]=U,T[y++]=P,T[y++]=P,T[y++]=A}}S.version=d;let w=s.get(g);if(w)t.remove(w);s.set(g,S)}function u(g){let _=s.get(g);if(_){let p=g.index;if(p!==null){if(_.version<p.version)f(g)}}else f(g);return s.get(g)}function m(){for(let g in r){let _=r[g].deref();if(_!==void 0)l(_)}}return{get:c,update:h,getWireframeAttribute:u,dispose:m}}function Zp(e,t,i){let n;function r(f){n=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function l(f,u){e.drawElements(n,u,s,f*o),i.update(u,n,1)}function c(f,u,m){if(m===0)return;e.drawElementsInstanced(n,u,s,f*o,m),i.update(u,n,m)}function h(f,u,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,s,f,0,m);let _=0;for(let p=0;p<m;p++)_+=u[p];i.update(_,n,1)}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function Jp(e){let t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(i.calls++,o){case e.TRIANGLES:i.triangles+=a*(s/3);break;case e.LINES:i.lines+=a*(s/2);break;case e.LINE_STRIP:i.lines+=a*(s-1);break;case e.LINE_LOOP:i.lines+=a*s;break;case e.POINTS:i.points+=a*s;break;default:Fe("WebGLInfo: Unknown draw mode:",o);break}}function r(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:r,update:n}}function Kp(e,t,i){let n=new WeakMap,r=new Mt;function s(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=h!==void 0?h.length:0,u=n.get(a);if(u===void 0||u.count!==f){let A=function(){x.dispose(),n.delete(a),a.removeEventListener("dispose",A)};if(u!==void 0)u.texture.dispose();let m=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],d=a.morphAttributes.normal||[],v=a.morphAttributes.color||[],M=0;if(m===!0)M=1;if(g===!0)M=2;if(_===!0)M=3;let S=a.attributes.position.count*M,T=1;if(S>t.maxTextureSize)T=Math.ceil(S/t.maxTextureSize),S=t.maxTextureSize;let w=new Float32Array(S*T*4*f),x=new Tr(w,S,T,f);x.type=Kt,x.needsUpdate=!0;let y=M*4;for(let U=0;U<f;U++){let P=p[U],O=d[U],ee=v[U],I=S*T*4*U;for(let X=0;X<P.count;X++){let L=X*y;if(m===!0)r.fromBufferAttribute(P,X),w[I+L+0]=r.x,w[I+L+1]=r.y,w[I+L+2]=r.z,w[I+L+3]=0;if(g===!0)r.fromBufferAttribute(O,X),w[I+L+4]=r.x,w[I+L+5]=r.y,w[I+L+6]=r.z,w[I+L+7]=0;if(_===!0)r.fromBufferAttribute(ee,X),w[I+L+8]=r.x,w[I+L+9]=r.y,w[I+L+10]=r.z,w[I+L+11]=ee.itemSize===4?r.w:1}}u={count:f,texture:x,size:new Z(S,T)},n.set(a,u),a.addEventListener("dispose",A)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(e,"morphTexture",o.morphTexture,i);else{let m=0;for(let _=0;_<c.length;_++)m+=c[_];let g=a.morphTargetsRelative?1:1-m;l.getUniforms().setValue(e,"morphTargetBaseInfluence",g),l.getUniforms().setValue(e,"morphTargetInfluences",c)}l.getUniforms().setValue(e,"morphTargetsTexture",u.texture,i),l.getUniforms().setValue(e,"morphTargetsTextureSize",u.size)}return{update:s}}function $p(e,t,i,n,r){let s=new WeakMap;function o(c){let h=r.render.frame,f=c.geometry,u=t.get(c,f);if(s.get(u)!==h)t.update(u),s.set(u,h);if(c.isInstancedMesh){if(c.hasEventListener("dispose",l)===!1)c.addEventListener("dispose",l);if(s.get(c)!==h){if(i.update(c.instanceMatrix,e.ARRAY_BUFFER),c.instanceColor!==null)i.update(c.instanceColor,e.ARRAY_BUFFER);s.set(c,h)}}if(c.isSkinnedMesh){let m=c.skeleton;if(s.get(m)!==h)m.update(),s.set(m,h)}return u}function a(){s=new WeakMap}function l(c){let h=c.target;if(h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),i.remove(h.instanceMatrix),h.instanceColor!==null)i.remove(h.instanceColor)}return{update:o,dispose:a}}var vx={[Sa]:"LINEAR_TONE_MAPPING",[ba]:"REINHARD_TONE_MAPPING",[Ea]:"CINEON_TONE_MAPPING",[qr]:"ACES_FILMIC_TONE_MAPPING",[wa]:"AGX_TONE_MAPPING",[Aa]:"NEUTRAL_TONE_MAPPING",[Ta]:"CUSTOM_TONE_MAPPING"};function Qp(e,t,i,n,r,s){let o=new oi(t,i,{type:e,depthBuffer:r,stencilBuffer:s,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=null,h=new Ve;h.setAttribute("position",new Ae([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new Ae([0,2,0,0,2,0],2));let f=new ia({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new ne(h,f),m=new kn(-1,1,1,-1,0,1),g=null,_=null,p=!1,d,v=null,M=[],S=!1;this.setSize=function(T,w){if(o.setSize(T,w),a!==null)a.setSize(T,w);if(l!==null)l.setSize(T,w);for(let x=0;x<M.length;x++){let y=M[x];if(y.setSize)y.setSize(T,w)}},this.setEffects=function(T){M=T,S=M.length>0&&M[0].isRenderPass===!0;let{width:w,height:x}=o;if(M.length>0&&a===null)a=new oi(w,x,{type:mi,depthBuffer:!1,stencilBuffer:!1}),l=new oi(w,x,{type:mi,depthBuffer:!1,stencilBuffer:!1});let y=r===!0&&M.some((A)=>A.needsDepthTexture===!0);if(y!==(o.depthTexture!==null)){if(y===!0&&c===null){if(c=new ji(w,x),s===!0)c.format=Zi,c.type=dn}o.dispose(),o.depthTexture=y?c:null,o.resolveDepthBuffer=y,o.storeMultisampledDepthBuffer=y}for(let A=0;A<M.length;A++){let U=M[A];if(U.setSize)U.setSize(w,x);if(y&&U.needsDepthTexture===!0&&U.setDepthTexture)U.setDepthTexture(c)}},this.begin=function(T,w){if(p)return!1;if(T.toneMapping===Yi&&M.length===0)return!1;if(v=w,w!==null){let{width:x,height:y}=w;if(o.width!==x||o.height!==y)this.setSize(x,y)}if(S===!1)T.setRenderTarget(o);return d=T.toneMapping,T.toneMapping=Yi,!0},this.hasRenderPass=function(){return S},this.end=function(T,w){T.toneMapping=d,p=!0;let x=o,y=a;for(let A=0;A<M.length;A++){let U=M[A];if(U.enabled===!1)continue;if(U.render(T,y,x,w),U.needsSwap!==!1)x=y,y=y===a?l:a}if(g!==T.outputColorSpace||_!==T.toneMapping){if(g=T.outputColorSpace,_=T.toneMapping,f.defines={},it.getTransfer(g)===xt)f.defines.SRGB_TRANSFER="";let A=vx[_];if(A)f.defines[A]="";f.needsUpdate=!0}f.uniforms.tDiffuse.value=x.texture,T.setRenderTarget(v),T.render(u,m),v=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){if(o.dispose(),a!==null)a.dispose();if(l!==null)l.dispose();h.dispose(),f.dispose()}}var sm=new vt,om=new ji(1,1),am=new bs(1),lm=new Tr,cm=new cs,hm=new ir,jp=[],em=[],tm=new Float32Array(16),im=new Float32Array(9),nm=new Float32Array(4);function zs(e,t,i){let n=e[0];if(n<=0||n>0)return e;let r=t*i,s=jp[r];if(s===void 0)s=new Float32Array(r),jp[r]=s;if(t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=i,e[o].toArray(s,a)}return s}function li(e,t){if(e.length!==t.length)return!1;for(let i=0,n=e.length;i<n;i++)if(e[i]!==t[i])return!1;return!0}function ci(e,t){for(let i=0,n=t.length;i<n;i++)e[i]=t[i]}function Dl(e,t){let i=em[t];if(i===void 0)i=new Int32Array(t),em[t]=i;for(let n=0;n!==t;++n)i[n]=e.allocateTextureUnit();return i}function Mx(e,t){let i=this.cache;if(i[0]===t)return;e.uniform1f(this.addr,t),i[0]=t}function Sx(e,t){let i=this.cache;if(t.x!==void 0){if(i[0]!==t.x||i[1]!==t.y)e.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y}else{if(li(i,t))return;e.uniform2fv(this.addr,t),ci(i,t)}}function bx(e,t){let i=this.cache;if(t.x!==void 0){if(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)e.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z}else if(t.r!==void 0){if(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)e.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b}else{if(li(i,t))return;e.uniform3fv(this.addr,t),ci(i,t)}}function Ex(e,t){let i=this.cache;if(t.x!==void 0){if(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)e.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w}else{if(li(i,t))return;e.uniform4fv(this.addr,t),ci(i,t)}}function Tx(e,t){let i=this.cache,n=t.elements;if(n===void 0){if(li(i,t))return;e.uniformMatrix2fv(this.addr,!1,t),ci(i,t)}else{if(li(i,n))return;nm.set(n),e.uniformMatrix2fv(this.addr,!1,nm),ci(i,n)}}function wx(e,t){let i=this.cache,n=t.elements;if(n===void 0){if(li(i,t))return;e.uniformMatrix3fv(this.addr,!1,t),ci(i,t)}else{if(li(i,n))return;im.set(n),e.uniformMatrix3fv(this.addr,!1,im),ci(i,n)}}function Ax(e,t){let i=this.cache,n=t.elements;if(n===void 0){if(li(i,t))return;e.uniformMatrix4fv(this.addr,!1,t),ci(i,t)}else{if(li(i,n))return;tm.set(n),e.uniformMatrix4fv(this.addr,!1,tm),ci(i,n)}}function Rx(e,t){let i=this.cache;if(i[0]===t)return;e.uniform1i(this.addr,t),i[0]=t}function Cx(e,t){let i=this.cache;if(t.x!==void 0){if(i[0]!==t.x||i[1]!==t.y)e.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y}else{if(li(i,t))return;e.uniform2iv(this.addr,t),ci(i,t)}}function Ix(e,t){let i=this.cache;if(t.x!==void 0){if(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)e.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z}else{if(li(i,t))return;e.uniform3iv(this.addr,t),ci(i,t)}}function Px(e,t){let i=this.cache;if(t.x!==void 0){if(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)e.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w}else{if(li(i,t))return;e.uniform4iv(this.addr,t),ci(i,t)}}function Lx(e,t){let i=this.cache;if(i[0]===t)return;e.uniform1ui(this.addr,t),i[0]=t}function Dx(e,t){let i=this.cache;if(t.x!==void 0){if(i[0]!==t.x||i[1]!==t.y)e.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y}else{if(li(i,t))return;e.uniform2uiv(this.addr,t),ci(i,t)}}function Nx(e,t){let i=this.cache;if(t.x!==void 0){if(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)e.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z}else{if(li(i,t))return;e.uniform3uiv(this.addr,t),ci(i,t)}}function Ux(e,t){let i=this.cache;if(t.x!==void 0){if(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w}else{if(li(i,t))return;e.uniform4uiv(this.addr,t),ci(i,t)}}function Nl(e){if(e.version===0)e.compareFunction=Va,e.needsUpdate=!0;return e}function Fx(e,t,i){let n=this.cache,r=i.allocateTextureUnit();if(n[0]!==r)e.uniform1i(this.addr,r),n[0]=r;let s;if(this.type===e.SAMPLER_2D_SHADOW)s=Nl(om);else s=sm;i.setTexture2D(t||s,r)}function Bx(e,t,i){let n=this.cache,r=i.allocateTextureUnit();if(n[0]!==r)e.uniform1i(this.addr,r),n[0]=r;i.setTexture3D(t||cm,r)}function Ox(e,t,i){let n=this.cache,r=i.allocateTextureUnit();if(n[0]!==r)e.uniform1i(this.addr,r),n[0]=r;let s;if(this.type===e.SAMPLER_CUBE_SHADOW)s=Nl(am);else s=hm;i.setTextureCube(t||s,r)}function zx(e,t,i){let n=this.cache,r=i.allocateTextureUnit();if(n[0]!==r)e.uniform1i(this.addr,r),n[0]=r;i.setTexture2DArray(t||lm,r)}function Gx(e){switch(e){case 5126:return Mx;case 35664:return Sx;case 35665:return bx;case 35666:return Ex;case 35674:return Tx;case 35675:return wx;case 35676:return Ax;case 5124:case 35670:return Rx;case 35667:case 35671:return Cx;case 35668:case 35672:return Ix;case 35669:case 35673:return Px;case 5125:return Lx;case 36294:return Dx;case 36295:return Nx;case 36296:return Ux;case 35678:case 36198:case 36298:case 36306:case 35682:return Fx;case 35679:case 36299:case 36307:return Bx;case 35680:case 36300:case 36308:case 36293:return Ox;case 36289:case 36303:case 36311:case 36292:return zx}}function Hx(e,t){e.uniform1fv(this.addr,t)}function kx(e,t){let i=zs(t,this.size,2);e.uniform2fv(this.addr,i)}function Vx(e,t){let i=zs(t,this.size,3);e.uniform3fv(this.addr,i)}function Wx(e,t){let i=zs(t,this.size,4);e.uniform4fv(this.addr,i)}function Xx(e,t){let i=zs(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,i)}function qx(e,t){let i=zs(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,i)}function Yx(e,t){let i=zs(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,i)}function Zx(e,t){e.uniform1iv(this.addr,t)}function Jx(e,t){e.uniform2iv(this.addr,t)}function Kx(e,t){e.uniform3iv(this.addr,t)}function $x(e,t){e.uniform4iv(this.addr,t)}function Qx(e,t){e.uniform1uiv(this.addr,t)}function jx(e,t){e.uniform2uiv(this.addr,t)}function e_(e,t){e.uniform3uiv(this.addr,t)}function t_(e,t){e.uniform4uiv(this.addr,t)}function i_(e,t,i){let n=this.cache,r=t.length,s=Dl(i,r);if(!li(n,s))e.uniform1iv(this.addr,s),ci(n,s);let o;if(this.type===e.SAMPLER_2D_SHADOW)o=Nl(om);else o=sm;for(let a=0;a!==r;++a)i.setTexture2D(t[a]||o,s[a])}function n_(e,t,i){let n=this.cache,r=t.length,s=Dl(i,r);if(!li(n,s))e.uniform1iv(this.addr,s),ci(n,s);for(let o=0;o!==r;++o)i.setTexture3D(t[o]||cm,s[o])}function r_(e,t,i){let n=this.cache,r=t.length,s=Dl(i,r);if(!li(n,s))e.uniform1iv(this.addr,s),ci(n,s);let o;if(this.type===e.SAMPLER_CUBE_SHADOW)o=Nl(am);else o=hm;for(let a=0;a!==r;++a)i.setTextureCube(t[a]||o,s[a])}function s_(e,t,i){let n=this.cache,r=t.length,s=Dl(i,r);if(!li(n,s))e.uniform1iv(this.addr,s),ci(n,s);for(let o=0;o!==r;++o)i.setTexture2DArray(t[o]||lm,s[o])}function o_(e){switch(e){case 5126:return Hx;case 35664:return kx;case 35665:return Vx;case 35666:return Wx;case 35674:return Xx;case 35675:return qx;case 35676:return Yx;case 5124:case 35670:return Zx;case 35667:case 35671:return Jx;case 35668:case 35672:return Kx;case 35669:case 35673:return $x;case 5125:return Qx;case 36294:return jx;case 36295:return e_;case 36296:return t_;case 35678:case 36198:case 36298:case 36306:case 35682:return i_;case 35679:case 36299:case 36307:return n_;case 35680:case 36300:case 36308:case 36293:return r_;case 36289:case 36303:case 36311:case 36292:return s_}}class um{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Gx(t.type)}}class fm{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=o_(t.type)}}class dm{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let n=this.seq;for(let r=0,s=n.length;r!==s;++r){let o=n[r];o.setValue(e,t[o.id],i)}}}var Yc=/(\w+)(\])?(\[|\.)?/g;function rm(e,t){e.seq.push(t),e.map[t.id]=t}function a_(e,t,i){let n=e.name,r=n.length;Yc.lastIndex=0;while(!0){let s=Yc.exec(n),o=Yc.lastIndex,a=s[1],l=s[2]==="]",c=s[3];if(l)a=a|0;if(c===void 0||c==="["&&o+2===r){rm(i,c===void 0?new um(a,e,t):new fm(a,e,t));break}else{let f=i.map[a];if(f===void 0)f=new dm(a),rm(i,f);i=f}}}class kr{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let o=e.getActiveUniform(t,s),a=e.getUniformLocation(t,o.name);a_(o,a,this)}let n=[],r=[];for(let s of this.seq)if(s.type===e.SAMPLER_2D_SHADOW||s.type===e.SAMPLER_CUBE_SHADOW||s.type===e.SAMPLER_2D_ARRAY_SHADOW)n.push(s);else r.push(s);if(n.length>0)this.seq=n.concat(r)}setValue(e,t,i,n){let r=this.map[t];if(r!==void 0)r.setValue(e,i,n)}setOptional(e,t,i){let n=t[i];if(n!==void 0)this.setValue(e,i,n)}static upload(e,t,i,n){for(let r=0,s=t.length;r!==s;++r){let o=t[r],a=i[o.id];if(a.needsUpdate!==!1)o.setValue(e,a.value,n)}}static seqWithValue(e,t){let i=[];for(let n=0,r=e.length;n!==r;++n){let s=e[n];if(s.id in t)i.push(s)}return i}}function Zc(e,t,i){let n=e.createShader(t);return e.shaderSource(n,i),e.compileShader(n),n}var l_=37297,c_=0;function h_(e,t){let i=e.split(`
`),n=[],r=Math.max(t-6,0),s=Math.min(t+6,i.length);for(let o=r;o<s;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${i[o]}`)}return n.join(`
`)}var pm=new qe;function u_(e){it._getMatrix(pm,it.workingColorSpace,e);let t=`mat3( ${pm.elements.map((i)=>i.toFixed(4))} )`;switch(it.getTransfer(e)){case br:return[t,"LinearTransferOETF"];case xt:return[t,"sRGBTransferOETF"];default:return ge("WebGLProgram: Unsupported color space: ",e),[t,"LinearTransferOETF"]}}function mm(e,t,i){let n=e.getShaderParameter(t,e.COMPILE_STATUS),s=(e.getShaderInfoLog(t)||"").trim();if(n&&s==="")return"";let o=/ERROR: 0:(\d+)/.exec(s);if(o){let a=parseInt(o[1]);return i.toUpperCase()+`

`+s+`

`+h_(e.getShaderSource(t),a)}else return s}function f_(e,t){let i=u_(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${i[1]}( vec4( ${i[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var d_={[Sa]:"Linear",[ba]:"Reinhard",[Ea]:"Cineon",[qr]:"ACESFilmic",[wa]:"AgX",[Aa]:"Neutral",[Ta]:"Custom"};function p_(e,t){let i=d_[t];if(i===void 0)return ge("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+e+"( vec3 color ) { return LinearToneMapping( color ); }";return"vec3 "+e+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}var Ul=new C;function m_(){it.getLuminanceCoefficients(Ul);let e=Ul.x.toFixed(4),t=Ul.y.toFixed(4),i=Ul.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${t}, ${i} );`,"\treturn dot( weights, rgb );","}"].join(`
`)}function g_(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ua).join(`
`)}function x_(e){let t=[];for(let i in e){let n=e[i];if(n===!1)continue;t.push("#define "+i+" "+n)}return t.join(`
`)}function __(e,t){let i={},n=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){let s=e.getActiveAttrib(t,r),o=s.name,a=1;if(s.type===e.FLOAT_MAT2)a=2;if(s.type===e.FLOAT_MAT3)a=3;if(s.type===e.FLOAT_MAT4)a=4;i[o]={type:s.type,location:e.getAttribLocation(t,o),locationSize:a}}return i}function ua(e){return e!==""}function gm(e,t){let i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function xm(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var y_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Jc(e){return e.replace(y_,v_)}function v_(e,t){let i=st[t];if(i===void 0)throw Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return Jc(i)}var M_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function _m(e){return e.replace(M_,S_)}function S_(e,t,i,n){let r="";for(let s=parseInt(t);s<parseInt(i);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function ym(e){let t=`precision ${e.precision} float;
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
#define LOW_PRECISION`;return t}var b_={[Xr]:"SHADOWMAP_TYPE_PCF",[gr]:"SHADOWMAP_TYPE_VSM"};function E_(e){return b_[e.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var T_={[Ln]:"ENVMAP_MODE_REFRACTION"};function w_(e){if(e.envMap===!1)return"ENVMAP_MODE_REFLECTION";return T_[e.envMapMode]||"ENVMAP_MODE_REFLECTION"}var A_={[xr]:"ENVMAP_BLENDING_MULTIPLY",[Hh]:"ENVMAP_BLENDING_MIX",[kh]:"ENVMAP_BLENDING_ADD"};function R_(e){if(e.envMap===!1)return"ENVMAP_BLENDING_NONE";return A_[e.combine]||"ENVMAP_BLENDING_NONE"}function vm(e,t,i,n){let r=e.getContext(),{defines:s,vertexShader:o,fragmentShader:a}=i,l=E_(i),c=i.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=w_(i),f=R_(i),u=g_(i),m=x_(s),g=r.createProgram(),_,p,d=i.glslVersion?"#version "+i.glslVersion+`
`:"";if(i.isRawShaderMaterial){if(_=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,m].filter(ua).join(`
`),_.length>0)_+=`
`;if(p=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,m].filter(ua).join(`
`),p.length>0)p+=`
`}else _=[ym(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,m,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+h:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+i.diffuseRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexNormals?"#define HAS_NORMAL":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+l:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","\tattribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","\tattribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","\tuniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","\tattribute vec2 uv1;","#endif","#ifdef USE_UV2","\tattribute vec2 uv2;","#endif","#ifdef USE_UV3","\tattribute vec2 uv3;","#endif","#ifdef USE_TANGENT","\tattribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","\tattribute vec4 color;","#elif defined( USE_COLOR )","\tattribute vec3 color;","#endif","#ifdef USE_SKINNING","\tattribute vec4 skinIndex;","\tattribute vec4 skinWeight;","#endif",`
`].filter(ua).join(`
`),p=[ym(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,m,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+c:"",i.envMap?"#define "+h:"",i.envMap?"#define "+f:"",i.envMapPMREM?"#define ENVMAP_MAX_LOD "+i.envMapMaxLod+".0":"",i.envMapPMREM?"#define ENVMAP_SIZE "+i.envMapSize+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",i.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.retroreflection?"#define USE_RETROREFLECTION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+l:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Yi?"#define TONE_MAPPING":"",i.toneMapping!==Yi?st.tonemapping_pars_fragment:"",i.toneMapping!==Yi?p_("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",st.colorspace_pars_fragment,f_("linearToOutputTexel",i.outputColorSpace),m_(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(ua).join(`
`);if(o=Jc(o),o=gm(o,i),o=xm(o,i),a=Jc(a),a=gm(a,i),a=xm(a,i),o=_m(o),a=_m(a),i.isRawShaderMaterial!==!0)d=`#version 300 es
`,_=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,p=["#define varying in",i.glslVersion===tc?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===tc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p;let v=d+_+o,M=d+p+a,S=Zc(r,r.VERTEX_SHADER,v),T=Zc(r,r.FRAGMENT_SHADER,M);if(r.attachShader(g,S),r.attachShader(g,T),i.index0AttributeName!==void 0)r.bindAttribLocation(g,0,i.index0AttributeName);else if(i.hasPositionAttribute===!0)r.bindAttribLocation(g,0,"position");r.linkProgram(g);function w(U){if(e.debug.checkShaderErrors){let P=r.getProgramInfoLog(g)||"",O=r.getShaderInfoLog(S)||"",ee=r.getShaderInfoLog(T)||"",I=P.trim(),X=O.trim(),L=ee.trim(),N=!0,Q=!0;if(r.getProgramParameter(g,r.LINK_STATUS)===!1)if(N=!1,typeof e.debug.onShaderError==="function")e.debug.onShaderError(r,g,S,T);else{let z=mm(r,S,"vertex"),W=mm(r,T,"fragment");Fe("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(g,r.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+I+`
`+z+`
`+W)}else if(I!=="")ge("WebGLProgram: Program Info Log:",I);else if(X===""||L==="")Q=!1;if(Q)U.diagnostics={runnable:N,programLog:I,vertexShader:{log:X,prefix:_},fragmentShader:{log:L,prefix:p}}}r.deleteShader(S),r.deleteShader(T),x=new kr(r,g),y=__(r,g)}let x;this.getUniforms=function(){if(x===void 0)w(this);return x};let y;this.getAttributes=function(){if(y===void 0)w(this);return y};let A=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){if(A===!1)A=r.getProgramParameter(g,l_);return A},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(g),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=c_++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=S,this.fragmentShader=T,this}var C_=0;class Kc{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){let n=this._getShaderCacheForMaterial(e);if(n.has(t)===!1)n.add(t),t.usedTimes++;if(n.has(i)===!1)n.add(i),i.usedTimes++;return this}remove(e){let t=this.materialCache.get(e);for(let i of t)if(i.usedTimes--,i.usedTimes===0)this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);if(i===void 0)i=new Set,t.set(e,i);return i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);if(i===void 0)i=new Mm(e),t.set(e,i);return i}}class Mm{constructor(e){this.id=C_++,this.code=e,this.usedTimes=0}}function I_(e){return e===Ji||e===yr||e===vr}function Sm(e,t,i,n,r,s){let o=new wr,a=new Kc,l=new Set,c=[],h=new Map,f=n.logarithmicDepthBuffer,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(x){if(l.add(x),x===0)return"uv";return`uv${x}`}function g(x,y,A,U,P,O){let ee=U.fog,I=P.geometry,X=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?U.environment:null,L=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,N=t.get(x.envMap||X,L),Q=u[x.type],z=n.precision;if(x.precision!==null){if(z=n.getMaxPrecision(x.precision),z!==x.precision)ge("WebGLProgram.getParameters:",x.precision,"not supported, using",z,"instead.")}let W=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,Y=W!==void 0?W.length:0,fe=0;if(I.morphAttributes.position!==void 0)fe=1;if(I.morphAttributes.normal!==void 0)fe=2;if(I.morphAttributes.color!==void 0)fe=3;let k,j,ye,ve;if(Q){let Pe=tn[Q];k=Pe.vertexShader,j=Pe.fragmentShader}else{k=x.vertexShader,j=x.fragmentShader;let Pe=a.getVertexShaderStage(x),Ct=a.getFragmentShaderStage(x);a.update(x,Pe,Ct),ye=Pe.id,ve=Ct.id}let Be=e.getRenderTarget(),Ee=e.state.buffers.depth.getReversed(),ht=P.isInstancedMesh===!0,De=P.isBatchedMesh===!0,Ne=!!x.map,nt=!!x.matcap,re=!!N,ce=re&&N.isPMREMTexture===!0,ue=!!x.aoMap,Ce=!!x.lightMap,Ue=!!x.bumpMap&&x.wireframe===!1,Ye=!!x.normalMap,He=!!x.displacementMap,ot=!!x.emissiveMap,ft=!!x.metalnessMap,bt=!!x.roughnessMap,B=x.anisotropy>0,ii=x.clearcoat>0,at=x.diffuseRoughness>0,Zt=x.dispersion>0,we=x.retroreflectivity>0,At=x.iridescence>0,$e=x.sheen>0,tt=x.transmission>0,ni=B&&!!x.anisotropyMap,R=ii&&!!x.clearcoatMap,b=ii&&!!x.clearcoatNormalMap,G=ii&&!!x.clearcoatRoughnessMap,le=at&&!!x.diffuseRoughnessMap,oe=At&&!!x.iridescenceMap,me=At&&!!x.iridescenceThicknessMap,Me=$e&&!!x.sheenColorMap,J=$e&&!!x.sheenRoughnessMap,ie=!!x.specularMap,_e=!!x.specularColorMap,D=!!x.specularIntensityMap,te=tt&&!!x.transmissionMap,K=tt&&!!x.thicknessMap,de=!!x.gradientMap,pe=!!x.alphaMap,Te=x.alphaTest>0,Ze=!!x.alphaHash,We=!!x.extensions,Ie=Yi;if(x.toneMapped){if(Be===null||Be.isXRRenderTarget===!0)Ie=e.toneMapping}let Ke=ce?N.isCompressedCubeTexture?N.image[0].mipmaps:N.mipmaps:null,ct={shaderID:Q,shaderType:x.type,shaderName:x.name,vertexShader:k,fragmentShader:j,defines:x.defines,customVertexShaderID:ye,customFragmentShaderID:ve,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:z,batching:De,batchingColor:De&&P._colorsTexture!==null,instancing:ht,instancingColor:ht&&P.instanceColor!==null,instancingMorph:ht&&P.morphTexture!==null,outputColorSpace:Be===null?e.outputColorSpace:Be.isXRRenderTarget===!0?Be.texture.colorSpace:it.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Ne,matcap:nt,envMap:re,envMapMode:re&&N.mapping,envMapPMREM:ce,envMapMaxLod:ce?Ke.length-1:null,envMapSize:ce?Ke[0].width:null,aoMap:ue,lightMap:Ce,bumpMap:Ue,normalMap:Ye,displacementMap:He,emissiveMap:ot,normalMapObjectSpace:Ye&&x.normalMapType===Wh,normalMapTangentSpace:Ye&&x.normalMapType===pn,packedNormalMap:Ye&&x.normalMapType===pn&&I_(x.normalMap.format),metalnessMap:ft,roughnessMap:bt,anisotropy:B,anisotropyMap:ni,clearcoat:ii,clearcoatMap:R,clearcoatNormalMap:b,clearcoatRoughnessMap:G,diffuseRoughness:at,diffuseRoughnessMap:le,dispersion:Zt,retroreflection:we,iridescence:At,iridescenceMap:oe,iridescenceThicknessMap:me,sheen:$e,sheenColorMap:Me,sheenRoughnessMap:J,specularMap:ie,specularColorMap:_e,specularIntensityMap:D,transmission:tt,transmissionMap:te,thicknessMap:K,gradientMap:de,opaque:x.transparent===!1&&x.blending===qn&&x.alphaToCoverage===!1,alphaMap:pe,alphaTest:Te,alphaHash:Ze,combine:x.combine,mapUv:Ne&&m(x.map.channel),aoMapUv:ue&&m(x.aoMap.channel),lightMapUv:Ce&&m(x.lightMap.channel),bumpMapUv:Ue&&m(x.bumpMap.channel),normalMapUv:Ye&&m(x.normalMap.channel),displacementMapUv:He&&m(x.displacementMap.channel),emissiveMapUv:ot&&m(x.emissiveMap.channel),metalnessMapUv:ft&&m(x.metalnessMap.channel),roughnessMapUv:bt&&m(x.roughnessMap.channel),anisotropyMapUv:ni&&m(x.anisotropyMap.channel),clearcoatMapUv:R&&m(x.clearcoatMap.channel),clearcoatNormalMapUv:b&&m(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:G&&m(x.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:le&&m(x.diffuseRoughnessMap.channel),iridescenceMapUv:oe&&m(x.iridescenceMap.channel),iridescenceThicknessMapUv:me&&m(x.iridescenceThicknessMap.channel),sheenColorMapUv:Me&&m(x.sheenColorMap.channel),sheenRoughnessMapUv:J&&m(x.sheenRoughnessMap.channel),specularMapUv:ie&&m(x.specularMap.channel),specularColorMapUv:_e&&m(x.specularColorMap.channel),specularIntensityMapUv:D&&m(x.specularIntensityMap.channel),transmissionMapUv:te&&m(x.transmissionMap.channel),thicknessMapUv:K&&m(x.thicknessMap.channel),alphaMapUv:pe&&m(x.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(Ye||B),vertexNormals:!!I.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:P.isPoints===!0&&!!I.attributes.uv&&(Ne||pe),fog:!!ee,useFog:x.fog===!0,fogExp2:!!ee&&ee.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||I.attributes.normal===void 0&&Ye===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:Ee,skinning:P.isSkinnedMesh===!0,hasPositionAttribute:I.attributes.position!==void 0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:Y,morphTextureStride:fe,numSunLights:y.sun.length,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numSunLightShadows:y.sunShadowMap.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numLightProbeGrids:O.filter((Pe)=>Pe.texture!==null).length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:x.dithering,shadowMapEnabled:e.shadowMap.enabled&&A.length>0,shadowMapType:e.shadowMap.type,toneMapping:Ie,decodeVideoTexture:Ne&&x.map.isVideoTexture===!0&&it.getTransfer(x.map.colorSpace)===xt,decodeVideoTextureEmissive:ot&&x.emissiveMap.isVideoTexture===!0&&it.getTransfer(x.emissiveMap.colorSpace)===xt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Gt,flipSided:x.side===Lt,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:We&&x.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(We&&x.extensions.multiDraw===!0||De)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return ct.vertexUv1s=l.has(1),ct.vertexUv2s=l.has(2),ct.vertexUv3s=l.has(3),l.clear(),ct}function _(x){let y=[];if(x.shaderID)y.push(x.shaderID);else y.push(x.customVertexShaderID),y.push(x.customFragmentShaderID);if(x.defines!==void 0)for(let A in x.defines)y.push(A),y.push(x.defines[A]);if(x.isRawShaderMaterial===!1)p(y,x),d(y,x),y.push(e.outputColorSpace);return y.push(x.customProgramCacheKey),y.join()}function p(x,y){x.push(y.precision),x.push(y.outputColorSpace),x.push(y.envMapMode),x.push(y.envMapPMREM),x.push(y.envMapMaxLod),x.push(y.envMapSize),x.push(y.mapUv),x.push(y.alphaMapUv),x.push(y.lightMapUv),x.push(y.aoMapUv),x.push(y.bumpMapUv),x.push(y.normalMapUv),x.push(y.displacementMapUv),x.push(y.emissiveMapUv),x.push(y.metalnessMapUv),x.push(y.roughnessMapUv),x.push(y.anisotropyMapUv),x.push(y.clearcoatMapUv),x.push(y.clearcoatNormalMapUv),x.push(y.clearcoatRoughnessMapUv),x.push(y.diffuseRoughnessMapUv),x.push(y.iridescenceMapUv),x.push(y.iridescenceThicknessMapUv),x.push(y.sheenColorMapUv),x.push(y.sheenRoughnessMapUv),x.push(y.specularMapUv),x.push(y.specularColorMapUv),x.push(y.specularIntensityMapUv),x.push(y.transmissionMapUv),x.push(y.thicknessMapUv),x.push(y.combine),x.push(y.fogExp2),x.push(y.sizeAttenuation),x.push(y.morphTargetsCount),x.push(y.numSunLights),x.push(y.numDirLights),x.push(y.numPointLights),x.push(y.numSpotLights),x.push(y.numSpotLightMaps),x.push(y.numHemiLights),x.push(y.numRectAreaLights),x.push(y.numSunLightShadows),x.push(y.numDirLightShadows),x.push(y.numPointLightShadows),x.push(y.numSpotLightShadows),x.push(y.numSpotLightShadowsWithMaps),x.push(y.numLightProbes),x.push(y.numLightProbeGrids),x.push(y.shadowMapType),x.push(y.toneMapping),x.push(y.numClippingPlanes),x.push(y.numClipIntersection),x.push(y.depthPacking)}function d(x,y){if(o.disableAll(),y.instancing)o.enable(0);if(y.instancingColor)o.enable(1);if(y.instancingMorph)o.enable(2);if(y.matcap)o.enable(3);if(y.envMap)o.enable(4);if(y.normalMapObjectSpace)o.enable(5);if(y.normalMapTangentSpace)o.enable(6);if(y.clearcoat)o.enable(7);if(y.iridescence)o.enable(8);if(y.alphaTest)o.enable(9);if(y.vertexColors)o.enable(10);if(y.vertexAlphas)o.enable(11);if(y.vertexUv1s)o.enable(12);if(y.vertexUv2s)o.enable(13);if(y.vertexUv3s)o.enable(14);if(y.vertexTangents)o.enable(15);if(y.anisotropy)o.enable(16);if(y.alphaHash)o.enable(17);if(y.batching)o.enable(18);if(y.dispersion)o.enable(19);if(y.retroreflection)o.enable(24);if(y.diffuseRoughness)o.enable(25);if(y.batchingColor)o.enable(20);if(y.gradientMap)o.enable(21);if(y.packedNormalMap)o.enable(22);if(y.vertexNormals)o.enable(23);if(x.push(o.mask),o.disableAll(),y.fog)o.enable(0);if(y.useFog)o.enable(1);if(y.flatShading)o.enable(2);if(y.logarithmicDepthBuffer)o.enable(3);if(y.reversedDepthBuffer)o.enable(4);if(y.skinning)o.enable(5);if(y.morphTargets)o.enable(6);if(y.morphNormals)o.enable(7);if(y.morphColors)o.enable(8);if(y.premultipliedAlpha)o.enable(9);if(y.shadowMapEnabled)o.enable(10);if(y.doubleSided)o.enable(11);if(y.flipSided)o.enable(12);if(y.useDepthPacking)o.enable(13);if(y.dithering)o.enable(14);if(y.transmission)o.enable(15);if(y.sheen)o.enable(16);if(y.opaque)o.enable(17);if(y.pointsUvs)o.enable(18);if(y.decodeVideoTexture)o.enable(19);if(y.decodeVideoTextureEmissive)o.enable(20);if(y.alphaToCoverage)o.enable(21);if(y.numLightProbeGrids>0)o.enable(22);if(y.hasPositionAttribute)o.enable(23);x.push(o.mask)}function v(x){let y=u[x.type],A;if(y){let U=tn[y];A=zc.clone(U.uniforms)}else A=x.uniforms;return A}function M(x,y){let A=h.get(y);if(A!==void 0)++A.usedTimes;else A=new vm(e,y,x,r),c.push(A),h.set(y,A);return A}function S(x){if(--x.usedTimes===0){let y=c.indexOf(x);c[y]=c[c.length-1],c.pop(),h.delete(x.cacheKey),x.destroy()}}function T(x){a.remove(x)}function w(){a.dispose()}return{getParameters:g,getProgramCacheKey:_,getUniforms:v,acquireProgram:M,releaseProgram:S,releaseShaderCache:T,programs:c,dispose:w}}function bm(){let e=new WeakMap;function t(o){return e.has(o)}function i(o){let a=e.get(o);if(a===void 0)a={},e.set(o,a);return a}function n(o){e.delete(o)}function r(o,a,l){e.get(o)[a]=l}function s(){e=new WeakMap}return{has:t,get:i,remove:n,update:r,dispose:s}}function P_(e,t){if(e.groupOrder!==t.groupOrder)return e.groupOrder-t.groupOrder;else if(e.renderOrder!==t.renderOrder)return e.renderOrder-t.renderOrder;else if(e.material.id!==t.material.id)return e.material.id-t.material.id;else if(e.materialVariant!==t.materialVariant)return e.materialVariant-t.materialVariant;else if(e.z!==t.z)return e.z-t.z;else return e.id-t.id}function Em(e,t){if(e.groupOrder!==t.groupOrder)return e.groupOrder-t.groupOrder;else if(e.renderOrder!==t.renderOrder)return e.renderOrder-t.renderOrder;else if(e.z!==t.z)return t.z-e.z;else return e.id-t.id}function Tm(){let e=[],t=0,i=[],n=[],r=[];function s(){t=0,i.length=0,n.length=0,r.length=0}function o(u){let m=0;if(u.isInstancedMesh)m+=2;if(u.isSkinnedMesh)m+=1;return m}function a(u,m,g,_,p,d){let v=e[t];if(v===void 0)v={id:u.id,object:u,geometry:m,material:g,materialVariant:o(u),groupOrder:_,renderOrder:u.renderOrder,z:p,group:d},e[t]=v;else v.id=u.id,v.object=u,v.geometry=m,v.material=g,v.materialVariant=o(u),v.groupOrder=_,v.renderOrder=u.renderOrder,v.z=p,v.group=d;return t++,v}function l(u,m,g,_,p,d,v){if(v.reversedDepth===!0)p=-p;let M=a(u,m,g,_,p,d);if(g.transmission>0)n.push(M);else if(g.transparent===!0)r.push(M);else i.push(M)}function c(u,m,g,_,p,d){let v=a(u,m,g,_,p,d);if(g.transmission>0)n.unshift(v);else if(g.transparent===!0)r.unshift(v);else i.unshift(v)}function h(u,m){if(i.length>1)i.sort(u||P_);if(n.length>1)n.sort(m||Em);if(r.length>1)r.sort(m||Em)}function f(){for(let u=t,m=e.length;u<m;u++){let g=e[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:i,transmissive:n,transparent:r,init:s,push:l,unshift:c,finish:f,sort:h}}function wm(){let e=new WeakMap;function t(n,r){let s=e.get(n),o;if(s===void 0)o=new Tm,e.set(n,[o]);else if(r>=s.length)o=new Tm,s.push(o);else o=s[r];return o}function i(){e=new WeakMap}return{get:t,dispose:i}}function L_(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let i;switch(t.type){case"SunLight":case"DirectionalLight":i={direction:new C,color:new xe};break;case"SpotLight":i={position:new C,direction:new C,color:new xe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new C,color:new xe,distance:0,decay:0};break;case"HemisphereLight":i={direction:new C,skyColor:new xe,groundColor:new xe};break;case"RectAreaLight":i={color:new xe,position:new C,halfWidth:new C,halfHeight:new C};break}return e[t.id]=i,i}}}function D_(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let i;switch(t.type){case"SunLight":case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Z};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Z};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Z,shadowCameraNear:1,shadowCameraFar:1000};break}return e[t.id]=i,i}}}var N_=0;function U_(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function Am(e){let t=new L_,i=D_(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new C);let r=new C,s=new Je,o=new Je;function a(c){let h=0,f=0,u=0;for(let O=0;O<9;O++)n.probe[O].set(0,0,0);let m=0,g=0,_=0,p=0,d=0,v=0,M=0,S=0,T=0,w=0,x=0,y=0,A=0,U=0;c.sort(U_);for(let O=0,ee=c.length;O<ee;O++){let I=c[O],{color:X,intensity:L,distance:N}=I,Q=null;if(I.shadow&&I.shadow.map)if(I.shadow.map.texture.format===Ji)Q=I.shadow.map.texture;else Q=I.shadow.map.depthTexture||I.shadow.map.texture;if(I.isAmbientLight)h+=X.r*L,f+=X.g*L,u+=X.b*L;else if(I.isLightProbe){for(let z=0;z<9;z++)n.probe[z].addScaledVector(I.sh.coefficients[z],L);U++}else if(I.isSunLight){let z=t.get(I);if(z.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let W=I.shadow,Y=i.get(I);Y.shadowIntensity=W.intensity,Y.shadowBias=W.bias,Y.shadowNormalBias=W.normalBias,Y.shadowRadius=W.radius,Y.shadowMapSize.copy(W.mapSize).multiply(W.getFrameExtents()),n.sunShadow[g]=Y,n.sunShadowMap[g]=Q;let fe=W.getViewportCount();for(let k=0;k<fe;k++)n.sunShadowMatrix[_+k]=W.getMatrix(k),n.sunShadowCascade[_+k]=W._cascadeData[k];_+=fe,g++}n.sun[m]=z,m++}else if(I.isDirectionalLight){let z=t.get(I);if(z.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let W=I.shadow,Y=i.get(I);Y.shadowIntensity=W.intensity,Y.shadowBias=W.bias,Y.shadowNormalBias=W.normalBias,Y.shadowRadius=W.radius,Y.shadowMapSize=W.mapSize,n.directionalShadow[p]=Y,n.directionalShadowMap[p]=Q,n.directionalShadowMatrix[p]=I.shadow.matrix,T++}n.directional[p]=z,p++}else if(I.isSpotLight){let z=t.get(I);z.position.setFromMatrixPosition(I.matrixWorld),z.color.copy(X).multiplyScalar(L),z.distance=N,z.coneCos=Math.cos(I.angle),z.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),z.decay=I.decay,n.spot[v]=z;let W=I.shadow;if(I.map){if(n.spotLightMap[y]=I.map,y++,W.updateMatrices(I),I.castShadow)A++}if(n.spotLightMatrix[v]=W.matrix,I.castShadow){let Y=i.get(I);Y.shadowIntensity=W.intensity,Y.shadowBias=W.bias,Y.shadowNormalBias=W.normalBias,Y.shadowRadius=W.radius,Y.shadowMapSize=W.mapSize,n.spotShadow[v]=Y,n.spotShadowMap[v]=Q,x++}v++}else if(I.isRectAreaLight){let z=t.get(I);z.color.copy(X).multiplyScalar(L),z.halfWidth.set(I.width*0.5,0,0),z.halfHeight.set(0,I.height*0.5,0),n.rectArea[M]=z,M++}else if(I.isPointLight){let z=t.get(I);if(z.color.copy(I.color).multiplyScalar(I.intensity),z.distance=I.distance,z.decay=I.decay,I.castShadow){let W=I.shadow,Y=i.get(I);Y.shadowIntensity=W.intensity,Y.shadowBias=W.bias,Y.shadowNormalBias=W.normalBias,Y.shadowRadius=W.radius,Y.shadowMapSize=W.mapSize,Y.shadowCameraNear=W.camera.near,Y.shadowCameraFar=W.camera.far,n.pointShadow[d]=Y,n.pointShadowMap[d]=Q,n.pointShadowMatrix[d]=I.shadow.matrix,w++}n.point[d]=z,d++}else if(I.isHemisphereLight){let z=t.get(I);z.skyColor.copy(I.color).multiplyScalar(L),z.groundColor.copy(I.groundColor).multiplyScalar(L),n.hemi[S]=z,S++}}if(M>0)if(e.has("OES_texture_float_linear")===!0)n.rectAreaLTC1=Re.LTC_FLOAT_1,n.rectAreaLTC2=Re.LTC_FLOAT_2;else n.rectAreaLTC1=Re.LTC_HALF_1,n.rectAreaLTC2=Re.LTC_HALF_2;n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=u;let P=n.hash;if(P.sunLength!==m||P.directionalLength!==p||P.pointLength!==d||P.spotLength!==v||P.rectAreaLength!==M||P.hemiLength!==S||P.numSunShadows!==g||P.numDirectionalShadows!==T||P.numPointShadows!==w||P.numSpotShadows!==x||P.numSpotMaps!==y||P.numLightProbes!==U)n.sun.length=m,n.directional.length=p,n.spot.length=v,n.rectArea.length=M,n.point.length=d,n.hemi.length=S,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=_,n.sunShadowCascade.length=_,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.directionalShadowMatrix.length=T,n.pointShadow.length=w,n.pointShadowMap.length=w,n.pointShadowMatrix.length=w,n.spotShadow.length=x,n.spotShadowMap.length=x,n.spotLightMatrix.length=x+y-A,n.spotLightMap.length=y,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=U,P.sunLength=m,P.directionalLength=p,P.pointLength=d,P.spotLength=v,P.rectAreaLength=M,P.hemiLength=S,P.numSunShadows=g,P.numDirectionalShadows=T,P.numPointShadows=w,P.numSpotShadows=x,P.numSpotMaps=y,P.numLightProbes=U,n.version=N_++}function l(c,h){let f=0,u=0,m=0,g=0,_=0,p=0,d=h.matrixWorldInverse;for(let v=0,M=c.length;v<M;v++){let S=c[v];if(S.isSunLight){let T=n.sun[f];T.direction.setFromMatrixPosition(S.matrixWorld),T.direction.transformDirection(d),f++}else if(S.isDirectionalLight){let T=n.directional[u];T.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(d),u++}else if(S.isSpotLight){let T=n.spot[g];T.position.setFromMatrixPosition(S.matrixWorld),T.position.applyMatrix4(d),T.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(d),g++}else if(S.isRectAreaLight){let T=n.rectArea[_];T.position.setFromMatrixPosition(S.matrixWorld),T.position.applyMatrix4(d),o.identity(),s.copy(S.matrixWorld),s.premultiply(d),o.extractRotation(s),T.halfWidth.set(S.width*0.5,0,0),T.halfHeight.set(0,S.height*0.5,0),T.halfWidth.applyMatrix4(o),T.halfHeight.applyMatrix4(o),_++}else if(S.isPointLight){let T=n.point[m];T.position.setFromMatrixPosition(S.matrixWorld),T.position.applyMatrix4(d),m++}else if(S.isHemisphereLight){let T=n.hemi[p];T.direction.setFromMatrixPosition(S.matrixWorld),T.direction.transformDirection(d),p++}}}return{setup:a,setupView:l,state:n}}function Rm(e){let t=new Am(e),i=[],n=[],r=[];function s(f){h.camera=f,i.length=0,n.length=0,r.length=0}function o(f){if(f.isLightProbeGrid)r.push(f);else i.push(f)}function a(f){n.push(f)}function l(){t.setup(i),r.sort((f,u)=>f.priority-u.priority||f.id-u.id)}function c(f){t.setupView(i,f)}let h={lightsArray:i,shadowsArray:n,lightProbeGridArray:r,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:h,setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function Cm(e){let t=new WeakMap;function i(r,s=0){let o=t.get(r),a;if(o===void 0)a=new Rm(e),t.set(r,[a]);else if(s>=o.length)a=new Rm(e),o.push(a);else a=o[s];return a}function n(){t=new WeakMap}return{get:i,dispose:n}}var Im=`
void main() {

	gl_Position = vec4( position, 1.0 );

}
`,Pm=`
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
`;var B_=[new C(1,0,0),new C(-1,0,0),new C(0,1,0),new C(0,-1,0),new C(0,0,1),new C(0,0,-1)],O_=[new C(0,-1,0),new C(0,-1,0),new C(0,0,1),new C(0,0,-1),new C(0,-1,0),new C(0,-1,0)],Lm=new Je,fa=new C,$c=new C;function Dm(e,t,i){let n=new ln,r=new Z,s=new Z,o=new Mt,a=new ra,l=new sa,c={},h=i.maxTextureSize,f={[nn]:Lt,[Lt]:nn,[Gt]:Gt},u=new Ui({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Z},radius:{value:4}},vertexShader:Im,fragmentShader:Pm}),m=u.clone();m.defines.HORIZONTAL_PASS=1;let g=new Ve;g.setAttribute("position",new Xt(new Float32Array([-1,-1,0.5,3,-1,0.5,-1,3,0.5]),3));let _=new ne(g,u),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Xr;let d=this.type;this.render=function(w,x,y){if(p.enabled===!1)return;if(p.autoUpdate===!1&&p.needsUpdate===!1)return;if(w.length===0)return;if(this.type===ya)ge("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Xr;let A=e.getRenderTarget(),U=e.getActiveCubeFace(),P=e.getActiveMipmapLevel(),O=e.state;if(O.setBlending(Sn),O.buffers.depth.getReversed()===!0)O.buffers.color.setClear(0,0,0,0);else O.buffers.color.setClear(1,1,1,1);O.buffers.depth.setTest(!0),O.setScissorTest(!1);let ee=d!==this.type;if(ee)x.traverse(function(I){if(I.material)if(Array.isArray(I.material))I.material.forEach((X)=>X.needsUpdate=!0);else I.material.needsUpdate=!0});for(let I=0,X=w.length;I<X;I++){let L=w[I],N=L.shadow;if(N===void 0){ge("WebGLShadowMap:",L,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;r.copy(N.mapSize);let Q=N.getFrameExtents();if(r.multiply(Q),s.copy(N.mapSize),r.x>h||r.y>h){if(r.x>h)s.x=Math.floor(h/Q.x),r.x=s.x*Q.x,N.mapSize.x=s.x;if(r.y>h)s.y=Math.floor(h/Q.y),r.y=s.y*Q.y,N.mapSize.y=s.y}let z=e.state.buffers.depth.getReversed();if(N.camera._reversedDepth=z,N.map===null||ee===!0){if(N.map!==null){if(N.map.depthTexture!==null)N.map.depthTexture.dispose(),N.map.depthTexture=null;N.map.dispose()}if(this.type===gr){if(L.isPointLight){ge("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}N.map=new oi(r.x,r.y,{format:Ji,type:mi,minFilter:Ot,magFilter:Ot,generateMipmaps:!1}),N.map.texture.name=L.name+".shadowMap",N.map.depthTexture=new ji(r.x,r.y,Kt),N.map.depthTexture.name=L.name+".shadowMapDepth",N.map.depthTexture.format=Hi,N.map.depthTexture.compareFunction=null,N.map.depthTexture.minFilter=Ut,N.map.depthTexture.magFilter=Ut}else{if(L.isPointLight)N.map=new cr(r.x),N.map.depthTexture=new bs(r.x,ri);else N.map=new oi(r.x,r.y),N.map.depthTexture=new ji(r.x,r.y,ri);if(N.map.depthTexture.name=L.name+".shadowMap",N.map.depthTexture.format=Hi,this.type===Xr)N.map.depthTexture.compareFunction=z?ka:Ha,N.map.depthTexture.minFilter=Ot,N.map.depthTexture.magFilter=Ot;else N.map.depthTexture.compareFunction=null,N.map.depthTexture.minFilter=Ut,N.map.depthTexture.magFilter=Ut}N.camera.updateProjectionMatrix()}if(N.map.isWebGLCubeRenderTarget!==!0&&(N.map.width!==r.x||N.map.height!==r.y))N.map.setSize(r.x,r.y);let W=N.map.isWebGLCubeRenderTarget?6:N.getViewportCount();if(L.isPointLight!==!0)N.updateMatrices(L,y);let Y=(N.camera.layers.mask&4294967294)!==0?N.camera.layers:y.layers;for(let fe=0;fe<W;fe++){let k=N.getCamera(fe);if(L.isPointLight){let{camera:j,matrix:ye}=N,ve=L.distance||j.far;if(ve!==j.far)j.far=ve,j.updateProjectionMatrix();fa.setFromMatrixPosition(L.matrixWorld),j.position.copy(fa),$c.copy(j.position),$c.add(B_[fe]),j.up.copy(O_[fe]),j.lookAt($c),j.updateMatrixWorld(),ye.makeTranslation(-fa.x,-fa.y,-fa.z),Lm.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),N._frustum.setFromProjectionMatrix(Lm,j.coordinateSystem,j.reversedDepth)}if(N.map.isWebGLCubeRenderTarget)e.setRenderTarget(N.map,fe),e.clear();else{if(fe===0)e.setRenderTarget(N.map),e.clear();let j=N.getViewport(fe);o.set(s.x*j.x,s.y*j.y,s.x*j.z,s.y*j.w),O.viewport(o)}n=N.getFrustum(fe),S(x,y,k,L,Y,this.type)}if(N.isPointLightShadow!==!0&&this.type===gr)v(N,y);N.needsUpdate=!1}d=this.type,p.needsUpdate=!1,e.setRenderTarget(A,U,P)};function v(w,x){let y=t.update(_);if(u.defines.VSM_SAMPLES!==w.blurSamples)u.defines.VSM_SAMPLES=w.blurSamples,m.defines.VSM_SAMPLES=w.blurSamples,u.needsUpdate=!0,m.needsUpdate=!0;if(w.mapPass===null)w.mapPass=new oi(r.x,r.y,{format:Ji,type:mi});else if(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)w.mapPass.setSize(w.map.width,w.map.height);u.uniforms.shadow_pass.value=w.map.depthTexture,u.uniforms.resolution.value.set(w.map.width,w.map.height),u.uniforms.radius.value=w.radius,e.setRenderTarget(w.mapPass),e.clear(),e.renderBufferDirect(x,null,y,u,_,null),m.uniforms.shadow_pass.value=w.mapPass.texture,m.uniforms.resolution.value.set(w.map.width,w.map.height),m.uniforms.radius.value=w.radius,e.setRenderTarget(w.map),e.clear(),e.renderBufferDirect(x,null,y,m,_,null)}function M(w,x,y,A){let U=null,P=y.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(P!==void 0)U=P;else if(U=y.isPointLight===!0?l:a,e.localClippingEnabled&&x.clipShadows===!0&&Array.isArray(x.clippingPlanes)&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0||x.map&&x.alphaTest>0||x.alphaToCoverage===!0){let O=U.uuid,ee=x.uuid,I=c[O];if(I===void 0)I={},c[O]=I;let X=I[ee];if(X===void 0)X=U.clone(),I[ee]=X,x.addEventListener("dispose",T);U=X}if(U.visible=x.visible,U.wireframe=x.wireframe,A===gr)U.side=x.shadowSide!==null?x.shadowSide:x.side;else U.side=x.shadowSide!==null?x.shadowSide:f[x.side];if(U.alphaMap=x.alphaMap,U.alphaTest=x.alphaToCoverage===!0?0.5:x.alphaTest,U.map=x.map,U.clipShadows=x.clipShadows,U.clippingPlanes=x.clippingPlanes,U.clipIntersection=x.clipIntersection,U.displacementMap=x.displacementMap,U.displacementScale=x.displacementScale,U.displacementBias=x.displacementBias,U.wireframeLinewidth=x.wireframeLinewidth,U.linewidth=x.linewidth,y.isPointLight===!0&&U.isMeshDistanceMaterial===!0){let O=e.properties.get(U);O.light=y}return U}function S(w,x,y,A,U,P){if(w.visible===!1)return;if(w.layers.test(U)&&(w.isMesh||w.isLine||w.isPoints)){if((w.castShadow||w.receiveShadow&&P===gr)&&(!w.frustumCulled||w.intersectsFrustum(n))){w.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,w.matrixWorld);let I=t.update(w),X=w.material;if(Array.isArray(X)){let L=I.groups;for(let N=0,Q=L.length;N<Q;N++){let z=L[N],W=X[z.materialIndex];if(W&&W.visible){let Y=M(w,W,A,P);w.onBeforeShadow(e,w,x,y,I,Y,z),e.renderBufferDirect(y,null,I,Y,w,z),w.onAfterShadow(e,w,x,y,I,Y,z)}}}else if(X.visible){let L=M(w,X,A,P);w.onBeforeShadow(e,w,x,y,I,L,null),e.renderBufferDirect(y,null,I,L,w,null),w.onAfterShadow(e,w,x,y,I,L,null)}}}let ee=w.children;for(let I=0,X=ee.length;I<X;I++)S(ee[I],x,y,A,U,P)}function T(w){w.target.removeEventListener("dispose",T);for(let y in c){let A=c[y],U=w.target.uuid;if(U in A)A[U].dispose(),delete A[U]}}}function Nm(e,t){function i(){let D=!1,te=new Mt,K=null,de=new Mt(0,0,0,0);return{setMask:function(pe){if(K!==pe&&!D)e.colorMask(pe,pe,pe,pe),K=pe},setLocked:function(pe){D=pe},setClear:function(pe,Te,Ze,We,Ie){if(Ie===!0)pe*=We,Te*=We,Ze*=We;if(te.set(pe,Te,Ze,We),de.equals(te)===!1)e.clearColor(pe,Te,Ze,We),de.copy(te)},reset:function(){D=!1,K=null,de.set(-1,0,0,0)}}}function n(){let D=!1,te=!1,K=null,de=null,pe=null;return{setReversed:function(Te){if(te!==Te){let Ze=t.get("EXT_clip_control");if(Te)Ze.clipControlEXT(Ze.LOWER_LEFT_EXT,Ze.ZERO_TO_ONE_EXT);else Ze.clipControlEXT(Ze.LOWER_LEFT_EXT,Ze.NEGATIVE_ONE_TO_ONE_EXT);te=Te;let We=pe;pe=null,this.setClear(We)}},getReversed:function(){return te},setTest:function(Te){if(Te)Ee(e.DEPTH_TEST);else ht(e.DEPTH_TEST)},setMask:function(Te){if(K!==Te&&!D)e.depthMask(Te),K=Te},setFunc:function(Te){if(te)Te=tu[Te];if(de!==Te){switch(Te){case Ys:e.depthFunc(e.NEVER);break;case Zs:e.depthFunc(e.ALWAYS);break;case Js:e.depthFunc(e.LESS);break;case Zn:e.depthFunc(e.LEQUAL);break;case Ks:e.depthFunc(e.EQUAL);break;case $s:e.depthFunc(e.GEQUAL);break;case Qs:e.depthFunc(e.GREATER);break;case js:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}de=Te}},setLocked:function(Te){D=Te},setClear:function(Te){if(pe!==Te){if(pe=Te,te)Te=1-Te;e.clearDepth(Te)}},reset:function(){D=!1,K=null,de=null,pe=null,te=!1}}}function r(){let D=!1,te=null,K=null,de=null,pe=null,Te=null,Ze=null,We=null,Ie=null;return{setTest:function(Ke){if(!D)if(Ke)Ee(e.STENCIL_TEST);else ht(e.STENCIL_TEST)},setMask:function(Ke){if(te!==Ke&&!D)e.stencilMask(Ke),te=Ke},setFunc:function(Ke,ct,Pe){if(K!==Ke||de!==ct||pe!==Pe)e.stencilFunc(Ke,ct,Pe),K=Ke,de=ct,pe=Pe},setOp:function(Ke,ct,Pe){if(Te!==Ke||Ze!==ct||We!==Pe)e.stencilOp(Ke,ct,Pe),Te=Ke,Ze=ct,We=Pe},setLocked:function(Ke){D=Ke},setClear:function(Ke){if(Ie!==Ke)e.clearStencil(Ke),Ie=Ke},reset:function(){D=!1,te=null,K=null,de=null,pe=null,Te=null,Ze=null,We=null,Ie=null}}}let s=new i,o=new n,a=new r,l={},c=new WeakMap,h={},f={},u={},m=new WeakMap,g=[],_=null,p=!1,d=null,v=null,M=null,S=null,T=null,w=null,x=null,y=new xe(0,0,0),A=0,U=!1,P=null,O=null,ee=null,I=null,X=null,L=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),N=!1,Q=0,z=e.getParameter(e.VERSION);if(z.indexOf("WebGL")!==-1)Q=parseFloat(/^WebGL (\d)/.exec(z)[1]),N=Q>=1;else if(z.indexOf("OpenGL ES")!==-1)Q=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),N=Q>=2;let W=null,Y={},fe=e.getParameter(e.SCISSOR_BOX),k=e.getParameter(e.VIEWPORT),j=new Mt().fromArray(fe),ye=new Mt().fromArray(k);function ve(D,te,K,de){let pe=new Uint8Array(4),Te=e.createTexture();e.bindTexture(D,Te),e.texParameteri(D,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(D,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let Ze=0;Ze<K;Ze++)if(D===e.TEXTURE_3D||D===e.TEXTURE_2D_ARRAY)e.texImage3D(te,0,e.RGBA,1,1,de,0,e.RGBA,e.UNSIGNED_BYTE,pe);else e.texImage2D(te+Ze,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,pe);return Te}let Be={};Be[e.TEXTURE_2D]=ve(e.TEXTURE_2D,e.TEXTURE_2D,1),Be[e.TEXTURE_CUBE_MAP]=ve(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),Be[e.TEXTURE_2D_ARRAY]=ve(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),Be[e.TEXTURE_3D]=ve(e.TEXTURE_3D,e.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),Ee(e.DEPTH_TEST),o.setFunc(Zn),Ue(!1),Ye(Jl),Ee(e.CULL_FACE),ue(Sn);function Ee(D){if(h[D]!==!0)e.enable(D),h[D]=!0}function ht(D){if(h[D]!==!1)e.disable(D),h[D]=!1}function De(D,te){if(u[D]!==te){if(e.bindFramebuffer(D,te),u[D]=te,D===e.DRAW_FRAMEBUFFER)u[e.FRAMEBUFFER]=te;if(D===e.FRAMEBUFFER)u[e.DRAW_FRAMEBUFFER]=te;return!0}return!1}function Ne(D,te){let K=g,de=!1;if(D){if(K=m.get(te),K===void 0)K=[],m.set(te,K);let pe=D.textures;if(K.length!==pe.length||K[0]!==e.COLOR_ATTACHMENT0){for(let Te=0,Ze=pe.length;Te<Ze;Te++)K[Te]=e.COLOR_ATTACHMENT0+Te;K.length=pe.length,de=!0}}else if(K[0]!==e.BACK)K[0]=e.BACK,de=!0;if(de)e.drawBuffers(K)}function nt(D){if(_!==D)return e.useProgram(D),_=D,!0;return!1}let re={[Yn]:e.FUNC_ADD,[Eh]:e.FUNC_SUBTRACT,[Th]:e.FUNC_REVERSE_SUBTRACT};re[wh]=e.MIN,re[Ah]=e.MAX;let ce={[Rh]:e.ZERO,[Ch]:e.ONE,[Ih]:e.SRC_COLOR,[va]:e.SRC_ALPHA,[Fh]:e.SRC_ALPHA_SATURATE,[Nh]:e.DST_COLOR,[Lh]:e.DST_ALPHA,[Ph]:e.ONE_MINUS_SRC_COLOR,[Ma]:e.ONE_MINUS_SRC_ALPHA,[Uh]:e.ONE_MINUS_DST_COLOR,[Dh]:e.ONE_MINUS_DST_ALPHA,[Bh]:e.CONSTANT_COLOR,[Oh]:e.ONE_MINUS_CONSTANT_COLOR,[zh]:e.CONSTANT_ALPHA,[Gh]:e.ONE_MINUS_CONSTANT_ALPHA};function ue(D,te,K,de,pe,Te,Ze,We,Ie,Ke){if(D===Sn){if(p===!0)ht(e.BLEND),p=!1;return}if(p===!1)Ee(e.BLEND),p=!0;if(D!==bh){if(D!==d||Ke!==U){if(v!==Yn||T!==Yn)e.blendEquation(e.FUNC_ADD),v=Yn,T=Yn;if(Ke)switch(D){case qn:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case Kl:e.blendFunc(e.ONE,e.ONE);break;case $l:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case Ql:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:Fe("WebGLState: Invalid blending: ",D);break}else switch(D){case qn:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case Kl:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case $l:Fe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ql:Fe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Fe("WebGLState: Invalid blending: ",D);break}M=null,S=null,w=null,x=null,y.set(0,0,0),A=0,d=D,U=Ke}return}if(pe=pe||te,Te=Te||K,Ze=Ze||de,te!==v||pe!==T)e.blendEquationSeparate(re[te],re[pe]),v=te,T=pe;if(K!==M||de!==S||Te!==w||Ze!==x)e.blendFuncSeparate(ce[K],ce[de],ce[Te],ce[Ze]),M=K,S=de,w=Te,x=Ze;if(We.equals(y)===!1||Ie!==A)e.blendColor(We.r,We.g,We.b,Ie),y.copy(We),A=Ie;d=D,U=!1}function Ce(D,te){D.side===Gt?ht(e.CULL_FACE):Ee(e.CULL_FACE);let K=D.side===Lt;if(te)K=!K;Ue(K),D.blending===qn&&D.transparent===!1?ue(Sn):ue(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),o.setFunc(D.depthFunc),o.setTest(D.depthTest),o.setMask(D.depthWrite),s.setMask(D.colorWrite);let de=D.stencilWrite;if(a.setTest(de),de)a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass);ot(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?Ee(e.SAMPLE_ALPHA_TO_COVERAGE):ht(e.SAMPLE_ALPHA_TO_COVERAGE)}function Ue(D){if(P!==D){if(D)e.frontFace(e.CW);else e.frontFace(e.CCW);P=D}}function Ye(D){if(D!==Mh){if(Ee(e.CULL_FACE),D!==O)if(D===Jl)e.cullFace(e.BACK);else if(D===Sh)e.cullFace(e.FRONT);else e.cullFace(e.FRONT_AND_BACK)}else ht(e.CULL_FACE);O=D}function He(D){if(D!==ee){if(N)e.lineWidth(D);ee=D}}function ot(D,te,K){if(D){if(Ee(e.POLYGON_OFFSET_FILL),I!==te||X!==K){if(I=te,X=K,o.getReversed())te=-te,K=-K;e.polygonOffset(te,K)}}else ht(e.POLYGON_OFFSET_FILL)}function ft(D){if(D)Ee(e.SCISSOR_TEST);else ht(e.SCISSOR_TEST)}function bt(D){if(D===void 0)D=e.TEXTURE0+L-1;if(W!==D)e.activeTexture(D),W=D}function B(D,te,K){if(K===void 0)if(W===null)K=e.TEXTURE0+L-1;else K=W;let de=Y[K];if(de===void 0)de={type:void 0,texture:void 0},Y[K]=de;if(de.type!==D||de.texture!==te){if(W!==K)e.activeTexture(K),W=K;e.bindTexture(D,te||Be[D]),de.type=D,de.texture=te}}function ii(){let D=Y[W];if(D!==void 0&&D.type!==void 0)e.bindTexture(D.type,null),D.type=void 0,D.texture=void 0}function at(){try{e.compressedTexImage2D(...arguments)}catch(D){Fe("WebGLState:",D)}}function Zt(){try{e.compressedTexImage3D(...arguments)}catch(D){Fe("WebGLState:",D)}}function we(){try{e.texSubImage2D(...arguments)}catch(D){Fe("WebGLState:",D)}}function At(){try{e.texSubImage3D(...arguments)}catch(D){Fe("WebGLState:",D)}}function $e(){try{e.compressedTexSubImage2D(...arguments)}catch(D){Fe("WebGLState:",D)}}function tt(){try{e.compressedTexSubImage3D(...arguments)}catch(D){Fe("WebGLState:",D)}}function ni(){try{e.texStorage2D(...arguments)}catch(D){Fe("WebGLState:",D)}}function R(){try{e.texStorage3D(...arguments)}catch(D){Fe("WebGLState:",D)}}function b(){try{e.texImage2D(...arguments)}catch(D){Fe("WebGLState:",D)}}function G(){try{e.texImage3D(...arguments)}catch(D){Fe("WebGLState:",D)}}function le(D){if(f[D]!==void 0)return f[D];else return e.getParameter(D)}function oe(D,te){if(f[D]!==te)e.pixelStorei(D,te),f[D]=te}function me(D){if(j.equals(D)===!1)e.scissor(D.x,D.y,D.z,D.w),j.copy(D)}function Me(D){if(ye.equals(D)===!1)e.viewport(D.x,D.y,D.z,D.w),ye.copy(D)}function J(D,te){let K=c.get(te);if(K===void 0)K=new WeakMap,c.set(te,K);let de=K.get(D);if(de===void 0)de=e.getUniformBlockIndex(te,D.name),e.uniformBlockBinding(te,de,de),K.set(D,de)}function ie(D,te,K){let pe=c.get(te).get(D);if(l[pe]!==K)e.bindBufferBase(e.UNIFORM_BUFFER,pe,K),l[pe]=K}function _e(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),h={},f={},W=null,Y={},u={},l={},m=new WeakMap,g=[],_=null,p=!1,d=null,v=null,M=null,S=null,T=null,w=null,x=null,y=new xe(0,0,0),A=0,U=!1,P=null,O=null,ee=null,I=null,X=null,j.set(0,0,e.canvas.width,e.canvas.height),ye.set(0,0,e.canvas.width,e.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:Ee,disable:ht,bindFramebuffer:De,drawBuffers:Ne,useProgram:nt,setBlending:ue,setMaterial:Ce,setFlipSided:Ue,setCullFace:Ye,setLineWidth:He,setPolygonOffset:ot,setScissorTest:ft,activeTexture:bt,bindTexture:B,unbindTexture:ii,compressedTexImage2D:at,compressedTexImage3D:Zt,texImage2D:b,texImage3D:G,pixelStorei:oe,getParameter:le,updateUBOMapping:J,uniformBlockBinding:ie,texStorage2D:ni,texStorage3D:R,texSubImage2D:we,texSubImage3D:At,compressedTexSubImage2D:$e,compressedTexSubImage3D:tt,scissor:me,viewport:Me,reset:_e}}function Um(e,t,i,n,r,s,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Z,h=new WeakMap,f=new Set,u,m=new WeakMap,g=new Set,_=new FinalizationRegistry((R)=>g.delete(R)),p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(R){}function d(R,b){return p?new OffscreenCanvas(R,b):Jn("canvas")}function v(R,b,G){let le=1,oe=ni(R);if(oe.width>G||oe.height>G)le=G/Math.max(oe.width,oe.height);if(le<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let me=Math.floor(le*oe.width),Me=Math.floor(le*oe.height);if(u===void 0)u=d(me,Me);let J=b?d(me,Me):u;return J.width=me,J.height=Me,J.getContext("2d").drawImage(R,0,0,me,Me),ge("WebGLRenderer: Texture has been resized from ("+oe.width+"x"+oe.height+") to ("+me+"x"+Me+")."),J}else{if("data"in R)ge("WebGLRenderer: Image in DataTexture is too big ("+oe.width+"x"+oe.height+").");return R}return R}function M(R){return R.generateMipmaps}function S(R){e.generateMipmap(R)}function T(R){if(R.isWebGLCubeRenderTarget)return e.TEXTURE_CUBE_MAP;if(R.isWebGL3DRenderTarget)return e.TEXTURE_3D;if(R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture)return e.TEXTURE_2D_ARRAY;return e.TEXTURE_2D}function w(R,b,G,le,oe,me=!1){if(R!==null){if(e[R]!==void 0)return e[R];ge("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let Me;if(le){if(Me=t.get("EXT_texture_norm16"),!Me)ge("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension")}let J=b;if(b===e.RED){if(G===e.FLOAT)J=e.R32F;if(G===e.HALF_FLOAT)J=e.R16F;if(G===e.UNSIGNED_BYTE)J=e.R8;if(G===e.UNSIGNED_SHORT&&Me)J=Me.R16_EXT;if(G===e.SHORT&&Me)J=Me.R16_SNORM_EXT}if(b===e.RED_INTEGER){if(G===e.UNSIGNED_BYTE)J=e.R8UI;if(G===e.UNSIGNED_SHORT)J=e.R16UI;if(G===e.UNSIGNED_INT)J=e.R32UI;if(G===e.BYTE)J=e.R8I;if(G===e.SHORT)J=e.R16I;if(G===e.INT)J=e.R32I}if(b===e.RG){if(G===e.FLOAT)J=e.RG32F;if(G===e.HALF_FLOAT)J=e.RG16F;if(G===e.UNSIGNED_BYTE)J=e.RG8;if(G===e.UNSIGNED_SHORT&&Me)J=Me.RG16_EXT;if(G===e.SHORT&&Me)J=Me.RG16_SNORM_EXT}if(b===e.RG_INTEGER){if(G===e.UNSIGNED_BYTE)J=e.RG8UI;if(G===e.UNSIGNED_SHORT)J=e.RG16UI;if(G===e.UNSIGNED_INT)J=e.RG32UI;if(G===e.BYTE)J=e.RG8I;if(G===e.SHORT)J=e.RG16I;if(G===e.INT)J=e.RG32I}if(b===e.RGB_INTEGER){if(G===e.UNSIGNED_BYTE)J=e.RGB8UI;if(G===e.UNSIGNED_SHORT)J=e.RGB16UI;if(G===e.UNSIGNED_INT)J=e.RGB32UI;if(G===e.BYTE)J=e.RGB8I;if(G===e.SHORT)J=e.RGB16I;if(G===e.INT)J=e.RGB32I}if(b===e.RGBA_INTEGER){if(G===e.UNSIGNED_BYTE)J=e.RGBA8UI;if(G===e.UNSIGNED_SHORT)J=e.RGBA16UI;if(G===e.UNSIGNED_INT)J=e.RGBA32UI;if(G===e.BYTE)J=e.RGBA8I;if(G===e.SHORT)J=e.RGBA16I;if(G===e.INT)J=e.RGBA32I}if(b===e.RGB){if(G===e.UNSIGNED_SHORT&&Me)J=Me.RGB16_EXT;if(G===e.SHORT&&Me)J=Me.RGB16_SNORM_EXT;if(G===e.UNSIGNED_INT_5_9_9_9_REV)J=e.RGB9_E5;if(G===e.UNSIGNED_INT_10F_11F_11F_REV)J=e.R11F_G11F_B10F}if(b===e.RGBA){let ie=me?br:it.getTransfer(oe);if(G===e.FLOAT)J=e.RGBA32F;if(G===e.HALF_FLOAT)J=e.RGBA16F;if(G===e.UNSIGNED_BYTE)J=ie===xt?e.SRGB8_ALPHA8:e.RGBA8;if(G===e.UNSIGNED_SHORT&&Me)J=Me.RGBA16_EXT;if(G===e.SHORT&&Me)J=Me.RGBA16_SNORM_EXT;if(G===e.UNSIGNED_SHORT_4_4_4_4)J=e.RGBA4;if(G===e.UNSIGNED_SHORT_5_5_5_1)J=e.RGB5_A1}if(J===e.R16F||J===e.R32F||J===e.RG16F||J===e.RG32F||J===e.RGBA16F||J===e.RGBA32F)t.get("EXT_color_buffer_float");return J}function x(R,b){let G;if(R){if(b===null||b===ri||b===dn)G=e.DEPTH24_STENCIL8;else if(b===Kt)G=e.DEPTH32F_STENCIL8;else if(b===Nn)G=e.DEPTH24_STENCIL8,ge("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")}else if(b===null||b===ri||b===dn)G=e.DEPTH_COMPONENT24;else if(b===Kt)G=e.DEPTH_COMPONENT32F;else if(b===Nn)G=e.DEPTH_COMPONENT16;return G}function y(R,b){if(M(R)===!0||R.isFramebufferTexture&&R.minFilter!==Ut&&R.minFilter!==Ot)return Math.log2(Math.max(b.width,b.height))+1;else if(R.mipmaps.length>0)return R.mipmaps.length;else if(R.isCompressedTexture&&Array.isArray(R.image))return b.mipmaps.length;else return 1}function A(R){let b=new WeakRef(R);n.get(R).__ref=b,g.add(b),_.register(R,b,b)}function U(R){let b=n.get(R).__ref;if(b===void 0)return;g.delete(b),_.unregister(b)}function P(R){ee(R.target)}function O(R){I(R.target)}function ee(R){if(R.removeEventListener("dispose",P),U(R),L(R),R.isVideoTexture)h.delete(R);if(R.isHTMLTexture)f.delete(R)}function I(R){R.removeEventListener("dispose",O),U(R),Q(R)}function X(){for(let R of g){let b=R.deref();if(b===void 0)continue;if(b.isRenderTarget===!0)I(b);else ee(b)}g.clear(),f.clear()}function L(R){let b=n.get(R);if(b.__webglInit===void 0)return;let G=R.source,le=m.get(G);if(le){let oe=le[b.__cacheKey];if(oe.usedTimes--,oe.usedTimes===0)N(R);if(Object.keys(le).length===0)m.delete(G)}n.remove(R)}function N(R){let b=n.get(R);e.deleteTexture(b.__webglTexture);let G=R.source,le=m.get(G);delete le[b.__cacheKey],o.memory.textures--}function Q(R){let b=n.get(R);if(b.__depthDisposeCallback)b.__depthDisposeCallback();let G=R.depthTexture;if(G&&G.renderTarget===R)ee(G);if(R.isWebGLCubeRenderTarget)for(let oe=0;oe<6;oe++){if(Array.isArray(b.__webglFramebuffer[oe]))for(let me=0;me<b.__webglFramebuffer[oe].length;me++)e.deleteFramebuffer(b.__webglFramebuffer[oe][me]);else e.deleteFramebuffer(b.__webglFramebuffer[oe]);if(b.__webglDepthbuffer)e.deleteRenderbuffer(b.__webglDepthbuffer[oe])}else{if(Array.isArray(b.__webglFramebuffer))for(let oe=0;oe<b.__webglFramebuffer.length;oe++)e.deleteFramebuffer(b.__webglFramebuffer[oe]);else e.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer)e.deleteRenderbuffer(b.__webglDepthbuffer);if(b.__webglMultisampledFramebuffer)e.deleteFramebuffer(b.__webglMultisampledFramebuffer);if(b.__webglColorRenderbuffer){for(let oe=0;oe<b.__webglColorRenderbuffer.length;oe++)if(b.__webglColorRenderbuffer[oe])e.deleteRenderbuffer(b.__webglColorRenderbuffer[oe])}if(b.__webglDepthRenderbuffer)e.deleteRenderbuffer(b.__webglDepthRenderbuffer)}let le=R.textures;for(let oe=0,me=le.length;oe<me;oe++){let Me=n.get(le[oe]);if(Me.__webglTexture)e.deleteTexture(Me.__webglTexture),o.memory.textures--;n.remove(le[oe])}n.remove(R)}let z=0;function W(){z=0}function Y(){return z}function fe(R){z=R}function k(){let R=z;if(R>=r.maxTextures)ge("WebGLTextures: Trying to use "+(R+1)+" texture units while this GPU supports only "+r.maxTextures);return z+=1,R}function j(R){let b=[];return b.push(R.wrapS),b.push(R.wrapT),b.push(R.wrapR||0),b.push(R.magFilter),b.push(R.minFilter),b.push(R.anisotropy),b.push(R.internalFormat),b.push(R.format),b.push(R.type),b.push(R.generateMipmaps),b.push(R.mipmapsAutoUpdate),b.push(R.premultiplyAlpha),b.push(R.flipY),b.push(R.unpackAlignment),b.push(R.colorSpace),b.join()}function ye(R,b){let G=n.get(R);if(R.isVideoTexture)$e(R);if(R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&G.__version!==R.version){let le=R.image;if(le===null)ge("WebGLRenderer: Texture marked for update but no image data found.");else if(le.complete===!1)ge("WebGLRenderer: Texture marked for update but image is incomplete");else{Ce(G,R,b);return}}else if(R.isExternalTexture)G.__webglTexture=R.sourceTexture?R.sourceTexture:null;i.bindTexture(e.TEXTURE_2D,G.__webglTexture,e.TEXTURE0+b)}function ve(R,b){let G=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&G.__version!==R.version){Ce(G,R,b);return}else if(R.isExternalTexture)G.__webglTexture=R.sourceTexture?R.sourceTexture:null;i.bindTexture(e.TEXTURE_2D_ARRAY,G.__webglTexture,e.TEXTURE0+b)}function Be(R,b){let G=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&G.__version!==R.version){Ce(G,R,b);return}i.bindTexture(e.TEXTURE_3D,G.__webglTexture,e.TEXTURE0+b)}function Ee(R,b){let G=n.get(R);if(R.version>0&&G.__version!==R.version){Ue(G,R,b);return}i.bindTexture(e.TEXTURE_CUBE_MAP,G.__webglTexture,e.TEXTURE0+b)}let ht={[Dn]:e.REPEAT,[Mi]:e.CLAMP_TO_EDGE,[Yr]:e.MIRRORED_REPEAT},De={[Ut]:e.NEAREST,[jl]:e.NEAREST_MIPMAP_NEAREST,[Zr]:e.NEAREST_MIPMAP_LINEAR,[Ot]:e.LINEAR,[io]:e.LINEAR_MIPMAP_NEAREST,[Oi]:e.LINEAR_MIPMAP_LINEAR},Ne={[qh]:e.NEVER,[Va]:e.ALWAYS,[Yh]:e.LESS,[Ha]:e.LEQUAL,[Zh]:e.EQUAL,[ka]:e.GEQUAL,[Jh]:e.GREATER,[Kh]:e.NOTEQUAL};function nt(R,b){if(b.type===Kt&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===Ot||b.magFilter===io||b.magFilter===Zr||b.magFilter===Oi||b.minFilter===Ot||b.minFilter===io||b.minFilter===Zr||b.minFilter===Oi))ge("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.");if(e.texParameteri(R,e.TEXTURE_WRAP_S,ht[b.wrapS]),e.texParameteri(R,e.TEXTURE_WRAP_T,ht[b.wrapT]),R===e.TEXTURE_3D||R===e.TEXTURE_2D_ARRAY)e.texParameteri(R,e.TEXTURE_WRAP_R,ht[b.wrapR]);if(e.texParameteri(R,e.TEXTURE_MAG_FILTER,De[b.magFilter]),e.texParameteri(R,e.TEXTURE_MIN_FILTER,De[b.minFilter]),b.compareFunction)e.texParameteri(R,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(R,e.TEXTURE_COMPARE_FUNC,Ne[b.compareFunction]);if(t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Ut)return;if(b.minFilter!==Zr&&b.minFilter!==Oi)return;if(b.type===Kt&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){let G=t.get("EXT_texture_filter_anisotropic");e.texParameterf(R,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,r.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function re(R,b){let G=!1;if(R.__webglInit===void 0)R.__webglInit=!0,b.addEventListener("dispose",P),A(b);let le=b.source,oe=m.get(le);if(oe===void 0)oe={},m.set(le,oe);let me=j(b);if(me!==R.__cacheKey){if(oe[me]===void 0)oe[me]={texture:e.createTexture(),usedTimes:0},o.memory.textures++,G=!0;oe[me].usedTimes++;let Me=oe[R.__cacheKey];if(Me!==void 0){if(oe[R.__cacheKey].usedTimes--,Me.usedTimes===0)N(b)}R.__cacheKey=me,R.__webglTexture=oe[me].texture}return G}function ce(R,b,G){return Math.floor(Math.floor(R/G)/b)}function ue(R,b,G,le){let me=R.updateRanges;if(me.length===0)i.texSubImage2D(e.TEXTURE_2D,0,0,0,b.width,b.height,G,le,b.data);else{me.sort((D,te)=>D.start-te.start);let Me=0;for(let D=1;D<me.length;D++){let te=me[Me],K=me[D],de=te.start+te.count,pe=ce(K.start,b.width,4),Te=ce(te.start,b.width,4);if(K.start<=de+1&&pe===Te&&ce(K.start+K.count-1,b.width,4)===pe)te.count=Math.max(te.count,K.start+K.count-te.start);else++Me,me[Me]=K}me.length=Me+1;let J=i.getParameter(e.UNPACK_ROW_LENGTH),ie=i.getParameter(e.UNPACK_SKIP_PIXELS),_e=i.getParameter(e.UNPACK_SKIP_ROWS);i.pixelStorei(e.UNPACK_ROW_LENGTH,b.width);for(let D=0,te=me.length;D<te;D++){let K=me[D],de=Math.floor(K.start/4),pe=Math.ceil(K.count/4),Te=de%b.width,Ze=Math.floor(de/b.width),We=pe,Ie=1;i.pixelStorei(e.UNPACK_SKIP_PIXELS,Te),i.pixelStorei(e.UNPACK_SKIP_ROWS,Ze),i.texSubImage2D(e.TEXTURE_2D,0,Te,Ze,We,1,G,le,b.data)}R.clearUpdateRanges(),i.pixelStorei(e.UNPACK_ROW_LENGTH,J),i.pixelStorei(e.UNPACK_SKIP_PIXELS,ie),i.pixelStorei(e.UNPACK_SKIP_ROWS,_e)}}function Ce(R,b,G){let le=e.TEXTURE_2D;if(b.isDataArrayTexture||b.isCompressedArrayTexture)le=e.TEXTURE_2D_ARRAY;if(b.isData3DTexture)le=e.TEXTURE_3D;let oe=re(R,b),me=b.source;i.bindTexture(le,R.__webglTexture,e.TEXTURE0+G);let Me=n.get(me);if(me.version!==Me.__version||oe===!0){if(i.activeTexture(e.TEXTURE0+G),(typeof ImageBitmap<"u"&&b.image instanceof ImageBitmap)===!1){let Ie=it.getPrimaries(it.workingColorSpace),Ke=b.colorSpace===sn?null:it.getPrimaries(b.colorSpace),ct=b.colorSpace===sn||Ie===Ke?e.NONE:e.BROWSER_DEFAULT_WEBGL;i.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,ct)}i.pixelStorei(e.UNPACK_ALIGNMENT,b.unpackAlignment);let ie=v(b.image,!1,r.maxTextureSize);ie=tt(b,ie);let _e=s.convert(b.format,b.colorSpace),D=s.convert(b.type),te=w(b.internalFormat,_e,D,b.normalized,b.colorSpace,b.isVideoTexture);nt(le,b);let K,de=b.mipmaps,pe=b.isVideoTexture!==!0,Te=Me.__version===void 0||oe===!0,Ze=me.dataReady,We=y(b,ie);if(b.isDepthTexture){if(te=x(b.format===Zi,b.type),Te)if(pe)i.texStorage2D(e.TEXTURE_2D,1,te,ie.width,ie.height);else i.texImage2D(e.TEXTURE_2D,0,te,ie.width,ie.height,0,_e,D,null)}else if(b.isDataTexture)if(de.length>0){if(pe&&Te)i.texStorage2D(e.TEXTURE_2D,We,te,de[0].width,de[0].height);for(let Ie=0,Ke=de.length;Ie<Ke;Ie++)if(K=de[Ie],pe){if(Ze)i.texSubImage2D(e.TEXTURE_2D,Ie,0,0,K.width,K.height,_e,D,K.data)}else i.texImage2D(e.TEXTURE_2D,Ie,te,K.width,K.height,0,_e,D,K.data);b.generateMipmaps=!1}else if(pe){if(Te)i.texStorage2D(e.TEXTURE_2D,We,te,ie.width,ie.height);if(Ze)ue(b,ie,_e,D)}else i.texImage2D(e.TEXTURE_2D,0,te,ie.width,ie.height,0,_e,D,ie.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){if(pe&&Te)i.texStorage3D(e.TEXTURE_2D_ARRAY,We,te,de[0].width,de[0].height,ie.depth);for(let Ie=0,Ke=de.length;Ie<Ke;Ie++)if(K=de[Ie],b.format!==gi)if(_e!==null)if(pe){if(Ze)if(b.layerUpdates.size>0){let ct=qc(K.width,K.height,b.format,b.type);for(let Pe of b.layerUpdates){let Ct=K.data.subarray(Pe*ct/K.data.BYTES_PER_ELEMENT,(Pe+1)*ct/K.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,Ie,0,0,Pe,K.width,K.height,1,_e,Ct)}}else i.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,Ie,0,0,0,K.width,K.height,ie.depth,_e,K.data)}else i.compressedTexImage3D(e.TEXTURE_2D_ARRAY,Ie,te,K.width,K.height,ie.depth,0,K.data,0,0);else ge("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(pe){if(Ze)i.texSubImage3D(e.TEXTURE_2D_ARRAY,Ie,0,0,0,K.width,K.height,ie.depth,_e,D,K.data)}else i.texImage3D(e.TEXTURE_2D_ARRAY,Ie,te,K.width,K.height,ie.depth,0,_e,D,K.data);if(b.layerUpdates.size>0)b.clearLayerUpdates()}else{if(pe&&Te)i.texStorage2D(e.TEXTURE_2D,We,te,de[0].width,de[0].height);for(let Ie=0,Ke=de.length;Ie<Ke;Ie++)if(K=de[Ie],b.format!==gi)if(_e!==null)if(pe){if(Ze)i.compressedTexSubImage2D(e.TEXTURE_2D,Ie,0,0,K.width,K.height,_e,K.data)}else i.compressedTexImage2D(e.TEXTURE_2D,Ie,te,K.width,K.height,0,K.data);else ge("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(pe){if(Ze)i.texSubImage2D(e.TEXTURE_2D,Ie,0,0,K.width,K.height,_e,D,K.data)}else i.texImage2D(e.TEXTURE_2D,Ie,te,K.width,K.height,0,_e,D,K.data)}else if(b.isDataArrayTexture)if(pe){if(Te)i.texStorage3D(e.TEXTURE_2D_ARRAY,We,te,ie.width,ie.height,ie.depth);if(Ze)if(b.layerUpdates.size>0){let Ie=qc(ie.width,ie.height,b.format,b.type);for(let Ke of b.layerUpdates){let ct=ie.data.subarray(Ke*Ie/ie.data.BYTES_PER_ELEMENT,(Ke+1)*Ie/ie.data.BYTES_PER_ELEMENT);i.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,Ke,ie.width,ie.height,1,_e,D,ct)}b.clearLayerUpdates()}else i.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,_e,D,ie.data)}else i.texImage3D(e.TEXTURE_2D_ARRAY,0,te,ie.width,ie.height,ie.depth,0,_e,D,ie.data);else if(b.isData3DTexture)if(pe){if(Te)i.texStorage3D(e.TEXTURE_3D,We,te,ie.width,ie.height,ie.depth);if(Ze)i.texSubImage3D(e.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,_e,D,ie.data)}else i.texImage3D(e.TEXTURE_3D,0,te,ie.width,ie.height,ie.depth,0,_e,D,ie.data);else if(b.isFramebufferTexture){if(Te)if(pe)i.texStorage2D(e.TEXTURE_2D,We,te,ie.width,ie.height);else{let Ie=ie.width,Ke=ie.height;for(let ct=0;ct<We;ct++)i.texImage2D(e.TEXTURE_2D,ct,te,Ie,Ke,0,_e,D,null),Ie>>=1,Ke>>=1}}else if(b.isHTMLTexture){if("texElementImage2D"in e){let Ie=e.canvas;if(!Ie.hasAttribute("layoutsubtree"))Ie.setAttribute("layoutsubtree","true");if(ie.parentNode!==Ie){Ie.appendChild(ie),f.add(b),Ie.onpaint=(Ke)=>{let ct=Ke.changedElements;for(let Pe of f)if(ct.includes(Pe.image))Pe.needsUpdate=!0},Ie.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,ie);else{let{RGBA:ct,RGBA:Pe,UNSIGNED_BYTE:Ct}=e;e.texElementImage2D(e.TEXTURE_2D,0,ct,Pe,Ct,ie)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(de.length>0){if(pe&&Te){let Ie=ni(de[0]);i.texStorage2D(e.TEXTURE_2D,We,te,Ie.width,Ie.height)}for(let Ie=0,Ke=de.length;Ie<Ke;Ie++)if(K=de[Ie],pe){if(Ze)i.texSubImage2D(e.TEXTURE_2D,Ie,0,0,_e,D,K)}else i.texImage2D(e.TEXTURE_2D,Ie,te,_e,D,K);b.generateMipmaps=!1}else if(pe){if(Te){let Ie=ni(ie);i.texStorage2D(e.TEXTURE_2D,We,te,Ie.width,Ie.height)}if(Ze)i.texSubImage2D(e.TEXTURE_2D,0,0,0,_e,D,ie)}else i.texImage2D(e.TEXTURE_2D,0,te,_e,D,ie);if(M(b)&&b.mipmapsAutoUpdate===!0)S(le);if(Me.__version=me.version,b.onUpdate)b.onUpdate(b)}R.__version=b.version}function Ue(R,b,G){if(b.image.length!==6)return;let le=re(R,b),oe=b.source;i.bindTexture(e.TEXTURE_CUBE_MAP,R.__webglTexture,e.TEXTURE0+G);let me=n.get(oe);if(oe.version!==me.__version||le===!0){i.activeTexture(e.TEXTURE0+G);let Me=it.getPrimaries(it.workingColorSpace),J=b.colorSpace===sn?null:it.getPrimaries(b.colorSpace),ie=b.colorSpace===sn||Me===J?e.NONE:e.BROWSER_DEFAULT_WEBGL;i.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(e.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,ie);let _e=b.isCompressedTexture||b.image[0].isCompressedTexture,D=b.image[0]&&b.image[0].isDataTexture,te=[];for(let Pe=0;Pe<6;Pe++){if(!_e&&!D)te[Pe]=v(b.image[Pe],!0,r.maxCubemapSize);else te[Pe]=D?b.image[Pe].image:b.image[Pe];te[Pe]=tt(b,te[Pe])}let K=te[0],de=s.convert(b.format,b.colorSpace),pe=s.convert(b.type),Te=w(b.internalFormat,de,pe,b.normalized,b.colorSpace),Ze=b.isVideoTexture!==!0,We=me.__version===void 0||le===!0,Ie=oe.dataReady,Ke=y(b,K);nt(e.TEXTURE_CUBE_MAP,b);let ct;if(b.isDepthTexture){if(Te=x(b.format===Zi,b.type),We)if(Ze)i.texStorage2D(e.TEXTURE_CUBE_MAP,1,Te,K.width,K.height);else for(let Pe=0;Pe<6;Pe++)i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,0,Te,K.width,K.height,0,de,pe,null)}else if(_e){if(Ze&&We)i.texStorage2D(e.TEXTURE_CUBE_MAP,Ke,Te,K.width,K.height);for(let Pe=0;Pe<6;Pe++){ct=te[Pe].mipmaps;for(let Ct=0;Ct<ct.length;Ct++){let di=ct[Ct];if(b.format!==gi)if(de!==null)if(Ze){if(Ie)i.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,Ct,0,0,di.width,di.height,de,di.data)}else i.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,Ct,Te,di.width,di.height,0,di.data);else ge("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()");else if(Ze){if(Ie)i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,Ct,0,0,di.width,di.height,de,pe,di.data)}else i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,Ct,Te,di.width,di.height,0,de,pe,di.data)}}}else{if(ct=b.mipmaps,Ze&&We){if(ct.length>0)Ke++;let Pe=ni(te[0]);i.texStorage2D(e.TEXTURE_CUBE_MAP,Ke,Te,Pe.width,Pe.height)}for(let Pe=0;Pe<6;Pe++)if(D){if(Ze){if(Ie)i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,0,0,0,te[Pe].width,te[Pe].height,de,pe,te[Pe].data)}else i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,0,Te,te[Pe].width,te[Pe].height,0,de,pe,te[Pe].data);for(let Ct=0;Ct<ct.length;Ct++){let In=ct[Ct].image[Pe].image;if(Ze){if(Ie)i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,Ct+1,0,0,In.width,In.height,de,pe,In.data)}else i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,Ct+1,Te,In.width,In.height,0,de,pe,In.data)}}else{if(Ze){if(Ie)i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,0,0,0,de,pe,te[Pe])}else i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,0,Te,de,pe,te[Pe]);for(let Ct=0;Ct<ct.length;Ct++){let di=ct[Ct];if(Ze){if(Ie)i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,Ct+1,0,0,de,pe,di.image[Pe])}else i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,Ct+1,Te,de,pe,di.image[Pe])}}}if(M(b)&&b.mipmapsAutoUpdate===!0)S(e.TEXTURE_CUBE_MAP);if(me.__version=oe.version,b.onUpdate)b.onUpdate(b)}R.__version=b.version}function Ye(R,b,G,le,oe,me){let Me=s.convert(G.format,G.colorSpace),J=s.convert(G.type),ie=w(G.internalFormat,Me,J,G.normalized,G.colorSpace),_e=n.get(b),D=n.get(G);if(D.__renderTarget=b,!_e.__hasExternalTextures){let te=Math.max(1,b.width>>me),K=Math.max(1,b.height>>me);if(oe===e.TEXTURE_3D||oe===e.TEXTURE_2D_ARRAY)i.texImage3D(oe,me,ie,te,K,b.depth,0,Me,J,null);else i.texImage2D(oe,me,ie,te,K,0,Me,J,null)}if(i.bindFramebuffer(e.FRAMEBUFFER,R),At(b))a.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,le,oe,D.__webglTexture,0,we(b));else if(oe===e.TEXTURE_2D||oe>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&oe<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)e.framebufferTexture2D(e.FRAMEBUFFER,le,oe,D.__webglTexture,me);i.bindFramebuffer(e.FRAMEBUFFER,null)}function He(R,b,G){if(e.bindRenderbuffer(e.RENDERBUFFER,R),b.depthBuffer){let le=b.depthTexture,oe=le&&le.isDepthTexture?le.type:null,me=x(b.stencilBuffer,oe),Me=b.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(At(b))a.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,we(b),me,b.width,b.height);else if(G)e.renderbufferStorageMultisample(e.RENDERBUFFER,we(b),me,b.width,b.height);else e.renderbufferStorage(e.RENDERBUFFER,me,b.width,b.height);e.framebufferRenderbuffer(e.FRAMEBUFFER,Me,e.RENDERBUFFER,R)}else{let le=b.textures;for(let oe=0;oe<le.length;oe++){let me=le[oe],Me=s.convert(me.format,me.colorSpace),J=s.convert(me.type),ie=w(me.internalFormat,Me,J,me.normalized,me.colorSpace);if(At(b))a.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,we(b),ie,b.width,b.height);else if(G)e.renderbufferStorageMultisample(e.RENDERBUFFER,we(b),ie,b.width,b.height);else e.renderbufferStorage(e.RENDERBUFFER,ie,b.width,b.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function ot(R,b,G){let le=b.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(e.FRAMEBUFFER,R),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let oe=n.get(b.depthTexture);oe.__renderTarget=b;let me=le?b.depthTexture.image[0]:b.depthTexture.image;if(!oe.__webglTexture||me.width!==b.width||me.height!==b.height)me.width=b.width,me.height=b.height,b.depthTexture.needsUpdate=!0;if(le)Ee(b.depthTexture,0);else ye(b.depthTexture,0);let Me=oe.__webglTexture,J=we(b),ie=le?e.TEXTURE_CUBE_MAP_POSITIVE_X+G:e.TEXTURE_2D,_e=b.depthTexture.format===Zi?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(b.depthTexture.format===Hi)if(At(b))a.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,_e,ie,Me,0,J);else e.framebufferTexture2D(e.FRAMEBUFFER,_e,ie,Me,0);else if(b.depthTexture.format===Zi)if(At(b))a.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,_e,ie,Me,0,J);else e.framebufferTexture2D(e.FRAMEBUFFER,_e,ie,Me,0);else throw Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ft(R){let b=n.get(R),G=R.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==R.depthTexture){let le=R.depthTexture;if(b.__depthDisposeCallback)b.__depthDisposeCallback();if(le){let oe=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,le.removeEventListener("dispose",oe)};le.addEventListener("dispose",oe),b.__depthDisposeCallback=oe}b.__boundDepthTexture=le}if(R.depthTexture&&!b.__autoAllocateDepthBuffer)if(G)for(let le=0;le<6;le++)ot(b.__webglFramebuffer[le],R,le);else if(R.texture.mipmaps.length>0)ot(b.__webglFramebuffer[0],R,0);else ot(b.__webglFramebuffer,R,0);else if(G){b.__webglDepthbuffer=[];for(let le=0;le<6;le++)if(i.bindFramebuffer(e.FRAMEBUFFER,b.__webglFramebuffer[le]),b.__webglDepthbuffer[le]===void 0)b.__webglDepthbuffer[le]=e.createRenderbuffer(),He(b.__webglDepthbuffer[le],R,!1);else{let oe=R.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,me=b.__webglDepthbuffer[le];e.bindRenderbuffer(e.RENDERBUFFER,me),e.framebufferRenderbuffer(e.FRAMEBUFFER,oe,e.RENDERBUFFER,me)}}else{if(R.texture.mipmaps.length>0)i.bindFramebuffer(e.FRAMEBUFFER,b.__webglFramebuffer[0]);else i.bindFramebuffer(e.FRAMEBUFFER,b.__webglFramebuffer);if(b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=e.createRenderbuffer(),He(b.__webglDepthbuffer,R,!1);else{let oe=R.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,me=b.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,me),e.framebufferRenderbuffer(e.FRAMEBUFFER,oe,e.RENDERBUFFER,me)}}i.bindFramebuffer(e.FRAMEBUFFER,null)}function bt(R,b,G){let le=n.get(R);if(b!==void 0)Ye(le.__webglFramebuffer,R,R.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0);if(G!==void 0)ft(R)}function B(R){let b=R.texture,G=n.get(R),le=n.get(b);R.addEventListener("dispose",O),A(R);let oe=R.textures,me=R.isWebGLCubeRenderTarget===!0,Me=oe.length>1;if(!Me){if(le.__webglTexture===void 0)le.__webglTexture=e.createTexture();le.__version=b.version,o.memory.textures++}if(me){G.__webglFramebuffer=[];for(let J=0;J<6;J++)if(b.mipmaps.length>0){G.__webglFramebuffer[J]=[];for(let ie=0;ie<b.mipmaps.length;ie++)G.__webglFramebuffer[J][ie]=e.createFramebuffer()}else G.__webglFramebuffer[J]=e.createFramebuffer()}else{if(b.mipmaps.length>0){G.__webglFramebuffer=[];for(let J=0;J<b.mipmaps.length;J++)G.__webglFramebuffer[J]=e.createFramebuffer()}else G.__webglFramebuffer=e.createFramebuffer();if(Me)for(let J=0,ie=oe.length;J<ie;J++){let _e=n.get(oe[J]);if(_e.__webglTexture===void 0)_e.__webglTexture=e.createTexture(),o.memory.textures++}if(R.samples>0&&At(R)===!1){G.__webglMultisampledFramebuffer=e.createFramebuffer(),G.__webglColorRenderbuffer=[],i.bindFramebuffer(e.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let J=0;J<oe.length;J++){let ie=oe[J];G.__webglColorRenderbuffer[J]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,G.__webglColorRenderbuffer[J]);let _e=s.convert(ie.format,ie.colorSpace),D=s.convert(ie.type),te=w(ie.internalFormat,_e,D,ie.normalized,ie.colorSpace,R.isXRRenderTarget===!0),K=we(R);e.renderbufferStorageMultisample(e.RENDERBUFFER,K,te,R.width,R.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+J,e.RENDERBUFFER,G.__webglColorRenderbuffer[J])}if(e.bindRenderbuffer(e.RENDERBUFFER,null),R.depthBuffer)G.__webglDepthRenderbuffer=e.createRenderbuffer(),He(G.__webglDepthRenderbuffer,R,!0);i.bindFramebuffer(e.FRAMEBUFFER,null)}}if(me){i.bindTexture(e.TEXTURE_CUBE_MAP,le.__webglTexture),nt(e.TEXTURE_CUBE_MAP,b);for(let J=0;J<6;J++)if(b.mipmaps.length>0)for(let ie=0;ie<b.mipmaps.length;ie++)Ye(G.__webglFramebuffer[J][ie],R,b,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+J,ie);else Ye(G.__webglFramebuffer[J],R,b,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+J,0);if(M(b))S(e.TEXTURE_CUBE_MAP);else if(b.mipmaps.length>0)e.texParameteri(e.TEXTURE_CUBE_MAP,e.TEXTURE_MAX_LEVEL,b.mipmaps.length-1);i.unbindTexture()}else if(Me){for(let J=0,ie=oe.length;J<ie;J++){let _e=oe[J],D=n.get(_e),te=e.TEXTURE_2D;if(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)te=R.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY;if(i.bindTexture(te,D.__webglTexture),nt(te,_e),Ye(G.__webglFramebuffer,R,_e,e.COLOR_ATTACHMENT0+J,te,0),M(_e))S(te)}i.unbindTexture()}else{let J=e.TEXTURE_2D;if(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)J=R.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY;if(i.bindTexture(J,le.__webglTexture),nt(J,b),b.mipmaps.length>0)for(let ie=0;ie<b.mipmaps.length;ie++)Ye(G.__webglFramebuffer[ie],R,b,e.COLOR_ATTACHMENT0,J,ie);else Ye(G.__webglFramebuffer,R,b,e.COLOR_ATTACHMENT0,J,0);if(M(b))S(J);else if(b.mipmaps.length>0)e.texParameteri(J,e.TEXTURE_MAX_LEVEL,b.mipmaps.length-1);i.unbindTexture()}if(R.depthBuffer)ft(R)}function ii(R){let b=R.textures;for(let G=0,le=b.length;G<le;G++){let oe=b[G];if(M(oe)&&oe.mipmapsAutoUpdate===!0){let me=T(R),Me=n.get(oe).__webglTexture;i.bindTexture(me,Me),S(me),i.unbindTexture()}}}let at=[];function Zt(R){if(R.samples>0){if(At(R)===!1){let{textures:b,width:G,height:le}=R,oe=e.COLOR_BUFFER_BIT,me=R.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,Me=n.get(R),J=b.length>1;if(J)for(let _e=0;_e<b.length;_e++)i.bindFramebuffer(e.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+_e,e.RENDERBUFFER,null),i.bindFramebuffer(e.FRAMEBUFFER,Me.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+_e,e.TEXTURE_2D,null,0);if(i.bindFramebuffer(e.READ_FRAMEBUFFER,Me.__webglMultisampledFramebuffer),R.texture.mipmaps.length>0)i.bindFramebuffer(e.DRAW_FRAMEBUFFER,Me.__webglFramebuffer[0]);else i.bindFramebuffer(e.DRAW_FRAMEBUFFER,Me.__webglFramebuffer);for(let _e=0;_e<b.length;_e++){if(R.resolveDepthBuffer){if(R.depthBuffer)oe|=e.DEPTH_BUFFER_BIT;if(R.stencilBuffer&&R.resolveStencilBuffer)oe|=e.STENCIL_BUFFER_BIT}if(J){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,Me.__webglColorRenderbuffer[_e]);let D=n.get(b[_e]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,D,0)}if(e.blitFramebuffer(0,0,G,le,0,0,G,le,oe,e.NEAREST),l===!0){if(at.length=0,at.push(e.COLOR_ATTACHMENT0+_e),R.depthBuffer&&R.storeMultisampledDepthBuffer===!1)at.push(me);e.invalidateFramebuffer(e.READ_FRAMEBUFFER,at)}}if(i.bindFramebuffer(e.READ_FRAMEBUFFER,null),i.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),J)for(let _e=0;_e<b.length;_e++){i.bindFramebuffer(e.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+_e,e.RENDERBUFFER,Me.__webglColorRenderbuffer[_e]);let D=n.get(b[_e]).__webglTexture;i.bindFramebuffer(e.FRAMEBUFFER,Me.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+_e,e.TEXTURE_2D,D,0)}i.bindFramebuffer(e.DRAW_FRAMEBUFFER,Me.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&l){let b=R.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[b])}}}function we(R){return Math.min(r.maxSamples,R.samples)}function At(R){let b=n.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function $e(R){let b=o.render.frame;if(h.get(R)!==b)h.set(R,b),R.update()}function tt(R,b){let{colorSpace:G,format:le,type:oe}=R;if(R.isCompressedTexture===!0||R.isVideoTexture===!0)return b;if(G!==Sr&&G!==sn)if(it.getTransfer(G)===xt){if(le!==gi||oe!==Jt)ge("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.")}else Fe("WebGLTextures: Unsupported texture color space:",G);return b}function ni(R){if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement)c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height;else if(typeof VideoFrame<"u"&&R instanceof VideoFrame)c.width=R.displayWidth,c.height=R.displayHeight;else c.width=R.width,c.height=R.height;return c}this.allocateTextureUnit=k,this.resetTextureUnits=W,this.getTextureUnits=Y,this.setTextureUnits=fe,this.setTexture2D=ye,this.setTexture2DArray=ve,this.setTexture3D=Be,this.setTextureCube=Ee,this.rebindTextures=bt,this.setupRenderTarget=B,this.updateRenderTargetMipmap=ii,this.updateMultisampleRenderTarget=Zt,this.setupDepthRenderbuffer=ft,this.setupFrameBufferTexture=Ye,this.useMultisampledRTT=At,this.dispose=X}function Qc(e,t){function i(n,r=sn){let s,o=it.getTransfer(r);if(n===Jt)return e.UNSIGNED_BYTE;if(n===Kr)return e.UNSIGNED_SHORT_4_4_4_4;if(n===$r)return e.UNSIGNED_SHORT_5_5_5_1;if(n===Pa)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===La)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===Ca)return e.BYTE;if(n===Ia)return e.SHORT;if(n===Nn)return e.UNSIGNED_SHORT;if(n===Jr)return e.INT;if(n===ri)return e.UNSIGNED_INT;if(n===Kt)return e.FLOAT;if(n===mi)return e.HALF_FLOAT;if(n===Da)return e.ALPHA;if(n===Na)return e.RGB;if(n===gi)return e.RGBA;if(n===Hi)return e.DEPTH_COMPONENT;if(n===Zi)return e.DEPTH_STENCIL;if(n===Qr)return e.RED;if(n===_r)return e.RED_INTEGER;if(n===Ji)return e.RG;if(n===jr)return e.RG_INTEGER;if(n===es)return e.RGBA_INTEGER;if(n===ts||n===is||n===ns||n===rs)if(o===xt)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===ts)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===is)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ns)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===rs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===ts)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===is)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ns)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===rs)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===no||n===ro||n===so||n===oo)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===no)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ro)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===so)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===oo)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ao||n===lo||n===co||n===ho||n===uo||n===yr||n===fo)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===ao||n===lo)return o===xt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===co)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===ho)return s.COMPRESSED_R11_EAC;if(n===uo)return s.COMPRESSED_SIGNED_R11_EAC;if(n===yr)return s.COMPRESSED_RG11_EAC;if(n===fo)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===po||n===mo||n===go||n===xo||n===_o||n===yo||n===vo||n===Mo||n===So||n===bo||n===Eo||n===To||n===wo||n===Ao)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===po)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===mo)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===go)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===xo)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===_o)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===yo)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===vo)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Mo)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===So)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===bo)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Eo)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===To)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===wo)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ao)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ro||n===Co||n===Io)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===Ro)return o===xt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Co)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Io)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Po||n===Lo||n===vr||n===Do)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===Po)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Lo)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===vr)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Do)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;if(n===dn)return e.UNSIGNED_INT_24_8;return e[n]!==void 0?e[n]:null}return{convert:i}}var z_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,G_=`
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

}`;class jc{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new Es(e.texture);if(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)this.depthNear=e.depthNear,this.depthFar=e.depthFar;this.texture=i}}getMesh(e){if(this.texture!==null){if(this.mesh===null){let t=e.cameras[0].viewport,i=new Ui({vertexShader:z_,fragmentShader:G_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ne(new Dt(20,20),i)}}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class eh extends si{constructor(e,t){super();let i=this,n=null,r=1,s=null,o="local-floor",a=1,l=null,c=null,h=null,f=null,u=null,m=null,g=typeof XRWebGLBinding<"u",_=new jc,p={},d=t.getContextAttributes(),v=null,M=null,S=[],T=[],w=new Z,x=null,y=null,A=new Yt;A.viewport=new Mt;let U=new Yt;U.viewport=new Mt;let P=[A,U],O=new Cl,ee=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(k){let j=S[k];if(j===void 0)j=new ds,S[k]=j;return j.getTargetRaySpace()},this.getControllerGrip=function(k){let j=S[k];if(j===void 0)j=new ds,S[k]=j;return j.getGripSpace()},this.getHand=function(k){let j=S[k];if(j===void 0)j=new ds,S[k]=j;return j.getHandSpace()};function X(k){let j=T.indexOf(k.inputSource);if(j===-1)return;let ye=S[j];if(ye!==void 0)ye.update(k.inputSource,k.frame,l||s),ye.dispatchEvent({type:k.type,data:k.inputSource})}function L(){n.removeEventListener("select",X),n.removeEventListener("selectstart",X),n.removeEventListener("selectend",X),n.removeEventListener("squeeze",X),n.removeEventListener("squeezestart",X),n.removeEventListener("squeezeend",X),n.removeEventListener("end",L),n.removeEventListener("inputsourceschange",N);for(let k=0;k<S.length;k++){let j=T[k];if(j===null)continue;T[k]=null,S[k].disconnect(j)}ee=null,I=null,_.reset();for(let k in p)delete p[k];if(e.setRenderTarget(v),u=null,f=null,h=null,n=null,M=null,fe.stop(),i.isPresenting=!1,e.setPixelRatio(x),e.setSize(w.width,w.height,!1),y!==null){let k=y.camera;k.fov=y.fov,k.zoom=y.zoom,k.updateProjectionMatrix(),y=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(k){if(r=k,i.isPresenting===!0)ge("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(k){if(o=k,i.isPresenting===!0)ge("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||s},this.setReferenceSpace=function(k){l=k},this.getBaseLayer=function(){return f!==null?f:u},this.getBinding=function(){if(h===null&&g)h=new XRWebGLBinding(n,t);return h},this.getFrame=function(){return m},this.getSession=function(){return n},this.setSession=async function(k){if(n=k,n!==null){if(v=e.getRenderTarget(),n.addEventListener("select",X),n.addEventListener("selectstart",X),n.addEventListener("selectend",X),n.addEventListener("squeeze",X),n.addEventListener("squeezestart",X),n.addEventListener("squeezeend",X),n.addEventListener("end",L),n.addEventListener("inputsourceschange",N),d.xrCompatible!==!0)await t.makeXRCompatible();if(x=e.getPixelRatio(),e.getSize(w),!(g&&("createProjectionLayer"in XRWebGLBinding.prototype))){let ye={antialias:d.antialias,alpha:!0,depth:d.depth,stencil:d.stencil,framebufferScaleFactor:r};u=new XRWebGLLayer(n,t,ye),n.updateRenderState({baseLayer:u}),e.setPixelRatio(1),e.setSize(u.framebufferWidth,u.framebufferHeight,!1),M=new oi(u.framebufferWidth,u.framebufferHeight,{format:gi,type:Jt,colorSpace:e.outputColorSpace,stencilBuffer:d.stencil,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let ye=null,ve=null,Be=null;if(d.depth)Be=d.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ye=d.stencil?Zi:Hi,ve=d.stencil?dn:ri;let Ee={colorFormat:t.RGBA8,depthFormat:Be,scaleFactor:r};h=this.getBinding(),f=h.createProjectionLayer(Ee),n.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),M=new oi(f.textureWidth,f.textureHeight,{format:gi,type:Jt,depthTexture:new ji(f.textureWidth,f.textureHeight,ve,void 0,void 0,void 0,void 0,void 0,void 0,ye),stencilBuffer:d.stencil,colorSpace:e.outputColorSpace,samples:d.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(a),l=null,s=await n.requestReferenceSpace(o),fe.setContext(n),fe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function N(k){for(let j=0;j<k.removed.length;j++){let ye=k.removed[j],ve=T.indexOf(ye);if(ve>=0)T[ve]=null,S[ve].disconnect(ye)}for(let j=0;j<k.added.length;j++){let ye=k.added[j],ve=T.indexOf(ye);if(ve===-1){for(let Ee=0;Ee<S.length;Ee++)if(Ee>=T.length){T.push(ye),ve=Ee;break}else if(T[Ee]===null){T[Ee]=ye,ve=Ee;break}if(ve===-1)break}let Be=S[ve];if(Be)Be.connect(ye)}}function Q(k,j){if(j===null)k.matrixWorld.copy(k.matrix);else k.matrixWorld.multiplyMatrices(j.matrixWorld,k.matrix);k.matrixWorldInverse.copy(k.matrixWorld).invert()}this.updateCamera=function(k){if(n===null)return;let{near:j,far:ye}=k;if(_.texture!==null){if(_.depthNear>0)j=_.depthNear;if(_.depthFar>0)ye=_.depthFar}if(O.near=U.near=A.near=j,O.far=U.far=A.far=ye,ee!==O.near||I!==O.far)n.updateRenderState({depthNear:O.near,depthFar:O.far}),ee=O.near,I=O.far;O.layers.mask=k.layers.mask|6,A.layers.mask=O.layers.mask&-5,U.layers.mask=O.layers.mask&-3;let ve=k.parent,Be=O.cameras;Q(O,ve);for(let Ee=0;Ee<Be.length;Ee++)Q(Be[Ee],ve);if(O.projectionMatrix.copy(A.projectionMatrix),O.projectionMatrixInverse.copy(A.projectionMatrixInverse),y===null&&k.isPerspectiveCamera)y={camera:k,fov:k.fov,zoom:k.zoom};z(k,O,ve)};function z(k,j,ye){if(ye===null)k.matrix.copy(j.matrixWorld);else k.matrix.copy(ye.matrixWorld),k.matrix.invert(),k.matrix.multiply(j.matrixWorld);if(k.matrix.decompose(k.position,k.quaternion,k.scale),k.updateMatrixWorld(!0),k.projectionMatrix.copy(j.projectionMatrix),k.projectionMatrixInverse.copy(j.projectionMatrixInverse),k.isPerspectiveCamera)k.fov=as*2*Math.atan(1/k.projectionMatrix.elements[5]),k.zoom=1}this.getCamera=function(){return O},this.getFoveation=function(){if(f===null&&u===null)return;return a},this.setFoveation=function(k){if(a=k,f!==null)f.fixedFoveation=k;if(u!==null&&u.fixedFoveation!==void 0)u.fixedFoveation=k},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(O)},this.getCameraTexture=function(k){return p[k]};let W=null;function Y(k,j){if(c=j.getViewerPose(l||s),m=j,c!==null){let ye=c.views;if(u!==null)e.setRenderTargetFramebuffer(M,u.framebuffer),e.setRenderTarget(M);let ve=!1;if(ye.length!==O.cameras.length)O.cameras.length=0,ve=!0;for(let De=0;De<ye.length;De++){let Ne=ye[De],nt=null;if(u!==null)nt=u.getViewport(Ne);else{let ce=h.getViewSubImage(f,Ne);if(nt=ce.viewport,De===0)e.setRenderTargetTextures(M,ce.colorTexture,ce.depthStencilTexture),e.setRenderTarget(M)}let re=P[De];if(re===void 0)re=new Yt,re.layers.enable(De),re.viewport=new Mt,P[De]=re;if(re.matrix.fromArray(Ne.transform.matrix),re.matrix.decompose(re.position,re.quaternion,re.scale),re.projectionMatrix.fromArray(Ne.projectionMatrix),re.projectionMatrixInverse.copy(re.projectionMatrix).invert(),re.viewport.set(nt.x,nt.y,nt.width,nt.height),De===0)O.matrix.copy(re.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale);if(ve===!0)O.cameras.push(re)}let Be=n.enabledFeatures;if(Be&&Be.includes("depth-sensing")&&n.depthUsage=="gpu-optimized"&&g){h=i.getBinding();let De=h.getDepthInformation(ye[0]);if(De&&De.isValid&&De.texture)_.init(De,n.renderState)}if(Be&&Be.includes("camera-access")&&g){e.state.unbindTexture(),h=i.getBinding();for(let De=0;De<ye.length;De++){let Ne=ye[De].camera;if(Ne){let nt=p[Ne];if(!nt)nt=new Es,p[Ne]=nt;let re=h.getCameraImage(Ne);nt.sourceTexture=re}}}}for(let ye=0;ye<S.length;ye++){let ve=T[ye],Be=S[ye];if(ve!==null&&Be!==void 0)Be.update(ve,j,l||s)}if(W)W(k,j);if(j.detectedPlanes)i.dispatchEvent({type:"planesdetected",data:j});m=null}let fe=new Pl;fe.setAnimationLoop(Y),this.setAnimationLoop=function(k){W=k},this.dispose=function(){}}}var H_=new Je,Fm=new qe;Fm.set(-1,0,0,0,1,0,0,0,1);function Bm(e,t){function i(p,d){if(p.matrixAutoUpdate===!0)p.updateMatrix();d.value.copy(p.matrix)}function n(p,d){if(d.color.getRGB(p.fogColor.value,_l(e)),d.isFog)p.fogNear.value=d.near,p.fogFar.value=d.far;else if(d.isFogExp2)p.fogDensity.value=d.density}function r(p,d,v,M,S){if(d.isNodeMaterial)d.uniformsNeedUpdate=!1;else if(d.isMeshBasicMaterial)s(p,d);else if(d.isMeshLambertMaterial){if(s(p,d),d.envMap)p.envMapIntensity.value=d.envMapIntensity}else if(d.isMeshToonMaterial)s(p,d),f(p,d);else if(d.isMeshPhongMaterial){if(s(p,d),h(p,d),d.envMap)p.envMapIntensity.value=d.envMapIntensity}else if(d.isMeshStandardMaterial){if(s(p,d),u(p,d),d.isMeshPhysicalMaterial)m(p,d,S)}else if(d.isMeshMatcapMaterial)s(p,d),g(p,d);else if(d.isMeshDepthMaterial)s(p,d);else if(d.isMeshDistanceMaterial)s(p,d),_(p,d);else if(d.isMeshNormalMaterial)s(p,d);else if(d.isLineBasicMaterial){if(o(p,d),d.isLineDashedMaterial)a(p,d)}else if(d.isPointsMaterial)l(p,d,v,M);else if(d.isSpriteMaterial)c(p,d);else if(d.isShadowMaterial)p.color.value.copy(d.color),p.opacity.value=d.opacity;else if(d.isShaderMaterial)d.uniformsNeedUpdate=!1}function s(p,d){if(p.opacity.value=d.opacity,d.color)p.diffuse.value.copy(d.color);if(d.emissive)p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity);if(d.map)p.map.value=d.map,i(d.map,p.mapTransform);if(d.alphaMap)p.alphaMap.value=d.alphaMap,i(d.alphaMap,p.alphaMapTransform);if(d.bumpMap){if(p.bumpMap.value=d.bumpMap,i(d.bumpMap,p.bumpMapTransform),p.bumpScale.value=d.bumpScale,d.side===Lt)p.bumpScale.value*=-1}if(d.normalMap){if(p.normalMap.value=d.normalMap,i(d.normalMap,p.normalMapTransform),p.normalScale.value.copy(d.normalScale),d.side===Lt)p.normalScale.value.negate()}if(d.displacementMap)p.displacementMap.value=d.displacementMap,i(d.displacementMap,p.displacementMapTransform),p.displacementScale.value=d.displacementScale,p.displacementBias.value=d.displacementBias;if(d.emissiveMap)p.emissiveMap.value=d.emissiveMap,i(d.emissiveMap,p.emissiveMapTransform);if(d.specularMap)p.specularMap.value=d.specularMap,i(d.specularMap,p.specularMapTransform);if(d.alphaTest>0)p.alphaTest.value=d.alphaTest;let v=t.get(d),{envMap:M,envMapRotation:S}=v;if(M){if(p.envMap.value=M,p.envMapRotation.value.setFromMatrix4(H_.makeRotationFromEuler(S)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1)p.envMapRotation.value.premultiply(Fm);p.reflectivity.value=d.reflectivity,p.ior.value=d.ior,p.refractionRatio.value=d.refractionRatio}if(d.lightMap)p.lightMap.value=d.lightMap,p.lightMapIntensity.value=d.lightMapIntensity,i(d.lightMap,p.lightMapTransform);if(d.aoMap)p.aoMap.value=d.aoMap,p.aoMapIntensity.value=d.aoMapIntensity,i(d.aoMap,p.aoMapTransform)}function o(p,d){if(p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,d.map)p.map.value=d.map,i(d.map,p.mapTransform)}function a(p,d){p.dashSize.value=d.dashSize,p.totalSize.value=d.dashSize+d.gapSize,p.scale.value=d.scale}function l(p,d,v,M){if(p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.size.value=d.size*v,p.scale.value=M*0.5,d.map)p.map.value=d.map,i(d.map,p.uvTransform);if(d.alphaMap)p.alphaMap.value=d.alphaMap,i(d.alphaMap,p.alphaMapTransform);if(d.alphaTest>0)p.alphaTest.value=d.alphaTest}function c(p,d){if(p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.rotation.value=d.rotation,d.map)p.map.value=d.map,i(d.map,p.mapTransform);if(d.alphaMap)p.alphaMap.value=d.alphaMap,i(d.alphaMap,p.alphaMapTransform);if(d.alphaTest>0)p.alphaTest.value=d.alphaTest}function h(p,d){p.specular.value.copy(d.specular),p.shininess.value=Math.max(d.shininess,0.0001)}function f(p,d){if(d.gradientMap)p.gradientMap.value=d.gradientMap}function u(p,d){if(p.metalness.value=d.metalness,d.metalnessMap)p.metalnessMap.value=d.metalnessMap,i(d.metalnessMap,p.metalnessMapTransform);if(p.roughness.value=d.roughness,d.roughnessMap)p.roughnessMap.value=d.roughnessMap,i(d.roughnessMap,p.roughnessMapTransform);if(d.envMap)p.envMapIntensity.value=d.envMapIntensity}function m(p,d,v){if(p.ior.value=d.ior,d.diffuseRoughness>0){if(p.diffuseRoughness.value=d.diffuseRoughness,d.diffuseRoughnessMap)p.diffuseRoughnessMap.value=d.diffuseRoughnessMap,i(d.diffuseRoughnessMap,p.diffuseRoughnessMapTransform)}if(d.sheen>0){if(p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),p.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap)p.sheenColorMap.value=d.sheenColorMap,i(d.sheenColorMap,p.sheenColorMapTransform);if(d.sheenRoughnessMap)p.sheenRoughnessMap.value=d.sheenRoughnessMap,i(d.sheenRoughnessMap,p.sheenRoughnessMapTransform)}if(d.clearcoat>0){if(p.clearcoat.value=d.clearcoat,p.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap)p.clearcoatMap.value=d.clearcoatMap,i(d.clearcoatMap,p.clearcoatMapTransform);if(d.clearcoatRoughnessMap)p.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,i(d.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform);if(d.clearcoatNormalMap){if(p.clearcoatNormalMap.value=d.clearcoatNormalMap,i(d.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Lt)p.clearcoatNormalScale.value.negate()}}if(d.dispersion>0)p.dispersion.value=d.dispersion;if(d.retroreflectivity>0)p.retroreflectivity.value=d.retroreflectivity;if(d.iridescence>0){if(p.iridescence.value=d.iridescence,p.iridescenceIOR.value=d.iridescenceIOR,p.iridescenceThicknessMinimum.value=d.iridescenceThicknessMinimum,p.iridescenceThicknessMaximum.value=d.iridescenceThicknessMaximum,d.iridescenceMap)p.iridescenceMap.value=d.iridescenceMap,i(d.iridescenceMap,p.iridescenceMapTransform);if(d.iridescenceThicknessMap)p.iridescenceThicknessMap.value=d.iridescenceThicknessMap,i(d.iridescenceThicknessMap,p.iridescenceThicknessMapTransform)}if(d.transmission>0){if(p.transmission.value=d.transmission,p.transmissionSamplerMap.value=v.texture,p.transmissionSamplerSize.value.set(v.width,v.height),d.transmissionMap)p.transmissionMap.value=d.transmissionMap,i(d.transmissionMap,p.transmissionMapTransform);if(p.thickness.value=d.thickness,d.thicknessMap)p.thicknessMap.value=d.thicknessMap,i(d.thicknessMap,p.thicknessMapTransform);p.attenuationDistance.value=d.attenuationDistance,p.attenuationColor.value.copy(d.attenuationColor)}if(d.anisotropy>0){if(p.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap)p.anisotropyMap.value=d.anisotropyMap,i(d.anisotropyMap,p.anisotropyMapTransform)}if(p.specularIntensity.value=d.specularIntensity,p.specularColor.value.copy(d.specularColor),d.specularColorMap)p.specularColorMap.value=d.specularColorMap,i(d.specularColorMap,p.specularColorMapTransform);if(d.specularIntensityMap)p.specularIntensityMap.value=d.specularIntensityMap,i(d.specularIntensityMap,p.specularIntensityMapTransform)}function g(p,d){if(d.matcap)p.matcap.value=d.matcap}function _(p,d){let v=t.get(d).light;p.referencePosition.value.setFromMatrixPosition(v.matrixWorld),p.nearDistance.value=v.shadow.camera.near,p.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function Om(e,t,i,n){let r={},s={};function o(v,M){let S=M.program;n.uniformBlockBinding(v,S,r[v.id])}function a(v,M){let S=r[v.id];if(S===void 0)g(v),S=l(v),r[v.id]=S,v.addEventListener("dispose",p);let T=M.program;n.updateUBOMapping(v,T);let w=t.render.frame;if(s[v.id]!==w)c(v),s[v.id]=w}function l(v){let M=e.createBuffer(),{__size:S,usage:T}=v;return e.bindBuffer(e.UNIFORM_BUFFER,M),e.bufferData(e.UNIFORM_BUFFER,S,T),e.bindBuffer(e.UNIFORM_BUFFER,null),M}function c(v){let M=r[v.id],{uniforms:S,__cache:T}=v;e.bindBuffer(e.UNIFORM_BUFFER,M);for(let w=0,x=S.length;w<x;w++){let y=S[w];if(Array.isArray(y))for(let A=0,U=y.length;A<U;A++)h(y[A],w,A,T);else h(y,w,0,T)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function h(v,M,S,T){if(u(v,M,S,T)===!0){let{__offset:w,value:x}=v;if(Array.isArray(x)){let y=0;for(let A=0;A<x.length;A++){let U=x[A],P=_(U,!0);f(U,v.__data,y),y+=P.storage/Float32Array.BYTES_PER_ELEMENT}}else f(x,v.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,w,v.__data)}}function f(v,M,S){if(typeof v==="number"||typeof v==="boolean")M[S]=v;else if(v.isMatrix3)M[S]=v.elements[0],M[S+1]=v.elements[1],M[S+2]=v.elements[2],M[S+3]=0,M[S+4]=v.elements[3],M[S+5]=v.elements[4],M[S+6]=v.elements[5],M[S+7]=0,M[S+8]=v.elements[6],M[S+9]=v.elements[7],M[S+10]=v.elements[8],M[S+11]=0;else if(ArrayBuffer.isView(v))M.set(v.subarray(0,M.length-S),S);else v.toArray(M,S)}function u(v,M,S,T){let w=v.value,x=M+"_"+S;if(Array.isArray(w)){if(T[x]===void 0)T[x]=[];let y=T[x],A=!1;for(let U=0;U<w.length;U++)if(m(w[U],y,U)===!0)A=!0;return A}return m(w,T,x)}function m(v,M,S){if(M[S]===void 0){if(typeof v==="number"||typeof v==="boolean")M[S]=v;else if(ArrayBuffer.isView(v))M[S]=v.slice();else M[S]=v.clone();return!0}else{let T=M[S];if(typeof v==="number"||typeof v==="boolean"){if(T!==v)return M[S]=v,!0}else if(ArrayBuffer.isView(v))return!0;else if(T.equals(v)===!1)return T.copy(v),!0}return!1}function g(v){let M=v.uniforms,S=0,T=16;for(let x=0,y=M.length;x<y;x++){let A=Array.isArray(M[x])?M[x]:[M[x]];for(let U=0,P=A.length;U<P;U++){let O=A[U],ee=Array.isArray(O.value)?O.value:[O.value],I=Array.isArray(M[x])||Array.isArray(O.value),X=S;for(let N=0,Q=ee.length;N<Q;N++){let z=ee[N],W=_(z,I),Y=S%T,fe=Y%W.boundary,k=Y+fe;if(S+=fe,k!==0&&T-k<W.storage)S+=T-k;if(N===0)X=S;S+=W.storage}let L=O.type==="int"?Int32Array:O.type==="uint"?Uint32Array:Float32Array;O.__data=new L((S-X)/Float32Array.BYTES_PER_ELEMENT),O.__offset=X}}let w=S%T;if(w>0)S+=T-w;return v.__size=S,v.__cache={},this}function _(v,M){let S={boundary:0,storage:0};if(typeof v==="number"||typeof v==="boolean")S.boundary=4,S.storage=4;else if(v.isVector2)S.boundary=8,S.storage=8;else if(v.isVector3||v.isColor)S.boundary=16,S.storage=12;else if(v.isVector4)S.boundary=16,S.storage=16;else if(v.isMatrix3)S.boundary=16,S.storage=48;else if(v.isMatrix4)S.boundary=16,S.storage=64;else if(v.isTexture)ge("WebGLRenderer: Texture samplers can not be part of an uniforms group.");else if(ArrayBuffer.isView(v))S.boundary=16,S.storage=v.byteLength;else ge("WebGLRenderer: Unsupported uniform value type.",v);if(M===!0)S.boundary=16,S.storage=Math.ceil(S.storage/16)*16;return S}function p(v){let M=v.target;M.removeEventListener("dispose",p),e.deleteBuffer(r[M.id]),delete r[M.id],delete s[M.id]}function d(){for(let v in r)e.deleteBuffer(r[v]);r={},s={}}return{bind:o,update:a,dispose:d}}var k_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Rn=null;function zm(){if(Rn===null)Rn=new Tn(k_,16,16,Ji,mi),Rn.name="DFG_LUT",Rn.minFilter=Ot,Rn.magFilter=Ot,Rn.wrapS=Mi,Rn.wrapT=Mi,Rn.generateMipmaps=!1,Rn.needsUpdate=!0;return Rn}class Fl{constructor(e={}){let{canvas:t=nc(),context:i=null,depth:n=!0,stencil:r=!1,alpha:s=!1,antialias:o=!1,premultipliedAlpha:a=!0,preserveDrawingBuffer:l=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:f=!1,outputBufferType:u=Jt}=e;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=s;let g=u,_=new Set([es,jr,_r]),p=new Set([Jt,ri,Nn,dn,Kr,$r]),d=new Uint32Array(4),v=new Int32Array(4),M={textures:[],min:[],max:[],resolution:[]},S=null,T=null,w=[],x=[],y=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Yi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let A=this,U=!1,P=null,O=null,ee=null,I=null;this._outputColorSpace=Tt;let X=0,L=0,N=null,Q=-1,z=null,W=new Mt,Y=new Mt,fe=null,k=new xe(0),j=0,{width:ye,height:ve}=t,Be=1,Ee=null,ht=null,De=new Mt(0,0,ye,ve),Ne=new Mt(0,0,ye,ve),nt=!1,re=new ln,ce=new Ms,ue=!1,Ce=!1,Ue=new Je,Ye=new C,He=new Mt,ot={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ft=!1;function bt(){return N===null?Be:1}let B=i;function ii(E,F){return t.getContext(E,F)}let at,Zt,we,At,$e,tt,ni,R,b,G,le,oe,me,Me,J,ie,_e,D,te,K,de,pe,Te;try{let E={alpha:!0,depth:n,stencil:r,antialias:o,premultipliedAlpha:a,preserveDrawingBuffer:l,powerPreference:c,failIfMajorPerformanceCaveat:h};if("setAttribute"in t)t.setAttribute("data-engine",`three.js r${qs}`);if(t.addEventListener("webglcontextlost",Ie,!1),t.addEventListener("webglcontextrestored",Ke,!1),t.addEventListener("webglcontextcreationerror",ct,!1),B===null){if(B=ii("webgl2",E),B===null)if(ii("webgl2"))throw Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.");else throw Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ze()}catch(E){throw t.removeEventListener("webglcontextlost",Ie,!1),t.removeEventListener("webglcontextrestored",Ke,!1),t.removeEventListener("webglcontextcreationerror",ct,!1),Fe("WebGLRenderer: "+E.message),E}function Ze(){if(at=new qp(B),at.init(),de=new Qc(B,at),Zt=new Bp(B,at,e,de),we=new Nm(B,at),Zt.reversedDepthBuffer&&f)we.buffers.depth.setReversed(!0);O=B.createFramebuffer(),ee=B.createFramebuffer(),I=B.createFramebuffer(),At=new Jp(B),$e=new bm,tt=new Um(B,at,we,$e,Zt,de,At),ni=new Xp(A),R=new Qu(B),pe=new Up(B,R),b=new Yp(B,R,At,pe),G=new $p(B,b,R,pe,At),D=new Kp(B,Zt,tt),J=new Op($e),le=new Sm(A,ni,at,Zt,pe,J),oe=new Bm(A,$e),me=new wm,Me=new Cm(at),_e=new Np(A,ni,we,G,m,a),ie=new Dm(A,G,Zt),Te=new Om(B,At,Zt,we),te=new Fp(B,at,At),K=new Zp(B,at,At),At.programs=le.programs,A.capabilities=Zt,A.extensions=at,A.properties=$e,A.renderLists=me,A.shadowMap=ie,A.state=we,A.info=At}if(g!==Jt)y=new Qp(g,t.width,t.height,o,n,r);let We=new eh(A,B);this.xr=We,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){let E=at.get("WEBGL_lose_context");if(E)E.loseContext()},this.forceContextRestore=function(){let E=at.get("WEBGL_lose_context");if(E)E.restoreContext()},this.getPixelRatio=function(){return Be},this.setPixelRatio=function(E){if(E===void 0)return;Be=E,this.setSize(ye,ve,!1)},this.getSize=function(E){return E.set(ye,ve)},this.setSize=function(E,F,q=!0){if(We.isPresenting){ge("WebGLRenderer: Can't change size while VR device is presenting.");return}if(ye=E,ve=F,t.width=Math.floor(E*Be),t.height=Math.floor(F*Be),q===!0)t.style.width=E+"px",t.style.height=F+"px";if(y!==null)y.setSize(t.width,t.height);this.setViewport(0,0,E,F)},this.getDrawingBufferSize=function(E){return E.set(ye*Be,ve*Be).floor()},this.setDrawingBufferSize=function(E,F,q){ye=E,ve=F,Be=q,t.width=Math.floor(E*q),t.height=Math.floor(F*q),this.setViewport(0,0,E,F)},this.setEffects=function(E){if(g===Jt){Fe("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let F=0;F<E.length;F++)if(E[F].isOutputPass===!0){ge("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}y.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(W)},this.getViewport=function(E){return E.copy(De)},this.setViewport=function(E,F,q,H){if(E.isVector4)De.set(E.x,E.y,E.z,E.w);else De.set(E,F,q,H);we.viewport(W.copy(De).multiplyScalar(bt()).round())},this.getScissor=function(E){return E.copy(Ne)},this.setScissor=function(E,F,q,H){if(E.isVector4)Ne.set(E.x,E.y,E.z,E.w);else Ne.set(E,F,q,H);we.scissor(Y.copy(Ne).multiplyScalar(bt()).round())},this.getScissorTest=function(){return nt},this.setScissorTest=function(E){we.setScissorTest(nt=E)},this.setOpaqueSort=function(E){Ee=E},this.setTransparentSort=function(E){ht=E},this.getClearColor=function(E){return E.copy(_e.getClearColor())},this.setClearColor=function(){_e.setClearColor(...arguments)},this.getClearAlpha=function(){return _e.getClearAlpha()},this.setClearAlpha=function(){_e.setClearAlpha(...arguments)},this.clear=function(E=!0,F=!0,q=!0){let H=0;if(E){let V=!1;if(N!==null){let Se=N.texture.format;V=_.has(Se)}if(V){let Se=N.texture.type,Oe=p.has(Se),be=_e.getClearColor(),Le=_e.getClearAlpha(),{r:ke,g:rt,b:mt}=be;if(Oe)d[0]=ke,d[1]=rt,d[2]=mt,d[3]=Le,B.clearBufferuiv(B.COLOR,0,d);else v[0]=ke,v[1]=rt,v[2]=mt,v[3]=Le,B.clearBufferiv(B.COLOR,0,v)}else H|=B.COLOR_BUFFER_BIT}if(F)H|=B.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0);if(q)H|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295);if(H!==0)B.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(E){E.setRenderer(this),P=E},this.dispose=function(){t.removeEventListener("webglcontextlost",Ie,!1),t.removeEventListener("webglcontextrestored",Ke,!1),t.removeEventListener("webglcontextcreationerror",ct,!1),_e.dispose(),me.dispose(),Me.dispose(),tt.dispose(),$e.dispose(),ni.dispose(),G.dispose(),b.dispose(),pe.dispose(),Te.dispose(),le.dispose(),We.dispose(),We.removeEventListener("sessionstart",uh),We.removeEventListener("sessionend",fh),dr.stop()};function Ie(E){E.preventDefault(),No("WebGLRenderer: Context Lost."),U=!0}function Ke(){No("WebGLRenderer: Context Restored."),U=!1;let E=At.autoReset,F=ie.enabled,q=ie.autoUpdate,H=ie.needsUpdate,V=ie.type;Ze(),At.autoReset=E,ie.enabled=F,ie.autoUpdate=q,ie.needsUpdate=H,ie.type=V}function ct(E){Fe("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Pe(E){let F=E.target;F.removeEventListener("dispose",Pe),Ct(F)}function Ct(E){di(E),$e.remove(E)}function di(E){let F=$e.get(E).programs;if(F!==void 0){if(F.forEach(function(q){le.releaseProgram(q)}),E.isShaderMaterial)le.releaseShaderCache(E)}}this.renderBufferDirect=function(E,F,q,H,V,Se){if(F===null)F=ot;let Oe=V.isMesh&&V.matrixWorld.determinantAffine()<0,be=o0(E,F,q,H,V);we.setMaterial(H,Oe);let Le=q.index,ke=1;if(H.wireframe===!0){if(Le=b.getWireframeAttribute(q),Le===void 0)return;ke=2}let rt=q.drawRange,mt=q.attributes.position,ze=rt.start*ke,gt=(rt.start+rt.count)*ke;if(Se!==null)ze=Math.max(ze,Se.start*ke),gt=Math.min(gt,(Se.start+Se.count)*ke);if(Le!==null)ze=Math.max(ze,0),gt=Math.min(gt,Le.count);else if(mt!==void 0&&mt!==null)ze=Math.max(ze,0),gt=Math.min(gt,mt.count);let $t=gt-ze;if($t<0||$t===1/0)return;pe.setup(V,H,be,q,Le);let Nt,Pt=te;if(Le!==null)Nt=R.get(Le),Pt=K,Pt.setIndex(Nt);if(V.isMesh)if(H.wireframe===!0)we.setLineWidth(H.wireframeLinewidth*bt()),Pt.setMode(B.LINES);else Pt.setMode(B.TRIANGLES);else if(V.isLine){let Ai=H.linewidth;if(Ai===void 0)Ai=1;if(we.setLineWidth(Ai*bt()),V.isLineSegments)Pt.setMode(B.LINES);else if(V.isLineLoop)Pt.setMode(B.LINE_LOOP);else Pt.setMode(B.LINE_STRIP)}else if(V.isPoints)Pt.setMode(B.POINTS);else if(V.isSprite)Pt.setMode(B.TRIANGLES);if(V.isBatchedMesh)if(!at.get("WEBGL_multi_draw")){let{_multiDrawStarts:Ai,_multiDrawCounts:Ge,_multiDrawCount:Bi}=V,Et=Le?R.get(Le).bytesPerElement:1,pr=$e.get(H).currentProgram.getUniforms();for(let Ri=0;Ri<Bi;Ri++)pr.setValue(B,"_gl_DrawID",Ri),Pt.render(Ai[Ri]/Et,Ge[Ri])}else Pt.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else if(V.isInstancedMesh)Pt.renderInstances(ze,$t,V.count);else if(q.isInstancedBufferGeometry){let Ai=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Ge=Math.min(q.instanceCount,Ai);Pt.renderInstances(ze,$t,Ge)}else Pt.render(ze,$t)};function In(E,F,q,H){if(P!==null&&E.isNodeMaterial)P.setObject(H,E);if(ue===!0)J.setState(E,q,!1);if(E.transparent===!0&&E.side===Gt&&E.forceSinglePass===!1)E.side=Lt,E.needsUpdate=!0,Xs(E,F,H),E.side=nn,E.needsUpdate=!0,Xs(E,F,H),E.side=Gt;else Xs(E,F,H)}this.compile=function(E,F,q=null){if(q===null)q=E;if(P!==null)P.renderStart(E,F,q);if(T=Me.get(q),T.init(F),x.push(T),q.traverseVisible(function(V){if(V.isLight&&V.layers.test(F.layers)){if(T.pushLight(V),V.castShadow)T.pushShadow(V)}}),E!==q)E.traverseVisible(function(V){if(V.isLight&&V.layers.test(F.layers)){if(T.pushLight(V),V.castShadow)T.pushShadow(V)}});if(T.setupLights(),P!==null)P.updateLights(T.state.lightsArray);if(Ce=this.localClippingEnabled,ue=J.init(this.clippingPlanes,Ce),ue===!0)J.setGlobalState(this.clippingPlanes,F);if(P!==null)ie.render(T.state.shadowsArray,q,F);let H=new Set;if(E.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;let Se=V.material;if(Se)if(Array.isArray(Se))for(let Oe=0;Oe<Se.length;Oe++){let be=Se[Oe];In(be,q,F,V),H.add(be)}else In(Se,q,F,V),H.add(Se)}),T=x.pop(),P!==null)P.renderEnd();return H},this.compileAsync=function(E,F,q=null){let H=this.compile(E,F,q);return new Promise((V)=>{function Se(){if(H.forEach(function(Oe){let Le=$e.get(Oe).currentProgram;if(Le===void 0||Le.isReady())H.delete(Oe)}),H.size===0){V(E);return}setTimeout(Se,10)}if(at.get("KHR_parallel_shader_compile")!==null)Se();else setTimeout(Se,10)})};let Yl=null;function r0(E){if(Yl)Yl(E)}function uh(){dr.stop()}function fh(){dr.start()}let dr=new Pl;if(dr.setAnimationLoop(r0),typeof self<"u")dr.setContext(self);this.setAnimationLoop=function(E){Yl=E,We.setAnimationLoop(E),E===null?dr.stop():dr.start()},We.addEventListener("sessionstart",uh),We.addEventListener("sessionend",fh),this.render=function(E,F){if(F!==void 0&&F.isCamera!==!0){Fe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;if(P!==null)P.renderStart(E,F);let q=We.enabled===!0&&We.isPresenting===!0,H=y!==null&&(N===null||q)&&y.begin(A,N);if(E.matrixWorldAutoUpdate===!0)E.updateMatrixWorld();if(F.parent===null&&F.matrixWorldAutoUpdate===!0)F.updateMatrixWorld();if(We.enabled===!0&&We.isPresenting===!0&&(y===null||y.isCompositing()===!1)){if(We.cameraAutoUpdate===!0)We.updateCamera(F);F=We.getCamera()}if(E.isScene===!0)E.onBeforeRender(A,E,F,N);if(T=Me.get(E,x.length),T.init(F),T.state.textureUnits=tt.getTextureUnits(),x.push(T),Ue.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),F.isArrayCamera)ce.setFromArrayCamera(F);else re.setFromProjectionMatrix(Ue,xi,F.reversedDepth);if(Ce=this.localClippingEnabled,ue=J.init(this.clippingPlanes,Ce),S=me.get(E,w.length),S.init(),w.push(S),this.info.render.frame++,We.enabled===!0&&We.isPresenting===!0){let Oe=A.xr.getDepthSensingMesh();if(Oe!==null)Zl(Oe,F,-1/0,A.sortObjects)}if(Zl(E,F,0,A.sortObjects),S.finish(),P!==null)P.updateLights(T.state.lightsArray);if(A.sortObjects===!0)S.sort(Ee,ht);if(ft=We.enabled===!1||We.isPresenting===!1||We.hasDepthSensing()===!1,ft)_e.addToRenderList(S,E);if(this.info.autoReset===!0)this.info.reset();if(ue===!0)J.beginShadows();let V=T.state.shadowsArray;if(ie.render(V,E,F),ue===!0)J.endShadows();if((H&&y.hasRenderPass())===!1){let Oe=S.opaque,be=S.transmissive;if(T.setupLights(),F.isArrayCamera){let Le=F.cameras;if(be.length>0)for(let ke=0,rt=Le.length;ke<rt;ke++){let mt=Le[ke];ph(Oe,be,E,mt)}if(ft)_e.render(E);for(let ke=0,rt=Le.length;ke<rt;ke++){let mt=Le[ke];dh(S,E,mt,mt.viewport)}}else{if(be.length>0)ph(Oe,be,E,F);if(ft)_e.render(E);dh(S,E,F)}}if(N!==null&&L===0)tt.updateMultisampleRenderTarget(N),tt.updateRenderTargetMipmap(N);if(H)y.end(A);if(E.isScene===!0)E.onAfterRender(A,E,F);if(pe.resetDefaultState(),Q=-1,z=null,x.pop(),x.length>0){if(T=x[x.length-1],tt.setTextureUnits(T.state.textureUnits),ue===!0)J.setGlobalState(A.clippingPlanes,T.state.camera)}else T=null;if(w.pop(),w.length>0)S=w[w.length-1];else S=null;if(P!==null)P.renderEnd()};function Zl(E,F,q,H){if(E.visible===!1)return;if(E.layers.test(F.layers)){if(E.isGroup)q=E.renderOrder;else if(E.isLOD){if(E.autoUpdate===!0)E.update(F)}else if(E.isLight){if(T.pushLight(E),E.castShadow)T.pushShadow(E)}else if(E.isSprite){let Oe=F.isArrayCamera?ce:re;if(!E.frustumCulled||E.intersectsFrustum(Oe)){if(H)He.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Ue);let be=G.update(E),Le=E.material;if(Le.visible)S.push(E,be,Le,q,He.z,null,F)}}else if(E.isMesh||E.isLine||E.isPoints){let Oe=F.isArrayCamera?ce:re;if(!E.frustumCulled||E.intersectsFrustum(Oe)){let be=G.update(E),Le=E.material;if(H){if(E.boundingSphere!==void 0){if(E.boundingSphere===null)E.computeBoundingSphere();He.copy(E.boundingSphere.center)}else{if(be.boundingSphere===null)be.computeBoundingSphere();He.copy(be.boundingSphere.center)}He.applyMatrix4(E.matrixWorld).applyMatrix4(Ue)}if(Array.isArray(Le)){let ke=be.groups;for(let rt=0,mt=ke.length;rt<mt;rt++){let ze=ke[rt],gt=Le[ze.materialIndex];if(gt&&gt.visible)S.push(E,be,gt,q,He.z,ze,F)}}else if(Le.visible)S.push(E,be,Le,q,He.z,null,F)}}}let Se=E.children;for(let Oe=0,be=Se.length;Oe<be;Oe++)Zl(Se[Oe],F,q,H)}function dh(E,F,q,H){let{opaque:V,transmissive:Se,transparent:Oe}=E;if(T.setupLightsView(q),ue===!0)J.setGlobalState(A.clippingPlanes,q);if(H)we.viewport(W.copy(H));if(V.length>0)xa(V,F,q);if(Se.length>0)xa(Se,F,q);if(Oe.length>0)xa(Oe,F,q);we.buffers.depth.setTest(!0),we.buffers.depth.setMask(!0),we.buffers.color.setMask(!0),we.setPolygonOffset(!1)}function ph(E,F,q,H){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[H.id]===void 0){let ze=at.has("EXT_color_buffer_half_float")||at.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[H.id]=new oi(1,1,{generateMipmaps:!0,type:ze?mi:Jt,minFilter:Oi,samples:Math.max(4,Zt.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:it.workingColorSpace})}let Se=T.state.transmissionRenderTarget[H.id],Oe=H.viewport||W;Se.setSize(Oe.z*A.transmissionResolutionScale,Oe.w*A.transmissionResolutionScale);let be=A.getRenderTarget(),Le=A.getActiveCubeFace(),ke=A.getActiveMipmapLevel();if(A.setRenderTarget(Se),A.getClearColor(k),j=A.getClearAlpha(),j<1)A.setClearColor(16777215,0.5);if(A.clear(),ft)_e.render(q);let rt=A.toneMapping;A.toneMapping=Yi;let mt=H.viewport;if(H.viewport!==void 0)H.viewport=void 0;if(T.setupLightsView(H),ue===!0)J.setGlobalState(A.clippingPlanes,H);if(xa(E,q,H),tt.updateMultisampleRenderTarget(Se),tt.updateRenderTargetMipmap(Se),at.has("WEBGL_multisampled_render_to_texture")===!1){let ze=!1;for(let gt=0,$t=F.length;gt<$t;gt++){let Nt=F[gt],{object:Pt,geometry:Ai,material:Ge,group:Bi}=Nt;if(Ge.side===Gt&&Pt.layers.test(H.layers)){let Et=Ge.side;Ge.side=Lt,Ge.needsUpdate=!0,mh(Pt,q,H,Ai,Ge,Bi),Ge.side=Et,Ge.needsUpdate=!0,ze=!0}}if(ze===!0)tt.updateMultisampleRenderTarget(Se),tt.updateRenderTargetMipmap(Se)}if(A.setRenderTarget(be,Le,ke),A.setClearColor(k,j),mt!==void 0)H.viewport=mt;A.toneMapping=rt}function xa(E,F,q){let H=F.isScene===!0?F.overrideMaterial:null;for(let V=0,Se=E.length;V<Se;V++){let Oe=E[V],{object:be,geometry:Le,group:ke}=Oe,rt=Oe.material;if(rt.allowOverride===!0&&H!==null)rt=H;if(be.layers.test(q.layers))mh(be,F,q,Le,rt,ke)}}function mh(E,F,q,H,V,Se){if(P!==null&&V.isNodeMaterial)P.setObject(E,V);if(E.onBeforeRender(A,F,q,H,V,Se),E.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),V.onBeforeRender(A,F,q,H,E,Se),V.transparent===!0&&V.side===Gt&&V.forceSinglePass===!1)V.side=Lt,V.needsUpdate=!0,A.renderBufferDirect(q,F,H,V,E,Se),V.side=nn,V.needsUpdate=!0,A.renderBufferDirect(q,F,H,V,E,Se),V.side=Gt;else A.renderBufferDirect(q,F,H,V,E,Se);E.onAfterRender(A,F,q,H,V,Se)}function gh(E){let F=0;for(let q of E)if(q.texture!==null)F++;return F}function Xs(E,F,q){if(F.isScene!==!0)F=ot;let H=$e.get(E),V=T.state.lights,Se=T.state.shadowsArray,Oe=V.state.version,be=le.getParameters(E,V.state,Se,F,q,T.state.lightProbeGridArray),Le=le.getProgramCacheKey(be),ke=H.programs;H.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?F.environment:null,H.fog=F.fog;let rt=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;if(H.envMap=ni.get(E.envMap||H.environment,rt),H.envMapRotation=H.environment!==null&&E.envMap===null?F.environmentRotation:E.envMapRotation,ke===void 0)E.addEventListener("dispose",Pe),ke=new Map,H.programs=ke,H.programVariants=new Map;let mt=ke.get(Le);if(mt!==void 0){if(H.currentProgram===mt&&H.lightsStateVersion===Oe)return _h(E,be),mt}else{if(be.uniforms=le.getUniforms(E),P!==null&&E.isNodeMaterial)P.build(E,q,be);E.onBeforeCompile(be,A),mt=le.acquireProgram(be,Le),ke.set(Le,mt),H.uniforms=be.uniforms}let ze=H.uniforms;if(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)ze.clippingPlanes=J.uniform;if(_h(E,be),H.needsLights=l0(E),H.lightsStateVersion=Oe,H.needsLights)ze.ambientLightColor.value=V.state.ambient,ze.lightProbe.value=V.state.probe,ze.sunLights.value=V.state.sun,ze.sunLightShadows.value=V.state.sunShadow,ze.directionalLights.value=V.state.directional,ze.directionalLightShadows.value=V.state.directionalShadow,ze.spotLights.value=V.state.spot,ze.spotLightShadows.value=V.state.spotShadow,ze.rectAreaLights.value=V.state.rectArea,ze.ltc_1.value=V.state.rectAreaLTC1,ze.ltc_2.value=V.state.rectAreaLTC2,ze.pointLights.value=V.state.point,ze.pointLightShadows.value=V.state.pointShadow,ze.hemisphereLights.value=V.state.hemi,ze.sunShadowMatrix.value=V.state.sunShadowMatrix,ze.sunShadowCascade.value=V.state.sunShadowCascade,ze.directionalShadowMatrix.value=V.state.directionalShadowMatrix,ze.spotLightMatrix.value=V.state.spotLightMatrix,ze.spotLightMap.value=V.state.spotLightMap,ze.pointShadowMatrix.value=V.state.pointShadowMatrix;return H.numLightProbeGrids=gh(T.state.lightProbeGridArray),H.currentProgram=mt,H.uniformsList=null,mt}function s0(E,F,q,H,V){let Se=$e.get(E),Oe=Se.currentProgram.id+","+H+","+V,be=Se.programVariants.get(Oe);if(be===void 0)be=Xs(E,F,q),Se.programVariants.set(Oe,be);else Se.currentProgram=be,Se.uniformsList=null,Se.outputColorSpace=H,Se.toneMapping=V;return be}function xh(E){if(E.uniformsList===null){let F=E.currentProgram.getUniforms();E.uniformsList=kr.seqWithValue(F.seq,E.uniforms)}return E.uniformsList}function _h(E,F){let q=$e.get(E);q.outputColorSpace=F.outputColorSpace,q.batching=F.batching,q.batchingColor=F.batchingColor,q.instancing=F.instancing,q.instancingColor=F.instancingColor,q.instancingMorph=F.instancingMorph,q.skinning=F.skinning,q.morphTargets=F.morphTargets,q.morphNormals=F.morphNormals,q.morphColors=F.morphColors,q.morphTargetsCount=F.morphTargetsCount,q.numClippingPlanes=F.numClippingPlanes,q.numIntersection=F.numClipIntersection,q.vertexAlphas=F.vertexAlphas,q.vertexTangents=F.vertexTangents,q.toneMapping=F.toneMapping}function o0(E,F,q,H,V){if(F.isScene!==!0)F=ot;tt.resetTextureUnits();let Se=F.fog,Oe=H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial?F.environment:null,be=N===null?A.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:it.workingColorSpace,Le=H.isMeshStandardMaterial||H.isMeshLambertMaterial&&!H.envMap||H.isMeshPhongMaterial&&!H.envMap,ke=ni.get(H.envMap||Oe,Le),rt=H.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,mt=!!q.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),ze=!!q.morphAttributes.position,gt=!!q.morphAttributes.normal,$t=!!q.morphAttributes.color,Nt=Yi;if(H.toneMapped){if(N===null||N.isXRRenderTarget===!0)Nt=A.toneMapping}let Pt=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,Ai=Pt!==void 0?Pt.length:0,Ge=$e.get(H),Bi=T.state.lights;if(ue===!0){if(Ce===!0||E!==z){let zt=E===z&&H.id===Q;J.setState(H,E,zt)}}let Et=!1,pr=!1;if(H.version===Ge.__version){if(Ge.needsLights&&Ge.lightsStateVersion!==Bi.state.version)Et=!0;else if(V.isBatchedMesh&&Ge.batching===!1)Et=!0;else if(!V.isBatchedMesh&&Ge.batching===!0)Et=!0;else if(V.isBatchedMesh&&Ge.batchingColor===!0&&V._colorsTexture===null)Et=!0;else if(V.isBatchedMesh&&Ge.batchingColor===!1&&V._colorsTexture!==null)Et=!0;else if(V.isInstancedMesh&&Ge.instancing===!1)Et=!0;else if(!V.isInstancedMesh&&Ge.instancing===!0)Et=!0;else if(V.isSkinnedMesh&&Ge.skinning===!1)Et=!0;else if(!V.isSkinnedMesh&&Ge.skinning===!0)Et=!0;else if(V.isInstancedMesh&&Ge.instancingColor===!0&&V.instanceColor===null)Et=!0;else if(V.isInstancedMesh&&Ge.instancingColor===!1&&V.instanceColor!==null)Et=!0;else if(V.isInstancedMesh&&Ge.instancingMorph===!0&&V.morphTexture===null)Et=!0;else if(V.isInstancedMesh&&Ge.instancingMorph===!1&&V.morphTexture!==null)Et=!0;else if(Ge.envMap!==ke)Et=!0;else if(H.fog===!0&&Ge.fog!==Se)Et=!0;else if(Ge.numClippingPlanes!==void 0&&(Ge.numClippingPlanes!==J.numPlanes||Ge.numIntersection!==J.numIntersection))Et=!0;else if(Ge.vertexAlphas!==rt)Et=!0;else if(Ge.vertexTangents!==mt)Et=!0;else if(Ge.morphTargets!==ze)Et=!0;else if(Ge.morphNormals!==gt)Et=!0;else if(Ge.morphColors!==$t)Et=!0;else if(Ge.morphTargetsCount!==Ai)Et=!0;else if(Ge.numLightProbeGrids!==gh(T.state.lightProbeGridArray))Et=!0;else if(Ge.outputColorSpace!==be||Ge.toneMapping!==Nt)pr=!0}else Et=!0,Ge.__version=H.version;let Ri=Ge.currentProgram;if(Et===!0||pr===!0){if(Ri=pr===!0?s0(H,F,V,be,Nt):Xs(H,F,V),P&&H.isNodeMaterial)P.onUpdateProgram(H,Ri,Ge)}let _a=!1,Xn=!1,mr=!1,yt=Ri.getUniforms(),vi=Ge.uniforms;if(we.useProgram(Ri.program))_a=!0,Xn=!0,mr=!0;if(H.id!==Q)Q=H.id,Xn=!0;if(_a||z!==E){if(we.buffers.depth.getReversed()&&E.reversedDepth!==!0)E._reversedDepth=!0,E.updateProjectionMatrix();yt.setValue(B,"projectionMatrix",E.projectionMatrix),yt.setValue(B,"viewMatrix",E.matrixWorldInverse);let pi=yt.map.cameraPosition;if(pi!==void 0)pi.setValue(B,Ye.setFromMatrixPosition(E.matrixWorld));if(Zt.logarithmicDepthBuffer)yt.setValue(B,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2));if(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)yt.setValue(B,"isOrthographic",E.isOrthographicCamera===!0);if(z!==E)z=E,Xn=!0,mr=!0}if(Ge.needsLights){if(Bi.state.sunShadowMap.length>0)yt.setValue(B,"sunShadowMap",Bi.state.sunShadowMap,tt);if(Bi.state.directionalShadowMap.length>0)yt.setValue(B,"directionalShadowMap",Bi.state.directionalShadowMap,tt);if(Bi.state.spotShadowMap.length>0)yt.setValue(B,"spotShadowMap",Bi.state.spotShadowMap,tt);if(Bi.state.pointShadowMap.length>0)yt.setValue(B,"pointShadowMap",Bi.state.pointShadowMap,tt)}if(V.isSkinnedMesh){yt.setOptional(B,V,"bindMatrix"),yt.setOptional(B,V,"bindMatrixInverse");let zt=V.skeleton;if(zt){if(zt.boneTexture===null)zt.computeBoneTexture();yt.setValue(B,"boneTexture",zt.boneTexture,tt)}}if(V.isBatchedMesh){if(yt.setOptional(B,V,"batchingTexture"),yt.setValue(B,"batchingTexture",V._matricesTexture,tt),yt.setOptional(B,V,"batchingIdTexture"),yt.setValue(B,"batchingIdTexture",V._indirectTexture,tt),yt.setOptional(B,V,"batchingColorTexture"),V._colorsTexture!==null)yt.setValue(B,"batchingColorTexture",V._colorsTexture,tt)}let fn=q.morphAttributes;if(fn.position!==void 0||fn.normal!==void 0||fn.color!==void 0)D.update(V,q,Ri);if(Xn||Ge.receiveShadow!==V.receiveShadow)Ge.receiveShadow=V.receiveShadow,yt.setValue(B,"receiveShadow",V.receiveShadow);if((H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial)&&H.envMap===null&&F.environment!==null)vi.envMapIntensity.value=F.environmentIntensity;if(vi.dfgLUT!==void 0)vi.dfgLUT.value=zm();if(Xn){if(yt.setValue(B,"toneMappingExposure",A.toneMappingExposure),Ge.needsLights)a0(vi,mr);if(Se&&H.fog===!0)oe.refreshFogUniforms(vi,Se);if(oe.refreshMaterialUniforms(vi,H,Be,ve,T.state.transmissionRenderTarget[E.id]),Ge.needsLights&&Ge.numLightProbeGrids>0){let zt=M,pi=0;for(let Pn of T.state.lightProbeGridArray){if(Pn.texture===null)continue;zt.textures[pi]=Pn.texture,zt.min[pi]=Pn.boundingBox.min,zt.max[pi]=Pn.boundingBox.max,zt.resolution[pi]=Pn.resolution,pi++}for(let Pn in zt)zt[Pn].length=pi;vi.probesSH.value=zt.textures,vi.probesMin.value=zt.min,vi.probesMax.value=zt.max,vi.probesResolution.value=zt.resolution}kr.upload(B,xh(Ge),vi,tt)}if(H.isShaderMaterial&&H.uniformsNeedUpdate===!0)kr.upload(B,xh(Ge),vi,tt),H.uniformsNeedUpdate=!1;if(H.isSpriteMaterial)yt.setValue(B,"center",V.center);if(yt.setValue(B,"modelViewMatrix",V.modelViewMatrix),yt.setValue(B,"normalMatrix",V.normalMatrix),yt.setValue(B,"modelMatrix",V.matrixWorld),H.uniformsGroups!==void 0){let zt=H.uniformsGroups;for(let pi=0,Pn=zt.length;pi<Pn;pi++){let vh=zt[pi];Te.update(vh,Ri),Te.bind(vh,Ri)}}return Ri}function a0(E,F){E.ambientLightColor.needsUpdate=F,E.lightProbe.needsUpdate=F,E.sunLights.needsUpdate=F,E.sunLightShadows.needsUpdate=F,E.directionalLights.needsUpdate=F,E.directionalLightShadows.needsUpdate=F,E.pointLights.needsUpdate=F,E.pointLightShadows.needsUpdate=F,E.spotLights.needsUpdate=F,E.spotLightShadows.needsUpdate=F,E.rectAreaLights.needsUpdate=F,E.hemisphereLights.needsUpdate=F}function l0(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return X},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(E,F,q){let H=$e.get(E);if(H.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1)H.__useRenderToTexture=!1;$e.get(E.texture).__webglTexture=F,$e.get(E.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:q,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,F){let q=$e.get(E);q.__webglFramebuffer=F,q.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(E,F=0,q=0){N=E,X=F,L=q;let H=null,V=!1,Se=!1;if(E){let be=$e.get(E);if(be.__useDefaultFramebuffer!==void 0){we.bindFramebuffer(B.FRAMEBUFFER,be.__webglFramebuffer),W.copy(E.viewport),Y.copy(E.scissor),fe=E.scissorTest,we.viewport(W),we.scissor(Y),we.setScissorTest(fe),Q=-1;return}else if(be.__webglFramebuffer===void 0)tt.setupRenderTarget(E);else if(be.__hasExternalTextures)tt.rebindTextures(E,$e.get(E.texture).__webglTexture,$e.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let rt=E.depthTexture;if(be.__boundDepthTexture!==rt){if(rt!==null&&$e.has(rt)&&(E.width!==rt.image.width||E.height!==rt.image.height))throw Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");tt.setupDepthRenderbuffer(E)}}let Le=E.texture;if(Le.isData3DTexture||Le.isDataArrayTexture||Le.isCompressedArrayTexture)Se=!0;let ke=$e.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget){if(Array.isArray(ke[F]))H=ke[F][q];else H=ke[F];V=!0}else if(E.samples>0&&tt.useMultisampledRTT(E)===!1)H=$e.get(E).__webglMultisampledFramebuffer;else if(Array.isArray(ke))H=ke[q];else H=ke;W.copy(E.viewport),Y.copy(E.scissor),fe=E.scissorTest}else W.copy(De).multiplyScalar(Be).floor(),Y.copy(Ne).multiplyScalar(Be).floor(),fe=nt;if(q!==0)H=O;if(we.bindFramebuffer(B.FRAMEBUFFER,H))we.drawBuffers(E,H);if(we.viewport(W),we.scissor(Y),we.setScissorTest(fe),V){let be=$e.get(E.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+F,be.__webglTexture,q)}else if(Se){let be=F;for(let Le=0;Le<E.textures.length;Le++){let ke=$e.get(E.textures[Le]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+Le,ke.__webglTexture,q,be)}}else if(E!==null&&q!==0){let be=$e.get(E.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,be.__webglTexture,q)}Q=-1};function yh(E){let F=$e.get(E);if(F.__readFormat!==E.format||F.__readType!==E.type)F.__readFormat=E.format,F.__readType=E.type,F.__formatReadable=Zt.textureFormatReadable(E.format),F.__typeReadable=Zt.textureTypeReadable(E.type);return F}if(this.readRenderTargetPixels=function(E,F,q,H,V,Se,Oe,be=0){if(!(E&&E.isWebGLRenderTarget)){Fe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Le=$e.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Oe!==void 0){if(Le=Le[Oe],Array.isArray(Le))Le=Le[0]}if(Le){we.bindFramebuffer(B.FRAMEBUFFER,Le);try{let ke=E.textures[be],{format:rt,type:mt}=ke;if(E.textures.length>1)B.readBuffer(B.COLOR_ATTACHMENT0+be);let ze=yh(ke);if(ze.__formatReadable===!1){Fe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(ze.__typeReadable===!1){Fe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}if(F>=0&&F<=E.width-H&&(q>=0&&q<=E.height-V))B.readPixels(F,q,H,V,de.convert(rt),de.convert(mt),Se)}finally{let ke=N!==null?$e.get(N).__webglFramebuffer:null;we.bindFramebuffer(B.FRAMEBUFFER,ke)}}},this.readRenderTargetPixelsAsync=async function(E,F,q,H,V,Se,Oe,be=0){if(!(E&&E.isWebGLRenderTarget))throw Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Le=$e.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Oe!==void 0){if(Le=Le[Oe],Array.isArray(Le))Le=Le[0]}if(Le)if(F>=0&&F<=E.width-H&&(q>=0&&q<=E.height-V)){we.bindFramebuffer(B.FRAMEBUFFER,Le);let ke=E.textures[be],{format:rt,type:mt}=ke;if(E.textures.length>1)B.readBuffer(B.COLOR_ATTACHMENT0+be);let ze=yh(ke);if(ze.__formatReadable===!1)throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(ze.__typeReadable===!1)throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let gt=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,gt),B.bufferData(B.PIXEL_PACK_BUFFER,Se.byteLength,B.STREAM_READ),B.readPixels(F,q,H,V,de.convert(rt),de.convert(mt),0),B.bindBuffer(B.PIXEL_PACK_BUFFER,null);let $t=N!==null?$e.get(N).__webglFramebuffer:null;we.bindFramebuffer(B.FRAMEBUFFER,$t);let Nt=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await eu(B,Nt,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,gt),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,Se),B.bindBuffer(B.PIXEL_PACK_BUFFER,null),B.deleteBuffer(gt),B.deleteSync(Nt),Se}else throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,F=null,q=0){let H=Math.pow(2,-q),V=Math.floor(E.image.width*H),Se=Math.floor(E.image.height*H),Oe=F!==null?F.x:0,be=F!==null?F.y:0;tt.setTexture2D(E,0),B.copyTexSubImage2D(B.TEXTURE_2D,q,0,0,Oe,be,V,Se),we.unbindTexture()},this.copyTextureToTexture=function(E,F,q=null,H=null,V=0,Se=0){let Oe,be,Le,ke,rt,mt,ze,gt,$t,Nt=E.isCompressedTexture?E.mipmaps[Se]:E.image;if(q!==null)Oe=q.max.x-q.min.x,be=q.max.y-q.min.y,Le=q.isBox3?q.max.z-q.min.z:1,ke=q.min.x,rt=q.min.y,mt=q.isBox3?q.min.z:0;else{let yt=Math.pow(2,-V);if(Oe=Math.floor(E.width*yt),be=Math.floor(E.height*yt),E.isDataArrayTexture)Le=Nt.depth;else if(E.isData3DTexture)Le=Math.floor(Nt.depth*yt);else Le=1;ke=0,rt=0,mt=0}if(H!==null)ze=H.x,gt=H.y,$t=H.z;else ze=0,gt=0,$t=0;let Pt=de.convert(F.format),Ai=de.convert(F.type),Ge;if(F.isData3DTexture)tt.setTexture3D(F,0),Ge=B.TEXTURE_3D;else if(F.isDataArrayTexture||F.isCompressedArrayTexture)tt.setTexture2DArray(F,0),Ge=B.TEXTURE_2D_ARRAY;else tt.setTexture2D(F,0),Ge=B.TEXTURE_2D;we.activeTexture(B.TEXTURE0),we.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,F.flipY),we.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),we.pixelStorei(B.UNPACK_ALIGNMENT,F.unpackAlignment);let Bi=we.getParameter(B.UNPACK_ROW_LENGTH),Et=we.getParameter(B.UNPACK_IMAGE_HEIGHT),pr=we.getParameter(B.UNPACK_SKIP_PIXELS),Ri=we.getParameter(B.UNPACK_SKIP_ROWS),_a=we.getParameter(B.UNPACK_SKIP_IMAGES);we.pixelStorei(B.UNPACK_ROW_LENGTH,Nt.width),we.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Nt.height),we.pixelStorei(B.UNPACK_SKIP_PIXELS,ke),we.pixelStorei(B.UNPACK_SKIP_ROWS,rt),we.pixelStorei(B.UNPACK_SKIP_IMAGES,mt);let Xn=E.isDataArrayTexture||E.isData3DTexture,mr=F.isDataArrayTexture||F.isData3DTexture;if(E.isDepthTexture){let yt=$e.get(E),vi=$e.get(F),fn=$e.get(yt.__renderTarget),zt=$e.get(vi.__renderTarget);we.bindFramebuffer(B.READ_FRAMEBUFFER,fn.__webglFramebuffer),we.bindFramebuffer(B.DRAW_FRAMEBUFFER,zt.__webglFramebuffer);for(let pi=0;pi<Le;pi++){if(Xn)B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,$e.get(E).__webglTexture,V,mt+pi),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,$e.get(F).__webglTexture,Se,$t+pi);B.blitFramebuffer(ke,rt,ke+Oe,rt+be,ze,gt,ze+Oe,gt+be,B.DEPTH_BUFFER_BIT,B.NEAREST)}we.bindFramebuffer(B.READ_FRAMEBUFFER,null),we.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(V!==0||E.isRenderTargetTexture||$e.has(E)){let yt=$e.get(E),vi=$e.get(F);we.bindFramebuffer(B.READ_FRAMEBUFFER,ee),we.bindFramebuffer(B.DRAW_FRAMEBUFFER,I);for(let fn=0;fn<Le;fn++){if(Xn)B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,yt.__webglTexture,V,mt+fn);else B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,yt.__webglTexture,V);if(mr)B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,vi.__webglTexture,Se,$t+fn);else B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,vi.__webglTexture,Se);if(V!==0)B.blitFramebuffer(ke,rt,ke+Oe,rt+be,ze,gt,ze+Oe,gt+be,B.COLOR_BUFFER_BIT,B.NEAREST);else if(mr)B.copyTexSubImage3D(Ge,Se,ze,gt,$t+fn,ke,rt,Oe,be);else B.copyTexSubImage2D(Ge,Se,ze,gt,ke,rt,Oe,be)}we.bindFramebuffer(B.READ_FRAMEBUFFER,null),we.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(mr)if(E.isDataTexture||E.isData3DTexture)B.texSubImage3D(Ge,Se,ze,gt,$t,Oe,be,Le,Pt,Ai,Nt.data);else if(F.isCompressedArrayTexture)B.compressedTexSubImage3D(Ge,Se,ze,gt,$t,Nt.width,Nt.height,Le,Pt,Nt.data);else B.texSubImage3D(Ge,Se,ze,gt,$t,Oe,be,Le,Pt,Ai,Nt);else if(E.isDataTexture)B.texSubImage2D(B.TEXTURE_2D,Se,ze,gt,Oe,be,Pt,Ai,Nt.data);else if(E.isCompressedTexture)B.compressedTexSubImage2D(B.TEXTURE_2D,Se,ze,gt,Nt.width,Nt.height,Pt,Nt.data);else B.texSubImage2D(B.TEXTURE_2D,Se,ze,gt,Oe,be,Pt,Ai,Nt);if(we.pixelStorei(B.UNPACK_ROW_LENGTH,Bi),we.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Et),we.pixelStorei(B.UNPACK_SKIP_PIXELS,pr),we.pixelStorei(B.UNPACK_SKIP_ROWS,Ri),we.pixelStorei(B.UNPACK_SKIP_IMAGES,_a),Se===0&&F.generateMipmaps===!0&&F.mipmapsAutoUpdate===!0)B.generateMipmap(Ge);we.unbindTexture()},this.initRenderTarget=function(E){if($e.get(E).__webglFramebuffer===void 0)tt.setupRenderTarget(E)},this.initTexture=function(E){if(E.isCubeTexture)tt.setTextureCube(E,0);else if(E.isData3DTexture)tt.setTexture3D(E,0);else if(E.isDataArrayTexture||E.isCompressedArrayTexture)tt.setTexture2DArray(E,0);else tt.setTexture2D(E,0);we.unbindTexture()},this.resetState=function(){X=0,L=0,N=null,we.reset(),pe.reset()},typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return xi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=it._getDrawingBufferColorSpace(e),t.unpackColorSpace=it._getUnpackColorSpace()}}class th extends Ar{constructor(){super();this.name="RoomEnvironment",this.position.y=-3.5;let e=new Ft;e.deleteAttribute("uv");let t=new dt({side:Lt}),i=new dt,n=new Hn(16777215,900,28,2);n.position.set(0.418,16.199,0.3),this.add(n);let r=new ne(e,t);r.position.set(-0.757,13.219,0.717),r.scale.set(31.713,28.305,28.591),this.add(r);let s=new yn(e,i,6),o=new lt;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-0.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),s.setMatrixAt(0,o.matrix),o.position.set(-5.607,-0.754,-0.758),o.rotation.set(0,0.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),s.setMatrixAt(1,o.matrix),o.position.set(6.167,0.857,7.803),o.rotation.set(0,0.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),s.setMatrixAt(2,o.matrix),o.position.set(-2.017,0.018,6.124),o.rotation.set(0,0.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),s.setMatrixAt(3,o.matrix),o.position.set(2.291,-0.756,-2.621),o.rotation.set(0,-0.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),s.setMatrixAt(4,o.matrix),o.position.set(-2.193,-0.369,-5.547),o.rotation.set(0,0.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),s.setMatrixAt(5,o.matrix),this.add(s);let a=new ne(e,Gs(50));a.position.set(-16.116,14.37,8.208),a.scale.set(0.1,2.428,2.739),this.add(a);let l=new ne(e,Gs(50));l.position.set(-16.109,18.021,-8.207),l.scale.set(0.1,2.425,2.751),this.add(l);let c=new ne(e,Gs(17));c.position.set(14.904,12.198,-1.832),c.scale.set(0.15,4.265,6.331),this.add(c);let h=new ne(e,Gs(43));h.position.set(-0.462,8.89,14.52),h.scale.set(4.38,5.441,0.088),this.add(h);let f=new ne(e,Gs(20));f.position.set(3.235,11.486,-12.541),f.scale.set(2.5,2,0.1),this.add(f);let u=new ne(e,Gs(100));u.position.set(0,20,0),u.scale.set(1,0.1,1),this.add(u)}dispose(){let e=new Set;this.traverse((t)=>{if(t.isMesh)e.add(t.geometry),e.add(t.material)});for(let t of e)t.dispose()}}function Gs(e){return new na({color:0,emissive:16777215,emissiveIntensity:e})}function Hm(e,t=!1){let i=e[0].index!==null,n=new Set(Object.keys(e[0].attributes)),r=new Set(Object.keys(e[0].morphAttributes)),s={},o={},a=e[0].morphTargetsRelative,l=new Ve;l.morphTargetsRelative=a;let c=0;for(let h=0;h<e.length;++h){let f=e[h],u=0,m=0;if(i!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let g in f.attributes){if(!n.has(g))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+g+'" attribute exists among all geometries, or in none of them.'),null;if(s[g]===void 0)s[g]=[];s[g].push(f.attributes[g]),u++}if(u!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let g in f.morphAttributes){if(!r.has(g))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;if(f.morphAttributes[g].length!==e[0].morphAttributes[g].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have the same number of morph targets for the "'+g+'" morph attribute.'),null;if(o[g]===void 0)o[g]=[];o[g].push(f.morphAttributes[g]),m++}if(m!==r.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of morph attributes."),null;if(t){let g;if(i)g=f.index.count;else if(f.attributes.position!==void 0)g=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,g,h),c+=g}}if(i){let h=0,f=[];for(let u=0;u<e.length;++u){let m=e[u].index;for(let g=0;g<m.count;++g)f.push(m.getX(g)+h);h+=e[u].attributes.position.count}l.setIndex(f)}for(let h in s){let f=Gm(s[h]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,f)}for(let h in o){let f=o[h][0].length;if(f===0)continue;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let u=0;u<f;++u){let m=[];for(let _=0;_<o[h].length;++_)m.push(o[h][_][u]);let g=Gm(m);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}return l}function Gm(e){let t,i,n,r=-1,s=0;for(let c=0;c<e.length;++c){let h=e[c];if(t===void 0)t=h.array.constructor;if(t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(i===void 0)i=h.itemSize;if(i!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0)n=h.normalized;if(n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(r===-1)r=h.gpuType;if(r!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=h.count*i}let o=new t(s),a=new Xt(o,i,n),l=0;for(let c=0;c<e.length;++c){let h=e[c];if(h.isInterleavedBufferAttribute){let f=l/i;for(let u=0,m=h.count;u<m;u++)for(let g=0;g<i;g++){let _=h.getComponent(u,g);a.setComponent(u+f,g,_)}}else o.set(h.array,l);l+=h.count*i}if(r!==void 0)a.gpuType=r;return a}var da=new C;function un(e,t,i,n,r,s){let o=2*Math.PI*r/4,a=Math.max(s-2*r,0),l=Math.PI/4;da.copy(t),da[n]=0,da.normalize();let c=0.5*o/(o+a),h=1-da.angleTo(e)/l;if(Math.sign(da[i])===1)return h*c;else return a/(o+a)+c+c*(1-h)}class Fi extends Ft{constructor(e=1,t=1,i=1,n=2,r=0.1){let s=n*2+1;r=Math.min(e/2,t/2,i/2,r);super(1,1,1,s,s,s);if(this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:i,segments:n,radius:r},s===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let a=new C,l=new C,c=new C(e,t,i).divideScalar(2).subScalar(r),h=this.attributes.position.array,f=this.attributes.normal.array,u=this.attributes.uv.array,m=h.length/6,g=new C,_=0.5/s;for(let p=0,d=0;p<h.length;p+=3,d+=2)switch(a.fromArray(h,p),l.copy(a),l.x-=Math.sign(l.x)*_,l.y-=Math.sign(l.y)*_,l.z-=Math.sign(l.z)*_,l.normalize(),h[p+0]=c.x*Math.sign(a.x)+l.x*r,h[p+1]=c.y*Math.sign(a.y)+l.y*r,h[p+2]=c.z*Math.sign(a.z)+l.z*r,f[p+0]=l.x,f[p+1]=l.y,f[p+2]=l.z,Math.floor(p/m)){case 0:g.set(1,0,0),u[d+0]=un(g,l,"z","y",r,i),u[d+1]=1-un(g,l,"y","z",r,t);break;case 1:g.set(-1,0,0),u[d+0]=1-un(g,l,"z","y",r,i),u[d+1]=1-un(g,l,"y","z",r,t);break;case 2:g.set(0,1,0),u[d+0]=1-un(g,l,"x","z",r,e),u[d+1]=un(g,l,"z","x",r,i);break;case 3:g.set(0,-1,0),u[d+0]=1-un(g,l,"x","z",r,e),u[d+1]=1-un(g,l,"z","x",r,i);break;case 4:g.set(0,0,1),u[d+0]=1-un(g,l,"x","y",r,e),u[d+1]=1-un(g,l,"y","x",r,t);break;case 5:g.set(0,0,-1),u[d+0]=un(g,l,"x","y",r,e),u[d+1]=1-un(g,l,"y","x",r,t);break}}static fromJSON(e){return new Fi(e.width,e.height,e.depth,e.segments,e.radius)}}var oh=1280,ah=720,yi=new Fl({antialias:!0,preserveDrawingBuffer:!0});yi.setSize(oh,ah);yi.setPixelRatio(1);yi.toneMapping=qr;yi.toneMappingExposure=1.05;yi.shadowMap.enabled=!0;yi.shadowMap.type=ya;document.body.style.margin=0;document.body.appendChild(yi.domElement);var vn=new Ar;vn.background=new xe(460555);var W_=new hr(yi);vn.environment=W_.fromScene(new th,0.04).texture;vn.environmentIntensity=0.28;var hi=new Yt(70,oh/ah,0.05,120),Xe=(()=>{let e=7;return()=>(e=e*16807%2147483647)/2147483647})();function It(e,t){let i=document.createElement("canvas");return i.width=e,i.height=t,i}function Wl(e,t=1,i=1,n=!0){let r=new Vi(e);if(r.wrapS=r.wrapT=Dn,r.repeat.set(t,i),r.anisotropy=8,n)r.colorSpace=Tt;return r}function ti(e,t,i,n){let r=e.getImageData(0,0,t,i),s=r.data;for(let o=0;o<s.length;o+=4){let a=(Xe()-0.5)*n;s[o]+=a,s[o+1]+=a,s[o+2]+=a}e.putImageData(r,0,0)}var Wt={};Wt.concrete=(()=>{let e=It(512,512),t=e.getContext("2d");t.fillStyle="#7d7e82",t.fillRect(0,0,512,512);for(let i=0;i<40;i++){let n=t.createRadialGradient(Xe()*512,Xe()*512,5,Xe()*512,Xe()*512,120),r=Xe()*512,s=Xe()*512,o=t.createRadialGradient(r,s,5,r,s,90+Xe()*90);o.addColorStop(0,Xe()>0.5?"rgba(255,255,255,.07)":"rgba(0,0,0,.09)"),o.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=o,t.fillRect(0,0,512,512)}return ti(t,512,512,22),t.strokeStyle="rgba(0,0,0,.35)",t.lineWidth=2,t.strokeRect(1,1,510,510),e})();Wt.parquet=(()=>{let e=It(512,512),t=e.getContext("2d"),i=256,n=42;for(let r=0;r<12;r++){let s=r%3*85;for(let o=-1;o<3;o++){let a=24+Xe()*6,l=28+Xe()*12;t.fillStyle=`hsl(${a},48%,${l}%)`,t.fillRect(o*256+s,r*42,254,40);for(let c=0;c<14;c++){t.strokeStyle=`rgba(30,12,0,${0.05+Xe()*0.1})`,t.lineWidth=1,t.beginPath();let h=r*42+Xe()*42;t.moveTo(o*256+s,h),t.lineTo(o*256+s+256,h+(Xe()-0.5)*3),t.stroke()}}}return ti(t,512,512,10),e})();Wt.brick=(()=>{let e=It(512,512),t=e.getContext("2d");t.fillStyle="#3a2c28",t.fillRect(0,0,512,512);let i=128,n=42;for(let r=0;r<12;r++)for(let s=-1;s<5;s++){let o=r%2*64,a=8+Xe()*8,l=30+Xe()*14;t.fillStyle=`hsl(${a},${48+Xe()*14}%,${l}%)`,t.fillRect(s*i+o+3,r*n+3,i-6,n-6)}return ti(t,512,512,26),e})();Wt.carpet=(()=>{let e=It(256,256),t=e.getContext("2d");return t.fillStyle="#857f76",t.fillRect(0,0,256,256),ti(t,256,256,26),e})();Wt.slats=(()=>{let e=It(512,512),t=e.getContext("2d");for(let i=0;i<16;i++)t.fillStyle=`hsl(${28+Xe()*5},38%,${24+Xe()*8}%)`,t.fillRect(i*32,0,28,512),t.fillStyle="#0c0b0b",t.fillRect(i*32+28,0,4,512);return ti(t,512,512,10),e})();Wt.oak=(()=>{let e=It(512,512),t=e.getContext("2d"),i=512,n=128;for(let r=0;r<4;r++){let s=r%2*200;for(let o=-1;o<2;o++){t.fillStyle=`hsl(${32+Xe()*4},${28+Xe()*6}%,${66+Xe()*6}%)`,t.fillRect(o*512+s,r*128,510,126);for(let a=0;a<26;a++){t.strokeStyle=`rgba(90,60,30,${0.04+Xe()*0.08})`,t.beginPath();let l=r*128+Xe()*128;t.moveTo(o*512+s,l),t.lineTo(o*512+s+512,l+(Xe()-0.5)*6),t.stroke()}}}return ti(t,512,512,8),e})();Wt.greige=(()=>{let e=It(256,256),t=e.getContext("2d");return t.fillStyle="#a3a5ab",t.fillRect(0,0,256,256),ti(t,256,256,8),e})();Wt.graphite=(()=>{let e=It(256,256),t=e.getContext("2d");return t.fillStyle="#26272c",t.fillRect(0,0,256,256),ti(t,256,256,10),e})();Wt.plaster=(()=>{let e=It(256,256),t=e.getContext("2d");return t.fillStyle="#d9d8d4",t.fillRect(0,0,256,256),ti(t,256,256,10),e})();Wt.darkwall=(()=>{let e=It(256,256),t=e.getContext("2d");return t.fillStyle="#25252c",t.fillRect(0,0,256,256),ti(t,256,256,12),e})();Wt.pvc=(()=>{let e=It(256,256),t=e.getContext("2d");return t.fillStyle="#2f6b4f",t.fillRect(0,0,256,256),ti(t,256,256,12),e})();Wt.rubber=(()=>{let e=It(256,256),t=e.getContext("2d");return t.fillStyle="#23262f",t.fillRect(0,0,256,256),ti(t,256,256,30),e})();Wt.tile=(()=>{let e=It(256,256),t=e.getContext("2d");return t.fillStyle="#e4e4e2",t.fillRect(0,0,256,256),t.strokeStyle="#a9a9a6",t.lineWidth=3,t.strokeRect(0,0,256,256),ti(t,256,256,8),e})();function Xi(e,t,i=0.85,n=0,r=1,s=1,o={}){let a=Wl(Wt[e],r/t,s/t);return new dt(Object.assign({map:a,bumpMap:a,bumpScale:e==="brick"?3:0.8,roughness:i,metalness:n},o))}var se=(e,t=0.6,i=0,n)=>new dt(Object.assign({color:e,roughness:t,metalness:i},n||{})),Bt=(e,t=1)=>new dt({color:0,emissive:e,emissiveIntensity:t,toneMapped:!0});function lh(e,t,i,n=0,r=0,s=0,o=0,a=!0){let l=new ne(t,i);return l.position.set(n,r,s),l.rotation.y=o,l.castShadow=a,l.receiveShadow=!0,e.add(l),l}var ae=(e,t,i,n,r,s,o,a,l=0)=>lh(e,new Ft(t,i,n),r,s,o,a,l);var _t=(e,t,i,n,r,s,o,a,l=24)=>lh(e,new Rt(t,i,n,l),r,s,o,a);function Mn(e,t,i,n,r,s,o,a,l=0,c="bold 120px Arial Black, Arial",h,f=!0){let u=It(1024,Math.round(1024*n/i)),m=u.getContext("2d");if(h)m.fillStyle=h,m.fillRect(0,0,u.width,u.height);m.font=c,m.textAlign="center",m.textBaseline="middle",m.shadowColor=r,m.shadowBlur=28,m.fillStyle=r,m.fillText(t,u.width/2,u.height/2),m.shadowBlur=8,m.fillText(t,u.width/2,u.height/2);let g=new Vi(u);g.colorSpace=Tt;let _=new ne(new Dt(i,n),new kt({map:g,transparent:!h,toneMapped:!1}));if(_.position.set(s,o,a),_.rotation.y=l,e.add(_),!f)return _;let p=new Hn(new xe(r),3,4,2);return p.position.set(s,o,a),p.position.add(new C(Math.sin(l),0,Math.cos(l)).multiplyScalar(0.4)),e.add(p),_}function Ti(e,t,i,n,r,s,o=12){let a=new Hn(r,s,o,2);return a.position.set(t,i,n),e.add(a),a}var Vr=new ut;vn.add(Vr);var ei=new ut;Vr.add(ei);var Vs=[];function qi(e,t,i,n,r,s,o,a=[],l=0.25,c=!1){let h=n-t,f=r-i,u=Math.hypot(h,f),m=-Math.atan2(f,h),g=[],_=0;a.sort((d,v)=>d[0]-v[0]);for(let[d,v]of a){if(d>_)g.push([_,d,0]);g.push([d,v,1]),_=v}if(_<u)g.push([_,u,0]);for(let[d,v,M]of g){let S=v-d,T=t+h/u*(d+v)/2,w=i+f/u*(d+v)/2,x=M?2.2:0,y=M?s-2.2:s;if(y>0.01){let A=new ne(new Ft(S,y,l),o(S,y));if(A.position.set(T,x+y/2,w),A.rotation.y=m,A.castShadow=A.receiveShadow=!0,e.add(A),c)Vs.push(A)}if(M)for(let A of[d,v]){let U=t+h/u*A,P=i+f/u*A,O=new ne(new Ft(0.1,2.2,l+0.06),se(1842208,0.6));O.position.set(U,1.1,P),O.rotation.y=m,e.add(O)}}let p=new ne(new Ft(u,0.12,l+0.03),se(1381658,0.7));p.position.set((t+n)/2,0.06,(i+r)/2),p.rotation.y=m,e.add(p)}function ga(e,t,i){let n=new Gi(t.map((o)=>new Z(o[0],-o[1]))),r=new Is(n);r.rotateX(-Math.PI/2);let s=new ne(r,i);return s.receiveShadow=!0,e.add(s),s}function Ws(e,t,i){let n=new Gi(e.map((o)=>new Z(o[0],-o[1]))),r=new Is(n);r.rotateX(-Math.PI/2),i.side=Gt;let s=new ne(r,i);s.position.y=t,ei.add(s)}Wt.carpetDark=(()=>{let e=It(256,256),t=e.getContext("2d");t.fillStyle="#1b1c22",t.fillRect(0,0,256,256);for(let i=0;i<6000;i++){let n=20+Xe()*22;t.fillStyle=`rgba(${n},${n},${n+7},.5)`,t.fillRect(Xe()*256,Xe()*256,1+Xe()*1.4,1+Xe()*2.2)}return ti(t,256,256,12),e})();Wt.fabric=(()=>{let e=It(256,256),t=e.getContext("2d");t.fillStyle="#3b3e46",t.fillRect(0,0,256,256),t.strokeStyle="rgba(0,0,0,.18)",t.lineWidth=1;for(let i=0;i<256;i+=4)t.beginPath(),t.moveTo(i,0),t.lineTo(i,256),t.stroke(),t.beginPath(),t.moveTo(0,i),t.lineTo(256,i),t.stroke();return ti(t,256,256,14),e})();Wt.plywood=(()=>{let e=It(512,1024),t=e.getContext("2d"),i=t.createLinearGradient(0,0,512,0);i.addColorStop(0,"#c7a368"),i.addColorStop(0.5,"#d2b077"),i.addColorStop(1,"#c39d62"),t.fillStyle=i,t.fillRect(0,0,512,1024);for(let r=0;r<380;r++){let s=Xe()*512,o=Xe()*1024;t.strokeStyle=`rgba(${95+Xe()*40},${60+Xe()*30},25,${0.05+Xe()*0.12})`,t.lineWidth=0.6+Xe()*1.6,t.beginPath(),t.moveTo(s,o),t.bezierCurveTo(s+Xe()*16-8,o+120,s+Xe()*16-8,o+260,s+Xe()*10-5,o+380+Xe()*200),t.stroke()}for(let r=0;r<4;r++){let s=Xe()*512,o=Xe()*1024;for(let a=3;a<22;a+=4)t.strokeStyle=`rgba(90,55,20,${0.25-a/120})`,t.lineWidth=1.5,t.beginPath(),t.ellipse(s,o,a*0.7,a*1.5,0,0,7),t.stroke()}let n=83.9344262295082;for(let r=0;r<6;r++)for(let s=0;s<12;s++){let o=38+r*n,a=40+s*n;if(o>500)continue;t.fillStyle="rgba(30,18,8,.85)",t.beginPath(),t.arc(o,a,5,0,7),t.fill(),t.fillStyle="rgba(255,230,190,.35)",t.beginPath(),t.arc(o-1,a-1,1.6,0,7),t.fill()}return t.strokeStyle="rgba(40,24,10,.7)",t.lineWidth=3,t.strokeRect(1,1,510,1022),ti(t,512,1024,10),e})();Wt.matBlue=(()=>{let e=It(256,512),t=e.getContext("2d");return t.fillStyle="#244f9e",t.fillRect(0,0,256,512),ti(t,256,512,26),t.strokeStyle="rgba(8,16,40,.9)",t.lineWidth=6,t.strokeRect(2,2,252,508),t.strokeStyle="rgba(160,190,255,.35)",t.lineWidth=2,t.setLineDash([7,6]),t.strokeRect(12,12,232,488),e})();Wt.steel=(()=>{let e=It(128,128),t=e.getContext("2d");return t.fillStyle="#5b6068",t.fillRect(0,0,128,128),ti(t,128,128,18),e})();var pt=new ut;Vr.add(pt);var wi=3.2,Vm=[[-8.8,-3.85],[8.8,-3.85],[8.8,3.85],[-8.8,3.85]],Wm=[[-3.9,-9.4],[4.3,-9.4],[4.3,-3.85],[-3.9,-3.85]],Xm;function Xl(e,t,i){let n=Xi(e,t,i,0,1,1);return n.map.repeat.set(1/t,1/t),n.bumpMap=n.map,n}var Wr=(e,t)=>Xi("darkwall",1.4,0.9,0,e,t),X_=(e,t)=>Xi("graphite",1.4,0.85,0,e,t),q_=(e,t)=>Xi("slats",1,0.7,0,e,t),qm=Xl("carpetDark",0.6,1);ga(pt,Vm,qm);ga(pt,Wm,qm);qi(pt,-8.8,-3.85,-3.9,-3.85,wi,Wr);qi(pt,-3.9,-3.85,-3.9,-9.4,wi,Wr);qi(pt,-3.9,-9.4,4.3,-9.4,wi,q_);qi(pt,4.3,-9.4,4.3,-3.85,wi,Wr);qi(pt,4.3,-3.85,8.8,-3.85,wi,Wr);qi(pt,8.8,-3.85,8.8,3.85,wi,X_);qi(pt,8.8,3.85,-8.8,3.85,wi,Wr,[[9.8,11.6]],0.25,!0);qi(pt,-8.8,3.85,-8.8,-3.85,wi,Wr,[[2.65,4.85]]);for(let[e,t]of[[-3.9,-3.85],[4.3,-3.85]])ae(pt,0.5,wi,0.5,se(2763569,0.7),e,wi/2,t),ae(pt,0.54,0.12,0.54,se(855312,0.6),e,0.06,t);var Ym=()=>se(1908260,0.9);Ws(Vm,wi,Ym());Ws(Wm,wi,Ym());ae(ei,8.6,0.34,0.55,se(1381914,0.85),0.2,wi-0.17,-3.85);for(let[e,t,i,n,r]of[[0,-3.62,17.2,0.06,6966527],[0,3.62,17.2,0.06,6966527],[-8.58,0,0.06,7.2,6966527],[8.58,0,0.06,7.2,6966527],[0.2,-9.18,8,0.06,16762512],[-3.68,-6.6,0.06,5.2,16762512],[4.08,-6.6,0.06,5.2,16762512]])ae(ei,i,0.025,n,Bt(r,3.5),e,wi-0.015,t);for(let e=0;e<6;e++)for(let t of[-1.8,1.8])_t(ei,0.07,0.07,0.02,Bt(16773856,8),-7+e*2.8+1,wi-0.02,t);for(let e=0;e<3;e++)for(let t of[-5.5,-8])_t(ei,0.07,0.07,0.02,Bt(16773856,8),-2.4+e*2.6+0.2,wi-0.02,t);vn.add(new ca(16777215,0.55));yi.toneMappingExposure=1.25;vn.environmentIntensity=0.45;Ti(pt,0.2,2.8,0,16773598,14,14);Ti(pt,-6.2,2.8,-2.2,16773340,10,9);Ti(pt,-6.2,2.8,2.2,16773340,10,9);Ti(pt,0.2,2.9,-6.6,16774116,16,10);Ti(pt,4.9,2.5,2.5,16761466,10,8);Ti(pt,4.9,0.35,1.6,11554047,3,4);Ti(pt,7.3,2.6,0,9071871,5,7);Ti(pt,-0.6,2.7,0.4,3725567,3,6);var ks=(e,t,i,n,r=0,s=0,o=0,a=Vr)=>{let l=new ne(new Ft(e,t,i),n);return l.position.set(r,s,o),a.add(l),l};function Y_(e,t,i,n){let r=document.createElement("canvas");r.width=e,r.height=t,i(r.getContext("2d"),e,t);let s=new Vi(r);if(s.colorSpace=Tt,s.anisotropy=8,n)s.wrapS=s.wrapT=Dn,s.repeat.set(n[0],n[1]);return s}var ch=(e,t={})=>new dt({color:e,roughness:t.r??0.6,metalness:t.m??0.1,emissive:t.e??0,emissiveIntensity:t.ei??1,side:t.side}),Zm=(e,t=1)=>new kt({color:new xe(e).multiplyScalar(t),toneMapped:!1});function Z_(e,t,i,n,r,s,o,a=0){let l=new ne(new Dt(e,t),new kt({map:i,transparent:!0,toneMapped:!1}));return l.position.set(r,s,o),l.rotation.y=a,n.add(l),l}(function(){let e=ks,t=Y_,i=ch,n=Zm,r=Z_,s={games:[["VAL","Valorant","#ff4655","#fff"],["LoL","League","#1b3a8a","#e9c46a"],["CS2","CS2","#e8793a","#1a0f05"],["RL","Rocket League","#1e7bff","#ff9a4a"],["ARK","Arkheron","#1fb89a","#032a22"],["S2","SMITE 2","#6a3ad0","#ffd68a"]]},o=new ut;o.position.set(8.19,0,0),o.rotation.y=-Math.PI/2,pt.add(o),Xm=o;let a=i(790562,{r:0.4,m:0.4});e(1.9,0.05,0.85,a,0,0.75,0,o),[[-0.9,-0.38],[0.9,-0.38],[-0.9,0.38],[0.9,0.38]].forEach(([L,N])=>e(0.05,0.75,0.05,a,L,0.375,N,o)),e(1.9,0.015,0.02,n(3824895,1.4),0,0.72,0.43,o);let l=t(512,300,(L,N,Q)=>{L.fillStyle="#12062a",L.fillRect(0,0,N,Q),L.strokeStyle="#ff4fa6",L.globalAlpha=0.5,L.lineWidth=2,L.beginPath(),L.moveTo(20,40),L.quadraticCurveTo(70,80,40,140),L.moveTo(490,30),L.quadraticCurveTo(440,90,470,150),L.stroke(),L.globalAlpha=1,L.font="900 100px Inter,Arial",L.textAlign="center",L.shadowColor="#ff4f8a",L.shadowBlur=24,L.lineWidth=6,L.strokeStyle="#ff4f8a",L.strokeText("FONGER",N/2,180),L.shadowBlur=0,L.fillStyle="#2a0a2e",L.fillText("FONGER",N/2,180)}),c=s&&s.games||[],h=t(512,300,(L,N,Q)=>{let z=L.createLinearGradient(0,0,N,Q);z.addColorStop(0,"#10163f"),z.addColorStop(0.55,"#2a1a6e"),z.addColorStop(1,"#5a1f78"),L.fillStyle=z,L.fillRect(0,0,N,Q),c.forEach((W,Y)=>{let fe=60+Y%3*150,k=40+Math.floor(Y/3)*110;L.fillStyle=W[2],L.beginPath(),L.roundRect(fe,k,90,90,20),L.fill(),L.fillStyle=W[3],L.font="900 30px Inter,Arial",L.textAlign="center",L.fillText(W[0],fe+45,k+56)}),L.fillStyle="rgba(5,6,15,.9)",L.fillRect(0,Q-26,N,26),L.fillStyle="#38e8ff",L.fillRect(10,Q-20,14,14)});function f(L,N,Q,z,W,Y,fe,k=0,j=0,ye=0){new Us().load(L,(ve)=>{ve.colorSpace=Tt,ve.anisotropy=8;let Be=new ne(new Dt(N,Q*(ve.image.height/ve.image.width)/(Q/N)),new kt({map:ve,transparent:!0,toneMapped:!1}));Be.position.set(W,Y,fe),Be.rotation.set(k,j,ye),z.add(Be)},void 0,()=>{})}let u=i(460814,{r:0.55,m:0.25}),m=i(724246,{r:0.28,m:0.6}),g=i(15329774,{r:0.45,m:0.05}),_=i(1382175,{m:0.8,r:0.35});function p(L,N,Q){let Y=new ut;Y.position.set(L,0.775,-0.2),Y.rotation.y=N,o.add(Y);let fe=new ne(new Fi(0.56,0.32,0.025,3,0.006),m);fe.position.y=0.3,Y.add(fe),r(0.542,0.3,Q,Y,0,0.3,0.0135),e(0.03,0.006,0.001,i(1777451,{m:0.8}),0,0.146,0.0135,Y);let k=new ne(new nr(0.0035,8),n(4063130,2));k.position.set(0.2,0.145,0.0135),Y.add(k);let j=new ne(new Rt(0.012,0.014,0.17,12),g);j.position.set(0,0.2,-0.03),Y.add(j);let ye=new ne(new Rt(0.11,0.115,0.012,40),g);ye.position.set(0,0.006,-0.02),Y.add(ye)}function d(L,N,Q){let Y=new ut;Y.position.set(L,0.775,-0.2),Y.rotation.y=N,o.add(Y);let fe=new ne(new Fi(0.62,0.355,0.028,3,0.006),m);fe.position.y=0.36,Y.add(fe),e(0.28,0.2,0.03,u,0,0.36,-0.028,Y),r(0.604,0.33699999999999997,Q,Y,0,0.36,0.0155),e(0.03,0.006,0.001,i(1777451,{m:0.8}),0,0.1875,0.0155,Y);let k=new ut;k.position.set(L,0.775,-0.405),o.add(k),e(0.06,0.05,0.05,_,0,-0.012,0,k),e(0.05,0.012,0.085,_,0,-0.035,0,k);let j=new ne(new Rt(0.014,0.014,0.42,16),_);j.position.set(0,0.21,0),k.add(j);let ye=new ne(new Rt(0.02,0.02,0.03,16),_);ye.position.set(0,0.4,0),k.add(ye),e(0.03,0.022,0.12,_,0,0.4,0.06,k);let ve=new ne(new Rt(0.017,0.017,0.03,16),_);ve.position.set(0,0.4,0.12),k.add(ve),e(0.03,0.02,0.06,_,0,0.4,0.15,k),e(0.1,0.1,0.012,_,0,0.36,-0.05,Y)}p(-0.52,0.3,l),d(0.12,-0.04,h);{let L=new ne(new Rt(0.045,0.047,0.01,32),g);L.position.set(-0.02,0.78,-0.08),o.add(L);let N=new ne(new ea(0.028,0.033,32),n(8019199,1.2));N.rotation.x=-Math.PI/2,N.position.set(-0.02,0.7855,-0.08),o.add(N);let Q=new ne(new Rt(0.03,0.03,0.15,24),i(657933,{r:0.4,m:0.6}));Q.position.set(0.5,0.85,-0.14),o.add(Q);let z=new ne(new Rt(0.031,0.031,0.012,24),_);z.position.set(0.5,0.92,-0.14),o.add(z)}let v=t(1024,440,(L,N,Q)=>{L.fillStyle="#0c0d11",L.fillRect(0,0,N,Q),L.strokeStyle="#2b2e3a",L.lineWidth=4,L.setLineDash([12,9]),L.strokeRect(12,12,N-24,Q-24),L.setLineDash([]),L.font="700 64px Inter,Arial",L.fillStyle="#9aa0b4",L.textAlign="right",L.fillText("Logitech G",N-52,Q-44)}),M=new ne(new Dt(0.9,0.38),new dt({map:v,roughness:0.95}));M.rotation.x=-Math.PI/2,M.position.set(-0.1,0.7765,0.2),o.add(M);let S=t(1480,570,(L,N,Q)=>{L.fillStyle="#0a0b10",L.fillRect(0,0,N,Q);let z=76,W=40,Y=40,fe="#6a4cff",k=(ve,Be,Ee,ht,De=1)=>{let Ne=W+ve*z+3,nt=Y+Be*z+3,re=Ee*z-6,ce=De*z-6;L.shadowColor=fe,L.shadowBlur=16,L.fillStyle="#12141c",L.beginPath(),L.roundRect(Ne,nt,re,ce,10),L.fill(),L.shadowBlur=0,L.strokeStyle="rgba(106,76,255,.65)",L.lineWidth=2,L.stroke(),L.fillStyle="#c4b8ff",L.font="600 21px Inter,Arial",L.textAlign="center",L.textBaseline="middle",L.fillText(ht,Ne+re/2,nt+ce/2+1)},j=(ve,Be,Ee=0)=>{let ht=Ee;Be.forEach(([De,Ne])=>{if(De!==null)k(ht,ve,Ne,De);ht+=Ne})};j(0,[["Esc",1],[null,1],["F1",1],["F2",1],["F3",1],["F4",1],[null,0.5],["F5",1],["F6",1],["F7",1],["F8",1],[null,0.5],["F9",1],["F10",1],["F11",1],["F12",1],[null,0.25],["Prt",1],["Scr",1],["Pau",1]]);let ye="1234567890".split("");j(1.5,[["`",1],...ye.map((ve)=>[ve,1]),["-",1],["=",1],["⌫",2],[null,0.25],["Ins",1],["Hm",1],["Pg↑",1]]),j(2.5,[["Tab",1.5],..."QWERTYUIOP".split("").map((ve)=>[ve,1]),["[",1],["]",1],["\\",1.5],[null,0.25],["Del",1],["End",1],["Pg↓",1]]),j(3.5,[["Caps",1.75],..."ASDFGHJKL".split("").map((ve)=>[ve,1]),[";",1],["'",1],["Enter",2.25]]),j(4.5,[["Shift",2.25],..."ZXCVBNM".split("").map((ve)=>[ve,1]),[",",1],[".",1],["/",1],["Shift",2.75],[null,1.25],["↑",1]]),j(5.5,[["Ctrl",1.25],["Win",1.25],["Alt",1.25],["",6.25],["Alt",1.25],["Fn",1.25],["Menu",1.25],["Ctrl",1.25],[null,0.25],["←",1],["↓",1],["→",1]])}),T=new ut;T.position.set(-0.2,0.7765,0.22),o.add(T);let w=new ne(new Fi(0.365,0.016,0.142,3,0.006),i(789778,{r:0.4,m:0.55}));w.position.y=0.008,T.add(w);let x=new ne(new Dt(0.352,0.13285621621621618),new dt({map:S,emissiveMap:S,emissive:16777215,emissiveIntensity:0.55,roughness:0.6}));x.rotation.x=-Math.PI/2,x.position.y=0.0166,T.add(x),f("logos/razer.png",0.03,0.03,T,0.14,0.0168,-0.06,-Math.PI/2);let y=new ut;y.position.set(0.27,0.7775,0.21),y.rotation.y=0.12,o.add(y);{let L=new wn(1,40,28),N=L.attributes.position;for(let W=0;W<N.count;W++){let Y=N.getX(W),fe=N.getY(W),k=N.getZ(W);fe=Math.max(fe,0);let j=k*0.5+0.5,ye=0.0225+0.0095*j;N.setXYZ(W,Y*ye*(1-0.18*Math.max(0,fe)),fe*(0.0115+0.013*j),k*0.0635)}L.computeVertexNormals(),y.add(new ne(L,i(657932,{r:0.62,m:0.1}))),e(0.0014,0.0008,0.034,i(0),0,0.0185,-0.028,y);let Q=new ne(new Rt(0.0045,0.0045,0.006,14),i(2763830,{r:0.5,m:0.5}));Q.rotation.z=Math.PI/2,Q.position.set(0,0.0215,-0.026),y.add(Q);let z=new ne(new nr(0.0025,10),n(4063130,0.9));z.rotation.x=-Math.PI/2,z.position.set(0,0.0195,0.01),y.add(z),f("logos/logitech-g.png",0.012,0.012,y,0,0.0245,0.032,-Math.PI/2)}let A=new ut;A.position.set(-0.7,0.775,0.26),A.rotation.y=0.5,o.add(A);let U=i(14252331,{r:0.28,m:0.85}),P=i(789518,{r:0.9});{let L=new ut;L.position.y=0.05,L.rotation.x=Math.PI/2-0.15,A.add(L);let N=new ne(new Br(0.088,0.0085,10,40,Math.PI),i(657932,{r:0.7}));N.position.y=0.02,L.add(N),[-1,1].forEach((Q)=>{let z=new ne(new Rt(0.047,0.044,0.03,36),U);z.rotation.z=Math.PI/2,z.position.set(Q*0.093,-0.06,0),L.add(z);let W=new ne(new Br(0.04,0.005,8,32),i(789518,{m:0.7,r:0.35}));W.rotation.y=Math.PI/2,W.position.set(Q*0.108,-0.06,0),L.add(W);let Y=new ne(new Rt(0.048,0.048,0.022,36),P);Y.rotation.z=Math.PI/2,Y.position.set(Q*0.075,-0.06,0),L.add(Y)})}let O=[],ee="n",I=new ut;I.position.set(0.83,1.025,-0.15),I.rotation.y=0.28,o.add(I);{let z=i(658194,{r:0.4,m:0.55});e(0.22,0.014,0.46,i(658194,{r:0.6,m:0.4}),0,0.243,0,I),e(0.22,0.012,0.46,z,0,-0.244,0,I),e(0.01,0.5,0.46,z,0.105,0,0,I),e(0.22,0.5,0.01,i(460813),0,0,-0.225,I),[-1,1].forEach((De)=>e(0.012,0.5,0.012,z,-0.104,0,De*0.224,I)),e(0.22,0.5,0.012,i(723988,{r:0.5,m:0.4}),0,0,0.224,I);let W=t(256,256,(De,Ne,nt)=>{De.fillStyle="#17104a",De.fillRect(0,0,Ne,nt);let re=De.createRadialGradient(Ne/2,nt/2,10,Ne/2,nt/2,Ne/2);re.addColorStop(0,"#9a7bff"),re.addColorStop(1,"#4a2cff"),De.fillStyle=re,De.fillRect(0,0,Ne,nt),De.strokeStyle="#1a0f5a",De.lineWidth=3;let ce=14;for(let ue=-1;ue<14;ue++)for(let Ce=-1;Ce<14;Ce++){let Ue=Ce*ce*1.75+ue%2*ce*0.87,Ye=ue*ce*1.5;De.beginPath();for(let He=0;He<6;He++){let ot=Math.PI/3*He+Math.PI/6;De.lineTo(Ue+Math.cos(ot)*ce,Ye+Math.sin(ot)*ce)}De.closePath(),De.stroke()}De.fillStyle="#05061a",De.beginPath();for(let ue=0;ue<6;ue++){let Ce=Math.PI/3*ue;De.lineTo(Ne/2+Math.cos(Ce)*34,nt/2+Math.sin(Ce)*34)}De.closePath(),De.fill()});e(0.13,0.46,0.004,i(526618),0.02,0,0.2305,I),[0.155,0,-0.155].forEach((De)=>{let Ne=new ne(new nr(0.064,40),new kt({map:W,toneMapped:!1,color:new xe(1.1,1.1,1.4)}));Ne.position.set(0.02,De,0.23320000000000002),I.add(Ne)});let Y=-0.08,fe=e(0.006,0.44,0.36,i(1053471,{r:0.6,m:0.3}),0.08,0,-0.03,I),k=new ne(new Rt(0.036,0.036,0.03,32),i(658194,{r:0.3,m:0.7}));k.rotation.z=Math.PI/2,k.position.set(Y+0.03,0.09,0.07),I.add(k);let j=new ne(new ea(0.019,0.03,32),n(4877567,1.8));j.rotation.y=-Math.PI/2,j.position.set(Y+0.0125,0.09,0.07),I.add(j);let ye=(De)=>I.add(new ne(new ta(new ws(De.map((Ne)=>new C(...Ne))),16,0.0075,8),i(14672878,{r:0.5})));ye([[Y+0.03,0.12,0.09],[Y+0.03,0.2,0.1],[Y+0.03,0.235,0.05]]),ye([[Y+0.03,0.12,0.05],[Y+0.03,0.2,0],[Y+0.03,0.235,-0.04]]);let ve=new ne(new Fi(0.04,0.05,0.3,2,0.006),i(658192,{r:0.35,m:0.7}));ve.position.set(Y+0.03,-0.06,0.02),I.add(ve),e(0.004,0.004,0.26,n(16054015,0.9),Y+0.008,-0.06,0.02,I),[0,0.016].forEach((De)=>e(0.012,0.11,0.008,n(6966527,1.2),Y+0.03,0.13,-0.09-De,I));let Be=e(0.04,0.03,0.3,i(723986,{r:0.5,m:0.5}),0,0.22,-0.02,I),Ee=new ne(new Dt(0.44,0.48),new Ps({color:659488,transparent:!0,opacity:0.2,roughness:0.04,clearcoat:1,side:Gt,depthWrite:!1}));Ee.rotation.y=-Math.PI/2,Ee.position.set(-0.108,0,0),I.add(Ee),((De,Ne)=>e(0.006,Ne,0.46,z,-0.107,De,0,I))(0.245,0.012)}{let L=new Hn(5913855,3.2,3,1.6);L.position.set(0.85,1.2,-0.6),o.add(L)}let X=new ut;X.position.set(0.05,0,0.9),X.rotation.y=0.22,o.add(X);{let L=i(856356,{r:0.55,m:0.05}),N=i(1716106,{r:0.5,e:662118,ei:0.12}),Q=i(460813,{r:0.4,m:0.7}),z=new ne(new Fi(0.52,0.09,0.5,4,0.04),L);z.position.y=0.5,X.add(z),[-1,1].forEach((k)=>{let j=new ne(new Fi(0.06,0.1,0.46,3,0.025),N);j.position.set(k*0.25,0.54,0),X.add(j)});let W=new ne(new Fi(0.5,0.72,0.09,4,0.04),L);W.position.set(0,0.92,0.26),W.rotation.x=-0.12,X.add(W),[-1,1].forEach((k)=>{let j=new ne(new Fi(0.07,0.5,0.1,3,0.03),N);j.position.set(k*0.235,0.88,0.235),j.rotation.x=-0.12,X.add(j)});let Y=new ne(new Fi(0.26,0.17,0.08,3,0.04),N);Y.position.set(0,1.28,0.3),Y.rotation.x=-0.12,X.add(Y),[-1,1].forEach((k)=>{e(0.04,0.2,0.04,Q,k*0.3,0.68,0.02,X);let j=new ne(new Fi(0.07,0.03,0.26,2,0.012),L);j.position.set(k*0.3,0.79,-0.03),X.add(j)});let fe=new ne(new Rt(0.03,0.035,0.34,12),Q);fe.position.y=0.3,X.add(fe);for(let k=0;k<5;k++){let j=k/5*Math.PI*2,ye=e(0.3,0.03,0.045,Q,0,0.06,0,X);ye.position.set(Math.sin(j)*0.15,0.07,Math.cos(j)*0.15),ye.rotation.y=j-Math.PI/2;let ve=new ne(new wn(0.028,10,8),i(1118744,{r:0.8}));ve.position.set(Math.sin(j)*0.31,0.03,Math.cos(j)*0.31),X.add(ve)}}{let L=new ne(new nr(1.5,64),new dt({map:t(512,512,(N,Q,z)=>{let W=N.createRadialGradient(Q/2,z/2,20,Q/2,z/2,Q/2);W.addColorStop(0,"#1a1f4e"),W.addColorStop(1,"#0c0f2a"),N.fillStyle=W,N.fillRect(0,0,Q,z),N.strokeStyle="#3a5cff",N.globalAlpha=0.6,N.lineWidth=8,N.beginPath(),N.arc(Q/2,z/2,Q/2-14,0,7),N.stroke()}),roughness:1}));L.rotation.x=-Math.PI/2,L.position.set(0.1,0.006,0.75),o.add(L)}})();function J_(){let e=new ut,t=ks,i=ch;{let o=i(723984,{r:0.38,m:0.65}),a=i(328966,{r:0.9}),l=new Us().load("fun-print.jpg");l.colorSpace=Tt,l.anisotropy=8;let c=new ne(new Fi(2.4,0.042,0.6,4,0.014),o);c.position.y=0.6789999999999999,e.add(c);let h=new ne(new Dt(2.364,0.564),new Ps({map:l,roughness:0.5,clearcoat:0.35,clearcoatRoughness:0.35}));h.rotation.x=-Math.PI/2,h.position.y=0.7011999999999999,e.add(h);let f=i(460812);[-0.6,0,0.6].forEach((p)=>t(0.005,0.0012,0.58,f,p,0.7016,0,e)),[-1,1].forEach((p)=>t(2.3,0.03,0.02,o,0,0.6399999999999999,p*0.255,e));let u=1.0999999999999999,m=0.255,g=(p,d,v,M,S,T)=>{let w=new ne(new Rt(p,p,d,16),v);return w.position.set(M,S,T),e.add(w),w};[-1,0,1].forEach((p)=>[-1,1].forEach((d)=>{let v=p*u,M=d*m;g(0.0175,0.38,o,v,0.47,M),g(0.024,0.05,o,v,0.36,M),g(0.0145,0.36,o,v,0.18,M),g(0.019,0.02,a,v,0.01,M)}));let _=(p,d,v)=>{let M=new C(...p),S=new C(...d),T=S.clone().sub(M),w=new ne(new Rt(v,v,T.length(),10),o);w.position.copy(M.clone().add(S).multiplyScalar(0.5)),w.quaternion.setFromUnitVectors(new C(0,1,0),T.normalize()),e.add(w)};[-u,0,u].forEach((p)=>_([p,0.2,-m],[p,0.2,m],0.011)),[-u,u].forEach((p)=>_([p,0.56,-m],[p,0.56,m],0.009))}return e}function K_(e,t,i,n,r){_t(e,0.045,0.034,0.11,new dt({color:r,roughness:0.4,side:Gt}),t,i+0.055,n,16)}function nh(e,t,i,n,r=1,s=13936170){let o=[[0.001,0],[0.07,0],[0.07,0.015],[0.03,0.03],[0.02,0.12],[0.05,0.15],[0.07,0.17],[0.09,0.26],[0.1,0.34],[0.08,0.36],[0.075,0.34],[0.07,0.25],[0.05,0.18],[0.001,0.17]].map((l)=>new Z(l[0],l[1])),a=lh(e,new xl(o,24),new dt({color:s,roughness:0.18,metalness:1}),t,i,n);return a.scale.setScalar(r),a}function $_(e,t,i){ae(e,t,i,0.03,se(921104,0.5),0,i/2+0.2,-0.18);for(let r of[-1,1])ae(e,0.05,i,0.4,se(921104,0.5),r*(t/2-0.025),i/2+0.2,0);ae(e,t,0.06,0.4,se(921104,0.5),0,i+0.2,0),ae(e,t,0.2,0.4,se(921104,0.5),0,0.1,0),ae(e,t-0.12,i-0.2,0.02,new dt({color:12577023,transparent:!0,opacity:0.12,roughness:0.02}),0,i/2+0.2,0.2);let n=4;for(let r=0;r<n;r++){let s=0.45+r*((i-0.5)/n);ae(e,t-0.1,0.02,0.34,se(3816000,0.3,0.4),0,s,0),ae(e,t-0.1,0.01,0.01,Bt(14674687,5),0,s-0.015,0.14);for(let o=0;o<4;o++)if((r+o)%3===0)nh(e,-t/2+0.25+o*(t-0.5)/3,s+0.01,0,0.3+Xe()*0.12,[13936170,12633288][o%2]);else ae(e,0.16,0.12+Xe()*0.05,0.14,se([2838527,16726843,2007130,13206586][o],0.5),-t/2+0.25+o*(t-0.5)/3,s+0.07,0)}}(function(){let e=new ut;e.position.set(-0.6,0,0.4),e.rotation.y=Math.PI/2,pt.add(e);let t=(()=>{let r=It(512,256),s=r.getContext("2d");s.fillStyle="#2e7d3a",s.fillRect(0,0,512,256),s.strokeStyle="rgba(255,255,255,.8)",s.lineWidth=3,s.strokeRect(14,14,484,228),s.beginPath(),s.moveTo(256,14),s.lineTo(256,242),s.stroke(),s.beginPath(),s.arc(256,128,34,0,7),s.stroke();let o=new Vi(r);return o.colorSpace=Tt,o})();ae(e,1.35,0.22,0.78,se(1710620,0.4),0,0.84,0);let i=new ne(new Dt(1.15,0.58),new dt({map:t,roughness:0.6}));i.rotation.x=-Math.PI/2,i.position.y=0.955,e.add(i);for(let[r,s]of[[-0.62,-0.34],[0.62,-0.34],[-0.62,0.34],[0.62,0.34]])ae(e,0.08,0.84,0.08,se(1710620,0.4),r,0.42,s);[-0.5,-0.25,0,0.25,0.5].forEach((r,s)=>{let o=_t(e,0.009,0.009,0.95,se(13421772,0.15,1),r*1,1.02,0);o.rotation.x=Math.PI/2;for(let a=0;a<(s==1?5:3);a++){let l=-0.2+a*(0.4/(s==1?4:2));ae(e,0.03,0.09,0.04,se(s%2?14692400:3107801,0.5),r,1,l)}for(let a of[-0.5,0.5])_t(e,0.03,0.03,0.08,se(273),r,1.02,a).rotation.x=Math.PI/2})})();(function(){let e=new ut;e.position.set(-8.675,0,-2.6),e.rotation.y=Math.PI/2,pt.add(e),ae(e,1,1,0.1,se(1908258,0.6),0,1.73,0),ae(e,0.08,1,0.25,se(1908258,0.6),-0.5,1.73,0.09),ae(e,0.08,1,0.25,se(1908258,0.6),0.5,1.73,0.09);let t=It(512,512),i=t.getContext("2d");i.translate(256,256);let n=["#e8e1c0","#111"];for(let a=0;a<20;a++)for(let[l,c,h,f]of[[240,215,"#d12","#093"],[215,150,"#e8e1c0","#111"],[150,135,"#d12","#093"],[135,40,"#e8e1c0","#111"]])i.beginPath(),i.moveTo(0,0),i.arc(0,0,l,(a-5.5)*Math.PI/10,(a-4.5)*Math.PI/10),i.closePath(),i.fillStyle=a%2?h:f,i.fill(),i.beginPath(),i.moveTo(0,0),i.arc(0,0,c,(a-5.5)*Math.PI/10,(a-4.5)*Math.PI/10),i.closePath(),i.fillStyle=a%2?c==215||c==135?"#e8e1c0":n[1]:n[0];i.setTransform(1,0,0,1,0,0),i.fillStyle="#111",i.fillRect(0,0,512,512),i.translate(256,256);let r=[20,1,18,4,13,6,10,15,2,17,3,19,7,16,8,11,14,9,12,5];for(let a=0;a<20;a++){let l=(a-0.5)*Math.PI/10-Math.PI/2,c=l+Math.PI/10,h=a%2===0,f=[[250,220,h?"#c8202a":"#0b8a3e"],[220,150,h?"#111":"#e8e1c0"],[150,125,h?"#c8202a":"#0b8a3e"],[125,40,h?"#111":"#e8e1c0"]];for(let[u,m,g]of f)i.beginPath(),i.arc(0,0,u,l,c),i.arc(0,0,m,c,l,!0),i.closePath(),i.fillStyle=g,i.fill()}i.beginPath(),i.arc(0,0,40,0,7),i.fillStyle="#0b8a3e",i.fill(),i.beginPath(),i.arc(0,0,16,0,7),i.fillStyle="#c8202a",i.fill();let s=new Vi(t);s.colorSpace=Tt;let o=new ne(new nr(0.225,48),new dt({map:s,roughness:0.8}));o.position.set(0,1.73,0.06),e.add(o),Mn(e,"DARTS",0.8,0.28,"#ff3b3b",0,2.45,0.05,0,"bold 180px Arial Black"),ae(e,0.6,0.45,0.04,se(1448984,0.8),0.95,1.6,0.05),ae(e,0.01,0.01,0.01,se(0)),ae(e,0.9,0.012,0.04,se(15658734,0.5),0,0.007,2.37),ae(e,0.9,0.012,0.01,Bt(16726843,3),0,0.012,2.35),Ti(e,0,2.5,0.5,16771522,4,5)})();var Bl=(e,t=0.95)=>Xi("fabric",0.5,t,0,1,1,{color:e}),ui=(e,t,i,n,r,s,o,a,l=0.07,c=0,h=0)=>{let f=new ne(new Fi(t,i,n,4,l),r);return f.position.set(s,o,a),f.rotation.x=c,f.rotation.z=h,f.castShadow=f.receiveShadow=!0,e.add(f),f},Hl;function Q_(){let e=new ut;e.position.set(0.2,0,-4.3),e.rotation.y=Math.PI,pt.add(e);let t=Bl(4869462),i=Bl(6843512),n=Bl(7567493),s=new Gi([[-2.7,0],[2.7,0],[2.7,2.6],[1.7,2.6],[1.7,1],[-1.7,1],[-1.7,2.6],[-2.7,2.6]].map((d)=>new Z(d[0],-d[1]))),o=new Cs(s,{depth:0.24,bevelEnabled:!0,bevelThickness:0.05,bevelSize:0.05,bevelSegments:4,curveSegments:4});o.rotateX(-Math.PI/2);let a=new ne(o,t);a.position.y=0.1,a.castShadow=a.receiveShadow=!0,e.add(a);for(let[d,v]of[[-2.6,0.1],[2.6,0.1],[-2.6,2.5],[2.6,2.5],[-1.8,0.9],[1.8,0.9]])_t(e,0.03,0.03,0.08,se(723725,0.4,0.6),d,0.04,v,10);let l=Bt(6966527,0.9);ae(e,5.2,0.012,0.02,l,0,0.075,0.03),ui(e,5.4,0.58,0.28,t,0,0.67,0.14,0.09);for(let d of[-1,1])ui(e,0.28,0.58,2.32,t,d*2.56,0.67,1.44,0.09);for(let d=0;d<3;d++)ui(e,1.1,0.17,0.7,i,-1.13+d*1.13,0.5,0.65,0.07);for(let d of[-1,1])ui(e,0.72,0.17,0.7,n,d*2.06,0.5,0.65,0.07),ui(e,0.72,0.17,0.78,i,d*2.06,0.5,1.4,0.07),ui(e,0.72,0.17,0.78,i,d*2.06,0.5,2.2,0.07),ui(e,0.22,0.46,0.9,i,d*2.27,0.9,1.2,0.09,0,-d*0.16),ui(e,0.22,0.46,0.9,i,d*2.27,0.9,2.1,0.09,0,-d*0.16);for(let d=0;d<5;d++)ui(e,0.95,0.5,0.2,i,-1.9+d*0.95,0.88,0.37,0.09,-0.2);let c=[13208108,2781048,15130834,8007498,2781048,13208108];[[-2.1,0.75,0.98,0.45,-0.5],[-1.3,0.72,0.55,0.4,0.3],[2.15,0.75,0.97,0.45,0.5],[1.3,0.72,0.55,0.4,-0.3],[-2.2,0.72,2.35,0.4,1.4],[2.2,0.72,2.35,0.4,-1.4]].forEach(([d,v,M,S,T],w)=>{let x=ui(e,S,S,0.13,Bl(c[w],1),d,v,M,0.05,-0.3);x.rotation.y=T});let h=Xi("slats",1,0.45,0,1.6,0.9,{color:4862754});ui(e,1.5,0.1,0.85,h,0,0.44,1.75,0.03),ui(e,1.2,0.3,0.6,se(1182986,0.6),0,0.24,1.75,0.02),ui(e,1.4,0.04,0.8,se(1708557,0.7),0,0.1,1.75,0.01),ae(e,0.32,0.05,0.22,se(2775690,0.6),-0.35,0.51,1.7),ae(e,0.3,0.04,0.2,se(12599338,0.6),-0.35,0.555,1.7),_t(e,0.12,0.09,0.08,se(2369067,0.4,0.3),0.35,0.53,1.8,24);let f=It(1024,700),u=f.getContext("2d"),m=u.createLinearGradient(0,0,1024,700);m.addColorStop(0,"#16182a"),m.addColorStop(1,"#2a1740"),u.fillStyle=m,u.fillRect(0,0,1024,700),u.strokeStyle="#7a5cff",u.lineWidth=8,u.setLineDash([26,16]),u.strokeRect(40,40,944,620),u.setLineDash([]),u.fillStyle="#9aa0c8",u.textAlign="center",u.textBaseline="middle",u.font="bold 74px Arial",u.fillText("GAME RUG",512,300),u.font="38px Arial",u.fillText('placeholder – window.setRugTexture("moje.jpg")',512,380);let g=new Vi(f);g.colorSpace=Tt,g.anisotropy=8,Hl=new dt({map:g,roughness:1});let _=new ne(new Dt(3.8,2.6),Hl);_.rotation.set(-Math.PI/2,0,Math.PI),_.position.set(0,0.014,1.75),_.receiveShadow=!0,e.add(_);let p=new ne(new Dt(3.86,2.66),se(921362,1));p.rotation.x=-Math.PI/2,p.position.set(0,0.011,1.75),e.add(p)}Q_();window.setRugTexture=(e)=>new Us().load(e,(t)=>{t.colorSpace=Tt,t.anisotropy=8,Hl.map=t,Hl.needsUpdate=!0});(function(){let t=new ut;t.position.set(0.2,0,-9.2),pt.add(t),ae(t,2.5,1.45,0.05,se(328966,0.3,0.5),0,1.65,0);let i=It(640,360),n=i.getContext("2d"),r=n.createLinearGradient(0,0,640,360);r.addColorStop(0,"#0b2a4a"),r.addColorStop(0.5,"#4a1f8f"),r.addColorStop(1,"#e8602e"),n.fillStyle=r,n.fillRect(0,0,640,360),n.fillStyle="rgba(255,255,255,.9)",n.font="bold 54px Arial",n.textAlign="center",n.fillText("MAN CAVE",320,190);let s=new Vi(i);s.colorSpace=Tt;let o=new ne(new Dt(2.42,1.36),new kt({map:s,toneMapped:!1}));o.position.set(0,1.65,0.03),t.add(o),ae(t,2.8,0.5,0.42,se(1381914,0.55),0,0.3,0.17),ae(t,2.8,0.03,0.44,se(4862754,0.45),0,0.565,0.17),ae(t,1.2,0.07,0.1,se(723725,0.4,0.5),0,0.62,0.17);for(let a of[-1.75,1.75])ae(t,0.3,1.5,0.22,se(1052948,0.5),a,0.78,0.12),ae(t,0.22,0.22,0.02,se(657932,0.3,0.6),a,1.2,0.24),_t(t,0.09,0.09,0.02,se(1908258,0.5),a,0.6,0.235,24).rotation.x=Math.PI/2;ae(t,2.6,0.03,0.03,Bt(16734920,3),0,0.9,0.01).visible=!1,ae(t,2.6,0.02,0.02,Bt(6966527,3.5),0,0.88,-0),ae(t,2.7,0.012,0.01,Bt(16734920,3),0,0.5,0.39),Mn(t,"MAN CAVE",1.9,0.34,"#ff4fa6",0,2.75,0.03,0,"bold 130px Arial Black",void 0,!1)})();function j_(){let e=Xm,t=ch(790562,{r:0.4,m:0.4});for(let l of[-1,1]){let c=l*1.775;ks(1.65,0.05,0.85,t,c,0.75,0,e),ks(0.05,0.75,0.05,t,l*2.575,0.375,-0.38,e),ks(0.05,0.75,0.05,t,l*2.575,0.375,0.38,e),ks(1.65,0.015,0.02,Zm(3824895,1.4),c,0.72,0.43,e)}let i=new ne(new Dt(5.3,0.9),new kt({color:2768127,transparent:!0,opacity:0.16,toneMapped:!1}));i.rotation.x=-Math.PI/2,i.position.set(0,0.012,0.05),e.add(i);let n=(l,c)=>{_t(e,0.012,0.012,0.22,se(855570,0.4,0.8),l,0.86,-0.28,12),ae(e,0.2,0.01,0.16,se(855570,0.4,0.8),l,0.78,-0.2)},r=(l,c,h)=>{let f=It(1024,Math.round(1024*h/c));l(f.getContext("2d"),f.width,f.height);let u=new Vi(f);return u.colorSpace=Tt,u.anisotropy=8,u},s=r((l,c,h)=>{let f=l.createLinearGradient(0,0,c,0);f.addColorStop(0,"#05103a"),f.addColorStop(0.5,"#4a1f8f"),f.addColorStop(1,"#ff4f6a"),l.fillStyle=f,l.fillRect(0,0,c,h),l.fillStyle="rgba(255,255,255,.12)";for(let u=0;u<40;u++)l.fillRect(Xe()*c,Xe()*h*0.7,40+Xe()*120,3);l.fillStyle="#fff",l.font="bold 70px Arial",l.fillText('ULTRAWIDE 49"',60,h-70),l.strokeStyle="#38e8ff",l.lineWidth=4,l.beginPath(),l.arc(c/2,h/2,40,0,7),l.stroke()},1.2,0.34),o=r((l,c,h)=>{l.fillStyle="#0b0d1c",l.fillRect(0,0,c,h),l.fillStyle="#38e8ff";for(let f=0;f<14;f++)l.fillRect(40,60+f*110,200+Xe()*600,18);l.fillStyle="#ff4f8a",l.font="bold 56px Arial",l.fillText("STATS",40,46)},0.34,0.6);{let f=new Rt(1.1,1.1,0.34,48,1,!0,Math.PI-0.5454545454545454,1.0909090909090908),u=new ne(f,new kt({map:s,toneMapped:!1,side:Lt}));u.scale.x=-1,u.position.set(-1.78,1.12,0.8500000000000001),e.add(u);let m=new ne(new Rt(1.12,1.12,0.37,48,1,!0,Math.PI-0.5454545454545454,1.0909090909090908),se(526605,0.4,0.5));m.material.side=Gt,m.scale.x=-1,m.position.copy(u.position),e.add(m),n(-1.78,0),ae(e,1.24,0.012,0.03,Bt(6966527,3),-1.78,0.94,-0.3)}for(let[l,c]of[[1.45,0.35],[2.1,0.7]]){let h=new ut;h.position.set(l,0.775,-0.18),h.rotation.y=c,e.add(h),ui(h,0.36,0.62,0.025,se(460811,0.4,0.5),0,0.5,0,0.006);let f=new ne(new Dt(0.34,0.6),new kt({map:o,toneMapped:!1}));f.position.set(0,0.5,0.0135),h.add(f),_t(h,0.012,0.012,0.25,se(855570,0.4,0.8),0,0.1,-0.03,12),ae(h,0.18,0.01,0.14,se(855570,0.4,0.8),0,0.004,-0.02),ae(h,0.36,0.012,0.02,Bt(16732042,3),0,0.19,-0.02)}let a=(l,c)=>{let h=new ne(new Dt(0.9,1.6),new kt({color:new xe(c).multiplyScalar(1.3),transparent:!0,opacity:0.85,toneMapped:!1}));h.position.set(8.665,1.9,l),h.rotation.y=-Math.PI/2,pt.add(h)};[[-2.1,6966527],[-1.05,3717375],[0,16732070],[1.05,3717375],[2.1,6966527]].forEach(([l,c])=>a(l,c)),ae(pt,0.03,0.03,5.4,Bt(6966527,3.5),8.66,1.2,0),ae(pt,0.03,0.03,5.4,Bt(16732070,3.5),8.66,2.7,0),Mn(pt,"FONGER",2.4,0.5,"#ff4fa6",8.64,2.95,0,-Math.PI/2,"bold 150px Arial Black",void 0,!1)}j_();var ih=[];function ey(e){if(!ih[e]){let i=[],n=(h,f,u,m,g,_=1,p=1,d=1,v=0,M=0)=>{h.scale(_,p,d),h.rotateX(v),h.rotateZ(M),h.translate(u,m,g);let S=h.attributes.position.count,T=new Float32Array(S*3),w=new xe(f);for(let x=0;x<S;x++)T[x*3]=w.r,T[x*3+1]=w.g,T[x*3+2]=w.b;h.setAttribute("color",new Xt(T,3)),i.push(h)},r=15780000,s=(h,f,u)=>new Ft(h,f,u),o=(h)=>new wn(h,12,10),a=(h,f)=>new Ts(h,f,8),l=(h,f)=>new Rt(h,h,f,12);if(n(l(0.05,0.012),1381658,0,0.006,0),e===0){n(s(0.024,0.07,0.03),1849994,-0.016,0.047,0),n(s(0.024,0.07,0.03),1849994,0.016,0.047,0),n(s(0.07,0.075,0.04),15763996,0,0.12,0),n(s(0.02,0.07,0.02),15763996,-0.045,0.12,0),n(s(0.02,0.07,0.02),15763996,0.045,0.12,0),n(o(0.036),15780000,0,0.19,0),n(s(0.07,0.014,0.04),2767466,0,0.2,0.005);for(let h=0;h<7;h++){let f=h/7*Math.PI*2;n(a(0.014,0.05),16765498,Math.sin(f)*0.026,0.225,Math.cos(f)*0.022,1,1,1,Math.cos(f)*0.5,-Math.sin(f)*0.5)}}else if(e===1)n(s(0.07,0.08,0.04),2772688,0,0.1,0),n(s(0.024,0.06,0.03),1382778,-0.016,0.04,0),n(s(0.024,0.06,0.03),1382778,0.016,0.04,0),n(s(0.09,0.12,0.008),13638698,0,0.1,-0.026,1,1,1,0.1),n(o(0.034),15780000,0,0.17,0),n(o(0.036),1315866,0,0.18,-0.006,1,0.8,1),n(s(0.03,0.03,0.01),16765498,0,0.11,0.022);else if(e===2)n(a(0.05,0.14),6959024,0,0.08,0),n(o(0.032),15780000,0,0.17,0),n(a(0.044,0.1),2757744,0,0.245,0,1,1,1,-0.15),n(l(0.056,0.008),2757744,0,0.2,0),n(l(0.004,0.24),5913120,0.06,0.12,0.02),n(o(0.014),3729663,0.06,0.25,0.02);else if(e===3)n(s(0.07,0.08,0.05),12106952,0,0.1,0),n(s(0.03,0.06,0.035),5922412,-0.02,0.04,0),n(s(0.03,0.06,0.035),5922412,0.02,0.04,0),n(s(0.05,0.045,0.045),15132910,0,0.17,0),n(s(0.036,0.01,0.01),3729663,0,0.175,0.024),n(s(0.025,0.07,0.025),13638698,-0.05,0.11,0),n(s(0.025,0.07,0.025),13638698,0.05,0.11,0),n(a(0.008,0.04),16765498,0,0.215,0);else if(e===4){n(s(0.07,0.085,0.04),1381916,0,0.1,0),n(s(0.024,0.06,0.03),735778,-0.016,0.04,0),n(s(0.024,0.06,0.03),735778,0.016,0.04,0),n(o(0.034),15780000,0,0.17,0);for(let h=0;h<6;h++){let f=h/6*Math.PI*2;n(a(0.012,0.04),3072096,Math.sin(f)*0.022,0.2,Math.cos(f)*0.02,1,1,1,Math.cos(f)*0.6,-Math.sin(f)*0.6)}n(s(0.008,0.2,0.012),14673648,0.06,0.13,0.02,1,1,1,0,-0.25)}else if(e===5)n(s(0.04,0.05,0.03),15755944,0,0.04,0),n(o(0.055),15780000,0,0.12,0),n(o(0.058),15755944,0,0.135,-0.008,1,0.85,1),n(o(0.01),1118481,-0.02,0.12,0.05),n(o(0.01),1118481,0.02,0.12,0.05);else n(s(0.09,0.12,0.06),1908520,0,0.07,0),n(s(0.07,0.07,0.005),16765498,0,0.08,0.031),n(o(0.025),13638698,0,0.08,0.034,1,1,0.3),n(s(0.09,0.015,0.062),3729663,0,0.14,0);let c=Hm(i,!1);i.forEach((h)=>h.dispose()),ih[e]=new ne(c,new dt({vertexColors:!0,roughness:0.5,metalness:0.05}))}let t=ih[e].clone();return t.castShadow=!0,t}function Jm(e,t){let i=new ut;i.position.set(e,0,t),i.rotation.y=-Math.PI/2,pt.add(i);let n=3,r=6,s=0.36,o=0.028,a=0.39,l=n*s+o,c=r*s+o,h=se(2367260,0.55,0.05),f=se(1052173,0.8);for(let u=0;u<=n;u++)ae(i,o,c,a,h,-l/2+o/2+u*s,c/2,0);for(let u=0;u<=r;u++)ae(i,l,o,a,h,0,o/2+u*s,0);ae(i,l,c,0.01,f,0,c/2,-a/2+0.01);for(let u=1;u<=r;u++)ae(i,l-2*o,0.006,0.014,Bt(16767400,2.2),0,u*s-0.004,a/2-0.05);for(let u=0;u<r;u++)for(let m=0;m<n;m++){let g=-l/2+o/2+(m+0.5)*s,_=o+u*s+(u===0?0:0),p=Xe()<0.55?2:1;for(let d=0;d<p;d++){let v=ey(Math.floor(Xe()*7));v.position.set(g+(p===2?d?0.08:-0.08:0),_,0.03+(Xe()-0.5)*0.06),v.rotation.y=(Xe()-0.5)*0.8,v.scale.setScalar(0.95+Xe()*0.25),i.add(v)}if(Xe()<0.25)ae(i,0.1,0.02,0.07,se([2838527,16726843,2007130][Math.floor(Xe()*3)],0.6),g,_+0.2+0,-0.12).visible=!1}}Jm(8.475,3.17);Jm(8.475,-3.17);function ty(){let t=0.092*Math.sqrt(3)/2;for(let i of[-6.95,-5.75]){let n=new ut;n.position.set(i,0,0),n.rotation.y=Math.PI/2,pt.add(n),n.add(J_());for(let r of[-1,1]){let s=r<0?14692399:3107801;for(let o=0;o<4;o++){let a=4-o;for(let l=0;l<a;l++)K_(n,r*(1.08-o*t),0.702,(l-(a-1)/2)*0.092,s)}}for(let r of[-0.3,0.3])_t(n,0.017,0.017,0.002,se(16777215,0.3),0,0.703,r,12).visible=!1}Ti(pt,-6.35,2.6,0,16773336,4,5),ae(pt,2.2,0.012,0.012,Bt(16763210,2.5),-6.35,wi-0.35,0).visible=!0}ty();(function(){let e=new ut;e.position.set(-6.4,0,3.725),e.rotation.y=Math.PI,pt.add(e),ae(e,3.3,2.5,0.06,se(1381143,0.8),0,1.5,0.03);for(let t=0;t<12;t++)ae(e,0.02,2.4,0.03,se(2761760,0.5),-1.6+t*0.29,1.5,0.075);for(let t=0;t<3;t++)for(let i=0;i<8;i++){let n=-1.4+i*0.4,r=2.2-t*0.38,s=[13936170,12633288,11692597][(i+t)%3];ae(e,0.05,0.22,0.01,se([2838527,16726843,2007130][(i*2+t)%3],0.6),n,r+0.15,0.09),_t(e,0.07,0.07,0.015,new dt({color:s,roughness:0.22,metalness:1}),n,r,0.1).rotation.x=Math.PI/2}ae(e,3.2,0.03,0.18,se(3812642,0.4),0,1.05,0.14);for(let t=0;t<6;t++)nh(e,-1.3+t*0.5,1.065,0.14,0.38+t%2*0.08,[13936170,12633288,11692597][t%3]);Mn(e,"HALL OF FAME",2.6,0.38,"#ffc94a",0,2.78,0.08,0,"bold 125px Arial Black",void 0,!1);for(let t of[-8.35,-4.45]){let i=new ut;i.position.set(t,0,3.35),pt.add(i),ae(i,0.5,1,0.5,se(1052690,0.4),0,0.5,0),ae(i,0.5,0.01,0.5,Bt(11462399,3),0,1,0),nh(i,0,1.01,0,1),ae(i,0.5,0.7,0.5,new dt({color:12577023,transparent:!0,opacity:0.13,roughness:0.02,metalness:0}),0,1.36,0)}for(let[t,i,n]of[[-7.7,-3.55,0],[-6.15,-3.55,0],[-3.59,-6.6,Math.PI/2],[4,-6.6,-Math.PI/2]]){let r=new ut;r.position.set(t,0,i),r.rotation.y=n,pt.add(r),$_(r,1.3,2.1)}})();function iy(){let e=new ut;e.position.set(4.9,0,3.725),e.rotation.y=Math.PI,pt.add(e);let t=se(1447707,0.85,0.1),i=Xi("slats",1,0.6,0,3.6,1,{color:11569754}),n=Xi("slats",1,0.35,0,4.2,0.9,{color:5978660}),r=se(13225170,0.22,1);ui(e,3.4,1,0.6,t,-0.3,0.5,1.65,0.02);let s=new ne(new Ft(3.3,0.9,0.04),i);s.position.set(-0.3,0.5,1.97),e.add(s),ui(e,3.8,0.06,0.95,n,-0.3,1.06,1.83,0.02),ae(e,3.3,0.014,0.014,Bt(16732120,4),-0.3,1.02,2.28),ae(e,3.3,0.02,0.02,Bt(3725567,4),-0.3,0.06,2),ae(e,3.4,0.08,0.03,se(723725,0.5),-0.3,0.04,1.96);let o=_t(e,0.022,0.022,3.2,r,-0.3,0.22,2.3,12);o.rotation.z=Math.PI/2;for(let A of[-1.7,1.1])_t(e,0.018,0.018,0.2,r,A,0.12,2.3,10);ui(e,3.6,0.9,0.5,t,0,0.45,0.27,0.02);let a=new ne(new Ft(3.5,0.8,0.03),i);a.position.set(0,0.45,0.535),e.add(a),ae(e,3.7,0.05,0.56,n,0,0.925,0.28),ae(e,3.5,0.012,0.012,Bt(6966527,4),0,0.03,0.55);let l=(()=>{let A=It(512,256),U=A.getContext("2d"),P=U.createLinearGradient(0,0,512,0);P.addColorStop(0,"#ff3ea0"),P.addColorStop(0.5,"#7a4cff"),P.addColorStop(1,"#2ab8ff"),U.fillStyle=P,U.fillRect(0,0,512,256);let O=new Vi(A);return O.colorSpace=Tt,O})();ae(e,3.6,1.7,0.05,se(723725,0.6),0,1.85,0.03);let c=new ne(new Dt(3.4,1.55),new kt({map:l,toneMapped:!1,color:13421772}));c.position.set(0,1.85,0.06),e.add(c);for(let A of[-1,1])ae(e,0.04,1.7,0.34,se(723725,0.5),A*1.8,1.85,0.2);ae(e,3.64,0.04,0.34,se(723725,0.5),0,2.72,0.2);let h=new Rt(0.036,0.036,0.2,10),f=new Rt(0.012,0.02,0.1,10),u=new Rt(0.036,0.026,0.1,12,1,!0),m=48,g=new yn(h,new dt({roughness:0.15,metalness:0.1,transparent:!0,opacity:0.88}),m),_=new yn(f,g.material,m),p=new yn(u,new dt({color:14674687,roughness:0.05,transparent:!0,opacity:0.45,side:Gt}),20),d=new Je,v=[2787898,8010258,13213738,3824335,12066847,1710618,14673642,9054858],M=0,S=0;for(let A=0;A<3;A++){let U=1.4+A*0.5;ae(e,3.4,0.025,0.3,se(855312,0.3,0.3),0,U,0.2),ae(e,3.4,0.008,0.01,Bt(16777215,4),0,U-0.02,0.34);for(let P=0;P<16&&M<m;P++){let O=-1.55+P*0.206;if(A===0&&P>9){d.makeTranslation(O,U+0.05,0.2),p.setMatrixAt(S++,d);continue}d.makeTranslation(O,U+0.113,0.2),g.setMatrixAt(M,d),g.setColorAt(M,new xe(v[(P+A*3)%v.length])),d.makeTranslation(O,U+0.263,0.2),_.setMatrixAt(M,d),_.setColorAt(M,new xe(v[(P+A*3)%v.length])),M++}}g.count=M,_.count=M,p.count=S,e.add(g,_,p);let T=new ut;T.position.set(1.2,0.95,0.3),e.add(T),_t(T,0.05,0.05,0.3,r,0,0.15,0,20);let w=_t(T,0.014,0.014,0.16,r,0,0.3,0.07,10);w.rotation.x=Math.PI/2;for(let[A,U]of[[-0.025,16763210],[0.025,16726843]])_t(T,0.007,0.007,0.1,se(U,0.4,0.4),A,0.38,0,8),_t(T,0.01,0.01,0.025,r,A,0.26,0.14,8);ae(T,0.3,0.02,0.2,r,0,0,0.18),ae(T,0.26,0.004,0.16,se(1381914,0.4),0,0.012,0.18),Mn(e,"BAR",0.9,0.3,"#38d8ff",-0.3,2.95,0.05,0,"bold 170px Arial Black",void 0,!1);let x=se(1908001,0.55,0.1),y=se(13619928,0.2,1);for(let A of[-1.6,-0.75,0.1,0.95]){let U=new ut;U.position.set(A,0,2.85),U.rotation.y=Math.PI+(Xe()-0.5)*0.3,e.add(U),_t(U,0.22,0.2,0.08,x,0,0.74,0,28),_t(U,0.21,0.21,0.025,se(723725,0.5),0,0.69,0,24),_t(U,0.025,0.025,0.66,y,0,0.35,0,10),_t(U,0.2,0.22,0.03,y,0,0.015,0,24);let P=new ne(new Br(0.17,0.012,8,24),y);P.rotation.x=Math.PI/2,P.position.set(0,0.3,0),U.add(P),ui(U,0.34,0.22,0.06,x,0,1,-0.2,0.03,-0.12);for(let O of[-1,1]){_t(U,0.01,0.01,0.26,y,O*0.16,0.86,-0.18,8);let ee=ui(U,0.04,0.03,0.26,x,O*0.18,0.99,-0.06,0.012)}}}iy();var je={cx:-10.8,cz:-11.5,R:7,H:6},Ei=new ut;Vr.add(Ei);var Cn=[...Array(6)].map((e,t)=>{let i=t*Math.PI/3;return[je.cx+je.R*Math.cos(i),je.cz+je.R*Math.sin(i)]}),fi=(e,t,i)=>new C(e,t,i),Km=(e=16777215)=>{let t=Wl(Wt.plywood,1,1);return new dt({map:t,bumpMap:t,bumpScale:0.6,roughness:0.72,metalness:0,side:Gt,color:e})},kl=Km(15917768),km=Km(14731684);function Gl(e,t,i){let n=[],r=[];for(let a of e){let[l,c,h,f]=a.p,u=l.distanceTo(c)/1.22,m=l.distanceTo(h)/2.44,g=h.distanceTo(f)/1.22,_=a.ou||0,p=a.ov||0,d=Math.max(u,g);n.push(l.x,l.y,l.z,c.x,c.y,c.z,f.x,f.y,f.z,l.x,l.y,l.z,f.x,f.y,f.z,h.x,h.y,h.z),r.push(_,p,_+u,p,_+g,p+m,_,p,_+g,p+m,_,p+m)}let s=new Ve;s.setAttribute("position",new Ae(n,3)),s.setAttribute("uv",new Ae(r,2)),s.computeVertexNormals();let o=new ne(s,t);return o.receiveShadow=!0,i.add(o),o}var Wn=Math.tan(Math.PI/6);function Ol(e,t,i){let n=Cn[e],r=Cn[(e+1)%6],s=Math.hypot(r[0]-n[0],r[1]-n[1]),o={x:(r[0]-n[0])/s,z:(r[1]-n[1])/s},a={x:-o.z,z:o.x},l=(n[0]+r[0])/2,c=(n[1]+r[1])/2;if(a.x*(je.cx-l)+a.z*(je.cz-c)<0)a={x:-a.x,z:-a.z};let[h,f]=i||[0,s],u=(p,d,v)=>fi(n[0]+o.x*d+a.x*p,v,n[1]+o.z*d+a.z*p),m=[],g=[],_=[];for(let p=0;p<t.length-1;p++){let[d,v]=t[p],[M,S]=t[p+1],T={p:[u(d,h+d*Wn,v),u(d,f-d*Wn,v),u(M,h+M*Wn,S),u(M,f-M*Wn,S)],ou:(h+d*Wn)/1.22,ov:t.slice(0,p).reduce((w,x,y)=>w+Math.hypot(t[y+1][0]-x[0],t[y+1][1]-x[1]),0)/2.44};if(m.push(T),!i)g.push({p:[fi(n[0],v,n[1]),u(d,d*Wn,v),fi(n[0],S,n[1]),u(M,M*Wn,S)]}),_.push({p:[fi(r[0],v,r[1]),u(d,s-d*Wn,v),fi(r[0],S,r[1]),u(M,s-M*Wn,S)]})}return{quads:m,caps:[...g,..._],P:u,L:s,n:a,t:o,A:n,prof:t}}var ny=[[[1,0],[0,3.6],[0,6]],null,[[0,0],[0,1.2],[1.6,3.4],[1.6,4.6],[0.9,6]],[[0,0],[0,1],[0.9,2.4],[0.9,3.4],[2,5],[0.4,6]],[[0,0],[0,0.8],[2,3.6],[2,6]],[[0,0],[0,3],[0.8,4.2],[0.8,6]]],zl=[15213098,2845695,16765482,2273370,16742940,10632432,16736176,15921906,1381658,2806996],$m=[[],[],[],[],[],[],[]],Hs=new lt;function pa(e,t,i){let[n,r,s,o]=e.p,a=n.clone().lerp(r,t),l=s.clone().lerp(o,t);return a.lerp(l,i)}function ma(e,t){let[i,n,r]=e.p,s=n.clone().sub(i).cross(r.clone().sub(i)).normalize();if(s.dot(t)<0)s.negate();return s}function Vl(e,t,i,n,r){Hs.position.copy(t).addScaledVector(i,0.004),Hs.lookAt(t.clone().add(i)),Hs.rotateZ(r),Hs.scale.setScalar(1),Hs.updateMatrix(),$m[e].push({m:Hs.matrix.clone(),c:new xe(n)})}function rh(e,t,i,n,r=0.55){let s=e.p[0].distanceTo(e.p[2]);if(s<0.5)return;let o=Math.max(2,Math.round(s/r)),a=ma(e,n);for(let l=0;l<t;l++)for(let c=0;c<o;c++){let h=Math.sin((c+l*1.7)*1.1)*0.5/t,f=(l+0.5)/t+h*0.55,u=(c+0.45)/o,m=pa(e,f,u),g=(c*3+l*5)%7,_=c<1?5:g===6?4:g===5?5:g%5;if(Vl(_===5&&c>0?1:_,m,a,zl[(i+l)%zl.length],(Xe()-0.5)*1.6),(c+l)%3===0){let p=pa(e,Math.min(0.97,Math.max(0.03,f+0.07)),Math.min(0.98,u+0.5/o));Vl(5,p,a,zl[(i+l)%zl.length],Xe()*3)}}}function ry(){let e=[()=>{let i=new wn(0.07,12,9);return i.scale(1,0.8,0.65),i.translate(0,0,0.035),i},()=>{let i=new Fi(0.11,0.03,0.05,2,0.012);return i.translate(0,0,0.025),i},()=>{let i=new wn(0.1,14,10);return i.scale(1,1,0.38),i},()=>{let i=new fl(0.028,0.09,4,8);return i.rotateZ(Math.PI/2),i.translate(0,0,0.04),i},()=>{let i=new Br(0.05,0.022,8,14);return i.translate(0,0,0.02),i},()=>{let i=new Ts(0.032,0.04,6);return i.rotateX(Math.PI/2),i.translate(0,0,0.02),i},()=>{let i=new dl(0.2);return i.scale(1,1,0.5),i}],t=new dt({color:16777215,roughness:0.5,metalness:0});e.forEach((i,n)=>{let r=$m[n];if(!r.length)return;let s=new yn(i(),t,r.length);r.forEach((o,a)=>{s.setMatrixAt(a,o.m),s.setColorAt(a,o.c)}),s.castShadow=!0,Ei.add(s)})}(function(){let t=(i,n)=>fi(je.cx-n.p[0].x,0,je.cz-n.p[0].z);for(let i=0;i<6;i++){if(i===1){let r=Ol(1,[[0,0],[0,6]],[0,2.5]),s=Ol(1,[[0,0],[0,6]],[4.1,7]),o=Ol(1,[[0,2.3],[0,6]],[2.5,4.1]);for(let h of[r,s,o])Gl(h.quads,kl,Ei),h.quads.forEach((f)=>rh(f,h===o?2:2,0,t(h,f),0.6));let a=Cn[1],l=-1,c=(h)=>a[0]+l*h;for(let h of[2.5,4.1])ae(Ei,0.1,2.3,0.3,se(1381914,0.5),c(h),1.15,a[1]+0.02);ae(Ei,1.7,0.1,0.3,se(1381914,0.5),c(3.3),2.3,a[1]+0.02);continue}let n=Ol(i,ny[i]);Gl(n.quads,i%2?km:kl,Ei),Gl(n.caps,km,Ei),n.quads.forEach((r)=>rh(r,4,i*2,ma(r,fi(je.cx-r.p[0].x,0,je.cz-r.p[0].z)).add(fi(0,0,0)),0.55))}for(let i=0;i<6;i++){let n=Cn[i],r=Cn[(i+1)%6],s=Math.hypot(r[0]-n[0],r[1]-n[1]),o=new ne(new Ft(s+0.3,je.H,0.2),se(1513500,0.9)),a=(n[0]+r[0])/2,l=(n[1]+r[1])/2,c=fi(a-je.cx,0,l-je.cz).normalize();if(o.position.set(a+c.x*0.12,je.H/2,l+c.z*0.12),o.rotation.y=-Math.atan2(r[1]-n[1],r[0]-n[0]),i!==1)Ei.add(o)}})();(function(){let i=[{y:0,r:1.75},{y:2.1,r:2.45},{y:4.7,r:1.45}],n=[];i.forEach((h,f)=>{let u=[];for(let m=0;m<7;m++){let g=m/7*Math.PI*2+f*0.12,_=0.9+(m*37+f*11)%10/50;u.push(fi(je.cx+Math.sin(g)*h.r*_,h.y,je.cz+Math.cos(g)*h.r*_))}n.push(u)});let r=[];for(let h=0;h<2;h++)for(let f=0;f<7;f++){let u=(f+1)%7;r.push({p:[n[h][f],n[h][u],n[h+1][f],n[h+1][u]],ou:f*0.37,ov:h*0.9})}let s=Gl(r,new dt({map:kl.map,bumpMap:kl.map,bumpScale:0.6,roughness:0.72,side:Gt,color:15652528,flatShading:!0}),Ei);s.castShadow=!0;let o=n[2].map((h)=>new Z(h.x,-h.z)),a=new Is(new Gi(o));a.rotateX(-Math.PI/2);let l=new ne(a,se(13216376,0.8));l.position.y=4.7,Ei.add(l),r.forEach((h,f)=>{let u=pa(h,0.5,0.5),m=fi(u.x-je.cx,0,u.z-je.cz).normalize(),g=ma(h,m);rh(h,f<7?2:2,3+f,g,0.55)});let c=r[0];{let h=pa(c,0.5,0.22),f=ma(c,fi(h.x-je.cx,0,h.z-je.cz));Vl(6,h,f,2845695,0);let u=pa(r[3],0.5,0.3);Vl(6,u,ma(r[3],fi(u.x-je.cx,0,u.z-je.cz)),15213098,1)}})();ry();(function(){let i=[...Array(6)].map((h,f)=>{let u=f*Math.PI/3;return[je.cx+6.99*Math.cos(u),je.cz+6.99*Math.sin(u)]}),n=i[1][1]+0.1,r=[i[0],i[1],[-9.7,n],[-9.7,n-0.95],[-11.5,n-0.95],[-11.5,n],i[2],i[3],i[4],i[5]],s=new Gi(r.map((h)=>new Z(h[0],-h[1]))),o=new Cs(s,{depth:0.26,bevelEnabled:!0,bevelThickness:0.04,bevelSize:0.04,bevelSegments:3});o.rotateX(-Math.PI/2);let a=Wl(Wt.matBlue,1,0.5),l=new ne(o,new dt({map:a,bumpMap:a,bumpScale:1.2,roughness:0.85}));l.position.y=0,l.receiveShadow=!0,Ei.add(l),ga(Ei,[...Array(6)].map((h,f)=>Cn[f]),Xl("concrete",1.5,0.9));for(let h=0;h<6;h++){if(h===1)continue;let f=Cn[h],u=Cn[(h+1)%6],m=Math.hypot(u[0]-f[0],u[1]-f[1]),g=new ne(new Ft(m-0.3,0.03,0.05),se(16765482,0.5)),_=(f[0]+u[0])/2,p=(f[1]+u[1])/2,d=fi(je.cx-_,0,je.cz-p).normalize();g.position.set(_+d.x*0.07,0.32,p+d.z*0.07),g.rotation.y=-Math.atan2(u[1]-f[1],u[0]-f[0]),Ei.add(g)}let c=new ne(new Rt(3.3,3.4,0.14,7),new dt({map:a,color:6988543,roughness:0.9}));c.position.set(je.cx,0.33,je.cz),Ei.add(c)})();(function(){Ws(Cn,je.H,se(1776673,0.9));for(let t=0;t<3;t++){let i=t*Math.PI/3,n=new ne(new Ft(je.R*2-0.3,0.36,0.28),se(5067356,0.45,0.8));n.position.set(je.cx,je.H-0.2,je.cz),n.rotation.y=-i,ei.add(n);let r=new ne(new Ft(je.R*2-1.2,0.03,0.06),Bt(16773594,7));r.position.set(je.cx,je.H-0.4,je.cz),r.rotation.y=-i,ei.add(r)}for(let t=0;t<6;t++){let i=t*Math.PI/3+Math.PI/6,n=je.cx+Math.cos(i)*4.6,r=je.cz+Math.sin(i)*4.6;_t(ei,0.12,0.12,0.14,se(855312,0.4,0.5),n,je.H-0.1,r,14),_t(ei,0.1,0.1,0.01,Bt(16774888,9),n,je.H-0.18,r,14)}for(let t=0;t<3;t++){let i=t*Math.PI*2/3+0.5;Ti(Ei,je.cx+Math.cos(i)*4.2,je.H-0.6,je.cz+Math.sin(i)*4.2,16774372,22,14)}Ti(Ei,je.cx,je.H-0.8,je.cz,16777215,18,12),Mn(Ei,"BOULDER",2.6,0.5,"#ffb42a",-10.6,4.4,Cn[1][1]-0.12,Math.PI,"bold 170px Arial Black",void 0,!1),ae(ei,14,0.02,0.02,Bt(16757802,2.5),je.cx,je.H-0.02,je.cz+5).visible=!1})();var et=new ut;Vr.add(et);var Wi=3,Qm=(e,t)=>Xi("tile",0.6,0.35,0,e,t),ql=(e,t)=>Xi("plaster",1.2,0.9,0,e,t);ga(et,[[-12.4,-5.45],[-8.8,-5.45],[-8.8,3.85],[-3.6,3.85],[-3.6,7.7],[-12.4,7.7]],Xl("tile",0.6,0.35));ga(et,[[-3.6,3.85],[0.4,3.85],[0.4,7.7],[-3.6,7.7]],Xl("graphite",1,0.6));Ws([[-12.4,-5.45],[-8.8,-5.45],[-8.8,3.85],[-12.4,3.85]],Wi,se(15000802,0.9));Ws([[-12.4,3.85],[-3.6,3.85],[-3.6,7.7],[-12.4,7.7]],Wi,se(15000802,0.9));Ws([[-3.6,3.85],[0.4,3.85],[0.4,7.7],[-3.6,7.7]],Wi,se(2434604,0.9));qi(et,-12.4,-5.45,-12.4,7.7,Wi,ql);qi(et,-8.8,-5.45,-8.8,-3.85,Wi,ql);qi(et,-3.6,3.85,-3.6,7.7,Wi,Qm);qi(et,0.4,3.85,0.4,7.7,Wi,Wr);for(let[e,t,i,n]of[[-10.6,-1,3.4,0.08],[-10.6,2.6,3.4,0.08],[-8.2,5.8,0.08,3.4],[-6.2,5.8,3.4,0.08]])ae(ei,i,0.03,n,Bt(16054527,6),e,Wi-0.02,t);(function(){let e=se(3885667,0.45,0.35),t=se(2765376,0.5,0.3);for(let i=0;i<14;i++){let n=-4.7+i*0.5+0;ae(et,0.45,1.95,0.48,i%2?e:t,-12.17,1,n),ae(et,0.01,0.55,0.3,se(1778224,0.6),-11.94,1.5,n),ae(et,0.012,0.2,0.012,se(14014428,0.2,1),-11.94,1.1,n+0.12),ae(et,0.012,0.03,0.2,Bt(3725567,1.2),-11.94,1.92,n)}ae(et,0.46,0.06,7.1,se(2764602,0.5),-12.17,1.98,-1.1);for(let i of[-3.6,0.9]){ae(et,0.45,0.06,2.6,se(8018488,0.45),-10.9,0.46,i+1);for(let n of[0.1,2])ae(et,0.4,0.44,0.06,se(1381658,0.4,0.5),-10.9,0.22,i+n);ae(et,0.1,0.04,2.6,se(13619928,0.3,1),-10.55,0.9,i+1).visible=!1}for(let i=0;i<6;i++)ae(et,0.04,0.04,0.04,se(13619928,0.3,1),-8.9,1.7,-5.2+i*0.25);ae(et,0.03,1.4,1.2,new dt({color:13625855,roughness:0.04,metalness:0.6}),-8.93,1.4,-4.7),Mn(et,"ŠATNA",1.5,0.4,"#7fd0ff",-8.93,2.6,0.1,-Math.PI/2,"bold 170px Arial Black",void 0,!1),Ti(et,-10.6,2.6,-2,16054527,7,8),Ti(et,-10.6,2.6,2.4,16054527,6,8)})();(function(){let e=new dt({color:12577023,transparent:!0,opacity:0.18,roughness:0.02}),t=se(14014428,0.2,1),i=se(12172482,0.3);for(let n=0;n<4;n++){let r=-8+n*1.1;ae(et,1.05,0.02,1.2,i,r,0.011,4.45),ae(et,0.02,2,1.2,e,r+0.55,1,4.45),ae(et,1.05,2,0.02,e,r,1,5.07),_t(et,0.012,0.012,1,t,r,1.9,3.95,8);let s=_t(et,0.1,0.1,0.012,t,r,2.25,4.1,16);s.rotation.x=0.4,_t(et,0.06,0.06,0.004,se(273,0.5),r,0.016,4.5,14)}ae(et,0.02,2,1.2,e,-8.55,1,4.45);for(let n=0;n<3;n++){let r=-6+n*0.9;ae(et,0.55,0.1,0.4,se(15921906,0.2),r,0.9,7.45),_t(et,0.012,0.012,0.12,t,r,1,7.6,8),ae(et,0.6,0.9,0.02,new dt({color:13625855,roughness:0.04,metalness:0.6}),r,1.55,7.64)}for(let n=0;n<3;n++)ae(et,1,2,0.03,se(15000802,0.6),-9.1,1,7-n*0.9).visible=!1,ae(et,0.03,2,0.88,se(15000802,0.6),-11.8,1,4.6+n*1).visible=!1;for(let n=0;n<3;n++){let r=4.4+n*1;ae(et,1,1.95,0.03,se(15000802,0.6),-11.9,1,r+0.5),ae(et,0.03,1.4,0.8,se(2781048,0.5),-11.4,0.85,r+0.05).visible=!1,_t(et,0.17,0.2,0.4,se(15921906,0.2),-12.1,0.2,r,16)}Mn(et,"SPRCHY · WC",2.4,0.4,"#7fd0ff",-6.2,2.6,4,0,"bold 140px Arial Black",void 0,!1),Ti(et,-6.2,2.6,5.7,15398143,7,8)})();(function(){ae(et,2.6,0.42,0.45,se(2763827,0.6),-1.7,0.21,7.4),ae(et,2.6,0.06,0.5,se(8018488,0.45),-1.7,0.45,7.4),Mn(et,"BADMINTON  ›",2.2,0.36,"#6fd0ff",-1.9,2.6,7.45,Math.PI,"bold 140px Arial Black",void 0,!1);for(let e of[-3.3,0.1]){_t(et,0.2,0.15,0.4,se(2369067,0.6),e,0.2,4.2,16),_t(et,0.03,0.03,0.6,se(2780986,0.8),e,0.7,4.2,6);let t=new ne(new wn(0.28,12,9),se(2058804,0.8));t.scale.y=1.2,t.position.set(e,1.15,4.2),et.add(t)}Ti(et,-1.6,2.6,5.8,16771276,6,7)})();ae(et,5.2,Wi,0.03,Qm(5.2,Wi),-6.2,Wi/2,3.99);ae(et,0.03,2.85,2.85,ql(2.85,2.85),-8.94,1.425,-2.425);ae(et,0.03,Wi,2.65,ql(2.65,Wi),-8.94,Wi/2,2.525);ae(et,0.03,0.15,2.2,se(1381914,0.6),-8.94,0.075,0.1).visible=!1;var St=new ut;Vr.add(St);var he={x0:-12.4,x1:5.6,z0:7.7,z1:24.5,Hs:4.2,Hc:9};he.cx=(he.x0+he.x1)/2;he.a=(he.x1-he.x0)/2;he.b=he.Hc-he.Hs;var ur=(e,t=0)=>{let i=(e-he.cx)/(he.a-t);return he.Hs+(he.b-t)*Math.sqrt(Math.max(0,1-i*i))};Wt.vinylBlue=(()=>{let e=It(256,256),t=e.getContext("2d");return t.fillStyle="#1f3f7a",t.fillRect(0,0,256,256),ti(t,256,256,14),e})();{let e=Xi("vinylBlue",2,0.35,0,he.x1-he.x0,he.z1-he.z0),t=new ne(new Dt(he.x1-he.x0,he.z1-he.z0),e);t.rotation.x=-Math.PI/2,t.position.set(he.cx,0.002,(he.z0+he.z1)/2),t.receiveShadow=!0,St.add(t)}var sy=(()=>{let e=It(610,1340),t=e.getContext("2d");t.fillStyle="#2c7a4e",t.fillRect(0,0,610,1340),ti(t,610,1340,10),t.strokeStyle="#fff",t.fillStyle="#fff";let i=4,n=(s,o,a,l)=>{t.lineWidth=i,t.beginPath(),t.moveTo(s,o),t.lineTo(a,l),t.stroke()};t.lineWidth=i,t.strokeRect(2,2,606,1336),n(46,0,46,1340),n(564,0,564,1340),n(0,76,610,76),n(0,1264,610,1264),n(0,472,610,472),n(0,868,610,868),n(305,0,305,472),n(305,868,305,1340),t.fillStyle="rgba(255,255,255,.55)",t.fillRect(0,668,610,4);let r=new Vi(e);return r.colorSpace=Tt,r.anisotropy=16,r})(),sh=[he.cx-3.9,he.cx+3.9],fr=16.1;for(let e of sh){let t=new ne(new Dt(6.1,13.4),new dt({map:sy,roughness:0.32}));t.rotation.x=-Math.PI/2,t.position.set(e,0.012,fr),t.receiveShadow=!0,St.add(t);for(let o of[-1,1])_t(St,0.028,0.034,1.55,se(1842207,0.4,0.7),e+o*3.05,0.775,fr,12),_t(St,0.14,0.16,0.05,se(3816256,0.5,0.5),e+o*3.05,0.025,fr,16);let i=It(512,64),n=i.getContext("2d");n.fillStyle="#fff",n.fillRect(0,0,512,9),n.strokeStyle="rgba(240,240,240,.75)",n.lineWidth=1;for(let o=0;o<512;o+=7)n.beginPath(),n.moveTo(o,0),n.lineTo(o,64),n.stroke();for(let o=9;o<64;o+=7)n.beginPath(),n.moveTo(0,o),n.lineTo(512,o),n.stroke();let r=new Vi(i);r.colorSpace=Tt;let s=new ne(new Dt(6.1,0.76),new kt({map:r,transparent:!0,side:Gt,alphaTest:0.25}));s.position.set(e,1.17,fr),St.add(s),ae(St,0.5,0.05,0.5,se(7830146,0.5),e+3.7,1.5,fr),ae(St,0.06,1.5,0.06,se(7830146,0.3,0.8),e+3.7,0.75,fr-0.2),ae(St,0.06,1.5,0.06,se(7830146,0.3,0.8),e+3.7,0.75,fr+0.2)}var jm=(e,t)=>Xi("plaster",1.2,0.9,0,e,t);qi(St,he.x0,he.z0,he.x0,he.z1,he.Hs,jm);qi(St,he.x1,he.z0,he.x1,he.z1,he.Hs,jm);var e0=(e,t)=>Xi("rubber",1.2,0.8,0,e,t,{color:4880127});ae(St,0.1,1.3,he.z1-he.z0,e0(16,1.3),he.x0+0.1,0.65,(he.z0+he.z1)/2);ae(St,0.1,1.3,he.z1-he.z0,e0(16,1.3),he.x1-0.1,0.65,(he.z0+he.z1)/2);function t0(e,t,i){let n=[[he.x0,0]];for(let[l,c]of t)n.push([l,0],[l,2.2],[c,2.2],[c,0]);n.push([he.x1,0]);let r=48;for(let l=r;l>=0;l--){let c=he.x0+(he.x1-he.x0)*l/r;n.push([c,ur(c)])}let s=new Gi(n.map((l)=>new Z(l[0],l[1]))),o=new Cs(s,{depth:0.22,bevelEnabled:!1}),a=new ne(o,Xi("plaster",1.2,0.9,0,6,6));if(a.position.z=e-0.11,a.receiveShadow=!0,St.add(a),i)Vs.push(a);return a}t0(he.z0,[[-8.2,-6.8],[-2.8,-1]],!1);t0(he.z1,[],!0);for(let[e,t]of[[-8.2,-6.8],[-2.8,-1]])ae(St,0.1,2.2,0.3,se(1381914,0.5),e,1.1,he.z0),ae(St,0.1,2.2,0.3,se(1381914,0.5),t,1.1,he.z0),ae(St,t-e,0.1,0.3,se(1381914,0.5),(e+t)/2,2.2,he.z0);var i0=new kt({color:13625087,toneMapped:!1});for(let e=0;e<5;e++){let t=new ne(new Dt(2,3.2),i0);t.position.set(he.cx-7.2+e*3.6,5.6,he.z1-0.115),t.rotation.y=Math.PI,St.add(t),Vs.push(t)}for(let e of[he.x0+0.13,he.x1-0.13])for(let t=0;t<6;t++){let i=new ne(new Dt(1.8,0.8),i0);i.position.set(e,3.3,he.z0+1.6+t*2.7),i.rotation.y=e<he.cx?Math.PI/2:-Math.PI/2,St.add(i)}(function(){let n=new dt({map:Wl(Wt.steel,2,2),color:10133674,roughness:0.35,metalness:0.85}),r=[],s=[];for(let T=0;T<=36;T++){let w=he.x0+0.25+(he.x1-he.x0-0.5)*T/36;r.push([w,ur(w,0.15)]),s.push([w,ur(w,0.15)-0.7+Math.abs(T-18)/18*0.25])}let o=[],a=fi(0,1,0),l=new Je,c=new Qt,h=new C,f=new C,u=(T,w,x)=>{let y=fi(T[0],T[1],x),A=fi(w[0],w[1],x),U=A.clone().sub(y),P=U.length();c.setFromUnitVectors(a,U.normalize()),h.copy(y).add(A).multiplyScalar(0.5),f.set(1,P,1),l.compose(h,c,f),o.push(l.clone())};for(let T=0;T<8;T++){let w=he.z0+0.9+T*(he.z1-he.z0-1.8)/7;for(let x of[r,s]){let y=new ws(x.map((U)=>fi(U[0],U[1],w))),A=new ne(new ta(y,72,0.075,8,!1),n);A.castShadow=!0,St.add(A)}for(let x=0;x<36;x++)u(r[x],s[x],w),u(s[x],r[x+1],w);u(r[36],s[36],w);for(let x of[he.x0+0.22,he.x1-0.22])ae(St,0.3,he.Hs-0.1,0.3,n,x,(he.Hs-0.1)/2+0.05,w),ae(St,0.45,0.05,0.45,se(3158842,0.5,0.6),x,0.03,w)}let m=new Rt(0.028,0.028,1,6),g=new yn(m,n,o.length);o.forEach((T,w)=>g.setMatrixAt(w,T)),St.add(g);for(let T=0;T<=12;T++){let w=he.x0+0.25+(he.x1-he.x0-0.5)*T/12,x=ur(w,0.15),y=_t(St,0.05,0.05,he.z1-he.z0-1.4,n,w,x,(he.z0+he.z1)/2,8);y.rotation.x=Math.PI/2}let _=60,p=[],d=[],v=[];for(let T=0;T<=_;T++){let w=he.x0+(he.x1-he.x0)*T/_,x=ur(w)+0.12;if(p.push(w,x,he.z0,w,x,he.z1),v.push(T*0.6,0,T*0.6,4),T<_){let y=T*2;d.push(y,y+1,y+2,y+1,y+3,y+2)}}let M=new Ve;M.setAttribute("position",new Ae(p,3)),M.setAttribute("uv",new Ae(v,2)),M.setIndex(d),M.computeVertexNormals();let S=new ne(M,new dt({color:13159636,roughness:0.7,metalness:0.3,side:Gt}));ei.add(S);for(let T of sh)for(let w of[-1.6,1.6])for(let x=0;x<3;x++){let y=he.z0+3.5+x*4.5+(T>he.cx?0:0),A=Math.min(ur(T+w,0.15)-0.9,7.6),U=new ne(new Ft(0.16,0.08,2.4),Bt(16775146,9));U.position.set(T+w,A,y),St.add(U),ae(St,0.02,ur(T+w,0.15)-A-0.1,0.02,se(546,0.5,0.7),T+w,(ur(T+w,0.15)+A)/2-0.05,y)}for(let T of sh)for(let w=0;w<3;w++)Ti(St,T,7,he.z0+3.5+w*4.5,16775146,38,26)})();Mn(St,"21 : 18",2.2,0.8,"#ffcf3a",he.x1-0.14,3.2,fr,-Math.PI/2,"bold 280px Arial Black","#0b0b0b",!1);Mn(St,"BADMINTON · LIGA",5,0.6,"#2b4fff",he.cx,6,he.z0+0.14,0,"bold 190px Arial Black",void 0,!1);for(let e of[-9,-3.4,2.2])ae(St,2.6,0.05,0.4,se(3812642,0.5),e,0.45,he.z1-0.5),ae(St,0.06,0.44,0.35,se(1381653),e-1.2,0.22,he.z1-0.5),ae(St,0.06,0.44,0.35,se(1381653),e+1.2,0.22,he.z1-0.5);for(let e=0;e<6;e++){let t=_t(St,0.04,0.04,0.3,se(16766010),-11+e*0.12,0.6,he.z1-0.6,10);t.rotation.x=0.2}var n0={1:["Main hall – sofa & TV",[2.5,1.65,-4.2],[0.2,1.3,-9.3],72],2:["PC wall",[3.2,1.7,0],[8.7,1.3,0],76],3:["Bar",[1.4,1.6,-0.2],[5,1.2,3.4],72],4:["Beer pong + Hall of Fame",[-1.8,1.7,0.6],[-7.2,0.9,0.4],74],5:["Boulder hall",[-10.8,1.7,-6.2],[-10.8,3,-13],80],6:["Badminton hall",[-3.4,1.9,9.5],[-3.4,3.5,20],80],7:["Locker block",[-10.6,1.7,6.8],[-10.6,1.2,-4],78]};window.PRESETS=n0;var hh=new la(16777215,16777215,0);vn.add(hh);window.view=(e,t,i,n,r,s,o=70,a=!0)=>{hh.intensity=0,ei.visible=a,Vs.forEach((l)=>l.visible=a),hi.fov=o,hi.updateProjectionMatrix(),hi.position.set(e,t,i),hi.lookAt(n,r,s),yi.render(vn,hi)};window.topView=(e=1000,t=1233)=>{hh.intensity=2.4,ei.visible=!1,Vs.forEach((s)=>s.visible=!0),yi.setSize(e,t);let i=24,n=i*e/t,r=new kn(-n,n,i,-i,0.1,80);r.position.set(-3.4,40,4.5),r.up.set(0,0,-1),r.lookAt(-3.4,0,4.5),yi.render(vn,r)};window.resetSize=()=>yi.setSize(oh,ah);(function(){if(navigator.webdriver){window.__ready=!0;return}let t=0,i=0,n=!1,r=0,s=0,o=!1,a={};hi.position.set(-1.9,1.65,3),t=0.2,i=-0.05;let l=(f)=>{let u=n0[f];if(!u)return;ei.visible=!0,hi.position.set(...u[1]),hi.fov=u[3],hi.updateProjectionMatrix();let m=fi(...u[2]).sub(hi.position);t=Math.atan2(-m.x,-m.z),i=Math.atan2(m.y,Math.hypot(m.x,m.z))};addEventListener("keydown",(f)=>{if(a[f.code]=!0,/^Digit[1-7]$/.test(f.code))l(+f.code.slice(5));if(f.code==="KeyC")ei.visible=!ei.visible,Vs.forEach((u)=>u.visible=ei.visible);if(f.code==="KeyT")o=!o}),addEventListener("keyup",(f)=>a[f.code]=!1),yi.domElement.addEventListener("pointerdown",(f)=>{n=!0,r=f.clientX,s=f.clientY}),addEventListener("pointerup",()=>n=!1),addEventListener("pointermove",(f)=>{if(!n)return;t-=(f.clientX-r)*0.004,i=Math.max(-1.4,Math.min(1.4,i-(f.clientY-s)*0.004)),r=f.clientX,s=f.clientY}),addEventListener("resize",()=>{yi.setSize(innerWidth,innerHeight),hi.aspect=innerWidth/innerHeight,hi.updateProjectionMatrix()}),yi.setSize(innerWidth,innerHeight),hi.aspect=innerWidth/innerHeight,hi.updateProjectionMatrix();let c=new Il,h=new kn(-24,24,24,-24,0.1,90);h.up.set(0,0,-1),function f(){requestAnimationFrame(f);let u=Math.min(c.getDelta(),0.05),m=(a.ShiftLeft?5:2.4)*u,g=(a.KeyW||a.ArrowUp?1:0)-(a.KeyS||a.ArrowDown?1:0),_=(a.KeyD||a.ArrowRight?1:0)-(a.KeyA||a.ArrowLeft?1:0);if(hi.position.x+=(-Math.sin(t)*g+Math.cos(t)*_)*m,hi.position.z+=(-Math.cos(t)*g-Math.sin(t)*_)*m,hi.position.y=1.65,hi.rotation.set(i,t,0,"YXZ"),o){let p=innerWidth/innerHeight;h.left=-24*p,h.right=24*p,h.updateProjectionMatrix(),h.position.set(-3.4,40,4.5),h.lookAt(-3.4,0,4.5),ei.visible=!1,yi.render(vn,h)}else yi.render(vn,hi)}(),window.__ready=!0})();
