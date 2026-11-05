var Sy=Object.defineProperty;var by=(e)=>e;function Ty(e,t){this[e]=by.bind(null,t)}var Ey=(e,t)=>{for(var i in t)Sy(e,i,{get:t[i],enumerable:!0,configurable:!0,set:Ty.bind(t,i)})};var ds={};Ey(ds,{ArcCurve:()=>jf,CatmullRomCurve3:()=>Yn,CubicBezierCurve:()=>Nl,CubicBezierCurve3:()=>nu,EllipseCurve:()=>$s,LineCurve:()=>Fl,LineCurve3:()=>ru,QuadraticBezierCurve:()=>Ul,QuadraticBezierCurve3:()=>Bl,SplineCurve:()=>Ol});var Ta="187";var vd=0,gf=1,Sd=2;var po=1,bd=2,Is=3,yn=0,Kt=1,Nt=2,On=0,es=1,Ea=2,xf=3,_f=4,Td=5;var ts=100,Ed=101,wd=102,Ad=103,Rd=104,Cd=200,Pd=201,Id=202,Ld=203,bc=204,Tc=205,Dd=206,Nd=207,Fd=208,Ud=209,Bd=210,Od=211,Hd=212,Gd=213,zd=214,wa=0,Aa=1,Ra=2,is=3,Ca=4,Pa=5,Ia=6,La=7,Ls=0,kd=1,Vd=2,bn=0,mo=1,go=2,xo=3,ns=4,_o=5,yo=6,Mo=7,yf="attached",Wd="detached",Ec=300,Hn=301,Ir=302,Da=303,Na=304,un=1000,Ri=1001,rs=1002,Vt=1003,Fa=1004;var ss=1005;var Yt=1006,Ds=1007;var Bi=1008;var gi=1009,wc=1010,Ac=1011,Lr=1012,vo=1013,Ci=1014,di=1015,ni=1016,So=1017,bo=1018,tr=1020,Rc=35902,Cc=35899,Pc=1021,Ic=1022,Pi=1023,Mn=1026,Tn=1027,To=1028,Ns=1029,En=1030,Eo=1031;var wo=1033,Ao=33776,Ro=33777,Co=33778,Po=33779,Ua=35840,Ba=35841,Oa=35842,Ha=35843,Ga=36196,za=37492,ka=37496,Va=37488,Wa=37489,Fs=37490,Xa=37491,Ya=37808,qa=37809,Za=37810,Ka=37811,Ja=37812,ja=37813,$a=37814,Qa=37815,el=37816,tl=37817,il=37818,nl=37819,rl=37820,sl=37821,ol=36492,al=36494,ll=36495,cl=36283,hl=36284,Us=36285,fl=36286;var Dr=2300,Bs=2301,Lc=2302,Mf=2303,Dc=2400,Nc=2401,Fc=2402,Uc=2500;var Xd=0,Bc=1,ul=2,Yd=3200;var ir=0,qd=1,Gn="",yt="srgb",Xi="srgb-linear",Os="linear",St="srgb";var Oc=7680;var Zd=519,Kd=512,Jd=513,jd=514,Hc=515,$d=516,Qd=517,Gc=518,zc=519,dl=35044;var vf="300 es",Oi=2000,dr=2001;function tp(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function Sf(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function os(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function bf(){let e=os("canvas");return e.style.display="block",e}var ep={},Io=null;function Hs(...e){let t="THREE."+e.shift();if(Io)Io("log",t,...e);else console.log(t,...e)}function ip(e){let t=e[0];if(typeof t==="string"&&t.startsWith("TSL:")){let i=e[1];if(i&&i.isStackTrace)e[0]+=" "+i.getLocation();else e[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return e}function be(...e){e=ip(e);let t="THREE."+e.shift();if(Io)Io("warn",t,...e);else{let i=e[0];if(i&&i.isStackTrace)console.warn(i.getError(t));else console.warn(t,...e)}}function We(...e){e=ip(e);let t="THREE."+e.shift();if(Io)Io("error",t,...e);else{let i=e[0];if(i&&i.isStackTrace)console.error(i.getError(t));else console.error(t,...e)}}function zn(...e){let t=e.join(" ");if(t in ep)return;ep[t]=!0,be(...e)}function np(e,t,i){return new Promise(function(n,r){function s(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:r();break;case e.TIMEOUT_EXPIRED:setTimeout(s,i);break;default:n()}}setTimeout(s,i)})}var rp={[wa]:wa,[Ra]:Ia,[Ca]:Ca,[is]:Pa,[Aa]:Aa,[Ia]:Ra,[La]:La,[Pa]:is};class Ii{addEventListener(e,t){if(this._listeners===void 0)this._listeners={};let i=this._listeners;if(i[e]===void 0)i[e]=[];if(i[e].indexOf(t)===-1)i[e].push(t)}hasEventListener(e,t){let i=this._listeners;if(i===void 0)return!1;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let n=i[e];if(n!==void 0){let r=n.indexOf(t);if(r!==-1)n.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let n=i.slice(0);for(let r=0,s=n.length;r<s;r++)n[r].call(this,e);e.target=null}}}var rn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],sp=1234567,Nr=Math.PI/180,Fr=180/Math.PI;function xi(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(rn[e&255]+rn[e>>8&255]+rn[e>>16&255]+rn[e>>24&255]+"-"+rn[t&255]+rn[t>>8&255]+"-"+rn[t>>16&15|64]+rn[t>>24&255]+"-"+rn[i&63|128]+rn[i>>8&255]+"-"+rn[i>>16&255]+rn[i>>24&255]+rn[n&255]+rn[n>>8&255]+rn[n>>16&255]+rn[n>>24&255]).toLowerCase()}function lt(e,t,i){return Math.max(t,Math.min(i,e))}function kc(e,t){return(e%t+t)%t}function wy(e,t,i,n,r){return n+(e-t)*(r-n)/(i-t)}function Ay(e,t,i){if(e!==t)return(i-e)/(t-e);else return 0}function Lo(e,t,i){return(1-i)*e+i*t}function Ry(e,t,i,n){return Lo(e,t,1-Math.exp(-i*n))}function Cy(e,t=1){return t-Math.abs(kc(e,t*2)-t)}function Py(e,t,i){if(e<=t)return 0;if(e>=i)return 1;return e=(e-t)/(i-t),e*e*(3-2*e)}function Iy(e,t,i){if(e<=t)return 0;if(e>=i)return 1;return e=(e-t)/(i-t),e*e*e*(e*(e*6-15)+10)}function Ly(e,t){return e+Math.floor(Math.random()*(t-e+1))}function Dy(e,t){return e+Math.random()*(t-e)}function Ny(e){return e*(0.5-Math.random())}function Fy(e){if(e!==void 0)sp=e;let t=sp+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Uy(e){return e*Nr}function By(e){return e*Fr}function Oy(e){return e>0&&Number.isInteger(e)&&2**Math.round(Math.log2(e))===e}function Hy(e){return Math.pow(2,Math.ceil(Math.log(e)/Math.LN2))}function Tf(e){return Math.pow(2,Math.floor(Math.log(e)/Math.LN2))}function Gy(e,t,i,n,r){let{cos:s,sin:o}=Math,a=s(i/2),l=o(i/2),c=s((t+n)/2),h=o((t+n)/2),u=s((t-n)/2),f=o((t-n)/2),m=s((n-t)/2),g=o((n-t)/2);switch(r){case"XYX":e.set(a*h,l*u,l*f,a*c);break;case"YZY":e.set(l*f,a*h,l*u,a*c);break;case"ZXZ":e.set(l*u,l*f,a*h,a*c);break;case"XZX":e.set(a*h,l*g,l*m,a*c);break;case"YXY":e.set(l*m,a*h,l*g,a*c);break;case"ZYZ":e.set(l*g,l*m,a*h,a*c);break;default:be("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Do(e){switch(e.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function pl(e,t){if(t.constructor===Float32Array)return e;let i=Do(t);if(i===void 0)throw Error("THREE.MathUtils: Invalid component type.");return Math.max(e/i,-1)}function ml(e,t){if(t.constructor===Float32Array)return e;let i=Do(t);if(i===void 0)throw Error("THREE.MathUtils: Invalid component type.");return Math.round(e*i)}var Vc={DEG2RAD:Nr,RAD2DEG:Fr,generateUUID:xi,clamp:lt,euclideanModulo:kc,mapLinear:wy,inverseLerp:Ay,lerp:Lo,damp:Ry,pingpong:Cy,smoothstep:Py,smootherstep:Iy,randInt:Ly,randFloat:Dy,randFloatSpread:Ny,seededRandom:Fy,degToRad:Uy,radToDeg:By,isPowerOfTwo:Oy,ceilPowerOfTwo:Hy,floorPowerOfTwo:Tf,setQuaternionFromProperEuler:Gy,normalize:ml,denormalize:pl};class X{static{this.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,n=e.elements;return this.x=n[0]*t+n[3]*i+n[6],this.y=n[1]*t+n[4]*i+n[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=lt(this.x,e.x,t.x),this.y=lt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=lt(this.x,e,t),this.y=lt(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(lt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(lt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),n=Math.sin(t),r=this.x-e.x,s=this.y-e.y;return this.x=r*i-s*n+e.x,this.y=r*n+s*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ri{constructor(e=0,t=0,i=0,n=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=n}static slerpFlat(e,t,i,n,r,s,o){let a=i[n+0],l=i[n+1],c=i[n+2],h=i[n+3],u=r[s+0],f=r[s+1],m=r[s+2],g=r[s+3];if(h!==g||a!==u||l!==f||c!==m){let x=a*u+l*f+c*m+h*g;if(x<0)u=-u,f=-f,m=-m,g=-g,x=-x;let d=1-o;if(x<0.9995){let p=Math.acos(x),_=Math.sin(p);d=Math.sin(d*p)/_,o=Math.sin(o*p)/_,a=a*d+u*o,l=l*d+f*o,c=c*d+m*o,h=h*d+g*o}else{a=a*d+u*o,l=l*d+f*o,c=c*d+m*o,h=h*d+g*o;let p=1/Math.sqrt(a*a+l*l+c*c+h*h);a*=p,l*=p,c*=p,h*=p}}e[t]=a,e[t+1]=l,e[t+2]=c,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,n,r,s){let o=i[n],a=i[n+1],l=i[n+2],c=i[n+3],h=r[s],u=r[s+1],f=r[s+2],m=r[s+3];return e[t]=o*m+c*h+a*f-l*u,e[t+1]=a*m+c*u+l*h-o*f,e[t+2]=l*m+c*f+o*u-a*h,e[t+3]=c*m-o*h-a*u-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,n){return this._x=e,this._y=t,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let{_x:i,_y:n,_z:r,_order:s}=e,{cos:o,sin:a}=Math,l=o(i/2),c=o(n/2),h=o(r/2),u=a(i/2),f=a(n/2),m=a(r/2);switch(s){case"XYZ":this._x=u*c*h+l*f*m,this._y=l*f*h-u*c*m,this._z=l*c*m+u*f*h,this._w=l*c*h-u*f*m;break;case"YXZ":this._x=u*c*h+l*f*m,this._y=l*f*h-u*c*m,this._z=l*c*m-u*f*h,this._w=l*c*h+u*f*m;break;case"ZXY":this._x=u*c*h-l*f*m,this._y=l*f*h+u*c*m,this._z=l*c*m+u*f*h,this._w=l*c*h-u*f*m;break;case"ZYX":this._x=u*c*h-l*f*m,this._y=l*f*h+u*c*m,this._z=l*c*m-u*f*h,this._w=l*c*h+u*f*m;break;case"YZX":this._x=u*c*h+l*f*m,this._y=l*f*h+u*c*m,this._z=l*c*m-u*f*h,this._w=l*c*h-u*f*m;break;case"XZY":this._x=u*c*h-l*f*m,this._y=l*f*h-u*c*m,this._z=l*c*m+u*f*h,this._w=l*c*h+u*f*m;break;default:be("Quaternion: .setFromEuler() encountered an unknown order: "+s)}if(t===!0)this._onChangeCallback();return this}setFromAxisAngle(e,t){let i=t/2,n=Math.sin(i);return this._x=e.x*n,this._y=e.y*n,this._z=e.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],n=t[4],r=t[8],s=t[1],o=t[5],a=t[9],l=t[2],c=t[6],h=t[10],u=i+o+h;if(u>0){let f=0.5/Math.sqrt(u+1);this._w=0.25/f,this._x=(c-a)*f,this._y=(r-l)*f,this._z=(s-n)*f}else if(i>o&&i>h){let f=2*Math.sqrt(1+i-o-h);this._w=(c-a)/f,this._x=0.25*f,this._y=(n+s)/f,this._z=(r+l)/f}else if(o>h){let f=2*Math.sqrt(1+o-i-h);this._w=(r-l)/f,this._x=(n+s)/f,this._y=0.25*f,this._z=(a+c)/f}else{let f=2*Math.sqrt(1+h-i-o);this._w=(s-n)/f,this._x=(r+l)/f,this._y=(a+c)/f,this._z=0.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;if(i<0.00000001)if(i=0,Math.abs(e.x)>Math.abs(e.z))this._x=-e.y,this._y=e.x,this._z=0,this._w=i;else this._x=0,this._y=-e.z,this._z=e.y,this._w=i;else this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i;return this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(lt(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let n=Math.min(1,t/i);return this.slerp(e,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();if(e===0)this._x=0,this._y=0,this._z=0,this._w=1;else e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e;return this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let{_x:i,_y:n,_z:r,_w:s}=e,{_x:o,_y:a,_z:l,_w:c}=t;return this._x=i*c+s*o+n*l-r*a,this._y=n*c+s*a+r*o-i*l,this._z=r*c+s*l+i*a-n*o,this._w=s*c-i*o-n*a-r*l,this._onChangeCallback(),this}slerp(e,t){let{_x:i,_y:n,_z:r,_w:s}=e,o=this.dot(e);if(o<0)i=-i,n=-n,r=-r,s=-s,o=-o;let a=1-t;if(o<0.9995){let l=Math.acos(o),c=Math.sin(l);a=Math.sin(a*l)/c,t=Math.sin(t*l)/c,this._x=this._x*a+i*t,this._y=this._y*a+n*t,this._z=this._z*a+r*t,this._w=this._w*a+s*t,this._onChangeCallback()}else this._x=this._x*a+i*t,this._y=this._y*a+n*t,this._z=this._z*a+r*t,this._w=this._w*a+s*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),n=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(n*Math.sin(e),n*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class A{static{this.prototype.isVector3=!0}constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){if(i===void 0)i=this.z;return this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(op.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(op.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,n=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*n,this.y=r[1]*t+r[4]*i+r[7]*n,this.z=r[2]*t+r[5]*i+r[8]*n,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,n=this.z,r=e.elements,s=1/(r[3]*t+r[7]*i+r[11]*n+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*n+r[12])*s,this.y=(r[1]*t+r[5]*i+r[9]*n+r[13])*s,this.z=(r[2]*t+r[6]*i+r[10]*n+r[14])*s,this}applyQuaternion(e){let t=this.x,i=this.y,n=this.z,{x:r,y:s,z:o,w:a}=e,l=2*(s*n-o*i),c=2*(o*t-r*n),h=2*(r*i-s*t);return this.x=t+a*l+s*h-o*c,this.y=i+a*c+o*l-r*h,this.z=n+a*h+r*c-s*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,n=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*n,this.y=r[1]*t+r[5]*i+r[9]*n,this.z=r[2]*t+r[6]*i+r[10]*n,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=lt(this.x,e.x,t.x),this.y=lt(this.y,e.y,t.y),this.z=lt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=lt(this.x,e,t),this.y=lt(this.y,e,t),this.z=lt(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(lt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let{x:i,y:n,z:r}=e,{x:s,y:o,z:a}=t;return this.x=n*a-r*o,this.y=r*s-i*a,this.z=i*o-n*s,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ef.copy(this).projectOnVector(e),this.sub(Ef)}reflect(e){return this.sub(Ef.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(lt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,n=this.z-e.z;return t*t+i*i+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let n=Math.sin(t)*e;return this.x=n*Math.sin(i),this.y=Math.cos(t)*e,this.z=n*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),n=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=n,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}var Ef=new A,op=new ri;class st{static{this.prototype.isMatrix3=!0}constructor(e,t,i,n,r,s,o,a,l){if(this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0)this.set(e,t,i,n,r,s,o,a,l)}set(e,t,i,n,r,s,o,a,l){let c=this.elements;return c[0]=e,c[1]=n,c[2]=o,c[3]=t,c[4]=r,c[5]=a,c[6]=i,c[7]=s,c[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,n=t.elements,r=this.elements,s=i[0],o=i[3],a=i[6],l=i[1],c=i[4],h=i[7],u=i[2],f=i[5],m=i[8],g=n[0],x=n[3],d=n[6],p=n[1],_=n[4],y=n[7],v=n[2],T=n[5],w=n[8];return r[0]=s*g+o*p+a*v,r[3]=s*x+o*_+a*T,r[6]=s*d+o*y+a*w,r[1]=l*g+c*p+h*v,r[4]=l*x+c*_+h*T,r[7]=l*d+c*y+h*w,r[2]=u*g+f*p+m*v,r[5]=u*x+f*_+m*T,r[8]=u*d+f*y+m*w,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],n=e[2],r=e[3],s=e[4],o=e[5],a=e[6],l=e[7],c=e[8];return t*s*c-t*o*l-i*r*c+i*o*a+n*r*l-n*s*a}invert(){let e=this.elements,t=e[0],i=e[1],n=e[2],r=e[3],s=e[4],o=e[5],a=e[6],l=e[7],c=e[8],h=c*s-o*l,u=o*a-c*r,f=l*r-s*a,m=t*h+i*u+n*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let g=1/m;return e[0]=h*g,e[1]=(n*l-c*i)*g,e[2]=(o*i-n*s)*g,e[3]=u*g,e[4]=(c*t-n*a)*g,e[5]=(n*r-o*t)*g,e[6]=f*g,e[7]=(i*a-l*t)*g,e[8]=(s*t-i*r)*g,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,n,r,s,o){let a=Math.cos(r),l=Math.sin(r);return this.set(i*a,i*l,-i*(a*s+l*o)+s+e,-n*l,n*a,-n*(-l*s+a*o)+o+t,0,0,1),this}scale(e,t){return zn("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(wf.makeScale(e,t)),this}rotate(e){return zn("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(wf.makeRotation(-e)),this}translate(e,t){return zn("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(wf.makeTranslation(e,t)),this}makeTranslation(e,t){if(e.isVector2)this.set(1,0,e.x,0,1,e.y,0,0,1);else this.set(1,0,e,0,1,t,0,0,1);return this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let n=0;n<9;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}var wf=new st;var ap=new st().set(0.4123908,0.3575843,0.1804808,0.212639,0.7151687,0.0721923,0.0193308,0.1191948,0.9505322),lp=new st().set(3.2409699,-1.5373832,-0.4986108,-0.9692436,1.8759675,0.0415551,0.0556301,-0.203977,1.0569715);function zy(){let e={enabled:!0,workingColorSpace:Xi,spaces:{},convert:function(r,s,o){if(this.enabled===!1||s===o||!s||!o)return r;if(this.spaces[s].transfer===St)r.r=nr(r.r),r.g=nr(r.g),r.b=nr(r.b);if(this.spaces[s].primaries!==this.spaces[o].primaries)r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ);if(this.spaces[o].transfer===St)r.r=Gs(r.r),r.g=Gs(r.g),r.b=Gs(r.b);return r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){if(r===Gn)return Os;return this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[o].fromXYZ).multiply(this.spaces[s].toXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}},t=[0.64,0.33,0.3,0.6,0.15,0.06],i=[0.2126,0.7152,0.0722],n=[0.3127,0.329];return e.define({[Xi]:{primaries:t,whitePoint:n,transfer:Os,toXYZ:ap,fromXYZ:lp,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:yt},outputColorSpaceConfig:{drawingBufferColorSpace:yt}},[yt]:{primaries:t,whitePoint:n,transfer:St,toXYZ:ap,fromXYZ:lp,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:yt}}}),e}var ht=zy();function nr(e){return e<0.04045?e*0.0773993808:Math.pow(e*0.9478672986+0.0521327014,2.4)}function Gs(e){return e<0.0031308?e*12.92:1.055*Math.pow(e,0.41666)-0.055}var No;class Wc{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src))return e.src;if(typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{if(No===void 0)No=os("canvas");No.width=e.width,No.height=e.height;let n=No.getContext("2d");if(e instanceof ImageData)n.putImageData(e,0,0);else n.drawImage(e,0,0,e.width,e.height);i=No}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=os("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let n=i.getImageData(0,0,e.width,e.height),r=n.data;for(let s=0;s<r.length;s++)r[s]=nr(r[s]/255)*255;return i.putImageData(n,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)if(t instanceof Uint8Array||t instanceof Uint8ClampedArray)t[i]=Math.floor(nr(t[i]/255)*255);else t[i]=nr(t[i]);return{data:t,width:e.width,height:e.height}}else return be("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}var ky=0;class pr{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:ky++}),this.uuid=xi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;if(typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement)e.set(t.videoWidth,t.videoHeight,0);else if(typeof VideoFrame<"u"&&t instanceof VideoFrame)e.set(t.displayWidth,t.displayHeight,0);else if(t!==null)e.set(t.width||0,t.height||0,t.depth||0);else e.set(0,0,0);return e}set needsUpdate(e){if(e===!0)this.version++}toJSON(e){let t=e===void 0||typeof e==="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let r;if(Array.isArray(n)){r=[];for(let s=0,o=n.length;s<o;s++)if(n[s].isDataTexture)r.push(Af(n[s].image));else r.push(Af(n[s]))}else r=Af(n);i.url=r}if(!t)e.images[this.uuid]=i;return i}}function Af(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap)return Wc.getDataURL(e);else if(e.data)return{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name};else return be("Texture: Unable to serialize Texture."),{}}var Vy=0,Rf=new A;class Ct extends Ii{constructor(e=Ct.DEFAULT_IMAGE,t=Ct.DEFAULT_MAPPING,i=Ri,n=Ri,r=Yt,s=Bi,o=Pi,a=gi,l=Ct.DEFAULT_ANISOTROPY,c=Gn){super();this.isTexture=!0,Object.defineProperty(this,"id",{value:Vy++}),this.uuid=xi(),this.name="",this.source=new pr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=r,this.minFilter=s,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=a,this.offset=new X(0,0),this.repeat=new X(1,1),this.center=new X(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new st,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=e&&e.depth&&e.depth>1?!0:!1,this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Rf).x}get height(){return this.source.getSize(Rf).y}get depth(){return this.source.getSize(Rf).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){be(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let n=this[t];if(n===void 0){be(`Texture.setValues(): property '${t}' does not exist.`);continue}if(n&&i&&(n.isVector2&&i.isVector2))n.copy(i);else if(n&&i&&(n.isVector3&&i.isVector3))n.copy(i);else if(n&&i&&(n.isMatrix3&&i.isMatrix3))n.copy(i);else this[t]=i}}toJSON(e){let t=e===void 0||typeof e==="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(Object.keys(this.userData).length>0)i.userData=this.userData;if(!t)e.textures[this.uuid]=i;return i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ec)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case un:e.x=e.x-Math.floor(e.x);break;case Ri:e.x=e.x<0?0:1;break;case rs:if(Math.abs(Math.floor(e.x)%2)===1)e.x=Math.ceil(e.x)-e.x;else e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case un:e.y=e.y-Math.floor(e.y);break;case Ri:e.y=e.y<0?0:1;break;case rs:if(Math.abs(Math.floor(e.y)%2)===1)e.y=Math.ceil(e.y)-e.y;else e.y=e.y-Math.floor(e.y);break}if(this.flipY)e.y=1-e.y;return e}set needsUpdate(e){if(e===!0)this.version++,this.source.needsUpdate=!0}set needsPMREMUpdate(e){if(e===!0)this.pmremVersion++}}Ct.DEFAULT_IMAGE=null;Ct.DEFAULT_MAPPING=Ec;Ct.DEFAULT_ANISOTROPY=1;class bt{static{this.prototype.isVector4=!0}constructor(e=0,t=0,i=0,n=1){this.x=e,this.y=t,this.z=i,this.w=n}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,n){return this.x=e,this.y=t,this.z=i,this.w=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,n=this.z,r=this.w,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*n+s[12]*r,this.y=s[1]*t+s[5]*i+s[9]*n+s[13]*r,this.z=s[2]*t+s[6]*i+s[10]*n+s[14]*r,this.w=s[3]*t+s[7]*i+s[11]*n+s[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);if(t<0.0001)this.x=1,this.y=0,this.z=0;else this.x=e.x/t,this.y=e.y/t,this.z=e.z/t;return this}setAxisAngleFromRotationMatrix(e){let t,i,n,r,s=0.01,o=0.1,a=e.elements,l=a[0],c=a[4],h=a[8],u=a[1],f=a[5],m=a[9],g=a[2],x=a[6],d=a[10];if(Math.abs(c-u)<0.01&&Math.abs(h-g)<0.01&&Math.abs(m-x)<0.01){if(Math.abs(c+u)<0.1&&Math.abs(h+g)<0.1&&Math.abs(m+x)<0.1&&Math.abs(l+f+d-3)<0.1)return this.set(1,0,0,0),this;t=Math.PI;let _=(l+1)/2,y=(f+1)/2,v=(d+1)/2,T=(c+u)/4,w=(h+g)/4,M=(m+x)/4;if(_>y&&_>v)if(_<0.01)i=0,n=0.707106781,r=0.707106781;else i=Math.sqrt(_),n=T/i,r=w/i;else if(y>v)if(y<0.01)i=0.707106781,n=0,r=0.707106781;else n=Math.sqrt(y),i=T/n,r=M/n;else if(v<0.01)i=0.707106781,n=0.707106781,r=0;else r=Math.sqrt(v),i=w/r,n=M/r;return this.set(i,n,r,t),this}let p=Math.sqrt((x-m)*(x-m)+(h-g)*(h-g)+(u-c)*(u-c));if(Math.abs(p)<0.001)p=1;return this.x=(x-m)/p,this.y=(h-g)/p,this.z=(u-c)/p,this.w=Math.acos((l+f+d-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=lt(this.x,e.x,t.x),this.y=lt(this.y,e.y,t.y),this.z=lt(this.z,e.z,t.z),this.w=lt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=lt(this.x,e,t),this.y=lt(this.y,e,t),this.z=lt(this.z,e,t),this.w=lt(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(lt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class gl extends Ii{constructor(e=1,t=1,i={}){super();i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Yt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new bt(0,0,e,t),this.scissorTest=!1,this.viewport=new bt(0,0,e,t),this.textures=[];let n=i.count;for(let r=0;r<n;r++)this.textures[r]=new Ct({width:e,height:t,depth:i.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Yt,generateMipmaps:!1,flipY:!1,internalFormat:null};if(e.mapping!==void 0)t.mapping=e.mapping;if(e.wrapS!==void 0)t.wrapS=e.wrapS;if(e.wrapT!==void 0)t.wrapT=e.wrapT;if(e.wrapR!==void 0)t.wrapR=e.wrapR;if(e.magFilter!==void 0)t.magFilter=e.magFilter;if(e.minFilter!==void 0)t.minFilter=e.minFilter;if(e.format!==void 0)t.format=e.format;if(e.type!==void 0)t.type=e.type;if(e.anisotropy!==void 0)t.anisotropy=e.anisotropy;if(e.colorSpace!==void 0)t.colorSpace=e.colorSpace;if(e.flipY!==void 0)t.flipY=e.flipY;if(e.generateMipmaps!==void 0)t.generateMipmaps=e.generateMipmaps;if(e.mipmapsAutoUpdate!==void 0)t.mipmapsAutoUpdate=e.mipmapsAutoUpdate;if(e.internalFormat!==void 0)t.internalFormat=e.internalFormat;for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){if(this._depthTexture!==null&&this._depthTexture.renderTarget===this)this._depthTexture.renderTarget=null;if(e!==null&&e.renderTarget===null)e.renderTarget=this;this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let n=0,r=this.textures.length;n<r;n++)if(this.textures[n].image.width=e,this.textures[n].image.height=t,this.textures[n].image.depth=i,this.textures[n].isData3DTexture!==!0)this.textures[n].isArrayTexture=this.textures[n].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new pr(n)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ei extends gl{constructor(e=1,t=1,i={}){super(e,t,i);this.isWebGLRenderTarget=!0}}class zs extends Ct{constructor(e=null,t=1,i=1,n=1){super(null);this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=Vt,this.minFilter=Vt,this.wrapR=Ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Fo extends Ct{constructor(e=null,t=1,i=1,n=1){super(null);this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=Vt,this.minFilter=Vt,this.wrapR=Ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}class Be{static{this.prototype.isMatrix4=!0}constructor(e,t,i,n,r,s,o,a,l,c,h,u,f,m,g,x){if(this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0)this.set(e,t,i,n,r,s,o,a,l,c,h,u,f,m,g,x)}set(e,t,i,n,r,s,o,a,l,c,h,u,f,m,g,x){let d=this.elements;return d[0]=e,d[4]=t,d[8]=i,d[12]=n,d[1]=r,d[5]=s,d[9]=o,d[13]=a,d[2]=l,d[6]=c,d[10]=h,d[14]=u,d[3]=f,d[7]=m,d[11]=g,d[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Be().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){if(this.determinantAffine()===0)return e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this;return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,i=e.elements,n=1/Uo.setFromMatrixColumn(e,0).length(),r=1/Uo.setFromMatrixColumn(e,1).length(),s=1/Uo.setFromMatrixColumn(e,2).length();return t[0]=i[0]*n,t[1]=i[1]*n,t[2]=i[2]*n,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*s,t[9]=i[9]*s,t[10]=i[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,{x:i,y:n,z:r}=e,s=Math.cos(i),o=Math.sin(i),a=Math.cos(n),l=Math.sin(n),c=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){let u=s*c,f=s*h,m=o*c,g=o*h;t[0]=a*c,t[4]=-a*h,t[8]=l,t[1]=f+m*l,t[5]=u-g*l,t[9]=-o*a,t[2]=g-u*l,t[6]=m+f*l,t[10]=s*a}else if(e.order==="YXZ"){let u=a*c,f=a*h,m=l*c,g=l*h;t[0]=u+g*o,t[4]=m*o-f,t[8]=s*l,t[1]=s*h,t[5]=s*c,t[9]=-o,t[2]=f*o-m,t[6]=g+u*o,t[10]=s*a}else if(e.order==="ZXY"){let u=a*c,f=a*h,m=l*c,g=l*h;t[0]=u-g*o,t[4]=-s*h,t[8]=m+f*o,t[1]=f+m*o,t[5]=s*c,t[9]=g-u*o,t[2]=-s*l,t[6]=o,t[10]=s*a}else if(e.order==="ZYX"){let u=s*c,f=s*h,m=o*c,g=o*h;t[0]=a*c,t[4]=m*l-f,t[8]=u*l+g,t[1]=a*h,t[5]=g*l+u,t[9]=f*l-m,t[2]=-l,t[6]=o*a,t[10]=s*a}else if(e.order==="YZX"){let u=s*a,f=s*l,m=o*a,g=o*l;t[0]=a*c,t[4]=g-u*h,t[8]=m*h+f,t[1]=h,t[5]=s*c,t[9]=-o*c,t[2]=-l*c,t[6]=f*h+m,t[10]=u-g*h}else if(e.order==="XZY"){let u=s*a,f=s*l,m=o*a,g=o*l;t[0]=a*c,t[4]=-h,t[8]=l*c,t[1]=u*h+g,t[5]=s*c,t[9]=f*h-m,t[2]=m*h-f,t[6]=o*c,t[10]=g*h+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Wy,e,Xy)}lookAt(e,t,i){let n=this.elements;if(wn.subVectors(e,t),wn.lengthSq()===0)wn.z=1;if(wn.normalize(),as.crossVectors(i,wn),as.lengthSq()===0){if(Math.abs(i.z)===1)wn.x+=0.0001;else wn.z+=0.0001;wn.normalize(),as.crossVectors(i,wn)}return as.normalize(),Xc.crossVectors(wn,as),n[0]=as.x,n[4]=Xc.x,n[8]=wn.x,n[1]=as.y,n[5]=Xc.y,n[9]=wn.y,n[2]=as.z,n[6]=Xc.z,n[10]=wn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,n=t.elements,r=this.elements,s=i[0],o=i[4],a=i[8],l=i[12],c=i[1],h=i[5],u=i[9],f=i[13],m=i[2],g=i[6],x=i[10],d=i[14],p=i[3],_=i[7],y=i[11],v=i[15],T=n[0],w=n[4],M=n[8],b=n[12],C=n[1],F=n[5],D=n[9],V=n[13],ee=n[2],I=n[6],J=n[10],L=n[14],N=n[3],j=n[7],z=n[11],H=n[15];return r[0]=s*T+o*C+a*ee+l*N,r[4]=s*w+o*F+a*I+l*j,r[8]=s*M+o*D+a*J+l*z,r[12]=s*b+o*V+a*L+l*H,r[1]=c*T+h*C+u*ee+f*N,r[5]=c*w+h*F+u*I+f*j,r[9]=c*M+h*D+u*J+f*z,r[13]=c*b+h*V+u*L+f*H,r[2]=m*T+g*C+x*ee+d*N,r[6]=m*w+g*F+x*I+d*j,r[10]=m*M+g*D+x*J+d*z,r[14]=m*b+g*V+x*L+d*H,r[3]=p*T+_*C+y*ee+v*N,r[7]=p*w+_*F+y*I+v*j,r[11]=p*M+_*D+y*J+v*z,r[15]=p*b+_*V+y*L+v*H,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],n=e[8],r=e[12],s=e[1],o=e[5],a=e[9],l=e[13],c=e[2],h=e[6],u=e[10],f=e[14],m=e[3],g=e[7],x=e[11],d=e[15],p=a*f-l*u,_=o*f-l*h,y=o*u-a*h,v=s*f-l*c,T=s*u-a*c,w=s*h-o*c;return t*(g*p-x*_+d*y)-i*(m*p-x*v+d*T)+n*(m*_-g*v+d*w)-r*(m*y-g*T+x*w)}determinantAffine(){let e=this.elements,t=e[0],i=e[4],n=e[8],r=e[1],s=e[5],o=e[9],a=e[2],l=e[6],c=e[10];return t*(s*c-o*l)-i*(r*c-o*a)+n*(r*l-s*a)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let n=this.elements;if(e.isVector3)n[12]=e.x,n[13]=e.y,n[14]=e.z;else n[12]=e,n[13]=t,n[14]=i;return this}invert(){let e=this.elements,t=e[0],i=e[1],n=e[2],r=e[3],s=e[4],o=e[5],a=e[6],l=e[7],c=e[8],h=e[9],u=e[10],f=e[11],m=e[12],g=e[13],x=e[14],d=e[15],p=t*o-i*s,_=t*a-n*s,y=t*l-r*s,v=i*a-n*o,T=i*l-r*o,w=n*l-r*a,M=c*g-h*m,b=c*x-u*m,C=c*d-f*m,F=h*x-u*g,D=h*d-f*g,V=u*d-f*x,ee=p*V-_*D+y*F+v*C-T*b+w*M;if(ee===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let I=1/ee;return e[0]=(o*V-a*D+l*F)*I,e[1]=(n*D-i*V-r*F)*I,e[2]=(g*w-x*T+d*v)*I,e[3]=(u*T-h*w-f*v)*I,e[4]=(a*C-s*V-l*b)*I,e[5]=(t*V-n*C+r*b)*I,e[6]=(x*y-m*w-d*_)*I,e[7]=(c*w-u*y+f*_)*I,e[8]=(s*D-o*C+l*M)*I,e[9]=(i*C-t*D-r*M)*I,e[10]=(m*T-g*y+d*p)*I,e[11]=(h*y-c*T-f*p)*I,e[12]=(o*b-s*F-a*M)*I,e[13]=(t*F-i*b+n*M)*I,e[14]=(g*_-m*v-x*p)*I,e[15]=(c*v-h*_+u*p)*I,this}scale(e){let t=this.elements,{x:i,y:n,z:r}=e;return t[0]*=i,t[4]*=n,t[8]*=r,t[1]*=i,t[5]*=n,t[9]*=r,t[2]*=i,t[6]*=n,t[10]*=r,t[3]*=i,t[7]*=n,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],n=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,n))}makeTranslation(e,t,i){if(e.isVector3)this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1);else this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1);return this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),n=Math.sin(t),r=1-i,{x:s,y:o,z:a}=e,l=r*s,c=r*o;return this.set(l*s+i,l*o-n*a,l*a+n*o,0,l*o+n*a,c*o+i,c*a-n*s,0,l*a-n*o,c*a+n*s,r*a*a+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,n,r,s){return this.set(1,i,r,0,e,1,s,0,t,n,1,0,0,0,0,1),this}compose(e,t,i){let n=this.elements,{_x:r,_y:s,_z:o,_w:a}=t,l=r+r,c=s+s,h=o+o,u=r*l,f=r*c,m=r*h,g=s*c,x=s*h,d=o*h,p=a*l,_=a*c,y=a*h,{x:v,y:T,z:w}=i;return n[0]=(1-(g+d))*v,n[1]=(f+y)*v,n[2]=(m-_)*v,n[3]=0,n[4]=(f-y)*T,n[5]=(1-(u+d))*T,n[6]=(x+p)*T,n[7]=0,n[8]=(m+_)*w,n[9]=(x-p)*w,n[10]=(1-(u+g))*w,n[11]=0,n[12]=e.x,n[13]=e.y,n[14]=e.z,n[15]=1,this}decompose(e,t,i){let n=this.elements;e.x=n[12],e.y=n[13],e.z=n[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),t.identity(),this;let s=Uo.set(n[0],n[1],n[2]).length(),o=Uo.set(n[4],n[5],n[6]).length(),a=Uo.set(n[8],n[9],n[10]).length();if(r<0)s=-s;rr.copy(this);let l=1/s,c=1/o,h=1/a;return rr.elements[0]*=l,rr.elements[1]*=l,rr.elements[2]*=l,rr.elements[4]*=c,rr.elements[5]*=c,rr.elements[6]*=c,rr.elements[8]*=h,rr.elements[9]*=h,rr.elements[10]*=h,t.setFromRotationMatrix(rr),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,n,r,s,o=Oi,a=!1){let l=this.elements,c=2*r/(t-e),h=2*r/(i-n),u=(t+e)/(t-e),f=(i+n)/(i-n),m,g;if(a)m=r/(s-r),g=s*r/(s-r);else if(o===Oi)m=-(s+r)/(s-r),g=-2*s*r/(s-r);else if(o===dr)m=-s/(s-r),g=-s*r/(s-r);else throw Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,n,r,s,o=Oi,a=!1){let l=this.elements,c=2/(t-e),h=2/(i-n),u=-(t+e)/(t-e),f=-(i+n)/(i-n),m,g;if(a)m=1/(s-r),g=s/(s-r);else if(o===Oi)m=-2/(s-r),g=-(s+r)/(s-r);else if(o===dr)m=-1/(s-r),g=-r/(s-r);else throw Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=0,l[12]=u,l[1]=0,l[5]=h,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let n=0;n<16;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}var Uo=new A,rr=new Be,Wy=new A(0,0,0),Xy=new A(1,1,1),as=new A,Xc=new A,wn=new A;var cp=new Be,hp=new ri;class sn{constructor(e=0,t=0,i=0,n=sn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=n}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,n=this._order){return this._x=e,this._y=t,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let n=e.elements,r=n[0],s=n[4],o=n[8],a=n[1],l=n[5],c=n[9],h=n[2],u=n[6],f=n[10];switch(t){case"XYZ":if(this._y=Math.asin(lt(o,-1,1)),Math.abs(o)<0.9999999)this._x=Math.atan2(-c,f),this._z=Math.atan2(-s,r);else this._x=Math.atan2(u,l),this._z=0;break;case"YXZ":if(this._x=Math.asin(-lt(c,-1,1)),Math.abs(c)<0.9999999)this._y=Math.atan2(o,f),this._z=Math.atan2(a,l);else this._y=Math.atan2(-h,r),this._z=0;break;case"ZXY":if(this._x=Math.asin(lt(u,-1,1)),Math.abs(u)<0.9999999)this._y=Math.atan2(-h,f),this._z=Math.atan2(-s,l);else this._y=0,this._z=Math.atan2(a,r);break;case"ZYX":if(this._y=Math.asin(-lt(h,-1,1)),Math.abs(h)<0.9999999)this._x=Math.atan2(u,f),this._z=Math.atan2(a,r);else this._x=0,this._z=Math.atan2(-s,l);break;case"YZX":if(this._z=Math.asin(lt(a,-1,1)),Math.abs(a)<0.9999999)this._x=Math.atan2(-c,l),this._y=Math.atan2(-h,r);else this._x=0,this._y=Math.atan2(o,f);break;case"XZY":if(this._z=Math.asin(-lt(s,-1,1)),Math.abs(s)<0.9999999)this._x=Math.atan2(u,l),this._y=Math.atan2(o,r);else this._x=Math.atan2(-c,f),this._y=0;break;default:be("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}if(this._order=t,i===!0)this._onChangeCallback();return this}setFromQuaternion(e,t,i){return cp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(cp,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return hp.setFromEuler(this),this.setFromQuaternion(hp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){if(this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0)this._order=e[3];return this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}sn.DEFAULT_ORDER="XYZ";class ls{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}var Yy=0,fp=new A,Bo=new ri,Ur=new Be,Yc=new A,xl=new A,qy=new A,Zy=new ri,up=new A(1,0,0),dp=new A(0,1,0),pp=new A(0,0,1),mp={type:"added"},Ky={type:"removed"},Oo={type:"childadded",child:null},Cf={type:"childremoved",child:null};class ct extends Ii{constructor(){super();this.isObject3D=!0,Object.defineProperty(this,"id",{value:Yy++}),this.uuid=xi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ct.DEFAULT_UP.clone();let e=new A,t=new sn,i=new ri,n=new A(1,1,1);function r(){i.setFromEuler(t,!1)}function s(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new Be},normalMatrix:{value:new st}}),this.matrix=new Be,this.matrixWorld=new Be,this.matrixAutoUpdate=ct.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ct.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ls,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null)this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Bo.setFromAxisAngle(e,t),this.quaternion.multiply(Bo),this}rotateOnWorldAxis(e,t){return Bo.setFromAxisAngle(e,t),this.quaternion.premultiply(Bo),this}rotateX(e){return this.rotateOnAxis(up,e)}rotateY(e){return this.rotateOnAxis(dp,e)}rotateZ(e){return this.rotateOnAxis(pp,e)}translateOnAxis(e,t){return fp.copy(e).applyQuaternion(this.quaternion),this.position.add(fp.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(up,e)}translateY(e){return this.translateOnAxis(dp,e)}translateZ(e){return this.translateOnAxis(pp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ur.copy(this.matrixWorld).invert())}lookAt(e,t,i){if(e.isVector3)Yc.copy(e);else Yc.set(e,t,i);let n=this.parent;if(this.updateWorldMatrix(!0,!1),xl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight)Ur.lookAt(xl,Yc,this.up);else Ur.lookAt(Yc,xl,this.up);if(this.quaternion.setFromRotationMatrix(Ur),n)Ur.extractRotation(n.matrixWorld),Bo.setFromRotationMatrix(Ur),this.quaternion.premultiply(Bo.invert())}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}if(e===this)return We("Object3D.add: object can't be added as a child of itself.",e),this;if(e&&e.isObject3D)e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(mp),Oo.child=e,this.dispatchEvent(Oo),Oo.child=null;else We("Object3D.add: object not an instance of THREE.Object3D.",e);return this}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);if(t!==-1)e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ky),Cf.child=e,this.dispatchEvent(Cf),Cf.child=null;return this}removeFromParent(){let e=this.parent;if(e!==null)e.remove(this);return this}clear(){return this.remove(...this.children)}attach(e){if(this.updateWorldMatrix(!0,!1),Ur.copy(this.matrixWorld).invert(),e.parent!==null)e.parent.updateWorldMatrix(!0,!1),Ur.multiply(e.parent.matrixWorld);return e.applyMatrix4(Ur),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(mp),Oo.child=e,this.dispatchEvent(Oo),Oo.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,n=this.children.length;i<n;i++){let s=this.children[i].getObjectByProperty(e,t);if(s!==void 0)return s}return}getObjectsByProperty(e,t,i=[]){if(this[e]===t)i.push(this);let n=this.children;for(let r=0,s=n.length;r<s;r++)n[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xl,e,qy),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xl,Zy,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;if(t!==null)e(t),t.traverseAncestors(e)}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let{x:t,y:i,z:n}=e,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*n,r[13]+=i-r[1]*t-r[5]*i-r[9]*n,r[14]+=n-r[2]*t-r[6]*i-r[10]*n}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||e){if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,e=!0}let t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){let n=this.parent;if(e===!0&&n!==null)n.updateWorldMatrix(!0,!1);if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||i){if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,i=!0}if(t===!0){let r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0,i)}}toJSON(e){let t=e===void 0||typeof e==="string",i={};if(t)e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"};let n={};if(n.uuid=this.uuid,n.type=this.type,n.name=this.name,n.castShadow=this.castShadow,n.receiveShadow=this.receiveShadow,n.visible=this.visible,n.frustumCulled=this.frustumCulled,n.renderOrder=this.renderOrder,n.static=this.static,n.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0)n.userData=this.userData;if(n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.pivot!==null)n.pivot=this.pivot.toArray();if(this.morphTargetDictionary!==void 0)n.morphTargetDictionary=Object.assign({},this.morphTargetDictionary);if(this.morphTargetInfluences!==void 0)n.morphTargetInfluences=this.morphTargetInfluences.slice();if(this.isInstancedMesh){if(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null)n.instanceColor=this.instanceColor.toJSON()}if(this.isBatchedMesh){if(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.geometryInfo=this._geometryInfo.map((o)=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),n.instanceInfo=this._instanceInfo.map((o)=>({...o})),n.availableInstanceIds=this._availableInstanceIds.slice(),n.availableGeometryIds=this._availableGeometryIds.slice(),n.nextIndexStart=this._nextIndexStart,n.nextVertexStart=this._nextVertexStart,n.geometryCount=this._geometryCount,n.maxInstanceCount=this._maxInstanceCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.matricesTexture=this._matricesTexture.toJSON(e),n.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null)n.colorsTexture=this._colorsTexture.toJSON(e);if(this.boundingSphere!==null)n.boundingSphere=this.boundingSphere.toJSON();if(this.boundingBox!==null)n.boundingBox=this.boundingBox.toJSON()}function r(o,a){if(o[a.uuid]===void 0)o[a.uuid]=a.toJSON(e);return a.uuid}if(this.isScene){if(this.background){if(this.background.isColor)n.background=this.background.toJSON();else if(this.background.isTexture)n.background=this.background.toJSON(e).uuid}if(this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0)n.environment=this.environment.toJSON(e).uuid}else if(this.isMesh||this.isLine||this.isPoints){n.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let a=o.shapes;if(Array.isArray(a))for(let l=0,c=a.length;l<c;l++){let h=a[l];r(e.shapes,h)}else r(e.shapes,a)}}if(this.isSkinnedMesh){if(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0)r(e.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid}if(this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let a=0,l=this.material.length;a<l;a++)o.push(r(e.materials,this.material[a]));n.material=o}else n.material=r(e.materials,this.material);if(this.children.length>0){n.children=[];for(let o=0;o<this.children.length;o++)n.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){n.animations=[];for(let o=0;o<this.animations.length;o++){let a=this.animations[o];n.animations.push(r(e.animations,a))}}if(t){let o=s(e.geometries),a=s(e.materials),l=s(e.textures),c=s(e.images),h=s(e.shapes),u=s(e.skeletons),f=s(e.animations),m=s(e.nodes);if(o.length>0)i.geometries=o;if(a.length>0)i.materials=a;if(l.length>0)i.textures=l;if(c.length>0)i.images=c;if(h.length>0)i.shapes=h;if(u.length>0)i.skeletons=u;if(f.length>0)i.animations=f;if(m.length>0)i.nodes=m}return i.object=n,i;function s(o){let a=[];for(let l in o){let c=o[l];delete c.metadata,a.push(c)}return a}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let n=e.children[i];this.add(n.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}ct.DEFAULT_UP=new A(0,1,0);ct.DEFAULT_MATRIX_AUTO_UPDATE=!0;ct.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class qe extends ct{constructor(){super();this.isGroup=!0,this.type="Group"}}var Jy={type:"move"};class Ho{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){if(this._hand===null)this._hand=new qe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1};return this._hand}getTargetRaySpace(){if(this._targetRay===null)this._targetRay=new qe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new A,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new A;return this._targetRay}getGripSpace(){if(this._grip===null)this._grip=new qe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new A,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new A,this._grip.eventsEnabled=!1;return this._grip}dispatchEvent(e){if(this._targetRay!==null)this._targetRay.dispatchEvent(e);if(this._grip!==null)this._grip.dispatchEvent(e);if(this._hand!==null)this._hand.dispatchEvent(e);return this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){if(this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null)this._targetRay.visible=!1;if(this._grip!==null)this._grip.visible=!1;if(this._hand!==null)this._hand.visible=!1;return this}update(e,t,i){let n=null,r=null,s=null,o=this._targetRay,a=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){s=!0;for(let g of e.hand.values()){let x=t.getJointPose(g,i),d=this._getHandJoint(l,g);if(x!==null)d.matrix.fromArray(x.transform.matrix),d.matrix.decompose(d.position,d.quaternion,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=x.radius;d.visible=x!==null}let c=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],u=c.position.distanceTo(h.position),f=0.02,m=0.005;if(l.inputState.pinching&&u>f+m)l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this});else if(!l.inputState.pinching&&u<=f-m)l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this})}else if(a!==null&&e.gripSpace){if(r=t.getPose(e.gripSpace,i),r!==null){if(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity)a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity);else a.hasLinearVelocity=!1;if(r.angularVelocity)a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity);else a.hasAngularVelocity=!1;if(a.eventsEnabled)a.dispatchEvent({type:"gripUpdated",data:e,target:this})}}if(o!==null){if(n=t.getPose(e.targetRaySpace,i),n===null&&r!==null)n=r;if(n!==null){if(o.matrix.fromArray(n.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,n.linearVelocity)o.hasLinearVelocity=!0,o.linearVelocity.copy(n.linearVelocity);else o.hasLinearVelocity=!1;if(n.angularVelocity)o.hasAngularVelocity=!0,o.angularVelocity.copy(n.angularVelocity);else o.hasAngularVelocity=!1;this.dispatchEvent(Jy)}}}if(o!==null)o.visible=n!==null;if(a!==null)a.visible=r!==null;if(l!==null)l.visible=s!==null;return this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new qe;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}var gp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},cs={h:0,s:0,l:0},qc={h:0,s:0,l:0};function Pf(e,t,i){if(i<0)i+=1;if(i>1)i-=1;if(i<0.16666666666666666)return e+(t-e)*6*i;if(i<0.5)return t;if(i<0.6666666666666666)return e+(t-e)*6*(0.6666666666666666-i);return e}class fe{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let n=e;if(n&&n.isColor)this.copy(n);else if(typeof n==="number")this.setHex(n);else if(typeof n==="string")this.setStyle(n)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=yt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ht.colorSpaceToWorking(this,t),this}setRGB(e,t,i,n=ht.workingColorSpace){return this.r=e,this.g=t,this.b=i,ht.colorSpaceToWorking(this,n),this}setHSL(e,t,i,n=ht.workingColorSpace){if(e=kc(e,1),t=lt(t,0,1),i=lt(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=0.5?i*(1+t):i+t-i*t,s=2*i-r;this.r=Pf(s,r,e+0.3333333333333333),this.g=Pf(s,r,e),this.b=Pf(s,r,e-0.3333333333333333)}return ht.colorSpaceToWorking(this,n),this}setStyle(e,t=yt){function i(r){if(r===void 0)return;if(parseFloat(r)<1)be("Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,s=n[1],o=n[2];switch(s){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:be("Color: Unknown color model "+e)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=n[1],s=r.length;if(s===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);else if(s===6)return this.setHex(parseInt(r,16),t);else be("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=yt){let i=gp[e.toLowerCase()];if(i!==void 0)this.setHex(i,t);else be("Color: Unknown color "+e);return this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=nr(e.r),this.g=nr(e.g),this.b=nr(e.b),this}copyLinearToSRGB(e){return this.r=Gs(e.r),this.g=Gs(e.g),this.b=Gs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=yt){return ht.workingToColorSpace(on.copy(this),e),Math.round(lt(on.r*255,0,255))*65536+Math.round(lt(on.g*255,0,255))*256+Math.round(lt(on.b*255,0,255))}getHexString(e=yt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ht.workingColorSpace){ht.workingToColorSpace(on.copy(this),t);let{r:i,g:n,b:r}=on,s=Math.max(i,n,r),o=Math.min(i,n,r),a,l,c=(o+s)/2;if(o===s)a=0,l=0;else{let h=s-o;switch(l=c<=0.5?h/(s+o):h/(2-s-o),s){case i:a=(n-r)/h+(n<r?6:0);break;case n:a=(r-i)/h+2;break;case r:a=(i-n)/h+4;break}a/=6}return e.h=a,e.s=l,e.l=c,e}getRGB(e,t=ht.workingColorSpace){return ht.workingToColorSpace(on.copy(this),t),e.r=on.r,e.g=on.g,e.b=on.b,e}getStyle(e=yt){ht.workingToColorSpace(on.copy(this),e);let{r:t,g:i,b:n}=on;if(e!==yt)return`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`;return`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(e,t,i){return this.getHSL(cs),this.setHSL(cs.h+e,cs.s+t,cs.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(cs),e.getHSL(qc);let i=Lo(cs.h,qc.h,t),n=Lo(cs.s,qc.s,t),r=Lo(cs.l,qc.l,t);return this.setHSL(i,n,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,n=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*n,this.g=r[1]*t+r[4]*i+r[7]*n,this.b=r[2]*t+r[5]*i+r[8]*n,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}var on=new fe;fe.NAMES=gp;class Go{constructor(e,t=1,i=1000){this.isFog=!0,this.name="",this.color=new fe(e),this.near=t,this.far=i}clone(){return new Go(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class ks extends ct{constructor(){super();if(this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new sn,this.environmentIntensity=1,this.environmentRotation=new sn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);if(this.fog!==null)t.object.fog=this.fog.toJSON();return t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}var sr=new A,Br=new A,If=new A,Or=new A,zo=new A,ko=new A,xp=new A,Lf=new A,Df=new A,Nf=new A,Ff=new bt,Uf=new bt,Bf=new bt;class Yi{constructor(e=new A,t=new A,i=new A){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,n){n.subVectors(i,t),sr.subVectors(e,t),n.cross(sr);let r=n.lengthSq();if(r>0)return n.multiplyScalar(1/Math.sqrt(r));return n.set(0,0,0)}static getBarycoord(e,t,i,n,r){sr.subVectors(n,t),Br.subVectors(i,t),If.subVectors(e,t);let s=sr.dot(sr),o=sr.dot(Br),a=sr.dot(If),l=Br.dot(Br),c=Br.dot(If),h=s*l-o*o;if(h===0)return r.set(0,0,0),null;let u=1/h,f=(l*a-o*c)*u,m=(s*c-o*a)*u;return r.set(1-f-m,m,f)}static containsPoint(e,t,i,n){if(this.getBarycoord(e,t,i,n,Or)===null)return!1;return Or.x>=0&&Or.y>=0&&Or.x+Or.y<=1}static getInterpolation(e,t,i,n,r,s,o,a){if(this.getBarycoord(e,t,i,n,Or)===null){if(a.x=0,a.y=0,"z"in a)a.z=0;if("w"in a)a.w=0;return null}return a.setScalar(0),a.addScaledVector(r,Or.x),a.addScaledVector(s,Or.y),a.addScaledVector(o,Or.z),a}static getInterpolatedAttribute(e,t,i,n,r,s){return Ff.setScalar(0),Uf.setScalar(0),Bf.setScalar(0),Ff.fromBufferAttribute(e,t),Uf.fromBufferAttribute(e,i),Bf.fromBufferAttribute(e,n),s.setScalar(0),s.addScaledVector(Ff,r.x),s.addScaledVector(Uf,r.y),s.addScaledVector(Bf,r.z),s}static isFrontFacing(e,t,i,n){return sr.subVectors(i,t),Br.subVectors(e,t),sr.cross(Br).dot(n)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,n){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[n]),this}setFromAttributeAndIndices(e,t,i,n){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return sr.subVectors(this.c,this.b),Br.subVectors(this.a,this.b),sr.cross(Br).length()*0.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(0.3333333333333333)}getNormal(e){return Yi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Yi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,n,r){return Yi.getInterpolation(e,this.a,this.b,this.c,t,i,n,r)}containsPoint(e){return Yi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Yi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,n=this.b,r=this.c,s,o;zo.subVectors(n,i),ko.subVectors(r,i),Lf.subVectors(e,i);let a=zo.dot(Lf),l=ko.dot(Lf);if(a<=0&&l<=0)return t.copy(i);Df.subVectors(e,n);let c=zo.dot(Df),h=ko.dot(Df);if(c>=0&&h<=c)return t.copy(n);let u=a*h-c*l;if(u<=0&&a>=0&&c<=0&&a-c>0)return s=a/(a-c),t.copy(i).addScaledVector(zo,s);Nf.subVectors(e,r);let f=zo.dot(Nf),m=ko.dot(Nf);if(m>=0&&f<=m)return t.copy(r);let g=f*l-a*m;if(g<=0&&l>=0&&m<=0)return o=l/(l-m),t.copy(i).addScaledVector(ko,o);let x=c*m-f*h;if(x<=0&&h-c>=0&&f-m>=0)return xp.subVectors(r,n),o=(h-c)/(h-c+(f-m)),t.copy(n).addScaledVector(xp,o);let d=1/(x+g+u);return s=g*d,o=u*d,t.copy(i).addScaledVector(zo,s).addScaledVector(ko,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class _i{constructor(e=new A(1/0,1/0,1/0),t=new A(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(or.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(or.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=or.copy(t).multiplyScalar(0.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(0.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let s=0,o=r.count;s<o;s++){if(e.isMesh===!0)e.getVertexPosition(s,or);else or.fromBufferAttribute(r,s);or.applyMatrix4(e.matrixWorld),this.expandByPoint(or)}else{if(e.boundingBox!==void 0){if(e.boundingBox===null)e.computeBoundingBox();Zc.copy(e.boundingBox)}else{if(i.boundingBox===null)i.computeBoundingBox();Zc.copy(i.boundingBox)}Zc.applyMatrix4(e.matrixWorld),this.union(Zc)}}let n=e.children;for(let r=0,s=n.length;r<s;r++)this.expandByObject(n[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,or),or.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;if(e.normal.x>0)t=e.normal.x*this.min.x,i=e.normal.x*this.max.x;else t=e.normal.x*this.max.x,i=e.normal.x*this.min.x;if(e.normal.y>0)t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y;else t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y;if(e.normal.z>0)t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z;else t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z;return t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(_l),Kc.subVectors(this.max,_l),Vo.subVectors(e.a,_l),Wo.subVectors(e.b,_l),Xo.subVectors(e.c,_l),hs.subVectors(Wo,Vo),fs.subVectors(Xo,Wo),Vs.subVectors(Vo,Xo);let t=[0,-hs.z,hs.y,0,-fs.z,fs.y,0,-Vs.z,Vs.y,hs.z,0,-hs.x,fs.z,0,-fs.x,Vs.z,0,-Vs.x,-hs.y,hs.x,0,-fs.y,fs.x,0,-Vs.y,Vs.x,0];if(!Of(t,Vo,Wo,Xo,Kc))return!1;if(t=[1,0,0,0,1,0,0,0,1],!Of(t,Vo,Wo,Xo,Kc))return!1;return Jc.crossVectors(hs,fs),t=[Jc.x,Jc.y,Jc.z],Of(t,Vo,Wo,Xo,Kc)}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,or).distanceTo(e)}getBoundingSphere(e){if(this.isEmpty())e.makeEmpty();else this.getCenter(e.center),e.radius=this.getSize(or).length()*0.5;return e}intersect(e){if(this.min.max(e.min),this.max.min(e.max),this.isEmpty())this.makeEmpty();return this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){if(this.isEmpty())return this;return Hr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Hr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Hr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Hr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Hr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Hr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Hr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Hr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Hr),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}var Hr=[new A,new A,new A,new A,new A,new A,new A,new A],or=new A,Zc=new _i,Vo=new A,Wo=new A,Xo=new A,hs=new A,fs=new A,Vs=new A,_l=new A,Kc=new A,Jc=new A,Ws=new A;function Of(e,t,i,n,r){for(let s=0,o=e.length-3;s<=o;s+=3){Ws.fromArray(e,s);let a=r.x*Math.abs(Ws.x)+r.y*Math.abs(Ws.y)+r.z*Math.abs(Ws.z),l=t.dot(Ws),c=i.dot(Ws),h=n.dot(Ws);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var Si=new A,jc=new X,jy=0;class qt extends Ii{constructor(e,t,i=!1){super();if(Array.isArray(e))throw TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:jy++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=dl,this.updateRanges=[],this.gpuType=di,this.version=0,this._normalizationScale=e!==void 0?Do(e):void 0}onUploadCallback(){}set needsUpdate(e){if(e===!0)this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let n=0,r=this.itemSize;n<r;n++)this.array[e+n]=t.array[i+n];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)jc.fromBufferAttribute(this,t),jc.applyMatrix3(e),this.setXY(t,jc.x,jc.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Si.fromBufferAttribute(this,t),Si.applyMatrix3(e),this.setXYZ(t,Si.x,Si.y,Si.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Si.fromBufferAttribute(this,t),Si.applyMatrix4(e),this.setXYZ(t,Si.x,Si.y,Si.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Si.fromBufferAttribute(this,t),Si.applyNormalMatrix(e),this.setXYZ(t,Si.x,Si.y,Si.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Si.fromBufferAttribute(this,t),Si.transformDirection(e),this.setXYZ(t,Si.x,Si.y,Si.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];if(this.normalized)i=this._denormalize(i);return i}setComponent(e,t,i){if(this.normalized)i=this._normalize(i);return this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];if(this.normalized)t=this._denormalize(t);return t}setX(e,t){if(this.normalized)t=this._normalize(t);return this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];if(this.normalized)t=this._denormalize(t);return t}setY(e,t){if(this.normalized)t=this._normalize(t);return this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];if(this.normalized)t=this._denormalize(t);return t}setZ(e,t){if(this.normalized)t=this._normalize(t);return this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];if(this.normalized)t=this._denormalize(t);return t}setW(e,t){if(this.normalized)t=this._normalize(t);return this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){if(e*=this.itemSize,this.normalized)t=this._normalize(t),i=this._normalize(i);return this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,n){if(e*=this.itemSize,this.normalized)t=this._normalize(t),i=this._normalize(i),n=this._normalize(n);return this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this}setXYZW(e,t,i,n,r){if(e*=this.itemSize,this.normalized)t=this._normalize(t),i=this._normalize(i),n=this._normalize(n),r=this._normalize(r);return this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):pl(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):ml(e,this.array)}}class yl extends qt{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Ml extends qt{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Ee extends qt{constructor(e,t,i){super(new Float32Array(e),t,i)}}var $y=new _i,vl=new A,Hf=new A;class ci{constructor(e=new A,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;if(t!==void 0)i.copy(t);else $y.setFromPoints(e).getCenter(i);let n=0;for(let r=0,s=e.length;r<s;r++)n=Math.max(n,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(n),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);if(t.copy(e),i>this.radius*this.radius)t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center);return t}getBoundingBox(e){if(this.isEmpty())return e.makeEmpty(),e;return e.set(this.center,this.center),e.expandByScalar(this.radius),e}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;vl.subVectors(e,this.center);let t=vl.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),n=(i-this.radius)*0.5;this.center.addScaledVector(vl,n/i),this.radius+=n}return this}union(e){if(e.isEmpty())return this;if(this.isEmpty())return this.copy(e),this;if(this.center.equals(e.center)===!0)this.radius=Math.max(this.radius,e.radius);else Hf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(vl.copy(e.center).add(Hf)),this.expandByPoint(vl.copy(e.center).sub(Hf));return this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}var Qy=0,kn=new Be,Gf=new ct,Yo=new A,An=new _i,Sl=new _i,Hi=new A;class Ve extends Ii{constructor(){super();this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Qy++}),this.uuid=xi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){if(Array.isArray(e))this.index=new((tp(e))?Ml:yl)(e,1);else this.index=e;return this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;if(t!==void 0)t.applyMatrix4(e),t.needsUpdate=!0;let i=this.attributes.normal;if(i!==void 0){let r=new st().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let n=this.attributes.tangent;if(n!==void 0)n.transformDirection(e),n.needsUpdate=!0;if(this.boundingBox!==null)this.computeBoundingBox();if(this.boundingSphere!==null)this.computeBoundingSphere();return this._transformed=!0,this}applyQuaternion(e){return kn.makeRotationFromQuaternion(e),this.applyMatrix4(kn),this}rotateX(e){return kn.makeRotationX(e),this.applyMatrix4(kn),this}rotateY(e){return kn.makeRotationY(e),this.applyMatrix4(kn),this}rotateZ(e){return kn.makeRotationZ(e),this.applyMatrix4(kn),this}translate(e,t,i){return kn.makeTranslation(e,t,i),this.applyMatrix4(kn),this}scale(e,t,i){return kn.makeScale(e,t,i),this.applyMatrix4(kn),this}lookAt(e){return Gf.lookAt(e),Gf.updateMatrix(),this.applyMatrix4(Gf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Yo).negate(),this.translate(Yo.x,Yo.y,Yo.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let n=0,r=e.length;n<r;n++){let s=e[n];i.push(s.x,s.y,s.z||0)}this.setAttribute("position",new Ee(i,3))}else{let i=Math.min(e.length,t.count);for(let n=0;n<i;n++){let r=e[n];t.setXYZ(n,r.x,r.y,r.z||0)}if(e.length>t.count)be("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.");t.needsUpdate=!0}return this}computeBoundingBox(){if(this.boundingBox===null)this.boundingBox=new _i;let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){We("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new A(-1/0,-1/0,-1/0),new A(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,n=t.length;i<n;i++){let r=t[i];if(An.setFromBufferAttribute(r),this.morphTargetsRelative)Hi.addVectors(this.boundingBox.min,An.min),this.boundingBox.expandByPoint(Hi),Hi.addVectors(this.boundingBox.max,An.max),this.boundingBox.expandByPoint(Hi);else this.boundingBox.expandByPoint(An.min),this.boundingBox.expandByPoint(An.max)}}else this.boundingBox.makeEmpty();if(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))We('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){if(this.boundingSphere===null)this.boundingSphere=new ci;let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){We("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new A,1/0);return}if(e){let i=this.boundingSphere.center;if(An.setFromBufferAttribute(e),t)for(let r=0,s=t.length;r<s;r++){let o=t[r];if(Sl.setFromBufferAttribute(o),this.morphTargetsRelative)Hi.addVectors(An.min,Sl.min),An.expandByPoint(Hi),Hi.addVectors(An.max,Sl.max),An.expandByPoint(Hi);else An.expandByPoint(Sl.min),An.expandByPoint(Sl.max)}An.getCenter(i);let n=0;for(let r=0,s=e.count;r<s;r++)Hi.fromBufferAttribute(e,r),n=Math.max(n,i.distanceToSquared(Hi));if(t)for(let r=0,s=t.length;r<s;r++){let o=t[r],a=this.morphTargetsRelative;for(let l=0,c=o.count;l<c;l++){if(Hi.fromBufferAttribute(o,l),a)Yo.fromBufferAttribute(e,l),Hi.add(Yo);n=Math.max(n,i.distanceToSquared(Hi))}}if(this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius))We('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){We("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let{position:i,normal:n,uv:r}=t,s=this.getAttribute("tangent");if(s===void 0||s.count!==i.count)s=new qt(new Float32Array(4*i.count),4),this.setAttribute("tangent",s);let o=[],a=[],l=new Uint8Array(i.count);for(let b=0;b<i.count;b++)o[b]=new A,a[b]=new A;let c=new A,h=new A,u=new A,f=new X,m=new X,g=new X,x=new A,d=new A;function p(b,C,F){l[b]=l[C]=l[F]=1,c.fromBufferAttribute(i,b),h.fromBufferAttribute(i,C),u.fromBufferAttribute(i,F),f.fromBufferAttribute(r,b),m.fromBufferAttribute(r,C),g.fromBufferAttribute(r,F),h.sub(c),u.sub(c),m.sub(f),g.sub(f);let D=1/(m.x*g.y-g.x*m.y);if(!isFinite(D))return;x.copy(h).multiplyScalar(g.y).addScaledVector(u,-m.y).multiplyScalar(D),d.copy(u).multiplyScalar(m.x).addScaledVector(h,-g.x).multiplyScalar(D),o[b].add(x),o[C].add(x),o[F].add(x),a[b].add(d),a[C].add(d),a[F].add(d)}let _=this.groups;if(_.length===0)_=[{start:0,count:e.count}];for(let b=0,C=_.length;b<C;++b){let F=_[b],{start:D,count:V}=F;for(let ee=D,I=D+V;ee<I;ee+=3)p(e.getX(ee+0),e.getX(ee+1),e.getX(ee+2))}let y=new A,v=new A,T=new A,w=new A;function M(b){T.fromBufferAttribute(n,b),w.copy(T);let C=o[b];y.copy(C),y.sub(T.multiplyScalar(T.dot(C))).normalize(),v.crossVectors(w,C);let D=v.dot(a[b])<0?-1:1;s.setXYZW(b,y.x,y.y,y.z,D)}for(let b=0,C=i.count;b<C;++b)if(l[b])M(b);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new qt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let u=0,f=i.count;u<f;u++)i.setXYZ(u,0,0,0);let n=new A,r=new A,s=new A,o=new A,a=new A,l=new A,c=new A,h=new A;if(e)for(let u=0,f=e.count;u<f;u+=3){let m=e.getX(u+0),g=e.getX(u+1),x=e.getX(u+2);n.fromBufferAttribute(t,m),r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,x),c.subVectors(s,r),h.subVectors(n,r),c.cross(h),o.fromBufferAttribute(i,m),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,x),o.add(c),a.add(c),l.add(c),i.setXYZ(m,o.x,o.y,o.z),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z)}else for(let u=0,f=t.count;u<f;u+=3)n.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),s.fromBufferAttribute(t,u+2),c.subVectors(s,r),h.subVectors(n,r),c.cross(h),i.setXYZ(u+0,c.x,c.y,c.z),i.setXYZ(u+1,c.x,c.y,c.z),i.setXYZ(u+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Hi.fromBufferAttribute(e,t),Hi.normalize(),e.setXYZ(t,Hi.x,Hi.y,Hi.z)}toNonIndexed(){function e(o,a){let{array:l,itemSize:c,normalized:h}=o,u=new l.constructor(a.length*c),f=0,m=0;for(let g=0,x=a.length;g<x;g++){if(o.isInterleavedBufferAttribute)f=a[g]*o.data.stride+o.offset;else f=a[g]*c;for(let d=0;d<c;d++)u[m++]=l[f++]}return new qt(u,c,h)}if(this.index===null)return be("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new Ve,i=this.index.array,n=this.attributes;for(let o in n){let a=n[o],l=e(a,i);t.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let a=[],l=r[o];for(let c=0,h=l.length;c<h;c++){let u=l[c],f=e(u,i);a.push(f)}t.morphAttributes[o]=a}t.morphTargetsRelative=this.morphTargetsRelative;let s=this.groups;for(let o=0,a=s.length;o<a;o++){let l=s[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0)e.userData=this.userData;if(this.parameters!==void 0&&this._transformed!==!0){let a=this.parameters;for(let l in a)if(a[l]!==void 0)e[l]=a[l];return e}e.data={attributes:{}};let t=this.index;if(t!==null)e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)};let i=this.attributes;for(let a in i){let l=i[a];e.data.attributes[a]=l.toJSON(e.data)}let n={},r=!1;for(let a in this.morphAttributes){let l=this.morphAttributes[a],c=[];for(let h=0,u=l.length;h<u;h++){let f=l[h];c.push(f.toJSON(e.data))}if(c.length>0)n[a]=c,r=!0}if(r)e.data.morphAttributes=n,e.data.morphTargetsRelative=this.morphTargetsRelative;let s=this.groups;if(s.length>0)e.data.groups=JSON.parse(JSON.stringify(s));let o=this.boundingSphere;if(o!==null)e.data.boundingSphere=o.toJSON();return e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;if(i!==null)this.setIndex(i.clone());let n=e.attributes;for(let l in n){let c=n[l];this.setAttribute(l,c.clone(t))}let r=e.morphAttributes;for(let l in r){let c=[],h=r[l];for(let u=0,f=h.length;u<f;u++)c.push(h[u].clone(t));this.morphAttributes[l]=c}this.morphTargetsRelative=e.morphTargetsRelative;let s=e.groups;for(let l=0,c=s.length;l<c;l++){let h=s[l];this.addGroup(h.start,h.count,h.materialIndex)}let o=e.boundingBox;if(o!==null)this.boundingBox=o.clone();let a=e.boundingSphere;if(a!==null)this.boundingSphere=a.clone();return this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Gr{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=dl,this.updateRanges=[],this.version=0,this.uuid=xi()}onUploadCallback(){}set needsUpdate(e){if(e===!0)this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let n=0,r=this.stride;n<r;n++)this.array[e+n]=t.array[i+n];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){if(e.arrayBuffers===void 0)e.arrayBuffers={};let t=_p(this.array);if(e.arrayBuffers[t]===void 0)e.arrayBuffers[t]=this.array.slice(0).buffer;let i=new this.array.constructor(e.arrayBuffers[t]),n=new this.constructor(i,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){if(e.arrayBuffers===void 0)e.arrayBuffers={};let t=_p(this.array);if(e.arrayBuffers[t]===void 0)e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer));let i={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return i.usage=this.usage,i}}function _p(e){if(e.buffer._uuid===void 0)e.buffer._uuid=xi();if(e.byteOffset===0&&e.byteLength===e.buffer.byteLength)return e.buffer._uuid;return e.buffer._uuid+":"+e.byteOffset+":"+e.byteLength}var dn=new A;class mr{constructor(e,t,i,n=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=n,this._normalizationScale=e!==void 0?Do(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)dn.fromBufferAttribute(this,t),dn.applyMatrix4(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)dn.fromBufferAttribute(this,t),dn.applyNormalMatrix(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)dn.fromBufferAttribute(this,t),dn.transformDirection(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];if(this.normalized)i=this._denormalize(i);return i}setComponent(e,t,i){if(this.normalized)i=this._normalize(i);return this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){if(this.normalized)t=this._normalize(t);return this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){if(this.normalized)t=this._normalize(t);return this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){if(this.normalized)t=this._normalize(t);return this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){if(this.normalized)t=this._normalize(t);return this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];if(this.normalized)t=this._denormalize(t);return t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];if(this.normalized)t=this._denormalize(t);return t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];if(this.normalized)t=this._denormalize(t);return t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];if(this.normalized)t=this._denormalize(t);return t}setXY(e,t,i){if(e=e*this.data.stride+this.offset,this.normalized)t=this._normalize(t),i=this._normalize(i);return this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,n){if(e=e*this.data.stride+this.offset,this.normalized)t=this._normalize(t),i=this._normalize(i),n=this._normalize(n);return this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=n,this}setXYZW(e,t,i,n,r){if(e=e*this.data.stride+this.offset,this.normalized)t=this._normalize(t),i=this._normalize(i),n=this._normalize(n),r=this._normalize(r);return this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=n,this.data.array[e+3]=r,this}clone(e){if(e===void 0){Hs("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let n=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[n+r])}return new qt(new this.array.constructor(t),this.itemSize,this.normalized)}else{if(e.interleavedBuffers===void 0)e.interleavedBuffers={};if(e.interleavedBuffers[this.data.uuid]===void 0)e.interleavedBuffers[this.data.uuid]=this.data.clone(e);return new mr(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}}toJSON(e){if(e===void 0){Hs("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let n=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[n+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else{if(e.interleavedBuffers===void 0)e.interleavedBuffers={};if(e.interleavedBuffers[this.data.uuid]===void 0)e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e);return{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):pl(e,this.data.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):ml(e,this.data.array)}}var zf=new A,e1=new A,t1=new st;class pn{constructor(e=new A(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,n){return this.normal.set(e,t,i),this.constant=n,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let n=zf.subVectors(i,t).cross(e1.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(n,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let n=e.delta(zf),r=this.normal.dot(n);if(r===0){if(this.distanceToPoint(e.start)===0)return t.copy(e.start);return null}let s=-(e.start.dot(this.normal)+this.constant)/r;if(i===!0&&(s<0||s>1))return null;return t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||t1.getNormalMatrix(e),n=this.coplanarPoint(zf).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}var i1=0;class zt extends Ii{constructor(){super();this.isMaterial=!0,Object.defineProperty(this,"id",{value:i1++}),this.uuid=xi(),this.name="",this.type="Material",this.blending=es,this.side=yn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=bc,this.blendDst=Tc,this.blendEquation=ts,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new fe(0,0,0),this.blendAlpha=0,this.depthFunc=is,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Zd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Oc,this.stencilZFail=Oc,this.stencilZPass=Oc,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){if(this._alphaTest>0!==e>0)this.version++;this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e===void 0)return;for(let t in e){let i=e[t];if(i===void 0){be(`Material: parameter '${t}' has value of undefined.`);continue}let n=this[t];if(n===void 0){be(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}if(n&&n.isColor)n.set(i);else if(n&&n.isVector2&&(i&&i.isVector2)||n&&n.isEuler&&(i&&i.isEuler)||n&&n.isVector3&&(i&&i.isVector3))n.copy(i);else this[t]=i}}toJSON(e){let t=e===void 0||typeof e==="string";if(t)e={textures:{},images:{}};let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};if(i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor)i.color=this.color.getHex();if(this.roughness!==void 0)i.roughness=this.roughness;if(this.metalness!==void 0)i.metalness=this.metalness;if(this.sheen!==void 0)i.sheen=this.sheen;if(this.sheenColor&&this.sheenColor.isColor)i.sheenColor=this.sheenColor.getHex();if(this.sheenRoughness!==void 0)i.sheenRoughness=this.sheenRoughness;if(this.emissive&&this.emissive.isColor)i.emissive=this.emissive.getHex();if(this.emissiveIntensity!==void 0)i.emissiveIntensity=this.emissiveIntensity;if(this.specular&&this.specular.isColor)i.specular=this.specular.getHex();if(this.specularIntensity!==void 0)i.specularIntensity=this.specularIntensity;if(this.specularColor&&this.specularColor.isColor)i.specularColor=this.specularColor.getHex();if(this.shininess!==void 0)i.shininess=this.shininess;if(this.clearcoat!==void 0)i.clearcoat=this.clearcoat;if(this.clearcoatRoughness!==void 0)i.clearcoatRoughness=this.clearcoatRoughness;if(this.diffuseRoughness!==void 0)i.diffuseRoughness=this.diffuseRoughness;if(this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture)i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid;if(this.clearcoatMap&&this.clearcoatMap.isTexture)i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid;if(this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture)i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid;if(this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture)i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray();if(this.sheenColorMap&&this.sheenColorMap.isTexture)i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid;if(this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture)i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid;if(this.dispersion!==void 0)i.dispersion=this.dispersion;if(this.retroreflectivity!==void 0)i.retroreflectivity=this.retroreflectivity;if(this.iridescence!==void 0)i.iridescence=this.iridescence;if(this.iridescenceIOR!==void 0)i.iridescenceIOR=this.iridescenceIOR;if(this.iridescenceThicknessMinimum!==void 0)i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum;if(this.iridescenceThicknessMaximum!==void 0)i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum;if(this.iridescenceMap&&this.iridescenceMap.isTexture)i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid;if(this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture)i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid;if(this.anisotropy!==void 0)i.anisotropy=this.anisotropy;if(this.anisotropyRotation!==void 0)i.anisotropyRotation=this.anisotropyRotation;if(this.anisotropyMap&&this.anisotropyMap.isTexture)i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid;if(this.map&&this.map.isTexture)i.map=this.map.toJSON(e).uuid;if(this.matcap&&this.matcap.isTexture)i.matcap=this.matcap.toJSON(e).uuid;if(this.alphaMap&&this.alphaMap.isTexture)i.alphaMap=this.alphaMap.toJSON(e).uuid;if(this.lightMap&&this.lightMap.isTexture)i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity;if(this.aoMap&&this.aoMap.isTexture)i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity;if(this.bumpMap&&this.bumpMap.isTexture)i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale;if(this.normalMap&&this.normalMap.isTexture)i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray();if(this.displacementMap&&this.displacementMap.isTexture)i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias;if(this.roughnessMap&&this.roughnessMap.isTexture)i.roughnessMap=this.roughnessMap.toJSON(e).uuid;if(this.metalnessMap&&this.metalnessMap.isTexture)i.metalnessMap=this.metalnessMap.toJSON(e).uuid;if(this.emissiveMap&&this.emissiveMap.isTexture)i.emissiveMap=this.emissiveMap.toJSON(e).uuid;if(this.specularMap&&this.specularMap.isTexture)i.specularMap=this.specularMap.toJSON(e).uuid;if(this.specularIntensityMap&&this.specularIntensityMap.isTexture)i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid;if(this.specularColorMap&&this.specularColorMap.isTexture)i.specularColorMap=this.specularColorMap.toJSON(e).uuid;if(this.envMap&&this.envMap.isTexture){if(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0)i.combine=this.combine}if(this.envMapRotation!==void 0)i.envMapRotation=this.envMapRotation.toArray();if(this.envMapIntensity!==void 0)i.envMapIntensity=this.envMapIntensity;if(this.reflectivity!==void 0)i.reflectivity=this.reflectivity;if(this.refractionRatio!==void 0)i.refractionRatio=this.refractionRatio;if(this.gradientMap&&this.gradientMap.isTexture)i.gradientMap=this.gradientMap.toJSON(e).uuid;if(this.transmission!==void 0)i.transmission=this.transmission;if(this.transmissionMap&&this.transmissionMap.isTexture)i.transmissionMap=this.transmissionMap.toJSON(e).uuid;if(this.thickness!==void 0)i.thickness=this.thickness;if(this.thicknessMap&&this.thicknessMap.isTexture)i.thicknessMap=this.thicknessMap.toJSON(e).uuid;if(this.attenuationDistance!==void 0)i.attenuationDistance=this.attenuationDistance;if(this.attenuationColor!==void 0)i.attenuationColor=this.attenuationColor.getHex();if(this.size!==void 0)i.size=this.size;if(this.sizeAttenuation!==void 0)i.sizeAttenuation=this.sizeAttenuation;if(Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0)i.clippingPlanes=this.clippingPlanes.map((r)=>r.toJSON());if(this.rotation!==void 0)i.rotation=this.rotation;if(this.depthPacking!==void 0)i.depthPacking=this.depthPacking;if(this.linewidth!==void 0)i.linewidth=this.linewidth;if(this.linecap!==void 0)i.linecap=this.linecap;if(this.linejoin!==void 0)i.linejoin=this.linejoin;if(this.dashSize!==void 0)i.dashSize=this.dashSize;if(this.gapSize!==void 0)i.gapSize=this.gapSize;if(this.scale!==void 0)i.scale=this.scale;if(this.wireframe!==void 0)i.wireframe=this.wireframe;if(this.wireframeLinewidth!==void 0)i.wireframeLinewidth=this.wireframeLinewidth;if(this.wireframeLinecap!==void 0)i.wireframeLinecap=this.wireframeLinecap;if(this.wireframeLinejoin!==void 0)i.wireframeLinejoin=this.wireframeLinejoin;if(this.flatShading!==void 0)i.flatShading=this.flatShading;if(this.fog!==void 0)i.fog=this.fog;if(Object.keys(this.userData).length>0)i.userData=this.userData;function n(r){let s=[];for(let o in r){let a=r[o];delete a.metadata,s.push(a)}return s}if(t){let r=n(e.textures),s=n(e.images);if(r.length>0)i.textures=r;if(s.length>0)i.images=s}return i}fromJSON(e,t){if(e.uuid!==void 0)this.uuid=e.uuid;if(e.name!==void 0)this.name=e.name;if(e.color!==void 0&&this.color!==void 0)this.color.setHex(e.color);if(e.roughness!==void 0)this.roughness=e.roughness;if(e.metalness!==void 0)this.metalness=e.metalness;if(e.sheen!==void 0)this.sheen=e.sheen;if(e.sheenColor!==void 0)this.sheenColor=new fe().setHex(e.sheenColor);if(e.sheenRoughness!==void 0)this.sheenRoughness=e.sheenRoughness;if(e.emissive!==void 0&&this.emissive!==void 0)this.emissive.setHex(e.emissive);if(e.specular!==void 0&&this.specular!==void 0)this.specular.setHex(e.specular);if(e.specularIntensity!==void 0)this.specularIntensity=e.specularIntensity;if(e.specularColor!==void 0&&this.specularColor!==void 0)this.specularColor.setHex(e.specularColor);if(e.shininess!==void 0)this.shininess=e.shininess;if(e.clearcoat!==void 0)this.clearcoat=e.clearcoat;if(e.clearcoatRoughness!==void 0)this.clearcoatRoughness=e.clearcoatRoughness;if(e.diffuseRoughness!==void 0)this.diffuseRoughness=e.diffuseRoughness;if(e.dispersion!==void 0)this.dispersion=e.dispersion;if(e.retroreflectivity!==void 0)this.retroreflectivity=e.retroreflectivity;if(e.iridescence!==void 0)this.iridescence=e.iridescence;if(e.iridescenceIOR!==void 0)this.iridescenceIOR=e.iridescenceIOR;if(e.iridescenceThicknessMinimum!==void 0)this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum;if(e.iridescenceThicknessMaximum!==void 0)this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum;if(e.iridescenceThicknessRange!==void 0)this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1];if(e.transmission!==void 0)this.transmission=e.transmission;if(e.thickness!==void 0)this.thickness=e.thickness;if(e.attenuationDistance!==void 0)this.attenuationDistance=e.attenuationDistance;if(e.attenuationColor!==void 0&&this.attenuationColor!==void 0)this.attenuationColor.setHex(e.attenuationColor);if(e.anisotropy!==void 0)this.anisotropy=e.anisotropy;if(e.anisotropyRotation!==void 0)this.anisotropyRotation=e.anisotropyRotation;if(e.fog!==void 0)this.fog=e.fog;if(e.flatShading!==void 0)this.flatShading=e.flatShading;if(e.blending!==void 0)this.blending=e.blending;if(e.combine!==void 0)this.combine=e.combine;if(e.side!==void 0)this.side=e.side;if(e.shadowSide!==void 0)this.shadowSide=e.shadowSide;if(e.opacity!==void 0)this.opacity=e.opacity;if(e.transparent!==void 0)this.transparent=e.transparent;if(e.alphaTest!==void 0)this.alphaTest=e.alphaTest;if(e.alphaHash!==void 0)this.alphaHash=e.alphaHash;if(e.depthFunc!==void 0)this.depthFunc=e.depthFunc;if(e.depthTest!==void 0)this.depthTest=e.depthTest;if(e.depthWrite!==void 0)this.depthWrite=e.depthWrite;if(e.colorWrite!==void 0)this.colorWrite=e.colorWrite;if(e.clippingPlanes!==void 0)this.clippingPlanes=e.clippingPlanes.map((i)=>new pn().fromJSON(i));if(e.clipIntersection!==void 0)this.clipIntersection=e.clipIntersection;if(e.clipShadows!==void 0)this.clipShadows=e.clipShadows;if(e.depthPacking!==void 0)this.depthPacking=e.depthPacking;if(e.blendSrc!==void 0)this.blendSrc=e.blendSrc;if(e.blendDst!==void 0)this.blendDst=e.blendDst;if(e.blendEquation!==void 0)this.blendEquation=e.blendEquation;if(e.blendSrcAlpha!==void 0)this.blendSrcAlpha=e.blendSrcAlpha;if(e.blendDstAlpha!==void 0)this.blendDstAlpha=e.blendDstAlpha;if(e.blendEquationAlpha!==void 0)this.blendEquationAlpha=e.blendEquationAlpha;if(e.blendColor!==void 0&&this.blendColor!==void 0)this.blendColor.setHex(e.blendColor);if(e.blendAlpha!==void 0)this.blendAlpha=e.blendAlpha;if(e.stencilWriteMask!==void 0)this.stencilWriteMask=e.stencilWriteMask;if(e.stencilFunc!==void 0)this.stencilFunc=e.stencilFunc;if(e.stencilRef!==void 0)this.stencilRef=e.stencilRef;if(e.stencilFuncMask!==void 0)this.stencilFuncMask=e.stencilFuncMask;if(e.stencilFail!==void 0)this.stencilFail=e.stencilFail;if(e.stencilZFail!==void 0)this.stencilZFail=e.stencilZFail;if(e.stencilZPass!==void 0)this.stencilZPass=e.stencilZPass;if(e.stencilWrite!==void 0)this.stencilWrite=e.stencilWrite;if(e.wireframe!==void 0)this.wireframe=e.wireframe;if(e.wireframeLinewidth!==void 0)this.wireframeLinewidth=e.wireframeLinewidth;if(e.wireframeLinecap!==void 0)this.wireframeLinecap=e.wireframeLinecap;if(e.wireframeLinejoin!==void 0)this.wireframeLinejoin=e.wireframeLinejoin;if(e.rotation!==void 0)this.rotation=e.rotation;if(e.linewidth!==void 0)this.linewidth=e.linewidth;if(e.linecap!==void 0)this.linecap=e.linecap;if(e.linejoin!==void 0)this.linejoin=e.linejoin;if(e.dashSize!==void 0)this.dashSize=e.dashSize;if(e.gapSize!==void 0)this.gapSize=e.gapSize;if(e.scale!==void 0)this.scale=e.scale;if(e.polygonOffset!==void 0)this.polygonOffset=e.polygonOffset;if(e.polygonOffsetFactor!==void 0)this.polygonOffsetFactor=e.polygonOffsetFactor;if(e.polygonOffsetUnits!==void 0)this.polygonOffsetUnits=e.polygonOffsetUnits;if(e.dithering!==void 0)this.dithering=e.dithering;if(e.alphaToCoverage!==void 0)this.alphaToCoverage=e.alphaToCoverage;if(e.premultipliedAlpha!==void 0)this.premultipliedAlpha=e.premultipliedAlpha;if(e.forceSinglePass!==void 0)this.forceSinglePass=e.forceSinglePass;if(e.allowOverride!==void 0)this.allowOverride=e.allowOverride;if(e.visible!==void 0)this.visible=e.visible;if(e.toneMapped!==void 0)this.toneMapped=e.toneMapped;if(e.userData!==void 0)this.userData=e.userData;if(e.vertexColors!==void 0)if(typeof e.vertexColors==="number")this.vertexColors=e.vertexColors>0;else this.vertexColors=e.vertexColors;if(e.size!==void 0)this.size=e.size;if(e.sizeAttenuation!==void 0)this.sizeAttenuation=e.sizeAttenuation;if(e.map!==void 0)this.map=t[e.map]||null;if(e.matcap!==void 0)this.matcap=t[e.matcap]||null;if(e.alphaMap!==void 0)this.alphaMap=t[e.alphaMap]||null;if(e.bumpMap!==void 0)this.bumpMap=t[e.bumpMap]||null;if(e.bumpScale!==void 0)this.bumpScale=e.bumpScale;if(e.normalMap!==void 0)this.normalMap=t[e.normalMap]||null;if(e.normalMapType!==void 0)this.normalMapType=e.normalMapType;if(e.normalScale!==void 0){let i=e.normalScale;if(Array.isArray(i)===!1)i=[i,i];this.normalScale=new X().fromArray(i)}if(e.displacementMap!==void 0)this.displacementMap=t[e.displacementMap]||null;if(e.displacementScale!==void 0)this.displacementScale=e.displacementScale;if(e.displacementBias!==void 0)this.displacementBias=e.displacementBias;if(e.roughnessMap!==void 0)this.roughnessMap=t[e.roughnessMap]||null;if(e.metalnessMap!==void 0)this.metalnessMap=t[e.metalnessMap]||null;if(e.emissiveMap!==void 0)this.emissiveMap=t[e.emissiveMap]||null;if(e.emissiveIntensity!==void 0)this.emissiveIntensity=e.emissiveIntensity;if(e.specularMap!==void 0)this.specularMap=t[e.specularMap]||null;if(e.specularIntensityMap!==void 0)this.specularIntensityMap=t[e.specularIntensityMap]||null;if(e.specularColorMap!==void 0)this.specularColorMap=t[e.specularColorMap]||null;if(e.envMap!==void 0)this.envMap=t[e.envMap]||null;if(e.envMapRotation!==void 0)this.envMapRotation.fromArray(e.envMapRotation);if(e.envMapIntensity!==void 0)this.envMapIntensity=e.envMapIntensity;if(e.reflectivity!==void 0)this.reflectivity=e.reflectivity;if(e.refractionRatio!==void 0)this.refractionRatio=e.refractionRatio;if(e.lightMap!==void 0)this.lightMap=t[e.lightMap]||null;if(e.lightMapIntensity!==void 0)this.lightMapIntensity=e.lightMapIntensity;if(e.aoMap!==void 0)this.aoMap=t[e.aoMap]||null;if(e.aoMapIntensity!==void 0)this.aoMapIntensity=e.aoMapIntensity;if(e.gradientMap!==void 0)this.gradientMap=t[e.gradientMap]||null;if(e.clearcoatMap!==void 0)this.clearcoatMap=t[e.clearcoatMap]||null;if(e.clearcoatRoughnessMap!==void 0)this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null;if(e.clearcoatNormalMap!==void 0)this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null;if(e.clearcoatNormalScale!==void 0)this.clearcoatNormalScale=new X().fromArray(e.clearcoatNormalScale);if(e.diffuseRoughnessMap!==void 0)this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null;if(e.iridescenceMap!==void 0)this.iridescenceMap=t[e.iridescenceMap]||null;if(e.iridescenceThicknessMap!==void 0)this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null;if(e.transmissionMap!==void 0)this.transmissionMap=t[e.transmissionMap]||null;if(e.thicknessMap!==void 0)this.thicknessMap=t[e.thicknessMap]||null;if(e.anisotropyMap!==void 0)this.anisotropyMap=t[e.anisotropyMap]||null;if(e.sheenColorMap!==void 0)this.sheenColorMap=t[e.sheenColorMap]||null;if(e.sheenRoughnessMap!==void 0)this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null;return this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let n=t.length;i=Array(n);for(let r=0;r!==n;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){if(e===!0)this.version++}}class Xs extends zt{constructor(e){super();this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new fe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}var qo,bl=new A,Zo=new A,Ko=new A,Jo=new X,Tl=new X,vp=new Be,$c=new A,El=new A,Qc=new A,yp=new X,kf=new X,Mp=new X;class wl extends ct{constructor(e=new Xs){super();if(this.isSprite=!0,this.type="Sprite",qo===void 0){qo=new Ve;let t=new Float32Array([-0.5,-0.5,0,0,0,0.5,-0.5,0,1,0,0.5,0.5,0,1,1,-0.5,0.5,0,0,1]),i=new Gr(t,5);qo.setIndex([0,1,2,0,2,3]),qo.setAttribute("position",new mr(i,3,0,!1)),qo.setAttribute("uv",new mr(i,2,3,!1))}this.geometry=qo,this.material=e,this.center=new X(0.5,0.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){if(e.camera===null)We('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.');if(Zo.setFromMatrixScale(this.matrixWorld),vp.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Ko.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1)Zo.multiplyScalar(-Ko.z);let i=this.material.rotation,n,r;if(i!==0)r=Math.cos(i),n=Math.sin(i);let s=this.center;eh($c.set(-0.5,-0.5,0),Ko,s,Zo,n,r),eh(El.set(0.5,-0.5,0),Ko,s,Zo,n,r),eh(Qc.set(0.5,0.5,0),Ko,s,Zo,n,r),yp.set(0,0),kf.set(1,0),Mp.set(1,1);let o=e.ray.intersectTriangle($c,El,Qc,!1,bl);if(o===null){if(eh(El.set(-0.5,0.5,0),Ko,s,Zo,n,r),kf.set(0,1),o=e.ray.intersectTriangle($c,Qc,El,!1,bl),o===null)return}let a=e.ray.origin.distanceTo(bl);if(a<e.near||a>e.far)return;t.push({distance:a,point:bl.clone(),uv:Yi.getInterpolation(bl,$c,El,Qc,yp,kf,Mp,new X),face:null,object:this})}copy(e,t){if(super.copy(e,t),e.center!==void 0)this.center.copy(e.center);return this.material=e.material,this}toJSON(e){let t=super.toJSON(e);return t.object.center=this.center.toArray(),t}}function eh(e,t,i,n,r,s){if(Jo.subVectors(e,i).addScalar(0.5).multiply(n),r!==void 0)Tl.x=s*Jo.x-r*Jo.y,Tl.y=r*Jo.x+s*Jo.y;else Tl.copy(Jo);e.copy(t),e.x+=Tl.x,e.y+=Tl.y,e.applyMatrix4(vp)}var zr=new A,Vf=new A,th=new A,ih=new A;class Vn{constructor(e=new A,t=new A(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,zr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);if(i<0)return t.copy(this.origin);return t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=zr.subVectors(e,this.origin).dot(this.direction);if(t<0)return this.origin.distanceToSquared(e);return zr.copy(this.origin).addScaledVector(this.direction,t),zr.distanceToSquared(e)}distanceSqToSegment(e,t,i,n){Vf.copy(e).add(t).multiplyScalar(0.5),th.copy(t).sub(e).normalize(),ih.copy(this.origin).sub(Vf);let r=e.distanceTo(t)*0.5,s=-this.direction.dot(th),o=ih.dot(this.direction),a=-ih.dot(th),l=ih.lengthSq(),c=Math.abs(1-s*s),h,u,f,m;if(c>0)if(h=s*a-o,u=s*o-a,m=r*c,h>=0)if(u>=-m)if(u<=m){let g=1/c;h*=g,u*=g,f=h*(h+s*u+2*o)+u*(s*h+u+2*a)+l}else u=r,h=Math.max(0,-(s*u+o)),f=-h*h+u*(u+2*a)+l;else u=-r,h=Math.max(0,-(s*u+o)),f=-h*h+u*(u+2*a)+l;else if(u<=-m)h=Math.max(0,-(-s*r+o)),u=h>0?-r:Math.min(Math.max(-r,-a),r),f=-h*h+u*(u+2*a)+l;else if(u<=m)h=0,u=Math.min(Math.max(-r,-a),r),f=u*(u+2*a)+l;else h=Math.max(0,-(s*r+o)),u=h>0?r:Math.min(Math.max(-r,-a),r),f=-h*h+u*(u+2*a)+l;else u=s>0?-r:r,h=Math.max(0,-(s*u+o)),f=-h*h+u*(u+2*a)+l;if(i)i.copy(this.origin).addScaledVector(this.direction,h);if(n)n.copy(Vf).addScaledVector(th,u);return f}intersectSphere(e,t){if(e.radius<0)return null;zr.subVectors(e.center,this.origin);let i=zr.dot(this.direction),n=zr.dot(zr)-i*i,r=e.radius*e.radius;if(n>r)return null;let s=Math.sqrt(r-n),o=i-s,a=i+s;if(a<0)return null;if(o<0)return this.at(a,t);return this.at(o,t)}intersectsSphere(e){if(e.radius<0)return!1;return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0){if(e.distanceToPoint(this.origin)===0)return 0;return null}let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);if(i===null)return null;return this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);if(t===0)return!0;if(e.normal.dot(this.direction)*t<0)return!0;return!1}intersectBox(e,t){let i,n,r,s,o,a,l=1/this.direction.x,c=1/this.direction.y,h=1/this.direction.z,u=this.origin;if(l>=0)i=(e.min.x-u.x)*l,n=(e.max.x-u.x)*l;else i=(e.max.x-u.x)*l,n=(e.min.x-u.x)*l;if(c>=0)r=(e.min.y-u.y)*c,s=(e.max.y-u.y)*c;else r=(e.max.y-u.y)*c,s=(e.min.y-u.y)*c;if(i>s||r>n)return null;if(r>i||isNaN(i))i=r;if(s<n||isNaN(n))n=s;if(h>=0)o=(e.min.z-u.z)*h,a=(e.max.z-u.z)*h;else o=(e.max.z-u.z)*h,a=(e.min.z-u.z)*h;if(i>a||o>n)return null;if(o>i||i!==i)i=o;if(a<n||n!==n)n=a;if(n<0)return null;return this.at(i>=0?i:n,t)}intersectsBox(e){return this.intersectBox(e,zr)!==null}intersectTriangle(e,t,i,n,r){let s=this.origin,o=this.direction,{x:a,y:l,z:c}=o,h=e.x-s.x,u=e.y-s.y,f=e.z-s.z,m=t.x-s.x,g=t.y-s.y,x=t.z-s.z,d=i.x-s.x,p=i.y-s.y,_=i.z-s.z,y=Math.abs(a),v=Math.abs(l),T=Math.abs(c),w,M,b,C,F,D,V,ee,I,J,L,N;if(y>=v&&y>=T)if(b=a,D=h,I=m,N=d,a>=0)w=l,M=c,C=u,F=f,V=g,ee=x,J=p,L=_;else w=c,M=l,C=f,F=u,V=x,ee=g,J=_,L=p;else if(v>=T)if(b=l,D=u,I=g,N=p,l>=0)w=c,M=a,C=f,F=h,V=x,ee=m,J=_,L=d;else w=a,M=c,C=h,F=f,V=m,ee=x,J=d,L=_;else if(b=c,D=f,I=x,N=_,c>=0)w=a,M=l,C=h,F=u,V=m,ee=g,J=d,L=p;else w=l,M=a,C=u,F=h,V=g,ee=m,J=p,L=d;if(b===0)return null;let j=w/b,z=M/b,H=1/b,Y=C-j*D,ae=F-z*D,G=V-j*I,Q=ee-z*I,Me=J-j*N,me=L-z*N,Fe=Me*Q-me*G,we=Y*me-ae*Me,ut=G*ae-Q*Y;if(n){if(Fe<0||we<0||ut<0)return null}else if((Fe<0||we<0||ut<0)&&(Fe>0||we>0||ut>0))return null;let Ue=Fe+we+ut;if(Ue===0)return null;let Oe=H*(Fe*D+we*I+ut*N);if(Ue>0?Oe<0:Oe>0)return null;return this.at(Oe/Ue,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Mt extends zt{constructor(e){super();this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new fe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new sn,this.combine=Ls,this.reflectivity=1,this.refractionRatio=0.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}var Sp=new Be,Ys=new Vn,nh=new ci,bp=new A,rh=new A,sh=new A,oh=new A,Wf=new A,ah=new A,Tp=new A,lh=new A;class ie extends ct{constructor(e=new Ve,t=new Mt){super();this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){if(super.copy(e,t),e.morphTargetInfluences!==void 0)this.morphTargetInfluences=e.morphTargetInfluences.slice();else this.morphTargetInfluences=void 0;if(e.morphTargetDictionary!==void 0)this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary);else this.morphTargetDictionary=void 0;return this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=n.length;r<s;r++){let o=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let i=this.geometry,n=i.attributes.position,r=i.morphAttributes.position,s=i.morphTargetsRelative;t.fromBufferAttribute(n,e);let o=this.morphTargetInfluences;if(r&&o){ah.set(0,0,0);for(let a=0,l=r.length;a<l;a++){let c=o[a],h=r[a];if(c===0)continue;if(Wf.fromBufferAttribute(h,e),s)ah.addScaledVector(Wf,c);else ah.addScaledVector(Wf.sub(t),c)}t.add(ah)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,n=this.material,r=this.matrixWorld;if(n===void 0)return;if(i.boundingSphere===null)i.computeBoundingSphere();if(nh.copy(i.boundingSphere),nh.applyMatrix4(r),Ys.copy(e.ray).recast(e.near),nh.containsPoint(Ys.origin)===!1){if(Ys.intersectSphere(nh,bp)===null)return;if(Ys.origin.distanceToSquared(bp)>(e.far-e.near)**2)return}if(Sp.copy(r).invert(),Ys.copy(e.ray).applyMatrix4(Sp),i.boundingBox!==null){if(Ys.intersectsBox(i.boundingBox)===!1)return}this._computeIntersections(e,t,Ys)}_computeIntersections(e,t,i){let n,r=this.geometry,s=this.material,o=r.index,a=r.attributes.position,l=r.attributes.uv,c=r.attributes.uv1,h=r.attributes.normal,{groups:u,drawRange:f}=r;if(o!==null)if(Array.isArray(s))for(let m=0,g=u.length;m<g;m++){let x=u[m],d=s[x.materialIndex],p=Math.max(x.start,f.start),_=Math.min(o.count,Math.min(x.start+x.count,f.start+f.count));for(let y=p,v=_;y<v;y+=3){let T=o.getX(y),w=o.getX(y+1),M=o.getX(y+2);if(n=ch(this,d,e,i,l,c,h,T,w,M),n)n.faceIndex=Math.floor(y/3),n.face.materialIndex=x.materialIndex,t.push(n)}}else{let m=Math.max(0,f.start),g=Math.min(o.count,f.start+f.count);for(let x=m,d=g;x<d;x+=3){let p=o.getX(x),_=o.getX(x+1),y=o.getX(x+2);if(n=ch(this,s,e,i,l,c,h,p,_,y),n)n.faceIndex=Math.floor(x/3),t.push(n)}}else if(a!==void 0)if(Array.isArray(s))for(let m=0,g=u.length;m<g;m++){let x=u[m],d=s[x.materialIndex],p=Math.max(x.start,f.start),_=Math.min(a.count,Math.min(x.start+x.count,f.start+f.count));for(let y=p,v=_;y<v;y+=3){let T=y,w=y+1,M=y+2;if(n=ch(this,d,e,i,l,c,h,T,w,M),n)n.faceIndex=Math.floor(y/3),n.face.materialIndex=x.materialIndex,t.push(n)}}else{let m=Math.max(0,f.start),g=Math.min(a.count,f.start+f.count);for(let x=m,d=g;x<d;x+=3){let p=x,_=x+1,y=x+2;if(n=ch(this,s,e,i,l,c,h,p,_,y),n)n.faceIndex=Math.floor(x/3),t.push(n)}}}}function n1(e,t,i,n,r,s,o,a){let l;if(t.side===Kt)l=n.intersectTriangle(o,s,r,!0,a);else l=n.intersectTriangle(r,s,o,t.side===yn,a);if(l===null)return null;lh.copy(a),lh.applyMatrix4(e.matrixWorld);let c=i.ray.origin.distanceTo(lh);if(c<i.near||c>i.far)return null;return{distance:c,point:lh.clone(),object:e}}function ch(e,t,i,n,r,s,o,a,l,c){e.getVertexPosition(a,rh),e.getVertexPosition(l,sh),e.getVertexPosition(c,oh);let h=n1(e,t,i,n,rh,sh,oh,Tp);if(h){let u=new A;if(Yi.getBarycoord(Tp,rh,sh,oh,u),r)h.uv=Yi.getInterpolatedAttribute(r,a,l,c,u,new X);if(s)h.uv1=Yi.getInterpolatedAttribute(s,a,l,c,u,new X);if(o){if(h.normal=Yi.getInterpolatedAttribute(o,a,l,c,u,new A),h.normal.dot(n.direction)>0)h.normal.multiplyScalar(-1)}let f={a,b:l,c,normal:new A,materialIndex:0};Yi.getNormal(rh,sh,oh,f.normal),h.face=f,h.barycoord=u}return h}var Al=new bt,Ep=new bt,wp=new bt,r1=new bt,Ap=new Be,hh=new A,Xf=new ci,Rp=new Be,Yf=new Vn;class Rl extends ie{constructor(e,t){super(e,t);this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=yf,this.bindMatrix=new Be,this.bindMatrixInverse=new Be,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;if(this.boundingBox===null)this.boundingBox=new _i;this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,hh),this.boundingBox.expandByPoint(hh)}computeBoundingSphere(){let e=this.geometry;if(this.boundingSphere===null)this.boundingSphere=new ci;this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,hh),this.boundingSphere.expandByPoint(hh)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}raycast(e,t){let i=this.material,n=this.matrixWorld;if(i===void 0)return;if(this.boundingSphere===null)this.computeBoundingSphere();if(Xf.copy(this.boundingSphere),Xf.applyMatrix4(n),e.ray.intersectsSphere(Xf)===!1)return;if(Rp.copy(n).invert(),Yf.copy(e.ray).applyMatrix4(Rp),this.boundingBox!==null){if(Yf.intersectsBox(this.boundingBox)===!1)return}this._computeIntersections(e,t,Yf)}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){if(this.skeleton=e,t===void 0)this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld;this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new bt,t=this.geometry.attributes.skinWeight;for(let i=0,n=t.count;i<n;i++){e.fromBufferAttribute(t,i);let r=1/e.manhattanLength();if(r!==1/0)e.multiplyScalar(r);else e.set(1,0,0,0);t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){if(super.updateMatrixWorld(e),this.bindMode===yf)this.bindMatrixInverse.copy(this.matrixWorld).invert();else if(this.bindMode===Wd)this.bindMatrixInverse.copy(this.bindMatrix).invert();else be("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let i=this.skeleton,n=this.geometry;if(Ep.fromBufferAttribute(n.attributes.skinIndex,e),wp.fromBufferAttribute(n.attributes.skinWeight,e),t.isVector4)Al.copy(t),t.set(0,0,0,0);else Al.set(t.x,t.y,t.z,1),t.set(0,0,0);Al.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){let s=wp.getComponent(r);if(s!==0){let o=Ep.getComponent(r);Ap.multiplyMatrices(i.bones[o].matrixWorld,i.boneInverses[o]),t.addScaledVector(r1.copy(Al).applyMatrix4(Ap),s)}}if(t.isVector4)t.w=Al.w;return t.applyMatrix4(this.bindMatrixInverse)}}class qs extends ct{constructor(){super();this.isBone=!0,this.type="Bone"}}class ar extends Ct{constructor(e=null,t=1,i=1,n,r,s,o,a,l=Vt,c=Vt,h,u){super(null,s,o,a,l,c,n,r,h,u);this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}var Cp=new Be,s1=new Be;class jo{constructor(e=[],t=[]){this.uuid=xi(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.previousBoneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){be("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,n=this.bones.length;i<n;i++)this.boneInverses.push(new Be)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let i=new Be;if(this.bones[e])i.copy(this.bones[e].matrixWorld).invert();this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let i=this.bones[e];if(i)i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let i=this.bones[e];if(i){if(i.parent&&i.parent.isBone)i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld);else i.matrix.copy(i.matrixWorld);i.matrix.decompose(i.position,i.quaternion,i.scale)}}}update(){let e=this.bones,t=this.boneInverses,i=this.boneMatrices,n=this.boneTexture;for(let r=0,s=e.length;r<s;r++){let o=e[r]?e[r].matrixWorld:s1;Cp.multiplyMatrices(o,t[r]),Cp.toArray(i,r*16)}if(n!==null)n.needsUpdate=!0}clone(){return new jo(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let i=new ar(t,e,e,Pi,di);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){let n=this.bones[t];if(n.name===e)return n}return}dispose(){if(this.boneTexture!==null)this.boneTexture.dispose(),this.boneTexture=null;if(this.previousBoneTexture!==null)this.previousBoneTexture.dispose(),this.previousBoneTexture=null}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,n=e.bones.length;i<n;i++){let r=e.bones[i],s=t[r];if(s===void 0)be("Skeleton: No bone found with UUID:",r),s=new qs;this.bones.push(s),this.boneInverses.push(new Be().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,i=this.boneInverses;for(let n=0,r=t.length;n<r;n++){let s=t[n];e.bones.push(s.uuid);let o=i[n];e.boneInverses.push(o.toArray())}return e}}class lr extends qt{constructor(e,t,i,n=1){super(e,t,i);this.isInstancedBufferAttribute=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}var $o=new Be,Pp=new Be,fh=[],Ip=new _i,o1=new Be,Cl=new ie,Pl=new ci;class Rn extends ie{constructor(e,t,i){super(e,t);this.isInstancedMesh=!0,this.instanceMatrix=new lr(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let n=0;n<i;n++)this.setMatrixAt(n,o1)}computeBoundingBox(){let e=this.geometry,t=this.count;if(this.boundingBox===null)this.boundingBox=new _i;if(e.boundingBox===null)e.computeBoundingBox();this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,$o),Ip.copy(e.boundingBox).applyMatrix4($o),this.boundingBox.union(Ip)}computeBoundingSphere(){let e=this.geometry,t=this.count;if(this.boundingSphere===null)this.boundingSphere=new ci;if(e.boundingSphere===null)e.computeBoundingSphere();this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,$o),Pl.copy(e.boundingSphere).applyMatrix4($o),this.boundingSphere.union(Pl)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){if(this.instanceColor===null)return t.setRGB(1,1,1);else return t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,n=this.morphTexture.source.data.data,r=i.length+1,s=e*r+1;for(let o=0;o<i.length;o++)i[o]=n[s+o]}raycast(e,t){let i=this.matrixWorld,n=this.count;if(Cl.geometry=this.geometry,Cl.material=this.material,Cl.material===void 0)return;if(this.boundingSphere===null)this.computeBoundingSphere();if(Pl.copy(this.boundingSphere),Pl.applyMatrix4(i),e.ray.intersectsSphere(Pl)===!1)return;for(let r=0;r<n;r++){this.getMatrixAt(r,$o),Pp.multiplyMatrices(i,$o),Cl.matrixWorld=Pp,Cl.raycast(e,fh);for(let s=0,o=fh.length;s<o;s++){let a=fh[s];a.instanceId=r,a.object=this,t.push(a)}fh.length=0}}setColorAt(e,t){if(this.instanceColor===null)this.instanceColor=new lr(new Float32Array(this.instanceMatrix.count*3).fill(1),3);return t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let i=t.morphTargetInfluences,n=i.length+1;if(this.morphTexture===null)this.morphTexture=new ar(new Float32Array(n*this.count),n,this.count,To,di);let r=this.morphTexture.source.data.data,s=0;for(let l=0;l<i.length;l++)s+=i[l];let o=this.geometry.morphTargetsRelative?1:1-s,a=n*e;return r[a]=o,r.set(i,a+1),this}updateMorphTargets(){}dispose(){if(super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null)this.instanceColor.dispose();if(this.morphTexture!==null)this.morphTexture.dispose(),this.morphTexture=null}}var Zs=new ci,a1=new X(0.5,0.5),uh=new A;class Wn{constructor(e=new pn,t=new pn,i=new pn,n=new pn,r=new pn,s=new pn){this.planes=[e,t,i,n,r,s]}set(e,t,i,n,r,s){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(n),o[4].copy(r),o[5].copy(s),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Oi,i=!1){let n=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],h=r[5],u=r[6],f=r[7],m=r[8],g=r[9],x=r[10],d=r[11],p=r[12],_=r[13],y=r[14],v=r[15];if(n[0].setComponents(l-s,f-c,d-m,v-p).normalize(),n[1].setComponents(l+s,f+c,d+m,v+p).normalize(),n[2].setComponents(l+o,f+h,d+g,v+_).normalize(),n[3].setComponents(l-o,f-h,d-g,v-_).normalize(),i)n[4].setComponents(a,u,x,y).normalize(),n[5].setComponents(l-a,f-u,d-x,v-y).normalize();else if(n[4].setComponents(l-a,f-u,d-x,v-y).normalize(),t===Oi)n[5].setComponents(l+a,f+u,d+x,v+y).normalize();else if(t===dr)n[5].setComponents(a,u,x,y).normalize();else throw Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0){if(e.boundingSphere===null)e.computeBoundingSphere();Zs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld)}else{let t=e.geometry;if(t.boundingSphere===null)t.computeBoundingSphere();Zs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Zs)}intersectsSprite(e){Zs.center.set(0,0,0);let t=a1.distanceTo(e.center);return Zs.radius=0.7071067811865476+t,Zs.applyMatrix4(e.matrixWorld),this.intersectsSphere(Zs)}intersectsSphere(e){let t=this.planes,i=e.center,n=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<n)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let n=t[i];if(uh.x=n.normal.x>0?e.max.x:e.min.x,uh.y=n.normal.y>0?e.max.y:e.min.y,uh.z=n.normal.z>0?e.max.z:e.min.z,n.distanceToPoint(uh)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}var Lp=new Be;class Qo{constructor(){this.coordinateSystem=Oi,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,i=this._frustums;for(let n=0;n<t.length;n++){let r=t[n];if(Lp.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),i[n]===void 0)i[n]=new Wn;i[n].setFromProjectionMatrix(Lp,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,i=e._frustums;for(let n=0;n<e._count;n++){if(t[n]===void 0)t[n]=new Wn;t[n].copy(i[n])}return this._count=e._count,this}clone(){return new Qo().copy(this)}}class yi extends zt{constructor(e){super();this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new fe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}var mh=new A,gh=new A,Dp=new Be,Il=new Vn,dh=new ci,qf=new A,Np=new A;class Xn extends ct{constructor(e=new Ve,t=new yi){super();this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){if(super.copy(e,t),e.morphTargetInfluences!==void 0)this.morphTargetInfluences=e.morphTargetInfluences.slice();else this.morphTargetInfluences=void 0;if(e.morphTargetDictionary!==void 0)this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary);else this.morphTargetDictionary=void 0;return this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let n=1,r=t.count;n<r;n++)mh.fromBufferAttribute(t,n-1),gh.fromBufferAttribute(t,n),i[n]=i[n-1],i[n]+=mh.distanceTo(gh);e.setAttribute("lineDistance",new Ee(i,1))}else be("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,n=this.matrixWorld,r=e.params.Line.threshold,s=i.drawRange;if(i.boundingSphere===null)i.computeBoundingSphere();if(dh.copy(i.boundingSphere),dh.applyMatrix4(n),dh.radius+=r,e.ray.intersectsSphere(dh)===!1)return;Dp.copy(n).invert(),Il.copy(e.ray).applyMatrix4(Dp);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),a=o*o,l=this.isLineSegments?2:1,c=i.index,u=i.attributes.position;if(c!==null){let f=Math.max(0,s.start),m=Math.min(c.count,s.start+s.count);for(let g=f,x=m-1;g<x;g+=l){let d=c.getX(g),p=c.getX(g+1),_=ph(this,e,Il,a,d,p,g);if(_)t.push(_)}if(this.isLineLoop){let g=c.getX(m-1),x=c.getX(f),d=ph(this,e,Il,a,g,x,m-1);if(d)t.push(d)}}else{let f=Math.max(0,s.start),m=Math.min(u.count,s.start+s.count);for(let g=f,x=m-1;g<x;g+=l){let d=ph(this,e,Il,a,g,g+1,g);if(d)t.push(d)}if(this.isLineLoop){let g=ph(this,e,Il,a,m-1,f,m-1);if(g)t.push(g)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=n.length;r<s;r++){let o=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function ph(e,t,i,n,r,s,o){let a=e.geometry.attributes.position;if(mh.fromBufferAttribute(a,r),gh.fromBufferAttribute(a,s),i.distanceSqToSegment(mh,gh,qf,Np)>n)return;qf.applyMatrix4(e.matrixWorld);let c=t.ray.origin.distanceTo(qf);if(c<t.near||c>t.far)return;return{distance:c,point:Np.clone().applyMatrix4(e.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:e}}var Fp=new A,Up=new A;class an extends Xn{constructor(e,t){super(e,t);this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let n=0,r=t.count;n<r;n+=2)Fp.fromBufferAttribute(t,n),Up.fromBufferAttribute(t,n+1),i[n]=n===0?0:i[n-1],i[n+1]=i[n]+Fp.distanceTo(Up);e.setAttribute("lineDistance",new Ee(i,1))}else be("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Ll extends Xn{constructor(e,t){super(e,t);this.isLineLoop=!0,this.type="LineLoop"}}class kr extends zt{constructor(e){super();this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new fe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}var Bp=new Be,Zf=new Vn,xh=new ci,_h=new A;class Ks extends ct{constructor(e=new Ve,t=new kr){super();this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){if(super.copy(e,t),e.morphTargetInfluences!==void 0)this.morphTargetInfluences=e.morphTargetInfluences.slice();else this.morphTargetInfluences=void 0;if(e.morphTargetDictionary!==void 0)this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary);else this.morphTargetDictionary=void 0;return this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,n=this.matrixWorld,r=e.params.Points.threshold,s=i.drawRange;if(i.boundingSphere===null)i.computeBoundingSphere();if(xh.copy(i.boundingSphere),xh.applyMatrix4(n),xh.radius+=r,e.ray.intersectsSphere(xh)===!1)return;Bp.copy(n).invert(),Zf.copy(e.ray).applyMatrix4(Bp);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),a=o*o,l=i.index,h=i.attributes.position;if(l!==null){let u=Math.max(0,s.start),f=Math.min(l.count,s.start+s.count);for(let m=u,g=f;m<g;m++){let x=l.getX(m);_h.fromBufferAttribute(h,x),Op(_h,x,a,n,e,t,this)}}else{let u=Math.max(0,s.start),f=Math.min(h.count,s.start+s.count);for(let m=u,g=f;m<g;m++)_h.fromBufferAttribute(h,m),Op(_h,m,a,n,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=n.length;r<s;r++){let o=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Op(e,t,i,n,r,s,o){let a=Zf.distanceSqToPoint(e);if(a<i){let l=new A;Zf.closestPointToPoint(e,l),l.applyMatrix4(n);let c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class us extends Ct{constructor(e=[],t=Hn,i,n,r,s,o,a,l,c){super(e,t,i,n,r,s,o,a,l,c);this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Gi extends Ct{constructor(e,t,i,n,r,s,o,a,l){super(e,t,i,n,r,s,o,a,l);this.isCanvasTexture=!0,this.needsUpdate=!0}}class Cn extends Ct{constructor(e,t,i=Ci,n,r,s,o=Vt,a=Vt,l,c=Mn,h=1){if(c!==Mn&&c!==Tn)throw Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:e,height:t,depth:h};super(u,n,r,s,o,a,c,i,l);this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new pr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class ea extends Cn{constructor(e,t=Ci,i=Hn,n,r,s=Vt,o=Vt,a,l=Mn){let c={width:e,height:e,depth:1},h=[c,c,c,c,c,c];super(e,e,t,i,n,r,s,o,a,l);this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class ta extends Ct{constructor(e=null){super();this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Et extends Ve{constructor(e=1,t=1,i=1,n=1,r=1,s=1){super();this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:n,heightSegments:r,depthSegments:s};let o=this;n=Math.floor(n),r=Math.floor(r),s=Math.floor(s);let a=[],l=[],c=[],h=[],u=0,f=0;m("z","y","x",-1,-1,i,t,e,s,r,0),m("z","y","x",1,-1,i,t,-e,s,r,1),m("x","z","y",1,1,e,i,t,n,s,2),m("x","z","y",1,-1,e,i,-t,n,s,3),m("x","y","z",1,-1,e,t,i,n,r,4),m("x","y","z",-1,-1,e,t,-i,n,r,5),this.setIndex(a),this.setAttribute("position",new Ee(l,3)),this.setAttribute("normal",new Ee(c,3)),this.setAttribute("uv",new Ee(h,2));function m(g,x,d,p,_,y,v,T,w,M,b){let C=y/w,F=v/M,D=y/2,V=v/2,ee=T/2,I=w+1,J=M+1,L=0,N=0,j=new A;for(let z=0;z<J;z++){let H=z*F-V;for(let Y=0;Y<I;Y++){let ae=Y*C-D;j[g]=ae*p,j[x]=H*_,j[d]=ee,l.push(j.x,j.y,j.z),j[g]=0,j[x]=0,j[d]=T>0?1:-1,c.push(j.x,j.y,j.z),h.push(Y/w),h.push(1-z/M),L+=1}}for(let z=0;z<M;z++)for(let H=0;H<w;H++){let Y=u+H+I*z,ae=u+H+I*(z+1),G=u+(H+1)+I*(z+1),Q=u+(H+1)+I*z;a.push(Y,ae,Q),a.push(ae,G,Q),N+=6}o.addGroup(f,N,b),f+=N,u+=L}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Et(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Dl extends Ve{constructor(e=1,t=1,i=4,n=8,r=1){super();this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:i,radialSegments:n,heightSegments:r},t=Math.max(0,t),i=Math.max(1,Math.floor(i)),n=Math.max(3,Math.floor(n)),r=Math.max(1,Math.floor(r));let s=[],o=[],a=[],l=[],c=t/2,h=Math.PI/2*e,u=t,f=2*h+u,m=i*2+r,g=n+1,x=new A,d=new A;for(let p=0;p<=m;p++){let _=0,y=0,v=0,T=0;if(p<=i){let b=p/i,C=b*Math.PI/2;y=-c-e*Math.cos(C),v=e*Math.sin(C),T=-e*Math.cos(C),_=b*h}else if(p<=i+r){let b=(p-i)/r;y=-c+b*t,v=e,T=0,_=h+b*u}else{let b=(p-i-r)/i,C=b*Math.PI/2;y=c+e*Math.sin(C),v=e*Math.cos(C),T=e*Math.sin(C),_=h+u+b*h}let w=Math.max(0,Math.min(1,_/f)),M=0;if(p===0)M=0.5/n;else if(p===m)M=-0.5/n;for(let b=0;b<=n;b++){let C=b/n,F=C*Math.PI*2,D=Math.sin(F),V=Math.cos(F);d.x=-v*V,d.y=y,d.z=v*D,o.push(d.x,d.y,d.z),x.set(-v*V,T,v*D),x.normalize(),a.push(x.x,x.y,x.z),l.push(C+M,w)}if(p>0){let b=(p-1)*g;for(let C=0;C<n;C++){let F=b+C,D=b+C+1,V=p*g+C,ee=p*g+C+1;s.push(F,D,V),s.push(D,ee,V)}}}this.setIndex(s),this.setAttribute("position",new Ee(o,3)),this.setAttribute("normal",new Ee(a,3)),this.setAttribute("uv",new Ee(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Dl(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}}class Vr extends Ve{constructor(e=1,t=32,i=0,n=Math.PI*2){super();this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:n},t=Math.max(3,t);let r=[],s=[],o=[],a=[],l=new A,c=new X;s.push(0,0,0),o.push(0,0,1),a.push(0.5,0.5);for(let h=0,u=3;h<=t;h++,u+=3){let f=i+h/t*n;l.x=e*Math.cos(f),l.y=e*Math.sin(f),s.push(l.x,l.y,l.z),o.push(0,0,1),c.x=(s[u]/e+1)/2,c.y=(s[u+1]/e+1)/2,a.push(c.x,c.y)}for(let h=1;h<=t;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new Ee(s,3)),this.setAttribute("normal",new Ee(o,3)),this.setAttribute("uv",new Ee(a,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vr(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class wt extends Ve{constructor(e=1,t=1,i=1,n=32,r=1,s=!1,o=0,a=Math.PI*2){super();this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:n,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a};let l=this;n=Math.floor(n),r=Math.floor(r);let c=[],h=[],u=[],f=[],m=0,g=[],x=i/2,d=0;if(p(),s===!1){if(e>0)_(!0);if(t>0)_(!1)}this.setIndex(c),this.setAttribute("position",new Ee(h,3)),this.setAttribute("normal",new Ee(u,3)),this.setAttribute("uv",new Ee(f,2));function p(){let y=new A,v=new A,T=0,w=(t-e)/i;for(let M=0;M<=r;M++){let b=[],C=M/r,F=C*(t-e)+e;for(let D=0;D<=n;D++){let V=D/n,ee=V*a+o,I=Math.sin(ee),J=Math.cos(ee);v.x=F*I,v.y=-C*i+x,v.z=F*J,h.push(v.x,v.y,v.z),y.set(I,w,J).normalize(),u.push(y.x,y.y,y.z),f.push(V,1-C),b.push(m++)}g.push(b)}for(let M=0;M<n;M++)for(let b=0;b<r;b++){let C=g[b][M],F=g[b+1][M],D=g[b+1][M+1],V=g[b][M+1];if(e>0||b!==0)c.push(C,F,V),T+=3;if(t>0||b!==r-1)c.push(F,D,V),T+=3}l.addGroup(d,T,0),d+=T}function _(y){let v=m,T=new X,w=new A,M=0,b=y===!0?e:t,C=y===!0?1:-1;for(let D=1;D<=n;D++)h.push(0,x*C,0),u.push(0,C,0),f.push(0.5,0.5),m++;let F=m;for(let D=0;D<=n;D++){let ee=D/n*a+o,I=Math.cos(ee),J=Math.sin(ee);w.x=b*J,w.y=x*C,w.z=b*I,h.push(w.x,w.y,w.z),u.push(0,C,0),T.x=I*0.5+0.5,T.y=J*0.5*C+0.5,f.push(T.x,T.y),m++}for(let D=0;D<n;D++){let V=v+D,ee=F+D;if(y===!0)c.push(ee,ee+1,V);else c.push(ee+1,ee,V);M+=3}l.addGroup(d,M,y===!0?1:2),d+=M}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wt(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Js extends wt{constructor(e=1,t=1,i=32,n=1,r=!1,s=0,o=Math.PI*2){super(0,e,t,i,n,r,s,o);this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:n,openEnded:r,thetaStart:s,thetaLength:o}}static fromJSON(e){return new Js(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class js extends Ve{constructor(e=[],t=[],i=1,n=0){super();this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:n};let r=[],s=[];if(o(n),l(i),c(),this.setAttribute("position",new Ee(r,3)),this.setAttribute("normal",new Ee(r.slice(),3)),this.setAttribute("uv",new Ee(s,2)),n===0)this.computeVertexNormals();else this.normalizeNormals();function o(p){let _=new A,y=new A,v=new A;for(let T=0;T<t.length;T+=3)f(t[T+0],_),f(t[T+1],y),f(t[T+2],v),a(_,y,v,p)}function a(p,_,y,v){let T=v+1,w=[];for(let M=0;M<=T;M++){w[M]=[];let b=p.clone().lerp(y,M/T),C=_.clone().lerp(y,M/T),F=T-M;for(let D=0;D<=F;D++)if(D===0&&M===T)w[M][D]=b;else w[M][D]=b.clone().lerp(C,D/F)}for(let M=0;M<T;M++)for(let b=0;b<2*(T-M)-1;b++){let C=Math.floor(b/2);if(b%2===0)u(w[M][C+1]),u(w[M+1][C]),u(w[M][C]);else u(w[M][C+1]),u(w[M+1][C+1]),u(w[M+1][C])}}function l(p){let _=new A;for(let y=0;y<r.length;y+=3)_.x=r[y+0],_.y=r[y+1],_.z=r[y+2],_.normalize().multiplyScalar(p),r[y+0]=_.x,r[y+1]=_.y,r[y+2]=_.z}function c(){let p=new A;for(let _=0;_<r.length;_+=3){p.x=r[_+0],p.y=r[_+1],p.z=r[_+2];let y=x(p)/2/Math.PI+0.5,v=d(p)/Math.PI+0.5;s.push(y,1-v)}m(),h()}function h(){for(let p=0;p<s.length;p+=6){let _=s[p+0],y=s[p+2],v=s[p+4],T=Math.max(_,y,v),w=Math.min(_,y,v);if(T>0.9&&w<0.1){if(_<0.2)s[p+0]+=1;if(y<0.2)s[p+2]+=1;if(v<0.2)s[p+4]+=1}}}function u(p){r.push(p.x,p.y,p.z)}function f(p,_){let y=p*3;_.x=e[y+0],_.y=e[y+1],_.z=e[y+2]}function m(){let p=new A,_=new A,y=new A,v=new A,T=new X,w=new X,M=new X;for(let b=0,C=0;b<r.length;b+=9,C+=6){p.set(r[b+0],r[b+1],r[b+2]),_.set(r[b+3],r[b+4],r[b+5]),y.set(r[b+6],r[b+7],r[b+8]),T.set(s[C+0],s[C+1]),w.set(s[C+2],s[C+3]),M.set(s[C+4],s[C+5]),v.copy(p).add(_).add(y).divideScalar(3);let F=x(v);g(T,C+0,p,F),g(w,C+2,_,F),g(M,C+4,y,F)}}function g(p,_,y,v){if(v<0&&p.x===1)s[_]=p.x-1;if(y.x===0&&y.z===0)s[_]=v/2/Math.PI+0.5}function x(p){return Math.atan2(p.z,-p.x)}function d(p){return Math.atan2(-p.y,Math.sqrt(p.x*p.x+p.z*p.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new js(e.vertices,e.indices,e.radius,e.detail)}}class yh extends js{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,n=1/i,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-n,-i,0,-n,i,0,n,-i,0,n,i,-n,-i,0,-n,i,0,n,-i,0,n,i,0,-i,0,-n,i,0,-n,-i,0,n,i,0,n],s=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,s,e,t);this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new yh(e.radius,e.detail)}}var Mh=new A,vh=new A,Jf=new A,Sh=new Yi;class bh extends Ve{constructor(e=null,t=1){super();if(this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let n=Math.pow(10,4),r=Math.cos(Nr*t),s=e.getIndex(),o=e.getAttribute("position"),a=s?s.count:o.count,l=[0,0,0],c=["a","b","c"],h=[,,,],u=new Map,f=[];for(let m=0;m<a;m+=3){if(s)l[0]=s.getX(m),l[1]=s.getX(m+1),l[2]=s.getX(m+2);else l[0]=m,l[1]=m+1,l[2]=m+2;let{a:g,b:x,c:d}=Sh;if(g.fromBufferAttribute(o,l[0]),x.fromBufferAttribute(o,l[1]),d.fromBufferAttribute(o,l[2]),Sh.getNormal(Jf),h[0]=`${Math.round(g.x*n)},${Math.round(g.y*n)},${Math.round(g.z*n)}`,h[1]=`${Math.round(x.x*n)},${Math.round(x.y*n)},${Math.round(x.z*n)}`,h[2]=`${Math.round(d.x*n)},${Math.round(d.y*n)},${Math.round(d.z*n)}`,h[0]===h[1]||h[1]===h[2]||h[2]===h[0])continue;for(let p=0;p<3;p++){let _=(p+1)%3,y=h[p],v=h[_],T=Sh[c[p]],w=Sh[c[_]],M=`${y}_${v}`,b=`${v}_${y}`,C=u.get(b);if(C){if(Jf.dot(C.normal)<=r)f.push(T.x,T.y,T.z),f.push(w.x,w.y,w.z);u.set(b,null)}else if(!u.has(M))u.set(M,{index0:l[p],index1:l[_],normal:Jf.clone()})}}for(let m of u.values())if(m){let{index0:g,index1:x}=m;Mh.fromBufferAttribute(o,g),vh.fromBufferAttribute(o,x),f.push(Mh.x,Mh.y,Mh.z),f.push(vh.x,vh.y,vh.z)}this.setAttribute("position",new Ee(f,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class pi{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){be("Curve: .getPoint() not implemented.")}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,n=this.getPoint(0),r=0;t.push(0);for(let s=1;s<=e;s++)i=this.getPoint(s/e),r+=i.distanceTo(n),t.push(r),n=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let i=this.getLengths(),n=0,r=i.length,s;if(t)s=t;else s=e*i[r-1];let o=0,a=r-1,l;while(o<=a)if(n=Math.floor(o+(a-o)/2),l=i[n]-s,l<0)o=n+1;else if(l>0)a=n-1;else{a=n;break}if(n=a,i[n]===s)return n/(r-1);let c=i[n],u=i[n+1]-c,f=(s-c)/u;return(n+f)/(r-1)}getTangent(e,t){let n=e-0.0001,r=e+0.0001;if(n<0)n=0;if(r>1)r=1;let s=this.getPoint(n),o=this.getPoint(r),a=t||(s.isVector2?new X:new A);return a.copy(o).sub(s).normalize(),a}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){let i=new A,n=[],r=[],s=[],o=new A,a=new Be;for(let f=0;f<=e;f++){let m=f/e;n[f]=this.getTangentAt(m,new A)}r[0]=new A,s[0]=new A;let l=Number.MAX_VALUE,c=Math.abs(n[0].x),h=Math.abs(n[0].y),u=Math.abs(n[0].z);if(c<=l)l=c,i.set(1,0,0);if(h<=l)l=h,i.set(0,1,0);if(u<=l)i.set(0,0,1);o.crossVectors(n[0],i).normalize(),r[0].crossVectors(n[0],o),s[0].crossVectors(n[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),s[f]=s[f-1].clone(),o.crossVectors(n[f-1],n[f]),o.length()>Number.EPSILON){o.normalize();let m=Math.acos(lt(n[f-1].dot(n[f]),-1,1));r[f].applyMatrix4(a.makeRotationAxis(o,m))}s[f].crossVectors(n[f],r[f])}if(t===!0){let f=Math.acos(lt(r[0].dot(r[e]),-1,1));if(f/=e,n[0].dot(o.crossVectors(r[0],r[e]))>0)f=-f;for(let m=1;m<=e;m++)r[m].applyMatrix4(a.makeRotationAxis(n[m],f*m)),s[m].crossVectors(n[m],r[m])}return{tangents:n,normals:r,binormals:s}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}}class $s extends pi{constructor(e=0,t=0,i=1,n=1,r=0,s=Math.PI*2,o=!1,a=0){super();this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=n,this.aStartAngle=r,this.aEndAngle=s,this.aClockwise=o,this.aRotation=a}getPoint(e,t=new X){let i=t,n=Math.PI*2,r=this.aEndAngle-this.aStartAngle,s=Math.abs(r)<Number.EPSILON;while(r<0)r+=n;while(r>n)r-=n;if(r<Number.EPSILON)if(s)r=0;else r=n;if(this.aClockwise===!0&&!s)if(r===n)r=-n;else r=r-n;let o=this.aStartAngle+e*r,a=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let c=Math.cos(this.aRotation),h=Math.sin(this.aRotation),u=a-this.aX,f=l-this.aY;a=u*c-f*h+this.aX,l=u*h+f*c+this.aY}return i.set(a,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class jf extends $s{constructor(e,t,i,n,r,s){super(e,t,i,i,n,r,s);this.isArcCurve=!0,this.type="ArcCurve"}}function tu(){let e=0,t=0,i=0,n=0;function r(s,o,a,l){e=s,t=a,i=-3*s+3*o-2*a-l,n=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){r(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,h,u){let f=(o-s)/c-(a-s)/(c+h)+(a-o)/h,m=(a-o)/h-(l-o)/(h+u)+(l-a)/u;f*=h,m*=h,r(o,a,f,m)},calc:function(s){let o=s*s,a=o*s;return e+t*s+i*o+n*a}}}var Hp=new A,Gp=new A,$f=new tu,Qf=new tu,eu=new tu;class Yn extends pi{constructor(e=[],t=!1,i="centripetal",n=0.5){super();this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=n}getPoint(e,t=new A){let i=t,n=this.points,r=n.length,s=(r-(this.closed?0:1))*e,o=Math.floor(s),a=s-o;if(this.closed)o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r;else if(a===0&&o===r-1)o=r-2,a=1;let l,c;if(this.closed||o>0)l=n[(o-1)%r];else Gp.subVectors(n[0],n[1]).add(n[0]),l=Gp;let h=n[o%r],u=n[(o+1)%r];if(this.closed||o+2<r)c=n[(o+2)%r];else Hp.subVectors(n[r-1],n[r-2]).add(n[r-1]),c=Hp;if(this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?0.5:0.25,m=Math.pow(l.distanceToSquared(h),f),g=Math.pow(h.distanceToSquared(u),f),x=Math.pow(u.distanceToSquared(c),f);if(g<0.0001)g=1;if(m<0.0001)m=g;if(x<0.0001)x=g;$f.initNonuniformCatmullRom(l.x,h.x,u.x,c.x,m,g,x),Qf.initNonuniformCatmullRom(l.y,h.y,u.y,c.y,m,g,x),eu.initNonuniformCatmullRom(l.z,h.z,u.z,c.z,m,g,x)}else if(this.curveType==="catmullrom")$f.initCatmullRom(l.x,h.x,u.x,c.x,this.tension),Qf.initCatmullRom(l.y,h.y,u.y,c.y,this.tension),eu.initCatmullRom(l.z,h.z,u.z,c.z,this.tension);return i.set($f.calc(a),Qf.calc(a),eu.calc(a)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let n=e.points[t];this.points.push(n.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let n=this.points[t];e.points.push(n.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let n=e.points[t];this.points.push(new A().fromArray(n))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function iu(e,t,i,n,r){let s=(n-t)*0.5,o=(r-i)*0.5,a=e*e,l=e*a;return(2*i-2*n+s+o)*l+(-3*i+3*n-2*s-o)*a+s*e+i}function c1(e,t){let i=1-e;return i*i*t}function h1(e,t){return 2*(1-e)*e*t}function f1(e,t){return e*e*t}function Qs(e,t,i,n){return c1(e,t)+h1(e,i)+f1(e,n)}function u1(e,t){let i=1-e;return i*i*i*t}function d1(e,t){let i=1-e;return 3*i*i*e*t}function p1(e,t){return 3*(1-e)*e*e*t}function m1(e,t){return e*e*e*t}function eo(e,t,i,n,r){return u1(e,t)+d1(e,i)+p1(e,n)+m1(e,r)}class Nl extends pi{constructor(e=new X,t=new X,i=new X,n=new X){super();this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=n}getPoint(e,t=new X){let i=t,n=this.v0,r=this.v1,s=this.v2,o=this.v3;return i.set(eo(e,n.x,r.x,s.x,o.x),eo(e,n.y,r.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class nu extends pi{constructor(e=new A,t=new A,i=new A,n=new A){super();this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=n}getPoint(e,t=new A){let i=t,n=this.v0,r=this.v1,s=this.v2,o=this.v3;return i.set(eo(e,n.x,r.x,s.x,o.x),eo(e,n.y,r.y,s.y,o.y),eo(e,n.z,r.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Fl extends pi{constructor(e=new X,t=new X){super();this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new X){let i=t;if(e===1)i.copy(this.v2);else i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1);return i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new X){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class ru extends pi{constructor(e=new A,t=new A){super();this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new A){let i=t;if(e===1)i.copy(this.v2);else i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1);return i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new A){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Ul extends pi{constructor(e=new X,t=new X,i=new X){super();this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new X){let i=t,n=this.v0,r=this.v1,s=this.v2;return i.set(Qs(e,n.x,r.x,s.x),Qs(e,n.y,r.y,s.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Bl extends pi{constructor(e=new A,t=new A,i=new A){super();this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new A){let i=t,n=this.v0,r=this.v1,s=this.v2;return i.set(Qs(e,n.x,r.x,s.x),Qs(e,n.y,r.y,s.y),Qs(e,n.z,r.z,s.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Ol extends pi{constructor(e=[]){super();this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new X){let i=t,n=this.points,r=(n.length-1)*e,s=Math.floor(r),o=r-s,a=n[s===0?s:s-1],l=n[s],c=n[s>n.length-2?n.length-1:s+1],h=n[s>n.length-3?n.length-1:s+2];return i.set(iu(o,a.x,l.x,c.x,h.x),iu(o,a.y,l.y,c.y,h.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let n=e.points[t];this.points.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let n=this.points[t];e.points.push(n.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let n=e.points[t];this.points.push(new X().fromArray(n))}return this}}class Th extends pi{constructor(){super();this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ds[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),n=this.getCurveLengths(),r=0;while(r<n.length){if(n[r]>=i){let s=n[r]-i,o=this.curves[r],a=o.getLength(),l=a===0?0:1-s/a;return o.getPointAt(l,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,n=this.curves.length;i<n;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));if(this.autoClose)t.push(t[0]);return t}getPoints(e=12){let t=[],i;for(let n=0,r=this.curves;n<r.length;n++){let s=r[n],o=s.isEllipseCurve?e*2:s.isLineCurve||s.isLineCurve3?1:s.isSplineCurve?e*s.points.length:e,a=s.getPoints(o);for(let l=0;l<a.length;l++){let c=a[l];if(i&&i.equals(c))continue;t.push(c),i=c}}if(this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0]))t.push(t[0]);return t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let n=e.curves[t];this.curves.push(n.clone())}return this.autoClose=e.autoClose,this.cacheLengths=null,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let n=this.curves[t];e.curves.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let n=e.curves[t];this.curves.push(new ds[n.type]().fromJSON(n))}return this.cacheLengths=null,this}}class ia extends Th{constructor(e){super();if(this.type="Path",this.currentPoint=new X,e)this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new Fl(this.currentPoint.clone(),new X(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,n){let r=new Ul(this.currentPoint.clone(),new X(e,t),new X(i,n));return this.curves.push(r),this.currentPoint.set(i,n),this}bezierCurveTo(e,t,i,n,r,s){let o=new Nl(this.currentPoint.clone(),new X(e,t),new X(i,n),new X(r,s));return this.curves.push(o),this.currentPoint.set(r,s),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new Ol(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,n,r,s){let o=this.currentPoint.x,a=this.currentPoint.y;return this.absarc(e+o,t+a,i,n,r,s),this}absarc(e,t,i,n,r,s){return this.absellipse(e,t,i,i,n,r,s),this}ellipse(e,t,i,n,r,s,o,a){let l=this.currentPoint.x,c=this.currentPoint.y;return this.absellipse(e+l,t+c,i,n,r,s,o,a),this}absellipse(e,t,i,n,r,s,o,a){let l=new $s(e,t,i,n,r,s,o,a);if(this.curves.length>0){let h=l.getPoint(0);if(!h.equals(this.currentPoint))this.lineTo(h.x,h.y)}this.curves.push(l);let c=l.getPoint(1);return this.currentPoint.copy(c),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Li extends ia{constructor(e){super(e);this.uuid=xi(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,n=this.holes.length;i<n;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let n=e.holes[t];this.holes.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let n=this.holes[t];e.holes.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let n=e.holes[t];this.holes.push(new ia().fromJSON(n))}return this}}function au(e,t,i=2){let n=t&&t.length,r=n?t[0]*i:e.length,s=kp(e,0,r,i,!0),o=[];if(!s||s.next===s.prev)return o;let a,l,c;if(n)s=M1(e,t,s,i);if(e.length>80*i){a=e[0],l=e[1];let h=a,u=l;for(let f=i;f<r;f+=i){let m=e[f],g=e[f+1];if(m<a)a=m;if(g<l)l=g;if(m>h)h=m;if(g>u)u=g}c=Math.max(h-a,u-l),c=c!==0?32767/c:0}return Gl(s,o,i,a,l,c,0),o}function kp(e,t,i,n,r){let s;if(r===I1(e,t,i,n)>0)for(let o=t;o<i;o+=n)s=zp(o/n|0,e[o],e[o+1],s);else for(let o=i-n;o>=t;o-=n)s=zp(o/n|0,e[o],e[o+1],s);if(s&&na(s,s.next))kl(s),s=s.next;return s}function to(e,t){if(!e)return e;if(!t)t=e;let i=e,n;do if(n=!1,!i.steiner&&(na(i,i.next)||hi(i.prev,i,i.next)===0)){if(kl(i),i=t=i.prev,i===i.next)break;n=!0}else i=i.next;while(n||i!==t);return t}function Gl(e,t,i,n,r,s,o){if(!e)return;if(!o&&s)E1(e,n,r,s);let a=e;while(e.prev!==e.next){let l=e.prev,c=e.next;if(s?x1(e,n,r,s):g1(e)){t.push(l.i,e.i,c.i),kl(e),e=c.next,a=c.next;continue}if(e=c,e===a){if(!o)Gl(to(e),t,i,n,r,s,1);else if(o===1)e=_1(to(e),t),Gl(e,t,i,n,r,s,2);else if(o===2)y1(e,t,i,n,r,s);break}}}function g1(e){let t=e.prev,i=e,n=e.next;if(hi(t,i,n)>=0)return!1;let r=t.x,s=i.x,o=n.x,a=t.y,l=i.y,c=n.y,h=Math.min(r,s,o),u=Math.min(a,l,c),f=Math.max(r,s,o),m=Math.max(a,l,c),g=n.next;while(g!==t){if(g.x>=h&&g.x<=f&&g.y>=u&&g.y<=m&&Hl(r,a,s,l,o,c,g.x,g.y)&&hi(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function x1(e,t,i,n){let r=e.prev,s=e,o=e.next;if(hi(r,s,o)>=0)return!1;let a=r.x,l=s.x,c=o.x,h=r.y,u=s.y,f=o.y,m=Math.min(a,l,c),g=Math.min(h,u,f),x=Math.max(a,l,c),d=Math.max(h,u,f),p=su(m,g,t,i,n),_=su(x,d,t,i,n),{prevZ:y,nextZ:v}=e;while(y&&y.z>=p&&v&&v.z<=_){if(y.x>=m&&y.x<=x&&y.y>=g&&y.y<=d&&y!==r&&y!==o&&Hl(a,h,l,u,c,f,y.x,y.y)&&hi(y.prev,y,y.next)>=0)return!1;if(y=y.prevZ,v.x>=m&&v.x<=x&&v.y>=g&&v.y<=d&&v!==r&&v!==o&&Hl(a,h,l,u,c,f,v.x,v.y)&&hi(v.prev,v,v.next)>=0)return!1;v=v.nextZ}while(y&&y.z>=p){if(y.x>=m&&y.x<=x&&y.y>=g&&y.y<=d&&y!==r&&y!==o&&Hl(a,h,l,u,c,f,y.x,y.y)&&hi(y.prev,y,y.next)>=0)return!1;y=y.prevZ}while(v&&v.z<=_){if(v.x>=m&&v.x<=x&&v.y>=g&&v.y<=d&&v!==r&&v!==o&&Hl(a,h,l,u,c,f,v.x,v.y)&&hi(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function _1(e,t){let i=e;do{let n=i.prev,r=i.next.next;if(!na(n,r)&&Wp(n,i,i.next,r)&&zl(n,r)&&zl(r,n))t.push(n.i,i.i,r.i),kl(i),kl(i.next),i=e=r;i=i.next}while(i!==e);return to(i)}function y1(e,t,i,n,r,s){let o=e;do{let a=o.next.next;while(a!==o.prev){if(o.i!==a.i&&R1(o,a)){let l=Xp(o,a);o=to(o,o.next),l=to(l,l.next),Gl(o,t,i,n,r,s,0),Gl(l,t,i,n,r,s,0);return}a=a.next}o=o.next}while(o!==e)}function M1(e,t,i,n){let r=[];for(let s=0,o=t.length;s<o;s++){let a=t[s]*n,l=s<o-1?t[s+1]*n:e.length,c=kp(e,a,l,n,!1);if(c===c.next)c.steiner=!0;r.push(A1(c))}r.sort(v1);for(let s=0;s<r.length;s++)i=S1(r[s],i);return i}function v1(e,t){let i=e.x-t.x;if(i===0){if(i=e.y-t.y,i===0){let n=(e.next.y-e.y)/(e.next.x-e.x),r=(t.next.y-t.y)/(t.next.x-t.x);i=n-r}}return i}function S1(e,t){let i=b1(e,t);if(!i)return t;let n=Xp(i,e);return to(n,n.next),to(i,i.next)}function b1(e,t){let i=t,{x:n,y:r}=e,s=-1/0,o;if(na(e,i))return i;do{if(na(e,i.next))return i.next;else if(r<=i.y&&r>=i.next.y&&i.next.y!==i.y){let u=i.x+(r-i.y)*(i.next.x-i.x)/(i.next.y-i.y);if(u<=n&&u>s){if(s=u,o=i.x<i.next.x?i:i.next,u===n)return o}}i=i.next}while(i!==t);if(!o)return null;let a=o,l=o.x,c=o.y,h=1/0;i=o;do{if(n>=i.x&&i.x>=l&&n!==i.x&&Vp(r<c?n:s,r,l,c,r<c?s:n,r,i.x,i.y)){let u=Math.abs(r-i.y)/(n-i.x);if(zl(i,e)&&(u<h||u===h&&(i.x>o.x||i.x===o.x&&T1(o,i))))o=i,h=u}i=i.next}while(i!==a);return o}function T1(e,t){return hi(e.prev,e,t.prev)<0&&hi(t.next,e,e.next)<0}function E1(e,t,i,n){let r=e;do{if(r.z===0)r.z=su(r.x,r.y,t,i,n);r.prevZ=r.prev,r.nextZ=r.next,r=r.next}while(r!==e);r.prevZ.nextZ=null,r.prevZ=null,w1(r)}function w1(e){let t,i=1;do{let n=e,r;e=null;let s=null;t=0;while(n){t++;let o=n,a=0;for(let c=0;c<i;c++)if(a++,o=o.nextZ,!o)break;let l=i;while(a>0||l>0&&o){if(a!==0&&(l===0||!o||n.z<=o.z))r=n,n=n.nextZ,a--;else r=o,o=o.nextZ,l--;if(s)s.nextZ=r;else e=r;r.prevZ=s,s=r}n=o}s.nextZ=null,i*=2}while(t>1);return e}function su(e,t,i,n,r){return e=(e-i)*r|0,t=(t-n)*r|0,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e|t<<1}function A1(e){let t=e,i=e;do{if(t.x<i.x||t.x===i.x&&t.y<i.y)i=t;t=t.next}while(t!==e);return i}function Vp(e,t,i,n,r,s,o,a){return(r-o)*(t-a)>=(e-o)*(s-a)&&(e-o)*(n-a)>=(i-o)*(t-a)&&(i-o)*(s-a)>=(r-o)*(n-a)}function Hl(e,t,i,n,r,s,o,a){return!(e===o&&t===a)&&Vp(e,t,i,n,r,s,o,a)}function R1(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!C1(e,t)&&(zl(e,t)&&zl(t,e)&&P1(e,t)&&(hi(e.prev,e,t.prev)||hi(e,t.prev,t))||na(e,t)&&hi(e.prev,e,e.next)>0&&hi(t.prev,t,t.next)>0)}function hi(e,t,i){return(t.y-e.y)*(i.x-t.x)-(t.x-e.x)*(i.y-t.y)}function na(e,t){return e.x===t.x&&e.y===t.y}function Wp(e,t,i,n){let r=wh(hi(e,t,i)),s=wh(hi(e,t,n)),o=wh(hi(i,n,e)),a=wh(hi(i,n,t));if(r!==s&&o!==a)return!0;if(r===0&&Eh(e,i,t))return!0;if(s===0&&Eh(e,n,t))return!0;if(o===0&&Eh(i,e,n))return!0;if(a===0&&Eh(i,t,n))return!0;return!1}function Eh(e,t,i){return t.x<=Math.max(e.x,i.x)&&t.x>=Math.min(e.x,i.x)&&t.y<=Math.max(e.y,i.y)&&t.y>=Math.min(e.y,i.y)}function wh(e){return e>0?1:e<0?-1:0}function C1(e,t){let i=e;do{if(i.i!==e.i&&i.next.i!==e.i&&i.i!==t.i&&i.next.i!==t.i&&Wp(i,i.next,e,t))return!0;i=i.next}while(i!==e);return!1}function zl(e,t){return hi(e.prev,e,e.next)<0?hi(e,t,e.next)>=0&&hi(e,e.prev,t)>=0:hi(e,t,e.prev)<0||hi(e,e.next,t)<0}function P1(e,t){let i=e,n=!1,r=(e.x+t.x)/2,s=(e.y+t.y)/2;do{if(i.y>s!==i.next.y>s&&i.next.y!==i.y&&r<(i.next.x-i.x)*(s-i.y)/(i.next.y-i.y)+i.x)n=!n;i=i.next}while(i!==e);return n}function Xp(e,t){let i=ou(e.i,e.x,e.y),n=ou(t.i,t.x,t.y),r=e.next,s=t.prev;return e.next=t,t.prev=e,i.next=r,r.prev=i,n.next=i,i.prev=n,s.next=n,n.prev=s,n}function zp(e,t,i,n){let r=ou(e,t,i);if(!n)r.prev=r,r.next=r;else r.next=n.next,r.prev=n,n.next.prev=r,n.next=r;return r}function kl(e){if(e.next.prev=e.prev,e.prev.next=e.next,e.prevZ)e.prevZ.nextZ=e.nextZ;if(e.nextZ)e.nextZ.prevZ=e.prevZ}function ou(e,t,i){return{i:e,x:t,y:i,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function I1(e,t,i,n){let r=0;for(let s=t,o=i-n;s<i;s+=n)r+=(e[o]-e[s])*(e[s+1]+e[o+1]),o=s;return r}class lu{static triangulate(e,t,i=2){return au(e,t,i)}}class Pn{static area(e){let t=e.length,i=0;for(let n=t-1,r=0;r<t;n=r++)i+=e[n].x*e[r].y-e[r].x*e[n].y;return i*0.5}static isClockWise(e){return Pn.area(e)<0}static triangulateShape(e,t){let i=[],n=[],r=[];Yp(e),qp(i,e);let s=e.length;t.forEach(Yp);for(let a=0;a<t.length;a++)n.push(s),s+=t[a].length,qp(i,t[a]);let o=lu.triangulate(i,n);for(let a=0;a<o.length;a+=3)r.push(o.slice(a,a+3));return r}}function Yp(e){let t=e.length;if(t>2&&e[t-1].equals(e[0]))e.pop()}function qp(e,t){for(let i=0;i<t.length;i++)e.push(t[i].x),e.push(t[i].y)}class gr extends Ve{constructor(e=new Li([new X(0.5,0.5),new X(-0.5,0.5),new X(-0.5,-0.5),new X(0.5,-0.5)]),t={}){super();this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let i=this,n=[],r=[];for(let o=0,a=e.length;o<a;o++){let l=e[o];s(l)}this.setAttribute("position",new Ee(n,3)),this.setAttribute("uv",new Ee(r,2)),this.computeVertexNormals();function s(o){let a=[],l=t.curveSegments!==void 0?t.curveSegments:12,c=t.steps!==void 0?t.steps:1,h=t.depth!==void 0?t.depth:1,u=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:0.2,m=t.bevelSize!==void 0?t.bevelSize:f-0.1,g=t.bevelOffset!==void 0?t.bevelOffset:0,x=t.bevelSegments!==void 0?t.bevelSegments:3,d=t.extrudePath,p=t.UVGenerator!==void 0?t.UVGenerator:L1,_,y=!1,v,T,w,M;if(d){_=d.getSpacedPoints(c),y=!0,u=!1;let he=d.isCatmullRomCurve3?d.closed:!1;v=d.computeFrenetFrames(c,he),T=new A,w=new A,M=new A}if(!u)x=0,f=0,m=0,g=0;let b=o.extractPoints(l),{shape:C,holes:F}=b;if(!Pn.isClockWise(C)){C=C.reverse();for(let he=0,de=F.length;he<de;he++){let ge=F[he];if(Pn.isClockWise(ge))F[he]=ge.reverse()}}function V(he){let Le=he[0];for(let Re=1;Re<=he.length;Re++){let Ye=Re%he.length,Je=he[Ye],dt=Je.x-Le.x,_t=Je.y-Le.y,Lt=dt*dt+_t*_t,R=Math.max(Math.abs(Je.x),Math.abs(Je.y),Math.abs(Le.x),Math.abs(Le.y)),xe=0.000000000000000000010000000000000001*R*R;if(Lt<=xe){he.splice(Ye,1),Re--;continue}Le=Je}}V(C),F.forEach(V);let ee=F.length,I=C;for(let he=0;he<ee;he++){let de=F[he];C=C.concat(de)}function J(he,de,ge){if(!de)We("ExtrudeGeometry: vec does not exist");return he.clone().addScaledVector(de,ge)}let L=C.length;function N(he,de,ge){let Le,Re,Ye,Je=he.x-de.x,dt=he.y-de.y,_t=ge.x-he.x,Lt=ge.y-he.y,R=Je*Je+dt*dt,xe=Je*Lt-dt*_t;if(Math.abs(xe)>Number.EPSILON){let _e=Math.sqrt(R),He=Math.sqrt(_t*_t+Lt*Lt),se=de.x-dt/_e,ze=de.y+Je/_e,ke=ge.x-Lt/He,at=ge.y+_t/He,Gt=((ke-se)*Lt-(at-ze)*_t)/(Je*Lt-dt*_t);Le=se+Je*Gt-he.x,Re=ze+dt*Gt-he.y;let P=Le*Le+Re*Re;if(P<=2)return new X(Le,Re);else Ye=Math.sqrt(P/2)}else{let _e=!1;if(Je>Number.EPSILON){if(_t>Number.EPSILON)_e=!0}else if(Je<-Number.EPSILON){if(_t<-Number.EPSILON)_e=!0}else if(Math.sign(dt)===Math.sign(Lt))_e=!0;if(_e)Le=-dt,Re=Je,Ye=Math.sqrt(R);else Le=Je,Re=dt,Ye=Math.sqrt(R/2)}return new X(Le/Ye,Re/Ye)}let j=[];for(let he=0,de=I.length,ge=de-1,Le=he+1;he<de;he++,ge++,Le++){if(ge===de)ge=0;if(Le===de)Le=0;j[he]=N(I[he],I[ge],I[Le])}let z=[],H,Y=j.concat();for(let he=0,de=ee;he<de;he++){let ge=F[he];H=[];for(let Le=0,Re=ge.length,Ye=Re-1,Je=Le+1;Le<Re;Le++,Ye++,Je++){if(Ye===Re)Ye=0;if(Je===Re)Je=0;H[Le]=N(ge[Le],ge[Ye],ge[Je])}z.push(H),Y=Y.concat(H)}let ae;if(x===0)ae=Pn.triangulateShape(I,F);else{let he=[],de=[];for(let ge=0;ge<x;ge++){let Le=ge/x,Re=f*Math.cos(Le*Math.PI/2),Ye=m*Math.sin(Le*Math.PI/2)+g;for(let Je=0,dt=I.length;Je<dt;Je++){let _t=J(I[Je],j[Je],Ye);if(we(_t.x,_t.y,-Re),Le===0)he.push(_t)}for(let Je=0,dt=ee;Je<dt;Je++){let _t=F[Je];H=z[Je];let Lt=[];for(let R=0,xe=_t.length;R<xe;R++){let _e=J(_t[R],H[R],Ye);if(we(_e.x,_e.y,-Re),Le===0)Lt.push(_e)}if(Le===0)de.push(Lt)}}ae=Pn.triangulateShape(he,de)}let G=ae.length,Q=m+g;for(let he=0;he<L;he++){let de=u?J(C[he],Y[he],Q):C[he];if(!y)we(de.x,de.y,0);else w.copy(v.normals[0]).multiplyScalar(de.x),T.copy(v.binormals[0]).multiplyScalar(de.y),M.copy(_[0]).add(w).add(T),we(M.x,M.y,M.z)}for(let he=1;he<=c;he++)for(let de=0;de<L;de++){let ge=u?J(C[de],Y[de],Q):C[de];if(!y)we(ge.x,ge.y,h/c*he);else w.copy(v.normals[he]).multiplyScalar(ge.x),T.copy(v.binormals[he]).multiplyScalar(ge.y),M.copy(_[he]).add(w).add(T),we(M.x,M.y,M.z)}for(let he=x-1;he>=0;he--){let de=he/x,ge=f*Math.cos(de*Math.PI/2),Le=m*Math.sin(de*Math.PI/2)+g;for(let Re=0,Ye=I.length;Re<Ye;Re++){let Je=J(I[Re],j[Re],Le);we(Je.x,Je.y,h+ge)}for(let Re=0,Ye=F.length;Re<Ye;Re++){let Je=F[Re];H=z[Re];for(let dt=0,_t=Je.length;dt<_t;dt++){let Lt=J(Je[dt],H[dt],Le);if(!y)we(Lt.x,Lt.y,h+ge);else we(Lt.x,Lt.y+_[c-1].y,_[c-1].x+ge)}}}Me(),me();function Me(){let he=n.length/3;if(u){let de=0,ge=L*de;for(let Le=0;Le<G;Le++){let Re=ae[Le];ut(Re[2]+ge,Re[1]+ge,Re[0]+ge)}de=c+x*2,ge=L*de;for(let Le=0;Le<G;Le++){let Re=ae[Le];ut(Re[0]+ge,Re[1]+ge,Re[2]+ge)}}else{for(let de=0;de<G;de++){let ge=ae[de];ut(ge[2],ge[1],ge[0])}for(let de=0;de<G;de++){let ge=ae[de];ut(ge[0]+L*c,ge[1]+L*c,ge[2]+L*c)}}i.addGroup(he,n.length/3-he,0)}function me(){let he=n.length/3,de=0;Fe(I,de),de+=I.length;for(let ge=0,Le=F.length;ge<Le;ge++){let Re=F[ge];Fe(Re,de),de+=Re.length}i.addGroup(he,n.length/3-he,1)}function Fe(he,de){let ge=he.length;while(--ge>=0){let Le=ge,Re=ge-1;if(Re<0)Re=he.length-1;for(let Ye=0,Je=c+x*2;Ye<Je;Ye++){let dt=L*Ye,_t=L*(Ye+1),Lt=de+Le+dt,R=de+Re+dt,xe=de+Re+_t,_e=de+Le+_t;Ue(Lt,R,xe,_e)}}}function we(he,de,ge){a.push(he),a.push(de),a.push(ge)}function ut(he,de,ge){Oe(he),Oe(de),Oe(ge);let Le=n.length/3,Re=p.generateTopUV(i,n,Le-3,Le-2,Le-1);pt(Re[0]),pt(Re[1]),pt(Re[2])}function Ue(he,de,ge,Le){Oe(he),Oe(de),Oe(Le),Oe(de),Oe(ge),Oe(Le);let Re=n.length/3,Ye=p.generateSideWallUV(i,n,Re-6,Re-3,Re-2,Re-1);pt(Ye[0]),pt(Ye[1]),pt(Ye[3]),pt(Ye[1]),pt(Ye[2]),pt(Ye[3])}function Oe(he){n.push(a[he*3+0]),n.push(a[he*3+1]),n.push(a[he*3+2])}function pt(he){r.push(he.x),r.push(he.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return D1(t,i,e)}static fromJSON(e,t){let i=[];for(let r=0,s=e.shapes.length;r<s;r++){let o=t[e.shapes[r]];i.push(o)}let n=e.options.extrudePath;if(n!==void 0)e.options.extrudePath=new ds[n.type]().fromJSON(n);return new gr(i,e.options)}}var L1={generateTopUV:function(e,t,i,n,r){let s=t[i*3],o=t[i*3+1],a=t[n*3],l=t[n*3+1],c=t[r*3],h=t[r*3+1];return[new X(s,o),new X(a,l),new X(c,h)]},generateSideWallUV:function(e,t,i,n,r,s){let o=t[i*3],a=t[i*3+1],l=t[i*3+2],c=t[n*3],h=t[n*3+1],u=t[n*3+2],f=t[r*3],m=t[r*3+1],g=t[r*3+2],x=t[s*3],d=t[s*3+1],p=t[s*3+2];if(Math.abs(a-h)<Math.abs(o-c))return[new X(o,1-l),new X(c,1-u),new X(f,1-g),new X(x,1-p)];else return[new X(a,1-l),new X(h,1-u),new X(m,1-g),new X(d,1-p)]}};function D1(e,t,i){if(i.shapes=[],Array.isArray(e))for(let n=0,r=e.length;n<r;n++){let s=e[n];i.shapes.push(s.uuid)}else i.shapes.push(e.uuid);if(i.options=Object.assign({},t),t.extrudePath!==void 0)i.options.extrudePath=t.extrudePath.toJSON();return i}class Vl extends Ve{constructor(e=[new X(0,-0.5),new X(0.5,0),new X(0,0.5)],t=12,i=0,n=Math.PI*2){super();this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:n},t=Math.floor(t),n=lt(n,0,Math.PI*2);let r=[],s=[],o=[],a=[],l=[],c=1/t,h=new A,u=new X,f=new A,m=new A,g=new A,x=0,d=0;for(let p=0;p<=e.length-1;p++)switch(p){case 0:x=e[p+1].x-e[p].x,d=e[p+1].y-e[p].y,f.x=d*1,f.y=-x,f.z=d*0,g.copy(f),f.normalize(),a.push(f.x,f.y,f.z);break;case e.length-1:g.normalize(),a.push(g.x,g.y,g.z);break;default:x=e[p+1].x-e[p].x,d=e[p+1].y-e[p].y,f.x=d*1,f.y=-x,f.z=d*0,m.copy(f),f.x+=g.x,f.y+=g.y,f.z+=g.z,f.normalize(),a.push(f.x,f.y,f.z),g.copy(m)}for(let p=0;p<=t;p++){let _=i+p*c*n,y=Math.sin(_),v=Math.cos(_);for(let T=0;T<=e.length-1;T++){h.x=e[T].x*y,h.y=e[T].y,h.z=e[T].x*v,s.push(h.x,h.y,h.z),u.x=p/t,u.y=T/(e.length-1),o.push(u.x,u.y);let w=a[3*T+0]*y,M=a[3*T+1],b=a[3*T+0]*v;l.push(w,M,b)}}for(let p=0;p<t;p++)for(let _=0;_<e.length-1;_++){let y=_+p*e.length,v=y,T=y+e.length,w=y+e.length+1,M=y+1;r.push(v,T,M),r.push(w,M,T)}this.setIndex(r),this.setAttribute("position",new Ee(s,3)),this.setAttribute("uv",new Ee(o,2)),this.setAttribute("normal",new Ee(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vl(e.points,e.segments,e.phiStart,e.phiLength)}}class Ht extends Ve{constructor(e=1,t=1,i=1,n=1){super();this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:n};let r=e/2,s=t/2,o=Math.floor(i),a=Math.floor(n),l=o+1,c=a+1,h=e/o,u=t/a,f=[],m=[],g=[],x=[];for(let d=0;d<c;d++){let p=d*u-s;for(let _=0;_<l;_++){let y=_*h-r;m.push(y,-p,0),g.push(0,0,1),x.push(_/o),x.push(1-d/a)}}for(let d=0;d<a;d++)for(let p=0;p<o;p++){let _=p+l*d,y=p+l*(d+1),v=p+1+l*(d+1),T=p+1+l*d;f.push(_,y,T),f.push(y,v,T)}this.setIndex(f),this.setAttribute("position",new Ee(m,3)),this.setAttribute("normal",new Ee(g,3)),this.setAttribute("uv",new Ee(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ht(e.width,e.height,e.widthSegments,e.heightSegments)}}class io extends Ve{constructor(e=0.5,t=1,i=32,n=1,r=0,s=Math.PI*2){super();this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:n,thetaStart:r,thetaLength:s},i=Math.max(3,i),n=Math.max(1,n);let o=[],a=[],l=[],c=[],h=e,u=(t-e)/n,f=new A,m=new X;for(let g=0;g<=n;g++){for(let x=0;x<=i;x++){let d=r+x/i*s;f.x=h*Math.cos(d),f.y=h*Math.sin(d),a.push(f.x,f.y,f.z),l.push(0,0,1),m.x=(f.x/t+1)/2,m.y=(f.y/t+1)/2,c.push(m.x,m.y)}h+=u}for(let g=0;g<n;g++){let x=g*(i+1);for(let d=0;d<i;d++){let p=d+x,_=p,y=p+i+1,v=p+i+2,T=p+1;o.push(_,y,T),o.push(y,v,T)}}this.setIndex(o),this.setAttribute("position",new Ee(a,3)),this.setAttribute("normal",new Ee(l,3)),this.setAttribute("uv",new Ee(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new io(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class no extends Ve{constructor(e=new Li([new X(0,0.5),new X(-0.5,-0.5),new X(0.5,-0.5)]),t=12){super();this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let i=[],n=[],r=[],s=[],o=0,a=0;if(Array.isArray(e)===!1)l(e);else for(let c=0;c<e.length;c++)l(e[c]),this.addGroup(o,a,c),o+=a,a=0;this.setIndex(i),this.setAttribute("position",new Ee(n,3)),this.setAttribute("normal",new Ee(r,3)),this.setAttribute("uv",new Ee(s,2));function l(c){let h=n.length/3,u=c.extractPoints(t),{shape:f,holes:m}=u;if(Pn.isClockWise(f)===!1)f=f.reverse();for(let x=0,d=m.length;x<d;x++){let p=m[x];if(Pn.isClockWise(p)===!0)m[x]=p.reverse()}let g=Pn.triangulateShape(f,m);for(let x=0,d=m.length;x<d;x++){let p=m[x];f=f.concat(p)}for(let x=0,d=f.length;x<d;x++){let p=f[x];n.push(p.x,p.y,0),r.push(0,0,1),s.push(p.x,p.y)}for(let x=0,d=g.length;x<d;x++){let p=g[x],_=p[0]+h,y=p[1]+h,v=p[2]+h;i.push(_,y,v),a+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return N1(t,e)}static fromJSON(e,t){let i=[];for(let n=0,r=e.shapes.length;n<r;n++){let s=t[e.shapes[n]];i.push(s)}return new no(i,e.curveSegments)}}function N1(e,t){if(t.shapes=[],Array.isArray(e))for(let i=0,n=e.length;i<n;i++){let r=e[i];t.shapes.push(r.uuid)}else t.shapes.push(e.uuid);return t}class mn extends Ve{constructor(e=1,t=32,i=16,n=0,r=Math.PI*2,s=0,o=Math.PI){super();this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:n,phiLength:r,thetaStart:s,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let a=Math.min(s+o,Math.PI),l=0,c=[],h=new A,u=new A,f=[],m=[],g=[],x=[];for(let d=0;d<=i;d++){let p=[],_=d/i,y=s+_*o,v=e*Math.cos(y),T=Math.sqrt(e*e-v*v),w=0;if(d===0&&s===0)w=0.5/t;else if(d===i&&a===Math.PI)w=-0.5/t;for(let M=0;M<=t;M++){let b=M/t,C=n+b*r;h.x=-T*Math.cos(C),h.y=v,h.z=T*Math.sin(C),m.push(h.x,h.y,h.z),u.copy(h).normalize(),g.push(u.x,u.y,u.z),x.push(b+w,1-_),p.push(l++)}c.push(p)}for(let d=0;d<i;d++)for(let p=0;p<t;p++){let _=c[d][p+1],y=c[d][p],v=c[d+1][p],T=c[d+1][p+1];if(d!==0||s>0)f.push(_,y,T);if(d!==i-1||a<Math.PI)f.push(y,v,T)}this.setIndex(f),this.setAttribute("position",new Ee(m,3)),this.setAttribute("normal",new Ee(g,3)),this.setAttribute("uv",new Ee(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new mn(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class In extends Ve{constructor(e=1,t=0.4,i=12,n=48,r=Math.PI*2,s=0,o=Math.PI*2){super();this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:n,arc:r,thetaStart:s,thetaLength:o},i=Math.floor(i),n=Math.floor(n);let a=[],l=[],c=[],h=[],u=new A,f=new A,m=new A;for(let g=0;g<=i;g++){let x=s+g/i*o;for(let d=0;d<=n;d++){let p=d/n*r;f.x=(e+t*Math.cos(x))*Math.cos(p),f.y=(e+t*Math.cos(x))*Math.sin(p),f.z=t*Math.sin(x),l.push(f.x,f.y,f.z),u.x=e*Math.cos(p),u.y=e*Math.sin(p),m.subVectors(f,u).normalize(),c.push(m.x,m.y,m.z),h.push(d/n),h.push(g/i)}}for(let g=1;g<=i;g++)for(let x=1;x<=n;x++){let d=(n+1)*g+x-1,p=(n+1)*(g-1)+x-1,_=(n+1)*(g-1)+x,y=(n+1)*g+x;a.push(d,p,y),a.push(p,_,y)}this.setIndex(a),this.setAttribute("position",new Ee(l,3)),this.setAttribute("normal",new Ee(c,3)),this.setAttribute("uv",new Ee(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new In(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}class cr extends Ve{constructor(e=new Bl(new A(-1,-1,0),new A(-1,1,0),new A(1,1,0)),t=64,i=1,n=8,r=!1){super();this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:n,closed:r};let s=e.computeFrenetFrames(t,r);this.tangents=s.tangents,this.normals=s.normals,this.binormals=s.binormals;let o=new A,a=new A,l=new X,c=new A,h=[],u=[],f=[],m=[];g(),this.setIndex(m),this.setAttribute("position",new Ee(h,3)),this.setAttribute("normal",new Ee(u,3)),this.setAttribute("uv",new Ee(f,2));function g(){for(let _=0;_<t;_++)x(_);x(r===!1?t:0),p(),d()}function x(_){c=e.getPointAt(_/t,c);let y=s.normals[_],v=s.binormals[_];for(let T=0;T<=n;T++){let w=T/n*Math.PI*2,M=Math.sin(w),b=-Math.cos(w);a.x=b*y.x+M*v.x,a.y=b*y.y+M*v.y,a.z=b*y.z+M*v.z,a.normalize(),u.push(a.x,a.y,a.z),o.x=c.x+i*a.x,o.y=c.y+i*a.y,o.z=c.z+i*a.z,h.push(o.x,o.y,o.z)}}function d(){for(let _=1;_<=t;_++)for(let y=1;y<=n;y++){let v=(n+1)*(_-1)+(y-1),T=(n+1)*_+(y-1),w=(n+1)*_+y,M=(n+1)*(_-1)+y;m.push(v,T,M),m.push(T,w,M)}}function p(){for(let _=0;_<=t;_++)for(let y=0;y<=n;y++)l.x=_/t,l.y=y/n,f.push(l.x,l.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new cr(new ds[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}function Wr(e){let t={};for(let i in e){t[i]={};for(let n in e[i]){let r=e[i][n];if(Zp(r))if(r.isRenderTargetTexture)be("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][n]=null;else t[i][n]=r.clone();else if(Array.isArray(r))if(Zp(r[0])){let s=[];for(let o=0,a=r.length;o<a;o++)s[o]=r[o].clone();t[i][n]=s}else t[i][n]=r.slice();else t[i][n]=r}}return t}function ln(e){let t={};for(let i=0;i<e.length;i++){let n=Wr(e[i]);for(let r in n)t[r]=n[r]}return t}function Zp(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function Kp(e){let t=[];for(let i=0;i<e.length;i++)t.push(e[i].clone());return t}function Ah(e){let t=e.getRenderTarget();if(t===null)return e.outputColorSpace;if(t.isXRRenderTarget===!0)return t.texture.colorSpace;return ht.workingColorSpace}var xr={clone:Wr,merge:ln};var Jp=`
void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}
`;var jp=`
void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}
`;class si extends zt{constructor(e){super();if(this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Jp,this.fragmentShader=jp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0)this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Wr(e.uniforms),this.uniformsGroups=Kp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let s=this.uniforms[n].value;if(s&&s.isTexture)t.uniforms[n]={type:"t",value:s.toJSON(e).uuid};else if(s&&s.isColor)t.uniforms[n]={type:"c",value:s.getHex()};else if(s&&s.isVector2)t.uniforms[n]={type:"v2",value:s.toArray()};else if(s&&s.isVector3)t.uniforms[n]={type:"v3",value:s.toArray()};else if(s&&s.isVector4)t.uniforms[n]={type:"v4",value:s.toArray()};else if(s&&s.isMatrix3)t.uniforms[n]={type:"m3",value:s.toArray()};else if(s&&s.isMatrix4)t.uniforms[n]={type:"m4",value:s.toArray()};else t.uniforms[n]={value:s}}if(Object.keys(this.defines).length>0)t.defines=this.defines;t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let n in this.extensions)if(this.extensions[n]===!0)i[n]=!0;if(Object.keys(i).length>0)t.extensions=i;return t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let i in e.uniforms){let n=e.uniforms[i];switch(this.uniforms[i]={},n.type){case"t":this.uniforms[i].value=t[n.value]||null;break;case"c":this.uniforms[i].value=new fe().setHex(n.value);break;case"v2":this.uniforms[i].value=new X().fromArray(n.value);break;case"v3":this.uniforms[i].value=new A().fromArray(n.value);break;case"v4":this.uniforms[i].value=new bt().fromArray(n.value);break;case"m3":this.uniforms[i].value=new st().fromArray(n.value);break;case"m4":this.uniforms[i].value=new Be().fromArray(n.value);break;default:this.uniforms[i].value=n.value}}if(e.defines!==void 0)this.defines=e.defines;if(e.vertexShader!==void 0)this.vertexShader=e.vertexShader;if(e.fragmentShader!==void 0)this.fragmentShader=e.fragmentShader;if(e.glslVersion!==void 0)this.glslVersion=e.glslVersion;if(e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];if(e.lights!==void 0)this.lights=e.lights;if(e.clipping!==void 0)this.clipping=e.clipping;return this}}class ro extends si{constructor(e){super(e);this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class ft extends zt{constructor(e){super();this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new fe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ir,this.normalScale=new X(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new sn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class zi extends ft{constructor(e){super();this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new X(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return lt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+0.4*t)/(1-0.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new fe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new fe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new fe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){if(this._anisotropy>0!==e>0)this.version++;this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){if(this._clearcoat>0!==e>0)this.version++;this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){if(this._diffuseRoughness>0!==e>0)this.version++;this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){if(this._iridescence>0!==e>0)this.version++;this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){if(this._dispersion>0!==e>0)this.version++;this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){if(this._retroreflectivity>0!==e>0)this.version++;this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){if(this._sheen>0!==e>0)this.version++;this._sheen=e}get transmission(){return this._transmission}set transmission(e){if(this._transmission>0!==e>0)this.version++;this._transmission=e}get iridescenceThicknessRange(){return zn('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){zn('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Wl extends zt{constructor(e){super();this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new fe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ir,this.normalScale=new X(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new sn,this.combine=Ls,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=0.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Xl extends zt{constructor(e){super();this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Yd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Yl extends zt{constructor(e){super();this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function _r(e,t){if(!e||e.constructor===t)return e;if(typeof t.BYTES_PER_ELEMENT==="number")return new t(e);return Array.prototype.slice.call(e)}function so(e){return e!==void 0&&e.inTangents!==void 0&&e.outTangents!==void 0}function $p(e){function t(r,s){return e[r]-e[s]}let i=e.length,n=Array(i);for(let r=0;r!==i;++r)n[r]=r;return n.sort(t),n}function cu(e,t,i){let n=e.length,r=new e.constructor(n);for(let s=0,o=0;o!==n;++s){let a=i[s]*t;for(let l=0;l!==t;++l)r[o++]=e[a+l]}return r}function Qp(e,t,i,n){let r=1,s=e[0];while(s!==void 0&&s[n]===void 0)s=e[r++];if(s===void 0)return;let o=s[n];if(o===void 0)return;if(Array.isArray(o))do{if(o=s[n],o!==void 0)t.push(s.time),i.push(...o);s=e[r++]}while(s!==void 0);else if(o.toArray!==void 0)do{if(o=s[n],o!==void 0)t.push(s.time),o.toArray(i,i.length);s=e[r++]}while(s!==void 0);else do{if(o=s[n],o!==void 0)t.push(s.time),i.push(o);s=e[r++]}while(s!==void 0)}class vn{constructor(e,t,i,n){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=n!==void 0?n:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,n=t[i],r=t[i-1];i:{e:{let s;t:{n:if(!(e<n)){for(let o=i+2;;){if(n===void 0){if(e<r)break n;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=n,n=t[++i],e<n)break e}s=t.length;break t}if(!(e>=r)){let o=t[1];if(e<o)i=2,r=o;for(let a=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===a)break;if(n=r,r=t[--i-1],e>=r)break e}s=i,i=0;break t}break i}while(i<s){let o=i+s>>>1;if(e<t[o])s=o;else i=o+1}if(n=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,n)}return this.interpolate_(i,r,e,n)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,n=this.valueSize,r=e*n;for(let s=0;s!==n;++s)t[s]=i[r+s];return t}interpolate_(){throw Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}}class Rh extends vn{constructor(e,t,i,n){super(e,t,i,n);this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Dc,endingEnd:Dc}}intervalChanged_(e,t,i){let n=this.parameterPositions,r=e-2,s=e+1,o=n[r],a=n[s];if(o===void 0)switch(this.getSettings_().endingStart){case Nc:r=e,o=2*t-i;break;case Fc:r=n.length-2,o=t+n[r]-n[r+1];break;default:r=e,o=i}if(a===void 0)switch(this.getSettings_().endingEnd){case Nc:s=e,a=2*i-t;break;case Fc:s=1,a=i+n[1]-n[0];break;default:s=e-1,a=t}let l=(i-t)*0.5,c=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(a-i),this._offsetPrev=r*c,this._offsetNext=s*c}interpolate_(e,t,i,n){let r=this.resultBuffer,s=this.sampleValues,o=this.valueSize,a=e*o,l=a-o,c=this._offsetPrev,h=this._offsetNext,u=this._weightPrev,f=this._weightNext,m=(i-t)/(n-t),g=m*m,x=g*m,d=-u*x+2*u*g-u*m,p=(1+u)*x+(-1.5-2*u)*g+(-0.5+u)*m+1,_=(-1-f)*x+(1.5+f)*g+0.5*m,y=f*x-f*g;for(let v=0;v!==o;++v)r[v]=d*s[c+v]+p*s[l+v]+_*s[a+v]+y*s[h+v];return r}}class ql extends vn{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){let r=this.resultBuffer,s=this.sampleValues,o=this.valueSize,a=e*o,l=a-o,c=(i-t)/(n-t),h=1-c;for(let u=0;u!==o;++u)r[u]=s[l+u]*h+s[a+u]*c;return r}}class Ch extends vn{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e){return this.copySampleValue_(e-1)}}class Ph extends vn{interpolate_(e,t,i,n){let r=this.resultBuffer,s=this.sampleValues,o=this.valueSize,a=e*o,l=a-o,c=this.inTangents,h=this.outTangents;if(!c||!h){let m=(i-t)/(n-t),g=1-m;for(let x=0;x!==o;++x)r[x]=s[l+x]*g+s[a+x]*m;return r}let u=o*2,f=e-1;for(let m=0;m!==o;++m){let g=s[l+m],x=s[a+m],d=f*u+m*2,p=h[d],_=h[d+1],y=e*u+m*2,v=c[y],T=c[y+1],w=W1(i,t,p,v,n);r[m]=tm(w,g,_,T,x)}return r}}function tm(e,t,i,n,r){let s=1-e;return s*s*s*t+3*s*s*e*i+3*s*e*e*n+e*e*e*r}function V1(e,t,i,n,r){let s=1-e;return 3*s*s*(i-t)+6*s*e*(n-i)+3*e*e*(r-n)}function W1(e,t,i,n,r){let s=(e-t)/(r-t);for(let o=0;o<8;o++){let a=tm(s,t,i,n,r)-e;if(Math.abs(a)<0.0000000001)break;let l=V1(s,t,i,n,r);if(Math.abs(l)<0.0000000001)break;s=Math.max(0,Math.min(1,s-a/l))}return s}class bi{constructor(e,t,i,n){if(e===void 0)throw Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=_r(t,this.TimeBufferType),this.values=_r(i,this.ValueBufferType),this.setInterpolation(n||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:_r(e.times,Array),values:_r(e.values,Array)};let n=e.getInterpolation();if(n!==e.DefaultInterpolation)i.interpolation=n;if(so(e.settings))i.settings={inTangents:_r(e.settings.inTangents,Array),outTangents:_r(e.settings.outTangents,Array)}}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Ch(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ql(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Rh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Ph(this.times,this.values,this.getValueSize(),e);if(this.settings)t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents;return t}setInterpolation(e){let t;switch(e){case Dr:t=this.InterpolantFactoryMethodDiscrete;break;case Bs:t=this.InterpolantFactoryMethodLinear;break;case Lc:t=this.InterpolantFactoryMethodSmooth;break;case Mf:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(i);return be("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Dr;case this.InterpolantFactoryMethodLinear:return Bs;case this.InterpolantFactoryMethodSmooth:return Lc;case this.InterpolantFactoryMethodBezier:return Mf}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]+=e;if(so(this.settings))im(this.settings.inTangents,e),im(this.settings.outTangents,e)}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]*=e;if(so(this.settings))nm(this.settings.inTangents,e),nm(this.settings.outTangents,e)}return this}trim(e,t){let i=this.times,n=i.length,r=0,s=n-1;while(r!==n&&i[r]<e)++r;while(s!==-1&&i[s]>t)--s;if(++s,r!==0||s!==n){if(r>=s)s=Math.max(s,1),r=s-1;let o=this.getValueSize();this.times=i.slice(r,s),this.values=this.values.slice(r*o,s*o)}return this}validate(){let e=!0,t=this.getValueSize();if(t-Math.floor(t)!==0)We("KeyframeTrack: Invalid value size in track.",this),e=!1;let i=this.times,n=this.values,r=i.length;if(r===0)We("KeyframeTrack: Track is empty.",this),e=!1;let s=null;for(let o=0;o!==r;o++){let a=i[o];if(typeof a==="number"&&isNaN(a)){We("KeyframeTrack: Time is not a valid number.",this,o,a),e=!1;break}if(s!==null&&s>a){We("KeyframeTrack: Out of order keys.",this,o,a,s),e=!1;break}s=a}if(n!==void 0){if(Sf(n))for(let o=0,a=n.length;o!==a;++o){let l=n[o];if(isNaN(l)){We("KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),n=this.getInterpolation()===Lc,r=e.length-1,s=1;for(let o=1;o<r;++o){let a=!1,l=e[o],c=e[o+1];if(l!==c&&(o!==1||l!==e[0]))if(!n){let h=o*i,u=h-i,f=h+i;for(let m=0;m!==i;++m){let g=t[h+m];if(g!==t[u+m]||g!==t[f+m]){a=!0;break}}}else a=!0;if(a){if(o!==s){e[s]=e[o];let h=o*i,u=s*i;for(let f=0;f!==i;++f)t[u+f]=t[h+f]}++s}}if(r>0){e[s]=e[r];for(let o=r*i,a=s*i,l=0;l!==i;++l)t[a+l]=t[o+l];++s}if(s!==e.length)this.times=e.slice(0,s),this.values=t.slice(0,s*i);else this.times=e,this.values=t;return this}clone(){let e=this.times.slice(),t=this.values.slice(),n=new this.constructor(this.name,e,t);if(n.createInterpolant=this.createInterpolant,so(this.settings))n.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()};return n}}function im(e,t){for(let i=0,n=e.length;i!==n;i+=2)e[i]+=t}function nm(e,t){for(let i=0,n=e.length;i!==n;i+=2)e[i]*=t}bi.prototype.ValueTypeName="";bi.prototype.TimeBufferType=Float32Array;bi.prototype.ValueBufferType=Float32Array;bi.prototype.DefaultInterpolation=Bs;class Xr extends bi{constructor(e,t,i){super(e,t,i)}}Xr.prototype.ValueTypeName="bool";Xr.prototype.ValueBufferType=Array;Xr.prototype.DefaultInterpolation=Dr;Xr.prototype.InterpolantFactoryMethodLinear=void 0;Xr.prototype.InterpolantFactoryMethodSmooth=void 0;class Zl extends bi{constructor(e,t,i,n){super(e,t,i,n)}}Zl.prototype.ValueTypeName="color";class Yr extends bi{constructor(e,t,i,n){super(e,t,i,n)}}Yr.prototype.ValueTypeName="number";class Ih extends vn{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){let r=this.resultBuffer,s=this.sampleValues,o=this.valueSize,a=(i-t)/(n-t),l=e*o;for(let c=l+o;l!==c;l+=4)ri.slerpFlat(r,0,s,l-o,s,l,a);return r}}class yr extends bi{constructor(e,t,i,n){super(e,t,i,n)}InterpolantFactoryMethodLinear(e){return new Ih(this.times,this.values,this.getValueSize(),e)}}yr.prototype.ValueTypeName="quaternion";yr.prototype.InterpolantFactoryMethodSmooth=void 0;class qr extends bi{constructor(e,t,i){super(e,t,i)}}qr.prototype.ValueTypeName="string";qr.prototype.ValueBufferType=Array;qr.prototype.DefaultInterpolation=Dr;qr.prototype.InterpolantFactoryMethodLinear=void 0;qr.prototype.InterpolantFactoryMethodSmooth=void 0;class Zr extends bi{constructor(e,t,i,n){super(e,t,i,n)}}Zr.prototype.ValueTypeName="vector";class ps{constructor(e="",t=-1,i=[],n=Uc){if(this.name=e,this.tracks=i,this.duration=t,this.blendMode=n,this.uuid=xi(),this.userData={},this.duration<0)this.resetDuration()}static parse(e){let t=[],i=e.tracks,n=1/(e.fps||1);for(let s=0,o=i.length;s!==o;++s)t.push(Y1(i[s]).scale(n));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){let t=[],i=e.tracks,n={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,s=i.length;r!==s;++r)t.push(bi.toJSON(i[r]));return n}static CreateFromMorphTargetSequence(e,t,i,n){let r=t.length,s=[];for(let o=0;o<r;o++){let a=[],l=[];a.push((o+r-1)%r,o,(o+1)%r),l.push(0,1,0);let c=$p(a);if(a=cu(a,1,c),l=cu(l,1,c),!n&&a[0]===0)a.push(r),l.push(l[0]);s.push(new Yr(".morphTargetInfluences["+t[o].name+"]",a,l).scale(1/i))}return new this(e,-1,s)}static findByName(e,t){let i=e;if(!Array.isArray(e)){let n=e;i=n.geometry&&n.geometry.animations||n.animations}for(let n=0;n<i.length;n++)if(i[n].name===t)return i[n];return null}static CreateClipsFromMorphTargetSequences(e,t,i){let n={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,a=e.length;o<a;o++){let l=e[o],c=l.name.match(r);if(c&&c.length>1){let h=c[1],u=n[h];if(!u)n[h]=u=[];u.push(l)}}let s=[];for(let o in n)s.push(this.CreateFromMorphTargetSequence(o,n[o],t,i));return s}resetDuration(){let e=this.tracks,t=0;for(let i=0,n=e.length;i!==n;++i){let r=this.tracks[i];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let i=0;i<this.tracks.length;i++)e.push(this.tracks[i].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function X1(e){switch(e.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Yr;case"vector":case"vector2":case"vector3":case"vector4":return Zr;case"color":return Zl;case"quaternion":return yr;case"bool":case"boolean":return Xr;case"string":return qr}throw Error("THREE.KeyframeTrack: Unsupported typeName: "+e)}function Y1(e){if(e.type===void 0)throw Error("THREE.KeyframeTrack: track type undefined, can not parse");let t=X1(e.type);if(e.times===void 0){let n=[],r=[];Qp(e.keys,n,r,"value"),e.times=n,e.values=r}let i;if(t.parse!==void 0)i=t.parse(e);else i=new t(e.name,e.times,e.values,e.interpolation);if(so(e.settings))i.settings={inTangents:_r(e.settings.inTangents,Float32Array),outTangents:_r(e.settings.outTangents,Float32Array)};return i}var Ln={enabled:!1,files:{},add:function(e,t){if(this.enabled===!1)return;if(rm(e))return;this.files[e]=t},get:function(e){if(this.enabled===!1)return;if(rm(e))return;return this.files[e]},remove:function(e){delete this.files[e]},clear:function(){this.files={}}};function rm(e){try{let t=e.slice(e.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch(t){return!1}}class Lh{constructor(e,t,i){let n=this,r=!1,s=0,o=0,a=void 0,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(c){if(o++,r===!1){if(n.onStart!==void 0)n.onStart(c,s,o)}r=!0},this.itemEnd=function(c){if(s++,n.onProgress!==void 0)n.onProgress(c,s,o);if(s===o){if(r=!1,n.onLoad!==void 0)n.onLoad()}},this.itemError=function(c){if(n.onError!==void 0)n.onError(c)},this.resolveURL=function(c){if(c=c.normalize("NFC"),a)return a(c);return c},this.setURLModifier=function(c){return a=c,this},this.addHandler=function(c,h){return l.push(c,h),this},this.removeHandler=function(c){let h=l.indexOf(c);if(h!==-1)l.splice(h,2);return this},this.getHandler=function(c){for(let h=0,u=l.length;h<u;h+=2){let f=l[h],m=l[h+1];if(f.global)f.lastIndex=0;if(f.test(c))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){if(!this._abortController)this._abortController=new AbortController;return this._abortController}}var hu=new Lh;class Mi{constructor(e){if(this.manager=e!==void 0?e:hu,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(n,r){i.load(e,n,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}}Mi.DEFAULT_MATERIAL_NAME="__DEFAULT";var Kr={};class sm extends Error{constructor(e,t){super(e);this.response=t}}class qn extends Mi{constructor(e){super(e);this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,i,n){if(e===void 0)e="";if(this.path!==void 0)e=this.path+e;e=this.manager.resolveURL(e);let r=Ln.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{if(t)t(r);this.manager.itemEnd(e)},0);return}if(Kr[e]!==void 0){Kr[e].push({onLoad:t,onProgress:i,onError:n});return}Kr[e]=[],Kr[e].push({onLoad:t,onProgress:i,onError:n});let s=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",priority:this.priority,cache:this.cache,signal:typeof AbortSignal.any==="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,a=this.responseType;fetch(s).then((l)=>{if(l.status===200||l.status===0){if(l.status===0)be("FileLoader: HTTP Status 0 received.");if(typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let c=Kr[e],h=l.body.getReader(),u=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),f=u?parseInt(u):0,m=f!==0,g=0,x=new ReadableStream({start(d){p();function p(){h.read().then(({done:_,value:y})=>{if(_)d.close();else{g+=y.byteLength;let v=new ProgressEvent("progress",{lengthComputable:m,loaded:g,total:f});for(let T=0,w=c.length;T<w;T++){let M=c[T];if(M.onProgress)M.onProgress(v)}d.enqueue(y),p()}},(_)=>{d.error(_)})}}});return new Response(x)}else throw new sm(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then((l)=>{switch(a){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then((c)=>new DOMParser().parseFromString(c,o));case"json":return l.json();default:if(o==="")return l.text();else{let h=/charset="?([^;"\s]*)"?/i.exec(o),u=h&&h[1]?h[1].toLowerCase():void 0,f=new TextDecoder(u);return l.arrayBuffer().then((m)=>f.decode(m))}}}).then((l)=>{Ln.add(`file:${e}`,l);let c=Kr[e];delete Kr[e];for(let h=0,u=c.length;h<u;h++){let f=c[h];if(f.onLoad)f.onLoad(l)}}).catch((l)=>{let c=Kr[e];if(c===void 0)throw this.manager.itemError(e),l;delete Kr[e];for(let h=0,u=c.length;h<u;h++){let f=c[h];if(f.onError)f.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}var ra=new WeakMap;class sa extends Mi{constructor(e){super(e)}load(e,t,i,n){if(this.path!==void 0)e=this.path+e;e=this.manager.resolveURL(e);let r=this,s=Ln.get(`image:${e}`);if(s!==void 0){if(s.complete===!0)r.manager.itemStart(e),setTimeout(function(){if(t)t(s);r.manager.itemEnd(e)},0);else{let h=ra.get(s);if(h===void 0)h=[],ra.set(s,h);h.push({onLoad:t,onError:n})}return s}let o=os("img");function a(){if(c(),t)t(this);let h=ra.get(this)||[];for(let u=0;u<h.length;u++){let f=h[u];if(f.onLoad)f.onLoad(this)}ra.delete(this),r.manager.itemEnd(e)}function l(h){if(c(),n)n(h);Ln.remove(`image:${e}`);let u=ra.get(this)||[];for(let f=0;f<u.length;f++){let m=u[f];if(m.onError)m.onError(h)}ra.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function c(){o.removeEventListener("load",a,!1),o.removeEventListener("error",l,!1)}if(o.addEventListener("load",a,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"){if(this.crossOrigin!==void 0)o.crossOrigin=this.crossOrigin}return Ln.add(`image:${e}`,o),r.manager.itemStart(e),o.fetchPriority=this.priority,o.src=e,o}}class ms extends Mi{constructor(e){super(e)}load(e,t,i,n){let r=new Ct,s=new sa(this.manager);return s.setPriority(this.priority),s.setCache(this.cache),s.setCrossOrigin(this.crossOrigin),s.setPath(this.path),s.load(e,function(o){if(r.image=o,r.needsUpdate=!0,t!==void 0)t(r)},i,n),r}}class Dn extends ct{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super();this.isLight=!0,this.type="Light",this.color=new fe(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}var fu=new Be,om=new A,am=new A;class gs{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new X(512,512),this.mapType=gi,this.map=null,this.mapPass=null,this.matrix=new Be,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Wn,this._frameExtents=new X(1,1),this._viewportCount=1,this._viewports=[new bt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;om.setFromMatrixPosition(e.matrixWorld),t.position.copy(om),am.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(am),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,n){fu.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(fu,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,s=n?n.z/r.x:1,o=n?n.w/r.y:1,a=n?n.x/r.x:0,l=n?n.y/r.y:0;if(e.coordinateSystem===dr||e.reversedDepth)t.set(0.5*s,0,0,0.5*s+a,0,0.5*o,0,0.5*o+l,0,0,1,0,0,0,0,1);else t.set(0.5*s,0,0,0.5*s+a,0,0.5*o,0,0.5*o+l,0,0,0.5,0.5,0,0,0,1);t.multiply(fu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){if(this.map)this.map.dispose();if(this.mapPass)this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}var Dh=new A,Nh=new ri,Mr=new A;class oo extends ct{constructor(){super();this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Be,this.projectionMatrix=new Be,this.projectionMatrixInverse=new Be,this.coordinateSystem=Oi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){if(super.updateMatrixWorld(e),this.matrixWorld.decompose(Dh,Nh,Mr),Mr.x===1&&Mr.y===1&&Mr.z===1)this.matrixWorldInverse.copy(this.matrixWorld).invert();else this.matrixWorldInverse.compose(Dh,Nh,Mr.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){if(super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(Dh,Nh,Mr),Mr.x===1&&Mr.y===1&&Mr.z===1)this.matrixWorldInverse.copy(this.matrixWorld).invert();else this.matrixWorldInverse.compose(Dh,Nh,Mr.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}var xs=new A,lm=new X,cm=new X;class ti extends oo{constructor(e=50,t=1,i=0.1,n=2000){super();this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=0.5*this.getFilmHeight()/e;this.fov=Fr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Nr*0.5*this.fov);return 0.5*this.getFilmHeight()/e}getEffectiveFOV(){return Fr*2*Math.atan(Math.tan(Nr*0.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){xs.set(-1,-1,0.5).applyMatrix4(this.projectionMatrixInverse),t.set(xs.x,xs.y).multiplyScalar(-e/xs.z),xs.set(1,1,0.5).applyMatrix4(this.projectionMatrixInverse),i.set(xs.x,xs.y).multiplyScalar(-e/xs.z)}getViewSize(e,t){return this.getViewBounds(e,lm,cm),t.subVectors(cm,lm)}setViewOffset(e,t,i,n,r,s){if(this.aspect=e/t,this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Nr*0.5*this.fov)/this.zoom,i=2*t,n=this.aspect*i,r=-0.5*n,s=this.view;if(this.view!==null&&this.view.enabled){let{fullWidth:a,fullHeight:l}=s;r+=s.offsetX*n/a,t-=s.offsetY*i/l,n*=s.width/a,i*=s.height/l}let o=this.filmOffset;if(o!==0)r+=e*o/this.getFilmWidth();this.projectionMatrix.makePerspective(r,r+n,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);if(t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null)t.object.view=Object.assign({},this.view);return t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class uu extends gs{constructor(){super(new ti(50,1,0.5,500));this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,i=Fr*2*e.angle*this.focus,n=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;if(i!==t.fov||n!==t.aspect||r!==t.far)t.fov=i,t.aspect=n,t.far=r,t.updateProjectionMatrix();super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}}class Kl extends Dn{constructor(e,t,i=0,n=Math.PI/3,r=0,s=2){super(e,t);this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ct.DEFAULT_UP),this.updateMatrix(),this.target=new ct,this.distance=i,this.angle=n,this.penumbra=r,this.decay=s,this.map=null,this.shadow=new uu}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);if(t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture)t.object.map=this.map.toJSON(e).uuid;return t.object.shadow=this.shadow.toJSON(),t}}class du extends gs{constructor(){super(new ti(90,1,0.5,500));this.isPointLightShadow=!0}}class hr extends Dn{constructor(e,t,i=0,n=2){super(e,t);this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=n,this.shadow=new du}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class fr extends oo{constructor(e=-1,t=1,i=1,n=-1,r=0.1,s=2000){super();this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=n,this.near=r,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,n,r,s){if(this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2,r=i-e,s=i+e,o=n+t,a=n-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,s=r+l*this.view.width,o-=c*this.view.offsetY,a=o-c*this.view.height}this.projectionMatrix.makeOrthographic(r,s,o,a,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);if(t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null)t.object.view=Object.assign({},this.view);return t}}class pu extends gs{constructor(){super(new fr(-5,5,5,-5,0.5,500));this.isDirectionalLightShadow=!0}}class Jl extends Dn{constructor(e,t){super(e,t);this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ct.DEFAULT_UP),this.updateMatrix(),this.target=new ct,this.shadow=new pu}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class jl extends Dn{constructor(e,t){super(e,t);this.isAmbientLight=!0,this.type="AmbientLight"}}class Jr{static extractUrlBase(e){let t=e.lastIndexOf("/");if(t===-1)return"./";return e.slice(0,t+1)}static resolveURL(e,t){if(typeof e!=="string"||e==="")return"";if(/^https?:\/\//i.test(t)&&/^\//.test(e))t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1");if(/^(https?:)?\/\//i.test(e))return e;if(/^data:.*,.*$/i.test(e))return e;if(/^blob:.*$/i.test(e))return e;return t+e}}var mu=new WeakMap;class Fh extends Mi{constructor(e){super(e);if(this.isImageBitmapLoader=!0,typeof createImageBitmap>"u")be("ImageBitmapLoader: createImageBitmap() not supported.");if(typeof fetch>"u")be("ImageBitmapLoader: fetch() not supported.");this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,i,n){if(e===void 0)e="";if(this.path!==void 0)e=this.path+e;e=this.manager.resolveURL(e);let r=this,s=Ln.get(`image-bitmap:${e}`);if(s!==void 0){if(r.manager.itemStart(e),s.then){s.then((l)=>{if(mu.has(s)===!0){if(n)n(mu.get(s));r.manager.itemError(e),r.manager.itemEnd(e)}else{if(t)t(l);r.manager.itemEnd(e)}});return}setTimeout(function(){if(t)t(s);r.manager.itemEnd(e)},0);return}let o={};o.credentials=this.withCredentials||this.crossOrigin!=="anonymous"?"include":"same-origin",o.headers=this.requestHeader,o.priority=this.priority,o.cache=this.cache,o.signal=typeof AbortSignal.any==="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let a=fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign({},r.options,{colorSpaceConversion:"none"}))}).then(function(l){if(Ln.add(`image-bitmap:${e}`,l),t)t(l);return r.manager.itemEnd(e),l}).catch(function(l){if(n)n(l);mu.set(a,l),Ln.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});Ln.add(`image-bitmap:${e}`,a),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}var oa=-90,aa=1;class ao extends ct{constructor(e,t,i){super();this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let n=new ti(oa,aa,e,t);n.layers=this.layers,this.add(n);let r=new ti(oa,aa,e,t);r.layers=this.layers,this.add(r);let s=new ti(oa,aa,e,t);s.layers=this.layers,this.add(s);let o=new ti(oa,aa,e,t);o.layers=this.layers,this.add(o);let a=new ti(oa,aa,e,t);a.layers=this.layers,this.add(a);let l=new ti(oa,aa,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,n,r,s,o,a]=t;for(let l of t)this.remove(l);if(e===Oi)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),a.up.set(0,1,0),a.lookAt(0,0,-1);else if(e===dr)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),a.up.set(0,-1,0),a.lookAt(0,0,-1);else throw Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){if(this.parent===null)this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:n}=this;if(this.coordinateSystem!==e.coordinateSystem)this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem();let[r,s,o,a,l,c]=this.children,h=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;let g=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let x=!1;if(e.isWebGLRenderer===!0)x=e.state.buffers.depth.getReversed();else x=e.reversedDepthBuffer;if(e.setRenderTarget(i,0,n),x&&e.autoClear===!1)e.clearDepth();if(e.render(t,r),e.setRenderTarget(i,1,n),x&&e.autoClear===!1)e.clearDepth();if(e.render(t,s),e.setRenderTarget(i,2,n),x&&e.autoClear===!1)e.clearDepth();if(e.render(t,o),e.setRenderTarget(i,3,n),x&&e.autoClear===!1)e.clearDepth();if(e.render(t,a),e.setRenderTarget(i,4,n),x&&e.autoClear===!1)e.clearDepth();if(e.render(t,l),i.texture.mipmapsAutoUpdate=g,e.setRenderTarget(i,5,n),x&&e.autoClear===!1)e.clearDepth();e.render(t,c),e.setRenderTarget(h,u,f),e.xr.enabled=m,i.texture.needsPMREMUpdate=!0}}class Uh extends ti{constructor(e=[]){super();this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}}class $l{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){if(this._document=e,e.hidden!==void 0)this._pageVisibilityHandler=nM.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1)}disconnect(){if(this._pageVisibilityHandler!==null)this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null;this._document=null}getDelta(){return this._delta/1000}getElapsed(){return this._elapsed/1000}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){if(this._pageVisibilityHandler!==null&&this._document.hidden===!0)this._delta=0;else this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta;return this}}function nM(){if(this._document.hidden===!1)this.reset()}var gu="\\[\\]\\.:\\/",sM=new RegExp("["+gu+"]","g"),xu="[^"+gu+"]",oM="[^"+gu.replace("\\.","")+"]",aM=/((?:WC+[\/:])*)/.source.replace("WC",xu),lM=/(WCOD+)?/.source.replace("WCOD",oM),cM=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",xu),hM=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",xu),fM=new RegExp("^"+aM+lM+cM+hM+"$"),uM=["material","materials","bones","map"];class um{constructor(e,t,i){let n=i||Ft.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,n)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,n=this._bindings[i];if(n!==void 0)n.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let n=this._targetGroup.nCachedObjects_,r=i.length;n!==r;++n)i[n].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}}class Ft{constructor(e,t,i){this.path=t,this.parsedPath=i||Ft.parseTrackName(t),this.node=Ft.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){if(!(e&&e.isAnimationObjectGroup))return new Ft(e,t,i);else return new Ft.Composite(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(sM,"")}static parseTrackName(e){let t=fM.exec(e);if(t===null)throw Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},n=i.nodeName&&i.nodeName.lastIndexOf(".");if(n!==void 0&&n!==-1){let r=i.nodeName.substring(n+1);if(uM.indexOf(r)!==-1)i.nodeName=i.nodeName.substring(0,n),i.objectName=r}if(i.propertyName===null||i.propertyName.length===0)throw Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let s=0;s<r.length;s++){let o=r[s];if(o.name===t||o.uuid===t)return o;let a=i(o.children);if(a)return a}return null},n=i(e.children);if(n)return n}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)e[t++]=i[n]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,{objectName:i,propertyName:n,propertyIndex:r}=t;if(!e)e=Ft.findNode(this.rootNode,t.nodeName),this.node=e;if(this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){be("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let l=t.objectIndex;switch(i){case"materials":if(!e.material){We("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){We("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){We("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let c=0;c<e.length;c++)if(e[c].name===l){l=c;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){We("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){We("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){We("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(l!==void 0){if(e[l]===void 0){We("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let s=e[n];if(s===void 0){let l=t.nodeName;We("PropertyBinding: Trying to update property for track: "+l+"."+n+" but it wasn't found.",e);return}let o=this.Versioning.None;if(this.targetObject=e,e.isMaterial===!0)o=this.Versioning.NeedsUpdate;else if(e.isObject3D===!0)o=this.Versioning.MatrixWorldNeedsUpdate;let a=this.BindingType.Direct;if(r!==void 0){if(n==="morphTargetInfluences"){if(!e.geometry){We("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){We("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}if(e.morphTargetDictionary[r]!==void 0)r=e.morphTargetDictionary[r]}a=this.BindingType.ArrayElement,this.resolvedProperty=s,this.propertyIndex=r}else if(s.fromArray!==void 0&&s.toArray!==void 0)a=this.BindingType.HasFromToArray,this.resolvedProperty=s;else if(Array.isArray(s))a=this.BindingType.EntireArray,this.resolvedProperty=s;else this.propertyName=n;this.getValue=this.GetterByBindingType[a],this.setValue=this.SetterByBindingTypeAndVersioning[a][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Ft.Composite=um;Ft.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ft.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ft.prototype.GetterByBindingType=[Ft.prototype._getValue_direct,Ft.prototype._getValue_array,Ft.prototype._getValue_arrayElement,Ft.prototype._getValue_toArray];Ft.prototype.SetterByBindingTypeAndVersioning=[[Ft.prototype._setValue_direct,Ft.prototype._setValue_direct_setNeedsUpdate,Ft.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ft.prototype._setValue_array,Ft.prototype._setValue_array_setNeedsUpdate,Ft.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ft.prototype._setValue_arrayElement,Ft.prototype._setValue_arrayElement_setNeedsUpdate,Ft.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ft.prototype._setValue_fromArray,Ft.prototype._setValue_fromArray_setNeedsUpdate,Ft.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var PF=new Float32Array(1);var dm=new Be;class Bh{constructor(e,t,i=0,n=1/0){this.ray=new Vn(e,t),this.near=i,this.far=n,this.camera=null,this.layers=new ls,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){if(t.isPerspectiveCamera)this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,0.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t;else if(t.isOrthographicCamera)this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t;else We("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return dm.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(dm),this}intersectObject(e,t=!0,i=[]){return _u(e,this,i,t),i.sort(pm),i}intersectObjects(e,t=!0,i=[]){for(let n=0,r=e.length;n<r;n++)_u(e[n],this,i,t);return i.sort(pm),i}}function pm(e,t){return e.distance-t.distance}function _u(e,t,i,n){let r=!0;if(e.layers.test(t.layers)){if(e.raycast(t,i)===!1)r=!1}if(r===!0&&n===!0){let s=e.children;for(let o=0,a=s.length;o<a;o++)_u(s[o],t,i,!0)}}class Oh{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,be("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=performance.now();e=(t-this.oldTime)/1000,this.oldTime=t,this.elapsedTime+=e}return e}}class mm{static{this.prototype.isMatrix2=!0}constructor(e,t,i,n){if(this.elements=[1,0,0,1],e!==void 0)this.set(e,t,i,n)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,n){let r=this.elements;return r[0]=e,r[2]=t,r[1]=i,r[3]=n,this}}function yu(e,t,i,n){let r=gM(n);switch(i){case Pc:return e*t;case To:return e*t/r.components*r.byteLength;case Ns:return e*t/r.components*r.byteLength;case En:return e*t*2/r.components*r.byteLength;case Eo:return e*t*2/r.components*r.byteLength;case Ic:return e*t*3/r.components*r.byteLength;case Pi:return e*t*4/r.components*r.byteLength;case wo:return e*t*4/r.components*r.byteLength;case Ao:case Ro:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Co:case Po:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Ba:case Ha:return Math.max(e,16)*Math.max(t,8)/4;case Ua:case Oa:return Math.max(e,8)*Math.max(t,8)/2;case Ga:case za:case Va:case Wa:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case ka:case Fs:case Xa:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Ya:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case qa:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case Za:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case Ka:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case Ja:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case ja:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case $a:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case Qa:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case el:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case tl:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case il:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case nl:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case rl:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case sl:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case ol:case al:case ll:return Math.ceil(e/4)*Math.ceil(t/4)*16;case cl:case hl:return Math.ceil(e/4)*Math.ceil(t/4)*8;case Us:case fl:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw Error(`Unable to determine texture byte length for ${i} format.`)}function gM(e){switch(e){case gi:case wc:return{byteLength:1,components:1};case Lr:case Ac:case ni:return{byteLength:2,components:1};case So:case bo:return{byteLength:2,components:4};case Ci:case vo:case di:return{byteLength:4,components:1};case Rc:case Cc:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}if(typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ta}}));if(typeof window<"u")if(window.__THREE__)be("WARNING: Multiple instances of Three.js being imported.");else window.__THREE__=Ta;function Hh(){let e=null,t=!1,i=null,n=null;function r(s,o){n=e.requestAnimationFrame(r),i(s,o)}return{start:function(){if(t===!0)return;if(i===null)return;if(e===null)return;n=e.requestAnimationFrame(r),t=!0},stop:function(){if(e!==null)e.cancelAnimationFrame(n);t=!1},setAnimationLoop:function(s){i=s},setContext:function(s){e=s}}}function gm(e){let t=new WeakMap;function i(a,l){let{array:c,usage:h}=a,u=c.byteLength,f=e.createBuffer();e.bindBuffer(l,f),e.bufferData(l,c,h),a.onUploadCallback();let m;if(c instanceof Float32Array)m=e.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)m=e.HALF_FLOAT;else if(c instanceof Uint16Array)if(a.isFloat16BufferAttribute)m=e.HALF_FLOAT;else m=e.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=e.SHORT;else if(c instanceof Uint32Array)m=e.UNSIGNED_INT;else if(c instanceof Int32Array)m=e.INT;else if(c instanceof Int8Array)m=e.BYTE;else if(c instanceof Uint8Array)m=e.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=e.UNSIGNED_BYTE;else throw Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){let{array:h,updateRanges:u}=l;if(e.bindBuffer(c,a),u.length===0)e.bufferSubData(c,0,h);else{u.sort((m,g)=>m.start-g.start);let f=0;for(let m=1;m<u.length;m++){let g=u[f],x=u[m];if(x.start<=g.start+g.count+1)g.count=Math.max(g.count,x.start+x.count-g.start);else++f,u[f]=x}u.length=f+1;for(let m=0,g=u.length;m<g;m++){let x=u[m];e.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){if(a.isInterleavedBufferAttribute)a=a.data;return t.get(a)}function s(a){if(a.isInterleavedBufferAttribute)a=a.data;let l=t.get(a);if(l)e.deleteBuffer(l.buffer),t.delete(a)}function o(a,l){if(a.isInterleavedBufferAttribute)a=a.data;if(a.isGLBufferAttribute){let h=t.get(a);if(!h||h.version<a.version)t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,i(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var xm=`
#ifdef USE_ALPHAHASH

	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;

#endif
`;var _m=`
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
`;var ym=`
#ifdef USE_ALPHAMAP

	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;

#endif
`;var Mm=`
#ifdef USE_ALPHAMAP

	uniform sampler2D alphaMap;

#endif
`;var vm=`
#ifdef USE_ALPHATEST

	#ifdef ALPHA_TO_COVERAGE

	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;

	#else

	if ( diffuseColor.a < alphaTest ) discard;

	#endif

#endif
`;var Sm=`
#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif
`;var bm=`
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
`;var Tm=`
#ifdef USE_AOMAP

	uniform sampler2D aoMap;
	uniform float aoMapIntensity;

#endif
`;var Em=`
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
`;var wm=`
#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif
`;var Am=`
vec3 transformed = vec3( position );

#ifdef USE_ALPHAHASH

	vPosition = vec3( position );

#endif
`;var Rm=`
vec3 objectNormal = vec3( normal );

#ifdef USE_TANGENT

	vec3 objectTangent = vec3( tangent.xyz );

#endif
`;var Cm=`

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

`;var Pm=`

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

`;var Im=`
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
`;var Lm=`
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
`;var Dm=`
#if NUM_CLIPPING_PLANES > 0

	varying vec3 vClipPosition;

	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];

#endif
`;var Nm=`
#if NUM_CLIPPING_PLANES > 0

	varying vec3 vClipPosition;

#endif
`;var Fm=`
#if NUM_CLIPPING_PLANES > 0

	vClipPosition = - mvPosition.xyz;

#endif
`;var Um=`
#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )

	diffuseColor *= vColor;

#endif
`;var Bm=`
#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )

	varying vec4 vColor;

#endif
`;var Om=`
#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )

	varying vec4 vColor;

#endif
`;var Hm=`
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
`;var Gm=`
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
`;var zm=`

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
`;var km=`
#ifdef USE_DISPLACEMENTMAP

	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;

#endif
`;var Vm=`
#ifdef USE_DISPLACEMENTMAP

	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );

#endif
`;var Wm=`
#ifdef USE_EMISSIVEMAP

	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );

	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE

		// use inline sRGB decode until browsers properly support SRGB8_ALPHA8 with video textures (#26516)

		emissiveColor = sRGBTransferEOTF( emissiveColor );

	#endif

	totalEmissiveRadiance *= emissiveColor.rgb;

#endif
`;var Xm=`
#ifdef USE_EMISSIVEMAP

	uniform sampler2D emissiveMap;

#endif
`;var Ym=`
gl_FragColor = linearToOutputTexel( gl_FragColor );
`;var qm=`

vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}

vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}

vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}

`;var Zm=`
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
`;var Km=`
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
`;var Jm=`
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
`;var jm=`
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
`;var $m=`
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
`;var Qm=`
#ifdef USE_FOG

	vFogDepth = - mvPosition.z;

#endif
`;var e0=`
#ifdef USE_FOG

	varying float vFogDepth;

#endif
`;var t0=`
#ifdef USE_FOG

	#ifdef FOG_EXP2

		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );

	#else

		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );

	#endif

	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );

#endif
`;var i0=`
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
`;var n0=`

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
`;var r0=`
#ifdef USE_LIGHTMAP

	uniform sampler2D lightMap;
	uniform float lightMapIntensity;

#endif
`;var s0=`
LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;
`;var o0=`
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
`;var a0=`
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
`;var l0=`
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
`;var c0=`
ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;
`;var h0=`
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
`;var f0=`
BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;
`;var u0=`
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
`;var d0=`
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
`;var p0=`

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
`;var m0=`
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
`;var g0=`
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
`;var x0=`
#if defined( RE_IndirectDiffuse )

	#if defined( LAMBERT ) || defined( PHONG )

		irradiance += iblIrradiance;

	#endif

	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );

#endif

#if defined( RE_IndirectSpecular )

	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );

#endif
`;var _0=`
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
`;var y0=`
#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )

	// Doing a strict comparison with == 1.0 can cause noise artifacts
	// on some platforms. See issue #17623.
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;

#endif
`;var M0=`
#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )

	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;

#endif
`;var v0=`
#ifdef USE_LOGARITHMIC_DEPTH_BUFFER

	varying float vFragDepth;
	varying float vIsPerspective;

#endif
`;var S0=`
#ifdef USE_LOGARITHMIC_DEPTH_BUFFER

	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );

#endif
`;var b0=`
#ifdef USE_MAP

	vec4 sampledDiffuseColor = texture2D( map, vMapUv );

	#ifdef DECODE_VIDEO_TEXTURE

		// use inline sRGB decode until browsers properly support SRGB8_ALPHA8 with video textures (#26516)

		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );

	#endif

	diffuseColor *= sampledDiffuseColor;

#endif
`;var T0=`
#ifdef USE_MAP

	uniform sampler2D map;

#endif
`;var E0=`
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
`;var w0=`
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
`;var A0=`
float metalnessFactor = metalness;

#ifdef USE_METALNESSMAP

	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );

	// reads channel B, compatible with a combined OcclusionRoughnessMetallic (RGB) texture
	metalnessFactor *= texelMetalness.b;

#endif
`;var R0=`
#ifdef USE_METALNESSMAP

	uniform sampler2D metalnessMap;

#endif
`;var C0=`
#ifdef USE_INSTANCING_MORPH

	float morphTargetInfluences[ MORPHTARGETS_COUNT ];

	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;

	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {

		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;

	}
#endif
`;var P0=`
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
`;var I0=`
#ifdef USE_MORPHNORMALS

	// morphTargetBaseInfluence is set based on BufferGeometry.morphTargetsRelative value:
	// When morphTargetsRelative is false, this is set to 1 - sum(influences); this results in normal = sum((target - base) * influence)
	// When morphTargetsRelative is true, this is set to 1; as a result, all morph targets are simply added to the base after weighting
	objectNormal *= morphTargetBaseInfluence;

	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {

		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];

	}

#endif
`;var L0=`
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
`;var D0=`
#ifdef USE_MORPHTARGETS

	// morphTargetBaseInfluence is set based on BufferGeometry.morphTargetsRelative value:
	// When morphTargetsRelative is false, this is set to 1 - sum(influences); this results in position = sum((target - base) * influence)
	// When morphTargetsRelative is true, this is set to 1; as a result, all morph targets are simply added to the base after weighting
	transformed *= morphTargetBaseInfluence;

	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {

		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];

	}

#endif
`;var N0=`
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

`;var F0=`

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
`;var U0=`
#ifndef FLAT_SHADED

	varying vec3 vNormal;

	#ifdef USE_TANGENT

		varying vec3 vTangent;
		varying vec3 vBitangent;

	#endif

#endif
`;var B0=`
#ifndef FLAT_SHADED

	varying vec3 vNormal;

	#ifdef USE_TANGENT

		varying vec3 vTangent;
		varying vec3 vBitangent;

	#endif

#endif
`;var O0=`
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
`;var H0=`
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
`;var G0=`
#ifdef USE_CLEARCOAT

	vec3 clearcoatNormal = nonPerturbedNormal;

#endif
`;var z0=`
#ifdef USE_CLEARCOAT_NORMALMAP

	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;

	clearcoatNormal = normalize( tbn2 * clearcoatMapN );

#endif
`;var k0=`

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
`;var V0=`

#ifdef USE_IRIDESCENCEMAP

	uniform sampler2D iridescenceMap;

#endif

#ifdef USE_IRIDESCENCE_THICKNESSMAP

	uniform sampler2D iridescenceThicknessMap;

#endif
`;var W0=`
#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif

#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif

gl_FragColor = vec4( outgoingLight, diffuseColor.a );
`;var X0=`
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
`;var Y0=`
#ifdef PREMULTIPLIED_ALPHA

	gl_FragColor.rgb *= gl_FragColor.a;

#endif
`;var q0=`
vec4 mvPosition = vec4( transformed, 1.0 );

#ifdef USE_BATCHING

	mvPosition = batchingMatrix * mvPosition;

#endif

#ifdef USE_INSTANCING

	mvPosition = instanceMatrix * mvPosition;

#endif

mvPosition = modelViewMatrix * mvPosition;

gl_Position = projectionMatrix * mvPosition;
`;var Z0=`
#ifdef DITHERING

	gl_FragColor.rgb = dithering( gl_FragColor.rgb );

#endif
`;var K0=`
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
`;var J0=`
float roughnessFactor = roughness;

#ifdef USE_ROUGHNESSMAP

	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );

	// reads channel G, compatible with a combined OcclusionRoughnessMetallic (RGB) texture
	roughnessFactor *= texelRoughness.g;

#endif
`;var j0=`
#ifdef USE_ROUGHNESSMAP

	uniform sampler2D roughnessMap;

#endif
`;var $0=`
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
`;var Q0=`

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
`;var eg=`

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


`;var tg=`
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
`;var ig=`
#ifdef USE_SKINNING

	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );

#endif
`;var ng=`
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
`;var rg=`
#ifdef USE_SKINNING

	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );

	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;

	transformed = ( bindMatrixInverse * skinned ).xyz;

#endif
`;var sg=`
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
`;var og=`
float specularStrength;

#ifdef USE_SPECULARMAP

	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;

#else

	specularStrength = 1.0;

#endif
`;var ag=`
#ifdef USE_SPECULARMAP

	uniform sampler2D specularMap;

#endif
`;var lg=`
#if defined( TONE_MAPPING )

	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );

#endif
`;var cg=`
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
`;var hg=`
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
`;var fg=`
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
`;var ug=`
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
`;var dg=`
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
`;var pg=`
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
`;var mg=`
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
`;var gg=`
varying vec2 vUv;
uniform mat3 uvTransform;

void main() {

	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;

	gl_Position = vec4( position.xy, 1.0, 1.0 );

}
`,xg=`
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
`;var _g=`
varying vec3 vWorldDirection;

#include <common>

void main() {

	vWorldDirection = transformDirection( position, modelMatrix );

	#include <begin_vertex>
	#include <project_vertex>

	gl_Position.z = gl_Position.w; // set z to camera.far

}
`,yg=`

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
`;var Sg=`
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
`,bg=`
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
`;var Tg=`
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
`,Eg=`
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
`;var wg=`
varying vec3 vWorldDirection;

#include <common>

void main() {

	vWorldDirection = transformDirection( position, modelMatrix );

	#include <begin_vertex>
	#include <project_vertex>

}
`,Ag=`
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
`;var Rg=`
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
`,Cg=`
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
`;var Pg=`
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
`,Ig=`
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
`;var Lg=`
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
`,Dg=`
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
`;var Ng=`
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
`,Fg=`
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
`;var Ug=`
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
`,Bg=`
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
`;var Og=`
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
`,Hg=`
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
`;var Gg=`
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
`,zg=`
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
`;var kg=`
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
`,Vg=`
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
`;var Wg=`
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
`,Xg=`
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
`;var Yg=`
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
`,qg=`
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
`;var Zg=`
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
`,Kg=`
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
`;var xt={alphahash_fragment:xm,alphahash_pars_fragment:_m,alphamap_fragment:ym,alphamap_pars_fragment:Mm,alphatest_fragment:vm,alphatest_pars_fragment:Sm,aomap_fragment:bm,aomap_pars_fragment:Tm,batching_pars_vertex:Em,batching_vertex:wm,begin_vertex:Am,beginnormal_vertex:Rm,bsdfs:Cm,iridescence_fragment:Pm,bumpmap_pars_fragment:Im,clipping_planes_fragment:Lm,clipping_planes_pars_fragment:Dm,clipping_planes_pars_vertex:Nm,clipping_planes_vertex:Fm,color_fragment:Um,color_pars_fragment:Bm,color_pars_vertex:Om,color_vertex:Hm,common:Gm,defaultnormal_vertex:zm,displacementmap_pars_vertex:km,displacementmap_vertex:Vm,emissivemap_fragment:Wm,emissivemap_pars_fragment:Xm,colorspace_fragment:Ym,colorspace_pars_fragment:qm,envmap_fragment:Zm,envmap_common_pars_fragment:Km,envmap_pars_fragment:Jm,envmap_pars_vertex:jm,envmap_physical_pars_fragment:l0,envmap_vertex:$m,fog_vertex:Qm,fog_pars_vertex:e0,fog_fragment:t0,fog_pars_fragment:i0,gradientmap_pars_fragment:n0,lightmap_pars_fragment:r0,lights_lambert_fragment:s0,lights_lambert_pars_fragment:o0,lights_pars_begin:a0,lights_toon_fragment:c0,lights_toon_pars_fragment:h0,lights_phong_fragment:f0,lights_phong_pars_fragment:u0,lights_physical_fragment:d0,lights_physical_pars_fragment:p0,lights_fragment_begin:m0,lights_fragment_maps:g0,lights_fragment_end:x0,lightprobes_pars_fragment:_0,logdepthbuf_fragment:y0,logdepthbuf_pars_fragment:M0,logdepthbuf_pars_vertex:v0,logdepthbuf_vertex:S0,map_fragment:b0,map_pars_fragment:T0,map_particle_fragment:E0,map_particle_pars_fragment:w0,metalnessmap_fragment:A0,metalnessmap_pars_fragment:R0,morphinstance_vertex:C0,morphcolor_vertex:P0,morphnormal_vertex:I0,morphtarget_pars_vertex:L0,morphtarget_vertex:D0,normal_fragment_begin:N0,normal_fragment_maps:F0,normal_pars_fragment:U0,normal_pars_vertex:B0,normal_vertex:O0,normalmap_pars_fragment:H0,clearcoat_normal_fragment_begin:G0,clearcoat_normal_fragment_maps:z0,clearcoat_pars_fragment:k0,iridescence_pars_fragment:V0,opaque_fragment:W0,packing:X0,premultiplied_alpha_fragment:Y0,project_vertex:q0,dithering_fragment:Z0,dithering_pars_fragment:K0,roughnessmap_fragment:J0,roughnessmap_pars_fragment:j0,shadowmap_pars_fragment:$0,shadowmap_pars_vertex:Q0,shadowmap_vertex:eg,shadowmask_pars_fragment:tg,skinbase_vertex:ig,skinning_pars_vertex:ng,skinning_vertex:rg,skinnormal_vertex:sg,specularmap_fragment:og,specularmap_pars_fragment:ag,tonemapping_fragment:lg,tonemapping_pars_fragment:cg,transmission_fragment:hg,transmission_pars_fragment:fg,uv_pars_fragment:ug,uv_pars_vertex:dg,uv_vertex:pg,worldpos_vertex:mg,background_vert:gg,background_frag:xg,backgroundCube_vert:_g,backgroundCube_frag:yg,cube_vert:Mg,cube_frag:vg,depth_vert:Sg,depth_frag:bg,distance_vert:Tg,distance_frag:Eg,equirect_vert:wg,equirect_frag:Ag,linedashed_vert:Rg,linedashed_frag:Cg,meshbasic_vert:Pg,meshbasic_frag:Ig,meshlambert_vert:Lg,meshlambert_frag:Dg,meshmatcap_vert:Ng,meshmatcap_frag:Fg,meshnormal_vert:Ug,meshnormal_frag:Bg,meshphong_vert:Og,meshphong_frag:Hg,meshphysical_vert:Gg,meshphysical_frag:zg,meshtoon_vert:kg,meshtoon_frag:Vg,points_vert:Wg,points_frag:Xg,shadow_vert:Yg,shadow_frag:qg,sprite_vert:Zg,sprite_frag:Kg};var De={common:{diffuse:{value:new fe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new st}},envmap:{envMap:{value:null},envMapRotation:{value:new st},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:0.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new st}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new st}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new st},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new st},normalScale:{value:new X(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new st},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new st}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new st}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new st}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:0.00025},fogNear:{value:1},fogFar:{value:2000},fogColor:{value:new fe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new fe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0},uvTransform:{value:new st}},sprite:{diffuse:{value:new fe(16777215)},opacity:{value:1},center:{value:new X(0.5,0.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}}};var Nn={basic:{uniforms:ln([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.fog]),vertexShader:xt.meshbasic_vert,fragmentShader:xt.meshbasic_frag},lambert:{uniforms:ln([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new fe(0)},envMapIntensity:{value:1}}]),vertexShader:xt.meshlambert_vert,fragmentShader:xt.meshlambert_frag},phong:{uniforms:ln([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new fe(0)},specular:{value:new fe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:xt.meshphong_vert,fragmentShader:xt.meshphong_frag},standard:{uniforms:ln([De.common,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.roughnessmap,De.metalnessmap,De.fog,De.lights,{emissive:{value:new fe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:xt.meshphysical_vert,fragmentShader:xt.meshphysical_frag},toon:{uniforms:ln([De.common,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.gradientmap,De.fog,De.lights,{emissive:{value:new fe(0)}}]),vertexShader:xt.meshtoon_vert,fragmentShader:xt.meshtoon_frag},matcap:{uniforms:ln([De.common,De.bumpmap,De.normalmap,De.displacementmap,De.fog,{matcap:{value:null}}]),vertexShader:xt.meshmatcap_vert,fragmentShader:xt.meshmatcap_frag},points:{uniforms:ln([De.points,De.fog]),vertexShader:xt.points_vert,fragmentShader:xt.points_frag},dashed:{uniforms:ln([De.common,De.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:xt.linedashed_vert,fragmentShader:xt.linedashed_frag},depth:{uniforms:ln([De.common,De.displacementmap]),vertexShader:xt.depth_vert,fragmentShader:xt.depth_frag},normal:{uniforms:ln([De.common,De.bumpmap,De.normalmap,De.displacementmap,{opacity:{value:1}}]),vertexShader:xt.meshnormal_vert,fragmentShader:xt.meshnormal_frag},sprite:{uniforms:ln([De.sprite,De.fog]),vertexShader:xt.sprite_vert,fragmentShader:xt.sprite_frag},background:{uniforms:{uvTransform:{value:new st},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:xt.background_vert,fragmentShader:xt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new st}},vertexShader:xt.backgroundCube_vert,fragmentShader:xt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:xt.cube_vert,fragmentShader:xt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:xt.equirect_vert,fragmentShader:xt.equirect_frag},distance:{uniforms:ln([De.common,De.displacementmap,{referencePosition:{value:new A},nearDistance:{value:1},farDistance:{value:1000}}]),vertexShader:xt.distance_vert,fragmentShader:xt.distance_frag},shadow:{uniforms:ln([De.lights,De.fog,{color:{value:new fe(0)},opacity:{value:1}}]),vertexShader:xt.shadow_vert,fragmentShader:xt.shadow_frag}};Nn.physical={uniforms:ln([Nn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new st},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new st},clearcoatNormalScale:{value:new X(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new st},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new st},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new st},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new st},sheen:{value:0},sheenColor:{value:new fe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new st},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new st},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new st},transmissionSamplerSize:{value:new X},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new st},attenuationDistance:{value:0},attenuationColor:{value:new fe(0)},specularColor:{value:new fe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new st},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new st},anisotropyVector:{value:new X},anisotropyMap:{value:null},anisotropyMapTransform:{value:new st}}]),vertexShader:xt.meshphysical_vert,fragmentShader:xt.meshphysical_frag};var Gh={r:0,b:0,g:0},UM=new Be,Jg=new st;Jg.set(-1,0,0,0,1,0,0,0,1);function jg(e,t,i,n,r,s){let o=new fe(0),a=r===!0?0:1,l,c,h=null,u=0,f=null;function m(_){let y=_.isScene===!0?_.background:null;if(y&&y.isTexture){let v=_.backgroundBlurriness>0;y=t.get(y,v)}return y}function g(_){let y=!1,v=m(_);if(v===null)d(o,a);else if(v&&v.isColor)d(v,1),y=!0;let T=e.xr.getEnvironmentBlendMode();if(T==="additive")i.buffers.color.setClear(0,0,0,1,s);else if(T==="alpha-blend")i.buffers.color.setClear(0,0,0,0,s);if(e.autoClear||y)i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil)}function x(_,y){let v=m(y);if(v&&v.isCubeTexture){if(c===void 0)c=new ie(new Et(1,1,1),new si({name:"BackgroundCubeMaterial",uniforms:Wr(Nn.backgroundCube.uniforms),vertexShader:Nn.backgroundCube.vertexShader,fragmentShader:Nn.backgroundCube.fragmentShader,side:Kt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(T,w,M){this.matrixWorld.copyPosition(M.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c);if(c.material.uniforms.envMap.value=v,c.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(UM.makeRotationFromEuler(y.backgroundRotation)).transpose(),v.isRenderTargetTexture===!1)c.material.uniforms.backgroundRotation.value.premultiply(Jg);if(c.material.toneMapped=ht.getTransfer(v.colorSpace)!==St,h!==v||u!==v.version||f!==e.toneMapping)c.material.needsUpdate=!0,h=v,u=v.version,f=e.toneMapping;c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null)}else if(v&&v.isTexture){if(l===void 0)l=new ie(new Ht(2,2),new si({name:"BackgroundMaterial",uniforms:Wr(Nn.background.uniforms),vertexShader:Nn.background.vertexShader,fragmentShader:Nn.background.fragmentShader,side:yn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l);if(l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=ht.getTransfer(v.colorSpace)!==St,v.matrixAutoUpdate===!0)v.updateMatrix();if(l.material.uniforms.uvTransform.value.copy(v.matrix),h!==v||u!==v.version||f!==e.toneMapping)l.material.needsUpdate=!0,h=v,u=v.version,f=e.toneMapping;l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null)}}function d(_,y){_.getRGB(Gh,Ah(e)),i.buffers.color.setClear(Gh.r,Gh.g,Gh.b,y,s)}function p(){if(c!==void 0)c.geometry.dispose(),c.material.dispose(),c=void 0;if(l!==void 0)l.geometry.dispose(),l.material.dispose(),l=void 0}return{getClearColor:function(){return o},setClearColor:function(_,y=1){o.set(_),a=y,d(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(_){a=_,d(o,a)},render:g,addToRenderList:x,dispose:p}}function $g(e,t){let i=e.getParameter(e.MAX_VERTEX_ATTRIBS),n={},r=f(null),s=r,o=!1;function a(D,V,ee,I,J){let L=!1,N=u(D,I,ee,V);if(s!==N)s=N,c(s.object);if(L=m(D,I,ee,J),L)g(D,I,ee,J);if(J!==null)t.update(J,e.ELEMENT_ARRAY_BUFFER);if(L||o){if(o=!1,v(D,V,ee,I),J!==null)e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(J).buffer)}}function l(){return e.createVertexArray()}function c(D){return e.bindVertexArray(D)}function h(D){return e.deleteVertexArray(D)}function u(D,V,ee,I){let J=I.wireframe===!0,L=n[V.id];if(L===void 0)L={},n[V.id]=L;let N=D.isInstancedMesh===!0?D.id:0,j=L[N];if(j===void 0)j={},L[N]=j;let z=j[ee.id];if(z===void 0)z={},j[ee.id]=z;let H=z[J];if(H===void 0)H=f(l()),z[J]=H;return H}function f(D){let V=[],ee=[],I=[];for(let J=0;J<i;J++)V[J]=0,ee[J]=0,I[J]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:ee,attributeDivisors:I,object:D,attributes:{},index:null}}function m(D,V,ee,I){let J=s.attributes,L=V.attributes,N=0,j=ee.getAttributes();for(let z in j)if(j[z].location>=0){let Y=J[z],ae=L[z];if(ae===void 0){if(z==="instanceMatrix"&&D.instanceMatrix)ae=D.instanceMatrix;if(z==="instanceColor"&&D.instanceColor)ae=D.instanceColor}if(Y===void 0)return!0;if(Y.attribute!==ae)return!0;if(ae&&Y.data!==ae.data)return!0;N++}if(s.attributesNum!==N)return!0;if(s.index!==I)return!0;return!1}function g(D,V,ee,I){let J={},L=V.attributes,N=0,j=ee.getAttributes();for(let z in j)if(j[z].location>=0){let Y=L[z];if(Y===void 0){if(z==="instanceMatrix"&&D.instanceMatrix)Y=D.instanceMatrix;if(z==="instanceColor"&&D.instanceColor)Y=D.instanceColor}let ae={};if(ae.attribute=Y,Y&&Y.data)ae.data=Y.data;J[z]=ae,N++}s.attributes=J,s.attributesNum=N,s.index=I}function x(){let D=s.newAttributes;for(let V=0,ee=D.length;V<ee;V++)D[V]=0}function d(D){p(D,0)}function p(D,V){let ee=s.newAttributes,I=s.enabledAttributes,J=s.attributeDivisors;if(ee[D]=1,I[D]===0)e.enableVertexAttribArray(D),I[D]=1;if(J[D]!==V)e.vertexAttribDivisor(D,V),J[D]=V}function _(){let D=s.newAttributes,V=s.enabledAttributes;for(let ee=0,I=V.length;ee<I;ee++)if(V[ee]!==D[ee])e.disableVertexAttribArray(ee),V[ee]=0}function y(D,V,ee,I,J,L,N){if(N===!0)e.vertexAttribIPointer(D,V,ee,J,L);else e.vertexAttribPointer(D,V,ee,I,J,L)}function v(D,V,ee,I){x();let J=I.attributes,L=ee.getAttributes(),N=V.defaultAttributeValues;for(let j in L){let z=L[j];if(z.location>=0){let H=J[j];if(H===void 0){if(j==="instanceMatrix"&&D.instanceMatrix)H=D.instanceMatrix;if(j==="instanceColor"&&D.instanceColor)H=D.instanceColor}if(H!==void 0){let Y=H.normalized,ae=H.itemSize,G=t.get(H);if(G===void 0)continue;let{buffer:Q,type:Me,bytesPerElement:me}=G,Fe=Me===e.INT||Me===e.UNSIGNED_INT||H.gpuType===vo;if(H.isInterleavedBufferAttribute){let we=H.data,ut=we.isInterleavedBuffer===!0?we.stride:we.itemSize,Ue=H.offset;if(we.isInstancedInterleavedBuffer||we.isInstancedBufferAttribute){for(let Oe=0;Oe<z.locationSize;Oe++)p(z.location+Oe,we.meshPerAttribute);if(D.isInstancedMesh!==!0&&I._maxInstanceCount===void 0)I._maxInstanceCount=we.meshPerAttribute*we.count}else for(let Oe=0;Oe<z.locationSize;Oe++)d(z.location+Oe);e.bindBuffer(e.ARRAY_BUFFER,Q);for(let Oe=0;Oe<z.locationSize;Oe++)y(z.location+Oe,ae/z.locationSize,Me,Y,ut*me,(Ue+ae/z.locationSize*Oe)*me,Fe)}else{if(H.isInstancedBufferAttribute){for(let we=0;we<z.locationSize;we++)p(z.location+we,H.meshPerAttribute);if(D.isInstancedMesh!==!0&&I._maxInstanceCount===void 0)I._maxInstanceCount=H.meshPerAttribute*H.count}else for(let we=0;we<z.locationSize;we++)d(z.location+we);e.bindBuffer(e.ARRAY_BUFFER,Q);for(let we=0;we<z.locationSize;we++)y(z.location+we,ae/z.locationSize,Me,Y,ae*me,ae/z.locationSize*we*me,Fe)}}else if(N!==void 0){let Y=N[j];if(Y!==void 0)switch(Y.length){case 2:e.vertexAttrib2fv(z.location,Y);break;case 3:e.vertexAttrib3fv(z.location,Y);break;case 4:e.vertexAttrib4fv(z.location,Y);break;default:e.vertexAttrib1fv(z.location,Y)}}}}_()}function T(){C();for(let D in n){let V=n[D];for(let ee in V){let I=V[ee];for(let J in I){let L=I[J];for(let N in L)h(L[N].object),delete L[N];delete I[J]}}delete n[D]}}function w(D){if(n[D.id]===void 0)return;let V=n[D.id];for(let ee in V){let I=V[ee];for(let J in I){let L=I[J];for(let N in L)h(L[N].object),delete L[N];delete I[J]}}delete n[D.id]}function M(D){for(let V in n){let ee=n[V];for(let I in ee){let J=ee[I];if(J[D.id]===void 0)continue;let L=J[D.id];for(let N in L)h(L[N].object),delete L[N];delete J[D.id]}}}function b(D){for(let V in n){let ee=n[V],I=D.isInstancedMesh===!0?D.id:0,J=ee[I];if(J===void 0)continue;for(let L in J){let N=J[L];for(let j in N)h(N[j].object),delete N[j];delete J[L]}if(delete ee[I],Object.keys(ee).length===0)delete n[V]}}function C(){if(F(),o=!0,s===r)return;s=r,c(s.object)}function F(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:C,resetDefaultState:F,dispose:T,releaseStatesOfGeometry:w,releaseStatesOfObject:b,releaseStatesOfProgram:M,initAttributes:x,enableAttribute:d,disableUnusedAttributes:_}}function Qg(e,t,i){let n;function r(l){n=l}function s(l,c){e.drawArrays(n,l,c),i.update(c,n,1)}function o(l,c,h){if(h===0)return;e.drawArraysInstanced(n,l,c,h),i.update(c,n,h)}function a(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let f=0;for(let m=0;m<h;m++)f+=c[m];i.update(f,n,1)}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a}function ex(e,t,i,n){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){let M=t.get("EXT_texture_filter_anisotropic");r=e.getParameter(M.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(M){if(M!==Pi&&n.convert(M)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))return!1;return!0}function a(M){let b=M===ni&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));if(M!==gi&&M!==di&&!b&&n.convert(M)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))return!1;return!0}function l(M){if(M==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";M="mediump"}if(M==="mediump"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0)return"mediump"}return"lowp"}let c=i.precision!==void 0?i.precision:"highp",h=l(c);if(h!==c)be("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h;let u=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),f=i.logarithmicDepthBuffer===!0&&u===!1;if(i.reversedDepthBuffer===!0&&u===!1)be("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");if(i.logarithmicDepthBuffer===!0&&u===!0)be("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let m=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),g=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=e.getParameter(e.MAX_TEXTURE_SIZE),d=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),p=e.getParameter(e.MAX_VERTEX_ATTRIBS),_=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),v=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),T=e.getParameter(e.MAX_SAMPLES),w=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:u,maxTextures:m,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:d,maxAttributes:p,maxVertexUniforms:_,maxVaryings:y,maxFragmentUniforms:v,maxSamples:T,samples:w}}function tx(e){let t=this,i=null,n=0,r=!1,s=!1,o=new pn,a=new st,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let m=u.length!==0||f||n!==0||r;return r=f,n=u.length,m},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,f){i=h(u,f,0)},this.setState=function(u,f,m){let{clippingPlanes:g,clipIntersection:x,clipShadows:d}=u,p=e.get(u);if(!r||g===null||g.length===0||s&&!d)if(s)h(null);else c();else{let _=s?0:n,y=_*4,v=p.clippingState||null;l.value=v,v=h(g,f,y,m);for(let T=0;T!==y;++T)v[T]=i[T];p.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=_}};function c(){if(l.value!==i)l.value=i,l.needsUpdate=n>0;t.numPlanes=n,t.numIntersection=0}function h(u,f,m,g){let x=u!==null?u.length:0,d=null;if(x!==0){if(d=l.value,g!==!0||d===null){let p=m+x*4,_=f.matrixWorldInverse;if(a.getNormalMatrix(_),d===null||d.length<p)d=new Float32Array(p);for(let y=0,v=m;y!==x;++y,v+=4)o.copy(u[y]).applyMatrix4(_,a),o.normal.toArray(d,v),d[v+3]=o.constant}l.value=d,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,d}}class _s extends ei{constructor(e=1,t={}){super(e,e,t);this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},n=[i,i,i,i,i,i];this.texture=new us(n),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},n=new Et(5,5,5),r=new si({name:"CubemapFromEquirect",uniforms:Wr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Kt,blending:On});r.uniforms.tEquirect.value=t;let s=new ie(n,r),o=t.minFilter;if(t.minFilter===Bi)t.minFilter=Yt;return new ao(1,10,this).update(e,s),t.minFilter=o,s.geometry.dispose(),s.material.dispose(),this}clear(e,t=!0,i=!0,n=!0){let r=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,i,n);e.setRenderTarget(r)}}var ix=256,BM=3,OM=20,ox=256,ax=16,HM=3,GM=new A,zM=new fe;class ys{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new ao(1,10,null),this._boxMesh=new ie(new Et(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,i=0.1,n=100,r={}){let{size:s=256,position:o=GM}=r,a=this._renderer;this._setSize(s);let l=this._allocateTarget(),c=this._getSourceTarget(!0);if(t>0)c.texture.mipmapsAutoUpdate=!1;let{autoClear:h,autoClearColor:u,autoClearDepth:f,autoClearStencil:m}=a,g=e.background;if(a.autoClear=!0,a.autoClearColor=!0,a.autoClearDepth=!0,a.autoClearStencil=!0,g===null)e.background=a.getClearColor(zM);let x=new ao(i,n,c);if(x.position.copy(o),x.update(a,e),a.autoClear=h,a.autoClearColor=u,a.autoClearDepth=f,a.autoClearStencil=m,e.background=g,t>0)c.texture.mipmapsAutoUpdate=!0,this._blur(l,t);return this._applyPMREM(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){if(this._cubemapMaterial===null)this._cubemapMaterial=sx(),this._compileMaterial(this._cubemapMaterial)}compileEquirectangularShader(){if(this._equirectMaterial===null)this._equirectMaterial=rx(),this._compileMaterial(this._equirectMaterial)}dispose(){if(this._sourceTarget!==null)this._sourceTarget.dispose();if(this._cubemapMaterial!==null)this._cubemapMaterial.dispose();if(this._equirectMaterial!==null)this._equirectMaterial.dispose();if(this._blurMaterial!==null)this._blurMaterial.dispose();if(this._ggxMaterial!==null)this._ggxMaterial.dispose();if(this._integrationMaterial!==null)this._integrationMaterial.dispose();this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(ix,Tf(e))}_fromTexture(e,t){if(e.mapping===Hn||e.mapping===Ir)this._setSize(e.image.length===0?ix:e.image[0].width||e.image[0].image.width);else this._setSize(e.image.width/4);let i=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(i),i}_allocateTarget(){let e=this._cubeSize,t=nx(e,!1,!1),i=Math.log2(e)-BM;for(let n=0;n<=i;n++)t.texture.mipmaps.push({width:e>>n,height:e>>n});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,i=this._sourceTarget;if(i===null||i.width!==t||e&&i.depthBuffer===!1){if(i!==null)i.dispose();this._sourceTarget=nx(t,!0,e)}return this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,i){let n=this._boxMesh,r=this._cubeCamera;n.material=i,r.renderTarget=e,r.activeMipmapLevel=t;let s=e.width>>t;e.viewport.set(0,0,s,s),r.update(this._renderer,n),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;if(e.mapping===Hn||e.mapping===Ir){if(this._cubemapMaterial===null)this._cubemapMaterial=sx();t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1}else{if(this._equirectMaterial===null)this._equirectMaterial=rx();t=this._equirectMaterial}t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){if(this._ggxMaterial===null)this._ggxMaterial=kM(),this._integrationMaterial=VM();let t=this._cubeSize,i=e.texture.mipmaps.length-1,n=this._ggxMaterial.uniforms;n.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/ax);for(let s=0;s<=i;s++){let o=ys.lodToRoughness(s,i);if(s>i-HM)r.roughness.value=o,this._renderCube(e,s,this._integrationMaterial);else{let a=o>0?Math.log2(t)+0.5*Math.log2(6/(ox*Math.pow(o,4)))+0.5:0;n.roughness.value=o,n.lodBias.value=a,this._renderCube(e,s,this._ggxMaterial)}}}_blur(e,t){if(this._blurMaterial===null)this._blurMaterial=WM();let i=this._blurMaterial,n=i.uniforms,r=this._sourceTarget;n.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,n.envMap.value=r.texture,this._renderCube(e,0,i),n.envMap.value=e.texture,this._renderCube(r,0,i)}}function nx(e,t,i){return new _s(e,{minFilter:Bi,generateMipmaps:t,type:ni,colorSpace:Xi,depthBuffer:i})}function Ql(e,t,i){return new si({name:e,uniforms:t,vertexShader:xt.cube_vert,fragmentShader:i,side:Kt,blending:On,depthTest:!1,depthWrite:!1})}function kM(){return Ql("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${ox}u

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
	`)}function VM(){return Ql("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:ax}},`

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
	`)}function WM(){return Ql("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${OM}
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
	`)}function rx(){return Ql("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function sx(){return Ql("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function lx(e){let t=new WeakMap,i=new WeakMap,n=null;function r(f,m=!1){if(f===null||f===void 0)return null;if(m)return o(f);return s(f)}function s(f){if(f&&f.isTexture){let m=f.mapping;if(m===Da||m===Na)if(t.has(f)){let g=t.get(f).texture;return a(g,f.mapping)}else{let g=f.image;if(g&&g.height>0){let x=new _s(g.height);return x.fromEquirectangularTexture(e,f),t.set(f,x),f.addEventListener("dispose",c),a(x.texture,f.mapping)}else return null}}return f}function o(f){if(f&&f.isTexture&&f.isPMREMTexture!==!0){let m=f.mapping,g=m===Da||m===Na,x=m===Hn||m===Ir;if(g||x){let d=i.get(f),p=d!==void 0?d.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==p){if(n===null)n=new ys(e);return d=g?n.fromEquirectangular(f,d):n.fromCubemap(f,d),d.texture.pmremVersion=f.pmremVersion,i.set(f,d),d.texture}else if(d!==void 0)return d.texture;else{let _=f.image;if(g&&_&&_.height>0||x&&_&&l(_)){if(n===null)n=new ys(e);return d=g?n.fromEquirectangular(f):n.fromCubemap(f),d.texture.pmremVersion=f.pmremVersion,i.set(f,d),f.addEventListener("dispose",h),d.texture}else return null}}}return f}function a(f,m){if(m===Da)f.mapping=Hn;else if(m===Na)f.mapping=Ir;return f}function l(f){let m=0,g=6;for(let x=0;x<g;x++)if(f[x]!==void 0)m++;return m===g}function c(f){let m=f.target;m.removeEventListener("dispose",c);let g=t.get(m);if(g!==void 0)t.delete(m),g.dispose()}function h(f){let m=f.target;m.removeEventListener("dispose",h);let g=i.get(m);if(g!==void 0)i.delete(m),g.dispose()}function u(){if(t=new WeakMap,i=new WeakMap,n!==null)n.dispose(),n=null}return{get:r,dispose:u}}function cx(e){let t={};function i(n){if(t[n]!==void 0)return t[n];let r=e.getExtension(n);return t[n]=r,r}return{has:function(n){return i(n)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(n){let r=i(n);if(r===null)zn("WebGLRenderer: "+n+" extension not supported.");return r}}}function hx(e,t,i,n){let r={},s=new WeakMap,o=new FinalizationRegistry((g)=>delete r[g]);function a(g){l(g.target)}function l(g){if(g.index!==null)t.remove(g.index);for(let d in g.attributes)t.remove(g.attributes[d]);g.removeEventListener("dispose",a),delete r[g.id],o.unregister(g);let x=s.get(g);if(x)t.remove(x),s.delete(g);if(n.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0)delete g._maxInstanceCount;i.memory.geometries--}function c(g,x){if(r[x.id]!==void 0)return x;return x.addEventListener("dispose",a),r[x.id]=new WeakRef(x),o.register(x,x.id,x),i.memory.geometries++,x}function h(g){let x=g.attributes;for(let d in x)t.update(x[d],e.ARRAY_BUFFER)}function u(g){let x=g.index,d=g.attributes.position,p=0;if(d===void 0)return;let _=x!==null?x.array.length:d.array.length/3-1,v=new(d.count>=65535?Ml:yl)(Math.ceil(_/3)*6,1),T=v.array;if(x!==null){let M=x.array;p=x.version;for(let b=0,C=0;b<_;b+=3){let F=M[b+0],D=M[b+1],V=M[b+2];T[C++]=F,T[C++]=D,T[C++]=D,T[C++]=V,T[C++]=V,T[C++]=F}}else{p=d.version;for(let M=0,b=0;M<_;M+=3){let C=M+0,F=M+1,D=M+2;T[b++]=C,T[b++]=F,T[b++]=F,T[b++]=D,T[b++]=D,T[b++]=C}}v.version=p;let w=s.get(g);if(w)t.remove(w);s.set(g,v)}function f(g){let x=s.get(g);if(x){let d=g.index;if(d!==null){if(x.version<d.version)u(g)}}else u(g);return s.get(g)}function m(){for(let g in r){let x=r[g].deref();if(x!==void 0)l(x)}}return{get:c,update:h,getWireframeAttribute:f,dispose:m}}function fx(e,t,i){let n;function r(u){n=u}let s,o;function a(u){s=u.type,o=u.bytesPerElement}function l(u,f){e.drawElements(n,f,s,u*o),i.update(f,n,1)}function c(u,f,m){if(m===0)return;e.drawElementsInstanced(n,f,s,u*o,m),i.update(f,n,m)}function h(u,f,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,u,0,m);let x=0;for(let d=0;d<m;d++)x+=f[d];i.update(x,n,1)}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function ux(e){let t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(i.calls++,o){case e.TRIANGLES:i.triangles+=a*(s/3);break;case e.LINES:i.lines+=a*(s/2);break;case e.LINE_STRIP:i.lines+=a*(s-1);break;case e.LINE_LOOP:i.lines+=a*s;break;case e.POINTS:i.points+=a*s;break;default:We("WebGLInfo: Unknown draw mode:",o);break}}function r(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:r,update:n}}function dx(e,t,i){let n=new WeakMap,r=new bt;function s(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,f=n.get(a);if(f===void 0||f.count!==u){let C=function(){M.dispose(),n.delete(a),a.removeEventListener("dispose",C)};if(f!==void 0)f.texture.dispose();let m=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,d=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],_=a.morphAttributes.color||[],y=0;if(m===!0)y=1;if(g===!0)y=2;if(x===!0)y=3;let v=a.attributes.position.count*y,T=1;if(v>t.maxTextureSize)T=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize;let w=new Float32Array(v*T*4*u),M=new zs(w,v,T,u);M.type=di,M.needsUpdate=!0;let b=y*4;for(let F=0;F<u;F++){let D=d[F],V=p[F],ee=_[F],I=v*T*4*F;for(let J=0;J<D.count;J++){let L=J*b;if(m===!0)r.fromBufferAttribute(D,J),w[I+L+0]=r.x,w[I+L+1]=r.y,w[I+L+2]=r.z,w[I+L+3]=0;if(g===!0)r.fromBufferAttribute(V,J),w[I+L+4]=r.x,w[I+L+5]=r.y,w[I+L+6]=r.z,w[I+L+7]=0;if(x===!0)r.fromBufferAttribute(ee,J),w[I+L+8]=r.x,w[I+L+9]=r.y,w[I+L+10]=r.z,w[I+L+11]=ee.itemSize===4?r.w:1}}f={count:u,texture:M,size:new X(v,T)},n.set(a,f),a.addEventListener("dispose",C)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(e,"morphTexture",o.morphTexture,i);else{let m=0;for(let x=0;x<c.length;x++)m+=c[x];let g=a.morphTargetsRelative?1:1-m;l.getUniforms().setValue(e,"morphTargetBaseInfluence",g),l.getUniforms().setValue(e,"morphTargetInfluences",c)}l.getUniforms().setValue(e,"morphTargetsTexture",f.texture,i),l.getUniforms().setValue(e,"morphTargetsTextureSize",f.size)}return{update:s}}function px(e,t,i,n,r){let s=new WeakMap;function o(c){let h=r.render.frame,u=c.geometry,f=t.get(c,u);if(s.get(f)!==h)t.update(f),s.set(f,h);if(c.isInstancedMesh){if(c.hasEventListener("dispose",l)===!1)c.addEventListener("dispose",l);if(s.get(c)!==h){if(i.update(c.instanceMatrix,e.ARRAY_BUFFER),c.instanceColor!==null)i.update(c.instanceColor,e.ARRAY_BUFFER);s.set(c,h)}}if(c.isSkinnedMesh){let m=c.skeleton;if(s.get(m)!==h)m.update(),s.set(m,h)}return f}function a(){s=new WeakMap}function l(c){let h=c.target;if(h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),i.remove(h.instanceMatrix),h.instanceColor!==null)i.remove(h.instanceColor)}return{update:o,dispose:a}}var XM={[mo]:"LINEAR_TONE_MAPPING",[go]:"REINHARD_TONE_MAPPING",[xo]:"CINEON_TONE_MAPPING",[ns]:"ACES_FILMIC_TONE_MAPPING",[yo]:"AGX_TONE_MAPPING",[Mo]:"NEUTRAL_TONE_MAPPING",[_o]:"CUSTOM_TONE_MAPPING"};function mx(e,t,i,n,r,s){let o=new ei(t,i,{type:e,depthBuffer:r,stencilBuffer:s,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=null,h=new Ve;h.setAttribute("position",new Ee([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new Ee([0,2,0,0,2,0],2));let u=new ro({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new ie(h,u),m=new fr(-1,1,1,-1,0,1),g=null,x=null,d=!1,p,_=null,y=[],v=!1;this.setSize=function(T,w){if(o.setSize(T,w),a!==null)a.setSize(T,w);if(l!==null)l.setSize(T,w);for(let M=0;M<y.length;M++){let b=y[M];if(b.setSize)b.setSize(T,w)}},this.setEffects=function(T){y=T,v=y.length>0&&y[0].isRenderPass===!0;let{width:w,height:M}=o;if(y.length>0&&a===null)a=new ei(w,M,{type:ni,depthBuffer:!1,stencilBuffer:!1}),l=new ei(w,M,{type:ni,depthBuffer:!1,stencilBuffer:!1});let b=r===!0&&y.some((C)=>C.needsDepthTexture===!0);if(b!==(o.depthTexture!==null)){if(b===!0&&c===null){if(c=new Cn(w,M),s===!0)c.format=Tn,c.type=tr}o.dispose(),o.depthTexture=b?c:null,o.resolveDepthBuffer=b,o.storeMultisampledDepthBuffer=b}for(let C=0;C<y.length;C++){let F=y[C];if(F.setSize)F.setSize(w,M);if(b&&F.needsDepthTexture===!0&&F.setDepthTexture)F.setDepthTexture(c)}},this.begin=function(T,w){if(d)return!1;if(T.toneMapping===bn&&y.length===0)return!1;if(_=w,w!==null){let{width:M,height:b}=w;if(o.width!==M||o.height!==b)this.setSize(M,b)}if(v===!1)T.setRenderTarget(o);return p=T.toneMapping,T.toneMapping=bn,!0},this.hasRenderPass=function(){return v},this.end=function(T,w){T.toneMapping=p,d=!0;let M=o,b=a;for(let C=0;C<y.length;C++){let F=y[C];if(F.enabled===!1)continue;if(F.render(T,b,M,w),F.needsSwap!==!1)M=b,b=b===a?l:a}if(g!==T.outputColorSpace||x!==T.toneMapping){if(g=T.outputColorSpace,x=T.toneMapping,u.defines={},ht.getTransfer(g)===St)u.defines.SRGB_TRANSFER="";let C=XM[x];if(C)u.defines[C]="";u.needsUpdate=!0}u.uniforms.tDiffuse.value=M.texture,T.setRenderTarget(_),T.render(f,m),_=null,d=!1},this.isCompositing=function(){return d},this.dispose=function(){if(o.dispose(),a!==null)a.dispose();if(l!==null)l.dispose();h.dispose(),u.dispose()}}var Sx=new Ct,bx=new Cn(1,1),Tx=new ea(1),Ex=new zs,wx=new Fo,Ax=new us,gx=[],xx=[],_x=new Float32Array(16),yx=new Float32Array(9),Mx=new Float32Array(4);function la(e,t,i){let n=e[0];if(n<=0||n>0)return e;let r=t*i,s=gx[r];if(s===void 0)s=new Float32Array(r),gx[r]=s;if(t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=i,e[o].toArray(s,a)}return s}function Di(e,t){if(e.length!==t.length)return!1;for(let i=0,n=e.length;i<n;i++)if(e[i]!==t[i])return!1;return!0}function Ni(e,t){for(let i=0,n=t.length;i<n;i++)e[i]=t[i]}function zh(e,t){let i=xx[t];if(i===void 0)i=new Int32Array(t),xx[t]=i;for(let n=0;n!==t;++n)i[n]=e.allocateTextureUnit();return i}function YM(e,t){let i=this.cache;if(i[0]===t)return;e.uniform1f(this.addr,t),i[0]=t}function qM(e,t){let i=this.cache;if(t.x!==void 0){if(i[0]!==t.x||i[1]!==t.y)e.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y}else{if(Di(i,t))return;e.uniform2fv(this.addr,t),Ni(i,t)}}function ZM(e,t){let i=this.cache;if(t.x!==void 0){if(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)e.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z}else if(t.r!==void 0){if(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)e.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b}else{if(Di(i,t))return;e.uniform3fv(this.addr,t),Ni(i,t)}}function KM(e,t){let i=this.cache;if(t.x!==void 0){if(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)e.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w}else{if(Di(i,t))return;e.uniform4fv(this.addr,t),Ni(i,t)}}function JM(e,t){let i=this.cache,n=t.elements;if(n===void 0){if(Di(i,t))return;e.uniformMatrix2fv(this.addr,!1,t),Ni(i,t)}else{if(Di(i,n))return;Mx.set(n),e.uniformMatrix2fv(this.addr,!1,Mx),Ni(i,n)}}function jM(e,t){let i=this.cache,n=t.elements;if(n===void 0){if(Di(i,t))return;e.uniformMatrix3fv(this.addr,!1,t),Ni(i,t)}else{if(Di(i,n))return;yx.set(n),e.uniformMatrix3fv(this.addr,!1,yx),Ni(i,n)}}function $M(e,t){let i=this.cache,n=t.elements;if(n===void 0){if(Di(i,t))return;e.uniformMatrix4fv(this.addr,!1,t),Ni(i,t)}else{if(Di(i,n))return;_x.set(n),e.uniformMatrix4fv(this.addr,!1,_x),Ni(i,n)}}function QM(e,t){let i=this.cache;if(i[0]===t)return;e.uniform1i(this.addr,t),i[0]=t}function ev(e,t){let i=this.cache;if(t.x!==void 0){if(i[0]!==t.x||i[1]!==t.y)e.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y}else{if(Di(i,t))return;e.uniform2iv(this.addr,t),Ni(i,t)}}function tv(e,t){let i=this.cache;if(t.x!==void 0){if(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)e.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z}else{if(Di(i,t))return;e.uniform3iv(this.addr,t),Ni(i,t)}}function iv(e,t){let i=this.cache;if(t.x!==void 0){if(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)e.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w}else{if(Di(i,t))return;e.uniform4iv(this.addr,t),Ni(i,t)}}function nv(e,t){let i=this.cache;if(i[0]===t)return;e.uniform1ui(this.addr,t),i[0]=t}function rv(e,t){let i=this.cache;if(t.x!==void 0){if(i[0]!==t.x||i[1]!==t.y)e.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y}else{if(Di(i,t))return;e.uniform2uiv(this.addr,t),Ni(i,t)}}function sv(e,t){let i=this.cache;if(t.x!==void 0){if(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)e.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z}else{if(Di(i,t))return;e.uniform3uiv(this.addr,t),Ni(i,t)}}function ov(e,t){let i=this.cache;if(t.x!==void 0){if(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w}else{if(Di(i,t))return;e.uniform4uiv(this.addr,t),Ni(i,t)}}function kh(e){if(e.version===0)e.compareFunction=zc,e.needsUpdate=!0;return e}function av(e,t,i){let n=this.cache,r=i.allocateTextureUnit();if(n[0]!==r)e.uniform1i(this.addr,r),n[0]=r;let s;if(this.type===e.SAMPLER_2D_SHADOW)s=kh(bx);else s=Sx;i.setTexture2D(t||s,r)}function lv(e,t,i){let n=this.cache,r=i.allocateTextureUnit();if(n[0]!==r)e.uniform1i(this.addr,r),n[0]=r;i.setTexture3D(t||wx,r)}function cv(e,t,i){let n=this.cache,r=i.allocateTextureUnit();if(n[0]!==r)e.uniform1i(this.addr,r),n[0]=r;let s;if(this.type===e.SAMPLER_CUBE_SHADOW)s=kh(Tx);else s=Ax;i.setTextureCube(t||s,r)}function hv(e,t,i){let n=this.cache,r=i.allocateTextureUnit();if(n[0]!==r)e.uniform1i(this.addr,r),n[0]=r;i.setTexture2DArray(t||Ex,r)}function fv(e){switch(e){case 5126:return YM;case 35664:return qM;case 35665:return ZM;case 35666:return KM;case 35674:return JM;case 35675:return jM;case 35676:return $M;case 5124:case 35670:return QM;case 35667:case 35671:return ev;case 35668:case 35672:return tv;case 35669:case 35673:return iv;case 5125:return nv;case 36294:return rv;case 36295:return sv;case 36296:return ov;case 35678:case 36198:case 36298:case 36306:case 35682:return av;case 35679:case 36299:case 36307:return lv;case 35680:case 36300:case 36308:case 36293:return cv;case 36289:case 36303:case 36311:case 36292:return hv}}function uv(e,t){e.uniform1fv(this.addr,t)}function dv(e,t){let i=la(t,this.size,2);e.uniform2fv(this.addr,i)}function pv(e,t){let i=la(t,this.size,3);e.uniform3fv(this.addr,i)}function mv(e,t){let i=la(t,this.size,4);e.uniform4fv(this.addr,i)}function gv(e,t){let i=la(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,i)}function xv(e,t){let i=la(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,i)}function _v(e,t){let i=la(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,i)}function yv(e,t){e.uniform1iv(this.addr,t)}function Mv(e,t){e.uniform2iv(this.addr,t)}function vv(e,t){e.uniform3iv(this.addr,t)}function Sv(e,t){e.uniform4iv(this.addr,t)}function bv(e,t){e.uniform1uiv(this.addr,t)}function Tv(e,t){e.uniform2uiv(this.addr,t)}function Ev(e,t){e.uniform3uiv(this.addr,t)}function wv(e,t){e.uniform4uiv(this.addr,t)}function Av(e,t,i){let n=this.cache,r=t.length,s=zh(i,r);if(!Di(n,s))e.uniform1iv(this.addr,s),Ni(n,s);let o;if(this.type===e.SAMPLER_2D_SHADOW)o=kh(bx);else o=Sx;for(let a=0;a!==r;++a)i.setTexture2D(t[a]||o,s[a])}function Rv(e,t,i){let n=this.cache,r=t.length,s=zh(i,r);if(!Di(n,s))e.uniform1iv(this.addr,s),Ni(n,s);for(let o=0;o!==r;++o)i.setTexture3D(t[o]||wx,s[o])}function Cv(e,t,i){let n=this.cache,r=t.length,s=zh(i,r);if(!Di(n,s))e.uniform1iv(this.addr,s),Ni(n,s);let o;if(this.type===e.SAMPLER_CUBE_SHADOW)o=kh(Tx);else o=Ax;for(let a=0;a!==r;++a)i.setTextureCube(t[a]||o,s[a])}function Pv(e,t,i){let n=this.cache,r=t.length,s=zh(i,r);if(!Di(n,s))e.uniform1iv(this.addr,s),Ni(n,s);for(let o=0;o!==r;++o)i.setTexture2DArray(t[o]||Ex,s[o])}function Iv(e){switch(e){case 5126:return uv;case 35664:return dv;case 35665:return pv;case 35666:return mv;case 35674:return gv;case 35675:return xv;case 35676:return _v;case 5124:case 35670:return yv;case 35667:case 35671:return Mv;case 35668:case 35672:return vv;case 35669:case 35673:return Sv;case 5125:return bv;case 36294:return Tv;case 36295:return Ev;case 36296:return wv;case 35678:case 36198:case 36298:case 36306:case 35682:return Av;case 35679:case 36299:case 36307:return Rv;case 35680:case 36300:case 36308:case 36293:return Cv;case 36289:case 36303:case 36311:case 36292:return Pv}}class Rx{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=fv(t.type)}}class Cx{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Iv(t.type)}}class Px{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let n=this.seq;for(let r=0,s=n.length;r!==s;++r){let o=n[r];o.setValue(e,t[o.id],i)}}}var Mu=/(\w+)(\])?(\[|\.)?/g;function vx(e,t){e.seq.push(t),e.map[t.id]=t}function Lv(e,t,i){let n=e.name,r=n.length;Mu.lastIndex=0;while(!0){let s=Mu.exec(n),o=Mu.lastIndex,a=s[1],l=s[2]==="]",c=s[3];if(l)a=a|0;if(c===void 0||c==="["&&o+2===r){vx(i,c===void 0?new Rx(a,e,t):new Cx(a,e,t));break}else{let u=i.map[a];if(u===void 0)u=new Px(a),vx(i,u);i=u}}}class lo{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let o=e.getActiveUniform(t,s),a=e.getUniformLocation(t,o.name);Lv(o,a,this)}let n=[],r=[];for(let s of this.seq)if(s.type===e.SAMPLER_2D_SHADOW||s.type===e.SAMPLER_CUBE_SHADOW||s.type===e.SAMPLER_2D_ARRAY_SHADOW)n.push(s);else r.push(s);if(n.length>0)this.seq=n.concat(r)}setValue(e,t,i,n){let r=this.map[t];if(r!==void 0)r.setValue(e,i,n)}setOptional(e,t,i){let n=t[i];if(n!==void 0)this.setValue(e,i,n)}static upload(e,t,i,n){for(let r=0,s=t.length;r!==s;++r){let o=t[r],a=i[o.id];if(a.needsUpdate!==!1)o.setValue(e,a.value,n)}}static seqWithValue(e,t){let i=[];for(let n=0,r=e.length;n!==r;++n){let s=e[n];if(s.id in t)i.push(s)}return i}}function vu(e,t,i){let n=e.createShader(t);return e.shaderSource(n,i),e.compileShader(n),n}var Dv=37297,Nv=0;function Fv(e,t){let i=e.split(`
`),n=[],r=Math.max(t-6,0),s=Math.min(t+6,i.length);for(let o=r;o<s;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${i[o]}`)}return n.join(`
`)}var Ix=new st;function Uv(e){ht._getMatrix(Ix,ht.workingColorSpace,e);let t=`mat3( ${Ix.elements.map((i)=>i.toFixed(4))} )`;switch(ht.getTransfer(e)){case Os:return[t,"LinearTransferOETF"];case St:return[t,"sRGBTransferOETF"];default:return be("WebGLProgram: Unsupported color space: ",e),[t,"LinearTransferOETF"]}}function Lx(e,t,i){let n=e.getShaderParameter(t,e.COMPILE_STATUS),s=(e.getShaderInfoLog(t)||"").trim();if(n&&s==="")return"";let o=/ERROR: 0:(\d+)/.exec(s);if(o){let a=parseInt(o[1]);return i.toUpperCase()+`

`+s+`

`+Fv(e.getShaderSource(t),a)}else return s}function Bv(e,t){let i=Uv(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${i[1]}( vec4( ${i[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var Ov={[mo]:"Linear",[go]:"Reinhard",[xo]:"Cineon",[ns]:"ACESFilmic",[yo]:"AgX",[Mo]:"Neutral",[_o]:"Custom"};function Hv(e,t){let i=Ov[t];if(i===void 0)return be("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+e+"( vec3 color ) { return LinearToneMapping( color ); }";return"vec3 "+e+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}var Vh=new A;function Gv(){ht.getLuminanceCoefficients(Vh);let e=Vh.x.toFixed(4),t=Vh.y.toFixed(4),i=Vh.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${t}, ${i} );`,"\treturn dot( weights, rgb );","}"].join(`
`)}function zv(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ec).join(`
`)}function kv(e){let t=[];for(let i in e){let n=e[i];if(n===!1)continue;t.push("#define "+i+" "+n)}return t.join(`
`)}function Vv(e,t){let i={},n=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){let s=e.getActiveAttrib(t,r),o=s.name,a=1;if(s.type===e.FLOAT_MAT2)a=2;if(s.type===e.FLOAT_MAT3)a=3;if(s.type===e.FLOAT_MAT4)a=4;i[o]={type:s.type,location:e.getAttribLocation(t,o),locationSize:a}}return i}function ec(e){return e!==""}function Dx(e,t){let i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function Nx(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Wv=/^[ \t]*#include +<([\w\d./]+)>/gm;function Su(e){return e.replace(Wv,Xv)}function Xv(e,t){let i=xt[t];if(i===void 0)throw Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return Su(i)}var Yv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Fx(e){return e.replace(Yv,qv)}function qv(e,t,i,n){let r="";for(let s=parseInt(t);s<parseInt(i);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Ux(e){let t=`precision ${e.precision} float;
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
#define LOW_PRECISION`;return t}var Zv={[po]:"SHADOWMAP_TYPE_PCF",[Is]:"SHADOWMAP_TYPE_VSM"};function Kv(e){return Zv[e.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Jv={[Ir]:"ENVMAP_MODE_REFRACTION"};function jv(e){if(e.envMap===!1)return"ENVMAP_MODE_REFLECTION";return Jv[e.envMapMode]||"ENVMAP_MODE_REFLECTION"}var $v={[Ls]:"ENVMAP_BLENDING_MULTIPLY",[kd]:"ENVMAP_BLENDING_MIX",[Vd]:"ENVMAP_BLENDING_ADD"};function Qv(e){if(e.envMap===!1)return"ENVMAP_BLENDING_NONE";return $v[e.combine]||"ENVMAP_BLENDING_NONE"}function Bx(e,t,i,n){let r=e.getContext(),{defines:s,vertexShader:o,fragmentShader:a}=i,l=Kv(i),c=i.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=jv(i),u=Qv(i),f=zv(i),m=kv(s),g=r.createProgram(),x,d,p=i.glslVersion?"#version "+i.glslVersion+`
`:"";if(i.isRawShaderMaterial){if(x=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,m].filter(ec).join(`
`),x.length>0)x+=`
`;if(d=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,m].filter(ec).join(`
`),d.length>0)d+=`
`}else x=[Ux(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,m,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+h:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+i.diffuseRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexNormals?"#define HAS_NORMAL":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+l:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","\tattribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","\tattribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","\tuniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","\tattribute vec2 uv1;","#endif","#ifdef USE_UV2","\tattribute vec2 uv2;","#endif","#ifdef USE_UV3","\tattribute vec2 uv3;","#endif","#ifdef USE_TANGENT","\tattribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","\tattribute vec4 color;","#elif defined( USE_COLOR )","\tattribute vec3 color;","#endif","#ifdef USE_SKINNING","\tattribute vec4 skinIndex;","\tattribute vec4 skinWeight;","#endif",`
`].filter(ec).join(`
`),d=[Ux(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,m,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+c:"",i.envMap?"#define "+h:"",i.envMap?"#define "+u:"",i.envMapPMREM?"#define ENVMAP_MAX_LOD "+i.envMapMaxLod+".0":"",i.envMapPMREM?"#define ENVMAP_SIZE "+i.envMapSize+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",i.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.retroreflection?"#define USE_RETROREFLECTION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+l:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==bn?"#define TONE_MAPPING":"",i.toneMapping!==bn?xt.tonemapping_pars_fragment:"",i.toneMapping!==bn?Hv("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",xt.colorspace_pars_fragment,Bv("linearToOutputTexel",i.outputColorSpace),Gv(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(ec).join(`
`);if(o=Su(o),o=Dx(o,i),o=Nx(o,i),a=Su(a),a=Dx(a,i),a=Nx(a,i),o=Fx(o),a=Fx(a),i.isRawShaderMaterial!==!0)p=`#version 300 es
`,x=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,d=["#define varying in",i.glslVersion===vf?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===vf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d;let _=p+x+o,y=p+d+a,v=vu(r,r.VERTEX_SHADER,_),T=vu(r,r.FRAGMENT_SHADER,y);if(r.attachShader(g,v),r.attachShader(g,T),i.index0AttributeName!==void 0)r.bindAttribLocation(g,0,i.index0AttributeName);else if(i.hasPositionAttribute===!0)r.bindAttribLocation(g,0,"position");r.linkProgram(g);function w(F){if(e.debug.checkShaderErrors){let D=r.getProgramInfoLog(g)||"",V=r.getShaderInfoLog(v)||"",ee=r.getShaderInfoLog(T)||"",I=D.trim(),J=V.trim(),L=ee.trim(),N=!0,j=!0;if(r.getProgramParameter(g,r.LINK_STATUS)===!1)if(N=!1,typeof e.debug.onShaderError==="function")e.debug.onShaderError(r,g,v,T);else{let z=Lx(r,v,"vertex"),H=Lx(r,T,"fragment");We("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(g,r.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+I+`
`+z+`
`+H)}else if(I!=="")be("WebGLProgram: Program Info Log:",I);else if(J===""||L==="")j=!1;if(j)F.diagnostics={runnable:N,programLog:I,vertexShader:{log:J,prefix:x},fragmentShader:{log:L,prefix:d}}}r.deleteShader(v),r.deleteShader(T),M=new lo(r,g),b=Vv(r,g)}let M;this.getUniforms=function(){if(M===void 0)w(this);return M};let b;this.getAttributes=function(){if(b===void 0)w(this);return b};let C=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){if(C===!1)C=r.getProgramParameter(g,Dv);return C},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(g),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=Nv++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=v,this.fragmentShader=T,this}var eS=0;class bu{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){let n=this._getShaderCacheForMaterial(e);if(n.has(t)===!1)n.add(t),t.usedTimes++;if(n.has(i)===!1)n.add(i),i.usedTimes++;return this}remove(e){let t=this.materialCache.get(e);for(let i of t)if(i.usedTimes--,i.usedTimes===0)this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);if(i===void 0)i=new Set,t.set(e,i);return i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);if(i===void 0)i=new Ox(e),t.set(e,i);return i}}class Ox{constructor(e){this.id=eS++,this.code=e,this.usedTimes=0}}function tS(e){return e===En||e===Fs||e===Us}function Hx(e,t,i,n,r,s){let o=new ls,a=new bu,l=new Set,c=[],h=new Map,u=n.logarithmicDepthBuffer,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(M){if(l.add(M),M===0)return"uv";return`uv${M}`}function g(M,b,C,F,D,V){let ee=F.fog,I=D.geometry,J=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?F.environment:null,L=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap,N=t.get(M.envMap||J,L),j=f[M.type],z=n.precision;if(M.precision!==null){if(z=n.getMaxPrecision(M.precision),z!==M.precision)be("WebGLProgram.getParameters:",M.precision,"not supported, using",z,"instead.")}let H=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,Y=H!==void 0?H.length:0,ae=0;if(I.morphAttributes.position!==void 0)ae=1;if(I.morphAttributes.normal!==void 0)ae=2;if(I.morphAttributes.color!==void 0)ae=3;let G,Q,Me,me;if(j){let Ne=Nn[j];G=Ne.vertexShader,Q=Ne.fragmentShader}else{G=M.vertexShader,Q=M.fragmentShader;let Ne=a.getVertexShaderStage(M),Xt=a.getFragmentShaderStage(M);a.update(M,Ne,Xt),Me=Ne.id,me=Xt.id}let Fe=e.getRenderTarget(),we=e.state.buffers.depth.getReversed(),ut=D.isInstancedMesh===!0,Ue=D.isBatchedMesh===!0,Oe=!!M.map,pt=!!M.matcap,he=!!N,de=he&&N.isPMREMTexture===!0,ge=!!M.aoMap,Le=!!M.lightMap,Re=!!M.bumpMap&&M.wireframe===!1,Ye=!!M.normalMap,Je=!!M.displacementMap,dt=!!M.emissiveMap,_t=!!M.metalnessMap,Lt=!!M.roughnessMap,R=M.anisotropy>0,xe=M.clearcoat>0,_e=M.diffuseRoughness>0,He=M.dispersion>0,se=M.retroreflectivity>0,ze=M.iridescence>0,ke=M.sheen>0,at=M.transmission>0,Gt=R&&!!M.anisotropyMap,P=xe&&!!M.clearcoatMap,S=xe&&!!M.clearcoatNormalMap,W=xe&&!!M.clearcoatRoughnessMap,pe=_e&&!!M.diffuseRoughnessMap,le=ze&&!!M.iridescenceMap,ye=ze&&!!M.iridescenceThicknessMap,ue=ke&&!!M.sheenColorMap,K=ke&&!!M.sheenRoughnessMap,ne=!!M.specularMap,Se=!!M.specularColorMap,U=!!M.specularIntensityMap,oe=at&&!!M.transmissionMap,re=at&&!!M.thicknessMap,ve=!!M.gradientMap,Te=!!M.alphaMap,Ae=M.alphaTest>0,je=!!M.alphaHash,Xe=!!M.extensions,Ce=bn;if(M.toneMapped){if(Fe===null||Fe.isXRRenderTarget===!0)Ce=e.toneMapping}let it=de?N.isCompressedCubeTexture?N.image[0].mipmaps:N.mipmaps:null,mt={shaderID:j,shaderType:M.type,shaderName:M.name,vertexShader:G,fragmentShader:Q,defines:M.defines,customVertexShaderID:Me,customFragmentShaderID:me,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:z,batching:Ue,batchingColor:Ue&&D._colorsTexture!==null,instancing:ut,instancingColor:ut&&D.instanceColor!==null,instancingMorph:ut&&D.morphTexture!==null,outputColorSpace:Fe===null?e.outputColorSpace:Fe.isXRRenderTarget===!0?Fe.texture.colorSpace:ht.workingColorSpace,alphaToCoverage:!!M.alphaToCoverage,map:Oe,matcap:pt,envMap:he,envMapMode:he&&N.mapping,envMapPMREM:de,envMapMaxLod:de?it.length-1:null,envMapSize:de?it[0].width:null,aoMap:ge,lightMap:Le,bumpMap:Re,normalMap:Ye,displacementMap:Je,emissiveMap:dt,normalMapObjectSpace:Ye&&M.normalMapType===qd,normalMapTangentSpace:Ye&&M.normalMapType===ir,packedNormalMap:Ye&&M.normalMapType===ir&&tS(M.normalMap.format),metalnessMap:_t,roughnessMap:Lt,anisotropy:R,anisotropyMap:Gt,clearcoat:xe,clearcoatMap:P,clearcoatNormalMap:S,clearcoatRoughnessMap:W,diffuseRoughness:_e,diffuseRoughnessMap:pe,dispersion:He,retroreflection:se,iridescence:ze,iridescenceMap:le,iridescenceThicknessMap:ye,sheen:ke,sheenColorMap:ue,sheenRoughnessMap:K,specularMap:ne,specularColorMap:Se,specularIntensityMap:U,transmission:at,transmissionMap:oe,thicknessMap:re,gradientMap:ve,opaque:M.transparent===!1&&M.blending===es&&M.alphaToCoverage===!1,alphaMap:Te,alphaTest:Ae,alphaHash:je,combine:M.combine,mapUv:Oe&&m(M.map.channel),aoMapUv:ge&&m(M.aoMap.channel),lightMapUv:Le&&m(M.lightMap.channel),bumpMapUv:Re&&m(M.bumpMap.channel),normalMapUv:Ye&&m(M.normalMap.channel),displacementMapUv:Je&&m(M.displacementMap.channel),emissiveMapUv:dt&&m(M.emissiveMap.channel),metalnessMapUv:_t&&m(M.metalnessMap.channel),roughnessMapUv:Lt&&m(M.roughnessMap.channel),anisotropyMapUv:Gt&&m(M.anisotropyMap.channel),clearcoatMapUv:P&&m(M.clearcoatMap.channel),clearcoatNormalMapUv:S&&m(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:W&&m(M.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:pe&&m(M.diffuseRoughnessMap.channel),iridescenceMapUv:le&&m(M.iridescenceMap.channel),iridescenceThicknessMapUv:ye&&m(M.iridescenceThicknessMap.channel),sheenColorMapUv:ue&&m(M.sheenColorMap.channel),sheenRoughnessMapUv:K&&m(M.sheenRoughnessMap.channel),specularMapUv:ne&&m(M.specularMap.channel),specularColorMapUv:Se&&m(M.specularColorMap.channel),specularIntensityMapUv:U&&m(M.specularIntensityMap.channel),transmissionMapUv:oe&&m(M.transmissionMap.channel),thicknessMapUv:re&&m(M.thicknessMap.channel),alphaMapUv:Te&&m(M.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(Ye||R),vertexNormals:!!I.attributes.normal,vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!I.attributes.uv&&(Oe||Te),fog:!!ee,useFog:M.fog===!0,fogExp2:!!ee&&ee.isFogExp2,flatShading:M.wireframe===!1&&(M.flatShading===!0||I.attributes.normal===void 0&&Ye===!1&&(M.isMeshLambertMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isMeshPhysicalMaterial)),sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:we,skinning:D.isSkinnedMesh===!0,hasPositionAttribute:I.attributes.position!==void 0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:Y,morphTextureStride:ae,numSunLights:b.sun.length,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numSunLightShadows:b.sunShadowMap.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:V.filter((Ne)=>Ne.texture!==null).length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:M.dithering,shadowMapEnabled:e.shadowMap.enabled&&C.length>0,shadowMapType:e.shadowMap.type,toneMapping:Ce,decodeVideoTexture:Oe&&M.map.isVideoTexture===!0&&ht.getTransfer(M.map.colorSpace)===St,decodeVideoTextureEmissive:dt&&M.emissiveMap.isVideoTexture===!0&&ht.getTransfer(M.emissiveMap.colorSpace)===St,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Nt,flipSided:M.side===Kt,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Xe&&M.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Xe&&M.extensions.multiDraw===!0||Ue)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return mt.vertexUv1s=l.has(1),mt.vertexUv2s=l.has(2),mt.vertexUv3s=l.has(3),l.clear(),mt}function x(M){let b=[];if(M.shaderID)b.push(M.shaderID);else b.push(M.customVertexShaderID),b.push(M.customFragmentShaderID);if(M.defines!==void 0)for(let C in M.defines)b.push(C),b.push(M.defines[C]);if(M.isRawShaderMaterial===!1)d(b,M),p(b,M),b.push(e.outputColorSpace);return b.push(M.customProgramCacheKey),b.join()}function d(M,b){M.push(b.precision),M.push(b.outputColorSpace),M.push(b.envMapMode),M.push(b.envMapPMREM),M.push(b.envMapMaxLod),M.push(b.envMapSize),M.push(b.mapUv),M.push(b.alphaMapUv),M.push(b.lightMapUv),M.push(b.aoMapUv),M.push(b.bumpMapUv),M.push(b.normalMapUv),M.push(b.displacementMapUv),M.push(b.emissiveMapUv),M.push(b.metalnessMapUv),M.push(b.roughnessMapUv),M.push(b.anisotropyMapUv),M.push(b.clearcoatMapUv),M.push(b.clearcoatNormalMapUv),M.push(b.clearcoatRoughnessMapUv),M.push(b.diffuseRoughnessMapUv),M.push(b.iridescenceMapUv),M.push(b.iridescenceThicknessMapUv),M.push(b.sheenColorMapUv),M.push(b.sheenRoughnessMapUv),M.push(b.specularMapUv),M.push(b.specularColorMapUv),M.push(b.specularIntensityMapUv),M.push(b.transmissionMapUv),M.push(b.thicknessMapUv),M.push(b.combine),M.push(b.fogExp2),M.push(b.sizeAttenuation),M.push(b.morphTargetsCount),M.push(b.numSunLights),M.push(b.numDirLights),M.push(b.numPointLights),M.push(b.numSpotLights),M.push(b.numSpotLightMaps),M.push(b.numHemiLights),M.push(b.numRectAreaLights),M.push(b.numSunLightShadows),M.push(b.numDirLightShadows),M.push(b.numPointLightShadows),M.push(b.numSpotLightShadows),M.push(b.numSpotLightShadowsWithMaps),M.push(b.numLightProbes),M.push(b.numLightProbeGrids),M.push(b.shadowMapType),M.push(b.toneMapping),M.push(b.numClippingPlanes),M.push(b.numClipIntersection),M.push(b.depthPacking)}function p(M,b){if(o.disableAll(),b.instancing)o.enable(0);if(b.instancingColor)o.enable(1);if(b.instancingMorph)o.enable(2);if(b.matcap)o.enable(3);if(b.envMap)o.enable(4);if(b.normalMapObjectSpace)o.enable(5);if(b.normalMapTangentSpace)o.enable(6);if(b.clearcoat)o.enable(7);if(b.iridescence)o.enable(8);if(b.alphaTest)o.enable(9);if(b.vertexColors)o.enable(10);if(b.vertexAlphas)o.enable(11);if(b.vertexUv1s)o.enable(12);if(b.vertexUv2s)o.enable(13);if(b.vertexUv3s)o.enable(14);if(b.vertexTangents)o.enable(15);if(b.anisotropy)o.enable(16);if(b.alphaHash)o.enable(17);if(b.batching)o.enable(18);if(b.dispersion)o.enable(19);if(b.retroreflection)o.enable(24);if(b.diffuseRoughness)o.enable(25);if(b.batchingColor)o.enable(20);if(b.gradientMap)o.enable(21);if(b.packedNormalMap)o.enable(22);if(b.vertexNormals)o.enable(23);if(M.push(o.mask),o.disableAll(),b.fog)o.enable(0);if(b.useFog)o.enable(1);if(b.flatShading)o.enable(2);if(b.logarithmicDepthBuffer)o.enable(3);if(b.reversedDepthBuffer)o.enable(4);if(b.skinning)o.enable(5);if(b.morphTargets)o.enable(6);if(b.morphNormals)o.enable(7);if(b.morphColors)o.enable(8);if(b.premultipliedAlpha)o.enable(9);if(b.shadowMapEnabled)o.enable(10);if(b.doubleSided)o.enable(11);if(b.flipSided)o.enable(12);if(b.useDepthPacking)o.enable(13);if(b.dithering)o.enable(14);if(b.transmission)o.enable(15);if(b.sheen)o.enable(16);if(b.opaque)o.enable(17);if(b.pointsUvs)o.enable(18);if(b.decodeVideoTexture)o.enable(19);if(b.decodeVideoTextureEmissive)o.enable(20);if(b.alphaToCoverage)o.enable(21);if(b.numLightProbeGrids>0)o.enable(22);if(b.hasPositionAttribute)o.enable(23);M.push(o.mask)}function _(M){let b=f[M.type],C;if(b){let F=Nn[b];C=xr.clone(F.uniforms)}else C=M.uniforms;return C}function y(M,b){let C=h.get(b);if(C!==void 0)++C.usedTimes;else C=new Bx(e,b,M,r),c.push(C),h.set(b,C);return C}function v(M){if(--M.usedTimes===0){let b=c.indexOf(M);c[b]=c[c.length-1],c.pop(),h.delete(M.cacheKey),M.destroy()}}function T(M){a.remove(M)}function w(){a.dispose()}return{getParameters:g,getProgramCacheKey:x,getUniforms:_,acquireProgram:y,releaseProgram:v,releaseShaderCache:T,programs:c,dispose:w}}function Gx(){let e=new WeakMap;function t(o){return e.has(o)}function i(o){let a=e.get(o);if(a===void 0)a={},e.set(o,a);return a}function n(o){e.delete(o)}function r(o,a,l){e.get(o)[a]=l}function s(){e=new WeakMap}return{has:t,get:i,remove:n,update:r,dispose:s}}function iS(e,t){if(e.groupOrder!==t.groupOrder)return e.groupOrder-t.groupOrder;else if(e.renderOrder!==t.renderOrder)return e.renderOrder-t.renderOrder;else if(e.material.id!==t.material.id)return e.material.id-t.material.id;else if(e.materialVariant!==t.materialVariant)return e.materialVariant-t.materialVariant;else if(e.z!==t.z)return e.z-t.z;else return e.id-t.id}function zx(e,t){if(e.groupOrder!==t.groupOrder)return e.groupOrder-t.groupOrder;else if(e.renderOrder!==t.renderOrder)return e.renderOrder-t.renderOrder;else if(e.z!==t.z)return t.z-e.z;else return e.id-t.id}function kx(){let e=[],t=0,i=[],n=[],r=[];function s(){t=0,i.length=0,n.length=0,r.length=0}function o(f){let m=0;if(f.isInstancedMesh)m+=2;if(f.isSkinnedMesh)m+=1;return m}function a(f,m,g,x,d,p){let _=e[t];if(_===void 0)_={id:f.id,object:f,geometry:m,material:g,materialVariant:o(f),groupOrder:x,renderOrder:f.renderOrder,z:d,group:p},e[t]=_;else _.id=f.id,_.object=f,_.geometry=m,_.material=g,_.materialVariant=o(f),_.groupOrder=x,_.renderOrder=f.renderOrder,_.z=d,_.group=p;return t++,_}function l(f,m,g,x,d,p,_){if(_.reversedDepth===!0)d=-d;let y=a(f,m,g,x,d,p);if(g.transmission>0)n.push(y);else if(g.transparent===!0)r.push(y);else i.push(y)}function c(f,m,g,x,d,p){let _=a(f,m,g,x,d,p);if(g.transmission>0)n.unshift(_);else if(g.transparent===!0)r.unshift(_);else i.unshift(_)}function h(f,m){if(i.length>1)i.sort(f||iS);if(n.length>1)n.sort(m||zx);if(r.length>1)r.sort(m||zx)}function u(){for(let f=t,m=e.length;f<m;f++){let g=e[f];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:i,transmissive:n,transparent:r,init:s,push:l,unshift:c,finish:u,sort:h}}function Vx(){let e=new WeakMap;function t(n,r){let s=e.get(n),o;if(s===void 0)o=new kx,e.set(n,[o]);else if(r>=s.length)o=new kx,s.push(o);else o=s[r];return o}function i(){e=new WeakMap}return{get:t,dispose:i}}function nS(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let i;switch(t.type){case"SunLight":case"DirectionalLight":i={direction:new A,color:new fe};break;case"SpotLight":i={position:new A,direction:new A,color:new fe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new A,color:new fe,distance:0,decay:0};break;case"HemisphereLight":i={direction:new A,skyColor:new fe,groundColor:new fe};break;case"RectAreaLight":i={color:new fe,position:new A,halfWidth:new A,halfHeight:new A};break}return e[t.id]=i,i}}}function rS(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let i;switch(t.type){case"SunLight":case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new X};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new X};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new X,shadowCameraNear:1,shadowCameraFar:1000};break}return e[t.id]=i,i}}}var sS=0;function oS(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function Wx(e){let t=new nS,i=rS(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new A);let r=new A,s=new Be,o=new Be;function a(c){let h=0,u=0,f=0;for(let V=0;V<9;V++)n.probe[V].set(0,0,0);let m=0,g=0,x=0,d=0,p=0,_=0,y=0,v=0,T=0,w=0,M=0,b=0,C=0,F=0;c.sort(oS);for(let V=0,ee=c.length;V<ee;V++){let I=c[V],{color:J,intensity:L,distance:N}=I,j=null;if(I.shadow&&I.shadow.map)if(I.shadow.map.texture.format===En)j=I.shadow.map.texture;else j=I.shadow.map.depthTexture||I.shadow.map.texture;if(I.isAmbientLight)h+=J.r*L,u+=J.g*L,f+=J.b*L;else if(I.isLightProbe){for(let z=0;z<9;z++)n.probe[z].addScaledVector(I.sh.coefficients[z],L);F++}else if(I.isSunLight){let z=t.get(I);if(z.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let H=I.shadow,Y=i.get(I);Y.shadowIntensity=H.intensity,Y.shadowBias=H.bias,Y.shadowNormalBias=H.normalBias,Y.shadowRadius=H.radius,Y.shadowMapSize.copy(H.mapSize).multiply(H.getFrameExtents()),n.sunShadow[g]=Y,n.sunShadowMap[g]=j;let ae=H.getViewportCount();for(let G=0;G<ae;G++)n.sunShadowMatrix[x+G]=H.getMatrix(G),n.sunShadowCascade[x+G]=H._cascadeData[G];x+=ae,g++}n.sun[m]=z,m++}else if(I.isDirectionalLight){let z=t.get(I);if(z.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let H=I.shadow,Y=i.get(I);Y.shadowIntensity=H.intensity,Y.shadowBias=H.bias,Y.shadowNormalBias=H.normalBias,Y.shadowRadius=H.radius,Y.shadowMapSize=H.mapSize,n.directionalShadow[d]=Y,n.directionalShadowMap[d]=j,n.directionalShadowMatrix[d]=I.shadow.matrix,T++}n.directional[d]=z,d++}else if(I.isSpotLight){let z=t.get(I);z.position.setFromMatrixPosition(I.matrixWorld),z.color.copy(J).multiplyScalar(L),z.distance=N,z.coneCos=Math.cos(I.angle),z.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),z.decay=I.decay,n.spot[_]=z;let H=I.shadow;if(I.map){if(n.spotLightMap[b]=I.map,b++,H.updateMatrices(I),I.castShadow)C++}if(n.spotLightMatrix[_]=H.matrix,I.castShadow){let Y=i.get(I);Y.shadowIntensity=H.intensity,Y.shadowBias=H.bias,Y.shadowNormalBias=H.normalBias,Y.shadowRadius=H.radius,Y.shadowMapSize=H.mapSize,n.spotShadow[_]=Y,n.spotShadowMap[_]=j,M++}_++}else if(I.isRectAreaLight){let z=t.get(I);z.color.copy(J).multiplyScalar(L),z.halfWidth.set(I.width*0.5,0,0),z.halfHeight.set(0,I.height*0.5,0),n.rectArea[y]=z,y++}else if(I.isPointLight){let z=t.get(I);if(z.color.copy(I.color).multiplyScalar(I.intensity),z.distance=I.distance,z.decay=I.decay,I.castShadow){let H=I.shadow,Y=i.get(I);Y.shadowIntensity=H.intensity,Y.shadowBias=H.bias,Y.shadowNormalBias=H.normalBias,Y.shadowRadius=H.radius,Y.shadowMapSize=H.mapSize,Y.shadowCameraNear=H.camera.near,Y.shadowCameraFar=H.camera.far,n.pointShadow[p]=Y,n.pointShadowMap[p]=j,n.pointShadowMatrix[p]=I.shadow.matrix,w++}n.point[p]=z,p++}else if(I.isHemisphereLight){let z=t.get(I);z.skyColor.copy(I.color).multiplyScalar(L),z.groundColor.copy(I.groundColor).multiplyScalar(L),n.hemi[v]=z,v++}}if(y>0)if(e.has("OES_texture_float_linear")===!0)n.rectAreaLTC1=De.LTC_FLOAT_1,n.rectAreaLTC2=De.LTC_FLOAT_2;else n.rectAreaLTC1=De.LTC_HALF_1,n.rectAreaLTC2=De.LTC_HALF_2;n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;let D=n.hash;if(D.sunLength!==m||D.directionalLength!==d||D.pointLength!==p||D.spotLength!==_||D.rectAreaLength!==y||D.hemiLength!==v||D.numSunShadows!==g||D.numDirectionalShadows!==T||D.numPointShadows!==w||D.numSpotShadows!==M||D.numSpotMaps!==b||D.numLightProbes!==F)n.sun.length=m,n.directional.length=d,n.spot.length=_,n.rectArea.length=y,n.point.length=p,n.hemi.length=v,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=x,n.sunShadowCascade.length=x,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.directionalShadowMatrix.length=T,n.pointShadow.length=w,n.pointShadowMap.length=w,n.pointShadowMatrix.length=w,n.spotShadow.length=M,n.spotShadowMap.length=M,n.spotLightMatrix.length=M+b-C,n.spotLightMap.length=b,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=F,D.sunLength=m,D.directionalLength=d,D.pointLength=p,D.spotLength=_,D.rectAreaLength=y,D.hemiLength=v,D.numSunShadows=g,D.numDirectionalShadows=T,D.numPointShadows=w,D.numSpotShadows=M,D.numSpotMaps=b,D.numLightProbes=F,n.version=sS++}function l(c,h){let u=0,f=0,m=0,g=0,x=0,d=0,p=h.matrixWorldInverse;for(let _=0,y=c.length;_<y;_++){let v=c[_];if(v.isSunLight){let T=n.sun[u];T.direction.setFromMatrixPosition(v.matrixWorld),T.direction.transformDirection(p),u++}else if(v.isDirectionalLight){let T=n.directional[f];T.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(p),f++}else if(v.isSpotLight){let T=n.spot[g];T.position.setFromMatrixPosition(v.matrixWorld),T.position.applyMatrix4(p),T.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(p),g++}else if(v.isRectAreaLight){let T=n.rectArea[x];T.position.setFromMatrixPosition(v.matrixWorld),T.position.applyMatrix4(p),o.identity(),s.copy(v.matrixWorld),s.premultiply(p),o.extractRotation(s),T.halfWidth.set(v.width*0.5,0,0),T.halfHeight.set(0,v.height*0.5,0),T.halfWidth.applyMatrix4(o),T.halfHeight.applyMatrix4(o),x++}else if(v.isPointLight){let T=n.point[m];T.position.setFromMatrixPosition(v.matrixWorld),T.position.applyMatrix4(p),m++}else if(v.isHemisphereLight){let T=n.hemi[d];T.direction.setFromMatrixPosition(v.matrixWorld),T.direction.transformDirection(p),d++}}}return{setup:a,setupView:l,state:n}}function Xx(e){let t=new Wx(e),i=[],n=[],r=[];function s(u){h.camera=u,i.length=0,n.length=0,r.length=0}function o(u){if(u.isLightProbeGrid)r.push(u);else i.push(u)}function a(u){n.push(u)}function l(){t.setup(i),r.sort((u,f)=>u.priority-f.priority||u.id-f.id)}function c(u){t.setupView(i,u)}let h={lightsArray:i,shadowsArray:n,lightProbeGridArray:r,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:h,setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function Yx(e){let t=new WeakMap;function i(r,s=0){let o=t.get(r),a;if(o===void 0)a=new Xx(e),t.set(r,[a]);else if(s>=o.length)a=new Xx(e),o.push(a);else a=o[s];return a}function n(){t=new WeakMap}return{get:i,dispose:n}}var qx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}
`,Zx=`
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
`;var lS=[new A(1,0,0),new A(-1,0,0),new A(0,1,0),new A(0,-1,0),new A(0,0,1),new A(0,0,-1)],cS=[new A(0,-1,0),new A(0,-1,0),new A(0,0,1),new A(0,0,-1),new A(0,-1,0),new A(0,-1,0)],Kx=new Be,tc=new A,Tu=new A;function Jx(e,t,i){let n=new Wn,r=new X,s=new X,o=new bt,a=new Xl,l=new Yl,c={},h=i.maxTextureSize,u={[yn]:Kt,[Kt]:yn,[Nt]:Nt},f=new si({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new X},radius:{value:4}},vertexShader:qx,fragmentShader:Zx}),m=f.clone();m.defines.HORIZONTAL_PASS=1;let g=new Ve;g.setAttribute("position",new qt(new Float32Array([-1,-1,0.5,3,-1,0.5,-1,3,0.5]),3));let x=new ie(g,f),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=po;let p=this.type;this.render=function(w,M,b){if(d.enabled===!1)return;if(d.autoUpdate===!1&&d.needsUpdate===!1)return;if(w.length===0)return;if(this.type===bd)be("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=po;let C=e.getRenderTarget(),F=e.getActiveCubeFace(),D=e.getActiveMipmapLevel(),V=e.state;if(V.setBlending(On),V.buffers.depth.getReversed()===!0)V.buffers.color.setClear(0,0,0,0);else V.buffers.color.setClear(1,1,1,1);V.buffers.depth.setTest(!0),V.setScissorTest(!1);let ee=p!==this.type;if(ee)M.traverse(function(I){if(I.material)if(Array.isArray(I.material))I.material.forEach((J)=>J.needsUpdate=!0);else I.material.needsUpdate=!0});for(let I=0,J=w.length;I<J;I++){let L=w[I],N=L.shadow;if(N===void 0){be("WebGLShadowMap:",L,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;r.copy(N.mapSize);let j=N.getFrameExtents();if(r.multiply(j),s.copy(N.mapSize),r.x>h||r.y>h){if(r.x>h)s.x=Math.floor(h/j.x),r.x=s.x*j.x,N.mapSize.x=s.x;if(r.y>h)s.y=Math.floor(h/j.y),r.y=s.y*j.y,N.mapSize.y=s.y}let z=e.state.buffers.depth.getReversed();if(N.camera._reversedDepth=z,N.map===null||ee===!0){if(N.map!==null){if(N.map.depthTexture!==null)N.map.depthTexture.dispose(),N.map.depthTexture=null;N.map.dispose()}if(this.type===Is){if(L.isPointLight){be("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}N.map=new ei(r.x,r.y,{format:En,type:ni,minFilter:Yt,magFilter:Yt,generateMipmaps:!1}),N.map.texture.name=L.name+".shadowMap",N.map.depthTexture=new Cn(r.x,r.y,di),N.map.depthTexture.name=L.name+".shadowMapDepth",N.map.depthTexture.format=Mn,N.map.depthTexture.compareFunction=null,N.map.depthTexture.minFilter=Vt,N.map.depthTexture.magFilter=Vt}else{if(L.isPointLight)N.map=new _s(r.x),N.map.depthTexture=new ea(r.x,Ci);else N.map=new ei(r.x,r.y),N.map.depthTexture=new Cn(r.x,r.y,Ci);if(N.map.depthTexture.name=L.name+".shadowMap",N.map.depthTexture.format=Mn,this.type===po)N.map.depthTexture.compareFunction=z?Gc:Hc,N.map.depthTexture.minFilter=Yt,N.map.depthTexture.magFilter=Yt;else N.map.depthTexture.compareFunction=null,N.map.depthTexture.minFilter=Vt,N.map.depthTexture.magFilter=Vt}N.camera.updateProjectionMatrix()}if(N.map.isWebGLCubeRenderTarget!==!0&&(N.map.width!==r.x||N.map.height!==r.y))N.map.setSize(r.x,r.y);let H=N.map.isWebGLCubeRenderTarget?6:N.getViewportCount();if(L.isPointLight!==!0)N.updateMatrices(L,b);let Y=(N.camera.layers.mask&4294967294)!==0?N.camera.layers:b.layers;for(let ae=0;ae<H;ae++){let G=N.getCamera(ae);if(L.isPointLight){let{camera:Q,matrix:Me}=N,me=L.distance||Q.far;if(me!==Q.far)Q.far=me,Q.updateProjectionMatrix();tc.setFromMatrixPosition(L.matrixWorld),Q.position.copy(tc),Tu.copy(Q.position),Tu.add(lS[ae]),Q.up.copy(cS[ae]),Q.lookAt(Tu),Q.updateMatrixWorld(),Me.makeTranslation(-tc.x,-tc.y,-tc.z),Kx.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),N._frustum.setFromProjectionMatrix(Kx,Q.coordinateSystem,Q.reversedDepth)}if(N.map.isWebGLCubeRenderTarget)e.setRenderTarget(N.map,ae),e.clear();else{if(ae===0)e.setRenderTarget(N.map),e.clear();let Q=N.getViewport(ae);o.set(s.x*Q.x,s.y*Q.y,s.x*Q.z,s.y*Q.w),V.viewport(o)}n=N.getFrustum(ae),v(M,b,G,L,Y,this.type)}if(N.isPointLightShadow!==!0&&this.type===Is)_(N,b);N.needsUpdate=!1}p=this.type,d.needsUpdate=!1,e.setRenderTarget(C,F,D)};function _(w,M){let b=t.update(x);if(f.defines.VSM_SAMPLES!==w.blurSamples)f.defines.VSM_SAMPLES=w.blurSamples,m.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0;if(w.mapPass===null)w.mapPass=new ei(r.x,r.y,{format:En,type:ni});else if(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)w.mapPass.setSize(w.map.width,w.map.height);f.uniforms.shadow_pass.value=w.map.depthTexture,f.uniforms.resolution.value.set(w.map.width,w.map.height),f.uniforms.radius.value=w.radius,e.setRenderTarget(w.mapPass),e.clear(),e.renderBufferDirect(M,null,b,f,x,null),m.uniforms.shadow_pass.value=w.mapPass.texture,m.uniforms.resolution.value.set(w.map.width,w.map.height),m.uniforms.radius.value=w.radius,e.setRenderTarget(w.map),e.clear(),e.renderBufferDirect(M,null,b,m,x,null)}function y(w,M,b,C){let F=null,D=b.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(D!==void 0)F=D;else if(F=b.isPointLight===!0?l:a,e.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0||M.map&&M.alphaTest>0||M.alphaToCoverage===!0){let V=F.uuid,ee=M.uuid,I=c[V];if(I===void 0)I={},c[V]=I;let J=I[ee];if(J===void 0)J=F.clone(),I[ee]=J,M.addEventListener("dispose",T);F=J}if(F.visible=M.visible,F.wireframe=M.wireframe,C===Is)F.side=M.shadowSide!==null?M.shadowSide:M.side;else F.side=M.shadowSide!==null?M.shadowSide:u[M.side];if(F.alphaMap=M.alphaMap,F.alphaTest=M.alphaToCoverage===!0?0.5:M.alphaTest,F.map=M.map,F.clipShadows=M.clipShadows,F.clippingPlanes=M.clippingPlanes,F.clipIntersection=M.clipIntersection,F.displacementMap=M.displacementMap,F.displacementScale=M.displacementScale,F.displacementBias=M.displacementBias,F.wireframeLinewidth=M.wireframeLinewidth,F.linewidth=M.linewidth,b.isPointLight===!0&&F.isMeshDistanceMaterial===!0){let V=e.properties.get(F);V.light=b}return F}function v(w,M,b,C,F,D){if(w.visible===!1)return;if(w.layers.test(F)&&(w.isMesh||w.isLine||w.isPoints)){if((w.castShadow||w.receiveShadow&&D===Is)&&(!w.frustumCulled||w.intersectsFrustum(n))){w.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,w.matrixWorld);let I=t.update(w),J=w.material;if(Array.isArray(J)){let L=I.groups;for(let N=0,j=L.length;N<j;N++){let z=L[N],H=J[z.materialIndex];if(H&&H.visible){let Y=y(w,H,C,D);w.onBeforeShadow(e,w,M,b,I,Y,z),e.renderBufferDirect(b,null,I,Y,w,z),w.onAfterShadow(e,w,M,b,I,Y,z)}}}else if(J.visible){let L=y(w,J,C,D);w.onBeforeShadow(e,w,M,b,I,L,null),e.renderBufferDirect(b,null,I,L,w,null),w.onAfterShadow(e,w,M,b,I,L,null)}}}let ee=w.children;for(let I=0,J=ee.length;I<J;I++)v(ee[I],M,b,C,F,D)}function T(w){w.target.removeEventListener("dispose",T);for(let b in c){let C=c[b],F=w.target.uuid;if(F in C)C[F].dispose(),delete C[F]}}}function jx(e,t){function i(){let U=!1,oe=new bt,re=null,ve=new bt(0,0,0,0);return{setMask:function(Te){if(re!==Te&&!U)e.colorMask(Te,Te,Te,Te),re=Te},setLocked:function(Te){U=Te},setClear:function(Te,Ae,je,Xe,Ce){if(Ce===!0)Te*=Xe,Ae*=Xe,je*=Xe;if(oe.set(Te,Ae,je,Xe),ve.equals(oe)===!1)e.clearColor(Te,Ae,je,Xe),ve.copy(oe)},reset:function(){U=!1,re=null,ve.set(-1,0,0,0)}}}function n(){let U=!1,oe=!1,re=null,ve=null,Te=null;return{setReversed:function(Ae){if(oe!==Ae){let je=t.get("EXT_clip_control");if(Ae)je.clipControlEXT(je.LOWER_LEFT_EXT,je.ZERO_TO_ONE_EXT);else je.clipControlEXT(je.LOWER_LEFT_EXT,je.NEGATIVE_ONE_TO_ONE_EXT);oe=Ae;let Xe=Te;Te=null,this.setClear(Xe)}},getReversed:function(){return oe},setTest:function(Ae){if(Ae)we(e.DEPTH_TEST);else ut(e.DEPTH_TEST)},setMask:function(Ae){if(re!==Ae&&!U)e.depthMask(Ae),re=Ae},setFunc:function(Ae){if(oe)Ae=rp[Ae];if(ve!==Ae){switch(Ae){case wa:e.depthFunc(e.NEVER);break;case Aa:e.depthFunc(e.ALWAYS);break;case Ra:e.depthFunc(e.LESS);break;case is:e.depthFunc(e.LEQUAL);break;case Ca:e.depthFunc(e.EQUAL);break;case Pa:e.depthFunc(e.GEQUAL);break;case Ia:e.depthFunc(e.GREATER);break;case La:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}ve=Ae}},setLocked:function(Ae){U=Ae},setClear:function(Ae){if(Te!==Ae){if(Te=Ae,oe)Ae=1-Ae;e.clearDepth(Ae)}},reset:function(){U=!1,re=null,ve=null,Te=null,oe=!1}}}function r(){let U=!1,oe=null,re=null,ve=null,Te=null,Ae=null,je=null,Xe=null,Ce=null;return{setTest:function(it){if(!U)if(it)we(e.STENCIL_TEST);else ut(e.STENCIL_TEST)},setMask:function(it){if(oe!==it&&!U)e.stencilMask(it),oe=it},setFunc:function(it,mt,Ne){if(re!==it||ve!==mt||Te!==Ne)e.stencilFunc(it,mt,Ne),re=it,ve=mt,Te=Ne},setOp:function(it,mt,Ne){if(Ae!==it||je!==mt||Xe!==Ne)e.stencilOp(it,mt,Ne),Ae=it,je=mt,Xe=Ne},setLocked:function(it){U=it},setClear:function(it){if(Ce!==it)e.clearStencil(it),Ce=it},reset:function(){U=!1,oe=null,re=null,ve=null,Te=null,Ae=null,je=null,Xe=null,Ce=null}}}let s=new i,o=new n,a=new r,l={},c=new WeakMap,h={},u={},f={},m=new WeakMap,g=[],x=null,d=!1,p=null,_=null,y=null,v=null,T=null,w=null,M=null,b=new fe(0,0,0),C=0,F=!1,D=null,V=null,ee=null,I=null,J=null,L=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),N=!1,j=0,z=e.getParameter(e.VERSION);if(z.indexOf("WebGL")!==-1)j=parseFloat(/^WebGL (\d)/.exec(z)[1]),N=j>=1;else if(z.indexOf("OpenGL ES")!==-1)j=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),N=j>=2;let H=null,Y={},ae=e.getParameter(e.SCISSOR_BOX),G=e.getParameter(e.VIEWPORT),Q=new bt().fromArray(ae),Me=new bt().fromArray(G);function me(U,oe,re,ve){let Te=new Uint8Array(4),Ae=e.createTexture();e.bindTexture(U,Ae),e.texParameteri(U,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(U,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let je=0;je<re;je++)if(U===e.TEXTURE_3D||U===e.TEXTURE_2D_ARRAY)e.texImage3D(oe,0,e.RGBA,1,1,ve,0,e.RGBA,e.UNSIGNED_BYTE,Te);else e.texImage2D(oe+je,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,Te);return Ae}let Fe={};Fe[e.TEXTURE_2D]=me(e.TEXTURE_2D,e.TEXTURE_2D,1),Fe[e.TEXTURE_CUBE_MAP]=me(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),Fe[e.TEXTURE_2D_ARRAY]=me(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),Fe[e.TEXTURE_3D]=me(e.TEXTURE_3D,e.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),we(e.DEPTH_TEST),o.setFunc(is),Re(!1),Ye(gf),we(e.CULL_FACE),ge(On);function we(U){if(h[U]!==!0)e.enable(U),h[U]=!0}function ut(U){if(h[U]!==!1)e.disable(U),h[U]=!1}function Ue(U,oe){if(f[U]!==oe){if(e.bindFramebuffer(U,oe),f[U]=oe,U===e.DRAW_FRAMEBUFFER)f[e.FRAMEBUFFER]=oe;if(U===e.FRAMEBUFFER)f[e.DRAW_FRAMEBUFFER]=oe;return!0}return!1}function Oe(U,oe){let re=g,ve=!1;if(U){if(re=m.get(oe),re===void 0)re=[],m.set(oe,re);let Te=U.textures;if(re.length!==Te.length||re[0]!==e.COLOR_ATTACHMENT0){for(let Ae=0,je=Te.length;Ae<je;Ae++)re[Ae]=e.COLOR_ATTACHMENT0+Ae;re.length=Te.length,ve=!0}}else if(re[0]!==e.BACK)re[0]=e.BACK,ve=!0;if(ve)e.drawBuffers(re)}function pt(U){if(x!==U)return e.useProgram(U),x=U,!0;return!1}let he={[ts]:e.FUNC_ADD,[Ed]:e.FUNC_SUBTRACT,[wd]:e.FUNC_REVERSE_SUBTRACT};he[Ad]=e.MIN,he[Rd]=e.MAX;let de={[Cd]:e.ZERO,[Pd]:e.ONE,[Id]:e.SRC_COLOR,[bc]:e.SRC_ALPHA,[Bd]:e.SRC_ALPHA_SATURATE,[Fd]:e.DST_COLOR,[Dd]:e.DST_ALPHA,[Ld]:e.ONE_MINUS_SRC_COLOR,[Tc]:e.ONE_MINUS_SRC_ALPHA,[Ud]:e.ONE_MINUS_DST_COLOR,[Nd]:e.ONE_MINUS_DST_ALPHA,[Od]:e.CONSTANT_COLOR,[Hd]:e.ONE_MINUS_CONSTANT_COLOR,[Gd]:e.CONSTANT_ALPHA,[zd]:e.ONE_MINUS_CONSTANT_ALPHA};function ge(U,oe,re,ve,Te,Ae,je,Xe,Ce,it){if(U===On){if(d===!0)ut(e.BLEND),d=!1;return}if(d===!1)we(e.BLEND),d=!0;if(U!==Td){if(U!==p||it!==F){if(_!==ts||T!==ts)e.blendEquation(e.FUNC_ADD),_=ts,T=ts;if(it)switch(U){case es:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case Ea:e.blendFunc(e.ONE,e.ONE);break;case xf:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case _f:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:We("WebGLState: Invalid blending: ",U);break}else switch(U){case es:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case Ea:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case xf:We("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case _f:We("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:We("WebGLState: Invalid blending: ",U);break}y=null,v=null,w=null,M=null,b.set(0,0,0),C=0,p=U,F=it}return}if(Te=Te||oe,Ae=Ae||re,je=je||ve,oe!==_||Te!==T)e.blendEquationSeparate(he[oe],he[Te]),_=oe,T=Te;if(re!==y||ve!==v||Ae!==w||je!==M)e.blendFuncSeparate(de[re],de[ve],de[Ae],de[je]),y=re,v=ve,w=Ae,M=je;if(Xe.equals(b)===!1||Ce!==C)e.blendColor(Xe.r,Xe.g,Xe.b,Ce),b.copy(Xe),C=Ce;p=U,F=!1}function Le(U,oe){U.side===Nt?ut(e.CULL_FACE):we(e.CULL_FACE);let re=U.side===Kt;if(oe)re=!re;Re(re),U.blending===es&&U.transparent===!1?ge(On):ge(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),o.setFunc(U.depthFunc),o.setTest(U.depthTest),o.setMask(U.depthWrite),s.setMask(U.colorWrite);let ve=U.stencilWrite;if(a.setTest(ve),ve)a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass);dt(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?we(e.SAMPLE_ALPHA_TO_COVERAGE):ut(e.SAMPLE_ALPHA_TO_COVERAGE)}function Re(U){if(D!==U){if(U)e.frontFace(e.CW);else e.frontFace(e.CCW);D=U}}function Ye(U){if(U!==vd){if(we(e.CULL_FACE),U!==V)if(U===gf)e.cullFace(e.BACK);else if(U===Sd)e.cullFace(e.FRONT);else e.cullFace(e.FRONT_AND_BACK)}else ut(e.CULL_FACE);V=U}function Je(U){if(U!==ee){if(N)e.lineWidth(U);ee=U}}function dt(U,oe,re){if(U){if(we(e.POLYGON_OFFSET_FILL),I!==oe||J!==re){if(I=oe,J=re,o.getReversed())oe=-oe,re=-re;e.polygonOffset(oe,re)}}else ut(e.POLYGON_OFFSET_FILL)}function _t(U){if(U)we(e.SCISSOR_TEST);else ut(e.SCISSOR_TEST)}function Lt(U){if(U===void 0)U=e.TEXTURE0+L-1;if(H!==U)e.activeTexture(U),H=U}function R(U,oe,re){if(re===void 0)if(H===null)re=e.TEXTURE0+L-1;else re=H;let ve=Y[re];if(ve===void 0)ve={type:void 0,texture:void 0},Y[re]=ve;if(ve.type!==U||ve.texture!==oe){if(H!==re)e.activeTexture(re),H=re;e.bindTexture(U,oe||Fe[U]),ve.type=U,ve.texture=oe}}function xe(){let U=Y[H];if(U!==void 0&&U.type!==void 0)e.bindTexture(U.type,null),U.type=void 0,U.texture=void 0}function _e(){try{e.compressedTexImage2D(...arguments)}catch(U){We("WebGLState:",U)}}function He(){try{e.compressedTexImage3D(...arguments)}catch(U){We("WebGLState:",U)}}function se(){try{e.texSubImage2D(...arguments)}catch(U){We("WebGLState:",U)}}function ze(){try{e.texSubImage3D(...arguments)}catch(U){We("WebGLState:",U)}}function ke(){try{e.compressedTexSubImage2D(...arguments)}catch(U){We("WebGLState:",U)}}function at(){try{e.compressedTexSubImage3D(...arguments)}catch(U){We("WebGLState:",U)}}function Gt(){try{e.texStorage2D(...arguments)}catch(U){We("WebGLState:",U)}}function P(){try{e.texStorage3D(...arguments)}catch(U){We("WebGLState:",U)}}function S(){try{e.texImage2D(...arguments)}catch(U){We("WebGLState:",U)}}function W(){try{e.texImage3D(...arguments)}catch(U){We("WebGLState:",U)}}function pe(U){if(u[U]!==void 0)return u[U];else return e.getParameter(U)}function le(U,oe){if(u[U]!==oe)e.pixelStorei(U,oe),u[U]=oe}function ye(U){if(Q.equals(U)===!1)e.scissor(U.x,U.y,U.z,U.w),Q.copy(U)}function ue(U){if(Me.equals(U)===!1)e.viewport(U.x,U.y,U.z,U.w),Me.copy(U)}function K(U,oe){let re=c.get(oe);if(re===void 0)re=new WeakMap,c.set(oe,re);let ve=re.get(U);if(ve===void 0)ve=e.getUniformBlockIndex(oe,U.name),e.uniformBlockBinding(oe,ve,ve),re.set(U,ve)}function ne(U,oe,re){let Te=c.get(oe).get(U);if(l[Te]!==re)e.bindBufferBase(e.UNIFORM_BUFFER,Te,re),l[Te]=re}function Se(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),h={},u={},H=null,Y={},f={},l={},m=new WeakMap,g=[],x=null,d=!1,p=null,_=null,y=null,v=null,T=null,w=null,M=null,b=new fe(0,0,0),C=0,F=!1,D=null,V=null,ee=null,I=null,J=null,Q.set(0,0,e.canvas.width,e.canvas.height),Me.set(0,0,e.canvas.width,e.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:we,disable:ut,bindFramebuffer:Ue,drawBuffers:Oe,useProgram:pt,setBlending:ge,setMaterial:Le,setFlipSided:Re,setCullFace:Ye,setLineWidth:Je,setPolygonOffset:dt,setScissorTest:_t,activeTexture:Lt,bindTexture:R,unbindTexture:xe,compressedTexImage2D:_e,compressedTexImage3D:He,texImage2D:S,texImage3D:W,pixelStorei:le,getParameter:pe,updateUBOMapping:K,uniformBlockBinding:ne,texStorage2D:Gt,texStorage3D:P,texSubImage2D:se,texSubImage3D:ze,compressedTexSubImage2D:ke,compressedTexSubImage3D:at,scissor:ye,viewport:ue,reset:Se}}function $x(e,t,i,n,r,s,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new X,h=new WeakMap,u=new Set,f,m=new WeakMap,g=new Set,x=new FinalizationRegistry((P)=>g.delete(P)),d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(P){}function p(P,S){return d?new OffscreenCanvas(P,S):os("canvas")}function _(P,S,W){let pe=1,le=Gt(P);if(le.width>W||le.height>W)pe=W/Math.max(le.width,le.height);if(pe<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){let ye=Math.floor(pe*le.width),ue=Math.floor(pe*le.height);if(f===void 0)f=p(ye,ue);let K=S?p(ye,ue):f;return K.width=ye,K.height=ue,K.getContext("2d").drawImage(P,0,0,ye,ue),be("WebGLRenderer: Texture has been resized from ("+le.width+"x"+le.height+") to ("+ye+"x"+ue+")."),K}else{if("data"in P)be("WebGLRenderer: Image in DataTexture is too big ("+le.width+"x"+le.height+").");return P}return P}function y(P){return P.generateMipmaps}function v(P){e.generateMipmap(P)}function T(P){if(P.isWebGLCubeRenderTarget)return e.TEXTURE_CUBE_MAP;if(P.isWebGL3DRenderTarget)return e.TEXTURE_3D;if(P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture)return e.TEXTURE_2D_ARRAY;return e.TEXTURE_2D}function w(P,S,W,pe,le,ye=!1){if(P!==null){if(e[P]!==void 0)return e[P];be("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let ue;if(pe){if(ue=t.get("EXT_texture_norm16"),!ue)be("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension")}let K=S;if(S===e.RED){if(W===e.FLOAT)K=e.R32F;if(W===e.HALF_FLOAT)K=e.R16F;if(W===e.UNSIGNED_BYTE)K=e.R8;if(W===e.UNSIGNED_SHORT&&ue)K=ue.R16_EXT;if(W===e.SHORT&&ue)K=ue.R16_SNORM_EXT}if(S===e.RED_INTEGER){if(W===e.UNSIGNED_BYTE)K=e.R8UI;if(W===e.UNSIGNED_SHORT)K=e.R16UI;if(W===e.UNSIGNED_INT)K=e.R32UI;if(W===e.BYTE)K=e.R8I;if(W===e.SHORT)K=e.R16I;if(W===e.INT)K=e.R32I}if(S===e.RG){if(W===e.FLOAT)K=e.RG32F;if(W===e.HALF_FLOAT)K=e.RG16F;if(W===e.UNSIGNED_BYTE)K=e.RG8;if(W===e.UNSIGNED_SHORT&&ue)K=ue.RG16_EXT;if(W===e.SHORT&&ue)K=ue.RG16_SNORM_EXT}if(S===e.RG_INTEGER){if(W===e.UNSIGNED_BYTE)K=e.RG8UI;if(W===e.UNSIGNED_SHORT)K=e.RG16UI;if(W===e.UNSIGNED_INT)K=e.RG32UI;if(W===e.BYTE)K=e.RG8I;if(W===e.SHORT)K=e.RG16I;if(W===e.INT)K=e.RG32I}if(S===e.RGB_INTEGER){if(W===e.UNSIGNED_BYTE)K=e.RGB8UI;if(W===e.UNSIGNED_SHORT)K=e.RGB16UI;if(W===e.UNSIGNED_INT)K=e.RGB32UI;if(W===e.BYTE)K=e.RGB8I;if(W===e.SHORT)K=e.RGB16I;if(W===e.INT)K=e.RGB32I}if(S===e.RGBA_INTEGER){if(W===e.UNSIGNED_BYTE)K=e.RGBA8UI;if(W===e.UNSIGNED_SHORT)K=e.RGBA16UI;if(W===e.UNSIGNED_INT)K=e.RGBA32UI;if(W===e.BYTE)K=e.RGBA8I;if(W===e.SHORT)K=e.RGBA16I;if(W===e.INT)K=e.RGBA32I}if(S===e.RGB){if(W===e.UNSIGNED_SHORT&&ue)K=ue.RGB16_EXT;if(W===e.SHORT&&ue)K=ue.RGB16_SNORM_EXT;if(W===e.UNSIGNED_INT_5_9_9_9_REV)K=e.RGB9_E5;if(W===e.UNSIGNED_INT_10F_11F_11F_REV)K=e.R11F_G11F_B10F}if(S===e.RGBA){let ne=ye?Os:ht.getTransfer(le);if(W===e.FLOAT)K=e.RGBA32F;if(W===e.HALF_FLOAT)K=e.RGBA16F;if(W===e.UNSIGNED_BYTE)K=ne===St?e.SRGB8_ALPHA8:e.RGBA8;if(W===e.UNSIGNED_SHORT&&ue)K=ue.RGBA16_EXT;if(W===e.SHORT&&ue)K=ue.RGBA16_SNORM_EXT;if(W===e.UNSIGNED_SHORT_4_4_4_4)K=e.RGBA4;if(W===e.UNSIGNED_SHORT_5_5_5_1)K=e.RGB5_A1}if(K===e.R16F||K===e.R32F||K===e.RG16F||K===e.RG32F||K===e.RGBA16F||K===e.RGBA32F)t.get("EXT_color_buffer_float");return K}function M(P,S){let W;if(P){if(S===null||S===Ci||S===tr)W=e.DEPTH24_STENCIL8;else if(S===di)W=e.DEPTH32F_STENCIL8;else if(S===Lr)W=e.DEPTH24_STENCIL8,be("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")}else if(S===null||S===Ci||S===tr)W=e.DEPTH_COMPONENT24;else if(S===di)W=e.DEPTH_COMPONENT32F;else if(S===Lr)W=e.DEPTH_COMPONENT16;return W}function b(P,S){if(y(P)===!0||P.isFramebufferTexture&&P.minFilter!==Vt&&P.minFilter!==Yt)return Math.log2(Math.max(S.width,S.height))+1;else if(P.mipmaps.length>0)return P.mipmaps.length;else if(P.isCompressedTexture&&Array.isArray(P.image))return S.mipmaps.length;else return 1}function C(P){let S=new WeakRef(P);n.get(P).__ref=S,g.add(S),x.register(P,S,S)}function F(P){let S=n.get(P).__ref;if(S===void 0)return;g.delete(S),x.unregister(S)}function D(P){ee(P.target)}function V(P){I(P.target)}function ee(P){if(P.removeEventListener("dispose",D),F(P),L(P),P.isVideoTexture)h.delete(P);if(P.isHTMLTexture)u.delete(P)}function I(P){P.removeEventListener("dispose",V),F(P),j(P)}function J(){for(let P of g){let S=P.deref();if(S===void 0)continue;if(S.isRenderTarget===!0)I(S);else ee(S)}g.clear(),u.clear()}function L(P){let S=n.get(P);if(S.__webglInit===void 0)return;let W=P.source,pe=m.get(W);if(pe){let le=pe[S.__cacheKey];if(le.usedTimes--,le.usedTimes===0)N(P);if(Object.keys(pe).length===0)m.delete(W)}n.remove(P)}function N(P){let S=n.get(P);e.deleteTexture(S.__webglTexture);let W=P.source,pe=m.get(W);delete pe[S.__cacheKey],o.memory.textures--}function j(P){let S=n.get(P);if(S.__depthDisposeCallback)S.__depthDisposeCallback();let W=P.depthTexture;if(W&&W.renderTarget===P)ee(W);if(P.isWebGLCubeRenderTarget)for(let le=0;le<6;le++){if(Array.isArray(S.__webglFramebuffer[le]))for(let ye=0;ye<S.__webglFramebuffer[le].length;ye++)e.deleteFramebuffer(S.__webglFramebuffer[le][ye]);else e.deleteFramebuffer(S.__webglFramebuffer[le]);if(S.__webglDepthbuffer)e.deleteRenderbuffer(S.__webglDepthbuffer[le])}else{if(Array.isArray(S.__webglFramebuffer))for(let le=0;le<S.__webglFramebuffer.length;le++)e.deleteFramebuffer(S.__webglFramebuffer[le]);else e.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer)e.deleteRenderbuffer(S.__webglDepthbuffer);if(S.__webglMultisampledFramebuffer)e.deleteFramebuffer(S.__webglMultisampledFramebuffer);if(S.__webglColorRenderbuffer){for(let le=0;le<S.__webglColorRenderbuffer.length;le++)if(S.__webglColorRenderbuffer[le])e.deleteRenderbuffer(S.__webglColorRenderbuffer[le])}if(S.__webglDepthRenderbuffer)e.deleteRenderbuffer(S.__webglDepthRenderbuffer)}let pe=P.textures;for(let le=0,ye=pe.length;le<ye;le++){let ue=n.get(pe[le]);if(ue.__webglTexture)e.deleteTexture(ue.__webglTexture),o.memory.textures--;n.remove(pe[le])}n.remove(P)}let z=0;function H(){z=0}function Y(){return z}function ae(P){z=P}function G(){let P=z;if(P>=r.maxTextures)be("WebGLTextures: Trying to use "+(P+1)+" texture units while this GPU supports only "+r.maxTextures);return z+=1,P}function Q(P){let S=[];return S.push(P.wrapS),S.push(P.wrapT),S.push(P.wrapR||0),S.push(P.magFilter),S.push(P.minFilter),S.push(P.anisotropy),S.push(P.internalFormat),S.push(P.format),S.push(P.type),S.push(P.generateMipmaps),S.push(P.mipmapsAutoUpdate),S.push(P.premultiplyAlpha),S.push(P.flipY),S.push(P.unpackAlignment),S.push(P.colorSpace),S.join()}function Me(P,S){let W=n.get(P);if(P.isVideoTexture)ke(P);if(P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&W.__version!==P.version){let pe=P.image;if(pe===null)be("WebGLRenderer: Texture marked for update but no image data found.");else if(pe.complete===!1)be("WebGLRenderer: Texture marked for update but image is incomplete");else{Le(W,P,S);return}}else if(P.isExternalTexture)W.__webglTexture=P.sourceTexture?P.sourceTexture:null;i.bindTexture(e.TEXTURE_2D,W.__webglTexture,e.TEXTURE0+S)}function me(P,S){let W=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&W.__version!==P.version){Le(W,P,S);return}else if(P.isExternalTexture)W.__webglTexture=P.sourceTexture?P.sourceTexture:null;i.bindTexture(e.TEXTURE_2D_ARRAY,W.__webglTexture,e.TEXTURE0+S)}function Fe(P,S){let W=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&W.__version!==P.version){Le(W,P,S);return}i.bindTexture(e.TEXTURE_3D,W.__webglTexture,e.TEXTURE0+S)}function we(P,S){let W=n.get(P);if(P.version>0&&W.__version!==P.version){Re(W,P,S);return}i.bindTexture(e.TEXTURE_CUBE_MAP,W.__webglTexture,e.TEXTURE0+S)}let ut={[un]:e.REPEAT,[Ri]:e.CLAMP_TO_EDGE,[rs]:e.MIRRORED_REPEAT},Ue={[Vt]:e.NEAREST,[Fa]:e.NEAREST_MIPMAP_NEAREST,[ss]:e.NEAREST_MIPMAP_LINEAR,[Yt]:e.LINEAR,[Ds]:e.LINEAR_MIPMAP_NEAREST,[Bi]:e.LINEAR_MIPMAP_LINEAR},Oe={[Kd]:e.NEVER,[zc]:e.ALWAYS,[Jd]:e.LESS,[Hc]:e.LEQUAL,[jd]:e.EQUAL,[Gc]:e.GEQUAL,[$d]:e.GREATER,[Qd]:e.NOTEQUAL};function pt(P,S){if(S.type===di&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===Yt||S.magFilter===Ds||S.magFilter===ss||S.magFilter===Bi||S.minFilter===Yt||S.minFilter===Ds||S.minFilter===ss||S.minFilter===Bi))be("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.");if(e.texParameteri(P,e.TEXTURE_WRAP_S,ut[S.wrapS]),e.texParameteri(P,e.TEXTURE_WRAP_T,ut[S.wrapT]),P===e.TEXTURE_3D||P===e.TEXTURE_2D_ARRAY)e.texParameteri(P,e.TEXTURE_WRAP_R,ut[S.wrapR]);if(e.texParameteri(P,e.TEXTURE_MAG_FILTER,Ue[S.magFilter]),e.texParameteri(P,e.TEXTURE_MIN_FILTER,Ue[S.minFilter]),S.compareFunction)e.texParameteri(P,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(P,e.TEXTURE_COMPARE_FUNC,Oe[S.compareFunction]);if(t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Vt)return;if(S.minFilter!==ss&&S.minFilter!==Bi)return;if(S.type===di&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){let W=t.get("EXT_texture_filter_anisotropic");e.texParameterf(P,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function he(P,S){let W=!1;if(P.__webglInit===void 0)P.__webglInit=!0,S.addEventListener("dispose",D),C(S);let pe=S.source,le=m.get(pe);if(le===void 0)le={},m.set(pe,le);let ye=Q(S);if(ye!==P.__cacheKey){if(le[ye]===void 0)le[ye]={texture:e.createTexture(),usedTimes:0},o.memory.textures++,W=!0;le[ye].usedTimes++;let ue=le[P.__cacheKey];if(ue!==void 0){if(le[P.__cacheKey].usedTimes--,ue.usedTimes===0)N(S)}P.__cacheKey=ye,P.__webglTexture=le[ye].texture}return W}function de(P,S,W){return Math.floor(Math.floor(P/W)/S)}function ge(P,S,W,pe){let ye=P.updateRanges;if(ye.length===0)i.texSubImage2D(e.TEXTURE_2D,0,0,0,S.width,S.height,W,pe,S.data);else{ye.sort((U,oe)=>U.start-oe.start);let ue=0;for(let U=1;U<ye.length;U++){let oe=ye[ue],re=ye[U],ve=oe.start+oe.count,Te=de(re.start,S.width,4),Ae=de(oe.start,S.width,4);if(re.start<=ve+1&&Te===Ae&&de(re.start+re.count-1,S.width,4)===Te)oe.count=Math.max(oe.count,re.start+re.count-oe.start);else++ue,ye[ue]=re}ye.length=ue+1;let K=i.getParameter(e.UNPACK_ROW_LENGTH),ne=i.getParameter(e.UNPACK_SKIP_PIXELS),Se=i.getParameter(e.UNPACK_SKIP_ROWS);i.pixelStorei(e.UNPACK_ROW_LENGTH,S.width);for(let U=0,oe=ye.length;U<oe;U++){let re=ye[U],ve=Math.floor(re.start/4),Te=Math.ceil(re.count/4),Ae=ve%S.width,je=Math.floor(ve/S.width),Xe=Te,Ce=1;i.pixelStorei(e.UNPACK_SKIP_PIXELS,Ae),i.pixelStorei(e.UNPACK_SKIP_ROWS,je),i.texSubImage2D(e.TEXTURE_2D,0,Ae,je,Xe,1,W,pe,S.data)}P.clearUpdateRanges(),i.pixelStorei(e.UNPACK_ROW_LENGTH,K),i.pixelStorei(e.UNPACK_SKIP_PIXELS,ne),i.pixelStorei(e.UNPACK_SKIP_ROWS,Se)}}function Le(P,S,W){let pe=e.TEXTURE_2D;if(S.isDataArrayTexture||S.isCompressedArrayTexture)pe=e.TEXTURE_2D_ARRAY;if(S.isData3DTexture)pe=e.TEXTURE_3D;let le=he(P,S),ye=S.source;i.bindTexture(pe,P.__webglTexture,e.TEXTURE0+W);let ue=n.get(ye);if(ye.version!==ue.__version||le===!0){if(i.activeTexture(e.TEXTURE0+W),(typeof ImageBitmap<"u"&&S.image instanceof ImageBitmap)===!1){let Ce=ht.getPrimaries(ht.workingColorSpace),it=S.colorSpace===Gn?null:ht.getPrimaries(S.colorSpace),mt=S.colorSpace===Gn||Ce===it?e.NONE:e.BROWSER_DEFAULT_WEBGL;i.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,mt)}i.pixelStorei(e.UNPACK_ALIGNMENT,S.unpackAlignment);let ne=_(S.image,!1,r.maxTextureSize);ne=at(S,ne);let Se=s.convert(S.format,S.colorSpace),U=s.convert(S.type),oe=w(S.internalFormat,Se,U,S.normalized,S.colorSpace,S.isVideoTexture);pt(pe,S);let re,ve=S.mipmaps,Te=S.isVideoTexture!==!0,Ae=ue.__version===void 0||le===!0,je=ye.dataReady,Xe=b(S,ne);if(S.isDepthTexture){if(oe=M(S.format===Tn,S.type),Ae)if(Te)i.texStorage2D(e.TEXTURE_2D,1,oe,ne.width,ne.height);else i.texImage2D(e.TEXTURE_2D,0,oe,ne.width,ne.height,0,Se,U,null)}else if(S.isDataTexture)if(ve.length>0){if(Te&&Ae)i.texStorage2D(e.TEXTURE_2D,Xe,oe,ve[0].width,ve[0].height);for(let Ce=0,it=ve.length;Ce<it;Ce++)if(re=ve[Ce],Te){if(je)i.texSubImage2D(e.TEXTURE_2D,Ce,0,0,re.width,re.height,Se,U,re.data)}else i.texImage2D(e.TEXTURE_2D,Ce,oe,re.width,re.height,0,Se,U,re.data);S.generateMipmaps=!1}else if(Te){if(Ae)i.texStorage2D(e.TEXTURE_2D,Xe,oe,ne.width,ne.height);if(je)ge(S,ne,Se,U)}else i.texImage2D(e.TEXTURE_2D,0,oe,ne.width,ne.height,0,Se,U,ne.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){if(Te&&Ae)i.texStorage3D(e.TEXTURE_2D_ARRAY,Xe,oe,ve[0].width,ve[0].height,ne.depth);for(let Ce=0,it=ve.length;Ce<it;Ce++)if(re=ve[Ce],S.format!==Pi)if(Se!==null)if(Te){if(je)if(S.layerUpdates.size>0){let mt=yu(re.width,re.height,S.format,S.type);for(let Ne of S.layerUpdates){let Xt=re.data.subarray(Ne*mt/re.data.BYTES_PER_ELEMENT,(Ne+1)*mt/re.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,Ce,0,0,Ne,re.width,re.height,1,Se,Xt)}}else i.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,Ce,0,0,0,re.width,re.height,ne.depth,Se,re.data)}else i.compressedTexImage3D(e.TEXTURE_2D_ARRAY,Ce,oe,re.width,re.height,ne.depth,0,re.data,0,0);else be("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(Te){if(je)i.texSubImage3D(e.TEXTURE_2D_ARRAY,Ce,0,0,0,re.width,re.height,ne.depth,Se,U,re.data)}else i.texImage3D(e.TEXTURE_2D_ARRAY,Ce,oe,re.width,re.height,ne.depth,0,Se,U,re.data);if(S.layerUpdates.size>0)S.clearLayerUpdates()}else{if(Te&&Ae)i.texStorage2D(e.TEXTURE_2D,Xe,oe,ve[0].width,ve[0].height);for(let Ce=0,it=ve.length;Ce<it;Ce++)if(re=ve[Ce],S.format!==Pi)if(Se!==null)if(Te){if(je)i.compressedTexSubImage2D(e.TEXTURE_2D,Ce,0,0,re.width,re.height,Se,re.data)}else i.compressedTexImage2D(e.TEXTURE_2D,Ce,oe,re.width,re.height,0,re.data);else be("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(Te){if(je)i.texSubImage2D(e.TEXTURE_2D,Ce,0,0,re.width,re.height,Se,U,re.data)}else i.texImage2D(e.TEXTURE_2D,Ce,oe,re.width,re.height,0,Se,U,re.data)}else if(S.isDataArrayTexture)if(Te){if(Ae)i.texStorage3D(e.TEXTURE_2D_ARRAY,Xe,oe,ne.width,ne.height,ne.depth);if(je)if(S.layerUpdates.size>0){let Ce=yu(ne.width,ne.height,S.format,S.type);for(let it of S.layerUpdates){let mt=ne.data.subarray(it*Ce/ne.data.BYTES_PER_ELEMENT,(it+1)*Ce/ne.data.BYTES_PER_ELEMENT);i.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,it,ne.width,ne.height,1,Se,U,mt)}S.clearLayerUpdates()}else i.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,Se,U,ne.data)}else i.texImage3D(e.TEXTURE_2D_ARRAY,0,oe,ne.width,ne.height,ne.depth,0,Se,U,ne.data);else if(S.isData3DTexture)if(Te){if(Ae)i.texStorage3D(e.TEXTURE_3D,Xe,oe,ne.width,ne.height,ne.depth);if(je)i.texSubImage3D(e.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,Se,U,ne.data)}else i.texImage3D(e.TEXTURE_3D,0,oe,ne.width,ne.height,ne.depth,0,Se,U,ne.data);else if(S.isFramebufferTexture){if(Ae)if(Te)i.texStorage2D(e.TEXTURE_2D,Xe,oe,ne.width,ne.height);else{let Ce=ne.width,it=ne.height;for(let mt=0;mt<Xe;mt++)i.texImage2D(e.TEXTURE_2D,mt,oe,Ce,it,0,Se,U,null),Ce>>=1,it>>=1}}else if(S.isHTMLTexture){if("texElementImage2D"in e){let Ce=e.canvas;if(!Ce.hasAttribute("layoutsubtree"))Ce.setAttribute("layoutsubtree","true");if(ne.parentNode!==Ce){Ce.appendChild(ne),u.add(S),Ce.onpaint=(it)=>{let mt=it.changedElements;for(let Ne of u)if(mt.includes(Ne.image))Ne.needsUpdate=!0},Ce.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,ne);else{let{RGBA:mt,RGBA:Ne,UNSIGNED_BYTE:Xt}=e;e.texElementImage2D(e.TEXTURE_2D,0,mt,Ne,Xt,ne)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(ve.length>0){if(Te&&Ae){let Ce=Gt(ve[0]);i.texStorage2D(e.TEXTURE_2D,Xe,oe,Ce.width,Ce.height)}for(let Ce=0,it=ve.length;Ce<it;Ce++)if(re=ve[Ce],Te){if(je)i.texSubImage2D(e.TEXTURE_2D,Ce,0,0,Se,U,re)}else i.texImage2D(e.TEXTURE_2D,Ce,oe,Se,U,re);S.generateMipmaps=!1}else if(Te){if(Ae){let Ce=Gt(ne);i.texStorage2D(e.TEXTURE_2D,Xe,oe,Ce.width,Ce.height)}if(je)i.texSubImage2D(e.TEXTURE_2D,0,0,0,Se,U,ne)}else i.texImage2D(e.TEXTURE_2D,0,oe,Se,U,ne);if(y(S)&&S.mipmapsAutoUpdate===!0)v(pe);if(ue.__version=ye.version,S.onUpdate)S.onUpdate(S)}P.__version=S.version}function Re(P,S,W){if(S.image.length!==6)return;let pe=he(P,S),le=S.source;i.bindTexture(e.TEXTURE_CUBE_MAP,P.__webglTexture,e.TEXTURE0+W);let ye=n.get(le);if(le.version!==ye.__version||pe===!0){i.activeTexture(e.TEXTURE0+W);let ue=ht.getPrimaries(ht.workingColorSpace),K=S.colorSpace===Gn?null:ht.getPrimaries(S.colorSpace),ne=S.colorSpace===Gn||ue===K?e.NONE:e.BROWSER_DEFAULT_WEBGL;i.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(e.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,ne);let Se=S.isCompressedTexture||S.image[0].isCompressedTexture,U=S.image[0]&&S.image[0].isDataTexture,oe=[];for(let Ne=0;Ne<6;Ne++){if(!Se&&!U)oe[Ne]=_(S.image[Ne],!0,r.maxCubemapSize);else oe[Ne]=U?S.image[Ne].image:S.image[Ne];oe[Ne]=at(S,oe[Ne])}let re=oe[0],ve=s.convert(S.format,S.colorSpace),Te=s.convert(S.type),Ae=w(S.internalFormat,ve,Te,S.normalized,S.colorSpace),je=S.isVideoTexture!==!0,Xe=ye.__version===void 0||pe===!0,Ce=le.dataReady,it=b(S,re);pt(e.TEXTURE_CUBE_MAP,S);let mt;if(S.isDepthTexture){if(Ae=M(S.format===Tn,S.type),Xe)if(je)i.texStorage2D(e.TEXTURE_CUBE_MAP,1,Ae,re.width,re.height);else for(let Ne=0;Ne<6;Ne++)i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,0,Ae,re.width,re.height,0,ve,Te,null)}else if(Se){if(je&&Xe)i.texStorage2D(e.TEXTURE_CUBE_MAP,it,Ae,re.width,re.height);for(let Ne=0;Ne<6;Ne++){mt=oe[Ne].mipmaps;for(let Xt=0;Xt<mt.length;Xt++){let Fi=mt[Xt];if(S.format!==Pi)if(ve!==null)if(je){if(Ce)i.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,Xt,0,0,Fi.width,Fi.height,ve,Fi.data)}else i.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,Xt,Ae,Fi.width,Fi.height,0,Fi.data);else be("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()");else if(je){if(Ce)i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,Xt,0,0,Fi.width,Fi.height,ve,Te,Fi.data)}else i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,Xt,Ae,Fi.width,Fi.height,0,ve,Te,Fi.data)}}}else{if(mt=S.mipmaps,je&&Xe){if(mt.length>0)it++;let Ne=Gt(oe[0]);i.texStorage2D(e.TEXTURE_CUBE_MAP,it,Ae,Ne.width,Ne.height)}for(let Ne=0;Ne<6;Ne++)if(U){if(je){if(Ce)i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,0,0,0,oe[Ne].width,oe[Ne].height,ve,Te,oe[Ne].data)}else i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,0,Ae,oe[Ne].width,oe[Ne].height,0,ve,Te,oe[Ne].data);for(let Xt=0;Xt<mt.length;Xt++){let Cr=mt[Xt].image[Ne].image;if(je){if(Ce)i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,Xt+1,0,0,Cr.width,Cr.height,ve,Te,Cr.data)}else i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,Xt+1,Ae,Cr.width,Cr.height,0,ve,Te,Cr.data)}}else{if(je){if(Ce)i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,0,0,0,ve,Te,oe[Ne])}else i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,0,Ae,ve,Te,oe[Ne]);for(let Xt=0;Xt<mt.length;Xt++){let Fi=mt[Xt];if(je){if(Ce)i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,Xt+1,0,0,ve,Te,Fi.image[Ne])}else i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,Xt+1,Ae,ve,Te,Fi.image[Ne])}}}if(y(S)&&S.mipmapsAutoUpdate===!0)v(e.TEXTURE_CUBE_MAP);if(ye.__version=le.version,S.onUpdate)S.onUpdate(S)}P.__version=S.version}function Ye(P,S,W,pe,le,ye){let ue=s.convert(W.format,W.colorSpace),K=s.convert(W.type),ne=w(W.internalFormat,ue,K,W.normalized,W.colorSpace),Se=n.get(S),U=n.get(W);if(U.__renderTarget=S,!Se.__hasExternalTextures){let oe=Math.max(1,S.width>>ye),re=Math.max(1,S.height>>ye);if(le===e.TEXTURE_3D||le===e.TEXTURE_2D_ARRAY)i.texImage3D(le,ye,ne,oe,re,S.depth,0,ue,K,null);else i.texImage2D(le,ye,ne,oe,re,0,ue,K,null)}if(i.bindFramebuffer(e.FRAMEBUFFER,P),ze(S))a.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,pe,le,U.__webglTexture,0,se(S));else if(le===e.TEXTURE_2D||le>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&le<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)e.framebufferTexture2D(e.FRAMEBUFFER,pe,le,U.__webglTexture,ye);i.bindFramebuffer(e.FRAMEBUFFER,null)}function Je(P,S,W){if(e.bindRenderbuffer(e.RENDERBUFFER,P),S.depthBuffer){let pe=S.depthTexture,le=pe&&pe.isDepthTexture?pe.type:null,ye=M(S.stencilBuffer,le),ue=S.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(ze(S))a.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,se(S),ye,S.width,S.height);else if(W)e.renderbufferStorageMultisample(e.RENDERBUFFER,se(S),ye,S.width,S.height);else e.renderbufferStorage(e.RENDERBUFFER,ye,S.width,S.height);e.framebufferRenderbuffer(e.FRAMEBUFFER,ue,e.RENDERBUFFER,P)}else{let pe=S.textures;for(let le=0;le<pe.length;le++){let ye=pe[le],ue=s.convert(ye.format,ye.colorSpace),K=s.convert(ye.type),ne=w(ye.internalFormat,ue,K,ye.normalized,ye.colorSpace);if(ze(S))a.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,se(S),ne,S.width,S.height);else if(W)e.renderbufferStorageMultisample(e.RENDERBUFFER,se(S),ne,S.width,S.height);else e.renderbufferStorage(e.RENDERBUFFER,ne,S.width,S.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function dt(P,S,W){let pe=S.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(e.FRAMEBUFFER,P),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let le=n.get(S.depthTexture);le.__renderTarget=S;let ye=pe?S.depthTexture.image[0]:S.depthTexture.image;if(!le.__webglTexture||ye.width!==S.width||ye.height!==S.height)ye.width=S.width,ye.height=S.height,S.depthTexture.needsUpdate=!0;if(pe)we(S.depthTexture,0);else Me(S.depthTexture,0);let ue=le.__webglTexture,K=se(S),ne=pe?e.TEXTURE_CUBE_MAP_POSITIVE_X+W:e.TEXTURE_2D,Se=S.depthTexture.format===Tn?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(S.depthTexture.format===Mn)if(ze(S))a.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,Se,ne,ue,0,K);else e.framebufferTexture2D(e.FRAMEBUFFER,Se,ne,ue,0);else if(S.depthTexture.format===Tn)if(ze(S))a.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,Se,ne,ue,0,K);else e.framebufferTexture2D(e.FRAMEBUFFER,Se,ne,ue,0);else throw Error("THREE.WebGLTextures: Unknown depthTexture format.")}function _t(P){let S=n.get(P),W=P.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==P.depthTexture){let pe=P.depthTexture;if(S.__depthDisposeCallback)S.__depthDisposeCallback();if(pe){let le=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,pe.removeEventListener("dispose",le)};pe.addEventListener("dispose",le),S.__depthDisposeCallback=le}S.__boundDepthTexture=pe}if(P.depthTexture&&!S.__autoAllocateDepthBuffer)if(W)for(let pe=0;pe<6;pe++)dt(S.__webglFramebuffer[pe],P,pe);else if(P.texture.mipmaps.length>0)dt(S.__webglFramebuffer[0],P,0);else dt(S.__webglFramebuffer,P,0);else if(W){S.__webglDepthbuffer=[];for(let pe=0;pe<6;pe++)if(i.bindFramebuffer(e.FRAMEBUFFER,S.__webglFramebuffer[pe]),S.__webglDepthbuffer[pe]===void 0)S.__webglDepthbuffer[pe]=e.createRenderbuffer(),Je(S.__webglDepthbuffer[pe],P,!1);else{let le=P.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,ye=S.__webglDepthbuffer[pe];e.bindRenderbuffer(e.RENDERBUFFER,ye),e.framebufferRenderbuffer(e.FRAMEBUFFER,le,e.RENDERBUFFER,ye)}}else{if(P.texture.mipmaps.length>0)i.bindFramebuffer(e.FRAMEBUFFER,S.__webglFramebuffer[0]);else i.bindFramebuffer(e.FRAMEBUFFER,S.__webglFramebuffer);if(S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=e.createRenderbuffer(),Je(S.__webglDepthbuffer,P,!1);else{let le=P.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,ye=S.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,ye),e.framebufferRenderbuffer(e.FRAMEBUFFER,le,e.RENDERBUFFER,ye)}}i.bindFramebuffer(e.FRAMEBUFFER,null)}function Lt(P,S,W){let pe=n.get(P);if(S!==void 0)Ye(pe.__webglFramebuffer,P,P.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0);if(W!==void 0)_t(P)}function R(P){let S=P.texture,W=n.get(P),pe=n.get(S);P.addEventListener("dispose",V),C(P);let le=P.textures,ye=P.isWebGLCubeRenderTarget===!0,ue=le.length>1;if(!ue){if(pe.__webglTexture===void 0)pe.__webglTexture=e.createTexture();pe.__version=S.version,o.memory.textures++}if(ye){W.__webglFramebuffer=[];for(let K=0;K<6;K++)if(S.mipmaps.length>0){W.__webglFramebuffer[K]=[];for(let ne=0;ne<S.mipmaps.length;ne++)W.__webglFramebuffer[K][ne]=e.createFramebuffer()}else W.__webglFramebuffer[K]=e.createFramebuffer()}else{if(S.mipmaps.length>0){W.__webglFramebuffer=[];for(let K=0;K<S.mipmaps.length;K++)W.__webglFramebuffer[K]=e.createFramebuffer()}else W.__webglFramebuffer=e.createFramebuffer();if(ue)for(let K=0,ne=le.length;K<ne;K++){let Se=n.get(le[K]);if(Se.__webglTexture===void 0)Se.__webglTexture=e.createTexture(),o.memory.textures++}if(P.samples>0&&ze(P)===!1){W.__webglMultisampledFramebuffer=e.createFramebuffer(),W.__webglColorRenderbuffer=[],i.bindFramebuffer(e.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let K=0;K<le.length;K++){let ne=le[K];W.__webglColorRenderbuffer[K]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,W.__webglColorRenderbuffer[K]);let Se=s.convert(ne.format,ne.colorSpace),U=s.convert(ne.type),oe=w(ne.internalFormat,Se,U,ne.normalized,ne.colorSpace,P.isXRRenderTarget===!0),re=se(P);e.renderbufferStorageMultisample(e.RENDERBUFFER,re,oe,P.width,P.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+K,e.RENDERBUFFER,W.__webglColorRenderbuffer[K])}if(e.bindRenderbuffer(e.RENDERBUFFER,null),P.depthBuffer)W.__webglDepthRenderbuffer=e.createRenderbuffer(),Je(W.__webglDepthRenderbuffer,P,!0);i.bindFramebuffer(e.FRAMEBUFFER,null)}}if(ye){i.bindTexture(e.TEXTURE_CUBE_MAP,pe.__webglTexture),pt(e.TEXTURE_CUBE_MAP,S);for(let K=0;K<6;K++)if(S.mipmaps.length>0)for(let ne=0;ne<S.mipmaps.length;ne++)Ye(W.__webglFramebuffer[K][ne],P,S,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+K,ne);else Ye(W.__webglFramebuffer[K],P,S,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+K,0);if(y(S))v(e.TEXTURE_CUBE_MAP);else if(S.mipmaps.length>0)e.texParameteri(e.TEXTURE_CUBE_MAP,e.TEXTURE_MAX_LEVEL,S.mipmaps.length-1);i.unbindTexture()}else if(ue){for(let K=0,ne=le.length;K<ne;K++){let Se=le[K],U=n.get(Se),oe=e.TEXTURE_2D;if(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)oe=P.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY;if(i.bindTexture(oe,U.__webglTexture),pt(oe,Se),Ye(W.__webglFramebuffer,P,Se,e.COLOR_ATTACHMENT0+K,oe,0),y(Se))v(oe)}i.unbindTexture()}else{let K=e.TEXTURE_2D;if(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)K=P.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY;if(i.bindTexture(K,pe.__webglTexture),pt(K,S),S.mipmaps.length>0)for(let ne=0;ne<S.mipmaps.length;ne++)Ye(W.__webglFramebuffer[ne],P,S,e.COLOR_ATTACHMENT0,K,ne);else Ye(W.__webglFramebuffer,P,S,e.COLOR_ATTACHMENT0,K,0);if(y(S))v(K);else if(S.mipmaps.length>0)e.texParameteri(K,e.TEXTURE_MAX_LEVEL,S.mipmaps.length-1);i.unbindTexture()}if(P.depthBuffer)_t(P)}function xe(P){let S=P.textures;for(let W=0,pe=S.length;W<pe;W++){let le=S[W];if(y(le)&&le.mipmapsAutoUpdate===!0){let ye=T(P),ue=n.get(le).__webglTexture;i.bindTexture(ye,ue),v(ye),i.unbindTexture()}}}let _e=[];function He(P){if(P.samples>0){if(ze(P)===!1){let{textures:S,width:W,height:pe}=P,le=e.COLOR_BUFFER_BIT,ye=P.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,ue=n.get(P),K=S.length>1;if(K)for(let Se=0;Se<S.length;Se++)i.bindFramebuffer(e.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+Se,e.RENDERBUFFER,null),i.bindFramebuffer(e.FRAMEBUFFER,ue.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+Se,e.TEXTURE_2D,null,0);if(i.bindFramebuffer(e.READ_FRAMEBUFFER,ue.__webglMultisampledFramebuffer),P.texture.mipmaps.length>0)i.bindFramebuffer(e.DRAW_FRAMEBUFFER,ue.__webglFramebuffer[0]);else i.bindFramebuffer(e.DRAW_FRAMEBUFFER,ue.__webglFramebuffer);for(let Se=0;Se<S.length;Se++){if(P.resolveDepthBuffer){if(P.depthBuffer)le|=e.DEPTH_BUFFER_BIT;if(P.stencilBuffer&&P.resolveStencilBuffer)le|=e.STENCIL_BUFFER_BIT}if(K){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,ue.__webglColorRenderbuffer[Se]);let U=n.get(S[Se]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,U,0)}if(e.blitFramebuffer(0,0,W,pe,0,0,W,pe,le,e.NEAREST),l===!0){if(_e.length=0,_e.push(e.COLOR_ATTACHMENT0+Se),P.depthBuffer&&P.storeMultisampledDepthBuffer===!1)_e.push(ye);e.invalidateFramebuffer(e.READ_FRAMEBUFFER,_e)}}if(i.bindFramebuffer(e.READ_FRAMEBUFFER,null),i.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),K)for(let Se=0;Se<S.length;Se++){i.bindFramebuffer(e.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+Se,e.RENDERBUFFER,ue.__webglColorRenderbuffer[Se]);let U=n.get(S[Se]).__webglTexture;i.bindFramebuffer(e.FRAMEBUFFER,ue.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+Se,e.TEXTURE_2D,U,0)}i.bindFramebuffer(e.DRAW_FRAMEBUFFER,ue.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&l){let S=P.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[S])}}}function se(P){return Math.min(r.maxSamples,P.samples)}function ze(P){let S=n.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function ke(P){let S=o.render.frame;if(h.get(P)!==S)h.set(P,S),P.update()}function at(P,S){let{colorSpace:W,format:pe,type:le}=P;if(P.isCompressedTexture===!0||P.isVideoTexture===!0)return S;if(W!==Xi&&W!==Gn)if(ht.getTransfer(W)===St){if(pe!==Pi||le!==gi)be("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.")}else We("WebGLTextures: Unsupported texture color space:",W);return S}function Gt(P){if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement)c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height;else if(typeof VideoFrame<"u"&&P instanceof VideoFrame)c.width=P.displayWidth,c.height=P.displayHeight;else c.width=P.width,c.height=P.height;return c}this.allocateTextureUnit=G,this.resetTextureUnits=H,this.getTextureUnits=Y,this.setTextureUnits=ae,this.setTexture2D=Me,this.setTexture2DArray=me,this.setTexture3D=Fe,this.setTextureCube=we,this.rebindTextures=Lt,this.setupRenderTarget=R,this.updateRenderTargetMipmap=xe,this.updateMultisampleRenderTarget=He,this.setupDepthRenderbuffer=_t,this.setupFrameBufferTexture=Ye,this.useMultisampledRTT=ze,this.dispose=J}function Eu(e,t){function i(n,r=Gn){let s,o=ht.getTransfer(r);if(n===gi)return e.UNSIGNED_BYTE;if(n===So)return e.UNSIGNED_SHORT_4_4_4_4;if(n===bo)return e.UNSIGNED_SHORT_5_5_5_1;if(n===Rc)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===Cc)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===wc)return e.BYTE;if(n===Ac)return e.SHORT;if(n===Lr)return e.UNSIGNED_SHORT;if(n===vo)return e.INT;if(n===Ci)return e.UNSIGNED_INT;if(n===di)return e.FLOAT;if(n===ni)return e.HALF_FLOAT;if(n===Pc)return e.ALPHA;if(n===Ic)return e.RGB;if(n===Pi)return e.RGBA;if(n===Mn)return e.DEPTH_COMPONENT;if(n===Tn)return e.DEPTH_STENCIL;if(n===To)return e.RED;if(n===Ns)return e.RED_INTEGER;if(n===En)return e.RG;if(n===Eo)return e.RG_INTEGER;if(n===wo)return e.RGBA_INTEGER;if(n===Ao||n===Ro||n===Co||n===Po)if(o===St)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Ao)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ro)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Co)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Po)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Ao)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ro)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Co)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Po)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ua||n===Ba||n===Oa||n===Ha)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Ua)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ba)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Oa)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ha)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ga||n===za||n===ka||n===Va||n===Wa||n===Fs||n===Xa)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Ga||n===za)return o===St?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===ka)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===Va)return s.COMPRESSED_R11_EAC;if(n===Wa)return s.COMPRESSED_SIGNED_R11_EAC;if(n===Fs)return s.COMPRESSED_RG11_EAC;if(n===Xa)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Ya||n===qa||n===Za||n===Ka||n===Ja||n===ja||n===$a||n===Qa||n===el||n===tl||n===il||n===nl||n===rl||n===sl)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Ya)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===qa)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Za)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ka)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ja)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ja)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===$a)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Qa)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===el)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===tl)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===il)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===nl)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===rl)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===sl)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ol||n===al||n===ll)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===ol)return o===St?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===al)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ll)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===cl||n===hl||n===Us||n===fl)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===cl)return s.COMPRESSED_RED_RGTC1_EXT;if(n===hl)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Us)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===fl)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;if(n===tr)return e.UNSIGNED_INT_24_8;return e[n]!==void 0?e[n]:null}return{convert:i}}var hS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,fS=`
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

}`;class wu{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new ta(e.texture);if(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)this.depthNear=e.depthNear,this.depthFar=e.depthFar;this.texture=i}}getMesh(e){if(this.texture!==null){if(this.mesh===null){let t=e.cameras[0].viewport,i=new si({vertexShader:hS,fragmentShader:fS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ie(new Ht(20,20),i)}}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Au extends Ii{constructor(e,t){super();let i=this,n=null,r=1,s=null,o="local-floor",a=1,l=null,c=null,h=null,u=null,f=null,m=null,g=typeof XRWebGLBinding<"u",x=new wu,d={},p=t.getContextAttributes(),_=null,y=null,v=[],T=[],w=new X,M=null,b=null,C=new ti;C.viewport=new bt;let F=new ti;F.viewport=new bt;let D=[C,F],V=new Uh,ee=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let Q=v[G];if(Q===void 0)Q=new Ho,v[G]=Q;return Q.getTargetRaySpace()},this.getControllerGrip=function(G){let Q=v[G];if(Q===void 0)Q=new Ho,v[G]=Q;return Q.getGripSpace()},this.getHand=function(G){let Q=v[G];if(Q===void 0)Q=new Ho,v[G]=Q;return Q.getHandSpace()};function J(G){let Q=T.indexOf(G.inputSource);if(Q===-1)return;let Me=v[Q];if(Me!==void 0)Me.update(G.inputSource,G.frame,l||s),Me.dispatchEvent({type:G.type,data:G.inputSource})}function L(){n.removeEventListener("select",J),n.removeEventListener("selectstart",J),n.removeEventListener("selectend",J),n.removeEventListener("squeeze",J),n.removeEventListener("squeezestart",J),n.removeEventListener("squeezeend",J),n.removeEventListener("end",L),n.removeEventListener("inputsourceschange",N);for(let G=0;G<v.length;G++){let Q=T[G];if(Q===null)continue;T[G]=null,v[G].disconnect(Q)}ee=null,I=null,x.reset();for(let G in d)delete d[G];if(e.setRenderTarget(_),f=null,u=null,h=null,n=null,y=null,ae.stop(),i.isPresenting=!1,e.setPixelRatio(M),e.setSize(w.width,w.height,!1),b!==null){let G=b.camera;G.fov=b.fov,G.zoom=b.zoom,G.updateProjectionMatrix(),b=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){if(r=G,i.isPresenting===!0)be("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){if(o=G,i.isPresenting===!0)be("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||s},this.setReferenceSpace=function(G){l=G},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){if(h===null&&g)h=new XRWebGLBinding(n,t);return h},this.getFrame=function(){return m},this.getSession=function(){return n},this.setSession=async function(G){if(n=G,n!==null){if(_=e.getRenderTarget(),n.addEventListener("select",J),n.addEventListener("selectstart",J),n.addEventListener("selectend",J),n.addEventListener("squeeze",J),n.addEventListener("squeezestart",J),n.addEventListener("squeezeend",J),n.addEventListener("end",L),n.addEventListener("inputsourceschange",N),p.xrCompatible!==!0)await t.makeXRCompatible();if(M=e.getPixelRatio(),e.getSize(w),!(g&&("createProjectionLayer"in XRWebGLBinding.prototype))){let Me={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(n,t,Me),n.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new ei(f.framebufferWidth,f.framebufferHeight,{format:Pi,type:gi,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let Me=null,me=null,Fe=null;if(p.depth)Fe=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Me=p.stencil?Tn:Mn,me=p.stencil?tr:Ci;let we={colorFormat:t.RGBA8,depthFormat:Fe,scaleFactor:r};h=this.getBinding(),u=h.createProjectionLayer(we),n.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),y=new ei(u.textureWidth,u.textureHeight,{format:Pi,type:gi,depthTexture:new Cn(u.textureWidth,u.textureHeight,me,void 0,void 0,void 0,void 0,void 0,void 0,Me),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(a),l=null,s=await n.requestReferenceSpace(o),ae.setContext(n),ae.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function N(G){for(let Q=0;Q<G.removed.length;Q++){let Me=G.removed[Q],me=T.indexOf(Me);if(me>=0)T[me]=null,v[me].disconnect(Me)}for(let Q=0;Q<G.added.length;Q++){let Me=G.added[Q],me=T.indexOf(Me);if(me===-1){for(let we=0;we<v.length;we++)if(we>=T.length){T.push(Me),me=we;break}else if(T[we]===null){T[we]=Me,me=we;break}if(me===-1)break}let Fe=v[me];if(Fe)Fe.connect(Me)}}function j(G,Q){if(Q===null)G.matrixWorld.copy(G.matrix);else G.matrixWorld.multiplyMatrices(Q.matrixWorld,G.matrix);G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(n===null)return;let{near:Q,far:Me}=G;if(x.texture!==null){if(x.depthNear>0)Q=x.depthNear;if(x.depthFar>0)Me=x.depthFar}if(V.near=F.near=C.near=Q,V.far=F.far=C.far=Me,ee!==V.near||I!==V.far)n.updateRenderState({depthNear:V.near,depthFar:V.far}),ee=V.near,I=V.far;V.layers.mask=G.layers.mask|6,C.layers.mask=V.layers.mask&-5,F.layers.mask=V.layers.mask&-3;let me=G.parent,Fe=V.cameras;j(V,me);for(let we=0;we<Fe.length;we++)j(Fe[we],me);if(V.projectionMatrix.copy(C.projectionMatrix),V.projectionMatrixInverse.copy(C.projectionMatrixInverse),b===null&&G.isPerspectiveCamera)b={camera:G,fov:G.fov,zoom:G.zoom};z(G,V,me)};function z(G,Q,Me){if(Me===null)G.matrix.copy(Q.matrixWorld);else G.matrix.copy(Me.matrixWorld),G.matrix.invert(),G.matrix.multiply(Q.matrixWorld);if(G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy(Q.projectionMatrix),G.projectionMatrixInverse.copy(Q.projectionMatrixInverse),G.isPerspectiveCamera)G.fov=Fr*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1}this.getCamera=function(){return V},this.getFoveation=function(){if(u===null&&f===null)return;return a},this.setFoveation=function(G){if(a=G,u!==null)u.fixedFoveation=G;if(f!==null&&f.fixedFoveation!==void 0)f.fixedFoveation=G},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(V)},this.getCameraTexture=function(G){return d[G]};let H=null;function Y(G,Q){if(c=Q.getViewerPose(l||s),m=Q,c!==null){let Me=c.views;if(f!==null)e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y);let me=!1;if(Me.length!==V.cameras.length)V.cameras.length=0,me=!0;for(let Ue=0;Ue<Me.length;Ue++){let Oe=Me[Ue],pt=null;if(f!==null)pt=f.getViewport(Oe);else{let de=h.getViewSubImage(u,Oe);if(pt=de.viewport,Ue===0)e.setRenderTargetTextures(y,de.colorTexture,de.depthStencilTexture),e.setRenderTarget(y)}let he=D[Ue];if(he===void 0)he=new ti,he.layers.enable(Ue),he.viewport=new bt,D[Ue]=he;if(he.matrix.fromArray(Oe.transform.matrix),he.matrix.decompose(he.position,he.quaternion,he.scale),he.projectionMatrix.fromArray(Oe.projectionMatrix),he.projectionMatrixInverse.copy(he.projectionMatrix).invert(),he.viewport.set(pt.x,pt.y,pt.width,pt.height),Ue===0)V.matrix.copy(he.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale);if(me===!0)V.cameras.push(he)}let Fe=n.enabledFeatures;if(Fe&&Fe.includes("depth-sensing")&&n.depthUsage=="gpu-optimized"&&g){h=i.getBinding();let Ue=h.getDepthInformation(Me[0]);if(Ue&&Ue.isValid&&Ue.texture)x.init(Ue,n.renderState)}if(Fe&&Fe.includes("camera-access")&&g){e.state.unbindTexture(),h=i.getBinding();for(let Ue=0;Ue<Me.length;Ue++){let Oe=Me[Ue].camera;if(Oe){let pt=d[Oe];if(!pt)pt=new ta,d[Oe]=pt;let he=h.getCameraImage(Oe);pt.sourceTexture=he}}}}for(let Me=0;Me<v.length;Me++){let me=T[Me],Fe=v[Me];if(me!==null&&Fe!==void 0)Fe.update(me,Q,l||s)}if(H)H(G,Q);if(Q.detectedPlanes)i.dispatchEvent({type:"planesdetected",data:Q});m=null}let ae=new Hh;ae.setAnimationLoop(Y),this.setAnimationLoop=function(G){H=G},this.dispose=function(){}}}var uS=new Be,Qx=new st;Qx.set(-1,0,0,0,1,0,0,0,1);function e_(e,t){function i(d,p){if(d.matrixAutoUpdate===!0)d.updateMatrix();p.value.copy(d.matrix)}function n(d,p){if(p.color.getRGB(d.fogColor.value,Ah(e)),p.isFog)d.fogNear.value=p.near,d.fogFar.value=p.far;else if(p.isFogExp2)d.fogDensity.value=p.density}function r(d,p,_,y,v){if(p.isNodeMaterial)p.uniformsNeedUpdate=!1;else if(p.isMeshBasicMaterial)s(d,p);else if(p.isMeshLambertMaterial){if(s(d,p),p.envMap)d.envMapIntensity.value=p.envMapIntensity}else if(p.isMeshToonMaterial)s(d,p),u(d,p);else if(p.isMeshPhongMaterial){if(s(d,p),h(d,p),p.envMap)d.envMapIntensity.value=p.envMapIntensity}else if(p.isMeshStandardMaterial){if(s(d,p),f(d,p),p.isMeshPhysicalMaterial)m(d,p,v)}else if(p.isMeshMatcapMaterial)s(d,p),g(d,p);else if(p.isMeshDepthMaterial)s(d,p);else if(p.isMeshDistanceMaterial)s(d,p),x(d,p);else if(p.isMeshNormalMaterial)s(d,p);else if(p.isLineBasicMaterial){if(o(d,p),p.isLineDashedMaterial)a(d,p)}else if(p.isPointsMaterial)l(d,p,_,y);else if(p.isSpriteMaterial)c(d,p);else if(p.isShadowMaterial)d.color.value.copy(p.color),d.opacity.value=p.opacity;else if(p.isShaderMaterial)p.uniformsNeedUpdate=!1}function s(d,p){if(d.opacity.value=p.opacity,p.color)d.diffuse.value.copy(p.color);if(p.emissive)d.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity);if(p.map)d.map.value=p.map,i(p.map,d.mapTransform);if(p.alphaMap)d.alphaMap.value=p.alphaMap,i(p.alphaMap,d.alphaMapTransform);if(p.bumpMap){if(d.bumpMap.value=p.bumpMap,i(p.bumpMap,d.bumpMapTransform),d.bumpScale.value=p.bumpScale,p.side===Kt)d.bumpScale.value*=-1}if(p.normalMap){if(d.normalMap.value=p.normalMap,i(p.normalMap,d.normalMapTransform),d.normalScale.value.copy(p.normalScale),p.side===Kt)d.normalScale.value.negate()}if(p.displacementMap)d.displacementMap.value=p.displacementMap,i(p.displacementMap,d.displacementMapTransform),d.displacementScale.value=p.displacementScale,d.displacementBias.value=p.displacementBias;if(p.emissiveMap)d.emissiveMap.value=p.emissiveMap,i(p.emissiveMap,d.emissiveMapTransform);if(p.specularMap)d.specularMap.value=p.specularMap,i(p.specularMap,d.specularMapTransform);if(p.alphaTest>0)d.alphaTest.value=p.alphaTest;let _=t.get(p),{envMap:y,envMapRotation:v}=_;if(y){if(d.envMap.value=y,d.envMapRotation.value.setFromMatrix4(uS.makeRotationFromEuler(v)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1)d.envMapRotation.value.premultiply(Qx);d.reflectivity.value=p.reflectivity,d.ior.value=p.ior,d.refractionRatio.value=p.refractionRatio}if(p.lightMap)d.lightMap.value=p.lightMap,d.lightMapIntensity.value=p.lightMapIntensity,i(p.lightMap,d.lightMapTransform);if(p.aoMap)d.aoMap.value=p.aoMap,d.aoMapIntensity.value=p.aoMapIntensity,i(p.aoMap,d.aoMapTransform)}function o(d,p){if(d.diffuse.value.copy(p.color),d.opacity.value=p.opacity,p.map)d.map.value=p.map,i(p.map,d.mapTransform)}function a(d,p){d.dashSize.value=p.dashSize,d.totalSize.value=p.dashSize+p.gapSize,d.scale.value=p.scale}function l(d,p,_,y){if(d.diffuse.value.copy(p.color),d.opacity.value=p.opacity,d.size.value=p.size*_,d.scale.value=y*0.5,p.map)d.map.value=p.map,i(p.map,d.uvTransform);if(p.alphaMap)d.alphaMap.value=p.alphaMap,i(p.alphaMap,d.alphaMapTransform);if(p.alphaTest>0)d.alphaTest.value=p.alphaTest}function c(d,p){if(d.diffuse.value.copy(p.color),d.opacity.value=p.opacity,d.rotation.value=p.rotation,p.map)d.map.value=p.map,i(p.map,d.mapTransform);if(p.alphaMap)d.alphaMap.value=p.alphaMap,i(p.alphaMap,d.alphaMapTransform);if(p.alphaTest>0)d.alphaTest.value=p.alphaTest}function h(d,p){d.specular.value.copy(p.specular),d.shininess.value=Math.max(p.shininess,0.0001)}function u(d,p){if(p.gradientMap)d.gradientMap.value=p.gradientMap}function f(d,p){if(d.metalness.value=p.metalness,p.metalnessMap)d.metalnessMap.value=p.metalnessMap,i(p.metalnessMap,d.metalnessMapTransform);if(d.roughness.value=p.roughness,p.roughnessMap)d.roughnessMap.value=p.roughnessMap,i(p.roughnessMap,d.roughnessMapTransform);if(p.envMap)d.envMapIntensity.value=p.envMapIntensity}function m(d,p,_){if(d.ior.value=p.ior,p.diffuseRoughness>0){if(d.diffuseRoughness.value=p.diffuseRoughness,p.diffuseRoughnessMap)d.diffuseRoughnessMap.value=p.diffuseRoughnessMap,i(p.diffuseRoughnessMap,d.diffuseRoughnessMapTransform)}if(p.sheen>0){if(d.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),d.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap)d.sheenColorMap.value=p.sheenColorMap,i(p.sheenColorMap,d.sheenColorMapTransform);if(p.sheenRoughnessMap)d.sheenRoughnessMap.value=p.sheenRoughnessMap,i(p.sheenRoughnessMap,d.sheenRoughnessMapTransform)}if(p.clearcoat>0){if(d.clearcoat.value=p.clearcoat,d.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap)d.clearcoatMap.value=p.clearcoatMap,i(p.clearcoatMap,d.clearcoatMapTransform);if(p.clearcoatRoughnessMap)d.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,i(p.clearcoatRoughnessMap,d.clearcoatRoughnessMapTransform);if(p.clearcoatNormalMap){if(d.clearcoatNormalMap.value=p.clearcoatNormalMap,i(p.clearcoatNormalMap,d.clearcoatNormalMapTransform),d.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Kt)d.clearcoatNormalScale.value.negate()}}if(p.dispersion>0)d.dispersion.value=p.dispersion;if(p.retroreflectivity>0)d.retroreflectivity.value=p.retroreflectivity;if(p.iridescence>0){if(d.iridescence.value=p.iridescence,d.iridescenceIOR.value=p.iridescenceIOR,d.iridescenceThicknessMinimum.value=p.iridescenceThicknessMinimum,d.iridescenceThicknessMaximum.value=p.iridescenceThicknessMaximum,p.iridescenceMap)d.iridescenceMap.value=p.iridescenceMap,i(p.iridescenceMap,d.iridescenceMapTransform);if(p.iridescenceThicknessMap)d.iridescenceThicknessMap.value=p.iridescenceThicknessMap,i(p.iridescenceThicknessMap,d.iridescenceThicknessMapTransform)}if(p.transmission>0){if(d.transmission.value=p.transmission,d.transmissionSamplerMap.value=_.texture,d.transmissionSamplerSize.value.set(_.width,_.height),p.transmissionMap)d.transmissionMap.value=p.transmissionMap,i(p.transmissionMap,d.transmissionMapTransform);if(d.thickness.value=p.thickness,p.thicknessMap)d.thicknessMap.value=p.thicknessMap,i(p.thicknessMap,d.thicknessMapTransform);d.attenuationDistance.value=p.attenuationDistance,d.attenuationColor.value.copy(p.attenuationColor)}if(p.anisotropy>0){if(d.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap)d.anisotropyMap.value=p.anisotropyMap,i(p.anisotropyMap,d.anisotropyMapTransform)}if(d.specularIntensity.value=p.specularIntensity,d.specularColor.value.copy(p.specularColor),p.specularColorMap)d.specularColorMap.value=p.specularColorMap,i(p.specularColorMap,d.specularColorMapTransform);if(p.specularIntensityMap)d.specularIntensityMap.value=p.specularIntensityMap,i(p.specularIntensityMap,d.specularIntensityMapTransform)}function g(d,p){if(p.matcap)d.matcap.value=p.matcap}function x(d,p){let _=t.get(p).light;d.referencePosition.value.setFromMatrixPosition(_.matrixWorld),d.nearDistance.value=_.shadow.camera.near,d.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function t_(e,t,i,n){let r={},s={};function o(_,y){let v=y.program;n.uniformBlockBinding(_,v,r[_.id])}function a(_,y){let v=r[_.id];if(v===void 0)g(_),v=l(_),r[_.id]=v,_.addEventListener("dispose",d);let T=y.program;n.updateUBOMapping(_,T);let w=t.render.frame;if(s[_.id]!==w)c(_),s[_.id]=w}function l(_){let y=e.createBuffer(),{__size:v,usage:T}=_;return e.bindBuffer(e.UNIFORM_BUFFER,y),e.bufferData(e.UNIFORM_BUFFER,v,T),e.bindBuffer(e.UNIFORM_BUFFER,null),y}function c(_){let y=r[_.id],{uniforms:v,__cache:T}=_;e.bindBuffer(e.UNIFORM_BUFFER,y);for(let w=0,M=v.length;w<M;w++){let b=v[w];if(Array.isArray(b))for(let C=0,F=b.length;C<F;C++)h(b[C],w,C,T);else h(b,w,0,T)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function h(_,y,v,T){if(f(_,y,v,T)===!0){let{__offset:w,value:M}=_;if(Array.isArray(M)){let b=0;for(let C=0;C<M.length;C++){let F=M[C],D=x(F,!0);u(F,_.__data,b),b+=D.storage/Float32Array.BYTES_PER_ELEMENT}}else u(M,_.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,w,_.__data)}}function u(_,y,v){if(typeof _==="number"||typeof _==="boolean")y[v]=_;else if(_.isMatrix3)y[v]=_.elements[0],y[v+1]=_.elements[1],y[v+2]=_.elements[2],y[v+3]=0,y[v+4]=_.elements[3],y[v+5]=_.elements[4],y[v+6]=_.elements[5],y[v+7]=0,y[v+8]=_.elements[6],y[v+9]=_.elements[7],y[v+10]=_.elements[8],y[v+11]=0;else if(ArrayBuffer.isView(_))y.set(_.subarray(0,y.length-v),v);else _.toArray(y,v)}function f(_,y,v,T){let w=_.value,M=y+"_"+v;if(Array.isArray(w)){if(T[M]===void 0)T[M]=[];let b=T[M],C=!1;for(let F=0;F<w.length;F++)if(m(w[F],b,F)===!0)C=!0;return C}return m(w,T,M)}function m(_,y,v){if(y[v]===void 0){if(typeof _==="number"||typeof _==="boolean")y[v]=_;else if(ArrayBuffer.isView(_))y[v]=_.slice();else y[v]=_.clone();return!0}else{let T=y[v];if(typeof _==="number"||typeof _==="boolean"){if(T!==_)return y[v]=_,!0}else if(ArrayBuffer.isView(_))return!0;else if(T.equals(_)===!1)return T.copy(_),!0}return!1}function g(_){let y=_.uniforms,v=0,T=16;for(let M=0,b=y.length;M<b;M++){let C=Array.isArray(y[M])?y[M]:[y[M]];for(let F=0,D=C.length;F<D;F++){let V=C[F],ee=Array.isArray(V.value)?V.value:[V.value],I=Array.isArray(y[M])||Array.isArray(V.value),J=v;for(let N=0,j=ee.length;N<j;N++){let z=ee[N],H=x(z,I),Y=v%T,ae=Y%H.boundary,G=Y+ae;if(v+=ae,G!==0&&T-G<H.storage)v+=T-G;if(N===0)J=v;v+=H.storage}let L=V.type==="int"?Int32Array:V.type==="uint"?Uint32Array:Float32Array;V.__data=new L((v-J)/Float32Array.BYTES_PER_ELEMENT),V.__offset=J}}let w=v%T;if(w>0)v+=T-w;return _.__size=v,_.__cache={},this}function x(_,y){let v={boundary:0,storage:0};if(typeof _==="number"||typeof _==="boolean")v.boundary=4,v.storage=4;else if(_.isVector2)v.boundary=8,v.storage=8;else if(_.isVector3||_.isColor)v.boundary=16,v.storage=12;else if(_.isVector4)v.boundary=16,v.storage=16;else if(_.isMatrix3)v.boundary=16,v.storage=48;else if(_.isMatrix4)v.boundary=16,v.storage=64;else if(_.isTexture)be("WebGLRenderer: Texture samplers can not be part of an uniforms group.");else if(ArrayBuffer.isView(_))v.boundary=16,v.storage=_.byteLength;else be("WebGLRenderer: Unsupported uniform value type.",_);if(y===!0)v.boundary=16,v.storage=Math.ceil(v.storage/16)*16;return v}function d(_){let y=_.target;y.removeEventListener("dispose",d),e.deleteBuffer(r[y.id]),delete r[y.id],delete s[y.id]}function p(){for(let _ in r)e.deleteBuffer(r[_]);r={},s={}}return{bind:o,update:a,dispose:p}}var dS=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),vr=null;function i_(){if(vr===null)vr=new ar(dS,16,16,En,ni),vr.name="DFG_LUT",vr.minFilter=Yt,vr.magFilter=Yt,vr.wrapS=Ri,vr.wrapT=Ri,vr.generateMipmaps=!1,vr.needsUpdate=!0;return vr}class Wh{constructor(e={}){let{canvas:t=bf(),context:i=null,depth:n=!0,stencil:r=!1,alpha:s=!1,antialias:o=!1,premultipliedAlpha:a=!0,preserveDrawingBuffer:l=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:u=!1,outputBufferType:f=gi}=e;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=s;let g=f,x=new Set([wo,Eo,Ns]),d=new Set([gi,Ci,Lr,tr,So,bo]),p=new Uint32Array(4),_=new Int32Array(4),y={textures:[],min:[],max:[],resolution:[]},v=null,T=null,w=[],M=[],b=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=bn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let C=this,F=!1,D=null,V=null,ee=null,I=null;this._outputColorSpace=yt;let J=0,L=0,N=null,j=-1,z=null,H=new bt,Y=new bt,ae=null,G=new fe(0),Q=0,{width:Me,height:me}=t,Fe=1,we=null,ut=null,Ue=new bt(0,0,Me,me),Oe=new bt(0,0,Me,me),pt=!1,he=new Wn,de=new Qo,ge=!1,Le=!1,Re=new Be,Ye=new A,Je=new bt,dt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},_t=!1;function Lt(){return N===null?Fe:1}let R=i;function xe(E,O){return t.getContext(E,O)}let _e,He,se,ze,ke,at,Gt,P,S,W,pe,le,ye,ue,K,ne,Se,U,oe,re,ve,Te,Ae;try{let E={alpha:!0,depth:n,stencil:r,antialias:o,premultipliedAlpha:a,preserveDrawingBuffer:l,powerPreference:c,failIfMajorPerformanceCaveat:h};if("setAttribute"in t)t.setAttribute("data-engine",`three.js r${Ta}`);if(t.addEventListener("webglcontextlost",Ce,!1),t.addEventListener("webglcontextrestored",it,!1),t.addEventListener("webglcontextcreationerror",mt,!1),R===null){if(R=xe("webgl2",E),R===null)if(xe("webgl2"))throw Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.");else throw Error("THREE.WebGLRenderer: Error creating WebGL context.")}je()}catch(E){throw t.removeEventListener("webglcontextlost",Ce,!1),t.removeEventListener("webglcontextrestored",it,!1),t.removeEventListener("webglcontextcreationerror",mt,!1),We("WebGLRenderer: "+E.message),E}function je(){if(_e=new cx(R),_e.init(),ve=new Eu(R,_e),He=new ex(R,_e,e,ve),se=new jx(R,_e),He.reversedDepthBuffer&&u)se.buffers.depth.setReversed(!0);V=R.createFramebuffer(),ee=R.createFramebuffer(),I=R.createFramebuffer(),ze=new ux(R),ke=new Gx,at=new $x(R,_e,se,ke,He,ve,ze),Gt=new lx(C),P=new gm(R),Te=new $g(R,P),S=new hx(R,P,ze,Te),W=new px(R,S,P,Te,ze),U=new dx(R,He,at),K=new tx(ke),pe=new Hx(C,Gt,_e,He,Te,K),le=new e_(C,ke),ye=new Vx,ue=new Yx(_e),Se=new jg(C,Gt,se,W,m,a),ne=new Jx(C,W,He),Ae=new t_(R,ze,He,se),oe=new Qg(R,_e,ze),re=new fx(R,_e,ze),ze.programs=pe.programs,C.capabilities=He,C.extensions=_e,C.properties=ke,C.renderLists=ye,C.shadowMap=ne,C.state=se,C.info=ze}if(g!==gi)b=new mx(g,t.width,t.height,o,n,r);let Xe=new Au(C,R);this.xr=Xe,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){let E=_e.get("WEBGL_lose_context");if(E)E.loseContext()},this.forceContextRestore=function(){let E=_e.get("WEBGL_lose_context");if(E)E.restoreContext()},this.getPixelRatio=function(){return Fe},this.setPixelRatio=function(E){if(E===void 0)return;Fe=E,this.setSize(Me,me,!1)},this.getSize=function(E){return E.set(Me,me)},this.setSize=function(E,O,te=!0){if(Xe.isPresenting){be("WebGLRenderer: Can't change size while VR device is presenting.");return}if(Me=E,me=O,t.width=Math.floor(E*Fe),t.height=Math.floor(O*Fe),te===!0)t.style.width=E+"px",t.style.height=O+"px";if(b!==null)b.setSize(t.width,t.height);this.setViewport(0,0,E,O)},this.getDrawingBufferSize=function(E){return E.set(Me*Fe,me*Fe).floor()},this.setDrawingBufferSize=function(E,O,te){Me=E,me=O,Fe=te,t.width=Math.floor(E*te),t.height=Math.floor(O*te),this.setViewport(0,0,E,O)},this.setEffects=function(E){if(g===gi){We("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let O=0;O<E.length;O++)if(E[O].isOutputPass===!0){be("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}b.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(H)},this.getViewport=function(E){return E.copy(Ue)},this.setViewport=function(E,O,te,q){if(E.isVector4)Ue.set(E.x,E.y,E.z,E.w);else Ue.set(E,O,te,q);se.viewport(H.copy(Ue).multiplyScalar(Lt()).round())},this.getScissor=function(E){return E.copy(Oe)},this.setScissor=function(E,O,te,q){if(E.isVector4)Oe.set(E.x,E.y,E.z,E.w);else Oe.set(E,O,te,q);se.scissor(Y.copy(Oe).multiplyScalar(Lt()).round())},this.getScissorTest=function(){return pt},this.setScissorTest=function(E){se.setScissorTest(pt=E)},this.setOpaqueSort=function(E){we=E},this.setTransparentSort=function(E){ut=E},this.getClearColor=function(E){return E.copy(Se.getClearColor())},this.setClearColor=function(){Se.setClearColor(...arguments)},this.getClearAlpha=function(){return Se.getClearAlpha()},this.setClearAlpha=function(){Se.setClearAlpha(...arguments)},this.clear=function(E=!0,O=!0,te=!0){let q=0;if(E){let Z=!1;if(N!==null){let Pe=N.texture.format;Z=x.has(Pe)}if(Z){let Pe=N.texture.type,$e=d.has(Pe),Ie=Se.getClearColor(),Ge=Se.getClearAlpha(),{r:nt,g:gt,b:At}=Ie;if($e)p[0]=nt,p[1]=gt,p[2]=At,p[3]=Ge,R.clearBufferuiv(R.COLOR,0,p);else _[0]=nt,_[1]=gt,_[2]=At,_[3]=Ge,R.clearBufferiv(R.COLOR,0,_)}else q|=R.COLOR_BUFFER_BIT}if(O)q|=R.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0);if(te)q|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295);if(q!==0)R.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(E){E.setRenderer(this),D=E},this.dispose=function(){t.removeEventListener("webglcontextlost",Ce,!1),t.removeEventListener("webglcontextrestored",it,!1),t.removeEventListener("webglcontextcreationerror",mt,!1),Se.dispose(),ye.dispose(),ue.dispose(),at.dispose(),ke.dispose(),Gt.dispose(),W.dispose(),S.dispose(),Te.dispose(),Ae.dispose(),pe.dispose(),Xe.dispose(),Xe.removeEventListener("sessionstart",fd),Xe.removeEventListener("sessionend",ud),Rs.stop()};function Ce(E){E.preventDefault(),Hs("WebGLRenderer: Context Lost."),F=!0}function it(){Hs("WebGLRenderer: Context Restored."),F=!1;let E=ze.autoReset,O=ne.enabled,te=ne.autoUpdate,q=ne.needsUpdate,Z=ne.type;je(),ze.autoReset=E,ne.enabled=O,ne.autoUpdate=te,ne.needsUpdate=q,ne.type=Z}function mt(E){We("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Ne(E){let O=E.target;O.removeEventListener("dispose",Ne),Xt(O)}function Xt(E){Fi(E),ke.remove(E)}function Fi(E){let O=ke.get(E).programs;if(O!==void 0){if(O.forEach(function(te){pe.releaseProgram(te)}),E.isShaderMaterial)pe.releaseShaderCache(E)}}this.renderBufferDirect=function(E,O,te,q,Z,Pe){if(O===null)O=dt;let $e=Z.isMesh&&Z.matrixWorld.determinantAffine()<0,Ie=yy(E,O,te,q,Z);se.setMaterial(q,$e);let Ge=te.index,nt=1;if(q.wireframe===!0){if(Ge=S.getWireframeAttribute(te),Ge===void 0)return;nt=2}let gt=te.drawRange,At=te.attributes.position,Qe=gt.start*nt,Rt=(gt.start+gt.count)*nt;if(Pe!==null)Qe=Math.max(Qe,Pe.start*nt),Rt=Math.min(Rt,(Pe.start+Pe.count)*nt);if(Ge!==null)Qe=Math.max(Qe,0),Rt=Math.min(Rt,Ge.count);else if(At!==void 0&&At!==null)Qe=Math.max(Qe,0),Rt=Math.min(Rt,At.count);let vi=Rt-Qe;if(vi<0||vi===1/0)return;Te.setup(Z,q,Ie,te,Ge);let Qt,Zt=oe;if(Ge!==null)Qt=P.get(Ge),Zt=re,Zt.setIndex(Qt);if(Z.isMesh)if(q.wireframe===!0)se.setLineWidth(q.wireframeLinewidth*Lt()),Zt.setMode(R.LINES);else Zt.setMode(R.TRIANGLES);else if(Z.isLine){let tn=q.linewidth;if(tn===void 0)tn=1;if(se.setLineWidth(tn*Lt()),Z.isLineSegments)Zt.setMode(R.LINES);else if(Z.isLineLoop)Zt.setMode(R.LINE_LOOP);else Zt.setMode(R.LINE_STRIP)}else if(Z.isPoints)Zt.setMode(R.POINTS);else if(Z.isSprite)Zt.setMode(R.TRIANGLES);if(Z.isBatchedMesh)if(!_e.get("WEBGL_multi_draw")){let{_multiDrawStarts:tn,_multiDrawCounts:et,_multiDrawCount:fn}=Z,Ot=Ge?P.get(Ge).bytesPerElement:1,Cs=ke.get(q).currentProgram.getUniforms();for(let nn=0;nn<fn;nn++)Cs.setValue(R,"_gl_DrawID",nn),Zt.render(tn[nn]/Ot,et[nn])}else Zt.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else if(Z.isInstancedMesh)Zt.renderInstances(Qe,vi,Z.count);else if(te.isInstancedBufferGeometry){let tn=te._maxInstanceCount!==void 0?te._maxInstanceCount:1/0,et=Math.min(te.instanceCount,tn);Zt.renderInstances(Qe,vi,et)}else Zt.render(Qe,vi)};function Cr(E,O,te,q){if(D!==null&&E.isNodeMaterial)D.setObject(q,E);if(ge===!0)K.setState(E,te,!1);if(E.transparent===!0&&E.side===Nt&&E.forceSinglePass===!1)E.side=Kt,E.needsUpdate=!0,ba(E,O,q),E.side=yn,E.needsUpdate=!0,ba(E,O,q),E.side=Nt;else ba(E,O,q)}this.compile=function(E,O,te=null){if(te===null)te=E;if(D!==null)D.renderStart(E,O,te);if(T=ue.get(te),T.init(O),M.push(T),te.traverseVisible(function(Z){if(Z.isLight&&Z.layers.test(O.layers)){if(T.pushLight(Z),Z.castShadow)T.pushShadow(Z)}}),E!==te)E.traverseVisible(function(Z){if(Z.isLight&&Z.layers.test(O.layers)){if(T.pushLight(Z),Z.castShadow)T.pushShadow(Z)}});if(T.setupLights(),D!==null)D.updateLights(T.state.lightsArray);if(Le=this.localClippingEnabled,ge=K.init(this.clippingPlanes,Le),ge===!0)K.setGlobalState(this.clippingPlanes,O);if(D!==null)ne.render(T.state.shadowsArray,te,O);let q=new Set;if(E.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;let Pe=Z.material;if(Pe)if(Array.isArray(Pe))for(let $e=0;$e<Pe.length;$e++){let Ie=Pe[$e];Cr(Ie,te,O,Z),q.add(Ie)}else Cr(Pe,te,O,Z),q.add(Pe)}),T=M.pop(),D!==null)D.renderEnd();return q},this.compileAsync=function(E,O,te=null){let q=this.compile(E,O,te);return new Promise((Z)=>{function Pe(){if(q.forEach(function($e){let Ge=ke.get($e).currentProgram;if(Ge===void 0||Ge.isReady())q.delete($e)}),q.size===0){Z(E);return}setTimeout(Pe,10)}if(_e.get("KHR_parallel_shader_compile")!==null)Pe();else setTimeout(Pe,10)})};let pf=null;function xy(E){if(pf)pf(E)}function fd(){Rs.stop()}function ud(){Rs.start()}let Rs=new Hh;if(Rs.setAnimationLoop(xy),typeof self<"u")Rs.setContext(self);this.setAnimationLoop=function(E){pf=E,Xe.setAnimationLoop(E),E===null?Rs.stop():Rs.start()},Xe.addEventListener("sessionstart",fd),Xe.addEventListener("sessionend",ud),this.render=function(E,O){if(O!==void 0&&O.isCamera!==!0){We("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(F===!0)return;if(D!==null)D.renderStart(E,O);let te=Xe.enabled===!0&&Xe.isPresenting===!0,q=b!==null&&(N===null||te)&&b.begin(C,N);if(E.matrixWorldAutoUpdate===!0)E.updateMatrixWorld();if(O.parent===null&&O.matrixWorldAutoUpdate===!0)O.updateMatrixWorld();if(Xe.enabled===!0&&Xe.isPresenting===!0&&(b===null||b.isCompositing()===!1)){if(Xe.cameraAutoUpdate===!0)Xe.updateCamera(O);O=Xe.getCamera()}if(E.isScene===!0)E.onBeforeRender(C,E,O,N);if(T=ue.get(E,M.length),T.init(O),T.state.textureUnits=at.getTextureUnits(),M.push(T),Re.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),O.isArrayCamera)de.setFromArrayCamera(O);else he.setFromProjectionMatrix(Re,Oi,O.reversedDepth);if(Le=this.localClippingEnabled,ge=K.init(this.clippingPlanes,Le),v=ye.get(E,w.length),v.init(),w.push(v),this.info.render.frame++,Xe.enabled===!0&&Xe.isPresenting===!0){let $e=C.xr.getDepthSensingMesh();if($e!==null)mf($e,O,-1/0,C.sortObjects)}if(mf(E,O,0,C.sortObjects),v.finish(),D!==null)D.updateLights(T.state.lightsArray);if(C.sortObjects===!0)v.sort(we,ut);if(_t=Xe.enabled===!1||Xe.isPresenting===!1||Xe.hasDepthSensing()===!1,_t)Se.addToRenderList(v,E);if(this.info.autoReset===!0)this.info.reset();if(ge===!0)K.beginShadows();let Z=T.state.shadowsArray;if(ne.render(Z,E,O),ge===!0)K.endShadows();if((q&&b.hasRenderPass())===!1){let $e=v.opaque,Ie=v.transmissive;if(T.setupLights(),O.isArrayCamera){let Ge=O.cameras;if(Ie.length>0)for(let nt=0,gt=Ge.length;nt<gt;nt++){let At=Ge[nt];pd($e,Ie,E,At)}if(_t)Se.render(E);for(let nt=0,gt=Ge.length;nt<gt;nt++){let At=Ge[nt];dd(v,E,At,At.viewport)}}else{if(Ie.length>0)pd($e,Ie,E,O);if(_t)Se.render(E);dd(v,E,O)}}if(N!==null&&L===0)at.updateMultisampleRenderTarget(N),at.updateRenderTargetMipmap(N);if(q)b.end(C);if(E.isScene===!0)E.onAfterRender(C,E,O);if(Te.resetDefaultState(),j=-1,z=null,M.pop(),M.length>0){if(T=M[M.length-1],at.setTextureUnits(T.state.textureUnits),ge===!0)K.setGlobalState(C.clippingPlanes,T.state.camera)}else T=null;if(w.pop(),w.length>0)v=w[w.length-1];else v=null;if(D!==null)D.renderEnd()};function mf(E,O,te,q){if(E.visible===!1)return;if(E.layers.test(O.layers)){if(E.isGroup)te=E.renderOrder;else if(E.isLOD){if(E.autoUpdate===!0)E.update(O)}else if(E.isLight){if(T.pushLight(E),E.castShadow)T.pushShadow(E)}else if(E.isSprite){let $e=O.isArrayCamera?de:he;if(!E.frustumCulled||E.intersectsFrustum($e)){if(q)Je.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Re);let Ie=W.update(E),Ge=E.material;if(Ge.visible)v.push(E,Ie,Ge,te,Je.z,null,O)}}else if(E.isMesh||E.isLine||E.isPoints){let $e=O.isArrayCamera?de:he;if(!E.frustumCulled||E.intersectsFrustum($e)){let Ie=W.update(E),Ge=E.material;if(q){if(E.boundingSphere!==void 0){if(E.boundingSphere===null)E.computeBoundingSphere();Je.copy(E.boundingSphere.center)}else{if(Ie.boundingSphere===null)Ie.computeBoundingSphere();Je.copy(Ie.boundingSphere.center)}Je.applyMatrix4(E.matrixWorld).applyMatrix4(Re)}if(Array.isArray(Ge)){let nt=Ie.groups;for(let gt=0,At=nt.length;gt<At;gt++){let Qe=nt[gt],Rt=Ge[Qe.materialIndex];if(Rt&&Rt.visible)v.push(E,Ie,Rt,te,Je.z,Qe,O)}}else if(Ge.visible)v.push(E,Ie,Ge,te,Je.z,null,O)}}}let Pe=E.children;for(let $e=0,Ie=Pe.length;$e<Ie;$e++)mf(Pe[$e],O,te,q)}function dd(E,O,te,q){let{opaque:Z,transmissive:Pe,transparent:$e}=E;if(T.setupLightsView(te),ge===!0)K.setGlobalState(C.clippingPlanes,te);if(q)se.viewport(H.copy(q));if(Z.length>0)vc(Z,O,te);if(Pe.length>0)vc(Pe,O,te);if($e.length>0)vc($e,O,te);se.buffers.depth.setTest(!0),se.buffers.depth.setMask(!0),se.buffers.color.setMask(!0),se.setPolygonOffset(!1)}function pd(E,O,te,q){if((te.isScene===!0?te.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[q.id]===void 0){let Qe=_e.has("EXT_color_buffer_half_float")||_e.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[q.id]=new ei(1,1,{generateMipmaps:!0,type:Qe?ni:gi,minFilter:Bi,samples:Math.max(4,He.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ht.workingColorSpace})}let Pe=T.state.transmissionRenderTarget[q.id],$e=q.viewport||H;Pe.setSize($e.z*C.transmissionResolutionScale,$e.w*C.transmissionResolutionScale);let Ie=C.getRenderTarget(),Ge=C.getActiveCubeFace(),nt=C.getActiveMipmapLevel();if(C.setRenderTarget(Pe),C.getClearColor(G),Q=C.getClearAlpha(),Q<1)C.setClearColor(16777215,0.5);if(C.clear(),_t)Se.render(te);let gt=C.toneMapping;C.toneMapping=bn;let At=q.viewport;if(q.viewport!==void 0)q.viewport=void 0;if(T.setupLightsView(q),ge===!0)K.setGlobalState(C.clippingPlanes,q);if(vc(E,te,q),at.updateMultisampleRenderTarget(Pe),at.updateRenderTargetMipmap(Pe),_e.has("WEBGL_multisampled_render_to_texture")===!1){let Qe=!1;for(let Rt=0,vi=O.length;Rt<vi;Rt++){let Qt=O[Rt],{object:Zt,geometry:tn,material:et,group:fn}=Qt;if(et.side===Nt&&Zt.layers.test(q.layers)){let Ot=et.side;et.side=Kt,et.needsUpdate=!0,md(Zt,te,q,tn,et,fn),et.side=Ot,et.needsUpdate=!0,Qe=!0}}if(Qe===!0)at.updateMultisampleRenderTarget(Pe),at.updateRenderTargetMipmap(Pe)}if(C.setRenderTarget(Ie,Ge,nt),C.setClearColor(G,Q),At!==void 0)q.viewport=At;C.toneMapping=gt}function vc(E,O,te){let q=O.isScene===!0?O.overrideMaterial:null;for(let Z=0,Pe=E.length;Z<Pe;Z++){let $e=E[Z],{object:Ie,geometry:Ge,group:nt}=$e,gt=$e.material;if(gt.allowOverride===!0&&q!==null)gt=q;if(Ie.layers.test(te.layers))md(Ie,O,te,Ge,gt,nt)}}function md(E,O,te,q,Z,Pe){if(D!==null&&Z.isNodeMaterial)D.setObject(E,Z);if(E.onBeforeRender(C,O,te,q,Z,Pe),E.modelViewMatrix.multiplyMatrices(te.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),Z.onBeforeRender(C,O,te,q,E,Pe),Z.transparent===!0&&Z.side===Nt&&Z.forceSinglePass===!1)Z.side=Kt,Z.needsUpdate=!0,C.renderBufferDirect(te,O,q,Z,E,Pe),Z.side=yn,Z.needsUpdate=!0,C.renderBufferDirect(te,O,q,Z,E,Pe),Z.side=Nt;else C.renderBufferDirect(te,O,q,Z,E,Pe);E.onAfterRender(C,O,te,q,Z,Pe)}function gd(E){let O=0;for(let te of E)if(te.texture!==null)O++;return O}function ba(E,O,te){if(O.isScene!==!0)O=dt;let q=ke.get(E),Z=T.state.lights,Pe=T.state.shadowsArray,$e=Z.state.version,Ie=pe.getParameters(E,Z.state,Pe,O,te,T.state.lightProbeGridArray),Ge=pe.getProgramCacheKey(Ie),nt=q.programs;q.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?O.environment:null,q.fog=O.fog;let gt=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;if(q.envMap=Gt.get(E.envMap||q.environment,gt),q.envMapRotation=q.environment!==null&&E.envMap===null?O.environmentRotation:E.envMapRotation,nt===void 0)E.addEventListener("dispose",Ne),nt=new Map,q.programs=nt,q.programVariants=new Map;let At=nt.get(Ge);if(At!==void 0){if(q.currentProgram===At&&q.lightsStateVersion===$e)return _d(E,Ie),At}else{if(Ie.uniforms=pe.getUniforms(E),D!==null&&E.isNodeMaterial)D.build(E,te,Ie);E.onBeforeCompile(Ie,C),At=pe.acquireProgram(Ie,Ge),nt.set(Ge,At),q.uniforms=Ie.uniforms}let Qe=q.uniforms;if(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)Qe.clippingPlanes=K.uniform;if(_d(E,Ie),q.needsLights=vy(E),q.lightsStateVersion=$e,q.needsLights)Qe.ambientLightColor.value=Z.state.ambient,Qe.lightProbe.value=Z.state.probe,Qe.sunLights.value=Z.state.sun,Qe.sunLightShadows.value=Z.state.sunShadow,Qe.directionalLights.value=Z.state.directional,Qe.directionalLightShadows.value=Z.state.directionalShadow,Qe.spotLights.value=Z.state.spot,Qe.spotLightShadows.value=Z.state.spotShadow,Qe.rectAreaLights.value=Z.state.rectArea,Qe.ltc_1.value=Z.state.rectAreaLTC1,Qe.ltc_2.value=Z.state.rectAreaLTC2,Qe.pointLights.value=Z.state.point,Qe.pointLightShadows.value=Z.state.pointShadow,Qe.hemisphereLights.value=Z.state.hemi,Qe.sunShadowMatrix.value=Z.state.sunShadowMatrix,Qe.sunShadowCascade.value=Z.state.sunShadowCascade,Qe.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,Qe.spotLightMatrix.value=Z.state.spotLightMatrix,Qe.spotLightMap.value=Z.state.spotLightMap,Qe.pointShadowMatrix.value=Z.state.pointShadowMatrix;return q.numLightProbeGrids=gd(T.state.lightProbeGridArray),q.currentProgram=At,q.uniformsList=null,At}function _y(E,O,te,q,Z){let Pe=ke.get(E),$e=Pe.currentProgram.id+","+q+","+Z,Ie=Pe.programVariants.get($e);if(Ie===void 0)Ie=ba(E,O,te),Pe.programVariants.set($e,Ie);else Pe.currentProgram=Ie,Pe.uniformsList=null,Pe.outputColorSpace=q,Pe.toneMapping=Z;return Ie}function xd(E){if(E.uniformsList===null){let O=E.currentProgram.getUniforms();E.uniformsList=lo.seqWithValue(O.seq,E.uniforms)}return E.uniformsList}function _d(E,O){let te=ke.get(E);te.outputColorSpace=O.outputColorSpace,te.batching=O.batching,te.batchingColor=O.batchingColor,te.instancing=O.instancing,te.instancingColor=O.instancingColor,te.instancingMorph=O.instancingMorph,te.skinning=O.skinning,te.morphTargets=O.morphTargets,te.morphNormals=O.morphNormals,te.morphColors=O.morphColors,te.morphTargetsCount=O.morphTargetsCount,te.numClippingPlanes=O.numClippingPlanes,te.numIntersection=O.numClipIntersection,te.vertexAlphas=O.vertexAlphas,te.vertexTangents=O.vertexTangents,te.toneMapping=O.toneMapping}function yy(E,O,te,q,Z){if(O.isScene!==!0)O=dt;at.resetTextureUnits();let Pe=O.fog,$e=q.isMeshStandardMaterial||q.isMeshLambertMaterial||q.isMeshPhongMaterial?O.environment:null,Ie=N===null?C.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:ht.workingColorSpace,Ge=q.isMeshStandardMaterial||q.isMeshLambertMaterial&&!q.envMap||q.isMeshPhongMaterial&&!q.envMap,nt=Gt.get(q.envMap||$e,Ge),gt=q.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,At=!!te.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Qe=!!te.morphAttributes.position,Rt=!!te.morphAttributes.normal,vi=!!te.morphAttributes.color,Qt=bn;if(q.toneMapped){if(N===null||N.isXRRenderTarget===!0)Qt=C.toneMapping}let Zt=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,tn=Zt!==void 0?Zt.length:0,et=ke.get(q),fn=T.state.lights;if(ge===!0){if(Le===!0||E!==z){let li=E===z&&q.id===j;K.setState(q,E,li)}}let Ot=!1,Cs=!1;if(q.version===et.__version){if(et.needsLights&&et.lightsStateVersion!==fn.state.version)Ot=!0;else if(Z.isBatchedMesh&&et.batching===!1)Ot=!0;else if(!Z.isBatchedMesh&&et.batching===!0)Ot=!0;else if(Z.isBatchedMesh&&et.batchingColor===!0&&Z._colorsTexture===null)Ot=!0;else if(Z.isBatchedMesh&&et.batchingColor===!1&&Z._colorsTexture!==null)Ot=!0;else if(Z.isInstancedMesh&&et.instancing===!1)Ot=!0;else if(!Z.isInstancedMesh&&et.instancing===!0)Ot=!0;else if(Z.isSkinnedMesh&&et.skinning===!1)Ot=!0;else if(!Z.isSkinnedMesh&&et.skinning===!0)Ot=!0;else if(Z.isInstancedMesh&&et.instancingColor===!0&&Z.instanceColor===null)Ot=!0;else if(Z.isInstancedMesh&&et.instancingColor===!1&&Z.instanceColor!==null)Ot=!0;else if(Z.isInstancedMesh&&et.instancingMorph===!0&&Z.morphTexture===null)Ot=!0;else if(Z.isInstancedMesh&&et.instancingMorph===!1&&Z.morphTexture!==null)Ot=!0;else if(et.envMap!==nt)Ot=!0;else if(q.fog===!0&&et.fog!==Pe)Ot=!0;else if(et.numClippingPlanes!==void 0&&(et.numClippingPlanes!==K.numPlanes||et.numIntersection!==K.numIntersection))Ot=!0;else if(et.vertexAlphas!==gt)Ot=!0;else if(et.vertexTangents!==At)Ot=!0;else if(et.morphTargets!==Qe)Ot=!0;else if(et.morphNormals!==Rt)Ot=!0;else if(et.morphColors!==vi)Ot=!0;else if(et.morphTargetsCount!==tn)Ot=!0;else if(et.numLightProbeGrids!==gd(T.state.lightProbeGridArray))Ot=!0;else if(et.outputColorSpace!==Ie||et.toneMapping!==Qt)Cs=!0}else Ot=!0,et.__version=q.version;let nn=et.currentProgram;if(Ot===!0||Cs===!0){if(nn=Cs===!0?_y(q,O,Z,Ie,Qt):ba(q,O,Z),D&&q.isNodeMaterial)D.onUpdateProgram(q,nn,et)}let Sc=!1,Qr=!1,Ps=!1,Dt=nn.getUniforms(),Wi=et.uniforms;if(se.useProgram(nn.program))Sc=!0,Qr=!0,Ps=!0;if(q.id!==j)j=q.id,Qr=!0;if(Sc||z!==E){if(se.buffers.depth.getReversed()&&E.reversedDepth!==!0)E._reversedDepth=!0,E.updateProjectionMatrix();Dt.setValue(R,"projectionMatrix",E.projectionMatrix),Dt.setValue(R,"viewMatrix",E.matrixWorldInverse);let Ui=Dt.map.cameraPosition;if(Ui!==void 0)Ui.setValue(R,Ye.setFromMatrixPosition(E.matrixWorld));if(He.logarithmicDepthBuffer)Dt.setValue(R,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2));if(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)Dt.setValue(R,"isOrthographic",E.isOrthographicCamera===!0);if(z!==E)z=E,Qr=!0,Ps=!0}if(et.needsLights){if(fn.state.sunShadowMap.length>0)Dt.setValue(R,"sunShadowMap",fn.state.sunShadowMap,at);if(fn.state.directionalShadowMap.length>0)Dt.setValue(R,"directionalShadowMap",fn.state.directionalShadowMap,at);if(fn.state.spotShadowMap.length>0)Dt.setValue(R,"spotShadowMap",fn.state.spotShadowMap,at);if(fn.state.pointShadowMap.length>0)Dt.setValue(R,"pointShadowMap",fn.state.pointShadowMap,at)}if(Z.isSkinnedMesh){Dt.setOptional(R,Z,"bindMatrix"),Dt.setOptional(R,Z,"bindMatrixInverse");let li=Z.skeleton;if(li){if(li.boneTexture===null)li.computeBoneTexture();Dt.setValue(R,"boneTexture",li.boneTexture,at)}}if(Z.isBatchedMesh){if(Dt.setOptional(R,Z,"batchingTexture"),Dt.setValue(R,"batchingTexture",Z._matricesTexture,at),Dt.setOptional(R,Z,"batchingIdTexture"),Dt.setValue(R,"batchingIdTexture",Z._indirectTexture,at),Dt.setOptional(R,Z,"batchingColorTexture"),Z._colorsTexture!==null)Dt.setValue(R,"batchingColorTexture",Z._colorsTexture,at)}let er=te.morphAttributes;if(er.position!==void 0||er.normal!==void 0||er.color!==void 0)U.update(Z,te,nn);if(Qr||et.receiveShadow!==Z.receiveShadow)et.receiveShadow=Z.receiveShadow,Dt.setValue(R,"receiveShadow",Z.receiveShadow);if((q.isMeshStandardMaterial||q.isMeshLambertMaterial||q.isMeshPhongMaterial)&&q.envMap===null&&O.environment!==null)Wi.envMapIntensity.value=O.environmentIntensity;if(Wi.dfgLUT!==void 0)Wi.dfgLUT.value=i_();if(Qr){if(Dt.setValue(R,"toneMappingExposure",C.toneMappingExposure),et.needsLights)My(Wi,Ps);if(Pe&&q.fog===!0)le.refreshFogUniforms(Wi,Pe);if(le.refreshMaterialUniforms(Wi,q,Fe,me,T.state.transmissionRenderTarget[E.id]),et.needsLights&&et.numLightProbeGrids>0){let li=y,Ui=0;for(let Pr of T.state.lightProbeGridArray){if(Pr.texture===null)continue;li.textures[Ui]=Pr.texture,li.min[Ui]=Pr.boundingBox.min,li.max[Ui]=Pr.boundingBox.max,li.resolution[Ui]=Pr.resolution,Ui++}for(let Pr in li)li[Pr].length=Ui;Wi.probesSH.value=li.textures,Wi.probesMin.value=li.min,Wi.probesMax.value=li.max,Wi.probesResolution.value=li.resolution}lo.upload(R,xd(et),Wi,at)}if(q.isShaderMaterial&&q.uniformsNeedUpdate===!0)lo.upload(R,xd(et),Wi,at),q.uniformsNeedUpdate=!1;if(q.isSpriteMaterial)Dt.setValue(R,"center",Z.center);if(Dt.setValue(R,"modelViewMatrix",Z.modelViewMatrix),Dt.setValue(R,"normalMatrix",Z.normalMatrix),Dt.setValue(R,"modelMatrix",Z.matrixWorld),q.uniformsGroups!==void 0){let li=q.uniformsGroups;for(let Ui=0,Pr=li.length;Ui<Pr;Ui++){let Md=li[Ui];Ae.update(Md,nn),Ae.bind(Md,nn)}}return nn}function My(E,O){E.ambientLightColor.needsUpdate=O,E.lightProbe.needsUpdate=O,E.sunLights.needsUpdate=O,E.sunLightShadows.needsUpdate=O,E.directionalLights.needsUpdate=O,E.directionalLightShadows.needsUpdate=O,E.pointLights.needsUpdate=O,E.pointLightShadows.needsUpdate=O,E.spotLights.needsUpdate=O,E.spotLightShadows.needsUpdate=O,E.rectAreaLights.needsUpdate=O,E.hemisphereLights.needsUpdate=O}function vy(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return J},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(E,O,te){let q=ke.get(E);if(q.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,q.__autoAllocateDepthBuffer===!1)q.__useRenderToTexture=!1;ke.get(E.texture).__webglTexture=O,ke.get(E.depthTexture).__webglTexture=q.__autoAllocateDepthBuffer?void 0:te,q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,O){let te=ke.get(E);te.__webglFramebuffer=O,te.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(E,O=0,te=0){N=E,J=O,L=te;let q=null,Z=!1,Pe=!1;if(E){let Ie=ke.get(E);if(Ie.__useDefaultFramebuffer!==void 0){se.bindFramebuffer(R.FRAMEBUFFER,Ie.__webglFramebuffer),H.copy(E.viewport),Y.copy(E.scissor),ae=E.scissorTest,se.viewport(H),se.scissor(Y),se.setScissorTest(ae),j=-1;return}else if(Ie.__webglFramebuffer===void 0)at.setupRenderTarget(E);else if(Ie.__hasExternalTextures)at.rebindTextures(E,ke.get(E.texture).__webglTexture,ke.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let gt=E.depthTexture;if(Ie.__boundDepthTexture!==gt){if(gt!==null&&ke.has(gt)&&(E.width!==gt.image.width||E.height!==gt.image.height))throw Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");at.setupDepthRenderbuffer(E)}}let Ge=E.texture;if(Ge.isData3DTexture||Ge.isDataArrayTexture||Ge.isCompressedArrayTexture)Pe=!0;let nt=ke.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget){if(Array.isArray(nt[O]))q=nt[O][te];else q=nt[O];Z=!0}else if(E.samples>0&&at.useMultisampledRTT(E)===!1)q=ke.get(E).__webglMultisampledFramebuffer;else if(Array.isArray(nt))q=nt[te];else q=nt;H.copy(E.viewport),Y.copy(E.scissor),ae=E.scissorTest}else H.copy(Ue).multiplyScalar(Fe).floor(),Y.copy(Oe).multiplyScalar(Fe).floor(),ae=pt;if(te!==0)q=V;if(se.bindFramebuffer(R.FRAMEBUFFER,q))se.drawBuffers(E,q);if(se.viewport(H),se.scissor(Y),se.setScissorTest(ae),Z){let Ie=ke.get(E.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+O,Ie.__webglTexture,te)}else if(Pe){let Ie=O;for(let Ge=0;Ge<E.textures.length;Ge++){let nt=ke.get(E.textures[Ge]);R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0+Ge,nt.__webglTexture,te,Ie)}}else if(E!==null&&te!==0){let Ie=ke.get(E.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,Ie.__webglTexture,te)}j=-1};function yd(E){let O=ke.get(E);if(O.__readFormat!==E.format||O.__readType!==E.type)O.__readFormat=E.format,O.__readType=E.type,O.__formatReadable=He.textureFormatReadable(E.format),O.__typeReadable=He.textureTypeReadable(E.type);return O}if(this.readRenderTargetPixels=function(E,O,te,q,Z,Pe,$e,Ie=0){if(!(E&&E.isWebGLRenderTarget)){We("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ge=ke.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&$e!==void 0){if(Ge=Ge[$e],Array.isArray(Ge))Ge=Ge[0]}if(Ge){se.bindFramebuffer(R.FRAMEBUFFER,Ge);try{let nt=E.textures[Ie],{format:gt,type:At}=nt;if(E.textures.length>1)R.readBuffer(R.COLOR_ATTACHMENT0+Ie);let Qe=yd(nt);if(Qe.__formatReadable===!1){We("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Qe.__typeReadable===!1){We("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}if(O>=0&&O<=E.width-q&&(te>=0&&te<=E.height-Z))R.readPixels(O,te,q,Z,ve.convert(gt),ve.convert(At),Pe)}finally{let nt=N!==null?ke.get(N).__webglFramebuffer:null;se.bindFramebuffer(R.FRAMEBUFFER,nt)}}},this.readRenderTargetPixelsAsync=async function(E,O,te,q,Z,Pe,$e,Ie=0){if(!(E&&E.isWebGLRenderTarget))throw Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ge=ke.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&$e!==void 0){if(Ge=Ge[$e],Array.isArray(Ge))Ge=Ge[0]}if(Ge)if(O>=0&&O<=E.width-q&&(te>=0&&te<=E.height-Z)){se.bindFramebuffer(R.FRAMEBUFFER,Ge);let nt=E.textures[Ie],{format:gt,type:At}=nt;if(E.textures.length>1)R.readBuffer(R.COLOR_ATTACHMENT0+Ie);let Qe=yd(nt);if(Qe.__formatReadable===!1)throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Qe.__typeReadable===!1)throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Rt=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,Rt),R.bufferData(R.PIXEL_PACK_BUFFER,Pe.byteLength,R.STREAM_READ),R.readPixels(O,te,q,Z,ve.convert(gt),ve.convert(At),0),R.bindBuffer(R.PIXEL_PACK_BUFFER,null);let vi=N!==null?ke.get(N).__webglFramebuffer:null;se.bindFramebuffer(R.FRAMEBUFFER,vi);let Qt=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);return R.flush(),await np(R,Qt,4),R.bindBuffer(R.PIXEL_PACK_BUFFER,Rt),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,Pe),R.bindBuffer(R.PIXEL_PACK_BUFFER,null),R.deleteBuffer(Rt),R.deleteSync(Qt),Pe}else throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,O=null,te=0){let q=Math.pow(2,-te),Z=Math.floor(E.image.width*q),Pe=Math.floor(E.image.height*q),$e=O!==null?O.x:0,Ie=O!==null?O.y:0;at.setTexture2D(E,0),R.copyTexSubImage2D(R.TEXTURE_2D,te,0,0,$e,Ie,Z,Pe),se.unbindTexture()},this.copyTextureToTexture=function(E,O,te=null,q=null,Z=0,Pe=0){let $e,Ie,Ge,nt,gt,At,Qe,Rt,vi,Qt=E.isCompressedTexture?E.mipmaps[Pe]:E.image;if(te!==null)$e=te.max.x-te.min.x,Ie=te.max.y-te.min.y,Ge=te.isBox3?te.max.z-te.min.z:1,nt=te.min.x,gt=te.min.y,At=te.isBox3?te.min.z:0;else{let Dt=Math.pow(2,-Z);if($e=Math.floor(E.width*Dt),Ie=Math.floor(E.height*Dt),E.isDataArrayTexture)Ge=Qt.depth;else if(E.isData3DTexture)Ge=Math.floor(Qt.depth*Dt);else Ge=1;nt=0,gt=0,At=0}if(q!==null)Qe=q.x,Rt=q.y,vi=q.z;else Qe=0,Rt=0,vi=0;let Zt=ve.convert(O.format),tn=ve.convert(O.type),et;if(O.isData3DTexture)at.setTexture3D(O,0),et=R.TEXTURE_3D;else if(O.isDataArrayTexture||O.isCompressedArrayTexture)at.setTexture2DArray(O,0),et=R.TEXTURE_2D_ARRAY;else at.setTexture2D(O,0),et=R.TEXTURE_2D;se.activeTexture(R.TEXTURE0),se.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,O.flipY),se.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),se.pixelStorei(R.UNPACK_ALIGNMENT,O.unpackAlignment);let fn=se.getParameter(R.UNPACK_ROW_LENGTH),Ot=se.getParameter(R.UNPACK_IMAGE_HEIGHT),Cs=se.getParameter(R.UNPACK_SKIP_PIXELS),nn=se.getParameter(R.UNPACK_SKIP_ROWS),Sc=se.getParameter(R.UNPACK_SKIP_IMAGES);se.pixelStorei(R.UNPACK_ROW_LENGTH,Qt.width),se.pixelStorei(R.UNPACK_IMAGE_HEIGHT,Qt.height),se.pixelStorei(R.UNPACK_SKIP_PIXELS,nt),se.pixelStorei(R.UNPACK_SKIP_ROWS,gt),se.pixelStorei(R.UNPACK_SKIP_IMAGES,At);let Qr=E.isDataArrayTexture||E.isData3DTexture,Ps=O.isDataArrayTexture||O.isData3DTexture;if(E.isDepthTexture){let Dt=ke.get(E),Wi=ke.get(O),er=ke.get(Dt.__renderTarget),li=ke.get(Wi.__renderTarget);se.bindFramebuffer(R.READ_FRAMEBUFFER,er.__webglFramebuffer),se.bindFramebuffer(R.DRAW_FRAMEBUFFER,li.__webglFramebuffer);for(let Ui=0;Ui<Ge;Ui++){if(Qr)R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,ke.get(E).__webglTexture,Z,At+Ui),R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,ke.get(O).__webglTexture,Pe,vi+Ui);R.blitFramebuffer(nt,gt,nt+$e,gt+Ie,Qe,Rt,Qe+$e,Rt+Ie,R.DEPTH_BUFFER_BIT,R.NEAREST)}se.bindFramebuffer(R.READ_FRAMEBUFFER,null),se.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else if(Z!==0||E.isRenderTargetTexture||ke.has(E)){let Dt=ke.get(E),Wi=ke.get(O);se.bindFramebuffer(R.READ_FRAMEBUFFER,ee),se.bindFramebuffer(R.DRAW_FRAMEBUFFER,I);for(let er=0;er<Ge;er++){if(Qr)R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,Dt.__webglTexture,Z,At+er);else R.framebufferTexture2D(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,Dt.__webglTexture,Z);if(Ps)R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,Wi.__webglTexture,Pe,vi+er);else R.framebufferTexture2D(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,Wi.__webglTexture,Pe);if(Z!==0)R.blitFramebuffer(nt,gt,nt+$e,gt+Ie,Qe,Rt,Qe+$e,Rt+Ie,R.COLOR_BUFFER_BIT,R.NEAREST);else if(Ps)R.copyTexSubImage3D(et,Pe,Qe,Rt,vi+er,nt,gt,$e,Ie);else R.copyTexSubImage2D(et,Pe,Qe,Rt,nt,gt,$e,Ie)}se.bindFramebuffer(R.READ_FRAMEBUFFER,null),se.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else if(Ps)if(E.isDataTexture||E.isData3DTexture)R.texSubImage3D(et,Pe,Qe,Rt,vi,$e,Ie,Ge,Zt,tn,Qt.data);else if(O.isCompressedArrayTexture)R.compressedTexSubImage3D(et,Pe,Qe,Rt,vi,Qt.width,Qt.height,Ge,Zt,Qt.data);else R.texSubImage3D(et,Pe,Qe,Rt,vi,$e,Ie,Ge,Zt,tn,Qt);else if(E.isDataTexture)R.texSubImage2D(R.TEXTURE_2D,Pe,Qe,Rt,$e,Ie,Zt,tn,Qt.data);else if(E.isCompressedTexture)R.compressedTexSubImage2D(R.TEXTURE_2D,Pe,Qe,Rt,Qt.width,Qt.height,Zt,Qt.data);else R.texSubImage2D(R.TEXTURE_2D,Pe,Qe,Rt,$e,Ie,Zt,tn,Qt);if(se.pixelStorei(R.UNPACK_ROW_LENGTH,fn),se.pixelStorei(R.UNPACK_IMAGE_HEIGHT,Ot),se.pixelStorei(R.UNPACK_SKIP_PIXELS,Cs),se.pixelStorei(R.UNPACK_SKIP_ROWS,nn),se.pixelStorei(R.UNPACK_SKIP_IMAGES,Sc),Pe===0&&O.generateMipmaps===!0&&O.mipmapsAutoUpdate===!0)R.generateMipmap(et);se.unbindTexture()},this.initRenderTarget=function(E){if(ke.get(E).__webglFramebuffer===void 0)at.setupRenderTarget(E)},this.initTexture=function(E){if(E.isCubeTexture)at.setTextureCube(E,0);else if(E.isData3DTexture)at.setTexture3D(E,0);else if(E.isDataArrayTexture||E.isCompressedArrayTexture)at.setTexture2DArray(E,0);else at.setTexture2D(E,0);se.unbindTexture()},this.resetState=function(){J=0,L=0,N=null,se.reset(),Te.reset()},typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Oi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=ht._getDrawingBufferColorSpace(e),t.unpackColorSpace=ht._getUnpackColorSpace()}}function r_(e,t=!1){let i=e[0].index!==null,n=new Set(Object.keys(e[0].attributes)),r=new Set(Object.keys(e[0].morphAttributes)),s={},o={},a=e[0].morphTargetsRelative,l=new Ve;l.morphTargetsRelative=a;let c=0;for(let h=0;h<e.length;++h){let u=e[h],f=0,m=0;if(i!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let g in u.attributes){if(!n.has(g))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+g+'" attribute exists among all geometries, or in none of them.'),null;if(s[g]===void 0)s[g]=[];s[g].push(u.attributes[g]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let g in u.morphAttributes){if(!r.has(g))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;if(u.morphAttributes[g].length!==e[0].morphAttributes[g].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have the same number of morph targets for the "'+g+'" morph attribute.'),null;if(o[g]===void 0)o[g]=[];o[g].push(u.morphAttributes[g]),m++}if(m!==r.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of morph attributes."),null;if(t){let g;if(i)g=u.index.count;else if(u.attributes.position!==void 0)g=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,g,h),c+=g}}if(i){let h=0,u=[];for(let f=0;f<e.length;++f){let m=e[f].index;for(let g=0;g<m.count;++g)u.push(m.getX(g)+h);h+=e[f].attributes.position.count}l.setIndex(u)}for(let h in s){let u=n_(s[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(let h in o){let u=o[h][0].length;if(u===0)continue;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let f=0;f<u;++f){let m=[];for(let x=0;x<o[h].length;++x)m.push(o[h][x][f]);let g=n_(m);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}return l}function n_(e){let t,i,n,r=-1,s=0;for(let c=0;c<e.length;++c){let h=e[c];if(t===void 0)t=h.array.constructor;if(t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(i===void 0)i=h.itemSize;if(i!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0)n=h.normalized;if(n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(r===-1)r=h.gpuType;if(r!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=h.count*i}let o=new t(s),a=new qt(o,i,n),l=0;for(let c=0;c<e.length;++c){let h=e[c];if(h.isInterleavedBufferAttribute){let u=l/i;for(let f=0,m=h.count;f<m;f++)for(let g=0;g<i;g++){let x=h.getComponent(f,g);a.setComponent(f+u,g,x)}}else o.set(h.array,l);l+=h.count*i}if(r!==void 0)a.gpuType=r;return a}function Ru(e,t){if(t===Xd)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),e;if(t===ul||t===Bc){let i=e.getIndex();if(i===null){let s=[],o=e.getAttribute("position");if(o!==void 0){for(let a=0;a<o.count;a++)s.push(a);e.setIndex(s),i=e.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),e}let n=i.count-2,r=[];if(t===ul)for(let s=1;s<=n;s++)r.push(i.getX(0)),r.push(i.getX(s)),r.push(i.getX(s+1));else for(let s=0;s<n;s++)if(s%2===0)r.push(i.getX(s)),r.push(i.getX(s+1)),r.push(i.getX(s+2));else r.push(i.getX(s+2)),r.push(i.getX(s+1)),r.push(i.getX(s));if(r.length/3!==n)console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");return e.setIndex(r),e.clearGroups(),e}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",t),e}function s_(e){let t=new Map,i=new Map,n=e.clone();return o_(e,n,function(r,s){t.set(s,r),i.set(r,s)}),n.traverse(function(r){if(!r.isSkinnedMesh)return;let s=r,o=t.get(r),a=o.skeleton.bones;s.skeleton=o.skeleton.clone(),s.bindMatrix.copy(o.bindMatrix),s.skeleton.bones=a.map(function(l){return i.get(l)}),s.bind(s.skeleton,s.bindMatrix)}),n}function o_(e,t,i){i(e,t);for(let n=0;n<e.children.length;n++)o_(e.children[n],t.children[n],i)}class Fu extends Mi{constructor(e){super(e);this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new p_(t)}),this.register(function(t){return new m_(t)}),this.register(function(t){return new g_(t)}),this.register(function(t){return new E_(t)}),this.register(function(t){return new w_(t)}),this.register(function(t){return new A_(t)}),this.register(function(t){return new __(t)}),this.register(function(t){return new y_(t)}),this.register(function(t){return new M_(t)}),this.register(function(t){return new v_(t)}),this.register(function(t){return new d_(t)}),this.register(function(t){return new S_(t)}),this.register(function(t){return new x_(t)}),this.register(function(t){return new T_(t)}),this.register(function(t){return new b_(t)}),this.register(function(t){return new f_(t)}),this.register(function(t){return new Lu(t,vt.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new Lu(t,vt.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new R_(t)})}load(e,t,i,n){let r=this,s;if(this.resourcePath!=="")s=this.resourcePath;else if(this.path!==""){let l=Jr.extractUrlBase(e);s=Jr.resolveURL(l,this.path)}else s=Jr.extractUrlBase(e);this.manager.itemStart(e);let o=function(l){if(n)n(l);else console.error(l);r.manager.itemError(e),r.manager.itemEnd(e)},a=new qn(this.manager);a.setPriority(this.priority),a.setCache(this.cache),a.setPath(this.path),a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(l){try{r.parse(l,s,function(c){t(c),r.manager.itemEnd(e)},o)}catch(c){o(c)}},i,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){if(this.pluginCallbacks.indexOf(e)===-1)this.pluginCallbacks.push(e);return this}unregister(e){if(this.pluginCallbacks.indexOf(e)!==-1)this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1);return this}parse(e,t,i,n){let r,s={},o={},a=new TextDecoder;if(typeof e==="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(a.decode(new Uint8Array(e,0,4))===C_){try{s[vt.KHR_BINARY_GLTF]=new P_(e)}catch(h){if(n)n(h);return}r=JSON.parse(s[vt.KHR_BINARY_GLTF].content)}else r=JSON.parse(a.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){if(n)n(Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let l=new F_(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,priority:this.priority,cache:this.cache,withCredentials:this.withCredentials,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let c=0;c<this.pluginCallbacks.length;c++){let h=this.pluginCallbacks[c](l);if(!h.name)console.error("THREE.GLTFLoader: Invalid plugin found: missing name");o[h.name]=h,s[h.name]=!0}if(r.extensionsUsed)for(let c=0;c<r.extensionsUsed.length;++c){let h=r.extensionsUsed[c],u=r.extensionsRequired||[];switch(h){case vt.KHR_MATERIALS_UNLIT:s[h]=new u_;break;case vt.KHR_DRACO_MESH_COMPRESSION:s[h]=new I_(r,this.dracoLoader);break;case vt.KHR_TEXTURE_TRANSFORM:s[h]=new L_;break;case vt.KHR_MESH_QUANTIZATION:s[h]=new D_;break;default:if(u.indexOf(h)>=0&&o[h]===void 0)console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}l.setExtensions(s),l.setPlugins(o),l.parse(i,n)}parseAsync(e,t){let i=this;return new Promise(function(n,r){i.parse(e,t,n,r)})}}function mS(){let e={};return{get:function(t){return e[t]},add:function(t,i){e[t]=i},remove:function(t){delete e[t]},removeAll:function(){e={}}}}function fi(e,t,i){let n=e.json.materials[t];if(n.extensions&&n.extensions[i])return n.extensions[i];return null}var vt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DIFFUSE_ROUGHNESS:"KHR_materials_diffuse_roughness",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class f_{constructor(e){this.parser=e,this.name=vt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let i=0,n=t.length;i<n;i++){let r=t[i];if(r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0)e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,i="light:"+e,n=t.cache.get(i);if(n)return n;let r=t.json,a=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],l,c=new fe(16777215);if(a.color!==void 0)c.setRGB(a.color[0],a.color[1],a.color[2],Xi);let h=a.range!==void 0?a.range:0;switch(a.type){case"directional":l=new Jl(c),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new hr(c),l.distance=h;break;case"spot":l=new Kl(c),l.distance=h,a.spot=a.spot||{},a.spot.innerConeAngle=a.spot.innerConeAngle!==void 0?a.spot.innerConeAngle:0,a.spot.outerConeAngle=a.spot.outerConeAngle!==void 0?a.spot.outerConeAngle:Math.PI/4,l.angle=a.spot.outerConeAngle,l.penumbra=1-a.spot.innerConeAngle/a.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw Error("THREE.GLTFLoader: Unexpected light type: "+a.type)}if(l.position.set(0,0,0),Sr(l,a),a.intensity!==void 0)l.intensity=a.intensity;return l.name=t.createUniqueName(a.name||"light_"+e),n=Promise.resolve(l),t.cache.add(i,n),n}getDependency(e,t){if(e!=="light")return;return this._loadLight(t)}createNodeAttachment(e){let t=this,i=this.parser,r=i.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;if(o===void 0)return null;return this._loadLight(o).then(function(a){return i._getNodeRef(t.cache,o,a)})}}class u_{constructor(){this.name=vt.KHR_MATERIALS_UNLIT}getMaterialType(){return Mt}extendParams(e,t,i){let n=[];e.color=new fe(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let s=r.baseColorFactor;e.color.setRGB(s[0],s[1],s[2],Xi),e.opacity=s[3]}if(r.baseColorTexture!==void 0)n.push(i.assignTexture(e,"map",r.baseColorTexture,yt))}return Promise.all(n)}}class d_{constructor(e){this.parser=e,this.name=vt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let i=fi(this.parser,e,this.name);if(i===null)return Promise.resolve();if(i.emissiveStrength!==void 0)t.emissiveIntensity=i.emissiveStrength;return Promise.resolve()}}class p_{constructor(e){this.parser=e,this.name=vt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return fi(this.parser,e,this.name)!==null?zi:null}extendMaterialParams(e,t){let i=fi(this.parser,e,this.name);if(i===null)return Promise.resolve();let n=[];if(i.clearcoatFactor!==void 0)t.clearcoat=i.clearcoatFactor;if(i.clearcoatTexture!==void 0)n.push(this.parser.assignTexture(t,"clearcoatMap",i.clearcoatTexture));if(i.clearcoatRoughnessFactor!==void 0)t.clearcoatRoughness=i.clearcoatRoughnessFactor;if(i.clearcoatRoughnessTexture!==void 0)n.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",i.clearcoatRoughnessTexture));if(i.clearcoatNormalTexture!==void 0){if(n.push(this.parser.assignTexture(t,"clearcoatNormalMap",i.clearcoatNormalTexture)),i.clearcoatNormalTexture.scale!==void 0){let r=i.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new X(r,r)}}return Promise.all(n)}}class m_{constructor(e){this.parser=e,this.name=vt.KHR_MATERIALS_DIFFUSE_ROUGHNESS}getMaterialType(e){return fi(this.parser,e,this.name)!==null?zi:null}extendMaterialParams(e,t){let i=fi(this.parser,e,this.name);if(i===null)return Promise.resolve();let n=[];if(t.diffuseRoughness=i.diffuseRoughnessFactor!==void 0?i.diffuseRoughnessFactor:0,i.diffuseRoughnessTexture!==void 0)n.push(this.parser.assignTexture(t,"diffuseRoughnessMap",i.diffuseRoughnessTexture));return Promise.all(n)}}class g_{constructor(e){this.parser=e,this.name=vt.KHR_MATERIALS_DISPERSION}getMaterialType(e){return fi(this.parser,e,this.name)!==null?zi:null}extendMaterialParams(e,t){let i=fi(this.parser,e,this.name);if(i===null)return Promise.resolve();return t.dispersion=i.dispersion!==void 0?i.dispersion:0,Promise.resolve()}}class x_{constructor(e){this.parser=e,this.name=vt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return fi(this.parser,e,this.name)!==null?zi:null}extendMaterialParams(e,t){let i=fi(this.parser,e,this.name);if(i===null)return Promise.resolve();let n=[];if(i.iridescenceFactor!==void 0)t.iridescence=i.iridescenceFactor;if(i.iridescenceTexture!==void 0)n.push(this.parser.assignTexture(t,"iridescenceMap",i.iridescenceTexture));if(i.iridescenceIor!==void 0)t.iridescenceIOR=i.iridescenceIor;if(i.iridescenceThicknessMinimum!==void 0)t.iridescenceThicknessMinimum=i.iridescenceThicknessMinimum;if(i.iridescenceThicknessMaximum!==void 0)t.iridescenceThicknessMaximum=i.iridescenceThicknessMaximum;if(i.iridescenceThicknessTexture!==void 0)n.push(this.parser.assignTexture(t,"iridescenceThicknessMap",i.iridescenceThicknessTexture));return Promise.all(n)}}class __{constructor(e){this.parser=e,this.name=vt.KHR_MATERIALS_SHEEN}getMaterialType(e){return fi(this.parser,e,this.name)!==null?zi:null}extendMaterialParams(e,t){let i=fi(this.parser,e,this.name);if(i===null)return Promise.resolve();let n=[];if(t.sheenColor=new fe(0,0,0),t.sheenRoughness=0,t.sheen=1,i.sheenColorFactor!==void 0){let r=i.sheenColorFactor;t.sheenColor.setRGB(r[0],r[1],r[2],Xi)}if(i.sheenRoughnessFactor!==void 0)t.sheenRoughness=i.sheenRoughnessFactor;if(i.sheenColorTexture!==void 0)n.push(this.parser.assignTexture(t,"sheenColorMap",i.sheenColorTexture,yt));if(i.sheenRoughnessTexture!==void 0)n.push(this.parser.assignTexture(t,"sheenRoughnessMap",i.sheenRoughnessTexture));return Promise.all(n)}}class y_{constructor(e){this.parser=e,this.name=vt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return fi(this.parser,e,this.name)!==null?zi:null}extendMaterialParams(e,t){let i=fi(this.parser,e,this.name);if(i===null)return Promise.resolve();let n=[];if(i.transmissionFactor!==void 0)t.transmission=i.transmissionFactor;if(i.transmissionTexture!==void 0)n.push(this.parser.assignTexture(t,"transmissionMap",i.transmissionTexture));return Promise.all(n)}}class M_{constructor(e){this.parser=e,this.name=vt.KHR_MATERIALS_VOLUME}getMaterialType(e){return fi(this.parser,e,this.name)!==null?zi:null}extendMaterialParams(e,t){let i=fi(this.parser,e,this.name);if(i===null)return Promise.resolve();let n=[];if(t.thickness=i.thicknessFactor!==void 0?i.thicknessFactor:0,i.thicknessTexture!==void 0)n.push(this.parser.assignTexture(t,"thicknessMap",i.thicknessTexture));t.attenuationDistance=i.attenuationDistance||1/0;let r=i.attenuationColor||[1,1,1];return t.attenuationColor=new fe().setRGB(r[0],r[1],r[2],Xi),Promise.all(n)}}class v_{constructor(e){this.parser=e,this.name=vt.KHR_MATERIALS_IOR}getMaterialType(e){return fi(this.parser,e,this.name)!==null?zi:null}extendMaterialParams(e,t){let i=fi(this.parser,e,this.name);if(i===null)return Promise.resolve();if(t.ior=i.ior!==void 0?i.ior:1.5,t.ior===0)t.ior=1000;return Promise.resolve()}}class S_{constructor(e){this.parser=e,this.name=vt.KHR_MATERIALS_SPECULAR}getMaterialType(e){return fi(this.parser,e,this.name)!==null?zi:null}extendMaterialParams(e,t){let i=fi(this.parser,e,this.name);if(i===null)return Promise.resolve();let n=[];if(t.specularIntensity=i.specularFactor!==void 0?i.specularFactor:1,i.specularTexture!==void 0)n.push(this.parser.assignTexture(t,"specularIntensityMap",i.specularTexture));let r=i.specularColorFactor||[1,1,1];if(t.specularColor=new fe().setRGB(r[0],r[1],r[2],Xi),i.specularColorTexture!==void 0)n.push(this.parser.assignTexture(t,"specularColorMap",i.specularColorTexture,yt));return Promise.all(n)}}class b_{constructor(e){this.parser=e,this.name=vt.EXT_MATERIALS_BUMP}getMaterialType(e){return fi(this.parser,e,this.name)!==null?zi:null}extendMaterialParams(e,t){let i=fi(this.parser,e,this.name);if(i===null)return Promise.resolve();let n=[];if(t.bumpScale=i.bumpFactor!==void 0?i.bumpFactor:1,i.bumpTexture!==void 0)n.push(this.parser.assignTexture(t,"bumpMap",i.bumpTexture));return Promise.all(n)}}class T_{constructor(e){this.parser=e,this.name=vt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return fi(this.parser,e,this.name)!==null?zi:null}extendMaterialParams(e,t){let i=fi(this.parser,e,this.name);if(i===null)return Promise.resolve();let n=[];if(i.anisotropyStrength!==void 0)t.anisotropy=i.anisotropyStrength;if(i.anisotropyRotation!==void 0)t.anisotropyRotation=i.anisotropyRotation;if(i.anisotropyTexture!==void 0)n.push(this.parser.assignTexture(t,"anisotropyMap",i.anisotropyTexture));return Promise.all(n)}}class E_{constructor(e){this.parser=e,this.name=vt.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,i=t.json,n=i.textures[e];if(!n.extensions||!n.extensions[this.name])return null;let r=n.extensions[this.name],s=t.options.ktx2Loader;if(!s)if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");else return null;return t.loadTextureImage(e,r.source,s)}}class w_{constructor(e){this.parser=e,this.name=vt.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,i=this.parser,n=i.json,r=n.textures[e];if(!r.extensions||!r.extensions[t])return null;let s=r.extensions[t],o=n.images[s.source],a=i.textureLoader;if(o.uri){let l=i.options.manager.getHandler(o.uri);if(l!==null)a=l}return i.loadTextureImage(e,s.source,a)}}class A_{constructor(e){this.parser=e,this.name=vt.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,i=this.parser,n=i.json,r=n.textures[e];if(!r.extensions||!r.extensions[t])return null;let s=r.extensions[t],o=n.images[s.source],a=i.textureLoader;if(o.uri){let l=i.options.manager.getHandler(o.uri);if(l!==null)a=l}return i.loadTextureImage(e,s.source,a)}}class Lu{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){let n=i.extensions[this.name],r=this.parser.getDependency("buffer",n.buffer),s=this.parser.options.meshoptDecoder;if(!s||!s.supported)if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");else return null;return r.then(function(o){let a=n.byteOffset||0,l=n.byteLength||0,{count:c,byteStride:h}=n,u=new Uint8Array(o,a,l);if(s.decodeGltfBufferAsync)return s.decodeGltfBufferAsync(c,h,u,n.mode,n.filter).then(function(f){return f.buffer});else return s.ready.then(function(){let f=new ArrayBuffer(c*h);return s.decodeGltfBuffer(new Uint8Array(f),c,h,u,n.mode,n.filter),f})})}else return null}}class R_{constructor(e){this.name=vt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;let n=t.meshes[i.mesh];for(let l of n.primitives)if(l.mode!==Zn.TRIANGLES&&l.mode!==Zn.TRIANGLE_STRIP&&l.mode!==Zn.TRIANGLE_FAN&&l.mode!==void 0)return null;let s=i.extensions[this.name].attributes,o=[],a={};for(let l in s)o.push(this.parser.getDependency("accessor",s[l]).then((c)=>(a[l]=c,a[l])));if(o.length<1)return null;return o.push(this.parser.createNodeMesh(e)),Promise.all(o).then((l)=>{let c=l.pop(),h=c.isGroup?c.children:[c],u=l[0].count,f=[];for(let m of h){let g=new Be,x=new A,d=new ri,p=new A(1,1,1),_=new Rn(m.geometry,m.material,u);for(let v=0;v<u;v++){if(a.TRANSLATION)x.fromBufferAttribute(a.TRANSLATION,v);if(a.ROTATION)d.fromBufferAttribute(a.ROTATION,v);if(a.SCALE)p.fromBufferAttribute(a.SCALE,v);_.setMatrixAt(v,g.compose(x,d,p))}let y=null;for(let v in a)if(v==="_COLOR_0"){let T=a[v];_.instanceColor=new lr(T.array,T.itemSize,T.normalized)}else if(v!=="TRANSLATION"&&v!=="ROTATION"&&v!=="SCALE"){if(y===null){let w=_.geometry;y=new Ve,y.name=w.name;for(let M in w.attributes)y.setAttribute(M,w.attributes[M]);for(let M in w.morphAttributes)y.morphAttributes[M]=w.morphAttributes[M];if(w.index!==null)y.setIndex(w.index);y.morphTargetsRelative=w.morphTargetsRelative;for(let M of w.groups)y.addGroup(M.start,M.count,M.materialIndex);if(w.boundingBox!==null)y.boundingBox=w.boundingBox.clone();if(w.boundingSphere!==null)y.boundingSphere=w.boundingSphere.clone();y.drawRange.start=w.drawRange.start,y.drawRange.count=w.drawRange.count,y.userData=Object.assign({},w.userData),_.geometry=y}let T=a[v];y.setAttribute(v,new lr(T.array,T.itemSize,T.normalized))}ct.prototype.copy.call(_,m),this.parser.assignFinalMaterial(_),f.push(_)}if(c.isGroup)return c.clear(),c.add(...f),c;return f[0]})}}var C_="glTF",ic=12,a_={JSON:1313821514,BIN:5130562};class P_{constructor(e){this.name=vt.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,ic),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==C_)throw Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");else if(this.header.version<2)throw Error("THREE.GLTFLoader: Legacy binary file detected.");let n=this.header.length-ic,r=new DataView(e,ic),s=0;while(s<n){let o=r.getUint32(s,!0);s+=4;let a=r.getUint32(s,!0);if(s+=4,a===a_.JSON){let l=new Uint8Array(e,ic+s,o);this.content=i.decode(l)}else if(a===a_.BIN){let l=ic+s;this.body=e.slice(l,l+o)}s+=o}if(this.content===null)throw Error("THREE.GLTFLoader: JSON content not found.")}}class I_{constructor(e,t){if(!t)throw Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=vt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let i=this.json,n=this.dracoLoader,r=e.extensions[this.name].bufferView,s=e.extensions[this.name].attributes,o={},a={},l={};for(let c in s){let h=Du[c]||c.toLowerCase();o[h]=s[c]}for(let c in e.attributes){let h=Du[c]||c.toLowerCase();if(s[c]!==void 0){let u=i.accessors[e.attributes[c]],f=ca[u.componentType];l[h]=f.name,a[h]=u.normalized===!0}}return t.getDependency("bufferView",r).then(function(c){return new Promise(function(h,u){n.decodeDracoFile(c,function(f){for(let m in f.attributes){let g=f.attributes[m],x=a[m];if(x!==void 0)g.normalized=x}h(f)},o,l,Xi,u)})})}}class L_{constructor(){this.name=vt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0)e.channel=t.texCoord;if(t.offset!==void 0)e.offset.fromArray(t.offset);if(t.rotation!==void 0)e.rotation=t.rotation;if(t.scale!==void 0)e.repeat.fromArray(t.scale);if(t.rotation!==void 0){let i=Math.cos(e.rotation),n=Math.sin(e.rotation);e.matrix.set(e.repeat.x*i,e.repeat.y*n,e.offset.x,-e.repeat.x*n,e.repeat.y*i,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}}class D_{constructor(){this.name=vt.KHR_MESH_QUANTIZATION}}class Uu extends vn{constructor(e,t,i,n){super(e,t,i,n)}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,n=this.valueSize,r=e*n*3+n;for(let s=0;s!==n;s++)t[s]=i[r+s];return t}interpolate_(e,t,i,n){let r=this.resultBuffer,s=this.sampleValues,o=this.valueSize,a=o*2,l=o*3,c=n-t,h=(i-t)/c,u=h*h,f=u*h,m=e*l,g=m-l,x=-2*f+3*u,d=f-u,p=1-x,_=d-u+h;for(let y=0;y!==o;y++){let v=s[g+y+o],T=s[g+y+a]*c,w=s[m+y+o],M=s[m+y]*c;r[y]=p*v+_*T+x*w+d*M}return r}}var gS=new ri;class N_ extends Uu{interpolate_(e,t,i,n){let r=super.interpolate_(e,t,i,n);return gS.fromArray(r).normalize().toArray(r),r}}var Zn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},ca={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},l_={9728:Vt,9729:Yt,9984:Fa,9985:Ds,9986:ss,9987:Bi},c_={33071:Ri,33648:rs,10497:un},Cu={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Du={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Ms={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},xS={CUBICSPLINE:void 0,LINEAR:Bs,STEP:Dr},Pu={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function _S(e){if(e.DefaultMaterial===void 0)e.DefaultMaterial=new ft({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:yn});return e.DefaultMaterial}function co(e,t,i){for(let n in i.extensions)if(e[n]===void 0)t.userData.gltfExtensions=t.userData.gltfExtensions||{},t.userData.gltfExtensions[n]=i.extensions[n]}function Sr(e,t){if(t.extras!==void 0)if(typeof t.extras==="object")Object.assign(e.userData,t.extras);else console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+t.extras)}function yS(e,t,i){let n=!1,r=!1,s=!1;for(let c=0,h=t.length;c<h;c++){let u=t[c];if(u.POSITION!==void 0)n=!0;if(u.NORMAL!==void 0)r=!0;if(u.COLOR_0!==void 0)s=!0;if(n&&r&&s)break}if(!n&&!r&&!s)return Promise.resolve(e);let o=[],a=[],l=[];for(let c=0,h=t.length;c<h;c++){let u=t[c];if(n){let f=u.POSITION!==void 0?i.getDependency("accessor",u.POSITION):e.attributes.position;o.push(f)}if(r){let f=u.NORMAL!==void 0?i.getDependency("accessor",u.NORMAL):e.attributes.normal;a.push(f)}if(s){let f=u.COLOR_0!==void 0?i.getDependency("accessor",u.COLOR_0):e.attributes.color;l.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){let h=c[0],u=c[1],f=c[2];if(n)e.morphAttributes.position=h;if(r)e.morphAttributes.normal=u;if(s)e.morphAttributes.color=f;return e.morphTargetsRelative=!0,e})}function MS(e,t){if(e.updateMorphTargets(),t.weights!==void 0)for(let i=0,n=t.weights.length;i<n;i++)e.morphTargetInfluences[i]=t.weights[i];if(t.extras&&Array.isArray(t.extras.targetNames)){let i=t.extras.targetNames;if(e.morphTargetInfluences.length===i.length){e.morphTargetDictionary={};for(let n=0,r=i.length;n<r;n++)e.morphTargetDictionary[i[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function vS(e){let t,i=e.extensions&&e.extensions[vt.KHR_DRACO_MESH_COMPRESSION];if(i)t="draco:"+i.bufferView+":"+i.indices+":"+Iu(i.attributes);else t=e.indices+":"+Iu(e.attributes)+":"+e.mode;if(e.targets!==void 0)for(let n=0,r=e.targets.length;n<r;n++)t+=":"+Iu(e.targets[n]);return t}function Iu(e){let t="",i=Object.keys(e).sort();for(let n=0,r=i.length;n<r;n++)t+=i[n]+":"+e[i[n]]+";";return t}function Nu(e){switch(e){case Int8Array:return 0.007874015748031496;case Uint8Array:return 0.00392156862745098;case Int16Array:return 0.00003051850947599719;case Uint16Array:return 0.000015259021896696422;default:throw Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function SS(e){if(e.search(/\.jpe?g($|\?)/i)>0||e.search(/^data\:image\/jpeg/)===0)return"image/jpeg";if(e.search(/\.webp($|\?)/i)>0||e.search(/^data\:image\/webp/)===0)return"image/webp";if(e.search(/\.ktx2($|\?)/i)>0||e.search(/^data\:image\/ktx2/)===0)return"image/ktx2";return"image/png"}var bS=new Be;class F_{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new mS,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,n=-1,r=!1,s=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){let o=navigator.userAgent;i=/^((?!chrome|android).)*safari/i.test(o)===!0;let a=o.match(/Version\/(\d+)/);n=i&&a?parseInt(a[1],10):-1,r=o.indexOf("Firefox")>-1,s=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}if(typeof createImageBitmap>"u"||i&&n<17||r&&s<98)this.textureLoader=new ms(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache);else this.textureLoader=new Fh(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache);if(this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setWithCredentials(this.options.withCredentials),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new qn(this.options.manager),this.fileLoader.setPriority(this.options.priority),this.fileLoader.setCache(this.options.cache),this.fileLoader.setResponseType("arraybuffer"),this.options.withCredentials||this.options.crossOrigin==="use-credentials")this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let i=this,n=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(s){return s._markDefs&&s._markDefs()}),Promise.all(this._invokeAll(function(s){return s.beforeRoot&&s.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(s){let o={scene:s[0][n.scene||0],scenes:s[0],animations:s[1],cameras:s[2],asset:n.asset,parser:i,userData:{}};return co(r,o,n),Sr(o,n),Promise.all(i._invokeAll(function(a){return a.afterRoot&&a.afterRoot(o)})).then(function(){for(let a of o.scenes)a.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let n=0,r=t.length;n<r;n++){let s=t[n].joints;for(let o=0,a=s.length;o<a;o++)e[s[o]].isBone=!0}for(let n=0,r=e.length;n<r;n++){let s=e[n];if(s.mesh!==void 0){if(this._addNodeRef(this.meshCache,s.mesh),s.skin!==void 0)i[s.mesh].isSkinnedMesh=!0}if(s.camera!==void 0)this._addNodeRef(this.cameraCache,s.camera)}}_addNodeRef(e,t){if(t===void 0)return;if(e.refs[t]===void 0)e.refs[t]=e.uses[t]=0;e.refs[t]++}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;let n=i.clone(),r=(s,o)=>{let a=this.associations.get(s);if(a!=null)this.associations.set(o,a);for(let[l,c]of s.children.entries())r(c,o.children[l])};return r(i,n),n.name+="_instance_"+e.uses[t]++,n}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){let n=e(t[i]);if(n)return n}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let i=[];for(let n=0;n<t.length;n++){let r=e(t[n]);if(r)i.push(r)}return i}getDependency(e,t){let i=e+":"+t,n=this.cache.get(i);if(!n){switch(e){case"scene":n=this.loadScene(t);break;case"node":n=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":n=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":n=this.loadAccessor(t);break;case"bufferView":n=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":n=this.loadBuffer(t);break;case"material":n=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":n=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":n=this.loadSkin(t);break;case"animation":n=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":n=this.loadCamera(t);break;default:if(n=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!n)throw Error("Unknown type: "+e);break}this.cache.add(i,n)}return n}getDependencies(e){let t=this.cache.get(e);if(!t){let i=this,n=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(n.map(function(r,s){return i.getDependency(e,s)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[vt.KHR_BINARY_GLTF].body);let n=this.options;return new Promise(function(r,s){i.load(Jr.resolveURL(t.uri,n.path),r,void 0,function(){s(Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){let n=t.byteLength||0,r=t.byteOffset||0;return i.slice(r,r+n)})}loadAccessor(e){let t=this,i=this.json,n=this.json.accessors[e];if(n.bufferView===void 0&&n.sparse===void 0){let s=Cu[n.type],o=ca[n.componentType],a=n.normalized===!0,l=new o(n.count*s);return Promise.resolve(new qt(l,s,a))}let r=[];if(n.bufferView!==void 0)r.push(this.getDependency("bufferView",n.bufferView));else r.push(null);if(n.sparse!==void 0)r.push(this.getDependency("bufferView",n.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",n.sparse.values.bufferView));return Promise.all(r).then(function(s){let o=s[0],a=Cu[n.type],l=ca[n.componentType],c=l.BYTES_PER_ELEMENT,h=c*a,u=n.byteOffset||0,f=n.bufferView!==void 0?i.bufferViews[n.bufferView].byteStride:void 0,m=n.normalized===!0,g,x;if(f&&f!==h){let d=Math.floor(u/f),p="InterleavedBuffer:"+n.bufferView+":"+n.componentType+":"+d+":"+n.count,_=t.cache.get(p);if(!_)g=new l(o,d*f,n.count*f/c),_=new Gr(g,f/c),t.cache.add(p,_);x=new mr(_,a,u%f/c,m)}else{if(o===null)g=new l(n.count*a);else g=new l(o,u,n.count*a);x=new qt(g,a,m)}if(n.sparse!==void 0){let d=Cu.SCALAR,p=ca[n.sparse.indices.componentType],_=n.sparse.indices.byteOffset||0,y=n.sparse.values.byteOffset||0,v=new p(s[1],_,n.sparse.count*d),T=new l(s[2],y,n.sparse.count*a);if(o!==null)x=new qt(x.array.slice(),x.itemSize,x.normalized);x.normalized=!1;for(let w=0,M=v.length;w<M;w++){let b=v[w];if(x.setX(b,T[w*a]),a>=2)x.setY(b,T[w*a+1]);if(a>=3)x.setZ(b,T[w*a+2]);if(a>=4)x.setW(b,T[w*a+3]);if(a>=5)throw Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}x.normalized=m}return x})}loadTexture(e){let t=this.json,i=this.options,r=t.textures[e].source,s=t.images[r],o=this.textureLoader;if(s.uri){let a=i.manager.getHandler(s.uri);if(a!==null)o=a}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,i){let n=this,r=this.json,s=r.textures[e],o=r.images[t],a=(o.uri||o.bufferView)+":"+s.sampler;if(this.textureCache[a])return this.textureCache[a];let l=this.loadImageSource(t,i).then(function(c){if(c.flipY=!1,c.name=s.name||o.name||"",c.name===""&&typeof o.uri==="string"&&o.uri.startsWith("data:image/")===!1)c.name=o.uri;let u=(r.samplers||{})[s.sampler]||{};return c.magFilter=l_[u.magFilter]||Yt,c.minFilter=l_[u.minFilter]||Bi,c.wrapS=c_[u.wrapS]||un,c.wrapT=c_[u.wrapT]||un,c.generateMipmaps=!c.isCompressedTexture&&c.minFilter!==Vt&&c.minFilter!==Yt,n.associations.set(c,{textures:e}),c}).catch(function(){return null});return this.textureCache[a]=l,l}loadImageSource(e,t){let i=this,n=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then((u)=>u.clone());let s=n.images[e],o=self.URL||self.webkitURL,a=s.uri||"",l=!1,c;if(t.isKTX2Loader===!0&&s.bufferView!==void 0)c=i.getDependency("bufferView",s.bufferView).then(function(u){return new Promise(function(f,m){t.parse(u,f,m)})});else{if(s.bufferView!==void 0)a=i.getDependency("bufferView",s.bufferView).then(function(u){l=!0;let f=new Blob([u],{type:s.mimeType});return a=o.createObjectURL(f),a});else if(s.uri===void 0)throw Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");c=Promise.resolve(a).then(function(u){return new Promise(function(f,m){let g=f;if(t.isImageBitmapLoader===!0)g=function(x){let d=new Ct(x);d.needsUpdate=!0,f(d)};t.load(Jr.resolveURL(u,r.path),g,void 0,m)})})}let h=c.then(function(u){if(l===!0)o.revokeObjectURL(a);return Sr(u,s),u.userData.mimeType=s.mimeType||SS(s.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",a),u});return this.sourceCache[e]=h,h}assignTexture(e,t,i,n){let r=this;return this.getDependency("texture",i.index).then(function(s){if(!s)return null;if(i.texCoord!==void 0&&i.texCoord>0)s=s.clone(),s.channel=i.texCoord;if(r.extensions[vt.KHR_TEXTURE_TRANSFORM]){let o=i.extensions!==void 0?i.extensions[vt.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let a=r.associations.get(s);s=r.extensions[vt.KHR_TEXTURE_TRANSFORM].extendTexture(s,o),r.associations.set(s,a)}}if(n!==void 0)s.colorSpace=n;return e[t]=s,s})}assignFinalMaterial(e){let{geometry:t,material:i}=e,n=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,s=t.attributes.normal===void 0;if(e.isPoints){let o="PointsMaterial:"+i.uuid,a=this.cache.get(o);if(!a)a=new kr,zt.prototype.copy.call(a,i),a.color.copy(i.color),a.map=i.map,a.sizeAttenuation=!1,this.cache.add(o,a);i=a}else if(e.isLine){let o="LineBasicMaterial:"+i.uuid,a=this.cache.get(o);if(!a)a=new yi,zt.prototype.copy.call(a,i),a.color.copy(i.color),a.map=i.map,this.cache.add(o,a);i=a}if(n||r||s){let o="ClonedMaterial:"+i.uuid+":";if(n)o+="derivative-tangents:";if(r)o+="vertex-colors:";if(s)o+="flat-shading:";let a=this.cache.get(o);if(!a){if(a=i.clone(),r)a.vertexColors=!0;if(s)a.flatShading=!0;if(n){if(a.normalScale)a.normalScale.y*=-1;if(a.clearcoatNormalScale)a.clearcoatNormalScale.y*=-1}this.cache.add(o,a),this.associations.set(a,this.associations.get(i))}i=a}e.material=i}getMaterialType(){return ft}loadMaterial(e){let t=this,i=this.json,n=this.extensions,r=i.materials[e],s,o={},a=r.extensions||{},l=[];if(a[vt.KHR_MATERIALS_UNLIT]){let h=n[vt.KHR_MATERIALS_UNLIT];s=h.getMaterialType(),l.push(h.extendParams(o,r,t))}else{let h=r.pbrMetallicRoughness||{};if(o.color=new fe(1,1,1),o.opacity=1,Array.isArray(h.baseColorFactor)){let u=h.baseColorFactor;o.color.setRGB(u[0],u[1],u[2],Xi),o.opacity=u[3]}if(h.baseColorTexture!==void 0)l.push(t.assignTexture(o,"map",h.baseColorTexture,yt));if(o.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,o.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0)l.push(t.assignTexture(o,"metalnessMap",h.metallicRoughnessTexture)),l.push(t.assignTexture(o,"roughnessMap",h.metallicRoughnessTexture));s=this._invokeOne(function(u){return u.getMaterialType&&u.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(u){return u.extendMaterialParams&&u.extendMaterialParams(e,o)})))}if(r.doubleSided===!0)o.side=Nt;let c=r.alphaMode||Pu.OPAQUE;if(c===Pu.BLEND)o.transparent=!0,o.depthWrite=!1;else if(o.transparent=!1,c===Pu.MASK)o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:0.5;if(r.normalTexture!==void 0&&s!==Mt){if(l.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new X(1,1),r.normalTexture.scale!==void 0){let h=r.normalTexture.scale;o.normalScale.set(h,h)}}if(r.occlusionTexture!==void 0&&s!==Mt){if(l.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0)o.aoMapIntensity=r.occlusionTexture.strength}if(r.emissiveFactor!==void 0&&s!==Mt){let h=r.emissiveFactor;o.emissive=new fe().setRGB(h[0],h[1],h[2],Xi)}if(r.emissiveTexture!==void 0&&s!==Mt)l.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,yt));return Promise.all(l).then(function(){let h=new s(o);if(r.name)h.name=r.name;if(Sr(h,r),t.associations.set(h,{materials:e}),r.extensions)co(n,h,r);return h})}createUniqueName(e){let t=Ft.sanitizeNodeName(e||"");if(t in this.nodeNamesUsed)return t+"_"+ ++this.nodeNamesUsed[t];else return this.nodeNamesUsed[t]=0,t}loadGeometries(e){let t=this,i=this.extensions,n=this.primitiveCache;function r(o){return i[vt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(a){return h_(a,o,t)})}let s=[];for(let o=0,a=e.length;o<a;o++){let l=e[o],c=vS(l),h=n[c];if(h)s.push(h.promise);else{let u;if(l.extensions&&l.extensions[vt.KHR_DRACO_MESH_COMPRESSION])u=r(l);else u=h_(new Ve,l,t);if(l.mode===Zn.TRIANGLE_STRIP)u=u.then((f)=>Ru(f,Bc));else if(l.mode===Zn.TRIANGLE_FAN)u=u.then((f)=>Ru(f,ul));n[c]={primitive:l,promise:u},s.push(u)}}return Promise.all(s)}loadMesh(e){let t=this,i=this.json,n=this.extensions,r=i.meshes[e],s=r.primitives,o=[];for(let a=0,l=s.length;a<l;a++){let c=s[a].material===void 0?_S(this.cache):this.getDependency("material",s[a].material);o.push(c)}return o.push(t.loadGeometries(s)),Promise.all(o).then(async function(a){let l=a.slice(0,a.length-1),c=a[a.length-1],h=[];for(let f=0,m=c.length;f<m;f++){let g=c[f],x=s[f],d,p=l[f];if(x.mode===Zn.TRIANGLES||x.mode===Zn.TRIANGLE_STRIP||x.mode===Zn.TRIANGLE_FAN||x.mode===void 0){let _=r.isSkinnedMesh===!0,y=g.hasAttribute("skinIndex")&&g.hasAttribute("skinWeight");if(_&&y===!1)console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled.");if(d=_&&y?new Rl(g,p):new ie(g,p),d.isSkinnedMesh===!0)d.normalizeSkinWeights()}else if(x.mode===Zn.LINES)d=new an(g,p);else if(x.mode===Zn.LINE_STRIP)d=new Xn(g,p);else if(x.mode===Zn.LINE_LOOP)d=new Ll(g,p);else if(x.mode===Zn.POINTS)d=new Ks(g,p);else throw Error("THREE.GLTFLoader: Primitive mode unsupported: "+x.mode);if(Object.keys(d.geometry.morphAttributes).length>0)MS(d,r);if(d.name=t.createUniqueName(r.name||"mesh_"+e),Sr(d,r),x.extensions)co(n,d,x);t.assignFinalMaterial(d),h.push(d)}for(let f=0,m=h.length;f<m;f++)t.associations.set(h[f],{meshes:e,primitives:f});if(h.length===1){if(r.extensions)co(n,h[0],r);return h[0]}let u=new qe;if(r.extensions)co(n,u,r);t.associations.set(u,{meshes:e});for(let f=0,m=h.length;f<m;f++)u.add(h[f]);return u})}loadCamera(e){let t,i=this.json.cameras[e],n=i[i.type];if(!n){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}if(i.type==="perspective")t=new ti(Vc.radToDeg(n.yfov),n.aspectRatio||1,n.znear||1,n.zfar||2000000);else if(i.type==="orthographic")t=new fr(-n.xmag,n.xmag,n.ymag,-n.ymag,n.znear,n.zfar);if(i.name)t.name=this.createUniqueName(i.name);return Sr(t,i),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],i=[];for(let n=0,r=t.joints.length;n<r;n++)i.push(this._loadNodeShallow(t.joints[n]));if(t.inverseBindMatrices!==void 0)i.push(this.getDependency("accessor",t.inverseBindMatrices));else i.push(null);return Promise.all(i).then(function(n){let r=n.pop(),s=n,o=[],a=[];for(let l=0,c=s.length;l<c;l++){let h=s[l];if(h){o.push(h);let u=new Be;if(r!==null)u.fromArray(r.array,l*16);a.push(u)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new jo(o,a)})}loadAnimation(e){let t=this.json,i=this,n=t.animations[e],r=n.name?n.name:"animation_"+e,s=[],o=[],a=[],l=[],c=[];for(let h=0,u=n.channels.length;h<u;h++){let f=n.channels[h],m=n.samplers[f.sampler],g=f.target,x=g.node,d=n.parameters!==void 0?n.parameters[m.input]:m.input,p=n.parameters!==void 0?n.parameters[m.output]:m.output;if(g.node===void 0)continue;s.push(this.getDependency("node",x)),o.push(this.getDependency("accessor",d)),a.push(this.getDependency("accessor",p)),l.push(m),c.push(g)}return Promise.all([Promise.all(s),Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c)]).then(function(h){let u=h[0],f=h[1],m=h[2],g=h[3],x=h[4],d=[];for(let _=0,y=u.length;_<y;_++){let v=u[_],T=f[_],w=m[_],M=g[_],b=x[_];if(v===void 0)continue;if(v.updateMatrix)v.updateMatrix();let C=i._createAnimationTracks(v,T,w,M,b);if(C)for(let F=0;F<C.length;F++)d.push(C[F])}let p=new ps(r,void 0,d);return Sr(p,n),p})}createNodeMesh(e){let t=this.json,i=this,n=t.nodes[e];if(n.mesh===void 0)return null;return i.getDependency("mesh",n.mesh).then(function(r){let s=i._getNodeRef(i.meshCache,n.mesh,r);if(n.weights!==void 0)s.traverse(function(o){if(!o.isMesh)return;for(let a=0,l=n.weights.length;a<l;a++)o.morphTargetInfluences[a]=n.weights[a]});return s})}loadNode(e){let t=this.json,i=this,n=t.nodes[e],r=i._loadNodeShallow(e),s=[],o=n.children||[];for(let l=0,c=o.length;l<c;l++)s.push(i.getDependency("node",o[l]));let a=n.skin===void 0?Promise.resolve(null):i.getDependency("skin",n.skin);return Promise.all([r,Promise.all(s),a]).then(function(l){let c=l[0],h=l[1],u=l[2];if(u!==null)c.traverse(function(f){if(!f.isSkinnedMesh)return;f.bind(u,bS)});for(let f=0,m=h.length;f<m;f++)c.add(h[f]);if(c.userData.pivot!==void 0&&h.length>0){let f=c.userData.pivot,m=h[0];c.pivot=new A().fromArray(f),c.position.x-=f[0],c.position.y-=f[1],c.position.z-=f[2],m.position.set(0,0,0),delete c.userData.pivot}return c})}_loadNodeShallow(e){let t=this.json,i=this.extensions,n=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],s=r.name?n.createUniqueName(r.name):"",o=[],a=n._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});if(a)o.push(a);if(r.camera!==void 0)o.push(n.getDependency("camera",r.camera).then(function(l){return n._getNodeRef(n.cameraCache,r.camera,l)}));return n._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){o.push(l)}),this.nodeCache[e]=Promise.all(o).then(function(l){let c;if(r.isBone===!0)c=new qs;else if(l.length>1)c=new qe;else if(l.length===1)c=l[0];else c=new ct;if(c!==l[0])for(let h=0,u=l.length;h<u;h++)c.add(l[h]);if(r.name)c.userData.name=r.name,c.name=s;if(Sr(c,r),r.extensions)co(i,c,r);if(r.matrix!==void 0){let h=new Be;h.fromArray(r.matrix),c.applyMatrix4(h)}else{if(r.translation!==void 0)c.position.fromArray(r.translation);if(r.rotation!==void 0)c.quaternion.fromArray(r.rotation);if(r.scale!==void 0)c.scale.fromArray(r.scale)}if(!n.associations.has(c))n.associations.set(c,{});else if(r.mesh!==void 0&&n.meshCache.refs[r.mesh]>1){let h=n.associations.get(c);n.associations.set(c,{...h})}return n.associations.get(c).nodes=e,c}),this.nodeCache[e]}loadScene(e){let t=this.extensions,i=this.json.scenes[e],n=this,r=new qe;if(i.name)r.name=n.createUniqueName(i.name);if(Sr(r,i),i.extensions)co(t,r,i);let s=i.nodes||[],o=[];for(let a=0,l=s.length;a<l;a++)o.push(n.getDependency("node",s[a]));return Promise.all(o).then(function(a){for(let c=0,h=a.length;c<h;c++){let u=a[c];if(u.parent!==null)r.add(s_(u));else r.add(u)}let l=(c)=>{let h=new Map;for(let[u,f]of n.associations)if(u instanceof zt||u instanceof Ct)h.set(u,f);return c.traverse((u)=>{let f=n.associations.get(u);if(f!=null)h.set(u,f)}),h};return n.associations=l(r),r})}_createAnimationTracks(e,t,i,n,r){let s=[],o=e.name?e.name:e.uuid,a=[];function l(f){if(f.morphTargetInfluences)a.push(f.name?f.name:f.uuid)}if(Ms[r.path]===Ms.weights){if(l(e),e.isGroup)e.children.forEach(l)}else a.push(o);let c;switch(Ms[r.path]){case Ms.weights:c=Yr;break;case Ms.rotation:c=yr;break;case Ms.translation:case Ms.scale:c=Zr;break;default:switch(i.itemSize){case 1:c=Yr;break;case 2:case 3:default:c=Zr;break}break}let h=n.interpolation!==void 0?xS[n.interpolation]:Bs,u=this._getArrayFromAccessor(i);for(let f=0,m=a.length;f<m;f++){let g=new c(a[f]+"."+Ms[r.path],t.array,u,h);if(n.interpolation==="CUBICSPLINE")this._createCubicSplineTrackInterpolant(g);s.push(g)}return s}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let i=Nu(t.constructor),n=new Float32Array(t.length);for(let r=0,s=t.length;r<s;r++)n[r]=t[r]*i;t=n}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(i){return new(this instanceof yr?N_:Uu)(this.times,this.values,this.getValueSize()/3,i)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function TS(e,t,i){let n=t.attributes,r=new _i;if(n.POSITION!==void 0){let a=i.json.accessors[n.POSITION],{min:l,max:c}=a;if(l!==void 0&&c!==void 0){if(r.set(new A(l[0],l[1],l[2]),new A(c[0],c[1],c[2])),a.normalized){let h=Nu(ca[a.componentType]);r.min.multiplyScalar(h),r.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let s=t.targets;if(s!==void 0){let a=new A,l=new A;for(let c=0,h=s.length;c<h;c++){let u=s[c];if(u.POSITION!==void 0){let f=i.json.accessors[u.POSITION],{min:m,max:g}=f;if(m!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(m[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(m[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(m[2]),Math.abs(g[2]))),f.normalized){let x=Nu(ca[f.componentType]);l.multiplyScalar(x)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}r.expandByVector(a)}e.boundingBox=r;let o=new ci;r.getCenter(o.center),o.radius=r.min.distanceTo(r.max)/2,e.boundingSphere=o}function h_(e,t,i){let n=t.attributes,r=[];function s(o,a){return i.getDependency("accessor",o).then(function(l){e.setAttribute(a,l)})}for(let o in n){let a=Du[o]||o.toLowerCase();if(a in e.attributes)continue;r.push(s(n[o],a))}if(t.indices!==void 0&&!e.index){let o=i.getDependency("accessor",t.indices).then(function(a){e.setIndex(a)});r.push(o)}if(ht.workingColorSpace!==Xi&&"COLOR_0"in n)console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${ht.workingColorSpace}" not supported.`);return Sr(e,t),TS(e,t,i),Promise.all(r).then(function(){return t.targets!==void 0?yS(e,t.targets,i):e})}var ha={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class Kn{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}var ES=new fr(-1,1,1,-1,0,1);class U_ extends Ve{constructor(){super();this.setAttribute("position",new Ee([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Ee([0,2,0,0,2,0],2))}}var wS=new U_;class ho{constructor(e){this._mesh=new ie(wS,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,ES)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class Bu extends Kn{constructor(e,t="tDiffuse"){super();if(this.textureID=t,this.uniforms=null,this.material=null,e instanceof si)this.uniforms=e.uniforms,this.material=e;else if(e)this.uniforms=xr.clone(e.uniforms),this.material=new si({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader});this._fsQuad=new ho(this.material)}render(e,t,i){if(this.uniforms[this.textureID])this.uniforms[this.textureID].value=i.texture;if(this._fsQuad.material=this.material,this.renderToScreen)e.setRenderTarget(null),this._fsQuad.render(e);else{if(e.setRenderTarget(t),this.clear)e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil);this._fsQuad.render(e)}}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class Xh extends Kn{constructor(e,t){super();this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){let n=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let s,o;if(this.inverse)s=0,o=1;else s=1,o=0;if(r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(n.REPLACE,n.REPLACE,n.REPLACE),r.buffers.stencil.setFunc(n.ALWAYS,s,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear)e.clear();if(e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear)e.clear();e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(n.EQUAL,1,4294967295),r.buffers.stencil.setOp(n.KEEP,n.KEEP,n.KEEP),r.buffers.stencil.setLocked(!0)}}class Ou extends Kn{constructor(){super();this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class Hu{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let i=e.getSize(new X);this._width=i.width,this._height=i.height,t=new ei(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:ni}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Bu(ha),this.copyPass.material.blending=On,this.timer=new $l}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);if(t!==-1)this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){if(this.timer.update(),e===void 0)e=this.timer.getDelta();let t=this.renderer.getRenderTarget(),i=!1;for(let n=0,r=this.passes.length;n<r;n++){let s=this.passes[n];if(s.enabled===!1)continue;if(s.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(n),s.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),s.needsSwap){if(i){let o=this.renderer.getContext(),a=this.renderer.state.buffers.stencil;a.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),a.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}if(Xh!==void 0){if(s instanceof Xh)i=!0;else if(s instanceof Ou)i=!1}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new X);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let i=this._width*this._pixelRatio,n=this._height*this._pixelRatio;this.renderTarget1.setSize(i,n),this.renderTarget2.setSize(i,n);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,n)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Gu extends Kn{constructor(e,t,i=null,n=null,r=null){super();this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=n,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new fe}render(e,t,i){let n=e.autoClear;e.autoClear=!1;let r,s;if(this.overrideMaterial!==null)s=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial;if(this.clearColor!==null)e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha());if(this.clearAlpha!==null)r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha);if(this.clearDepth==!0)e.clearDepth();if(e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0)e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil);if(e.render(this.scene,this.camera),this.clearColor!==null)e.setClearColor(this._oldClearColor);if(this.clearAlpha!==null)e.setClearAlpha(r);if(this.overrideMaterial!==null)this.scene.overrideMaterial=s;e.autoClear=n}}var B_={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new fe(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class fo extends Kn{constructor(e,t=1,i,n){super();this.strength=t,this.radius=i,this.threshold=n,this.resolution=e!==void 0?new X(e.x,e.y):new X(256,256),this.clearColor=new fe(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),s=Math.round(this.resolution.y/2);this.renderTargetBright=new ei(r,s,{type:ni,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let c=0;c<this.nMips;c++){let h=new ei(r,s,{type:ni,depthBuffer:!1});h.texture.name="UnrealBloomPass.h"+c,h.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(h);let u=new ei(r,s,{type:ni,depthBuffer:!1});u.texture.name="UnrealBloomPass.v"+c,u.texture.generateMipmaps=!1,this.renderTargetsVertical.push(u),r=Math.round(r/2),s=Math.round(s/2)}let o=B_;this.highPassUniforms=xr.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=n,this.highPassUniforms.smoothWidth.value=0.01,this.materialHighPassFilter=new si({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let a=[6,10,14,18,22];r=Math.round(this.resolution.x/2),s=Math.round(this.resolution.y/2);for(let c=0;c<this.nMips;c++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(a[c])),this.separableBlurMaterials[c].uniforms.invSize.value=new X(1/r,1/s),r=Math.round(r/2),s=Math.round(s/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=0.1;let l=[1,0.8,0.6,0.4,0.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new A(1,1,1),new A(1,1,1),new A(1,1,1),new A(1,1,1),new A(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=xr.clone(ha.uniforms),this.blendMaterial=new si({uniforms:this.copyUniforms,vertexShader:ha.vertexShader,fragmentShader:ha.fragmentShader,premultipliedAlpha:!0,blending:Ea,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new fe,this._oldClearAlpha=1,this._basic=new Mt,this._fsQuad=new ho(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),n=Math.round(t/2);this.renderTargetBright.setSize(i,n);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(i,n),this.renderTargetsVertical[r].setSize(i,n),this.separableBlurMaterials[r].uniforms.invSize.value=new X(1/i,1/n),i=Math.round(i/2),n=Math.round(n/2)}render(e,t,i,n,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();let s=e.autoClear;if(e.autoClear=!1,e.setClearColor(this.clearColor,0),r)e.state.buffers.stencil.setTest(!1);if(this.renderToScreen)this._fsQuad.material=this._basic,this._basic.map=i.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e);this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let o=this.renderTargetBright;for(let a=0;a<this.nMips;a++)this._fsQuad.material=this.separableBlurMaterials[a],this.separableBlurMaterials[a].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[a].uniforms.direction.value=fo.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[a]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[a].uniforms.colorTexture.value=this.renderTargetsHorizontal[a].texture,this.separableBlurMaterials[a].uniforms.direction.value=fo.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[a]),e.clear(),this._fsQuad.render(e),o=this.renderTargetsVertical[a];if(this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r)e.state.buffers.stencil.setTest(!0);if(this.renderToScreen)e.setRenderTarget(null),this._fsQuad.render(e);else e.setRenderTarget(i),this._fsQuad.render(e);e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=s}_getSeparableBlurMaterial(e){let t=[],i=e/3;for(let s=0;s<e;s++)t.push(0.39894*Math.exp(-0.5*s*s/(i*i))/i);let n=[],r=[];for(let s=1;s<e;s+=2){let o=t[s],a=s+1<e?t[s+1]:0,l=o+a;n.push((s*o+(s+1)*a)/l),r.push(l)}return new si({defines:{KERNEL_PAIRS:n.length},uniforms:{colorTexture:{value:null},invSize:{value:new X(0.5,0.5)},direction:{value:new X(0.5,0.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:n},gaussianWeights:{value:r}},vertexShader:`

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

				}`})}_getCompositeMaterial(e){return new si({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

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

				}`})}}fo.BlurDirectionX=new X(1,0);fo.BlurDirectionY=new X(0,1);var nc={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class zu extends Kn{constructor(){super();this.isOutputPass=!0,this.uniforms=xr.clone(nc.uniforms),this.material=new ro({name:nc.name,uniforms:this.uniforms,vertexShader:nc.vertexShader,fragmentShader:nc.fragmentShader}),this._fsQuad=new ho(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,i){if(this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping){if(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},ht.getTransfer(this._outputColorSpace)===St)this.material.defines.SRGB_TRANSFER="";if(this._toneMapping===mo)this.material.defines.LINEAR_TONE_MAPPING="";else if(this._toneMapping===go)this.material.defines.REINHARD_TONE_MAPPING="";else if(this._toneMapping===xo)this.material.defines.CINEON_TONE_MAPPING="";else if(this._toneMapping===ns)this.material.defines.ACES_FILMIC_TONE_MAPPING="";else if(this._toneMapping===yo)this.material.defines.AGX_TONE_MAPPING="";else if(this._toneMapping===Mo)this.material.defines.NEUTRAL_TONE_MAPPING="";else if(this._toneMapping===_o)this.material.defines.CUSTOM_TONE_MAPPING="";this.material.needsUpdate=!0}if(this.renderToScreen===!0)e.setRenderTarget(null),this._fsQuad.render(e);else{if(e.setRenderTarget(t),this.clear)e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil);this._fsQuad.render(e)}}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class ku extends ks{constructor(){super();this.name="RoomEnvironment",this.position.y=-3.5;let e=new Et;e.deleteAttribute("uv");let t=new ft({side:Kt}),i=new ft,n=new hr(16777215,900,28,2);n.position.set(0.418,16.199,0.3),this.add(n);let r=new ie(e,t);r.position.set(-0.757,13.219,0.717),r.scale.set(31.713,28.305,28.591),this.add(r);let s=new Rn(e,i,6),o=new ct;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-0.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),s.setMatrixAt(0,o.matrix),o.position.set(-5.607,-0.754,-0.758),o.rotation.set(0,0.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),s.setMatrixAt(1,o.matrix),o.position.set(6.167,0.857,7.803),o.rotation.set(0,0.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),s.setMatrixAt(2,o.matrix),o.position.set(-2.017,0.018,6.124),o.rotation.set(0,0.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),s.setMatrixAt(3,o.matrix),o.position.set(2.291,-0.756,-2.621),o.rotation.set(0,-0.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),s.setMatrixAt(4,o.matrix),o.position.set(-2.193,-0.369,-5.547),o.rotation.set(0,0.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),s.setMatrixAt(5,o.matrix),this.add(s);let a=new ie(e,fa(50));a.position.set(-16.116,14.37,8.208),a.scale.set(0.1,2.428,2.739),this.add(a);let l=new ie(e,fa(50));l.position.set(-16.109,18.021,-8.207),l.scale.set(0.1,2.425,2.751),this.add(l);let c=new ie(e,fa(17));c.position.set(14.904,12.198,-1.832),c.scale.set(0.15,4.265,6.331),this.add(c);let h=new ie(e,fa(43));h.position.set(-0.462,8.89,14.52),h.scale.set(4.38,5.441,0.088),this.add(h);let u=new ie(e,fa(20));u.position.set(3.235,11.486,-12.541),u.scale.set(2.5,2,0.1),this.add(u);let f=new ie(e,fa(100));f.position.set(0,20,0),f.scale.set(1,0.1,1),this.add(f)}dispose(){let e=new Set;this.traverse((t)=>{if(t.isMesh)e.add(t.geometry),e.add(t.material)});for(let t of e)t.dispose()}}function fa(e){return new Wl({color:0,emissive:16777215,emissiveIntensity:e})}var rc=new A;function Jn(e,t,i,n,r,s){let o=2*Math.PI*r/4,a=Math.max(s-2*r,0),l=Math.PI/4;rc.copy(t),rc[n]=0,rc.normalize();let c=0.5*o/(o+a),h=1-rc.angleTo(e)/l;if(Math.sign(rc[i])===1)return h*c;else return a/(o+a)+c+c*(1-h)}class qi extends Et{constructor(e=1,t=1,i=1,n=2,r=0.1){let s=n*2+1;r=Math.min(e/2,t/2,i/2,r);super(1,1,1,s,s,s);if(this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:i,segments:n,radius:r},s===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let a=new A,l=new A,c=new A(e,t,i).divideScalar(2).subScalar(r),h=this.attributes.position.array,u=this.attributes.normal.array,f=this.attributes.uv.array,m=h.length/6,g=new A,x=0.5/s;for(let d=0,p=0;d<h.length;d+=3,p+=2)switch(a.fromArray(h,d),l.copy(a),l.x-=Math.sign(l.x)*x,l.y-=Math.sign(l.y)*x,l.z-=Math.sign(l.z)*x,l.normalize(),h[d+0]=c.x*Math.sign(a.x)+l.x*r,h[d+1]=c.y*Math.sign(a.y)+l.y*r,h[d+2]=c.z*Math.sign(a.z)+l.z*r,u[d+0]=l.x,u[d+1]=l.y,u[d+2]=l.z,Math.floor(d/m)){case 0:g.set(1,0,0),f[p+0]=Jn(g,l,"z","y",r,i),f[p+1]=1-Jn(g,l,"y","z",r,t);break;case 1:g.set(-1,0,0),f[p+0]=1-Jn(g,l,"z","y",r,i),f[p+1]=1-Jn(g,l,"y","z",r,t);break;case 2:g.set(0,1,0),f[p+0]=1-Jn(g,l,"x","z",r,e),f[p+1]=Jn(g,l,"z","x",r,i);break;case 3:g.set(0,-1,0),f[p+0]=1-Jn(g,l,"x","z",r,e),f[p+1]=1-Jn(g,l,"z","x",r,i);break;case 4:g.set(0,0,1),f[p+0]=1-Jn(g,l,"x","y",r,e),f[p+1]=1-Jn(g,l,"y","x",r,t);break;case 5:g.set(0,0,-1),f[p+0]=Jn(g,l,"x","y",r,e),f[p+1]=1-Jn(g,l,"y","x",r,t);break}}static fromJSON(e){return new qi(e.width,e.height,e.depth,e.segments,e.radius)}}var Bn=window.FUNUI,$n=(e)=>document.querySelector(e),Es=matchMedia("(pointer:coarse)").matches||innerWidth<820;if(Es)document.body.classList.add("touch");var Un=$n("#c"),hn=new Wh({canvas:Un,antialias:!Es,powerPreference:"high-performance"}),Qu=Math.min(devicePixelRatio||1,Es?1.5:1.75),br=Qu;hn.setPixelRatio(br);hn.toneMapping=ns;hn.toneMappingExposure=1.05;var ui=new ks;ui.background=new fe(329498);ui.fog=new Go(329498,40,95);var AS=new ys(hn);ui.environment=AS.fromScene(new ku,0.04).texture;ui.environmentIntensity=0.18;var Ji=new ti(68,1,0.05,120),Er=null;function sd(){let e=innerWidth,t=innerHeight;if(hn.setSize(e,t,!1),Ji.aspect=e/t,Ji.fov=e/t<1?80:68,Ji.updateProjectionMatrix(),Er)Er.setSize(e,t)}if(!Es)Er=new Hu(hn),Er.addPass(new Gu(ui,Ji)),Er.addPass(new fo(new X(innerWidth,innerHeight),0.2,0.45,1)),Er.addPass(new zu);addEventListener("resize",sd);sd();var Ze=(()=>{let e=7;return()=>(e=e*16807%2147483647)/2147483647})();function $t(e,t){let i=document.createElement("canvas");return i.width=e,i.height=t,i}function lf(e,t=1,i=1,n=!0){let r=new Gi(e);if(r.wrapS=r.wrapT=un,r.repeat.set(t,i),r.anisotropy=8,n)r.colorSpace=yt;return r}function Ai(e,t,i,n){let r=e.getImageData(0,0,t,i),s=r.data;for(let o=0;o<s.length;o+=4){let a=(Ze()-0.5)*n;s[o]+=a,s[o+1]+=a,s[o+2]+=a}e.putImageData(r,0,0)}var ai={};ai.concrete=(()=>{let e=$t(512,512),t=e.getContext("2d");t.fillStyle="#7d7e82",t.fillRect(0,0,512,512);for(let i=0;i<40;i++){let n=t.createRadialGradient(Ze()*512,Ze()*512,5,Ze()*512,Ze()*512,120),r=Ze()*512,s=Ze()*512,o=t.createRadialGradient(r,s,5,r,s,90+Ze()*90);o.addColorStop(0,Ze()>0.5?"rgba(255,255,255,.07)":"rgba(0,0,0,.09)"),o.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=o,t.fillRect(0,0,512,512)}return Ai(t,512,512,22),t.strokeStyle="rgba(0,0,0,.35)",t.lineWidth=2,t.strokeRect(1,1,510,510),e})();ai.parquet=(()=>{let e=$t(512,512),t=e.getContext("2d"),i=256,n=42;for(let r=0;r<12;r++){let s=r%3*85;for(let o=-1;o<3;o++){let a=24+Ze()*6,l=28+Ze()*12;t.fillStyle=`hsl(${a},48%,${l}%)`,t.fillRect(o*256+s,r*42,254,40);for(let c=0;c<14;c++){t.strokeStyle=`rgba(30,12,0,${0.05+Ze()*0.1})`,t.lineWidth=1,t.beginPath();let h=r*42+Ze()*42;t.moveTo(o*256+s,h),t.lineTo(o*256+s+256,h+(Ze()-0.5)*3),t.stroke()}}}return Ai(t,512,512,10),e})();ai.brick=(()=>{let e=$t(512,512),t=e.getContext("2d");t.fillStyle="#3a2c28",t.fillRect(0,0,512,512);let i=128,n=42;for(let r=0;r<12;r++)for(let s=-1;s<5;s++){let o=r%2*64,a=8+Ze()*8,l=30+Ze()*14;t.fillStyle=`hsl(${a},${48+Ze()*14}%,${l}%)`,t.fillRect(s*i+o+3,r*n+3,i-6,n-6)}return Ai(t,512,512,26),e})();ai.carpet=(()=>{let e=$t(256,256),t=e.getContext("2d");return t.fillStyle="#857f76",t.fillRect(0,0,256,256),Ai(t,256,256,26),e})();ai.slats=(()=>{let e=$t(512,512),t=e.getContext("2d");for(let i=0;i<16;i++)t.fillStyle=`hsl(${28+Ze()*5},38%,${24+Ze()*8}%)`,t.fillRect(i*32,0,28,512),t.fillStyle="#0c0b0b",t.fillRect(i*32+28,0,4,512);return Ai(t,512,512,10),e})();ai.oak=(()=>{let e=$t(512,512),t=e.getContext("2d"),i=512,n=128;for(let r=0;r<4;r++){let s=r%2*200;for(let o=-1;o<2;o++){t.fillStyle=`hsl(${32+Ze()*4},${28+Ze()*6}%,${66+Ze()*6}%)`,t.fillRect(o*512+s,r*128,510,126);for(let a=0;a<26;a++){t.strokeStyle=`rgba(90,60,30,${0.04+Ze()*0.08})`,t.beginPath();let l=r*128+Ze()*128;t.moveTo(o*512+s,l),t.lineTo(o*512+s+512,l+(Ze()-0.5)*6),t.stroke()}}}return Ai(t,512,512,8),e})();ai.greige=(()=>{let e=$t(256,256),t=e.getContext("2d");return t.fillStyle="#a3a5ab",t.fillRect(0,0,256,256),Ai(t,256,256,8),e})();ai.graphite=(()=>{let e=$t(256,256),t=e.getContext("2d");return t.fillStyle="#26272c",t.fillRect(0,0,256,256),Ai(t,256,256,10),e})();ai.plaster=(()=>{let e=$t(256,256),t=e.getContext("2d");return t.fillStyle="#d9d8d4",t.fillRect(0,0,256,256),Ai(t,256,256,10),e})();ai.darkwall=(()=>{let e=$t(256,256),t=e.getContext("2d");return t.fillStyle="#25252c",t.fillRect(0,0,256,256),Ai(t,256,256,12),e})();ai.pvc=(()=>{let e=$t(256,256),t=e.getContext("2d");return t.fillStyle="#2f6b4f",t.fillRect(0,0,256,256),Ai(t,256,256,12),e})();ai.rubber=(()=>{let e=$t(256,256),t=e.getContext("2d");return t.fillStyle="#23262f",t.fillRect(0,0,256,256),Ai(t,256,256,30),e})();ai.tile=(()=>{let e=$t(256,256),t=e.getContext("2d");return t.fillStyle="#e4e4e2",t.fillRect(0,0,256,256),t.strokeStyle="#a9a9a6",t.lineWidth=3,t.strokeRect(0,0,256,256),Ai(t,256,256,8),e})();function Rr(e,t,i=0.85,n=0,r=1,s=1,o={}){let a=lf(ai[e],r/t,s/t);return new ft(Object.assign({map:a,bumpMap:a,bumpScale:e==="brick"?3:0.8,roughness:i,metalness:n},o))}var k=(e,t=0.6,i=0,n)=>new ft(Object.assign({color:e,roughness:t,metalness:i},n||{})),Wt=(e,t=1)=>new ft({color:0,emissive:e,emissiveIntensity:t,toneMapped:!0});function od(e,t,i,n=0,r=0,s=0,o=0,a=!0){let l=new ie(t,i);return l.position.set(n,r,s),l.rotation.y=o,l.castShadow=a,l.receiveShadow=!0,e.add(l),l}var B=(e,t,i,n,r,s,o,a,l=0)=>od(e,new Et(t,i,n),r,s,o,a,l);var ot=(e,t,i,n,r,s,o,a,l=24)=>od(e,new wt(t,i,n,l),r,s,o,a);function _n(e,t,i,n,r,s,o,a,l=0,c="bold 120px Arial Black, Arial",h,u=!0){let f=$t(1024,Math.round(1024*n/i)),m=f.getContext("2d");if(h)m.fillStyle=h,m.fillRect(0,0,f.width,f.height);m.font=c,m.textAlign="center",m.textBaseline="middle",m.shadowColor=r,m.shadowBlur=28,m.fillStyle=r,m.fillText(t,f.width/2,f.height/2),m.shadowBlur=8,m.fillText(t,f.width/2,f.height/2);let g=new Gi(f);g.colorSpace=yt;let x=new ie(new Ht(i,n),new Mt({map:g,transparent:!h,toneMapped:!1}));if(x.position.set(s,o,a),x.rotation.y=l,e.add(x),!u)return x;let d=new hr(new fe(r),3,4,2);return d.position.set(s,o,a),d.position.add(new A(Math.sin(l),0,Math.cos(l)).multiplyScalar(0.4)),e.add(d),x}function Vi(e,t,i,n,r,s,o=12){let a=new hr(r,s,o,2);return a.position.set(t,i,n),e.add(a),a}var Pt=new qe;ui.add(Pt);var $i=new qe;Pt.add($i);var xc=[];function Qn(e,t,i,n,r,s,o,a=[],l=0.25,c=!1){let h=n-t,u=r-i,f=Math.hypot(h,u),m=-Math.atan2(u,h),g=[],x=0;a.sort((p,_)=>p[0]-_[0]);for(let[p,_]of a){if(p>x)g.push([x,p,0]);g.push([p,_,1]),x=_}if(x<f)g.push([x,f,0]);for(let[p,_,y]of g){let v=_-p,T=t+h/f*(p+_)/2,w=i+u/f*(p+_)/2,M=y?2.2:0,b=y?s-2.2:s;if(b>0.01){let C=new ie(new Et(v,b,l),o(v,b));if(C.position.set(T,M+b/2,w),C.rotation.y=m,C.castShadow=C.receiveShadow=!0,e.add(C),c)xc.push(C)}if(y)for(let C of[p,_]){let F=t+h/f*C,D=i+u/f*C,V=new ie(new Et(0.1,2.2,l+0.06),k(1842208,0.6));V.position.set(F,1.1,D),V.rotation.y=m,e.add(V)}}let d=new ie(new Et(f,0.12,l+0.03),k(1381658,0.7));d.position.set((t+n)/2,0.06,(i+r)/2),d.rotation.y=m,e.add(d)}function Mc(e,t,i){let n=new Li(t.map((o)=>new X(o[0],-o[1]))),r=new no(n);r.rotateX(-Math.PI/2);let s=new ie(r,i);return s.receiveShadow=!0,e.add(s),s}function Sa(e,t,i){let n=new Li(e.map((o)=>new X(o[0],-o[1]))),r=new no(n);r.rotateX(-Math.PI/2),i.side=Nt;let s=new ie(r,i);s.position.y=t,$i.add(s)}ai.carpetDark=(()=>{let e=$t(256,256),t=e.getContext("2d");t.fillStyle="#1b1c22",t.fillRect(0,0,256,256);for(let i=0;i<6000;i++){let n=20+Ze()*22;t.fillStyle=`rgba(${n},${n},${n+7},.5)`,t.fillRect(Ze()*256,Ze()*256,1+Ze()*1.4,1+Ze()*2.2)}return Ai(t,256,256,12),e})();ai.fabric=(()=>{let e=$t(256,256),t=e.getContext("2d");t.fillStyle="#3b3e46",t.fillRect(0,0,256,256),t.strokeStyle="rgba(0,0,0,.18)",t.lineWidth=1;for(let i=0;i<256;i+=4)t.beginPath(),t.moveTo(i,0),t.lineTo(i,256),t.stroke(),t.beginPath(),t.moveTo(0,i),t.lineTo(256,i),t.stroke();return Ai(t,256,256,14),e})();ai.plywood=(()=>{let e=$t(512,1024),t=e.getContext("2d"),i=t.createLinearGradient(0,0,512,0);i.addColorStop(0,"#c7a368"),i.addColorStop(0.5,"#d2b077"),i.addColorStop(1,"#c39d62"),t.fillStyle=i,t.fillRect(0,0,512,1024);for(let r=0;r<380;r++){let s=Ze()*512,o=Ze()*1024;t.strokeStyle=`rgba(${95+Ze()*40},${60+Ze()*30},25,${0.05+Ze()*0.12})`,t.lineWidth=0.6+Ze()*1.6,t.beginPath(),t.moveTo(s,o),t.bezierCurveTo(s+Ze()*16-8,o+120,s+Ze()*16-8,o+260,s+Ze()*10-5,o+380+Ze()*200),t.stroke()}for(let r=0;r<4;r++){let s=Ze()*512,o=Ze()*1024;for(let a=3;a<22;a+=4)t.strokeStyle=`rgba(90,55,20,${0.25-a/120})`,t.lineWidth=1.5,t.beginPath(),t.ellipse(s,o,a*0.7,a*1.5,0,0,7),t.stroke()}let n=83.9344262295082;for(let r=0;r<6;r++)for(let s=0;s<12;s++){let o=38+r*n,a=40+s*n;if(o>500)continue;t.fillStyle="rgba(30,18,8,.85)",t.beginPath(),t.arc(o,a,5,0,7),t.fill(),t.fillStyle="rgba(255,230,190,.35)",t.beginPath(),t.arc(o-1,a-1,1.6,0,7),t.fill()}return t.strokeStyle="rgba(40,24,10,.7)",t.lineWidth=3,t.strokeRect(1,1,510,1022),Ai(t,512,1024,10),e})();ai.matBlue=(()=>{let e=$t(256,512),t=e.getContext("2d");return t.fillStyle="#244f9e",t.fillRect(0,0,256,512),Ai(t,256,512,26),t.strokeStyle="rgba(8,16,40,.9)",t.lineWidth=6,t.strokeRect(2,2,252,508),t.strokeStyle="rgba(160,190,255,.35)",t.lineWidth=2,t.setLineDash([7,6]),t.strokeRect(12,12,232,488),e})();ai.steel=(()=>{let e=$t(128,128),t=e.getContext("2d");return t.fillStyle="#5b6068",t.fillRect(0,0,128,128),Ai(t,128,128,18),e})();var Tt=new qe;Pt.add(Tt);var en=3.2,V_=[[-8.8,-3.85],[8.8,-3.85],[8.8,3.85],[-8.8,3.85]],W_=[[-3.9,-9.4],[4.3,-9.4],[4.3,-3.85],[-3.9,-3.85]],ws;function cf(e,t,i){let n=Rr(e,t,i,0,1,1);return n.map.repeat.set(1/t,1/t),n.bumpMap=n.map,n}var uo=(e,t)=>Rr("darkwall",1.4,0.9,0,e,t),RS=(e,t)=>Rr("graphite",1.4,0.85,0,e,t),CS=(e,t)=>Rr("slats",1,0.7,0,e,t),X_=cf("carpetDark",0.6,1);Mc(Tt,V_,X_);Mc(Tt,W_,X_);Qn(Tt,-8.8,-3.85,-3.9,-3.85,en,uo);Qn(Tt,-3.9,-3.85,-3.9,-9.4,en,uo);Qn(Tt,-3.9,-9.4,4.3,-9.4,en,CS);Qn(Tt,4.3,-9.4,4.3,-3.85,en,uo);Qn(Tt,4.3,-3.85,8.8,-3.85,en,uo);Qn(Tt,8.8,-3.85,8.8,3.85,en,RS);Qn(Tt,8.8,3.85,-8.8,3.85,en,uo,[[9.8,11.6]],0.25,!0);Qn(Tt,-8.8,3.85,-8.8,-3.85,en,uo,[[2.65,4.85]]);for(let[e,t]of[[-3.9,-3.85],[4.3,-3.85]])B(Tt,0.5,en,0.5,k(2763569,0.7),e,en/2,t),B(Tt,0.54,0.12,0.54,k(855312,0.6),e,0.06,t);var Y_=()=>k(1908260,0.9);Sa(V_,en,Y_());Sa(W_,en,Y_());B($i,8.6,0.34,0.55,k(1381914,0.85),0.2,en-0.17,-3.85);for(let[e,t,i,n,r]of[[0,-3.62,17.2,0.06,6966527],[0,3.62,17.2,0.06,6966527],[-8.58,0,0.06,7.2,6966527],[8.58,0,0.06,7.2,6966527],[0.2,-9.18,8,0.06,16762512],[-3.68,-6.6,0.06,5.2,16762512],[4.08,-6.6,0.06,5.2,16762512]])B($i,i,0.025,n,Wt(r,3.5),e,en-0.015,t);for(let e=0;e<6;e++)for(let t of[-1.8,1.8])ot($i,0.07,0.07,0.02,Wt(16773856,8),-7+e*2.8+1,en-0.02,t);for(let e=0;e<3;e++)for(let t of[-5.5,-8])ot($i,0.07,0.07,0.02,Wt(16773856,8),-2.4+e*2.6+0.2,en-0.02,t);ui.add(new jl(16777215,0.34));hn.toneMappingExposure=0.8;ui.environmentIntensity=0.3;Vi(Tt,0.2,2.8,0,16773598,14,14);Vi(Tt,-6.2,2.8,-2.2,16773340,10,9);Vi(Tt,-6.2,2.8,2.2,16773340,10,9);Vi(Tt,0.2,2.9,-6.6,16774116,16,10);Vi(Tt,2.9,2.5,2.5,16761466,10,8);Vi(Tt,2.9,0.35,1.6,11554047,3,4);Vi(Tt,7.3,2.6,0,9071871,5,7);Vi(Tt,-0.6,2.7,0.4,3725567,3,6);var ga=(e,t,i,n,r=0,s=0,o=0,a=Pt)=>{let l=new ie(new Et(e,t,i),n);return l.position.set(r,s,o),a.add(l),l};function q_(e,t,i,n){let r=document.createElement("canvas");r.width=e,r.height=t,i(r.getContext("2d"),e,t);let s=new Gi(r);if(s.colorSpace=yt,s.anisotropy=8,n)s.wrapS=s.wrapT=un,s.repeat.set(n[0],n[1]);return s}var hf=(e,t={})=>new ft({color:e,roughness:t.r??0.6,metalness:t.m??0.1,emissive:t.e??0,emissiveIntensity:t.ei??1,side:t.side}),Z_=(e,t=1)=>new Mt({color:new fe(e).multiplyScalar(t),toneMapped:!1});function K_(e,t,i,n,r,s,o,a=0){let l=new ie(new Ht(e,t),new Mt({map:i,transparent:!0,toneMapped:!1}));return l.position.set(r,s,o),l.rotation.y=a,n.add(l),l}var va=q_,PS=hf;var ad=K_,ff=[];function IS(e,{w:t=1024,h:i=384,font:n="900 250px Inter,Arial,sans-serif",color:r="#3dff9a",fill:s="#c8ffe2",lw:o=10,blur:a=30}={}){return va(t,i,(l,c,h)=>{l.clearRect(0,0,c,h),l.font=n,l.textAlign="center",l.textBaseline="middle",l.shadowColor=r,l.shadowBlur=a,l.lineWidth=o,l.strokeStyle=r,l.lineJoin="round",l.strokeText(e,c/2,h/2+6),l.shadowBlur=0,l.fillStyle=s,l.fillText(e,c/2,h/2+6)})}function LS(e,t="#3dff9a",i=1){let n=IS(e,{w:768,h:192,font:"800 96px Inter,Arial,sans-serif",color:t,fill:"#ffffff",lw:6,blur:18}),r=new wl(new Xs({map:n,transparent:!0,depthWrite:!1,toneMapped:!1}));return r.scale.set(2.4*i,0.6*i,1),r}(function(){let e=ga,t=q_,i=hf,n=Z_,r=K_,s={games:[["VAL","Valorant","#ff4655","#fff"],["LoL","League","#1b3a8a","#e9c46a"],["CS2","CS2","#e8793a","#1a0f05"],["RL","Rocket League","#1e7bff","#ff9a4a"],["ARK","Arkheron","#1fb89a","#032a22"],["S2","SMITE 2","#6a3ad0","#ffd68a"]]},o=new qe;o.position.set(8.19,0,0),o.rotation.y=-Math.PI/2,Tt.add(o),ws=o;let a=i(790562,{r:0.4,m:0.4});e(1.9,0.05,0.85,a,0,0.75,0,o),[[-0.9,-0.38],[0.9,-0.38],[-0.9,0.38],[0.9,0.38]].forEach(([L,N])=>e(0.05,0.75,0.05,a,L,0.375,N,o)),e(1.9,0.015,0.02,n(3824895,1.4),0,0.72,0.43,o);let l=t(512,300,(L,N,j)=>{L.fillStyle="#12062a",L.fillRect(0,0,N,j),L.strokeStyle="#ff4fa6",L.globalAlpha=0.5,L.lineWidth=2,L.beginPath(),L.moveTo(20,40),L.quadraticCurveTo(70,80,40,140),L.moveTo(490,30),L.quadraticCurveTo(440,90,470,150),L.stroke(),L.globalAlpha=1,L.font="900 100px Inter,Arial",L.textAlign="center",L.shadowColor="#ff4f8a",L.shadowBlur=24,L.lineWidth=6,L.strokeStyle="#ff4f8a",L.strokeText("FONGER",N/2,180),L.shadowBlur=0,L.fillStyle="#2a0a2e",L.fillText("FONGER",N/2,180)}),c=s&&s.games||[],h=t(512,300,(L,N,j)=>{let z=L.createLinearGradient(0,0,N,j);z.addColorStop(0,"#10163f"),z.addColorStop(0.55,"#2a1a6e"),z.addColorStop(1,"#5a1f78"),L.fillStyle=z,L.fillRect(0,0,N,j),c.forEach((H,Y)=>{let ae=60+Y%3*150,G=40+Math.floor(Y/3)*110;L.fillStyle=H[2],L.beginPath(),L.roundRect(ae,G,90,90,20),L.fill(),L.fillStyle=H[3],L.font="900 30px Inter,Arial",L.textAlign="center",L.fillText(H[0],ae+45,G+56)}),L.fillStyle="rgba(5,6,15,.9)",L.fillRect(0,j-26,N,26),L.fillStyle="#38e8ff",L.fillRect(10,j-20,14,14)});function u(L,N,j,z,H,Y,ae,G=0,Q=0,Me=0){new ms().load(L,(me)=>{me.colorSpace=yt,me.anisotropy=8;let Fe=new ie(new Ht(N,j*(me.image.height/me.image.width)/(j/N)),new Mt({map:me,transparent:!0,toneMapped:!1}));Fe.position.set(H,Y,ae),Fe.rotation.set(G,Q,Me),z.add(Fe)},void 0,()=>{})}let f=i(460814,{r:0.55,m:0.25}),m=i(724246,{r:0.28,m:0.6}),g=i(15329774,{r:0.45,m:0.05}),x=i(1382175,{m:0.8,r:0.35});function d(L,N,j){let Y=new qe;Y.position.set(L,0.775,-0.2),Y.rotation.y=N,o.add(Y);let ae=new ie(new qi(0.56,0.32,0.025,3,0.006),m);ae.position.y=0.3,Y.add(ae),r(0.542,0.3,j,Y,0,0.3,0.0135),e(0.03,0.006,0.001,i(1777451,{m:0.8}),0,0.146,0.0135,Y);let G=new ie(new Vr(0.0035,8),n(4063130,2));G.position.set(0.2,0.145,0.0135),Y.add(G);let Q=new ie(new wt(0.012,0.014,0.17,12),g);Q.position.set(0,0.2,-0.03),Y.add(Q);let Me=new ie(new wt(0.11,0.115,0.012,40),g);Me.position.set(0,0.006,-0.02),Y.add(Me)}function p(L,N,j){let Y=new qe;Y.position.set(L,0.775,-0.2),Y.rotation.y=N,o.add(Y);let ae=new ie(new qi(0.62,0.355,0.028,3,0.006),m);ae.position.y=0.36,Y.add(ae),e(0.28,0.2,0.03,f,0,0.36,-0.028,Y),r(0.604,0.33699999999999997,j,Y,0,0.36,0.0155),e(0.03,0.006,0.001,i(1777451,{m:0.8}),0,0.1875,0.0155,Y);let G=new qe;G.position.set(L,0.775,-0.405),o.add(G),e(0.06,0.05,0.05,x,0,-0.012,0,G),e(0.05,0.012,0.085,x,0,-0.035,0,G);let Q=new ie(new wt(0.014,0.014,0.42,16),x);Q.position.set(0,0.21,0),G.add(Q);let Me=new ie(new wt(0.02,0.02,0.03,16),x);Me.position.set(0,0.4,0),G.add(Me),e(0.03,0.022,0.12,x,0,0.4,0.06,G);let me=new ie(new wt(0.017,0.017,0.03,16),x);me.position.set(0,0.4,0.12),G.add(me),e(0.03,0.02,0.06,x,0,0.4,0.15,G),e(0.1,0.1,0.012,x,0,0.36,-0.05,Y)}d(-0.52,0.3,l),p(0.12,-0.04,h);{let L=new ie(new wt(0.045,0.047,0.01,32),g);L.position.set(-0.02,0.78,-0.08),o.add(L);let N=new ie(new io(0.028,0.033,32),n(8019199,1.2));N.rotation.x=-Math.PI/2,N.position.set(-0.02,0.7855,-0.08),o.add(N);let j=new ie(new wt(0.03,0.03,0.15,24),i(657933,{r:0.4,m:0.6}));j.position.set(0.5,0.85,-0.14),o.add(j);let z=new ie(new wt(0.031,0.031,0.012,24),x);z.position.set(0.5,0.92,-0.14),o.add(z)}let _=t(1024,440,(L,N,j)=>{L.fillStyle="#0c0d11",L.fillRect(0,0,N,j),L.strokeStyle="#2b2e3a",L.lineWidth=4,L.setLineDash([12,9]),L.strokeRect(12,12,N-24,j-24),L.setLineDash([]),L.font="700 64px Inter,Arial",L.fillStyle="#9aa0b4",L.textAlign="right",L.fillText("Logitech G",N-52,j-44)}),y=new ie(new Ht(0.9,0.38),new ft({map:_,roughness:0.95}));y.rotation.x=-Math.PI/2,y.position.set(-0.1,0.7765,0.2),o.add(y);let v=t(1480,570,(L,N,j)=>{L.fillStyle="#0a0b10",L.fillRect(0,0,N,j);let z=76,H=40,Y=40,ae="#6a4cff",G=(me,Fe,we,ut,Ue=1)=>{let Oe=H+me*z+3,pt=Y+Fe*z+3,he=we*z-6,de=Ue*z-6;L.shadowColor=ae,L.shadowBlur=16,L.fillStyle="#12141c",L.beginPath(),L.roundRect(Oe,pt,he,de,10),L.fill(),L.shadowBlur=0,L.strokeStyle="rgba(106,76,255,.65)",L.lineWidth=2,L.stroke(),L.fillStyle="#c4b8ff",L.font="600 21px Inter,Arial",L.textAlign="center",L.textBaseline="middle",L.fillText(ut,Oe+he/2,pt+de/2+1)},Q=(me,Fe,we=0)=>{let ut=we;Fe.forEach(([Ue,Oe])=>{if(Ue!==null)G(ut,me,Oe,Ue);ut+=Oe})};Q(0,[["Esc",1],[null,1],["F1",1],["F2",1],["F3",1],["F4",1],[null,0.5],["F5",1],["F6",1],["F7",1],["F8",1],[null,0.5],["F9",1],["F10",1],["F11",1],["F12",1],[null,0.25],["Prt",1],["Scr",1],["Pau",1]]);let Me="1234567890".split("");Q(1.5,[["`",1],...Me.map((me)=>[me,1]),["-",1],["=",1],["⌫",2],[null,0.25],["Ins",1],["Hm",1],["Pg↑",1]]),Q(2.5,[["Tab",1.5],..."QWERTYUIOP".split("").map((me)=>[me,1]),["[",1],["]",1],["\\",1.5],[null,0.25],["Del",1],["End",1],["Pg↓",1]]),Q(3.5,[["Caps",1.75],..."ASDFGHJKL".split("").map((me)=>[me,1]),[";",1],["'",1],["Enter",2.25]]),Q(4.5,[["Shift",2.25],..."ZXCVBNM".split("").map((me)=>[me,1]),[",",1],[".",1],["/",1],["Shift",2.75],[null,1.25],["↑",1]]),Q(5.5,[["Ctrl",1.25],["Win",1.25],["Alt",1.25],["",6.25],["Alt",1.25],["Fn",1.25],["Menu",1.25],["Ctrl",1.25],[null,0.25],["←",1],["↓",1],["→",1]])}),T=new qe;T.position.set(-0.2,0.7765,0.22),o.add(T);let w=new ie(new qi(0.365,0.016,0.142,3,0.006),i(789778,{r:0.4,m:0.55}));w.position.y=0.008,T.add(w);let M=new ie(new Ht(0.352,0.13285621621621618),new ft({map:v,emissiveMap:v,emissive:16777215,emissiveIntensity:0.55,roughness:0.6}));M.rotation.x=-Math.PI/2,M.position.y=0.0166,T.add(M),u("logos/razer.png",0.03,0.03,T,0.14,0.0168,-0.06,-Math.PI/2);let b=new qe;b.position.set(0.27,0.7775,0.21),b.rotation.y=0.12,o.add(b);{let L=new mn(1,40,28),N=L.attributes.position;for(let H=0;H<N.count;H++){let Y=N.getX(H),ae=N.getY(H),G=N.getZ(H);ae=Math.max(ae,0);let Q=G*0.5+0.5,Me=0.0225+0.0095*Q;N.setXYZ(H,Y*Me*(1-0.18*Math.max(0,ae)),ae*(0.0115+0.013*Q),G*0.0635)}L.computeVertexNormals(),b.add(new ie(L,i(657932,{r:0.62,m:0.1}))),e(0.0014,0.0008,0.034,i(0),0,0.0185,-0.028,b);let j=new ie(new wt(0.0045,0.0045,0.006,14),i(2763830,{r:0.5,m:0.5}));j.rotation.z=Math.PI/2,j.position.set(0,0.0215,-0.026),b.add(j);let z=new ie(new Vr(0.0025,10),n(4063130,0.9));z.rotation.x=-Math.PI/2,z.position.set(0,0.0195,0.01),b.add(z),u("logos/logitech-g.png",0.012,0.012,b,0,0.0245,0.032,-Math.PI/2)}let C=new qe;C.position.set(-0.7,0.775,0.26),C.rotation.y=0.5,o.add(C);let F=i(14252331,{r:0.28,m:0.85}),D=i(789518,{r:0.9});{let L=new qe;L.position.y=0.05,L.rotation.x=Math.PI/2-0.15,C.add(L);let N=new ie(new In(0.088,0.0085,10,40,Math.PI),i(657932,{r:0.7}));N.position.y=0.02,L.add(N),[-1,1].forEach((j)=>{let z=new ie(new wt(0.047,0.044,0.03,36),F);z.rotation.z=Math.PI/2,z.position.set(j*0.093,-0.06,0),L.add(z);let H=new ie(new In(0.04,0.005,8,32),i(789518,{m:0.7,r:0.35}));H.rotation.y=Math.PI/2,H.position.set(j*0.108,-0.06,0),L.add(H);let Y=new ie(new wt(0.048,0.048,0.022,36),D);Y.rotation.z=Math.PI/2,Y.position.set(j*0.075,-0.06,0),L.add(Y)})}let V=ff,ee="n",I=new qe;I.position.set(0.83,1.025,-0.15),I.rotation.y=0.28,o.add(I);{let z=i(658194,{r:0.4,m:0.55});e(0.22,0.014,0.46,i(658194,{r:0.6,m:0.4}),0,0.243,0,I),e(0.22,0.012,0.46,z,0,-0.244,0,I),e(0.01,0.5,0.46,z,0.105,0,0,I),e(0.22,0.5,0.01,i(460813),0,0,-0.225,I),[-1,1].forEach((Ue)=>e(0.012,0.5,0.012,z,-0.104,0,Ue*0.224,I)),e(0.22,0.5,0.012,i(723988,{r:0.5,m:0.4}),0,0,0.224,I);let H=t(256,256,(Ue,Oe,pt)=>{Ue.fillStyle="#17104a",Ue.fillRect(0,0,Oe,pt);let he=Ue.createRadialGradient(Oe/2,pt/2,10,Oe/2,pt/2,Oe/2);he.addColorStop(0,"#9a7bff"),he.addColorStop(1,"#4a2cff"),Ue.fillStyle=he,Ue.fillRect(0,0,Oe,pt),Ue.strokeStyle="#1a0f5a",Ue.lineWidth=3;let de=14;for(let ge=-1;ge<14;ge++)for(let Le=-1;Le<14;Le++){let Re=Le*de*1.75+ge%2*de*0.87,Ye=ge*de*1.5;Ue.beginPath();for(let Je=0;Je<6;Je++){let dt=Math.PI/3*Je+Math.PI/6;Ue.lineTo(Re+Math.cos(dt)*de,Ye+Math.sin(dt)*de)}Ue.closePath(),Ue.stroke()}Ue.fillStyle="#05061a",Ue.beginPath();for(let ge=0;ge<6;ge++){let Le=Math.PI/3*ge;Ue.lineTo(Oe/2+Math.cos(Le)*34,pt/2+Math.sin(Le)*34)}Ue.closePath(),Ue.fill()});e(0.13,0.46,0.004,i(526618),0.02,0,0.2305,I),[0.155,0,-0.155].forEach((Ue)=>{let Oe=new ie(new Vr(0.064,40),new Mt({map:H,toneMapped:!1,color:new fe(1.1,1.1,1.4)}));Oe.position.set(0.02,Ue,0.23320000000000002),I.add(Oe)});let Y=-0.08,ae=e(0.006,0.44,0.36,i(1053471,{r:0.6,m:0.3}),0.08,0,-0.03,I),G=new ie(new wt(0.036,0.036,0.03,32),i(658194,{r:0.3,m:0.7}));G.rotation.z=Math.PI/2,G.position.set(Y+0.03,0.09,0.07),I.add(G);let Q=new ie(new io(0.019,0.03,32),n(4877567,1.8));Q.rotation.y=-Math.PI/2,Q.position.set(Y+0.0125,0.09,0.07),I.add(Q);let Me=(Ue)=>I.add(new ie(new cr(new Yn(Ue.map((Oe)=>new A(...Oe))),16,0.0075,8),i(14672878,{r:0.5})));Me([[Y+0.03,0.12,0.09],[Y+0.03,0.2,0.1],[Y+0.03,0.235,0.05]]),Me([[Y+0.03,0.12,0.05],[Y+0.03,0.2,0],[Y+0.03,0.235,-0.04]]);let me=new ie(new qi(0.04,0.05,0.3,2,0.006),i(658192,{r:0.35,m:0.7}));me.position.set(Y+0.03,-0.06,0.02),I.add(me),e(0.004,0.004,0.26,n(16054015,0.9),Y+0.008,-0.06,0.02,I),[0,0.016].forEach((Ue)=>e(0.012,0.11,0.008,n(6966527,1.2),Y+0.03,0.13,-0.09-Ue,I));let Fe=e(0.04,0.03,0.3,i(723986,{r:0.5,m:0.5}),0,0.22,-0.02,I),we=new ie(new Ht(0.44,0.48),new zi({color:659488,transparent:!0,opacity:0.2,roughness:0.04,clearcoat:1,side:Nt,depthWrite:!1}));we.rotation.y=-Math.PI/2,we.position.set(-0.108,0,0),I.add(we),((Ue,Oe)=>e(0.006,Oe,0.46,z,-0.107,Ue,0,I))(0.245,0.012)}{let L=new hr(5913855,3.2,3,1.6);L.position.set(0.85,1.2,-0.6),o.add(L)}let J=new qe;J.position.set(0.05,0,0.9),J.rotation.y=0.22,o.add(J);{let L=i(856356,{r:0.55,m:0.05}),N=i(1716106,{r:0.5,e:662118,ei:0.12}),j=i(460813,{r:0.4,m:0.7}),z=new ie(new qi(0.52,0.09,0.5,4,0.04),L);z.position.y=0.5,J.add(z),[-1,1].forEach((G)=>{let Q=new ie(new qi(0.06,0.1,0.46,3,0.025),N);Q.position.set(G*0.25,0.54,0),J.add(Q)});let H=new ie(new qi(0.5,0.72,0.09,4,0.04),L);H.position.set(0,0.92,0.26),H.rotation.x=-0.12,J.add(H),[-1,1].forEach((G)=>{let Q=new ie(new qi(0.07,0.5,0.1,3,0.03),N);Q.position.set(G*0.235,0.88,0.235),Q.rotation.x=-0.12,J.add(Q)});let Y=new ie(new qi(0.26,0.17,0.08,3,0.04),N);Y.position.set(0,1.28,0.3),Y.rotation.x=-0.12,J.add(Y),[-1,1].forEach((G)=>{e(0.04,0.2,0.04,j,G*0.3,0.68,0.02,J);let Q=new ie(new qi(0.07,0.03,0.26,2,0.012),L);Q.position.set(G*0.3,0.79,-0.03),J.add(Q)});let ae=new ie(new wt(0.03,0.035,0.34,12),j);ae.position.y=0.3,J.add(ae);for(let G=0;G<5;G++){let Q=G/5*Math.PI*2,Me=e(0.3,0.03,0.045,j,0,0.06,0,J);Me.position.set(Math.sin(Q)*0.15,0.07,Math.cos(Q)*0.15),Me.rotation.y=Q-Math.PI/2;let me=new ie(new mn(0.028,10,8),i(1118744,{r:0.8}));me.position.set(Math.sin(Q)*0.31,0.03,Math.cos(Q)*0.31),J.add(me)}}{let L=new ie(new Vr(1.5,64),new ft({map:t(512,512,(N,j,z)=>{let H=N.createRadialGradient(j/2,z/2,20,j/2,z/2,j/2);H.addColorStop(0,"#1a1f4e"),H.addColorStop(1,"#0c0f2a"),N.fillStyle=H,N.fillRect(0,0,j,z),N.strokeStyle="#3a5cff",N.globalAlpha=0.6,N.lineWidth=8,N.beginPath(),N.arc(j/2,z/2,j/2-14,0,7),N.stroke()}),roughness:1}));L.rotation.x=-Math.PI/2,L.position.set(0.1,0.006,0.75),o.add(L)}})();function DS(){let e=new qe,t=ga,i=hf;{let o=i(723984,{r:0.38,m:0.65}),a=i(328966,{r:0.9}),l=new ms().load("fun-print.jpg");l.colorSpace=yt,l.anisotropy=8;let c=new ie(new qi(2.4,0.042,0.6,4,0.014),o);c.position.y=0.6789999999999999,e.add(c);let h=new ie(new Ht(2.364,0.564),new zi({map:l,roughness:0.5,clearcoat:0.35,clearcoatRoughness:0.35}));h.rotation.x=-Math.PI/2,h.position.y=0.7011999999999999,e.add(h);let u=i(460812);[-0.6,0,0.6].forEach((d)=>t(0.005,0.0012,0.58,u,d,0.7016,0,e)),[-1,1].forEach((d)=>t(2.3,0.03,0.02,o,0,0.6399999999999999,d*0.255,e));let f=1.0999999999999999,m=0.255,g=(d,p,_,y,v,T)=>{let w=new ie(new wt(d,d,p,16),_);return w.position.set(y,v,T),e.add(w),w};[-1,0,1].forEach((d)=>[-1,1].forEach((p)=>{let _=d*f,y=p*m;g(0.0175,0.38,o,_,0.47,y),g(0.024,0.05,o,_,0.36,y),g(0.0145,0.36,o,_,0.18,y),g(0.019,0.02,a,_,0.01,y)}));let x=(d,p,_)=>{let y=new A(...d),v=new A(...p),T=v.clone().sub(y),w=new ie(new wt(_,_,T.length(),10),o);w.position.copy(y.clone().add(v).multiplyScalar(0.5)),w.quaternion.setFromUnitVectors(new A(0,1,0),T.normalize()),e.add(w)};[-f,0,f].forEach((d)=>x([d,0.2,-m],[d,0.2,m],0.011)),[-f,f].forEach((d)=>x([d,0.56,-m],[d,0.56,m],0.009))}return e}function NS(e,t,i,n,r){ot(e,0.045,0.034,0.11,new ft({color:r,roughness:0.4,side:Nt}),t,i+0.055,n,16)}function ed(e,t,i,n,r=1,s=13936170){let o=[[0.001,0],[0.07,0],[0.07,0.015],[0.03,0.03],[0.02,0.12],[0.05,0.15],[0.07,0.17],[0.09,0.26],[0.1,0.34],[0.08,0.36],[0.075,0.34],[0.07,0.25],[0.05,0.18],[0.001,0.17]].map((l)=>new X(l[0],l[1])),a=od(e,new Vl(o,24),new ft({color:s,roughness:0.18,metalness:1}),t,i,n);return a.scale.setScalar(r),a}function FS(e,t,i){B(e,t,i,0.03,k(921104,0.5),0,i/2+0.2,-0.18);for(let r of[-1,1])B(e,0.05,i,0.4,k(921104,0.5),r*(t/2-0.025),i/2+0.2,0);B(e,t,0.06,0.4,k(921104,0.5),0,i+0.2,0),B(e,t,0.2,0.4,k(921104,0.5),0,0.1,0),B(e,t-0.12,i-0.2,0.02,new ft({color:12577023,transparent:!0,opacity:0.12,roughness:0.02}),0,i/2+0.2,0.2);let n=4;for(let r=0;r<n;r++){let s=0.45+r*((i-0.5)/n);B(e,t-0.1,0.02,0.34,k(3816000,0.3,0.4),0,s,0),B(e,t-0.1,0.01,0.01,Wt(14674687,5),0,s-0.015,0.14);for(let o=0;o<4;o++)if((r+o)%3===0)ed(e,-t/2+0.25+o*(t-0.5)/3,s+0.01,0,0.3+Ze()*0.12,[13936170,12633288][o%2]);else B(e,0.16,0.12+Ze()*0.05,0.14,k([2838527,16726843,2007130,13206586][o],0.5),-t/2+0.25+o*(t-0.5)/3,s+0.07,0)}}(function(){let e=new qe;e.position.set(-8.675,0,-2.6),e.rotation.y=Math.PI/2,Tt.add(e),B(e,1,1,0.1,k(1908258,0.6),0,1.73,0),B(e,0.08,1,0.25,k(1908258,0.6),-0.5,1.73,0.09),B(e,0.08,1,0.25,k(1908258,0.6),0.5,1.73,0.09);let t=$t(512,512),i=t.getContext("2d");i.translate(256,256);let n=["#e8e1c0","#111"];for(let a=0;a<20;a++)for(let[l,c,h,u]of[[240,215,"#d12","#093"],[215,150,"#e8e1c0","#111"],[150,135,"#d12","#093"],[135,40,"#e8e1c0","#111"]])i.beginPath(),i.moveTo(0,0),i.arc(0,0,l,(a-5.5)*Math.PI/10,(a-4.5)*Math.PI/10),i.closePath(),i.fillStyle=a%2?h:u,i.fill(),i.beginPath(),i.moveTo(0,0),i.arc(0,0,c,(a-5.5)*Math.PI/10,(a-4.5)*Math.PI/10),i.closePath(),i.fillStyle=a%2?c==215||c==135?"#e8e1c0":n[1]:n[0];i.setTransform(1,0,0,1,0,0),i.fillStyle="#111",i.fillRect(0,0,512,512),i.translate(256,256);let r=[20,1,18,4,13,6,10,15,2,17,3,19,7,16,8,11,14,9,12,5];for(let a=0;a<20;a++){let l=(a-0.5)*Math.PI/10-Math.PI/2,c=l+Math.PI/10,h=a%2===0,u=[[250,220,h?"#c8202a":"#0b8a3e"],[220,150,h?"#111":"#e8e1c0"],[150,125,h?"#c8202a":"#0b8a3e"],[125,40,h?"#111":"#e8e1c0"]];for(let[f,m,g]of u)i.beginPath(),i.arc(0,0,f,l,c),i.arc(0,0,m,c,l,!0),i.closePath(),i.fillStyle=g,i.fill()}i.beginPath(),i.arc(0,0,40,0,7),i.fillStyle="#0b8a3e",i.fill(),i.beginPath(),i.arc(0,0,16,0,7),i.fillStyle="#c8202a",i.fill();let s=new Gi(t);s.colorSpace=yt;let o=new ie(new Vr(0.225,48),new ft({map:s,roughness:0.8}));o.position.set(0,1.73,0.06),e.add(o),_n(e,"DARTS",0.8,0.28,"#ff3b3b",0,2.45,0.05,0,"bold 180px Arial Black"),B(e,0.6,0.45,0.04,k(1448984,0.8),0.95,1.6,0.05),B(e,0.01,0.01,0.01,k(0)),B(e,0.9,0.012,0.04,k(15658734,0.5),0,0.007,2.37),B(e,0.9,0.012,0.01,Wt(16726843,3),0,0.012,2.35),Vi(e,0,2.5,0.5,16771522,4,5)})();var Yh=(e,t=0.95)=>Rr("fabric",0.5,t,0,1,1,{color:e}),Jt=(e,t,i,n,r,s,o,a,l=0.07,c=0,h=0)=>{let u=new ie(new qi(t,i,n,4,l),r);return u.position.set(s,o,a),u.rotation.x=c,u.rotation.z=h,u.castShadow=u.receiveShadow=!0,e.add(u),u},ef;function US(){let e=new qe;e.position.set(0.2,0,-4.3),e.rotation.y=Math.PI,Tt.add(e);let t=Yh(4869462),i=Yh(6843512),n=Yh(7567493),s=new Li([[-2.7,0],[2.7,0],[2.7,2.6],[1.7,2.6],[1.7,1],[-1.7,1],[-1.7,2.6],[-2.7,2.6]].map((p)=>new X(p[0],-p[1]))),o=new gr(s,{depth:0.24,bevelEnabled:!0,bevelThickness:0.05,bevelSize:0.05,bevelSegments:4,curveSegments:4});o.rotateX(-Math.PI/2);let a=new ie(o,t);a.position.y=0.1,a.castShadow=a.receiveShadow=!0,e.add(a);for(let[p,_]of[[-2.6,0.1],[2.6,0.1],[-2.6,2.5],[2.6,2.5],[-1.8,0.9],[1.8,0.9]])ot(e,0.03,0.03,0.08,k(723725,0.4,0.6),p,0.04,_,10);let l=Wt(6966527,0.9);B(e,5.2,0.012,0.02,l,0,0.075,0.03),Jt(e,5.4,0.58,0.28,t,0,0.67,0.14,0.09);for(let p of[-1,1])Jt(e,0.28,0.58,2.32,t,p*2.56,0.67,1.44,0.09);for(let p=0;p<3;p++)Jt(e,1.1,0.17,0.7,i,-1.13+p*1.13,0.5,0.65,0.07);for(let p of[-1,1])Jt(e,0.72,0.17,0.7,n,p*2.06,0.5,0.65,0.07),Jt(e,0.72,0.17,0.78,i,p*2.06,0.5,1.4,0.07),Jt(e,0.72,0.17,0.78,i,p*2.06,0.5,2.2,0.07),Jt(e,0.22,0.46,0.9,i,p*2.27,0.9,1.2,0.09,0,-p*0.16),Jt(e,0.22,0.46,0.9,i,p*2.27,0.9,2.1,0.09,0,-p*0.16);for(let p=0;p<5;p++)Jt(e,0.95,0.5,0.2,i,-1.9+p*0.95,0.88,0.37,0.09,-0.2);let c=[13208108,2781048,15130834,8007498,2781048,13208108];[[-2.1,0.75,0.98,0.45,-0.5],[-1.3,0.72,0.55,0.4,0.3],[2.15,0.75,0.97,0.45,0.5],[1.3,0.72,0.55,0.4,-0.3],[-2.2,0.72,2.35,0.4,1.4],[2.2,0.72,2.35,0.4,-1.4]].forEach(([p,_,y,v,T],w)=>{let M=Jt(e,v,v,0.13,Yh(c[w],1),p,_,y,0.05,-0.3);M.rotation.y=T});let h=Rr("slats",1,0.45,0,1.6,0.9,{color:4862754});Jt(e,1.5,0.1,0.85,h,0,0.44,1.75,0.03),Jt(e,1.2,0.3,0.6,k(1182986,0.6),0,0.24,1.75,0.02),Jt(e,1.4,0.04,0.8,k(1708557,0.7),0,0.1,1.75,0.01),B(e,0.32,0.05,0.22,k(2775690,0.6),-0.35,0.51,1.7),B(e,0.3,0.04,0.2,k(12599338,0.6),-0.35,0.555,1.7),ot(e,0.12,0.09,0.08,k(2369067,0.4,0.3),0.35,0.53,1.8,24);let u=$t(1024,700),f=u.getContext("2d"),m=f.createLinearGradient(0,0,1024,700);m.addColorStop(0,"#16182a"),m.addColorStop(1,"#2a1740"),f.fillStyle=m,f.fillRect(0,0,1024,700),f.strokeStyle="#7a5cff",f.lineWidth=8,f.setLineDash([26,16]),f.strokeRect(40,40,944,620),f.setLineDash([]),f.fillStyle="#9aa0c8",f.textAlign="center",f.textBaseline="middle",f.font="bold 74px Arial",f.fillText("GAME RUG",512,300),f.font="38px Arial",f.fillText('placeholder – window.setRugTexture("moje.jpg")',512,380);let g=new Gi(u);g.colorSpace=yt,g.anisotropy=8,ef=new ft({map:g,roughness:1});let x=new ie(new Ht(3.8,2.6),ef);x.rotation.set(-Math.PI/2,0,Math.PI),x.position.set(0,0.014,1.75),x.receiveShadow=!0,e.add(x);let d=new ie(new Ht(3.86,2.66),k(921362,1));d.rotation.x=-Math.PI/2,d.position.set(0,0.011,1.75),e.add(d)}US();window.setRugTexture=(e)=>new ms().load(e,(t)=>{t.colorSpace=yt,t.anisotropy=8,ef.map=t,ef.needsUpdate=!0});(function(){let t=new qe;t.position.set(0.2,0,-9.2),Tt.add(t),B(t,2.5,1.45,0.05,k(328966,0.3,0.5),0,1.65,0);let i=$t(640,360),n=i.getContext("2d"),r=n.createLinearGradient(0,0,640,360);r.addColorStop(0,"#0b2a4a"),r.addColorStop(0.5,"#4a1f8f"),r.addColorStop(1,"#e8602e"),n.fillStyle=r,n.fillRect(0,0,640,360),n.fillStyle="rgba(255,255,255,.9)",n.font="bold 54px Arial",n.textAlign="center",n.fillText("MAN CAVE",320,190);let s=new Gi(i);s.colorSpace=yt;let o=new ie(new Ht(2.42,1.36),new Mt({map:s,toneMapped:!1}));o.position.set(0,1.65,0.03),t.add(o),B(t,2.8,0.5,0.42,k(1381914,0.55),0,0.3,0.17),B(t,2.8,0.03,0.44,k(4862754,0.45),0,0.565,0.17),B(t,1.2,0.07,0.1,k(723725,0.4,0.5),0,0.62,0.17);for(let a of[-1.75,1.75])B(t,0.3,1.5,0.22,k(1052948,0.5),a,0.78,0.12),B(t,0.22,0.22,0.02,k(657932,0.3,0.6),a,1.2,0.24),ot(t,0.09,0.09,0.02,k(1908258,0.5),a,0.6,0.235,24).rotation.x=Math.PI/2;B(t,2.6,0.03,0.03,Wt(16734920,3),0,0.9,0.01).visible=!1,B(t,2.6,0.02,0.02,Wt(6966527,3.5),0,0.88,-0),B(t,2.7,0.012,0.01,Wt(16734920,3),0,0.5,0.39),_n(t,"MAN CAVE",1.9,0.34,"#ff4fa6",0,2.75,0.03,0,"bold 130px Arial Black",void 0,!1)})();function BS(){let e=ws,t=hf(790562,{r:0.4,m:0.4});for(let l of[-1,1]){let c=l*1.775;ga(1.65,0.05,0.85,t,c,0.75,0,e),ga(0.05,0.75,0.05,t,l*2.575,0.375,-0.38,e),ga(0.05,0.75,0.05,t,l*2.575,0.375,0.38,e),ga(1.65,0.015,0.02,Z_(3824895,1.4),c,0.72,0.43,e)}let i=new ie(new Ht(5.3,0.9),new Mt({color:2768127,transparent:!0,opacity:0.16,toneMapped:!1}));i.rotation.x=-Math.PI/2,i.position.set(0,0.012,0.05),e.add(i);let n=(l,c)=>{ot(e,0.012,0.012,0.22,k(855570,0.4,0.8),l,0.86,-0.28,12),B(e,0.2,0.01,0.16,k(855570,0.4,0.8),l,0.78,-0.2)},r=(l,c,h)=>{let u=$t(1024,Math.round(1024*h/c));l(u.getContext("2d"),u.width,u.height);let f=new Gi(u);return f.colorSpace=yt,f.anisotropy=8,f},s=r((l,c,h)=>{let u=l.createLinearGradient(0,0,c,0);u.addColorStop(0,"#05103a"),u.addColorStop(0.5,"#4a1f8f"),u.addColorStop(1,"#ff4f6a"),l.fillStyle=u,l.fillRect(0,0,c,h),l.fillStyle="rgba(255,255,255,.12)";for(let f=0;f<40;f++)l.fillRect(Ze()*c,Ze()*h*0.7,40+Ze()*120,3);l.fillStyle="#fff",l.font="bold 70px Arial",l.fillText('ULTRAWIDE 49"',60,h-70),l.strokeStyle="#38e8ff",l.lineWidth=4,l.beginPath(),l.arc(c/2,h/2,40,0,7),l.stroke()},1.2,0.34),o=r((l,c,h)=>{l.fillStyle="#0b0d1c",l.fillRect(0,0,c,h),l.fillStyle="#38e8ff";for(let u=0;u<14;u++)l.fillRect(40,60+u*110,200+Ze()*600,18);l.fillStyle="#ff4f8a",l.font="bold 56px Arial",l.fillText("STATS",40,46)},0.34,0.6);{let u=new wt(1.1,1.1,0.34,48,1,!0,Math.PI-0.5454545454545454,1.0909090909090908),f=new ie(u,new Mt({map:s,toneMapped:!1,side:Kt}));f.scale.x=-1,f.position.set(-1.78,1.12,0.8500000000000001),e.add(f);let m=new ie(new wt(1.12,1.12,0.37,48,1,!0,Math.PI-0.5454545454545454,1.0909090909090908),k(526605,0.4,0.5));m.material.side=Nt,m.scale.x=-1,m.position.copy(f.position),e.add(m),n(-1.78,0),B(e,1.24,0.012,0.03,Wt(6966527,3),-1.78,0.94,-0.3)}for(let[l,c]of[[1.45,0.35],[2.1,0.7]]){let h=new qe;h.position.set(l,0.775,-0.18),h.rotation.y=c,e.add(h),Jt(h,0.36,0.62,0.025,k(460811,0.4,0.5),0,0.5,0,0.006);let u=new ie(new Ht(0.34,0.6),new Mt({map:o,toneMapped:!1}));u.position.set(0,0.5,0.0135),h.add(u),ot(h,0.012,0.012,0.25,k(855570,0.4,0.8),0,0.1,-0.03,12),B(h,0.18,0.01,0.14,k(855570,0.4,0.8),0,0.004,-0.02),B(h,0.36,0.012,0.02,Wt(16732042,3),0,0.19,-0.02)}let a=(l,c)=>{let h=new ie(new Ht(0.9,1.6),new Mt({color:new fe(c).multiplyScalar(0.5),transparent:!0,opacity:0.9,toneMapped:!1}));h.position.set(8.665,1.9,l),h.rotation.y=-Math.PI/2,Tt.add(h)};[[-2.1,6966527],[-1.05,3717375],[0,16732070],[1.05,3717375],[2.1,6966527]].forEach(([l,c])=>a(l,c)),B(Tt,0.03,0.03,5.4,Wt(6966527,3.5),8.66,1.2,0),B(Tt,0.03,0.03,5.4,Wt(16732070,3.5),8.66,2.7,0),_n(Tt,"FONGER",2.4,0.5,"#ff4fa6",8.64,2.95,0,-Math.PI/2,"bold 150px Arial Black",void 0,!1)}BS();var Vu=[];function OS(e){if(!Vu[e]){let i=[],n=(h,u,f,m,g,x=1,d=1,p=1,_=0,y=0)=>{h.scale(x,d,p),h.rotateX(_),h.rotateZ(y),h.translate(f,m,g);let v=h.attributes.position.count,T=new Float32Array(v*3),w=new fe(u);for(let M=0;M<v;M++)T[M*3]=w.r,T[M*3+1]=w.g,T[M*3+2]=w.b;h.setAttribute("color",new qt(T,3)),i.push(h)},r=15780000,s=(h,u,f)=>new Et(h,u,f),o=(h)=>new mn(h,12,10),a=(h,u)=>new Js(h,u,8),l=(h,u)=>new wt(h,h,u,12);if(n(l(0.05,0.012),1381658,0,0.006,0),e===0){n(s(0.024,0.07,0.03),1849994,-0.016,0.047,0),n(s(0.024,0.07,0.03),1849994,0.016,0.047,0),n(s(0.07,0.075,0.04),15763996,0,0.12,0),n(s(0.02,0.07,0.02),15763996,-0.045,0.12,0),n(s(0.02,0.07,0.02),15763996,0.045,0.12,0),n(o(0.036),15780000,0,0.19,0),n(s(0.07,0.014,0.04),2767466,0,0.2,0.005);for(let h=0;h<7;h++){let u=h/7*Math.PI*2;n(a(0.014,0.05),16765498,Math.sin(u)*0.026,0.225,Math.cos(u)*0.022,1,1,1,Math.cos(u)*0.5,-Math.sin(u)*0.5)}}else if(e===1)n(s(0.07,0.08,0.04),2772688,0,0.1,0),n(s(0.024,0.06,0.03),1382778,-0.016,0.04,0),n(s(0.024,0.06,0.03),1382778,0.016,0.04,0),n(s(0.09,0.12,0.008),13638698,0,0.1,-0.026,1,1,1,0.1),n(o(0.034),15780000,0,0.17,0),n(o(0.036),1315866,0,0.18,-0.006,1,0.8,1),n(s(0.03,0.03,0.01),16765498,0,0.11,0.022);else if(e===2)n(a(0.05,0.14),6959024,0,0.08,0),n(o(0.032),15780000,0,0.17,0),n(a(0.044,0.1),2757744,0,0.245,0,1,1,1,-0.15),n(l(0.056,0.008),2757744,0,0.2,0),n(l(0.004,0.24),5913120,0.06,0.12,0.02),n(o(0.014),3729663,0.06,0.25,0.02);else if(e===3)n(s(0.07,0.08,0.05),12106952,0,0.1,0),n(s(0.03,0.06,0.035),5922412,-0.02,0.04,0),n(s(0.03,0.06,0.035),5922412,0.02,0.04,0),n(s(0.05,0.045,0.045),15132910,0,0.17,0),n(s(0.036,0.01,0.01),3729663,0,0.175,0.024),n(s(0.025,0.07,0.025),13638698,-0.05,0.11,0),n(s(0.025,0.07,0.025),13638698,0.05,0.11,0),n(a(0.008,0.04),16765498,0,0.215,0);else if(e===4){n(s(0.07,0.085,0.04),1381916,0,0.1,0),n(s(0.024,0.06,0.03),735778,-0.016,0.04,0),n(s(0.024,0.06,0.03),735778,0.016,0.04,0),n(o(0.034),15780000,0,0.17,0);for(let h=0;h<6;h++){let u=h/6*Math.PI*2;n(a(0.012,0.04),3072096,Math.sin(u)*0.022,0.2,Math.cos(u)*0.02,1,1,1,Math.cos(u)*0.6,-Math.sin(u)*0.6)}n(s(0.008,0.2,0.012),14673648,0.06,0.13,0.02,1,1,1,0,-0.25)}else if(e===5)n(s(0.04,0.05,0.03),15755944,0,0.04,0),n(o(0.055),15780000,0,0.12,0),n(o(0.058),15755944,0,0.135,-0.008,1,0.85,1),n(o(0.01),1118481,-0.02,0.12,0.05),n(o(0.01),1118481,0.02,0.12,0.05);else n(s(0.09,0.12,0.06),1908520,0,0.07,0),n(s(0.07,0.07,0.005),16765498,0,0.08,0.031),n(o(0.025),13638698,0,0.08,0.034,1,1,0.3),n(s(0.09,0.015,0.062),3729663,0,0.14,0);let c=r_(i,!1);i.forEach((h)=>h.dispose()),Vu[e]=new ie(c,new ft({vertexColors:!0,roughness:0.5,metalness:0.05}))}let t=Vu[e].clone();return t.castShadow=!0,t}function J_(e,t){let i=new qe;i.position.set(e,0,t),i.rotation.y=-Math.PI/2,Tt.add(i);let n=3,r=6,s=0.36,o=0.028,a=0.39,l=n*s+o,c=r*s+o,h=k(2367260,0.55,0.05),u=k(1052173,0.8);for(let f=0;f<=n;f++)B(i,o,c,a,h,-l/2+o/2+f*s,c/2,0);for(let f=0;f<=r;f++)B(i,l,o,a,h,0,o/2+f*s,0);B(i,l,c,0.01,u,0,c/2,-a/2+0.01);for(let f=1;f<=r;f++)B(i,l-2*o,0.006,0.014,Wt(16767400,2.2),0,f*s-0.004,a/2-0.05);for(let f=0;f<r;f++)for(let m=0;m<n;m++){let g=-l/2+o/2+(m+0.5)*s,x=o+f*s+(f===0?0:0),d=Ze()<0.55?2:1;for(let p=0;p<d;p++){let _=OS(Math.floor(Ze()*7));_.position.set(g+(d===2?p?0.08:-0.08:0),x,0.03+(Ze()-0.5)*0.06),_.rotation.y=(Ze()-0.5)*0.8,_.scale.setScalar(0.95+Ze()*0.25),i.add(_)}if(Ze()<0.25)B(i,0.1,0.02,0.07,k([2838527,16726843,2007130][Math.floor(Ze()*3)],0.6),g,x+0.2+0,-0.12).visible=!1}}J_(8.475,3.17);J_(8.475,-3.17);function HS(){let t=0.092*Math.sqrt(3)/2;for(let i of[-6.95,-5.75]){let n=new qe;n.position.set(i,0,0),n.rotation.y=Math.PI/2,Tt.add(n),n.add(DS());for(let r of[-1,1]){let s=r<0?14692399:3107801;for(let o=0;o<4;o++){let a=4-o;for(let l=0;l<a;l++)NS(n,r*(1.08-o*t),0.702,(l-(a-1)/2)*0.092,s)}}for(let r of[-0.3,0.3])ot(n,0.017,0.017,0.002,k(16777215,0.3),0,0.703,r,12).visible=!1}Vi(Tt,-6.35,2.6,0,16773336,4,5),B(Tt,2.2,0.012,0.012,Wt(16763210,2.5),-6.35,en-0.35,0).visible=!0}HS();(function(){let e=new qe;e.position.set(-6.4,0,3.725),e.rotation.y=Math.PI,Tt.add(e),B(e,3.3,2.5,0.06,k(1381143,0.8),0,1.5,0.03);for(let t=0;t<12;t++)B(e,0.02,2.4,0.03,k(2761760,0.5),-1.6+t*0.29,1.5,0.075);for(let t=0;t<3;t++)for(let i=0;i<8;i++){let n=-1.4+i*0.4,r=2.2-t*0.38,s=[13936170,12633288,11692597][(i+t)%3];B(e,0.05,0.22,0.01,k([2838527,16726843,2007130][(i*2+t)%3],0.6),n,r+0.15,0.09),ot(e,0.07,0.07,0.015,new ft({color:s,roughness:0.22,metalness:1}),n,r,0.1).rotation.x=Math.PI/2}B(e,3.2,0.03,0.18,k(3812642,0.4),0,1.05,0.14);for(let t=0;t<6;t++)ed(e,-1.3+t*0.5,1.065,0.14,0.38+t%2*0.08,[13936170,12633288,11692597][t%3]);_n(e,"HALL OF FAME",2.6,0.38,"#ffc94a",0,2.78,0.08,0,"bold 125px Arial Black",void 0,!1);for(let t of[-8.35,-4.45]){let i=new qe;i.position.set(t,0,3.35),Tt.add(i),B(i,0.5,1,0.5,k(1052690,0.4),0,0.5,0),B(i,0.5,0.01,0.5,Wt(11462399,3),0,1,0),ed(i,0,1.01,0,1),B(i,0.5,0.7,0.5,new ft({color:12577023,transparent:!0,opacity:0.13,roughness:0.02,metalness:0}),0,1.36,0)}for(let[t,i,n]of[[-7.7,-3.55,0],[-6.15,-3.55,0],[-3.59,-6.6,Math.PI/2],[4,-6.6,-Math.PI/2]]){let r=new qe;r.position.set(t,0,i),r.rotation.y=n,Tt.add(r),FS(r,1.3,2.1)}})();function GS(){let e=new qe;e.position.set(2.9,0,3.725),e.rotation.y=Math.PI,Tt.add(e);let t=k(1447707,0.85,0.1),i=Rr("slats",1,0.6,0,3.6,1,{color:11569754}),n=Rr("slats",1,0.35,0,4.2,0.9,{color:5978660}),r=k(13225170,0.22,1);Jt(e,3.4,1,0.6,t,-0.3,0.5,1.65,0.02);let s=new ie(new Et(3.3,0.9,0.04),i);s.position.set(-0.3,0.5,1.97),e.add(s),Jt(e,3.8,0.06,0.95,n,-0.3,1.06,1.83,0.02),B(e,3.3,0.014,0.014,Wt(16732120,4),-0.3,1.02,2.28),B(e,3.3,0.02,0.02,Wt(3725567,4),-0.3,0.06,2),B(e,3.4,0.08,0.03,k(723725,0.5),-0.3,0.04,1.96);let o=ot(e,0.022,0.022,3.2,r,-0.3,0.22,2.3,12);o.rotation.z=Math.PI/2;for(let C of[-1.7,1.1])ot(e,0.018,0.018,0.2,r,C,0.12,2.3,10);Jt(e,3.6,0.9,0.5,t,0,0.45,0.27,0.02);let a=new ie(new Et(3.5,0.8,0.03),i);a.position.set(0,0.45,0.535),e.add(a),B(e,3.7,0.05,0.56,n,0,0.925,0.28),B(e,3.5,0.012,0.012,Wt(6966527,4),0,0.03,0.55);let l=(()=>{let C=$t(512,256),F=C.getContext("2d"),D=F.createLinearGradient(0,0,512,0);D.addColorStop(0,"#ff3ea0"),D.addColorStop(0.5,"#7a4cff"),D.addColorStop(1,"#2ab8ff"),F.fillStyle=D,F.fillRect(0,0,512,256);let V=new Gi(C);return V.colorSpace=yt,V})();B(e,3.6,1.7,0.05,k(723725,0.6),0,1.85,0.03);let c=new ie(new Ht(3.4,1.55),new Mt({map:l,toneMapped:!1,color:13421772}));c.position.set(0,1.85,0.06),e.add(c);for(let C of[-1,1])B(e,0.04,1.7,0.34,k(723725,0.5),C*1.8,1.85,0.2);B(e,3.64,0.04,0.34,k(723725,0.5),0,2.72,0.2);let h=new wt(0.036,0.036,0.2,10),u=new wt(0.012,0.02,0.1,10),f=new wt(0.036,0.026,0.1,12,1,!0),m=48,g=new Rn(h,new ft({roughness:0.15,metalness:0.1,transparent:!0,opacity:0.88}),m),x=new Rn(u,g.material,m),d=new Rn(f,new ft({color:14674687,roughness:0.05,transparent:!0,opacity:0.45,side:Nt}),20),p=new Be,_=[2787898,8010258,13213738,3824335,12066847,1710618,14673642,9054858],y=0,v=0;for(let C=0;C<3;C++){let F=1.4+C*0.5;B(e,3.4,0.025,0.3,k(855312,0.3,0.3),0,F,0.2),B(e,3.4,0.008,0.01,Wt(16777215,4),0,F-0.02,0.34);for(let D=0;D<16&&y<m;D++){let V=-1.55+D*0.206;if(C===0&&D>9){p.makeTranslation(V,F+0.05,0.2),d.setMatrixAt(v++,p);continue}p.makeTranslation(V,F+0.113,0.2),g.setMatrixAt(y,p),g.setColorAt(y,new fe(_[(D+C*3)%_.length])),p.makeTranslation(V,F+0.263,0.2),x.setMatrixAt(y,p),x.setColorAt(y,new fe(_[(D+C*3)%_.length])),y++}}g.count=y,x.count=y,d.count=v,e.add(g,x,d);let T=new qe;T.position.set(1.2,0.95,0.3),e.add(T),ot(T,0.05,0.05,0.3,r,0,0.15,0,20);let w=ot(T,0.014,0.014,0.16,r,0,0.3,0.07,10);w.rotation.x=Math.PI/2;for(let[C,F]of[[-0.025,16763210],[0.025,16726843]])ot(T,0.007,0.007,0.1,k(F,0.4,0.4),C,0.38,0,8),ot(T,0.01,0.01,0.025,r,C,0.26,0.14,8);B(T,0.3,0.02,0.2,r,0,0,0.18),B(T,0.26,0.004,0.16,k(1381914,0.4),0,0.012,0.18),_n(e,"BAR",0.9,0.3,"#38d8ff",-0.3,2.95,0.05,0,"bold 170px Arial Black",void 0,!1);let M=k(1908001,0.55,0.1),b=k(13619928,0.2,1);for(let C of[-1.6,-0.75,0.1,0.95]){let F=new qe;F.position.set(C,0,2.85),F.rotation.y=Math.PI+(Ze()-0.5)*0.3,e.add(F),ot(F,0.22,0.2,0.08,M,0,0.74,0,28),ot(F,0.21,0.21,0.025,k(723725,0.5),0,0.69,0,24),ot(F,0.025,0.025,0.66,b,0,0.35,0,10),ot(F,0.2,0.22,0.03,b,0,0.015,0,24);let D=new ie(new In(0.17,0.012,8,24),b);D.rotation.x=Math.PI/2,D.position.set(0,0.3,0),F.add(D),Jt(F,0.34,0.22,0.06,M,0,1,-0.2,0.03,-0.12);for(let V of[-1,1]){ot(F,0.01,0.01,0.26,b,V*0.16,0.86,-0.18,8);let ee=Jt(F,0.04,0.03,0.26,M,V*0.18,0.99,-0.06,0.012)}}}GS();var rt={cx:-10.8,cz:-11.5,R:7,H:6},ji=new qe;Pt.add(ji);var Ar=[...Array(6)].map((e,t)=>{let i=t*Math.PI/3;return[rt.cx+rt.R*Math.cos(i),rt.cz+rt.R*Math.sin(i)]}),ki=(e,t,i)=>new A(e,t,i),j_=(e=16777215)=>{let t=lf(ai.plywood,1,1);return new ft({map:t,bumpMap:t,bumpScale:0.6,roughness:0.72,metalness:0,side:Nt,color:e})},tf=j_(15917768),O_=j_(14731684);function Qh(e,t,i){let n=[],r=[];for(let a of e){let[l,c,h,u]=a.p,f=l.distanceTo(c)/1.22,m=l.distanceTo(h)/2.44,g=h.distanceTo(u)/1.22,x=a.ou||0,d=a.ov||0,p=Math.max(f,g);n.push(l.x,l.y,l.z,c.x,c.y,c.z,u.x,u.y,u.z,l.x,l.y,l.z,u.x,u.y,u.z,h.x,h.y,h.z),r.push(x,d,x+f,d,x+g,d+m,x,d,x+g,d+m,x,d+m)}let s=new Ve;s.setAttribute("position",new Ee(n,3)),s.setAttribute("uv",new Ee(r,2)),s.computeVertexNormals();let o=new ie(s,t);return o.receiveShadow=!0,i.add(o),o}var jr=Math.tan(Math.PI/6);function qh(e,t,i){let n=Ar[e],r=Ar[(e+1)%6],s=Math.hypot(r[0]-n[0],r[1]-n[1]),o={x:(r[0]-n[0])/s,z:(r[1]-n[1])/s},a={x:-o.z,z:o.x},l=(n[0]+r[0])/2,c=(n[1]+r[1])/2;if(a.x*(rt.cx-l)+a.z*(rt.cz-c)<0)a={x:-a.x,z:-a.z};let[h,u]=i||[0,s],f=(d,p,_)=>ki(n[0]+o.x*p+a.x*d,_,n[1]+o.z*p+a.z*d),m=[],g=[],x=[];for(let d=0;d<t.length-1;d++){let[p,_]=t[d],[y,v]=t[d+1],T={p:[f(p,h+p*jr,_),f(p,u-p*jr,_),f(y,h+y*jr,v),f(y,u-y*jr,v)],ou:(h+p*jr)/1.22,ov:t.slice(0,d).reduce((w,M,b)=>w+Math.hypot(t[b+1][0]-M[0],t[b+1][1]-M[1]),0)/2.44};if(m.push(T),!i)g.push({p:[ki(n[0],_,n[1]),f(p,p*jr,_),ki(n[0],v,n[1]),f(y,y*jr,v)]}),x.push({p:[ki(r[0],_,r[1]),f(p,s-p*jr,_),ki(r[0],v,r[1]),f(y,s-y*jr,v)]})}return{quads:m,caps:[...g,...x],P:f,L:s,n:a,t:o,A:n,prof:t}}var zS=[[[1,0],[0,3.6],[0,6]],null,[[0,0],[0,1.2],[1.6,3.4],[1.6,4.6],[0.9,6]],[[0,0],[0,1],[0.9,2.4],[0.9,3.4],[2,5],[0.4,6]],[[0,0],[0,0.8],[2,3.6],[2,6]],[[0,0],[0,3],[0.8,4.2],[0.8,6]]],Zh=[15213098,2845695,16765482,2273370,16742940,10632432,16736176,15921906,1381658,2806996],$_=[[],[],[],[],[],[],[]],ua=new ct;function uc(e,t,i){let[n,r,s,o]=e.p,a=n.clone().lerp(r,t),l=s.clone().lerp(o,t);return a.lerp(l,i)}function dc(e,t){let[i,n,r]=e.p,s=n.clone().sub(i).cross(r.clone().sub(i)).normalize();if(s.dot(t)<0)s.negate();return s}function nf(e,t,i,n,r){ua.position.copy(t).addScaledVector(i,0.004),ua.lookAt(t.clone().add(i)),ua.rotateZ(r),ua.scale.setScalar(1),ua.updateMatrix(),$_[e].push({m:ua.matrix.clone(),c:new fe(n)})}function td(e,t,i,n,r=0.55){let s=e.p[0].distanceTo(e.p[2]);if(s<0.5)return;let o=Math.max(2,Math.round(s/r)),a=dc(e,n);for(let l=0;l<t;l++)for(let c=0;c<o;c++){let h=Math.sin((c+l*1.7)*1.1)*0.5/t,u=(l+0.5)/t+h*0.55,f=(c+0.45)/o,m=uc(e,u,f),g=(c*3+l*5)%7,x=c<1?5:g===6?4:g===5?5:g%5;if(nf(x===5&&c>0?1:x,m,a,Zh[(i+l)%Zh.length],(Ze()-0.5)*1.6),(c+l)%3===0){let d=uc(e,Math.min(0.97,Math.max(0.03,u+0.07)),Math.min(0.98,f+0.5/o));nf(5,d,a,Zh[(i+l)%Zh.length],Ze()*3)}}}function kS(){let e=[()=>{let i=new mn(0.07,12,9);return i.scale(1,0.8,0.65),i.translate(0,0,0.035),i},()=>{let i=new qi(0.11,0.03,0.05,2,0.012);return i.translate(0,0,0.025),i},()=>{let i=new mn(0.1,14,10);return i.scale(1,1,0.38),i},()=>{let i=new Dl(0.028,0.09,4,8);return i.rotateZ(Math.PI/2),i.translate(0,0,0.04),i},()=>{let i=new In(0.05,0.022,8,14);return i.translate(0,0,0.02),i},()=>{let i=new Js(0.032,0.04,6);return i.rotateX(Math.PI/2),i.translate(0,0,0.02),i},()=>{let i=new yh(0.2);return i.scale(1,1,0.5),i}],t=new ft({color:16777215,roughness:0.5,metalness:0});e.forEach((i,n)=>{let r=$_[n];if(!r.length)return;let s=new Rn(i(),t,r.length);r.forEach((o,a)=>{s.setMatrixAt(a,o.m),s.setColorAt(a,o.c)}),s.castShadow=!0,ji.add(s)})}(function(){let t=(i,n)=>ki(rt.cx-n.p[0].x,0,rt.cz-n.p[0].z);for(let i=0;i<6;i++){if(i===1){let r=qh(1,[[0,0],[0,6]],[0,2.5]),s=qh(1,[[0,0],[0,6]],[4.1,7]),o=qh(1,[[0,2.3],[0,6]],[2.5,4.1]);for(let h of[r,s,o])Qh(h.quads,tf,ji),h.quads.forEach((u)=>td(u,h===o?2:2,0,t(h,u),0.6));let a=Ar[1],l=-1,c=(h)=>a[0]+l*h;for(let h of[2.5,4.1])B(ji,0.1,2.3,0.3,k(1381914,0.5),c(h),1.15,a[1]+0.02);B(ji,1.7,0.1,0.3,k(1381914,0.5),c(3.3),2.3,a[1]+0.02);continue}let n=qh(i,zS[i]);Qh(n.quads,i%2?O_:tf,ji),Qh(n.caps,O_,ji),n.quads.forEach((r)=>td(r,4,i*2,dc(r,ki(rt.cx-r.p[0].x,0,rt.cz-r.p[0].z)).add(ki(0,0,0)),0.55))}for(let i=0;i<6;i++){let n=Ar[i],r=Ar[(i+1)%6],s=Math.hypot(r[0]-n[0],r[1]-n[1]),o=new ie(new Et(s+0.3,rt.H,0.2),k(1513500,0.9)),a=(n[0]+r[0])/2,l=(n[1]+r[1])/2,c=ki(a-rt.cx,0,l-rt.cz).normalize();if(o.position.set(a+c.x*0.12,rt.H/2,l+c.z*0.12),o.rotation.y=-Math.atan2(r[1]-n[1],r[0]-n[0]),i!==1)ji.add(o)}})();(function(){let i=[{y:0,r:1.75},{y:2.1,r:2.45},{y:4.7,r:1.45}],n=[];i.forEach((h,u)=>{let f=[];for(let m=0;m<7;m++){let g=m/7*Math.PI*2+u*0.12,x=0.9+(m*37+u*11)%10/50;f.push(ki(rt.cx+Math.sin(g)*h.r*x,h.y,rt.cz+Math.cos(g)*h.r*x))}n.push(f)});let r=[];for(let h=0;h<2;h++)for(let u=0;u<7;u++){let f=(u+1)%7;r.push({p:[n[h][u],n[h][f],n[h+1][u],n[h+1][f]],ou:u*0.37,ov:h*0.9})}let s=Qh(r,new ft({map:tf.map,bumpMap:tf.map,bumpScale:0.6,roughness:0.72,side:Nt,color:15652528,flatShading:!0}),ji);s.castShadow=!0;let o=n[2].map((h)=>new X(h.x,-h.z)),a=new no(new Li(o));a.rotateX(-Math.PI/2);let l=new ie(a,k(13216376,0.8));l.position.y=4.7,ji.add(l),r.forEach((h,u)=>{let f=uc(h,0.5,0.5),m=ki(f.x-rt.cx,0,f.z-rt.cz).normalize(),g=dc(h,m);td(h,u<7?2:2,3+u,g,0.55)});let c=r[0];{let h=uc(c,0.5,0.22),u=dc(c,ki(h.x-rt.cx,0,h.z-rt.cz));nf(6,h,u,2845695,0);let f=uc(r[3],0.5,0.3);nf(6,f,dc(r[3],ki(f.x-rt.cx,0,f.z-rt.cz)),15213098,1)}})();kS();(function(){let i=[...Array(6)].map((h,u)=>{let f=u*Math.PI/3;return[rt.cx+6.99*Math.cos(f),rt.cz+6.99*Math.sin(f)]}),n=i[1][1]+0.1,r=[i[0],i[1],[-9.7,n],[-9.7,n-0.95],[-11.5,n-0.95],[-11.5,n],i[2],i[3],i[4],i[5]],s=new Li(r.map((h)=>new X(h[0],-h[1]))),o=new gr(s,{depth:0.26,bevelEnabled:!0,bevelThickness:0.04,bevelSize:0.04,bevelSegments:3});o.rotateX(-Math.PI/2);let a=lf(ai.matBlue,1,0.5),l=new ie(o,new ft({map:a,bumpMap:a,bumpScale:1.2,roughness:0.85}));l.position.y=0,l.receiveShadow=!0,ji.add(l),Mc(ji,[...Array(6)].map((h,u)=>Ar[u]),cf("concrete",1.5,0.9));for(let h=0;h<6;h++){if(h===1)continue;let u=Ar[h],f=Ar[(h+1)%6],m=Math.hypot(f[0]-u[0],f[1]-u[1]),g=new ie(new Et(m-0.3,0.03,0.05),k(16765482,0.5)),x=(u[0]+f[0])/2,d=(u[1]+f[1])/2,p=ki(rt.cx-x,0,rt.cz-d).normalize();g.position.set(x+p.x*0.07,0.32,d+p.z*0.07),g.rotation.y=-Math.atan2(f[1]-u[1],f[0]-u[0]),ji.add(g)}let c=new ie(new wt(3.3,3.4,0.14,7),new ft({map:a,color:6988543,roughness:0.9}));c.position.set(rt.cx,0.33,rt.cz),ji.add(c)})();(function(){Sa(Ar,rt.H,k(1776673,0.9));for(let t=0;t<3;t++){let i=t*Math.PI/3,n=new ie(new Et(rt.R*2-0.3,0.36,0.28),k(5067356,0.45,0.8));n.position.set(rt.cx,rt.H-0.2,rt.cz),n.rotation.y=-i,$i.add(n);let r=new ie(new Et(rt.R*2-1.2,0.03,0.06),Wt(16773594,7));r.position.set(rt.cx,rt.H-0.4,rt.cz),r.rotation.y=-i,$i.add(r)}for(let t=0;t<6;t++){let i=t*Math.PI/3+Math.PI/6,n=rt.cx+Math.cos(i)*4.6,r=rt.cz+Math.sin(i)*4.6;ot($i,0.12,0.12,0.14,k(855312,0.4,0.5),n,rt.H-0.1,r,14),ot($i,0.1,0.1,0.01,Wt(16774888,9),n,rt.H-0.18,r,14)}for(let t=0;t<3;t++){let i=t*Math.PI*2/3+0.5;Vi(ji,rt.cx+Math.cos(i)*4.2,rt.H-0.6,rt.cz+Math.sin(i)*4.2,16774372,22,14)}Vi(ji,rt.cx,rt.H-0.8,rt.cz,16777215,18,12),_n(ji,"BOULDER",2.6,0.5,"#ffb42a",-10.6,4.4,Ar[1][1]-0.12,Math.PI,"bold 170px Arial Black",void 0,!1),B($i,14,0.02,0.02,Wt(16757802,2.5),rt.cx,rt.H-0.02,rt.cz+5).visible=!1})();var ce=new qe;Pt.add(ce);var Sn=3,Q_=(e,t)=>Rr("tile",0.6,0.35,0,e,t),uf=(e,t)=>Rr("plaster",1.2,0.9,0,e,t);Mc(ce,[[-12.4,-5.45],[-8.8,-5.45],[-8.8,3.85],[-3.6,3.85],[-3.6,7.7],[-12.4,7.7]],cf("tile",0.6,0.35));Mc(ce,[[-3.6,3.85],[0.4,3.85],[0.4,7.7],[-3.6,7.7]],cf("graphite",1,0.6));Sa([[-12.4,-5.45],[-8.8,-5.45],[-8.8,3.85],[-12.4,3.85]],Sn,k(15000802,0.9));Sa([[-12.4,3.85],[-3.6,3.85],[-3.6,7.7],[-12.4,7.7]],Sn,k(15000802,0.9));Sa([[-3.6,3.85],[0.4,3.85],[0.4,7.7],[-3.6,7.7]],Sn,k(2434604,0.9));Qn(ce,-12.4,-5.37,-12.4,7.7,Sn,uf);Qn(ce,-8.8,-5.37,-8.8,-3.85,Sn,uf);Qn(ce,-3.6,3.85,-3.6,7.7,Sn,Q_);Qn(ce,0.4,3.85,0.4,7.7,Sn,uo);for(let[e,t,i,n]of[[-10.6,-1,3.4,0.08],[-10.6,2.6,3.4,0.08],[-8.2,5.8,0.08,3.4],[-6.2,5.8,3.4,0.08]])B($i,i,0.03,n,Wt(16054527,6),e,Sn-0.02,t);var kt=k(14212064,0.14,1),sc=k(16053489,0.12,0.02),Wu=k(11449275,0.3,0.9),oY=k(1447707,0.8),H_=(e,t)=>{let i=parseInt(e.slice(1),16),n=Math.min(255,(i>>16&255)*t)|0,r=Math.min(255,(i>>8&255)*t)|0,s=Math.min(255,(i&255)*t)|0;return`rgb(${n},${r},${s})`},Bt=(e,t,i,n,r,s,o=0,a=0,l=0)=>{let c=new ie(t,i);return c.position.set(n,r,s),c.rotation.set(o,a,l),c.castShadow=c.receiveShadow=!0,e.add(c),c},oi=(e,t,i,n=20)=>new wt(e,t,i,n);(function(){let s=(x,d,p)=>va(160,480,(_,y,v)=>{let T=_.createLinearGradient(0,0,y,0);T.addColorStop(0,H_(d,1.18)),T.addColorStop(0.5,d),T.addColorStop(1,H_(d,0.82)),_.fillStyle=T,_.fillRect(0,0,y,v),_.strokeStyle="rgba(0,0,0,.5)",_.lineWidth=5,_.strokeRect(3,3,y-6,v-6),_.strokeStyle="rgba(255,255,255,.07)",_.lineWidth=2,_.strokeRect(9,9,y-18,v-18),_.fillStyle="rgba(0,0,0,.7)";for(let w=0;w<8;w++)_.fillRect(24,30+w*13,y-48,5);for(let w=0;w<6;w++)_.fillRect(24,v-118+w*13,y-48,5);_.fillStyle="#dfe2e7",_.fillRect(y/2-27,156,54,28),_.fillStyle="#12151c",_.font="bold 22px Arial",_.textAlign="center",_.fillText(String(x),y/2,178),_.fillStyle="#c9ccd2",_.fillRect(y-40,222,11,96),_.fillStyle="#7d818a",_.fillRect(y-41,222,2,96),_.fillStyle="#b9bdc5",_.beginPath(),_.arc(y-34,344,9,0,7),_.fill(),_.fillStyle="#1a1a1a",_.fillRect(y-35,338,2.5,12),_.fillStyle="rgba(255,255,255,.05)",_.fillRect(0,0,14,v)}),o=va(160,480,(x,d,p)=>{let _=x.createLinearGradient(0,0,0,p);_.addColorStop(0,"#2a2f3b"),_.addColorStop(1,"#0f1116"),x.fillStyle=_,x.fillRect(0,0,d,p),x.fillStyle="#4b5160",x.fillRect(8,90,d-16,6),x.fillStyle="#9aa0ab",x.fillRect(8,60,d-16,4),x.fillStyle="#c2c6cf",x.fillRect(d/2-3,60,6,3),x.fillStyle="#c0392b",x.beginPath(),x.moveTo(d/2-40,66),x.lineTo(d/2+40,66),x.lineTo(d/2+50,300),x.lineTo(d/2-50,300),x.closePath(),x.fill(),x.fillStyle="rgba(0,0,0,.25)",x.fillRect(d/2-4,90,8,210),x.fillStyle="#2a2d35",x.fillRect(14,p-90,d-28,50)}),a=k(1449002,0.45,0.4),l=k(2765124,0.4,0.5),c=k(790036,0.6),h=0.46,u=-12.045;for(let x=0;x<14;x++){let d=-4.7+x*0.5,p=x===3||x===9;B(ce,0.46,1.9,0.488,a,-12.045,1.05,d);let _=s(x+1,x%2?"#1f3052":"#27406e",p),y=new ft({map:_,roughness:0.4,metalness:0.35,side:Nt});if(!p)Bt(ce,new Ht(0.472,1.88),y,-11.794,1.05,d,0,Math.PI/2,0);else{Bt(ce,new Ht(0.46,1.86),new ft({map:o,roughness:0.7}),-11.796000000000001,1.05,d,0,Math.PI/2,0);let v=new qe;if(v.position.set(-11.790000000000001,1.05,d-0.236),v.rotation.y=x===3?1.15:1.5,ce.add(v),Bt(v,new Ht(0.472,1.88),y,0,0,0.236,0,Math.PI/2,0),B(v,0.012,1.88,0.012,kt,0,0,0),x===9)B(ce,0.2,0.32,0.26,k(2059076,0.8),-11.985,0.34,d+0.02),B(ce,0.2,0.04,0.2,k(1448482,0.6),-11.985,0.52,d+0.02)}B(ce,0.012,1.9,0.012,kt,-11.797,1.05,d-0.25)}let f=-1.4500000000000002,m=7;B(ce,0.5,0.05,m+0.04,l,-12.03,2.03,f),B(ce,0.48000000000000004,0.1,m,c,-12.035,0.05,f),B(ce,0.46,1.9,0.02,a,-12.045,1.05,-4.955),B(ce,0.46,1.9,0.02,a,-12.045,1.05,2.0549999999999997),B(ce,0.5,0.88,m+0.04,k(2304829,0.6),-12.03,2.51,f).visible=!1;let g=k(10121026,0.5);for(let x of[-2.6,1.9]){for(let d=0;d<4;d++)B(ce,0.1,0.035,2.6,g,-11.05+d*0.105,0.46,x);for(let d of[-1.2,0,1.2]){B(ce,0.42,0.035,0.05,Wu,-10.9,0.43,x+d);for(let p of[-0.19,0.19])B(ce,0.04,0.43,0.04,Wu,-10.9+p,0.215,x+d)}B(ce,0.34,0.02,2.4,k(5724511,0.5,0.5),-10.9,0.16,x);for(let d=0;d<4;d++){let p=-10.9+(d%2?0.05:-0.05),_=x-0.9+d*0.55,y=[15263976,14239787,2846681,3092275][d];Jt(ce,0.11,0.07,0.29,k(y,0.6),p,0.205,_,0.025),Jt(ce,0.09,0.03,0.14,k(14342874,0.7),p,0.245,_-0.07,0.01)}}Jt(ce,0.3,0.28,0.5,k(2106413,0.7),-10.88,0.62,-2,0.07),B(ce,0.02,0.03,0.46,k(14239787,0.5),-10.74,0.7,-2),ot(ce,0.035,0.035,0.19,new ft({color:6735615,transparent:!0,opacity:0.6,roughness:0.1}),-10.9,0.58,-3.25,14),ot(ce,0.036,0.036,0.04,k(15263976,0.4),-10.9,0.69,-3.25,14),B(ce,0.34,0.05,0.46,k(15921906,0.95),-10.9,0.5,1.3),B(ce,0.34,0.16,0.05,k(15921906,0.95),-10.9,0.43,1.52),B(ce,0.04,0.05,1.5,Wu,-8.92,1.78,-4.65),[[-5.25,12597547],[-4.95,2842536],[-4.3,3092275],[-4.05,15263976]].forEach(([x,d])=>{ot(ce,0.012,0.012,0.06,kt,-8.88,1.74,x,8).rotation.z=Math.PI/2,Jt(ce,0.1,0.62,0.34,k(d,0.9),-8.84,1.4,x,0.04)}),B(ce,0.03,1.4,1.2,new ft({color:13625855,roughness:0.04,metalness:0.85}),-8.93,1.4,-2.55),B(ce,0.036,1.48,0.05,k(1119000,0.5),-8.925,1.4,-1.97),B(ce,0.036,1.48,0.05,k(1119000,0.5),-8.925,1.4,-3.13),B(ce,0.036,0.05,1.24,k(1119000,0.5),-8.925,2.12,-2.55),B(ce,0.036,0.05,1.24,k(1119000,0.5),-8.925,0.68,-2.55),_n(ce,"ŠATNA",1.5,0.4,"#7fd0ff",-8.93,2.6,0.1,-Math.PI/2,"bold 170px Arial Black",void 0,!1),Vi(ce,-10.6,2.6,-2,16054527,7,8),Vi(ce,-10.6,2.6,2.4,16054527,6,8)})();(function(){let e=new ft({color:14939135,transparent:!0,opacity:0.34,roughness:0.12,side:Nt,depthWrite:!1}),t=(l)=>new ft({color:l,roughness:0.35}),i=k(13620185,0.35),n=k(3159098,0.5,0.8);B(ce,5.2,0.14,0.012,k(2781048,0.35),-6.2,1.08,3.99);for(let l=0;l<4;l++){let c=-8+l*1.1,h=l===1||l===3;B(ce,1.04,0.04,1.02,i,c,0.02,4.5),ot(ce,0.07,0.07,0.012,n,c,0.046,4.5,18);for(let f=0;f<3;f++)B(ce,0.1,0.004,0.012,k(10133672,0.4,1),c,0.053,4.47+f*0.03);B(ce,1.04,0.012,0.03,k(16762926,0.6),c,0.046,5),ot(ce,0.012,0.012,0.36,kt,c,2.12,4.17,12).rotation.x=Math.PI/2,Bt(ce,oi(0.115,0.115,0.018,28),kt,c,2.1,4.38),Bt(ce,oi(0.096,0.096,0.004,28),k(2106410,0.5,0.6),c,2.09,4.38);for(let f=0;f<8;f++){let m=f*Math.PI/4;Bt(ce,oi(0.007,0.007,0.006,6),k(9146521,0.3,1),c+Math.cos(m)*0.06,2.088,4.38+Math.sin(m)*0.06)}B(ce,0.2,0.13,0.025,kt,c,1.15,4.012),Bt(ce,oi(0.03,0.03,0.03,16),kt,c-0.05,1.15,4.04,Math.PI/2),Bt(ce,oi(0.022,0.022,0.03,16),kt,c+0.055,1.15,4.04,Math.PI/2),B(ce,0.012,0.05,0.012,k(14036269,0.4),c+0.055,1.18,4.06),B(ce,0.012,0.05,0.012,k(3107801,0.4),c-0.05,1.18,4.06),B(ce,0.04,0.4,0.04,kt,c+0.28,1.5,4.03),Bt(ce,oi(0.014,0.014,0.16,8),kt,c+0.28,1.65,4.12,Math.PI/2-0.5),Bt(ce,oi(0.03,0.022,0.2,10),k(1776930,0.5),c+0.28,1.42,4.12,Math.PI/2-0.5),Bt(ce,oi(0.025,0.025,0.14,10),t([14239787,3107801,4042346,15263976][l]),c-0.36,1.37,4.07),Bt(ce,oi(0.028,0.028,0.18,10),t(15921906),c-0.3,1.39,4.07),B(ce,0.3,0.012,0.1,k(13625855,0.1,0.3),c-0.33,1.27,4.05),B(ce,0.26,0.012,0.14,k(2781048,0.5),c+0.27,0.75,4.065).visible=!1,B(ce,0.026,1.9,0.96,e,c+0.55,1.07,4.5),B(ce,0.03,0.03,0.98,kt,c+0.55,2.04,4.5),B(ce,0.03,1.95,0.03,kt,c+0.55,1.05,4.99),B(ce,0.03,0.03,0.04,kt,c+0.55,2,4);let u=new qe;u.position.set(c-0.5,1.05,5),u.rotation.y=h?l===1?-1.2:-0.7:0,ce.add(u),B(u,0.98,1.9,0.022,e,0.5,0,0),B(u,0.98,0.03,0.03,kt,0.5,0.94,0),B(u,0.03,0.1,0.1,kt,0.88,0,0.03).visible=!0;for(let f of[-0.7,0.7])B(u,0.04,0.08,0.04,kt,0,f,0)}B(ce,0.026,1.9,0.96,e,-8.55,1.07,4.5),B(ce,0.03,0.03,0.98,kt,-8.55,2.04,4.5);let r=k(8826550,0.5),s=k(4943992,0.5);[4.15,5.15,6.15,7.15].forEach((l)=>{B(ce,1.5,1.75,0.04,r,-11.53,1.03,l),B(ce,1.52,0.03,0.05,kt,-11.53,1.92,l),ot(ce,0.014,0.014,0.16,kt,-10.85,0.08,l,8)});let a=(l)=>{B(ce,0.22,0.42,0.4,sc,-12.16,0.64,l),B(ce,0.24,0.035,0.42,sc,-12.16,0.86,l),Bt(ce,oi(0.028,0.028,0.014,14),kt,-12.16,0.885,l);let c=[[0,0],[0.08,0],[0.1,0.12],[0.17,0.28],[0.2,0.4],[0.19,0.43],[0.165,0.43],[0.15,0.36],[0,0.3]].map((g)=>new X(g[0],g[1]));Bt(ce,new Vl(c,28),new ft({color:16053489,roughness:0.12,side:Nt}),-11.86,0,l).scale.set(1.45,1,1),Bt(ce,new In(0.155,0.022,10,28),k(1711395,0.35),-11.86,0.452,l,Math.PI/2).scale.set(1.45,1,1);let f=new qe;f.position.set(-12.01,0.46,l),f.rotation.z=1.38,ce.add(f),Bt(f,oi(0.17,0.17,0.02,24),k(1711395,0.35),0.27,0,0).scale.set(1.5,1,1),B(ce,0.1,0.12,0.12,kt,-11.56,0.7,l+0.46),ot(ce,0.045,0.045,0.1,k(16777215,0.9),-11.56,0.7,l+0.46,14).rotation.x=Math.PI/2};[4.65,5.65,6.65].forEach((l,c)=>{a(l);let h=new qe;h.position.set(-10.83,1,l-0.45),h.rotation.y=[1.15,0,0.8][c],ce.add(h),B(h,0.03,1.72,0.9,s,0,0,0.45),B(h,0.032,0.05,0.1,kt,0.002,0,0.78),B(h,0.034,0.03,0.06,k(c===1?14036269:4042346,0.4),-0.002,0.07,0.78),B(h,0.032,0.03,0.9,kt,0,0.86,0.45);for(let u of[-0.6,0.6])B(h,0.04,0.07,0.03,kt,0,u,0.01);ot(ce,0.04,0.04,0.02,k(15263976,0.5),-12.25,1.6,l,14).rotation.z=Math.PI/2}),B(ce,0.2,0.34,0.2,k(7041144,0.5,0.6),-11,0.17,6.95),[-10.2,-9.6,-9].forEach((l)=>{Bt(ce,new Dl(0.12,0.24,6,14),sc,l,1,7.46).scale.set(1,1,0.55),B(ce,0.2,0.34,0.06,sc,l,0.78,7.52),Bt(ce,oi(0.012,0.012,0.5,8),kt,l,1.45,7.55),B(ce,0.1,0.07,0.03,kt,l,1.3,7.55),Bt(ce,oi(0.012,0.012,0.06,8),k(3159098,0.6),l,0.7,7.425),ot(ce,0.06,0.06,0.012,k(3159098,0.5,0.7),l,0.007,7.3,14)}),[-10.5,-9.9,-9.3,-8.7].forEach((l)=>B(ce,0.03,0.78,0.34,r,l,1.05,7.38)),[-6,-5.1,-4.2].forEach((l)=>{B(ce,0.52,0.1,0.42,sc,l,0.86,7.36),B(ce,0.4,0.02,0.3,k(13620442,0.2),l,0.915,7.37),ot(ce,0.025,0.025,0.004,k(3159098,0.5,0.8),l,0.926,7.4,12),Bt(ce,oi(0.014,0.014,0.14,10),kt,l,0.99,7.52),Bt(ce,oi(0.012,0.012,0.12,10),kt,l,1.05,7.46,Math.PI/2),B(ce,0.03,0.03,0.03,kt,l+0.07,0.95,7.52),B(ce,0.7,0.9,0.02,new ft({color:14676479,roughness:0.03,metalness:0.9}),l,1.62,7.56),B(ce,0.74,0.94,0.012,k(1382172,0.5),l,1.62,7.572),B(ce,0.66,0.012,0.012,Wt(15398143,3),l,2.12,7.55)}),[-5.55,-4.65].forEach((l)=>{B(ce,0.07,0.17,0.07,k(16250871,0.3),l,1.14,7.53),Bt(ce,oi(0.012,0.012,0.05,8),kt,l,1.25,7.5,Math.PI/2)}),Jt(ce,0.14,0.36,0.26,k(12106948,0.25,0.9),-3.82,1.42,6.75,0.03),B(ce,0.016,0.02,0.18,k(1382172,0.4),-3.74,1.28,6.75),Jt(ce,0.16,0.28,0.24,k(15264236,0.3,0.5),-3.82,1.35,5.95,0.05),Bt(ce,oi(0.035,0.03,0.08,14),k(2106410,0.4),-3.82,1.2,5.95),ot(ce,0.15,0.13,0.55,k(7041144,0.35,0.85),-3.95,0.28,7.2,18),ot(ce,0.155,0.155,0.03,k(3159098,0.5),-3.95,0.57,7.2,18);for(let[l,c]of[[-7.3,6.2],[-5,5.8]]){ot(ce,0.1,0.1,0.008,k(6975351,0.4,0.8),l,0.006,c,18);for(let h=0;h<3;h++)B(ce,0.14,0.004,0.012,k(3159098,0.5),l,0.011,c-0.04+h*0.04)}_n(ce,"SPRCHY · WC",2.4,0.4,"#7fd0ff",-6.2,2.6,4,0,"bold 140px Arial Black",void 0,!1),Vi(ce,-6.2,2.6,5.7,15398143,7,8)})();(function(){B(ce,0.45,0.42,2,k(2763827,0.6),0.15,0.21,6),B(ce,0.5,0.06,2,k(8018488,0.45),0.15,0.45,6),_n(ce,"BADMINTON  ›",2.2,0.36,"#6fd0ff",-1.9,2.6,7.45,Math.PI,"bold 140px Arial Black",void 0,!1);for(let e of[-3.3,0.1]){ot(ce,0.2,0.15,0.4,k(2369067,0.6),e,0.2,4.2,16),ot(ce,0.03,0.03,0.6,k(2780986,0.8),e,0.7,4.2,6);let t=new ie(new mn(0.28,12,9),k(2058804,0.8));t.scale.y=1.2,t.position.set(e,1.15,4.2),ce.add(t)}Vi(ce,-1.6,2.6,5.8,16771276,6,7)})();B(ce,5.2,Sn,0.03,Q_(5.2,Sn),-6.2,Sn/2,3.99);B(ce,0.03,2.85,2.85,uf(2.85,2.85),-8.94,1.425,-2.425);B(ce,0.03,Sn,2.65,uf(2.65,Sn),-8.94,Sn/2,2.525);B(ce,0.03,0.15,2.2,k(1381914,0.6),-8.94,0.075,0.1).visible=!1;(function(){let e=new qe;e.position.set(-0.6,0,0.4),e.rotation.y=Math.PI/2,Tt.add(e);let t=1.2,i=0.68,n=0.93,r=va(1200,680,(d,p,_)=>{for(let y=0;y<12;y++)d.fillStyle=y%2?"#2d8a40":"#34964a",d.fillRect(y*p/12,0,p/12+1,_);Ai(d,p,_,10),d.strokeStyle="rgba(255,255,255,.92)",d.lineWidth=6,d.strokeRect(12,12,p-24,_-24),d.beginPath(),d.moveTo(p/2,12),d.lineTo(p/2,_-12),d.stroke(),d.beginPath(),d.arc(p/2,_/2,82,0,7),d.stroke(),d.fillStyle="#fff",d.beginPath(),d.arc(p/2,_/2,9,0,7),d.fill();for(let y of[0,1]){let v=y?p-12:12,T=y?-1:1;d.strokeRect(y?p-12-150:12,_/2-170,150,340),d.strokeRect(y?p-12-62:12,_/2-92,62,184),d.beginPath(),d.arc(v+T*150,_/2,72,-Math.PI/2,Math.PI/2,y===1),d.stroke(),d.fillStyle="#fff",d.beginPath(),d.arc(v+T*105,_/2,7,0,7),d.fill()}}),s=k(1381914,0.42,0.1),o=k(1974310,0.55),a=14036269,l=3106518;B(e,1.36,0.14,0.72,s,0,n-0.1,0);let c=new ie(new Ht(t,i),new ft({map:r,roughness:0.55}));c.rotation.x=-Math.PI/2,c.position.y=n,e.add(c);for(let d of[-1,1])Jt(e,1.44,0.14,0.07,s,0,n+0.035,d*0.375,0.02),B(e,1.46,0.012,0.075,k(14212064,0.2,1),0,n+0.108,d*0.375);for(let d of[-1,1]){for(let _ of[-1,1])Jt(e,0.07,0.14,0.27,s,d*0.665,n+0.035,_*0.2+_*0.02,0.02);B(e,0.07,0.05,0.22,o,d*0.665,n+0.075,0),B(e,0.2,0.012,0.19,k(460810,0.8),d*0.74,n-0.032,0);let p=B(e,0.16,0.02,0.2,k(2763827,0.5),d*0.8,n-0.07,0);p.rotation.z=-d*0.22,B(e,0.012,0.045,0.2,k(2763827,0.5),d*0.875,n-0.04,0),B(e,0.14,0.045,0.012,k(2763827,0.5),d*0.8,n-0.045,0.098),B(e,0.14,0.045,0.012,k(2763827,0.5),d*0.8,n-0.045,-0.098);for(let _ of[-1,1]){let y=B(e,0.12,0.05,0.12,o,d*0.6,n+0.025,_*0.3);y.rotation.y=Math.PI/4}B(e,0.016,0.02,0.6,Wt(d>0?14036269:3106518,1.6),d*0.69,n-0.17,0)}B(e,1.3,0.01,0.01,Wt(3725567,2.2),0,n-0.175,0.365),B(e,1.3,0.01,0.01,Wt(3725567,2.2),0,n-0.175,-0.365);for(let[d,p]of[[-0.6,-0.31],[0.6,-0.31],[-0.6,0.31],[0.6,0.31]])ot(e,0.036,0.026,0.82,s,d,0.41,p,14),ot(e,0.02,0.026,0.03,k(13159378,0.2,1),d,0.014,p,12),B(e,0.07,0.04,0.07,k(2763827,0.5),d,0.84,p);B(e,1.2,0.035,0.03,s,0,0.3,0.31),B(e,1.2,0.035,0.03,s,0,0.3,-0.31),B(e,0.03,0.035,0.62,s,-0.6,0.3,0),B(e,0.03,0.035,0.62,s,0.6,0.3,0);let h=[["A",1],["A",2],["B",3],["A",5],["B",5],["A",3],["B",2],["B",1]],u={1:0,2:0.24,3:0.2,5:0.115},f=n+0.075,m=k(14212064,0.15,1),g=k(789776,0.6);h.forEach(([d,p],_)=>{let y=-0.518+_*0.148,v=d==="A"?a:l,T=d==="A"?1:-1,w=new qe;w.position.set(y,f,(_*37%7-3)*0.012),e.add(w);let M=0.7,b=0.5,C=d==="A"?1:-1;Bt(w,oi(0.0075,0.0075,M+b,10),m,0,0,C*(M-b)/2,Math.PI/2),Bt(w,oi(0.0205,0.0205,0.16,14),g,0,0,C*(M-0.05),Math.PI/2),Bt(w,oi(0.022,0.022,0.012,14),k(15263976,0.4),0,0,C*(M-0.135),Math.PI/2),Bt(w,oi(0.0215,0.0215,0.012,14),m,0,0,C*M,Math.PI/2),Bt(w,oi(0.014,0.014,0.02,12),g,0,0,-C*0.4,Math.PI/2);let F=(_%3-1)*0.35;for(let D=0;D<p;D++){let V=p===1?0:(D-(p-1)/2)*u[p],ee=new qe;ee.position.set(0,0,V),ee.rotation.z=F*T*0.5,w.add(ee),B(ee,0.03,0.058,0.04,k(v,0.55),0,-0.02,0),B(ee,0.026,0.034,0.03,k(x(v),0.6),0,-0.067,0),B(ee,0.04,0.012,0.05,g,T*0.008,-0.088,0),Bt(ee,new mn(0.014,10,8),k(15782832,0.6),0,0.02,0)}});function x(d){return(d>>16&255)*0.55<<16|(d>>8&255)*0.55<<8|(d&255)*0.55}Bt(e,new mn(0.019,14,10),k(16250871,0.35),0.08,n+0.02,0.06);for(let[d,p,_]of[[0.44,a,3],[-0.44,l,5]]){Bt(e,oi(0.005,0.005,0.6,8),m,0,n+0.19,d,0,0,Math.PI/2);for(let y of[-1,1])B(e,0.014,0.19,0.014,m,y*0.3,n+0.095,d);for(let y=0;y<10;y++){let v=y<_;Bt(e,oi(0.013,0.013,0.025,12),k(v?p:15263976,0.4),(v?-0.27:0.27)+(v?y:y-10)*0.028+(v?0:0),n+0.19,d,0,0,Math.PI/2)}}for(let[d,p]of[[-0.74,0.34],[0.74,-0.34]])ot(e,0.04,0.032,0.09,k(13620186,0.25,0.9),d,n-0.015,p,14),ot(e,0.034,0.034,0.004,k(1381914,0.5),d,n+0.031,p,14)})();var _a=new qe;Pt.add(_a);var Ti=new qe;Pt.add(Ti);var ya=new qe;$i.add(ya);var pc=[],id=[],Ke=-3.4,wi=7.7,Tr=29.7,It=wi+11,mi=12.05,$r=2.6,VS=10.5,ey=VS-$r,Ma={x0:Ke-mi,x1:Ke+mi,z0:wi,z1:Tr,cx:Ke,Hs:$r};_a.position.set(Ke,0,It);_a.rotation.y=Math.PI;var wr=[Ke+6.6,Ke-1.4],Kh=It,ty=[[Ma.x0-1,Ke-12+5,12.5,24.9]],mc=(e,t=0)=>{let i=mi-t,n=(e-Ke)/i;return $r+(ey-t)*Math.sqrt(Math.max(0,1-n*n))};ai.hallwood=(()=>{let e=$t(512,512),t=e.getContext("2d");for(let r=0;r<24;r++){t.fillStyle=`hsl(${32+Ze()*6},${52+Ze()*10}%,${46+Ze()*12}%)`,t.fillRect(0,r*21.333333333333332,512,21.333333333333332);for(let o=0;o<7;o++){t.strokeStyle=`rgba(60,28,8,${0.05+Ze()*0.1})`,t.lineWidth=1;let a=r*21.333333333333332+2+Ze()*17.333333333333332;t.beginPath(),t.moveTo(0,a);for(let l=0;l<=512;l+=64)t.lineTo(l,a+(Ze()-0.5)*3);t.stroke()}t.fillStyle="rgba(30,14,4,.55)",t.fillRect(0,r*21.333333333333332,512,1.5);let s=Ze()*512;t.fillRect(s,r*21.333333333333332,1.5,21.333333333333332)}return Ai(t,512,512,12),e})();var Ts=new Gi(ai.hallwood);Ts.colorSpace=yt;Ts.wrapS=Ts.wrapT=un;Ts.repeat.set(0.25,0.25);Ts.anisotropy=8;var Xu=new ft({map:Ts,roughness:0.62,metalness:0,side:Nt});function Yu(e,t,i,n,r=0){let s=[],o=[],a=[],l=r;e.forEach((h,u)=>{if(u)l+=Math.hypot(h[0]-e[u-1][0],h[1]-e[u-1][1]);if(s.push(h[0],h[1],t,h[0],h[1],i),o.push(l,t,l,i),u){let f=(u-1)*2;a.push(f,f+1,f+2,f+1,f+3,f+2)}});let c=new Ve;return c.setAttribute("position",new Ee(s,3)),c.setAttribute("uv",new Ee(o,2)),c.setIndex(a),c.computeVertexNormals(),new ie(c,n)}(function(){let i=[];for(let p=0;p<=72;p++){let _=Math.PI-Math.PI*p/72;i.push([Ke+mi*Math.cos(_),$r+ey*Math.sin(_)])}let n=$r;Ti.add(Yu([[Ke-mi,0],[Ke-mi,$r]],wi,Tr,Xu,0)),Ti.add(Yu([[Ke+mi,$r],[Ke+mi,0]],wi,Tr,Xu,n+40)),ya.add(Yu(i,wi,Tr,Xu,n));let r=72,s=(p,_)=>{let y=[];for(let v=r;v>=0;v--){let T=p+(_-p)*v/r;y.push([T,mc(T)])}return y},o=[[-8.2,-6.8],[-2.8,-1]],a=[[Ke-mi,0]];for(let[p,_]of o)a.push([p,0],[p,2.2],[_,2.2],[_,0]);a.push([Ke+mi,0]),a.push(...s(Ke-mi,Ke+mi));let l=new ft({map:Ts,roughness:0.65}),c=new ie(new gr(new Li(a.map((p)=>new X(p[0],p[1]))),{depth:0.22,bevelEnabled:!1}),l);c.position.z=wi-0.11,Ti.add(c),xc.push(c),id.push(c);let h=[[Ke-mi,0],[Ke+mi,0],...s(Ke-mi,Ke+mi)],u=new ie(new gr(new Li(h.map((p)=>new X(p[0],p[1]))),{depth:0.22,bevelEnabled:!1}),l);u.position.z=Tr,Ti.add(u),xc.push(u),id.push(u);let f=k(1381914,0.5);for(let[p,_]of o)B(Ti,0.1,2.2,0.3,f,p,1.1,wi),B(Ti,0.1,2.2,0.3,f,_,1.1,wi),B(Ti,_-p,0.1,0.3,f,(p+_)/2,2.2,wi);let m=$t(2048,512),g=m.getContext("2d");g.fillStyle="#ee7d1c",g.fillRect(0,0,2048,512);for(let p=0;p<40;p++)g.fillStyle=`rgba(${p%2?"255,255,255":"120,50,0"},.035)`,g.fillRect(p*52,0,26,512);g.fillStyle="#fff",g.font="bold 250px Arial Black, Arial",g.textAlign="center",g.textBaseline="middle",g.fillText("VAŠE LIGA",1024,270);let x=new Gi(m);x.colorSpace=yt,x.anisotropy=8;let d=new ie(new Ht(18,4.5),new ft({map:x,roughness:0.9,emissiveMap:x,emissive:16777215,emissiveIntensity:0.45}));d.position.set(Ke,2.35,Tr-0.02),d.rotation.y=Math.PI,Ti.add(d)})();(function(){let n=new ft({map:lf(ai.steel,2,2),color:11844292,roughness:0.55,metalness:0.15}),r=[],s=[];for(let x=0;x<=40;x++){let d=Ke-mi+0.15+(2*mi-0.3)*x/40;r.push([d,mc(d,0.18)-0.05]),s.push([d,mc(d,0.18)-0.75+Math.abs(x-20)/20*0.25])}let o=[],a=ki(0,1,0),l=new Be,c=new ri,h=new A,u=new A,f=(x,d,p)=>{let _=ki(x[0],x[1],p),y=ki(d[0],d[1],p),v=y.clone().sub(_),T=v.length();c.setFromUnitVectors(a,v.normalize()),h.copy(_).add(y).multiplyScalar(0.5),u.set(1,T,1),l.compose(h,c,u),o.push(l.clone())};pc.length=0;for(let x=0;x<9;x++){let d=wi+1+x*(Tr-wi-2)/8;pc.push(d);for(let p of[r,s]){let _=new Yn(p.map((y)=>ki(y[0],y[1],d)));ya.add(new ie(new cr(_,80,0.07,8,!1),n))}for(let p=0;p<40;p++)f(r[p],s[p],d),f(s[p],r[p+1],d);f(r[40],s[40],d);for(let p of[Ke-mi+0.14,Ke+mi-0.14])B(Ti,0.28,$r+0.1,0.28,n,p,($r+0.1)/2,d),B(Ti,0.4,0.04,0.4,k(3158842,0.5,0.6),p,0.02,d)}let m=new wt(0.026,0.026,1,6),g=new Rn(m,n,o.length);o.forEach((x,d)=>g.setMatrixAt(d,x)),ya.add(g);for(let x=0;x<=12;x++){let d=Ke-mi+0.2+(2*mi-0.4)*x/12,p=mc(d,0.18)-0.05,_=ot(ya,0.045,0.045,Tr-wi-1.4,n,d,p,(wi+Tr)/2,8);_.rotation.x=Math.PI/2}})();var WS=[Ke+11,Ke+2.6,Ke-6,Ke-9.8];for(let e of WS)for(let t=0;t<pc.length-1;t++){let i=(pc[t]+pc[t+1])/2,n=mc(e,0.18)-0.05,r=n-1.05;B(Ti,0.2,0.07,2.2,k(13225170,0.35,0.6),e,r,i),B(Ti,0.15,0.015,2.1,Wt(16774886,2.6),e,r-0.045,i);for(let s of[-0.9,0.9])B(Ti,0.012,n-r-0.04,0.012,k(2237480,0.5,0.6),e,(n+r)/2,i+s)}for(let e of[Ke+11,Ke+2.6,Ke-6])for(let t of[wi+3,It,Tr-3])Vi(Pt,e,7.6,t,16774114,9,30);Vi(Pt,Ke-9.8,6.2,It,16774114,4,18);function qu(e,t,{blot:i=0.1,bs:n=0.5,grain:r=0.05,gs:s=90,sheen:o=0}={}){e.customProgramCacheKey=()=>"sd"+t,e.onBeforeCompile=(a)=>{a.vertexShader=a.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vWP;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vWP=(modelMatrix*vec4(transformed,1.0)).xyz;`),a.fragmentShader=a.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vWP;
float h3(vec3 p){p=fract(p*0.3183099+.1);p*=17.0;return fract(p.x*p.y*p.z*(p.x+p.y+p.z));}
float vn(vec3 x){vec3 i=floor(x),f=fract(x);f=f*f*(3.0-2.0*f);return mix(mix(mix(h3(i),h3(i+vec3(1,0,0)),f.x),mix(h3(i+vec3(0,1,0)),h3(i+vec3(1,1,0)),f.x),f.y),mix(mix(h3(i+vec3(0,0,1)),h3(i+vec3(1,0,1)),f.x),mix(h3(i+vec3(0,1,1)),h3(i+vec3(1,1,1)),f.x),f.y),f.z);}`).replace("#include <color_fragment>",`#include <color_fragment>
{ float b=vn(vWP/${n.toFixed(3)})*0.6+vn(vWP/${(n*0.35).toFixed(3)})*0.4; float g=vn(vWP*${s.toFixed(1)}); float gl=smoothstep(0.0,1.0,1.0-min(1.0,length(fwidth(vWP))*${s.toFixed(1)}*0.6));
  diffuseColor.rgb *= 1.0 + (b-0.5)*${(i*2).toFixed(3)} + (g-0.5)*${(r*2).toFixed(3)}*gl; }`)}}var rf=k(13214826,0.6),cn=k(2763825,0.5,0.6),Fn=k(12106948,0.3,0.85);function XS(e,t){let i=new qe;i.position.set(e,0,t),Ti.add(i),ot(i,0.026,0.026,1.62,cn,0,0.81,0,12),ot(i,0.26,0.28,0.045,cn,0,0.022,0,28),ot(i,0.07,0.09,0.12,cn,0,0.1,0,16),ot(i,0.03,0.03,0.22,Fn,0.05,0.5,0,8).rotation.z=Math.PI/2}for(let e of wr)for(let t of[-1,1])XS(e+t*3.09,It);function ld(e,t,i,n,r){let s=new qe;s.position.set(e,0,t),s.rotation.y=i,Ti.add(s);for(let o of[-1,0,1])B(s,n,0.035,0.115,rf,0,0.45,o*0.125);for(let o of[-1,1]){let a=o*(n/2-0.14);for(let l of[-1,1])B(s,0.045,0.45,0.045,cn,a,0.225,l*0.19);B(s,0.04,0.04,0.42,cn,a,0.2,0),B(s,0.04,0.04,0.42,cn,a,0.425,0)}if(B(s,n-0.2,0.03,0.03,cn,0,0.2,0),r){for(let o of[-1,1])B(s,0.045,0.5,0.045,cn,o*(n/2-0.14),0.7,-0.19);for(let o of[0.68,0.84])B(s,n,0.12,0.03,rf,0,o,-0.215)}return s}for(let e of[-6,-2,2,6])ld(Ke+11.3,It+e,-Math.PI/2,2,!0);ld(wr[0],It-9.3,0,1.5,!0);for(let e of wr)ld(e,It+9.3,Math.PI,1.5,!0);function iy(e,t,i){let n=new qe;n.position.set(e,0,t),Ti.add(n);let r=k(2050728,0.45),s=1.5;for(let o of[-1,1])for(let a of[-1,1]){let l=ot(n,0.022,0.022,s,Fn,o*0.3,s/2,a*0.27,10);l.rotation.z=-o*0.07,l.rotation.x=a*0.07}for(let o of[0.35,0.8,1.2])B(n,0.6,0.025,0.025,Fn,0,o,0.27),B(n,0.6,0.025,0.025,Fn,0,o,-0.27),B(n,0.025,0.025,0.54,Fn,0.3,o,0),B(n,0.025,0.025,0.54,Fn,-0.3,o,0);B(n,0.58,0.05,0.58,r,0,s+0.02,0),B(n,0.05,0.55,0.52,r,i*0.27,s+0.33,0).rotation.z=i*0.08;for(let o of[-1,1])B(n,0.45,0.04,0.05,Fn,0,s+0.28,o*0.3),B(n,0.04,0.26,0.04,Fn,-i*0.18,s+0.15,o*0.3);B(n,0.32,0.02,0.5,k(15329770,0.6),-i*0.42,s+0.48,0);for(let o of[-1,1])B(n,0.03,0.5,0.03,Fn,-i*0.4,s+0.24,o*0.24);for(let o of[0,1,2,3])B(n,0.05,0.03,0.5,Fn,-i*(0.33+o*0.045),0.28+o*0.32,0);return B(n,0.03,s,0.03,Fn,-i*0.44,s/2,-0.25).rotation.z=i*0.06,B(n,0.03,s,0.03,Fn,-i*0.44,s/2,0.25).rotation.z=i*0.06,n}iy(Ke+10.4,It,1);iy(Ke-5.4,It,-1);var ii=Ma.x0+0.1;(function(){let t=[2864038,9395160,15228303,15764004],i=new qe;Ti.add(i);for(let c=0;c<3;c++){let h=ii+0.04+c*0.95;for(let u of[0,0.88])B(i,0.05,2.5,0.05,rf,ii,1.25,8.4+c*0.95+u);for(let u=0;u<15;u++){let f=ot(i,0.016,0.016,0.88,rf,ii+0.02,0.2+u*0.155,8.84+c*0.95,8);f.rotation.x=Math.PI/2}}let n=$t(256,128),r=n.getContext("2d"),s=r.createLinearGradient(0,0,256,128);s.addColorStop(0,"#9db6c8"),s.addColorStop(0.5,"#cfe0ec"),s.addColorStop(1,"#8fa8bb"),r.fillStyle=s,r.fillRect(0,0,256,128),r.fillStyle="rgba(255,255,255,.28)",r.beginPath(),r.moveTo(40,0),r.lineTo(90,0),r.lineTo(40,128),r.lineTo(0,128),r.fill();let o=new Gi(n);o.colorSpace=yt;let a=new ie(new Ht(3.6,1.7),new Mt({map:o,toneMapped:!1,color:12303291}));a.position.set(Ke-6.6,1.5,wi+0.13),i.add(a),B(i,3.7,0.05,0.03,cn,Ke-6.6,2.37,wi+0.13),B(i,3.7,0.05,0.03,cn,Ke-6.6,0.63,wi+0.13),t.forEach((c,h)=>B(i,0.62,0.014,1.75,k(c,0.85),Ke-10.2+h*0.75,0.008,10,0));for(let c=0;c<3;c++){let h=ot(i,0.075,0.075,0.6,k([2763310,2450411,14709803][c],0.8),-10.9+c*0.25,0.075,9.1+c%2*0.15,20);h.rotation.z=Math.PI/2}for(let[c,h,u]of[[-10.6,11.3,2920447],[-9.9,11,16747052],[-9.3,11.6,4247930]]){let f=new ie(new mn(0.32,20,16),k(u,0.45));f.position.set(c,0.32,h),i.add(f)}_n(i,"WARM-UP · STRETCH",3.4,0.42,"#7be3ff",ii+0.1,3.1,10.2,Math.PI/2,"bold 100px Arial Black, Arial",void 0,!1);let l=new qe;Ti.add(l),B(l,0.5,0.05,2.4,cn,ii+0.3,0.55,27.3),B(l,0.5,0.05,2.4,cn,ii+0.3,1,27.3);for(let c of[-1.15,1.15])B(l,0.5,1.05,0.05,cn,ii+0.3,0.52,27.3+c);for(let c=0;c<6;c++)for(let h of[0.6,1.05]){let u=26.4+c*0.36,f=ot(l,0.012,0.012,0.2,Fn,ii+0.3,h+0.04,u,8);f.rotation.x=Math.PI/2,f.rotation.z=Math.PI/2;for(let m of[-1,1])ot(l,0.055,0.055,0.05,cn,ii+0.3+m*0.11,h+0.04,u,14).rotation.z=Math.PI/2}for(let c=0;c<5;c++){let h=25.7+c*0.5,u=new ie(new mn(0.1,16,12),k([1381914,1381914,12597547,1381914,1381914][c],0.5,0.4));u.position.set(ii+1.55,0.1,h),l.add(u);let f=new ie(new In(0.06,0.012,8,14,Math.PI),k(1381914,0.5,0.4));f.position.set(ii+1.55,0.2,h),f.rotation.y=Math.PI/2,l.add(f)}[[0.5,0.45],[0.6,0.6],[0.75,0.75]].forEach(([c,h],u)=>B(l,h,c,h,k(13935466,0.7),ii+2.9+u*0.95,c/2,28.8));for(let c=0;c<9;c++)B(l,0.5,0.012,0.04,k(16765498,0.6),ii+2.4,0.007,25.6+c*0.4);for(let c of[-1,1])B(l,0.03,0.012,3.6,k(16765498,0.6),ii+2.4+c*0.25,0.007,27.4);for(let c=0;c<6;c++){let h=new ie(new Js(0.09,0.2,14),k(16742938,0.6));h.position.set(ii+4.1,0.1,25.7+c*0.7),l.add(h)}for(let[c,h,u]of[[-14.5,29.1,2780986],[-14,29.2,9054762],[-13.5,29,2772874]]){let f=new ie(new mn(0.13,16,12),k(u,0.6));f.position.set(c,0.13,h),l.add(f)}for(let c of[27,27.5])B(l,0.03,0.9,0.012,k(16765498,0.7),ii+0.05,1.8,c),B(l,0.05,0.12,0.05,cn,ii+0.05,1.3,c);B(l,0.05,0.06,0.6,cn,ii+0.05,2.3,27.25),_n(l,"CONDITIONING · FOOTWORK",3.8,0.42,"#ffb15a",ii+0.1,3.1,27.2,Math.PI/2,"bold 90px Arial Black, Arial",void 0,!1)})();var vs={vl:Ke+5.62,hl:Ke+8.82},sf=2.2,Ss=wi+0.11,Zi=Ke-1.4,Ki=wi+0.11;function YS(e,t,i,n,r,s){let o=e.createLinearGradient(0,0,0,i);if(o.addColorStop(0,n.bg[0]),o.addColorStop(1,n.bg[1]),e.fillStyle=o,e.fillRect(0,0,t,i),e.fillStyle=n.acc,e.fillRect(0,0,t,10),e.textBaseline="middle",e.textAlign="left",e.font="bold 68px Arial Black, Arial",e.fillStyle=n.acc,e.fillText(n.name,40,66),e.font="600 28px Arial",e.fillStyle="#8a96c4",e.fillText(n.sub+" · 2026",42,120),e.fillStyle=s?"#ff3b4a":"#5b1b24",e.beginPath(),e.arc(t-175,64,13,0,7),e.fill(),e.textAlign="right",e.fillStyle="#fff",e.font="bold 34px Arial",e.fillText("LIVE",t-40,66),r===0)e.textAlign="left",e.fillStyle=n.acc,e.font="bold 210px Arial Black, Arial",e.fillText(n.big,36,290),e.fillStyle="#8a96c4",e.font="600 32px Arial",e.fillText(n.bigL,44,410),n.stats.forEach((a,l)=>{e.textAlign="left",e.fillStyle="#fff",e.font="bold 58px Arial",e.fillText(a[0],610,215+l*100),e.fillStyle="#8a96c4",e.font="600 24px Arial",e.fillText(a[1],612,252+l*100)}),n.form.forEach((a,l)=>{let c=70+l*70;e.fillStyle=a===1?"#45e08a":a===2?"#8a96c4":"#ff4d6d",e.beginPath(),e.arc(c,500,26,0,7),e.fill(),e.fillStyle="#05070f",e.textAlign="center",e.font="bold 28px Arial",e.fillText(a===1?"W":a===2?"D":"L",c,502)}),e.textAlign="left",e.fillStyle="#8a96c4",e.font="600 24px Arial",e.fillText("FORM · LAST 5",450,500);else e.textAlign="left",e.fillStyle="#8a96c4",e.font="600 28px Arial",e.fillText(n.head,42,178),n.rows.slice(0,5).forEach((a,l)=>{let c=245+l*62;e.fillStyle="rgba(255,255,255,.06)",e.fillRect(36,c-26,t-72,52),e.textAlign="left",e.fillStyle="#e8ecff",e.font="600 30px Arial",e.fillText(a[0],56,c);let h=a[2]==="w"?"#45e08a":a[2]==="l"?"#ff4d6d":a[2]==="d"?"#ffcf3a":"#8a96c4";e.fillStyle=h,e.textAlign="right",e.font="bold 36px Arial",e.fillText(a[1],t-60,c)});e.fillStyle="rgba(255,255,255,.12)",e.fillRect(0,i-62,t,2),e.textAlign="left",e.fillStyle="#9aa6a0",e.font="600 25px Arial",e.fillText("E  ·  OTEVŘÍT DETAIL",40,i-30),e.textAlign="right",e.fillText(n.foot,t-40,i-30),[0,1].forEach((a)=>{e.fillStyle=a===r?n.acc:"#2a3358",e.beginPath(),e.arc(t/2-12+a*24,i-30,6,0,7),e.fill()})}function qS(e){let t=!!e.getObjectByName("Vybaveni_Tabule_VasaLiga_Telo");[["vl",0],["hl",1]].forEach(([i,n])=>{let r=document.createElement("canvas");r.width=1024,r.height=648;let s=r.getContext("2d"),o=new Gi(r);if(o.colorSpace=yt,o.anisotropy=8,!t)B(Pt,2.6,1.7,0.06,k(657934,0.35),vs[i],sf,Ss+0.03);let a=new ie(new Ht(2.45,1.55),new Mt({map:o,toneMapped:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}));a.position.set(vs[i],sf,Ss+0.066),Pt.add(a);let l="",c=()=>{if(!(window.FUNUI&&FUNUI.league))return;let h=Date.now(),u=Math.floor(h/5000+n)%2,f=Math.floor(h/600)%2,m=u+"|"+f;if(m===l)return;l=m,YS(s,r.width,r.height,FUNUI.league(i),u,f),o.needsUpdate=!0};c(),setInterval(c,250)})}var ny=!1,gn={X0:7.6,D:1.1,H:0.4,N:4,LEN:8.4,AIS:1.2};function ZS(e,t){if(!ny)return 0;let i=Ke-e,n=t-It;if(Math.abs(n)>gn.LEN/2+gn.AIS||i<gn.X0||i>gn.X0+gn.N*gn.D)return 0;return gn.H*Math.min(gn.N,Math.ceil((i-gn.X0)/gn.D))}function ry(){ny=!0,ty.length=0;for(let e=0;e<gn.N;e++){let t=Ke-(gn.X0+e*gn.D+0.5);Ut(t,It-gn.LEN/2+0.25,t,It+gn.LEN/2-0.25,0.3)}}window.__tribTest=()=>ry();var da={x:Ke-8.2,y:1.75,z:wi+0.11+0.046},KS=1.4,JS=2;function jS(e,t){let i=document.createElement("canvas");i.width=700,i.height=1000;let n=i.getContext("2d"),r=new Gi(i);if(r.colorSpace=yt,r.anisotropy=8,!t)B(Pt,1.55,2.15,0.04,k(1381914,0.4,0.3),da.x,da.y,da.z-0.026);let s=new ie(new Ht(KS,JS),new Mt({map:r,toneMapped:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}));s.position.set(da.x,da.y,da.z),Pt.add(s);let o={racket:null,shoes:null,state:"loading"},a={},l=(f,m,g,x)=>{n.font=g;let d=String(f||"").split(" "),p=[],_="";for(let y of d){let v=_?_+" "+y:y;if(n.measureText(v).width>m&&_)p.push(_),_=y;else _=v}if(_)p.push(_);return p.slice(0,x)},c=()=>{let f=n.createLinearGradient(0,0,0,1000);f.addColorStop(0,"#04170d"),f.addColorStop(1,"#020806"),n.fillStyle=f,n.fillRect(0,0,700,1000),n.fillStyle="#1fd05a",n.fillRect(0,0,700,14),n.fillRect(0,986,700,14),n.textBaseline="alphabetic",n.textAlign="left",n.fillStyle="#fff",n.font="italic 900 86px Arial Black, Arial",n.fillText("YONEX",40,120),n.fillStyle="#1fd05a",n.font="700 30px Arial",n.fillText("NEW ARRIVALS",44,168),[["racket","RACKET",200],["shoes","SHOES",595]].forEach(([m,g,x])=>{n.fillStyle="rgba(255,255,255,.07)",n.fillRect(30,x,640,365),n.fillStyle="#1fd05a",n.font="700 26px Arial",n.fillText(g,52,x+40);let d=o[m],p=a[m];if(p){let _=Math.min(270/p.width,300/p.height);n.drawImage(p,385+(265-p.width*_)/2,x+50+(300-p.height*_)/2,p.width*_,p.height*_)}if(d)n.fillStyle="#fff",l(d.name,p?320:580,"700 34px Arial",5).forEach((_,y)=>n.fillText(_,52,x+92+y*42)),n.fillStyle="#1fd05a",n.font="bold 46px Arial",n.fillText(d.price||"",52,x+310),n.fillStyle="#9fb3a8",n.font="600 24px Arial",n.fillText(d.date?"added "+d.date:"",52,x+350);else n.fillStyle="#7d8f86",n.font="600 30px Arial",n.fillText(o.state==="err"?"coming soon":"loading…",52,x+120)}),n.fillStyle="#7d8f86",n.font="600 22px Arial",n.fillText("LATEST FROM YONEX.CZ · LIVE",40,975),r.needsUpdate=!0};c();let h=window.YONEX_FEED&&YONEX_FEED.api||"",u=(f,m)=>{if(!m)return;if(o[f]=m,m.img){let g=new Image;g.onload=()=>{a[f]=g,c()},g.src=m.img}};if(!h){o.state="err",c();return}fetch(h).then((f)=>f.json()).then((f)=>{u("racket",f.racket),u("shoes",f.shoes),o.state=f.racket||f.shoes?"ok":"err",c()}).catch(()=>{o.state="err",c()})}function $S(e){let t=!!e.getObjectByName("Vybaveni_Pitko_Telo"),i=k(13225686,0.34,0.65),n=k(15133166,0.2,0.85),r=k(723982,0.6,0.2),s=k(10396843,0.28,0.85),o=(L,N,j,z=1)=>{let H=[[-L,0],[L,0],[L,N]];for(let Y=1;Y<18;Y++){let ae=Math.PI*Y/18;H.push([L*Math.cos(ae),N+j*Math.sin(ae)])}return H.push([-L,N]),H};if(!t){let L=(ae,G)=>{let Q=new Li;return ae.forEach(([Me,me],Fe)=>Fe?Q.lineTo(Me*G,-me*G):Q.moveTo(Me*G,-me*G)),Q},N=(ae,G,Q,Me,me=1)=>{let Fe=new ie(new gr(L(ae,me),{depth:G,bevelEnabled:!1,curveSegments:4}),Q);return Fe.rotation.x=-Math.PI/2,Fe.position.set(Zi,Me,Ki),Pt.add(Fe),Fe},j=o(0.2,0.14,0.2);N(j,0.93,i,0),N(o(0.205,0.14,0.205),0.03,n,0.92),N(o(0.165,0.13,0.17),0.004,s,0.951),ot(Pt,0.03,0.03,0.006,r,Zi,0.955,Ki+0.22,20);for(let ae=0;ae<6;ae++)B(Pt,0.004,0.008,0.1,r,Zi+0.2005,0.7+ae*0.03,Ki+0.07),B(Pt,0.004,0.008,0.1,r,Zi+0.2005,0.06+ae*0.03,Ki+0.07);ot(Pt,0.022,0.022,0.035,n,Zi-0.11,0.967,Ki+0.1,16);let z=[[0,0.95,0],[0,1.26,0]];for(let ae=0;ae<=12;ae++){let G=Math.PI-Math.PI*ae/12;z.push([0,1.26+0.06*Math.sin(G),0.06+0.06*Math.cos(G)])}z.push([0,1.2,0.12]);let H=new ie(new cr(new Yn(z.map((ae)=>new A(Zi-0.11+ae[0],ae[1],Ki+0.1+ae[2])),!1,"catmullrom",0.1),40,0.0095,10,!1),n);Pt.add(H),ot(Pt,0.02,0.02,0.04,n,Zi+0.1,0.97,Ki+0.22,16);let Y=new ie(new cr(new Yn([[0,0.97,0],[0,1,0],[0,1,0.03]].map((ae)=>new A(Zi+0.1+ae[0],ae[1],Ki+0.22+ae[2]))),10,0.008,8,!1),n);Pt.add(Y)}let a=ot(Pt,0.014,0.014,0.03,n,Zi+0.155,0.965,Ki+0.17,16),l=a.position.y,c=0.958,h=new A(Zi-0.11,1.198,Ki+0.22),u=new A(Zi-0.11,c,Ki+0.22),f=new A(Zi+0.1,0.995,Ki+0.25),m=0.24,g=0.9,x=(g+Math.sqrt(g*g+19.6*(f.y-c)))/9.8,d=new A(Zi+0.1,c,Ki+0.25+m*x),p=[0,0.3333333333333333,0.6666666666666666,1].map((L)=>new A().lerpVectors(h,u,L)),_=[];for(let L=0;L<=12;L++){let N=L/12*x;_.push(new A(f.x,f.y+g*N-4.9*N*N,f.z+m*N))}let y=[],v=(L,N,j,z)=>{let H=new ie(new cr(new Yn(L),24,N,7,!1),new Mt({color:j,transparent:!0,opacity:0,depthWrite:!1,toneMapped:!1}));return H.userData.o=z,Pt.add(H),y.push(H),H};v(p,0.0038,10475250,0.62),v(p,0.0075,8373482,0.2),v(_,0.0036,10475250,0.62),v(_,0.0072,8373482,0.2);let T=70,w=new Float32Array(T*3).fill(-9),M=[],b=new Float32Array(T);for(let L=0;L<T;L++)M.push([0,0,0]);let C=new Ve;C.setAttribute("position",new qt(w,3));let F=new kr({color:12904699,size:0.013,transparent:!0,opacity:0.85,depthWrite:!1,toneMapped:!1}),D=new Ks(C,F);D.frustumCulled=!1,Pt.add(D);let V=[u,d].map((L)=>{let N=new ie(new io(0.01,0.015,28),new Mt({color:12576511,transparent:!0,opacity:0,depthWrite:!1,toneMapped:!1,side:Nt}));return N.rotation.x=-Math.PI/2,N.position.set(L.x,c+0.002,L.z),Pt.add(N),N}),ee={until:0,press:-9,a:0,last:performance.now()/1000},I=null,J=(L)=>{try{if(I=I||new(window.AudioContext||window.webkitAudioContext),I.state==="suspended")I.resume();let N=I.sampleRate,j=Math.floor(N*L),z=I.createBuffer(1,j,N),H=z.getChannelData(0),Y=0;for(let me=0;me<j;me++){let Fe=Math.random()*2-1;Y=(Y+0.02*Fe)/1.02,H[me]=Y*3.2+Fe*0.1}let ae=I.createBufferSource();ae.buffer=z;let G=I.createBiquadFilter();G.type="bandpass",G.frequency.value=1500,G.Q.value=0.55;let Q=I.createGain(),Me=I.currentTime;Q.gain.setValueAtTime(0,Me),Q.gain.linearRampToValueAtTime(0.15,Me+0.15),Q.gain.setValueAtTime(0.15,Me+L-0.7),Q.gain.linearRampToValueAtTime(0,Me+L),ae.connect(G),G.connect(Q),Q.connect(I.destination),ae.start()}catch(N){}};window.__drink=()=>{let L=performance.now()/1000,N=L<ee.until;if(ee.press=L,ee.until=L+4.5,!N)J(4.5)},ff.push(()=>{let L=performance.now()/1000,N=Math.min(0.05,L-ee.last);ee.last=L;let j=L<ee.until;ee.a+=((j?1:0)-ee.a)*Math.min(1,N*(j?14:7));let z=0.88+0.12*Math.sin(L*40);y.forEach((H,Y)=>{H.material.opacity=H.userData.o*ee.a*(Y%2?1:z)}),a.position.y=l-(L-ee.press<0.25?0.008:0),V.forEach((H,Y)=>{H.material.opacity=0.55*ee.a*(0.6+0.4*Math.sin(L*9+Y));let ae=1+0.6*((L*2.2+Y*0.5)%1);H.scale.set(ae,ae,1)});for(let H=0;H<T;H++){if(b[H]<=0)if(j&&Math.random()<N*100){let Y=Math.random()<0.55?u:d;b[H]=0.25+Math.random()*0.3,w[H*3]=Y.x+(Math.random()-0.5)*0.014,w[H*3+1]=c+0.002,w[H*3+2]=Y.z+(Math.random()-0.5)*0.014,M[H]=[(Math.random()-0.5)*0.45,0.5+Math.random()*0.8,(Math.random()-0.5)*0.4]}else{w[H*3+1]=-9;continue}if(b[H]-=N,w[H*3]+=M[H][0]*N,w[H*3+1]+=M[H][1]*N,w[H*3+2]+=M[H][2]*N,M[H][1]-=9.8*N,w[H*3+1]<c)b[H]=0,w[H*3+1]=-9}C.attributes.position.needsUpdate=!0})}function QS(){for(let e of wr)Ut(e-3.05,Kh,e+3.05,Kh,0.22);xn.push([Ke+10.4,Kh,0.5],[Ke-5.4,Kh,0.5]);for(let e of[-6,-2,2,6])Ut(Ke+11.3,It+e-0.9,Ke+11.3,It+e+0.9,0.3);Ut(wr[0]-0.6,It-9.3,wr[0]+0.6,It-9.3,0.3);for(let e of wr)Ut(e-0.6,It+9.3,e+0.6,It+9.3,0.3);xn.push([Zi,Ki+0.2,0.3]),window.__zoneCol=[xn.length],Ut(ii+0.3,26.2,ii+0.3,28.5,0.3),Ut(ii+2.9,28.8,ii+4.6,28.8,0.35),Ut(ii+1.55,25.7,ii+1.55,27.5,0.12),xn.push([-10.6,11.3,0.36],[-9.9,11,0.36],[-9.3,11.6,0.36]),window.__zoneCol.push(xn.length)}function eb(){let[e,t]=window.__zoneCol;xn.splice(e,t-e),Ut(Ke-11.76,It+7.8,Ke-11.76,It+9.7,0.22),Ut(Ke-11.76,It+5.7,Ke-11.76,It+7.3,0.22),Ut(Ke-11.74,It+10.63,Ke-10.31,It+10.63,0.25),Ut(Ke-8.1,It+10.5,Ke-6.4,It+10.5,0.4),xn.push([Ke-6.55,It-7.7,0.34],[Ke-7.3,It-7.85,0.34],[Ke-6.85,It-8.5,0.34])}var aY=new Promise((e)=>{new Fu().load("badminton_hala.glb?v=3",(t)=>{let i=t.scene,n=[],r=[],s=!i.getObjectByName("Hala_Klenba_Drevo"),o=!!i.getObjectByName("Vybaveni_Plakat_Yonex_Ram"),a=!!i.getObjectByName("Tribuna_Schody_Levy"),l=!!i.getObjectByName("Zona_Kondice_Rack_Kettlebell"),c=!!i.getObjectByName("Kurt1_Sloupky_Podstavec"),h=/^(Hala_Stena_.*|Hala_Obklad_.*|Hala_Okna_.*|Hala_Sloupy_.*|Hala_Strecha_Plech|Hala_Vaznik_\d+|Hala_Vaznice|Hala_Dvere|Hala_Nouzovy_.*|Kamera_Cil|Svetla_LED_.*|Vybaveni_Lavicky_.*|Vybaveni_Rozhodci_.*|Kurt\d_Sloupky|Vybaveni_Ukazatel_.*|.*_Skore|.*_Nazev)$/,u=/^(Kamera_Cil|Vybaveni_Ukazatel_.*|.*_Skore|.*_Nazev|Hala_Banner|Hala_Banner_Text|Zona_.*_Napis|Zona_Rozcvicka_Zrcadlo(_Ram)?|Vybaveni_Ukazatel_Stojan_.*)$/;if(i.traverse((m)=>{let g=m.name||"";if((s?h:u).test(g))n.push(m);if(!o&&/^Zona_Rozcvicka_Valec_\d$/.test(g))n.push(m);if(!c&&m.isMesh&&/^Kurt\d_Sloupky$/.test(g)&&m.geometry.index){let x=m.geometry.attributes.position,d=m.geometry.index.array,p=[];for(let _=0;_<d.length;_+=3){if((x.getY(d[_])+x.getY(d[_+1])+x.getY(d[_+2]))/3<0.19&&Math.max(x.getY(d[_]),x.getY(d[_+1]),x.getY(d[_+2]))<0.2)continue;p.push(d[_],d[_+1],d[_+2])}m.geometry.setIndex(p)}if(!s&&m.isMesh&&g==="Hala_Stena_Zadni"&&!(m.material&&m.material.name==="MAT_Banner_Oranzovy")){let x=new ft({color:new fe().setRGB(0.93,0.31,0.012),roughness:0.85});x.name="MAT_Banner_Oranzovy",m.material=x}if(!s&&/^(Hala_Klenba_Drevo|Hala_Vaznik_\d+|Hala_Vaznice|Svetla_LED_.*)$/.test(g))r.push(m);if(m.isMesh&&/^Vybaveni_Lavicky_(Drevo|Kov)$/.test(g)&&m.geometry.index){let x=m.geometry.attributes.position,d=m.geometry.index.array,p=[];for(let _=0;_<d.length;_+=3){let y=0,v=0;for(let T=0;T<3;T++)y+=x.getX(d[_+T]),v+=x.getZ(d[_+T]);if(y/=3,v/=3,y>-7.7&&y<-5.5&&v>8.7&&v<10)continue;p.push(d[_],d[_+1],d[_+2])}if(p.length!==d.length)m.geometry.setIndex(p)}if(m.isMesh){let x=m.material,d={MAT_PU_Podlaha:[0.36,0.075,0.04],MAT_PVC_Podlozka:[0.075,0.17,0.46],MAT_Pohledovy_Beton:[0.27,0.27,0.28],MAT_BWF_Cary:[0.85,0.85,0.83]};if(x&&d[x.name])x.color.setRGB(...d[x.name]);if(x&&x.name==="MAT_PU_Podlaha")x.roughness=0.36,qu(x,"floor",{blot:0.16,bs:1.1,grain:0.07,gs:70});if(x&&x.name==="MAT_PVC_Podlozka")x.roughness=0.5,qu(x,"mat",{blot:0.07,bs:0.8,grain:0.09,gs:160});if(x&&x.name==="MAT_Pohledovy_Beton")x.roughness=0.85,qu(x,"conc",{blot:0.28,bs:0.35,grain:0.12,gs:55});if(x&&x.name==="MAT_Ukazatel_LED")x.emissiveIntensity=2.2;if(x&&x.name==="MAT_LED_Zarivka_Emise")x.emissiveIntensity=2.6;if(x&&x.name==="MAT_Drevo_Klenba")x.map=Ts,x.color.setRGB(1,1,1),x.roughness=0.62,x.side=Nt,x.needsUpdate=!0;if(x&&x.name==="MAT_Zrcadlo")m.material=new Mt({color:11453654,toneMapped:!1});if(x&&x.name==="MAT_Banner_Oranzovy")x.emissive=new fe(15620624),x.emissiveIntensity=0.35;if(x&&x.name==="MAT_Sit_Pruhledna"){let p=document.createElement("canvas");p.width=1220,p.height=152;let _=p.getContext("2d");_.strokeStyle="#0c0c0e",_.lineWidth=2.2;for(let v=0;v<=1220;v+=10)_.beginPath(),_.moveTo(v,0),_.lineTo(v,152),_.stroke();for(let v=0;v<=152;v+=10)_.beginPath(),_.moveTo(0,v),_.lineTo(1220,v),_.stroke();let y=new Gi(p);y.colorSpace=yt,y.anisotropy=8,m.material=new Mt({map:y,transparent:!0,alphaTest:0.3,side:Nt})}}}),n.forEach((m)=>m.parent&&m.parent.remove(m)),s)i.traverse((m)=>{if(/^Vybaveni_Ukazatel_Stojan_K2_/.test(m.name))m.position.x-=2.5});else{Pt.remove(Ti),$i.remove(ya);for(let g of id)xc.splice(xc.indexOf(g),1);let m=Ma.x0+0.2;_n(Pt,"WARM-UP",1.6,0.3,"#7be3ff",m,3.25,9.95,Math.PI/2,"bold 110px Arial Black, Arial",void 0,!1),_n(Pt,"STRETCH",1.6,0.3,"#7be3ff",m,2.9,9.95,Math.PI/2,"bold 110px Arial Black, Arial",void 0,!1),_n(Pt,"CONDITIONING",2,0.28,"#ffb15a",m,3.25,27.45,Math.PI/2,"bold 90px Arial Black, Arial",void 0,!1),_n(Pt,"FOOTWORK",1.6,0.3,"#ffb15a",m,2.9,27.45,Math.PI/2,"bold 100px Arial Black, Arial",void 0,!1)}_a.add(i),_a.updateMatrixWorld(!0),r.forEach((m)=>$i.attach(m));let f=()=>(window.FUNUI?FUNUI.summary("bad").k[0][0]:"0–0").replace("–"," : ");if(qS(i),jS(i,o),$S(i),!o)[[2763310,0],[2450411,1],[14709803,2]].forEach(([m,g])=>{let x=ot(Pt,0.09,0.09,0.9,k(m,0.8),Ke-(6.9+g*0.32),0.09,It-9.5,24);x.rotation.x=Math.PI/2});if(!c)wr.forEach((m)=>[-1,1].forEach((g)=>{let x=m+g*3.09,d=k(1710622,0.5,0.3);B(Pt,0.52,0.045,0.3,d,x+g*0.24,0.0225,It),B(Pt,0.12,0.09,0.12,d,x,0.09,It),B(Pt,0.08,0.05,0.16,d,x+g*0.36,0.07,It)}));if(a)ry();if(l)eb();try{_a.updateMatrixWorld(!0),i.traverse((m)=>{(m.material?Array.isArray(m.material)?m.material:[m.material]:[]).forEach((x)=>["map","normalMap","roughnessMap","metalnessMap","emissiveMap","aoMap"].forEach((d)=>{if(x[d])hn.initTexture(x[d])})),m.frustumCulled=m.frustumCulled}),hn.compile(ui,Ji)}catch(m){console.warn("prewarm",m)}e()},void 0,(t)=>{console.error("badminton_hala.glb failed",t),e()})}),As=new qe;As.position.set(6.5,1.85,-3.6);As.rotation.y=0;ui.add(As);var sy=window.FUNUI?window.FUNUI.summary("strava").k:[["12/20"],["9 400"]],[oy,ay]=sy[0][0].split("/").map(Number);As.add(new ie(new In(0.85,0.1,16,72),PS(2761296,{r:0.6})));var ly=2*Math.PI*oy/ay,cy=new ie(new In(0.85,0.1,16,160,ly),new Mt({color:new fe(16534530).multiplyScalar(1.5),toneMapped:!1}));cy.rotation.z=Math.PI/2-ly;As.add(cy);var tb=va(512,384,(e,t,i)=>{e.textAlign="center",e.fillStyle="#fff",e.font="800 140px Inter,Arial",e.fillText(oy+"",t/2-40,190),e.fillStyle="#b8a9c9",e.font="700 70px Inter,Arial",e.fillText("/"+ay,t/2+90,190),e.font="600 34px Inter,Arial",e.fillText("A C T I V E   D A Y S",t/2,250)});ad(1.5,1.12,tb,As,0,0,0.02);var hy=(e,t)=>va(768,96,(i,n,r)=>{i.fillStyle="rgba(10,15,44,.85)",i.beginPath(),i.roundRect(4,4,n-8,r-8,44),i.fill(),i.strokeStyle=t,i.lineWidth=4,i.stroke(),i.fillStyle=t,i.textAlign="center",i.font="700 40px Inter,Arial",i.fillText(e,n/2,62)});ad(1.9,0.24,hy("\uD83D\uDC63  "+sy[1][0]+" STEPS / DAY","#3dff9a"),As,0,-1.3,0.02);ad(1.9,0.24,hy("GYM 3× · YOGA 2× · WALKS","#8a96c4"),As,0,-1.62,0.02);var lY=(wr[0]+wr[1])/2,_c=[{k:"vl",x:vs.vl,z:Ss+2.2,r:4.5,c:"#45e08a",label:"VAŠELIGA",nolabel:!0,pos:[vs.vl,3.4,Ss+0.3],sc:0.8,ring:!1},{k:"hl",x:vs.hl,z:Ss+2.2,r:4.5,c:"#ff5470",label:"HOBBYLIGA",nolabel:!0,pos:[vs.hl,3.4,Ss+0.3],sc:0.8,ring:!1},{k:"water",x:Zi,z:Ki+1.3,r:2.4,c:"#7fd6ff",label:"PÍTKO",nolabel:!0,pos:[Zi,1.4,Ki+0.4],sc:0.6,ring:!1},{k:"climb",x:rt.cx,z:rt.cz,r:6.4,c:"#38e8ff",label:"CLIMBING",pos:[-10.8,3.7,-5.95],sc:1.2,ring:!1},{k:"strava",x:6.5,z:-2.3,r:2.3,c:"#ff7a2a",label:"STRAVA",pos:[6.5,3,-3.5],sc:0.8},{k:"games",x:6.6,z:-0.6,r:2.8,c:"#6d86ff",label:"GAMES",pos:[8.2,2.5,-1.8],sc:1},{k:"beer",x:-6.35,z:0,r:2.6,c:"#ff6a80",label:"BEER PONG",pos:[-6.35,2.55,0],sc:1}];_c.forEach((e)=>{if(!e.nolabel){let t=LS(e.label,e.c,e.sc);t.position.set(...e.pos),ui.add(t)}if(e.ring!==!1&&e.k!=="bad"){let t=new ie(new io(e.r*0.55,e.r*0.55+0.05,64),new Mt({color:new fe(e.c).multiplyScalar(1.5),transparent:!0,opacity:0.55,side:Nt,toneMapped:!1}));t.rotation.x=-Math.PI/2,t.position.set(e.x,0.02,e.z),ui.add(t),e.ring=t}});var yc=[],fy=new Map;function Qi(e,t,i,n,r,s,o,a,l,c=5.5,h=!0){let u=new Et(t,i,n),f=new ie(u,new Mt({visible:!1}));f.position.set(r,s,o),f.userData.isHit=!0,l.add(f);let m=new yi({color:new fe(a).multiplyScalar(2),transparent:!0,opacity:0,toneMapped:!1,depthTest:!1}),g={id:e,hit:f,hits:[f],mat:m,outline:h,far:c};if(h){l.updateMatrixWorld(!0);let x=new Be().copy(l.matrixWorld).invert(),d=new _i(new A(r-t/2,s-i/2,o-n/2),new A(r+t/2,s+i/2,o+n/2)),p=Math.max(t,i,n)*1.25,_=[];if(l.traverse((y)=>{if(!y.isMesh||y.isInstancedMesh||y.userData.isHit||y.userData.itemLine||!y.geometry)return;if(!y.geometry.boundingBox)y.geometry.computeBoundingBox();let v=new Be().multiplyMatrices(x,y.matrixWorld),T=y.geometry.boundingBox.clone().applyMatrix4(v),w=T.getSize(new A);if(Math.max(w.x,w.y,w.z)>p||!d.containsPoint(T.getCenter(new A)))return;_.push([y,v])}),_.forEach(([y,v])=>{let T=new an(new bh(y.geometry,28),m);T.matrixAutoUpdate=!1,T.matrix.copy(v),T.userData.itemLine=!0,T.renderOrder=5,l.add(T),g.hits.push(y)}),!_.length){let y=new an(new bh(u),m);y.position.copy(f.position),y.userData.itemLine=!0,l.add(y)}}g.hits.forEach((x)=>fy.set(x,g)),yc.push(g)}Qi("pc",0.3,0.52,0.5,0.83,1.03,-0.15,7177983,ws);Qi("kb",0.39,0.04,0.16,-0.2,0.8,0.22,7177983,ws);Qi("ms",0.075,0.04,0.14,0.27,0.8,0.21,4063130,ws);Qi("hp",0.26,0.12,0.2,-0.7,0.84,0.26,16751178,ws);Qi("mon",0.62,0.36,0.05,0.12,1.135,-0.2,3729663,ws,5.5,!1);Qi("st:games",1.3,0.42,0.3,-1.78,1.12,-0.1,3729663,ws,7,!1);Qi("st:vl",2.6,1.7,0.3,vs.vl,sf,Ss+0.1,4579466,ui,24,!1);Qi("st:hl",2.6,1.7,0.3,vs.hl,sf,Ss+0.1,16733296,ui,24,!1);Qi("st:water",0.5,1.4,0.5,Zi,0.7,Ki+0.2,8378111,ui,6,!1);Qi("st:strava",2.2,2.4,0.3,6.5,1.7,-3.55,16742954,ui,9,!1);Qi("st:climb",5,5,5,rt.cx,2.5,rt.cz,3729663,ui,16,!1);Qi("st:beer",1.9,0.9,2.7,-6.35,0.7,0,16738944,ui,9,!1);var ib={bag:{brand:"YONEX",name:"72626 · 6R",rows:[["TYP","Bag na rakety"],["KAPACITA","6 raket"]]},shoes:{brand:"YONEX",name:"65 Z4 WIDE",rows:[["TYP","Sálová obuv"],["ŠÍŘKA","Wide · široká"]]},rackets:[{brand:"YONEX",name:"Raketa 1",rows:[["MODEL","doplním doma"]]},{brand:"YONEX",name:"Raketa 2",rows:[["MODEL","doplním doma"]]}],balls:{brand:"YONEX",name:"MAVIS 350",rows:[["BALENÍ","6 ks"],["BARVA","žluté · modrý pruh"]]}},pa=Object.assign({},ib,window.GEAR||{});hn.localClippingEnabled=!0;(function(){let i=Ke+11.3-0,n=It-6,r=[new pn(new A(0,1,0),-0.47050000000000003)],s=(R,xe=0.7,_e=0,He)=>k(R,xe,_e,He),o=(R,xe,_e)=>{let He=document.createElement("canvas");He.width=R,He.height=xe,_e(He.getContext("2d"),R,xe);let se=new Gi(He);se.colorSpace=yt,se.anisotropy=4;try{hn.initTexture(se)}catch(ze){}return se},a=(R,xe,_e,He=0,se=0,ze=0)=>{let ke=new ie(xe,_e);return ke.position.set(He,se,ze),R.add(ke),ke},l=(R,xe,_e,He=0.01)=>new qi(R,xe,_e,3,Math.min(He,R/2.1,xe/2.1,_e/2.1)),c=0.27,h=0.74,u=-0.17,f=0.17,m=0.03,g=(R)=>0.17+-0.14*R/0.74,x=Math.atan2(0.14,0.74),d=new qe;d.position.set(i-0.02,0.4675,n),d.rotation.y=-Math.PI/2+0.05,ui.add(d);let p=s(14997702,0.88),_=s(13349002,0.85),y=s(1842207,0.8),v=s(2763310,0.75),T=s(723465,0.95),w=s(2894895,0.4,0.5),M=s(9378860,0.7);function b(R,xe){let _e=new Li,He=R.length;for(let se=0;se<He;se++){let ze=R[se],ke=R[(se+He-1)%He],at=R[(se+1)%He],Gt=Math.hypot(ke[0]-ze[0],ke[1]-ze[1]),P=Math.hypot(at[0]-ze[0],at[1]-ze[1]),S=[ze[0]+(ke[0]-ze[0])/Gt*xe,ze[1]+(ke[1]-ze[1])/Gt*xe],W=[ze[0]+(at[0]-ze[0])/P*xe,ze[1]+(at[1]-ze[1])/P*xe];if(se)_e.lineTo(S[0],S[1]);else _e.moveTo(S[0],S[1]);_e.quadraticCurveTo(ze[0],ze[1],W[0],W[1])}return _e.closePath(),_e}function C(R,xe,_e,He,se,ze,ke=0){let at=R.map((P)=>[P[0],P[1]]),Gt=new gr(b(at,He),{depth:xe-2*_e,bevelEnabled:!0,bevelThickness:_e,bevelSize:_e,bevelSegments:3,curveSegments:6});return Gt.translate(0,0,-(xe-2*_e)/2),a(ze,Gt,se,0,0,ke)}let F=0.016;C([[-0.17+F,F],[0.17-F,F],[0.03-F,0.74-F],[-0.17+F,0.74-F]],0.27,F,0.05,p,d),C([[-0.17+F,F],[0.17-F,F],[g(0.14)-F,0.14],[-0.17+F,0.14]],0.278,F,0.03,y,d);let D=2000,V=o(Math.round(0.34*D),Math.round(0.74*D),(R,xe,_e)=>{let He=(ze)=>(ze- -0.17)*D,se=(ze)=>(0.74-ze)*D;R.fillStyle="#e4d8c6",R.fillRect(0,0,xe,_e),R.fillStyle="#1c1c1f",R.beginPath(),R.moveTo(He(g(0.74)),se(0.74)),R.lineTo(He(g(0.74)-0.05),se(0.74)),R.lineTo(He(g(0.17)-0.115),se(0.17)),R.lineTo(He(g(0.17)),se(0.17)),R.closePath(),R.fill(),R.strokeStyle="#8f1c2c",R.lineWidth=7,R.beginPath(),R.moveTo(He(g(0.74)-0.052),se(0.71)),R.lineTo(He(g(0.17)-0.118),se(0.19)),R.stroke(),R.fillStyle="#cbb08a",R.fillRect(0,se(0.2),xe,0.04*D),R.strokeStyle="#a8906c",R.lineWidth=3;for(let ze=1;ze<18;ze++)R.beginPath(),R.moveTo(ze*xe/18,se(0.2)),R.lineTo(ze*xe/18,se(0.16)),R.stroke();R.fillStyle="#1c1c1f",R.fillRect(0,se(0.14),xe,0.14*D),R.fillStyle="#3a3a3d",R.beginPath(),R.arc(He(-0.125),se(0.69),0.016*D,0,7),R.fill(),R.beginPath(),R.arc(He(-0.09),se(0.665),0.016*D,0,7),R.fill(),R.beginPath(),R.moveTo(He(-0.075),se(0.7)),R.lineTo(He(-0.045),se(0.655)),R.lineTo(He(-0.105),se(0.64)),R.closePath(),R.fill(),R.save(),R.translate(He(-0.075),se(0.6)),R.rotate(Math.PI/2),R.fillStyle="#35353a",R.font="italic 900 150px Arial Black, Arial",R.textBaseline="middle",R.fillText("YONEX",0,0),R.restore()});V.repeat.set(2.941176470588235,1.3513513513513513),V.offset.set(0.5,0);{let R=new no(b([[-0.166,0.004],[0.166,0.004],[0.026,0.736],[-0.166,0.736]],0.05),6);a(d,R,new ft({map:V,roughness:0.85}),0,0,0.13620000000000002)}for(let R of[-1,1])a(d,l(0.03,0.56,0.065,0.014),v,-0.18200000000000002,0.4,R*0.075),a(d,l(0.03,0.12,0.06,0.014),v,-0.17,0.775,R*0.075).rotation.z=0.1;let ee=new ie(new In(0.035,0.006,6,12,Math.PI),y);ee.rotation.y=Math.PI/2,ee.position.set(-0.12000000000000001,0.74,0),d.add(ee);let I=new qe;I.position.set(g(0.37),0.37,0),I.rotation.z=x,d.add(I);let J=(R)=>{let xe=new qe;return xe.position.set(0.008,0.07,R*0.135),I.add(xe),a(xe,l(0.016,0.54,0.1,0.007),p,0,0,-R*0.05),a(xe,new Et(0.018,0.54,0.007),_,0.0005,0,-R*0.099),a(xe,new Et(0.02,0.025,0.012),w,0.004,0.2,-R*0.09),xe},L=J(1),N=J(-1);for(let R of[-1,1])a(I,new Ht(0.1,0.54).rotateY(Math.PI/2),T,0.0012,0.07,R*0.085);let j=new qe;I.add(j);let z=(R,xe,_e,He)=>{let se=Math.hypot(_e-R,He-xe),ze=a(j,new Et(0.007,se,0.026),_,0.012,(R+_e)/2,(xe+He)/2);ze.rotation.x=Math.atan2(He-xe,_e-R);let ke=a(j,new Et(0.012,0.012,0.034),y,0.014,R+(_e-R)*0.7,xe+(He-xe)*0.7)};a(j,l(0.014,0.16,0.034,0.006),_,0.012,-0.12,0);for(let R of[-1,1])z(-0.04,0,0.12,R*0.07),z(-0.2,0,-0.33,R*0.075);a(j,new Et(0.012,0.03,0.01),w,0.012,0.28,0),a(d,new Et(0.004,0.11,0.22000000000000003),T,g(0.085)+0.001,0.085,0);let H=new qe;H.position.set(g(0.145)+0.004,0.145,0),d.add(H),a(H,l(0.012,0.12,0.24000000000000002,0.005),v,0,-0.06,0),a(H,new Et(0.016,0.02,0.05),_,0.003,-0.105,0);let Y=-0.21500000000000002;a(d,l(0.09,0.3,0.12,0.02),v,Y,0.18,0),a(d,new Et(0.09,0.012,0.12),s(3815999,0.7),Y,0.33,0);function ae(R){let xe=new qe,_e=s(1447707,0.35,0.3,{clippingPlanes:r}),He=s(15263978,0.4,0.2,{clippingPlanes:r}),se=s(R,0.9,0,{clippingPlanes:r}),ze=0.54,ke=0.104,at=0.134,Gt=[];for(let S=0;S<48;S++){let W=S/48*Math.PI*2;Gt.push(new A(0.104*Math.cos(W),0.54+0.134*Math.sin(W),0))}a(xe,new cr(new Yn(Gt,!0),72,0.0075,8,!0),_e);let P=o(256,320,(S,W,pe)=>{S.clearRect(0,0,W,pe),S.strokeStyle="rgba(235,235,225,0.75)",S.lineWidth=1.4;for(let le=0;le<=18;le++){let ye=le*W/18;S.beginPath(),S.moveTo(ye,0),S.lineTo(ye,pe),S.stroke()}for(let le=0;le<=22;le++){let ye=le*pe/22;S.beginPath(),S.moveTo(0,ye),S.lineTo(W,ye),S.stroke()}});a(xe,new Ht(0.19799999999999998,0.258),new Mt({map:P,transparent:!0,opacity:0.8,depthWrite:!1,side:Nt,clippingPlanes:r,alphaTest:0.05}),0,0.54,0);for(let S of[-1,1])a(xe,new cr(new Yn([new A(S*0.052,0.41200000000000003,0),new A(S*0.03,0.376,0),new A(S*0.008,0.345,0)]),12,0.0065,6),_e);return a(xe,new Et(0.034,0.014,0.012),He,0,0.38,0),a(xe,new wt(0.0038,0.0038,0.15,8),_e,0,0.275,0),a(xe,new wt(0.0125,0.0125,0.2,10),se,0,0.1,0),a(xe,new wt(0.0135,0.0135,0.008,10),He,0,0,0),a(xe,new wt(0.0135,0.0135,0.006,10),He,0,0.2,0),a(xe,new Et(0.012,0.05,0.016),He,0.104,0.54,0),xe}let G=[ae(12593706),ae(2775232)];G[0].rotation.z=x,G[1].rotation.z=x;let Q=(R,xe,_e)=>R.position.set(g(0.04)-0.105-Math.sin(x)*_e,0.04+Math.cos(x)*_e,xe);Q(G[0],0.058,0),Q(G[1],-0.058,0),G.forEach((R)=>{d.add(R),R.visible=!1});function Me(R){let xe=new qe,_e=0.3,He=0.15,se=(ue)=>0.046+0.006*ue-0.012*ue*ue,ze=s(15988216,0.55),ke=s(1915530,0.55),at=s(10134708,0.5),Gt=s(1776930,0.8),P=(ue,K=0)=>{let ne=new Li;for(let Se=0;Se<=40;Se++){let U=Se/40*Math.PI*2,oe=0.15*Math.cos(U),re=oe/0.15,ve=(se(re)+K)*Math.sin(U)*ue;(Se?ne.lineTo:ne.moveTo).call(ne,oe*ue,ve)}return ne},S=(ue,K)=>{let ne=new gr(ue,{depth:K,bevelEnabled:!1,curveSegments:16});return ne.rotateX(-Math.PI/2),ne};a(xe,S(P(1.01,0.003),0.009),Gt,0,0,0),a(xe,S(P(1,0),0.024),at,0,0.009,0);let W=[[-1,0.07],[-0.85,0.1],[-0.6,0.095],[-0.3,0.082],[0,0.07],[0.35,0.056],[0.7,0.043],[0.92,0.03],[1,0]],pe=(ue)=>{for(let K=1;K<W.length;K++)if(ue<=W[K][0]){let ne=W[K-1],Se=W[K],U=(ue-ne[0])/(Se[0]-ne[0]);return ne[1]+(Se[1]-ne[1])*U}return 0};function le(ue,K,ne,Se){let re=[],ve=[];for(let je=0;je<=14;je++){let Xe=ue+(K-ue)*je/14,Ce=Math.max(0.0005,se(Xe)*(1-Math.pow(Math.abs(Xe),12)))*ne,it=pe(Xe)*ne;for(let mt=0;mt<=12;mt++){let Ne=mt/12*Math.PI;re.push(Xe*0.15,0.033+it*Math.sin(Ne),Ce*Math.cos(Ne))}}for(let je=0;je<14;je++)for(let Xe=0;Xe<12;Xe++){let Ce=je*13+Xe,it=Ce+12+1;ve.push(Ce,Ce+1,it,Ce+1,it+1,it)}let Te=new Ve;Te.setAttribute("position",new Ee(re,3)),Te.setIndex(ve),Te.computeVertexNormals();let Ae=new ie(Te,Se);return Se.side=Nt,xe.add(Ae),Ae}le(-1,1,1,ze),le(-1,-0.55,1.03,ke),le(0.72,1,1.03,ke);let ye=a(xe,new In(0.04,0.0075,6,18),ke,-0.085,0.108,0);ye.scale.set(1.15,1,0.8),ye.rotation.x=Math.PI/2,ye.rotation.y=0,ye.rotation.z=0,ye.rotation.order="XYZ",a(xe,new Vr(0.036,18).rotateX(-Math.PI/2),T,-0.085,0.104,0).scale.set(1.15,1,0.8),a(xe,l(0.05,0.012,0.045,0.004),ze,-0.03,0.098,0).rotation.z=0.35;for(let ue=0;ue<5;ue++){let K=-0.025+ue*0.022,ne=0.088-ue*0.008;a(xe,new Et(0.005,0.004,0.058),ke,K,ne,0).rotation.z=0.15}for(let ue of[-1,1])a(xe,new cr(new Yn([new A(-0.1,0.065,ue*0.041),new A(-0.02,0.07,ue*0.046),new A(0.07,0.048,ue*0.049)]),12,0.0035,5),ke);if(R)xe.scale.z=-1;return xe}let me=new qe;d.add(me);let Fe=Me(!1),we=Me(!0);Fe.position.z=0.053,we.position.z=-0.053,me.add(Fe,we),me.position.set(0,0.052,0),me.visible=!1;let ut=new qe;ut.position.set(Y,0.045,0),d.add(ut);let Ue=o(512,256,(R,xe,_e)=>{R.fillStyle="#1f4fd0",R.fillRect(0,0,xe,_e),R.fillStyle="#ffd400",R.fillRect(0,_e*0.78,xe,_e*0.09),R.fillStyle="#ffffff",R.font="italic 900 70px Arial Black, Arial",R.textAlign="center",R.fillText("MAVIS",xe/2,_e*0.42),R.font="italic 900 62px Arial Black, Arial",R.fillText("350",xe/2,_e*0.68),R.fillStyle="#ffffff",R.font="700 24px Arial",R.fillText("YONEX",xe/2,_e*0.14)});Ue.wrapS=un,Ue.offset.x=0.5,a(ut,new wt(0.036,0.036,0.29,20),new ft({map:Ue,roughness:0.45}),0,0.145,0),a(ut,new wt(0.0385,0.0385,0.022,20),s(16053488,0.5),0,0.296,0),a(ut,new wt(0.0385,0.0385,0.012,20),s(16053488,0.5),0,0.006,0),Qi("st:bag",0.52,0.8,0.3,-0.04,0.4,0,16765562,d,5,!1);let Oe=yc[yc.length-1],pt=Oe.hits.slice();Qi("bg:r1",0.23,0.69,0.06,0,0.34,0,16765562,G[0],5,!1),Qi("bg:r2",0.23,0.69,0.06,0,0.34,0,16765562,G[1],5,!1),Qi("bg:shoes",0.32,0.12,0.2,0,0.055,0,16765562,me,5,!1),Qi("bg:balls",0.085,0.33,0.085,0,0.15,0,16765562,ut,5,!1),_c.push({k:"bag",x:i,z:n,r:3,c:"#ffd27a",label:"BAG",nolabel:!0,ring:!1,pos:[i,1,n],sc:0.6});let he=document.getElementById("ui")||document.body,de={},ge=(R,xe)=>{let _e=document.createElement("div");return _e.className="hc",_e.innerHTML=`<h5>${R.brand}</h5><h3>${R.name}</h3>`+R.rows.map((He)=>`<div class=r><i>${He[0]}</i><b>${He[1]}</b></div>`).join("")+`<div class=foot>${xe}</div>`,he.appendChild(_e),_e};de["bg:shoes"]=ge(pa.shoes,"AKTUÁLNĚ POUŽÍVÁM · OBUV"),de["bg:r1"]=ge(pa.rackets[0],"AKTUÁLNĚ POUŽÍVÁM · RAKETA"),de["bg:r2"]=ge(pa.rackets[1],"AKTUÁLNĚ POUŽÍVÁM · RAKETA"),de["bg:balls"]=ge(pa.balls,"NEJČASTĚJI POUŽÍVANÉ MÍČKY"),de["st:bag"]=ge(pa.bag,"MŮJ BADMINTONOVÝ BAG");let Le={"bg:shoes":me,"bg:r1":G[0],"bg:r2":G[1],"bg:balls":ut};Object.values(Le).forEach((R)=>R.traverse((xe)=>{if(xe.isMesh&&xe.material&&xe.material.emissive)xe.material=xe.material.clone()}));let Re=0,Ye=0,Je=performance.now(),dt=null,_t=null,Lt=(R)=>(R=Math.max(0,Math.min(1,R)),R*R*(3-2*R));window.__bagIsOpen=()=>Re===1,window.__bagSum=()=>({t:"YONEX "+pa.bag.name.split(" ")[0],s:Re?"Podívej se na boty, rakety a míčky":"Bag na 6 raket",k:Re?[["\uD83D\uDC5F","BOTY"],["\uD83C\uDFF8","RAKETY"],["\uD83D\uDFE1","MÍČKY"]]:[["\uD83C\uDF92","OTEVŘÍT"]]}),window.__bagToggle=()=>{Re=Re?0:1;let R=Ei;if(Ei=null,R)my(R.k);let xe=document.querySelector("#prompt .tp");if(xe)xe.textContent=Re?"ZAVŘÍT BAG":"OTEVŘÍT BAG"},ff.push(()=>{let R=performance.now(),xe=Math.min(0.1,(R-Je)/1000);Je=R,Ye+=Math.sign(Re-Ye)*Math.min(Math.abs(Re-Ye),xe/1.3);let _e=(se,ze)=>Lt((Ye-se)/(ze-se));L.rotation.y=-1.85*_e(0,0.35),N.rotation.y=1.85*_e(0,0.35),H.rotation.z=1.5*_e(0.05,0.3),j.visible=Ye<0.08,Q(G[0],0.058,0.3*_e(0.3,0.8)),Q(G[1],-0.058,0.3*_e(0.4,0.9)),G.forEach((se)=>se.visible=Ye>0.3),me.position.x=0.37*_e(0.35,0.85),me.position.y=0.052*(1-_e(0.7,0.9)),me.visible=Ye>0.35,ut.position.y=0.045+0.17*_e(0.55,1),Oe.hits=Re===0&&Ye<0.97||Ye<0.05?pt:[];let He=typeof jt==="string"&&jt.startsWith("bg:")&&Ye>0.9?jt:null;if(He!==dt){if(dt)de[dt].style.display="none";if(He)de[He].style.display="block";dt=He}if(He!==_t){for(let se in Le)Le[se].traverse((ze)=>{if(ze.isMesh&&ze.material&&ze.material.emissive)ze.material.emissive.setHex(se===He?2768742:0)});_t=He}})})();var tt={x:-1.9,z:2.8,yaw:0,pitch:0,vx:0,vz:0},nb=1.65,cc=0.3,rb=[[-8.8,8.8,-3.85,3.85],[-3.9,4.3,-9.4,-3.85],[-12.4,-8.8,-5.45,7.7],[-12.4,-3.6,3.85,7.7],[-3.6,0.4,3.85,7.7],[Ma.x0,Ma.x1,7.7,Ma.z1]],sb=[[-3.62,4.02,-4.3,-3.4],[-11.3,-9.9,-5.8,-5.1],[-9.25,-8.35,-0.9,1.1],[-2.7,-1.1,3.5,4.2],[-2.7,-1.1,7.35,8.05],[-8.1,-6.9,7.35,8.05]];function ob(e,t){let i=e-rt.cx,n=t-rt.cz,r=rt.R*Math.cos(Math.PI/6)-cc;for(let s=0;s<6;s++){let o=Math.PI/6+s*Math.PI/3;if(i*Math.cos(o)+n*Math.sin(o)>r)return!1}return!0}function hc(e,t){for(let i of ty)if(e>i[0]&&e<i[1]&&t>i[2]&&t<i[3])return!1;for(let i of rb)if(e>i[0]+cc&&e<i[1]-cc&&t>i[2]+cc&&t<i[3]-cc)return!0;for(let i of sb)if(e>i[0]&&e<i[1]&&t>i[2]&&t<i[3])return!0;return ob(e,t)}var xn=[],Ut=(e,t,i,n,r)=>{let s=Math.max(1,Math.ceil(Math.hypot(i-e,n-t)/(r*0.9)));for(let o=0;o<=s;o++)xn.push([e+(i-e)*o/s,t+(n-t)*o/s,r])};Ut(-1.95,-4.6,-1.95,-6.9,0.35);Ut(2.35,-4.6,2.35,-6.9,0.35);Ut(-1.9,-4.6,2.3,-4.6,0.4);xn.push([0.2,-6.05,0.5]);Ut(8.25,-2.65,8.25,2.65,0.4);Ut(8.35,2.65,8.35,3.7,0.3);Ut(8.35,-3.7,8.35,-2.65,0.3);Ut(1.5,1.85,4.9,1.85,0.5);Ut(1.1,3.45,4.9,3.45,0.3);[4.5,3.65,2.8,1.95].forEach((e)=>xn.push([e,0.875,0.25]));Ut(-6.95,-1,-6.95,1,0.42);Ut(-5.75,-1,-5.75,1,0.42);Ut(-0.6,-0.15,-0.6,0.95,0.42);xn.push([-8.35,3.35,0.32],[-4.45,3.35,0.32],[-3.9,-3.85,0.3],[4.3,-3.85,0.3]);Ut(-8.3,-3.45,-5.5,-3.45,0.22);Ut(-3.55,-7.2,-3.55,-6,0.15);Ut(3.9,-7.2,3.9,-6,0.15);xn.push([rt.cx,rt.cz,2.15]);Ut(-11.95,-4.7,-11.95,2.3,0.12);Ut(-10.9,-3.6,-10.9,-1,0.25);Ut(-10.9,0.9,-10.9,3.5,0.25);Ut(-8.5,4.35,-4.1,4.35,0.55);Ut(-6.4,7.4,-4,7.4,0.3);Ut(-11.9,4.4,-11.9,7.4,0.5);Ut(0.15,5.1,0.15,6.9,0.3);xn.push([-3.3,4.2,0.3],[0.1,4.2,0.3]);QS();function uy(e,t){if(!hc(tt.x,tt.z))if(hc(tt.x,t))tt.z=t;else if(hc(e,tt.z))tt.x=e;else tt.x=e,tt.z=t;xn.forEach(([i,n,r])=>{let s=tt.x-i,o=tt.z-n,a=Math.hypot(s,o),l=r+0.28;if(a<l&&a>0.0001){let c=i+s/a*l,h=n+o/a*l;if(hc(c,h))tt.x=c,tt.z=h;else tt.x=e,tt.z=t}})}var jn={},ur=!1,of=!1,gc=!1,ma=0,oc=0,xa={x:0,y:0};addEventListener("keydown",(e)=>{if(!ur||Bn.isOpen())return;if(jn[e.code]=!0,e.code==="KeyE"||e.code==="Enter")df();if(e.code==="Space"&&!e.repeat)gc=!0;if(e.code.startsWith("Arrow")||e.code==="Space")e.preventDefault()});addEventListener("keyup",(e)=>{jn[e.code]=!1});var nd=$n("#start"),af=nd.querySelector(".go"),cY=af?af.textContent:"",dy=document.createElement("style");dy.textContent='#start[data-paused="1"] .keys,#start[data-paused="1"] p{display:none!important}#start[data-paused="1"] h1{opacity:.55}';document.head.appendChild(dy);function py(){if(nd.classList.add("on"),nd.dataset.paused="1",af)af.textContent="POKRAČOVAT · KLIKNI"}function ab(){if(Es||!Un.requestPointerLock)return;try{let e=Un.requestPointerLock();if(e&&e.catch)e.catch(()=>{})}catch(e){}setTimeout(()=>{if(ur&&!Bn.isOpen()&&document.pointerLockElement!==Un)py()},350)}document.addEventListener("pointerlockchange",()=>{if(of=document.pointerLockElement===Un,!of&&ur&&!Bn.isOpen()&&!Es)py()});var bs={dx:0,dy:0};addEventListener("mousemove",(e)=>{if(!ur||Bn.isOpen())return;if(of||cd){if(Math.abs(e.movementX)>240||Math.abs(e.movementY)>240)return;bs.dx+=e.movementX,bs.dy+=e.movementY}});var cd=!1;Un.addEventListener("mousedown",()=>{if(cd=!0,of&&jt&&(jt==="mon"||jt.startsWith("st:")||jt.startsWith("bg:")))return df()});addEventListener("mouseup",()=>{cd=!1});function lb(){if(ur=!0,$n("#start").classList.remove("on"),$n("#hud").classList.add("on"),!Es&&Un.requestPointerLock)try{let e=Un.requestPointerLock();if(e&&e.catch)e.catch(()=>{})}catch(e){}}$n("#start").addEventListener("click",lb);Bn.setOnClose(()=>{jn.KeyE=!1,ab()});if(Es){let e=$n("#joy"),t=$n("#knob"),i=null,n=null,r=0,s=0,o=(h)=>{let u=e.getBoundingClientRect(),f=u.left+u.width/2,m=u.top+u.height/2,g=(h.clientX-f)/(u.width/2),x=(h.clientY-m)/(u.height/2),d=Math.hypot(g,x);if(d>1)g/=d,x/=d;xa.x=g,xa.y=x,t.style.transform=`translate(${g*34}px,${x*34}px)`};e.addEventListener("pointerdown",(h)=>{i=h.pointerId,e.setPointerCapture(i),o(h)}),e.addEventListener("pointermove",(h)=>{if(h.pointerId===i)o(h)});let a=(h)=>{if(h.pointerId===i)i=null,xa.x=xa.y=0,t.style.transform=""};e.addEventListener("pointerup",a),e.addEventListener("pointercancel",a),Un.addEventListener("pointerdown",(h)=>{if(!ur||Bn.isOpen()||n!==null)return;n=h.pointerId,r=h.clientX,s=h.clientY,Un.setPointerCapture(n)}),Un.addEventListener("pointermove",(h)=>{if(h.pointerId!==n)return;bs.dx+=(h.clientX-r)*2.2,bs.dy+=(h.clientY-s)*2.2,r=h.clientX,s=h.clientY});let l=(h)=>{if(h.pointerId===n)n=null};Un.addEventListener("pointerup",l),Un.addEventListener("pointercancel",l),$n("#act").addEventListener("click",()=>df());let c=document.createElement("div");c.id="jmp",c.textContent="↑",c.style.cssText="position:fixed;right:40px;bottom:160px;width:72px;height:72px;border-radius:50%;border:2px solid #ffffff55;background:#ffffff14;color:#fff;font:700 30px Inter,Arial;display:none;place-items:center;z-index:9;touch-action:none;user-select:none",document.body.appendChild(c),c.addEventListener("pointerdown",(h)=>{h.preventDefault(),gc=!0}),window.__jmpBtn=c}var Ei=null,jt=null,rd=new Bh;rd.far=26;var ac=$n("#prompt"),Jh=$n("#sum");function my(e){if(e===(Ei&&Ei.k))return;if(Ei=e?_c.find((i)=>i.k===e):null,!Ei){ac.classList.remove("on"),Jh.classList.remove("on");return}let t;try{t=e==="bag"?window.__bagSum():Bn.summary(e)}catch(i){t=e==="water"?{t:"PÍTKO",s:"Čerstvá voda · stiskni E",k:[["\uD83D\uDCA7","NAPÍT SE"]]}:{t:String(e).toUpperCase(),s:"",k:[]}}ac.querySelector(".tp").textContent=e==="water"?"NAPÍT SE":e==="bag"?window.__bagIsOpen()?"ZAVŘÍT BAG":"OTEVŘÍT BAG":"OTEVŘÍT",ac.querySelector("b").textContent=t.t,ac.style.setProperty("--c",Ei.c),Jh.style.setProperty("--c",Ei.c),Jh.innerHTML=`<h4>${t.t}</h4><p>${t.s}</p><div>${t.k.map((i)=>`<span><b>${i[0]}</b><i>${i[1]}</i></span>`).join("")}</div>`,ac.classList.add("on"),Jh.classList.add("on")}function df(){if(Bn.isOpen())return;if(jt&&(jt.startsWith("bg:")||jt==="st:bag")||!jt&&Ei&&Ei.k==="bag")return window.__bagToggle();if(jt==="st:water"||!jt&&Ei&&Ei.k==="water")return window.__drink&&window.__drink();if(document.pointerLockElement)document.exitPointerLock();if(jt==="mon"||jt==="st:games")return Bn.open("games");if(jt==="st:water"||!jt&&Ei&&Ei.k==="water")return window.__drink&&window.__drink();if(jt&&jt.startsWith("st:"))return Bn.open(jt.slice(3));if(Ei)Bn.open(Ei.k)}function G_(e){if(e===jt)return;jt=e,["pc","hp","kb","ms"].forEach((t)=>document.body.classList.toggle(t,t===e))}ui.traverse((e)=>{if(e.isPointLight)e.intensity*=0.56});var cb=new Oh,Zu=0,Ku=0,z_=/[?&]stats/.test(location.search),lc=null,Ju=0,ju=0,jh=0,$u=0;function hb(e){if(!lc)lc=document.createElement("pre"),lc.style.cssText="position:fixed;left:8px;bottom:8px;z-index:99;margin:0;padding:8px 10px;background:rgba(0,0,0,.7);color:#7dffb0;font:12px/1.35 monospace;pointer-events:none;border-radius:8px",document.body.appendChild(lc),hn.info.autoReset=!1;if(Ju+=e,ju++,jh=Math.max(jh,e),$u+=e,$u>0.5){let t=hn.info;lc.textContent="FPS "+(ju/Ju).toFixed(0)+"   slowest "+(jh*1000).toFixed(0)+` ms
calls `+t.render.calls+"   tris "+(t.render.triangles/1000).toFixed(0)+`k
geom `+t.memory.geometries+"   tex "+t.memory.textures+"   res x"+br+`
pos `+tt.x.toFixed(1)+", "+tt.z.toFixed(1),Ju=ju=jh=$u=0}}var fc=0.016,gy=0,$h=0;function k_(){if(hn.setPixelRatio(br),Er)Er.setPixelRatio(br);sd(),fc=0.02,gy=0}function fb(e){if(e>0.5)return;if(fc+=(e-fc)*0.08,++gy<45)return;let t=performance.now();if(t-$h<2500)return;if(fc>0.028&&br>0.75)br=Math.max(0.75,br-0.25),$h=t,k_();else if(fc<0.0185&&br<Qu&&t-$h>12000)br=Math.min(Qu,br+0.25),$h=t,k_()}function hd(){try{ub()}catch(e){console.error("frame",e),requestAnimationFrame(hd)}}function ub(){let e=cb.getDelta(),t=Math.min(e,0.1);if(Zu+=t,fb(e),window.__jmpBtn)window.__jmpBtn.style.display=ur&&!Bn.isOpen()?"grid":"none";let i=Bn.isOpen();if(ur&&!i){let s=1-Math.exp(-45*t),o=bs.dx*s,a=bs.dy*s;bs.dx-=o,bs.dy-=a,tt.yaw-=o*0.0021,tt.pitch=Math.max(-1.2,Math.min(1.2,tt.pitch-a*0.0021));let l=(jn.ArrowLeft?1:0)-(jn.ArrowRight?1:0);tt.yaw+=l*1.9*t;let c=(jn.KeyW||jn.ArrowUp?1:0)-(jn.KeyS||jn.ArrowDown?1:0)-xa.y,h=(jn.KeyD?1:0)-(jn.KeyA?1:0)+xa.x,u=jn.ShiftLeft?5.2:3.2,f=(-Math.sin(tt.yaw)*c+Math.cos(tt.yaw)*h)*u,m=(-Math.cos(tt.yaw)*c-Math.sin(tt.yaw)*h)*u,g=Math.hypot(f,m);if(g>u)f*=u/g,m*=u/g;if(gc&&ma<=0.001)oc=4.2;gc=!1;let x=ma>0.001,d=Math.max(1,Math.ceil(t/0.016)),p=t/d;for(let _=0;_<d;_++){let y=1-Math.exp(-(x?3.5:11)*p);tt.vx+=(f-tt.vx)*y,tt.vz+=(m-tt.vz)*y;let{x:v,z:T}=tt;if(tt.x+=tt.vx*p,tt.z+=tt.vz*p,uy(v,T),x||oc>0){if(oc-=11.5*p,ma+=oc*p,ma<=0)ma=0,oc=0}}}else gc=!1;if(Ku+=(ZS(tt.x,tt.z)-Ku)*Math.min(1,t*12),!window.__camLock)Ji.position.set(tt.x,nb+Ku+ma,tt.z),Ji.rotation.order="YXZ",Ji.rotation.set(tt.pitch,tt.yaw,0);if(ur&&!i){rd.setFromCamera(new X(0,0),Ji);let s=rd.intersectObjects(yc.flatMap((a)=>a.hits),!1),o=null;for(let a of s){let l=fy.get(a.object);if(l&&a.distance<=l.far){o=l.id;break}}G_(o)}else G_(null);let n=null,r=9;if(_c.forEach((s)=>{let o=Math.hypot(tt.x-s.x,tt.z-s.z)/s.r;if(o<1&&o<r)r=o,n=s.k}),jt&&jt.startsWith("st:"))n=jt.slice(3);else if(jt==="mon")n="games";if(my(n&&ur&&!i?n:i?Ei&&Ei.k:null),yc.forEach((s)=>{if(s.outline)s.mat.opacity=jt===s.id?1:0}),_c.forEach((s)=>{if(s.ring)s.ring.material.opacity=Ei&&Ei.k===s.k?0.95:0.35+0.15*Math.sin(Zu*2)}),ff.forEach((s)=>s(Zu)),z_)hn.info.reset();if(Er)Er.render();else hn.render(ui,Ji);if(z_)hb(e);requestAnimationFrame(hd)}requestAnimationFrame(hd);window.__scene=ui;window.__fun={go(e,t,i=0,n=0){tt.x=e,tt.z=t,tt.yaw=i,tt.pitch=n,tt.vx=tt.vz=0},pos(){return[tt.x,tt.z]},camY(){return Ji.position.y},scn:ui,cam:Ji,blocked(e,t){if(!hc(e,t))return!0;for(let[i,n,r]of xn)if(Math.hypot(e-i,t-n)<r+0.28)return!0;return!1},sim(e,t,i,n,r=400){tt.x=e,tt.z=t;for(let s=0;s<r;s++){let{x:o,z:a}=tt;tt.x+=Math.sign(i-tt.x)*Math.min(0.05,Math.abs(i-tt.x)),tt.z+=Math.sign(n-tt.z)*Math.min(0.05,Math.abs(n-tt.z)),uy(o,a)}return[+tt.x.toFixed(2),+tt.z.toFixed(2)]},start(){ur=!0,$n("#start").classList.remove("on"),$n("#hud").classList.add("on")},interact:df,view(e,t,i,n,r,s,o=68,a=!0){window.__camLock=!0,$i.visible=a,Ji.fov=o,Ji.updateProjectionMatrix(),Ji.position.set(e,t,i),Ji.up.set(0,1,0),Ji.lookAt(n,r,s)},free(){window.__camLock=!1,$i.visible=!0}};
