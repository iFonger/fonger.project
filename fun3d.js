var cy=Object.defineProperty;var fy=(e)=>e;function hy(e,t){this[e]=fy.bind(null,t)}var uy=(e,t)=>{for(var i in t)cy(e,i,{get:t[i],enumerable:!0,configurable:!0,set:hy.bind(t,i)})};var Zs={};uy(Zs,{ArcCurve:()=>Wu,CatmullRomCurve3:()=>wr,CubicBezierCurve:()=>Ac,CubicBezierCurve3:()=>Ju,EllipseCurve:()=>Ho,LineCurve:()=>Rc,LineCurve3:()=>ju,QuadraticBezierCurve:()=>Cc,QuadraticBezierCurve3:()=>Pc,SplineCurve:()=>Ic});var xl="187";var cp=0,cu=1,fp=2;var sa=1,hp=2,_o=3,Zn=0,Mi=1,Kt=2,yr=0,Us=1,_l=2,fu=3,hu=4,up=5;var Bs=100,dp=101,pp=102,mp=103,gp=104,xp=200,_p=201,yp=202,Mp=203,pf=204,mf=205,vp=206,bp=207,Sp=208,Ep=209,Tp=210,wp=211,Ap=212,Rp=213,Cp=214,yl=0,Ml=1,vl=2,Os=3,bl=4,Sl=5,El=6,Tl=7,yo=0,Pp=1,Ip=2,nr=0,oa=1,aa=2,la=3,Hs=4,ca=5,fa=6,ha=7,uu="attached",Lp="detached",gf=300,Mr=301,hs=302,wl=303,Al=304,Nn=1000,on=1001,zs=1002,di=1003,Rl=1004;var Gs=1005;var _i=1006,Mo=1007;var mn=1008;var Ji=1009,xf=1010,_f=1011,us=1012,ua=1013,an=1014,Wi=1015,Ii=1016,da=1017,pa=1018,Nr=1020,yf=35902,Mf=35899,vf=1021,bf=1022,ln=1023,Jn=1026,rr=1027,ma=1028,vo=1029,sr=1030,ga=1031;var xa=1033,_a=33776,ya=33777,Ma=33778,va=33779,Cl=35840,Pl=35841,Il=35842,Ll=35843,Dl=36196,Nl=37492,Fl=37496,Ul=37488,Bl=37489,bo=37490,Ol=37491,Hl=37808,zl=37809,Gl=37810,kl=37811,Vl=37812,Wl=37813,Xl=37814,Yl=37815,ql=37816,Kl=37817,Zl=37818,Jl=37819,jl=37820,$l=37821,Ql=36492,ec=36494,tc=36495,ic=36283,nc=36284,So=36285,rc=36286;var ds=2300,Eo=2301,Sf=2302,du=2303,Ef=2400,Tf=2401,wf=2402,Af=2500;var Dp=0,Rf=1,sc=2,Np=3200;var Fr=0,Fp=1,vr="",Ft="srgb",Tn="srgb-linear",To="linear",Wt="srgb";var Cf=7680;var Up=519,Bp=512,Op=513,Hp=514,Pf=515,zp=516,Gp=517,If=518,Lf=519,oc=35044;var pu="300 es",gn=2000,Zr=2001;function Vp(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function mu(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function ks(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function gu(){let e=ks("canvas");return e.style.display="block",e}var kp={},ba=null;function wo(...e){let t="THREE."+e.shift();if(ba)ba("log",t,...e);else console.log(t,...e)}function Wp(e){let t=e[0];if(typeof t==="string"&&t.startsWith("TSL:")){let i=e[1];if(i&&i.isStackTrace)e[0]+=" "+i.getLocation();else e[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return e}function De(...e){e=Wp(e);let t="THREE."+e.shift();if(ba)ba("warn",t,...e);else{let i=e[0];if(i&&i.isStackTrace)console.warn(i.getError(t));else console.warn(t,...e)}}function it(...e){e=Wp(e);let t="THREE."+e.shift();if(ba)ba("error",t,...e);else{let i=e[0];if(i&&i.isStackTrace)console.error(i.getError(t));else console.error(t,...e)}}function br(...e){let t=e.join(" ");if(t in kp)return;kp[t]=!0,De(...e)}function Xp(e,t,i){return new Promise(function(n,r){function s(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:r();break;case e.TIMEOUT_EXPIRED:setTimeout(s,i);break;default:n()}}setTimeout(s,i)})}var Yp={[yl]:yl,[vl]:El,[bl]:bl,[Os]:Sl,[Ml]:Ml,[El]:vl,[Tl]:Tl,[Sl]:Os};class cn{addEventListener(e,t){if(this._listeners===void 0)this._listeners={};let i=this._listeners;if(i[e]===void 0)i[e]=[];if(i[e].indexOf(t)===-1)i[e].push(t)}hasEventListener(e,t){let i=this._listeners;if(i===void 0)return!1;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let n=i[e];if(n!==void 0){let r=n.indexOf(t);if(r!==-1)n.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let n=i.slice(0);for(let r=0,s=n.length;r<s;r++)n[r].call(this,e);e.target=null}}}var Fn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],qp=1234567,ps=Math.PI/180,ms=180/Math.PI;function ji(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Fn[e&255]+Fn[e>>8&255]+Fn[e>>16&255]+Fn[e>>24&255]+"-"+Fn[t&255]+Fn[t>>8&255]+"-"+Fn[t>>16&15|64]+Fn[t>>24&255]+"-"+Fn[i&63|128]+Fn[i>>8&255]+"-"+Fn[i>>16&255]+Fn[i>>24&255]+Fn[n&255]+Fn[n>>8&255]+Fn[n>>16&255]+Fn[n>>24&255]).toLowerCase()}function Mt(e,t,i){return Math.max(t,Math.min(i,e))}function Df(e,t){return(e%t+t)%t}function dy(e,t,i,n,r){return n+(e-t)*(r-n)/(i-t)}function py(e,t,i){if(e!==t)return(i-e)/(t-e);else return 0}function Sa(e,t,i){return(1-i)*e+i*t}function my(e,t,i,n){return Sa(e,t,1-Math.exp(-i*n))}function gy(e,t=1){return t-Math.abs(Df(e,t*2)-t)}function xy(e,t,i){if(e<=t)return 0;if(e>=i)return 1;return e=(e-t)/(i-t),e*e*(3-2*e)}function _y(e,t,i){if(e<=t)return 0;if(e>=i)return 1;return e=(e-t)/(i-t),e*e*e*(e*(e*6-15)+10)}function yy(e,t){return e+Math.floor(Math.random()*(t-e+1))}function My(e,t){return e+Math.random()*(t-e)}function vy(e){return e*(0.5-Math.random())}function by(e){if(e!==void 0)qp=e;let t=qp+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Sy(e){return e*ps}function Ey(e){return e*ms}function Ty(e){return e>0&&Number.isInteger(e)&&2**Math.round(Math.log2(e))===e}function wy(e){return Math.pow(2,Math.ceil(Math.log(e)/Math.LN2))}function xu(e){return Math.pow(2,Math.floor(Math.log(e)/Math.LN2))}function Ay(e,t,i,n,r){let{cos:s,sin:o}=Math,a=s(i/2),l=o(i/2),c=s((t+n)/2),f=o((t+n)/2),u=s((t-n)/2),h=o((t-n)/2),m=s((n-t)/2),g=o((n-t)/2);switch(r){case"XYX":e.set(a*f,l*u,l*h,a*c);break;case"YZY":e.set(l*h,a*f,l*u,a*c);break;case"ZXZ":e.set(l*u,l*h,a*f,a*c);break;case"XZX":e.set(a*f,l*g,l*m,a*c);break;case"YXY":e.set(l*m,a*f,l*g,a*c);break;case"ZYZ":e.set(l*g,l*m,a*f,a*c);break;default:De("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Ea(e){switch(e.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function ac(e,t){if(t.constructor===Float32Array)return e;let i=Ea(t);if(i===void 0)throw Error("THREE.MathUtils: Invalid component type.");return Math.max(e/i,-1)}function lc(e,t){if(t.constructor===Float32Array)return e;let i=Ea(t);if(i===void 0)throw Error("THREE.MathUtils: Invalid component type.");return Math.round(e*i)}var Nf={DEG2RAD:ps,RAD2DEG:ms,generateUUID:ji,clamp:Mt,euclideanModulo:Df,mapLinear:dy,inverseLerp:py,lerp:Sa,damp:my,pingpong:gy,smoothstep:xy,smootherstep:_y,randInt:yy,randFloat:My,randFloatSpread:vy,seededRandom:by,degToRad:Sy,radToDeg:Ey,isPowerOfTwo:Ty,ceilPowerOfTwo:wy,floorPowerOfTwo:xu,setQuaternionFromProperEuler:Ay,normalize:lc,denormalize:ac};class ne{static{this.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,n=e.elements;return this.x=n[0]*t+n[3]*i+n[6],this.y=n[1]*t+n[4]*i+n[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Mt(this.x,e.x,t.x),this.y=Mt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Mt(this.x,e,t),this.y=Mt(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Mt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Mt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),n=Math.sin(t),r=this.x-e.x,s=this.y-e.y;return this.x=r*i-s*n+e.x,this.y=r*n+s*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ei{constructor(e=0,t=0,i=0,n=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=n}static slerpFlat(e,t,i,n,r,s,o){let a=i[n+0],l=i[n+1],c=i[n+2],f=i[n+3],u=r[s+0],h=r[s+1],m=r[s+2],g=r[s+3];if(f!==g||a!==u||l!==h||c!==m){let x=a*u+l*h+c*m+f*g;if(x<0)u=-u,h=-h,m=-m,g=-g,x=-x;let d=1-o;if(x<0.9995){let p=Math.acos(x),y=Math.sin(p);d=Math.sin(d*p)/y,o=Math.sin(o*p)/y,a=a*d+u*o,l=l*d+h*o,c=c*d+m*o,f=f*d+g*o}else{a=a*d+u*o,l=l*d+h*o,c=c*d+m*o,f=f*d+g*o;let p=1/Math.sqrt(a*a+l*l+c*c+f*f);a*=p,l*=p,c*=p,f*=p}}e[t]=a,e[t+1]=l,e[t+2]=c,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,n,r,s){let o=i[n],a=i[n+1],l=i[n+2],c=i[n+3],f=r[s],u=r[s+1],h=r[s+2],m=r[s+3];return e[t]=o*m+c*f+a*h-l*u,e[t+1]=a*m+c*u+l*f-o*h,e[t+2]=l*m+c*h+o*u-a*f,e[t+3]=c*m-o*f-a*u-l*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,n){return this._x=e,this._y=t,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let{_x:i,_y:n,_z:r,_order:s}=e,{cos:o,sin:a}=Math,l=o(i/2),c=o(n/2),f=o(r/2),u=a(i/2),h=a(n/2),m=a(r/2);switch(s){case"XYZ":this._x=u*c*f+l*h*m,this._y=l*h*f-u*c*m,this._z=l*c*m+u*h*f,this._w=l*c*f-u*h*m;break;case"YXZ":this._x=u*c*f+l*h*m,this._y=l*h*f-u*c*m,this._z=l*c*m-u*h*f,this._w=l*c*f+u*h*m;break;case"ZXY":this._x=u*c*f-l*h*m,this._y=l*h*f+u*c*m,this._z=l*c*m+u*h*f,this._w=l*c*f-u*h*m;break;case"ZYX":this._x=u*c*f-l*h*m,this._y=l*h*f+u*c*m,this._z=l*c*m-u*h*f,this._w=l*c*f+u*h*m;break;case"YZX":this._x=u*c*f+l*h*m,this._y=l*h*f+u*c*m,this._z=l*c*m-u*h*f,this._w=l*c*f-u*h*m;break;case"XZY":this._x=u*c*f-l*h*m,this._y=l*h*f-u*c*m,this._z=l*c*m+u*h*f,this._w=l*c*f+u*h*m;break;default:De("Quaternion: .setFromEuler() encountered an unknown order: "+s)}if(t===!0)this._onChangeCallback();return this}setFromAxisAngle(e,t){let i=t/2,n=Math.sin(i);return this._x=e.x*n,this._y=e.y*n,this._z=e.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],n=t[4],r=t[8],s=t[1],o=t[5],a=t[9],l=t[2],c=t[6],f=t[10],u=i+o+f;if(u>0){let h=0.5/Math.sqrt(u+1);this._w=0.25/h,this._x=(c-a)*h,this._y=(r-l)*h,this._z=(s-n)*h}else if(i>o&&i>f){let h=2*Math.sqrt(1+i-o-f);this._w=(c-a)/h,this._x=0.25*h,this._y=(n+s)/h,this._z=(r+l)/h}else if(o>f){let h=2*Math.sqrt(1+o-i-f);this._w=(r-l)/h,this._x=(n+s)/h,this._y=0.25*h,this._z=(a+c)/h}else{let h=2*Math.sqrt(1+f-i-o);this._w=(s-n)/h,this._x=(r+l)/h,this._y=(a+c)/h,this._z=0.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;if(i<0.00000001)if(i=0,Math.abs(e.x)>Math.abs(e.z))this._x=-e.y,this._y=e.x,this._z=0,this._w=i;else this._x=0,this._y=-e.z,this._z=e.y,this._w=i;else this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i;return this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Mt(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let n=Math.min(1,t/i);return this.slerp(e,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();if(e===0)this._x=0,this._y=0,this._z=0,this._w=1;else e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e;return this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let{_x:i,_y:n,_z:r,_w:s}=e,{_x:o,_y:a,_z:l,_w:c}=t;return this._x=i*c+s*o+n*l-r*a,this._y=n*c+s*a+r*o-i*l,this._z=r*c+s*l+i*a-n*o,this._w=s*c-i*o-n*a-r*l,this._onChangeCallback(),this}slerp(e,t){let{_x:i,_y:n,_z:r,_w:s}=e,o=this.dot(e);if(o<0)i=-i,n=-n,r=-r,s=-s,o=-o;let a=1-t;if(o<0.9995){let l=Math.acos(o),c=Math.sin(l);a=Math.sin(a*l)/c,t=Math.sin(t*l)/c,this._x=this._x*a+i*t,this._y=this._y*a+n*t,this._z=this._z*a+r*t,this._w=this._w*a+s*t,this._onChangeCallback()}else this._x=this._x*a+i*t,this._y=this._y*a+n*t,this._z=this._z*a+r*t,this._w=this._w*a+s*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),n=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(n*Math.sin(e),n*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class R{static{this.prototype.isVector3=!0}constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){if(i===void 0)i=this.z;return this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Kp.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Kp.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,n=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*n,this.y=r[1]*t+r[4]*i+r[7]*n,this.z=r[2]*t+r[5]*i+r[8]*n,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,n=this.z,r=e.elements,s=1/(r[3]*t+r[7]*i+r[11]*n+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*n+r[12])*s,this.y=(r[1]*t+r[5]*i+r[9]*n+r[13])*s,this.z=(r[2]*t+r[6]*i+r[10]*n+r[14])*s,this}applyQuaternion(e){let t=this.x,i=this.y,n=this.z,{x:r,y:s,z:o,w:a}=e,l=2*(s*n-o*i),c=2*(o*t-r*n),f=2*(r*i-s*t);return this.x=t+a*l+s*f-o*c,this.y=i+a*c+o*l-r*f,this.z=n+a*f+r*c-s*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,n=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*n,this.y=r[1]*t+r[5]*i+r[9]*n,this.z=r[2]*t+r[6]*i+r[10]*n,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Mt(this.x,e.x,t.x),this.y=Mt(this.y,e.y,t.y),this.z=Mt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Mt(this.x,e,t),this.y=Mt(this.y,e,t),this.z=Mt(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Mt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let{x:i,y:n,z:r}=e,{x:s,y:o,z:a}=t;return this.x=n*a-r*o,this.y=r*s-i*a,this.z=i*o-n*s,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return _u.copy(this).projectOnVector(e),this.sub(_u)}reflect(e){return this.sub(_u.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Mt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,n=this.z-e.z;return t*t+i*i+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let n=Math.sin(t)*e;return this.x=n*Math.sin(i),this.y=Math.cos(t)*e,this.z=n*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),n=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=n,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}var _u=new R,Kp=new Ei;class mt{static{this.prototype.isMatrix3=!0}constructor(e,t,i,n,r,s,o,a,l){if(this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0)this.set(e,t,i,n,r,s,o,a,l)}set(e,t,i,n,r,s,o,a,l){let c=this.elements;return c[0]=e,c[1]=n,c[2]=o,c[3]=t,c[4]=r,c[5]=a,c[6]=i,c[7]=s,c[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,n=t.elements,r=this.elements,s=i[0],o=i[3],a=i[6],l=i[1],c=i[4],f=i[7],u=i[2],h=i[5],m=i[8],g=n[0],x=n[3],d=n[6],p=n[1],y=n[4],M=n[7],b=n[2],T=n[5],S=n[8];return r[0]=s*g+o*p+a*b,r[3]=s*x+o*y+a*T,r[6]=s*d+o*M+a*S,r[1]=l*g+c*p+f*b,r[4]=l*x+c*y+f*T,r[7]=l*d+c*M+f*S,r[2]=u*g+h*p+m*b,r[5]=u*x+h*y+m*T,r[8]=u*d+h*M+m*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],n=e[2],r=e[3],s=e[4],o=e[5],a=e[6],l=e[7],c=e[8];return t*s*c-t*o*l-i*r*c+i*o*a+n*r*l-n*s*a}invert(){let e=this.elements,t=e[0],i=e[1],n=e[2],r=e[3],s=e[4],o=e[5],a=e[6],l=e[7],c=e[8],f=c*s-o*l,u=o*a-c*r,h=l*r-s*a,m=t*f+i*u+n*h;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let g=1/m;return e[0]=f*g,e[1]=(n*l-c*i)*g,e[2]=(o*i-n*s)*g,e[3]=u*g,e[4]=(c*t-n*a)*g,e[5]=(n*r-o*t)*g,e[6]=h*g,e[7]=(i*a-l*t)*g,e[8]=(s*t-i*r)*g,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,n,r,s,o){let a=Math.cos(r),l=Math.sin(r);return this.set(i*a,i*l,-i*(a*s+l*o)+s+e,-n*l,n*a,-n*(-l*s+a*o)+o+t,0,0,1),this}scale(e,t){return br("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(yu.makeScale(e,t)),this}rotate(e){return br("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(yu.makeRotation(-e)),this}translate(e,t){return br("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(yu.makeTranslation(e,t)),this}makeTranslation(e,t){if(e.isVector2)this.set(1,0,e.x,0,1,e.y,0,0,1);else this.set(1,0,e,0,1,t,0,0,1);return this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let n=0;n<9;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}var yu=new mt;var Zp=new mt().set(0.4123908,0.3575843,0.1804808,0.212639,0.7151687,0.0721923,0.0193308,0.1191948,0.9505322),Jp=new mt().set(3.2409699,-1.5373832,-0.4986108,-0.9692436,1.8759675,0.0415551,0.0556301,-0.203977,1.0569715);function Ry(){let e={enabled:!0,workingColorSpace:Tn,spaces:{},convert:function(r,s,o){if(this.enabled===!1||s===o||!s||!o)return r;if(this.spaces[s].transfer===Wt)r.r=Ur(r.r),r.g=Ur(r.g),r.b=Ur(r.b);if(this.spaces[s].primaries!==this.spaces[o].primaries)r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ);if(this.spaces[o].transfer===Wt)r.r=Ao(r.r),r.g=Ao(r.g),r.b=Ao(r.b);return r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){if(r===vr)return To;return this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[o].fromXYZ).multiply(this.spaces[s].toXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}},t=[0.64,0.33,0.3,0.6,0.15,0.06],i=[0.2126,0.7152,0.0722],n=[0.3127,0.329];return e.define({[Tn]:{primaries:t,whitePoint:n,transfer:To,toXYZ:Zp,fromXYZ:Jp,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Ft},outputColorSpaceConfig:{drawingBufferColorSpace:Ft}},[Ft]:{primaries:t,whitePoint:n,transfer:Wt,toXYZ:Zp,fromXYZ:Jp,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Ft}}}),e}var Et=Ry();function Ur(e){return e<0.04045?e*0.0773993808:Math.pow(e*0.9478672986+0.0521327014,2.4)}function Ao(e){return e<0.0031308?e*12.92:1.055*Math.pow(e,0.41666)-0.055}var Ta;class Ff{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src))return e.src;if(typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{if(Ta===void 0)Ta=ks("canvas");Ta.width=e.width,Ta.height=e.height;let n=Ta.getContext("2d");if(e instanceof ImageData)n.putImageData(e,0,0);else n.drawImage(e,0,0,e.width,e.height);i=Ta}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=ks("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let n=i.getImageData(0,0,e.width,e.height),r=n.data;for(let s=0;s<r.length;s++)r[s]=Ur(r[s]/255)*255;return i.putImageData(n,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)if(t instanceof Uint8Array||t instanceof Uint8ClampedArray)t[i]=Math.floor(Ur(t[i]/255)*255);else t[i]=Ur(t[i]);return{data:t,width:e.width,height:e.height}}else return De("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}var Cy=0;class Jr{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Cy++}),this.uuid=ji(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;if(typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement)e.set(t.videoWidth,t.videoHeight,0);else if(typeof VideoFrame<"u"&&t instanceof VideoFrame)e.set(t.displayWidth,t.displayHeight,0);else if(t!==null)e.set(t.width||0,t.height||0,t.depth||0);else e.set(0,0,0);return e}set needsUpdate(e){if(e===!0)this.version++}toJSON(e){let t=e===void 0||typeof e==="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let r;if(Array.isArray(n)){r=[];for(let s=0,o=n.length;s<o;s++)if(n[s].isDataTexture)r.push(Mu(n[s].image));else r.push(Mu(n[s]))}else r=Mu(n);i.url=r}if(!t)e.images[this.uuid]=i;return i}}function Mu(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap)return Ff.getDataURL(e);else if(e.data)return{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name};else return De("Texture: Unable to serialize Texture."),{}}var Py=0,vu=new R;class Jt extends cn{constructor(e=Jt.DEFAULT_IMAGE,t=Jt.DEFAULT_MAPPING,i=on,n=on,r=_i,s=mn,o=ln,a=Ji,l=Jt.DEFAULT_ANISOTROPY,c=vr){super();this.isTexture=!0,Object.defineProperty(this,"id",{value:Py++}),this.uuid=ji(),this.name="",this.source=new Jr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=r,this.minFilter=s,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=a,this.offset=new ne(0,0),this.repeat=new ne(1,1),this.center=new ne(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new mt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=e&&e.depth&&e.depth>1?!0:!1,this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(vu).x}get height(){return this.source.getSize(vu).y}get depth(){return this.source.getSize(vu).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){De(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let n=this[t];if(n===void 0){De(`Texture.setValues(): property '${t}' does not exist.`);continue}if(n&&i&&(n.isVector2&&i.isVector2))n.copy(i);else if(n&&i&&(n.isVector3&&i.isVector3))n.copy(i);else if(n&&i&&(n.isMatrix3&&i.isMatrix3))n.copy(i);else this[t]=i}}toJSON(e){let t=e===void 0||typeof e==="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(Object.keys(this.userData).length>0)i.userData=this.userData;if(!t)e.textures[this.uuid]=i;return i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==gf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Nn:e.x=e.x-Math.floor(e.x);break;case on:e.x=e.x<0?0:1;break;case zs:if(Math.abs(Math.floor(e.x)%2)===1)e.x=Math.ceil(e.x)-e.x;else e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Nn:e.y=e.y-Math.floor(e.y);break;case on:e.y=e.y<0?0:1;break;case zs:if(Math.abs(Math.floor(e.y)%2)===1)e.y=Math.ceil(e.y)-e.y;else e.y=e.y-Math.floor(e.y);break}if(this.flipY)e.y=1-e.y;return e}set needsUpdate(e){if(e===!0)this.version++,this.source.needsUpdate=!0}set needsPMREMUpdate(e){if(e===!0)this.pmremVersion++}}Jt.DEFAULT_IMAGE=null;Jt.DEFAULT_MAPPING=gf;Jt.DEFAULT_ANISOTROPY=1;class Xt{static{this.prototype.isVector4=!0}constructor(e=0,t=0,i=0,n=1){this.x=e,this.y=t,this.z=i,this.w=n}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,n){return this.x=e,this.y=t,this.z=i,this.w=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,n=this.z,r=this.w,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*n+s[12]*r,this.y=s[1]*t+s[5]*i+s[9]*n+s[13]*r,this.z=s[2]*t+s[6]*i+s[10]*n+s[14]*r,this.w=s[3]*t+s[7]*i+s[11]*n+s[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);if(t<0.0001)this.x=1,this.y=0,this.z=0;else this.x=e.x/t,this.y=e.y/t,this.z=e.z/t;return this}setAxisAngleFromRotationMatrix(e){let t,i,n,r,s=0.01,o=0.1,a=e.elements,l=a[0],c=a[4],f=a[8],u=a[1],h=a[5],m=a[9],g=a[2],x=a[6],d=a[10];if(Math.abs(c-u)<0.01&&Math.abs(f-g)<0.01&&Math.abs(m-x)<0.01){if(Math.abs(c+u)<0.1&&Math.abs(f+g)<0.1&&Math.abs(m+x)<0.1&&Math.abs(l+h+d-3)<0.1)return this.set(1,0,0,0),this;t=Math.PI;let y=(l+1)/2,M=(h+1)/2,b=(d+1)/2,T=(c+u)/4,S=(f+g)/4,_=(m+x)/4;if(y>M&&y>b)if(y<0.01)i=0,n=0.707106781,r=0.707106781;else i=Math.sqrt(y),n=T/i,r=S/i;else if(M>b)if(M<0.01)i=0.707106781,n=0,r=0.707106781;else n=Math.sqrt(M),i=T/n,r=_/n;else if(b<0.01)i=0.707106781,n=0.707106781,r=0;else r=Math.sqrt(b),i=S/r,n=_/r;return this.set(i,n,r,t),this}let p=Math.sqrt((x-m)*(x-m)+(f-g)*(f-g)+(u-c)*(u-c));if(Math.abs(p)<0.001)p=1;return this.x=(x-m)/p,this.y=(f-g)/p,this.z=(u-c)/p,this.w=Math.acos((l+h+d-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Mt(this.x,e.x,t.x),this.y=Mt(this.y,e.y,t.y),this.z=Mt(this.z,e.z,t.z),this.w=Mt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Mt(this.x,e,t),this.y=Mt(this.y,e,t),this.z=Mt(this.z,e,t),this.w=Mt(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Mt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class cc extends cn{constructor(e=1,t=1,i={}){super();i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:_i,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Xt(0,0,e,t),this.scissorTest=!1,this.viewport=new Xt(0,0,e,t),this.textures=[];let n=i.count;for(let r=0;r<n;r++)this.textures[r]=new Jt({width:e,height:t,depth:i.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:_i,generateMipmaps:!1,flipY:!1,internalFormat:null};if(e.mapping!==void 0)t.mapping=e.mapping;if(e.wrapS!==void 0)t.wrapS=e.wrapS;if(e.wrapT!==void 0)t.wrapT=e.wrapT;if(e.wrapR!==void 0)t.wrapR=e.wrapR;if(e.magFilter!==void 0)t.magFilter=e.magFilter;if(e.minFilter!==void 0)t.minFilter=e.minFilter;if(e.format!==void 0)t.format=e.format;if(e.type!==void 0)t.type=e.type;if(e.anisotropy!==void 0)t.anisotropy=e.anisotropy;if(e.colorSpace!==void 0)t.colorSpace=e.colorSpace;if(e.flipY!==void 0)t.flipY=e.flipY;if(e.generateMipmaps!==void 0)t.generateMipmaps=e.generateMipmaps;if(e.mipmapsAutoUpdate!==void 0)t.mipmapsAutoUpdate=e.mipmapsAutoUpdate;if(e.internalFormat!==void 0)t.internalFormat=e.internalFormat;for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){if(this._depthTexture!==null&&this._depthTexture.renderTarget===this)this._depthTexture.renderTarget=null;if(e!==null&&e.renderTarget===null)e.renderTarget=this;this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let n=0,r=this.textures.length;n<r;n++)if(this.textures[n].image.width=e,this.textures[n].image.height=t,this.textures[n].image.depth=i,this.textures[n].isData3DTexture!==!0)this.textures[n].isArrayTexture=this.textures[n].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new Jr(n)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ti extends cc{constructor(e=1,t=1,i={}){super(e,t,i);this.isWebGLRenderTarget=!0}}class Ro extends Jt{constructor(e=null,t=1,i=1,n=1){super(null);this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=di,this.minFilter=di,this.wrapR=on,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class wa extends Jt{constructor(e=null,t=1,i=1,n=1){super(null);this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=di,this.minFilter=di,this.wrapR=on,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}class $e{static{this.prototype.isMatrix4=!0}constructor(e,t,i,n,r,s,o,a,l,c,f,u,h,m,g,x){if(this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0)this.set(e,t,i,n,r,s,o,a,l,c,f,u,h,m,g,x)}set(e,t,i,n,r,s,o,a,l,c,f,u,h,m,g,x){let d=this.elements;return d[0]=e,d[4]=t,d[8]=i,d[12]=n,d[1]=r,d[5]=s,d[9]=o,d[13]=a,d[2]=l,d[6]=c,d[10]=f,d[14]=u,d[3]=h,d[7]=m,d[11]=g,d[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new $e().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){if(this.determinantAffine()===0)return e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this;return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,i=e.elements,n=1/Aa.setFromMatrixColumn(e,0).length(),r=1/Aa.setFromMatrixColumn(e,1).length(),s=1/Aa.setFromMatrixColumn(e,2).length();return t[0]=i[0]*n,t[1]=i[1]*n,t[2]=i[2]*n,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*s,t[9]=i[9]*s,t[10]=i[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,{x:i,y:n,z:r}=e,s=Math.cos(i),o=Math.sin(i),a=Math.cos(n),l=Math.sin(n),c=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){let u=s*c,h=s*f,m=o*c,g=o*f;t[0]=a*c,t[4]=-a*f,t[8]=l,t[1]=h+m*l,t[5]=u-g*l,t[9]=-o*a,t[2]=g-u*l,t[6]=m+h*l,t[10]=s*a}else if(e.order==="YXZ"){let u=a*c,h=a*f,m=l*c,g=l*f;t[0]=u+g*o,t[4]=m*o-h,t[8]=s*l,t[1]=s*f,t[5]=s*c,t[9]=-o,t[2]=h*o-m,t[6]=g+u*o,t[10]=s*a}else if(e.order==="ZXY"){let u=a*c,h=a*f,m=l*c,g=l*f;t[0]=u-g*o,t[4]=-s*f,t[8]=m+h*o,t[1]=h+m*o,t[5]=s*c,t[9]=g-u*o,t[2]=-s*l,t[6]=o,t[10]=s*a}else if(e.order==="ZYX"){let u=s*c,h=s*f,m=o*c,g=o*f;t[0]=a*c,t[4]=m*l-h,t[8]=u*l+g,t[1]=a*f,t[5]=g*l+u,t[9]=h*l-m,t[2]=-l,t[6]=o*a,t[10]=s*a}else if(e.order==="YZX"){let u=s*a,h=s*l,m=o*a,g=o*l;t[0]=a*c,t[4]=g-u*f,t[8]=m*f+h,t[1]=f,t[5]=s*c,t[9]=-o*c,t[2]=-l*c,t[6]=h*f+m,t[10]=u-g*f}else if(e.order==="XZY"){let u=s*a,h=s*l,m=o*a,g=o*l;t[0]=a*c,t[4]=-f,t[8]=l*c,t[1]=u*f+g,t[5]=s*c,t[9]=h*f-m,t[2]=m*f-h,t[6]=o*c,t[10]=g*f+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Iy,e,Ly)}lookAt(e,t,i){let n=this.elements;if(or.subVectors(e,t),or.lengthSq()===0)or.z=1;if(or.normalize(),Vs.crossVectors(i,or),Vs.lengthSq()===0){if(Math.abs(i.z)===1)or.x+=0.0001;else or.z+=0.0001;or.normalize(),Vs.crossVectors(i,or)}return Vs.normalize(),Uf.crossVectors(or,Vs),n[0]=Vs.x,n[4]=Uf.x,n[8]=or.x,n[1]=Vs.y,n[5]=Uf.y,n[9]=or.y,n[2]=Vs.z,n[6]=Uf.z,n[10]=or.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,n=t.elements,r=this.elements,s=i[0],o=i[4],a=i[8],l=i[12],c=i[1],f=i[5],u=i[9],h=i[13],m=i[2],g=i[6],x=i[10],d=i[14],p=i[3],y=i[7],M=i[11],b=i[15],T=n[0],S=n[4],_=n[8],v=n[12],w=n[1],I=n[5],P=n[9],O=n[13],Q=n[2],L=n[6],K=n[10],D=n[14],N=n[3],se=n[7],Y=n[11],W=n[15];return r[0]=s*T+o*w+a*Q+l*N,r[4]=s*S+o*I+a*L+l*se,r[8]=s*_+o*P+a*K+l*Y,r[12]=s*v+o*O+a*D+l*W,r[1]=c*T+f*w+u*Q+h*N,r[5]=c*S+f*I+u*L+h*se,r[9]=c*_+f*P+u*K+h*Y,r[13]=c*v+f*O+u*D+h*W,r[2]=m*T+g*w+x*Q+d*N,r[6]=m*S+g*I+x*L+d*se,r[10]=m*_+g*P+x*K+d*Y,r[14]=m*v+g*O+x*D+d*W,r[3]=p*T+y*w+M*Q+b*N,r[7]=p*S+y*I+M*L+b*se,r[11]=p*_+y*P+M*K+b*Y,r[15]=p*v+y*O+M*D+b*W,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],n=e[8],r=e[12],s=e[1],o=e[5],a=e[9],l=e[13],c=e[2],f=e[6],u=e[10],h=e[14],m=e[3],g=e[7],x=e[11],d=e[15],p=a*h-l*u,y=o*h-l*f,M=o*u-a*f,b=s*h-l*c,T=s*u-a*c,S=s*f-o*c;return t*(g*p-x*y+d*M)-i*(m*p-x*b+d*T)+n*(m*y-g*b+d*S)-r*(m*M-g*T+x*S)}determinantAffine(){let e=this.elements,t=e[0],i=e[4],n=e[8],r=e[1],s=e[5],o=e[9],a=e[2],l=e[6],c=e[10];return t*(s*c-o*l)-i*(r*c-o*a)+n*(r*l-s*a)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let n=this.elements;if(e.isVector3)n[12]=e.x,n[13]=e.y,n[14]=e.z;else n[12]=e,n[13]=t,n[14]=i;return this}invert(){let e=this.elements,t=e[0],i=e[1],n=e[2],r=e[3],s=e[4],o=e[5],a=e[6],l=e[7],c=e[8],f=e[9],u=e[10],h=e[11],m=e[12],g=e[13],x=e[14],d=e[15],p=t*o-i*s,y=t*a-n*s,M=t*l-r*s,b=i*a-n*o,T=i*l-r*o,S=n*l-r*a,_=c*g-f*m,v=c*x-u*m,w=c*d-h*m,I=f*x-u*g,P=f*d-h*g,O=u*d-h*x,Q=p*O-y*P+M*I+b*w-T*v+S*_;if(Q===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let L=1/Q;return e[0]=(o*O-a*P+l*I)*L,e[1]=(n*P-i*O-r*I)*L,e[2]=(g*S-x*T+d*b)*L,e[3]=(u*T-f*S-h*b)*L,e[4]=(a*w-s*O-l*v)*L,e[5]=(t*O-n*w+r*v)*L,e[6]=(x*M-m*S-d*y)*L,e[7]=(c*S-u*M+h*y)*L,e[8]=(s*P-o*w+l*_)*L,e[9]=(i*w-t*P-r*_)*L,e[10]=(m*T-g*M+d*p)*L,e[11]=(f*M-c*T-h*p)*L,e[12]=(o*v-s*I-a*_)*L,e[13]=(t*I-i*v+n*_)*L,e[14]=(g*y-m*b-x*p)*L,e[15]=(c*b-f*y+u*p)*L,this}scale(e){let t=this.elements,{x:i,y:n,z:r}=e;return t[0]*=i,t[4]*=n,t[8]*=r,t[1]*=i,t[5]*=n,t[9]*=r,t[2]*=i,t[6]*=n,t[10]*=r,t[3]*=i,t[7]*=n,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],n=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,n))}makeTranslation(e,t,i){if(e.isVector3)this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1);else this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1);return this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),n=Math.sin(t),r=1-i,{x:s,y:o,z:a}=e,l=r*s,c=r*o;return this.set(l*s+i,l*o-n*a,l*a+n*o,0,l*o+n*a,c*o+i,c*a-n*s,0,l*a-n*o,c*a+n*s,r*a*a+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,n,r,s){return this.set(1,i,r,0,e,1,s,0,t,n,1,0,0,0,0,1),this}compose(e,t,i){let n=this.elements,{_x:r,_y:s,_z:o,_w:a}=t,l=r+r,c=s+s,f=o+o,u=r*l,h=r*c,m=r*f,g=s*c,x=s*f,d=o*f,p=a*l,y=a*c,M=a*f,{x:b,y:T,z:S}=i;return n[0]=(1-(g+d))*b,n[1]=(h+M)*b,n[2]=(m-y)*b,n[3]=0,n[4]=(h-M)*T,n[5]=(1-(u+d))*T,n[6]=(x+p)*T,n[7]=0,n[8]=(m+y)*S,n[9]=(x-p)*S,n[10]=(1-(u+g))*S,n[11]=0,n[12]=e.x,n[13]=e.y,n[14]=e.z,n[15]=1,this}decompose(e,t,i){let n=this.elements;e.x=n[12],e.y=n[13],e.z=n[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),t.identity(),this;let s=Aa.set(n[0],n[1],n[2]).length(),o=Aa.set(n[4],n[5],n[6]).length(),a=Aa.set(n[8],n[9],n[10]).length();if(r<0)s=-s;Br.copy(this);let l=1/s,c=1/o,f=1/a;return Br.elements[0]*=l,Br.elements[1]*=l,Br.elements[2]*=l,Br.elements[4]*=c,Br.elements[5]*=c,Br.elements[6]*=c,Br.elements[8]*=f,Br.elements[9]*=f,Br.elements[10]*=f,t.setFromRotationMatrix(Br),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,n,r,s,o=gn,a=!1){let l=this.elements,c=2*r/(t-e),f=2*r/(i-n),u=(t+e)/(t-e),h=(i+n)/(i-n),m,g;if(a)m=r/(s-r),g=s*r/(s-r);else if(o===gn)m=-(s+r)/(s-r),g=-2*s*r/(s-r);else if(o===Zr)m=-s/(s-r),g=-s*r/(s-r);else throw Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=f,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,n,r,s,o=gn,a=!1){let l=this.elements,c=2/(t-e),f=2/(i-n),u=-(t+e)/(t-e),h=-(i+n)/(i-n),m,g;if(a)m=1/(s-r),g=s/(s-r);else if(o===gn)m=-2/(s-r),g=-(s+r)/(s-r);else if(o===Zr)m=-1/(s-r),g=-r/(s-r);else throw Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=0,l[12]=u,l[1]=0,l[5]=f,l[9]=0,l[13]=h,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let n=0;n<16;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}var Aa=new R,Br=new $e,Iy=new R(0,0,0),Ly=new R(1,1,1),Vs=new R,Uf=new R,or=new R;var jp=new $e,$p=new Ei;class xn{constructor(e=0,t=0,i=0,n=xn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=n}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,n=this._order){return this._x=e,this._y=t,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let n=e.elements,r=n[0],s=n[4],o=n[8],a=n[1],l=n[5],c=n[9],f=n[2],u=n[6],h=n[10];switch(t){case"XYZ":if(this._y=Math.asin(Mt(o,-1,1)),Math.abs(o)<0.9999999)this._x=Math.atan2(-c,h),this._z=Math.atan2(-s,r);else this._x=Math.atan2(u,l),this._z=0;break;case"YXZ":if(this._x=Math.asin(-Mt(c,-1,1)),Math.abs(c)<0.9999999)this._y=Math.atan2(o,h),this._z=Math.atan2(a,l);else this._y=Math.atan2(-f,r),this._z=0;break;case"ZXY":if(this._x=Math.asin(Mt(u,-1,1)),Math.abs(u)<0.9999999)this._y=Math.atan2(-f,h),this._z=Math.atan2(-s,l);else this._y=0,this._z=Math.atan2(a,r);break;case"ZYX":if(this._y=Math.asin(-Mt(f,-1,1)),Math.abs(f)<0.9999999)this._x=Math.atan2(u,h),this._z=Math.atan2(a,r);else this._x=0,this._z=Math.atan2(-s,l);break;case"YZX":if(this._z=Math.asin(Mt(a,-1,1)),Math.abs(a)<0.9999999)this._x=Math.atan2(-c,l),this._y=Math.atan2(-f,r);else this._x=0,this._y=Math.atan2(o,h);break;case"XZY":if(this._z=Math.asin(-Mt(s,-1,1)),Math.abs(s)<0.9999999)this._x=Math.atan2(u,l),this._y=Math.atan2(o,r);else this._x=Math.atan2(-c,h),this._y=0;break;default:De("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}if(this._order=t,i===!0)this._onChangeCallback();return this}setFromQuaternion(e,t,i){return jp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(jp,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return $p.setFromEuler(this),this.setFromQuaternion($p,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){if(this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0)this._order=e[3];return this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}xn.DEFAULT_ORDER="XYZ";class Ws{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}var Dy=0,Qp=new R,Ra=new Ei,gs=new $e,Bf=new R,fc=new R,Ny=new R,Fy=new Ei,e0=new R(1,0,0),t0=new R(0,1,0),i0=new R(0,0,1),n0={type:"added"},Uy={type:"removed"},Ca={type:"childadded",child:null},bu={type:"childremoved",child:null};class vt extends cn{constructor(){super();this.isObject3D=!0,Object.defineProperty(this,"id",{value:Dy++}),this.uuid=ji(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=vt.DEFAULT_UP.clone();let e=new R,t=new xn,i=new Ei,n=new R(1,1,1);function r(){i.setFromEuler(t,!1)}function s(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new $e},normalMatrix:{value:new mt}}),this.matrix=new $e,this.matrixWorld=new $e,this.matrixAutoUpdate=vt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ws,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null)this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ra.setFromAxisAngle(e,t),this.quaternion.multiply(Ra),this}rotateOnWorldAxis(e,t){return Ra.setFromAxisAngle(e,t),this.quaternion.premultiply(Ra),this}rotateX(e){return this.rotateOnAxis(e0,e)}rotateY(e){return this.rotateOnAxis(t0,e)}rotateZ(e){return this.rotateOnAxis(i0,e)}translateOnAxis(e,t){return Qp.copy(e).applyQuaternion(this.quaternion),this.position.add(Qp.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(e0,e)}translateY(e){return this.translateOnAxis(t0,e)}translateZ(e){return this.translateOnAxis(i0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(gs.copy(this.matrixWorld).invert())}lookAt(e,t,i){if(e.isVector3)Bf.copy(e);else Bf.set(e,t,i);let n=this.parent;if(this.updateWorldMatrix(!0,!1),fc.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight)gs.lookAt(fc,Bf,this.up);else gs.lookAt(Bf,fc,this.up);if(this.quaternion.setFromRotationMatrix(gs),n)gs.extractRotation(n.matrixWorld),Ra.setFromRotationMatrix(gs),this.quaternion.premultiply(Ra.invert())}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}if(e===this)return it("Object3D.add: object can't be added as a child of itself.",e),this;if(e&&e.isObject3D)e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(n0),Ca.child=e,this.dispatchEvent(Ca),Ca.child=null;else it("Object3D.add: object not an instance of THREE.Object3D.",e);return this}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);if(t!==-1)e.parent=null,this.children.splice(t,1),e.dispatchEvent(Uy),bu.child=e,this.dispatchEvent(bu),bu.child=null;return this}removeFromParent(){let e=this.parent;if(e!==null)e.remove(this);return this}clear(){return this.remove(...this.children)}attach(e){if(this.updateWorldMatrix(!0,!1),gs.copy(this.matrixWorld).invert(),e.parent!==null)e.parent.updateWorldMatrix(!0,!1),gs.multiply(e.parent.matrixWorld);return e.applyMatrix4(gs),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(n0),Ca.child=e,this.dispatchEvent(Ca),Ca.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,n=this.children.length;i<n;i++){let s=this.children[i].getObjectByProperty(e,t);if(s!==void 0)return s}return}getObjectsByProperty(e,t,i=[]){if(this[e]===t)i.push(this);let n=this.children;for(let r=0,s=n.length;r<s;r++)n[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fc,e,Ny),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fc,Fy,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;if(t!==null)e(t),t.traverseAncestors(e)}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let{x:t,y:i,z:n}=e,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*n,r[13]+=i-r[1]*t-r[5]*i-r[9]*n,r[14]+=n-r[2]*t-r[6]*i-r[10]*n}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||e){if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,e=!0}let t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){let n=this.parent;if(e===!0&&n!==null)n.updateWorldMatrix(!0,!1);if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||i){if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,i=!0}if(t===!0){let r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0,i)}}toJSON(e){let t=e===void 0||typeof e==="string",i={};if(t)e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"};let n={};if(n.uuid=this.uuid,n.type=this.type,n.name=this.name,n.castShadow=this.castShadow,n.receiveShadow=this.receiveShadow,n.visible=this.visible,n.frustumCulled=this.frustumCulled,n.renderOrder=this.renderOrder,n.static=this.static,n.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0)n.userData=this.userData;if(n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.pivot!==null)n.pivot=this.pivot.toArray();if(this.morphTargetDictionary!==void 0)n.morphTargetDictionary=Object.assign({},this.morphTargetDictionary);if(this.morphTargetInfluences!==void 0)n.morphTargetInfluences=this.morphTargetInfluences.slice();if(this.isInstancedMesh){if(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null)n.instanceColor=this.instanceColor.toJSON()}if(this.isBatchedMesh){if(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.geometryInfo=this._geometryInfo.map((o)=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),n.instanceInfo=this._instanceInfo.map((o)=>({...o})),n.availableInstanceIds=this._availableInstanceIds.slice(),n.availableGeometryIds=this._availableGeometryIds.slice(),n.nextIndexStart=this._nextIndexStart,n.nextVertexStart=this._nextVertexStart,n.geometryCount=this._geometryCount,n.maxInstanceCount=this._maxInstanceCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.matricesTexture=this._matricesTexture.toJSON(e),n.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null)n.colorsTexture=this._colorsTexture.toJSON(e);if(this.boundingSphere!==null)n.boundingSphere=this.boundingSphere.toJSON();if(this.boundingBox!==null)n.boundingBox=this.boundingBox.toJSON()}function r(o,a){if(o[a.uuid]===void 0)o[a.uuid]=a.toJSON(e);return a.uuid}if(this.isScene){if(this.background){if(this.background.isColor)n.background=this.background.toJSON();else if(this.background.isTexture)n.background=this.background.toJSON(e).uuid}if(this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0)n.environment=this.environment.toJSON(e).uuid}else if(this.isMesh||this.isLine||this.isPoints){n.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let a=o.shapes;if(Array.isArray(a))for(let l=0,c=a.length;l<c;l++){let f=a[l];r(e.shapes,f)}else r(e.shapes,a)}}if(this.isSkinnedMesh){if(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0)r(e.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid}if(this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let a=0,l=this.material.length;a<l;a++)o.push(r(e.materials,this.material[a]));n.material=o}else n.material=r(e.materials,this.material);if(this.children.length>0){n.children=[];for(let o=0;o<this.children.length;o++)n.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){n.animations=[];for(let o=0;o<this.animations.length;o++){let a=this.animations[o];n.animations.push(r(e.animations,a))}}if(t){let o=s(e.geometries),a=s(e.materials),l=s(e.textures),c=s(e.images),f=s(e.shapes),u=s(e.skeletons),h=s(e.animations),m=s(e.nodes);if(o.length>0)i.geometries=o;if(a.length>0)i.materials=a;if(l.length>0)i.textures=l;if(c.length>0)i.images=c;if(f.length>0)i.shapes=f;if(u.length>0)i.skeletons=u;if(h.length>0)i.animations=h;if(m.length>0)i.nodes=m}return i.object=n,i;function s(o){let a=[];for(let l in o){let c=o[l];delete c.metadata,a.push(c)}return a}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let n=e.children[i];this.add(n.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}vt.DEFAULT_UP=new R(0,1,0);vt.DEFAULT_MATRIX_AUTO_UPDATE=!0;vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Ze extends vt{constructor(){super();this.isGroup=!0,this.type="Group"}}var By={type:"move"};class Pa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){if(this._hand===null)this._hand=new Ze,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1};return this._hand}getTargetRaySpace(){if(this._targetRay===null)this._targetRay=new Ze,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R;return this._targetRay}getGripSpace(){if(this._grip===null)this._grip=new Ze,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R,this._grip.eventsEnabled=!1;return this._grip}dispatchEvent(e){if(this._targetRay!==null)this._targetRay.dispatchEvent(e);if(this._grip!==null)this._grip.dispatchEvent(e);if(this._hand!==null)this._hand.dispatchEvent(e);return this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){if(this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null)this._targetRay.visible=!1;if(this._grip!==null)this._grip.visible=!1;if(this._hand!==null)this._hand.visible=!1;return this}update(e,t,i){let n=null,r=null,s=null,o=this._targetRay,a=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){s=!0;for(let g of e.hand.values()){let x=t.getJointPose(g,i),d=this._getHandJoint(l,g);if(x!==null)d.matrix.fromArray(x.transform.matrix),d.matrix.decompose(d.position,d.quaternion,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=x.radius;d.visible=x!==null}let c=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],u=c.position.distanceTo(f.position),h=0.02,m=0.005;if(l.inputState.pinching&&u>h+m)l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this});else if(!l.inputState.pinching&&u<=h-m)l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this})}else if(a!==null&&e.gripSpace){if(r=t.getPose(e.gripSpace,i),r!==null){if(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity)a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity);else a.hasLinearVelocity=!1;if(r.angularVelocity)a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity);else a.hasAngularVelocity=!1;if(a.eventsEnabled)a.dispatchEvent({type:"gripUpdated",data:e,target:this})}}if(o!==null){if(n=t.getPose(e.targetRaySpace,i),n===null&&r!==null)n=r;if(n!==null){if(o.matrix.fromArray(n.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,n.linearVelocity)o.hasLinearVelocity=!0,o.linearVelocity.copy(n.linearVelocity);else o.hasLinearVelocity=!1;if(n.angularVelocity)o.hasAngularVelocity=!0,o.angularVelocity.copy(n.angularVelocity);else o.hasAngularVelocity=!1;this.dispatchEvent(By)}}}if(o!==null)o.visible=n!==null;if(a!==null)a.visible=r!==null;if(l!==null)l.visible=s!==null;return this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new Ze;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}var r0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Xs={h:0,s:0,l:0},Of={h:0,s:0,l:0};function Su(e,t,i){if(i<0)i+=1;if(i>1)i-=1;if(i<0.16666666666666666)return e+(t-e)*6*i;if(i<0.5)return t;if(i<0.6666666666666666)return e+(t-e)*6*(0.6666666666666666-i);return e}class Se{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let n=e;if(n&&n.isColor)this.copy(n);else if(typeof n==="number")this.setHex(n);else if(typeof n==="string")this.setStyle(n)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ft){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Et.colorSpaceToWorking(this,t),this}setRGB(e,t,i,n=Et.workingColorSpace){return this.r=e,this.g=t,this.b=i,Et.colorSpaceToWorking(this,n),this}setHSL(e,t,i,n=Et.workingColorSpace){if(e=Df(e,1),t=Mt(t,0,1),i=Mt(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=0.5?i*(1+t):i+t-i*t,s=2*i-r;this.r=Su(s,r,e+0.3333333333333333),this.g=Su(s,r,e),this.b=Su(s,r,e-0.3333333333333333)}return Et.colorSpaceToWorking(this,n),this}setStyle(e,t=Ft){function i(r){if(r===void 0)return;if(parseFloat(r)<1)De("Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,s=n[1],o=n[2];switch(s){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:De("Color: Unknown color model "+e)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=n[1],s=r.length;if(s===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);else if(s===6)return this.setHex(parseInt(r,16),t);else De("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ft){let i=r0[e.toLowerCase()];if(i!==void 0)this.setHex(i,t);else De("Color: Unknown color "+e);return this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ur(e.r),this.g=Ur(e.g),this.b=Ur(e.b),this}copyLinearToSRGB(e){return this.r=Ao(e.r),this.g=Ao(e.g),this.b=Ao(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ft){return Et.workingToColorSpace(Un.copy(this),e),Math.round(Mt(Un.r*255,0,255))*65536+Math.round(Mt(Un.g*255,0,255))*256+Math.round(Mt(Un.b*255,0,255))}getHexString(e=Ft){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Et.workingColorSpace){Et.workingToColorSpace(Un.copy(this),t);let{r:i,g:n,b:r}=Un,s=Math.max(i,n,r),o=Math.min(i,n,r),a,l,c=(o+s)/2;if(o===s)a=0,l=0;else{let f=s-o;switch(l=c<=0.5?f/(s+o):f/(2-s-o),s){case i:a=(n-r)/f+(n<r?6:0);break;case n:a=(r-i)/f+2;break;case r:a=(i-n)/f+4;break}a/=6}return e.h=a,e.s=l,e.l=c,e}getRGB(e,t=Et.workingColorSpace){return Et.workingToColorSpace(Un.copy(this),t),e.r=Un.r,e.g=Un.g,e.b=Un.b,e}getStyle(e=Ft){Et.workingToColorSpace(Un.copy(this),e);let{r:t,g:i,b:n}=Un;if(e!==Ft)return`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`;return`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(e,t,i){return this.getHSL(Xs),this.setHSL(Xs.h+e,Xs.s+t,Xs.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Xs),e.getHSL(Of);let i=Sa(Xs.h,Of.h,t),n=Sa(Xs.s,Of.s,t),r=Sa(Xs.l,Of.l,t);return this.setHSL(i,n,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,n=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*n,this.g=r[1]*t+r[4]*i+r[7]*n,this.b=r[2]*t+r[5]*i+r[8]*n,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}var Un=new Se;Se.NAMES=r0;class Ia{constructor(e,t=1,i=1000){this.isFog=!0,this.name="",this.color=new Se(e),this.near=t,this.far=i}clone(){return new Ia(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Co extends vt{constructor(){super();if(this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new xn,this.environmentIntensity=1,this.environmentRotation=new xn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);if(this.fog!==null)t.object.fog=this.fog.toJSON();return t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}var Or=new R,xs=new R,Eu=new R,_s=new R,La=new R,Da=new R,s0=new R,Tu=new R,wu=new R,Au=new R,Ru=new Xt,Cu=new Xt,Pu=new Xt;class wn{constructor(e=new R,t=new R,i=new R){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,n){n.subVectors(i,t),Or.subVectors(e,t),n.cross(Or);let r=n.lengthSq();if(r>0)return n.multiplyScalar(1/Math.sqrt(r));return n.set(0,0,0)}static getBarycoord(e,t,i,n,r){Or.subVectors(n,t),xs.subVectors(i,t),Eu.subVectors(e,t);let s=Or.dot(Or),o=Or.dot(xs),a=Or.dot(Eu),l=xs.dot(xs),c=xs.dot(Eu),f=s*l-o*o;if(f===0)return r.set(0,0,0),null;let u=1/f,h=(l*a-o*c)*u,m=(s*c-o*a)*u;return r.set(1-h-m,m,h)}static containsPoint(e,t,i,n){if(this.getBarycoord(e,t,i,n,_s)===null)return!1;return _s.x>=0&&_s.y>=0&&_s.x+_s.y<=1}static getInterpolation(e,t,i,n,r,s,o,a){if(this.getBarycoord(e,t,i,n,_s)===null){if(a.x=0,a.y=0,"z"in a)a.z=0;if("w"in a)a.w=0;return null}return a.setScalar(0),a.addScaledVector(r,_s.x),a.addScaledVector(s,_s.y),a.addScaledVector(o,_s.z),a}static getInterpolatedAttribute(e,t,i,n,r,s){return Ru.setScalar(0),Cu.setScalar(0),Pu.setScalar(0),Ru.fromBufferAttribute(e,t),Cu.fromBufferAttribute(e,i),Pu.fromBufferAttribute(e,n),s.setScalar(0),s.addScaledVector(Ru,r.x),s.addScaledVector(Cu,r.y),s.addScaledVector(Pu,r.z),s}static isFrontFacing(e,t,i,n){return Or.subVectors(i,t),xs.subVectors(e,t),Or.cross(xs).dot(n)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,n){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[n]),this}setFromAttributeAndIndices(e,t,i,n){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Or.subVectors(this.c,this.b),xs.subVectors(this.a,this.b),Or.cross(xs).length()*0.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(0.3333333333333333)}getNormal(e){return wn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return wn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,n,r){return wn.getInterpolation(e,this.a,this.b,this.c,t,i,n,r)}containsPoint(e){return wn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return wn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,n=this.b,r=this.c,s,o;La.subVectors(n,i),Da.subVectors(r,i),Tu.subVectors(e,i);let a=La.dot(Tu),l=Da.dot(Tu);if(a<=0&&l<=0)return t.copy(i);wu.subVectors(e,n);let c=La.dot(wu),f=Da.dot(wu);if(c>=0&&f<=c)return t.copy(n);let u=a*f-c*l;if(u<=0&&a>=0&&c<=0&&a-c>0)return s=a/(a-c),t.copy(i).addScaledVector(La,s);Au.subVectors(e,r);let h=La.dot(Au),m=Da.dot(Au);if(m>=0&&h<=m)return t.copy(r);let g=h*l-a*m;if(g<=0&&l>=0&&m<=0)return o=l/(l-m),t.copy(i).addScaledVector(Da,o);let x=c*m-h*f;if(x<=0&&f-c>=0&&h-m>=0)return s0.subVectors(r,n),o=(f-c)/(f-c+(h-m)),t.copy(n).addScaledVector(s0,o);let d=1/(x+g+u);return s=g*d,o=u*d,t.copy(i).addScaledVector(La,s).addScaledVector(Da,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Li{constructor(e=new R(1/0,1/0,1/0),t=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Hr.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Hr.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Hr.copy(t).multiplyScalar(0.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(0.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let s=0,o=r.count;s<o;s++){if(e.isMesh===!0)e.getVertexPosition(s,Hr);else Hr.fromBufferAttribute(r,s);Hr.applyMatrix4(e.matrixWorld),this.expandByPoint(Hr)}else{if(e.boundingBox!==void 0){if(e.boundingBox===null)e.computeBoundingBox();Hf.copy(e.boundingBox)}else{if(i.boundingBox===null)i.computeBoundingBox();Hf.copy(i.boundingBox)}Hf.applyMatrix4(e.matrixWorld),this.union(Hf)}}let n=e.children;for(let r=0,s=n.length;r<s;r++)this.expandByObject(n[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Hr),Hr.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;if(e.normal.x>0)t=e.normal.x*this.min.x,i=e.normal.x*this.max.x;else t=e.normal.x*this.max.x,i=e.normal.x*this.min.x;if(e.normal.y>0)t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y;else t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y;if(e.normal.z>0)t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z;else t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z;return t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(hc),zf.subVectors(this.max,hc),Na.subVectors(e.a,hc),Fa.subVectors(e.b,hc),Ua.subVectors(e.c,hc),Ys.subVectors(Fa,Na),qs.subVectors(Ua,Fa),Po.subVectors(Na,Ua);let t=[0,-Ys.z,Ys.y,0,-qs.z,qs.y,0,-Po.z,Po.y,Ys.z,0,-Ys.x,qs.z,0,-qs.x,Po.z,0,-Po.x,-Ys.y,Ys.x,0,-qs.y,qs.x,0,-Po.y,Po.x,0];if(!Iu(t,Na,Fa,Ua,zf))return!1;if(t=[1,0,0,0,1,0,0,0,1],!Iu(t,Na,Fa,Ua,zf))return!1;return Gf.crossVectors(Ys,qs),t=[Gf.x,Gf.y,Gf.z],Iu(t,Na,Fa,Ua,zf)}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Hr).distanceTo(e)}getBoundingSphere(e){if(this.isEmpty())e.makeEmpty();else this.getCenter(e.center),e.radius=this.getSize(Hr).length()*0.5;return e}intersect(e){if(this.min.max(e.min),this.max.min(e.max),this.isEmpty())this.makeEmpty();return this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){if(this.isEmpty())return this;return ys[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ys[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ys[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ys[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ys[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ys[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ys[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ys[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ys),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}var ys=[new R,new R,new R,new R,new R,new R,new R,new R],Hr=new R,Hf=new Li,Na=new R,Fa=new R,Ua=new R,Ys=new R,qs=new R,Po=new R,hc=new R,zf=new R,Gf=new R,Io=new R;function Iu(e,t,i,n,r){for(let s=0,o=e.length-3;s<=o;s+=3){Io.fromArray(e,s);let a=r.x*Math.abs(Io.x)+r.y*Math.abs(Io.y)+r.z*Math.abs(Io.z),l=t.dot(Io),c=i.dot(Io),f=n.dot(Io);if(Math.max(-Math.max(l,c,f),Math.min(l,c,f))>a)return!1}return!0}var en=new R,kf=new ne,Oy=0;class pi extends cn{constructor(e,t,i=!1){super();if(Array.isArray(e))throw TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Oy++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=oc,this.updateRanges=[],this.gpuType=Wi,this.version=0,this._normalizationScale=e!==void 0?Ea(e):void 0}onUploadCallback(){}set needsUpdate(e){if(e===!0)this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let n=0,r=this.itemSize;n<r;n++)this.array[e+n]=t.array[i+n];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)kf.fromBufferAttribute(this,t),kf.applyMatrix3(e),this.setXY(t,kf.x,kf.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)en.fromBufferAttribute(this,t),en.applyMatrix3(e),this.setXYZ(t,en.x,en.y,en.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)en.fromBufferAttribute(this,t),en.applyMatrix4(e),this.setXYZ(t,en.x,en.y,en.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)en.fromBufferAttribute(this,t),en.applyNormalMatrix(e),this.setXYZ(t,en.x,en.y,en.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)en.fromBufferAttribute(this,t),en.transformDirection(e),this.setXYZ(t,en.x,en.y,en.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];if(this.normalized)i=this._denormalize(i);return i}setComponent(e,t,i){if(this.normalized)i=this._normalize(i);return this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];if(this.normalized)t=this._denormalize(t);return t}setX(e,t){if(this.normalized)t=this._normalize(t);return this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];if(this.normalized)t=this._denormalize(t);return t}setY(e,t){if(this.normalized)t=this._normalize(t);return this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];if(this.normalized)t=this._denormalize(t);return t}setZ(e,t){if(this.normalized)t=this._normalize(t);return this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];if(this.normalized)t=this._denormalize(t);return t}setW(e,t){if(this.normalized)t=this._normalize(t);return this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){if(e*=this.itemSize,this.normalized)t=this._normalize(t),i=this._normalize(i);return this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,n){if(e*=this.itemSize,this.normalized)t=this._normalize(t),i=this._normalize(i),n=this._normalize(n);return this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this}setXYZW(e,t,i,n,r){if(e*=this.itemSize,this.normalized)t=this._normalize(t),i=this._normalize(i),n=this._normalize(n),r=this._normalize(r);return this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):ac(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):lc(e,this.array)}}class uc extends pi{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class dc extends pi{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Be extends pi{constructor(e,t,i){super(new Float32Array(e),t,i)}}var Hy=new Li,pc=new R,Lu=new R;class Hi{constructor(e=new R,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;if(t!==void 0)i.copy(t);else Hy.setFromPoints(e).getCenter(i);let n=0;for(let r=0,s=e.length;r<s;r++)n=Math.max(n,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(n),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);if(t.copy(e),i>this.radius*this.radius)t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center);return t}getBoundingBox(e){if(this.isEmpty())return e.makeEmpty(),e;return e.set(this.center,this.center),e.expandByScalar(this.radius),e}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;pc.subVectors(e,this.center);let t=pc.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),n=(i-this.radius)*0.5;this.center.addScaledVector(pc,n/i),this.radius+=n}return this}union(e){if(e.isEmpty())return this;if(this.isEmpty())return this.copy(e),this;if(this.center.equals(e.center)===!0)this.radius=Math.max(this.radius,e.radius);else Lu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(pc.copy(e.center).add(Lu)),this.expandByPoint(pc.copy(e.center).sub(Lu));return this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}var zy=0,Sr=new $e,Du=new vt,Ba=new R,ar=new Li,mc=new Li,_n=new R;class et extends cn{constructor(){super();this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:zy++}),this.uuid=ji(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){if(Array.isArray(e))this.index=new((Vp(e))?dc:uc)(e,1);else this.index=e;return this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;if(t!==void 0)t.applyMatrix4(e),t.needsUpdate=!0;let i=this.attributes.normal;if(i!==void 0){let r=new mt().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let n=this.attributes.tangent;if(n!==void 0)n.transformDirection(e),n.needsUpdate=!0;if(this.boundingBox!==null)this.computeBoundingBox();if(this.boundingSphere!==null)this.computeBoundingSphere();return this._transformed=!0,this}applyQuaternion(e){return Sr.makeRotationFromQuaternion(e),this.applyMatrix4(Sr),this}rotateX(e){return Sr.makeRotationX(e),this.applyMatrix4(Sr),this}rotateY(e){return Sr.makeRotationY(e),this.applyMatrix4(Sr),this}rotateZ(e){return Sr.makeRotationZ(e),this.applyMatrix4(Sr),this}translate(e,t,i){return Sr.makeTranslation(e,t,i),this.applyMatrix4(Sr),this}scale(e,t,i){return Sr.makeScale(e,t,i),this.applyMatrix4(Sr),this}lookAt(e){return Du.lookAt(e),Du.updateMatrix(),this.applyMatrix4(Du.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ba).negate(),this.translate(Ba.x,Ba.y,Ba.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let n=0,r=e.length;n<r;n++){let s=e[n];i.push(s.x,s.y,s.z||0)}this.setAttribute("position",new Be(i,3))}else{let i=Math.min(e.length,t.count);for(let n=0;n<i;n++){let r=e[n];t.setXYZ(n,r.x,r.y,r.z||0)}if(e.length>t.count)De("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.");t.needsUpdate=!0}return this}computeBoundingBox(){if(this.boundingBox===null)this.boundingBox=new Li;let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){it("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,n=t.length;i<n;i++){let r=t[i];if(ar.setFromBufferAttribute(r),this.morphTargetsRelative)_n.addVectors(this.boundingBox.min,ar.min),this.boundingBox.expandByPoint(_n),_n.addVectors(this.boundingBox.max,ar.max),this.boundingBox.expandByPoint(_n);else this.boundingBox.expandByPoint(ar.min),this.boundingBox.expandByPoint(ar.max)}}else this.boundingBox.makeEmpty();if(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))it('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){if(this.boundingSphere===null)this.boundingSphere=new Hi;let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){it("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(e){let i=this.boundingSphere.center;if(ar.setFromBufferAttribute(e),t)for(let r=0,s=t.length;r<s;r++){let o=t[r];if(mc.setFromBufferAttribute(o),this.morphTargetsRelative)_n.addVectors(ar.min,mc.min),ar.expandByPoint(_n),_n.addVectors(ar.max,mc.max),ar.expandByPoint(_n);else ar.expandByPoint(mc.min),ar.expandByPoint(mc.max)}ar.getCenter(i);let n=0;for(let r=0,s=e.count;r<s;r++)_n.fromBufferAttribute(e,r),n=Math.max(n,i.distanceToSquared(_n));if(t)for(let r=0,s=t.length;r<s;r++){let o=t[r],a=this.morphTargetsRelative;for(let l=0,c=o.count;l<c;l++){if(_n.fromBufferAttribute(o,l),a)Ba.fromBufferAttribute(e,l),_n.add(Ba);n=Math.max(n,i.distanceToSquared(_n))}}if(this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius))it('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){it("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let{position:i,normal:n,uv:r}=t,s=this.getAttribute("tangent");if(s===void 0||s.count!==i.count)s=new pi(new Float32Array(4*i.count),4),this.setAttribute("tangent",s);let o=[],a=[],l=new Uint8Array(i.count);for(let v=0;v<i.count;v++)o[v]=new R,a[v]=new R;let c=new R,f=new R,u=new R,h=new ne,m=new ne,g=new ne,x=new R,d=new R;function p(v,w,I){l[v]=l[w]=l[I]=1,c.fromBufferAttribute(i,v),f.fromBufferAttribute(i,w),u.fromBufferAttribute(i,I),h.fromBufferAttribute(r,v),m.fromBufferAttribute(r,w),g.fromBufferAttribute(r,I),f.sub(c),u.sub(c),m.sub(h),g.sub(h);let P=1/(m.x*g.y-g.x*m.y);if(!isFinite(P))return;x.copy(f).multiplyScalar(g.y).addScaledVector(u,-m.y).multiplyScalar(P),d.copy(u).multiplyScalar(m.x).addScaledVector(f,-g.x).multiplyScalar(P),o[v].add(x),o[w].add(x),o[I].add(x),a[v].add(d),a[w].add(d),a[I].add(d)}let y=this.groups;if(y.length===0)y=[{start:0,count:e.count}];for(let v=0,w=y.length;v<w;++v){let I=y[v],{start:P,count:O}=I;for(let Q=P,L=P+O;Q<L;Q+=3)p(e.getX(Q+0),e.getX(Q+1),e.getX(Q+2))}let M=new R,b=new R,T=new R,S=new R;function _(v){T.fromBufferAttribute(n,v),S.copy(T);let w=o[v];M.copy(w),M.sub(T.multiplyScalar(T.dot(w))).normalize(),b.crossVectors(S,w);let P=b.dot(a[v])<0?-1:1;s.setXYZW(v,M.x,M.y,M.z,P)}for(let v=0,w=i.count;v<w;++v)if(l[v])_(v);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new pi(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let u=0,h=i.count;u<h;u++)i.setXYZ(u,0,0,0);let n=new R,r=new R,s=new R,o=new R,a=new R,l=new R,c=new R,f=new R;if(e)for(let u=0,h=e.count;u<h;u+=3){let m=e.getX(u+0),g=e.getX(u+1),x=e.getX(u+2);n.fromBufferAttribute(t,m),r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,x),c.subVectors(s,r),f.subVectors(n,r),c.cross(f),o.fromBufferAttribute(i,m),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,x),o.add(c),a.add(c),l.add(c),i.setXYZ(m,o.x,o.y,o.z),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z)}else for(let u=0,h=t.count;u<h;u+=3)n.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),s.fromBufferAttribute(t,u+2),c.subVectors(s,r),f.subVectors(n,r),c.cross(f),i.setXYZ(u+0,c.x,c.y,c.z),i.setXYZ(u+1,c.x,c.y,c.z),i.setXYZ(u+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)_n.fromBufferAttribute(e,t),_n.normalize(),e.setXYZ(t,_n.x,_n.y,_n.z)}toNonIndexed(){function e(o,a){let{array:l,itemSize:c,normalized:f}=o,u=new l.constructor(a.length*c),h=0,m=0;for(let g=0,x=a.length;g<x;g++){if(o.isInterleavedBufferAttribute)h=a[g]*o.data.stride+o.offset;else h=a[g]*c;for(let d=0;d<c;d++)u[m++]=l[h++]}return new pi(u,c,f)}if(this.index===null)return De("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new et,i=this.index.array,n=this.attributes;for(let o in n){let a=n[o],l=e(a,i);t.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let a=[],l=r[o];for(let c=0,f=l.length;c<f;c++){let u=l[c],h=e(u,i);a.push(h)}t.morphAttributes[o]=a}t.morphTargetsRelative=this.morphTargetsRelative;let s=this.groups;for(let o=0,a=s.length;o<a;o++){let l=s[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0)e.userData=this.userData;if(this.parameters!==void 0&&this._transformed!==!0){let a=this.parameters;for(let l in a)if(a[l]!==void 0)e[l]=a[l];return e}e.data={attributes:{}};let t=this.index;if(t!==null)e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)};let i=this.attributes;for(let a in i){let l=i[a];e.data.attributes[a]=l.toJSON(e.data)}let n={},r=!1;for(let a in this.morphAttributes){let l=this.morphAttributes[a],c=[];for(let f=0,u=l.length;f<u;f++){let h=l[f];c.push(h.toJSON(e.data))}if(c.length>0)n[a]=c,r=!0}if(r)e.data.morphAttributes=n,e.data.morphTargetsRelative=this.morphTargetsRelative;let s=this.groups;if(s.length>0)e.data.groups=JSON.parse(JSON.stringify(s));let o=this.boundingSphere;if(o!==null)e.data.boundingSphere=o.toJSON();return e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;if(i!==null)this.setIndex(i.clone());let n=e.attributes;for(let l in n){let c=n[l];this.setAttribute(l,c.clone(t))}let r=e.morphAttributes;for(let l in r){let c=[],f=r[l];for(let u=0,h=f.length;u<h;u++)c.push(f[u].clone(t));this.morphAttributes[l]=c}this.morphTargetsRelative=e.morphTargetsRelative;let s=e.groups;for(let l=0,c=s.length;l<c;l++){let f=s[l];this.addGroup(f.start,f.count,f.materialIndex)}let o=e.boundingBox;if(o!==null)this.boundingBox=o.clone();let a=e.boundingSphere;if(a!==null)this.boundingSphere=a.clone();return this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ms{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=oc,this.updateRanges=[],this.version=0,this.uuid=ji()}onUploadCallback(){}set needsUpdate(e){if(e===!0)this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let n=0,r=this.stride;n<r;n++)this.array[e+n]=t.array[i+n];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){if(e.arrayBuffers===void 0)e.arrayBuffers={};let t=o0(this.array);if(e.arrayBuffers[t]===void 0)e.arrayBuffers[t]=this.array.slice(0).buffer;let i=new this.array.constructor(e.arrayBuffers[t]),n=new this.constructor(i,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){if(e.arrayBuffers===void 0)e.arrayBuffers={};let t=o0(this.array);if(e.arrayBuffers[t]===void 0)e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer));let i={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return i.usage=this.usage,i}}function o0(e){if(e.buffer._uuid===void 0)e.buffer._uuid=ji();if(e.byteOffset===0&&e.byteLength===e.buffer.byteLength)return e.buffer._uuid;return e.buffer._uuid+":"+e.byteOffset+":"+e.byteLength}var Wn=new R;class jr{constructor(e,t,i,n=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=n,this._normalizationScale=e!==void 0?Ea(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Wn.fromBufferAttribute(this,t),Wn.applyMatrix4(e),this.setXYZ(t,Wn.x,Wn.y,Wn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Wn.fromBufferAttribute(this,t),Wn.applyNormalMatrix(e),this.setXYZ(t,Wn.x,Wn.y,Wn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Wn.fromBufferAttribute(this,t),Wn.transformDirection(e),this.setXYZ(t,Wn.x,Wn.y,Wn.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];if(this.normalized)i=this._denormalize(i);return i}setComponent(e,t,i){if(this.normalized)i=this._normalize(i);return this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){if(this.normalized)t=this._normalize(t);return this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){if(this.normalized)t=this._normalize(t);return this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){if(this.normalized)t=this._normalize(t);return this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){if(this.normalized)t=this._normalize(t);return this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];if(this.normalized)t=this._denormalize(t);return t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];if(this.normalized)t=this._denormalize(t);return t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];if(this.normalized)t=this._denormalize(t);return t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];if(this.normalized)t=this._denormalize(t);return t}setXY(e,t,i){if(e=e*this.data.stride+this.offset,this.normalized)t=this._normalize(t),i=this._normalize(i);return this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,n){if(e=e*this.data.stride+this.offset,this.normalized)t=this._normalize(t),i=this._normalize(i),n=this._normalize(n);return this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=n,this}setXYZW(e,t,i,n,r){if(e=e*this.data.stride+this.offset,this.normalized)t=this._normalize(t),i=this._normalize(i),n=this._normalize(n),r=this._normalize(r);return this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=n,this.data.array[e+3]=r,this}clone(e){if(e===void 0){wo("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let n=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[n+r])}return new pi(new this.array.constructor(t),this.itemSize,this.normalized)}else{if(e.interleavedBuffers===void 0)e.interleavedBuffers={};if(e.interleavedBuffers[this.data.uuid]===void 0)e.interleavedBuffers[this.data.uuid]=this.data.clone(e);return new jr(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}}toJSON(e){if(e===void 0){wo("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let n=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[n+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else{if(e.interleavedBuffers===void 0)e.interleavedBuffers={};if(e.interleavedBuffers[this.data.uuid]===void 0)e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e);return{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):ac(e,this.data.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):lc(e,this.data.array)}}var Nu=new R,Gy=new R,ky=new mt;class Xn{constructor(e=new R(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,n){return this.normal.set(e,t,i),this.constant=n,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let n=Nu.subVectors(i,t).cross(Gy.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(n,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let n=e.delta(Nu),r=this.normal.dot(n);if(r===0){if(this.distanceToPoint(e.start)===0)return t.copy(e.start);return null}let s=-(e.start.dot(this.normal)+this.constant)/r;if(i===!0&&(s<0||s>1))return null;return t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||ky.getNormalMatrix(e),n=this.coplanarPoint(Nu).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}var Vy=0;class hi extends cn{constructor(){super();this.isMaterial=!0,Object.defineProperty(this,"id",{value:Vy++}),this.uuid=ji(),this.name="",this.type="Material",this.blending=Us,this.side=Zn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=pf,this.blendDst=mf,this.blendEquation=Bs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Se(0,0,0),this.blendAlpha=0,this.depthFunc=Os,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Up,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Cf,this.stencilZFail=Cf,this.stencilZPass=Cf,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){if(this._alphaTest>0!==e>0)this.version++;this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e===void 0)return;for(let t in e){let i=e[t];if(i===void 0){De(`Material: parameter '${t}' has value of undefined.`);continue}let n=this[t];if(n===void 0){De(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}if(n&&n.isColor)n.set(i);else if(n&&n.isVector2&&(i&&i.isVector2)||n&&n.isEuler&&(i&&i.isEuler)||n&&n.isVector3&&(i&&i.isVector3))n.copy(i);else this[t]=i}}toJSON(e){let t=e===void 0||typeof e==="string";if(t)e={textures:{},images:{}};let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};if(i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor)i.color=this.color.getHex();if(this.roughness!==void 0)i.roughness=this.roughness;if(this.metalness!==void 0)i.metalness=this.metalness;if(this.sheen!==void 0)i.sheen=this.sheen;if(this.sheenColor&&this.sheenColor.isColor)i.sheenColor=this.sheenColor.getHex();if(this.sheenRoughness!==void 0)i.sheenRoughness=this.sheenRoughness;if(this.emissive&&this.emissive.isColor)i.emissive=this.emissive.getHex();if(this.emissiveIntensity!==void 0)i.emissiveIntensity=this.emissiveIntensity;if(this.specular&&this.specular.isColor)i.specular=this.specular.getHex();if(this.specularIntensity!==void 0)i.specularIntensity=this.specularIntensity;if(this.specularColor&&this.specularColor.isColor)i.specularColor=this.specularColor.getHex();if(this.shininess!==void 0)i.shininess=this.shininess;if(this.clearcoat!==void 0)i.clearcoat=this.clearcoat;if(this.clearcoatRoughness!==void 0)i.clearcoatRoughness=this.clearcoatRoughness;if(this.diffuseRoughness!==void 0)i.diffuseRoughness=this.diffuseRoughness;if(this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture)i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid;if(this.clearcoatMap&&this.clearcoatMap.isTexture)i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid;if(this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture)i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid;if(this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture)i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray();if(this.sheenColorMap&&this.sheenColorMap.isTexture)i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid;if(this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture)i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid;if(this.dispersion!==void 0)i.dispersion=this.dispersion;if(this.retroreflectivity!==void 0)i.retroreflectivity=this.retroreflectivity;if(this.iridescence!==void 0)i.iridescence=this.iridescence;if(this.iridescenceIOR!==void 0)i.iridescenceIOR=this.iridescenceIOR;if(this.iridescenceThicknessMinimum!==void 0)i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum;if(this.iridescenceThicknessMaximum!==void 0)i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum;if(this.iridescenceMap&&this.iridescenceMap.isTexture)i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid;if(this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture)i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid;if(this.anisotropy!==void 0)i.anisotropy=this.anisotropy;if(this.anisotropyRotation!==void 0)i.anisotropyRotation=this.anisotropyRotation;if(this.anisotropyMap&&this.anisotropyMap.isTexture)i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid;if(this.map&&this.map.isTexture)i.map=this.map.toJSON(e).uuid;if(this.matcap&&this.matcap.isTexture)i.matcap=this.matcap.toJSON(e).uuid;if(this.alphaMap&&this.alphaMap.isTexture)i.alphaMap=this.alphaMap.toJSON(e).uuid;if(this.lightMap&&this.lightMap.isTexture)i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity;if(this.aoMap&&this.aoMap.isTexture)i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity;if(this.bumpMap&&this.bumpMap.isTexture)i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale;if(this.normalMap&&this.normalMap.isTexture)i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray();if(this.displacementMap&&this.displacementMap.isTexture)i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias;if(this.roughnessMap&&this.roughnessMap.isTexture)i.roughnessMap=this.roughnessMap.toJSON(e).uuid;if(this.metalnessMap&&this.metalnessMap.isTexture)i.metalnessMap=this.metalnessMap.toJSON(e).uuid;if(this.emissiveMap&&this.emissiveMap.isTexture)i.emissiveMap=this.emissiveMap.toJSON(e).uuid;if(this.specularMap&&this.specularMap.isTexture)i.specularMap=this.specularMap.toJSON(e).uuid;if(this.specularIntensityMap&&this.specularIntensityMap.isTexture)i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid;if(this.specularColorMap&&this.specularColorMap.isTexture)i.specularColorMap=this.specularColorMap.toJSON(e).uuid;if(this.envMap&&this.envMap.isTexture){if(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0)i.combine=this.combine}if(this.envMapRotation!==void 0)i.envMapRotation=this.envMapRotation.toArray();if(this.envMapIntensity!==void 0)i.envMapIntensity=this.envMapIntensity;if(this.reflectivity!==void 0)i.reflectivity=this.reflectivity;if(this.refractionRatio!==void 0)i.refractionRatio=this.refractionRatio;if(this.gradientMap&&this.gradientMap.isTexture)i.gradientMap=this.gradientMap.toJSON(e).uuid;if(this.transmission!==void 0)i.transmission=this.transmission;if(this.transmissionMap&&this.transmissionMap.isTexture)i.transmissionMap=this.transmissionMap.toJSON(e).uuid;if(this.thickness!==void 0)i.thickness=this.thickness;if(this.thicknessMap&&this.thicknessMap.isTexture)i.thicknessMap=this.thicknessMap.toJSON(e).uuid;if(this.attenuationDistance!==void 0)i.attenuationDistance=this.attenuationDistance;if(this.attenuationColor!==void 0)i.attenuationColor=this.attenuationColor.getHex();if(this.size!==void 0)i.size=this.size;if(this.sizeAttenuation!==void 0)i.sizeAttenuation=this.sizeAttenuation;if(Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0)i.clippingPlanes=this.clippingPlanes.map((r)=>r.toJSON());if(this.rotation!==void 0)i.rotation=this.rotation;if(this.depthPacking!==void 0)i.depthPacking=this.depthPacking;if(this.linewidth!==void 0)i.linewidth=this.linewidth;if(this.linecap!==void 0)i.linecap=this.linecap;if(this.linejoin!==void 0)i.linejoin=this.linejoin;if(this.dashSize!==void 0)i.dashSize=this.dashSize;if(this.gapSize!==void 0)i.gapSize=this.gapSize;if(this.scale!==void 0)i.scale=this.scale;if(this.wireframe!==void 0)i.wireframe=this.wireframe;if(this.wireframeLinewidth!==void 0)i.wireframeLinewidth=this.wireframeLinewidth;if(this.wireframeLinecap!==void 0)i.wireframeLinecap=this.wireframeLinecap;if(this.wireframeLinejoin!==void 0)i.wireframeLinejoin=this.wireframeLinejoin;if(this.flatShading!==void 0)i.flatShading=this.flatShading;if(this.fog!==void 0)i.fog=this.fog;if(Object.keys(this.userData).length>0)i.userData=this.userData;function n(r){let s=[];for(let o in r){let a=r[o];delete a.metadata,s.push(a)}return s}if(t){let r=n(e.textures),s=n(e.images);if(r.length>0)i.textures=r;if(s.length>0)i.images=s}return i}fromJSON(e,t){if(e.uuid!==void 0)this.uuid=e.uuid;if(e.name!==void 0)this.name=e.name;if(e.color!==void 0&&this.color!==void 0)this.color.setHex(e.color);if(e.roughness!==void 0)this.roughness=e.roughness;if(e.metalness!==void 0)this.metalness=e.metalness;if(e.sheen!==void 0)this.sheen=e.sheen;if(e.sheenColor!==void 0)this.sheenColor=new Se().setHex(e.sheenColor);if(e.sheenRoughness!==void 0)this.sheenRoughness=e.sheenRoughness;if(e.emissive!==void 0&&this.emissive!==void 0)this.emissive.setHex(e.emissive);if(e.specular!==void 0&&this.specular!==void 0)this.specular.setHex(e.specular);if(e.specularIntensity!==void 0)this.specularIntensity=e.specularIntensity;if(e.specularColor!==void 0&&this.specularColor!==void 0)this.specularColor.setHex(e.specularColor);if(e.shininess!==void 0)this.shininess=e.shininess;if(e.clearcoat!==void 0)this.clearcoat=e.clearcoat;if(e.clearcoatRoughness!==void 0)this.clearcoatRoughness=e.clearcoatRoughness;if(e.diffuseRoughness!==void 0)this.diffuseRoughness=e.diffuseRoughness;if(e.dispersion!==void 0)this.dispersion=e.dispersion;if(e.retroreflectivity!==void 0)this.retroreflectivity=e.retroreflectivity;if(e.iridescence!==void 0)this.iridescence=e.iridescence;if(e.iridescenceIOR!==void 0)this.iridescenceIOR=e.iridescenceIOR;if(e.iridescenceThicknessMinimum!==void 0)this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum;if(e.iridescenceThicknessMaximum!==void 0)this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum;if(e.iridescenceThicknessRange!==void 0)this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1];if(e.transmission!==void 0)this.transmission=e.transmission;if(e.thickness!==void 0)this.thickness=e.thickness;if(e.attenuationDistance!==void 0)this.attenuationDistance=e.attenuationDistance;if(e.attenuationColor!==void 0&&this.attenuationColor!==void 0)this.attenuationColor.setHex(e.attenuationColor);if(e.anisotropy!==void 0)this.anisotropy=e.anisotropy;if(e.anisotropyRotation!==void 0)this.anisotropyRotation=e.anisotropyRotation;if(e.fog!==void 0)this.fog=e.fog;if(e.flatShading!==void 0)this.flatShading=e.flatShading;if(e.blending!==void 0)this.blending=e.blending;if(e.combine!==void 0)this.combine=e.combine;if(e.side!==void 0)this.side=e.side;if(e.shadowSide!==void 0)this.shadowSide=e.shadowSide;if(e.opacity!==void 0)this.opacity=e.opacity;if(e.transparent!==void 0)this.transparent=e.transparent;if(e.alphaTest!==void 0)this.alphaTest=e.alphaTest;if(e.alphaHash!==void 0)this.alphaHash=e.alphaHash;if(e.depthFunc!==void 0)this.depthFunc=e.depthFunc;if(e.depthTest!==void 0)this.depthTest=e.depthTest;if(e.depthWrite!==void 0)this.depthWrite=e.depthWrite;if(e.colorWrite!==void 0)this.colorWrite=e.colorWrite;if(e.clippingPlanes!==void 0)this.clippingPlanes=e.clippingPlanes.map((i)=>new Xn().fromJSON(i));if(e.clipIntersection!==void 0)this.clipIntersection=e.clipIntersection;if(e.clipShadows!==void 0)this.clipShadows=e.clipShadows;if(e.depthPacking!==void 0)this.depthPacking=e.depthPacking;if(e.blendSrc!==void 0)this.blendSrc=e.blendSrc;if(e.blendDst!==void 0)this.blendDst=e.blendDst;if(e.blendEquation!==void 0)this.blendEquation=e.blendEquation;if(e.blendSrcAlpha!==void 0)this.blendSrcAlpha=e.blendSrcAlpha;if(e.blendDstAlpha!==void 0)this.blendDstAlpha=e.blendDstAlpha;if(e.blendEquationAlpha!==void 0)this.blendEquationAlpha=e.blendEquationAlpha;if(e.blendColor!==void 0&&this.blendColor!==void 0)this.blendColor.setHex(e.blendColor);if(e.blendAlpha!==void 0)this.blendAlpha=e.blendAlpha;if(e.stencilWriteMask!==void 0)this.stencilWriteMask=e.stencilWriteMask;if(e.stencilFunc!==void 0)this.stencilFunc=e.stencilFunc;if(e.stencilRef!==void 0)this.stencilRef=e.stencilRef;if(e.stencilFuncMask!==void 0)this.stencilFuncMask=e.stencilFuncMask;if(e.stencilFail!==void 0)this.stencilFail=e.stencilFail;if(e.stencilZFail!==void 0)this.stencilZFail=e.stencilZFail;if(e.stencilZPass!==void 0)this.stencilZPass=e.stencilZPass;if(e.stencilWrite!==void 0)this.stencilWrite=e.stencilWrite;if(e.wireframe!==void 0)this.wireframe=e.wireframe;if(e.wireframeLinewidth!==void 0)this.wireframeLinewidth=e.wireframeLinewidth;if(e.wireframeLinecap!==void 0)this.wireframeLinecap=e.wireframeLinecap;if(e.wireframeLinejoin!==void 0)this.wireframeLinejoin=e.wireframeLinejoin;if(e.rotation!==void 0)this.rotation=e.rotation;if(e.linewidth!==void 0)this.linewidth=e.linewidth;if(e.linecap!==void 0)this.linecap=e.linecap;if(e.linejoin!==void 0)this.linejoin=e.linejoin;if(e.dashSize!==void 0)this.dashSize=e.dashSize;if(e.gapSize!==void 0)this.gapSize=e.gapSize;if(e.scale!==void 0)this.scale=e.scale;if(e.polygonOffset!==void 0)this.polygonOffset=e.polygonOffset;if(e.polygonOffsetFactor!==void 0)this.polygonOffsetFactor=e.polygonOffsetFactor;if(e.polygonOffsetUnits!==void 0)this.polygonOffsetUnits=e.polygonOffsetUnits;if(e.dithering!==void 0)this.dithering=e.dithering;if(e.alphaToCoverage!==void 0)this.alphaToCoverage=e.alphaToCoverage;if(e.premultipliedAlpha!==void 0)this.premultipliedAlpha=e.premultipliedAlpha;if(e.forceSinglePass!==void 0)this.forceSinglePass=e.forceSinglePass;if(e.allowOverride!==void 0)this.allowOverride=e.allowOverride;if(e.visible!==void 0)this.visible=e.visible;if(e.toneMapped!==void 0)this.toneMapped=e.toneMapped;if(e.userData!==void 0)this.userData=e.userData;if(e.vertexColors!==void 0)if(typeof e.vertexColors==="number")this.vertexColors=e.vertexColors>0;else this.vertexColors=e.vertexColors;if(e.size!==void 0)this.size=e.size;if(e.sizeAttenuation!==void 0)this.sizeAttenuation=e.sizeAttenuation;if(e.map!==void 0)this.map=t[e.map]||null;if(e.matcap!==void 0)this.matcap=t[e.matcap]||null;if(e.alphaMap!==void 0)this.alphaMap=t[e.alphaMap]||null;if(e.bumpMap!==void 0)this.bumpMap=t[e.bumpMap]||null;if(e.bumpScale!==void 0)this.bumpScale=e.bumpScale;if(e.normalMap!==void 0)this.normalMap=t[e.normalMap]||null;if(e.normalMapType!==void 0)this.normalMapType=e.normalMapType;if(e.normalScale!==void 0){let i=e.normalScale;if(Array.isArray(i)===!1)i=[i,i];this.normalScale=new ne().fromArray(i)}if(e.displacementMap!==void 0)this.displacementMap=t[e.displacementMap]||null;if(e.displacementScale!==void 0)this.displacementScale=e.displacementScale;if(e.displacementBias!==void 0)this.displacementBias=e.displacementBias;if(e.roughnessMap!==void 0)this.roughnessMap=t[e.roughnessMap]||null;if(e.metalnessMap!==void 0)this.metalnessMap=t[e.metalnessMap]||null;if(e.emissiveMap!==void 0)this.emissiveMap=t[e.emissiveMap]||null;if(e.emissiveIntensity!==void 0)this.emissiveIntensity=e.emissiveIntensity;if(e.specularMap!==void 0)this.specularMap=t[e.specularMap]||null;if(e.specularIntensityMap!==void 0)this.specularIntensityMap=t[e.specularIntensityMap]||null;if(e.specularColorMap!==void 0)this.specularColorMap=t[e.specularColorMap]||null;if(e.envMap!==void 0)this.envMap=t[e.envMap]||null;if(e.envMapRotation!==void 0)this.envMapRotation.fromArray(e.envMapRotation);if(e.envMapIntensity!==void 0)this.envMapIntensity=e.envMapIntensity;if(e.reflectivity!==void 0)this.reflectivity=e.reflectivity;if(e.refractionRatio!==void 0)this.refractionRatio=e.refractionRatio;if(e.lightMap!==void 0)this.lightMap=t[e.lightMap]||null;if(e.lightMapIntensity!==void 0)this.lightMapIntensity=e.lightMapIntensity;if(e.aoMap!==void 0)this.aoMap=t[e.aoMap]||null;if(e.aoMapIntensity!==void 0)this.aoMapIntensity=e.aoMapIntensity;if(e.gradientMap!==void 0)this.gradientMap=t[e.gradientMap]||null;if(e.clearcoatMap!==void 0)this.clearcoatMap=t[e.clearcoatMap]||null;if(e.clearcoatRoughnessMap!==void 0)this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null;if(e.clearcoatNormalMap!==void 0)this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null;if(e.clearcoatNormalScale!==void 0)this.clearcoatNormalScale=new ne().fromArray(e.clearcoatNormalScale);if(e.diffuseRoughnessMap!==void 0)this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null;if(e.iridescenceMap!==void 0)this.iridescenceMap=t[e.iridescenceMap]||null;if(e.iridescenceThicknessMap!==void 0)this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null;if(e.transmissionMap!==void 0)this.transmissionMap=t[e.transmissionMap]||null;if(e.thicknessMap!==void 0)this.thicknessMap=t[e.thicknessMap]||null;if(e.anisotropyMap!==void 0)this.anisotropyMap=t[e.anisotropyMap]||null;if(e.sheenColorMap!==void 0)this.sheenColorMap=t[e.sheenColorMap]||null;if(e.sheenRoughnessMap!==void 0)this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null;return this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let n=t.length;i=Array(n);for(let r=0;r!==n;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){if(e===!0)this.version++}}class Lo extends hi{constructor(e){super();this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Se(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}var Oa,gc=new R,Ha=new R,za=new R,Ga=new ne,xc=new ne,c0=new $e,Vf=new R,_c=new R,Wf=new R,a0=new ne,Fu=new ne,l0=new ne;class yc extends vt{constructor(e=new Lo){super();if(this.isSprite=!0,this.type="Sprite",Oa===void 0){Oa=new et;let t=new Float32Array([-0.5,-0.5,0,0,0,0.5,-0.5,0,1,0,0.5,0.5,0,1,1,-0.5,0.5,0,0,1]),i=new Ms(t,5);Oa.setIndex([0,1,2,0,2,3]),Oa.setAttribute("position",new jr(i,3,0,!1)),Oa.setAttribute("uv",new jr(i,2,3,!1))}this.geometry=Oa,this.material=e,this.center=new ne(0.5,0.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){if(e.camera===null)it('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.');if(Ha.setFromMatrixScale(this.matrixWorld),c0.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),za.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1)Ha.multiplyScalar(-za.z);let i=this.material.rotation,n,r;if(i!==0)r=Math.cos(i),n=Math.sin(i);let s=this.center;Xf(Vf.set(-0.5,-0.5,0),za,s,Ha,n,r),Xf(_c.set(0.5,-0.5,0),za,s,Ha,n,r),Xf(Wf.set(0.5,0.5,0),za,s,Ha,n,r),a0.set(0,0),Fu.set(1,0),l0.set(1,1);let o=e.ray.intersectTriangle(Vf,_c,Wf,!1,gc);if(o===null){if(Xf(_c.set(-0.5,0.5,0),za,s,Ha,n,r),Fu.set(0,1),o=e.ray.intersectTriangle(Vf,Wf,_c,!1,gc),o===null)return}let a=e.ray.origin.distanceTo(gc);if(a<e.near||a>e.far)return;t.push({distance:a,point:gc.clone(),uv:wn.getInterpolation(gc,Vf,_c,Wf,a0,Fu,l0,new ne),face:null,object:this})}copy(e,t){if(super.copy(e,t),e.center!==void 0)this.center.copy(e.center);return this.material=e.material,this}toJSON(e){let t=super.toJSON(e);return t.object.center=this.center.toArray(),t}}function Xf(e,t,i,n,r,s){if(Ga.subVectors(e,i).addScalar(0.5).multiply(n),r!==void 0)xc.x=s*Ga.x-r*Ga.y,xc.y=r*Ga.x+s*Ga.y;else xc.copy(Ga);e.copy(t),e.x+=xc.x,e.y+=xc.y,e.applyMatrix4(c0)}var vs=new R,Uu=new R,Yf=new R,qf=new R;class Er{constructor(e=new R,t=new R(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,vs)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);if(i<0)return t.copy(this.origin);return t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=vs.subVectors(e,this.origin).dot(this.direction);if(t<0)return this.origin.distanceToSquared(e);return vs.copy(this.origin).addScaledVector(this.direction,t),vs.distanceToSquared(e)}distanceSqToSegment(e,t,i,n){Uu.copy(e).add(t).multiplyScalar(0.5),Yf.copy(t).sub(e).normalize(),qf.copy(this.origin).sub(Uu);let r=e.distanceTo(t)*0.5,s=-this.direction.dot(Yf),o=qf.dot(this.direction),a=-qf.dot(Yf),l=qf.lengthSq(),c=Math.abs(1-s*s),f,u,h,m;if(c>0)if(f=s*a-o,u=s*o-a,m=r*c,f>=0)if(u>=-m)if(u<=m){let g=1/c;f*=g,u*=g,h=f*(f+s*u+2*o)+u*(s*f+u+2*a)+l}else u=r,f=Math.max(0,-(s*u+o)),h=-f*f+u*(u+2*a)+l;else u=-r,f=Math.max(0,-(s*u+o)),h=-f*f+u*(u+2*a)+l;else if(u<=-m)f=Math.max(0,-(-s*r+o)),u=f>0?-r:Math.min(Math.max(-r,-a),r),h=-f*f+u*(u+2*a)+l;else if(u<=m)f=0,u=Math.min(Math.max(-r,-a),r),h=u*(u+2*a)+l;else f=Math.max(0,-(s*r+o)),u=f>0?r:Math.min(Math.max(-r,-a),r),h=-f*f+u*(u+2*a)+l;else u=s>0?-r:r,f=Math.max(0,-(s*u+o)),h=-f*f+u*(u+2*a)+l;if(i)i.copy(this.origin).addScaledVector(this.direction,f);if(n)n.copy(Uu).addScaledVector(Yf,u);return h}intersectSphere(e,t){if(e.radius<0)return null;vs.subVectors(e.center,this.origin);let i=vs.dot(this.direction),n=vs.dot(vs)-i*i,r=e.radius*e.radius;if(n>r)return null;let s=Math.sqrt(r-n),o=i-s,a=i+s;if(a<0)return null;if(o<0)return this.at(a,t);return this.at(o,t)}intersectsSphere(e){if(e.radius<0)return!1;return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0){if(e.distanceToPoint(this.origin)===0)return 0;return null}let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);if(i===null)return null;return this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);if(t===0)return!0;if(e.normal.dot(this.direction)*t<0)return!0;return!1}intersectBox(e,t){let i,n,r,s,o,a,l=1/this.direction.x,c=1/this.direction.y,f=1/this.direction.z,u=this.origin;if(l>=0)i=(e.min.x-u.x)*l,n=(e.max.x-u.x)*l;else i=(e.max.x-u.x)*l,n=(e.min.x-u.x)*l;if(c>=0)r=(e.min.y-u.y)*c,s=(e.max.y-u.y)*c;else r=(e.max.y-u.y)*c,s=(e.min.y-u.y)*c;if(i>s||r>n)return null;if(r>i||isNaN(i))i=r;if(s<n||isNaN(n))n=s;if(f>=0)o=(e.min.z-u.z)*f,a=(e.max.z-u.z)*f;else o=(e.max.z-u.z)*f,a=(e.min.z-u.z)*f;if(i>a||o>n)return null;if(o>i||i!==i)i=o;if(a<n||n!==n)n=a;if(n<0)return null;return this.at(i>=0?i:n,t)}intersectsBox(e){return this.intersectBox(e,vs)!==null}intersectTriangle(e,t,i,n,r){let s=this.origin,o=this.direction,{x:a,y:l,z:c}=o,f=e.x-s.x,u=e.y-s.y,h=e.z-s.z,m=t.x-s.x,g=t.y-s.y,x=t.z-s.z,d=i.x-s.x,p=i.y-s.y,y=i.z-s.z,M=Math.abs(a),b=Math.abs(l),T=Math.abs(c),S,_,v,w,I,P,O,Q,L,K,D,N;if(M>=b&&M>=T)if(v=a,P=f,L=m,N=d,a>=0)S=l,_=c,w=u,I=h,O=g,Q=x,K=p,D=y;else S=c,_=l,w=h,I=u,O=x,Q=g,K=y,D=p;else if(b>=T)if(v=l,P=u,L=g,N=p,l>=0)S=c,_=a,w=h,I=f,O=x,Q=m,K=y,D=d;else S=a,_=c,w=f,I=h,O=m,Q=x,K=d,D=y;else if(v=c,P=h,L=x,N=y,c>=0)S=a,_=l,w=f,I=u,O=m,Q=g,K=d,D=p;else S=l,_=a,w=u,I=f,O=g,Q=m,K=p,D=d;if(v===0)return null;let se=S/v,Y=_/v,W=1/v,ee=w-se*P,de=I-Y*P,X=O-se*L,oe=Q-Y*L,ye=K-se*N,ve=D-Y*N,ke=ye*oe-ve*X,Ne=ee*ve-de*ye,xt=X*de-oe*ee;if(n){if(ke<0||Ne<0||xt<0)return null}else if((ke<0||Ne<0||xt<0)&&(ke>0||Ne>0||xt>0))return null;let Xe=ke+Ne+xt;if(Xe===0)return null;let Ye=W*(ke*P+Ne*L+xt*N);if(Xe>0?Ye<0:Ye>0)return null;return this.at(Ye/Xe,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class _t extends hi{constructor(e){super();this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Se(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xn,this.combine=yo,this.reflectivity=1,this.refractionRatio=0.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}var f0=new $e,Do=new Er,Kf=new Hi,h0=new R,Zf=new R,Jf=new R,jf=new R,Bu=new R,$f=new R,u0=new R,Qf=new R;class ae extends vt{constructor(e=new et,t=new _t){super();this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){if(super.copy(e,t),e.morphTargetInfluences!==void 0)this.morphTargetInfluences=e.morphTargetInfluences.slice();else this.morphTargetInfluences=void 0;if(e.morphTargetDictionary!==void 0)this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary);else this.morphTargetDictionary=void 0;return this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=n.length;r<s;r++){let o=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let i=this.geometry,n=i.attributes.position,r=i.morphAttributes.position,s=i.morphTargetsRelative;t.fromBufferAttribute(n,e);let o=this.morphTargetInfluences;if(r&&o){$f.set(0,0,0);for(let a=0,l=r.length;a<l;a++){let c=o[a],f=r[a];if(c===0)continue;if(Bu.fromBufferAttribute(f,e),s)$f.addScaledVector(Bu,c);else $f.addScaledVector(Bu.sub(t),c)}t.add($f)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,n=this.material,r=this.matrixWorld;if(n===void 0)return;if(i.boundingSphere===null)i.computeBoundingSphere();if(Kf.copy(i.boundingSphere),Kf.applyMatrix4(r),Do.copy(e.ray).recast(e.near),Kf.containsPoint(Do.origin)===!1){if(Do.intersectSphere(Kf,h0)===null)return;if(Do.origin.distanceToSquared(h0)>(e.far-e.near)**2)return}if(f0.copy(r).invert(),Do.copy(e.ray).applyMatrix4(f0),i.boundingBox!==null){if(Do.intersectsBox(i.boundingBox)===!1)return}this._computeIntersections(e,t,Do)}_computeIntersections(e,t,i){let n,r=this.geometry,s=this.material,o=r.index,a=r.attributes.position,l=r.attributes.uv,c=r.attributes.uv1,f=r.attributes.normal,{groups:u,drawRange:h}=r;if(o!==null)if(Array.isArray(s))for(let m=0,g=u.length;m<g;m++){let x=u[m],d=s[x.materialIndex],p=Math.max(x.start,h.start),y=Math.min(o.count,Math.min(x.start+x.count,h.start+h.count));for(let M=p,b=y;M<b;M+=3){let T=o.getX(M),S=o.getX(M+1),_=o.getX(M+2);if(n=eh(this,d,e,i,l,c,f,T,S,_),n)n.faceIndex=Math.floor(M/3),n.face.materialIndex=x.materialIndex,t.push(n)}}else{let m=Math.max(0,h.start),g=Math.min(o.count,h.start+h.count);for(let x=m,d=g;x<d;x+=3){let p=o.getX(x),y=o.getX(x+1),M=o.getX(x+2);if(n=eh(this,s,e,i,l,c,f,p,y,M),n)n.faceIndex=Math.floor(x/3),t.push(n)}}else if(a!==void 0)if(Array.isArray(s))for(let m=0,g=u.length;m<g;m++){let x=u[m],d=s[x.materialIndex],p=Math.max(x.start,h.start),y=Math.min(a.count,Math.min(x.start+x.count,h.start+h.count));for(let M=p,b=y;M<b;M+=3){let T=M,S=M+1,_=M+2;if(n=eh(this,d,e,i,l,c,f,T,S,_),n)n.faceIndex=Math.floor(M/3),n.face.materialIndex=x.materialIndex,t.push(n)}}else{let m=Math.max(0,h.start),g=Math.min(a.count,h.start+h.count);for(let x=m,d=g;x<d;x+=3){let p=x,y=x+1,M=x+2;if(n=eh(this,s,e,i,l,c,f,p,y,M),n)n.faceIndex=Math.floor(x/3),t.push(n)}}}}function Wy(e,t,i,n,r,s,o,a){let l;if(t.side===Mi)l=n.intersectTriangle(o,s,r,!0,a);else l=n.intersectTriangle(r,s,o,t.side===Zn,a);if(l===null)return null;Qf.copy(a),Qf.applyMatrix4(e.matrixWorld);let c=i.ray.origin.distanceTo(Qf);if(c<i.near||c>i.far)return null;return{distance:c,point:Qf.clone(),object:e}}function eh(e,t,i,n,r,s,o,a,l,c){e.getVertexPosition(a,Zf),e.getVertexPosition(l,Jf),e.getVertexPosition(c,jf);let f=Wy(e,t,i,n,Zf,Jf,jf,u0);if(f){let u=new R;if(wn.getBarycoord(u0,Zf,Jf,jf,u),r)f.uv=wn.getInterpolatedAttribute(r,a,l,c,u,new ne);if(s)f.uv1=wn.getInterpolatedAttribute(s,a,l,c,u,new ne);if(o){if(f.normal=wn.getInterpolatedAttribute(o,a,l,c,u,new R),f.normal.dot(n.direction)>0)f.normal.multiplyScalar(-1)}let h={a,b:l,c,normal:new R,materialIndex:0};wn.getNormal(Zf,Jf,jf,h.normal),f.face=h,f.barycoord=u}return f}var Mc=new Xt,d0=new Xt,p0=new Xt,Xy=new Xt,m0=new $e,th=new R,Ou=new Hi,g0=new $e,Hu=new Er;class vc extends ae{constructor(e,t){super(e,t);this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=uu,this.bindMatrix=new $e,this.bindMatrixInverse=new $e,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;if(this.boundingBox===null)this.boundingBox=new Li;this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,th),this.boundingBox.expandByPoint(th)}computeBoundingSphere(){let e=this.geometry;if(this.boundingSphere===null)this.boundingSphere=new Hi;this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,th),this.boundingSphere.expandByPoint(th)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}raycast(e,t){let i=this.material,n=this.matrixWorld;if(i===void 0)return;if(this.boundingSphere===null)this.computeBoundingSphere();if(Ou.copy(this.boundingSphere),Ou.applyMatrix4(n),e.ray.intersectsSphere(Ou)===!1)return;if(g0.copy(n).invert(),Hu.copy(e.ray).applyMatrix4(g0),this.boundingBox!==null){if(Hu.intersectsBox(this.boundingBox)===!1)return}this._computeIntersections(e,t,Hu)}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){if(this.skeleton=e,t===void 0)this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld;this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new Xt,t=this.geometry.attributes.skinWeight;for(let i=0,n=t.count;i<n;i++){e.fromBufferAttribute(t,i);let r=1/e.manhattanLength();if(r!==1/0)e.multiplyScalar(r);else e.set(1,0,0,0);t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){if(super.updateMatrixWorld(e),this.bindMode===uu)this.bindMatrixInverse.copy(this.matrixWorld).invert();else if(this.bindMode===Lp)this.bindMatrixInverse.copy(this.bindMatrix).invert();else De("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let i=this.skeleton,n=this.geometry;if(d0.fromBufferAttribute(n.attributes.skinIndex,e),p0.fromBufferAttribute(n.attributes.skinWeight,e),t.isVector4)Mc.copy(t),t.set(0,0,0,0);else Mc.set(t.x,t.y,t.z,1),t.set(0,0,0);Mc.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){let s=p0.getComponent(r);if(s!==0){let o=d0.getComponent(r);m0.multiplyMatrices(i.bones[o].matrixWorld,i.boneInverses[o]),t.addScaledVector(Xy.copy(Mc).applyMatrix4(m0),s)}}if(t.isVector4)t.w=Mc.w;return t.applyMatrix4(this.bindMatrixInverse)}}class No extends vt{constructor(){super();this.isBone=!0,this.type="Bone"}}class zr extends Jt{constructor(e=null,t=1,i=1,n,r,s,o,a,l=di,c=di,f,u){super(null,s,o,a,l,c,n,r,f,u);this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}var x0=new $e,Yy=new $e;class ka{constructor(e=[],t=[]){this.uuid=ji(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.previousBoneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){De("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,n=this.bones.length;i<n;i++)this.boneInverses.push(new $e)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let i=new $e;if(this.bones[e])i.copy(this.bones[e].matrixWorld).invert();this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let i=this.bones[e];if(i)i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let i=this.bones[e];if(i){if(i.parent&&i.parent.isBone)i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld);else i.matrix.copy(i.matrixWorld);i.matrix.decompose(i.position,i.quaternion,i.scale)}}}update(){let e=this.bones,t=this.boneInverses,i=this.boneMatrices,n=this.boneTexture;for(let r=0,s=e.length;r<s;r++){let o=e[r]?e[r].matrixWorld:Yy;x0.multiplyMatrices(o,t[r]),x0.toArray(i,r*16)}if(n!==null)n.needsUpdate=!0}clone(){return new ka(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let i=new zr(t,e,e,ln,Wi);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){let n=this.bones[t];if(n.name===e)return n}return}dispose(){if(this.boneTexture!==null)this.boneTexture.dispose(),this.boneTexture=null;if(this.previousBoneTexture!==null)this.previousBoneTexture.dispose(),this.previousBoneTexture=null}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,n=e.bones.length;i<n;i++){let r=e.bones[i],s=t[r];if(s===void 0)De("Skeleton: No bone found with UUID:",r),s=new No;this.bones.push(s),this.boneInverses.push(new $e().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,i=this.boneInverses;for(let n=0,r=t.length;n<r;n++){let s=t[n];e.bones.push(s.uuid);let o=i[n];e.boneInverses.push(o.toArray())}return e}}class Gr extends pi{constructor(e,t,i,n=1){super(e,t,i);this.isInstancedBufferAttribute=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}var Va=new $e,_0=new $e,ih=[],y0=new Li,qy=new $e,bc=new ae,Sc=new Hi;class lr extends ae{constructor(e,t,i){super(e,t);this.isInstancedMesh=!0,this.instanceMatrix=new Gr(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let n=0;n<i;n++)this.setMatrixAt(n,qy)}computeBoundingBox(){let e=this.geometry,t=this.count;if(this.boundingBox===null)this.boundingBox=new Li;if(e.boundingBox===null)e.computeBoundingBox();this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Va),y0.copy(e.boundingBox).applyMatrix4(Va),this.boundingBox.union(y0)}computeBoundingSphere(){let e=this.geometry,t=this.count;if(this.boundingSphere===null)this.boundingSphere=new Hi;if(e.boundingSphere===null)e.computeBoundingSphere();this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Va),Sc.copy(e.boundingSphere).applyMatrix4(Va),this.boundingSphere.union(Sc)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){if(this.instanceColor===null)return t.setRGB(1,1,1);else return t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,n=this.morphTexture.source.data.data,r=i.length+1,s=e*r+1;for(let o=0;o<i.length;o++)i[o]=n[s+o]}raycast(e,t){let i=this.matrixWorld,n=this.count;if(bc.geometry=this.geometry,bc.material=this.material,bc.material===void 0)return;if(this.boundingSphere===null)this.computeBoundingSphere();if(Sc.copy(this.boundingSphere),Sc.applyMatrix4(i),e.ray.intersectsSphere(Sc)===!1)return;for(let r=0;r<n;r++){this.getMatrixAt(r,Va),_0.multiplyMatrices(i,Va),bc.matrixWorld=_0,bc.raycast(e,ih);for(let s=0,o=ih.length;s<o;s++){let a=ih[s];a.instanceId=r,a.object=this,t.push(a)}ih.length=0}}setColorAt(e,t){if(this.instanceColor===null)this.instanceColor=new Gr(new Float32Array(this.instanceMatrix.count*3).fill(1),3);return t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let i=t.morphTargetInfluences,n=i.length+1;if(this.morphTexture===null)this.morphTexture=new zr(new Float32Array(n*this.count),n,this.count,ma,Wi);let r=this.morphTexture.source.data.data,s=0;for(let l=0;l<i.length;l++)s+=i[l];let o=this.geometry.morphTargetsRelative?1:1-s,a=n*e;return r[a]=o,r.set(i,a+1),this}updateMorphTargets(){}dispose(){if(super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null)this.instanceColor.dispose();if(this.morphTexture!==null)this.morphTexture.dispose(),this.morphTexture=null}}var Fo=new Hi,Ky=new ne(0.5,0.5),nh=new R;class Tr{constructor(e=new Xn,t=new Xn,i=new Xn,n=new Xn,r=new Xn,s=new Xn){this.planes=[e,t,i,n,r,s]}set(e,t,i,n,r,s){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(n),o[4].copy(r),o[5].copy(s),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=gn,i=!1){let n=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],f=r[5],u=r[6],h=r[7],m=r[8],g=r[9],x=r[10],d=r[11],p=r[12],y=r[13],M=r[14],b=r[15];if(n[0].setComponents(l-s,h-c,d-m,b-p).normalize(),n[1].setComponents(l+s,h+c,d+m,b+p).normalize(),n[2].setComponents(l+o,h+f,d+g,b+y).normalize(),n[3].setComponents(l-o,h-f,d-g,b-y).normalize(),i)n[4].setComponents(a,u,x,M).normalize(),n[5].setComponents(l-a,h-u,d-x,b-M).normalize();else if(n[4].setComponents(l-a,h-u,d-x,b-M).normalize(),t===gn)n[5].setComponents(l+a,h+u,d+x,b+M).normalize();else if(t===Zr)n[5].setComponents(a,u,x,M).normalize();else throw Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0){if(e.boundingSphere===null)e.computeBoundingSphere();Fo.copy(e.boundingSphere).applyMatrix4(e.matrixWorld)}else{let t=e.geometry;if(t.boundingSphere===null)t.computeBoundingSphere();Fo.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Fo)}intersectsSprite(e){Fo.center.set(0,0,0);let t=Ky.distanceTo(e.center);return Fo.radius=0.7071067811865476+t,Fo.applyMatrix4(e.matrixWorld),this.intersectsSphere(Fo)}intersectsSphere(e){let t=this.planes,i=e.center,n=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<n)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let n=t[i];if(nh.x=n.normal.x>0?e.max.x:e.min.x,nh.y=n.normal.y>0?e.max.y:e.min.y,nh.z=n.normal.z>0?e.max.z:e.min.z,n.distanceToPoint(nh)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}var M0=new $e;class Wa{constructor(){this.coordinateSystem=gn,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,i=this._frustums;for(let n=0;n<t.length;n++){let r=t[n];if(M0.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),i[n]===void 0)i[n]=new Tr;i[n].setFromProjectionMatrix(M0,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,i=e._frustums;for(let n=0;n<e._count;n++){if(t[n]===void 0)t[n]=new Tr;t[n].copy(i[n])}return this._count=e._count,this}clone(){return new Wa().copy(this)}}class Xi extends hi{constructor(e){super();this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Se(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}var oh=new R,ah=new R,v0=new $e,Ec=new Er,rh=new Hi,zu=new R,b0=new R;class jn extends vt{constructor(e=new et,t=new Xi){super();this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){if(super.copy(e,t),e.morphTargetInfluences!==void 0)this.morphTargetInfluences=e.morphTargetInfluences.slice();else this.morphTargetInfluences=void 0;if(e.morphTargetDictionary!==void 0)this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary);else this.morphTargetDictionary=void 0;return this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let n=1,r=t.count;n<r;n++)oh.fromBufferAttribute(t,n-1),ah.fromBufferAttribute(t,n),i[n]=i[n-1],i[n]+=oh.distanceTo(ah);e.setAttribute("lineDistance",new Be(i,1))}else De("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,n=this.matrixWorld,r=e.params.Line.threshold,s=i.drawRange;if(i.boundingSphere===null)i.computeBoundingSphere();if(rh.copy(i.boundingSphere),rh.applyMatrix4(n),rh.radius+=r,e.ray.intersectsSphere(rh)===!1)return;v0.copy(n).invert(),Ec.copy(e.ray).applyMatrix4(v0);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),a=o*o,l=this.isLineSegments?2:1,c=i.index,u=i.attributes.position;if(c!==null){let h=Math.max(0,s.start),m=Math.min(c.count,s.start+s.count);for(let g=h,x=m-1;g<x;g+=l){let d=c.getX(g),p=c.getX(g+1),y=sh(this,e,Ec,a,d,p,g);if(y)t.push(y)}if(this.isLineLoop){let g=c.getX(m-1),x=c.getX(h),d=sh(this,e,Ec,a,g,x,m-1);if(d)t.push(d)}}else{let h=Math.max(0,s.start),m=Math.min(u.count,s.start+s.count);for(let g=h,x=m-1;g<x;g+=l){let d=sh(this,e,Ec,a,g,g+1,g);if(d)t.push(d)}if(this.isLineLoop){let g=sh(this,e,Ec,a,m-1,h,m-1);if(g)t.push(g)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=n.length;r<s;r++){let o=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function sh(e,t,i,n,r,s,o){let a=e.geometry.attributes.position;if(oh.fromBufferAttribute(a,r),ah.fromBufferAttribute(a,s),i.distanceSqToSegment(oh,ah,zu,b0)>n)return;zu.applyMatrix4(e.matrixWorld);let c=t.ray.origin.distanceTo(zu);if(c<t.near||c>t.far)return;return{distance:c,point:b0.clone().applyMatrix4(e.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:e}}var S0=new R,E0=new R;class Bn extends jn{constructor(e,t){super(e,t);this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let n=0,r=t.count;n<r;n+=2)S0.fromBufferAttribute(t,n),E0.fromBufferAttribute(t,n+1),i[n]=n===0?0:i[n-1],i[n+1]=i[n]+S0.distanceTo(E0);e.setAttribute("lineDistance",new Be(i,1))}else De("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Tc extends jn{constructor(e,t){super(e,t);this.isLineLoop=!0,this.type="LineLoop"}}class bs extends hi{constructor(e){super();this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Se(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}var T0=new $e,Gu=new Er,lh=new Hi,ch=new R;class Uo extends vt{constructor(e=new et,t=new bs){super();this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){if(super.copy(e,t),e.morphTargetInfluences!==void 0)this.morphTargetInfluences=e.morphTargetInfluences.slice();else this.morphTargetInfluences=void 0;if(e.morphTargetDictionary!==void 0)this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary);else this.morphTargetDictionary=void 0;return this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,n=this.matrixWorld,r=e.params.Points.threshold,s=i.drawRange;if(i.boundingSphere===null)i.computeBoundingSphere();if(lh.copy(i.boundingSphere),lh.applyMatrix4(n),lh.radius+=r,e.ray.intersectsSphere(lh)===!1)return;T0.copy(n).invert(),Gu.copy(e.ray).applyMatrix4(T0);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),a=o*o,l=i.index,f=i.attributes.position;if(l!==null){let u=Math.max(0,s.start),h=Math.min(l.count,s.start+s.count);for(let m=u,g=h;m<g;m++){let x=l.getX(m);ch.fromBufferAttribute(f,x),w0(ch,x,a,n,e,t,this)}}else{let u=Math.max(0,s.start),h=Math.min(f.count,s.start+s.count);for(let m=u,g=h;m<g;m++)ch.fromBufferAttribute(f,m),w0(ch,m,a,n,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=n.length;r<s;r++){let o=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function w0(e,t,i,n,r,s,o){let a=Gu.distanceSqToPoint(e);if(a<i){let l=new R;Gu.closestPointToPoint(e,l),l.applyMatrix4(n);let c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class Ks extends Jt{constructor(e=[],t=Mr,i,n,r,s,o,a,l,c){super(e,t,i,n,r,s,o,a,l,c);this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class zi extends Jt{constructor(e,t,i,n,r,s,o,a,l){super(e,t,i,n,r,s,o,a,l);this.isCanvasTexture=!0,this.needsUpdate=!0}}class cr extends Jt{constructor(e,t,i=an,n,r,s,o=di,a=di,l,c=Jn,f=1){if(c!==Jn&&c!==rr)throw Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:e,height:t,depth:f};super(u,n,r,s,o,a,c,i,l);this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Jr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class Xa extends cr{constructor(e,t=an,i=Mr,n,r,s=di,o=di,a,l=Jn){let c={width:e,height:e,depth:1},f=[c,c,c,c,c,c];super(e,e,t,i,n,r,s,o,a,l);this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Ya extends Jt{constructor(e=null){super();this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class bt extends et{constructor(e=1,t=1,i=1,n=1,r=1,s=1){super();this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:n,heightSegments:r,depthSegments:s};let o=this;n=Math.floor(n),r=Math.floor(r),s=Math.floor(s);let a=[],l=[],c=[],f=[],u=0,h=0;m("z","y","x",-1,-1,i,t,e,s,r,0),m("z","y","x",1,-1,i,t,-e,s,r,1),m("x","z","y",1,1,e,i,t,n,s,2),m("x","z","y",1,-1,e,i,-t,n,s,3),m("x","y","z",1,-1,e,t,i,n,r,4),m("x","y","z",-1,-1,e,t,-i,n,r,5),this.setIndex(a),this.setAttribute("position",new Be(l,3)),this.setAttribute("normal",new Be(c,3)),this.setAttribute("uv",new Be(f,2));function m(g,x,d,p,y,M,b,T,S,_,v){let w=M/S,I=b/_,P=M/2,O=b/2,Q=T/2,L=S+1,K=_+1,D=0,N=0,se=new R;for(let Y=0;Y<K;Y++){let W=Y*I-O;for(let ee=0;ee<L;ee++){let de=ee*w-P;se[g]=de*p,se[x]=W*y,se[d]=Q,l.push(se.x,se.y,se.z),se[g]=0,se[x]=0,se[d]=T>0?1:-1,c.push(se.x,se.y,se.z),f.push(ee/S),f.push(1-Y/_),D+=1}}for(let Y=0;Y<_;Y++)for(let W=0;W<S;W++){let ee=u+W+L*Y,de=u+W+L*(Y+1),X=u+(W+1)+L*(Y+1),oe=u+(W+1)+L*Y;a.push(ee,de,oe),a.push(de,X,oe),N+=6}o.addGroup(h,N,v),h+=N,u+=D}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new bt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class wc extends et{constructor(e=1,t=1,i=4,n=8,r=1){super();this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:i,radialSegments:n,heightSegments:r},t=Math.max(0,t),i=Math.max(1,Math.floor(i)),n=Math.max(3,Math.floor(n)),r=Math.max(1,Math.floor(r));let s=[],o=[],a=[],l=[],c=t/2,f=Math.PI/2*e,u=t,h=2*f+u,m=i*2+r,g=n+1,x=new R,d=new R;for(let p=0;p<=m;p++){let y=0,M=0,b=0,T=0;if(p<=i){let v=p/i,w=v*Math.PI/2;M=-c-e*Math.cos(w),b=e*Math.sin(w),T=-e*Math.cos(w),y=v*f}else if(p<=i+r){let v=(p-i)/r;M=-c+v*t,b=e,T=0,y=f+v*u}else{let v=(p-i-r)/i,w=v*Math.PI/2;M=c+e*Math.sin(w),b=e*Math.cos(w),T=e*Math.sin(w),y=f+u+v*f}let S=Math.max(0,Math.min(1,y/h)),_=0;if(p===0)_=0.5/n;else if(p===m)_=-0.5/n;for(let v=0;v<=n;v++){let w=v/n,I=w*Math.PI*2,P=Math.sin(I),O=Math.cos(I);d.x=-b*O,d.y=M,d.z=b*P,o.push(d.x,d.y,d.z),x.set(-b*O,T,b*P),x.normalize(),a.push(x.x,x.y,x.z),l.push(w+_,S)}if(p>0){let v=(p-1)*g;for(let w=0;w<n;w++){let I=v+w,P=v+w+1,O=p*g+w,Q=p*g+w+1;s.push(I,P,O),s.push(P,Q,O)}}}this.setIndex(s),this.setAttribute("position",new Be(o,3)),this.setAttribute("normal",new Be(a,3)),this.setAttribute("uv",new Be(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wc(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}}class kr extends et{constructor(e=1,t=32,i=0,n=Math.PI*2){super();this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:n},t=Math.max(3,t);let r=[],s=[],o=[],a=[],l=new R,c=new ne;s.push(0,0,0),o.push(0,0,1),a.push(0.5,0.5);for(let f=0,u=3;f<=t;f++,u+=3){let h=i+f/t*n;l.x=e*Math.cos(h),l.y=e*Math.sin(h),s.push(l.x,l.y,l.z),o.push(0,0,1),c.x=(s[u]/e+1)/2,c.y=(s[u+1]/e+1)/2,a.push(c.x,c.y)}for(let f=1;f<=t;f++)r.push(f,f+1,0);this.setIndex(r),this.setAttribute("position",new Be(s,3)),this.setAttribute("normal",new Be(o,3)),this.setAttribute("uv",new Be(a,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new kr(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Pt extends et{constructor(e=1,t=1,i=1,n=32,r=1,s=!1,o=0,a=Math.PI*2){super();this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:n,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a};let l=this;n=Math.floor(n),r=Math.floor(r);let c=[],f=[],u=[],h=[],m=0,g=[],x=i/2,d=0;if(p(),s===!1){if(e>0)y(!0);if(t>0)y(!1)}this.setIndex(c),this.setAttribute("position",new Be(f,3)),this.setAttribute("normal",new Be(u,3)),this.setAttribute("uv",new Be(h,2));function p(){let M=new R,b=new R,T=0,S=(t-e)/i;for(let _=0;_<=r;_++){let v=[],w=_/r,I=w*(t-e)+e;for(let P=0;P<=n;P++){let O=P/n,Q=O*a+o,L=Math.sin(Q),K=Math.cos(Q);b.x=I*L,b.y=-w*i+x,b.z=I*K,f.push(b.x,b.y,b.z),M.set(L,S,K).normalize(),u.push(M.x,M.y,M.z),h.push(O,1-w),v.push(m++)}g.push(v)}for(let _=0;_<n;_++)for(let v=0;v<r;v++){let w=g[v][_],I=g[v+1][_],P=g[v+1][_+1],O=g[v][_+1];if(e>0||v!==0)c.push(w,I,O),T+=3;if(t>0||v!==r-1)c.push(I,P,O),T+=3}l.addGroup(d,T,0),d+=T}function y(M){let b=m,T=new ne,S=new R,_=0,v=M===!0?e:t,w=M===!0?1:-1;for(let P=1;P<=n;P++)f.push(0,x*w,0),u.push(0,w,0),h.push(0.5,0.5),m++;let I=m;for(let P=0;P<=n;P++){let Q=P/n*a+o,L=Math.cos(Q),K=Math.sin(Q);S.x=v*K,S.y=x*w,S.z=v*L,f.push(S.x,S.y,S.z),u.push(0,w,0),T.x=L*0.5+0.5,T.y=K*0.5*w+0.5,h.push(T.x,T.y),m++}for(let P=0;P<n;P++){let O=b+P,Q=I+P;if(M===!0)c.push(Q,Q+1,O);else c.push(Q+1,Q,O);_+=3}l.addGroup(d,_,M===!0?1:2),d+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Pt(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Bo extends Pt{constructor(e=1,t=1,i=32,n=1,r=!1,s=0,o=Math.PI*2){super(0,e,t,i,n,r,s,o);this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:n,openEnded:r,thetaStart:s,thetaLength:o}}static fromJSON(e){return new Bo(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Oo extends et{constructor(e=[],t=[],i=1,n=0){super();this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:n};let r=[],s=[];if(o(n),l(i),c(),this.setAttribute("position",new Be(r,3)),this.setAttribute("normal",new Be(r.slice(),3)),this.setAttribute("uv",new Be(s,2)),n===0)this.computeVertexNormals();else this.normalizeNormals();function o(p){let y=new R,M=new R,b=new R;for(let T=0;T<t.length;T+=3)h(t[T+0],y),h(t[T+1],M),h(t[T+2],b),a(y,M,b,p)}function a(p,y,M,b){let T=b+1,S=[];for(let _=0;_<=T;_++){S[_]=[];let v=p.clone().lerp(M,_/T),w=y.clone().lerp(M,_/T),I=T-_;for(let P=0;P<=I;P++)if(P===0&&_===T)S[_][P]=v;else S[_][P]=v.clone().lerp(w,P/I)}for(let _=0;_<T;_++)for(let v=0;v<2*(T-_)-1;v++){let w=Math.floor(v/2);if(v%2===0)u(S[_][w+1]),u(S[_+1][w]),u(S[_][w]);else u(S[_][w+1]),u(S[_+1][w+1]),u(S[_+1][w])}}function l(p){let y=new R;for(let M=0;M<r.length;M+=3)y.x=r[M+0],y.y=r[M+1],y.z=r[M+2],y.normalize().multiplyScalar(p),r[M+0]=y.x,r[M+1]=y.y,r[M+2]=y.z}function c(){let p=new R;for(let y=0;y<r.length;y+=3){p.x=r[y+0],p.y=r[y+1],p.z=r[y+2];let M=x(p)/2/Math.PI+0.5,b=d(p)/Math.PI+0.5;s.push(M,1-b)}m(),f()}function f(){for(let p=0;p<s.length;p+=6){let y=s[p+0],M=s[p+2],b=s[p+4],T=Math.max(y,M,b),S=Math.min(y,M,b);if(T>0.9&&S<0.1){if(y<0.2)s[p+0]+=1;if(M<0.2)s[p+2]+=1;if(b<0.2)s[p+4]+=1}}}function u(p){r.push(p.x,p.y,p.z)}function h(p,y){let M=p*3;y.x=e[M+0],y.y=e[M+1],y.z=e[M+2]}function m(){let p=new R,y=new R,M=new R,b=new R,T=new ne,S=new ne,_=new ne;for(let v=0,w=0;v<r.length;v+=9,w+=6){p.set(r[v+0],r[v+1],r[v+2]),y.set(r[v+3],r[v+4],r[v+5]),M.set(r[v+6],r[v+7],r[v+8]),T.set(s[w+0],s[w+1]),S.set(s[w+2],s[w+3]),_.set(s[w+4],s[w+5]),b.copy(p).add(y).add(M).divideScalar(3);let I=x(b);g(T,w+0,p,I),g(S,w+2,y,I),g(_,w+4,M,I)}}function g(p,y,M,b){if(b<0&&p.x===1)s[y]=p.x-1;if(M.x===0&&M.z===0)s[y]=b/2/Math.PI+0.5}function x(p){return Math.atan2(p.z,-p.x)}function d(p){return Math.atan2(-p.y,Math.sqrt(p.x*p.x+p.z*p.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Oo(e.vertices,e.indices,e.radius,e.detail)}}class fh extends Oo{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,n=1/i,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-n,-i,0,-n,i,0,n,-i,0,n,i,-n,-i,0,-n,i,0,n,-i,0,n,i,0,-i,0,-n,i,0,-n,-i,0,n,i,0,n],s=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,s,e,t);this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new fh(e.radius,e.detail)}}var hh=new R,uh=new R,Vu=new R,dh=new wn;class ph extends et{constructor(e=null,t=1){super();if(this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let n=Math.pow(10,4),r=Math.cos(ps*t),s=e.getIndex(),o=e.getAttribute("position"),a=s?s.count:o.count,l=[0,0,0],c=["a","b","c"],f=[,,,],u=new Map,h=[];for(let m=0;m<a;m+=3){if(s)l[0]=s.getX(m),l[1]=s.getX(m+1),l[2]=s.getX(m+2);else l[0]=m,l[1]=m+1,l[2]=m+2;let{a:g,b:x,c:d}=dh;if(g.fromBufferAttribute(o,l[0]),x.fromBufferAttribute(o,l[1]),d.fromBufferAttribute(o,l[2]),dh.getNormal(Vu),f[0]=`${Math.round(g.x*n)},${Math.round(g.y*n)},${Math.round(g.z*n)}`,f[1]=`${Math.round(x.x*n)},${Math.round(x.y*n)},${Math.round(x.z*n)}`,f[2]=`${Math.round(d.x*n)},${Math.round(d.y*n)},${Math.round(d.z*n)}`,f[0]===f[1]||f[1]===f[2]||f[2]===f[0])continue;for(let p=0;p<3;p++){let y=(p+1)%3,M=f[p],b=f[y],T=dh[c[p]],S=dh[c[y]],_=`${M}_${b}`,v=`${b}_${M}`,w=u.get(v);if(w){if(Vu.dot(w.normal)<=r)h.push(T.x,T.y,T.z),h.push(S.x,S.y,S.z);u.set(v,null)}else if(!u.has(_))u.set(_,{index0:l[p],index1:l[y],normal:Vu.clone()})}}for(let m of u.values())if(m){let{index0:g,index1:x}=m;hh.fromBufferAttribute(o,g),uh.fromBufferAttribute(o,x),h.push(hh.x,hh.y,hh.z),h.push(uh.x,uh.y,uh.z)}this.setAttribute("position",new Be(h,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class Yi{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){De("Curve: .getPoint() not implemented.")}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,n=this.getPoint(0),r=0;t.push(0);for(let s=1;s<=e;s++)i=this.getPoint(s/e),r+=i.distanceTo(n),t.push(r),n=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let i=this.getLengths(),n=0,r=i.length,s;if(t)s=t;else s=e*i[r-1];let o=0,a=r-1,l;while(o<=a)if(n=Math.floor(o+(a-o)/2),l=i[n]-s,l<0)o=n+1;else if(l>0)a=n-1;else{a=n;break}if(n=a,i[n]===s)return n/(r-1);let c=i[n],u=i[n+1]-c,h=(s-c)/u;return(n+h)/(r-1)}getTangent(e,t){let n=e-0.0001,r=e+0.0001;if(n<0)n=0;if(r>1)r=1;let s=this.getPoint(n),o=this.getPoint(r),a=t||(s.isVector2?new ne:new R);return a.copy(o).sub(s).normalize(),a}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){let i=new R,n=[],r=[],s=[],o=new R,a=new $e;for(let h=0;h<=e;h++){let m=h/e;n[h]=this.getTangentAt(m,new R)}r[0]=new R,s[0]=new R;let l=Number.MAX_VALUE,c=Math.abs(n[0].x),f=Math.abs(n[0].y),u=Math.abs(n[0].z);if(c<=l)l=c,i.set(1,0,0);if(f<=l)l=f,i.set(0,1,0);if(u<=l)i.set(0,0,1);o.crossVectors(n[0],i).normalize(),r[0].crossVectors(n[0],o),s[0].crossVectors(n[0],r[0]);for(let h=1;h<=e;h++){if(r[h]=r[h-1].clone(),s[h]=s[h-1].clone(),o.crossVectors(n[h-1],n[h]),o.length()>Number.EPSILON){o.normalize();let m=Math.acos(Mt(n[h-1].dot(n[h]),-1,1));r[h].applyMatrix4(a.makeRotationAxis(o,m))}s[h].crossVectors(n[h],r[h])}if(t===!0){let h=Math.acos(Mt(r[0].dot(r[e]),-1,1));if(h/=e,n[0].dot(o.crossVectors(r[0],r[e]))>0)h=-h;for(let m=1;m<=e;m++)r[m].applyMatrix4(a.makeRotationAxis(n[m],h*m)),s[m].crossVectors(n[m],r[m])}return{tangents:n,normals:r,binormals:s}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}}class Ho extends Yi{constructor(e=0,t=0,i=1,n=1,r=0,s=Math.PI*2,o=!1,a=0){super();this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=n,this.aStartAngle=r,this.aEndAngle=s,this.aClockwise=o,this.aRotation=a}getPoint(e,t=new ne){let i=t,n=Math.PI*2,r=this.aEndAngle-this.aStartAngle,s=Math.abs(r)<Number.EPSILON;while(r<0)r+=n;while(r>n)r-=n;if(r<Number.EPSILON)if(s)r=0;else r=n;if(this.aClockwise===!0&&!s)if(r===n)r=-n;else r=r-n;let o=this.aStartAngle+e*r,a=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let c=Math.cos(this.aRotation),f=Math.sin(this.aRotation),u=a-this.aX,h=l-this.aY;a=u*c-h*f+this.aX,l=u*f+h*c+this.aY}return i.set(a,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Wu extends Ho{constructor(e,t,i,n,r,s){super(e,t,i,i,n,r,s);this.isArcCurve=!0,this.type="ArcCurve"}}function Ku(){let e=0,t=0,i=0,n=0;function r(s,o,a,l){e=s,t=a,i=-3*s+3*o-2*a-l,n=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){r(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,f,u){let h=(o-s)/c-(a-s)/(c+f)+(a-o)/f,m=(a-o)/f-(l-o)/(f+u)+(l-a)/u;h*=f,m*=f,r(o,a,h,m)},calc:function(s){let o=s*s,a=o*s;return e+t*s+i*o+n*a}}}var A0=new R,R0=new R,Xu=new Ku,Yu=new Ku,qu=new Ku;class wr extends Yi{constructor(e=[],t=!1,i="centripetal",n=0.5){super();this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=n}getPoint(e,t=new R){let i=t,n=this.points,r=n.length,s=(r-(this.closed?0:1))*e,o=Math.floor(s),a=s-o;if(this.closed)o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r;else if(a===0&&o===r-1)o=r-2,a=1;let l,c;if(this.closed||o>0)l=n[(o-1)%r];else R0.subVectors(n[0],n[1]).add(n[0]),l=R0;let f=n[o%r],u=n[(o+1)%r];if(this.closed||o+2<r)c=n[(o+2)%r];else A0.subVectors(n[r-1],n[r-2]).add(n[r-1]),c=A0;if(this.curveType==="centripetal"||this.curveType==="chordal"){let h=this.curveType==="chordal"?0.5:0.25,m=Math.pow(l.distanceToSquared(f),h),g=Math.pow(f.distanceToSquared(u),h),x=Math.pow(u.distanceToSquared(c),h);if(g<0.0001)g=1;if(m<0.0001)m=g;if(x<0.0001)x=g;Xu.initNonuniformCatmullRom(l.x,f.x,u.x,c.x,m,g,x),Yu.initNonuniformCatmullRom(l.y,f.y,u.y,c.y,m,g,x),qu.initNonuniformCatmullRom(l.z,f.z,u.z,c.z,m,g,x)}else if(this.curveType==="catmullrom")Xu.initCatmullRom(l.x,f.x,u.x,c.x,this.tension),Yu.initCatmullRom(l.y,f.y,u.y,c.y,this.tension),qu.initCatmullRom(l.z,f.z,u.z,c.z,this.tension);return i.set(Xu.calc(a),Yu.calc(a),qu.calc(a)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let n=e.points[t];this.points.push(n.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let n=this.points[t];e.points.push(n.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let n=e.points[t];this.points.push(new R().fromArray(n))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Zu(e,t,i,n,r){let s=(n-t)*0.5,o=(r-i)*0.5,a=e*e,l=e*a;return(2*i-2*n+s+o)*l+(-3*i+3*n-2*s-o)*a+s*e+i}function Jy(e,t){let i=1-e;return i*i*t}function jy(e,t){return 2*(1-e)*e*t}function $y(e,t){return e*e*t}function zo(e,t,i,n){return Jy(e,t)+jy(e,i)+$y(e,n)}function Qy(e,t){let i=1-e;return i*i*i*t}function eM(e,t){let i=1-e;return 3*i*i*e*t}function tM(e,t){return 3*(1-e)*e*e*t}function iM(e,t){return e*e*e*t}function Go(e,t,i,n,r){return Qy(e,t)+eM(e,i)+tM(e,n)+iM(e,r)}class Ac extends Yi{constructor(e=new ne,t=new ne,i=new ne,n=new ne){super();this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=n}getPoint(e,t=new ne){let i=t,n=this.v0,r=this.v1,s=this.v2,o=this.v3;return i.set(Go(e,n.x,r.x,s.x,o.x),Go(e,n.y,r.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Ju extends Yi{constructor(e=new R,t=new R,i=new R,n=new R){super();this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=n}getPoint(e,t=new R){let i=t,n=this.v0,r=this.v1,s=this.v2,o=this.v3;return i.set(Go(e,n.x,r.x,s.x,o.x),Go(e,n.y,r.y,s.y,o.y),Go(e,n.z,r.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Rc extends Yi{constructor(e=new ne,t=new ne){super();this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ne){let i=t;if(e===1)i.copy(this.v2);else i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1);return i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ne){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class ju extends Yi{constructor(e=new R,t=new R){super();this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new R){let i=t;if(e===1)i.copy(this.v2);else i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1);return i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new R){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Cc extends Yi{constructor(e=new ne,t=new ne,i=new ne){super();this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new ne){let i=t,n=this.v0,r=this.v1,s=this.v2;return i.set(zo(e,n.x,r.x,s.x),zo(e,n.y,r.y,s.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Pc extends Yi{constructor(e=new R,t=new R,i=new R){super();this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new R){let i=t,n=this.v0,r=this.v1,s=this.v2;return i.set(zo(e,n.x,r.x,s.x),zo(e,n.y,r.y,s.y),zo(e,n.z,r.z,s.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Ic extends Yi{constructor(e=[]){super();this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ne){let i=t,n=this.points,r=(n.length-1)*e,s=Math.floor(r),o=r-s,a=n[s===0?s:s-1],l=n[s],c=n[s>n.length-2?n.length-1:s+1],f=n[s>n.length-3?n.length-1:s+2];return i.set(Zu(o,a.x,l.x,c.x,f.x),Zu(o,a.y,l.y,c.y,f.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let n=e.points[t];this.points.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let n=this.points[t];e.points.push(n.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let n=e.points[t];this.points.push(new ne().fromArray(n))}return this}}class mh extends Yi{constructor(){super();this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Zs[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),n=this.getCurveLengths(),r=0;while(r<n.length){if(n[r]>=i){let s=n[r]-i,o=this.curves[r],a=o.getLength(),l=a===0?0:1-s/a;return o.getPointAt(l,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,n=this.curves.length;i<n;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));if(this.autoClose)t.push(t[0]);return t}getPoints(e=12){let t=[],i;for(let n=0,r=this.curves;n<r.length;n++){let s=r[n],o=s.isEllipseCurve?e*2:s.isLineCurve||s.isLineCurve3?1:s.isSplineCurve?e*s.points.length:e,a=s.getPoints(o);for(let l=0;l<a.length;l++){let c=a[l];if(i&&i.equals(c))continue;t.push(c),i=c}}if(this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0]))t.push(t[0]);return t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let n=e.curves[t];this.curves.push(n.clone())}return this.autoClose=e.autoClose,this.cacheLengths=null,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let n=this.curves[t];e.curves.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let n=e.curves[t];this.curves.push(new Zs[n.type]().fromJSON(n))}return this.cacheLengths=null,this}}class qa extends mh{constructor(e){super();if(this.type="Path",this.currentPoint=new ne,e)this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new Rc(this.currentPoint.clone(),new ne(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,n){let r=new Cc(this.currentPoint.clone(),new ne(e,t),new ne(i,n));return this.curves.push(r),this.currentPoint.set(i,n),this}bezierCurveTo(e,t,i,n,r,s){let o=new Ac(this.currentPoint.clone(),new ne(e,t),new ne(i,n),new ne(r,s));return this.curves.push(o),this.currentPoint.set(r,s),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new Ic(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,n,r,s){let o=this.currentPoint.x,a=this.currentPoint.y;return this.absarc(e+o,t+a,i,n,r,s),this}absarc(e,t,i,n,r,s){return this.absellipse(e,t,i,i,n,r,s),this}ellipse(e,t,i,n,r,s,o,a){let l=this.currentPoint.x,c=this.currentPoint.y;return this.absellipse(e+l,t+c,i,n,r,s,o,a),this}absellipse(e,t,i,n,r,s,o,a){let l=new Ho(e,t,i,n,r,s,o,a);if(this.curves.length>0){let f=l.getPoint(0);if(!f.equals(this.currentPoint))this.lineTo(f.x,f.y)}this.curves.push(l);let c=l.getPoint(1);return this.currentPoint.copy(c),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class fn extends qa{constructor(e){super(e);this.uuid=ji(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,n=this.holes.length;i<n;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let n=e.holes[t];this.holes.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let n=this.holes[t];e.holes.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let n=e.holes[t];this.holes.push(new qa().fromJSON(n))}return this}}function ed(e,t,i=2){let n=t&&t.length,r=n?t[0]*i:e.length,s=P0(e,0,r,i,!0),o=[];if(!s||s.next===s.prev)return o;let a,l,c;if(n)s=aM(e,t,s,i);if(e.length>80*i){a=e[0],l=e[1];let f=a,u=l;for(let h=i;h<r;h+=i){let m=e[h],g=e[h+1];if(m<a)a=m;if(g<l)l=g;if(m>f)f=m;if(g>u)u=g}c=Math.max(f-a,u-l),c=c!==0?32767/c:0}return Dc(s,o,i,a,l,c,0),o}function P0(e,t,i,n,r){let s;if(r===_M(e,t,i,n)>0)for(let o=t;o<i;o+=n)s=C0(o/n|0,e[o],e[o+1],s);else for(let o=i-n;o>=t;o-=n)s=C0(o/n|0,e[o],e[o+1],s);if(s&&Ka(s,s.next))Fc(s),s=s.next;return s}function ko(e,t){if(!e)return e;if(!t)t=e;let i=e,n;do if(n=!1,!i.steiner&&(Ka(i,i.next)||Gi(i.prev,i,i.next)===0)){if(Fc(i),i=t=i.prev,i===i.next)break;n=!0}else i=i.next;while(n||i!==t);return t}function Dc(e,t,i,n,r,s,o){if(!e)return;if(!o&&s)uM(e,n,r,s);let a=e;while(e.prev!==e.next){let l=e.prev,c=e.next;if(s?rM(e,n,r,s):nM(e)){t.push(l.i,e.i,c.i),Fc(e),e=c.next,a=c.next;continue}if(e=c,e===a){if(!o)Dc(ko(e),t,i,n,r,s,1);else if(o===1)e=sM(ko(e),t),Dc(e,t,i,n,r,s,2);else if(o===2)oM(e,t,i,n,r,s);break}}}function nM(e){let t=e.prev,i=e,n=e.next;if(Gi(t,i,n)>=0)return!1;let r=t.x,s=i.x,o=n.x,a=t.y,l=i.y,c=n.y,f=Math.min(r,s,o),u=Math.min(a,l,c),h=Math.max(r,s,o),m=Math.max(a,l,c),g=n.next;while(g!==t){if(g.x>=f&&g.x<=h&&g.y>=u&&g.y<=m&&Lc(r,a,s,l,o,c,g.x,g.y)&&Gi(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function rM(e,t,i,n){let r=e.prev,s=e,o=e.next;if(Gi(r,s,o)>=0)return!1;let a=r.x,l=s.x,c=o.x,f=r.y,u=s.y,h=o.y,m=Math.min(a,l,c),g=Math.min(f,u,h),x=Math.max(a,l,c),d=Math.max(f,u,h),p=$u(m,g,t,i,n),y=$u(x,d,t,i,n),{prevZ:M,nextZ:b}=e;while(M&&M.z>=p&&b&&b.z<=y){if(M.x>=m&&M.x<=x&&M.y>=g&&M.y<=d&&M!==r&&M!==o&&Lc(a,f,l,u,c,h,M.x,M.y)&&Gi(M.prev,M,M.next)>=0)return!1;if(M=M.prevZ,b.x>=m&&b.x<=x&&b.y>=g&&b.y<=d&&b!==r&&b!==o&&Lc(a,f,l,u,c,h,b.x,b.y)&&Gi(b.prev,b,b.next)>=0)return!1;b=b.nextZ}while(M&&M.z>=p){if(M.x>=m&&M.x<=x&&M.y>=g&&M.y<=d&&M!==r&&M!==o&&Lc(a,f,l,u,c,h,M.x,M.y)&&Gi(M.prev,M,M.next)>=0)return!1;M=M.prevZ}while(b&&b.z<=y){if(b.x>=m&&b.x<=x&&b.y>=g&&b.y<=d&&b!==r&&b!==o&&Lc(a,f,l,u,c,h,b.x,b.y)&&Gi(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function sM(e,t){let i=e;do{let n=i.prev,r=i.next.next;if(!Ka(n,r)&&L0(n,i,i.next,r)&&Nc(n,r)&&Nc(r,n))t.push(n.i,i.i,r.i),Fc(i),Fc(i.next),i=e=r;i=i.next}while(i!==e);return ko(i)}function oM(e,t,i,n,r,s){let o=e;do{let a=o.next.next;while(a!==o.prev){if(o.i!==a.i&&mM(o,a)){let l=D0(o,a);o=ko(o,o.next),l=ko(l,l.next),Dc(o,t,i,n,r,s,0),Dc(l,t,i,n,r,s,0);return}a=a.next}o=o.next}while(o!==e)}function aM(e,t,i,n){let r=[];for(let s=0,o=t.length;s<o;s++){let a=t[s]*n,l=s<o-1?t[s+1]*n:e.length,c=P0(e,a,l,n,!1);if(c===c.next)c.steiner=!0;r.push(pM(c))}r.sort(lM);for(let s=0;s<r.length;s++)i=cM(r[s],i);return i}function lM(e,t){let i=e.x-t.x;if(i===0){if(i=e.y-t.y,i===0){let n=(e.next.y-e.y)/(e.next.x-e.x),r=(t.next.y-t.y)/(t.next.x-t.x);i=n-r}}return i}function cM(e,t){let i=fM(e,t);if(!i)return t;let n=D0(i,e);return ko(n,n.next),ko(i,i.next)}function fM(e,t){let i=t,{x:n,y:r}=e,s=-1/0,o;if(Ka(e,i))return i;do{if(Ka(e,i.next))return i.next;else if(r<=i.y&&r>=i.next.y&&i.next.y!==i.y){let u=i.x+(r-i.y)*(i.next.x-i.x)/(i.next.y-i.y);if(u<=n&&u>s){if(s=u,o=i.x<i.next.x?i:i.next,u===n)return o}}i=i.next}while(i!==t);if(!o)return null;let a=o,l=o.x,c=o.y,f=1/0;i=o;do{if(n>=i.x&&i.x>=l&&n!==i.x&&I0(r<c?n:s,r,l,c,r<c?s:n,r,i.x,i.y)){let u=Math.abs(r-i.y)/(n-i.x);if(Nc(i,e)&&(u<f||u===f&&(i.x>o.x||i.x===o.x&&hM(o,i))))o=i,f=u}i=i.next}while(i!==a);return o}function hM(e,t){return Gi(e.prev,e,t.prev)<0&&Gi(t.next,e,e.next)<0}function uM(e,t,i,n){let r=e;do{if(r.z===0)r.z=$u(r.x,r.y,t,i,n);r.prevZ=r.prev,r.nextZ=r.next,r=r.next}while(r!==e);r.prevZ.nextZ=null,r.prevZ=null,dM(r)}function dM(e){let t,i=1;do{let n=e,r;e=null;let s=null;t=0;while(n){t++;let o=n,a=0;for(let c=0;c<i;c++)if(a++,o=o.nextZ,!o)break;let l=i;while(a>0||l>0&&o){if(a!==0&&(l===0||!o||n.z<=o.z))r=n,n=n.nextZ,a--;else r=o,o=o.nextZ,l--;if(s)s.nextZ=r;else e=r;r.prevZ=s,s=r}n=o}s.nextZ=null,i*=2}while(t>1);return e}function $u(e,t,i,n,r){return e=(e-i)*r|0,t=(t-n)*r|0,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e|t<<1}function pM(e){let t=e,i=e;do{if(t.x<i.x||t.x===i.x&&t.y<i.y)i=t;t=t.next}while(t!==e);return i}function I0(e,t,i,n,r,s,o,a){return(r-o)*(t-a)>=(e-o)*(s-a)&&(e-o)*(n-a)>=(i-o)*(t-a)&&(i-o)*(s-a)>=(r-o)*(n-a)}function Lc(e,t,i,n,r,s,o,a){return!(e===o&&t===a)&&I0(e,t,i,n,r,s,o,a)}function mM(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!gM(e,t)&&(Nc(e,t)&&Nc(t,e)&&xM(e,t)&&(Gi(e.prev,e,t.prev)||Gi(e,t.prev,t))||Ka(e,t)&&Gi(e.prev,e,e.next)>0&&Gi(t.prev,t,t.next)>0)}function Gi(e,t,i){return(t.y-e.y)*(i.x-t.x)-(t.x-e.x)*(i.y-t.y)}function Ka(e,t){return e.x===t.x&&e.y===t.y}function L0(e,t,i,n){let r=xh(Gi(e,t,i)),s=xh(Gi(e,t,n)),o=xh(Gi(i,n,e)),a=xh(Gi(i,n,t));if(r!==s&&o!==a)return!0;if(r===0&&gh(e,i,t))return!0;if(s===0&&gh(e,n,t))return!0;if(o===0&&gh(i,e,n))return!0;if(a===0&&gh(i,t,n))return!0;return!1}function gh(e,t,i){return t.x<=Math.max(e.x,i.x)&&t.x>=Math.min(e.x,i.x)&&t.y<=Math.max(e.y,i.y)&&t.y>=Math.min(e.y,i.y)}function xh(e){return e>0?1:e<0?-1:0}function gM(e,t){let i=e;do{if(i.i!==e.i&&i.next.i!==e.i&&i.i!==t.i&&i.next.i!==t.i&&L0(i,i.next,e,t))return!0;i=i.next}while(i!==e);return!1}function Nc(e,t){return Gi(e.prev,e,e.next)<0?Gi(e,t,e.next)>=0&&Gi(e,e.prev,t)>=0:Gi(e,t,e.prev)<0||Gi(e,e.next,t)<0}function xM(e,t){let i=e,n=!1,r=(e.x+t.x)/2,s=(e.y+t.y)/2;do{if(i.y>s!==i.next.y>s&&i.next.y!==i.y&&r<(i.next.x-i.x)*(s-i.y)/(i.next.y-i.y)+i.x)n=!n;i=i.next}while(i!==e);return n}function D0(e,t){let i=Qu(e.i,e.x,e.y),n=Qu(t.i,t.x,t.y),r=e.next,s=t.prev;return e.next=t,t.prev=e,i.next=r,r.prev=i,n.next=i,i.prev=n,s.next=n,n.prev=s,n}function C0(e,t,i,n){let r=Qu(e,t,i);if(!n)r.prev=r,r.next=r;else r.next=n.next,r.prev=n,n.next.prev=r,n.next=r;return r}function Fc(e){if(e.next.prev=e.prev,e.prev.next=e.next,e.prevZ)e.prevZ.nextZ=e.nextZ;if(e.nextZ)e.nextZ.prevZ=e.prevZ}function Qu(e,t,i){return{i:e,x:t,y:i,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function _M(e,t,i,n){let r=0;for(let s=t,o=i-n;s<i;s+=n)r+=(e[o]-e[s])*(e[s+1]+e[o+1]),o=s;return r}class td{static triangulate(e,t,i=2){return ed(e,t,i)}}class fr{static area(e){let t=e.length,i=0;for(let n=t-1,r=0;r<t;n=r++)i+=e[n].x*e[r].y-e[r].x*e[n].y;return i*0.5}static isClockWise(e){return fr.area(e)<0}static triangulateShape(e,t){let i=[],n=[],r=[];N0(e),F0(i,e);let s=e.length;t.forEach(N0);for(let a=0;a<t.length;a++)n.push(s),s+=t[a].length,F0(i,t[a]);let o=td.triangulate(i,n);for(let a=0;a<o.length;a+=3)r.push(o.slice(a,a+3));return r}}function N0(e){let t=e.length;if(t>2&&e[t-1].equals(e[0]))e.pop()}function F0(e,t){for(let i=0;i<t.length;i++)e.push(t[i].x),e.push(t[i].y)}class $r extends et{constructor(e=new fn([new ne(0.5,0.5),new ne(-0.5,0.5),new ne(-0.5,-0.5),new ne(0.5,-0.5)]),t={}){super();this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let i=this,n=[],r=[];for(let o=0,a=e.length;o<a;o++){let l=e[o];s(l)}this.setAttribute("position",new Be(n,3)),this.setAttribute("uv",new Be(r,2)),this.computeVertexNormals();function s(o){let a=[],l=t.curveSegments!==void 0?t.curveSegments:12,c=t.steps!==void 0?t.steps:1,f=t.depth!==void 0?t.depth:1,u=t.bevelEnabled!==void 0?t.bevelEnabled:!0,h=t.bevelThickness!==void 0?t.bevelThickness:0.2,m=t.bevelSize!==void 0?t.bevelSize:h-0.1,g=t.bevelOffset!==void 0?t.bevelOffset:0,x=t.bevelSegments!==void 0?t.bevelSegments:3,d=t.extrudePath,p=t.UVGenerator!==void 0?t.UVGenerator:yM,y,M=!1,b,T,S,_;if(d){y=d.getSpacedPoints(c),M=!0,u=!1;let ge=d.isCatmullRomCurve3?d.closed:!1;b=d.computeFrenetFrames(c,ge),T=new R,S=new R,_=new R}if(!u)x=0,h=0,m=0,g=0;let v=o.extractPoints(l),{shape:w,holes:I}=v;if(!fr.isClockWise(w)){w=w.reverse();for(let ge=0,Ee=I.length;ge<Ee;ge++){let Ce=I[ge];if(fr.isClockWise(Ce))I[ge]=Ce.reverse()}}function O(ge){let Ve=ge[0];for(let We=1;We<=ge.length;We++){let st=We%ge.length,Oe=ge[st],Lt=Oe.x-Ve.x,wt=Oe.y-Ve.y,Dt=Lt*Lt+wt*wt,H=Math.max(Math.abs(Oe.x),Math.abs(Oe.y),Math.abs(Ve.x),Math.abs(Ve.y)),Bt=0.000000000000000000010000000000000001*H*H;if(Dt<=Bt){ge.splice(st,1),We--;continue}Ve=Oe}}O(w),I.forEach(O);let Q=I.length,L=w;for(let ge=0;ge<Q;ge++){let Ee=I[ge];w=w.concat(Ee)}function K(ge,Ee,Ce){if(!Ee)it("ExtrudeGeometry: vec does not exist");return ge.clone().addScaledVector(Ee,Ce)}let D=w.length;function N(ge,Ee,Ce){let Ve,We,st,Oe=ge.x-Ee.x,Lt=ge.y-Ee.y,wt=Ce.x-ge.x,Dt=Ce.y-ge.y,H=Oe*Oe+Lt*Lt,Bt=Oe*Dt-Lt*wt;if(Math.abs(Bt)>Number.EPSILON){let Rt=Math.sqrt(H),si=Math.sqrt(wt*wt+Dt*Dt),Le=Ee.x-Lt/Rt,Ht=Ee.y+Oe/Rt,q=Ce.x-Dt/si,te=Ce.y+wt/si,Je=((q-Le)*Dt-(te-Ht)*wt)/(Oe*Dt-Lt*wt);Ve=Le+Oe*Je-ge.x,We=Ht+Lt*Je-ge.y;let C=Ve*Ve+We*We;if(C<=2)return new ne(Ve,We);else st=Math.sqrt(C/2)}else{let Rt=!1;if(Oe>Number.EPSILON){if(wt>Number.EPSILON)Rt=!0}else if(Oe<-Number.EPSILON){if(wt<-Number.EPSILON)Rt=!0}else if(Math.sign(Lt)===Math.sign(Dt))Rt=!0;if(Rt)Ve=-Lt,We=Oe,st=Math.sqrt(H);else Ve=Oe,We=Lt,st=Math.sqrt(H/2)}return new ne(Ve/st,We/st)}let se=[];for(let ge=0,Ee=L.length,Ce=Ee-1,Ve=ge+1;ge<Ee;ge++,Ce++,Ve++){if(Ce===Ee)Ce=0;if(Ve===Ee)Ve=0;se[ge]=N(L[ge],L[Ce],L[Ve])}let Y=[],W,ee=se.concat();for(let ge=0,Ee=Q;ge<Ee;ge++){let Ce=I[ge];W=[];for(let Ve=0,We=Ce.length,st=We-1,Oe=Ve+1;Ve<We;Ve++,st++,Oe++){if(st===We)st=0;if(Oe===We)Oe=0;W[Ve]=N(Ce[Ve],Ce[st],Ce[Oe])}Y.push(W),ee=ee.concat(W)}let de;if(x===0)de=fr.triangulateShape(L,I);else{let ge=[],Ee=[];for(let Ce=0;Ce<x;Ce++){let Ve=Ce/x,We=h*Math.cos(Ve*Math.PI/2),st=m*Math.sin(Ve*Math.PI/2)+g;for(let Oe=0,Lt=L.length;Oe<Lt;Oe++){let wt=K(L[Oe],se[Oe],st);if(Ne(wt.x,wt.y,-We),Ve===0)ge.push(wt)}for(let Oe=0,Lt=Q;Oe<Lt;Oe++){let wt=I[Oe];W=Y[Oe];let Dt=[];for(let H=0,Bt=wt.length;H<Bt;H++){let Rt=K(wt[H],W[H],st);if(Ne(Rt.x,Rt.y,-We),Ve===0)Dt.push(Rt)}if(Ve===0)Ee.push(Dt)}}de=fr.triangulateShape(ge,Ee)}let X=de.length,oe=m+g;for(let ge=0;ge<D;ge++){let Ee=u?K(w[ge],ee[ge],oe):w[ge];if(!M)Ne(Ee.x,Ee.y,0);else S.copy(b.normals[0]).multiplyScalar(Ee.x),T.copy(b.binormals[0]).multiplyScalar(Ee.y),_.copy(y[0]).add(S).add(T),Ne(_.x,_.y,_.z)}for(let ge=1;ge<=c;ge++)for(let Ee=0;Ee<D;Ee++){let Ce=u?K(w[Ee],ee[Ee],oe):w[Ee];if(!M)Ne(Ce.x,Ce.y,f/c*ge);else S.copy(b.normals[ge]).multiplyScalar(Ce.x),T.copy(b.binormals[ge]).multiplyScalar(Ce.y),_.copy(y[ge]).add(S).add(T),Ne(_.x,_.y,_.z)}for(let ge=x-1;ge>=0;ge--){let Ee=ge/x,Ce=h*Math.cos(Ee*Math.PI/2),Ve=m*Math.sin(Ee*Math.PI/2)+g;for(let We=0,st=L.length;We<st;We++){let Oe=K(L[We],se[We],Ve);Ne(Oe.x,Oe.y,f+Ce)}for(let We=0,st=I.length;We<st;We++){let Oe=I[We];W=Y[We];for(let Lt=0,wt=Oe.length;Lt<wt;Lt++){let Dt=K(Oe[Lt],W[Lt],Ve);if(!M)Ne(Dt.x,Dt.y,f+Ce);else Ne(Dt.x,Dt.y+y[c-1].y,y[c-1].x+Ce)}}}ye(),ve();function ye(){let ge=n.length/3;if(u){let Ee=0,Ce=D*Ee;for(let Ve=0;Ve<X;Ve++){let We=de[Ve];xt(We[2]+Ce,We[1]+Ce,We[0]+Ce)}Ee=c+x*2,Ce=D*Ee;for(let Ve=0;Ve<X;Ve++){let We=de[Ve];xt(We[0]+Ce,We[1]+Ce,We[2]+Ce)}}else{for(let Ee=0;Ee<X;Ee++){let Ce=de[Ee];xt(Ce[2],Ce[1],Ce[0])}for(let Ee=0;Ee<X;Ee++){let Ce=de[Ee];xt(Ce[0]+D*c,Ce[1]+D*c,Ce[2]+D*c)}}i.addGroup(ge,n.length/3-ge,0)}function ve(){let ge=n.length/3,Ee=0;ke(L,Ee),Ee+=L.length;for(let Ce=0,Ve=I.length;Ce<Ve;Ce++){let We=I[Ce];ke(We,Ee),Ee+=We.length}i.addGroup(ge,n.length/3-ge,1)}function ke(ge,Ee){let Ce=ge.length;while(--Ce>=0){let Ve=Ce,We=Ce-1;if(We<0)We=ge.length-1;for(let st=0,Oe=c+x*2;st<Oe;st++){let Lt=D*st,wt=D*(st+1),Dt=Ee+Ve+Lt,H=Ee+We+Lt,Bt=Ee+We+wt,Rt=Ee+Ve+wt;Xe(Dt,H,Bt,Rt)}}}function Ne(ge,Ee,Ce){a.push(ge),a.push(Ee),a.push(Ce)}function xt(ge,Ee,Ce){Ye(ge),Ye(Ee),Ye(Ce);let Ve=n.length/3,We=p.generateTopUV(i,n,Ve-3,Ve-2,Ve-1);Tt(We[0]),Tt(We[1]),Tt(We[2])}function Xe(ge,Ee,Ce,Ve){Ye(ge),Ye(Ee),Ye(Ve),Ye(Ee),Ye(Ce),Ye(Ve);let We=n.length/3,st=p.generateSideWallUV(i,n,We-6,We-3,We-2,We-1);Tt(st[0]),Tt(st[1]),Tt(st[3]),Tt(st[1]),Tt(st[2]),Tt(st[3])}function Ye(ge){n.push(a[ge*3+0]),n.push(a[ge*3+1]),n.push(a[ge*3+2])}function Tt(ge){r.push(ge.x),r.push(ge.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return MM(t,i,e)}static fromJSON(e,t){let i=[];for(let r=0,s=e.shapes.length;r<s;r++){let o=t[e.shapes[r]];i.push(o)}let n=e.options.extrudePath;if(n!==void 0)e.options.extrudePath=new Zs[n.type]().fromJSON(n);return new $r(i,e.options)}}var yM={generateTopUV:function(e,t,i,n,r){let s=t[i*3],o=t[i*3+1],a=t[n*3],l=t[n*3+1],c=t[r*3],f=t[r*3+1];return[new ne(s,o),new ne(a,l),new ne(c,f)]},generateSideWallUV:function(e,t,i,n,r,s){let o=t[i*3],a=t[i*3+1],l=t[i*3+2],c=t[n*3],f=t[n*3+1],u=t[n*3+2],h=t[r*3],m=t[r*3+1],g=t[r*3+2],x=t[s*3],d=t[s*3+1],p=t[s*3+2];if(Math.abs(a-f)<Math.abs(o-c))return[new ne(o,1-l),new ne(c,1-u),new ne(h,1-g),new ne(x,1-p)];else return[new ne(a,1-l),new ne(f,1-u),new ne(m,1-g),new ne(d,1-p)]}};function MM(e,t,i){if(i.shapes=[],Array.isArray(e))for(let n=0,r=e.length;n<r;n++){let s=e[n];i.shapes.push(s.uuid)}else i.shapes.push(e.uuid);if(i.options=Object.assign({},t),t.extrudePath!==void 0)i.options.extrudePath=t.extrudePath.toJSON();return i}class Uc extends et{constructor(e=[new ne(0,-0.5),new ne(0.5,0),new ne(0,0.5)],t=12,i=0,n=Math.PI*2){super();this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:n},t=Math.floor(t),n=Mt(n,0,Math.PI*2);let r=[],s=[],o=[],a=[],l=[],c=1/t,f=new R,u=new ne,h=new R,m=new R,g=new R,x=0,d=0;for(let p=0;p<=e.length-1;p++)switch(p){case 0:x=e[p+1].x-e[p].x,d=e[p+1].y-e[p].y,h.x=d*1,h.y=-x,h.z=d*0,g.copy(h),h.normalize(),a.push(h.x,h.y,h.z);break;case e.length-1:g.normalize(),a.push(g.x,g.y,g.z);break;default:x=e[p+1].x-e[p].x,d=e[p+1].y-e[p].y,h.x=d*1,h.y=-x,h.z=d*0,m.copy(h),h.x+=g.x,h.y+=g.y,h.z+=g.z,h.normalize(),a.push(h.x,h.y,h.z),g.copy(m)}for(let p=0;p<=t;p++){let y=i+p*c*n,M=Math.sin(y),b=Math.cos(y);for(let T=0;T<=e.length-1;T++){f.x=e[T].x*M,f.y=e[T].y,f.z=e[T].x*b,s.push(f.x,f.y,f.z),u.x=p/t,u.y=T/(e.length-1),o.push(u.x,u.y);let S=a[3*T+0]*M,_=a[3*T+1],v=a[3*T+0]*b;l.push(S,_,v)}}for(let p=0;p<t;p++)for(let y=0;y<e.length-1;y++){let M=y+p*e.length,b=M,T=M+e.length,S=M+e.length+1,_=M+1;r.push(b,T,_),r.push(S,_,T)}this.setIndex(r),this.setAttribute("position",new Be(s,3)),this.setAttribute("uv",new Be(o,2)),this.setAttribute("normal",new Be(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Uc(e.points,e.segments,e.phiStart,e.phiLength)}}class ei extends et{constructor(e=1,t=1,i=1,n=1){super();this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:n};let r=e/2,s=t/2,o=Math.floor(i),a=Math.floor(n),l=o+1,c=a+1,f=e/o,u=t/a,h=[],m=[],g=[],x=[];for(let d=0;d<c;d++){let p=d*u-s;for(let y=0;y<l;y++){let M=y*f-r;m.push(M,-p,0),g.push(0,0,1),x.push(y/o),x.push(1-d/a)}}for(let d=0;d<a;d++)for(let p=0;p<o;p++){let y=p+l*d,M=p+l*(d+1),b=p+1+l*(d+1),T=p+1+l*d;h.push(y,M,T),h.push(M,b,T)}this.setIndex(h),this.setAttribute("position",new Be(m,3)),this.setAttribute("normal",new Be(g,3)),this.setAttribute("uv",new Be(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ei(e.width,e.height,e.widthSegments,e.heightSegments)}}class Ss extends et{constructor(e=0.5,t=1,i=32,n=1,r=0,s=Math.PI*2){super();this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:n,thetaStart:r,thetaLength:s},i=Math.max(3,i),n=Math.max(1,n);let o=[],a=[],l=[],c=[],f=e,u=(t-e)/n,h=new R,m=new ne;for(let g=0;g<=n;g++){for(let x=0;x<=i;x++){let d=r+x/i*s;h.x=f*Math.cos(d),h.y=f*Math.sin(d),a.push(h.x,h.y,h.z),l.push(0,0,1),m.x=(h.x/t+1)/2,m.y=(h.y/t+1)/2,c.push(m.x,m.y)}f+=u}for(let g=0;g<n;g++){let x=g*(i+1);for(let d=0;d<i;d++){let p=d+x,y=p,M=p+i+1,b=p+i+2,T=p+1;o.push(y,M,T),o.push(M,b,T)}}this.setIndex(o),this.setAttribute("position",new Be(a,3)),this.setAttribute("normal",new Be(l,3)),this.setAttribute("uv",new Be(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ss(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Vo extends et{constructor(e=new fn([new ne(0,0.5),new ne(-0.5,-0.5),new ne(0.5,-0.5)]),t=12){super();this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let i=[],n=[],r=[],s=[],o=0,a=0;if(Array.isArray(e)===!1)l(e);else for(let c=0;c<e.length;c++)l(e[c]),this.addGroup(o,a,c),o+=a,a=0;this.setIndex(i),this.setAttribute("position",new Be(n,3)),this.setAttribute("normal",new Be(r,3)),this.setAttribute("uv",new Be(s,2));function l(c){let f=n.length/3,u=c.extractPoints(t),{shape:h,holes:m}=u;if(fr.isClockWise(h)===!1)h=h.reverse();for(let x=0,d=m.length;x<d;x++){let p=m[x];if(fr.isClockWise(p)===!0)m[x]=p.reverse()}let g=fr.triangulateShape(h,m);for(let x=0,d=m.length;x<d;x++){let p=m[x];h=h.concat(p)}for(let x=0,d=h.length;x<d;x++){let p=h[x];n.push(p.x,p.y,0),r.push(0,0,1),s.push(p.x,p.y)}for(let x=0,d=g.length;x<d;x++){let p=g[x],y=p[0]+f,M=p[1]+f,b=p[2]+f;i.push(y,M,b),a+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return vM(t,e)}static fromJSON(e,t){let i=[];for(let n=0,r=e.shapes.length;n<r;n++){let s=t[e.shapes[n]];i.push(s)}return new Vo(i,e.curveSegments)}}function vM(e,t){if(t.shapes=[],Array.isArray(e))for(let i=0,n=e.length;i<n;i++){let r=e[i];t.shapes.push(r.uuid)}else t.shapes.push(e.uuid);return t}class yn extends et{constructor(e=1,t=32,i=16,n=0,r=Math.PI*2,s=0,o=Math.PI){super();this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:n,phiLength:r,thetaStart:s,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let a=Math.min(s+o,Math.PI),l=0,c=[],f=new R,u=new R,h=[],m=[],g=[],x=[];for(let d=0;d<=i;d++){let p=[],y=d/i,M=s+y*o,b=e*Math.cos(M),T=Math.sqrt(e*e-b*b),S=0;if(d===0&&s===0)S=0.5/t;else if(d===i&&a===Math.PI)S=-0.5/t;for(let _=0;_<=t;_++){let v=_/t,w=n+v*r;f.x=-T*Math.cos(w),f.y=b,f.z=T*Math.sin(w),m.push(f.x,f.y,f.z),u.copy(f).normalize(),g.push(u.x,u.y,u.z),x.push(v+S,1-y),p.push(l++)}c.push(p)}for(let d=0;d<i;d++)for(let p=0;p<t;p++){let y=c[d][p+1],M=c[d][p],b=c[d+1][p],T=c[d+1][p+1];if(d!==0||s>0)h.push(y,M,T);if(d!==i-1||a<Math.PI)h.push(M,b,T)}this.setIndex(h),this.setAttribute("position",new Be(m,3)),this.setAttribute("normal",new Be(g,3)),this.setAttribute("uv",new Be(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yn(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class An extends et{constructor(e=1,t=0.4,i=12,n=48,r=Math.PI*2,s=0,o=Math.PI*2){super();this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:n,arc:r,thetaStart:s,thetaLength:o},i=Math.floor(i),n=Math.floor(n);let a=[],l=[],c=[],f=[],u=new R,h=new R,m=new R;for(let g=0;g<=i;g++){let x=s+g/i*o;for(let d=0;d<=n;d++){let p=d/n*r;h.x=(e+t*Math.cos(x))*Math.cos(p),h.y=(e+t*Math.cos(x))*Math.sin(p),h.z=t*Math.sin(x),l.push(h.x,h.y,h.z),u.x=e*Math.cos(p),u.y=e*Math.sin(p),m.subVectors(h,u).normalize(),c.push(m.x,m.y,m.z),f.push(d/n),f.push(g/i)}}for(let g=1;g<=i;g++)for(let x=1;x<=n;x++){let d=(n+1)*g+x-1,p=(n+1)*(g-1)+x-1,y=(n+1)*(g-1)+x,M=(n+1)*g+x;a.push(d,p,M),a.push(p,y,M)}this.setIndex(a),this.setAttribute("position",new Be(l,3)),this.setAttribute("normal",new Be(c,3)),this.setAttribute("uv",new Be(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new An(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}class Vr extends et{constructor(e=new Pc(new R(-1,-1,0),new R(-1,1,0),new R(1,1,0)),t=64,i=1,n=8,r=!1){super();this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:n,closed:r};let s=e.computeFrenetFrames(t,r);this.tangents=s.tangents,this.normals=s.normals,this.binormals=s.binormals;let o=new R,a=new R,l=new ne,c=new R,f=[],u=[],h=[],m=[];g(),this.setIndex(m),this.setAttribute("position",new Be(f,3)),this.setAttribute("normal",new Be(u,3)),this.setAttribute("uv",new Be(h,2));function g(){for(let y=0;y<t;y++)x(y);x(r===!1?t:0),p(),d()}function x(y){c=e.getPointAt(y/t,c);let M=s.normals[y],b=s.binormals[y];for(let T=0;T<=n;T++){let S=T/n*Math.PI*2,_=Math.sin(S),v=-Math.cos(S);a.x=v*M.x+_*b.x,a.y=v*M.y+_*b.y,a.z=v*M.z+_*b.z,a.normalize(),u.push(a.x,a.y,a.z),o.x=c.x+i*a.x,o.y=c.y+i*a.y,o.z=c.z+i*a.z,f.push(o.x,o.y,o.z)}}function d(){for(let y=1;y<=t;y++)for(let M=1;M<=n;M++){let b=(n+1)*(y-1)+(M-1),T=(n+1)*y+(M-1),S=(n+1)*y+M,_=(n+1)*(y-1)+M;m.push(b,T,_),m.push(T,S,_)}}function p(){for(let y=0;y<=t;y++)for(let M=0;M<=n;M++)l.x=y/t,l.y=M/n,h.push(l.x,l.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new Vr(new Zs[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}function Es(e){let t={};for(let i in e){t[i]={};for(let n in e[i]){let r=e[i][n];if(U0(r))if(r.isRenderTargetTexture)De("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][n]=null;else t[i][n]=r.clone();else if(Array.isArray(r))if(U0(r[0])){let s=[];for(let o=0,a=r.length;o<a;o++)s[o]=r[o].clone();t[i][n]=s}else t[i][n]=r.slice();else t[i][n]=r}}return t}function On(e){let t={};for(let i=0;i<e.length;i++){let n=Es(e[i]);for(let r in n)t[r]=n[r]}return t}function U0(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function B0(e){let t=[];for(let i=0;i<e.length;i++)t.push(e[i].clone());return t}function _h(e){let t=e.getRenderTarget();if(t===null)return e.outputColorSpace;if(t.isXRRenderTarget===!0)return t.texture.colorSpace;return Et.workingColorSpace}var Qr={clone:Es,merge:On};var O0=`
void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}
`;var H0=`
void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}
`;class Di extends hi{constructor(e){super();if(this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=O0,this.fragmentShader=H0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0)this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Es(e.uniforms),this.uniformsGroups=B0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let s=this.uniforms[n].value;if(s&&s.isTexture)t.uniforms[n]={type:"t",value:s.toJSON(e).uuid};else if(s&&s.isColor)t.uniforms[n]={type:"c",value:s.getHex()};else if(s&&s.isVector2)t.uniforms[n]={type:"v2",value:s.toArray()};else if(s&&s.isVector3)t.uniforms[n]={type:"v3",value:s.toArray()};else if(s&&s.isVector4)t.uniforms[n]={type:"v4",value:s.toArray()};else if(s&&s.isMatrix3)t.uniforms[n]={type:"m3",value:s.toArray()};else if(s&&s.isMatrix4)t.uniforms[n]={type:"m4",value:s.toArray()};else t.uniforms[n]={value:s}}if(Object.keys(this.defines).length>0)t.defines=this.defines;t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let n in this.extensions)if(this.extensions[n]===!0)i[n]=!0;if(Object.keys(i).length>0)t.extensions=i;return t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let i in e.uniforms){let n=e.uniforms[i];switch(this.uniforms[i]={},n.type){case"t":this.uniforms[i].value=t[n.value]||null;break;case"c":this.uniforms[i].value=new Se().setHex(n.value);break;case"v2":this.uniforms[i].value=new ne().fromArray(n.value);break;case"v3":this.uniforms[i].value=new R().fromArray(n.value);break;case"v4":this.uniforms[i].value=new Xt().fromArray(n.value);break;case"m3":this.uniforms[i].value=new mt().fromArray(n.value);break;case"m4":this.uniforms[i].value=new $e().fromArray(n.value);break;default:this.uniforms[i].value=n.value}}if(e.defines!==void 0)this.defines=e.defines;if(e.vertexShader!==void 0)this.vertexShader=e.vertexShader;if(e.fragmentShader!==void 0)this.fragmentShader=e.fragmentShader;if(e.glslVersion!==void 0)this.glslVersion=e.glslVersion;if(e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];if(e.lights!==void 0)this.lights=e.lights;if(e.clipping!==void 0)this.clipping=e.clipping;return this}}class Wo extends Di{constructor(e){super(e);this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class yt extends hi{constructor(e){super();this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Se(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Se(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Fr,this.normalScale=new ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Mn extends yt{constructor(e){super();this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ne(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Mt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+0.4*t)/(1-0.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new Se(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Se(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Se(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){if(this._anisotropy>0!==e>0)this.version++;this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){if(this._clearcoat>0!==e>0)this.version++;this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){if(this._diffuseRoughness>0!==e>0)this.version++;this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){if(this._iridescence>0!==e>0)this.version++;this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){if(this._dispersion>0!==e>0)this.version++;this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){if(this._retroreflectivity>0!==e>0)this.version++;this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){if(this._sheen>0!==e>0)this.version++;this._sheen=e}get transmission(){return this._transmission}set transmission(e){if(this._transmission>0!==e>0)this.version++;this._transmission=e}get iridescenceThicknessRange(){return br('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){br('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Bc extends hi{constructor(e){super();this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Se(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Se(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Fr,this.normalScale=new ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xn,this.combine=yo,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=0.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Oc extends hi{constructor(e){super();this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Np,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Hc extends hi{constructor(e){super();this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function es(e,t){if(!e||e.constructor===t)return e;if(typeof t.BYTES_PER_ELEMENT==="number")return new t(e);return Array.prototype.slice.call(e)}function Xo(e){return e!==void 0&&e.inTangents!==void 0&&e.outTangents!==void 0}function z0(e){function t(r,s){return e[r]-e[s]}let i=e.length,n=Array(i);for(let r=0;r!==i;++r)n[r]=r;return n.sort(t),n}function id(e,t,i){let n=e.length,r=new e.constructor(n);for(let s=0,o=0;o!==n;++s){let a=i[s]*t;for(let l=0;l!==t;++l)r[o++]=e[a+l]}return r}function G0(e,t,i,n){let r=1,s=e[0];while(s!==void 0&&s[n]===void 0)s=e[r++];if(s===void 0)return;let o=s[n];if(o===void 0)return;if(Array.isArray(o))do{if(o=s[n],o!==void 0)t.push(s.time),i.push(...o);s=e[r++]}while(s!==void 0);else if(o.toArray!==void 0)do{if(o=s[n],o!==void 0)t.push(s.time),o.toArray(i,i.length);s=e[r++]}while(s!==void 0);else do{if(o=s[n],o!==void 0)t.push(s.time),i.push(o);s=e[r++]}while(s!==void 0)}class $n{constructor(e,t,i,n){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=n!==void 0?n:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,n=t[i],r=t[i-1];i:{e:{let s;t:{n:if(!(e<n)){for(let o=i+2;;){if(n===void 0){if(e<r)break n;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=n,n=t[++i],e<n)break e}s=t.length;break t}if(!(e>=r)){let o=t[1];if(e<o)i=2,r=o;for(let a=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===a)break;if(n=r,r=t[--i-1],e>=r)break e}s=i,i=0;break t}break i}while(i<s){let o=i+s>>>1;if(e<t[o])s=o;else i=o+1}if(n=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,n)}return this.interpolate_(i,r,e,n)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,n=this.valueSize,r=e*n;for(let s=0;s!==n;++s)t[s]=i[r+s];return t}interpolate_(){throw Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}}class yh extends $n{constructor(e,t,i,n){super(e,t,i,n);this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ef,endingEnd:Ef}}intervalChanged_(e,t,i){let n=this.parameterPositions,r=e-2,s=e+1,o=n[r],a=n[s];if(o===void 0)switch(this.getSettings_().endingStart){case Tf:r=e,o=2*t-i;break;case wf:r=n.length-2,o=t+n[r]-n[r+1];break;default:r=e,o=i}if(a===void 0)switch(this.getSettings_().endingEnd){case Tf:s=e,a=2*i-t;break;case wf:s=1,a=i+n[1]-n[0];break;default:s=e-1,a=t}let l=(i-t)*0.5,c=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(a-i),this._offsetPrev=r*c,this._offsetNext=s*c}interpolate_(e,t,i,n){let r=this.resultBuffer,s=this.sampleValues,o=this.valueSize,a=e*o,l=a-o,c=this._offsetPrev,f=this._offsetNext,u=this._weightPrev,h=this._weightNext,m=(i-t)/(n-t),g=m*m,x=g*m,d=-u*x+2*u*g-u*m,p=(1+u)*x+(-1.5-2*u)*g+(-0.5+u)*m+1,y=(-1-h)*x+(1.5+h)*g+0.5*m,M=h*x-h*g;for(let b=0;b!==o;++b)r[b]=d*s[c+b]+p*s[l+b]+y*s[a+b]+M*s[f+b];return r}}class zc extends $n{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){let r=this.resultBuffer,s=this.sampleValues,o=this.valueSize,a=e*o,l=a-o,c=(i-t)/(n-t),f=1-c;for(let u=0;u!==o;++u)r[u]=s[l+u]*f+s[a+u]*c;return r}}class Mh extends $n{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e){return this.copySampleValue_(e-1)}}class vh extends $n{interpolate_(e,t,i,n){let r=this.resultBuffer,s=this.sampleValues,o=this.valueSize,a=e*o,l=a-o,c=this.inTangents,f=this.outTangents;if(!c||!f){let m=(i-t)/(n-t),g=1-m;for(let x=0;x!==o;++x)r[x]=s[l+x]*g+s[a+x]*m;return r}let u=o*2,h=e-1;for(let m=0;m!==o;++m){let g=s[l+m],x=s[a+m],d=h*u+m*2,p=f[d],y=f[d+1],M=e*u+m*2,b=c[M],T=c[M+1],S=IM(i,t,p,b,n);r[m]=V0(S,g,y,T,x)}return r}}function V0(e,t,i,n,r){let s=1-e;return s*s*s*t+3*s*s*e*i+3*s*e*e*n+e*e*e*r}function PM(e,t,i,n,r){let s=1-e;return 3*s*s*(i-t)+6*s*e*(n-i)+3*e*e*(r-n)}function IM(e,t,i,n,r){let s=(e-t)/(r-t);for(let o=0;o<8;o++){let a=V0(s,t,i,n,r)-e;if(Math.abs(a)<0.0000000001)break;let l=PM(s,t,i,n,r);if(Math.abs(l)<0.0000000001)break;s=Math.max(0,Math.min(1,s-a/l))}return s}class tn{constructor(e,t,i,n){if(e===void 0)throw Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=es(t,this.TimeBufferType),this.values=es(i,this.ValueBufferType),this.setInterpolation(n||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:es(e.times,Array),values:es(e.values,Array)};let n=e.getInterpolation();if(n!==e.DefaultInterpolation)i.interpolation=n;if(Xo(e.settings))i.settings={inTangents:es(e.settings.inTangents,Array),outTangents:es(e.settings.outTangents,Array)}}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Mh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new zc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new yh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new vh(this.times,this.values,this.getValueSize(),e);if(this.settings)t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents;return t}setInterpolation(e){let t;switch(e){case ds:t=this.InterpolantFactoryMethodDiscrete;break;case Eo:t=this.InterpolantFactoryMethodLinear;break;case Sf:t=this.InterpolantFactoryMethodSmooth;break;case du:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(i);return De("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ds;case this.InterpolantFactoryMethodLinear:return Eo;case this.InterpolantFactoryMethodSmooth:return Sf;case this.InterpolantFactoryMethodBezier:return du}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]+=e;if(Xo(this.settings))W0(this.settings.inTangents,e),W0(this.settings.outTangents,e)}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]*=e;if(Xo(this.settings))X0(this.settings.inTangents,e),X0(this.settings.outTangents,e)}return this}trim(e,t){let i=this.times,n=i.length,r=0,s=n-1;while(r!==n&&i[r]<e)++r;while(s!==-1&&i[s]>t)--s;if(++s,r!==0||s!==n){if(r>=s)s=Math.max(s,1),r=s-1;let o=this.getValueSize();this.times=i.slice(r,s),this.values=this.values.slice(r*o,s*o)}return this}validate(){let e=!0,t=this.getValueSize();if(t-Math.floor(t)!==0)it("KeyframeTrack: Invalid value size in track.",this),e=!1;let i=this.times,n=this.values,r=i.length;if(r===0)it("KeyframeTrack: Track is empty.",this),e=!1;let s=null;for(let o=0;o!==r;o++){let a=i[o];if(typeof a==="number"&&isNaN(a)){it("KeyframeTrack: Time is not a valid number.",this,o,a),e=!1;break}if(s!==null&&s>a){it("KeyframeTrack: Out of order keys.",this,o,a,s),e=!1;break}s=a}if(n!==void 0){if(mu(n))for(let o=0,a=n.length;o!==a;++o){let l=n[o];if(isNaN(l)){it("KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),n=this.getInterpolation()===Sf,r=e.length-1,s=1;for(let o=1;o<r;++o){let a=!1,l=e[o],c=e[o+1];if(l!==c&&(o!==1||l!==e[0]))if(!n){let f=o*i,u=f-i,h=f+i;for(let m=0;m!==i;++m){let g=t[f+m];if(g!==t[u+m]||g!==t[h+m]){a=!0;break}}}else a=!0;if(a){if(o!==s){e[s]=e[o];let f=o*i,u=s*i;for(let h=0;h!==i;++h)t[u+h]=t[f+h]}++s}}if(r>0){e[s]=e[r];for(let o=r*i,a=s*i,l=0;l!==i;++l)t[a+l]=t[o+l];++s}if(s!==e.length)this.times=e.slice(0,s),this.values=t.slice(0,s*i);else this.times=e,this.values=t;return this}clone(){let e=this.times.slice(),t=this.values.slice(),n=new this.constructor(this.name,e,t);if(n.createInterpolant=this.createInterpolant,Xo(this.settings))n.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()};return n}}function W0(e,t){for(let i=0,n=e.length;i!==n;i+=2)e[i]+=t}function X0(e,t){for(let i=0,n=e.length;i!==n;i+=2)e[i]*=t}tn.prototype.ValueTypeName="";tn.prototype.TimeBufferType=Float32Array;tn.prototype.ValueBufferType=Float32Array;tn.prototype.DefaultInterpolation=Eo;class Ts extends tn{constructor(e,t,i){super(e,t,i)}}Ts.prototype.ValueTypeName="bool";Ts.prototype.ValueBufferType=Array;Ts.prototype.DefaultInterpolation=ds;Ts.prototype.InterpolantFactoryMethodLinear=void 0;Ts.prototype.InterpolantFactoryMethodSmooth=void 0;class Gc extends tn{constructor(e,t,i,n){super(e,t,i,n)}}Gc.prototype.ValueTypeName="color";class ws extends tn{constructor(e,t,i,n){super(e,t,i,n)}}ws.prototype.ValueTypeName="number";class bh extends $n{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){let r=this.resultBuffer,s=this.sampleValues,o=this.valueSize,a=(i-t)/(n-t),l=e*o;for(let c=l+o;l!==c;l+=4)Ei.slerpFlat(r,0,s,l-o,s,l,a);return r}}class ts extends tn{constructor(e,t,i,n){super(e,t,i,n)}InterpolantFactoryMethodLinear(e){return new bh(this.times,this.values,this.getValueSize(),e)}}ts.prototype.ValueTypeName="quaternion";ts.prototype.InterpolantFactoryMethodSmooth=void 0;class As extends tn{constructor(e,t,i){super(e,t,i)}}As.prototype.ValueTypeName="string";As.prototype.ValueBufferType=Array;As.prototype.DefaultInterpolation=ds;As.prototype.InterpolantFactoryMethodLinear=void 0;As.prototype.InterpolantFactoryMethodSmooth=void 0;class Rs extends tn{constructor(e,t,i,n){super(e,t,i,n)}}Rs.prototype.ValueTypeName="vector";class Js{constructor(e="",t=-1,i=[],n=Af){if(this.name=e,this.tracks=i,this.duration=t,this.blendMode=n,this.uuid=ji(),this.userData={},this.duration<0)this.resetDuration()}static parse(e){let t=[],i=e.tracks,n=1/(e.fps||1);for(let s=0,o=i.length;s!==o;++s)t.push(DM(i[s]).scale(n));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){let t=[],i=e.tracks,n={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,s=i.length;r!==s;++r)t.push(tn.toJSON(i[r]));return n}static CreateFromMorphTargetSequence(e,t,i,n){let r=t.length,s=[];for(let o=0;o<r;o++){let a=[],l=[];a.push((o+r-1)%r,o,(o+1)%r),l.push(0,1,0);let c=z0(a);if(a=id(a,1,c),l=id(l,1,c),!n&&a[0]===0)a.push(r),l.push(l[0]);s.push(new ws(".morphTargetInfluences["+t[o].name+"]",a,l).scale(1/i))}return new this(e,-1,s)}static findByName(e,t){let i=e;if(!Array.isArray(e)){let n=e;i=n.geometry&&n.geometry.animations||n.animations}for(let n=0;n<i.length;n++)if(i[n].name===t)return i[n];return null}static CreateClipsFromMorphTargetSequences(e,t,i){let n={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,a=e.length;o<a;o++){let l=e[o],c=l.name.match(r);if(c&&c.length>1){let f=c[1],u=n[f];if(!u)n[f]=u=[];u.push(l)}}let s=[];for(let o in n)s.push(this.CreateFromMorphTargetSequence(o,n[o],t,i));return s}resetDuration(){let e=this.tracks,t=0;for(let i=0,n=e.length;i!==n;++i){let r=this.tracks[i];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let i=0;i<this.tracks.length;i++)e.push(this.tracks[i].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function LM(e){switch(e.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ws;case"vector":case"vector2":case"vector3":case"vector4":return Rs;case"color":return Gc;case"quaternion":return ts;case"bool":case"boolean":return Ts;case"string":return As}throw Error("THREE.KeyframeTrack: Unsupported typeName: "+e)}function DM(e){if(e.type===void 0)throw Error("THREE.KeyframeTrack: track type undefined, can not parse");let t=LM(e.type);if(e.times===void 0){let n=[],r=[];G0(e.keys,n,r,"value"),e.times=n,e.values=r}let i;if(t.parse!==void 0)i=t.parse(e);else i=new t(e.name,e.times,e.values,e.interpolation);if(Xo(e.settings))i.settings={inTangents:es(e.settings.inTangents,Float32Array),outTangents:es(e.settings.outTangents,Float32Array)};return i}var hr={enabled:!1,files:{},add:function(e,t){if(this.enabled===!1)return;if(Y0(e))return;this.files[e]=t},get:function(e){if(this.enabled===!1)return;if(Y0(e))return;return this.files[e]},remove:function(e){delete this.files[e]},clear:function(){this.files={}}};function Y0(e){try{let t=e.slice(e.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch(t){return!1}}class Sh{constructor(e,t,i){let n=this,r=!1,s=0,o=0,a=void 0,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(c){if(o++,r===!1){if(n.onStart!==void 0)n.onStart(c,s,o)}r=!0},this.itemEnd=function(c){if(s++,n.onProgress!==void 0)n.onProgress(c,s,o);if(s===o){if(r=!1,n.onLoad!==void 0)n.onLoad()}},this.itemError=function(c){if(n.onError!==void 0)n.onError(c)},this.resolveURL=function(c){if(c=c.normalize("NFC"),a)return a(c);return c},this.setURLModifier=function(c){return a=c,this},this.addHandler=function(c,f){return l.push(c,f),this},this.removeHandler=function(c){let f=l.indexOf(c);if(f!==-1)l.splice(f,2);return this},this.getHandler=function(c){for(let f=0,u=l.length;f<u;f+=2){let h=l[f],m=l[f+1];if(h.global)h.lastIndex=0;if(h.test(c))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){if(!this._abortController)this._abortController=new AbortController;return this._abortController}}var nd=new Sh;class $i{constructor(e){if(this.manager=e!==void 0?e:nd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(n,r){i.load(e,n,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}}$i.DEFAULT_MATERIAL_NAME="__DEFAULT";var Cs={};class q0 extends Error{constructor(e,t){super(e);this.response=t}}class Ar extends $i{constructor(e){super(e);this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,i,n){if(e===void 0)e="";if(this.path!==void 0)e=this.path+e;e=this.manager.resolveURL(e);let r=hr.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{if(t)t(r);this.manager.itemEnd(e)},0);return}if(Cs[e]!==void 0){Cs[e].push({onLoad:t,onProgress:i,onError:n});return}Cs[e]=[],Cs[e].push({onLoad:t,onProgress:i,onError:n});let s=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",priority:this.priority,cache:this.cache,signal:typeof AbortSignal.any==="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,a=this.responseType;fetch(s).then((l)=>{if(l.status===200||l.status===0){if(l.status===0)De("FileLoader: HTTP Status 0 received.");if(typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let c=Cs[e],f=l.body.getReader(),u=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),h=u?parseInt(u):0,m=h!==0,g=0,x=new ReadableStream({start(d){p();function p(){f.read().then(({done:y,value:M})=>{if(y)d.close();else{g+=M.byteLength;let b=new ProgressEvent("progress",{lengthComputable:m,loaded:g,total:h});for(let T=0,S=c.length;T<S;T++){let _=c[T];if(_.onProgress)_.onProgress(b)}d.enqueue(M),p()}},(y)=>{d.error(y)})}}});return new Response(x)}else throw new q0(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then((l)=>{switch(a){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then((c)=>new DOMParser().parseFromString(c,o));case"json":return l.json();default:if(o==="")return l.text();else{let f=/charset="?([^;"\s]*)"?/i.exec(o),u=f&&f[1]?f[1].toLowerCase():void 0,h=new TextDecoder(u);return l.arrayBuffer().then((m)=>h.decode(m))}}}).then((l)=>{hr.add(`file:${e}`,l);let c=Cs[e];delete Cs[e];for(let f=0,u=c.length;f<u;f++){let h=c[f];if(h.onLoad)h.onLoad(l)}}).catch((l)=>{let c=Cs[e];if(c===void 0)throw this.manager.itemError(e),l;delete Cs[e];for(let f=0,u=c.length;f<u;f++){let h=c[f];if(h.onError)h.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}var Za=new WeakMap;class Ja extends $i{constructor(e){super(e)}load(e,t,i,n){if(this.path!==void 0)e=this.path+e;e=this.manager.resolveURL(e);let r=this,s=hr.get(`image:${e}`);if(s!==void 0){if(s.complete===!0)r.manager.itemStart(e),setTimeout(function(){if(t)t(s);r.manager.itemEnd(e)},0);else{let f=Za.get(s);if(f===void 0)f=[],Za.set(s,f);f.push({onLoad:t,onError:n})}return s}let o=ks("img");function a(){if(c(),t)t(this);let f=Za.get(this)||[];for(let u=0;u<f.length;u++){let h=f[u];if(h.onLoad)h.onLoad(this)}Za.delete(this),r.manager.itemEnd(e)}function l(f){if(c(),n)n(f);hr.remove(`image:${e}`);let u=Za.get(this)||[];for(let h=0;h<u.length;h++){let m=u[h];if(m.onError)m.onError(f)}Za.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function c(){o.removeEventListener("load",a,!1),o.removeEventListener("error",l,!1)}if(o.addEventListener("load",a,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"){if(this.crossOrigin!==void 0)o.crossOrigin=this.crossOrigin}return hr.add(`image:${e}`,o),r.manager.itemStart(e),o.fetchPriority=this.priority,o.src=e,o}}class js extends $i{constructor(e){super(e)}load(e,t,i,n){let r=new Jt,s=new Ja(this.manager);return s.setPriority(this.priority),s.setCache(this.cache),s.setCrossOrigin(this.crossOrigin),s.setPath(this.path),s.load(e,function(o){if(r.image=o,r.needsUpdate=!0,t!==void 0)t(r)},i,n),r}}class ur extends vt{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super();this.isLight=!0,this.type="Light",this.color=new Se(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}var rd=new $e,K0=new R,Z0=new R;class $s{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ne(512,512),this.mapType=Ji,this.map=null,this.mapPass=null,this.matrix=new $e,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Tr,this._frameExtents=new ne(1,1),this._viewportCount=1,this._viewports=[new Xt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;K0.setFromMatrixPosition(e.matrixWorld),t.position.copy(K0),Z0.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Z0),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,n){rd.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(rd,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,s=n?n.z/r.x:1,o=n?n.w/r.y:1,a=n?n.x/r.x:0,l=n?n.y/r.y:0;if(e.coordinateSystem===Zr||e.reversedDepth)t.set(0.5*s,0,0,0.5*s+a,0,0.5*o,0,0.5*o+l,0,0,1,0,0,0,0,1);else t.set(0.5*s,0,0,0.5*s+a,0,0.5*o,0,0.5*o+l,0,0,0.5,0.5,0,0,0,1);t.multiply(rd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){if(this.map)this.map.dispose();if(this.mapPass)this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}var Eh=new R,Th=new Ei,is=new R;class Yo extends vt{constructor(){super();this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new $e,this.projectionMatrix=new $e,this.projectionMatrixInverse=new $e,this.coordinateSystem=gn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){if(super.updateMatrixWorld(e),this.matrixWorld.decompose(Eh,Th,is),is.x===1&&is.y===1&&is.z===1)this.matrixWorldInverse.copy(this.matrixWorld).invert();else this.matrixWorldInverse.compose(Eh,Th,is.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){if(super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(Eh,Th,is),is.x===1&&is.y===1&&is.z===1)this.matrixWorldInverse.copy(this.matrixWorld).invert();else this.matrixWorldInverse.compose(Eh,Th,is.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}var Qs=new R,J0=new ne,j0=new ne;class wi extends Yo{constructor(e=50,t=1,i=0.1,n=2000){super();this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=0.5*this.getFilmHeight()/e;this.fov=ms*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(ps*0.5*this.fov);return 0.5*this.getFilmHeight()/e}getEffectiveFOV(){return ms*2*Math.atan(Math.tan(ps*0.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Qs.set(-1,-1,0.5).applyMatrix4(this.projectionMatrixInverse),t.set(Qs.x,Qs.y).multiplyScalar(-e/Qs.z),Qs.set(1,1,0.5).applyMatrix4(this.projectionMatrixInverse),i.set(Qs.x,Qs.y).multiplyScalar(-e/Qs.z)}getViewSize(e,t){return this.getViewBounds(e,J0,j0),t.subVectors(j0,J0)}setViewOffset(e,t,i,n,r,s){if(this.aspect=e/t,this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(ps*0.5*this.fov)/this.zoom,i=2*t,n=this.aspect*i,r=-0.5*n,s=this.view;if(this.view!==null&&this.view.enabled){let{fullWidth:a,fullHeight:l}=s;r+=s.offsetX*n/a,t-=s.offsetY*i/l,n*=s.width/a,i*=s.height/l}let o=this.filmOffset;if(o!==0)r+=e*o/this.getFilmWidth();this.projectionMatrix.makePerspective(r,r+n,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);if(t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null)t.object.view=Object.assign({},this.view);return t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class sd extends $s{constructor(){super(new wi(50,1,0.5,500));this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,i=ms*2*e.angle*this.focus,n=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;if(i!==t.fov||n!==t.aspect||r!==t.far)t.fov=i,t.aspect=n,t.far=r,t.updateProjectionMatrix();super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}}class kc extends ur{constructor(e,t,i=0,n=Math.PI/3,r=0,s=2){super(e,t);this.isSpotLight=!0,this.type="SpotLight",this.position.copy(vt.DEFAULT_UP),this.updateMatrix(),this.target=new vt,this.distance=i,this.angle=n,this.penumbra=r,this.decay=s,this.map=null,this.shadow=new sd}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);if(t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture)t.object.map=this.map.toJSON(e).uuid;return t.object.shadow=this.shadow.toJSON(),t}}class od extends $s{constructor(){super(new wi(90,1,0.5,500));this.isPointLightShadow=!0}}class Wr extends ur{constructor(e,t,i=0,n=2){super(e,t);this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=n,this.shadow=new od}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class Xr extends Yo{constructor(e=-1,t=1,i=1,n=-1,r=0.1,s=2000){super();this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=n,this.near=r,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,n,r,s){if(this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2,r=i-e,s=i+e,o=n+t,a=n-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,s=r+l*this.view.width,o-=c*this.view.offsetY,a=o-c*this.view.height}this.projectionMatrix.makeOrthographic(r,s,o,a,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);if(t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null)t.object.view=Object.assign({},this.view);return t}}class ad extends $s{constructor(){super(new Xr(-5,5,5,-5,0.5,500));this.isDirectionalLightShadow=!0}}class Vc extends ur{constructor(e,t){super(e,t);this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(vt.DEFAULT_UP),this.updateMatrix(),this.target=new vt,this.shadow=new ad}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class Wc extends ur{constructor(e,t){super(e,t);this.isAmbientLight=!0,this.type="AmbientLight"}}class Ps{static extractUrlBase(e){let t=e.lastIndexOf("/");if(t===-1)return"./";return e.slice(0,t+1)}static resolveURL(e,t){if(typeof e!=="string"||e==="")return"";if(/^https?:\/\//i.test(t)&&/^\//.test(e))t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1");if(/^(https?:)?\/\//i.test(e))return e;if(/^data:.*,.*$/i.test(e))return e;if(/^blob:.*$/i.test(e))return e;return t+e}}var ld=new WeakMap;class wh extends $i{constructor(e){super(e);if(this.isImageBitmapLoader=!0,typeof createImageBitmap>"u")De("ImageBitmapLoader: createImageBitmap() not supported.");if(typeof fetch>"u")De("ImageBitmapLoader: fetch() not supported.");this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,i,n){if(e===void 0)e="";if(this.path!==void 0)e=this.path+e;e=this.manager.resolveURL(e);let r=this,s=hr.get(`image-bitmap:${e}`);if(s!==void 0){if(r.manager.itemStart(e),s.then){s.then((l)=>{if(ld.has(s)===!0){if(n)n(ld.get(s));r.manager.itemError(e),r.manager.itemEnd(e)}else{if(t)t(l);r.manager.itemEnd(e)}});return}setTimeout(function(){if(t)t(s);r.manager.itemEnd(e)},0);return}let o={};o.credentials=this.withCredentials||this.crossOrigin!=="anonymous"?"include":"same-origin",o.headers=this.requestHeader,o.priority=this.priority,o.cache=this.cache,o.signal=typeof AbortSignal.any==="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let a=fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign({},r.options,{colorSpaceConversion:"none"}))}).then(function(l){if(hr.add(`image-bitmap:${e}`,l),t)t(l);return r.manager.itemEnd(e),l}).catch(function(l){if(n)n(l);ld.set(a,l),hr.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});hr.add(`image-bitmap:${e}`,a),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}var ja=-90,$a=1;class qo extends vt{constructor(e,t,i){super();this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let n=new wi(ja,$a,e,t);n.layers=this.layers,this.add(n);let r=new wi(ja,$a,e,t);r.layers=this.layers,this.add(r);let s=new wi(ja,$a,e,t);s.layers=this.layers,this.add(s);let o=new wi(ja,$a,e,t);o.layers=this.layers,this.add(o);let a=new wi(ja,$a,e,t);a.layers=this.layers,this.add(a);let l=new wi(ja,$a,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,n,r,s,o,a]=t;for(let l of t)this.remove(l);if(e===gn)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),a.up.set(0,1,0),a.lookAt(0,0,-1);else if(e===Zr)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),a.up.set(0,-1,0),a.lookAt(0,0,-1);else throw Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){if(this.parent===null)this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:n}=this;if(this.coordinateSystem!==e.coordinateSystem)this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem();let[r,s,o,a,l,c]=this.children,f=e.getRenderTarget(),u=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;let g=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let x=!1;if(e.isWebGLRenderer===!0)x=e.state.buffers.depth.getReversed();else x=e.reversedDepthBuffer;if(e.setRenderTarget(i,0,n),x&&e.autoClear===!1)e.clearDepth();if(e.render(t,r),e.setRenderTarget(i,1,n),x&&e.autoClear===!1)e.clearDepth();if(e.render(t,s),e.setRenderTarget(i,2,n),x&&e.autoClear===!1)e.clearDepth();if(e.render(t,o),e.setRenderTarget(i,3,n),x&&e.autoClear===!1)e.clearDepth();if(e.render(t,a),e.setRenderTarget(i,4,n),x&&e.autoClear===!1)e.clearDepth();if(e.render(t,l),i.texture.mipmapsAutoUpdate=g,e.setRenderTarget(i,5,n),x&&e.autoClear===!1)e.clearDepth();e.render(t,c),e.setRenderTarget(f,u,h),e.xr.enabled=m,i.texture.needsPMREMUpdate=!0}}class Ah extends wi{constructor(e=[]){super();this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}}class Xc{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){if(this._document=e,e.hidden!==void 0)this._pageVisibilityHandler=WM.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1)}disconnect(){if(this._pageVisibilityHandler!==null)this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null;this._document=null}getDelta(){return this._delta/1000}getElapsed(){return this._elapsed/1000}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){if(this._pageVisibilityHandler!==null&&this._document.hidden===!0)this._delta=0;else this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta;return this}}function WM(){if(this._document.hidden===!1)this.reset()}var cd="\\[\\]\\.:\\/",YM=new RegExp("["+cd+"]","g"),fd="[^"+cd+"]",qM="[^"+cd.replace("\\.","")+"]",KM=/((?:WC+[\/:])*)/.source.replace("WC",fd),ZM=/(WCOD+)?/.source.replace("WCOD",qM),JM=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",fd),jM=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",fd),$M=new RegExp("^"+KM+ZM+JM+jM+"$"),QM=["material","materials","bones","map"];class em{constructor(e,t,i){let n=i||ri.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,n)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,n=this._bindings[i];if(n!==void 0)n.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let n=this._targetGroup.nCachedObjects_,r=i.length;n!==r;++n)i[n].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}}class ri{constructor(e,t,i){this.path=t,this.parsedPath=i||ri.parseTrackName(t),this.node=ri.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){if(!(e&&e.isAnimationObjectGroup))return new ri(e,t,i);else return new ri.Composite(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(YM,"")}static parseTrackName(e){let t=$M.exec(e);if(t===null)throw Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},n=i.nodeName&&i.nodeName.lastIndexOf(".");if(n!==void 0&&n!==-1){let r=i.nodeName.substring(n+1);if(QM.indexOf(r)!==-1)i.nodeName=i.nodeName.substring(0,n),i.objectName=r}if(i.propertyName===null||i.propertyName.length===0)throw Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let s=0;s<r.length;s++){let o=r[s];if(o.name===t||o.uuid===t)return o;let a=i(o.children);if(a)return a}return null},n=i(e.children);if(n)return n}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)e[t++]=i[n]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,{objectName:i,propertyName:n,propertyIndex:r}=t;if(!e)e=ri.findNode(this.rootNode,t.nodeName),this.node=e;if(this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){De("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let l=t.objectIndex;switch(i){case"materials":if(!e.material){it("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){it("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){it("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let c=0;c<e.length;c++)if(e[c].name===l){l=c;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){it("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){it("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){it("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(l!==void 0){if(e[l]===void 0){it("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let s=e[n];if(s===void 0){let l=t.nodeName;it("PropertyBinding: Trying to update property for track: "+l+"."+n+" but it wasn't found.",e);return}let o=this.Versioning.None;if(this.targetObject=e,e.isMaterial===!0)o=this.Versioning.NeedsUpdate;else if(e.isObject3D===!0)o=this.Versioning.MatrixWorldNeedsUpdate;let a=this.BindingType.Direct;if(r!==void 0){if(n==="morphTargetInfluences"){if(!e.geometry){it("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){it("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}if(e.morphTargetDictionary[r]!==void 0)r=e.morphTargetDictionary[r]}a=this.BindingType.ArrayElement,this.resolvedProperty=s,this.propertyIndex=r}else if(s.fromArray!==void 0&&s.toArray!==void 0)a=this.BindingType.HasFromToArray,this.resolvedProperty=s;else if(Array.isArray(s))a=this.BindingType.EntireArray,this.resolvedProperty=s;else this.propertyName=n;this.getValue=this.GetterByBindingType[a],this.setValue=this.SetterByBindingTypeAndVersioning[a][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}ri.Composite=em;ri.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ri.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ri.prototype.GetterByBindingType=[ri.prototype._getValue_direct,ri.prototype._getValue_array,ri.prototype._getValue_arrayElement,ri.prototype._getValue_toArray];ri.prototype.SetterByBindingTypeAndVersioning=[[ri.prototype._setValue_direct,ri.prototype._setValue_direct_setNeedsUpdate,ri.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ri.prototype._setValue_array,ri.prototype._setValue_array_setNeedsUpdate,ri.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ri.prototype._setValue_arrayElement,ri.prototype._setValue_arrayElement_setNeedsUpdate,ri.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ri.prototype._setValue_fromArray,ri.prototype._setValue_fromArray_setNeedsUpdate,ri.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var gF=new Float32Array(1);var tm=new $e;class Rh{constructor(e,t,i=0,n=1/0){this.ray=new Er(e,t),this.near=i,this.far=n,this.camera=null,this.layers=new Ws,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){if(t.isPerspectiveCamera)this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,0.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t;else if(t.isOrthographicCamera)this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t;else it("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return tm.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(tm),this}intersectObject(e,t=!0,i=[]){return hd(e,this,i,t),i.sort(im),i}intersectObjects(e,t=!0,i=[]){for(let n=0,r=e.length;n<r;n++)hd(e[n],this,i,t);return i.sort(im),i}}function im(e,t){return e.distance-t.distance}function hd(e,t,i,n){let r=!0;if(e.layers.test(t.layers)){if(e.raycast(t,i)===!1)r=!1}if(r===!0&&n===!0){let s=e.children;for(let o=0,a=s.length;o<a;o++)hd(s[o],t,i,!0)}}class Ch{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,De("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=performance.now();e=(t-this.oldTime)/1000,this.oldTime=t,this.elapsedTime+=e}return e}}class nm{static{this.prototype.isMatrix2=!0}constructor(e,t,i,n){if(this.elements=[1,0,0,1],e!==void 0)this.set(e,t,i,n)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,n){let r=this.elements;return r[0]=e,r[2]=t,r[1]=i,r[3]=n,this}}function ud(e,t,i,n){let r=nv(n);switch(i){case vf:return e*t;case ma:return e*t/r.components*r.byteLength;case vo:return e*t/r.components*r.byteLength;case sr:return e*t*2/r.components*r.byteLength;case ga:return e*t*2/r.components*r.byteLength;case bf:return e*t*3/r.components*r.byteLength;case ln:return e*t*4/r.components*r.byteLength;case xa:return e*t*4/r.components*r.byteLength;case _a:case ya:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Ma:case va:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Pl:case Ll:return Math.max(e,16)*Math.max(t,8)/4;case Cl:case Il:return Math.max(e,8)*Math.max(t,8)/2;case Dl:case Nl:case Ul:case Bl:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Fl:case bo:case Ol:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Hl:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case zl:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case Gl:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case kl:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case Vl:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case Wl:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case Xl:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case Yl:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case ql:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case Kl:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case Zl:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case Jl:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case jl:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case $l:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case Ql:case ec:case tc:return Math.ceil(e/4)*Math.ceil(t/4)*16;case ic:case nc:return Math.ceil(e/4)*Math.ceil(t/4)*8;case So:case rc:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw Error(`Unable to determine texture byte length for ${i} format.`)}function nv(e){switch(e){case Ji:case xf:return{byteLength:1,components:1};case us:case _f:case Ii:return{byteLength:2,components:1};case da:case pa:return{byteLength:2,components:4};case an:case ua:case Wi:return{byteLength:4,components:1};case yf:case Mf:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}if(typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:xl}}));if(typeof window<"u")if(window.__THREE__)De("WARNING: Multiple instances of Three.js being imported.");else window.__THREE__=xl;function Ph(){let e=null,t=!1,i=null,n=null;function r(s,o){n=e.requestAnimationFrame(r),i(s,o)}return{start:function(){if(t===!0)return;if(i===null)return;if(e===null)return;n=e.requestAnimationFrame(r),t=!0},stop:function(){if(e!==null)e.cancelAnimationFrame(n);t=!1},setAnimationLoop:function(s){i=s},setContext:function(s){e=s}}}function rm(e){let t=new WeakMap;function i(a,l){let{array:c,usage:f}=a,u=c.byteLength,h=e.createBuffer();e.bindBuffer(l,h),e.bufferData(l,c,f),a.onUploadCallback();let m;if(c instanceof Float32Array)m=e.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)m=e.HALF_FLOAT;else if(c instanceof Uint16Array)if(a.isFloat16BufferAttribute)m=e.HALF_FLOAT;else m=e.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=e.SHORT;else if(c instanceof Uint32Array)m=e.UNSIGNED_INT;else if(c instanceof Int32Array)m=e.INT;else if(c instanceof Int8Array)m=e.BYTE;else if(c instanceof Uint8Array)m=e.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=e.UNSIGNED_BYTE;else throw Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){let{array:f,updateRanges:u}=l;if(e.bindBuffer(c,a),u.length===0)e.bufferSubData(c,0,f);else{u.sort((m,g)=>m.start-g.start);let h=0;for(let m=1;m<u.length;m++){let g=u[h],x=u[m];if(x.start<=g.start+g.count+1)g.count=Math.max(g.count,x.start+x.count-g.start);else++h,u[h]=x}u.length=h+1;for(let m=0,g=u.length;m<g;m++){let x=u[m];e.bufferSubData(c,x.start*f.BYTES_PER_ELEMENT,f,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){if(a.isInterleavedBufferAttribute)a=a.data;return t.get(a)}function s(a){if(a.isInterleavedBufferAttribute)a=a.data;let l=t.get(a);if(l)e.deleteBuffer(l.buffer),t.delete(a)}function o(a,l){if(a.isInterleavedBufferAttribute)a=a.data;if(a.isGLBufferAttribute){let f=t.get(a);if(!f||f.version<a.version)t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,i(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var sm=`
#ifdef USE_ALPHAHASH

	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;

#endif
`;var om=`
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
`;var am=`
#ifdef USE_ALPHAMAP

	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;

#endif
`;var lm=`
#ifdef USE_ALPHAMAP

	uniform sampler2D alphaMap;

#endif
`;var cm=`
#ifdef USE_ALPHATEST

	#ifdef ALPHA_TO_COVERAGE

	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;

	#else

	if ( diffuseColor.a < alphaTest ) discard;

	#endif

#endif
`;var fm=`
#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif
`;var hm=`
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
`;var um=`
#ifdef USE_AOMAP

	uniform sampler2D aoMap;
	uniform float aoMapIntensity;

#endif
`;var dm=`
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
`;var pm=`
#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif
`;var mm=`
vec3 transformed = vec3( position );

#ifdef USE_ALPHAHASH

	vPosition = vec3( position );

#endif
`;var gm=`
vec3 objectNormal = vec3( normal );

#ifdef USE_TANGENT

	vec3 objectTangent = vec3( tangent.xyz );

#endif
`;var xm=`

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

`;var _m=`

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

`;var ym=`
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
`;var Mm=`
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
`;var vm=`
#if NUM_CLIPPING_PLANES > 0

	varying vec3 vClipPosition;

	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];

#endif
`;var bm=`
#if NUM_CLIPPING_PLANES > 0

	varying vec3 vClipPosition;

#endif
`;var Sm=`
#if NUM_CLIPPING_PLANES > 0

	vClipPosition = - mvPosition.xyz;

#endif
`;var Em=`
#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )

	diffuseColor *= vColor;

#endif
`;var Tm=`
#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )

	varying vec4 vColor;

#endif
`;var wm=`
#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )

	varying vec4 vColor;

#endif
`;var Am=`
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
`;var Rm=`
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
`;var Cm=`

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
`;var Pm=`
#ifdef USE_DISPLACEMENTMAP

	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;

#endif
`;var Im=`
#ifdef USE_DISPLACEMENTMAP

	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );

#endif
`;var Lm=`
#ifdef USE_EMISSIVEMAP

	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );

	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE

		// use inline sRGB decode until browsers properly support SRGB8_ALPHA8 with video textures (#26516)

		emissiveColor = sRGBTransferEOTF( emissiveColor );

	#endif

	totalEmissiveRadiance *= emissiveColor.rgb;

#endif
`;var Dm=`
#ifdef USE_EMISSIVEMAP

	uniform sampler2D emissiveMap;

#endif
`;var Nm=`
gl_FragColor = linearToOutputTexel( gl_FragColor );
`;var Fm=`

vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}

vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}

vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}

`;var Um=`
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
`;var Bm=`
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
`;var Om=`
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
`;var Hm=`
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
`;var zm=`
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
`;var Gm=`
#ifdef USE_FOG

	vFogDepth = - mvPosition.z;

#endif
`;var km=`
#ifdef USE_FOG

	varying float vFogDepth;

#endif
`;var Vm=`
#ifdef USE_FOG

	#ifdef FOG_EXP2

		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );

	#else

		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );

	#endif

	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );

#endif
`;var Wm=`
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
`;var Xm=`

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
`;var Ym=`
#ifdef USE_LIGHTMAP

	uniform sampler2D lightMap;
	uniform float lightMapIntensity;

#endif
`;var qm=`
LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;
`;var Km=`
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
`;var Zm=`
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
`;var Jm=`
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
`;var jm=`
ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;
`;var $m=`
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
`;var Qm=`
BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;
`;var eg=`
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
`;var tg=`
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
`;var ig=`

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
`;var ng=`
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
`;var rg=`
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
`;var sg=`
#if defined( RE_IndirectDiffuse )

	#if defined( LAMBERT ) || defined( PHONG )

		irradiance += iblIrradiance;

	#endif

	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );

#endif

#if defined( RE_IndirectSpecular )

	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );

#endif
`;var og=`
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
`;var ag=`
#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )

	// Doing a strict comparison with == 1.0 can cause noise artifacts
	// on some platforms. See issue #17623.
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;

#endif
`;var lg=`
#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )

	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;

#endif
`;var cg=`
#ifdef USE_LOGARITHMIC_DEPTH_BUFFER

	varying float vFragDepth;
	varying float vIsPerspective;

#endif
`;var fg=`
#ifdef USE_LOGARITHMIC_DEPTH_BUFFER

	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );

#endif
`;var hg=`
#ifdef USE_MAP

	vec4 sampledDiffuseColor = texture2D( map, vMapUv );

	#ifdef DECODE_VIDEO_TEXTURE

		// use inline sRGB decode until browsers properly support SRGB8_ALPHA8 with video textures (#26516)

		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );

	#endif

	diffuseColor *= sampledDiffuseColor;

#endif
`;var ug=`
#ifdef USE_MAP

	uniform sampler2D map;

#endif
`;var dg=`
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
`;var pg=`
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
`;var mg=`
float metalnessFactor = metalness;

#ifdef USE_METALNESSMAP

	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );

	// reads channel B, compatible with a combined OcclusionRoughnessMetallic (RGB) texture
	metalnessFactor *= texelMetalness.b;

#endif
`;var gg=`
#ifdef USE_METALNESSMAP

	uniform sampler2D metalnessMap;

#endif
`;var xg=`
#ifdef USE_INSTANCING_MORPH

	float morphTargetInfluences[ MORPHTARGETS_COUNT ];

	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;

	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {

		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;

	}
#endif
`;var _g=`
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
`;var yg=`
#ifdef USE_MORPHNORMALS

	// morphTargetBaseInfluence is set based on BufferGeometry.morphTargetsRelative value:
	// When morphTargetsRelative is false, this is set to 1 - sum(influences); this results in normal = sum((target - base) * influence)
	// When morphTargetsRelative is true, this is set to 1; as a result, all morph targets are simply added to the base after weighting
	objectNormal *= morphTargetBaseInfluence;

	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {

		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];

	}

#endif
`;var Mg=`
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
`;var vg=`
#ifdef USE_MORPHTARGETS

	// morphTargetBaseInfluence is set based on BufferGeometry.morphTargetsRelative value:
	// When morphTargetsRelative is false, this is set to 1 - sum(influences); this results in position = sum((target - base) * influence)
	// When morphTargetsRelative is true, this is set to 1; as a result, all morph targets are simply added to the base after weighting
	transformed *= morphTargetBaseInfluence;

	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {

		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];

	}

#endif
`;var bg=`
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

`;var Sg=`

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
`;var Eg=`
#ifndef FLAT_SHADED

	varying vec3 vNormal;

	#ifdef USE_TANGENT

		varying vec3 vTangent;
		varying vec3 vBitangent;

	#endif

#endif
`;var Tg=`
#ifndef FLAT_SHADED

	varying vec3 vNormal;

	#ifdef USE_TANGENT

		varying vec3 vTangent;
		varying vec3 vBitangent;

	#endif

#endif
`;var wg=`
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
`;var Ag=`
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
`;var Rg=`
#ifdef USE_CLEARCOAT

	vec3 clearcoatNormal = nonPerturbedNormal;

#endif
`;var Cg=`
#ifdef USE_CLEARCOAT_NORMALMAP

	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;

	clearcoatNormal = normalize( tbn2 * clearcoatMapN );

#endif
`;var Pg=`

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
`;var Ig=`

#ifdef USE_IRIDESCENCEMAP

	uniform sampler2D iridescenceMap;

#endif

#ifdef USE_IRIDESCENCE_THICKNESSMAP

	uniform sampler2D iridescenceThicknessMap;

#endif
`;var Lg=`
#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif

#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif

gl_FragColor = vec4( outgoingLight, diffuseColor.a );
`;var Dg=`
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
`;var Ng=`
#ifdef PREMULTIPLIED_ALPHA

	gl_FragColor.rgb *= gl_FragColor.a;

#endif
`;var Fg=`
vec4 mvPosition = vec4( transformed, 1.0 );

#ifdef USE_BATCHING

	mvPosition = batchingMatrix * mvPosition;

#endif

#ifdef USE_INSTANCING

	mvPosition = instanceMatrix * mvPosition;

#endif

mvPosition = modelViewMatrix * mvPosition;

gl_Position = projectionMatrix * mvPosition;
`;var Ug=`
#ifdef DITHERING

	gl_FragColor.rgb = dithering( gl_FragColor.rgb );

#endif
`;var Bg=`
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
`;var Og=`
float roughnessFactor = roughness;

#ifdef USE_ROUGHNESSMAP

	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );

	// reads channel G, compatible with a combined OcclusionRoughnessMetallic (RGB) texture
	roughnessFactor *= texelRoughness.g;

#endif
`;var Hg=`
#ifdef USE_ROUGHNESSMAP

	uniform sampler2D roughnessMap;

#endif
`;var zg=`
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
`;var Gg=`

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
`;var kg=`

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


`;var Vg=`
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
`;var Wg=`
#ifdef USE_SKINNING

	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );

#endif
`;var Xg=`
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
`;var Yg=`
#ifdef USE_SKINNING

	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );

	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;

	transformed = ( bindMatrixInverse * skinned ).xyz;

#endif
`;var qg=`
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
`;var Kg=`
float specularStrength;

#ifdef USE_SPECULARMAP

	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;

#else

	specularStrength = 1.0;

#endif
`;var Zg=`
#ifdef USE_SPECULARMAP

	uniform sampler2D specularMap;

#endif
`;var Jg=`
#if defined( TONE_MAPPING )

	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );

#endif
`;var jg=`
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
`;var $g=`
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
`;var Qg=`
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
`;var ex=`
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
`;var tx=`
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
`;var ix=`
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
`;var nx=`
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
`;var rx=`
varying vec2 vUv;
uniform mat3 uvTransform;

void main() {

	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;

	gl_Position = vec4( position.xy, 1.0, 1.0 );

}
`,sx=`
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
`;var ox=`
varying vec3 vWorldDirection;

#include <common>

void main() {

	vWorldDirection = transformDirection( position, modelMatrix );

	#include <begin_vertex>
	#include <project_vertex>

	gl_Position.z = gl_Position.w; // set z to camera.far

}
`,ax=`

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
`;var lx=`
varying vec3 vWorldDirection;

#include <common>

void main() {

	vWorldDirection = transformDirection( position, modelMatrix );

	#include <begin_vertex>
	#include <project_vertex>

	gl_Position.z = gl_Position.w; // set z to camera.far

}
`,cx=`
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
`;var fx=`
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
`,hx=`
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
`;var ux=`
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
`,dx=`
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
`;var px=`
varying vec3 vWorldDirection;

#include <common>

void main() {

	vWorldDirection = transformDirection( position, modelMatrix );

	#include <begin_vertex>
	#include <project_vertex>

}
`,mx=`
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
`;var gx=`
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
`,xx=`
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
`;var _x=`
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
`,yx=`
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
`;var Mx=`
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
`,vx=`
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
`;var bx=`
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
`,Sx=`
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
`;var Ex=`
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
`,Tx=`
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
`;var wx=`
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
`,Ax=`
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
`;var Rx=`
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
`,Cx=`
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
`;var Px=`
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
`,Ix=`
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
`;var Lx=`
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
`,Dx=`
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
`;var Nx=`
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
`,Fx=`
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
`;var Ux=`
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
`,Bx=`
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
`;var Nt={alphahash_fragment:sm,alphahash_pars_fragment:om,alphamap_fragment:am,alphamap_pars_fragment:lm,alphatest_fragment:cm,alphatest_pars_fragment:fm,aomap_fragment:hm,aomap_pars_fragment:um,batching_pars_vertex:dm,batching_vertex:pm,begin_vertex:mm,beginnormal_vertex:gm,bsdfs:xm,iridescence_fragment:_m,bumpmap_pars_fragment:ym,clipping_planes_fragment:Mm,clipping_planes_pars_fragment:vm,clipping_planes_pars_vertex:bm,clipping_planes_vertex:Sm,color_fragment:Em,color_pars_fragment:Tm,color_pars_vertex:wm,color_vertex:Am,common:Rm,defaultnormal_vertex:Cm,displacementmap_pars_vertex:Pm,displacementmap_vertex:Im,emissivemap_fragment:Lm,emissivemap_pars_fragment:Dm,colorspace_fragment:Nm,colorspace_pars_fragment:Fm,envmap_fragment:Um,envmap_common_pars_fragment:Bm,envmap_pars_fragment:Om,envmap_pars_vertex:Hm,envmap_physical_pars_fragment:Jm,envmap_vertex:zm,fog_vertex:Gm,fog_pars_vertex:km,fog_fragment:Vm,fog_pars_fragment:Wm,gradientmap_pars_fragment:Xm,lightmap_pars_fragment:Ym,lights_lambert_fragment:qm,lights_lambert_pars_fragment:Km,lights_pars_begin:Zm,lights_toon_fragment:jm,lights_toon_pars_fragment:$m,lights_phong_fragment:Qm,lights_phong_pars_fragment:eg,lights_physical_fragment:tg,lights_physical_pars_fragment:ig,lights_fragment_begin:ng,lights_fragment_maps:rg,lights_fragment_end:sg,lightprobes_pars_fragment:og,logdepthbuf_fragment:ag,logdepthbuf_pars_fragment:lg,logdepthbuf_pars_vertex:cg,logdepthbuf_vertex:fg,map_fragment:hg,map_pars_fragment:ug,map_particle_fragment:dg,map_particle_pars_fragment:pg,metalnessmap_fragment:mg,metalnessmap_pars_fragment:gg,morphinstance_vertex:xg,morphcolor_vertex:_g,morphnormal_vertex:yg,morphtarget_pars_vertex:Mg,morphtarget_vertex:vg,normal_fragment_begin:bg,normal_fragment_maps:Sg,normal_pars_fragment:Eg,normal_pars_vertex:Tg,normal_vertex:wg,normalmap_pars_fragment:Ag,clearcoat_normal_fragment_begin:Rg,clearcoat_normal_fragment_maps:Cg,clearcoat_pars_fragment:Pg,iridescence_pars_fragment:Ig,opaque_fragment:Lg,packing:Dg,premultiplied_alpha_fragment:Ng,project_vertex:Fg,dithering_fragment:Ug,dithering_pars_fragment:Bg,roughnessmap_fragment:Og,roughnessmap_pars_fragment:Hg,shadowmap_pars_fragment:zg,shadowmap_pars_vertex:Gg,shadowmap_vertex:kg,shadowmask_pars_fragment:Vg,skinbase_vertex:Wg,skinning_pars_vertex:Xg,skinning_vertex:Yg,skinnormal_vertex:qg,specularmap_fragment:Kg,specularmap_pars_fragment:Zg,tonemapping_fragment:Jg,tonemapping_pars_fragment:jg,transmission_fragment:$g,transmission_pars_fragment:Qg,uv_pars_fragment:ex,uv_pars_vertex:tx,uv_vertex:ix,worldpos_vertex:nx,background_vert:rx,background_frag:sx,backgroundCube_vert:ox,backgroundCube_frag:ax,cube_vert:lx,cube_frag:cx,depth_vert:fx,depth_frag:hx,distance_vert:ux,distance_frag:dx,equirect_vert:px,equirect_frag:mx,linedashed_vert:gx,linedashed_frag:xx,meshbasic_vert:_x,meshbasic_frag:yx,meshlambert_vert:Mx,meshlambert_frag:vx,meshmatcap_vert:bx,meshmatcap_frag:Sx,meshnormal_vert:Ex,meshnormal_frag:Tx,meshphong_vert:wx,meshphong_frag:Ax,meshphysical_vert:Rx,meshphysical_frag:Cx,meshtoon_vert:Px,meshtoon_frag:Ix,points_vert:Lx,points_frag:Dx,shadow_vert:Nx,shadow_frag:Fx,sprite_vert:Ux,sprite_frag:Bx};var Ke={common:{diffuse:{value:new Se(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new mt},alphaMap:{value:null},alphaMapTransform:{value:new mt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new mt}},envmap:{envMap:{value:null},envMapRotation:{value:new mt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:0.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new mt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new mt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new mt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new mt},normalScale:{value:new ne(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new mt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new mt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new mt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new mt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:0.00025},fogNear:{value:1},fogFar:{value:2000},fogColor:{value:new Se(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Se(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new mt},alphaTest:{value:0},uvTransform:{value:new mt}},sprite:{diffuse:{value:new Se(16777215)},opacity:{value:1},center:{value:new ne(0.5,0.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new mt},alphaMap:{value:null},alphaMapTransform:{value:new mt},alphaTest:{value:0}}};var dr={basic:{uniforms:On([Ke.common,Ke.specularmap,Ke.envmap,Ke.aomap,Ke.lightmap,Ke.fog]),vertexShader:Nt.meshbasic_vert,fragmentShader:Nt.meshbasic_frag},lambert:{uniforms:On([Ke.common,Ke.specularmap,Ke.envmap,Ke.aomap,Ke.lightmap,Ke.emissivemap,Ke.bumpmap,Ke.normalmap,Ke.displacementmap,Ke.fog,Ke.lights,{emissive:{value:new Se(0)},envMapIntensity:{value:1}}]),vertexShader:Nt.meshlambert_vert,fragmentShader:Nt.meshlambert_frag},phong:{uniforms:On([Ke.common,Ke.specularmap,Ke.envmap,Ke.aomap,Ke.lightmap,Ke.emissivemap,Ke.bumpmap,Ke.normalmap,Ke.displacementmap,Ke.fog,Ke.lights,{emissive:{value:new Se(0)},specular:{value:new Se(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Nt.meshphong_vert,fragmentShader:Nt.meshphong_frag},standard:{uniforms:On([Ke.common,Ke.envmap,Ke.aomap,Ke.lightmap,Ke.emissivemap,Ke.bumpmap,Ke.normalmap,Ke.displacementmap,Ke.roughnessmap,Ke.metalnessmap,Ke.fog,Ke.lights,{emissive:{value:new Se(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Nt.meshphysical_vert,fragmentShader:Nt.meshphysical_frag},toon:{uniforms:On([Ke.common,Ke.aomap,Ke.lightmap,Ke.emissivemap,Ke.bumpmap,Ke.normalmap,Ke.displacementmap,Ke.gradientmap,Ke.fog,Ke.lights,{emissive:{value:new Se(0)}}]),vertexShader:Nt.meshtoon_vert,fragmentShader:Nt.meshtoon_frag},matcap:{uniforms:On([Ke.common,Ke.bumpmap,Ke.normalmap,Ke.displacementmap,Ke.fog,{matcap:{value:null}}]),vertexShader:Nt.meshmatcap_vert,fragmentShader:Nt.meshmatcap_frag},points:{uniforms:On([Ke.points,Ke.fog]),vertexShader:Nt.points_vert,fragmentShader:Nt.points_frag},dashed:{uniforms:On([Ke.common,Ke.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Nt.linedashed_vert,fragmentShader:Nt.linedashed_frag},depth:{uniforms:On([Ke.common,Ke.displacementmap]),vertexShader:Nt.depth_vert,fragmentShader:Nt.depth_frag},normal:{uniforms:On([Ke.common,Ke.bumpmap,Ke.normalmap,Ke.displacementmap,{opacity:{value:1}}]),vertexShader:Nt.meshnormal_vert,fragmentShader:Nt.meshnormal_frag},sprite:{uniforms:On([Ke.sprite,Ke.fog]),vertexShader:Nt.sprite_vert,fragmentShader:Nt.sprite_frag},background:{uniforms:{uvTransform:{value:new mt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Nt.background_vert,fragmentShader:Nt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new mt}},vertexShader:Nt.backgroundCube_vert,fragmentShader:Nt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Nt.cube_vert,fragmentShader:Nt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Nt.equirect_vert,fragmentShader:Nt.equirect_frag},distance:{uniforms:On([Ke.common,Ke.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1000}}]),vertexShader:Nt.distance_vert,fragmentShader:Nt.distance_frag},shadow:{uniforms:On([Ke.lights,Ke.fog,{color:{value:new Se(0)},opacity:{value:1}}]),vertexShader:Nt.shadow_vert,fragmentShader:Nt.shadow_frag}};dr.physical={uniforms:On([dr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new mt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new mt},clearcoatNormalScale:{value:new ne(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new mt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new mt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new mt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new mt},sheen:{value:0},sheenColor:{value:new Se(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new mt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new mt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new mt},transmissionSamplerSize:{value:new ne},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new mt},attenuationDistance:{value:0},attenuationColor:{value:new Se(0)},specularColor:{value:new Se(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new mt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new mt},anisotropyVector:{value:new ne},anisotropyMap:{value:null},anisotropyMapTransform:{value:new mt}}]),vertexShader:Nt.meshphysical_vert,fragmentShader:Nt.meshphysical_frag};var Ih={r:0,b:0,g:0},Sv=new $e,Ox=new mt;Ox.set(-1,0,0,0,1,0,0,0,1);function Hx(e,t,i,n,r,s){let o=new Se(0),a=r===!0?0:1,l,c,f=null,u=0,h=null;function m(y){let M=y.isScene===!0?y.background:null;if(M&&M.isTexture){let b=y.backgroundBlurriness>0;M=t.get(M,b)}return M}function g(y){let M=!1,b=m(y);if(b===null)d(o,a);else if(b&&b.isColor)d(b,1),M=!0;let T=e.xr.getEnvironmentBlendMode();if(T==="additive")i.buffers.color.setClear(0,0,0,1,s);else if(T==="alpha-blend")i.buffers.color.setClear(0,0,0,0,s);if(e.autoClear||M)i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil)}function x(y,M){let b=m(M);if(b&&b.isCubeTexture){if(c===void 0)c=new ae(new bt(1,1,1),new Di({name:"BackgroundCubeMaterial",uniforms:Es(dr.backgroundCube.uniforms),vertexShader:dr.backgroundCube.vertexShader,fragmentShader:dr.backgroundCube.fragmentShader,side:Mi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(T,S,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c);if(c.material.uniforms.envMap.value=b,c.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Sv.makeRotationFromEuler(M.backgroundRotation)).transpose(),b.isRenderTargetTexture===!1)c.material.uniforms.backgroundRotation.value.premultiply(Ox);if(c.material.toneMapped=Et.getTransfer(b.colorSpace)!==Wt,f!==b||u!==b.version||h!==e.toneMapping)c.material.needsUpdate=!0,f=b,u=b.version,h=e.toneMapping;c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null)}else if(b&&b.isTexture){if(l===void 0)l=new ae(new ei(2,2),new Di({name:"BackgroundMaterial",uniforms:Es(dr.background.uniforms),vertexShader:dr.background.vertexShader,fragmentShader:dr.background.fragmentShader,side:Zn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l);if(l.material.uniforms.t2D.value=b,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=Et.getTransfer(b.colorSpace)!==Wt,b.matrixAutoUpdate===!0)b.updateMatrix();if(l.material.uniforms.uvTransform.value.copy(b.matrix),f!==b||u!==b.version||h!==e.toneMapping)l.material.needsUpdate=!0,f=b,u=b.version,h=e.toneMapping;l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null)}}function d(y,M){y.getRGB(Ih,_h(e)),i.buffers.color.setClear(Ih.r,Ih.g,Ih.b,M,s)}function p(){if(c!==void 0)c.geometry.dispose(),c.material.dispose(),c=void 0;if(l!==void 0)l.geometry.dispose(),l.material.dispose(),l=void 0}return{getClearColor:function(){return o},setClearColor:function(y,M=1){o.set(y),a=M,d(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(y){a=y,d(o,a)},render:g,addToRenderList:x,dispose:p}}function zx(e,t){let i=e.getParameter(e.MAX_VERTEX_ATTRIBS),n={},r=h(null),s=r,o=!1;function a(P,O,Q,L,K){let D=!1,N=u(P,L,Q,O);if(s!==N)s=N,c(s.object);if(D=m(P,L,Q,K),D)g(P,L,Q,K);if(K!==null)t.update(K,e.ELEMENT_ARRAY_BUFFER);if(D||o){if(o=!1,b(P,O,Q,L),K!==null)e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(K).buffer)}}function l(){return e.createVertexArray()}function c(P){return e.bindVertexArray(P)}function f(P){return e.deleteVertexArray(P)}function u(P,O,Q,L){let K=L.wireframe===!0,D=n[O.id];if(D===void 0)D={},n[O.id]=D;let N=P.isInstancedMesh===!0?P.id:0,se=D[N];if(se===void 0)se={},D[N]=se;let Y=se[Q.id];if(Y===void 0)Y={},se[Q.id]=Y;let W=Y[K];if(W===void 0)W=h(l()),Y[K]=W;return W}function h(P){let O=[],Q=[],L=[];for(let K=0;K<i;K++)O[K]=0,Q[K]=0,L[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:Q,attributeDivisors:L,object:P,attributes:{},index:null}}function m(P,O,Q,L){let K=s.attributes,D=O.attributes,N=0,se=Q.getAttributes();for(let Y in se)if(se[Y].location>=0){let ee=K[Y],de=D[Y];if(de===void 0){if(Y==="instanceMatrix"&&P.instanceMatrix)de=P.instanceMatrix;if(Y==="instanceColor"&&P.instanceColor)de=P.instanceColor}if(ee===void 0)return!0;if(ee.attribute!==de)return!0;if(de&&ee.data!==de.data)return!0;N++}if(s.attributesNum!==N)return!0;if(s.index!==L)return!0;return!1}function g(P,O,Q,L){let K={},D=O.attributes,N=0,se=Q.getAttributes();for(let Y in se)if(se[Y].location>=0){let ee=D[Y];if(ee===void 0){if(Y==="instanceMatrix"&&P.instanceMatrix)ee=P.instanceMatrix;if(Y==="instanceColor"&&P.instanceColor)ee=P.instanceColor}let de={};if(de.attribute=ee,ee&&ee.data)de.data=ee.data;K[Y]=de,N++}s.attributes=K,s.attributesNum=N,s.index=L}function x(){let P=s.newAttributes;for(let O=0,Q=P.length;O<Q;O++)P[O]=0}function d(P){p(P,0)}function p(P,O){let Q=s.newAttributes,L=s.enabledAttributes,K=s.attributeDivisors;if(Q[P]=1,L[P]===0)e.enableVertexAttribArray(P),L[P]=1;if(K[P]!==O)e.vertexAttribDivisor(P,O),K[P]=O}function y(){let P=s.newAttributes,O=s.enabledAttributes;for(let Q=0,L=O.length;Q<L;Q++)if(O[Q]!==P[Q])e.disableVertexAttribArray(Q),O[Q]=0}function M(P,O,Q,L,K,D,N){if(N===!0)e.vertexAttribIPointer(P,O,Q,K,D);else e.vertexAttribPointer(P,O,Q,L,K,D)}function b(P,O,Q,L){x();let K=L.attributes,D=Q.getAttributes(),N=O.defaultAttributeValues;for(let se in D){let Y=D[se];if(Y.location>=0){let W=K[se];if(W===void 0){if(se==="instanceMatrix"&&P.instanceMatrix)W=P.instanceMatrix;if(se==="instanceColor"&&P.instanceColor)W=P.instanceColor}if(W!==void 0){let ee=W.normalized,de=W.itemSize,X=t.get(W);if(X===void 0)continue;let{buffer:oe,type:ye,bytesPerElement:ve}=X,ke=ye===e.INT||ye===e.UNSIGNED_INT||W.gpuType===ua;if(W.isInterleavedBufferAttribute){let Ne=W.data,xt=Ne.isInterleavedBuffer===!0?Ne.stride:Ne.itemSize,Xe=W.offset;if(Ne.isInstancedInterleavedBuffer||Ne.isInstancedBufferAttribute){for(let Ye=0;Ye<Y.locationSize;Ye++)p(Y.location+Ye,Ne.meshPerAttribute);if(P.isInstancedMesh!==!0&&L._maxInstanceCount===void 0)L._maxInstanceCount=Ne.meshPerAttribute*Ne.count}else for(let Ye=0;Ye<Y.locationSize;Ye++)d(Y.location+Ye);e.bindBuffer(e.ARRAY_BUFFER,oe);for(let Ye=0;Ye<Y.locationSize;Ye++)M(Y.location+Ye,de/Y.locationSize,ye,ee,xt*ve,(Xe+de/Y.locationSize*Ye)*ve,ke)}else{if(W.isInstancedBufferAttribute){for(let Ne=0;Ne<Y.locationSize;Ne++)p(Y.location+Ne,W.meshPerAttribute);if(P.isInstancedMesh!==!0&&L._maxInstanceCount===void 0)L._maxInstanceCount=W.meshPerAttribute*W.count}else for(let Ne=0;Ne<Y.locationSize;Ne++)d(Y.location+Ne);e.bindBuffer(e.ARRAY_BUFFER,oe);for(let Ne=0;Ne<Y.locationSize;Ne++)M(Y.location+Ne,de/Y.locationSize,ye,ee,de*ve,de/Y.locationSize*Ne*ve,ke)}}else if(N!==void 0){let ee=N[se];if(ee!==void 0)switch(ee.length){case 2:e.vertexAttrib2fv(Y.location,ee);break;case 3:e.vertexAttrib3fv(Y.location,ee);break;case 4:e.vertexAttrib4fv(Y.location,ee);break;default:e.vertexAttrib1fv(Y.location,ee)}}}}y()}function T(){w();for(let P in n){let O=n[P];for(let Q in O){let L=O[Q];for(let K in L){let D=L[K];for(let N in D)f(D[N].object),delete D[N];delete L[K]}}delete n[P]}}function S(P){if(n[P.id]===void 0)return;let O=n[P.id];for(let Q in O){let L=O[Q];for(let K in L){let D=L[K];for(let N in D)f(D[N].object),delete D[N];delete L[K]}}delete n[P.id]}function _(P){for(let O in n){let Q=n[O];for(let L in Q){let K=Q[L];if(K[P.id]===void 0)continue;let D=K[P.id];for(let N in D)f(D[N].object),delete D[N];delete K[P.id]}}}function v(P){for(let O in n){let Q=n[O],L=P.isInstancedMesh===!0?P.id:0,K=Q[L];if(K===void 0)continue;for(let D in K){let N=K[D];for(let se in N)f(N[se].object),delete N[se];delete K[D]}if(delete Q[L],Object.keys(Q).length===0)delete n[O]}}function w(){if(I(),o=!0,s===r)return;s=r,c(s.object)}function I(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:w,resetDefaultState:I,dispose:T,releaseStatesOfGeometry:S,releaseStatesOfObject:v,releaseStatesOfProgram:_,initAttributes:x,enableAttribute:d,disableUnusedAttributes:y}}function Gx(e,t,i){let n;function r(l){n=l}function s(l,c){e.drawArrays(n,l,c),i.update(c,n,1)}function o(l,c,f){if(f===0)return;e.drawArraysInstanced(n,l,c,f),i.update(c,n,f)}function a(l,c,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,f);let h=0;for(let m=0;m<f;m++)h+=c[m];i.update(h,n,1)}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a}function kx(e,t,i,n){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){let _=t.get("EXT_texture_filter_anisotropic");r=e.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(_){if(_!==ln&&n.convert(_)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))return!1;return!0}function a(_){let v=_===Ii&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));if(_!==Ji&&_!==Wi&&!v&&n.convert(_)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))return!1;return!0}function l(_){if(_==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";_="mediump"}if(_==="mediump"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0)return"mediump"}return"lowp"}let c=i.precision!==void 0?i.precision:"highp",f=l(c);if(f!==c)De("WebGLRenderer:",c,"not supported, using",f,"instead."),c=f;let u=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),h=i.logarithmicDepthBuffer===!0&&u===!1;if(i.reversedDepthBuffer===!0&&u===!1)De("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");if(i.logarithmicDepthBuffer===!0&&u===!0)De("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let m=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),g=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=e.getParameter(e.MAX_TEXTURE_SIZE),d=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),p=e.getParameter(e.MAX_VERTEX_ATTRIBS),y=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),M=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),T=e.getParameter(e.MAX_SAMPLES),S=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:u,maxTextures:m,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:d,maxAttributes:p,maxVertexUniforms:y,maxVaryings:M,maxFragmentUniforms:b,maxSamples:T,samples:S}}function Vx(e){let t=this,i=null,n=0,r=!1,s=!1,o=new Xn,a=new mt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,h){let m=u.length!==0||h||n!==0||r;return r=h,n=u.length,m},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,h){i=f(u,h,0)},this.setState=function(u,h,m){let{clippingPlanes:g,clipIntersection:x,clipShadows:d}=u,p=e.get(u);if(!r||g===null||g.length===0||s&&!d)if(s)f(null);else c();else{let y=s?0:n,M=y*4,b=p.clippingState||null;l.value=b,b=f(g,h,M,m);for(let T=0;T!==M;++T)b[T]=i[T];p.clippingState=b,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=y}};function c(){if(l.value!==i)l.value=i,l.needsUpdate=n>0;t.numPlanes=n,t.numIntersection=0}function f(u,h,m,g){let x=u!==null?u.length:0,d=null;if(x!==0){if(d=l.value,g!==!0||d===null){let p=m+x*4,y=h.matrixWorldInverse;if(a.getNormalMatrix(y),d===null||d.length<p)d=new Float32Array(p);for(let M=0,b=m;M!==x;++M,b+=4)o.copy(u[M]).applyMatrix4(y,a),o.normal.toArray(d,b),d[b+3]=o.constant}l.value=d,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,d}}class eo extends Ti{constructor(e=1,t={}){super(e,e,t);this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},n=[i,i,i,i,i,i];this.texture=new Ks(n),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},n=new bt(5,5,5),r=new Di({name:"CubemapFromEquirect",uniforms:Es(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Mi,blending:yr});r.uniforms.tEquirect.value=t;let s=new ae(n,r),o=t.minFilter;if(t.minFilter===mn)t.minFilter=_i;return new qo(1,10,this).update(e,s),t.minFilter=o,s.geometry.dispose(),s.material.dispose(),this}clear(e,t=!0,i=!0,n=!0){let r=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,i,n);e.setRenderTarget(r)}}var Wx=256,Ev=3,Tv=20,Kx=256,Zx=16,wv=3,Av=new R,Rv=new Se;class to{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new qo(1,10,null),this._boxMesh=new ae(new bt(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,i=0.1,n=100,r={}){let{size:s=256,position:o=Av}=r,a=this._renderer;this._setSize(s);let l=this._allocateTarget(),c=this._getSourceTarget(!0);if(t>0)c.texture.mipmapsAutoUpdate=!1;let{autoClear:f,autoClearColor:u,autoClearDepth:h,autoClearStencil:m}=a,g=e.background;if(a.autoClear=!0,a.autoClearColor=!0,a.autoClearDepth=!0,a.autoClearStencil=!0,g===null)e.background=a.getClearColor(Rv);let x=new qo(i,n,c);if(x.position.copy(o),x.update(a,e),a.autoClear=f,a.autoClearColor=u,a.autoClearDepth=h,a.autoClearStencil=m,e.background=g,t>0)c.texture.mipmapsAutoUpdate=!0,this._blur(l,t);return this._applyPMREM(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){if(this._cubemapMaterial===null)this._cubemapMaterial=qx(),this._compileMaterial(this._cubemapMaterial)}compileEquirectangularShader(){if(this._equirectMaterial===null)this._equirectMaterial=Yx(),this._compileMaterial(this._equirectMaterial)}dispose(){if(this._sourceTarget!==null)this._sourceTarget.dispose();if(this._cubemapMaterial!==null)this._cubemapMaterial.dispose();if(this._equirectMaterial!==null)this._equirectMaterial.dispose();if(this._blurMaterial!==null)this._blurMaterial.dispose();if(this._ggxMaterial!==null)this._ggxMaterial.dispose();if(this._integrationMaterial!==null)this._integrationMaterial.dispose();this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(Wx,xu(e))}_fromTexture(e,t){if(e.mapping===Mr||e.mapping===hs)this._setSize(e.image.length===0?Wx:e.image[0].width||e.image[0].image.width);else this._setSize(e.image.width/4);let i=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(i),i}_allocateTarget(){let e=this._cubeSize,t=Xx(e,!1,!1),i=Math.log2(e)-Ev;for(let n=0;n<=i;n++)t.texture.mipmaps.push({width:e>>n,height:e>>n});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,i=this._sourceTarget;if(i===null||i.width!==t||e&&i.depthBuffer===!1){if(i!==null)i.dispose();this._sourceTarget=Xx(t,!0,e)}return this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,i){let n=this._boxMesh,r=this._cubeCamera;n.material=i,r.renderTarget=e,r.activeMipmapLevel=t;let s=e.width>>t;e.viewport.set(0,0,s,s),r.update(this._renderer,n),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;if(e.mapping===Mr||e.mapping===hs){if(this._cubemapMaterial===null)this._cubemapMaterial=qx();t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1}else{if(this._equirectMaterial===null)this._equirectMaterial=Yx();t=this._equirectMaterial}t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){if(this._ggxMaterial===null)this._ggxMaterial=Cv(),this._integrationMaterial=Pv();let t=this._cubeSize,i=e.texture.mipmaps.length-1,n=this._ggxMaterial.uniforms;n.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/Zx);for(let s=0;s<=i;s++){let o=to.lodToRoughness(s,i);if(s>i-wv)r.roughness.value=o,this._renderCube(e,s,this._integrationMaterial);else{let a=o>0?Math.log2(t)+0.5*Math.log2(6/(Kx*Math.pow(o,4)))+0.5:0;n.roughness.value=o,n.lodBias.value=a,this._renderCube(e,s,this._ggxMaterial)}}}_blur(e,t){if(this._blurMaterial===null)this._blurMaterial=Iv();let i=this._blurMaterial,n=i.uniforms,r=this._sourceTarget;n.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,n.envMap.value=r.texture,this._renderCube(e,0,i),n.envMap.value=e.texture,this._renderCube(r,0,i)}}function Xx(e,t,i){return new eo(e,{minFilter:mn,generateMipmaps:t,type:Ii,colorSpace:Tn,depthBuffer:i})}function Yc(e,t,i){return new Di({name:e,uniforms:t,vertexShader:Nt.cube_vert,fragmentShader:i,side:Mi,blending:yr,depthTest:!1,depthWrite:!1})}function Cv(){return Yc("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Kx}u

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
	`)}function Pv(){return Yc("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Zx}},`

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
	`)}function Iv(){return Yc("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Tv}
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
	`)}function Yx(){return Yc("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function qx(){return Yc("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Jx(e){let t=new WeakMap,i=new WeakMap,n=null;function r(h,m=!1){if(h===null||h===void 0)return null;if(m)return o(h);return s(h)}function s(h){if(h&&h.isTexture){let m=h.mapping;if(m===wl||m===Al)if(t.has(h)){let g=t.get(h).texture;return a(g,h.mapping)}else{let g=h.image;if(g&&g.height>0){let x=new eo(g.height);return x.fromEquirectangularTexture(e,h),t.set(h,x),h.addEventListener("dispose",c),a(x.texture,h.mapping)}else return null}}return h}function o(h){if(h&&h.isTexture&&h.isPMREMTexture!==!0){let m=h.mapping,g=m===wl||m===Al,x=m===Mr||m===hs;if(g||x){let d=i.get(h),p=d!==void 0?d.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==p){if(n===null)n=new to(e);return d=g?n.fromEquirectangular(h,d):n.fromCubemap(h,d),d.texture.pmremVersion=h.pmremVersion,i.set(h,d),d.texture}else if(d!==void 0)return d.texture;else{let y=h.image;if(g&&y&&y.height>0||x&&y&&l(y)){if(n===null)n=new to(e);return d=g?n.fromEquirectangular(h):n.fromCubemap(h),d.texture.pmremVersion=h.pmremVersion,i.set(h,d),h.addEventListener("dispose",f),d.texture}else return null}}}return h}function a(h,m){if(m===wl)h.mapping=Mr;else if(m===Al)h.mapping=hs;return h}function l(h){let m=0,g=6;for(let x=0;x<g;x++)if(h[x]!==void 0)m++;return m===g}function c(h){let m=h.target;m.removeEventListener("dispose",c);let g=t.get(m);if(g!==void 0)t.delete(m),g.dispose()}function f(h){let m=h.target;m.removeEventListener("dispose",f);let g=i.get(m);if(g!==void 0)i.delete(m),g.dispose()}function u(){if(t=new WeakMap,i=new WeakMap,n!==null)n.dispose(),n=null}return{get:r,dispose:u}}function jx(e){let t={};function i(n){if(t[n]!==void 0)return t[n];let r=e.getExtension(n);return t[n]=r,r}return{has:function(n){return i(n)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(n){let r=i(n);if(r===null)br("WebGLRenderer: "+n+" extension not supported.");return r}}}function $x(e,t,i,n){let r={},s=new WeakMap,o=new FinalizationRegistry((g)=>delete r[g]);function a(g){l(g.target)}function l(g){if(g.index!==null)t.remove(g.index);for(let d in g.attributes)t.remove(g.attributes[d]);g.removeEventListener("dispose",a),delete r[g.id],o.unregister(g);let x=s.get(g);if(x)t.remove(x),s.delete(g);if(n.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0)delete g._maxInstanceCount;i.memory.geometries--}function c(g,x){if(r[x.id]!==void 0)return x;return x.addEventListener("dispose",a),r[x.id]=new WeakRef(x),o.register(x,x.id,x),i.memory.geometries++,x}function f(g){let x=g.attributes;for(let d in x)t.update(x[d],e.ARRAY_BUFFER)}function u(g){let x=g.index,d=g.attributes.position,p=0;if(d===void 0)return;let y=x!==null?x.array.length:d.array.length/3-1,b=new(d.count>=65535?dc:uc)(Math.ceil(y/3)*6,1),T=b.array;if(x!==null){let _=x.array;p=x.version;for(let v=0,w=0;v<y;v+=3){let I=_[v+0],P=_[v+1],O=_[v+2];T[w++]=I,T[w++]=P,T[w++]=P,T[w++]=O,T[w++]=O,T[w++]=I}}else{p=d.version;for(let _=0,v=0;_<y;_+=3){let w=_+0,I=_+1,P=_+2;T[v++]=w,T[v++]=I,T[v++]=I,T[v++]=P,T[v++]=P,T[v++]=w}}b.version=p;let S=s.get(g);if(S)t.remove(S);s.set(g,b)}function h(g){let x=s.get(g);if(x){let d=g.index;if(d!==null){if(x.version<d.version)u(g)}}else u(g);return s.get(g)}function m(){for(let g in r){let x=r[g].deref();if(x!==void 0)l(x)}}return{get:c,update:f,getWireframeAttribute:h,dispose:m}}function Qx(e,t,i){let n;function r(u){n=u}let s,o;function a(u){s=u.type,o=u.bytesPerElement}function l(u,h){e.drawElements(n,h,s,u*o),i.update(h,n,1)}function c(u,h,m){if(m===0)return;e.drawElementsInstanced(n,h,s,u*o,m),i.update(h,n,m)}function f(u,h,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,s,u,0,m);let x=0;for(let d=0;d<m;d++)x+=h[d];i.update(x,n,1)}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=f}function e_(e){let t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(i.calls++,o){case e.TRIANGLES:i.triangles+=a*(s/3);break;case e.LINES:i.lines+=a*(s/2);break;case e.LINE_STRIP:i.lines+=a*(s-1);break;case e.LINE_LOOP:i.lines+=a*s;break;case e.POINTS:i.points+=a*s;break;default:it("WebGLInfo: Unknown draw mode:",o);break}}function r(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:r,update:n}}function t_(e,t,i){let n=new WeakMap,r=new Xt;function s(o,a,l){let c=o.morphTargetInfluences,f=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=f!==void 0?f.length:0,h=n.get(a);if(h===void 0||h.count!==u){let w=function(){_.dispose(),n.delete(a),a.removeEventListener("dispose",w)};if(h!==void 0)h.texture.dispose();let m=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,d=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],y=a.morphAttributes.color||[],M=0;if(m===!0)M=1;if(g===!0)M=2;if(x===!0)M=3;let b=a.attributes.position.count*M,T=1;if(b>t.maxTextureSize)T=Math.ceil(b/t.maxTextureSize),b=t.maxTextureSize;let S=new Float32Array(b*T*4*u),_=new Ro(S,b,T,u);_.type=Wi,_.needsUpdate=!0;let v=M*4;for(let I=0;I<u;I++){let P=d[I],O=p[I],Q=y[I],L=b*T*4*I;for(let K=0;K<P.count;K++){let D=K*v;if(m===!0)r.fromBufferAttribute(P,K),S[L+D+0]=r.x,S[L+D+1]=r.y,S[L+D+2]=r.z,S[L+D+3]=0;if(g===!0)r.fromBufferAttribute(O,K),S[L+D+4]=r.x,S[L+D+5]=r.y,S[L+D+6]=r.z,S[L+D+7]=0;if(x===!0)r.fromBufferAttribute(Q,K),S[L+D+8]=r.x,S[L+D+9]=r.y,S[L+D+10]=r.z,S[L+D+11]=Q.itemSize===4?r.w:1}}h={count:u,texture:_,size:new ne(b,T)},n.set(a,h),a.addEventListener("dispose",w)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(e,"morphTexture",o.morphTexture,i);else{let m=0;for(let x=0;x<c.length;x++)m+=c[x];let g=a.morphTargetsRelative?1:1-m;l.getUniforms().setValue(e,"morphTargetBaseInfluence",g),l.getUniforms().setValue(e,"morphTargetInfluences",c)}l.getUniforms().setValue(e,"morphTargetsTexture",h.texture,i),l.getUniforms().setValue(e,"morphTargetsTextureSize",h.size)}return{update:s}}function i_(e,t,i,n,r){let s=new WeakMap;function o(c){let f=r.render.frame,u=c.geometry,h=t.get(c,u);if(s.get(h)!==f)t.update(h),s.set(h,f);if(c.isInstancedMesh){if(c.hasEventListener("dispose",l)===!1)c.addEventListener("dispose",l);if(s.get(c)!==f){if(i.update(c.instanceMatrix,e.ARRAY_BUFFER),c.instanceColor!==null)i.update(c.instanceColor,e.ARRAY_BUFFER);s.set(c,f)}}if(c.isSkinnedMesh){let m=c.skeleton;if(s.get(m)!==f)m.update(),s.set(m,f)}return h}function a(){s=new WeakMap}function l(c){let f=c.target;if(f.removeEventListener("dispose",l),n.releaseStatesOfObject(f),i.remove(f.instanceMatrix),f.instanceColor!==null)i.remove(f.instanceColor)}return{update:o,dispose:a}}var Lv={[oa]:"LINEAR_TONE_MAPPING",[aa]:"REINHARD_TONE_MAPPING",[la]:"CINEON_TONE_MAPPING",[Hs]:"ACES_FILMIC_TONE_MAPPING",[fa]:"AGX_TONE_MAPPING",[ha]:"NEUTRAL_TONE_MAPPING",[ca]:"CUSTOM_TONE_MAPPING"};function n_(e,t,i,n,r,s){let o=new Ti(t,i,{type:e,depthBuffer:r,stencilBuffer:s,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=null,f=new et;f.setAttribute("position",new Be([-1,3,0,-1,-1,0,3,-1,0],3)),f.setAttribute("uv",new Be([0,2,0,0,2,0],2));let u=new Wo({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),h=new ae(f,u),m=new Xr(-1,1,1,-1,0,1),g=null,x=null,d=!1,p,y=null,M=[],b=!1;this.setSize=function(T,S){if(o.setSize(T,S),a!==null)a.setSize(T,S);if(l!==null)l.setSize(T,S);for(let _=0;_<M.length;_++){let v=M[_];if(v.setSize)v.setSize(T,S)}},this.setEffects=function(T){M=T,b=M.length>0&&M[0].isRenderPass===!0;let{width:S,height:_}=o;if(M.length>0&&a===null)a=new Ti(S,_,{type:Ii,depthBuffer:!1,stencilBuffer:!1}),l=new Ti(S,_,{type:Ii,depthBuffer:!1,stencilBuffer:!1});let v=r===!0&&M.some((w)=>w.needsDepthTexture===!0);if(v!==(o.depthTexture!==null)){if(v===!0&&c===null){if(c=new cr(S,_),s===!0)c.format=rr,c.type=Nr}o.dispose(),o.depthTexture=v?c:null,o.resolveDepthBuffer=v,o.storeMultisampledDepthBuffer=v}for(let w=0;w<M.length;w++){let I=M[w];if(I.setSize)I.setSize(S,_);if(v&&I.needsDepthTexture===!0&&I.setDepthTexture)I.setDepthTexture(c)}},this.begin=function(T,S){if(d)return!1;if(T.toneMapping===nr&&M.length===0)return!1;if(y=S,S!==null){let{width:_,height:v}=S;if(o.width!==_||o.height!==v)this.setSize(_,v)}if(b===!1)T.setRenderTarget(o);return p=T.toneMapping,T.toneMapping=nr,!0},this.hasRenderPass=function(){return b},this.end=function(T,S){T.toneMapping=p,d=!0;let _=o,v=a;for(let w=0;w<M.length;w++){let I=M[w];if(I.enabled===!1)continue;if(I.render(T,v,_,S),I.needsSwap!==!1)_=v,v=v===a?l:a}if(g!==T.outputColorSpace||x!==T.toneMapping){if(g=T.outputColorSpace,x=T.toneMapping,u.defines={},Et.getTransfer(g)===Wt)u.defines.SRGB_TRANSFER="";let w=Lv[x];if(w)u.defines[w]="";u.needsUpdate=!0}u.uniforms.tDiffuse.value=_.texture,T.setRenderTarget(y),T.render(h,m),y=null,d=!1},this.isCompositing=function(){return d},this.dispose=function(){if(o.dispose(),a!==null)a.dispose();if(l!==null)l.dispose();f.dispose(),u.dispose()}}var f_=new Jt,h_=new cr(1,1),u_=new Xa(1),d_=new Ro,p_=new wa,m_=new Ks,r_=[],s_=[],o_=new Float32Array(16),a_=new Float32Array(9),l_=new Float32Array(4);function Qa(e,t,i){let n=e[0];if(n<=0||n>0)return e;let r=t*i,s=r_[r];if(s===void 0)s=new Float32Array(r),r_[r]=s;if(t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=i,e[o].toArray(s,a)}return s}function hn(e,t){if(e.length!==t.length)return!1;for(let i=0,n=e.length;i<n;i++)if(e[i]!==t[i])return!1;return!0}function un(e,t){for(let i=0,n=t.length;i<n;i++)e[i]=t[i]}function Lh(e,t){let i=s_[t];if(i===void 0)i=new Int32Array(t),s_[t]=i;for(let n=0;n!==t;++n)i[n]=e.allocateTextureUnit();return i}function Dv(e,t){let i=this.cache;if(i[0]===t)return;e.uniform1f(this.addr,t),i[0]=t}function Nv(e,t){let i=this.cache;if(t.x!==void 0){if(i[0]!==t.x||i[1]!==t.y)e.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y}else{if(hn(i,t))return;e.uniform2fv(this.addr,t),un(i,t)}}function Fv(e,t){let i=this.cache;if(t.x!==void 0){if(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)e.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z}else if(t.r!==void 0){if(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)e.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b}else{if(hn(i,t))return;e.uniform3fv(this.addr,t),un(i,t)}}function Uv(e,t){let i=this.cache;if(t.x!==void 0){if(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)e.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w}else{if(hn(i,t))return;e.uniform4fv(this.addr,t),un(i,t)}}function Bv(e,t){let i=this.cache,n=t.elements;if(n===void 0){if(hn(i,t))return;e.uniformMatrix2fv(this.addr,!1,t),un(i,t)}else{if(hn(i,n))return;l_.set(n),e.uniformMatrix2fv(this.addr,!1,l_),un(i,n)}}function Ov(e,t){let i=this.cache,n=t.elements;if(n===void 0){if(hn(i,t))return;e.uniformMatrix3fv(this.addr,!1,t),un(i,t)}else{if(hn(i,n))return;a_.set(n),e.uniformMatrix3fv(this.addr,!1,a_),un(i,n)}}function Hv(e,t){let i=this.cache,n=t.elements;if(n===void 0){if(hn(i,t))return;e.uniformMatrix4fv(this.addr,!1,t),un(i,t)}else{if(hn(i,n))return;o_.set(n),e.uniformMatrix4fv(this.addr,!1,o_),un(i,n)}}function zv(e,t){let i=this.cache;if(i[0]===t)return;e.uniform1i(this.addr,t),i[0]=t}function Gv(e,t){let i=this.cache;if(t.x!==void 0){if(i[0]!==t.x||i[1]!==t.y)e.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y}else{if(hn(i,t))return;e.uniform2iv(this.addr,t),un(i,t)}}function kv(e,t){let i=this.cache;if(t.x!==void 0){if(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)e.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z}else{if(hn(i,t))return;e.uniform3iv(this.addr,t),un(i,t)}}function Vv(e,t){let i=this.cache;if(t.x!==void 0){if(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)e.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w}else{if(hn(i,t))return;e.uniform4iv(this.addr,t),un(i,t)}}function Wv(e,t){let i=this.cache;if(i[0]===t)return;e.uniform1ui(this.addr,t),i[0]=t}function Xv(e,t){let i=this.cache;if(t.x!==void 0){if(i[0]!==t.x||i[1]!==t.y)e.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y}else{if(hn(i,t))return;e.uniform2uiv(this.addr,t),un(i,t)}}function Yv(e,t){let i=this.cache;if(t.x!==void 0){if(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)e.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z}else{if(hn(i,t))return;e.uniform3uiv(this.addr,t),un(i,t)}}function qv(e,t){let i=this.cache;if(t.x!==void 0){if(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w}else{if(hn(i,t))return;e.uniform4uiv(this.addr,t),un(i,t)}}function Dh(e){if(e.version===0)e.compareFunction=Lf,e.needsUpdate=!0;return e}function Kv(e,t,i){let n=this.cache,r=i.allocateTextureUnit();if(n[0]!==r)e.uniform1i(this.addr,r),n[0]=r;let s;if(this.type===e.SAMPLER_2D_SHADOW)s=Dh(h_);else s=f_;i.setTexture2D(t||s,r)}function Zv(e,t,i){let n=this.cache,r=i.allocateTextureUnit();if(n[0]!==r)e.uniform1i(this.addr,r),n[0]=r;i.setTexture3D(t||p_,r)}function Jv(e,t,i){let n=this.cache,r=i.allocateTextureUnit();if(n[0]!==r)e.uniform1i(this.addr,r),n[0]=r;let s;if(this.type===e.SAMPLER_CUBE_SHADOW)s=Dh(u_);else s=m_;i.setTextureCube(t||s,r)}function jv(e,t,i){let n=this.cache,r=i.allocateTextureUnit();if(n[0]!==r)e.uniform1i(this.addr,r),n[0]=r;i.setTexture2DArray(t||d_,r)}function $v(e){switch(e){case 5126:return Dv;case 35664:return Nv;case 35665:return Fv;case 35666:return Uv;case 35674:return Bv;case 35675:return Ov;case 35676:return Hv;case 5124:case 35670:return zv;case 35667:case 35671:return Gv;case 35668:case 35672:return kv;case 35669:case 35673:return Vv;case 5125:return Wv;case 36294:return Xv;case 36295:return Yv;case 36296:return qv;case 35678:case 36198:case 36298:case 36306:case 35682:return Kv;case 35679:case 36299:case 36307:return Zv;case 35680:case 36300:case 36308:case 36293:return Jv;case 36289:case 36303:case 36311:case 36292:return jv}}function Qv(e,t){e.uniform1fv(this.addr,t)}function eb(e,t){let i=Qa(t,this.size,2);e.uniform2fv(this.addr,i)}function tb(e,t){let i=Qa(t,this.size,3);e.uniform3fv(this.addr,i)}function ib(e,t){let i=Qa(t,this.size,4);e.uniform4fv(this.addr,i)}function nb(e,t){let i=Qa(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,i)}function rb(e,t){let i=Qa(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,i)}function sb(e,t){let i=Qa(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,i)}function ob(e,t){e.uniform1iv(this.addr,t)}function ab(e,t){e.uniform2iv(this.addr,t)}function lb(e,t){e.uniform3iv(this.addr,t)}function cb(e,t){e.uniform4iv(this.addr,t)}function fb(e,t){e.uniform1uiv(this.addr,t)}function hb(e,t){e.uniform2uiv(this.addr,t)}function ub(e,t){e.uniform3uiv(this.addr,t)}function db(e,t){e.uniform4uiv(this.addr,t)}function pb(e,t,i){let n=this.cache,r=t.length,s=Lh(i,r);if(!hn(n,s))e.uniform1iv(this.addr,s),un(n,s);let o;if(this.type===e.SAMPLER_2D_SHADOW)o=Dh(h_);else o=f_;for(let a=0;a!==r;++a)i.setTexture2D(t[a]||o,s[a])}function mb(e,t,i){let n=this.cache,r=t.length,s=Lh(i,r);if(!hn(n,s))e.uniform1iv(this.addr,s),un(n,s);for(let o=0;o!==r;++o)i.setTexture3D(t[o]||p_,s[o])}function gb(e,t,i){let n=this.cache,r=t.length,s=Lh(i,r);if(!hn(n,s))e.uniform1iv(this.addr,s),un(n,s);let o;if(this.type===e.SAMPLER_CUBE_SHADOW)o=Dh(u_);else o=m_;for(let a=0;a!==r;++a)i.setTextureCube(t[a]||o,s[a])}function xb(e,t,i){let n=this.cache,r=t.length,s=Lh(i,r);if(!hn(n,s))e.uniform1iv(this.addr,s),un(n,s);for(let o=0;o!==r;++o)i.setTexture2DArray(t[o]||d_,s[o])}function _b(e){switch(e){case 5126:return Qv;case 35664:return eb;case 35665:return tb;case 35666:return ib;case 35674:return nb;case 35675:return rb;case 35676:return sb;case 5124:case 35670:return ob;case 35667:case 35671:return ab;case 35668:case 35672:return lb;case 35669:case 35673:return cb;case 5125:return fb;case 36294:return hb;case 36295:return ub;case 36296:return db;case 35678:case 36198:case 36298:case 36306:case 35682:return pb;case 35679:case 36299:case 36307:return mb;case 35680:case 36300:case 36308:case 36293:return gb;case 36289:case 36303:case 36311:case 36292:return xb}}class g_{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=$v(t.type)}}class x_{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=_b(t.type)}}class __{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let n=this.seq;for(let r=0,s=n.length;r!==s;++r){let o=n[r];o.setValue(e,t[o.id],i)}}}var dd=/(\w+)(\])?(\[|\.)?/g;function c_(e,t){e.seq.push(t),e.map[t.id]=t}function yb(e,t,i){let n=e.name,r=n.length;dd.lastIndex=0;while(!0){let s=dd.exec(n),o=dd.lastIndex,a=s[1],l=s[2]==="]",c=s[3];if(l)a=a|0;if(c===void 0||c==="["&&o+2===r){c_(i,c===void 0?new g_(a,e,t):new x_(a,e,t));break}else{let u=i.map[a];if(u===void 0)u=new __(a),c_(i,u);i=u}}}class Ko{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let o=e.getActiveUniform(t,s),a=e.getUniformLocation(t,o.name);yb(o,a,this)}let n=[],r=[];for(let s of this.seq)if(s.type===e.SAMPLER_2D_SHADOW||s.type===e.SAMPLER_CUBE_SHADOW||s.type===e.SAMPLER_2D_ARRAY_SHADOW)n.push(s);else r.push(s);if(n.length>0)this.seq=n.concat(r)}setValue(e,t,i,n){let r=this.map[t];if(r!==void 0)r.setValue(e,i,n)}setOptional(e,t,i){let n=t[i];if(n!==void 0)this.setValue(e,i,n)}static upload(e,t,i,n){for(let r=0,s=t.length;r!==s;++r){let o=t[r],a=i[o.id];if(a.needsUpdate!==!1)o.setValue(e,a.value,n)}}static seqWithValue(e,t){let i=[];for(let n=0,r=e.length;n!==r;++n){let s=e[n];if(s.id in t)i.push(s)}return i}}function pd(e,t,i){let n=e.createShader(t);return e.shaderSource(n,i),e.compileShader(n),n}var Mb=37297,vb=0;function bb(e,t){let i=e.split(`
`),n=[],r=Math.max(t-6,0),s=Math.min(t+6,i.length);for(let o=r;o<s;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${i[o]}`)}return n.join(`
`)}var y_=new mt;function Sb(e){Et._getMatrix(y_,Et.workingColorSpace,e);let t=`mat3( ${y_.elements.map((i)=>i.toFixed(4))} )`;switch(Et.getTransfer(e)){case To:return[t,"LinearTransferOETF"];case Wt:return[t,"sRGBTransferOETF"];default:return De("WebGLProgram: Unsupported color space: ",e),[t,"LinearTransferOETF"]}}function M_(e,t,i){let n=e.getShaderParameter(t,e.COMPILE_STATUS),s=(e.getShaderInfoLog(t)||"").trim();if(n&&s==="")return"";let o=/ERROR: 0:(\d+)/.exec(s);if(o){let a=parseInt(o[1]);return i.toUpperCase()+`

`+s+`

`+bb(e.getShaderSource(t),a)}else return s}function Eb(e,t){let i=Sb(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${i[1]}( vec4( ${i[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var Tb={[oa]:"Linear",[aa]:"Reinhard",[la]:"Cineon",[Hs]:"ACESFilmic",[fa]:"AgX",[ha]:"Neutral",[ca]:"Custom"};function wb(e,t){let i=Tb[t];if(i===void 0)return De("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+e+"( vec3 color ) { return LinearToneMapping( color ); }";return"vec3 "+e+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}var Nh=new R;function Ab(){Et.getLuminanceCoefficients(Nh);let e=Nh.x.toFixed(4),t=Nh.y.toFixed(4),i=Nh.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${t}, ${i} );`,"\treturn dot( weights, rgb );","}"].join(`
`)}function Rb(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(qc).join(`
`)}function Cb(e){let t=[];for(let i in e){let n=e[i];if(n===!1)continue;t.push("#define "+i+" "+n)}return t.join(`
`)}function Pb(e,t){let i={},n=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){let s=e.getActiveAttrib(t,r),o=s.name,a=1;if(s.type===e.FLOAT_MAT2)a=2;if(s.type===e.FLOAT_MAT3)a=3;if(s.type===e.FLOAT_MAT4)a=4;i[o]={type:s.type,location:e.getAttribLocation(t,o),locationSize:a}}return i}function qc(e){return e!==""}function v_(e,t){let i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function b_(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Ib=/^[ \t]*#include +<([\w\d./]+)>/gm;function md(e){return e.replace(Ib,Lb)}function Lb(e,t){let i=Nt[t];if(i===void 0)throw Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return md(i)}var Db=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function S_(e){return e.replace(Db,Nb)}function Nb(e,t,i,n){let r="";for(let s=parseInt(t);s<parseInt(i);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function E_(e){let t=`precision ${e.precision} float;
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
#define LOW_PRECISION`;return t}var Fb={[sa]:"SHADOWMAP_TYPE_PCF",[_o]:"SHADOWMAP_TYPE_VSM"};function Ub(e){return Fb[e.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Bb={[hs]:"ENVMAP_MODE_REFRACTION"};function Ob(e){if(e.envMap===!1)return"ENVMAP_MODE_REFLECTION";return Bb[e.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Hb={[yo]:"ENVMAP_BLENDING_MULTIPLY",[Pp]:"ENVMAP_BLENDING_MIX",[Ip]:"ENVMAP_BLENDING_ADD"};function zb(e){if(e.envMap===!1)return"ENVMAP_BLENDING_NONE";return Hb[e.combine]||"ENVMAP_BLENDING_NONE"}function T_(e,t,i,n){let r=e.getContext(),{defines:s,vertexShader:o,fragmentShader:a}=i,l=Ub(i),c=i.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",f=Ob(i),u=zb(i),h=Rb(i),m=Cb(s),g=r.createProgram(),x,d,p=i.glslVersion?"#version "+i.glslVersion+`
`:"";if(i.isRawShaderMaterial){if(x=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,m].filter(qc).join(`
`),x.length>0)x+=`
`;if(d=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,m].filter(qc).join(`
`),d.length>0)d+=`
`}else x=[E_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,m,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+f:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+i.diffuseRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexNormals?"#define HAS_NORMAL":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+l:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","\tattribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","\tattribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","\tuniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","\tattribute vec2 uv1;","#endif","#ifdef USE_UV2","\tattribute vec2 uv2;","#endif","#ifdef USE_UV3","\tattribute vec2 uv3;","#endif","#ifdef USE_TANGENT","\tattribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","\tattribute vec4 color;","#elif defined( USE_COLOR )","\tattribute vec3 color;","#endif","#ifdef USE_SKINNING","\tattribute vec4 skinIndex;","\tattribute vec4 skinWeight;","#endif",`
`].filter(qc).join(`
`),d=[E_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,m,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+c:"",i.envMap?"#define "+f:"",i.envMap?"#define "+u:"",i.envMapPMREM?"#define ENVMAP_MAX_LOD "+i.envMapMaxLod+".0":"",i.envMapPMREM?"#define ENVMAP_SIZE "+i.envMapSize+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",i.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.retroreflection?"#define USE_RETROREFLECTION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+l:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==nr?"#define TONE_MAPPING":"",i.toneMapping!==nr?Nt.tonemapping_pars_fragment:"",i.toneMapping!==nr?wb("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",Nt.colorspace_pars_fragment,Eb("linearToOutputTexel",i.outputColorSpace),Ab(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(qc).join(`
`);if(o=md(o),o=v_(o,i),o=b_(o,i),a=md(a),a=v_(a,i),a=b_(a,i),o=S_(o),a=S_(a),i.isRawShaderMaterial!==!0)p=`#version 300 es
`,x=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,d=["#define varying in",i.glslVersion===pu?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===pu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d;let y=p+x+o,M=p+d+a,b=pd(r,r.VERTEX_SHADER,y),T=pd(r,r.FRAGMENT_SHADER,M);if(r.attachShader(g,b),r.attachShader(g,T),i.index0AttributeName!==void 0)r.bindAttribLocation(g,0,i.index0AttributeName);else if(i.hasPositionAttribute===!0)r.bindAttribLocation(g,0,"position");r.linkProgram(g);function S(I){if(e.debug.checkShaderErrors){let P=r.getProgramInfoLog(g)||"",O=r.getShaderInfoLog(b)||"",Q=r.getShaderInfoLog(T)||"",L=P.trim(),K=O.trim(),D=Q.trim(),N=!0,se=!0;if(r.getProgramParameter(g,r.LINK_STATUS)===!1)if(N=!1,typeof e.debug.onShaderError==="function")e.debug.onShaderError(r,g,b,T);else{let Y=M_(r,b,"vertex"),W=M_(r,T,"fragment");it("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(g,r.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+L+`
`+Y+`
`+W)}else if(L!=="")De("WebGLProgram: Program Info Log:",L);else if(K===""||D==="")se=!1;if(se)I.diagnostics={runnable:N,programLog:L,vertexShader:{log:K,prefix:x},fragmentShader:{log:D,prefix:d}}}r.deleteShader(b),r.deleteShader(T),_=new Ko(r,g),v=Pb(r,g)}let _;this.getUniforms=function(){if(_===void 0)S(this);return _};let v;this.getAttributes=function(){if(v===void 0)S(this);return v};let w=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){if(w===!1)w=r.getProgramParameter(g,Mb);return w},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(g),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=vb++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=b,this.fragmentShader=T,this}var Gb=0;class gd{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){let n=this._getShaderCacheForMaterial(e);if(n.has(t)===!1)n.add(t),t.usedTimes++;if(n.has(i)===!1)n.add(i),i.usedTimes++;return this}remove(e){let t=this.materialCache.get(e);for(let i of t)if(i.usedTimes--,i.usedTimes===0)this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);if(i===void 0)i=new Set,t.set(e,i);return i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);if(i===void 0)i=new w_(e),t.set(e,i);return i}}class w_{constructor(e){this.id=Gb++,this.code=e,this.usedTimes=0}}function kb(e){return e===sr||e===bo||e===So}function A_(e,t,i,n,r,s){let o=new Ws,a=new gd,l=new Set,c=[],f=new Map,u=n.logarithmicDepthBuffer,h={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(_){if(l.add(_),_===0)return"uv";return`uv${_}`}function g(_,v,w,I,P,O){let Q=I.fog,L=P.geometry,K=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?I.environment:null,D=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,N=t.get(_.envMap||K,D),se=h[_.type],Y=n.precision;if(_.precision!==null){if(Y=n.getMaxPrecision(_.precision),Y!==_.precision)De("WebGLProgram.getParameters:",_.precision,"not supported, using",Y,"instead.")}let W=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,ee=W!==void 0?W.length:0,de=0;if(L.morphAttributes.position!==void 0)de=1;if(L.morphAttributes.normal!==void 0)de=2;if(L.morphAttributes.color!==void 0)de=3;let X,oe,ye,ve;if(se){let Ge=dr[se];X=Ge.vertexShader,oe=Ge.fragmentShader}else{X=_.vertexShader,oe=_.fragmentShader;let Ge=a.getVertexShaderStage(_),$t=a.getFragmentShaderStage(_);a.update(_,Ge,$t),ye=Ge.id,ve=$t.id}let ke=e.getRenderTarget(),Ne=e.state.buffers.depth.getReversed(),xt=P.isInstancedMesh===!0,Xe=P.isBatchedMesh===!0,Ye=!!_.map,Tt=!!_.matcap,ge=!!N,Ee=ge&&N.isPMREMTexture===!0,Ce=!!_.aoMap,Ve=!!_.lightMap,We=!!_.bumpMap&&_.wireframe===!1,st=!!_.normalMap,Oe=!!_.displacementMap,Lt=!!_.emissiveMap,wt=!!_.metalnessMap,Dt=!!_.roughnessMap,H=_.anisotropy>0,Bt=_.clearcoat>0,Rt=_.diffuseRoughness>0,si=_.dispersion>0,Le=_.retroreflectivity>0,Ht=_.iridescence>0,q=_.sheen>0,te=_.transmission>0,Je=H&&!!_.anisotropyMap,C=Bt&&!!_.clearcoatMap,E=Bt&&!!_.clearcoatNormalMap,U=Bt&&!!_.clearcoatRoughnessMap,me=Rt&&!!_.diffuseRoughnessMap,le=Ht&&!!_.iridescenceMap,Te=Ht&&!!_.iridescenceThicknessMap,Re=q&&!!_.sheenColorMap,J=q&&!!_.sheenRoughnessMap,fe=!!_.specularMap,Pe=!!_.specularColorMap,B=!!_.specularIntensityMap,ue=te&&!!_.transmissionMap,he=te&&!!_.thicknessMap,pe=!!_.gradientMap,be=!!_.alphaMap,Me=_.alphaTest>0,tt=!!_.alphaHash,rt=!!_.extensions,He=nr;if(_.toneMapped){if(ke===null||ke.isXRRenderTarget===!0)He=e.toneMapping}let ft=Ee?N.isCompressedCubeTexture?N.image[0].mipmaps:N.mipmaps:null,St={shaderID:se,shaderType:_.type,shaderName:_.name,vertexShader:X,fragmentShader:oe,defines:_.defines,customVertexShaderID:ye,customFragmentShaderID:ve,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:Y,batching:Xe,batchingColor:Xe&&P._colorsTexture!==null,instancing:xt,instancingColor:xt&&P.instanceColor!==null,instancingMorph:xt&&P.morphTexture!==null,outputColorSpace:ke===null?e.outputColorSpace:ke.isXRRenderTarget===!0?ke.texture.colorSpace:Et.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Ye,matcap:Tt,envMap:ge,envMapMode:ge&&N.mapping,envMapPMREM:Ee,envMapMaxLod:Ee?ft.length-1:null,envMapSize:Ee?ft[0].width:null,aoMap:Ce,lightMap:Ve,bumpMap:We,normalMap:st,displacementMap:Oe,emissiveMap:Lt,normalMapObjectSpace:st&&_.normalMapType===Fp,normalMapTangentSpace:st&&_.normalMapType===Fr,packedNormalMap:st&&_.normalMapType===Fr&&kb(_.normalMap.format),metalnessMap:wt,roughnessMap:Dt,anisotropy:H,anisotropyMap:Je,clearcoat:Bt,clearcoatMap:C,clearcoatNormalMap:E,clearcoatRoughnessMap:U,diffuseRoughness:Rt,diffuseRoughnessMap:me,dispersion:si,retroreflection:Le,iridescence:Ht,iridescenceMap:le,iridescenceThicknessMap:Te,sheen:q,sheenColorMap:Re,sheenRoughnessMap:J,specularMap:fe,specularColorMap:Pe,specularIntensityMap:B,transmission:te,transmissionMap:ue,thicknessMap:he,gradientMap:pe,opaque:_.transparent===!1&&_.blending===Us&&_.alphaToCoverage===!1,alphaMap:be,alphaTest:Me,alphaHash:tt,combine:_.combine,mapUv:Ye&&m(_.map.channel),aoMapUv:Ce&&m(_.aoMap.channel),lightMapUv:Ve&&m(_.lightMap.channel),bumpMapUv:We&&m(_.bumpMap.channel),normalMapUv:st&&m(_.normalMap.channel),displacementMapUv:Oe&&m(_.displacementMap.channel),emissiveMapUv:Lt&&m(_.emissiveMap.channel),metalnessMapUv:wt&&m(_.metalnessMap.channel),roughnessMapUv:Dt&&m(_.roughnessMap.channel),anisotropyMapUv:Je&&m(_.anisotropyMap.channel),clearcoatMapUv:C&&m(_.clearcoatMap.channel),clearcoatNormalMapUv:E&&m(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:U&&m(_.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:me&&m(_.diffuseRoughnessMap.channel),iridescenceMapUv:le&&m(_.iridescenceMap.channel),iridescenceThicknessMapUv:Te&&m(_.iridescenceThicknessMap.channel),sheenColorMapUv:Re&&m(_.sheenColorMap.channel),sheenRoughnessMapUv:J&&m(_.sheenRoughnessMap.channel),specularMapUv:fe&&m(_.specularMap.channel),specularColorMapUv:Pe&&m(_.specularColorMap.channel),specularIntensityMapUv:B&&m(_.specularIntensityMap.channel),transmissionMapUv:ue&&m(_.transmissionMap.channel),thicknessMapUv:he&&m(_.thicknessMap.channel),alphaMapUv:be&&m(_.alphaMap.channel),vertexTangents:!!L.attributes.tangent&&(st||H),vertexNormals:!!L.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,pointsUvs:P.isPoints===!0&&!!L.attributes.uv&&(Ye||be),fog:!!Q,useFog:_.fog===!0,fogExp2:!!Q&&Q.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||L.attributes.normal===void 0&&st===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:Ne,skinning:P.isSkinnedMesh===!0,hasPositionAttribute:L.attributes.position!==void 0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:ee,morphTextureStride:de,numSunLights:v.sun.length,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numSunLightShadows:v.sunShadowMap.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numLightProbeGrids:O.filter((Ge)=>Ge.texture!==null).length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:_.dithering,shadowMapEnabled:e.shadowMap.enabled&&w.length>0,shadowMapType:e.shadowMap.type,toneMapping:He,decodeVideoTexture:Ye&&_.map.isVideoTexture===!0&&Et.getTransfer(_.map.colorSpace)===Wt,decodeVideoTextureEmissive:Lt&&_.emissiveMap.isVideoTexture===!0&&Et.getTransfer(_.emissiveMap.colorSpace)===Wt,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Kt,flipSided:_.side===Mi,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:rt&&_.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(rt&&_.extensions.multiDraw===!0||Xe)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return St.vertexUv1s=l.has(1),St.vertexUv2s=l.has(2),St.vertexUv3s=l.has(3),l.clear(),St}function x(_){let v=[];if(_.shaderID)v.push(_.shaderID);else v.push(_.customVertexShaderID),v.push(_.customFragmentShaderID);if(_.defines!==void 0)for(let w in _.defines)v.push(w),v.push(_.defines[w]);if(_.isRawShaderMaterial===!1)d(v,_),p(v,_),v.push(e.outputColorSpace);return v.push(_.customProgramCacheKey),v.join()}function d(_,v){_.push(v.precision),_.push(v.outputColorSpace),_.push(v.envMapMode),_.push(v.envMapPMREM),_.push(v.envMapMaxLod),_.push(v.envMapSize),_.push(v.mapUv),_.push(v.alphaMapUv),_.push(v.lightMapUv),_.push(v.aoMapUv),_.push(v.bumpMapUv),_.push(v.normalMapUv),_.push(v.displacementMapUv),_.push(v.emissiveMapUv),_.push(v.metalnessMapUv),_.push(v.roughnessMapUv),_.push(v.anisotropyMapUv),_.push(v.clearcoatMapUv),_.push(v.clearcoatNormalMapUv),_.push(v.clearcoatRoughnessMapUv),_.push(v.diffuseRoughnessMapUv),_.push(v.iridescenceMapUv),_.push(v.iridescenceThicknessMapUv),_.push(v.sheenColorMapUv),_.push(v.sheenRoughnessMapUv),_.push(v.specularMapUv),_.push(v.specularColorMapUv),_.push(v.specularIntensityMapUv),_.push(v.transmissionMapUv),_.push(v.thicknessMapUv),_.push(v.combine),_.push(v.fogExp2),_.push(v.sizeAttenuation),_.push(v.morphTargetsCount),_.push(v.numSunLights),_.push(v.numDirLights),_.push(v.numPointLights),_.push(v.numSpotLights),_.push(v.numSpotLightMaps),_.push(v.numHemiLights),_.push(v.numRectAreaLights),_.push(v.numSunLightShadows),_.push(v.numDirLightShadows),_.push(v.numPointLightShadows),_.push(v.numSpotLightShadows),_.push(v.numSpotLightShadowsWithMaps),_.push(v.numLightProbes),_.push(v.numLightProbeGrids),_.push(v.shadowMapType),_.push(v.toneMapping),_.push(v.numClippingPlanes),_.push(v.numClipIntersection),_.push(v.depthPacking)}function p(_,v){if(o.disableAll(),v.instancing)o.enable(0);if(v.instancingColor)o.enable(1);if(v.instancingMorph)o.enable(2);if(v.matcap)o.enable(3);if(v.envMap)o.enable(4);if(v.normalMapObjectSpace)o.enable(5);if(v.normalMapTangentSpace)o.enable(6);if(v.clearcoat)o.enable(7);if(v.iridescence)o.enable(8);if(v.alphaTest)o.enable(9);if(v.vertexColors)o.enable(10);if(v.vertexAlphas)o.enable(11);if(v.vertexUv1s)o.enable(12);if(v.vertexUv2s)o.enable(13);if(v.vertexUv3s)o.enable(14);if(v.vertexTangents)o.enable(15);if(v.anisotropy)o.enable(16);if(v.alphaHash)o.enable(17);if(v.batching)o.enable(18);if(v.dispersion)o.enable(19);if(v.retroreflection)o.enable(24);if(v.diffuseRoughness)o.enable(25);if(v.batchingColor)o.enable(20);if(v.gradientMap)o.enable(21);if(v.packedNormalMap)o.enable(22);if(v.vertexNormals)o.enable(23);if(_.push(o.mask),o.disableAll(),v.fog)o.enable(0);if(v.useFog)o.enable(1);if(v.flatShading)o.enable(2);if(v.logarithmicDepthBuffer)o.enable(3);if(v.reversedDepthBuffer)o.enable(4);if(v.skinning)o.enable(5);if(v.morphTargets)o.enable(6);if(v.morphNormals)o.enable(7);if(v.morphColors)o.enable(8);if(v.premultipliedAlpha)o.enable(9);if(v.shadowMapEnabled)o.enable(10);if(v.doubleSided)o.enable(11);if(v.flipSided)o.enable(12);if(v.useDepthPacking)o.enable(13);if(v.dithering)o.enable(14);if(v.transmission)o.enable(15);if(v.sheen)o.enable(16);if(v.opaque)o.enable(17);if(v.pointsUvs)o.enable(18);if(v.decodeVideoTexture)o.enable(19);if(v.decodeVideoTextureEmissive)o.enable(20);if(v.alphaToCoverage)o.enable(21);if(v.numLightProbeGrids>0)o.enable(22);if(v.hasPositionAttribute)o.enable(23);_.push(o.mask)}function y(_){let v=h[_.type],w;if(v){let I=dr[v];w=Qr.clone(I.uniforms)}else w=_.uniforms;return w}function M(_,v){let w=f.get(v);if(w!==void 0)++w.usedTimes;else w=new T_(e,v,_,r),c.push(w),f.set(v,w);return w}function b(_){if(--_.usedTimes===0){let v=c.indexOf(_);c[v]=c[c.length-1],c.pop(),f.delete(_.cacheKey),_.destroy()}}function T(_){a.remove(_)}function S(){a.dispose()}return{getParameters:g,getProgramCacheKey:x,getUniforms:y,acquireProgram:M,releaseProgram:b,releaseShaderCache:T,programs:c,dispose:S}}function R_(){let e=new WeakMap;function t(o){return e.has(o)}function i(o){let a=e.get(o);if(a===void 0)a={},e.set(o,a);return a}function n(o){e.delete(o)}function r(o,a,l){e.get(o)[a]=l}function s(){e=new WeakMap}return{has:t,get:i,remove:n,update:r,dispose:s}}function Vb(e,t){if(e.groupOrder!==t.groupOrder)return e.groupOrder-t.groupOrder;else if(e.renderOrder!==t.renderOrder)return e.renderOrder-t.renderOrder;else if(e.material.id!==t.material.id)return e.material.id-t.material.id;else if(e.materialVariant!==t.materialVariant)return e.materialVariant-t.materialVariant;else if(e.z!==t.z)return e.z-t.z;else return e.id-t.id}function C_(e,t){if(e.groupOrder!==t.groupOrder)return e.groupOrder-t.groupOrder;else if(e.renderOrder!==t.renderOrder)return e.renderOrder-t.renderOrder;else if(e.z!==t.z)return t.z-e.z;else return e.id-t.id}function P_(){let e=[],t=0,i=[],n=[],r=[];function s(){t=0,i.length=0,n.length=0,r.length=0}function o(h){let m=0;if(h.isInstancedMesh)m+=2;if(h.isSkinnedMesh)m+=1;return m}function a(h,m,g,x,d,p){let y=e[t];if(y===void 0)y={id:h.id,object:h,geometry:m,material:g,materialVariant:o(h),groupOrder:x,renderOrder:h.renderOrder,z:d,group:p},e[t]=y;else y.id=h.id,y.object=h,y.geometry=m,y.material=g,y.materialVariant=o(h),y.groupOrder=x,y.renderOrder=h.renderOrder,y.z=d,y.group=p;return t++,y}function l(h,m,g,x,d,p,y){if(y.reversedDepth===!0)d=-d;let M=a(h,m,g,x,d,p);if(g.transmission>0)n.push(M);else if(g.transparent===!0)r.push(M);else i.push(M)}function c(h,m,g,x,d,p){let y=a(h,m,g,x,d,p);if(g.transmission>0)n.unshift(y);else if(g.transparent===!0)r.unshift(y);else i.unshift(y)}function f(h,m){if(i.length>1)i.sort(h||Vb);if(n.length>1)n.sort(m||C_);if(r.length>1)r.sort(m||C_)}function u(){for(let h=t,m=e.length;h<m;h++){let g=e[h];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:i,transmissive:n,transparent:r,init:s,push:l,unshift:c,finish:u,sort:f}}function I_(){let e=new WeakMap;function t(n,r){let s=e.get(n),o;if(s===void 0)o=new P_,e.set(n,[o]);else if(r>=s.length)o=new P_,s.push(o);else o=s[r];return o}function i(){e=new WeakMap}return{get:t,dispose:i}}function Wb(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let i;switch(t.type){case"SunLight":case"DirectionalLight":i={direction:new R,color:new Se};break;case"SpotLight":i={position:new R,direction:new R,color:new Se,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new R,color:new Se,distance:0,decay:0};break;case"HemisphereLight":i={direction:new R,skyColor:new Se,groundColor:new Se};break;case"RectAreaLight":i={color:new Se,position:new R,halfWidth:new R,halfHeight:new R};break}return e[t.id]=i,i}}}function Xb(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let i;switch(t.type){case"SunLight":case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne,shadowCameraNear:1,shadowCameraFar:1000};break}return e[t.id]=i,i}}}var Yb=0;function qb(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function L_(e){let t=new Wb,i=Xb(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new R);let r=new R,s=new $e,o=new $e;function a(c){let f=0,u=0,h=0;for(let O=0;O<9;O++)n.probe[O].set(0,0,0);let m=0,g=0,x=0,d=0,p=0,y=0,M=0,b=0,T=0,S=0,_=0,v=0,w=0,I=0;c.sort(qb);for(let O=0,Q=c.length;O<Q;O++){let L=c[O],{color:K,intensity:D,distance:N}=L,se=null;if(L.shadow&&L.shadow.map)if(L.shadow.map.texture.format===sr)se=L.shadow.map.texture;else se=L.shadow.map.depthTexture||L.shadow.map.texture;if(L.isAmbientLight)f+=K.r*D,u+=K.g*D,h+=K.b*D;else if(L.isLightProbe){for(let Y=0;Y<9;Y++)n.probe[Y].addScaledVector(L.sh.coefficients[Y],D);I++}else if(L.isSunLight){let Y=t.get(L);if(Y.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let W=L.shadow,ee=i.get(L);ee.shadowIntensity=W.intensity,ee.shadowBias=W.bias,ee.shadowNormalBias=W.normalBias,ee.shadowRadius=W.radius,ee.shadowMapSize.copy(W.mapSize).multiply(W.getFrameExtents()),n.sunShadow[g]=ee,n.sunShadowMap[g]=se;let de=W.getViewportCount();for(let X=0;X<de;X++)n.sunShadowMatrix[x+X]=W.getMatrix(X),n.sunShadowCascade[x+X]=W._cascadeData[X];x+=de,g++}n.sun[m]=Y,m++}else if(L.isDirectionalLight){let Y=t.get(L);if(Y.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let W=L.shadow,ee=i.get(L);ee.shadowIntensity=W.intensity,ee.shadowBias=W.bias,ee.shadowNormalBias=W.normalBias,ee.shadowRadius=W.radius,ee.shadowMapSize=W.mapSize,n.directionalShadow[d]=ee,n.directionalShadowMap[d]=se,n.directionalShadowMatrix[d]=L.shadow.matrix,T++}n.directional[d]=Y,d++}else if(L.isSpotLight){let Y=t.get(L);Y.position.setFromMatrixPosition(L.matrixWorld),Y.color.copy(K).multiplyScalar(D),Y.distance=N,Y.coneCos=Math.cos(L.angle),Y.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),Y.decay=L.decay,n.spot[y]=Y;let W=L.shadow;if(L.map){if(n.spotLightMap[v]=L.map,v++,W.updateMatrices(L),L.castShadow)w++}if(n.spotLightMatrix[y]=W.matrix,L.castShadow){let ee=i.get(L);ee.shadowIntensity=W.intensity,ee.shadowBias=W.bias,ee.shadowNormalBias=W.normalBias,ee.shadowRadius=W.radius,ee.shadowMapSize=W.mapSize,n.spotShadow[y]=ee,n.spotShadowMap[y]=se,_++}y++}else if(L.isRectAreaLight){let Y=t.get(L);Y.color.copy(K).multiplyScalar(D),Y.halfWidth.set(L.width*0.5,0,0),Y.halfHeight.set(0,L.height*0.5,0),n.rectArea[M]=Y,M++}else if(L.isPointLight){let Y=t.get(L);if(Y.color.copy(L.color).multiplyScalar(L.intensity),Y.distance=L.distance,Y.decay=L.decay,L.castShadow){let W=L.shadow,ee=i.get(L);ee.shadowIntensity=W.intensity,ee.shadowBias=W.bias,ee.shadowNormalBias=W.normalBias,ee.shadowRadius=W.radius,ee.shadowMapSize=W.mapSize,ee.shadowCameraNear=W.camera.near,ee.shadowCameraFar=W.camera.far,n.pointShadow[p]=ee,n.pointShadowMap[p]=se,n.pointShadowMatrix[p]=L.shadow.matrix,S++}n.point[p]=Y,p++}else if(L.isHemisphereLight){let Y=t.get(L);Y.skyColor.copy(L.color).multiplyScalar(D),Y.groundColor.copy(L.groundColor).multiplyScalar(D),n.hemi[b]=Y,b++}}if(M>0)if(e.has("OES_texture_float_linear")===!0)n.rectAreaLTC1=Ke.LTC_FLOAT_1,n.rectAreaLTC2=Ke.LTC_FLOAT_2;else n.rectAreaLTC1=Ke.LTC_HALF_1,n.rectAreaLTC2=Ke.LTC_HALF_2;n.ambient[0]=f,n.ambient[1]=u,n.ambient[2]=h;let P=n.hash;if(P.sunLength!==m||P.directionalLength!==d||P.pointLength!==p||P.spotLength!==y||P.rectAreaLength!==M||P.hemiLength!==b||P.numSunShadows!==g||P.numDirectionalShadows!==T||P.numPointShadows!==S||P.numSpotShadows!==_||P.numSpotMaps!==v||P.numLightProbes!==I)n.sun.length=m,n.directional.length=d,n.spot.length=y,n.rectArea.length=M,n.point.length=p,n.hemi.length=b,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=x,n.sunShadowCascade.length=x,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.directionalShadowMatrix.length=T,n.pointShadow.length=S,n.pointShadowMap.length=S,n.pointShadowMatrix.length=S,n.spotShadow.length=_,n.spotShadowMap.length=_,n.spotLightMatrix.length=_+v-w,n.spotLightMap.length=v,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=I,P.sunLength=m,P.directionalLength=d,P.pointLength=p,P.spotLength=y,P.rectAreaLength=M,P.hemiLength=b,P.numSunShadows=g,P.numDirectionalShadows=T,P.numPointShadows=S,P.numSpotShadows=_,P.numSpotMaps=v,P.numLightProbes=I,n.version=Yb++}function l(c,f){let u=0,h=0,m=0,g=0,x=0,d=0,p=f.matrixWorldInverse;for(let y=0,M=c.length;y<M;y++){let b=c[y];if(b.isSunLight){let T=n.sun[u];T.direction.setFromMatrixPosition(b.matrixWorld),T.direction.transformDirection(p),u++}else if(b.isDirectionalLight){let T=n.directional[h];T.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(p),h++}else if(b.isSpotLight){let T=n.spot[g];T.position.setFromMatrixPosition(b.matrixWorld),T.position.applyMatrix4(p),T.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(p),g++}else if(b.isRectAreaLight){let T=n.rectArea[x];T.position.setFromMatrixPosition(b.matrixWorld),T.position.applyMatrix4(p),o.identity(),s.copy(b.matrixWorld),s.premultiply(p),o.extractRotation(s),T.halfWidth.set(b.width*0.5,0,0),T.halfHeight.set(0,b.height*0.5,0),T.halfWidth.applyMatrix4(o),T.halfHeight.applyMatrix4(o),x++}else if(b.isPointLight){let T=n.point[m];T.position.setFromMatrixPosition(b.matrixWorld),T.position.applyMatrix4(p),m++}else if(b.isHemisphereLight){let T=n.hemi[d];T.direction.setFromMatrixPosition(b.matrixWorld),T.direction.transformDirection(p),d++}}}return{setup:a,setupView:l,state:n}}function D_(e){let t=new L_(e),i=[],n=[],r=[];function s(u){f.camera=u,i.length=0,n.length=0,r.length=0}function o(u){if(u.isLightProbeGrid)r.push(u);else i.push(u)}function a(u){n.push(u)}function l(){t.setup(i),r.sort((u,h)=>u.priority-h.priority||u.id-h.id)}function c(u){t.setupView(i,u)}let f={lightsArray:i,shadowsArray:n,lightProbeGridArray:r,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:f,setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function N_(e){let t=new WeakMap;function i(r,s=0){let o=t.get(r),a;if(o===void 0)a=new D_(e),t.set(r,[a]);else if(s>=o.length)a=new D_(e),o.push(a);else a=o[s];return a}function n(){t=new WeakMap}return{get:i,dispose:n}}var F_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}
`,U_=`
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
`;var Zb=[new R(1,0,0),new R(-1,0,0),new R(0,1,0),new R(0,-1,0),new R(0,0,1),new R(0,0,-1)],Jb=[new R(0,-1,0),new R(0,-1,0),new R(0,0,1),new R(0,0,-1),new R(0,-1,0),new R(0,-1,0)],B_=new $e,Kc=new R,xd=new R;function O_(e,t,i){let n=new Tr,r=new ne,s=new ne,o=new Xt,a=new Oc,l=new Hc,c={},f=i.maxTextureSize,u={[Zn]:Mi,[Mi]:Zn,[Kt]:Kt},h=new Di({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ne},radius:{value:4}},vertexShader:F_,fragmentShader:U_}),m=h.clone();m.defines.HORIZONTAL_PASS=1;let g=new et;g.setAttribute("position",new pi(new Float32Array([-1,-1,0.5,3,-1,0.5,-1,3,0.5]),3));let x=new ae(g,h),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=sa;let p=this.type;this.render=function(S,_,v){if(d.enabled===!1)return;if(d.autoUpdate===!1&&d.needsUpdate===!1)return;if(S.length===0)return;if(this.type===hp)De("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=sa;let w=e.getRenderTarget(),I=e.getActiveCubeFace(),P=e.getActiveMipmapLevel(),O=e.state;if(O.setBlending(yr),O.buffers.depth.getReversed()===!0)O.buffers.color.setClear(0,0,0,0);else O.buffers.color.setClear(1,1,1,1);O.buffers.depth.setTest(!0),O.setScissorTest(!1);let Q=p!==this.type;if(Q)_.traverse(function(L){if(L.material)if(Array.isArray(L.material))L.material.forEach((K)=>K.needsUpdate=!0);else L.material.needsUpdate=!0});for(let L=0,K=S.length;L<K;L++){let D=S[L],N=D.shadow;if(N===void 0){De("WebGLShadowMap:",D,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;r.copy(N.mapSize);let se=N.getFrameExtents();if(r.multiply(se),s.copy(N.mapSize),r.x>f||r.y>f){if(r.x>f)s.x=Math.floor(f/se.x),r.x=s.x*se.x,N.mapSize.x=s.x;if(r.y>f)s.y=Math.floor(f/se.y),r.y=s.y*se.y,N.mapSize.y=s.y}let Y=e.state.buffers.depth.getReversed();if(N.camera._reversedDepth=Y,N.map===null||Q===!0){if(N.map!==null){if(N.map.depthTexture!==null)N.map.depthTexture.dispose(),N.map.depthTexture=null;N.map.dispose()}if(this.type===_o){if(D.isPointLight){De("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}N.map=new Ti(r.x,r.y,{format:sr,type:Ii,minFilter:_i,magFilter:_i,generateMipmaps:!1}),N.map.texture.name=D.name+".shadowMap",N.map.depthTexture=new cr(r.x,r.y,Wi),N.map.depthTexture.name=D.name+".shadowMapDepth",N.map.depthTexture.format=Jn,N.map.depthTexture.compareFunction=null,N.map.depthTexture.minFilter=di,N.map.depthTexture.magFilter=di}else{if(D.isPointLight)N.map=new eo(r.x),N.map.depthTexture=new Xa(r.x,an);else N.map=new Ti(r.x,r.y),N.map.depthTexture=new cr(r.x,r.y,an);if(N.map.depthTexture.name=D.name+".shadowMap",N.map.depthTexture.format=Jn,this.type===sa)N.map.depthTexture.compareFunction=Y?If:Pf,N.map.depthTexture.minFilter=_i,N.map.depthTexture.magFilter=_i;else N.map.depthTexture.compareFunction=null,N.map.depthTexture.minFilter=di,N.map.depthTexture.magFilter=di}N.camera.updateProjectionMatrix()}if(N.map.isWebGLCubeRenderTarget!==!0&&(N.map.width!==r.x||N.map.height!==r.y))N.map.setSize(r.x,r.y);let W=N.map.isWebGLCubeRenderTarget?6:N.getViewportCount();if(D.isPointLight!==!0)N.updateMatrices(D,v);let ee=(N.camera.layers.mask&4294967294)!==0?N.camera.layers:v.layers;for(let de=0;de<W;de++){let X=N.getCamera(de);if(D.isPointLight){let{camera:oe,matrix:ye}=N,ve=D.distance||oe.far;if(ve!==oe.far)oe.far=ve,oe.updateProjectionMatrix();Kc.setFromMatrixPosition(D.matrixWorld),oe.position.copy(Kc),xd.copy(oe.position),xd.add(Zb[de]),oe.up.copy(Jb[de]),oe.lookAt(xd),oe.updateMatrixWorld(),ye.makeTranslation(-Kc.x,-Kc.y,-Kc.z),B_.multiplyMatrices(oe.projectionMatrix,oe.matrixWorldInverse),N._frustum.setFromProjectionMatrix(B_,oe.coordinateSystem,oe.reversedDepth)}if(N.map.isWebGLCubeRenderTarget)e.setRenderTarget(N.map,de),e.clear();else{if(de===0)e.setRenderTarget(N.map),e.clear();let oe=N.getViewport(de);o.set(s.x*oe.x,s.y*oe.y,s.x*oe.z,s.y*oe.w),O.viewport(o)}n=N.getFrustum(de),b(_,v,X,D,ee,this.type)}if(N.isPointLightShadow!==!0&&this.type===_o)y(N,v);N.needsUpdate=!1}p=this.type,d.needsUpdate=!1,e.setRenderTarget(w,I,P)};function y(S,_){let v=t.update(x);if(h.defines.VSM_SAMPLES!==S.blurSamples)h.defines.VSM_SAMPLES=S.blurSamples,m.defines.VSM_SAMPLES=S.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0;if(S.mapPass===null)S.mapPass=new Ti(r.x,r.y,{format:sr,type:Ii});else if(S.mapPass.width!==S.map.width||S.mapPass.height!==S.map.height)S.mapPass.setSize(S.map.width,S.map.height);h.uniforms.shadow_pass.value=S.map.depthTexture,h.uniforms.resolution.value.set(S.map.width,S.map.height),h.uniforms.radius.value=S.radius,e.setRenderTarget(S.mapPass),e.clear(),e.renderBufferDirect(_,null,v,h,x,null),m.uniforms.shadow_pass.value=S.mapPass.texture,m.uniforms.resolution.value.set(S.map.width,S.map.height),m.uniforms.radius.value=S.radius,e.setRenderTarget(S.map),e.clear(),e.renderBufferDirect(_,null,v,m,x,null)}function M(S,_,v,w){let I=null,P=v.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(P!==void 0)I=P;else if(I=v.isPointLight===!0?l:a,e.localClippingEnabled&&_.clipShadows===!0&&Array.isArray(_.clippingPlanes)&&_.clippingPlanes.length!==0||_.displacementMap&&_.displacementScale!==0||_.alphaMap&&_.alphaTest>0||_.map&&_.alphaTest>0||_.alphaToCoverage===!0){let O=I.uuid,Q=_.uuid,L=c[O];if(L===void 0)L={},c[O]=L;let K=L[Q];if(K===void 0)K=I.clone(),L[Q]=K,_.addEventListener("dispose",T);I=K}if(I.visible=_.visible,I.wireframe=_.wireframe,w===_o)I.side=_.shadowSide!==null?_.shadowSide:_.side;else I.side=_.shadowSide!==null?_.shadowSide:u[_.side];if(I.alphaMap=_.alphaMap,I.alphaTest=_.alphaToCoverage===!0?0.5:_.alphaTest,I.map=_.map,I.clipShadows=_.clipShadows,I.clippingPlanes=_.clippingPlanes,I.clipIntersection=_.clipIntersection,I.displacementMap=_.displacementMap,I.displacementScale=_.displacementScale,I.displacementBias=_.displacementBias,I.wireframeLinewidth=_.wireframeLinewidth,I.linewidth=_.linewidth,v.isPointLight===!0&&I.isMeshDistanceMaterial===!0){let O=e.properties.get(I);O.light=v}return I}function b(S,_,v,w,I,P){if(S.visible===!1)return;if(S.layers.test(I)&&(S.isMesh||S.isLine||S.isPoints)){if((S.castShadow||S.receiveShadow&&P===_o)&&(!S.frustumCulled||S.intersectsFrustum(n))){S.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,S.matrixWorld);let L=t.update(S),K=S.material;if(Array.isArray(K)){let D=L.groups;for(let N=0,se=D.length;N<se;N++){let Y=D[N],W=K[Y.materialIndex];if(W&&W.visible){let ee=M(S,W,w,P);S.onBeforeShadow(e,S,_,v,L,ee,Y),e.renderBufferDirect(v,null,L,ee,S,Y),S.onAfterShadow(e,S,_,v,L,ee,Y)}}}else if(K.visible){let D=M(S,K,w,P);S.onBeforeShadow(e,S,_,v,L,D,null),e.renderBufferDirect(v,null,L,D,S,null),S.onAfterShadow(e,S,_,v,L,D,null)}}}let Q=S.children;for(let L=0,K=Q.length;L<K;L++)b(Q[L],_,v,w,I,P)}function T(S){S.target.removeEventListener("dispose",T);for(let v in c){let w=c[v],I=S.target.uuid;if(I in w)w[I].dispose(),delete w[I]}}}function H_(e,t){function i(){let B=!1,ue=new Xt,he=null,pe=new Xt(0,0,0,0);return{setMask:function(be){if(he!==be&&!B)e.colorMask(be,be,be,be),he=be},setLocked:function(be){B=be},setClear:function(be,Me,tt,rt,He){if(He===!0)be*=rt,Me*=rt,tt*=rt;if(ue.set(be,Me,tt,rt),pe.equals(ue)===!1)e.clearColor(be,Me,tt,rt),pe.copy(ue)},reset:function(){B=!1,he=null,pe.set(-1,0,0,0)}}}function n(){let B=!1,ue=!1,he=null,pe=null,be=null;return{setReversed:function(Me){if(ue!==Me){let tt=t.get("EXT_clip_control");if(Me)tt.clipControlEXT(tt.LOWER_LEFT_EXT,tt.ZERO_TO_ONE_EXT);else tt.clipControlEXT(tt.LOWER_LEFT_EXT,tt.NEGATIVE_ONE_TO_ONE_EXT);ue=Me;let rt=be;be=null,this.setClear(rt)}},getReversed:function(){return ue},setTest:function(Me){if(Me)Ne(e.DEPTH_TEST);else xt(e.DEPTH_TEST)},setMask:function(Me){if(he!==Me&&!B)e.depthMask(Me),he=Me},setFunc:function(Me){if(ue)Me=Yp[Me];if(pe!==Me){switch(Me){case yl:e.depthFunc(e.NEVER);break;case Ml:e.depthFunc(e.ALWAYS);break;case vl:e.depthFunc(e.LESS);break;case Os:e.depthFunc(e.LEQUAL);break;case bl:e.depthFunc(e.EQUAL);break;case Sl:e.depthFunc(e.GEQUAL);break;case El:e.depthFunc(e.GREATER);break;case Tl:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}pe=Me}},setLocked:function(Me){B=Me},setClear:function(Me){if(be!==Me){if(be=Me,ue)Me=1-Me;e.clearDepth(Me)}},reset:function(){B=!1,he=null,pe=null,be=null,ue=!1}}}function r(){let B=!1,ue=null,he=null,pe=null,be=null,Me=null,tt=null,rt=null,He=null;return{setTest:function(ft){if(!B)if(ft)Ne(e.STENCIL_TEST);else xt(e.STENCIL_TEST)},setMask:function(ft){if(ue!==ft&&!B)e.stencilMask(ft),ue=ft},setFunc:function(ft,St,Ge){if(he!==ft||pe!==St||be!==Ge)e.stencilFunc(ft,St,Ge),he=ft,pe=St,be=Ge},setOp:function(ft,St,Ge){if(Me!==ft||tt!==St||rt!==Ge)e.stencilOp(ft,St,Ge),Me=ft,tt=St,rt=Ge},setLocked:function(ft){B=ft},setClear:function(ft){if(He!==ft)e.clearStencil(ft),He=ft},reset:function(){B=!1,ue=null,he=null,pe=null,be=null,Me=null,tt=null,rt=null,He=null}}}let s=new i,o=new n,a=new r,l={},c=new WeakMap,f={},u={},h={},m=new WeakMap,g=[],x=null,d=!1,p=null,y=null,M=null,b=null,T=null,S=null,_=null,v=new Se(0,0,0),w=0,I=!1,P=null,O=null,Q=null,L=null,K=null,D=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),N=!1,se=0,Y=e.getParameter(e.VERSION);if(Y.indexOf("WebGL")!==-1)se=parseFloat(/^WebGL (\d)/.exec(Y)[1]),N=se>=1;else if(Y.indexOf("OpenGL ES")!==-1)se=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),N=se>=2;let W=null,ee={},de=e.getParameter(e.SCISSOR_BOX),X=e.getParameter(e.VIEWPORT),oe=new Xt().fromArray(de),ye=new Xt().fromArray(X);function ve(B,ue,he,pe){let be=new Uint8Array(4),Me=e.createTexture();e.bindTexture(B,Me),e.texParameteri(B,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(B,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let tt=0;tt<he;tt++)if(B===e.TEXTURE_3D||B===e.TEXTURE_2D_ARRAY)e.texImage3D(ue,0,e.RGBA,1,1,pe,0,e.RGBA,e.UNSIGNED_BYTE,be);else e.texImage2D(ue+tt,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,be);return Me}let ke={};ke[e.TEXTURE_2D]=ve(e.TEXTURE_2D,e.TEXTURE_2D,1),ke[e.TEXTURE_CUBE_MAP]=ve(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),ke[e.TEXTURE_2D_ARRAY]=ve(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),ke[e.TEXTURE_3D]=ve(e.TEXTURE_3D,e.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),Ne(e.DEPTH_TEST),o.setFunc(Os),We(!1),st(cu),Ne(e.CULL_FACE),Ce(yr);function Ne(B){if(f[B]!==!0)e.enable(B),f[B]=!0}function xt(B){if(f[B]!==!1)e.disable(B),f[B]=!1}function Xe(B,ue){if(h[B]!==ue){if(e.bindFramebuffer(B,ue),h[B]=ue,B===e.DRAW_FRAMEBUFFER)h[e.FRAMEBUFFER]=ue;if(B===e.FRAMEBUFFER)h[e.DRAW_FRAMEBUFFER]=ue;return!0}return!1}function Ye(B,ue){let he=g,pe=!1;if(B){if(he=m.get(ue),he===void 0)he=[],m.set(ue,he);let be=B.textures;if(he.length!==be.length||he[0]!==e.COLOR_ATTACHMENT0){for(let Me=0,tt=be.length;Me<tt;Me++)he[Me]=e.COLOR_ATTACHMENT0+Me;he.length=be.length,pe=!0}}else if(he[0]!==e.BACK)he[0]=e.BACK,pe=!0;if(pe)e.drawBuffers(he)}function Tt(B){if(x!==B)return e.useProgram(B),x=B,!0;return!1}let ge={[Bs]:e.FUNC_ADD,[dp]:e.FUNC_SUBTRACT,[pp]:e.FUNC_REVERSE_SUBTRACT};ge[mp]=e.MIN,ge[gp]=e.MAX;let Ee={[xp]:e.ZERO,[_p]:e.ONE,[yp]:e.SRC_COLOR,[pf]:e.SRC_ALPHA,[Tp]:e.SRC_ALPHA_SATURATE,[Sp]:e.DST_COLOR,[vp]:e.DST_ALPHA,[Mp]:e.ONE_MINUS_SRC_COLOR,[mf]:e.ONE_MINUS_SRC_ALPHA,[Ep]:e.ONE_MINUS_DST_COLOR,[bp]:e.ONE_MINUS_DST_ALPHA,[wp]:e.CONSTANT_COLOR,[Ap]:e.ONE_MINUS_CONSTANT_COLOR,[Rp]:e.CONSTANT_ALPHA,[Cp]:e.ONE_MINUS_CONSTANT_ALPHA};function Ce(B,ue,he,pe,be,Me,tt,rt,He,ft){if(B===yr){if(d===!0)xt(e.BLEND),d=!1;return}if(d===!1)Ne(e.BLEND),d=!0;if(B!==up){if(B!==p||ft!==I){if(y!==Bs||T!==Bs)e.blendEquation(e.FUNC_ADD),y=Bs,T=Bs;if(ft)switch(B){case Us:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case _l:e.blendFunc(e.ONE,e.ONE);break;case fu:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case hu:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:it("WebGLState: Invalid blending: ",B);break}else switch(B){case Us:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case _l:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case fu:it("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case hu:it("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:it("WebGLState: Invalid blending: ",B);break}M=null,b=null,S=null,_=null,v.set(0,0,0),w=0,p=B,I=ft}return}if(be=be||ue,Me=Me||he,tt=tt||pe,ue!==y||be!==T)e.blendEquationSeparate(ge[ue],ge[be]),y=ue,T=be;if(he!==M||pe!==b||Me!==S||tt!==_)e.blendFuncSeparate(Ee[he],Ee[pe],Ee[Me],Ee[tt]),M=he,b=pe,S=Me,_=tt;if(rt.equals(v)===!1||He!==w)e.blendColor(rt.r,rt.g,rt.b,He),v.copy(rt),w=He;p=B,I=!1}function Ve(B,ue){B.side===Kt?xt(e.CULL_FACE):Ne(e.CULL_FACE);let he=B.side===Mi;if(ue)he=!he;We(he),B.blending===Us&&B.transparent===!1?Ce(yr):Ce(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),o.setFunc(B.depthFunc),o.setTest(B.depthTest),o.setMask(B.depthWrite),s.setMask(B.colorWrite);let pe=B.stencilWrite;if(a.setTest(pe),pe)a.setMask(B.stencilWriteMask),a.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),a.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass);Lt(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?Ne(e.SAMPLE_ALPHA_TO_COVERAGE):xt(e.SAMPLE_ALPHA_TO_COVERAGE)}function We(B){if(P!==B){if(B)e.frontFace(e.CW);else e.frontFace(e.CCW);P=B}}function st(B){if(B!==cp){if(Ne(e.CULL_FACE),B!==O)if(B===cu)e.cullFace(e.BACK);else if(B===fp)e.cullFace(e.FRONT);else e.cullFace(e.FRONT_AND_BACK)}else xt(e.CULL_FACE);O=B}function Oe(B){if(B!==Q){if(N)e.lineWidth(B);Q=B}}function Lt(B,ue,he){if(B){if(Ne(e.POLYGON_OFFSET_FILL),L!==ue||K!==he){if(L=ue,K=he,o.getReversed())ue=-ue,he=-he;e.polygonOffset(ue,he)}}else xt(e.POLYGON_OFFSET_FILL)}function wt(B){if(B)Ne(e.SCISSOR_TEST);else xt(e.SCISSOR_TEST)}function Dt(B){if(B===void 0)B=e.TEXTURE0+D-1;if(W!==B)e.activeTexture(B),W=B}function H(B,ue,he){if(he===void 0)if(W===null)he=e.TEXTURE0+D-1;else he=W;let pe=ee[he];if(pe===void 0)pe={type:void 0,texture:void 0},ee[he]=pe;if(pe.type!==B||pe.texture!==ue){if(W!==he)e.activeTexture(he),W=he;e.bindTexture(B,ue||ke[B]),pe.type=B,pe.texture=ue}}function Bt(){let B=ee[W];if(B!==void 0&&B.type!==void 0)e.bindTexture(B.type,null),B.type=void 0,B.texture=void 0}function Rt(){try{e.compressedTexImage2D(...arguments)}catch(B){it("WebGLState:",B)}}function si(){try{e.compressedTexImage3D(...arguments)}catch(B){it("WebGLState:",B)}}function Le(){try{e.texSubImage2D(...arguments)}catch(B){it("WebGLState:",B)}}function Ht(){try{e.texSubImage3D(...arguments)}catch(B){it("WebGLState:",B)}}function q(){try{e.compressedTexSubImage2D(...arguments)}catch(B){it("WebGLState:",B)}}function te(){try{e.compressedTexSubImage3D(...arguments)}catch(B){it("WebGLState:",B)}}function Je(){try{e.texStorage2D(...arguments)}catch(B){it("WebGLState:",B)}}function C(){try{e.texStorage3D(...arguments)}catch(B){it("WebGLState:",B)}}function E(){try{e.texImage2D(...arguments)}catch(B){it("WebGLState:",B)}}function U(){try{e.texImage3D(...arguments)}catch(B){it("WebGLState:",B)}}function me(B){if(u[B]!==void 0)return u[B];else return e.getParameter(B)}function le(B,ue){if(u[B]!==ue)e.pixelStorei(B,ue),u[B]=ue}function Te(B){if(oe.equals(B)===!1)e.scissor(B.x,B.y,B.z,B.w),oe.copy(B)}function Re(B){if(ye.equals(B)===!1)e.viewport(B.x,B.y,B.z,B.w),ye.copy(B)}function J(B,ue){let he=c.get(ue);if(he===void 0)he=new WeakMap,c.set(ue,he);let pe=he.get(B);if(pe===void 0)pe=e.getUniformBlockIndex(ue,B.name),e.uniformBlockBinding(ue,pe,pe),he.set(B,pe)}function fe(B,ue,he){let be=c.get(ue).get(B);if(l[be]!==he)e.bindBufferBase(e.UNIFORM_BUFFER,be,he),l[be]=he}function Pe(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),f={},u={},W=null,ee={},h={},l={},m=new WeakMap,g=[],x=null,d=!1,p=null,y=null,M=null,b=null,T=null,S=null,_=null,v=new Se(0,0,0),w=0,I=!1,P=null,O=null,Q=null,L=null,K=null,oe.set(0,0,e.canvas.width,e.canvas.height),ye.set(0,0,e.canvas.width,e.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:Ne,disable:xt,bindFramebuffer:Xe,drawBuffers:Ye,useProgram:Tt,setBlending:Ce,setMaterial:Ve,setFlipSided:We,setCullFace:st,setLineWidth:Oe,setPolygonOffset:Lt,setScissorTest:wt,activeTexture:Dt,bindTexture:H,unbindTexture:Bt,compressedTexImage2D:Rt,compressedTexImage3D:si,texImage2D:E,texImage3D:U,pixelStorei:le,getParameter:me,updateUBOMapping:J,uniformBlockBinding:fe,texStorage2D:Je,texStorage3D:C,texSubImage2D:Le,texSubImage3D:Ht,compressedTexSubImage2D:q,compressedTexSubImage3D:te,scissor:Te,viewport:Re,reset:Pe}}function z_(e,t,i,n,r,s,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ne,f=new WeakMap,u=new Set,h,m=new WeakMap,g=new Set,x=new FinalizationRegistry((C)=>g.delete(C)),d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(C){}function p(C,E){return d?new OffscreenCanvas(C,E):ks("canvas")}function y(C,E,U){let me=1,le=Je(C);if(le.width>U||le.height>U)me=U/Math.max(le.width,le.height);if(me<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let Te=Math.floor(me*le.width),Re=Math.floor(me*le.height);if(h===void 0)h=p(Te,Re);let J=E?p(Te,Re):h;return J.width=Te,J.height=Re,J.getContext("2d").drawImage(C,0,0,Te,Re),De("WebGLRenderer: Texture has been resized from ("+le.width+"x"+le.height+") to ("+Te+"x"+Re+")."),J}else{if("data"in C)De("WebGLRenderer: Image in DataTexture is too big ("+le.width+"x"+le.height+").");return C}return C}function M(C){return C.generateMipmaps}function b(C){e.generateMipmap(C)}function T(C){if(C.isWebGLCubeRenderTarget)return e.TEXTURE_CUBE_MAP;if(C.isWebGL3DRenderTarget)return e.TEXTURE_3D;if(C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture)return e.TEXTURE_2D_ARRAY;return e.TEXTURE_2D}function S(C,E,U,me,le,Te=!1){if(C!==null){if(e[C]!==void 0)return e[C];De("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let Re;if(me){if(Re=t.get("EXT_texture_norm16"),!Re)De("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension")}let J=E;if(E===e.RED){if(U===e.FLOAT)J=e.R32F;if(U===e.HALF_FLOAT)J=e.R16F;if(U===e.UNSIGNED_BYTE)J=e.R8;if(U===e.UNSIGNED_SHORT&&Re)J=Re.R16_EXT;if(U===e.SHORT&&Re)J=Re.R16_SNORM_EXT}if(E===e.RED_INTEGER){if(U===e.UNSIGNED_BYTE)J=e.R8UI;if(U===e.UNSIGNED_SHORT)J=e.R16UI;if(U===e.UNSIGNED_INT)J=e.R32UI;if(U===e.BYTE)J=e.R8I;if(U===e.SHORT)J=e.R16I;if(U===e.INT)J=e.R32I}if(E===e.RG){if(U===e.FLOAT)J=e.RG32F;if(U===e.HALF_FLOAT)J=e.RG16F;if(U===e.UNSIGNED_BYTE)J=e.RG8;if(U===e.UNSIGNED_SHORT&&Re)J=Re.RG16_EXT;if(U===e.SHORT&&Re)J=Re.RG16_SNORM_EXT}if(E===e.RG_INTEGER){if(U===e.UNSIGNED_BYTE)J=e.RG8UI;if(U===e.UNSIGNED_SHORT)J=e.RG16UI;if(U===e.UNSIGNED_INT)J=e.RG32UI;if(U===e.BYTE)J=e.RG8I;if(U===e.SHORT)J=e.RG16I;if(U===e.INT)J=e.RG32I}if(E===e.RGB_INTEGER){if(U===e.UNSIGNED_BYTE)J=e.RGB8UI;if(U===e.UNSIGNED_SHORT)J=e.RGB16UI;if(U===e.UNSIGNED_INT)J=e.RGB32UI;if(U===e.BYTE)J=e.RGB8I;if(U===e.SHORT)J=e.RGB16I;if(U===e.INT)J=e.RGB32I}if(E===e.RGBA_INTEGER){if(U===e.UNSIGNED_BYTE)J=e.RGBA8UI;if(U===e.UNSIGNED_SHORT)J=e.RGBA16UI;if(U===e.UNSIGNED_INT)J=e.RGBA32UI;if(U===e.BYTE)J=e.RGBA8I;if(U===e.SHORT)J=e.RGBA16I;if(U===e.INT)J=e.RGBA32I}if(E===e.RGB){if(U===e.UNSIGNED_SHORT&&Re)J=Re.RGB16_EXT;if(U===e.SHORT&&Re)J=Re.RGB16_SNORM_EXT;if(U===e.UNSIGNED_INT_5_9_9_9_REV)J=e.RGB9_E5;if(U===e.UNSIGNED_INT_10F_11F_11F_REV)J=e.R11F_G11F_B10F}if(E===e.RGBA){let fe=Te?To:Et.getTransfer(le);if(U===e.FLOAT)J=e.RGBA32F;if(U===e.HALF_FLOAT)J=e.RGBA16F;if(U===e.UNSIGNED_BYTE)J=fe===Wt?e.SRGB8_ALPHA8:e.RGBA8;if(U===e.UNSIGNED_SHORT&&Re)J=Re.RGBA16_EXT;if(U===e.SHORT&&Re)J=Re.RGBA16_SNORM_EXT;if(U===e.UNSIGNED_SHORT_4_4_4_4)J=e.RGBA4;if(U===e.UNSIGNED_SHORT_5_5_5_1)J=e.RGB5_A1}if(J===e.R16F||J===e.R32F||J===e.RG16F||J===e.RG32F||J===e.RGBA16F||J===e.RGBA32F)t.get("EXT_color_buffer_float");return J}function _(C,E){let U;if(C){if(E===null||E===an||E===Nr)U=e.DEPTH24_STENCIL8;else if(E===Wi)U=e.DEPTH32F_STENCIL8;else if(E===us)U=e.DEPTH24_STENCIL8,De("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")}else if(E===null||E===an||E===Nr)U=e.DEPTH_COMPONENT24;else if(E===Wi)U=e.DEPTH_COMPONENT32F;else if(E===us)U=e.DEPTH_COMPONENT16;return U}function v(C,E){if(M(C)===!0||C.isFramebufferTexture&&C.minFilter!==di&&C.minFilter!==_i)return Math.log2(Math.max(E.width,E.height))+1;else if(C.mipmaps.length>0)return C.mipmaps.length;else if(C.isCompressedTexture&&Array.isArray(C.image))return E.mipmaps.length;else return 1}function w(C){let E=new WeakRef(C);n.get(C).__ref=E,g.add(E),x.register(C,E,E)}function I(C){let E=n.get(C).__ref;if(E===void 0)return;g.delete(E),x.unregister(E)}function P(C){Q(C.target)}function O(C){L(C.target)}function Q(C){if(C.removeEventListener("dispose",P),I(C),D(C),C.isVideoTexture)f.delete(C);if(C.isHTMLTexture)u.delete(C)}function L(C){C.removeEventListener("dispose",O),I(C),se(C)}function K(){for(let C of g){let E=C.deref();if(E===void 0)continue;if(E.isRenderTarget===!0)L(E);else Q(E)}g.clear(),u.clear()}function D(C){let E=n.get(C);if(E.__webglInit===void 0)return;let U=C.source,me=m.get(U);if(me){let le=me[E.__cacheKey];if(le.usedTimes--,le.usedTimes===0)N(C);if(Object.keys(me).length===0)m.delete(U)}n.remove(C)}function N(C){let E=n.get(C);e.deleteTexture(E.__webglTexture);let U=C.source,me=m.get(U);delete me[E.__cacheKey],o.memory.textures--}function se(C){let E=n.get(C);if(E.__depthDisposeCallback)E.__depthDisposeCallback();let U=C.depthTexture;if(U&&U.renderTarget===C)Q(U);if(C.isWebGLCubeRenderTarget)for(let le=0;le<6;le++){if(Array.isArray(E.__webglFramebuffer[le]))for(let Te=0;Te<E.__webglFramebuffer[le].length;Te++)e.deleteFramebuffer(E.__webglFramebuffer[le][Te]);else e.deleteFramebuffer(E.__webglFramebuffer[le]);if(E.__webglDepthbuffer)e.deleteRenderbuffer(E.__webglDepthbuffer[le])}else{if(Array.isArray(E.__webglFramebuffer))for(let le=0;le<E.__webglFramebuffer.length;le++)e.deleteFramebuffer(E.__webglFramebuffer[le]);else e.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer)e.deleteRenderbuffer(E.__webglDepthbuffer);if(E.__webglMultisampledFramebuffer)e.deleteFramebuffer(E.__webglMultisampledFramebuffer);if(E.__webglColorRenderbuffer){for(let le=0;le<E.__webglColorRenderbuffer.length;le++)if(E.__webglColorRenderbuffer[le])e.deleteRenderbuffer(E.__webglColorRenderbuffer[le])}if(E.__webglDepthRenderbuffer)e.deleteRenderbuffer(E.__webglDepthRenderbuffer)}let me=C.textures;for(let le=0,Te=me.length;le<Te;le++){let Re=n.get(me[le]);if(Re.__webglTexture)e.deleteTexture(Re.__webglTexture),o.memory.textures--;n.remove(me[le])}n.remove(C)}let Y=0;function W(){Y=0}function ee(){return Y}function de(C){Y=C}function X(){let C=Y;if(C>=r.maxTextures)De("WebGLTextures: Trying to use "+(C+1)+" texture units while this GPU supports only "+r.maxTextures);return Y+=1,C}function oe(C){let E=[];return E.push(C.wrapS),E.push(C.wrapT),E.push(C.wrapR||0),E.push(C.magFilter),E.push(C.minFilter),E.push(C.anisotropy),E.push(C.internalFormat),E.push(C.format),E.push(C.type),E.push(C.generateMipmaps),E.push(C.mipmapsAutoUpdate),E.push(C.premultiplyAlpha),E.push(C.flipY),E.push(C.unpackAlignment),E.push(C.colorSpace),E.join()}function ye(C,E){let U=n.get(C);if(C.isVideoTexture)q(C);if(C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&U.__version!==C.version){let me=C.image;if(me===null)De("WebGLRenderer: Texture marked for update but no image data found.");else if(me.complete===!1)De("WebGLRenderer: Texture marked for update but image is incomplete");else{Ve(U,C,E);return}}else if(C.isExternalTexture)U.__webglTexture=C.sourceTexture?C.sourceTexture:null;i.bindTexture(e.TEXTURE_2D,U.__webglTexture,e.TEXTURE0+E)}function ve(C,E){let U=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&U.__version!==C.version){Ve(U,C,E);return}else if(C.isExternalTexture)U.__webglTexture=C.sourceTexture?C.sourceTexture:null;i.bindTexture(e.TEXTURE_2D_ARRAY,U.__webglTexture,e.TEXTURE0+E)}function ke(C,E){let U=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&U.__version!==C.version){Ve(U,C,E);return}i.bindTexture(e.TEXTURE_3D,U.__webglTexture,e.TEXTURE0+E)}function Ne(C,E){let U=n.get(C);if(C.version>0&&U.__version!==C.version){We(U,C,E);return}i.bindTexture(e.TEXTURE_CUBE_MAP,U.__webglTexture,e.TEXTURE0+E)}let xt={[Nn]:e.REPEAT,[on]:e.CLAMP_TO_EDGE,[zs]:e.MIRRORED_REPEAT},Xe={[di]:e.NEAREST,[Rl]:e.NEAREST_MIPMAP_NEAREST,[Gs]:e.NEAREST_MIPMAP_LINEAR,[_i]:e.LINEAR,[Mo]:e.LINEAR_MIPMAP_NEAREST,[mn]:e.LINEAR_MIPMAP_LINEAR},Ye={[Bp]:e.NEVER,[Lf]:e.ALWAYS,[Op]:e.LESS,[Pf]:e.LEQUAL,[Hp]:e.EQUAL,[If]:e.GEQUAL,[zp]:e.GREATER,[Gp]:e.NOTEQUAL};function Tt(C,E){if(E.type===Wi&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===_i||E.magFilter===Mo||E.magFilter===Gs||E.magFilter===mn||E.minFilter===_i||E.minFilter===Mo||E.minFilter===Gs||E.minFilter===mn))De("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.");if(e.texParameteri(C,e.TEXTURE_WRAP_S,xt[E.wrapS]),e.texParameteri(C,e.TEXTURE_WRAP_T,xt[E.wrapT]),C===e.TEXTURE_3D||C===e.TEXTURE_2D_ARRAY)e.texParameteri(C,e.TEXTURE_WRAP_R,xt[E.wrapR]);if(e.texParameteri(C,e.TEXTURE_MAG_FILTER,Xe[E.magFilter]),e.texParameteri(C,e.TEXTURE_MIN_FILTER,Xe[E.minFilter]),E.compareFunction)e.texParameteri(C,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(C,e.TEXTURE_COMPARE_FUNC,Ye[E.compareFunction]);if(t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===di)return;if(E.minFilter!==Gs&&E.minFilter!==mn)return;if(E.type===Wi&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){let U=t.get("EXT_texture_filter_anisotropic");e.texParameterf(C,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,r.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function ge(C,E){let U=!1;if(C.__webglInit===void 0)C.__webglInit=!0,E.addEventListener("dispose",P),w(E);let me=E.source,le=m.get(me);if(le===void 0)le={},m.set(me,le);let Te=oe(E);if(Te!==C.__cacheKey){if(le[Te]===void 0)le[Te]={texture:e.createTexture(),usedTimes:0},o.memory.textures++,U=!0;le[Te].usedTimes++;let Re=le[C.__cacheKey];if(Re!==void 0){if(le[C.__cacheKey].usedTimes--,Re.usedTimes===0)N(E)}C.__cacheKey=Te,C.__webglTexture=le[Te].texture}return U}function Ee(C,E,U){return Math.floor(Math.floor(C/U)/E)}function Ce(C,E,U,me){let Te=C.updateRanges;if(Te.length===0)i.texSubImage2D(e.TEXTURE_2D,0,0,0,E.width,E.height,U,me,E.data);else{Te.sort((B,ue)=>B.start-ue.start);let Re=0;for(let B=1;B<Te.length;B++){let ue=Te[Re],he=Te[B],pe=ue.start+ue.count,be=Ee(he.start,E.width,4),Me=Ee(ue.start,E.width,4);if(he.start<=pe+1&&be===Me&&Ee(he.start+he.count-1,E.width,4)===be)ue.count=Math.max(ue.count,he.start+he.count-ue.start);else++Re,Te[Re]=he}Te.length=Re+1;let J=i.getParameter(e.UNPACK_ROW_LENGTH),fe=i.getParameter(e.UNPACK_SKIP_PIXELS),Pe=i.getParameter(e.UNPACK_SKIP_ROWS);i.pixelStorei(e.UNPACK_ROW_LENGTH,E.width);for(let B=0,ue=Te.length;B<ue;B++){let he=Te[B],pe=Math.floor(he.start/4),be=Math.ceil(he.count/4),Me=pe%E.width,tt=Math.floor(pe/E.width),rt=be,He=1;i.pixelStorei(e.UNPACK_SKIP_PIXELS,Me),i.pixelStorei(e.UNPACK_SKIP_ROWS,tt),i.texSubImage2D(e.TEXTURE_2D,0,Me,tt,rt,1,U,me,E.data)}C.clearUpdateRanges(),i.pixelStorei(e.UNPACK_ROW_LENGTH,J),i.pixelStorei(e.UNPACK_SKIP_PIXELS,fe),i.pixelStorei(e.UNPACK_SKIP_ROWS,Pe)}}function Ve(C,E,U){let me=e.TEXTURE_2D;if(E.isDataArrayTexture||E.isCompressedArrayTexture)me=e.TEXTURE_2D_ARRAY;if(E.isData3DTexture)me=e.TEXTURE_3D;let le=ge(C,E),Te=E.source;i.bindTexture(me,C.__webglTexture,e.TEXTURE0+U);let Re=n.get(Te);if(Te.version!==Re.__version||le===!0){if(i.activeTexture(e.TEXTURE0+U),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){let He=Et.getPrimaries(Et.workingColorSpace),ft=E.colorSpace===vr?null:Et.getPrimaries(E.colorSpace),St=E.colorSpace===vr||He===ft?e.NONE:e.BROWSER_DEFAULT_WEBGL;i.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,St)}i.pixelStorei(e.UNPACK_ALIGNMENT,E.unpackAlignment);let fe=y(E.image,!1,r.maxTextureSize);fe=te(E,fe);let Pe=s.convert(E.format,E.colorSpace),B=s.convert(E.type),ue=S(E.internalFormat,Pe,B,E.normalized,E.colorSpace,E.isVideoTexture);Tt(me,E);let he,pe=E.mipmaps,be=E.isVideoTexture!==!0,Me=Re.__version===void 0||le===!0,tt=Te.dataReady,rt=v(E,fe);if(E.isDepthTexture){if(ue=_(E.format===rr,E.type),Me)if(be)i.texStorage2D(e.TEXTURE_2D,1,ue,fe.width,fe.height);else i.texImage2D(e.TEXTURE_2D,0,ue,fe.width,fe.height,0,Pe,B,null)}else if(E.isDataTexture)if(pe.length>0){if(be&&Me)i.texStorage2D(e.TEXTURE_2D,rt,ue,pe[0].width,pe[0].height);for(let He=0,ft=pe.length;He<ft;He++)if(he=pe[He],be){if(tt)i.texSubImage2D(e.TEXTURE_2D,He,0,0,he.width,he.height,Pe,B,he.data)}else i.texImage2D(e.TEXTURE_2D,He,ue,he.width,he.height,0,Pe,B,he.data);E.generateMipmaps=!1}else if(be){if(Me)i.texStorage2D(e.TEXTURE_2D,rt,ue,fe.width,fe.height);if(tt)Ce(E,fe,Pe,B)}else i.texImage2D(e.TEXTURE_2D,0,ue,fe.width,fe.height,0,Pe,B,fe.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){if(be&&Me)i.texStorage3D(e.TEXTURE_2D_ARRAY,rt,ue,pe[0].width,pe[0].height,fe.depth);for(let He=0,ft=pe.length;He<ft;He++)if(he=pe[He],E.format!==ln)if(Pe!==null)if(be){if(tt)if(E.layerUpdates.size>0){let St=ud(he.width,he.height,E.format,E.type);for(let Ge of E.layerUpdates){let $t=he.data.subarray(Ge*St/he.data.BYTES_PER_ELEMENT,(Ge+1)*St/he.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,He,0,0,Ge,he.width,he.height,1,Pe,$t)}}else i.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,He,0,0,0,he.width,he.height,fe.depth,Pe,he.data)}else i.compressedTexImage3D(e.TEXTURE_2D_ARRAY,He,ue,he.width,he.height,fe.depth,0,he.data,0,0);else De("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(be){if(tt)i.texSubImage3D(e.TEXTURE_2D_ARRAY,He,0,0,0,he.width,he.height,fe.depth,Pe,B,he.data)}else i.texImage3D(e.TEXTURE_2D_ARRAY,He,ue,he.width,he.height,fe.depth,0,Pe,B,he.data);if(E.layerUpdates.size>0)E.clearLayerUpdates()}else{if(be&&Me)i.texStorage2D(e.TEXTURE_2D,rt,ue,pe[0].width,pe[0].height);for(let He=0,ft=pe.length;He<ft;He++)if(he=pe[He],E.format!==ln)if(Pe!==null)if(be){if(tt)i.compressedTexSubImage2D(e.TEXTURE_2D,He,0,0,he.width,he.height,Pe,he.data)}else i.compressedTexImage2D(e.TEXTURE_2D,He,ue,he.width,he.height,0,he.data);else De("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(be){if(tt)i.texSubImage2D(e.TEXTURE_2D,He,0,0,he.width,he.height,Pe,B,he.data)}else i.texImage2D(e.TEXTURE_2D,He,ue,he.width,he.height,0,Pe,B,he.data)}else if(E.isDataArrayTexture)if(be){if(Me)i.texStorage3D(e.TEXTURE_2D_ARRAY,rt,ue,fe.width,fe.height,fe.depth);if(tt)if(E.layerUpdates.size>0){let He=ud(fe.width,fe.height,E.format,E.type);for(let ft of E.layerUpdates){let St=fe.data.subarray(ft*He/fe.data.BYTES_PER_ELEMENT,(ft+1)*He/fe.data.BYTES_PER_ELEMENT);i.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,ft,fe.width,fe.height,1,Pe,B,St)}E.clearLayerUpdates()}else i.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,fe.width,fe.height,fe.depth,Pe,B,fe.data)}else i.texImage3D(e.TEXTURE_2D_ARRAY,0,ue,fe.width,fe.height,fe.depth,0,Pe,B,fe.data);else if(E.isData3DTexture)if(be){if(Me)i.texStorage3D(e.TEXTURE_3D,rt,ue,fe.width,fe.height,fe.depth);if(tt)i.texSubImage3D(e.TEXTURE_3D,0,0,0,0,fe.width,fe.height,fe.depth,Pe,B,fe.data)}else i.texImage3D(e.TEXTURE_3D,0,ue,fe.width,fe.height,fe.depth,0,Pe,B,fe.data);else if(E.isFramebufferTexture){if(Me)if(be)i.texStorage2D(e.TEXTURE_2D,rt,ue,fe.width,fe.height);else{let He=fe.width,ft=fe.height;for(let St=0;St<rt;St++)i.texImage2D(e.TEXTURE_2D,St,ue,He,ft,0,Pe,B,null),He>>=1,ft>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in e){let He=e.canvas;if(!He.hasAttribute("layoutsubtree"))He.setAttribute("layoutsubtree","true");if(fe.parentNode!==He){He.appendChild(fe),u.add(E),He.onpaint=(ft)=>{let St=ft.changedElements;for(let Ge of u)if(St.includes(Ge.image))Ge.needsUpdate=!0},He.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,fe);else{let{RGBA:St,RGBA:Ge,UNSIGNED_BYTE:$t}=e;e.texElementImage2D(e.TEXTURE_2D,0,St,Ge,$t,fe)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(pe.length>0){if(be&&Me){let He=Je(pe[0]);i.texStorage2D(e.TEXTURE_2D,rt,ue,He.width,He.height)}for(let He=0,ft=pe.length;He<ft;He++)if(he=pe[He],be){if(tt)i.texSubImage2D(e.TEXTURE_2D,He,0,0,Pe,B,he)}else i.texImage2D(e.TEXTURE_2D,He,ue,Pe,B,he);E.generateMipmaps=!1}else if(be){if(Me){let He=Je(fe);i.texStorage2D(e.TEXTURE_2D,rt,ue,He.width,He.height)}if(tt)i.texSubImage2D(e.TEXTURE_2D,0,0,0,Pe,B,fe)}else i.texImage2D(e.TEXTURE_2D,0,ue,Pe,B,fe);if(M(E)&&E.mipmapsAutoUpdate===!0)b(me);if(Re.__version=Te.version,E.onUpdate)E.onUpdate(E)}C.__version=E.version}function We(C,E,U){if(E.image.length!==6)return;let me=ge(C,E),le=E.source;i.bindTexture(e.TEXTURE_CUBE_MAP,C.__webglTexture,e.TEXTURE0+U);let Te=n.get(le);if(le.version!==Te.__version||me===!0){i.activeTexture(e.TEXTURE0+U);let Re=Et.getPrimaries(Et.workingColorSpace),J=E.colorSpace===vr?null:Et.getPrimaries(E.colorSpace),fe=E.colorSpace===vr||Re===J?e.NONE:e.BROWSER_DEFAULT_WEBGL;i.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(e.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,fe);let Pe=E.isCompressedTexture||E.image[0].isCompressedTexture,B=E.image[0]&&E.image[0].isDataTexture,ue=[];for(let Ge=0;Ge<6;Ge++){if(!Pe&&!B)ue[Ge]=y(E.image[Ge],!0,r.maxCubemapSize);else ue[Ge]=B?E.image[Ge].image:E.image[Ge];ue[Ge]=te(E,ue[Ge])}let he=ue[0],pe=s.convert(E.format,E.colorSpace),be=s.convert(E.type),Me=S(E.internalFormat,pe,be,E.normalized,E.colorSpace),tt=E.isVideoTexture!==!0,rt=Te.__version===void 0||me===!0,He=le.dataReady,ft=v(E,he);Tt(e.TEXTURE_CUBE_MAP,E);let St;if(E.isDepthTexture){if(Me=_(E.format===rr,E.type),rt)if(tt)i.texStorage2D(e.TEXTURE_CUBE_MAP,1,Me,he.width,he.height);else for(let Ge=0;Ge<6;Ge++)i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Ge,0,Me,he.width,he.height,0,pe,be,null)}else if(Pe){if(tt&&rt)i.texStorage2D(e.TEXTURE_CUBE_MAP,ft,Me,he.width,he.height);for(let Ge=0;Ge<6;Ge++){St=ue[Ge].mipmaps;for(let $t=0;$t<St.length;$t++){let ci=St[$t];if(E.format!==ln)if(pe!==null)if(tt){if(He)i.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Ge,$t,0,0,ci.width,ci.height,pe,ci.data)}else i.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Ge,$t,Me,ci.width,ci.height,0,ci.data);else De("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()");else if(tt){if(He)i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Ge,$t,0,0,ci.width,ci.height,pe,be,ci.data)}else i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Ge,$t,Me,ci.width,ci.height,0,pe,be,ci.data)}}}else{if(St=E.mipmaps,tt&&rt){if(St.length>0)ft++;let Ge=Je(ue[0]);i.texStorage2D(e.TEXTURE_CUBE_MAP,ft,Me,Ge.width,Ge.height)}for(let Ge=0;Ge<6;Ge++)if(B){if(tt){if(He)i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Ge,0,0,0,ue[Ge].width,ue[Ge].height,pe,be,ue[Ge].data)}else i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Ge,0,Me,ue[Ge].width,ue[Ge].height,0,pe,be,ue[Ge].data);for(let $t=0;$t<St.length;$t++){let Ci=St[$t].image[Ge].image;if(tt){if(He)i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Ge,$t+1,0,0,Ci.width,Ci.height,pe,be,Ci.data)}else i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Ge,$t+1,Me,Ci.width,Ci.height,0,pe,be,Ci.data)}}else{if(tt){if(He)i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Ge,0,0,0,pe,be,ue[Ge])}else i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Ge,0,Me,pe,be,ue[Ge]);for(let $t=0;$t<St.length;$t++){let ci=St[$t];if(tt){if(He)i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Ge,$t+1,0,0,pe,be,ci.image[Ge])}else i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Ge,$t+1,Me,pe,be,ci.image[Ge])}}}if(M(E)&&E.mipmapsAutoUpdate===!0)b(e.TEXTURE_CUBE_MAP);if(Te.__version=le.version,E.onUpdate)E.onUpdate(E)}C.__version=E.version}function st(C,E,U,me,le,Te){let Re=s.convert(U.format,U.colorSpace),J=s.convert(U.type),fe=S(U.internalFormat,Re,J,U.normalized,U.colorSpace),Pe=n.get(E),B=n.get(U);if(B.__renderTarget=E,!Pe.__hasExternalTextures){let ue=Math.max(1,E.width>>Te),he=Math.max(1,E.height>>Te);if(le===e.TEXTURE_3D||le===e.TEXTURE_2D_ARRAY)i.texImage3D(le,Te,fe,ue,he,E.depth,0,Re,J,null);else i.texImage2D(le,Te,fe,ue,he,0,Re,J,null)}if(i.bindFramebuffer(e.FRAMEBUFFER,C),Ht(E))a.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,me,le,B.__webglTexture,0,Le(E));else if(le===e.TEXTURE_2D||le>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&le<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)e.framebufferTexture2D(e.FRAMEBUFFER,me,le,B.__webglTexture,Te);i.bindFramebuffer(e.FRAMEBUFFER,null)}function Oe(C,E,U){if(e.bindRenderbuffer(e.RENDERBUFFER,C),E.depthBuffer){let me=E.depthTexture,le=me&&me.isDepthTexture?me.type:null,Te=_(E.stencilBuffer,le),Re=E.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(Ht(E))a.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Le(E),Te,E.width,E.height);else if(U)e.renderbufferStorageMultisample(e.RENDERBUFFER,Le(E),Te,E.width,E.height);else e.renderbufferStorage(e.RENDERBUFFER,Te,E.width,E.height);e.framebufferRenderbuffer(e.FRAMEBUFFER,Re,e.RENDERBUFFER,C)}else{let me=E.textures;for(let le=0;le<me.length;le++){let Te=me[le],Re=s.convert(Te.format,Te.colorSpace),J=s.convert(Te.type),fe=S(Te.internalFormat,Re,J,Te.normalized,Te.colorSpace);if(Ht(E))a.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Le(E),fe,E.width,E.height);else if(U)e.renderbufferStorageMultisample(e.RENDERBUFFER,Le(E),fe,E.width,E.height);else e.renderbufferStorage(e.RENDERBUFFER,fe,E.width,E.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function Lt(C,E,U){let me=E.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(e.FRAMEBUFFER,C),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let le=n.get(E.depthTexture);le.__renderTarget=E;let Te=me?E.depthTexture.image[0]:E.depthTexture.image;if(!le.__webglTexture||Te.width!==E.width||Te.height!==E.height)Te.width=E.width,Te.height=E.height,E.depthTexture.needsUpdate=!0;if(me)Ne(E.depthTexture,0);else ye(E.depthTexture,0);let Re=le.__webglTexture,J=Le(E),fe=me?e.TEXTURE_CUBE_MAP_POSITIVE_X+U:e.TEXTURE_2D,Pe=E.depthTexture.format===rr?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(E.depthTexture.format===Jn)if(Ht(E))a.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,Pe,fe,Re,0,J);else e.framebufferTexture2D(e.FRAMEBUFFER,Pe,fe,Re,0);else if(E.depthTexture.format===rr)if(Ht(E))a.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,Pe,fe,Re,0,J);else e.framebufferTexture2D(e.FRAMEBUFFER,Pe,fe,Re,0);else throw Error("THREE.WebGLTextures: Unknown depthTexture format.")}function wt(C){let E=n.get(C),U=C.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==C.depthTexture){let me=C.depthTexture;if(E.__depthDisposeCallback)E.__depthDisposeCallback();if(me){let le=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,me.removeEventListener("dispose",le)};me.addEventListener("dispose",le),E.__depthDisposeCallback=le}E.__boundDepthTexture=me}if(C.depthTexture&&!E.__autoAllocateDepthBuffer)if(U)for(let me=0;me<6;me++)Lt(E.__webglFramebuffer[me],C,me);else if(C.texture.mipmaps.length>0)Lt(E.__webglFramebuffer[0],C,0);else Lt(E.__webglFramebuffer,C,0);else if(U){E.__webglDepthbuffer=[];for(let me=0;me<6;me++)if(i.bindFramebuffer(e.FRAMEBUFFER,E.__webglFramebuffer[me]),E.__webglDepthbuffer[me]===void 0)E.__webglDepthbuffer[me]=e.createRenderbuffer(),Oe(E.__webglDepthbuffer[me],C,!1);else{let le=C.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,Te=E.__webglDepthbuffer[me];e.bindRenderbuffer(e.RENDERBUFFER,Te),e.framebufferRenderbuffer(e.FRAMEBUFFER,le,e.RENDERBUFFER,Te)}}else{if(C.texture.mipmaps.length>0)i.bindFramebuffer(e.FRAMEBUFFER,E.__webglFramebuffer[0]);else i.bindFramebuffer(e.FRAMEBUFFER,E.__webglFramebuffer);if(E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=e.createRenderbuffer(),Oe(E.__webglDepthbuffer,C,!1);else{let le=C.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,Te=E.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,Te),e.framebufferRenderbuffer(e.FRAMEBUFFER,le,e.RENDERBUFFER,Te)}}i.bindFramebuffer(e.FRAMEBUFFER,null)}function Dt(C,E,U){let me=n.get(C);if(E!==void 0)st(me.__webglFramebuffer,C,C.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0);if(U!==void 0)wt(C)}function H(C){let E=C.texture,U=n.get(C),me=n.get(E);C.addEventListener("dispose",O),w(C);let le=C.textures,Te=C.isWebGLCubeRenderTarget===!0,Re=le.length>1;if(!Re){if(me.__webglTexture===void 0)me.__webglTexture=e.createTexture();me.__version=E.version,o.memory.textures++}if(Te){U.__webglFramebuffer=[];for(let J=0;J<6;J++)if(E.mipmaps.length>0){U.__webglFramebuffer[J]=[];for(let fe=0;fe<E.mipmaps.length;fe++)U.__webglFramebuffer[J][fe]=e.createFramebuffer()}else U.__webglFramebuffer[J]=e.createFramebuffer()}else{if(E.mipmaps.length>0){U.__webglFramebuffer=[];for(let J=0;J<E.mipmaps.length;J++)U.__webglFramebuffer[J]=e.createFramebuffer()}else U.__webglFramebuffer=e.createFramebuffer();if(Re)for(let J=0,fe=le.length;J<fe;J++){let Pe=n.get(le[J]);if(Pe.__webglTexture===void 0)Pe.__webglTexture=e.createTexture(),o.memory.textures++}if(C.samples>0&&Ht(C)===!1){U.__webglMultisampledFramebuffer=e.createFramebuffer(),U.__webglColorRenderbuffer=[],i.bindFramebuffer(e.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let J=0;J<le.length;J++){let fe=le[J];U.__webglColorRenderbuffer[J]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,U.__webglColorRenderbuffer[J]);let Pe=s.convert(fe.format,fe.colorSpace),B=s.convert(fe.type),ue=S(fe.internalFormat,Pe,B,fe.normalized,fe.colorSpace,C.isXRRenderTarget===!0),he=Le(C);e.renderbufferStorageMultisample(e.RENDERBUFFER,he,ue,C.width,C.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+J,e.RENDERBUFFER,U.__webglColorRenderbuffer[J])}if(e.bindRenderbuffer(e.RENDERBUFFER,null),C.depthBuffer)U.__webglDepthRenderbuffer=e.createRenderbuffer(),Oe(U.__webglDepthRenderbuffer,C,!0);i.bindFramebuffer(e.FRAMEBUFFER,null)}}if(Te){i.bindTexture(e.TEXTURE_CUBE_MAP,me.__webglTexture),Tt(e.TEXTURE_CUBE_MAP,E);for(let J=0;J<6;J++)if(E.mipmaps.length>0)for(let fe=0;fe<E.mipmaps.length;fe++)st(U.__webglFramebuffer[J][fe],C,E,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+J,fe);else st(U.__webglFramebuffer[J],C,E,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+J,0);if(M(E))b(e.TEXTURE_CUBE_MAP);else if(E.mipmaps.length>0)e.texParameteri(e.TEXTURE_CUBE_MAP,e.TEXTURE_MAX_LEVEL,E.mipmaps.length-1);i.unbindTexture()}else if(Re){for(let J=0,fe=le.length;J<fe;J++){let Pe=le[J],B=n.get(Pe),ue=e.TEXTURE_2D;if(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)ue=C.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY;if(i.bindTexture(ue,B.__webglTexture),Tt(ue,Pe),st(U.__webglFramebuffer,C,Pe,e.COLOR_ATTACHMENT0+J,ue,0),M(Pe))b(ue)}i.unbindTexture()}else{let J=e.TEXTURE_2D;if(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)J=C.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY;if(i.bindTexture(J,me.__webglTexture),Tt(J,E),E.mipmaps.length>0)for(let fe=0;fe<E.mipmaps.length;fe++)st(U.__webglFramebuffer[fe],C,E,e.COLOR_ATTACHMENT0,J,fe);else st(U.__webglFramebuffer,C,E,e.COLOR_ATTACHMENT0,J,0);if(M(E))b(J);else if(E.mipmaps.length>0)e.texParameteri(J,e.TEXTURE_MAX_LEVEL,E.mipmaps.length-1);i.unbindTexture()}if(C.depthBuffer)wt(C)}function Bt(C){let E=C.textures;for(let U=0,me=E.length;U<me;U++){let le=E[U];if(M(le)&&le.mipmapsAutoUpdate===!0){let Te=T(C),Re=n.get(le).__webglTexture;i.bindTexture(Te,Re),b(Te),i.unbindTexture()}}}let Rt=[];function si(C){if(C.samples>0){if(Ht(C)===!1){let{textures:E,width:U,height:me}=C,le=e.COLOR_BUFFER_BIT,Te=C.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,Re=n.get(C),J=E.length>1;if(J)for(let Pe=0;Pe<E.length;Pe++)i.bindFramebuffer(e.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+Pe,e.RENDERBUFFER,null),i.bindFramebuffer(e.FRAMEBUFFER,Re.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+Pe,e.TEXTURE_2D,null,0);if(i.bindFramebuffer(e.READ_FRAMEBUFFER,Re.__webglMultisampledFramebuffer),C.texture.mipmaps.length>0)i.bindFramebuffer(e.DRAW_FRAMEBUFFER,Re.__webglFramebuffer[0]);else i.bindFramebuffer(e.DRAW_FRAMEBUFFER,Re.__webglFramebuffer);for(let Pe=0;Pe<E.length;Pe++){if(C.resolveDepthBuffer){if(C.depthBuffer)le|=e.DEPTH_BUFFER_BIT;if(C.stencilBuffer&&C.resolveStencilBuffer)le|=e.STENCIL_BUFFER_BIT}if(J){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,Re.__webglColorRenderbuffer[Pe]);let B=n.get(E[Pe]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,B,0)}if(e.blitFramebuffer(0,0,U,me,0,0,U,me,le,e.NEAREST),l===!0){if(Rt.length=0,Rt.push(e.COLOR_ATTACHMENT0+Pe),C.depthBuffer&&C.storeMultisampledDepthBuffer===!1)Rt.push(Te);e.invalidateFramebuffer(e.READ_FRAMEBUFFER,Rt)}}if(i.bindFramebuffer(e.READ_FRAMEBUFFER,null),i.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),J)for(let Pe=0;Pe<E.length;Pe++){i.bindFramebuffer(e.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+Pe,e.RENDERBUFFER,Re.__webglColorRenderbuffer[Pe]);let B=n.get(E[Pe]).__webglTexture;i.bindFramebuffer(e.FRAMEBUFFER,Re.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+Pe,e.TEXTURE_2D,B,0)}i.bindFramebuffer(e.DRAW_FRAMEBUFFER,Re.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&l){let E=C.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[E])}}}function Le(C){return Math.min(r.maxSamples,C.samples)}function Ht(C){let E=n.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function q(C){let E=o.render.frame;if(f.get(C)!==E)f.set(C,E),C.update()}function te(C,E){let{colorSpace:U,format:me,type:le}=C;if(C.isCompressedTexture===!0||C.isVideoTexture===!0)return E;if(U!==Tn&&U!==vr)if(Et.getTransfer(U)===Wt){if(me!==ln||le!==Ji)De("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.")}else it("WebGLTextures: Unsupported texture color space:",U);return E}function Je(C){if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement)c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height;else if(typeof VideoFrame<"u"&&C instanceof VideoFrame)c.width=C.displayWidth,c.height=C.displayHeight;else c.width=C.width,c.height=C.height;return c}this.allocateTextureUnit=X,this.resetTextureUnits=W,this.getTextureUnits=ee,this.setTextureUnits=de,this.setTexture2D=ye,this.setTexture2DArray=ve,this.setTexture3D=ke,this.setTextureCube=Ne,this.rebindTextures=Dt,this.setupRenderTarget=H,this.updateRenderTargetMipmap=Bt,this.updateMultisampleRenderTarget=si,this.setupDepthRenderbuffer=wt,this.setupFrameBufferTexture=st,this.useMultisampledRTT=Ht,this.dispose=K}function _d(e,t){function i(n,r=vr){let s,o=Et.getTransfer(r);if(n===Ji)return e.UNSIGNED_BYTE;if(n===da)return e.UNSIGNED_SHORT_4_4_4_4;if(n===pa)return e.UNSIGNED_SHORT_5_5_5_1;if(n===yf)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===Mf)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===xf)return e.BYTE;if(n===_f)return e.SHORT;if(n===us)return e.UNSIGNED_SHORT;if(n===ua)return e.INT;if(n===an)return e.UNSIGNED_INT;if(n===Wi)return e.FLOAT;if(n===Ii)return e.HALF_FLOAT;if(n===vf)return e.ALPHA;if(n===bf)return e.RGB;if(n===ln)return e.RGBA;if(n===Jn)return e.DEPTH_COMPONENT;if(n===rr)return e.DEPTH_STENCIL;if(n===ma)return e.RED;if(n===vo)return e.RED_INTEGER;if(n===sr)return e.RG;if(n===ga)return e.RG_INTEGER;if(n===xa)return e.RGBA_INTEGER;if(n===_a||n===ya||n===Ma||n===va)if(o===Wt)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===_a)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ya)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ma)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===va)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===_a)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ya)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ma)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===va)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Cl||n===Pl||n===Il||n===Ll)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Cl)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Pl)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Il)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ll)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Dl||n===Nl||n===Fl||n===Ul||n===Bl||n===bo||n===Ol)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Dl||n===Nl)return o===Wt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Fl)return o===Wt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===Ul)return s.COMPRESSED_R11_EAC;if(n===Bl)return s.COMPRESSED_SIGNED_R11_EAC;if(n===bo)return s.COMPRESSED_RG11_EAC;if(n===Ol)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Hl||n===zl||n===Gl||n===kl||n===Vl||n===Wl||n===Xl||n===Yl||n===ql||n===Kl||n===Zl||n===Jl||n===jl||n===$l)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Hl)return o===Wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===zl)return o===Wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Gl)return o===Wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===kl)return o===Wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Vl)return o===Wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Wl)return o===Wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Xl)return o===Wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Yl)return o===Wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ql)return o===Wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Kl)return o===Wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Zl)return o===Wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Jl)return o===Wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===jl)return o===Wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===$l)return o===Wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ql||n===ec||n===tc)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===Ql)return o===Wt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ec)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===tc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ic||n===nc||n===So||n===rc)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===ic)return s.COMPRESSED_RED_RGTC1_EXT;if(n===nc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===So)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===rc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;if(n===Nr)return e.UNSIGNED_INT_24_8;return e[n]!==void 0?e[n]:null}return{convert:i}}var jb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,$b=`
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

}`;class yd{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new Ya(e.texture);if(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)this.depthNear=e.depthNear,this.depthFar=e.depthFar;this.texture=i}}getMesh(e){if(this.texture!==null){if(this.mesh===null){let t=e.cameras[0].viewport,i=new Di({vertexShader:jb,fragmentShader:$b,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ae(new ei(20,20),i)}}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Md extends cn{constructor(e,t){super();let i=this,n=null,r=1,s=null,o="local-floor",a=1,l=null,c=null,f=null,u=null,h=null,m=null,g=typeof XRWebGLBinding<"u",x=new yd,d={},p=t.getContextAttributes(),y=null,M=null,b=[],T=[],S=new ne,_=null,v=null,w=new wi;w.viewport=new Xt;let I=new wi;I.viewport=new Xt;let P=[w,I],O=new Ah,Q=null,L=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let oe=b[X];if(oe===void 0)oe=new Pa,b[X]=oe;return oe.getTargetRaySpace()},this.getControllerGrip=function(X){let oe=b[X];if(oe===void 0)oe=new Pa,b[X]=oe;return oe.getGripSpace()},this.getHand=function(X){let oe=b[X];if(oe===void 0)oe=new Pa,b[X]=oe;return oe.getHandSpace()};function K(X){let oe=T.indexOf(X.inputSource);if(oe===-1)return;let ye=b[oe];if(ye!==void 0)ye.update(X.inputSource,X.frame,l||s),ye.dispatchEvent({type:X.type,data:X.inputSource})}function D(){n.removeEventListener("select",K),n.removeEventListener("selectstart",K),n.removeEventListener("selectend",K),n.removeEventListener("squeeze",K),n.removeEventListener("squeezestart",K),n.removeEventListener("squeezeend",K),n.removeEventListener("end",D),n.removeEventListener("inputsourceschange",N);for(let X=0;X<b.length;X++){let oe=T[X];if(oe===null)continue;T[X]=null,b[X].disconnect(oe)}Q=null,L=null,x.reset();for(let X in d)delete d[X];if(e.setRenderTarget(y),h=null,u=null,f=null,n=null,M=null,de.stop(),i.isPresenting=!1,e.setPixelRatio(_),e.setSize(S.width,S.height,!1),v!==null){let X=v.camera;X.fov=v.fov,X.zoom=v.zoom,X.updateProjectionMatrix(),v=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){if(r=X,i.isPresenting===!0)De("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){if(o=X,i.isPresenting===!0)De("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||s},this.setReferenceSpace=function(X){l=X},this.getBaseLayer=function(){return u!==null?u:h},this.getBinding=function(){if(f===null&&g)f=new XRWebGLBinding(n,t);return f},this.getFrame=function(){return m},this.getSession=function(){return n},this.setSession=async function(X){if(n=X,n!==null){if(y=e.getRenderTarget(),n.addEventListener("select",K),n.addEventListener("selectstart",K),n.addEventListener("selectend",K),n.addEventListener("squeeze",K),n.addEventListener("squeezestart",K),n.addEventListener("squeezeend",K),n.addEventListener("end",D),n.addEventListener("inputsourceschange",N),p.xrCompatible!==!0)await t.makeXRCompatible();if(_=e.getPixelRatio(),e.getSize(S),!(g&&("createProjectionLayer"in XRWebGLBinding.prototype))){let ye={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};h=new XRWebGLLayer(n,t,ye),n.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),M=new Ti(h.framebufferWidth,h.framebufferHeight,{format:ln,type:Ji,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{let ye=null,ve=null,ke=null;if(p.depth)ke=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ye=p.stencil?rr:Jn,ve=p.stencil?Nr:an;let Ne={colorFormat:t.RGBA8,depthFormat:ke,scaleFactor:r};f=this.getBinding(),u=f.createProjectionLayer(Ne),n.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),M=new Ti(u.textureWidth,u.textureHeight,{format:ln,type:Ji,depthTexture:new cr(u.textureWidth,u.textureHeight,ve,void 0,void 0,void 0,void 0,void 0,void 0,ye),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(a),l=null,s=await n.requestReferenceSpace(o),de.setContext(n),de.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function N(X){for(let oe=0;oe<X.removed.length;oe++){let ye=X.removed[oe],ve=T.indexOf(ye);if(ve>=0)T[ve]=null,b[ve].disconnect(ye)}for(let oe=0;oe<X.added.length;oe++){let ye=X.added[oe],ve=T.indexOf(ye);if(ve===-1){for(let Ne=0;Ne<b.length;Ne++)if(Ne>=T.length){T.push(ye),ve=Ne;break}else if(T[Ne]===null){T[Ne]=ye,ve=Ne;break}if(ve===-1)break}let ke=b[ve];if(ke)ke.connect(ye)}}function se(X,oe){if(oe===null)X.matrixWorld.copy(X.matrix);else X.matrixWorld.multiplyMatrices(oe.matrixWorld,X.matrix);X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(n===null)return;let{near:oe,far:ye}=X;if(x.texture!==null){if(x.depthNear>0)oe=x.depthNear;if(x.depthFar>0)ye=x.depthFar}if(O.near=I.near=w.near=oe,O.far=I.far=w.far=ye,Q!==O.near||L!==O.far)n.updateRenderState({depthNear:O.near,depthFar:O.far}),Q=O.near,L=O.far;O.layers.mask=X.layers.mask|6,w.layers.mask=O.layers.mask&-5,I.layers.mask=O.layers.mask&-3;let ve=X.parent,ke=O.cameras;se(O,ve);for(let Ne=0;Ne<ke.length;Ne++)se(ke[Ne],ve);if(O.projectionMatrix.copy(w.projectionMatrix),O.projectionMatrixInverse.copy(w.projectionMatrixInverse),v===null&&X.isPerspectiveCamera)v={camera:X,fov:X.fov,zoom:X.zoom};Y(X,O,ve)};function Y(X,oe,ye){if(ye===null)X.matrix.copy(oe.matrixWorld);else X.matrix.copy(ye.matrixWorld),X.matrix.invert(),X.matrix.multiply(oe.matrixWorld);if(X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(oe.projectionMatrix),X.projectionMatrixInverse.copy(oe.projectionMatrixInverse),X.isPerspectiveCamera)X.fov=ms*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1}this.getCamera=function(){return O},this.getFoveation=function(){if(u===null&&h===null)return;return a},this.setFoveation=function(X){if(a=X,u!==null)u.fixedFoveation=X;if(h!==null&&h.fixedFoveation!==void 0)h.fixedFoveation=X},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(O)},this.getCameraTexture=function(X){return d[X]};let W=null;function ee(X,oe){if(c=oe.getViewerPose(l||s),m=oe,c!==null){let ye=c.views;if(h!==null)e.setRenderTargetFramebuffer(M,h.framebuffer),e.setRenderTarget(M);let ve=!1;if(ye.length!==O.cameras.length)O.cameras.length=0,ve=!0;for(let Xe=0;Xe<ye.length;Xe++){let Ye=ye[Xe],Tt=null;if(h!==null)Tt=h.getViewport(Ye);else{let Ee=f.getViewSubImage(u,Ye);if(Tt=Ee.viewport,Xe===0)e.setRenderTargetTextures(M,Ee.colorTexture,Ee.depthStencilTexture),e.setRenderTarget(M)}let ge=P[Xe];if(ge===void 0)ge=new wi,ge.layers.enable(Xe),ge.viewport=new Xt,P[Xe]=ge;if(ge.matrix.fromArray(Ye.transform.matrix),ge.matrix.decompose(ge.position,ge.quaternion,ge.scale),ge.projectionMatrix.fromArray(Ye.projectionMatrix),ge.projectionMatrixInverse.copy(ge.projectionMatrix).invert(),ge.viewport.set(Tt.x,Tt.y,Tt.width,Tt.height),Xe===0)O.matrix.copy(ge.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale);if(ve===!0)O.cameras.push(ge)}let ke=n.enabledFeatures;if(ke&&ke.includes("depth-sensing")&&n.depthUsage=="gpu-optimized"&&g){f=i.getBinding();let Xe=f.getDepthInformation(ye[0]);if(Xe&&Xe.isValid&&Xe.texture)x.init(Xe,n.renderState)}if(ke&&ke.includes("camera-access")&&g){e.state.unbindTexture(),f=i.getBinding();for(let Xe=0;Xe<ye.length;Xe++){let Ye=ye[Xe].camera;if(Ye){let Tt=d[Ye];if(!Tt)Tt=new Ya,d[Ye]=Tt;let ge=f.getCameraImage(Ye);Tt.sourceTexture=ge}}}}for(let ye=0;ye<b.length;ye++){let ve=T[ye],ke=b[ye];if(ve!==null&&ke!==void 0)ke.update(ve,oe,l||s)}if(W)W(X,oe);if(oe.detectedPlanes)i.dispatchEvent({type:"planesdetected",data:oe});m=null}let de=new Ph;de.setAnimationLoop(ee),this.setAnimationLoop=function(X){W=X},this.dispose=function(){}}}var Qb=new $e,G_=new mt;G_.set(-1,0,0,0,1,0,0,0,1);function k_(e,t){function i(d,p){if(d.matrixAutoUpdate===!0)d.updateMatrix();p.value.copy(d.matrix)}function n(d,p){if(p.color.getRGB(d.fogColor.value,_h(e)),p.isFog)d.fogNear.value=p.near,d.fogFar.value=p.far;else if(p.isFogExp2)d.fogDensity.value=p.density}function r(d,p,y,M,b){if(p.isNodeMaterial)p.uniformsNeedUpdate=!1;else if(p.isMeshBasicMaterial)s(d,p);else if(p.isMeshLambertMaterial){if(s(d,p),p.envMap)d.envMapIntensity.value=p.envMapIntensity}else if(p.isMeshToonMaterial)s(d,p),u(d,p);else if(p.isMeshPhongMaterial){if(s(d,p),f(d,p),p.envMap)d.envMapIntensity.value=p.envMapIntensity}else if(p.isMeshStandardMaterial){if(s(d,p),h(d,p),p.isMeshPhysicalMaterial)m(d,p,b)}else if(p.isMeshMatcapMaterial)s(d,p),g(d,p);else if(p.isMeshDepthMaterial)s(d,p);else if(p.isMeshDistanceMaterial)s(d,p),x(d,p);else if(p.isMeshNormalMaterial)s(d,p);else if(p.isLineBasicMaterial){if(o(d,p),p.isLineDashedMaterial)a(d,p)}else if(p.isPointsMaterial)l(d,p,y,M);else if(p.isSpriteMaterial)c(d,p);else if(p.isShadowMaterial)d.color.value.copy(p.color),d.opacity.value=p.opacity;else if(p.isShaderMaterial)p.uniformsNeedUpdate=!1}function s(d,p){if(d.opacity.value=p.opacity,p.color)d.diffuse.value.copy(p.color);if(p.emissive)d.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity);if(p.map)d.map.value=p.map,i(p.map,d.mapTransform);if(p.alphaMap)d.alphaMap.value=p.alphaMap,i(p.alphaMap,d.alphaMapTransform);if(p.bumpMap){if(d.bumpMap.value=p.bumpMap,i(p.bumpMap,d.bumpMapTransform),d.bumpScale.value=p.bumpScale,p.side===Mi)d.bumpScale.value*=-1}if(p.normalMap){if(d.normalMap.value=p.normalMap,i(p.normalMap,d.normalMapTransform),d.normalScale.value.copy(p.normalScale),p.side===Mi)d.normalScale.value.negate()}if(p.displacementMap)d.displacementMap.value=p.displacementMap,i(p.displacementMap,d.displacementMapTransform),d.displacementScale.value=p.displacementScale,d.displacementBias.value=p.displacementBias;if(p.emissiveMap)d.emissiveMap.value=p.emissiveMap,i(p.emissiveMap,d.emissiveMapTransform);if(p.specularMap)d.specularMap.value=p.specularMap,i(p.specularMap,d.specularMapTransform);if(p.alphaTest>0)d.alphaTest.value=p.alphaTest;let y=t.get(p),{envMap:M,envMapRotation:b}=y;if(M){if(d.envMap.value=M,d.envMapRotation.value.setFromMatrix4(Qb.makeRotationFromEuler(b)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1)d.envMapRotation.value.premultiply(G_);d.reflectivity.value=p.reflectivity,d.ior.value=p.ior,d.refractionRatio.value=p.refractionRatio}if(p.lightMap)d.lightMap.value=p.lightMap,d.lightMapIntensity.value=p.lightMapIntensity,i(p.lightMap,d.lightMapTransform);if(p.aoMap)d.aoMap.value=p.aoMap,d.aoMapIntensity.value=p.aoMapIntensity,i(p.aoMap,d.aoMapTransform)}function o(d,p){if(d.diffuse.value.copy(p.color),d.opacity.value=p.opacity,p.map)d.map.value=p.map,i(p.map,d.mapTransform)}function a(d,p){d.dashSize.value=p.dashSize,d.totalSize.value=p.dashSize+p.gapSize,d.scale.value=p.scale}function l(d,p,y,M){if(d.diffuse.value.copy(p.color),d.opacity.value=p.opacity,d.size.value=p.size*y,d.scale.value=M*0.5,p.map)d.map.value=p.map,i(p.map,d.uvTransform);if(p.alphaMap)d.alphaMap.value=p.alphaMap,i(p.alphaMap,d.alphaMapTransform);if(p.alphaTest>0)d.alphaTest.value=p.alphaTest}function c(d,p){if(d.diffuse.value.copy(p.color),d.opacity.value=p.opacity,d.rotation.value=p.rotation,p.map)d.map.value=p.map,i(p.map,d.mapTransform);if(p.alphaMap)d.alphaMap.value=p.alphaMap,i(p.alphaMap,d.alphaMapTransform);if(p.alphaTest>0)d.alphaTest.value=p.alphaTest}function f(d,p){d.specular.value.copy(p.specular),d.shininess.value=Math.max(p.shininess,0.0001)}function u(d,p){if(p.gradientMap)d.gradientMap.value=p.gradientMap}function h(d,p){if(d.metalness.value=p.metalness,p.metalnessMap)d.metalnessMap.value=p.metalnessMap,i(p.metalnessMap,d.metalnessMapTransform);if(d.roughness.value=p.roughness,p.roughnessMap)d.roughnessMap.value=p.roughnessMap,i(p.roughnessMap,d.roughnessMapTransform);if(p.envMap)d.envMapIntensity.value=p.envMapIntensity}function m(d,p,y){if(d.ior.value=p.ior,p.diffuseRoughness>0){if(d.diffuseRoughness.value=p.diffuseRoughness,p.diffuseRoughnessMap)d.diffuseRoughnessMap.value=p.diffuseRoughnessMap,i(p.diffuseRoughnessMap,d.diffuseRoughnessMapTransform)}if(p.sheen>0){if(d.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),d.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap)d.sheenColorMap.value=p.sheenColorMap,i(p.sheenColorMap,d.sheenColorMapTransform);if(p.sheenRoughnessMap)d.sheenRoughnessMap.value=p.sheenRoughnessMap,i(p.sheenRoughnessMap,d.sheenRoughnessMapTransform)}if(p.clearcoat>0){if(d.clearcoat.value=p.clearcoat,d.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap)d.clearcoatMap.value=p.clearcoatMap,i(p.clearcoatMap,d.clearcoatMapTransform);if(p.clearcoatRoughnessMap)d.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,i(p.clearcoatRoughnessMap,d.clearcoatRoughnessMapTransform);if(p.clearcoatNormalMap){if(d.clearcoatNormalMap.value=p.clearcoatNormalMap,i(p.clearcoatNormalMap,d.clearcoatNormalMapTransform),d.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Mi)d.clearcoatNormalScale.value.negate()}}if(p.dispersion>0)d.dispersion.value=p.dispersion;if(p.retroreflectivity>0)d.retroreflectivity.value=p.retroreflectivity;if(p.iridescence>0){if(d.iridescence.value=p.iridescence,d.iridescenceIOR.value=p.iridescenceIOR,d.iridescenceThicknessMinimum.value=p.iridescenceThicknessMinimum,d.iridescenceThicknessMaximum.value=p.iridescenceThicknessMaximum,p.iridescenceMap)d.iridescenceMap.value=p.iridescenceMap,i(p.iridescenceMap,d.iridescenceMapTransform);if(p.iridescenceThicknessMap)d.iridescenceThicknessMap.value=p.iridescenceThicknessMap,i(p.iridescenceThicknessMap,d.iridescenceThicknessMapTransform)}if(p.transmission>0){if(d.transmission.value=p.transmission,d.transmissionSamplerMap.value=y.texture,d.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap)d.transmissionMap.value=p.transmissionMap,i(p.transmissionMap,d.transmissionMapTransform);if(d.thickness.value=p.thickness,p.thicknessMap)d.thicknessMap.value=p.thicknessMap,i(p.thicknessMap,d.thicknessMapTransform);d.attenuationDistance.value=p.attenuationDistance,d.attenuationColor.value.copy(p.attenuationColor)}if(p.anisotropy>0){if(d.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap)d.anisotropyMap.value=p.anisotropyMap,i(p.anisotropyMap,d.anisotropyMapTransform)}if(d.specularIntensity.value=p.specularIntensity,d.specularColor.value.copy(p.specularColor),p.specularColorMap)d.specularColorMap.value=p.specularColorMap,i(p.specularColorMap,d.specularColorMapTransform);if(p.specularIntensityMap)d.specularIntensityMap.value=p.specularIntensityMap,i(p.specularIntensityMap,d.specularIntensityMapTransform)}function g(d,p){if(p.matcap)d.matcap.value=p.matcap}function x(d,p){let y=t.get(p).light;d.referencePosition.value.setFromMatrixPosition(y.matrixWorld),d.nearDistance.value=y.shadow.camera.near,d.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function V_(e,t,i,n){let r={},s={};function o(y,M){let b=M.program;n.uniformBlockBinding(y,b,r[y.id])}function a(y,M){let b=r[y.id];if(b===void 0)g(y),b=l(y),r[y.id]=b,y.addEventListener("dispose",d);let T=M.program;n.updateUBOMapping(y,T);let S=t.render.frame;if(s[y.id]!==S)c(y),s[y.id]=S}function l(y){let M=e.createBuffer(),{__size:b,usage:T}=y;return e.bindBuffer(e.UNIFORM_BUFFER,M),e.bufferData(e.UNIFORM_BUFFER,b,T),e.bindBuffer(e.UNIFORM_BUFFER,null),M}function c(y){let M=r[y.id],{uniforms:b,__cache:T}=y;e.bindBuffer(e.UNIFORM_BUFFER,M);for(let S=0,_=b.length;S<_;S++){let v=b[S];if(Array.isArray(v))for(let w=0,I=v.length;w<I;w++)f(v[w],S,w,T);else f(v,S,0,T)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function f(y,M,b,T){if(h(y,M,b,T)===!0){let{__offset:S,value:_}=y;if(Array.isArray(_)){let v=0;for(let w=0;w<_.length;w++){let I=_[w],P=x(I,!0);u(I,y.__data,v),v+=P.storage/Float32Array.BYTES_PER_ELEMENT}}else u(_,y.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,S,y.__data)}}function u(y,M,b){if(typeof y==="number"||typeof y==="boolean")M[b]=y;else if(y.isMatrix3)M[b]=y.elements[0],M[b+1]=y.elements[1],M[b+2]=y.elements[2],M[b+3]=0,M[b+4]=y.elements[3],M[b+5]=y.elements[4],M[b+6]=y.elements[5],M[b+7]=0,M[b+8]=y.elements[6],M[b+9]=y.elements[7],M[b+10]=y.elements[8],M[b+11]=0;else if(ArrayBuffer.isView(y))M.set(y.subarray(0,M.length-b),b);else y.toArray(M,b)}function h(y,M,b,T){let S=y.value,_=M+"_"+b;if(Array.isArray(S)){if(T[_]===void 0)T[_]=[];let v=T[_],w=!1;for(let I=0;I<S.length;I++)if(m(S[I],v,I)===!0)w=!0;return w}return m(S,T,_)}function m(y,M,b){if(M[b]===void 0){if(typeof y==="number"||typeof y==="boolean")M[b]=y;else if(ArrayBuffer.isView(y))M[b]=y.slice();else M[b]=y.clone();return!0}else{let T=M[b];if(typeof y==="number"||typeof y==="boolean"){if(T!==y)return M[b]=y,!0}else if(ArrayBuffer.isView(y))return!0;else if(T.equals(y)===!1)return T.copy(y),!0}return!1}function g(y){let M=y.uniforms,b=0,T=16;for(let _=0,v=M.length;_<v;_++){let w=Array.isArray(M[_])?M[_]:[M[_]];for(let I=0,P=w.length;I<P;I++){let O=w[I],Q=Array.isArray(O.value)?O.value:[O.value],L=Array.isArray(M[_])||Array.isArray(O.value),K=b;for(let N=0,se=Q.length;N<se;N++){let Y=Q[N],W=x(Y,L),ee=b%T,de=ee%W.boundary,X=ee+de;if(b+=de,X!==0&&T-X<W.storage)b+=T-X;if(N===0)K=b;b+=W.storage}let D=O.type==="int"?Int32Array:O.type==="uint"?Uint32Array:Float32Array;O.__data=new D((b-K)/Float32Array.BYTES_PER_ELEMENT),O.__offset=K}}let S=b%T;if(S>0)b+=T-S;return y.__size=b,y.__cache={},this}function x(y,M){let b={boundary:0,storage:0};if(typeof y==="number"||typeof y==="boolean")b.boundary=4,b.storage=4;else if(y.isVector2)b.boundary=8,b.storage=8;else if(y.isVector3||y.isColor)b.boundary=16,b.storage=12;else if(y.isVector4)b.boundary=16,b.storage=16;else if(y.isMatrix3)b.boundary=16,b.storage=48;else if(y.isMatrix4)b.boundary=16,b.storage=64;else if(y.isTexture)De("WebGLRenderer: Texture samplers can not be part of an uniforms group.");else if(ArrayBuffer.isView(y))b.boundary=16,b.storage=y.byteLength;else De("WebGLRenderer: Unsupported uniform value type.",y);if(M===!0)b.boundary=16,b.storage=Math.ceil(b.storage/16)*16;return b}function d(y){let M=y.target;M.removeEventListener("dispose",d),e.deleteBuffer(r[M.id]),delete r[M.id],delete s[M.id]}function p(){for(let y in r)e.deleteBuffer(r[y]);r={},s={}}return{bind:o,update:a,dispose:p}}var eS=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),ns=null;function W_(){if(ns===null)ns=new zr(eS,16,16,sr,Ii),ns.name="DFG_LUT",ns.minFilter=_i,ns.magFilter=_i,ns.wrapS=on,ns.wrapT=on,ns.generateMipmaps=!1,ns.needsUpdate=!0;return ns}class Fh{constructor(e={}){let{canvas:t=gu(),context:i=null,depth:n=!0,stencil:r=!1,alpha:s=!1,antialias:o=!1,premultipliedAlpha:a=!0,preserveDrawingBuffer:l=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:u=!1,outputBufferType:h=Ji}=e;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=s;let g=h,x=new Set([xa,ga,vo]),d=new Set([Ji,an,us,Nr,da,pa]),p=new Uint32Array(4),y=new Int32Array(4),M={textures:[],min:[],max:[],resolution:[]},b=null,T=null,S=[],_=[],v=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=nr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let w=this,I=!1,P=null,O=null,Q=null,L=null;this._outputColorSpace=Ft;let K=0,D=0,N=null,se=-1,Y=null,W=new Xt,ee=new Xt,de=null,X=new Se(0),oe=0,{width:ye,height:ve}=t,ke=1,Ne=null,xt=null,Xe=new Xt(0,0,ye,ve),Ye=new Xt(0,0,ye,ve),Tt=!1,ge=new Tr,Ee=new Wa,Ce=!1,Ve=!1,We=new $e,st=new R,Oe=new Xt,Lt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},wt=!1;function Dt(){return N===null?ke:1}let H=i;function Bt(A,k){return t.getContext(A,k)}let Rt,si,Le,Ht,q,te,Je,C,E,U,me,le,Te,Re,J,fe,Pe,B,ue,he,pe,be,Me;try{let A={alpha:!0,depth:n,stencil:r,antialias:o,premultipliedAlpha:a,preserveDrawingBuffer:l,powerPreference:c,failIfMajorPerformanceCaveat:f};if("setAttribute"in t)t.setAttribute("data-engine",`three.js r${xl}`);if(t.addEventListener("webglcontextlost",He,!1),t.addEventListener("webglcontextrestored",ft,!1),t.addEventListener("webglcontextcreationerror",St,!1),H===null){if(H=Bt("webgl2",A),H===null)if(Bt("webgl2"))throw Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.");else throw Error("THREE.WebGLRenderer: Error creating WebGL context.")}tt()}catch(A){throw t.removeEventListener("webglcontextlost",He,!1),t.removeEventListener("webglcontextrestored",ft,!1),t.removeEventListener("webglcontextcreationerror",St,!1),it("WebGLRenderer: "+A.message),A}function tt(){if(Rt=new jx(H),Rt.init(),pe=new _d(H,Rt),si=new kx(H,Rt,e,pe),Le=new H_(H,Rt),si.reversedDepthBuffer&&u)Le.buffers.depth.setReversed(!0);O=H.createFramebuffer(),Q=H.createFramebuffer(),L=H.createFramebuffer(),Ht=new e_(H),q=new R_,te=new z_(H,Rt,Le,q,si,pe,Ht),Je=new Jx(w),C=new rm(H),be=new zx(H,C),E=new $x(H,C,Ht,be),U=new i_(H,E,C,be,Ht),B=new t_(H,si,te),J=new Vx(q),me=new A_(w,Je,Rt,si,be,J),le=new k_(w,q),Te=new I_,Re=new N_(Rt),Pe=new Hx(w,Je,Le,U,m,a),fe=new O_(w,U,si),Me=new V_(H,Ht,si,Le),ue=new Gx(H,Rt,Ht),he=new Qx(H,Rt,Ht),Ht.programs=me.programs,w.capabilities=si,w.extensions=Rt,w.properties=q,w.renderLists=Te,w.shadowMap=fe,w.state=Le,w.info=Ht}if(g!==Ji)v=new n_(g,t.width,t.height,o,n,r);let rt=new Md(w,H);this.xr=rt,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){let A=Rt.get("WEBGL_lose_context");if(A)A.loseContext()},this.forceContextRestore=function(){let A=Rt.get("WEBGL_lose_context");if(A)A.restoreContext()},this.getPixelRatio=function(){return ke},this.setPixelRatio=function(A){if(A===void 0)return;ke=A,this.setSize(ye,ve,!1)},this.getSize=function(A){return A.set(ye,ve)},this.setSize=function(A,k,j=!0){if(rt.isPresenting){De("WebGLRenderer: Can't change size while VR device is presenting.");return}if(ye=A,ve=k,t.width=Math.floor(A*ke),t.height=Math.floor(k*ke),j===!0)t.style.width=A+"px",t.style.height=k+"px";if(v!==null)v.setSize(t.width,t.height);this.setViewport(0,0,A,k)},this.getDrawingBufferSize=function(A){return A.set(ye*ke,ve*ke).floor()},this.setDrawingBufferSize=function(A,k,j){ye=A,ve=k,ke=j,t.width=Math.floor(A*j),t.height=Math.floor(k*j),this.setViewport(0,0,A,k)},this.setEffects=function(A){if(g===Ji){it("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let k=0;k<A.length;k++)if(A[k].isOutputPass===!0){De("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}v.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(W)},this.getViewport=function(A){return A.copy(Xe)},this.setViewport=function(A,k,j,ie){if(A.isVector4)Xe.set(A.x,A.y,A.z,A.w);else Xe.set(A,k,j,ie);Le.viewport(W.copy(Xe).multiplyScalar(Dt()).round())},this.getScissor=function(A){return A.copy(Ye)},this.setScissor=function(A,k,j,ie){if(A.isVector4)Ye.set(A.x,A.y,A.z,A.w);else Ye.set(A,k,j,ie);Le.scissor(ee.copy(Ye).multiplyScalar(Dt()).round())},this.getScissorTest=function(){return Tt},this.setScissorTest=function(A){Le.setScissorTest(Tt=A)},this.setOpaqueSort=function(A){Ne=A},this.setTransparentSort=function(A){xt=A},this.getClearColor=function(A){return A.copy(Pe.getClearColor())},this.setClearColor=function(){Pe.setClearColor(...arguments)},this.getClearAlpha=function(){return Pe.getClearAlpha()},this.setClearAlpha=function(){Pe.setClearAlpha(...arguments)},this.clear=function(A=!0,k=!0,j=!0){let ie=0;if(A){let re=!1;if(N!==null){let ze=N.texture.format;re=x.has(ze)}if(re){let ze=N.texture.type,at=d.has(ze),Ie=Pe.getClearColor(),je=Pe.getClearAlpha(),{r:ht,g:Ct,b:zt}=Ie;if(at)p[0]=ht,p[1]=Ct,p[2]=zt,p[3]=je,H.clearBufferuiv(H.COLOR,0,p);else y[0]=ht,y[1]=Ct,y[2]=zt,y[3]=je,H.clearBufferiv(H.COLOR,0,y)}else ie|=H.COLOR_BUFFER_BIT}if(k)ie|=H.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0);if(j)ie|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295);if(ie!==0)H.clear(ie)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),P=A},this.dispose=function(){t.removeEventListener("webglcontextlost",He,!1),t.removeEventListener("webglcontextrestored",ft,!1),t.removeEventListener("webglcontextcreationerror",St,!1),Pe.dispose(),Te.dispose(),Re.dispose(),te.dispose(),q.dispose(),Je.dispose(),U.dispose(),E.dispose(),be.dispose(),Me.dispose(),me.dispose(),rt.dispose(),rt.removeEventListener("sessionstart",Vn),rt.removeEventListener("sessionend",po),cs.stop()};function He(A){A.preventDefault(),wo("WebGLRenderer: Context Lost."),I=!0}function ft(){wo("WebGLRenderer: Context Restored."),I=!1;let A=Ht.autoReset,k=fe.enabled,j=fe.autoUpdate,ie=fe.needsUpdate,re=fe.type;tt(),Ht.autoReset=A,fe.enabled=k,fe.autoUpdate=j,fe.needsUpdate=ie,fe.type=re}function St(A){it("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Ge(A){let k=A.target;k.removeEventListener("dispose",Ge),$t(k)}function $t(A){ci(A),q.remove(A)}function ci(A){let k=q.get(A).programs;if(k!==void 0){if(k.forEach(function(j){me.releaseProgram(j)}),A.isShaderMaterial)me.releaseShaderCache(A)}}this.renderBufferDirect=function(A,k,j,ie,re,ze){if(k===null)k=Lt;let at=re.isMesh&&re.matrixWorld.determinantAffine()<0,Ie=ru(A,k,j,ie,re);Le.setMaterial(ie,at);let je=j.index,ht=1;if(ie.wireframe===!0){if(je=E.getWireframeAttribute(j),je===void 0)return;ht=2}let Ct=j.drawRange,zt=j.attributes.position,ot=Ct.start*ht,Gt=(Ct.start+Ct.count)*ht;if(ze!==null)ot=Math.max(ot,ze.start*ht),Gt=Math.min(Gt,(ze.start+ze.count)*ht);if(je!==null)ot=Math.max(ot,0),Gt=Math.min(Gt,je.count);else if(zt!==void 0&&zt!==null)ot=Math.max(ot,0),Gt=Math.min(Gt,zt.count);let Pi=Gt-ot;if(Pi<0||Pi===1/0)return;be.setup(re,ie,Ie,j,je);let fi,li=ue;if(je!==null)fi=C.get(je),li=he,li.setIndex(fi);if(re.isMesh)if(ie.wireframe===!0)Le.setLineWidth(ie.wireframeLinewidth*Dt()),li.setMode(H.LINES);else li.setMode(H.TRIANGLES);else if(re.isLine){let pn=ie.linewidth;if(pn===void 0)pn=1;if(Le.setLineWidth(pn*Dt()),re.isLineSegments)li.setMode(H.LINES);else if(re.isLineLoop)li.setMode(H.LINE_LOOP);else li.setMode(H.LINE_STRIP)}else if(re.isPoints)li.setMode(H.POINTS);else if(re.isSprite)li.setMode(H.TRIANGLES);if(re.isBatchedMesh)if(!Rt.get("WEBGL_multi_draw")){let{_multiDrawStarts:pn,_multiDrawCounts:lt,_multiDrawCount:Qi}=re,we=je?C.get(je).bytesPerElement:1,xr=q.get(ie).currentProgram.getUniforms();for(let Bi=0;Bi<Qi;Bi++)xr.setValue(H,"_gl_DrawID",Bi),li.render(pn[Bi]/we,lt[Bi])}else li.renderMultiDraw(re._multiDrawStarts,re._multiDrawCounts,re._multiDrawCount);else if(re.isInstancedMesh)li.renderInstances(ot,Pi,re.count);else if(j.isInstancedBufferGeometry){let pn=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,lt=Math.min(j.instanceCount,pn);li.renderInstances(ot,Pi,lt)}else li.render(ot,Pi)};function Ci(A,k,j,ie){if(P!==null&&A.isNodeMaterial)P.setObject(ie,A);if(Ce===!0)J.setState(A,j,!1);if(A.transparent===!0&&A.side===Kt&&A.forceSinglePass===!1)A.side=Mi,A.needsUpdate=!0,Kn(A,k,ie),A.side=Zn,A.needsUpdate=!0,Kn(A,k,ie),A.side=Kt;else Kn(A,k,ie)}this.compile=function(A,k,j=null){if(j===null)j=A;if(P!==null)P.renderStart(A,k,j);if(T=Re.get(j),T.init(k),_.push(T),j.traverseVisible(function(re){if(re.isLight&&re.layers.test(k.layers)){if(T.pushLight(re),re.castShadow)T.pushShadow(re)}}),A!==j)A.traverseVisible(function(re){if(re.isLight&&re.layers.test(k.layers)){if(T.pushLight(re),re.castShadow)T.pushShadow(re)}});if(T.setupLights(),P!==null)P.updateLights(T.state.lightsArray);if(Ve=this.localClippingEnabled,Ce=J.init(this.clippingPlanes,Ve),Ce===!0)J.setGlobalState(this.clippingPlanes,k);if(P!==null)fe.render(T.state.shadowsArray,j,k);let ie=new Set;if(A.traverse(function(re){if(!(re.isMesh||re.isPoints||re.isLine||re.isSprite))return;let ze=re.material;if(ze)if(Array.isArray(ze))for(let at=0;at<ze.length;at++){let Ie=ze[at];Ci(Ie,j,k,re),ie.add(Ie)}else Ci(ze,j,k,re),ie.add(ze)}),T=_.pop(),P!==null)P.renderEnd();return ie},this.compileAsync=function(A,k,j=null){let ie=this.compile(A,k,j);return new Promise((re)=>{function ze(){if(ie.forEach(function(at){let je=q.get(at).currentProgram;if(je===void 0||je.isReady())ie.delete(at)}),ie.size===0){re(A);return}setTimeout(ze,10)}if(Rt.get("KHR_parallel_shader_compile")!==null)ze();else setTimeout(ze,10)})};let Vi=null;function yi(A){if(Vi)Vi(A)}function Vn(){cs.stop()}function po(){cs.start()}let cs=new Ph;if(cs.setAnimationLoop(yi),typeof self<"u")cs.setContext(self);this.setAnimationLoop=function(A){Vi=A,rt.setAnimationLoop(A),A===null?cs.stop():cs.start()},rt.addEventListener("sessionstart",Vn),rt.addEventListener("sessionend",po),this.render=function(A,k){if(k!==void 0&&k.isCamera!==!0){it("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;if(P!==null)P.renderStart(A,k);let j=rt.enabled===!0&&rt.isPresenting===!0,ie=v!==null&&(N===null||j)&&v.begin(w,N);if(A.matrixWorldAutoUpdate===!0)A.updateMatrixWorld();if(k.parent===null&&k.matrixWorldAutoUpdate===!0)k.updateMatrixWorld();if(rt.enabled===!0&&rt.isPresenting===!0&&(v===null||v.isCompositing()===!1)){if(rt.cameraAutoUpdate===!0)rt.updateCamera(k);k=rt.getCamera()}if(A.isScene===!0)A.onBeforeRender(w,A,k,N);if(T=Re.get(A,_.length),T.init(k),T.state.textureUnits=te.getTextureUnits(),_.push(T),We.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),k.isArrayCamera)Ee.setFromArrayCamera(k);else ge.setFromProjectionMatrix(We,gn,k.reversedDepth);if(Ve=this.localClippingEnabled,Ce=J.init(this.clippingPlanes,Ve),b=Te.get(A,S.length),b.init(),S.push(b),this.info.render.frame++,rt.enabled===!0&&rt.isPresenting===!0){let at=w.xr.getDepthSensingMesh();if(at!==null)ia(at,k,-1/0,w.sortObjects)}if(ia(A,k,0,w.sortObjects),b.finish(),P!==null)P.updateLights(T.state.lightsArray);if(w.sortObjects===!0)b.sort(Ne,xt);if(wt=rt.enabled===!1||rt.isPresenting===!1||rt.hasDepthSensing()===!1,wt)Pe.addToRenderList(b,A);if(this.info.autoReset===!0)this.info.reset();if(Ce===!0)J.beginShadows();let re=T.state.shadowsArray;if(fe.render(re,A,k),Ce===!0)J.endShadows();if((ie&&v.hasRenderPass())===!1){let at=b.opaque,Ie=b.transmissive;if(T.setupLights(),k.isArrayCamera){let je=k.cameras;if(Ie.length>0)for(let ht=0,Ct=je.length;ht<Ct;ht++){let zt=je[ht];ul(at,Ie,A,zt)}if(wt)Pe.render(A);for(let ht=0,Ct=je.length;ht<Ct;ht++){let zt=je[ht];mo(b,A,zt,zt.viewport)}}else{if(Ie.length>0)ul(at,Ie,A,k);if(wt)Pe.render(A);mo(b,A,k)}}if(N!==null&&D===0)te.updateMultisampleRenderTarget(N),te.updateRenderTargetMipmap(N);if(ie)v.end(w);if(A.isScene===!0)A.onAfterRender(w,A,k);if(be.resetDefaultState(),se=-1,Y=null,_.pop(),_.length>0){if(T=_[_.length-1],te.setTextureUnits(T.state.textureUnits),Ce===!0)J.setGlobalState(w.clippingPlanes,T.state.camera)}else T=null;if(S.pop(),S.length>0)b=S[S.length-1];else b=null;if(P!==null)P.renderEnd()};function ia(A,k,j,ie){if(A.visible===!1)return;if(A.layers.test(k.layers)){if(A.isGroup)j=A.renderOrder;else if(A.isLOD){if(A.autoUpdate===!0)A.update(k)}else if(A.isLight){if(T.pushLight(A),A.castShadow)T.pushShadow(A)}else if(A.isSprite){let at=k.isArrayCamera?Ee:ge;if(!A.frustumCulled||A.intersectsFrustum(at)){if(ie)Oe.setFromMatrixPosition(A.matrixWorld).applyMatrix4(We);let Ie=U.update(A),je=A.material;if(je.visible)b.push(A,Ie,je,j,Oe.z,null,k)}}else if(A.isMesh||A.isLine||A.isPoints){let at=k.isArrayCamera?Ee:ge;if(!A.frustumCulled||A.intersectsFrustum(at)){let Ie=U.update(A),je=A.material;if(ie){if(A.boundingSphere!==void 0){if(A.boundingSphere===null)A.computeBoundingSphere();Oe.copy(A.boundingSphere.center)}else{if(Ie.boundingSphere===null)Ie.computeBoundingSphere();Oe.copy(Ie.boundingSphere.center)}Oe.applyMatrix4(A.matrixWorld).applyMatrix4(We)}if(Array.isArray(je)){let ht=Ie.groups;for(let Ct=0,zt=ht.length;Ct<zt;Ct++){let ot=ht[Ct],Gt=je[ot.materialIndex];if(Gt&&Gt.visible)b.push(A,Ie,Gt,j,Oe.z,ot,k)}}else if(je.visible)b.push(A,Ie,je,j,Oe.z,null,k)}}}let ze=A.children;for(let at=0,Ie=ze.length;at<Ie;at++)ia(ze[at],k,j,ie)}function mo(A,k,j,ie){let{opaque:re,transmissive:ze,transparent:at}=A;if(T.setupLightsView(j),Ce===!0)J.setGlobalState(w.clippingPlanes,j);if(ie)Le.viewport(W.copy(ie));if(re.length>0)Fs(re,k,j);if(ze.length>0)Fs(ze,k,j);if(at.length>0)Fs(at,k,j);Le.buffers.depth.setTest(!0),Le.buffers.depth.setMask(!0),Le.buffers.color.setMask(!0),Le.setPolygonOffset(!1)}function ul(A,k,j,ie){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[ie.id]===void 0){let ot=Rt.has("EXT_color_buffer_half_float")||Rt.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[ie.id]=new Ti(1,1,{generateMipmaps:!0,type:ot?Ii:Ji,minFilter:mn,samples:Math.max(4,si.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Et.workingColorSpace})}let ze=T.state.transmissionRenderTarget[ie.id],at=ie.viewport||W;ze.setSize(at.z*w.transmissionResolutionScale,at.w*w.transmissionResolutionScale);let Ie=w.getRenderTarget(),je=w.getActiveCubeFace(),ht=w.getActiveMipmapLevel();if(w.setRenderTarget(ze),w.getClearColor(X),oe=w.getClearAlpha(),oe<1)w.setClearColor(16777215,0.5);if(w.clear(),wt)Pe.render(j);let Ct=w.toneMapping;w.toneMapping=nr;let zt=ie.viewport;if(ie.viewport!==void 0)ie.viewport=void 0;if(T.setupLightsView(ie),Ce===!0)J.setGlobalState(w.clippingPlanes,ie);if(Fs(A,j,ie),te.updateMultisampleRenderTarget(ze),te.updateRenderTargetMipmap(ze),Rt.has("WEBGL_multisampled_render_to_texture")===!1){let ot=!1;for(let Gt=0,Pi=k.length;Gt<Pi;Gt++){let fi=k[Gt],{object:li,geometry:pn,material:lt,group:Qi}=fi;if(lt.side===Kt&&li.layers.test(ie.layers)){let we=lt.side;lt.side=Mi,lt.needsUpdate=!0,xe(li,j,ie,pn,lt,Qi),lt.side=we,lt.needsUpdate=!0,ot=!0}}if(ot===!0)te.updateMultisampleRenderTarget(ze),te.updateRenderTargetMipmap(ze)}if(w.setRenderTarget(Ie,je,ht),w.setClearColor(X,oe),zt!==void 0)ie.viewport=zt;w.toneMapping=Ct}function Fs(A,k,j){let ie=k.isScene===!0?k.overrideMaterial:null;for(let re=0,ze=A.length;re<ze;re++){let at=A[re],{object:Ie,geometry:je,group:ht}=at,Ct=at.material;if(Ct.allowOverride===!0&&ie!==null)Ct=ie;if(Ie.layers.test(j.layers))xe(Ie,k,j,je,Ct,ht)}}function xe(A,k,j,ie,re,ze){if(P!==null&&re.isNodeMaterial)P.setObject(A,re);if(A.onBeforeRender(w,k,j,ie,re,ze),A.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),re.onBeforeRender(w,k,j,ie,A,ze),re.transparent===!0&&re.side===Kt&&re.forceSinglePass===!1)re.side=Mi,re.needsUpdate=!0,w.renderBufferDirect(j,k,ie,re,A,ze),re.side=Zn,re.needsUpdate=!0,w.renderBufferDirect(j,k,ie,re,A,ze),re.side=Kt;else w.renderBufferDirect(j,k,ie,re,A,ze);A.onAfterRender(w,k,j,ie,re,ze)}function tr(A){let k=0;for(let j of A)if(j.texture!==null)k++;return k}function Kn(A,k,j){if(k.isScene!==!0)k=Lt;let ie=q.get(A),re=T.state.lights,ze=T.state.shadowsArray,at=re.state.version,Ie=me.getParameters(A,re.state,ze,k,j,T.state.lightProbeGridArray),je=me.getProgramCacheKey(Ie),ht=ie.programs;ie.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?k.environment:null,ie.fog=k.fog;let Ct=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;if(ie.envMap=Je.get(A.envMap||ie.environment,Ct),ie.envMapRotation=ie.environment!==null&&A.envMap===null?k.environmentRotation:A.envMapRotation,ht===void 0)A.addEventListener("dispose",Ge),ht=new Map,ie.programs=ht,ie.programVariants=new Map;let zt=ht.get(je);if(zt!==void 0){if(ie.currentProgram===zt&&ie.lightsStateVersion===at)return dl(A,Ie),zt}else{if(Ie.uniforms=me.getUniforms(A),P!==null&&A.isNodeMaterial)P.build(A,j,Ie);A.onBeforeCompile(Ie,w),zt=me.acquireProgram(Ie,je),ht.set(je,zt),ie.uniforms=Ie.uniforms}let ot=ie.uniforms;if(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)ot.clippingPlanes=J.uniform;if(dl(A,Ie),ie.needsLights=hf(A),ie.lightsStateVersion=at,ie.needsLights)ot.ambientLightColor.value=re.state.ambient,ot.lightProbe.value=re.state.probe,ot.sunLights.value=re.state.sun,ot.sunLightShadows.value=re.state.sunShadow,ot.directionalLights.value=re.state.directional,ot.directionalLightShadows.value=re.state.directionalShadow,ot.spotLights.value=re.state.spot,ot.spotLightShadows.value=re.state.spotShadow,ot.rectAreaLights.value=re.state.rectArea,ot.ltc_1.value=re.state.rectAreaLTC1,ot.ltc_2.value=re.state.rectAreaLTC2,ot.pointLights.value=re.state.point,ot.pointLightShadows.value=re.state.pointShadow,ot.hemisphereLights.value=re.state.hemi,ot.sunShadowMatrix.value=re.state.sunShadowMatrix,ot.sunShadowCascade.value=re.state.sunShadowCascade,ot.directionalShadowMatrix.value=re.state.directionalShadowMatrix,ot.spotLightMatrix.value=re.state.spotLightMatrix,ot.spotLightMap.value=re.state.spotLightMap,ot.pointShadowMatrix.value=re.state.pointShadowMatrix;return ie.numLightProbeGrids=tr(T.state.lightProbeGridArray),ie.currentProgram=zt,ie.uniformsList=null,zt}function nu(A,k,j,ie,re){let ze=q.get(A),at=ze.currentProgram.id+","+ie+","+re,Ie=ze.programVariants.get(at);if(Ie===void 0)Ie=Kn(A,k,j),ze.programVariants.set(at,Ie);else ze.currentProgram=Ie,ze.uniformsList=null,ze.outputColorSpace=ie,ze.toneMapping=re;return Ie}function na(A){if(A.uniformsList===null){let k=A.currentProgram.getUniforms();A.uniformsList=Ko.seqWithValue(k.seq,A.uniforms)}return A.uniformsList}function dl(A,k){let j=q.get(A);j.outputColorSpace=k.outputColorSpace,j.batching=k.batching,j.batchingColor=k.batchingColor,j.instancing=k.instancing,j.instancingColor=k.instancingColor,j.instancingMorph=k.instancingMorph,j.skinning=k.skinning,j.morphTargets=k.morphTargets,j.morphNormals=k.morphNormals,j.morphColors=k.morphColors,j.morphTargetsCount=k.morphTargetsCount,j.numClippingPlanes=k.numClippingPlanes,j.numIntersection=k.numClipIntersection,j.vertexAlphas=k.vertexAlphas,j.vertexTangents=k.vertexTangents,j.toneMapping=k.toneMapping}function ru(A,k,j,ie,re){if(k.isScene!==!0)k=Lt;te.resetTextureUnits();let ze=k.fog,at=ie.isMeshStandardMaterial||ie.isMeshLambertMaterial||ie.isMeshPhongMaterial?k.environment:null,Ie=N===null?w.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:Et.workingColorSpace,je=ie.isMeshStandardMaterial||ie.isMeshLambertMaterial&&!ie.envMap||ie.isMeshPhongMaterial&&!ie.envMap,ht=Je.get(ie.envMap||at,je),Ct=ie.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,zt=!!j.attributes.tangent&&(!!ie.normalMap||ie.anisotropy>0),ot=!!j.morphAttributes.position,Gt=!!j.morphAttributes.normal,Pi=!!j.morphAttributes.color,fi=nr;if(ie.toneMapped){if(N===null||N.isXRRenderTarget===!0)fi=w.toneMapping}let li=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,pn=li!==void 0?li.length:0,lt=q.get(ie),Qi=T.state.lights;if(Ce===!0){if(Ve===!0||A!==Y){let gi=A===Y&&ie.id===se;J.setState(ie,A,gi)}}let we=!1,xr=!1;if(ie.version===lt.__version){if(lt.needsLights&&lt.lightsStateVersion!==Qi.state.version)we=!0;else if(re.isBatchedMesh&&lt.batching===!1)we=!0;else if(!re.isBatchedMesh&&lt.batching===!0)we=!0;else if(re.isBatchedMesh&&lt.batchingColor===!0&&re._colorsTexture===null)we=!0;else if(re.isBatchedMesh&&lt.batchingColor===!1&&re._colorsTexture!==null)we=!0;else if(re.isInstancedMesh&&lt.instancing===!1)we=!0;else if(!re.isInstancedMesh&&lt.instancing===!0)we=!0;else if(re.isSkinnedMesh&&lt.skinning===!1)we=!0;else if(!re.isSkinnedMesh&&lt.skinning===!0)we=!0;else if(re.isInstancedMesh&&lt.instancingColor===!0&&re.instanceColor===null)we=!0;else if(re.isInstancedMesh&&lt.instancingColor===!1&&re.instanceColor!==null)we=!0;else if(re.isInstancedMesh&&lt.instancingMorph===!0&&re.morphTexture===null)we=!0;else if(re.isInstancedMesh&&lt.instancingMorph===!1&&re.morphTexture!==null)we=!0;else if(lt.envMap!==ht)we=!0;else if(ie.fog===!0&&lt.fog!==ze)we=!0;else if(lt.numClippingPlanes!==void 0&&(lt.numClippingPlanes!==J.numPlanes||lt.numIntersection!==J.numIntersection))we=!0;else if(lt.vertexAlphas!==Ct)we=!0;else if(lt.vertexTangents!==zt)we=!0;else if(lt.morphTargets!==ot)we=!0;else if(lt.morphNormals!==Gt)we=!0;else if(lt.morphColors!==Pi)we=!0;else if(lt.morphTargetsCount!==pn)we=!0;else if(lt.numLightProbeGrids!==tr(T.state.lightProbeGridArray))we=!0;else if(lt.outputColorSpace!==Ie||lt.toneMapping!==fi)xr=!0}else we=!0,lt.__version=ie.version;let Bi=lt.currentProgram;if(we===!0||xr===!0){if(Bi=xr===!0?nu(ie,k,re,Ie,fi):Kn(ie,k,re),P&&ie.isNodeMaterial)P.onUpdateProgram(ie,Bi,lt)}let go=!1,qr=!1,Kr=!1,Zt=Bi.getUniforms(),Oi=lt.uniforms;if(Le.useProgram(Bi.program))go=!0,qr=!0,Kr=!0;if(ie.id!==se)se=ie.id,qr=!0;if(go||Y!==A){if(Le.buffers.depth.getReversed()&&A.reversedDepth!==!0)A._reversedDepth=!0,A.updateProjectionMatrix();Zt.setValue(H,"projectionMatrix",A.projectionMatrix),Zt.setValue(H,"viewMatrix",A.matrixWorldInverse);let Ki=Zt.map.cameraPosition;if(Ki!==void 0)Ki.setValue(H,st.setFromMatrixPosition(A.matrixWorld));if(si.logarithmicDepthBuffer)Zt.setValue(H,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2));if(ie.isMeshPhongMaterial||ie.isMeshToonMaterial||ie.isMeshLambertMaterial||ie.isMeshBasicMaterial||ie.isMeshStandardMaterial||ie.isShaderMaterial)Zt.setValue(H,"isOrthographic",A.isOrthographicCamera===!0);if(Y!==A)Y=A,qr=!0,Kr=!0}if(lt.needsLights){if(Qi.state.sunShadowMap.length>0)Zt.setValue(H,"sunShadowMap",Qi.state.sunShadowMap,te);if(Qi.state.directionalShadowMap.length>0)Zt.setValue(H,"directionalShadowMap",Qi.state.directionalShadowMap,te);if(Qi.state.spotShadowMap.length>0)Zt.setValue(H,"spotShadowMap",Qi.state.spotShadowMap,te);if(Qi.state.pointShadowMap.length>0)Zt.setValue(H,"pointShadowMap",Qi.state.pointShadowMap,te)}if(re.isSkinnedMesh){Zt.setOptional(H,re,"bindMatrix"),Zt.setOptional(H,re,"bindMatrixInverse");let gi=re.skeleton;if(gi){if(gi.boneTexture===null)gi.computeBoneTexture();Zt.setValue(H,"boneTexture",gi.boneTexture,te)}}if(re.isBatchedMesh){if(Zt.setOptional(H,re,"batchingTexture"),Zt.setValue(H,"batchingTexture",re._matricesTexture,te),Zt.setOptional(H,re,"batchingIdTexture"),Zt.setValue(H,"batchingIdTexture",re._indirectTexture,te),Zt.setOptional(H,re,"batchingColorTexture"),re._colorsTexture!==null)Zt.setValue(H,"batchingColorTexture",re._colorsTexture,te)}let ir=j.morphAttributes;if(ir.position!==void 0||ir.normal!==void 0||ir.color!==void 0)B.update(re,j,Bi);if(qr||lt.receiveShadow!==re.receiveShadow)lt.receiveShadow=re.receiveShadow,Zt.setValue(H,"receiveShadow",re.receiveShadow);if((ie.isMeshStandardMaterial||ie.isMeshLambertMaterial||ie.isMeshPhongMaterial)&&ie.envMap===null&&k.environment!==null)Oi.envMapIntensity.value=k.environmentIntensity;if(Oi.dfgLUT!==void 0)Oi.dfgLUT.value=W_();if(qr){if(Zt.setValue(H,"toneMappingExposure",w.toneMappingExposure),lt.needsLights)su(Oi,Kr);if(ze&&ie.fog===!0)le.refreshFogUniforms(Oi,ze);if(le.refreshMaterialUniforms(Oi,ie,ke,ve,T.state.transmissionRenderTarget[A.id]),lt.needsLights&&lt.numLightProbeGrids>0){let gi=M,Ki=0;for(let _r of T.state.lightProbeGridArray){if(_r.texture===null)continue;gi.textures[Ki]=_r.texture,gi.min[Ki]=_r.boundingBox.min,gi.max[Ki]=_r.boundingBox.max,gi.resolution[Ki]=_r.resolution,Ki++}for(let _r in gi)gi[_r].length=Ki;Oi.probesSH.value=gi.textures,Oi.probesMin.value=gi.min,Oi.probesMax.value=gi.max,Oi.probesResolution.value=gi.resolution}Ko.upload(H,na(lt),Oi,te)}if(ie.isShaderMaterial&&ie.uniformsNeedUpdate===!0)Ko.upload(H,na(lt),Oi,te),ie.uniformsNeedUpdate=!1;if(ie.isSpriteMaterial)Zt.setValue(H,"center",re.center);if(Zt.setValue(H,"modelViewMatrix",re.modelViewMatrix),Zt.setValue(H,"normalMatrix",re.normalMatrix),Zt.setValue(H,"modelMatrix",re.matrixWorld),ie.uniformsGroups!==void 0){let gi=ie.uniformsGroups;for(let Ki=0,_r=gi.length;Ki<_r;Ki++){let xo=gi[Ki];Me.update(xo,Bi),Me.bind(xo,Bi)}}return Bi}function su(A,k){A.ambientLightColor.needsUpdate=k,A.lightProbe.needsUpdate=k,A.sunLights.needsUpdate=k,A.sunLightShadows.needsUpdate=k,A.directionalLights.needsUpdate=k,A.directionalLightShadows.needsUpdate=k,A.pointLights.needsUpdate=k,A.pointLightShadows.needsUpdate=k,A.spotLights.needsUpdate=k,A.spotLightShadows.needsUpdate=k,A.rectAreaLights.needsUpdate=k,A.hemisphereLights.needsUpdate=k}function hf(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return K},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(A,k,j){let ie=q.get(A);if(ie.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,ie.__autoAllocateDepthBuffer===!1)ie.__useRenderToTexture=!1;q.get(A.texture).__webglTexture=k,q.get(A.depthTexture).__webglTexture=ie.__autoAllocateDepthBuffer?void 0:j,ie.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,k){let j=q.get(A);j.__webglFramebuffer=k,j.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(A,k=0,j=0){N=A,K=k,D=j;let ie=null,re=!1,ze=!1;if(A){let Ie=q.get(A);if(Ie.__useDefaultFramebuffer!==void 0){Le.bindFramebuffer(H.FRAMEBUFFER,Ie.__webglFramebuffer),W.copy(A.viewport),ee.copy(A.scissor),de=A.scissorTest,Le.viewport(W),Le.scissor(ee),Le.setScissorTest(de),se=-1;return}else if(Ie.__webglFramebuffer===void 0)te.setupRenderTarget(A);else if(Ie.__hasExternalTextures)te.rebindTextures(A,q.get(A.texture).__webglTexture,q.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){let Ct=A.depthTexture;if(Ie.__boundDepthTexture!==Ct){if(Ct!==null&&q.has(Ct)&&(A.width!==Ct.image.width||A.height!==Ct.image.height))throw Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");te.setupDepthRenderbuffer(A)}}let je=A.texture;if(je.isData3DTexture||je.isDataArrayTexture||je.isCompressedArrayTexture)ze=!0;let ht=q.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget){if(Array.isArray(ht[k]))ie=ht[k][j];else ie=ht[k];re=!0}else if(A.samples>0&&te.useMultisampledRTT(A)===!1)ie=q.get(A).__webglMultisampledFramebuffer;else if(Array.isArray(ht))ie=ht[j];else ie=ht;W.copy(A.viewport),ee.copy(A.scissor),de=A.scissorTest}else W.copy(Xe).multiplyScalar(ke).floor(),ee.copy(Ye).multiplyScalar(ke).floor(),de=Tt;if(j!==0)ie=O;if(Le.bindFramebuffer(H.FRAMEBUFFER,ie))Le.drawBuffers(A,ie);if(Le.viewport(W),Le.scissor(ee),Le.setScissorTest(de),re){let Ie=q.get(A.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+k,Ie.__webglTexture,j)}else if(ze){let Ie=k;for(let je=0;je<A.textures.length;je++){let ht=q.get(A.textures[je]);H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0+je,ht.__webglTexture,j,Ie)}}else if(A!==null&&j!==0){let Ie=q.get(A.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Ie.__webglTexture,j)}se=-1};function uf(A){let k=q.get(A);if(k.__readFormat!==A.format||k.__readType!==A.type)k.__readFormat=A.format,k.__readType=A.type,k.__formatReadable=si.textureFormatReadable(A.format),k.__typeReadable=si.textureTypeReadable(A.type);return k}if(this.readRenderTargetPixels=function(A,k,j,ie,re,ze,at,Ie=0){if(!(A&&A.isWebGLRenderTarget)){it("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let je=q.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&at!==void 0){if(je=je[at],Array.isArray(je))je=je[0]}if(je){Le.bindFramebuffer(H.FRAMEBUFFER,je);try{let ht=A.textures[Ie],{format:Ct,type:zt}=ht;if(A.textures.length>1)H.readBuffer(H.COLOR_ATTACHMENT0+Ie);let ot=uf(ht);if(ot.__formatReadable===!1){it("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(ot.__typeReadable===!1){it("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}if(k>=0&&k<=A.width-ie&&(j>=0&&j<=A.height-re))H.readPixels(k,j,ie,re,pe.convert(Ct),pe.convert(zt),ze)}finally{let ht=N!==null?q.get(N).__webglFramebuffer:null;Le.bindFramebuffer(H.FRAMEBUFFER,ht)}}},this.readRenderTargetPixelsAsync=async function(A,k,j,ie,re,ze,at,Ie=0){if(!(A&&A.isWebGLRenderTarget))throw Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let je=q.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&at!==void 0){if(je=je[at],Array.isArray(je))je=je[0]}if(je)if(k>=0&&k<=A.width-ie&&(j>=0&&j<=A.height-re)){Le.bindFramebuffer(H.FRAMEBUFFER,je);let ht=A.textures[Ie],{format:Ct,type:zt}=ht;if(A.textures.length>1)H.readBuffer(H.COLOR_ATTACHMENT0+Ie);let ot=uf(ht);if(ot.__formatReadable===!1)throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(ot.__typeReadable===!1)throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Gt=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,Gt),H.bufferData(H.PIXEL_PACK_BUFFER,ze.byteLength,H.STREAM_READ),H.readPixels(k,j,ie,re,pe.convert(Ct),pe.convert(zt),0),H.bindBuffer(H.PIXEL_PACK_BUFFER,null);let Pi=N!==null?q.get(N).__webglFramebuffer:null;Le.bindFramebuffer(H.FRAMEBUFFER,Pi);let fi=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await Xp(H,fi,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,Gt),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,ze),H.bindBuffer(H.PIXEL_PACK_BUFFER,null),H.deleteBuffer(Gt),H.deleteSync(fi),ze}else throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,k=null,j=0){let ie=Math.pow(2,-j),re=Math.floor(A.image.width*ie),ze=Math.floor(A.image.height*ie),at=k!==null?k.x:0,Ie=k!==null?k.y:0;te.setTexture2D(A,0),H.copyTexSubImage2D(H.TEXTURE_2D,j,0,0,at,Ie,re,ze),Le.unbindTexture()},this.copyTextureToTexture=function(A,k,j=null,ie=null,re=0,ze=0){let at,Ie,je,ht,Ct,zt,ot,Gt,Pi,fi=A.isCompressedTexture?A.mipmaps[ze]:A.image;if(j!==null)at=j.max.x-j.min.x,Ie=j.max.y-j.min.y,je=j.isBox3?j.max.z-j.min.z:1,ht=j.min.x,Ct=j.min.y,zt=j.isBox3?j.min.z:0;else{let Zt=Math.pow(2,-re);if(at=Math.floor(A.width*Zt),Ie=Math.floor(A.height*Zt),A.isDataArrayTexture)je=fi.depth;else if(A.isData3DTexture)je=Math.floor(fi.depth*Zt);else je=1;ht=0,Ct=0,zt=0}if(ie!==null)ot=ie.x,Gt=ie.y,Pi=ie.z;else ot=0,Gt=0,Pi=0;let li=pe.convert(k.format),pn=pe.convert(k.type),lt;if(k.isData3DTexture)te.setTexture3D(k,0),lt=H.TEXTURE_3D;else if(k.isDataArrayTexture||k.isCompressedArrayTexture)te.setTexture2DArray(k,0),lt=H.TEXTURE_2D_ARRAY;else te.setTexture2D(k,0),lt=H.TEXTURE_2D;Le.activeTexture(H.TEXTURE0),Le.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,k.flipY),Le.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),Le.pixelStorei(H.UNPACK_ALIGNMENT,k.unpackAlignment);let Qi=Le.getParameter(H.UNPACK_ROW_LENGTH),we=Le.getParameter(H.UNPACK_IMAGE_HEIGHT),xr=Le.getParameter(H.UNPACK_SKIP_PIXELS),Bi=Le.getParameter(H.UNPACK_SKIP_ROWS),go=Le.getParameter(H.UNPACK_SKIP_IMAGES);Le.pixelStorei(H.UNPACK_ROW_LENGTH,fi.width),Le.pixelStorei(H.UNPACK_IMAGE_HEIGHT,fi.height),Le.pixelStorei(H.UNPACK_SKIP_PIXELS,ht),Le.pixelStorei(H.UNPACK_SKIP_ROWS,Ct),Le.pixelStorei(H.UNPACK_SKIP_IMAGES,zt);let qr=A.isDataArrayTexture||A.isData3DTexture,Kr=k.isDataArrayTexture||k.isData3DTexture;if(A.isDepthTexture){let Zt=q.get(A),Oi=q.get(k),ir=q.get(Zt.__renderTarget),gi=q.get(Oi.__renderTarget);Le.bindFramebuffer(H.READ_FRAMEBUFFER,ir.__webglFramebuffer),Le.bindFramebuffer(H.DRAW_FRAMEBUFFER,gi.__webglFramebuffer);for(let Ki=0;Ki<je;Ki++){if(qr)H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,q.get(A).__webglTexture,re,zt+Ki),H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,q.get(k).__webglTexture,ze,Pi+Ki);H.blitFramebuffer(ht,Ct,ht+at,Ct+Ie,ot,Gt,ot+at,Gt+Ie,H.DEPTH_BUFFER_BIT,H.NEAREST)}Le.bindFramebuffer(H.READ_FRAMEBUFFER,null),Le.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else if(re!==0||A.isRenderTargetTexture||q.has(A)){let Zt=q.get(A),Oi=q.get(k);Le.bindFramebuffer(H.READ_FRAMEBUFFER,Q),Le.bindFramebuffer(H.DRAW_FRAMEBUFFER,L);for(let ir=0;ir<je;ir++){if(qr)H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Zt.__webglTexture,re,zt+ir);else H.framebufferTexture2D(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Zt.__webglTexture,re);if(Kr)H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Oi.__webglTexture,ze,Pi+ir);else H.framebufferTexture2D(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Oi.__webglTexture,ze);if(re!==0)H.blitFramebuffer(ht,Ct,ht+at,Ct+Ie,ot,Gt,ot+at,Gt+Ie,H.COLOR_BUFFER_BIT,H.NEAREST);else if(Kr)H.copyTexSubImage3D(lt,ze,ot,Gt,Pi+ir,ht,Ct,at,Ie);else H.copyTexSubImage2D(lt,ze,ot,Gt,ht,Ct,at,Ie)}Le.bindFramebuffer(H.READ_FRAMEBUFFER,null),Le.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else if(Kr)if(A.isDataTexture||A.isData3DTexture)H.texSubImage3D(lt,ze,ot,Gt,Pi,at,Ie,je,li,pn,fi.data);else if(k.isCompressedArrayTexture)H.compressedTexSubImage3D(lt,ze,ot,Gt,Pi,fi.width,fi.height,je,li,fi.data);else H.texSubImage3D(lt,ze,ot,Gt,Pi,at,Ie,je,li,pn,fi);else if(A.isDataTexture)H.texSubImage2D(H.TEXTURE_2D,ze,ot,Gt,at,Ie,li,pn,fi.data);else if(A.isCompressedTexture)H.compressedTexSubImage2D(H.TEXTURE_2D,ze,ot,Gt,fi.width,fi.height,li,fi.data);else H.texSubImage2D(H.TEXTURE_2D,ze,ot,Gt,at,Ie,li,pn,fi);if(Le.pixelStorei(H.UNPACK_ROW_LENGTH,Qi),Le.pixelStorei(H.UNPACK_IMAGE_HEIGHT,we),Le.pixelStorei(H.UNPACK_SKIP_PIXELS,xr),Le.pixelStorei(H.UNPACK_SKIP_ROWS,Bi),Le.pixelStorei(H.UNPACK_SKIP_IMAGES,go),ze===0&&k.generateMipmaps===!0&&k.mipmapsAutoUpdate===!0)H.generateMipmap(lt);Le.unbindTexture()},this.initRenderTarget=function(A){if(q.get(A).__webglFramebuffer===void 0)te.setupRenderTarget(A)},this.initTexture=function(A){if(A.isCubeTexture)te.setTextureCube(A,0);else if(A.isData3DTexture)te.setTexture3D(A,0);else if(A.isDataArrayTexture||A.isCompressedArrayTexture)te.setTexture2DArray(A,0);else te.setTexture2D(A,0);Le.unbindTexture()},this.resetState=function(){K=0,D=0,N=null,Le.reset(),be.reset()},typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return gn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Et._getDrawingBufferColorSpace(e),t.unpackColorSpace=Et._getUnpackColorSpace()}}function Y_(e,t=!1){let i=e[0].index!==null,n=new Set(Object.keys(e[0].attributes)),r=new Set(Object.keys(e[0].morphAttributes)),s={},o={},a=e[0].morphTargetsRelative,l=new et;l.morphTargetsRelative=a;let c=0;for(let f=0;f<e.length;++f){let u=e[f],h=0,m=0;if(i!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let g in u.attributes){if(!n.has(g))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+'. All geometries must have compatible attributes; make sure "'+g+'" attribute exists among all geometries, or in none of them.'),null;if(s[g]===void 0)s[g]=[];s[g].push(u.attributes[g]),h++}if(h!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let g in u.morphAttributes){if(!r.has(g))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+".  .morphAttributes must be consistent throughout all geometries."),null;if(u.morphAttributes[g].length!==e[0].morphAttributes[g].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+'. All geometries must have the same number of morph targets for the "'+g+'" morph attribute.'),null;if(o[g]===void 0)o[g]=[];o[g].push(u.morphAttributes[g]),m++}if(m!==r.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+". Make sure all geometries have the same number of morph attributes."),null;if(t){let g;if(i)g=u.index.count;else if(u.attributes.position!==void 0)g=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,g,f),c+=g}}if(i){let f=0,u=[];for(let h=0;h<e.length;++h){let m=e[h].index;for(let g=0;g<m.count;++g)u.push(m.getX(g)+f);f+=e[h].attributes.position.count}l.setIndex(u)}for(let f in s){let u=X_(s[f]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+f+" attribute."),null;l.setAttribute(f,u)}for(let f in o){let u=o[f][0].length;if(u===0)continue;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[f]=[];for(let h=0;h<u;++h){let m=[];for(let x=0;x<o[f].length;++x)m.push(o[f][x][h]);let g=X_(m);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+f+" morphAttribute."),null;l.morphAttributes[f].push(g)}}return l}function X_(e){let t,i,n,r=-1,s=0;for(let c=0;c<e.length;++c){let f=e[c];if(t===void 0)t=f.array.constructor;if(t!==f.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(i===void 0)i=f.itemSize;if(i!==f.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0)n=f.normalized;if(n!==f.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(r===-1)r=f.gpuType;if(r!==f.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=f.count*i}let o=new t(s),a=new pi(o,i,n),l=0;for(let c=0;c<e.length;++c){let f=e[c];if(f.isInterleavedBufferAttribute){let u=l/i;for(let h=0,m=f.count;h<m;h++)for(let g=0;g<i;g++){let x=f.getComponent(h,g);a.setComponent(h+u,g,x)}}else o.set(f.array,l);l+=f.count*i}if(r!==void 0)a.gpuType=r;return a}function vd(e,t){if(t===Dp)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),e;if(t===sc||t===Rf){let i=e.getIndex();if(i===null){let s=[],o=e.getAttribute("position");if(o!==void 0){for(let a=0;a<o.count;a++)s.push(a);e.setIndex(s),i=e.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),e}let n=i.count-2,r=[];if(t===sc)for(let s=1;s<=n;s++)r.push(i.getX(0)),r.push(i.getX(s)),r.push(i.getX(s+1));else for(let s=0;s<n;s++)if(s%2===0)r.push(i.getX(s)),r.push(i.getX(s+1)),r.push(i.getX(s+2));else r.push(i.getX(s+2)),r.push(i.getX(s+1)),r.push(i.getX(s));if(r.length/3!==n)console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");return e.setIndex(r),e.clearGroups(),e}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",t),e}function q_(e){let t=new Map,i=new Map,n=e.clone();return K_(e,n,function(r,s){t.set(s,r),i.set(r,s)}),n.traverse(function(r){if(!r.isSkinnedMesh)return;let s=r,o=t.get(r),a=o.skeleton.bones;s.skeleton=o.skeleton.clone(),s.bindMatrix.copy(o.bindMatrix),s.skeleton.bones=a.map(function(l){return i.get(l)}),s.bind(s.skeleton,s.bindMatrix)}),n}function K_(e,t,i){i(e,t);for(let n=0;n<e.children.length;n++)K_(e.children[n],t.children[n],i)}class Rd extends $i{constructor(e){super(e);this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new i1(t)}),this.register(function(t){return new n1(t)}),this.register(function(t){return new r1(t)}),this.register(function(t){return new d1(t)}),this.register(function(t){return new p1(t)}),this.register(function(t){return new m1(t)}),this.register(function(t){return new o1(t)}),this.register(function(t){return new a1(t)}),this.register(function(t){return new l1(t)}),this.register(function(t){return new c1(t)}),this.register(function(t){return new t1(t)}),this.register(function(t){return new f1(t)}),this.register(function(t){return new s1(t)}),this.register(function(t){return new u1(t)}),this.register(function(t){return new h1(t)}),this.register(function(t){return new Q_(t)}),this.register(function(t){return new Td(t,kt.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new Td(t,kt.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new g1(t)})}load(e,t,i,n){let r=this,s;if(this.resourcePath!=="")s=this.resourcePath;else if(this.path!==""){let l=Ps.extractUrlBase(e);s=Ps.resolveURL(l,this.path)}else s=Ps.extractUrlBase(e);this.manager.itemStart(e);let o=function(l){if(n)n(l);else console.error(l);r.manager.itemError(e),r.manager.itemEnd(e)},a=new Ar(this.manager);a.setPriority(this.priority),a.setCache(this.cache),a.setPath(this.path),a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(l){try{r.parse(l,s,function(c){t(c),r.manager.itemEnd(e)},o)}catch(c){o(c)}},i,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){if(this.pluginCallbacks.indexOf(e)===-1)this.pluginCallbacks.push(e);return this}unregister(e){if(this.pluginCallbacks.indexOf(e)!==-1)this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1);return this}parse(e,t,i,n){let r,s={},o={},a=new TextDecoder;if(typeof e==="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(a.decode(new Uint8Array(e,0,4))===x1){try{s[kt.KHR_BINARY_GLTF]=new _1(e)}catch(f){if(n)n(f);return}r=JSON.parse(s[kt.KHR_BINARY_GLTF].content)}else r=JSON.parse(a.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){if(n)n(Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let l=new S1(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,priority:this.priority,cache:this.cache,withCredentials:this.withCredentials,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let c=0;c<this.pluginCallbacks.length;c++){let f=this.pluginCallbacks[c](l);if(!f.name)console.error("THREE.GLTFLoader: Invalid plugin found: missing name");o[f.name]=f,s[f.name]=!0}if(r.extensionsUsed)for(let c=0;c<r.extensionsUsed.length;++c){let f=r.extensionsUsed[c],u=r.extensionsRequired||[];switch(f){case kt.KHR_MATERIALS_UNLIT:s[f]=new e1;break;case kt.KHR_DRACO_MESH_COMPRESSION:s[f]=new y1(r,this.dracoLoader);break;case kt.KHR_TEXTURE_TRANSFORM:s[f]=new M1;break;case kt.KHR_MESH_QUANTIZATION:s[f]=new v1;break;default:if(u.indexOf(f)>=0&&o[f]===void 0)console.warn('THREE.GLTFLoader: Unknown extension "'+f+'".')}}l.setExtensions(s),l.setPlugins(o),l.parse(i,n)}parseAsync(e,t){let i=this;return new Promise(function(n,r){i.parse(e,t,n,r)})}}function iS(){let e={};return{get:function(t){return e[t]},add:function(t,i){e[t]=i},remove:function(t){delete e[t]},removeAll:function(){e={}}}}function ki(e,t,i){let n=e.json.materials[t];if(n.extensions&&n.extensions[i])return n.extensions[i];return null}var kt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DIFFUSE_ROUGHNESS:"KHR_materials_diffuse_roughness",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class Q_{constructor(e){this.parser=e,this.name=kt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let i=0,n=t.length;i<n;i++){let r=t[i];if(r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0)e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,i="light:"+e,n=t.cache.get(i);if(n)return n;let r=t.json,a=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],l,c=new Se(16777215);if(a.color!==void 0)c.setRGB(a.color[0],a.color[1],a.color[2],Tn);let f=a.range!==void 0?a.range:0;switch(a.type){case"directional":l=new Vc(c),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new Wr(c),l.distance=f;break;case"spot":l=new kc(c),l.distance=f,a.spot=a.spot||{},a.spot.innerConeAngle=a.spot.innerConeAngle!==void 0?a.spot.innerConeAngle:0,a.spot.outerConeAngle=a.spot.outerConeAngle!==void 0?a.spot.outerConeAngle:Math.PI/4,l.angle=a.spot.outerConeAngle,l.penumbra=1-a.spot.innerConeAngle/a.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw Error("THREE.GLTFLoader: Unexpected light type: "+a.type)}if(l.position.set(0,0,0),rs(l,a),a.intensity!==void 0)l.intensity=a.intensity;return l.name=t.createUniqueName(a.name||"light_"+e),n=Promise.resolve(l),t.cache.add(i,n),n}getDependency(e,t){if(e!=="light")return;return this._loadLight(t)}createNodeAttachment(e){let t=this,i=this.parser,r=i.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;if(o===void 0)return null;return this._loadLight(o).then(function(a){return i._getNodeRef(t.cache,o,a)})}}class e1{constructor(){this.name=kt.KHR_MATERIALS_UNLIT}getMaterialType(){return _t}extendParams(e,t,i){let n=[];e.color=new Se(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let s=r.baseColorFactor;e.color.setRGB(s[0],s[1],s[2],Tn),e.opacity=s[3]}if(r.baseColorTexture!==void 0)n.push(i.assignTexture(e,"map",r.baseColorTexture,Ft))}return Promise.all(n)}}class t1{constructor(e){this.parser=e,this.name=kt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let i=ki(this.parser,e,this.name);if(i===null)return Promise.resolve();if(i.emissiveStrength!==void 0)t.emissiveIntensity=i.emissiveStrength;return Promise.resolve()}}class i1{constructor(e){this.parser=e,this.name=kt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return ki(this.parser,e,this.name)!==null?Mn:null}extendMaterialParams(e,t){let i=ki(this.parser,e,this.name);if(i===null)return Promise.resolve();let n=[];if(i.clearcoatFactor!==void 0)t.clearcoat=i.clearcoatFactor;if(i.clearcoatTexture!==void 0)n.push(this.parser.assignTexture(t,"clearcoatMap",i.clearcoatTexture));if(i.clearcoatRoughnessFactor!==void 0)t.clearcoatRoughness=i.clearcoatRoughnessFactor;if(i.clearcoatRoughnessTexture!==void 0)n.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",i.clearcoatRoughnessTexture));if(i.clearcoatNormalTexture!==void 0){if(n.push(this.parser.assignTexture(t,"clearcoatNormalMap",i.clearcoatNormalTexture)),i.clearcoatNormalTexture.scale!==void 0){let r=i.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new ne(r,r)}}return Promise.all(n)}}class n1{constructor(e){this.parser=e,this.name=kt.KHR_MATERIALS_DIFFUSE_ROUGHNESS}getMaterialType(e){return ki(this.parser,e,this.name)!==null?Mn:null}extendMaterialParams(e,t){let i=ki(this.parser,e,this.name);if(i===null)return Promise.resolve();let n=[];if(t.diffuseRoughness=i.diffuseRoughnessFactor!==void 0?i.diffuseRoughnessFactor:0,i.diffuseRoughnessTexture!==void 0)n.push(this.parser.assignTexture(t,"diffuseRoughnessMap",i.diffuseRoughnessTexture));return Promise.all(n)}}class r1{constructor(e){this.parser=e,this.name=kt.KHR_MATERIALS_DISPERSION}getMaterialType(e){return ki(this.parser,e,this.name)!==null?Mn:null}extendMaterialParams(e,t){let i=ki(this.parser,e,this.name);if(i===null)return Promise.resolve();return t.dispersion=i.dispersion!==void 0?i.dispersion:0,Promise.resolve()}}class s1{constructor(e){this.parser=e,this.name=kt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return ki(this.parser,e,this.name)!==null?Mn:null}extendMaterialParams(e,t){let i=ki(this.parser,e,this.name);if(i===null)return Promise.resolve();let n=[];if(i.iridescenceFactor!==void 0)t.iridescence=i.iridescenceFactor;if(i.iridescenceTexture!==void 0)n.push(this.parser.assignTexture(t,"iridescenceMap",i.iridescenceTexture));if(i.iridescenceIor!==void 0)t.iridescenceIOR=i.iridescenceIor;if(i.iridescenceThicknessMinimum!==void 0)t.iridescenceThicknessMinimum=i.iridescenceThicknessMinimum;if(i.iridescenceThicknessMaximum!==void 0)t.iridescenceThicknessMaximum=i.iridescenceThicknessMaximum;if(i.iridescenceThicknessTexture!==void 0)n.push(this.parser.assignTexture(t,"iridescenceThicknessMap",i.iridescenceThicknessTexture));return Promise.all(n)}}class o1{constructor(e){this.parser=e,this.name=kt.KHR_MATERIALS_SHEEN}getMaterialType(e){return ki(this.parser,e,this.name)!==null?Mn:null}extendMaterialParams(e,t){let i=ki(this.parser,e,this.name);if(i===null)return Promise.resolve();let n=[];if(t.sheenColor=new Se(0,0,0),t.sheenRoughness=0,t.sheen=1,i.sheenColorFactor!==void 0){let r=i.sheenColorFactor;t.sheenColor.setRGB(r[0],r[1],r[2],Tn)}if(i.sheenRoughnessFactor!==void 0)t.sheenRoughness=i.sheenRoughnessFactor;if(i.sheenColorTexture!==void 0)n.push(this.parser.assignTexture(t,"sheenColorMap",i.sheenColorTexture,Ft));if(i.sheenRoughnessTexture!==void 0)n.push(this.parser.assignTexture(t,"sheenRoughnessMap",i.sheenRoughnessTexture));return Promise.all(n)}}class a1{constructor(e){this.parser=e,this.name=kt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return ki(this.parser,e,this.name)!==null?Mn:null}extendMaterialParams(e,t){let i=ki(this.parser,e,this.name);if(i===null)return Promise.resolve();let n=[];if(i.transmissionFactor!==void 0)t.transmission=i.transmissionFactor;if(i.transmissionTexture!==void 0)n.push(this.parser.assignTexture(t,"transmissionMap",i.transmissionTexture));return Promise.all(n)}}class l1{constructor(e){this.parser=e,this.name=kt.KHR_MATERIALS_VOLUME}getMaterialType(e){return ki(this.parser,e,this.name)!==null?Mn:null}extendMaterialParams(e,t){let i=ki(this.parser,e,this.name);if(i===null)return Promise.resolve();let n=[];if(t.thickness=i.thicknessFactor!==void 0?i.thicknessFactor:0,i.thicknessTexture!==void 0)n.push(this.parser.assignTexture(t,"thicknessMap",i.thicknessTexture));t.attenuationDistance=i.attenuationDistance||1/0;let r=i.attenuationColor||[1,1,1];return t.attenuationColor=new Se().setRGB(r[0],r[1],r[2],Tn),Promise.all(n)}}class c1{constructor(e){this.parser=e,this.name=kt.KHR_MATERIALS_IOR}getMaterialType(e){return ki(this.parser,e,this.name)!==null?Mn:null}extendMaterialParams(e,t){let i=ki(this.parser,e,this.name);if(i===null)return Promise.resolve();if(t.ior=i.ior!==void 0?i.ior:1.5,t.ior===0)t.ior=1000;return Promise.resolve()}}class f1{constructor(e){this.parser=e,this.name=kt.KHR_MATERIALS_SPECULAR}getMaterialType(e){return ki(this.parser,e,this.name)!==null?Mn:null}extendMaterialParams(e,t){let i=ki(this.parser,e,this.name);if(i===null)return Promise.resolve();let n=[];if(t.specularIntensity=i.specularFactor!==void 0?i.specularFactor:1,i.specularTexture!==void 0)n.push(this.parser.assignTexture(t,"specularIntensityMap",i.specularTexture));let r=i.specularColorFactor||[1,1,1];if(t.specularColor=new Se().setRGB(r[0],r[1],r[2],Tn),i.specularColorTexture!==void 0)n.push(this.parser.assignTexture(t,"specularColorMap",i.specularColorTexture,Ft));return Promise.all(n)}}class h1{constructor(e){this.parser=e,this.name=kt.EXT_MATERIALS_BUMP}getMaterialType(e){return ki(this.parser,e,this.name)!==null?Mn:null}extendMaterialParams(e,t){let i=ki(this.parser,e,this.name);if(i===null)return Promise.resolve();let n=[];if(t.bumpScale=i.bumpFactor!==void 0?i.bumpFactor:1,i.bumpTexture!==void 0)n.push(this.parser.assignTexture(t,"bumpMap",i.bumpTexture));return Promise.all(n)}}class u1{constructor(e){this.parser=e,this.name=kt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return ki(this.parser,e,this.name)!==null?Mn:null}extendMaterialParams(e,t){let i=ki(this.parser,e,this.name);if(i===null)return Promise.resolve();let n=[];if(i.anisotropyStrength!==void 0)t.anisotropy=i.anisotropyStrength;if(i.anisotropyRotation!==void 0)t.anisotropyRotation=i.anisotropyRotation;if(i.anisotropyTexture!==void 0)n.push(this.parser.assignTexture(t,"anisotropyMap",i.anisotropyTexture));return Promise.all(n)}}class d1{constructor(e){this.parser=e,this.name=kt.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,i=t.json,n=i.textures[e];if(!n.extensions||!n.extensions[this.name])return null;let r=n.extensions[this.name],s=t.options.ktx2Loader;if(!s)if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");else return null;return t.loadTextureImage(e,r.source,s)}}class p1{constructor(e){this.parser=e,this.name=kt.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,i=this.parser,n=i.json,r=n.textures[e];if(!r.extensions||!r.extensions[t])return null;let s=r.extensions[t],o=n.images[s.source],a=i.textureLoader;if(o.uri){let l=i.options.manager.getHandler(o.uri);if(l!==null)a=l}return i.loadTextureImage(e,s.source,a)}}class m1{constructor(e){this.parser=e,this.name=kt.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,i=this.parser,n=i.json,r=n.textures[e];if(!r.extensions||!r.extensions[t])return null;let s=r.extensions[t],o=n.images[s.source],a=i.textureLoader;if(o.uri){let l=i.options.manager.getHandler(o.uri);if(l!==null)a=l}return i.loadTextureImage(e,s.source,a)}}class Td{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){let n=i.extensions[this.name],r=this.parser.getDependency("buffer",n.buffer),s=this.parser.options.meshoptDecoder;if(!s||!s.supported)if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");else return null;return r.then(function(o){let a=n.byteOffset||0,l=n.byteLength||0,{count:c,byteStride:f}=n,u=new Uint8Array(o,a,l);if(s.decodeGltfBufferAsync)return s.decodeGltfBufferAsync(c,f,u,n.mode,n.filter).then(function(h){return h.buffer});else return s.ready.then(function(){let h=new ArrayBuffer(c*f);return s.decodeGltfBuffer(new Uint8Array(h),c,f,u,n.mode,n.filter),h})})}else return null}}class g1{constructor(e){this.name=kt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;let n=t.meshes[i.mesh];for(let l of n.primitives)if(l.mode!==Rr.TRIANGLES&&l.mode!==Rr.TRIANGLE_STRIP&&l.mode!==Rr.TRIANGLE_FAN&&l.mode!==void 0)return null;let s=i.extensions[this.name].attributes,o=[],a={};for(let l in s)o.push(this.parser.getDependency("accessor",s[l]).then((c)=>(a[l]=c,a[l])));if(o.length<1)return null;return o.push(this.parser.createNodeMesh(e)),Promise.all(o).then((l)=>{let c=l.pop(),f=c.isGroup?c.children:[c],u=l[0].count,h=[];for(let m of f){let g=new $e,x=new R,d=new Ei,p=new R(1,1,1),y=new lr(m.geometry,m.material,u);for(let b=0;b<u;b++){if(a.TRANSLATION)x.fromBufferAttribute(a.TRANSLATION,b);if(a.ROTATION)d.fromBufferAttribute(a.ROTATION,b);if(a.SCALE)p.fromBufferAttribute(a.SCALE,b);y.setMatrixAt(b,g.compose(x,d,p))}let M=null;for(let b in a)if(b==="_COLOR_0"){let T=a[b];y.instanceColor=new Gr(T.array,T.itemSize,T.normalized)}else if(b!=="TRANSLATION"&&b!=="ROTATION"&&b!=="SCALE"){if(M===null){let S=y.geometry;M=new et,M.name=S.name;for(let _ in S.attributes)M.setAttribute(_,S.attributes[_]);for(let _ in S.morphAttributes)M.morphAttributes[_]=S.morphAttributes[_];if(S.index!==null)M.setIndex(S.index);M.morphTargetsRelative=S.morphTargetsRelative;for(let _ of S.groups)M.addGroup(_.start,_.count,_.materialIndex);if(S.boundingBox!==null)M.boundingBox=S.boundingBox.clone();if(S.boundingSphere!==null)M.boundingSphere=S.boundingSphere.clone();M.drawRange.start=S.drawRange.start,M.drawRange.count=S.drawRange.count,M.userData=Object.assign({},S.userData),y.geometry=M}let T=a[b];M.setAttribute(b,new Gr(T.array,T.itemSize,T.normalized))}vt.prototype.copy.call(y,m),this.parser.assignFinalMaterial(y),h.push(y)}if(c.isGroup)return c.clear(),c.add(...h),c;return h[0]})}}var x1="glTF",Zc=12,Z_={JSON:1313821514,BIN:5130562};class _1{constructor(e){this.name=kt.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Zc),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==x1)throw Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");else if(this.header.version<2)throw Error("THREE.GLTFLoader: Legacy binary file detected.");let n=this.header.length-Zc,r=new DataView(e,Zc),s=0;while(s<n){let o=r.getUint32(s,!0);s+=4;let a=r.getUint32(s,!0);if(s+=4,a===Z_.JSON){let l=new Uint8Array(e,Zc+s,o);this.content=i.decode(l)}else if(a===Z_.BIN){let l=Zc+s;this.body=e.slice(l,l+o)}s+=o}if(this.content===null)throw Error("THREE.GLTFLoader: JSON content not found.")}}class y1{constructor(e,t){if(!t)throw Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=kt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let i=this.json,n=this.dracoLoader,r=e.extensions[this.name].bufferView,s=e.extensions[this.name].attributes,o={},a={},l={};for(let c in s){let f=wd[c]||c.toLowerCase();o[f]=s[c]}for(let c in e.attributes){let f=wd[c]||c.toLowerCase();if(s[c]!==void 0){let u=i.accessors[e.attributes[c]],h=el[u.componentType];l[f]=h.name,a[f]=u.normalized===!0}}return t.getDependency("bufferView",r).then(function(c){return new Promise(function(f,u){n.decodeDracoFile(c,function(h){for(let m in h.attributes){let g=h.attributes[m],x=a[m];if(x!==void 0)g.normalized=x}f(h)},o,l,Tn,u)})})}}class M1{constructor(){this.name=kt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0)e.channel=t.texCoord;if(t.offset!==void 0)e.offset.fromArray(t.offset);if(t.rotation!==void 0)e.rotation=t.rotation;if(t.scale!==void 0)e.repeat.fromArray(t.scale);if(t.rotation!==void 0){let i=Math.cos(e.rotation),n=Math.sin(e.rotation);e.matrix.set(e.repeat.x*i,e.repeat.y*n,e.offset.x,-e.repeat.x*n,e.repeat.y*i,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}}class v1{constructor(){this.name=kt.KHR_MESH_QUANTIZATION}}class Cd extends $n{constructor(e,t,i,n){super(e,t,i,n)}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,n=this.valueSize,r=e*n*3+n;for(let s=0;s!==n;s++)t[s]=i[r+s];return t}interpolate_(e,t,i,n){let r=this.resultBuffer,s=this.sampleValues,o=this.valueSize,a=o*2,l=o*3,c=n-t,f=(i-t)/c,u=f*f,h=u*f,m=e*l,g=m-l,x=-2*h+3*u,d=h-u,p=1-x,y=d-u+f;for(let M=0;M!==o;M++){let b=s[g+M+o],T=s[g+M+a]*c,S=s[m+M+o],_=s[m+M]*c;r[M]=p*b+y*T+x*S+d*_}return r}}var nS=new Ei;class b1 extends Cd{interpolate_(e,t,i,n){let r=super.interpolate_(e,t,i,n);return nS.fromArray(r).normalize().toArray(r),r}}var Rr={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},el={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},J_={9728:di,9729:_i,9984:Rl,9985:Mo,9986:Gs,9987:mn},j_={33071:on,33648:zs,10497:Nn},bd={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},wd={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},io={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},rS={CUBICSPLINE:void 0,LINEAR:Eo,STEP:ds},Sd={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function sS(e){if(e.DefaultMaterial===void 0)e.DefaultMaterial=new yt({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Zn});return e.DefaultMaterial}function Zo(e,t,i){for(let n in i.extensions)if(e[n]===void 0)t.userData.gltfExtensions=t.userData.gltfExtensions||{},t.userData.gltfExtensions[n]=i.extensions[n]}function rs(e,t){if(t.extras!==void 0)if(typeof t.extras==="object")Object.assign(e.userData,t.extras);else console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+t.extras)}function oS(e,t,i){let n=!1,r=!1,s=!1;for(let c=0,f=t.length;c<f;c++){let u=t[c];if(u.POSITION!==void 0)n=!0;if(u.NORMAL!==void 0)r=!0;if(u.COLOR_0!==void 0)s=!0;if(n&&r&&s)break}if(!n&&!r&&!s)return Promise.resolve(e);let o=[],a=[],l=[];for(let c=0,f=t.length;c<f;c++){let u=t[c];if(n){let h=u.POSITION!==void 0?i.getDependency("accessor",u.POSITION):e.attributes.position;o.push(h)}if(r){let h=u.NORMAL!==void 0?i.getDependency("accessor",u.NORMAL):e.attributes.normal;a.push(h)}if(s){let h=u.COLOR_0!==void 0?i.getDependency("accessor",u.COLOR_0):e.attributes.color;l.push(h)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){let f=c[0],u=c[1],h=c[2];if(n)e.morphAttributes.position=f;if(r)e.morphAttributes.normal=u;if(s)e.morphAttributes.color=h;return e.morphTargetsRelative=!0,e})}function aS(e,t){if(e.updateMorphTargets(),t.weights!==void 0)for(let i=0,n=t.weights.length;i<n;i++)e.morphTargetInfluences[i]=t.weights[i];if(t.extras&&Array.isArray(t.extras.targetNames)){let i=t.extras.targetNames;if(e.morphTargetInfluences.length===i.length){e.morphTargetDictionary={};for(let n=0,r=i.length;n<r;n++)e.morphTargetDictionary[i[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function lS(e){let t,i=e.extensions&&e.extensions[kt.KHR_DRACO_MESH_COMPRESSION];if(i)t="draco:"+i.bufferView+":"+i.indices+":"+Ed(i.attributes);else t=e.indices+":"+Ed(e.attributes)+":"+e.mode;if(e.targets!==void 0)for(let n=0,r=e.targets.length;n<r;n++)t+=":"+Ed(e.targets[n]);return t}function Ed(e){let t="",i=Object.keys(e).sort();for(let n=0,r=i.length;n<r;n++)t+=i[n]+":"+e[i[n]]+";";return t}function Ad(e){switch(e){case Int8Array:return 0.007874015748031496;case Uint8Array:return 0.00392156862745098;case Int16Array:return 0.00003051850947599719;case Uint16Array:return 0.000015259021896696422;default:throw Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function cS(e){if(e.search(/\.jpe?g($|\?)/i)>0||e.search(/^data\:image\/jpeg/)===0)return"image/jpeg";if(e.search(/\.webp($|\?)/i)>0||e.search(/^data\:image\/webp/)===0)return"image/webp";if(e.search(/\.ktx2($|\?)/i)>0||e.search(/^data\:image\/ktx2/)===0)return"image/ktx2";return"image/png"}var fS=new $e;class S1{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new iS,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,n=-1,r=!1,s=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){let o=navigator.userAgent;i=/^((?!chrome|android).)*safari/i.test(o)===!0;let a=o.match(/Version\/(\d+)/);n=i&&a?parseInt(a[1],10):-1,r=o.indexOf("Firefox")>-1,s=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}if(typeof createImageBitmap>"u"||i&&n<17||r&&s<98)this.textureLoader=new js(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache);else this.textureLoader=new wh(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache);if(this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setWithCredentials(this.options.withCredentials),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Ar(this.options.manager),this.fileLoader.setPriority(this.options.priority),this.fileLoader.setCache(this.options.cache),this.fileLoader.setResponseType("arraybuffer"),this.options.withCredentials||this.options.crossOrigin==="use-credentials")this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let i=this,n=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(s){return s._markDefs&&s._markDefs()}),Promise.all(this._invokeAll(function(s){return s.beforeRoot&&s.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(s){let o={scene:s[0][n.scene||0],scenes:s[0],animations:s[1],cameras:s[2],asset:n.asset,parser:i,userData:{}};return Zo(r,o,n),rs(o,n),Promise.all(i._invokeAll(function(a){return a.afterRoot&&a.afterRoot(o)})).then(function(){for(let a of o.scenes)a.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let n=0,r=t.length;n<r;n++){let s=t[n].joints;for(let o=0,a=s.length;o<a;o++)e[s[o]].isBone=!0}for(let n=0,r=e.length;n<r;n++){let s=e[n];if(s.mesh!==void 0){if(this._addNodeRef(this.meshCache,s.mesh),s.skin!==void 0)i[s.mesh].isSkinnedMesh=!0}if(s.camera!==void 0)this._addNodeRef(this.cameraCache,s.camera)}}_addNodeRef(e,t){if(t===void 0)return;if(e.refs[t]===void 0)e.refs[t]=e.uses[t]=0;e.refs[t]++}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;let n=i.clone(),r=(s,o)=>{let a=this.associations.get(s);if(a!=null)this.associations.set(o,a);for(let[l,c]of s.children.entries())r(c,o.children[l])};return r(i,n),n.name+="_instance_"+e.uses[t]++,n}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){let n=e(t[i]);if(n)return n}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let i=[];for(let n=0;n<t.length;n++){let r=e(t[n]);if(r)i.push(r)}return i}getDependency(e,t){let i=e+":"+t,n=this.cache.get(i);if(!n){switch(e){case"scene":n=this.loadScene(t);break;case"node":n=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":n=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":n=this.loadAccessor(t);break;case"bufferView":n=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":n=this.loadBuffer(t);break;case"material":n=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":n=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":n=this.loadSkin(t);break;case"animation":n=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":n=this.loadCamera(t);break;default:if(n=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!n)throw Error("Unknown type: "+e);break}this.cache.add(i,n)}return n}getDependencies(e){let t=this.cache.get(e);if(!t){let i=this,n=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(n.map(function(r,s){return i.getDependency(e,s)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[kt.KHR_BINARY_GLTF].body);let n=this.options;return new Promise(function(r,s){i.load(Ps.resolveURL(t.uri,n.path),r,void 0,function(){s(Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){let n=t.byteLength||0,r=t.byteOffset||0;return i.slice(r,r+n)})}loadAccessor(e){let t=this,i=this.json,n=this.json.accessors[e];if(n.bufferView===void 0&&n.sparse===void 0){let s=bd[n.type],o=el[n.componentType],a=n.normalized===!0,l=new o(n.count*s);return Promise.resolve(new pi(l,s,a))}let r=[];if(n.bufferView!==void 0)r.push(this.getDependency("bufferView",n.bufferView));else r.push(null);if(n.sparse!==void 0)r.push(this.getDependency("bufferView",n.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",n.sparse.values.bufferView));return Promise.all(r).then(function(s){let o=s[0],a=bd[n.type],l=el[n.componentType],c=l.BYTES_PER_ELEMENT,f=c*a,u=n.byteOffset||0,h=n.bufferView!==void 0?i.bufferViews[n.bufferView].byteStride:void 0,m=n.normalized===!0,g,x;if(h&&h!==f){let d=Math.floor(u/h),p="InterleavedBuffer:"+n.bufferView+":"+n.componentType+":"+d+":"+n.count,y=t.cache.get(p);if(!y)g=new l(o,d*h,n.count*h/c),y=new Ms(g,h/c),t.cache.add(p,y);x=new jr(y,a,u%h/c,m)}else{if(o===null)g=new l(n.count*a);else g=new l(o,u,n.count*a);x=new pi(g,a,m)}if(n.sparse!==void 0){let d=bd.SCALAR,p=el[n.sparse.indices.componentType],y=n.sparse.indices.byteOffset||0,M=n.sparse.values.byteOffset||0,b=new p(s[1],y,n.sparse.count*d),T=new l(s[2],M,n.sparse.count*a);if(o!==null)x=new pi(x.array.slice(),x.itemSize,x.normalized);x.normalized=!1;for(let S=0,_=b.length;S<_;S++){let v=b[S];if(x.setX(v,T[S*a]),a>=2)x.setY(v,T[S*a+1]);if(a>=3)x.setZ(v,T[S*a+2]);if(a>=4)x.setW(v,T[S*a+3]);if(a>=5)throw Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}x.normalized=m}return x})}loadTexture(e){let t=this.json,i=this.options,r=t.textures[e].source,s=t.images[r],o=this.textureLoader;if(s.uri){let a=i.manager.getHandler(s.uri);if(a!==null)o=a}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,i){let n=this,r=this.json,s=r.textures[e],o=r.images[t],a=(o.uri||o.bufferView)+":"+s.sampler;if(this.textureCache[a])return this.textureCache[a];let l=this.loadImageSource(t,i).then(function(c){if(c.flipY=!1,c.name=s.name||o.name||"",c.name===""&&typeof o.uri==="string"&&o.uri.startsWith("data:image/")===!1)c.name=o.uri;let u=(r.samplers||{})[s.sampler]||{};return c.magFilter=J_[u.magFilter]||_i,c.minFilter=J_[u.minFilter]||mn,c.wrapS=j_[u.wrapS]||Nn,c.wrapT=j_[u.wrapT]||Nn,c.generateMipmaps=!c.isCompressedTexture&&c.minFilter!==di&&c.minFilter!==_i,n.associations.set(c,{textures:e}),c}).catch(function(){return null});return this.textureCache[a]=l,l}loadImageSource(e,t){let i=this,n=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then((u)=>u.clone());let s=n.images[e],o=self.URL||self.webkitURL,a=s.uri||"",l=!1,c;if(t.isKTX2Loader===!0&&s.bufferView!==void 0)c=i.getDependency("bufferView",s.bufferView).then(function(u){return new Promise(function(h,m){t.parse(u,h,m)})});else{if(s.bufferView!==void 0)a=i.getDependency("bufferView",s.bufferView).then(function(u){l=!0;let h=new Blob([u],{type:s.mimeType});return a=o.createObjectURL(h),a});else if(s.uri===void 0)throw Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");c=Promise.resolve(a).then(function(u){return new Promise(function(h,m){let g=h;if(t.isImageBitmapLoader===!0)g=function(x){let d=new Jt(x);d.needsUpdate=!0,h(d)};t.load(Ps.resolveURL(u,r.path),g,void 0,m)})})}let f=c.then(function(u){if(l===!0)o.revokeObjectURL(a);return rs(u,s),u.userData.mimeType=s.mimeType||cS(s.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",a),u});return this.sourceCache[e]=f,f}assignTexture(e,t,i,n){let r=this;return this.getDependency("texture",i.index).then(function(s){if(!s)return null;if(i.texCoord!==void 0&&i.texCoord>0)s=s.clone(),s.channel=i.texCoord;if(r.extensions[kt.KHR_TEXTURE_TRANSFORM]){let o=i.extensions!==void 0?i.extensions[kt.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let a=r.associations.get(s);s=r.extensions[kt.KHR_TEXTURE_TRANSFORM].extendTexture(s,o),r.associations.set(s,a)}}if(n!==void 0)s.colorSpace=n;return e[t]=s,s})}assignFinalMaterial(e){let{geometry:t,material:i}=e,n=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,s=t.attributes.normal===void 0;if(e.isPoints){let o="PointsMaterial:"+i.uuid,a=this.cache.get(o);if(!a)a=new bs,hi.prototype.copy.call(a,i),a.color.copy(i.color),a.map=i.map,a.sizeAttenuation=!1,this.cache.add(o,a);i=a}else if(e.isLine){let o="LineBasicMaterial:"+i.uuid,a=this.cache.get(o);if(!a)a=new Xi,hi.prototype.copy.call(a,i),a.color.copy(i.color),a.map=i.map,this.cache.add(o,a);i=a}if(n||r||s){let o="ClonedMaterial:"+i.uuid+":";if(n)o+="derivative-tangents:";if(r)o+="vertex-colors:";if(s)o+="flat-shading:";let a=this.cache.get(o);if(!a){if(a=i.clone(),r)a.vertexColors=!0;if(s)a.flatShading=!0;if(n){if(a.normalScale)a.normalScale.y*=-1;if(a.clearcoatNormalScale)a.clearcoatNormalScale.y*=-1}this.cache.add(o,a),this.associations.set(a,this.associations.get(i))}i=a}e.material=i}getMaterialType(){return yt}loadMaterial(e){let t=this,i=this.json,n=this.extensions,r=i.materials[e],s,o={},a=r.extensions||{},l=[];if(a[kt.KHR_MATERIALS_UNLIT]){let f=n[kt.KHR_MATERIALS_UNLIT];s=f.getMaterialType(),l.push(f.extendParams(o,r,t))}else{let f=r.pbrMetallicRoughness||{};if(o.color=new Se(1,1,1),o.opacity=1,Array.isArray(f.baseColorFactor)){let u=f.baseColorFactor;o.color.setRGB(u[0],u[1],u[2],Tn),o.opacity=u[3]}if(f.baseColorTexture!==void 0)l.push(t.assignTexture(o,"map",f.baseColorTexture,Ft));if(o.metalness=f.metallicFactor!==void 0?f.metallicFactor:1,o.roughness=f.roughnessFactor!==void 0?f.roughnessFactor:1,f.metallicRoughnessTexture!==void 0)l.push(t.assignTexture(o,"metalnessMap",f.metallicRoughnessTexture)),l.push(t.assignTexture(o,"roughnessMap",f.metallicRoughnessTexture));s=this._invokeOne(function(u){return u.getMaterialType&&u.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(u){return u.extendMaterialParams&&u.extendMaterialParams(e,o)})))}if(r.doubleSided===!0)o.side=Kt;let c=r.alphaMode||Sd.OPAQUE;if(c===Sd.BLEND)o.transparent=!0,o.depthWrite=!1;else if(o.transparent=!1,c===Sd.MASK)o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:0.5;if(r.normalTexture!==void 0&&s!==_t){if(l.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new ne(1,1),r.normalTexture.scale!==void 0){let f=r.normalTexture.scale;o.normalScale.set(f,f)}}if(r.occlusionTexture!==void 0&&s!==_t){if(l.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0)o.aoMapIntensity=r.occlusionTexture.strength}if(r.emissiveFactor!==void 0&&s!==_t){let f=r.emissiveFactor;o.emissive=new Se().setRGB(f[0],f[1],f[2],Tn)}if(r.emissiveTexture!==void 0&&s!==_t)l.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,Ft));return Promise.all(l).then(function(){let f=new s(o);if(r.name)f.name=r.name;if(rs(f,r),t.associations.set(f,{materials:e}),r.extensions)Zo(n,f,r);return f})}createUniqueName(e){let t=ri.sanitizeNodeName(e||"");if(t in this.nodeNamesUsed)return t+"_"+ ++this.nodeNamesUsed[t];else return this.nodeNamesUsed[t]=0,t}loadGeometries(e){let t=this,i=this.extensions,n=this.primitiveCache;function r(o){return i[kt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(a){return $_(a,o,t)})}let s=[];for(let o=0,a=e.length;o<a;o++){let l=e[o],c=lS(l),f=n[c];if(f)s.push(f.promise);else{let u;if(l.extensions&&l.extensions[kt.KHR_DRACO_MESH_COMPRESSION])u=r(l);else u=$_(new et,l,t);if(l.mode===Rr.TRIANGLE_STRIP)u=u.then((h)=>vd(h,Rf));else if(l.mode===Rr.TRIANGLE_FAN)u=u.then((h)=>vd(h,sc));n[c]={primitive:l,promise:u},s.push(u)}}return Promise.all(s)}loadMesh(e){let t=this,i=this.json,n=this.extensions,r=i.meshes[e],s=r.primitives,o=[];for(let a=0,l=s.length;a<l;a++){let c=s[a].material===void 0?sS(this.cache):this.getDependency("material",s[a].material);o.push(c)}return o.push(t.loadGeometries(s)),Promise.all(o).then(async function(a){let l=a.slice(0,a.length-1),c=a[a.length-1],f=[];for(let h=0,m=c.length;h<m;h++){let g=c[h],x=s[h],d,p=l[h];if(x.mode===Rr.TRIANGLES||x.mode===Rr.TRIANGLE_STRIP||x.mode===Rr.TRIANGLE_FAN||x.mode===void 0){let y=r.isSkinnedMesh===!0,M=g.hasAttribute("skinIndex")&&g.hasAttribute("skinWeight");if(y&&M===!1)console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled.");if(d=y&&M?new vc(g,p):new ae(g,p),d.isSkinnedMesh===!0)d.normalizeSkinWeights()}else if(x.mode===Rr.LINES)d=new Bn(g,p);else if(x.mode===Rr.LINE_STRIP)d=new jn(g,p);else if(x.mode===Rr.LINE_LOOP)d=new Tc(g,p);else if(x.mode===Rr.POINTS)d=new Uo(g,p);else throw Error("THREE.GLTFLoader: Primitive mode unsupported: "+x.mode);if(Object.keys(d.geometry.morphAttributes).length>0)aS(d,r);if(d.name=t.createUniqueName(r.name||"mesh_"+e),rs(d,r),x.extensions)Zo(n,d,x);t.assignFinalMaterial(d),f.push(d)}for(let h=0,m=f.length;h<m;h++)t.associations.set(f[h],{meshes:e,primitives:h});if(f.length===1){if(r.extensions)Zo(n,f[0],r);return f[0]}let u=new Ze;if(r.extensions)Zo(n,u,r);t.associations.set(u,{meshes:e});for(let h=0,m=f.length;h<m;h++)u.add(f[h]);return u})}loadCamera(e){let t,i=this.json.cameras[e],n=i[i.type];if(!n){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}if(i.type==="perspective")t=new wi(Nf.radToDeg(n.yfov),n.aspectRatio||1,n.znear||1,n.zfar||2000000);else if(i.type==="orthographic")t=new Xr(-n.xmag,n.xmag,n.ymag,-n.ymag,n.znear,n.zfar);if(i.name)t.name=this.createUniqueName(i.name);return rs(t,i),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],i=[];for(let n=0,r=t.joints.length;n<r;n++)i.push(this._loadNodeShallow(t.joints[n]));if(t.inverseBindMatrices!==void 0)i.push(this.getDependency("accessor",t.inverseBindMatrices));else i.push(null);return Promise.all(i).then(function(n){let r=n.pop(),s=n,o=[],a=[];for(let l=0,c=s.length;l<c;l++){let f=s[l];if(f){o.push(f);let u=new $e;if(r!==null)u.fromArray(r.array,l*16);a.push(u)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new ka(o,a)})}loadAnimation(e){let t=this.json,i=this,n=t.animations[e],r=n.name?n.name:"animation_"+e,s=[],o=[],a=[],l=[],c=[];for(let f=0,u=n.channels.length;f<u;f++){let h=n.channels[f],m=n.samplers[h.sampler],g=h.target,x=g.node,d=n.parameters!==void 0?n.parameters[m.input]:m.input,p=n.parameters!==void 0?n.parameters[m.output]:m.output;if(g.node===void 0)continue;s.push(this.getDependency("node",x)),o.push(this.getDependency("accessor",d)),a.push(this.getDependency("accessor",p)),l.push(m),c.push(g)}return Promise.all([Promise.all(s),Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c)]).then(function(f){let u=f[0],h=f[1],m=f[2],g=f[3],x=f[4],d=[];for(let y=0,M=u.length;y<M;y++){let b=u[y],T=h[y],S=m[y],_=g[y],v=x[y];if(b===void 0)continue;if(b.updateMatrix)b.updateMatrix();let w=i._createAnimationTracks(b,T,S,_,v);if(w)for(let I=0;I<w.length;I++)d.push(w[I])}let p=new Js(r,void 0,d);return rs(p,n),p})}createNodeMesh(e){let t=this.json,i=this,n=t.nodes[e];if(n.mesh===void 0)return null;return i.getDependency("mesh",n.mesh).then(function(r){let s=i._getNodeRef(i.meshCache,n.mesh,r);if(n.weights!==void 0)s.traverse(function(o){if(!o.isMesh)return;for(let a=0,l=n.weights.length;a<l;a++)o.morphTargetInfluences[a]=n.weights[a]});return s})}loadNode(e){let t=this.json,i=this,n=t.nodes[e],r=i._loadNodeShallow(e),s=[],o=n.children||[];for(let l=0,c=o.length;l<c;l++)s.push(i.getDependency("node",o[l]));let a=n.skin===void 0?Promise.resolve(null):i.getDependency("skin",n.skin);return Promise.all([r,Promise.all(s),a]).then(function(l){let c=l[0],f=l[1],u=l[2];if(u!==null)c.traverse(function(h){if(!h.isSkinnedMesh)return;h.bind(u,fS)});for(let h=0,m=f.length;h<m;h++)c.add(f[h]);if(c.userData.pivot!==void 0&&f.length>0){let h=c.userData.pivot,m=f[0];c.pivot=new R().fromArray(h),c.position.x-=h[0],c.position.y-=h[1],c.position.z-=h[2],m.position.set(0,0,0),delete c.userData.pivot}return c})}_loadNodeShallow(e){let t=this.json,i=this.extensions,n=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],s=r.name?n.createUniqueName(r.name):"",o=[],a=n._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});if(a)o.push(a);if(r.camera!==void 0)o.push(n.getDependency("camera",r.camera).then(function(l){return n._getNodeRef(n.cameraCache,r.camera,l)}));return n._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){o.push(l)}),this.nodeCache[e]=Promise.all(o).then(function(l){let c;if(r.isBone===!0)c=new No;else if(l.length>1)c=new Ze;else if(l.length===1)c=l[0];else c=new vt;if(c!==l[0])for(let f=0,u=l.length;f<u;f++)c.add(l[f]);if(r.name)c.userData.name=r.name,c.name=s;if(rs(c,r),r.extensions)Zo(i,c,r);if(r.matrix!==void 0){let f=new $e;f.fromArray(r.matrix),c.applyMatrix4(f)}else{if(r.translation!==void 0)c.position.fromArray(r.translation);if(r.rotation!==void 0)c.quaternion.fromArray(r.rotation);if(r.scale!==void 0)c.scale.fromArray(r.scale)}if(!n.associations.has(c))n.associations.set(c,{});else if(r.mesh!==void 0&&n.meshCache.refs[r.mesh]>1){let f=n.associations.get(c);n.associations.set(c,{...f})}return n.associations.get(c).nodes=e,c}),this.nodeCache[e]}loadScene(e){let t=this.extensions,i=this.json.scenes[e],n=this,r=new Ze;if(i.name)r.name=n.createUniqueName(i.name);if(rs(r,i),i.extensions)Zo(t,r,i);let s=i.nodes||[],o=[];for(let a=0,l=s.length;a<l;a++)o.push(n.getDependency("node",s[a]));return Promise.all(o).then(function(a){for(let c=0,f=a.length;c<f;c++){let u=a[c];if(u.parent!==null)r.add(q_(u));else r.add(u)}let l=(c)=>{let f=new Map;for(let[u,h]of n.associations)if(u instanceof hi||u instanceof Jt)f.set(u,h);return c.traverse((u)=>{let h=n.associations.get(u);if(h!=null)f.set(u,h)}),f};return n.associations=l(r),r})}_createAnimationTracks(e,t,i,n,r){let s=[],o=e.name?e.name:e.uuid,a=[];function l(h){if(h.morphTargetInfluences)a.push(h.name?h.name:h.uuid)}if(io[r.path]===io.weights){if(l(e),e.isGroup)e.children.forEach(l)}else a.push(o);let c;switch(io[r.path]){case io.weights:c=ws;break;case io.rotation:c=ts;break;case io.translation:case io.scale:c=Rs;break;default:switch(i.itemSize){case 1:c=ws;break;case 2:case 3:default:c=Rs;break}break}let f=n.interpolation!==void 0?rS[n.interpolation]:Eo,u=this._getArrayFromAccessor(i);for(let h=0,m=a.length;h<m;h++){let g=new c(a[h]+"."+io[r.path],t.array,u,f);if(n.interpolation==="CUBICSPLINE")this._createCubicSplineTrackInterpolant(g);s.push(g)}return s}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let i=Ad(t.constructor),n=new Float32Array(t.length);for(let r=0,s=t.length;r<s;r++)n[r]=t[r]*i;t=n}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(i){return new(this instanceof ts?b1:Cd)(this.times,this.values,this.getValueSize()/3,i)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function hS(e,t,i){let n=t.attributes,r=new Li;if(n.POSITION!==void 0){let a=i.json.accessors[n.POSITION],{min:l,max:c}=a;if(l!==void 0&&c!==void 0){if(r.set(new R(l[0],l[1],l[2]),new R(c[0],c[1],c[2])),a.normalized){let f=Ad(el[a.componentType]);r.min.multiplyScalar(f),r.max.multiplyScalar(f)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let s=t.targets;if(s!==void 0){let a=new R,l=new R;for(let c=0,f=s.length;c<f;c++){let u=s[c];if(u.POSITION!==void 0){let h=i.json.accessors[u.POSITION],{min:m,max:g}=h;if(m!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(m[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(m[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(m[2]),Math.abs(g[2]))),h.normalized){let x=Ad(el[h.componentType]);l.multiplyScalar(x)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}r.expandByVector(a)}e.boundingBox=r;let o=new Hi;r.getCenter(o.center),o.radius=r.min.distanceTo(r.max)/2,e.boundingSphere=o}function $_(e,t,i){let n=t.attributes,r=[];function s(o,a){return i.getDependency("accessor",o).then(function(l){e.setAttribute(a,l)})}for(let o in n){let a=wd[o]||o.toLowerCase();if(a in e.attributes)continue;r.push(s(n[o],a))}if(t.indices!==void 0&&!e.index){let o=i.getDependency("accessor",t.indices).then(function(a){e.setIndex(a)});r.push(o)}if(Et.workingColorSpace!==Tn&&"COLOR_0"in n)console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Et.workingColorSpace}" not supported.`);return rs(e,t),hS(e,t,i),Promise.all(r).then(function(){return t.targets!==void 0?oS(e,t.targets,i):e})}var tl={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class Cr{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}var uS=new Xr(-1,1,1,-1,0,1);class E1 extends et{constructor(){super();this.setAttribute("position",new Be([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Be([0,2,0,0,2,0],2))}}var dS=new E1;class Jo{constructor(e){this._mesh=new ae(dS,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,uS)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class Pd extends Cr{constructor(e,t="tDiffuse"){super();if(this.textureID=t,this.uniforms=null,this.material=null,e instanceof Di)this.uniforms=e.uniforms,this.material=e;else if(e)this.uniforms=Qr.clone(e.uniforms),this.material=new Di({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader});this._fsQuad=new Jo(this.material)}render(e,t,i){if(this.uniforms[this.textureID])this.uniforms[this.textureID].value=i.texture;if(this._fsQuad.material=this.material,this.renderToScreen)e.setRenderTarget(null),this._fsQuad.render(e);else{if(e.setRenderTarget(t),this.clear)e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil);this._fsQuad.render(e)}}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class Uh extends Cr{constructor(e,t){super();this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){let n=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let s,o;if(this.inverse)s=0,o=1;else s=1,o=0;if(r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(n.REPLACE,n.REPLACE,n.REPLACE),r.buffers.stencil.setFunc(n.ALWAYS,s,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear)e.clear();if(e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear)e.clear();e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(n.EQUAL,1,4294967295),r.buffers.stencil.setOp(n.KEEP,n.KEEP,n.KEEP),r.buffers.stencil.setLocked(!0)}}class Id extends Cr{constructor(){super();this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class Ld{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let i=e.getSize(new ne);this._width=i.width,this._height=i.height,t=new Ti(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Ii}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Pd(tl),this.copyPass.material.blending=yr,this.timer=new Xc}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);if(t!==-1)this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){if(this.timer.update(),e===void 0)e=this.timer.getDelta();let t=this.renderer.getRenderTarget(),i=!1;for(let n=0,r=this.passes.length;n<r;n++){let s=this.passes[n];if(s.enabled===!1)continue;if(s.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(n),s.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),s.needsSwap){if(i){let o=this.renderer.getContext(),a=this.renderer.state.buffers.stencil;a.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),a.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}if(Uh!==void 0){if(s instanceof Uh)i=!0;else if(s instanceof Id)i=!1}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new ne);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let i=this._width*this._pixelRatio,n=this._height*this._pixelRatio;this.renderTarget1.setSize(i,n),this.renderTarget2.setSize(i,n);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,n)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Dd extends Cr{constructor(e,t,i=null,n=null,r=null){super();this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=n,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new Se}render(e,t,i){let n=e.autoClear;e.autoClear=!1;let r,s;if(this.overrideMaterial!==null)s=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial;if(this.clearColor!==null)e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha());if(this.clearAlpha!==null)r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha);if(this.clearDepth==!0)e.clearDepth();if(e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0)e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil);if(e.render(this.scene,this.camera),this.clearColor!==null)e.setClearColor(this._oldClearColor);if(this.clearAlpha!==null)e.setClearAlpha(r);if(this.overrideMaterial!==null)this.scene.overrideMaterial=s;e.autoClear=n}}var T1={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Se(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class jo extends Cr{constructor(e,t=1,i,n){super();this.strength=t,this.radius=i,this.threshold=n,this.resolution=e!==void 0?new ne(e.x,e.y):new ne(256,256),this.clearColor=new Se(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),s=Math.round(this.resolution.y/2);this.renderTargetBright=new Ti(r,s,{type:Ii,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let c=0;c<this.nMips;c++){let f=new Ti(r,s,{type:Ii,depthBuffer:!1});f.texture.name="UnrealBloomPass.h"+c,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);let u=new Ti(r,s,{type:Ii,depthBuffer:!1});u.texture.name="UnrealBloomPass.v"+c,u.texture.generateMipmaps=!1,this.renderTargetsVertical.push(u),r=Math.round(r/2),s=Math.round(s/2)}let o=T1;this.highPassUniforms=Qr.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=n,this.highPassUniforms.smoothWidth.value=0.01,this.materialHighPassFilter=new Di({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let a=[6,10,14,18,22];r=Math.round(this.resolution.x/2),s=Math.round(this.resolution.y/2);for(let c=0;c<this.nMips;c++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(a[c])),this.separableBlurMaterials[c].uniforms.invSize.value=new ne(1/r,1/s),r=Math.round(r/2),s=Math.round(s/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=0.1;let l=[1,0.8,0.6,0.4,0.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new R(1,1,1),new R(1,1,1),new R(1,1,1),new R(1,1,1),new R(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Qr.clone(tl.uniforms),this.blendMaterial=new Di({uniforms:this.copyUniforms,vertexShader:tl.vertexShader,fragmentShader:tl.fragmentShader,premultipliedAlpha:!0,blending:_l,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Se,this._oldClearAlpha=1,this._basic=new _t,this._fsQuad=new Jo(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),n=Math.round(t/2);this.renderTargetBright.setSize(i,n);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(i,n),this.renderTargetsVertical[r].setSize(i,n),this.separableBlurMaterials[r].uniforms.invSize.value=new ne(1/i,1/n),i=Math.round(i/2),n=Math.round(n/2)}render(e,t,i,n,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();let s=e.autoClear;if(e.autoClear=!1,e.setClearColor(this.clearColor,0),r)e.state.buffers.stencil.setTest(!1);if(this.renderToScreen)this._fsQuad.material=this._basic,this._basic.map=i.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e);this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let o=this.renderTargetBright;for(let a=0;a<this.nMips;a++)this._fsQuad.material=this.separableBlurMaterials[a],this.separableBlurMaterials[a].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[a].uniforms.direction.value=jo.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[a]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[a].uniforms.colorTexture.value=this.renderTargetsHorizontal[a].texture,this.separableBlurMaterials[a].uniforms.direction.value=jo.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[a]),e.clear(),this._fsQuad.render(e),o=this.renderTargetsVertical[a];if(this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r)e.state.buffers.stencil.setTest(!0);if(this.renderToScreen)e.setRenderTarget(null),this._fsQuad.render(e);else e.setRenderTarget(i),this._fsQuad.render(e);e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=s}_getSeparableBlurMaterial(e){let t=[],i=e/3;for(let s=0;s<e;s++)t.push(0.39894*Math.exp(-0.5*s*s/(i*i))/i);let n=[],r=[];for(let s=1;s<e;s+=2){let o=t[s],a=s+1<e?t[s+1]:0,l=o+a;n.push((s*o+(s+1)*a)/l),r.push(l)}return new Di({defines:{KERNEL_PAIRS:n.length},uniforms:{colorTexture:{value:null},invSize:{value:new ne(0.5,0.5)},direction:{value:new ne(0.5,0.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:n},gaussianWeights:{value:r}},vertexShader:`

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

				}`})}_getCompositeMaterial(e){return new Di({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

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

				}`})}}jo.BlurDirectionX=new ne(1,0);jo.BlurDirectionY=new ne(0,1);var Jc={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class Nd extends Cr{constructor(){super();this.isOutputPass=!0,this.uniforms=Qr.clone(Jc.uniforms),this.material=new Wo({name:Jc.name,uniforms:this.uniforms,vertexShader:Jc.vertexShader,fragmentShader:Jc.fragmentShader}),this._fsQuad=new Jo(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,i){if(this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping){if(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},Et.getTransfer(this._outputColorSpace)===Wt)this.material.defines.SRGB_TRANSFER="";if(this._toneMapping===oa)this.material.defines.LINEAR_TONE_MAPPING="";else if(this._toneMapping===aa)this.material.defines.REINHARD_TONE_MAPPING="";else if(this._toneMapping===la)this.material.defines.CINEON_TONE_MAPPING="";else if(this._toneMapping===Hs)this.material.defines.ACES_FILMIC_TONE_MAPPING="";else if(this._toneMapping===fa)this.material.defines.AGX_TONE_MAPPING="";else if(this._toneMapping===ha)this.material.defines.NEUTRAL_TONE_MAPPING="";else if(this._toneMapping===ca)this.material.defines.CUSTOM_TONE_MAPPING="";this.material.needsUpdate=!0}if(this.renderToScreen===!0)e.setRenderTarget(null),this._fsQuad.render(e);else{if(e.setRenderTarget(t),this.clear)e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil);this._fsQuad.render(e)}}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class Fd extends Co{constructor(){super();this.name="RoomEnvironment",this.position.y=-3.5;let e=new bt;e.deleteAttribute("uv");let t=new yt({side:Mi}),i=new yt,n=new Wr(16777215,900,28,2);n.position.set(0.418,16.199,0.3),this.add(n);let r=new ae(e,t);r.position.set(-0.757,13.219,0.717),r.scale.set(31.713,28.305,28.591),this.add(r);let s=new lr(e,i,6),o=new vt;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-0.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),s.setMatrixAt(0,o.matrix),o.position.set(-5.607,-0.754,-0.758),o.rotation.set(0,0.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),s.setMatrixAt(1,o.matrix),o.position.set(6.167,0.857,7.803),o.rotation.set(0,0.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),s.setMatrixAt(2,o.matrix),o.position.set(-2.017,0.018,6.124),o.rotation.set(0,0.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),s.setMatrixAt(3,o.matrix),o.position.set(2.291,-0.756,-2.621),o.rotation.set(0,-0.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),s.setMatrixAt(4,o.matrix),o.position.set(-2.193,-0.369,-5.547),o.rotation.set(0,0.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),s.setMatrixAt(5,o.matrix),this.add(s);let a=new ae(e,il(50));a.position.set(-16.116,14.37,8.208),a.scale.set(0.1,2.428,2.739),this.add(a);let l=new ae(e,il(50));l.position.set(-16.109,18.021,-8.207),l.scale.set(0.1,2.425,2.751),this.add(l);let c=new ae(e,il(17));c.position.set(14.904,12.198,-1.832),c.scale.set(0.15,4.265,6.331),this.add(c);let f=new ae(e,il(43));f.position.set(-0.462,8.89,14.52),f.scale.set(4.38,5.441,0.088),this.add(f);let u=new ae(e,il(20));u.position.set(3.235,11.486,-12.541),u.scale.set(2.5,2,0.1),this.add(u);let h=new ae(e,il(100));h.position.set(0,20,0),h.scale.set(1,0.1,1),this.add(h)}dispose(){let e=new Set;this.traverse((t)=>{if(t.isMesh)e.add(t.geometry),e.add(t.material)});for(let t of e)t.dispose()}}function il(e){return new Bc({color:0,emissive:16777215,emissiveIntensity:e})}var jc=new R;function Pr(e,t,i,n,r,s){let o=2*Math.PI*r/4,a=Math.max(s-2*r,0),l=Math.PI/4;jc.copy(t),jc[n]=0,jc.normalize();let c=0.5*o/(o+a),f=1-jc.angleTo(e)/l;if(Math.sign(jc[i])===1)return f*c;else return a/(o+a)+c+c*(1-f)}class Rn extends bt{constructor(e=1,t=1,i=1,n=2,r=0.1){let s=n*2+1;r=Math.min(e/2,t/2,i/2,r);super(1,1,1,s,s,s);if(this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:i,segments:n,radius:r},s===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let a=new R,l=new R,c=new R(e,t,i).divideScalar(2).subScalar(r),f=this.attributes.position.array,u=this.attributes.normal.array,h=this.attributes.uv.array,m=f.length/6,g=new R,x=0.5/s;for(let d=0,p=0;d<f.length;d+=3,p+=2)switch(a.fromArray(f,d),l.copy(a),l.x-=Math.sign(l.x)*x,l.y-=Math.sign(l.y)*x,l.z-=Math.sign(l.z)*x,l.normalize(),f[d+0]=c.x*Math.sign(a.x)+l.x*r,f[d+1]=c.y*Math.sign(a.y)+l.y*r,f[d+2]=c.z*Math.sign(a.z)+l.z*r,u[d+0]=l.x,u[d+1]=l.y,u[d+2]=l.z,Math.floor(d/m)){case 0:g.set(1,0,0),h[p+0]=Pr(g,l,"z","y",r,i),h[p+1]=1-Pr(g,l,"y","z",r,t);break;case 1:g.set(-1,0,0),h[p+0]=1-Pr(g,l,"z","y",r,i),h[p+1]=1-Pr(g,l,"y","z",r,t);break;case 2:g.set(0,1,0),h[p+0]=1-Pr(g,l,"x","z",r,e),h[p+1]=Pr(g,l,"z","x",r,i);break;case 3:g.set(0,-1,0),h[p+0]=1-Pr(g,l,"x","z",r,e),h[p+1]=1-Pr(g,l,"z","x",r,i);break;case 4:g.set(0,0,1),h[p+0]=1-Pr(g,l,"x","y",r,e),h[p+1]=1-Pr(g,l,"y","x",r,t);break;case 5:g.set(0,0,-1),h[p+0]=Pr(g,l,"x","y",r,e),h[p+1]=1-Pr(g,l,"y","x",r,t);break}}static fromJSON(e){return new Rn(e.width,e.height,e.depth,e.segments,e.radius)}}var Yn=window.FUNUI,Ir=(e)=>document.querySelector(e),Yr=matchMedia("(pointer:coarse)").matches||innerWidth<820;if(Yr)document.body.classList.add("touch");var zn=Ir("#c"),kn=new Fh({canvas:zn,antialias:!Yr,powerPreference:"high-performance"}),Xd=Math.min(devicePixelRatio||1,Yr?1.5:1.75),ss=Xd;kn.setPixelRatio(ss);kn.toneMapping=Hs;kn.toneMappingExposure=1.05;var jt=new Co;jt.background=new Se(329498);jt.fog=new Ia(329498,40,95);var pS=new to(kn);jt.environment=pS.fromScene(new Fd,0.04).texture;jt.environmentIntensity=0.18;var Fi=new wi(68,1,0.05,120),os=null;function jd(){let e=innerWidth,t=innerHeight;if(kn.setSize(e,t,!1),Fi.aspect=e/t,Fi.fov=e/t<1?80:68,Fi.updateProjectionMatrix(),os)os.setSize(e,t)}if(!Yr)os=new Ld(kn),os.addPass(new Dd(jt,Fi)),os.addPass(new jo(new ne(innerWidth,innerHeight),0.2,0.45,1)),os.addPass(new Nd);addEventListener("resize",jd);jd();var ct=(()=>{let e=7;return()=>(e=e*16807%2147483647)/2147483647})();function bi(e,t){let i=document.createElement("canvas");return i.width=e,i.height=t,i}function jh(e,t=1,i=1,n=!0){let r=new zi(e);if(r.wrapS=r.wrapT=Nn,r.repeat.set(t,i),r.anisotropy=8,n)r.colorSpace=Ft;return r}function rn(e,t,i,n){let r=e.getImageData(0,0,t,i),s=r.data;for(let o=0;o<s.length;o+=4){let a=(ct()-0.5)*n;s[o]+=a,s[o+1]+=a,s[o+2]+=a}e.putImageData(r,0,0)}var Ui={};Ui.concrete=(()=>{let e=bi(512,512),t=e.getContext("2d");t.fillStyle="#7d7e82",t.fillRect(0,0,512,512);for(let i=0;i<40;i++){let n=t.createRadialGradient(ct()*512,ct()*512,5,ct()*512,ct()*512,120),r=ct()*512,s=ct()*512,o=t.createRadialGradient(r,s,5,r,s,90+ct()*90);o.addColorStop(0,ct()>0.5?"rgba(255,255,255,.07)":"rgba(0,0,0,.09)"),o.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=o,t.fillRect(0,0,512,512)}return rn(t,512,512,22),t.strokeStyle="rgba(0,0,0,.35)",t.lineWidth=2,t.strokeRect(1,1,510,510),e})();Ui.parquet=(()=>{let e=bi(512,512),t=e.getContext("2d"),i=256,n=42;for(let r=0;r<12;r++){let s=r%3*85;for(let o=-1;o<3;o++){let a=24+ct()*6,l=28+ct()*12;t.fillStyle=`hsl(${a},48%,${l}%)`,t.fillRect(o*256+s,r*42,254,40);for(let c=0;c<14;c++){t.strokeStyle=`rgba(30,12,0,${0.05+ct()*0.1})`,t.lineWidth=1,t.beginPath();let f=r*42+ct()*42;t.moveTo(o*256+s,f),t.lineTo(o*256+s+256,f+(ct()-0.5)*3),t.stroke()}}}return rn(t,512,512,10),e})();Ui.brick=(()=>{let e=bi(512,512),t=e.getContext("2d");t.fillStyle="#3a2c28",t.fillRect(0,0,512,512);let i=128,n=42;for(let r=0;r<12;r++)for(let s=-1;s<5;s++){let o=r%2*64,a=8+ct()*8,l=30+ct()*14;t.fillStyle=`hsl(${a},${48+ct()*14}%,${l}%)`,t.fillRect(s*i+o+3,r*n+3,i-6,n-6)}return rn(t,512,512,26),e})();Ui.carpet=(()=>{let e=bi(256,256),t=e.getContext("2d");return t.fillStyle="#857f76",t.fillRect(0,0,256,256),rn(t,256,256,26),e})();Ui.slats=(()=>{let e=bi(512,512),t=e.getContext("2d");for(let i=0;i<16;i++)t.fillStyle=`hsl(${28+ct()*5},38%,${24+ct()*8}%)`,t.fillRect(i*32,0,28,512),t.fillStyle="#0c0b0b",t.fillRect(i*32+28,0,4,512);return rn(t,512,512,10),e})();Ui.oak=(()=>{let e=bi(512,512),t=e.getContext("2d"),i=512,n=128;for(let r=0;r<4;r++){let s=r%2*200;for(let o=-1;o<2;o++){t.fillStyle=`hsl(${32+ct()*4},${28+ct()*6}%,${66+ct()*6}%)`,t.fillRect(o*512+s,r*128,510,126);for(let a=0;a<26;a++){t.strokeStyle=`rgba(90,60,30,${0.04+ct()*0.08})`,t.beginPath();let l=r*128+ct()*128;t.moveTo(o*512+s,l),t.lineTo(o*512+s+512,l+(ct()-0.5)*6),t.stroke()}}}return rn(t,512,512,8),e})();Ui.greige=(()=>{let e=bi(256,256),t=e.getContext("2d");return t.fillStyle="#a3a5ab",t.fillRect(0,0,256,256),rn(t,256,256,8),e})();Ui.graphite=(()=>{let e=bi(256,256),t=e.getContext("2d");return t.fillStyle="#26272c",t.fillRect(0,0,256,256),rn(t,256,256,10),e})();Ui.plaster=(()=>{let e=bi(256,256),t=e.getContext("2d");return t.fillStyle="#d9d8d4",t.fillRect(0,0,256,256),rn(t,256,256,10),e})();Ui.darkwall=(()=>{let e=bi(256,256),t=e.getContext("2d");return t.fillStyle="#25252c",t.fillRect(0,0,256,256),rn(t,256,256,12),e})();Ui.pvc=(()=>{let e=bi(256,256),t=e.getContext("2d");return t.fillStyle="#2f6b4f",t.fillRect(0,0,256,256),rn(t,256,256,12),e})();Ui.rubber=(()=>{let e=bi(256,256),t=e.getContext("2d");return t.fillStyle="#23262f",t.fillRect(0,0,256,256),rn(t,256,256,30),e})();Ui.tile=(()=>{let e=bi(256,256),t=e.getContext("2d");return t.fillStyle="#e4e4e2",t.fillRect(0,0,256,256),t.strokeStyle="#a9a9a6",t.lineWidth=3,t.strokeRect(0,0,256,256),rn(t,256,256,8),e})();function ls(e,t,i=0.85,n=0,r=1,s=1,o={}){let a=jh(Ui[e],r/t,s/t);return new yt(Object.assign({map:a,bumpMap:a,bumpScale:e==="brick"?3:0.8,roughness:i,metalness:n},o))}var Z=(e,t=0.6,i=0,n)=>new yt(Object.assign({color:e,roughness:t,metalness:i},n||{})),mi=(e,t=1)=>new yt({color:0,emissive:e,emissiveIntensity:t,toneMapped:!0});function $d(e,t,i,n=0,r=0,s=0,o=0,a=!0){let l=new ae(t,i);return l.position.set(n,r,s),l.rotation.y=o,l.castShadow=a,l.receiveShadow=!0,e.add(l),l}var V=(e,t,i,n,r,s,o,a,l=0)=>$d(e,new bt(t,i,n),r,s,o,a,l);var gt=(e,t,i,n,r,s,o,a,l=24)=>$d(e,new Pt(t,i,n,l),r,s,o,a);function qn(e,t,i,n,r,s,o,a,l=0,c="bold 120px Arial Black, Arial",f,u=!0){let h=bi(1024,Math.round(1024*n/i)),m=h.getContext("2d");if(f)m.fillStyle=f,m.fillRect(0,0,h.width,h.height);m.font=c,m.textAlign="center",m.textBaseline="middle",m.shadowColor=r,m.shadowBlur=28,m.fillStyle=r,m.fillText(t,h.width/2,h.height/2),m.shadowBlur=8,m.fillText(t,h.width/2,h.height/2);let g=new zi(h);g.colorSpace=Ft;let x=new ae(new ei(i,n),new _t({map:g,transparent:!f,toneMapped:!1}));if(x.position.set(s,o,a),x.rotation.y=l,e.add(x),!u)return x;let d=new Wr(new Se(r),3,4,2);return d.position.set(s,o,a),d.position.add(new R(Math.sin(l),0,Math.cos(l)).multiplyScalar(0.4)),e.add(d),x}function Sn(e,t,i,n,r,s,o=12){let a=new Wr(r,s,o,2);return a.position.set(t,i,n),e.add(a),a}var ti=new Ze;jt.add(ti);var Ln=new Ze;ti.add(Ln);var cf=[];function Lr(e,t,i,n,r,s,o,a=[],l=0.25,c=!1){let f=n-t,u=r-i,h=Math.hypot(f,u),m=-Math.atan2(u,f),g=[],x=0;a.sort((p,y)=>p[0]-y[0]);for(let[p,y]of a){if(p>x)g.push([x,p,0]);g.push([p,y,1]),x=y}if(x<h)g.push([x,h,0]);for(let[p,y,M]of g){let b=y-p,T=t+f/h*(p+y)/2,S=i+u/h*(p+y)/2,_=M?2.2:0,v=M?s-2.2:s;if(v>0.01){let w=new ae(new bt(b,v,l),o(b,v));if(w.position.set(T,_+v/2,S),w.rotation.y=m,w.castShadow=w.receiveShadow=!0,e.add(w),c)cf.push(w)}if(M)for(let w of[p,y]){let I=t+f/h*w,P=i+u/h*w,O=new ae(new bt(0.1,2.2,l+0.06),Z(1842208,0.6));O.position.set(I,1.1,P),O.rotation.y=m,e.add(O)}}let d=new ae(new bt(h,0.12,l+0.03),Z(1381658,0.7));d.position.set((t+n)/2,0.06,(i+r)/2),d.rotation.y=m,e.add(d)}function ff(e,t,i){let n=new fn(t.map((o)=>new ne(o[0],-o[1]))),r=new Vo(n);r.rotateX(-Math.PI/2);let s=new ae(r,i);return s.receiveShadow=!0,e.add(s),s}function hl(e,t,i){let n=new fn(e.map((o)=>new ne(o[0],-o[1]))),r=new Vo(n);r.rotateX(-Math.PI/2),i.side=Kt;let s=new ae(r,i);s.position.y=t,Ln.add(s)}Ui.carpetDark=(()=>{let e=bi(256,256),t=e.getContext("2d");t.fillStyle="#1b1c22",t.fillRect(0,0,256,256);for(let i=0;i<6000;i++){let n=20+ct()*22;t.fillStyle=`rgba(${n},${n},${n+7},.5)`,t.fillRect(ct()*256,ct()*256,1+ct()*1.4,1+ct()*2.2)}return rn(t,256,256,12),e})();Ui.fabric=(()=>{let e=bi(256,256),t=e.getContext("2d");t.fillStyle="#3b3e46",t.fillRect(0,0,256,256),t.strokeStyle="rgba(0,0,0,.18)",t.lineWidth=1;for(let i=0;i<256;i+=4)t.beginPath(),t.moveTo(i,0),t.lineTo(i,256),t.stroke(),t.beginPath(),t.moveTo(0,i),t.lineTo(256,i),t.stroke();return rn(t,256,256,14),e})();Ui.plywood=(()=>{let e=bi(512,1024),t=e.getContext("2d"),i=t.createLinearGradient(0,0,512,0);i.addColorStop(0,"#c7a368"),i.addColorStop(0.5,"#d2b077"),i.addColorStop(1,"#c39d62"),t.fillStyle=i,t.fillRect(0,0,512,1024);for(let r=0;r<380;r++){let s=ct()*512,o=ct()*1024;t.strokeStyle=`rgba(${95+ct()*40},${60+ct()*30},25,${0.05+ct()*0.12})`,t.lineWidth=0.6+ct()*1.6,t.beginPath(),t.moveTo(s,o),t.bezierCurveTo(s+ct()*16-8,o+120,s+ct()*16-8,o+260,s+ct()*10-5,o+380+ct()*200),t.stroke()}for(let r=0;r<4;r++){let s=ct()*512,o=ct()*1024;for(let a=3;a<22;a+=4)t.strokeStyle=`rgba(90,55,20,${0.25-a/120})`,t.lineWidth=1.5,t.beginPath(),t.ellipse(s,o,a*0.7,a*1.5,0,0,7),t.stroke()}let n=83.9344262295082;for(let r=0;r<6;r++)for(let s=0;s<12;s++){let o=38+r*n,a=40+s*n;if(o>500)continue;t.fillStyle="rgba(30,18,8,.85)",t.beginPath(),t.arc(o,a,5,0,7),t.fill(),t.fillStyle="rgba(255,230,190,.35)",t.beginPath(),t.arc(o-1,a-1,1.6,0,7),t.fill()}return t.strokeStyle="rgba(40,24,10,.7)",t.lineWidth=3,t.strokeRect(1,1,510,1022),rn(t,512,1024,10),e})();Ui.matBlue=(()=>{let e=bi(256,512),t=e.getContext("2d");return t.fillStyle="#244f9e",t.fillRect(0,0,256,512),rn(t,256,512,26),t.strokeStyle="rgba(8,16,40,.9)",t.lineWidth=6,t.strokeRect(2,2,252,508),t.strokeStyle="rgba(160,190,255,.35)",t.lineWidth=2,t.setLineDash([7,6]),t.strokeRect(12,12,232,488),e})();Ui.steel=(()=>{let e=bi(128,128),t=e.getContext("2d");return t.fillStyle="#5b6068",t.fillRect(0,0,128,128),rn(t,128,128,18),e})();var Yt=new Ze;ti.add(Yt);var Dn=3.2,I1=[[-8.8,-3.85],[8.8,-3.85],[8.8,3.85],[-8.8,3.85]],L1=[[-3.9,-9.4],[4.3,-9.4],[4.3,-3.85],[-3.9,-3.85]],fo;function $h(e,t,i){let n=ls(e,t,i,0,1,1);return n.map.repeat.set(1/t,1/t),n.bumpMap=n.map,n}var ta=(e,t)=>ls("darkwall",1.4,0.9,0,e,t),mS=(e,t)=>ls("graphite",1.4,0.85,0,e,t),gS=(e,t)=>ls("slats",1,0.7,0,e,t),D1=$h("carpetDark",0.6,1);ff(Yt,I1,D1);ff(Yt,L1,D1);Lr(Yt,-8.8,-3.85,-3.9,-3.85,Dn,ta);Lr(Yt,-3.9,-3.85,-3.9,-9.4,Dn,ta);Lr(Yt,-3.9,-9.4,4.3,-9.4,Dn,gS);Lr(Yt,4.3,-9.4,4.3,-3.85,Dn,ta);Lr(Yt,4.3,-3.85,8.8,-3.85,Dn,ta);Lr(Yt,8.8,-3.85,8.8,3.85,Dn,mS);Lr(Yt,8.8,3.85,-8.8,3.85,Dn,ta,[[9.8,11.6]],0.25,!0);Lr(Yt,-8.8,3.85,-8.8,-3.85,Dn,ta,[[2.65,4.85]]);for(let[e,t]of[[-3.9,-3.85],[4.3,-3.85]])V(Yt,0.5,Dn,0.5,Z(2763569,0.7),e,Dn/2,t),V(Yt,0.54,0.12,0.54,Z(855312,0.6),e,0.06,t);var N1=()=>Z(1908260,0.9);hl(I1,Dn,N1());hl(L1,Dn,N1());V(Ln,8.6,0.34,0.55,Z(1381914,0.85),0.2,Dn-0.17,-3.85);for(let[e,t,i,n,r]of[[0,-3.62,17.2,0.06,6966527],[0,3.62,17.2,0.06,6966527],[-8.58,0,0.06,7.2,6966527],[8.58,0,0.06,7.2,6966527],[0.2,-9.18,8,0.06,16762512],[-3.68,-6.6,0.06,5.2,16762512],[4.08,-6.6,0.06,5.2,16762512]])V(Ln,i,0.025,n,mi(r,3.5),e,Dn-0.015,t);for(let e=0;e<6;e++)for(let t of[-1.8,1.8])gt(Ln,0.07,0.07,0.02,mi(16773856,8),-7+e*2.8+1,Dn-0.02,t);for(let e=0;e<3;e++)for(let t of[-5.5,-8])gt(Ln,0.07,0.07,0.02,mi(16773856,8),-2.4+e*2.6+0.2,Dn-0.02,t);jt.add(new Wc(16777215,0.34));kn.toneMappingExposure=0.8;jt.environmentIntensity=0.3;Sn(Yt,0.2,2.8,0,16773598,14,14);Sn(Yt,-6.2,2.8,-2.2,16773340,10,9);Sn(Yt,-6.2,2.8,2.2,16773340,10,9);Sn(Yt,0.2,2.9,-6.6,16774116,16,10);Sn(Yt,2.9,2.5,2.5,16761466,10,8);Sn(Yt,2.9,0.35,1.6,11554047,3,4);Sn(Yt,7.3,2.6,0,9071871,5,7);Sn(Yt,-0.6,2.7,0.4,3725567,3,6);var sl=(e,t,i,n,r=0,s=0,o=0,a=ti)=>{let l=new ae(new bt(e,t,i),n);return l.position.set(r,s,o),a.add(l),l};function F1(e,t,i,n){let r=document.createElement("canvas");r.width=e,r.height=t,i(r.getContext("2d"),e,t);let s=new zi(r);if(s.colorSpace=Ft,s.anisotropy=8,n)s.wrapS=s.wrapT=Nn,s.repeat.set(n[0],n[1]);return s}var Qh=(e,t={})=>new yt({color:e,roughness:t.r??0.6,metalness:t.m??0.1,emissive:t.e??0,emissiveIntensity:t.ei??1,side:t.side}),U1=(e,t=1)=>new _t({color:new Se(e).multiplyScalar(t),toneMapped:!1});function B1(e,t,i,n,r,s,o,a=0){let l=new ae(new ei(e,t),new _t({map:i,transparent:!0,toneMapped:!1}));return l.position.set(r,s,o),l.rotation.y=a,n.add(l),l}var fl=F1,xS=Qh;var Qd=B1,ho=[];function _S(e,{w:t=1024,h:i=384,font:n="900 250px Inter,Arial,sans-serif",color:r="#3dff9a",fill:s="#c8ffe2",lw:o=10,blur:a=30}={}){return fl(t,i,(l,c,f)=>{l.clearRect(0,0,c,f),l.font=n,l.textAlign="center",l.textBaseline="middle",l.shadowColor=r,l.shadowBlur=a,l.lineWidth=o,l.strokeStyle=r,l.lineJoin="round",l.strokeText(e,c/2,f/2+6),l.shadowBlur=0,l.fillStyle=s,l.fillText(e,c/2,f/2+6)})}function yS(e,t="#3dff9a",i=1){let n=_S(e,{w:768,h:192,font:"800 96px Inter,Arial,sans-serif",color:t,fill:"#ffffff",lw:6,blur:18}),r=new yc(new Lo({map:n,transparent:!0,depthWrite:!1,toneMapped:!1}));return r.scale.set(2.4*i,0.6*i,1),r}(function(){let e=sl,t=F1,i=Qh,n=U1,r=B1,s={games:[["VAL","Valorant","#ff4655","#fff"],["LoL","League","#1b3a8a","#e9c46a"],["CS2","CS2","#e8793a","#1a0f05"],["RL","Rocket League","#1e7bff","#ff9a4a"],["ARK","Arkheron","#1fb89a","#032a22"],["S2","SMITE 2","#6a3ad0","#ffd68a"]]},o=new Ze;o.position.set(8.19,0,0),o.rotation.y=-Math.PI/2,Yt.add(o),fo=o;let a=i(790562,{r:0.4,m:0.4});e(1.9,0.05,0.85,a,0,0.75,0,o),[[-0.9,-0.38],[0.9,-0.38],[-0.9,0.38],[0.9,0.38]].forEach(([D,N])=>e(0.05,0.75,0.05,a,D,0.375,N,o)),e(1.9,0.015,0.02,n(3824895,1.4),0,0.72,0.43,o);let l=t(512,300,(D,N,se)=>{D.fillStyle="#12062a",D.fillRect(0,0,N,se),D.strokeStyle="#ff4fa6",D.globalAlpha=0.5,D.lineWidth=2,D.beginPath(),D.moveTo(20,40),D.quadraticCurveTo(70,80,40,140),D.moveTo(490,30),D.quadraticCurveTo(440,90,470,150),D.stroke(),D.globalAlpha=1,D.font="900 100px Inter,Arial",D.textAlign="center",D.shadowColor="#ff4f8a",D.shadowBlur=24,D.lineWidth=6,D.strokeStyle="#ff4f8a",D.strokeText("FONGER",N/2,180),D.shadowBlur=0,D.fillStyle="#2a0a2e",D.fillText("FONGER",N/2,180)}),c=s&&s.games||[],f=t(512,300,(D,N,se)=>{let Y=D.createLinearGradient(0,0,N,se);Y.addColorStop(0,"#10163f"),Y.addColorStop(0.55,"#2a1a6e"),Y.addColorStop(1,"#5a1f78"),D.fillStyle=Y,D.fillRect(0,0,N,se),c.forEach((W,ee)=>{let de=60+ee%3*150,X=40+Math.floor(ee/3)*110;D.fillStyle=W[2],D.beginPath(),D.roundRect(de,X,90,90,20),D.fill(),D.fillStyle=W[3],D.font="900 30px Inter,Arial",D.textAlign="center",D.fillText(W[0],de+45,X+56)}),D.fillStyle="rgba(5,6,15,.9)",D.fillRect(0,se-26,N,26),D.fillStyle="#38e8ff",D.fillRect(10,se-20,14,14)});function u(D,N,se,Y,W,ee,de,X=0,oe=0,ye=0){new js().load(D,(ve)=>{ve.colorSpace=Ft,ve.anisotropy=8;let ke=new ae(new ei(N,se*(ve.image.height/ve.image.width)/(se/N)),new _t({map:ve,transparent:!0,toneMapped:!1}));ke.position.set(W,ee,de),ke.rotation.set(X,oe,ye),Y.add(ke)},void 0,()=>{})}let h=i(460814,{r:0.55,m:0.25}),m=i(724246,{r:0.28,m:0.6}),g=i(15329774,{r:0.45,m:0.05}),x=i(1382175,{m:0.8,r:0.35});function d(D,N,se){let ee=new Ze;ee.position.set(D,0.775,-0.2),ee.rotation.y=N,o.add(ee);let de=new ae(new Rn(0.56,0.32,0.025,3,0.006),m);de.position.y=0.3,ee.add(de),r(0.542,0.3,se,ee,0,0.3,0.0135),e(0.03,0.006,0.001,i(1777451,{m:0.8}),0,0.146,0.0135,ee);let X=new ae(new kr(0.0035,8),n(4063130,2));X.position.set(0.2,0.145,0.0135),ee.add(X);let oe=new ae(new Pt(0.012,0.014,0.17,12),g);oe.position.set(0,0.2,-0.03),ee.add(oe);let ye=new ae(new Pt(0.11,0.115,0.012,40),g);ye.position.set(0,0.006,-0.02),ee.add(ye)}function p(D,N,se){let ee=new Ze;ee.position.set(D,0.775,-0.2),ee.rotation.y=N,o.add(ee);let de=new ae(new Rn(0.62,0.355,0.028,3,0.006),m);de.position.y=0.36,ee.add(de),e(0.28,0.2,0.03,h,0,0.36,-0.028,ee),r(0.604,0.33699999999999997,se,ee,0,0.36,0.0155),e(0.03,0.006,0.001,i(1777451,{m:0.8}),0,0.1875,0.0155,ee);let X=new Ze;X.position.set(D,0.775,-0.405),o.add(X),e(0.06,0.05,0.05,x,0,-0.012,0,X),e(0.05,0.012,0.085,x,0,-0.035,0,X);let oe=new ae(new Pt(0.014,0.014,0.42,16),x);oe.position.set(0,0.21,0),X.add(oe);let ye=new ae(new Pt(0.02,0.02,0.03,16),x);ye.position.set(0,0.4,0),X.add(ye),e(0.03,0.022,0.12,x,0,0.4,0.06,X);let ve=new ae(new Pt(0.017,0.017,0.03,16),x);ve.position.set(0,0.4,0.12),X.add(ve),e(0.03,0.02,0.06,x,0,0.4,0.15,X),e(0.1,0.1,0.012,x,0,0.36,-0.05,ee)}d(-0.52,0.3,l),p(0.12,-0.04,f);{let D=new ae(new Pt(0.045,0.047,0.01,32),g);D.position.set(-0.02,0.78,-0.08),o.add(D);let N=new ae(new Ss(0.028,0.033,32),n(8019199,1.2));N.rotation.x=-Math.PI/2,N.position.set(-0.02,0.7855,-0.08),o.add(N);let se=new ae(new Pt(0.03,0.03,0.15,24),i(657933,{r:0.4,m:0.6}));se.position.set(0.5,0.85,-0.14),o.add(se);let Y=new ae(new Pt(0.031,0.031,0.012,24),x);Y.position.set(0.5,0.92,-0.14),o.add(Y)}let y=t(1024,440,(D,N,se)=>{D.fillStyle="#0c0d11",D.fillRect(0,0,N,se),D.strokeStyle="#2b2e3a",D.lineWidth=4,D.setLineDash([12,9]),D.strokeRect(12,12,N-24,se-24),D.setLineDash([]),D.font="700 64px Inter,Arial",D.fillStyle="#9aa0b4",D.textAlign="right",D.fillText("Logitech G",N-52,se-44)}),M=new ae(new ei(0.9,0.38),new yt({map:y,roughness:0.95}));M.rotation.x=-Math.PI/2,M.position.set(-0.1,0.7765,0.2),o.add(M);let b=t(1480,570,(D,N,se)=>{D.fillStyle="#0a0b10",D.fillRect(0,0,N,se);let Y=76,W=40,ee=40,de="#6a4cff",X=(ve,ke,Ne,xt,Xe=1)=>{let Ye=W+ve*Y+3,Tt=ee+ke*Y+3,ge=Ne*Y-6,Ee=Xe*Y-6;D.shadowColor=de,D.shadowBlur=16,D.fillStyle="#12141c",D.beginPath(),D.roundRect(Ye,Tt,ge,Ee,10),D.fill(),D.shadowBlur=0,D.strokeStyle="rgba(106,76,255,.65)",D.lineWidth=2,D.stroke(),D.fillStyle="#c4b8ff",D.font="600 21px Inter,Arial",D.textAlign="center",D.textBaseline="middle",D.fillText(xt,Ye+ge/2,Tt+Ee/2+1)},oe=(ve,ke,Ne=0)=>{let xt=Ne;ke.forEach(([Xe,Ye])=>{if(Xe!==null)X(xt,ve,Ye,Xe);xt+=Ye})};oe(0,[["Esc",1],[null,1],["F1",1],["F2",1],["F3",1],["F4",1],[null,0.5],["F5",1],["F6",1],["F7",1],["F8",1],[null,0.5],["F9",1],["F10",1],["F11",1],["F12",1],[null,0.25],["Prt",1],["Scr",1],["Pau",1]]);let ye="1234567890".split("");oe(1.5,[["`",1],...ye.map((ve)=>[ve,1]),["-",1],["=",1],["⌫",2],[null,0.25],["Ins",1],["Hm",1],["Pg↑",1]]),oe(2.5,[["Tab",1.5],..."QWERTYUIOP".split("").map((ve)=>[ve,1]),["[",1],["]",1],["\\",1.5],[null,0.25],["Del",1],["End",1],["Pg↓",1]]),oe(3.5,[["Caps",1.75],..."ASDFGHJKL".split("").map((ve)=>[ve,1]),[";",1],["'",1],["Enter",2.25]]),oe(4.5,[["Shift",2.25],..."ZXCVBNM".split("").map((ve)=>[ve,1]),[",",1],[".",1],["/",1],["Shift",2.75],[null,1.25],["↑",1]]),oe(5.5,[["Ctrl",1.25],["Win",1.25],["Alt",1.25],["",6.25],["Alt",1.25],["Fn",1.25],["Menu",1.25],["Ctrl",1.25],[null,0.25],["←",1],["↓",1],["→",1]])}),T=new Ze;T.position.set(-0.2,0.7765,0.22),o.add(T);let S=new ae(new Rn(0.365,0.016,0.142,3,0.006),i(789778,{r:0.4,m:0.55}));S.position.y=0.008,T.add(S);let _=new ae(new ei(0.352,0.13285621621621618),new yt({map:b,emissiveMap:b,emissive:16777215,emissiveIntensity:0.55,roughness:0.6}));_.rotation.x=-Math.PI/2,_.position.y=0.0166,T.add(_),u("logos/razer.png",0.03,0.03,T,0.14,0.0168,-0.06,-Math.PI/2);let v=new Ze;v.position.set(0.27,0.7775,0.21),v.rotation.y=0.12,o.add(v);{let D=new yn(1,40,28),N=D.attributes.position;for(let W=0;W<N.count;W++){let ee=N.getX(W),de=N.getY(W),X=N.getZ(W);de=Math.max(de,0);let oe=X*0.5+0.5,ye=0.0225+0.0095*oe;N.setXYZ(W,ee*ye*(1-0.18*Math.max(0,de)),de*(0.0115+0.013*oe),X*0.0635)}D.computeVertexNormals(),v.add(new ae(D,i(657932,{r:0.62,m:0.1}))),e(0.0014,0.0008,0.034,i(0),0,0.0185,-0.028,v);let se=new ae(new Pt(0.0045,0.0045,0.006,14),i(2763830,{r:0.5,m:0.5}));se.rotation.z=Math.PI/2,se.position.set(0,0.0215,-0.026),v.add(se);let Y=new ae(new kr(0.0025,10),n(4063130,0.9));Y.rotation.x=-Math.PI/2,Y.position.set(0,0.0195,0.01),v.add(Y),u("logos/logitech-g.png",0.012,0.012,v,0,0.0245,0.032,-Math.PI/2)}let w=new Ze;w.position.set(-0.7,0.775,0.26),w.rotation.y=0.5,o.add(w);let I=i(14252331,{r:0.28,m:0.85}),P=i(789518,{r:0.9});{let D=new Ze;D.position.y=0.05,D.rotation.x=Math.PI/2-0.15,w.add(D);let N=new ae(new An(0.088,0.0085,10,40,Math.PI),i(657932,{r:0.7}));N.position.y=0.02,D.add(N),[-1,1].forEach((se)=>{let Y=new ae(new Pt(0.047,0.044,0.03,36),I);Y.rotation.z=Math.PI/2,Y.position.set(se*0.093,-0.06,0),D.add(Y);let W=new ae(new An(0.04,0.005,8,32),i(789518,{m:0.7,r:0.35}));W.rotation.y=Math.PI/2,W.position.set(se*0.108,-0.06,0),D.add(W);let ee=new ae(new Pt(0.048,0.048,0.022,36),P);ee.rotation.z=Math.PI/2,ee.position.set(se*0.075,-0.06,0),D.add(ee)})}let O=ho,Q="n",L=new Ze;L.position.set(0.83,1.025,-0.15),L.rotation.y=0.28,o.add(L);{let Y=i(658194,{r:0.4,m:0.55});e(0.22,0.014,0.46,i(658194,{r:0.6,m:0.4}),0,0.243,0,L),e(0.22,0.012,0.46,Y,0,-0.244,0,L),e(0.01,0.5,0.46,Y,0.105,0,0,L),e(0.22,0.5,0.01,i(460813),0,0,-0.225,L),[-1,1].forEach((Xe)=>e(0.012,0.5,0.012,Y,-0.104,0,Xe*0.224,L)),e(0.22,0.5,0.012,i(723988,{r:0.5,m:0.4}),0,0,0.224,L);let W=t(256,256,(Xe,Ye,Tt)=>{Xe.fillStyle="#17104a",Xe.fillRect(0,0,Ye,Tt);let ge=Xe.createRadialGradient(Ye/2,Tt/2,10,Ye/2,Tt/2,Ye/2);ge.addColorStop(0,"#9a7bff"),ge.addColorStop(1,"#4a2cff"),Xe.fillStyle=ge,Xe.fillRect(0,0,Ye,Tt),Xe.strokeStyle="#1a0f5a",Xe.lineWidth=3;let Ee=14;for(let Ce=-1;Ce<14;Ce++)for(let Ve=-1;Ve<14;Ve++){let We=Ve*Ee*1.75+Ce%2*Ee*0.87,st=Ce*Ee*1.5;Xe.beginPath();for(let Oe=0;Oe<6;Oe++){let Lt=Math.PI/3*Oe+Math.PI/6;Xe.lineTo(We+Math.cos(Lt)*Ee,st+Math.sin(Lt)*Ee)}Xe.closePath(),Xe.stroke()}Xe.fillStyle="#05061a",Xe.beginPath();for(let Ce=0;Ce<6;Ce++){let Ve=Math.PI/3*Ce;Xe.lineTo(Ye/2+Math.cos(Ve)*34,Tt/2+Math.sin(Ve)*34)}Xe.closePath(),Xe.fill()});e(0.13,0.46,0.004,i(526618),0.02,0,0.2305,L),[0.155,0,-0.155].forEach((Xe)=>{let Ye=new ae(new kr(0.064,40),new _t({map:W,toneMapped:!1,color:new Se(1.1,1.1,1.4)}));Ye.position.set(0.02,Xe,0.23320000000000002),L.add(Ye)});let ee=-0.08,de=e(0.006,0.44,0.36,i(1053471,{r:0.6,m:0.3}),0.08,0,-0.03,L),X=new ae(new Pt(0.036,0.036,0.03,32),i(658194,{r:0.3,m:0.7}));X.rotation.z=Math.PI/2,X.position.set(ee+0.03,0.09,0.07),L.add(X);let oe=new ae(new Ss(0.019,0.03,32),n(4877567,1.8));oe.rotation.y=-Math.PI/2,oe.position.set(ee+0.0125,0.09,0.07),L.add(oe);let ye=(Xe)=>L.add(new ae(new Vr(new wr(Xe.map((Ye)=>new R(...Ye))),16,0.0075,8),i(14672878,{r:0.5})));ye([[ee+0.03,0.12,0.09],[ee+0.03,0.2,0.1],[ee+0.03,0.235,0.05]]),ye([[ee+0.03,0.12,0.05],[ee+0.03,0.2,0],[ee+0.03,0.235,-0.04]]);let ve=new ae(new Rn(0.04,0.05,0.3,2,0.006),i(658192,{r:0.35,m:0.7}));ve.position.set(ee+0.03,-0.06,0.02),L.add(ve),e(0.004,0.004,0.26,n(16054015,0.9),ee+0.008,-0.06,0.02,L),[0,0.016].forEach((Xe)=>e(0.012,0.11,0.008,n(6966527,1.2),ee+0.03,0.13,-0.09-Xe,L));let ke=e(0.04,0.03,0.3,i(723986,{r:0.5,m:0.5}),0,0.22,-0.02,L),Ne=new ae(new ei(0.44,0.48),new Mn({color:659488,transparent:!0,opacity:0.2,roughness:0.04,clearcoat:1,side:Kt,depthWrite:!1}));Ne.rotation.y=-Math.PI/2,Ne.position.set(-0.108,0,0),L.add(Ne),((Xe,Ye)=>e(0.006,Ye,0.46,Y,-0.107,Xe,0,L))(0.245,0.012)}{let D=new Wr(5913855,3.2,3,1.6);D.position.set(0.85,1.2,-0.6),o.add(D)}let K=new Ze;K.position.set(0.05,0,0.9),K.rotation.y=0.22,o.add(K);{let D=i(856356,{r:0.55,m:0.05}),N=i(1716106,{r:0.5,e:662118,ei:0.12}),se=i(460813,{r:0.4,m:0.7}),Y=new ae(new Rn(0.52,0.09,0.5,4,0.04),D);Y.position.y=0.5,K.add(Y),[-1,1].forEach((X)=>{let oe=new ae(new Rn(0.06,0.1,0.46,3,0.025),N);oe.position.set(X*0.25,0.54,0),K.add(oe)});let W=new ae(new Rn(0.5,0.72,0.09,4,0.04),D);W.position.set(0,0.92,0.26),W.rotation.x=-0.12,K.add(W),[-1,1].forEach((X)=>{let oe=new ae(new Rn(0.07,0.5,0.1,3,0.03),N);oe.position.set(X*0.235,0.88,0.235),oe.rotation.x=-0.12,K.add(oe)});let ee=new ae(new Rn(0.26,0.17,0.08,3,0.04),N);ee.position.set(0,1.28,0.3),ee.rotation.x=-0.12,K.add(ee),[-1,1].forEach((X)=>{e(0.04,0.2,0.04,se,X*0.3,0.68,0.02,K);let oe=new ae(new Rn(0.07,0.03,0.26,2,0.012),D);oe.position.set(X*0.3,0.79,-0.03),K.add(oe)});let de=new ae(new Pt(0.03,0.035,0.34,12),se);de.position.y=0.3,K.add(de);for(let X=0;X<5;X++){let oe=X/5*Math.PI*2,ye=e(0.3,0.03,0.045,se,0,0.06,0,K);ye.position.set(Math.sin(oe)*0.15,0.07,Math.cos(oe)*0.15),ye.rotation.y=oe-Math.PI/2;let ve=new ae(new yn(0.028,10,8),i(1118744,{r:0.8}));ve.position.set(Math.sin(oe)*0.31,0.03,Math.cos(oe)*0.31),K.add(ve)}}{let D=new ae(new kr(1.5,64),new yt({map:t(512,512,(N,se,Y)=>{let W=N.createRadialGradient(se/2,Y/2,20,se/2,Y/2,se/2);W.addColorStop(0,"#1a1f4e"),W.addColorStop(1,"#0c0f2a"),N.fillStyle=W,N.fillRect(0,0,se,Y),N.strokeStyle="#3a5cff",N.globalAlpha=0.6,N.lineWidth=8,N.beginPath(),N.arc(se/2,Y/2,se/2-14,0,7),N.stroke()}),roughness:1}));D.rotation.x=-Math.PI/2,D.position.set(0.1,0.006,0.75),o.add(D)}})();function MS(){let e=new Ze,t=sl,i=Qh;{let o=i(723984,{r:0.38,m:0.65}),a=i(328966,{r:0.9}),l=new js().load("fun-print.jpg");l.colorSpace=Ft,l.anisotropy=8;let c=new ae(new Rn(2.4,0.042,0.6,4,0.014),o);c.position.y=0.6789999999999999,e.add(c);let f=new ae(new ei(2.364,0.564),new Mn({map:l,roughness:0.5,clearcoat:0.35,clearcoatRoughness:0.35}));f.rotation.x=-Math.PI/2,f.position.y=0.7011999999999999,e.add(f);let u=i(460812);[-0.6,0,0.6].forEach((d)=>t(0.005,0.0012,0.58,u,d,0.7016,0,e)),[-1,1].forEach((d)=>t(2.3,0.03,0.02,o,0,0.6399999999999999,d*0.255,e));let h=1.0999999999999999,m=0.255,g=(d,p,y,M,b,T)=>{let S=new ae(new Pt(d,d,p,16),y);return S.position.set(M,b,T),e.add(S),S};[-1,0,1].forEach((d)=>[-1,1].forEach((p)=>{let y=d*h,M=p*m;g(0.0175,0.38,o,y,0.47,M),g(0.024,0.05,o,y,0.36,M),g(0.0145,0.36,o,y,0.18,M),g(0.019,0.02,a,y,0.01,M)}));let x=(d,p,y)=>{let M=new R(...d),b=new R(...p),T=b.clone().sub(M),S=new ae(new Pt(y,y,T.length(),10),o);S.position.copy(M.clone().add(b).multiplyScalar(0.5)),S.quaternion.setFromUnitVectors(new R(0,1,0),T.normalize()),e.add(S)};[-h,0,h].forEach((d)=>x([d,0.2,-m],[d,0.2,m],0.011)),[-h,h].forEach((d)=>x([d,0.56,-m],[d,0.56,m],0.009))}return e}function vS(e,t,i,n,r){gt(e,0.045,0.034,0.11,new yt({color:r,roughness:0.4,side:Kt}),t,i+0.055,n,16)}function Yd(e,t,i,n,r=1,s=13936170){let o=[[0.001,0],[0.07,0],[0.07,0.015],[0.03,0.03],[0.02,0.12],[0.05,0.15],[0.07,0.17],[0.09,0.26],[0.1,0.34],[0.08,0.36],[0.075,0.34],[0.07,0.25],[0.05,0.18],[0.001,0.17]].map((l)=>new ne(l[0],l[1])),a=$d(e,new Uc(o,24),new yt({color:s,roughness:0.18,metalness:1}),t,i,n);return a.scale.setScalar(r),a}function bS(e,t,i){V(e,t,i,0.03,Z(921104,0.5),0,i/2+0.2,-0.18);for(let r of[-1,1])V(e,0.05,i,0.4,Z(921104,0.5),r*(t/2-0.025),i/2+0.2,0);V(e,t,0.06,0.4,Z(921104,0.5),0,i+0.2,0),V(e,t,0.2,0.4,Z(921104,0.5),0,0.1,0),V(e,t-0.12,i-0.2,0.02,new yt({color:12577023,transparent:!0,opacity:0.12,roughness:0.02}),0,i/2+0.2,0.2);let n=4;for(let r=0;r<n;r++){let s=0.45+r*((i-0.5)/n);V(e,t-0.1,0.02,0.34,Z(3816000,0.3,0.4),0,s,0),V(e,t-0.1,0.01,0.01,mi(14674687,5),0,s-0.015,0.14);for(let o=0;o<4;o++)if((r+o)%3===0)Yd(e,-t/2+0.25+o*(t-0.5)/3,s+0.01,0,0.3+ct()*0.12,[13936170,12633288][o%2]);else V(e,0.16,0.12+ct()*0.05,0.14,Z([2838527,16726843,2007130,13206586][o],0.5),-t/2+0.25+o*(t-0.5)/3,s+0.07,0)}}(function(){let e=new Ze;e.position.set(-8.675,0,-2.6),e.rotation.y=Math.PI/2,Yt.add(e),V(e,1,1,0.1,Z(1908258,0.6),0,1.73,0),V(e,0.08,1,0.25,Z(1908258,0.6),-0.5,1.73,0.09),V(e,0.08,1,0.25,Z(1908258,0.6),0.5,1.73,0.09);let t=bi(512,512),i=t.getContext("2d");i.translate(256,256);let n=["#e8e1c0","#111"];for(let a=0;a<20;a++)for(let[l,c,f,u]of[[240,215,"#d12","#093"],[215,150,"#e8e1c0","#111"],[150,135,"#d12","#093"],[135,40,"#e8e1c0","#111"]])i.beginPath(),i.moveTo(0,0),i.arc(0,0,l,(a-5.5)*Math.PI/10,(a-4.5)*Math.PI/10),i.closePath(),i.fillStyle=a%2?f:u,i.fill(),i.beginPath(),i.moveTo(0,0),i.arc(0,0,c,(a-5.5)*Math.PI/10,(a-4.5)*Math.PI/10),i.closePath(),i.fillStyle=a%2?c==215||c==135?"#e8e1c0":n[1]:n[0];i.setTransform(1,0,0,1,0,0),i.fillStyle="#111",i.fillRect(0,0,512,512),i.translate(256,256);let r=[20,1,18,4,13,6,10,15,2,17,3,19,7,16,8,11,14,9,12,5];for(let a=0;a<20;a++){let l=(a-0.5)*Math.PI/10-Math.PI/2,c=l+Math.PI/10,f=a%2===0,u=[[250,220,f?"#c8202a":"#0b8a3e"],[220,150,f?"#111":"#e8e1c0"],[150,125,f?"#c8202a":"#0b8a3e"],[125,40,f?"#111":"#e8e1c0"]];for(let[h,m,g]of u)i.beginPath(),i.arc(0,0,h,l,c),i.arc(0,0,m,c,l,!0),i.closePath(),i.fillStyle=g,i.fill()}i.beginPath(),i.arc(0,0,40,0,7),i.fillStyle="#0b8a3e",i.fill(),i.beginPath(),i.arc(0,0,16,0,7),i.fillStyle="#c8202a",i.fill();let s=new zi(t);s.colorSpace=Ft;let o=new ae(new kr(0.225,48),new yt({map:s,roughness:0.8}));o.position.set(0,1.73,0.06),e.add(o),qn(e,"DARTS",0.8,0.28,"#ff3b3b",0,2.45,0.05,0,"bold 180px Arial Black"),V(e,0.6,0.45,0.04,Z(1448984,0.8),0.95,1.6,0.05),V(e,0.01,0.01,0.01,Z(0)),V(e,0.9,0.012,0.04,Z(15658734,0.5),0,0.007,2.37),V(e,0.9,0.012,0.01,mi(16726843,3),0,0.012,2.35),Sn(e,0,2.5,0.5,16771522,4,5)})();var Bh=(e,t=0.95)=>ls("fabric",0.5,t,0,1,1,{color:e}),vi=(e,t,i,n,r,s,o,a,l=0.07,c=0,f=0)=>{let u=new ae(new Rn(t,i,n,4,l),r);return u.position.set(s,o,a),u.rotation.x=c,u.rotation.z=f,u.castShadow=u.receiveShadow=!0,e.add(u),u},Wh;function SS(){let e=new Ze;e.position.set(0.2,0,-4.3),e.rotation.y=Math.PI,Yt.add(e);let t=Bh(4869462),i=Bh(6843512),n=Bh(7567493),s=new fn([[-2.7,0],[2.7,0],[2.7,2.6],[1.7,2.6],[1.7,1],[-1.7,1],[-1.7,2.6],[-2.7,2.6]].map((p)=>new ne(p[0],-p[1]))),o=new $r(s,{depth:0.24,bevelEnabled:!0,bevelThickness:0.05,bevelSize:0.05,bevelSegments:4,curveSegments:4});o.rotateX(-Math.PI/2);let a=new ae(o,t);a.position.y=0.1,a.castShadow=a.receiveShadow=!0,e.add(a);for(let[p,y]of[[-2.6,0.1],[2.6,0.1],[-2.6,2.5],[2.6,2.5],[-1.8,0.9],[1.8,0.9]])gt(e,0.03,0.03,0.08,Z(723725,0.4,0.6),p,0.04,y,10);let l=mi(6966527,0.9);V(e,5.2,0.012,0.02,l,0,0.075,0.03),vi(e,5.4,0.58,0.28,t,0,0.67,0.14,0.09);for(let p of[-1,1])vi(e,0.28,0.58,2.32,t,p*2.56,0.67,1.44,0.09);for(let p=0;p<3;p++)vi(e,1.1,0.17,0.7,i,-1.13+p*1.13,0.5,0.65,0.07);for(let p of[-1,1])vi(e,0.72,0.17,0.7,n,p*2.06,0.5,0.65,0.07),vi(e,0.72,0.17,0.78,i,p*2.06,0.5,1.4,0.07),vi(e,0.72,0.17,0.78,i,p*2.06,0.5,2.2,0.07),vi(e,0.22,0.46,0.9,i,p*2.27,0.9,1.2,0.09,0,-p*0.16),vi(e,0.22,0.46,0.9,i,p*2.27,0.9,2.1,0.09,0,-p*0.16);for(let p=0;p<5;p++)vi(e,0.95,0.5,0.2,i,-1.9+p*0.95,0.88,0.37,0.09,-0.2);let c=[13208108,2781048,15130834,8007498,2781048,13208108];[[-2.1,0.75,0.98,0.45,-0.5],[-1.3,0.72,0.55,0.4,0.3],[2.15,0.75,0.97,0.45,0.5],[1.3,0.72,0.55,0.4,-0.3],[-2.2,0.72,2.35,0.4,1.4],[2.2,0.72,2.35,0.4,-1.4]].forEach(([p,y,M,b,T],S)=>{let _=vi(e,b,b,0.13,Bh(c[S],1),p,y,M,0.05,-0.3);_.rotation.y=T});let f=ls("slats",1,0.45,0,1.6,0.9,{color:4862754});vi(e,1.5,0.1,0.85,f,0,0.44,1.75,0.03),vi(e,1.2,0.3,0.6,Z(1182986,0.6),0,0.24,1.75,0.02),vi(e,1.4,0.04,0.8,Z(1708557,0.7),0,0.1,1.75,0.01),V(e,0.32,0.05,0.22,Z(2775690,0.6),-0.35,0.51,1.7),V(e,0.3,0.04,0.2,Z(12599338,0.6),-0.35,0.555,1.7),gt(e,0.12,0.09,0.08,Z(2369067,0.4,0.3),0.35,0.53,1.8,24);let u=bi(1024,700),h=u.getContext("2d"),m=h.createLinearGradient(0,0,1024,700);m.addColorStop(0,"#16182a"),m.addColorStop(1,"#2a1740"),h.fillStyle=m,h.fillRect(0,0,1024,700),h.strokeStyle="#7a5cff",h.lineWidth=8,h.setLineDash([26,16]),h.strokeRect(40,40,944,620),h.setLineDash([]),h.fillStyle="#9aa0c8",h.textAlign="center",h.textBaseline="middle",h.font="bold 74px Arial",h.fillText("GAME RUG",512,300),h.font="38px Arial",h.fillText('placeholder – window.setRugTexture("moje.jpg")',512,380);let g=new zi(u);g.colorSpace=Ft,g.anisotropy=8,Wh=new yt({map:g,roughness:1});let x=new ae(new ei(3.8,2.6),Wh);x.rotation.set(-Math.PI/2,0,Math.PI),x.position.set(0,0.014,1.75),x.receiveShadow=!0,e.add(x);let d=new ae(new ei(3.86,2.66),Z(921362,1));d.rotation.x=-Math.PI/2,d.position.set(0,0.011,1.75),e.add(d)}SS();window.setRugTexture=(e)=>new js().load(e,(t)=>{t.colorSpace=Ft,t.anisotropy=8,Wh.map=t,Wh.needsUpdate=!0});(function(){let t=new Ze;t.position.set(0.2,0,-9.2),Yt.add(t),V(t,2.5,1.45,0.05,Z(328966,0.3,0.5),0,1.65,0);let i=bi(640,360),n=i.getContext("2d"),r=n.createLinearGradient(0,0,640,360);r.addColorStop(0,"#0b2a4a"),r.addColorStop(0.5,"#4a1f8f"),r.addColorStop(1,"#e8602e"),n.fillStyle=r,n.fillRect(0,0,640,360),n.fillStyle="rgba(255,255,255,.9)",n.font="bold 54px Arial",n.textAlign="center",n.fillText("MAN CAVE",320,190);let s=new zi(i);s.colorSpace=Ft;let o=new ae(new ei(2.42,1.36),new _t({map:s,toneMapped:!1}));o.position.set(0,1.65,0.03),t.add(o),V(t,2.8,0.5,0.42,Z(1381914,0.55),0,0.3,0.17),V(t,2.8,0.03,0.44,Z(4862754,0.45),0,0.565,0.17),V(t,1.2,0.07,0.1,Z(723725,0.4,0.5),0,0.62,0.17);for(let a of[-1.75,1.75])V(t,0.3,1.5,0.22,Z(1052948,0.5),a,0.78,0.12),V(t,0.22,0.22,0.02,Z(657932,0.3,0.6),a,1.2,0.24),gt(t,0.09,0.09,0.02,Z(1908258,0.5),a,0.6,0.235,24).rotation.x=Math.PI/2;V(t,2.6,0.03,0.03,mi(16734920,3),0,0.9,0.01).visible=!1,V(t,2.6,0.02,0.02,mi(6966527,3.5),0,0.88,-0),V(t,2.7,0.012,0.01,mi(16734920,3),0,0.5,0.39),qn(t,"MAN CAVE",1.9,0.34,"#ff4fa6",0,2.75,0.03,0,"bold 130px Arial Black",void 0,!1)})();function ES(){let e=fo,t=Qh(790562,{r:0.4,m:0.4});for(let l of[-1,1]){let c=l*1.775;sl(1.65,0.05,0.85,t,c,0.75,0,e),sl(0.05,0.75,0.05,t,l*2.575,0.375,-0.38,e),sl(0.05,0.75,0.05,t,l*2.575,0.375,0.38,e),sl(1.65,0.015,0.02,U1(3824895,1.4),c,0.72,0.43,e)}let i=new ae(new ei(5.3,0.9),new _t({color:2768127,transparent:!0,opacity:0.16,toneMapped:!1}));i.rotation.x=-Math.PI/2,i.position.set(0,0.012,0.05),e.add(i);let n=(l,c)=>{gt(e,0.012,0.012,0.22,Z(855570,0.4,0.8),l,0.86,-0.28,12),V(e,0.2,0.01,0.16,Z(855570,0.4,0.8),l,0.78,-0.2)},r=(l,c,f)=>{let u=bi(1024,Math.round(1024*f/c));l(u.getContext("2d"),u.width,u.height);let h=new zi(u);return h.colorSpace=Ft,h.anisotropy=8,h},s=r((l,c,f)=>{let u=l.createLinearGradient(0,0,c,0);u.addColorStop(0,"#05103a"),u.addColorStop(0.5,"#4a1f8f"),u.addColorStop(1,"#ff4f6a"),l.fillStyle=u,l.fillRect(0,0,c,f),l.fillStyle="rgba(255,255,255,.12)";for(let h=0;h<40;h++)l.fillRect(ct()*c,ct()*f*0.7,40+ct()*120,3);l.fillStyle="#fff",l.font="bold 70px Arial",l.fillText('ULTRAWIDE 49"',60,f-70),l.strokeStyle="#38e8ff",l.lineWidth=4,l.beginPath(),l.arc(c/2,f/2,40,0,7),l.stroke()},1.2,0.34),o=r((l,c,f)=>{l.fillStyle="#0b0d1c",l.fillRect(0,0,c,f),l.fillStyle="#38e8ff";for(let u=0;u<14;u++)l.fillRect(40,60+u*110,200+ct()*600,18);l.fillStyle="#ff4f8a",l.font="bold 56px Arial",l.fillText("STATS",40,46)},0.34,0.6);{let u=new Pt(1.1,1.1,0.34,48,1,!0,Math.PI-0.5454545454545454,1.0909090909090908),h=new ae(u,new _t({map:s,toneMapped:!1,side:Mi}));h.scale.x=-1,h.position.set(-1.78,1.12,0.8500000000000001),e.add(h);let m=new ae(new Pt(1.12,1.12,0.37,48,1,!0,Math.PI-0.5454545454545454,1.0909090909090908),Z(526605,0.4,0.5));m.material.side=Kt,m.scale.x=-1,m.position.copy(h.position),e.add(m),n(-1.78,0),V(e,1.24,0.012,0.03,mi(6966527,3),-1.78,0.94,-0.3)}for(let[l,c]of[[1.45,0.35],[2.1,0.7]]){let f=new Ze;f.position.set(l,0.775,-0.18),f.rotation.y=c,e.add(f),vi(f,0.36,0.62,0.025,Z(460811,0.4,0.5),0,0.5,0,0.006);let u=new ae(new ei(0.34,0.6),new _t({map:o,toneMapped:!1}));u.position.set(0,0.5,0.0135),f.add(u),gt(f,0.012,0.012,0.25,Z(855570,0.4,0.8),0,0.1,-0.03,12),V(f,0.18,0.01,0.14,Z(855570,0.4,0.8),0,0.004,-0.02),V(f,0.36,0.012,0.02,mi(16732042,3),0,0.19,-0.02)}let a=(l,c)=>{let f=new ae(new ei(0.9,1.6),new _t({color:new Se(c).multiplyScalar(0.5),transparent:!0,opacity:0.9,toneMapped:!1}));f.position.set(8.665,1.9,l),f.rotation.y=-Math.PI/2,Yt.add(f)};[[-2.1,6966527],[-1.05,3717375],[0,16732070],[1.05,3717375],[2.1,6966527]].forEach(([l,c])=>a(l,c)),V(Yt,0.03,0.03,5.4,mi(6966527,3.5),8.66,1.2,0),V(Yt,0.03,0.03,5.4,mi(16732070,3.5),8.66,2.7,0),qn(Yt,"FONGER",2.4,0.5,"#ff4fa6",8.64,2.95,0,-Math.PI/2,"bold 150px Arial Black",void 0,!1)}ES();var Ud=[];function TS(e){if(!Ud[e]){let i=[],n=(f,u,h,m,g,x=1,d=1,p=1,y=0,M=0)=>{f.scale(x,d,p),f.rotateX(y),f.rotateZ(M),f.translate(h,m,g);let b=f.attributes.position.count,T=new Float32Array(b*3),S=new Se(u);for(let _=0;_<b;_++)T[_*3]=S.r,T[_*3+1]=S.g,T[_*3+2]=S.b;f.setAttribute("color",new pi(T,3)),i.push(f)},r=15780000,s=(f,u,h)=>new bt(f,u,h),o=(f)=>new yn(f,12,10),a=(f,u)=>new Bo(f,u,8),l=(f,u)=>new Pt(f,f,u,12);if(n(l(0.05,0.012),1381658,0,0.006,0),e===0){n(s(0.024,0.07,0.03),1849994,-0.016,0.047,0),n(s(0.024,0.07,0.03),1849994,0.016,0.047,0),n(s(0.07,0.075,0.04),15763996,0,0.12,0),n(s(0.02,0.07,0.02),15763996,-0.045,0.12,0),n(s(0.02,0.07,0.02),15763996,0.045,0.12,0),n(o(0.036),15780000,0,0.19,0),n(s(0.07,0.014,0.04),2767466,0,0.2,0.005);for(let f=0;f<7;f++){let u=f/7*Math.PI*2;n(a(0.014,0.05),16765498,Math.sin(u)*0.026,0.225,Math.cos(u)*0.022,1,1,1,Math.cos(u)*0.5,-Math.sin(u)*0.5)}}else if(e===1)n(s(0.07,0.08,0.04),2772688,0,0.1,0),n(s(0.024,0.06,0.03),1382778,-0.016,0.04,0),n(s(0.024,0.06,0.03),1382778,0.016,0.04,0),n(s(0.09,0.12,0.008),13638698,0,0.1,-0.026,1,1,1,0.1),n(o(0.034),15780000,0,0.17,0),n(o(0.036),1315866,0,0.18,-0.006,1,0.8,1),n(s(0.03,0.03,0.01),16765498,0,0.11,0.022);else if(e===2)n(a(0.05,0.14),6959024,0,0.08,0),n(o(0.032),15780000,0,0.17,0),n(a(0.044,0.1),2757744,0,0.245,0,1,1,1,-0.15),n(l(0.056,0.008),2757744,0,0.2,0),n(l(0.004,0.24),5913120,0.06,0.12,0.02),n(o(0.014),3729663,0.06,0.25,0.02);else if(e===3)n(s(0.07,0.08,0.05),12106952,0,0.1,0),n(s(0.03,0.06,0.035),5922412,-0.02,0.04,0),n(s(0.03,0.06,0.035),5922412,0.02,0.04,0),n(s(0.05,0.045,0.045),15132910,0,0.17,0),n(s(0.036,0.01,0.01),3729663,0,0.175,0.024),n(s(0.025,0.07,0.025),13638698,-0.05,0.11,0),n(s(0.025,0.07,0.025),13638698,0.05,0.11,0),n(a(0.008,0.04),16765498,0,0.215,0);else if(e===4){n(s(0.07,0.085,0.04),1381916,0,0.1,0),n(s(0.024,0.06,0.03),735778,-0.016,0.04,0),n(s(0.024,0.06,0.03),735778,0.016,0.04,0),n(o(0.034),15780000,0,0.17,0);for(let f=0;f<6;f++){let u=f/6*Math.PI*2;n(a(0.012,0.04),3072096,Math.sin(u)*0.022,0.2,Math.cos(u)*0.02,1,1,1,Math.cos(u)*0.6,-Math.sin(u)*0.6)}n(s(0.008,0.2,0.012),14673648,0.06,0.13,0.02,1,1,1,0,-0.25)}else if(e===5)n(s(0.04,0.05,0.03),15755944,0,0.04,0),n(o(0.055),15780000,0,0.12,0),n(o(0.058),15755944,0,0.135,-0.008,1,0.85,1),n(o(0.01),1118481,-0.02,0.12,0.05),n(o(0.01),1118481,0.02,0.12,0.05);else n(s(0.09,0.12,0.06),1908520,0,0.07,0),n(s(0.07,0.07,0.005),16765498,0,0.08,0.031),n(o(0.025),13638698,0,0.08,0.034,1,1,0.3),n(s(0.09,0.015,0.062),3729663,0,0.14,0);let c=Y_(i,!1);i.forEach((f)=>f.dispose()),Ud[e]=new ae(c,new yt({vertexColors:!0,roughness:0.5,metalness:0.05}))}let t=Ud[e].clone();return t.castShadow=!0,t}function O1(e,t){let i=new Ze;i.position.set(e,0,t),i.rotation.y=-Math.PI/2,Yt.add(i);let n=3,r=6,s=0.36,o=0.028,a=0.39,l=n*s+o,c=r*s+o,f=Z(2367260,0.55,0.05),u=Z(1052173,0.8);for(let h=0;h<=n;h++)V(i,o,c,a,f,-l/2+o/2+h*s,c/2,0);for(let h=0;h<=r;h++)V(i,l,o,a,f,0,o/2+h*s,0);V(i,l,c,0.01,u,0,c/2,-a/2+0.01);for(let h=1;h<=r;h++)V(i,l-2*o,0.006,0.014,mi(16767400,2.2),0,h*s-0.004,a/2-0.05);for(let h=0;h<r;h++)for(let m=0;m<n;m++){let g=-l/2+o/2+(m+0.5)*s,x=o+h*s+(h===0?0:0),d=ct()<0.55?2:1;for(let p=0;p<d;p++){let y=TS(Math.floor(ct()*7));y.position.set(g+(d===2?p?0.08:-0.08:0),x,0.03+(ct()-0.5)*0.06),y.rotation.y=(ct()-0.5)*0.8,y.scale.setScalar(0.95+ct()*0.25),i.add(y)}if(ct()<0.25)V(i,0.1,0.02,0.07,Z([2838527,16726843,2007130][Math.floor(ct()*3)],0.6),g,x+0.2+0,-0.12).visible=!1}}O1(8.475,3.17);O1(8.475,-3.17);function wS(){let t=0.092*Math.sqrt(3)/2;for(let i of[-6.95,-5.75]){let n=new Ze;n.position.set(i,0,0),n.rotation.y=Math.PI/2,Yt.add(n),n.add(MS());for(let r of[-1,1]){let s=r<0?14692399:3107801;for(let o=0;o<4;o++){let a=4-o;for(let l=0;l<a;l++)vS(n,r*(1.08-o*t),0.702,(l-(a-1)/2)*0.092,s)}}for(let r of[-0.3,0.3])gt(n,0.017,0.017,0.002,Z(16777215,0.3),0,0.703,r,12).visible=!1}Sn(Yt,-6.35,2.6,0,16773336,4,5),V(Yt,2.2,0.012,0.012,mi(16763210,2.5),-6.35,Dn-0.35,0).visible=!0}wS();(function(){let e=new Ze;e.position.set(-6.4,0,3.725),e.rotation.y=Math.PI,Yt.add(e),V(e,3.3,2.5,0.06,Z(1381143,0.8),0,1.5,0.03);for(let t=0;t<12;t++)V(e,0.02,2.4,0.03,Z(2761760,0.5),-1.6+t*0.29,1.5,0.075);for(let t=0;t<3;t++)for(let i=0;i<8;i++){let n=-1.4+i*0.4,r=2.2-t*0.38,s=[13936170,12633288,11692597][(i+t)%3];V(e,0.05,0.22,0.01,Z([2838527,16726843,2007130][(i*2+t)%3],0.6),n,r+0.15,0.09),gt(e,0.07,0.07,0.015,new yt({color:s,roughness:0.22,metalness:1}),n,r,0.1).rotation.x=Math.PI/2}V(e,3.2,0.03,0.18,Z(3812642,0.4),0,1.05,0.14);for(let t=0;t<6;t++)Yd(e,-1.3+t*0.5,1.065,0.14,0.38+t%2*0.08,[13936170,12633288,11692597][t%3]);qn(e,"HALL OF FAME",2.6,0.38,"#ffc94a",0,2.78,0.08,0,"bold 125px Arial Black",void 0,!1);for(let t of[-8.35,-4.45]){let i=new Ze;i.position.set(t,0,3.35),Yt.add(i),V(i,0.5,1,0.5,Z(1052690,0.4),0,0.5,0),V(i,0.5,0.01,0.5,mi(11462399,3),0,1,0),Yd(i,0,1.01,0,1),V(i,0.5,0.7,0.5,new yt({color:12577023,transparent:!0,opacity:0.13,roughness:0.02,metalness:0}),0,1.36,0)}for(let[t,i,n]of[[-7.7,-3.55,0],[-6.15,-3.55,0],[-3.59,-6.6,Math.PI/2],[4,-6.6,-Math.PI/2]]){let r=new Ze;r.position.set(t,0,i),r.rotation.y=n,Yt.add(r),bS(r,1.3,2.1)}})();function AS(){let e=new Ze;e.position.set(2.9,0,3.725),e.rotation.y=Math.PI,Yt.add(e);let t=Z(1447707,0.85,0.1),i=ls("slats",1,0.6,0,3.6,1,{color:11569754}),n=ls("slats",1,0.35,0,4.2,0.9,{color:5978660}),r=Z(13225170,0.22,1);vi(e,3.4,1,0.6,t,-0.3,0.5,1.65,0.02);let s=new ae(new bt(3.3,0.9,0.04),i);s.position.set(-0.3,0.5,1.97),e.add(s),vi(e,3.8,0.06,0.95,n,-0.3,1.06,1.83,0.02),V(e,3.3,0.014,0.014,mi(16732120,4),-0.3,1.02,2.28),V(e,3.3,0.02,0.02,mi(3725567,4),-0.3,0.06,2),V(e,3.4,0.08,0.03,Z(723725,0.5),-0.3,0.04,1.96);let o=gt(e,0.022,0.022,3.2,r,-0.3,0.22,2.3,12);o.rotation.z=Math.PI/2;for(let w of[-1.7,1.1])gt(e,0.018,0.018,0.2,r,w,0.12,2.3,10);vi(e,3.6,0.9,0.5,t,0,0.45,0.27,0.02);let a=new ae(new bt(3.5,0.8,0.03),i);a.position.set(0,0.45,0.535),e.add(a),V(e,3.7,0.05,0.56,n,0,0.925,0.28),V(e,3.5,0.012,0.012,mi(6966527,4),0,0.03,0.55);let l=(()=>{let w=bi(512,256),I=w.getContext("2d"),P=I.createLinearGradient(0,0,512,0);P.addColorStop(0,"#ff3ea0"),P.addColorStop(0.5,"#7a4cff"),P.addColorStop(1,"#2ab8ff"),I.fillStyle=P,I.fillRect(0,0,512,256);let O=new zi(w);return O.colorSpace=Ft,O})();V(e,3.6,1.7,0.05,Z(723725,0.6),0,1.85,0.03);let c=new ae(new ei(3.4,1.55),new _t({map:l,toneMapped:!1,color:13421772}));c.position.set(0,1.85,0.06),e.add(c);for(let w of[-1,1])V(e,0.04,1.7,0.34,Z(723725,0.5),w*1.8,1.85,0.2);V(e,3.64,0.04,0.34,Z(723725,0.5),0,2.72,0.2);let f=new Pt(0.036,0.036,0.2,10),u=new Pt(0.012,0.02,0.1,10),h=new Pt(0.036,0.026,0.1,12,1,!0),m=48,g=new lr(f,new yt({roughness:0.15,metalness:0.1,transparent:!0,opacity:0.88}),m),x=new lr(u,g.material,m),d=new lr(h,new yt({color:14674687,roughness:0.05,transparent:!0,opacity:0.45,side:Kt}),20),p=new $e,y=[2787898,8010258,13213738,3824335,12066847,1710618,14673642,9054858],M=0,b=0;for(let w=0;w<3;w++){let I=1.4+w*0.5;V(e,3.4,0.025,0.3,Z(855312,0.3,0.3),0,I,0.2),V(e,3.4,0.008,0.01,mi(16777215,4),0,I-0.02,0.34);for(let P=0;P<16&&M<m;P++){let O=-1.55+P*0.206;if(w===0&&P>9){p.makeTranslation(O,I+0.05,0.2),d.setMatrixAt(b++,p);continue}p.makeTranslation(O,I+0.113,0.2),g.setMatrixAt(M,p),g.setColorAt(M,new Se(y[(P+w*3)%y.length])),p.makeTranslation(O,I+0.263,0.2),x.setMatrixAt(M,p),x.setColorAt(M,new Se(y[(P+w*3)%y.length])),M++}}g.count=M,x.count=M,d.count=b,e.add(g,x,d);let T=new Ze;T.position.set(1.2,0.95,0.3),e.add(T),gt(T,0.05,0.05,0.3,r,0,0.15,0,20);let S=gt(T,0.014,0.014,0.16,r,0,0.3,0.07,10);S.rotation.x=Math.PI/2;for(let[w,I]of[[-0.025,16763210],[0.025,16726843]])gt(T,0.007,0.007,0.1,Z(I,0.4,0.4),w,0.38,0,8),gt(T,0.01,0.01,0.025,r,w,0.26,0.14,8);V(T,0.3,0.02,0.2,r,0,0,0.18),V(T,0.26,0.004,0.16,Z(1381914,0.4),0,0.012,0.18),qn(e,"BAR",0.9,0.3,"#38d8ff",-0.3,2.95,0.05,0,"bold 170px Arial Black",void 0,!1);let _=Z(1908001,0.55,0.1),v=Z(13619928,0.2,1);for(let w of[-1.6,-0.75,0.1,0.95]){let I=new Ze;I.position.set(w,0,2.85),I.rotation.y=Math.PI+(ct()-0.5)*0.3,e.add(I),gt(I,0.22,0.2,0.08,_,0,0.74,0,28),gt(I,0.21,0.21,0.025,Z(723725,0.5),0,0.69,0,24),gt(I,0.025,0.025,0.66,v,0,0.35,0,10),gt(I,0.2,0.22,0.03,v,0,0.015,0,24);let P=new ae(new An(0.17,0.012,8,24),v);P.rotation.x=Math.PI/2,P.position.set(0,0.3,0),I.add(P),vi(I,0.34,0.22,0.06,_,0,1,-0.2,0.03,-0.12);for(let O of[-1,1]){gt(I,0.01,0.01,0.26,v,O*0.16,0.86,-0.18,8);let Q=vi(I,0.04,0.03,0.26,_,O*0.18,0.99,-0.06,0.012)}}}AS();var pt={cx:-10.8,cz:-11.5,R:7,H:6},In=new Ze;ti.add(In);var as=[...Array(6)].map((e,t)=>{let i=t*Math.PI/3;return[pt.cx+pt.R*Math.cos(i),pt.cz+pt.R*Math.sin(i)]}),bn=(e,t,i)=>new R(e,t,i),H1=(e=16777215)=>{let t=jh(Ui.plywood,1,1);return new yt({map:t,bumpMap:t,bumpScale:0.6,roughness:0.72,metalness:0,side:Kt,color:e})},Xh=H1(15917768),w1=H1(14731684);function Vh(e,t,i){let n=[],r=[];for(let a of e){let[l,c,f,u]=a.p,h=l.distanceTo(c)/1.22,m=l.distanceTo(f)/2.44,g=f.distanceTo(u)/1.22,x=a.ou||0,d=a.ov||0,p=Math.max(h,g);n.push(l.x,l.y,l.z,c.x,c.y,c.z,u.x,u.y,u.z,l.x,l.y,l.z,u.x,u.y,u.z,f.x,f.y,f.z),r.push(x,d,x+h,d,x+g,d+m,x,d,x+g,d+m,x,d+m)}let s=new et;s.setAttribute("position",new Be(n,3)),s.setAttribute("uv",new Be(r,2)),s.computeVertexNormals();let o=new ae(s,t);return o.receiveShadow=!0,i.add(o),o}var Is=Math.tan(Math.PI/6);function Oh(e,t,i){let n=as[e],r=as[(e+1)%6],s=Math.hypot(r[0]-n[0],r[1]-n[1]),o={x:(r[0]-n[0])/s,z:(r[1]-n[1])/s},a={x:-o.z,z:o.x},l=(n[0]+r[0])/2,c=(n[1]+r[1])/2;if(a.x*(pt.cx-l)+a.z*(pt.cz-c)<0)a={x:-a.x,z:-a.z};let[f,u]=i||[0,s],h=(d,p,y)=>bn(n[0]+o.x*p+a.x*d,y,n[1]+o.z*p+a.z*d),m=[],g=[],x=[];for(let d=0;d<t.length-1;d++){let[p,y]=t[d],[M,b]=t[d+1],T={p:[h(p,f+p*Is,y),h(p,u-p*Is,y),h(M,f+M*Is,b),h(M,u-M*Is,b)],ou:(f+p*Is)/1.22,ov:t.slice(0,d).reduce((S,_,v)=>S+Math.hypot(t[v+1][0]-_[0],t[v+1][1]-_[1]),0)/2.44};if(m.push(T),!i)g.push({p:[bn(n[0],y,n[1]),h(p,p*Is,y),bn(n[0],b,n[1]),h(M,M*Is,b)]}),x.push({p:[bn(r[0],y,r[1]),h(p,s-p*Is,y),bn(r[0],b,r[1]),h(M,s-M*Is,b)]})}return{quads:m,caps:[...g,...x],P:h,L:s,n:a,t:o,A:n,prof:t}}var RS=[[[1,0],[0,3.6],[0,6]],null,[[0,0],[0,1.2],[1.6,3.4],[1.6,4.6],[0.9,6]],[[0,0],[0,1],[0.9,2.4],[0.9,3.4],[2,5],[0.4,6]],[[0,0],[0,0.8],[2,3.6],[2,6]],[[0,0],[0,3],[0.8,4.2],[0.8,6]]],Hh=[15213098,2845695,16765482,2273370,16742940,10632432,16736176,15921906,1381658,2806996],z1=[[],[],[],[],[],[],[]],nl=new vt;function sf(e,t,i){let[n,r,s,o]=e.p,a=n.clone().lerp(r,t),l=s.clone().lerp(o,t);return a.lerp(l,i)}function of(e,t){let[i,n,r]=e.p,s=n.clone().sub(i).cross(r.clone().sub(i)).normalize();if(s.dot(t)<0)s.negate();return s}function Yh(e,t,i,n,r){nl.position.copy(t).addScaledVector(i,0.004),nl.lookAt(t.clone().add(i)),nl.rotateZ(r),nl.scale.setScalar(1),nl.updateMatrix(),z1[e].push({m:nl.matrix.clone(),c:new Se(n)})}function qd(e,t,i,n,r=0.55){let s=e.p[0].distanceTo(e.p[2]);if(s<0.5)return;let o=Math.max(2,Math.round(s/r)),a=of(e,n);for(let l=0;l<t;l++)for(let c=0;c<o;c++){let f=Math.sin((c+l*1.7)*1.1)*0.5/t,u=(l+0.5)/t+f*0.55,h=(c+0.45)/o,m=sf(e,u,h),g=(c*3+l*5)%7,x=c<1?5:g===6?4:g===5?5:g%5;if(Yh(x===5&&c>0?1:x,m,a,Hh[(i+l)%Hh.length],(ct()-0.5)*1.6),(c+l)%3===0){let d=sf(e,Math.min(0.97,Math.max(0.03,u+0.07)),Math.min(0.98,h+0.5/o));Yh(5,d,a,Hh[(i+l)%Hh.length],ct()*3)}}}function CS(){let e=[()=>{let i=new yn(0.07,12,9);return i.scale(1,0.8,0.65),i.translate(0,0,0.035),i},()=>{let i=new Rn(0.11,0.03,0.05,2,0.012);return i.translate(0,0,0.025),i},()=>{let i=new yn(0.1,14,10);return i.scale(1,1,0.38),i},()=>{let i=new wc(0.028,0.09,4,8);return i.rotateZ(Math.PI/2),i.translate(0,0,0.04),i},()=>{let i=new An(0.05,0.022,8,14);return i.translate(0,0,0.02),i},()=>{let i=new Bo(0.032,0.04,6);return i.rotateX(Math.PI/2),i.translate(0,0,0.02),i},()=>{let i=new fh(0.2);return i.scale(1,1,0.5),i}],t=new yt({color:16777215,roughness:0.5,metalness:0});e.forEach((i,n)=>{let r=z1[n];if(!r.length)return;let s=new lr(i(),t,r.length);r.forEach((o,a)=>{s.setMatrixAt(a,o.m),s.setColorAt(a,o.c)}),s.castShadow=!0,In.add(s)})}(function(){let t=(i,n)=>bn(pt.cx-n.p[0].x,0,pt.cz-n.p[0].z);for(let i=0;i<6;i++){if(i===1){let r=Oh(1,[[0,0],[0,6]],[0,2.5]),s=Oh(1,[[0,0],[0,6]],[4.1,7]),o=Oh(1,[[0,2.3],[0,6]],[2.5,4.1]);for(let f of[r,s,o])Vh(f.quads,Xh,In),f.quads.forEach((u)=>qd(u,f===o?2:2,0,t(f,u),0.6));let a=as[1],l=-1,c=(f)=>a[0]+l*f;for(let f of[2.5,4.1])V(In,0.1,2.3,0.3,Z(1381914,0.5),c(f),1.15,a[1]+0.02);V(In,1.7,0.1,0.3,Z(1381914,0.5),c(3.3),2.3,a[1]+0.02);continue}let n=Oh(i,RS[i]);Vh(n.quads,i%2?w1:Xh,In),Vh(n.caps,w1,In),n.quads.forEach((r)=>qd(r,4,i*2,of(r,bn(pt.cx-r.p[0].x,0,pt.cz-r.p[0].z)).add(bn(0,0,0)),0.55))}for(let i=0;i<6;i++){let n=as[i],r=as[(i+1)%6],s=Math.hypot(r[0]-n[0],r[1]-n[1]),o=new ae(new bt(s+0.3,pt.H,0.2),Z(1513500,0.9)),a=(n[0]+r[0])/2,l=(n[1]+r[1])/2,c=bn(a-pt.cx,0,l-pt.cz).normalize();if(o.position.set(a+c.x*0.12,pt.H/2,l+c.z*0.12),o.rotation.y=-Math.atan2(r[1]-n[1],r[0]-n[0]),i!==1)In.add(o)}})();(function(){let i=[{y:0,r:1.75},{y:2.1,r:2.45},{y:4.7,r:1.45}],n=[];i.forEach((f,u)=>{let h=[];for(let m=0;m<7;m++){let g=m/7*Math.PI*2+u*0.12,x=0.9+(m*37+u*11)%10/50;h.push(bn(pt.cx+Math.sin(g)*f.r*x,f.y,pt.cz+Math.cos(g)*f.r*x))}n.push(h)});let r=[];for(let f=0;f<2;f++)for(let u=0;u<7;u++){let h=(u+1)%7;r.push({p:[n[f][u],n[f][h],n[f+1][u],n[f+1][h]],ou:u*0.37,ov:f*0.9})}let s=Vh(r,new yt({map:Xh.map,bumpMap:Xh.map,bumpScale:0.6,roughness:0.72,side:Kt,color:15652528,flatShading:!0}),In);s.castShadow=!0;let o=n[2].map((f)=>new ne(f.x,-f.z)),a=new Vo(new fn(o));a.rotateX(-Math.PI/2);let l=new ae(a,Z(13216376,0.8));l.position.y=4.7,In.add(l),r.forEach((f,u)=>{let h=sf(f,0.5,0.5),m=bn(h.x-pt.cx,0,h.z-pt.cz).normalize(),g=of(f,m);qd(f,u<7?2:2,3+u,g,0.55)});let c=r[0];{let f=sf(c,0.5,0.22),u=of(c,bn(f.x-pt.cx,0,f.z-pt.cz));Yh(6,f,u,2845695,0);let h=sf(r[3],0.5,0.3);Yh(6,h,of(r[3],bn(h.x-pt.cx,0,h.z-pt.cz)),15213098,1)}})();CS();(function(){let i=[...Array(6)].map((f,u)=>{let h=u*Math.PI/3;return[pt.cx+6.99*Math.cos(h),pt.cz+6.99*Math.sin(h)]}),n=i[1][1]+0.1,r=[i[0],i[1],[-9.7,n],[-9.7,n-0.95],[-11.5,n-0.95],[-11.5,n],i[2],i[3],i[4],i[5]],s=new fn(r.map((f)=>new ne(f[0],-f[1]))),o=new $r(s,{depth:0.26,bevelEnabled:!0,bevelThickness:0.04,bevelSize:0.04,bevelSegments:3});o.rotateX(-Math.PI/2);let a=jh(Ui.matBlue,1,0.5),l=new ae(o,new yt({map:a,bumpMap:a,bumpScale:1.2,roughness:0.85}));l.position.y=0,l.receiveShadow=!0,In.add(l),ff(In,[...Array(6)].map((f,u)=>as[u]),$h("concrete",1.5,0.9));for(let f=0;f<6;f++){if(f===1)continue;let u=as[f],h=as[(f+1)%6],m=Math.hypot(h[0]-u[0],h[1]-u[1]),g=new ae(new bt(m-0.3,0.03,0.05),Z(16765482,0.5)),x=(u[0]+h[0])/2,d=(u[1]+h[1])/2,p=bn(pt.cx-x,0,pt.cz-d).normalize();g.position.set(x+p.x*0.07,0.32,d+p.z*0.07),g.rotation.y=-Math.atan2(h[1]-u[1],h[0]-u[0]),In.add(g)}let c=new ae(new Pt(3.3,3.4,0.14,7),new yt({map:a,color:6988543,roughness:0.9}));c.position.set(pt.cx,0.33,pt.cz),In.add(c)})();(function(){hl(as,pt.H,Z(1776673,0.9));for(let t=0;t<3;t++){let i=t*Math.PI/3,n=new ae(new bt(pt.R*2-0.3,0.36,0.28),Z(5067356,0.45,0.8));n.position.set(pt.cx,pt.H-0.2,pt.cz),n.rotation.y=-i,Ln.add(n);let r=new ae(new bt(pt.R*2-1.2,0.03,0.06),mi(16773594,7));r.position.set(pt.cx,pt.H-0.4,pt.cz),r.rotation.y=-i,Ln.add(r)}for(let t=0;t<6;t++){let i=t*Math.PI/3+Math.PI/6,n=pt.cx+Math.cos(i)*4.6,r=pt.cz+Math.sin(i)*4.6;gt(Ln,0.12,0.12,0.14,Z(855312,0.4,0.5),n,pt.H-0.1,r,14),gt(Ln,0.1,0.1,0.01,mi(16774888,9),n,pt.H-0.18,r,14)}for(let t=0;t<3;t++){let i=t*Math.PI*2/3+0.5;Sn(In,pt.cx+Math.cos(i)*4.2,pt.H-0.6,pt.cz+Math.sin(i)*4.2,16774372,22,14)}Sn(In,pt.cx,pt.H-0.8,pt.cz,16777215,18,12),qn(In,"BOULDER",2.6,0.5,"#ffb42a",-10.6,4.4,as[1][1]-0.12,Math.PI,"bold 170px Arial Black",void 0,!1),V(Ln,14,0.02,0.02,mi(16757802,2.5),pt.cx,pt.H-0.02,pt.cz+5).visible=!1})();var _e=new Ze;ti.add(_e);var er=3,G1=(e,t)=>ls("tile",0.6,0.35,0,e,t),eu=(e,t)=>ls("plaster",1.2,0.9,0,e,t);ff(_e,[[-12.4,-5.45],[-8.8,-5.45],[-8.8,3.85],[-3.6,3.85],[-3.6,7.7],[-12.4,7.7]],$h("tile",0.6,0.35));ff(_e,[[-3.6,3.85],[0.4,3.85],[0.4,7.7],[-3.6,7.7]],$h("graphite",1,0.6));hl([[-12.4,-5.45],[-8.8,-5.45],[-8.8,3.85],[-12.4,3.85]],er,Z(15000802,0.9));hl([[-12.4,3.85],[-3.6,3.85],[-3.6,7.7],[-12.4,7.7]],er,Z(15000802,0.9));hl([[-3.6,3.85],[0.4,3.85],[0.4,7.7],[-3.6,7.7]],er,Z(2434604,0.9));Lr(_e,-12.4,-5.37,-12.4,7.7,er,eu);Lr(_e,-8.8,-5.37,-8.8,-3.85,er,eu);Lr(_e,-3.6,3.85,-3.6,7.7,er,G1);Lr(_e,0.4,3.85,0.4,7.7,er,ta);for(let[e,t,i,n]of[[-10.6,-1,3.4,0.08],[-10.6,2.6,3.4,0.08],[-8.2,5.8,0.08,3.4],[-6.2,5.8,3.4,0.08]])V(Ln,i,0.03,n,mi(16054527,6),e,er-0.02,t);var ui=Z(14212064,0.14,1),$c=Z(16053489,0.12,0.02),Bd=Z(11449275,0.3,0.9),YY=Z(1447707,0.8),A1=(e,t)=>{let i=parseInt(e.slice(1),16),n=Math.min(255,(i>>16&255)*t)|0,r=Math.min(255,(i>>8&255)*t)|0,s=Math.min(255,(i&255)*t)|0;return`rgb(${n},${r},${s})`},oi=(e,t,i,n,r,s,o=0,a=0,l=0)=>{let c=new ae(t,i);return c.position.set(n,r,s),c.rotation.set(o,a,l),c.castShadow=c.receiveShadow=!0,e.add(c),c},Ni=(e,t,i,n=20)=>new Pt(e,t,i,n);(function(){let s=(x,d,p)=>fl(160,480,(y,M,b)=>{let T=y.createLinearGradient(0,0,M,0);T.addColorStop(0,A1(d,1.18)),T.addColorStop(0.5,d),T.addColorStop(1,A1(d,0.82)),y.fillStyle=T,y.fillRect(0,0,M,b),y.strokeStyle="rgba(0,0,0,.5)",y.lineWidth=5,y.strokeRect(3,3,M-6,b-6),y.strokeStyle="rgba(255,255,255,.07)",y.lineWidth=2,y.strokeRect(9,9,M-18,b-18),y.fillStyle="rgba(0,0,0,.7)";for(let S=0;S<8;S++)y.fillRect(24,30+S*13,M-48,5);for(let S=0;S<6;S++)y.fillRect(24,b-118+S*13,M-48,5);y.fillStyle="#dfe2e7",y.fillRect(M/2-27,156,54,28),y.fillStyle="#12151c",y.font="bold 22px Arial",y.textAlign="center",y.fillText(String(x),M/2,178),y.fillStyle="#c9ccd2",y.fillRect(M-40,222,11,96),y.fillStyle="#7d818a",y.fillRect(M-41,222,2,96),y.fillStyle="#b9bdc5",y.beginPath(),y.arc(M-34,344,9,0,7),y.fill(),y.fillStyle="#1a1a1a",y.fillRect(M-35,338,2.5,12),y.fillStyle="rgba(255,255,255,.05)",y.fillRect(0,0,14,b)}),o=fl(160,480,(x,d,p)=>{let y=x.createLinearGradient(0,0,0,p);y.addColorStop(0,"#2a2f3b"),y.addColorStop(1,"#0f1116"),x.fillStyle=y,x.fillRect(0,0,d,p),x.fillStyle="#4b5160",x.fillRect(8,90,d-16,6),x.fillStyle="#9aa0ab",x.fillRect(8,60,d-16,4),x.fillStyle="#c2c6cf",x.fillRect(d/2-3,60,6,3),x.fillStyle="#c0392b",x.beginPath(),x.moveTo(d/2-40,66),x.lineTo(d/2+40,66),x.lineTo(d/2+50,300),x.lineTo(d/2-50,300),x.closePath(),x.fill(),x.fillStyle="rgba(0,0,0,.25)",x.fillRect(d/2-4,90,8,210),x.fillStyle="#2a2d35",x.fillRect(14,p-90,d-28,50)}),a=Z(1449002,0.45,0.4),l=Z(2765124,0.4,0.5),c=Z(790036,0.6),f=0.46,u=-12.045;for(let x=0;x<14;x++){let d=-4.7+x*0.5,p=x===3||x===9;V(_e,0.46,1.9,0.488,a,-12.045,1.05,d);let y=s(x+1,x%2?"#1f3052":"#27406e",p),M=new yt({map:y,roughness:0.4,metalness:0.35,side:Kt});if(!p)oi(_e,new ei(0.472,1.88),M,-11.794,1.05,d,0,Math.PI/2,0);else{oi(_e,new ei(0.46,1.86),new yt({map:o,roughness:0.7}),-11.796000000000001,1.05,d,0,Math.PI/2,0);let b=new Ze;if(b.position.set(-11.790000000000001,1.05,d-0.236),b.rotation.y=x===3?1.15:1.5,_e.add(b),oi(b,new ei(0.472,1.88),M,0,0,0.236,0,Math.PI/2,0),V(b,0.012,1.88,0.012,ui,0,0,0),x===9)V(_e,0.2,0.32,0.26,Z(2059076,0.8),-11.985,0.34,d+0.02),V(_e,0.2,0.04,0.2,Z(1448482,0.6),-11.985,0.52,d+0.02)}V(_e,0.012,1.9,0.012,ui,-11.797,1.05,d-0.25)}let h=-1.4500000000000002,m=7;V(_e,0.5,0.05,m+0.04,l,-12.03,2.03,h),V(_e,0.48000000000000004,0.1,m,c,-12.035,0.05,h),V(_e,0.46,1.9,0.02,a,-12.045,1.05,-4.955),V(_e,0.46,1.9,0.02,a,-12.045,1.05,2.0549999999999997),V(_e,0.5,0.88,m+0.04,Z(2304829,0.6),-12.03,2.51,h).visible=!1;let g=Z(10121026,0.5);for(let x of[-2.6,1.9]){for(let d=0;d<4;d++)V(_e,0.1,0.035,2.6,g,-11.05+d*0.105,0.46,x);for(let d of[-1.2,0,1.2]){V(_e,0.42,0.035,0.05,Bd,-10.9,0.43,x+d);for(let p of[-0.19,0.19])V(_e,0.04,0.43,0.04,Bd,-10.9+p,0.215,x+d)}V(_e,0.34,0.02,2.4,Z(5724511,0.5,0.5),-10.9,0.16,x);for(let d=0;d<4;d++){let p=-10.9+(d%2?0.05:-0.05),y=x-0.9+d*0.55,M=[15263976,14239787,2846681,3092275][d];vi(_e,0.11,0.07,0.29,Z(M,0.6),p,0.205,y,0.025),vi(_e,0.09,0.03,0.14,Z(14342874,0.7),p,0.245,y-0.07,0.01)}}vi(_e,0.3,0.28,0.5,Z(2106413,0.7),-10.88,0.62,-2,0.07),V(_e,0.02,0.03,0.46,Z(14239787,0.5),-10.74,0.7,-2),gt(_e,0.035,0.035,0.19,new yt({color:6735615,transparent:!0,opacity:0.6,roughness:0.1}),-10.9,0.58,-3.25,14),gt(_e,0.036,0.036,0.04,Z(15263976,0.4),-10.9,0.69,-3.25,14),V(_e,0.34,0.05,0.46,Z(15921906,0.95),-10.9,0.5,1.3),V(_e,0.34,0.16,0.05,Z(15921906,0.95),-10.9,0.43,1.52),V(_e,0.04,0.05,1.5,Bd,-8.92,1.78,-4.65),[[-5.25,12597547],[-4.95,2842536],[-4.3,3092275],[-4.05,15263976]].forEach(([x,d])=>{gt(_e,0.012,0.012,0.06,ui,-8.88,1.74,x,8).rotation.z=Math.PI/2,vi(_e,0.1,0.62,0.34,Z(d,0.9),-8.84,1.4,x,0.04)}),V(_e,0.03,1.4,1.2,new yt({color:13625855,roughness:0.04,metalness:0.85}),-8.93,1.4,-2.55),V(_e,0.036,1.48,0.05,Z(1119000,0.5),-8.925,1.4,-1.97),V(_e,0.036,1.48,0.05,Z(1119000,0.5),-8.925,1.4,-3.13),V(_e,0.036,0.05,1.24,Z(1119000,0.5),-8.925,2.12,-2.55),V(_e,0.036,0.05,1.24,Z(1119000,0.5),-8.925,0.68,-2.55),qn(_e,"ŠATNA",1.5,0.4,"#7fd0ff",-8.93,2.6,0.1,-Math.PI/2,"bold 170px Arial Black",void 0,!1),Sn(_e,-10.6,2.6,-2,16054527,7,8),Sn(_e,-10.6,2.6,2.4,16054527,6,8)})();(function(){let e=new yt({color:14939135,transparent:!0,opacity:0.34,roughness:0.12,side:Kt,depthWrite:!1}),t=(l)=>new yt({color:l,roughness:0.35}),i=Z(13620185,0.35),n=Z(3159098,0.5,0.8);V(_e,5.2,0.14,0.012,Z(2781048,0.35),-6.2,1.08,3.99);for(let l=0;l<4;l++){let c=-8+l*1.1,f=l===1||l===3;V(_e,1.04,0.04,1.02,i,c,0.02,4.5),gt(_e,0.07,0.07,0.012,n,c,0.046,4.5,18);for(let h=0;h<3;h++)V(_e,0.1,0.004,0.012,Z(10133672,0.4,1),c,0.053,4.47+h*0.03);V(_e,1.04,0.012,0.03,Z(16762926,0.6),c,0.046,5),gt(_e,0.012,0.012,0.36,ui,c,2.12,4.17,12).rotation.x=Math.PI/2,oi(_e,Ni(0.115,0.115,0.018,28),ui,c,2.1,4.38),oi(_e,Ni(0.096,0.096,0.004,28),Z(2106410,0.5,0.6),c,2.09,4.38);for(let h=0;h<8;h++){let m=h*Math.PI/4;oi(_e,Ni(0.007,0.007,0.006,6),Z(9146521,0.3,1),c+Math.cos(m)*0.06,2.088,4.38+Math.sin(m)*0.06)}V(_e,0.2,0.13,0.025,ui,c,1.15,4.012),oi(_e,Ni(0.03,0.03,0.03,16),ui,c-0.05,1.15,4.04,Math.PI/2),oi(_e,Ni(0.022,0.022,0.03,16),ui,c+0.055,1.15,4.04,Math.PI/2),V(_e,0.012,0.05,0.012,Z(14036269,0.4),c+0.055,1.18,4.06),V(_e,0.012,0.05,0.012,Z(3107801,0.4),c-0.05,1.18,4.06),V(_e,0.04,0.4,0.04,ui,c+0.28,1.5,4.03),oi(_e,Ni(0.014,0.014,0.16,8),ui,c+0.28,1.65,4.12,Math.PI/2-0.5),oi(_e,Ni(0.03,0.022,0.2,10),Z(1776930,0.5),c+0.28,1.42,4.12,Math.PI/2-0.5),oi(_e,Ni(0.025,0.025,0.14,10),t([14239787,3107801,4042346,15263976][l]),c-0.36,1.37,4.07),oi(_e,Ni(0.028,0.028,0.18,10),t(15921906),c-0.3,1.39,4.07),V(_e,0.3,0.012,0.1,Z(13625855,0.1,0.3),c-0.33,1.27,4.05),V(_e,0.26,0.012,0.14,Z(2781048,0.5),c+0.27,0.75,4.065).visible=!1,V(_e,0.026,1.9,0.96,e,c+0.55,1.07,4.5),V(_e,0.03,0.03,0.98,ui,c+0.55,2.04,4.5),V(_e,0.03,1.95,0.03,ui,c+0.55,1.05,4.99),V(_e,0.03,0.03,0.04,ui,c+0.55,2,4);let u=new Ze;u.position.set(c-0.5,1.05,5),u.rotation.y=f?l===1?-1.2:-0.7:0,_e.add(u),V(u,0.98,1.9,0.022,e,0.5,0,0),V(u,0.98,0.03,0.03,ui,0.5,0.94,0),V(u,0.03,0.1,0.1,ui,0.88,0,0.03).visible=!0;for(let h of[-0.7,0.7])V(u,0.04,0.08,0.04,ui,0,h,0)}V(_e,0.026,1.9,0.96,e,-8.55,1.07,4.5),V(_e,0.03,0.03,0.98,ui,-8.55,2.04,4.5);let r=Z(8826550,0.5),s=Z(4943992,0.5);[4.15,5.15,6.15,7.15].forEach((l)=>{V(_e,1.5,1.75,0.04,r,-11.53,1.03,l),V(_e,1.52,0.03,0.05,ui,-11.53,1.92,l),gt(_e,0.014,0.014,0.16,ui,-10.85,0.08,l,8)});let a=(l)=>{V(_e,0.22,0.42,0.4,$c,-12.16,0.64,l),V(_e,0.24,0.035,0.42,$c,-12.16,0.86,l),oi(_e,Ni(0.028,0.028,0.014,14),ui,-12.16,0.885,l);let c=[[0,0],[0.08,0],[0.1,0.12],[0.17,0.28],[0.2,0.4],[0.19,0.43],[0.165,0.43],[0.15,0.36],[0,0.3]].map((g)=>new ne(g[0],g[1]));oi(_e,new Uc(c,28),new yt({color:16053489,roughness:0.12,side:Kt}),-11.86,0,l).scale.set(1.45,1,1),oi(_e,new An(0.155,0.022,10,28),Z(1711395,0.35),-11.86,0.452,l,Math.PI/2).scale.set(1.45,1,1);let h=new Ze;h.position.set(-12.01,0.46,l),h.rotation.z=1.38,_e.add(h),oi(h,Ni(0.17,0.17,0.02,24),Z(1711395,0.35),0.27,0,0).scale.set(1.5,1,1),V(_e,0.1,0.12,0.12,ui,-11.56,0.7,l+0.46),gt(_e,0.045,0.045,0.1,Z(16777215,0.9),-11.56,0.7,l+0.46,14).rotation.x=Math.PI/2};[4.65,5.65,6.65].forEach((l,c)=>{a(l);let f=new Ze;f.position.set(-10.83,1,l-0.45),f.rotation.y=[1.15,0,0.8][c],_e.add(f),V(f,0.03,1.72,0.9,s,0,0,0.45),V(f,0.032,0.05,0.1,ui,0.002,0,0.78),V(f,0.034,0.03,0.06,Z(c===1?14036269:4042346,0.4),-0.002,0.07,0.78),V(f,0.032,0.03,0.9,ui,0,0.86,0.45);for(let u of[-0.6,0.6])V(f,0.04,0.07,0.03,ui,0,u,0.01);gt(_e,0.04,0.04,0.02,Z(15263976,0.5),-12.25,1.6,l,14).rotation.z=Math.PI/2}),V(_e,0.2,0.34,0.2,Z(7041144,0.5,0.6),-11,0.17,6.95),[-10.2,-9.6,-9].forEach((l)=>{oi(_e,new wc(0.12,0.24,6,14),$c,l,1,7.46).scale.set(1,1,0.55),V(_e,0.2,0.34,0.06,$c,l,0.78,7.52),oi(_e,Ni(0.012,0.012,0.5,8),ui,l,1.45,7.55),V(_e,0.1,0.07,0.03,ui,l,1.3,7.55),oi(_e,Ni(0.012,0.012,0.06,8),Z(3159098,0.6),l,0.7,7.425),gt(_e,0.06,0.06,0.012,Z(3159098,0.5,0.7),l,0.007,7.3,14)}),[-10.5,-9.9,-9.3,-8.7].forEach((l)=>V(_e,0.03,0.78,0.34,r,l,1.05,7.38)),[-6,-5.1,-4.2].forEach((l)=>{V(_e,0.52,0.1,0.42,$c,l,0.86,7.36),V(_e,0.4,0.02,0.3,Z(13620442,0.2),l,0.915,7.37),gt(_e,0.025,0.025,0.004,Z(3159098,0.5,0.8),l,0.926,7.4,12),oi(_e,Ni(0.014,0.014,0.14,10),ui,l,0.99,7.52),oi(_e,Ni(0.012,0.012,0.12,10),ui,l,1.05,7.46,Math.PI/2),V(_e,0.03,0.03,0.03,ui,l+0.07,0.95,7.52),V(_e,0.7,0.9,0.02,new yt({color:14676479,roughness:0.03,metalness:0.9}),l,1.62,7.56),V(_e,0.74,0.94,0.012,Z(1382172,0.5),l,1.62,7.572),V(_e,0.66,0.012,0.012,mi(15398143,3),l,2.12,7.55)}),[-5.55,-4.65].forEach((l)=>{V(_e,0.07,0.17,0.07,Z(16250871,0.3),l,1.14,7.53),oi(_e,Ni(0.012,0.012,0.05,8),ui,l,1.25,7.5,Math.PI/2)}),vi(_e,0.14,0.36,0.26,Z(12106948,0.25,0.9),-3.82,1.42,6.75,0.03),V(_e,0.016,0.02,0.18,Z(1382172,0.4),-3.74,1.28,6.75),vi(_e,0.16,0.28,0.24,Z(15264236,0.3,0.5),-3.82,1.35,5.95,0.05),oi(_e,Ni(0.035,0.03,0.08,14),Z(2106410,0.4),-3.82,1.2,5.95),gt(_e,0.15,0.13,0.55,Z(7041144,0.35,0.85),-3.95,0.28,7.2,18),gt(_e,0.155,0.155,0.03,Z(3159098,0.5),-3.95,0.57,7.2,18);for(let[l,c]of[[-7.3,6.2],[-5,5.8]]){gt(_e,0.1,0.1,0.008,Z(6975351,0.4,0.8),l,0.006,c,18);for(let f=0;f<3;f++)V(_e,0.14,0.004,0.012,Z(3159098,0.5),l,0.011,c-0.04+f*0.04)}qn(_e,"SPRCHY · WC",2.4,0.4,"#7fd0ff",-6.2,2.6,4,0,"bold 140px Arial Black",void 0,!1),Sn(_e,-6.2,2.6,5.7,15398143,7,8)})();(function(){V(_e,0.45,0.42,2,Z(2763827,0.6),0.15,0.21,6),V(_e,0.5,0.06,2,Z(8018488,0.45),0.15,0.45,6),qn(_e,"BADMINTON  ›",2.2,0.36,"#6fd0ff",-1.9,2.6,7.45,Math.PI,"bold 140px Arial Black",void 0,!1);for(let e of[-3.3,0.1]){gt(_e,0.2,0.15,0.4,Z(2369067,0.6),e,0.2,4.2,16),gt(_e,0.03,0.03,0.6,Z(2780986,0.8),e,0.7,4.2,6);let t=new ae(new yn(0.28,12,9),Z(2058804,0.8));t.scale.y=1.2,t.position.set(e,1.15,4.2),_e.add(t)}Sn(_e,-1.6,2.6,5.8,16771276,6,7)})();V(_e,5.2,er,0.03,G1(5.2,er),-6.2,er/2,3.99);V(_e,0.03,2.85,2.85,eu(2.85,2.85),-8.94,1.425,-2.425);V(_e,0.03,er,2.65,eu(2.65,er),-8.94,er/2,2.525);V(_e,0.03,0.15,2.2,Z(1381914,0.6),-8.94,0.075,0.1).visible=!1;(function(){let e=new Ze;e.position.set(-0.6,0,0.4),e.rotation.y=Math.PI/2,Yt.add(e);let t=1.2,i=0.68,n=0.93,r=fl(1200,680,(d,p,y)=>{for(let M=0;M<12;M++)d.fillStyle=M%2?"#2d8a40":"#34964a",d.fillRect(M*p/12,0,p/12+1,y);rn(d,p,y,10),d.strokeStyle="rgba(255,255,255,.92)",d.lineWidth=6,d.strokeRect(12,12,p-24,y-24),d.beginPath(),d.moveTo(p/2,12),d.lineTo(p/2,y-12),d.stroke(),d.beginPath(),d.arc(p/2,y/2,82,0,7),d.stroke(),d.fillStyle="#fff",d.beginPath(),d.arc(p/2,y/2,9,0,7),d.fill();for(let M of[0,1]){let b=M?p-12:12,T=M?-1:1;d.strokeRect(M?p-12-150:12,y/2-170,150,340),d.strokeRect(M?p-12-62:12,y/2-92,62,184),d.beginPath(),d.arc(b+T*150,y/2,72,-Math.PI/2,Math.PI/2,M===1),d.stroke(),d.fillStyle="#fff",d.beginPath(),d.arc(b+T*105,y/2,7,0,7),d.fill()}}),s=Z(1381914,0.42,0.1),o=Z(1974310,0.55),a=14036269,l=3106518;V(e,1.36,0.14,0.72,s,0,n-0.1,0);let c=new ae(new ei(t,i),new yt({map:r,roughness:0.55}));c.rotation.x=-Math.PI/2,c.position.y=n,e.add(c);for(let d of[-1,1])vi(e,1.44,0.14,0.07,s,0,n+0.035,d*0.375,0.02),V(e,1.46,0.012,0.075,Z(14212064,0.2,1),0,n+0.108,d*0.375);for(let d of[-1,1]){for(let y of[-1,1])vi(e,0.07,0.14,0.27,s,d*0.665,n+0.035,y*0.2+y*0.02,0.02);V(e,0.07,0.05,0.22,o,d*0.665,n+0.075,0),V(e,0.2,0.012,0.19,Z(460810,0.8),d*0.74,n-0.032,0);let p=V(e,0.16,0.02,0.2,Z(2763827,0.5),d*0.8,n-0.07,0);p.rotation.z=-d*0.22,V(e,0.012,0.045,0.2,Z(2763827,0.5),d*0.875,n-0.04,0),V(e,0.14,0.045,0.012,Z(2763827,0.5),d*0.8,n-0.045,0.098),V(e,0.14,0.045,0.012,Z(2763827,0.5),d*0.8,n-0.045,-0.098);for(let y of[-1,1]){let M=V(e,0.12,0.05,0.12,o,d*0.6,n+0.025,y*0.3);M.rotation.y=Math.PI/4}V(e,0.016,0.02,0.6,mi(d>0?14036269:3106518,1.6),d*0.69,n-0.17,0)}V(e,1.3,0.01,0.01,mi(3725567,2.2),0,n-0.175,0.365),V(e,1.3,0.01,0.01,mi(3725567,2.2),0,n-0.175,-0.365);for(let[d,p]of[[-0.6,-0.31],[0.6,-0.31],[-0.6,0.31],[0.6,0.31]])gt(e,0.036,0.026,0.82,s,d,0.41,p,14),gt(e,0.02,0.026,0.03,Z(13159378,0.2,1),d,0.014,p,12),V(e,0.07,0.04,0.07,Z(2763827,0.5),d,0.84,p);V(e,1.2,0.035,0.03,s,0,0.3,0.31),V(e,1.2,0.035,0.03,s,0,0.3,-0.31),V(e,0.03,0.035,0.62,s,-0.6,0.3,0),V(e,0.03,0.035,0.62,s,0.6,0.3,0);let f=[["A",1],["A",2],["B",3],["A",5],["B",5],["A",3],["B",2],["B",1]],u={1:0,2:0.24,3:0.2,5:0.115},h=n+0.075,m=Z(14212064,0.15,1),g=Z(789776,0.6);f.forEach(([d,p],y)=>{let M=-0.518+y*0.148,b=d==="A"?a:l,T=d==="A"?1:-1,S=new Ze;S.position.set(M,h,(y*37%7-3)*0.012),e.add(S);let _=0.7,v=0.5,w=d==="A"?1:-1;oi(S,Ni(0.0075,0.0075,_+v,10),m,0,0,w*(_-v)/2,Math.PI/2),oi(S,Ni(0.0205,0.0205,0.16,14),g,0,0,w*(_-0.05),Math.PI/2),oi(S,Ni(0.022,0.022,0.012,14),Z(15263976,0.4),0,0,w*(_-0.135),Math.PI/2),oi(S,Ni(0.0215,0.0215,0.012,14),m,0,0,w*_,Math.PI/2),oi(S,Ni(0.014,0.014,0.02,12),g,0,0,-w*0.4,Math.PI/2);let I=(y%3-1)*0.35;for(let P=0;P<p;P++){let O=p===1?0:(P-(p-1)/2)*u[p],Q=new Ze;Q.position.set(0,0,O),Q.rotation.z=I*T*0.5,S.add(Q),V(Q,0.03,0.058,0.04,Z(b,0.55),0,-0.02,0),V(Q,0.026,0.034,0.03,Z(x(b),0.6),0,-0.067,0),V(Q,0.04,0.012,0.05,g,T*0.008,-0.088,0),oi(Q,new yn(0.014,10,8),Z(15782832,0.6),0,0.02,0)}});function x(d){return(d>>16&255)*0.55<<16|(d>>8&255)*0.55<<8|(d&255)*0.55}oi(e,new yn(0.019,14,10),Z(16250871,0.35),0.08,n+0.02,0.06);for(let[d,p,y]of[[0.44,a,3],[-0.44,l,5]]){oi(e,Ni(0.005,0.005,0.6,8),m,0,n+0.19,d,0,0,Math.PI/2);for(let M of[-1,1])V(e,0.014,0.19,0.014,m,M*0.3,n+0.095,d);for(let M=0;M<10;M++){let b=M<y;oi(e,Ni(0.013,0.013,0.025,12),Z(b?p:15263976,0.4),(b?-0.27:0.27)+(b?M:M-10)*0.028+(b?0:0),n+0.19,d,0,0,Math.PI/2)}}for(let[d,p]of[[-0.74,0.34],[0.74,-0.34]])gt(e,0.04,0.032,0.09,Z(13620186,0.25,0.9),d,n-0.015,p,14),gt(e,0.034,0.034,0.004,Z(1381914,0.5),d,n+0.031,p,14)})();var ol=new Ze;ti.add(ol);var nn=new Ze;ti.add(nn);var al=new Ze;Ln.add(al);var af=[],Kd=[],nt=-3.4,Ri=7.7,mr=29.7,Ut=Ri+11,qi=12.05,Ns=2.6,PS=10.5,k1=PS-Ns,ll={x0:nt-qi,x1:nt+qi,z0:Ri,z1:mr,cx:nt,Hs:Ns};ol.position.set(nt,0,Ut);ol.rotation.y=Math.PI;var Qn=[nt+6.6,nt-1.4],zh=Ut,V1=[[ll.x0-1,nt-12+5,12.5,24.9]],cl=(e,t=0)=>{let i=qi-t,n=(e-nt)/i;return Ns+(k1-t)*Math.sqrt(Math.max(0,1-n*n))};Ui.hallwood=(()=>{let e=bi(512,512),t=e.getContext("2d");for(let r=0;r<24;r++){t.fillStyle=`hsl(${32+ct()*6},${52+ct()*10}%,${46+ct()*12}%)`,t.fillRect(0,r*21.333333333333332,512,21.333333333333332);for(let o=0;o<7;o++){t.strokeStyle=`rgba(60,28,8,${0.05+ct()*0.1})`,t.lineWidth=1;let a=r*21.333333333333332+2+ct()*17.333333333333332;t.beginPath(),t.moveTo(0,a);for(let l=0;l<=512;l+=64)t.lineTo(l,a+(ct()-0.5)*3);t.stroke()}t.fillStyle="rgba(30,14,4,.55)",t.fillRect(0,r*21.333333333333332,512,1.5);let s=ct()*512;t.fillRect(s,r*21.333333333333332,1.5,21.333333333333332)}return rn(t,512,512,12),e})();var lo=new zi(Ui.hallwood);lo.colorSpace=Ft;lo.wrapS=lo.wrapT=Nn;lo.repeat.set(0.25,0.25);lo.anisotropy=8;var Od=new yt({map:lo,roughness:0.62,metalness:0,side:Kt});function Hd(e,t,i,n,r=0){let s=[],o=[],a=[],l=r;e.forEach((f,u)=>{if(u)l+=Math.hypot(f[0]-e[u-1][0],f[1]-e[u-1][1]);if(s.push(f[0],f[1],t,f[0],f[1],i),o.push(l,t,l,i),u){let h=(u-1)*2;a.push(h,h+1,h+2,h+1,h+3,h+2)}});let c=new et;return c.setAttribute("position",new Be(s,3)),c.setAttribute("uv",new Be(o,2)),c.setIndex(a),c.computeVertexNormals(),new ae(c,n)}(function(){let i=[];for(let p=0;p<=72;p++){let y=Math.PI-Math.PI*p/72;i.push([nt+qi*Math.cos(y),Ns+k1*Math.sin(y)])}let n=Ns;nn.add(Hd([[nt-qi,0],[nt-qi,Ns]],Ri,mr,Od,0)),nn.add(Hd([[nt+qi,Ns],[nt+qi,0]],Ri,mr,Od,n+40)),al.add(Hd(i,Ri,mr,Od,n));let r=72,s=(p,y)=>{let M=[];for(let b=r;b>=0;b--){let T=p+(y-p)*b/r;M.push([T,cl(T)])}return M},o=[[-8.2,-6.8],[-2.8,-1]],a=[[nt-qi,0]];for(let[p,y]of o)a.push([p,0],[p,2.2],[y,2.2],[y,0]);a.push([nt+qi,0]),a.push(...s(nt-qi,nt+qi));let l=new yt({map:lo,roughness:0.65}),c=new ae(new $r(new fn(a.map((p)=>new ne(p[0],p[1]))),{depth:0.22,bevelEnabled:!1}),l);c.position.z=Ri-0.11,nn.add(c),cf.push(c),Kd.push(c);let f=[[nt-qi,0],[nt+qi,0],...s(nt-qi,nt+qi)],u=new ae(new $r(new fn(f.map((p)=>new ne(p[0],p[1]))),{depth:0.22,bevelEnabled:!1}),l);u.position.z=mr,nn.add(u),cf.push(u),Kd.push(u);let h=Z(1381914,0.5);for(let[p,y]of o)V(nn,0.1,2.2,0.3,h,p,1.1,Ri),V(nn,0.1,2.2,0.3,h,y,1.1,Ri),V(nn,y-p,0.1,0.3,h,(p+y)/2,2.2,Ri);let m=bi(2048,512),g=m.getContext("2d");g.fillStyle="#ee7d1c",g.fillRect(0,0,2048,512);for(let p=0;p<40;p++)g.fillStyle=`rgba(${p%2?"255,255,255":"120,50,0"},.035)`,g.fillRect(p*52,0,26,512);g.fillStyle="#fff",g.font="bold 250px Arial Black, Arial",g.textAlign="center",g.textBaseline="middle",g.fillText("VAŠE LIGA",1024,270);let x=new zi(m);x.colorSpace=Ft,x.anisotropy=8;let d=new ae(new ei(18,4.5),new yt({map:x,roughness:0.9,emissiveMap:x,emissive:16777215,emissiveIntensity:0.45}));d.position.set(nt,2.35,mr-0.02),d.rotation.y=Math.PI,nn.add(d)})();(function(){let n=new yt({map:jh(Ui.steel,2,2),color:11844292,roughness:0.55,metalness:0.15}),r=[],s=[];for(let x=0;x<=40;x++){let d=nt-qi+0.15+(2*qi-0.3)*x/40;r.push([d,cl(d,0.18)-0.05]),s.push([d,cl(d,0.18)-0.75+Math.abs(x-20)/20*0.25])}let o=[],a=bn(0,1,0),l=new $e,c=new Ei,f=new R,u=new R,h=(x,d,p)=>{let y=bn(x[0],x[1],p),M=bn(d[0],d[1],p),b=M.clone().sub(y),T=b.length();c.setFromUnitVectors(a,b.normalize()),f.copy(y).add(M).multiplyScalar(0.5),u.set(1,T,1),l.compose(f,c,u),o.push(l.clone())};af.length=0;for(let x=0;x<9;x++){let d=Ri+1+x*(mr-Ri-2)/8;af.push(d);for(let p of[r,s]){let y=new wr(p.map((M)=>bn(M[0],M[1],d)));al.add(new ae(new Vr(y,80,0.07,8,!1),n))}for(let p=0;p<40;p++)h(r[p],s[p],d),h(s[p],r[p+1],d);h(r[40],s[40],d);for(let p of[nt-qi+0.14,nt+qi-0.14])V(nn,0.28,Ns+0.1,0.28,n,p,(Ns+0.1)/2,d),V(nn,0.4,0.04,0.4,Z(3158842,0.5,0.6),p,0.02,d)}let m=new Pt(0.026,0.026,1,6),g=new lr(m,n,o.length);o.forEach((x,d)=>g.setMatrixAt(d,x)),al.add(g);for(let x=0;x<=12;x++){let d=nt-qi+0.2+(2*qi-0.4)*x/12,p=cl(d,0.18)-0.05,y=gt(al,0.045,0.045,mr-Ri-1.4,n,d,p,(Ri+mr)/2,8);y.rotation.x=Math.PI/2}})();var IS=[nt+11,nt+2.6,nt-6,nt-9.8];for(let e of IS)for(let t=0;t<af.length-1;t++){let i=(af[t]+af[t+1])/2,n=cl(e,0.18)-0.05,r=n-1.05;V(nn,0.2,0.07,2.2,Z(13225170,0.35,0.6),e,r,i),V(nn,0.15,0.015,2.1,mi(16774886,2.6),e,r-0.045,i);for(let s of[-0.9,0.9])V(nn,0.012,n-r-0.04,0.012,Z(2237480,0.5,0.6),e,(n+r)/2,i+s)}for(let e of[nt+11,nt+2.6,nt-6])for(let t of[Ri+3,Ut,mr-3])Sn(ti,e,7.6,t,16774114,9,30);Sn(ti,nt-9.8,6.2,Ut,16774114,4,18);function zd(e,t,{blot:i=0.1,bs:n=0.5,grain:r=0.05,gs:s=90,sheen:o=0}={}){e.customProgramCacheKey=()=>"sd"+t,e.onBeforeCompile=(a)=>{a.vertexShader=a.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vWP;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vWP=(modelMatrix*vec4(transformed,1.0)).xyz;`),a.fragmentShader=a.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vWP;
float h3(vec3 p){p=fract(p*0.3183099+.1);p*=17.0;return fract(p.x*p.y*p.z*(p.x+p.y+p.z));}
float vn(vec3 x){vec3 i=floor(x),f=fract(x);f=f*f*(3.0-2.0*f);return mix(mix(mix(h3(i),h3(i+vec3(1,0,0)),f.x),mix(h3(i+vec3(0,1,0)),h3(i+vec3(1,1,0)),f.x),f.y),mix(mix(h3(i+vec3(0,0,1)),h3(i+vec3(1,0,1)),f.x),mix(h3(i+vec3(0,1,1)),h3(i+vec3(1,1,1)),f.x),f.y),f.z);}`).replace("#include <color_fragment>",`#include <color_fragment>
{ float b=vn(vWP/${n.toFixed(3)})*0.6+vn(vWP/${(n*0.35).toFixed(3)})*0.4; float g=vn(vWP*${s.toFixed(1)}); float gl=smoothstep(0.0,1.0,1.0-min(1.0,length(fwidth(vWP))*${s.toFixed(1)}*0.6));
  diffuseColor.rgb *= 1.0 + (b-0.5)*${(i*2).toFixed(3)} + (g-0.5)*${(r*2).toFixed(3)}*gl; }`)}}var qh=Z(13214826,0.6),Hn=Z(2763825,0.5,0.6),pr=Z(12106948,0.3,0.85);function LS(e,t){let i=new Ze;i.position.set(e,0,t),nn.add(i),gt(i,0.026,0.026,1.62,Hn,0,0.81,0,12),gt(i,0.26,0.28,0.045,Hn,0,0.022,0,28),gt(i,0.07,0.09,0.12,Hn,0,0.1,0,16),gt(i,0.03,0.03,0.22,pr,0.05,0.5,0,8).rotation.z=Math.PI/2}for(let e of Qn)for(let t of[-1,1])LS(e+t*3.09,Ut);function ep(e,t,i,n,r){let s=new Ze;s.position.set(e,0,t),s.rotation.y=i,nn.add(s);for(let o of[-1,0,1])V(s,n,0.035,0.115,qh,0,0.45,o*0.125);for(let o of[-1,1]){let a=o*(n/2-0.14);for(let l of[-1,1])V(s,0.045,0.45,0.045,Hn,a,0.225,l*0.19);V(s,0.04,0.04,0.42,Hn,a,0.2,0),V(s,0.04,0.04,0.42,Hn,a,0.425,0)}if(V(s,n-0.2,0.03,0.03,Hn,0,0.2,0),r){for(let o of[-1,1])V(s,0.045,0.5,0.045,Hn,o*(n/2-0.14),0.7,-0.19);for(let o of[0.68,0.84])V(s,n,0.12,0.03,qh,0,o,-0.215)}return s}for(let e of[-6,-2,2,6])ep(nt+11.3,Ut+e,-Math.PI/2,2,!0);ep(Qn[0],Ut-9.3,0,1.5,!0);for(let e of Qn)ep(e,Ut+9.3,Math.PI,1.5,!0);function W1(e,t,i){let n=new Ze;n.position.set(e,0,t),nn.add(n);let r=Z(2050728,0.45),s=1.5;for(let o of[-1,1])for(let a of[-1,1]){let l=gt(n,0.022,0.022,s,pr,o*0.3,s/2,a*0.27,10);l.rotation.z=-o*0.07,l.rotation.x=a*0.07}for(let o of[0.35,0.8,1.2])V(n,0.6,0.025,0.025,pr,0,o,0.27),V(n,0.6,0.025,0.025,pr,0,o,-0.27),V(n,0.025,0.025,0.54,pr,0.3,o,0),V(n,0.025,0.025,0.54,pr,-0.3,o,0);V(n,0.58,0.05,0.58,r,0,s+0.02,0),V(n,0.05,0.55,0.52,r,i*0.27,s+0.33,0).rotation.z=i*0.08;for(let o of[-1,1])V(n,0.45,0.04,0.05,pr,0,s+0.28,o*0.3),V(n,0.04,0.26,0.04,pr,-i*0.18,s+0.15,o*0.3);V(n,0.32,0.02,0.5,Z(15329770,0.6),-i*0.42,s+0.48,0);for(let o of[-1,1])V(n,0.03,0.5,0.03,pr,-i*0.4,s+0.24,o*0.24);for(let o of[0,1,2,3])V(n,0.05,0.03,0.5,pr,-i*(0.33+o*0.045),0.28+o*0.32,0);return V(n,0.03,s,0.03,pr,-i*0.44,s/2,-0.25).rotation.z=i*0.06,V(n,0.03,s,0.03,pr,-i*0.44,s/2,0.25).rotation.z=i*0.06,n}W1(nt+10.4,Ut,1);W1(nt-5.4,Ut,-1);var Ai=ll.x0+0.1;(function(){let t=[2864038,9395160,15228303,15764004],i=new Ze;nn.add(i);for(let c=0;c<3;c++){let f=Ai+0.04+c*0.95;for(let u of[0,0.88])V(i,0.05,2.5,0.05,qh,Ai,1.25,8.4+c*0.95+u);for(let u=0;u<15;u++){let h=gt(i,0.016,0.016,0.88,qh,Ai+0.02,0.2+u*0.155,8.84+c*0.95,8);h.rotation.x=Math.PI/2}}let n=bi(256,128),r=n.getContext("2d"),s=r.createLinearGradient(0,0,256,128);s.addColorStop(0,"#9db6c8"),s.addColorStop(0.5,"#cfe0ec"),s.addColorStop(1,"#8fa8bb"),r.fillStyle=s,r.fillRect(0,0,256,128),r.fillStyle="rgba(255,255,255,.28)",r.beginPath(),r.moveTo(40,0),r.lineTo(90,0),r.lineTo(40,128),r.lineTo(0,128),r.fill();let o=new zi(n);o.colorSpace=Ft;let a=new ae(new ei(3.6,1.7),new _t({map:o,toneMapped:!1,color:12303291}));a.position.set(nt-6.6,1.5,Ri+0.13),i.add(a),V(i,3.7,0.05,0.03,Hn,nt-6.6,2.37,Ri+0.13),V(i,3.7,0.05,0.03,Hn,nt-6.6,0.63,Ri+0.13),t.forEach((c,f)=>V(i,0.62,0.014,1.75,Z(c,0.85),nt-10.2+f*0.75,0.008,10,0));for(let c=0;c<3;c++){let f=gt(i,0.075,0.075,0.6,Z([2763310,2450411,14709803][c],0.8),-10.9+c*0.25,0.075,9.1+c%2*0.15,20);f.rotation.z=Math.PI/2}for(let[c,f,u]of[[-10.6,11.3,2920447],[-9.9,11,16747052],[-9.3,11.6,4247930]]){let h=new ae(new yn(0.32,20,16),Z(u,0.45));h.position.set(c,0.32,f),i.add(h)}qn(i,"WARM-UP · STRETCH",3.4,0.42,"#7be3ff",Ai+0.1,3.1,10.2,Math.PI/2,"bold 100px Arial Black, Arial",void 0,!1);let l=new Ze;nn.add(l),V(l,0.5,0.05,2.4,Hn,Ai+0.3,0.55,27.3),V(l,0.5,0.05,2.4,Hn,Ai+0.3,1,27.3);for(let c of[-1.15,1.15])V(l,0.5,1.05,0.05,Hn,Ai+0.3,0.52,27.3+c);for(let c=0;c<6;c++)for(let f of[0.6,1.05]){let u=26.4+c*0.36,h=gt(l,0.012,0.012,0.2,pr,Ai+0.3,f+0.04,u,8);h.rotation.x=Math.PI/2,h.rotation.z=Math.PI/2;for(let m of[-1,1])gt(l,0.055,0.055,0.05,Hn,Ai+0.3+m*0.11,f+0.04,u,14).rotation.z=Math.PI/2}for(let c=0;c<5;c++){let f=25.7+c*0.5,u=new ae(new yn(0.1,16,12),Z([1381914,1381914,12597547,1381914,1381914][c],0.5,0.4));u.position.set(Ai+1.55,0.1,f),l.add(u);let h=new ae(new An(0.06,0.012,8,14,Math.PI),Z(1381914,0.5,0.4));h.position.set(Ai+1.55,0.2,f),h.rotation.y=Math.PI/2,l.add(h)}[[0.5,0.45],[0.6,0.6],[0.75,0.75]].forEach(([c,f],u)=>V(l,f,c,f,Z(13935466,0.7),Ai+2.9+u*0.95,c/2,28.8));for(let c=0;c<9;c++)V(l,0.5,0.012,0.04,Z(16765498,0.6),Ai+2.4,0.007,25.6+c*0.4);for(let c of[-1,1])V(l,0.03,0.012,3.6,Z(16765498,0.6),Ai+2.4+c*0.25,0.007,27.4);for(let c=0;c<6;c++){let f=new ae(new Bo(0.09,0.2,14),Z(16742938,0.6));f.position.set(Ai+4.1,0.1,25.7+c*0.7),l.add(f)}for(let[c,f,u]of[[-14.5,29.1,2780986],[-14,29.2,9054762],[-13.5,29,2772874]]){let h=new ae(new yn(0.13,16,12),Z(u,0.6));h.position.set(c,0.13,f),l.add(h)}for(let c of[27,27.5])V(l,0.03,0.9,0.012,Z(16765498,0.7),Ai+0.05,1.8,c),V(l,0.05,0.12,0.05,Hn,Ai+0.05,1.3,c);V(l,0.05,0.06,0.6,Hn,Ai+0.05,2.3,27.25),qn(l,"CONDITIONING · FOOTWORK",3.8,0.42,"#ffb15a",Ai+0.1,3.1,27.2,Math.PI/2,"bold 90px Arial Black, Arial",void 0,!1)})();var ro={vl:nt+5.62,hl:nt+8.82},Kh=2.2,so=Ri+0.11,Cn=nt-1.4,Pn=Ri+0.11;function DS(e,t,i,n,r,s){let o=e.createLinearGradient(0,0,0,i);if(o.addColorStop(0,n.bg[0]),o.addColorStop(1,n.bg[1]),e.fillStyle=o,e.fillRect(0,0,t,i),e.fillStyle=n.acc,e.fillRect(0,0,t,10),e.textBaseline="middle",e.textAlign="left",e.font="bold 68px Arial Black, Arial",e.fillStyle=n.acc,e.fillText(n.name,40,66),e.font="600 28px Arial",e.fillStyle="#8a96c4",e.fillText(n.sub+" · 2026",42,120),e.fillStyle=s?"#ff3b4a":"#5b1b24",e.beginPath(),e.arc(t-175,64,13,0,7),e.fill(),e.textAlign="right",e.fillStyle="#fff",e.font="bold 34px Arial",e.fillText("LIVE",t-40,66),r===0)e.textAlign="left",e.fillStyle=n.acc,e.font="bold 210px Arial Black, Arial",e.fillText(n.big,36,290),e.fillStyle="#8a96c4",e.font="600 32px Arial",e.fillText(n.bigL,44,410),n.stats.forEach((a,l)=>{e.textAlign="left",e.fillStyle="#fff",e.font="bold 58px Arial",e.fillText(a[0],610,215+l*100),e.fillStyle="#8a96c4",e.font="600 24px Arial",e.fillText(a[1],612,252+l*100)}),n.form.forEach((a,l)=>{let c=70+l*70;e.fillStyle=a===1?"#45e08a":a===2?"#8a96c4":"#ff4d6d",e.beginPath(),e.arc(c,500,26,0,7),e.fill(),e.fillStyle="#05070f",e.textAlign="center",e.font="bold 28px Arial",e.fillText(a===1?"W":a===2?"D":"L",c,502)}),e.textAlign="left",e.fillStyle="#8a96c4",e.font="600 24px Arial",e.fillText("FORM · LAST 5",450,500);else e.textAlign="left",e.fillStyle="#8a96c4",e.font="600 28px Arial",e.fillText(n.head,42,178),n.rows.slice(0,5).forEach((a,l)=>{let c=245+l*62;e.fillStyle="rgba(255,255,255,.06)",e.fillRect(36,c-26,t-72,52),e.textAlign="left",e.fillStyle="#e8ecff",e.font="600 30px Arial",e.fillText(a[0],56,c);let f=a[2]==="w"?"#45e08a":a[2]==="l"?"#ff4d6d":a[2]==="d"?"#ffcf3a":"#8a96c4";e.fillStyle=f,e.textAlign="right",e.font="bold 36px Arial",e.fillText(a[1],t-60,c)});e.fillStyle="rgba(255,255,255,.12)",e.fillRect(0,i-62,t,2),e.textAlign="left",e.fillStyle="#9aa6a0",e.font="600 25px Arial",e.fillText("E  ·  OTEVŘÍT DETAIL",40,i-30),e.textAlign="right",e.fillText(n.foot,t-40,i-30),[0,1].forEach((a)=>{e.fillStyle=a===r?n.acc:"#2a3358",e.beginPath(),e.arc(t/2-12+a*24,i-30,6,0,7),e.fill()})}function NS(e){let t=!!e.getObjectByName("Vybaveni_Tabule_VasaLiga_Telo");[["vl",0],["hl",1]].forEach(([i,n])=>{let r=document.createElement("canvas");r.width=1024,r.height=648;let s=r.getContext("2d"),o=new zi(r);if(o.colorSpace=Ft,o.anisotropy=8,!t)V(ti,2.6,1.7,0.06,Z(657934,0.35),ro[i],Kh,so+0.03);let a=new ae(new ei(2.45,1.55),new _t({map:o,toneMapped:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}));a.position.set(ro[i],Kh,so+0.066),ti.add(a);let l="",c=()=>{if(!(window.FUNUI&&FUNUI.league))return;let f=Date.now(),u=Math.floor(f/5000+n)%2,h=Math.floor(f/600)%2,m=u+"|"+h;if(m===l)return;l=m,DS(s,r.width,r.height,FUNUI.league(i),u,h),o.needsUpdate=!0};c(),setInterval(c,250)})}var tp=!1,Ot={v:3,X0:7.6,D:0.88,H:0.32,N:5,T:0.02,HALF:5.2,AC:0.7,SEATS:7,PITCH:0.5,SOFF:0.62};function FS(e,t){if(!tp)return 0;let i=nt-e,n=t-Ut;if(Math.abs(n)>Ot.HALF||i<Ot.X0||i>Ot.X0+Ot.N*Ot.D)return 0;return Ot.H*Math.min(Ot.N,Math.ceil((i-Ot.X0)/Ot.D))+Ot.T}function X1(e){if(tp=!0,V1.length=0,!e)Ot={v:2,X0:7.6,D:1.1,H:0.4,N:4,T:0,HALF:5.4,AC:0,SEATS:15,PITCH:0.5,SOFF:0.5};if(e){let t=nt-Ot.X0,i=nt-(Ot.X0+Ot.N*Ot.D);for(let n of[-Ot.HALF+0.05,0,Ot.HALF-0.05])ni(t-0.05,Ut+n,i+0.1,Ut+n,0.03)}else for(let t=0;t<Ot.N;t++){let i=nt-(Ot.X0+t*Ot.D+0.5);ni(i,Ut-4.2+0.25,i,Ut+4.2-0.25,0.3)}}window.__tribTest=()=>X1(!0);var rl={x:nt-8.2,y:1.75,z:Ri+0.11+0.046},US=1.4,BS=2;function OS(e,t){let i=document.createElement("canvas");i.width=700,i.height=1000;let n=i.getContext("2d"),r=new zi(i);if(r.colorSpace=Ft,r.anisotropy=8,!t)V(ti,1.55,2.15,0.04,Z(1381914,0.4,0.3),rl.x,rl.y,rl.z-0.026);let s=new ae(new ei(US,BS),new _t({map:r,toneMapped:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}));s.position.set(rl.x,rl.y,rl.z),ti.add(s);let o={racket:null,shoes:null,state:"loading"},a={},l=(h,m,g,x)=>{n.font=g;let d=String(h||"").split(" "),p=[],y="";for(let M of d){let b=y?y+" "+M:M;if(n.measureText(b).width>m&&y)p.push(y),y=M;else y=b}if(y)p.push(y);return p.slice(0,x)},c=()=>{let h=n.createLinearGradient(0,0,0,1000);h.addColorStop(0,"#04170d"),h.addColorStop(1,"#020806"),n.fillStyle=h,n.fillRect(0,0,700,1000),n.fillStyle="#1fd05a",n.fillRect(0,0,700,14),n.fillRect(0,986,700,14),n.textBaseline="alphabetic",n.textAlign="left",n.fillStyle="#fff",n.font="italic 900 86px Arial Black, Arial",n.fillText("YONEX",40,120),n.fillStyle="#1fd05a",n.font="700 30px Arial",n.fillText("NEW ARRIVALS",44,168),[["racket","RACKET",200],["shoes","SHOES",595]].forEach(([m,g,x])=>{n.fillStyle="rgba(255,255,255,.07)",n.fillRect(30,x,640,365),n.fillStyle="#1fd05a",n.font="700 26px Arial",n.fillText(g,52,x+40);let d=o[m],p=a[m];if(p){let y=Math.min(270/p.width,300/p.height);n.drawImage(p,385+(265-p.width*y)/2,x+50+(300-p.height*y)/2,p.width*y,p.height*y)}if(d)n.fillStyle="#fff",l(d.name,p?320:580,"700 34px Arial",5).forEach((y,M)=>n.fillText(y,52,x+92+M*42)),n.fillStyle="#1fd05a",n.font="bold 46px Arial",n.fillText(d.price||"",52,x+310),n.fillStyle="#9fb3a8",n.font="600 24px Arial",n.fillText(d.date?"added "+d.date:"",52,x+350);else n.fillStyle="#7d8f86",n.font="600 30px Arial",n.fillText(o.state==="err"?"coming soon":"loading…",52,x+120)}),n.fillStyle="#7d8f86",n.font="600 22px Arial",n.fillText("LATEST FROM YONEX.CZ · LIVE",40,975),r.needsUpdate=!0};c();let f=window.YONEX_FEED&&YONEX_FEED.api||"",u=(h,m)=>{if(!m)return;if(o[h]=m,m.img){let g=new Image;g.onload=()=>{a[h]=g,c()},g.src=m.img}};if(!f){o.state="err",c();return}fetch(f).then((h)=>h.json()).then((h)=>{u("racket",h.racket),u("shoes",h.shoes),o.state=h.racket||h.shoes?"ok":"err",c()}).catch(()=>{o.state="err",c()})}function HS(e){let t=!!e.getObjectByName("Vybaveni_Pitko_Telo"),i=Z(13225686,0.34,0.65),n=Z(15133166,0.2,0.85),r=Z(723982,0.6,0.2),s=Z(10396843,0.28,0.85),o=(D,N,se,Y=1)=>{let W=[[-D,0],[D,0],[D,N]];for(let ee=1;ee<18;ee++){let de=Math.PI*ee/18;W.push([D*Math.cos(de),N+se*Math.sin(de)])}return W.push([-D,N]),W};if(!t){let D=(de,X)=>{let oe=new fn;return de.forEach(([ye,ve],ke)=>ke?oe.lineTo(ye*X,-ve*X):oe.moveTo(ye*X,-ve*X)),oe},N=(de,X,oe,ye,ve=1)=>{let ke=new ae(new $r(D(de,ve),{depth:X,bevelEnabled:!1,curveSegments:4}),oe);return ke.rotation.x=-Math.PI/2,ke.position.set(Cn,ye,Pn),ti.add(ke),ke},se=o(0.2,0.14,0.2);N(se,0.93,i,0),N(o(0.205,0.14,0.205),0.03,n,0.92),N(o(0.165,0.13,0.17),0.004,s,0.951),gt(ti,0.03,0.03,0.006,r,Cn,0.955,Pn+0.22,20);for(let de=0;de<6;de++)V(ti,0.004,0.008,0.1,r,Cn+0.2005,0.7+de*0.03,Pn+0.07),V(ti,0.004,0.008,0.1,r,Cn+0.2005,0.06+de*0.03,Pn+0.07);gt(ti,0.022,0.022,0.035,n,Cn-0.11,0.967,Pn+0.1,16);let Y=[[0,0.95,0],[0,1.26,0]];for(let de=0;de<=12;de++){let X=Math.PI-Math.PI*de/12;Y.push([0,1.26+0.06*Math.sin(X),0.06+0.06*Math.cos(X)])}Y.push([0,1.2,0.12]);let W=new ae(new Vr(new wr(Y.map((de)=>new R(Cn-0.11+de[0],de[1],Pn+0.1+de[2])),!1,"catmullrom",0.1),40,0.0095,10,!1),n);ti.add(W),gt(ti,0.02,0.02,0.04,n,Cn+0.1,0.97,Pn+0.22,16);let ee=new ae(new Vr(new wr([[0,0.97,0],[0,1,0],[0,1,0.03]].map((de)=>new R(Cn+0.1+de[0],de[1],Pn+0.22+de[2]))),10,0.008,8,!1),n);ti.add(ee)}let a=gt(ti,0.014,0.014,0.03,n,Cn+0.155,0.965,Pn+0.17,16),l=a.position.y,c=0.958,f=new R(Cn-0.11,1.198,Pn+0.22),u=new R(Cn-0.11,c,Pn+0.22),h=new R(Cn+0.1,0.995,Pn+0.25),m=0.24,g=0.9,x=(g+Math.sqrt(g*g+19.6*(h.y-c)))/9.8,d=new R(Cn+0.1,c,Pn+0.25+m*x),p=[0,0.3333333333333333,0.6666666666666666,1].map((D)=>new R().lerpVectors(f,u,D)),y=[];for(let D=0;D<=12;D++){let N=D/12*x;y.push(new R(h.x,h.y+g*N-4.9*N*N,h.z+m*N))}let M=[],b=(D,N,se,Y)=>{let W=new ae(new Vr(new wr(D),24,N,7,!1),new _t({color:se,transparent:!0,opacity:0,depthWrite:!1,toneMapped:!1}));return W.userData.o=Y,ti.add(W),M.push(W),W};b(p,0.0038,10475250,0.62),b(p,0.0075,8373482,0.2),b(y,0.0036,10475250,0.62),b(y,0.0072,8373482,0.2);let T=70,S=new Float32Array(T*3).fill(-9),_=[],v=new Float32Array(T);for(let D=0;D<T;D++)_.push([0,0,0]);let w=new et;w.setAttribute("position",new pi(S,3));let I=new bs({color:12904699,size:0.013,transparent:!0,opacity:0.85,depthWrite:!1,toneMapped:!1}),P=new Uo(w,I);P.frustumCulled=!1,ti.add(P);let O=[u,d].map((D)=>{let N=new ae(new Ss(0.01,0.015,28),new _t({color:12576511,transparent:!0,opacity:0,depthWrite:!1,toneMapped:!1,side:Kt}));return N.rotation.x=-Math.PI/2,N.position.set(D.x,c+0.002,D.z),ti.add(N),N}),Q={until:0,press:-9,a:0,last:performance.now()/1000},L=null,K=(D)=>{try{if(L=L||new(window.AudioContext||window.webkitAudioContext),L.state==="suspended")L.resume();let N=L.sampleRate,se=Math.floor(N*D),Y=L.createBuffer(1,se,N),W=Y.getChannelData(0),ee=0;for(let ve=0;ve<se;ve++){let ke=Math.random()*2-1;ee=(ee+0.02*ke)/1.02,W[ve]=ee*3.2+ke*0.1}let de=L.createBufferSource();de.buffer=Y;let X=L.createBiquadFilter();X.type="bandpass",X.frequency.value=1500,X.Q.value=0.55;let oe=L.createGain(),ye=L.currentTime;oe.gain.setValueAtTime(0,ye),oe.gain.linearRampToValueAtTime(0.15,ye+0.15),oe.gain.setValueAtTime(0.15,ye+D-0.7),oe.gain.linearRampToValueAtTime(0,ye+D),de.connect(X),X.connect(oe),oe.connect(L.destination),de.start()}catch(N){}};window.__drink=()=>{let D=performance.now()/1000,N=D<Q.until;if(Q.press=D,Q.until=D+4.5,!N)K(4.5)},ho.push(()=>{let D=performance.now()/1000,N=Math.min(0.05,D-Q.last);Q.last=D;let se=D<Q.until;Q.a+=((se?1:0)-Q.a)*Math.min(1,N*(se?14:7));let Y=0.88+0.12*Math.sin(D*40);M.forEach((W,ee)=>{W.material.opacity=W.userData.o*Q.a*(ee%2?1:Y)}),a.position.y=l-(D-Q.press<0.25?0.008:0),O.forEach((W,ee)=>{W.material.opacity=0.55*Q.a*(0.6+0.4*Math.sin(D*9+ee));let de=1+0.6*((D*2.2+ee*0.5)%1);W.scale.set(de,de,1)});for(let W=0;W<T;W++){if(v[W]<=0)if(se&&Math.random()<N*100){let ee=Math.random()<0.55?u:d;v[W]=0.25+Math.random()*0.3,S[W*3]=ee.x+(Math.random()-0.5)*0.014,S[W*3+1]=c+0.002,S[W*3+2]=ee.z+(Math.random()-0.5)*0.014,_[W]=[(Math.random()-0.5)*0.45,0.5+Math.random()*0.8,(Math.random()-0.5)*0.4]}else{S[W*3+1]=-9;continue}if(v[W]-=N,S[W*3]+=_[W][0]*N,S[W*3+1]+=_[W][1]*N,S[W*3+2]+=_[W][2]*N,_[W][1]-=9.8*N,S[W*3+1]<c)v[W]=0,S[W*3+1]=-9}w.attributes.position.needsUpdate=!0})}function zS(){for(let e of Qn)ni(e-3.05,zh,e+3.05,zh,0.22);Gn.push([nt+10.4,zh,0.5],[nt-5.4,zh,0.5]);for(let e of[-6,-2,2,6])ni(nt+11.3,Ut+e-0.9,nt+11.3,Ut+e+0.9,0.3);ni(Qn[0]-0.6,Ut-9.3,Qn[0]+0.6,Ut-9.3,0.3);for(let e of Qn)ni(e-0.6,Ut+9.3,e+0.6,Ut+9.3,0.3);Gn.push([Cn,Pn+0.2,0.3]),window.__zoneCol=[Gn.length],ni(Ai+0.3,26.2,Ai+0.3,28.5,0.3),ni(Ai+2.9,28.8,Ai+4.6,28.8,0.35),ni(Ai+1.55,25.7,Ai+1.55,27.5,0.12),Gn.push([-10.6,11.3,0.36],[-9.9,11,0.36],[-9.3,11.6,0.36]),window.__zoneCol.push(Gn.length)}function GS(){let[e,t]=window.__zoneCol;Gn.splice(e,t-e),ni(nt-11.76,Ut+7.8,nt-11.76,Ut+9.7,0.22),ni(nt-11.76,Ut+5.7,nt-11.76,Ut+7.3,0.22),ni(nt-11.74,Ut+10.63,nt-10.31,Ut+10.63,0.25),ni(nt-8.1,Ut+10.5,nt-6.4,Ut+10.5,0.4),Gn.push([nt-6.55,Ut-7.7,0.34],[nt-7.3,Ut-7.85,0.34],[nt-6.85,Ut-8.5,0.34])}var qY=new Promise((e)=>{new Rd().load("badminton_hala.glb?v=6",(t)=>{let i=t.scene,n=[],r=[],s=!i.getObjectByName("Hala_Klenba_Drevo"),o=!!i.getObjectByName("Vybaveni_Plakat_Yonex_Ram"),a=!!i.getObjectByName("Tribuna_V3_Konstrukce"),l=a||!!i.getObjectByName("Tribuna_Schody_Levy"),c=!!i.getObjectByName("Zona_Kondice_Rack_Kettlebell"),f=!!i.getObjectByName("Kurt1_Sloupky_Podstavec"),u=/^(Hala_Stena_.*|Hala_Obklad_.*|Hala_Okna_.*|Hala_Sloupy_.*|Hala_Strecha_Plech|Hala_Vaznik_\d+|Hala_Vaznice|Hala_Dvere|Hala_Nouzovy_.*|Kamera_Cil|Svetla_LED_.*|Vybaveni_Lavicky_.*|Vybaveni_Rozhodci_.*|Kurt\d_Sloupky|Vybaveni_Ukazatel_.*|.*_Skore|.*_Nazev)$/,h=/^(Kamera_Cil|Vybaveni_Ukazatel_.*|.*_Skore|.*_Nazev|Hala_Banner|Hala_Banner_Text|Zona_.*_Napis|Zona_Rozcvicka_Zrcadlo(_Ram)?|Vybaveni_Ukazatel_Stojan_.*)$/;if(i.traverse((g)=>{let x=g.name||"";if((s?u:h).test(x))n.push(g);if(!o&&/^Zona_Rozcvicka_Valec_\d$/.test(x))n.push(g);if(!f&&g.isMesh&&/^Kurt\d_Sloupky$/.test(x)&&g.geometry.index){let d=g.geometry.attributes.position,p=g.geometry.index.array,y=[];for(let M=0;M<p.length;M+=3){if((d.getY(p[M])+d.getY(p[M+1])+d.getY(p[M+2]))/3<0.19&&Math.max(d.getY(p[M]),d.getY(p[M+1]),d.getY(p[M+2]))<0.2)continue;y.push(p[M],p[M+1],p[M+2])}g.geometry.setIndex(y)}if(!s&&g.isMesh&&x==="Hala_Stena_Zadni"&&!(g.material&&g.material.name==="MAT_Banner_Oranzovy")){let d=new yt({color:new Se().setRGB(0.93,0.31,0.012),roughness:0.85});d.name="MAT_Banner_Oranzovy",g.material=d}if(!s&&/^(Hala_Klenba_Drevo|Hala_Vaznik_\d+|Hala_Vaznice|Svetla_LED_.*)$/.test(x))r.push(g);if(g.isMesh&&/^Vybaveni_Lavicky_(Drevo|Kov)$/.test(x)&&g.geometry.index){let d=g.geometry.attributes.position,p=g.geometry.index.array,y=[];for(let M=0;M<p.length;M+=3){let b=0,T=0;for(let S=0;S<3;S++)b+=d.getX(p[M+S]),T+=d.getZ(p[M+S]);if(b/=3,T/=3,b>-7.7&&b<-5.5&&T>8.7&&T<10)continue;y.push(p[M],p[M+1],p[M+2])}if(y.length!==p.length)g.geometry.setIndex(y)}if(g.isMesh){let d=g.material,p={MAT_PU_Podlaha:[0.36,0.075,0.04],MAT_PVC_Podlozka:[0.075,0.17,0.46],MAT_Pohledovy_Beton:[0.27,0.27,0.28],MAT_BWF_Cary:[0.85,0.85,0.83]};if(d&&p[d.name])d.color.setRGB(...p[d.name]);if(d&&d.name==="MAT_PU_Podlaha")d.roughness=0.36,zd(d,"floor",{blot:0.16,bs:1.1,grain:0.07,gs:70});if(d&&d.name==="MAT_PVC_Podlozka")d.roughness=0.5,zd(d,"mat",{blot:0.07,bs:0.8,grain:0.09,gs:160});if(d&&d.name==="MAT_Pohledovy_Beton")d.roughness=0.85,zd(d,"conc",{blot:0.28,bs:0.35,grain:0.12,gs:55});if(d&&d.name==="MAT_Ukazatel_LED")d.emissiveIntensity=2.2;if(d&&d.name==="MAT_LED_Zarivka_Emise")d.emissiveIntensity=2.6;if(d&&d.name==="MAT_Drevo_Klenba")d.map=lo,d.color.setRGB(1,1,1),d.roughness=0.62,d.side=Kt,d.needsUpdate=!0;if(d&&d.name==="MAT_Zrcadlo")g.material=new _t({color:11453654,toneMapped:!1});if(d&&d.name==="MAT_Banner_Oranzovy")d.emissive=new Se(15620624),d.emissiveIntensity=0.35;if(d&&d.name==="MAT_Sit_Pruhledna"){let y=document.createElement("canvas");y.width=1220,y.height=152;let M=y.getContext("2d");M.strokeStyle="#0c0c0e",M.lineWidth=2.2;for(let T=0;T<=1220;T+=10)M.beginPath(),M.moveTo(T,0),M.lineTo(T,152),M.stroke();for(let T=0;T<=152;T+=10)M.beginPath(),M.moveTo(0,T),M.lineTo(1220,T),M.stroke();let b=new zi(y);b.colorSpace=Ft,b.anisotropy=8,g.material=new _t({map:b,transparent:!0,alphaTest:0.3,side:Kt})}}}),n.forEach((g)=>g.parent&&g.parent.remove(g)),s)i.traverse((g)=>{if(/^Vybaveni_Ukazatel_Stojan_K2_/.test(g.name))g.position.x-=2.5});else{ti.remove(nn),Ln.remove(al);for(let x of Kd)cf.splice(cf.indexOf(x),1);let g=ll.x0+0.2;qn(ti,"WARM-UP",1.6,0.3,"#7be3ff",g,3.25,9.95,Math.PI/2,"bold 110px Arial Black, Arial",void 0,!1),qn(ti,"STRETCH",1.6,0.3,"#7be3ff",g,2.9,9.95,Math.PI/2,"bold 110px Arial Black, Arial",void 0,!1),qn(ti,"CONDITIONING",2,0.28,"#ffb15a",g,3.25,27.45,Math.PI/2,"bold 90px Arial Black, Arial",void 0,!1),qn(ti,"FOOTWORK",1.6,0.3,"#ffb15a",g,2.9,27.45,Math.PI/2,"bold 100px Arial Black, Arial",void 0,!1)}ol.add(i),ol.updateMatrixWorld(!0),r.forEach((g)=>Ln.attach(g));let m=()=>(window.FUNUI?FUNUI.summary("bad").k[0][0]:"0–0").replace("–"," : ");if(NS(i),OS(i,o),HS(i),!o)[[2763310,0],[2450411,1],[14709803,2]].forEach(([g,x])=>{let d=gt(ti,0.09,0.09,0.9,Z(g,0.8),nt-(6.9+x*0.32),0.09,Ut-9.5,24);d.rotation.x=Math.PI/2});if(!f)Qn.forEach((g)=>[-1,1].forEach((x)=>{let d=g+x*3.09,p=Z(1710622,0.5,0.3);V(ti,0.52,0.045,0.3,p,d+x*0.24,0.0225,Ut),V(ti,0.12,0.09,0.12,p,d,0.09,Ut),V(ti,0.08,0.05,0.16,p,d+x*0.36,0.07,Ut)}));if(l)X1(a);if(c)GS();try{if(window.__preGlb)window.__preGlb(i);if(window.__onHallGlb)window.__onHallGlb(i)}catch(g){console.warn("glb hook",g)}try{ol.updateMatrixWorld(!0),i.traverse((g)=>{(g.material?Array.isArray(g.material)?g.material:[g.material]:[]).forEach((d)=>["map","normalMap","roughnessMap","metalnessMap","emissiveMap","aoMap"].forEach((p)=>{if(d[p])kn.initTexture(d[p])})),g.frustumCulled=g.frustumCulled}),kn.compile(jt,Fi)}catch(g){console.warn("prewarm",g)}e()},void 0,(t)=>{console.error("badminton_hala.glb failed",t),e()})}),uo=new Ze;uo.position.set(6.5,1.85,-3.6);uo.rotation.y=0;jt.add(uo);var Y1=window.FUNUI?window.FUNUI.summary("strava").k:[["12/20"],["9 400"]],[q1,K1]=Y1[0][0].split("/").map(Number);uo.add(new ae(new An(0.85,0.1,16,72),xS(2761296,{r:0.6})));var Z1=2*Math.PI*q1/K1,J1=new ae(new An(0.85,0.1,16,160,Z1),new _t({color:new Se(16534530).multiplyScalar(1.5),toneMapped:!1}));J1.rotation.z=Math.PI/2-Z1;uo.add(J1);var kS=fl(512,384,(e,t,i)=>{e.textAlign="center",e.fillStyle="#fff",e.font="800 140px Inter,Arial",e.fillText(q1+"",t/2-40,190),e.fillStyle="#b8a9c9",e.font="700 70px Inter,Arial",e.fillText("/"+K1,t/2+90,190),e.font="600 34px Inter,Arial",e.fillText("A C T I V E   D A Y S",t/2,250)});Qd(1.5,1.12,kS,uo,0,0,0.02);var j1=(e,t)=>fl(768,96,(i,n,r)=>{i.fillStyle="rgba(10,15,44,.85)",i.beginPath(),i.roundRect(4,4,n-8,r-8,44),i.fill(),i.strokeStyle=t,i.lineWidth=4,i.stroke(),i.fillStyle=t,i.textAlign="center",i.font="700 40px Inter,Arial",i.fillText(e,n/2,62)});Qd(1.9,0.24,j1("\uD83D\uDC63  "+Y1[1][0]+" STEPS / DAY","#3dff9a"),uo,0,-1.3,0.02);Qd(1.9,0.24,j1("GYM 3× · YOGA 2× · WALKS","#8a96c4"),uo,0,-1.62,0.02);var KY=(Qn[0]+Qn[1])/2,co=[{k:"vl",x:ro.vl,z:so+2.2,r:4.5,c:"#45e08a",label:"VAŠELIGA",nolabel:!0,pos:[ro.vl,3.4,so+0.3],sc:0.8,ring:!1},{k:"hl",x:ro.hl,z:so+2.2,r:4.5,c:"#ff5470",label:"HOBBYLIGA",nolabel:!0,pos:[ro.hl,3.4,so+0.3],sc:0.8,ring:!1},{k:"water",x:Cn,z:Pn+1.3,r:2.4,c:"#7fd6ff",label:"PÍTKO",nolabel:!0,pos:[Cn,1.4,Pn+0.4],sc:0.6,ring:!1},{k:"climb",x:pt.cx,z:pt.cz,r:6.4,c:"#38e8ff",label:"CLIMBING",pos:[-10.8,3.7,-5.95],sc:1.2,ring:!1},{k:"strava",x:6.5,z:-2.3,r:2.3,c:"#ff7a2a",label:"STRAVA",pos:[6.5,3,-3.5],sc:0.8},{k:"games",x:6.6,z:-0.6,r:2.8,c:"#6d86ff",label:"GAMES",pos:[8.2,2.5,-1.8],sc:1},{k:"beer",x:-6.35,z:0,r:2.6,c:"#ff6a80",label:"BEER PONG",pos:[-6.35,2.55,0],sc:1}];co.forEach((e)=>{if(!e.nolabel){let t=yS(e.label,e.c,e.sc);t.position.set(...e.pos),jt.add(t)}if(e.ring!==!1&&e.k!=="bad"){let t=new ae(new Ss(e.r*0.55,e.r*0.55+0.05,64),new _t({color:new Se(e.c).multiplyScalar(1.5),transparent:!0,opacity:0.55,side:Kt,toneMapped:!1}));t.rotation.x=-Math.PI/2,t.position.set(e.x,0.02,e.z),jt.add(t),e.ring=t}});var Ls=[],$1=new Map;function dn(e,t,i,n,r,s,o,a,l,c=5.5,f=!0){let u=new bt(t,i,n),h=new ae(u,new _t({visible:!1}));h.position.set(r,s,o),h.userData.isHit=!0,l.add(h);let m=new Xi({color:new Se(a).multiplyScalar(2),transparent:!0,opacity:0,toneMapped:!1,depthTest:!1}),g={id:e,hit:h,hits:[h],mat:m,outline:f,far:c};if(f){l.updateMatrixWorld(!0);let x=new $e().copy(l.matrixWorld).invert(),d=new Li(new R(r-t/2,s-i/2,o-n/2),new R(r+t/2,s+i/2,o+n/2)),p=Math.max(t,i,n)*1.25,y=[];if(l.traverse((M)=>{if(!M.isMesh||M.isInstancedMesh||M.userData.isHit||M.userData.itemLine||!M.geometry)return;if(!M.geometry.boundingBox)M.geometry.computeBoundingBox();let b=new $e().multiplyMatrices(x,M.matrixWorld),T=M.geometry.boundingBox.clone().applyMatrix4(b),S=T.getSize(new R);if(Math.max(S.x,S.y,S.z)>p||!d.containsPoint(T.getCenter(new R)))return;y.push([M,b])}),y.forEach(([M,b])=>{let T=new Bn(new ph(M.geometry,28),m);T.matrixAutoUpdate=!1,T.matrix.copy(b),T.userData.itemLine=!0,T.renderOrder=5,l.add(T),g.hits.push(M)}),!y.length){let M=new Bn(new ph(u),m);M.position.copy(h.position),M.userData.itemLine=!0,l.add(M)}}g.hits.forEach((x)=>$1.set(x,g)),Ls.push(g)}dn("pc",0.3,0.52,0.5,0.83,1.03,-0.15,7177983,fo);dn("kb",0.39,0.04,0.16,-0.2,0.8,0.22,7177983,fo);dn("ms",0.075,0.04,0.14,0.27,0.8,0.21,4063130,fo);dn("hp",0.26,0.12,0.2,-0.7,0.84,0.26,16751178,fo);dn("mon",0.62,0.36,0.05,0.12,1.135,-0.2,3729663,fo,5.5,!1);dn("st:games",1.3,0.42,0.3,-1.78,1.12,-0.1,3729663,fo,7,!1);dn("st:vl",2.6,1.7,0.3,ro.vl,Kh,so+0.1,4579466,jt,24,!1);dn("st:hl",2.6,1.7,0.3,ro.hl,Kh,so+0.1,16733296,jt,24,!1);dn("st:water",0.5,1.4,0.5,Cn,0.7,Pn+0.2,8378111,jt,6,!1);dn("st:strava",2.2,2.4,0.3,6.5,1.7,-3.55,16742954,jt,9,!1);dn("st:climb",5,5,5,pt.cx,2.5,pt.cz,3729663,jt,16,!1);dn("st:beer",1.9,0.9,2.7,-6.35,0.7,0,16738944,jt,9,!1);var VS={bag:{brand:"YONEX",name:"72626 · 6R",rows:[["TYP","Bag na rakety"],["KAPACITA","6 raket"]]},shoes:{brand:"YONEX",name:"65 Z4 WIDE",rows:[["TYP","Sálová obuv"],["ŠÍŘKA","Wide · široká"]]},rackets:[{brand:"YONEX",name:"Raketa 1",rows:[["MODEL","doplním doma"]]},{brand:"YONEX",name:"Raketa 2",rows:[["MODEL","doplním doma"]]}],balls:{brand:"YONEX",name:"MAVIS 350",rows:[["BALENÍ","6 ks"],["BARVA","žluté · modrý pruh"]]}},Qc=Object.assign({},VS,window.GEAR||{});kn.localClippingEnabled=!0;(function(){let i=nt+11.3-0,n=Ut-6,r=[new Xn(new R(0,1,0),-0.47050000000000003)],s=(q,te=0.7,Je=0,C)=>Z(q,te,Je,C),o=(q,te,Je)=>{let C=document.createElement("canvas");C.width=q,C.height=te,Je(C.getContext("2d"),q,te);let E=new zi(C);E.colorSpace=Ft,E.anisotropy=4;try{kn.initTexture(E)}catch(U){}return E},a=(q,te,Je,C=0,E=0,U=0)=>{let me=new ae(te,Je);return me.position.set(C,E,U),q.add(me),me},l=(q,te,Je,C=0.01)=>new Rn(q,te,Je,3,Math.min(C,q/2.1,te/2.1,Je/2.1)),c=0.27,f=0.74,u=-0.17,h=0.17,m=0.03,g=(q)=>0.17+-0.14*q/0.74,x=Math.atan2(0.14,0.74),d=new Ze;d.position.set(i-0.02,0.4675,n),d.rotation.y=-Math.PI/2+0.05,jt.add(d);let p=s(14997702,0.88),y=s(13349002,0.85),M=s(1842207,0.8),b=s(2763310,0.75),T=s(723465,0.95),S=s(2894895,0.4,0.5),_=s(9378860,0.7);function v(q,te){let Je=new fn,C=q.length;for(let E=0;E<C;E++){let U=q[E],me=q[(E+C-1)%C],le=q[(E+1)%C],Te=Math.hypot(me[0]-U[0],me[1]-U[1]),Re=Math.hypot(le[0]-U[0],le[1]-U[1]),J=[U[0]+(me[0]-U[0])/Te*te,U[1]+(me[1]-U[1])/Te*te],fe=[U[0]+(le[0]-U[0])/Re*te,U[1]+(le[1]-U[1])/Re*te];if(E)Je.lineTo(J[0],J[1]);else Je.moveTo(J[0],J[1]);Je.quadraticCurveTo(U[0],U[1],fe[0],fe[1])}return Je.closePath(),Je}function w(q,te,Je,C,E,U,me=0){let le=q.map((Re)=>[Re[0],Re[1]]),Te=new $r(v(le,C),{depth:te-2*Je,bevelEnabled:!0,bevelThickness:Je,bevelSize:Je,bevelSegments:3,curveSegments:6});return Te.translate(0,0,-(te-2*Je)/2),a(U,Te,E,0,0,me)}let I=0.016;w([[-0.17+I,I],[0.17-I,I],[0.03-I,0.74-I],[-0.17+I,0.74-I]],0.27,I,0.05,p,d),w([[-0.17+I,I],[0.17-I,I],[g(0.14)-I,0.14],[-0.17+I,0.14]],0.278,I,0.03,M,d);let P=2000,O=o(Math.round(0.34*P),Math.round(0.74*P),(q,te,Je)=>{let C=(U)=>(U- -0.17)*P,E=(U)=>(0.74-U)*P;q.fillStyle="#e4d8c6",q.fillRect(0,0,te,Je),q.fillStyle="#1c1c1f",q.beginPath(),q.moveTo(C(g(0.74)),E(0.74)),q.lineTo(C(g(0.74)-0.05),E(0.74)),q.lineTo(C(g(0.17)-0.115),E(0.17)),q.lineTo(C(g(0.17)),E(0.17)),q.closePath(),q.fill(),q.strokeStyle="#8f1c2c",q.lineWidth=7,q.beginPath(),q.moveTo(C(g(0.74)-0.052),E(0.71)),q.lineTo(C(g(0.17)-0.118),E(0.19)),q.stroke(),q.fillStyle="#cbb08a",q.fillRect(0,E(0.2),te,0.04*P),q.strokeStyle="#a8906c",q.lineWidth=3;for(let U=1;U<18;U++)q.beginPath(),q.moveTo(U*te/18,E(0.2)),q.lineTo(U*te/18,E(0.16)),q.stroke();q.fillStyle="#1c1c1f",q.fillRect(0,E(0.14),te,0.14*P),q.fillStyle="#3a3a3d",q.beginPath(),q.arc(C(-0.125),E(0.69),0.016*P,0,7),q.fill(),q.beginPath(),q.arc(C(-0.09),E(0.665),0.016*P,0,7),q.fill(),q.beginPath(),q.moveTo(C(-0.075),E(0.7)),q.lineTo(C(-0.045),E(0.655)),q.lineTo(C(-0.105),E(0.64)),q.closePath(),q.fill(),q.save(),q.translate(C(-0.075),E(0.6)),q.rotate(Math.PI/2),q.fillStyle="#35353a",q.font="italic 900 150px Arial Black, Arial",q.textBaseline="middle",q.fillText("YONEX",0,0),q.restore()});O.repeat.set(2.941176470588235,1.3513513513513513),O.offset.set(0.5,0);{let q=new Vo(v([[-0.166,0.004],[0.166,0.004],[0.026,0.736],[-0.166,0.736]],0.05),6);a(d,q,new yt({map:O,roughness:0.85}),0,0,0.13620000000000002)}for(let q of[-1,1])a(d,l(0.03,0.56,0.065,0.014),b,-0.18200000000000002,0.4,q*0.075),a(d,l(0.03,0.12,0.06,0.014),b,-0.17,0.775,q*0.075).rotation.z=0.1;let Q=new ae(new An(0.035,0.006,6,12,Math.PI),M);Q.rotation.y=Math.PI/2,Q.position.set(-0.12000000000000001,0.74,0),d.add(Q);let L=new Ze;L.position.set(g(0.37),0.37,0),L.rotation.z=x,d.add(L);let K=0.075,D=[-1,1].map((q)=>{let te=new Ze;te.position.set(0.0012,0.07,q*K),L.add(te);let Je=a(te,new ei(1,1).rotateY(Math.PI/2),T,0,0.29,0);Je.scale.set(1,0.001,0.001),Je.visible=!1;let C=a(te,new bt(0.01,0.6,0.008),y,0.003,0,-0.004),E=a(te,new bt(0.01,0.6,0.008),y,0.003,0,0.004),U=a(te,new bt(0.016,0.032,0.014),S,0.008,0.27,0);return{op:Je,t1:C,t2:E,pull:U}}),N=[-1,1].map((q)=>{let te=a(d,new ei(0.18,0.05).rotateX(-Math.PI/2),T,-0.07,0.742,q*K);return te.visible=!1,te}),se=new Ze;L.add(se);let Y=(q,te,Je,C)=>{let E=Math.hypot(Je-q,C-te),U=a(se,new bt(0.007,E,0.026),y,0.012,(q+Je)/2,(te+C)/2);U.rotation.x=Math.atan2(C-te,Je-q);let me=a(se,new bt(0.012,0.012,0.034),M,0.014,q+(Je-q)*0.7,te+(C-te)*0.7)};a(se,l(0.014,0.16,0.034,0.006),y,0.012,-0.12,0);for(let q of[-1,1])Y(-0.04,0,0.12,q*0.07),Y(-0.2,0,-0.33,q*0.075);a(se,new bt(0.012,0.03,0.01),S,0.012,0.28,0),a(d,new bt(0.004,0.11,0.22000000000000003),T,g(0.085)+0.001,0.085,0);let W=new Ze;W.position.set(g(0.145)+0.004,0.145,0),d.add(W),a(W,l(0.012,0.12,0.24000000000000002,0.005),b,0,-0.06,0),a(W,new bt(0.016,0.02,0.05),y,0.003,-0.105,0);let ee=-0.21500000000000002;a(d,l(0.09,0.3,0.12,0.02),b,ee,0.18,0),a(d,new bt(0.09,0.012,0.12),s(3815999,0.7),ee,0.33,0);function de(q){let te=new Ze,Je=s(1447707,0.35,0.3,{clippingPlanes:r}),C=s(15263978,0.4,0.2,{clippingPlanes:r}),E=s(q,0.9,0,{clippingPlanes:r}),U=0.54,me=0.104,le=0.134,Te=[];for(let J=0;J<48;J++){let fe=J/48*Math.PI*2;Te.push(new R(0.104*Math.cos(fe),0.54+0.134*Math.sin(fe),0))}a(te,new Vr(new wr(Te,!0),72,0.0075,8,!0),Je);let Re=o(256,320,(J,fe,Pe)=>{J.clearRect(0,0,fe,Pe),J.beginPath(),J.ellipse(fe/2,Pe/2,fe/2-2,Pe/2-2,0,0,7),J.clip(),J.strokeStyle="rgba(235,235,225,0.75)",J.lineWidth=1.4;for(let B=0;B<=18;B++){let ue=B*fe/18;J.beginPath(),J.moveTo(ue,0),J.lineTo(ue,Pe),J.stroke()}for(let B=0;B<=22;B++){let ue=B*Pe/22;J.beginPath(),J.moveTo(0,ue),J.lineTo(fe,ue),J.stroke()}});a(te,new kr(1,48),new _t({map:Re,transparent:!0,opacity:0.8,depthWrite:!1,side:Kt,clippingPlanes:r,alphaTest:0.05}),0,0.54,0).scale.set(0.09999999999999999,0.13,1);for(let J of[-1,1])a(te,new Vr(new wr([new R(J*0.052,0.41200000000000003,0),new R(J*0.03,0.376,0),new R(J*0.008,0.345,0)]),12,0.0065,6),Je);return a(te,new bt(0.034,0.014,0.012),C,0,0.38,0),a(te,new Pt(0.0038,0.0038,0.15,8),Je,0,0.275,0),a(te,new Pt(0.0125,0.0125,0.2,10),E,0,0.1,0),a(te,new Pt(0.0135,0.0135,0.008,10),C,0,0,0),a(te,new Pt(0.0135,0.0135,0.006,10),C,0,0.2,0),a(te,new bt(0.012,0.05,0.016),C,0.104,0.54,0),te}let X=[de(12593706),de(2775232)],oe=(q,te,Je)=>{q.position.set(-0.065,0.04+0.42*Je,te),q.rotation.z=0};oe(X[0],K,0),oe(X[1],-K,0),X.forEach((q)=>{d.add(q),q.visible=!1});function ye(q){let te=new Ze,Je=0.3,C=0.15,E=(pe)=>0.046+0.006*pe-0.012*pe*pe,U=s(16185337,0.55),me=s(11186878,0.45,0.25),le=s(15527923,0.6),Te=s(9278882,0.8),Re=s(14672874,0.7),J=(pe,be=0)=>{let Me=new fn;for(let tt=0;tt<=40;tt++){let rt=tt/40*Math.PI*2,He=0.15*Math.cos(rt),ft=He/0.15,St=(E(ft)+be)*Math.sin(rt)*pe;(tt?Me.lineTo:Me.moveTo).call(Me,He*pe,St)}return Me},fe=(pe,be)=>{let Me=new $r(pe,{depth:be,bevelEnabled:!1,curveSegments:16});return Me.rotateX(-Math.PI/2),Me};a(te,fe(J(1.01,0.003),0.009),Te,0,0,0),a(te,fe(J(1,0),0.024),le,0,0.009,0);let Pe=[[-1,0.07],[-0.85,0.1],[-0.6,0.095],[-0.3,0.082],[0,0.07],[0.35,0.056],[0.7,0.043],[0.92,0.03],[1,0]],B=(pe)=>{for(let be=1;be<Pe.length;be++)if(pe<=Pe[be][0]){let Me=Pe[be-1],tt=Pe[be],rt=(pe-Me[0])/(tt[0]-Me[0]);return Me[1]+(tt[1]-Me[1])*rt}return 0};function ue(pe,be,Me,tt){let ft=[],St=[];for(let ci=0;ci<=14;ci++){let Ci=pe+(be-pe)*ci/14,Vi=Math.max(0.0005,E(Ci)*(1-Math.pow(Math.abs(Ci),12)))*Me,yi=B(Ci)*Me;for(let Vn=0;Vn<=12;Vn++){let po=Vn/12*Math.PI;ft.push(Ci*0.15,0.033+yi*Math.sin(po),Vi*Math.cos(po))}}for(let ci=0;ci<14;ci++)for(let Ci=0;Ci<12;Ci++){let Vi=ci*13+Ci,yi=Vi+12+1;St.push(Vi,Vi+1,yi,Vi+1,yi+1,yi)}let Ge=new et;Ge.setAttribute("position",new Be(ft,3)),Ge.setIndex(St),Ge.computeVertexNormals();let $t=new ae(Ge,tt);return tt.side=Kt,te.add($t),$t}ue(-1,1,1,U),ue(-1,-0.55,1.03,me),ue(0.72,1,1.03,me);let he=a(te,new An(0.04,0.0075,6,18),me,-0.085,0.108,0);he.scale.set(1.15,1,0.8),he.rotation.x=Math.PI/2,he.rotation.y=0,he.rotation.z=0,he.rotation.order="XYZ",a(te,new kr(0.036,18).rotateX(-Math.PI/2),T,-0.085,0.104,0).scale.set(1.15,1,0.8),a(te,l(0.05,0.012,0.045,0.004),U,-0.03,0.098,0).rotation.z=0.35;for(let pe=0;pe<5;pe++){let be=-0.025+pe*0.022,Me=0.088-pe*0.008;a(te,new bt(0.005,0.004,0.058),Re,be,Me,0).rotation.z=0.15}for(let pe of[-1,1])a(te,new Vr(new wr([new R(-0.1,0.065,pe*0.041),new R(-0.02,0.07,pe*0.046),new R(0.07,0.048,pe*0.049)]),12,0.0035,5),me);a(te,l(0.022,0.032,0.05,0.006),s(1710878,0.6),-0.148,0.095,0);for(let pe of[-1,1])a(te,l(0.07,0.022,0.004,0.002),s(3882823,0.5),-0.1,0.045,pe*0.045);if(q)te.scale.z=-1;return te}let ve=new Ze;d.add(ve);let ke=ye(!1),Ne=ye(!0);ke.position.z=0.053,Ne.position.z=-0.053,ve.add(ke,Ne),ve.position.set(0,0.052,0),ve.visible=!1;let xt=new Ze;xt.position.set(ee,0.045,0),d.add(xt);let Xe=o(512,256,(q,te,Je)=>{q.fillStyle="#1f4fd0",q.fillRect(0,0,te,Je),q.fillStyle="#ffd400",q.fillRect(0,Je*0.78,te,Je*0.09),q.fillStyle="#ffffff",q.font="italic 900 70px Arial Black, Arial",q.textAlign="center",q.fillText("MAVIS",te/2,Je*0.42),q.font="italic 900 62px Arial Black, Arial",q.fillText("350",te/2,Je*0.68),q.fillStyle="#ffffff",q.font="700 24px Arial",q.fillText("YONEX",te/2,Je*0.14)});Xe.wrapS=Nn,Xe.offset.x=0.5,a(xt,new Pt(0.036,0.036,0.29,20),new yt({map:Xe,roughness:0.45}),0,0.145,0),a(xt,new Pt(0.0385,0.0385,0.022,20),s(16053488,0.5),0,0.296,0),a(xt,new Pt(0.0385,0.0385,0.012,20),s(16053488,0.5),0,0.006,0),dn("st:bag",0.52,0.8,0.3,-0.04,0.4,0,16765562,d,5,!1);let Ye=Ls[Ls.length-1],Tt=Ye.hits.slice();dn("bg:r1",0.23,0.69,0.06,0,0.34,0,16765562,X[0],5,!1);let ge=Ls[Ls.length-1];dn("bg:r2",0.23,0.69,0.06,0,0.34,0,16765562,X[1],5,!1);let Ee=Ls[Ls.length-1],Ce=[ge,Ee],Ve=Ce.map((q)=>q.hits.slice());window.__bagRacks=X,window.__racketGone=[!1,!1],window.__bagRacketSet=(q,te)=>{window.__racketGone[q]=te,Ce[q].hits=te?[]:Ve[q],X[q].visible=!te&&Bt>0.3},dn("bg:shoes",0.32,0.12,0.2,0,0.055,0,16765562,ve,5,!1),dn("bg:balls",0.085,0.33,0.085,0,0.15,0,16765562,xt,5,!1),co.push({k:"bag",x:i,z:n,r:3,c:"#ffd27a",label:"BAG",nolabel:!0,ring:!1,pos:[i,1,n],sc:0.6});let We=document.getElementById("ui")||document.body,st={},Oe=(q)=>{let te=document.createElement("div");return te.className="lb",te.style.cssText="position:fixed;left:0;top:0;display:none;transform:translate(-50%,-100%);margin-top:-8px;pointer-events:none;border-color:#ffd27a99;z-index:6",te.innerHTML=`<span class=br>${q.brand}</span><span class=nm>${q.name}</span>`,We.appendChild(te),te};st["bg:shoes"]=Oe(Qc.shoes),st["bg:r1"]=Oe(Qc.rackets[0]),st["bg:r2"]=Oe(Qc.rackets[1]),st["bg:balls"]=Oe(Qc.balls);let Lt={"bg:shoes":[ve,0,0.17,0],"bg:r1":[X[0],0,0.72,0],"bg:r2":[X[1],0,0.72,0],"bg:balls":[xt,0,0.34,0]},wt=new R,Dt={"bg:shoes":ve,"bg:r1":X[0],"bg:r2":X[1],"bg:balls":xt};Object.values(Dt).forEach((q)=>q.traverse((te)=>{if(te.isMesh&&te.material&&te.material.emissive)te.material=te.material.clone()}));let H=0,Bt=0,Rt=performance.now(),si=null,Le=null,Ht=(q)=>(q=Math.max(0,Math.min(1,q)),q*q*(3-2*q));window.__bagIsOpen=()=>H===1,window.__bagSum=()=>({t:"YONEX "+Qc.bag.name.split(" ")[0],s:H?"Podívej se na boty, rakety a míčky":"Bag na 6 raket",k:H?[["\uD83D\uDC5F","BOTY"],["\uD83C\uDFF8","RAKETY"],["\uD83D\uDFE1","MÍČKY"]]:[["\uD83C\uDF92","OTEVŘÍT"]]}),window.__bagToggle=()=>{H=H?0:1,window.__sfx&&window.__sfx.bag(H===1);let q=ai;if(ai=null,q)tu(q.k);let te=document.querySelector("#prompt .tp");if(te)te.textContent=H?"ZAVŘÍT BAG":"OTEVŘÍT BAG"},ho.push(()=>{let q=performance.now(),te=Math.min(0.1,(q-Rt)/1000);Rt=q,Bt+=Math.sign(H-Bt)*Math.min(Math.abs(H-Bt),te/1.3);let Je=(E,U)=>Ht((Bt-E)/(U-E));{let E=Je(0,0.4),U=0.001+0.3*E,me=0.001+0.05*E;D.forEach((le)=>{le.op.visible=E>0.01,le.op.scale.set(1,U,me),le.op.position.y=0.29-U/2,le.t1.position.z=-me/2-0.004,le.t2.position.z=me/2+0.004,le.pull.position.y=0.27-0.3*E}),N.forEach((le)=>{le.visible=E>0.05,le.scale.set(0.3+0.7*E,1,0.2+0.8*E)})}W.rotation.z=1.5*Je(0.05,0.3),se.visible=Bt<0.08,oe(X[0],K,Je(0.3,0.8)),oe(X[1],-K,Je(0.4,0.9)),X.forEach((E,U)=>E.visible=Bt>0.3&&!window.__racketGone[U]),ve.position.x=0.37*Je(0.35,0.85),ve.position.y=0.052*(1-Je(0.7,0.9)),ve.visible=Bt>0.35,xt.position.y=0.045+0.17*Je(0.55,1),Ye.hits=H===0&&Bt<0.97||Bt<0.05?Tt:[];let C=typeof It==="string"&&It.startsWith("bg:")&&Bt>0.9?It:null;if(C!==si){if(si)st[si].style.display="none";if(C)st[C].style.display="flex";si=C}if(C){let E=Lt[C];wt.set(E[1],E[2],E[3]),E[0].localToWorld(wt),wt.project(Fi);let U=st[C].style;if(wt.z>1)U.display="none";else U.display="flex",U.left=(wt.x*0.5+0.5)*innerWidth+"px",U.top=(-wt.y*0.5+0.5)*innerHeight+"px"}if(C!==Le){for(let E in Dt)Dt[E].traverse((U)=>{if(U.isMesh&&U.material&&U.material.emissive)U.material.emissive.setHex(E===C?2768742:0)});Le=C}})})();(function(){let t=null,i=null,n=null,r=null,s=!1,o=null,a=(S,_)=>S+Math.random()*(_-S);function l(){if(t){if(t.state==="suspended")t.resume();return t}try{t=new(window.AudioContext||window.webkitAudioContext),i=t.createGain(),i.gain.value=s?0:0.9;let S=t.createDynamicsCompressor();S.threshold.value=-14,S.ratio.value=4,i.connect(S),S.connect(t.destination);let _=t.sampleRate*2;n=t.createBuffer(1,_,t.sampleRate);let v=n.getChannelData(0);for(let w=0;w<_;w++)v[w]=Math.random()*2-1;r=t.createGain(),r.gain.value=1;for(let[w,I]of[[0.071,0.34],[0.113,0.3],[0.167,0.26]]){let P=t.createDelay(1);P.delayTime.value=w;let O=t.createGain();O.gain.value=I;let Q=t.createBiquadFilter();Q.type="lowpass",Q.frequency.value=2400,r.connect(P),P.connect(Q),Q.connect(O),O.connect(P);let L=t.createGain();L.gain.value=0.5,Q.connect(L),L.connect(i)}g()}catch(S){t=null}return t}let c=(S,_)=>{if(S.connect(i),_){let v=t.createGain();v.gain.value=_,S.connect(v),v.connect(r)}};function f(S,_,v){if(!t)return;let w=t.createBufferSource();w.buffer=n,w.loop=!0,w.playbackRate.value=v.rate||1;let I=t.createBiquadFilter();if(I.type=v.type||"bandpass",I.Q.value=v.q==null?1:v.q,I.frequency.setValueAtTime(v.f||1000,S),v.f2)I.frequency.exponentialRampToValueAtTime(v.f2,S+_);let P=t.createGain(),O=v.att==null?Math.min(0.01,_/3):v.att;P.gain.setValueAtTime(0.0001,S),P.gain.linearRampToValueAtTime(v.gain||0.1,S+O),P.gain.exponentialRampToValueAtTime(0.0001,S+_),w.connect(I),I.connect(P),c(P,v.wet),w.start(S,Math.random()*1.5),w.stop(S+_+0.05)}function u(S,_,v){if(!t)return;let w=t.createOscillator();if(w.type=v.type||"sine",w.frequency.setValueAtTime(v.f||440,S),v.f2)w.frequency.exponentialRampToValueAtTime(v.f2,S+_);let I=t.createGain(),P=v.att==null?0.004:v.att;I.gain.setValueAtTime(0.0001,S),I.gain.linearRampToValueAtTime(v.gain||0.1,S+P),I.gain.exponentialRampToValueAtTime(0.0001,S+_),w.connect(I),c(I,v.wet),w.start(S),w.stop(S+_+0.05)}let h=()=>t.currentTime+0.005,m={};m.unlock=l,m.zip=(S,_=0,v=0.7,w=1)=>{if(!l())return;let I=h()+_,P=Math.round(v*60);f(I,v,{type:"bandpass",f:S?1300:2600,f2:S?2700:1300,q:2.2,gain:0.05*w,att:0.05});for(let O=0;O<P;O++){let Q=O/P,L=I+Q*v;f(L,0.012,{type:"bandpass",f:(S?3200+Q*2200:5400-Q*2200)*a(0.92,1.08),q:4,gain:0.07*w*a(0.7,1.1),att:0.001})}u(I+v,0.05,{f:260,f2:150,gain:0.05*w}),f(I+v,0.03,{type:"highpass",f:4500,gain:0.05*w})},m.rustle=(S=0,_=0.35,v=1)=>{if(!l())return;let w=h()+S;f(w,_,{type:"bandpass",f:1800,f2:700,q:0.6,gain:0.07*v,att:0.06}),f(w+_*0.4,_*0.7,{type:"highpass",f:3000,gain:0.025*v,att:0.08})},m.scrape=(S=0,_=0.5,v=1)=>{if(!l())return;let w=h()+S;f(w,_,{type:"bandpass",f:520,f2:330,q:0.9,gain:0.09*v,att:0.08}),f(w,_,{type:"highpass",f:2500,gain:0.02*v,att:0.1})},m.thud=(S=0,_=130,v=1)=>{if(!l())return;let w=h()+S;u(w,0.14,{f:_,f2:_*0.5,gain:0.22*v,wet:0.15}),f(w,0.06,{type:"lowpass",f:420,gain:0.1*v})},m.pop=(S=0,_=1)=>{if(!l())return;let v=h()+S;u(v,0.09,{f:520,f2:170,gain:0.2*_,wet:0.2}),f(v,0.025,{type:"bandpass",f:2600,q:1.5,gain:0.07*_})},m.shing=(S=0,_=1)=>{if(!l())return;let v=h()+S;f(v,0.45,{type:"bandpass",f:700,f2:1500,q:0.8,gain:0.06*_,att:0.1}),u(v+0.4,0.35,{f:2300,f2:2150,gain:0.035*_,wet:0.5}),f(v+0.4,0.08,{type:"highpass",f:5000,gain:0.04*_})},m.click=(S=0,_=1)=>{if(!l())return;let v=h()+S;f(v,0.02,{type:"bandpass",f:2800,q:3,gain:0.1*_,att:0.001}),u(v,0.03,{f:1800,f2:900,type:"square",gain:0.025*_})},m.beep=(S=880,_=0.09,v=1,w=0,I="square")=>{if(!l())return;u(h()+w,_,{f:S,f2:S*0.99,type:I,gain:0.07*v,att:0.004,wet:0.25})},m.fanfare=()=>{[523,659,784,1047,784,1047].forEach((S,_)=>m.beep(S,0.16,1.1,_*0.13,"triangle"))},m.buzzer=()=>{m.beep(140,0.6,1.6,0,"sawtooth")},m.bag=(S)=>{if(!l())return;if(S)m.zip(!0,0,0.55),m.zip(!0,0.14,0.55,0.85),m.rustle(0.05,0.4),m.shing(0.38),m.shing(0.52,0.8),m.scrape(0.45,0.6),m.thud(1.12,150,0.7),m.rustle(1.1,0.2,0.5),m.pop(0.95),m.click(1.28,0.6);else m.pop(0.02,0.8),m.scrape(0.18,0.55),m.thud(0.3,110,0.5),m.shing(0.3,0.7),m.shing(0.45,0.6),m.rustle(0.7,0.35),m.zip(!1,0.78,0.55),m.zip(!1,0.92,0.55,0.85),m.thud(1.5,90,0.4)},m.step=(S,_)=>{if(!l())return;let v=h(),w=a(0.8,1.15),I=Math.min(1.4,0.7+_*0.08);if(S==="hall"){if(f(v,0.07,{type:"lowpass",f:520*w,gain:0.07*I}),u(v,0.09,{f:95*w,f2:55,gain:0.09*I,wet:0.08}),f(v,0.02,{type:"bandpass",f:2200*w,q:2,gain:0.025*I}),Math.random()<0.07*I)m.squeak()}else if(S==="stair")u(v,0.1,{f:170*w,f2:90,gain:0.14*I,wet:0.12}),f(v,0.05,{type:"bandpass",f:900,q:1,gain:0.07*I});else f(v,0.045,{type:"bandpass",f:1300*w,q:1.2,gain:0.1*I}),u(v,0.07,{f:190*w,f2:110,gain:0.1*I})},m.squeak=()=>{if(!l())return;let S=h(),_=a(1300,1900);u(S,0.13,{f:_,f2:_*1.5,type:"sawtooth",gain:0.012,wet:0.35,att:0.02}),u(S,0.13,{f:_*1.01,f2:_*1.53,gain:0.02,wet:0.35,att:0.02})},m.jump=()=>{if(!l())return;f(h(),0.18,{type:"bandpass",f:500,f2:1200,q:0.6,gain:0.05,att:0.04})},m.land=(S=1)=>{if(!l())return;if(m.thud(0,100,0.8*S),f(h(),0.08,{type:"lowpass",f:700,gain:0.08*S}),Math.random()<0.3)m.squeak()},m.sit=()=>{if(!l())return;let S=h();f(S,0.35,{type:"bandpass",f:280,f2:520,q:7,gain:0.07,att:0.05}),m.rustle(0,0.3,0.7),m.thud(0.22,100,0.8)},m.stand=()=>{if(!l())return;let S=h();f(S,0.25,{type:"bandpass",f:520,f2:300,q:6,gain:0.05,att:0.04}),m.rustle(0,0.3,0.6)},m.hit=(S=1,_=0)=>{if(!l())return;let v=h()+_;u(v,0.05,{f:a(850,1100),f2:600,gain:0.07*S,wet:0.7}),f(v,0.035,{type:"bandpass",f:2600,q:1,gain:0.05*S,wet:0.7})},m.mute=(S)=>{if(s=S==null?!s:S,i)i.gain.setTargetAtTime(s?0:0.9,t.currentTime,0.05);return s};function g(){let S=(_,v,w)=>{let I=t.createBufferSource();I.buffer=n,I.loop=!0;let P=t.createBiquadFilter();P.type=w,P.frequency.value=_,P.Q.value=v;let O=t.createGain();return O.gain.value=0,I.connect(P),P.connect(O),O.connect(i),I.start(),O};o={hall:S(260,0.4,"lowpass"),room:S(150,0.5,"lowpass"),air:S(900,0.3,"bandpass")}}m.ambient=(S)=>{if(!t||!o)return;let _=t.currentTime;o.room.gain.setTargetAtTime(S?0:0.03,_,0.6)},m.swing=(S=1)=>{if(!l())return;let _=h();f(_,0.2,{type:"bandpass",f:500+250*S,f2:2300+900*S,q:1.1,gain:0.07+0.05*S,att:0.07}),u(_,0.18,{f:320+120*S,f2:900+250*S,type:"sine",gain:0.012*S,att:0.08})},m.shuttle=(S=0.5,_=1)=>{if(!l())return;let v=h(),w=Math.max(0,Math.min(1,S));if(u(v,0.05+0.03*w,{f:720+900*w*_,f2:260,gain:0.11+0.14*w,att:0.001,wet:0.45}),f(v,0.03+0.02*w,{type:"bandpass",f:1800+2600*_,q:1.1,gain:0.07+0.1*w,att:0.001,wet:0.5}),w>0.7)f(v,0.14,{type:"highpass",f:4200,gain:0.05*w,att:0.001,wet:0.9}),u(v,0.1,{f:190,f2:90,gain:0.1*w,wet:0.5});if(_<0.5)u(v,0.04,{f:3400,f2:2400,type:"square",gain:0.02,att:0.001})},m.feedFire=()=>{if(!l())return;let S=h();u(S,0.1,{f:210,f2:90,gain:0.16,wet:0.2}),f(S,0.05,{type:"bandpass",f:1300,q:1.2,gain:0.07,wet:0.3}),f(S+0.01,0.09,{type:"bandpass",f:2400,f2:900,q:2,gain:0.05}),u(S,0.2,{f:1500,f2:700,type:"sawtooth",gain:0.012,att:0.01})};let x=null;m.motor=(S)=>{if(!l())return;if(S&&!x){let _=t.createOscillator(),v=t.createOscillator(),w=t.createBiquadFilter(),I=t.createGain(),P=t.createOscillator(),O=t.createGain();_.type="sawtooth",_.frequency.value=74,v.type="square",v.frequency.value=148.5,w.type="lowpass",w.frequency.value=520,w.Q.value=2.5,P.frequency.value=9,O.gain.value=7,P.connect(O),O.connect(_.frequency),I.gain.value=0.0001;let Q=t.createGain();Q.gain.value=0.5,v.connect(Q),_.connect(w),Q.connect(w),w.connect(I),c(I,0.2),_.start(),v.start(),P.start(),I.gain.setTargetAtTime(0.028,t.currentTime,0.4),x={o1:_,o2:v,lfo:P,g:I}}else if(!S&&x){let _=x;x=null,_.g.gain.setTargetAtTime(0.0001,t.currentTime,0.25),setTimeout(()=>{try{_.o1.stop(),_.o2.stop(),_.lfo.stop()}catch(v){}},1200)}},m.shuttleLand=(S=1)=>{if(!l())return;let _=h();f(_,0.025,{type:"bandpass",f:3200,q:1.5,gain:0.03*S,wet:0.5}),u(_,0.03,{f:700,f2:420,gain:0.03*S,wet:0.4})},m.netHit=()=>{if(!l())return;let S=h();f(S,0.18,{type:"lowpass",f:900,f2:250,gain:0.07}),u(S,0.1,{f:240,f2:130,gain:0.05,wet:0.2}),f(S,0.03,{type:"bandpass",f:2600,q:2,gain:0.03})},m.tick=(S=!1)=>{if(!l())return;if(m.beep(S?1320:880,S?0.32:0.12,1,0,"square"),S)m.beep(1760,0.3,0.6,0.02,"triangle")},m.good=(S=1)=>{if(!l())return;m.beep(880+220*S,0.07,0.8,0,"triangle"),m.beep(1320+220*S,0.1,0.8,0.07,"triangle")},m.miss=()=>{if(!l())return;m.beep(220,0.14,0.9,0,"sawtooth")},window.__sfx=m,["pointerdown","keydown","touchstart"].forEach((S)=>addEventListener(S,()=>l(),{passive:!0})),addEventListener("keydown",(S)=>{if(S.code==="KeyM"&&!S.repeat)m.mute()});let d=0,p=!1,y=performance.now(),M=0,b=0;window.__inHall=()=>Ae.z>Ri+0.3,ho.push(()=>{let S=performance.now(),_=Math.min(0.1,(S-y)/1000);if(y=S,!t||t.state!=="running")return;let v=Ds>0.001,w=Math.hypot(Ae.vx,Ae.vz);if(v&&!p)m.jump();if(v)M=Math.max(M,$o<0?-$o:0);if(!v&&p)m.land(Math.min(1.3,0.5+M*0.12)),M=0,d=0;if(p=v,!v&&w>0.6&&!(window.__sitting&&window.__sitting())){d+=w*_;let I=w>4?1.55:1.15;if(d>=I)d=0,m.step(ea>0.2?"stair":Ae.z>Ri+0.3?"hall":"room",w)}else if(w<0.3)d=T();m.ambient(Ae.z>Ri+0.3)});function T(){return 0.9}})();(function(){let n=(Qn[0]+Qn[1])/2,s=mr-0.1,o=document.createElement("canvas");o.width=1344,o.height=544;let a=o.getContext("2d"),l=new zi(o);l.colorSpace=Ft,l.anisotropy=8;let c=new Ze;c.position.set(n,5,s),jt.add(c),u(c,new bt(6.4,2.71,0.12),Z(1052948,0.5,0.4),0,0,0),u(c,new bt(6.44,0.035,0.13),new _t({color:16734751}),0,1.355,0),u(c,new bt(6.44,0.035,0.13),new _t({color:16734751}),0,-1.355,0);let f=new ae(new ei(6.2,2.51),new _t({map:l,toneMapped:!1}));f.rotation.y=Math.PI,f.position.z=-0.065,c.add(f);function u(v,w,I,P,O,Q){let L=new ae(w,I);return L.position.set(P,O,Q),v.add(L),L}let h={a:0,b:0,sa:0,sb:0,msg:"",until:0,over:!1};try{let v=JSON.parse(localStorage.getItem("fonger-score")||"null");if(v&&typeof v.a==="number")h=Object.assign(h,v,{msg:"",until:0})}catch(v){}let m=()=>{try{localStorage.setItem("fonger-score",JSON.stringify({a:h.a,b:h.b,sa:h.sa,sb:h.sb,over:h.over}))}catch(v){}},g={"sc:a":[0.21,0.4,0.4,0.78],"sc:b":[0.79,0.4,0.4,0.78],"sc:am":[0.09,0.89,0.13,0.16],"sc:bm":[0.91,0.89,0.13,0.16],"sc:r":[0.5,0.86,0.2,0.17]};for(let v in g){let[w,I,P,O]=g[v];dn(v,P*6.2,O*2.51,0.12,n+3.1-w*6.2,6.255-I*2.51,s-0.1,16747066,jt,26,!1)}co.push({k:"score",x:9999,z:9999,r:1,c:"#ff8a3a",label:"SCORE",nolabel:!0,ring:!1,pos:[0,1,0],sc:0.6}),window.__scoreSum=()=>({t:"SKÓRE",s:"",k:[]});let x={0:"abcdef",1:"bc",2:"abdeg",3:"abcdg",4:"bcfg",5:"acdfg",6:"acdefg",7:"abc",8:"abcdefg",9:"abcdfg"};function d(v,w,I,P,O,Q,L){let K=I*0.18,D=O==null?"":x[O],N=[v+K*0.7,I-K*1.4,K],se=P/2-K*1.15,Y={a:[N[0],w,N[1],K],g:[N[0],w+P/2-K/2,N[1],K],d:[N[0],w+P-K,N[1],K],f:[v,w+K*0.6,K,se],b:[v+I-K,w+K*0.6,K,se],e:[v,w+P/2+K*0.55,K,se],c:[v+I-K,w+P/2+K*0.55,K,se]};for(let W in Y){let ee=Y[W],de=D.indexOf(W)>=0&&!L;a.fillStyle=de?Q:"rgba(255,140,30,0.06)",a.shadowColor=de?Q:"transparent",a.shadowBlur=de?26:0,a.beginPath(),a.roundRect(ee[0],ee[1],ee[2],ee[3],K*0.4),a.fill()}a.shadowBlur=0}let p=(v,w,I,P)=>{let K=v-130-13;d(K,w,130,250,Math.floor(I/10)%10,P,I<10),d(K+130+26,w,130,250,I%10,P)},y="";function M(v){a.clearRect(0,0,1344,544),a.fillStyle="#06070a",a.fillRect(0,0,1344,544);for(let[I,P]of[["sc:a",336],["sc:b",1008]])if(v===I&&!h.over)a.fillStyle="rgba(255,138,58,0.10)",a.fillRect(P-320,14,640,400),a.strokeStyle="rgba(255,138,58,0.7)",a.lineWidth=4,a.strokeRect(P-320,14,640,400);a.font="700 46px Arial, sans-serif",a.textAlign="center",a.fillStyle="#e8e8ee",a.fillText("DOMÁCÍ",336,74),a.fillText("HOSTÉ",1008,74),p(336,108,h.a,"#ffb020"),p(1008,108,h.b,"#ffb020"),a.fillStyle="#9aa0ad",a.font="700 34px Arial",a.fillText("SETY",672,74),d(592,108,64,120,h.sa,"#ff4a3a"),d(688,108,64,120,h.sb,"#ff4a3a"),a.fillStyle="#ff4a3a",a.fillRect(666,150,12,12),a.fillRect(666,186,12,12);let w=(I,P,O,Q,L,K)=>{a.fillStyle=v===I?"rgba(255,138,58,0.35)":"rgba(255,255,255,0.07)",a.strokeStyle=v===I?"#ff8a3a":"rgba(255,255,255,0.3)",a.lineWidth=3,a.beginPath(),a.roundRect(P-Q/2,O-L/2,Q,L,24),a.fill(),a.stroke(),a.fillStyle="#fff",a.font="700 40px Arial",a.fillText(K,P,O+14)};if(w("sc:am",120,484,150,74,"− 1"),w("sc:bm",1224,484,150,74,"− 1"),w("sc:r",672,468,280,74,"NOVÁ HRA"),a.font="600 26px Arial",a.fillStyle="#7f8594",a.fillText("první na 21, rozdíl 2 · vítěz setu = 2 sety",672,276),a.fillText("namiř a stiskni E",672,312),Date.now()<h.until)a.fillStyle="rgba(0,0,0,0.72)",a.fillRect(0,150,1344,160),a.fillStyle="#ffd24a",a.font="800 110px Arial",a.shadowColor="#ffb020",a.shadowBlur=30,a.fillText(h.msg,672,270),a.shadowBlur=0;l.needsUpdate=!0}let b=(v,w)=>v>=21&&v-w>=2||v>=30,T=()=>window.__sfx;function S(v,w){if(h.over){if(Date.now()>h.until)_();return}let I=v;if(h[I]=Math.max(0,h[I]+w),w>0)T()&&T().beep(I==="a"?1040:780,0.09);else T()&&T().beep(330,0.1);if(w>0&&b(h[I],h[I==="a"?"b":"a"])){h["s"+I]++;let P=I==="a"?"DOMÁCÍ":"HOSTÉ";if(h["s"+I]>=2)h.over=!0,h.msg=P+" VYHRÁLI!",h.until=Date.now()+5000,T()&&T().fanfare();else h.msg="SET · "+P,h.until=Date.now()+2500,T()&&T().beep(1320,0.3,1,0.1,"triangle"),setTimeout(()=>{h.a=0,h.b=0,m()},2500)}m()}function _(){h={a:0,b:0,sa:0,sb:0,msg:"NOVÁ HRA",until:Date.now()+1200,over:!1},m(),T()&&T().buzzer()}window.__score=(v)=>{if(T()&&T().unlock(),v==="sc:a")S("a",1);else if(v==="sc:b")S("b",1);else if(v==="sc:am")S("a",-1);else if(v==="sc:bm")S("b",-1);else if(v==="sc:r")_()},M(null),ho.push(()=>{let v=typeof It==="string"&&It.startsWith("sc:")?It:null,w=v+"|"+h.a+"|"+h.b+"|"+h.sa+"|"+h.sb+"|"+(Date.now()<h.until?h.msg:"");if(w!==y)y=w,M(v);if(v&&ai&&ai.k==="score"){let I=document.querySelector("#prompt .tp"),P=v==="sc:r"?"NOVÁ HRA":v==="sc:am"||v==="sc:bm"?"ODEBRAT BOD":"PŘIDAT BOD";if(I&&I.textContent!==P)I.textContent=P}})})();(function(){let t=[],i=(p,y,M,b)=>{let T=[-Math.sin(M),-Math.cos(M)];t.push({x:p,z:y,y:0.4675,yaw:M,ex:p+T[0]*0.8,ez:y+T[1]*0.8,name:b})};for(let p of[-6,-2,2,6])for(let y of[-0.6,0.6])i(nt+11.3,Ut+p+y,Math.PI/2,"LAVIČKA");for(let p of Qn)for(let y of[-0.4,0.4])i(p+y,Ut+9.3,0,"LAVIČKA");let n=!1;function r(){if(n||!tp)return;if(n=!0,Ot.v===3){let M=[-(Ot.HALF-1),Ot.AC];for(let b=0;b<Ot.N;b++)for(let T=0;T<2;T++)for(let S=0;S<Ot.SEATS;S++){let _=M[T]+0.25+S*Ot.PITCH;if(Ot.X0+b*Ot.D+Ot.SOFF+0.22>11.770000000000001&&[-10,-7.5,-5,-2.5,0,2.5,5,7.5,10].some((O)=>Math.abs(_-O)<0.4))continue;let w=nt-(Ot.X0+b*Ot.D+Ot.SOFF),I=Ut+M[T]+0.25+S*Ot.PITCH,P=Ot.H*(b+1)+Ot.T;t.push({x:w,z:I,y:P+0.4625,fy:P,yaw:-Math.PI/2,ex:w+0.5,ez:I,name:"SEDAČKA "+"ABCDE"[b]+(T*Ot.SEATS+S+1),tr:!0})}return}let p=Math.floor(16.8)-1;for(let y=0;y<Ot.N;y++)for(let M=0;M<p;M++){let b=nt-(Ot.X0+y*Ot.D+0.5),T=Ut-4.2+0.5+M*0.5;t.push({x:b,z:T,y:Ot.H*(y+1)+0.445,yaw:-Math.PI/2,ex:b+0.9,ez:T,name:"TRIBUNA"})}}let s={k:"sit",x:9999,z:9999,r:1.6,c:"#9ad0ff",label:"SIT",nolabel:!0,ring:!1,pos:[0,1,0],sc:0.6};co.push(s);let o=new ae(new bt(0.44,0.012,0.46),new _t({color:10478847,transparent:!0,opacity:0.6,depthWrite:!1}));o.visible=!1,o.renderOrder=5,jt.add(o),window.__sitName=()=>(l||a||{name:""}).name;let a=null,l=null,c=0,f=0,u={x:0,z:0},h=performance.now(),m=!1,g=(p)=>p*p*(3-2*p);window.__sitting=()=>f===1,window.__sitSum=()=>({t:(l||a||{name:"LAVIČKA"}).name,s:"",k:[]}),window.__sitDY=()=>{if(!a)return 0;let p=g(c),y=Q1+ea+Ds;return(a.y+0.78-y)*p};let x=()=>{let p=ai;if(ai=null,p)tu(p.k)};function d(){if(f===0)return;f=0,window.__sfx&&window.__sfx.stand(),x()}window.__sitToggle=()=>{if(f===1)return d();if(!l)return;a=l,f=1,c=Math.max(c,0.0001),u={x:Ae.x,z:Ae.z},m=!1,Ae.vx=Ae.vz=0,window.__sfx&&window.__sfx.sit(),x()},ho.push(()=>{let p=performance.now(),y=Math.min(0.1,(p-h)/1000);if(h=p,r(),!a){let T=-Math.sin(Ae.yaw),S=-Math.cos(Ae.yaw),_=1e9,v=null;for(let w of t){let I=w.x-Ae.x,P=w.z-Ae.z,O=Math.hypot(I,P),Q=w.fy!=null?w.fy:w.y>0.5?w.y-0.445:0;if(Math.abs(ea-Q)>0.25)continue;let L;if(w.tr){if(O>1.5)continue;let K=O<0.45?1:(I*T+P*S)/O;if(K<0.4)continue;L=O+(1-K)*1.6}else{if(O>1.15)continue;L=O}if(L<_)_=L,v=w}if(v!==l){if(l=v,ai&&ai.k==="sit")x()}if(s.x=l?l.x:9999,s.z=l?l.z:9999,o.visible=!!(l&&l.tr),o.visible)o.position.set(l.x,l.y+0.014,l.z),o.material.opacity=0.5+0.25*Math.sin(p/220);return}o.visible=!1,s.x=a.x,s.z=a.z,c=Math.max(0,Math.min(1,c+(f?1:-1)*y*2));let M=g(c),b=f?u:{x:a.ex,z:a.ez};if(Ae.x=b.x+(a.x-b.x)*M,Ae.z=b.z+(a.z-b.z)*M,Ae.vx=Ae.vz=0,f&&!m){let T=a.yaw-Ae.yaw;if(T=Math.atan2(Math.sin(T),Math.cos(T)),Ae.yaw+=T*Math.min(1,y*5),Math.abs(T)<0.03)m=!0}if(f&&c>0.7&&(vn.KeyW||vn.KeyA||vn.KeyS||vn.KeyD||vn.ArrowUp||vn.ArrowDown||Math.hypot(oo.x,oo.y)>0.35||Ds>0.001))d();if(!f&&c<=0)a=null,l=null,x()})})();(function(){let t=Qn[0],i=Ut,n=i+3.35,c=(F,z)=>F+Math.random()*(z-F),f=(F,z,ce)=>Math.max(z,Math.min(ce,F)),u=(F,z,ce)=>F+(z-F)*ce,h=(F)=>(F=f(F,0,1),F*F*(3-2*F)),m=()=>window.__sfx,g=(F,z=0.5,ce=0,Ue)=>new yt(Object.assign({color:F,roughness:z,metalness:ce},Ue||{})),x=(F,z,ce,Ue=0,Fe=0,Qe=0)=>{let qe=new ae(z,ce);return qe.position.set(Ue,Fe,Qe),F.add(qe),qe},d="https://script.google.com/macros/s/AKfycbxl-aI9eXR_ob9iLQ1Eyx6wLJiziYzX7YgaMzbmX6ZUvbcx71IPSfqTEavpP54zErUS/exec",p="smash",y=30,M=28;function b(F,z,ce,Ue){let Fe=ce*Math.PI/180,qe=0,G=F,ut=z*Math.cos(Fe),qt=z*Math.sin(Fe),xi=0,Qt=null,At=F;while(xi<7){let dt=Math.hypot(ut,qt);ut-=0.21215397923875437*dt*ut*0.011111111111111112,qt+=(-9.81-0.21215397923875437*dt*qt)*0.011111111111111112;let Vt=qe+ut*0.011111111111111112,Si=G+qt*0.011111111111111112;if(xi+=0.011111111111111112,Ue!=null&&Qt===null&&qe<Ue&&Vt>=Ue)Qt=G+(Si-G)*(Ue-qe)/Math.max(0.000001,Vt-qe);if(Si<=0.02)return qe+=(Vt-qe)*(G-0.02)/Math.max(0.000001,G-Si),{range:qe,t:xi,yNet:Qt,apex:At};if(qe=Vt,G=Si,G>At)At=G}return{range:qe,t:xi,yNet:Qt,apex:At}}function T(F,z,ce,Ue,Fe){let Qe=Ue,qe=Fe;if(b(F,qe,z).range<ce)return qe;for(let G=0;G<14;G++){let ut=(Qe+qe)/2;if(b(F,ut,z).range<ce)Qe=ut;else qe=ut}return(Qe+qe)/2}function S(F,z,ce,Ue,Fe){for(let Qe=Ue;Qe<=Fe;Qe+=0.5)if(b(F,z,Qe).range>=ce)return Qe;return Fe}function _(F,z,ce,Ue,Fe,Qe){let qe=ce;while(qe<Qe&&(b(F,z,qe,Ue).yNet??-1)<Fe)qe+=0.5;return qe}let v=2.1,w=g(14267004,0.8),I=g(15985884,0.7),P=g(16513004,0.85,0,{side:Kt}),O=g(13214282,0.6);function Q(){let F=[],z=[];for(let Fe=0;Fe<16;Fe++){let Qe=Fe/16*Math.PI*2,qe=Math.cos(Qe),G=Math.sin(Qe),ut=-G,qt=qe,ii=F.length/3;F.push(qe*0.0125-ut*0.0042,0.026,G*0.0125-qt*0.0042,qe*0.0125+ut*0.0042,0.026,G*0.0125+qt*0.0042,qe*0.0335+ut*0.0078,0.089,G*0.0335+qt*0.0078,qe*0.0335-ut*0.0078,0.089,G*0.0335-qt*0.0078),z.push(ii,ii+1,ii+2,ii,ii+2,ii+3)}let Ue=new et;return Ue.setAttribute("position",new Be(F,3)),Ue.setIndex(z),Ue.computeVertexNormals(),Ue}let L=Q(),K=new yn(0.0135,12,8),D=new Pt(0.0136,0.0136,0.0045,12),N=new An(0.0225,0.0007,4,18),se=new An(0.0335,0.0011,4,18);function Y(){let F=new Ze,z=x(F,K,w,0,0.0115,0);z.scale.y=0.9,x(F,D,I,0,0.0245,0),x(F,L,P);let ce=x(F,N,O,0,0.052,0);ce.rotation.x=Math.PI/2;let Ue=x(F,se,I,0,0.089,0);return Ue.rotation.x=Math.PI/2,F.scale.setScalar(v),F}let W=(()=>{let F=document.createElement("canvas");F.width=F.height=64;let z=F.getContext("2d"),ce=z.createRadialGradient(32,32,2,32,32,30);return ce.addColorStop(0,"rgba(0,0,0,0.55)"),ce.addColorStop(1,"rgba(0,0,0,0)"),z.fillStyle=ce,z.fillRect(0,0,64,64),new zi(F)})(),ee=new ei(0.34,0.34).rotateX(-Math.PI/2),de=16,X=[];for(let F=0;F<9;F++){let z=Y();z.visible=!1,jt.add(z);let ce=new ae(ee,new _t({map:W,transparent:!0,depthWrite:!1}));ce.visible=!1,ce.position.y=0.012,jt.add(ce);let Ue=new et;Ue.setAttribute("position",new pi(new Float32Array(de*3),3));let Fe=new jn(Ue,new Xi({color:13625087,transparent:!0,opacity:0,toneMapped:!1}));Fe.frustumCulled=!1,Fe.visible=!1,jt.add(Fe);let Qe=new ae(new Ss(0.2,0.3,28).rotateX(-Math.PI/2),new _t({color:16769898,transparent:!0,opacity:0,depthWrite:!1,toneMapped:!1}));Qe.visible=!1,Qe.position.y=0.025,jt.add(Qe),X.push({lm:Qe,mesh:z,blob:ce,trail:Fe,on:!1,pos:new R,prev:new R,vel:new R,st:"idle",hitDone:!1,rest:0,trailPts:[],kind:"",netHit:!1,crossed:!1,shot:null})}let oe=()=>X.filter((F)=>F.on&&(F.st==="in"||F.st==="out")),ye=new Ze;ye.position.set(t,0,n),jt.add(ye);let ve=g(1381914,0.5,0.2),ke=g(2237480,0.45,0.3),Ne=g(9212315,0.35,0.8),xt=g(12173000,0.3,0.85),Xe=g(723724,0.9),Ye=g(14168607,0.5,0.2),Tt=new _t({color:4063098,toneMapped:!1}),ge=[];function Ee(F,z,ce,Ue,Fe,Qe,qe,G){return x(F,new Pt(z,ce,Ue,12),Fe,Qe,qe,G)}function Ce(F,z,ce,Ue,Fe){let Qe=new R().subVectors(ce,z),qe=Qe.length(),G=x(F,new Pt(Ue,Ue,qe,8),Fe);return G.position.copy(z).addScaledVector(Qe,0.5),G.quaternion.setFromUnitVectors(new R(0,1,0),Qe.normalize()),G}let Ve=new R(0,0.88,0);for(let F=0;F<3;F++){let z=Math.PI/2+F*Math.PI*2/3,ce=new R(Math.cos(z)*0.66,0.075,Math.sin(z)*0.66);Ce(ye,Ve,ce,0.016,ke);let Ue=x(ye,new Pt(0.045,0.045,0.035,14),Xe,ce.x,0.045,ce.z);Ue.rotation.z=Math.PI/2,Ue.rotation.y=-z,x(ye,new Pt(0.02,0.02,0.05,8),Ne,ce.x,0.095,ce.z),ge.push(ce)}for(let F=0;F<3;F++){let z=new R().lerpVectors(Ve,ge[F],0.42),ce=new R().lerpVectors(Ve,ge[(F+1)%3],0.42);Ce(ye,z,ce,0.008,Ne)}Ee(ye,0.05,0.05,0.12,ve,0,0.88,0),Ee(ye,0.026,0.026,0.62,xt,0,1.15,0);let We=new Ze;We.position.set(0.032,1.1,0),ye.add(We),x(We,new bt(0.07,0.09,0.07),ve,0.02,0,0);{let F=Ee(We,0.007,0.007,0.15,Ne,0.07,0,0);F.rotation.z=Math.PI/2}x(We,new bt(0.012,0.1,0.012),Ne,0.145,-0.04,0);{let F=x(We,new yn(0.016,10,8),Ye,0.145,-0.1,0)}Ee(ye,0.04,0.04,0.06,ve,0,1.42,0);let st=Ee(ye,0.019,0.019,0.5,xt,0,1.45,0),Oe=new Ze;Oe.position.set(0,1.72,0),ye.add(Oe),x(Oe,new bt(0.24,0.3,0.3),ve,0,0.15,0),x(Oe,new bt(0.26,0.04,0.32),ke,0,0.31,0),x(Oe,new bt(0.2,0.06,0.04),Ye,0,0.1,0.152);let Lt=x(Oe,new yn(0.011,8,6),Tt,0.123,0.24,0.07),wt=document.createElement("canvas");wt.width=128,wt.height=64;let Dt=wt.getContext("2d"),H=new zi(wt);x(Oe,new ei(0.1,0.05),new _t({map:H,toneMapped:!1}),0,0.24,0.1535);let Bt=new Ze;Bt.position.set(0,0.32,0.02),Oe.add(Bt);let Rt=(()=>{let F=document.createElement("canvas");F.width=64,F.height=128;let z=F.getContext("2d");z.fillStyle="#efe9d8",z.fillRect(0,0,64,128);for(let Ue=0;Ue<8;Ue++)z.fillStyle=Ue%2?"#f9f6ec":"#d9d2bd",z.fillRect(0,Ue*16,64,11),z.fillStyle="#c9a24a",z.fillRect(0,Ue*16+11,64,2);let ce=new zi(F);return ce.wrapS=ce.wrapT=Nn,ce.repeat.set(1,4),ce})();x(Bt,new Pt(0.115,0.115,0.66,20,1,!0),new yt({color:13624304,transparent:!0,opacity:0.16,roughness:0.1,side:Kt,depthWrite:!1}),0,0.33,0);for(let F=0;F<6;F++){let z=F/6*Math.PI*2;Ee(Bt,0.0045,0.0045,0.66,xt,Math.cos(z)*0.118,0.33,Math.sin(z)*0.118)}x(Bt,new An(0.118,0.007,6,24),xt,0,0.66,0).rotation.x=Math.PI/2,x(Bt,new An(0.118,0.007,6,24),xt,0,0.01,0).rotation.x=Math.PI/2,x(Bt,new Pt(0.12,0.12,0.02,20),ve,0,0.665,0);let si=[];for(let F=0;F<3;F++){let z=F/3*Math.PI*2+0.5,ce=x(Bt,new Pt(0.04,0.04,0.6,14),new yt({map:Rt,roughness:0.8}),Math.cos(z)*0.058,0.31,Math.sin(z)*0.058);si.push(ce)}let Le=new Ze;Le.position.set(0,0.09,-0.19),Oe.add(Le);{let F=Ee(Le,0.052,0.058,0.2,ke,0,0,-0.07);F.rotation.x=Math.PI/2,x(Le,new bt(0.2,0.09,0.12),ve,0,0,0.04)}let Ht=[];for(let F of[-1,1]){let z=new Ze;z.position.set(F*0.082,0,-0.1),Le.add(z),x(z,new Pt(0.06,0.06,0.034,20),Xe),x(z,new Pt(0.03,0.03,0.038,12),Ye);for(let ce=0;ce<4;ce++){let Ue=x(z,new bt(0.1,0.04,0.008),Ne);Ue.rotation.y=ce*Math.PI/4}Ht.push(z)}x(Le,new bt(0.03,0.12,0.03),ke,0,0.08,-0.02);let q=new R(0,0,-0.24),te={mast:0,yaw:0,pitch:0.7,tYaw:0,tPitch:0.7,wheel:0,spin:0,recoil:0},Je=null;function C(F){let z=u(1.42,1.8,h(F));if(Oe.position.y=z+0.27,Je){Je.scale.y=Math.max(0.05,(Oe.position.y+0.02-1.2)/0.49);return}st.scale.y=(z+0.1-1.2)/0.5,st.position.y=1.2+(z+0.1-1.2)/2}C(0);function E(F,z,ce){Dt.fillStyle="#071207",Dt.fillRect(0,0,128,64),Dt.fillStyle="#6dff8c",Dt.font="700 30px monospace",Dt.textAlign="center",Dt.fillText(F,64,30),Dt.font="700 15px monospace",Dt.fillStyle="#3fd568",Dt.fillText(z,64,56),H.needsUpdate=!0}E("READY","PUSUN MINI"),dn("st:feed",1.2,2.6,1.2,t,1.3,n,16765562,jt,24,!1),co.push({k:"feed",x:t,z:i-3.3,r:6,c:"#ffd27a",label:"FEED",nolabel:!0,ring:!1,pos:[t,1,n],sc:0.6});let U=new ae(new Ss(0.62,0.9,40).rotateX(-Math.PI/2),new _t({color:16762938,transparent:!0,opacity:0,depthWrite:!1,toneMapped:!1,side:Kt}));U.position.y=0.02,U.visible=!1,jt.add(U);let me=new ae(new kr(0.62,32).rotateX(-Math.PI/2),new _t({color:16762938,transparent:!0,opacity:0,depthWrite:!1,toneMapped:!1}));me.position.y=0.019,me.visible=!1,jt.add(me);let le={x:t,z:i+3,t:0},Te=document.getElementById("ui")||document.body,Re=(F,z)=>(F.style.cssText=z,F),J=Re(document.createElement("div"),"position:fixed;left:50%;top:12px;transform:translateX(-50%);z-index:8;display:none;gap:10px;align-items:stretch;pointer-events:none;font:700 14px Arial,sans-serif;color:#fff"),fe=(F,z)=>{let ce=Re(document.createElement("div"),"min-width:86px;padding:6px 12px;border-radius:12px;background:rgba(10,11,16,.72);border:1px solid rgba(255,138,58,.55);text-align:center;backdrop-filter:blur(3px)");return ce.innerHTML=`<div style="font-size:10px;letter-spacing:.14em;color:#ffb27a">${z}</div><div id="${F}" style="font-size:26px;line-height:1.05">0</div>`,J.appendChild(ce),ce};fe("fdT","ČAS"),fe("fdS","SKÓRE"),fe("fdC","COMBO"),fe("fdN","KOŠÍČKY"),Te.appendChild(J);let Pe=J.querySelector("#fdT"),B=J.querySelector("#fdS"),ue=J.querySelector("#fdC"),he=J.querySelector("#fdN"),pe=Re(document.createElement("div"),"position:fixed;left:50%;top:34%;transform:translate(-50%,-50%);z-index:8;display:none;text-align:center;pointer-events:none;font:900 88px Arial Black,Arial,sans-serif;color:#ffd24a;text-shadow:0 0 28px #ff8a1f,0 4px 0 #6a2a00");Te.appendChild(pe);let be=Re(document.createElement("div"),"position:fixed;left:50%;top:58%;transform:translate(-50%,0);z-index:8;pointer-events:none;text-align:center;font:900 30px Arial,sans-serif;color:#fff;text-shadow:0 2px 8px #000;opacity:0;transition:opacity .25s");Te.appendChild(be);let Me=Re(document.createElement("div"),"position:fixed;left:50%;top:50%;width:34px;height:34px;margin:-17px 0 0 -17px;border:2px solid rgba(255,255,255,.55);border-radius:50%;z-index:7;display:none;pointer-events:none;transition:border-color .1s,box-shadow .1s");Te.appendChild(Me);let tt=Re(document.createElement("div"),"position:fixed;left:50%;bottom:22%;transform:translateX(-50%);z-index:9;padding:9px 16px;border-radius:12px;background:rgba(10,11,16,.85);border:1px solid rgba(255,138,58,.6);color:#fff;font:600 15px Arial,sans-serif;display:none;pointer-events:none;text-align:center;max-width:86vw");Te.appendChild(tt);let rt=0,He=(F,z=2600)=>{tt.textContent=F,tt.style.display="block",clearTimeout(rt),rt=setTimeout(()=>tt.style.display="none",z)},ft=0,St=(F,z="#fff",ce=900)=>{be.innerHTML=F,be.style.color=z,be.style.opacity=1,clearTimeout(ft),ft=setTimeout(()=>be.style.opacity=0,ce)},Ge=(F,z,ce,Ue)=>{let Fe=Re(document.createElement("div"),`position:fixed;right:${z}px;bottom:${ce}px;width:74px;height:74px;border-radius:50%;z-index:9;display:none;place-items:center;font:800 14px Arial,sans-serif;color:#fff;background:rgba(10,11,16,.55);border:2px solid ${Ue};touch-action:none;user-select:none;text-align:center`);return Fe.textContent=F,Te.appendChild(Fe),Fe},$t=Ge("FOREHAND",22,150,"#ffb27a"),ci=Ge("BACKHAND",106,118,"#7ab8ff"),Ci=Ge("ODLOŽIT",22,245,"#9aa0ad");$t.style.fontSize=ci.style.fontSize="11px",Ci.style.width=Ci.style.height="56px",Ci.style.fontSize="10px",$t.addEventListener("touchstart",(F)=>{F.preventDefault(),ie(0)},{passive:!1}),ci.addEventListener("touchstart",(F)=>{F.preventDefault(),ie(1)},{passive:!1}),Ci.addEventListener("touchstart",(F)=>{F.preventDefault(),Fs()},{passive:!1}),jt.add(Fi);let Vi=new Ze;Vi.visible=!1,Fi.add(Vi);let yi=-1,Vn=null,po=[[0,0.3,-0.32,-0.56,-1,0,0.25],[0.08,0.38,-0.05,-0.3,0.35,0,-0.3],[0.15,0.14,0.12,-0.8,-1.25,0,0.1],[0.26,0,-0.28,-0.68,-2.05,0,0.5],[0.5,0.3,-0.32,-0.56,-1,0,0.25]],cs=[[0,0.3,-0.32,-0.56,-1,0,0.25],[0.07,-0.36,-0.1,-0.34,0.1,0,0.4],[0.15,-0.2,0.1,-0.74,-1.1,0,-0.18],[0.26,-0.02,-0.26,-0.66,-1.9,0,-0.62],[0.5,0.3,-0.32,-0.56,-1,0,0.25]],ia=!1;function mo(F){let z=ia&&F>0?cs:po,ce=z[0],Ue=z[z.length-1];for(let qe=1;qe<z.length;qe++)if(F<=z[qe][0]){ce=z[qe-1],Ue=z[qe];break}let Fe=h((F-ce[0])/Math.max(0.000001,Ue[0]-ce[0])),Qe=(qe)=>u(ce[qe],Ue[qe],Fe);Vi.position.set(Qe(1),Qe(2),Qe(3)),Vi.rotation.set(Qe(4),Qe(5),Qe(6))}function ul(F){if(yi>=0||!window.__bagRacks)return!1;Vn=window.__bagRacks[F].clone(!0);let z=[];return Vn.traverse((ce)=>{if(ce.userData&&ce.userData.isHit)z.push(ce);if(ce.isLineSegments||ce.userData.itemLine)z.push(ce);if(ce.isMesh&&ce.material)ce.material=ce.material.clone(),ce.material.clippingPlanes=null,ce.material.depthTest=!1,ce.material.emissive&&ce.material.emissive.setHex(0),ce.renderOrder=20}),z.forEach((ce)=>ce.parent&&ce.parent.remove(ce)),Vn.position.set(0,0,0),Vn.rotation.set(0,0,0),Vn.scale.setScalar(1),Vn.visible=!0,Vi.clear(),Vi.add(Vn),Vi.visible=!0,yi=F,window.__bagRacketSet(F,!0),mo(0),m()&&m().click(0,1.2),m()&&m().scrape(0.02,0.5),He((window.GEAR&&window.GEAR.rackets&&window.GEAR.rackets[F]?window.GEAR.rackets[F].name:"Raketa")+" v ruce · LMB forehand · PMB backhand · Q odložit · pak E u stroje",3600),na(),!0}function Fs(){if(yi<0||tr())return;window.__bagRacketSet(yi,!1),yi=-1,Vi.visible=!1,Vi.clear(),Vn=null,m()&&m().click(0,0.8),He("Raketa zpátky v bagu",1500),na()}addEventListener("keydown",(F)=>{if(F.code==="KeyQ"&&!F.repeat&&!Kn)Fs()});let xe={st:"idle",t:0,score:0,combo:0,maxCombo:0,hits:0,ins:0,fed:0,planned:0,total:0,best:0,missed:0,nextFire:0,interval:2.25,plan:null,cnt:3,endT:0,bestKmh:0,ringT:0,swings:0},tr=()=>xe.st==="count"||xe.st==="run"||xe.st==="wrap",Kn=!1,nu=()=>Ae.z<i-0.55&&Ae.z>i-6.7-1.6&&Math.abs(Ae.x-t)<4.55;function na(){let F=ai;if(ai=null,F)tu(F.k)}window.__feedSum=()=>({t:"SMASH CHALLENGE",s:yi>=0?"30 s · odpal co nejvíc košíčků ze stroje":"Nejdřív si vezmi raketu z bagu (otevři bag, E na raketu)",k:[["\uD83C\uDFF8","LMB FOREHAND"],["↩️","PMB BACKHAND"],["\uD83C\uDFC6","REKORD "+(xo()||"–")]]}),window.__feedPrompt=()=>yi>=0?"SPUSTIT":"POTŘEBUJEŠ RAKETU",window.__feedBusy=()=>tr()||Kn,window.__fdInteract=()=>{if(Kn)return!0;if(tr())return!0;if(typeof It==="string"&&(It==="bg:r1"||It==="bg:r2")&&window.__bagIsOpen&&window.__bagIsOpen()){let F=It==="bg:r1"?0:1;if(yi<0&&!window.__racketGone[F])return ul(F),!0;if(yi>=0)return He("Už máš raketu v ruce (Q ji odloží)",1800),!0}if(It==="st:feed"||!It&&ai&&ai.k==="feed")return dl(),!0;return!1};function dl(){if(xe.st!=="idle")return;if(yi<0){He("Vezmi si raketu z bagu: otevři bag (E) a znovu E na raketu"),m()&&m().miss();return}if(!nu()){He("Postav se na svoji polovinu kurtu (před síť)"),m()&&m().miss();return}m()&&m().unlock(),Object.assign(xe,{st:"count",t:0,score:0,combo:0,maxCombo:0,hits:0,ins:0,fed:0,missed:0,interval:2.9,plan:null,cnt:4,bestKmh:0,ringT:0,swings:0,nextFire:1,planned:0}),xe.total=12,si.forEach((F)=>F.visible=!0),E("3","GET READY"),J.style.display="flex",Me.style.display="block",Pi(),m()&&m().motor(!0),no.style.visibility="hidden",Qo.style.visibility="hidden",te.tPitch=0.75,te.tYaw=0,U.visible=me.visible=!1}function ru(){xe.st="end",xe.endT=0,m()&&m().motor(!1),U.visible=me.visible=!1,Me.style.display="none",E(String(xe.score),"SCORE"),te.spin=0,pe.style.display="block",pe.style.fontSize="64px",pe.innerHTML='KONEC<br><span style="font-size:36px">'+xe.score+" bodů</span>",m()&&(xe.score>0?m().fanfare():m().buzzer()),setTimeout(()=>{pe.style.display="none",oy()},1700)}let su=5.6;function hf(){let F=Math.random(),z,ce;if(F<0.45)z=c(47,55),ce=c(2.4,6);else if(F<0.8)z=c(36,44),ce=c(2,5.6);else z=c(24,30),ce=c(3,6);let Ue=t+c(-2.3,2.3),Fe=i-ce,Qe=Oe.position.y+0.1,qe=Ue-t,G=Fe-n,ut=Math.hypot(qe,G),qt=0;for(let At=0;At<14;At++){if(qt=T(Qe,z,ut,8,46),b(Qe,qt,z).apex<=su||z<=18)break;z-=2.5}let xi=new R(qe/ut,0,G/ut),Qt=z>45?"lift":z>32?"lob":"drive";return{e:z,v:qt,dir:xi,tx:Ue,tz:Fe,kind:Qt}}function uf(F){te.tYaw=Math.atan2(-F.dir.x,-F.dir.z),te.tPitch=F.e*Math.PI/180}let A=new R;function k(F){let z=X.find((Fe)=>!Fe.on);if(!z)return;Le.updateWorldMatrix(!0,!1),A.copy(q).applyMatrix4(Le.matrixWorld);let ce=F.e*Math.PI/180,Ue=Math.cos(ce);z.on=!0,z.st="in",z.hitDone=!1,z.netHit=!1,z.crossed=!1,z.rest=0,z.kind=F.kind,z.shot=null,z.trailPts.length=0,z.born=xe.t,z.pos.copy(A),z.prev.copy(A),z.vel.set(F.dir.x*F.v*Ue,F.v*Math.sin(ce),F.dir.z*F.v*Ue),z.lx=F.tx,z.lz=F.tz,z.lm.position.set(F.tx,0.025,F.tz),z.lm.visible=!0,z.machHit=!1,z.mesh.visible=!0,z.blob.visible=!0,z.trail.visible=!1,xe.fed++,te.recoil=1,te.spin=1,m()&&m().feedFire(),E(String(xe.total-xe.fed),"LEFT")}let j={t:-1,btn:0,cand:null,resolved:!1};function ie(F){if(yi<0||j.t>=0||Kn||window.__sitting&&window.__sitting())return;j.t=0,j.btn=F,ia=F===1,j.cand=null,j.resolved=!1,xe.swings++,m()&&m().swing(0.8)}window.addEventListener("mousedown",(F)=>{if(!gr||yi<0||Kn||document.pointerLockElement!==zn||Yn.isOpen())return;if(F.button!==0&&F.button!==2)return;F.stopImmediatePropagation(),F.preventDefault(),ie(F.button===2?1:0)},!0),addEventListener("contextmenu",(F)=>{if(yi>=0)F.preventDefault()});let re=new R,ze=new R,at=new R,Ie=new R;function je(F){let z=Math.cos(Ae.pitch);return re.set(-Math.sin(Ae.yaw)*z,Math.sin(Ae.pitch),-Math.cos(Ae.yaw)*z),ze.set(Math.cos(Ae.yaw),0,-Math.sin(Ae.yaw)),at.copy(Fi.position).addScaledVector(re,1.1).addScaledVector(ze,F?-0.25:0.25).add(Ie.set(0,-0.1,0))}function ht(F,z,ce){Ie.subVectors(z,F);let Ue=Ie.lengthSq(),Fe=Ue>0.000000001?f(((ce.x-F.x)*Ie.x+(ce.y-F.y)*Ie.y+(ce.z-F.z)*Ie.z)/Ue,0,1):0;return Math.hypot(F.x+Ie.x*Fe-ce.x,F.y+Ie.y*Fe-ce.y,F.z+Ie.z*Fe-ce.z)}let Ct=0.85;function zt(F){let z=F.s;if(z.hitDone)return;z.hitDone=!0,z.st="out",xe.hits++,z.pos.copy(F.cp),z.prev.copy(F.cp);let{d:ce,h:Ue}=F,Fe=ce<0.22?"PERFECT":ce<0.4?"GOOD":"EDGE",Qe=Fe==="PERFECT"?1:Fe==="GOOD"?0.62:0.2,qe=(Fe==="PERFECT"?0.025:Fe==="GOOD"?0.07:0.17)*c(-1,1)*(F.btn===1?1.3:1),G=-Math.sin(Ae.yaw),ut=-Math.cos(Ae.yaw),qt=Math.atan2(G,ut)+qe;if(G=Math.sin(qt),ut=Math.cos(qt),ut<0.35){let gl=Math.atan2(G,0.35);G=Math.sin(gl),ut=Math.cos(gl)}let xi=z.pos.x,Qt=z.pos.z,At=Math.max(0.3,(i-Qt)/Math.max(0.2,ut)),Vt=Ae.pitch<-0.07?f((Fi.position.y-ea)/Math.tan(-Ae.pitch),1.5,16):null,Si=Math.max(0.35,Ue),ii,Zi,En,sn,ml=F.btn===1,ay=ml?0.88:1;if(!ml&&Si>1.7)if(Ae.pitch<-0.2)ii="SMASH",Zi=u(36,60,Qe)*(Fe==="EDGE"?0.8:1),sn=Vt!=null?Math.max(Vt,At+1.4):At+4.2,En=S(Si,Zi,sn,-50,25);else{let gl=(Vt!=null?Vt:At+6.2)-At;if(gl<3)ii="DROP",En=18,sn=Math.max(At+0.6,At+gl),Zi=T(Si,En,sn,10,34);else ii="CLEAR",En=40,sn=Math.max(At+3.5,Vt!=null?Vt:At+6.4),Zi=T(Si,En,sn,20,52)}else if(Si>1.7)ii="CLEAR",En=44,sn=Math.max(At+3,Vt!=null?Math.min(Vt,At+6):At+5.4),Zi=T(Si,En,sn,18,46);else if(Si>1)ii="DRIVE",Zi=u(20,31,Qe)*ay,sn=Vt!=null?Math.max(Vt,At+1):At+5,En=S(Si,Zi,sn,-10,40);else ii="LIFT",En=54,sn=Math.max(At+3.5,Vt!=null?Vt:At+6.4),Zi=T(Si,En,sn,18,42);if(sn*=1+c(-1,1)*(Fe==="PERFECT"?0.035:Fe==="GOOD"?0.1:0.26)*(ml?1.3:1),Fe!=="EDGE")En=_(Si,Zi,En,At,1.77,70);if(Fe==="EDGE")Zi*=0.82;let ap=Math.cos(En*Math.PI/180);z.vel.set(G*Zi*ap,Zi*Math.sin(En*Math.PI/180),ut*Zi*ap),z.kind=ii,z.shot={kind:ii,grade:Fe,v:Zi,q:Qe,e:En,y0:Si,bh:ml},z.trailPts.length=0,z.trail.visible=!0,z.hitDir=new R().copy(z.vel).normalize();let lp=Math.round(Zi*3.6);if(ii==="SMASH")xe.bestKmh=Math.max(xe.bestKmh,lp);let ly=ii==="SMASH"?0.6+0.4*Qe:ii==="DRIVE"?0.5:ii==="CLEAR"?0.45:0.25;m()&&m().shuttle(ly,Fe==="EDGE"?0.3:Fe==="GOOD"?0.75:1),St(`<span style="color:${Fe==="PERFECT"?"#7dff9a":Fe==="GOOD"?"#ffe36a":"#ff9a6a"}">${Fe}</span> · ${ml?"BH ":""}${ii}${ii==="SMASH"?" "+lp+" km/h":""}`,"#fff",800)}let ot=(F)=>F>=10?3:F>=6?2:F>=3?1.5:1;function Gt(F){if(F.st="rest",F.rest=0,F.blob.material.opacity=1,m()&&m().shuttleLand(0.8),F.shot){let z=!F.netHit&&Math.abs(F.pos.x-t)<=3.05&&F.pos.z>i&&F.pos.z<=i+6.7,ce=F.shot,Ue=F.pos.z-i,Fe=ce.grade==="PERFECT"?3:ce.grade==="GOOD"?2:1,Qe="";if(z){let qe=2;if(ce.kind==="SMASH"){if(qe+=2,ce.v>=50)qe+=2}else if(ce.kind==="CLEAR"){if(Ue>4.8)qe+=1}else if(ce.kind==="DROP"){if(Ue<1.9)qe+=2}if(Fe+=qe,xe.combo++,xe.ins++,xe.maxCombo=Math.max(xe.maxCombo,xe.combo),Math.hypot(F.pos.x-le.x,F.pos.z-le.z)<0.9)Fe+=4,Qe=" · \uD83C\uDFAF +4",le.t=99,m()&&m().good(1.4);let G=ot(xe.combo),ut=Math.round(Fe*G);xe.score+=ut,m()&&m().good(Math.min(2,xe.combo/5)),St(`<span style="color:#7dff9a">IN</span> +${ut}${G>1?' <span style="color:#ffd24a">×'+G+"</span>":""}${Qe}`,"#fff",1100)}else xe.combo=0,xe.score+=Fe,St(`<span style="color:#ff6a5a">${F.netHit?"SÍŤ":"OUT"}</span> +${Fe}`,"#fff",900),m()&&m().miss()}else xe.combo=0,xe.missed++,St('<span style="color:#ff9a8a">MISS</span>',"#fff",700),m()&&m().miss();Pi()}function Pi(){Pe.textContent=xe.st==="count"?"30.0":Math.max(0,30-xe.t).toFixed(1),B.textContent=xe.score;let F=ot(xe.combo);ue.textContent=xe.combo?xe.combo+(F>1?" ×"+F:""):"–",he.textContent=Math.min(xe.fed,xe.total)+"/"+xe.total,ue.style.color=F>1?"#ffd24a":"#fff"}let fi=5,li=2.5,pn=2.1,lt=mr-0.12,Qi=document.createElement("canvas");Qi.width=2000,Qi.height=1000;let we=Qi.getContext("2d"),xr=new zi(Qi);xr.colorSpace=Ft,xr.anisotropy=8;let Bi=new Ze;Bi.position.set(t,pn,lt),jt.add(Bi);let go=[x(Bi,new bt(fi+0.22,li+0.22,0.12),g(1052948,0.5,0.4))];for(let F of[-1,1])go.push(x(Bi,new bt(fi+0.26,0.035,0.13),new _t({color:16734751}),0,F*(li+0.22)/2,0));let qr=x(Bi,new ei(fi,li),new _t({map:xr,toneMapped:!1}),0,0,-0.065);qr.rotation.y=Math.PI;let Kr=(F)=>{let z=new Intl.DateTimeFormat("en-CA",{timeZone:"Europe/Prague",year:"numeric",month:"2-digit",day:"2-digit"}).formatToParts(F),ce=(Ue)=>parseInt(z.find((Fe)=>Fe.type===Ue).value,10);return{y:ce("year"),m:ce("month"),d:ce("day")}},Zt=(F,z,ce)=>{let Ue=new Date(Date.UTC(F,z-1,ce));Ue.setUTCDate(Ue.getUTCDate()+4-(Ue.getUTCDay()||7));let Fe=new Date(Date.UTC(Ue.getUTCFullYear(),0,1));return Ue.getUTCFullYear()+"-W"+String(Math.ceil(((Ue-Fe)/86400000+1)/7)).padStart(2,"0")},Oi=()=>{let F=Kr(new Date);return Zt(F.y,F.m,F.d)},ir=()=>{let F=Kr(new Date),z=new Date(Date.UTC(F.y,F.m-1,F.d-7));return Zt(z.getUTCFullYear(),z.getUTCMonth()+1,z.getUTCDate())},gi=(F,z)=>{try{return JSON.parse(localStorage.getItem(F))??z}catch(ce){return z}},Ki=(F,z)=>{try{localStorage.setItem(F,JSON.stringify(z))}catch(ce){}},_r=(()=>{let F="";try{F=localStorage.getItem("fonger-player-id")||""}catch(z){}if(!/^[A-Za-z0-9-]{8,64}$/.test(F)){F=crypto.randomUUID?crypto.randomUUID():Date.now().toString(36)+Math.random().toString(36).slice(2,12)+Math.random().toString(36).slice(2,12);try{localStorage.setItem("fonger-player-id",F)}catch(z){}}return F})(),xo=()=>gi("fonger-smash-best",0),Dr={mode:"local",cur:[],champ:null,me:null};function ry(){let F=Oi(),z=gi("fonger-smash-local",[]).filter((Qe)=>Qe.week===F),ce=(()=>{try{return localStorage.getItem("fonger-name")||"Ty"}catch(Qe){return"Ty"}})(),Ue=z.reduce((Qe,qe)=>Math.max(Qe,qe.score),0),Fe=gi("fonger-smash-local",[]).reduce((Qe,qe)=>Math.max(Qe,qe.score),0);Dr={mode:"local",cur:Ue?[{name:ce,score:Ue,me:!0}]:[],champ:Fe?{name:ce,score:Fe}:null,me:Ue?{rank:1,score:Ue}:null}}function rp(){we.clearRect(0,0,2000,1000),we.fillStyle="#06070a",we.fillRect(0,0,2000,1000);let ce=we.createLinearGradient(0,0,2000,0);ce.addColorStop(0,"#ff5a1f"),ce.addColorStop(1,"#ffb020"),we.fillStyle=ce,we.fillRect(0,0,2000,8),we.fillRect(0,992,2000,8),we.textAlign="left",we.fillStyle="#ffb020",we.shadowColor="#ff8a1f",we.shadowBlur=24,we.font="900 92px Arial Black, Arial",we.fillText("SMASH CHALLENGE",70,118),we.shadowBlur=0,we.fillStyle="#9aa0ad",we.font="700 40px Arial",we.fillText("30 s · feeder · týden "+Oi().split("-W")[1]+(Dr.mode==="local"?" · jen v tomto zařízení":""),74,178);let Ue=Dr.cur.slice(0,7),Fe=70,Qe=250,qe=94;if(we.font="700 34px Arial",we.fillStyle="#6d7383",we.fillText("#",Fe+6,Qe-20),we.fillText("HRÁČ",Fe+120,Qe-20),we.textAlign="right",we.fillText("BODY",1250,Qe-20),we.textAlign="left",!Ue.length)we.fillStyle="#4b5060",we.font="700 54px Arial",we.fillText("Zatím nikdo. Buď první!",Fe+20,Qe+120);if(Ue.forEach((G,ut)=>{let qt=Qe+ut*qe;if(G.me)we.fillStyle="rgba(255,138,58,0.16)",we.fillRect(Fe-10,qt+2,1220,qe-8);we.fillStyle=ut===0?"#ffd24a":ut===1?"#d6dbe6":ut===2?"#e0a070":"#ffffff",we.font="900 64px Arial Black, Arial",we.fillText(String(ut+1),Fe+6,qt+70),we.font="800 62px Arial",we.fillText(String(G.name).slice(0,14),Fe+120,qt+70),we.textAlign="right",we.font='900 70px "Courier New", monospace',we.fillText(String(G.score),1250,qt+72),we.textAlign="left"}),we.fillStyle="rgba(255,255,255,0.05)",we.fillRect(1330,230,600,360),we.strokeStyle="#ffb020",we.lineWidth=4,we.strokeRect(1330,230,600,360),we.textAlign="center",we.fillStyle="#ffb020",we.font="800 38px Arial",we.fillText("ALL-TIME #1",1630,290),Dr.champ)we.fillStyle="#fff",we.font="900 66px Arial",we.fillText(String(Dr.champ.name).slice(0,12),1630,395),we.fillStyle="#ffd24a",we.font='900 120px "Courier New", monospace',we.fillText(String(Dr.champ.score),1630,520);else we.fillStyle="#4b5060",we.font="700 46px Arial",we.fillText("zatím nikdo",1630,420);we.fillStyle="rgba(255,255,255,0.05)",we.fillRect(1330,620,600,250),we.strokeStyle="#4b5060",we.strokeRect(1330,620,600,250),we.fillStyle="#9aa0ad",we.font="800 36px Arial",we.fillText("TVŮJ REKORD",1630,676),we.fillStyle="#fff",we.font='900 110px "Courier New", monospace',we.fillText(xo()?String(xo()):"–",1630,790),we.font="600 30px Arial",we.fillStyle="#7f8594",we.fillText(Dr.me&&Dr.me.rank?"týden: #"+Dr.me.rank:"",1630,846),we.textAlign="left",we.fillStyle="#7f8594",we.font="600 32px Arial",we.fillText("Vezmi raketu z bagu · E u stroje na kurtu · LMB švih · PMB smeč",70,960),xr.needsUpdate=!0}async function ou(){ry(),rp();try{let z=await(await fetch("https://script.google.com/macros/s/AKfycbxl-aI9eXR_ob9iLQ1Eyx6wLJiziYzX7YgaMzbmX6ZUvbcx71IPSfqTEavpP54zErUS/exec?game=smash&week="+encodeURIComponent(Oi())+"&prev="+encodeURIComponent(ir())+"&pid="+encodeURIComponent(_r))).json();if(z&&z.game==="smash"&&Array.isArray(z.cur))Dr={mode:"online",cur:z.cur.map((ce)=>({name:ce.name,score:ce.score,me:ce.me})),champ:z.best&&z.best[0]?{name:z.best[0].name,score:z.best[0].score}:null,me:z.me||null},rp()}catch(F){}}async function sy(F){let z=xe.score,ce=null,Ue="local",Fe=null,Qe=gi("fonger-smash-local",[]);Qe.push({week:Oi(),score:z,t:Date.now()}),Ki("fonger-smash-local",Qe.slice(-200));try{let G=await(await fetch("https://script.google.com/macros/s/AKfycbxl-aI9eXR_ob9iLQ1Eyx6wLJiziYzX7YgaMzbmX6ZUvbcx71IPSfqTEavpP54zErUS/exec",{method:"POST",body:JSON.stringify({game:"smash",name:F,score:z,week:Oi(),player_id:_r})})).json();if(G&&G.ok&&G.game==="smash"){Ue="online",ce=G.rank;try{localStorage.setItem("fonger-name",G.name||F)}catch(ut){}}else Fe=G&&G.error}catch(qe){Fe="net"}return await ou(),{rank:ce,mode:Ue,err:Fe}}let ra=Re(document.createElement("div"),"position:fixed;inset:0;z-index:20;display:none;place-items:center;background:rgba(5,6,10,.62);backdrop-filter:blur(4px);font-family:Arial,sans-serif;color:#fff");Te.appendChild(ra);function df(){if(Kn=!1,window.__fdModal=!1,ra.style.display="none",xe.st="idle",J.style.display="none",Me.style.display="none",no.style.visibility="",Qo.style.visibility="",na(),!Yr&&zn.requestPointerLock)try{let F=zn.requestPointerLock();if(F&&F.catch)F.catch(()=>{})}catch(F){}}function oy(){if(Kn=!0,window.__fdModal=!0,document.pointerLockElement)document.exitPointerLock();let F=xo(),z=xe.score>F;if(z)Ki("fonger-smash-best",xe.score);let ce="";try{ce=localStorage.getItem("fonger-name")||""}catch(xi){}let Ue=xe.fed?Math.round(100*xe.ins/Math.max(1,xe.fed)):0;ra.innerHTML=`<div style="min-width:min(92vw,420px);padding:22px 26px;border-radius:18px;background:#0d0e14;border:1px solid rgba(255,138,58,.7);box-shadow:0 0 50px rgba(255,138,58,.25);text-align:center">
      <div style="font:800 12px Arial;letter-spacing:.2em;color:#ffb27a">SMASH CHALLENGE</div>
      <div style="font:900 78px Arial Black,Arial;color:#ffd24a;line-height:1.05;text-shadow:0 0 24px #ff8a1f">${xe.score}</div>
      <div style="font:700 13px Arial;color:${z?"#7dff9a":"#9aa0ad"};min-height:18px">${z?"NOVÝ OSOBNÍ REKORD":"tvůj rekord "+F}</div>
      <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin:14px 0 4px;font-size:12px;color:#9aa0ad"><div><b style="display:block;font-size:22px;color:#fff">${xe.hits}</b>ODPALY</div><div><b style="display:block;font-size:22px;color:#fff">${xe.ins}</b>V KURTU</div><div><b style="display:block;font-size:22px;color:#fff">${xe.maxCombo}</b>COMBO</div><div><b style="display:block;font-size:22px;color:#fff">${xe.bestKmh||"–"}</b>SMEČ km/h</div><div><b style="display:block;font-size:22px;color:#fff">${xe.missed}</b>MISS</div><div><b style="display:block;font-size:22px;color:#fff">${Ue}%</b>ÚSPĚŠNOST</div></div>
      <div id="fdMsg" style="min-height:20px;margin:8px 0;font:700 14px Arial;color:#ffb27a"></div>
      <div id="fdRow" style="display:flex;gap:8px;justify-content:center;flex-wrap:wrap"></div></div>`,ra.style.display="grid";let Fe=ra.querySelector("#fdMsg"),Qe=ra.querySelector("#fdRow"),qe=(xi,Qt,At)=>{let dt=Re(document.createElement("button"),`padding:10px 18px;border-radius:10px;border:1px solid ${At?"#ff8a3a":"rgba(255,255,255,.3)"};background:${At?"#ff8a3a":"transparent"};color:${At?"#14110d":"#fff"};font:800 14px Arial;cursor:pointer`);return dt.textContent=xi,dt.onclick=Qt,Qe.appendChild(dt),dt},G=async(xi)=>{if(Qe.innerHTML="",Fe.textContent="Ukládám…",xe.score<=0)Fe.textContent="Skóre 0 se nezapisuje";else{let Qt=await sy(xi);Fe.textContent=Qt.mode==="online"?Qt.rank?"Tento týden jsi #"+Qt.rank:"Uloženo":Qt.err==="taken"?"Jméno už patří jinému hráči":Qt.err==="locked"?"Tvé jméno je už pevně dané":"Uloženo jen v tomto zařízení (žebříček zatím neodpovídá)"}qe("HRÁT ZNOVU",()=>{df()},!0),qe("ZAVŘÍT",df)};if(xe.score<=0)return G("");if(ce){G(ce);return}let ut=Re(document.createElement("input"),"padding:10px 12px;border-radius:10px;border:1px solid rgba(255,255,255,.35);background:#14151c;color:#fff;font:700 16px Arial;width:170px;text-align:center");ut.maxLength=14,ut.placeholder="tvoje jméno",ut.autocomplete="off",["keydown","keyup","keypress"].forEach((xi)=>ut.addEventListener(xi,(Qt)=>{if(Qt.stopPropagation(),xi==="keydown"&&Qt.key==="Enter")qt()})),Qe.appendChild(ut);let qt=()=>{let xi=ut.value.replace(/[^\p{L}\p{N} _.\-]/gu,"").trim();if(!xi){ut.focus();return}G(xi)};qe("ULOŽIT",qt,!0),qe("PŘESKOČIT",()=>{Qe.innerHTML="",qe("HRÁT ZNOVU",df,!0),qe("ZAVŘÍT",df),Fe.textContent="Uloženo jen v tomto zařízení"}),setTimeout(()=>{try{ut.focus()}catch(xi){}},60)}window.__onHallGlb=(F)=>{let z=(dt)=>F.getObjectByName(dt);if(["Feeder_Stativ","Feeder_Sloup_Horni","Feeder_Hlava","Feeder_Odpal","Feeder_Kolo_1","Feeder_Kolo_2","Feeder_Zasobnik"].some((dt)=>!z(dt)))return;F.updateMatrixWorld(!0);{let dt=new Li().setFromObject(z("Feeder_Sloup_Horni")).getCenter(new R),Vt=new R(t-dt.x,0,n-dt.z);if(Vt.length()>0.02){let Si=[];F.traverse((ii)=>{if(/^Feeder_/.test(ii.name)&&ii.name!=="Feeder_Tabule_Ram"&&!(ii.parent&&/^Feeder_/.test(ii.parent.name)))Si.push(ii)}),Si.forEach((ii)=>{let Zi=ii.getWorldPosition(new R).add(Vt);ii.position.copy(ii.parent.worldToLocal(Zi))}),F.updateMatrixWorld(!0)}}let ce=[];ye.traverse((dt)=>{if(dt.isMesh)ce.push(dt)}),ce.forEach((dt)=>dt.parent&&dt.parent.remove(dt)),ye.updateMatrixWorld(!0);let Ue=(dt,Vt,Si)=>{let ii=new Li().setFromObject(dt),Zi=ii.getCenter(new R),En=new R(Zi.x,Si==="bottom"?ii.min.y:Zi.y,Zi.z);Vt.updateWorldMatrix(!0,!1);let sn=new Ze;return sn.position.copy(Vt.worldToLocal(En)),Vt.add(sn),sn.updateWorldMatrix(!0,!1),sn.attach(dt),sn};Je=Ue(z("Feeder_Sloup_Horni"),ye,"bottom"),Oe.updateWorldMatrix(!0,!1),["Feeder_Hlava","Feeder_Zasobnik","Feeder_Zasobnik_Sklo"].forEach((dt)=>{let Vt=z(dt);if(Vt)Oe.attach(Vt)});let Fe=z("Feeder_LCD");if(Fe)Fe.traverse((dt)=>{if(dt.isMesh)dt.material=new _t({map:H,toneMapped:!1,side:Kt})}),Oe.attach(Fe);let Qe=z("Feeder_LED");if(Qe)Qe.traverse((dt)=>{if(dt.isMesh)dt.material=Tt}),Oe.attach(Qe);Le.updateWorldMatrix(!0,!1),Le.attach(z("Feeder_Odpal")),Ht.forEach((dt)=>dt.updateWorldMatrix(!0,!1));let qe=z("Feeder_Kolo_1"),G=z("Feeder_Kolo_2"),ut=(dt)=>new Li().setFromObject(dt).getCenter(new R),qt=Ht.map((dt)=>dt.getWorldPosition(new R)),xi=ut(qe),Qt=qt[0].distanceTo(xi)<=qt[1].distanceTo(xi)?0:1;Ht[Qt].attach(qe),Ht[1-Qt].attach(G),si.length=0;for(let dt=1;dt<=3;dt++){let Vt=z("Feeder_Kosicky_Stack_"+dt);if(!Vt)continue;let Si=Ue(Vt,Oe,"bottom");Si.userData.glb=!0,si.push(Si)}let At=z("Feeder_Kosicek");if(At)X.forEach((dt)=>{while(dt.mesh.children.length)dt.mesh.remove(dt.mesh.children[0]);let Vt=At.clone(!0);Vt.position.set(0,0,0),Vt.quaternion.identity(),Vt.scale.set(1,1,1),Vt.visible=!0,dt.mesh.add(Vt)}),At.visible=!1;if(z("Feeder_Tabule_Ram"))go.forEach((dt)=>Bi.remove(dt));C(te.mast),window.__feedGlb=!0};let fs=Re(document.createElement("div"),"position:fixed;left:0;top:0;display:none;transform:translate(-50%,-100%);margin-top:-8px;pointer-events:none;z-index:6");fs.className="lb",fs.style.borderColor="#ffd27a99",fs.innerHTML="<span class=br>FEEDER</span><span class=nm>SMASH CHALLENGE</span>",Te.appendChild(fs);let pl=new R,sp=performance.now(),au=0,lu=0,op=!1;ho.push(()=>{let F=performance.now(),z=Math.min(0.05,(F-sp)/1000);if(sp=F,!op)op=!0,Gn.push([t,n,0.5]);let ce=yi>=0&&!(window.__sitting&&window.__sitting())&&gr&&!Yn.isOpen();if(Vi.visible=ce,yi>=0)if(j.t>=0){if(j.t+=z,mo(j.t),j.t>0.5)j.t=-1,mo(0)}else{let G=Math.sin(F/520)*0.004+Math.hypot(Ae.vx,Ae.vz)*Math.sin(F/130)*0.0012;mo(0),Vi.position.y+=G}$t.style.display=ci.style.display=Yr&&ce?"grid":"none",Ci.style.display=Yr&&ce&&!tr()?"grid":"none",te.mast+=(tr()||xe.st==="end"?1:0-te.mast)*Math.min(1,z*2.2),C(te.mast),te.yaw+=(te.tYaw-te.yaw)*Math.min(1,z*7),te.pitch+=(te.tPitch-te.pitch)*Math.min(1,z*7),te.recoil=Math.max(0,te.recoil-z*5),te.spin+=((tr()?1:0)-te.spin)*Math.min(1,z*3),Oe.rotation.y=te.yaw,Le.rotation.x=te.pitch,Le.position.z=-0.19+0.025*te.recoil,te.wheel+=z*38*te.spin,Ht[0].rotation.y=te.wheel,Ht[1].rotation.y=-te.wheel,Tt.color.setHex(tr()?16751146:4063098);let Ue=Math.max(0,xe.total-xe.fed);if(si.forEach((G,ut)=>{let qt=tr()||xe.st==="end"?Ue/xe.total:1,xi=0.6*Math.max(0.02,qt);if(G.scale.y=Math.max(0.02,qt),!G.userData.glb)G.position.y=0.01+xi/2}),xe.st==="idle"&&Math.random()<0.004)E("READY",yi>=0?"PRESS E":"GET RACKET");if(xe.st==="idle"&&It==="st:feed"&&!Kn)if(pl.set(t,2.55,n),pl.project(Fi),pl.z<1)fs.style.display="flex",fs.style.left=(pl.x*0.5+0.5)*innerWidth+"px",fs.style.top=(-pl.y*0.5+0.5)*innerHeight+"px";else fs.style.display="none";else fs.style.display="none";if(typeof It==="string"&&(It==="bg:r1"||It==="bg:r2")&&window.__bagIsOpen&&window.__bagIsOpen()&&yi<0){let G=document.querySelector("#prompt .tp");if(G&&G.textContent!=="VZÍT RAKETU")G.textContent="VZÍT RAKETU",G.dataset.fd="1"}else{let G=document.querySelector("#prompt .tp");if(G&&G.dataset.fd)delete G.dataset.fd,G.textContent=window.__bagIsOpen&&window.__bagIsOpen()?"ZAVŘÍT BAG":"OTEVŘÍT BAG"}if(au-=z,au<=0&&Ae.z>Ri)au=180,ou();if(tr())Ae.z=Math.min(Ae.z,i-0.5),Ae.x=f(Ae.x,t-3.05-1.2,t+3.05+1.2),Ae.z=Math.max(Ae.z,i-6.7-1.4),no.style.visibility="hidden",Qo.style.visibility="hidden";if(xe.st==="count"){xe.t+=z;let G=Math.ceil(3-xe.t+0.000001);if(G!==xe.cnt&&G>=1)xe.cnt=G,pe.style.display="block",pe.style.fontSize="120px",pe.textContent=G,E(String(G),"GET READY"),m()&&m().tick(!1);if(xe.t>=3)xe.st="run",xe.t=0,xe.nextFire=0.6,pe.style.fontSize="90px",pe.textContent="GO!",E("GO!","SMASH"),m()&&m().tick(!0),setTimeout(()=>{if(pe.textContent==="GO!")pe.style.display="none"},700);if(xe.st==="count")Pe.textContent="30.0"}else if(xe.st==="run"||xe.st==="wrap"){if(xe.t+=z,xe.t>=30&&xe.st==="run")xe.st="wrap",xe.endT=0,pe.style.display="block",pe.style.fontSize="70px",pe.textContent="ČAS!",m()&&m().buzzer(),setTimeout(()=>pe.style.display="none",900);if(xe.st==="run"){if(xe.t>28)xe.total=Math.min(xe.total,xe.fed);if(!xe.plan&&xe.t>=xe.nextFire-0.55&&xe.t<=28&&xe.fed<30){if(xe.plan=hf(),uf(xe.plan),xe.planned<xe.fed+1)xe.planned=xe.fed+1;if(xe.fed+1>xe.total)xe.total=xe.fed+1}if(xe.plan&&xe.t>=xe.nextFire)k(xe.plan),xe.plan=null,xe.interval=Math.max(1.8,xe.interval*0.97),xe.nextFire=xe.t+xe.interval*c(0.92,1.08);if(xe.ringT-=z,le.t-=z,le.t<=0){for(let ut=0;ut<12;ut++)if(le.x=t+c(-2.3,2.3),le.z=i+c(1.4,5.8),Math.hypot(le.x-t,le.z-n)>1.3)break;le.t=6,U.visible=me.visible=!0,U.position.x=me.position.x=le.x,U.position.z=me.position.z=le.z}}else xe.endT+=z;if(Pi(),xe.st==="run")Pe.textContent=Math.max(0,30-xe.t).toFixed(1);lu+=z;let G=0.45+0.25*Math.sin(lu*5);if(U.material.opacity=G,me.material.opacity=G*0.25,U.scale.setScalar(1+0.05*Math.sin(lu*5)),xe.st==="wrap"&&(oe().length===0||xe.endT>6))oe().forEach((ut)=>{ut.on=!1,ut.mesh.visible=ut.blob.visible=ut.trail.visible=ut.lm.visible=!1}),ru()}else if(xe.st==="end")xe.endT+=z;let Qe=Math.max(1,Math.ceil(z/0.008333333333333333)),qe=z/Qe;for(let G of X){if(!G.on)continue;if(G.st==="in"||G.st==="out"){for(let Qt=0;Qt<Qe;Qt++){G.prev.copy(G.pos);let At=G.vel.length();if(G.vel.x-=0.21215397923875437*At*G.vel.x*qe,G.vel.z-=0.21215397923875437*At*G.vel.z*qe,G.vel.y+=(-9.81-0.21215397923875437*At*G.vel.y)*qe,G.pos.addScaledVector(G.vel,qe),!G.netHit&&(G.prev.z-i)*(G.pos.z-i)<0&&Math.abs(G.pos.x-t)<3.1999999999999997){let dt=(i-G.prev.z)/(G.pos.z-G.prev.z);if(G.prev.y+(G.pos.y-G.prev.y)*dt<1.55)G.netHit=!0,G.pos.z=i+Math.sign(G.prev.z-i)*0.04,G.vel.x*=0.1,G.vel.z=0,G.vel.y=Math.min(G.vel.y,0)*0.3,m()&&m().netHit()}{let dt=cl(G.pos.x)-1.15;if(G.pos.y>dt){if(G.pos.y=dt,G.vel.y>0)G.vel.y*=-0.2;G.vel.x*=0.5,G.vel.z*=0.5}}if(G.st==="out"&&!G.machHit&&G.pos.y<2.4&&Math.hypot(G.pos.x-t,G.pos.z-n)<0.32)G.machHit=!0,G.vel.x*=-0.15,G.vel.z*=-0.15,G.vel.y=Math.min(G.vel.y,0)*0.2,m()&&m().netHit();if(G.pos.y<=0.02){G.pos.y=0.02,Gt(G);break}if(G.pos.y>14||Math.abs(G.pos.x-t)>40||G.pos.z<Ri||G.pos.z>mr){G.pos.y=0.02,Gt(G);break}}let ut=G.vel.length()>0.5?Ie.copy(G.vel).normalize():Ie.set(0,-1,0),qt=new Ei().setFromUnitVectors(new R(0,-1,0),ut);G.mesh.quaternion.slerp(qt,G.shot?0.3:1),G.mesh.position.copy(G.pos),G.blob.position.set(G.pos.x,0.012,G.pos.z);let xi=f(1-G.pos.y/7,0.25,1);if(G.blob.scale.setScalar(0.7+0.5*xi),G.blob.material.opacity=0.25+0.6*xi,G.st==="in"||G.st==="out"){if(G.trail.visible=!0,G.trailPts.unshift(G.pos.x,G.pos.y,G.pos.z),G.trailPts.length>de*3)G.trailPts.length=de*3;let Qt=G.trail.geometry.attributes.position;for(let At=0;At<de;At++){let dt=Math.min(At*3,G.trailPts.length-3);Qt.setXYZ(At,G.trailPts[dt]??G.pos.x,G.trailPts[dt+1]??G.pos.y,G.trailPts[dt+2]??G.pos.z)}Qt.needsUpdate=!0,G.trail.material.opacity=G.st==="in"?0.28:f(G.vel.length()/40,0.15,0.7)}if(G.lm){let Qt=G.st==="in"&&!G.hitDone&&G.vel.y<4&&!G.netHit;if(G.lm.visible=Qt,Qt){let At=Math.max(0,(G.pos.y-0.2)/Math.max(2,Math.abs(G.vel.y)));G.lm.material.opacity=0.35+0.35*Math.sin(F/90)*(At<1.2?1:0.4),G.lm.scale.setScalar(0.8+0.5*Math.min(1,At/1.5))}}if(G.st==="in"&&!G.hitDone&&j.t>=0.09&&j.t<=0.215&&!j.resolved&&(xe.st==="run"||xe.st==="wrap")){let Qt=je(j.btn===1),At=ht(G.prev,G.pos,Qt);if(At<Ct){if(!j.cand||At<j.cand.d)j.cand={s:G,d:At,h:Qt.y,btn:j.btn,cp:G.pos.clone()}}else if(j.cand&&j.cand.s===G)zt(j.cand),j.resolved=!0,j.cand=null}}else if(G.st==="rest"){if(G.lm)G.lm.visible=!1;if(G.rest+=z,G.mesh.position.set(G.pos.x,0.02,G.pos.z),G.blob.material.opacity=0.7,G.trail.visible=!1,G.rest>0.1)G.mesh.rotation.set(0,0,0),G.mesh.quaternion.setFromEuler(new xn(Math.PI/2+0.2,Math.atan2(G.vel.x,G.vel.z),0)),G.mesh.position.y=0.02;if(G.rest>2.2)G.mesh.visible=!1,G.blob.visible=!1,G.on=!1,G.st="idle"}}if(j.t>=0.215&&j.cand&&!j.resolved)zt(j.cand),j.resolved=!0,j.cand=null;if(tr()&&yi>=0){let G=je(j.t>=0&&j.btn===1);Ie.copy(G).project(Fi);let ut=!1;for(let qt of X)if(qt.on&&qt.st==="in"&&!qt.hitDone&&qt.pos.distanceTo(G)<Ct+0.25)ut=!0;Me.style.display=Ie.z<1?"block":"none",Me.style.left=(Ie.x*0.5+0.5)*innerWidth+"px",Me.style.top=(-Ie.y*0.5+0.5)*innerHeight+"px",Me.style.margin="-17px 0 0 -17px",Me.style.borderColor=ut?"#7dff9a":"rgba(255,255,255,.5)",Me.style.boxShadow=ut?"0 0 14px #7dff9a":"none"}}),ou(),window.__feed={GS:xe,pool:X,SW:j,takeRacket:ul,putBack:Fs,startGame:dl,startSwing:ie,state:()=>xe.st,held:()=>yi,board:()=>Dr,mach:te,flight:b,solveSpeed:T,planFeed:hf}})();var Ae={x:-1.9,z:2.8,yaw:0,pitch:0,vx:0,vz:0},Q1=1.65,tf=0.3,WS=[[-8.8,8.8,-3.85,3.85],[-3.9,4.3,-9.4,-3.85],[-12.4,-8.8,-5.45,7.7],[-12.4,-3.6,3.85,7.7],[-3.6,0.4,3.85,7.7],[ll.x0,ll.x1,7.7,ll.z1]],XS=[[-3.62,4.02,-4.3,-3.4],[-11.3,-9.9,-5.8,-5.1],[-9.25,-8.35,-0.9,1.1],[-2.7,-1.1,3.5,4.2],[-2.7,-1.1,7.35,8.05],[-8.1,-6.9,7.35,8.05]];function YS(e,t){let i=e-pt.cx,n=t-pt.cz,r=pt.R*Math.cos(Math.PI/6)-tf;for(let s=0;s<6;s++){let o=Math.PI/6+s*Math.PI/3;if(i*Math.cos(o)+n*Math.sin(o)>r)return!1}return!0}function nf(e,t){for(let i of V1)if(e>i[0]&&e<i[1]&&t>i[2]&&t<i[3])return!1;for(let i of WS)if(e>i[0]+tf&&e<i[1]-tf&&t>i[2]+tf&&t<i[3]-tf)return!0;for(let i of XS)if(e>i[0]&&e<i[1]&&t>i[2]&&t<i[3])return!0;return YS(e,t)}var Gn=[],ni=(e,t,i,n,r)=>{let s=Math.max(1,Math.ceil(Math.hypot(i-e,n-t)/(r*0.9)));for(let o=0;o<=s;o++)Gn.push([e+(i-e)*o/s,t+(n-t)*o/s,r])};ni(-1.95,-4.6,-1.95,-6.9,0.35);ni(2.35,-4.6,2.35,-6.9,0.35);ni(-1.9,-4.6,2.3,-4.6,0.4);Gn.push([0.2,-6.05,0.5]);ni(8.25,-2.65,8.25,2.65,0.4);ni(8.35,2.65,8.35,3.7,0.3);ni(8.35,-3.7,8.35,-2.65,0.3);ni(1.5,1.85,4.9,1.85,0.5);ni(1.1,3.45,4.9,3.45,0.3);[4.5,3.65,2.8,1.95].forEach((e)=>Gn.push([e,0.875,0.25]));ni(-6.95,-1,-6.95,1,0.42);ni(-5.75,-1,-5.75,1,0.42);ni(-0.6,-0.15,-0.6,0.95,0.42);Gn.push([-8.35,3.35,0.32],[-4.45,3.35,0.32],[-3.9,-3.85,0.3],[4.3,-3.85,0.3]);ni(-8.3,-3.45,-5.5,-3.45,0.22);ni(-3.55,-7.2,-3.55,-6,0.15);ni(3.9,-7.2,3.9,-6,0.15);Gn.push([pt.cx,pt.cz,2.15]);ni(-11.95,-4.7,-11.95,2.3,0.12);ni(-10.9,-3.6,-10.9,-1,0.25);ni(-10.9,0.9,-10.9,3.5,0.25);ni(-8.5,4.35,-4.1,4.35,0.55);ni(-6.4,7.4,-4,7.4,0.3);ni(-11.9,4.4,-11.9,7.4,0.5);ni(0.15,5.1,0.15,6.9,0.3);Gn.push([-3.3,4.2,0.3],[0.1,4.2,0.3]);zS();function ey(e,t){if(!nf(Ae.x,Ae.z))if(nf(Ae.x,t))Ae.z=t;else if(nf(e,Ae.z))Ae.x=e;else Ae.x=e,Ae.z=t;Gn.forEach(([i,n,r])=>{let s=Ae.x-i,o=Ae.z-n,a=Math.hypot(s,o),l=r+0.28;if(a<l&&a>0.0001){let c=i+s/a*l,f=n+o/a*l;if(nf(c,f))Ae.x=c,Ae.z=f;else Ae.x=e,Ae.z=t}})}var vn={},gr=!1,Zh=!1,lf=!1,Ds=0,$o=0,oo={x:0,y:0};addEventListener("keydown",(e)=>{if(!gr||Yn.isOpen())return;if(vn[e.code]=!0,e.code==="KeyE"||e.code==="Enter")iu();if(e.code==="Space"&&!e.repeat)lf=!0;if(e.code.startsWith("Arrow")||e.code==="Space")e.preventDefault()});addEventListener("keyup",(e)=>{vn[e.code]=!1});var Zd=Ir("#start"),Jh=Zd.querySelector(".go"),ZY=Jh?Jh.textContent:"",ty=document.createElement("style");ty.textContent='#start[data-paused="1"] .keys,#start[data-paused="1"] p{display:none!important}#start[data-paused="1"] h1{opacity:.55}';document.head.appendChild(ty);function iy(){if(Zd.classList.add("on"),Zd.dataset.paused="1",Jh)Jh.textContent="POKRAČOVAT · KLIKNI"}function qS(){if(Yr||!zn.requestPointerLock)return;try{let e=zn.requestPointerLock();if(e&&e.catch)e.catch(()=>{})}catch(e){}setTimeout(()=>{if(gr&&!Yn.isOpen()&&!window.__fdModal&&document.pointerLockElement!==zn)iy()},350)}document.addEventListener("pointerlockchange",()=>{if(Zh=document.pointerLockElement===zn,!Zh&&gr&&!Yn.isOpen()&&!Yr&&!window.__fdModal)iy()});var ao={dx:0,dy:0};addEventListener("mousemove",(e)=>{if(!gr||Yn.isOpen())return;if(Zh||ip){if(Math.abs(e.movementX)>240||Math.abs(e.movementY)>240)return;ao.dx+=e.movementX,ao.dy+=e.movementY}});var ip=!1;zn.addEventListener("mousedown",()=>{if(ip=!0,Zh&&It&&(It==="mon"||It.startsWith("st:")||It.startsWith("bg:")||It.startsWith("sc:")))return iu()});addEventListener("mouseup",()=>{ip=!1});function KS(){if(gr=!0,Ir("#start").classList.remove("on"),Ir("#hud").classList.add("on"),!Yr&&zn.requestPointerLock)try{let e=zn.requestPointerLock();if(e&&e.catch)e.catch(()=>{})}catch(e){}}Ir("#start").addEventListener("click",KS);Yn.setOnClose(()=>{vn.KeyE=!1,qS()});if(Yr){let e=Ir("#joy"),t=Ir("#knob"),i=null,n=null,r=0,s=0,o=(f)=>{let u=e.getBoundingClientRect(),h=u.left+u.width/2,m=u.top+u.height/2,g=(f.clientX-h)/(u.width/2),x=(f.clientY-m)/(u.height/2),d=Math.hypot(g,x);if(d>1)g/=d,x/=d;oo.x=g,oo.y=x,t.style.transform=`translate(${g*34}px,${x*34}px)`};e.addEventListener("pointerdown",(f)=>{i=f.pointerId,e.setPointerCapture(i),o(f)}),e.addEventListener("pointermove",(f)=>{if(f.pointerId===i)o(f)});let a=(f)=>{if(f.pointerId===i)i=null,oo.x=oo.y=0,t.style.transform=""};e.addEventListener("pointerup",a),e.addEventListener("pointercancel",a),zn.addEventListener("pointerdown",(f)=>{if(!gr||Yn.isOpen()||n!==null)return;n=f.pointerId,r=f.clientX,s=f.clientY,zn.setPointerCapture(n)}),zn.addEventListener("pointermove",(f)=>{if(f.pointerId!==n)return;ao.dx+=(f.clientX-r)*2.2,ao.dy+=(f.clientY-s)*2.2,r=f.clientX,s=f.clientY});let l=(f)=>{if(f.pointerId===n)n=null};zn.addEventListener("pointerup",l),zn.addEventListener("pointercancel",l),Ir("#act").addEventListener("click",()=>iu());let c=document.createElement("div");c.id="jmp",c.textContent="↑",c.style.cssText="position:fixed;right:40px;bottom:160px;width:72px;height:72px;border-radius:50%;border:2px solid #ffffff55;background:#ffffff14;color:#fff;font:700 30px Inter,Arial;display:none;place-items:center;z-index:9;touch-action:none;user-select:none",document.body.appendChild(c),c.addEventListener("pointerdown",(f)=>{f.preventDefault(),lf=!0}),window.__jmpBtn=c}var ai=null,It=null,Jd=new Rh;Jd.far=26;var no=Ir("#prompt"),Qo=Ir("#sum");function tu(e){if(e===(ai&&ai.k))return;if(ai=e?co.find((i)=>i.k===e):null,!ai){no.classList.remove("on"),Qo.classList.remove("on");return}let t;try{t=e==="bag"?window.__bagSum():e==="sit"?window.__sitSum():e==="score"?window.__scoreSum():e==="feed"?window.__feedSum():Yn.summary(e)}catch(i){t=e==="water"?{t:"PÍTKO",s:"Čerstvá voda · stiskni E",k:[["\uD83D\uDCA7","NAPÍT SE"]]}:{t:String(e).toUpperCase(),s:"",k:[]}}no.querySelector(".tp").textContent=e==="water"?"NAPÍT SE":e==="bag"?window.__bagIsOpen()?"ZAVŘÍT BAG":"OTEVŘÍT BAG":e==="sit"?window.__sitting()?"VSTÁT":"SEDNOUT SI":e==="score"?"PŘIDAT BOD":e==="feed"?window.__feedPrompt():"OTEVŘÍT",no.querySelector("b").textContent=t.t,no.style.setProperty("--c",ai.c),Qo.style.setProperty("--c",ai.c),Qo.innerHTML=`<h4>${t.t}</h4><p>${t.s}</p><div>${t.k.map((i)=>`<span><b>${i[0]}</b><i>${i[1]}</i></span>`).join("")}</div>`,no.classList.add("on"),Qo.classList.toggle("on",e!=="sit"&&e!=="score")}function iu(){if(Yn.isOpen())return;if(window.__fdInteract&&window.__fdInteract())return;if(It&&(It.startsWith("bg:")||It==="st:bag")||!It&&ai&&ai.k==="bag")return window.__bagToggle();if(It&&It.startsWith("sc:"))return window.__score(It);if(!It&&ai&&ai.k==="sit")return window.__sitToggle();if(It==="st:water"||!It&&ai&&ai.k==="water")return window.__drink&&window.__drink();if(document.pointerLockElement)document.exitPointerLock();if(It==="mon"||It==="st:games")return Yn.open("games");if(It==="st:water"||!It&&ai&&ai.k==="water")return window.__drink&&window.__drink();if(It&&It.startsWith("st:"))return Yn.open(It.slice(3));if(ai)Yn.open(ai.k)}function R1(e){if(e===It)return;It=e,["pc","hp","kb","ms"].forEach((t)=>document.body.classList.toggle(t,t===e))}jt.traverse((e)=>{if(e.isPointLight)e.intensity*=0.56});var ZS=new Ch,Gd=0,ea=0,C1=/[?&]stats/.test(location.search),ef=null,kd=0,Vd=0,Gh=0,Wd=0;function JS(e){if(!ef)ef=document.createElement("pre"),ef.style.cssText="position:fixed;left:8px;bottom:8px;z-index:99;margin:0;padding:8px 10px;background:rgba(0,0,0,.7);color:#7dffb0;font:12px/1.35 monospace;pointer-events:none;border-radius:8px",document.body.appendChild(ef),kn.info.autoReset=!1;if(kd+=e,Vd++,Gh=Math.max(Gh,e),Wd+=e,Wd>0.5){let t=kn.info;ef.textContent="FPS "+(Vd/kd).toFixed(0)+"   slowest "+(Gh*1000).toFixed(0)+` ms
calls `+t.render.calls+"   tris "+(t.render.triangles/1000).toFixed(0)+`k
geom `+t.memory.geometries+"   tex "+t.memory.textures+"   res x"+ss+`
pos `+Ae.x.toFixed(1)+", "+Ae.z.toFixed(1),kd=Vd=Gh=Wd=0}}var rf=0.016,ny=0,kh=0;function P1(){if(kn.setPixelRatio(ss),os)os.setPixelRatio(ss);jd(),rf=0.02,ny=0}function jS(e){if(e>0.5)return;if(rf+=(e-rf)*0.08,++ny<45)return;let t=performance.now();if(t-kh<2500)return;if(rf>0.028&&ss>0.75)ss=Math.max(0.75,ss-0.25),kh=t,P1();else if(rf<0.0185&&ss<Xd&&t-kh>12000)ss=Math.min(Xd,ss+0.25),kh=t,P1()}function np(){try{$S()}catch(e){console.error("frame",e),requestAnimationFrame(np)}}function $S(){let e=ZS.getDelta(),t=Math.min(e,0.1);if(Gd+=t,jS(e),window.__jmpBtn)window.__jmpBtn.style.display=gr&&!Yn.isOpen()?"grid":"none";let i=Yn.isOpen();if(gr&&!i){let s=1-Math.exp(-45*t),o=ao.dx*s,a=ao.dy*s;ao.dx-=o,ao.dy-=a,Ae.yaw-=o*0.0021,Ae.pitch=Math.max(-1.2,Math.min(1.2,Ae.pitch-a*0.0021));let l=(vn.ArrowLeft?1:0)-(vn.ArrowRight?1:0);Ae.yaw+=l*1.9*t;let c=(vn.KeyW||vn.ArrowUp?1:0)-(vn.KeyS||vn.ArrowDown?1:0)-oo.y,f=(vn.KeyD?1:0)-(vn.KeyA?1:0)+oo.x,u=vn.ShiftLeft?5.2:3.2,h=(-Math.sin(Ae.yaw)*c+Math.cos(Ae.yaw)*f)*u,m=(-Math.cos(Ae.yaw)*c-Math.sin(Ae.yaw)*f)*u,g=Math.hypot(h,m);if(g>u)h*=u/g,m*=u/g;if(lf&&Ds<=0.001)$o=4.2;lf=!1;let x=Ds>0.001,d=Math.max(1,Math.ceil(t/0.016)),p=t/d;for(let y=0;y<d;y++){let M=1-Math.exp(-(x?3.5:11)*p);Ae.vx+=(h-Ae.vx)*M,Ae.vz+=(m-Ae.vz)*M;let{x:b,z:T}=Ae;if(Ae.x+=Ae.vx*p,Ae.z+=Ae.vz*p,ey(b,T),x||$o>0){if($o-=11.5*p,Ds+=$o*p,Ds<=0)Ds=0,$o=0}}}else lf=!1;if(ea+=(FS(Ae.x,Ae.z)-ea)*Math.min(1,t*12),!window.__camLock)Fi.position.set(Ae.x,Q1+ea+Ds+(window.__sitDY?window.__sitDY():0),Ae.z),Fi.rotation.order="YXZ",Fi.rotation.set(Ae.pitch,Ae.yaw,0);if(gr&&!i){Jd.setFromCamera(new ne(0,0),Fi);let s=Jd.intersectObjects(Ls.flatMap((a)=>a.hits),!1),o=null;for(let a of s){let l=$1.get(a.object);if(l&&a.distance<=l.far){o=l.id;break}}R1(o)}else R1(null);let n=null,r=9;if(co.forEach((s)=>{let o=Math.hypot(Ae.x-s.x,Ae.z-s.z)/s.r;if(o<1&&o<r)r=o,n=s.k}),It&&It.startsWith("st:"))n=It.slice(3);else if(It&&It.startsWith("sc:"))n="score";else if(It==="mon")n="games";if(tu(n&&gr&&!i?n:i?ai&&ai.k:null),Ls.forEach((s)=>{if(s.outline)s.mat.opacity=It===s.id?1:0}),co.forEach((s)=>{if(s.ring)s.ring.material.opacity=ai&&ai.k===s.k?0.95:0.35+0.15*Math.sin(Gd*2)}),ho.forEach((s)=>s(Gd)),C1)kn.info.reset();if(os)os.render();else kn.render(jt,Fi);if(C1)JS(e);requestAnimationFrame(np)}requestAnimationFrame(np);window.__scene=jt;window.__fun={go(e,t,i=0,n=0){Ae.x=e,Ae.z=t,Ae.yaw=i,Ae.pitch=n,Ae.vx=Ae.vz=0},pos(){return[Ae.x,Ae.z]},camY(){return Fi.position.y},scn:jt,cam:Fi,blocked(e,t){if(!nf(e,t))return!0;for(let[i,n,r]of Gn)if(Math.hypot(e-i,t-n)<r+0.28)return!0;return!1},sim(e,t,i,n,r=400){Ae.x=e,Ae.z=t;for(let s=0;s<r;s++){let{x:o,z:a}=Ae;Ae.x+=Math.sign(i-Ae.x)*Math.min(0.05,Math.abs(i-Ae.x)),Ae.z+=Math.sign(n-Ae.z)*Math.min(0.05,Math.abs(n-Ae.z)),ey(o,a)}return[+Ae.x.toFixed(2),+Ae.z.toFixed(2)]},start(){gr=!0,Ir("#start").classList.remove("on"),Ir("#hud").classList.add("on")},interact:iu,view(e,t,i,n,r,s,o=68,a=!0){window.__camLock=!0,Ln.visible=a,Fi.fov=o,Fi.updateProjectionMatrix(),Fi.position.set(e,t,i),Fi.up.set(0,1,0),Fi.lookAt(n,r,s)},free(){window.__camLock=!1,Ln.visible=!0}};
