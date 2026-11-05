var b1=Object.defineProperty;var T1=(e)=>e;function E1(e,t){this[e]=T1.bind(null,t)}var w1=(e,t)=>{for(var i in t)b1(e,i,{get:t[i],enumerable:!0,configurable:!0,set:E1.bind(t,i)})};var ps={};w1(ps,{ArcCurve:()=>$f,CatmullRomCurve3:()=>Kn,CubicBezierCurve:()=>Bl,CubicBezierCurve3:()=>ru,EllipseCurve:()=>eo,LineCurve:()=>Ol,LineCurve3:()=>su,QuadraticBezierCurve:()=>Hl,QuadraticBezierCurve3:()=>zl,SplineCurve:()=>Gl});var Aa="187";var bd=0,xf=1,Td=2;var yo=1,Ed=2,Ds=3,Mn=0,jt=1,Ot=2,Gn=0,ts=1,Ra=2,_f=3,yf=4,wd=5;var is=100,Ad=101,Rd=102,Cd=103,Id=104,Pd=200,Ld=201,Dd=202,Nd=203,Ec=204,wc=205,Fd=206,Ud=207,Bd=208,Od=209,Hd=210,zd=211,Gd=212,kd=213,Vd=214,Ca=0,Ia=1,Pa=2,ns=3,La=4,Da=5,Na=6,Fa=7,Ns=0,Wd=1,Xd=2,Tn=0,Mo=1,vo=2,So=3,rs=4,bo=5,To=6,Eo=7,Mf="attached",Yd="detached",Ac=300,kn=301,Lr=302,Ua=303,Ba=304,pn=1000,Ii=1001,ss=1002,Xt=1003,Oa=1004;var os=1005;var qt=1006,Fs=1007;var Hi=1008;var Mi=1009,Rc=1010,Cc=1011,Dr=1012,wo=1013,Pi=1014,gi=1015,si=1016,Ao=1017,Ro=1018,nr=1020,Ic=35902,Pc=35899,Lc=1021,Dc=1022,Li=1023,vn=1026,En=1027,Co=1028,Us=1029,wn=1030,Io=1031;var Po=1033,Lo=33776,Do=33777,No=33778,Fo=33779,Ha=35840,za=35841,Ga=35842,ka=35843,Va=36196,Wa=37492,Xa=37496,Ya=37488,qa=37489,Bs=37490,Za=37491,Ka=37808,Ja=37809,ja=37810,$a=37811,Qa=37812,el=37813,tl=37814,il=37815,nl=37816,rl=37817,sl=37818,ol=37819,al=37820,ll=37821,cl=36492,hl=36494,fl=36495,ul=36283,dl=36284,Os=36285,pl=36286;var Nr=2300,Hs=2301,Nc=2302,vf=2303,Fc=2400,Uc=2401,Bc=2402,Oc=2500;var qd=0,Hc=1,ml=2,Zd=3200;var rr=0,Kd=1,Vn="",_t="srgb",Ki="srgb-linear",zs="linear",Tt="srgb";var zc=7680;var Jd=519,jd=512,$d=513,Qd=514,Gc=515,ep=516,tp=517,kc=518,Vc=519,gl=35044;var Sf="300 es",zi=2000,gr=2001;function np(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function bf(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function as(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function Tf(){let e=as("canvas");return e.style.display="block",e}var ip={},Uo=null;function Gs(...e){let t="THREE."+e.shift();if(Uo)Uo("log",t,...e);else console.log(t,...e)}function rp(e){let t=e[0];if(typeof t==="string"&&t.startsWith("TSL:")){let i=e[1];if(i&&i.isStackTrace)e[0]+=" "+i.getLocation();else e[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return e}function Te(...e){e=rp(e);let t="THREE."+e.shift();if(Uo)Uo("warn",t,...e);else{let i=e[0];if(i&&i.isStackTrace)console.warn(i.getError(t));else console.warn(t,...e)}}function Ye(...e){e=rp(e);let t="THREE."+e.shift();if(Uo)Uo("error",t,...e);else{let i=e[0];if(i&&i.isStackTrace)console.error(i.getError(t));else console.error(t,...e)}}function Wn(...e){let t=e.join(" ");if(t in ip)return;ip[t]=!0,Te(...e)}function sp(e,t,i){return new Promise(function(n,r){function s(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:r();break;case e.TIMEOUT_EXPIRED:setTimeout(s,i);break;default:n()}}setTimeout(s,i)})}var op={[Ca]:Ca,[Pa]:Na,[La]:La,[ns]:Da,[Ia]:Ia,[Na]:Pa,[Fa]:Fa,[Da]:ns};class Di{addEventListener(e,t){if(this._listeners===void 0)this._listeners={};let i=this._listeners;if(i[e]===void 0)i[e]=[];if(i[e].indexOf(t)===-1)i[e].push(t)}hasEventListener(e,t){let i=this._listeners;if(i===void 0)return!1;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let n=i[e];if(n!==void 0){let r=n.indexOf(t);if(r!==-1)n.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let n=i.slice(0);for(let r=0,s=n.length;r<s;r++)n[r].call(this,e);e.target=null}}}var on=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ap=1234567,Fr=Math.PI/180,Ur=180/Math.PI;function vi(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(on[e&255]+on[e>>8&255]+on[e>>16&255]+on[e>>24&255]+"-"+on[t&255]+on[t>>8&255]+"-"+on[t>>16&15|64]+on[t>>24&255]+"-"+on[i&63|128]+on[i>>8&255]+"-"+on[i>>16&255]+on[i>>24&255]+on[n&255]+on[n>>8&255]+on[n>>16&255]+on[n>>24&255]).toLowerCase()}function lt(e,t,i){return Math.max(t,Math.min(i,e))}function Wc(e,t){return(e%t+t)%t}function A1(e,t,i,n,r){return n+(e-t)*(r-n)/(i-t)}function R1(e,t,i){if(e!==t)return(i-e)/(t-e);else return 0}function Bo(e,t,i){return(1-i)*e+i*t}function C1(e,t,i,n){return Bo(e,t,1-Math.exp(-i*n))}function I1(e,t=1){return t-Math.abs(Wc(e,t*2)-t)}function P1(e,t,i){if(e<=t)return 0;if(e>=i)return 1;return e=(e-t)/(i-t),e*e*(3-2*e)}function L1(e,t,i){if(e<=t)return 0;if(e>=i)return 1;return e=(e-t)/(i-t),e*e*e*(e*(e*6-15)+10)}function D1(e,t){return e+Math.floor(Math.random()*(t-e+1))}function N1(e,t){return e+Math.random()*(t-e)}function F1(e){return e*(0.5-Math.random())}function U1(e){if(e!==void 0)ap=e;let t=ap+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function B1(e){return e*Fr}function O1(e){return e*Ur}function H1(e){return e>0&&Number.isInteger(e)&&2**Math.round(Math.log2(e))===e}function z1(e){return Math.pow(2,Math.ceil(Math.log(e)/Math.LN2))}function Ef(e){return Math.pow(2,Math.floor(Math.log(e)/Math.LN2))}function G1(e,t,i,n,r){let{cos:s,sin:o}=Math,a=s(i/2),l=o(i/2),c=s((t+n)/2),h=o((t+n)/2),u=s((t-n)/2),f=o((t-n)/2),m=s((n-t)/2),g=o((n-t)/2);switch(r){case"XYX":e.set(a*h,l*u,l*f,a*c);break;case"YZY":e.set(l*f,a*h,l*u,a*c);break;case"ZXZ":e.set(l*u,l*f,a*h,a*c);break;case"XZX":e.set(a*h,l*g,l*m,a*c);break;case"YXY":e.set(l*m,a*h,l*g,a*c);break;case"ZYZ":e.set(l*g,l*m,a*h,a*c);break;default:Te("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Oo(e){switch(e.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function xl(e,t){if(t.constructor===Float32Array)return e;let i=Oo(t);if(i===void 0)throw Error("THREE.MathUtils: Invalid component type.");return Math.max(e/i,-1)}function _l(e,t){if(t.constructor===Float32Array)return e;let i=Oo(t);if(i===void 0)throw Error("THREE.MathUtils: Invalid component type.");return Math.round(e*i)}var Xc={DEG2RAD:Fr,RAD2DEG:Ur,generateUUID:vi,clamp:lt,euclideanModulo:Wc,mapLinear:A1,inverseLerp:R1,lerp:Bo,damp:C1,pingpong:I1,smoothstep:P1,smootherstep:L1,randInt:D1,randFloat:N1,randFloatSpread:F1,seededRandom:U1,degToRad:B1,radToDeg:O1,isPowerOfTwo:H1,ceilPowerOfTwo:z1,floorPowerOfTwo:Ef,setQuaternionFromProperEuler:G1,normalize:_l,denormalize:xl};class Z{static{this.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,n=e.elements;return this.x=n[0]*t+n[3]*i+n[6],this.y=n[1]*t+n[4]*i+n[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=lt(this.x,e.x,t.x),this.y=lt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=lt(this.x,e,t),this.y=lt(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(lt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(lt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),n=Math.sin(t),r=this.x-e.x,s=this.y-e.y;return this.x=r*i-s*n+e.x,this.y=r*n+s*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class oi{constructor(e=0,t=0,i=0,n=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=n}static slerpFlat(e,t,i,n,r,s,o){let a=i[n+0],l=i[n+1],c=i[n+2],h=i[n+3],u=r[s+0],f=r[s+1],m=r[s+2],g=r[s+3];if(h!==g||a!==u||l!==f||c!==m){let x=a*u+l*f+c*m+h*g;if(x<0)u=-u,f=-f,m=-m,g=-g,x=-x;let d=1-o;if(x<0.9995){let p=Math.acos(x),y=Math.sin(p);d=Math.sin(d*p)/y,o=Math.sin(o*p)/y,a=a*d+u*o,l=l*d+f*o,c=c*d+m*o,h=h*d+g*o}else{a=a*d+u*o,l=l*d+f*o,c=c*d+m*o,h=h*d+g*o;let p=1/Math.sqrt(a*a+l*l+c*c+h*h);a*=p,l*=p,c*=p,h*=p}}e[t]=a,e[t+1]=l,e[t+2]=c,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,n,r,s){let o=i[n],a=i[n+1],l=i[n+2],c=i[n+3],h=r[s],u=r[s+1],f=r[s+2],m=r[s+3];return e[t]=o*m+c*h+a*f-l*u,e[t+1]=a*m+c*u+l*h-o*f,e[t+2]=l*m+c*f+o*u-a*h,e[t+3]=c*m-o*h-a*u-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,n){return this._x=e,this._y=t,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let{_x:i,_y:n,_z:r,_order:s}=e,{cos:o,sin:a}=Math,l=o(i/2),c=o(n/2),h=o(r/2),u=a(i/2),f=a(n/2),m=a(r/2);switch(s){case"XYZ":this._x=u*c*h+l*f*m,this._y=l*f*h-u*c*m,this._z=l*c*m+u*f*h,this._w=l*c*h-u*f*m;break;case"YXZ":this._x=u*c*h+l*f*m,this._y=l*f*h-u*c*m,this._z=l*c*m-u*f*h,this._w=l*c*h+u*f*m;break;case"ZXY":this._x=u*c*h-l*f*m,this._y=l*f*h+u*c*m,this._z=l*c*m+u*f*h,this._w=l*c*h-u*f*m;break;case"ZYX":this._x=u*c*h-l*f*m,this._y=l*f*h+u*c*m,this._z=l*c*m-u*f*h,this._w=l*c*h+u*f*m;break;case"YZX":this._x=u*c*h+l*f*m,this._y=l*f*h+u*c*m,this._z=l*c*m-u*f*h,this._w=l*c*h-u*f*m;break;case"XZY":this._x=u*c*h-l*f*m,this._y=l*f*h-u*c*m,this._z=l*c*m+u*f*h,this._w=l*c*h+u*f*m;break;default:Te("Quaternion: .setFromEuler() encountered an unknown order: "+s)}if(t===!0)this._onChangeCallback();return this}setFromAxisAngle(e,t){let i=t/2,n=Math.sin(i);return this._x=e.x*n,this._y=e.y*n,this._z=e.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],n=t[4],r=t[8],s=t[1],o=t[5],a=t[9],l=t[2],c=t[6],h=t[10],u=i+o+h;if(u>0){let f=0.5/Math.sqrt(u+1);this._w=0.25/f,this._x=(c-a)*f,this._y=(r-l)*f,this._z=(s-n)*f}else if(i>o&&i>h){let f=2*Math.sqrt(1+i-o-h);this._w=(c-a)/f,this._x=0.25*f,this._y=(n+s)/f,this._z=(r+l)/f}else if(o>h){let f=2*Math.sqrt(1+o-i-h);this._w=(r-l)/f,this._x=(n+s)/f,this._y=0.25*f,this._z=(a+c)/f}else{let f=2*Math.sqrt(1+h-i-o);this._w=(s-n)/f,this._x=(r+l)/f,this._y=(a+c)/f,this._z=0.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;if(i<0.00000001)if(i=0,Math.abs(e.x)>Math.abs(e.z))this._x=-e.y,this._y=e.x,this._z=0,this._w=i;else this._x=0,this._y=-e.z,this._z=e.y,this._w=i;else this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i;return this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(lt(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let n=Math.min(1,t/i);return this.slerp(e,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();if(e===0)this._x=0,this._y=0,this._z=0,this._w=1;else e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e;return this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let{_x:i,_y:n,_z:r,_w:s}=e,{_x:o,_y:a,_z:l,_w:c}=t;return this._x=i*c+s*o+n*l-r*a,this._y=n*c+s*a+r*o-i*l,this._z=r*c+s*l+i*a-n*o,this._w=s*c-i*o-n*a-r*l,this._onChangeCallback(),this}slerp(e,t){let{_x:i,_y:n,_z:r,_w:s}=e,o=this.dot(e);if(o<0)i=-i,n=-n,r=-r,s=-s,o=-o;let a=1-t;if(o<0.9995){let l=Math.acos(o),c=Math.sin(l);a=Math.sin(a*l)/c,t=Math.sin(t*l)/c,this._x=this._x*a+i*t,this._y=this._y*a+n*t,this._z=this._z*a+r*t,this._w=this._w*a+s*t,this._onChangeCallback()}else this._x=this._x*a+i*t,this._y=this._y*a+n*t,this._z=this._z*a+r*t,this._w=this._w*a+s*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),n=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(n*Math.sin(e),n*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class R{static{this.prototype.isVector3=!0}constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){if(i===void 0)i=this.z;return this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(lp.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(lp.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,n=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*n,this.y=r[1]*t+r[4]*i+r[7]*n,this.z=r[2]*t+r[5]*i+r[8]*n,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,n=this.z,r=e.elements,s=1/(r[3]*t+r[7]*i+r[11]*n+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*n+r[12])*s,this.y=(r[1]*t+r[5]*i+r[9]*n+r[13])*s,this.z=(r[2]*t+r[6]*i+r[10]*n+r[14])*s,this}applyQuaternion(e){let t=this.x,i=this.y,n=this.z,{x:r,y:s,z:o,w:a}=e,l=2*(s*n-o*i),c=2*(o*t-r*n),h=2*(r*i-s*t);return this.x=t+a*l+s*h-o*c,this.y=i+a*c+o*l-r*h,this.z=n+a*h+r*c-s*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,n=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*n,this.y=r[1]*t+r[5]*i+r[9]*n,this.z=r[2]*t+r[6]*i+r[10]*n,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=lt(this.x,e.x,t.x),this.y=lt(this.y,e.y,t.y),this.z=lt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=lt(this.x,e,t),this.y=lt(this.y,e,t),this.z=lt(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(lt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let{x:i,y:n,z:r}=e,{x:s,y:o,z:a}=t;return this.x=n*a-r*o,this.y=r*s-i*a,this.z=i*o-n*s,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return wf.copy(this).projectOnVector(e),this.sub(wf)}reflect(e){return this.sub(wf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(lt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,n=this.z-e.z;return t*t+i*i+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let n=Math.sin(t)*e;return this.x=n*Math.sin(i),this.y=Math.cos(t)*e,this.z=n*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),n=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=n,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}var wf=new R,lp=new oi;class st{static{this.prototype.isMatrix3=!0}constructor(e,t,i,n,r,s,o,a,l){if(this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0)this.set(e,t,i,n,r,s,o,a,l)}set(e,t,i,n,r,s,o,a,l){let c=this.elements;return c[0]=e,c[1]=n,c[2]=o,c[3]=t,c[4]=r,c[5]=a,c[6]=i,c[7]=s,c[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,n=t.elements,r=this.elements,s=i[0],o=i[3],a=i[6],l=i[1],c=i[4],h=i[7],u=i[2],f=i[5],m=i[8],g=n[0],x=n[3],d=n[6],p=n[1],y=n[4],M=n[7],b=n[2],v=n[5],T=n[8];return r[0]=s*g+o*p+a*b,r[3]=s*x+o*y+a*v,r[6]=s*d+o*M+a*T,r[1]=l*g+c*p+h*b,r[4]=l*x+c*y+h*v,r[7]=l*d+c*M+h*T,r[2]=u*g+f*p+m*b,r[5]=u*x+f*y+m*v,r[8]=u*d+f*M+m*T,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],n=e[2],r=e[3],s=e[4],o=e[5],a=e[6],l=e[7],c=e[8];return t*s*c-t*o*l-i*r*c+i*o*a+n*r*l-n*s*a}invert(){let e=this.elements,t=e[0],i=e[1],n=e[2],r=e[3],s=e[4],o=e[5],a=e[6],l=e[7],c=e[8],h=c*s-o*l,u=o*a-c*r,f=l*r-s*a,m=t*h+i*u+n*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let g=1/m;return e[0]=h*g,e[1]=(n*l-c*i)*g,e[2]=(o*i-n*s)*g,e[3]=u*g,e[4]=(c*t-n*a)*g,e[5]=(n*r-o*t)*g,e[6]=f*g,e[7]=(i*a-l*t)*g,e[8]=(s*t-i*r)*g,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,n,r,s,o){let a=Math.cos(r),l=Math.sin(r);return this.set(i*a,i*l,-i*(a*s+l*o)+s+e,-n*l,n*a,-n*(-l*s+a*o)+o+t,0,0,1),this}scale(e,t){return Wn("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Af.makeScale(e,t)),this}rotate(e){return Wn("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Af.makeRotation(-e)),this}translate(e,t){return Wn("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Af.makeTranslation(e,t)),this}makeTranslation(e,t){if(e.isVector2)this.set(1,0,e.x,0,1,e.y,0,0,1);else this.set(1,0,e,0,1,t,0,0,1);return this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let n=0;n<9;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}var Af=new st;var cp=new st().set(0.4123908,0.3575843,0.1804808,0.212639,0.7151687,0.0721923,0.0193308,0.1191948,0.9505322),hp=new st().set(3.2409699,-1.5373832,-0.4986108,-0.9692436,1.8759675,0.0415551,0.0556301,-0.203977,1.0569715);function k1(){let e={enabled:!0,workingColorSpace:Ki,spaces:{},convert:function(r,s,o){if(this.enabled===!1||s===o||!s||!o)return r;if(this.spaces[s].transfer===Tt)r.r=sr(r.r),r.g=sr(r.g),r.b=sr(r.b);if(this.spaces[s].primaries!==this.spaces[o].primaries)r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ);if(this.spaces[o].transfer===Tt)r.r=ks(r.r),r.g=ks(r.g),r.b=ks(r.b);return r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){if(r===Vn)return zs;return this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[o].fromXYZ).multiply(this.spaces[s].toXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}},t=[0.64,0.33,0.3,0.6,0.15,0.06],i=[0.2126,0.7152,0.0722],n=[0.3127,0.329];return e.define({[Ki]:{primaries:t,whitePoint:n,transfer:zs,toXYZ:cp,fromXYZ:hp,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:_t},outputColorSpaceConfig:{drawingBufferColorSpace:_t}},[_t]:{primaries:t,whitePoint:n,transfer:Tt,toXYZ:cp,fromXYZ:hp,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:_t}}}),e}var ht=k1();function sr(e){return e<0.04045?e*0.0773993808:Math.pow(e*0.9478672986+0.0521327014,2.4)}function ks(e){return e<0.0031308?e*12.92:1.055*Math.pow(e,0.41666)-0.055}var Ho;class Yc{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src))return e.src;if(typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{if(Ho===void 0)Ho=as("canvas");Ho.width=e.width,Ho.height=e.height;let n=Ho.getContext("2d");if(e instanceof ImageData)n.putImageData(e,0,0);else n.drawImage(e,0,0,e.width,e.height);i=Ho}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=as("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let n=i.getImageData(0,0,e.width,e.height),r=n.data;for(let s=0;s<r.length;s++)r[s]=sr(r[s]/255)*255;return i.putImageData(n,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)if(t instanceof Uint8Array||t instanceof Uint8ClampedArray)t[i]=Math.floor(sr(t[i]/255)*255);else t[i]=sr(t[i]);return{data:t,width:e.width,height:e.height}}else return Te("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}var V1=0;class xr{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:V1++}),this.uuid=vi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;if(typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement)e.set(t.videoWidth,t.videoHeight,0);else if(typeof VideoFrame<"u"&&t instanceof VideoFrame)e.set(t.displayWidth,t.displayHeight,0);else if(t!==null)e.set(t.width||0,t.height||0,t.depth||0);else e.set(0,0,0);return e}set needsUpdate(e){if(e===!0)this.version++}toJSON(e){let t=e===void 0||typeof e==="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let r;if(Array.isArray(n)){r=[];for(let s=0,o=n.length;s<o;s++)if(n[s].isDataTexture)r.push(Rf(n[s].image));else r.push(Rf(n[s]))}else r=Rf(n);i.url=r}if(!t)e.images[this.uuid]=i;return i}}function Rf(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap)return Yc.getDataURL(e);else if(e.data)return{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name};else return Te("Texture: Unable to serialize Texture."),{}}var W1=0,Cf=new R;class Lt extends Di{constructor(e=Lt.DEFAULT_IMAGE,t=Lt.DEFAULT_MAPPING,i=Ii,n=Ii,r=qt,s=Hi,o=Li,a=Mi,l=Lt.DEFAULT_ANISOTROPY,c=Vn){super();this.isTexture=!0,Object.defineProperty(this,"id",{value:W1++}),this.uuid=vi(),this.name="",this.source=new xr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=r,this.minFilter=s,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=a,this.offset=new Z(0,0),this.repeat=new Z(1,1),this.center=new Z(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new st,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=e&&e.depth&&e.depth>1?!0:!1,this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Cf).x}get height(){return this.source.getSize(Cf).y}get depth(){return this.source.getSize(Cf).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){Te(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let n=this[t];if(n===void 0){Te(`Texture.setValues(): property '${t}' does not exist.`);continue}if(n&&i&&(n.isVector2&&i.isVector2))n.copy(i);else if(n&&i&&(n.isVector3&&i.isVector3))n.copy(i);else if(n&&i&&(n.isMatrix3&&i.isMatrix3))n.copy(i);else this[t]=i}}toJSON(e){let t=e===void 0||typeof e==="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(Object.keys(this.userData).length>0)i.userData=this.userData;if(!t)e.textures[this.uuid]=i;return i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ac)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case pn:e.x=e.x-Math.floor(e.x);break;case Ii:e.x=e.x<0?0:1;break;case ss:if(Math.abs(Math.floor(e.x)%2)===1)e.x=Math.ceil(e.x)-e.x;else e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case pn:e.y=e.y-Math.floor(e.y);break;case Ii:e.y=e.y<0?0:1;break;case ss:if(Math.abs(Math.floor(e.y)%2)===1)e.y=Math.ceil(e.y)-e.y;else e.y=e.y-Math.floor(e.y);break}if(this.flipY)e.y=1-e.y;return e}set needsUpdate(e){if(e===!0)this.version++,this.source.needsUpdate=!0}set needsPMREMUpdate(e){if(e===!0)this.pmremVersion++}}Lt.DEFAULT_IMAGE=null;Lt.DEFAULT_MAPPING=Ac;Lt.DEFAULT_ANISOTROPY=1;class Et{static{this.prototype.isVector4=!0}constructor(e=0,t=0,i=0,n=1){this.x=e,this.y=t,this.z=i,this.w=n}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,n){return this.x=e,this.y=t,this.z=i,this.w=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,n=this.z,r=this.w,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*n+s[12]*r,this.y=s[1]*t+s[5]*i+s[9]*n+s[13]*r,this.z=s[2]*t+s[6]*i+s[10]*n+s[14]*r,this.w=s[3]*t+s[7]*i+s[11]*n+s[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);if(t<0.0001)this.x=1,this.y=0,this.z=0;else this.x=e.x/t,this.y=e.y/t,this.z=e.z/t;return this}setAxisAngleFromRotationMatrix(e){let t,i,n,r,s=0.01,o=0.1,a=e.elements,l=a[0],c=a[4],h=a[8],u=a[1],f=a[5],m=a[9],g=a[2],x=a[6],d=a[10];if(Math.abs(c-u)<0.01&&Math.abs(h-g)<0.01&&Math.abs(m-x)<0.01){if(Math.abs(c+u)<0.1&&Math.abs(h+g)<0.1&&Math.abs(m+x)<0.1&&Math.abs(l+f+d-3)<0.1)return this.set(1,0,0,0),this;t=Math.PI;let y=(l+1)/2,M=(f+1)/2,b=(d+1)/2,v=(c+u)/4,T=(h+g)/4,_=(m+x)/4;if(y>M&&y>b)if(y<0.01)i=0,n=0.707106781,r=0.707106781;else i=Math.sqrt(y),n=v/i,r=T/i;else if(M>b)if(M<0.01)i=0.707106781,n=0,r=0.707106781;else n=Math.sqrt(M),i=v/n,r=_/n;else if(b<0.01)i=0.707106781,n=0.707106781,r=0;else r=Math.sqrt(b),i=T/r,n=_/r;return this.set(i,n,r,t),this}let p=Math.sqrt((x-m)*(x-m)+(h-g)*(h-g)+(u-c)*(u-c));if(Math.abs(p)<0.001)p=1;return this.x=(x-m)/p,this.y=(h-g)/p,this.z=(u-c)/p,this.w=Math.acos((l+f+d-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=lt(this.x,e.x,t.x),this.y=lt(this.y,e.y,t.y),this.z=lt(this.z,e.z,t.z),this.w=lt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=lt(this.x,e,t),this.y=lt(this.y,e,t),this.z=lt(this.z,e,t),this.w=lt(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(lt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class yl extends Di{constructor(e=1,t=1,i={}){super();i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:qt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Et(0,0,e,t),this.scissorTest=!1,this.viewport=new Et(0,0,e,t),this.textures=[];let n=i.count;for(let r=0;r<n;r++)this.textures[r]=new Lt({width:e,height:t,depth:i.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:qt,generateMipmaps:!1,flipY:!1,internalFormat:null};if(e.mapping!==void 0)t.mapping=e.mapping;if(e.wrapS!==void 0)t.wrapS=e.wrapS;if(e.wrapT!==void 0)t.wrapT=e.wrapT;if(e.wrapR!==void 0)t.wrapR=e.wrapR;if(e.magFilter!==void 0)t.magFilter=e.magFilter;if(e.minFilter!==void 0)t.minFilter=e.minFilter;if(e.format!==void 0)t.format=e.format;if(e.type!==void 0)t.type=e.type;if(e.anisotropy!==void 0)t.anisotropy=e.anisotropy;if(e.colorSpace!==void 0)t.colorSpace=e.colorSpace;if(e.flipY!==void 0)t.flipY=e.flipY;if(e.generateMipmaps!==void 0)t.generateMipmaps=e.generateMipmaps;if(e.mipmapsAutoUpdate!==void 0)t.mipmapsAutoUpdate=e.mipmapsAutoUpdate;if(e.internalFormat!==void 0)t.internalFormat=e.internalFormat;for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){if(this._depthTexture!==null&&this._depthTexture.renderTarget===this)this._depthTexture.renderTarget=null;if(e!==null&&e.renderTarget===null)e.renderTarget=this;this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let n=0,r=this.textures.length;n<r;n++)if(this.textures[n].image.width=e,this.textures[n].image.height=t,this.textures[n].image.depth=i,this.textures[n].isData3DTexture!==!0)this.textures[n].isArrayTexture=this.textures[n].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new xr(n)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ii extends yl{constructor(e=1,t=1,i={}){super(e,t,i);this.isWebGLRenderTarget=!0}}class Vs extends Lt{constructor(e=null,t=1,i=1,n=1){super(null);this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=Xt,this.minFilter=Xt,this.wrapR=Ii,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class zo extends Lt{constructor(e=null,t=1,i=1,n=1){super(null);this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=Xt,this.minFilter=Xt,this.wrapR=Ii,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}class Ge{static{this.prototype.isMatrix4=!0}constructor(e,t,i,n,r,s,o,a,l,c,h,u,f,m,g,x){if(this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0)this.set(e,t,i,n,r,s,o,a,l,c,h,u,f,m,g,x)}set(e,t,i,n,r,s,o,a,l,c,h,u,f,m,g,x){let d=this.elements;return d[0]=e,d[4]=t,d[8]=i,d[12]=n,d[1]=r,d[5]=s,d[9]=o,d[13]=a,d[2]=l,d[6]=c,d[10]=h,d[14]=u,d[3]=f,d[7]=m,d[11]=g,d[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ge().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){if(this.determinantAffine()===0)return e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this;return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,i=e.elements,n=1/Go.setFromMatrixColumn(e,0).length(),r=1/Go.setFromMatrixColumn(e,1).length(),s=1/Go.setFromMatrixColumn(e,2).length();return t[0]=i[0]*n,t[1]=i[1]*n,t[2]=i[2]*n,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*s,t[9]=i[9]*s,t[10]=i[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,{x:i,y:n,z:r}=e,s=Math.cos(i),o=Math.sin(i),a=Math.cos(n),l=Math.sin(n),c=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){let u=s*c,f=s*h,m=o*c,g=o*h;t[0]=a*c,t[4]=-a*h,t[8]=l,t[1]=f+m*l,t[5]=u-g*l,t[9]=-o*a,t[2]=g-u*l,t[6]=m+f*l,t[10]=s*a}else if(e.order==="YXZ"){let u=a*c,f=a*h,m=l*c,g=l*h;t[0]=u+g*o,t[4]=m*o-f,t[8]=s*l,t[1]=s*h,t[5]=s*c,t[9]=-o,t[2]=f*o-m,t[6]=g+u*o,t[10]=s*a}else if(e.order==="ZXY"){let u=a*c,f=a*h,m=l*c,g=l*h;t[0]=u-g*o,t[4]=-s*h,t[8]=m+f*o,t[1]=f+m*o,t[5]=s*c,t[9]=g-u*o,t[2]=-s*l,t[6]=o,t[10]=s*a}else if(e.order==="ZYX"){let u=s*c,f=s*h,m=o*c,g=o*h;t[0]=a*c,t[4]=m*l-f,t[8]=u*l+g,t[1]=a*h,t[5]=g*l+u,t[9]=f*l-m,t[2]=-l,t[6]=o*a,t[10]=s*a}else if(e.order==="YZX"){let u=s*a,f=s*l,m=o*a,g=o*l;t[0]=a*c,t[4]=g-u*h,t[8]=m*h+f,t[1]=h,t[5]=s*c,t[9]=-o*c,t[2]=-l*c,t[6]=f*h+m,t[10]=u-g*h}else if(e.order==="XZY"){let u=s*a,f=s*l,m=o*a,g=o*l;t[0]=a*c,t[4]=-h,t[8]=l*c,t[1]=u*h+g,t[5]=s*c,t[9]=f*h-m,t[2]=m*h-f,t[6]=o*c,t[10]=g*h+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(X1,e,Y1)}lookAt(e,t,i){let n=this.elements;if(An.subVectors(e,t),An.lengthSq()===0)An.z=1;if(An.normalize(),ls.crossVectors(i,An),ls.lengthSq()===0){if(Math.abs(i.z)===1)An.x+=0.0001;else An.z+=0.0001;An.normalize(),ls.crossVectors(i,An)}return ls.normalize(),qc.crossVectors(An,ls),n[0]=ls.x,n[4]=qc.x,n[8]=An.x,n[1]=ls.y,n[5]=qc.y,n[9]=An.y,n[2]=ls.z,n[6]=qc.z,n[10]=An.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,n=t.elements,r=this.elements,s=i[0],o=i[4],a=i[8],l=i[12],c=i[1],h=i[5],u=i[9],f=i[13],m=i[2],g=i[6],x=i[10],d=i[14],p=i[3],y=i[7],M=i[11],b=i[15],v=n[0],T=n[4],_=n[8],S=n[12],w=n[1],L=n[5],I=n[9],U=n[13],K=n[2],P=n[6],V=n[10],D=n[14],N=n[3],Q=n[7],G=n[11],z=n[15];return r[0]=s*v+o*w+a*K+l*N,r[4]=s*T+o*L+a*P+l*Q,r[8]=s*_+o*I+a*V+l*G,r[12]=s*S+o*U+a*D+l*z,r[1]=c*v+h*w+u*K+f*N,r[5]=c*T+h*L+u*P+f*Q,r[9]=c*_+h*I+u*V+f*G,r[13]=c*S+h*U+u*D+f*z,r[2]=m*v+g*w+x*K+d*N,r[6]=m*T+g*L+x*P+d*Q,r[10]=m*_+g*I+x*V+d*G,r[14]=m*S+g*U+x*D+d*z,r[3]=p*v+y*w+M*K+b*N,r[7]=p*T+y*L+M*P+b*Q,r[11]=p*_+y*I+M*V+b*G,r[15]=p*S+y*U+M*D+b*z,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],n=e[8],r=e[12],s=e[1],o=e[5],a=e[9],l=e[13],c=e[2],h=e[6],u=e[10],f=e[14],m=e[3],g=e[7],x=e[11],d=e[15],p=a*f-l*u,y=o*f-l*h,M=o*u-a*h,b=s*f-l*c,v=s*u-a*c,T=s*h-o*c;return t*(g*p-x*y+d*M)-i*(m*p-x*b+d*v)+n*(m*y-g*b+d*T)-r*(m*M-g*v+x*T)}determinantAffine(){let e=this.elements,t=e[0],i=e[4],n=e[8],r=e[1],s=e[5],o=e[9],a=e[2],l=e[6],c=e[10];return t*(s*c-o*l)-i*(r*c-o*a)+n*(r*l-s*a)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let n=this.elements;if(e.isVector3)n[12]=e.x,n[13]=e.y,n[14]=e.z;else n[12]=e,n[13]=t,n[14]=i;return this}invert(){let e=this.elements,t=e[0],i=e[1],n=e[2],r=e[3],s=e[4],o=e[5],a=e[6],l=e[7],c=e[8],h=e[9],u=e[10],f=e[11],m=e[12],g=e[13],x=e[14],d=e[15],p=t*o-i*s,y=t*a-n*s,M=t*l-r*s,b=i*a-n*o,v=i*l-r*o,T=n*l-r*a,_=c*g-h*m,S=c*x-u*m,w=c*d-f*m,L=h*x-u*g,I=h*d-f*g,U=u*d-f*x,K=p*U-y*I+M*L+b*w-v*S+T*_;if(K===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let P=1/K;return e[0]=(o*U-a*I+l*L)*P,e[1]=(n*I-i*U-r*L)*P,e[2]=(g*T-x*v+d*b)*P,e[3]=(u*v-h*T-f*b)*P,e[4]=(a*w-s*U-l*S)*P,e[5]=(t*U-n*w+r*S)*P,e[6]=(x*M-m*T-d*y)*P,e[7]=(c*T-u*M+f*y)*P,e[8]=(s*I-o*w+l*_)*P,e[9]=(i*w-t*I-r*_)*P,e[10]=(m*v-g*M+d*p)*P,e[11]=(h*M-c*v-f*p)*P,e[12]=(o*S-s*L-a*_)*P,e[13]=(t*L-i*S+n*_)*P,e[14]=(g*y-m*b-x*p)*P,e[15]=(c*b-h*y+u*p)*P,this}scale(e){let t=this.elements,{x:i,y:n,z:r}=e;return t[0]*=i,t[4]*=n,t[8]*=r,t[1]*=i,t[5]*=n,t[9]*=r,t[2]*=i,t[6]*=n,t[10]*=r,t[3]*=i,t[7]*=n,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],n=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,n))}makeTranslation(e,t,i){if(e.isVector3)this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1);else this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1);return this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),n=Math.sin(t),r=1-i,{x:s,y:o,z:a}=e,l=r*s,c=r*o;return this.set(l*s+i,l*o-n*a,l*a+n*o,0,l*o+n*a,c*o+i,c*a-n*s,0,l*a-n*o,c*a+n*s,r*a*a+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,n,r,s){return this.set(1,i,r,0,e,1,s,0,t,n,1,0,0,0,0,1),this}compose(e,t,i){let n=this.elements,{_x:r,_y:s,_z:o,_w:a}=t,l=r+r,c=s+s,h=o+o,u=r*l,f=r*c,m=r*h,g=s*c,x=s*h,d=o*h,p=a*l,y=a*c,M=a*h,{x:b,y:v,z:T}=i;return n[0]=(1-(g+d))*b,n[1]=(f+M)*b,n[2]=(m-y)*b,n[3]=0,n[4]=(f-M)*v,n[5]=(1-(u+d))*v,n[6]=(x+p)*v,n[7]=0,n[8]=(m+y)*T,n[9]=(x-p)*T,n[10]=(1-(u+g))*T,n[11]=0,n[12]=e.x,n[13]=e.y,n[14]=e.z,n[15]=1,this}decompose(e,t,i){let n=this.elements;e.x=n[12],e.y=n[13],e.z=n[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),t.identity(),this;let s=Go.set(n[0],n[1],n[2]).length(),o=Go.set(n[4],n[5],n[6]).length(),a=Go.set(n[8],n[9],n[10]).length();if(r<0)s=-s;or.copy(this);let l=1/s,c=1/o,h=1/a;return or.elements[0]*=l,or.elements[1]*=l,or.elements[2]*=l,or.elements[4]*=c,or.elements[5]*=c,or.elements[6]*=c,or.elements[8]*=h,or.elements[9]*=h,or.elements[10]*=h,t.setFromRotationMatrix(or),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,n,r,s,o=zi,a=!1){let l=this.elements,c=2*r/(t-e),h=2*r/(i-n),u=(t+e)/(t-e),f=(i+n)/(i-n),m,g;if(a)m=r/(s-r),g=s*r/(s-r);else if(o===zi)m=-(s+r)/(s-r),g=-2*s*r/(s-r);else if(o===gr)m=-s/(s-r),g=-s*r/(s-r);else throw Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,n,r,s,o=zi,a=!1){let l=this.elements,c=2/(t-e),h=2/(i-n),u=-(t+e)/(t-e),f=-(i+n)/(i-n),m,g;if(a)m=1/(s-r),g=s/(s-r);else if(o===zi)m=-2/(s-r),g=-(s+r)/(s-r);else if(o===gr)m=-1/(s-r),g=-r/(s-r);else throw Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=0,l[12]=u,l[1]=0,l[5]=h,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let n=0;n<16;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}var Go=new R,or=new Ge,X1=new R(0,0,0),Y1=new R(1,1,1),ls=new R,qc=new R,An=new R;var fp=new Ge,up=new oi;class an{constructor(e=0,t=0,i=0,n=an.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=n}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,n=this._order){return this._x=e,this._y=t,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let n=e.elements,r=n[0],s=n[4],o=n[8],a=n[1],l=n[5],c=n[9],h=n[2],u=n[6],f=n[10];switch(t){case"XYZ":if(this._y=Math.asin(lt(o,-1,1)),Math.abs(o)<0.9999999)this._x=Math.atan2(-c,f),this._z=Math.atan2(-s,r);else this._x=Math.atan2(u,l),this._z=0;break;case"YXZ":if(this._x=Math.asin(-lt(c,-1,1)),Math.abs(c)<0.9999999)this._y=Math.atan2(o,f),this._z=Math.atan2(a,l);else this._y=Math.atan2(-h,r),this._z=0;break;case"ZXY":if(this._x=Math.asin(lt(u,-1,1)),Math.abs(u)<0.9999999)this._y=Math.atan2(-h,f),this._z=Math.atan2(-s,l);else this._y=0,this._z=Math.atan2(a,r);break;case"ZYX":if(this._y=Math.asin(-lt(h,-1,1)),Math.abs(h)<0.9999999)this._x=Math.atan2(u,f),this._z=Math.atan2(a,r);else this._x=0,this._z=Math.atan2(-s,l);break;case"YZX":if(this._z=Math.asin(lt(a,-1,1)),Math.abs(a)<0.9999999)this._x=Math.atan2(-c,l),this._y=Math.atan2(-h,r);else this._x=0,this._y=Math.atan2(o,f);break;case"XZY":if(this._z=Math.asin(-lt(s,-1,1)),Math.abs(s)<0.9999999)this._x=Math.atan2(u,l),this._y=Math.atan2(o,r);else this._x=Math.atan2(-c,f),this._y=0;break;default:Te("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}if(this._order=t,i===!0)this._onChangeCallback();return this}setFromQuaternion(e,t,i){return fp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(fp,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return up.setFromEuler(this),this.setFromQuaternion(up,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){if(this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0)this._order=e[3];return this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}an.DEFAULT_ORDER="XYZ";class cs{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}var q1=0,dp=new R,ko=new oi,Br=new Ge,Zc=new R,Ml=new R,Z1=new R,K1=new oi,pp=new R(1,0,0),mp=new R(0,1,0),gp=new R(0,0,1),xp={type:"added"},J1={type:"removed"},Vo={type:"childadded",child:null},If={type:"childremoved",child:null};class ct extends Di{constructor(){super();this.isObject3D=!0,Object.defineProperty(this,"id",{value:q1++}),this.uuid=vi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ct.DEFAULT_UP.clone();let e=new R,t=new an,i=new oi,n=new R(1,1,1);function r(){i.setFromEuler(t,!1)}function s(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new Ge},normalMatrix:{value:new st}}),this.matrix=new Ge,this.matrixWorld=new Ge,this.matrixAutoUpdate=ct.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ct.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new cs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null)this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ko.setFromAxisAngle(e,t),this.quaternion.multiply(ko),this}rotateOnWorldAxis(e,t){return ko.setFromAxisAngle(e,t),this.quaternion.premultiply(ko),this}rotateX(e){return this.rotateOnAxis(pp,e)}rotateY(e){return this.rotateOnAxis(mp,e)}rotateZ(e){return this.rotateOnAxis(gp,e)}translateOnAxis(e,t){return dp.copy(e).applyQuaternion(this.quaternion),this.position.add(dp.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(pp,e)}translateY(e){return this.translateOnAxis(mp,e)}translateZ(e){return this.translateOnAxis(gp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Br.copy(this.matrixWorld).invert())}lookAt(e,t,i){if(e.isVector3)Zc.copy(e);else Zc.set(e,t,i);let n=this.parent;if(this.updateWorldMatrix(!0,!1),Ml.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight)Br.lookAt(Ml,Zc,this.up);else Br.lookAt(Zc,Ml,this.up);if(this.quaternion.setFromRotationMatrix(Br),n)Br.extractRotation(n.matrixWorld),ko.setFromRotationMatrix(Br),this.quaternion.premultiply(ko.invert())}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}if(e===this)return Ye("Object3D.add: object can't be added as a child of itself.",e),this;if(e&&e.isObject3D)e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(xp),Vo.child=e,this.dispatchEvent(Vo),Vo.child=null;else Ye("Object3D.add: object not an instance of THREE.Object3D.",e);return this}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);if(t!==-1)e.parent=null,this.children.splice(t,1),e.dispatchEvent(J1),If.child=e,this.dispatchEvent(If),If.child=null;return this}removeFromParent(){let e=this.parent;if(e!==null)e.remove(this);return this}clear(){return this.remove(...this.children)}attach(e){if(this.updateWorldMatrix(!0,!1),Br.copy(this.matrixWorld).invert(),e.parent!==null)e.parent.updateWorldMatrix(!0,!1),Br.multiply(e.parent.matrixWorld);return e.applyMatrix4(Br),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(xp),Vo.child=e,this.dispatchEvent(Vo),Vo.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,n=this.children.length;i<n;i++){let s=this.children[i].getObjectByProperty(e,t);if(s!==void 0)return s}return}getObjectsByProperty(e,t,i=[]){if(this[e]===t)i.push(this);let n=this.children;for(let r=0,s=n.length;r<s;r++)n[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ml,e,Z1),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ml,K1,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;if(t!==null)e(t),t.traverseAncestors(e)}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let{x:t,y:i,z:n}=e,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*n,r[13]+=i-r[1]*t-r[5]*i-r[9]*n,r[14]+=n-r[2]*t-r[6]*i-r[10]*n}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||e){if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,e=!0}let t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){let n=this.parent;if(e===!0&&n!==null)n.updateWorldMatrix(!0,!1);if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||i){if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,i=!0}if(t===!0){let r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0,i)}}toJSON(e){let t=e===void 0||typeof e==="string",i={};if(t)e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"};let n={};if(n.uuid=this.uuid,n.type=this.type,n.name=this.name,n.castShadow=this.castShadow,n.receiveShadow=this.receiveShadow,n.visible=this.visible,n.frustumCulled=this.frustumCulled,n.renderOrder=this.renderOrder,n.static=this.static,n.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0)n.userData=this.userData;if(n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.pivot!==null)n.pivot=this.pivot.toArray();if(this.morphTargetDictionary!==void 0)n.morphTargetDictionary=Object.assign({},this.morphTargetDictionary);if(this.morphTargetInfluences!==void 0)n.morphTargetInfluences=this.morphTargetInfluences.slice();if(this.isInstancedMesh){if(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null)n.instanceColor=this.instanceColor.toJSON()}if(this.isBatchedMesh){if(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.geometryInfo=this._geometryInfo.map((o)=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),n.instanceInfo=this._instanceInfo.map((o)=>({...o})),n.availableInstanceIds=this._availableInstanceIds.slice(),n.availableGeometryIds=this._availableGeometryIds.slice(),n.nextIndexStart=this._nextIndexStart,n.nextVertexStart=this._nextVertexStart,n.geometryCount=this._geometryCount,n.maxInstanceCount=this._maxInstanceCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.matricesTexture=this._matricesTexture.toJSON(e),n.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null)n.colorsTexture=this._colorsTexture.toJSON(e);if(this.boundingSphere!==null)n.boundingSphere=this.boundingSphere.toJSON();if(this.boundingBox!==null)n.boundingBox=this.boundingBox.toJSON()}function r(o,a){if(o[a.uuid]===void 0)o[a.uuid]=a.toJSON(e);return a.uuid}if(this.isScene){if(this.background){if(this.background.isColor)n.background=this.background.toJSON();else if(this.background.isTexture)n.background=this.background.toJSON(e).uuid}if(this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0)n.environment=this.environment.toJSON(e).uuid}else if(this.isMesh||this.isLine||this.isPoints){n.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let a=o.shapes;if(Array.isArray(a))for(let l=0,c=a.length;l<c;l++){let h=a[l];r(e.shapes,h)}else r(e.shapes,a)}}if(this.isSkinnedMesh){if(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0)r(e.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid}if(this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let a=0,l=this.material.length;a<l;a++)o.push(r(e.materials,this.material[a]));n.material=o}else n.material=r(e.materials,this.material);if(this.children.length>0){n.children=[];for(let o=0;o<this.children.length;o++)n.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){n.animations=[];for(let o=0;o<this.animations.length;o++){let a=this.animations[o];n.animations.push(r(e.animations,a))}}if(t){let o=s(e.geometries),a=s(e.materials),l=s(e.textures),c=s(e.images),h=s(e.shapes),u=s(e.skeletons),f=s(e.animations),m=s(e.nodes);if(o.length>0)i.geometries=o;if(a.length>0)i.materials=a;if(l.length>0)i.textures=l;if(c.length>0)i.images=c;if(h.length>0)i.shapes=h;if(u.length>0)i.skeletons=u;if(f.length>0)i.animations=f;if(m.length>0)i.nodes=m}return i.object=n,i;function s(o){let a=[];for(let l in o){let c=o[l];delete c.metadata,a.push(c)}return a}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let n=e.children[i];this.add(n.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}ct.DEFAULT_UP=new R(0,1,0);ct.DEFAULT_MATRIX_AUTO_UPDATE=!0;ct.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Ze extends ct{constructor(){super();this.isGroup=!0,this.type="Group"}}var j1={type:"move"};class Wo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){if(this._hand===null)this._hand=new Ze,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1};return this._hand}getTargetRaySpace(){if(this._targetRay===null)this._targetRay=new Ze,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R;return this._targetRay}getGripSpace(){if(this._grip===null)this._grip=new Ze,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R,this._grip.eventsEnabled=!1;return this._grip}dispatchEvent(e){if(this._targetRay!==null)this._targetRay.dispatchEvent(e);if(this._grip!==null)this._grip.dispatchEvent(e);if(this._hand!==null)this._hand.dispatchEvent(e);return this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){if(this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null)this._targetRay.visible=!1;if(this._grip!==null)this._grip.visible=!1;if(this._hand!==null)this._hand.visible=!1;return this}update(e,t,i){let n=null,r=null,s=null,o=this._targetRay,a=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){s=!0;for(let g of e.hand.values()){let x=t.getJointPose(g,i),d=this._getHandJoint(l,g);if(x!==null)d.matrix.fromArray(x.transform.matrix),d.matrix.decompose(d.position,d.quaternion,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=x.radius;d.visible=x!==null}let c=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],u=c.position.distanceTo(h.position),f=0.02,m=0.005;if(l.inputState.pinching&&u>f+m)l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this});else if(!l.inputState.pinching&&u<=f-m)l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this})}else if(a!==null&&e.gripSpace){if(r=t.getPose(e.gripSpace,i),r!==null){if(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity)a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity);else a.hasLinearVelocity=!1;if(r.angularVelocity)a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity);else a.hasAngularVelocity=!1;if(a.eventsEnabled)a.dispatchEvent({type:"gripUpdated",data:e,target:this})}}if(o!==null){if(n=t.getPose(e.targetRaySpace,i),n===null&&r!==null)n=r;if(n!==null){if(o.matrix.fromArray(n.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,n.linearVelocity)o.hasLinearVelocity=!0,o.linearVelocity.copy(n.linearVelocity);else o.hasLinearVelocity=!1;if(n.angularVelocity)o.hasAngularVelocity=!0,o.angularVelocity.copy(n.angularVelocity);else o.hasAngularVelocity=!1;this.dispatchEvent(j1)}}}if(o!==null)o.visible=n!==null;if(a!==null)a.visible=r!==null;if(l!==null)l.visible=s!==null;return this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new Ze;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}var _p={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},hs={h:0,s:0,l:0},Kc={h:0,s:0,l:0};function Pf(e,t,i){if(i<0)i+=1;if(i>1)i-=1;if(i<0.16666666666666666)return e+(t-e)*6*i;if(i<0.5)return t;if(i<0.6666666666666666)return e+(t-e)*6*(0.6666666666666666-i);return e}class ge{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let n=e;if(n&&n.isColor)this.copy(n);else if(typeof n==="number")this.setHex(n);else if(typeof n==="string")this.setStyle(n)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=_t){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ht.colorSpaceToWorking(this,t),this}setRGB(e,t,i,n=ht.workingColorSpace){return this.r=e,this.g=t,this.b=i,ht.colorSpaceToWorking(this,n),this}setHSL(e,t,i,n=ht.workingColorSpace){if(e=Wc(e,1),t=lt(t,0,1),i=lt(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=0.5?i*(1+t):i+t-i*t,s=2*i-r;this.r=Pf(s,r,e+0.3333333333333333),this.g=Pf(s,r,e),this.b=Pf(s,r,e-0.3333333333333333)}return ht.colorSpaceToWorking(this,n),this}setStyle(e,t=_t){function i(r){if(r===void 0)return;if(parseFloat(r)<1)Te("Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,s=n[1],o=n[2];switch(s){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Te("Color: Unknown color model "+e)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=n[1],s=r.length;if(s===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);else if(s===6)return this.setHex(parseInt(r,16),t);else Te("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=_t){let i=_p[e.toLowerCase()];if(i!==void 0)this.setHex(i,t);else Te("Color: Unknown color "+e);return this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=sr(e.r),this.g=sr(e.g),this.b=sr(e.b),this}copyLinearToSRGB(e){return this.r=ks(e.r),this.g=ks(e.g),this.b=ks(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=_t){return ht.workingToColorSpace(ln.copy(this),e),Math.round(lt(ln.r*255,0,255))*65536+Math.round(lt(ln.g*255,0,255))*256+Math.round(lt(ln.b*255,0,255))}getHexString(e=_t){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ht.workingColorSpace){ht.workingToColorSpace(ln.copy(this),t);let{r:i,g:n,b:r}=ln,s=Math.max(i,n,r),o=Math.min(i,n,r),a,l,c=(o+s)/2;if(o===s)a=0,l=0;else{let h=s-o;switch(l=c<=0.5?h/(s+o):h/(2-s-o),s){case i:a=(n-r)/h+(n<r?6:0);break;case n:a=(r-i)/h+2;break;case r:a=(i-n)/h+4;break}a/=6}return e.h=a,e.s=l,e.l=c,e}getRGB(e,t=ht.workingColorSpace){return ht.workingToColorSpace(ln.copy(this),t),e.r=ln.r,e.g=ln.g,e.b=ln.b,e}getStyle(e=_t){ht.workingToColorSpace(ln.copy(this),e);let{r:t,g:i,b:n}=ln;if(e!==_t)return`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`;return`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(e,t,i){return this.getHSL(hs),this.setHSL(hs.h+e,hs.s+t,hs.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(hs),e.getHSL(Kc);let i=Bo(hs.h,Kc.h,t),n=Bo(hs.s,Kc.s,t),r=Bo(hs.l,Kc.l,t);return this.setHSL(i,n,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,n=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*n,this.g=r[1]*t+r[4]*i+r[7]*n,this.b=r[2]*t+r[5]*i+r[8]*n,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}var ln=new ge;ge.NAMES=_p;class Xo{constructor(e,t=1,i=1000){this.isFog=!0,this.name="",this.color=new ge(e),this.near=t,this.far=i}clone(){return new Xo(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Ws extends ct{constructor(){super();if(this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new an,this.environmentIntensity=1,this.environmentRotation=new an,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);if(this.fog!==null)t.object.fog=this.fog.toJSON();return t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}var ar=new R,Or=new R,Lf=new R,Hr=new R,Yo=new R,qo=new R,yp=new R,Df=new R,Nf=new R,Ff=new R,Uf=new Et,Bf=new Et,Of=new Et;class Ji{constructor(e=new R,t=new R,i=new R){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,n){n.subVectors(i,t),ar.subVectors(e,t),n.cross(ar);let r=n.lengthSq();if(r>0)return n.multiplyScalar(1/Math.sqrt(r));return n.set(0,0,0)}static getBarycoord(e,t,i,n,r){ar.subVectors(n,t),Or.subVectors(i,t),Lf.subVectors(e,t);let s=ar.dot(ar),o=ar.dot(Or),a=ar.dot(Lf),l=Or.dot(Or),c=Or.dot(Lf),h=s*l-o*o;if(h===0)return r.set(0,0,0),null;let u=1/h,f=(l*a-o*c)*u,m=(s*c-o*a)*u;return r.set(1-f-m,m,f)}static containsPoint(e,t,i,n){if(this.getBarycoord(e,t,i,n,Hr)===null)return!1;return Hr.x>=0&&Hr.y>=0&&Hr.x+Hr.y<=1}static getInterpolation(e,t,i,n,r,s,o,a){if(this.getBarycoord(e,t,i,n,Hr)===null){if(a.x=0,a.y=0,"z"in a)a.z=0;if("w"in a)a.w=0;return null}return a.setScalar(0),a.addScaledVector(r,Hr.x),a.addScaledVector(s,Hr.y),a.addScaledVector(o,Hr.z),a}static getInterpolatedAttribute(e,t,i,n,r,s){return Uf.setScalar(0),Bf.setScalar(0),Of.setScalar(0),Uf.fromBufferAttribute(e,t),Bf.fromBufferAttribute(e,i),Of.fromBufferAttribute(e,n),s.setScalar(0),s.addScaledVector(Uf,r.x),s.addScaledVector(Bf,r.y),s.addScaledVector(Of,r.z),s}static isFrontFacing(e,t,i,n){return ar.subVectors(i,t),Or.subVectors(e,t),ar.cross(Or).dot(n)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,n){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[n]),this}setFromAttributeAndIndices(e,t,i,n){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ar.subVectors(this.c,this.b),Or.subVectors(this.a,this.b),ar.cross(Or).length()*0.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(0.3333333333333333)}getNormal(e){return Ji.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ji.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,n,r){return Ji.getInterpolation(e,this.a,this.b,this.c,t,i,n,r)}containsPoint(e){return Ji.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ji.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,n=this.b,r=this.c,s,o;Yo.subVectors(n,i),qo.subVectors(r,i),Df.subVectors(e,i);let a=Yo.dot(Df),l=qo.dot(Df);if(a<=0&&l<=0)return t.copy(i);Nf.subVectors(e,n);let c=Yo.dot(Nf),h=qo.dot(Nf);if(c>=0&&h<=c)return t.copy(n);let u=a*h-c*l;if(u<=0&&a>=0&&c<=0&&a-c>0)return s=a/(a-c),t.copy(i).addScaledVector(Yo,s);Ff.subVectors(e,r);let f=Yo.dot(Ff),m=qo.dot(Ff);if(m>=0&&f<=m)return t.copy(r);let g=f*l-a*m;if(g<=0&&l>=0&&m<=0)return o=l/(l-m),t.copy(i).addScaledVector(qo,o);let x=c*m-f*h;if(x<=0&&h-c>=0&&f-m>=0)return yp.subVectors(r,n),o=(h-c)/(h-c+(f-m)),t.copy(n).addScaledVector(yp,o);let d=1/(x+g+u);return s=g*d,o=u*d,t.copy(i).addScaledVector(Yo,s).addScaledVector(qo,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Si{constructor(e=new R(1/0,1/0,1/0),t=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(lr.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(lr.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=lr.copy(t).multiplyScalar(0.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(0.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let s=0,o=r.count;s<o;s++){if(e.isMesh===!0)e.getVertexPosition(s,lr);else lr.fromBufferAttribute(r,s);lr.applyMatrix4(e.matrixWorld),this.expandByPoint(lr)}else{if(e.boundingBox!==void 0){if(e.boundingBox===null)e.computeBoundingBox();Jc.copy(e.boundingBox)}else{if(i.boundingBox===null)i.computeBoundingBox();Jc.copy(i.boundingBox)}Jc.applyMatrix4(e.matrixWorld),this.union(Jc)}}let n=e.children;for(let r=0,s=n.length;r<s;r++)this.expandByObject(n[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,lr),lr.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;if(e.normal.x>0)t=e.normal.x*this.min.x,i=e.normal.x*this.max.x;else t=e.normal.x*this.max.x,i=e.normal.x*this.min.x;if(e.normal.y>0)t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y;else t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y;if(e.normal.z>0)t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z;else t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z;return t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(vl),jc.subVectors(this.max,vl),Zo.subVectors(e.a,vl),Ko.subVectors(e.b,vl),Jo.subVectors(e.c,vl),fs.subVectors(Ko,Zo),us.subVectors(Jo,Ko),Xs.subVectors(Zo,Jo);let t=[0,-fs.z,fs.y,0,-us.z,us.y,0,-Xs.z,Xs.y,fs.z,0,-fs.x,us.z,0,-us.x,Xs.z,0,-Xs.x,-fs.y,fs.x,0,-us.y,us.x,0,-Xs.y,Xs.x,0];if(!Hf(t,Zo,Ko,Jo,jc))return!1;if(t=[1,0,0,0,1,0,0,0,1],!Hf(t,Zo,Ko,Jo,jc))return!1;return $c.crossVectors(fs,us),t=[$c.x,$c.y,$c.z],Hf(t,Zo,Ko,Jo,jc)}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,lr).distanceTo(e)}getBoundingSphere(e){if(this.isEmpty())e.makeEmpty();else this.getCenter(e.center),e.radius=this.getSize(lr).length()*0.5;return e}intersect(e){if(this.min.max(e.min),this.max.min(e.max),this.isEmpty())this.makeEmpty();return this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){if(this.isEmpty())return this;return zr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),zr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),zr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),zr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),zr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),zr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),zr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),zr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(zr),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}var zr=[new R,new R,new R,new R,new R,new R,new R,new R],lr=new R,Jc=new Si,Zo=new R,Ko=new R,Jo=new R,fs=new R,us=new R,Xs=new R,vl=new R,jc=new R,$c=new R,Ys=new R;function Hf(e,t,i,n,r){for(let s=0,o=e.length-3;s<=o;s+=3){Ys.fromArray(e,s);let a=r.x*Math.abs(Ys.x)+r.y*Math.abs(Ys.y)+r.z*Math.abs(Ys.z),l=t.dot(Ys),c=i.dot(Ys),h=n.dot(Ys);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var wi=new R,Qc=new Z,$1=0;class Zt extends Di{constructor(e,t,i=!1){super();if(Array.isArray(e))throw TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:$1++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=gl,this.updateRanges=[],this.gpuType=gi,this.version=0,this._normalizationScale=e!==void 0?Oo(e):void 0}onUploadCallback(){}set needsUpdate(e){if(e===!0)this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let n=0,r=this.itemSize;n<r;n++)this.array[e+n]=t.array[i+n];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Qc.fromBufferAttribute(this,t),Qc.applyMatrix3(e),this.setXY(t,Qc.x,Qc.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)wi.fromBufferAttribute(this,t),wi.applyMatrix3(e),this.setXYZ(t,wi.x,wi.y,wi.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)wi.fromBufferAttribute(this,t),wi.applyMatrix4(e),this.setXYZ(t,wi.x,wi.y,wi.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)wi.fromBufferAttribute(this,t),wi.applyNormalMatrix(e),this.setXYZ(t,wi.x,wi.y,wi.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)wi.fromBufferAttribute(this,t),wi.transformDirection(e),this.setXYZ(t,wi.x,wi.y,wi.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];if(this.normalized)i=this._denormalize(i);return i}setComponent(e,t,i){if(this.normalized)i=this._normalize(i);return this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];if(this.normalized)t=this._denormalize(t);return t}setX(e,t){if(this.normalized)t=this._normalize(t);return this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];if(this.normalized)t=this._denormalize(t);return t}setY(e,t){if(this.normalized)t=this._normalize(t);return this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];if(this.normalized)t=this._denormalize(t);return t}setZ(e,t){if(this.normalized)t=this._normalize(t);return this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];if(this.normalized)t=this._denormalize(t);return t}setW(e,t){if(this.normalized)t=this._normalize(t);return this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){if(e*=this.itemSize,this.normalized)t=this._normalize(t),i=this._normalize(i);return this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,n){if(e*=this.itemSize,this.normalized)t=this._normalize(t),i=this._normalize(i),n=this._normalize(n);return this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this}setXYZW(e,t,i,n,r){if(e*=this.itemSize,this.normalized)t=this._normalize(t),i=this._normalize(i),n=this._normalize(n),r=this._normalize(r);return this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):xl(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):_l(e,this.array)}}class Sl extends Zt{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class bl extends Zt{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Re extends Zt{constructor(e,t,i){super(new Float32Array(e),t,i)}}var Q1=new Si,Tl=new R,zf=new R;class fi{constructor(e=new R,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;if(t!==void 0)i.copy(t);else Q1.setFromPoints(e).getCenter(i);let n=0;for(let r=0,s=e.length;r<s;r++)n=Math.max(n,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(n),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);if(t.copy(e),i>this.radius*this.radius)t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center);return t}getBoundingBox(e){if(this.isEmpty())return e.makeEmpty(),e;return e.set(this.center,this.center),e.expandByScalar(this.radius),e}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Tl.subVectors(e,this.center);let t=Tl.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),n=(i-this.radius)*0.5;this.center.addScaledVector(Tl,n/i),this.radius+=n}return this}union(e){if(e.isEmpty())return this;if(this.isEmpty())return this.copy(e),this;if(this.center.equals(e.center)===!0)this.radius=Math.max(this.radius,e.radius);else zf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Tl.copy(e.center).add(zf)),this.expandByPoint(Tl.copy(e.center).sub(zf));return this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}var ey=0,Xn=new Ge,Gf=new ct,jo=new R,Rn=new Si,El=new Si,Gi=new R;class Xe extends Di{constructor(){super();this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ey++}),this.uuid=vi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){if(Array.isArray(e))this.index=new((np(e))?bl:Sl)(e,1);else this.index=e;return this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;if(t!==void 0)t.applyMatrix4(e),t.needsUpdate=!0;let i=this.attributes.normal;if(i!==void 0){let r=new st().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let n=this.attributes.tangent;if(n!==void 0)n.transformDirection(e),n.needsUpdate=!0;if(this.boundingBox!==null)this.computeBoundingBox();if(this.boundingSphere!==null)this.computeBoundingSphere();return this._transformed=!0,this}applyQuaternion(e){return Xn.makeRotationFromQuaternion(e),this.applyMatrix4(Xn),this}rotateX(e){return Xn.makeRotationX(e),this.applyMatrix4(Xn),this}rotateY(e){return Xn.makeRotationY(e),this.applyMatrix4(Xn),this}rotateZ(e){return Xn.makeRotationZ(e),this.applyMatrix4(Xn),this}translate(e,t,i){return Xn.makeTranslation(e,t,i),this.applyMatrix4(Xn),this}scale(e,t,i){return Xn.makeScale(e,t,i),this.applyMatrix4(Xn),this}lookAt(e){return Gf.lookAt(e),Gf.updateMatrix(),this.applyMatrix4(Gf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(jo).negate(),this.translate(jo.x,jo.y,jo.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let n=0,r=e.length;n<r;n++){let s=e[n];i.push(s.x,s.y,s.z||0)}this.setAttribute("position",new Re(i,3))}else{let i=Math.min(e.length,t.count);for(let n=0;n<i;n++){let r=e[n];t.setXYZ(n,r.x,r.y,r.z||0)}if(e.length>t.count)Te("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.");t.needsUpdate=!0}return this}computeBoundingBox(){if(this.boundingBox===null)this.boundingBox=new Si;let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ye("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,n=t.length;i<n;i++){let r=t[i];if(Rn.setFromBufferAttribute(r),this.morphTargetsRelative)Gi.addVectors(this.boundingBox.min,Rn.min),this.boundingBox.expandByPoint(Gi),Gi.addVectors(this.boundingBox.max,Rn.max),this.boundingBox.expandByPoint(Gi);else this.boundingBox.expandByPoint(Rn.min),this.boundingBox.expandByPoint(Rn.max)}}else this.boundingBox.makeEmpty();if(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))Ye('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){if(this.boundingSphere===null)this.boundingSphere=new fi;let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ye("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(e){let i=this.boundingSphere.center;if(Rn.setFromBufferAttribute(e),t)for(let r=0,s=t.length;r<s;r++){let o=t[r];if(El.setFromBufferAttribute(o),this.morphTargetsRelative)Gi.addVectors(Rn.min,El.min),Rn.expandByPoint(Gi),Gi.addVectors(Rn.max,El.max),Rn.expandByPoint(Gi);else Rn.expandByPoint(El.min),Rn.expandByPoint(El.max)}Rn.getCenter(i);let n=0;for(let r=0,s=e.count;r<s;r++)Gi.fromBufferAttribute(e,r),n=Math.max(n,i.distanceToSquared(Gi));if(t)for(let r=0,s=t.length;r<s;r++){let o=t[r],a=this.morphTargetsRelative;for(let l=0,c=o.count;l<c;l++){if(Gi.fromBufferAttribute(o,l),a)jo.fromBufferAttribute(e,l),Gi.add(jo);n=Math.max(n,i.distanceToSquared(Gi))}}if(this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius))Ye('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ye("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let{position:i,normal:n,uv:r}=t,s=this.getAttribute("tangent");if(s===void 0||s.count!==i.count)s=new Zt(new Float32Array(4*i.count),4),this.setAttribute("tangent",s);let o=[],a=[],l=new Uint8Array(i.count);for(let S=0;S<i.count;S++)o[S]=new R,a[S]=new R;let c=new R,h=new R,u=new R,f=new Z,m=new Z,g=new Z,x=new R,d=new R;function p(S,w,L){l[S]=l[w]=l[L]=1,c.fromBufferAttribute(i,S),h.fromBufferAttribute(i,w),u.fromBufferAttribute(i,L),f.fromBufferAttribute(r,S),m.fromBufferAttribute(r,w),g.fromBufferAttribute(r,L),h.sub(c),u.sub(c),m.sub(f),g.sub(f);let I=1/(m.x*g.y-g.x*m.y);if(!isFinite(I))return;x.copy(h).multiplyScalar(g.y).addScaledVector(u,-m.y).multiplyScalar(I),d.copy(u).multiplyScalar(m.x).addScaledVector(h,-g.x).multiplyScalar(I),o[S].add(x),o[w].add(x),o[L].add(x),a[S].add(d),a[w].add(d),a[L].add(d)}let y=this.groups;if(y.length===0)y=[{start:0,count:e.count}];for(let S=0,w=y.length;S<w;++S){let L=y[S],{start:I,count:U}=L;for(let K=I,P=I+U;K<P;K+=3)p(e.getX(K+0),e.getX(K+1),e.getX(K+2))}let M=new R,b=new R,v=new R,T=new R;function _(S){v.fromBufferAttribute(n,S),T.copy(v);let w=o[S];M.copy(w),M.sub(v.multiplyScalar(v.dot(w))).normalize(),b.crossVectors(T,w);let I=b.dot(a[S])<0?-1:1;s.setXYZW(S,M.x,M.y,M.z,I)}for(let S=0,w=i.count;S<w;++S)if(l[S])_(S);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new Zt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let u=0,f=i.count;u<f;u++)i.setXYZ(u,0,0,0);let n=new R,r=new R,s=new R,o=new R,a=new R,l=new R,c=new R,h=new R;if(e)for(let u=0,f=e.count;u<f;u+=3){let m=e.getX(u+0),g=e.getX(u+1),x=e.getX(u+2);n.fromBufferAttribute(t,m),r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,x),c.subVectors(s,r),h.subVectors(n,r),c.cross(h),o.fromBufferAttribute(i,m),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,x),o.add(c),a.add(c),l.add(c),i.setXYZ(m,o.x,o.y,o.z),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z)}else for(let u=0,f=t.count;u<f;u+=3)n.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),s.fromBufferAttribute(t,u+2),c.subVectors(s,r),h.subVectors(n,r),c.cross(h),i.setXYZ(u+0,c.x,c.y,c.z),i.setXYZ(u+1,c.x,c.y,c.z),i.setXYZ(u+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Gi.fromBufferAttribute(e,t),Gi.normalize(),e.setXYZ(t,Gi.x,Gi.y,Gi.z)}toNonIndexed(){function e(o,a){let{array:l,itemSize:c,normalized:h}=o,u=new l.constructor(a.length*c),f=0,m=0;for(let g=0,x=a.length;g<x;g++){if(o.isInterleavedBufferAttribute)f=a[g]*o.data.stride+o.offset;else f=a[g]*c;for(let d=0;d<c;d++)u[m++]=l[f++]}return new Zt(u,c,h)}if(this.index===null)return Te("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new Xe,i=this.index.array,n=this.attributes;for(let o in n){let a=n[o],l=e(a,i);t.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let a=[],l=r[o];for(let c=0,h=l.length;c<h;c++){let u=l[c],f=e(u,i);a.push(f)}t.morphAttributes[o]=a}t.morphTargetsRelative=this.morphTargetsRelative;let s=this.groups;for(let o=0,a=s.length;o<a;o++){let l=s[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0)e.userData=this.userData;if(this.parameters!==void 0&&this._transformed!==!0){let a=this.parameters;for(let l in a)if(a[l]!==void 0)e[l]=a[l];return e}e.data={attributes:{}};let t=this.index;if(t!==null)e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)};let i=this.attributes;for(let a in i){let l=i[a];e.data.attributes[a]=l.toJSON(e.data)}let n={},r=!1;for(let a in this.morphAttributes){let l=this.morphAttributes[a],c=[];for(let h=0,u=l.length;h<u;h++){let f=l[h];c.push(f.toJSON(e.data))}if(c.length>0)n[a]=c,r=!0}if(r)e.data.morphAttributes=n,e.data.morphTargetsRelative=this.morphTargetsRelative;let s=this.groups;if(s.length>0)e.data.groups=JSON.parse(JSON.stringify(s));let o=this.boundingSphere;if(o!==null)e.data.boundingSphere=o.toJSON();return e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;if(i!==null)this.setIndex(i.clone());let n=e.attributes;for(let l in n){let c=n[l];this.setAttribute(l,c.clone(t))}let r=e.morphAttributes;for(let l in r){let c=[],h=r[l];for(let u=0,f=h.length;u<f;u++)c.push(h[u].clone(t));this.morphAttributes[l]=c}this.morphTargetsRelative=e.morphTargetsRelative;let s=e.groups;for(let l=0,c=s.length;l<c;l++){let h=s[l];this.addGroup(h.start,h.count,h.materialIndex)}let o=e.boundingBox;if(o!==null)this.boundingBox=o.clone();let a=e.boundingSphere;if(a!==null)this.boundingSphere=a.clone();return this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Gr{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=gl,this.updateRanges=[],this.version=0,this.uuid=vi()}onUploadCallback(){}set needsUpdate(e){if(e===!0)this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let n=0,r=this.stride;n<r;n++)this.array[e+n]=t.array[i+n];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){if(e.arrayBuffers===void 0)e.arrayBuffers={};let t=Mp(this.array);if(e.arrayBuffers[t]===void 0)e.arrayBuffers[t]=this.array.slice(0).buffer;let i=new this.array.constructor(e.arrayBuffers[t]),n=new this.constructor(i,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){if(e.arrayBuffers===void 0)e.arrayBuffers={};let t=Mp(this.array);if(e.arrayBuffers[t]===void 0)e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer));let i={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return i.usage=this.usage,i}}function Mp(e){if(e.buffer._uuid===void 0)e.buffer._uuid=vi();if(e.byteOffset===0&&e.byteLength===e.buffer.byteLength)return e.buffer._uuid;return e.buffer._uuid+":"+e.byteOffset+":"+e.byteLength}var mn=new R;class _r{constructor(e,t,i,n=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=n,this._normalizationScale=e!==void 0?Oo(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)mn.fromBufferAttribute(this,t),mn.applyMatrix4(e),this.setXYZ(t,mn.x,mn.y,mn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)mn.fromBufferAttribute(this,t),mn.applyNormalMatrix(e),this.setXYZ(t,mn.x,mn.y,mn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)mn.fromBufferAttribute(this,t),mn.transformDirection(e),this.setXYZ(t,mn.x,mn.y,mn.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];if(this.normalized)i=this._denormalize(i);return i}setComponent(e,t,i){if(this.normalized)i=this._normalize(i);return this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){if(this.normalized)t=this._normalize(t);return this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){if(this.normalized)t=this._normalize(t);return this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){if(this.normalized)t=this._normalize(t);return this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){if(this.normalized)t=this._normalize(t);return this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];if(this.normalized)t=this._denormalize(t);return t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];if(this.normalized)t=this._denormalize(t);return t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];if(this.normalized)t=this._denormalize(t);return t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];if(this.normalized)t=this._denormalize(t);return t}setXY(e,t,i){if(e=e*this.data.stride+this.offset,this.normalized)t=this._normalize(t),i=this._normalize(i);return this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,n){if(e=e*this.data.stride+this.offset,this.normalized)t=this._normalize(t),i=this._normalize(i),n=this._normalize(n);return this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=n,this}setXYZW(e,t,i,n,r){if(e=e*this.data.stride+this.offset,this.normalized)t=this._normalize(t),i=this._normalize(i),n=this._normalize(n),r=this._normalize(r);return this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=n,this.data.array[e+3]=r,this}clone(e){if(e===void 0){Gs("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let n=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[n+r])}return new Zt(new this.array.constructor(t),this.itemSize,this.normalized)}else{if(e.interleavedBuffers===void 0)e.interleavedBuffers={};if(e.interleavedBuffers[this.data.uuid]===void 0)e.interleavedBuffers[this.data.uuid]=this.data.clone(e);return new _r(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}}toJSON(e){if(e===void 0){Gs("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let n=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[n+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else{if(e.interleavedBuffers===void 0)e.interleavedBuffers={};if(e.interleavedBuffers[this.data.uuid]===void 0)e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e);return{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):xl(e,this.data.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):_l(e,this.data.array)}}var kf=new R,ty=new R,iy=new st;class gn{constructor(e=new R(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,n){return this.normal.set(e,t,i),this.constant=n,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let n=kf.subVectors(i,t).cross(ty.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(n,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let n=e.delta(kf),r=this.normal.dot(n);if(r===0){if(this.distanceToPoint(e.start)===0)return t.copy(e.start);return null}let s=-(e.start.dot(this.normal)+this.constant)/r;if(i===!0&&(s<0||s>1))return null;return t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||iy.getNormalMatrix(e),n=this.coplanarPoint(kf).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}var ny=0;class Vt extends Di{constructor(){super();this.isMaterial=!0,Object.defineProperty(this,"id",{value:ny++}),this.uuid=vi(),this.name="",this.type="Material",this.blending=ts,this.side=Mn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ec,this.blendDst=wc,this.blendEquation=is,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ge(0,0,0),this.blendAlpha=0,this.depthFunc=ns,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Jd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=zc,this.stencilZFail=zc,this.stencilZPass=zc,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){if(this._alphaTest>0!==e>0)this.version++;this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e===void 0)return;for(let t in e){let i=e[t];if(i===void 0){Te(`Material: parameter '${t}' has value of undefined.`);continue}let n=this[t];if(n===void 0){Te(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}if(n&&n.isColor)n.set(i);else if(n&&n.isVector2&&(i&&i.isVector2)||n&&n.isEuler&&(i&&i.isEuler)||n&&n.isVector3&&(i&&i.isVector3))n.copy(i);else this[t]=i}}toJSON(e){let t=e===void 0||typeof e==="string";if(t)e={textures:{},images:{}};let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};if(i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor)i.color=this.color.getHex();if(this.roughness!==void 0)i.roughness=this.roughness;if(this.metalness!==void 0)i.metalness=this.metalness;if(this.sheen!==void 0)i.sheen=this.sheen;if(this.sheenColor&&this.sheenColor.isColor)i.sheenColor=this.sheenColor.getHex();if(this.sheenRoughness!==void 0)i.sheenRoughness=this.sheenRoughness;if(this.emissive&&this.emissive.isColor)i.emissive=this.emissive.getHex();if(this.emissiveIntensity!==void 0)i.emissiveIntensity=this.emissiveIntensity;if(this.specular&&this.specular.isColor)i.specular=this.specular.getHex();if(this.specularIntensity!==void 0)i.specularIntensity=this.specularIntensity;if(this.specularColor&&this.specularColor.isColor)i.specularColor=this.specularColor.getHex();if(this.shininess!==void 0)i.shininess=this.shininess;if(this.clearcoat!==void 0)i.clearcoat=this.clearcoat;if(this.clearcoatRoughness!==void 0)i.clearcoatRoughness=this.clearcoatRoughness;if(this.diffuseRoughness!==void 0)i.diffuseRoughness=this.diffuseRoughness;if(this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture)i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid;if(this.clearcoatMap&&this.clearcoatMap.isTexture)i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid;if(this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture)i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid;if(this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture)i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray();if(this.sheenColorMap&&this.sheenColorMap.isTexture)i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid;if(this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture)i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid;if(this.dispersion!==void 0)i.dispersion=this.dispersion;if(this.retroreflectivity!==void 0)i.retroreflectivity=this.retroreflectivity;if(this.iridescence!==void 0)i.iridescence=this.iridescence;if(this.iridescenceIOR!==void 0)i.iridescenceIOR=this.iridescenceIOR;if(this.iridescenceThicknessMinimum!==void 0)i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum;if(this.iridescenceThicknessMaximum!==void 0)i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum;if(this.iridescenceMap&&this.iridescenceMap.isTexture)i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid;if(this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture)i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid;if(this.anisotropy!==void 0)i.anisotropy=this.anisotropy;if(this.anisotropyRotation!==void 0)i.anisotropyRotation=this.anisotropyRotation;if(this.anisotropyMap&&this.anisotropyMap.isTexture)i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid;if(this.map&&this.map.isTexture)i.map=this.map.toJSON(e).uuid;if(this.matcap&&this.matcap.isTexture)i.matcap=this.matcap.toJSON(e).uuid;if(this.alphaMap&&this.alphaMap.isTexture)i.alphaMap=this.alphaMap.toJSON(e).uuid;if(this.lightMap&&this.lightMap.isTexture)i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity;if(this.aoMap&&this.aoMap.isTexture)i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity;if(this.bumpMap&&this.bumpMap.isTexture)i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale;if(this.normalMap&&this.normalMap.isTexture)i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray();if(this.displacementMap&&this.displacementMap.isTexture)i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias;if(this.roughnessMap&&this.roughnessMap.isTexture)i.roughnessMap=this.roughnessMap.toJSON(e).uuid;if(this.metalnessMap&&this.metalnessMap.isTexture)i.metalnessMap=this.metalnessMap.toJSON(e).uuid;if(this.emissiveMap&&this.emissiveMap.isTexture)i.emissiveMap=this.emissiveMap.toJSON(e).uuid;if(this.specularMap&&this.specularMap.isTexture)i.specularMap=this.specularMap.toJSON(e).uuid;if(this.specularIntensityMap&&this.specularIntensityMap.isTexture)i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid;if(this.specularColorMap&&this.specularColorMap.isTexture)i.specularColorMap=this.specularColorMap.toJSON(e).uuid;if(this.envMap&&this.envMap.isTexture){if(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0)i.combine=this.combine}if(this.envMapRotation!==void 0)i.envMapRotation=this.envMapRotation.toArray();if(this.envMapIntensity!==void 0)i.envMapIntensity=this.envMapIntensity;if(this.reflectivity!==void 0)i.reflectivity=this.reflectivity;if(this.refractionRatio!==void 0)i.refractionRatio=this.refractionRatio;if(this.gradientMap&&this.gradientMap.isTexture)i.gradientMap=this.gradientMap.toJSON(e).uuid;if(this.transmission!==void 0)i.transmission=this.transmission;if(this.transmissionMap&&this.transmissionMap.isTexture)i.transmissionMap=this.transmissionMap.toJSON(e).uuid;if(this.thickness!==void 0)i.thickness=this.thickness;if(this.thicknessMap&&this.thicknessMap.isTexture)i.thicknessMap=this.thicknessMap.toJSON(e).uuid;if(this.attenuationDistance!==void 0)i.attenuationDistance=this.attenuationDistance;if(this.attenuationColor!==void 0)i.attenuationColor=this.attenuationColor.getHex();if(this.size!==void 0)i.size=this.size;if(this.sizeAttenuation!==void 0)i.sizeAttenuation=this.sizeAttenuation;if(Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0)i.clippingPlanes=this.clippingPlanes.map((r)=>r.toJSON());if(this.rotation!==void 0)i.rotation=this.rotation;if(this.depthPacking!==void 0)i.depthPacking=this.depthPacking;if(this.linewidth!==void 0)i.linewidth=this.linewidth;if(this.linecap!==void 0)i.linecap=this.linecap;if(this.linejoin!==void 0)i.linejoin=this.linejoin;if(this.dashSize!==void 0)i.dashSize=this.dashSize;if(this.gapSize!==void 0)i.gapSize=this.gapSize;if(this.scale!==void 0)i.scale=this.scale;if(this.wireframe!==void 0)i.wireframe=this.wireframe;if(this.wireframeLinewidth!==void 0)i.wireframeLinewidth=this.wireframeLinewidth;if(this.wireframeLinecap!==void 0)i.wireframeLinecap=this.wireframeLinecap;if(this.wireframeLinejoin!==void 0)i.wireframeLinejoin=this.wireframeLinejoin;if(this.flatShading!==void 0)i.flatShading=this.flatShading;if(this.fog!==void 0)i.fog=this.fog;if(Object.keys(this.userData).length>0)i.userData=this.userData;function n(r){let s=[];for(let o in r){let a=r[o];delete a.metadata,s.push(a)}return s}if(t){let r=n(e.textures),s=n(e.images);if(r.length>0)i.textures=r;if(s.length>0)i.images=s}return i}fromJSON(e,t){if(e.uuid!==void 0)this.uuid=e.uuid;if(e.name!==void 0)this.name=e.name;if(e.color!==void 0&&this.color!==void 0)this.color.setHex(e.color);if(e.roughness!==void 0)this.roughness=e.roughness;if(e.metalness!==void 0)this.metalness=e.metalness;if(e.sheen!==void 0)this.sheen=e.sheen;if(e.sheenColor!==void 0)this.sheenColor=new ge().setHex(e.sheenColor);if(e.sheenRoughness!==void 0)this.sheenRoughness=e.sheenRoughness;if(e.emissive!==void 0&&this.emissive!==void 0)this.emissive.setHex(e.emissive);if(e.specular!==void 0&&this.specular!==void 0)this.specular.setHex(e.specular);if(e.specularIntensity!==void 0)this.specularIntensity=e.specularIntensity;if(e.specularColor!==void 0&&this.specularColor!==void 0)this.specularColor.setHex(e.specularColor);if(e.shininess!==void 0)this.shininess=e.shininess;if(e.clearcoat!==void 0)this.clearcoat=e.clearcoat;if(e.clearcoatRoughness!==void 0)this.clearcoatRoughness=e.clearcoatRoughness;if(e.diffuseRoughness!==void 0)this.diffuseRoughness=e.diffuseRoughness;if(e.dispersion!==void 0)this.dispersion=e.dispersion;if(e.retroreflectivity!==void 0)this.retroreflectivity=e.retroreflectivity;if(e.iridescence!==void 0)this.iridescence=e.iridescence;if(e.iridescenceIOR!==void 0)this.iridescenceIOR=e.iridescenceIOR;if(e.iridescenceThicknessMinimum!==void 0)this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum;if(e.iridescenceThicknessMaximum!==void 0)this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum;if(e.iridescenceThicknessRange!==void 0)this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1];if(e.transmission!==void 0)this.transmission=e.transmission;if(e.thickness!==void 0)this.thickness=e.thickness;if(e.attenuationDistance!==void 0)this.attenuationDistance=e.attenuationDistance;if(e.attenuationColor!==void 0&&this.attenuationColor!==void 0)this.attenuationColor.setHex(e.attenuationColor);if(e.anisotropy!==void 0)this.anisotropy=e.anisotropy;if(e.anisotropyRotation!==void 0)this.anisotropyRotation=e.anisotropyRotation;if(e.fog!==void 0)this.fog=e.fog;if(e.flatShading!==void 0)this.flatShading=e.flatShading;if(e.blending!==void 0)this.blending=e.blending;if(e.combine!==void 0)this.combine=e.combine;if(e.side!==void 0)this.side=e.side;if(e.shadowSide!==void 0)this.shadowSide=e.shadowSide;if(e.opacity!==void 0)this.opacity=e.opacity;if(e.transparent!==void 0)this.transparent=e.transparent;if(e.alphaTest!==void 0)this.alphaTest=e.alphaTest;if(e.alphaHash!==void 0)this.alphaHash=e.alphaHash;if(e.depthFunc!==void 0)this.depthFunc=e.depthFunc;if(e.depthTest!==void 0)this.depthTest=e.depthTest;if(e.depthWrite!==void 0)this.depthWrite=e.depthWrite;if(e.colorWrite!==void 0)this.colorWrite=e.colorWrite;if(e.clippingPlanes!==void 0)this.clippingPlanes=e.clippingPlanes.map((i)=>new gn().fromJSON(i));if(e.clipIntersection!==void 0)this.clipIntersection=e.clipIntersection;if(e.clipShadows!==void 0)this.clipShadows=e.clipShadows;if(e.depthPacking!==void 0)this.depthPacking=e.depthPacking;if(e.blendSrc!==void 0)this.blendSrc=e.blendSrc;if(e.blendDst!==void 0)this.blendDst=e.blendDst;if(e.blendEquation!==void 0)this.blendEquation=e.blendEquation;if(e.blendSrcAlpha!==void 0)this.blendSrcAlpha=e.blendSrcAlpha;if(e.blendDstAlpha!==void 0)this.blendDstAlpha=e.blendDstAlpha;if(e.blendEquationAlpha!==void 0)this.blendEquationAlpha=e.blendEquationAlpha;if(e.blendColor!==void 0&&this.blendColor!==void 0)this.blendColor.setHex(e.blendColor);if(e.blendAlpha!==void 0)this.blendAlpha=e.blendAlpha;if(e.stencilWriteMask!==void 0)this.stencilWriteMask=e.stencilWriteMask;if(e.stencilFunc!==void 0)this.stencilFunc=e.stencilFunc;if(e.stencilRef!==void 0)this.stencilRef=e.stencilRef;if(e.stencilFuncMask!==void 0)this.stencilFuncMask=e.stencilFuncMask;if(e.stencilFail!==void 0)this.stencilFail=e.stencilFail;if(e.stencilZFail!==void 0)this.stencilZFail=e.stencilZFail;if(e.stencilZPass!==void 0)this.stencilZPass=e.stencilZPass;if(e.stencilWrite!==void 0)this.stencilWrite=e.stencilWrite;if(e.wireframe!==void 0)this.wireframe=e.wireframe;if(e.wireframeLinewidth!==void 0)this.wireframeLinewidth=e.wireframeLinewidth;if(e.wireframeLinecap!==void 0)this.wireframeLinecap=e.wireframeLinecap;if(e.wireframeLinejoin!==void 0)this.wireframeLinejoin=e.wireframeLinejoin;if(e.rotation!==void 0)this.rotation=e.rotation;if(e.linewidth!==void 0)this.linewidth=e.linewidth;if(e.linecap!==void 0)this.linecap=e.linecap;if(e.linejoin!==void 0)this.linejoin=e.linejoin;if(e.dashSize!==void 0)this.dashSize=e.dashSize;if(e.gapSize!==void 0)this.gapSize=e.gapSize;if(e.scale!==void 0)this.scale=e.scale;if(e.polygonOffset!==void 0)this.polygonOffset=e.polygonOffset;if(e.polygonOffsetFactor!==void 0)this.polygonOffsetFactor=e.polygonOffsetFactor;if(e.polygonOffsetUnits!==void 0)this.polygonOffsetUnits=e.polygonOffsetUnits;if(e.dithering!==void 0)this.dithering=e.dithering;if(e.alphaToCoverage!==void 0)this.alphaToCoverage=e.alphaToCoverage;if(e.premultipliedAlpha!==void 0)this.premultipliedAlpha=e.premultipliedAlpha;if(e.forceSinglePass!==void 0)this.forceSinglePass=e.forceSinglePass;if(e.allowOverride!==void 0)this.allowOverride=e.allowOverride;if(e.visible!==void 0)this.visible=e.visible;if(e.toneMapped!==void 0)this.toneMapped=e.toneMapped;if(e.userData!==void 0)this.userData=e.userData;if(e.vertexColors!==void 0)if(typeof e.vertexColors==="number")this.vertexColors=e.vertexColors>0;else this.vertexColors=e.vertexColors;if(e.size!==void 0)this.size=e.size;if(e.sizeAttenuation!==void 0)this.sizeAttenuation=e.sizeAttenuation;if(e.map!==void 0)this.map=t[e.map]||null;if(e.matcap!==void 0)this.matcap=t[e.matcap]||null;if(e.alphaMap!==void 0)this.alphaMap=t[e.alphaMap]||null;if(e.bumpMap!==void 0)this.bumpMap=t[e.bumpMap]||null;if(e.bumpScale!==void 0)this.bumpScale=e.bumpScale;if(e.normalMap!==void 0)this.normalMap=t[e.normalMap]||null;if(e.normalMapType!==void 0)this.normalMapType=e.normalMapType;if(e.normalScale!==void 0){let i=e.normalScale;if(Array.isArray(i)===!1)i=[i,i];this.normalScale=new Z().fromArray(i)}if(e.displacementMap!==void 0)this.displacementMap=t[e.displacementMap]||null;if(e.displacementScale!==void 0)this.displacementScale=e.displacementScale;if(e.displacementBias!==void 0)this.displacementBias=e.displacementBias;if(e.roughnessMap!==void 0)this.roughnessMap=t[e.roughnessMap]||null;if(e.metalnessMap!==void 0)this.metalnessMap=t[e.metalnessMap]||null;if(e.emissiveMap!==void 0)this.emissiveMap=t[e.emissiveMap]||null;if(e.emissiveIntensity!==void 0)this.emissiveIntensity=e.emissiveIntensity;if(e.specularMap!==void 0)this.specularMap=t[e.specularMap]||null;if(e.specularIntensityMap!==void 0)this.specularIntensityMap=t[e.specularIntensityMap]||null;if(e.specularColorMap!==void 0)this.specularColorMap=t[e.specularColorMap]||null;if(e.envMap!==void 0)this.envMap=t[e.envMap]||null;if(e.envMapRotation!==void 0)this.envMapRotation.fromArray(e.envMapRotation);if(e.envMapIntensity!==void 0)this.envMapIntensity=e.envMapIntensity;if(e.reflectivity!==void 0)this.reflectivity=e.reflectivity;if(e.refractionRatio!==void 0)this.refractionRatio=e.refractionRatio;if(e.lightMap!==void 0)this.lightMap=t[e.lightMap]||null;if(e.lightMapIntensity!==void 0)this.lightMapIntensity=e.lightMapIntensity;if(e.aoMap!==void 0)this.aoMap=t[e.aoMap]||null;if(e.aoMapIntensity!==void 0)this.aoMapIntensity=e.aoMapIntensity;if(e.gradientMap!==void 0)this.gradientMap=t[e.gradientMap]||null;if(e.clearcoatMap!==void 0)this.clearcoatMap=t[e.clearcoatMap]||null;if(e.clearcoatRoughnessMap!==void 0)this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null;if(e.clearcoatNormalMap!==void 0)this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null;if(e.clearcoatNormalScale!==void 0)this.clearcoatNormalScale=new Z().fromArray(e.clearcoatNormalScale);if(e.diffuseRoughnessMap!==void 0)this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null;if(e.iridescenceMap!==void 0)this.iridescenceMap=t[e.iridescenceMap]||null;if(e.iridescenceThicknessMap!==void 0)this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null;if(e.transmissionMap!==void 0)this.transmissionMap=t[e.transmissionMap]||null;if(e.thicknessMap!==void 0)this.thicknessMap=t[e.thicknessMap]||null;if(e.anisotropyMap!==void 0)this.anisotropyMap=t[e.anisotropyMap]||null;if(e.sheenColorMap!==void 0)this.sheenColorMap=t[e.sheenColorMap]||null;if(e.sheenRoughnessMap!==void 0)this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null;return this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let n=t.length;i=Array(n);for(let r=0;r!==n;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){if(e===!0)this.version++}}class qs extends Vt{constructor(e){super();this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ge(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}var $o,wl=new R,Qo=new R,ea=new R,ta=new Z,Al=new Z,bp=new Ge,eh=new R,Rl=new R,th=new R,vp=new Z,Vf=new Z,Sp=new Z;class Cl extends ct{constructor(e=new qs){super();if(this.isSprite=!0,this.type="Sprite",$o===void 0){$o=new Xe;let t=new Float32Array([-0.5,-0.5,0,0,0,0.5,-0.5,0,1,0,0.5,0.5,0,1,1,-0.5,0.5,0,0,1]),i=new Gr(t,5);$o.setIndex([0,1,2,0,2,3]),$o.setAttribute("position",new _r(i,3,0,!1)),$o.setAttribute("uv",new _r(i,2,3,!1))}this.geometry=$o,this.material=e,this.center=new Z(0.5,0.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){if(e.camera===null)Ye('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.');if(Qo.setFromMatrixScale(this.matrixWorld),bp.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),ea.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1)Qo.multiplyScalar(-ea.z);let i=this.material.rotation,n,r;if(i!==0)r=Math.cos(i),n=Math.sin(i);let s=this.center;ih(eh.set(-0.5,-0.5,0),ea,s,Qo,n,r),ih(Rl.set(0.5,-0.5,0),ea,s,Qo,n,r),ih(th.set(0.5,0.5,0),ea,s,Qo,n,r),vp.set(0,0),Vf.set(1,0),Sp.set(1,1);let o=e.ray.intersectTriangle(eh,Rl,th,!1,wl);if(o===null){if(ih(Rl.set(-0.5,0.5,0),ea,s,Qo,n,r),Vf.set(0,1),o=e.ray.intersectTriangle(eh,th,Rl,!1,wl),o===null)return}let a=e.ray.origin.distanceTo(wl);if(a<e.near||a>e.far)return;t.push({distance:a,point:wl.clone(),uv:Ji.getInterpolation(wl,eh,Rl,th,vp,Vf,Sp,new Z),face:null,object:this})}copy(e,t){if(super.copy(e,t),e.center!==void 0)this.center.copy(e.center);return this.material=e.material,this}toJSON(e){let t=super.toJSON(e);return t.object.center=this.center.toArray(),t}}function ih(e,t,i,n,r,s){if(ta.subVectors(e,i).addScalar(0.5).multiply(n),r!==void 0)Al.x=s*ta.x-r*ta.y,Al.y=r*ta.x+s*ta.y;else Al.copy(ta);e.copy(t),e.x+=Al.x,e.y+=Al.y,e.applyMatrix4(bp)}var kr=new R,Wf=new R,nh=new R,rh=new R;class Yn{constructor(e=new R,t=new R(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,kr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);if(i<0)return t.copy(this.origin);return t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=kr.subVectors(e,this.origin).dot(this.direction);if(t<0)return this.origin.distanceToSquared(e);return kr.copy(this.origin).addScaledVector(this.direction,t),kr.distanceToSquared(e)}distanceSqToSegment(e,t,i,n){Wf.copy(e).add(t).multiplyScalar(0.5),nh.copy(t).sub(e).normalize(),rh.copy(this.origin).sub(Wf);let r=e.distanceTo(t)*0.5,s=-this.direction.dot(nh),o=rh.dot(this.direction),a=-rh.dot(nh),l=rh.lengthSq(),c=Math.abs(1-s*s),h,u,f,m;if(c>0)if(h=s*a-o,u=s*o-a,m=r*c,h>=0)if(u>=-m)if(u<=m){let g=1/c;h*=g,u*=g,f=h*(h+s*u+2*o)+u*(s*h+u+2*a)+l}else u=r,h=Math.max(0,-(s*u+o)),f=-h*h+u*(u+2*a)+l;else u=-r,h=Math.max(0,-(s*u+o)),f=-h*h+u*(u+2*a)+l;else if(u<=-m)h=Math.max(0,-(-s*r+o)),u=h>0?-r:Math.min(Math.max(-r,-a),r),f=-h*h+u*(u+2*a)+l;else if(u<=m)h=0,u=Math.min(Math.max(-r,-a),r),f=u*(u+2*a)+l;else h=Math.max(0,-(s*r+o)),u=h>0?r:Math.min(Math.max(-r,-a),r),f=-h*h+u*(u+2*a)+l;else u=s>0?-r:r,h=Math.max(0,-(s*u+o)),f=-h*h+u*(u+2*a)+l;if(i)i.copy(this.origin).addScaledVector(this.direction,h);if(n)n.copy(Wf).addScaledVector(nh,u);return f}intersectSphere(e,t){if(e.radius<0)return null;kr.subVectors(e.center,this.origin);let i=kr.dot(this.direction),n=kr.dot(kr)-i*i,r=e.radius*e.radius;if(n>r)return null;let s=Math.sqrt(r-n),o=i-s,a=i+s;if(a<0)return null;if(o<0)return this.at(a,t);return this.at(o,t)}intersectsSphere(e){if(e.radius<0)return!1;return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0){if(e.distanceToPoint(this.origin)===0)return 0;return null}let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);if(i===null)return null;return this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);if(t===0)return!0;if(e.normal.dot(this.direction)*t<0)return!0;return!1}intersectBox(e,t){let i,n,r,s,o,a,l=1/this.direction.x,c=1/this.direction.y,h=1/this.direction.z,u=this.origin;if(l>=0)i=(e.min.x-u.x)*l,n=(e.max.x-u.x)*l;else i=(e.max.x-u.x)*l,n=(e.min.x-u.x)*l;if(c>=0)r=(e.min.y-u.y)*c,s=(e.max.y-u.y)*c;else r=(e.max.y-u.y)*c,s=(e.min.y-u.y)*c;if(i>s||r>n)return null;if(r>i||isNaN(i))i=r;if(s<n||isNaN(n))n=s;if(h>=0)o=(e.min.z-u.z)*h,a=(e.max.z-u.z)*h;else o=(e.max.z-u.z)*h,a=(e.min.z-u.z)*h;if(i>a||o>n)return null;if(o>i||i!==i)i=o;if(a<n||n!==n)n=a;if(n<0)return null;return this.at(i>=0?i:n,t)}intersectsBox(e){return this.intersectBox(e,kr)!==null}intersectTriangle(e,t,i,n,r){let s=this.origin,o=this.direction,{x:a,y:l,z:c}=o,h=e.x-s.x,u=e.y-s.y,f=e.z-s.z,m=t.x-s.x,g=t.y-s.y,x=t.z-s.z,d=i.x-s.x,p=i.y-s.y,y=i.z-s.z,M=Math.abs(a),b=Math.abs(l),v=Math.abs(c),T,_,S,w,L,I,U,K,P,V,D,N;if(M>=b&&M>=v)if(S=a,I=h,P=m,N=d,a>=0)T=l,_=c,w=u,L=f,U=g,K=x,V=p,D=y;else T=c,_=l,w=f,L=u,U=x,K=g,V=y,D=p;else if(b>=v)if(S=l,I=u,P=g,N=p,l>=0)T=c,_=a,w=f,L=h,U=x,K=m,V=y,D=d;else T=a,_=c,w=h,L=f,U=m,K=x,V=d,D=y;else if(S=c,I=f,P=x,N=y,c>=0)T=a,_=l,w=h,L=u,U=m,K=g,V=d,D=p;else T=l,_=a,w=u,L=h,U=g,K=m,V=p,D=d;if(S===0)return null;let Q=T/S,G=_/S,z=1/S,Y=w-Q*I,le=L-G*I,k=U-Q*P,ee=K-G*P,be=V-Q*N,_e=D-G*N,He=be*ee-_e*k,Ie=Y*_e-le*be,ft=k*le-ee*Y;if(n){if(He<0||Ie<0||ft<0)return null}else if((He<0||Ie<0||ft<0)&&(He>0||Ie>0||ft>0))return null;let ze=He+Ie+ft;if(ze===0)return null;let ke=z*(He*I+Ie*P+ft*N);if(ze>0?ke<0:ke>0)return null;return this.at(ke/ze,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class gt extends Vt{constructor(e){super();this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new an,this.combine=Ns,this.reflectivity=1,this.refractionRatio=0.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}var Tp=new Ge,Zs=new Yn,sh=new fi,Ep=new R,oh=new R,ah=new R,lh=new R,Xf=new R,ch=new R,wp=new R,hh=new R;class ne extends ct{constructor(e=new Xe,t=new gt){super();this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){if(super.copy(e,t),e.morphTargetInfluences!==void 0)this.morphTargetInfluences=e.morphTargetInfluences.slice();else this.morphTargetInfluences=void 0;if(e.morphTargetDictionary!==void 0)this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary);else this.morphTargetDictionary=void 0;return this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=n.length;r<s;r++){let o=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let i=this.geometry,n=i.attributes.position,r=i.morphAttributes.position,s=i.morphTargetsRelative;t.fromBufferAttribute(n,e);let o=this.morphTargetInfluences;if(r&&o){ch.set(0,0,0);for(let a=0,l=r.length;a<l;a++){let c=o[a],h=r[a];if(c===0)continue;if(Xf.fromBufferAttribute(h,e),s)ch.addScaledVector(Xf,c);else ch.addScaledVector(Xf.sub(t),c)}t.add(ch)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,n=this.material,r=this.matrixWorld;if(n===void 0)return;if(i.boundingSphere===null)i.computeBoundingSphere();if(sh.copy(i.boundingSphere),sh.applyMatrix4(r),Zs.copy(e.ray).recast(e.near),sh.containsPoint(Zs.origin)===!1){if(Zs.intersectSphere(sh,Ep)===null)return;if(Zs.origin.distanceToSquared(Ep)>(e.far-e.near)**2)return}if(Tp.copy(r).invert(),Zs.copy(e.ray).applyMatrix4(Tp),i.boundingBox!==null){if(Zs.intersectsBox(i.boundingBox)===!1)return}this._computeIntersections(e,t,Zs)}_computeIntersections(e,t,i){let n,r=this.geometry,s=this.material,o=r.index,a=r.attributes.position,l=r.attributes.uv,c=r.attributes.uv1,h=r.attributes.normal,{groups:u,drawRange:f}=r;if(o!==null)if(Array.isArray(s))for(let m=0,g=u.length;m<g;m++){let x=u[m],d=s[x.materialIndex],p=Math.max(x.start,f.start),y=Math.min(o.count,Math.min(x.start+x.count,f.start+f.count));for(let M=p,b=y;M<b;M+=3){let v=o.getX(M),T=o.getX(M+1),_=o.getX(M+2);if(n=fh(this,d,e,i,l,c,h,v,T,_),n)n.faceIndex=Math.floor(M/3),n.face.materialIndex=x.materialIndex,t.push(n)}}else{let m=Math.max(0,f.start),g=Math.min(o.count,f.start+f.count);for(let x=m,d=g;x<d;x+=3){let p=o.getX(x),y=o.getX(x+1),M=o.getX(x+2);if(n=fh(this,s,e,i,l,c,h,p,y,M),n)n.faceIndex=Math.floor(x/3),t.push(n)}}else if(a!==void 0)if(Array.isArray(s))for(let m=0,g=u.length;m<g;m++){let x=u[m],d=s[x.materialIndex],p=Math.max(x.start,f.start),y=Math.min(a.count,Math.min(x.start+x.count,f.start+f.count));for(let M=p,b=y;M<b;M+=3){let v=M,T=M+1,_=M+2;if(n=fh(this,d,e,i,l,c,h,v,T,_),n)n.faceIndex=Math.floor(M/3),n.face.materialIndex=x.materialIndex,t.push(n)}}else{let m=Math.max(0,f.start),g=Math.min(a.count,f.start+f.count);for(let x=m,d=g;x<d;x+=3){let p=x,y=x+1,M=x+2;if(n=fh(this,s,e,i,l,c,h,p,y,M),n)n.faceIndex=Math.floor(x/3),t.push(n)}}}}function ry(e,t,i,n,r,s,o,a){let l;if(t.side===jt)l=n.intersectTriangle(o,s,r,!0,a);else l=n.intersectTriangle(r,s,o,t.side===Mn,a);if(l===null)return null;hh.copy(a),hh.applyMatrix4(e.matrixWorld);let c=i.ray.origin.distanceTo(hh);if(c<i.near||c>i.far)return null;return{distance:c,point:hh.clone(),object:e}}function fh(e,t,i,n,r,s,o,a,l,c){e.getVertexPosition(a,oh),e.getVertexPosition(l,ah),e.getVertexPosition(c,lh);let h=ry(e,t,i,n,oh,ah,lh,wp);if(h){let u=new R;if(Ji.getBarycoord(wp,oh,ah,lh,u),r)h.uv=Ji.getInterpolatedAttribute(r,a,l,c,u,new Z);if(s)h.uv1=Ji.getInterpolatedAttribute(s,a,l,c,u,new Z);if(o){if(h.normal=Ji.getInterpolatedAttribute(o,a,l,c,u,new R),h.normal.dot(n.direction)>0)h.normal.multiplyScalar(-1)}let f={a,b:l,c,normal:new R,materialIndex:0};Ji.getNormal(oh,ah,lh,f.normal),h.face=f,h.barycoord=u}return h}var Il=new Et,Ap=new Et,Rp=new Et,sy=new Et,Cp=new Ge,uh=new R,Yf=new fi,Ip=new Ge,qf=new Yn;class Pl extends ne{constructor(e,t){super(e,t);this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Mf,this.bindMatrix=new Ge,this.bindMatrixInverse=new Ge,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;if(this.boundingBox===null)this.boundingBox=new Si;this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,uh),this.boundingBox.expandByPoint(uh)}computeBoundingSphere(){let e=this.geometry;if(this.boundingSphere===null)this.boundingSphere=new fi;this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,uh),this.boundingSphere.expandByPoint(uh)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}raycast(e,t){let i=this.material,n=this.matrixWorld;if(i===void 0)return;if(this.boundingSphere===null)this.computeBoundingSphere();if(Yf.copy(this.boundingSphere),Yf.applyMatrix4(n),e.ray.intersectsSphere(Yf)===!1)return;if(Ip.copy(n).invert(),qf.copy(e.ray).applyMatrix4(Ip),this.boundingBox!==null){if(qf.intersectsBox(this.boundingBox)===!1)return}this._computeIntersections(e,t,qf)}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){if(this.skeleton=e,t===void 0)this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld;this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new Et,t=this.geometry.attributes.skinWeight;for(let i=0,n=t.count;i<n;i++){e.fromBufferAttribute(t,i);let r=1/e.manhattanLength();if(r!==1/0)e.multiplyScalar(r);else e.set(1,0,0,0);t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){if(super.updateMatrixWorld(e),this.bindMode===Mf)this.bindMatrixInverse.copy(this.matrixWorld).invert();else if(this.bindMode===Yd)this.bindMatrixInverse.copy(this.bindMatrix).invert();else Te("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let i=this.skeleton,n=this.geometry;if(Ap.fromBufferAttribute(n.attributes.skinIndex,e),Rp.fromBufferAttribute(n.attributes.skinWeight,e),t.isVector4)Il.copy(t),t.set(0,0,0,0);else Il.set(t.x,t.y,t.z,1),t.set(0,0,0);Il.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){let s=Rp.getComponent(r);if(s!==0){let o=Ap.getComponent(r);Cp.multiplyMatrices(i.bones[o].matrixWorld,i.boneInverses[o]),t.addScaledVector(sy.copy(Il).applyMatrix4(Cp),s)}}if(t.isVector4)t.w=Il.w;return t.applyMatrix4(this.bindMatrixInverse)}}class Ks extends ct{constructor(){super();this.isBone=!0,this.type="Bone"}}class cr extends Lt{constructor(e=null,t=1,i=1,n,r,s,o,a,l=Xt,c=Xt,h,u){super(null,s,o,a,l,c,n,r,h,u);this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}var Pp=new Ge,oy=new Ge;class ia{constructor(e=[],t=[]){this.uuid=vi(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.previousBoneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Te("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,n=this.bones.length;i<n;i++)this.boneInverses.push(new Ge)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let i=new Ge;if(this.bones[e])i.copy(this.bones[e].matrixWorld).invert();this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let i=this.bones[e];if(i)i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let i=this.bones[e];if(i){if(i.parent&&i.parent.isBone)i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld);else i.matrix.copy(i.matrixWorld);i.matrix.decompose(i.position,i.quaternion,i.scale)}}}update(){let e=this.bones,t=this.boneInverses,i=this.boneMatrices,n=this.boneTexture;for(let r=0,s=e.length;r<s;r++){let o=e[r]?e[r].matrixWorld:oy;Pp.multiplyMatrices(o,t[r]),Pp.toArray(i,r*16)}if(n!==null)n.needsUpdate=!0}clone(){return new ia(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let i=new cr(t,e,e,Li,gi);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){let n=this.bones[t];if(n.name===e)return n}return}dispose(){if(this.boneTexture!==null)this.boneTexture.dispose(),this.boneTexture=null;if(this.previousBoneTexture!==null)this.previousBoneTexture.dispose(),this.previousBoneTexture=null}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,n=e.bones.length;i<n;i++){let r=e.bones[i],s=t[r];if(s===void 0)Te("Skeleton: No bone found with UUID:",r),s=new Ks;this.bones.push(s),this.boneInverses.push(new Ge().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,i=this.boneInverses;for(let n=0,r=t.length;n<r;n++){let s=t[n];e.bones.push(s.uuid);let o=i[n];e.boneInverses.push(o.toArray())}return e}}class hr extends Zt{constructor(e,t,i,n=1){super(e,t,i);this.isInstancedBufferAttribute=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}var na=new Ge,Lp=new Ge,dh=[],Dp=new Si,ay=new Ge,Ll=new ne,Dl=new fi;class Cn extends ne{constructor(e,t,i){super(e,t);this.isInstancedMesh=!0,this.instanceMatrix=new hr(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let n=0;n<i;n++)this.setMatrixAt(n,ay)}computeBoundingBox(){let e=this.geometry,t=this.count;if(this.boundingBox===null)this.boundingBox=new Si;if(e.boundingBox===null)e.computeBoundingBox();this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,na),Dp.copy(e.boundingBox).applyMatrix4(na),this.boundingBox.union(Dp)}computeBoundingSphere(){let e=this.geometry,t=this.count;if(this.boundingSphere===null)this.boundingSphere=new fi;if(e.boundingSphere===null)e.computeBoundingSphere();this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,na),Dl.copy(e.boundingSphere).applyMatrix4(na),this.boundingSphere.union(Dl)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){if(this.instanceColor===null)return t.setRGB(1,1,1);else return t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,n=this.morphTexture.source.data.data,r=i.length+1,s=e*r+1;for(let o=0;o<i.length;o++)i[o]=n[s+o]}raycast(e,t){let i=this.matrixWorld,n=this.count;if(Ll.geometry=this.geometry,Ll.material=this.material,Ll.material===void 0)return;if(this.boundingSphere===null)this.computeBoundingSphere();if(Dl.copy(this.boundingSphere),Dl.applyMatrix4(i),e.ray.intersectsSphere(Dl)===!1)return;for(let r=0;r<n;r++){this.getMatrixAt(r,na),Lp.multiplyMatrices(i,na),Ll.matrixWorld=Lp,Ll.raycast(e,dh);for(let s=0,o=dh.length;s<o;s++){let a=dh[s];a.instanceId=r,a.object=this,t.push(a)}dh.length=0}}setColorAt(e,t){if(this.instanceColor===null)this.instanceColor=new hr(new Float32Array(this.instanceMatrix.count*3).fill(1),3);return t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let i=t.morphTargetInfluences,n=i.length+1;if(this.morphTexture===null)this.morphTexture=new cr(new Float32Array(n*this.count),n,this.count,Co,gi);let r=this.morphTexture.source.data.data,s=0;for(let l=0;l<i.length;l++)s+=i[l];let o=this.geometry.morphTargetsRelative?1:1-s,a=n*e;return r[a]=o,r.set(i,a+1),this}updateMorphTargets(){}dispose(){if(super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null)this.instanceColor.dispose();if(this.morphTexture!==null)this.morphTexture.dispose(),this.morphTexture=null}}var Js=new fi,ly=new Z(0.5,0.5),ph=new R;class qn{constructor(e=new gn,t=new gn,i=new gn,n=new gn,r=new gn,s=new gn){this.planes=[e,t,i,n,r,s]}set(e,t,i,n,r,s){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(n),o[4].copy(r),o[5].copy(s),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=zi,i=!1){let n=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],h=r[5],u=r[6],f=r[7],m=r[8],g=r[9],x=r[10],d=r[11],p=r[12],y=r[13],M=r[14],b=r[15];if(n[0].setComponents(l-s,f-c,d-m,b-p).normalize(),n[1].setComponents(l+s,f+c,d+m,b+p).normalize(),n[2].setComponents(l+o,f+h,d+g,b+y).normalize(),n[3].setComponents(l-o,f-h,d-g,b-y).normalize(),i)n[4].setComponents(a,u,x,M).normalize(),n[5].setComponents(l-a,f-u,d-x,b-M).normalize();else if(n[4].setComponents(l-a,f-u,d-x,b-M).normalize(),t===zi)n[5].setComponents(l+a,f+u,d+x,b+M).normalize();else if(t===gr)n[5].setComponents(a,u,x,M).normalize();else throw Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0){if(e.boundingSphere===null)e.computeBoundingSphere();Js.copy(e.boundingSphere).applyMatrix4(e.matrixWorld)}else{let t=e.geometry;if(t.boundingSphere===null)t.computeBoundingSphere();Js.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Js)}intersectsSprite(e){Js.center.set(0,0,0);let t=ly.distanceTo(e.center);return Js.radius=0.7071067811865476+t,Js.applyMatrix4(e.matrixWorld),this.intersectsSphere(Js)}intersectsSphere(e){let t=this.planes,i=e.center,n=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<n)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let n=t[i];if(ph.x=n.normal.x>0?e.max.x:e.min.x,ph.y=n.normal.y>0?e.max.y:e.min.y,ph.z=n.normal.z>0?e.max.z:e.min.z,n.distanceToPoint(ph)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}var Np=new Ge;class ra{constructor(){this.coordinateSystem=zi,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,i=this._frustums;for(let n=0;n<t.length;n++){let r=t[n];if(Np.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),i[n]===void 0)i[n]=new qn;i[n].setFromProjectionMatrix(Np,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,i=e._frustums;for(let n=0;n<e._count;n++){if(t[n]===void 0)t[n]=new qn;t[n].copy(i[n])}return this._count=e._count,this}clone(){return new ra().copy(this)}}class bi extends Vt{constructor(e){super();this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ge(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}var xh=new R,_h=new R,Fp=new Ge,Nl=new Yn,mh=new fi,Zf=new R,Up=new R;class Zn extends ct{constructor(e=new Xe,t=new bi){super();this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){if(super.copy(e,t),e.morphTargetInfluences!==void 0)this.morphTargetInfluences=e.morphTargetInfluences.slice();else this.morphTargetInfluences=void 0;if(e.morphTargetDictionary!==void 0)this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary);else this.morphTargetDictionary=void 0;return this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let n=1,r=t.count;n<r;n++)xh.fromBufferAttribute(t,n-1),_h.fromBufferAttribute(t,n),i[n]=i[n-1],i[n]+=xh.distanceTo(_h);e.setAttribute("lineDistance",new Re(i,1))}else Te("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,n=this.matrixWorld,r=e.params.Line.threshold,s=i.drawRange;if(i.boundingSphere===null)i.computeBoundingSphere();if(mh.copy(i.boundingSphere),mh.applyMatrix4(n),mh.radius+=r,e.ray.intersectsSphere(mh)===!1)return;Fp.copy(n).invert(),Nl.copy(e.ray).applyMatrix4(Fp);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),a=o*o,l=this.isLineSegments?2:1,c=i.index,u=i.attributes.position;if(c!==null){let f=Math.max(0,s.start),m=Math.min(c.count,s.start+s.count);for(let g=f,x=m-1;g<x;g+=l){let d=c.getX(g),p=c.getX(g+1),y=gh(this,e,Nl,a,d,p,g);if(y)t.push(y)}if(this.isLineLoop){let g=c.getX(m-1),x=c.getX(f),d=gh(this,e,Nl,a,g,x,m-1);if(d)t.push(d)}}else{let f=Math.max(0,s.start),m=Math.min(u.count,s.start+s.count);for(let g=f,x=m-1;g<x;g+=l){let d=gh(this,e,Nl,a,g,g+1,g);if(d)t.push(d)}if(this.isLineLoop){let g=gh(this,e,Nl,a,m-1,f,m-1);if(g)t.push(g)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=n.length;r<s;r++){let o=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function gh(e,t,i,n,r,s,o){let a=e.geometry.attributes.position;if(xh.fromBufferAttribute(a,r),_h.fromBufferAttribute(a,s),i.distanceSqToSegment(xh,_h,Zf,Up)>n)return;Zf.applyMatrix4(e.matrixWorld);let c=t.ray.origin.distanceTo(Zf);if(c<t.near||c>t.far)return;return{distance:c,point:Up.clone().applyMatrix4(e.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:e}}var Bp=new R,Op=new R;class cn extends Zn{constructor(e,t){super(e,t);this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let n=0,r=t.count;n<r;n+=2)Bp.fromBufferAttribute(t,n),Op.fromBufferAttribute(t,n+1),i[n]=n===0?0:i[n-1],i[n+1]=i[n]+Bp.distanceTo(Op);e.setAttribute("lineDistance",new Re(i,1))}else Te("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Fl extends Zn{constructor(e,t){super(e,t);this.isLineLoop=!0,this.type="LineLoop"}}class Vr extends Vt{constructor(e){super();this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ge(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}var Hp=new Ge,Kf=new Yn,yh=new fi,Mh=new R;class js extends ct{constructor(e=new Xe,t=new Vr){super();this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){if(super.copy(e,t),e.morphTargetInfluences!==void 0)this.morphTargetInfluences=e.morphTargetInfluences.slice();else this.morphTargetInfluences=void 0;if(e.morphTargetDictionary!==void 0)this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary);else this.morphTargetDictionary=void 0;return this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,n=this.matrixWorld,r=e.params.Points.threshold,s=i.drawRange;if(i.boundingSphere===null)i.computeBoundingSphere();if(yh.copy(i.boundingSphere),yh.applyMatrix4(n),yh.radius+=r,e.ray.intersectsSphere(yh)===!1)return;Hp.copy(n).invert(),Kf.copy(e.ray).applyMatrix4(Hp);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),a=o*o,l=i.index,h=i.attributes.position;if(l!==null){let u=Math.max(0,s.start),f=Math.min(l.count,s.start+s.count);for(let m=u,g=f;m<g;m++){let x=l.getX(m);Mh.fromBufferAttribute(h,x),zp(Mh,x,a,n,e,t,this)}}else{let u=Math.max(0,s.start),f=Math.min(h.count,s.start+s.count);for(let m=u,g=f;m<g;m++)Mh.fromBufferAttribute(h,m),zp(Mh,m,a,n,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=n.length;r<s;r++){let o=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function zp(e,t,i,n,r,s,o){let a=Kf.distanceSqToPoint(e);if(a<i){let l=new R;Kf.closestPointToPoint(e,l),l.applyMatrix4(n);let c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class ds extends Lt{constructor(e=[],t=kn,i,n,r,s,o,a,l,c){super(e,t,i,n,r,s,o,a,l,c);this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ni extends Lt{constructor(e,t,i,n,r,s,o,a,l){super(e,t,i,n,r,s,o,a,l);this.isCanvasTexture=!0,this.needsUpdate=!0}}class In extends Lt{constructor(e,t,i=Pi,n,r,s,o=Xt,a=Xt,l,c=vn,h=1){if(c!==vn&&c!==En)throw Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:e,height:t,depth:h};super(u,n,r,s,o,a,c,i,l);this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new xr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class sa extends In{constructor(e,t=Pi,i=kn,n,r,s=Xt,o=Xt,a,l=vn){let c={width:e,height:e,depth:1},h=[c,c,c,c,c,c];super(e,e,t,i,n,r,s,o,a,l);this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class oa extends Lt{constructor(e=null){super();this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class yt extends Xe{constructor(e=1,t=1,i=1,n=1,r=1,s=1){super();this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:n,heightSegments:r,depthSegments:s};let o=this;n=Math.floor(n),r=Math.floor(r),s=Math.floor(s);let a=[],l=[],c=[],h=[],u=0,f=0;m("z","y","x",-1,-1,i,t,e,s,r,0),m("z","y","x",1,-1,i,t,-e,s,r,1),m("x","z","y",1,1,e,i,t,n,s,2),m("x","z","y",1,-1,e,i,-t,n,s,3),m("x","y","z",1,-1,e,t,i,n,r,4),m("x","y","z",-1,-1,e,t,-i,n,r,5),this.setIndex(a),this.setAttribute("position",new Re(l,3)),this.setAttribute("normal",new Re(c,3)),this.setAttribute("uv",new Re(h,2));function m(g,x,d,p,y,M,b,v,T,_,S){let w=M/T,L=b/_,I=M/2,U=b/2,K=v/2,P=T+1,V=_+1,D=0,N=0,Q=new R;for(let G=0;G<V;G++){let z=G*L-U;for(let Y=0;Y<P;Y++){let le=Y*w-I;Q[g]=le*p,Q[x]=z*y,Q[d]=K,l.push(Q.x,Q.y,Q.z),Q[g]=0,Q[x]=0,Q[d]=v>0?1:-1,c.push(Q.x,Q.y,Q.z),h.push(Y/T),h.push(1-G/_),D+=1}}for(let G=0;G<_;G++)for(let z=0;z<T;z++){let Y=u+z+P*G,le=u+z+P*(G+1),k=u+(z+1)+P*(G+1),ee=u+(z+1)+P*G;a.push(Y,le,ee),a.push(le,k,ee),N+=6}o.addGroup(f,N,S),f+=N,u+=D}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Ul extends Xe{constructor(e=1,t=1,i=4,n=8,r=1){super();this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:i,radialSegments:n,heightSegments:r},t=Math.max(0,t),i=Math.max(1,Math.floor(i)),n=Math.max(3,Math.floor(n)),r=Math.max(1,Math.floor(r));let s=[],o=[],a=[],l=[],c=t/2,h=Math.PI/2*e,u=t,f=2*h+u,m=i*2+r,g=n+1,x=new R,d=new R;for(let p=0;p<=m;p++){let y=0,M=0,b=0,v=0;if(p<=i){let S=p/i,w=S*Math.PI/2;M=-c-e*Math.cos(w),b=e*Math.sin(w),v=-e*Math.cos(w),y=S*h}else if(p<=i+r){let S=(p-i)/r;M=-c+S*t,b=e,v=0,y=h+S*u}else{let S=(p-i-r)/i,w=S*Math.PI/2;M=c+e*Math.sin(w),b=e*Math.cos(w),v=e*Math.sin(w),y=h+u+S*h}let T=Math.max(0,Math.min(1,y/f)),_=0;if(p===0)_=0.5/n;else if(p===m)_=-0.5/n;for(let S=0;S<=n;S++){let w=S/n,L=w*Math.PI*2,I=Math.sin(L),U=Math.cos(L);d.x=-b*U,d.y=M,d.z=b*I,o.push(d.x,d.y,d.z),x.set(-b*U,v,b*I),x.normalize(),a.push(x.x,x.y,x.z),l.push(w+_,T)}if(p>0){let S=(p-1)*g;for(let w=0;w<n;w++){let L=S+w,I=S+w+1,U=p*g+w,K=p*g+w+1;s.push(L,I,U),s.push(I,K,U)}}}this.setIndex(s),this.setAttribute("position",new Re(o,3)),this.setAttribute("normal",new Re(a,3)),this.setAttribute("uv",new Re(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ul(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}}class yr extends Xe{constructor(e=1,t=32,i=0,n=Math.PI*2){super();this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:n},t=Math.max(3,t);let r=[],s=[],o=[],a=[],l=new R,c=new Z;s.push(0,0,0),o.push(0,0,1),a.push(0.5,0.5);for(let h=0,u=3;h<=t;h++,u+=3){let f=i+h/t*n;l.x=e*Math.cos(f),l.y=e*Math.sin(f),s.push(l.x,l.y,l.z),o.push(0,0,1),c.x=(s[u]/e+1)/2,c.y=(s[u+1]/e+1)/2,a.push(c.x,c.y)}for(let h=1;h<=t;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new Re(s,3)),this.setAttribute("normal",new Re(o,3)),this.setAttribute("uv",new Re(a,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yr(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class At extends Xe{constructor(e=1,t=1,i=1,n=32,r=1,s=!1,o=0,a=Math.PI*2){super();this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:n,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a};let l=this;n=Math.floor(n),r=Math.floor(r);let c=[],h=[],u=[],f=[],m=0,g=[],x=i/2,d=0;if(p(),s===!1){if(e>0)y(!0);if(t>0)y(!1)}this.setIndex(c),this.setAttribute("position",new Re(h,3)),this.setAttribute("normal",new Re(u,3)),this.setAttribute("uv",new Re(f,2));function p(){let M=new R,b=new R,v=0,T=(t-e)/i;for(let _=0;_<=r;_++){let S=[],w=_/r,L=w*(t-e)+e;for(let I=0;I<=n;I++){let U=I/n,K=U*a+o,P=Math.sin(K),V=Math.cos(K);b.x=L*P,b.y=-w*i+x,b.z=L*V,h.push(b.x,b.y,b.z),M.set(P,T,V).normalize(),u.push(M.x,M.y,M.z),f.push(U,1-w),S.push(m++)}g.push(S)}for(let _=0;_<n;_++)for(let S=0;S<r;S++){let w=g[S][_],L=g[S+1][_],I=g[S+1][_+1],U=g[S][_+1];if(e>0||S!==0)c.push(w,L,U),v+=3;if(t>0||S!==r-1)c.push(L,I,U),v+=3}l.addGroup(d,v,0),d+=v}function y(M){let b=m,v=new Z,T=new R,_=0,S=M===!0?e:t,w=M===!0?1:-1;for(let I=1;I<=n;I++)h.push(0,x*w,0),u.push(0,w,0),f.push(0.5,0.5),m++;let L=m;for(let I=0;I<=n;I++){let K=I/n*a+o,P=Math.cos(K),V=Math.sin(K);T.x=S*V,T.y=x*w,T.z=S*P,h.push(T.x,T.y,T.z),u.push(0,w,0),v.x=P*0.5+0.5,v.y=V*0.5*w+0.5,f.push(v.x,v.y),m++}for(let I=0;I<n;I++){let U=b+I,K=L+I;if(M===!0)c.push(K,K+1,U);else c.push(K+1,K,U);_+=3}l.addGroup(d,_,M===!0?1:2),d+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new At(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class $s extends At{constructor(e=1,t=1,i=32,n=1,r=!1,s=0,o=Math.PI*2){super(0,e,t,i,n,r,s,o);this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:n,openEnded:r,thetaStart:s,thetaLength:o}}static fromJSON(e){return new $s(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Qs extends Xe{constructor(e=[],t=[],i=1,n=0){super();this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:n};let r=[],s=[];if(o(n),l(i),c(),this.setAttribute("position",new Re(r,3)),this.setAttribute("normal",new Re(r.slice(),3)),this.setAttribute("uv",new Re(s,2)),n===0)this.computeVertexNormals();else this.normalizeNormals();function o(p){let y=new R,M=new R,b=new R;for(let v=0;v<t.length;v+=3)f(t[v+0],y),f(t[v+1],M),f(t[v+2],b),a(y,M,b,p)}function a(p,y,M,b){let v=b+1,T=[];for(let _=0;_<=v;_++){T[_]=[];let S=p.clone().lerp(M,_/v),w=y.clone().lerp(M,_/v),L=v-_;for(let I=0;I<=L;I++)if(I===0&&_===v)T[_][I]=S;else T[_][I]=S.clone().lerp(w,I/L)}for(let _=0;_<v;_++)for(let S=0;S<2*(v-_)-1;S++){let w=Math.floor(S/2);if(S%2===0)u(T[_][w+1]),u(T[_+1][w]),u(T[_][w]);else u(T[_][w+1]),u(T[_+1][w+1]),u(T[_+1][w])}}function l(p){let y=new R;for(let M=0;M<r.length;M+=3)y.x=r[M+0],y.y=r[M+1],y.z=r[M+2],y.normalize().multiplyScalar(p),r[M+0]=y.x,r[M+1]=y.y,r[M+2]=y.z}function c(){let p=new R;for(let y=0;y<r.length;y+=3){p.x=r[y+0],p.y=r[y+1],p.z=r[y+2];let M=x(p)/2/Math.PI+0.5,b=d(p)/Math.PI+0.5;s.push(M,1-b)}m(),h()}function h(){for(let p=0;p<s.length;p+=6){let y=s[p+0],M=s[p+2],b=s[p+4],v=Math.max(y,M,b),T=Math.min(y,M,b);if(v>0.9&&T<0.1){if(y<0.2)s[p+0]+=1;if(M<0.2)s[p+2]+=1;if(b<0.2)s[p+4]+=1}}}function u(p){r.push(p.x,p.y,p.z)}function f(p,y){let M=p*3;y.x=e[M+0],y.y=e[M+1],y.z=e[M+2]}function m(){let p=new R,y=new R,M=new R,b=new R,v=new Z,T=new Z,_=new Z;for(let S=0,w=0;S<r.length;S+=9,w+=6){p.set(r[S+0],r[S+1],r[S+2]),y.set(r[S+3],r[S+4],r[S+5]),M.set(r[S+6],r[S+7],r[S+8]),v.set(s[w+0],s[w+1]),T.set(s[w+2],s[w+3]),_.set(s[w+4],s[w+5]),b.copy(p).add(y).add(M).divideScalar(3);let L=x(b);g(v,w+0,p,L),g(T,w+2,y,L),g(_,w+4,M,L)}}function g(p,y,M,b){if(b<0&&p.x===1)s[y]=p.x-1;if(M.x===0&&M.z===0)s[y]=b/2/Math.PI+0.5}function x(p){return Math.atan2(p.z,-p.x)}function d(p){return Math.atan2(-p.y,Math.sqrt(p.x*p.x+p.z*p.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qs(e.vertices,e.indices,e.radius,e.detail)}}class vh extends Qs{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,n=1/i,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-n,-i,0,-n,i,0,n,-i,0,n,i,-n,-i,0,-n,i,0,n,-i,0,n,i,0,-i,0,-n,i,0,-n,-i,0,n,i,0,n],s=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,s,e,t);this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new vh(e.radius,e.detail)}}var Sh=new R,bh=new R,jf=new R,Th=new Ji;class Eh extends Xe{constructor(e=null,t=1){super();if(this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let n=Math.pow(10,4),r=Math.cos(Fr*t),s=e.getIndex(),o=e.getAttribute("position"),a=s?s.count:o.count,l=[0,0,0],c=["a","b","c"],h=[,,,],u=new Map,f=[];for(let m=0;m<a;m+=3){if(s)l[0]=s.getX(m),l[1]=s.getX(m+1),l[2]=s.getX(m+2);else l[0]=m,l[1]=m+1,l[2]=m+2;let{a:g,b:x,c:d}=Th;if(g.fromBufferAttribute(o,l[0]),x.fromBufferAttribute(o,l[1]),d.fromBufferAttribute(o,l[2]),Th.getNormal(jf),h[0]=`${Math.round(g.x*n)},${Math.round(g.y*n)},${Math.round(g.z*n)}`,h[1]=`${Math.round(x.x*n)},${Math.round(x.y*n)},${Math.round(x.z*n)}`,h[2]=`${Math.round(d.x*n)},${Math.round(d.y*n)},${Math.round(d.z*n)}`,h[0]===h[1]||h[1]===h[2]||h[2]===h[0])continue;for(let p=0;p<3;p++){let y=(p+1)%3,M=h[p],b=h[y],v=Th[c[p]],T=Th[c[y]],_=`${M}_${b}`,S=`${b}_${M}`,w=u.get(S);if(w){if(jf.dot(w.normal)<=r)f.push(v.x,v.y,v.z),f.push(T.x,T.y,T.z);u.set(S,null)}else if(!u.has(_))u.set(_,{index0:l[p],index1:l[y],normal:jf.clone()})}}for(let m of u.values())if(m){let{index0:g,index1:x}=m;Sh.fromBufferAttribute(o,g),bh.fromBufferAttribute(o,x),f.push(Sh.x,Sh.y,Sh.z),f.push(bh.x,bh.y,bh.z)}this.setAttribute("position",new Re(f,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class xi{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Te("Curve: .getPoint() not implemented.")}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,n=this.getPoint(0),r=0;t.push(0);for(let s=1;s<=e;s++)i=this.getPoint(s/e),r+=i.distanceTo(n),t.push(r),n=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let i=this.getLengths(),n=0,r=i.length,s;if(t)s=t;else s=e*i[r-1];let o=0,a=r-1,l;while(o<=a)if(n=Math.floor(o+(a-o)/2),l=i[n]-s,l<0)o=n+1;else if(l>0)a=n-1;else{a=n;break}if(n=a,i[n]===s)return n/(r-1);let c=i[n],u=i[n+1]-c,f=(s-c)/u;return(n+f)/(r-1)}getTangent(e,t){let n=e-0.0001,r=e+0.0001;if(n<0)n=0;if(r>1)r=1;let s=this.getPoint(n),o=this.getPoint(r),a=t||(s.isVector2?new Z:new R);return a.copy(o).sub(s).normalize(),a}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){let i=new R,n=[],r=[],s=[],o=new R,a=new Ge;for(let f=0;f<=e;f++){let m=f/e;n[f]=this.getTangentAt(m,new R)}r[0]=new R,s[0]=new R;let l=Number.MAX_VALUE,c=Math.abs(n[0].x),h=Math.abs(n[0].y),u=Math.abs(n[0].z);if(c<=l)l=c,i.set(1,0,0);if(h<=l)l=h,i.set(0,1,0);if(u<=l)i.set(0,0,1);o.crossVectors(n[0],i).normalize(),r[0].crossVectors(n[0],o),s[0].crossVectors(n[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),s[f]=s[f-1].clone(),o.crossVectors(n[f-1],n[f]),o.length()>Number.EPSILON){o.normalize();let m=Math.acos(lt(n[f-1].dot(n[f]),-1,1));r[f].applyMatrix4(a.makeRotationAxis(o,m))}s[f].crossVectors(n[f],r[f])}if(t===!0){let f=Math.acos(lt(r[0].dot(r[e]),-1,1));if(f/=e,n[0].dot(o.crossVectors(r[0],r[e]))>0)f=-f;for(let m=1;m<=e;m++)r[m].applyMatrix4(a.makeRotationAxis(n[m],f*m)),s[m].crossVectors(n[m],r[m])}return{tangents:n,normals:r,binormals:s}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}}class eo extends xi{constructor(e=0,t=0,i=1,n=1,r=0,s=Math.PI*2,o=!1,a=0){super();this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=n,this.aStartAngle=r,this.aEndAngle=s,this.aClockwise=o,this.aRotation=a}getPoint(e,t=new Z){let i=t,n=Math.PI*2,r=this.aEndAngle-this.aStartAngle,s=Math.abs(r)<Number.EPSILON;while(r<0)r+=n;while(r>n)r-=n;if(r<Number.EPSILON)if(s)r=0;else r=n;if(this.aClockwise===!0&&!s)if(r===n)r=-n;else r=r-n;let o=this.aStartAngle+e*r,a=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let c=Math.cos(this.aRotation),h=Math.sin(this.aRotation),u=a-this.aX,f=l-this.aY;a=u*c-f*h+this.aX,l=u*h+f*c+this.aY}return i.set(a,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class $f extends eo{constructor(e,t,i,n,r,s){super(e,t,i,i,n,r,s);this.isArcCurve=!0,this.type="ArcCurve"}}function iu(){let e=0,t=0,i=0,n=0;function r(s,o,a,l){e=s,t=a,i=-3*s+3*o-2*a-l,n=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){r(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,h,u){let f=(o-s)/c-(a-s)/(c+h)+(a-o)/h,m=(a-o)/h-(l-o)/(h+u)+(l-a)/u;f*=h,m*=h,r(o,a,f,m)},calc:function(s){let o=s*s,a=o*s;return e+t*s+i*o+n*a}}}var Gp=new R,kp=new R,Qf=new iu,eu=new iu,tu=new iu;class Kn extends xi{constructor(e=[],t=!1,i="centripetal",n=0.5){super();this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=n}getPoint(e,t=new R){let i=t,n=this.points,r=n.length,s=(r-(this.closed?0:1))*e,o=Math.floor(s),a=s-o;if(this.closed)o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r;else if(a===0&&o===r-1)o=r-2,a=1;let l,c;if(this.closed||o>0)l=n[(o-1)%r];else kp.subVectors(n[0],n[1]).add(n[0]),l=kp;let h=n[o%r],u=n[(o+1)%r];if(this.closed||o+2<r)c=n[(o+2)%r];else Gp.subVectors(n[r-1],n[r-2]).add(n[r-1]),c=Gp;if(this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?0.5:0.25,m=Math.pow(l.distanceToSquared(h),f),g=Math.pow(h.distanceToSquared(u),f),x=Math.pow(u.distanceToSquared(c),f);if(g<0.0001)g=1;if(m<0.0001)m=g;if(x<0.0001)x=g;Qf.initNonuniformCatmullRom(l.x,h.x,u.x,c.x,m,g,x),eu.initNonuniformCatmullRom(l.y,h.y,u.y,c.y,m,g,x),tu.initNonuniformCatmullRom(l.z,h.z,u.z,c.z,m,g,x)}else if(this.curveType==="catmullrom")Qf.initCatmullRom(l.x,h.x,u.x,c.x,this.tension),eu.initCatmullRom(l.y,h.y,u.y,c.y,this.tension),tu.initCatmullRom(l.z,h.z,u.z,c.z,this.tension);return i.set(Qf.calc(a),eu.calc(a),tu.calc(a)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let n=e.points[t];this.points.push(n.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let n=this.points[t];e.points.push(n.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let n=e.points[t];this.points.push(new R().fromArray(n))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function nu(e,t,i,n,r){let s=(n-t)*0.5,o=(r-i)*0.5,a=e*e,l=e*a;return(2*i-2*n+s+o)*l+(-3*i+3*n-2*s-o)*a+s*e+i}function hy(e,t){let i=1-e;return i*i*t}function fy(e,t){return 2*(1-e)*e*t}function uy(e,t){return e*e*t}function to(e,t,i,n){return hy(e,t)+fy(e,i)+uy(e,n)}function dy(e,t){let i=1-e;return i*i*i*t}function py(e,t){let i=1-e;return 3*i*i*e*t}function my(e,t){return 3*(1-e)*e*e*t}function gy(e,t){return e*e*e*t}function io(e,t,i,n,r){return dy(e,t)+py(e,i)+my(e,n)+gy(e,r)}class Bl extends xi{constructor(e=new Z,t=new Z,i=new Z,n=new Z){super();this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=n}getPoint(e,t=new Z){let i=t,n=this.v0,r=this.v1,s=this.v2,o=this.v3;return i.set(io(e,n.x,r.x,s.x,o.x),io(e,n.y,r.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class ru extends xi{constructor(e=new R,t=new R,i=new R,n=new R){super();this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=n}getPoint(e,t=new R){let i=t,n=this.v0,r=this.v1,s=this.v2,o=this.v3;return i.set(io(e,n.x,r.x,s.x,o.x),io(e,n.y,r.y,s.y,o.y),io(e,n.z,r.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Ol extends xi{constructor(e=new Z,t=new Z){super();this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Z){let i=t;if(e===1)i.copy(this.v2);else i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1);return i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Z){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class su extends xi{constructor(e=new R,t=new R){super();this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new R){let i=t;if(e===1)i.copy(this.v2);else i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1);return i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new R){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Hl extends xi{constructor(e=new Z,t=new Z,i=new Z){super();this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new Z){let i=t,n=this.v0,r=this.v1,s=this.v2;return i.set(to(e,n.x,r.x,s.x),to(e,n.y,r.y,s.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class zl extends xi{constructor(e=new R,t=new R,i=new R){super();this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new R){let i=t,n=this.v0,r=this.v1,s=this.v2;return i.set(to(e,n.x,r.x,s.x),to(e,n.y,r.y,s.y),to(e,n.z,r.z,s.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Gl extends xi{constructor(e=[]){super();this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Z){let i=t,n=this.points,r=(n.length-1)*e,s=Math.floor(r),o=r-s,a=n[s===0?s:s-1],l=n[s],c=n[s>n.length-2?n.length-1:s+1],h=n[s>n.length-3?n.length-1:s+2];return i.set(nu(o,a.x,l.x,c.x,h.x),nu(o,a.y,l.y,c.y,h.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let n=e.points[t];this.points.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let n=this.points[t];e.points.push(n.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let n=e.points[t];this.points.push(new Z().fromArray(n))}return this}}class wh extends xi{constructor(){super();this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ps[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),n=this.getCurveLengths(),r=0;while(r<n.length){if(n[r]>=i){let s=n[r]-i,o=this.curves[r],a=o.getLength(),l=a===0?0:1-s/a;return o.getPointAt(l,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,n=this.curves.length;i<n;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));if(this.autoClose)t.push(t[0]);return t}getPoints(e=12){let t=[],i;for(let n=0,r=this.curves;n<r.length;n++){let s=r[n],o=s.isEllipseCurve?e*2:s.isLineCurve||s.isLineCurve3?1:s.isSplineCurve?e*s.points.length:e,a=s.getPoints(o);for(let l=0;l<a.length;l++){let c=a[l];if(i&&i.equals(c))continue;t.push(c),i=c}}if(this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0]))t.push(t[0]);return t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let n=e.curves[t];this.curves.push(n.clone())}return this.autoClose=e.autoClose,this.cacheLengths=null,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let n=this.curves[t];e.curves.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let n=e.curves[t];this.curves.push(new ps[n.type]().fromJSON(n))}return this.cacheLengths=null,this}}class aa extends wh{constructor(e){super();if(this.type="Path",this.currentPoint=new Z,e)this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new Ol(this.currentPoint.clone(),new Z(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,n){let r=new Hl(this.currentPoint.clone(),new Z(e,t),new Z(i,n));return this.curves.push(r),this.currentPoint.set(i,n),this}bezierCurveTo(e,t,i,n,r,s){let o=new Bl(this.currentPoint.clone(),new Z(e,t),new Z(i,n),new Z(r,s));return this.curves.push(o),this.currentPoint.set(r,s),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new Gl(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,n,r,s){let o=this.currentPoint.x,a=this.currentPoint.y;return this.absarc(e+o,t+a,i,n,r,s),this}absarc(e,t,i,n,r,s){return this.absellipse(e,t,i,i,n,r,s),this}ellipse(e,t,i,n,r,s,o,a){let l=this.currentPoint.x,c=this.currentPoint.y;return this.absellipse(e+l,t+c,i,n,r,s,o,a),this}absellipse(e,t,i,n,r,s,o,a){let l=new eo(e,t,i,n,r,s,o,a);if(this.curves.length>0){let h=l.getPoint(0);if(!h.equals(this.currentPoint))this.lineTo(h.x,h.y)}this.curves.push(l);let c=l.getPoint(1);return this.currentPoint.copy(c),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Fi extends aa{constructor(e){super(e);this.uuid=vi(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,n=this.holes.length;i<n;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let n=e.holes[t];this.holes.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let n=this.holes[t];e.holes.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let n=e.holes[t];this.holes.push(new aa().fromJSON(n))}return this}}function lu(e,t,i=2){let n=t&&t.length,r=n?t[0]*i:e.length,s=Wp(e,0,r,i,!0),o=[];if(!s||s.next===s.prev)return o;let a,l,c;if(n)s=vy(e,t,s,i);if(e.length>80*i){a=e[0],l=e[1];let h=a,u=l;for(let f=i;f<r;f+=i){let m=e[f],g=e[f+1];if(m<a)a=m;if(g<l)l=g;if(m>h)h=m;if(g>u)u=g}c=Math.max(h-a,u-l),c=c!==0?32767/c:0}return Vl(s,o,i,a,l,c,0),o}function Wp(e,t,i,n,r){let s;if(r===Ly(e,t,i,n)>0)for(let o=t;o<i;o+=n)s=Vp(o/n|0,e[o],e[o+1],s);else for(let o=i-n;o>=t;o-=n)s=Vp(o/n|0,e[o],e[o+1],s);if(s&&la(s,s.next))Xl(s),s=s.next;return s}function no(e,t){if(!e)return e;if(!t)t=e;let i=e,n;do if(n=!1,!i.steiner&&(la(i,i.next)||ui(i.prev,i,i.next)===0)){if(Xl(i),i=t=i.prev,i===i.next)break;n=!0}else i=i.next;while(n||i!==t);return t}function Vl(e,t,i,n,r,s,o){if(!e)return;if(!o&&s)wy(e,n,r,s);let a=e;while(e.prev!==e.next){let l=e.prev,c=e.next;if(s?_y(e,n,r,s):xy(e)){t.push(l.i,e.i,c.i),Xl(e),e=c.next,a=c.next;continue}if(e=c,e===a){if(!o)Vl(no(e),t,i,n,r,s,1);else if(o===1)e=yy(no(e),t),Vl(e,t,i,n,r,s,2);else if(o===2)My(e,t,i,n,r,s);break}}}function xy(e){let t=e.prev,i=e,n=e.next;if(ui(t,i,n)>=0)return!1;let r=t.x,s=i.x,o=n.x,a=t.y,l=i.y,c=n.y,h=Math.min(r,s,o),u=Math.min(a,l,c),f=Math.max(r,s,o),m=Math.max(a,l,c),g=n.next;while(g!==t){if(g.x>=h&&g.x<=f&&g.y>=u&&g.y<=m&&kl(r,a,s,l,o,c,g.x,g.y)&&ui(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function _y(e,t,i,n){let r=e.prev,s=e,o=e.next;if(ui(r,s,o)>=0)return!1;let a=r.x,l=s.x,c=o.x,h=r.y,u=s.y,f=o.y,m=Math.min(a,l,c),g=Math.min(h,u,f),x=Math.max(a,l,c),d=Math.max(h,u,f),p=ou(m,g,t,i,n),y=ou(x,d,t,i,n),{prevZ:M,nextZ:b}=e;while(M&&M.z>=p&&b&&b.z<=y){if(M.x>=m&&M.x<=x&&M.y>=g&&M.y<=d&&M!==r&&M!==o&&kl(a,h,l,u,c,f,M.x,M.y)&&ui(M.prev,M,M.next)>=0)return!1;if(M=M.prevZ,b.x>=m&&b.x<=x&&b.y>=g&&b.y<=d&&b!==r&&b!==o&&kl(a,h,l,u,c,f,b.x,b.y)&&ui(b.prev,b,b.next)>=0)return!1;b=b.nextZ}while(M&&M.z>=p){if(M.x>=m&&M.x<=x&&M.y>=g&&M.y<=d&&M!==r&&M!==o&&kl(a,h,l,u,c,f,M.x,M.y)&&ui(M.prev,M,M.next)>=0)return!1;M=M.prevZ}while(b&&b.z<=y){if(b.x>=m&&b.x<=x&&b.y>=g&&b.y<=d&&b!==r&&b!==o&&kl(a,h,l,u,c,f,b.x,b.y)&&ui(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function yy(e,t){let i=e;do{let n=i.prev,r=i.next.next;if(!la(n,r)&&Yp(n,i,i.next,r)&&Wl(n,r)&&Wl(r,n))t.push(n.i,i.i,r.i),Xl(i),Xl(i.next),i=e=r;i=i.next}while(i!==e);return no(i)}function My(e,t,i,n,r,s){let o=e;do{let a=o.next.next;while(a!==o.prev){if(o.i!==a.i&&Cy(o,a)){let l=qp(o,a);o=no(o,o.next),l=no(l,l.next),Vl(o,t,i,n,r,s,0),Vl(l,t,i,n,r,s,0);return}a=a.next}o=o.next}while(o!==e)}function vy(e,t,i,n){let r=[];for(let s=0,o=t.length;s<o;s++){let a=t[s]*n,l=s<o-1?t[s+1]*n:e.length,c=Wp(e,a,l,n,!1);if(c===c.next)c.steiner=!0;r.push(Ry(c))}r.sort(Sy);for(let s=0;s<r.length;s++)i=by(r[s],i);return i}function Sy(e,t){let i=e.x-t.x;if(i===0){if(i=e.y-t.y,i===0){let n=(e.next.y-e.y)/(e.next.x-e.x),r=(t.next.y-t.y)/(t.next.x-t.x);i=n-r}}return i}function by(e,t){let i=Ty(e,t);if(!i)return t;let n=qp(i,e);return no(n,n.next),no(i,i.next)}function Ty(e,t){let i=t,{x:n,y:r}=e,s=-1/0,o;if(la(e,i))return i;do{if(la(e,i.next))return i.next;else if(r<=i.y&&r>=i.next.y&&i.next.y!==i.y){let u=i.x+(r-i.y)*(i.next.x-i.x)/(i.next.y-i.y);if(u<=n&&u>s){if(s=u,o=i.x<i.next.x?i:i.next,u===n)return o}}i=i.next}while(i!==t);if(!o)return null;let a=o,l=o.x,c=o.y,h=1/0;i=o;do{if(n>=i.x&&i.x>=l&&n!==i.x&&Xp(r<c?n:s,r,l,c,r<c?s:n,r,i.x,i.y)){let u=Math.abs(r-i.y)/(n-i.x);if(Wl(i,e)&&(u<h||u===h&&(i.x>o.x||i.x===o.x&&Ey(o,i))))o=i,h=u}i=i.next}while(i!==a);return o}function Ey(e,t){return ui(e.prev,e,t.prev)<0&&ui(t.next,e,e.next)<0}function wy(e,t,i,n){let r=e;do{if(r.z===0)r.z=ou(r.x,r.y,t,i,n);r.prevZ=r.prev,r.nextZ=r.next,r=r.next}while(r!==e);r.prevZ.nextZ=null,r.prevZ=null,Ay(r)}function Ay(e){let t,i=1;do{let n=e,r;e=null;let s=null;t=0;while(n){t++;let o=n,a=0;for(let c=0;c<i;c++)if(a++,o=o.nextZ,!o)break;let l=i;while(a>0||l>0&&o){if(a!==0&&(l===0||!o||n.z<=o.z))r=n,n=n.nextZ,a--;else r=o,o=o.nextZ,l--;if(s)s.nextZ=r;else e=r;r.prevZ=s,s=r}n=o}s.nextZ=null,i*=2}while(t>1);return e}function ou(e,t,i,n,r){return e=(e-i)*r|0,t=(t-n)*r|0,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e|t<<1}function Ry(e){let t=e,i=e;do{if(t.x<i.x||t.x===i.x&&t.y<i.y)i=t;t=t.next}while(t!==e);return i}function Xp(e,t,i,n,r,s,o,a){return(r-o)*(t-a)>=(e-o)*(s-a)&&(e-o)*(n-a)>=(i-o)*(t-a)&&(i-o)*(s-a)>=(r-o)*(n-a)}function kl(e,t,i,n,r,s,o,a){return!(e===o&&t===a)&&Xp(e,t,i,n,r,s,o,a)}function Cy(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!Iy(e,t)&&(Wl(e,t)&&Wl(t,e)&&Py(e,t)&&(ui(e.prev,e,t.prev)||ui(e,t.prev,t))||la(e,t)&&ui(e.prev,e,e.next)>0&&ui(t.prev,t,t.next)>0)}function ui(e,t,i){return(t.y-e.y)*(i.x-t.x)-(t.x-e.x)*(i.y-t.y)}function la(e,t){return e.x===t.x&&e.y===t.y}function Yp(e,t,i,n){let r=Rh(ui(e,t,i)),s=Rh(ui(e,t,n)),o=Rh(ui(i,n,e)),a=Rh(ui(i,n,t));if(r!==s&&o!==a)return!0;if(r===0&&Ah(e,i,t))return!0;if(s===0&&Ah(e,n,t))return!0;if(o===0&&Ah(i,e,n))return!0;if(a===0&&Ah(i,t,n))return!0;return!1}function Ah(e,t,i){return t.x<=Math.max(e.x,i.x)&&t.x>=Math.min(e.x,i.x)&&t.y<=Math.max(e.y,i.y)&&t.y>=Math.min(e.y,i.y)}function Rh(e){return e>0?1:e<0?-1:0}function Iy(e,t){let i=e;do{if(i.i!==e.i&&i.next.i!==e.i&&i.i!==t.i&&i.next.i!==t.i&&Yp(i,i.next,e,t))return!0;i=i.next}while(i!==e);return!1}function Wl(e,t){return ui(e.prev,e,e.next)<0?ui(e,t,e.next)>=0&&ui(e,e.prev,t)>=0:ui(e,t,e.prev)<0||ui(e,e.next,t)<0}function Py(e,t){let i=e,n=!1,r=(e.x+t.x)/2,s=(e.y+t.y)/2;do{if(i.y>s!==i.next.y>s&&i.next.y!==i.y&&r<(i.next.x-i.x)*(s-i.y)/(i.next.y-i.y)+i.x)n=!n;i=i.next}while(i!==e);return n}function qp(e,t){let i=au(e.i,e.x,e.y),n=au(t.i,t.x,t.y),r=e.next,s=t.prev;return e.next=t,t.prev=e,i.next=r,r.prev=i,n.next=i,i.prev=n,s.next=n,n.prev=s,n}function Vp(e,t,i,n){let r=au(e,t,i);if(!n)r.prev=r,r.next=r;else r.next=n.next,r.prev=n,n.next.prev=r,n.next=r;return r}function Xl(e){if(e.next.prev=e.prev,e.prev.next=e.next,e.prevZ)e.prevZ.nextZ=e.nextZ;if(e.nextZ)e.nextZ.prevZ=e.prevZ}function au(e,t,i){return{i:e,x:t,y:i,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Ly(e,t,i,n){let r=0;for(let s=t,o=i-n;s<i;s+=n)r+=(e[o]-e[s])*(e[s+1]+e[o+1]),o=s;return r}class cu{static triangulate(e,t,i=2){return lu(e,t,i)}}class Pn{static area(e){let t=e.length,i=0;for(let n=t-1,r=0;r<t;n=r++)i+=e[n].x*e[r].y-e[r].x*e[n].y;return i*0.5}static isClockWise(e){return Pn.area(e)<0}static triangulateShape(e,t){let i=[],n=[],r=[];Zp(e),Kp(i,e);let s=e.length;t.forEach(Zp);for(let a=0;a<t.length;a++)n.push(s),s+=t[a].length,Kp(i,t[a]);let o=cu.triangulate(i,n);for(let a=0;a<o.length;a+=3)r.push(o.slice(a,a+3));return r}}function Zp(e){let t=e.length;if(t>2&&e[t-1].equals(e[0]))e.pop()}function Kp(e,t){for(let i=0;i<t.length;i++)e.push(t[i].x),e.push(t[i].y)}class Mr extends Xe{constructor(e=new Fi([new Z(0.5,0.5),new Z(-0.5,0.5),new Z(-0.5,-0.5),new Z(0.5,-0.5)]),t={}){super();this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let i=this,n=[],r=[];for(let o=0,a=e.length;o<a;o++){let l=e[o];s(l)}this.setAttribute("position",new Re(n,3)),this.setAttribute("uv",new Re(r,2)),this.computeVertexNormals();function s(o){let a=[],l=t.curveSegments!==void 0?t.curveSegments:12,c=t.steps!==void 0?t.steps:1,h=t.depth!==void 0?t.depth:1,u=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:0.2,m=t.bevelSize!==void 0?t.bevelSize:f-0.1,g=t.bevelOffset!==void 0?t.bevelOffset:0,x=t.bevelSegments!==void 0?t.bevelSegments:3,d=t.extrudePath,p=t.UVGenerator!==void 0?t.UVGenerator:Dy,y,M=!1,b,v,T,_;if(d){y=d.getSpacedPoints(c),M=!0,u=!1;let ue=d.isCatmullRomCurve3?d.closed:!1;b=d.computeFrenetFrames(c,ue),v=new R,T=new R,_=new R}if(!u)x=0,f=0,m=0,g=0;let S=o.extractPoints(l),{shape:w,holes:L}=S;if(!Pn.isClockWise(w)){w=w.reverse();for(let ue=0,xe=L.length;ue<xe;ue++){let ye=L[ue];if(Pn.isClockWise(ye))L[ue]=ye.reverse()}}function U(ue){let Be=ue[0];for(let Fe=1;Fe<=ue.length;Fe++){let nt=Fe%ue.length,We=ue[nt],at=We.x-Be.x,Mt=We.y-Be.y,Ct=at*at+Mt*Mt,H=Math.max(Math.abs(We.x),Math.abs(We.y),Math.abs(Be.x),Math.abs(Be.y)),yi=0.000000000000000000010000000000000001*H*H;if(Ct<=yi){ue.splice(nt,1),Fe--;continue}Be=We}}U(w),L.forEach(U);let K=L.length,P=w;for(let ue=0;ue<K;ue++){let xe=L[ue];w=w.concat(xe)}function V(ue,xe,ye){if(!xe)Ye("ExtrudeGeometry: vec does not exist");return ue.clone().addScaledVector(xe,ye)}let D=w.length;function N(ue,xe,ye){let Be,Fe,nt,We=ue.x-xe.x,at=ue.y-xe.y,Mt=ye.x-ue.x,Ct=ye.y-ue.y,H=We*We+at*at,yi=We*Ct-at*Mt;if(Math.abs(yi)>Number.EPSILON){let q=Math.sqrt(H),pe=Math.sqrt(Mt*Mt+Ct*Ct),oe=xe.x-at/q,Ce=xe.y+We/q,de=ye.x-Ct/pe,Me=ye.y+Mt/pe,vt=((de-oe)*Ct-(Me-Ce)*Mt)/(We*Ct-at*Mt);Be=oe+We*vt-ue.x,Fe=Ce+at*vt-ue.y;let C=Be*Be+Fe*Fe;if(C<=2)return new Z(Be,Fe);else nt=Math.sqrt(C/2)}else{let q=!1;if(We>Number.EPSILON){if(Mt>Number.EPSILON)q=!0}else if(We<-Number.EPSILON){if(Mt<-Number.EPSILON)q=!0}else if(Math.sign(at)===Math.sign(Ct))q=!0;if(q)Be=-at,Fe=We,nt=Math.sqrt(H);else Be=We,Fe=at,nt=Math.sqrt(H/2)}return new Z(Be/nt,Fe/nt)}let Q=[];for(let ue=0,xe=P.length,ye=xe-1,Be=ue+1;ue<xe;ue++,ye++,Be++){if(ye===xe)ye=0;if(Be===xe)Be=0;Q[ue]=N(P[ue],P[ye],P[Be])}let G=[],z,Y=Q.concat();for(let ue=0,xe=K;ue<xe;ue++){let ye=L[ue];z=[];for(let Be=0,Fe=ye.length,nt=Fe-1,We=Be+1;Be<Fe;Be++,nt++,We++){if(nt===Fe)nt=0;if(We===Fe)We=0;z[Be]=N(ye[Be],ye[nt],ye[We])}G.push(z),Y=Y.concat(z)}let le;if(x===0)le=Pn.triangulateShape(P,L);else{let ue=[],xe=[];for(let ye=0;ye<x;ye++){let Be=ye/x,Fe=f*Math.cos(Be*Math.PI/2),nt=m*Math.sin(Be*Math.PI/2)+g;for(let We=0,at=P.length;We<at;We++){let Mt=V(P[We],Q[We],nt);if(Ie(Mt.x,Mt.y,-Fe),Be===0)ue.push(Mt)}for(let We=0,at=K;We<at;We++){let Mt=L[We];z=G[We];let Ct=[];for(let H=0,yi=Mt.length;H<yi;H++){let q=V(Mt[H],z[H],nt);if(Ie(q.x,q.y,-Fe),Be===0)Ct.push(q)}if(Be===0)xe.push(Ct)}}le=Pn.triangulateShape(ue,xe)}let k=le.length,ee=m+g;for(let ue=0;ue<D;ue++){let xe=u?V(w[ue],Y[ue],ee):w[ue];if(!M)Ie(xe.x,xe.y,0);else T.copy(b.normals[0]).multiplyScalar(xe.x),v.copy(b.binormals[0]).multiplyScalar(xe.y),_.copy(y[0]).add(T).add(v),Ie(_.x,_.y,_.z)}for(let ue=1;ue<=c;ue++)for(let xe=0;xe<D;xe++){let ye=u?V(w[xe],Y[xe],ee):w[xe];if(!M)Ie(ye.x,ye.y,h/c*ue);else T.copy(b.normals[ue]).multiplyScalar(ye.x),v.copy(b.binormals[ue]).multiplyScalar(ye.y),_.copy(y[ue]).add(T).add(v),Ie(_.x,_.y,_.z)}for(let ue=x-1;ue>=0;ue--){let xe=ue/x,ye=f*Math.cos(xe*Math.PI/2),Be=m*Math.sin(xe*Math.PI/2)+g;for(let Fe=0,nt=P.length;Fe<nt;Fe++){let We=V(P[Fe],Q[Fe],Be);Ie(We.x,We.y,h+ye)}for(let Fe=0,nt=L.length;Fe<nt;Fe++){let We=L[Fe];z=G[Fe];for(let at=0,Mt=We.length;at<Mt;at++){let Ct=V(We[at],z[at],Be);if(!M)Ie(Ct.x,Ct.y,h+ye);else Ie(Ct.x,Ct.y+y[c-1].y,y[c-1].x+ye)}}}be(),_e();function be(){let ue=n.length/3;if(u){let xe=0,ye=D*xe;for(let Be=0;Be<k;Be++){let Fe=le[Be];ft(Fe[2]+ye,Fe[1]+ye,Fe[0]+ye)}xe=c+x*2,ye=D*xe;for(let Be=0;Be<k;Be++){let Fe=le[Be];ft(Fe[0]+ye,Fe[1]+ye,Fe[2]+ye)}}else{for(let xe=0;xe<k;xe++){let ye=le[xe];ft(ye[2],ye[1],ye[0])}for(let xe=0;xe<k;xe++){let ye=le[xe];ft(ye[0]+D*c,ye[1]+D*c,ye[2]+D*c)}}i.addGroup(ue,n.length/3-ue,0)}function _e(){let ue=n.length/3,xe=0;He(P,xe),xe+=P.length;for(let ye=0,Be=L.length;ye<Be;ye++){let Fe=L[ye];He(Fe,xe),xe+=Fe.length}i.addGroup(ue,n.length/3-ue,1)}function He(ue,xe){let ye=ue.length;while(--ye>=0){let Be=ye,Fe=ye-1;if(Fe<0)Fe=ue.length-1;for(let nt=0,We=c+x*2;nt<We;nt++){let at=D*nt,Mt=D*(nt+1),Ct=xe+Be+at,H=xe+Fe+at,yi=xe+Fe+Mt,q=xe+Be+Mt;ze(Ct,H,yi,q)}}}function Ie(ue,xe,ye){a.push(ue),a.push(xe),a.push(ye)}function ft(ue,xe,ye){ke(ue),ke(xe),ke(ye);let Be=n.length/3,Fe=p.generateTopUV(i,n,Be-3,Be-2,Be-1);pt(Fe[0]),pt(Fe[1]),pt(Fe[2])}function ze(ue,xe,ye,Be){ke(ue),ke(xe),ke(Be),ke(xe),ke(ye),ke(Be);let Fe=n.length/3,nt=p.generateSideWallUV(i,n,Fe-6,Fe-3,Fe-2,Fe-1);pt(nt[0]),pt(nt[1]),pt(nt[3]),pt(nt[1]),pt(nt[2]),pt(nt[3])}function ke(ue){n.push(a[ue*3+0]),n.push(a[ue*3+1]),n.push(a[ue*3+2])}function pt(ue){r.push(ue.x),r.push(ue.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return Ny(t,i,e)}static fromJSON(e,t){let i=[];for(let r=0,s=e.shapes.length;r<s;r++){let o=t[e.shapes[r]];i.push(o)}let n=e.options.extrudePath;if(n!==void 0)e.options.extrudePath=new ps[n.type]().fromJSON(n);return new Mr(i,e.options)}}var Dy={generateTopUV:function(e,t,i,n,r){let s=t[i*3],o=t[i*3+1],a=t[n*3],l=t[n*3+1],c=t[r*3],h=t[r*3+1];return[new Z(s,o),new Z(a,l),new Z(c,h)]},generateSideWallUV:function(e,t,i,n,r,s){let o=t[i*3],a=t[i*3+1],l=t[i*3+2],c=t[n*3],h=t[n*3+1],u=t[n*3+2],f=t[r*3],m=t[r*3+1],g=t[r*3+2],x=t[s*3],d=t[s*3+1],p=t[s*3+2];if(Math.abs(a-h)<Math.abs(o-c))return[new Z(o,1-l),new Z(c,1-u),new Z(f,1-g),new Z(x,1-p)];else return[new Z(a,1-l),new Z(h,1-u),new Z(m,1-g),new Z(d,1-p)]}};function Ny(e,t,i){if(i.shapes=[],Array.isArray(e))for(let n=0,r=e.length;n<r;n++){let s=e[n];i.shapes.push(s.uuid)}else i.shapes.push(e.uuid);if(i.options=Object.assign({},t),t.extrudePath!==void 0)i.options.extrudePath=t.extrudePath.toJSON();return i}class Yl extends Xe{constructor(e=[new Z(0,-0.5),new Z(0.5,0),new Z(0,0.5)],t=12,i=0,n=Math.PI*2){super();this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:n},t=Math.floor(t),n=lt(n,0,Math.PI*2);let r=[],s=[],o=[],a=[],l=[],c=1/t,h=new R,u=new Z,f=new R,m=new R,g=new R,x=0,d=0;for(let p=0;p<=e.length-1;p++)switch(p){case 0:x=e[p+1].x-e[p].x,d=e[p+1].y-e[p].y,f.x=d*1,f.y=-x,f.z=d*0,g.copy(f),f.normalize(),a.push(f.x,f.y,f.z);break;case e.length-1:g.normalize(),a.push(g.x,g.y,g.z);break;default:x=e[p+1].x-e[p].x,d=e[p+1].y-e[p].y,f.x=d*1,f.y=-x,f.z=d*0,m.copy(f),f.x+=g.x,f.y+=g.y,f.z+=g.z,f.normalize(),a.push(f.x,f.y,f.z),g.copy(m)}for(let p=0;p<=t;p++){let y=i+p*c*n,M=Math.sin(y),b=Math.cos(y);for(let v=0;v<=e.length-1;v++){h.x=e[v].x*M,h.y=e[v].y,h.z=e[v].x*b,s.push(h.x,h.y,h.z),u.x=p/t,u.y=v/(e.length-1),o.push(u.x,u.y);let T=a[3*v+0]*M,_=a[3*v+1],S=a[3*v+0]*b;l.push(T,_,S)}}for(let p=0;p<t;p++)for(let y=0;y<e.length-1;y++){let M=y+p*e.length,b=M,v=M+e.length,T=M+e.length+1,_=M+1;r.push(b,v,_),r.push(T,_,v)}this.setIndex(r),this.setAttribute("position",new Re(s,3)),this.setAttribute("uv",new Re(o,2)),this.setAttribute("normal",new Re(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yl(e.points,e.segments,e.phiStart,e.phiLength)}}class zt extends Xe{constructor(e=1,t=1,i=1,n=1){super();this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:n};let r=e/2,s=t/2,o=Math.floor(i),a=Math.floor(n),l=o+1,c=a+1,h=e/o,u=t/a,f=[],m=[],g=[],x=[];for(let d=0;d<c;d++){let p=d*u-s;for(let y=0;y<l;y++){let M=y*h-r;m.push(M,-p,0),g.push(0,0,1),x.push(y/o),x.push(1-d/a)}}for(let d=0;d<a;d++)for(let p=0;p<o;p++){let y=p+l*d,M=p+l*(d+1),b=p+1+l*(d+1),v=p+1+l*d;f.push(y,M,v),f.push(M,b,v)}this.setIndex(f),this.setAttribute("position",new Re(m,3)),this.setAttribute("normal",new Re(g,3)),this.setAttribute("uv",new Re(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zt(e.width,e.height,e.widthSegments,e.heightSegments)}}class ro extends Xe{constructor(e=0.5,t=1,i=32,n=1,r=0,s=Math.PI*2){super();this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:n,thetaStart:r,thetaLength:s},i=Math.max(3,i),n=Math.max(1,n);let o=[],a=[],l=[],c=[],h=e,u=(t-e)/n,f=new R,m=new Z;for(let g=0;g<=n;g++){for(let x=0;x<=i;x++){let d=r+x/i*s;f.x=h*Math.cos(d),f.y=h*Math.sin(d),a.push(f.x,f.y,f.z),l.push(0,0,1),m.x=(f.x/t+1)/2,m.y=(f.y/t+1)/2,c.push(m.x,m.y)}h+=u}for(let g=0;g<n;g++){let x=g*(i+1);for(let d=0;d<i;d++){let p=d+x,y=p,M=p+i+1,b=p+i+2,v=p+1;o.push(y,M,v),o.push(M,b,v)}}this.setIndex(o),this.setAttribute("position",new Re(a,3)),this.setAttribute("normal",new Re(l,3)),this.setAttribute("uv",new Re(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ro(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class so extends Xe{constructor(e=new Fi([new Z(0,0.5),new Z(-0.5,-0.5),new Z(0.5,-0.5)]),t=12){super();this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let i=[],n=[],r=[],s=[],o=0,a=0;if(Array.isArray(e)===!1)l(e);else for(let c=0;c<e.length;c++)l(e[c]),this.addGroup(o,a,c),o+=a,a=0;this.setIndex(i),this.setAttribute("position",new Re(n,3)),this.setAttribute("normal",new Re(r,3)),this.setAttribute("uv",new Re(s,2));function l(c){let h=n.length/3,u=c.extractPoints(t),{shape:f,holes:m}=u;if(Pn.isClockWise(f)===!1)f=f.reverse();for(let x=0,d=m.length;x<d;x++){let p=m[x];if(Pn.isClockWise(p)===!0)m[x]=p.reverse()}let g=Pn.triangulateShape(f,m);for(let x=0,d=m.length;x<d;x++){let p=m[x];f=f.concat(p)}for(let x=0,d=f.length;x<d;x++){let p=f[x];n.push(p.x,p.y,0),r.push(0,0,1),s.push(p.x,p.y)}for(let x=0,d=g.length;x<d;x++){let p=g[x],y=p[0]+h,M=p[1]+h,b=p[2]+h;i.push(y,M,b),a+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return Fy(t,e)}static fromJSON(e,t){let i=[];for(let n=0,r=e.shapes.length;n<r;n++){let s=t[e.shapes[n]];i.push(s)}return new so(i,e.curveSegments)}}function Fy(e,t){if(t.shapes=[],Array.isArray(e))for(let i=0,n=e.length;i<n;i++){let r=e[i];t.shapes.push(r.uuid)}else t.shapes.push(e.uuid);return t}class xn extends Xe{constructor(e=1,t=32,i=16,n=0,r=Math.PI*2,s=0,o=Math.PI){super();this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:n,phiLength:r,thetaStart:s,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let a=Math.min(s+o,Math.PI),l=0,c=[],h=new R,u=new R,f=[],m=[],g=[],x=[];for(let d=0;d<=i;d++){let p=[],y=d/i,M=s+y*o,b=e*Math.cos(M),v=Math.sqrt(e*e-b*b),T=0;if(d===0&&s===0)T=0.5/t;else if(d===i&&a===Math.PI)T=-0.5/t;for(let _=0;_<=t;_++){let S=_/t,w=n+S*r;h.x=-v*Math.cos(w),h.y=b,h.z=v*Math.sin(w),m.push(h.x,h.y,h.z),u.copy(h).normalize(),g.push(u.x,u.y,u.z),x.push(S+T,1-y),p.push(l++)}c.push(p)}for(let d=0;d<i;d++)for(let p=0;p<t;p++){let y=c[d][p+1],M=c[d][p],b=c[d+1][p],v=c[d+1][p+1];if(d!==0||s>0)f.push(y,M,v);if(d!==i-1||a<Math.PI)f.push(M,b,v)}this.setIndex(f),this.setAttribute("position",new Re(m,3)),this.setAttribute("normal",new Re(g,3)),this.setAttribute("uv",new Re(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xn(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Ln extends Xe{constructor(e=1,t=0.4,i=12,n=48,r=Math.PI*2,s=0,o=Math.PI*2){super();this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:n,arc:r,thetaStart:s,thetaLength:o},i=Math.floor(i),n=Math.floor(n);let a=[],l=[],c=[],h=[],u=new R,f=new R,m=new R;for(let g=0;g<=i;g++){let x=s+g/i*o;for(let d=0;d<=n;d++){let p=d/n*r;f.x=(e+t*Math.cos(x))*Math.cos(p),f.y=(e+t*Math.cos(x))*Math.sin(p),f.z=t*Math.sin(x),l.push(f.x,f.y,f.z),u.x=e*Math.cos(p),u.y=e*Math.sin(p),m.subVectors(f,u).normalize(),c.push(m.x,m.y,m.z),h.push(d/n),h.push(g/i)}}for(let g=1;g<=i;g++)for(let x=1;x<=n;x++){let d=(n+1)*g+x-1,p=(n+1)*(g-1)+x-1,y=(n+1)*(g-1)+x,M=(n+1)*g+x;a.push(d,p,M),a.push(p,y,M)}this.setIndex(a),this.setAttribute("position",new Re(l,3)),this.setAttribute("normal",new Re(c,3)),this.setAttribute("uv",new Re(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ln(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}class fr extends Xe{constructor(e=new zl(new R(-1,-1,0),new R(-1,1,0),new R(1,1,0)),t=64,i=1,n=8,r=!1){super();this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:n,closed:r};let s=e.computeFrenetFrames(t,r);this.tangents=s.tangents,this.normals=s.normals,this.binormals=s.binormals;let o=new R,a=new R,l=new Z,c=new R,h=[],u=[],f=[],m=[];g(),this.setIndex(m),this.setAttribute("position",new Re(h,3)),this.setAttribute("normal",new Re(u,3)),this.setAttribute("uv",new Re(f,2));function g(){for(let y=0;y<t;y++)x(y);x(r===!1?t:0),p(),d()}function x(y){c=e.getPointAt(y/t,c);let M=s.normals[y],b=s.binormals[y];for(let v=0;v<=n;v++){let T=v/n*Math.PI*2,_=Math.sin(T),S=-Math.cos(T);a.x=S*M.x+_*b.x,a.y=S*M.y+_*b.y,a.z=S*M.z+_*b.z,a.normalize(),u.push(a.x,a.y,a.z),o.x=c.x+i*a.x,o.y=c.y+i*a.y,o.z=c.z+i*a.z,h.push(o.x,o.y,o.z)}}function d(){for(let y=1;y<=t;y++)for(let M=1;M<=n;M++){let b=(n+1)*(y-1)+(M-1),v=(n+1)*y+(M-1),T=(n+1)*y+M,_=(n+1)*(y-1)+M;m.push(b,v,_),m.push(v,T,_)}}function p(){for(let y=0;y<=t;y++)for(let M=0;M<=n;M++)l.x=y/t,l.y=M/n,f.push(l.x,l.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new fr(new ps[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}function Wr(e){let t={};for(let i in e){t[i]={};for(let n in e[i]){let r=e[i][n];if(Jp(r))if(r.isRenderTargetTexture)Te("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][n]=null;else t[i][n]=r.clone();else if(Array.isArray(r))if(Jp(r[0])){let s=[];for(let o=0,a=r.length;o<a;o++)s[o]=r[o].clone();t[i][n]=s}else t[i][n]=r.slice();else t[i][n]=r}}return t}function hn(e){let t={};for(let i=0;i<e.length;i++){let n=Wr(e[i]);for(let r in n)t[r]=n[r]}return t}function Jp(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function jp(e){let t=[];for(let i=0;i<e.length;i++)t.push(e[i].clone());return t}function Ch(e){let t=e.getRenderTarget();if(t===null)return e.outputColorSpace;if(t.isXRRenderTarget===!0)return t.texture.colorSpace;return ht.workingColorSpace}var vr={clone:Wr,merge:hn};var $p=`
void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}
`;var Qp=`
void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}
`;class ai extends Vt{constructor(e){super();if(this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=$p,this.fragmentShader=Qp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0)this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Wr(e.uniforms),this.uniformsGroups=jp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let s=this.uniforms[n].value;if(s&&s.isTexture)t.uniforms[n]={type:"t",value:s.toJSON(e).uuid};else if(s&&s.isColor)t.uniforms[n]={type:"c",value:s.getHex()};else if(s&&s.isVector2)t.uniforms[n]={type:"v2",value:s.toArray()};else if(s&&s.isVector3)t.uniforms[n]={type:"v3",value:s.toArray()};else if(s&&s.isVector4)t.uniforms[n]={type:"v4",value:s.toArray()};else if(s&&s.isMatrix3)t.uniforms[n]={type:"m3",value:s.toArray()};else if(s&&s.isMatrix4)t.uniforms[n]={type:"m4",value:s.toArray()};else t.uniforms[n]={value:s}}if(Object.keys(this.defines).length>0)t.defines=this.defines;t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let n in this.extensions)if(this.extensions[n]===!0)i[n]=!0;if(Object.keys(i).length>0)t.extensions=i;return t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let i in e.uniforms){let n=e.uniforms[i];switch(this.uniforms[i]={},n.type){case"t":this.uniforms[i].value=t[n.value]||null;break;case"c":this.uniforms[i].value=new ge().setHex(n.value);break;case"v2":this.uniforms[i].value=new Z().fromArray(n.value);break;case"v3":this.uniforms[i].value=new R().fromArray(n.value);break;case"v4":this.uniforms[i].value=new Et().fromArray(n.value);break;case"m3":this.uniforms[i].value=new st().fromArray(n.value);break;case"m4":this.uniforms[i].value=new Ge().fromArray(n.value);break;default:this.uniforms[i].value=n.value}}if(e.defines!==void 0)this.defines=e.defines;if(e.vertexShader!==void 0)this.vertexShader=e.vertexShader;if(e.fragmentShader!==void 0)this.fragmentShader=e.fragmentShader;if(e.glslVersion!==void 0)this.glslVersion=e.glslVersion;if(e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];if(e.lights!==void 0)this.lights=e.lights;if(e.clipping!==void 0)this.clipping=e.clipping;return this}}class oo extends ai{constructor(e){super(e);this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class dt extends Vt{constructor(e){super();this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ge(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=rr,this.normalScale=new Z(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new an,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ki extends dt{constructor(e){super();this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Z(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return lt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+0.4*t)/(1-0.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new ge(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ge(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ge(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){if(this._anisotropy>0!==e>0)this.version++;this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){if(this._clearcoat>0!==e>0)this.version++;this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){if(this._diffuseRoughness>0!==e>0)this.version++;this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){if(this._iridescence>0!==e>0)this.version++;this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){if(this._dispersion>0!==e>0)this.version++;this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){if(this._retroreflectivity>0!==e>0)this.version++;this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){if(this._sheen>0!==e>0)this.version++;this._sheen=e}get transmission(){return this._transmission}set transmission(e){if(this._transmission>0!==e>0)this.version++;this._transmission=e}get iridescenceThicknessRange(){return Wn('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){Wn('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class ql extends Vt{constructor(e){super();this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=rr,this.normalScale=new Z(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new an,this.combine=Ns,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=0.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Zl extends Vt{constructor(e){super();this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Zd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Kl extends Vt{constructor(e){super();this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function Sr(e,t){if(!e||e.constructor===t)return e;if(typeof t.BYTES_PER_ELEMENT==="number")return new t(e);return Array.prototype.slice.call(e)}function ao(e){return e!==void 0&&e.inTangents!==void 0&&e.outTangents!==void 0}function e0(e){function t(r,s){return e[r]-e[s]}let i=e.length,n=Array(i);for(let r=0;r!==i;++r)n[r]=r;return n.sort(t),n}function hu(e,t,i){let n=e.length,r=new e.constructor(n);for(let s=0,o=0;o!==n;++s){let a=i[s]*t;for(let l=0;l!==t;++l)r[o++]=e[a+l]}return r}function t0(e,t,i,n){let r=1,s=e[0];while(s!==void 0&&s[n]===void 0)s=e[r++];if(s===void 0)return;let o=s[n];if(o===void 0)return;if(Array.isArray(o))do{if(o=s[n],o!==void 0)t.push(s.time),i.push(...o);s=e[r++]}while(s!==void 0);else if(o.toArray!==void 0)do{if(o=s[n],o!==void 0)t.push(s.time),o.toArray(i,i.length);s=e[r++]}while(s!==void 0);else do{if(o=s[n],o!==void 0)t.push(s.time),i.push(o);s=e[r++]}while(s!==void 0)}class Sn{constructor(e,t,i,n){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=n!==void 0?n:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,n=t[i],r=t[i-1];i:{e:{let s;t:{n:if(!(e<n)){for(let o=i+2;;){if(n===void 0){if(e<r)break n;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=n,n=t[++i],e<n)break e}s=t.length;break t}if(!(e>=r)){let o=t[1];if(e<o)i=2,r=o;for(let a=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===a)break;if(n=r,r=t[--i-1],e>=r)break e}s=i,i=0;break t}break i}while(i<s){let o=i+s>>>1;if(e<t[o])s=o;else i=o+1}if(n=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,n)}return this.interpolate_(i,r,e,n)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,n=this.valueSize,r=e*n;for(let s=0;s!==n;++s)t[s]=i[r+s];return t}interpolate_(){throw Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}}class Ih extends Sn{constructor(e,t,i,n){super(e,t,i,n);this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Fc,endingEnd:Fc}}intervalChanged_(e,t,i){let n=this.parameterPositions,r=e-2,s=e+1,o=n[r],a=n[s];if(o===void 0)switch(this.getSettings_().endingStart){case Uc:r=e,o=2*t-i;break;case Bc:r=n.length-2,o=t+n[r]-n[r+1];break;default:r=e,o=i}if(a===void 0)switch(this.getSettings_().endingEnd){case Uc:s=e,a=2*i-t;break;case Bc:s=1,a=i+n[1]-n[0];break;default:s=e-1,a=t}let l=(i-t)*0.5,c=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(a-i),this._offsetPrev=r*c,this._offsetNext=s*c}interpolate_(e,t,i,n){let r=this.resultBuffer,s=this.sampleValues,o=this.valueSize,a=e*o,l=a-o,c=this._offsetPrev,h=this._offsetNext,u=this._weightPrev,f=this._weightNext,m=(i-t)/(n-t),g=m*m,x=g*m,d=-u*x+2*u*g-u*m,p=(1+u)*x+(-1.5-2*u)*g+(-0.5+u)*m+1,y=(-1-f)*x+(1.5+f)*g+0.5*m,M=f*x-f*g;for(let b=0;b!==o;++b)r[b]=d*s[c+b]+p*s[l+b]+y*s[a+b]+M*s[h+b];return r}}class Jl extends Sn{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){let r=this.resultBuffer,s=this.sampleValues,o=this.valueSize,a=e*o,l=a-o,c=(i-t)/(n-t),h=1-c;for(let u=0;u!==o;++u)r[u]=s[l+u]*h+s[a+u]*c;return r}}class Ph extends Sn{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e){return this.copySampleValue_(e-1)}}class Lh extends Sn{interpolate_(e,t,i,n){let r=this.resultBuffer,s=this.sampleValues,o=this.valueSize,a=e*o,l=a-o,c=this.inTangents,h=this.outTangents;if(!c||!h){let m=(i-t)/(n-t),g=1-m;for(let x=0;x!==o;++x)r[x]=s[l+x]*g+s[a+x]*m;return r}let u=o*2,f=e-1;for(let m=0;m!==o;++m){let g=s[l+m],x=s[a+m],d=f*u+m*2,p=h[d],y=h[d+1],M=e*u+m*2,b=c[M],v=c[M+1],T=Xy(i,t,p,b,n);r[m]=n0(T,g,y,v,x)}return r}}function n0(e,t,i,n,r){let s=1-e;return s*s*s*t+3*s*s*e*i+3*s*e*e*n+e*e*e*r}function Wy(e,t,i,n,r){let s=1-e;return 3*s*s*(i-t)+6*s*e*(n-i)+3*e*e*(r-n)}function Xy(e,t,i,n,r){let s=(e-t)/(r-t);for(let o=0;o<8;o++){let a=n0(s,t,i,n,r)-e;if(Math.abs(a)<0.0000000001)break;let l=Wy(s,t,i,n,r);if(Math.abs(l)<0.0000000001)break;s=Math.max(0,Math.min(1,s-a/l))}return s}class Ai{constructor(e,t,i,n){if(e===void 0)throw Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Sr(t,this.TimeBufferType),this.values=Sr(i,this.ValueBufferType),this.setInterpolation(n||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Sr(e.times,Array),values:Sr(e.values,Array)};let n=e.getInterpolation();if(n!==e.DefaultInterpolation)i.interpolation=n;if(ao(e.settings))i.settings={inTangents:Sr(e.settings.inTangents,Array),outTangents:Sr(e.settings.outTangents,Array)}}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Ph(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Jl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Ih(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Lh(this.times,this.values,this.getValueSize(),e);if(this.settings)t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents;return t}setInterpolation(e){let t;switch(e){case Nr:t=this.InterpolantFactoryMethodDiscrete;break;case Hs:t=this.InterpolantFactoryMethodLinear;break;case Nc:t=this.InterpolantFactoryMethodSmooth;break;case vf:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(i);return Te("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Nr;case this.InterpolantFactoryMethodLinear:return Hs;case this.InterpolantFactoryMethodSmooth:return Nc;case this.InterpolantFactoryMethodBezier:return vf}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]+=e;if(ao(this.settings))r0(this.settings.inTangents,e),r0(this.settings.outTangents,e)}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]*=e;if(ao(this.settings))s0(this.settings.inTangents,e),s0(this.settings.outTangents,e)}return this}trim(e,t){let i=this.times,n=i.length,r=0,s=n-1;while(r!==n&&i[r]<e)++r;while(s!==-1&&i[s]>t)--s;if(++s,r!==0||s!==n){if(r>=s)s=Math.max(s,1),r=s-1;let o=this.getValueSize();this.times=i.slice(r,s),this.values=this.values.slice(r*o,s*o)}return this}validate(){let e=!0,t=this.getValueSize();if(t-Math.floor(t)!==0)Ye("KeyframeTrack: Invalid value size in track.",this),e=!1;let i=this.times,n=this.values,r=i.length;if(r===0)Ye("KeyframeTrack: Track is empty.",this),e=!1;let s=null;for(let o=0;o!==r;o++){let a=i[o];if(typeof a==="number"&&isNaN(a)){Ye("KeyframeTrack: Time is not a valid number.",this,o,a),e=!1;break}if(s!==null&&s>a){Ye("KeyframeTrack: Out of order keys.",this,o,a,s),e=!1;break}s=a}if(n!==void 0){if(bf(n))for(let o=0,a=n.length;o!==a;++o){let l=n[o];if(isNaN(l)){Ye("KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),n=this.getInterpolation()===Nc,r=e.length-1,s=1;for(let o=1;o<r;++o){let a=!1,l=e[o],c=e[o+1];if(l!==c&&(o!==1||l!==e[0]))if(!n){let h=o*i,u=h-i,f=h+i;for(let m=0;m!==i;++m){let g=t[h+m];if(g!==t[u+m]||g!==t[f+m]){a=!0;break}}}else a=!0;if(a){if(o!==s){e[s]=e[o];let h=o*i,u=s*i;for(let f=0;f!==i;++f)t[u+f]=t[h+f]}++s}}if(r>0){e[s]=e[r];for(let o=r*i,a=s*i,l=0;l!==i;++l)t[a+l]=t[o+l];++s}if(s!==e.length)this.times=e.slice(0,s),this.values=t.slice(0,s*i);else this.times=e,this.values=t;return this}clone(){let e=this.times.slice(),t=this.values.slice(),n=new this.constructor(this.name,e,t);if(n.createInterpolant=this.createInterpolant,ao(this.settings))n.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()};return n}}function r0(e,t){for(let i=0,n=e.length;i!==n;i+=2)e[i]+=t}function s0(e,t){for(let i=0,n=e.length;i!==n;i+=2)e[i]*=t}Ai.prototype.ValueTypeName="";Ai.prototype.TimeBufferType=Float32Array;Ai.prototype.ValueBufferType=Float32Array;Ai.prototype.DefaultInterpolation=Hs;class Xr extends Ai{constructor(e,t,i){super(e,t,i)}}Xr.prototype.ValueTypeName="bool";Xr.prototype.ValueBufferType=Array;Xr.prototype.DefaultInterpolation=Nr;Xr.prototype.InterpolantFactoryMethodLinear=void 0;Xr.prototype.InterpolantFactoryMethodSmooth=void 0;class jl extends Ai{constructor(e,t,i,n){super(e,t,i,n)}}jl.prototype.ValueTypeName="color";class Yr extends Ai{constructor(e,t,i,n){super(e,t,i,n)}}Yr.prototype.ValueTypeName="number";class Dh extends Sn{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){let r=this.resultBuffer,s=this.sampleValues,o=this.valueSize,a=(i-t)/(n-t),l=e*o;for(let c=l+o;l!==c;l+=4)oi.slerpFlat(r,0,s,l-o,s,l,a);return r}}class br extends Ai{constructor(e,t,i,n){super(e,t,i,n)}InterpolantFactoryMethodLinear(e){return new Dh(this.times,this.values,this.getValueSize(),e)}}br.prototype.ValueTypeName="quaternion";br.prototype.InterpolantFactoryMethodSmooth=void 0;class qr extends Ai{constructor(e,t,i){super(e,t,i)}}qr.prototype.ValueTypeName="string";qr.prototype.ValueBufferType=Array;qr.prototype.DefaultInterpolation=Nr;qr.prototype.InterpolantFactoryMethodLinear=void 0;qr.prototype.InterpolantFactoryMethodSmooth=void 0;class Zr extends Ai{constructor(e,t,i,n){super(e,t,i,n)}}Zr.prototype.ValueTypeName="vector";class ms{constructor(e="",t=-1,i=[],n=Oc){if(this.name=e,this.tracks=i,this.duration=t,this.blendMode=n,this.uuid=vi(),this.userData={},this.duration<0)this.resetDuration()}static parse(e){let t=[],i=e.tracks,n=1/(e.fps||1);for(let s=0,o=i.length;s!==o;++s)t.push(qy(i[s]).scale(n));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){let t=[],i=e.tracks,n={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,s=i.length;r!==s;++r)t.push(Ai.toJSON(i[r]));return n}static CreateFromMorphTargetSequence(e,t,i,n){let r=t.length,s=[];for(let o=0;o<r;o++){let a=[],l=[];a.push((o+r-1)%r,o,(o+1)%r),l.push(0,1,0);let c=e0(a);if(a=hu(a,1,c),l=hu(l,1,c),!n&&a[0]===0)a.push(r),l.push(l[0]);s.push(new Yr(".morphTargetInfluences["+t[o].name+"]",a,l).scale(1/i))}return new this(e,-1,s)}static findByName(e,t){let i=e;if(!Array.isArray(e)){let n=e;i=n.geometry&&n.geometry.animations||n.animations}for(let n=0;n<i.length;n++)if(i[n].name===t)return i[n];return null}static CreateClipsFromMorphTargetSequences(e,t,i){let n={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,a=e.length;o<a;o++){let l=e[o],c=l.name.match(r);if(c&&c.length>1){let h=c[1],u=n[h];if(!u)n[h]=u=[];u.push(l)}}let s=[];for(let o in n)s.push(this.CreateFromMorphTargetSequence(o,n[o],t,i));return s}resetDuration(){let e=this.tracks,t=0;for(let i=0,n=e.length;i!==n;++i){let r=this.tracks[i];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let i=0;i<this.tracks.length;i++)e.push(this.tracks[i].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function Yy(e){switch(e.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Yr;case"vector":case"vector2":case"vector3":case"vector4":return Zr;case"color":return jl;case"quaternion":return br;case"bool":case"boolean":return Xr;case"string":return qr}throw Error("THREE.KeyframeTrack: Unsupported typeName: "+e)}function qy(e){if(e.type===void 0)throw Error("THREE.KeyframeTrack: track type undefined, can not parse");let t=Yy(e.type);if(e.times===void 0){let n=[],r=[];t0(e.keys,n,r,"value"),e.times=n,e.values=r}let i;if(t.parse!==void 0)i=t.parse(e);else i=new t(e.name,e.times,e.values,e.interpolation);if(ao(e.settings))i.settings={inTangents:Sr(e.settings.inTangents,Float32Array),outTangents:Sr(e.settings.outTangents,Float32Array)};return i}var Dn={enabled:!1,files:{},add:function(e,t){if(this.enabled===!1)return;if(o0(e))return;this.files[e]=t},get:function(e){if(this.enabled===!1)return;if(o0(e))return;return this.files[e]},remove:function(e){delete this.files[e]},clear:function(){this.files={}}};function o0(e){try{let t=e.slice(e.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch(t){return!1}}class Nh{constructor(e,t,i){let n=this,r=!1,s=0,o=0,a=void 0,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(c){if(o++,r===!1){if(n.onStart!==void 0)n.onStart(c,s,o)}r=!0},this.itemEnd=function(c){if(s++,n.onProgress!==void 0)n.onProgress(c,s,o);if(s===o){if(r=!1,n.onLoad!==void 0)n.onLoad()}},this.itemError=function(c){if(n.onError!==void 0)n.onError(c)},this.resolveURL=function(c){if(c=c.normalize("NFC"),a)return a(c);return c},this.setURLModifier=function(c){return a=c,this},this.addHandler=function(c,h){return l.push(c,h),this},this.removeHandler=function(c){let h=l.indexOf(c);if(h!==-1)l.splice(h,2);return this},this.getHandler=function(c){for(let h=0,u=l.length;h<u;h+=2){let f=l[h],m=l[h+1];if(f.global)f.lastIndex=0;if(f.test(c))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){if(!this._abortController)this._abortController=new AbortController;return this._abortController}}var fu=new Nh;class Ti{constructor(e){if(this.manager=e!==void 0?e:fu,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(n,r){i.load(e,n,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}}Ti.DEFAULT_MATERIAL_NAME="__DEFAULT";var Kr={};class a0 extends Error{constructor(e,t){super(e);this.response=t}}class Jn extends Ti{constructor(e){super(e);this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,i,n){if(e===void 0)e="";if(this.path!==void 0)e=this.path+e;e=this.manager.resolveURL(e);let r=Dn.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{if(t)t(r);this.manager.itemEnd(e)},0);return}if(Kr[e]!==void 0){Kr[e].push({onLoad:t,onProgress:i,onError:n});return}Kr[e]=[],Kr[e].push({onLoad:t,onProgress:i,onError:n});let s=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",priority:this.priority,cache:this.cache,signal:typeof AbortSignal.any==="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,a=this.responseType;fetch(s).then((l)=>{if(l.status===200||l.status===0){if(l.status===0)Te("FileLoader: HTTP Status 0 received.");if(typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let c=Kr[e],h=l.body.getReader(),u=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),f=u?parseInt(u):0,m=f!==0,g=0,x=new ReadableStream({start(d){p();function p(){h.read().then(({done:y,value:M})=>{if(y)d.close();else{g+=M.byteLength;let b=new ProgressEvent("progress",{lengthComputable:m,loaded:g,total:f});for(let v=0,T=c.length;v<T;v++){let _=c[v];if(_.onProgress)_.onProgress(b)}d.enqueue(M),p()}},(y)=>{d.error(y)})}}});return new Response(x)}else throw new a0(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then((l)=>{switch(a){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then((c)=>new DOMParser().parseFromString(c,o));case"json":return l.json();default:if(o==="")return l.text();else{let h=/charset="?([^;"\s]*)"?/i.exec(o),u=h&&h[1]?h[1].toLowerCase():void 0,f=new TextDecoder(u);return l.arrayBuffer().then((m)=>f.decode(m))}}}).then((l)=>{Dn.add(`file:${e}`,l);let c=Kr[e];delete Kr[e];for(let h=0,u=c.length;h<u;h++){let f=c[h];if(f.onLoad)f.onLoad(l)}}).catch((l)=>{let c=Kr[e];if(c===void 0)throw this.manager.itemError(e),l;delete Kr[e];for(let h=0,u=c.length;h<u;h++){let f=c[h];if(f.onError)f.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}var ca=new WeakMap;class ha extends Ti{constructor(e){super(e)}load(e,t,i,n){if(this.path!==void 0)e=this.path+e;e=this.manager.resolveURL(e);let r=this,s=Dn.get(`image:${e}`);if(s!==void 0){if(s.complete===!0)r.manager.itemStart(e),setTimeout(function(){if(t)t(s);r.manager.itemEnd(e)},0);else{let h=ca.get(s);if(h===void 0)h=[],ca.set(s,h);h.push({onLoad:t,onError:n})}return s}let o=as("img");function a(){if(c(),t)t(this);let h=ca.get(this)||[];for(let u=0;u<h.length;u++){let f=h[u];if(f.onLoad)f.onLoad(this)}ca.delete(this),r.manager.itemEnd(e)}function l(h){if(c(),n)n(h);Dn.remove(`image:${e}`);let u=ca.get(this)||[];for(let f=0;f<u.length;f++){let m=u[f];if(m.onError)m.onError(h)}ca.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function c(){o.removeEventListener("load",a,!1),o.removeEventListener("error",l,!1)}if(o.addEventListener("load",a,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"){if(this.crossOrigin!==void 0)o.crossOrigin=this.crossOrigin}return Dn.add(`image:${e}`,o),r.manager.itemStart(e),o.fetchPriority=this.priority,o.src=e,o}}class gs extends Ti{constructor(e){super(e)}load(e,t,i,n){let r=new Lt,s=new ha(this.manager);return s.setPriority(this.priority),s.setCache(this.cache),s.setCrossOrigin(this.crossOrigin),s.setPath(this.path),s.load(e,function(o){if(r.image=o,r.needsUpdate=!0,t!==void 0)t(r)},i,n),r}}class Nn extends ct{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super();this.isLight=!0,this.type="Light",this.color=new ge(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}var uu=new Ge,l0=new R,c0=new R;class xs{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Z(512,512),this.mapType=Mi,this.map=null,this.mapPass=null,this.matrix=new Ge,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new qn,this._frameExtents=new Z(1,1),this._viewportCount=1,this._viewports=[new Et(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;l0.setFromMatrixPosition(e.matrixWorld),t.position.copy(l0),c0.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(c0),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,n){uu.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(uu,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,s=n?n.z/r.x:1,o=n?n.w/r.y:1,a=n?n.x/r.x:0,l=n?n.y/r.y:0;if(e.coordinateSystem===gr||e.reversedDepth)t.set(0.5*s,0,0,0.5*s+a,0,0.5*o,0,0.5*o+l,0,0,1,0,0,0,0,1);else t.set(0.5*s,0,0,0.5*s+a,0,0.5*o,0,0.5*o+l,0,0,0.5,0.5,0,0,0,1);t.multiply(uu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){if(this.map)this.map.dispose();if(this.mapPass)this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}var Fh=new R,Uh=new oi,Tr=new R;class lo extends ct{constructor(){super();this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ge,this.projectionMatrix=new Ge,this.projectionMatrixInverse=new Ge,this.coordinateSystem=zi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){if(super.updateMatrixWorld(e),this.matrixWorld.decompose(Fh,Uh,Tr),Tr.x===1&&Tr.y===1&&Tr.z===1)this.matrixWorldInverse.copy(this.matrixWorld).invert();else this.matrixWorldInverse.compose(Fh,Uh,Tr.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){if(super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(Fh,Uh,Tr),Tr.x===1&&Tr.y===1&&Tr.z===1)this.matrixWorldInverse.copy(this.matrixWorld).invert();else this.matrixWorldInverse.compose(Fh,Uh,Tr.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}var _s=new R,h0=new Z,f0=new Z;class ni extends lo{constructor(e=50,t=1,i=0.1,n=2000){super();this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=0.5*this.getFilmHeight()/e;this.fov=Ur*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Fr*0.5*this.fov);return 0.5*this.getFilmHeight()/e}getEffectiveFOV(){return Ur*2*Math.atan(Math.tan(Fr*0.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){_s.set(-1,-1,0.5).applyMatrix4(this.projectionMatrixInverse),t.set(_s.x,_s.y).multiplyScalar(-e/_s.z),_s.set(1,1,0.5).applyMatrix4(this.projectionMatrixInverse),i.set(_s.x,_s.y).multiplyScalar(-e/_s.z)}getViewSize(e,t){return this.getViewBounds(e,h0,f0),t.subVectors(f0,h0)}setViewOffset(e,t,i,n,r,s){if(this.aspect=e/t,this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Fr*0.5*this.fov)/this.zoom,i=2*t,n=this.aspect*i,r=-0.5*n,s=this.view;if(this.view!==null&&this.view.enabled){let{fullWidth:a,fullHeight:l}=s;r+=s.offsetX*n/a,t-=s.offsetY*i/l,n*=s.width/a,i*=s.height/l}let o=this.filmOffset;if(o!==0)r+=e*o/this.getFilmWidth();this.projectionMatrix.makePerspective(r,r+n,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);if(t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null)t.object.view=Object.assign({},this.view);return t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class du extends xs{constructor(){super(new ni(50,1,0.5,500));this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,i=Ur*2*e.angle*this.focus,n=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;if(i!==t.fov||n!==t.aspect||r!==t.far)t.fov=i,t.aspect=n,t.far=r,t.updateProjectionMatrix();super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}}class $l extends Nn{constructor(e,t,i=0,n=Math.PI/3,r=0,s=2){super(e,t);this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ct.DEFAULT_UP),this.updateMatrix(),this.target=new ct,this.distance=i,this.angle=n,this.penumbra=r,this.decay=s,this.map=null,this.shadow=new du}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);if(t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture)t.object.map=this.map.toJSON(e).uuid;return t.object.shadow=this.shadow.toJSON(),t}}class pu extends xs{constructor(){super(new ni(90,1,0.5,500));this.isPointLightShadow=!0}}class ur extends Nn{constructor(e,t,i=0,n=2){super(e,t);this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=n,this.shadow=new pu}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class dr extends lo{constructor(e=-1,t=1,i=1,n=-1,r=0.1,s=2000){super();this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=n,this.near=r,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,n,r,s){if(this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2,r=i-e,s=i+e,o=n+t,a=n-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,s=r+l*this.view.width,o-=c*this.view.offsetY,a=o-c*this.view.height}this.projectionMatrix.makeOrthographic(r,s,o,a,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);if(t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null)t.object.view=Object.assign({},this.view);return t}}class mu extends xs{constructor(){super(new dr(-5,5,5,-5,0.5,500));this.isDirectionalLightShadow=!0}}class Ql extends Nn{constructor(e,t){super(e,t);this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ct.DEFAULT_UP),this.updateMatrix(),this.target=new ct,this.shadow=new mu}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class ec extends Nn{constructor(e,t){super(e,t);this.isAmbientLight=!0,this.type="AmbientLight"}}class Jr{static extractUrlBase(e){let t=e.lastIndexOf("/");if(t===-1)return"./";return e.slice(0,t+1)}static resolveURL(e,t){if(typeof e!=="string"||e==="")return"";if(/^https?:\/\//i.test(t)&&/^\//.test(e))t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1");if(/^(https?:)?\/\//i.test(e))return e;if(/^data:.*,.*$/i.test(e))return e;if(/^blob:.*$/i.test(e))return e;return t+e}}var gu=new WeakMap;class Bh extends Ti{constructor(e){super(e);if(this.isImageBitmapLoader=!0,typeof createImageBitmap>"u")Te("ImageBitmapLoader: createImageBitmap() not supported.");if(typeof fetch>"u")Te("ImageBitmapLoader: fetch() not supported.");this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,i,n){if(e===void 0)e="";if(this.path!==void 0)e=this.path+e;e=this.manager.resolveURL(e);let r=this,s=Dn.get(`image-bitmap:${e}`);if(s!==void 0){if(r.manager.itemStart(e),s.then){s.then((l)=>{if(gu.has(s)===!0){if(n)n(gu.get(s));r.manager.itemError(e),r.manager.itemEnd(e)}else{if(t)t(l);r.manager.itemEnd(e)}});return}setTimeout(function(){if(t)t(s);r.manager.itemEnd(e)},0);return}let o={};o.credentials=this.withCredentials||this.crossOrigin!=="anonymous"?"include":"same-origin",o.headers=this.requestHeader,o.priority=this.priority,o.cache=this.cache,o.signal=typeof AbortSignal.any==="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let a=fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign({},r.options,{colorSpaceConversion:"none"}))}).then(function(l){if(Dn.add(`image-bitmap:${e}`,l),t)t(l);return r.manager.itemEnd(e),l}).catch(function(l){if(n)n(l);gu.set(a,l),Dn.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});Dn.add(`image-bitmap:${e}`,a),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}var fa=-90,ua=1;class co extends ct{constructor(e,t,i){super();this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let n=new ni(fa,ua,e,t);n.layers=this.layers,this.add(n);let r=new ni(fa,ua,e,t);r.layers=this.layers,this.add(r);let s=new ni(fa,ua,e,t);s.layers=this.layers,this.add(s);let o=new ni(fa,ua,e,t);o.layers=this.layers,this.add(o);let a=new ni(fa,ua,e,t);a.layers=this.layers,this.add(a);let l=new ni(fa,ua,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,n,r,s,o,a]=t;for(let l of t)this.remove(l);if(e===zi)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),a.up.set(0,1,0),a.lookAt(0,0,-1);else if(e===gr)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),a.up.set(0,-1,0),a.lookAt(0,0,-1);else throw Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){if(this.parent===null)this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:n}=this;if(this.coordinateSystem!==e.coordinateSystem)this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem();let[r,s,o,a,l,c]=this.children,h=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;let g=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let x=!1;if(e.isWebGLRenderer===!0)x=e.state.buffers.depth.getReversed();else x=e.reversedDepthBuffer;if(e.setRenderTarget(i,0,n),x&&e.autoClear===!1)e.clearDepth();if(e.render(t,r),e.setRenderTarget(i,1,n),x&&e.autoClear===!1)e.clearDepth();if(e.render(t,s),e.setRenderTarget(i,2,n),x&&e.autoClear===!1)e.clearDepth();if(e.render(t,o),e.setRenderTarget(i,3,n),x&&e.autoClear===!1)e.clearDepth();if(e.render(t,a),e.setRenderTarget(i,4,n),x&&e.autoClear===!1)e.clearDepth();if(e.render(t,l),i.texture.mipmapsAutoUpdate=g,e.setRenderTarget(i,5,n),x&&e.autoClear===!1)e.clearDepth();e.render(t,c),e.setRenderTarget(h,u,f),e.xr.enabled=m,i.texture.needsPMREMUpdate=!0}}class Oh extends ni{constructor(e=[]){super();this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}}class tc{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){if(this._document=e,e.hidden!==void 0)this._pageVisibilityHandler=rM.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1)}disconnect(){if(this._pageVisibilityHandler!==null)this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null;this._document=null}getDelta(){return this._delta/1000}getElapsed(){return this._elapsed/1000}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){if(this._pageVisibilityHandler!==null&&this._document.hidden===!0)this._delta=0;else this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta;return this}}function rM(){if(this._document.hidden===!1)this.reset()}var xu="\\[\\]\\.:\\/",oM=new RegExp("["+xu+"]","g"),_u="[^"+xu+"]",aM="[^"+xu.replace("\\.","")+"]",lM=/((?:WC+[\/:])*)/.source.replace("WC",_u),cM=/(WCOD+)?/.source.replace("WCOD",aM),hM=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",_u),fM=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",_u),uM=new RegExp("^"+lM+cM+hM+fM+"$"),dM=["material","materials","bones","map"];class p0{constructor(e,t,i){let n=i||Ht.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,n)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,n=this._bindings[i];if(n!==void 0)n.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let n=this._targetGroup.nCachedObjects_,r=i.length;n!==r;++n)i[n].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}}class Ht{constructor(e,t,i){this.path=t,this.parsedPath=i||Ht.parseTrackName(t),this.node=Ht.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){if(!(e&&e.isAnimationObjectGroup))return new Ht(e,t,i);else return new Ht.Composite(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(oM,"")}static parseTrackName(e){let t=uM.exec(e);if(t===null)throw Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},n=i.nodeName&&i.nodeName.lastIndexOf(".");if(n!==void 0&&n!==-1){let r=i.nodeName.substring(n+1);if(dM.indexOf(r)!==-1)i.nodeName=i.nodeName.substring(0,n),i.objectName=r}if(i.propertyName===null||i.propertyName.length===0)throw Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let s=0;s<r.length;s++){let o=r[s];if(o.name===t||o.uuid===t)return o;let a=i(o.children);if(a)return a}return null},n=i(e.children);if(n)return n}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)e[t++]=i[n]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,{objectName:i,propertyName:n,propertyIndex:r}=t;if(!e)e=Ht.findNode(this.rootNode,t.nodeName),this.node=e;if(this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Te("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let l=t.objectIndex;switch(i){case"materials":if(!e.material){Ye("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Ye("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Ye("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let c=0;c<e.length;c++)if(e[c].name===l){l=c;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Ye("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Ye("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){Ye("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(l!==void 0){if(e[l]===void 0){Ye("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let s=e[n];if(s===void 0){let l=t.nodeName;Ye("PropertyBinding: Trying to update property for track: "+l+"."+n+" but it wasn't found.",e);return}let o=this.Versioning.None;if(this.targetObject=e,e.isMaterial===!0)o=this.Versioning.NeedsUpdate;else if(e.isObject3D===!0)o=this.Versioning.MatrixWorldNeedsUpdate;let a=this.BindingType.Direct;if(r!==void 0){if(n==="morphTargetInfluences"){if(!e.geometry){Ye("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Ye("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}if(e.morphTargetDictionary[r]!==void 0)r=e.morphTargetDictionary[r]}a=this.BindingType.ArrayElement,this.resolvedProperty=s,this.propertyIndex=r}else if(s.fromArray!==void 0&&s.toArray!==void 0)a=this.BindingType.HasFromToArray,this.resolvedProperty=s;else if(Array.isArray(s))a=this.BindingType.EntireArray,this.resolvedProperty=s;else this.propertyName=n;this.getValue=this.GetterByBindingType[a],this.setValue=this.SetterByBindingTypeAndVersioning[a][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Ht.Composite=p0;Ht.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ht.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ht.prototype.GetterByBindingType=[Ht.prototype._getValue_direct,Ht.prototype._getValue_array,Ht.prototype._getValue_arrayElement,Ht.prototype._getValue_toArray];Ht.prototype.SetterByBindingTypeAndVersioning=[[Ht.prototype._setValue_direct,Ht.prototype._setValue_direct_setNeedsUpdate,Ht.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ht.prototype._setValue_array,Ht.prototype._setValue_array_setNeedsUpdate,Ht.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ht.prototype._setValue_arrayElement,Ht.prototype._setValue_arrayElement_setNeedsUpdate,Ht.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ht.prototype._setValue_fromArray,Ht.prototype._setValue_fromArray_setNeedsUpdate,Ht.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var I4=new Float32Array(1);var m0=new Ge;class Hh{constructor(e,t,i=0,n=1/0){this.ray=new Yn(e,t),this.near=i,this.far=n,this.camera=null,this.layers=new cs,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){if(t.isPerspectiveCamera)this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,0.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t;else if(t.isOrthographicCamera)this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t;else Ye("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return m0.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(m0),this}intersectObject(e,t=!0,i=[]){return yu(e,this,i,t),i.sort(g0),i}intersectObjects(e,t=!0,i=[]){for(let n=0,r=e.length;n<r;n++)yu(e[n],this,i,t);return i.sort(g0),i}}function g0(e,t){return e.distance-t.distance}function yu(e,t,i,n){let r=!0;if(e.layers.test(t.layers)){if(e.raycast(t,i)===!1)r=!1}if(r===!0&&n===!0){let s=e.children;for(let o=0,a=s.length;o<a;o++)yu(s[o],t,i,!0)}}class zh{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Te("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=performance.now();e=(t-this.oldTime)/1000,this.oldTime=t,this.elapsedTime+=e}return e}}class x0{static{this.prototype.isMatrix2=!0}constructor(e,t,i,n){if(this.elements=[1,0,0,1],e!==void 0)this.set(e,t,i,n)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,n){let r=this.elements;return r[0]=e,r[2]=t,r[1]=i,r[3]=n,this}}function Mu(e,t,i,n){let r=xM(n);switch(i){case Lc:return e*t;case Co:return e*t/r.components*r.byteLength;case Us:return e*t/r.components*r.byteLength;case wn:return e*t*2/r.components*r.byteLength;case Io:return e*t*2/r.components*r.byteLength;case Dc:return e*t*3/r.components*r.byteLength;case Li:return e*t*4/r.components*r.byteLength;case Po:return e*t*4/r.components*r.byteLength;case Lo:case Do:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case No:case Fo:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case za:case ka:return Math.max(e,16)*Math.max(t,8)/4;case Ha:case Ga:return Math.max(e,8)*Math.max(t,8)/2;case Va:case Wa:case Ya:case qa:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Xa:case Bs:case Za:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Ka:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Ja:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case ja:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case $a:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case Qa:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case el:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case tl:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case il:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case nl:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case rl:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case sl:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case ol:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case al:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case ll:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case cl:case hl:case fl:return Math.ceil(e/4)*Math.ceil(t/4)*16;case ul:case dl:return Math.ceil(e/4)*Math.ceil(t/4)*8;case Os:case pl:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw Error(`Unable to determine texture byte length for ${i} format.`)}function xM(e){switch(e){case Mi:case Rc:return{byteLength:1,components:1};case Dr:case Cc:case si:return{byteLength:2,components:1};case Ao:case Ro:return{byteLength:2,components:4};case Pi:case wo:case gi:return{byteLength:4,components:1};case Ic:case Pc:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}if(typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Aa}}));if(typeof window<"u")if(window.__THREE__)Te("WARNING: Multiple instances of Three.js being imported.");else window.__THREE__=Aa;function Gh(){let e=null,t=!1,i=null,n=null;function r(s,o){n=e.requestAnimationFrame(r),i(s,o)}return{start:function(){if(t===!0)return;if(i===null)return;if(e===null)return;n=e.requestAnimationFrame(r),t=!0},stop:function(){if(e!==null)e.cancelAnimationFrame(n);t=!1},setAnimationLoop:function(s){i=s},setContext:function(s){e=s}}}function _0(e){let t=new WeakMap;function i(a,l){let{array:c,usage:h}=a,u=c.byteLength,f=e.createBuffer();e.bindBuffer(l,f),e.bufferData(l,c,h),a.onUploadCallback();let m;if(c instanceof Float32Array)m=e.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)m=e.HALF_FLOAT;else if(c instanceof Uint16Array)if(a.isFloat16BufferAttribute)m=e.HALF_FLOAT;else m=e.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=e.SHORT;else if(c instanceof Uint32Array)m=e.UNSIGNED_INT;else if(c instanceof Int32Array)m=e.INT;else if(c instanceof Int8Array)m=e.BYTE;else if(c instanceof Uint8Array)m=e.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=e.UNSIGNED_BYTE;else throw Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){let{array:h,updateRanges:u}=l;if(e.bindBuffer(c,a),u.length===0)e.bufferSubData(c,0,h);else{u.sort((m,g)=>m.start-g.start);let f=0;for(let m=1;m<u.length;m++){let g=u[f],x=u[m];if(x.start<=g.start+g.count+1)g.count=Math.max(g.count,x.start+x.count-g.start);else++f,u[f]=x}u.length=f+1;for(let m=0,g=u.length;m<g;m++){let x=u[m];e.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){if(a.isInterleavedBufferAttribute)a=a.data;return t.get(a)}function s(a){if(a.isInterleavedBufferAttribute)a=a.data;let l=t.get(a);if(l)e.deleteBuffer(l.buffer),t.delete(a)}function o(a,l){if(a.isInterleavedBufferAttribute)a=a.data;if(a.isGLBufferAttribute){let h=t.get(a);if(!h||h.version<a.version)t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,i(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var y0=`
#ifdef USE_ALPHAHASH

	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;

#endif
`;var M0=`
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
`;var v0=`
#ifdef USE_ALPHAMAP

	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;

#endif
`;var S0=`
#ifdef USE_ALPHAMAP

	uniform sampler2D alphaMap;

#endif
`;var b0=`
#ifdef USE_ALPHATEST

	#ifdef ALPHA_TO_COVERAGE

	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;

	#else

	if ( diffuseColor.a < alphaTest ) discard;

	#endif

#endif
`;var T0=`
#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif
`;var E0=`
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
`;var w0=`
#ifdef USE_AOMAP

	uniform sampler2D aoMap;
	uniform float aoMapIntensity;

#endif
`;var A0=`
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
`;var R0=`
#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif
`;var C0=`
vec3 transformed = vec3( position );

#ifdef USE_ALPHAHASH

	vPosition = vec3( position );

#endif
`;var I0=`
vec3 objectNormal = vec3( normal );

#ifdef USE_TANGENT

	vec3 objectTangent = vec3( tangent.xyz );

#endif
`;var P0=`

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

`;var L0=`

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

`;var D0=`
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
`;var N0=`
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
`;var F0=`
#if NUM_CLIPPING_PLANES > 0

	varying vec3 vClipPosition;

	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];

#endif
`;var U0=`
#if NUM_CLIPPING_PLANES > 0

	varying vec3 vClipPosition;

#endif
`;var B0=`
#if NUM_CLIPPING_PLANES > 0

	vClipPosition = - mvPosition.xyz;

#endif
`;var O0=`
#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )

	diffuseColor *= vColor;

#endif
`;var H0=`
#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )

	varying vec4 vColor;

#endif
`;var z0=`
#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )

	varying vec4 vColor;

#endif
`;var G0=`
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
`;var k0=`
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
`;var V0=`

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
`;var W0=`
#ifdef USE_DISPLACEMENTMAP

	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;

#endif
`;var X0=`
#ifdef USE_DISPLACEMENTMAP

	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );

#endif
`;var Y0=`
#ifdef USE_EMISSIVEMAP

	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );

	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE

		// use inline sRGB decode until browsers properly support SRGB8_ALPHA8 with video textures (#26516)

		emissiveColor = sRGBTransferEOTF( emissiveColor );

	#endif

	totalEmissiveRadiance *= emissiveColor.rgb;

#endif
`;var q0=`
#ifdef USE_EMISSIVEMAP

	uniform sampler2D emissiveMap;

#endif
`;var Z0=`
gl_FragColor = linearToOutputTexel( gl_FragColor );
`;var K0=`

vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}

vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}

vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}

`;var J0=`
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
`;var j0=`
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
`;var $0=`
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
`;var Q0=`
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
`;var em=`
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
`;var tm=`
#ifdef USE_FOG

	vFogDepth = - mvPosition.z;

#endif
`;var im=`
#ifdef USE_FOG

	varying float vFogDepth;

#endif
`;var nm=`
#ifdef USE_FOG

	#ifdef FOG_EXP2

		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );

	#else

		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );

	#endif

	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );

#endif
`;var rm=`
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
`;var sm=`

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
`;var om=`
#ifdef USE_LIGHTMAP

	uniform sampler2D lightMap;
	uniform float lightMapIntensity;

#endif
`;var am=`
LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;
`;var lm=`
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
`;var cm=`
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
`;var hm=`
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
`;var fm=`
ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;
`;var um=`
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
`;var dm=`
BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;
`;var pm=`
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
`;var mm=`
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
`;var gm=`

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
`;var xm=`
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
`;var _m=`
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
`;var ym=`
#if defined( RE_IndirectDiffuse )

	#if defined( LAMBERT ) || defined( PHONG )

		irradiance += iblIrradiance;

	#endif

	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );

#endif

#if defined( RE_IndirectSpecular )

	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );

#endif
`;var Mm=`
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
`;var vm=`
#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )

	// Doing a strict comparison with == 1.0 can cause noise artifacts
	// on some platforms. See issue #17623.
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;

#endif
`;var Sm=`
#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )

	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;

#endif
`;var bm=`
#ifdef USE_LOGARITHMIC_DEPTH_BUFFER

	varying float vFragDepth;
	varying float vIsPerspective;

#endif
`;var Tm=`
#ifdef USE_LOGARITHMIC_DEPTH_BUFFER

	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );

#endif
`;var Em=`
#ifdef USE_MAP

	vec4 sampledDiffuseColor = texture2D( map, vMapUv );

	#ifdef DECODE_VIDEO_TEXTURE

		// use inline sRGB decode until browsers properly support SRGB8_ALPHA8 with video textures (#26516)

		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );

	#endif

	diffuseColor *= sampledDiffuseColor;

#endif
`;var wm=`
#ifdef USE_MAP

	uniform sampler2D map;

#endif
`;var Am=`
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
`;var Rm=`
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
`;var Cm=`
float metalnessFactor = metalness;

#ifdef USE_METALNESSMAP

	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );

	// reads channel B, compatible with a combined OcclusionRoughnessMetallic (RGB) texture
	metalnessFactor *= texelMetalness.b;

#endif
`;var Im=`
#ifdef USE_METALNESSMAP

	uniform sampler2D metalnessMap;

#endif
`;var Pm=`
#ifdef USE_INSTANCING_MORPH

	float morphTargetInfluences[ MORPHTARGETS_COUNT ];

	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;

	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {

		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;

	}
#endif
`;var Lm=`
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
`;var Dm=`
#ifdef USE_MORPHNORMALS

	// morphTargetBaseInfluence is set based on BufferGeometry.morphTargetsRelative value:
	// When morphTargetsRelative is false, this is set to 1 - sum(influences); this results in normal = sum((target - base) * influence)
	// When morphTargetsRelative is true, this is set to 1; as a result, all morph targets are simply added to the base after weighting
	objectNormal *= morphTargetBaseInfluence;

	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {

		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];

	}

#endif
`;var Nm=`
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
`;var Fm=`
#ifdef USE_MORPHTARGETS

	// morphTargetBaseInfluence is set based on BufferGeometry.morphTargetsRelative value:
	// When morphTargetsRelative is false, this is set to 1 - sum(influences); this results in position = sum((target - base) * influence)
	// When morphTargetsRelative is true, this is set to 1; as a result, all morph targets are simply added to the base after weighting
	transformed *= morphTargetBaseInfluence;

	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {

		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];

	}

#endif
`;var Um=`
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

`;var Bm=`

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
`;var Om=`
#ifndef FLAT_SHADED

	varying vec3 vNormal;

	#ifdef USE_TANGENT

		varying vec3 vTangent;
		varying vec3 vBitangent;

	#endif

#endif
`;var Hm=`
#ifndef FLAT_SHADED

	varying vec3 vNormal;

	#ifdef USE_TANGENT

		varying vec3 vTangent;
		varying vec3 vBitangent;

	#endif

#endif
`;var zm=`
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
`;var Gm=`
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
`;var km=`
#ifdef USE_CLEARCOAT

	vec3 clearcoatNormal = nonPerturbedNormal;

#endif
`;var Vm=`
#ifdef USE_CLEARCOAT_NORMALMAP

	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;

	clearcoatNormal = normalize( tbn2 * clearcoatMapN );

#endif
`;var Wm=`

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
`;var Xm=`

#ifdef USE_IRIDESCENCEMAP

	uniform sampler2D iridescenceMap;

#endif

#ifdef USE_IRIDESCENCE_THICKNESSMAP

	uniform sampler2D iridescenceThicknessMap;

#endif
`;var Ym=`
#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif

#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif

gl_FragColor = vec4( outgoingLight, diffuseColor.a );
`;var qm=`
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
`;var Zm=`
#ifdef PREMULTIPLIED_ALPHA

	gl_FragColor.rgb *= gl_FragColor.a;

#endif
`;var Km=`
vec4 mvPosition = vec4( transformed, 1.0 );

#ifdef USE_BATCHING

	mvPosition = batchingMatrix * mvPosition;

#endif

#ifdef USE_INSTANCING

	mvPosition = instanceMatrix * mvPosition;

#endif

mvPosition = modelViewMatrix * mvPosition;

gl_Position = projectionMatrix * mvPosition;
`;var Jm=`
#ifdef DITHERING

	gl_FragColor.rgb = dithering( gl_FragColor.rgb );

#endif
`;var jm=`
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
`;var $m=`
float roughnessFactor = roughness;

#ifdef USE_ROUGHNESSMAP

	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );

	// reads channel G, compatible with a combined OcclusionRoughnessMetallic (RGB) texture
	roughnessFactor *= texelRoughness.g;

#endif
`;var Qm=`
#ifdef USE_ROUGHNESSMAP

	uniform sampler2D roughnessMap;

#endif
`;var eg=`
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
`;var tg=`

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
`;var ig=`

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


`;var ng=`
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
`;var rg=`
#ifdef USE_SKINNING

	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );

#endif
`;var sg=`
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
`;var og=`
#ifdef USE_SKINNING

	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );

	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;

	transformed = ( bindMatrixInverse * skinned ).xyz;

#endif
`;var ag=`
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
`;var lg=`
float specularStrength;

#ifdef USE_SPECULARMAP

	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;

#else

	specularStrength = 1.0;

#endif
`;var cg=`
#ifdef USE_SPECULARMAP

	uniform sampler2D specularMap;

#endif
`;var hg=`
#if defined( TONE_MAPPING )

	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );

#endif
`;var fg=`
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
`;var ug=`
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
`;var dg=`
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
`;var pg=`
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
`;var mg=`
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
`;var gg=`
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
`;var xg=`
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
`;var _g=`
varying vec2 vUv;
uniform mat3 uvTransform;

void main() {

	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;

	gl_Position = vec4( position.xy, 1.0, 1.0 );

}
`,yg=`
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
`;var Mg=`
varying vec3 vWorldDirection;

#include <common>

void main() {

	vWorldDirection = transformDirection( position, modelMatrix );

	#include <begin_vertex>
	#include <project_vertex>

	gl_Position.z = gl_Position.w; // set z to camera.far

}
`,vg=`

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
`;var Sg=`
varying vec3 vWorldDirection;

#include <common>

void main() {

	vWorldDirection = transformDirection( position, modelMatrix );

	#include <begin_vertex>
	#include <project_vertex>

	gl_Position.z = gl_Position.w; // set z to camera.far

}
`,bg=`
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
`;var Tg=`
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
`,Eg=`
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
`;var wg=`
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
`,Ag=`
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
`;var Rg=`
varying vec3 vWorldDirection;

#include <common>

void main() {

	vWorldDirection = transformDirection( position, modelMatrix );

	#include <begin_vertex>
	#include <project_vertex>

}
`,Cg=`
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
`;var Ig=`
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
`,Pg=`
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
`;var Lg=`
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
`,Dg=`
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
`;var Ng=`
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
`,Fg=`
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
`;var Ug=`
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
`,Bg=`
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
`;var Og=`
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
`,Hg=`
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
`;var zg=`
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
`,Gg=`
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
`;var kg=`
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
`,Vg=`
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
`;var Wg=`
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
`,Xg=`
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
`;var Yg=`
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
`,qg=`
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
`;var Zg=`
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
`,Kg=`
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
`;var Jg=`
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
`,jg=`
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
`;var xt={alphahash_fragment:y0,alphahash_pars_fragment:M0,alphamap_fragment:v0,alphamap_pars_fragment:S0,alphatest_fragment:b0,alphatest_pars_fragment:T0,aomap_fragment:E0,aomap_pars_fragment:w0,batching_pars_vertex:A0,batching_vertex:R0,begin_vertex:C0,beginnormal_vertex:I0,bsdfs:P0,iridescence_fragment:L0,bumpmap_pars_fragment:D0,clipping_planes_fragment:N0,clipping_planes_pars_fragment:F0,clipping_planes_pars_vertex:U0,clipping_planes_vertex:B0,color_fragment:O0,color_pars_fragment:H0,color_pars_vertex:z0,color_vertex:G0,common:k0,defaultnormal_vertex:V0,displacementmap_pars_vertex:W0,displacementmap_vertex:X0,emissivemap_fragment:Y0,emissivemap_pars_fragment:q0,colorspace_fragment:Z0,colorspace_pars_fragment:K0,envmap_fragment:J0,envmap_common_pars_fragment:j0,envmap_pars_fragment:$0,envmap_pars_vertex:Q0,envmap_physical_pars_fragment:hm,envmap_vertex:em,fog_vertex:tm,fog_pars_vertex:im,fog_fragment:nm,fog_pars_fragment:rm,gradientmap_pars_fragment:sm,lightmap_pars_fragment:om,lights_lambert_fragment:am,lights_lambert_pars_fragment:lm,lights_pars_begin:cm,lights_toon_fragment:fm,lights_toon_pars_fragment:um,lights_phong_fragment:dm,lights_phong_pars_fragment:pm,lights_physical_fragment:mm,lights_physical_pars_fragment:gm,lights_fragment_begin:xm,lights_fragment_maps:_m,lights_fragment_end:ym,lightprobes_pars_fragment:Mm,logdepthbuf_fragment:vm,logdepthbuf_pars_fragment:Sm,logdepthbuf_pars_vertex:bm,logdepthbuf_vertex:Tm,map_fragment:Em,map_pars_fragment:wm,map_particle_fragment:Am,map_particle_pars_fragment:Rm,metalnessmap_fragment:Cm,metalnessmap_pars_fragment:Im,morphinstance_vertex:Pm,morphcolor_vertex:Lm,morphnormal_vertex:Dm,morphtarget_pars_vertex:Nm,morphtarget_vertex:Fm,normal_fragment_begin:Um,normal_fragment_maps:Bm,normal_pars_fragment:Om,normal_pars_vertex:Hm,normal_vertex:zm,normalmap_pars_fragment:Gm,clearcoat_normal_fragment_begin:km,clearcoat_normal_fragment_maps:Vm,clearcoat_pars_fragment:Wm,iridescence_pars_fragment:Xm,opaque_fragment:Ym,packing:qm,premultiplied_alpha_fragment:Zm,project_vertex:Km,dithering_fragment:Jm,dithering_pars_fragment:jm,roughnessmap_fragment:$m,roughnessmap_pars_fragment:Qm,shadowmap_pars_fragment:eg,shadowmap_pars_vertex:tg,shadowmap_vertex:ig,shadowmask_pars_fragment:ng,skinbase_vertex:rg,skinning_pars_vertex:sg,skinning_vertex:og,skinnormal_vertex:ag,specularmap_fragment:lg,specularmap_pars_fragment:cg,tonemapping_fragment:hg,tonemapping_pars_fragment:fg,transmission_fragment:ug,transmission_pars_fragment:dg,uv_pars_fragment:pg,uv_pars_vertex:mg,uv_vertex:gg,worldpos_vertex:xg,background_vert:_g,background_frag:yg,backgroundCube_vert:Mg,backgroundCube_frag:vg,cube_vert:Sg,cube_frag:bg,depth_vert:Tg,depth_frag:Eg,distance_vert:wg,distance_frag:Ag,equirect_vert:Rg,equirect_frag:Cg,linedashed_vert:Ig,linedashed_frag:Pg,meshbasic_vert:Lg,meshbasic_frag:Dg,meshlambert_vert:Ng,meshlambert_frag:Fg,meshmatcap_vert:Ug,meshmatcap_frag:Bg,meshnormal_vert:Og,meshnormal_frag:Hg,meshphong_vert:zg,meshphong_frag:Gg,meshphysical_vert:kg,meshphysical_frag:Vg,meshtoon_vert:Wg,meshtoon_frag:Xg,points_vert:Yg,points_frag:qg,shadow_vert:Zg,shadow_frag:Kg,sprite_vert:Jg,sprite_frag:jg};var Ue={common:{diffuse:{value:new ge(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new st}},envmap:{envMap:{value:null},envMapRotation:{value:new st},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:0.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new st}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new st}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new st},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new st},normalScale:{value:new Z(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new st},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new st}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new st}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new st}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:0.00025},fogNear:{value:1},fogFar:{value:2000},fogColor:{value:new ge(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new ge(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0},uvTransform:{value:new st}},sprite:{diffuse:{value:new ge(16777215)},opacity:{value:1},center:{value:new Z(0.5,0.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}}};var Fn={basic:{uniforms:hn([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.fog]),vertexShader:xt.meshbasic_vert,fragmentShader:xt.meshbasic_frag},lambert:{uniforms:hn([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,Ue.lights,{emissive:{value:new ge(0)},envMapIntensity:{value:1}}]),vertexShader:xt.meshlambert_vert,fragmentShader:xt.meshlambert_frag},phong:{uniforms:hn([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,Ue.lights,{emissive:{value:new ge(0)},specular:{value:new ge(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:xt.meshphong_vert,fragmentShader:xt.meshphong_frag},standard:{uniforms:hn([Ue.common,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.roughnessmap,Ue.metalnessmap,Ue.fog,Ue.lights,{emissive:{value:new ge(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:xt.meshphysical_vert,fragmentShader:xt.meshphysical_frag},toon:{uniforms:hn([Ue.common,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.gradientmap,Ue.fog,Ue.lights,{emissive:{value:new ge(0)}}]),vertexShader:xt.meshtoon_vert,fragmentShader:xt.meshtoon_frag},matcap:{uniforms:hn([Ue.common,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,{matcap:{value:null}}]),vertexShader:xt.meshmatcap_vert,fragmentShader:xt.meshmatcap_frag},points:{uniforms:hn([Ue.points,Ue.fog]),vertexShader:xt.points_vert,fragmentShader:xt.points_frag},dashed:{uniforms:hn([Ue.common,Ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:xt.linedashed_vert,fragmentShader:xt.linedashed_frag},depth:{uniforms:hn([Ue.common,Ue.displacementmap]),vertexShader:xt.depth_vert,fragmentShader:xt.depth_frag},normal:{uniforms:hn([Ue.common,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,{opacity:{value:1}}]),vertexShader:xt.meshnormal_vert,fragmentShader:xt.meshnormal_frag},sprite:{uniforms:hn([Ue.sprite,Ue.fog]),vertexShader:xt.sprite_vert,fragmentShader:xt.sprite_frag},background:{uniforms:{uvTransform:{value:new st},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:xt.background_vert,fragmentShader:xt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new st}},vertexShader:xt.backgroundCube_vert,fragmentShader:xt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:xt.cube_vert,fragmentShader:xt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:xt.equirect_vert,fragmentShader:xt.equirect_frag},distance:{uniforms:hn([Ue.common,Ue.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1000}}]),vertexShader:xt.distance_vert,fragmentShader:xt.distance_frag},shadow:{uniforms:hn([Ue.lights,Ue.fog,{color:{value:new ge(0)},opacity:{value:1}}]),vertexShader:xt.shadow_vert,fragmentShader:xt.shadow_frag}};Fn.physical={uniforms:hn([Fn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new st},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new st},clearcoatNormalScale:{value:new Z(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new st},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new st},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new st},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new st},sheen:{value:0},sheenColor:{value:new ge(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new st},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new st},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new st},transmissionSamplerSize:{value:new Z},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new st},attenuationDistance:{value:0},attenuationColor:{value:new ge(0)},specularColor:{value:new ge(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new st},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new st},anisotropyVector:{value:new Z},anisotropyMap:{value:null},anisotropyMapTransform:{value:new st}}]),vertexShader:xt.meshphysical_vert,fragmentShader:xt.meshphysical_frag};var kh={r:0,b:0,g:0},BM=new Ge,$g=new st;$g.set(-1,0,0,0,1,0,0,0,1);function Qg(e,t,i,n,r,s){let o=new ge(0),a=r===!0?0:1,l,c,h=null,u=0,f=null;function m(y){let M=y.isScene===!0?y.background:null;if(M&&M.isTexture){let b=y.backgroundBlurriness>0;M=t.get(M,b)}return M}function g(y){let M=!1,b=m(y);if(b===null)d(o,a);else if(b&&b.isColor)d(b,1),M=!0;let v=e.xr.getEnvironmentBlendMode();if(v==="additive")i.buffers.color.setClear(0,0,0,1,s);else if(v==="alpha-blend")i.buffers.color.setClear(0,0,0,0,s);if(e.autoClear||M)i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil)}function x(y,M){let b=m(M);if(b&&b.isCubeTexture){if(c===void 0)c=new ne(new yt(1,1,1),new ai({name:"BackgroundCubeMaterial",uniforms:Wr(Fn.backgroundCube.uniforms),vertexShader:Fn.backgroundCube.vertexShader,fragmentShader:Fn.backgroundCube.fragmentShader,side:jt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(v,T,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c);if(c.material.uniforms.envMap.value=b,c.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(BM.makeRotationFromEuler(M.backgroundRotation)).transpose(),b.isRenderTargetTexture===!1)c.material.uniforms.backgroundRotation.value.premultiply($g);if(c.material.toneMapped=ht.getTransfer(b.colorSpace)!==Tt,h!==b||u!==b.version||f!==e.toneMapping)c.material.needsUpdate=!0,h=b,u=b.version,f=e.toneMapping;c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null)}else if(b&&b.isTexture){if(l===void 0)l=new ne(new zt(2,2),new ai({name:"BackgroundMaterial",uniforms:Wr(Fn.background.uniforms),vertexShader:Fn.background.vertexShader,fragmentShader:Fn.background.fragmentShader,side:Mn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l);if(l.material.uniforms.t2D.value=b,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=ht.getTransfer(b.colorSpace)!==Tt,b.matrixAutoUpdate===!0)b.updateMatrix();if(l.material.uniforms.uvTransform.value.copy(b.matrix),h!==b||u!==b.version||f!==e.toneMapping)l.material.needsUpdate=!0,h=b,u=b.version,f=e.toneMapping;l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null)}}function d(y,M){y.getRGB(kh,Ch(e)),i.buffers.color.setClear(kh.r,kh.g,kh.b,M,s)}function p(){if(c!==void 0)c.geometry.dispose(),c.material.dispose(),c=void 0;if(l!==void 0)l.geometry.dispose(),l.material.dispose(),l=void 0}return{getClearColor:function(){return o},setClearColor:function(y,M=1){o.set(y),a=M,d(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(y){a=y,d(o,a)},render:g,addToRenderList:x,dispose:p}}function ex(e,t){let i=e.getParameter(e.MAX_VERTEX_ATTRIBS),n={},r=f(null),s=r,o=!1;function a(I,U,K,P,V){let D=!1,N=u(I,P,K,U);if(s!==N)s=N,c(s.object);if(D=m(I,P,K,V),D)g(I,P,K,V);if(V!==null)t.update(V,e.ELEMENT_ARRAY_BUFFER);if(D||o){if(o=!1,b(I,U,K,P),V!==null)e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(V).buffer)}}function l(){return e.createVertexArray()}function c(I){return e.bindVertexArray(I)}function h(I){return e.deleteVertexArray(I)}function u(I,U,K,P){let V=P.wireframe===!0,D=n[U.id];if(D===void 0)D={},n[U.id]=D;let N=I.isInstancedMesh===!0?I.id:0,Q=D[N];if(Q===void 0)Q={},D[N]=Q;let G=Q[K.id];if(G===void 0)G={},Q[K.id]=G;let z=G[V];if(z===void 0)z=f(l()),G[V]=z;return z}function f(I){let U=[],K=[],P=[];for(let V=0;V<i;V++)U[V]=0,K[V]=0,P[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:K,attributeDivisors:P,object:I,attributes:{},index:null}}function m(I,U,K,P){let V=s.attributes,D=U.attributes,N=0,Q=K.getAttributes();for(let G in Q)if(Q[G].location>=0){let Y=V[G],le=D[G];if(le===void 0){if(G==="instanceMatrix"&&I.instanceMatrix)le=I.instanceMatrix;if(G==="instanceColor"&&I.instanceColor)le=I.instanceColor}if(Y===void 0)return!0;if(Y.attribute!==le)return!0;if(le&&Y.data!==le.data)return!0;N++}if(s.attributesNum!==N)return!0;if(s.index!==P)return!0;return!1}function g(I,U,K,P){let V={},D=U.attributes,N=0,Q=K.getAttributes();for(let G in Q)if(Q[G].location>=0){let Y=D[G];if(Y===void 0){if(G==="instanceMatrix"&&I.instanceMatrix)Y=I.instanceMatrix;if(G==="instanceColor"&&I.instanceColor)Y=I.instanceColor}let le={};if(le.attribute=Y,Y&&Y.data)le.data=Y.data;V[G]=le,N++}s.attributes=V,s.attributesNum=N,s.index=P}function x(){let I=s.newAttributes;for(let U=0,K=I.length;U<K;U++)I[U]=0}function d(I){p(I,0)}function p(I,U){let K=s.newAttributes,P=s.enabledAttributes,V=s.attributeDivisors;if(K[I]=1,P[I]===0)e.enableVertexAttribArray(I),P[I]=1;if(V[I]!==U)e.vertexAttribDivisor(I,U),V[I]=U}function y(){let I=s.newAttributes,U=s.enabledAttributes;for(let K=0,P=U.length;K<P;K++)if(U[K]!==I[K])e.disableVertexAttribArray(K),U[K]=0}function M(I,U,K,P,V,D,N){if(N===!0)e.vertexAttribIPointer(I,U,K,V,D);else e.vertexAttribPointer(I,U,K,P,V,D)}function b(I,U,K,P){x();let V=P.attributes,D=K.getAttributes(),N=U.defaultAttributeValues;for(let Q in D){let G=D[Q];if(G.location>=0){let z=V[Q];if(z===void 0){if(Q==="instanceMatrix"&&I.instanceMatrix)z=I.instanceMatrix;if(Q==="instanceColor"&&I.instanceColor)z=I.instanceColor}if(z!==void 0){let Y=z.normalized,le=z.itemSize,k=t.get(z);if(k===void 0)continue;let{buffer:ee,type:be,bytesPerElement:_e}=k,He=be===e.INT||be===e.UNSIGNED_INT||z.gpuType===wo;if(z.isInterleavedBufferAttribute){let Ie=z.data,ft=Ie.isInterleavedBuffer===!0?Ie.stride:Ie.itemSize,ze=z.offset;if(Ie.isInstancedInterleavedBuffer||Ie.isInstancedBufferAttribute){for(let ke=0;ke<G.locationSize;ke++)p(G.location+ke,Ie.meshPerAttribute);if(I.isInstancedMesh!==!0&&P._maxInstanceCount===void 0)P._maxInstanceCount=Ie.meshPerAttribute*Ie.count}else for(let ke=0;ke<G.locationSize;ke++)d(G.location+ke);e.bindBuffer(e.ARRAY_BUFFER,ee);for(let ke=0;ke<G.locationSize;ke++)M(G.location+ke,le/G.locationSize,be,Y,ft*_e,(ze+le/G.locationSize*ke)*_e,He)}else{if(z.isInstancedBufferAttribute){for(let Ie=0;Ie<G.locationSize;Ie++)p(G.location+Ie,z.meshPerAttribute);if(I.isInstancedMesh!==!0&&P._maxInstanceCount===void 0)P._maxInstanceCount=z.meshPerAttribute*z.count}else for(let Ie=0;Ie<G.locationSize;Ie++)d(G.location+Ie);e.bindBuffer(e.ARRAY_BUFFER,ee);for(let Ie=0;Ie<G.locationSize;Ie++)M(G.location+Ie,le/G.locationSize,be,Y,le*_e,le/G.locationSize*Ie*_e,He)}}else if(N!==void 0){let Y=N[Q];if(Y!==void 0)switch(Y.length){case 2:e.vertexAttrib2fv(G.location,Y);break;case 3:e.vertexAttrib3fv(G.location,Y);break;case 4:e.vertexAttrib4fv(G.location,Y);break;default:e.vertexAttrib1fv(G.location,Y)}}}}y()}function v(){w();for(let I in n){let U=n[I];for(let K in U){let P=U[K];for(let V in P){let D=P[V];for(let N in D)h(D[N].object),delete D[N];delete P[V]}}delete n[I]}}function T(I){if(n[I.id]===void 0)return;let U=n[I.id];for(let K in U){let P=U[K];for(let V in P){let D=P[V];for(let N in D)h(D[N].object),delete D[N];delete P[V]}}delete n[I.id]}function _(I){for(let U in n){let K=n[U];for(let P in K){let V=K[P];if(V[I.id]===void 0)continue;let D=V[I.id];for(let N in D)h(D[N].object),delete D[N];delete V[I.id]}}}function S(I){for(let U in n){let K=n[U],P=I.isInstancedMesh===!0?I.id:0,V=K[P];if(V===void 0)continue;for(let D in V){let N=V[D];for(let Q in N)h(N[Q].object),delete N[Q];delete V[D]}if(delete K[P],Object.keys(K).length===0)delete n[U]}}function w(){if(L(),o=!0,s===r)return;s=r,c(s.object)}function L(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:w,resetDefaultState:L,dispose:v,releaseStatesOfGeometry:T,releaseStatesOfObject:S,releaseStatesOfProgram:_,initAttributes:x,enableAttribute:d,disableUnusedAttributes:y}}function tx(e,t,i){let n;function r(l){n=l}function s(l,c){e.drawArrays(n,l,c),i.update(c,n,1)}function o(l,c,h){if(h===0)return;e.drawArraysInstanced(n,l,c,h),i.update(c,n,h)}function a(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let f=0;for(let m=0;m<h;m++)f+=c[m];i.update(f,n,1)}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a}function ix(e,t,i,n){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){let _=t.get("EXT_texture_filter_anisotropic");r=e.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(_){if(_!==Li&&n.convert(_)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))return!1;return!0}function a(_){let S=_===si&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));if(_!==Mi&&_!==gi&&!S&&n.convert(_)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))return!1;return!0}function l(_){if(_==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";_="mediump"}if(_==="mediump"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0)return"mediump"}return"lowp"}let c=i.precision!==void 0?i.precision:"highp",h=l(c);if(h!==c)Te("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h;let u=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),f=i.logarithmicDepthBuffer===!0&&u===!1;if(i.reversedDepthBuffer===!0&&u===!1)Te("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");if(i.logarithmicDepthBuffer===!0&&u===!0)Te("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let m=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),g=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=e.getParameter(e.MAX_TEXTURE_SIZE),d=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),p=e.getParameter(e.MAX_VERTEX_ATTRIBS),y=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),M=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),v=e.getParameter(e.MAX_SAMPLES),T=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:u,maxTextures:m,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:d,maxAttributes:p,maxVertexUniforms:y,maxVaryings:M,maxFragmentUniforms:b,maxSamples:v,samples:T}}function nx(e){let t=this,i=null,n=0,r=!1,s=!1,o=new gn,a=new st,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let m=u.length!==0||f||n!==0||r;return r=f,n=u.length,m},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,f){i=h(u,f,0)},this.setState=function(u,f,m){let{clippingPlanes:g,clipIntersection:x,clipShadows:d}=u,p=e.get(u);if(!r||g===null||g.length===0||s&&!d)if(s)h(null);else c();else{let y=s?0:n,M=y*4,b=p.clippingState||null;l.value=b,b=h(g,f,M,m);for(let v=0;v!==M;++v)b[v]=i[v];p.clippingState=b,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=y}};function c(){if(l.value!==i)l.value=i,l.needsUpdate=n>0;t.numPlanes=n,t.numIntersection=0}function h(u,f,m,g){let x=u!==null?u.length:0,d=null;if(x!==0){if(d=l.value,g!==!0||d===null){let p=m+x*4,y=f.matrixWorldInverse;if(a.getNormalMatrix(y),d===null||d.length<p)d=new Float32Array(p);for(let M=0,b=m;M!==x;++M,b+=4)o.copy(u[M]).applyMatrix4(y,a),o.normal.toArray(d,b),d[b+3]=o.constant}l.value=d,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,d}}class ys extends ii{constructor(e=1,t={}){super(e,e,t);this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},n=[i,i,i,i,i,i];this.texture=new ds(n),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},n=new yt(5,5,5),r=new ai({name:"CubemapFromEquirect",uniforms:Wr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:jt,blending:Gn});r.uniforms.tEquirect.value=t;let s=new ne(n,r),o=t.minFilter;if(t.minFilter===Hi)t.minFilter=qt;return new co(1,10,this).update(e,s),t.minFilter=o,s.geometry.dispose(),s.material.dispose(),this}clear(e,t=!0,i=!0,n=!0){let r=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,i,n);e.setRenderTarget(r)}}var rx=256,OM=3,HM=20,lx=256,cx=16,zM=3,GM=new R,kM=new ge;class Ms{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new co(1,10,null),this._boxMesh=new ne(new yt(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,i=0.1,n=100,r={}){let{size:s=256,position:o=GM}=r,a=this._renderer;this._setSize(s);let l=this._allocateTarget(),c=this._getSourceTarget(!0);if(t>0)c.texture.mipmapsAutoUpdate=!1;let{autoClear:h,autoClearColor:u,autoClearDepth:f,autoClearStencil:m}=a,g=e.background;if(a.autoClear=!0,a.autoClearColor=!0,a.autoClearDepth=!0,a.autoClearStencil=!0,g===null)e.background=a.getClearColor(kM);let x=new co(i,n,c);if(x.position.copy(o),x.update(a,e),a.autoClear=h,a.autoClearColor=u,a.autoClearDepth=f,a.autoClearStencil=m,e.background=g,t>0)c.texture.mipmapsAutoUpdate=!0,this._blur(l,t);return this._applyPMREM(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){if(this._cubemapMaterial===null)this._cubemapMaterial=ax(),this._compileMaterial(this._cubemapMaterial)}compileEquirectangularShader(){if(this._equirectMaterial===null)this._equirectMaterial=ox(),this._compileMaterial(this._equirectMaterial)}dispose(){if(this._sourceTarget!==null)this._sourceTarget.dispose();if(this._cubemapMaterial!==null)this._cubemapMaterial.dispose();if(this._equirectMaterial!==null)this._equirectMaterial.dispose();if(this._blurMaterial!==null)this._blurMaterial.dispose();if(this._ggxMaterial!==null)this._ggxMaterial.dispose();if(this._integrationMaterial!==null)this._integrationMaterial.dispose();this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(rx,Ef(e))}_fromTexture(e,t){if(e.mapping===kn||e.mapping===Lr)this._setSize(e.image.length===0?rx:e.image[0].width||e.image[0].image.width);else this._setSize(e.image.width/4);let i=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(i),i}_allocateTarget(){let e=this._cubeSize,t=sx(e,!1,!1),i=Math.log2(e)-OM;for(let n=0;n<=i;n++)t.texture.mipmaps.push({width:e>>n,height:e>>n});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,i=this._sourceTarget;if(i===null||i.width!==t||e&&i.depthBuffer===!1){if(i!==null)i.dispose();this._sourceTarget=sx(t,!0,e)}return this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,i){let n=this._boxMesh,r=this._cubeCamera;n.material=i,r.renderTarget=e,r.activeMipmapLevel=t;let s=e.width>>t;e.viewport.set(0,0,s,s),r.update(this._renderer,n),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;if(e.mapping===kn||e.mapping===Lr){if(this._cubemapMaterial===null)this._cubemapMaterial=ax();t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1}else{if(this._equirectMaterial===null)this._equirectMaterial=ox();t=this._equirectMaterial}t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){if(this._ggxMaterial===null)this._ggxMaterial=VM(),this._integrationMaterial=WM();let t=this._cubeSize,i=e.texture.mipmaps.length-1,n=this._ggxMaterial.uniforms;n.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/cx);for(let s=0;s<=i;s++){let o=Ms.lodToRoughness(s,i);if(s>i-zM)r.roughness.value=o,this._renderCube(e,s,this._integrationMaterial);else{let a=o>0?Math.log2(t)+0.5*Math.log2(6/(lx*Math.pow(o,4)))+0.5:0;n.roughness.value=o,n.lodBias.value=a,this._renderCube(e,s,this._ggxMaterial)}}}_blur(e,t){if(this._blurMaterial===null)this._blurMaterial=XM();let i=this._blurMaterial,n=i.uniforms,r=this._sourceTarget;n.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,n.envMap.value=r.texture,this._renderCube(e,0,i),n.envMap.value=e.texture,this._renderCube(r,0,i)}}function sx(e,t,i){return new ys(e,{minFilter:Hi,generateMipmaps:t,type:si,colorSpace:Ki,depthBuffer:i})}function ic(e,t,i){return new ai({name:e,uniforms:t,vertexShader:xt.cube_vert,fragmentShader:i,side:jt,blending:Gn,depthTest:!1,depthWrite:!1})}function VM(){return ic("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${lx}u

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
	`)}function WM(){return ic("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:cx}},`

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
	`)}function XM(){return ic("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${HM}
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
	`)}function ox(){return ic("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function ax(){return ic("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function hx(e){let t=new WeakMap,i=new WeakMap,n=null;function r(f,m=!1){if(f===null||f===void 0)return null;if(m)return o(f);return s(f)}function s(f){if(f&&f.isTexture){let m=f.mapping;if(m===Ua||m===Ba)if(t.has(f)){let g=t.get(f).texture;return a(g,f.mapping)}else{let g=f.image;if(g&&g.height>0){let x=new ys(g.height);return x.fromEquirectangularTexture(e,f),t.set(f,x),f.addEventListener("dispose",c),a(x.texture,f.mapping)}else return null}}return f}function o(f){if(f&&f.isTexture&&f.isPMREMTexture!==!0){let m=f.mapping,g=m===Ua||m===Ba,x=m===kn||m===Lr;if(g||x){let d=i.get(f),p=d!==void 0?d.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==p){if(n===null)n=new Ms(e);return d=g?n.fromEquirectangular(f,d):n.fromCubemap(f,d),d.texture.pmremVersion=f.pmremVersion,i.set(f,d),d.texture}else if(d!==void 0)return d.texture;else{let y=f.image;if(g&&y&&y.height>0||x&&y&&l(y)){if(n===null)n=new Ms(e);return d=g?n.fromEquirectangular(f):n.fromCubemap(f),d.texture.pmremVersion=f.pmremVersion,i.set(f,d),f.addEventListener("dispose",h),d.texture}else return null}}}return f}function a(f,m){if(m===Ua)f.mapping=kn;else if(m===Ba)f.mapping=Lr;return f}function l(f){let m=0,g=6;for(let x=0;x<g;x++)if(f[x]!==void 0)m++;return m===g}function c(f){let m=f.target;m.removeEventListener("dispose",c);let g=t.get(m);if(g!==void 0)t.delete(m),g.dispose()}function h(f){let m=f.target;m.removeEventListener("dispose",h);let g=i.get(m);if(g!==void 0)i.delete(m),g.dispose()}function u(){if(t=new WeakMap,i=new WeakMap,n!==null)n.dispose(),n=null}return{get:r,dispose:u}}function fx(e){let t={};function i(n){if(t[n]!==void 0)return t[n];let r=e.getExtension(n);return t[n]=r,r}return{has:function(n){return i(n)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(n){let r=i(n);if(r===null)Wn("WebGLRenderer: "+n+" extension not supported.");return r}}}function ux(e,t,i,n){let r={},s=new WeakMap,o=new FinalizationRegistry((g)=>delete r[g]);function a(g){l(g.target)}function l(g){if(g.index!==null)t.remove(g.index);for(let d in g.attributes)t.remove(g.attributes[d]);g.removeEventListener("dispose",a),delete r[g.id],o.unregister(g);let x=s.get(g);if(x)t.remove(x),s.delete(g);if(n.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0)delete g._maxInstanceCount;i.memory.geometries--}function c(g,x){if(r[x.id]!==void 0)return x;return x.addEventListener("dispose",a),r[x.id]=new WeakRef(x),o.register(x,x.id,x),i.memory.geometries++,x}function h(g){let x=g.attributes;for(let d in x)t.update(x[d],e.ARRAY_BUFFER)}function u(g){let x=g.index,d=g.attributes.position,p=0;if(d===void 0)return;let y=x!==null?x.array.length:d.array.length/3-1,b=new(d.count>=65535?bl:Sl)(Math.ceil(y/3)*6,1),v=b.array;if(x!==null){let _=x.array;p=x.version;for(let S=0,w=0;S<y;S+=3){let L=_[S+0],I=_[S+1],U=_[S+2];v[w++]=L,v[w++]=I,v[w++]=I,v[w++]=U,v[w++]=U,v[w++]=L}}else{p=d.version;for(let _=0,S=0;_<y;_+=3){let w=_+0,L=_+1,I=_+2;v[S++]=w,v[S++]=L,v[S++]=L,v[S++]=I,v[S++]=I,v[S++]=w}}b.version=p;let T=s.get(g);if(T)t.remove(T);s.set(g,b)}function f(g){let x=s.get(g);if(x){let d=g.index;if(d!==null){if(x.version<d.version)u(g)}}else u(g);return s.get(g)}function m(){for(let g in r){let x=r[g].deref();if(x!==void 0)l(x)}}return{get:c,update:h,getWireframeAttribute:f,dispose:m}}function dx(e,t,i){let n;function r(u){n=u}let s,o;function a(u){s=u.type,o=u.bytesPerElement}function l(u,f){e.drawElements(n,f,s,u*o),i.update(f,n,1)}function c(u,f,m){if(m===0)return;e.drawElementsInstanced(n,f,s,u*o,m),i.update(f,n,m)}function h(u,f,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,u,0,m);let x=0;for(let d=0;d<m;d++)x+=f[d];i.update(x,n,1)}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function px(e){let t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(i.calls++,o){case e.TRIANGLES:i.triangles+=a*(s/3);break;case e.LINES:i.lines+=a*(s/2);break;case e.LINE_STRIP:i.lines+=a*(s-1);break;case e.LINE_LOOP:i.lines+=a*s;break;case e.POINTS:i.points+=a*s;break;default:Ye("WebGLInfo: Unknown draw mode:",o);break}}function r(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:r,update:n}}function mx(e,t,i){let n=new WeakMap,r=new Et;function s(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,f=n.get(a);if(f===void 0||f.count!==u){let w=function(){_.dispose(),n.delete(a),a.removeEventListener("dispose",w)};if(f!==void 0)f.texture.dispose();let m=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,d=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],y=a.morphAttributes.color||[],M=0;if(m===!0)M=1;if(g===!0)M=2;if(x===!0)M=3;let b=a.attributes.position.count*M,v=1;if(b>t.maxTextureSize)v=Math.ceil(b/t.maxTextureSize),b=t.maxTextureSize;let T=new Float32Array(b*v*4*u),_=new Vs(T,b,v,u);_.type=gi,_.needsUpdate=!0;let S=M*4;for(let L=0;L<u;L++){let I=d[L],U=p[L],K=y[L],P=b*v*4*L;for(let V=0;V<I.count;V++){let D=V*S;if(m===!0)r.fromBufferAttribute(I,V),T[P+D+0]=r.x,T[P+D+1]=r.y,T[P+D+2]=r.z,T[P+D+3]=0;if(g===!0)r.fromBufferAttribute(U,V),T[P+D+4]=r.x,T[P+D+5]=r.y,T[P+D+6]=r.z,T[P+D+7]=0;if(x===!0)r.fromBufferAttribute(K,V),T[P+D+8]=r.x,T[P+D+9]=r.y,T[P+D+10]=r.z,T[P+D+11]=K.itemSize===4?r.w:1}}f={count:u,texture:_,size:new Z(b,v)},n.set(a,f),a.addEventListener("dispose",w)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(e,"morphTexture",o.morphTexture,i);else{let m=0;for(let x=0;x<c.length;x++)m+=c[x];let g=a.morphTargetsRelative?1:1-m;l.getUniforms().setValue(e,"morphTargetBaseInfluence",g),l.getUniforms().setValue(e,"morphTargetInfluences",c)}l.getUniforms().setValue(e,"morphTargetsTexture",f.texture,i),l.getUniforms().setValue(e,"morphTargetsTextureSize",f.size)}return{update:s}}function gx(e,t,i,n,r){let s=new WeakMap;function o(c){let h=r.render.frame,u=c.geometry,f=t.get(c,u);if(s.get(f)!==h)t.update(f),s.set(f,h);if(c.isInstancedMesh){if(c.hasEventListener("dispose",l)===!1)c.addEventListener("dispose",l);if(s.get(c)!==h){if(i.update(c.instanceMatrix,e.ARRAY_BUFFER),c.instanceColor!==null)i.update(c.instanceColor,e.ARRAY_BUFFER);s.set(c,h)}}if(c.isSkinnedMesh){let m=c.skeleton;if(s.get(m)!==h)m.update(),s.set(m,h)}return f}function a(){s=new WeakMap}function l(c){let h=c.target;if(h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),i.remove(h.instanceMatrix),h.instanceColor!==null)i.remove(h.instanceColor)}return{update:o,dispose:a}}var YM={[Mo]:"LINEAR_TONE_MAPPING",[vo]:"REINHARD_TONE_MAPPING",[So]:"CINEON_TONE_MAPPING",[rs]:"ACES_FILMIC_TONE_MAPPING",[To]:"AGX_TONE_MAPPING",[Eo]:"NEUTRAL_TONE_MAPPING",[bo]:"CUSTOM_TONE_MAPPING"};function xx(e,t,i,n,r,s){let o=new ii(t,i,{type:e,depthBuffer:r,stencilBuffer:s,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=null,h=new Xe;h.setAttribute("position",new Re([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new Re([0,2,0,0,2,0],2));let u=new oo({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new ne(h,u),m=new dr(-1,1,1,-1,0,1),g=null,x=null,d=!1,p,y=null,M=[],b=!1;this.setSize=function(v,T){if(o.setSize(v,T),a!==null)a.setSize(v,T);if(l!==null)l.setSize(v,T);for(let _=0;_<M.length;_++){let S=M[_];if(S.setSize)S.setSize(v,T)}},this.setEffects=function(v){M=v,b=M.length>0&&M[0].isRenderPass===!0;let{width:T,height:_}=o;if(M.length>0&&a===null)a=new ii(T,_,{type:si,depthBuffer:!1,stencilBuffer:!1}),l=new ii(T,_,{type:si,depthBuffer:!1,stencilBuffer:!1});let S=r===!0&&M.some((w)=>w.needsDepthTexture===!0);if(S!==(o.depthTexture!==null)){if(S===!0&&c===null){if(c=new In(T,_),s===!0)c.format=En,c.type=nr}o.dispose(),o.depthTexture=S?c:null,o.resolveDepthBuffer=S,o.storeMultisampledDepthBuffer=S}for(let w=0;w<M.length;w++){let L=M[w];if(L.setSize)L.setSize(T,_);if(S&&L.needsDepthTexture===!0&&L.setDepthTexture)L.setDepthTexture(c)}},this.begin=function(v,T){if(d)return!1;if(v.toneMapping===Tn&&M.length===0)return!1;if(y=T,T!==null){let{width:_,height:S}=T;if(o.width!==_||o.height!==S)this.setSize(_,S)}if(b===!1)v.setRenderTarget(o);return p=v.toneMapping,v.toneMapping=Tn,!0},this.hasRenderPass=function(){return b},this.end=function(v,T){v.toneMapping=p,d=!0;let _=o,S=a;for(let w=0;w<M.length;w++){let L=M[w];if(L.enabled===!1)continue;if(L.render(v,S,_,T),L.needsSwap!==!1)_=S,S=S===a?l:a}if(g!==v.outputColorSpace||x!==v.toneMapping){if(g=v.outputColorSpace,x=v.toneMapping,u.defines={},ht.getTransfer(g)===Tt)u.defines.SRGB_TRANSFER="";let w=YM[x];if(w)u.defines[w]="";u.needsUpdate=!0}u.uniforms.tDiffuse.value=_.texture,v.setRenderTarget(y),v.render(f,m),y=null,d=!1},this.isCompositing=function(){return d},this.dispose=function(){if(o.dispose(),a!==null)a.dispose();if(l!==null)l.dispose();h.dispose(),u.dispose()}}var Tx=new Lt,Ex=new In(1,1),wx=new sa(1),Ax=new Vs,Rx=new zo,Cx=new ds,_x=[],yx=[],Mx=new Float32Array(16),vx=new Float32Array(9),Sx=new Float32Array(4);function da(e,t,i){let n=e[0];if(n<=0||n>0)return e;let r=t*i,s=_x[r];if(s===void 0)s=new Float32Array(r),_x[r]=s;if(t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=i,e[o].toArray(s,a)}return s}function Ui(e,t){if(e.length!==t.length)return!1;for(let i=0,n=e.length;i<n;i++)if(e[i]!==t[i])return!1;return!0}function Bi(e,t){for(let i=0,n=t.length;i<n;i++)e[i]=t[i]}function Vh(e,t){let i=yx[t];if(i===void 0)i=new Int32Array(t),yx[t]=i;for(let n=0;n!==t;++n)i[n]=e.allocateTextureUnit();return i}function qM(e,t){let i=this.cache;if(i[0]===t)return;e.uniform1f(this.addr,t),i[0]=t}function ZM(e,t){let i=this.cache;if(t.x!==void 0){if(i[0]!==t.x||i[1]!==t.y)e.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y}else{if(Ui(i,t))return;e.uniform2fv(this.addr,t),Bi(i,t)}}function KM(e,t){let i=this.cache;if(t.x!==void 0){if(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)e.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z}else if(t.r!==void 0){if(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)e.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b}else{if(Ui(i,t))return;e.uniform3fv(this.addr,t),Bi(i,t)}}function JM(e,t){let i=this.cache;if(t.x!==void 0){if(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)e.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w}else{if(Ui(i,t))return;e.uniform4fv(this.addr,t),Bi(i,t)}}function jM(e,t){let i=this.cache,n=t.elements;if(n===void 0){if(Ui(i,t))return;e.uniformMatrix2fv(this.addr,!1,t),Bi(i,t)}else{if(Ui(i,n))return;Sx.set(n),e.uniformMatrix2fv(this.addr,!1,Sx),Bi(i,n)}}function $M(e,t){let i=this.cache,n=t.elements;if(n===void 0){if(Ui(i,t))return;e.uniformMatrix3fv(this.addr,!1,t),Bi(i,t)}else{if(Ui(i,n))return;vx.set(n),e.uniformMatrix3fv(this.addr,!1,vx),Bi(i,n)}}function QM(e,t){let i=this.cache,n=t.elements;if(n===void 0){if(Ui(i,t))return;e.uniformMatrix4fv(this.addr,!1,t),Bi(i,t)}else{if(Ui(i,n))return;Mx.set(n),e.uniformMatrix4fv(this.addr,!1,Mx),Bi(i,n)}}function ev(e,t){let i=this.cache;if(i[0]===t)return;e.uniform1i(this.addr,t),i[0]=t}function tv(e,t){let i=this.cache;if(t.x!==void 0){if(i[0]!==t.x||i[1]!==t.y)e.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y}else{if(Ui(i,t))return;e.uniform2iv(this.addr,t),Bi(i,t)}}function iv(e,t){let i=this.cache;if(t.x!==void 0){if(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)e.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z}else{if(Ui(i,t))return;e.uniform3iv(this.addr,t),Bi(i,t)}}function nv(e,t){let i=this.cache;if(t.x!==void 0){if(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)e.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w}else{if(Ui(i,t))return;e.uniform4iv(this.addr,t),Bi(i,t)}}function rv(e,t){let i=this.cache;if(i[0]===t)return;e.uniform1ui(this.addr,t),i[0]=t}function sv(e,t){let i=this.cache;if(t.x!==void 0){if(i[0]!==t.x||i[1]!==t.y)e.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y}else{if(Ui(i,t))return;e.uniform2uiv(this.addr,t),Bi(i,t)}}function ov(e,t){let i=this.cache;if(t.x!==void 0){if(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)e.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z}else{if(Ui(i,t))return;e.uniform3uiv(this.addr,t),Bi(i,t)}}function av(e,t){let i=this.cache;if(t.x!==void 0){if(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w}else{if(Ui(i,t))return;e.uniform4uiv(this.addr,t),Bi(i,t)}}function Wh(e){if(e.version===0)e.compareFunction=Vc,e.needsUpdate=!0;return e}function lv(e,t,i){let n=this.cache,r=i.allocateTextureUnit();if(n[0]!==r)e.uniform1i(this.addr,r),n[0]=r;let s;if(this.type===e.SAMPLER_2D_SHADOW)s=Wh(Ex);else s=Tx;i.setTexture2D(t||s,r)}function cv(e,t,i){let n=this.cache,r=i.allocateTextureUnit();if(n[0]!==r)e.uniform1i(this.addr,r),n[0]=r;i.setTexture3D(t||Rx,r)}function hv(e,t,i){let n=this.cache,r=i.allocateTextureUnit();if(n[0]!==r)e.uniform1i(this.addr,r),n[0]=r;let s;if(this.type===e.SAMPLER_CUBE_SHADOW)s=Wh(wx);else s=Cx;i.setTextureCube(t||s,r)}function fv(e,t,i){let n=this.cache,r=i.allocateTextureUnit();if(n[0]!==r)e.uniform1i(this.addr,r),n[0]=r;i.setTexture2DArray(t||Ax,r)}function uv(e){switch(e){case 5126:return qM;case 35664:return ZM;case 35665:return KM;case 35666:return JM;case 35674:return jM;case 35675:return $M;case 35676:return QM;case 5124:case 35670:return ev;case 35667:case 35671:return tv;case 35668:case 35672:return iv;case 35669:case 35673:return nv;case 5125:return rv;case 36294:return sv;case 36295:return ov;case 36296:return av;case 35678:case 36198:case 36298:case 36306:case 35682:return lv;case 35679:case 36299:case 36307:return cv;case 35680:case 36300:case 36308:case 36293:return hv;case 36289:case 36303:case 36311:case 36292:return fv}}function dv(e,t){e.uniform1fv(this.addr,t)}function pv(e,t){let i=da(t,this.size,2);e.uniform2fv(this.addr,i)}function mv(e,t){let i=da(t,this.size,3);e.uniform3fv(this.addr,i)}function gv(e,t){let i=da(t,this.size,4);e.uniform4fv(this.addr,i)}function xv(e,t){let i=da(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,i)}function _v(e,t){let i=da(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,i)}function yv(e,t){let i=da(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,i)}function Mv(e,t){e.uniform1iv(this.addr,t)}function vv(e,t){e.uniform2iv(this.addr,t)}function Sv(e,t){e.uniform3iv(this.addr,t)}function bv(e,t){e.uniform4iv(this.addr,t)}function Tv(e,t){e.uniform1uiv(this.addr,t)}function Ev(e,t){e.uniform2uiv(this.addr,t)}function wv(e,t){e.uniform3uiv(this.addr,t)}function Av(e,t){e.uniform4uiv(this.addr,t)}function Rv(e,t,i){let n=this.cache,r=t.length,s=Vh(i,r);if(!Ui(n,s))e.uniform1iv(this.addr,s),Bi(n,s);let o;if(this.type===e.SAMPLER_2D_SHADOW)o=Wh(Ex);else o=Tx;for(let a=0;a!==r;++a)i.setTexture2D(t[a]||o,s[a])}function Cv(e,t,i){let n=this.cache,r=t.length,s=Vh(i,r);if(!Ui(n,s))e.uniform1iv(this.addr,s),Bi(n,s);for(let o=0;o!==r;++o)i.setTexture3D(t[o]||Rx,s[o])}function Iv(e,t,i){let n=this.cache,r=t.length,s=Vh(i,r);if(!Ui(n,s))e.uniform1iv(this.addr,s),Bi(n,s);let o;if(this.type===e.SAMPLER_CUBE_SHADOW)o=Wh(wx);else o=Cx;for(let a=0;a!==r;++a)i.setTextureCube(t[a]||o,s[a])}function Pv(e,t,i){let n=this.cache,r=t.length,s=Vh(i,r);if(!Ui(n,s))e.uniform1iv(this.addr,s),Bi(n,s);for(let o=0;o!==r;++o)i.setTexture2DArray(t[o]||Ax,s[o])}function Lv(e){switch(e){case 5126:return dv;case 35664:return pv;case 35665:return mv;case 35666:return gv;case 35674:return xv;case 35675:return _v;case 35676:return yv;case 5124:case 35670:return Mv;case 35667:case 35671:return vv;case 35668:case 35672:return Sv;case 35669:case 35673:return bv;case 5125:return Tv;case 36294:return Ev;case 36295:return wv;case 36296:return Av;case 35678:case 36198:case 36298:case 36306:case 35682:return Rv;case 35679:case 36299:case 36307:return Cv;case 35680:case 36300:case 36308:case 36293:return Iv;case 36289:case 36303:case 36311:case 36292:return Pv}}class Ix{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=uv(t.type)}}class Px{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Lv(t.type)}}class Lx{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let n=this.seq;for(let r=0,s=n.length;r!==s;++r){let o=n[r];o.setValue(e,t[o.id],i)}}}var vu=/(\w+)(\])?(\[|\.)?/g;function bx(e,t){e.seq.push(t),e.map[t.id]=t}function Dv(e,t,i){let n=e.name,r=n.length;vu.lastIndex=0;while(!0){let s=vu.exec(n),o=vu.lastIndex,a=s[1],l=s[2]==="]",c=s[3];if(l)a=a|0;if(c===void 0||c==="["&&o+2===r){bx(i,c===void 0?new Ix(a,e,t):new Px(a,e,t));break}else{let u=i.map[a];if(u===void 0)u=new Lx(a),bx(i,u);i=u}}}class ho{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let o=e.getActiveUniform(t,s),a=e.getUniformLocation(t,o.name);Dv(o,a,this)}let n=[],r=[];for(let s of this.seq)if(s.type===e.SAMPLER_2D_SHADOW||s.type===e.SAMPLER_CUBE_SHADOW||s.type===e.SAMPLER_2D_ARRAY_SHADOW)n.push(s);else r.push(s);if(n.length>0)this.seq=n.concat(r)}setValue(e,t,i,n){let r=this.map[t];if(r!==void 0)r.setValue(e,i,n)}setOptional(e,t,i){let n=t[i];if(n!==void 0)this.setValue(e,i,n)}static upload(e,t,i,n){for(let r=0,s=t.length;r!==s;++r){let o=t[r],a=i[o.id];if(a.needsUpdate!==!1)o.setValue(e,a.value,n)}}static seqWithValue(e,t){let i=[];for(let n=0,r=e.length;n!==r;++n){let s=e[n];if(s.id in t)i.push(s)}return i}}function Su(e,t,i){let n=e.createShader(t);return e.shaderSource(n,i),e.compileShader(n),n}var Nv=37297,Fv=0;function Uv(e,t){let i=e.split(`
`),n=[],r=Math.max(t-6,0),s=Math.min(t+6,i.length);for(let o=r;o<s;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${i[o]}`)}return n.join(`
`)}var Dx=new st;function Bv(e){ht._getMatrix(Dx,ht.workingColorSpace,e);let t=`mat3( ${Dx.elements.map((i)=>i.toFixed(4))} )`;switch(ht.getTransfer(e)){case zs:return[t,"LinearTransferOETF"];case Tt:return[t,"sRGBTransferOETF"];default:return Te("WebGLProgram: Unsupported color space: ",e),[t,"LinearTransferOETF"]}}function Nx(e,t,i){let n=e.getShaderParameter(t,e.COMPILE_STATUS),s=(e.getShaderInfoLog(t)||"").trim();if(n&&s==="")return"";let o=/ERROR: 0:(\d+)/.exec(s);if(o){let a=parseInt(o[1]);return i.toUpperCase()+`

`+s+`

`+Uv(e.getShaderSource(t),a)}else return s}function Ov(e,t){let i=Bv(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${i[1]}( vec4( ${i[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var Hv={[Mo]:"Linear",[vo]:"Reinhard",[So]:"Cineon",[rs]:"ACESFilmic",[To]:"AgX",[Eo]:"Neutral",[bo]:"Custom"};function zv(e,t){let i=Hv[t];if(i===void 0)return Te("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+e+"( vec3 color ) { return LinearToneMapping( color ); }";return"vec3 "+e+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}var Xh=new R;function Gv(){ht.getLuminanceCoefficients(Xh);let e=Xh.x.toFixed(4),t=Xh.y.toFixed(4),i=Xh.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${t}, ${i} );`,"\treturn dot( weights, rgb );","}"].join(`
`)}function kv(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(nc).join(`
`)}function Vv(e){let t=[];for(let i in e){let n=e[i];if(n===!1)continue;t.push("#define "+i+" "+n)}return t.join(`
`)}function Wv(e,t){let i={},n=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){let s=e.getActiveAttrib(t,r),o=s.name,a=1;if(s.type===e.FLOAT_MAT2)a=2;if(s.type===e.FLOAT_MAT3)a=3;if(s.type===e.FLOAT_MAT4)a=4;i[o]={type:s.type,location:e.getAttribLocation(t,o),locationSize:a}}return i}function nc(e){return e!==""}function Fx(e,t){let i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function Ux(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Xv=/^[ \t]*#include +<([\w\d./]+)>/gm;function bu(e){return e.replace(Xv,Yv)}function Yv(e,t){let i=xt[t];if(i===void 0)throw Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return bu(i)}var qv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Bx(e){return e.replace(qv,Zv)}function Zv(e,t,i,n){let r="";for(let s=parseInt(t);s<parseInt(i);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Ox(e){let t=`precision ${e.precision} float;
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
#define LOW_PRECISION`;return t}var Kv={[yo]:"SHADOWMAP_TYPE_PCF",[Ds]:"SHADOWMAP_TYPE_VSM"};function Jv(e){return Kv[e.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var jv={[Lr]:"ENVMAP_MODE_REFRACTION"};function $v(e){if(e.envMap===!1)return"ENVMAP_MODE_REFLECTION";return jv[e.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Qv={[Ns]:"ENVMAP_BLENDING_MULTIPLY",[Wd]:"ENVMAP_BLENDING_MIX",[Xd]:"ENVMAP_BLENDING_ADD"};function eS(e){if(e.envMap===!1)return"ENVMAP_BLENDING_NONE";return Qv[e.combine]||"ENVMAP_BLENDING_NONE"}function Hx(e,t,i,n){let r=e.getContext(),{defines:s,vertexShader:o,fragmentShader:a}=i,l=Jv(i),c=i.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=$v(i),u=eS(i),f=kv(i),m=Vv(s),g=r.createProgram(),x,d,p=i.glslVersion?"#version "+i.glslVersion+`
`:"";if(i.isRawShaderMaterial){if(x=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,m].filter(nc).join(`
`),x.length>0)x+=`
`;if(d=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,m].filter(nc).join(`
`),d.length>0)d+=`
`}else x=[Ox(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,m,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+h:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+i.diffuseRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexNormals?"#define HAS_NORMAL":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+l:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","\tattribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","\tattribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","\tuniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","\tattribute vec2 uv1;","#endif","#ifdef USE_UV2","\tattribute vec2 uv2;","#endif","#ifdef USE_UV3","\tattribute vec2 uv3;","#endif","#ifdef USE_TANGENT","\tattribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","\tattribute vec4 color;","#elif defined( USE_COLOR )","\tattribute vec3 color;","#endif","#ifdef USE_SKINNING","\tattribute vec4 skinIndex;","\tattribute vec4 skinWeight;","#endif",`
`].filter(nc).join(`
`),d=[Ox(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,m,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+c:"",i.envMap?"#define "+h:"",i.envMap?"#define "+u:"",i.envMapPMREM?"#define ENVMAP_MAX_LOD "+i.envMapMaxLod+".0":"",i.envMapPMREM?"#define ENVMAP_SIZE "+i.envMapSize+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",i.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.retroreflection?"#define USE_RETROREFLECTION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+l:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Tn?"#define TONE_MAPPING":"",i.toneMapping!==Tn?xt.tonemapping_pars_fragment:"",i.toneMapping!==Tn?zv("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",xt.colorspace_pars_fragment,Ov("linearToOutputTexel",i.outputColorSpace),Gv(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(nc).join(`
`);if(o=bu(o),o=Fx(o,i),o=Ux(o,i),a=bu(a),a=Fx(a,i),a=Ux(a,i),o=Bx(o),a=Bx(a),i.isRawShaderMaterial!==!0)p=`#version 300 es
`,x=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,d=["#define varying in",i.glslVersion===Sf?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===Sf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d;let y=p+x+o,M=p+d+a,b=Su(r,r.VERTEX_SHADER,y),v=Su(r,r.FRAGMENT_SHADER,M);if(r.attachShader(g,b),r.attachShader(g,v),i.index0AttributeName!==void 0)r.bindAttribLocation(g,0,i.index0AttributeName);else if(i.hasPositionAttribute===!0)r.bindAttribLocation(g,0,"position");r.linkProgram(g);function T(L){if(e.debug.checkShaderErrors){let I=r.getProgramInfoLog(g)||"",U=r.getShaderInfoLog(b)||"",K=r.getShaderInfoLog(v)||"",P=I.trim(),V=U.trim(),D=K.trim(),N=!0,Q=!0;if(r.getProgramParameter(g,r.LINK_STATUS)===!1)if(N=!1,typeof e.debug.onShaderError==="function")e.debug.onShaderError(r,g,b,v);else{let G=Nx(r,b,"vertex"),z=Nx(r,v,"fragment");Ye("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(g,r.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+P+`
`+G+`
`+z)}else if(P!=="")Te("WebGLProgram: Program Info Log:",P);else if(V===""||D==="")Q=!1;if(Q)L.diagnostics={runnable:N,programLog:P,vertexShader:{log:V,prefix:x},fragmentShader:{log:D,prefix:d}}}r.deleteShader(b),r.deleteShader(v),_=new ho(r,g),S=Wv(r,g)}let _;this.getUniforms=function(){if(_===void 0)T(this);return _};let S;this.getAttributes=function(){if(S===void 0)T(this);return S};let w=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){if(w===!1)w=r.getProgramParameter(g,Nv);return w},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(g),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=Fv++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=b,this.fragmentShader=v,this}var tS=0;class Tu{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){let n=this._getShaderCacheForMaterial(e);if(n.has(t)===!1)n.add(t),t.usedTimes++;if(n.has(i)===!1)n.add(i),i.usedTimes++;return this}remove(e){let t=this.materialCache.get(e);for(let i of t)if(i.usedTimes--,i.usedTimes===0)this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);if(i===void 0)i=new Set,t.set(e,i);return i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);if(i===void 0)i=new zx(e),t.set(e,i);return i}}class zx{constructor(e){this.id=tS++,this.code=e,this.usedTimes=0}}function iS(e){return e===wn||e===Bs||e===Os}function Gx(e,t,i,n,r,s){let o=new cs,a=new Tu,l=new Set,c=[],h=new Map,u=n.logarithmicDepthBuffer,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(_){if(l.add(_),_===0)return"uv";return`uv${_}`}function g(_,S,w,L,I,U){let K=L.fog,P=I.geometry,V=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?L.environment:null,D=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,N=t.get(_.envMap||V,D),Q=f[_.type],G=n.precision;if(_.precision!==null){if(G=n.getMaxPrecision(_.precision),G!==_.precision)Te("WebGLProgram.getParameters:",_.precision,"not supported, using",G,"instead.")}let z=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,Y=z!==void 0?z.length:0,le=0;if(P.morphAttributes.position!==void 0)le=1;if(P.morphAttributes.normal!==void 0)le=2;if(P.morphAttributes.color!==void 0)le=3;let k,ee,be,_e;if(Q){let Pe=Fn[Q];k=Pe.vertexShader,ee=Pe.fragmentShader}else{k=_.vertexShader,ee=_.fragmentShader;let Pe=a.getVertexShaderStage(_),Ft=a.getFragmentShaderStage(_);a.update(_,Pe,Ft),be=Pe.id,_e=Ft.id}let He=e.getRenderTarget(),Ie=e.state.buffers.depth.getReversed(),ft=I.isInstancedMesh===!0,ze=I.isBatchedMesh===!0,ke=!!_.map,pt=!!_.matcap,ue=!!N,xe=ue&&N.isPMREMTexture===!0,ye=!!_.aoMap,Be=!!_.lightMap,Fe=!!_.bumpMap&&_.wireframe===!1,nt=!!_.normalMap,We=!!_.displacementMap,at=!!_.emissiveMap,Mt=!!_.metalnessMap,Ct=!!_.roughnessMap,H=_.anisotropy>0,yi=_.clearcoat>0,q=_.diffuseRoughness>0,pe=_.dispersion>0,oe=_.retroreflectivity>0,Ce=_.iridescence>0,de=_.sheen>0,Me=_.transmission>0,vt=H&&!!_.anisotropyMap,C=yi&&!!_.clearcoatMap,E=yi&&!!_.clearcoatNormalMap,X=yi&&!!_.clearcoatRoughnessMap,ae=q&&!!_.diffuseRoughnessMap,he=Ce&&!!_.iridescenceMap,ve=Ce&&!!_.iridescenceThicknessMap,Ee=de&&!!_.sheenColorMap,te=de&&!!_.sheenRoughnessMap,ce=!!_.specularMap,me=!!_.specularColorMap,F=!!_.specularIntensityMap,se=Me&&!!_.transmissionMap,re=Me&&!!_.thicknessMap,Se=!!_.gradientMap,we=!!_.alphaMap,Ae=_.alphaTest>0,tt=!!_.alphaHash,Je=!!_.extensions,Oe=Tn;if(_.toneMapped){if(He===null||He.isXRRenderTarget===!0)Oe=e.toneMapping}let et=xe?N.isCompressedCubeTexture?N.image[0].mipmaps:N.mipmaps:null,ut={shaderID:Q,shaderType:_.type,shaderName:_.name,vertexShader:k,fragmentShader:ee,defines:_.defines,customVertexShaderID:be,customFragmentShaderID:_e,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:G,batching:ze,batchingColor:ze&&I._colorsTexture!==null,instancing:ft,instancingColor:ft&&I.instanceColor!==null,instancingMorph:ft&&I.morphTexture!==null,outputColorSpace:He===null?e.outputColorSpace:He.isXRRenderTarget===!0?He.texture.colorSpace:ht.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:ke,matcap:pt,envMap:ue,envMapMode:ue&&N.mapping,envMapPMREM:xe,envMapMaxLod:xe?et.length-1:null,envMapSize:xe?et[0].width:null,aoMap:ye,lightMap:Be,bumpMap:Fe,normalMap:nt,displacementMap:We,emissiveMap:at,normalMapObjectSpace:nt&&_.normalMapType===Kd,normalMapTangentSpace:nt&&_.normalMapType===rr,packedNormalMap:nt&&_.normalMapType===rr&&iS(_.normalMap.format),metalnessMap:Mt,roughnessMap:Ct,anisotropy:H,anisotropyMap:vt,clearcoat:yi,clearcoatMap:C,clearcoatNormalMap:E,clearcoatRoughnessMap:X,diffuseRoughness:q,diffuseRoughnessMap:ae,dispersion:pe,retroreflection:oe,iridescence:Ce,iridescenceMap:he,iridescenceThicknessMap:ve,sheen:de,sheenColorMap:Ee,sheenRoughnessMap:te,specularMap:ce,specularColorMap:me,specularIntensityMap:F,transmission:Me,transmissionMap:se,thicknessMap:re,gradientMap:Se,opaque:_.transparent===!1&&_.blending===ts&&_.alphaToCoverage===!1,alphaMap:we,alphaTest:Ae,alphaHash:tt,combine:_.combine,mapUv:ke&&m(_.map.channel),aoMapUv:ye&&m(_.aoMap.channel),lightMapUv:Be&&m(_.lightMap.channel),bumpMapUv:Fe&&m(_.bumpMap.channel),normalMapUv:nt&&m(_.normalMap.channel),displacementMapUv:We&&m(_.displacementMap.channel),emissiveMapUv:at&&m(_.emissiveMap.channel),metalnessMapUv:Mt&&m(_.metalnessMap.channel),roughnessMapUv:Ct&&m(_.roughnessMap.channel),anisotropyMapUv:vt&&m(_.anisotropyMap.channel),clearcoatMapUv:C&&m(_.clearcoatMap.channel),clearcoatNormalMapUv:E&&m(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:X&&m(_.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:ae&&m(_.diffuseRoughnessMap.channel),iridescenceMapUv:he&&m(_.iridescenceMap.channel),iridescenceThicknessMapUv:ve&&m(_.iridescenceThicknessMap.channel),sheenColorMapUv:Ee&&m(_.sheenColorMap.channel),sheenRoughnessMapUv:te&&m(_.sheenRoughnessMap.channel),specularMapUv:ce&&m(_.specularMap.channel),specularColorMapUv:me&&m(_.specularColorMap.channel),specularIntensityMapUv:F&&m(_.specularIntensityMap.channel),transmissionMapUv:se&&m(_.transmissionMap.channel),thicknessMapUv:re&&m(_.thicknessMap.channel),alphaMapUv:we&&m(_.alphaMap.channel),vertexTangents:!!P.attributes.tangent&&(nt||H),vertexNormals:!!P.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!P.attributes.uv&&(ke||we),fog:!!K,useFog:_.fog===!0,fogExp2:!!K&&K.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||P.attributes.normal===void 0&&nt===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:Ie,skinning:I.isSkinnedMesh===!0,hasPositionAttribute:P.attributes.position!==void 0,morphTargets:P.morphAttributes.position!==void 0,morphNormals:P.morphAttributes.normal!==void 0,morphColors:P.morphAttributes.color!==void 0,morphTargetsCount:Y,morphTextureStride:le,numSunLights:S.sun.length,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numSunLightShadows:S.sunShadowMap.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numLightProbeGrids:U.filter((Pe)=>Pe.texture!==null).length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:_.dithering,shadowMapEnabled:e.shadowMap.enabled&&w.length>0,shadowMapType:e.shadowMap.type,toneMapping:Oe,decodeVideoTexture:ke&&_.map.isVideoTexture===!0&&ht.getTransfer(_.map.colorSpace)===Tt,decodeVideoTextureEmissive:at&&_.emissiveMap.isVideoTexture===!0&&ht.getTransfer(_.emissiveMap.colorSpace)===Tt,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Ot,flipSided:_.side===jt,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:Je&&_.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Je&&_.extensions.multiDraw===!0||ze)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return ut.vertexUv1s=l.has(1),ut.vertexUv2s=l.has(2),ut.vertexUv3s=l.has(3),l.clear(),ut}function x(_){let S=[];if(_.shaderID)S.push(_.shaderID);else S.push(_.customVertexShaderID),S.push(_.customFragmentShaderID);if(_.defines!==void 0)for(let w in _.defines)S.push(w),S.push(_.defines[w]);if(_.isRawShaderMaterial===!1)d(S,_),p(S,_),S.push(e.outputColorSpace);return S.push(_.customProgramCacheKey),S.join()}function d(_,S){_.push(S.precision),_.push(S.outputColorSpace),_.push(S.envMapMode),_.push(S.envMapPMREM),_.push(S.envMapMaxLod),_.push(S.envMapSize),_.push(S.mapUv),_.push(S.alphaMapUv),_.push(S.lightMapUv),_.push(S.aoMapUv),_.push(S.bumpMapUv),_.push(S.normalMapUv),_.push(S.displacementMapUv),_.push(S.emissiveMapUv),_.push(S.metalnessMapUv),_.push(S.roughnessMapUv),_.push(S.anisotropyMapUv),_.push(S.clearcoatMapUv),_.push(S.clearcoatNormalMapUv),_.push(S.clearcoatRoughnessMapUv),_.push(S.diffuseRoughnessMapUv),_.push(S.iridescenceMapUv),_.push(S.iridescenceThicknessMapUv),_.push(S.sheenColorMapUv),_.push(S.sheenRoughnessMapUv),_.push(S.specularMapUv),_.push(S.specularColorMapUv),_.push(S.specularIntensityMapUv),_.push(S.transmissionMapUv),_.push(S.thicknessMapUv),_.push(S.combine),_.push(S.fogExp2),_.push(S.sizeAttenuation),_.push(S.morphTargetsCount),_.push(S.numSunLights),_.push(S.numDirLights),_.push(S.numPointLights),_.push(S.numSpotLights),_.push(S.numSpotLightMaps),_.push(S.numHemiLights),_.push(S.numRectAreaLights),_.push(S.numSunLightShadows),_.push(S.numDirLightShadows),_.push(S.numPointLightShadows),_.push(S.numSpotLightShadows),_.push(S.numSpotLightShadowsWithMaps),_.push(S.numLightProbes),_.push(S.numLightProbeGrids),_.push(S.shadowMapType),_.push(S.toneMapping),_.push(S.numClippingPlanes),_.push(S.numClipIntersection),_.push(S.depthPacking)}function p(_,S){if(o.disableAll(),S.instancing)o.enable(0);if(S.instancingColor)o.enable(1);if(S.instancingMorph)o.enable(2);if(S.matcap)o.enable(3);if(S.envMap)o.enable(4);if(S.normalMapObjectSpace)o.enable(5);if(S.normalMapTangentSpace)o.enable(6);if(S.clearcoat)o.enable(7);if(S.iridescence)o.enable(8);if(S.alphaTest)o.enable(9);if(S.vertexColors)o.enable(10);if(S.vertexAlphas)o.enable(11);if(S.vertexUv1s)o.enable(12);if(S.vertexUv2s)o.enable(13);if(S.vertexUv3s)o.enable(14);if(S.vertexTangents)o.enable(15);if(S.anisotropy)o.enable(16);if(S.alphaHash)o.enable(17);if(S.batching)o.enable(18);if(S.dispersion)o.enable(19);if(S.retroreflection)o.enable(24);if(S.diffuseRoughness)o.enable(25);if(S.batchingColor)o.enable(20);if(S.gradientMap)o.enable(21);if(S.packedNormalMap)o.enable(22);if(S.vertexNormals)o.enable(23);if(_.push(o.mask),o.disableAll(),S.fog)o.enable(0);if(S.useFog)o.enable(1);if(S.flatShading)o.enable(2);if(S.logarithmicDepthBuffer)o.enable(3);if(S.reversedDepthBuffer)o.enable(4);if(S.skinning)o.enable(5);if(S.morphTargets)o.enable(6);if(S.morphNormals)o.enable(7);if(S.morphColors)o.enable(8);if(S.premultipliedAlpha)o.enable(9);if(S.shadowMapEnabled)o.enable(10);if(S.doubleSided)o.enable(11);if(S.flipSided)o.enable(12);if(S.useDepthPacking)o.enable(13);if(S.dithering)o.enable(14);if(S.transmission)o.enable(15);if(S.sheen)o.enable(16);if(S.opaque)o.enable(17);if(S.pointsUvs)o.enable(18);if(S.decodeVideoTexture)o.enable(19);if(S.decodeVideoTextureEmissive)o.enable(20);if(S.alphaToCoverage)o.enable(21);if(S.numLightProbeGrids>0)o.enable(22);if(S.hasPositionAttribute)o.enable(23);_.push(o.mask)}function y(_){let S=f[_.type],w;if(S){let L=Fn[S];w=vr.clone(L.uniforms)}else w=_.uniforms;return w}function M(_,S){let w=h.get(S);if(w!==void 0)++w.usedTimes;else w=new Hx(e,S,_,r),c.push(w),h.set(S,w);return w}function b(_){if(--_.usedTimes===0){let S=c.indexOf(_);c[S]=c[c.length-1],c.pop(),h.delete(_.cacheKey),_.destroy()}}function v(_){a.remove(_)}function T(){a.dispose()}return{getParameters:g,getProgramCacheKey:x,getUniforms:y,acquireProgram:M,releaseProgram:b,releaseShaderCache:v,programs:c,dispose:T}}function kx(){let e=new WeakMap;function t(o){return e.has(o)}function i(o){let a=e.get(o);if(a===void 0)a={},e.set(o,a);return a}function n(o){e.delete(o)}function r(o,a,l){e.get(o)[a]=l}function s(){e=new WeakMap}return{has:t,get:i,remove:n,update:r,dispose:s}}function nS(e,t){if(e.groupOrder!==t.groupOrder)return e.groupOrder-t.groupOrder;else if(e.renderOrder!==t.renderOrder)return e.renderOrder-t.renderOrder;else if(e.material.id!==t.material.id)return e.material.id-t.material.id;else if(e.materialVariant!==t.materialVariant)return e.materialVariant-t.materialVariant;else if(e.z!==t.z)return e.z-t.z;else return e.id-t.id}function Vx(e,t){if(e.groupOrder!==t.groupOrder)return e.groupOrder-t.groupOrder;else if(e.renderOrder!==t.renderOrder)return e.renderOrder-t.renderOrder;else if(e.z!==t.z)return t.z-e.z;else return e.id-t.id}function Wx(){let e=[],t=0,i=[],n=[],r=[];function s(){t=0,i.length=0,n.length=0,r.length=0}function o(f){let m=0;if(f.isInstancedMesh)m+=2;if(f.isSkinnedMesh)m+=1;return m}function a(f,m,g,x,d,p){let y=e[t];if(y===void 0)y={id:f.id,object:f,geometry:m,material:g,materialVariant:o(f),groupOrder:x,renderOrder:f.renderOrder,z:d,group:p},e[t]=y;else y.id=f.id,y.object=f,y.geometry=m,y.material=g,y.materialVariant=o(f),y.groupOrder=x,y.renderOrder=f.renderOrder,y.z=d,y.group=p;return t++,y}function l(f,m,g,x,d,p,y){if(y.reversedDepth===!0)d=-d;let M=a(f,m,g,x,d,p);if(g.transmission>0)n.push(M);else if(g.transparent===!0)r.push(M);else i.push(M)}function c(f,m,g,x,d,p){let y=a(f,m,g,x,d,p);if(g.transmission>0)n.unshift(y);else if(g.transparent===!0)r.unshift(y);else i.unshift(y)}function h(f,m){if(i.length>1)i.sort(f||nS);if(n.length>1)n.sort(m||Vx);if(r.length>1)r.sort(m||Vx)}function u(){for(let f=t,m=e.length;f<m;f++){let g=e[f];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:i,transmissive:n,transparent:r,init:s,push:l,unshift:c,finish:u,sort:h}}function Xx(){let e=new WeakMap;function t(n,r){let s=e.get(n),o;if(s===void 0)o=new Wx,e.set(n,[o]);else if(r>=s.length)o=new Wx,s.push(o);else o=s[r];return o}function i(){e=new WeakMap}return{get:t,dispose:i}}function rS(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let i;switch(t.type){case"SunLight":case"DirectionalLight":i={direction:new R,color:new ge};break;case"SpotLight":i={position:new R,direction:new R,color:new ge,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new R,color:new ge,distance:0,decay:0};break;case"HemisphereLight":i={direction:new R,skyColor:new ge,groundColor:new ge};break;case"RectAreaLight":i={color:new ge,position:new R,halfWidth:new R,halfHeight:new R};break}return e[t.id]=i,i}}}function sS(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let i;switch(t.type){case"SunLight":case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Z};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Z};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Z,shadowCameraNear:1,shadowCameraFar:1000};break}return e[t.id]=i,i}}}var oS=0;function aS(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function Yx(e){let t=new rS,i=sS(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new R);let r=new R,s=new Ge,o=new Ge;function a(c){let h=0,u=0,f=0;for(let U=0;U<9;U++)n.probe[U].set(0,0,0);let m=0,g=0,x=0,d=0,p=0,y=0,M=0,b=0,v=0,T=0,_=0,S=0,w=0,L=0;c.sort(aS);for(let U=0,K=c.length;U<K;U++){let P=c[U],{color:V,intensity:D,distance:N}=P,Q=null;if(P.shadow&&P.shadow.map)if(P.shadow.map.texture.format===wn)Q=P.shadow.map.texture;else Q=P.shadow.map.depthTexture||P.shadow.map.texture;if(P.isAmbientLight)h+=V.r*D,u+=V.g*D,f+=V.b*D;else if(P.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(P.sh.coefficients[G],D);L++}else if(P.isSunLight){let G=t.get(P);if(G.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let z=P.shadow,Y=i.get(P);Y.shadowIntensity=z.intensity,Y.shadowBias=z.bias,Y.shadowNormalBias=z.normalBias,Y.shadowRadius=z.radius,Y.shadowMapSize.copy(z.mapSize).multiply(z.getFrameExtents()),n.sunShadow[g]=Y,n.sunShadowMap[g]=Q;let le=z.getViewportCount();for(let k=0;k<le;k++)n.sunShadowMatrix[x+k]=z.getMatrix(k),n.sunShadowCascade[x+k]=z._cascadeData[k];x+=le,g++}n.sun[m]=G,m++}else if(P.isDirectionalLight){let G=t.get(P);if(G.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let z=P.shadow,Y=i.get(P);Y.shadowIntensity=z.intensity,Y.shadowBias=z.bias,Y.shadowNormalBias=z.normalBias,Y.shadowRadius=z.radius,Y.shadowMapSize=z.mapSize,n.directionalShadow[d]=Y,n.directionalShadowMap[d]=Q,n.directionalShadowMatrix[d]=P.shadow.matrix,v++}n.directional[d]=G,d++}else if(P.isSpotLight){let G=t.get(P);G.position.setFromMatrixPosition(P.matrixWorld),G.color.copy(V).multiplyScalar(D),G.distance=N,G.coneCos=Math.cos(P.angle),G.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),G.decay=P.decay,n.spot[y]=G;let z=P.shadow;if(P.map){if(n.spotLightMap[S]=P.map,S++,z.updateMatrices(P),P.castShadow)w++}if(n.spotLightMatrix[y]=z.matrix,P.castShadow){let Y=i.get(P);Y.shadowIntensity=z.intensity,Y.shadowBias=z.bias,Y.shadowNormalBias=z.normalBias,Y.shadowRadius=z.radius,Y.shadowMapSize=z.mapSize,n.spotShadow[y]=Y,n.spotShadowMap[y]=Q,_++}y++}else if(P.isRectAreaLight){let G=t.get(P);G.color.copy(V).multiplyScalar(D),G.halfWidth.set(P.width*0.5,0,0),G.halfHeight.set(0,P.height*0.5,0),n.rectArea[M]=G,M++}else if(P.isPointLight){let G=t.get(P);if(G.color.copy(P.color).multiplyScalar(P.intensity),G.distance=P.distance,G.decay=P.decay,P.castShadow){let z=P.shadow,Y=i.get(P);Y.shadowIntensity=z.intensity,Y.shadowBias=z.bias,Y.shadowNormalBias=z.normalBias,Y.shadowRadius=z.radius,Y.shadowMapSize=z.mapSize,Y.shadowCameraNear=z.camera.near,Y.shadowCameraFar=z.camera.far,n.pointShadow[p]=Y,n.pointShadowMap[p]=Q,n.pointShadowMatrix[p]=P.shadow.matrix,T++}n.point[p]=G,p++}else if(P.isHemisphereLight){let G=t.get(P);G.skyColor.copy(P.color).multiplyScalar(D),G.groundColor.copy(P.groundColor).multiplyScalar(D),n.hemi[b]=G,b++}}if(M>0)if(e.has("OES_texture_float_linear")===!0)n.rectAreaLTC1=Ue.LTC_FLOAT_1,n.rectAreaLTC2=Ue.LTC_FLOAT_2;else n.rectAreaLTC1=Ue.LTC_HALF_1,n.rectAreaLTC2=Ue.LTC_HALF_2;n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;let I=n.hash;if(I.sunLength!==m||I.directionalLength!==d||I.pointLength!==p||I.spotLength!==y||I.rectAreaLength!==M||I.hemiLength!==b||I.numSunShadows!==g||I.numDirectionalShadows!==v||I.numPointShadows!==T||I.numSpotShadows!==_||I.numSpotMaps!==S||I.numLightProbes!==L)n.sun.length=m,n.directional.length=d,n.spot.length=y,n.rectArea.length=M,n.point.length=p,n.hemi.length=b,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=x,n.sunShadowCascade.length=x,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.directionalShadowMatrix.length=v,n.pointShadow.length=T,n.pointShadowMap.length=T,n.pointShadowMatrix.length=T,n.spotShadow.length=_,n.spotShadowMap.length=_,n.spotLightMatrix.length=_+S-w,n.spotLightMap.length=S,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=L,I.sunLength=m,I.directionalLength=d,I.pointLength=p,I.spotLength=y,I.rectAreaLength=M,I.hemiLength=b,I.numSunShadows=g,I.numDirectionalShadows=v,I.numPointShadows=T,I.numSpotShadows=_,I.numSpotMaps=S,I.numLightProbes=L,n.version=oS++}function l(c,h){let u=0,f=0,m=0,g=0,x=0,d=0,p=h.matrixWorldInverse;for(let y=0,M=c.length;y<M;y++){let b=c[y];if(b.isSunLight){let v=n.sun[u];v.direction.setFromMatrixPosition(b.matrixWorld),v.direction.transformDirection(p),u++}else if(b.isDirectionalLight){let v=n.directional[f];v.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(p),f++}else if(b.isSpotLight){let v=n.spot[g];v.position.setFromMatrixPosition(b.matrixWorld),v.position.applyMatrix4(p),v.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(p),g++}else if(b.isRectAreaLight){let v=n.rectArea[x];v.position.setFromMatrixPosition(b.matrixWorld),v.position.applyMatrix4(p),o.identity(),s.copy(b.matrixWorld),s.premultiply(p),o.extractRotation(s),v.halfWidth.set(b.width*0.5,0,0),v.halfHeight.set(0,b.height*0.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),x++}else if(b.isPointLight){let v=n.point[m];v.position.setFromMatrixPosition(b.matrixWorld),v.position.applyMatrix4(p),m++}else if(b.isHemisphereLight){let v=n.hemi[d];v.direction.setFromMatrixPosition(b.matrixWorld),v.direction.transformDirection(p),d++}}}return{setup:a,setupView:l,state:n}}function qx(e){let t=new Yx(e),i=[],n=[],r=[];function s(u){h.camera=u,i.length=0,n.length=0,r.length=0}function o(u){if(u.isLightProbeGrid)r.push(u);else i.push(u)}function a(u){n.push(u)}function l(){t.setup(i),r.sort((u,f)=>u.priority-f.priority||u.id-f.id)}function c(u){t.setupView(i,u)}let h={lightsArray:i,shadowsArray:n,lightProbeGridArray:r,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:h,setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function Zx(e){let t=new WeakMap;function i(r,s=0){let o=t.get(r),a;if(o===void 0)a=new qx(e),t.set(r,[a]);else if(s>=o.length)a=new qx(e),o.push(a);else a=o[s];return a}function n(){t=new WeakMap}return{get:i,dispose:n}}var Kx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}
`,Jx=`
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
`;var cS=[new R(1,0,0),new R(-1,0,0),new R(0,1,0),new R(0,-1,0),new R(0,0,1),new R(0,0,-1)],hS=[new R(0,-1,0),new R(0,-1,0),new R(0,0,1),new R(0,0,-1),new R(0,-1,0),new R(0,-1,0)],jx=new Ge,rc=new R,Eu=new R;function $x(e,t,i){let n=new qn,r=new Z,s=new Z,o=new Et,a=new Zl,l=new Kl,c={},h=i.maxTextureSize,u={[Mn]:jt,[jt]:Mn,[Ot]:Ot},f=new ai({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Z},radius:{value:4}},vertexShader:Kx,fragmentShader:Jx}),m=f.clone();m.defines.HORIZONTAL_PASS=1;let g=new Xe;g.setAttribute("position",new Zt(new Float32Array([-1,-1,0.5,3,-1,0.5,-1,3,0.5]),3));let x=new ne(g,f),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=yo;let p=this.type;this.render=function(T,_,S){if(d.enabled===!1)return;if(d.autoUpdate===!1&&d.needsUpdate===!1)return;if(T.length===0)return;if(this.type===Ed)Te("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=yo;let w=e.getRenderTarget(),L=e.getActiveCubeFace(),I=e.getActiveMipmapLevel(),U=e.state;if(U.setBlending(Gn),U.buffers.depth.getReversed()===!0)U.buffers.color.setClear(0,0,0,0);else U.buffers.color.setClear(1,1,1,1);U.buffers.depth.setTest(!0),U.setScissorTest(!1);let K=p!==this.type;if(K)_.traverse(function(P){if(P.material)if(Array.isArray(P.material))P.material.forEach((V)=>V.needsUpdate=!0);else P.material.needsUpdate=!0});for(let P=0,V=T.length;P<V;P++){let D=T[P],N=D.shadow;if(N===void 0){Te("WebGLShadowMap:",D,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;r.copy(N.mapSize);let Q=N.getFrameExtents();if(r.multiply(Q),s.copy(N.mapSize),r.x>h||r.y>h){if(r.x>h)s.x=Math.floor(h/Q.x),r.x=s.x*Q.x,N.mapSize.x=s.x;if(r.y>h)s.y=Math.floor(h/Q.y),r.y=s.y*Q.y,N.mapSize.y=s.y}let G=e.state.buffers.depth.getReversed();if(N.camera._reversedDepth=G,N.map===null||K===!0){if(N.map!==null){if(N.map.depthTexture!==null)N.map.depthTexture.dispose(),N.map.depthTexture=null;N.map.dispose()}if(this.type===Ds){if(D.isPointLight){Te("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}N.map=new ii(r.x,r.y,{format:wn,type:si,minFilter:qt,magFilter:qt,generateMipmaps:!1}),N.map.texture.name=D.name+".shadowMap",N.map.depthTexture=new In(r.x,r.y,gi),N.map.depthTexture.name=D.name+".shadowMapDepth",N.map.depthTexture.format=vn,N.map.depthTexture.compareFunction=null,N.map.depthTexture.minFilter=Xt,N.map.depthTexture.magFilter=Xt}else{if(D.isPointLight)N.map=new ys(r.x),N.map.depthTexture=new sa(r.x,Pi);else N.map=new ii(r.x,r.y),N.map.depthTexture=new In(r.x,r.y,Pi);if(N.map.depthTexture.name=D.name+".shadowMap",N.map.depthTexture.format=vn,this.type===yo)N.map.depthTexture.compareFunction=G?kc:Gc,N.map.depthTexture.minFilter=qt,N.map.depthTexture.magFilter=qt;else N.map.depthTexture.compareFunction=null,N.map.depthTexture.minFilter=Xt,N.map.depthTexture.magFilter=Xt}N.camera.updateProjectionMatrix()}if(N.map.isWebGLCubeRenderTarget!==!0&&(N.map.width!==r.x||N.map.height!==r.y))N.map.setSize(r.x,r.y);let z=N.map.isWebGLCubeRenderTarget?6:N.getViewportCount();if(D.isPointLight!==!0)N.updateMatrices(D,S);let Y=(N.camera.layers.mask&4294967294)!==0?N.camera.layers:S.layers;for(let le=0;le<z;le++){let k=N.getCamera(le);if(D.isPointLight){let{camera:ee,matrix:be}=N,_e=D.distance||ee.far;if(_e!==ee.far)ee.far=_e,ee.updateProjectionMatrix();rc.setFromMatrixPosition(D.matrixWorld),ee.position.copy(rc),Eu.copy(ee.position),Eu.add(cS[le]),ee.up.copy(hS[le]),ee.lookAt(Eu),ee.updateMatrixWorld(),be.makeTranslation(-rc.x,-rc.y,-rc.z),jx.multiplyMatrices(ee.projectionMatrix,ee.matrixWorldInverse),N._frustum.setFromProjectionMatrix(jx,ee.coordinateSystem,ee.reversedDepth)}if(N.map.isWebGLCubeRenderTarget)e.setRenderTarget(N.map,le),e.clear();else{if(le===0)e.setRenderTarget(N.map),e.clear();let ee=N.getViewport(le);o.set(s.x*ee.x,s.y*ee.y,s.x*ee.z,s.y*ee.w),U.viewport(o)}n=N.getFrustum(le),b(_,S,k,D,Y,this.type)}if(N.isPointLightShadow!==!0&&this.type===Ds)y(N,S);N.needsUpdate=!1}p=this.type,d.needsUpdate=!1,e.setRenderTarget(w,L,I)};function y(T,_){let S=t.update(x);if(f.defines.VSM_SAMPLES!==T.blurSamples)f.defines.VSM_SAMPLES=T.blurSamples,m.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0;if(T.mapPass===null)T.mapPass=new ii(r.x,r.y,{format:wn,type:si});else if(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)T.mapPass.setSize(T.map.width,T.map.height);f.uniforms.shadow_pass.value=T.map.depthTexture,f.uniforms.resolution.value.set(T.map.width,T.map.height),f.uniforms.radius.value=T.radius,e.setRenderTarget(T.mapPass),e.clear(),e.renderBufferDirect(_,null,S,f,x,null),m.uniforms.shadow_pass.value=T.mapPass.texture,m.uniforms.resolution.value.set(T.map.width,T.map.height),m.uniforms.radius.value=T.radius,e.setRenderTarget(T.map),e.clear(),e.renderBufferDirect(_,null,S,m,x,null)}function M(T,_,S,w){let L=null,I=S.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(I!==void 0)L=I;else if(L=S.isPointLight===!0?l:a,e.localClippingEnabled&&_.clipShadows===!0&&Array.isArray(_.clippingPlanes)&&_.clippingPlanes.length!==0||_.displacementMap&&_.displacementScale!==0||_.alphaMap&&_.alphaTest>0||_.map&&_.alphaTest>0||_.alphaToCoverage===!0){let U=L.uuid,K=_.uuid,P=c[U];if(P===void 0)P={},c[U]=P;let V=P[K];if(V===void 0)V=L.clone(),P[K]=V,_.addEventListener("dispose",v);L=V}if(L.visible=_.visible,L.wireframe=_.wireframe,w===Ds)L.side=_.shadowSide!==null?_.shadowSide:_.side;else L.side=_.shadowSide!==null?_.shadowSide:u[_.side];if(L.alphaMap=_.alphaMap,L.alphaTest=_.alphaToCoverage===!0?0.5:_.alphaTest,L.map=_.map,L.clipShadows=_.clipShadows,L.clippingPlanes=_.clippingPlanes,L.clipIntersection=_.clipIntersection,L.displacementMap=_.displacementMap,L.displacementScale=_.displacementScale,L.displacementBias=_.displacementBias,L.wireframeLinewidth=_.wireframeLinewidth,L.linewidth=_.linewidth,S.isPointLight===!0&&L.isMeshDistanceMaterial===!0){let U=e.properties.get(L);U.light=S}return L}function b(T,_,S,w,L,I){if(T.visible===!1)return;if(T.layers.test(L)&&(T.isMesh||T.isLine||T.isPoints)){if((T.castShadow||T.receiveShadow&&I===Ds)&&(!T.frustumCulled||T.intersectsFrustum(n))){T.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,T.matrixWorld);let P=t.update(T),V=T.material;if(Array.isArray(V)){let D=P.groups;for(let N=0,Q=D.length;N<Q;N++){let G=D[N],z=V[G.materialIndex];if(z&&z.visible){let Y=M(T,z,w,I);T.onBeforeShadow(e,T,_,S,P,Y,G),e.renderBufferDirect(S,null,P,Y,T,G),T.onAfterShadow(e,T,_,S,P,Y,G)}}}else if(V.visible){let D=M(T,V,w,I);T.onBeforeShadow(e,T,_,S,P,D,null),e.renderBufferDirect(S,null,P,D,T,null),T.onAfterShadow(e,T,_,S,P,D,null)}}}let K=T.children;for(let P=0,V=K.length;P<V;P++)b(K[P],_,S,w,L,I)}function v(T){T.target.removeEventListener("dispose",v);for(let S in c){let w=c[S],L=T.target.uuid;if(L in w)w[L].dispose(),delete w[L]}}}function Qx(e,t){function i(){let F=!1,se=new Et,re=null,Se=new Et(0,0,0,0);return{setMask:function(we){if(re!==we&&!F)e.colorMask(we,we,we,we),re=we},setLocked:function(we){F=we},setClear:function(we,Ae,tt,Je,Oe){if(Oe===!0)we*=Je,Ae*=Je,tt*=Je;if(se.set(we,Ae,tt,Je),Se.equals(se)===!1)e.clearColor(we,Ae,tt,Je),Se.copy(se)},reset:function(){F=!1,re=null,Se.set(-1,0,0,0)}}}function n(){let F=!1,se=!1,re=null,Se=null,we=null;return{setReversed:function(Ae){if(se!==Ae){let tt=t.get("EXT_clip_control");if(Ae)tt.clipControlEXT(tt.LOWER_LEFT_EXT,tt.ZERO_TO_ONE_EXT);else tt.clipControlEXT(tt.LOWER_LEFT_EXT,tt.NEGATIVE_ONE_TO_ONE_EXT);se=Ae;let Je=we;we=null,this.setClear(Je)}},getReversed:function(){return se},setTest:function(Ae){if(Ae)Ie(e.DEPTH_TEST);else ft(e.DEPTH_TEST)},setMask:function(Ae){if(re!==Ae&&!F)e.depthMask(Ae),re=Ae},setFunc:function(Ae){if(se)Ae=op[Ae];if(Se!==Ae){switch(Ae){case Ca:e.depthFunc(e.NEVER);break;case Ia:e.depthFunc(e.ALWAYS);break;case Pa:e.depthFunc(e.LESS);break;case ns:e.depthFunc(e.LEQUAL);break;case La:e.depthFunc(e.EQUAL);break;case Da:e.depthFunc(e.GEQUAL);break;case Na:e.depthFunc(e.GREATER);break;case Fa:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}Se=Ae}},setLocked:function(Ae){F=Ae},setClear:function(Ae){if(we!==Ae){if(we=Ae,se)Ae=1-Ae;e.clearDepth(Ae)}},reset:function(){F=!1,re=null,Se=null,we=null,se=!1}}}function r(){let F=!1,se=null,re=null,Se=null,we=null,Ae=null,tt=null,Je=null,Oe=null;return{setTest:function(et){if(!F)if(et)Ie(e.STENCIL_TEST);else ft(e.STENCIL_TEST)},setMask:function(et){if(se!==et&&!F)e.stencilMask(et),se=et},setFunc:function(et,ut,Pe){if(re!==et||Se!==ut||we!==Pe)e.stencilFunc(et,ut,Pe),re=et,Se=ut,we=Pe},setOp:function(et,ut,Pe){if(Ae!==et||tt!==ut||Je!==Pe)e.stencilOp(et,ut,Pe),Ae=et,tt=ut,Je=Pe},setLocked:function(et){F=et},setClear:function(et){if(Oe!==et)e.clearStencil(et),Oe=et},reset:function(){F=!1,se=null,re=null,Se=null,we=null,Ae=null,tt=null,Je=null,Oe=null}}}let s=new i,o=new n,a=new r,l={},c=new WeakMap,h={},u={},f={},m=new WeakMap,g=[],x=null,d=!1,p=null,y=null,M=null,b=null,v=null,T=null,_=null,S=new ge(0,0,0),w=0,L=!1,I=null,U=null,K=null,P=null,V=null,D=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),N=!1,Q=0,G=e.getParameter(e.VERSION);if(G.indexOf("WebGL")!==-1)Q=parseFloat(/^WebGL (\d)/.exec(G)[1]),N=Q>=1;else if(G.indexOf("OpenGL ES")!==-1)Q=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),N=Q>=2;let z=null,Y={},le=e.getParameter(e.SCISSOR_BOX),k=e.getParameter(e.VIEWPORT),ee=new Et().fromArray(le),be=new Et().fromArray(k);function _e(F,se,re,Se){let we=new Uint8Array(4),Ae=e.createTexture();e.bindTexture(F,Ae),e.texParameteri(F,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(F,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let tt=0;tt<re;tt++)if(F===e.TEXTURE_3D||F===e.TEXTURE_2D_ARRAY)e.texImage3D(se,0,e.RGBA,1,1,Se,0,e.RGBA,e.UNSIGNED_BYTE,we);else e.texImage2D(se+tt,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,we);return Ae}let He={};He[e.TEXTURE_2D]=_e(e.TEXTURE_2D,e.TEXTURE_2D,1),He[e.TEXTURE_CUBE_MAP]=_e(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),He[e.TEXTURE_2D_ARRAY]=_e(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),He[e.TEXTURE_3D]=_e(e.TEXTURE_3D,e.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),Ie(e.DEPTH_TEST),o.setFunc(ns),Fe(!1),nt(xf),Ie(e.CULL_FACE),ye(Gn);function Ie(F){if(h[F]!==!0)e.enable(F),h[F]=!0}function ft(F){if(h[F]!==!1)e.disable(F),h[F]=!1}function ze(F,se){if(f[F]!==se){if(e.bindFramebuffer(F,se),f[F]=se,F===e.DRAW_FRAMEBUFFER)f[e.FRAMEBUFFER]=se;if(F===e.FRAMEBUFFER)f[e.DRAW_FRAMEBUFFER]=se;return!0}return!1}function ke(F,se){let re=g,Se=!1;if(F){if(re=m.get(se),re===void 0)re=[],m.set(se,re);let we=F.textures;if(re.length!==we.length||re[0]!==e.COLOR_ATTACHMENT0){for(let Ae=0,tt=we.length;Ae<tt;Ae++)re[Ae]=e.COLOR_ATTACHMENT0+Ae;re.length=we.length,Se=!0}}else if(re[0]!==e.BACK)re[0]=e.BACK,Se=!0;if(Se)e.drawBuffers(re)}function pt(F){if(x!==F)return e.useProgram(F),x=F,!0;return!1}let ue={[is]:e.FUNC_ADD,[Ad]:e.FUNC_SUBTRACT,[Rd]:e.FUNC_REVERSE_SUBTRACT};ue[Cd]=e.MIN,ue[Id]=e.MAX;let xe={[Pd]:e.ZERO,[Ld]:e.ONE,[Dd]:e.SRC_COLOR,[Ec]:e.SRC_ALPHA,[Hd]:e.SRC_ALPHA_SATURATE,[Bd]:e.DST_COLOR,[Fd]:e.DST_ALPHA,[Nd]:e.ONE_MINUS_SRC_COLOR,[wc]:e.ONE_MINUS_SRC_ALPHA,[Od]:e.ONE_MINUS_DST_COLOR,[Ud]:e.ONE_MINUS_DST_ALPHA,[zd]:e.CONSTANT_COLOR,[Gd]:e.ONE_MINUS_CONSTANT_COLOR,[kd]:e.CONSTANT_ALPHA,[Vd]:e.ONE_MINUS_CONSTANT_ALPHA};function ye(F,se,re,Se,we,Ae,tt,Je,Oe,et){if(F===Gn){if(d===!0)ft(e.BLEND),d=!1;return}if(d===!1)Ie(e.BLEND),d=!0;if(F!==wd){if(F!==p||et!==L){if(y!==is||v!==is)e.blendEquation(e.FUNC_ADD),y=is,v=is;if(et)switch(F){case ts:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case Ra:e.blendFunc(e.ONE,e.ONE);break;case _f:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case yf:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:Ye("WebGLState: Invalid blending: ",F);break}else switch(F){case ts:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case Ra:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case _f:Ye("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case yf:Ye("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ye("WebGLState: Invalid blending: ",F);break}M=null,b=null,T=null,_=null,S.set(0,0,0),w=0,p=F,L=et}return}if(we=we||se,Ae=Ae||re,tt=tt||Se,se!==y||we!==v)e.blendEquationSeparate(ue[se],ue[we]),y=se,v=we;if(re!==M||Se!==b||Ae!==T||tt!==_)e.blendFuncSeparate(xe[re],xe[Se],xe[Ae],xe[tt]),M=re,b=Se,T=Ae,_=tt;if(Je.equals(S)===!1||Oe!==w)e.blendColor(Je.r,Je.g,Je.b,Oe),S.copy(Je),w=Oe;p=F,L=!1}function Be(F,se){F.side===Ot?ft(e.CULL_FACE):Ie(e.CULL_FACE);let re=F.side===jt;if(se)re=!re;Fe(re),F.blending===ts&&F.transparent===!1?ye(Gn):ye(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),o.setFunc(F.depthFunc),o.setTest(F.depthTest),o.setMask(F.depthWrite),s.setMask(F.colorWrite);let Se=F.stencilWrite;if(a.setTest(Se),Se)a.setMask(F.stencilWriteMask),a.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),a.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass);at(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?Ie(e.SAMPLE_ALPHA_TO_COVERAGE):ft(e.SAMPLE_ALPHA_TO_COVERAGE)}function Fe(F){if(I!==F){if(F)e.frontFace(e.CW);else e.frontFace(e.CCW);I=F}}function nt(F){if(F!==bd){if(Ie(e.CULL_FACE),F!==U)if(F===xf)e.cullFace(e.BACK);else if(F===Td)e.cullFace(e.FRONT);else e.cullFace(e.FRONT_AND_BACK)}else ft(e.CULL_FACE);U=F}function We(F){if(F!==K){if(N)e.lineWidth(F);K=F}}function at(F,se,re){if(F){if(Ie(e.POLYGON_OFFSET_FILL),P!==se||V!==re){if(P=se,V=re,o.getReversed())se=-se,re=-re;e.polygonOffset(se,re)}}else ft(e.POLYGON_OFFSET_FILL)}function Mt(F){if(F)Ie(e.SCISSOR_TEST);else ft(e.SCISSOR_TEST)}function Ct(F){if(F===void 0)F=e.TEXTURE0+D-1;if(z!==F)e.activeTexture(F),z=F}function H(F,se,re){if(re===void 0)if(z===null)re=e.TEXTURE0+D-1;else re=z;let Se=Y[re];if(Se===void 0)Se={type:void 0,texture:void 0},Y[re]=Se;if(Se.type!==F||Se.texture!==se){if(z!==re)e.activeTexture(re),z=re;e.bindTexture(F,se||He[F]),Se.type=F,Se.texture=se}}function yi(){let F=Y[z];if(F!==void 0&&F.type!==void 0)e.bindTexture(F.type,null),F.type=void 0,F.texture=void 0}function q(){try{e.compressedTexImage2D(...arguments)}catch(F){Ye("WebGLState:",F)}}function pe(){try{e.compressedTexImage3D(...arguments)}catch(F){Ye("WebGLState:",F)}}function oe(){try{e.texSubImage2D(...arguments)}catch(F){Ye("WebGLState:",F)}}function Ce(){try{e.texSubImage3D(...arguments)}catch(F){Ye("WebGLState:",F)}}function de(){try{e.compressedTexSubImage2D(...arguments)}catch(F){Ye("WebGLState:",F)}}function Me(){try{e.compressedTexSubImage3D(...arguments)}catch(F){Ye("WebGLState:",F)}}function vt(){try{e.texStorage2D(...arguments)}catch(F){Ye("WebGLState:",F)}}function C(){try{e.texStorage3D(...arguments)}catch(F){Ye("WebGLState:",F)}}function E(){try{e.texImage2D(...arguments)}catch(F){Ye("WebGLState:",F)}}function X(){try{e.texImage3D(...arguments)}catch(F){Ye("WebGLState:",F)}}function ae(F){if(u[F]!==void 0)return u[F];else return e.getParameter(F)}function he(F,se){if(u[F]!==se)e.pixelStorei(F,se),u[F]=se}function ve(F){if(ee.equals(F)===!1)e.scissor(F.x,F.y,F.z,F.w),ee.copy(F)}function Ee(F){if(be.equals(F)===!1)e.viewport(F.x,F.y,F.z,F.w),be.copy(F)}function te(F,se){let re=c.get(se);if(re===void 0)re=new WeakMap,c.set(se,re);let Se=re.get(F);if(Se===void 0)Se=e.getUniformBlockIndex(se,F.name),e.uniformBlockBinding(se,Se,Se),re.set(F,Se)}function ce(F,se,re){let we=c.get(se).get(F);if(l[we]!==re)e.bindBufferBase(e.UNIFORM_BUFFER,we,re),l[we]=re}function me(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),h={},u={},z=null,Y={},f={},l={},m=new WeakMap,g=[],x=null,d=!1,p=null,y=null,M=null,b=null,v=null,T=null,_=null,S=new ge(0,0,0),w=0,L=!1,I=null,U=null,K=null,P=null,V=null,ee.set(0,0,e.canvas.width,e.canvas.height),be.set(0,0,e.canvas.width,e.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:Ie,disable:ft,bindFramebuffer:ze,drawBuffers:ke,useProgram:pt,setBlending:ye,setMaterial:Be,setFlipSided:Fe,setCullFace:nt,setLineWidth:We,setPolygonOffset:at,setScissorTest:Mt,activeTexture:Ct,bindTexture:H,unbindTexture:yi,compressedTexImage2D:q,compressedTexImage3D:pe,texImage2D:E,texImage3D:X,pixelStorei:he,getParameter:ae,updateUBOMapping:te,uniformBlockBinding:ce,texStorage2D:vt,texStorage3D:C,texSubImage2D:oe,texSubImage3D:Ce,compressedTexSubImage2D:de,compressedTexSubImage3D:Me,scissor:ve,viewport:Ee,reset:me}}function e_(e,t,i,n,r,s,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Z,h=new WeakMap,u=new Set,f,m=new WeakMap,g=new Set,x=new FinalizationRegistry((C)=>g.delete(C)),d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(C){}function p(C,E){return d?new OffscreenCanvas(C,E):as("canvas")}function y(C,E,X){let ae=1,he=vt(C);if(he.width>X||he.height>X)ae=X/Math.max(he.width,he.height);if(ae<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let ve=Math.floor(ae*he.width),Ee=Math.floor(ae*he.height);if(f===void 0)f=p(ve,Ee);let te=E?p(ve,Ee):f;return te.width=ve,te.height=Ee,te.getContext("2d").drawImage(C,0,0,ve,Ee),Te("WebGLRenderer: Texture has been resized from ("+he.width+"x"+he.height+") to ("+ve+"x"+Ee+")."),te}else{if("data"in C)Te("WebGLRenderer: Image in DataTexture is too big ("+he.width+"x"+he.height+").");return C}return C}function M(C){return C.generateMipmaps}function b(C){e.generateMipmap(C)}function v(C){if(C.isWebGLCubeRenderTarget)return e.TEXTURE_CUBE_MAP;if(C.isWebGL3DRenderTarget)return e.TEXTURE_3D;if(C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture)return e.TEXTURE_2D_ARRAY;return e.TEXTURE_2D}function T(C,E,X,ae,he,ve=!1){if(C!==null){if(e[C]!==void 0)return e[C];Te("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let Ee;if(ae){if(Ee=t.get("EXT_texture_norm16"),!Ee)Te("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension")}let te=E;if(E===e.RED){if(X===e.FLOAT)te=e.R32F;if(X===e.HALF_FLOAT)te=e.R16F;if(X===e.UNSIGNED_BYTE)te=e.R8;if(X===e.UNSIGNED_SHORT&&Ee)te=Ee.R16_EXT;if(X===e.SHORT&&Ee)te=Ee.R16_SNORM_EXT}if(E===e.RED_INTEGER){if(X===e.UNSIGNED_BYTE)te=e.R8UI;if(X===e.UNSIGNED_SHORT)te=e.R16UI;if(X===e.UNSIGNED_INT)te=e.R32UI;if(X===e.BYTE)te=e.R8I;if(X===e.SHORT)te=e.R16I;if(X===e.INT)te=e.R32I}if(E===e.RG){if(X===e.FLOAT)te=e.RG32F;if(X===e.HALF_FLOAT)te=e.RG16F;if(X===e.UNSIGNED_BYTE)te=e.RG8;if(X===e.UNSIGNED_SHORT&&Ee)te=Ee.RG16_EXT;if(X===e.SHORT&&Ee)te=Ee.RG16_SNORM_EXT}if(E===e.RG_INTEGER){if(X===e.UNSIGNED_BYTE)te=e.RG8UI;if(X===e.UNSIGNED_SHORT)te=e.RG16UI;if(X===e.UNSIGNED_INT)te=e.RG32UI;if(X===e.BYTE)te=e.RG8I;if(X===e.SHORT)te=e.RG16I;if(X===e.INT)te=e.RG32I}if(E===e.RGB_INTEGER){if(X===e.UNSIGNED_BYTE)te=e.RGB8UI;if(X===e.UNSIGNED_SHORT)te=e.RGB16UI;if(X===e.UNSIGNED_INT)te=e.RGB32UI;if(X===e.BYTE)te=e.RGB8I;if(X===e.SHORT)te=e.RGB16I;if(X===e.INT)te=e.RGB32I}if(E===e.RGBA_INTEGER){if(X===e.UNSIGNED_BYTE)te=e.RGBA8UI;if(X===e.UNSIGNED_SHORT)te=e.RGBA16UI;if(X===e.UNSIGNED_INT)te=e.RGBA32UI;if(X===e.BYTE)te=e.RGBA8I;if(X===e.SHORT)te=e.RGBA16I;if(X===e.INT)te=e.RGBA32I}if(E===e.RGB){if(X===e.UNSIGNED_SHORT&&Ee)te=Ee.RGB16_EXT;if(X===e.SHORT&&Ee)te=Ee.RGB16_SNORM_EXT;if(X===e.UNSIGNED_INT_5_9_9_9_REV)te=e.RGB9_E5;if(X===e.UNSIGNED_INT_10F_11F_11F_REV)te=e.R11F_G11F_B10F}if(E===e.RGBA){let ce=ve?zs:ht.getTransfer(he);if(X===e.FLOAT)te=e.RGBA32F;if(X===e.HALF_FLOAT)te=e.RGBA16F;if(X===e.UNSIGNED_BYTE)te=ce===Tt?e.SRGB8_ALPHA8:e.RGBA8;if(X===e.UNSIGNED_SHORT&&Ee)te=Ee.RGBA16_EXT;if(X===e.SHORT&&Ee)te=Ee.RGBA16_SNORM_EXT;if(X===e.UNSIGNED_SHORT_4_4_4_4)te=e.RGBA4;if(X===e.UNSIGNED_SHORT_5_5_5_1)te=e.RGB5_A1}if(te===e.R16F||te===e.R32F||te===e.RG16F||te===e.RG32F||te===e.RGBA16F||te===e.RGBA32F)t.get("EXT_color_buffer_float");return te}function _(C,E){let X;if(C){if(E===null||E===Pi||E===nr)X=e.DEPTH24_STENCIL8;else if(E===gi)X=e.DEPTH32F_STENCIL8;else if(E===Dr)X=e.DEPTH24_STENCIL8,Te("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")}else if(E===null||E===Pi||E===nr)X=e.DEPTH_COMPONENT24;else if(E===gi)X=e.DEPTH_COMPONENT32F;else if(E===Dr)X=e.DEPTH_COMPONENT16;return X}function S(C,E){if(M(C)===!0||C.isFramebufferTexture&&C.minFilter!==Xt&&C.minFilter!==qt)return Math.log2(Math.max(E.width,E.height))+1;else if(C.mipmaps.length>0)return C.mipmaps.length;else if(C.isCompressedTexture&&Array.isArray(C.image))return E.mipmaps.length;else return 1}function w(C){let E=new WeakRef(C);n.get(C).__ref=E,g.add(E),x.register(C,E,E)}function L(C){let E=n.get(C).__ref;if(E===void 0)return;g.delete(E),x.unregister(E)}function I(C){K(C.target)}function U(C){P(C.target)}function K(C){if(C.removeEventListener("dispose",I),L(C),D(C),C.isVideoTexture)h.delete(C);if(C.isHTMLTexture)u.delete(C)}function P(C){C.removeEventListener("dispose",U),L(C),Q(C)}function V(){for(let C of g){let E=C.deref();if(E===void 0)continue;if(E.isRenderTarget===!0)P(E);else K(E)}g.clear(),u.clear()}function D(C){let E=n.get(C);if(E.__webglInit===void 0)return;let X=C.source,ae=m.get(X);if(ae){let he=ae[E.__cacheKey];if(he.usedTimes--,he.usedTimes===0)N(C);if(Object.keys(ae).length===0)m.delete(X)}n.remove(C)}function N(C){let E=n.get(C);e.deleteTexture(E.__webglTexture);let X=C.source,ae=m.get(X);delete ae[E.__cacheKey],o.memory.textures--}function Q(C){let E=n.get(C);if(E.__depthDisposeCallback)E.__depthDisposeCallback();let X=C.depthTexture;if(X&&X.renderTarget===C)K(X);if(C.isWebGLCubeRenderTarget)for(let he=0;he<6;he++){if(Array.isArray(E.__webglFramebuffer[he]))for(let ve=0;ve<E.__webglFramebuffer[he].length;ve++)e.deleteFramebuffer(E.__webglFramebuffer[he][ve]);else e.deleteFramebuffer(E.__webglFramebuffer[he]);if(E.__webglDepthbuffer)e.deleteRenderbuffer(E.__webglDepthbuffer[he])}else{if(Array.isArray(E.__webglFramebuffer))for(let he=0;he<E.__webglFramebuffer.length;he++)e.deleteFramebuffer(E.__webglFramebuffer[he]);else e.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer)e.deleteRenderbuffer(E.__webglDepthbuffer);if(E.__webglMultisampledFramebuffer)e.deleteFramebuffer(E.__webglMultisampledFramebuffer);if(E.__webglColorRenderbuffer){for(let he=0;he<E.__webglColorRenderbuffer.length;he++)if(E.__webglColorRenderbuffer[he])e.deleteRenderbuffer(E.__webglColorRenderbuffer[he])}if(E.__webglDepthRenderbuffer)e.deleteRenderbuffer(E.__webglDepthRenderbuffer)}let ae=C.textures;for(let he=0,ve=ae.length;he<ve;he++){let Ee=n.get(ae[he]);if(Ee.__webglTexture)e.deleteTexture(Ee.__webglTexture),o.memory.textures--;n.remove(ae[he])}n.remove(C)}let G=0;function z(){G=0}function Y(){return G}function le(C){G=C}function k(){let C=G;if(C>=r.maxTextures)Te("WebGLTextures: Trying to use "+(C+1)+" texture units while this GPU supports only "+r.maxTextures);return G+=1,C}function ee(C){let E=[];return E.push(C.wrapS),E.push(C.wrapT),E.push(C.wrapR||0),E.push(C.magFilter),E.push(C.minFilter),E.push(C.anisotropy),E.push(C.internalFormat),E.push(C.format),E.push(C.type),E.push(C.generateMipmaps),E.push(C.mipmapsAutoUpdate),E.push(C.premultiplyAlpha),E.push(C.flipY),E.push(C.unpackAlignment),E.push(C.colorSpace),E.join()}function be(C,E){let X=n.get(C);if(C.isVideoTexture)de(C);if(C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&X.__version!==C.version){let ae=C.image;if(ae===null)Te("WebGLRenderer: Texture marked for update but no image data found.");else if(ae.complete===!1)Te("WebGLRenderer: Texture marked for update but image is incomplete");else{Be(X,C,E);return}}else if(C.isExternalTexture)X.__webglTexture=C.sourceTexture?C.sourceTexture:null;i.bindTexture(e.TEXTURE_2D,X.__webglTexture,e.TEXTURE0+E)}function _e(C,E){let X=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&X.__version!==C.version){Be(X,C,E);return}else if(C.isExternalTexture)X.__webglTexture=C.sourceTexture?C.sourceTexture:null;i.bindTexture(e.TEXTURE_2D_ARRAY,X.__webglTexture,e.TEXTURE0+E)}function He(C,E){let X=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&X.__version!==C.version){Be(X,C,E);return}i.bindTexture(e.TEXTURE_3D,X.__webglTexture,e.TEXTURE0+E)}function Ie(C,E){let X=n.get(C);if(C.version>0&&X.__version!==C.version){Fe(X,C,E);return}i.bindTexture(e.TEXTURE_CUBE_MAP,X.__webglTexture,e.TEXTURE0+E)}let ft={[pn]:e.REPEAT,[Ii]:e.CLAMP_TO_EDGE,[ss]:e.MIRRORED_REPEAT},ze={[Xt]:e.NEAREST,[Oa]:e.NEAREST_MIPMAP_NEAREST,[os]:e.NEAREST_MIPMAP_LINEAR,[qt]:e.LINEAR,[Fs]:e.LINEAR_MIPMAP_NEAREST,[Hi]:e.LINEAR_MIPMAP_LINEAR},ke={[jd]:e.NEVER,[Vc]:e.ALWAYS,[$d]:e.LESS,[Gc]:e.LEQUAL,[Qd]:e.EQUAL,[kc]:e.GEQUAL,[ep]:e.GREATER,[tp]:e.NOTEQUAL};function pt(C,E){if(E.type===gi&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===qt||E.magFilter===Fs||E.magFilter===os||E.magFilter===Hi||E.minFilter===qt||E.minFilter===Fs||E.minFilter===os||E.minFilter===Hi))Te("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.");if(e.texParameteri(C,e.TEXTURE_WRAP_S,ft[E.wrapS]),e.texParameteri(C,e.TEXTURE_WRAP_T,ft[E.wrapT]),C===e.TEXTURE_3D||C===e.TEXTURE_2D_ARRAY)e.texParameteri(C,e.TEXTURE_WRAP_R,ft[E.wrapR]);if(e.texParameteri(C,e.TEXTURE_MAG_FILTER,ze[E.magFilter]),e.texParameteri(C,e.TEXTURE_MIN_FILTER,ze[E.minFilter]),E.compareFunction)e.texParameteri(C,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(C,e.TEXTURE_COMPARE_FUNC,ke[E.compareFunction]);if(t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Xt)return;if(E.minFilter!==os&&E.minFilter!==Hi)return;if(E.type===gi&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){let X=t.get("EXT_texture_filter_anisotropic");e.texParameterf(C,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,r.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function ue(C,E){let X=!1;if(C.__webglInit===void 0)C.__webglInit=!0,E.addEventListener("dispose",I),w(E);let ae=E.source,he=m.get(ae);if(he===void 0)he={},m.set(ae,he);let ve=ee(E);if(ve!==C.__cacheKey){if(he[ve]===void 0)he[ve]={texture:e.createTexture(),usedTimes:0},o.memory.textures++,X=!0;he[ve].usedTimes++;let Ee=he[C.__cacheKey];if(Ee!==void 0){if(he[C.__cacheKey].usedTimes--,Ee.usedTimes===0)N(E)}C.__cacheKey=ve,C.__webglTexture=he[ve].texture}return X}function xe(C,E,X){return Math.floor(Math.floor(C/X)/E)}function ye(C,E,X,ae){let ve=C.updateRanges;if(ve.length===0)i.texSubImage2D(e.TEXTURE_2D,0,0,0,E.width,E.height,X,ae,E.data);else{ve.sort((F,se)=>F.start-se.start);let Ee=0;for(let F=1;F<ve.length;F++){let se=ve[Ee],re=ve[F],Se=se.start+se.count,we=xe(re.start,E.width,4),Ae=xe(se.start,E.width,4);if(re.start<=Se+1&&we===Ae&&xe(re.start+re.count-1,E.width,4)===we)se.count=Math.max(se.count,re.start+re.count-se.start);else++Ee,ve[Ee]=re}ve.length=Ee+1;let te=i.getParameter(e.UNPACK_ROW_LENGTH),ce=i.getParameter(e.UNPACK_SKIP_PIXELS),me=i.getParameter(e.UNPACK_SKIP_ROWS);i.pixelStorei(e.UNPACK_ROW_LENGTH,E.width);for(let F=0,se=ve.length;F<se;F++){let re=ve[F],Se=Math.floor(re.start/4),we=Math.ceil(re.count/4),Ae=Se%E.width,tt=Math.floor(Se/E.width),Je=we,Oe=1;i.pixelStorei(e.UNPACK_SKIP_PIXELS,Ae),i.pixelStorei(e.UNPACK_SKIP_ROWS,tt),i.texSubImage2D(e.TEXTURE_2D,0,Ae,tt,Je,1,X,ae,E.data)}C.clearUpdateRanges(),i.pixelStorei(e.UNPACK_ROW_LENGTH,te),i.pixelStorei(e.UNPACK_SKIP_PIXELS,ce),i.pixelStorei(e.UNPACK_SKIP_ROWS,me)}}function Be(C,E,X){let ae=e.TEXTURE_2D;if(E.isDataArrayTexture||E.isCompressedArrayTexture)ae=e.TEXTURE_2D_ARRAY;if(E.isData3DTexture)ae=e.TEXTURE_3D;let he=ue(C,E),ve=E.source;i.bindTexture(ae,C.__webglTexture,e.TEXTURE0+X);let Ee=n.get(ve);if(ve.version!==Ee.__version||he===!0){if(i.activeTexture(e.TEXTURE0+X),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){let Oe=ht.getPrimaries(ht.workingColorSpace),et=E.colorSpace===Vn?null:ht.getPrimaries(E.colorSpace),ut=E.colorSpace===Vn||Oe===et?e.NONE:e.BROWSER_DEFAULT_WEBGL;i.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,ut)}i.pixelStorei(e.UNPACK_ALIGNMENT,E.unpackAlignment);let ce=y(E.image,!1,r.maxTextureSize);ce=Me(E,ce);let me=s.convert(E.format,E.colorSpace),F=s.convert(E.type),se=T(E.internalFormat,me,F,E.normalized,E.colorSpace,E.isVideoTexture);pt(ae,E);let re,Se=E.mipmaps,we=E.isVideoTexture!==!0,Ae=Ee.__version===void 0||he===!0,tt=ve.dataReady,Je=S(E,ce);if(E.isDepthTexture){if(se=_(E.format===En,E.type),Ae)if(we)i.texStorage2D(e.TEXTURE_2D,1,se,ce.width,ce.height);else i.texImage2D(e.TEXTURE_2D,0,se,ce.width,ce.height,0,me,F,null)}else if(E.isDataTexture)if(Se.length>0){if(we&&Ae)i.texStorage2D(e.TEXTURE_2D,Je,se,Se[0].width,Se[0].height);for(let Oe=0,et=Se.length;Oe<et;Oe++)if(re=Se[Oe],we){if(tt)i.texSubImage2D(e.TEXTURE_2D,Oe,0,0,re.width,re.height,me,F,re.data)}else i.texImage2D(e.TEXTURE_2D,Oe,se,re.width,re.height,0,me,F,re.data);E.generateMipmaps=!1}else if(we){if(Ae)i.texStorage2D(e.TEXTURE_2D,Je,se,ce.width,ce.height);if(tt)ye(E,ce,me,F)}else i.texImage2D(e.TEXTURE_2D,0,se,ce.width,ce.height,0,me,F,ce.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){if(we&&Ae)i.texStorage3D(e.TEXTURE_2D_ARRAY,Je,se,Se[0].width,Se[0].height,ce.depth);for(let Oe=0,et=Se.length;Oe<et;Oe++)if(re=Se[Oe],E.format!==Li)if(me!==null)if(we){if(tt)if(E.layerUpdates.size>0){let ut=Mu(re.width,re.height,E.format,E.type);for(let Pe of E.layerUpdates){let Ft=re.data.subarray(Pe*ut/re.data.BYTES_PER_ELEMENT,(Pe+1)*ut/re.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,Oe,0,0,Pe,re.width,re.height,1,me,Ft)}}else i.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,Oe,0,0,0,re.width,re.height,ce.depth,me,re.data)}else i.compressedTexImage3D(e.TEXTURE_2D_ARRAY,Oe,se,re.width,re.height,ce.depth,0,re.data,0,0);else Te("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(we){if(tt)i.texSubImage3D(e.TEXTURE_2D_ARRAY,Oe,0,0,0,re.width,re.height,ce.depth,me,F,re.data)}else i.texImage3D(e.TEXTURE_2D_ARRAY,Oe,se,re.width,re.height,ce.depth,0,me,F,re.data);if(E.layerUpdates.size>0)E.clearLayerUpdates()}else{if(we&&Ae)i.texStorage2D(e.TEXTURE_2D,Je,se,Se[0].width,Se[0].height);for(let Oe=0,et=Se.length;Oe<et;Oe++)if(re=Se[Oe],E.format!==Li)if(me!==null)if(we){if(tt)i.compressedTexSubImage2D(e.TEXTURE_2D,Oe,0,0,re.width,re.height,me,re.data)}else i.compressedTexImage2D(e.TEXTURE_2D,Oe,se,re.width,re.height,0,re.data);else Te("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(we){if(tt)i.texSubImage2D(e.TEXTURE_2D,Oe,0,0,re.width,re.height,me,F,re.data)}else i.texImage2D(e.TEXTURE_2D,Oe,se,re.width,re.height,0,me,F,re.data)}else if(E.isDataArrayTexture)if(we){if(Ae)i.texStorage3D(e.TEXTURE_2D_ARRAY,Je,se,ce.width,ce.height,ce.depth);if(tt)if(E.layerUpdates.size>0){let Oe=Mu(ce.width,ce.height,E.format,E.type);for(let et of E.layerUpdates){let ut=ce.data.subarray(et*Oe/ce.data.BYTES_PER_ELEMENT,(et+1)*Oe/ce.data.BYTES_PER_ELEMENT);i.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,et,ce.width,ce.height,1,me,F,ut)}E.clearLayerUpdates()}else i.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,ce.width,ce.height,ce.depth,me,F,ce.data)}else i.texImage3D(e.TEXTURE_2D_ARRAY,0,se,ce.width,ce.height,ce.depth,0,me,F,ce.data);else if(E.isData3DTexture)if(we){if(Ae)i.texStorage3D(e.TEXTURE_3D,Je,se,ce.width,ce.height,ce.depth);if(tt)i.texSubImage3D(e.TEXTURE_3D,0,0,0,0,ce.width,ce.height,ce.depth,me,F,ce.data)}else i.texImage3D(e.TEXTURE_3D,0,se,ce.width,ce.height,ce.depth,0,me,F,ce.data);else if(E.isFramebufferTexture){if(Ae)if(we)i.texStorage2D(e.TEXTURE_2D,Je,se,ce.width,ce.height);else{let Oe=ce.width,et=ce.height;for(let ut=0;ut<Je;ut++)i.texImage2D(e.TEXTURE_2D,ut,se,Oe,et,0,me,F,null),Oe>>=1,et>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in e){let Oe=e.canvas;if(!Oe.hasAttribute("layoutsubtree"))Oe.setAttribute("layoutsubtree","true");if(ce.parentNode!==Oe){Oe.appendChild(ce),u.add(E),Oe.onpaint=(et)=>{let ut=et.changedElements;for(let Pe of u)if(ut.includes(Pe.image))Pe.needsUpdate=!0},Oe.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,ce);else{let{RGBA:ut,RGBA:Pe,UNSIGNED_BYTE:Ft}=e;e.texElementImage2D(e.TEXTURE_2D,0,ut,Pe,Ft,ce)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(Se.length>0){if(we&&Ae){let Oe=vt(Se[0]);i.texStorage2D(e.TEXTURE_2D,Je,se,Oe.width,Oe.height)}for(let Oe=0,et=Se.length;Oe<et;Oe++)if(re=Se[Oe],we){if(tt)i.texSubImage2D(e.TEXTURE_2D,Oe,0,0,me,F,re)}else i.texImage2D(e.TEXTURE_2D,Oe,se,me,F,re);E.generateMipmaps=!1}else if(we){if(Ae){let Oe=vt(ce);i.texStorage2D(e.TEXTURE_2D,Je,se,Oe.width,Oe.height)}if(tt)i.texSubImage2D(e.TEXTURE_2D,0,0,0,me,F,ce)}else i.texImage2D(e.TEXTURE_2D,0,se,me,F,ce);if(M(E)&&E.mipmapsAutoUpdate===!0)b(ae);if(Ee.__version=ve.version,E.onUpdate)E.onUpdate(E)}C.__version=E.version}function Fe(C,E,X){if(E.image.length!==6)return;let ae=ue(C,E),he=E.source;i.bindTexture(e.TEXTURE_CUBE_MAP,C.__webglTexture,e.TEXTURE0+X);let ve=n.get(he);if(he.version!==ve.__version||ae===!0){i.activeTexture(e.TEXTURE0+X);let Ee=ht.getPrimaries(ht.workingColorSpace),te=E.colorSpace===Vn?null:ht.getPrimaries(E.colorSpace),ce=E.colorSpace===Vn||Ee===te?e.NONE:e.BROWSER_DEFAULT_WEBGL;i.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(e.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,ce);let me=E.isCompressedTexture||E.image[0].isCompressedTexture,F=E.image[0]&&E.image[0].isDataTexture,se=[];for(let Pe=0;Pe<6;Pe++){if(!me&&!F)se[Pe]=y(E.image[Pe],!0,r.maxCubemapSize);else se[Pe]=F?E.image[Pe].image:E.image[Pe];se[Pe]=Me(E,se[Pe])}let re=se[0],Se=s.convert(E.format,E.colorSpace),we=s.convert(E.type),Ae=T(E.internalFormat,Se,we,E.normalized,E.colorSpace),tt=E.isVideoTexture!==!0,Je=ve.__version===void 0||ae===!0,Oe=he.dataReady,et=S(E,re);pt(e.TEXTURE_CUBE_MAP,E);let ut;if(E.isDepthTexture){if(Ae=_(E.format===En,E.type),Je)if(tt)i.texStorage2D(e.TEXTURE_CUBE_MAP,1,Ae,re.width,re.height);else for(let Pe=0;Pe<6;Pe++)i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,0,Ae,re.width,re.height,0,Se,we,null)}else if(me){if(tt&&Je)i.texStorage2D(e.TEXTURE_CUBE_MAP,et,Ae,re.width,re.height);for(let Pe=0;Pe<6;Pe++){ut=se[Pe].mipmaps;for(let Ft=0;Ft<ut.length;Ft++){let mi=ut[Ft];if(E.format!==Li)if(Se!==null)if(tt){if(Oe)i.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,Ft,0,0,mi.width,mi.height,Se,mi.data)}else i.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,Ft,Ae,mi.width,mi.height,0,mi.data);else Te("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()");else if(tt){if(Oe)i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,Ft,0,0,mi.width,mi.height,Se,we,mi.data)}else i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,Ft,Ae,mi.width,mi.height,0,Se,we,mi.data)}}}else{if(ut=E.mipmaps,tt&&Je){if(ut.length>0)et++;let Pe=vt(se[0]);i.texStorage2D(e.TEXTURE_CUBE_MAP,et,Ae,Pe.width,Pe.height)}for(let Pe=0;Pe<6;Pe++)if(F){if(tt){if(Oe)i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,0,0,0,se[Pe].width,se[Pe].height,Se,we,se[Pe].data)}else i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,0,Ae,se[Pe].width,se[Pe].height,0,Se,we,se[Pe].data);for(let Ft=0;Ft<ut.length;Ft++){let zn=ut[Ft].image[Pe].image;if(tt){if(Oe)i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,Ft+1,0,0,zn.width,zn.height,Se,we,zn.data)}else i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,Ft+1,Ae,zn.width,zn.height,0,Se,we,zn.data)}}else{if(tt){if(Oe)i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,0,0,0,Se,we,se[Pe])}else i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,0,Ae,Se,we,se[Pe]);for(let Ft=0;Ft<ut.length;Ft++){let mi=ut[Ft];if(tt){if(Oe)i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,Ft+1,0,0,Se,we,mi.image[Pe])}else i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,Ft+1,Ae,Se,we,mi.image[Pe])}}}if(M(E)&&E.mipmapsAutoUpdate===!0)b(e.TEXTURE_CUBE_MAP);if(ve.__version=he.version,E.onUpdate)E.onUpdate(E)}C.__version=E.version}function nt(C,E,X,ae,he,ve){let Ee=s.convert(X.format,X.colorSpace),te=s.convert(X.type),ce=T(X.internalFormat,Ee,te,X.normalized,X.colorSpace),me=n.get(E),F=n.get(X);if(F.__renderTarget=E,!me.__hasExternalTextures){let se=Math.max(1,E.width>>ve),re=Math.max(1,E.height>>ve);if(he===e.TEXTURE_3D||he===e.TEXTURE_2D_ARRAY)i.texImage3D(he,ve,ce,se,re,E.depth,0,Ee,te,null);else i.texImage2D(he,ve,ce,se,re,0,Ee,te,null)}if(i.bindFramebuffer(e.FRAMEBUFFER,C),Ce(E))a.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,ae,he,F.__webglTexture,0,oe(E));else if(he===e.TEXTURE_2D||he>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&he<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)e.framebufferTexture2D(e.FRAMEBUFFER,ae,he,F.__webglTexture,ve);i.bindFramebuffer(e.FRAMEBUFFER,null)}function We(C,E,X){if(e.bindRenderbuffer(e.RENDERBUFFER,C),E.depthBuffer){let ae=E.depthTexture,he=ae&&ae.isDepthTexture?ae.type:null,ve=_(E.stencilBuffer,he),Ee=E.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(Ce(E))a.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,oe(E),ve,E.width,E.height);else if(X)e.renderbufferStorageMultisample(e.RENDERBUFFER,oe(E),ve,E.width,E.height);else e.renderbufferStorage(e.RENDERBUFFER,ve,E.width,E.height);e.framebufferRenderbuffer(e.FRAMEBUFFER,Ee,e.RENDERBUFFER,C)}else{let ae=E.textures;for(let he=0;he<ae.length;he++){let ve=ae[he],Ee=s.convert(ve.format,ve.colorSpace),te=s.convert(ve.type),ce=T(ve.internalFormat,Ee,te,ve.normalized,ve.colorSpace);if(Ce(E))a.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,oe(E),ce,E.width,E.height);else if(X)e.renderbufferStorageMultisample(e.RENDERBUFFER,oe(E),ce,E.width,E.height);else e.renderbufferStorage(e.RENDERBUFFER,ce,E.width,E.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function at(C,E,X){let ae=E.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(e.FRAMEBUFFER,C),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let he=n.get(E.depthTexture);he.__renderTarget=E;let ve=ae?E.depthTexture.image[0]:E.depthTexture.image;if(!he.__webglTexture||ve.width!==E.width||ve.height!==E.height)ve.width=E.width,ve.height=E.height,E.depthTexture.needsUpdate=!0;if(ae)Ie(E.depthTexture,0);else be(E.depthTexture,0);let Ee=he.__webglTexture,te=oe(E),ce=ae?e.TEXTURE_CUBE_MAP_POSITIVE_X+X:e.TEXTURE_2D,me=E.depthTexture.format===En?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(E.depthTexture.format===vn)if(Ce(E))a.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,me,ce,Ee,0,te);else e.framebufferTexture2D(e.FRAMEBUFFER,me,ce,Ee,0);else if(E.depthTexture.format===En)if(Ce(E))a.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,me,ce,Ee,0,te);else e.framebufferTexture2D(e.FRAMEBUFFER,me,ce,Ee,0);else throw Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Mt(C){let E=n.get(C),X=C.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==C.depthTexture){let ae=C.depthTexture;if(E.__depthDisposeCallback)E.__depthDisposeCallback();if(ae){let he=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,ae.removeEventListener("dispose",he)};ae.addEventListener("dispose",he),E.__depthDisposeCallback=he}E.__boundDepthTexture=ae}if(C.depthTexture&&!E.__autoAllocateDepthBuffer)if(X)for(let ae=0;ae<6;ae++)at(E.__webglFramebuffer[ae],C,ae);else if(C.texture.mipmaps.length>0)at(E.__webglFramebuffer[0],C,0);else at(E.__webglFramebuffer,C,0);else if(X){E.__webglDepthbuffer=[];for(let ae=0;ae<6;ae++)if(i.bindFramebuffer(e.FRAMEBUFFER,E.__webglFramebuffer[ae]),E.__webglDepthbuffer[ae]===void 0)E.__webglDepthbuffer[ae]=e.createRenderbuffer(),We(E.__webglDepthbuffer[ae],C,!1);else{let he=C.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,ve=E.__webglDepthbuffer[ae];e.bindRenderbuffer(e.RENDERBUFFER,ve),e.framebufferRenderbuffer(e.FRAMEBUFFER,he,e.RENDERBUFFER,ve)}}else{if(C.texture.mipmaps.length>0)i.bindFramebuffer(e.FRAMEBUFFER,E.__webglFramebuffer[0]);else i.bindFramebuffer(e.FRAMEBUFFER,E.__webglFramebuffer);if(E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=e.createRenderbuffer(),We(E.__webglDepthbuffer,C,!1);else{let he=C.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,ve=E.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,ve),e.framebufferRenderbuffer(e.FRAMEBUFFER,he,e.RENDERBUFFER,ve)}}i.bindFramebuffer(e.FRAMEBUFFER,null)}function Ct(C,E,X){let ae=n.get(C);if(E!==void 0)nt(ae.__webglFramebuffer,C,C.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0);if(X!==void 0)Mt(C)}function H(C){let E=C.texture,X=n.get(C),ae=n.get(E);C.addEventListener("dispose",U),w(C);let he=C.textures,ve=C.isWebGLCubeRenderTarget===!0,Ee=he.length>1;if(!Ee){if(ae.__webglTexture===void 0)ae.__webglTexture=e.createTexture();ae.__version=E.version,o.memory.textures++}if(ve){X.__webglFramebuffer=[];for(let te=0;te<6;te++)if(E.mipmaps.length>0){X.__webglFramebuffer[te]=[];for(let ce=0;ce<E.mipmaps.length;ce++)X.__webglFramebuffer[te][ce]=e.createFramebuffer()}else X.__webglFramebuffer[te]=e.createFramebuffer()}else{if(E.mipmaps.length>0){X.__webglFramebuffer=[];for(let te=0;te<E.mipmaps.length;te++)X.__webglFramebuffer[te]=e.createFramebuffer()}else X.__webglFramebuffer=e.createFramebuffer();if(Ee)for(let te=0,ce=he.length;te<ce;te++){let me=n.get(he[te]);if(me.__webglTexture===void 0)me.__webglTexture=e.createTexture(),o.memory.textures++}if(C.samples>0&&Ce(C)===!1){X.__webglMultisampledFramebuffer=e.createFramebuffer(),X.__webglColorRenderbuffer=[],i.bindFramebuffer(e.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let te=0;te<he.length;te++){let ce=he[te];X.__webglColorRenderbuffer[te]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,X.__webglColorRenderbuffer[te]);let me=s.convert(ce.format,ce.colorSpace),F=s.convert(ce.type),se=T(ce.internalFormat,me,F,ce.normalized,ce.colorSpace,C.isXRRenderTarget===!0),re=oe(C);e.renderbufferStorageMultisample(e.RENDERBUFFER,re,se,C.width,C.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+te,e.RENDERBUFFER,X.__webglColorRenderbuffer[te])}if(e.bindRenderbuffer(e.RENDERBUFFER,null),C.depthBuffer)X.__webglDepthRenderbuffer=e.createRenderbuffer(),We(X.__webglDepthRenderbuffer,C,!0);i.bindFramebuffer(e.FRAMEBUFFER,null)}}if(ve){i.bindTexture(e.TEXTURE_CUBE_MAP,ae.__webglTexture),pt(e.TEXTURE_CUBE_MAP,E);for(let te=0;te<6;te++)if(E.mipmaps.length>0)for(let ce=0;ce<E.mipmaps.length;ce++)nt(X.__webglFramebuffer[te][ce],C,E,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+te,ce);else nt(X.__webglFramebuffer[te],C,E,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+te,0);if(M(E))b(e.TEXTURE_CUBE_MAP);else if(E.mipmaps.length>0)e.texParameteri(e.TEXTURE_CUBE_MAP,e.TEXTURE_MAX_LEVEL,E.mipmaps.length-1);i.unbindTexture()}else if(Ee){for(let te=0,ce=he.length;te<ce;te++){let me=he[te],F=n.get(me),se=e.TEXTURE_2D;if(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)se=C.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY;if(i.bindTexture(se,F.__webglTexture),pt(se,me),nt(X.__webglFramebuffer,C,me,e.COLOR_ATTACHMENT0+te,se,0),M(me))b(se)}i.unbindTexture()}else{let te=e.TEXTURE_2D;if(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)te=C.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY;if(i.bindTexture(te,ae.__webglTexture),pt(te,E),E.mipmaps.length>0)for(let ce=0;ce<E.mipmaps.length;ce++)nt(X.__webglFramebuffer[ce],C,E,e.COLOR_ATTACHMENT0,te,ce);else nt(X.__webglFramebuffer,C,E,e.COLOR_ATTACHMENT0,te,0);if(M(E))b(te);else if(E.mipmaps.length>0)e.texParameteri(te,e.TEXTURE_MAX_LEVEL,E.mipmaps.length-1);i.unbindTexture()}if(C.depthBuffer)Mt(C)}function yi(C){let E=C.textures;for(let X=0,ae=E.length;X<ae;X++){let he=E[X];if(M(he)&&he.mipmapsAutoUpdate===!0){let ve=v(C),Ee=n.get(he).__webglTexture;i.bindTexture(ve,Ee),b(ve),i.unbindTexture()}}}let q=[];function pe(C){if(C.samples>0){if(Ce(C)===!1){let{textures:E,width:X,height:ae}=C,he=e.COLOR_BUFFER_BIT,ve=C.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,Ee=n.get(C),te=E.length>1;if(te)for(let me=0;me<E.length;me++)i.bindFramebuffer(e.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+me,e.RENDERBUFFER,null),i.bindFramebuffer(e.FRAMEBUFFER,Ee.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+me,e.TEXTURE_2D,null,0);if(i.bindFramebuffer(e.READ_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),C.texture.mipmaps.length>0)i.bindFramebuffer(e.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer[0]);else i.bindFramebuffer(e.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer);for(let me=0;me<E.length;me++){if(C.resolveDepthBuffer){if(C.depthBuffer)he|=e.DEPTH_BUFFER_BIT;if(C.stencilBuffer&&C.resolveStencilBuffer)he|=e.STENCIL_BUFFER_BIT}if(te){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,Ee.__webglColorRenderbuffer[me]);let F=n.get(E[me]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,F,0)}if(e.blitFramebuffer(0,0,X,ae,0,0,X,ae,he,e.NEAREST),l===!0){if(q.length=0,q.push(e.COLOR_ATTACHMENT0+me),C.depthBuffer&&C.storeMultisampledDepthBuffer===!1)q.push(ve);e.invalidateFramebuffer(e.READ_FRAMEBUFFER,q)}}if(i.bindFramebuffer(e.READ_FRAMEBUFFER,null),i.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),te)for(let me=0;me<E.length;me++){i.bindFramebuffer(e.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+me,e.RENDERBUFFER,Ee.__webglColorRenderbuffer[me]);let F=n.get(E[me]).__webglTexture;i.bindFramebuffer(e.FRAMEBUFFER,Ee.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+me,e.TEXTURE_2D,F,0)}i.bindFramebuffer(e.DRAW_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&l){let E=C.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[E])}}}function oe(C){return Math.min(r.maxSamples,C.samples)}function Ce(C){let E=n.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function de(C){let E=o.render.frame;if(h.get(C)!==E)h.set(C,E),C.update()}function Me(C,E){let{colorSpace:X,format:ae,type:he}=C;if(C.isCompressedTexture===!0||C.isVideoTexture===!0)return E;if(X!==Ki&&X!==Vn)if(ht.getTransfer(X)===Tt){if(ae!==Li||he!==Mi)Te("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.")}else Ye("WebGLTextures: Unsupported texture color space:",X);return E}function vt(C){if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement)c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height;else if(typeof VideoFrame<"u"&&C instanceof VideoFrame)c.width=C.displayWidth,c.height=C.displayHeight;else c.width=C.width,c.height=C.height;return c}this.allocateTextureUnit=k,this.resetTextureUnits=z,this.getTextureUnits=Y,this.setTextureUnits=le,this.setTexture2D=be,this.setTexture2DArray=_e,this.setTexture3D=He,this.setTextureCube=Ie,this.rebindTextures=Ct,this.setupRenderTarget=H,this.updateRenderTargetMipmap=yi,this.updateMultisampleRenderTarget=pe,this.setupDepthRenderbuffer=Mt,this.setupFrameBufferTexture=nt,this.useMultisampledRTT=Ce,this.dispose=V}function wu(e,t){function i(n,r=Vn){let s,o=ht.getTransfer(r);if(n===Mi)return e.UNSIGNED_BYTE;if(n===Ao)return e.UNSIGNED_SHORT_4_4_4_4;if(n===Ro)return e.UNSIGNED_SHORT_5_5_5_1;if(n===Ic)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===Pc)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===Rc)return e.BYTE;if(n===Cc)return e.SHORT;if(n===Dr)return e.UNSIGNED_SHORT;if(n===wo)return e.INT;if(n===Pi)return e.UNSIGNED_INT;if(n===gi)return e.FLOAT;if(n===si)return e.HALF_FLOAT;if(n===Lc)return e.ALPHA;if(n===Dc)return e.RGB;if(n===Li)return e.RGBA;if(n===vn)return e.DEPTH_COMPONENT;if(n===En)return e.DEPTH_STENCIL;if(n===Co)return e.RED;if(n===Us)return e.RED_INTEGER;if(n===wn)return e.RG;if(n===Io)return e.RG_INTEGER;if(n===Po)return e.RGBA_INTEGER;if(n===Lo||n===Do||n===No||n===Fo)if(o===Tt)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Lo)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Do)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===No)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Fo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Lo)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Do)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===No)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Fo)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ha||n===za||n===Ga||n===ka)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Ha)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===za)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ga)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ka)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Va||n===Wa||n===Xa||n===Ya||n===qa||n===Bs||n===Za)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Va||n===Wa)return o===Tt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Xa)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===Ya)return s.COMPRESSED_R11_EAC;if(n===qa)return s.COMPRESSED_SIGNED_R11_EAC;if(n===Bs)return s.COMPRESSED_RG11_EAC;if(n===Za)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Ka||n===Ja||n===ja||n===$a||n===Qa||n===el||n===tl||n===il||n===nl||n===rl||n===sl||n===ol||n===al||n===ll)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Ka)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ja)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ja)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===$a)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Qa)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===el)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===tl)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===il)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===nl)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===rl)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===sl)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ol)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===al)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ll)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===cl||n===hl||n===fl)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===cl)return o===Tt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===hl)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===fl)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ul||n===dl||n===Os||n===pl)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===ul)return s.COMPRESSED_RED_RGTC1_EXT;if(n===dl)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Os)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===pl)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;if(n===nr)return e.UNSIGNED_INT_24_8;return e[n]!==void 0?e[n]:null}return{convert:i}}var fS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,uS=`
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

}`;class Au{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new oa(e.texture);if(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)this.depthNear=e.depthNear,this.depthFar=e.depthFar;this.texture=i}}getMesh(e){if(this.texture!==null){if(this.mesh===null){let t=e.cameras[0].viewport,i=new ai({vertexShader:fS,fragmentShader:uS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ne(new zt(20,20),i)}}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Ru extends Di{constructor(e,t){super();let i=this,n=null,r=1,s=null,o="local-floor",a=1,l=null,c=null,h=null,u=null,f=null,m=null,g=typeof XRWebGLBinding<"u",x=new Au,d={},p=t.getContextAttributes(),y=null,M=null,b=[],v=[],T=new Z,_=null,S=null,w=new ni;w.viewport=new Et;let L=new ni;L.viewport=new Et;let I=[w,L],U=new Oh,K=null,P=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(k){let ee=b[k];if(ee===void 0)ee=new Wo,b[k]=ee;return ee.getTargetRaySpace()},this.getControllerGrip=function(k){let ee=b[k];if(ee===void 0)ee=new Wo,b[k]=ee;return ee.getGripSpace()},this.getHand=function(k){let ee=b[k];if(ee===void 0)ee=new Wo,b[k]=ee;return ee.getHandSpace()};function V(k){let ee=v.indexOf(k.inputSource);if(ee===-1)return;let be=b[ee];if(be!==void 0)be.update(k.inputSource,k.frame,l||s),be.dispatchEvent({type:k.type,data:k.inputSource})}function D(){n.removeEventListener("select",V),n.removeEventListener("selectstart",V),n.removeEventListener("selectend",V),n.removeEventListener("squeeze",V),n.removeEventListener("squeezestart",V),n.removeEventListener("squeezeend",V),n.removeEventListener("end",D),n.removeEventListener("inputsourceschange",N);for(let k=0;k<b.length;k++){let ee=v[k];if(ee===null)continue;v[k]=null,b[k].disconnect(ee)}K=null,P=null,x.reset();for(let k in d)delete d[k];if(e.setRenderTarget(y),f=null,u=null,h=null,n=null,M=null,le.stop(),i.isPresenting=!1,e.setPixelRatio(_),e.setSize(T.width,T.height,!1),S!==null){let k=S.camera;k.fov=S.fov,k.zoom=S.zoom,k.updateProjectionMatrix(),S=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(k){if(r=k,i.isPresenting===!0)Te("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(k){if(o=k,i.isPresenting===!0)Te("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||s},this.setReferenceSpace=function(k){l=k},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){if(h===null&&g)h=new XRWebGLBinding(n,t);return h},this.getFrame=function(){return m},this.getSession=function(){return n},this.setSession=async function(k){if(n=k,n!==null){if(y=e.getRenderTarget(),n.addEventListener("select",V),n.addEventListener("selectstart",V),n.addEventListener("selectend",V),n.addEventListener("squeeze",V),n.addEventListener("squeezestart",V),n.addEventListener("squeezeend",V),n.addEventListener("end",D),n.addEventListener("inputsourceschange",N),p.xrCompatible!==!0)await t.makeXRCompatible();if(_=e.getPixelRatio(),e.getSize(T),!(g&&("createProjectionLayer"in XRWebGLBinding.prototype))){let be={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(n,t,be),n.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),M=new ii(f.framebufferWidth,f.framebufferHeight,{format:Li,type:Mi,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let be=null,_e=null,He=null;if(p.depth)He=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,be=p.stencil?En:vn,_e=p.stencil?nr:Pi;let Ie={colorFormat:t.RGBA8,depthFormat:He,scaleFactor:r};h=this.getBinding(),u=h.createProjectionLayer(Ie),n.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),M=new ii(u.textureWidth,u.textureHeight,{format:Li,type:Mi,depthTexture:new In(u.textureWidth,u.textureHeight,_e,void 0,void 0,void 0,void 0,void 0,void 0,be),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(a),l=null,s=await n.requestReferenceSpace(o),le.setContext(n),le.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function N(k){for(let ee=0;ee<k.removed.length;ee++){let be=k.removed[ee],_e=v.indexOf(be);if(_e>=0)v[_e]=null,b[_e].disconnect(be)}for(let ee=0;ee<k.added.length;ee++){let be=k.added[ee],_e=v.indexOf(be);if(_e===-1){for(let Ie=0;Ie<b.length;Ie++)if(Ie>=v.length){v.push(be),_e=Ie;break}else if(v[Ie]===null){v[Ie]=be,_e=Ie;break}if(_e===-1)break}let He=b[_e];if(He)He.connect(be)}}function Q(k,ee){if(ee===null)k.matrixWorld.copy(k.matrix);else k.matrixWorld.multiplyMatrices(ee.matrixWorld,k.matrix);k.matrixWorldInverse.copy(k.matrixWorld).invert()}this.updateCamera=function(k){if(n===null)return;let{near:ee,far:be}=k;if(x.texture!==null){if(x.depthNear>0)ee=x.depthNear;if(x.depthFar>0)be=x.depthFar}if(U.near=L.near=w.near=ee,U.far=L.far=w.far=be,K!==U.near||P!==U.far)n.updateRenderState({depthNear:U.near,depthFar:U.far}),K=U.near,P=U.far;U.layers.mask=k.layers.mask|6,w.layers.mask=U.layers.mask&-5,L.layers.mask=U.layers.mask&-3;let _e=k.parent,He=U.cameras;Q(U,_e);for(let Ie=0;Ie<He.length;Ie++)Q(He[Ie],_e);if(U.projectionMatrix.copy(w.projectionMatrix),U.projectionMatrixInverse.copy(w.projectionMatrixInverse),S===null&&k.isPerspectiveCamera)S={camera:k,fov:k.fov,zoom:k.zoom};G(k,U,_e)};function G(k,ee,be){if(be===null)k.matrix.copy(ee.matrixWorld);else k.matrix.copy(be.matrixWorld),k.matrix.invert(),k.matrix.multiply(ee.matrixWorld);if(k.matrix.decompose(k.position,k.quaternion,k.scale),k.updateMatrixWorld(!0),k.projectionMatrix.copy(ee.projectionMatrix),k.projectionMatrixInverse.copy(ee.projectionMatrixInverse),k.isPerspectiveCamera)k.fov=Ur*2*Math.atan(1/k.projectionMatrix.elements[5]),k.zoom=1}this.getCamera=function(){return U},this.getFoveation=function(){if(u===null&&f===null)return;return a},this.setFoveation=function(k){if(a=k,u!==null)u.fixedFoveation=k;if(f!==null&&f.fixedFoveation!==void 0)f.fixedFoveation=k},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(U)},this.getCameraTexture=function(k){return d[k]};let z=null;function Y(k,ee){if(c=ee.getViewerPose(l||s),m=ee,c!==null){let be=c.views;if(f!==null)e.setRenderTargetFramebuffer(M,f.framebuffer),e.setRenderTarget(M);let _e=!1;if(be.length!==U.cameras.length)U.cameras.length=0,_e=!0;for(let ze=0;ze<be.length;ze++){let ke=be[ze],pt=null;if(f!==null)pt=f.getViewport(ke);else{let xe=h.getViewSubImage(u,ke);if(pt=xe.viewport,ze===0)e.setRenderTargetTextures(M,xe.colorTexture,xe.depthStencilTexture),e.setRenderTarget(M)}let ue=I[ze];if(ue===void 0)ue=new ni,ue.layers.enable(ze),ue.viewport=new Et,I[ze]=ue;if(ue.matrix.fromArray(ke.transform.matrix),ue.matrix.decompose(ue.position,ue.quaternion,ue.scale),ue.projectionMatrix.fromArray(ke.projectionMatrix),ue.projectionMatrixInverse.copy(ue.projectionMatrix).invert(),ue.viewport.set(pt.x,pt.y,pt.width,pt.height),ze===0)U.matrix.copy(ue.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale);if(_e===!0)U.cameras.push(ue)}let He=n.enabledFeatures;if(He&&He.includes("depth-sensing")&&n.depthUsage=="gpu-optimized"&&g){h=i.getBinding();let ze=h.getDepthInformation(be[0]);if(ze&&ze.isValid&&ze.texture)x.init(ze,n.renderState)}if(He&&He.includes("camera-access")&&g){e.state.unbindTexture(),h=i.getBinding();for(let ze=0;ze<be.length;ze++){let ke=be[ze].camera;if(ke){let pt=d[ke];if(!pt)pt=new oa,d[ke]=pt;let ue=h.getCameraImage(ke);pt.sourceTexture=ue}}}}for(let be=0;be<b.length;be++){let _e=v[be],He=b[be];if(_e!==null&&He!==void 0)He.update(_e,ee,l||s)}if(z)z(k,ee);if(ee.detectedPlanes)i.dispatchEvent({type:"planesdetected",data:ee});m=null}let le=new Gh;le.setAnimationLoop(Y),this.setAnimationLoop=function(k){z=k},this.dispose=function(){}}}var dS=new Ge,t_=new st;t_.set(-1,0,0,0,1,0,0,0,1);function i_(e,t){function i(d,p){if(d.matrixAutoUpdate===!0)d.updateMatrix();p.value.copy(d.matrix)}function n(d,p){if(p.color.getRGB(d.fogColor.value,Ch(e)),p.isFog)d.fogNear.value=p.near,d.fogFar.value=p.far;else if(p.isFogExp2)d.fogDensity.value=p.density}function r(d,p,y,M,b){if(p.isNodeMaterial)p.uniformsNeedUpdate=!1;else if(p.isMeshBasicMaterial)s(d,p);else if(p.isMeshLambertMaterial){if(s(d,p),p.envMap)d.envMapIntensity.value=p.envMapIntensity}else if(p.isMeshToonMaterial)s(d,p),u(d,p);else if(p.isMeshPhongMaterial){if(s(d,p),h(d,p),p.envMap)d.envMapIntensity.value=p.envMapIntensity}else if(p.isMeshStandardMaterial){if(s(d,p),f(d,p),p.isMeshPhysicalMaterial)m(d,p,b)}else if(p.isMeshMatcapMaterial)s(d,p),g(d,p);else if(p.isMeshDepthMaterial)s(d,p);else if(p.isMeshDistanceMaterial)s(d,p),x(d,p);else if(p.isMeshNormalMaterial)s(d,p);else if(p.isLineBasicMaterial){if(o(d,p),p.isLineDashedMaterial)a(d,p)}else if(p.isPointsMaterial)l(d,p,y,M);else if(p.isSpriteMaterial)c(d,p);else if(p.isShadowMaterial)d.color.value.copy(p.color),d.opacity.value=p.opacity;else if(p.isShaderMaterial)p.uniformsNeedUpdate=!1}function s(d,p){if(d.opacity.value=p.opacity,p.color)d.diffuse.value.copy(p.color);if(p.emissive)d.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity);if(p.map)d.map.value=p.map,i(p.map,d.mapTransform);if(p.alphaMap)d.alphaMap.value=p.alphaMap,i(p.alphaMap,d.alphaMapTransform);if(p.bumpMap){if(d.bumpMap.value=p.bumpMap,i(p.bumpMap,d.bumpMapTransform),d.bumpScale.value=p.bumpScale,p.side===jt)d.bumpScale.value*=-1}if(p.normalMap){if(d.normalMap.value=p.normalMap,i(p.normalMap,d.normalMapTransform),d.normalScale.value.copy(p.normalScale),p.side===jt)d.normalScale.value.negate()}if(p.displacementMap)d.displacementMap.value=p.displacementMap,i(p.displacementMap,d.displacementMapTransform),d.displacementScale.value=p.displacementScale,d.displacementBias.value=p.displacementBias;if(p.emissiveMap)d.emissiveMap.value=p.emissiveMap,i(p.emissiveMap,d.emissiveMapTransform);if(p.specularMap)d.specularMap.value=p.specularMap,i(p.specularMap,d.specularMapTransform);if(p.alphaTest>0)d.alphaTest.value=p.alphaTest;let y=t.get(p),{envMap:M,envMapRotation:b}=y;if(M){if(d.envMap.value=M,d.envMapRotation.value.setFromMatrix4(dS.makeRotationFromEuler(b)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1)d.envMapRotation.value.premultiply(t_);d.reflectivity.value=p.reflectivity,d.ior.value=p.ior,d.refractionRatio.value=p.refractionRatio}if(p.lightMap)d.lightMap.value=p.lightMap,d.lightMapIntensity.value=p.lightMapIntensity,i(p.lightMap,d.lightMapTransform);if(p.aoMap)d.aoMap.value=p.aoMap,d.aoMapIntensity.value=p.aoMapIntensity,i(p.aoMap,d.aoMapTransform)}function o(d,p){if(d.diffuse.value.copy(p.color),d.opacity.value=p.opacity,p.map)d.map.value=p.map,i(p.map,d.mapTransform)}function a(d,p){d.dashSize.value=p.dashSize,d.totalSize.value=p.dashSize+p.gapSize,d.scale.value=p.scale}function l(d,p,y,M){if(d.diffuse.value.copy(p.color),d.opacity.value=p.opacity,d.size.value=p.size*y,d.scale.value=M*0.5,p.map)d.map.value=p.map,i(p.map,d.uvTransform);if(p.alphaMap)d.alphaMap.value=p.alphaMap,i(p.alphaMap,d.alphaMapTransform);if(p.alphaTest>0)d.alphaTest.value=p.alphaTest}function c(d,p){if(d.diffuse.value.copy(p.color),d.opacity.value=p.opacity,d.rotation.value=p.rotation,p.map)d.map.value=p.map,i(p.map,d.mapTransform);if(p.alphaMap)d.alphaMap.value=p.alphaMap,i(p.alphaMap,d.alphaMapTransform);if(p.alphaTest>0)d.alphaTest.value=p.alphaTest}function h(d,p){d.specular.value.copy(p.specular),d.shininess.value=Math.max(p.shininess,0.0001)}function u(d,p){if(p.gradientMap)d.gradientMap.value=p.gradientMap}function f(d,p){if(d.metalness.value=p.metalness,p.metalnessMap)d.metalnessMap.value=p.metalnessMap,i(p.metalnessMap,d.metalnessMapTransform);if(d.roughness.value=p.roughness,p.roughnessMap)d.roughnessMap.value=p.roughnessMap,i(p.roughnessMap,d.roughnessMapTransform);if(p.envMap)d.envMapIntensity.value=p.envMapIntensity}function m(d,p,y){if(d.ior.value=p.ior,p.diffuseRoughness>0){if(d.diffuseRoughness.value=p.diffuseRoughness,p.diffuseRoughnessMap)d.diffuseRoughnessMap.value=p.diffuseRoughnessMap,i(p.diffuseRoughnessMap,d.diffuseRoughnessMapTransform)}if(p.sheen>0){if(d.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),d.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap)d.sheenColorMap.value=p.sheenColorMap,i(p.sheenColorMap,d.sheenColorMapTransform);if(p.sheenRoughnessMap)d.sheenRoughnessMap.value=p.sheenRoughnessMap,i(p.sheenRoughnessMap,d.sheenRoughnessMapTransform)}if(p.clearcoat>0){if(d.clearcoat.value=p.clearcoat,d.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap)d.clearcoatMap.value=p.clearcoatMap,i(p.clearcoatMap,d.clearcoatMapTransform);if(p.clearcoatRoughnessMap)d.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,i(p.clearcoatRoughnessMap,d.clearcoatRoughnessMapTransform);if(p.clearcoatNormalMap){if(d.clearcoatNormalMap.value=p.clearcoatNormalMap,i(p.clearcoatNormalMap,d.clearcoatNormalMapTransform),d.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===jt)d.clearcoatNormalScale.value.negate()}}if(p.dispersion>0)d.dispersion.value=p.dispersion;if(p.retroreflectivity>0)d.retroreflectivity.value=p.retroreflectivity;if(p.iridescence>0){if(d.iridescence.value=p.iridescence,d.iridescenceIOR.value=p.iridescenceIOR,d.iridescenceThicknessMinimum.value=p.iridescenceThicknessMinimum,d.iridescenceThicknessMaximum.value=p.iridescenceThicknessMaximum,p.iridescenceMap)d.iridescenceMap.value=p.iridescenceMap,i(p.iridescenceMap,d.iridescenceMapTransform);if(p.iridescenceThicknessMap)d.iridescenceThicknessMap.value=p.iridescenceThicknessMap,i(p.iridescenceThicknessMap,d.iridescenceThicknessMapTransform)}if(p.transmission>0){if(d.transmission.value=p.transmission,d.transmissionSamplerMap.value=y.texture,d.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap)d.transmissionMap.value=p.transmissionMap,i(p.transmissionMap,d.transmissionMapTransform);if(d.thickness.value=p.thickness,p.thicknessMap)d.thicknessMap.value=p.thicknessMap,i(p.thicknessMap,d.thicknessMapTransform);d.attenuationDistance.value=p.attenuationDistance,d.attenuationColor.value.copy(p.attenuationColor)}if(p.anisotropy>0){if(d.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap)d.anisotropyMap.value=p.anisotropyMap,i(p.anisotropyMap,d.anisotropyMapTransform)}if(d.specularIntensity.value=p.specularIntensity,d.specularColor.value.copy(p.specularColor),p.specularColorMap)d.specularColorMap.value=p.specularColorMap,i(p.specularColorMap,d.specularColorMapTransform);if(p.specularIntensityMap)d.specularIntensityMap.value=p.specularIntensityMap,i(p.specularIntensityMap,d.specularIntensityMapTransform)}function g(d,p){if(p.matcap)d.matcap.value=p.matcap}function x(d,p){let y=t.get(p).light;d.referencePosition.value.setFromMatrixPosition(y.matrixWorld),d.nearDistance.value=y.shadow.camera.near,d.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function n_(e,t,i,n){let r={},s={};function o(y,M){let b=M.program;n.uniformBlockBinding(y,b,r[y.id])}function a(y,M){let b=r[y.id];if(b===void 0)g(y),b=l(y),r[y.id]=b,y.addEventListener("dispose",d);let v=M.program;n.updateUBOMapping(y,v);let T=t.render.frame;if(s[y.id]!==T)c(y),s[y.id]=T}function l(y){let M=e.createBuffer(),{__size:b,usage:v}=y;return e.bindBuffer(e.UNIFORM_BUFFER,M),e.bufferData(e.UNIFORM_BUFFER,b,v),e.bindBuffer(e.UNIFORM_BUFFER,null),M}function c(y){let M=r[y.id],{uniforms:b,__cache:v}=y;e.bindBuffer(e.UNIFORM_BUFFER,M);for(let T=0,_=b.length;T<_;T++){let S=b[T];if(Array.isArray(S))for(let w=0,L=S.length;w<L;w++)h(S[w],T,w,v);else h(S,T,0,v)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function h(y,M,b,v){if(f(y,M,b,v)===!0){let{__offset:T,value:_}=y;if(Array.isArray(_)){let S=0;for(let w=0;w<_.length;w++){let L=_[w],I=x(L,!0);u(L,y.__data,S),S+=I.storage/Float32Array.BYTES_PER_ELEMENT}}else u(_,y.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,T,y.__data)}}function u(y,M,b){if(typeof y==="number"||typeof y==="boolean")M[b]=y;else if(y.isMatrix3)M[b]=y.elements[0],M[b+1]=y.elements[1],M[b+2]=y.elements[2],M[b+3]=0,M[b+4]=y.elements[3],M[b+5]=y.elements[4],M[b+6]=y.elements[5],M[b+7]=0,M[b+8]=y.elements[6],M[b+9]=y.elements[7],M[b+10]=y.elements[8],M[b+11]=0;else if(ArrayBuffer.isView(y))M.set(y.subarray(0,M.length-b),b);else y.toArray(M,b)}function f(y,M,b,v){let T=y.value,_=M+"_"+b;if(Array.isArray(T)){if(v[_]===void 0)v[_]=[];let S=v[_],w=!1;for(let L=0;L<T.length;L++)if(m(T[L],S,L)===!0)w=!0;return w}return m(T,v,_)}function m(y,M,b){if(M[b]===void 0){if(typeof y==="number"||typeof y==="boolean")M[b]=y;else if(ArrayBuffer.isView(y))M[b]=y.slice();else M[b]=y.clone();return!0}else{let v=M[b];if(typeof y==="number"||typeof y==="boolean"){if(v!==y)return M[b]=y,!0}else if(ArrayBuffer.isView(y))return!0;else if(v.equals(y)===!1)return v.copy(y),!0}return!1}function g(y){let M=y.uniforms,b=0,v=16;for(let _=0,S=M.length;_<S;_++){let w=Array.isArray(M[_])?M[_]:[M[_]];for(let L=0,I=w.length;L<I;L++){let U=w[L],K=Array.isArray(U.value)?U.value:[U.value],P=Array.isArray(M[_])||Array.isArray(U.value),V=b;for(let N=0,Q=K.length;N<Q;N++){let G=K[N],z=x(G,P),Y=b%v,le=Y%z.boundary,k=Y+le;if(b+=le,k!==0&&v-k<z.storage)b+=v-k;if(N===0)V=b;b+=z.storage}let D=U.type==="int"?Int32Array:U.type==="uint"?Uint32Array:Float32Array;U.__data=new D((b-V)/Float32Array.BYTES_PER_ELEMENT),U.__offset=V}}let T=b%v;if(T>0)b+=v-T;return y.__size=b,y.__cache={},this}function x(y,M){let b={boundary:0,storage:0};if(typeof y==="number"||typeof y==="boolean")b.boundary=4,b.storage=4;else if(y.isVector2)b.boundary=8,b.storage=8;else if(y.isVector3||y.isColor)b.boundary=16,b.storage=12;else if(y.isVector4)b.boundary=16,b.storage=16;else if(y.isMatrix3)b.boundary=16,b.storage=48;else if(y.isMatrix4)b.boundary=16,b.storage=64;else if(y.isTexture)Te("WebGLRenderer: Texture samplers can not be part of an uniforms group.");else if(ArrayBuffer.isView(y))b.boundary=16,b.storage=y.byteLength;else Te("WebGLRenderer: Unsupported uniform value type.",y);if(M===!0)b.boundary=16,b.storage=Math.ceil(b.storage/16)*16;return b}function d(y){let M=y.target;M.removeEventListener("dispose",d),e.deleteBuffer(r[M.id]),delete r[M.id],delete s[M.id]}function p(){for(let y in r)e.deleteBuffer(r[y]);r={},s={}}return{bind:o,update:a,dispose:p}}var pS=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Er=null;function r_(){if(Er===null)Er=new cr(pS,16,16,wn,si),Er.name="DFG_LUT",Er.minFilter=qt,Er.magFilter=qt,Er.wrapS=Ii,Er.wrapT=Ii,Er.generateMipmaps=!1,Er.needsUpdate=!0;return Er}class Yh{constructor(e={}){let{canvas:t=Tf(),context:i=null,depth:n=!0,stencil:r=!1,alpha:s=!1,antialias:o=!1,premultipliedAlpha:a=!0,preserveDrawingBuffer:l=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:u=!1,outputBufferType:f=Mi}=e;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=s;let g=f,x=new Set([Po,Io,Us]),d=new Set([Mi,Pi,Dr,nr,Ao,Ro]),p=new Uint32Array(4),y=new Int32Array(4),M={textures:[],min:[],max:[],resolution:[]},b=null,v=null,T=[],_=[],S=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Tn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let w=this,L=!1,I=null,U=null,K=null,P=null;this._outputColorSpace=_t;let V=0,D=0,N=null,Q=-1,G=null,z=new Et,Y=new Et,le=null,k=new ge(0),ee=0,{width:be,height:_e}=t,He=1,Ie=null,ft=null,ze=new Et(0,0,be,_e),ke=new Et(0,0,be,_e),pt=!1,ue=new qn,xe=new ra,ye=!1,Be=!1,Fe=new Ge,nt=new R,We=new Et,at={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Mt=!1;function Ct(){return N===null?He:1}let H=i;function yi(A,O){return t.getContext(A,O)}let q,pe,oe,Ce,de,Me,vt,C,E,X,ae,he,ve,Ee,te,ce,me,F,se,re,Se,we,Ae;try{let A={alpha:!0,depth:n,stencil:r,antialias:o,premultipliedAlpha:a,preserveDrawingBuffer:l,powerPreference:c,failIfMajorPerformanceCaveat:h};if("setAttribute"in t)t.setAttribute("data-engine",`three.js r${Aa}`);if(t.addEventListener("webglcontextlost",Oe,!1),t.addEventListener("webglcontextrestored",et,!1),t.addEventListener("webglcontextcreationerror",ut,!1),H===null){if(H=yi("webgl2",A),H===null)if(yi("webgl2"))throw Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.");else throw Error("THREE.WebGLRenderer: Error creating WebGL context.")}tt()}catch(A){throw t.removeEventListener("webglcontextlost",Oe,!1),t.removeEventListener("webglcontextrestored",et,!1),t.removeEventListener("webglcontextcreationerror",ut,!1),Ye("WebGLRenderer: "+A.message),A}function tt(){if(q=new fx(H),q.init(),Se=new wu(H,q),pe=new ix(H,q,e,Se),oe=new Qx(H,q),pe.reversedDepthBuffer&&u)oe.buffers.depth.setReversed(!0);U=H.createFramebuffer(),K=H.createFramebuffer(),P=H.createFramebuffer(),Ce=new px(H),de=new kx,Me=new e_(H,q,oe,de,pe,Se,Ce),vt=new hx(w),C=new _0(H),we=new ex(H,C),E=new ux(H,C,Ce,we),X=new gx(H,E,C,we,Ce),F=new mx(H,pe,Me),te=new nx(de),ae=new Gx(w,vt,q,pe,we,te),he=new i_(w,de),ve=new Xx,Ee=new Zx(q),me=new Qg(w,vt,oe,X,m,a),ce=new $x(w,X,pe),Ae=new n_(H,Ce,pe,oe),se=new tx(H,q,Ce),re=new dx(H,q,Ce),Ce.programs=ae.programs,w.capabilities=pe,w.extensions=q,w.properties=de,w.renderLists=ve,w.shadowMap=ce,w.state=oe,w.info=Ce}if(g!==Mi)S=new xx(g,t.width,t.height,o,n,r);let Je=new Ru(w,H);this.xr=Je,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){let A=q.get("WEBGL_lose_context");if(A)A.loseContext()},this.forceContextRestore=function(){let A=q.get("WEBGL_lose_context");if(A)A.restoreContext()},this.getPixelRatio=function(){return He},this.setPixelRatio=function(A){if(A===void 0)return;He=A,this.setSize(be,_e,!1)},this.getSize=function(A){return A.set(be,_e)},this.setSize=function(A,O,ie=!0){if(Je.isPresenting){Te("WebGLRenderer: Can't change size while VR device is presenting.");return}if(be=A,_e=O,t.width=Math.floor(A*He),t.height=Math.floor(O*He),ie===!0)t.style.width=A+"px",t.style.height=O+"px";if(S!==null)S.setSize(t.width,t.height);this.setViewport(0,0,A,O)},this.getDrawingBufferSize=function(A){return A.set(be*He,_e*He).floor()},this.setDrawingBufferSize=function(A,O,ie){be=A,_e=O,He=ie,t.width=Math.floor(A*ie),t.height=Math.floor(O*ie),this.setViewport(0,0,A,O)},this.setEffects=function(A){if(g===Mi){Ye("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let O=0;O<A.length;O++)if(A[O].isOutputPass===!0){Te("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}S.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(z)},this.getViewport=function(A){return A.copy(ze)},this.setViewport=function(A,O,ie,J){if(A.isVector4)ze.set(A.x,A.y,A.z,A.w);else ze.set(A,O,ie,J);oe.viewport(z.copy(ze).multiplyScalar(Ct()).round())},this.getScissor=function(A){return A.copy(ke)},this.setScissor=function(A,O,ie,J){if(A.isVector4)ke.set(A.x,A.y,A.z,A.w);else ke.set(A,O,ie,J);oe.scissor(Y.copy(ke).multiplyScalar(Ct()).round())},this.getScissorTest=function(){return pt},this.setScissorTest=function(A){oe.setScissorTest(pt=A)},this.setOpaqueSort=function(A){Ie=A},this.setTransparentSort=function(A){ft=A},this.getClearColor=function(A){return A.copy(me.getClearColor())},this.setClearColor=function(){me.setClearColor(...arguments)},this.getClearAlpha=function(){return me.getClearAlpha()},this.setClearAlpha=function(){me.setClearAlpha(...arguments)},this.clear=function(A=!0,O=!0,ie=!0){let J=0;if(A){let j=!1;if(N!==null){let Le=N.texture.format;j=x.has(Le)}if(j){let Le=N.texture.type,je=d.has(Le),De=me.getClearColor(),Ve=me.getClearAlpha(),{r:it,g:mt,b:It}=De;if(je)p[0]=it,p[1]=mt,p[2]=It,p[3]=Ve,H.clearBufferuiv(H.COLOR,0,p);else y[0]=it,y[1]=mt,y[2]=It,y[3]=Ve,H.clearBufferiv(H.COLOR,0,y)}else J|=H.COLOR_BUFFER_BIT}if(O)J|=H.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0);if(ie)J|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295);if(J!==0)H.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),I=A},this.dispose=function(){t.removeEventListener("webglcontextlost",Oe,!1),t.removeEventListener("webglcontextrestored",et,!1),t.removeEventListener("webglcontextcreationerror",ut,!1),me.dispose(),ve.dispose(),Ee.dispose(),Me.dispose(),de.dispose(),vt.dispose(),X.dispose(),E.dispose(),we.dispose(),Ae.dispose(),ae.dispose(),Je.dispose(),Je.removeEventListener("sessionstart",dd),Je.removeEventListener("sessionend",pd),Is.stop()};function Oe(A){A.preventDefault(),Gs("WebGLRenderer: Context Lost."),L=!0}function et(){Gs("WebGLRenderer: Context Restored."),L=!1;let A=Ce.autoReset,O=ce.enabled,ie=ce.autoUpdate,J=ce.needsUpdate,j=ce.type;tt(),Ce.autoReset=A,ce.enabled=O,ce.autoUpdate=ie,ce.needsUpdate=J,ce.type=j}function ut(A){Ye("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Pe(A){let O=A.target;O.removeEventListener("dispose",Pe),Ft(O)}function Ft(A){mi(A),de.remove(A)}function mi(A){let O=de.get(A).programs;if(O!==void 0){if(O.forEach(function(ie){ae.releaseProgram(ie)}),A.isShaderMaterial)ae.releaseShaderCache(A)}}this.renderBufferDirect=function(A,O,ie,J,j,Le){if(O===null)O=at;let je=j.isMesh&&j.matrixWorld.determinantAffine()<0,De=M1(A,O,ie,J,j);oe.setMaterial(J,je);let Ve=ie.index,it=1;if(J.wireframe===!0){if(Ve=E.getWireframeAttribute(ie),Ve===void 0)return;it=2}let mt=ie.drawRange,It=ie.attributes.position,$e=mt.start*it,Pt=(mt.start+mt.count)*it;if(Le!==null)$e=Math.max($e,Le.start*it),Pt=Math.min(Pt,(Le.start+Le.count)*it);if(Ve!==null)$e=Math.max($e,0),Pt=Math.min(Pt,Ve.count);else if(It!==void 0&&It!==null)$e=Math.max($e,0),Pt=Math.min(Pt,It.count);let Ei=Pt-$e;if(Ei<0||Ei===1/0)return;we.setup(j,J,De,ie,Ve);let ei,Jt=se;if(Ve!==null)ei=C.get(Ve),Jt=re,Jt.setIndex(ei);if(j.isMesh)if(J.wireframe===!0)oe.setLineWidth(J.wireframeLinewidth*Ct()),Jt.setMode(H.LINES);else Jt.setMode(H.TRIANGLES);else if(j.isLine){let rn=J.linewidth;if(rn===void 0)rn=1;if(oe.setLineWidth(rn*Ct()),j.isLineSegments)Jt.setMode(H.LINES);else if(j.isLineLoop)Jt.setMode(H.LINE_LOOP);else Jt.setMode(H.LINE_STRIP)}else if(j.isPoints)Jt.setMode(H.POINTS);else if(j.isSprite)Jt.setMode(H.TRIANGLES);if(j.isBatchedMesh)if(!q.get("WEBGL_multi_draw")){let{_multiDrawStarts:rn,_multiDrawCounts:Qe,_multiDrawCount:dn}=j,kt=Ve?C.get(Ve).bytesPerElement:1,Ps=de.get(J).currentProgram.getUniforms();for(let sn=0;sn<dn;sn++)Ps.setValue(H,"_gl_DrawID",sn),Jt.render(rn[sn]/kt,Qe[sn])}else Jt.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else if(j.isInstancedMesh)Jt.renderInstances($e,Ei,j.count);else if(ie.isInstancedBufferGeometry){let rn=ie._maxInstanceCount!==void 0?ie._maxInstanceCount:1/0,Qe=Math.min(ie.instanceCount,rn);Jt.renderInstances($e,Ei,Qe)}else Jt.render($e,Ei)};function zn(A,O,ie,J){if(I!==null&&A.isNodeMaterial)I.setObject(J,A);if(ye===!0)te.setState(A,ie,!1);if(A.transparent===!0&&A.side===Ot&&A.forceSinglePass===!1)A.side=jt,A.needsUpdate=!0,wa(A,O,J),A.side=Mn,A.needsUpdate=!0,wa(A,O,J),A.side=Ot;else wa(A,O,J)}this.compile=function(A,O,ie=null){if(ie===null)ie=A;if(I!==null)I.renderStart(A,O,ie);if(v=Ee.get(ie),v.init(O),_.push(v),ie.traverseVisible(function(j){if(j.isLight&&j.layers.test(O.layers)){if(v.pushLight(j),j.castShadow)v.pushShadow(j)}}),A!==ie)A.traverseVisible(function(j){if(j.isLight&&j.layers.test(O.layers)){if(v.pushLight(j),j.castShadow)v.pushShadow(j)}});if(v.setupLights(),I!==null)I.updateLights(v.state.lightsArray);if(Be=this.localClippingEnabled,ye=te.init(this.clippingPlanes,Be),ye===!0)te.setGlobalState(this.clippingPlanes,O);if(I!==null)ce.render(v.state.shadowsArray,ie,O);let J=new Set;if(A.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;let Le=j.material;if(Le)if(Array.isArray(Le))for(let je=0;je<Le.length;je++){let De=Le[je];zn(De,ie,O,j),J.add(De)}else zn(Le,ie,O,j),J.add(Le)}),v=_.pop(),I!==null)I.renderEnd();return J},this.compileAsync=function(A,O,ie=null){let J=this.compile(A,O,ie);return new Promise((j)=>{function Le(){if(J.forEach(function(je){let Ve=de.get(je).currentProgram;if(Ve===void 0||Ve.isReady())J.delete(je)}),J.size===0){j(A);return}setTimeout(Le,10)}if(q.get("KHR_parallel_shader_compile")!==null)Le();else setTimeout(Le,10)})};let mf=null;function _1(A){if(mf)mf(A)}function dd(){Is.stop()}function pd(){Is.start()}let Is=new Gh;if(Is.setAnimationLoop(_1),typeof self<"u")Is.setContext(self);this.setAnimationLoop=function(A){mf=A,Je.setAnimationLoop(A),A===null?Is.stop():Is.start()},Je.addEventListener("sessionstart",dd),Je.addEventListener("sessionend",pd),this.render=function(A,O){if(O!==void 0&&O.isCamera!==!0){Ye("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(I!==null)I.renderStart(A,O);let ie=Je.enabled===!0&&Je.isPresenting===!0,J=S!==null&&(N===null||ie)&&S.begin(w,N);if(A.matrixWorldAutoUpdate===!0)A.updateMatrixWorld();if(O.parent===null&&O.matrixWorldAutoUpdate===!0)O.updateMatrixWorld();if(Je.enabled===!0&&Je.isPresenting===!0&&(S===null||S.isCompositing()===!1)){if(Je.cameraAutoUpdate===!0)Je.updateCamera(O);O=Je.getCamera()}if(A.isScene===!0)A.onBeforeRender(w,A,O,N);if(v=Ee.get(A,_.length),v.init(O),v.state.textureUnits=Me.getTextureUnits(),_.push(v),Fe.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),O.isArrayCamera)xe.setFromArrayCamera(O);else ue.setFromProjectionMatrix(Fe,zi,O.reversedDepth);if(Be=this.localClippingEnabled,ye=te.init(this.clippingPlanes,Be),b=ve.get(A,T.length),b.init(),T.push(b),this.info.render.frame++,Je.enabled===!0&&Je.isPresenting===!0){let je=w.xr.getDepthSensingMesh();if(je!==null)gf(je,O,-1/0,w.sortObjects)}if(gf(A,O,0,w.sortObjects),b.finish(),I!==null)I.updateLights(v.state.lightsArray);if(w.sortObjects===!0)b.sort(Ie,ft);if(Mt=Je.enabled===!1||Je.isPresenting===!1||Je.hasDepthSensing()===!1,Mt)me.addToRenderList(b,A);if(this.info.autoReset===!0)this.info.reset();if(ye===!0)te.beginShadows();let j=v.state.shadowsArray;if(ce.render(j,A,O),ye===!0)te.endShadows();if((J&&S.hasRenderPass())===!1){let je=b.opaque,De=b.transmissive;if(v.setupLights(),O.isArrayCamera){let Ve=O.cameras;if(De.length>0)for(let it=0,mt=Ve.length;it<mt;it++){let It=Ve[it];gd(je,De,A,It)}if(Mt)me.render(A);for(let it=0,mt=Ve.length;it<mt;it++){let It=Ve[it];md(b,A,It,It.viewport)}}else{if(De.length>0)gd(je,De,A,O);if(Mt)me.render(A);md(b,A,O)}}if(N!==null&&D===0)Me.updateMultisampleRenderTarget(N),Me.updateRenderTargetMipmap(N);if(J)S.end(w);if(A.isScene===!0)A.onAfterRender(w,A,O);if(we.resetDefaultState(),Q=-1,G=null,_.pop(),_.length>0){if(v=_[_.length-1],Me.setTextureUnits(v.state.textureUnits),ye===!0)te.setGlobalState(w.clippingPlanes,v.state.camera)}else v=null;if(T.pop(),T.length>0)b=T[T.length-1];else b=null;if(I!==null)I.renderEnd()};function gf(A,O,ie,J){if(A.visible===!1)return;if(A.layers.test(O.layers)){if(A.isGroup)ie=A.renderOrder;else if(A.isLOD){if(A.autoUpdate===!0)A.update(O)}else if(A.isLight){if(v.pushLight(A),A.castShadow)v.pushShadow(A)}else if(A.isSprite){let je=O.isArrayCamera?xe:ue;if(!A.frustumCulled||A.intersectsFrustum(je)){if(J)We.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Fe);let De=X.update(A),Ve=A.material;if(Ve.visible)b.push(A,De,Ve,ie,We.z,null,O)}}else if(A.isMesh||A.isLine||A.isPoints){let je=O.isArrayCamera?xe:ue;if(!A.frustumCulled||A.intersectsFrustum(je)){let De=X.update(A),Ve=A.material;if(J){if(A.boundingSphere!==void 0){if(A.boundingSphere===null)A.computeBoundingSphere();We.copy(A.boundingSphere.center)}else{if(De.boundingSphere===null)De.computeBoundingSphere();We.copy(De.boundingSphere.center)}We.applyMatrix4(A.matrixWorld).applyMatrix4(Fe)}if(Array.isArray(Ve)){let it=De.groups;for(let mt=0,It=it.length;mt<It;mt++){let $e=it[mt],Pt=Ve[$e.materialIndex];if(Pt&&Pt.visible)b.push(A,De,Pt,ie,We.z,$e,O)}}else if(Ve.visible)b.push(A,De,Ve,ie,We.z,null,O)}}}let Le=A.children;for(let je=0,De=Le.length;je<De;je++)gf(Le[je],O,ie,J)}function md(A,O,ie,J){let{opaque:j,transmissive:Le,transparent:je}=A;if(v.setupLightsView(ie),ye===!0)te.setGlobalState(w.clippingPlanes,ie);if(J)oe.viewport(z.copy(J));if(j.length>0)bc(j,O,ie);if(Le.length>0)bc(Le,O,ie);if(je.length>0)bc(je,O,ie);oe.buffers.depth.setTest(!0),oe.buffers.depth.setMask(!0),oe.buffers.color.setMask(!0),oe.setPolygonOffset(!1)}function gd(A,O,ie,J){if((ie.isScene===!0?ie.overrideMaterial:null)!==null)return;if(v.state.transmissionRenderTarget[J.id]===void 0){let $e=q.has("EXT_color_buffer_half_float")||q.has("EXT_color_buffer_float");v.state.transmissionRenderTarget[J.id]=new ii(1,1,{generateMipmaps:!0,type:$e?si:Mi,minFilter:Hi,samples:Math.max(4,pe.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ht.workingColorSpace})}let Le=v.state.transmissionRenderTarget[J.id],je=J.viewport||z;Le.setSize(je.z*w.transmissionResolutionScale,je.w*w.transmissionResolutionScale);let De=w.getRenderTarget(),Ve=w.getActiveCubeFace(),it=w.getActiveMipmapLevel();if(w.setRenderTarget(Le),w.getClearColor(k),ee=w.getClearAlpha(),ee<1)w.setClearColor(16777215,0.5);if(w.clear(),Mt)me.render(ie);let mt=w.toneMapping;w.toneMapping=Tn;let It=J.viewport;if(J.viewport!==void 0)J.viewport=void 0;if(v.setupLightsView(J),ye===!0)te.setGlobalState(w.clippingPlanes,J);if(bc(A,ie,J),Me.updateMultisampleRenderTarget(Le),Me.updateRenderTargetMipmap(Le),q.has("WEBGL_multisampled_render_to_texture")===!1){let $e=!1;for(let Pt=0,Ei=O.length;Pt<Ei;Pt++){let ei=O[Pt],{object:Jt,geometry:rn,material:Qe,group:dn}=ei;if(Qe.side===Ot&&Jt.layers.test(J.layers)){let kt=Qe.side;Qe.side=jt,Qe.needsUpdate=!0,xd(Jt,ie,J,rn,Qe,dn),Qe.side=kt,Qe.needsUpdate=!0,$e=!0}}if($e===!0)Me.updateMultisampleRenderTarget(Le),Me.updateRenderTargetMipmap(Le)}if(w.setRenderTarget(De,Ve,it),w.setClearColor(k,ee),It!==void 0)J.viewport=It;w.toneMapping=mt}function bc(A,O,ie){let J=O.isScene===!0?O.overrideMaterial:null;for(let j=0,Le=A.length;j<Le;j++){let je=A[j],{object:De,geometry:Ve,group:it}=je,mt=je.material;if(mt.allowOverride===!0&&J!==null)mt=J;if(De.layers.test(ie.layers))xd(De,O,ie,Ve,mt,it)}}function xd(A,O,ie,J,j,Le){if(I!==null&&j.isNodeMaterial)I.setObject(A,j);if(A.onBeforeRender(w,O,ie,J,j,Le),A.modelViewMatrix.multiplyMatrices(ie.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),j.onBeforeRender(w,O,ie,J,A,Le),j.transparent===!0&&j.side===Ot&&j.forceSinglePass===!1)j.side=jt,j.needsUpdate=!0,w.renderBufferDirect(ie,O,J,j,A,Le),j.side=Mn,j.needsUpdate=!0,w.renderBufferDirect(ie,O,J,j,A,Le),j.side=Ot;else w.renderBufferDirect(ie,O,J,j,A,Le);A.onAfterRender(w,O,ie,J,j,Le)}function _d(A){let O=0;for(let ie of A)if(ie.texture!==null)O++;return O}function wa(A,O,ie){if(O.isScene!==!0)O=at;let J=de.get(A),j=v.state.lights,Le=v.state.shadowsArray,je=j.state.version,De=ae.getParameters(A,j.state,Le,O,ie,v.state.lightProbeGridArray),Ve=ae.getProgramCacheKey(De),it=J.programs;J.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?O.environment:null,J.fog=O.fog;let mt=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;if(J.envMap=vt.get(A.envMap||J.environment,mt),J.envMapRotation=J.environment!==null&&A.envMap===null?O.environmentRotation:A.envMapRotation,it===void 0)A.addEventListener("dispose",Pe),it=new Map,J.programs=it,J.programVariants=new Map;let It=it.get(Ve);if(It!==void 0){if(J.currentProgram===It&&J.lightsStateVersion===je)return Md(A,De),It}else{if(De.uniforms=ae.getUniforms(A),I!==null&&A.isNodeMaterial)I.build(A,ie,De);A.onBeforeCompile(De,w),It=ae.acquireProgram(De,Ve),it.set(Ve,It),J.uniforms=De.uniforms}let $e=J.uniforms;if(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)$e.clippingPlanes=te.uniform;if(Md(A,De),J.needsLights=S1(A),J.lightsStateVersion=je,J.needsLights)$e.ambientLightColor.value=j.state.ambient,$e.lightProbe.value=j.state.probe,$e.sunLights.value=j.state.sun,$e.sunLightShadows.value=j.state.sunShadow,$e.directionalLights.value=j.state.directional,$e.directionalLightShadows.value=j.state.directionalShadow,$e.spotLights.value=j.state.spot,$e.spotLightShadows.value=j.state.spotShadow,$e.rectAreaLights.value=j.state.rectArea,$e.ltc_1.value=j.state.rectAreaLTC1,$e.ltc_2.value=j.state.rectAreaLTC2,$e.pointLights.value=j.state.point,$e.pointLightShadows.value=j.state.pointShadow,$e.hemisphereLights.value=j.state.hemi,$e.sunShadowMatrix.value=j.state.sunShadowMatrix,$e.sunShadowCascade.value=j.state.sunShadowCascade,$e.directionalShadowMatrix.value=j.state.directionalShadowMatrix,$e.spotLightMatrix.value=j.state.spotLightMatrix,$e.spotLightMap.value=j.state.spotLightMap,$e.pointShadowMatrix.value=j.state.pointShadowMatrix;return J.numLightProbeGrids=_d(v.state.lightProbeGridArray),J.currentProgram=It,J.uniformsList=null,It}function y1(A,O,ie,J,j){let Le=de.get(A),je=Le.currentProgram.id+","+J+","+j,De=Le.programVariants.get(je);if(De===void 0)De=wa(A,O,ie),Le.programVariants.set(je,De);else Le.currentProgram=De,Le.uniformsList=null,Le.outputColorSpace=J,Le.toneMapping=j;return De}function yd(A){if(A.uniformsList===null){let O=A.currentProgram.getUniforms();A.uniformsList=ho.seqWithValue(O.seq,A.uniforms)}return A.uniformsList}function Md(A,O){let ie=de.get(A);ie.outputColorSpace=O.outputColorSpace,ie.batching=O.batching,ie.batchingColor=O.batchingColor,ie.instancing=O.instancing,ie.instancingColor=O.instancingColor,ie.instancingMorph=O.instancingMorph,ie.skinning=O.skinning,ie.morphTargets=O.morphTargets,ie.morphNormals=O.morphNormals,ie.morphColors=O.morphColors,ie.morphTargetsCount=O.morphTargetsCount,ie.numClippingPlanes=O.numClippingPlanes,ie.numIntersection=O.numClipIntersection,ie.vertexAlphas=O.vertexAlphas,ie.vertexTangents=O.vertexTangents,ie.toneMapping=O.toneMapping}function M1(A,O,ie,J,j){if(O.isScene!==!0)O=at;Me.resetTextureUnits();let Le=O.fog,je=J.isMeshStandardMaterial||J.isMeshLambertMaterial||J.isMeshPhongMaterial?O.environment:null,De=N===null?w.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:ht.workingColorSpace,Ve=J.isMeshStandardMaterial||J.isMeshLambertMaterial&&!J.envMap||J.isMeshPhongMaterial&&!J.envMap,it=vt.get(J.envMap||je,Ve),mt=J.vertexColors===!0&&!!ie.attributes.color&&ie.attributes.color.itemSize===4,It=!!ie.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),$e=!!ie.morphAttributes.position,Pt=!!ie.morphAttributes.normal,Ei=!!ie.morphAttributes.color,ei=Tn;if(J.toneMapped){if(N===null||N.isXRRenderTarget===!0)ei=w.toneMapping}let Jt=ie.morphAttributes.position||ie.morphAttributes.normal||ie.morphAttributes.color,rn=Jt!==void 0?Jt.length:0,Qe=de.get(J),dn=v.state.lights;if(ye===!0){if(Be===!0||A!==G){let hi=A===G&&J.id===Q;te.setState(J,A,hi)}}let kt=!1,Ps=!1;if(J.version===Qe.__version){if(Qe.needsLights&&Qe.lightsStateVersion!==dn.state.version)kt=!0;else if(j.isBatchedMesh&&Qe.batching===!1)kt=!0;else if(!j.isBatchedMesh&&Qe.batching===!0)kt=!0;else if(j.isBatchedMesh&&Qe.batchingColor===!0&&j._colorsTexture===null)kt=!0;else if(j.isBatchedMesh&&Qe.batchingColor===!1&&j._colorsTexture!==null)kt=!0;else if(j.isInstancedMesh&&Qe.instancing===!1)kt=!0;else if(!j.isInstancedMesh&&Qe.instancing===!0)kt=!0;else if(j.isSkinnedMesh&&Qe.skinning===!1)kt=!0;else if(!j.isSkinnedMesh&&Qe.skinning===!0)kt=!0;else if(j.isInstancedMesh&&Qe.instancingColor===!0&&j.instanceColor===null)kt=!0;else if(j.isInstancedMesh&&Qe.instancingColor===!1&&j.instanceColor!==null)kt=!0;else if(j.isInstancedMesh&&Qe.instancingMorph===!0&&j.morphTexture===null)kt=!0;else if(j.isInstancedMesh&&Qe.instancingMorph===!1&&j.morphTexture!==null)kt=!0;else if(Qe.envMap!==it)kt=!0;else if(J.fog===!0&&Qe.fog!==Le)kt=!0;else if(Qe.numClippingPlanes!==void 0&&(Qe.numClippingPlanes!==te.numPlanes||Qe.numIntersection!==te.numIntersection))kt=!0;else if(Qe.vertexAlphas!==mt)kt=!0;else if(Qe.vertexTangents!==It)kt=!0;else if(Qe.morphTargets!==$e)kt=!0;else if(Qe.morphNormals!==Pt)kt=!0;else if(Qe.morphColors!==Ei)kt=!0;else if(Qe.morphTargetsCount!==rn)kt=!0;else if(Qe.numLightProbeGrids!==_d(v.state.lightProbeGridArray))kt=!0;else if(Qe.outputColorSpace!==De||Qe.toneMapping!==ei)Ps=!0}else kt=!0,Qe.__version=J.version;let sn=Qe.currentProgram;if(kt===!0||Ps===!0){if(sn=Ps===!0?y1(J,O,j,De,ei):wa(J,O,j),I&&J.isNodeMaterial)I.onUpdateProgram(J,sn,Qe)}let Tc=!1,es=!1,Ls=!1,Bt=sn.getUniforms(),Zi=Qe.uniforms;if(oe.useProgram(sn.program))Tc=!0,es=!0,Ls=!0;if(J.id!==Q)Q=J.id,es=!0;if(Tc||G!==A){if(oe.buffers.depth.getReversed()&&A.reversedDepth!==!0)A._reversedDepth=!0,A.updateProjectionMatrix();Bt.setValue(H,"projectionMatrix",A.projectionMatrix),Bt.setValue(H,"viewMatrix",A.matrixWorldInverse);let Oi=Bt.map.cameraPosition;if(Oi!==void 0)Oi.setValue(H,nt.setFromMatrixPosition(A.matrixWorld));if(pe.logarithmicDepthBuffer)Bt.setValue(H,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2));if(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)Bt.setValue(H,"isOrthographic",A.isOrthographicCamera===!0);if(G!==A)G=A,es=!0,Ls=!0}if(Qe.needsLights){if(dn.state.sunShadowMap.length>0)Bt.setValue(H,"sunShadowMap",dn.state.sunShadowMap,Me);if(dn.state.directionalShadowMap.length>0)Bt.setValue(H,"directionalShadowMap",dn.state.directionalShadowMap,Me);if(dn.state.spotShadowMap.length>0)Bt.setValue(H,"spotShadowMap",dn.state.spotShadowMap,Me);if(dn.state.pointShadowMap.length>0)Bt.setValue(H,"pointShadowMap",dn.state.pointShadowMap,Me)}if(j.isSkinnedMesh){Bt.setOptional(H,j,"bindMatrix"),Bt.setOptional(H,j,"bindMatrixInverse");let hi=j.skeleton;if(hi){if(hi.boneTexture===null)hi.computeBoneTexture();Bt.setValue(H,"boneTexture",hi.boneTexture,Me)}}if(j.isBatchedMesh){if(Bt.setOptional(H,j,"batchingTexture"),Bt.setValue(H,"batchingTexture",j._matricesTexture,Me),Bt.setOptional(H,j,"batchingIdTexture"),Bt.setValue(H,"batchingIdTexture",j._indirectTexture,Me),Bt.setOptional(H,j,"batchingColorTexture"),j._colorsTexture!==null)Bt.setValue(H,"batchingColorTexture",j._colorsTexture,Me)}let ir=ie.morphAttributes;if(ir.position!==void 0||ir.normal!==void 0||ir.color!==void 0)F.update(j,ie,sn);if(es||Qe.receiveShadow!==j.receiveShadow)Qe.receiveShadow=j.receiveShadow,Bt.setValue(H,"receiveShadow",j.receiveShadow);if((J.isMeshStandardMaterial||J.isMeshLambertMaterial||J.isMeshPhongMaterial)&&J.envMap===null&&O.environment!==null)Zi.envMapIntensity.value=O.environmentIntensity;if(Zi.dfgLUT!==void 0)Zi.dfgLUT.value=r_();if(es){if(Bt.setValue(H,"toneMappingExposure",w.toneMappingExposure),Qe.needsLights)v1(Zi,Ls);if(Le&&J.fog===!0)he.refreshFogUniforms(Zi,Le);if(he.refreshMaterialUniforms(Zi,J,He,_e,v.state.transmissionRenderTarget[A.id]),Qe.needsLights&&Qe.numLightProbeGrids>0){let hi=M,Oi=0;for(let Pr of v.state.lightProbeGridArray){if(Pr.texture===null)continue;hi.textures[Oi]=Pr.texture,hi.min[Oi]=Pr.boundingBox.min,hi.max[Oi]=Pr.boundingBox.max,hi.resolution[Oi]=Pr.resolution,Oi++}for(let Pr in hi)hi[Pr].length=Oi;Zi.probesSH.value=hi.textures,Zi.probesMin.value=hi.min,Zi.probesMax.value=hi.max,Zi.probesResolution.value=hi.resolution}ho.upload(H,yd(Qe),Zi,Me)}if(J.isShaderMaterial&&J.uniformsNeedUpdate===!0)ho.upload(H,yd(Qe),Zi,Me),J.uniformsNeedUpdate=!1;if(J.isSpriteMaterial)Bt.setValue(H,"center",j.center);if(Bt.setValue(H,"modelViewMatrix",j.modelViewMatrix),Bt.setValue(H,"normalMatrix",j.normalMatrix),Bt.setValue(H,"modelMatrix",j.matrixWorld),J.uniformsGroups!==void 0){let hi=J.uniformsGroups;for(let Oi=0,Pr=hi.length;Oi<Pr;Oi++){let Sd=hi[Oi];Ae.update(Sd,sn),Ae.bind(Sd,sn)}}return sn}function v1(A,O){A.ambientLightColor.needsUpdate=O,A.lightProbe.needsUpdate=O,A.sunLights.needsUpdate=O,A.sunLightShadows.needsUpdate=O,A.directionalLights.needsUpdate=O,A.directionalLightShadows.needsUpdate=O,A.pointLights.needsUpdate=O,A.pointLightShadows.needsUpdate=O,A.spotLights.needsUpdate=O,A.spotLightShadows.needsUpdate=O,A.rectAreaLights.needsUpdate=O,A.hemisphereLights.needsUpdate=O}function S1(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return V},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(A,O,ie){let J=de.get(A);if(J.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,J.__autoAllocateDepthBuffer===!1)J.__useRenderToTexture=!1;de.get(A.texture).__webglTexture=O,de.get(A.depthTexture).__webglTexture=J.__autoAllocateDepthBuffer?void 0:ie,J.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,O){let ie=de.get(A);ie.__webglFramebuffer=O,ie.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(A,O=0,ie=0){N=A,V=O,D=ie;let J=null,j=!1,Le=!1;if(A){let De=de.get(A);if(De.__useDefaultFramebuffer!==void 0){oe.bindFramebuffer(H.FRAMEBUFFER,De.__webglFramebuffer),z.copy(A.viewport),Y.copy(A.scissor),le=A.scissorTest,oe.viewport(z),oe.scissor(Y),oe.setScissorTest(le),Q=-1;return}else if(De.__webglFramebuffer===void 0)Me.setupRenderTarget(A);else if(De.__hasExternalTextures)Me.rebindTextures(A,de.get(A.texture).__webglTexture,de.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){let mt=A.depthTexture;if(De.__boundDepthTexture!==mt){if(mt!==null&&de.has(mt)&&(A.width!==mt.image.width||A.height!==mt.image.height))throw Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Me.setupDepthRenderbuffer(A)}}let Ve=A.texture;if(Ve.isData3DTexture||Ve.isDataArrayTexture||Ve.isCompressedArrayTexture)Le=!0;let it=de.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget){if(Array.isArray(it[O]))J=it[O][ie];else J=it[O];j=!0}else if(A.samples>0&&Me.useMultisampledRTT(A)===!1)J=de.get(A).__webglMultisampledFramebuffer;else if(Array.isArray(it))J=it[ie];else J=it;z.copy(A.viewport),Y.copy(A.scissor),le=A.scissorTest}else z.copy(ze).multiplyScalar(He).floor(),Y.copy(ke).multiplyScalar(He).floor(),le=pt;if(ie!==0)J=U;if(oe.bindFramebuffer(H.FRAMEBUFFER,J))oe.drawBuffers(A,J);if(oe.viewport(z),oe.scissor(Y),oe.setScissorTest(le),j){let De=de.get(A.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+O,De.__webglTexture,ie)}else if(Le){let De=O;for(let Ve=0;Ve<A.textures.length;Ve++){let it=de.get(A.textures[Ve]);H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0+Ve,it.__webglTexture,ie,De)}}else if(A!==null&&ie!==0){let De=de.get(A.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,De.__webglTexture,ie)}Q=-1};function vd(A){let O=de.get(A);if(O.__readFormat!==A.format||O.__readType!==A.type)O.__readFormat=A.format,O.__readType=A.type,O.__formatReadable=pe.textureFormatReadable(A.format),O.__typeReadable=pe.textureTypeReadable(A.type);return O}if(this.readRenderTargetPixels=function(A,O,ie,J,j,Le,je,De=0){if(!(A&&A.isWebGLRenderTarget)){Ye("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ve=de.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&je!==void 0){if(Ve=Ve[je],Array.isArray(Ve))Ve=Ve[0]}if(Ve){oe.bindFramebuffer(H.FRAMEBUFFER,Ve);try{let it=A.textures[De],{format:mt,type:It}=it;if(A.textures.length>1)H.readBuffer(H.COLOR_ATTACHMENT0+De);let $e=vd(it);if($e.__formatReadable===!1){Ye("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if($e.__typeReadable===!1){Ye("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}if(O>=0&&O<=A.width-J&&(ie>=0&&ie<=A.height-j))H.readPixels(O,ie,J,j,Se.convert(mt),Se.convert(It),Le)}finally{let it=N!==null?de.get(N).__webglFramebuffer:null;oe.bindFramebuffer(H.FRAMEBUFFER,it)}}},this.readRenderTargetPixelsAsync=async function(A,O,ie,J,j,Le,je,De=0){if(!(A&&A.isWebGLRenderTarget))throw Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ve=de.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&je!==void 0){if(Ve=Ve[je],Array.isArray(Ve))Ve=Ve[0]}if(Ve)if(O>=0&&O<=A.width-J&&(ie>=0&&ie<=A.height-j)){oe.bindFramebuffer(H.FRAMEBUFFER,Ve);let it=A.textures[De],{format:mt,type:It}=it;if(A.textures.length>1)H.readBuffer(H.COLOR_ATTACHMENT0+De);let $e=vd(it);if($e.__formatReadable===!1)throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if($e.__typeReadable===!1)throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Pt=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,Pt),H.bufferData(H.PIXEL_PACK_BUFFER,Le.byteLength,H.STREAM_READ),H.readPixels(O,ie,J,j,Se.convert(mt),Se.convert(It),0),H.bindBuffer(H.PIXEL_PACK_BUFFER,null);let Ei=N!==null?de.get(N).__webglFramebuffer:null;oe.bindFramebuffer(H.FRAMEBUFFER,Ei);let ei=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await sp(H,ei,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,Pt),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,Le),H.bindBuffer(H.PIXEL_PACK_BUFFER,null),H.deleteBuffer(Pt),H.deleteSync(ei),Le}else throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,O=null,ie=0){let J=Math.pow(2,-ie),j=Math.floor(A.image.width*J),Le=Math.floor(A.image.height*J),je=O!==null?O.x:0,De=O!==null?O.y:0;Me.setTexture2D(A,0),H.copyTexSubImage2D(H.TEXTURE_2D,ie,0,0,je,De,j,Le),oe.unbindTexture()},this.copyTextureToTexture=function(A,O,ie=null,J=null,j=0,Le=0){let je,De,Ve,it,mt,It,$e,Pt,Ei,ei=A.isCompressedTexture?A.mipmaps[Le]:A.image;if(ie!==null)je=ie.max.x-ie.min.x,De=ie.max.y-ie.min.y,Ve=ie.isBox3?ie.max.z-ie.min.z:1,it=ie.min.x,mt=ie.min.y,It=ie.isBox3?ie.min.z:0;else{let Bt=Math.pow(2,-j);if(je=Math.floor(A.width*Bt),De=Math.floor(A.height*Bt),A.isDataArrayTexture)Ve=ei.depth;else if(A.isData3DTexture)Ve=Math.floor(ei.depth*Bt);else Ve=1;it=0,mt=0,It=0}if(J!==null)$e=J.x,Pt=J.y,Ei=J.z;else $e=0,Pt=0,Ei=0;let Jt=Se.convert(O.format),rn=Se.convert(O.type),Qe;if(O.isData3DTexture)Me.setTexture3D(O,0),Qe=H.TEXTURE_3D;else if(O.isDataArrayTexture||O.isCompressedArrayTexture)Me.setTexture2DArray(O,0),Qe=H.TEXTURE_2D_ARRAY;else Me.setTexture2D(O,0),Qe=H.TEXTURE_2D;oe.activeTexture(H.TEXTURE0),oe.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,O.flipY),oe.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),oe.pixelStorei(H.UNPACK_ALIGNMENT,O.unpackAlignment);let dn=oe.getParameter(H.UNPACK_ROW_LENGTH),kt=oe.getParameter(H.UNPACK_IMAGE_HEIGHT),Ps=oe.getParameter(H.UNPACK_SKIP_PIXELS),sn=oe.getParameter(H.UNPACK_SKIP_ROWS),Tc=oe.getParameter(H.UNPACK_SKIP_IMAGES);oe.pixelStorei(H.UNPACK_ROW_LENGTH,ei.width),oe.pixelStorei(H.UNPACK_IMAGE_HEIGHT,ei.height),oe.pixelStorei(H.UNPACK_SKIP_PIXELS,it),oe.pixelStorei(H.UNPACK_SKIP_ROWS,mt),oe.pixelStorei(H.UNPACK_SKIP_IMAGES,It);let es=A.isDataArrayTexture||A.isData3DTexture,Ls=O.isDataArrayTexture||O.isData3DTexture;if(A.isDepthTexture){let Bt=de.get(A),Zi=de.get(O),ir=de.get(Bt.__renderTarget),hi=de.get(Zi.__renderTarget);oe.bindFramebuffer(H.READ_FRAMEBUFFER,ir.__webglFramebuffer),oe.bindFramebuffer(H.DRAW_FRAMEBUFFER,hi.__webglFramebuffer);for(let Oi=0;Oi<Ve;Oi++){if(es)H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,de.get(A).__webglTexture,j,It+Oi),H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,de.get(O).__webglTexture,Le,Ei+Oi);H.blitFramebuffer(it,mt,it+je,mt+De,$e,Pt,$e+je,Pt+De,H.DEPTH_BUFFER_BIT,H.NEAREST)}oe.bindFramebuffer(H.READ_FRAMEBUFFER,null),oe.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else if(j!==0||A.isRenderTargetTexture||de.has(A)){let Bt=de.get(A),Zi=de.get(O);oe.bindFramebuffer(H.READ_FRAMEBUFFER,K),oe.bindFramebuffer(H.DRAW_FRAMEBUFFER,P);for(let ir=0;ir<Ve;ir++){if(es)H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Bt.__webglTexture,j,It+ir);else H.framebufferTexture2D(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Bt.__webglTexture,j);if(Ls)H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Zi.__webglTexture,Le,Ei+ir);else H.framebufferTexture2D(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Zi.__webglTexture,Le);if(j!==0)H.blitFramebuffer(it,mt,it+je,mt+De,$e,Pt,$e+je,Pt+De,H.COLOR_BUFFER_BIT,H.NEAREST);else if(Ls)H.copyTexSubImage3D(Qe,Le,$e,Pt,Ei+ir,it,mt,je,De);else H.copyTexSubImage2D(Qe,Le,$e,Pt,it,mt,je,De)}oe.bindFramebuffer(H.READ_FRAMEBUFFER,null),oe.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else if(Ls)if(A.isDataTexture||A.isData3DTexture)H.texSubImage3D(Qe,Le,$e,Pt,Ei,je,De,Ve,Jt,rn,ei.data);else if(O.isCompressedArrayTexture)H.compressedTexSubImage3D(Qe,Le,$e,Pt,Ei,ei.width,ei.height,Ve,Jt,ei.data);else H.texSubImage3D(Qe,Le,$e,Pt,Ei,je,De,Ve,Jt,rn,ei);else if(A.isDataTexture)H.texSubImage2D(H.TEXTURE_2D,Le,$e,Pt,je,De,Jt,rn,ei.data);else if(A.isCompressedTexture)H.compressedTexSubImage2D(H.TEXTURE_2D,Le,$e,Pt,ei.width,ei.height,Jt,ei.data);else H.texSubImage2D(H.TEXTURE_2D,Le,$e,Pt,je,De,Jt,rn,ei);if(oe.pixelStorei(H.UNPACK_ROW_LENGTH,dn),oe.pixelStorei(H.UNPACK_IMAGE_HEIGHT,kt),oe.pixelStorei(H.UNPACK_SKIP_PIXELS,Ps),oe.pixelStorei(H.UNPACK_SKIP_ROWS,sn),oe.pixelStorei(H.UNPACK_SKIP_IMAGES,Tc),Le===0&&O.generateMipmaps===!0&&O.mipmapsAutoUpdate===!0)H.generateMipmap(Qe);oe.unbindTexture()},this.initRenderTarget=function(A){if(de.get(A).__webglFramebuffer===void 0)Me.setupRenderTarget(A)},this.initTexture=function(A){if(A.isCubeTexture)Me.setTextureCube(A,0);else if(A.isData3DTexture)Me.setTexture3D(A,0);else if(A.isDataArrayTexture||A.isCompressedArrayTexture)Me.setTexture2DArray(A,0);else Me.setTexture2D(A,0);oe.unbindTexture()},this.resetState=function(){V=0,D=0,N=null,oe.reset(),we.reset()},typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return zi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=ht._getDrawingBufferColorSpace(e),t.unpackColorSpace=ht._getUnpackColorSpace()}}function o_(e,t=!1){let i=e[0].index!==null,n=new Set(Object.keys(e[0].attributes)),r=new Set(Object.keys(e[0].morphAttributes)),s={},o={},a=e[0].morphTargetsRelative,l=new Xe;l.morphTargetsRelative=a;let c=0;for(let h=0;h<e.length;++h){let u=e[h],f=0,m=0;if(i!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let g in u.attributes){if(!n.has(g))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+g+'" attribute exists among all geometries, or in none of them.'),null;if(s[g]===void 0)s[g]=[];s[g].push(u.attributes[g]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let g in u.morphAttributes){if(!r.has(g))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;if(u.morphAttributes[g].length!==e[0].morphAttributes[g].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have the same number of morph targets for the "'+g+'" morph attribute.'),null;if(o[g]===void 0)o[g]=[];o[g].push(u.morphAttributes[g]),m++}if(m!==r.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of morph attributes."),null;if(t){let g;if(i)g=u.index.count;else if(u.attributes.position!==void 0)g=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,g,h),c+=g}}if(i){let h=0,u=[];for(let f=0;f<e.length;++f){let m=e[f].index;for(let g=0;g<m.count;++g)u.push(m.getX(g)+h);h+=e[f].attributes.position.count}l.setIndex(u)}for(let h in s){let u=s_(s[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(let h in o){let u=o[h][0].length;if(u===0)continue;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let f=0;f<u;++f){let m=[];for(let x=0;x<o[h].length;++x)m.push(o[h][x][f]);let g=s_(m);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}return l}function s_(e){let t,i,n,r=-1,s=0;for(let c=0;c<e.length;++c){let h=e[c];if(t===void 0)t=h.array.constructor;if(t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(i===void 0)i=h.itemSize;if(i!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0)n=h.normalized;if(n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(r===-1)r=h.gpuType;if(r!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=h.count*i}let o=new t(s),a=new Zt(o,i,n),l=0;for(let c=0;c<e.length;++c){let h=e[c];if(h.isInterleavedBufferAttribute){let u=l/i;for(let f=0,m=h.count;f<m;f++)for(let g=0;g<i;g++){let x=h.getComponent(f,g);a.setComponent(f+u,g,x)}}else o.set(h.array,l);l+=h.count*i}if(r!==void 0)a.gpuType=r;return a}function Cu(e,t){if(t===qd)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),e;if(t===ml||t===Hc){let i=e.getIndex();if(i===null){let s=[],o=e.getAttribute("position");if(o!==void 0){for(let a=0;a<o.count;a++)s.push(a);e.setIndex(s),i=e.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),e}let n=i.count-2,r=[];if(t===ml)for(let s=1;s<=n;s++)r.push(i.getX(0)),r.push(i.getX(s)),r.push(i.getX(s+1));else for(let s=0;s<n;s++)if(s%2===0)r.push(i.getX(s)),r.push(i.getX(s+1)),r.push(i.getX(s+2));else r.push(i.getX(s+2)),r.push(i.getX(s+1)),r.push(i.getX(s));if(r.length/3!==n)console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");return e.setIndex(r),e.clearGroups(),e}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",t),e}function a_(e){let t=new Map,i=new Map,n=e.clone();return l_(e,n,function(r,s){t.set(s,r),i.set(r,s)}),n.traverse(function(r){if(!r.isSkinnedMesh)return;let s=r,o=t.get(r),a=o.skeleton.bones;s.skeleton=o.skeleton.clone(),s.bindMatrix.copy(o.bindMatrix),s.skeleton.bones=a.map(function(l){return i.get(l)}),s.bind(s.skeleton,s.bindMatrix)}),n}function l_(e,t,i){i(e,t);for(let n=0;n<e.children.length;n++)l_(e.children[n],t.children[n],i)}class Uu extends Ti{constructor(e){super(e);this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new g_(t)}),this.register(function(t){return new x_(t)}),this.register(function(t){return new __(t)}),this.register(function(t){return new A_(t)}),this.register(function(t){return new R_(t)}),this.register(function(t){return new C_(t)}),this.register(function(t){return new M_(t)}),this.register(function(t){return new v_(t)}),this.register(function(t){return new S_(t)}),this.register(function(t){return new b_(t)}),this.register(function(t){return new m_(t)}),this.register(function(t){return new T_(t)}),this.register(function(t){return new y_(t)}),this.register(function(t){return new w_(t)}),this.register(function(t){return new E_(t)}),this.register(function(t){return new d_(t)}),this.register(function(t){return new Du(t,bt.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new Du(t,bt.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new I_(t)})}load(e,t,i,n){let r=this,s;if(this.resourcePath!=="")s=this.resourcePath;else if(this.path!==""){let l=Jr.extractUrlBase(e);s=Jr.resolveURL(l,this.path)}else s=Jr.extractUrlBase(e);this.manager.itemStart(e);let o=function(l){if(n)n(l);else console.error(l);r.manager.itemError(e),r.manager.itemEnd(e)},a=new Jn(this.manager);a.setPriority(this.priority),a.setCache(this.cache),a.setPath(this.path),a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(l){try{r.parse(l,s,function(c){t(c),r.manager.itemEnd(e)},o)}catch(c){o(c)}},i,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){if(this.pluginCallbacks.indexOf(e)===-1)this.pluginCallbacks.push(e);return this}unregister(e){if(this.pluginCallbacks.indexOf(e)!==-1)this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1);return this}parse(e,t,i,n){let r,s={},o={},a=new TextDecoder;if(typeof e==="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(a.decode(new Uint8Array(e,0,4))===P_){try{s[bt.KHR_BINARY_GLTF]=new L_(e)}catch(h){if(n)n(h);return}r=JSON.parse(s[bt.KHR_BINARY_GLTF].content)}else r=JSON.parse(a.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){if(n)n(Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let l=new B_(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,priority:this.priority,cache:this.cache,withCredentials:this.withCredentials,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let c=0;c<this.pluginCallbacks.length;c++){let h=this.pluginCallbacks[c](l);if(!h.name)console.error("THREE.GLTFLoader: Invalid plugin found: missing name");o[h.name]=h,s[h.name]=!0}if(r.extensionsUsed)for(let c=0;c<r.extensionsUsed.length;++c){let h=r.extensionsUsed[c],u=r.extensionsRequired||[];switch(h){case bt.KHR_MATERIALS_UNLIT:s[h]=new p_;break;case bt.KHR_DRACO_MESH_COMPRESSION:s[h]=new D_(r,this.dracoLoader);break;case bt.KHR_TEXTURE_TRANSFORM:s[h]=new N_;break;case bt.KHR_MESH_QUANTIZATION:s[h]=new F_;break;default:if(u.indexOf(h)>=0&&o[h]===void 0)console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}l.setExtensions(s),l.setPlugins(o),l.parse(i,n)}parseAsync(e,t){let i=this;return new Promise(function(n,r){i.parse(e,t,n,r)})}}function gS(){let e={};return{get:function(t){return e[t]},add:function(t,i){e[t]=i},remove:function(t){delete e[t]},removeAll:function(){e={}}}}function di(e,t,i){let n=e.json.materials[t];if(n.extensions&&n.extensions[i])return n.extensions[i];return null}var bt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DIFFUSE_ROUGHNESS:"KHR_materials_diffuse_roughness",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class d_{constructor(e){this.parser=e,this.name=bt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let i=0,n=t.length;i<n;i++){let r=t[i];if(r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0)e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,i="light:"+e,n=t.cache.get(i);if(n)return n;let r=t.json,a=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],l,c=new ge(16777215);if(a.color!==void 0)c.setRGB(a.color[0],a.color[1],a.color[2],Ki);let h=a.range!==void 0?a.range:0;switch(a.type){case"directional":l=new Ql(c),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new ur(c),l.distance=h;break;case"spot":l=new $l(c),l.distance=h,a.spot=a.spot||{},a.spot.innerConeAngle=a.spot.innerConeAngle!==void 0?a.spot.innerConeAngle:0,a.spot.outerConeAngle=a.spot.outerConeAngle!==void 0?a.spot.outerConeAngle:Math.PI/4,l.angle=a.spot.outerConeAngle,l.penumbra=1-a.spot.innerConeAngle/a.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw Error("THREE.GLTFLoader: Unexpected light type: "+a.type)}if(l.position.set(0,0,0),wr(l,a),a.intensity!==void 0)l.intensity=a.intensity;return l.name=t.createUniqueName(a.name||"light_"+e),n=Promise.resolve(l),t.cache.add(i,n),n}getDependency(e,t){if(e!=="light")return;return this._loadLight(t)}createNodeAttachment(e){let t=this,i=this.parser,r=i.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;if(o===void 0)return null;return this._loadLight(o).then(function(a){return i._getNodeRef(t.cache,o,a)})}}class p_{constructor(){this.name=bt.KHR_MATERIALS_UNLIT}getMaterialType(){return gt}extendParams(e,t,i){let n=[];e.color=new ge(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let s=r.baseColorFactor;e.color.setRGB(s[0],s[1],s[2],Ki),e.opacity=s[3]}if(r.baseColorTexture!==void 0)n.push(i.assignTexture(e,"map",r.baseColorTexture,_t))}return Promise.all(n)}}class m_{constructor(e){this.parser=e,this.name=bt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let i=di(this.parser,e,this.name);if(i===null)return Promise.resolve();if(i.emissiveStrength!==void 0)t.emissiveIntensity=i.emissiveStrength;return Promise.resolve()}}class g_{constructor(e){this.parser=e,this.name=bt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return di(this.parser,e,this.name)!==null?ki:null}extendMaterialParams(e,t){let i=di(this.parser,e,this.name);if(i===null)return Promise.resolve();let n=[];if(i.clearcoatFactor!==void 0)t.clearcoat=i.clearcoatFactor;if(i.clearcoatTexture!==void 0)n.push(this.parser.assignTexture(t,"clearcoatMap",i.clearcoatTexture));if(i.clearcoatRoughnessFactor!==void 0)t.clearcoatRoughness=i.clearcoatRoughnessFactor;if(i.clearcoatRoughnessTexture!==void 0)n.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",i.clearcoatRoughnessTexture));if(i.clearcoatNormalTexture!==void 0){if(n.push(this.parser.assignTexture(t,"clearcoatNormalMap",i.clearcoatNormalTexture)),i.clearcoatNormalTexture.scale!==void 0){let r=i.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Z(r,r)}}return Promise.all(n)}}class x_{constructor(e){this.parser=e,this.name=bt.KHR_MATERIALS_DIFFUSE_ROUGHNESS}getMaterialType(e){return di(this.parser,e,this.name)!==null?ki:null}extendMaterialParams(e,t){let i=di(this.parser,e,this.name);if(i===null)return Promise.resolve();let n=[];if(t.diffuseRoughness=i.diffuseRoughnessFactor!==void 0?i.diffuseRoughnessFactor:0,i.diffuseRoughnessTexture!==void 0)n.push(this.parser.assignTexture(t,"diffuseRoughnessMap",i.diffuseRoughnessTexture));return Promise.all(n)}}class __{constructor(e){this.parser=e,this.name=bt.KHR_MATERIALS_DISPERSION}getMaterialType(e){return di(this.parser,e,this.name)!==null?ki:null}extendMaterialParams(e,t){let i=di(this.parser,e,this.name);if(i===null)return Promise.resolve();return t.dispersion=i.dispersion!==void 0?i.dispersion:0,Promise.resolve()}}class y_{constructor(e){this.parser=e,this.name=bt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return di(this.parser,e,this.name)!==null?ki:null}extendMaterialParams(e,t){let i=di(this.parser,e,this.name);if(i===null)return Promise.resolve();let n=[];if(i.iridescenceFactor!==void 0)t.iridescence=i.iridescenceFactor;if(i.iridescenceTexture!==void 0)n.push(this.parser.assignTexture(t,"iridescenceMap",i.iridescenceTexture));if(i.iridescenceIor!==void 0)t.iridescenceIOR=i.iridescenceIor;if(i.iridescenceThicknessMinimum!==void 0)t.iridescenceThicknessMinimum=i.iridescenceThicknessMinimum;if(i.iridescenceThicknessMaximum!==void 0)t.iridescenceThicknessMaximum=i.iridescenceThicknessMaximum;if(i.iridescenceThicknessTexture!==void 0)n.push(this.parser.assignTexture(t,"iridescenceThicknessMap",i.iridescenceThicknessTexture));return Promise.all(n)}}class M_{constructor(e){this.parser=e,this.name=bt.KHR_MATERIALS_SHEEN}getMaterialType(e){return di(this.parser,e,this.name)!==null?ki:null}extendMaterialParams(e,t){let i=di(this.parser,e,this.name);if(i===null)return Promise.resolve();let n=[];if(t.sheenColor=new ge(0,0,0),t.sheenRoughness=0,t.sheen=1,i.sheenColorFactor!==void 0){let r=i.sheenColorFactor;t.sheenColor.setRGB(r[0],r[1],r[2],Ki)}if(i.sheenRoughnessFactor!==void 0)t.sheenRoughness=i.sheenRoughnessFactor;if(i.sheenColorTexture!==void 0)n.push(this.parser.assignTexture(t,"sheenColorMap",i.sheenColorTexture,_t));if(i.sheenRoughnessTexture!==void 0)n.push(this.parser.assignTexture(t,"sheenRoughnessMap",i.sheenRoughnessTexture));return Promise.all(n)}}class v_{constructor(e){this.parser=e,this.name=bt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return di(this.parser,e,this.name)!==null?ki:null}extendMaterialParams(e,t){let i=di(this.parser,e,this.name);if(i===null)return Promise.resolve();let n=[];if(i.transmissionFactor!==void 0)t.transmission=i.transmissionFactor;if(i.transmissionTexture!==void 0)n.push(this.parser.assignTexture(t,"transmissionMap",i.transmissionTexture));return Promise.all(n)}}class S_{constructor(e){this.parser=e,this.name=bt.KHR_MATERIALS_VOLUME}getMaterialType(e){return di(this.parser,e,this.name)!==null?ki:null}extendMaterialParams(e,t){let i=di(this.parser,e,this.name);if(i===null)return Promise.resolve();let n=[];if(t.thickness=i.thicknessFactor!==void 0?i.thicknessFactor:0,i.thicknessTexture!==void 0)n.push(this.parser.assignTexture(t,"thicknessMap",i.thicknessTexture));t.attenuationDistance=i.attenuationDistance||1/0;let r=i.attenuationColor||[1,1,1];return t.attenuationColor=new ge().setRGB(r[0],r[1],r[2],Ki),Promise.all(n)}}class b_{constructor(e){this.parser=e,this.name=bt.KHR_MATERIALS_IOR}getMaterialType(e){return di(this.parser,e,this.name)!==null?ki:null}extendMaterialParams(e,t){let i=di(this.parser,e,this.name);if(i===null)return Promise.resolve();if(t.ior=i.ior!==void 0?i.ior:1.5,t.ior===0)t.ior=1000;return Promise.resolve()}}class T_{constructor(e){this.parser=e,this.name=bt.KHR_MATERIALS_SPECULAR}getMaterialType(e){return di(this.parser,e,this.name)!==null?ki:null}extendMaterialParams(e,t){let i=di(this.parser,e,this.name);if(i===null)return Promise.resolve();let n=[];if(t.specularIntensity=i.specularFactor!==void 0?i.specularFactor:1,i.specularTexture!==void 0)n.push(this.parser.assignTexture(t,"specularIntensityMap",i.specularTexture));let r=i.specularColorFactor||[1,1,1];if(t.specularColor=new ge().setRGB(r[0],r[1],r[2],Ki),i.specularColorTexture!==void 0)n.push(this.parser.assignTexture(t,"specularColorMap",i.specularColorTexture,_t));return Promise.all(n)}}class E_{constructor(e){this.parser=e,this.name=bt.EXT_MATERIALS_BUMP}getMaterialType(e){return di(this.parser,e,this.name)!==null?ki:null}extendMaterialParams(e,t){let i=di(this.parser,e,this.name);if(i===null)return Promise.resolve();let n=[];if(t.bumpScale=i.bumpFactor!==void 0?i.bumpFactor:1,i.bumpTexture!==void 0)n.push(this.parser.assignTexture(t,"bumpMap",i.bumpTexture));return Promise.all(n)}}class w_{constructor(e){this.parser=e,this.name=bt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return di(this.parser,e,this.name)!==null?ki:null}extendMaterialParams(e,t){let i=di(this.parser,e,this.name);if(i===null)return Promise.resolve();let n=[];if(i.anisotropyStrength!==void 0)t.anisotropy=i.anisotropyStrength;if(i.anisotropyRotation!==void 0)t.anisotropyRotation=i.anisotropyRotation;if(i.anisotropyTexture!==void 0)n.push(this.parser.assignTexture(t,"anisotropyMap",i.anisotropyTexture));return Promise.all(n)}}class A_{constructor(e){this.parser=e,this.name=bt.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,i=t.json,n=i.textures[e];if(!n.extensions||!n.extensions[this.name])return null;let r=n.extensions[this.name],s=t.options.ktx2Loader;if(!s)if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");else return null;return t.loadTextureImage(e,r.source,s)}}class R_{constructor(e){this.parser=e,this.name=bt.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,i=this.parser,n=i.json,r=n.textures[e];if(!r.extensions||!r.extensions[t])return null;let s=r.extensions[t],o=n.images[s.source],a=i.textureLoader;if(o.uri){let l=i.options.manager.getHandler(o.uri);if(l!==null)a=l}return i.loadTextureImage(e,s.source,a)}}class C_{constructor(e){this.parser=e,this.name=bt.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,i=this.parser,n=i.json,r=n.textures[e];if(!r.extensions||!r.extensions[t])return null;let s=r.extensions[t],o=n.images[s.source],a=i.textureLoader;if(o.uri){let l=i.options.manager.getHandler(o.uri);if(l!==null)a=l}return i.loadTextureImage(e,s.source,a)}}class Du{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){let n=i.extensions[this.name],r=this.parser.getDependency("buffer",n.buffer),s=this.parser.options.meshoptDecoder;if(!s||!s.supported)if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");else return null;return r.then(function(o){let a=n.byteOffset||0,l=n.byteLength||0,{count:c,byteStride:h}=n,u=new Uint8Array(o,a,l);if(s.decodeGltfBufferAsync)return s.decodeGltfBufferAsync(c,h,u,n.mode,n.filter).then(function(f){return f.buffer});else return s.ready.then(function(){let f=new ArrayBuffer(c*h);return s.decodeGltfBuffer(new Uint8Array(f),c,h,u,n.mode,n.filter),f})})}else return null}}class I_{constructor(e){this.name=bt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;let n=t.meshes[i.mesh];for(let l of n.primitives)if(l.mode!==jn.TRIANGLES&&l.mode!==jn.TRIANGLE_STRIP&&l.mode!==jn.TRIANGLE_FAN&&l.mode!==void 0)return null;let s=i.extensions[this.name].attributes,o=[],a={};for(let l in s)o.push(this.parser.getDependency("accessor",s[l]).then((c)=>(a[l]=c,a[l])));if(o.length<1)return null;return o.push(this.parser.createNodeMesh(e)),Promise.all(o).then((l)=>{let c=l.pop(),h=c.isGroup?c.children:[c],u=l[0].count,f=[];for(let m of h){let g=new Ge,x=new R,d=new oi,p=new R(1,1,1),y=new Cn(m.geometry,m.material,u);for(let b=0;b<u;b++){if(a.TRANSLATION)x.fromBufferAttribute(a.TRANSLATION,b);if(a.ROTATION)d.fromBufferAttribute(a.ROTATION,b);if(a.SCALE)p.fromBufferAttribute(a.SCALE,b);y.setMatrixAt(b,g.compose(x,d,p))}let M=null;for(let b in a)if(b==="_COLOR_0"){let v=a[b];y.instanceColor=new hr(v.array,v.itemSize,v.normalized)}else if(b!=="TRANSLATION"&&b!=="ROTATION"&&b!=="SCALE"){if(M===null){let T=y.geometry;M=new Xe,M.name=T.name;for(let _ in T.attributes)M.setAttribute(_,T.attributes[_]);for(let _ in T.morphAttributes)M.morphAttributes[_]=T.morphAttributes[_];if(T.index!==null)M.setIndex(T.index);M.morphTargetsRelative=T.morphTargetsRelative;for(let _ of T.groups)M.addGroup(_.start,_.count,_.materialIndex);if(T.boundingBox!==null)M.boundingBox=T.boundingBox.clone();if(T.boundingSphere!==null)M.boundingSphere=T.boundingSphere.clone();M.drawRange.start=T.drawRange.start,M.drawRange.count=T.drawRange.count,M.userData=Object.assign({},T.userData),y.geometry=M}let v=a[b];M.setAttribute(b,new hr(v.array,v.itemSize,v.normalized))}ct.prototype.copy.call(y,m),this.parser.assignFinalMaterial(y),f.push(y)}if(c.isGroup)return c.clear(),c.add(...f),c;return f[0]})}}var P_="glTF",sc=12,c_={JSON:1313821514,BIN:5130562};class L_{constructor(e){this.name=bt.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,sc),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==P_)throw Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");else if(this.header.version<2)throw Error("THREE.GLTFLoader: Legacy binary file detected.");let n=this.header.length-sc,r=new DataView(e,sc),s=0;while(s<n){let o=r.getUint32(s,!0);s+=4;let a=r.getUint32(s,!0);if(s+=4,a===c_.JSON){let l=new Uint8Array(e,sc+s,o);this.content=i.decode(l)}else if(a===c_.BIN){let l=sc+s;this.body=e.slice(l,l+o)}s+=o}if(this.content===null)throw Error("THREE.GLTFLoader: JSON content not found.")}}class D_{constructor(e,t){if(!t)throw Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=bt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let i=this.json,n=this.dracoLoader,r=e.extensions[this.name].bufferView,s=e.extensions[this.name].attributes,o={},a={},l={};for(let c in s){let h=Nu[c]||c.toLowerCase();o[h]=s[c]}for(let c in e.attributes){let h=Nu[c]||c.toLowerCase();if(s[c]!==void 0){let u=i.accessors[e.attributes[c]],f=pa[u.componentType];l[h]=f.name,a[h]=u.normalized===!0}}return t.getDependency("bufferView",r).then(function(c){return new Promise(function(h,u){n.decodeDracoFile(c,function(f){for(let m in f.attributes){let g=f.attributes[m],x=a[m];if(x!==void 0)g.normalized=x}h(f)},o,l,Ki,u)})})}}class N_{constructor(){this.name=bt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0)e.channel=t.texCoord;if(t.offset!==void 0)e.offset.fromArray(t.offset);if(t.rotation!==void 0)e.rotation=t.rotation;if(t.scale!==void 0)e.repeat.fromArray(t.scale);if(t.rotation!==void 0){let i=Math.cos(e.rotation),n=Math.sin(e.rotation);e.matrix.set(e.repeat.x*i,e.repeat.y*n,e.offset.x,-e.repeat.x*n,e.repeat.y*i,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}}class F_{constructor(){this.name=bt.KHR_MESH_QUANTIZATION}}class Bu extends Sn{constructor(e,t,i,n){super(e,t,i,n)}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,n=this.valueSize,r=e*n*3+n;for(let s=0;s!==n;s++)t[s]=i[r+s];return t}interpolate_(e,t,i,n){let r=this.resultBuffer,s=this.sampleValues,o=this.valueSize,a=o*2,l=o*3,c=n-t,h=(i-t)/c,u=h*h,f=u*h,m=e*l,g=m-l,x=-2*f+3*u,d=f-u,p=1-x,y=d-u+h;for(let M=0;M!==o;M++){let b=s[g+M+o],v=s[g+M+a]*c,T=s[m+M+o],_=s[m+M]*c;r[M]=p*b+y*v+x*T+d*_}return r}}var xS=new oi;class U_ extends Bu{interpolate_(e,t,i,n){let r=super.interpolate_(e,t,i,n);return xS.fromArray(r).normalize().toArray(r),r}}var jn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},pa={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},h_={9728:Xt,9729:qt,9984:Oa,9985:Fs,9986:os,9987:Hi},f_={33071:Ii,33648:ss,10497:pn},Iu={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Nu={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},vs={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},_S={CUBICSPLINE:void 0,LINEAR:Hs,STEP:Nr},Pu={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function yS(e){if(e.DefaultMaterial===void 0)e.DefaultMaterial=new dt({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Mn});return e.DefaultMaterial}function fo(e,t,i){for(let n in i.extensions)if(e[n]===void 0)t.userData.gltfExtensions=t.userData.gltfExtensions||{},t.userData.gltfExtensions[n]=i.extensions[n]}function wr(e,t){if(t.extras!==void 0)if(typeof t.extras==="object")Object.assign(e.userData,t.extras);else console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+t.extras)}function MS(e,t,i){let n=!1,r=!1,s=!1;for(let c=0,h=t.length;c<h;c++){let u=t[c];if(u.POSITION!==void 0)n=!0;if(u.NORMAL!==void 0)r=!0;if(u.COLOR_0!==void 0)s=!0;if(n&&r&&s)break}if(!n&&!r&&!s)return Promise.resolve(e);let o=[],a=[],l=[];for(let c=0,h=t.length;c<h;c++){let u=t[c];if(n){let f=u.POSITION!==void 0?i.getDependency("accessor",u.POSITION):e.attributes.position;o.push(f)}if(r){let f=u.NORMAL!==void 0?i.getDependency("accessor",u.NORMAL):e.attributes.normal;a.push(f)}if(s){let f=u.COLOR_0!==void 0?i.getDependency("accessor",u.COLOR_0):e.attributes.color;l.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){let h=c[0],u=c[1],f=c[2];if(n)e.morphAttributes.position=h;if(r)e.morphAttributes.normal=u;if(s)e.morphAttributes.color=f;return e.morphTargetsRelative=!0,e})}function vS(e,t){if(e.updateMorphTargets(),t.weights!==void 0)for(let i=0,n=t.weights.length;i<n;i++)e.morphTargetInfluences[i]=t.weights[i];if(t.extras&&Array.isArray(t.extras.targetNames)){let i=t.extras.targetNames;if(e.morphTargetInfluences.length===i.length){e.morphTargetDictionary={};for(let n=0,r=i.length;n<r;n++)e.morphTargetDictionary[i[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function SS(e){let t,i=e.extensions&&e.extensions[bt.KHR_DRACO_MESH_COMPRESSION];if(i)t="draco:"+i.bufferView+":"+i.indices+":"+Lu(i.attributes);else t=e.indices+":"+Lu(e.attributes)+":"+e.mode;if(e.targets!==void 0)for(let n=0,r=e.targets.length;n<r;n++)t+=":"+Lu(e.targets[n]);return t}function Lu(e){let t="",i=Object.keys(e).sort();for(let n=0,r=i.length;n<r;n++)t+=i[n]+":"+e[i[n]]+";";return t}function Fu(e){switch(e){case Int8Array:return 0.007874015748031496;case Uint8Array:return 0.00392156862745098;case Int16Array:return 0.00003051850947599719;case Uint16Array:return 0.000015259021896696422;default:throw Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function bS(e){if(e.search(/\.jpe?g($|\?)/i)>0||e.search(/^data\:image\/jpeg/)===0)return"image/jpeg";if(e.search(/\.webp($|\?)/i)>0||e.search(/^data\:image\/webp/)===0)return"image/webp";if(e.search(/\.ktx2($|\?)/i)>0||e.search(/^data\:image\/ktx2/)===0)return"image/ktx2";return"image/png"}var TS=new Ge;class B_{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new gS,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,n=-1,r=!1,s=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){let o=navigator.userAgent;i=/^((?!chrome|android).)*safari/i.test(o)===!0;let a=o.match(/Version\/(\d+)/);n=i&&a?parseInt(a[1],10):-1,r=o.indexOf("Firefox")>-1,s=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}if(typeof createImageBitmap>"u"||i&&n<17||r&&s<98)this.textureLoader=new gs(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache);else this.textureLoader=new Bh(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache);if(this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setWithCredentials(this.options.withCredentials),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Jn(this.options.manager),this.fileLoader.setPriority(this.options.priority),this.fileLoader.setCache(this.options.cache),this.fileLoader.setResponseType("arraybuffer"),this.options.withCredentials||this.options.crossOrigin==="use-credentials")this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let i=this,n=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(s){return s._markDefs&&s._markDefs()}),Promise.all(this._invokeAll(function(s){return s.beforeRoot&&s.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(s){let o={scene:s[0][n.scene||0],scenes:s[0],animations:s[1],cameras:s[2],asset:n.asset,parser:i,userData:{}};return fo(r,o,n),wr(o,n),Promise.all(i._invokeAll(function(a){return a.afterRoot&&a.afterRoot(o)})).then(function(){for(let a of o.scenes)a.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let n=0,r=t.length;n<r;n++){let s=t[n].joints;for(let o=0,a=s.length;o<a;o++)e[s[o]].isBone=!0}for(let n=0,r=e.length;n<r;n++){let s=e[n];if(s.mesh!==void 0){if(this._addNodeRef(this.meshCache,s.mesh),s.skin!==void 0)i[s.mesh].isSkinnedMesh=!0}if(s.camera!==void 0)this._addNodeRef(this.cameraCache,s.camera)}}_addNodeRef(e,t){if(t===void 0)return;if(e.refs[t]===void 0)e.refs[t]=e.uses[t]=0;e.refs[t]++}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;let n=i.clone(),r=(s,o)=>{let a=this.associations.get(s);if(a!=null)this.associations.set(o,a);for(let[l,c]of s.children.entries())r(c,o.children[l])};return r(i,n),n.name+="_instance_"+e.uses[t]++,n}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){let n=e(t[i]);if(n)return n}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let i=[];for(let n=0;n<t.length;n++){let r=e(t[n]);if(r)i.push(r)}return i}getDependency(e,t){let i=e+":"+t,n=this.cache.get(i);if(!n){switch(e){case"scene":n=this.loadScene(t);break;case"node":n=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":n=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":n=this.loadAccessor(t);break;case"bufferView":n=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":n=this.loadBuffer(t);break;case"material":n=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":n=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":n=this.loadSkin(t);break;case"animation":n=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":n=this.loadCamera(t);break;default:if(n=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!n)throw Error("Unknown type: "+e);break}this.cache.add(i,n)}return n}getDependencies(e){let t=this.cache.get(e);if(!t){let i=this,n=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(n.map(function(r,s){return i.getDependency(e,s)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[bt.KHR_BINARY_GLTF].body);let n=this.options;return new Promise(function(r,s){i.load(Jr.resolveURL(t.uri,n.path),r,void 0,function(){s(Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){let n=t.byteLength||0,r=t.byteOffset||0;return i.slice(r,r+n)})}loadAccessor(e){let t=this,i=this.json,n=this.json.accessors[e];if(n.bufferView===void 0&&n.sparse===void 0){let s=Iu[n.type],o=pa[n.componentType],a=n.normalized===!0,l=new o(n.count*s);return Promise.resolve(new Zt(l,s,a))}let r=[];if(n.bufferView!==void 0)r.push(this.getDependency("bufferView",n.bufferView));else r.push(null);if(n.sparse!==void 0)r.push(this.getDependency("bufferView",n.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",n.sparse.values.bufferView));return Promise.all(r).then(function(s){let o=s[0],a=Iu[n.type],l=pa[n.componentType],c=l.BYTES_PER_ELEMENT,h=c*a,u=n.byteOffset||0,f=n.bufferView!==void 0?i.bufferViews[n.bufferView].byteStride:void 0,m=n.normalized===!0,g,x;if(f&&f!==h){let d=Math.floor(u/f),p="InterleavedBuffer:"+n.bufferView+":"+n.componentType+":"+d+":"+n.count,y=t.cache.get(p);if(!y)g=new l(o,d*f,n.count*f/c),y=new Gr(g,f/c),t.cache.add(p,y);x=new _r(y,a,u%f/c,m)}else{if(o===null)g=new l(n.count*a);else g=new l(o,u,n.count*a);x=new Zt(g,a,m)}if(n.sparse!==void 0){let d=Iu.SCALAR,p=pa[n.sparse.indices.componentType],y=n.sparse.indices.byteOffset||0,M=n.sparse.values.byteOffset||0,b=new p(s[1],y,n.sparse.count*d),v=new l(s[2],M,n.sparse.count*a);if(o!==null)x=new Zt(x.array.slice(),x.itemSize,x.normalized);x.normalized=!1;for(let T=0,_=b.length;T<_;T++){let S=b[T];if(x.setX(S,v[T*a]),a>=2)x.setY(S,v[T*a+1]);if(a>=3)x.setZ(S,v[T*a+2]);if(a>=4)x.setW(S,v[T*a+3]);if(a>=5)throw Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}x.normalized=m}return x})}loadTexture(e){let t=this.json,i=this.options,r=t.textures[e].source,s=t.images[r],o=this.textureLoader;if(s.uri){let a=i.manager.getHandler(s.uri);if(a!==null)o=a}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,i){let n=this,r=this.json,s=r.textures[e],o=r.images[t],a=(o.uri||o.bufferView)+":"+s.sampler;if(this.textureCache[a])return this.textureCache[a];let l=this.loadImageSource(t,i).then(function(c){if(c.flipY=!1,c.name=s.name||o.name||"",c.name===""&&typeof o.uri==="string"&&o.uri.startsWith("data:image/")===!1)c.name=o.uri;let u=(r.samplers||{})[s.sampler]||{};return c.magFilter=h_[u.magFilter]||qt,c.minFilter=h_[u.minFilter]||Hi,c.wrapS=f_[u.wrapS]||pn,c.wrapT=f_[u.wrapT]||pn,c.generateMipmaps=!c.isCompressedTexture&&c.minFilter!==Xt&&c.minFilter!==qt,n.associations.set(c,{textures:e}),c}).catch(function(){return null});return this.textureCache[a]=l,l}loadImageSource(e,t){let i=this,n=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then((u)=>u.clone());let s=n.images[e],o=self.URL||self.webkitURL,a=s.uri||"",l=!1,c;if(t.isKTX2Loader===!0&&s.bufferView!==void 0)c=i.getDependency("bufferView",s.bufferView).then(function(u){return new Promise(function(f,m){t.parse(u,f,m)})});else{if(s.bufferView!==void 0)a=i.getDependency("bufferView",s.bufferView).then(function(u){l=!0;let f=new Blob([u],{type:s.mimeType});return a=o.createObjectURL(f),a});else if(s.uri===void 0)throw Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");c=Promise.resolve(a).then(function(u){return new Promise(function(f,m){let g=f;if(t.isImageBitmapLoader===!0)g=function(x){let d=new Lt(x);d.needsUpdate=!0,f(d)};t.load(Jr.resolveURL(u,r.path),g,void 0,m)})})}let h=c.then(function(u){if(l===!0)o.revokeObjectURL(a);return wr(u,s),u.userData.mimeType=s.mimeType||bS(s.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",a),u});return this.sourceCache[e]=h,h}assignTexture(e,t,i,n){let r=this;return this.getDependency("texture",i.index).then(function(s){if(!s)return null;if(i.texCoord!==void 0&&i.texCoord>0)s=s.clone(),s.channel=i.texCoord;if(r.extensions[bt.KHR_TEXTURE_TRANSFORM]){let o=i.extensions!==void 0?i.extensions[bt.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let a=r.associations.get(s);s=r.extensions[bt.KHR_TEXTURE_TRANSFORM].extendTexture(s,o),r.associations.set(s,a)}}if(n!==void 0)s.colorSpace=n;return e[t]=s,s})}assignFinalMaterial(e){let{geometry:t,material:i}=e,n=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,s=t.attributes.normal===void 0;if(e.isPoints){let o="PointsMaterial:"+i.uuid,a=this.cache.get(o);if(!a)a=new Vr,Vt.prototype.copy.call(a,i),a.color.copy(i.color),a.map=i.map,a.sizeAttenuation=!1,this.cache.add(o,a);i=a}else if(e.isLine){let o="LineBasicMaterial:"+i.uuid,a=this.cache.get(o);if(!a)a=new bi,Vt.prototype.copy.call(a,i),a.color.copy(i.color),a.map=i.map,this.cache.add(o,a);i=a}if(n||r||s){let o="ClonedMaterial:"+i.uuid+":";if(n)o+="derivative-tangents:";if(r)o+="vertex-colors:";if(s)o+="flat-shading:";let a=this.cache.get(o);if(!a){if(a=i.clone(),r)a.vertexColors=!0;if(s)a.flatShading=!0;if(n){if(a.normalScale)a.normalScale.y*=-1;if(a.clearcoatNormalScale)a.clearcoatNormalScale.y*=-1}this.cache.add(o,a),this.associations.set(a,this.associations.get(i))}i=a}e.material=i}getMaterialType(){return dt}loadMaterial(e){let t=this,i=this.json,n=this.extensions,r=i.materials[e],s,o={},a=r.extensions||{},l=[];if(a[bt.KHR_MATERIALS_UNLIT]){let h=n[bt.KHR_MATERIALS_UNLIT];s=h.getMaterialType(),l.push(h.extendParams(o,r,t))}else{let h=r.pbrMetallicRoughness||{};if(o.color=new ge(1,1,1),o.opacity=1,Array.isArray(h.baseColorFactor)){let u=h.baseColorFactor;o.color.setRGB(u[0],u[1],u[2],Ki),o.opacity=u[3]}if(h.baseColorTexture!==void 0)l.push(t.assignTexture(o,"map",h.baseColorTexture,_t));if(o.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,o.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0)l.push(t.assignTexture(o,"metalnessMap",h.metallicRoughnessTexture)),l.push(t.assignTexture(o,"roughnessMap",h.metallicRoughnessTexture));s=this._invokeOne(function(u){return u.getMaterialType&&u.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(u){return u.extendMaterialParams&&u.extendMaterialParams(e,o)})))}if(r.doubleSided===!0)o.side=Ot;let c=r.alphaMode||Pu.OPAQUE;if(c===Pu.BLEND)o.transparent=!0,o.depthWrite=!1;else if(o.transparent=!1,c===Pu.MASK)o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:0.5;if(r.normalTexture!==void 0&&s!==gt){if(l.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new Z(1,1),r.normalTexture.scale!==void 0){let h=r.normalTexture.scale;o.normalScale.set(h,h)}}if(r.occlusionTexture!==void 0&&s!==gt){if(l.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0)o.aoMapIntensity=r.occlusionTexture.strength}if(r.emissiveFactor!==void 0&&s!==gt){let h=r.emissiveFactor;o.emissive=new ge().setRGB(h[0],h[1],h[2],Ki)}if(r.emissiveTexture!==void 0&&s!==gt)l.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,_t));return Promise.all(l).then(function(){let h=new s(o);if(r.name)h.name=r.name;if(wr(h,r),t.associations.set(h,{materials:e}),r.extensions)fo(n,h,r);return h})}createUniqueName(e){let t=Ht.sanitizeNodeName(e||"");if(t in this.nodeNamesUsed)return t+"_"+ ++this.nodeNamesUsed[t];else return this.nodeNamesUsed[t]=0,t}loadGeometries(e){let t=this,i=this.extensions,n=this.primitiveCache;function r(o){return i[bt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(a){return u_(a,o,t)})}let s=[];for(let o=0,a=e.length;o<a;o++){let l=e[o],c=SS(l),h=n[c];if(h)s.push(h.promise);else{let u;if(l.extensions&&l.extensions[bt.KHR_DRACO_MESH_COMPRESSION])u=r(l);else u=u_(new Xe,l,t);if(l.mode===jn.TRIANGLE_STRIP)u=u.then((f)=>Cu(f,Hc));else if(l.mode===jn.TRIANGLE_FAN)u=u.then((f)=>Cu(f,ml));n[c]={primitive:l,promise:u},s.push(u)}}return Promise.all(s)}loadMesh(e){let t=this,i=this.json,n=this.extensions,r=i.meshes[e],s=r.primitives,o=[];for(let a=0,l=s.length;a<l;a++){let c=s[a].material===void 0?yS(this.cache):this.getDependency("material",s[a].material);o.push(c)}return o.push(t.loadGeometries(s)),Promise.all(o).then(async function(a){let l=a.slice(0,a.length-1),c=a[a.length-1],h=[];for(let f=0,m=c.length;f<m;f++){let g=c[f],x=s[f],d,p=l[f];if(x.mode===jn.TRIANGLES||x.mode===jn.TRIANGLE_STRIP||x.mode===jn.TRIANGLE_FAN||x.mode===void 0){let y=r.isSkinnedMesh===!0,M=g.hasAttribute("skinIndex")&&g.hasAttribute("skinWeight");if(y&&M===!1)console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled.");if(d=y&&M?new Pl(g,p):new ne(g,p),d.isSkinnedMesh===!0)d.normalizeSkinWeights()}else if(x.mode===jn.LINES)d=new cn(g,p);else if(x.mode===jn.LINE_STRIP)d=new Zn(g,p);else if(x.mode===jn.LINE_LOOP)d=new Fl(g,p);else if(x.mode===jn.POINTS)d=new js(g,p);else throw Error("THREE.GLTFLoader: Primitive mode unsupported: "+x.mode);if(Object.keys(d.geometry.morphAttributes).length>0)vS(d,r);if(d.name=t.createUniqueName(r.name||"mesh_"+e),wr(d,r),x.extensions)fo(n,d,x);t.assignFinalMaterial(d),h.push(d)}for(let f=0,m=h.length;f<m;f++)t.associations.set(h[f],{meshes:e,primitives:f});if(h.length===1){if(r.extensions)fo(n,h[0],r);return h[0]}let u=new Ze;if(r.extensions)fo(n,u,r);t.associations.set(u,{meshes:e});for(let f=0,m=h.length;f<m;f++)u.add(h[f]);return u})}loadCamera(e){let t,i=this.json.cameras[e],n=i[i.type];if(!n){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}if(i.type==="perspective")t=new ni(Xc.radToDeg(n.yfov),n.aspectRatio||1,n.znear||1,n.zfar||2000000);else if(i.type==="orthographic")t=new dr(-n.xmag,n.xmag,n.ymag,-n.ymag,n.znear,n.zfar);if(i.name)t.name=this.createUniqueName(i.name);return wr(t,i),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],i=[];for(let n=0,r=t.joints.length;n<r;n++)i.push(this._loadNodeShallow(t.joints[n]));if(t.inverseBindMatrices!==void 0)i.push(this.getDependency("accessor",t.inverseBindMatrices));else i.push(null);return Promise.all(i).then(function(n){let r=n.pop(),s=n,o=[],a=[];for(let l=0,c=s.length;l<c;l++){let h=s[l];if(h){o.push(h);let u=new Ge;if(r!==null)u.fromArray(r.array,l*16);a.push(u)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new ia(o,a)})}loadAnimation(e){let t=this.json,i=this,n=t.animations[e],r=n.name?n.name:"animation_"+e,s=[],o=[],a=[],l=[],c=[];for(let h=0,u=n.channels.length;h<u;h++){let f=n.channels[h],m=n.samplers[f.sampler],g=f.target,x=g.node,d=n.parameters!==void 0?n.parameters[m.input]:m.input,p=n.parameters!==void 0?n.parameters[m.output]:m.output;if(g.node===void 0)continue;s.push(this.getDependency("node",x)),o.push(this.getDependency("accessor",d)),a.push(this.getDependency("accessor",p)),l.push(m),c.push(g)}return Promise.all([Promise.all(s),Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c)]).then(function(h){let u=h[0],f=h[1],m=h[2],g=h[3],x=h[4],d=[];for(let y=0,M=u.length;y<M;y++){let b=u[y],v=f[y],T=m[y],_=g[y],S=x[y];if(b===void 0)continue;if(b.updateMatrix)b.updateMatrix();let w=i._createAnimationTracks(b,v,T,_,S);if(w)for(let L=0;L<w.length;L++)d.push(w[L])}let p=new ms(r,void 0,d);return wr(p,n),p})}createNodeMesh(e){let t=this.json,i=this,n=t.nodes[e];if(n.mesh===void 0)return null;return i.getDependency("mesh",n.mesh).then(function(r){let s=i._getNodeRef(i.meshCache,n.mesh,r);if(n.weights!==void 0)s.traverse(function(o){if(!o.isMesh)return;for(let a=0,l=n.weights.length;a<l;a++)o.morphTargetInfluences[a]=n.weights[a]});return s})}loadNode(e){let t=this.json,i=this,n=t.nodes[e],r=i._loadNodeShallow(e),s=[],o=n.children||[];for(let l=0,c=o.length;l<c;l++)s.push(i.getDependency("node",o[l]));let a=n.skin===void 0?Promise.resolve(null):i.getDependency("skin",n.skin);return Promise.all([r,Promise.all(s),a]).then(function(l){let c=l[0],h=l[1],u=l[2];if(u!==null)c.traverse(function(f){if(!f.isSkinnedMesh)return;f.bind(u,TS)});for(let f=0,m=h.length;f<m;f++)c.add(h[f]);if(c.userData.pivot!==void 0&&h.length>0){let f=c.userData.pivot,m=h[0];c.pivot=new R().fromArray(f),c.position.x-=f[0],c.position.y-=f[1],c.position.z-=f[2],m.position.set(0,0,0),delete c.userData.pivot}return c})}_loadNodeShallow(e){let t=this.json,i=this.extensions,n=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],s=r.name?n.createUniqueName(r.name):"",o=[],a=n._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});if(a)o.push(a);if(r.camera!==void 0)o.push(n.getDependency("camera",r.camera).then(function(l){return n._getNodeRef(n.cameraCache,r.camera,l)}));return n._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){o.push(l)}),this.nodeCache[e]=Promise.all(o).then(function(l){let c;if(r.isBone===!0)c=new Ks;else if(l.length>1)c=new Ze;else if(l.length===1)c=l[0];else c=new ct;if(c!==l[0])for(let h=0,u=l.length;h<u;h++)c.add(l[h]);if(r.name)c.userData.name=r.name,c.name=s;if(wr(c,r),r.extensions)fo(i,c,r);if(r.matrix!==void 0){let h=new Ge;h.fromArray(r.matrix),c.applyMatrix4(h)}else{if(r.translation!==void 0)c.position.fromArray(r.translation);if(r.rotation!==void 0)c.quaternion.fromArray(r.rotation);if(r.scale!==void 0)c.scale.fromArray(r.scale)}if(!n.associations.has(c))n.associations.set(c,{});else if(r.mesh!==void 0&&n.meshCache.refs[r.mesh]>1){let h=n.associations.get(c);n.associations.set(c,{...h})}return n.associations.get(c).nodes=e,c}),this.nodeCache[e]}loadScene(e){let t=this.extensions,i=this.json.scenes[e],n=this,r=new Ze;if(i.name)r.name=n.createUniqueName(i.name);if(wr(r,i),i.extensions)fo(t,r,i);let s=i.nodes||[],o=[];for(let a=0,l=s.length;a<l;a++)o.push(n.getDependency("node",s[a]));return Promise.all(o).then(function(a){for(let c=0,h=a.length;c<h;c++){let u=a[c];if(u.parent!==null)r.add(a_(u));else r.add(u)}let l=(c)=>{let h=new Map;for(let[u,f]of n.associations)if(u instanceof Vt||u instanceof Lt)h.set(u,f);return c.traverse((u)=>{let f=n.associations.get(u);if(f!=null)h.set(u,f)}),h};return n.associations=l(r),r})}_createAnimationTracks(e,t,i,n,r){let s=[],o=e.name?e.name:e.uuid,a=[];function l(f){if(f.morphTargetInfluences)a.push(f.name?f.name:f.uuid)}if(vs[r.path]===vs.weights){if(l(e),e.isGroup)e.children.forEach(l)}else a.push(o);let c;switch(vs[r.path]){case vs.weights:c=Yr;break;case vs.rotation:c=br;break;case vs.translation:case vs.scale:c=Zr;break;default:switch(i.itemSize){case 1:c=Yr;break;case 2:case 3:default:c=Zr;break}break}let h=n.interpolation!==void 0?_S[n.interpolation]:Hs,u=this._getArrayFromAccessor(i);for(let f=0,m=a.length;f<m;f++){let g=new c(a[f]+"."+vs[r.path],t.array,u,h);if(n.interpolation==="CUBICSPLINE")this._createCubicSplineTrackInterpolant(g);s.push(g)}return s}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let i=Fu(t.constructor),n=new Float32Array(t.length);for(let r=0,s=t.length;r<s;r++)n[r]=t[r]*i;t=n}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(i){return new(this instanceof br?U_:Bu)(this.times,this.values,this.getValueSize()/3,i)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function ES(e,t,i){let n=t.attributes,r=new Si;if(n.POSITION!==void 0){let a=i.json.accessors[n.POSITION],{min:l,max:c}=a;if(l!==void 0&&c!==void 0){if(r.set(new R(l[0],l[1],l[2]),new R(c[0],c[1],c[2])),a.normalized){let h=Fu(pa[a.componentType]);r.min.multiplyScalar(h),r.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let s=t.targets;if(s!==void 0){let a=new R,l=new R;for(let c=0,h=s.length;c<h;c++){let u=s[c];if(u.POSITION!==void 0){let f=i.json.accessors[u.POSITION],{min:m,max:g}=f;if(m!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(m[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(m[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(m[2]),Math.abs(g[2]))),f.normalized){let x=Fu(pa[f.componentType]);l.multiplyScalar(x)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}r.expandByVector(a)}e.boundingBox=r;let o=new fi;r.getCenter(o.center),o.radius=r.min.distanceTo(r.max)/2,e.boundingSphere=o}function u_(e,t,i){let n=t.attributes,r=[];function s(o,a){return i.getDependency("accessor",o).then(function(l){e.setAttribute(a,l)})}for(let o in n){let a=Nu[o]||o.toLowerCase();if(a in e.attributes)continue;r.push(s(n[o],a))}if(t.indices!==void 0&&!e.index){let o=i.getDependency("accessor",t.indices).then(function(a){e.setIndex(a)});r.push(o)}if(ht.workingColorSpace!==Ki&&"COLOR_0"in n)console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${ht.workingColorSpace}" not supported.`);return wr(e,t),ES(e,t,i),Promise.all(r).then(function(){return t.targets!==void 0?MS(e,t.targets,i):e})}var ma={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class $n{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}var wS=new dr(-1,1,1,-1,0,1);class O_ extends Xe{constructor(){super();this.setAttribute("position",new Re([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Re([0,2,0,0,2,0],2))}}var AS=new O_;class uo{constructor(e){this._mesh=new ne(AS,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,wS)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class Ou extends $n{constructor(e,t="tDiffuse"){super();if(this.textureID=t,this.uniforms=null,this.material=null,e instanceof ai)this.uniforms=e.uniforms,this.material=e;else if(e)this.uniforms=vr.clone(e.uniforms),this.material=new ai({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader});this._fsQuad=new uo(this.material)}render(e,t,i){if(this.uniforms[this.textureID])this.uniforms[this.textureID].value=i.texture;if(this._fsQuad.material=this.material,this.renderToScreen)e.setRenderTarget(null),this._fsQuad.render(e);else{if(e.setRenderTarget(t),this.clear)e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil);this._fsQuad.render(e)}}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class qh extends $n{constructor(e,t){super();this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){let n=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let s,o;if(this.inverse)s=0,o=1;else s=1,o=0;if(r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(n.REPLACE,n.REPLACE,n.REPLACE),r.buffers.stencil.setFunc(n.ALWAYS,s,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear)e.clear();if(e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear)e.clear();e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(n.EQUAL,1,4294967295),r.buffers.stencil.setOp(n.KEEP,n.KEEP,n.KEEP),r.buffers.stencil.setLocked(!0)}}class Hu extends $n{constructor(){super();this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class zu{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let i=e.getSize(new Z);this._width=i.width,this._height=i.height,t=new ii(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:si}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Ou(ma),this.copyPass.material.blending=Gn,this.timer=new tc}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);if(t!==-1)this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){if(this.timer.update(),e===void 0)e=this.timer.getDelta();let t=this.renderer.getRenderTarget(),i=!1;for(let n=0,r=this.passes.length;n<r;n++){let s=this.passes[n];if(s.enabled===!1)continue;if(s.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(n),s.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),s.needsSwap){if(i){let o=this.renderer.getContext(),a=this.renderer.state.buffers.stencil;a.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),a.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}if(qh!==void 0){if(s instanceof qh)i=!0;else if(s instanceof Hu)i=!1}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new Z);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let i=this._width*this._pixelRatio,n=this._height*this._pixelRatio;this.renderTarget1.setSize(i,n),this.renderTarget2.setSize(i,n);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,n)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Gu extends $n{constructor(e,t,i=null,n=null,r=null){super();this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=n,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new ge}render(e,t,i){let n=e.autoClear;e.autoClear=!1;let r,s;if(this.overrideMaterial!==null)s=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial;if(this.clearColor!==null)e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha());if(this.clearAlpha!==null)r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha);if(this.clearDepth==!0)e.clearDepth();if(e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0)e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil);if(e.render(this.scene,this.camera),this.clearColor!==null)e.setClearColor(this._oldClearColor);if(this.clearAlpha!==null)e.setClearAlpha(r);if(this.overrideMaterial!==null)this.scene.overrideMaterial=s;e.autoClear=n}}var H_={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new ge(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class po extends $n{constructor(e,t=1,i,n){super();this.strength=t,this.radius=i,this.threshold=n,this.resolution=e!==void 0?new Z(e.x,e.y):new Z(256,256),this.clearColor=new ge(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),s=Math.round(this.resolution.y/2);this.renderTargetBright=new ii(r,s,{type:si,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let c=0;c<this.nMips;c++){let h=new ii(r,s,{type:si,depthBuffer:!1});h.texture.name="UnrealBloomPass.h"+c,h.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(h);let u=new ii(r,s,{type:si,depthBuffer:!1});u.texture.name="UnrealBloomPass.v"+c,u.texture.generateMipmaps=!1,this.renderTargetsVertical.push(u),r=Math.round(r/2),s=Math.round(s/2)}let o=H_;this.highPassUniforms=vr.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=n,this.highPassUniforms.smoothWidth.value=0.01,this.materialHighPassFilter=new ai({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let a=[6,10,14,18,22];r=Math.round(this.resolution.x/2),s=Math.round(this.resolution.y/2);for(let c=0;c<this.nMips;c++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(a[c])),this.separableBlurMaterials[c].uniforms.invSize.value=new Z(1/r,1/s),r=Math.round(r/2),s=Math.round(s/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=0.1;let l=[1,0.8,0.6,0.4,0.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new R(1,1,1),new R(1,1,1),new R(1,1,1),new R(1,1,1),new R(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=vr.clone(ma.uniforms),this.blendMaterial=new ai({uniforms:this.copyUniforms,vertexShader:ma.vertexShader,fragmentShader:ma.fragmentShader,premultipliedAlpha:!0,blending:Ra,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new ge,this._oldClearAlpha=1,this._basic=new gt,this._fsQuad=new uo(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),n=Math.round(t/2);this.renderTargetBright.setSize(i,n);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(i,n),this.renderTargetsVertical[r].setSize(i,n),this.separableBlurMaterials[r].uniforms.invSize.value=new Z(1/i,1/n),i=Math.round(i/2),n=Math.round(n/2)}render(e,t,i,n,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();let s=e.autoClear;if(e.autoClear=!1,e.setClearColor(this.clearColor,0),r)e.state.buffers.stencil.setTest(!1);if(this.renderToScreen)this._fsQuad.material=this._basic,this._basic.map=i.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e);this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let o=this.renderTargetBright;for(let a=0;a<this.nMips;a++)this._fsQuad.material=this.separableBlurMaterials[a],this.separableBlurMaterials[a].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[a].uniforms.direction.value=po.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[a]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[a].uniforms.colorTexture.value=this.renderTargetsHorizontal[a].texture,this.separableBlurMaterials[a].uniforms.direction.value=po.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[a]),e.clear(),this._fsQuad.render(e),o=this.renderTargetsVertical[a];if(this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r)e.state.buffers.stencil.setTest(!0);if(this.renderToScreen)e.setRenderTarget(null),this._fsQuad.render(e);else e.setRenderTarget(i),this._fsQuad.render(e);e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=s}_getSeparableBlurMaterial(e){let t=[],i=e/3;for(let s=0;s<e;s++)t.push(0.39894*Math.exp(-0.5*s*s/(i*i))/i);let n=[],r=[];for(let s=1;s<e;s+=2){let o=t[s],a=s+1<e?t[s+1]:0,l=o+a;n.push((s*o+(s+1)*a)/l),r.push(l)}return new ai({defines:{KERNEL_PAIRS:n.length},uniforms:{colorTexture:{value:null},invSize:{value:new Z(0.5,0.5)},direction:{value:new Z(0.5,0.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:n},gaussianWeights:{value:r}},vertexShader:`

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

				}`})}_getCompositeMaterial(e){return new ai({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

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

				}`})}}po.BlurDirectionX=new Z(1,0);po.BlurDirectionY=new Z(0,1);var oc={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class ku extends $n{constructor(){super();this.isOutputPass=!0,this.uniforms=vr.clone(oc.uniforms),this.material=new oo({name:oc.name,uniforms:this.uniforms,vertexShader:oc.vertexShader,fragmentShader:oc.fragmentShader}),this._fsQuad=new uo(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,i){if(this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping){if(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},ht.getTransfer(this._outputColorSpace)===Tt)this.material.defines.SRGB_TRANSFER="";if(this._toneMapping===Mo)this.material.defines.LINEAR_TONE_MAPPING="";else if(this._toneMapping===vo)this.material.defines.REINHARD_TONE_MAPPING="";else if(this._toneMapping===So)this.material.defines.CINEON_TONE_MAPPING="";else if(this._toneMapping===rs)this.material.defines.ACES_FILMIC_TONE_MAPPING="";else if(this._toneMapping===To)this.material.defines.AGX_TONE_MAPPING="";else if(this._toneMapping===Eo)this.material.defines.NEUTRAL_TONE_MAPPING="";else if(this._toneMapping===bo)this.material.defines.CUSTOM_TONE_MAPPING="";this.material.needsUpdate=!0}if(this.renderToScreen===!0)e.setRenderTarget(null),this._fsQuad.render(e);else{if(e.setRenderTarget(t),this.clear)e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil);this._fsQuad.render(e)}}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class Vu extends Ws{constructor(){super();this.name="RoomEnvironment",this.position.y=-3.5;let e=new yt;e.deleteAttribute("uv");let t=new dt({side:jt}),i=new dt,n=new ur(16777215,900,28,2);n.position.set(0.418,16.199,0.3),this.add(n);let r=new ne(e,t);r.position.set(-0.757,13.219,0.717),r.scale.set(31.713,28.305,28.591),this.add(r);let s=new Cn(e,i,6),o=new ct;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-0.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),s.setMatrixAt(0,o.matrix),o.position.set(-5.607,-0.754,-0.758),o.rotation.set(0,0.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),s.setMatrixAt(1,o.matrix),o.position.set(6.167,0.857,7.803),o.rotation.set(0,0.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),s.setMatrixAt(2,o.matrix),o.position.set(-2.017,0.018,6.124),o.rotation.set(0,0.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),s.setMatrixAt(3,o.matrix),o.position.set(2.291,-0.756,-2.621),o.rotation.set(0,-0.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),s.setMatrixAt(4,o.matrix),o.position.set(-2.193,-0.369,-5.547),o.rotation.set(0,0.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),s.setMatrixAt(5,o.matrix),this.add(s);let a=new ne(e,ga(50));a.position.set(-16.116,14.37,8.208),a.scale.set(0.1,2.428,2.739),this.add(a);let l=new ne(e,ga(50));l.position.set(-16.109,18.021,-8.207),l.scale.set(0.1,2.425,2.751),this.add(l);let c=new ne(e,ga(17));c.position.set(14.904,12.198,-1.832),c.scale.set(0.15,4.265,6.331),this.add(c);let h=new ne(e,ga(43));h.position.set(-0.462,8.89,14.52),h.scale.set(4.38,5.441,0.088),this.add(h);let u=new ne(e,ga(20));u.position.set(3.235,11.486,-12.541),u.scale.set(2.5,2,0.1),this.add(u);let f=new ne(e,ga(100));f.position.set(0,20,0),f.scale.set(1,0.1,1),this.add(f)}dispose(){let e=new Set;this.traverse((t)=>{if(t.isMesh)e.add(t.geometry),e.add(t.material)});for(let t of e)t.dispose()}}function ga(e){return new ql({color:0,emissive:16777215,emissiveIntensity:e})}var ac=new R;function Qn(e,t,i,n,r,s){let o=2*Math.PI*r/4,a=Math.max(s-2*r,0),l=Math.PI/4;ac.copy(t),ac[n]=0,ac.normalize();let c=0.5*o/(o+a),h=1-ac.angleTo(e)/l;if(Math.sign(ac[i])===1)return h*c;else return a/(o+a)+c+c*(1-h)}class ji extends yt{constructor(e=1,t=1,i=1,n=2,r=0.1){let s=n*2+1;r=Math.min(e/2,t/2,i/2,r);super(1,1,1,s,s,s);if(this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:i,segments:n,radius:r},s===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let a=new R,l=new R,c=new R(e,t,i).divideScalar(2).subScalar(r),h=this.attributes.position.array,u=this.attributes.normal.array,f=this.attributes.uv.array,m=h.length/6,g=new R,x=0.5/s;for(let d=0,p=0;d<h.length;d+=3,p+=2)switch(a.fromArray(h,d),l.copy(a),l.x-=Math.sign(l.x)*x,l.y-=Math.sign(l.y)*x,l.z-=Math.sign(l.z)*x,l.normalize(),h[d+0]=c.x*Math.sign(a.x)+l.x*r,h[d+1]=c.y*Math.sign(a.y)+l.y*r,h[d+2]=c.z*Math.sign(a.z)+l.z*r,u[d+0]=l.x,u[d+1]=l.y,u[d+2]=l.z,Math.floor(d/m)){case 0:g.set(1,0,0),f[p+0]=Qn(g,l,"z","y",r,i),f[p+1]=1-Qn(g,l,"y","z",r,t);break;case 1:g.set(-1,0,0),f[p+0]=1-Qn(g,l,"z","y",r,i),f[p+1]=1-Qn(g,l,"y","z",r,t);break;case 2:g.set(0,1,0),f[p+0]=1-Qn(g,l,"x","z",r,e),f[p+1]=Qn(g,l,"z","x",r,i);break;case 3:g.set(0,-1,0),f[p+0]=1-Qn(g,l,"x","z",r,e),f[p+1]=1-Qn(g,l,"z","x",r,i);break;case 4:g.set(0,0,1),f[p+0]=1-Qn(g,l,"x","y",r,e),f[p+1]=1-Qn(g,l,"y","x",r,t);break;case 5:g.set(0,0,-1),f[p+0]=Qn(g,l,"x","y",r,e),f[p+1]=1-Qn(g,l,"y","x",r,t);break}}static fromJSON(e){return new ji(e.width,e.height,e.depth,e.segments,e.radius)}}var On=window.FUNUI,er=(e)=>document.querySelector(e),As=matchMedia("(pointer:coarse)").matches||innerWidth<820;if(As)document.body.classList.add("touch");var Bn=er("#c"),un=new Yh({canvas:Bn,antialias:!As,powerPreference:"high-performance"}),Qu=Math.min(devicePixelRatio||1,As?1.5:1.75),Ar=Qu;un.setPixelRatio(Ar);un.toneMapping=rs;un.toneMappingExposure=1.05;var ti=new Ws;ti.background=new ge(329498);ti.fog=new Xo(329498,40,95);var RS=new Ms(un);ti.environment=RS.fromScene(new Vu,0.04).texture;ti.environmentIntensity=0.18;var Wi=new ni(68,1,0.05,120),Rr=null;function sd(){let e=innerWidth,t=innerHeight;if(un.setSize(e,t,!1),Wi.aspect=e/t,Wi.fov=e/t<1?80:68,Wi.updateProjectionMatrix(),Rr)Rr.setSize(e,t)}if(!As)Rr=new zu(un),Rr.addPass(new Gu(ti,Wi)),Rr.addPass(new po(new Z(innerWidth,innerHeight),0.2,0.45,1)),Rr.addPass(new ku);addEventListener("resize",sd);sd();var Ke=(()=>{let e=7;return()=>(e=e*16807%2147483647)/2147483647})();function Qt(e,t){let i=document.createElement("canvas");return i.width=e,i.height=t,i}function hf(e,t=1,i=1,n=!0){let r=new Ni(e);if(r.wrapS=r.wrapT=pn,r.repeat.set(t,i),r.anisotropy=8,n)r.colorSpace=_t;return r}function Ci(e,t,i,n){let r=e.getImageData(0,0,t,i),s=r.data;for(let o=0;o<s.length;o+=4){let a=(Ke()-0.5)*n;s[o]+=a,s[o+1]+=a,s[o+2]+=a}e.putImageData(r,0,0)}var ci={};ci.concrete=(()=>{let e=Qt(512,512),t=e.getContext("2d");t.fillStyle="#7d7e82",t.fillRect(0,0,512,512);for(let i=0;i<40;i++){let n=t.createRadialGradient(Ke()*512,Ke()*512,5,Ke()*512,Ke()*512,120),r=Ke()*512,s=Ke()*512,o=t.createRadialGradient(r,s,5,r,s,90+Ke()*90);o.addColorStop(0,Ke()>0.5?"rgba(255,255,255,.07)":"rgba(0,0,0,.09)"),o.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=o,t.fillRect(0,0,512,512)}return Ci(t,512,512,22),t.strokeStyle="rgba(0,0,0,.35)",t.lineWidth=2,t.strokeRect(1,1,510,510),e})();ci.parquet=(()=>{let e=Qt(512,512),t=e.getContext("2d"),i=256,n=42;for(let r=0;r<12;r++){let s=r%3*85;for(let o=-1;o<3;o++){let a=24+Ke()*6,l=28+Ke()*12;t.fillStyle=`hsl(${a},48%,${l}%)`,t.fillRect(o*256+s,r*42,254,40);for(let c=0;c<14;c++){t.strokeStyle=`rgba(30,12,0,${0.05+Ke()*0.1})`,t.lineWidth=1,t.beginPath();let h=r*42+Ke()*42;t.moveTo(o*256+s,h),t.lineTo(o*256+s+256,h+(Ke()-0.5)*3),t.stroke()}}}return Ci(t,512,512,10),e})();ci.brick=(()=>{let e=Qt(512,512),t=e.getContext("2d");t.fillStyle="#3a2c28",t.fillRect(0,0,512,512);let i=128,n=42;for(let r=0;r<12;r++)for(let s=-1;s<5;s++){let o=r%2*64,a=8+Ke()*8,l=30+Ke()*14;t.fillStyle=`hsl(${a},${48+Ke()*14}%,${l}%)`,t.fillRect(s*i+o+3,r*n+3,i-6,n-6)}return Ci(t,512,512,26),e})();ci.carpet=(()=>{let e=Qt(256,256),t=e.getContext("2d");return t.fillStyle="#857f76",t.fillRect(0,0,256,256),Ci(t,256,256,26),e})();ci.slats=(()=>{let e=Qt(512,512),t=e.getContext("2d");for(let i=0;i<16;i++)t.fillStyle=`hsl(${28+Ke()*5},38%,${24+Ke()*8}%)`,t.fillRect(i*32,0,28,512),t.fillStyle="#0c0b0b",t.fillRect(i*32+28,0,4,512);return Ci(t,512,512,10),e})();ci.oak=(()=>{let e=Qt(512,512),t=e.getContext("2d"),i=512,n=128;for(let r=0;r<4;r++){let s=r%2*200;for(let o=-1;o<2;o++){t.fillStyle=`hsl(${32+Ke()*4},${28+Ke()*6}%,${66+Ke()*6}%)`,t.fillRect(o*512+s,r*128,510,126);for(let a=0;a<26;a++){t.strokeStyle=`rgba(90,60,30,${0.04+Ke()*0.08})`,t.beginPath();let l=r*128+Ke()*128;t.moveTo(o*512+s,l),t.lineTo(o*512+s+512,l+(Ke()-0.5)*6),t.stroke()}}}return Ci(t,512,512,8),e})();ci.greige=(()=>{let e=Qt(256,256),t=e.getContext("2d");return t.fillStyle="#a3a5ab",t.fillRect(0,0,256,256),Ci(t,256,256,8),e})();ci.graphite=(()=>{let e=Qt(256,256),t=e.getContext("2d");return t.fillStyle="#26272c",t.fillRect(0,0,256,256),Ci(t,256,256,10),e})();ci.plaster=(()=>{let e=Qt(256,256),t=e.getContext("2d");return t.fillStyle="#d9d8d4",t.fillRect(0,0,256,256),Ci(t,256,256,10),e})();ci.darkwall=(()=>{let e=Qt(256,256),t=e.getContext("2d");return t.fillStyle="#25252c",t.fillRect(0,0,256,256),Ci(t,256,256,12),e})();ci.pvc=(()=>{let e=Qt(256,256),t=e.getContext("2d");return t.fillStyle="#2f6b4f",t.fillRect(0,0,256,256),Ci(t,256,256,12),e})();ci.rubber=(()=>{let e=Qt(256,256),t=e.getContext("2d");return t.fillStyle="#23262f",t.fillRect(0,0,256,256),Ci(t,256,256,30),e})();ci.tile=(()=>{let e=Qt(256,256),t=e.getContext("2d");return t.fillStyle="#e4e4e2",t.fillRect(0,0,256,256),t.strokeStyle="#a9a9a6",t.lineWidth=3,t.strokeRect(0,0,256,256),Ci(t,256,256,8),e})();function Ir(e,t,i=0.85,n=0,r=1,s=1,o={}){let a=hf(ci[e],r/t,s/t);return new dt(Object.assign({map:a,bumpMap:a,bumpScale:e==="brick"?3:0.8,roughness:i,metalness:n},o))}var W=(e,t=0.6,i=0,n)=>new dt(Object.assign({color:e,roughness:t,metalness:i},n||{})),Yt=(e,t=1)=>new dt({color:0,emissive:e,emissiveIntensity:t,toneMapped:!0});function od(e,t,i,n=0,r=0,s=0,o=0,a=!0){let l=new ne(t,i);return l.position.set(n,r,s),l.rotation.y=o,l.castShadow=a,l.receiveShadow=!0,e.add(l),l}var B=(e,t,i,n,r,s,o,a,l=0)=>od(e,new yt(t,i,n),r,s,o,a,l);var ot=(e,t,i,n,r,s,o,a,l=24)=>od(e,new At(t,i,n,l),r,s,o,a);function yn(e,t,i,n,r,s,o,a,l=0,c="bold 120px Arial Black, Arial",h,u=!0){let f=Qt(1024,Math.round(1024*n/i)),m=f.getContext("2d");if(h)m.fillStyle=h,m.fillRect(0,0,f.width,f.height);m.font=c,m.textAlign="center",m.textBaseline="middle",m.shadowColor=r,m.shadowBlur=28,m.fillStyle=r,m.fillText(t,f.width/2,f.height/2),m.shadowBlur=8,m.fillText(t,f.width/2,f.height/2);let g=new Ni(f);g.colorSpace=_t;let x=new ne(new zt(i,n),new gt({map:g,transparent:!h,toneMapped:!1}));if(x.position.set(s,o,a),x.rotation.y=l,e.add(x),!u)return x;let d=new ur(new ge(r),3,4,2);return d.position.set(s,o,a),d.position.add(new R(Math.sin(l),0,Math.cos(l)).multiplyScalar(0.4)),e.add(d),x}function qi(e,t,i,n,r,s,o=12){let a=new ur(r,s,o,2);return a.position.set(t,i,n),e.add(a),a}var Nt=new Ze;ti.add(Nt);var tn=new Ze;Nt.add(tn);var Mc=[];function tr(e,t,i,n,r,s,o,a=[],l=0.25,c=!1){let h=n-t,u=r-i,f=Math.hypot(h,u),m=-Math.atan2(u,h),g=[],x=0;a.sort((p,y)=>p[0]-y[0]);for(let[p,y]of a){if(p>x)g.push([x,p,0]);g.push([p,y,1]),x=y}if(x<f)g.push([x,f,0]);for(let[p,y,M]of g){let b=y-p,v=t+h/f*(p+y)/2,T=i+u/f*(p+y)/2,_=M?2.2:0,S=M?s-2.2:s;if(S>0.01){let w=new ne(new yt(b,S,l),o(b,S));if(w.position.set(v,_+S/2,T),w.rotation.y=m,w.castShadow=w.receiveShadow=!0,e.add(w),c)Mc.push(w)}if(M)for(let w of[p,y]){let L=t+h/f*w,I=i+u/f*w,U=new ne(new yt(0.1,2.2,l+0.06),W(1842208,0.6));U.position.set(L,1.1,I),U.rotation.y=m,e.add(U)}}let d=new ne(new yt(f,0.12,l+0.03),W(1381658,0.7));d.position.set((t+n)/2,0.06,(i+r)/2),d.rotation.y=m,e.add(d)}function Sc(e,t,i){let n=new Fi(t.map((o)=>new Z(o[0],-o[1]))),r=new so(n);r.rotateX(-Math.PI/2);let s=new ne(r,i);return s.receiveShadow=!0,e.add(s),s}function Ea(e,t,i){let n=new Fi(e.map((o)=>new Z(o[0],-o[1]))),r=new so(n);r.rotateX(-Math.PI/2),i.side=Ot;let s=new ne(r,i);s.position.y=t,tn.add(s)}ci.carpetDark=(()=>{let e=Qt(256,256),t=e.getContext("2d");t.fillStyle="#1b1c22",t.fillRect(0,0,256,256);for(let i=0;i<6000;i++){let n=20+Ke()*22;t.fillStyle=`rgba(${n},${n},${n+7},.5)`,t.fillRect(Ke()*256,Ke()*256,1+Ke()*1.4,1+Ke()*2.2)}return Ci(t,256,256,12),e})();ci.fabric=(()=>{let e=Qt(256,256),t=e.getContext("2d");t.fillStyle="#3b3e46",t.fillRect(0,0,256,256),t.strokeStyle="rgba(0,0,0,.18)",t.lineWidth=1;for(let i=0;i<256;i+=4)t.beginPath(),t.moveTo(i,0),t.lineTo(i,256),t.stroke(),t.beginPath(),t.moveTo(0,i),t.lineTo(256,i),t.stroke();return Ci(t,256,256,14),e})();ci.plywood=(()=>{let e=Qt(512,1024),t=e.getContext("2d"),i=t.createLinearGradient(0,0,512,0);i.addColorStop(0,"#c7a368"),i.addColorStop(0.5,"#d2b077"),i.addColorStop(1,"#c39d62"),t.fillStyle=i,t.fillRect(0,0,512,1024);for(let r=0;r<380;r++){let s=Ke()*512,o=Ke()*1024;t.strokeStyle=`rgba(${95+Ke()*40},${60+Ke()*30},25,${0.05+Ke()*0.12})`,t.lineWidth=0.6+Ke()*1.6,t.beginPath(),t.moveTo(s,o),t.bezierCurveTo(s+Ke()*16-8,o+120,s+Ke()*16-8,o+260,s+Ke()*10-5,o+380+Ke()*200),t.stroke()}for(let r=0;r<4;r++){let s=Ke()*512,o=Ke()*1024;for(let a=3;a<22;a+=4)t.strokeStyle=`rgba(90,55,20,${0.25-a/120})`,t.lineWidth=1.5,t.beginPath(),t.ellipse(s,o,a*0.7,a*1.5,0,0,7),t.stroke()}let n=83.9344262295082;for(let r=0;r<6;r++)for(let s=0;s<12;s++){let o=38+r*n,a=40+s*n;if(o>500)continue;t.fillStyle="rgba(30,18,8,.85)",t.beginPath(),t.arc(o,a,5,0,7),t.fill(),t.fillStyle="rgba(255,230,190,.35)",t.beginPath(),t.arc(o-1,a-1,1.6,0,7),t.fill()}return t.strokeStyle="rgba(40,24,10,.7)",t.lineWidth=3,t.strokeRect(1,1,510,1022),Ci(t,512,1024,10),e})();ci.matBlue=(()=>{let e=Qt(256,512),t=e.getContext("2d");return t.fillStyle="#244f9e",t.fillRect(0,0,256,512),Ci(t,256,512,26),t.strokeStyle="rgba(8,16,40,.9)",t.lineWidth=6,t.strokeRect(2,2,252,508),t.strokeStyle="rgba(160,190,255,.35)",t.lineWidth=2,t.setLineDash([7,6]),t.strokeRect(12,12,232,488),e})();ci.steel=(()=>{let e=Qt(128,128),t=e.getContext("2d");return t.fillStyle="#5b6068",t.fillRect(0,0,128,128),Ci(t,128,128,18),e})();var wt=new Ze;Nt.add(wt);var nn=3.2,X_=[[-8.8,-3.85],[8.8,-3.85],[8.8,3.85],[-8.8,3.85]],Y_=[[-3.9,-9.4],[4.3,-9.4],[4.3,-3.85],[-3.9,-3.85]],Rs;function ff(e,t,i){let n=Ir(e,t,i,0,1,1);return n.map.repeat.set(1/t,1/t),n.bumpMap=n.map,n}var xo=(e,t)=>Ir("darkwall",1.4,0.9,0,e,t),CS=(e,t)=>Ir("graphite",1.4,0.85,0,e,t),IS=(e,t)=>Ir("slats",1,0.7,0,e,t),q_=ff("carpetDark",0.6,1);Sc(wt,X_,q_);Sc(wt,Y_,q_);tr(wt,-8.8,-3.85,-3.9,-3.85,nn,xo);tr(wt,-3.9,-3.85,-3.9,-9.4,nn,xo);tr(wt,-3.9,-9.4,4.3,-9.4,nn,IS);tr(wt,4.3,-9.4,4.3,-3.85,nn,xo);tr(wt,4.3,-3.85,8.8,-3.85,nn,xo);tr(wt,8.8,-3.85,8.8,3.85,nn,CS);tr(wt,8.8,3.85,-8.8,3.85,nn,xo,[[9.8,11.6]],0.25,!0);tr(wt,-8.8,3.85,-8.8,-3.85,nn,xo,[[2.65,4.85]]);for(let[e,t]of[[-3.9,-3.85],[4.3,-3.85]])B(wt,0.5,nn,0.5,W(2763569,0.7),e,nn/2,t),B(wt,0.54,0.12,0.54,W(855312,0.6),e,0.06,t);var Z_=()=>W(1908260,0.9);Ea(X_,nn,Z_());Ea(Y_,nn,Z_());B(tn,8.6,0.34,0.55,W(1381914,0.85),0.2,nn-0.17,-3.85);for(let[e,t,i,n,r]of[[0,-3.62,17.2,0.06,6966527],[0,3.62,17.2,0.06,6966527],[-8.58,0,0.06,7.2,6966527],[8.58,0,0.06,7.2,6966527],[0.2,-9.18,8,0.06,16762512],[-3.68,-6.6,0.06,5.2,16762512],[4.08,-6.6,0.06,5.2,16762512]])B(tn,i,0.025,n,Yt(r,3.5),e,nn-0.015,t);for(let e=0;e<6;e++)for(let t of[-1.8,1.8])ot(tn,0.07,0.07,0.02,Yt(16773856,8),-7+e*2.8+1,nn-0.02,t);for(let e=0;e<3;e++)for(let t of[-5.5,-8])ot(tn,0.07,0.07,0.02,Yt(16773856,8),-2.4+e*2.6+0.2,nn-0.02,t);ti.add(new ec(16777215,0.34));un.toneMappingExposure=0.8;ti.environmentIntensity=0.3;qi(wt,0.2,2.8,0,16773598,14,14);qi(wt,-6.2,2.8,-2.2,16773340,10,9);qi(wt,-6.2,2.8,2.2,16773340,10,9);qi(wt,0.2,2.9,-6.6,16774116,16,10);qi(wt,2.9,2.5,2.5,16761466,10,8);qi(wt,2.9,0.35,1.6,11554047,3,4);qi(wt,7.3,2.6,0,9071871,5,7);qi(wt,-0.6,2.7,0.4,3725567,3,6);var ya=(e,t,i,n,r=0,s=0,o=0,a=Nt)=>{let l=new ne(new yt(e,t,i),n);return l.position.set(r,s,o),a.add(l),l};function K_(e,t,i,n){let r=document.createElement("canvas");r.width=e,r.height=t,i(r.getContext("2d"),e,t);let s=new Ni(r);if(s.colorSpace=_t,s.anisotropy=8,n)s.wrapS=s.wrapT=pn,s.repeat.set(n[0],n[1]);return s}var uf=(e,t={})=>new dt({color:e,roughness:t.r??0.6,metalness:t.m??0.1,emissive:t.e??0,emissiveIntensity:t.ei??1,side:t.side}),J_=(e,t=1)=>new gt({color:new ge(e).multiplyScalar(t),toneMapped:!1});function j_(e,t,i,n,r,s,o,a=0){let l=new ne(new zt(e,t),new gt({map:i,transparent:!0,toneMapped:!1}));return l.position.set(r,s,o),l.rotation.y=a,n.add(l),l}var Ta=K_,PS=uf;var ad=j_,_o=[];function LS(e,{w:t=1024,h:i=384,font:n="900 250px Inter,Arial,sans-serif",color:r="#3dff9a",fill:s="#c8ffe2",lw:o=10,blur:a=30}={}){return Ta(t,i,(l,c,h)=>{l.clearRect(0,0,c,h),l.font=n,l.textAlign="center",l.textBaseline="middle",l.shadowColor=r,l.shadowBlur=a,l.lineWidth=o,l.strokeStyle=r,l.lineJoin="round",l.strokeText(e,c/2,h/2+6),l.shadowBlur=0,l.fillStyle=s,l.fillText(e,c/2,h/2+6)})}function DS(e,t="#3dff9a",i=1){let n=LS(e,{w:768,h:192,font:"800 96px Inter,Arial,sans-serif",color:t,fill:"#ffffff",lw:6,blur:18}),r=new Cl(new qs({map:n,transparent:!0,depthWrite:!1,toneMapped:!1}));return r.scale.set(2.4*i,0.6*i,1),r}(function(){let e=ya,t=K_,i=uf,n=J_,r=j_,s={games:[["VAL","Valorant","#ff4655","#fff"],["LoL","League","#1b3a8a","#e9c46a"],["CS2","CS2","#e8793a","#1a0f05"],["RL","Rocket League","#1e7bff","#ff9a4a"],["ARK","Arkheron","#1fb89a","#032a22"],["S2","SMITE 2","#6a3ad0","#ffd68a"]]},o=new Ze;o.position.set(8.19,0,0),o.rotation.y=-Math.PI/2,wt.add(o),Rs=o;let a=i(790562,{r:0.4,m:0.4});e(1.9,0.05,0.85,a,0,0.75,0,o),[[-0.9,-0.38],[0.9,-0.38],[-0.9,0.38],[0.9,0.38]].forEach(([D,N])=>e(0.05,0.75,0.05,a,D,0.375,N,o)),e(1.9,0.015,0.02,n(3824895,1.4),0,0.72,0.43,o);let l=t(512,300,(D,N,Q)=>{D.fillStyle="#12062a",D.fillRect(0,0,N,Q),D.strokeStyle="#ff4fa6",D.globalAlpha=0.5,D.lineWidth=2,D.beginPath(),D.moveTo(20,40),D.quadraticCurveTo(70,80,40,140),D.moveTo(490,30),D.quadraticCurveTo(440,90,470,150),D.stroke(),D.globalAlpha=1,D.font="900 100px Inter,Arial",D.textAlign="center",D.shadowColor="#ff4f8a",D.shadowBlur=24,D.lineWidth=6,D.strokeStyle="#ff4f8a",D.strokeText("FONGER",N/2,180),D.shadowBlur=0,D.fillStyle="#2a0a2e",D.fillText("FONGER",N/2,180)}),c=s&&s.games||[],h=t(512,300,(D,N,Q)=>{let G=D.createLinearGradient(0,0,N,Q);G.addColorStop(0,"#10163f"),G.addColorStop(0.55,"#2a1a6e"),G.addColorStop(1,"#5a1f78"),D.fillStyle=G,D.fillRect(0,0,N,Q),c.forEach((z,Y)=>{let le=60+Y%3*150,k=40+Math.floor(Y/3)*110;D.fillStyle=z[2],D.beginPath(),D.roundRect(le,k,90,90,20),D.fill(),D.fillStyle=z[3],D.font="900 30px Inter,Arial",D.textAlign="center",D.fillText(z[0],le+45,k+56)}),D.fillStyle="rgba(5,6,15,.9)",D.fillRect(0,Q-26,N,26),D.fillStyle="#38e8ff",D.fillRect(10,Q-20,14,14)});function u(D,N,Q,G,z,Y,le,k=0,ee=0,be=0){new gs().load(D,(_e)=>{_e.colorSpace=_t,_e.anisotropy=8;let He=new ne(new zt(N,Q*(_e.image.height/_e.image.width)/(Q/N)),new gt({map:_e,transparent:!0,toneMapped:!1}));He.position.set(z,Y,le),He.rotation.set(k,ee,be),G.add(He)},void 0,()=>{})}let f=i(460814,{r:0.55,m:0.25}),m=i(724246,{r:0.28,m:0.6}),g=i(15329774,{r:0.45,m:0.05}),x=i(1382175,{m:0.8,r:0.35});function d(D,N,Q){let Y=new Ze;Y.position.set(D,0.775,-0.2),Y.rotation.y=N,o.add(Y);let le=new ne(new ji(0.56,0.32,0.025,3,0.006),m);le.position.y=0.3,Y.add(le),r(0.542,0.3,Q,Y,0,0.3,0.0135),e(0.03,0.006,0.001,i(1777451,{m:0.8}),0,0.146,0.0135,Y);let k=new ne(new yr(0.0035,8),n(4063130,2));k.position.set(0.2,0.145,0.0135),Y.add(k);let ee=new ne(new At(0.012,0.014,0.17,12),g);ee.position.set(0,0.2,-0.03),Y.add(ee);let be=new ne(new At(0.11,0.115,0.012,40),g);be.position.set(0,0.006,-0.02),Y.add(be)}function p(D,N,Q){let Y=new Ze;Y.position.set(D,0.775,-0.2),Y.rotation.y=N,o.add(Y);let le=new ne(new ji(0.62,0.355,0.028,3,0.006),m);le.position.y=0.36,Y.add(le),e(0.28,0.2,0.03,f,0,0.36,-0.028,Y),r(0.604,0.33699999999999997,Q,Y,0,0.36,0.0155),e(0.03,0.006,0.001,i(1777451,{m:0.8}),0,0.1875,0.0155,Y);let k=new Ze;k.position.set(D,0.775,-0.405),o.add(k),e(0.06,0.05,0.05,x,0,-0.012,0,k),e(0.05,0.012,0.085,x,0,-0.035,0,k);let ee=new ne(new At(0.014,0.014,0.42,16),x);ee.position.set(0,0.21,0),k.add(ee);let be=new ne(new At(0.02,0.02,0.03,16),x);be.position.set(0,0.4,0),k.add(be),e(0.03,0.022,0.12,x,0,0.4,0.06,k);let _e=new ne(new At(0.017,0.017,0.03,16),x);_e.position.set(0,0.4,0.12),k.add(_e),e(0.03,0.02,0.06,x,0,0.4,0.15,k),e(0.1,0.1,0.012,x,0,0.36,-0.05,Y)}d(-0.52,0.3,l),p(0.12,-0.04,h);{let D=new ne(new At(0.045,0.047,0.01,32),g);D.position.set(-0.02,0.78,-0.08),o.add(D);let N=new ne(new ro(0.028,0.033,32),n(8019199,1.2));N.rotation.x=-Math.PI/2,N.position.set(-0.02,0.7855,-0.08),o.add(N);let Q=new ne(new At(0.03,0.03,0.15,24),i(657933,{r:0.4,m:0.6}));Q.position.set(0.5,0.85,-0.14),o.add(Q);let G=new ne(new At(0.031,0.031,0.012,24),x);G.position.set(0.5,0.92,-0.14),o.add(G)}let y=t(1024,440,(D,N,Q)=>{D.fillStyle="#0c0d11",D.fillRect(0,0,N,Q),D.strokeStyle="#2b2e3a",D.lineWidth=4,D.setLineDash([12,9]),D.strokeRect(12,12,N-24,Q-24),D.setLineDash([]),D.font="700 64px Inter,Arial",D.fillStyle="#9aa0b4",D.textAlign="right",D.fillText("Logitech G",N-52,Q-44)}),M=new ne(new zt(0.9,0.38),new dt({map:y,roughness:0.95}));M.rotation.x=-Math.PI/2,M.position.set(-0.1,0.7765,0.2),o.add(M);let b=t(1480,570,(D,N,Q)=>{D.fillStyle="#0a0b10",D.fillRect(0,0,N,Q);let G=76,z=40,Y=40,le="#6a4cff",k=(_e,He,Ie,ft,ze=1)=>{let ke=z+_e*G+3,pt=Y+He*G+3,ue=Ie*G-6,xe=ze*G-6;D.shadowColor=le,D.shadowBlur=16,D.fillStyle="#12141c",D.beginPath(),D.roundRect(ke,pt,ue,xe,10),D.fill(),D.shadowBlur=0,D.strokeStyle="rgba(106,76,255,.65)",D.lineWidth=2,D.stroke(),D.fillStyle="#c4b8ff",D.font="600 21px Inter,Arial",D.textAlign="center",D.textBaseline="middle",D.fillText(ft,ke+ue/2,pt+xe/2+1)},ee=(_e,He,Ie=0)=>{let ft=Ie;He.forEach(([ze,ke])=>{if(ze!==null)k(ft,_e,ke,ze);ft+=ke})};ee(0,[["Esc",1],[null,1],["F1",1],["F2",1],["F3",1],["F4",1],[null,0.5],["F5",1],["F6",1],["F7",1],["F8",1],[null,0.5],["F9",1],["F10",1],["F11",1],["F12",1],[null,0.25],["Prt",1],["Scr",1],["Pau",1]]);let be="1234567890".split("");ee(1.5,[["`",1],...be.map((_e)=>[_e,1]),["-",1],["=",1],["⌫",2],[null,0.25],["Ins",1],["Hm",1],["Pg↑",1]]),ee(2.5,[["Tab",1.5],..."QWERTYUIOP".split("").map((_e)=>[_e,1]),["[",1],["]",1],["\\",1.5],[null,0.25],["Del",1],["End",1],["Pg↓",1]]),ee(3.5,[["Caps",1.75],..."ASDFGHJKL".split("").map((_e)=>[_e,1]),[";",1],["'",1],["Enter",2.25]]),ee(4.5,[["Shift",2.25],..."ZXCVBNM".split("").map((_e)=>[_e,1]),[",",1],[".",1],["/",1],["Shift",2.75],[null,1.25],["↑",1]]),ee(5.5,[["Ctrl",1.25],["Win",1.25],["Alt",1.25],["",6.25],["Alt",1.25],["Fn",1.25],["Menu",1.25],["Ctrl",1.25],[null,0.25],["←",1],["↓",1],["→",1]])}),v=new Ze;v.position.set(-0.2,0.7765,0.22),o.add(v);let T=new ne(new ji(0.365,0.016,0.142,3,0.006),i(789778,{r:0.4,m:0.55}));T.position.y=0.008,v.add(T);let _=new ne(new zt(0.352,0.13285621621621618),new dt({map:b,emissiveMap:b,emissive:16777215,emissiveIntensity:0.55,roughness:0.6}));_.rotation.x=-Math.PI/2,_.position.y=0.0166,v.add(_),u("logos/razer.png",0.03,0.03,v,0.14,0.0168,-0.06,-Math.PI/2);let S=new Ze;S.position.set(0.27,0.7775,0.21),S.rotation.y=0.12,o.add(S);{let D=new xn(1,40,28),N=D.attributes.position;for(let z=0;z<N.count;z++){let Y=N.getX(z),le=N.getY(z),k=N.getZ(z);le=Math.max(le,0);let ee=k*0.5+0.5,be=0.0225+0.0095*ee;N.setXYZ(z,Y*be*(1-0.18*Math.max(0,le)),le*(0.0115+0.013*ee),k*0.0635)}D.computeVertexNormals(),S.add(new ne(D,i(657932,{r:0.62,m:0.1}))),e(0.0014,0.0008,0.034,i(0),0,0.0185,-0.028,S);let Q=new ne(new At(0.0045,0.0045,0.006,14),i(2763830,{r:0.5,m:0.5}));Q.rotation.z=Math.PI/2,Q.position.set(0,0.0215,-0.026),S.add(Q);let G=new ne(new yr(0.0025,10),n(4063130,0.9));G.rotation.x=-Math.PI/2,G.position.set(0,0.0195,0.01),S.add(G),u("logos/logitech-g.png",0.012,0.012,S,0,0.0245,0.032,-Math.PI/2)}let w=new Ze;w.position.set(-0.7,0.775,0.26),w.rotation.y=0.5,o.add(w);let L=i(14252331,{r:0.28,m:0.85}),I=i(789518,{r:0.9});{let D=new Ze;D.position.y=0.05,D.rotation.x=Math.PI/2-0.15,w.add(D);let N=new ne(new Ln(0.088,0.0085,10,40,Math.PI),i(657932,{r:0.7}));N.position.y=0.02,D.add(N),[-1,1].forEach((Q)=>{let G=new ne(new At(0.047,0.044,0.03,36),L);G.rotation.z=Math.PI/2,G.position.set(Q*0.093,-0.06,0),D.add(G);let z=new ne(new Ln(0.04,0.005,8,32),i(789518,{m:0.7,r:0.35}));z.rotation.y=Math.PI/2,z.position.set(Q*0.108,-0.06,0),D.add(z);let Y=new ne(new At(0.048,0.048,0.022,36),I);Y.rotation.z=Math.PI/2,Y.position.set(Q*0.075,-0.06,0),D.add(Y)})}let U=_o,K="n",P=new Ze;P.position.set(0.83,1.025,-0.15),P.rotation.y=0.28,o.add(P);{let G=i(658194,{r:0.4,m:0.55});e(0.22,0.014,0.46,i(658194,{r:0.6,m:0.4}),0,0.243,0,P),e(0.22,0.012,0.46,G,0,-0.244,0,P),e(0.01,0.5,0.46,G,0.105,0,0,P),e(0.22,0.5,0.01,i(460813),0,0,-0.225,P),[-1,1].forEach((ze)=>e(0.012,0.5,0.012,G,-0.104,0,ze*0.224,P)),e(0.22,0.5,0.012,i(723988,{r:0.5,m:0.4}),0,0,0.224,P);let z=t(256,256,(ze,ke,pt)=>{ze.fillStyle="#17104a",ze.fillRect(0,0,ke,pt);let ue=ze.createRadialGradient(ke/2,pt/2,10,ke/2,pt/2,ke/2);ue.addColorStop(0,"#9a7bff"),ue.addColorStop(1,"#4a2cff"),ze.fillStyle=ue,ze.fillRect(0,0,ke,pt),ze.strokeStyle="#1a0f5a",ze.lineWidth=3;let xe=14;for(let ye=-1;ye<14;ye++)for(let Be=-1;Be<14;Be++){let Fe=Be*xe*1.75+ye%2*xe*0.87,nt=ye*xe*1.5;ze.beginPath();for(let We=0;We<6;We++){let at=Math.PI/3*We+Math.PI/6;ze.lineTo(Fe+Math.cos(at)*xe,nt+Math.sin(at)*xe)}ze.closePath(),ze.stroke()}ze.fillStyle="#05061a",ze.beginPath();for(let ye=0;ye<6;ye++){let Be=Math.PI/3*ye;ze.lineTo(ke/2+Math.cos(Be)*34,pt/2+Math.sin(Be)*34)}ze.closePath(),ze.fill()});e(0.13,0.46,0.004,i(526618),0.02,0,0.2305,P),[0.155,0,-0.155].forEach((ze)=>{let ke=new ne(new yr(0.064,40),new gt({map:z,toneMapped:!1,color:new ge(1.1,1.1,1.4)}));ke.position.set(0.02,ze,0.23320000000000002),P.add(ke)});let Y=-0.08,le=e(0.006,0.44,0.36,i(1053471,{r:0.6,m:0.3}),0.08,0,-0.03,P),k=new ne(new At(0.036,0.036,0.03,32),i(658194,{r:0.3,m:0.7}));k.rotation.z=Math.PI/2,k.position.set(Y+0.03,0.09,0.07),P.add(k);let ee=new ne(new ro(0.019,0.03,32),n(4877567,1.8));ee.rotation.y=-Math.PI/2,ee.position.set(Y+0.0125,0.09,0.07),P.add(ee);let be=(ze)=>P.add(new ne(new fr(new Kn(ze.map((ke)=>new R(...ke))),16,0.0075,8),i(14672878,{r:0.5})));be([[Y+0.03,0.12,0.09],[Y+0.03,0.2,0.1],[Y+0.03,0.235,0.05]]),be([[Y+0.03,0.12,0.05],[Y+0.03,0.2,0],[Y+0.03,0.235,-0.04]]);let _e=new ne(new ji(0.04,0.05,0.3,2,0.006),i(658192,{r:0.35,m:0.7}));_e.position.set(Y+0.03,-0.06,0.02),P.add(_e),e(0.004,0.004,0.26,n(16054015,0.9),Y+0.008,-0.06,0.02,P),[0,0.016].forEach((ze)=>e(0.012,0.11,0.008,n(6966527,1.2),Y+0.03,0.13,-0.09-ze,P));let He=e(0.04,0.03,0.3,i(723986,{r:0.5,m:0.5}),0,0.22,-0.02,P),Ie=new ne(new zt(0.44,0.48),new ki({color:659488,transparent:!0,opacity:0.2,roughness:0.04,clearcoat:1,side:Ot,depthWrite:!1}));Ie.rotation.y=-Math.PI/2,Ie.position.set(-0.108,0,0),P.add(Ie),((ze,ke)=>e(0.006,ke,0.46,G,-0.107,ze,0,P))(0.245,0.012)}{let D=new ur(5913855,3.2,3,1.6);D.position.set(0.85,1.2,-0.6),o.add(D)}let V=new Ze;V.position.set(0.05,0,0.9),V.rotation.y=0.22,o.add(V);{let D=i(856356,{r:0.55,m:0.05}),N=i(1716106,{r:0.5,e:662118,ei:0.12}),Q=i(460813,{r:0.4,m:0.7}),G=new ne(new ji(0.52,0.09,0.5,4,0.04),D);G.position.y=0.5,V.add(G),[-1,1].forEach((k)=>{let ee=new ne(new ji(0.06,0.1,0.46,3,0.025),N);ee.position.set(k*0.25,0.54,0),V.add(ee)});let z=new ne(new ji(0.5,0.72,0.09,4,0.04),D);z.position.set(0,0.92,0.26),z.rotation.x=-0.12,V.add(z),[-1,1].forEach((k)=>{let ee=new ne(new ji(0.07,0.5,0.1,3,0.03),N);ee.position.set(k*0.235,0.88,0.235),ee.rotation.x=-0.12,V.add(ee)});let Y=new ne(new ji(0.26,0.17,0.08,3,0.04),N);Y.position.set(0,1.28,0.3),Y.rotation.x=-0.12,V.add(Y),[-1,1].forEach((k)=>{e(0.04,0.2,0.04,Q,k*0.3,0.68,0.02,V);let ee=new ne(new ji(0.07,0.03,0.26,2,0.012),D);ee.position.set(k*0.3,0.79,-0.03),V.add(ee)});let le=new ne(new At(0.03,0.035,0.34,12),Q);le.position.y=0.3,V.add(le);for(let k=0;k<5;k++){let ee=k/5*Math.PI*2,be=e(0.3,0.03,0.045,Q,0,0.06,0,V);be.position.set(Math.sin(ee)*0.15,0.07,Math.cos(ee)*0.15),be.rotation.y=ee-Math.PI/2;let _e=new ne(new xn(0.028,10,8),i(1118744,{r:0.8}));_e.position.set(Math.sin(ee)*0.31,0.03,Math.cos(ee)*0.31),V.add(_e)}}{let D=new ne(new yr(1.5,64),new dt({map:t(512,512,(N,Q,G)=>{let z=N.createRadialGradient(Q/2,G/2,20,Q/2,G/2,Q/2);z.addColorStop(0,"#1a1f4e"),z.addColorStop(1,"#0c0f2a"),N.fillStyle=z,N.fillRect(0,0,Q,G),N.strokeStyle="#3a5cff",N.globalAlpha=0.6,N.lineWidth=8,N.beginPath(),N.arc(Q/2,G/2,Q/2-14,0,7),N.stroke()}),roughness:1}));D.rotation.x=-Math.PI/2,D.position.set(0.1,0.006,0.75),o.add(D)}})();function NS(){let e=new Ze,t=ya,i=uf;{let o=i(723984,{r:0.38,m:0.65}),a=i(328966,{r:0.9}),l=new gs().load("fun-print.jpg");l.colorSpace=_t,l.anisotropy=8;let c=new ne(new ji(2.4,0.042,0.6,4,0.014),o);c.position.y=0.6789999999999999,e.add(c);let h=new ne(new zt(2.364,0.564),new ki({map:l,roughness:0.5,clearcoat:0.35,clearcoatRoughness:0.35}));h.rotation.x=-Math.PI/2,h.position.y=0.7011999999999999,e.add(h);let u=i(460812);[-0.6,0,0.6].forEach((d)=>t(0.005,0.0012,0.58,u,d,0.7016,0,e)),[-1,1].forEach((d)=>t(2.3,0.03,0.02,o,0,0.6399999999999999,d*0.255,e));let f=1.0999999999999999,m=0.255,g=(d,p,y,M,b,v)=>{let T=new ne(new At(d,d,p,16),y);return T.position.set(M,b,v),e.add(T),T};[-1,0,1].forEach((d)=>[-1,1].forEach((p)=>{let y=d*f,M=p*m;g(0.0175,0.38,o,y,0.47,M),g(0.024,0.05,o,y,0.36,M),g(0.0145,0.36,o,y,0.18,M),g(0.019,0.02,a,y,0.01,M)}));let x=(d,p,y)=>{let M=new R(...d),b=new R(...p),v=b.clone().sub(M),T=new ne(new At(y,y,v.length(),10),o);T.position.copy(M.clone().add(b).multiplyScalar(0.5)),T.quaternion.setFromUnitVectors(new R(0,1,0),v.normalize()),e.add(T)};[-f,0,f].forEach((d)=>x([d,0.2,-m],[d,0.2,m],0.011)),[-f,f].forEach((d)=>x([d,0.56,-m],[d,0.56,m],0.009))}return e}function FS(e,t,i,n,r){ot(e,0.045,0.034,0.11,new dt({color:r,roughness:0.4,side:Ot}),t,i+0.055,n,16)}function ed(e,t,i,n,r=1,s=13936170){let o=[[0.001,0],[0.07,0],[0.07,0.015],[0.03,0.03],[0.02,0.12],[0.05,0.15],[0.07,0.17],[0.09,0.26],[0.1,0.34],[0.08,0.36],[0.075,0.34],[0.07,0.25],[0.05,0.18],[0.001,0.17]].map((l)=>new Z(l[0],l[1])),a=od(e,new Yl(o,24),new dt({color:s,roughness:0.18,metalness:1}),t,i,n);return a.scale.setScalar(r),a}function US(e,t,i){B(e,t,i,0.03,W(921104,0.5),0,i/2+0.2,-0.18);for(let r of[-1,1])B(e,0.05,i,0.4,W(921104,0.5),r*(t/2-0.025),i/2+0.2,0);B(e,t,0.06,0.4,W(921104,0.5),0,i+0.2,0),B(e,t,0.2,0.4,W(921104,0.5),0,0.1,0),B(e,t-0.12,i-0.2,0.02,new dt({color:12577023,transparent:!0,opacity:0.12,roughness:0.02}),0,i/2+0.2,0.2);let n=4;for(let r=0;r<n;r++){let s=0.45+r*((i-0.5)/n);B(e,t-0.1,0.02,0.34,W(3816000,0.3,0.4),0,s,0),B(e,t-0.1,0.01,0.01,Yt(14674687,5),0,s-0.015,0.14);for(let o=0;o<4;o++)if((r+o)%3===0)ed(e,-t/2+0.25+o*(t-0.5)/3,s+0.01,0,0.3+Ke()*0.12,[13936170,12633288][o%2]);else B(e,0.16,0.12+Ke()*0.05,0.14,W([2838527,16726843,2007130,13206586][o],0.5),-t/2+0.25+o*(t-0.5)/3,s+0.07,0)}}(function(){let e=new Ze;e.position.set(-8.675,0,-2.6),e.rotation.y=Math.PI/2,wt.add(e),B(e,1,1,0.1,W(1908258,0.6),0,1.73,0),B(e,0.08,1,0.25,W(1908258,0.6),-0.5,1.73,0.09),B(e,0.08,1,0.25,W(1908258,0.6),0.5,1.73,0.09);let t=Qt(512,512),i=t.getContext("2d");i.translate(256,256);let n=["#e8e1c0","#111"];for(let a=0;a<20;a++)for(let[l,c,h,u]of[[240,215,"#d12","#093"],[215,150,"#e8e1c0","#111"],[150,135,"#d12","#093"],[135,40,"#e8e1c0","#111"]])i.beginPath(),i.moveTo(0,0),i.arc(0,0,l,(a-5.5)*Math.PI/10,(a-4.5)*Math.PI/10),i.closePath(),i.fillStyle=a%2?h:u,i.fill(),i.beginPath(),i.moveTo(0,0),i.arc(0,0,c,(a-5.5)*Math.PI/10,(a-4.5)*Math.PI/10),i.closePath(),i.fillStyle=a%2?c==215||c==135?"#e8e1c0":n[1]:n[0];i.setTransform(1,0,0,1,0,0),i.fillStyle="#111",i.fillRect(0,0,512,512),i.translate(256,256);let r=[20,1,18,4,13,6,10,15,2,17,3,19,7,16,8,11,14,9,12,5];for(let a=0;a<20;a++){let l=(a-0.5)*Math.PI/10-Math.PI/2,c=l+Math.PI/10,h=a%2===0,u=[[250,220,h?"#c8202a":"#0b8a3e"],[220,150,h?"#111":"#e8e1c0"],[150,125,h?"#c8202a":"#0b8a3e"],[125,40,h?"#111":"#e8e1c0"]];for(let[f,m,g]of u)i.beginPath(),i.arc(0,0,f,l,c),i.arc(0,0,m,c,l,!0),i.closePath(),i.fillStyle=g,i.fill()}i.beginPath(),i.arc(0,0,40,0,7),i.fillStyle="#0b8a3e",i.fill(),i.beginPath(),i.arc(0,0,16,0,7),i.fillStyle="#c8202a",i.fill();let s=new Ni(t);s.colorSpace=_t;let o=new ne(new yr(0.225,48),new dt({map:s,roughness:0.8}));o.position.set(0,1.73,0.06),e.add(o),yn(e,"DARTS",0.8,0.28,"#ff3b3b",0,2.45,0.05,0,"bold 180px Arial Black"),B(e,0.6,0.45,0.04,W(1448984,0.8),0.95,1.6,0.05),B(e,0.01,0.01,0.01,W(0)),B(e,0.9,0.012,0.04,W(15658734,0.5),0,0.007,2.37),B(e,0.9,0.012,0.01,Yt(16726843,3),0,0.012,2.35),qi(e,0,2.5,0.5,16771522,4,5)})();var Zh=(e,t=0.95)=>Ir("fabric",0.5,t,0,1,1,{color:e}),$t=(e,t,i,n,r,s,o,a,l=0.07,c=0,h=0)=>{let u=new ne(new ji(t,i,n,4,l),r);return u.position.set(s,o,a),u.rotation.x=c,u.rotation.z=h,u.castShadow=u.receiveShadow=!0,e.add(u),u},nf;function BS(){let e=new Ze;e.position.set(0.2,0,-4.3),e.rotation.y=Math.PI,wt.add(e);let t=Zh(4869462),i=Zh(6843512),n=Zh(7567493),s=new Fi([[-2.7,0],[2.7,0],[2.7,2.6],[1.7,2.6],[1.7,1],[-1.7,1],[-1.7,2.6],[-2.7,2.6]].map((p)=>new Z(p[0],-p[1]))),o=new Mr(s,{depth:0.24,bevelEnabled:!0,bevelThickness:0.05,bevelSize:0.05,bevelSegments:4,curveSegments:4});o.rotateX(-Math.PI/2);let a=new ne(o,t);a.position.y=0.1,a.castShadow=a.receiveShadow=!0,e.add(a);for(let[p,y]of[[-2.6,0.1],[2.6,0.1],[-2.6,2.5],[2.6,2.5],[-1.8,0.9],[1.8,0.9]])ot(e,0.03,0.03,0.08,W(723725,0.4,0.6),p,0.04,y,10);let l=Yt(6966527,0.9);B(e,5.2,0.012,0.02,l,0,0.075,0.03),$t(e,5.4,0.58,0.28,t,0,0.67,0.14,0.09);for(let p of[-1,1])$t(e,0.28,0.58,2.32,t,p*2.56,0.67,1.44,0.09);for(let p=0;p<3;p++)$t(e,1.1,0.17,0.7,i,-1.13+p*1.13,0.5,0.65,0.07);for(let p of[-1,1])$t(e,0.72,0.17,0.7,n,p*2.06,0.5,0.65,0.07),$t(e,0.72,0.17,0.78,i,p*2.06,0.5,1.4,0.07),$t(e,0.72,0.17,0.78,i,p*2.06,0.5,2.2,0.07),$t(e,0.22,0.46,0.9,i,p*2.27,0.9,1.2,0.09,0,-p*0.16),$t(e,0.22,0.46,0.9,i,p*2.27,0.9,2.1,0.09,0,-p*0.16);for(let p=0;p<5;p++)$t(e,0.95,0.5,0.2,i,-1.9+p*0.95,0.88,0.37,0.09,-0.2);let c=[13208108,2781048,15130834,8007498,2781048,13208108];[[-2.1,0.75,0.98,0.45,-0.5],[-1.3,0.72,0.55,0.4,0.3],[2.15,0.75,0.97,0.45,0.5],[1.3,0.72,0.55,0.4,-0.3],[-2.2,0.72,2.35,0.4,1.4],[2.2,0.72,2.35,0.4,-1.4]].forEach(([p,y,M,b,v],T)=>{let _=$t(e,b,b,0.13,Zh(c[T],1),p,y,M,0.05,-0.3);_.rotation.y=v});let h=Ir("slats",1,0.45,0,1.6,0.9,{color:4862754});$t(e,1.5,0.1,0.85,h,0,0.44,1.75,0.03),$t(e,1.2,0.3,0.6,W(1182986,0.6),0,0.24,1.75,0.02),$t(e,1.4,0.04,0.8,W(1708557,0.7),0,0.1,1.75,0.01),B(e,0.32,0.05,0.22,W(2775690,0.6),-0.35,0.51,1.7),B(e,0.3,0.04,0.2,W(12599338,0.6),-0.35,0.555,1.7),ot(e,0.12,0.09,0.08,W(2369067,0.4,0.3),0.35,0.53,1.8,24);let u=Qt(1024,700),f=u.getContext("2d"),m=f.createLinearGradient(0,0,1024,700);m.addColorStop(0,"#16182a"),m.addColorStop(1,"#2a1740"),f.fillStyle=m,f.fillRect(0,0,1024,700),f.strokeStyle="#7a5cff",f.lineWidth=8,f.setLineDash([26,16]),f.strokeRect(40,40,944,620),f.setLineDash([]),f.fillStyle="#9aa0c8",f.textAlign="center",f.textBaseline="middle",f.font="bold 74px Arial",f.fillText("GAME RUG",512,300),f.font="38px Arial",f.fillText('placeholder – window.setRugTexture("moje.jpg")',512,380);let g=new Ni(u);g.colorSpace=_t,g.anisotropy=8,nf=new dt({map:g,roughness:1});let x=new ne(new zt(3.8,2.6),nf);x.rotation.set(-Math.PI/2,0,Math.PI),x.position.set(0,0.014,1.75),x.receiveShadow=!0,e.add(x);let d=new ne(new zt(3.86,2.66),W(921362,1));d.rotation.x=-Math.PI/2,d.position.set(0,0.011,1.75),e.add(d)}BS();window.setRugTexture=(e)=>new gs().load(e,(t)=>{t.colorSpace=_t,t.anisotropy=8,nf.map=t,nf.needsUpdate=!0});(function(){let t=new Ze;t.position.set(0.2,0,-9.2),wt.add(t),B(t,2.5,1.45,0.05,W(328966,0.3,0.5),0,1.65,0);let i=Qt(640,360),n=i.getContext("2d"),r=n.createLinearGradient(0,0,640,360);r.addColorStop(0,"#0b2a4a"),r.addColorStop(0.5,"#4a1f8f"),r.addColorStop(1,"#e8602e"),n.fillStyle=r,n.fillRect(0,0,640,360),n.fillStyle="rgba(255,255,255,.9)",n.font="bold 54px Arial",n.textAlign="center",n.fillText("MAN CAVE",320,190);let s=new Ni(i);s.colorSpace=_t;let o=new ne(new zt(2.42,1.36),new gt({map:s,toneMapped:!1}));o.position.set(0,1.65,0.03),t.add(o),B(t,2.8,0.5,0.42,W(1381914,0.55),0,0.3,0.17),B(t,2.8,0.03,0.44,W(4862754,0.45),0,0.565,0.17),B(t,1.2,0.07,0.1,W(723725,0.4,0.5),0,0.62,0.17);for(let a of[-1.75,1.75])B(t,0.3,1.5,0.22,W(1052948,0.5),a,0.78,0.12),B(t,0.22,0.22,0.02,W(657932,0.3,0.6),a,1.2,0.24),ot(t,0.09,0.09,0.02,W(1908258,0.5),a,0.6,0.235,24).rotation.x=Math.PI/2;B(t,2.6,0.03,0.03,Yt(16734920,3),0,0.9,0.01).visible=!1,B(t,2.6,0.02,0.02,Yt(6966527,3.5),0,0.88,-0),B(t,2.7,0.012,0.01,Yt(16734920,3),0,0.5,0.39),yn(t,"MAN CAVE",1.9,0.34,"#ff4fa6",0,2.75,0.03,0,"bold 130px Arial Black",void 0,!1)})();function OS(){let e=Rs,t=uf(790562,{r:0.4,m:0.4});for(let l of[-1,1]){let c=l*1.775;ya(1.65,0.05,0.85,t,c,0.75,0,e),ya(0.05,0.75,0.05,t,l*2.575,0.375,-0.38,e),ya(0.05,0.75,0.05,t,l*2.575,0.375,0.38,e),ya(1.65,0.015,0.02,J_(3824895,1.4),c,0.72,0.43,e)}let i=new ne(new zt(5.3,0.9),new gt({color:2768127,transparent:!0,opacity:0.16,toneMapped:!1}));i.rotation.x=-Math.PI/2,i.position.set(0,0.012,0.05),e.add(i);let n=(l,c)=>{ot(e,0.012,0.012,0.22,W(855570,0.4,0.8),l,0.86,-0.28,12),B(e,0.2,0.01,0.16,W(855570,0.4,0.8),l,0.78,-0.2)},r=(l,c,h)=>{let u=Qt(1024,Math.round(1024*h/c));l(u.getContext("2d"),u.width,u.height);let f=new Ni(u);return f.colorSpace=_t,f.anisotropy=8,f},s=r((l,c,h)=>{let u=l.createLinearGradient(0,0,c,0);u.addColorStop(0,"#05103a"),u.addColorStop(0.5,"#4a1f8f"),u.addColorStop(1,"#ff4f6a"),l.fillStyle=u,l.fillRect(0,0,c,h),l.fillStyle="rgba(255,255,255,.12)";for(let f=0;f<40;f++)l.fillRect(Ke()*c,Ke()*h*0.7,40+Ke()*120,3);l.fillStyle="#fff",l.font="bold 70px Arial",l.fillText('ULTRAWIDE 49"',60,h-70),l.strokeStyle="#38e8ff",l.lineWidth=4,l.beginPath(),l.arc(c/2,h/2,40,0,7),l.stroke()},1.2,0.34),o=r((l,c,h)=>{l.fillStyle="#0b0d1c",l.fillRect(0,0,c,h),l.fillStyle="#38e8ff";for(let u=0;u<14;u++)l.fillRect(40,60+u*110,200+Ke()*600,18);l.fillStyle="#ff4f8a",l.font="bold 56px Arial",l.fillText("STATS",40,46)},0.34,0.6);{let u=new At(1.1,1.1,0.34,48,1,!0,Math.PI-0.5454545454545454,1.0909090909090908),f=new ne(u,new gt({map:s,toneMapped:!1,side:jt}));f.scale.x=-1,f.position.set(-1.78,1.12,0.8500000000000001),e.add(f);let m=new ne(new At(1.12,1.12,0.37,48,1,!0,Math.PI-0.5454545454545454,1.0909090909090908),W(526605,0.4,0.5));m.material.side=Ot,m.scale.x=-1,m.position.copy(f.position),e.add(m),n(-1.78,0),B(e,1.24,0.012,0.03,Yt(6966527,3),-1.78,0.94,-0.3)}for(let[l,c]of[[1.45,0.35],[2.1,0.7]]){let h=new Ze;h.position.set(l,0.775,-0.18),h.rotation.y=c,e.add(h),$t(h,0.36,0.62,0.025,W(460811,0.4,0.5),0,0.5,0,0.006);let u=new ne(new zt(0.34,0.6),new gt({map:o,toneMapped:!1}));u.position.set(0,0.5,0.0135),h.add(u),ot(h,0.012,0.012,0.25,W(855570,0.4,0.8),0,0.1,-0.03,12),B(h,0.18,0.01,0.14,W(855570,0.4,0.8),0,0.004,-0.02),B(h,0.36,0.012,0.02,Yt(16732042,3),0,0.19,-0.02)}let a=(l,c)=>{let h=new ne(new zt(0.9,1.6),new gt({color:new ge(c).multiplyScalar(0.5),transparent:!0,opacity:0.9,toneMapped:!1}));h.position.set(8.665,1.9,l),h.rotation.y=-Math.PI/2,wt.add(h)};[[-2.1,6966527],[-1.05,3717375],[0,16732070],[1.05,3717375],[2.1,6966527]].forEach(([l,c])=>a(l,c)),B(wt,0.03,0.03,5.4,Yt(6966527,3.5),8.66,1.2,0),B(wt,0.03,0.03,5.4,Yt(16732070,3.5),8.66,2.7,0),yn(wt,"FONGER",2.4,0.5,"#ff4fa6",8.64,2.95,0,-Math.PI/2,"bold 150px Arial Black",void 0,!1)}OS();var Wu=[];function HS(e){if(!Wu[e]){let i=[],n=(h,u,f,m,g,x=1,d=1,p=1,y=0,M=0)=>{h.scale(x,d,p),h.rotateX(y),h.rotateZ(M),h.translate(f,m,g);let b=h.attributes.position.count,v=new Float32Array(b*3),T=new ge(u);for(let _=0;_<b;_++)v[_*3]=T.r,v[_*3+1]=T.g,v[_*3+2]=T.b;h.setAttribute("color",new Zt(v,3)),i.push(h)},r=15780000,s=(h,u,f)=>new yt(h,u,f),o=(h)=>new xn(h,12,10),a=(h,u)=>new $s(h,u,8),l=(h,u)=>new At(h,h,u,12);if(n(l(0.05,0.012),1381658,0,0.006,0),e===0){n(s(0.024,0.07,0.03),1849994,-0.016,0.047,0),n(s(0.024,0.07,0.03),1849994,0.016,0.047,0),n(s(0.07,0.075,0.04),15763996,0,0.12,0),n(s(0.02,0.07,0.02),15763996,-0.045,0.12,0),n(s(0.02,0.07,0.02),15763996,0.045,0.12,0),n(o(0.036),15780000,0,0.19,0),n(s(0.07,0.014,0.04),2767466,0,0.2,0.005);for(let h=0;h<7;h++){let u=h/7*Math.PI*2;n(a(0.014,0.05),16765498,Math.sin(u)*0.026,0.225,Math.cos(u)*0.022,1,1,1,Math.cos(u)*0.5,-Math.sin(u)*0.5)}}else if(e===1)n(s(0.07,0.08,0.04),2772688,0,0.1,0),n(s(0.024,0.06,0.03),1382778,-0.016,0.04,0),n(s(0.024,0.06,0.03),1382778,0.016,0.04,0),n(s(0.09,0.12,0.008),13638698,0,0.1,-0.026,1,1,1,0.1),n(o(0.034),15780000,0,0.17,0),n(o(0.036),1315866,0,0.18,-0.006,1,0.8,1),n(s(0.03,0.03,0.01),16765498,0,0.11,0.022);else if(e===2)n(a(0.05,0.14),6959024,0,0.08,0),n(o(0.032),15780000,0,0.17,0),n(a(0.044,0.1),2757744,0,0.245,0,1,1,1,-0.15),n(l(0.056,0.008),2757744,0,0.2,0),n(l(0.004,0.24),5913120,0.06,0.12,0.02),n(o(0.014),3729663,0.06,0.25,0.02);else if(e===3)n(s(0.07,0.08,0.05),12106952,0,0.1,0),n(s(0.03,0.06,0.035),5922412,-0.02,0.04,0),n(s(0.03,0.06,0.035),5922412,0.02,0.04,0),n(s(0.05,0.045,0.045),15132910,0,0.17,0),n(s(0.036,0.01,0.01),3729663,0,0.175,0.024),n(s(0.025,0.07,0.025),13638698,-0.05,0.11,0),n(s(0.025,0.07,0.025),13638698,0.05,0.11,0),n(a(0.008,0.04),16765498,0,0.215,0);else if(e===4){n(s(0.07,0.085,0.04),1381916,0,0.1,0),n(s(0.024,0.06,0.03),735778,-0.016,0.04,0),n(s(0.024,0.06,0.03),735778,0.016,0.04,0),n(o(0.034),15780000,0,0.17,0);for(let h=0;h<6;h++){let u=h/6*Math.PI*2;n(a(0.012,0.04),3072096,Math.sin(u)*0.022,0.2,Math.cos(u)*0.02,1,1,1,Math.cos(u)*0.6,-Math.sin(u)*0.6)}n(s(0.008,0.2,0.012),14673648,0.06,0.13,0.02,1,1,1,0,-0.25)}else if(e===5)n(s(0.04,0.05,0.03),15755944,0,0.04,0),n(o(0.055),15780000,0,0.12,0),n(o(0.058),15755944,0,0.135,-0.008,1,0.85,1),n(o(0.01),1118481,-0.02,0.12,0.05),n(o(0.01),1118481,0.02,0.12,0.05);else n(s(0.09,0.12,0.06),1908520,0,0.07,0),n(s(0.07,0.07,0.005),16765498,0,0.08,0.031),n(o(0.025),13638698,0,0.08,0.034,1,1,0.3),n(s(0.09,0.015,0.062),3729663,0,0.14,0);let c=o_(i,!1);i.forEach((h)=>h.dispose()),Wu[e]=new ne(c,new dt({vertexColors:!0,roughness:0.5,metalness:0.05}))}let t=Wu[e].clone();return t.castShadow=!0,t}function $_(e,t){let i=new Ze;i.position.set(e,0,t),i.rotation.y=-Math.PI/2,wt.add(i);let n=3,r=6,s=0.36,o=0.028,a=0.39,l=n*s+o,c=r*s+o,h=W(2367260,0.55,0.05),u=W(1052173,0.8);for(let f=0;f<=n;f++)B(i,o,c,a,h,-l/2+o/2+f*s,c/2,0);for(let f=0;f<=r;f++)B(i,l,o,a,h,0,o/2+f*s,0);B(i,l,c,0.01,u,0,c/2,-a/2+0.01);for(let f=1;f<=r;f++)B(i,l-2*o,0.006,0.014,Yt(16767400,2.2),0,f*s-0.004,a/2-0.05);for(let f=0;f<r;f++)for(let m=0;m<n;m++){let g=-l/2+o/2+(m+0.5)*s,x=o+f*s+(f===0?0:0),d=Ke()<0.55?2:1;for(let p=0;p<d;p++){let y=HS(Math.floor(Ke()*7));y.position.set(g+(d===2?p?0.08:-0.08:0),x,0.03+(Ke()-0.5)*0.06),y.rotation.y=(Ke()-0.5)*0.8,y.scale.setScalar(0.95+Ke()*0.25),i.add(y)}if(Ke()<0.25)B(i,0.1,0.02,0.07,W([2838527,16726843,2007130][Math.floor(Ke()*3)],0.6),g,x+0.2+0,-0.12).visible=!1}}$_(8.475,3.17);$_(8.475,-3.17);function zS(){let t=0.092*Math.sqrt(3)/2;for(let i of[-6.95,-5.75]){let n=new Ze;n.position.set(i,0,0),n.rotation.y=Math.PI/2,wt.add(n),n.add(NS());for(let r of[-1,1]){let s=r<0?14692399:3107801;for(let o=0;o<4;o++){let a=4-o;for(let l=0;l<a;l++)FS(n,r*(1.08-o*t),0.702,(l-(a-1)/2)*0.092,s)}}for(let r of[-0.3,0.3])ot(n,0.017,0.017,0.002,W(16777215,0.3),0,0.703,r,12).visible=!1}qi(wt,-6.35,2.6,0,16773336,4,5),B(wt,2.2,0.012,0.012,Yt(16763210,2.5),-6.35,nn-0.35,0).visible=!0}zS();(function(){let e=new Ze;e.position.set(-6.4,0,3.725),e.rotation.y=Math.PI,wt.add(e),B(e,3.3,2.5,0.06,W(1381143,0.8),0,1.5,0.03);for(let t=0;t<12;t++)B(e,0.02,2.4,0.03,W(2761760,0.5),-1.6+t*0.29,1.5,0.075);for(let t=0;t<3;t++)for(let i=0;i<8;i++){let n=-1.4+i*0.4,r=2.2-t*0.38,s=[13936170,12633288,11692597][(i+t)%3];B(e,0.05,0.22,0.01,W([2838527,16726843,2007130][(i*2+t)%3],0.6),n,r+0.15,0.09),ot(e,0.07,0.07,0.015,new dt({color:s,roughness:0.22,metalness:1}),n,r,0.1).rotation.x=Math.PI/2}B(e,3.2,0.03,0.18,W(3812642,0.4),0,1.05,0.14);for(let t=0;t<6;t++)ed(e,-1.3+t*0.5,1.065,0.14,0.38+t%2*0.08,[13936170,12633288,11692597][t%3]);yn(e,"HALL OF FAME",2.6,0.38,"#ffc94a",0,2.78,0.08,0,"bold 125px Arial Black",void 0,!1);for(let t of[-8.35,-4.45]){let i=new Ze;i.position.set(t,0,3.35),wt.add(i),B(i,0.5,1,0.5,W(1052690,0.4),0,0.5,0),B(i,0.5,0.01,0.5,Yt(11462399,3),0,1,0),ed(i,0,1.01,0,1),B(i,0.5,0.7,0.5,new dt({color:12577023,transparent:!0,opacity:0.13,roughness:0.02,metalness:0}),0,1.36,0)}for(let[t,i,n]of[[-7.7,-3.55,0],[-6.15,-3.55,0],[-3.59,-6.6,Math.PI/2],[4,-6.6,-Math.PI/2]]){let r=new Ze;r.position.set(t,0,i),r.rotation.y=n,wt.add(r),US(r,1.3,2.1)}})();function GS(){let e=new Ze;e.position.set(2.9,0,3.725),e.rotation.y=Math.PI,wt.add(e);let t=W(1447707,0.85,0.1),i=Ir("slats",1,0.6,0,3.6,1,{color:11569754}),n=Ir("slats",1,0.35,0,4.2,0.9,{color:5978660}),r=W(13225170,0.22,1);$t(e,3.4,1,0.6,t,-0.3,0.5,1.65,0.02);let s=new ne(new yt(3.3,0.9,0.04),i);s.position.set(-0.3,0.5,1.97),e.add(s),$t(e,3.8,0.06,0.95,n,-0.3,1.06,1.83,0.02),B(e,3.3,0.014,0.014,Yt(16732120,4),-0.3,1.02,2.28),B(e,3.3,0.02,0.02,Yt(3725567,4),-0.3,0.06,2),B(e,3.4,0.08,0.03,W(723725,0.5),-0.3,0.04,1.96);let o=ot(e,0.022,0.022,3.2,r,-0.3,0.22,2.3,12);o.rotation.z=Math.PI/2;for(let w of[-1.7,1.1])ot(e,0.018,0.018,0.2,r,w,0.12,2.3,10);$t(e,3.6,0.9,0.5,t,0,0.45,0.27,0.02);let a=new ne(new yt(3.5,0.8,0.03),i);a.position.set(0,0.45,0.535),e.add(a),B(e,3.7,0.05,0.56,n,0,0.925,0.28),B(e,3.5,0.012,0.012,Yt(6966527,4),0,0.03,0.55);let l=(()=>{let w=Qt(512,256),L=w.getContext("2d"),I=L.createLinearGradient(0,0,512,0);I.addColorStop(0,"#ff3ea0"),I.addColorStop(0.5,"#7a4cff"),I.addColorStop(1,"#2ab8ff"),L.fillStyle=I,L.fillRect(0,0,512,256);let U=new Ni(w);return U.colorSpace=_t,U})();B(e,3.6,1.7,0.05,W(723725,0.6),0,1.85,0.03);let c=new ne(new zt(3.4,1.55),new gt({map:l,toneMapped:!1,color:13421772}));c.position.set(0,1.85,0.06),e.add(c);for(let w of[-1,1])B(e,0.04,1.7,0.34,W(723725,0.5),w*1.8,1.85,0.2);B(e,3.64,0.04,0.34,W(723725,0.5),0,2.72,0.2);let h=new At(0.036,0.036,0.2,10),u=new At(0.012,0.02,0.1,10),f=new At(0.036,0.026,0.1,12,1,!0),m=48,g=new Cn(h,new dt({roughness:0.15,metalness:0.1,transparent:!0,opacity:0.88}),m),x=new Cn(u,g.material,m),d=new Cn(f,new dt({color:14674687,roughness:0.05,transparent:!0,opacity:0.45,side:Ot}),20),p=new Ge,y=[2787898,8010258,13213738,3824335,12066847,1710618,14673642,9054858],M=0,b=0;for(let w=0;w<3;w++){let L=1.4+w*0.5;B(e,3.4,0.025,0.3,W(855312,0.3,0.3),0,L,0.2),B(e,3.4,0.008,0.01,Yt(16777215,4),0,L-0.02,0.34);for(let I=0;I<16&&M<m;I++){let U=-1.55+I*0.206;if(w===0&&I>9){p.makeTranslation(U,L+0.05,0.2),d.setMatrixAt(b++,p);continue}p.makeTranslation(U,L+0.113,0.2),g.setMatrixAt(M,p),g.setColorAt(M,new ge(y[(I+w*3)%y.length])),p.makeTranslation(U,L+0.263,0.2),x.setMatrixAt(M,p),x.setColorAt(M,new ge(y[(I+w*3)%y.length])),M++}}g.count=M,x.count=M,d.count=b,e.add(g,x,d);let v=new Ze;v.position.set(1.2,0.95,0.3),e.add(v),ot(v,0.05,0.05,0.3,r,0,0.15,0,20);let T=ot(v,0.014,0.014,0.16,r,0,0.3,0.07,10);T.rotation.x=Math.PI/2;for(let[w,L]of[[-0.025,16763210],[0.025,16726843]])ot(v,0.007,0.007,0.1,W(L,0.4,0.4),w,0.38,0,8),ot(v,0.01,0.01,0.025,r,w,0.26,0.14,8);B(v,0.3,0.02,0.2,r,0,0,0.18),B(v,0.26,0.004,0.16,W(1381914,0.4),0,0.012,0.18),yn(e,"BAR",0.9,0.3,"#38d8ff",-0.3,2.95,0.05,0,"bold 170px Arial Black",void 0,!1);let _=W(1908001,0.55,0.1),S=W(13619928,0.2,1);for(let w of[-1.6,-0.75,0.1,0.95]){let L=new Ze;L.position.set(w,0,2.85),L.rotation.y=Math.PI+(Ke()-0.5)*0.3,e.add(L),ot(L,0.22,0.2,0.08,_,0,0.74,0,28),ot(L,0.21,0.21,0.025,W(723725,0.5),0,0.69,0,24),ot(L,0.025,0.025,0.66,S,0,0.35,0,10),ot(L,0.2,0.22,0.03,S,0,0.015,0,24);let I=new ne(new Ln(0.17,0.012,8,24),S);I.rotation.x=Math.PI/2,I.position.set(0,0.3,0),L.add(I),$t(L,0.34,0.22,0.06,_,0,1,-0.2,0.03,-0.12);for(let U of[-1,1]){ot(L,0.01,0.01,0.26,S,U*0.16,0.86,-0.18,8);let K=$t(L,0.04,0.03,0.26,_,U*0.18,0.99,-0.06,0.012)}}}GS();var rt={cx:-10.8,cz:-11.5,R:7,H:6},en=new Ze;Nt.add(en);var Cr=[...Array(6)].map((e,t)=>{let i=t*Math.PI/3;return[rt.cx+rt.R*Math.cos(i),rt.cz+rt.R*Math.sin(i)]}),Xi=(e,t,i)=>new R(e,t,i),Q_=(e=16777215)=>{let t=hf(ci.plywood,1,1);return new dt({map:t,bumpMap:t,bumpScale:0.6,roughness:0.72,metalness:0,side:Ot,color:e})},rf=Q_(15917768),z_=Q_(14731684);function tf(e,t,i){let n=[],r=[];for(let a of e){let[l,c,h,u]=a.p,f=l.distanceTo(c)/1.22,m=l.distanceTo(h)/2.44,g=h.distanceTo(u)/1.22,x=a.ou||0,d=a.ov||0,p=Math.max(f,g);n.push(l.x,l.y,l.z,c.x,c.y,c.z,u.x,u.y,u.z,l.x,l.y,l.z,u.x,u.y,u.z,h.x,h.y,h.z),r.push(x,d,x+f,d,x+g,d+m,x,d,x+g,d+m,x,d+m)}let s=new Xe;s.setAttribute("position",new Re(n,3)),s.setAttribute("uv",new Re(r,2)),s.computeVertexNormals();let o=new ne(s,t);return o.receiveShadow=!0,i.add(o),o}var jr=Math.tan(Math.PI/6);function Kh(e,t,i){let n=Cr[e],r=Cr[(e+1)%6],s=Math.hypot(r[0]-n[0],r[1]-n[1]),o={x:(r[0]-n[0])/s,z:(r[1]-n[1])/s},a={x:-o.z,z:o.x},l=(n[0]+r[0])/2,c=(n[1]+r[1])/2;if(a.x*(rt.cx-l)+a.z*(rt.cz-c)<0)a={x:-a.x,z:-a.z};let[h,u]=i||[0,s],f=(d,p,y)=>Xi(n[0]+o.x*p+a.x*d,y,n[1]+o.z*p+a.z*d),m=[],g=[],x=[];for(let d=0;d<t.length-1;d++){let[p,y]=t[d],[M,b]=t[d+1],v={p:[f(p,h+p*jr,y),f(p,u-p*jr,y),f(M,h+M*jr,b),f(M,u-M*jr,b)],ou:(h+p*jr)/1.22,ov:t.slice(0,d).reduce((T,_,S)=>T+Math.hypot(t[S+1][0]-_[0],t[S+1][1]-_[1]),0)/2.44};if(m.push(v),!i)g.push({p:[Xi(n[0],y,n[1]),f(p,p*jr,y),Xi(n[0],b,n[1]),f(M,M*jr,b)]}),x.push({p:[Xi(r[0],y,r[1]),f(p,s-p*jr,y),Xi(r[0],b,r[1]),f(M,s-M*jr,b)]})}return{quads:m,caps:[...g,...x],P:f,L:s,n:a,t:o,A:n,prof:t}}var kS=[[[1,0],[0,3.6],[0,6]],null,[[0,0],[0,1.2],[1.6,3.4],[1.6,4.6],[0.9,6]],[[0,0],[0,1],[0.9,2.4],[0.9,3.4],[2,5],[0.4,6]],[[0,0],[0,0.8],[2,3.6],[2,6]],[[0,0],[0,3],[0.8,4.2],[0.8,6]]],Jh=[15213098,2845695,16765482,2273370,16742940,10632432,16736176,15921906,1381658,2806996],e1=[[],[],[],[],[],[],[]],xa=new ct;function mc(e,t,i){let[n,r,s,o]=e.p,a=n.clone().lerp(r,t),l=s.clone().lerp(o,t);return a.lerp(l,i)}function gc(e,t){let[i,n,r]=e.p,s=n.clone().sub(i).cross(r.clone().sub(i)).normalize();if(s.dot(t)<0)s.negate();return s}function sf(e,t,i,n,r){xa.position.copy(t).addScaledVector(i,0.004),xa.lookAt(t.clone().add(i)),xa.rotateZ(r),xa.scale.setScalar(1),xa.updateMatrix(),e1[e].push({m:xa.matrix.clone(),c:new ge(n)})}function td(e,t,i,n,r=0.55){let s=e.p[0].distanceTo(e.p[2]);if(s<0.5)return;let o=Math.max(2,Math.round(s/r)),a=gc(e,n);for(let l=0;l<t;l++)for(let c=0;c<o;c++){let h=Math.sin((c+l*1.7)*1.1)*0.5/t,u=(l+0.5)/t+h*0.55,f=(c+0.45)/o,m=mc(e,u,f),g=(c*3+l*5)%7,x=c<1?5:g===6?4:g===5?5:g%5;if(sf(x===5&&c>0?1:x,m,a,Jh[(i+l)%Jh.length],(Ke()-0.5)*1.6),(c+l)%3===0){let d=mc(e,Math.min(0.97,Math.max(0.03,u+0.07)),Math.min(0.98,f+0.5/o));sf(5,d,a,Jh[(i+l)%Jh.length],Ke()*3)}}}function VS(){let e=[()=>{let i=new xn(0.07,12,9);return i.scale(1,0.8,0.65),i.translate(0,0,0.035),i},()=>{let i=new ji(0.11,0.03,0.05,2,0.012);return i.translate(0,0,0.025),i},()=>{let i=new xn(0.1,14,10);return i.scale(1,1,0.38),i},()=>{let i=new Ul(0.028,0.09,4,8);return i.rotateZ(Math.PI/2),i.translate(0,0,0.04),i},()=>{let i=new Ln(0.05,0.022,8,14);return i.translate(0,0,0.02),i},()=>{let i=new $s(0.032,0.04,6);return i.rotateX(Math.PI/2),i.translate(0,0,0.02),i},()=>{let i=new vh(0.2);return i.scale(1,1,0.5),i}],t=new dt({color:16777215,roughness:0.5,metalness:0});e.forEach((i,n)=>{let r=e1[n];if(!r.length)return;let s=new Cn(i(),t,r.length);r.forEach((o,a)=>{s.setMatrixAt(a,o.m),s.setColorAt(a,o.c)}),s.castShadow=!0,en.add(s)})}(function(){let t=(i,n)=>Xi(rt.cx-n.p[0].x,0,rt.cz-n.p[0].z);for(let i=0;i<6;i++){if(i===1){let r=Kh(1,[[0,0],[0,6]],[0,2.5]),s=Kh(1,[[0,0],[0,6]],[4.1,7]),o=Kh(1,[[0,2.3],[0,6]],[2.5,4.1]);for(let h of[r,s,o])tf(h.quads,rf,en),h.quads.forEach((u)=>td(u,h===o?2:2,0,t(h,u),0.6));let a=Cr[1],l=-1,c=(h)=>a[0]+l*h;for(let h of[2.5,4.1])B(en,0.1,2.3,0.3,W(1381914,0.5),c(h),1.15,a[1]+0.02);B(en,1.7,0.1,0.3,W(1381914,0.5),c(3.3),2.3,a[1]+0.02);continue}let n=Kh(i,kS[i]);tf(n.quads,i%2?z_:rf,en),tf(n.caps,z_,en),n.quads.forEach((r)=>td(r,4,i*2,gc(r,Xi(rt.cx-r.p[0].x,0,rt.cz-r.p[0].z)).add(Xi(0,0,0)),0.55))}for(let i=0;i<6;i++){let n=Cr[i],r=Cr[(i+1)%6],s=Math.hypot(r[0]-n[0],r[1]-n[1]),o=new ne(new yt(s+0.3,rt.H,0.2),W(1513500,0.9)),a=(n[0]+r[0])/2,l=(n[1]+r[1])/2,c=Xi(a-rt.cx,0,l-rt.cz).normalize();if(o.position.set(a+c.x*0.12,rt.H/2,l+c.z*0.12),o.rotation.y=-Math.atan2(r[1]-n[1],r[0]-n[0]),i!==1)en.add(o)}})();(function(){let i=[{y:0,r:1.75},{y:2.1,r:2.45},{y:4.7,r:1.45}],n=[];i.forEach((h,u)=>{let f=[];for(let m=0;m<7;m++){let g=m/7*Math.PI*2+u*0.12,x=0.9+(m*37+u*11)%10/50;f.push(Xi(rt.cx+Math.sin(g)*h.r*x,h.y,rt.cz+Math.cos(g)*h.r*x))}n.push(f)});let r=[];for(let h=0;h<2;h++)for(let u=0;u<7;u++){let f=(u+1)%7;r.push({p:[n[h][u],n[h][f],n[h+1][u],n[h+1][f]],ou:u*0.37,ov:h*0.9})}let s=tf(r,new dt({map:rf.map,bumpMap:rf.map,bumpScale:0.6,roughness:0.72,side:Ot,color:15652528,flatShading:!0}),en);s.castShadow=!0;let o=n[2].map((h)=>new Z(h.x,-h.z)),a=new so(new Fi(o));a.rotateX(-Math.PI/2);let l=new ne(a,W(13216376,0.8));l.position.y=4.7,en.add(l),r.forEach((h,u)=>{let f=mc(h,0.5,0.5),m=Xi(f.x-rt.cx,0,f.z-rt.cz).normalize(),g=gc(h,m);td(h,u<7?2:2,3+u,g,0.55)});let c=r[0];{let h=mc(c,0.5,0.22),u=gc(c,Xi(h.x-rt.cx,0,h.z-rt.cz));sf(6,h,u,2845695,0);let f=mc(r[3],0.5,0.3);sf(6,f,gc(r[3],Xi(f.x-rt.cx,0,f.z-rt.cz)),15213098,1)}})();VS();(function(){let i=[...Array(6)].map((h,u)=>{let f=u*Math.PI/3;return[rt.cx+6.99*Math.cos(f),rt.cz+6.99*Math.sin(f)]}),n=i[1][1]+0.1,r=[i[0],i[1],[-9.7,n],[-9.7,n-0.95],[-11.5,n-0.95],[-11.5,n],i[2],i[3],i[4],i[5]],s=new Fi(r.map((h)=>new Z(h[0],-h[1]))),o=new Mr(s,{depth:0.26,bevelEnabled:!0,bevelThickness:0.04,bevelSize:0.04,bevelSegments:3});o.rotateX(-Math.PI/2);let a=hf(ci.matBlue,1,0.5),l=new ne(o,new dt({map:a,bumpMap:a,bumpScale:1.2,roughness:0.85}));l.position.y=0,l.receiveShadow=!0,en.add(l),Sc(en,[...Array(6)].map((h,u)=>Cr[u]),ff("concrete",1.5,0.9));for(let h=0;h<6;h++){if(h===1)continue;let u=Cr[h],f=Cr[(h+1)%6],m=Math.hypot(f[0]-u[0],f[1]-u[1]),g=new ne(new yt(m-0.3,0.03,0.05),W(16765482,0.5)),x=(u[0]+f[0])/2,d=(u[1]+f[1])/2,p=Xi(rt.cx-x,0,rt.cz-d).normalize();g.position.set(x+p.x*0.07,0.32,d+p.z*0.07),g.rotation.y=-Math.atan2(f[1]-u[1],f[0]-u[0]),en.add(g)}let c=new ne(new At(3.3,3.4,0.14,7),new dt({map:a,color:6988543,roughness:0.9}));c.position.set(rt.cx,0.33,rt.cz),en.add(c)})();(function(){Ea(Cr,rt.H,W(1776673,0.9));for(let t=0;t<3;t++){let i=t*Math.PI/3,n=new ne(new yt(rt.R*2-0.3,0.36,0.28),W(5067356,0.45,0.8));n.position.set(rt.cx,rt.H-0.2,rt.cz),n.rotation.y=-i,tn.add(n);let r=new ne(new yt(rt.R*2-1.2,0.03,0.06),Yt(16773594,7));r.position.set(rt.cx,rt.H-0.4,rt.cz),r.rotation.y=-i,tn.add(r)}for(let t=0;t<6;t++){let i=t*Math.PI/3+Math.PI/6,n=rt.cx+Math.cos(i)*4.6,r=rt.cz+Math.sin(i)*4.6;ot(tn,0.12,0.12,0.14,W(855312,0.4,0.5),n,rt.H-0.1,r,14),ot(tn,0.1,0.1,0.01,Yt(16774888,9),n,rt.H-0.18,r,14)}for(let t=0;t<3;t++){let i=t*Math.PI*2/3+0.5;qi(en,rt.cx+Math.cos(i)*4.2,rt.H-0.6,rt.cz+Math.sin(i)*4.2,16774372,22,14)}qi(en,rt.cx,rt.H-0.8,rt.cz,16777215,18,12),yn(en,"BOULDER",2.6,0.5,"#ffb42a",-10.6,4.4,Cr[1][1]-0.12,Math.PI,"bold 170px Arial Black",void 0,!1),B(tn,14,0.02,0.02,Yt(16757802,2.5),rt.cx,rt.H-0.02,rt.cz+5).visible=!1})();var fe=new Ze;Nt.add(fe);var bn=3,t1=(e,t)=>Ir("tile",0.6,0.35,0,e,t),df=(e,t)=>Ir("plaster",1.2,0.9,0,e,t);Sc(fe,[[-12.4,-5.45],[-8.8,-5.45],[-8.8,3.85],[-3.6,3.85],[-3.6,7.7],[-12.4,7.7]],ff("tile",0.6,0.35));Sc(fe,[[-3.6,3.85],[0.4,3.85],[0.4,7.7],[-3.6,7.7]],ff("graphite",1,0.6));Ea([[-12.4,-5.45],[-8.8,-5.45],[-8.8,3.85],[-12.4,3.85]],bn,W(15000802,0.9));Ea([[-12.4,3.85],[-3.6,3.85],[-3.6,7.7],[-12.4,7.7]],bn,W(15000802,0.9));Ea([[-3.6,3.85],[0.4,3.85],[0.4,7.7],[-3.6,7.7]],bn,W(2434604,0.9));tr(fe,-12.4,-5.37,-12.4,7.7,bn,df);tr(fe,-8.8,-5.37,-8.8,-3.85,bn,df);tr(fe,-3.6,3.85,-3.6,7.7,bn,t1);tr(fe,0.4,3.85,0.4,7.7,bn,xo);for(let[e,t,i,n]of[[-10.6,-1,3.4,0.08],[-10.6,2.6,3.4,0.08],[-8.2,5.8,0.08,3.4],[-6.2,5.8,3.4,0.08]])B(tn,i,0.03,n,Yt(16054527,6),e,bn-0.02,t);var Wt=W(14212064,0.14,1),lc=W(16053489,0.12,0.02),Xu=W(11449275,0.3,0.9),oY=W(1447707,0.8),G_=(e,t)=>{let i=parseInt(e.slice(1),16),n=Math.min(255,(i>>16&255)*t)|0,r=Math.min(255,(i>>8&255)*t)|0,s=Math.min(255,(i&255)*t)|0;return`rgb(${n},${r},${s})`},Gt=(e,t,i,n,r,s,o=0,a=0,l=0)=>{let c=new ne(t,i);return c.position.set(n,r,s),c.rotation.set(o,a,l),c.castShadow=c.receiveShadow=!0,e.add(c),c},li=(e,t,i,n=20)=>new At(e,t,i,n);(function(){let s=(x,d,p)=>Ta(160,480,(y,M,b)=>{let v=y.createLinearGradient(0,0,M,0);v.addColorStop(0,G_(d,1.18)),v.addColorStop(0.5,d),v.addColorStop(1,G_(d,0.82)),y.fillStyle=v,y.fillRect(0,0,M,b),y.strokeStyle="rgba(0,0,0,.5)",y.lineWidth=5,y.strokeRect(3,3,M-6,b-6),y.strokeStyle="rgba(255,255,255,.07)",y.lineWidth=2,y.strokeRect(9,9,M-18,b-18),y.fillStyle="rgba(0,0,0,.7)";for(let T=0;T<8;T++)y.fillRect(24,30+T*13,M-48,5);for(let T=0;T<6;T++)y.fillRect(24,b-118+T*13,M-48,5);y.fillStyle="#dfe2e7",y.fillRect(M/2-27,156,54,28),y.fillStyle="#12151c",y.font="bold 22px Arial",y.textAlign="center",y.fillText(String(x),M/2,178),y.fillStyle="#c9ccd2",y.fillRect(M-40,222,11,96),y.fillStyle="#7d818a",y.fillRect(M-41,222,2,96),y.fillStyle="#b9bdc5",y.beginPath(),y.arc(M-34,344,9,0,7),y.fill(),y.fillStyle="#1a1a1a",y.fillRect(M-35,338,2.5,12),y.fillStyle="rgba(255,255,255,.05)",y.fillRect(0,0,14,b)}),o=Ta(160,480,(x,d,p)=>{let y=x.createLinearGradient(0,0,0,p);y.addColorStop(0,"#2a2f3b"),y.addColorStop(1,"#0f1116"),x.fillStyle=y,x.fillRect(0,0,d,p),x.fillStyle="#4b5160",x.fillRect(8,90,d-16,6),x.fillStyle="#9aa0ab",x.fillRect(8,60,d-16,4),x.fillStyle="#c2c6cf",x.fillRect(d/2-3,60,6,3),x.fillStyle="#c0392b",x.beginPath(),x.moveTo(d/2-40,66),x.lineTo(d/2+40,66),x.lineTo(d/2+50,300),x.lineTo(d/2-50,300),x.closePath(),x.fill(),x.fillStyle="rgba(0,0,0,.25)",x.fillRect(d/2-4,90,8,210),x.fillStyle="#2a2d35",x.fillRect(14,p-90,d-28,50)}),a=W(1449002,0.45,0.4),l=W(2765124,0.4,0.5),c=W(790036,0.6),h=0.46,u=-12.045;for(let x=0;x<14;x++){let d=-4.7+x*0.5,p=x===3||x===9;B(fe,0.46,1.9,0.488,a,-12.045,1.05,d);let y=s(x+1,x%2?"#1f3052":"#27406e",p),M=new dt({map:y,roughness:0.4,metalness:0.35,side:Ot});if(!p)Gt(fe,new zt(0.472,1.88),M,-11.794,1.05,d,0,Math.PI/2,0);else{Gt(fe,new zt(0.46,1.86),new dt({map:o,roughness:0.7}),-11.796000000000001,1.05,d,0,Math.PI/2,0);let b=new Ze;if(b.position.set(-11.790000000000001,1.05,d-0.236),b.rotation.y=x===3?1.15:1.5,fe.add(b),Gt(b,new zt(0.472,1.88),M,0,0,0.236,0,Math.PI/2,0),B(b,0.012,1.88,0.012,Wt,0,0,0),x===9)B(fe,0.2,0.32,0.26,W(2059076,0.8),-11.985,0.34,d+0.02),B(fe,0.2,0.04,0.2,W(1448482,0.6),-11.985,0.52,d+0.02)}B(fe,0.012,1.9,0.012,Wt,-11.797,1.05,d-0.25)}let f=-1.4500000000000002,m=7;B(fe,0.5,0.05,m+0.04,l,-12.03,2.03,f),B(fe,0.48000000000000004,0.1,m,c,-12.035,0.05,f),B(fe,0.46,1.9,0.02,a,-12.045,1.05,-4.955),B(fe,0.46,1.9,0.02,a,-12.045,1.05,2.0549999999999997),B(fe,0.5,0.88,m+0.04,W(2304829,0.6),-12.03,2.51,f).visible=!1;let g=W(10121026,0.5);for(let x of[-2.6,1.9]){for(let d=0;d<4;d++)B(fe,0.1,0.035,2.6,g,-11.05+d*0.105,0.46,x);for(let d of[-1.2,0,1.2]){B(fe,0.42,0.035,0.05,Xu,-10.9,0.43,x+d);for(let p of[-0.19,0.19])B(fe,0.04,0.43,0.04,Xu,-10.9+p,0.215,x+d)}B(fe,0.34,0.02,2.4,W(5724511,0.5,0.5),-10.9,0.16,x);for(let d=0;d<4;d++){let p=-10.9+(d%2?0.05:-0.05),y=x-0.9+d*0.55,M=[15263976,14239787,2846681,3092275][d];$t(fe,0.11,0.07,0.29,W(M,0.6),p,0.205,y,0.025),$t(fe,0.09,0.03,0.14,W(14342874,0.7),p,0.245,y-0.07,0.01)}}$t(fe,0.3,0.28,0.5,W(2106413,0.7),-10.88,0.62,-2,0.07),B(fe,0.02,0.03,0.46,W(14239787,0.5),-10.74,0.7,-2),ot(fe,0.035,0.035,0.19,new dt({color:6735615,transparent:!0,opacity:0.6,roughness:0.1}),-10.9,0.58,-3.25,14),ot(fe,0.036,0.036,0.04,W(15263976,0.4),-10.9,0.69,-3.25,14),B(fe,0.34,0.05,0.46,W(15921906,0.95),-10.9,0.5,1.3),B(fe,0.34,0.16,0.05,W(15921906,0.95),-10.9,0.43,1.52),B(fe,0.04,0.05,1.5,Xu,-8.92,1.78,-4.65),[[-5.25,12597547],[-4.95,2842536],[-4.3,3092275],[-4.05,15263976]].forEach(([x,d])=>{ot(fe,0.012,0.012,0.06,Wt,-8.88,1.74,x,8).rotation.z=Math.PI/2,$t(fe,0.1,0.62,0.34,W(d,0.9),-8.84,1.4,x,0.04)}),B(fe,0.03,1.4,1.2,new dt({color:13625855,roughness:0.04,metalness:0.85}),-8.93,1.4,-2.55),B(fe,0.036,1.48,0.05,W(1119000,0.5),-8.925,1.4,-1.97),B(fe,0.036,1.48,0.05,W(1119000,0.5),-8.925,1.4,-3.13),B(fe,0.036,0.05,1.24,W(1119000,0.5),-8.925,2.12,-2.55),B(fe,0.036,0.05,1.24,W(1119000,0.5),-8.925,0.68,-2.55),yn(fe,"ŠATNA",1.5,0.4,"#7fd0ff",-8.93,2.6,0.1,-Math.PI/2,"bold 170px Arial Black",void 0,!1),qi(fe,-10.6,2.6,-2,16054527,7,8),qi(fe,-10.6,2.6,2.4,16054527,6,8)})();(function(){let e=new dt({color:14939135,transparent:!0,opacity:0.34,roughness:0.12,side:Ot,depthWrite:!1}),t=(l)=>new dt({color:l,roughness:0.35}),i=W(13620185,0.35),n=W(3159098,0.5,0.8);B(fe,5.2,0.14,0.012,W(2781048,0.35),-6.2,1.08,3.99);for(let l=0;l<4;l++){let c=-8+l*1.1,h=l===1||l===3;B(fe,1.04,0.04,1.02,i,c,0.02,4.5),ot(fe,0.07,0.07,0.012,n,c,0.046,4.5,18);for(let f=0;f<3;f++)B(fe,0.1,0.004,0.012,W(10133672,0.4,1),c,0.053,4.47+f*0.03);B(fe,1.04,0.012,0.03,W(16762926,0.6),c,0.046,5),ot(fe,0.012,0.012,0.36,Wt,c,2.12,4.17,12).rotation.x=Math.PI/2,Gt(fe,li(0.115,0.115,0.018,28),Wt,c,2.1,4.38),Gt(fe,li(0.096,0.096,0.004,28),W(2106410,0.5,0.6),c,2.09,4.38);for(let f=0;f<8;f++){let m=f*Math.PI/4;Gt(fe,li(0.007,0.007,0.006,6),W(9146521,0.3,1),c+Math.cos(m)*0.06,2.088,4.38+Math.sin(m)*0.06)}B(fe,0.2,0.13,0.025,Wt,c,1.15,4.012),Gt(fe,li(0.03,0.03,0.03,16),Wt,c-0.05,1.15,4.04,Math.PI/2),Gt(fe,li(0.022,0.022,0.03,16),Wt,c+0.055,1.15,4.04,Math.PI/2),B(fe,0.012,0.05,0.012,W(14036269,0.4),c+0.055,1.18,4.06),B(fe,0.012,0.05,0.012,W(3107801,0.4),c-0.05,1.18,4.06),B(fe,0.04,0.4,0.04,Wt,c+0.28,1.5,4.03),Gt(fe,li(0.014,0.014,0.16,8),Wt,c+0.28,1.65,4.12,Math.PI/2-0.5),Gt(fe,li(0.03,0.022,0.2,10),W(1776930,0.5),c+0.28,1.42,4.12,Math.PI/2-0.5),Gt(fe,li(0.025,0.025,0.14,10),t([14239787,3107801,4042346,15263976][l]),c-0.36,1.37,4.07),Gt(fe,li(0.028,0.028,0.18,10),t(15921906),c-0.3,1.39,4.07),B(fe,0.3,0.012,0.1,W(13625855,0.1,0.3),c-0.33,1.27,4.05),B(fe,0.26,0.012,0.14,W(2781048,0.5),c+0.27,0.75,4.065).visible=!1,B(fe,0.026,1.9,0.96,e,c+0.55,1.07,4.5),B(fe,0.03,0.03,0.98,Wt,c+0.55,2.04,4.5),B(fe,0.03,1.95,0.03,Wt,c+0.55,1.05,4.99),B(fe,0.03,0.03,0.04,Wt,c+0.55,2,4);let u=new Ze;u.position.set(c-0.5,1.05,5),u.rotation.y=h?l===1?-1.2:-0.7:0,fe.add(u),B(u,0.98,1.9,0.022,e,0.5,0,0),B(u,0.98,0.03,0.03,Wt,0.5,0.94,0),B(u,0.03,0.1,0.1,Wt,0.88,0,0.03).visible=!0;for(let f of[-0.7,0.7])B(u,0.04,0.08,0.04,Wt,0,f,0)}B(fe,0.026,1.9,0.96,e,-8.55,1.07,4.5),B(fe,0.03,0.03,0.98,Wt,-8.55,2.04,4.5);let r=W(8826550,0.5),s=W(4943992,0.5);[4.15,5.15,6.15,7.15].forEach((l)=>{B(fe,1.5,1.75,0.04,r,-11.53,1.03,l),B(fe,1.52,0.03,0.05,Wt,-11.53,1.92,l),ot(fe,0.014,0.014,0.16,Wt,-10.85,0.08,l,8)});let a=(l)=>{B(fe,0.22,0.42,0.4,lc,-12.16,0.64,l),B(fe,0.24,0.035,0.42,lc,-12.16,0.86,l),Gt(fe,li(0.028,0.028,0.014,14),Wt,-12.16,0.885,l);let c=[[0,0],[0.08,0],[0.1,0.12],[0.17,0.28],[0.2,0.4],[0.19,0.43],[0.165,0.43],[0.15,0.36],[0,0.3]].map((g)=>new Z(g[0],g[1]));Gt(fe,new Yl(c,28),new dt({color:16053489,roughness:0.12,side:Ot}),-11.86,0,l).scale.set(1.45,1,1),Gt(fe,new Ln(0.155,0.022,10,28),W(1711395,0.35),-11.86,0.452,l,Math.PI/2).scale.set(1.45,1,1);let f=new Ze;f.position.set(-12.01,0.46,l),f.rotation.z=1.38,fe.add(f),Gt(f,li(0.17,0.17,0.02,24),W(1711395,0.35),0.27,0,0).scale.set(1.5,1,1),B(fe,0.1,0.12,0.12,Wt,-11.56,0.7,l+0.46),ot(fe,0.045,0.045,0.1,W(16777215,0.9),-11.56,0.7,l+0.46,14).rotation.x=Math.PI/2};[4.65,5.65,6.65].forEach((l,c)=>{a(l);let h=new Ze;h.position.set(-10.83,1,l-0.45),h.rotation.y=[1.15,0,0.8][c],fe.add(h),B(h,0.03,1.72,0.9,s,0,0,0.45),B(h,0.032,0.05,0.1,Wt,0.002,0,0.78),B(h,0.034,0.03,0.06,W(c===1?14036269:4042346,0.4),-0.002,0.07,0.78),B(h,0.032,0.03,0.9,Wt,0,0.86,0.45);for(let u of[-0.6,0.6])B(h,0.04,0.07,0.03,Wt,0,u,0.01);ot(fe,0.04,0.04,0.02,W(15263976,0.5),-12.25,1.6,l,14).rotation.z=Math.PI/2}),B(fe,0.2,0.34,0.2,W(7041144,0.5,0.6),-11,0.17,6.95),[-10.2,-9.6,-9].forEach((l)=>{Gt(fe,new Ul(0.12,0.24,6,14),lc,l,1,7.46).scale.set(1,1,0.55),B(fe,0.2,0.34,0.06,lc,l,0.78,7.52),Gt(fe,li(0.012,0.012,0.5,8),Wt,l,1.45,7.55),B(fe,0.1,0.07,0.03,Wt,l,1.3,7.55),Gt(fe,li(0.012,0.012,0.06,8),W(3159098,0.6),l,0.7,7.425),ot(fe,0.06,0.06,0.012,W(3159098,0.5,0.7),l,0.007,7.3,14)}),[-10.5,-9.9,-9.3,-8.7].forEach((l)=>B(fe,0.03,0.78,0.34,r,l,1.05,7.38)),[-6,-5.1,-4.2].forEach((l)=>{B(fe,0.52,0.1,0.42,lc,l,0.86,7.36),B(fe,0.4,0.02,0.3,W(13620442,0.2),l,0.915,7.37),ot(fe,0.025,0.025,0.004,W(3159098,0.5,0.8),l,0.926,7.4,12),Gt(fe,li(0.014,0.014,0.14,10),Wt,l,0.99,7.52),Gt(fe,li(0.012,0.012,0.12,10),Wt,l,1.05,7.46,Math.PI/2),B(fe,0.03,0.03,0.03,Wt,l+0.07,0.95,7.52),B(fe,0.7,0.9,0.02,new dt({color:14676479,roughness:0.03,metalness:0.9}),l,1.62,7.56),B(fe,0.74,0.94,0.012,W(1382172,0.5),l,1.62,7.572),B(fe,0.66,0.012,0.012,Yt(15398143,3),l,2.12,7.55)}),[-5.55,-4.65].forEach((l)=>{B(fe,0.07,0.17,0.07,W(16250871,0.3),l,1.14,7.53),Gt(fe,li(0.012,0.012,0.05,8),Wt,l,1.25,7.5,Math.PI/2)}),$t(fe,0.14,0.36,0.26,W(12106948,0.25,0.9),-3.82,1.42,6.75,0.03),B(fe,0.016,0.02,0.18,W(1382172,0.4),-3.74,1.28,6.75),$t(fe,0.16,0.28,0.24,W(15264236,0.3,0.5),-3.82,1.35,5.95,0.05),Gt(fe,li(0.035,0.03,0.08,14),W(2106410,0.4),-3.82,1.2,5.95),ot(fe,0.15,0.13,0.55,W(7041144,0.35,0.85),-3.95,0.28,7.2,18),ot(fe,0.155,0.155,0.03,W(3159098,0.5),-3.95,0.57,7.2,18);for(let[l,c]of[[-7.3,6.2],[-5,5.8]]){ot(fe,0.1,0.1,0.008,W(6975351,0.4,0.8),l,0.006,c,18);for(let h=0;h<3;h++)B(fe,0.14,0.004,0.012,W(3159098,0.5),l,0.011,c-0.04+h*0.04)}yn(fe,"SPRCHY · WC",2.4,0.4,"#7fd0ff",-6.2,2.6,4,0,"bold 140px Arial Black",void 0,!1),qi(fe,-6.2,2.6,5.7,15398143,7,8)})();(function(){B(fe,0.45,0.42,2,W(2763827,0.6),0.15,0.21,6),B(fe,0.5,0.06,2,W(8018488,0.45),0.15,0.45,6),yn(fe,"BADMINTON  ›",2.2,0.36,"#6fd0ff",-1.9,2.6,7.45,Math.PI,"bold 140px Arial Black",void 0,!1);for(let e of[-3.3,0.1]){ot(fe,0.2,0.15,0.4,W(2369067,0.6),e,0.2,4.2,16),ot(fe,0.03,0.03,0.6,W(2780986,0.8),e,0.7,4.2,6);let t=new ne(new xn(0.28,12,9),W(2058804,0.8));t.scale.y=1.2,t.position.set(e,1.15,4.2),fe.add(t)}qi(fe,-1.6,2.6,5.8,16771276,6,7)})();B(fe,5.2,bn,0.03,t1(5.2,bn),-6.2,bn/2,3.99);B(fe,0.03,2.85,2.85,df(2.85,2.85),-8.94,1.425,-2.425);B(fe,0.03,bn,2.65,df(2.65,bn),-8.94,bn/2,2.525);B(fe,0.03,0.15,2.2,W(1381914,0.6),-8.94,0.075,0.1).visible=!1;(function(){let e=new Ze;e.position.set(-0.6,0,0.4),e.rotation.y=Math.PI/2,wt.add(e);let t=1.2,i=0.68,n=0.93,r=Ta(1200,680,(d,p,y)=>{for(let M=0;M<12;M++)d.fillStyle=M%2?"#2d8a40":"#34964a",d.fillRect(M*p/12,0,p/12+1,y);Ci(d,p,y,10),d.strokeStyle="rgba(255,255,255,.92)",d.lineWidth=6,d.strokeRect(12,12,p-24,y-24),d.beginPath(),d.moveTo(p/2,12),d.lineTo(p/2,y-12),d.stroke(),d.beginPath(),d.arc(p/2,y/2,82,0,7),d.stroke(),d.fillStyle="#fff",d.beginPath(),d.arc(p/2,y/2,9,0,7),d.fill();for(let M of[0,1]){let b=M?p-12:12,v=M?-1:1;d.strokeRect(M?p-12-150:12,y/2-170,150,340),d.strokeRect(M?p-12-62:12,y/2-92,62,184),d.beginPath(),d.arc(b+v*150,y/2,72,-Math.PI/2,Math.PI/2,M===1),d.stroke(),d.fillStyle="#fff",d.beginPath(),d.arc(b+v*105,y/2,7,0,7),d.fill()}}),s=W(1381914,0.42,0.1),o=W(1974310,0.55),a=14036269,l=3106518;B(e,1.36,0.14,0.72,s,0,n-0.1,0);let c=new ne(new zt(t,i),new dt({map:r,roughness:0.55}));c.rotation.x=-Math.PI/2,c.position.y=n,e.add(c);for(let d of[-1,1])$t(e,1.44,0.14,0.07,s,0,n+0.035,d*0.375,0.02),B(e,1.46,0.012,0.075,W(14212064,0.2,1),0,n+0.108,d*0.375);for(let d of[-1,1]){for(let y of[-1,1])$t(e,0.07,0.14,0.27,s,d*0.665,n+0.035,y*0.2+y*0.02,0.02);B(e,0.07,0.05,0.22,o,d*0.665,n+0.075,0),B(e,0.2,0.012,0.19,W(460810,0.8),d*0.74,n-0.032,0);let p=B(e,0.16,0.02,0.2,W(2763827,0.5),d*0.8,n-0.07,0);p.rotation.z=-d*0.22,B(e,0.012,0.045,0.2,W(2763827,0.5),d*0.875,n-0.04,0),B(e,0.14,0.045,0.012,W(2763827,0.5),d*0.8,n-0.045,0.098),B(e,0.14,0.045,0.012,W(2763827,0.5),d*0.8,n-0.045,-0.098);for(let y of[-1,1]){let M=B(e,0.12,0.05,0.12,o,d*0.6,n+0.025,y*0.3);M.rotation.y=Math.PI/4}B(e,0.016,0.02,0.6,Yt(d>0?14036269:3106518,1.6),d*0.69,n-0.17,0)}B(e,1.3,0.01,0.01,Yt(3725567,2.2),0,n-0.175,0.365),B(e,1.3,0.01,0.01,Yt(3725567,2.2),0,n-0.175,-0.365);for(let[d,p]of[[-0.6,-0.31],[0.6,-0.31],[-0.6,0.31],[0.6,0.31]])ot(e,0.036,0.026,0.82,s,d,0.41,p,14),ot(e,0.02,0.026,0.03,W(13159378,0.2,1),d,0.014,p,12),B(e,0.07,0.04,0.07,W(2763827,0.5),d,0.84,p);B(e,1.2,0.035,0.03,s,0,0.3,0.31),B(e,1.2,0.035,0.03,s,0,0.3,-0.31),B(e,0.03,0.035,0.62,s,-0.6,0.3,0),B(e,0.03,0.035,0.62,s,0.6,0.3,0);let h=[["A",1],["A",2],["B",3],["A",5],["B",5],["A",3],["B",2],["B",1]],u={1:0,2:0.24,3:0.2,5:0.115},f=n+0.075,m=W(14212064,0.15,1),g=W(789776,0.6);h.forEach(([d,p],y)=>{let M=-0.518+y*0.148,b=d==="A"?a:l,v=d==="A"?1:-1,T=new Ze;T.position.set(M,f,(y*37%7-3)*0.012),e.add(T);let _=0.7,S=0.5,w=d==="A"?1:-1;Gt(T,li(0.0075,0.0075,_+S,10),m,0,0,w*(_-S)/2,Math.PI/2),Gt(T,li(0.0205,0.0205,0.16,14),g,0,0,w*(_-0.05),Math.PI/2),Gt(T,li(0.022,0.022,0.012,14),W(15263976,0.4),0,0,w*(_-0.135),Math.PI/2),Gt(T,li(0.0215,0.0215,0.012,14),m,0,0,w*_,Math.PI/2),Gt(T,li(0.014,0.014,0.02,12),g,0,0,-w*0.4,Math.PI/2);let L=(y%3-1)*0.35;for(let I=0;I<p;I++){let U=p===1?0:(I-(p-1)/2)*u[p],K=new Ze;K.position.set(0,0,U),K.rotation.z=L*v*0.5,T.add(K),B(K,0.03,0.058,0.04,W(b,0.55),0,-0.02,0),B(K,0.026,0.034,0.03,W(x(b),0.6),0,-0.067,0),B(K,0.04,0.012,0.05,g,v*0.008,-0.088,0),Gt(K,new xn(0.014,10,8),W(15782832,0.6),0,0.02,0)}});function x(d){return(d>>16&255)*0.55<<16|(d>>8&255)*0.55<<8|(d&255)*0.55}Gt(e,new xn(0.019,14,10),W(16250871,0.35),0.08,n+0.02,0.06);for(let[d,p,y]of[[0.44,a,3],[-0.44,l,5]]){Gt(e,li(0.005,0.005,0.6,8),m,0,n+0.19,d,0,0,Math.PI/2);for(let M of[-1,1])B(e,0.014,0.19,0.014,m,M*0.3,n+0.095,d);for(let M=0;M<10;M++){let b=M<y;Gt(e,li(0.013,0.013,0.025,12),W(b?p:15263976,0.4),(b?-0.27:0.27)+(b?M:M-10)*0.028+(b?0:0),n+0.19,d,0,0,Math.PI/2)}}for(let[d,p]of[[-0.74,0.34],[0.74,-0.34]])ot(e,0.04,0.032,0.09,W(13620186,0.25,0.9),d,n-0.015,p,14),ot(e,0.034,0.034,0.004,W(1381914,0.5),d,n+0.031,p,14)})();var Ma=new Ze;Nt.add(Ma);var Ri=new Ze;Nt.add(Ri);var va=new Ze;tn.add(va);var xc=[],id=[],qe=-3.4,pi=7.7,pr=29.7,St=pi+11,_i=12.05,Qr=2.6,WS=10.5,i1=WS-Qr,Sa={x0:qe-_i,x1:qe+_i,z0:pi,z1:pr,cx:qe,Hs:Qr};Ma.position.set(qe,0,St);Ma.rotation.y=Math.PI;var Hn=[qe+6.6,qe-1.4],jh=St,n1=[[Sa.x0-1,qe-12+5,12.5,24.9]],_c=(e,t=0)=>{let i=_i-t,n=(e-qe)/i;return Qr+(i1-t)*Math.sqrt(Math.max(0,1-n*n))};ci.hallwood=(()=>{let e=Qt(512,512),t=e.getContext("2d");for(let r=0;r<24;r++){t.fillStyle=`hsl(${32+Ke()*6},${52+Ke()*10}%,${46+Ke()*12}%)`,t.fillRect(0,r*21.333333333333332,512,21.333333333333332);for(let o=0;o<7;o++){t.strokeStyle=`rgba(60,28,8,${0.05+Ke()*0.1})`,t.lineWidth=1;let a=r*21.333333333333332+2+Ke()*17.333333333333332;t.beginPath(),t.moveTo(0,a);for(let l=0;l<=512;l+=64)t.lineTo(l,a+(Ke()-0.5)*3);t.stroke()}t.fillStyle="rgba(30,14,4,.55)",t.fillRect(0,r*21.333333333333332,512,1.5);let s=Ke()*512;t.fillRect(s,r*21.333333333333332,1.5,21.333333333333332)}return Ci(t,512,512,12),e})();var ws=new Ni(ci.hallwood);ws.colorSpace=_t;ws.wrapS=ws.wrapT=pn;ws.repeat.set(0.25,0.25);ws.anisotropy=8;var Yu=new dt({map:ws,roughness:0.62,metalness:0,side:Ot});function qu(e,t,i,n,r=0){let s=[],o=[],a=[],l=r;e.forEach((h,u)=>{if(u)l+=Math.hypot(h[0]-e[u-1][0],h[1]-e[u-1][1]);if(s.push(h[0],h[1],t,h[0],h[1],i),o.push(l,t,l,i),u){let f=(u-1)*2;a.push(f,f+1,f+2,f+1,f+3,f+2)}});let c=new Xe;return c.setAttribute("position",new Re(s,3)),c.setAttribute("uv",new Re(o,2)),c.setIndex(a),c.computeVertexNormals(),new ne(c,n)}(function(){let i=[];for(let p=0;p<=72;p++){let y=Math.PI-Math.PI*p/72;i.push([qe+_i*Math.cos(y),Qr+i1*Math.sin(y)])}let n=Qr;Ri.add(qu([[qe-_i,0],[qe-_i,Qr]],pi,pr,Yu,0)),Ri.add(qu([[qe+_i,Qr],[qe+_i,0]],pi,pr,Yu,n+40)),va.add(qu(i,pi,pr,Yu,n));let r=72,s=(p,y)=>{let M=[];for(let b=r;b>=0;b--){let v=p+(y-p)*b/r;M.push([v,_c(v)])}return M},o=[[-8.2,-6.8],[-2.8,-1]],a=[[qe-_i,0]];for(let[p,y]of o)a.push([p,0],[p,2.2],[y,2.2],[y,0]);a.push([qe+_i,0]),a.push(...s(qe-_i,qe+_i));let l=new dt({map:ws,roughness:0.65}),c=new ne(new Mr(new Fi(a.map((p)=>new Z(p[0],p[1]))),{depth:0.22,bevelEnabled:!1}),l);c.position.z=pi-0.11,Ri.add(c),Mc.push(c),id.push(c);let h=[[qe-_i,0],[qe+_i,0],...s(qe-_i,qe+_i)],u=new ne(new Mr(new Fi(h.map((p)=>new Z(p[0],p[1]))),{depth:0.22,bevelEnabled:!1}),l);u.position.z=pr,Ri.add(u),Mc.push(u),id.push(u);let f=W(1381914,0.5);for(let[p,y]of o)B(Ri,0.1,2.2,0.3,f,p,1.1,pi),B(Ri,0.1,2.2,0.3,f,y,1.1,pi),B(Ri,y-p,0.1,0.3,f,(p+y)/2,2.2,pi);let m=Qt(2048,512),g=m.getContext("2d");g.fillStyle="#ee7d1c",g.fillRect(0,0,2048,512);for(let p=0;p<40;p++)g.fillStyle=`rgba(${p%2?"255,255,255":"120,50,0"},.035)`,g.fillRect(p*52,0,26,512);g.fillStyle="#fff",g.font="bold 250px Arial Black, Arial",g.textAlign="center",g.textBaseline="middle",g.fillText("VAŠE LIGA",1024,270);let x=new Ni(m);x.colorSpace=_t,x.anisotropy=8;let d=new ne(new zt(18,4.5),new dt({map:x,roughness:0.9,emissiveMap:x,emissive:16777215,emissiveIntensity:0.45}));d.position.set(qe,2.35,pr-0.02),d.rotation.y=Math.PI,Ri.add(d)})();(function(){let n=new dt({map:hf(ci.steel,2,2),color:11844292,roughness:0.55,metalness:0.15}),r=[],s=[];for(let x=0;x<=40;x++){let d=qe-_i+0.15+(2*_i-0.3)*x/40;r.push([d,_c(d,0.18)-0.05]),s.push([d,_c(d,0.18)-0.75+Math.abs(x-20)/20*0.25])}let o=[],a=Xi(0,1,0),l=new Ge,c=new oi,h=new R,u=new R,f=(x,d,p)=>{let y=Xi(x[0],x[1],p),M=Xi(d[0],d[1],p),b=M.clone().sub(y),v=b.length();c.setFromUnitVectors(a,b.normalize()),h.copy(y).add(M).multiplyScalar(0.5),u.set(1,v,1),l.compose(h,c,u),o.push(l.clone())};xc.length=0;for(let x=0;x<9;x++){let d=pi+1+x*(pr-pi-2)/8;xc.push(d);for(let p of[r,s]){let y=new Kn(p.map((M)=>Xi(M[0],M[1],d)));va.add(new ne(new fr(y,80,0.07,8,!1),n))}for(let p=0;p<40;p++)f(r[p],s[p],d),f(s[p],r[p+1],d);f(r[40],s[40],d);for(let p of[qe-_i+0.14,qe+_i-0.14])B(Ri,0.28,Qr+0.1,0.28,n,p,(Qr+0.1)/2,d),B(Ri,0.4,0.04,0.4,W(3158842,0.5,0.6),p,0.02,d)}let m=new At(0.026,0.026,1,6),g=new Cn(m,n,o.length);o.forEach((x,d)=>g.setMatrixAt(d,x)),va.add(g);for(let x=0;x<=12;x++){let d=qe-_i+0.2+(2*_i-0.4)*x/12,p=_c(d,0.18)-0.05,y=ot(va,0.045,0.045,pr-pi-1.4,n,d,p,(pi+pr)/2,8);y.rotation.x=Math.PI/2}})();var XS=[qe+11,qe+2.6,qe-6,qe-9.8];for(let e of XS)for(let t=0;t<xc.length-1;t++){let i=(xc[t]+xc[t+1])/2,n=_c(e,0.18)-0.05,r=n-1.05;B(Ri,0.2,0.07,2.2,W(13225170,0.35,0.6),e,r,i),B(Ri,0.15,0.015,2.1,Yt(16774886,2.6),e,r-0.045,i);for(let s of[-0.9,0.9])B(Ri,0.012,n-r-0.04,0.012,W(2237480,0.5,0.6),e,(n+r)/2,i+s)}for(let e of[qe+11,qe+2.6,qe-6])for(let t of[pi+3,St,pr-3])qi(Nt,e,7.6,t,16774114,9,30);qi(Nt,qe-9.8,6.2,St,16774114,4,18);function Zu(e,t,{blot:i=0.1,bs:n=0.5,grain:r=0.05,gs:s=90,sheen:o=0}={}){e.customProgramCacheKey=()=>"sd"+t,e.onBeforeCompile=(a)=>{a.vertexShader=a.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vWP;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vWP=(modelMatrix*vec4(transformed,1.0)).xyz;`),a.fragmentShader=a.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vWP;
float h3(vec3 p){p=fract(p*0.3183099+.1);p*=17.0;return fract(p.x*p.y*p.z*(p.x+p.y+p.z));}
float vn(vec3 x){vec3 i=floor(x),f=fract(x);f=f*f*(3.0-2.0*f);return mix(mix(mix(h3(i),h3(i+vec3(1,0,0)),f.x),mix(h3(i+vec3(0,1,0)),h3(i+vec3(1,1,0)),f.x),f.y),mix(mix(h3(i+vec3(0,0,1)),h3(i+vec3(1,0,1)),f.x),mix(h3(i+vec3(0,1,1)),h3(i+vec3(1,1,1)),f.x),f.y),f.z);}`).replace("#include <color_fragment>",`#include <color_fragment>
{ float b=vn(vWP/${n.toFixed(3)})*0.6+vn(vWP/${(n*0.35).toFixed(3)})*0.4; float g=vn(vWP*${s.toFixed(1)}); float gl=smoothstep(0.0,1.0,1.0-min(1.0,length(fwidth(vWP))*${s.toFixed(1)}*0.6));
  diffuseColor.rgb *= 1.0 + (b-0.5)*${(i*2).toFixed(3)} + (g-0.5)*${(r*2).toFixed(3)}*gl; }`)}}var of=W(13214826,0.6),fn=W(2763825,0.5,0.6),Un=W(12106948,0.3,0.85);function YS(e,t){let i=new Ze;i.position.set(e,0,t),Ri.add(i),ot(i,0.026,0.026,1.62,fn,0,0.81,0,12),ot(i,0.26,0.28,0.045,fn,0,0.022,0,28),ot(i,0.07,0.09,0.12,fn,0,0.1,0,16),ot(i,0.03,0.03,0.22,Un,0.05,0.5,0,8).rotation.z=Math.PI/2}for(let e of Hn)for(let t of[-1,1])YS(e+t*3.09,St);function ld(e,t,i,n,r){let s=new Ze;s.position.set(e,0,t),s.rotation.y=i,Ri.add(s);for(let o of[-1,0,1])B(s,n,0.035,0.115,of,0,0.45,o*0.125);for(let o of[-1,1]){let a=o*(n/2-0.14);for(let l of[-1,1])B(s,0.045,0.45,0.045,fn,a,0.225,l*0.19);B(s,0.04,0.04,0.42,fn,a,0.2,0),B(s,0.04,0.04,0.42,fn,a,0.425,0)}if(B(s,n-0.2,0.03,0.03,fn,0,0.2,0),r){for(let o of[-1,1])B(s,0.045,0.5,0.045,fn,o*(n/2-0.14),0.7,-0.19);for(let o of[0.68,0.84])B(s,n,0.12,0.03,of,0,o,-0.215)}return s}for(let e of[-6,-2,2,6])ld(qe+11.3,St+e,-Math.PI/2,2,!0);ld(Hn[0],St-9.3,0,1.5,!0);for(let e of Hn)ld(e,St+9.3,Math.PI,1.5,!0);function r1(e,t,i){let n=new Ze;n.position.set(e,0,t),Ri.add(n);let r=W(2050728,0.45),s=1.5;for(let o of[-1,1])for(let a of[-1,1]){let l=ot(n,0.022,0.022,s,Un,o*0.3,s/2,a*0.27,10);l.rotation.z=-o*0.07,l.rotation.x=a*0.07}for(let o of[0.35,0.8,1.2])B(n,0.6,0.025,0.025,Un,0,o,0.27),B(n,0.6,0.025,0.025,Un,0,o,-0.27),B(n,0.025,0.025,0.54,Un,0.3,o,0),B(n,0.025,0.025,0.54,Un,-0.3,o,0);B(n,0.58,0.05,0.58,r,0,s+0.02,0),B(n,0.05,0.55,0.52,r,i*0.27,s+0.33,0).rotation.z=i*0.08;for(let o of[-1,1])B(n,0.45,0.04,0.05,Un,0,s+0.28,o*0.3),B(n,0.04,0.26,0.04,Un,-i*0.18,s+0.15,o*0.3);B(n,0.32,0.02,0.5,W(15329770,0.6),-i*0.42,s+0.48,0);for(let o of[-1,1])B(n,0.03,0.5,0.03,Un,-i*0.4,s+0.24,o*0.24);for(let o of[0,1,2,3])B(n,0.05,0.03,0.5,Un,-i*(0.33+o*0.045),0.28+o*0.32,0);return B(n,0.03,s,0.03,Un,-i*0.44,s/2,-0.25).rotation.z=i*0.06,B(n,0.03,s,0.03,Un,-i*0.44,s/2,0.25).rotation.z=i*0.06,n}r1(qe+10.4,St,1);r1(qe-5.4,St,-1);var ri=Sa.x0+0.1;(function(){let t=[2864038,9395160,15228303,15764004],i=new Ze;Ri.add(i);for(let c=0;c<3;c++){let h=ri+0.04+c*0.95;for(let u of[0,0.88])B(i,0.05,2.5,0.05,of,ri,1.25,8.4+c*0.95+u);for(let u=0;u<15;u++){let f=ot(i,0.016,0.016,0.88,of,ri+0.02,0.2+u*0.155,8.84+c*0.95,8);f.rotation.x=Math.PI/2}}let n=Qt(256,128),r=n.getContext("2d"),s=r.createLinearGradient(0,0,256,128);s.addColorStop(0,"#9db6c8"),s.addColorStop(0.5,"#cfe0ec"),s.addColorStop(1,"#8fa8bb"),r.fillStyle=s,r.fillRect(0,0,256,128),r.fillStyle="rgba(255,255,255,.28)",r.beginPath(),r.moveTo(40,0),r.lineTo(90,0),r.lineTo(40,128),r.lineTo(0,128),r.fill();let o=new Ni(n);o.colorSpace=_t;let a=new ne(new zt(3.6,1.7),new gt({map:o,toneMapped:!1,color:12303291}));a.position.set(qe-6.6,1.5,pi+0.13),i.add(a),B(i,3.7,0.05,0.03,fn,qe-6.6,2.37,pi+0.13),B(i,3.7,0.05,0.03,fn,qe-6.6,0.63,pi+0.13),t.forEach((c,h)=>B(i,0.62,0.014,1.75,W(c,0.85),qe-10.2+h*0.75,0.008,10,0));for(let c=0;c<3;c++){let h=ot(i,0.075,0.075,0.6,W([2763310,2450411,14709803][c],0.8),-10.9+c*0.25,0.075,9.1+c%2*0.15,20);h.rotation.z=Math.PI/2}for(let[c,h,u]of[[-10.6,11.3,2920447],[-9.9,11,16747052],[-9.3,11.6,4247930]]){let f=new ne(new xn(0.32,20,16),W(u,0.45));f.position.set(c,0.32,h),i.add(f)}yn(i,"WARM-UP · STRETCH",3.4,0.42,"#7be3ff",ri+0.1,3.1,10.2,Math.PI/2,"bold 100px Arial Black, Arial",void 0,!1);let l=new Ze;Ri.add(l),B(l,0.5,0.05,2.4,fn,ri+0.3,0.55,27.3),B(l,0.5,0.05,2.4,fn,ri+0.3,1,27.3);for(let c of[-1.15,1.15])B(l,0.5,1.05,0.05,fn,ri+0.3,0.52,27.3+c);for(let c=0;c<6;c++)for(let h of[0.6,1.05]){let u=26.4+c*0.36,f=ot(l,0.012,0.012,0.2,Un,ri+0.3,h+0.04,u,8);f.rotation.x=Math.PI/2,f.rotation.z=Math.PI/2;for(let m of[-1,1])ot(l,0.055,0.055,0.05,fn,ri+0.3+m*0.11,h+0.04,u,14).rotation.z=Math.PI/2}for(let c=0;c<5;c++){let h=25.7+c*0.5,u=new ne(new xn(0.1,16,12),W([1381914,1381914,12597547,1381914,1381914][c],0.5,0.4));u.position.set(ri+1.55,0.1,h),l.add(u);let f=new ne(new Ln(0.06,0.012,8,14,Math.PI),W(1381914,0.5,0.4));f.position.set(ri+1.55,0.2,h),f.rotation.y=Math.PI/2,l.add(f)}[[0.5,0.45],[0.6,0.6],[0.75,0.75]].forEach(([c,h],u)=>B(l,h,c,h,W(13935466,0.7),ri+2.9+u*0.95,c/2,28.8));for(let c=0;c<9;c++)B(l,0.5,0.012,0.04,W(16765498,0.6),ri+2.4,0.007,25.6+c*0.4);for(let c of[-1,1])B(l,0.03,0.012,3.6,W(16765498,0.6),ri+2.4+c*0.25,0.007,27.4);for(let c=0;c<6;c++){let h=new ne(new $s(0.09,0.2,14),W(16742938,0.6));h.position.set(ri+4.1,0.1,25.7+c*0.7),l.add(h)}for(let[c,h,u]of[[-14.5,29.1,2780986],[-14,29.2,9054762],[-13.5,29,2772874]]){let f=new ne(new xn(0.13,16,12),W(u,0.6));f.position.set(c,0.13,h),l.add(f)}for(let c of[27,27.5])B(l,0.03,0.9,0.012,W(16765498,0.7),ri+0.05,1.8,c),B(l,0.05,0.12,0.05,fn,ri+0.05,1.3,c);B(l,0.05,0.06,0.6,fn,ri+0.05,2.3,27.25),yn(l,"CONDITIONING · FOOTWORK",3.8,0.42,"#ffb15a",ri+0.1,3.1,27.2,Math.PI/2,"bold 90px Arial Black, Arial",void 0,!1)})();var Ss={vl:qe+5.62,hl:qe+8.82},af=2.2,bs=pi+0.11,$i=qe-1.4,Qi=pi+0.11;function qS(e,t,i,n,r,s){let o=e.createLinearGradient(0,0,0,i);if(o.addColorStop(0,n.bg[0]),o.addColorStop(1,n.bg[1]),e.fillStyle=o,e.fillRect(0,0,t,i),e.fillStyle=n.acc,e.fillRect(0,0,t,10),e.textBaseline="middle",e.textAlign="left",e.font="bold 68px Arial Black, Arial",e.fillStyle=n.acc,e.fillText(n.name,40,66),e.font="600 28px Arial",e.fillStyle="#8a96c4",e.fillText(n.sub+" · 2026",42,120),e.fillStyle=s?"#ff3b4a":"#5b1b24",e.beginPath(),e.arc(t-175,64,13,0,7),e.fill(),e.textAlign="right",e.fillStyle="#fff",e.font="bold 34px Arial",e.fillText("LIVE",t-40,66),r===0)e.textAlign="left",e.fillStyle=n.acc,e.font="bold 210px Arial Black, Arial",e.fillText(n.big,36,290),e.fillStyle="#8a96c4",e.font="600 32px Arial",e.fillText(n.bigL,44,410),n.stats.forEach((a,l)=>{e.textAlign="left",e.fillStyle="#fff",e.font="bold 58px Arial",e.fillText(a[0],610,215+l*100),e.fillStyle="#8a96c4",e.font="600 24px Arial",e.fillText(a[1],612,252+l*100)}),n.form.forEach((a,l)=>{let c=70+l*70;e.fillStyle=a===1?"#45e08a":a===2?"#8a96c4":"#ff4d6d",e.beginPath(),e.arc(c,500,26,0,7),e.fill(),e.fillStyle="#05070f",e.textAlign="center",e.font="bold 28px Arial",e.fillText(a===1?"W":a===2?"D":"L",c,502)}),e.textAlign="left",e.fillStyle="#8a96c4",e.font="600 24px Arial",e.fillText("FORM · LAST 5",450,500);else e.textAlign="left",e.fillStyle="#8a96c4",e.font="600 28px Arial",e.fillText(n.head,42,178),n.rows.slice(0,5).forEach((a,l)=>{let c=245+l*62;e.fillStyle="rgba(255,255,255,.06)",e.fillRect(36,c-26,t-72,52),e.textAlign="left",e.fillStyle="#e8ecff",e.font="600 30px Arial",e.fillText(a[0],56,c);let h=a[2]==="w"?"#45e08a":a[2]==="l"?"#ff4d6d":a[2]==="d"?"#ffcf3a":"#8a96c4";e.fillStyle=h,e.textAlign="right",e.font="bold 36px Arial",e.fillText(a[1],t-60,c)});e.fillStyle="rgba(255,255,255,.12)",e.fillRect(0,i-62,t,2),e.textAlign="left",e.fillStyle="#9aa6a0",e.font="600 25px Arial",e.fillText("E  ·  OTEVŘÍT DETAIL",40,i-30),e.textAlign="right",e.fillText(n.foot,t-40,i-30),[0,1].forEach((a)=>{e.fillStyle=a===r?n.acc:"#2a3358",e.beginPath(),e.arc(t/2-12+a*24,i-30,6,0,7),e.fill()})}function ZS(e){let t=!!e.getObjectByName("Vybaveni_Tabule_VasaLiga_Telo");[["vl",0],["hl",1]].forEach(([i,n])=>{let r=document.createElement("canvas");r.width=1024,r.height=648;let s=r.getContext("2d"),o=new Ni(r);if(o.colorSpace=_t,o.anisotropy=8,!t)B(Nt,2.6,1.7,0.06,W(657934,0.35),Ss[i],af,bs+0.03);let a=new ne(new zt(2.45,1.55),new gt({map:o,toneMapped:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}));a.position.set(Ss[i],af,bs+0.066),Nt.add(a);let l="",c=()=>{if(!(window.FUNUI&&FUNUI.league))return;let h=Date.now(),u=Math.floor(h/5000+n)%2,f=Math.floor(h/600)%2,m=u+"|"+f;if(m===l)return;l=m,qS(s,r.width,r.height,FUNUI.league(i),u,f),o.needsUpdate=!0};c(),setInterval(c,250)})}var cd=!1,Dt={v:3,X0:7.6,D:0.88,H:0.32,N:5,T:0.02,HALF:5.2,AC:0.7,SEATS:7,PITCH:0.5,SOFF:0.62};function KS(e,t){if(!cd)return 0;let i=qe-e,n=t-St;if(Math.abs(n)>Dt.HALF||i<Dt.X0||i>Dt.X0+Dt.N*Dt.D)return 0;return Dt.H*Math.min(Dt.N,Math.ceil((i-Dt.X0)/Dt.D))+Dt.T}function s1(e){if(cd=!0,n1.length=0,!e)Dt={v:2,X0:7.6,D:1.1,H:0.4,N:4,T:0,HALF:5.4,AC:0,SEATS:15,PITCH:0.5,SOFF:0.5};if(e){let t=qe-Dt.X0,i=qe-(Dt.X0+Dt.N*Dt.D);for(let n of[-Dt.HALF+0.05,0,Dt.HALF-0.05])Ut(t-0.05,St+n,i+0.1,St+n,0.03)}else for(let t=0;t<Dt.N;t++){let i=qe-(Dt.X0+t*Dt.D+0.5);Ut(i,St-4.2+0.25,i,St+4.2-0.25,0.3)}}window.__tribTest=()=>s1(!0);var _a={x:qe-8.2,y:1.75,z:pi+0.11+0.046},JS=1.4,jS=2;function $S(e,t){let i=document.createElement("canvas");i.width=700,i.height=1000;let n=i.getContext("2d"),r=new Ni(i);if(r.colorSpace=_t,r.anisotropy=8,!t)B(Nt,1.55,2.15,0.04,W(1381914,0.4,0.3),_a.x,_a.y,_a.z-0.026);let s=new ne(new zt(JS,jS),new gt({map:r,toneMapped:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}));s.position.set(_a.x,_a.y,_a.z),Nt.add(s);let o={racket:null,shoes:null,state:"loading"},a={},l=(f,m,g,x)=>{n.font=g;let d=String(f||"").split(" "),p=[],y="";for(let M of d){let b=y?y+" "+M:M;if(n.measureText(b).width>m&&y)p.push(y),y=M;else y=b}if(y)p.push(y);return p.slice(0,x)},c=()=>{let f=n.createLinearGradient(0,0,0,1000);f.addColorStop(0,"#04170d"),f.addColorStop(1,"#020806"),n.fillStyle=f,n.fillRect(0,0,700,1000),n.fillStyle="#1fd05a",n.fillRect(0,0,700,14),n.fillRect(0,986,700,14),n.textBaseline="alphabetic",n.textAlign="left",n.fillStyle="#fff",n.font="italic 900 86px Arial Black, Arial",n.fillText("YONEX",40,120),n.fillStyle="#1fd05a",n.font="700 30px Arial",n.fillText("NEW ARRIVALS",44,168),[["racket","RACKET",200],["shoes","SHOES",595]].forEach(([m,g,x])=>{n.fillStyle="rgba(255,255,255,.07)",n.fillRect(30,x,640,365),n.fillStyle="#1fd05a",n.font="700 26px Arial",n.fillText(g,52,x+40);let d=o[m],p=a[m];if(p){let y=Math.min(270/p.width,300/p.height);n.drawImage(p,385+(265-p.width*y)/2,x+50+(300-p.height*y)/2,p.width*y,p.height*y)}if(d)n.fillStyle="#fff",l(d.name,p?320:580,"700 34px Arial",5).forEach((y,M)=>n.fillText(y,52,x+92+M*42)),n.fillStyle="#1fd05a",n.font="bold 46px Arial",n.fillText(d.price||"",52,x+310),n.fillStyle="#9fb3a8",n.font="600 24px Arial",n.fillText(d.date?"added "+d.date:"",52,x+350);else n.fillStyle="#7d8f86",n.font="600 30px Arial",n.fillText(o.state==="err"?"coming soon":"loading…",52,x+120)}),n.fillStyle="#7d8f86",n.font="600 22px Arial",n.fillText("LATEST FROM YONEX.CZ · LIVE",40,975),r.needsUpdate=!0};c();let h=window.YONEX_FEED&&YONEX_FEED.api||"",u=(f,m)=>{if(!m)return;if(o[f]=m,m.img){let g=new Image;g.onload=()=>{a[f]=g,c()},g.src=m.img}};if(!h){o.state="err",c();return}fetch(h).then((f)=>f.json()).then((f)=>{u("racket",f.racket),u("shoes",f.shoes),o.state=f.racket||f.shoes?"ok":"err",c()}).catch(()=>{o.state="err",c()})}function QS(e){let t=!!e.getObjectByName("Vybaveni_Pitko_Telo"),i=W(13225686,0.34,0.65),n=W(15133166,0.2,0.85),r=W(723982,0.6,0.2),s=W(10396843,0.28,0.85),o=(D,N,Q,G=1)=>{let z=[[-D,0],[D,0],[D,N]];for(let Y=1;Y<18;Y++){let le=Math.PI*Y/18;z.push([D*Math.cos(le),N+Q*Math.sin(le)])}return z.push([-D,N]),z};if(!t){let D=(le,k)=>{let ee=new Fi;return le.forEach(([be,_e],He)=>He?ee.lineTo(be*k,-_e*k):ee.moveTo(be*k,-_e*k)),ee},N=(le,k,ee,be,_e=1)=>{let He=new ne(new Mr(D(le,_e),{depth:k,bevelEnabled:!1,curveSegments:4}),ee);return He.rotation.x=-Math.PI/2,He.position.set($i,be,Qi),Nt.add(He),He},Q=o(0.2,0.14,0.2);N(Q,0.93,i,0),N(o(0.205,0.14,0.205),0.03,n,0.92),N(o(0.165,0.13,0.17),0.004,s,0.951),ot(Nt,0.03,0.03,0.006,r,$i,0.955,Qi+0.22,20);for(let le=0;le<6;le++)B(Nt,0.004,0.008,0.1,r,$i+0.2005,0.7+le*0.03,Qi+0.07),B(Nt,0.004,0.008,0.1,r,$i+0.2005,0.06+le*0.03,Qi+0.07);ot(Nt,0.022,0.022,0.035,n,$i-0.11,0.967,Qi+0.1,16);let G=[[0,0.95,0],[0,1.26,0]];for(let le=0;le<=12;le++){let k=Math.PI-Math.PI*le/12;G.push([0,1.26+0.06*Math.sin(k),0.06+0.06*Math.cos(k)])}G.push([0,1.2,0.12]);let z=new ne(new fr(new Kn(G.map((le)=>new R($i-0.11+le[0],le[1],Qi+0.1+le[2])),!1,"catmullrom",0.1),40,0.0095,10,!1),n);Nt.add(z),ot(Nt,0.02,0.02,0.04,n,$i+0.1,0.97,Qi+0.22,16);let Y=new ne(new fr(new Kn([[0,0.97,0],[0,1,0],[0,1,0.03]].map((le)=>new R($i+0.1+le[0],le[1],Qi+0.22+le[2]))),10,0.008,8,!1),n);Nt.add(Y)}let a=ot(Nt,0.014,0.014,0.03,n,$i+0.155,0.965,Qi+0.17,16),l=a.position.y,c=0.958,h=new R($i-0.11,1.198,Qi+0.22),u=new R($i-0.11,c,Qi+0.22),f=new R($i+0.1,0.995,Qi+0.25),m=0.24,g=0.9,x=(g+Math.sqrt(g*g+19.6*(f.y-c)))/9.8,d=new R($i+0.1,c,Qi+0.25+m*x),p=[0,0.3333333333333333,0.6666666666666666,1].map((D)=>new R().lerpVectors(h,u,D)),y=[];for(let D=0;D<=12;D++){let N=D/12*x;y.push(new R(f.x,f.y+g*N-4.9*N*N,f.z+m*N))}let M=[],b=(D,N,Q,G)=>{let z=new ne(new fr(new Kn(D),24,N,7,!1),new gt({color:Q,transparent:!0,opacity:0,depthWrite:!1,toneMapped:!1}));return z.userData.o=G,Nt.add(z),M.push(z),z};b(p,0.0038,10475250,0.62),b(p,0.0075,8373482,0.2),b(y,0.0036,10475250,0.62),b(y,0.0072,8373482,0.2);let v=70,T=new Float32Array(v*3).fill(-9),_=[],S=new Float32Array(v);for(let D=0;D<v;D++)_.push([0,0,0]);let w=new Xe;w.setAttribute("position",new Zt(T,3));let L=new Vr({color:12904699,size:0.013,transparent:!0,opacity:0.85,depthWrite:!1,toneMapped:!1}),I=new js(w,L);I.frustumCulled=!1,Nt.add(I);let U=[u,d].map((D)=>{let N=new ne(new ro(0.01,0.015,28),new gt({color:12576511,transparent:!0,opacity:0,depthWrite:!1,toneMapped:!1,side:Ot}));return N.rotation.x=-Math.PI/2,N.position.set(D.x,c+0.002,D.z),Nt.add(N),N}),K={until:0,press:-9,a:0,last:performance.now()/1000},P=null,V=(D)=>{try{if(P=P||new(window.AudioContext||window.webkitAudioContext),P.state==="suspended")P.resume();let N=P.sampleRate,Q=Math.floor(N*D),G=P.createBuffer(1,Q,N),z=G.getChannelData(0),Y=0;for(let _e=0;_e<Q;_e++){let He=Math.random()*2-1;Y=(Y+0.02*He)/1.02,z[_e]=Y*3.2+He*0.1}let le=P.createBufferSource();le.buffer=G;let k=P.createBiquadFilter();k.type="bandpass",k.frequency.value=1500,k.Q.value=0.55;let ee=P.createGain(),be=P.currentTime;ee.gain.setValueAtTime(0,be),ee.gain.linearRampToValueAtTime(0.15,be+0.15),ee.gain.setValueAtTime(0.15,be+D-0.7),ee.gain.linearRampToValueAtTime(0,be+D),le.connect(k),k.connect(ee),ee.connect(P.destination),le.start()}catch(N){}};window.__drink=()=>{let D=performance.now()/1000,N=D<K.until;if(K.press=D,K.until=D+4.5,!N)V(4.5)},_o.push(()=>{let D=performance.now()/1000,N=Math.min(0.05,D-K.last);K.last=D;let Q=D<K.until;K.a+=((Q?1:0)-K.a)*Math.min(1,N*(Q?14:7));let G=0.88+0.12*Math.sin(D*40);M.forEach((z,Y)=>{z.material.opacity=z.userData.o*K.a*(Y%2?1:G)}),a.position.y=l-(D-K.press<0.25?0.008:0),U.forEach((z,Y)=>{z.material.opacity=0.55*K.a*(0.6+0.4*Math.sin(D*9+Y));let le=1+0.6*((D*2.2+Y*0.5)%1);z.scale.set(le,le,1)});for(let z=0;z<v;z++){if(S[z]<=0)if(Q&&Math.random()<N*100){let Y=Math.random()<0.55?u:d;S[z]=0.25+Math.random()*0.3,T[z*3]=Y.x+(Math.random()-0.5)*0.014,T[z*3+1]=c+0.002,T[z*3+2]=Y.z+(Math.random()-0.5)*0.014,_[z]=[(Math.random()-0.5)*0.45,0.5+Math.random()*0.8,(Math.random()-0.5)*0.4]}else{T[z*3+1]=-9;continue}if(S[z]-=N,T[z*3]+=_[z][0]*N,T[z*3+1]+=_[z][1]*N,T[z*3+2]+=_[z][2]*N,_[z][1]-=9.8*N,T[z*3+1]<c)S[z]=0,T[z*3+1]=-9}w.attributes.position.needsUpdate=!0})}function eb(){for(let e of Hn)Ut(e-3.05,jh,e+3.05,jh,0.22);_n.push([qe+10.4,jh,0.5],[qe-5.4,jh,0.5]);for(let e of[-6,-2,2,6])Ut(qe+11.3,St+e-0.9,qe+11.3,St+e+0.9,0.3);Ut(Hn[0]-0.6,St-9.3,Hn[0]+0.6,St-9.3,0.3);for(let e of Hn)Ut(e-0.6,St+9.3,e+0.6,St+9.3,0.3);_n.push([$i,Qi+0.2,0.3]),window.__zoneCol=[_n.length],Ut(ri+0.3,26.2,ri+0.3,28.5,0.3),Ut(ri+2.9,28.8,ri+4.6,28.8,0.35),Ut(ri+1.55,25.7,ri+1.55,27.5,0.12),_n.push([-10.6,11.3,0.36],[-9.9,11,0.36],[-9.3,11.6,0.36]),window.__zoneCol.push(_n.length)}function tb(){let[e,t]=window.__zoneCol;_n.splice(e,t-e),Ut(qe-11.76,St+7.8,qe-11.76,St+9.7,0.22),Ut(qe-11.76,St+5.7,qe-11.76,St+7.3,0.22),Ut(qe-11.74,St+10.63,qe-10.31,St+10.63,0.25),Ut(qe-8.1,St+10.5,qe-6.4,St+10.5,0.4),_n.push([qe-6.55,St-7.7,0.34],[qe-7.3,St-7.85,0.34],[qe-6.85,St-8.5,0.34])}var aY=new Promise((e)=>{new Uu().load("badminton_hala.glb?v=4",(t)=>{let i=t.scene,n=[],r=[],s=!i.getObjectByName("Hala_Klenba_Drevo"),o=!!i.getObjectByName("Vybaveni_Plakat_Yonex_Ram"),a=!!i.getObjectByName("Tribuna_V3_Konstrukce"),l=a||!!i.getObjectByName("Tribuna_Schody_Levy"),c=!!i.getObjectByName("Zona_Kondice_Rack_Kettlebell"),h=!!i.getObjectByName("Kurt1_Sloupky_Podstavec"),u=/^(Hala_Stena_.*|Hala_Obklad_.*|Hala_Okna_.*|Hala_Sloupy_.*|Hala_Strecha_Plech|Hala_Vaznik_\d+|Hala_Vaznice|Hala_Dvere|Hala_Nouzovy_.*|Kamera_Cil|Svetla_LED_.*|Vybaveni_Lavicky_.*|Vybaveni_Rozhodci_.*|Kurt\d_Sloupky|Vybaveni_Ukazatel_.*|.*_Skore|.*_Nazev)$/,f=/^(Kamera_Cil|Vybaveni_Ukazatel_.*|.*_Skore|.*_Nazev|Hala_Banner|Hala_Banner_Text|Zona_.*_Napis|Zona_Rozcvicka_Zrcadlo(_Ram)?|Vybaveni_Ukazatel_Stojan_.*)$/;if(i.traverse((g)=>{let x=g.name||"";if((s?u:f).test(x))n.push(g);if(!o&&/^Zona_Rozcvicka_Valec_\d$/.test(x))n.push(g);if(!h&&g.isMesh&&/^Kurt\d_Sloupky$/.test(x)&&g.geometry.index){let d=g.geometry.attributes.position,p=g.geometry.index.array,y=[];for(let M=0;M<p.length;M+=3){if((d.getY(p[M])+d.getY(p[M+1])+d.getY(p[M+2]))/3<0.19&&Math.max(d.getY(p[M]),d.getY(p[M+1]),d.getY(p[M+2]))<0.2)continue;y.push(p[M],p[M+1],p[M+2])}g.geometry.setIndex(y)}if(!s&&g.isMesh&&x==="Hala_Stena_Zadni"&&!(g.material&&g.material.name==="MAT_Banner_Oranzovy")){let d=new dt({color:new ge().setRGB(0.93,0.31,0.012),roughness:0.85});d.name="MAT_Banner_Oranzovy",g.material=d}if(!s&&/^(Hala_Klenba_Drevo|Hala_Vaznik_\d+|Hala_Vaznice|Svetla_LED_.*)$/.test(x))r.push(g);if(g.isMesh&&/^Vybaveni_Lavicky_(Drevo|Kov)$/.test(x)&&g.geometry.index){let d=g.geometry.attributes.position,p=g.geometry.index.array,y=[];for(let M=0;M<p.length;M+=3){let b=0,v=0;for(let T=0;T<3;T++)b+=d.getX(p[M+T]),v+=d.getZ(p[M+T]);if(b/=3,v/=3,b>-7.7&&b<-5.5&&v>8.7&&v<10)continue;y.push(p[M],p[M+1],p[M+2])}if(y.length!==p.length)g.geometry.setIndex(y)}if(g.isMesh){let d=g.material,p={MAT_PU_Podlaha:[0.36,0.075,0.04],MAT_PVC_Podlozka:[0.075,0.17,0.46],MAT_Pohledovy_Beton:[0.27,0.27,0.28],MAT_BWF_Cary:[0.85,0.85,0.83]};if(d&&p[d.name])d.color.setRGB(...p[d.name]);if(d&&d.name==="MAT_PU_Podlaha")d.roughness=0.36,Zu(d,"floor",{blot:0.16,bs:1.1,grain:0.07,gs:70});if(d&&d.name==="MAT_PVC_Podlozka")d.roughness=0.5,Zu(d,"mat",{blot:0.07,bs:0.8,grain:0.09,gs:160});if(d&&d.name==="MAT_Pohledovy_Beton")d.roughness=0.85,Zu(d,"conc",{blot:0.28,bs:0.35,grain:0.12,gs:55});if(d&&d.name==="MAT_Ukazatel_LED")d.emissiveIntensity=2.2;if(d&&d.name==="MAT_LED_Zarivka_Emise")d.emissiveIntensity=2.6;if(d&&d.name==="MAT_Drevo_Klenba")d.map=ws,d.color.setRGB(1,1,1),d.roughness=0.62,d.side=Ot,d.needsUpdate=!0;if(d&&d.name==="MAT_Zrcadlo")g.material=new gt({color:11453654,toneMapped:!1});if(d&&d.name==="MAT_Banner_Oranzovy")d.emissive=new ge(15620624),d.emissiveIntensity=0.35;if(d&&d.name==="MAT_Sit_Pruhledna"){let y=document.createElement("canvas");y.width=1220,y.height=152;let M=y.getContext("2d");M.strokeStyle="#0c0c0e",M.lineWidth=2.2;for(let v=0;v<=1220;v+=10)M.beginPath(),M.moveTo(v,0),M.lineTo(v,152),M.stroke();for(let v=0;v<=152;v+=10)M.beginPath(),M.moveTo(0,v),M.lineTo(1220,v),M.stroke();let b=new Ni(y);b.colorSpace=_t,b.anisotropy=8,g.material=new gt({map:b,transparent:!0,alphaTest:0.3,side:Ot})}}}),n.forEach((g)=>g.parent&&g.parent.remove(g)),s)i.traverse((g)=>{if(/^Vybaveni_Ukazatel_Stojan_K2_/.test(g.name))g.position.x-=2.5});else{Nt.remove(Ri),tn.remove(va);for(let x of id)Mc.splice(Mc.indexOf(x),1);let g=Sa.x0+0.2;yn(Nt,"WARM-UP",1.6,0.3,"#7be3ff",g,3.25,9.95,Math.PI/2,"bold 110px Arial Black, Arial",void 0,!1),yn(Nt,"STRETCH",1.6,0.3,"#7be3ff",g,2.9,9.95,Math.PI/2,"bold 110px Arial Black, Arial",void 0,!1),yn(Nt,"CONDITIONING",2,0.28,"#ffb15a",g,3.25,27.45,Math.PI/2,"bold 90px Arial Black, Arial",void 0,!1),yn(Nt,"FOOTWORK",1.6,0.3,"#ffb15a",g,2.9,27.45,Math.PI/2,"bold 100px Arial Black, Arial",void 0,!1)}Ma.add(i),Ma.updateMatrixWorld(!0),r.forEach((g)=>tn.attach(g));let m=()=>(window.FUNUI?FUNUI.summary("bad").k[0][0]:"0–0").replace("–"," : ");if(ZS(i),$S(i,o),QS(i),!o)[[2763310,0],[2450411,1],[14709803,2]].forEach(([g,x])=>{let d=ot(Nt,0.09,0.09,0.9,W(g,0.8),qe-(6.9+x*0.32),0.09,St-9.5,24);d.rotation.x=Math.PI/2});if(!h)Hn.forEach((g)=>[-1,1].forEach((x)=>{let d=g+x*3.09,p=W(1710622,0.5,0.3);B(Nt,0.52,0.045,0.3,p,d+x*0.24,0.0225,St),B(Nt,0.12,0.09,0.12,p,d,0.09,St),B(Nt,0.08,0.05,0.16,p,d+x*0.36,0.07,St)}));if(l)s1(a);if(c)tb();try{Ma.updateMatrixWorld(!0),i.traverse((g)=>{(g.material?Array.isArray(g.material)?g.material:[g.material]:[]).forEach((d)=>["map","normalMap","roughnessMap","metalnessMap","emissiveMap","aoMap"].forEach((p)=>{if(d[p])un.initTexture(d[p])})),g.frustumCulled=g.frustumCulled}),un.compile(ti,Wi)}catch(g){console.warn("prewarm",g)}e()},void 0,(t)=>{console.error("badminton_hala.glb failed",t),e()})}),Cs=new Ze;Cs.position.set(6.5,1.85,-3.6);Cs.rotation.y=0;ti.add(Cs);var o1=window.FUNUI?window.FUNUI.summary("strava").k:[["12/20"],["9 400"]],[a1,l1]=o1[0][0].split("/").map(Number);Cs.add(new ne(new Ln(0.85,0.1,16,72),PS(2761296,{r:0.6})));var c1=2*Math.PI*a1/l1,h1=new ne(new Ln(0.85,0.1,16,160,c1),new gt({color:new ge(16534530).multiplyScalar(1.5),toneMapped:!1}));h1.rotation.z=Math.PI/2-c1;Cs.add(h1);var ib=Ta(512,384,(e,t,i)=>{e.textAlign="center",e.fillStyle="#fff",e.font="800 140px Inter,Arial",e.fillText(a1+"",t/2-40,190),e.fillStyle="#b8a9c9",e.font="700 70px Inter,Arial",e.fillText("/"+l1,t/2+90,190),e.font="600 34px Inter,Arial",e.fillText("A C T I V E   D A Y S",t/2,250)});ad(1.5,1.12,ib,Cs,0,0,0.02);var f1=(e,t)=>Ta(768,96,(i,n,r)=>{i.fillStyle="rgba(10,15,44,.85)",i.beginPath(),i.roundRect(4,4,n-8,r-8,44),i.fill(),i.strokeStyle=t,i.lineWidth=4,i.stroke(),i.fillStyle=t,i.textAlign="center",i.font="700 40px Inter,Arial",i.fillText(e,n/2,62)});ad(1.9,0.24,f1("\uD83D\uDC63  "+o1[1][0]+" STEPS / DAY","#3dff9a"),Cs,0,-1.3,0.02);ad(1.9,0.24,f1("GYM 3× · YOGA 2× · WALKS","#8a96c4"),Cs,0,-1.62,0.02);var lY=(Hn[0]+Hn[1])/2,go=[{k:"vl",x:Ss.vl,z:bs+2.2,r:4.5,c:"#45e08a",label:"VAŠELIGA",nolabel:!0,pos:[Ss.vl,3.4,bs+0.3],sc:0.8,ring:!1},{k:"hl",x:Ss.hl,z:bs+2.2,r:4.5,c:"#ff5470",label:"HOBBYLIGA",nolabel:!0,pos:[Ss.hl,3.4,bs+0.3],sc:0.8,ring:!1},{k:"water",x:$i,z:Qi+1.3,r:2.4,c:"#7fd6ff",label:"PÍTKO",nolabel:!0,pos:[$i,1.4,Qi+0.4],sc:0.6,ring:!1},{k:"climb",x:rt.cx,z:rt.cz,r:6.4,c:"#38e8ff",label:"CLIMBING",pos:[-10.8,3.7,-5.95],sc:1.2,ring:!1},{k:"strava",x:6.5,z:-2.3,r:2.3,c:"#ff7a2a",label:"STRAVA",pos:[6.5,3,-3.5],sc:0.8},{k:"games",x:6.6,z:-0.6,r:2.8,c:"#6d86ff",label:"GAMES",pos:[8.2,2.5,-1.8],sc:1},{k:"beer",x:-6.35,z:0,r:2.6,c:"#ff6a80",label:"BEER PONG",pos:[-6.35,2.55,0],sc:1}];go.forEach((e)=>{if(!e.nolabel){let t=DS(e.label,e.c,e.sc);t.position.set(...e.pos),ti.add(t)}if(e.ring!==!1&&e.k!=="bad"){let t=new ne(new ro(e.r*0.55,e.r*0.55+0.05,64),new gt({color:new ge(e.c).multiplyScalar(1.5),transparent:!0,opacity:0.55,side:Ot,toneMapped:!1}));t.rotation.x=-Math.PI/2,t.position.set(e.x,0.02,e.z),ti.add(t),e.ring=t}});var vc=[],u1=new Map;function Yi(e,t,i,n,r,s,o,a,l,c=5.5,h=!0){let u=new yt(t,i,n),f=new ne(u,new gt({visible:!1}));f.position.set(r,s,o),f.userData.isHit=!0,l.add(f);let m=new bi({color:new ge(a).multiplyScalar(2),transparent:!0,opacity:0,toneMapped:!1,depthTest:!1}),g={id:e,hit:f,hits:[f],mat:m,outline:h,far:c};if(h){l.updateMatrixWorld(!0);let x=new Ge().copy(l.matrixWorld).invert(),d=new Si(new R(r-t/2,s-i/2,o-n/2),new R(r+t/2,s+i/2,o+n/2)),p=Math.max(t,i,n)*1.25,y=[];if(l.traverse((M)=>{if(!M.isMesh||M.isInstancedMesh||M.userData.isHit||M.userData.itemLine||!M.geometry)return;if(!M.geometry.boundingBox)M.geometry.computeBoundingBox();let b=new Ge().multiplyMatrices(x,M.matrixWorld),v=M.geometry.boundingBox.clone().applyMatrix4(b),T=v.getSize(new R);if(Math.max(T.x,T.y,T.z)>p||!d.containsPoint(v.getCenter(new R)))return;y.push([M,b])}),y.forEach(([M,b])=>{let v=new cn(new Eh(M.geometry,28),m);v.matrixAutoUpdate=!1,v.matrix.copy(b),v.userData.itemLine=!0,v.renderOrder=5,l.add(v),g.hits.push(M)}),!y.length){let M=new cn(new Eh(u),m);M.position.copy(f.position),M.userData.itemLine=!0,l.add(M)}}g.hits.forEach((x)=>u1.set(x,g)),vc.push(g)}Yi("pc",0.3,0.52,0.5,0.83,1.03,-0.15,7177983,Rs);Yi("kb",0.39,0.04,0.16,-0.2,0.8,0.22,7177983,Rs);Yi("ms",0.075,0.04,0.14,0.27,0.8,0.21,4063130,Rs);Yi("hp",0.26,0.12,0.2,-0.7,0.84,0.26,16751178,Rs);Yi("mon",0.62,0.36,0.05,0.12,1.135,-0.2,3729663,Rs,5.5,!1);Yi("st:games",1.3,0.42,0.3,-1.78,1.12,-0.1,3729663,Rs,7,!1);Yi("st:vl",2.6,1.7,0.3,Ss.vl,af,bs+0.1,4579466,ti,24,!1);Yi("st:hl",2.6,1.7,0.3,Ss.hl,af,bs+0.1,16733296,ti,24,!1);Yi("st:water",0.5,1.4,0.5,$i,0.7,Qi+0.2,8378111,ti,6,!1);Yi("st:strava",2.2,2.4,0.3,6.5,1.7,-3.55,16742954,ti,9,!1);Yi("st:climb",5,5,5,rt.cx,2.5,rt.cz,3729663,ti,16,!1);Yi("st:beer",1.9,0.9,2.7,-6.35,0.7,0,16738944,ti,9,!1);var nb={bag:{brand:"YONEX",name:"72626 · 6R",rows:[["TYP","Bag na rakety"],["KAPACITA","6 raket"]]},shoes:{brand:"YONEX",name:"65 Z4 WIDE",rows:[["TYP","Sálová obuv"],["ŠÍŘKA","Wide · široká"]]},rackets:[{brand:"YONEX",name:"Raketa 1",rows:[["MODEL","doplním doma"]]},{brand:"YONEX",name:"Raketa 2",rows:[["MODEL","doplním doma"]]}],balls:{brand:"YONEX",name:"MAVIS 350",rows:[["BALENÍ","6 ks"],["BARVA","žluté · modrý pruh"]]}},cc=Object.assign({},nb,window.GEAR||{});un.localClippingEnabled=!0;(function(){let i=qe+11.3-0,n=St-6,r=[new gn(new R(0,1,0),-0.47050000000000003)],s=(q,pe=0.7,oe=0,Ce)=>W(q,pe,oe,Ce),o=(q,pe,oe)=>{let Ce=document.createElement("canvas");Ce.width=q,Ce.height=pe,oe(Ce.getContext("2d"),q,pe);let de=new Ni(Ce);de.colorSpace=_t,de.anisotropy=4;try{un.initTexture(de)}catch(Me){}return de},a=(q,pe,oe,Ce=0,de=0,Me=0)=>{let vt=new ne(pe,oe);return vt.position.set(Ce,de,Me),q.add(vt),vt},l=(q,pe,oe,Ce=0.01)=>new ji(q,pe,oe,3,Math.min(Ce,q/2.1,pe/2.1,oe/2.1)),c=0.27,h=0.74,u=-0.17,f=0.17,m=0.03,g=(q)=>0.17+-0.14*q/0.74,x=Math.atan2(0.14,0.74),d=new Ze;d.position.set(i-0.02,0.4675,n),d.rotation.y=-Math.PI/2+0.05,ti.add(d);let p=s(14997702,0.88),y=s(13349002,0.85),M=s(1842207,0.8),b=s(2763310,0.75),v=s(723465,0.95),T=s(2894895,0.4,0.5),_=s(9378860,0.7);function S(q,pe){let oe=new Fi,Ce=q.length;for(let de=0;de<Ce;de++){let Me=q[de],vt=q[(de+Ce-1)%Ce],C=q[(de+1)%Ce],E=Math.hypot(vt[0]-Me[0],vt[1]-Me[1]),X=Math.hypot(C[0]-Me[0],C[1]-Me[1]),ae=[Me[0]+(vt[0]-Me[0])/E*pe,Me[1]+(vt[1]-Me[1])/E*pe],he=[Me[0]+(C[0]-Me[0])/X*pe,Me[1]+(C[1]-Me[1])/X*pe];if(de)oe.lineTo(ae[0],ae[1]);else oe.moveTo(ae[0],ae[1]);oe.quadraticCurveTo(Me[0],Me[1],he[0],he[1])}return oe.closePath(),oe}function w(q,pe,oe,Ce,de,Me,vt=0){let C=q.map((X)=>[X[0],X[1]]),E=new Mr(S(C,Ce),{depth:pe-2*oe,bevelEnabled:!0,bevelThickness:oe,bevelSize:oe,bevelSegments:3,curveSegments:6});return E.translate(0,0,-(pe-2*oe)/2),a(Me,E,de,0,0,vt)}let L=0.016;w([[-0.17+L,L],[0.17-L,L],[0.03-L,0.74-L],[-0.17+L,0.74-L]],0.27,L,0.05,p,d),w([[-0.17+L,L],[0.17-L,L],[g(0.14)-L,0.14],[-0.17+L,0.14]],0.278,L,0.03,M,d);let I=2000,U=o(Math.round(0.34*I),Math.round(0.74*I),(q,pe,oe)=>{let Ce=(Me)=>(Me- -0.17)*I,de=(Me)=>(0.74-Me)*I;q.fillStyle="#e4d8c6",q.fillRect(0,0,pe,oe),q.fillStyle="#1c1c1f",q.beginPath(),q.moveTo(Ce(g(0.74)),de(0.74)),q.lineTo(Ce(g(0.74)-0.05),de(0.74)),q.lineTo(Ce(g(0.17)-0.115),de(0.17)),q.lineTo(Ce(g(0.17)),de(0.17)),q.closePath(),q.fill(),q.strokeStyle="#8f1c2c",q.lineWidth=7,q.beginPath(),q.moveTo(Ce(g(0.74)-0.052),de(0.71)),q.lineTo(Ce(g(0.17)-0.118),de(0.19)),q.stroke(),q.fillStyle="#cbb08a",q.fillRect(0,de(0.2),pe,0.04*I),q.strokeStyle="#a8906c",q.lineWidth=3;for(let Me=1;Me<18;Me++)q.beginPath(),q.moveTo(Me*pe/18,de(0.2)),q.lineTo(Me*pe/18,de(0.16)),q.stroke();q.fillStyle="#1c1c1f",q.fillRect(0,de(0.14),pe,0.14*I),q.fillStyle="#3a3a3d",q.beginPath(),q.arc(Ce(-0.125),de(0.69),0.016*I,0,7),q.fill(),q.beginPath(),q.arc(Ce(-0.09),de(0.665),0.016*I,0,7),q.fill(),q.beginPath(),q.moveTo(Ce(-0.075),de(0.7)),q.lineTo(Ce(-0.045),de(0.655)),q.lineTo(Ce(-0.105),de(0.64)),q.closePath(),q.fill(),q.save(),q.translate(Ce(-0.075),de(0.6)),q.rotate(Math.PI/2),q.fillStyle="#35353a",q.font="italic 900 150px Arial Black, Arial",q.textBaseline="middle",q.fillText("YONEX",0,0),q.restore()});U.repeat.set(2.941176470588235,1.3513513513513513),U.offset.set(0.5,0);{let q=new so(S([[-0.166,0.004],[0.166,0.004],[0.026,0.736],[-0.166,0.736]],0.05),6);a(d,q,new dt({map:U,roughness:0.85}),0,0,0.13620000000000002)}for(let q of[-1,1])a(d,l(0.03,0.56,0.065,0.014),b,-0.18200000000000002,0.4,q*0.075),a(d,l(0.03,0.12,0.06,0.014),b,-0.17,0.775,q*0.075).rotation.z=0.1;let K=new ne(new Ln(0.035,0.006,6,12,Math.PI),M);K.rotation.y=Math.PI/2,K.position.set(-0.12000000000000001,0.74,0),d.add(K);let P=new Ze;P.position.set(g(0.37),0.37,0),P.rotation.z=x,d.add(P);let V=0.075,D=[-1,1].map((q)=>{let pe=new Ze;pe.position.set(0.0012,0.07,q*V),P.add(pe);let oe=a(pe,new zt(1,1).rotateY(Math.PI/2),v,0,0.29,0);oe.scale.set(1,0.001,0.001),oe.visible=!1;let Ce=a(pe,new yt(0.01,0.6,0.008),y,0.003,0,-0.004),de=a(pe,new yt(0.01,0.6,0.008),y,0.003,0,0.004),Me=a(pe,new yt(0.016,0.032,0.014),T,0.008,0.27,0);return{op:oe,t1:Ce,t2:de,pull:Me}}),N=[-1,1].map((q)=>{let pe=a(d,new zt(0.18,0.05).rotateX(-Math.PI/2),v,-0.07,0.742,q*V);return pe.visible=!1,pe}),Q=new Ze;P.add(Q);let G=(q,pe,oe,Ce)=>{let de=Math.hypot(oe-q,Ce-pe),Me=a(Q,new yt(0.007,de,0.026),y,0.012,(q+oe)/2,(pe+Ce)/2);Me.rotation.x=Math.atan2(Ce-pe,oe-q);let vt=a(Q,new yt(0.012,0.012,0.034),M,0.014,q+(oe-q)*0.7,pe+(Ce-pe)*0.7)};a(Q,l(0.014,0.16,0.034,0.006),y,0.012,-0.12,0);for(let q of[-1,1])G(-0.04,0,0.12,q*0.07),G(-0.2,0,-0.33,q*0.075);a(Q,new yt(0.012,0.03,0.01),T,0.012,0.28,0),a(d,new yt(0.004,0.11,0.22000000000000003),v,g(0.085)+0.001,0.085,0);let z=new Ze;z.position.set(g(0.145)+0.004,0.145,0),d.add(z),a(z,l(0.012,0.12,0.24000000000000002,0.005),b,0,-0.06,0),a(z,new yt(0.016,0.02,0.05),y,0.003,-0.105,0);let Y=-0.21500000000000002;a(d,l(0.09,0.3,0.12,0.02),b,Y,0.18,0),a(d,new yt(0.09,0.012,0.12),s(3815999,0.7),Y,0.33,0);function le(q){let pe=new Ze,oe=s(1447707,0.35,0.3,{clippingPlanes:r}),Ce=s(15263978,0.4,0.2,{clippingPlanes:r}),de=s(q,0.9,0,{clippingPlanes:r}),Me=0.54,vt=0.104,C=0.134,E=[];for(let ae=0;ae<48;ae++){let he=ae/48*Math.PI*2;E.push(new R(0.104*Math.cos(he),0.54+0.134*Math.sin(he),0))}a(pe,new fr(new Kn(E,!0),72,0.0075,8,!0),oe);let X=o(256,320,(ae,he,ve)=>{ae.clearRect(0,0,he,ve),ae.beginPath(),ae.ellipse(he/2,ve/2,he/2-2,ve/2-2,0,0,7),ae.clip(),ae.strokeStyle="rgba(235,235,225,0.75)",ae.lineWidth=1.4;for(let Ee=0;Ee<=18;Ee++){let te=Ee*he/18;ae.beginPath(),ae.moveTo(te,0),ae.lineTo(te,ve),ae.stroke()}for(let Ee=0;Ee<=22;Ee++){let te=Ee*ve/22;ae.beginPath(),ae.moveTo(0,te),ae.lineTo(he,te),ae.stroke()}});a(pe,new yr(1,48),new gt({map:X,transparent:!0,opacity:0.8,depthWrite:!1,side:Ot,clippingPlanes:r,alphaTest:0.05}),0,0.54,0).scale.set(0.09999999999999999,0.13,1);for(let ae of[-1,1])a(pe,new fr(new Kn([new R(ae*0.052,0.41200000000000003,0),new R(ae*0.03,0.376,0),new R(ae*0.008,0.345,0)]),12,0.0065,6),oe);return a(pe,new yt(0.034,0.014,0.012),Ce,0,0.38,0),a(pe,new At(0.0038,0.0038,0.15,8),oe,0,0.275,0),a(pe,new At(0.0125,0.0125,0.2,10),de,0,0.1,0),a(pe,new At(0.0135,0.0135,0.008,10),Ce,0,0,0),a(pe,new At(0.0135,0.0135,0.006,10),Ce,0,0.2,0),a(pe,new yt(0.012,0.05,0.016),Ce,0.104,0.54,0),pe}let k=[le(12593706),le(2775232)],ee=(q,pe,oe)=>{q.position.set(-0.065,0.04+0.42*oe,pe),q.rotation.z=0};ee(k[0],V,0),ee(k[1],-V,0),k.forEach((q)=>{d.add(q),q.visible=!1});function be(q){let pe=new Ze,oe=0.3,Ce=0.15,de=(me)=>0.046+0.006*me-0.012*me*me,Me=s(16185337,0.55),vt=s(11186878,0.45,0.25),C=s(15527923,0.6),E=s(9278882,0.8),X=s(14672874,0.7),ae=(me,F=0)=>{let se=new Fi;for(let re=0;re<=40;re++){let Se=re/40*Math.PI*2,we=0.15*Math.cos(Se),Ae=we/0.15,tt=(de(Ae)+F)*Math.sin(Se)*me;(re?se.lineTo:se.moveTo).call(se,we*me,tt)}return se},he=(me,F)=>{let se=new Mr(me,{depth:F,bevelEnabled:!1,curveSegments:16});return se.rotateX(-Math.PI/2),se};a(pe,he(ae(1.01,0.003),0.009),E,0,0,0),a(pe,he(ae(1,0),0.024),C,0,0.009,0);let ve=[[-1,0.07],[-0.85,0.1],[-0.6,0.095],[-0.3,0.082],[0,0.07],[0.35,0.056],[0.7,0.043],[0.92,0.03],[1,0]],Ee=(me)=>{for(let F=1;F<ve.length;F++)if(me<=ve[F][0]){let se=ve[F-1],re=ve[F],Se=(me-se[0])/(re[0]-se[0]);return se[1]+(re[1]-se[1])*Se}return 0};function te(me,F,se,re){let Ae=[],tt=[];for(let et=0;et<=14;et++){let ut=me+(F-me)*et/14,Pe=Math.max(0.0005,de(ut)*(1-Math.pow(Math.abs(ut),12)))*se,Ft=Ee(ut)*se;for(let mi=0;mi<=12;mi++){let zn=mi/12*Math.PI;Ae.push(ut*0.15,0.033+Ft*Math.sin(zn),Pe*Math.cos(zn))}}for(let et=0;et<14;et++)for(let ut=0;ut<12;ut++){let Pe=et*13+ut,Ft=Pe+12+1;tt.push(Pe,Pe+1,Ft,Pe+1,Ft+1,Ft)}let Je=new Xe;Je.setAttribute("position",new Re(Ae,3)),Je.setIndex(tt),Je.computeVertexNormals();let Oe=new ne(Je,re);return re.side=Ot,pe.add(Oe),Oe}te(-1,1,1,Me),te(-1,-0.55,1.03,vt),te(0.72,1,1.03,vt);let ce=a(pe,new Ln(0.04,0.0075,6,18),vt,-0.085,0.108,0);ce.scale.set(1.15,1,0.8),ce.rotation.x=Math.PI/2,ce.rotation.y=0,ce.rotation.z=0,ce.rotation.order="XYZ",a(pe,new yr(0.036,18).rotateX(-Math.PI/2),v,-0.085,0.104,0).scale.set(1.15,1,0.8),a(pe,l(0.05,0.012,0.045,0.004),Me,-0.03,0.098,0).rotation.z=0.35;for(let me=0;me<5;me++){let F=-0.025+me*0.022,se=0.088-me*0.008;a(pe,new yt(0.005,0.004,0.058),X,F,se,0).rotation.z=0.15}for(let me of[-1,1])a(pe,new fr(new Kn([new R(-0.1,0.065,me*0.041),new R(-0.02,0.07,me*0.046),new R(0.07,0.048,me*0.049)]),12,0.0035,5),vt);a(pe,l(0.022,0.032,0.05,0.006),s(1710878,0.6),-0.148,0.095,0);for(let me of[-1,1])a(pe,l(0.07,0.022,0.004,0.002),s(3882823,0.5),-0.1,0.045,me*0.045);if(q)pe.scale.z=-1;return pe}let _e=new Ze;d.add(_e);let He=be(!1),Ie=be(!0);He.position.z=0.053,Ie.position.z=-0.053,_e.add(He,Ie),_e.position.set(0,0.052,0),_e.visible=!1;let ft=new Ze;ft.position.set(Y,0.045,0),d.add(ft);let ze=o(512,256,(q,pe,oe)=>{q.fillStyle="#1f4fd0",q.fillRect(0,0,pe,oe),q.fillStyle="#ffd400",q.fillRect(0,oe*0.78,pe,oe*0.09),q.fillStyle="#ffffff",q.font="italic 900 70px Arial Black, Arial",q.textAlign="center",q.fillText("MAVIS",pe/2,oe*0.42),q.font="italic 900 62px Arial Black, Arial",q.fillText("350",pe/2,oe*0.68),q.fillStyle="#ffffff",q.font="700 24px Arial",q.fillText("YONEX",pe/2,oe*0.14)});ze.wrapS=pn,ze.offset.x=0.5,a(ft,new At(0.036,0.036,0.29,20),new dt({map:ze,roughness:0.45}),0,0.145,0),a(ft,new At(0.0385,0.0385,0.022,20),s(16053488,0.5),0,0.296,0),a(ft,new At(0.0385,0.0385,0.012,20),s(16053488,0.5),0,0.006,0),Yi("st:bag",0.52,0.8,0.3,-0.04,0.4,0,16765562,d,5,!1);let ke=vc[vc.length-1],pt=ke.hits.slice();Yi("bg:r1",0.23,0.69,0.06,0,0.34,0,16765562,k[0],5,!1),Yi("bg:r2",0.23,0.69,0.06,0,0.34,0,16765562,k[1],5,!1),Yi("bg:shoes",0.32,0.12,0.2,0,0.055,0,16765562,_e,5,!1),Yi("bg:balls",0.085,0.33,0.085,0,0.15,0,16765562,ft,5,!1),go.push({k:"bag",x:i,z:n,r:3,c:"#ffd27a",label:"BAG",nolabel:!0,ring:!1,pos:[i,1,n],sc:0.6});let ue=document.getElementById("ui")||document.body,xe={},ye=(q)=>{let pe=document.createElement("div");return pe.className="lb",pe.style.cssText="position:fixed;left:0;top:0;display:none;transform:translate(-50%,-100%);margin-top:-8px;pointer-events:none;border-color:#ffd27a99;z-index:6",pe.innerHTML=`<span class=br>${q.brand}</span><span class=nm>${q.name}</span>`,ue.appendChild(pe),pe};xe["bg:shoes"]=ye(cc.shoes),xe["bg:r1"]=ye(cc.rackets[0]),xe["bg:r2"]=ye(cc.rackets[1]),xe["bg:balls"]=ye(cc.balls);let Be={"bg:shoes":[_e,0,0.17,0],"bg:r1":[k[0],0,0.72,0],"bg:r2":[k[1],0,0.72,0],"bg:balls":[ft,0,0.34,0]},Fe=new R,nt={"bg:shoes":_e,"bg:r1":k[0],"bg:r2":k[1],"bg:balls":ft};Object.values(nt).forEach((q)=>q.traverse((pe)=>{if(pe.isMesh&&pe.material&&pe.material.emissive)pe.material=pe.material.clone()}));let We=0,at=0,Mt=performance.now(),Ct=null,H=null,yi=(q)=>(q=Math.max(0,Math.min(1,q)),q*q*(3-2*q));window.__bagIsOpen=()=>We===1,window.__bagSum=()=>({t:"YONEX "+cc.bag.name.split(" ")[0],s:We?"Podívej se na boty, rakety a míčky":"Bag na 6 raket",k:We?[["\uD83D\uDC5F","BOTY"],["\uD83C\uDFF8","RAKETY"],["\uD83D\uDFE1","MÍČKY"]]:[["\uD83C\uDF92","OTEVŘÍT"]]}),window.__bagToggle=()=>{We=We?0:1,window.__sfx&&window.__sfx.bag(We===1);let q=Kt;if(Kt=null,q)fd(q.k);let pe=document.querySelector("#prompt .tp");if(pe)pe.textContent=We?"ZAVŘÍT BAG":"OTEVŘÍT BAG"},_o.push(()=>{let q=performance.now(),pe=Math.min(0.1,(q-Mt)/1000);Mt=q,at+=Math.sign(We-at)*Math.min(Math.abs(We-at),pe/1.3);let oe=(de,Me)=>yi((at-de)/(Me-de));{let de=oe(0,0.4),Me=0.001+0.3*de,vt=0.001+0.05*de;D.forEach((C)=>{C.op.visible=de>0.01,C.op.scale.set(1,Me,vt),C.op.position.y=0.29-Me/2,C.t1.position.z=-vt/2-0.004,C.t2.position.z=vt/2+0.004,C.pull.position.y=0.27-0.3*de}),N.forEach((C)=>{C.visible=de>0.05,C.scale.set(0.3+0.7*de,1,0.2+0.8*de)})}z.rotation.z=1.5*oe(0.05,0.3),Q.visible=at<0.08,ee(k[0],V,oe(0.3,0.8)),ee(k[1],-V,oe(0.4,0.9)),k.forEach((de)=>de.visible=at>0.3),_e.position.x=0.37*oe(0.35,0.85),_e.position.y=0.052*(1-oe(0.7,0.9)),_e.visible=at>0.35,ft.position.y=0.045+0.17*oe(0.55,1),ke.hits=We===0&&at<0.97||at<0.05?pt:[];let Ce=typeof Rt==="string"&&Rt.startsWith("bg:")&&at>0.9?Rt:null;if(Ce!==Ct){if(Ct)xe[Ct].style.display="none";if(Ce)xe[Ce].style.display="flex";Ct=Ce}if(Ce){let de=Be[Ce];Fe.set(de[1],de[2],de[3]),de[0].localToWorld(Fe),Fe.project(Wi);let Me=xe[Ce].style;if(Fe.z>1)Me.display="none";else Me.display="flex",Me.left=(Fe.x*0.5+0.5)*innerWidth+"px",Me.top=(-Fe.y*0.5+0.5)*innerHeight+"px"}if(Ce!==H){for(let de in nt)nt[de].traverse((Me)=>{if(Me.isMesh&&Me.material&&Me.material.emissive)Me.material.emissive.setHex(de===Ce?2768742:0)});H=Ce}})})();(function(){let t=null,i=null,n=null,r=null,s=!1,o=null,a=(v,T)=>v+Math.random()*(T-v);function l(){if(t){if(t.state==="suspended")t.resume();return t}try{t=new(window.AudioContext||window.webkitAudioContext),i=t.createGain(),i.gain.value=s?0:0.9;let v=t.createDynamicsCompressor();v.threshold.value=-14,v.ratio.value=4,i.connect(v),v.connect(t.destination);let T=t.sampleRate*2;n=t.createBuffer(1,T,t.sampleRate);let _=n.getChannelData(0);for(let S=0;S<T;S++)_[S]=Math.random()*2-1;r=t.createGain(),r.gain.value=1;for(let[S,w]of[[0.071,0.34],[0.113,0.3],[0.167,0.26]]){let L=t.createDelay(1);L.delayTime.value=S;let I=t.createGain();I.gain.value=w;let U=t.createBiquadFilter();U.type="lowpass",U.frequency.value=2400,r.connect(L),L.connect(U),U.connect(I),I.connect(L);let K=t.createGain();K.gain.value=0.5,U.connect(K),K.connect(i)}g()}catch(v){t=null}return t}let c=(v,T)=>{if(v.connect(i),T){let _=t.createGain();_.gain.value=T,v.connect(_),_.connect(r)}};function h(v,T,_){if(!t)return;let S=t.createBufferSource();S.buffer=n,S.loop=!0,S.playbackRate.value=_.rate||1;let w=t.createBiquadFilter();if(w.type=_.type||"bandpass",w.Q.value=_.q==null?1:_.q,w.frequency.setValueAtTime(_.f||1000,v),_.f2)w.frequency.exponentialRampToValueAtTime(_.f2,v+T);let L=t.createGain(),I=_.att==null?Math.min(0.01,T/3):_.att;L.gain.setValueAtTime(0.0001,v),L.gain.linearRampToValueAtTime(_.gain||0.1,v+I),L.gain.exponentialRampToValueAtTime(0.0001,v+T),S.connect(w),w.connect(L),c(L,_.wet),S.start(v,Math.random()*1.5),S.stop(v+T+0.05)}function u(v,T,_){if(!t)return;let S=t.createOscillator();if(S.type=_.type||"sine",S.frequency.setValueAtTime(_.f||440,v),_.f2)S.frequency.exponentialRampToValueAtTime(_.f2,v+T);let w=t.createGain(),L=_.att==null?0.004:_.att;w.gain.setValueAtTime(0.0001,v),w.gain.linearRampToValueAtTime(_.gain||0.1,v+L),w.gain.exponentialRampToValueAtTime(0.0001,v+T),S.connect(w),c(w,_.wet),S.start(v),S.stop(v+T+0.05)}let f=()=>t.currentTime+0.005,m={};m.unlock=l,m.zip=(v,T=0,_=0.7,S=1)=>{if(!l())return;let w=f()+T,L=Math.round(_*60);h(w,_,{type:"bandpass",f:v?1300:2600,f2:v?2700:1300,q:2.2,gain:0.05*S,att:0.05});for(let I=0;I<L;I++){let U=I/L,K=w+U*_;h(K,0.012,{type:"bandpass",f:(v?3200+U*2200:5400-U*2200)*a(0.92,1.08),q:4,gain:0.07*S*a(0.7,1.1),att:0.001})}u(w+_,0.05,{f:260,f2:150,gain:0.05*S}),h(w+_,0.03,{type:"highpass",f:4500,gain:0.05*S})},m.rustle=(v=0,T=0.35,_=1)=>{if(!l())return;let S=f()+v;h(S,T,{type:"bandpass",f:1800,f2:700,q:0.6,gain:0.07*_,att:0.06}),h(S+T*0.4,T*0.7,{type:"highpass",f:3000,gain:0.025*_,att:0.08})},m.scrape=(v=0,T=0.5,_=1)=>{if(!l())return;let S=f()+v;h(S,T,{type:"bandpass",f:520,f2:330,q:0.9,gain:0.09*_,att:0.08}),h(S,T,{type:"highpass",f:2500,gain:0.02*_,att:0.1})},m.thud=(v=0,T=130,_=1)=>{if(!l())return;let S=f()+v;u(S,0.14,{f:T,f2:T*0.5,gain:0.22*_,wet:0.15}),h(S,0.06,{type:"lowpass",f:420,gain:0.1*_})},m.pop=(v=0,T=1)=>{if(!l())return;let _=f()+v;u(_,0.09,{f:520,f2:170,gain:0.2*T,wet:0.2}),h(_,0.025,{type:"bandpass",f:2600,q:1.5,gain:0.07*T})},m.shing=(v=0,T=1)=>{if(!l())return;let _=f()+v;h(_,0.45,{type:"bandpass",f:700,f2:1500,q:0.8,gain:0.06*T,att:0.1}),u(_+0.4,0.35,{f:2300,f2:2150,gain:0.035*T,wet:0.5}),h(_+0.4,0.08,{type:"highpass",f:5000,gain:0.04*T})},m.click=(v=0,T=1)=>{if(!l())return;let _=f()+v;h(_,0.02,{type:"bandpass",f:2800,q:3,gain:0.1*T,att:0.001}),u(_,0.03,{f:1800,f2:900,type:"square",gain:0.025*T})},m.beep=(v=880,T=0.09,_=1,S=0,w="square")=>{if(!l())return;u(f()+S,T,{f:v,f2:v*0.99,type:w,gain:0.07*_,att:0.004,wet:0.25})},m.fanfare=()=>{[523,659,784,1047,784,1047].forEach((v,T)=>m.beep(v,0.16,1.1,T*0.13,"triangle"))},m.buzzer=()=>{m.beep(140,0.6,1.6,0,"sawtooth")},m.bag=(v)=>{if(!l())return;if(v)m.zip(!0,0,0.55),m.zip(!0,0.14,0.55,0.85),m.rustle(0.05,0.4),m.shing(0.38),m.shing(0.52,0.8),m.scrape(0.45,0.6),m.thud(1.12,150,0.7),m.rustle(1.1,0.2,0.5),m.pop(0.95),m.click(1.28,0.6);else m.pop(0.02,0.8),m.scrape(0.18,0.55),m.thud(0.3,110,0.5),m.shing(0.3,0.7),m.shing(0.45,0.6),m.rustle(0.7,0.35),m.zip(!1,0.78,0.55),m.zip(!1,0.92,0.55,0.85),m.thud(1.5,90,0.4)},m.step=(v,T)=>{if(!l())return;let _=f(),S=a(0.8,1.15),w=Math.min(1.4,0.7+T*0.08);if(v==="hall"){if(h(_,0.07,{type:"lowpass",f:520*S,gain:0.07*w}),u(_,0.09,{f:95*S,f2:55,gain:0.09*w,wet:0.08}),h(_,0.02,{type:"bandpass",f:2200*S,q:2,gain:0.025*w}),Math.random()<0.07*w)m.squeak()}else if(v==="stair")u(_,0.1,{f:170*S,f2:90,gain:0.14*w,wet:0.12}),h(_,0.05,{type:"bandpass",f:900,q:1,gain:0.07*w});else h(_,0.045,{type:"bandpass",f:1300*S,q:1.2,gain:0.1*w}),u(_,0.07,{f:190*S,f2:110,gain:0.1*w})},m.squeak=()=>{if(!l())return;let v=f(),T=a(1300,1900);u(v,0.13,{f:T,f2:T*1.5,type:"sawtooth",gain:0.012,wet:0.35,att:0.02}),u(v,0.13,{f:T*1.01,f2:T*1.53,gain:0.02,wet:0.35,att:0.02})},m.jump=()=>{if(!l())return;h(f(),0.18,{type:"bandpass",f:500,f2:1200,q:0.6,gain:0.05,att:0.04})},m.land=(v=1)=>{if(!l())return;if(m.thud(0,100,0.8*v),h(f(),0.08,{type:"lowpass",f:700,gain:0.08*v}),Math.random()<0.3)m.squeak()},m.sit=()=>{if(!l())return;let v=f();h(v,0.35,{type:"bandpass",f:280,f2:520,q:7,gain:0.07,att:0.05}),m.rustle(0,0.3,0.7),m.thud(0.22,100,0.8)},m.stand=()=>{if(!l())return;let v=f();h(v,0.25,{type:"bandpass",f:520,f2:300,q:6,gain:0.05,att:0.04}),m.rustle(0,0.3,0.6)},m.hit=(v=1,T=0)=>{if(!l())return;let _=f()+T;u(_,0.05,{f:a(850,1100),f2:600,gain:0.07*v,wet:0.7}),h(_,0.035,{type:"bandpass",f:2600,q:1,gain:0.05*v,wet:0.7})},m.mute=(v)=>{if(s=v==null?!s:v,i)i.gain.setTargetAtTime(s?0:0.9,t.currentTime,0.05);return s};function g(){let v=(T,_,S)=>{let w=t.createBufferSource();w.buffer=n,w.loop=!0;let L=t.createBiquadFilter();L.type=S,L.frequency.value=T,L.Q.value=_;let I=t.createGain();return I.gain.value=0,w.connect(L),L.connect(I),I.connect(i),w.start(),I};o={hall:v(260,0.4,"lowpass"),room:v(150,0.5,"lowpass"),air:v(900,0.3,"bandpass")}}m.ambient=(v)=>{if(!t||!o)return;let T=t.currentTime;o.room.gain.setTargetAtTime(v?0:0.03,T,0.6)},window.__sfx=m,["pointerdown","keydown","touchstart"].forEach((v)=>addEventListener(v,()=>l(),{passive:!0})),addEventListener("keydown",(v)=>{if(v.code==="KeyM"&&!v.repeat)m.mute()});let x=0,d=!1,p=performance.now(),y=0,M=0;window.__inHall=()=>Ne.z>pi+0.3,_o.push(()=>{let v=performance.now(),T=Math.min(0.1,(v-p)/1000);if(p=v,!t||t.state!=="running")return;let _=$r>0.001,S=Math.hypot(Ne.vx,Ne.vz);if(_&&!d)m.jump();if(_)y=Math.max(y,mo<0?-mo:0);if(!_&&d)m.land(Math.min(1.3,0.5+y*0.12)),y=0,x=0;if(d=_,!_&&S>0.6&&!(window.__sitting&&window.__sitting())){x+=S*T;let w=S>4?1.55:1.15;if(x>=w)x=0,m.step(ba>0.2?"stair":Ne.z>pi+0.3?"hall":"room",S)}else if(S<0.3)x=b();m.ambient(Ne.z>pi+0.3)});function b(){return 0.9}})();(function(){let n=(Hn[0]+Hn[1])/2,s=pr-0.1,o=document.createElement("canvas");o.width=1344,o.height=544;let a=o.getContext("2d"),l=new Ni(o);l.colorSpace=_t,l.anisotropy=8;let c=new Ze;c.position.set(n,5,s),ti.add(c),u(c,new yt(6.4,2.71,0.12),W(1052948,0.5,0.4),0,0,0),u(c,new yt(6.44,0.035,0.13),new gt({color:16734751}),0,1.355,0),u(c,new yt(6.44,0.035,0.13),new gt({color:16734751}),0,-1.355,0);let h=new ne(new zt(6.2,2.51),new gt({map:l,toneMapped:!1}));h.rotation.y=Math.PI,h.position.z=-0.065,c.add(h);function u(S,w,L,I,U,K){let P=new ne(w,L);return P.position.set(I,U,K),S.add(P),P}let f={a:0,b:0,sa:0,sb:0,msg:"",until:0,over:!1};try{let S=JSON.parse(localStorage.getItem("fonger-score")||"null");if(S&&typeof S.a==="number")f=Object.assign(f,S,{msg:"",until:0})}catch(S){}let m=()=>{try{localStorage.setItem("fonger-score",JSON.stringify({a:f.a,b:f.b,sa:f.sa,sb:f.sb,over:f.over}))}catch(S){}},g={"sc:a":[0.21,0.4,0.4,0.78],"sc:b":[0.79,0.4,0.4,0.78],"sc:am":[0.09,0.89,0.13,0.16],"sc:bm":[0.91,0.89,0.13,0.16],"sc:r":[0.5,0.86,0.2,0.17]};for(let S in g){let[w,L,I,U]=g[S];Yi(S,I*6.2,U*2.51,0.12,n+3.1-w*6.2,6.255-L*2.51,s-0.1,16747066,ti,26,!1)}go.push({k:"score",x:9999,z:9999,r:1,c:"#ff8a3a",label:"SCORE",nolabel:!0,ring:!1,pos:[0,1,0],sc:0.6}),window.__scoreSum=()=>({t:"SKÓRE",s:"",k:[]});let x={0:"abcdef",1:"bc",2:"abdeg",3:"abcdg",4:"bcfg",5:"acdfg",6:"acdefg",7:"abc",8:"abcdefg",9:"abcdfg"};function d(S,w,L,I,U,K,P){let V=L*0.18,D=U==null?"":x[U],N=[S+V*0.7,L-V*1.4,V],Q=I/2-V*1.15,G={a:[N[0],w,N[1],V],g:[N[0],w+I/2-V/2,N[1],V],d:[N[0],w+I-V,N[1],V],f:[S,w+V*0.6,V,Q],b:[S+L-V,w+V*0.6,V,Q],e:[S,w+I/2+V*0.55,V,Q],c:[S+L-V,w+I/2+V*0.55,V,Q]};for(let z in G){let Y=G[z],le=D.indexOf(z)>=0&&!P;a.fillStyle=le?K:"rgba(255,140,30,0.06)",a.shadowColor=le?K:"transparent",a.shadowBlur=le?26:0,a.beginPath(),a.roundRect(Y[0],Y[1],Y[2],Y[3],V*0.4),a.fill()}a.shadowBlur=0}let p=(S,w,L,I)=>{let V=S-130-13;d(V,w,130,250,Math.floor(L/10)%10,I,L<10),d(V+130+26,w,130,250,L%10,I)},y="";function M(S){a.clearRect(0,0,1344,544),a.fillStyle="#06070a",a.fillRect(0,0,1344,544);for(let[L,I]of[["sc:a",336],["sc:b",1008]])if(S===L&&!f.over)a.fillStyle="rgba(255,138,58,0.10)",a.fillRect(I-320,14,640,400),a.strokeStyle="rgba(255,138,58,0.7)",a.lineWidth=4,a.strokeRect(I-320,14,640,400);a.font="700 46px Arial, sans-serif",a.textAlign="center",a.fillStyle="#e8e8ee",a.fillText("DOMÁCÍ",336,74),a.fillText("HOSTÉ",1008,74),p(336,108,f.a,"#ffb020"),p(1008,108,f.b,"#ffb020"),a.fillStyle="#9aa0ad",a.font="700 34px Arial",a.fillText("SETY",672,74),d(592,108,64,120,f.sa,"#ff4a3a"),d(688,108,64,120,f.sb,"#ff4a3a"),a.fillStyle="#ff4a3a",a.fillRect(666,150,12,12),a.fillRect(666,186,12,12);let w=(L,I,U,K,P,V)=>{a.fillStyle=S===L?"rgba(255,138,58,0.35)":"rgba(255,255,255,0.07)",a.strokeStyle=S===L?"#ff8a3a":"rgba(255,255,255,0.3)",a.lineWidth=3,a.beginPath(),a.roundRect(I-K/2,U-P/2,K,P,24),a.fill(),a.stroke(),a.fillStyle="#fff",a.font="700 40px Arial",a.fillText(V,I,U+14)};if(w("sc:am",120,484,150,74,"− 1"),w("sc:bm",1224,484,150,74,"− 1"),w("sc:r",672,468,280,74,"NOVÁ HRA"),a.font="600 26px Arial",a.fillStyle="#7f8594",a.fillText("první na 21, rozdíl 2 · vítěz setu = 2 sety",672,276),a.fillText("namiř a stiskni E",672,312),Date.now()<f.until)a.fillStyle="rgba(0,0,0,0.72)",a.fillRect(0,150,1344,160),a.fillStyle="#ffd24a",a.font="800 110px Arial",a.shadowColor="#ffb020",a.shadowBlur=30,a.fillText(f.msg,672,270),a.shadowBlur=0;l.needsUpdate=!0}let b=(S,w)=>S>=21&&S-w>=2||S>=30,v=()=>window.__sfx;function T(S,w){if(f.over){if(Date.now()>f.until)_();return}let L=S;if(f[L]=Math.max(0,f[L]+w),w>0)v()&&v().beep(L==="a"?1040:780,0.09);else v()&&v().beep(330,0.1);if(w>0&&b(f[L],f[L==="a"?"b":"a"])){f["s"+L]++;let I=L==="a"?"DOMÁCÍ":"HOSTÉ";if(f["s"+L]>=2)f.over=!0,f.msg=I+" VYHRÁLI!",f.until=Date.now()+5000,v()&&v().fanfare();else f.msg="SET · "+I,f.until=Date.now()+2500,v()&&v().beep(1320,0.3,1,0.1,"triangle"),setTimeout(()=>{f.a=0,f.b=0,m()},2500)}m()}function _(){f={a:0,b:0,sa:0,sb:0,msg:"NOVÁ HRA",until:Date.now()+1200,over:!1},m(),v()&&v().buzzer()}window.__score=(S)=>{if(v()&&v().unlock(),S==="sc:a")T("a",1);else if(S==="sc:b")T("b",1);else if(S==="sc:am")T("a",-1);else if(S==="sc:bm")T("b",-1);else if(S==="sc:r")_()},M(null),_o.push(()=>{let S=typeof Rt==="string"&&Rt.startsWith("sc:")?Rt:null,w=S+"|"+f.a+"|"+f.b+"|"+f.sa+"|"+f.sb+"|"+(Date.now()<f.until?f.msg:"");if(w!==y)y=w,M(S);if(S&&Kt&&Kt.k==="score"){let L=document.querySelector("#prompt .tp"),I=S==="sc:r"?"NOVÁ HRA":S==="sc:am"||S==="sc:bm"?"ODEBRAT BOD":"PŘIDAT BOD";if(L&&L.textContent!==I)L.textContent=I}})})();(function(){let t=[],i=(p,y,M,b)=>{let v=[-Math.sin(M),-Math.cos(M)];t.push({x:p,z:y,y:0.4675,yaw:M,ex:p+v[0]*0.8,ez:y+v[1]*0.8,name:b})};for(let p of[-6,-2,2,6])for(let y of[-0.6,0.6])i(qe+11.3,St+p+y,Math.PI/2,"LAVIČKA");for(let p of Hn)for(let y of[-0.4,0.4])i(p+y,St+9.3,0,"LAVIČKA");let n=!1;function r(){if(n||!cd)return;if(n=!0,Dt.v===3){let M=[-(Dt.HALF-1),Dt.AC];for(let b=0;b<Dt.N;b++)for(let v=0;v<2;v++)for(let T=0;T<Dt.SEATS;T++){let _=qe-(Dt.X0+b*Dt.D+Dt.SOFF),S=St+M[v]+0.25+T*Dt.PITCH,w=Dt.H*(b+1)+Dt.T;t.push({x:_,z:S,y:w+0.4625,fy:w,yaw:-Math.PI/2,ex:_+0.5,ez:S,name:"SEDAČKA "+"ABCDE"[b]+(v*Dt.SEATS+T+1),tr:!0})}return}let p=Math.floor(16.8)-1;for(let y=0;y<Dt.N;y++)for(let M=0;M<p;M++){let b=qe-(Dt.X0+y*Dt.D+0.5),v=St-4.2+0.5+M*0.5;t.push({x:b,z:v,y:Dt.H*(y+1)+0.445,yaw:-Math.PI/2,ex:b+0.9,ez:v,name:"TRIBUNA"})}}let s={k:"sit",x:9999,z:9999,r:1.6,c:"#9ad0ff",label:"SIT",nolabel:!0,ring:!1,pos:[0,1,0],sc:0.6};go.push(s);let o=new ne(new yt(0.44,0.012,0.46),new gt({color:10478847,transparent:!0,opacity:0.6,depthWrite:!1}));o.visible=!1,o.renderOrder=5,ti.add(o),window.__sitName=()=>(l||a||{name:""}).name;let a=null,l=null,c=0,h=0,u={x:0,z:0},f=performance.now(),m=!1,g=(p)=>p*p*(3-2*p);window.__sitting=()=>h===1,window.__sitSum=()=>({t:(l||a||{name:"LAVIČKA"}).name,s:"",k:[]}),window.__sitDY=()=>{if(!a)return 0;let p=g(c),y=d1+ba+$r;return(a.y+0.78-y)*p};let x=()=>{let p=Kt;if(Kt=null,p)fd(p.k)};function d(){if(h===0)return;h=0,window.__sfx&&window.__sfx.stand(),x()}window.__sitToggle=()=>{if(h===1)return d();if(!l)return;a=l,h=1,c=Math.max(c,0.0001),u={x:Ne.x,z:Ne.z},m=!1,Ne.vx=Ne.vz=0,window.__sfx&&window.__sfx.sit(),x()},_o.push(()=>{let p=performance.now(),y=Math.min(0.1,(p-f)/1000);if(f=p,r(),!a){let v=-Math.sin(Ne.yaw),T=-Math.cos(Ne.yaw),_=1e9,S=null;for(let w of t){let L=w.x-Ne.x,I=w.z-Ne.z,U=Math.hypot(L,I),K=w.fy!=null?w.fy:w.y>0.5?w.y-0.445:0;if(Math.abs(ba-K)>0.25)continue;let P;if(w.tr){if(U>1.5)continue;let V=U<0.45?1:(L*v+I*T)/U;if(V<0.4)continue;P=U+(1-V)*1.6}else{if(U>1.15)continue;P=U}if(P<_)_=P,S=w}if(S!==l){if(l=S,Kt&&Kt.k==="sit")x()}if(s.x=l?l.x:9999,s.z=l?l.z:9999,o.visible=!!(l&&l.tr),o.visible)o.position.set(l.x,l.y+0.014,l.z),o.material.opacity=0.5+0.25*Math.sin(p/220);return}o.visible=!1,s.x=a.x,s.z=a.z,c=Math.max(0,Math.min(1,c+(h?1:-1)*y*2));let M=g(c),b=h?u:{x:a.ex,z:a.ez};if(Ne.x=b.x+(a.x-b.x)*M,Ne.z=b.z+(a.z-b.z)*M,Ne.vx=Ne.vz=0,h&&!m){let v=a.yaw-Ne.yaw;if(v=Math.atan2(Math.sin(v),Math.cos(v)),Ne.yaw+=v*Math.min(1,y*5),Math.abs(v)<0.03)m=!0}if(h&&c>0.7&&(Vi.KeyW||Vi.KeyA||Vi.KeyS||Vi.KeyD||Vi.ArrowUp||Vi.ArrowDown||Math.hypot(Ts.x,Ts.y)>0.35||$r>0.001))d();if(!h&&c<=0)a=null,l=null,x()})})();var Ne={x:-1.9,z:2.8,yaw:0,pitch:0,vx:0,vz:0},d1=1.65,uc=0.3,rb=[[-8.8,8.8,-3.85,3.85],[-3.9,4.3,-9.4,-3.85],[-12.4,-8.8,-5.45,7.7],[-12.4,-3.6,3.85,7.7],[-3.6,0.4,3.85,7.7],[Sa.x0,Sa.x1,7.7,Sa.z1]],sb=[[-3.62,4.02,-4.3,-3.4],[-11.3,-9.9,-5.8,-5.1],[-9.25,-8.35,-0.9,1.1],[-2.7,-1.1,3.5,4.2],[-2.7,-1.1,7.35,8.05],[-8.1,-6.9,7.35,8.05]];function ob(e,t){let i=e-rt.cx,n=t-rt.cz,r=rt.R*Math.cos(Math.PI/6)-uc;for(let s=0;s<6;s++){let o=Math.PI/6+s*Math.PI/3;if(i*Math.cos(o)+n*Math.sin(o)>r)return!1}return!0}function dc(e,t){for(let i of n1)if(e>i[0]&&e<i[1]&&t>i[2]&&t<i[3])return!1;for(let i of rb)if(e>i[0]+uc&&e<i[1]-uc&&t>i[2]+uc&&t<i[3]-uc)return!0;for(let i of sb)if(e>i[0]&&e<i[1]&&t>i[2]&&t<i[3])return!0;return ob(e,t)}var _n=[],Ut=(e,t,i,n,r)=>{let s=Math.max(1,Math.ceil(Math.hypot(i-e,n-t)/(r*0.9)));for(let o=0;o<=s;o++)_n.push([e+(i-e)*o/s,t+(n-t)*o/s,r])};Ut(-1.95,-4.6,-1.95,-6.9,0.35);Ut(2.35,-4.6,2.35,-6.9,0.35);Ut(-1.9,-4.6,2.3,-4.6,0.4);_n.push([0.2,-6.05,0.5]);Ut(8.25,-2.65,8.25,2.65,0.4);Ut(8.35,2.65,8.35,3.7,0.3);Ut(8.35,-3.7,8.35,-2.65,0.3);Ut(1.5,1.85,4.9,1.85,0.5);Ut(1.1,3.45,4.9,3.45,0.3);[4.5,3.65,2.8,1.95].forEach((e)=>_n.push([e,0.875,0.25]));Ut(-6.95,-1,-6.95,1,0.42);Ut(-5.75,-1,-5.75,1,0.42);Ut(-0.6,-0.15,-0.6,0.95,0.42);_n.push([-8.35,3.35,0.32],[-4.45,3.35,0.32],[-3.9,-3.85,0.3],[4.3,-3.85,0.3]);Ut(-8.3,-3.45,-5.5,-3.45,0.22);Ut(-3.55,-7.2,-3.55,-6,0.15);Ut(3.9,-7.2,3.9,-6,0.15);_n.push([rt.cx,rt.cz,2.15]);Ut(-11.95,-4.7,-11.95,2.3,0.12);Ut(-10.9,-3.6,-10.9,-1,0.25);Ut(-10.9,0.9,-10.9,3.5,0.25);Ut(-8.5,4.35,-4.1,4.35,0.55);Ut(-6.4,7.4,-4,7.4,0.3);Ut(-11.9,4.4,-11.9,7.4,0.5);Ut(0.15,5.1,0.15,6.9,0.3);_n.push([-3.3,4.2,0.3],[0.1,4.2,0.3]);eb();function p1(e,t){if(!dc(Ne.x,Ne.z))if(dc(Ne.x,t))Ne.z=t;else if(dc(e,Ne.z))Ne.x=e;else Ne.x=e,Ne.z=t;_n.forEach(([i,n,r])=>{let s=Ne.x-i,o=Ne.z-n,a=Math.hypot(s,o),l=r+0.28;if(a<l&&a>0.0001){let c=i+s/a*l,h=n+o/a*l;if(dc(c,h))Ne.x=c,Ne.z=h;else Ne.x=e,Ne.z=t}})}var Vi={},mr=!1,lf=!1,yc=!1,$r=0,mo=0,Ts={x:0,y:0};addEventListener("keydown",(e)=>{if(!mr||On.isOpen())return;if(Vi[e.code]=!0,e.code==="KeyE"||e.code==="Enter")pf();if(e.code==="Space"&&!e.repeat)yc=!0;if(e.code.startsWith("Arrow")||e.code==="Space")e.preventDefault()});addEventListener("keyup",(e)=>{Vi[e.code]=!1});var nd=er("#start"),cf=nd.querySelector(".go"),cY=cf?cf.textContent:"",m1=document.createElement("style");m1.textContent='#start[data-paused="1"] .keys,#start[data-paused="1"] p{display:none!important}#start[data-paused="1"] h1{opacity:.55}';document.head.appendChild(m1);function g1(){if(nd.classList.add("on"),nd.dataset.paused="1",cf)cf.textContent="POKRAČOVAT · KLIKNI"}function ab(){if(As||!Bn.requestPointerLock)return;try{let e=Bn.requestPointerLock();if(e&&e.catch)e.catch(()=>{})}catch(e){}setTimeout(()=>{if(mr&&!On.isOpen()&&document.pointerLockElement!==Bn)g1()},350)}document.addEventListener("pointerlockchange",()=>{if(lf=document.pointerLockElement===Bn,!lf&&mr&&!On.isOpen()&&!As)g1()});var Es={dx:0,dy:0};addEventListener("mousemove",(e)=>{if(!mr||On.isOpen())return;if(lf||hd){if(Math.abs(e.movementX)>240||Math.abs(e.movementY)>240)return;Es.dx+=e.movementX,Es.dy+=e.movementY}});var hd=!1;Bn.addEventListener("mousedown",()=>{if(hd=!0,lf&&Rt&&(Rt==="mon"||Rt.startsWith("st:")||Rt.startsWith("bg:")||Rt.startsWith("sc:")))return pf()});addEventListener("mouseup",()=>{hd=!1});function lb(){if(mr=!0,er("#start").classList.remove("on"),er("#hud").classList.add("on"),!As&&Bn.requestPointerLock)try{let e=Bn.requestPointerLock();if(e&&e.catch)e.catch(()=>{})}catch(e){}}er("#start").addEventListener("click",lb);On.setOnClose(()=>{Vi.KeyE=!1,ab()});if(As){let e=er("#joy"),t=er("#knob"),i=null,n=null,r=0,s=0,o=(h)=>{let u=e.getBoundingClientRect(),f=u.left+u.width/2,m=u.top+u.height/2,g=(h.clientX-f)/(u.width/2),x=(h.clientY-m)/(u.height/2),d=Math.hypot(g,x);if(d>1)g/=d,x/=d;Ts.x=g,Ts.y=x,t.style.transform=`translate(${g*34}px,${x*34}px)`};e.addEventListener("pointerdown",(h)=>{i=h.pointerId,e.setPointerCapture(i),o(h)}),e.addEventListener("pointermove",(h)=>{if(h.pointerId===i)o(h)});let a=(h)=>{if(h.pointerId===i)i=null,Ts.x=Ts.y=0,t.style.transform=""};e.addEventListener("pointerup",a),e.addEventListener("pointercancel",a),Bn.addEventListener("pointerdown",(h)=>{if(!mr||On.isOpen()||n!==null)return;n=h.pointerId,r=h.clientX,s=h.clientY,Bn.setPointerCapture(n)}),Bn.addEventListener("pointermove",(h)=>{if(h.pointerId!==n)return;Es.dx+=(h.clientX-r)*2.2,Es.dy+=(h.clientY-s)*2.2,r=h.clientX,s=h.clientY});let l=(h)=>{if(h.pointerId===n)n=null};Bn.addEventListener("pointerup",l),Bn.addEventListener("pointercancel",l),er("#act").addEventListener("click",()=>pf());let c=document.createElement("div");c.id="jmp",c.textContent="↑",c.style.cssText="position:fixed;right:40px;bottom:160px;width:72px;height:72px;border-radius:50%;border:2px solid #ffffff55;background:#ffffff14;color:#fff;font:700 30px Inter,Arial;display:none;place-items:center;z-index:9;touch-action:none;user-select:none",document.body.appendChild(c),c.addEventListener("pointerdown",(h)=>{h.preventDefault(),yc=!0}),window.__jmpBtn=c}var Kt=null,Rt=null,rd=new Hh;rd.far=26;var hc=er("#prompt"),$h=er("#sum");function fd(e){if(e===(Kt&&Kt.k))return;if(Kt=e?go.find((i)=>i.k===e):null,!Kt){hc.classList.remove("on"),$h.classList.remove("on");return}let t;try{t=e==="bag"?window.__bagSum():e==="sit"?window.__sitSum():e==="score"?window.__scoreSum():On.summary(e)}catch(i){t=e==="water"?{t:"PÍTKO",s:"Čerstvá voda · stiskni E",k:[["\uD83D\uDCA7","NAPÍT SE"]]}:{t:String(e).toUpperCase(),s:"",k:[]}}hc.querySelector(".tp").textContent=e==="water"?"NAPÍT SE":e==="bag"?window.__bagIsOpen()?"ZAVŘÍT BAG":"OTEVŘÍT BAG":e==="sit"?window.__sitting()?"VSTÁT":"SEDNOUT SI":e==="score"?"PŘIDAT BOD":"OTEVŘÍT",hc.querySelector("b").textContent=t.t,hc.style.setProperty("--c",Kt.c),$h.style.setProperty("--c",Kt.c),$h.innerHTML=`<h4>${t.t}</h4><p>${t.s}</p><div>${t.k.map((i)=>`<span><b>${i[0]}</b><i>${i[1]}</i></span>`).join("")}</div>`,hc.classList.add("on"),$h.classList.toggle("on",e!=="sit"&&e!=="score")}function pf(){if(On.isOpen())return;if(Rt&&(Rt.startsWith("bg:")||Rt==="st:bag")||!Rt&&Kt&&Kt.k==="bag")return window.__bagToggle();if(Rt&&Rt.startsWith("sc:"))return window.__score(Rt);if(!Rt&&Kt&&Kt.k==="sit")return window.__sitToggle();if(Rt==="st:water"||!Rt&&Kt&&Kt.k==="water")return window.__drink&&window.__drink();if(document.pointerLockElement)document.exitPointerLock();if(Rt==="mon"||Rt==="st:games")return On.open("games");if(Rt==="st:water"||!Rt&&Kt&&Kt.k==="water")return window.__drink&&window.__drink();if(Rt&&Rt.startsWith("st:"))return On.open(Rt.slice(3));if(Kt)On.open(Kt.k)}function k_(e){if(e===Rt)return;Rt=e,["pc","hp","kb","ms"].forEach((t)=>document.body.classList.toggle(t,t===e))}ti.traverse((e)=>{if(e.isPointLight)e.intensity*=0.56});var cb=new zh,Ku=0,ba=0,V_=/[?&]stats/.test(location.search),fc=null,Ju=0,ju=0,Qh=0,$u=0;function hb(e){if(!fc)fc=document.createElement("pre"),fc.style.cssText="position:fixed;left:8px;bottom:8px;z-index:99;margin:0;padding:8px 10px;background:rgba(0,0,0,.7);color:#7dffb0;font:12px/1.35 monospace;pointer-events:none;border-radius:8px",document.body.appendChild(fc),un.info.autoReset=!1;if(Ju+=e,ju++,Qh=Math.max(Qh,e),$u+=e,$u>0.5){let t=un.info;fc.textContent="FPS "+(ju/Ju).toFixed(0)+"   slowest "+(Qh*1000).toFixed(0)+` ms
calls `+t.render.calls+"   tris "+(t.render.triangles/1000).toFixed(0)+`k
geom `+t.memory.geometries+"   tex "+t.memory.textures+"   res x"+Ar+`
pos `+Ne.x.toFixed(1)+", "+Ne.z.toFixed(1),Ju=ju=Qh=$u=0}}var pc=0.016,x1=0,ef=0;function W_(){if(un.setPixelRatio(Ar),Rr)Rr.setPixelRatio(Ar);sd(),pc=0.02,x1=0}function fb(e){if(e>0.5)return;if(pc+=(e-pc)*0.08,++x1<45)return;let t=performance.now();if(t-ef<2500)return;if(pc>0.028&&Ar>0.75)Ar=Math.max(0.75,Ar-0.25),ef=t,W_();else if(pc<0.0185&&Ar<Qu&&t-ef>12000)Ar=Math.min(Qu,Ar+0.25),ef=t,W_()}function ud(){try{ub()}catch(e){console.error("frame",e),requestAnimationFrame(ud)}}function ub(){let e=cb.getDelta(),t=Math.min(e,0.1);if(Ku+=t,fb(e),window.__jmpBtn)window.__jmpBtn.style.display=mr&&!On.isOpen()?"grid":"none";let i=On.isOpen();if(mr&&!i){let s=1-Math.exp(-45*t),o=Es.dx*s,a=Es.dy*s;Es.dx-=o,Es.dy-=a,Ne.yaw-=o*0.0021,Ne.pitch=Math.max(-1.2,Math.min(1.2,Ne.pitch-a*0.0021));let l=(Vi.ArrowLeft?1:0)-(Vi.ArrowRight?1:0);Ne.yaw+=l*1.9*t;let c=(Vi.KeyW||Vi.ArrowUp?1:0)-(Vi.KeyS||Vi.ArrowDown?1:0)-Ts.y,h=(Vi.KeyD?1:0)-(Vi.KeyA?1:0)+Ts.x,u=Vi.ShiftLeft?5.2:3.2,f=(-Math.sin(Ne.yaw)*c+Math.cos(Ne.yaw)*h)*u,m=(-Math.cos(Ne.yaw)*c-Math.sin(Ne.yaw)*h)*u,g=Math.hypot(f,m);if(g>u)f*=u/g,m*=u/g;if(yc&&$r<=0.001)mo=4.2;yc=!1;let x=$r>0.001,d=Math.max(1,Math.ceil(t/0.016)),p=t/d;for(let y=0;y<d;y++){let M=1-Math.exp(-(x?3.5:11)*p);Ne.vx+=(f-Ne.vx)*M,Ne.vz+=(m-Ne.vz)*M;let{x:b,z:v}=Ne;if(Ne.x+=Ne.vx*p,Ne.z+=Ne.vz*p,p1(b,v),x||mo>0){if(mo-=11.5*p,$r+=mo*p,$r<=0)$r=0,mo=0}}}else yc=!1;if(ba+=(KS(Ne.x,Ne.z)-ba)*Math.min(1,t*12),!window.__camLock)Wi.position.set(Ne.x,d1+ba+$r+(window.__sitDY?window.__sitDY():0),Ne.z),Wi.rotation.order="YXZ",Wi.rotation.set(Ne.pitch,Ne.yaw,0);if(mr&&!i){rd.setFromCamera(new Z(0,0),Wi);let s=rd.intersectObjects(vc.flatMap((a)=>a.hits),!1),o=null;for(let a of s){let l=u1.get(a.object);if(l&&a.distance<=l.far){o=l.id;break}}k_(o)}else k_(null);let n=null,r=9;if(go.forEach((s)=>{let o=Math.hypot(Ne.x-s.x,Ne.z-s.z)/s.r;if(o<1&&o<r)r=o,n=s.k}),Rt&&Rt.startsWith("st:"))n=Rt.slice(3);else if(Rt&&Rt.startsWith("sc:"))n="score";else if(Rt==="mon")n="games";if(fd(n&&mr&&!i?n:i?Kt&&Kt.k:null),vc.forEach((s)=>{if(s.outline)s.mat.opacity=Rt===s.id?1:0}),go.forEach((s)=>{if(s.ring)s.ring.material.opacity=Kt&&Kt.k===s.k?0.95:0.35+0.15*Math.sin(Ku*2)}),_o.forEach((s)=>s(Ku)),V_)un.info.reset();if(Rr)Rr.render();else un.render(ti,Wi);if(V_)hb(e);requestAnimationFrame(ud)}requestAnimationFrame(ud);window.__scene=ti;window.__fun={go(e,t,i=0,n=0){Ne.x=e,Ne.z=t,Ne.yaw=i,Ne.pitch=n,Ne.vx=Ne.vz=0},pos(){return[Ne.x,Ne.z]},camY(){return Wi.position.y},scn:ti,cam:Wi,blocked(e,t){if(!dc(e,t))return!0;for(let[i,n,r]of _n)if(Math.hypot(e-i,t-n)<r+0.28)return!0;return!1},sim(e,t,i,n,r=400){Ne.x=e,Ne.z=t;for(let s=0;s<r;s++){let{x:o,z:a}=Ne;Ne.x+=Math.sign(i-Ne.x)*Math.min(0.05,Math.abs(i-Ne.x)),Ne.z+=Math.sign(n-Ne.z)*Math.min(0.05,Math.abs(n-Ne.z)),p1(o,a)}return[+Ne.x.toFixed(2),+Ne.z.toFixed(2)]},start(){mr=!0,er("#start").classList.remove("on"),er("#hud").classList.add("on")},interact:pf,view(e,t,i,n,r,s,o=68,a=!0){window.__camLock=!0,tn.visible=a,Wi.fov=o,Wi.updateProjectionMatrix(),Wi.position.set(e,t,i),Wi.up.set(0,1,0),Wi.lookAt(n,r,s)},free(){window.__camLock=!1,tn.visible=!0}};
