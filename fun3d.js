var ex=Object.defineProperty;var tx=(e)=>e;function ix(e,t){this[e]=tx.bind(null,t)}var nx=(e,t)=>{for(var i in t)ex(e,i,{get:t[i],enumerable:!0,configurable:!0,set:ix.bind(t,i)})};var Tr={};nx(Tr,{ArcCurve:()=>Fh,CatmullRomCurve3:()=>uo,CubicBezierCurve:()=>Ha,CubicBezierCurve3:()=>kh,EllipseCurve:()=>ls,LineCurve:()=>ka,LineCurve3:()=>Vh,QuadraticBezierCurve:()=>Va,QuadraticBezierCurve3:()=>Wa,SplineCurve:()=>Xa});var Bo="187";var zf=0,sh=1,Gf=2;var Ss=1,Hf=2,kr=3,dn=0,Bt=1,Ot=2,pn=0,fr=1,Oo=2,oh=3,ah=4,kf=5;var ur=100,Vf=101,Wf=102,Xf=103,qf=104,Yf=200,Zf=201,Jf=202,Kf=203,_l=204,yl=205,$f=206,Qf=207,jf=208,eu=209,tu=210,iu=211,nu=212,ru=213,su=214,zo=0,Go=1,Ho=2,dr=3,ko=4,Vo=5,Wo=6,Xo=7,Vr=0,ou=1,au=2,tn=0,bs=1,Es=2,Ts=3,pr=4,ws=5,As=6,Rs=7;var vl=300,mn=301,$n=302,qo=303,Yo=304,Qn=1000,Ci=1001,Cs=1002,Vt=1003,lh=1004;var Ps=1005;var qt=1006,Zo=1007;var Vi=1008;var ri=1009,Ml=1010,Sl=1011,jn=1012,Is=1013,ui=1014,si=1015,Yt=1016,Ls=1017,Ds=1018,Cn=1020,bl=35902,El=35899,Tl=1021,wl=1022,vi=1023,Zi=1026,nn=1027,Ns=1028,Wr=1029,rn=1030,Us=1031;var Fs=1033,Bs=33776,Os=33777,zs=33778,Gs=33779,Jo=35840,Ko=35841,$o=35842,Qo=35843,jo=36196,ea=37492,ta=37496,ia=37488,na=37489,Xr=37490,ra=37491,sa=37808,oa=37809,aa=37810,la=37811,ca=37812,ha=37813,fa=37814,ua=37815,da=37816,pa=37817,ma=37818,ga=37819,xa=37820,_a=37821,ya=36492,va=36494,Ma=36495,Sa=36283,ba=36284,qr=36285,Ea=36286;var Yr=2300,Al=2301,Rl=2302,ch=2303,Cl=2400,Pl=2401,Il=2402;var lu=3200;var Pn=0,cu=1,gn="",Rt="srgb",Zr="srgb-linear",Jr="linear",gt="srgb";var Ll=7680;var hu=519,fu=512,uu=513,du=514,Dl=515,pu=516,mu=517,Nl=518,Ul=519,Ta=35044;var hh="300 es",Mi=2000,On=2001;function xu(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function fh(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function mr(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function uh(){let e=mr("canvas");return e.style.display="block",e}var gu={},Hs=null;function Kr(...e){let t="THREE."+e.shift();if(Hs)Hs("log",t,...e);else console.log(t,...e)}function _u(e){let t=e[0];if(typeof t==="string"&&t.startsWith("TSL:")){let i=e[1];if(i&&i.isStackTrace)e[0]+=" "+i.getLocation();else e[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return e}function xe(...e){e=_u(e);let t="THREE."+e.shift();if(Hs)Hs("warn",t,...e);else{let i=e[0];if(i&&i.isStackTrace)console.warn(i.getError(t));else console.warn(t,...e)}}function Be(...e){e=_u(e);let t="THREE."+e.shift();if(Hs)Hs("error",t,...e);else{let i=e[0];if(i&&i.isStackTrace)console.error(i.getError(t));else console.error(t,...e)}}function xn(...e){let t=e.join(" ");if(t in gu)return;gu[t]=!0,xe(...e)}function yu(e,t,i){return new Promise(function(n,r){function s(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:r();break;case e.TIMEOUT_EXPIRED:setTimeout(s,i);break;default:n()}}setTimeout(s,i)})}var vu={[zo]:zo,[Ho]:Wo,[ko]:ko,[dr]:Vo,[Go]:Go,[Wo]:Ho,[Xo]:Xo,[Vo]:dr};class di{addEventListener(e,t){if(this._listeners===void 0)this._listeners={};let i=this._listeners;if(i[e]===void 0)i[e]=[];if(i[e].indexOf(t)===-1)i[e].push(t)}hasEventListener(e,t){let i=this._listeners;if(i===void 0)return!1;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let n=i[e];if(n!==void 0){let r=n.indexOf(t);if(r!==-1)n.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let n=i.slice(0);for(let r=0,s=n.length;r<s;r++)n[r].call(this,e);e.target=null}}}var Bi=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var $r=Math.PI/180,ks=180/Math.PI;function Si(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Bi[e&255]+Bi[e>>8&255]+Bi[e>>16&255]+Bi[e>>24&255]+"-"+Bi[t&255]+Bi[t>>8&255]+"-"+Bi[t>>16&15|64]+Bi[t>>24&255]+"-"+Bi[i&63|128]+Bi[i>>8&255]+"-"+Bi[i>>16&255]+Bi[i>>24&255]+Bi[n&255]+Bi[n>>8&255]+Bi[n>>16&255]+Bi[n>>24&255]).toLowerCase()}function tt(e,t,i){return Math.max(t,Math.min(i,e))}function Mu(e,t){return(e%t+t)%t}function Fl(e,t,i){return(1-i)*e+i*t}function Su(e){return Math.pow(2,Math.floor(Math.log(e)/Math.LN2))}function Vs(e){switch(e.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Bl(e,t){if(t.constructor===Float32Array)return e;let i=Vs(t);if(i===void 0)throw Error("THREE.MathUtils: Invalid component type.");return Math.max(e/i,-1)}function Ol(e,t){if(t.constructor===Float32Array)return e;let i=Vs(t);if(i===void 0)throw Error("THREE.MathUtils: Invalid component type.");return Math.round(e*i)}class W{static{this.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,n=e.elements;return this.x=n[0]*t+n[3]*i+n[6],this.y=n[1]*t+n[4]*i+n[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=tt(this.x,e.x,t.x),this.y=tt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=tt(this.x,e,t),this.y=tt(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(tt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(tt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),n=Math.sin(t),r=this.x-e.x,s=this.y-e.y;return this.x=r*i-s*n+e.x,this.y=r*n+s*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class li{constructor(e=0,t=0,i=0,n=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=n}static slerpFlat(e,t,i,n,r,s,o){let a=i[n+0],l=i[n+1],c=i[n+2],h=i[n+3],u=r[s+0],f=r[s+1],m=r[s+2],g=r[s+3];if(h!==g||a!==u||l!==f||c!==m){let _=a*u+l*f+c*m+h*g;if(_<0)u=-u,f=-f,m=-m,g=-g,_=-_;let d=1-o;if(_<0.9995){let p=Math.acos(_),y=Math.sin(p);d=Math.sin(d*p)/y,o=Math.sin(o*p)/y,a=a*d+u*o,l=l*d+f*o,c=c*d+m*o,h=h*d+g*o}else{a=a*d+u*o,l=l*d+f*o,c=c*d+m*o,h=h*d+g*o;let p=1/Math.sqrt(a*a+l*l+c*c+h*h);a*=p,l*=p,c*=p,h*=p}}e[t]=a,e[t+1]=l,e[t+2]=c,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,n,r,s){let o=i[n],a=i[n+1],l=i[n+2],c=i[n+3],h=r[s],u=r[s+1],f=r[s+2],m=r[s+3];return e[t]=o*m+c*h+a*f-l*u,e[t+1]=a*m+c*u+l*h-o*f,e[t+2]=l*m+c*f+o*u-a*h,e[t+3]=c*m-o*h-a*u-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,n){return this._x=e,this._y=t,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let{_x:i,_y:n,_z:r,_order:s}=e,{cos:o,sin:a}=Math,l=o(i/2),c=o(n/2),h=o(r/2),u=a(i/2),f=a(n/2),m=a(r/2);switch(s){case"XYZ":this._x=u*c*h+l*f*m,this._y=l*f*h-u*c*m,this._z=l*c*m+u*f*h,this._w=l*c*h-u*f*m;break;case"YXZ":this._x=u*c*h+l*f*m,this._y=l*f*h-u*c*m,this._z=l*c*m-u*f*h,this._w=l*c*h+u*f*m;break;case"ZXY":this._x=u*c*h-l*f*m,this._y=l*f*h+u*c*m,this._z=l*c*m+u*f*h,this._w=l*c*h-u*f*m;break;case"ZYX":this._x=u*c*h-l*f*m,this._y=l*f*h+u*c*m,this._z=l*c*m-u*f*h,this._w=l*c*h+u*f*m;break;case"YZX":this._x=u*c*h+l*f*m,this._y=l*f*h+u*c*m,this._z=l*c*m-u*f*h,this._w=l*c*h-u*f*m;break;case"XZY":this._x=u*c*h-l*f*m,this._y=l*f*h-u*c*m,this._z=l*c*m+u*f*h,this._w=l*c*h+u*f*m;break;default:xe("Quaternion: .setFromEuler() encountered an unknown order: "+s)}if(t===!0)this._onChangeCallback();return this}setFromAxisAngle(e,t){let i=t/2,n=Math.sin(i);return this._x=e.x*n,this._y=e.y*n,this._z=e.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],n=t[4],r=t[8],s=t[1],o=t[5],a=t[9],l=t[2],c=t[6],h=t[10],u=i+o+h;if(u>0){let f=0.5/Math.sqrt(u+1);this._w=0.25/f,this._x=(c-a)*f,this._y=(r-l)*f,this._z=(s-n)*f}else if(i>o&&i>h){let f=2*Math.sqrt(1+i-o-h);this._w=(c-a)/f,this._x=0.25*f,this._y=(n+s)/f,this._z=(r+l)/f}else if(o>h){let f=2*Math.sqrt(1+o-i-h);this._w=(r-l)/f,this._x=(n+s)/f,this._y=0.25*f,this._z=(a+c)/f}else{let f=2*Math.sqrt(1+h-i-o);this._w=(s-n)/f,this._x=(r+l)/f,this._y=(a+c)/f,this._z=0.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;if(i<0.00000001)if(i=0,Math.abs(e.x)>Math.abs(e.z))this._x=-e.y,this._y=e.x,this._z=0,this._w=i;else this._x=0,this._y=-e.z,this._z=e.y,this._w=i;else this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i;return this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(tt(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let n=Math.min(1,t/i);return this.slerp(e,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();if(e===0)this._x=0,this._y=0,this._z=0,this._w=1;else e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e;return this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let{_x:i,_y:n,_z:r,_w:s}=e,{_x:o,_y:a,_z:l,_w:c}=t;return this._x=i*c+s*o+n*l-r*a,this._y=n*c+s*a+r*o-i*l,this._z=r*c+s*l+i*a-n*o,this._w=s*c-i*o-n*a-r*l,this._onChangeCallback(),this}slerp(e,t){let{_x:i,_y:n,_z:r,_w:s}=e,o=this.dot(e);if(o<0)i=-i,n=-n,r=-r,s=-s,o=-o;let a=1-t;if(o<0.9995){let l=Math.acos(o),c=Math.sin(l);a=Math.sin(a*l)/c,t=Math.sin(t*l)/c,this._x=this._x*a+i*t,this._y=this._y*a+n*t,this._z=this._z*a+r*t,this._w=this._w*a+s*t,this._onChangeCallback()}else this._x=this._x*a+i*t,this._y=this._y*a+n*t,this._z=this._z*a+r*t,this._w=this._w*a+s*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),n=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(n*Math.sin(e),n*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class A{static{this.prototype.isVector3=!0}constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){if(i===void 0)i=this.z;return this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(bu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(bu.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,n=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*n,this.y=r[1]*t+r[4]*i+r[7]*n,this.z=r[2]*t+r[5]*i+r[8]*n,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,n=this.z,r=e.elements,s=1/(r[3]*t+r[7]*i+r[11]*n+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*n+r[12])*s,this.y=(r[1]*t+r[5]*i+r[9]*n+r[13])*s,this.z=(r[2]*t+r[6]*i+r[10]*n+r[14])*s,this}applyQuaternion(e){let t=this.x,i=this.y,n=this.z,{x:r,y:s,z:o,w:a}=e,l=2*(s*n-o*i),c=2*(o*t-r*n),h=2*(r*i-s*t);return this.x=t+a*l+s*h-o*c,this.y=i+a*c+o*l-r*h,this.z=n+a*h+r*c-s*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,n=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*n,this.y=r[1]*t+r[5]*i+r[9]*n,this.z=r[2]*t+r[6]*i+r[10]*n,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=tt(this.x,e.x,t.x),this.y=tt(this.y,e.y,t.y),this.z=tt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=tt(this.x,e,t),this.y=tt(this.y,e,t),this.z=tt(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(tt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let{x:i,y:n,z:r}=e,{x:s,y:o,z:a}=t;return this.x=n*a-r*o,this.y=r*s-i*a,this.z=i*o-n*s,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return dh.copy(this).projectOnVector(e),this.sub(dh)}reflect(e){return this.sub(dh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(tt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,n=this.z-e.z;return t*t+i*i+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let n=Math.sin(t)*e;return this.x=n*Math.sin(i),this.y=Math.cos(t)*e,this.z=n*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),n=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=n,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}var dh=new A,bu=new li;class Ke{static{this.prototype.isMatrix3=!0}constructor(e,t,i,n,r,s,o,a,l){if(this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0)this.set(e,t,i,n,r,s,o,a,l)}set(e,t,i,n,r,s,o,a,l){let c=this.elements;return c[0]=e,c[1]=n,c[2]=o,c[3]=t,c[4]=r,c[5]=a,c[6]=i,c[7]=s,c[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,n=t.elements,r=this.elements,s=i[0],o=i[3],a=i[6],l=i[1],c=i[4],h=i[7],u=i[2],f=i[5],m=i[8],g=n[0],_=n[3],d=n[6],p=n[1],y=n[4],v=n[7],M=n[2],b=n[5],w=n[8];return r[0]=s*g+o*p+a*M,r[3]=s*_+o*y+a*b,r[6]=s*d+o*v+a*w,r[1]=l*g+c*p+h*M,r[4]=l*_+c*y+h*b,r[7]=l*d+c*v+h*w,r[2]=u*g+f*p+m*M,r[5]=u*_+f*y+m*b,r[8]=u*d+f*v+m*w,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],n=e[2],r=e[3],s=e[4],o=e[5],a=e[6],l=e[7],c=e[8];return t*s*c-t*o*l-i*r*c+i*o*a+n*r*l-n*s*a}invert(){let e=this.elements,t=e[0],i=e[1],n=e[2],r=e[3],s=e[4],o=e[5],a=e[6],l=e[7],c=e[8],h=c*s-o*l,u=o*a-c*r,f=l*r-s*a,m=t*h+i*u+n*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let g=1/m;return e[0]=h*g,e[1]=(n*l-c*i)*g,e[2]=(o*i-n*s)*g,e[3]=u*g,e[4]=(c*t-n*a)*g,e[5]=(n*r-o*t)*g,e[6]=f*g,e[7]=(i*a-l*t)*g,e[8]=(s*t-i*r)*g,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,n,r,s,o){let a=Math.cos(r),l=Math.sin(r);return this.set(i*a,i*l,-i*(a*s+l*o)+s+e,-n*l,n*a,-n*(-l*s+a*o)+o+t,0,0,1),this}scale(e,t){return xn("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(ph.makeScale(e,t)),this}rotate(e){return xn("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(ph.makeRotation(-e)),this}translate(e,t){return xn("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(ph.makeTranslation(e,t)),this}makeTranslation(e,t){if(e.isVector2)this.set(1,0,e.x,0,1,e.y,0,0,1);else this.set(1,0,e,0,1,t,0,0,1);return this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let n=0;n<9;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}var ph=new Ke;var Eu=new Ke().set(0.4123908,0.3575843,0.1804808,0.212639,0.7151687,0.0721923,0.0193308,0.1191948,0.9505322),Tu=new Ke().set(3.2409699,-1.5373832,-0.4986108,-0.9692436,1.8759675,0.0415551,0.0556301,-0.203977,1.0569715);function rx(){let e={enabled:!0,workingColorSpace:Zr,spaces:{},convert:function(r,s,o){if(this.enabled===!1||s===o||!s||!o)return r;if(this.spaces[s].transfer===gt)r.r=In(r.r),r.g=In(r.g),r.b=In(r.b);if(this.spaces[s].primaries!==this.spaces[o].primaries)r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ);if(this.spaces[o].transfer===gt)r.r=Qr(r.r),r.g=Qr(r.g),r.b=Qr(r.b);return r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){if(r===gn)return Jr;return this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[o].fromXYZ).multiply(this.spaces[s].toXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}},t=[0.64,0.33,0.3,0.6,0.15,0.06],i=[0.2126,0.7152,0.0722],n=[0.3127,0.329];return e.define({[Zr]:{primaries:t,whitePoint:n,transfer:Jr,toXYZ:Eu,fromXYZ:Tu,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Rt},outputColorSpaceConfig:{drawingBufferColorSpace:Rt}},[Rt]:{primaries:t,whitePoint:n,transfer:gt,toXYZ:Eu,fromXYZ:Tu,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Rt}}}),e}var it=rx();function In(e){return e<0.04045?e*0.0773993808:Math.pow(e*0.9478672986+0.0521327014,2.4)}function Qr(e){return e<0.0031308?e*12.92:1.055*Math.pow(e,0.41666)-0.055}var Ws;class zl{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src))return e.src;if(typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{if(Ws===void 0)Ws=mr("canvas");Ws.width=e.width,Ws.height=e.height;let n=Ws.getContext("2d");if(e instanceof ImageData)n.putImageData(e,0,0);else n.drawImage(e,0,0,e.width,e.height);i=Ws}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=mr("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let n=i.getImageData(0,0,e.width,e.height),r=n.data;for(let s=0;s<r.length;s++)r[s]=In(r[s]/255)*255;return i.putImageData(n,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)if(t instanceof Uint8Array||t instanceof Uint8ClampedArray)t[i]=Math.floor(In(t[i]/255)*255);else t[i]=In(t[i]);return{data:t,width:e.width,height:e.height}}else return xe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}var sx=0;class zn{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:sx++}),this.uuid=Si(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;if(typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement)e.set(t.videoWidth,t.videoHeight,0);else if(typeof VideoFrame<"u"&&t instanceof VideoFrame)e.set(t.displayWidth,t.displayHeight,0);else if(t!==null)e.set(t.width||0,t.height||0,t.depth||0);else e.set(0,0,0);return e}set needsUpdate(e){if(e===!0)this.version++}toJSON(e){let t=e===void 0||typeof e==="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let r;if(Array.isArray(n)){r=[];for(let s=0,o=n.length;s<o;s++)if(n[s].isDataTexture)r.push(mh(n[s].image));else r.push(mh(n[s]))}else r=mh(n);i.url=r}if(!t)e.images[this.uuid]=i;return i}}function mh(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap)return zl.getDataURL(e);else if(e.data)return{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name};else return xe("Texture: Unable to serialize Texture."),{}}var ox=0,gh=new A;class Mt extends di{constructor(e=Mt.DEFAULT_IMAGE,t=Mt.DEFAULT_MAPPING,i=Ci,n=Ci,r=qt,s=Vi,o=vi,a=ri,l=Mt.DEFAULT_ANISOTROPY,c=gn){super();this.isTexture=!0,Object.defineProperty(this,"id",{value:ox++}),this.uuid=Si(),this.name="",this.source=new zn(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=r,this.minFilter=s,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=a,this.offset=new W(0,0),this.repeat=new W(1,1),this.center=new W(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ke,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=e&&e.depth&&e.depth>1?!0:!1,this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(gh).x}get height(){return this.source.getSize(gh).y}get depth(){return this.source.getSize(gh).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){xe(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let n=this[t];if(n===void 0){xe(`Texture.setValues(): property '${t}' does not exist.`);continue}if(n&&i&&(n.isVector2&&i.isVector2))n.copy(i);else if(n&&i&&(n.isVector3&&i.isVector3))n.copy(i);else if(n&&i&&(n.isMatrix3&&i.isMatrix3))n.copy(i);else this[t]=i}}toJSON(e){let t=e===void 0||typeof e==="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(Object.keys(this.userData).length>0)i.userData=this.userData;if(!t)e.textures[this.uuid]=i;return i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==vl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Qn:e.x=e.x-Math.floor(e.x);break;case Ci:e.x=e.x<0?0:1;break;case Cs:if(Math.abs(Math.floor(e.x)%2)===1)e.x=Math.ceil(e.x)-e.x;else e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Qn:e.y=e.y-Math.floor(e.y);break;case Ci:e.y=e.y<0?0:1;break;case Cs:if(Math.abs(Math.floor(e.y)%2)===1)e.y=Math.ceil(e.y)-e.y;else e.y=e.y-Math.floor(e.y);break}if(this.flipY)e.y=1-e.y;return e}set needsUpdate(e){if(e===!0)this.version++,this.source.needsUpdate=!0}set needsPMREMUpdate(e){if(e===!0)this.pmremVersion++}}Mt.DEFAULT_IMAGE=null;Mt.DEFAULT_MAPPING=vl;Mt.DEFAULT_ANISOTROPY=1;class St{static{this.prototype.isVector4=!0}constructor(e=0,t=0,i=0,n=1){this.x=e,this.y=t,this.z=i,this.w=n}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,n){return this.x=e,this.y=t,this.z=i,this.w=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,n=this.z,r=this.w,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*n+s[12]*r,this.y=s[1]*t+s[5]*i+s[9]*n+s[13]*r,this.z=s[2]*t+s[6]*i+s[10]*n+s[14]*r,this.w=s[3]*t+s[7]*i+s[11]*n+s[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);if(t<0.0001)this.x=1,this.y=0,this.z=0;else this.x=e.x/t,this.y=e.y/t,this.z=e.z/t;return this}setAxisAngleFromRotationMatrix(e){let t,i,n,r,s=0.01,o=0.1,a=e.elements,l=a[0],c=a[4],h=a[8],u=a[1],f=a[5],m=a[9],g=a[2],_=a[6],d=a[10];if(Math.abs(c-u)<0.01&&Math.abs(h-g)<0.01&&Math.abs(m-_)<0.01){if(Math.abs(c+u)<0.1&&Math.abs(h+g)<0.1&&Math.abs(m+_)<0.1&&Math.abs(l+f+d-3)<0.1)return this.set(1,0,0,0),this;t=Math.PI;let y=(l+1)/2,v=(f+1)/2,M=(d+1)/2,b=(c+u)/4,w=(h+g)/4,x=(m+_)/4;if(y>v&&y>M)if(y<0.01)i=0,n=0.707106781,r=0.707106781;else i=Math.sqrt(y),n=b/i,r=w/i;else if(v>M)if(v<0.01)i=0.707106781,n=0,r=0.707106781;else n=Math.sqrt(v),i=b/n,r=x/n;else if(M<0.01)i=0.707106781,n=0.707106781,r=0;else r=Math.sqrt(M),i=w/r,n=x/r;return this.set(i,n,r,t),this}let p=Math.sqrt((_-m)*(_-m)+(h-g)*(h-g)+(u-c)*(u-c));if(Math.abs(p)<0.001)p=1;return this.x=(_-m)/p,this.y=(h-g)/p,this.z=(u-c)/p,this.w=Math.acos((l+f+d-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=tt(this.x,e.x,t.x),this.y=tt(this.y,e.y,t.y),this.z=tt(this.z,e.z,t.z),this.w=tt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=tt(this.x,e,t),this.y=tt(this.y,e,t),this.z=tt(this.z,e,t),this.w=tt(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(tt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class wa extends di{constructor(e=1,t=1,i={}){super();i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:qt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new St(0,0,e,t),this.scissorTest=!1,this.viewport=new St(0,0,e,t),this.textures=[];let n=i.count;for(let r=0;r<n;r++)this.textures[r]=new Mt({width:e,height:t,depth:i.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:qt,generateMipmaps:!1,flipY:!1,internalFormat:null};if(e.mapping!==void 0)t.mapping=e.mapping;if(e.wrapS!==void 0)t.wrapS=e.wrapS;if(e.wrapT!==void 0)t.wrapT=e.wrapT;if(e.wrapR!==void 0)t.wrapR=e.wrapR;if(e.magFilter!==void 0)t.magFilter=e.magFilter;if(e.minFilter!==void 0)t.minFilter=e.minFilter;if(e.format!==void 0)t.format=e.format;if(e.type!==void 0)t.type=e.type;if(e.anisotropy!==void 0)t.anisotropy=e.anisotropy;if(e.colorSpace!==void 0)t.colorSpace=e.colorSpace;if(e.flipY!==void 0)t.flipY=e.flipY;if(e.generateMipmaps!==void 0)t.generateMipmaps=e.generateMipmaps;if(e.mipmapsAutoUpdate!==void 0)t.mipmapsAutoUpdate=e.mipmapsAutoUpdate;if(e.internalFormat!==void 0)t.internalFormat=e.internalFormat;for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){if(this._depthTexture!==null&&this._depthTexture.renderTarget===this)this._depthTexture.renderTarget=null;if(e!==null&&e.renderTarget===null)e.renderTarget=this;this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let n=0,r=this.textures.length;n<r;n++)if(this.textures[n].image.width=e,this.textures[n].image.height=t,this.textures[n].image.depth=i,this.textures[n].isData3DTexture!==!0)this.textures[n].isArrayTexture=this.textures[n].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new zn(n)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Wt extends wa{constructor(e=1,t=1,i={}){super(e,t,i);this.isWebGLRenderTarget=!0}}class jr extends Mt{constructor(e=null,t=1,i=1,n=1){super(null);this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=Vt,this.minFilter=Vt,this.wrapR=Ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Xs extends Mt{constructor(e=null,t=1,i=1,n=1){super(null);this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=Vt,this.minFilter=Vt,this.wrapR=Ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}class qe{static{this.prototype.isMatrix4=!0}constructor(e,t,i,n,r,s,o,a,l,c,h,u,f,m,g,_){if(this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0)this.set(e,t,i,n,r,s,o,a,l,c,h,u,f,m,g,_)}set(e,t,i,n,r,s,o,a,l,c,h,u,f,m,g,_){let d=this.elements;return d[0]=e,d[4]=t,d[8]=i,d[12]=n,d[1]=r,d[5]=s,d[9]=o,d[13]=a,d[2]=l,d[6]=c,d[10]=h,d[14]=u,d[3]=f,d[7]=m,d[11]=g,d[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new qe().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){if(this.determinantAffine()===0)return e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this;return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,i=e.elements,n=1/qs.setFromMatrixColumn(e,0).length(),r=1/qs.setFromMatrixColumn(e,1).length(),s=1/qs.setFromMatrixColumn(e,2).length();return t[0]=i[0]*n,t[1]=i[1]*n,t[2]=i[2]*n,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*s,t[9]=i[9]*s,t[10]=i[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,{x:i,y:n,z:r}=e,s=Math.cos(i),o=Math.sin(i),a=Math.cos(n),l=Math.sin(n),c=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){let u=s*c,f=s*h,m=o*c,g=o*h;t[0]=a*c,t[4]=-a*h,t[8]=l,t[1]=f+m*l,t[5]=u-g*l,t[9]=-o*a,t[2]=g-u*l,t[6]=m+f*l,t[10]=s*a}else if(e.order==="YXZ"){let u=a*c,f=a*h,m=l*c,g=l*h;t[0]=u+g*o,t[4]=m*o-f,t[8]=s*l,t[1]=s*h,t[5]=s*c,t[9]=-o,t[2]=f*o-m,t[6]=g+u*o,t[10]=s*a}else if(e.order==="ZXY"){let u=a*c,f=a*h,m=l*c,g=l*h;t[0]=u-g*o,t[4]=-s*h,t[8]=m+f*o,t[1]=f+m*o,t[5]=s*c,t[9]=g-u*o,t[2]=-s*l,t[6]=o,t[10]=s*a}else if(e.order==="ZYX"){let u=s*c,f=s*h,m=o*c,g=o*h;t[0]=a*c,t[4]=m*l-f,t[8]=u*l+g,t[1]=a*h,t[5]=g*l+u,t[9]=f*l-m,t[2]=-l,t[6]=o*a,t[10]=s*a}else if(e.order==="YZX"){let u=s*a,f=s*l,m=o*a,g=o*l;t[0]=a*c,t[4]=g-u*h,t[8]=m*h+f,t[1]=h,t[5]=s*c,t[9]=-o*c,t[2]=-l*c,t[6]=f*h+m,t[10]=u-g*h}else if(e.order==="XZY"){let u=s*a,f=s*l,m=o*a,g=o*l;t[0]=a*c,t[4]=-h,t[8]=l*c,t[1]=u*h+g,t[5]=s*c,t[9]=f*h-m,t[2]=m*h-f,t[6]=o*c,t[10]=g*h+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ax,e,lx)}lookAt(e,t,i){let n=this.elements;if(sn.subVectors(e,t),sn.lengthSq()===0)sn.z=1;if(sn.normalize(),gr.crossVectors(i,sn),gr.lengthSq()===0){if(Math.abs(i.z)===1)sn.x+=0.0001;else sn.z+=0.0001;sn.normalize(),gr.crossVectors(i,sn)}return gr.normalize(),Gl.crossVectors(sn,gr),n[0]=gr.x,n[4]=Gl.x,n[8]=sn.x,n[1]=gr.y,n[5]=Gl.y,n[9]=sn.y,n[2]=gr.z,n[6]=Gl.z,n[10]=sn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,n=t.elements,r=this.elements,s=i[0],o=i[4],a=i[8],l=i[12],c=i[1],h=i[5],u=i[9],f=i[13],m=i[2],g=i[6],_=i[10],d=i[14],p=i[3],y=i[7],v=i[11],M=i[15],b=n[0],w=n[4],x=n[8],S=n[12],R=n[1],U=n[5],I=n[9],O=n[13],te=n[2],P=n[6],Z=n[10],L=n[14],N=n[3],ee=n[7],G=n[11],Y=n[15];return r[0]=s*b+o*R+a*te+l*N,r[4]=s*w+o*U+a*P+l*ee,r[8]=s*x+o*I+a*Z+l*G,r[12]=s*S+o*O+a*L+l*Y,r[1]=c*b+h*R+u*te+f*N,r[5]=c*w+h*U+u*P+f*ee,r[9]=c*x+h*I+u*Z+f*G,r[13]=c*S+h*O+u*L+f*Y,r[2]=m*b+g*R+_*te+d*N,r[6]=m*w+g*U+_*P+d*ee,r[10]=m*x+g*I+_*Z+d*G,r[14]=m*S+g*O+_*L+d*Y,r[3]=p*b+y*R+v*te+M*N,r[7]=p*w+y*U+v*P+M*ee,r[11]=p*x+y*I+v*Z+M*G,r[15]=p*S+y*O+v*L+M*Y,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],n=e[8],r=e[12],s=e[1],o=e[5],a=e[9],l=e[13],c=e[2],h=e[6],u=e[10],f=e[14],m=e[3],g=e[7],_=e[11],d=e[15],p=a*f-l*u,y=o*f-l*h,v=o*u-a*h,M=s*f-l*c,b=s*u-a*c,w=s*h-o*c;return t*(g*p-_*y+d*v)-i*(m*p-_*M+d*b)+n*(m*y-g*M+d*w)-r*(m*v-g*b+_*w)}determinantAffine(){let e=this.elements,t=e[0],i=e[4],n=e[8],r=e[1],s=e[5],o=e[9],a=e[2],l=e[6],c=e[10];return t*(s*c-o*l)-i*(r*c-o*a)+n*(r*l-s*a)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let n=this.elements;if(e.isVector3)n[12]=e.x,n[13]=e.y,n[14]=e.z;else n[12]=e,n[13]=t,n[14]=i;return this}invert(){let e=this.elements,t=e[0],i=e[1],n=e[2],r=e[3],s=e[4],o=e[5],a=e[6],l=e[7],c=e[8],h=e[9],u=e[10],f=e[11],m=e[12],g=e[13],_=e[14],d=e[15],p=t*o-i*s,y=t*a-n*s,v=t*l-r*s,M=i*a-n*o,b=i*l-r*o,w=n*l-r*a,x=c*g-h*m,S=c*_-u*m,R=c*d-f*m,U=h*_-u*g,I=h*d-f*g,O=u*d-f*_,te=p*O-y*I+v*U+M*R-b*S+w*x;if(te===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let P=1/te;return e[0]=(o*O-a*I+l*U)*P,e[1]=(n*I-i*O-r*U)*P,e[2]=(g*w-_*b+d*M)*P,e[3]=(u*b-h*w-f*M)*P,e[4]=(a*R-s*O-l*S)*P,e[5]=(t*O-n*R+r*S)*P,e[6]=(_*v-m*w-d*y)*P,e[7]=(c*w-u*v+f*y)*P,e[8]=(s*I-o*R+l*x)*P,e[9]=(i*R-t*I-r*x)*P,e[10]=(m*b-g*v+d*p)*P,e[11]=(h*v-c*b-f*p)*P,e[12]=(o*S-s*U-a*x)*P,e[13]=(t*U-i*S+n*x)*P,e[14]=(g*y-m*M-_*p)*P,e[15]=(c*M-h*y+u*p)*P,this}scale(e){let t=this.elements,{x:i,y:n,z:r}=e;return t[0]*=i,t[4]*=n,t[8]*=r,t[1]*=i,t[5]*=n,t[9]*=r,t[2]*=i,t[6]*=n,t[10]*=r,t[3]*=i,t[7]*=n,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],n=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,n))}makeTranslation(e,t,i){if(e.isVector3)this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1);else this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1);return this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),n=Math.sin(t),r=1-i,{x:s,y:o,z:a}=e,l=r*s,c=r*o;return this.set(l*s+i,l*o-n*a,l*a+n*o,0,l*o+n*a,c*o+i,c*a-n*s,0,l*a-n*o,c*a+n*s,r*a*a+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,n,r,s){return this.set(1,i,r,0,e,1,s,0,t,n,1,0,0,0,0,1),this}compose(e,t,i){let n=this.elements,{_x:r,_y:s,_z:o,_w:a}=t,l=r+r,c=s+s,h=o+o,u=r*l,f=r*c,m=r*h,g=s*c,_=s*h,d=o*h,p=a*l,y=a*c,v=a*h,{x:M,y:b,z:w}=i;return n[0]=(1-(g+d))*M,n[1]=(f+v)*M,n[2]=(m-y)*M,n[3]=0,n[4]=(f-v)*b,n[5]=(1-(u+d))*b,n[6]=(_+p)*b,n[7]=0,n[8]=(m+y)*w,n[9]=(_-p)*w,n[10]=(1-(u+g))*w,n[11]=0,n[12]=e.x,n[13]=e.y,n[14]=e.z,n[15]=1,this}decompose(e,t,i){let n=this.elements;e.x=n[12],e.y=n[13],e.z=n[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),t.identity(),this;let s=qs.set(n[0],n[1],n[2]).length(),o=qs.set(n[4],n[5],n[6]).length(),a=qs.set(n[8],n[9],n[10]).length();if(r<0)s=-s;Ln.copy(this);let l=1/s,c=1/o,h=1/a;return Ln.elements[0]*=l,Ln.elements[1]*=l,Ln.elements[2]*=l,Ln.elements[4]*=c,Ln.elements[5]*=c,Ln.elements[6]*=c,Ln.elements[8]*=h,Ln.elements[9]*=h,Ln.elements[10]*=h,t.setFromRotationMatrix(Ln),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,n,r,s,o=Mi,a=!1){let l=this.elements,c=2*r/(t-e),h=2*r/(i-n),u=(t+e)/(t-e),f=(i+n)/(i-n),m,g;if(a)m=r/(s-r),g=s*r/(s-r);else if(o===Mi)m=-(s+r)/(s-r),g=-2*s*r/(s-r);else if(o===On)m=-s/(s-r),g=-s*r/(s-r);else throw Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,n,r,s,o=Mi,a=!1){let l=this.elements,c=2/(t-e),h=2/(i-n),u=-(t+e)/(t-e),f=-(i+n)/(i-n),m,g;if(a)m=1/(s-r),g=s/(s-r);else if(o===Mi)m=-2/(s-r),g=-(s+r)/(s-r);else if(o===On)m=-1/(s-r),g=-r/(s-r);else throw Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=0,l[12]=u,l[1]=0,l[5]=h,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let n=0;n<16;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}var qs=new A,Ln=new qe,ax=new A(0,0,0),lx=new A(1,1,1),gr=new A,Gl=new A,sn=new A;var wu=new qe,Au=new li;class Oi{constructor(e=0,t=0,i=0,n=Oi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=n}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,n=this._order){return this._x=e,this._y=t,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let n=e.elements,r=n[0],s=n[4],o=n[8],a=n[1],l=n[5],c=n[9],h=n[2],u=n[6],f=n[10];switch(t){case"XYZ":if(this._y=Math.asin(tt(o,-1,1)),Math.abs(o)<0.9999999)this._x=Math.atan2(-c,f),this._z=Math.atan2(-s,r);else this._x=Math.atan2(u,l),this._z=0;break;case"YXZ":if(this._x=Math.asin(-tt(c,-1,1)),Math.abs(c)<0.9999999)this._y=Math.atan2(o,f),this._z=Math.atan2(a,l);else this._y=Math.atan2(-h,r),this._z=0;break;case"ZXY":if(this._x=Math.asin(tt(u,-1,1)),Math.abs(u)<0.9999999)this._y=Math.atan2(-h,f),this._z=Math.atan2(-s,l);else this._y=0,this._z=Math.atan2(a,r);break;case"ZYX":if(this._y=Math.asin(-tt(h,-1,1)),Math.abs(h)<0.9999999)this._x=Math.atan2(u,f),this._z=Math.atan2(a,r);else this._x=0,this._z=Math.atan2(-s,l);break;case"YZX":if(this._z=Math.asin(tt(a,-1,1)),Math.abs(a)<0.9999999)this._x=Math.atan2(-c,l),this._y=Math.atan2(-h,r);else this._x=0,this._y=Math.atan2(o,f);break;case"XZY":if(this._z=Math.asin(-tt(s,-1,1)),Math.abs(s)<0.9999999)this._x=Math.atan2(u,l),this._y=Math.atan2(o,r);else this._x=Math.atan2(-c,f),this._y=0;break;default:xe("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}if(this._order=t,i===!0)this._onChangeCallback();return this}setFromQuaternion(e,t,i){return wu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(wu,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Au.setFromEuler(this),this.setFromQuaternion(Au,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){if(this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0)this._order=e[3];return this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Oi.DEFAULT_ORDER="XYZ";class xr{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}var cx=0,Ru=new A,Ys=new li,er=new qe,Hl=new A,Aa=new A,hx=new A,fx=new li,Cu=new A(1,0,0),Pu=new A(0,1,0),Iu=new A(0,0,1),Lu={type:"added"},ux={type:"removed"},Zs={type:"childadded",child:null},xh={type:"childremoved",child:null};class ct extends di{constructor(){super();this.isObject3D=!0,Object.defineProperty(this,"id",{value:cx++}),this.uuid=Si(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ct.DEFAULT_UP.clone();let e=new A,t=new Oi,i=new li,n=new A(1,1,1);function r(){i.setFromEuler(t,!1)}function s(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new qe},normalMatrix:{value:new Ke}}),this.matrix=new qe,this.matrixWorld=new qe,this.matrixAutoUpdate=ct.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ct.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new xr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null)this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ys.setFromAxisAngle(e,t),this.quaternion.multiply(Ys),this}rotateOnWorldAxis(e,t){return Ys.setFromAxisAngle(e,t),this.quaternion.premultiply(Ys),this}rotateX(e){return this.rotateOnAxis(Cu,e)}rotateY(e){return this.rotateOnAxis(Pu,e)}rotateZ(e){return this.rotateOnAxis(Iu,e)}translateOnAxis(e,t){return Ru.copy(e).applyQuaternion(this.quaternion),this.position.add(Ru.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Cu,e)}translateY(e){return this.translateOnAxis(Pu,e)}translateZ(e){return this.translateOnAxis(Iu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(er.copy(this.matrixWorld).invert())}lookAt(e,t,i){if(e.isVector3)Hl.copy(e);else Hl.set(e,t,i);let n=this.parent;if(this.updateWorldMatrix(!0,!1),Aa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight)er.lookAt(Aa,Hl,this.up);else er.lookAt(Hl,Aa,this.up);if(this.quaternion.setFromRotationMatrix(er),n)er.extractRotation(n.matrixWorld),Ys.setFromRotationMatrix(er),this.quaternion.premultiply(Ys.invert())}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}if(e===this)return Be("Object3D.add: object can't be added as a child of itself.",e),this;if(e&&e.isObject3D)e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Lu),Zs.child=e,this.dispatchEvent(Zs),Zs.child=null;else Be("Object3D.add: object not an instance of THREE.Object3D.",e);return this}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);if(t!==-1)e.parent=null,this.children.splice(t,1),e.dispatchEvent(ux),xh.child=e,this.dispatchEvent(xh),xh.child=null;return this}removeFromParent(){let e=this.parent;if(e!==null)e.remove(this);return this}clear(){return this.remove(...this.children)}attach(e){if(this.updateWorldMatrix(!0,!1),er.copy(this.matrixWorld).invert(),e.parent!==null)e.parent.updateWorldMatrix(!0,!1),er.multiply(e.parent.matrixWorld);return e.applyMatrix4(er),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Lu),Zs.child=e,this.dispatchEvent(Zs),Zs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,n=this.children.length;i<n;i++){let s=this.children[i].getObjectByProperty(e,t);if(s!==void 0)return s}return}getObjectsByProperty(e,t,i=[]){if(this[e]===t)i.push(this);let n=this.children;for(let r=0,s=n.length;r<s;r++)n[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Aa,e,hx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Aa,fx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;if(t!==null)e(t),t.traverseAncestors(e)}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let{x:t,y:i,z:n}=e,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*n,r[13]+=i-r[1]*t-r[5]*i-r[9]*n,r[14]+=n-r[2]*t-r[6]*i-r[10]*n}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||e){if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,e=!0}let t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){let n=this.parent;if(e===!0&&n!==null)n.updateWorldMatrix(!0,!1);if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||i){if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,i=!0}if(t===!0){let r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0,i)}}toJSON(e){let t=e===void 0||typeof e==="string",i={};if(t)e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"};let n={};if(n.uuid=this.uuid,n.type=this.type,n.name=this.name,n.castShadow=this.castShadow,n.receiveShadow=this.receiveShadow,n.visible=this.visible,n.frustumCulled=this.frustumCulled,n.renderOrder=this.renderOrder,n.static=this.static,n.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0)n.userData=this.userData;if(n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.pivot!==null)n.pivot=this.pivot.toArray();if(this.morphTargetDictionary!==void 0)n.morphTargetDictionary=Object.assign({},this.morphTargetDictionary);if(this.morphTargetInfluences!==void 0)n.morphTargetInfluences=this.morphTargetInfluences.slice();if(this.isInstancedMesh){if(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null)n.instanceColor=this.instanceColor.toJSON()}if(this.isBatchedMesh){if(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.geometryInfo=this._geometryInfo.map((o)=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),n.instanceInfo=this._instanceInfo.map((o)=>({...o})),n.availableInstanceIds=this._availableInstanceIds.slice(),n.availableGeometryIds=this._availableGeometryIds.slice(),n.nextIndexStart=this._nextIndexStart,n.nextVertexStart=this._nextVertexStart,n.geometryCount=this._geometryCount,n.maxInstanceCount=this._maxInstanceCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.matricesTexture=this._matricesTexture.toJSON(e),n.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null)n.colorsTexture=this._colorsTexture.toJSON(e);if(this.boundingSphere!==null)n.boundingSphere=this.boundingSphere.toJSON();if(this.boundingBox!==null)n.boundingBox=this.boundingBox.toJSON()}function r(o,a){if(o[a.uuid]===void 0)o[a.uuid]=a.toJSON(e);return a.uuid}if(this.isScene){if(this.background){if(this.background.isColor)n.background=this.background.toJSON();else if(this.background.isTexture)n.background=this.background.toJSON(e).uuid}if(this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0)n.environment=this.environment.toJSON(e).uuid}else if(this.isMesh||this.isLine||this.isPoints){n.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let a=o.shapes;if(Array.isArray(a))for(let l=0,c=a.length;l<c;l++){let h=a[l];r(e.shapes,h)}else r(e.shapes,a)}}if(this.isSkinnedMesh){if(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0)r(e.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid}if(this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let a=0,l=this.material.length;a<l;a++)o.push(r(e.materials,this.material[a]));n.material=o}else n.material=r(e.materials,this.material);if(this.children.length>0){n.children=[];for(let o=0;o<this.children.length;o++)n.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){n.animations=[];for(let o=0;o<this.animations.length;o++){let a=this.animations[o];n.animations.push(r(e.animations,a))}}if(t){let o=s(e.geometries),a=s(e.materials),l=s(e.textures),c=s(e.images),h=s(e.shapes),u=s(e.skeletons),f=s(e.animations),m=s(e.nodes);if(o.length>0)i.geometries=o;if(a.length>0)i.materials=a;if(l.length>0)i.textures=l;if(c.length>0)i.images=c;if(h.length>0)i.shapes=h;if(u.length>0)i.skeletons=u;if(f.length>0)i.animations=f;if(m.length>0)i.nodes=m}return i.object=n,i;function s(o){let a=[];for(let l in o){let c=o[l];delete c.metadata,a.push(c)}return a}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let n=e.children[i];this.add(n.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}ct.DEFAULT_UP=new A(0,1,0);ct.DEFAULT_MATRIX_AUTO_UPDATE=!0;ct.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class rt extends ct{constructor(){super();this.isGroup=!0,this.type="Group"}}var dx={type:"move"};class Js{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){if(this._hand===null)this._hand=new rt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1};return this._hand}getTargetRaySpace(){if(this._targetRay===null)this._targetRay=new rt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new A,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new A;return this._targetRay}getGripSpace(){if(this._grip===null)this._grip=new rt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new A,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new A,this._grip.eventsEnabled=!1;return this._grip}dispatchEvent(e){if(this._targetRay!==null)this._targetRay.dispatchEvent(e);if(this._grip!==null)this._grip.dispatchEvent(e);if(this._hand!==null)this._hand.dispatchEvent(e);return this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){if(this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null)this._targetRay.visible=!1;if(this._grip!==null)this._grip.visible=!1;if(this._hand!==null)this._hand.visible=!1;return this}update(e,t,i){let n=null,r=null,s=null,o=this._targetRay,a=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){s=!0;for(let g of e.hand.values()){let _=t.getJointPose(g,i),d=this._getHandJoint(l,g);if(_!==null)d.matrix.fromArray(_.transform.matrix),d.matrix.decompose(d.position,d.quaternion,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=_.radius;d.visible=_!==null}let c=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],u=c.position.distanceTo(h.position),f=0.02,m=0.005;if(l.inputState.pinching&&u>f+m)l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this});else if(!l.inputState.pinching&&u<=f-m)l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this})}else if(a!==null&&e.gripSpace){if(r=t.getPose(e.gripSpace,i),r!==null){if(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity)a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity);else a.hasLinearVelocity=!1;if(r.angularVelocity)a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity);else a.hasAngularVelocity=!1;if(a.eventsEnabled)a.dispatchEvent({type:"gripUpdated",data:e,target:this})}}if(o!==null){if(n=t.getPose(e.targetRaySpace,i),n===null&&r!==null)n=r;if(n!==null){if(o.matrix.fromArray(n.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,n.linearVelocity)o.hasLinearVelocity=!0,o.linearVelocity.copy(n.linearVelocity);else o.hasLinearVelocity=!1;if(n.angularVelocity)o.hasAngularVelocity=!0,o.angularVelocity.copy(n.angularVelocity);else o.hasAngularVelocity=!1;this.dispatchEvent(dx)}}}if(o!==null)o.visible=n!==null;if(a!==null)a.visible=r!==null;if(l!==null)l.visible=s!==null;return this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new rt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}var Du={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},_r={h:0,s:0,l:0},kl={h:0,s:0,l:0};function _h(e,t,i){if(i<0)i+=1;if(i>1)i-=1;if(i<0.16666666666666666)return e+(t-e)*6*i;if(i<0.5)return t;if(i<0.6666666666666666)return e+(t-e)*6*(0.6666666666666666-i);return e}class ue{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let n=e;if(n&&n.isColor)this.copy(n);else if(typeof n==="number")this.setHex(n);else if(typeof n==="string")this.setStyle(n)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Rt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,it.colorSpaceToWorking(this,t),this}setRGB(e,t,i,n=it.workingColorSpace){return this.r=e,this.g=t,this.b=i,it.colorSpaceToWorking(this,n),this}setHSL(e,t,i,n=it.workingColorSpace){if(e=Mu(e,1),t=tt(t,0,1),i=tt(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=0.5?i*(1+t):i+t-i*t,s=2*i-r;this.r=_h(s,r,e+0.3333333333333333),this.g=_h(s,r,e),this.b=_h(s,r,e-0.3333333333333333)}return it.colorSpaceToWorking(this,n),this}setStyle(e,t=Rt){function i(r){if(r===void 0)return;if(parseFloat(r)<1)xe("Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,s=n[1],o=n[2];switch(s){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:xe("Color: Unknown color model "+e)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=n[1],s=r.length;if(s===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);else if(s===6)return this.setHex(parseInt(r,16),t);else xe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Rt){let i=Du[e.toLowerCase()];if(i!==void 0)this.setHex(i,t);else xe("Color: Unknown color "+e);return this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=In(e.r),this.g=In(e.g),this.b=In(e.b),this}copyLinearToSRGB(e){return this.r=Qr(e.r),this.g=Qr(e.g),this.b=Qr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Rt){return it.workingToColorSpace(zi.copy(this),e),Math.round(tt(zi.r*255,0,255))*65536+Math.round(tt(zi.g*255,0,255))*256+Math.round(tt(zi.b*255,0,255))}getHexString(e=Rt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=it.workingColorSpace){it.workingToColorSpace(zi.copy(this),t);let{r:i,g:n,b:r}=zi,s=Math.max(i,n,r),o=Math.min(i,n,r),a,l,c=(o+s)/2;if(o===s)a=0,l=0;else{let h=s-o;switch(l=c<=0.5?h/(s+o):h/(2-s-o),s){case i:a=(n-r)/h+(n<r?6:0);break;case n:a=(r-i)/h+2;break;case r:a=(i-n)/h+4;break}a/=6}return e.h=a,e.s=l,e.l=c,e}getRGB(e,t=it.workingColorSpace){return it.workingToColorSpace(zi.copy(this),t),e.r=zi.r,e.g=zi.g,e.b=zi.b,e}getStyle(e=Rt){it.workingToColorSpace(zi.copy(this),e);let{r:t,g:i,b:n}=zi;if(e!==Rt)return`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`;return`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(e,t,i){return this.getHSL(_r),this.setHSL(_r.h+e,_r.s+t,_r.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(_r),e.getHSL(kl);let i=Fl(_r.h,kl.h,t),n=Fl(_r.s,kl.s,t),r=Fl(_r.l,kl.l,t);return this.setHSL(i,n,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,n=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*n,this.g=r[1]*t+r[4]*i+r[7]*n,this.b=r[2]*t+r[5]*i+r[8]*n,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}var zi=new ue;ue.NAMES=Du;class Ks{constructor(e,t=1,i=1000){this.isFog=!0,this.name="",this.color=new ue(e),this.near=t,this.far=i}clone(){return new Ks(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class es extends ct{constructor(){super();if(this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Oi,this.environmentIntensity=1,this.environmentRotation=new Oi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);if(this.fog!==null)t.object.fog=this.fog.toJSON();return t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}var Dn=new A,tr=new A,yh=new A,ir=new A,$s=new A,Qs=new A,Nu=new A,vh=new A,Mh=new A,Sh=new A,bh=new St,Eh=new St,Th=new St;class Pi{constructor(e=new A,t=new A,i=new A){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,n){n.subVectors(i,t),Dn.subVectors(e,t),n.cross(Dn);let r=n.lengthSq();if(r>0)return n.multiplyScalar(1/Math.sqrt(r));return n.set(0,0,0)}static getBarycoord(e,t,i,n,r){Dn.subVectors(n,t),tr.subVectors(i,t),yh.subVectors(e,t);let s=Dn.dot(Dn),o=Dn.dot(tr),a=Dn.dot(yh),l=tr.dot(tr),c=tr.dot(yh),h=s*l-o*o;if(h===0)return r.set(0,0,0),null;let u=1/h,f=(l*a-o*c)*u,m=(s*c-o*a)*u;return r.set(1-f-m,m,f)}static containsPoint(e,t,i,n){if(this.getBarycoord(e,t,i,n,ir)===null)return!1;return ir.x>=0&&ir.y>=0&&ir.x+ir.y<=1}static getInterpolation(e,t,i,n,r,s,o,a){if(this.getBarycoord(e,t,i,n,ir)===null){if(a.x=0,a.y=0,"z"in a)a.z=0;if("w"in a)a.w=0;return null}return a.setScalar(0),a.addScaledVector(r,ir.x),a.addScaledVector(s,ir.y),a.addScaledVector(o,ir.z),a}static getInterpolatedAttribute(e,t,i,n,r,s){return bh.setScalar(0),Eh.setScalar(0),Th.setScalar(0),bh.fromBufferAttribute(e,t),Eh.fromBufferAttribute(e,i),Th.fromBufferAttribute(e,n),s.setScalar(0),s.addScaledVector(bh,r.x),s.addScaledVector(Eh,r.y),s.addScaledVector(Th,r.z),s}static isFrontFacing(e,t,i,n){return Dn.subVectors(i,t),tr.subVectors(e,t),Dn.cross(tr).dot(n)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,n){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[n]),this}setFromAttributeAndIndices(e,t,i,n){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Dn.subVectors(this.c,this.b),tr.subVectors(this.a,this.b),Dn.cross(tr).length()*0.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(0.3333333333333333)}getNormal(e){return Pi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Pi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,n,r){return Pi.getInterpolation(e,this.a,this.b,this.c,t,i,n,r)}containsPoint(e){return Pi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Pi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,n=this.b,r=this.c,s,o;$s.subVectors(n,i),Qs.subVectors(r,i),vh.subVectors(e,i);let a=$s.dot(vh),l=Qs.dot(vh);if(a<=0&&l<=0)return t.copy(i);Mh.subVectors(e,n);let c=$s.dot(Mh),h=Qs.dot(Mh);if(c>=0&&h<=c)return t.copy(n);let u=a*h-c*l;if(u<=0&&a>=0&&c<=0&&a-c>0)return s=a/(a-c),t.copy(i).addScaledVector($s,s);Sh.subVectors(e,r);let f=$s.dot(Sh),m=Qs.dot(Sh);if(m>=0&&f<=m)return t.copy(r);let g=f*l-a*m;if(g<=0&&l>=0&&m<=0)return o=l/(l-m),t.copy(i).addScaledVector(Qs,o);let _=c*m-f*h;if(_<=0&&h-c>=0&&f-m>=0)return Nu.subVectors(r,n),o=(h-c)/(h-c+(f-m)),t.copy(n).addScaledVector(Nu,o);let d=1/(_+g+u);return s=g*d,o=u*d,t.copy(i).addScaledVector($s,s).addScaledVector(Qs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class bi{constructor(e=new A(1/0,1/0,1/0),t=new A(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Nn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Nn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Nn.copy(t).multiplyScalar(0.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(0.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let s=0,o=r.count;s<o;s++){if(e.isMesh===!0)e.getVertexPosition(s,Nn);else Nn.fromBufferAttribute(r,s);Nn.applyMatrix4(e.matrixWorld),this.expandByPoint(Nn)}else{if(e.boundingBox!==void 0){if(e.boundingBox===null)e.computeBoundingBox();Vl.copy(e.boundingBox)}else{if(i.boundingBox===null)i.computeBoundingBox();Vl.copy(i.boundingBox)}Vl.applyMatrix4(e.matrixWorld),this.union(Vl)}}let n=e.children;for(let r=0,s=n.length;r<s;r++)this.expandByObject(n[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Nn),Nn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;if(e.normal.x>0)t=e.normal.x*this.min.x,i=e.normal.x*this.max.x;else t=e.normal.x*this.max.x,i=e.normal.x*this.min.x;if(e.normal.y>0)t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y;else t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y;if(e.normal.z>0)t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z;else t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z;return t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ra),Wl.subVectors(this.max,Ra),js.subVectors(e.a,Ra),eo.subVectors(e.b,Ra),to.subVectors(e.c,Ra),yr.subVectors(eo,js),vr.subVectors(to,eo),ts.subVectors(js,to);let t=[0,-yr.z,yr.y,0,-vr.z,vr.y,0,-ts.z,ts.y,yr.z,0,-yr.x,vr.z,0,-vr.x,ts.z,0,-ts.x,-yr.y,yr.x,0,-vr.y,vr.x,0,-ts.y,ts.x,0];if(!wh(t,js,eo,to,Wl))return!1;if(t=[1,0,0,0,1,0,0,0,1],!wh(t,js,eo,to,Wl))return!1;return Xl.crossVectors(yr,vr),t=[Xl.x,Xl.y,Xl.z],wh(t,js,eo,to,Wl)}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Nn).distanceTo(e)}getBoundingSphere(e){if(this.isEmpty())e.makeEmpty();else this.getCenter(e.center),e.radius=this.getSize(Nn).length()*0.5;return e}intersect(e){if(this.min.max(e.min),this.max.min(e.max),this.isEmpty())this.makeEmpty();return this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){if(this.isEmpty())return this;return nr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),nr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),nr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),nr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),nr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),nr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),nr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),nr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(nr),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}var nr=[new A,new A,new A,new A,new A,new A,new A,new A],Nn=new A,Vl=new bi,js=new A,eo=new A,to=new A,yr=new A,vr=new A,ts=new A,Ra=new A,Wl=new A,Xl=new A,is=new A;function wh(e,t,i,n,r){for(let s=0,o=e.length-3;s<=o;s+=3){is.fromArray(e,s);let a=r.x*Math.abs(is.x)+r.y*Math.abs(is.y)+r.z*Math.abs(is.z),l=t.dot(is),c=i.dot(is),h=n.dot(is);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var ci=new A,ql=new W,px=0;class $t extends di{constructor(e,t,i=!1){super();if(Array.isArray(e))throw TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:px++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Ta,this.updateRanges=[],this.gpuType=si,this.version=0,this._normalizationScale=e!==void 0?Vs(e):void 0}onUploadCallback(){}set needsUpdate(e){if(e===!0)this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let n=0,r=this.itemSize;n<r;n++)this.array[e+n]=t.array[i+n];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)ql.fromBufferAttribute(this,t),ql.applyMatrix3(e),this.setXY(t,ql.x,ql.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)ci.fromBufferAttribute(this,t),ci.applyMatrix3(e),this.setXYZ(t,ci.x,ci.y,ci.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)ci.fromBufferAttribute(this,t),ci.applyMatrix4(e),this.setXYZ(t,ci.x,ci.y,ci.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)ci.fromBufferAttribute(this,t),ci.applyNormalMatrix(e),this.setXYZ(t,ci.x,ci.y,ci.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)ci.fromBufferAttribute(this,t),ci.transformDirection(e),this.setXYZ(t,ci.x,ci.y,ci.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];if(this.normalized)i=this._denormalize(i);return i}setComponent(e,t,i){if(this.normalized)i=this._normalize(i);return this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];if(this.normalized)t=this._denormalize(t);return t}setX(e,t){if(this.normalized)t=this._normalize(t);return this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];if(this.normalized)t=this._denormalize(t);return t}setY(e,t){if(this.normalized)t=this._normalize(t);return this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];if(this.normalized)t=this._denormalize(t);return t}setZ(e,t){if(this.normalized)t=this._normalize(t);return this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];if(this.normalized)t=this._denormalize(t);return t}setW(e,t){if(this.normalized)t=this._normalize(t);return this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){if(e*=this.itemSize,this.normalized)t=this._normalize(t),i=this._normalize(i);return this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,n){if(e*=this.itemSize,this.normalized)t=this._normalize(t),i=this._normalize(i),n=this._normalize(n);return this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this}setXYZW(e,t,i,n,r){if(e*=this.itemSize,this.normalized)t=this._normalize(t),i=this._normalize(i),n=this._normalize(n),r=this._normalize(r);return this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Bl(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):Ol(e,this.array)}}class Ca extends $t{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Pa extends $t{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class ye extends $t{constructor(e,t,i){super(new Float32Array(e),t,i)}}var mx=new bi,Ia=new A,Ah=new A;class Ei{constructor(e=new A,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;if(t!==void 0)i.copy(t);else mx.setFromPoints(e).getCenter(i);let n=0;for(let r=0,s=e.length;r<s;r++)n=Math.max(n,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(n),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);if(t.copy(e),i>this.radius*this.radius)t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center);return t}getBoundingBox(e){if(this.isEmpty())return e.makeEmpty(),e;return e.set(this.center,this.center),e.expandByScalar(this.radius),e}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ia.subVectors(e,this.center);let t=Ia.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),n=(i-this.radius)*0.5;this.center.addScaledVector(Ia,n/i),this.radius+=n}return this}union(e){if(e.isEmpty())return this;if(this.isEmpty())return this.copy(e),this;if(this.center.equals(e.center)===!0)this.radius=Math.max(this.radius,e.radius);else Ah.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ia.copy(e.center).add(Ah)),this.expandByPoint(Ia.copy(e.center).sub(Ah));return this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}var gx=0,_n=new qe,Rh=new ct,io=new A,on=new bi,La=new bi,Ti=new A;class Oe extends di{constructor(){super();this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:gx++}),this.uuid=Si(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){if(Array.isArray(e))this.index=new((xu(e))?Pa:Ca)(e,1);else this.index=e;return this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;if(t!==void 0)t.applyMatrix4(e),t.needsUpdate=!0;let i=this.attributes.normal;if(i!==void 0){let r=new Ke().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let n=this.attributes.tangent;if(n!==void 0)n.transformDirection(e),n.needsUpdate=!0;if(this.boundingBox!==null)this.computeBoundingBox();if(this.boundingSphere!==null)this.computeBoundingSphere();return this._transformed=!0,this}applyQuaternion(e){return _n.makeRotationFromQuaternion(e),this.applyMatrix4(_n),this}rotateX(e){return _n.makeRotationX(e),this.applyMatrix4(_n),this}rotateY(e){return _n.makeRotationY(e),this.applyMatrix4(_n),this}rotateZ(e){return _n.makeRotationZ(e),this.applyMatrix4(_n),this}translate(e,t,i){return _n.makeTranslation(e,t,i),this.applyMatrix4(_n),this}scale(e,t,i){return _n.makeScale(e,t,i),this.applyMatrix4(_n),this}lookAt(e){return Rh.lookAt(e),Rh.updateMatrix(),this.applyMatrix4(Rh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(io).negate(),this.translate(io.x,io.y,io.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let n=0,r=e.length;n<r;n++){let s=e[n];i.push(s.x,s.y,s.z||0)}this.setAttribute("position",new ye(i,3))}else{let i=Math.min(e.length,t.count);for(let n=0;n<i;n++){let r=e[n];t.setXYZ(n,r.x,r.y,r.z||0)}if(e.length>t.count)xe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.");t.needsUpdate=!0}return this}computeBoundingBox(){if(this.boundingBox===null)this.boundingBox=new bi;let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Be("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new A(-1/0,-1/0,-1/0),new A(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,n=t.length;i<n;i++){let r=t[i];if(on.setFromBufferAttribute(r),this.morphTargetsRelative)Ti.addVectors(this.boundingBox.min,on.min),this.boundingBox.expandByPoint(Ti),Ti.addVectors(this.boundingBox.max,on.max),this.boundingBox.expandByPoint(Ti);else this.boundingBox.expandByPoint(on.min),this.boundingBox.expandByPoint(on.max)}}else this.boundingBox.makeEmpty();if(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))Be('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){if(this.boundingSphere===null)this.boundingSphere=new Ei;let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Be("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new A,1/0);return}if(e){let i=this.boundingSphere.center;if(on.setFromBufferAttribute(e),t)for(let r=0,s=t.length;r<s;r++){let o=t[r];if(La.setFromBufferAttribute(o),this.morphTargetsRelative)Ti.addVectors(on.min,La.min),on.expandByPoint(Ti),Ti.addVectors(on.max,La.max),on.expandByPoint(Ti);else on.expandByPoint(La.min),on.expandByPoint(La.max)}on.getCenter(i);let n=0;for(let r=0,s=e.count;r<s;r++)Ti.fromBufferAttribute(e,r),n=Math.max(n,i.distanceToSquared(Ti));if(t)for(let r=0,s=t.length;r<s;r++){let o=t[r],a=this.morphTargetsRelative;for(let l=0,c=o.count;l<c;l++){if(Ti.fromBufferAttribute(o,l),a)io.fromBufferAttribute(e,l),Ti.add(io);n=Math.max(n,i.distanceToSquared(Ti))}}if(this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius))Be('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Be("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let{position:i,normal:n,uv:r}=t,s=this.getAttribute("tangent");if(s===void 0||s.count!==i.count)s=new $t(new Float32Array(4*i.count),4),this.setAttribute("tangent",s);let o=[],a=[],l=new Uint8Array(i.count);for(let S=0;S<i.count;S++)o[S]=new A,a[S]=new A;let c=new A,h=new A,u=new A,f=new W,m=new W,g=new W,_=new A,d=new A;function p(S,R,U){l[S]=l[R]=l[U]=1,c.fromBufferAttribute(i,S),h.fromBufferAttribute(i,R),u.fromBufferAttribute(i,U),f.fromBufferAttribute(r,S),m.fromBufferAttribute(r,R),g.fromBufferAttribute(r,U),h.sub(c),u.sub(c),m.sub(f),g.sub(f);let I=1/(m.x*g.y-g.x*m.y);if(!isFinite(I))return;_.copy(h).multiplyScalar(g.y).addScaledVector(u,-m.y).multiplyScalar(I),d.copy(u).multiplyScalar(m.x).addScaledVector(h,-g.x).multiplyScalar(I),o[S].add(_),o[R].add(_),o[U].add(_),a[S].add(d),a[R].add(d),a[U].add(d)}let y=this.groups;if(y.length===0)y=[{start:0,count:e.count}];for(let S=0,R=y.length;S<R;++S){let U=y[S],{start:I,count:O}=U;for(let te=I,P=I+O;te<P;te+=3)p(e.getX(te+0),e.getX(te+1),e.getX(te+2))}let v=new A,M=new A,b=new A,w=new A;function x(S){b.fromBufferAttribute(n,S),w.copy(b);let R=o[S];v.copy(R),v.sub(b.multiplyScalar(b.dot(R))).normalize(),M.crossVectors(w,R);let I=M.dot(a[S])<0?-1:1;s.setXYZW(S,v.x,v.y,v.z,I)}for(let S=0,R=i.count;S<R;++S)if(l[S])x(S);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new $t(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let u=0,f=i.count;u<f;u++)i.setXYZ(u,0,0,0);let n=new A,r=new A,s=new A,o=new A,a=new A,l=new A,c=new A,h=new A;if(e)for(let u=0,f=e.count;u<f;u+=3){let m=e.getX(u+0),g=e.getX(u+1),_=e.getX(u+2);n.fromBufferAttribute(t,m),r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),c.subVectors(s,r),h.subVectors(n,r),c.cross(h),o.fromBufferAttribute(i,m),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),o.add(c),a.add(c),l.add(c),i.setXYZ(m,o.x,o.y,o.z),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z)}else for(let u=0,f=t.count;u<f;u+=3)n.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),s.fromBufferAttribute(t,u+2),c.subVectors(s,r),h.subVectors(n,r),c.cross(h),i.setXYZ(u+0,c.x,c.y,c.z),i.setXYZ(u+1,c.x,c.y,c.z),i.setXYZ(u+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Ti.fromBufferAttribute(e,t),Ti.normalize(),e.setXYZ(t,Ti.x,Ti.y,Ti.z)}toNonIndexed(){function e(o,a){let{array:l,itemSize:c,normalized:h}=o,u=new l.constructor(a.length*c),f=0,m=0;for(let g=0,_=a.length;g<_;g++){if(o.isInterleavedBufferAttribute)f=a[g]*o.data.stride+o.offset;else f=a[g]*c;for(let d=0;d<c;d++)u[m++]=l[f++]}return new $t(u,c,h)}if(this.index===null)return xe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new Oe,i=this.index.array,n=this.attributes;for(let o in n){let a=n[o],l=e(a,i);t.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let a=[],l=r[o];for(let c=0,h=l.length;c<h;c++){let u=l[c],f=e(u,i);a.push(f)}t.morphAttributes[o]=a}t.morphTargetsRelative=this.morphTargetsRelative;let s=this.groups;for(let o=0,a=s.length;o<a;o++){let l=s[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0)e.userData=this.userData;if(this.parameters!==void 0&&this._transformed!==!0){let a=this.parameters;for(let l in a)if(a[l]!==void 0)e[l]=a[l];return e}e.data={attributes:{}};let t=this.index;if(t!==null)e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)};let i=this.attributes;for(let a in i){let l=i[a];e.data.attributes[a]=l.toJSON(e.data)}let n={},r=!1;for(let a in this.morphAttributes){let l=this.morphAttributes[a],c=[];for(let h=0,u=l.length;h<u;h++){let f=l[h];c.push(f.toJSON(e.data))}if(c.length>0)n[a]=c,r=!0}if(r)e.data.morphAttributes=n,e.data.morphTargetsRelative=this.morphTargetsRelative;let s=this.groups;if(s.length>0)e.data.groups=JSON.parse(JSON.stringify(s));let o=this.boundingSphere;if(o!==null)e.data.boundingSphere=o.toJSON();return e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;if(i!==null)this.setIndex(i.clone());let n=e.attributes;for(let l in n){let c=n[l];this.setAttribute(l,c.clone(t))}let r=e.morphAttributes;for(let l in r){let c=[],h=r[l];for(let u=0,f=h.length;u<f;u++)c.push(h[u].clone(t));this.morphAttributes[l]=c}this.morphTargetsRelative=e.morphTargetsRelative;let s=e.groups;for(let l=0,c=s.length;l<c;l++){let h=s[l];this.addGroup(h.start,h.count,h.materialIndex)}let o=e.boundingBox;if(o!==null)this.boundingBox=o.clone();let a=e.boundingSphere;if(a!==null)this.boundingSphere=a.clone();return this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ns{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Ta,this.updateRanges=[],this.version=0,this.uuid=Si()}onUploadCallback(){}set needsUpdate(e){if(e===!0)this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let n=0,r=this.stride;n<r;n++)this.array[e+n]=t.array[i+n];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){if(e.arrayBuffers===void 0)e.arrayBuffers={};let t=Uu(this.array);if(e.arrayBuffers[t]===void 0)e.arrayBuffers[t]=this.array.slice(0).buffer;let i=new this.array.constructor(e.arrayBuffers[t]),n=new this.constructor(i,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){if(e.arrayBuffers===void 0)e.arrayBuffers={};let t=Uu(this.array);if(e.arrayBuffers[t]===void 0)e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer));let i={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return i.usage=this.usage,i}}function Uu(e){if(e.buffer._uuid===void 0)e.buffer._uuid=Si();if(e.byteOffset===0&&e.byteLength===e.buffer.byteLength)return e.buffer._uuid;return e.buffer._uuid+":"+e.byteOffset+":"+e.byteLength}var Wi=new A;class Mr{constructor(e,t,i,n=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=n,this._normalizationScale=e!==void 0?Vs(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Wi.fromBufferAttribute(this,t),Wi.applyMatrix4(e),this.setXYZ(t,Wi.x,Wi.y,Wi.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Wi.fromBufferAttribute(this,t),Wi.applyNormalMatrix(e),this.setXYZ(t,Wi.x,Wi.y,Wi.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Wi.fromBufferAttribute(this,t),Wi.transformDirection(e),this.setXYZ(t,Wi.x,Wi.y,Wi.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];if(this.normalized)i=this._denormalize(i);return i}setComponent(e,t,i){if(this.normalized)i=this._normalize(i);return this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){if(this.normalized)t=this._normalize(t);return this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){if(this.normalized)t=this._normalize(t);return this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){if(this.normalized)t=this._normalize(t);return this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){if(this.normalized)t=this._normalize(t);return this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];if(this.normalized)t=this._denormalize(t);return t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];if(this.normalized)t=this._denormalize(t);return t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];if(this.normalized)t=this._denormalize(t);return t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];if(this.normalized)t=this._denormalize(t);return t}setXY(e,t,i){if(e=e*this.data.stride+this.offset,this.normalized)t=this._normalize(t),i=this._normalize(i);return this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,n){if(e=e*this.data.stride+this.offset,this.normalized)t=this._normalize(t),i=this._normalize(i),n=this._normalize(n);return this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=n,this}setXYZW(e,t,i,n,r){if(e=e*this.data.stride+this.offset,this.normalized)t=this._normalize(t),i=this._normalize(i),n=this._normalize(n),r=this._normalize(r);return this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=n,this.data.array[e+3]=r,this}clone(e){if(e===void 0){Kr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let n=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[n+r])}return new $t(new this.array.constructor(t),this.itemSize,this.normalized)}else{if(e.interleavedBuffers===void 0)e.interleavedBuffers={};if(e.interleavedBuffers[this.data.uuid]===void 0)e.interleavedBuffers[this.data.uuid]=this.data.clone(e);return new Mr(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}}toJSON(e){if(e===void 0){Kr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let n=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[n+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else{if(e.interleavedBuffers===void 0)e.interleavedBuffers={};if(e.interleavedBuffers[this.data.uuid]===void 0)e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e);return{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Bl(e,this.data.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):Ol(e,this.data.array)}}var Ch=new A,xx=new A,_x=new Ke;class an{constructor(e=new A(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,n){return this.normal.set(e,t,i),this.constant=n,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let n=Ch.subVectors(i,t).cross(xx.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(n,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let n=e.delta(Ch),r=this.normal.dot(n);if(r===0){if(this.distanceToPoint(e.start)===0)return t.copy(e.start);return null}let s=-(e.start.dot(this.normal)+this.constant)/r;if(i===!0&&(s<0||s>1))return null;return t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||_x.getNormalMatrix(e),n=this.coplanarPoint(Ch).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}var yx=0;class Xt extends di{constructor(){super();this.isMaterial=!0,Object.defineProperty(this,"id",{value:yx++}),this.uuid=Si(),this.name="",this.type="Material",this.blending=fr,this.side=dn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=_l,this.blendDst=yl,this.blendEquation=ur,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ue(0,0,0),this.blendAlpha=0,this.depthFunc=dr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=hu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ll,this.stencilZFail=Ll,this.stencilZPass=Ll,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){if(this._alphaTest>0!==e>0)this.version++;this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e===void 0)return;for(let t in e){let i=e[t];if(i===void 0){xe(`Material: parameter '${t}' has value of undefined.`);continue}let n=this[t];if(n===void 0){xe(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}if(n&&n.isColor)n.set(i);else if(n&&n.isVector2&&(i&&i.isVector2)||n&&n.isEuler&&(i&&i.isEuler)||n&&n.isVector3&&(i&&i.isVector3))n.copy(i);else this[t]=i}}toJSON(e){let t=e===void 0||typeof e==="string";if(t)e={textures:{},images:{}};let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};if(i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor)i.color=this.color.getHex();if(this.roughness!==void 0)i.roughness=this.roughness;if(this.metalness!==void 0)i.metalness=this.metalness;if(this.sheen!==void 0)i.sheen=this.sheen;if(this.sheenColor&&this.sheenColor.isColor)i.sheenColor=this.sheenColor.getHex();if(this.sheenRoughness!==void 0)i.sheenRoughness=this.sheenRoughness;if(this.emissive&&this.emissive.isColor)i.emissive=this.emissive.getHex();if(this.emissiveIntensity!==void 0)i.emissiveIntensity=this.emissiveIntensity;if(this.specular&&this.specular.isColor)i.specular=this.specular.getHex();if(this.specularIntensity!==void 0)i.specularIntensity=this.specularIntensity;if(this.specularColor&&this.specularColor.isColor)i.specularColor=this.specularColor.getHex();if(this.shininess!==void 0)i.shininess=this.shininess;if(this.clearcoat!==void 0)i.clearcoat=this.clearcoat;if(this.clearcoatRoughness!==void 0)i.clearcoatRoughness=this.clearcoatRoughness;if(this.diffuseRoughness!==void 0)i.diffuseRoughness=this.diffuseRoughness;if(this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture)i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid;if(this.clearcoatMap&&this.clearcoatMap.isTexture)i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid;if(this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture)i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid;if(this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture)i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray();if(this.sheenColorMap&&this.sheenColorMap.isTexture)i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid;if(this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture)i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid;if(this.dispersion!==void 0)i.dispersion=this.dispersion;if(this.retroreflectivity!==void 0)i.retroreflectivity=this.retroreflectivity;if(this.iridescence!==void 0)i.iridescence=this.iridescence;if(this.iridescenceIOR!==void 0)i.iridescenceIOR=this.iridescenceIOR;if(this.iridescenceThicknessMinimum!==void 0)i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum;if(this.iridescenceThicknessMaximum!==void 0)i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum;if(this.iridescenceMap&&this.iridescenceMap.isTexture)i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid;if(this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture)i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid;if(this.anisotropy!==void 0)i.anisotropy=this.anisotropy;if(this.anisotropyRotation!==void 0)i.anisotropyRotation=this.anisotropyRotation;if(this.anisotropyMap&&this.anisotropyMap.isTexture)i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid;if(this.map&&this.map.isTexture)i.map=this.map.toJSON(e).uuid;if(this.matcap&&this.matcap.isTexture)i.matcap=this.matcap.toJSON(e).uuid;if(this.alphaMap&&this.alphaMap.isTexture)i.alphaMap=this.alphaMap.toJSON(e).uuid;if(this.lightMap&&this.lightMap.isTexture)i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity;if(this.aoMap&&this.aoMap.isTexture)i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity;if(this.bumpMap&&this.bumpMap.isTexture)i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale;if(this.normalMap&&this.normalMap.isTexture)i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray();if(this.displacementMap&&this.displacementMap.isTexture)i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias;if(this.roughnessMap&&this.roughnessMap.isTexture)i.roughnessMap=this.roughnessMap.toJSON(e).uuid;if(this.metalnessMap&&this.metalnessMap.isTexture)i.metalnessMap=this.metalnessMap.toJSON(e).uuid;if(this.emissiveMap&&this.emissiveMap.isTexture)i.emissiveMap=this.emissiveMap.toJSON(e).uuid;if(this.specularMap&&this.specularMap.isTexture)i.specularMap=this.specularMap.toJSON(e).uuid;if(this.specularIntensityMap&&this.specularIntensityMap.isTexture)i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid;if(this.specularColorMap&&this.specularColorMap.isTexture)i.specularColorMap=this.specularColorMap.toJSON(e).uuid;if(this.envMap&&this.envMap.isTexture){if(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0)i.combine=this.combine}if(this.envMapRotation!==void 0)i.envMapRotation=this.envMapRotation.toArray();if(this.envMapIntensity!==void 0)i.envMapIntensity=this.envMapIntensity;if(this.reflectivity!==void 0)i.reflectivity=this.reflectivity;if(this.refractionRatio!==void 0)i.refractionRatio=this.refractionRatio;if(this.gradientMap&&this.gradientMap.isTexture)i.gradientMap=this.gradientMap.toJSON(e).uuid;if(this.transmission!==void 0)i.transmission=this.transmission;if(this.transmissionMap&&this.transmissionMap.isTexture)i.transmissionMap=this.transmissionMap.toJSON(e).uuid;if(this.thickness!==void 0)i.thickness=this.thickness;if(this.thicknessMap&&this.thicknessMap.isTexture)i.thicknessMap=this.thicknessMap.toJSON(e).uuid;if(this.attenuationDistance!==void 0)i.attenuationDistance=this.attenuationDistance;if(this.attenuationColor!==void 0)i.attenuationColor=this.attenuationColor.getHex();if(this.size!==void 0)i.size=this.size;if(this.sizeAttenuation!==void 0)i.sizeAttenuation=this.sizeAttenuation;if(Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0)i.clippingPlanes=this.clippingPlanes.map((r)=>r.toJSON());if(this.rotation!==void 0)i.rotation=this.rotation;if(this.depthPacking!==void 0)i.depthPacking=this.depthPacking;if(this.linewidth!==void 0)i.linewidth=this.linewidth;if(this.linecap!==void 0)i.linecap=this.linecap;if(this.linejoin!==void 0)i.linejoin=this.linejoin;if(this.dashSize!==void 0)i.dashSize=this.dashSize;if(this.gapSize!==void 0)i.gapSize=this.gapSize;if(this.scale!==void 0)i.scale=this.scale;if(this.wireframe!==void 0)i.wireframe=this.wireframe;if(this.wireframeLinewidth!==void 0)i.wireframeLinewidth=this.wireframeLinewidth;if(this.wireframeLinecap!==void 0)i.wireframeLinecap=this.wireframeLinecap;if(this.wireframeLinejoin!==void 0)i.wireframeLinejoin=this.wireframeLinejoin;if(this.flatShading!==void 0)i.flatShading=this.flatShading;if(this.fog!==void 0)i.fog=this.fog;if(Object.keys(this.userData).length>0)i.userData=this.userData;function n(r){let s=[];for(let o in r){let a=r[o];delete a.metadata,s.push(a)}return s}if(t){let r=n(e.textures),s=n(e.images);if(r.length>0)i.textures=r;if(s.length>0)i.images=s}return i}fromJSON(e,t){if(e.uuid!==void 0)this.uuid=e.uuid;if(e.name!==void 0)this.name=e.name;if(e.color!==void 0&&this.color!==void 0)this.color.setHex(e.color);if(e.roughness!==void 0)this.roughness=e.roughness;if(e.metalness!==void 0)this.metalness=e.metalness;if(e.sheen!==void 0)this.sheen=e.sheen;if(e.sheenColor!==void 0)this.sheenColor=new ue().setHex(e.sheenColor);if(e.sheenRoughness!==void 0)this.sheenRoughness=e.sheenRoughness;if(e.emissive!==void 0&&this.emissive!==void 0)this.emissive.setHex(e.emissive);if(e.specular!==void 0&&this.specular!==void 0)this.specular.setHex(e.specular);if(e.specularIntensity!==void 0)this.specularIntensity=e.specularIntensity;if(e.specularColor!==void 0&&this.specularColor!==void 0)this.specularColor.setHex(e.specularColor);if(e.shininess!==void 0)this.shininess=e.shininess;if(e.clearcoat!==void 0)this.clearcoat=e.clearcoat;if(e.clearcoatRoughness!==void 0)this.clearcoatRoughness=e.clearcoatRoughness;if(e.diffuseRoughness!==void 0)this.diffuseRoughness=e.diffuseRoughness;if(e.dispersion!==void 0)this.dispersion=e.dispersion;if(e.retroreflectivity!==void 0)this.retroreflectivity=e.retroreflectivity;if(e.iridescence!==void 0)this.iridescence=e.iridescence;if(e.iridescenceIOR!==void 0)this.iridescenceIOR=e.iridescenceIOR;if(e.iridescenceThicknessMinimum!==void 0)this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum;if(e.iridescenceThicknessMaximum!==void 0)this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum;if(e.iridescenceThicknessRange!==void 0)this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1];if(e.transmission!==void 0)this.transmission=e.transmission;if(e.thickness!==void 0)this.thickness=e.thickness;if(e.attenuationDistance!==void 0)this.attenuationDistance=e.attenuationDistance;if(e.attenuationColor!==void 0&&this.attenuationColor!==void 0)this.attenuationColor.setHex(e.attenuationColor);if(e.anisotropy!==void 0)this.anisotropy=e.anisotropy;if(e.anisotropyRotation!==void 0)this.anisotropyRotation=e.anisotropyRotation;if(e.fog!==void 0)this.fog=e.fog;if(e.flatShading!==void 0)this.flatShading=e.flatShading;if(e.blending!==void 0)this.blending=e.blending;if(e.combine!==void 0)this.combine=e.combine;if(e.side!==void 0)this.side=e.side;if(e.shadowSide!==void 0)this.shadowSide=e.shadowSide;if(e.opacity!==void 0)this.opacity=e.opacity;if(e.transparent!==void 0)this.transparent=e.transparent;if(e.alphaTest!==void 0)this.alphaTest=e.alphaTest;if(e.alphaHash!==void 0)this.alphaHash=e.alphaHash;if(e.depthFunc!==void 0)this.depthFunc=e.depthFunc;if(e.depthTest!==void 0)this.depthTest=e.depthTest;if(e.depthWrite!==void 0)this.depthWrite=e.depthWrite;if(e.colorWrite!==void 0)this.colorWrite=e.colorWrite;if(e.clippingPlanes!==void 0)this.clippingPlanes=e.clippingPlanes.map((i)=>new an().fromJSON(i));if(e.clipIntersection!==void 0)this.clipIntersection=e.clipIntersection;if(e.clipShadows!==void 0)this.clipShadows=e.clipShadows;if(e.depthPacking!==void 0)this.depthPacking=e.depthPacking;if(e.blendSrc!==void 0)this.blendSrc=e.blendSrc;if(e.blendDst!==void 0)this.blendDst=e.blendDst;if(e.blendEquation!==void 0)this.blendEquation=e.blendEquation;if(e.blendSrcAlpha!==void 0)this.blendSrcAlpha=e.blendSrcAlpha;if(e.blendDstAlpha!==void 0)this.blendDstAlpha=e.blendDstAlpha;if(e.blendEquationAlpha!==void 0)this.blendEquationAlpha=e.blendEquationAlpha;if(e.blendColor!==void 0&&this.blendColor!==void 0)this.blendColor.setHex(e.blendColor);if(e.blendAlpha!==void 0)this.blendAlpha=e.blendAlpha;if(e.stencilWriteMask!==void 0)this.stencilWriteMask=e.stencilWriteMask;if(e.stencilFunc!==void 0)this.stencilFunc=e.stencilFunc;if(e.stencilRef!==void 0)this.stencilRef=e.stencilRef;if(e.stencilFuncMask!==void 0)this.stencilFuncMask=e.stencilFuncMask;if(e.stencilFail!==void 0)this.stencilFail=e.stencilFail;if(e.stencilZFail!==void 0)this.stencilZFail=e.stencilZFail;if(e.stencilZPass!==void 0)this.stencilZPass=e.stencilZPass;if(e.stencilWrite!==void 0)this.stencilWrite=e.stencilWrite;if(e.wireframe!==void 0)this.wireframe=e.wireframe;if(e.wireframeLinewidth!==void 0)this.wireframeLinewidth=e.wireframeLinewidth;if(e.wireframeLinecap!==void 0)this.wireframeLinecap=e.wireframeLinecap;if(e.wireframeLinejoin!==void 0)this.wireframeLinejoin=e.wireframeLinejoin;if(e.rotation!==void 0)this.rotation=e.rotation;if(e.linewidth!==void 0)this.linewidth=e.linewidth;if(e.linecap!==void 0)this.linecap=e.linecap;if(e.linejoin!==void 0)this.linejoin=e.linejoin;if(e.dashSize!==void 0)this.dashSize=e.dashSize;if(e.gapSize!==void 0)this.gapSize=e.gapSize;if(e.scale!==void 0)this.scale=e.scale;if(e.polygonOffset!==void 0)this.polygonOffset=e.polygonOffset;if(e.polygonOffsetFactor!==void 0)this.polygonOffsetFactor=e.polygonOffsetFactor;if(e.polygonOffsetUnits!==void 0)this.polygonOffsetUnits=e.polygonOffsetUnits;if(e.dithering!==void 0)this.dithering=e.dithering;if(e.alphaToCoverage!==void 0)this.alphaToCoverage=e.alphaToCoverage;if(e.premultipliedAlpha!==void 0)this.premultipliedAlpha=e.premultipliedAlpha;if(e.forceSinglePass!==void 0)this.forceSinglePass=e.forceSinglePass;if(e.allowOverride!==void 0)this.allowOverride=e.allowOverride;if(e.visible!==void 0)this.visible=e.visible;if(e.toneMapped!==void 0)this.toneMapped=e.toneMapped;if(e.userData!==void 0)this.userData=e.userData;if(e.vertexColors!==void 0)if(typeof e.vertexColors==="number")this.vertexColors=e.vertexColors>0;else this.vertexColors=e.vertexColors;if(e.size!==void 0)this.size=e.size;if(e.sizeAttenuation!==void 0)this.sizeAttenuation=e.sizeAttenuation;if(e.map!==void 0)this.map=t[e.map]||null;if(e.matcap!==void 0)this.matcap=t[e.matcap]||null;if(e.alphaMap!==void 0)this.alphaMap=t[e.alphaMap]||null;if(e.bumpMap!==void 0)this.bumpMap=t[e.bumpMap]||null;if(e.bumpScale!==void 0)this.bumpScale=e.bumpScale;if(e.normalMap!==void 0)this.normalMap=t[e.normalMap]||null;if(e.normalMapType!==void 0)this.normalMapType=e.normalMapType;if(e.normalScale!==void 0){let i=e.normalScale;if(Array.isArray(i)===!1)i=[i,i];this.normalScale=new W().fromArray(i)}if(e.displacementMap!==void 0)this.displacementMap=t[e.displacementMap]||null;if(e.displacementScale!==void 0)this.displacementScale=e.displacementScale;if(e.displacementBias!==void 0)this.displacementBias=e.displacementBias;if(e.roughnessMap!==void 0)this.roughnessMap=t[e.roughnessMap]||null;if(e.metalnessMap!==void 0)this.metalnessMap=t[e.metalnessMap]||null;if(e.emissiveMap!==void 0)this.emissiveMap=t[e.emissiveMap]||null;if(e.emissiveIntensity!==void 0)this.emissiveIntensity=e.emissiveIntensity;if(e.specularMap!==void 0)this.specularMap=t[e.specularMap]||null;if(e.specularIntensityMap!==void 0)this.specularIntensityMap=t[e.specularIntensityMap]||null;if(e.specularColorMap!==void 0)this.specularColorMap=t[e.specularColorMap]||null;if(e.envMap!==void 0)this.envMap=t[e.envMap]||null;if(e.envMapRotation!==void 0)this.envMapRotation.fromArray(e.envMapRotation);if(e.envMapIntensity!==void 0)this.envMapIntensity=e.envMapIntensity;if(e.reflectivity!==void 0)this.reflectivity=e.reflectivity;if(e.refractionRatio!==void 0)this.refractionRatio=e.refractionRatio;if(e.lightMap!==void 0)this.lightMap=t[e.lightMap]||null;if(e.lightMapIntensity!==void 0)this.lightMapIntensity=e.lightMapIntensity;if(e.aoMap!==void 0)this.aoMap=t[e.aoMap]||null;if(e.aoMapIntensity!==void 0)this.aoMapIntensity=e.aoMapIntensity;if(e.gradientMap!==void 0)this.gradientMap=t[e.gradientMap]||null;if(e.clearcoatMap!==void 0)this.clearcoatMap=t[e.clearcoatMap]||null;if(e.clearcoatRoughnessMap!==void 0)this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null;if(e.clearcoatNormalMap!==void 0)this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null;if(e.clearcoatNormalScale!==void 0)this.clearcoatNormalScale=new W().fromArray(e.clearcoatNormalScale);if(e.diffuseRoughnessMap!==void 0)this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null;if(e.iridescenceMap!==void 0)this.iridescenceMap=t[e.iridescenceMap]||null;if(e.iridescenceThicknessMap!==void 0)this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null;if(e.transmissionMap!==void 0)this.transmissionMap=t[e.transmissionMap]||null;if(e.thicknessMap!==void 0)this.thicknessMap=t[e.thicknessMap]||null;if(e.anisotropyMap!==void 0)this.anisotropyMap=t[e.anisotropyMap]||null;if(e.sheenColorMap!==void 0)this.sheenColorMap=t[e.sheenColorMap]||null;if(e.sheenRoughnessMap!==void 0)this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null;return this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let n=t.length;i=Array(n);for(let r=0;r!==n;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){if(e===!0)this.version++}}class rs extends Xt{constructor(e){super();this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ue(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}var no,Da=new A,ro=new A,so=new A,oo=new W,Na=new W,Ou=new qe,Yl=new A,Ua=new A,Zl=new A,Fu=new W,Ph=new W,Bu=new W;class Fa extends ct{constructor(e=new rs){super();if(this.isSprite=!0,this.type="Sprite",no===void 0){no=new Oe;let t=new Float32Array([-0.5,-0.5,0,0,0,0.5,-0.5,0,1,0,0.5,0.5,0,1,1,-0.5,0.5,0,0,1]),i=new ns(t,5);no.setIndex([0,1,2,0,2,3]),no.setAttribute("position",new Mr(i,3,0,!1)),no.setAttribute("uv",new Mr(i,2,3,!1))}this.geometry=no,this.material=e,this.center=new W(0.5,0.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){if(e.camera===null)Be('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.');if(ro.setFromMatrixScale(this.matrixWorld),Ou.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),so.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1)ro.multiplyScalar(-so.z);let i=this.material.rotation,n,r;if(i!==0)r=Math.cos(i),n=Math.sin(i);let s=this.center;Jl(Yl.set(-0.5,-0.5,0),so,s,ro,n,r),Jl(Ua.set(0.5,-0.5,0),so,s,ro,n,r),Jl(Zl.set(0.5,0.5,0),so,s,ro,n,r),Fu.set(0,0),Ph.set(1,0),Bu.set(1,1);let o=e.ray.intersectTriangle(Yl,Ua,Zl,!1,Da);if(o===null){if(Jl(Ua.set(-0.5,0.5,0),so,s,ro,n,r),Ph.set(0,1),o=e.ray.intersectTriangle(Yl,Zl,Ua,!1,Da),o===null)return}let a=e.ray.origin.distanceTo(Da);if(a<e.near||a>e.far)return;t.push({distance:a,point:Da.clone(),uv:Pi.getInterpolation(Da,Yl,Ua,Zl,Fu,Ph,Bu,new W),face:null,object:this})}copy(e,t){if(super.copy(e,t),e.center!==void 0)this.center.copy(e.center);return this.material=e.material,this}toJSON(e){let t=super.toJSON(e);return t.object.center=this.center.toArray(),t}}function Jl(e,t,i,n,r,s){if(oo.subVectors(e,i).addScalar(0.5).multiply(n),r!==void 0)Na.x=s*oo.x-r*oo.y,Na.y=r*oo.x+s*oo.y;else Na.copy(oo);e.copy(t),e.x+=Na.x,e.y+=Na.y,e.applyMatrix4(Ou)}var rr=new A,Ih=new A,Kl=new A,$l=new A;class Gn{constructor(e=new A,t=new A(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,rr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);if(i<0)return t.copy(this.origin);return t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=rr.subVectors(e,this.origin).dot(this.direction);if(t<0)return this.origin.distanceToSquared(e);return rr.copy(this.origin).addScaledVector(this.direction,t),rr.distanceToSquared(e)}distanceSqToSegment(e,t,i,n){Ih.copy(e).add(t).multiplyScalar(0.5),Kl.copy(t).sub(e).normalize(),$l.copy(this.origin).sub(Ih);let r=e.distanceTo(t)*0.5,s=-this.direction.dot(Kl),o=$l.dot(this.direction),a=-$l.dot(Kl),l=$l.lengthSq(),c=Math.abs(1-s*s),h,u,f,m;if(c>0)if(h=s*a-o,u=s*o-a,m=r*c,h>=0)if(u>=-m)if(u<=m){let g=1/c;h*=g,u*=g,f=h*(h+s*u+2*o)+u*(s*h+u+2*a)+l}else u=r,h=Math.max(0,-(s*u+o)),f=-h*h+u*(u+2*a)+l;else u=-r,h=Math.max(0,-(s*u+o)),f=-h*h+u*(u+2*a)+l;else if(u<=-m)h=Math.max(0,-(-s*r+o)),u=h>0?-r:Math.min(Math.max(-r,-a),r),f=-h*h+u*(u+2*a)+l;else if(u<=m)h=0,u=Math.min(Math.max(-r,-a),r),f=u*(u+2*a)+l;else h=Math.max(0,-(s*r+o)),u=h>0?r:Math.min(Math.max(-r,-a),r),f=-h*h+u*(u+2*a)+l;else u=s>0?-r:r,h=Math.max(0,-(s*u+o)),f=-h*h+u*(u+2*a)+l;if(i)i.copy(this.origin).addScaledVector(this.direction,h);if(n)n.copy(Ih).addScaledVector(Kl,u);return f}intersectSphere(e,t){if(e.radius<0)return null;rr.subVectors(e.center,this.origin);let i=rr.dot(this.direction),n=rr.dot(rr)-i*i,r=e.radius*e.radius;if(n>r)return null;let s=Math.sqrt(r-n),o=i-s,a=i+s;if(a<0)return null;if(o<0)return this.at(a,t);return this.at(o,t)}intersectsSphere(e){if(e.radius<0)return!1;return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0){if(e.distanceToPoint(this.origin)===0)return 0;return null}let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);if(i===null)return null;return this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);if(t===0)return!0;if(e.normal.dot(this.direction)*t<0)return!0;return!1}intersectBox(e,t){let i,n,r,s,o,a,l=1/this.direction.x,c=1/this.direction.y,h=1/this.direction.z,u=this.origin;if(l>=0)i=(e.min.x-u.x)*l,n=(e.max.x-u.x)*l;else i=(e.max.x-u.x)*l,n=(e.min.x-u.x)*l;if(c>=0)r=(e.min.y-u.y)*c,s=(e.max.y-u.y)*c;else r=(e.max.y-u.y)*c,s=(e.min.y-u.y)*c;if(i>s||r>n)return null;if(r>i||isNaN(i))i=r;if(s<n||isNaN(n))n=s;if(h>=0)o=(e.min.z-u.z)*h,a=(e.max.z-u.z)*h;else o=(e.max.z-u.z)*h,a=(e.min.z-u.z)*h;if(i>a||o>n)return null;if(o>i||i!==i)i=o;if(a<n||n!==n)n=a;if(n<0)return null;return this.at(i>=0?i:n,t)}intersectsBox(e){return this.intersectBox(e,rr)!==null}intersectTriangle(e,t,i,n,r){let s=this.origin,o=this.direction,{x:a,y:l,z:c}=o,h=e.x-s.x,u=e.y-s.y,f=e.z-s.z,m=t.x-s.x,g=t.y-s.y,_=t.z-s.z,d=i.x-s.x,p=i.y-s.y,y=i.z-s.z,v=Math.abs(a),M=Math.abs(l),b=Math.abs(c),w,x,S,R,U,I,O,te,P,Z,L,N;if(v>=M&&v>=b)if(S=a,I=h,P=m,N=d,a>=0)w=l,x=c,R=u,U=f,O=g,te=_,Z=p,L=y;else w=c,x=l,R=f,U=u,O=_,te=g,Z=y,L=p;else if(M>=b)if(S=l,I=u,P=g,N=p,l>=0)w=c,x=a,R=f,U=h,O=_,te=m,Z=y,L=d;else w=a,x=c,R=h,U=f,O=m,te=_,Z=d,L=y;else if(S=c,I=f,P=_,N=y,c>=0)w=a,x=l,R=h,U=u,O=m,te=g,Z=d,L=p;else w=l,x=a,R=u,U=h,O=g,te=m,Z=p,L=d;if(S===0)return null;let ee=w/S,G=x/S,Y=1/S,K=R-ee*I,pe=U-G*I,X=O-ee*P,ie=te-G*P,Me=Z-ee*N,Se=L-G*N,ze=Me*ie-Se*X,we=K*Se-pe*Me,pt=X*pe-ie*K;if(n){if(ze<0||we<0||pt<0)return null}else if((ze<0||we<0||pt<0)&&(ze>0||we>0||pt>0))return null;let Ne=ze+we+pt;if(Ne===0)return null;let Ue=Y*(ze*I+we*P+pt*N);if(Ne>0?Ue<0:Ue>0)return null;return this.at(Ue/Ne,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ut extends Xt{constructor(e){super();this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ue(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Oi,this.combine=Vr,this.reflectivity=1,this.refractionRatio=0.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}var zu=new qe,ss=new Gn,Ql=new Ei,Gu=new A,jl=new A,ec=new A,tc=new A,Lh=new A,ic=new A,Hu=new A,nc=new A;class ne extends ct{constructor(e=new Oe,t=new Ut){super();this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){if(super.copy(e,t),e.morphTargetInfluences!==void 0)this.morphTargetInfluences=e.morphTargetInfluences.slice();else this.morphTargetInfluences=void 0;if(e.morphTargetDictionary!==void 0)this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary);else this.morphTargetDictionary=void 0;return this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=n.length;r<s;r++){let o=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let i=this.geometry,n=i.attributes.position,r=i.morphAttributes.position,s=i.morphTargetsRelative;t.fromBufferAttribute(n,e);let o=this.morphTargetInfluences;if(r&&o){ic.set(0,0,0);for(let a=0,l=r.length;a<l;a++){let c=o[a],h=r[a];if(c===0)continue;if(Lh.fromBufferAttribute(h,e),s)ic.addScaledVector(Lh,c);else ic.addScaledVector(Lh.sub(t),c)}t.add(ic)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,n=this.material,r=this.matrixWorld;if(n===void 0)return;if(i.boundingSphere===null)i.computeBoundingSphere();if(Ql.copy(i.boundingSphere),Ql.applyMatrix4(r),ss.copy(e.ray).recast(e.near),Ql.containsPoint(ss.origin)===!1){if(ss.intersectSphere(Ql,Gu)===null)return;if(ss.origin.distanceToSquared(Gu)>(e.far-e.near)**2)return}if(zu.copy(r).invert(),ss.copy(e.ray).applyMatrix4(zu),i.boundingBox!==null){if(ss.intersectsBox(i.boundingBox)===!1)return}this._computeIntersections(e,t,ss)}_computeIntersections(e,t,i){let n,r=this.geometry,s=this.material,o=r.index,a=r.attributes.position,l=r.attributes.uv,c=r.attributes.uv1,h=r.attributes.normal,{groups:u,drawRange:f}=r;if(o!==null)if(Array.isArray(s))for(let m=0,g=u.length;m<g;m++){let _=u[m],d=s[_.materialIndex],p=Math.max(_.start,f.start),y=Math.min(o.count,Math.min(_.start+_.count,f.start+f.count));for(let v=p,M=y;v<M;v+=3){let b=o.getX(v),w=o.getX(v+1),x=o.getX(v+2);if(n=rc(this,d,e,i,l,c,h,b,w,x),n)n.faceIndex=Math.floor(v/3),n.face.materialIndex=_.materialIndex,t.push(n)}}else{let m=Math.max(0,f.start),g=Math.min(o.count,f.start+f.count);for(let _=m,d=g;_<d;_+=3){let p=o.getX(_),y=o.getX(_+1),v=o.getX(_+2);if(n=rc(this,s,e,i,l,c,h,p,y,v),n)n.faceIndex=Math.floor(_/3),t.push(n)}}else if(a!==void 0)if(Array.isArray(s))for(let m=0,g=u.length;m<g;m++){let _=u[m],d=s[_.materialIndex],p=Math.max(_.start,f.start),y=Math.min(a.count,Math.min(_.start+_.count,f.start+f.count));for(let v=p,M=y;v<M;v+=3){let b=v,w=v+1,x=v+2;if(n=rc(this,d,e,i,l,c,h,b,w,x),n)n.faceIndex=Math.floor(v/3),n.face.materialIndex=_.materialIndex,t.push(n)}}else{let m=Math.max(0,f.start),g=Math.min(a.count,f.start+f.count);for(let _=m,d=g;_<d;_+=3){let p=_,y=_+1,v=_+2;if(n=rc(this,s,e,i,l,c,h,p,y,v),n)n.faceIndex=Math.floor(_/3),t.push(n)}}}}function vx(e,t,i,n,r,s,o,a){let l;if(t.side===Bt)l=n.intersectTriangle(o,s,r,!0,a);else l=n.intersectTriangle(r,s,o,t.side===dn,a);if(l===null)return null;nc.copy(a),nc.applyMatrix4(e.matrixWorld);let c=i.ray.origin.distanceTo(nc);if(c<i.near||c>i.far)return null;return{distance:c,point:nc.clone(),object:e}}function rc(e,t,i,n,r,s,o,a,l,c){e.getVertexPosition(a,jl),e.getVertexPosition(l,ec),e.getVertexPosition(c,tc);let h=vx(e,t,i,n,jl,ec,tc,Hu);if(h){let u=new A;if(Pi.getBarycoord(Hu,jl,ec,tc,u),r)h.uv=Pi.getInterpolatedAttribute(r,a,l,c,u,new W);if(s)h.uv1=Pi.getInterpolatedAttribute(s,a,l,c,u,new W);if(o){if(h.normal=Pi.getInterpolatedAttribute(o,a,l,c,u,new A),h.normal.dot(n.direction)>0)h.normal.multiplyScalar(-1)}let f={a,b:l,c,normal:new A,materialIndex:0};Pi.getNormal(jl,ec,tc,f.normal),h.face=f,h.barycoord=u}return h}class Hn extends Mt{constructor(e=null,t=1,i=1,n,r,s,o,a,l=Vt,c=Vt,h,u){super(null,s,o,a,l,c,n,r,h,u);this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Sr extends $t{constructor(e,t,i,n=1){super(e,t,i);this.isInstancedBufferAttribute=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}var ao=new qe,Vu=new qe,sc=[],Wu=new bi,Mx=new qe,Ba=new ne,Oa=new Ei;class Un extends ne{constructor(e,t,i){super(e,t);this.isInstancedMesh=!0,this.instanceMatrix=new Sr(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let n=0;n<i;n++)this.setMatrixAt(n,Mx)}computeBoundingBox(){let e=this.geometry,t=this.count;if(this.boundingBox===null)this.boundingBox=new bi;if(e.boundingBox===null)e.computeBoundingBox();this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,ao),Wu.copy(e.boundingBox).applyMatrix4(ao),this.boundingBox.union(Wu)}computeBoundingSphere(){let e=this.geometry,t=this.count;if(this.boundingSphere===null)this.boundingSphere=new Ei;if(e.boundingSphere===null)e.computeBoundingSphere();this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,ao),Oa.copy(e.boundingSphere).applyMatrix4(ao),this.boundingSphere.union(Oa)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){if(this.instanceColor===null)return t.setRGB(1,1,1);else return t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,n=this.morphTexture.source.data.data,r=i.length+1,s=e*r+1;for(let o=0;o<i.length;o++)i[o]=n[s+o]}raycast(e,t){let i=this.matrixWorld,n=this.count;if(Ba.geometry=this.geometry,Ba.material=this.material,Ba.material===void 0)return;if(this.boundingSphere===null)this.computeBoundingSphere();if(Oa.copy(this.boundingSphere),Oa.applyMatrix4(i),e.ray.intersectsSphere(Oa)===!1)return;for(let r=0;r<n;r++){this.getMatrixAt(r,ao),Vu.multiplyMatrices(i,ao),Ba.matrixWorld=Vu,Ba.raycast(e,sc);for(let s=0,o=sc.length;s<o;s++){let a=sc[s];a.instanceId=r,a.object=this,t.push(a)}sc.length=0}}setColorAt(e,t){if(this.instanceColor===null)this.instanceColor=new Sr(new Float32Array(this.instanceMatrix.count*3).fill(1),3);return t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let i=t.morphTargetInfluences,n=i.length+1;if(this.morphTexture===null)this.morphTexture=new Hn(new Float32Array(n*this.count),n,this.count,Ns,si);let r=this.morphTexture.source.data.data,s=0;for(let l=0;l<i.length;l++)s+=i[l];let o=this.geometry.morphTargetsRelative?1:1-s,a=n*e;return r[a]=o,r.set(i,a+1),this}updateMorphTargets(){}dispose(){if(super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null)this.instanceColor.dispose();if(this.morphTexture!==null)this.morphTexture.dispose(),this.morphTexture=null}}var os=new Ei,Sx=new W(0.5,0.5),oc=new A;class yn{constructor(e=new an,t=new an,i=new an,n=new an,r=new an,s=new an){this.planes=[e,t,i,n,r,s]}set(e,t,i,n,r,s){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(n),o[4].copy(r),o[5].copy(s),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Mi,i=!1){let n=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],h=r[5],u=r[6],f=r[7],m=r[8],g=r[9],_=r[10],d=r[11],p=r[12],y=r[13],v=r[14],M=r[15];if(n[0].setComponents(l-s,f-c,d-m,M-p).normalize(),n[1].setComponents(l+s,f+c,d+m,M+p).normalize(),n[2].setComponents(l+o,f+h,d+g,M+y).normalize(),n[3].setComponents(l-o,f-h,d-g,M-y).normalize(),i)n[4].setComponents(a,u,_,v).normalize(),n[5].setComponents(l-a,f-u,d-_,M-v).normalize();else if(n[4].setComponents(l-a,f-u,d-_,M-v).normalize(),t===Mi)n[5].setComponents(l+a,f+u,d+_,M+v).normalize();else if(t===On)n[5].setComponents(a,u,_,v).normalize();else throw Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0){if(e.boundingSphere===null)e.computeBoundingSphere();os.copy(e.boundingSphere).applyMatrix4(e.matrixWorld)}else{let t=e.geometry;if(t.boundingSphere===null)t.computeBoundingSphere();os.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(os)}intersectsSprite(e){os.center.set(0,0,0);let t=Sx.distanceTo(e.center);return os.radius=0.7071067811865476+t,os.applyMatrix4(e.matrixWorld),this.intersectsSphere(os)}intersectsSphere(e){let t=this.planes,i=e.center,n=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<n)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let n=t[i];if(oc.x=n.normal.x>0?e.max.x:e.min.x,oc.y=n.normal.y>0?e.max.y:e.min.y,oc.z=n.normal.z>0?e.max.z:e.min.z,n.distanceToPoint(oc)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}var Xu=new qe;class lo{constructor(){this.coordinateSystem=Mi,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,i=this._frustums;for(let n=0;n<t.length;n++){let r=t[n];if(Xu.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),i[n]===void 0)i[n]=new yn;i[n].setFromProjectionMatrix(Xu,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,i=e._frustums;for(let n=0;n<e._count;n++){if(t[n]===void 0)t[n]=new yn;t[n].copy(i[n])}return this._count=e._count,this}clone(){return new lo().copy(this)}}class pi extends Xt{constructor(e){super();this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ue(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}var cc=new A,hc=new A,qu=new qe,za=new Gn,ac=new Ei,Dh=new A,Yu=new A;class sr extends ct{constructor(e=new Oe,t=new pi){super();this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){if(super.copy(e,t),e.morphTargetInfluences!==void 0)this.morphTargetInfluences=e.morphTargetInfluences.slice();else this.morphTargetInfluences=void 0;if(e.morphTargetDictionary!==void 0)this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary);else this.morphTargetDictionary=void 0;return this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let n=1,r=t.count;n<r;n++)cc.fromBufferAttribute(t,n-1),hc.fromBufferAttribute(t,n),i[n]=i[n-1],i[n]+=cc.distanceTo(hc);e.setAttribute("lineDistance",new ye(i,1))}else xe("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,n=this.matrixWorld,r=e.params.Line.threshold,s=i.drawRange;if(i.boundingSphere===null)i.computeBoundingSphere();if(ac.copy(i.boundingSphere),ac.applyMatrix4(n),ac.radius+=r,e.ray.intersectsSphere(ac)===!1)return;qu.copy(n).invert(),za.copy(e.ray).applyMatrix4(qu);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),a=o*o,l=this.isLineSegments?2:1,c=i.index,u=i.attributes.position;if(c!==null){let f=Math.max(0,s.start),m=Math.min(c.count,s.start+s.count);for(let g=f,_=m-1;g<_;g+=l){let d=c.getX(g),p=c.getX(g+1),y=lc(this,e,za,a,d,p,g);if(y)t.push(y)}if(this.isLineLoop){let g=c.getX(m-1),_=c.getX(f),d=lc(this,e,za,a,g,_,m-1);if(d)t.push(d)}}else{let f=Math.max(0,s.start),m=Math.min(u.count,s.start+s.count);for(let g=f,_=m-1;g<_;g+=l){let d=lc(this,e,za,a,g,g+1,g);if(d)t.push(d)}if(this.isLineLoop){let g=lc(this,e,za,a,m-1,f,m-1);if(g)t.push(g)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=n.length;r<s;r++){let o=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function lc(e,t,i,n,r,s,o){let a=e.geometry.attributes.position;if(cc.fromBufferAttribute(a,r),hc.fromBufferAttribute(a,s),i.distanceSqToSegment(cc,hc,Dh,Yu)>n)return;Dh.applyMatrix4(e.matrixWorld);let c=t.ray.origin.distanceTo(Dh);if(c<t.near||c>t.far)return;return{distance:c,point:Yu.clone().applyMatrix4(e.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:e}}var Zu=new A,Ju=new A;class Ji extends sr{constructor(e,t){super(e,t);this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let n=0,r=t.count;n<r;n+=2)Zu.fromBufferAttribute(t,n),Ju.fromBufferAttribute(t,n+1),i[n]=n===0?0:i[n-1],i[n+1]=i[n]+Zu.distanceTo(Ju);e.setAttribute("lineDistance",new ye(i,1))}else xe("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class br extends Mt{constructor(e=[],t=mn,i,n,r,s,o,a,l,c){super(e,t,i,n,r,s,o,a,l,c);this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ln extends Mt{constructor(e,t,i,n,r,s,o,a,l){super(e,t,i,n,r,s,o,a,l);this.isCanvasTexture=!0,this.needsUpdate=!0}}class cn extends Mt{constructor(e,t,i=ui,n,r,s,o=Vt,a=Vt,l,c=Zi,h=1){if(c!==Zi&&c!==nn)throw Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:e,height:t,depth:h};super(u,n,r,s,o,a,c,i,l);this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new zn(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class co extends cn{constructor(e,t=ui,i=mn,n,r,s=Vt,o=Vt,a,l=Zi){let c={width:e,height:e,depth:1},h=[c,c,c,c,c,c];super(e,e,t,i,n,r,s,o,a,l);this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class ho extends Mt{constructor(e=null){super();this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class zt extends Oe{constructor(e=1,t=1,i=1,n=1,r=1,s=1){super();this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:n,heightSegments:r,depthSegments:s};let o=this;n=Math.floor(n),r=Math.floor(r),s=Math.floor(s);let a=[],l=[],c=[],h=[],u=0,f=0;m("z","y","x",-1,-1,i,t,e,s,r,0),m("z","y","x",1,-1,i,t,-e,s,r,1),m("x","z","y",1,1,e,i,t,n,s,2),m("x","z","y",1,-1,e,i,-t,n,s,3),m("x","y","z",1,-1,e,t,i,n,r,4),m("x","y","z",-1,-1,e,t,-i,n,r,5),this.setIndex(a),this.setAttribute("position",new ye(l,3)),this.setAttribute("normal",new ye(c,3)),this.setAttribute("uv",new ye(h,2));function m(g,_,d,p,y,v,M,b,w,x,S){let R=v/w,U=M/x,I=v/2,O=M/2,te=b/2,P=w+1,Z=x+1,L=0,N=0,ee=new A;for(let G=0;G<Z;G++){let Y=G*U-O;for(let K=0;K<P;K++){let pe=K*R-I;ee[g]=pe*p,ee[_]=Y*y,ee[d]=te,l.push(ee.x,ee.y,ee.z),ee[g]=0,ee[_]=0,ee[d]=b>0?1:-1,c.push(ee.x,ee.y,ee.z),h.push(K/w),h.push(1-G/x),L+=1}}for(let G=0;G<x;G++)for(let Y=0;Y<w;Y++){let K=u+Y+P*G,pe=u+Y+P*(G+1),X=u+(Y+1)+P*(G+1),ie=u+(Y+1)+P*G;a.push(K,pe,ie),a.push(pe,X,ie),N+=6}o.addGroup(f,N,S),f+=N,u+=L}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Ga extends Oe{constructor(e=1,t=1,i=4,n=8,r=1){super();this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:i,radialSegments:n,heightSegments:r},t=Math.max(0,t),i=Math.max(1,Math.floor(i)),n=Math.max(3,Math.floor(n)),r=Math.max(1,Math.floor(r));let s=[],o=[],a=[],l=[],c=t/2,h=Math.PI/2*e,u=t,f=2*h+u,m=i*2+r,g=n+1,_=new A,d=new A;for(let p=0;p<=m;p++){let y=0,v=0,M=0,b=0;if(p<=i){let S=p/i,R=S*Math.PI/2;v=-c-e*Math.cos(R),M=e*Math.sin(R),b=-e*Math.cos(R),y=S*h}else if(p<=i+r){let S=(p-i)/r;v=-c+S*t,M=e,b=0,y=h+S*u}else{let S=(p-i-r)/i,R=S*Math.PI/2;v=c+e*Math.sin(R),M=e*Math.cos(R),b=e*Math.sin(R),y=h+u+S*h}let w=Math.max(0,Math.min(1,y/f)),x=0;if(p===0)x=0.5/n;else if(p===m)x=-0.5/n;for(let S=0;S<=n;S++){let R=S/n,U=R*Math.PI*2,I=Math.sin(U),O=Math.cos(U);d.x=-M*O,d.y=v,d.z=M*I,o.push(d.x,d.y,d.z),_.set(-M*O,b,M*I),_.normalize(),a.push(_.x,_.y,_.z),l.push(R+x,w)}if(p>0){let S=(p-1)*g;for(let R=0;R<n;R++){let U=S+R,I=S+R+1,O=p*g+R,te=p*g+R+1;s.push(U,I,O),s.push(I,te,O)}}}this.setIndex(s),this.setAttribute("position",new ye(o,3)),this.setAttribute("normal",new ye(a,3)),this.setAttribute("uv",new ye(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ga(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}}class Er extends Oe{constructor(e=1,t=32,i=0,n=Math.PI*2){super();this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:n},t=Math.max(3,t);let r=[],s=[],o=[],a=[],l=new A,c=new W;s.push(0,0,0),o.push(0,0,1),a.push(0.5,0.5);for(let h=0,u=3;h<=t;h++,u+=3){let f=i+h/t*n;l.x=e*Math.cos(f),l.y=e*Math.sin(f),s.push(l.x,l.y,l.z),o.push(0,0,1),c.x=(s[u]/e+1)/2,c.y=(s[u+1]/e+1)/2,a.push(c.x,c.y)}for(let h=1;h<=t;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new ye(s,3)),this.setAttribute("normal",new ye(o,3)),this.setAttribute("uv",new ye(a,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Er(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Ct extends Oe{constructor(e=1,t=1,i=1,n=32,r=1,s=!1,o=0,a=Math.PI*2){super();this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:n,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a};let l=this;n=Math.floor(n),r=Math.floor(r);let c=[],h=[],u=[],f=[],m=0,g=[],_=i/2,d=0;if(p(),s===!1){if(e>0)y(!0);if(t>0)y(!1)}this.setIndex(c),this.setAttribute("position",new ye(h,3)),this.setAttribute("normal",new ye(u,3)),this.setAttribute("uv",new ye(f,2));function p(){let v=new A,M=new A,b=0,w=(t-e)/i;for(let x=0;x<=r;x++){let S=[],R=x/r,U=R*(t-e)+e;for(let I=0;I<=n;I++){let O=I/n,te=O*a+o,P=Math.sin(te),Z=Math.cos(te);M.x=U*P,M.y=-R*i+_,M.z=U*Z,h.push(M.x,M.y,M.z),v.set(P,w,Z).normalize(),u.push(v.x,v.y,v.z),f.push(O,1-R),S.push(m++)}g.push(S)}for(let x=0;x<n;x++)for(let S=0;S<r;S++){let R=g[S][x],U=g[S+1][x],I=g[S+1][x+1],O=g[S][x+1];if(e>0||S!==0)c.push(R,U,O),b+=3;if(t>0||S!==r-1)c.push(U,I,O),b+=3}l.addGroup(d,b,0),d+=b}function y(v){let M=m,b=new W,w=new A,x=0,S=v===!0?e:t,R=v===!0?1:-1;for(let I=1;I<=n;I++)h.push(0,_*R,0),u.push(0,R,0),f.push(0.5,0.5),m++;let U=m;for(let I=0;I<=n;I++){let te=I/n*a+o,P=Math.cos(te),Z=Math.sin(te);w.x=S*Z,w.y=_*R,w.z=S*P,h.push(w.x,w.y,w.z),u.push(0,R,0),b.x=P*0.5+0.5,b.y=Z*0.5*R+0.5,f.push(b.x,b.y),m++}for(let I=0;I<n;I++){let O=M+I,te=U+I;if(v===!0)c.push(te,te+1,O);else c.push(te+1,te,O);x+=3}l.addGroup(d,x,v===!0?1:2),d+=x}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ct(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class fo extends Ct{constructor(e=1,t=1,i=32,n=1,r=!1,s=0,o=Math.PI*2){super(0,e,t,i,n,r,s,o);this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:n,openEnded:r,thetaStart:s,thetaLength:o}}static fromJSON(e){return new fo(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class as extends Oe{constructor(e=[],t=[],i=1,n=0){super();this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:n};let r=[],s=[];if(o(n),l(i),c(),this.setAttribute("position",new ye(r,3)),this.setAttribute("normal",new ye(r.slice(),3)),this.setAttribute("uv",new ye(s,2)),n===0)this.computeVertexNormals();else this.normalizeNormals();function o(p){let y=new A,v=new A,M=new A;for(let b=0;b<t.length;b+=3)f(t[b+0],y),f(t[b+1],v),f(t[b+2],M),a(y,v,M,p)}function a(p,y,v,M){let b=M+1,w=[];for(let x=0;x<=b;x++){w[x]=[];let S=p.clone().lerp(v,x/b),R=y.clone().lerp(v,x/b),U=b-x;for(let I=0;I<=U;I++)if(I===0&&x===b)w[x][I]=S;else w[x][I]=S.clone().lerp(R,I/U)}for(let x=0;x<b;x++)for(let S=0;S<2*(b-x)-1;S++){let R=Math.floor(S/2);if(S%2===0)u(w[x][R+1]),u(w[x+1][R]),u(w[x][R]);else u(w[x][R+1]),u(w[x+1][R+1]),u(w[x+1][R])}}function l(p){let y=new A;for(let v=0;v<r.length;v+=3)y.x=r[v+0],y.y=r[v+1],y.z=r[v+2],y.normalize().multiplyScalar(p),r[v+0]=y.x,r[v+1]=y.y,r[v+2]=y.z}function c(){let p=new A;for(let y=0;y<r.length;y+=3){p.x=r[y+0],p.y=r[y+1],p.z=r[y+2];let v=_(p)/2/Math.PI+0.5,M=d(p)/Math.PI+0.5;s.push(v,1-M)}m(),h()}function h(){for(let p=0;p<s.length;p+=6){let y=s[p+0],v=s[p+2],M=s[p+4],b=Math.max(y,v,M),w=Math.min(y,v,M);if(b>0.9&&w<0.1){if(y<0.2)s[p+0]+=1;if(v<0.2)s[p+2]+=1;if(M<0.2)s[p+4]+=1}}}function u(p){r.push(p.x,p.y,p.z)}function f(p,y){let v=p*3;y.x=e[v+0],y.y=e[v+1],y.z=e[v+2]}function m(){let p=new A,y=new A,v=new A,M=new A,b=new W,w=new W,x=new W;for(let S=0,R=0;S<r.length;S+=9,R+=6){p.set(r[S+0],r[S+1],r[S+2]),y.set(r[S+3],r[S+4],r[S+5]),v.set(r[S+6],r[S+7],r[S+8]),b.set(s[R+0],s[R+1]),w.set(s[R+2],s[R+3]),x.set(s[R+4],s[R+5]),M.copy(p).add(y).add(v).divideScalar(3);let U=_(M);g(b,R+0,p,U),g(w,R+2,y,U),g(x,R+4,v,U)}}function g(p,y,v,M){if(M<0&&p.x===1)s[y]=p.x-1;if(v.x===0&&v.z===0)s[y]=M/2/Math.PI+0.5}function _(p){return Math.atan2(p.z,-p.x)}function d(p){return Math.atan2(-p.y,Math.sqrt(p.x*p.x+p.z*p.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new as(e.vertices,e.indices,e.radius,e.detail)}}class fc extends as{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,n=1/i,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-n,-i,0,-n,i,0,n,-i,0,n,i,-n,-i,0,-n,i,0,n,-i,0,n,i,0,-i,0,-n,i,0,-n,-i,0,n,i,0,n],s=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,s,e,t);this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new fc(e.radius,e.detail)}}var uc=new A,dc=new A,Uh=new A,pc=new Pi;class mc extends Oe{constructor(e=null,t=1){super();if(this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let n=Math.pow(10,4),r=Math.cos($r*t),s=e.getIndex(),o=e.getAttribute("position"),a=s?s.count:o.count,l=[0,0,0],c=["a","b","c"],h=[,,,],u=new Map,f=[];for(let m=0;m<a;m+=3){if(s)l[0]=s.getX(m),l[1]=s.getX(m+1),l[2]=s.getX(m+2);else l[0]=m,l[1]=m+1,l[2]=m+2;let{a:g,b:_,c:d}=pc;if(g.fromBufferAttribute(o,l[0]),_.fromBufferAttribute(o,l[1]),d.fromBufferAttribute(o,l[2]),pc.getNormal(Uh),h[0]=`${Math.round(g.x*n)},${Math.round(g.y*n)},${Math.round(g.z*n)}`,h[1]=`${Math.round(_.x*n)},${Math.round(_.y*n)},${Math.round(_.z*n)}`,h[2]=`${Math.round(d.x*n)},${Math.round(d.y*n)},${Math.round(d.z*n)}`,h[0]===h[1]||h[1]===h[2]||h[2]===h[0])continue;for(let p=0;p<3;p++){let y=(p+1)%3,v=h[p],M=h[y],b=pc[c[p]],w=pc[c[y]],x=`${v}_${M}`,S=`${M}_${v}`,R=u.get(S);if(R){if(Uh.dot(R.normal)<=r)f.push(b.x,b.y,b.z),f.push(w.x,w.y,w.z);u.set(S,null)}else if(!u.has(x))u.set(x,{index0:l[p],index1:l[y],normal:Uh.clone()})}}for(let m of u.values())if(m){let{index0:g,index1:_}=m;uc.fromBufferAttribute(o,g),dc.fromBufferAttribute(o,_),f.push(uc.x,uc.y,uc.z),f.push(dc.x,dc.y,dc.z)}this.setAttribute("position",new ye(f,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class ti{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){xe("Curve: .getPoint() not implemented.")}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,n=this.getPoint(0),r=0;t.push(0);for(let s=1;s<=e;s++)i=this.getPoint(s/e),r+=i.distanceTo(n),t.push(r),n=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let i=this.getLengths(),n=0,r=i.length,s;if(t)s=t;else s=e*i[r-1];let o=0,a=r-1,l;while(o<=a)if(n=Math.floor(o+(a-o)/2),l=i[n]-s,l<0)o=n+1;else if(l>0)a=n-1;else{a=n;break}if(n=a,i[n]===s)return n/(r-1);let c=i[n],u=i[n+1]-c,f=(s-c)/u;return(n+f)/(r-1)}getTangent(e,t){let n=e-0.0001,r=e+0.0001;if(n<0)n=0;if(r>1)r=1;let s=this.getPoint(n),o=this.getPoint(r),a=t||(s.isVector2?new W:new A);return a.copy(o).sub(s).normalize(),a}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){let i=new A,n=[],r=[],s=[],o=new A,a=new qe;for(let f=0;f<=e;f++){let m=f/e;n[f]=this.getTangentAt(m,new A)}r[0]=new A,s[0]=new A;let l=Number.MAX_VALUE,c=Math.abs(n[0].x),h=Math.abs(n[0].y),u=Math.abs(n[0].z);if(c<=l)l=c,i.set(1,0,0);if(h<=l)l=h,i.set(0,1,0);if(u<=l)i.set(0,0,1);o.crossVectors(n[0],i).normalize(),r[0].crossVectors(n[0],o),s[0].crossVectors(n[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),s[f]=s[f-1].clone(),o.crossVectors(n[f-1],n[f]),o.length()>Number.EPSILON){o.normalize();let m=Math.acos(tt(n[f-1].dot(n[f]),-1,1));r[f].applyMatrix4(a.makeRotationAxis(o,m))}s[f].crossVectors(n[f],r[f])}if(t===!0){let f=Math.acos(tt(r[0].dot(r[e]),-1,1));if(f/=e,n[0].dot(o.crossVectors(r[0],r[e]))>0)f=-f;for(let m=1;m<=e;m++)r[m].applyMatrix4(a.makeRotationAxis(n[m],f*m)),s[m].crossVectors(n[m],r[m])}return{tangents:n,normals:r,binormals:s}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}}class ls extends ti{constructor(e=0,t=0,i=1,n=1,r=0,s=Math.PI*2,o=!1,a=0){super();this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=n,this.aStartAngle=r,this.aEndAngle=s,this.aClockwise=o,this.aRotation=a}getPoint(e,t=new W){let i=t,n=Math.PI*2,r=this.aEndAngle-this.aStartAngle,s=Math.abs(r)<Number.EPSILON;while(r<0)r+=n;while(r>n)r-=n;if(r<Number.EPSILON)if(s)r=0;else r=n;if(this.aClockwise===!0&&!s)if(r===n)r=-n;else r=r-n;let o=this.aStartAngle+e*r,a=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let c=Math.cos(this.aRotation),h=Math.sin(this.aRotation),u=a-this.aX,f=l-this.aY;a=u*c-f*h+this.aX,l=u*h+f*c+this.aY}return i.set(a,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Fh extends ls{constructor(e,t,i,n,r,s){super(e,t,i,i,n,r,s);this.isArcCurve=!0,this.type="ArcCurve"}}function Gh(){let e=0,t=0,i=0,n=0;function r(s,o,a,l){e=s,t=a,i=-3*s+3*o-2*a-l,n=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){r(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,h,u){let f=(o-s)/c-(a-s)/(c+h)+(a-o)/h,m=(a-o)/h-(l-o)/(h+u)+(l-a)/u;f*=h,m*=h,r(o,a,f,m)},calc:function(s){let o=s*s,a=o*s;return e+t*s+i*o+n*a}}}var $u=new A,Qu=new A,Bh=new Gh,Oh=new Gh,zh=new Gh;class uo extends ti{constructor(e=[],t=!1,i="centripetal",n=0.5){super();this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=n}getPoint(e,t=new A){let i=t,n=this.points,r=n.length,s=(r-(this.closed?0:1))*e,o=Math.floor(s),a=s-o;if(this.closed)o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r;else if(a===0&&o===r-1)o=r-2,a=1;let l,c;if(this.closed||o>0)l=n[(o-1)%r];else Qu.subVectors(n[0],n[1]).add(n[0]),l=Qu;let h=n[o%r],u=n[(o+1)%r];if(this.closed||o+2<r)c=n[(o+2)%r];else $u.subVectors(n[r-1],n[r-2]).add(n[r-1]),c=$u;if(this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?0.5:0.25,m=Math.pow(l.distanceToSquared(h),f),g=Math.pow(h.distanceToSquared(u),f),_=Math.pow(u.distanceToSquared(c),f);if(g<0.0001)g=1;if(m<0.0001)m=g;if(_<0.0001)_=g;Bh.initNonuniformCatmullRom(l.x,h.x,u.x,c.x,m,g,_),Oh.initNonuniformCatmullRom(l.y,h.y,u.y,c.y,m,g,_),zh.initNonuniformCatmullRom(l.z,h.z,u.z,c.z,m,g,_)}else if(this.curveType==="catmullrom")Bh.initCatmullRom(l.x,h.x,u.x,c.x,this.tension),Oh.initCatmullRom(l.y,h.y,u.y,c.y,this.tension),zh.initCatmullRom(l.z,h.z,u.z,c.z,this.tension);return i.set(Bh.calc(a),Oh.calc(a),zh.calc(a)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let n=e.points[t];this.points.push(n.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let n=this.points[t];e.points.push(n.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let n=e.points[t];this.points.push(new A().fromArray(n))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Hh(e,t,i,n,r){let s=(n-t)*0.5,o=(r-i)*0.5,a=e*e,l=e*a;return(2*i-2*n+s+o)*l+(-3*i+3*n-2*s-o)*a+s*e+i}function Ex(e,t){let i=1-e;return i*i*t}function Tx(e,t){return 2*(1-e)*e*t}function wx(e,t){return e*e*t}function cs(e,t,i,n){return Ex(e,t)+Tx(e,i)+wx(e,n)}function Ax(e,t){let i=1-e;return i*i*i*t}function Rx(e,t){let i=1-e;return 3*i*i*e*t}function Cx(e,t){return 3*(1-e)*e*e*t}function Px(e,t){return e*e*e*t}function hs(e,t,i,n,r){return Ax(e,t)+Rx(e,i)+Cx(e,n)+Px(e,r)}class Ha extends ti{constructor(e=new W,t=new W,i=new W,n=new W){super();this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=n}getPoint(e,t=new W){let i=t,n=this.v0,r=this.v1,s=this.v2,o=this.v3;return i.set(hs(e,n.x,r.x,s.x,o.x),hs(e,n.y,r.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class kh extends ti{constructor(e=new A,t=new A,i=new A,n=new A){super();this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=n}getPoint(e,t=new A){let i=t,n=this.v0,r=this.v1,s=this.v2,o=this.v3;return i.set(hs(e,n.x,r.x,s.x,o.x),hs(e,n.y,r.y,s.y,o.y),hs(e,n.z,r.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class ka extends ti{constructor(e=new W,t=new W){super();this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new W){let i=t;if(e===1)i.copy(this.v2);else i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1);return i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new W){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Vh extends ti{constructor(e=new A,t=new A){super();this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new A){let i=t;if(e===1)i.copy(this.v2);else i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1);return i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new A){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Va extends ti{constructor(e=new W,t=new W,i=new W){super();this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new W){let i=t,n=this.v0,r=this.v1,s=this.v2;return i.set(cs(e,n.x,r.x,s.x),cs(e,n.y,r.y,s.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Wa extends ti{constructor(e=new A,t=new A,i=new A){super();this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new A){let i=t,n=this.v0,r=this.v1,s=this.v2;return i.set(cs(e,n.x,r.x,s.x),cs(e,n.y,r.y,s.y),cs(e,n.z,r.z,s.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Xa extends ti{constructor(e=[]){super();this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new W){let i=t,n=this.points,r=(n.length-1)*e,s=Math.floor(r),o=r-s,a=n[s===0?s:s-1],l=n[s],c=n[s>n.length-2?n.length-1:s+1],h=n[s>n.length-3?n.length-1:s+2];return i.set(Hh(o,a.x,l.x,c.x,h.x),Hh(o,a.y,l.y,c.y,h.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let n=e.points[t];this.points.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let n=this.points[t];e.points.push(n.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let n=e.points[t];this.points.push(new W().fromArray(n))}return this}}class gc extends ti{constructor(){super();this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Tr[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),n=this.getCurveLengths(),r=0;while(r<n.length){if(n[r]>=i){let s=n[r]-i,o=this.curves[r],a=o.getLength(),l=a===0?0:1-s/a;return o.getPointAt(l,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,n=this.curves.length;i<n;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));if(this.autoClose)t.push(t[0]);return t}getPoints(e=12){let t=[],i;for(let n=0,r=this.curves;n<r.length;n++){let s=r[n],o=s.isEllipseCurve?e*2:s.isLineCurve||s.isLineCurve3?1:s.isSplineCurve?e*s.points.length:e,a=s.getPoints(o);for(let l=0;l<a.length;l++){let c=a[l];if(i&&i.equals(c))continue;t.push(c),i=c}}if(this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0]))t.push(t[0]);return t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let n=e.curves[t];this.curves.push(n.clone())}return this.autoClose=e.autoClose,this.cacheLengths=null,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let n=this.curves[t];e.curves.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let n=e.curves[t];this.curves.push(new Tr[n.type]().fromJSON(n))}return this.cacheLengths=null,this}}class po extends gc{constructor(e){super();if(this.type="Path",this.currentPoint=new W,e)this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new ka(this.currentPoint.clone(),new W(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,n){let r=new Va(this.currentPoint.clone(),new W(e,t),new W(i,n));return this.curves.push(r),this.currentPoint.set(i,n),this}bezierCurveTo(e,t,i,n,r,s){let o=new Ha(this.currentPoint.clone(),new W(e,t),new W(i,n),new W(r,s));return this.curves.push(o),this.currentPoint.set(r,s),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new Xa(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,n,r,s){let o=this.currentPoint.x,a=this.currentPoint.y;return this.absarc(e+o,t+a,i,n,r,s),this}absarc(e,t,i,n,r,s){return this.absellipse(e,t,i,i,n,r,s),this}ellipse(e,t,i,n,r,s,o,a){let l=this.currentPoint.x,c=this.currentPoint.y;return this.absellipse(e+l,t+c,i,n,r,s,o,a),this}absellipse(e,t,i,n,r,s,o,a){let l=new ls(e,t,i,n,r,s,o,a);if(this.curves.length>0){let h=l.getPoint(0);if(!h.equals(this.currentPoint))this.lineTo(h.x,h.y)}this.curves.push(l);let c=l.getPoint(1);return this.currentPoint.copy(c),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Xi extends po{constructor(e){super(e);this.uuid=Si(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,n=this.holes.length;i<n;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let n=e.holes[t];this.holes.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let n=this.holes[t];e.holes.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let n=e.holes[t];this.holes.push(new po().fromJSON(n))}return this}}function qh(e,t,i=2){let n=t&&t.length,r=n?t[0]*i:e.length,s=ed(e,0,r,i,!0),o=[];if(!s||s.next===s.prev)return o;let a,l,c;if(n)s=Ux(e,t,s,i);if(e.length>80*i){a=e[0],l=e[1];let h=a,u=l;for(let f=i;f<r;f+=i){let m=e[f],g=e[f+1];if(m<a)a=m;if(g<l)l=g;if(m>h)h=m;if(g>u)u=g}c=Math.max(h-a,u-l),c=c!==0?32767/c:0}return Ya(s,o,i,a,l,c,0),o}function ed(e,t,i,n,r){let s;if(r===qx(e,t,i,n)>0)for(let o=t;o<i;o+=n)s=ju(o/n|0,e[o],e[o+1],s);else for(let o=i-n;o>=t;o-=n)s=ju(o/n|0,e[o],e[o+1],s);if(s&&mo(s,s.next))Ja(s),s=s.next;return s}function fs(e,t){if(!e)return e;if(!t)t=e;let i=e,n;do if(n=!1,!i.steiner&&(mo(i,i.next)||Qt(i.prev,i,i.next)===0)){if(Ja(i),i=t=i.prev,i===i.next)break;n=!0}else i=i.next;while(n||i!==t);return t}function Ya(e,t,i,n,r,s,o){if(!e)return;if(!o&&s)Gx(e,n,r,s);let a=e;while(e.prev!==e.next){let l=e.prev,c=e.next;if(s?Lx(e,n,r,s):Ix(e)){t.push(l.i,e.i,c.i),Ja(e),e=c.next,a=c.next;continue}if(e=c,e===a){if(!o)Ya(fs(e),t,i,n,r,s,1);else if(o===1)e=Dx(fs(e),t),Ya(e,t,i,n,r,s,2);else if(o===2)Nx(e,t,i,n,r,s);break}}}function Ix(e){let t=e.prev,i=e,n=e.next;if(Qt(t,i,n)>=0)return!1;let r=t.x,s=i.x,o=n.x,a=t.y,l=i.y,c=n.y,h=Math.min(r,s,o),u=Math.min(a,l,c),f=Math.max(r,s,o),m=Math.max(a,l,c),g=n.next;while(g!==t){if(g.x>=h&&g.x<=f&&g.y>=u&&g.y<=m&&qa(r,a,s,l,o,c,g.x,g.y)&&Qt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Lx(e,t,i,n){let r=e.prev,s=e,o=e.next;if(Qt(r,s,o)>=0)return!1;let a=r.x,l=s.x,c=o.x,h=r.y,u=s.y,f=o.y,m=Math.min(a,l,c),g=Math.min(h,u,f),_=Math.max(a,l,c),d=Math.max(h,u,f),p=Wh(m,g,t,i,n),y=Wh(_,d,t,i,n),{prevZ:v,nextZ:M}=e;while(v&&v.z>=p&&M&&M.z<=y){if(v.x>=m&&v.x<=_&&v.y>=g&&v.y<=d&&v!==r&&v!==o&&qa(a,h,l,u,c,f,v.x,v.y)&&Qt(v.prev,v,v.next)>=0)return!1;if(v=v.prevZ,M.x>=m&&M.x<=_&&M.y>=g&&M.y<=d&&M!==r&&M!==o&&qa(a,h,l,u,c,f,M.x,M.y)&&Qt(M.prev,M,M.next)>=0)return!1;M=M.nextZ}while(v&&v.z>=p){if(v.x>=m&&v.x<=_&&v.y>=g&&v.y<=d&&v!==r&&v!==o&&qa(a,h,l,u,c,f,v.x,v.y)&&Qt(v.prev,v,v.next)>=0)return!1;v=v.prevZ}while(M&&M.z<=y){if(M.x>=m&&M.x<=_&&M.y>=g&&M.y<=d&&M!==r&&M!==o&&qa(a,h,l,u,c,f,M.x,M.y)&&Qt(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function Dx(e,t){let i=e;do{let n=i.prev,r=i.next.next;if(!mo(n,r)&&id(n,i,i.next,r)&&Za(n,r)&&Za(r,n))t.push(n.i,i.i,r.i),Ja(i),Ja(i.next),i=e=r;i=i.next}while(i!==e);return fs(i)}function Nx(e,t,i,n,r,s){let o=e;do{let a=o.next.next;while(a!==o.prev){if(o.i!==a.i&&Vx(o,a)){let l=nd(o,a);o=fs(o,o.next),l=fs(l,l.next),Ya(o,t,i,n,r,s,0),Ya(l,t,i,n,r,s,0);return}a=a.next}o=o.next}while(o!==e)}function Ux(e,t,i,n){let r=[];for(let s=0,o=t.length;s<o;s++){let a=t[s]*n,l=s<o-1?t[s+1]*n:e.length,c=ed(e,a,l,n,!1);if(c===c.next)c.steiner=!0;r.push(kx(c))}r.sort(Fx);for(let s=0;s<r.length;s++)i=Bx(r[s],i);return i}function Fx(e,t){let i=e.x-t.x;if(i===0){if(i=e.y-t.y,i===0){let n=(e.next.y-e.y)/(e.next.x-e.x),r=(t.next.y-t.y)/(t.next.x-t.x);i=n-r}}return i}function Bx(e,t){let i=Ox(e,t);if(!i)return t;let n=nd(i,e);return fs(n,n.next),fs(i,i.next)}function Ox(e,t){let i=t,{x:n,y:r}=e,s=-1/0,o;if(mo(e,i))return i;do{if(mo(e,i.next))return i.next;else if(r<=i.y&&r>=i.next.y&&i.next.y!==i.y){let u=i.x+(r-i.y)*(i.next.x-i.x)/(i.next.y-i.y);if(u<=n&&u>s){if(s=u,o=i.x<i.next.x?i:i.next,u===n)return o}}i=i.next}while(i!==t);if(!o)return null;let a=o,l=o.x,c=o.y,h=1/0;i=o;do{if(n>=i.x&&i.x>=l&&n!==i.x&&td(r<c?n:s,r,l,c,r<c?s:n,r,i.x,i.y)){let u=Math.abs(r-i.y)/(n-i.x);if(Za(i,e)&&(u<h||u===h&&(i.x>o.x||i.x===o.x&&zx(o,i))))o=i,h=u}i=i.next}while(i!==a);return o}function zx(e,t){return Qt(e.prev,e,t.prev)<0&&Qt(t.next,e,e.next)<0}function Gx(e,t,i,n){let r=e;do{if(r.z===0)r.z=Wh(r.x,r.y,t,i,n);r.prevZ=r.prev,r.nextZ=r.next,r=r.next}while(r!==e);r.prevZ.nextZ=null,r.prevZ=null,Hx(r)}function Hx(e){let t,i=1;do{let n=e,r;e=null;let s=null;t=0;while(n){t++;let o=n,a=0;for(let c=0;c<i;c++)if(a++,o=o.nextZ,!o)break;let l=i;while(a>0||l>0&&o){if(a!==0&&(l===0||!o||n.z<=o.z))r=n,n=n.nextZ,a--;else r=o,o=o.nextZ,l--;if(s)s.nextZ=r;else e=r;r.prevZ=s,s=r}n=o}s.nextZ=null,i*=2}while(t>1);return e}function Wh(e,t,i,n,r){return e=(e-i)*r|0,t=(t-n)*r|0,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e|t<<1}function kx(e){let t=e,i=e;do{if(t.x<i.x||t.x===i.x&&t.y<i.y)i=t;t=t.next}while(t!==e);return i}function td(e,t,i,n,r,s,o,a){return(r-o)*(t-a)>=(e-o)*(s-a)&&(e-o)*(n-a)>=(i-o)*(t-a)&&(i-o)*(s-a)>=(r-o)*(n-a)}function qa(e,t,i,n,r,s,o,a){return!(e===o&&t===a)&&td(e,t,i,n,r,s,o,a)}function Vx(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!Wx(e,t)&&(Za(e,t)&&Za(t,e)&&Xx(e,t)&&(Qt(e.prev,e,t.prev)||Qt(e,t.prev,t))||mo(e,t)&&Qt(e.prev,e,e.next)>0&&Qt(t.prev,t,t.next)>0)}function Qt(e,t,i){return(t.y-e.y)*(i.x-t.x)-(t.x-e.x)*(i.y-t.y)}function mo(e,t){return e.x===t.x&&e.y===t.y}function id(e,t,i,n){let r=_c(Qt(e,t,i)),s=_c(Qt(e,t,n)),o=_c(Qt(i,n,e)),a=_c(Qt(i,n,t));if(r!==s&&o!==a)return!0;if(r===0&&xc(e,i,t))return!0;if(s===0&&xc(e,n,t))return!0;if(o===0&&xc(i,e,n))return!0;if(a===0&&xc(i,t,n))return!0;return!1}function xc(e,t,i){return t.x<=Math.max(e.x,i.x)&&t.x>=Math.min(e.x,i.x)&&t.y<=Math.max(e.y,i.y)&&t.y>=Math.min(e.y,i.y)}function _c(e){return e>0?1:e<0?-1:0}function Wx(e,t){let i=e;do{if(i.i!==e.i&&i.next.i!==e.i&&i.i!==t.i&&i.next.i!==t.i&&id(i,i.next,e,t))return!0;i=i.next}while(i!==e);return!1}function Za(e,t){return Qt(e.prev,e,e.next)<0?Qt(e,t,e.next)>=0&&Qt(e,e.prev,t)>=0:Qt(e,t,e.prev)<0||Qt(e,e.next,t)<0}function Xx(e,t){let i=e,n=!1,r=(e.x+t.x)/2,s=(e.y+t.y)/2;do{if(i.y>s!==i.next.y>s&&i.next.y!==i.y&&r<(i.next.x-i.x)*(s-i.y)/(i.next.y-i.y)+i.x)n=!n;i=i.next}while(i!==e);return n}function nd(e,t){let i=Xh(e.i,e.x,e.y),n=Xh(t.i,t.x,t.y),r=e.next,s=t.prev;return e.next=t,t.prev=e,i.next=r,r.prev=i,n.next=i,i.prev=n,s.next=n,n.prev=s,n}function ju(e,t,i,n){let r=Xh(e,t,i);if(!n)r.prev=r,r.next=r;else r.next=n.next,r.prev=n,n.next.prev=r,n.next=r;return r}function Ja(e){if(e.next.prev=e.prev,e.prev.next=e.next,e.prevZ)e.prevZ.nextZ=e.nextZ;if(e.nextZ)e.nextZ.prevZ=e.prevZ}function Xh(e,t,i){return{i:e,x:t,y:i,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function qx(e,t,i,n){let r=0;for(let s=t,o=i-n;s<i;s+=n)r+=(e[o]-e[s])*(e[s+1]+e[o+1]),o=s;return r}class Yh{static triangulate(e,t,i=2){return qh(e,t,i)}}class hn{static area(e){let t=e.length,i=0;for(let n=t-1,r=0;r<t;n=r++)i+=e[n].x*e[r].y-e[r].x*e[n].y;return i*0.5}static isClockWise(e){return hn.area(e)<0}static triangulateShape(e,t){let i=[],n=[],r=[];rd(e),sd(i,e);let s=e.length;t.forEach(rd);for(let a=0;a<t.length;a++)n.push(s),s+=t[a].length,sd(i,t[a]);let o=Yh.triangulate(i,n);for(let a=0;a<o.length;a+=3)r.push(o.slice(a,a+3));return r}}function rd(e){let t=e.length;if(t>2&&e[t-1].equals(e[0]))e.pop()}function sd(e,t){for(let i=0;i<t.length;i++)e.push(t[i].x),e.push(t[i].y)}class go extends Oe{constructor(e=new Xi([new W(0.5,0.5),new W(-0.5,0.5),new W(-0.5,-0.5),new W(0.5,-0.5)]),t={}){super();this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let i=this,n=[],r=[];for(let o=0,a=e.length;o<a;o++){let l=e[o];s(l)}this.setAttribute("position",new ye(n,3)),this.setAttribute("uv",new ye(r,2)),this.computeVertexNormals();function s(o){let a=[],l=t.curveSegments!==void 0?t.curveSegments:12,c=t.steps!==void 0?t.steps:1,h=t.depth!==void 0?t.depth:1,u=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:0.2,m=t.bevelSize!==void 0?t.bevelSize:f-0.1,g=t.bevelOffset!==void 0?t.bevelOffset:0,_=t.bevelSegments!==void 0?t.bevelSegments:3,d=t.extrudePath,p=t.UVGenerator!==void 0?t.UVGenerator:Yx,y,v=!1,M,b,w,x;if(d){y=d.getSpacedPoints(c),v=!0,u=!1;let ae=d.isCatmullRomCurve3?d.closed:!1;M=d.computeFrenetFrames(c,ae),b=new A,w=new A,x=new A}if(!u)_=0,f=0,m=0,g=0;let S=o.extractPoints(l),{shape:R,holes:U}=S;if(!hn.isClockWise(R)){R=R.reverse();for(let ae=0,fe=U.length;ae<fe;ae++){let de=U[ae];if(hn.isClockWise(de))U[ae]=de.reverse()}}function O(ae){let Pe=ae[0];for(let Fe=1;Fe<=ae.length;Fe++){let $e=Fe%ae.length,We=ae[$e],ft=We.x-Pe.x,mt=We.y-Pe.y,Tt=ft*ft+mt*mt,B=Math.max(Math.abs(We.x),Math.abs(We.y),Math.abs(Pe.x),Math.abs(Pe.y)),hi=0.000000000000000000010000000000000001*B*B;if(Tt<=hi){ae.splice($e,1),Fe--;continue}Pe=We}}O(R),U.forEach(O);let te=U.length,P=R;for(let ae=0;ae<te;ae++){let fe=U[ae];R=R.concat(fe)}function Z(ae,fe,de){if(!fe)Be("ExtrudeGeometry: vec does not exist");return ae.clone().addScaledVector(fe,de)}let L=R.length;function N(ae,fe,de){let Pe,Fe,$e,We=ae.x-fe.x,ft=ae.y-fe.y,mt=de.x-ae.x,Tt=de.y-ae.y,B=We*We+ft*ft,hi=We*Tt-ft*mt;if(Math.abs(hi)>Number.EPSILON){let ut=Math.sqrt(B),ni=Math.sqrt(mt*mt+Tt*Tt),Re=fe.x-ft/ut,Lt=fe.y+We/ut,et=de.x-Tt/ni,nt=de.y+mt/ni,fi=((et-Re)*Tt-(nt-Lt)*mt)/(We*Tt-ft*mt);Pe=Re+We*fi-ae.x,Fe=Lt+ft*fi-ae.y;let C=Pe*Pe+Fe*Fe;if(C<=2)return new W(Pe,Fe);else $e=Math.sqrt(C/2)}else{let ut=!1;if(We>Number.EPSILON){if(mt>Number.EPSILON)ut=!0}else if(We<-Number.EPSILON){if(mt<-Number.EPSILON)ut=!0}else if(Math.sign(ft)===Math.sign(Tt))ut=!0;if(ut)Pe=-ft,Fe=We,$e=Math.sqrt(B);else Pe=We,Fe=ft,$e=Math.sqrt(B/2)}return new W(Pe/$e,Fe/$e)}let ee=[];for(let ae=0,fe=P.length,de=fe-1,Pe=ae+1;ae<fe;ae++,de++,Pe++){if(de===fe)de=0;if(Pe===fe)Pe=0;ee[ae]=N(P[ae],P[de],P[Pe])}let G=[],Y,K=ee.concat();for(let ae=0,fe=te;ae<fe;ae++){let de=U[ae];Y=[];for(let Pe=0,Fe=de.length,$e=Fe-1,We=Pe+1;Pe<Fe;Pe++,$e++,We++){if($e===Fe)$e=0;if(We===Fe)We=0;Y[Pe]=N(de[Pe],de[$e],de[We])}G.push(Y),K=K.concat(Y)}let pe;if(_===0)pe=hn.triangulateShape(P,U);else{let ae=[],fe=[];for(let de=0;de<_;de++){let Pe=de/_,Fe=f*Math.cos(Pe*Math.PI/2),$e=m*Math.sin(Pe*Math.PI/2)+g;for(let We=0,ft=P.length;We<ft;We++){let mt=Z(P[We],ee[We],$e);if(we(mt.x,mt.y,-Fe),Pe===0)ae.push(mt)}for(let We=0,ft=te;We<ft;We++){let mt=U[We];Y=G[We];let Tt=[];for(let B=0,hi=mt.length;B<hi;B++){let ut=Z(mt[B],Y[B],$e);if(we(ut.x,ut.y,-Fe),Pe===0)Tt.push(ut)}if(Pe===0)fe.push(Tt)}}pe=hn.triangulateShape(ae,fe)}let X=pe.length,ie=m+g;for(let ae=0;ae<L;ae++){let fe=u?Z(R[ae],K[ae],ie):R[ae];if(!v)we(fe.x,fe.y,0);else w.copy(M.normals[0]).multiplyScalar(fe.x),b.copy(M.binormals[0]).multiplyScalar(fe.y),x.copy(y[0]).add(w).add(b),we(x.x,x.y,x.z)}for(let ae=1;ae<=c;ae++)for(let fe=0;fe<L;fe++){let de=u?Z(R[fe],K[fe],ie):R[fe];if(!v)we(de.x,de.y,h/c*ae);else w.copy(M.normals[ae]).multiplyScalar(de.x),b.copy(M.binormals[ae]).multiplyScalar(de.y),x.copy(y[ae]).add(w).add(b),we(x.x,x.y,x.z)}for(let ae=_-1;ae>=0;ae--){let fe=ae/_,de=f*Math.cos(fe*Math.PI/2),Pe=m*Math.sin(fe*Math.PI/2)+g;for(let Fe=0,$e=P.length;Fe<$e;Fe++){let We=Z(P[Fe],ee[Fe],Pe);we(We.x,We.y,h+de)}for(let Fe=0,$e=U.length;Fe<$e;Fe++){let We=U[Fe];Y=G[Fe];for(let ft=0,mt=We.length;ft<mt;ft++){let Tt=Z(We[ft],Y[ft],Pe);if(!v)we(Tt.x,Tt.y,h+de);else we(Tt.x,Tt.y+y[c-1].y,y[c-1].x+de)}}}Me(),Se();function Me(){let ae=n.length/3;if(u){let fe=0,de=L*fe;for(let Pe=0;Pe<X;Pe++){let Fe=pe[Pe];pt(Fe[2]+de,Fe[1]+de,Fe[0]+de)}fe=c+_*2,de=L*fe;for(let Pe=0;Pe<X;Pe++){let Fe=pe[Pe];pt(Fe[0]+de,Fe[1]+de,Fe[2]+de)}}else{for(let fe=0;fe<X;fe++){let de=pe[fe];pt(de[2],de[1],de[0])}for(let fe=0;fe<X;fe++){let de=pe[fe];pt(de[0]+L*c,de[1]+L*c,de[2]+L*c)}}i.addGroup(ae,n.length/3-ae,0)}function Se(){let ae=n.length/3,fe=0;ze(P,fe),fe+=P.length;for(let de=0,Pe=U.length;de<Pe;de++){let Fe=U[de];ze(Fe,fe),fe+=Fe.length}i.addGroup(ae,n.length/3-ae,1)}function ze(ae,fe){let de=ae.length;while(--de>=0){let Pe=de,Fe=de-1;if(Fe<0)Fe=ae.length-1;for(let $e=0,We=c+_*2;$e<We;$e++){let ft=L*$e,mt=L*($e+1),Tt=fe+Pe+ft,B=fe+Fe+ft,hi=fe+Fe+mt,ut=fe+Pe+mt;Ne(Tt,B,hi,ut)}}}function we(ae,fe,de){a.push(ae),a.push(fe),a.push(de)}function pt(ae,fe,de){Ue(ae),Ue(fe),Ue(de);let Pe=n.length/3,Fe=p.generateTopUV(i,n,Pe-3,Pe-2,Pe-1);ot(Fe[0]),ot(Fe[1]),ot(Fe[2])}function Ne(ae,fe,de,Pe){Ue(ae),Ue(fe),Ue(Pe),Ue(fe),Ue(de),Ue(Pe);let Fe=n.length/3,$e=p.generateSideWallUV(i,n,Fe-6,Fe-3,Fe-2,Fe-1);ot($e[0]),ot($e[1]),ot($e[3]),ot($e[1]),ot($e[2]),ot($e[3])}function Ue(ae){n.push(a[ae*3+0]),n.push(a[ae*3+1]),n.push(a[ae*3+2])}function ot(ae){r.push(ae.x),r.push(ae.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return Zx(t,i,e)}static fromJSON(e,t){let i=[];for(let r=0,s=e.shapes.length;r<s;r++){let o=t[e.shapes[r]];i.push(o)}let n=e.options.extrudePath;if(n!==void 0)e.options.extrudePath=new Tr[n.type]().fromJSON(n);return new go(i,e.options)}}var Yx={generateTopUV:function(e,t,i,n,r){let s=t[i*3],o=t[i*3+1],a=t[n*3],l=t[n*3+1],c=t[r*3],h=t[r*3+1];return[new W(s,o),new W(a,l),new W(c,h)]},generateSideWallUV:function(e,t,i,n,r,s){let o=t[i*3],a=t[i*3+1],l=t[i*3+2],c=t[n*3],h=t[n*3+1],u=t[n*3+2],f=t[r*3],m=t[r*3+1],g=t[r*3+2],_=t[s*3],d=t[s*3+1],p=t[s*3+2];if(Math.abs(a-h)<Math.abs(o-c))return[new W(o,1-l),new W(c,1-u),new W(f,1-g),new W(_,1-p)];else return[new W(a,1-l),new W(h,1-u),new W(m,1-g),new W(d,1-p)]}};function Zx(e,t,i){if(i.shapes=[],Array.isArray(e))for(let n=0,r=e.length;n<r;n++){let s=e[n];i.shapes.push(s.uuid)}else i.shapes.push(e.uuid);if(i.options=Object.assign({},t),t.extrudePath!==void 0)i.options.extrudePath=t.extrudePath.toJSON();return i}class Ka extends Oe{constructor(e=[new W(0,-0.5),new W(0.5,0),new W(0,0.5)],t=12,i=0,n=Math.PI*2){super();this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:n},t=Math.floor(t),n=tt(n,0,Math.PI*2);let r=[],s=[],o=[],a=[],l=[],c=1/t,h=new A,u=new W,f=new A,m=new A,g=new A,_=0,d=0;for(let p=0;p<=e.length-1;p++)switch(p){case 0:_=e[p+1].x-e[p].x,d=e[p+1].y-e[p].y,f.x=d*1,f.y=-_,f.z=d*0,g.copy(f),f.normalize(),a.push(f.x,f.y,f.z);break;case e.length-1:g.normalize(),a.push(g.x,g.y,g.z);break;default:_=e[p+1].x-e[p].x,d=e[p+1].y-e[p].y,f.x=d*1,f.y=-_,f.z=d*0,m.copy(f),f.x+=g.x,f.y+=g.y,f.z+=g.z,f.normalize(),a.push(f.x,f.y,f.z),g.copy(m)}for(let p=0;p<=t;p++){let y=i+p*c*n,v=Math.sin(y),M=Math.cos(y);for(let b=0;b<=e.length-1;b++){h.x=e[b].x*v,h.y=e[b].y,h.z=e[b].x*M,s.push(h.x,h.y,h.z),u.x=p/t,u.y=b/(e.length-1),o.push(u.x,u.y);let w=a[3*b+0]*v,x=a[3*b+1],S=a[3*b+0]*M;l.push(w,x,S)}}for(let p=0;p<t;p++)for(let y=0;y<e.length-1;y++){let v=y+p*e.length,M=v,b=v+e.length,w=v+e.length+1,x=v+1;r.push(M,b,x),r.push(w,x,b)}this.setIndex(r),this.setAttribute("position",new ye(s,3)),this.setAttribute("uv",new ye(o,2)),this.setAttribute("normal",new ye(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ka(e.points,e.segments,e.phiStart,e.phiLength)}}class Pt extends Oe{constructor(e=1,t=1,i=1,n=1){super();this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:n};let r=e/2,s=t/2,o=Math.floor(i),a=Math.floor(n),l=o+1,c=a+1,h=e/o,u=t/a,f=[],m=[],g=[],_=[];for(let d=0;d<c;d++){let p=d*u-s;for(let y=0;y<l;y++){let v=y*h-r;m.push(v,-p,0),g.push(0,0,1),_.push(y/o),_.push(1-d/a)}}for(let d=0;d<a;d++)for(let p=0;p<o;p++){let y=p+l*d,v=p+l*(d+1),M=p+1+l*(d+1),b=p+1+l*d;f.push(y,v,b),f.push(v,M,b)}this.setIndex(f),this.setAttribute("position",new ye(m,3)),this.setAttribute("normal",new ye(g,3)),this.setAttribute("uv",new ye(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Pt(e.width,e.height,e.widthSegments,e.heightSegments)}}class xo extends Oe{constructor(e=0.5,t=1,i=32,n=1,r=0,s=Math.PI*2){super();this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:n,thetaStart:r,thetaLength:s},i=Math.max(3,i),n=Math.max(1,n);let o=[],a=[],l=[],c=[],h=e,u=(t-e)/n,f=new A,m=new W;for(let g=0;g<=n;g++){for(let _=0;_<=i;_++){let d=r+_/i*s;f.x=h*Math.cos(d),f.y=h*Math.sin(d),a.push(f.x,f.y,f.z),l.push(0,0,1),m.x=(f.x/t+1)/2,m.y=(f.y/t+1)/2,c.push(m.x,m.y)}h+=u}for(let g=0;g<n;g++){let _=g*(i+1);for(let d=0;d<i;d++){let p=d+_,y=p,v=p+i+1,M=p+i+2,b=p+1;o.push(y,v,b),o.push(v,M,b)}}this.setIndex(o),this.setAttribute("position",new ye(a,3)),this.setAttribute("normal",new ye(l,3)),this.setAttribute("uv",new ye(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xo(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class _o extends Oe{constructor(e=new Xi([new W(0,0.5),new W(-0.5,-0.5),new W(0.5,-0.5)]),t=12){super();this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let i=[],n=[],r=[],s=[],o=0,a=0;if(Array.isArray(e)===!1)l(e);else for(let c=0;c<e.length;c++)l(e[c]),this.addGroup(o,a,c),o+=a,a=0;this.setIndex(i),this.setAttribute("position",new ye(n,3)),this.setAttribute("normal",new ye(r,3)),this.setAttribute("uv",new ye(s,2));function l(c){let h=n.length/3,u=c.extractPoints(t),{shape:f,holes:m}=u;if(hn.isClockWise(f)===!1)f=f.reverse();for(let _=0,d=m.length;_<d;_++){let p=m[_];if(hn.isClockWise(p)===!0)m[_]=p.reverse()}let g=hn.triangulateShape(f,m);for(let _=0,d=m.length;_<d;_++){let p=m[_];f=f.concat(p)}for(let _=0,d=f.length;_<d;_++){let p=f[_];n.push(p.x,p.y,0),r.push(0,0,1),s.push(p.x,p.y)}for(let _=0,d=g.length;_<d;_++){let p=g[_],y=p[0]+h,v=p[1]+h,M=p[2]+h;i.push(y,v,M),a+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return Jx(t,e)}static fromJSON(e,t){let i=[];for(let n=0,r=e.shapes.length;n<r;n++){let s=t[e.shapes[n]];i.push(s)}return new _o(i,e.curveSegments)}}function Jx(e,t){if(t.shapes=[],Array.isArray(e))for(let i=0,n=e.length;i<n;i++){let r=e[i];t.shapes.push(r.uuid)}else t.shapes.push(e.uuid);return t}class vn extends Oe{constructor(e=1,t=32,i=16,n=0,r=Math.PI*2,s=0,o=Math.PI){super();this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:n,phiLength:r,thetaStart:s,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let a=Math.min(s+o,Math.PI),l=0,c=[],h=new A,u=new A,f=[],m=[],g=[],_=[];for(let d=0;d<=i;d++){let p=[],y=d/i,v=s+y*o,M=e*Math.cos(v),b=Math.sqrt(e*e-M*M),w=0;if(d===0&&s===0)w=0.5/t;else if(d===i&&a===Math.PI)w=-0.5/t;for(let x=0;x<=t;x++){let S=x/t,R=n+S*r;h.x=-b*Math.cos(R),h.y=M,h.z=b*Math.sin(R),m.push(h.x,h.y,h.z),u.copy(h).normalize(),g.push(u.x,u.y,u.z),_.push(S+w,1-y),p.push(l++)}c.push(p)}for(let d=0;d<i;d++)for(let p=0;p<t;p++){let y=c[d][p+1],v=c[d][p],M=c[d+1][p],b=c[d+1][p+1];if(d!==0||s>0)f.push(y,v,b);if(d!==i-1||a<Math.PI)f.push(v,M,b)}this.setIndex(f),this.setAttribute("position",new ye(m,3)),this.setAttribute("normal",new ye(g,3)),this.setAttribute("uv",new ye(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vn(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class kn extends Oe{constructor(e=1,t=0.4,i=12,n=48,r=Math.PI*2,s=0,o=Math.PI*2){super();this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:n,arc:r,thetaStart:s,thetaLength:o},i=Math.floor(i),n=Math.floor(n);let a=[],l=[],c=[],h=[],u=new A,f=new A,m=new A;for(let g=0;g<=i;g++){let _=s+g/i*o;for(let d=0;d<=n;d++){let p=d/n*r;f.x=(e+t*Math.cos(_))*Math.cos(p),f.y=(e+t*Math.cos(_))*Math.sin(p),f.z=t*Math.sin(_),l.push(f.x,f.y,f.z),u.x=e*Math.cos(p),u.y=e*Math.sin(p),m.subVectors(f,u).normalize(),c.push(m.x,m.y,m.z),h.push(d/n),h.push(g/i)}}for(let g=1;g<=i;g++)for(let _=1;_<=n;_++){let d=(n+1)*g+_-1,p=(n+1)*(g-1)+_-1,y=(n+1)*(g-1)+_,v=(n+1)*g+_;a.push(d,p,v),a.push(p,y,v)}this.setIndex(a),this.setAttribute("position",new ye(l,3)),this.setAttribute("normal",new ye(c,3)),this.setAttribute("uv",new ye(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new kn(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}class $a extends Oe{constructor(e=new Wa(new A(-1,-1,0),new A(-1,1,0),new A(1,1,0)),t=64,i=1,n=8,r=!1){super();this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:n,closed:r};let s=e.computeFrenetFrames(t,r);this.tangents=s.tangents,this.normals=s.normals,this.binormals=s.binormals;let o=new A,a=new A,l=new W,c=new A,h=[],u=[],f=[],m=[];g(),this.setIndex(m),this.setAttribute("position",new ye(h,3)),this.setAttribute("normal",new ye(u,3)),this.setAttribute("uv",new ye(f,2));function g(){for(let y=0;y<t;y++)_(y);_(r===!1?t:0),p(),d()}function _(y){c=e.getPointAt(y/t,c);let v=s.normals[y],M=s.binormals[y];for(let b=0;b<=n;b++){let w=b/n*Math.PI*2,x=Math.sin(w),S=-Math.cos(w);a.x=S*v.x+x*M.x,a.y=S*v.y+x*M.y,a.z=S*v.z+x*M.z,a.normalize(),u.push(a.x,a.y,a.z),o.x=c.x+i*a.x,o.y=c.y+i*a.y,o.z=c.z+i*a.z,h.push(o.x,o.y,o.z)}}function d(){for(let y=1;y<=t;y++)for(let v=1;v<=n;v++){let M=(n+1)*(y-1)+(v-1),b=(n+1)*y+(v-1),w=(n+1)*y+v,x=(n+1)*(y-1)+v;m.push(M,b,x),m.push(b,w,x)}}function p(){for(let y=0;y<=t;y++)for(let v=0;v<=n;v++)l.x=y/t,l.y=v/n,f.push(l.x,l.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new $a(new Tr[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}function or(e){let t={};for(let i in e){t[i]={};for(let n in e[i]){let r=e[i][n];if(od(r))if(r.isRenderTargetTexture)xe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][n]=null;else t[i][n]=r.clone();else if(Array.isArray(r))if(od(r[0])){let s=[];for(let o=0,a=r.length;o<a;o++)s[o]=r[o].clone();t[i][n]=s}else t[i][n]=r.slice();else t[i][n]=r}}return t}function Gi(e){let t={};for(let i=0;i<e.length;i++){let n=or(e[i]);for(let r in n)t[r]=n[r]}return t}function od(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function ad(e){let t=[];for(let i=0;i<e.length;i++)t.push(e[i].clone());return t}function yc(e){let t=e.getRenderTarget();if(t===null)return e.outputColorSpace;if(t.isXRRenderTarget===!0)return t.texture.colorSpace;return it.workingColorSpace}var Vn={clone:or,merge:Gi};var ld=`
void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}
`;var cd=`
void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}
`;class Zt extends Xt{constructor(e){super();if(this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ld,this.fragmentShader=cd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0)this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=or(e.uniforms),this.uniformsGroups=ad(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let s=this.uniforms[n].value;if(s&&s.isTexture)t.uniforms[n]={type:"t",value:s.toJSON(e).uuid};else if(s&&s.isColor)t.uniforms[n]={type:"c",value:s.getHex()};else if(s&&s.isVector2)t.uniforms[n]={type:"v2",value:s.toArray()};else if(s&&s.isVector3)t.uniforms[n]={type:"v3",value:s.toArray()};else if(s&&s.isVector4)t.uniforms[n]={type:"v4",value:s.toArray()};else if(s&&s.isMatrix3)t.uniforms[n]={type:"m3",value:s.toArray()};else if(s&&s.isMatrix4)t.uniforms[n]={type:"m4",value:s.toArray()};else t.uniforms[n]={value:s}}if(Object.keys(this.defines).length>0)t.defines=this.defines;t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let n in this.extensions)if(this.extensions[n]===!0)i[n]=!0;if(Object.keys(i).length>0)t.extensions=i;return t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let i in e.uniforms){let n=e.uniforms[i];switch(this.uniforms[i]={},n.type){case"t":this.uniforms[i].value=t[n.value]||null;break;case"c":this.uniforms[i].value=new ue().setHex(n.value);break;case"v2":this.uniforms[i].value=new W().fromArray(n.value);break;case"v3":this.uniforms[i].value=new A().fromArray(n.value);break;case"v4":this.uniforms[i].value=new St().fromArray(n.value);break;case"m3":this.uniforms[i].value=new Ke().fromArray(n.value);break;case"m4":this.uniforms[i].value=new qe().fromArray(n.value);break;default:this.uniforms[i].value=n.value}}if(e.defines!==void 0)this.defines=e.defines;if(e.vertexShader!==void 0)this.vertexShader=e.vertexShader;if(e.fragmentShader!==void 0)this.fragmentShader=e.fragmentShader;if(e.glslVersion!==void 0)this.glslVersion=e.glslVersion;if(e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];if(e.lights!==void 0)this.lights=e.lights;if(e.clipping!==void 0)this.clipping=e.clipping;return this}}class us extends Zt{constructor(e){super(e);this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class ht extends Xt{constructor(e){super();this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ue(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ue(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Pn,this.normalScale=new W(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Oi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class yo extends ht{constructor(e){super();this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new W(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return tt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+0.4*t)/(1-0.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new ue(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ue(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ue(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){if(this._anisotropy>0!==e>0)this.version++;this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){if(this._clearcoat>0!==e>0)this.version++;this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){if(this._diffuseRoughness>0!==e>0)this.version++;this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){if(this._iridescence>0!==e>0)this.version++;this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){if(this._dispersion>0!==e>0)this.version++;this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){if(this._retroreflectivity>0!==e>0)this.version++;this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){if(this._sheen>0!==e>0)this.version++;this._sheen=e}get transmission(){return this._transmission}set transmission(e){if(this._transmission>0!==e>0)this.version++;this._transmission=e}get iridescenceThicknessRange(){return xn('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){xn('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Qa extends Xt{constructor(e){super();this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ue(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ue(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Pn,this.normalScale=new W(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Oi,this.combine=Vr,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=0.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ja extends Xt{constructor(e){super();this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=lu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class el extends Xt{constructor(e){super();this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function wr(e,t){if(!e||e.constructor===t)return e;if(typeof t.BYTES_PER_ELEMENT==="number")return new t(e);return Array.prototype.slice.call(e)}function vo(e){return e!==void 0&&e.inTangents!==void 0&&e.outTangents!==void 0}class Mn{constructor(e,t,i,n){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=n!==void 0?n:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,n=t[i],r=t[i-1];i:{e:{let s;t:{n:if(!(e<n)){for(let o=i+2;;){if(n===void 0){if(e<r)break n;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=n,n=t[++i],e<n)break e}s=t.length;break t}if(!(e>=r)){let o=t[1];if(e<o)i=2,r=o;for(let a=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===a)break;if(n=r,r=t[--i-1],e>=r)break e}s=i,i=0;break t}break i}while(i<s){let o=i+s>>>1;if(e<t[o])s=o;else i=o+1}if(n=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,n)}return this.interpolate_(i,r,e,n)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,n=this.valueSize,r=e*n;for(let s=0;s!==n;++s)t[s]=i[r+s];return t}interpolate_(){throw Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}}class vc extends Mn{constructor(e,t,i,n){super(e,t,i,n);this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Cl,endingEnd:Cl}}intervalChanged_(e,t,i){let n=this.parameterPositions,r=e-2,s=e+1,o=n[r],a=n[s];if(o===void 0)switch(this.getSettings_().endingStart){case Pl:r=e,o=2*t-i;break;case Il:r=n.length-2,o=t+n[r]-n[r+1];break;default:r=e,o=i}if(a===void 0)switch(this.getSettings_().endingEnd){case Pl:s=e,a=2*i-t;break;case Il:s=1,a=i+n[1]-n[0];break;default:s=e-1,a=t}let l=(i-t)*0.5,c=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(a-i),this._offsetPrev=r*c,this._offsetNext=s*c}interpolate_(e,t,i,n){let r=this.resultBuffer,s=this.sampleValues,o=this.valueSize,a=e*o,l=a-o,c=this._offsetPrev,h=this._offsetNext,u=this._weightPrev,f=this._weightNext,m=(i-t)/(n-t),g=m*m,_=g*m,d=-u*_+2*u*g-u*m,p=(1+u)*_+(-1.5-2*u)*g+(-0.5+u)*m+1,y=(-1-f)*_+(1.5+f)*g+0.5*m,v=f*_-f*g;for(let M=0;M!==o;++M)r[M]=d*s[c+M]+p*s[l+M]+y*s[a+M]+v*s[h+M];return r}}class tl extends Mn{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){let r=this.resultBuffer,s=this.sampleValues,o=this.valueSize,a=e*o,l=a-o,c=(i-t)/(n-t),h=1-c;for(let u=0;u!==o;++u)r[u]=s[l+u]*h+s[a+u]*c;return r}}class Mc extends Mn{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e){return this.copySampleValue_(e-1)}}class Sc extends Mn{interpolate_(e,t,i,n){let r=this.resultBuffer,s=this.sampleValues,o=this.valueSize,a=e*o,l=a-o,c=this.inTangents,h=this.outTangents;if(!c||!h){let m=(i-t)/(n-t),g=1-m;for(let _=0;_!==o;++_)r[_]=s[l+_]*g+s[a+_]*m;return r}let u=o*2,f=e-1;for(let m=0;m!==o;++m){let g=s[l+m],_=s[a+m],d=f*u+m*2,p=h[d],y=h[d+1],v=e*u+m*2,M=c[v],b=c[v+1],w=s_(i,t,p,M,n);r[m]=fd(w,g,y,b,_)}return r}}function fd(e,t,i,n,r){let s=1-e;return s*s*s*t+3*s*s*e*i+3*s*e*e*n+e*e*e*r}function r_(e,t,i,n,r){let s=1-e;return 3*s*s*(i-t)+6*s*e*(n-i)+3*e*e*(r-n)}function s_(e,t,i,n,r){let s=(e-t)/(r-t);for(let o=0;o<8;o++){let a=fd(s,t,i,n,r)-e;if(Math.abs(a)<0.0000000001)break;let l=r_(s,t,i,n,r);if(Math.abs(l)<0.0000000001)break;s=Math.max(0,Math.min(1,s-a/l))}return s}class mi{constructor(e,t,i,n){if(e===void 0)throw Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=wr(t,this.TimeBufferType),this.values=wr(i,this.ValueBufferType),this.setInterpolation(n||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:wr(e.times,Array),values:wr(e.values,Array)};let n=e.getInterpolation();if(n!==e.DefaultInterpolation)i.interpolation=n;if(vo(e.settings))i.settings={inTangents:wr(e.settings.inTangents,Array),outTangents:wr(e.settings.outTangents,Array)}}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Mc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new tl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new vc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Sc(this.times,this.values,this.getValueSize(),e);if(this.settings)t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents;return t}setInterpolation(e){let t;switch(e){case Yr:t=this.InterpolantFactoryMethodDiscrete;break;case Al:t=this.InterpolantFactoryMethodLinear;break;case Rl:t=this.InterpolantFactoryMethodSmooth;break;case ch:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(i);return xe("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Yr;case this.InterpolantFactoryMethodLinear:return Al;case this.InterpolantFactoryMethodSmooth:return Rl;case this.InterpolantFactoryMethodBezier:return ch}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]+=e;if(vo(this.settings))ud(this.settings.inTangents,e),ud(this.settings.outTangents,e)}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]*=e;if(vo(this.settings))dd(this.settings.inTangents,e),dd(this.settings.outTangents,e)}return this}trim(e,t){let i=this.times,n=i.length,r=0,s=n-1;while(r!==n&&i[r]<e)++r;while(s!==-1&&i[s]>t)--s;if(++s,r!==0||s!==n){if(r>=s)s=Math.max(s,1),r=s-1;let o=this.getValueSize();this.times=i.slice(r,s),this.values=this.values.slice(r*o,s*o)}return this}validate(){let e=!0,t=this.getValueSize();if(t-Math.floor(t)!==0)Be("KeyframeTrack: Invalid value size in track.",this),e=!1;let i=this.times,n=this.values,r=i.length;if(r===0)Be("KeyframeTrack: Track is empty.",this),e=!1;let s=null;for(let o=0;o!==r;o++){let a=i[o];if(typeof a==="number"&&isNaN(a)){Be("KeyframeTrack: Time is not a valid number.",this,o,a),e=!1;break}if(s!==null&&s>a){Be("KeyframeTrack: Out of order keys.",this,o,a,s),e=!1;break}s=a}if(n!==void 0){if(fh(n))for(let o=0,a=n.length;o!==a;++o){let l=n[o];if(isNaN(l)){Be("KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),n=this.getInterpolation()===Rl,r=e.length-1,s=1;for(let o=1;o<r;++o){let a=!1,l=e[o],c=e[o+1];if(l!==c&&(o!==1||l!==e[0]))if(!n){let h=o*i,u=h-i,f=h+i;for(let m=0;m!==i;++m){let g=t[h+m];if(g!==t[u+m]||g!==t[f+m]){a=!0;break}}}else a=!0;if(a){if(o!==s){e[s]=e[o];let h=o*i,u=s*i;for(let f=0;f!==i;++f)t[u+f]=t[h+f]}++s}}if(r>0){e[s]=e[r];for(let o=r*i,a=s*i,l=0;l!==i;++l)t[a+l]=t[o+l];++s}if(s!==e.length)this.times=e.slice(0,s),this.values=t.slice(0,s*i);else this.times=e,this.values=t;return this}clone(){let e=this.times.slice(),t=this.values.slice(),n=new this.constructor(this.name,e,t);if(n.createInterpolant=this.createInterpolant,vo(this.settings))n.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()};return n}}function ud(e,t){for(let i=0,n=e.length;i!==n;i+=2)e[i]+=t}function dd(e,t){for(let i=0,n=e.length;i!==n;i+=2)e[i]*=t}mi.prototype.ValueTypeName="";mi.prototype.TimeBufferType=Float32Array;mi.prototype.ValueBufferType=Float32Array;mi.prototype.DefaultInterpolation=Al;class Ar extends mi{constructor(e,t,i){super(e,t,i)}}Ar.prototype.ValueTypeName="bool";Ar.prototype.ValueBufferType=Array;Ar.prototype.DefaultInterpolation=Yr;Ar.prototype.InterpolantFactoryMethodLinear=void 0;Ar.prototype.InterpolantFactoryMethodSmooth=void 0;class bc extends mi{constructor(e,t,i,n){super(e,t,i,n)}}bc.prototype.ValueTypeName="color";class Ec extends mi{constructor(e,t,i,n){super(e,t,i,n)}}Ec.prototype.ValueTypeName="number";class Tc extends Mn{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){let r=this.resultBuffer,s=this.sampleValues,o=this.valueSize,a=(i-t)/(n-t),l=e*o;for(let c=l+o;l!==c;l+=4)li.slerpFlat(r,0,s,l-o,s,l,a);return r}}class il extends mi{constructor(e,t,i,n){super(e,t,i,n)}InterpolantFactoryMethodLinear(e){return new Tc(this.times,this.values,this.getValueSize(),e)}}il.prototype.ValueTypeName="quaternion";il.prototype.InterpolantFactoryMethodSmooth=void 0;class Rr extends mi{constructor(e,t,i){super(e,t,i)}}Rr.prototype.ValueTypeName="string";Rr.prototype.ValueBufferType=Array;Rr.prototype.DefaultInterpolation=Yr;Rr.prototype.InterpolantFactoryMethodLinear=void 0;Rr.prototype.InterpolantFactoryMethodSmooth=void 0;class wc extends mi{constructor(e,t,i,n){super(e,t,i,n)}}wc.prototype.ValueTypeName="vector";var ds={enabled:!1,files:{},add:function(e,t){if(this.enabled===!1)return;if(md(e))return;this.files[e]=t},get:function(e){if(this.enabled===!1)return;if(md(e))return;return this.files[e]},remove:function(e){delete this.files[e]},clear:function(){this.files={}}};function md(e){try{let t=e.slice(e.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch(t){return!1}}class Ac{constructor(e,t,i){let n=this,r=!1,s=0,o=0,a=void 0,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(c){if(o++,r===!1){if(n.onStart!==void 0)n.onStart(c,s,o)}r=!0},this.itemEnd=function(c){if(s++,n.onProgress!==void 0)n.onProgress(c,s,o);if(s===o){if(r=!1,n.onLoad!==void 0)n.onLoad()}},this.itemError=function(c){if(n.onError!==void 0)n.onError(c)},this.resolveURL=function(c){if(c=c.normalize("NFC"),a)return a(c);return c},this.setURLModifier=function(c){return a=c,this},this.addHandler=function(c,h){return l.push(c,h),this},this.removeHandler=function(c){let h=l.indexOf(c);if(h!==-1)l.splice(h,2);return this},this.getHandler=function(c){for(let h=0,u=l.length;h<u;h+=2){let f=l[h],m=l[h+1];if(f.global)f.lastIndex=0;if(f.test(c))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){if(!this._abortController)this._abortController=new AbortController;return this._abortController}}var Zh=new Ac;class Ii{constructor(e){if(this.manager=e!==void 0?e:Zh,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(n,r){i.load(e,n,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}}Ii.DEFAULT_MATERIAL_NAME="__DEFAULT";var Mo=new WeakMap;class So extends Ii{constructor(e){super(e)}load(e,t,i,n){if(this.path!==void 0)e=this.path+e;e=this.manager.resolveURL(e);let r=this,s=ds.get(`image:${e}`);if(s!==void 0){if(s.complete===!0)r.manager.itemStart(e),setTimeout(function(){if(t)t(s);r.manager.itemEnd(e)},0);else{let h=Mo.get(s);if(h===void 0)h=[],Mo.set(s,h);h.push({onLoad:t,onError:n})}return s}let o=mr("img");function a(){if(c(),t)t(this);let h=Mo.get(this)||[];for(let u=0;u<h.length;u++){let f=h[u];if(f.onLoad)f.onLoad(this)}Mo.delete(this),r.manager.itemEnd(e)}function l(h){if(c(),n)n(h);ds.remove(`image:${e}`);let u=Mo.get(this)||[];for(let f=0;f<u.length;f++){let m=u[f];if(m.onError)m.onError(h)}Mo.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function c(){o.removeEventListener("load",a,!1),o.removeEventListener("error",l,!1)}if(o.addEventListener("load",a,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"){if(this.crossOrigin!==void 0)o.crossOrigin=this.crossOrigin}return ds.add(`image:${e}`,o),r.manager.itemStart(e),o.fetchPriority=this.priority,o.src=e,o}}class bo extends Ii{constructor(e){super(e)}load(e,t,i,n){let r=new Mt,s=new So(this.manager);return s.setPriority(this.priority),s.setCache(this.cache),s.setCrossOrigin(this.crossOrigin),s.setPath(this.path),s.load(e,function(o){if(r.image=o,r.needsUpdate=!0,t!==void 0)t(r)},i,n),r}}class Fn extends ct{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super();this.isLight=!0,this.type="Light",this.color=new ue(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}var Kh=new qe,gd=new A,xd=new A;class Eo{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new W(512,512),this.mapType=ri,this.map=null,this.mapPass=null,this.matrix=new qe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new yn,this._frameExtents=new W(1,1),this._viewportCount=1,this._viewports=[new St(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;gd.setFromMatrixPosition(e.matrixWorld),t.position.copy(gd),xd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(xd),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,n){Kh.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(Kh,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,s=n?n.z/r.x:1,o=n?n.w/r.y:1,a=n?n.x/r.x:0,l=n?n.y/r.y:0;if(e.coordinateSystem===On||e.reversedDepth)t.set(0.5*s,0,0,0.5*s+a,0,0.5*o,0,0.5*o+l,0,0,1,0,0,0,0,1);else t.set(0.5*s,0,0,0.5*s+a,0,0.5*o,0,0.5*o+l,0,0,0.5,0.5,0,0,0,1);t.multiply(Kh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){if(this.map)this.map.dispose();if(this.mapPass)this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}var Rc=new A,Cc=new li,Wn=new A;class ms extends ct{constructor(){super();this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new qe,this.projectionMatrix=new qe,this.projectionMatrixInverse=new qe,this.coordinateSystem=Mi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){if(super.updateMatrixWorld(e),this.matrixWorld.decompose(Rc,Cc,Wn),Wn.x===1&&Wn.y===1&&Wn.z===1)this.matrixWorldInverse.copy(this.matrixWorld).invert();else this.matrixWorldInverse.compose(Rc,Cc,Wn.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){if(super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(Rc,Cc,Wn),Wn.x===1&&Wn.y===1&&Wn.z===1)this.matrixWorldInverse.copy(this.matrixWorld).invert();else this.matrixWorldInverse.compose(Rc,Cc,Wn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}var Cr=new A,_d=new W,yd=new W;class ii extends ms{constructor(e=50,t=1,i=0.1,n=2000){super();this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=0.5*this.getFilmHeight()/e;this.fov=ks*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan($r*0.5*this.fov);return 0.5*this.getFilmHeight()/e}getEffectiveFOV(){return ks*2*Math.atan(Math.tan($r*0.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Cr.set(-1,-1,0.5).applyMatrix4(this.projectionMatrixInverse),t.set(Cr.x,Cr.y).multiplyScalar(-e/Cr.z),Cr.set(1,1,0.5).applyMatrix4(this.projectionMatrixInverse),i.set(Cr.x,Cr.y).multiplyScalar(-e/Cr.z)}getViewSize(e,t){return this.getViewBounds(e,_d,yd),t.subVectors(yd,_d)}setViewOffset(e,t,i,n,r,s){if(this.aspect=e/t,this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan($r*0.5*this.fov)/this.zoom,i=2*t,n=this.aspect*i,r=-0.5*n,s=this.view;if(this.view!==null&&this.view.enabled){let{fullWidth:a,fullHeight:l}=s;r+=s.offsetX*n/a,t-=s.offsetY*i/l,n*=s.width/a,i*=s.height/l}let o=this.filmOffset;if(o!==0)r+=e*o/this.getFilmWidth();this.projectionMatrix.makePerspective(r,r+n,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);if(t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null)t.object.view=Object.assign({},this.view);return t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class $h extends Eo{constructor(){super(new ii(90,1,0.5,500));this.isPointLightShadow=!0}}class ar extends Fn{constructor(e,t,i=0,n=2){super(e,t);this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=n,this.shadow=new $h}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class Pr extends ms{constructor(e=-1,t=1,i=1,n=-1,r=0.1,s=2000){super();this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=n,this.near=r,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,n,r,s){if(this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2,r=i-e,s=i+e,o=n+t,a=n-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,s=r+l*this.view.width,o-=c*this.view.offsetY,a=o-c*this.view.height}this.projectionMatrix.makeOrthographic(r,s,o,a,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);if(t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null)t.object.view=Object.assign({},this.view);return t}}class nl extends Fn{constructor(e,t){super(e,t);this.isAmbientLight=!0,this.type="AmbientLight"}}var To=-90,wo=1;class gs extends ct{constructor(e,t,i){super();this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let n=new ii(To,wo,e,t);n.layers=this.layers,this.add(n);let r=new ii(To,wo,e,t);r.layers=this.layers,this.add(r);let s=new ii(To,wo,e,t);s.layers=this.layers,this.add(s);let o=new ii(To,wo,e,t);o.layers=this.layers,this.add(o);let a=new ii(To,wo,e,t);a.layers=this.layers,this.add(a);let l=new ii(To,wo,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,n,r,s,o,a]=t;for(let l of t)this.remove(l);if(e===Mi)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),a.up.set(0,1,0),a.lookAt(0,0,-1);else if(e===On)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),a.up.set(0,-1,0),a.lookAt(0,0,-1);else throw Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){if(this.parent===null)this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:n}=this;if(this.coordinateSystem!==e.coordinateSystem)this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem();let[r,s,o,a,l,c]=this.children,h=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;let g=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let _=!1;if(e.isWebGLRenderer===!0)_=e.state.buffers.depth.getReversed();else _=e.reversedDepthBuffer;if(e.setRenderTarget(i,0,n),_&&e.autoClear===!1)e.clearDepth();if(e.render(t,r),e.setRenderTarget(i,1,n),_&&e.autoClear===!1)e.clearDepth();if(e.render(t,s),e.setRenderTarget(i,2,n),_&&e.autoClear===!1)e.clearDepth();if(e.render(t,o),e.setRenderTarget(i,3,n),_&&e.autoClear===!1)e.clearDepth();if(e.render(t,a),e.setRenderTarget(i,4,n),_&&e.autoClear===!1)e.clearDepth();if(e.render(t,l),i.texture.mipmapsAutoUpdate=g,e.setRenderTarget(i,5,n),_&&e.autoClear===!1)e.clearDepth();e.render(t,c),e.setRenderTarget(h,u,f),e.xr.enabled=m,i.texture.needsPMREMUpdate=!0}}class Pc extends ii{constructor(e=[]){super();this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}}class rl{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){if(this._document=e,e.hidden!==void 0)this._pageVisibilityHandler=b_.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1)}disconnect(){if(this._pageVisibilityHandler!==null)this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null;this._document=null}getDelta(){return this._delta/1000}getElapsed(){return this._elapsed/1000}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){if(this._pageVisibilityHandler!==null&&this._document.hidden===!0)this._delta=0;else this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta;return this}}function b_(){if(this._document.hidden===!1)this.reset()}var Qh="\\[\\]\\.:\\/",T_=new RegExp("["+Qh+"]","g"),jh="[^"+Qh+"]",w_="[^"+Qh.replace("\\.","")+"]",A_=/((?:WC+[\/:])*)/.source.replace("WC",jh),R_=/(WCOD+)?/.source.replace("WCOD",w_),C_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",jh),P_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",jh),I_=new RegExp("^"+A_+R_+C_+P_+"$"),L_=["material","materials","bones","map"];class Sd{constructor(e,t,i){let n=i||At.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,n)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,n=this._bindings[i];if(n!==void 0)n.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let n=this._targetGroup.nCachedObjects_,r=i.length;n!==r;++n)i[n].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}}class At{constructor(e,t,i){this.path=t,this.parsedPath=i||At.parseTrackName(t),this.node=At.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){if(!(e&&e.isAnimationObjectGroup))return new At(e,t,i);else return new At.Composite(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(T_,"")}static parseTrackName(e){let t=I_.exec(e);if(t===null)throw Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},n=i.nodeName&&i.nodeName.lastIndexOf(".");if(n!==void 0&&n!==-1){let r=i.nodeName.substring(n+1);if(L_.indexOf(r)!==-1)i.nodeName=i.nodeName.substring(0,n),i.objectName=r}if(i.propertyName===null||i.propertyName.length===0)throw Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let s=0;s<r.length;s++){let o=r[s];if(o.name===t||o.uuid===t)return o;let a=i(o.children);if(a)return a}return null},n=i(e.children);if(n)return n}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)e[t++]=i[n]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,{objectName:i,propertyName:n,propertyIndex:r}=t;if(!e)e=At.findNode(this.rootNode,t.nodeName),this.node=e;if(this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){xe("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let l=t.objectIndex;switch(i){case"materials":if(!e.material){Be("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Be("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Be("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let c=0;c<e.length;c++)if(e[c].name===l){l=c;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Be("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Be("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){Be("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(l!==void 0){if(e[l]===void 0){Be("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let s=e[n];if(s===void 0){let l=t.nodeName;Be("PropertyBinding: Trying to update property for track: "+l+"."+n+" but it wasn't found.",e);return}let o=this.Versioning.None;if(this.targetObject=e,e.isMaterial===!0)o=this.Versioning.NeedsUpdate;else if(e.isObject3D===!0)o=this.Versioning.MatrixWorldNeedsUpdate;let a=this.BindingType.Direct;if(r!==void 0){if(n==="morphTargetInfluences"){if(!e.geometry){Be("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Be("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}if(e.morphTargetDictionary[r]!==void 0)r=e.morphTargetDictionary[r]}a=this.BindingType.ArrayElement,this.resolvedProperty=s,this.propertyIndex=r}else if(s.fromArray!==void 0&&s.toArray!==void 0)a=this.BindingType.HasFromToArray,this.resolvedProperty=s;else if(Array.isArray(s))a=this.BindingType.EntireArray,this.resolvedProperty=s;else this.propertyName=n;this.getValue=this.GetterByBindingType[a],this.setValue=this.SetterByBindingTypeAndVersioning[a][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}At.Composite=Sd;At.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};At.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};At.prototype.GetterByBindingType=[At.prototype._getValue_direct,At.prototype._getValue_array,At.prototype._getValue_arrayElement,At.prototype._getValue_toArray];At.prototype.SetterByBindingTypeAndVersioning=[[At.prototype._setValue_direct,At.prototype._setValue_direct_setNeedsUpdate,At.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[At.prototype._setValue_array,At.prototype._setValue_array_setNeedsUpdate,At.prototype._setValue_array_setMatrixWorldNeedsUpdate],[At.prototype._setValue_arrayElement,At.prototype._setValue_arrayElement_setNeedsUpdate,At.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[At.prototype._setValue_fromArray,At.prototype._setValue_fromArray_setNeedsUpdate,At.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var LD=new Float32Array(1);var bd=new qe;class Ic{constructor(e,t,i=0,n=1/0){this.ray=new Gn(e,t),this.near=i,this.far=n,this.camera=null,this.layers=new xr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){if(t.isPerspectiveCamera)this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,0.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t;else if(t.isOrthographicCamera)this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t;else Be("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return bd.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(bd),this}intersectObject(e,t=!0,i=[]){return ef(e,this,i,t),i.sort(Ed),i}intersectObjects(e,t=!0,i=[]){for(let n=0,r=e.length;n<r;n++)ef(e[n],this,i,t);return i.sort(Ed),i}}function Ed(e,t){return e.distance-t.distance}function ef(e,t,i,n){let r=!0;if(e.layers.test(t.layers)){if(e.raycast(t,i)===!1)r=!1}if(r===!0&&n===!0){let s=e.children;for(let o=0,a=s.length;o<a;o++)ef(s[o],t,i,!0)}}class Lc{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,xe("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=performance.now();e=(t-this.oldTime)/1000,this.oldTime=t,this.elapsedTime+=e}return e}}class Td{static{this.prototype.isMatrix2=!0}constructor(e,t,i,n){if(this.elements=[1,0,0,1],e!==void 0)this.set(e,t,i,n)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,n){let r=this.elements;return r[0]=e,r[2]=t,r[1]=i,r[3]=n,this}}function tf(e,t,i,n){let r=F_(n);switch(i){case Tl:return e*t;case Ns:return e*t/r.components*r.byteLength;case Wr:return e*t/r.components*r.byteLength;case rn:return e*t*2/r.components*r.byteLength;case Us:return e*t*2/r.components*r.byteLength;case wl:return e*t*3/r.components*r.byteLength;case vi:return e*t*4/r.components*r.byteLength;case Fs:return e*t*4/r.components*r.byteLength;case Bs:case Os:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case zs:case Gs:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Ko:case Qo:return Math.max(e,16)*Math.max(t,8)/4;case Jo:case $o:return Math.max(e,8)*Math.max(t,8)/2;case jo:case ea:case ia:case na:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case ta:case Xr:case ra:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case sa:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case oa:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case aa:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case la:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case ca:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case ha:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case fa:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case ua:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case da:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case pa:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case ma:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case ga:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case xa:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case _a:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case ya:case va:case Ma:return Math.ceil(e/4)*Math.ceil(t/4)*16;case Sa:case ba:return Math.ceil(e/4)*Math.ceil(t/4)*8;case qr:case Ea:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw Error(`Unable to determine texture byte length for ${i} format.`)}function F_(e){switch(e){case ri:case Ml:return{byteLength:1,components:1};case jn:case Sl:case Yt:return{byteLength:2,components:1};case Ls:case Ds:return{byteLength:2,components:4};case ui:case Is:case si:return{byteLength:4,components:1};case bl:case El:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}if(typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Bo}}));if(typeof window<"u")if(window.__THREE__)xe("WARNING: Multiple instances of Three.js being imported.");else window.__THREE__=Bo;function Dc(){let e=null,t=!1,i=null,n=null;function r(s,o){n=e.requestAnimationFrame(r),i(s,o)}return{start:function(){if(t===!0)return;if(i===null)return;if(e===null)return;n=e.requestAnimationFrame(r),t=!0},stop:function(){if(e!==null)e.cancelAnimationFrame(n);t=!1},setAnimationLoop:function(s){i=s},setContext:function(s){e=s}}}function wd(e){let t=new WeakMap;function i(a,l){let{array:c,usage:h}=a,u=c.byteLength,f=e.createBuffer();e.bindBuffer(l,f),e.bufferData(l,c,h),a.onUploadCallback();let m;if(c instanceof Float32Array)m=e.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)m=e.HALF_FLOAT;else if(c instanceof Uint16Array)if(a.isFloat16BufferAttribute)m=e.HALF_FLOAT;else m=e.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=e.SHORT;else if(c instanceof Uint32Array)m=e.UNSIGNED_INT;else if(c instanceof Int32Array)m=e.INT;else if(c instanceof Int8Array)m=e.BYTE;else if(c instanceof Uint8Array)m=e.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=e.UNSIGNED_BYTE;else throw Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){let{array:h,updateRanges:u}=l;if(e.bindBuffer(c,a),u.length===0)e.bufferSubData(c,0,h);else{u.sort((m,g)=>m.start-g.start);let f=0;for(let m=1;m<u.length;m++){let g=u[f],_=u[m];if(_.start<=g.start+g.count+1)g.count=Math.max(g.count,_.start+_.count-g.start);else++f,u[f]=_}u.length=f+1;for(let m=0,g=u.length;m<g;m++){let _=u[m];e.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){if(a.isInterleavedBufferAttribute)a=a.data;return t.get(a)}function s(a){if(a.isInterleavedBufferAttribute)a=a.data;let l=t.get(a);if(l)e.deleteBuffer(l.buffer),t.delete(a)}function o(a,l){if(a.isInterleavedBufferAttribute)a=a.data;if(a.isGLBufferAttribute){let h=t.get(a);if(!h||h.version<a.version)t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,i(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var Ad=`
#ifdef USE_ALPHAHASH

	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;

#endif
`;var Rd=`
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
`;var Cd=`
#ifdef USE_ALPHAMAP

	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;

#endif
`;var Pd=`
#ifdef USE_ALPHAMAP

	uniform sampler2D alphaMap;

#endif
`;var Id=`
#ifdef USE_ALPHATEST

	#ifdef ALPHA_TO_COVERAGE

	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;

	#else

	if ( diffuseColor.a < alphaTest ) discard;

	#endif

#endif
`;var Ld=`
#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif
`;var Dd=`
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
`;var Nd=`
#ifdef USE_AOMAP

	uniform sampler2D aoMap;
	uniform float aoMapIntensity;

#endif
`;var Ud=`
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
`;var Fd=`
#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif
`;var Bd=`
vec3 transformed = vec3( position );

#ifdef USE_ALPHAHASH

	vPosition = vec3( position );

#endif
`;var Od=`
vec3 objectNormal = vec3( normal );

#ifdef USE_TANGENT

	vec3 objectTangent = vec3( tangent.xyz );

#endif
`;var zd=`

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

`;var Gd=`

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

`;var Hd=`
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
`;var kd=`
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
`;var Vd=`
#if NUM_CLIPPING_PLANES > 0

	varying vec3 vClipPosition;

	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];

#endif
`;var Wd=`
#if NUM_CLIPPING_PLANES > 0

	varying vec3 vClipPosition;

#endif
`;var Xd=`
#if NUM_CLIPPING_PLANES > 0

	vClipPosition = - mvPosition.xyz;

#endif
`;var qd=`
#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )

	diffuseColor *= vColor;

#endif
`;var Yd=`
#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )

	varying vec4 vColor;

#endif
`;var Zd=`
#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )

	varying vec4 vColor;

#endif
`;var Jd=`
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
`;var Kd=`
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
`;var $d=`

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
`;var Qd=`
#ifdef USE_DISPLACEMENTMAP

	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;

#endif
`;var jd=`
#ifdef USE_DISPLACEMENTMAP

	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );

#endif
`;var ep=`
#ifdef USE_EMISSIVEMAP

	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );

	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE

		// use inline sRGB decode until browsers properly support SRGB8_ALPHA8 with video textures (#26516)

		emissiveColor = sRGBTransferEOTF( emissiveColor );

	#endif

	totalEmissiveRadiance *= emissiveColor.rgb;

#endif
`;var tp=`
#ifdef USE_EMISSIVEMAP

	uniform sampler2D emissiveMap;

#endif
`;var ip=`
gl_FragColor = linearToOutputTexel( gl_FragColor );
`;var np=`

vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}

vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}

vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}

`;var rp=`
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
`;var sp=`
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
`;var op=`
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
`;var ap=`
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
`;var lp=`
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
`;var cp=`
#ifdef USE_FOG

	vFogDepth = - mvPosition.z;

#endif
`;var hp=`
#ifdef USE_FOG

	varying float vFogDepth;

#endif
`;var fp=`
#ifdef USE_FOG

	#ifdef FOG_EXP2

		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );

	#else

		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );

	#endif

	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );

#endif
`;var up=`
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
`;var dp=`

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
`;var pp=`
#ifdef USE_LIGHTMAP

	uniform sampler2D lightMap;
	uniform float lightMapIntensity;

#endif
`;var mp=`
LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;
`;var gp=`
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
`;var xp=`
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
`;var _p=`
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
`;var yp=`
ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;
`;var vp=`
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
`;var Mp=`
BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;
`;var Sp=`
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
`;var bp=`
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
`;var Ep=`

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
`;var Tp=`
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
`;var wp=`
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
`;var Ap=`
#if defined( RE_IndirectDiffuse )

	#if defined( LAMBERT ) || defined( PHONG )

		irradiance += iblIrradiance;

	#endif

	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );

#endif

#if defined( RE_IndirectSpecular )

	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );

#endif
`;var Rp=`
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
`;var Cp=`
#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )

	// Doing a strict comparison with == 1.0 can cause noise artifacts
	// on some platforms. See issue #17623.
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;

#endif
`;var Pp=`
#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )

	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;

#endif
`;var Ip=`
#ifdef USE_LOGARITHMIC_DEPTH_BUFFER

	varying float vFragDepth;
	varying float vIsPerspective;

#endif
`;var Lp=`
#ifdef USE_LOGARITHMIC_DEPTH_BUFFER

	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );

#endif
`;var Dp=`
#ifdef USE_MAP

	vec4 sampledDiffuseColor = texture2D( map, vMapUv );

	#ifdef DECODE_VIDEO_TEXTURE

		// use inline sRGB decode until browsers properly support SRGB8_ALPHA8 with video textures (#26516)

		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );

	#endif

	diffuseColor *= sampledDiffuseColor;

#endif
`;var Np=`
#ifdef USE_MAP

	uniform sampler2D map;

#endif
`;var Up=`
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
`;var Fp=`
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
`;var Bp=`
float metalnessFactor = metalness;

#ifdef USE_METALNESSMAP

	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );

	// reads channel B, compatible with a combined OcclusionRoughnessMetallic (RGB) texture
	metalnessFactor *= texelMetalness.b;

#endif
`;var Op=`
#ifdef USE_METALNESSMAP

	uniform sampler2D metalnessMap;

#endif
`;var zp=`
#ifdef USE_INSTANCING_MORPH

	float morphTargetInfluences[ MORPHTARGETS_COUNT ];

	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;

	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {

		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;

	}
#endif
`;var Gp=`
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
`;var Hp=`
#ifdef USE_MORPHNORMALS

	// morphTargetBaseInfluence is set based on BufferGeometry.morphTargetsRelative value:
	// When morphTargetsRelative is false, this is set to 1 - sum(influences); this results in normal = sum((target - base) * influence)
	// When morphTargetsRelative is true, this is set to 1; as a result, all morph targets are simply added to the base after weighting
	objectNormal *= morphTargetBaseInfluence;

	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {

		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];

	}

#endif
`;var kp=`
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
`;var Vp=`
#ifdef USE_MORPHTARGETS

	// morphTargetBaseInfluence is set based on BufferGeometry.morphTargetsRelative value:
	// When morphTargetsRelative is false, this is set to 1 - sum(influences); this results in position = sum((target - base) * influence)
	// When morphTargetsRelative is true, this is set to 1; as a result, all morph targets are simply added to the base after weighting
	transformed *= morphTargetBaseInfluence;

	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {

		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];

	}

#endif
`;var Wp=`
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

`;var Xp=`

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
`;var qp=`
#ifndef FLAT_SHADED

	varying vec3 vNormal;

	#ifdef USE_TANGENT

		varying vec3 vTangent;
		varying vec3 vBitangent;

	#endif

#endif
`;var Yp=`
#ifndef FLAT_SHADED

	varying vec3 vNormal;

	#ifdef USE_TANGENT

		varying vec3 vTangent;
		varying vec3 vBitangent;

	#endif

#endif
`;var Zp=`
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
`;var Jp=`
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
`;var Kp=`
#ifdef USE_CLEARCOAT

	vec3 clearcoatNormal = nonPerturbedNormal;

#endif
`;var $p=`
#ifdef USE_CLEARCOAT_NORMALMAP

	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;

	clearcoatNormal = normalize( tbn2 * clearcoatMapN );

#endif
`;var Qp=`

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
`;var jp=`

#ifdef USE_IRIDESCENCEMAP

	uniform sampler2D iridescenceMap;

#endif

#ifdef USE_IRIDESCENCE_THICKNESSMAP

	uniform sampler2D iridescenceThicknessMap;

#endif
`;var em=`
#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif

#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif

gl_FragColor = vec4( outgoingLight, diffuseColor.a );
`;var tm=`
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
`;var im=`
#ifdef PREMULTIPLIED_ALPHA

	gl_FragColor.rgb *= gl_FragColor.a;

#endif
`;var nm=`
vec4 mvPosition = vec4( transformed, 1.0 );

#ifdef USE_BATCHING

	mvPosition = batchingMatrix * mvPosition;

#endif

#ifdef USE_INSTANCING

	mvPosition = instanceMatrix * mvPosition;

#endif

mvPosition = modelViewMatrix * mvPosition;

gl_Position = projectionMatrix * mvPosition;
`;var rm=`
#ifdef DITHERING

	gl_FragColor.rgb = dithering( gl_FragColor.rgb );

#endif
`;var sm=`
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
`;var om=`
float roughnessFactor = roughness;

#ifdef USE_ROUGHNESSMAP

	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );

	// reads channel G, compatible with a combined OcclusionRoughnessMetallic (RGB) texture
	roughnessFactor *= texelRoughness.g;

#endif
`;var am=`
#ifdef USE_ROUGHNESSMAP

	uniform sampler2D roughnessMap;

#endif
`;var lm=`
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
`;var cm=`

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
`;var hm=`

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


`;var fm=`
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
`;var um=`
#ifdef USE_SKINNING

	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );

#endif
`;var dm=`
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
`;var pm=`
#ifdef USE_SKINNING

	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );

	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;

	transformed = ( bindMatrixInverse * skinned ).xyz;

#endif
`;var mm=`
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
`;var gm=`
float specularStrength;

#ifdef USE_SPECULARMAP

	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;

#else

	specularStrength = 1.0;

#endif
`;var xm=`
#ifdef USE_SPECULARMAP

	uniform sampler2D specularMap;

#endif
`;var _m=`
#if defined( TONE_MAPPING )

	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );

#endif
`;var ym=`
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
`;var vm=`
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
`;var Mm=`
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
`;var Sm=`
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
`;var bm=`
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
`;var Em=`
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
`;var Tm=`
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
`;var wm=`
varying vec2 vUv;
uniform mat3 uvTransform;

void main() {

	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;

	gl_Position = vec4( position.xy, 1.0, 1.0 );

}
`,Am=`
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
`;var Rm=`
varying vec3 vWorldDirection;

#include <common>

void main() {

	vWorldDirection = transformDirection( position, modelMatrix );

	#include <begin_vertex>
	#include <project_vertex>

	gl_Position.z = gl_Position.w; // set z to camera.far

}
`,Cm=`

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
`;var Pm=`
varying vec3 vWorldDirection;

#include <common>

void main() {

	vWorldDirection = transformDirection( position, modelMatrix );

	#include <begin_vertex>
	#include <project_vertex>

	gl_Position.z = gl_Position.w; // set z to camera.far

}
`,Im=`
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
`;var Lm=`
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
`,Dm=`
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
`;var Nm=`
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
`,Um=`
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
`;var Fm=`
varying vec3 vWorldDirection;

#include <common>

void main() {

	vWorldDirection = transformDirection( position, modelMatrix );

	#include <begin_vertex>
	#include <project_vertex>

}
`,Bm=`
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
`;var Om=`
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
`,zm=`
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
`;var Gm=`
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
`,Hm=`
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
`;var km=`
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
`,Vm=`
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
`;var Wm=`
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
`,Xm=`
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
`;var qm=`
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
`,Ym=`
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
`;var Zm=`
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
`,Jm=`
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
`;var Km=`
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
`,$m=`
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
`;var Qm=`
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
`,jm=`
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
`;var e0=`
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
`,t0=`
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
`;var i0=`
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
`,n0=`
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
`;var r0=`
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
`,s0=`
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
`;var lt={alphahash_fragment:Ad,alphahash_pars_fragment:Rd,alphamap_fragment:Cd,alphamap_pars_fragment:Pd,alphatest_fragment:Id,alphatest_pars_fragment:Ld,aomap_fragment:Dd,aomap_pars_fragment:Nd,batching_pars_vertex:Ud,batching_vertex:Fd,begin_vertex:Bd,beginnormal_vertex:Od,bsdfs:zd,iridescence_fragment:Gd,bumpmap_pars_fragment:Hd,clipping_planes_fragment:kd,clipping_planes_pars_fragment:Vd,clipping_planes_pars_vertex:Wd,clipping_planes_vertex:Xd,color_fragment:qd,color_pars_fragment:Yd,color_pars_vertex:Zd,color_vertex:Jd,common:Kd,defaultnormal_vertex:$d,displacementmap_pars_vertex:Qd,displacementmap_vertex:jd,emissivemap_fragment:ep,emissivemap_pars_fragment:tp,colorspace_fragment:ip,colorspace_pars_fragment:np,envmap_fragment:rp,envmap_common_pars_fragment:sp,envmap_pars_fragment:op,envmap_pars_vertex:ap,envmap_physical_pars_fragment:_p,envmap_vertex:lp,fog_vertex:cp,fog_pars_vertex:hp,fog_fragment:fp,fog_pars_fragment:up,gradientmap_pars_fragment:dp,lightmap_pars_fragment:pp,lights_lambert_fragment:mp,lights_lambert_pars_fragment:gp,lights_pars_begin:xp,lights_toon_fragment:yp,lights_toon_pars_fragment:vp,lights_phong_fragment:Mp,lights_phong_pars_fragment:Sp,lights_physical_fragment:bp,lights_physical_pars_fragment:Ep,lights_fragment_begin:Tp,lights_fragment_maps:wp,lights_fragment_end:Ap,lightprobes_pars_fragment:Rp,logdepthbuf_fragment:Cp,logdepthbuf_pars_fragment:Pp,logdepthbuf_pars_vertex:Ip,logdepthbuf_vertex:Lp,map_fragment:Dp,map_pars_fragment:Np,map_particle_fragment:Up,map_particle_pars_fragment:Fp,metalnessmap_fragment:Bp,metalnessmap_pars_fragment:Op,morphinstance_vertex:zp,morphcolor_vertex:Gp,morphnormal_vertex:Hp,morphtarget_pars_vertex:kp,morphtarget_vertex:Vp,normal_fragment_begin:Wp,normal_fragment_maps:Xp,normal_pars_fragment:qp,normal_pars_vertex:Yp,normal_vertex:Zp,normalmap_pars_fragment:Jp,clearcoat_normal_fragment_begin:Kp,clearcoat_normal_fragment_maps:$p,clearcoat_pars_fragment:Qp,iridescence_pars_fragment:jp,opaque_fragment:em,packing:tm,premultiplied_alpha_fragment:im,project_vertex:nm,dithering_fragment:rm,dithering_pars_fragment:sm,roughnessmap_fragment:om,roughnessmap_pars_fragment:am,shadowmap_pars_fragment:lm,shadowmap_pars_vertex:cm,shadowmap_vertex:hm,shadowmask_pars_fragment:fm,skinbase_vertex:um,skinning_pars_vertex:dm,skinning_vertex:pm,skinnormal_vertex:mm,specularmap_fragment:gm,specularmap_pars_fragment:xm,tonemapping_fragment:_m,tonemapping_pars_fragment:ym,transmission_fragment:vm,transmission_pars_fragment:Mm,uv_pars_fragment:Sm,uv_pars_vertex:bm,uv_vertex:Em,worldpos_vertex:Tm,background_vert:wm,background_frag:Am,backgroundCube_vert:Rm,backgroundCube_frag:Cm,cube_vert:Pm,cube_frag:Im,depth_vert:Lm,depth_frag:Dm,distance_vert:Nm,distance_frag:Um,equirect_vert:Fm,equirect_frag:Bm,linedashed_vert:Om,linedashed_frag:zm,meshbasic_vert:Gm,meshbasic_frag:Hm,meshlambert_vert:km,meshlambert_frag:Vm,meshmatcap_vert:Wm,meshmatcap_frag:Xm,meshnormal_vert:qm,meshnormal_frag:Ym,meshphong_vert:Zm,meshphong_frag:Jm,meshphysical_vert:Km,meshphysical_frag:$m,meshtoon_vert:Qm,meshtoon_frag:jm,points_vert:e0,points_frag:t0,shadow_vert:i0,shadow_frag:n0,sprite_vert:r0,sprite_frag:s0};var Ce={common:{diffuse:{value:new ue(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ke}},envmap:{envMap:{value:null},envMapRotation:{value:new Ke},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:0.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ke},normalScale:{value:new W(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:0.00025},fogNear:{value:1},fogFar:{value:2000},fogColor:{value:new ue(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new ue(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0},uvTransform:{value:new Ke}},sprite:{diffuse:{value:new ue(16777215)},opacity:{value:1},center:{value:new W(0.5,0.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}}};var fn={basic:{uniforms:Gi([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.fog]),vertexShader:lt.meshbasic_vert,fragmentShader:lt.meshbasic_frag},lambert:{uniforms:Gi([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new ue(0)},envMapIntensity:{value:1}}]),vertexShader:lt.meshlambert_vert,fragmentShader:lt.meshlambert_frag},phong:{uniforms:Gi([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new ue(0)},specular:{value:new ue(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:lt.meshphong_vert,fragmentShader:lt.meshphong_frag},standard:{uniforms:Gi([Ce.common,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.roughnessmap,Ce.metalnessmap,Ce.fog,Ce.lights,{emissive:{value:new ue(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:lt.meshphysical_vert,fragmentShader:lt.meshphysical_frag},toon:{uniforms:Gi([Ce.common,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.gradientmap,Ce.fog,Ce.lights,{emissive:{value:new ue(0)}}]),vertexShader:lt.meshtoon_vert,fragmentShader:lt.meshtoon_frag},matcap:{uniforms:Gi([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,{matcap:{value:null}}]),vertexShader:lt.meshmatcap_vert,fragmentShader:lt.meshmatcap_frag},points:{uniforms:Gi([Ce.points,Ce.fog]),vertexShader:lt.points_vert,fragmentShader:lt.points_frag},dashed:{uniforms:Gi([Ce.common,Ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:lt.linedashed_vert,fragmentShader:lt.linedashed_frag},depth:{uniforms:Gi([Ce.common,Ce.displacementmap]),vertexShader:lt.depth_vert,fragmentShader:lt.depth_frag},normal:{uniforms:Gi([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,{opacity:{value:1}}]),vertexShader:lt.meshnormal_vert,fragmentShader:lt.meshnormal_frag},sprite:{uniforms:Gi([Ce.sprite,Ce.fog]),vertexShader:lt.sprite_vert,fragmentShader:lt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:lt.background_vert,fragmentShader:lt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ke}},vertexShader:lt.backgroundCube_vert,fragmentShader:lt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:lt.cube_vert,fragmentShader:lt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:lt.equirect_vert,fragmentShader:lt.equirect_frag},distance:{uniforms:Gi([Ce.common,Ce.displacementmap,{referencePosition:{value:new A},nearDistance:{value:1},farDistance:{value:1000}}]),vertexShader:lt.distance_vert,fragmentShader:lt.distance_frag},shadow:{uniforms:Gi([Ce.lights,Ce.fog,{color:{value:new ue(0)},opacity:{value:1}}]),vertexShader:lt.shadow_vert,fragmentShader:lt.shadow_frag}};fn.physical={uniforms:Gi([fn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ke},clearcoatNormalScale:{value:new W(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ke},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Ke},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ke},sheen:{value:0},sheenColor:{value:new ue(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ke},transmissionSamplerSize:{value:new W},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ke},attenuationDistance:{value:0},attenuationColor:{value:new ue(0)},specularColor:{value:new ue(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ke},anisotropyVector:{value:new W},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ke}}]),vertexShader:lt.meshphysical_vert,fragmentShader:lt.meshphysical_frag};var Nc={r:0,b:0,g:0},ty=new qe,o0=new Ke;o0.set(-1,0,0,0,1,0,0,0,1);function a0(e,t,i,n,r,s){let o=new ue(0),a=r===!0?0:1,l,c,h=null,u=0,f=null;function m(y){let v=y.isScene===!0?y.background:null;if(v&&v.isTexture){let M=y.backgroundBlurriness>0;v=t.get(v,M)}return v}function g(y){let v=!1,M=m(y);if(M===null)d(o,a);else if(M&&M.isColor)d(M,1),v=!0;let b=e.xr.getEnvironmentBlendMode();if(b==="additive")i.buffers.color.setClear(0,0,0,1,s);else if(b==="alpha-blend")i.buffers.color.setClear(0,0,0,0,s);if(e.autoClear||v)i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil)}function _(y,v){let M=m(v);if(M&&M.isCubeTexture){if(c===void 0)c=new ne(new zt(1,1,1),new Zt({name:"BackgroundCubeMaterial",uniforms:or(fn.backgroundCube.uniforms),vertexShader:fn.backgroundCube.vertexShader,fragmentShader:fn.backgroundCube.fragmentShader,side:Bt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(b,w,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c);if(c.material.uniforms.envMap.value=M,c.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(ty.makeRotationFromEuler(v.backgroundRotation)).transpose(),M.isRenderTargetTexture===!1)c.material.uniforms.backgroundRotation.value.premultiply(o0);if(c.material.toneMapped=it.getTransfer(M.colorSpace)!==gt,h!==M||u!==M.version||f!==e.toneMapping)c.material.needsUpdate=!0,h=M,u=M.version,f=e.toneMapping;c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null)}else if(M&&M.isTexture){if(l===void 0)l=new ne(new Pt(2,2),new Zt({name:"BackgroundMaterial",uniforms:or(fn.background.uniforms),vertexShader:fn.background.vertexShader,fragmentShader:fn.background.fragmentShader,side:dn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l);if(l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.toneMapped=it.getTransfer(M.colorSpace)!==gt,M.matrixAutoUpdate===!0)M.updateMatrix();if(l.material.uniforms.uvTransform.value.copy(M.matrix),h!==M||u!==M.version||f!==e.toneMapping)l.material.needsUpdate=!0,h=M,u=M.version,f=e.toneMapping;l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null)}}function d(y,v){y.getRGB(Nc,yc(e)),i.buffers.color.setClear(Nc.r,Nc.g,Nc.b,v,s)}function p(){if(c!==void 0)c.geometry.dispose(),c.material.dispose(),c=void 0;if(l!==void 0)l.geometry.dispose(),l.material.dispose(),l=void 0}return{getClearColor:function(){return o},setClearColor:function(y,v=1){o.set(y),a=v,d(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(y){a=y,d(o,a)},render:g,addToRenderList:_,dispose:p}}function l0(e,t){let i=e.getParameter(e.MAX_VERTEX_ATTRIBS),n={},r=f(null),s=r,o=!1;function a(I,O,te,P,Z){let L=!1,N=u(I,P,te,O);if(s!==N)s=N,c(s.object);if(L=m(I,P,te,Z),L)g(I,P,te,Z);if(Z!==null)t.update(Z,e.ELEMENT_ARRAY_BUFFER);if(L||o){if(o=!1,M(I,O,te,P),Z!==null)e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(Z).buffer)}}function l(){return e.createVertexArray()}function c(I){return e.bindVertexArray(I)}function h(I){return e.deleteVertexArray(I)}function u(I,O,te,P){let Z=P.wireframe===!0,L=n[O.id];if(L===void 0)L={},n[O.id]=L;let N=I.isInstancedMesh===!0?I.id:0,ee=L[N];if(ee===void 0)ee={},L[N]=ee;let G=ee[te.id];if(G===void 0)G={},ee[te.id]=G;let Y=G[Z];if(Y===void 0)Y=f(l()),G[Z]=Y;return Y}function f(I){let O=[],te=[],P=[];for(let Z=0;Z<i;Z++)O[Z]=0,te[Z]=0,P[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:te,attributeDivisors:P,object:I,attributes:{},index:null}}function m(I,O,te,P){let Z=s.attributes,L=O.attributes,N=0,ee=te.getAttributes();for(let G in ee)if(ee[G].location>=0){let K=Z[G],pe=L[G];if(pe===void 0){if(G==="instanceMatrix"&&I.instanceMatrix)pe=I.instanceMatrix;if(G==="instanceColor"&&I.instanceColor)pe=I.instanceColor}if(K===void 0)return!0;if(K.attribute!==pe)return!0;if(pe&&K.data!==pe.data)return!0;N++}if(s.attributesNum!==N)return!0;if(s.index!==P)return!0;return!1}function g(I,O,te,P){let Z={},L=O.attributes,N=0,ee=te.getAttributes();for(let G in ee)if(ee[G].location>=0){let K=L[G];if(K===void 0){if(G==="instanceMatrix"&&I.instanceMatrix)K=I.instanceMatrix;if(G==="instanceColor"&&I.instanceColor)K=I.instanceColor}let pe={};if(pe.attribute=K,K&&K.data)pe.data=K.data;Z[G]=pe,N++}s.attributes=Z,s.attributesNum=N,s.index=P}function _(){let I=s.newAttributes;for(let O=0,te=I.length;O<te;O++)I[O]=0}function d(I){p(I,0)}function p(I,O){let te=s.newAttributes,P=s.enabledAttributes,Z=s.attributeDivisors;if(te[I]=1,P[I]===0)e.enableVertexAttribArray(I),P[I]=1;if(Z[I]!==O)e.vertexAttribDivisor(I,O),Z[I]=O}function y(){let I=s.newAttributes,O=s.enabledAttributes;for(let te=0,P=O.length;te<P;te++)if(O[te]!==I[te])e.disableVertexAttribArray(te),O[te]=0}function v(I,O,te,P,Z,L,N){if(N===!0)e.vertexAttribIPointer(I,O,te,Z,L);else e.vertexAttribPointer(I,O,te,P,Z,L)}function M(I,O,te,P){_();let Z=P.attributes,L=te.getAttributes(),N=O.defaultAttributeValues;for(let ee in L){let G=L[ee];if(G.location>=0){let Y=Z[ee];if(Y===void 0){if(ee==="instanceMatrix"&&I.instanceMatrix)Y=I.instanceMatrix;if(ee==="instanceColor"&&I.instanceColor)Y=I.instanceColor}if(Y!==void 0){let K=Y.normalized,pe=Y.itemSize,X=t.get(Y);if(X===void 0)continue;let{buffer:ie,type:Me,bytesPerElement:Se}=X,ze=Me===e.INT||Me===e.UNSIGNED_INT||Y.gpuType===Is;if(Y.isInterleavedBufferAttribute){let we=Y.data,pt=we.isInterleavedBuffer===!0?we.stride:we.itemSize,Ne=Y.offset;if(we.isInstancedInterleavedBuffer||we.isInstancedBufferAttribute){for(let Ue=0;Ue<G.locationSize;Ue++)p(G.location+Ue,we.meshPerAttribute);if(I.isInstancedMesh!==!0&&P._maxInstanceCount===void 0)P._maxInstanceCount=we.meshPerAttribute*we.count}else for(let Ue=0;Ue<G.locationSize;Ue++)d(G.location+Ue);e.bindBuffer(e.ARRAY_BUFFER,ie);for(let Ue=0;Ue<G.locationSize;Ue++)v(G.location+Ue,pe/G.locationSize,Me,K,pt*Se,(Ne+pe/G.locationSize*Ue)*Se,ze)}else{if(Y.isInstancedBufferAttribute){for(let we=0;we<G.locationSize;we++)p(G.location+we,Y.meshPerAttribute);if(I.isInstancedMesh!==!0&&P._maxInstanceCount===void 0)P._maxInstanceCount=Y.meshPerAttribute*Y.count}else for(let we=0;we<G.locationSize;we++)d(G.location+we);e.bindBuffer(e.ARRAY_BUFFER,ie);for(let we=0;we<G.locationSize;we++)v(G.location+we,pe/G.locationSize,Me,K,pe*Se,pe/G.locationSize*we*Se,ze)}}else if(N!==void 0){let K=N[ee];if(K!==void 0)switch(K.length){case 2:e.vertexAttrib2fv(G.location,K);break;case 3:e.vertexAttrib3fv(G.location,K);break;case 4:e.vertexAttrib4fv(G.location,K);break;default:e.vertexAttrib1fv(G.location,K)}}}}y()}function b(){R();for(let I in n){let O=n[I];for(let te in O){let P=O[te];for(let Z in P){let L=P[Z];for(let N in L)h(L[N].object),delete L[N];delete P[Z]}}delete n[I]}}function w(I){if(n[I.id]===void 0)return;let O=n[I.id];for(let te in O){let P=O[te];for(let Z in P){let L=P[Z];for(let N in L)h(L[N].object),delete L[N];delete P[Z]}}delete n[I.id]}function x(I){for(let O in n){let te=n[O];for(let P in te){let Z=te[P];if(Z[I.id]===void 0)continue;let L=Z[I.id];for(let N in L)h(L[N].object),delete L[N];delete Z[I.id]}}}function S(I){for(let O in n){let te=n[O],P=I.isInstancedMesh===!0?I.id:0,Z=te[P];if(Z===void 0)continue;for(let L in Z){let N=Z[L];for(let ee in N)h(N[ee].object),delete N[ee];delete Z[L]}if(delete te[P],Object.keys(te).length===0)delete n[O]}}function R(){if(U(),o=!0,s===r)return;s=r,c(s.object)}function U(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:R,resetDefaultState:U,dispose:b,releaseStatesOfGeometry:w,releaseStatesOfObject:S,releaseStatesOfProgram:x,initAttributes:_,enableAttribute:d,disableUnusedAttributes:y}}function c0(e,t,i){let n;function r(l){n=l}function s(l,c){e.drawArrays(n,l,c),i.update(c,n,1)}function o(l,c,h){if(h===0)return;e.drawArraysInstanced(n,l,c,h),i.update(c,n,h)}function a(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let f=0;for(let m=0;m<h;m++)f+=c[m];i.update(f,n,1)}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a}function h0(e,t,i,n){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){let x=t.get("EXT_texture_filter_anisotropic");r=e.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(x){if(x!==vi&&n.convert(x)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))return!1;return!0}function a(x){let S=x===Yt&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));if(x!==ri&&x!==si&&!S&&n.convert(x)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))return!1;return!0}function l(x){if(x==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";x="mediump"}if(x==="mediump"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0)return"mediump"}return"lowp"}let c=i.precision!==void 0?i.precision:"highp",h=l(c);if(h!==c)xe("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h;let u=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),f=i.logarithmicDepthBuffer===!0&&u===!1;if(i.reversedDepthBuffer===!0&&u===!1)xe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");if(i.logarithmicDepthBuffer===!0&&u===!0)xe("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let m=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),g=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=e.getParameter(e.MAX_TEXTURE_SIZE),d=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),p=e.getParameter(e.MAX_VERTEX_ATTRIBS),y=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),v=e.getParameter(e.MAX_VARYING_VECTORS),M=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),b=e.getParameter(e.MAX_SAMPLES),w=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:u,maxTextures:m,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:d,maxAttributes:p,maxVertexUniforms:y,maxVaryings:v,maxFragmentUniforms:M,maxSamples:b,samples:w}}function f0(e){let t=this,i=null,n=0,r=!1,s=!1,o=new an,a=new Ke,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let m=u.length!==0||f||n!==0||r;return r=f,n=u.length,m},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,f){i=h(u,f,0)},this.setState=function(u,f,m){let{clippingPlanes:g,clipIntersection:_,clipShadows:d}=u,p=e.get(u);if(!r||g===null||g.length===0||s&&!d)if(s)h(null);else c();else{let y=s?0:n,v=y*4,M=p.clippingState||null;l.value=M,M=h(g,f,v,m);for(let b=0;b!==v;++b)M[b]=i[b];p.clippingState=M,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function c(){if(l.value!==i)l.value=i,l.needsUpdate=n>0;t.numPlanes=n,t.numIntersection=0}function h(u,f,m,g){let _=u!==null?u.length:0,d=null;if(_!==0){if(d=l.value,g!==!0||d===null){let p=m+_*4,y=f.matrixWorldInverse;if(a.getNormalMatrix(y),d===null||d.length<p)d=new Float32Array(p);for(let v=0,M=m;v!==_;++v,M+=4)o.copy(u[v]).applyMatrix4(y,a),o.normal.toArray(d,M),d[M+3]=o.constant}l.value=d,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,d}}class Ir extends Wt{constructor(e=1,t={}){super(e,e,t);this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},n=[i,i,i,i,i,i];this.texture=new br(n),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},n=new zt(5,5,5),r=new Zt({name:"CubemapFromEquirect",uniforms:or(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Bt,blending:pn});r.uniforms.tEquirect.value=t;let s=new ne(n,r),o=t.minFilter;if(t.minFilter===Vi)t.minFilter=qt;return new gs(1,10,this).update(e,s),t.minFilter=o,s.geometry.dispose(),s.material.dispose(),this}clear(e,t=!0,i=!0,n=!0){let r=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,i,n);e.setRenderTarget(r)}}var u0=256,iy=3,ny=20,g0=256,x0=16,ry=3,sy=new A,oy=new ue;class Lr{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new gs(1,10,null),this._boxMesh=new ne(new zt(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,i=0.1,n=100,r={}){let{size:s=256,position:o=sy}=r,a=this._renderer;this._setSize(s);let l=this._allocateTarget(),c=this._getSourceTarget(!0);if(t>0)c.texture.mipmapsAutoUpdate=!1;let{autoClear:h,autoClearColor:u,autoClearDepth:f,autoClearStencil:m}=a,g=e.background;if(a.autoClear=!0,a.autoClearColor=!0,a.autoClearDepth=!0,a.autoClearStencil=!0,g===null)e.background=a.getClearColor(oy);let _=new gs(i,n,c);if(_.position.copy(o),_.update(a,e),a.autoClear=h,a.autoClearColor=u,a.autoClearDepth=f,a.autoClearStencil=m,e.background=g,t>0)c.texture.mipmapsAutoUpdate=!0,this._blur(l,t);return this._applyPMREM(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){if(this._cubemapMaterial===null)this._cubemapMaterial=m0(),this._compileMaterial(this._cubemapMaterial)}compileEquirectangularShader(){if(this._equirectMaterial===null)this._equirectMaterial=p0(),this._compileMaterial(this._equirectMaterial)}dispose(){if(this._sourceTarget!==null)this._sourceTarget.dispose();if(this._cubemapMaterial!==null)this._cubemapMaterial.dispose();if(this._equirectMaterial!==null)this._equirectMaterial.dispose();if(this._blurMaterial!==null)this._blurMaterial.dispose();if(this._ggxMaterial!==null)this._ggxMaterial.dispose();if(this._integrationMaterial!==null)this._integrationMaterial.dispose();this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(u0,Su(e))}_fromTexture(e,t){if(e.mapping===mn||e.mapping===$n)this._setSize(e.image.length===0?u0:e.image[0].width||e.image[0].image.width);else this._setSize(e.image.width/4);let i=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(i),i}_allocateTarget(){let e=this._cubeSize,t=d0(e,!1,!1),i=Math.log2(e)-iy;for(let n=0;n<=i;n++)t.texture.mipmaps.push({width:e>>n,height:e>>n});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,i=this._sourceTarget;if(i===null||i.width!==t||e&&i.depthBuffer===!1){if(i!==null)i.dispose();this._sourceTarget=d0(t,!0,e)}return this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,i){let n=this._boxMesh,r=this._cubeCamera;n.material=i,r.renderTarget=e,r.activeMipmapLevel=t;let s=e.width>>t;e.viewport.set(0,0,s,s),r.update(this._renderer,n),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;if(e.mapping===mn||e.mapping===$n){if(this._cubemapMaterial===null)this._cubemapMaterial=m0();t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1}else{if(this._equirectMaterial===null)this._equirectMaterial=p0();t=this._equirectMaterial}t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){if(this._ggxMaterial===null)this._ggxMaterial=ay(),this._integrationMaterial=ly();let t=this._cubeSize,i=e.texture.mipmaps.length-1,n=this._ggxMaterial.uniforms;n.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/x0);for(let s=0;s<=i;s++){let o=Lr.lodToRoughness(s,i);if(s>i-ry)r.roughness.value=o,this._renderCube(e,s,this._integrationMaterial);else{let a=o>0?Math.log2(t)+0.5*Math.log2(6/(g0*Math.pow(o,4)))+0.5:0;n.roughness.value=o,n.lodBias.value=a,this._renderCube(e,s,this._ggxMaterial)}}}_blur(e,t){if(this._blurMaterial===null)this._blurMaterial=cy();let i=this._blurMaterial,n=i.uniforms,r=this._sourceTarget;n.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,n.envMap.value=r.texture,this._renderCube(e,0,i),n.envMap.value=e.texture,this._renderCube(r,0,i)}}function d0(e,t,i){return new Ir(e,{minFilter:Vi,generateMipmaps:t,type:Yt,colorSpace:Zr,depthBuffer:i})}function sl(e,t,i){return new Zt({name:e,uniforms:t,vertexShader:lt.cube_vert,fragmentShader:i,side:Bt,blending:pn,depthTest:!1,depthWrite:!1})}function ay(){return sl("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${g0}u

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
	`)}function ly(){return sl("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:x0}},`

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
	`)}function cy(){return sl("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${ny}
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
	`)}function p0(){return sl("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function m0(){return sl("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function _0(e){let t=new WeakMap,i=new WeakMap,n=null;function r(f,m=!1){if(f===null||f===void 0)return null;if(m)return o(f);return s(f)}function s(f){if(f&&f.isTexture){let m=f.mapping;if(m===qo||m===Yo)if(t.has(f)){let g=t.get(f).texture;return a(g,f.mapping)}else{let g=f.image;if(g&&g.height>0){let _=new Ir(g.height);return _.fromEquirectangularTexture(e,f),t.set(f,_),f.addEventListener("dispose",c),a(_.texture,f.mapping)}else return null}}return f}function o(f){if(f&&f.isTexture&&f.isPMREMTexture!==!0){let m=f.mapping,g=m===qo||m===Yo,_=m===mn||m===$n;if(g||_){let d=i.get(f),p=d!==void 0?d.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==p){if(n===null)n=new Lr(e);return d=g?n.fromEquirectangular(f,d):n.fromCubemap(f,d),d.texture.pmremVersion=f.pmremVersion,i.set(f,d),d.texture}else if(d!==void 0)return d.texture;else{let y=f.image;if(g&&y&&y.height>0||_&&y&&l(y)){if(n===null)n=new Lr(e);return d=g?n.fromEquirectangular(f):n.fromCubemap(f),d.texture.pmremVersion=f.pmremVersion,i.set(f,d),f.addEventListener("dispose",h),d.texture}else return null}}}return f}function a(f,m){if(m===qo)f.mapping=mn;else if(m===Yo)f.mapping=$n;return f}function l(f){let m=0,g=6;for(let _=0;_<g;_++)if(f[_]!==void 0)m++;return m===g}function c(f){let m=f.target;m.removeEventListener("dispose",c);let g=t.get(m);if(g!==void 0)t.delete(m),g.dispose()}function h(f){let m=f.target;m.removeEventListener("dispose",h);let g=i.get(m);if(g!==void 0)i.delete(m),g.dispose()}function u(){if(t=new WeakMap,i=new WeakMap,n!==null)n.dispose(),n=null}return{get:r,dispose:u}}function y0(e){let t={};function i(n){if(t[n]!==void 0)return t[n];let r=e.getExtension(n);return t[n]=r,r}return{has:function(n){return i(n)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(n){let r=i(n);if(r===null)xn("WebGLRenderer: "+n+" extension not supported.");return r}}}function v0(e,t,i,n){let r={},s=new WeakMap,o=new FinalizationRegistry((g)=>delete r[g]);function a(g){l(g.target)}function l(g){if(g.index!==null)t.remove(g.index);for(let d in g.attributes)t.remove(g.attributes[d]);g.removeEventListener("dispose",a),delete r[g.id],o.unregister(g);let _=s.get(g);if(_)t.remove(_),s.delete(g);if(n.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0)delete g._maxInstanceCount;i.memory.geometries--}function c(g,_){if(r[_.id]!==void 0)return _;return _.addEventListener("dispose",a),r[_.id]=new WeakRef(_),o.register(_,_.id,_),i.memory.geometries++,_}function h(g){let _=g.attributes;for(let d in _)t.update(_[d],e.ARRAY_BUFFER)}function u(g){let _=g.index,d=g.attributes.position,p=0;if(d===void 0)return;let y=_!==null?_.array.length:d.array.length/3-1,M=new(d.count>=65535?Pa:Ca)(Math.ceil(y/3)*6,1),b=M.array;if(_!==null){let x=_.array;p=_.version;for(let S=0,R=0;S<y;S+=3){let U=x[S+0],I=x[S+1],O=x[S+2];b[R++]=U,b[R++]=I,b[R++]=I,b[R++]=O,b[R++]=O,b[R++]=U}}else{p=d.version;for(let x=0,S=0;x<y;x+=3){let R=x+0,U=x+1,I=x+2;b[S++]=R,b[S++]=U,b[S++]=U,b[S++]=I,b[S++]=I,b[S++]=R}}M.version=p;let w=s.get(g);if(w)t.remove(w);s.set(g,M)}function f(g){let _=s.get(g);if(_){let d=g.index;if(d!==null){if(_.version<d.version)u(g)}}else u(g);return s.get(g)}function m(){for(let g in r){let _=r[g].deref();if(_!==void 0)l(_)}}return{get:c,update:h,getWireframeAttribute:f,dispose:m}}function M0(e,t,i){let n;function r(u){n=u}let s,o;function a(u){s=u.type,o=u.bytesPerElement}function l(u,f){e.drawElements(n,f,s,u*o),i.update(f,n,1)}function c(u,f,m){if(m===0)return;e.drawElementsInstanced(n,f,s,u*o,m),i.update(f,n,m)}function h(u,f,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,u,0,m);let _=0;for(let d=0;d<m;d++)_+=f[d];i.update(_,n,1)}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function S0(e){let t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(i.calls++,o){case e.TRIANGLES:i.triangles+=a*(s/3);break;case e.LINES:i.lines+=a*(s/2);break;case e.LINE_STRIP:i.lines+=a*(s-1);break;case e.LINE_LOOP:i.lines+=a*s;break;case e.POINTS:i.points+=a*s;break;default:Be("WebGLInfo: Unknown draw mode:",o);break}}function r(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:r,update:n}}function b0(e,t,i){let n=new WeakMap,r=new St;function s(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,f=n.get(a);if(f===void 0||f.count!==u){let R=function(){x.dispose(),n.delete(a),a.removeEventListener("dispose",R)};if(f!==void 0)f.texture.dispose();let m=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,d=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],y=a.morphAttributes.color||[],v=0;if(m===!0)v=1;if(g===!0)v=2;if(_===!0)v=3;let M=a.attributes.position.count*v,b=1;if(M>t.maxTextureSize)b=Math.ceil(M/t.maxTextureSize),M=t.maxTextureSize;let w=new Float32Array(M*b*4*u),x=new jr(w,M,b,u);x.type=si,x.needsUpdate=!0;let S=v*4;for(let U=0;U<u;U++){let I=d[U],O=p[U],te=y[U],P=M*b*4*U;for(let Z=0;Z<I.count;Z++){let L=Z*S;if(m===!0)r.fromBufferAttribute(I,Z),w[P+L+0]=r.x,w[P+L+1]=r.y,w[P+L+2]=r.z,w[P+L+3]=0;if(g===!0)r.fromBufferAttribute(O,Z),w[P+L+4]=r.x,w[P+L+5]=r.y,w[P+L+6]=r.z,w[P+L+7]=0;if(_===!0)r.fromBufferAttribute(te,Z),w[P+L+8]=r.x,w[P+L+9]=r.y,w[P+L+10]=r.z,w[P+L+11]=te.itemSize===4?r.w:1}}f={count:u,texture:x,size:new W(M,b)},n.set(a,f),a.addEventListener("dispose",R)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(e,"morphTexture",o.morphTexture,i);else{let m=0;for(let _=0;_<c.length;_++)m+=c[_];let g=a.morphTargetsRelative?1:1-m;l.getUniforms().setValue(e,"morphTargetBaseInfluence",g),l.getUniforms().setValue(e,"morphTargetInfluences",c)}l.getUniforms().setValue(e,"morphTargetsTexture",f.texture,i),l.getUniforms().setValue(e,"morphTargetsTextureSize",f.size)}return{update:s}}function E0(e,t,i,n,r){let s=new WeakMap;function o(c){let h=r.render.frame,u=c.geometry,f=t.get(c,u);if(s.get(f)!==h)t.update(f),s.set(f,h);if(c.isInstancedMesh){if(c.hasEventListener("dispose",l)===!1)c.addEventListener("dispose",l);if(s.get(c)!==h){if(i.update(c.instanceMatrix,e.ARRAY_BUFFER),c.instanceColor!==null)i.update(c.instanceColor,e.ARRAY_BUFFER);s.set(c,h)}}if(c.isSkinnedMesh){let m=c.skeleton;if(s.get(m)!==h)m.update(),s.set(m,h)}return f}function a(){s=new WeakMap}function l(c){let h=c.target;if(h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),i.remove(h.instanceMatrix),h.instanceColor!==null)i.remove(h.instanceColor)}return{update:o,dispose:a}}var hy={[bs]:"LINEAR_TONE_MAPPING",[Es]:"REINHARD_TONE_MAPPING",[Ts]:"CINEON_TONE_MAPPING",[pr]:"ACES_FILMIC_TONE_MAPPING",[As]:"AGX_TONE_MAPPING",[Rs]:"NEUTRAL_TONE_MAPPING",[ws]:"CUSTOM_TONE_MAPPING"};function T0(e,t,i,n,r,s){let o=new Wt(t,i,{type:e,depthBuffer:r,stencilBuffer:s,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=null,h=new Oe;h.setAttribute("position",new ye([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new ye([0,2,0,0,2,0],2));let u=new us({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new ne(h,u),m=new Pr(-1,1,1,-1,0,1),g=null,_=null,d=!1,p,y=null,v=[],M=!1;this.setSize=function(b,w){if(o.setSize(b,w),a!==null)a.setSize(b,w);if(l!==null)l.setSize(b,w);for(let x=0;x<v.length;x++){let S=v[x];if(S.setSize)S.setSize(b,w)}},this.setEffects=function(b){v=b,M=v.length>0&&v[0].isRenderPass===!0;let{width:w,height:x}=o;if(v.length>0&&a===null)a=new Wt(w,x,{type:Yt,depthBuffer:!1,stencilBuffer:!1}),l=new Wt(w,x,{type:Yt,depthBuffer:!1,stencilBuffer:!1});let S=r===!0&&v.some((R)=>R.needsDepthTexture===!0);if(S!==(o.depthTexture!==null)){if(S===!0&&c===null){if(c=new cn(w,x),s===!0)c.format=nn,c.type=Cn}o.dispose(),o.depthTexture=S?c:null,o.resolveDepthBuffer=S,o.storeMultisampledDepthBuffer=S}for(let R=0;R<v.length;R++){let U=v[R];if(U.setSize)U.setSize(w,x);if(S&&U.needsDepthTexture===!0&&U.setDepthTexture)U.setDepthTexture(c)}},this.begin=function(b,w){if(d)return!1;if(b.toneMapping===tn&&v.length===0)return!1;if(y=w,w!==null){let{width:x,height:S}=w;if(o.width!==x||o.height!==S)this.setSize(x,S)}if(M===!1)b.setRenderTarget(o);return p=b.toneMapping,b.toneMapping=tn,!0},this.hasRenderPass=function(){return M},this.end=function(b,w){b.toneMapping=p,d=!0;let x=o,S=a;for(let R=0;R<v.length;R++){let U=v[R];if(U.enabled===!1)continue;if(U.render(b,S,x,w),U.needsSwap!==!1)x=S,S=S===a?l:a}if(g!==b.outputColorSpace||_!==b.toneMapping){if(g=b.outputColorSpace,_=b.toneMapping,u.defines={},it.getTransfer(g)===gt)u.defines.SRGB_TRANSFER="";let R=hy[_];if(R)u.defines[R]="";u.needsUpdate=!0}u.uniforms.tDiffuse.value=x.texture,b.setRenderTarget(y),b.render(f,m),y=null,d=!1},this.isCompositing=function(){return d},this.dispose=function(){if(o.dispose(),a!==null)a.dispose();if(l!==null)l.dispose();h.dispose(),u.dispose()}}var L0=new Mt,D0=new cn(1,1),N0=new co(1),U0=new jr,F0=new Xs,B0=new br,w0=[],A0=[],R0=new Float32Array(16),C0=new Float32Array(9),P0=new Float32Array(4);function Ao(e,t,i){let n=e[0];if(n<=0||n>0)return e;let r=t*i,s=w0[r];if(s===void 0)s=new Float32Array(r),w0[r]=s;if(t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=i,e[o].toArray(s,a)}return s}function gi(e,t){if(e.length!==t.length)return!1;for(let i=0,n=e.length;i<n;i++)if(e[i]!==t[i])return!1;return!0}function xi(e,t){for(let i=0,n=t.length;i<n;i++)e[i]=t[i]}function Uc(e,t){let i=A0[t];if(i===void 0)i=new Int32Array(t),A0[t]=i;for(let n=0;n!==t;++n)i[n]=e.allocateTextureUnit();return i}function fy(e,t){let i=this.cache;if(i[0]===t)return;e.uniform1f(this.addr,t),i[0]=t}function uy(e,t){let i=this.cache;if(t.x!==void 0){if(i[0]!==t.x||i[1]!==t.y)e.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y}else{if(gi(i,t))return;e.uniform2fv(this.addr,t),xi(i,t)}}function dy(e,t){let i=this.cache;if(t.x!==void 0){if(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)e.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z}else if(t.r!==void 0){if(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)e.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b}else{if(gi(i,t))return;e.uniform3fv(this.addr,t),xi(i,t)}}function py(e,t){let i=this.cache;if(t.x!==void 0){if(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)e.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w}else{if(gi(i,t))return;e.uniform4fv(this.addr,t),xi(i,t)}}function my(e,t){let i=this.cache,n=t.elements;if(n===void 0){if(gi(i,t))return;e.uniformMatrix2fv(this.addr,!1,t),xi(i,t)}else{if(gi(i,n))return;P0.set(n),e.uniformMatrix2fv(this.addr,!1,P0),xi(i,n)}}function gy(e,t){let i=this.cache,n=t.elements;if(n===void 0){if(gi(i,t))return;e.uniformMatrix3fv(this.addr,!1,t),xi(i,t)}else{if(gi(i,n))return;C0.set(n),e.uniformMatrix3fv(this.addr,!1,C0),xi(i,n)}}function xy(e,t){let i=this.cache,n=t.elements;if(n===void 0){if(gi(i,t))return;e.uniformMatrix4fv(this.addr,!1,t),xi(i,t)}else{if(gi(i,n))return;R0.set(n),e.uniformMatrix4fv(this.addr,!1,R0),xi(i,n)}}function _y(e,t){let i=this.cache;if(i[0]===t)return;e.uniform1i(this.addr,t),i[0]=t}function yy(e,t){let i=this.cache;if(t.x!==void 0){if(i[0]!==t.x||i[1]!==t.y)e.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y}else{if(gi(i,t))return;e.uniform2iv(this.addr,t),xi(i,t)}}function vy(e,t){let i=this.cache;if(t.x!==void 0){if(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)e.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z}else{if(gi(i,t))return;e.uniform3iv(this.addr,t),xi(i,t)}}function My(e,t){let i=this.cache;if(t.x!==void 0){if(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)e.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w}else{if(gi(i,t))return;e.uniform4iv(this.addr,t),xi(i,t)}}function Sy(e,t){let i=this.cache;if(i[0]===t)return;e.uniform1ui(this.addr,t),i[0]=t}function by(e,t){let i=this.cache;if(t.x!==void 0){if(i[0]!==t.x||i[1]!==t.y)e.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y}else{if(gi(i,t))return;e.uniform2uiv(this.addr,t),xi(i,t)}}function Ey(e,t){let i=this.cache;if(t.x!==void 0){if(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)e.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z}else{if(gi(i,t))return;e.uniform3uiv(this.addr,t),xi(i,t)}}function Ty(e,t){let i=this.cache;if(t.x!==void 0){if(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w}else{if(gi(i,t))return;e.uniform4uiv(this.addr,t),xi(i,t)}}function Fc(e){if(e.version===0)e.compareFunction=Ul,e.needsUpdate=!0;return e}function wy(e,t,i){let n=this.cache,r=i.allocateTextureUnit();if(n[0]!==r)e.uniform1i(this.addr,r),n[0]=r;let s;if(this.type===e.SAMPLER_2D_SHADOW)s=Fc(D0);else s=L0;i.setTexture2D(t||s,r)}function Ay(e,t,i){let n=this.cache,r=i.allocateTextureUnit();if(n[0]!==r)e.uniform1i(this.addr,r),n[0]=r;i.setTexture3D(t||F0,r)}function Ry(e,t,i){let n=this.cache,r=i.allocateTextureUnit();if(n[0]!==r)e.uniform1i(this.addr,r),n[0]=r;let s;if(this.type===e.SAMPLER_CUBE_SHADOW)s=Fc(N0);else s=B0;i.setTextureCube(t||s,r)}function Cy(e,t,i){let n=this.cache,r=i.allocateTextureUnit();if(n[0]!==r)e.uniform1i(this.addr,r),n[0]=r;i.setTexture2DArray(t||U0,r)}function Py(e){switch(e){case 5126:return fy;case 35664:return uy;case 35665:return dy;case 35666:return py;case 35674:return my;case 35675:return gy;case 35676:return xy;case 5124:case 35670:return _y;case 35667:case 35671:return yy;case 35668:case 35672:return vy;case 35669:case 35673:return My;case 5125:return Sy;case 36294:return by;case 36295:return Ey;case 36296:return Ty;case 35678:case 36198:case 36298:case 36306:case 35682:return wy;case 35679:case 36299:case 36307:return Ay;case 35680:case 36300:case 36308:case 36293:return Ry;case 36289:case 36303:case 36311:case 36292:return Cy}}function Iy(e,t){e.uniform1fv(this.addr,t)}function Ly(e,t){let i=Ao(t,this.size,2);e.uniform2fv(this.addr,i)}function Dy(e,t){let i=Ao(t,this.size,3);e.uniform3fv(this.addr,i)}function Ny(e,t){let i=Ao(t,this.size,4);e.uniform4fv(this.addr,i)}function Uy(e,t){let i=Ao(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,i)}function Fy(e,t){let i=Ao(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,i)}function By(e,t){let i=Ao(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,i)}function Oy(e,t){e.uniform1iv(this.addr,t)}function zy(e,t){e.uniform2iv(this.addr,t)}function Gy(e,t){e.uniform3iv(this.addr,t)}function Hy(e,t){e.uniform4iv(this.addr,t)}function ky(e,t){e.uniform1uiv(this.addr,t)}function Vy(e,t){e.uniform2uiv(this.addr,t)}function Wy(e,t){e.uniform3uiv(this.addr,t)}function Xy(e,t){e.uniform4uiv(this.addr,t)}function qy(e,t,i){let n=this.cache,r=t.length,s=Uc(i,r);if(!gi(n,s))e.uniform1iv(this.addr,s),xi(n,s);let o;if(this.type===e.SAMPLER_2D_SHADOW)o=Fc(D0);else o=L0;for(let a=0;a!==r;++a)i.setTexture2D(t[a]||o,s[a])}function Yy(e,t,i){let n=this.cache,r=t.length,s=Uc(i,r);if(!gi(n,s))e.uniform1iv(this.addr,s),xi(n,s);for(let o=0;o!==r;++o)i.setTexture3D(t[o]||F0,s[o])}function Zy(e,t,i){let n=this.cache,r=t.length,s=Uc(i,r);if(!gi(n,s))e.uniform1iv(this.addr,s),xi(n,s);let o;if(this.type===e.SAMPLER_CUBE_SHADOW)o=Fc(N0);else o=B0;for(let a=0;a!==r;++a)i.setTextureCube(t[a]||o,s[a])}function Jy(e,t,i){let n=this.cache,r=t.length,s=Uc(i,r);if(!gi(n,s))e.uniform1iv(this.addr,s),xi(n,s);for(let o=0;o!==r;++o)i.setTexture2DArray(t[o]||U0,s[o])}function Ky(e){switch(e){case 5126:return Iy;case 35664:return Ly;case 35665:return Dy;case 35666:return Ny;case 35674:return Uy;case 35675:return Fy;case 35676:return By;case 5124:case 35670:return Oy;case 35667:case 35671:return zy;case 35668:case 35672:return Gy;case 35669:case 35673:return Hy;case 5125:return ky;case 36294:return Vy;case 36295:return Wy;case 36296:return Xy;case 35678:case 36198:case 36298:case 36306:case 35682:return qy;case 35679:case 36299:case 36307:return Yy;case 35680:case 36300:case 36308:case 36293:return Zy;case 36289:case 36303:case 36311:case 36292:return Jy}}class O0{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Py(t.type)}}class z0{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Ky(t.type)}}class G0{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let n=this.seq;for(let r=0,s=n.length;r!==s;++r){let o=n[r];o.setValue(e,t[o.id],i)}}}var nf=/(\w+)(\])?(\[|\.)?/g;function I0(e,t){e.seq.push(t),e.map[t.id]=t}function $y(e,t,i){let n=e.name,r=n.length;nf.lastIndex=0;while(!0){let s=nf.exec(n),o=nf.lastIndex,a=s[1],l=s[2]==="]",c=s[3];if(l)a=a|0;if(c===void 0||c==="["&&o+2===r){I0(i,c===void 0?new O0(a,e,t):new z0(a,e,t));break}else{let u=i.map[a];if(u===void 0)u=new G0(a),I0(i,u);i=u}}}class xs{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let o=e.getActiveUniform(t,s),a=e.getUniformLocation(t,o.name);$y(o,a,this)}let n=[],r=[];for(let s of this.seq)if(s.type===e.SAMPLER_2D_SHADOW||s.type===e.SAMPLER_CUBE_SHADOW||s.type===e.SAMPLER_2D_ARRAY_SHADOW)n.push(s);else r.push(s);if(n.length>0)this.seq=n.concat(r)}setValue(e,t,i,n){let r=this.map[t];if(r!==void 0)r.setValue(e,i,n)}setOptional(e,t,i){let n=t[i];if(n!==void 0)this.setValue(e,i,n)}static upload(e,t,i,n){for(let r=0,s=t.length;r!==s;++r){let o=t[r],a=i[o.id];if(a.needsUpdate!==!1)o.setValue(e,a.value,n)}}static seqWithValue(e,t){let i=[];for(let n=0,r=e.length;n!==r;++n){let s=e[n];if(s.id in t)i.push(s)}return i}}function rf(e,t,i){let n=e.createShader(t);return e.shaderSource(n,i),e.compileShader(n),n}var Qy=37297,jy=0;function ev(e,t){let i=e.split(`
`),n=[],r=Math.max(t-6,0),s=Math.min(t+6,i.length);for(let o=r;o<s;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${i[o]}`)}return n.join(`
`)}var H0=new Ke;function tv(e){it._getMatrix(H0,it.workingColorSpace,e);let t=`mat3( ${H0.elements.map((i)=>i.toFixed(4))} )`;switch(it.getTransfer(e)){case Jr:return[t,"LinearTransferOETF"];case gt:return[t,"sRGBTransferOETF"];default:return xe("WebGLProgram: Unsupported color space: ",e),[t,"LinearTransferOETF"]}}function k0(e,t,i){let n=e.getShaderParameter(t,e.COMPILE_STATUS),s=(e.getShaderInfoLog(t)||"").trim();if(n&&s==="")return"";let o=/ERROR: 0:(\d+)/.exec(s);if(o){let a=parseInt(o[1]);return i.toUpperCase()+`

`+s+`

`+ev(e.getShaderSource(t),a)}else return s}function iv(e,t){let i=tv(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${i[1]}( vec4( ${i[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var nv={[bs]:"Linear",[Es]:"Reinhard",[Ts]:"Cineon",[pr]:"ACESFilmic",[As]:"AgX",[Rs]:"Neutral",[ws]:"Custom"};function rv(e,t){let i=nv[t];if(i===void 0)return xe("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+e+"( vec3 color ) { return LinearToneMapping( color ); }";return"vec3 "+e+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}var Bc=new A;function sv(){it.getLuminanceCoefficients(Bc);let e=Bc.x.toFixed(4),t=Bc.y.toFixed(4),i=Bc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${t}, ${i} );`,"\treturn dot( weights, rgb );","}"].join(`
`)}function ov(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ol).join(`
`)}function av(e){let t=[];for(let i in e){let n=e[i];if(n===!1)continue;t.push("#define "+i+" "+n)}return t.join(`
`)}function lv(e,t){let i={},n=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){let s=e.getActiveAttrib(t,r),o=s.name,a=1;if(s.type===e.FLOAT_MAT2)a=2;if(s.type===e.FLOAT_MAT3)a=3;if(s.type===e.FLOAT_MAT4)a=4;i[o]={type:s.type,location:e.getAttribLocation(t,o),locationSize:a}}return i}function ol(e){return e!==""}function V0(e,t){let i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function W0(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var cv=/^[ \t]*#include +<([\w\d./]+)>/gm;function sf(e){return e.replace(cv,hv)}function hv(e,t){let i=lt[t];if(i===void 0)throw Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return sf(i)}var fv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function X0(e){return e.replace(fv,uv)}function uv(e,t,i,n){let r="";for(let s=parseInt(t);s<parseInt(i);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function q0(e){let t=`precision ${e.precision} float;
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
#define LOW_PRECISION`;return t}var dv={[Ss]:"SHADOWMAP_TYPE_PCF",[kr]:"SHADOWMAP_TYPE_VSM"};function pv(e){return dv[e.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var mv={[$n]:"ENVMAP_MODE_REFRACTION"};function gv(e){if(e.envMap===!1)return"ENVMAP_MODE_REFLECTION";return mv[e.envMapMode]||"ENVMAP_MODE_REFLECTION"}var xv={[Vr]:"ENVMAP_BLENDING_MULTIPLY",[ou]:"ENVMAP_BLENDING_MIX",[au]:"ENVMAP_BLENDING_ADD"};function _v(e){if(e.envMap===!1)return"ENVMAP_BLENDING_NONE";return xv[e.combine]||"ENVMAP_BLENDING_NONE"}function Y0(e,t,i,n){let r=e.getContext(),{defines:s,vertexShader:o,fragmentShader:a}=i,l=pv(i),c=i.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=gv(i),u=_v(i),f=ov(i),m=av(s),g=r.createProgram(),_,d,p=i.glslVersion?"#version "+i.glslVersion+`
`:"";if(i.isRawShaderMaterial){if(_=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,m].filter(ol).join(`
`),_.length>0)_+=`
`;if(d=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,m].filter(ol).join(`
`),d.length>0)d+=`
`}else _=[q0(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,m,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+h:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+i.diffuseRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexNormals?"#define HAS_NORMAL":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+l:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","\tattribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","\tattribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","\tuniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","\tattribute vec2 uv1;","#endif","#ifdef USE_UV2","\tattribute vec2 uv2;","#endif","#ifdef USE_UV3","\tattribute vec2 uv3;","#endif","#ifdef USE_TANGENT","\tattribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","\tattribute vec4 color;","#elif defined( USE_COLOR )","\tattribute vec3 color;","#endif","#ifdef USE_SKINNING","\tattribute vec4 skinIndex;","\tattribute vec4 skinWeight;","#endif",`
`].filter(ol).join(`
`),d=[q0(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,m,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+c:"",i.envMap?"#define "+h:"",i.envMap?"#define "+u:"",i.envMapPMREM?"#define ENVMAP_MAX_LOD "+i.envMapMaxLod+".0":"",i.envMapPMREM?"#define ENVMAP_SIZE "+i.envMapSize+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",i.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.retroreflection?"#define USE_RETROREFLECTION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+l:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==tn?"#define TONE_MAPPING":"",i.toneMapping!==tn?lt.tonemapping_pars_fragment:"",i.toneMapping!==tn?rv("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",lt.colorspace_pars_fragment,iv("linearToOutputTexel",i.outputColorSpace),sv(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(ol).join(`
`);if(o=sf(o),o=V0(o,i),o=W0(o,i),a=sf(a),a=V0(a,i),a=W0(a,i),o=X0(o),a=X0(a),i.isRawShaderMaterial!==!0)p=`#version 300 es
`,_=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,d=["#define varying in",i.glslVersion===hh?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===hh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d;let y=p+_+o,v=p+d+a,M=rf(r,r.VERTEX_SHADER,y),b=rf(r,r.FRAGMENT_SHADER,v);if(r.attachShader(g,M),r.attachShader(g,b),i.index0AttributeName!==void 0)r.bindAttribLocation(g,0,i.index0AttributeName);else if(i.hasPositionAttribute===!0)r.bindAttribLocation(g,0,"position");r.linkProgram(g);function w(U){if(e.debug.checkShaderErrors){let I=r.getProgramInfoLog(g)||"",O=r.getShaderInfoLog(M)||"",te=r.getShaderInfoLog(b)||"",P=I.trim(),Z=O.trim(),L=te.trim(),N=!0,ee=!0;if(r.getProgramParameter(g,r.LINK_STATUS)===!1)if(N=!1,typeof e.debug.onShaderError==="function")e.debug.onShaderError(r,g,M,b);else{let G=k0(r,M,"vertex"),Y=k0(r,b,"fragment");Be("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(g,r.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+P+`
`+G+`
`+Y)}else if(P!=="")xe("WebGLProgram: Program Info Log:",P);else if(Z===""||L==="")ee=!1;if(ee)U.diagnostics={runnable:N,programLog:P,vertexShader:{log:Z,prefix:_},fragmentShader:{log:L,prefix:d}}}r.deleteShader(M),r.deleteShader(b),x=new xs(r,g),S=lv(r,g)}let x;this.getUniforms=function(){if(x===void 0)w(this);return x};let S;this.getAttributes=function(){if(S===void 0)w(this);return S};let R=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){if(R===!1)R=r.getProgramParameter(g,Qy);return R},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(g),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=jy++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=M,this.fragmentShader=b,this}var yv=0;class of{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){let n=this._getShaderCacheForMaterial(e);if(n.has(t)===!1)n.add(t),t.usedTimes++;if(n.has(i)===!1)n.add(i),i.usedTimes++;return this}remove(e){let t=this.materialCache.get(e);for(let i of t)if(i.usedTimes--,i.usedTimes===0)this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);if(i===void 0)i=new Set,t.set(e,i);return i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);if(i===void 0)i=new Z0(e),t.set(e,i);return i}}class Z0{constructor(e){this.id=yv++,this.code=e,this.usedTimes=0}}function vv(e){return e===rn||e===Xr||e===qr}function J0(e,t,i,n,r,s){let o=new xr,a=new of,l=new Set,c=[],h=new Map,u=n.logarithmicDepthBuffer,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(x){if(l.add(x),x===0)return"uv";return`uv${x}`}function g(x,S,R,U,I,O){let te=U.fog,P=I.geometry,Z=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?U.environment:null,L=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,N=t.get(x.envMap||Z,L),ee=f[x.type],G=n.precision;if(x.precision!==null){if(G=n.getMaxPrecision(x.precision),G!==x.precision)xe("WebGLProgram.getParameters:",x.precision,"not supported, using",G,"instead.")}let Y=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,K=Y!==void 0?Y.length:0,pe=0;if(P.morphAttributes.position!==void 0)pe=1;if(P.morphAttributes.normal!==void 0)pe=2;if(P.morphAttributes.color!==void 0)pe=3;let X,ie,Me,Se;if(ee){let Le=fn[ee];X=Le.vertexShader,ie=Le.fragmentShader}else{X=x.vertexShader,ie=x.fragmentShader;let Le=a.getVertexShaderStage(x),Nt=a.getFragmentShaderStage(x);a.update(x,Le,Nt),Me=Le.id,Se=Nt.id}let ze=e.getRenderTarget(),we=e.state.buffers.depth.getReversed(),pt=I.isInstancedMesh===!0,Ne=I.isBatchedMesh===!0,Ue=!!x.map,ot=!!x.matcap,ae=!!N,fe=ae&&N.isPMREMTexture===!0,de=!!x.aoMap,Pe=!!x.lightMap,Fe=!!x.bumpMap&&x.wireframe===!1,$e=!!x.normalMap,We=!!x.displacementMap,ft=!!x.emissiveMap,mt=!!x.metalnessMap,Tt=!!x.roughnessMap,B=x.anisotropy>0,hi=x.clearcoat>0,ut=x.diffuseRoughness>0,ni=x.dispersion>0,Re=x.retroreflectivity>0,Lt=x.iridescence>0,et=x.sheen>0,nt=x.transmission>0,fi=B&&!!x.anisotropyMap,C=hi&&!!x.clearcoatMap,E=hi&&!!x.clearcoatNormalMap,k=hi&&!!x.clearcoatRoughnessMap,he=ut&&!!x.diffuseRoughnessMap,le=Lt&&!!x.iridescenceMap,_e=Lt&&!!x.iridescenceThicknessMap,be=et&&!!x.sheenColorMap,Q=et&&!!x.sheenRoughnessMap,oe=!!x.specularMap,ve=!!x.specularColorMap,D=!!x.specularIntensityMap,se=nt&&!!x.transmissionMap,j=nt&&!!x.thicknessMap,me=!!x.gradientMap,ge=!!x.alphaMap,Ae=x.alphaTest>0,Qe=!!x.alphaHash,Ze=!!x.extensions,Ie=tn;if(x.toneMapped){if(ze===null||ze.isXRRenderTarget===!0)Ie=e.toneMapping}let je=fe?N.isCompressedCubeTexture?N.image[0].mipmaps:N.mipmaps:null,dt={shaderID:ee,shaderType:x.type,shaderName:x.name,vertexShader:X,fragmentShader:ie,defines:x.defines,customVertexShaderID:Me,customFragmentShaderID:Se,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:G,batching:Ne,batchingColor:Ne&&I._colorsTexture!==null,instancing:pt,instancingColor:pt&&I.instanceColor!==null,instancingMorph:pt&&I.morphTexture!==null,outputColorSpace:ze===null?e.outputColorSpace:ze.isXRRenderTarget===!0?ze.texture.colorSpace:it.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Ue,matcap:ot,envMap:ae,envMapMode:ae&&N.mapping,envMapPMREM:fe,envMapMaxLod:fe?je.length-1:null,envMapSize:fe?je[0].width:null,aoMap:de,lightMap:Pe,bumpMap:Fe,normalMap:$e,displacementMap:We,emissiveMap:ft,normalMapObjectSpace:$e&&x.normalMapType===cu,normalMapTangentSpace:$e&&x.normalMapType===Pn,packedNormalMap:$e&&x.normalMapType===Pn&&vv(x.normalMap.format),metalnessMap:mt,roughnessMap:Tt,anisotropy:B,anisotropyMap:fi,clearcoat:hi,clearcoatMap:C,clearcoatNormalMap:E,clearcoatRoughnessMap:k,diffuseRoughness:ut,diffuseRoughnessMap:he,dispersion:ni,retroreflection:Re,iridescence:Lt,iridescenceMap:le,iridescenceThicknessMap:_e,sheen:et,sheenColorMap:be,sheenRoughnessMap:Q,specularMap:oe,specularColorMap:ve,specularIntensityMap:D,transmission:nt,transmissionMap:se,thicknessMap:j,gradientMap:me,opaque:x.transparent===!1&&x.blending===fr&&x.alphaToCoverage===!1,alphaMap:ge,alphaTest:Ae,alphaHash:Qe,combine:x.combine,mapUv:Ue&&m(x.map.channel),aoMapUv:de&&m(x.aoMap.channel),lightMapUv:Pe&&m(x.lightMap.channel),bumpMapUv:Fe&&m(x.bumpMap.channel),normalMapUv:$e&&m(x.normalMap.channel),displacementMapUv:We&&m(x.displacementMap.channel),emissiveMapUv:ft&&m(x.emissiveMap.channel),metalnessMapUv:mt&&m(x.metalnessMap.channel),roughnessMapUv:Tt&&m(x.roughnessMap.channel),anisotropyMapUv:fi&&m(x.anisotropyMap.channel),clearcoatMapUv:C&&m(x.clearcoatMap.channel),clearcoatNormalMapUv:E&&m(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:k&&m(x.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:he&&m(x.diffuseRoughnessMap.channel),iridescenceMapUv:le&&m(x.iridescenceMap.channel),iridescenceThicknessMapUv:_e&&m(x.iridescenceThicknessMap.channel),sheenColorMapUv:be&&m(x.sheenColorMap.channel),sheenRoughnessMapUv:Q&&m(x.sheenRoughnessMap.channel),specularMapUv:oe&&m(x.specularMap.channel),specularColorMapUv:ve&&m(x.specularColorMap.channel),specularIntensityMapUv:D&&m(x.specularIntensityMap.channel),transmissionMapUv:se&&m(x.transmissionMap.channel),thicknessMapUv:j&&m(x.thicknessMap.channel),alphaMapUv:ge&&m(x.alphaMap.channel),vertexTangents:!!P.attributes.tangent&&($e||B),vertexNormals:!!P.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!P.attributes.uv&&(Ue||ge),fog:!!te,useFog:x.fog===!0,fogExp2:!!te&&te.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||P.attributes.normal===void 0&&$e===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:we,skinning:I.isSkinnedMesh===!0,hasPositionAttribute:P.attributes.position!==void 0,morphTargets:P.morphAttributes.position!==void 0,morphNormals:P.morphAttributes.normal!==void 0,morphColors:P.morphAttributes.color!==void 0,morphTargetsCount:K,morphTextureStride:pe,numSunLights:S.sun.length,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numSunLightShadows:S.sunShadowMap.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numLightProbeGrids:O.filter((Le)=>Le.texture!==null).length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:x.dithering,shadowMapEnabled:e.shadowMap.enabled&&R.length>0,shadowMapType:e.shadowMap.type,toneMapping:Ie,decodeVideoTexture:Ue&&x.map.isVideoTexture===!0&&it.getTransfer(x.map.colorSpace)===gt,decodeVideoTextureEmissive:ft&&x.emissiveMap.isVideoTexture===!0&&it.getTransfer(x.emissiveMap.colorSpace)===gt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Ot,flipSided:x.side===Bt,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:Ze&&x.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ze&&x.extensions.multiDraw===!0||Ne)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return dt.vertexUv1s=l.has(1),dt.vertexUv2s=l.has(2),dt.vertexUv3s=l.has(3),l.clear(),dt}function _(x){let S=[];if(x.shaderID)S.push(x.shaderID);else S.push(x.customVertexShaderID),S.push(x.customFragmentShaderID);if(x.defines!==void 0)for(let R in x.defines)S.push(R),S.push(x.defines[R]);if(x.isRawShaderMaterial===!1)d(S,x),p(S,x),S.push(e.outputColorSpace);return S.push(x.customProgramCacheKey),S.join()}function d(x,S){x.push(S.precision),x.push(S.outputColorSpace),x.push(S.envMapMode),x.push(S.envMapPMREM),x.push(S.envMapMaxLod),x.push(S.envMapSize),x.push(S.mapUv),x.push(S.alphaMapUv),x.push(S.lightMapUv),x.push(S.aoMapUv),x.push(S.bumpMapUv),x.push(S.normalMapUv),x.push(S.displacementMapUv),x.push(S.emissiveMapUv),x.push(S.metalnessMapUv),x.push(S.roughnessMapUv),x.push(S.anisotropyMapUv),x.push(S.clearcoatMapUv),x.push(S.clearcoatNormalMapUv),x.push(S.clearcoatRoughnessMapUv),x.push(S.diffuseRoughnessMapUv),x.push(S.iridescenceMapUv),x.push(S.iridescenceThicknessMapUv),x.push(S.sheenColorMapUv),x.push(S.sheenRoughnessMapUv),x.push(S.specularMapUv),x.push(S.specularColorMapUv),x.push(S.specularIntensityMapUv),x.push(S.transmissionMapUv),x.push(S.thicknessMapUv),x.push(S.combine),x.push(S.fogExp2),x.push(S.sizeAttenuation),x.push(S.morphTargetsCount),x.push(S.numSunLights),x.push(S.numDirLights),x.push(S.numPointLights),x.push(S.numSpotLights),x.push(S.numSpotLightMaps),x.push(S.numHemiLights),x.push(S.numRectAreaLights),x.push(S.numSunLightShadows),x.push(S.numDirLightShadows),x.push(S.numPointLightShadows),x.push(S.numSpotLightShadows),x.push(S.numSpotLightShadowsWithMaps),x.push(S.numLightProbes),x.push(S.numLightProbeGrids),x.push(S.shadowMapType),x.push(S.toneMapping),x.push(S.numClippingPlanes),x.push(S.numClipIntersection),x.push(S.depthPacking)}function p(x,S){if(o.disableAll(),S.instancing)o.enable(0);if(S.instancingColor)o.enable(1);if(S.instancingMorph)o.enable(2);if(S.matcap)o.enable(3);if(S.envMap)o.enable(4);if(S.normalMapObjectSpace)o.enable(5);if(S.normalMapTangentSpace)o.enable(6);if(S.clearcoat)o.enable(7);if(S.iridescence)o.enable(8);if(S.alphaTest)o.enable(9);if(S.vertexColors)o.enable(10);if(S.vertexAlphas)o.enable(11);if(S.vertexUv1s)o.enable(12);if(S.vertexUv2s)o.enable(13);if(S.vertexUv3s)o.enable(14);if(S.vertexTangents)o.enable(15);if(S.anisotropy)o.enable(16);if(S.alphaHash)o.enable(17);if(S.batching)o.enable(18);if(S.dispersion)o.enable(19);if(S.retroreflection)o.enable(24);if(S.diffuseRoughness)o.enable(25);if(S.batchingColor)o.enable(20);if(S.gradientMap)o.enable(21);if(S.packedNormalMap)o.enable(22);if(S.vertexNormals)o.enable(23);if(x.push(o.mask),o.disableAll(),S.fog)o.enable(0);if(S.useFog)o.enable(1);if(S.flatShading)o.enable(2);if(S.logarithmicDepthBuffer)o.enable(3);if(S.reversedDepthBuffer)o.enable(4);if(S.skinning)o.enable(5);if(S.morphTargets)o.enable(6);if(S.morphNormals)o.enable(7);if(S.morphColors)o.enable(8);if(S.premultipliedAlpha)o.enable(9);if(S.shadowMapEnabled)o.enable(10);if(S.doubleSided)o.enable(11);if(S.flipSided)o.enable(12);if(S.useDepthPacking)o.enable(13);if(S.dithering)o.enable(14);if(S.transmission)o.enable(15);if(S.sheen)o.enable(16);if(S.opaque)o.enable(17);if(S.pointsUvs)o.enable(18);if(S.decodeVideoTexture)o.enable(19);if(S.decodeVideoTextureEmissive)o.enable(20);if(S.alphaToCoverage)o.enable(21);if(S.numLightProbeGrids>0)o.enable(22);if(S.hasPositionAttribute)o.enable(23);x.push(o.mask)}function y(x){let S=f[x.type],R;if(S){let U=fn[S];R=Vn.clone(U.uniforms)}else R=x.uniforms;return R}function v(x,S){let R=h.get(S);if(R!==void 0)++R.usedTimes;else R=new Y0(e,S,x,r),c.push(R),h.set(S,R);return R}function M(x){if(--x.usedTimes===0){let S=c.indexOf(x);c[S]=c[c.length-1],c.pop(),h.delete(x.cacheKey),x.destroy()}}function b(x){a.remove(x)}function w(){a.dispose()}return{getParameters:g,getProgramCacheKey:_,getUniforms:y,acquireProgram:v,releaseProgram:M,releaseShaderCache:b,programs:c,dispose:w}}function K0(){let e=new WeakMap;function t(o){return e.has(o)}function i(o){let a=e.get(o);if(a===void 0)a={},e.set(o,a);return a}function n(o){e.delete(o)}function r(o,a,l){e.get(o)[a]=l}function s(){e=new WeakMap}return{has:t,get:i,remove:n,update:r,dispose:s}}function Mv(e,t){if(e.groupOrder!==t.groupOrder)return e.groupOrder-t.groupOrder;else if(e.renderOrder!==t.renderOrder)return e.renderOrder-t.renderOrder;else if(e.material.id!==t.material.id)return e.material.id-t.material.id;else if(e.materialVariant!==t.materialVariant)return e.materialVariant-t.materialVariant;else if(e.z!==t.z)return e.z-t.z;else return e.id-t.id}function $0(e,t){if(e.groupOrder!==t.groupOrder)return e.groupOrder-t.groupOrder;else if(e.renderOrder!==t.renderOrder)return e.renderOrder-t.renderOrder;else if(e.z!==t.z)return t.z-e.z;else return e.id-t.id}function Q0(){let e=[],t=0,i=[],n=[],r=[];function s(){t=0,i.length=0,n.length=0,r.length=0}function o(f){let m=0;if(f.isInstancedMesh)m+=2;if(f.isSkinnedMesh)m+=1;return m}function a(f,m,g,_,d,p){let y=e[t];if(y===void 0)y={id:f.id,object:f,geometry:m,material:g,materialVariant:o(f),groupOrder:_,renderOrder:f.renderOrder,z:d,group:p},e[t]=y;else y.id=f.id,y.object=f,y.geometry=m,y.material=g,y.materialVariant=o(f),y.groupOrder=_,y.renderOrder=f.renderOrder,y.z=d,y.group=p;return t++,y}function l(f,m,g,_,d,p,y){if(y.reversedDepth===!0)d=-d;let v=a(f,m,g,_,d,p);if(g.transmission>0)n.push(v);else if(g.transparent===!0)r.push(v);else i.push(v)}function c(f,m,g,_,d,p){let y=a(f,m,g,_,d,p);if(g.transmission>0)n.unshift(y);else if(g.transparent===!0)r.unshift(y);else i.unshift(y)}function h(f,m){if(i.length>1)i.sort(f||Mv);if(n.length>1)n.sort(m||$0);if(r.length>1)r.sort(m||$0)}function u(){for(let f=t,m=e.length;f<m;f++){let g=e[f];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:i,transmissive:n,transparent:r,init:s,push:l,unshift:c,finish:u,sort:h}}function j0(){let e=new WeakMap;function t(n,r){let s=e.get(n),o;if(s===void 0)o=new Q0,e.set(n,[o]);else if(r>=s.length)o=new Q0,s.push(o);else o=s[r];return o}function i(){e=new WeakMap}return{get:t,dispose:i}}function Sv(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let i;switch(t.type){case"SunLight":case"DirectionalLight":i={direction:new A,color:new ue};break;case"SpotLight":i={position:new A,direction:new A,color:new ue,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new A,color:new ue,distance:0,decay:0};break;case"HemisphereLight":i={direction:new A,skyColor:new ue,groundColor:new ue};break;case"RectAreaLight":i={color:new ue,position:new A,halfWidth:new A,halfHeight:new A};break}return e[t.id]=i,i}}}function bv(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let i;switch(t.type){case"SunLight":case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new W};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new W};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new W,shadowCameraNear:1,shadowCameraFar:1000};break}return e[t.id]=i,i}}}var Ev=0;function Tv(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function eg(e){let t=new Sv,i=bv(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new A);let r=new A,s=new qe,o=new qe;function a(c){let h=0,u=0,f=0;for(let O=0;O<9;O++)n.probe[O].set(0,0,0);let m=0,g=0,_=0,d=0,p=0,y=0,v=0,M=0,b=0,w=0,x=0,S=0,R=0,U=0;c.sort(Tv);for(let O=0,te=c.length;O<te;O++){let P=c[O],{color:Z,intensity:L,distance:N}=P,ee=null;if(P.shadow&&P.shadow.map)if(P.shadow.map.texture.format===rn)ee=P.shadow.map.texture;else ee=P.shadow.map.depthTexture||P.shadow.map.texture;if(P.isAmbientLight)h+=Z.r*L,u+=Z.g*L,f+=Z.b*L;else if(P.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(P.sh.coefficients[G],L);U++}else if(P.isSunLight){let G=t.get(P);if(G.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let Y=P.shadow,K=i.get(P);K.shadowIntensity=Y.intensity,K.shadowBias=Y.bias,K.shadowNormalBias=Y.normalBias,K.shadowRadius=Y.radius,K.shadowMapSize.copy(Y.mapSize).multiply(Y.getFrameExtents()),n.sunShadow[g]=K,n.sunShadowMap[g]=ee;let pe=Y.getViewportCount();for(let X=0;X<pe;X++)n.sunShadowMatrix[_+X]=Y.getMatrix(X),n.sunShadowCascade[_+X]=Y._cascadeData[X];_+=pe,g++}n.sun[m]=G,m++}else if(P.isDirectionalLight){let G=t.get(P);if(G.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let Y=P.shadow,K=i.get(P);K.shadowIntensity=Y.intensity,K.shadowBias=Y.bias,K.shadowNormalBias=Y.normalBias,K.shadowRadius=Y.radius,K.shadowMapSize=Y.mapSize,n.directionalShadow[d]=K,n.directionalShadowMap[d]=ee,n.directionalShadowMatrix[d]=P.shadow.matrix,b++}n.directional[d]=G,d++}else if(P.isSpotLight){let G=t.get(P);G.position.setFromMatrixPosition(P.matrixWorld),G.color.copy(Z).multiplyScalar(L),G.distance=N,G.coneCos=Math.cos(P.angle),G.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),G.decay=P.decay,n.spot[y]=G;let Y=P.shadow;if(P.map){if(n.spotLightMap[S]=P.map,S++,Y.updateMatrices(P),P.castShadow)R++}if(n.spotLightMatrix[y]=Y.matrix,P.castShadow){let K=i.get(P);K.shadowIntensity=Y.intensity,K.shadowBias=Y.bias,K.shadowNormalBias=Y.normalBias,K.shadowRadius=Y.radius,K.shadowMapSize=Y.mapSize,n.spotShadow[y]=K,n.spotShadowMap[y]=ee,x++}y++}else if(P.isRectAreaLight){let G=t.get(P);G.color.copy(Z).multiplyScalar(L),G.halfWidth.set(P.width*0.5,0,0),G.halfHeight.set(0,P.height*0.5,0),n.rectArea[v]=G,v++}else if(P.isPointLight){let G=t.get(P);if(G.color.copy(P.color).multiplyScalar(P.intensity),G.distance=P.distance,G.decay=P.decay,P.castShadow){let Y=P.shadow,K=i.get(P);K.shadowIntensity=Y.intensity,K.shadowBias=Y.bias,K.shadowNormalBias=Y.normalBias,K.shadowRadius=Y.radius,K.shadowMapSize=Y.mapSize,K.shadowCameraNear=Y.camera.near,K.shadowCameraFar=Y.camera.far,n.pointShadow[p]=K,n.pointShadowMap[p]=ee,n.pointShadowMatrix[p]=P.shadow.matrix,w++}n.point[p]=G,p++}else if(P.isHemisphereLight){let G=t.get(P);G.skyColor.copy(P.color).multiplyScalar(L),G.groundColor.copy(P.groundColor).multiplyScalar(L),n.hemi[M]=G,M++}}if(v>0)if(e.has("OES_texture_float_linear")===!0)n.rectAreaLTC1=Ce.LTC_FLOAT_1,n.rectAreaLTC2=Ce.LTC_FLOAT_2;else n.rectAreaLTC1=Ce.LTC_HALF_1,n.rectAreaLTC2=Ce.LTC_HALF_2;n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;let I=n.hash;if(I.sunLength!==m||I.directionalLength!==d||I.pointLength!==p||I.spotLength!==y||I.rectAreaLength!==v||I.hemiLength!==M||I.numSunShadows!==g||I.numDirectionalShadows!==b||I.numPointShadows!==w||I.numSpotShadows!==x||I.numSpotMaps!==S||I.numLightProbes!==U)n.sun.length=m,n.directional.length=d,n.spot.length=y,n.rectArea.length=v,n.point.length=p,n.hemi.length=M,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=_,n.sunShadowCascade.length=_,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.directionalShadowMatrix.length=b,n.pointShadow.length=w,n.pointShadowMap.length=w,n.pointShadowMatrix.length=w,n.spotShadow.length=x,n.spotShadowMap.length=x,n.spotLightMatrix.length=x+S-R,n.spotLightMap.length=S,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=U,I.sunLength=m,I.directionalLength=d,I.pointLength=p,I.spotLength=y,I.rectAreaLength=v,I.hemiLength=M,I.numSunShadows=g,I.numDirectionalShadows=b,I.numPointShadows=w,I.numSpotShadows=x,I.numSpotMaps=S,I.numLightProbes=U,n.version=Ev++}function l(c,h){let u=0,f=0,m=0,g=0,_=0,d=0,p=h.matrixWorldInverse;for(let y=0,v=c.length;y<v;y++){let M=c[y];if(M.isSunLight){let b=n.sun[u];b.direction.setFromMatrixPosition(M.matrixWorld),b.direction.transformDirection(p),u++}else if(M.isDirectionalLight){let b=n.directional[f];b.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(p),f++}else if(M.isSpotLight){let b=n.spot[g];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(p),b.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(p),g++}else if(M.isRectAreaLight){let b=n.rectArea[_];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(p),o.identity(),s.copy(M.matrixWorld),s.premultiply(p),o.extractRotation(s),b.halfWidth.set(M.width*0.5,0,0),b.halfHeight.set(0,M.height*0.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),_++}else if(M.isPointLight){let b=n.point[m];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(p),m++}else if(M.isHemisphereLight){let b=n.hemi[d];b.direction.setFromMatrixPosition(M.matrixWorld),b.direction.transformDirection(p),d++}}}return{setup:a,setupView:l,state:n}}function tg(e){let t=new eg(e),i=[],n=[],r=[];function s(u){h.camera=u,i.length=0,n.length=0,r.length=0}function o(u){if(u.isLightProbeGrid)r.push(u);else i.push(u)}function a(u){n.push(u)}function l(){t.setup(i),r.sort((u,f)=>u.priority-f.priority||u.id-f.id)}function c(u){t.setupView(i,u)}let h={lightsArray:i,shadowsArray:n,lightProbeGridArray:r,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:h,setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function ig(e){let t=new WeakMap;function i(r,s=0){let o=t.get(r),a;if(o===void 0)a=new tg(e),t.set(r,[a]);else if(s>=o.length)a=new tg(e),o.push(a);else a=o[s];return a}function n(){t=new WeakMap}return{get:i,dispose:n}}var ng=`
void main() {

	gl_Position = vec4( position, 1.0 );

}
`,rg=`
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
`;var Av=[new A(1,0,0),new A(-1,0,0),new A(0,1,0),new A(0,-1,0),new A(0,0,1),new A(0,0,-1)],Rv=[new A(0,-1,0),new A(0,-1,0),new A(0,0,1),new A(0,0,-1),new A(0,-1,0),new A(0,-1,0)],sg=new qe,al=new A,af=new A;function og(e,t,i){let n=new yn,r=new W,s=new W,o=new St,a=new ja,l=new el,c={},h=i.maxTextureSize,u={[dn]:Bt,[Bt]:dn,[Ot]:Ot},f=new Zt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new W},radius:{value:4}},vertexShader:ng,fragmentShader:rg}),m=f.clone();m.defines.HORIZONTAL_PASS=1;let g=new Oe;g.setAttribute("position",new $t(new Float32Array([-1,-1,0.5,3,-1,0.5,-1,3,0.5]),3));let _=new ne(g,f),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ss;let p=this.type;this.render=function(w,x,S){if(d.enabled===!1)return;if(d.autoUpdate===!1&&d.needsUpdate===!1)return;if(w.length===0)return;if(this.type===Hf)xe("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ss;let R=e.getRenderTarget(),U=e.getActiveCubeFace(),I=e.getActiveMipmapLevel(),O=e.state;if(O.setBlending(pn),O.buffers.depth.getReversed()===!0)O.buffers.color.setClear(0,0,0,0);else O.buffers.color.setClear(1,1,1,1);O.buffers.depth.setTest(!0),O.setScissorTest(!1);let te=p!==this.type;if(te)x.traverse(function(P){if(P.material)if(Array.isArray(P.material))P.material.forEach((Z)=>Z.needsUpdate=!0);else P.material.needsUpdate=!0});for(let P=0,Z=w.length;P<Z;P++){let L=w[P],N=L.shadow;if(N===void 0){xe("WebGLShadowMap:",L,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;r.copy(N.mapSize);let ee=N.getFrameExtents();if(r.multiply(ee),s.copy(N.mapSize),r.x>h||r.y>h){if(r.x>h)s.x=Math.floor(h/ee.x),r.x=s.x*ee.x,N.mapSize.x=s.x;if(r.y>h)s.y=Math.floor(h/ee.y),r.y=s.y*ee.y,N.mapSize.y=s.y}let G=e.state.buffers.depth.getReversed();if(N.camera._reversedDepth=G,N.map===null||te===!0){if(N.map!==null){if(N.map.depthTexture!==null)N.map.depthTexture.dispose(),N.map.depthTexture=null;N.map.dispose()}if(this.type===kr){if(L.isPointLight){xe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}N.map=new Wt(r.x,r.y,{format:rn,type:Yt,minFilter:qt,magFilter:qt,generateMipmaps:!1}),N.map.texture.name=L.name+".shadowMap",N.map.depthTexture=new cn(r.x,r.y,si),N.map.depthTexture.name=L.name+".shadowMapDepth",N.map.depthTexture.format=Zi,N.map.depthTexture.compareFunction=null,N.map.depthTexture.minFilter=Vt,N.map.depthTexture.magFilter=Vt}else{if(L.isPointLight)N.map=new Ir(r.x),N.map.depthTexture=new co(r.x,ui);else N.map=new Wt(r.x,r.y),N.map.depthTexture=new cn(r.x,r.y,ui);if(N.map.depthTexture.name=L.name+".shadowMap",N.map.depthTexture.format=Zi,this.type===Ss)N.map.depthTexture.compareFunction=G?Nl:Dl,N.map.depthTexture.minFilter=qt,N.map.depthTexture.magFilter=qt;else N.map.depthTexture.compareFunction=null,N.map.depthTexture.minFilter=Vt,N.map.depthTexture.magFilter=Vt}N.camera.updateProjectionMatrix()}if(N.map.isWebGLCubeRenderTarget!==!0&&(N.map.width!==r.x||N.map.height!==r.y))N.map.setSize(r.x,r.y);let Y=N.map.isWebGLCubeRenderTarget?6:N.getViewportCount();if(L.isPointLight!==!0)N.updateMatrices(L,S);let K=(N.camera.layers.mask&4294967294)!==0?N.camera.layers:S.layers;for(let pe=0;pe<Y;pe++){let X=N.getCamera(pe);if(L.isPointLight){let{camera:ie,matrix:Me}=N,Se=L.distance||ie.far;if(Se!==ie.far)ie.far=Se,ie.updateProjectionMatrix();al.setFromMatrixPosition(L.matrixWorld),ie.position.copy(al),af.copy(ie.position),af.add(Av[pe]),ie.up.copy(Rv[pe]),ie.lookAt(af),ie.updateMatrixWorld(),Me.makeTranslation(-al.x,-al.y,-al.z),sg.multiplyMatrices(ie.projectionMatrix,ie.matrixWorldInverse),N._frustum.setFromProjectionMatrix(sg,ie.coordinateSystem,ie.reversedDepth)}if(N.map.isWebGLCubeRenderTarget)e.setRenderTarget(N.map,pe),e.clear();else{if(pe===0)e.setRenderTarget(N.map),e.clear();let ie=N.getViewport(pe);o.set(s.x*ie.x,s.y*ie.y,s.x*ie.z,s.y*ie.w),O.viewport(o)}n=N.getFrustum(pe),M(x,S,X,L,K,this.type)}if(N.isPointLightShadow!==!0&&this.type===kr)y(N,S);N.needsUpdate=!1}p=this.type,d.needsUpdate=!1,e.setRenderTarget(R,U,I)};function y(w,x){let S=t.update(_);if(f.defines.VSM_SAMPLES!==w.blurSamples)f.defines.VSM_SAMPLES=w.blurSamples,m.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0;if(w.mapPass===null)w.mapPass=new Wt(r.x,r.y,{format:rn,type:Yt});else if(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)w.mapPass.setSize(w.map.width,w.map.height);f.uniforms.shadow_pass.value=w.map.depthTexture,f.uniforms.resolution.value.set(w.map.width,w.map.height),f.uniforms.radius.value=w.radius,e.setRenderTarget(w.mapPass),e.clear(),e.renderBufferDirect(x,null,S,f,_,null),m.uniforms.shadow_pass.value=w.mapPass.texture,m.uniforms.resolution.value.set(w.map.width,w.map.height),m.uniforms.radius.value=w.radius,e.setRenderTarget(w.map),e.clear(),e.renderBufferDirect(x,null,S,m,_,null)}function v(w,x,S,R){let U=null,I=S.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(I!==void 0)U=I;else if(U=S.isPointLight===!0?l:a,e.localClippingEnabled&&x.clipShadows===!0&&Array.isArray(x.clippingPlanes)&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0||x.map&&x.alphaTest>0||x.alphaToCoverage===!0){let O=U.uuid,te=x.uuid,P=c[O];if(P===void 0)P={},c[O]=P;let Z=P[te];if(Z===void 0)Z=U.clone(),P[te]=Z,x.addEventListener("dispose",b);U=Z}if(U.visible=x.visible,U.wireframe=x.wireframe,R===kr)U.side=x.shadowSide!==null?x.shadowSide:x.side;else U.side=x.shadowSide!==null?x.shadowSide:u[x.side];if(U.alphaMap=x.alphaMap,U.alphaTest=x.alphaToCoverage===!0?0.5:x.alphaTest,U.map=x.map,U.clipShadows=x.clipShadows,U.clippingPlanes=x.clippingPlanes,U.clipIntersection=x.clipIntersection,U.displacementMap=x.displacementMap,U.displacementScale=x.displacementScale,U.displacementBias=x.displacementBias,U.wireframeLinewidth=x.wireframeLinewidth,U.linewidth=x.linewidth,S.isPointLight===!0&&U.isMeshDistanceMaterial===!0){let O=e.properties.get(U);O.light=S}return U}function M(w,x,S,R,U,I){if(w.visible===!1)return;if(w.layers.test(U)&&(w.isMesh||w.isLine||w.isPoints)){if((w.castShadow||w.receiveShadow&&I===kr)&&(!w.frustumCulled||w.intersectsFrustum(n))){w.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,w.matrixWorld);let P=t.update(w),Z=w.material;if(Array.isArray(Z)){let L=P.groups;for(let N=0,ee=L.length;N<ee;N++){let G=L[N],Y=Z[G.materialIndex];if(Y&&Y.visible){let K=v(w,Y,R,I);w.onBeforeShadow(e,w,x,S,P,K,G),e.renderBufferDirect(S,null,P,K,w,G),w.onAfterShadow(e,w,x,S,P,K,G)}}}else if(Z.visible){let L=v(w,Z,R,I);w.onBeforeShadow(e,w,x,S,P,L,null),e.renderBufferDirect(S,null,P,L,w,null),w.onAfterShadow(e,w,x,S,P,L,null)}}}let te=w.children;for(let P=0,Z=te.length;P<Z;P++)M(te[P],x,S,R,U,I)}function b(w){w.target.removeEventListener("dispose",b);for(let S in c){let R=c[S],U=w.target.uuid;if(U in R)R[U].dispose(),delete R[U]}}}function ag(e,t){function i(){let D=!1,se=new St,j=null,me=new St(0,0,0,0);return{setMask:function(ge){if(j!==ge&&!D)e.colorMask(ge,ge,ge,ge),j=ge},setLocked:function(ge){D=ge},setClear:function(ge,Ae,Qe,Ze,Ie){if(Ie===!0)ge*=Ze,Ae*=Ze,Qe*=Ze;if(se.set(ge,Ae,Qe,Ze),me.equals(se)===!1)e.clearColor(ge,Ae,Qe,Ze),me.copy(se)},reset:function(){D=!1,j=null,me.set(-1,0,0,0)}}}function n(){let D=!1,se=!1,j=null,me=null,ge=null;return{setReversed:function(Ae){if(se!==Ae){let Qe=t.get("EXT_clip_control");if(Ae)Qe.clipControlEXT(Qe.LOWER_LEFT_EXT,Qe.ZERO_TO_ONE_EXT);else Qe.clipControlEXT(Qe.LOWER_LEFT_EXT,Qe.NEGATIVE_ONE_TO_ONE_EXT);se=Ae;let Ze=ge;ge=null,this.setClear(Ze)}},getReversed:function(){return se},setTest:function(Ae){if(Ae)we(e.DEPTH_TEST);else pt(e.DEPTH_TEST)},setMask:function(Ae){if(j!==Ae&&!D)e.depthMask(Ae),j=Ae},setFunc:function(Ae){if(se)Ae=vu[Ae];if(me!==Ae){switch(Ae){case zo:e.depthFunc(e.NEVER);break;case Go:e.depthFunc(e.ALWAYS);break;case Ho:e.depthFunc(e.LESS);break;case dr:e.depthFunc(e.LEQUAL);break;case ko:e.depthFunc(e.EQUAL);break;case Vo:e.depthFunc(e.GEQUAL);break;case Wo:e.depthFunc(e.GREATER);break;case Xo:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}me=Ae}},setLocked:function(Ae){D=Ae},setClear:function(Ae){if(ge!==Ae){if(ge=Ae,se)Ae=1-Ae;e.clearDepth(Ae)}},reset:function(){D=!1,j=null,me=null,ge=null,se=!1}}}function r(){let D=!1,se=null,j=null,me=null,ge=null,Ae=null,Qe=null,Ze=null,Ie=null;return{setTest:function(je){if(!D)if(je)we(e.STENCIL_TEST);else pt(e.STENCIL_TEST)},setMask:function(je){if(se!==je&&!D)e.stencilMask(je),se=je},setFunc:function(je,dt,Le){if(j!==je||me!==dt||ge!==Le)e.stencilFunc(je,dt,Le),j=je,me=dt,ge=Le},setOp:function(je,dt,Le){if(Ae!==je||Qe!==dt||Ze!==Le)e.stencilOp(je,dt,Le),Ae=je,Qe=dt,Ze=Le},setLocked:function(je){D=je},setClear:function(je){if(Ie!==je)e.clearStencil(je),Ie=je},reset:function(){D=!1,se=null,j=null,me=null,ge=null,Ae=null,Qe=null,Ze=null,Ie=null}}}let s=new i,o=new n,a=new r,l={},c=new WeakMap,h={},u={},f={},m=new WeakMap,g=[],_=null,d=!1,p=null,y=null,v=null,M=null,b=null,w=null,x=null,S=new ue(0,0,0),R=0,U=!1,I=null,O=null,te=null,P=null,Z=null,L=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),N=!1,ee=0,G=e.getParameter(e.VERSION);if(G.indexOf("WebGL")!==-1)ee=parseFloat(/^WebGL (\d)/.exec(G)[1]),N=ee>=1;else if(G.indexOf("OpenGL ES")!==-1)ee=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),N=ee>=2;let Y=null,K={},pe=e.getParameter(e.SCISSOR_BOX),X=e.getParameter(e.VIEWPORT),ie=new St().fromArray(pe),Me=new St().fromArray(X);function Se(D,se,j,me){let ge=new Uint8Array(4),Ae=e.createTexture();e.bindTexture(D,Ae),e.texParameteri(D,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(D,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let Qe=0;Qe<j;Qe++)if(D===e.TEXTURE_3D||D===e.TEXTURE_2D_ARRAY)e.texImage3D(se,0,e.RGBA,1,1,me,0,e.RGBA,e.UNSIGNED_BYTE,ge);else e.texImage2D(se+Qe,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,ge);return Ae}let ze={};ze[e.TEXTURE_2D]=Se(e.TEXTURE_2D,e.TEXTURE_2D,1),ze[e.TEXTURE_CUBE_MAP]=Se(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),ze[e.TEXTURE_2D_ARRAY]=Se(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),ze[e.TEXTURE_3D]=Se(e.TEXTURE_3D,e.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),we(e.DEPTH_TEST),o.setFunc(dr),Fe(!1),$e(sh),we(e.CULL_FACE),de(pn);function we(D){if(h[D]!==!0)e.enable(D),h[D]=!0}function pt(D){if(h[D]!==!1)e.disable(D),h[D]=!1}function Ne(D,se){if(f[D]!==se){if(e.bindFramebuffer(D,se),f[D]=se,D===e.DRAW_FRAMEBUFFER)f[e.FRAMEBUFFER]=se;if(D===e.FRAMEBUFFER)f[e.DRAW_FRAMEBUFFER]=se;return!0}return!1}function Ue(D,se){let j=g,me=!1;if(D){if(j=m.get(se),j===void 0)j=[],m.set(se,j);let ge=D.textures;if(j.length!==ge.length||j[0]!==e.COLOR_ATTACHMENT0){for(let Ae=0,Qe=ge.length;Ae<Qe;Ae++)j[Ae]=e.COLOR_ATTACHMENT0+Ae;j.length=ge.length,me=!0}}else if(j[0]!==e.BACK)j[0]=e.BACK,me=!0;if(me)e.drawBuffers(j)}function ot(D){if(_!==D)return e.useProgram(D),_=D,!0;return!1}let ae={[ur]:e.FUNC_ADD,[Vf]:e.FUNC_SUBTRACT,[Wf]:e.FUNC_REVERSE_SUBTRACT};ae[Xf]=e.MIN,ae[qf]=e.MAX;let fe={[Yf]:e.ZERO,[Zf]:e.ONE,[Jf]:e.SRC_COLOR,[_l]:e.SRC_ALPHA,[tu]:e.SRC_ALPHA_SATURATE,[jf]:e.DST_COLOR,[$f]:e.DST_ALPHA,[Kf]:e.ONE_MINUS_SRC_COLOR,[yl]:e.ONE_MINUS_SRC_ALPHA,[eu]:e.ONE_MINUS_DST_COLOR,[Qf]:e.ONE_MINUS_DST_ALPHA,[iu]:e.CONSTANT_COLOR,[nu]:e.ONE_MINUS_CONSTANT_COLOR,[ru]:e.CONSTANT_ALPHA,[su]:e.ONE_MINUS_CONSTANT_ALPHA};function de(D,se,j,me,ge,Ae,Qe,Ze,Ie,je){if(D===pn){if(d===!0)pt(e.BLEND),d=!1;return}if(d===!1)we(e.BLEND),d=!0;if(D!==kf){if(D!==p||je!==U){if(y!==ur||b!==ur)e.blendEquation(e.FUNC_ADD),y=ur,b=ur;if(je)switch(D){case fr:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case Oo:e.blendFunc(e.ONE,e.ONE);break;case oh:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case ah:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:Be("WebGLState: Invalid blending: ",D);break}else switch(D){case fr:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case Oo:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case oh:Be("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ah:Be("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Be("WebGLState: Invalid blending: ",D);break}v=null,M=null,w=null,x=null,S.set(0,0,0),R=0,p=D,U=je}return}if(ge=ge||se,Ae=Ae||j,Qe=Qe||me,se!==y||ge!==b)e.blendEquationSeparate(ae[se],ae[ge]),y=se,b=ge;if(j!==v||me!==M||Ae!==w||Qe!==x)e.blendFuncSeparate(fe[j],fe[me],fe[Ae],fe[Qe]),v=j,M=me,w=Ae,x=Qe;if(Ze.equals(S)===!1||Ie!==R)e.blendColor(Ze.r,Ze.g,Ze.b,Ie),S.copy(Ze),R=Ie;p=D,U=!1}function Pe(D,se){D.side===Ot?pt(e.CULL_FACE):we(e.CULL_FACE);let j=D.side===Bt;if(se)j=!j;Fe(j),D.blending===fr&&D.transparent===!1?de(pn):de(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),o.setFunc(D.depthFunc),o.setTest(D.depthTest),o.setMask(D.depthWrite),s.setMask(D.colorWrite);let me=D.stencilWrite;if(a.setTest(me),me)a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass);ft(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?we(e.SAMPLE_ALPHA_TO_COVERAGE):pt(e.SAMPLE_ALPHA_TO_COVERAGE)}function Fe(D){if(I!==D){if(D)e.frontFace(e.CW);else e.frontFace(e.CCW);I=D}}function $e(D){if(D!==zf){if(we(e.CULL_FACE),D!==O)if(D===sh)e.cullFace(e.BACK);else if(D===Gf)e.cullFace(e.FRONT);else e.cullFace(e.FRONT_AND_BACK)}else pt(e.CULL_FACE);O=D}function We(D){if(D!==te){if(N)e.lineWidth(D);te=D}}function ft(D,se,j){if(D){if(we(e.POLYGON_OFFSET_FILL),P!==se||Z!==j){if(P=se,Z=j,o.getReversed())se=-se,j=-j;e.polygonOffset(se,j)}}else pt(e.POLYGON_OFFSET_FILL)}function mt(D){if(D)we(e.SCISSOR_TEST);else pt(e.SCISSOR_TEST)}function Tt(D){if(D===void 0)D=e.TEXTURE0+L-1;if(Y!==D)e.activeTexture(D),Y=D}function B(D,se,j){if(j===void 0)if(Y===null)j=e.TEXTURE0+L-1;else j=Y;let me=K[j];if(me===void 0)me={type:void 0,texture:void 0},K[j]=me;if(me.type!==D||me.texture!==se){if(Y!==j)e.activeTexture(j),Y=j;e.bindTexture(D,se||ze[D]),me.type=D,me.texture=se}}function hi(){let D=K[Y];if(D!==void 0&&D.type!==void 0)e.bindTexture(D.type,null),D.type=void 0,D.texture=void 0}function ut(){try{e.compressedTexImage2D(...arguments)}catch(D){Be("WebGLState:",D)}}function ni(){try{e.compressedTexImage3D(...arguments)}catch(D){Be("WebGLState:",D)}}function Re(){try{e.texSubImage2D(...arguments)}catch(D){Be("WebGLState:",D)}}function Lt(){try{e.texSubImage3D(...arguments)}catch(D){Be("WebGLState:",D)}}function et(){try{e.compressedTexSubImage2D(...arguments)}catch(D){Be("WebGLState:",D)}}function nt(){try{e.compressedTexSubImage3D(...arguments)}catch(D){Be("WebGLState:",D)}}function fi(){try{e.texStorage2D(...arguments)}catch(D){Be("WebGLState:",D)}}function C(){try{e.texStorage3D(...arguments)}catch(D){Be("WebGLState:",D)}}function E(){try{e.texImage2D(...arguments)}catch(D){Be("WebGLState:",D)}}function k(){try{e.texImage3D(...arguments)}catch(D){Be("WebGLState:",D)}}function he(D){if(u[D]!==void 0)return u[D];else return e.getParameter(D)}function le(D,se){if(u[D]!==se)e.pixelStorei(D,se),u[D]=se}function _e(D){if(ie.equals(D)===!1)e.scissor(D.x,D.y,D.z,D.w),ie.copy(D)}function be(D){if(Me.equals(D)===!1)e.viewport(D.x,D.y,D.z,D.w),Me.copy(D)}function Q(D,se){let j=c.get(se);if(j===void 0)j=new WeakMap,c.set(se,j);let me=j.get(D);if(me===void 0)me=e.getUniformBlockIndex(se,D.name),e.uniformBlockBinding(se,me,me),j.set(D,me)}function oe(D,se,j){let ge=c.get(se).get(D);if(l[ge]!==j)e.bindBufferBase(e.UNIFORM_BUFFER,ge,j),l[ge]=j}function ve(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),h={},u={},Y=null,K={},f={},l={},m=new WeakMap,g=[],_=null,d=!1,p=null,y=null,v=null,M=null,b=null,w=null,x=null,S=new ue(0,0,0),R=0,U=!1,I=null,O=null,te=null,P=null,Z=null,ie.set(0,0,e.canvas.width,e.canvas.height),Me.set(0,0,e.canvas.width,e.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:we,disable:pt,bindFramebuffer:Ne,drawBuffers:Ue,useProgram:ot,setBlending:de,setMaterial:Pe,setFlipSided:Fe,setCullFace:$e,setLineWidth:We,setPolygonOffset:ft,setScissorTest:mt,activeTexture:Tt,bindTexture:B,unbindTexture:hi,compressedTexImage2D:ut,compressedTexImage3D:ni,texImage2D:E,texImage3D:k,pixelStorei:le,getParameter:he,updateUBOMapping:Q,uniformBlockBinding:oe,texStorage2D:fi,texStorage3D:C,texSubImage2D:Re,texSubImage3D:Lt,compressedTexSubImage2D:et,compressedTexSubImage3D:nt,scissor:_e,viewport:be,reset:ve}}function lg(e,t,i,n,r,s,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new W,h=new WeakMap,u=new Set,f,m=new WeakMap,g=new Set,_=new FinalizationRegistry((C)=>g.delete(C)),d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(C){}function p(C,E){return d?new OffscreenCanvas(C,E):mr("canvas")}function y(C,E,k){let he=1,le=fi(C);if(le.width>k||le.height>k)he=k/Math.max(le.width,le.height);if(he<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let _e=Math.floor(he*le.width),be=Math.floor(he*le.height);if(f===void 0)f=p(_e,be);let Q=E?p(_e,be):f;return Q.width=_e,Q.height=be,Q.getContext("2d").drawImage(C,0,0,_e,be),xe("WebGLRenderer: Texture has been resized from ("+le.width+"x"+le.height+") to ("+_e+"x"+be+")."),Q}else{if("data"in C)xe("WebGLRenderer: Image in DataTexture is too big ("+le.width+"x"+le.height+").");return C}return C}function v(C){return C.generateMipmaps}function M(C){e.generateMipmap(C)}function b(C){if(C.isWebGLCubeRenderTarget)return e.TEXTURE_CUBE_MAP;if(C.isWebGL3DRenderTarget)return e.TEXTURE_3D;if(C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture)return e.TEXTURE_2D_ARRAY;return e.TEXTURE_2D}function w(C,E,k,he,le,_e=!1){if(C!==null){if(e[C]!==void 0)return e[C];xe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let be;if(he){if(be=t.get("EXT_texture_norm16"),!be)xe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension")}let Q=E;if(E===e.RED){if(k===e.FLOAT)Q=e.R32F;if(k===e.HALF_FLOAT)Q=e.R16F;if(k===e.UNSIGNED_BYTE)Q=e.R8;if(k===e.UNSIGNED_SHORT&&be)Q=be.R16_EXT;if(k===e.SHORT&&be)Q=be.R16_SNORM_EXT}if(E===e.RED_INTEGER){if(k===e.UNSIGNED_BYTE)Q=e.R8UI;if(k===e.UNSIGNED_SHORT)Q=e.R16UI;if(k===e.UNSIGNED_INT)Q=e.R32UI;if(k===e.BYTE)Q=e.R8I;if(k===e.SHORT)Q=e.R16I;if(k===e.INT)Q=e.R32I}if(E===e.RG){if(k===e.FLOAT)Q=e.RG32F;if(k===e.HALF_FLOAT)Q=e.RG16F;if(k===e.UNSIGNED_BYTE)Q=e.RG8;if(k===e.UNSIGNED_SHORT&&be)Q=be.RG16_EXT;if(k===e.SHORT&&be)Q=be.RG16_SNORM_EXT}if(E===e.RG_INTEGER){if(k===e.UNSIGNED_BYTE)Q=e.RG8UI;if(k===e.UNSIGNED_SHORT)Q=e.RG16UI;if(k===e.UNSIGNED_INT)Q=e.RG32UI;if(k===e.BYTE)Q=e.RG8I;if(k===e.SHORT)Q=e.RG16I;if(k===e.INT)Q=e.RG32I}if(E===e.RGB_INTEGER){if(k===e.UNSIGNED_BYTE)Q=e.RGB8UI;if(k===e.UNSIGNED_SHORT)Q=e.RGB16UI;if(k===e.UNSIGNED_INT)Q=e.RGB32UI;if(k===e.BYTE)Q=e.RGB8I;if(k===e.SHORT)Q=e.RGB16I;if(k===e.INT)Q=e.RGB32I}if(E===e.RGBA_INTEGER){if(k===e.UNSIGNED_BYTE)Q=e.RGBA8UI;if(k===e.UNSIGNED_SHORT)Q=e.RGBA16UI;if(k===e.UNSIGNED_INT)Q=e.RGBA32UI;if(k===e.BYTE)Q=e.RGBA8I;if(k===e.SHORT)Q=e.RGBA16I;if(k===e.INT)Q=e.RGBA32I}if(E===e.RGB){if(k===e.UNSIGNED_SHORT&&be)Q=be.RGB16_EXT;if(k===e.SHORT&&be)Q=be.RGB16_SNORM_EXT;if(k===e.UNSIGNED_INT_5_9_9_9_REV)Q=e.RGB9_E5;if(k===e.UNSIGNED_INT_10F_11F_11F_REV)Q=e.R11F_G11F_B10F}if(E===e.RGBA){let oe=_e?Jr:it.getTransfer(le);if(k===e.FLOAT)Q=e.RGBA32F;if(k===e.HALF_FLOAT)Q=e.RGBA16F;if(k===e.UNSIGNED_BYTE)Q=oe===gt?e.SRGB8_ALPHA8:e.RGBA8;if(k===e.UNSIGNED_SHORT&&be)Q=be.RGBA16_EXT;if(k===e.SHORT&&be)Q=be.RGBA16_SNORM_EXT;if(k===e.UNSIGNED_SHORT_4_4_4_4)Q=e.RGBA4;if(k===e.UNSIGNED_SHORT_5_5_5_1)Q=e.RGB5_A1}if(Q===e.R16F||Q===e.R32F||Q===e.RG16F||Q===e.RG32F||Q===e.RGBA16F||Q===e.RGBA32F)t.get("EXT_color_buffer_float");return Q}function x(C,E){let k;if(C){if(E===null||E===ui||E===Cn)k=e.DEPTH24_STENCIL8;else if(E===si)k=e.DEPTH32F_STENCIL8;else if(E===jn)k=e.DEPTH24_STENCIL8,xe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")}else if(E===null||E===ui||E===Cn)k=e.DEPTH_COMPONENT24;else if(E===si)k=e.DEPTH_COMPONENT32F;else if(E===jn)k=e.DEPTH_COMPONENT16;return k}function S(C,E){if(v(C)===!0||C.isFramebufferTexture&&C.minFilter!==Vt&&C.minFilter!==qt)return Math.log2(Math.max(E.width,E.height))+1;else if(C.mipmaps.length>0)return C.mipmaps.length;else if(C.isCompressedTexture&&Array.isArray(C.image))return E.mipmaps.length;else return 1}function R(C){let E=new WeakRef(C);n.get(C).__ref=E,g.add(E),_.register(C,E,E)}function U(C){let E=n.get(C).__ref;if(E===void 0)return;g.delete(E),_.unregister(E)}function I(C){te(C.target)}function O(C){P(C.target)}function te(C){if(C.removeEventListener("dispose",I),U(C),L(C),C.isVideoTexture)h.delete(C);if(C.isHTMLTexture)u.delete(C)}function P(C){C.removeEventListener("dispose",O),U(C),ee(C)}function Z(){for(let C of g){let E=C.deref();if(E===void 0)continue;if(E.isRenderTarget===!0)P(E);else te(E)}g.clear(),u.clear()}function L(C){let E=n.get(C);if(E.__webglInit===void 0)return;let k=C.source,he=m.get(k);if(he){let le=he[E.__cacheKey];if(le.usedTimes--,le.usedTimes===0)N(C);if(Object.keys(he).length===0)m.delete(k)}n.remove(C)}function N(C){let E=n.get(C);e.deleteTexture(E.__webglTexture);let k=C.source,he=m.get(k);delete he[E.__cacheKey],o.memory.textures--}function ee(C){let E=n.get(C);if(E.__depthDisposeCallback)E.__depthDisposeCallback();let k=C.depthTexture;if(k&&k.renderTarget===C)te(k);if(C.isWebGLCubeRenderTarget)for(let le=0;le<6;le++){if(Array.isArray(E.__webglFramebuffer[le]))for(let _e=0;_e<E.__webglFramebuffer[le].length;_e++)e.deleteFramebuffer(E.__webglFramebuffer[le][_e]);else e.deleteFramebuffer(E.__webglFramebuffer[le]);if(E.__webglDepthbuffer)e.deleteRenderbuffer(E.__webglDepthbuffer[le])}else{if(Array.isArray(E.__webglFramebuffer))for(let le=0;le<E.__webglFramebuffer.length;le++)e.deleteFramebuffer(E.__webglFramebuffer[le]);else e.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer)e.deleteRenderbuffer(E.__webglDepthbuffer);if(E.__webglMultisampledFramebuffer)e.deleteFramebuffer(E.__webglMultisampledFramebuffer);if(E.__webglColorRenderbuffer){for(let le=0;le<E.__webglColorRenderbuffer.length;le++)if(E.__webglColorRenderbuffer[le])e.deleteRenderbuffer(E.__webglColorRenderbuffer[le])}if(E.__webglDepthRenderbuffer)e.deleteRenderbuffer(E.__webglDepthRenderbuffer)}let he=C.textures;for(let le=0,_e=he.length;le<_e;le++){let be=n.get(he[le]);if(be.__webglTexture)e.deleteTexture(be.__webglTexture),o.memory.textures--;n.remove(he[le])}n.remove(C)}let G=0;function Y(){G=0}function K(){return G}function pe(C){G=C}function X(){let C=G;if(C>=r.maxTextures)xe("WebGLTextures: Trying to use "+(C+1)+" texture units while this GPU supports only "+r.maxTextures);return G+=1,C}function ie(C){let E=[];return E.push(C.wrapS),E.push(C.wrapT),E.push(C.wrapR||0),E.push(C.magFilter),E.push(C.minFilter),E.push(C.anisotropy),E.push(C.internalFormat),E.push(C.format),E.push(C.type),E.push(C.generateMipmaps),E.push(C.mipmapsAutoUpdate),E.push(C.premultiplyAlpha),E.push(C.flipY),E.push(C.unpackAlignment),E.push(C.colorSpace),E.join()}function Me(C,E){let k=n.get(C);if(C.isVideoTexture)et(C);if(C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&k.__version!==C.version){let he=C.image;if(he===null)xe("WebGLRenderer: Texture marked for update but no image data found.");else if(he.complete===!1)xe("WebGLRenderer: Texture marked for update but image is incomplete");else{Pe(k,C,E);return}}else if(C.isExternalTexture)k.__webglTexture=C.sourceTexture?C.sourceTexture:null;i.bindTexture(e.TEXTURE_2D,k.__webglTexture,e.TEXTURE0+E)}function Se(C,E){let k=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&k.__version!==C.version){Pe(k,C,E);return}else if(C.isExternalTexture)k.__webglTexture=C.sourceTexture?C.sourceTexture:null;i.bindTexture(e.TEXTURE_2D_ARRAY,k.__webglTexture,e.TEXTURE0+E)}function ze(C,E){let k=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&k.__version!==C.version){Pe(k,C,E);return}i.bindTexture(e.TEXTURE_3D,k.__webglTexture,e.TEXTURE0+E)}function we(C,E){let k=n.get(C);if(C.version>0&&k.__version!==C.version){Fe(k,C,E);return}i.bindTexture(e.TEXTURE_CUBE_MAP,k.__webglTexture,e.TEXTURE0+E)}let pt={[Qn]:e.REPEAT,[Ci]:e.CLAMP_TO_EDGE,[Cs]:e.MIRRORED_REPEAT},Ne={[Vt]:e.NEAREST,[lh]:e.NEAREST_MIPMAP_NEAREST,[Ps]:e.NEAREST_MIPMAP_LINEAR,[qt]:e.LINEAR,[Zo]:e.LINEAR_MIPMAP_NEAREST,[Vi]:e.LINEAR_MIPMAP_LINEAR},Ue={[fu]:e.NEVER,[Ul]:e.ALWAYS,[uu]:e.LESS,[Dl]:e.LEQUAL,[du]:e.EQUAL,[Nl]:e.GEQUAL,[pu]:e.GREATER,[mu]:e.NOTEQUAL};function ot(C,E){if(E.type===si&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===qt||E.magFilter===Zo||E.magFilter===Ps||E.magFilter===Vi||E.minFilter===qt||E.minFilter===Zo||E.minFilter===Ps||E.minFilter===Vi))xe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.");if(e.texParameteri(C,e.TEXTURE_WRAP_S,pt[E.wrapS]),e.texParameteri(C,e.TEXTURE_WRAP_T,pt[E.wrapT]),C===e.TEXTURE_3D||C===e.TEXTURE_2D_ARRAY)e.texParameteri(C,e.TEXTURE_WRAP_R,pt[E.wrapR]);if(e.texParameteri(C,e.TEXTURE_MAG_FILTER,Ne[E.magFilter]),e.texParameteri(C,e.TEXTURE_MIN_FILTER,Ne[E.minFilter]),E.compareFunction)e.texParameteri(C,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(C,e.TEXTURE_COMPARE_FUNC,Ue[E.compareFunction]);if(t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Vt)return;if(E.minFilter!==Ps&&E.minFilter!==Vi)return;if(E.type===si&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){let k=t.get("EXT_texture_filter_anisotropic");e.texParameterf(C,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,r.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function ae(C,E){let k=!1;if(C.__webglInit===void 0)C.__webglInit=!0,E.addEventListener("dispose",I),R(E);let he=E.source,le=m.get(he);if(le===void 0)le={},m.set(he,le);let _e=ie(E);if(_e!==C.__cacheKey){if(le[_e]===void 0)le[_e]={texture:e.createTexture(),usedTimes:0},o.memory.textures++,k=!0;le[_e].usedTimes++;let be=le[C.__cacheKey];if(be!==void 0){if(le[C.__cacheKey].usedTimes--,be.usedTimes===0)N(E)}C.__cacheKey=_e,C.__webglTexture=le[_e].texture}return k}function fe(C,E,k){return Math.floor(Math.floor(C/k)/E)}function de(C,E,k,he){let _e=C.updateRanges;if(_e.length===0)i.texSubImage2D(e.TEXTURE_2D,0,0,0,E.width,E.height,k,he,E.data);else{_e.sort((D,se)=>D.start-se.start);let be=0;for(let D=1;D<_e.length;D++){let se=_e[be],j=_e[D],me=se.start+se.count,ge=fe(j.start,E.width,4),Ae=fe(se.start,E.width,4);if(j.start<=me+1&&ge===Ae&&fe(j.start+j.count-1,E.width,4)===ge)se.count=Math.max(se.count,j.start+j.count-se.start);else++be,_e[be]=j}_e.length=be+1;let Q=i.getParameter(e.UNPACK_ROW_LENGTH),oe=i.getParameter(e.UNPACK_SKIP_PIXELS),ve=i.getParameter(e.UNPACK_SKIP_ROWS);i.pixelStorei(e.UNPACK_ROW_LENGTH,E.width);for(let D=0,se=_e.length;D<se;D++){let j=_e[D],me=Math.floor(j.start/4),ge=Math.ceil(j.count/4),Ae=me%E.width,Qe=Math.floor(me/E.width),Ze=ge,Ie=1;i.pixelStorei(e.UNPACK_SKIP_PIXELS,Ae),i.pixelStorei(e.UNPACK_SKIP_ROWS,Qe),i.texSubImage2D(e.TEXTURE_2D,0,Ae,Qe,Ze,1,k,he,E.data)}C.clearUpdateRanges(),i.pixelStorei(e.UNPACK_ROW_LENGTH,Q),i.pixelStorei(e.UNPACK_SKIP_PIXELS,oe),i.pixelStorei(e.UNPACK_SKIP_ROWS,ve)}}function Pe(C,E,k){let he=e.TEXTURE_2D;if(E.isDataArrayTexture||E.isCompressedArrayTexture)he=e.TEXTURE_2D_ARRAY;if(E.isData3DTexture)he=e.TEXTURE_3D;let le=ae(C,E),_e=E.source;i.bindTexture(he,C.__webglTexture,e.TEXTURE0+k);let be=n.get(_e);if(_e.version!==be.__version||le===!0){if(i.activeTexture(e.TEXTURE0+k),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){let Ie=it.getPrimaries(it.workingColorSpace),je=E.colorSpace===gn?null:it.getPrimaries(E.colorSpace),dt=E.colorSpace===gn||Ie===je?e.NONE:e.BROWSER_DEFAULT_WEBGL;i.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,dt)}i.pixelStorei(e.UNPACK_ALIGNMENT,E.unpackAlignment);let oe=y(E.image,!1,r.maxTextureSize);oe=nt(E,oe);let ve=s.convert(E.format,E.colorSpace),D=s.convert(E.type),se=w(E.internalFormat,ve,D,E.normalized,E.colorSpace,E.isVideoTexture);ot(he,E);let j,me=E.mipmaps,ge=E.isVideoTexture!==!0,Ae=be.__version===void 0||le===!0,Qe=_e.dataReady,Ze=S(E,oe);if(E.isDepthTexture){if(se=x(E.format===nn,E.type),Ae)if(ge)i.texStorage2D(e.TEXTURE_2D,1,se,oe.width,oe.height);else i.texImage2D(e.TEXTURE_2D,0,se,oe.width,oe.height,0,ve,D,null)}else if(E.isDataTexture)if(me.length>0){if(ge&&Ae)i.texStorage2D(e.TEXTURE_2D,Ze,se,me[0].width,me[0].height);for(let Ie=0,je=me.length;Ie<je;Ie++)if(j=me[Ie],ge){if(Qe)i.texSubImage2D(e.TEXTURE_2D,Ie,0,0,j.width,j.height,ve,D,j.data)}else i.texImage2D(e.TEXTURE_2D,Ie,se,j.width,j.height,0,ve,D,j.data);E.generateMipmaps=!1}else if(ge){if(Ae)i.texStorage2D(e.TEXTURE_2D,Ze,se,oe.width,oe.height);if(Qe)de(E,oe,ve,D)}else i.texImage2D(e.TEXTURE_2D,0,se,oe.width,oe.height,0,ve,D,oe.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){if(ge&&Ae)i.texStorage3D(e.TEXTURE_2D_ARRAY,Ze,se,me[0].width,me[0].height,oe.depth);for(let Ie=0,je=me.length;Ie<je;Ie++)if(j=me[Ie],E.format!==vi)if(ve!==null)if(ge){if(Qe)if(E.layerUpdates.size>0){let dt=tf(j.width,j.height,E.format,E.type);for(let Le of E.layerUpdates){let Nt=j.data.subarray(Le*dt/j.data.BYTES_PER_ELEMENT,(Le+1)*dt/j.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,Ie,0,0,Le,j.width,j.height,1,ve,Nt)}}else i.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,Ie,0,0,0,j.width,j.height,oe.depth,ve,j.data)}else i.compressedTexImage3D(e.TEXTURE_2D_ARRAY,Ie,se,j.width,j.height,oe.depth,0,j.data,0,0);else xe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(ge){if(Qe)i.texSubImage3D(e.TEXTURE_2D_ARRAY,Ie,0,0,0,j.width,j.height,oe.depth,ve,D,j.data)}else i.texImage3D(e.TEXTURE_2D_ARRAY,Ie,se,j.width,j.height,oe.depth,0,ve,D,j.data);if(E.layerUpdates.size>0)E.clearLayerUpdates()}else{if(ge&&Ae)i.texStorage2D(e.TEXTURE_2D,Ze,se,me[0].width,me[0].height);for(let Ie=0,je=me.length;Ie<je;Ie++)if(j=me[Ie],E.format!==vi)if(ve!==null)if(ge){if(Qe)i.compressedTexSubImage2D(e.TEXTURE_2D,Ie,0,0,j.width,j.height,ve,j.data)}else i.compressedTexImage2D(e.TEXTURE_2D,Ie,se,j.width,j.height,0,j.data);else xe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(ge){if(Qe)i.texSubImage2D(e.TEXTURE_2D,Ie,0,0,j.width,j.height,ve,D,j.data)}else i.texImage2D(e.TEXTURE_2D,Ie,se,j.width,j.height,0,ve,D,j.data)}else if(E.isDataArrayTexture)if(ge){if(Ae)i.texStorage3D(e.TEXTURE_2D_ARRAY,Ze,se,oe.width,oe.height,oe.depth);if(Qe)if(E.layerUpdates.size>0){let Ie=tf(oe.width,oe.height,E.format,E.type);for(let je of E.layerUpdates){let dt=oe.data.subarray(je*Ie/oe.data.BYTES_PER_ELEMENT,(je+1)*Ie/oe.data.BYTES_PER_ELEMENT);i.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,je,oe.width,oe.height,1,ve,D,dt)}E.clearLayerUpdates()}else i.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,oe.width,oe.height,oe.depth,ve,D,oe.data)}else i.texImage3D(e.TEXTURE_2D_ARRAY,0,se,oe.width,oe.height,oe.depth,0,ve,D,oe.data);else if(E.isData3DTexture)if(ge){if(Ae)i.texStorage3D(e.TEXTURE_3D,Ze,se,oe.width,oe.height,oe.depth);if(Qe)i.texSubImage3D(e.TEXTURE_3D,0,0,0,0,oe.width,oe.height,oe.depth,ve,D,oe.data)}else i.texImage3D(e.TEXTURE_3D,0,se,oe.width,oe.height,oe.depth,0,ve,D,oe.data);else if(E.isFramebufferTexture){if(Ae)if(ge)i.texStorage2D(e.TEXTURE_2D,Ze,se,oe.width,oe.height);else{let Ie=oe.width,je=oe.height;for(let dt=0;dt<Ze;dt++)i.texImage2D(e.TEXTURE_2D,dt,se,Ie,je,0,ve,D,null),Ie>>=1,je>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in e){let Ie=e.canvas;if(!Ie.hasAttribute("layoutsubtree"))Ie.setAttribute("layoutsubtree","true");if(oe.parentNode!==Ie){Ie.appendChild(oe),u.add(E),Ie.onpaint=(je)=>{let dt=je.changedElements;for(let Le of u)if(dt.includes(Le.image))Le.needsUpdate=!0},Ie.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,oe);else{let{RGBA:dt,RGBA:Le,UNSIGNED_BYTE:Nt}=e;e.texElementImage2D(e.TEXTURE_2D,0,dt,Le,Nt,oe)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(me.length>0){if(ge&&Ae){let Ie=fi(me[0]);i.texStorage2D(e.TEXTURE_2D,Ze,se,Ie.width,Ie.height)}for(let Ie=0,je=me.length;Ie<je;Ie++)if(j=me[Ie],ge){if(Qe)i.texSubImage2D(e.TEXTURE_2D,Ie,0,0,ve,D,j)}else i.texImage2D(e.TEXTURE_2D,Ie,se,ve,D,j);E.generateMipmaps=!1}else if(ge){if(Ae){let Ie=fi(oe);i.texStorage2D(e.TEXTURE_2D,Ze,se,Ie.width,Ie.height)}if(Qe)i.texSubImage2D(e.TEXTURE_2D,0,0,0,ve,D,oe)}else i.texImage2D(e.TEXTURE_2D,0,se,ve,D,oe);if(v(E)&&E.mipmapsAutoUpdate===!0)M(he);if(be.__version=_e.version,E.onUpdate)E.onUpdate(E)}C.__version=E.version}function Fe(C,E,k){if(E.image.length!==6)return;let he=ae(C,E),le=E.source;i.bindTexture(e.TEXTURE_CUBE_MAP,C.__webglTexture,e.TEXTURE0+k);let _e=n.get(le);if(le.version!==_e.__version||he===!0){i.activeTexture(e.TEXTURE0+k);let be=it.getPrimaries(it.workingColorSpace),Q=E.colorSpace===gn?null:it.getPrimaries(E.colorSpace),oe=E.colorSpace===gn||be===Q?e.NONE:e.BROWSER_DEFAULT_WEBGL;i.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(e.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,oe);let ve=E.isCompressedTexture||E.image[0].isCompressedTexture,D=E.image[0]&&E.image[0].isDataTexture,se=[];for(let Le=0;Le<6;Le++){if(!ve&&!D)se[Le]=y(E.image[Le],!0,r.maxCubemapSize);else se[Le]=D?E.image[Le].image:E.image[Le];se[Le]=nt(E,se[Le])}let j=se[0],me=s.convert(E.format,E.colorSpace),ge=s.convert(E.type),Ae=w(E.internalFormat,me,ge,E.normalized,E.colorSpace),Qe=E.isVideoTexture!==!0,Ze=_e.__version===void 0||he===!0,Ie=le.dataReady,je=S(E,j);ot(e.TEXTURE_CUBE_MAP,E);let dt;if(E.isDepthTexture){if(Ae=x(E.format===nn,E.type),Ze)if(Qe)i.texStorage2D(e.TEXTURE_CUBE_MAP,1,Ae,j.width,j.height);else for(let Le=0;Le<6;Le++)i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Le,0,Ae,j.width,j.height,0,me,ge,null)}else if(ve){if(Qe&&Ze)i.texStorage2D(e.TEXTURE_CUBE_MAP,je,Ae,j.width,j.height);for(let Le=0;Le<6;Le++){dt=se[Le].mipmaps;for(let Nt=0;Nt<dt.length;Nt++){let _i=dt[Nt];if(E.format!==vi)if(me!==null)if(Qe){if(Ie)i.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Le,Nt,0,0,_i.width,_i.height,me,_i.data)}else i.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Le,Nt,Ae,_i.width,_i.height,0,_i.data);else xe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()");else if(Qe){if(Ie)i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Le,Nt,0,0,_i.width,_i.height,me,ge,_i.data)}else i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Le,Nt,Ae,_i.width,_i.height,0,me,ge,_i.data)}}}else{if(dt=E.mipmaps,Qe&&Ze){if(dt.length>0)je++;let Le=fi(se[0]);i.texStorage2D(e.TEXTURE_CUBE_MAP,je,Ae,Le.width,Le.height)}for(let Le=0;Le<6;Le++)if(D){if(Qe){if(Ie)i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Le,0,0,0,se[Le].width,se[Le].height,me,ge,se[Le].data)}else i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Le,0,Ae,se[Le].width,se[Le].height,0,me,ge,se[Le].data);for(let Nt=0;Nt<dt.length;Nt++){let Jn=dt[Nt].image[Le].image;if(Qe){if(Ie)i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Le,Nt+1,0,0,Jn.width,Jn.height,me,ge,Jn.data)}else i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Le,Nt+1,Ae,Jn.width,Jn.height,0,me,ge,Jn.data)}}else{if(Qe){if(Ie)i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Le,0,0,0,me,ge,se[Le])}else i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Le,0,Ae,me,ge,se[Le]);for(let Nt=0;Nt<dt.length;Nt++){let _i=dt[Nt];if(Qe){if(Ie)i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Le,Nt+1,0,0,me,ge,_i.image[Le])}else i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Le,Nt+1,Ae,me,ge,_i.image[Le])}}}if(v(E)&&E.mipmapsAutoUpdate===!0)M(e.TEXTURE_CUBE_MAP);if(_e.__version=le.version,E.onUpdate)E.onUpdate(E)}C.__version=E.version}function $e(C,E,k,he,le,_e){let be=s.convert(k.format,k.colorSpace),Q=s.convert(k.type),oe=w(k.internalFormat,be,Q,k.normalized,k.colorSpace),ve=n.get(E),D=n.get(k);if(D.__renderTarget=E,!ve.__hasExternalTextures){let se=Math.max(1,E.width>>_e),j=Math.max(1,E.height>>_e);if(le===e.TEXTURE_3D||le===e.TEXTURE_2D_ARRAY)i.texImage3D(le,_e,oe,se,j,E.depth,0,be,Q,null);else i.texImage2D(le,_e,oe,se,j,0,be,Q,null)}if(i.bindFramebuffer(e.FRAMEBUFFER,C),Lt(E))a.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,he,le,D.__webglTexture,0,Re(E));else if(le===e.TEXTURE_2D||le>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&le<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)e.framebufferTexture2D(e.FRAMEBUFFER,he,le,D.__webglTexture,_e);i.bindFramebuffer(e.FRAMEBUFFER,null)}function We(C,E,k){if(e.bindRenderbuffer(e.RENDERBUFFER,C),E.depthBuffer){let he=E.depthTexture,le=he&&he.isDepthTexture?he.type:null,_e=x(E.stencilBuffer,le),be=E.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(Lt(E))a.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Re(E),_e,E.width,E.height);else if(k)e.renderbufferStorageMultisample(e.RENDERBUFFER,Re(E),_e,E.width,E.height);else e.renderbufferStorage(e.RENDERBUFFER,_e,E.width,E.height);e.framebufferRenderbuffer(e.FRAMEBUFFER,be,e.RENDERBUFFER,C)}else{let he=E.textures;for(let le=0;le<he.length;le++){let _e=he[le],be=s.convert(_e.format,_e.colorSpace),Q=s.convert(_e.type),oe=w(_e.internalFormat,be,Q,_e.normalized,_e.colorSpace);if(Lt(E))a.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Re(E),oe,E.width,E.height);else if(k)e.renderbufferStorageMultisample(e.RENDERBUFFER,Re(E),oe,E.width,E.height);else e.renderbufferStorage(e.RENDERBUFFER,oe,E.width,E.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function ft(C,E,k){let he=E.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(e.FRAMEBUFFER,C),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let le=n.get(E.depthTexture);le.__renderTarget=E;let _e=he?E.depthTexture.image[0]:E.depthTexture.image;if(!le.__webglTexture||_e.width!==E.width||_e.height!==E.height)_e.width=E.width,_e.height=E.height,E.depthTexture.needsUpdate=!0;if(he)we(E.depthTexture,0);else Me(E.depthTexture,0);let be=le.__webglTexture,Q=Re(E),oe=he?e.TEXTURE_CUBE_MAP_POSITIVE_X+k:e.TEXTURE_2D,ve=E.depthTexture.format===nn?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(E.depthTexture.format===Zi)if(Lt(E))a.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,ve,oe,be,0,Q);else e.framebufferTexture2D(e.FRAMEBUFFER,ve,oe,be,0);else if(E.depthTexture.format===nn)if(Lt(E))a.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,ve,oe,be,0,Q);else e.framebufferTexture2D(e.FRAMEBUFFER,ve,oe,be,0);else throw Error("THREE.WebGLTextures: Unknown depthTexture format.")}function mt(C){let E=n.get(C),k=C.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==C.depthTexture){let he=C.depthTexture;if(E.__depthDisposeCallback)E.__depthDisposeCallback();if(he){let le=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,he.removeEventListener("dispose",le)};he.addEventListener("dispose",le),E.__depthDisposeCallback=le}E.__boundDepthTexture=he}if(C.depthTexture&&!E.__autoAllocateDepthBuffer)if(k)for(let he=0;he<6;he++)ft(E.__webglFramebuffer[he],C,he);else if(C.texture.mipmaps.length>0)ft(E.__webglFramebuffer[0],C,0);else ft(E.__webglFramebuffer,C,0);else if(k){E.__webglDepthbuffer=[];for(let he=0;he<6;he++)if(i.bindFramebuffer(e.FRAMEBUFFER,E.__webglFramebuffer[he]),E.__webglDepthbuffer[he]===void 0)E.__webglDepthbuffer[he]=e.createRenderbuffer(),We(E.__webglDepthbuffer[he],C,!1);else{let le=C.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,_e=E.__webglDepthbuffer[he];e.bindRenderbuffer(e.RENDERBUFFER,_e),e.framebufferRenderbuffer(e.FRAMEBUFFER,le,e.RENDERBUFFER,_e)}}else{if(C.texture.mipmaps.length>0)i.bindFramebuffer(e.FRAMEBUFFER,E.__webglFramebuffer[0]);else i.bindFramebuffer(e.FRAMEBUFFER,E.__webglFramebuffer);if(E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=e.createRenderbuffer(),We(E.__webglDepthbuffer,C,!1);else{let le=C.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,_e=E.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,_e),e.framebufferRenderbuffer(e.FRAMEBUFFER,le,e.RENDERBUFFER,_e)}}i.bindFramebuffer(e.FRAMEBUFFER,null)}function Tt(C,E,k){let he=n.get(C);if(E!==void 0)$e(he.__webglFramebuffer,C,C.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0);if(k!==void 0)mt(C)}function B(C){let E=C.texture,k=n.get(C),he=n.get(E);C.addEventListener("dispose",O),R(C);let le=C.textures,_e=C.isWebGLCubeRenderTarget===!0,be=le.length>1;if(!be){if(he.__webglTexture===void 0)he.__webglTexture=e.createTexture();he.__version=E.version,o.memory.textures++}if(_e){k.__webglFramebuffer=[];for(let Q=0;Q<6;Q++)if(E.mipmaps.length>0){k.__webglFramebuffer[Q]=[];for(let oe=0;oe<E.mipmaps.length;oe++)k.__webglFramebuffer[Q][oe]=e.createFramebuffer()}else k.__webglFramebuffer[Q]=e.createFramebuffer()}else{if(E.mipmaps.length>0){k.__webglFramebuffer=[];for(let Q=0;Q<E.mipmaps.length;Q++)k.__webglFramebuffer[Q]=e.createFramebuffer()}else k.__webglFramebuffer=e.createFramebuffer();if(be)for(let Q=0,oe=le.length;Q<oe;Q++){let ve=n.get(le[Q]);if(ve.__webglTexture===void 0)ve.__webglTexture=e.createTexture(),o.memory.textures++}if(C.samples>0&&Lt(C)===!1){k.__webglMultisampledFramebuffer=e.createFramebuffer(),k.__webglColorRenderbuffer=[],i.bindFramebuffer(e.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let Q=0;Q<le.length;Q++){let oe=le[Q];k.__webglColorRenderbuffer[Q]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,k.__webglColorRenderbuffer[Q]);let ve=s.convert(oe.format,oe.colorSpace),D=s.convert(oe.type),se=w(oe.internalFormat,ve,D,oe.normalized,oe.colorSpace,C.isXRRenderTarget===!0),j=Re(C);e.renderbufferStorageMultisample(e.RENDERBUFFER,j,se,C.width,C.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+Q,e.RENDERBUFFER,k.__webglColorRenderbuffer[Q])}if(e.bindRenderbuffer(e.RENDERBUFFER,null),C.depthBuffer)k.__webglDepthRenderbuffer=e.createRenderbuffer(),We(k.__webglDepthRenderbuffer,C,!0);i.bindFramebuffer(e.FRAMEBUFFER,null)}}if(_e){i.bindTexture(e.TEXTURE_CUBE_MAP,he.__webglTexture),ot(e.TEXTURE_CUBE_MAP,E);for(let Q=0;Q<6;Q++)if(E.mipmaps.length>0)for(let oe=0;oe<E.mipmaps.length;oe++)$e(k.__webglFramebuffer[Q][oe],C,E,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+Q,oe);else $e(k.__webglFramebuffer[Q],C,E,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0);if(v(E))M(e.TEXTURE_CUBE_MAP);else if(E.mipmaps.length>0)e.texParameteri(e.TEXTURE_CUBE_MAP,e.TEXTURE_MAX_LEVEL,E.mipmaps.length-1);i.unbindTexture()}else if(be){for(let Q=0,oe=le.length;Q<oe;Q++){let ve=le[Q],D=n.get(ve),se=e.TEXTURE_2D;if(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)se=C.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY;if(i.bindTexture(se,D.__webglTexture),ot(se,ve),$e(k.__webglFramebuffer,C,ve,e.COLOR_ATTACHMENT0+Q,se,0),v(ve))M(se)}i.unbindTexture()}else{let Q=e.TEXTURE_2D;if(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)Q=C.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY;if(i.bindTexture(Q,he.__webglTexture),ot(Q,E),E.mipmaps.length>0)for(let oe=0;oe<E.mipmaps.length;oe++)$e(k.__webglFramebuffer[oe],C,E,e.COLOR_ATTACHMENT0,Q,oe);else $e(k.__webglFramebuffer,C,E,e.COLOR_ATTACHMENT0,Q,0);if(v(E))M(Q);else if(E.mipmaps.length>0)e.texParameteri(Q,e.TEXTURE_MAX_LEVEL,E.mipmaps.length-1);i.unbindTexture()}if(C.depthBuffer)mt(C)}function hi(C){let E=C.textures;for(let k=0,he=E.length;k<he;k++){let le=E[k];if(v(le)&&le.mipmapsAutoUpdate===!0){let _e=b(C),be=n.get(le).__webglTexture;i.bindTexture(_e,be),M(_e),i.unbindTexture()}}}let ut=[];function ni(C){if(C.samples>0){if(Lt(C)===!1){let{textures:E,width:k,height:he}=C,le=e.COLOR_BUFFER_BIT,_e=C.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,be=n.get(C),Q=E.length>1;if(Q)for(let ve=0;ve<E.length;ve++)i.bindFramebuffer(e.FRAMEBUFFER,be.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+ve,e.RENDERBUFFER,null),i.bindFramebuffer(e.FRAMEBUFFER,be.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+ve,e.TEXTURE_2D,null,0);if(i.bindFramebuffer(e.READ_FRAMEBUFFER,be.__webglMultisampledFramebuffer),C.texture.mipmaps.length>0)i.bindFramebuffer(e.DRAW_FRAMEBUFFER,be.__webglFramebuffer[0]);else i.bindFramebuffer(e.DRAW_FRAMEBUFFER,be.__webglFramebuffer);for(let ve=0;ve<E.length;ve++){if(C.resolveDepthBuffer){if(C.depthBuffer)le|=e.DEPTH_BUFFER_BIT;if(C.stencilBuffer&&C.resolveStencilBuffer)le|=e.STENCIL_BUFFER_BIT}if(Q){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,be.__webglColorRenderbuffer[ve]);let D=n.get(E[ve]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,D,0)}if(e.blitFramebuffer(0,0,k,he,0,0,k,he,le,e.NEAREST),l===!0){if(ut.length=0,ut.push(e.COLOR_ATTACHMENT0+ve),C.depthBuffer&&C.storeMultisampledDepthBuffer===!1)ut.push(_e);e.invalidateFramebuffer(e.READ_FRAMEBUFFER,ut)}}if(i.bindFramebuffer(e.READ_FRAMEBUFFER,null),i.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),Q)for(let ve=0;ve<E.length;ve++){i.bindFramebuffer(e.FRAMEBUFFER,be.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+ve,e.RENDERBUFFER,be.__webglColorRenderbuffer[ve]);let D=n.get(E[ve]).__webglTexture;i.bindFramebuffer(e.FRAMEBUFFER,be.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+ve,e.TEXTURE_2D,D,0)}i.bindFramebuffer(e.DRAW_FRAMEBUFFER,be.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&l){let E=C.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[E])}}}function Re(C){return Math.min(r.maxSamples,C.samples)}function Lt(C){let E=n.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function et(C){let E=o.render.frame;if(h.get(C)!==E)h.set(C,E),C.update()}function nt(C,E){let{colorSpace:k,format:he,type:le}=C;if(C.isCompressedTexture===!0||C.isVideoTexture===!0)return E;if(k!==Zr&&k!==gn)if(it.getTransfer(k)===gt){if(he!==vi||le!==ri)xe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.")}else Be("WebGLTextures: Unsupported texture color space:",k);return E}function fi(C){if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement)c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height;else if(typeof VideoFrame<"u"&&C instanceof VideoFrame)c.width=C.displayWidth,c.height=C.displayHeight;else c.width=C.width,c.height=C.height;return c}this.allocateTextureUnit=X,this.resetTextureUnits=Y,this.getTextureUnits=K,this.setTextureUnits=pe,this.setTexture2D=Me,this.setTexture2DArray=Se,this.setTexture3D=ze,this.setTextureCube=we,this.rebindTextures=Tt,this.setupRenderTarget=B,this.updateRenderTargetMipmap=hi,this.updateMultisampleRenderTarget=ni,this.setupDepthRenderbuffer=mt,this.setupFrameBufferTexture=$e,this.useMultisampledRTT=Lt,this.dispose=Z}function lf(e,t){function i(n,r=gn){let s,o=it.getTransfer(r);if(n===ri)return e.UNSIGNED_BYTE;if(n===Ls)return e.UNSIGNED_SHORT_4_4_4_4;if(n===Ds)return e.UNSIGNED_SHORT_5_5_5_1;if(n===bl)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===El)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===Ml)return e.BYTE;if(n===Sl)return e.SHORT;if(n===jn)return e.UNSIGNED_SHORT;if(n===Is)return e.INT;if(n===ui)return e.UNSIGNED_INT;if(n===si)return e.FLOAT;if(n===Yt)return e.HALF_FLOAT;if(n===Tl)return e.ALPHA;if(n===wl)return e.RGB;if(n===vi)return e.RGBA;if(n===Zi)return e.DEPTH_COMPONENT;if(n===nn)return e.DEPTH_STENCIL;if(n===Ns)return e.RED;if(n===Wr)return e.RED_INTEGER;if(n===rn)return e.RG;if(n===Us)return e.RG_INTEGER;if(n===Fs)return e.RGBA_INTEGER;if(n===Bs||n===Os||n===zs||n===Gs)if(o===gt)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Bs)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Os)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===zs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Gs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Bs)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Os)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===zs)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Gs)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Jo||n===Ko||n===$o||n===Qo)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Jo)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ko)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===$o)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Qo)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===jo||n===ea||n===ta||n===ia||n===na||n===Xr||n===ra)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===jo||n===ea)return o===gt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===ta)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===ia)return s.COMPRESSED_R11_EAC;if(n===na)return s.COMPRESSED_SIGNED_R11_EAC;if(n===Xr)return s.COMPRESSED_RG11_EAC;if(n===ra)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===sa||n===oa||n===aa||n===la||n===ca||n===ha||n===fa||n===ua||n===da||n===pa||n===ma||n===ga||n===xa||n===_a)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===sa)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===oa)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===aa)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===la)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ca)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ha)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===fa)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ua)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===da)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===pa)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ma)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ga)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===xa)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===_a)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ya||n===va||n===Ma)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===ya)return o===gt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===va)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ma)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Sa||n===ba||n===qr||n===Ea)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===Sa)return s.COMPRESSED_RED_RGTC1_EXT;if(n===ba)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===qr)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ea)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;if(n===Cn)return e.UNSIGNED_INT_24_8;return e[n]!==void 0?e[n]:null}return{convert:i}}var Cv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Pv=`
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

}`;class cf{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new ho(e.texture);if(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)this.depthNear=e.depthNear,this.depthFar=e.depthFar;this.texture=i}}getMesh(e){if(this.texture!==null){if(this.mesh===null){let t=e.cameras[0].viewport,i=new Zt({vertexShader:Cv,fragmentShader:Pv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ne(new Pt(20,20),i)}}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class hf extends di{constructor(e,t){super();let i=this,n=null,r=1,s=null,o="local-floor",a=1,l=null,c=null,h=null,u=null,f=null,m=null,g=typeof XRWebGLBinding<"u",_=new cf,d={},p=t.getContextAttributes(),y=null,v=null,M=[],b=[],w=new W,x=null,S=null,R=new ii;R.viewport=new St;let U=new ii;U.viewport=new St;let I=[R,U],O=new Pc,te=null,P=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let ie=M[X];if(ie===void 0)ie=new Js,M[X]=ie;return ie.getTargetRaySpace()},this.getControllerGrip=function(X){let ie=M[X];if(ie===void 0)ie=new Js,M[X]=ie;return ie.getGripSpace()},this.getHand=function(X){let ie=M[X];if(ie===void 0)ie=new Js,M[X]=ie;return ie.getHandSpace()};function Z(X){let ie=b.indexOf(X.inputSource);if(ie===-1)return;let Me=M[ie];if(Me!==void 0)Me.update(X.inputSource,X.frame,l||s),Me.dispatchEvent({type:X.type,data:X.inputSource})}function L(){n.removeEventListener("select",Z),n.removeEventListener("selectstart",Z),n.removeEventListener("selectend",Z),n.removeEventListener("squeeze",Z),n.removeEventListener("squeezestart",Z),n.removeEventListener("squeezeend",Z),n.removeEventListener("end",L),n.removeEventListener("inputsourceschange",N);for(let X=0;X<M.length;X++){let ie=b[X];if(ie===null)continue;b[X]=null,M[X].disconnect(ie)}te=null,P=null,_.reset();for(let X in d)delete d[X];if(e.setRenderTarget(y),f=null,u=null,h=null,n=null,v=null,pe.stop(),i.isPresenting=!1,e.setPixelRatio(x),e.setSize(w.width,w.height,!1),S!==null){let X=S.camera;X.fov=S.fov,X.zoom=S.zoom,X.updateProjectionMatrix(),S=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){if(r=X,i.isPresenting===!0)xe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){if(o=X,i.isPresenting===!0)xe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||s},this.setReferenceSpace=function(X){l=X},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){if(h===null&&g)h=new XRWebGLBinding(n,t);return h},this.getFrame=function(){return m},this.getSession=function(){return n},this.setSession=async function(X){if(n=X,n!==null){if(y=e.getRenderTarget(),n.addEventListener("select",Z),n.addEventListener("selectstart",Z),n.addEventListener("selectend",Z),n.addEventListener("squeeze",Z),n.addEventListener("squeezestart",Z),n.addEventListener("squeezeend",Z),n.addEventListener("end",L),n.addEventListener("inputsourceschange",N),p.xrCompatible!==!0)await t.makeXRCompatible();if(x=e.getPixelRatio(),e.getSize(w),!(g&&("createProjectionLayer"in XRWebGLBinding.prototype))){let Me={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(n,t,Me),n.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new Wt(f.framebufferWidth,f.framebufferHeight,{format:vi,type:ri,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let Me=null,Se=null,ze=null;if(p.depth)ze=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Me=p.stencil?nn:Zi,Se=p.stencil?Cn:ui;let we={colorFormat:t.RGBA8,depthFormat:ze,scaleFactor:r};h=this.getBinding(),u=h.createProjectionLayer(we),n.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),v=new Wt(u.textureWidth,u.textureHeight,{format:vi,type:ri,depthTexture:new cn(u.textureWidth,u.textureHeight,Se,void 0,void 0,void 0,void 0,void 0,void 0,Me),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(a),l=null,s=await n.requestReferenceSpace(o),pe.setContext(n),pe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function N(X){for(let ie=0;ie<X.removed.length;ie++){let Me=X.removed[ie],Se=b.indexOf(Me);if(Se>=0)b[Se]=null,M[Se].disconnect(Me)}for(let ie=0;ie<X.added.length;ie++){let Me=X.added[ie],Se=b.indexOf(Me);if(Se===-1){for(let we=0;we<M.length;we++)if(we>=b.length){b.push(Me),Se=we;break}else if(b[we]===null){b[we]=Me,Se=we;break}if(Se===-1)break}let ze=M[Se];if(ze)ze.connect(Me)}}function ee(X,ie){if(ie===null)X.matrixWorld.copy(X.matrix);else X.matrixWorld.multiplyMatrices(ie.matrixWorld,X.matrix);X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(n===null)return;let{near:ie,far:Me}=X;if(_.texture!==null){if(_.depthNear>0)ie=_.depthNear;if(_.depthFar>0)Me=_.depthFar}if(O.near=U.near=R.near=ie,O.far=U.far=R.far=Me,te!==O.near||P!==O.far)n.updateRenderState({depthNear:O.near,depthFar:O.far}),te=O.near,P=O.far;O.layers.mask=X.layers.mask|6,R.layers.mask=O.layers.mask&-5,U.layers.mask=O.layers.mask&-3;let Se=X.parent,ze=O.cameras;ee(O,Se);for(let we=0;we<ze.length;we++)ee(ze[we],Se);if(O.projectionMatrix.copy(R.projectionMatrix),O.projectionMatrixInverse.copy(R.projectionMatrixInverse),S===null&&X.isPerspectiveCamera)S={camera:X,fov:X.fov,zoom:X.zoom};G(X,O,Se)};function G(X,ie,Me){if(Me===null)X.matrix.copy(ie.matrixWorld);else X.matrix.copy(Me.matrixWorld),X.matrix.invert(),X.matrix.multiply(ie.matrixWorld);if(X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(ie.projectionMatrix),X.projectionMatrixInverse.copy(ie.projectionMatrixInverse),X.isPerspectiveCamera)X.fov=ks*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1}this.getCamera=function(){return O},this.getFoveation=function(){if(u===null&&f===null)return;return a},this.setFoveation=function(X){if(a=X,u!==null)u.fixedFoveation=X;if(f!==null&&f.fixedFoveation!==void 0)f.fixedFoveation=X},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(O)},this.getCameraTexture=function(X){return d[X]};let Y=null;function K(X,ie){if(c=ie.getViewerPose(l||s),m=ie,c!==null){let Me=c.views;if(f!==null)e.setRenderTargetFramebuffer(v,f.framebuffer),e.setRenderTarget(v);let Se=!1;if(Me.length!==O.cameras.length)O.cameras.length=0,Se=!0;for(let Ne=0;Ne<Me.length;Ne++){let Ue=Me[Ne],ot=null;if(f!==null)ot=f.getViewport(Ue);else{let fe=h.getViewSubImage(u,Ue);if(ot=fe.viewport,Ne===0)e.setRenderTargetTextures(v,fe.colorTexture,fe.depthStencilTexture),e.setRenderTarget(v)}let ae=I[Ne];if(ae===void 0)ae=new ii,ae.layers.enable(Ne),ae.viewport=new St,I[Ne]=ae;if(ae.matrix.fromArray(Ue.transform.matrix),ae.matrix.decompose(ae.position,ae.quaternion,ae.scale),ae.projectionMatrix.fromArray(Ue.projectionMatrix),ae.projectionMatrixInverse.copy(ae.projectionMatrix).invert(),ae.viewport.set(ot.x,ot.y,ot.width,ot.height),Ne===0)O.matrix.copy(ae.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale);if(Se===!0)O.cameras.push(ae)}let ze=n.enabledFeatures;if(ze&&ze.includes("depth-sensing")&&n.depthUsage=="gpu-optimized"&&g){h=i.getBinding();let Ne=h.getDepthInformation(Me[0]);if(Ne&&Ne.isValid&&Ne.texture)_.init(Ne,n.renderState)}if(ze&&ze.includes("camera-access")&&g){e.state.unbindTexture(),h=i.getBinding();for(let Ne=0;Ne<Me.length;Ne++){let Ue=Me[Ne].camera;if(Ue){let ot=d[Ue];if(!ot)ot=new ho,d[Ue]=ot;let ae=h.getCameraImage(Ue);ot.sourceTexture=ae}}}}for(let Me=0;Me<M.length;Me++){let Se=b[Me],ze=M[Me];if(Se!==null&&ze!==void 0)ze.update(Se,ie,l||s)}if(Y)Y(X,ie);if(ie.detectedPlanes)i.dispatchEvent({type:"planesdetected",data:ie});m=null}let pe=new Dc;pe.setAnimationLoop(K),this.setAnimationLoop=function(X){Y=X},this.dispose=function(){}}}var Iv=new qe,cg=new Ke;cg.set(-1,0,0,0,1,0,0,0,1);function hg(e,t){function i(d,p){if(d.matrixAutoUpdate===!0)d.updateMatrix();p.value.copy(d.matrix)}function n(d,p){if(p.color.getRGB(d.fogColor.value,yc(e)),p.isFog)d.fogNear.value=p.near,d.fogFar.value=p.far;else if(p.isFogExp2)d.fogDensity.value=p.density}function r(d,p,y,v,M){if(p.isNodeMaterial)p.uniformsNeedUpdate=!1;else if(p.isMeshBasicMaterial)s(d,p);else if(p.isMeshLambertMaterial){if(s(d,p),p.envMap)d.envMapIntensity.value=p.envMapIntensity}else if(p.isMeshToonMaterial)s(d,p),u(d,p);else if(p.isMeshPhongMaterial){if(s(d,p),h(d,p),p.envMap)d.envMapIntensity.value=p.envMapIntensity}else if(p.isMeshStandardMaterial){if(s(d,p),f(d,p),p.isMeshPhysicalMaterial)m(d,p,M)}else if(p.isMeshMatcapMaterial)s(d,p),g(d,p);else if(p.isMeshDepthMaterial)s(d,p);else if(p.isMeshDistanceMaterial)s(d,p),_(d,p);else if(p.isMeshNormalMaterial)s(d,p);else if(p.isLineBasicMaterial){if(o(d,p),p.isLineDashedMaterial)a(d,p)}else if(p.isPointsMaterial)l(d,p,y,v);else if(p.isSpriteMaterial)c(d,p);else if(p.isShadowMaterial)d.color.value.copy(p.color),d.opacity.value=p.opacity;else if(p.isShaderMaterial)p.uniformsNeedUpdate=!1}function s(d,p){if(d.opacity.value=p.opacity,p.color)d.diffuse.value.copy(p.color);if(p.emissive)d.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity);if(p.map)d.map.value=p.map,i(p.map,d.mapTransform);if(p.alphaMap)d.alphaMap.value=p.alphaMap,i(p.alphaMap,d.alphaMapTransform);if(p.bumpMap){if(d.bumpMap.value=p.bumpMap,i(p.bumpMap,d.bumpMapTransform),d.bumpScale.value=p.bumpScale,p.side===Bt)d.bumpScale.value*=-1}if(p.normalMap){if(d.normalMap.value=p.normalMap,i(p.normalMap,d.normalMapTransform),d.normalScale.value.copy(p.normalScale),p.side===Bt)d.normalScale.value.negate()}if(p.displacementMap)d.displacementMap.value=p.displacementMap,i(p.displacementMap,d.displacementMapTransform),d.displacementScale.value=p.displacementScale,d.displacementBias.value=p.displacementBias;if(p.emissiveMap)d.emissiveMap.value=p.emissiveMap,i(p.emissiveMap,d.emissiveMapTransform);if(p.specularMap)d.specularMap.value=p.specularMap,i(p.specularMap,d.specularMapTransform);if(p.alphaTest>0)d.alphaTest.value=p.alphaTest;let y=t.get(p),{envMap:v,envMapRotation:M}=y;if(v){if(d.envMap.value=v,d.envMapRotation.value.setFromMatrix4(Iv.makeRotationFromEuler(M)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1)d.envMapRotation.value.premultiply(cg);d.reflectivity.value=p.reflectivity,d.ior.value=p.ior,d.refractionRatio.value=p.refractionRatio}if(p.lightMap)d.lightMap.value=p.lightMap,d.lightMapIntensity.value=p.lightMapIntensity,i(p.lightMap,d.lightMapTransform);if(p.aoMap)d.aoMap.value=p.aoMap,d.aoMapIntensity.value=p.aoMapIntensity,i(p.aoMap,d.aoMapTransform)}function o(d,p){if(d.diffuse.value.copy(p.color),d.opacity.value=p.opacity,p.map)d.map.value=p.map,i(p.map,d.mapTransform)}function a(d,p){d.dashSize.value=p.dashSize,d.totalSize.value=p.dashSize+p.gapSize,d.scale.value=p.scale}function l(d,p,y,v){if(d.diffuse.value.copy(p.color),d.opacity.value=p.opacity,d.size.value=p.size*y,d.scale.value=v*0.5,p.map)d.map.value=p.map,i(p.map,d.uvTransform);if(p.alphaMap)d.alphaMap.value=p.alphaMap,i(p.alphaMap,d.alphaMapTransform);if(p.alphaTest>0)d.alphaTest.value=p.alphaTest}function c(d,p){if(d.diffuse.value.copy(p.color),d.opacity.value=p.opacity,d.rotation.value=p.rotation,p.map)d.map.value=p.map,i(p.map,d.mapTransform);if(p.alphaMap)d.alphaMap.value=p.alphaMap,i(p.alphaMap,d.alphaMapTransform);if(p.alphaTest>0)d.alphaTest.value=p.alphaTest}function h(d,p){d.specular.value.copy(p.specular),d.shininess.value=Math.max(p.shininess,0.0001)}function u(d,p){if(p.gradientMap)d.gradientMap.value=p.gradientMap}function f(d,p){if(d.metalness.value=p.metalness,p.metalnessMap)d.metalnessMap.value=p.metalnessMap,i(p.metalnessMap,d.metalnessMapTransform);if(d.roughness.value=p.roughness,p.roughnessMap)d.roughnessMap.value=p.roughnessMap,i(p.roughnessMap,d.roughnessMapTransform);if(p.envMap)d.envMapIntensity.value=p.envMapIntensity}function m(d,p,y){if(d.ior.value=p.ior,p.diffuseRoughness>0){if(d.diffuseRoughness.value=p.diffuseRoughness,p.diffuseRoughnessMap)d.diffuseRoughnessMap.value=p.diffuseRoughnessMap,i(p.diffuseRoughnessMap,d.diffuseRoughnessMapTransform)}if(p.sheen>0){if(d.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),d.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap)d.sheenColorMap.value=p.sheenColorMap,i(p.sheenColorMap,d.sheenColorMapTransform);if(p.sheenRoughnessMap)d.sheenRoughnessMap.value=p.sheenRoughnessMap,i(p.sheenRoughnessMap,d.sheenRoughnessMapTransform)}if(p.clearcoat>0){if(d.clearcoat.value=p.clearcoat,d.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap)d.clearcoatMap.value=p.clearcoatMap,i(p.clearcoatMap,d.clearcoatMapTransform);if(p.clearcoatRoughnessMap)d.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,i(p.clearcoatRoughnessMap,d.clearcoatRoughnessMapTransform);if(p.clearcoatNormalMap){if(d.clearcoatNormalMap.value=p.clearcoatNormalMap,i(p.clearcoatNormalMap,d.clearcoatNormalMapTransform),d.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Bt)d.clearcoatNormalScale.value.negate()}}if(p.dispersion>0)d.dispersion.value=p.dispersion;if(p.retroreflectivity>0)d.retroreflectivity.value=p.retroreflectivity;if(p.iridescence>0){if(d.iridescence.value=p.iridescence,d.iridescenceIOR.value=p.iridescenceIOR,d.iridescenceThicknessMinimum.value=p.iridescenceThicknessMinimum,d.iridescenceThicknessMaximum.value=p.iridescenceThicknessMaximum,p.iridescenceMap)d.iridescenceMap.value=p.iridescenceMap,i(p.iridescenceMap,d.iridescenceMapTransform);if(p.iridescenceThicknessMap)d.iridescenceThicknessMap.value=p.iridescenceThicknessMap,i(p.iridescenceThicknessMap,d.iridescenceThicknessMapTransform)}if(p.transmission>0){if(d.transmission.value=p.transmission,d.transmissionSamplerMap.value=y.texture,d.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap)d.transmissionMap.value=p.transmissionMap,i(p.transmissionMap,d.transmissionMapTransform);if(d.thickness.value=p.thickness,p.thicknessMap)d.thicknessMap.value=p.thicknessMap,i(p.thicknessMap,d.thicknessMapTransform);d.attenuationDistance.value=p.attenuationDistance,d.attenuationColor.value.copy(p.attenuationColor)}if(p.anisotropy>0){if(d.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap)d.anisotropyMap.value=p.anisotropyMap,i(p.anisotropyMap,d.anisotropyMapTransform)}if(d.specularIntensity.value=p.specularIntensity,d.specularColor.value.copy(p.specularColor),p.specularColorMap)d.specularColorMap.value=p.specularColorMap,i(p.specularColorMap,d.specularColorMapTransform);if(p.specularIntensityMap)d.specularIntensityMap.value=p.specularIntensityMap,i(p.specularIntensityMap,d.specularIntensityMapTransform)}function g(d,p){if(p.matcap)d.matcap.value=p.matcap}function _(d,p){let y=t.get(p).light;d.referencePosition.value.setFromMatrixPosition(y.matrixWorld),d.nearDistance.value=y.shadow.camera.near,d.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function fg(e,t,i,n){let r={},s={};function o(y,v){let M=v.program;n.uniformBlockBinding(y,M,r[y.id])}function a(y,v){let M=r[y.id];if(M===void 0)g(y),M=l(y),r[y.id]=M,y.addEventListener("dispose",d);let b=v.program;n.updateUBOMapping(y,b);let w=t.render.frame;if(s[y.id]!==w)c(y),s[y.id]=w}function l(y){let v=e.createBuffer(),{__size:M,usage:b}=y;return e.bindBuffer(e.UNIFORM_BUFFER,v),e.bufferData(e.UNIFORM_BUFFER,M,b),e.bindBuffer(e.UNIFORM_BUFFER,null),v}function c(y){let v=r[y.id],{uniforms:M,__cache:b}=y;e.bindBuffer(e.UNIFORM_BUFFER,v);for(let w=0,x=M.length;w<x;w++){let S=M[w];if(Array.isArray(S))for(let R=0,U=S.length;R<U;R++)h(S[R],w,R,b);else h(S,w,0,b)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function h(y,v,M,b){if(f(y,v,M,b)===!0){let{__offset:w,value:x}=y;if(Array.isArray(x)){let S=0;for(let R=0;R<x.length;R++){let U=x[R],I=_(U,!0);u(U,y.__data,S),S+=I.storage/Float32Array.BYTES_PER_ELEMENT}}else u(x,y.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,w,y.__data)}}function u(y,v,M){if(typeof y==="number"||typeof y==="boolean")v[M]=y;else if(y.isMatrix3)v[M]=y.elements[0],v[M+1]=y.elements[1],v[M+2]=y.elements[2],v[M+3]=0,v[M+4]=y.elements[3],v[M+5]=y.elements[4],v[M+6]=y.elements[5],v[M+7]=0,v[M+8]=y.elements[6],v[M+9]=y.elements[7],v[M+10]=y.elements[8],v[M+11]=0;else if(ArrayBuffer.isView(y))v.set(y.subarray(0,v.length-M),M);else y.toArray(v,M)}function f(y,v,M,b){let w=y.value,x=v+"_"+M;if(Array.isArray(w)){if(b[x]===void 0)b[x]=[];let S=b[x],R=!1;for(let U=0;U<w.length;U++)if(m(w[U],S,U)===!0)R=!0;return R}return m(w,b,x)}function m(y,v,M){if(v[M]===void 0){if(typeof y==="number"||typeof y==="boolean")v[M]=y;else if(ArrayBuffer.isView(y))v[M]=y.slice();else v[M]=y.clone();return!0}else{let b=v[M];if(typeof y==="number"||typeof y==="boolean"){if(b!==y)return v[M]=y,!0}else if(ArrayBuffer.isView(y))return!0;else if(b.equals(y)===!1)return b.copy(y),!0}return!1}function g(y){let v=y.uniforms,M=0,b=16;for(let x=0,S=v.length;x<S;x++){let R=Array.isArray(v[x])?v[x]:[v[x]];for(let U=0,I=R.length;U<I;U++){let O=R[U],te=Array.isArray(O.value)?O.value:[O.value],P=Array.isArray(v[x])||Array.isArray(O.value),Z=M;for(let N=0,ee=te.length;N<ee;N++){let G=te[N],Y=_(G,P),K=M%b,pe=K%Y.boundary,X=K+pe;if(M+=pe,X!==0&&b-X<Y.storage)M+=b-X;if(N===0)Z=M;M+=Y.storage}let L=O.type==="int"?Int32Array:O.type==="uint"?Uint32Array:Float32Array;O.__data=new L((M-Z)/Float32Array.BYTES_PER_ELEMENT),O.__offset=Z}}let w=M%b;if(w>0)M+=b-w;return y.__size=M,y.__cache={},this}function _(y,v){let M={boundary:0,storage:0};if(typeof y==="number"||typeof y==="boolean")M.boundary=4,M.storage=4;else if(y.isVector2)M.boundary=8,M.storage=8;else if(y.isVector3||y.isColor)M.boundary=16,M.storage=12;else if(y.isVector4)M.boundary=16,M.storage=16;else if(y.isMatrix3)M.boundary=16,M.storage=48;else if(y.isMatrix4)M.boundary=16,M.storage=64;else if(y.isTexture)xe("WebGLRenderer: Texture samplers can not be part of an uniforms group.");else if(ArrayBuffer.isView(y))M.boundary=16,M.storage=y.byteLength;else xe("WebGLRenderer: Unsupported uniform value type.",y);if(v===!0)M.boundary=16,M.storage=Math.ceil(M.storage/16)*16;return M}function d(y){let v=y.target;v.removeEventListener("dispose",d),e.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function p(){for(let y in r)e.deleteBuffer(r[y]);r={},s={}}return{bind:o,update:a,dispose:p}}var Lv=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Xn=null;function ug(){if(Xn===null)Xn=new Hn(Lv,16,16,rn,Yt),Xn.name="DFG_LUT",Xn.minFilter=qt,Xn.magFilter=qt,Xn.wrapS=Ci,Xn.wrapT=Ci,Xn.generateMipmaps=!1,Xn.needsUpdate=!0;return Xn}class Oc{constructor(e={}){let{canvas:t=uh(),context:i=null,depth:n=!0,stencil:r=!1,alpha:s=!1,antialias:o=!1,premultipliedAlpha:a=!0,preserveDrawingBuffer:l=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:u=!1,outputBufferType:f=ri}=e;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=s;let g=f,_=new Set([Fs,Us,Wr]),d=new Set([ri,ui,jn,Cn,Ls,Ds]),p=new Uint32Array(4),y=new Int32Array(4),v={textures:[],min:[],max:[],resolution:[]},M=null,b=null,w=[],x=[],S=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=tn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,U=!1,I=null,O=null,te=null,P=null;this._outputColorSpace=Rt;let Z=0,L=0,N=null,ee=-1,G=null,Y=new St,K=new St,pe=null,X=new ue(0),ie=0,{width:Me,height:Se}=t,ze=1,we=null,pt=null,Ne=new St(0,0,Me,Se),Ue=new St(0,0,Me,Se),ot=!1,ae=new yn,fe=new lo,de=!1,Pe=!1,Fe=new qe,$e=new A,We=new St,ft={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},mt=!1;function Tt(){return N===null?ze:1}let B=i;function hi(T,F){return t.getContext(T,F)}let ut,ni,Re,Lt,et,nt,fi,C,E,k,he,le,_e,be,Q,oe,ve,D,se,j,me,ge,Ae;try{let T={alpha:!0,depth:n,stencil:r,antialias:o,premultipliedAlpha:a,preserveDrawingBuffer:l,powerPreference:c,failIfMajorPerformanceCaveat:h};if("setAttribute"in t)t.setAttribute("data-engine",`three.js r${Bo}`);if(t.addEventListener("webglcontextlost",Ie,!1),t.addEventListener("webglcontextrestored",je,!1),t.addEventListener("webglcontextcreationerror",dt,!1),B===null){if(B=hi("webgl2",T),B===null)if(hi("webgl2"))throw Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.");else throw Error("THREE.WebGLRenderer: Error creating WebGL context.")}Qe()}catch(T){throw t.removeEventListener("webglcontextlost",Ie,!1),t.removeEventListener("webglcontextrestored",je,!1),t.removeEventListener("webglcontextcreationerror",dt,!1),Be("WebGLRenderer: "+T.message),T}function Qe(){if(ut=new y0(B),ut.init(),me=new lf(B,ut),ni=new h0(B,ut,e,me),Re=new ag(B,ut),ni.reversedDepthBuffer&&u)Re.buffers.depth.setReversed(!0);O=B.createFramebuffer(),te=B.createFramebuffer(),P=B.createFramebuffer(),Lt=new S0(B),et=new K0,nt=new lg(B,ut,Re,et,ni,me,Lt),fi=new _0(R),C=new wd(B),ge=new l0(B,C),E=new v0(B,C,Lt,ge),k=new E0(B,E,C,ge,Lt),D=new b0(B,ni,nt),Q=new f0(et),he=new J0(R,fi,ut,ni,ge,Q),le=new hg(R,et),_e=new j0,be=new ig(ut),ve=new a0(R,fi,Re,k,m,a),oe=new og(R,k,ni),Ae=new fg(B,Lt,ni,Re),se=new c0(B,ut,Lt),j=new M0(B,ut,Lt),Lt.programs=he.programs,R.capabilities=ni,R.extensions=ut,R.properties=et,R.renderLists=_e,R.shadowMap=oe,R.state=Re,R.info=Lt}if(g!==ri)S=new T0(g,t.width,t.height,o,n,r);let Ze=new hf(R,B);this.xr=Ze,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){let T=ut.get("WEBGL_lose_context");if(T)T.loseContext()},this.forceContextRestore=function(){let T=ut.get("WEBGL_lose_context");if(T)T.restoreContext()},this.getPixelRatio=function(){return ze},this.setPixelRatio=function(T){if(T===void 0)return;ze=T,this.setSize(Me,Se,!1)},this.getSize=function(T){return T.set(Me,Se)},this.setSize=function(T,F,J=!0){if(Ze.isPresenting){xe("WebGLRenderer: Can't change size while VR device is presenting.");return}if(Me=T,Se=F,t.width=Math.floor(T*ze),t.height=Math.floor(F*ze),J===!0)t.style.width=T+"px",t.style.height=F+"px";if(S!==null)S.setSize(t.width,t.height);this.setViewport(0,0,T,F)},this.getDrawingBufferSize=function(T){return T.set(Me*ze,Se*ze).floor()},this.setDrawingBufferSize=function(T,F,J){Me=T,Se=F,ze=J,t.width=Math.floor(T*J),t.height=Math.floor(F*J),this.setViewport(0,0,T,F)},this.setEffects=function(T){if(g===ri){Be("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let F=0;F<T.length;F++)if(T[F].isOutputPass===!0){xe("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}S.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(Y)},this.getViewport=function(T){return T.copy(Ne)},this.setViewport=function(T,F,J,V){if(T.isVector4)Ne.set(T.x,T.y,T.z,T.w);else Ne.set(T,F,J,V);Re.viewport(Y.copy(Ne).multiplyScalar(Tt()).round())},this.getScissor=function(T){return T.copy(Ue)},this.setScissor=function(T,F,J,V){if(T.isVector4)Ue.set(T.x,T.y,T.z,T.w);else Ue.set(T,F,J,V);Re.scissor(K.copy(Ue).multiplyScalar(Tt()).round())},this.getScissorTest=function(){return ot},this.setScissorTest=function(T){Re.setScissorTest(ot=T)},this.setOpaqueSort=function(T){we=T},this.setTransparentSort=function(T){pt=T},this.getClearColor=function(T){return T.copy(ve.getClearColor())},this.setClearColor=function(){ve.setClearColor(...arguments)},this.getClearAlpha=function(){return ve.getClearAlpha()},this.setClearAlpha=function(){ve.setClearAlpha(...arguments)},this.clear=function(T=!0,F=!0,J=!0){let V=0;if(T){let q=!1;if(N!==null){let Ee=N.texture.format;q=_.has(Ee)}if(q){let Ee=N.texture.type,Ge=d.has(Ee),Te=ve.getClearColor(),De=ve.getClearAlpha(),{r:Xe,g:at,b:_t}=Te;if(Ge)p[0]=Xe,p[1]=at,p[2]=_t,p[3]=De,B.clearBufferuiv(B.COLOR,0,p);else y[0]=Xe,y[1]=at,y[2]=_t,y[3]=De,B.clearBufferiv(B.COLOR,0,y)}else V|=B.COLOR_BUFFER_BIT}if(F)V|=B.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0);if(J)V|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295);if(V!==0)B.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(T){T.setRenderer(this),I=T},this.dispose=function(){t.removeEventListener("webglcontextlost",Ie,!1),t.removeEventListener("webglcontextrestored",je,!1),t.removeEventListener("webglcontextcreationerror",dt,!1),ve.dispose(),_e.dispose(),be.dispose(),nt.dispose(),et.dispose(),fi.dispose(),k.dispose(),E.dispose(),ge.dispose(),Ae.dispose(),he.dispose(),Ze.dispose(),Ze.removeEventListener("sessionstart",Cf),Ze.removeEventListener("sessionend",Pf),zr.stop()};function Ie(T){T.preventDefault(),Kr("WebGLRenderer: Context Lost."),U=!0}function je(){Kr("WebGLRenderer: Context Restored."),U=!1;let T=Lt.autoReset,F=oe.enabled,J=oe.autoUpdate,V=oe.needsUpdate,q=oe.type;Qe(),Lt.autoReset=T,oe.enabled=F,oe.autoUpdate=J,oe.needsUpdate=V,oe.type=q}function dt(T){Be("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Le(T){let F=T.target;F.removeEventListener("dispose",Le),Nt(F)}function Nt(T){_i(T),et.remove(T)}function _i(T){let F=et.get(T).programs;if(F!==void 0){if(F.forEach(function(J){he.releaseProgram(J)}),T.isShaderMaterial)he.releaseShaderCache(T)}}this.renderBufferDirect=function(T,F,J,V,q,Ee){if(F===null)F=ft;let Ge=q.isMesh&&q.matrixWorld.determinantAffine()<0,Te=$g(T,F,J,V,q);Re.setMaterial(V,Ge);let De=J.index,Xe=1;if(V.wireframe===!0){if(De=E.getWireframeAttribute(J),De===void 0)return;Xe=2}let at=J.drawRange,_t=J.attributes.position,He=at.start*Xe,yt=(at.start+at.count)*Xe;if(Ee!==null)He=Math.max(He,Ee.start*Xe),yt=Math.min(yt,(Ee.start+Ee.count)*Xe);if(De!==null)He=Math.max(He,0),yt=Math.min(yt,De.count);else if(_t!==void 0&&_t!==null)He=Math.max(He,0),yt=Math.min(yt,_t.count);let ai=yt-He;if(ai<0||ai===1/0)return;ge.setup(q,V,Te,J,De);let kt,Ft=se;if(De!==null)kt=C.get(De),Ft=j,Ft.setIndex(kt);if(q.isMesh)if(V.wireframe===!0)Re.setLineWidth(V.wireframeLinewidth*Tt()),Ft.setMode(B.LINES);else Ft.setMode(B.TRIANGLES);else if(q.isLine){let Ui=V.linewidth;if(Ui===void 0)Ui=1;if(Re.setLineWidth(Ui*Tt()),q.isLineSegments)Ft.setMode(B.LINES);else if(q.isLineLoop)Ft.setMode(B.LINE_LOOP);else Ft.setMode(B.LINE_STRIP)}else if(q.isPoints)Ft.setMode(B.POINTS);else if(q.isSprite)Ft.setMode(B.TRIANGLES);if(q.isBatchedMesh)if(!ut.get("WEBGL_multi_draw")){let{_multiDrawStarts:Ui,_multiDrawCounts:ke,_multiDrawCount:ki}=q,wt=De?C.get(De).bytesPerElement:1,Gr=et.get(V).currentProgram.getUniforms();for(let Fi=0;Fi<ki;Fi++)Gr.setValue(B,"_gl_DrawID",Fi),Ft.render(Ui[Fi]/wt,ke[Fi])}else Ft.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else if(q.isInstancedMesh)Ft.renderInstances(He,ai,q.count);else if(J.isInstancedBufferGeometry){let Ui=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,ke=Math.min(J.instanceCount,Ui);Ft.renderInstances(He,ai,ke)}else Ft.render(He,ai)};function Jn(T,F,J,V){if(I!==null&&T.isNodeMaterial)I.setObject(V,T);if(de===!0)Q.setState(T,J,!1);if(T.transparent===!0&&T.side===Ot&&T.forceSinglePass===!1)T.side=Bt,T.needsUpdate=!0,Fo(T,F,V),T.side=dn,T.needsUpdate=!0,Fo(T,F,V),T.side=Ot;else Fo(T,F,V)}this.compile=function(T,F,J=null){if(J===null)J=T;if(I!==null)I.renderStart(T,F,J);if(b=be.get(J),b.init(F),x.push(b),J.traverseVisible(function(q){if(q.isLight&&q.layers.test(F.layers)){if(b.pushLight(q),q.castShadow)b.pushShadow(q)}}),T!==J)T.traverseVisible(function(q){if(q.isLight&&q.layers.test(F.layers)){if(b.pushLight(q),q.castShadow)b.pushShadow(q)}});if(b.setupLights(),I!==null)I.updateLights(b.state.lightsArray);if(Pe=this.localClippingEnabled,de=Q.init(this.clippingPlanes,Pe),de===!0)Q.setGlobalState(this.clippingPlanes,F);if(I!==null)oe.render(b.state.shadowsArray,J,F);let V=new Set;if(T.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;let Ee=q.material;if(Ee)if(Array.isArray(Ee))for(let Ge=0;Ge<Ee.length;Ge++){let Te=Ee[Ge];Jn(Te,J,F,q),V.add(Te)}else Jn(Ee,J,F,q),V.add(Ee)}),b=x.pop(),I!==null)I.renderEnd();return V},this.compileAsync=function(T,F,J=null){let V=this.compile(T,F,J);return new Promise((q)=>{function Ee(){if(V.forEach(function(Ge){let De=et.get(Ge).currentProgram;if(De===void 0||De.isReady())V.delete(Ge)}),V.size===0){q(T);return}setTimeout(Ee,10)}if(ut.get("KHR_parallel_shader_compile")!==null)Ee();else setTimeout(Ee,10)})};let nh=null;function Jg(T){if(nh)nh(T)}function Cf(){zr.stop()}function Pf(){zr.start()}let zr=new Dc;if(zr.setAnimationLoop(Jg),typeof self<"u")zr.setContext(self);this.setAnimationLoop=function(T){nh=T,Ze.setAnimationLoop(T),T===null?zr.stop():zr.start()},Ze.addEventListener("sessionstart",Cf),Ze.addEventListener("sessionend",Pf),this.render=function(T,F){if(F!==void 0&&F.isCamera!==!0){Be("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;if(I!==null)I.renderStart(T,F);let J=Ze.enabled===!0&&Ze.isPresenting===!0,V=S!==null&&(N===null||J)&&S.begin(R,N);if(T.matrixWorldAutoUpdate===!0)T.updateMatrixWorld();if(F.parent===null&&F.matrixWorldAutoUpdate===!0)F.updateMatrixWorld();if(Ze.enabled===!0&&Ze.isPresenting===!0&&(S===null||S.isCompositing()===!1)){if(Ze.cameraAutoUpdate===!0)Ze.updateCamera(F);F=Ze.getCamera()}if(T.isScene===!0)T.onBeforeRender(R,T,F,N);if(b=be.get(T,x.length),b.init(F),b.state.textureUnits=nt.getTextureUnits(),x.push(b),Fe.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),F.isArrayCamera)fe.setFromArrayCamera(F);else ae.setFromProjectionMatrix(Fe,Mi,F.reversedDepth);if(Pe=this.localClippingEnabled,de=Q.init(this.clippingPlanes,Pe),M=_e.get(T,w.length),M.init(),w.push(M),this.info.render.frame++,Ze.enabled===!0&&Ze.isPresenting===!0){let Ge=R.xr.getDepthSensingMesh();if(Ge!==null)rh(Ge,F,-1/0,R.sortObjects)}if(rh(T,F,0,R.sortObjects),M.finish(),I!==null)I.updateLights(b.state.lightsArray);if(R.sortObjects===!0)M.sort(we,pt);if(mt=Ze.enabled===!1||Ze.isPresenting===!1||Ze.hasDepthSensing()===!1,mt)ve.addToRenderList(M,T);if(this.info.autoReset===!0)this.info.reset();if(de===!0)Q.beginShadows();let q=b.state.shadowsArray;if(oe.render(q,T,F),de===!0)Q.endShadows();if((V&&S.hasRenderPass())===!1){let Ge=M.opaque,Te=M.transmissive;if(b.setupLights(),F.isArrayCamera){let De=F.cameras;if(Te.length>0)for(let Xe=0,at=De.length;Xe<at;Xe++){let _t=De[Xe];Lf(Ge,Te,T,_t)}if(mt)ve.render(T);for(let Xe=0,at=De.length;Xe<at;Xe++){let _t=De[Xe];If(M,T,_t,_t.viewport)}}else{if(Te.length>0)Lf(Ge,Te,T,F);if(mt)ve.render(T);If(M,T,F)}}if(N!==null&&L===0)nt.updateMultisampleRenderTarget(N),nt.updateRenderTargetMipmap(N);if(V)S.end(R);if(T.isScene===!0)T.onAfterRender(R,T,F);if(ge.resetDefaultState(),ee=-1,G=null,x.pop(),x.length>0){if(b=x[x.length-1],nt.setTextureUnits(b.state.textureUnits),de===!0)Q.setGlobalState(R.clippingPlanes,b.state.camera)}else b=null;if(w.pop(),w.length>0)M=w[w.length-1];else M=null;if(I!==null)I.renderEnd()};function rh(T,F,J,V){if(T.visible===!1)return;if(T.layers.test(F.layers)){if(T.isGroup)J=T.renderOrder;else if(T.isLOD){if(T.autoUpdate===!0)T.update(F)}else if(T.isLight){if(b.pushLight(T),T.castShadow)b.pushShadow(T)}else if(T.isSprite){let Ge=F.isArrayCamera?fe:ae;if(!T.frustumCulled||T.intersectsFrustum(Ge)){if(V)We.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Fe);let Te=k.update(T),De=T.material;if(De.visible)M.push(T,Te,De,J,We.z,null,F)}}else if(T.isMesh||T.isLine||T.isPoints){let Ge=F.isArrayCamera?fe:ae;if(!T.frustumCulled||T.intersectsFrustum(Ge)){let Te=k.update(T),De=T.material;if(V){if(T.boundingSphere!==void 0){if(T.boundingSphere===null)T.computeBoundingSphere();We.copy(T.boundingSphere.center)}else{if(Te.boundingSphere===null)Te.computeBoundingSphere();We.copy(Te.boundingSphere.center)}We.applyMatrix4(T.matrixWorld).applyMatrix4(Fe)}if(Array.isArray(De)){let Xe=Te.groups;for(let at=0,_t=Xe.length;at<_t;at++){let He=Xe[at],yt=De[He.materialIndex];if(yt&&yt.visible)M.push(T,Te,yt,J,We.z,He,F)}}else if(De.visible)M.push(T,Te,De,J,We.z,null,F)}}}let Ee=T.children;for(let Ge=0,Te=Ee.length;Ge<Te;Ge++)rh(Ee[Ge],F,J,V)}function If(T,F,J,V){let{opaque:q,transmissive:Ee,transparent:Ge}=T;if(b.setupLightsView(J),de===!0)Q.setGlobalState(R.clippingPlanes,J);if(V)Re.viewport(Y.copy(V));if(q.length>0)gl(q,F,J);if(Ee.length>0)gl(Ee,F,J);if(Ge.length>0)gl(Ge,F,J);Re.buffers.depth.setTest(!0),Re.buffers.depth.setMask(!0),Re.buffers.color.setMask(!0),Re.setPolygonOffset(!1)}function Lf(T,F,J,V){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[V.id]===void 0){let He=ut.has("EXT_color_buffer_half_float")||ut.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[V.id]=new Wt(1,1,{generateMipmaps:!0,type:He?Yt:ri,minFilter:Vi,samples:Math.max(4,ni.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:it.workingColorSpace})}let Ee=b.state.transmissionRenderTarget[V.id],Ge=V.viewport||Y;Ee.setSize(Ge.z*R.transmissionResolutionScale,Ge.w*R.transmissionResolutionScale);let Te=R.getRenderTarget(),De=R.getActiveCubeFace(),Xe=R.getActiveMipmapLevel();if(R.setRenderTarget(Ee),R.getClearColor(X),ie=R.getClearAlpha(),ie<1)R.setClearColor(16777215,0.5);if(R.clear(),mt)ve.render(J);let at=R.toneMapping;R.toneMapping=tn;let _t=V.viewport;if(V.viewport!==void 0)V.viewport=void 0;if(b.setupLightsView(V),de===!0)Q.setGlobalState(R.clippingPlanes,V);if(gl(T,J,V),nt.updateMultisampleRenderTarget(Ee),nt.updateRenderTargetMipmap(Ee),ut.has("WEBGL_multisampled_render_to_texture")===!1){let He=!1;for(let yt=0,ai=F.length;yt<ai;yt++){let kt=F[yt],{object:Ft,geometry:Ui,material:ke,group:ki}=kt;if(ke.side===Ot&&Ft.layers.test(V.layers)){let wt=ke.side;ke.side=Bt,ke.needsUpdate=!0,Df(Ft,J,V,Ui,ke,ki),ke.side=wt,ke.needsUpdate=!0,He=!0}}if(He===!0)nt.updateMultisampleRenderTarget(Ee),nt.updateRenderTargetMipmap(Ee)}if(R.setRenderTarget(Te,De,Xe),R.setClearColor(X,ie),_t!==void 0)V.viewport=_t;R.toneMapping=at}function gl(T,F,J){let V=F.isScene===!0?F.overrideMaterial:null;for(let q=0,Ee=T.length;q<Ee;q++){let Ge=T[q],{object:Te,geometry:De,group:Xe}=Ge,at=Ge.material;if(at.allowOverride===!0&&V!==null)at=V;if(Te.layers.test(J.layers))Df(Te,F,J,De,at,Xe)}}function Df(T,F,J,V,q,Ee){if(I!==null&&q.isNodeMaterial)I.setObject(T,q);if(T.onBeforeRender(R,F,J,V,q,Ee),T.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),q.onBeforeRender(R,F,J,V,T,Ee),q.transparent===!0&&q.side===Ot&&q.forceSinglePass===!1)q.side=Bt,q.needsUpdate=!0,R.renderBufferDirect(J,F,V,q,T,Ee),q.side=dn,q.needsUpdate=!0,R.renderBufferDirect(J,F,V,q,T,Ee),q.side=Ot;else R.renderBufferDirect(J,F,V,q,T,Ee);T.onAfterRender(R,F,J,V,q,Ee)}function Nf(T){let F=0;for(let J of T)if(J.texture!==null)F++;return F}function Fo(T,F,J){if(F.isScene!==!0)F=ft;let V=et.get(T),q=b.state.lights,Ee=b.state.shadowsArray,Ge=q.state.version,Te=he.getParameters(T,q.state,Ee,F,J,b.state.lightProbeGridArray),De=he.getProgramCacheKey(Te),Xe=V.programs;V.environment=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?F.environment:null,V.fog=F.fog;let at=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap;if(V.envMap=fi.get(T.envMap||V.environment,at),V.envMapRotation=V.environment!==null&&T.envMap===null?F.environmentRotation:T.envMapRotation,Xe===void 0)T.addEventListener("dispose",Le),Xe=new Map,V.programs=Xe,V.programVariants=new Map;let _t=Xe.get(De);if(_t!==void 0){if(V.currentProgram===_t&&V.lightsStateVersion===Ge)return Ff(T,Te),_t}else{if(Te.uniforms=he.getUniforms(T),I!==null&&T.isNodeMaterial)I.build(T,J,Te);T.onBeforeCompile(Te,R),_t=he.acquireProgram(Te,De),Xe.set(De,_t),V.uniforms=Te.uniforms}let He=V.uniforms;if(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)He.clippingPlanes=Q.uniform;if(Ff(T,Te),V.needsLights=jg(T),V.lightsStateVersion=Ge,V.needsLights)He.ambientLightColor.value=q.state.ambient,He.lightProbe.value=q.state.probe,He.sunLights.value=q.state.sun,He.sunLightShadows.value=q.state.sunShadow,He.directionalLights.value=q.state.directional,He.directionalLightShadows.value=q.state.directionalShadow,He.spotLights.value=q.state.spot,He.spotLightShadows.value=q.state.spotShadow,He.rectAreaLights.value=q.state.rectArea,He.ltc_1.value=q.state.rectAreaLTC1,He.ltc_2.value=q.state.rectAreaLTC2,He.pointLights.value=q.state.point,He.pointLightShadows.value=q.state.pointShadow,He.hemisphereLights.value=q.state.hemi,He.sunShadowMatrix.value=q.state.sunShadowMatrix,He.sunShadowCascade.value=q.state.sunShadowCascade,He.directionalShadowMatrix.value=q.state.directionalShadowMatrix,He.spotLightMatrix.value=q.state.spotLightMatrix,He.spotLightMap.value=q.state.spotLightMap,He.pointShadowMatrix.value=q.state.pointShadowMatrix;return V.numLightProbeGrids=Nf(b.state.lightProbeGridArray),V.currentProgram=_t,V.uniformsList=null,_t}function Kg(T,F,J,V,q){let Ee=et.get(T),Ge=Ee.currentProgram.id+","+V+","+q,Te=Ee.programVariants.get(Ge);if(Te===void 0)Te=Fo(T,F,J),Ee.programVariants.set(Ge,Te);else Ee.currentProgram=Te,Ee.uniformsList=null,Ee.outputColorSpace=V,Ee.toneMapping=q;return Te}function Uf(T){if(T.uniformsList===null){let F=T.currentProgram.getUniforms();T.uniformsList=xs.seqWithValue(F.seq,T.uniforms)}return T.uniformsList}function Ff(T,F){let J=et.get(T);J.outputColorSpace=F.outputColorSpace,J.batching=F.batching,J.batchingColor=F.batchingColor,J.instancing=F.instancing,J.instancingColor=F.instancingColor,J.instancingMorph=F.instancingMorph,J.skinning=F.skinning,J.morphTargets=F.morphTargets,J.morphNormals=F.morphNormals,J.morphColors=F.morphColors,J.morphTargetsCount=F.morphTargetsCount,J.numClippingPlanes=F.numClippingPlanes,J.numIntersection=F.numClipIntersection,J.vertexAlphas=F.vertexAlphas,J.vertexTangents=F.vertexTangents,J.toneMapping=F.toneMapping}function $g(T,F,J,V,q){if(F.isScene!==!0)F=ft;nt.resetTextureUnits();let Ee=F.fog,Ge=V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial?F.environment:null,Te=N===null?R.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:it.workingColorSpace,De=V.isMeshStandardMaterial||V.isMeshLambertMaterial&&!V.envMap||V.isMeshPhongMaterial&&!V.envMap,Xe=fi.get(V.envMap||Ge,De),at=V.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,_t=!!J.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),He=!!J.morphAttributes.position,yt=!!J.morphAttributes.normal,ai=!!J.morphAttributes.color,kt=tn;if(V.toneMapped){if(N===null||N.isXRRenderTarget===!0)kt=R.toneMapping}let Ft=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,Ui=Ft!==void 0?Ft.length:0,ke=et.get(V),ki=b.state.lights;if(de===!0){if(Pe===!0||T!==G){let Kt=T===G&&V.id===ee;Q.setState(V,T,Kt)}}let wt=!1,Gr=!1;if(V.version===ke.__version){if(ke.needsLights&&ke.lightsStateVersion!==ki.state.version)wt=!0;else if(q.isBatchedMesh&&ke.batching===!1)wt=!0;else if(!q.isBatchedMesh&&ke.batching===!0)wt=!0;else if(q.isBatchedMesh&&ke.batchingColor===!0&&q._colorsTexture===null)wt=!0;else if(q.isBatchedMesh&&ke.batchingColor===!1&&q._colorsTexture!==null)wt=!0;else if(q.isInstancedMesh&&ke.instancing===!1)wt=!0;else if(!q.isInstancedMesh&&ke.instancing===!0)wt=!0;else if(q.isSkinnedMesh&&ke.skinning===!1)wt=!0;else if(!q.isSkinnedMesh&&ke.skinning===!0)wt=!0;else if(q.isInstancedMesh&&ke.instancingColor===!0&&q.instanceColor===null)wt=!0;else if(q.isInstancedMesh&&ke.instancingColor===!1&&q.instanceColor!==null)wt=!0;else if(q.isInstancedMesh&&ke.instancingMorph===!0&&q.morphTexture===null)wt=!0;else if(q.isInstancedMesh&&ke.instancingMorph===!1&&q.morphTexture!==null)wt=!0;else if(ke.envMap!==Xe)wt=!0;else if(V.fog===!0&&ke.fog!==Ee)wt=!0;else if(ke.numClippingPlanes!==void 0&&(ke.numClippingPlanes!==Q.numPlanes||ke.numIntersection!==Q.numIntersection))wt=!0;else if(ke.vertexAlphas!==at)wt=!0;else if(ke.vertexTangents!==_t)wt=!0;else if(ke.morphTargets!==He)wt=!0;else if(ke.morphNormals!==yt)wt=!0;else if(ke.morphColors!==ai)wt=!0;else if(ke.morphTargetsCount!==Ui)wt=!0;else if(ke.numLightProbeGrids!==Nf(b.state.lightProbeGridArray))wt=!0;else if(ke.outputColorSpace!==Te||ke.toneMapping!==kt)Gr=!0}else wt=!0,ke.__version=V.version;let Fi=ke.currentProgram;if(wt===!0||Gr===!0){if(Fi=Gr===!0?Kg(V,F,q,Te,kt):Fo(V,F,q),I&&V.isNodeMaterial)I.onUpdateProgram(V,Fi,ke)}let xl=!1,hr=!1,Hr=!1,vt=Fi.getUniforms(),Ri=ke.uniforms;if(Re.useProgram(Fi.program))xl=!0,hr=!0,Hr=!0;if(V.id!==ee)ee=V.id,hr=!0;if(xl||G!==T){if(Re.buffers.depth.getReversed()&&T.reversedDepth!==!0)T._reversedDepth=!0,T.updateProjectionMatrix();vt.setValue(B,"projectionMatrix",T.projectionMatrix),vt.setValue(B,"viewMatrix",T.matrixWorldInverse);let yi=vt.map.cameraPosition;if(yi!==void 0)yi.setValue(B,$e.setFromMatrixPosition(T.matrixWorld));if(ni.logarithmicDepthBuffer)vt.setValue(B,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2));if(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)vt.setValue(B,"isOrthographic",T.isOrthographicCamera===!0);if(G!==T)G=T,hr=!0,Hr=!0}if(ke.needsLights){if(ki.state.sunShadowMap.length>0)vt.setValue(B,"sunShadowMap",ki.state.sunShadowMap,nt);if(ki.state.directionalShadowMap.length>0)vt.setValue(B,"directionalShadowMap",ki.state.directionalShadowMap,nt);if(ki.state.spotShadowMap.length>0)vt.setValue(B,"spotShadowMap",ki.state.spotShadowMap,nt);if(ki.state.pointShadowMap.length>0)vt.setValue(B,"pointShadowMap",ki.state.pointShadowMap,nt)}if(q.isSkinnedMesh){vt.setOptional(B,q,"bindMatrix"),vt.setOptional(B,q,"bindMatrixInverse");let Kt=q.skeleton;if(Kt){if(Kt.boneTexture===null)Kt.computeBoneTexture();vt.setValue(B,"boneTexture",Kt.boneTexture,nt)}}if(q.isBatchedMesh){if(vt.setOptional(B,q,"batchingTexture"),vt.setValue(B,"batchingTexture",q._matricesTexture,nt),vt.setOptional(B,q,"batchingIdTexture"),vt.setValue(B,"batchingIdTexture",q._indirectTexture,nt),vt.setOptional(B,q,"batchingColorTexture"),q._colorsTexture!==null)vt.setValue(B,"batchingColorTexture",q._colorsTexture,nt)}let Rn=J.morphAttributes;if(Rn.position!==void 0||Rn.normal!==void 0||Rn.color!==void 0)D.update(q,J,Fi);if(hr||ke.receiveShadow!==q.receiveShadow)ke.receiveShadow=q.receiveShadow,vt.setValue(B,"receiveShadow",q.receiveShadow);if((V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial)&&V.envMap===null&&F.environment!==null)Ri.envMapIntensity.value=F.environmentIntensity;if(Ri.dfgLUT!==void 0)Ri.dfgLUT.value=ug();if(hr){if(vt.setValue(B,"toneMappingExposure",R.toneMappingExposure),ke.needsLights)Qg(Ri,Hr);if(Ee&&V.fog===!0)le.refreshFogUniforms(Ri,Ee);if(le.refreshMaterialUniforms(Ri,V,ze,Se,b.state.transmissionRenderTarget[T.id]),ke.needsLights&&ke.numLightProbeGrids>0){let Kt=v,yi=0;for(let Kn of b.state.lightProbeGridArray){if(Kn.texture===null)continue;Kt.textures[yi]=Kn.texture,Kt.min[yi]=Kn.boundingBox.min,Kt.max[yi]=Kn.boundingBox.max,Kt.resolution[yi]=Kn.resolution,yi++}for(let Kn in Kt)Kt[Kn].length=yi;Ri.probesSH.value=Kt.textures,Ri.probesMin.value=Kt.min,Ri.probesMax.value=Kt.max,Ri.probesResolution.value=Kt.resolution}xs.upload(B,Uf(ke),Ri,nt)}if(V.isShaderMaterial&&V.uniformsNeedUpdate===!0)xs.upload(B,Uf(ke),Ri,nt),V.uniformsNeedUpdate=!1;if(V.isSpriteMaterial)vt.setValue(B,"center",q.center);if(vt.setValue(B,"modelViewMatrix",q.modelViewMatrix),vt.setValue(B,"normalMatrix",q.normalMatrix),vt.setValue(B,"modelMatrix",q.matrixWorld),V.uniformsGroups!==void 0){let Kt=V.uniformsGroups;for(let yi=0,Kn=Kt.length;yi<Kn;yi++){let Of=Kt[yi];Ae.update(Of,Fi),Ae.bind(Of,Fi)}}return Fi}function Qg(T,F){T.ambientLightColor.needsUpdate=F,T.lightProbe.needsUpdate=F,T.sunLights.needsUpdate=F,T.sunLightShadows.needsUpdate=F,T.directionalLights.needsUpdate=F,T.directionalLightShadows.needsUpdate=F,T.pointLights.needsUpdate=F,T.pointLightShadows.needsUpdate=F,T.spotLights.needsUpdate=F,T.spotLightShadows.needsUpdate=F,T.rectAreaLights.needsUpdate=F,T.hemisphereLights.needsUpdate=F}function jg(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return Z},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(T,F,J){let V=et.get(T);if(V.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1)V.__useRenderToTexture=!1;et.get(T.texture).__webglTexture=F,et.get(T.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:J,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,F){let J=et.get(T);J.__webglFramebuffer=F,J.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(T,F=0,J=0){N=T,Z=F,L=J;let V=null,q=!1,Ee=!1;if(T){let Te=et.get(T);if(Te.__useDefaultFramebuffer!==void 0){Re.bindFramebuffer(B.FRAMEBUFFER,Te.__webglFramebuffer),Y.copy(T.viewport),K.copy(T.scissor),pe=T.scissorTest,Re.viewport(Y),Re.scissor(K),Re.setScissorTest(pe),ee=-1;return}else if(Te.__webglFramebuffer===void 0)nt.setupRenderTarget(T);else if(Te.__hasExternalTextures)nt.rebindTextures(T,et.get(T.texture).__webglTexture,et.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){let at=T.depthTexture;if(Te.__boundDepthTexture!==at){if(at!==null&&et.has(at)&&(T.width!==at.image.width||T.height!==at.image.height))throw Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");nt.setupDepthRenderbuffer(T)}}let De=T.texture;if(De.isData3DTexture||De.isDataArrayTexture||De.isCompressedArrayTexture)Ee=!0;let Xe=et.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget){if(Array.isArray(Xe[F]))V=Xe[F][J];else V=Xe[F];q=!0}else if(T.samples>0&&nt.useMultisampledRTT(T)===!1)V=et.get(T).__webglMultisampledFramebuffer;else if(Array.isArray(Xe))V=Xe[J];else V=Xe;Y.copy(T.viewport),K.copy(T.scissor),pe=T.scissorTest}else Y.copy(Ne).multiplyScalar(ze).floor(),K.copy(Ue).multiplyScalar(ze).floor(),pe=ot;if(J!==0)V=O;if(Re.bindFramebuffer(B.FRAMEBUFFER,V))Re.drawBuffers(T,V);if(Re.viewport(Y),Re.scissor(K),Re.setScissorTest(pe),q){let Te=et.get(T.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+F,Te.__webglTexture,J)}else if(Ee){let Te=F;for(let De=0;De<T.textures.length;De++){let Xe=et.get(T.textures[De]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+De,Xe.__webglTexture,J,Te)}}else if(T!==null&&J!==0){let Te=et.get(T.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Te.__webglTexture,J)}ee=-1};function Bf(T){let F=et.get(T);if(F.__readFormat!==T.format||F.__readType!==T.type)F.__readFormat=T.format,F.__readType=T.type,F.__formatReadable=ni.textureFormatReadable(T.format),F.__typeReadable=ni.textureTypeReadable(T.type);return F}if(this.readRenderTargetPixels=function(T,F,J,V,q,Ee,Ge,Te=0){if(!(T&&T.isWebGLRenderTarget)){Be("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let De=et.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ge!==void 0){if(De=De[Ge],Array.isArray(De))De=De[0]}if(De){Re.bindFramebuffer(B.FRAMEBUFFER,De);try{let Xe=T.textures[Te],{format:at,type:_t}=Xe;if(T.textures.length>1)B.readBuffer(B.COLOR_ATTACHMENT0+Te);let He=Bf(Xe);if(He.__formatReadable===!1){Be("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(He.__typeReadable===!1){Be("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}if(F>=0&&F<=T.width-V&&(J>=0&&J<=T.height-q))B.readPixels(F,J,V,q,me.convert(at),me.convert(_t),Ee)}finally{let Xe=N!==null?et.get(N).__webglFramebuffer:null;Re.bindFramebuffer(B.FRAMEBUFFER,Xe)}}},this.readRenderTargetPixelsAsync=async function(T,F,J,V,q,Ee,Ge,Te=0){if(!(T&&T.isWebGLRenderTarget))throw Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let De=et.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ge!==void 0){if(De=De[Ge],Array.isArray(De))De=De[0]}if(De)if(F>=0&&F<=T.width-V&&(J>=0&&J<=T.height-q)){Re.bindFramebuffer(B.FRAMEBUFFER,De);let Xe=T.textures[Te],{format:at,type:_t}=Xe;if(T.textures.length>1)B.readBuffer(B.COLOR_ATTACHMENT0+Te);let He=Bf(Xe);if(He.__formatReadable===!1)throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(He.__typeReadable===!1)throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let yt=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,yt),B.bufferData(B.PIXEL_PACK_BUFFER,Ee.byteLength,B.STREAM_READ),B.readPixels(F,J,V,q,me.convert(at),me.convert(_t),0),B.bindBuffer(B.PIXEL_PACK_BUFFER,null);let ai=N!==null?et.get(N).__webglFramebuffer:null;Re.bindFramebuffer(B.FRAMEBUFFER,ai);let kt=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await yu(B,kt,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,yt),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,Ee),B.bindBuffer(B.PIXEL_PACK_BUFFER,null),B.deleteBuffer(yt),B.deleteSync(kt),Ee}else throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,F=null,J=0){let V=Math.pow(2,-J),q=Math.floor(T.image.width*V),Ee=Math.floor(T.image.height*V),Ge=F!==null?F.x:0,Te=F!==null?F.y:0;nt.setTexture2D(T,0),B.copyTexSubImage2D(B.TEXTURE_2D,J,0,0,Ge,Te,q,Ee),Re.unbindTexture()},this.copyTextureToTexture=function(T,F,J=null,V=null,q=0,Ee=0){let Ge,Te,De,Xe,at,_t,He,yt,ai,kt=T.isCompressedTexture?T.mipmaps[Ee]:T.image;if(J!==null)Ge=J.max.x-J.min.x,Te=J.max.y-J.min.y,De=J.isBox3?J.max.z-J.min.z:1,Xe=J.min.x,at=J.min.y,_t=J.isBox3?J.min.z:0;else{let vt=Math.pow(2,-q);if(Ge=Math.floor(T.width*vt),Te=Math.floor(T.height*vt),T.isDataArrayTexture)De=kt.depth;else if(T.isData3DTexture)De=Math.floor(kt.depth*vt);else De=1;Xe=0,at=0,_t=0}if(V!==null)He=V.x,yt=V.y,ai=V.z;else He=0,yt=0,ai=0;let Ft=me.convert(F.format),Ui=me.convert(F.type),ke;if(F.isData3DTexture)nt.setTexture3D(F,0),ke=B.TEXTURE_3D;else if(F.isDataArrayTexture||F.isCompressedArrayTexture)nt.setTexture2DArray(F,0),ke=B.TEXTURE_2D_ARRAY;else nt.setTexture2D(F,0),ke=B.TEXTURE_2D;Re.activeTexture(B.TEXTURE0),Re.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,F.flipY),Re.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),Re.pixelStorei(B.UNPACK_ALIGNMENT,F.unpackAlignment);let ki=Re.getParameter(B.UNPACK_ROW_LENGTH),wt=Re.getParameter(B.UNPACK_IMAGE_HEIGHT),Gr=Re.getParameter(B.UNPACK_SKIP_PIXELS),Fi=Re.getParameter(B.UNPACK_SKIP_ROWS),xl=Re.getParameter(B.UNPACK_SKIP_IMAGES);Re.pixelStorei(B.UNPACK_ROW_LENGTH,kt.width),Re.pixelStorei(B.UNPACK_IMAGE_HEIGHT,kt.height),Re.pixelStorei(B.UNPACK_SKIP_PIXELS,Xe),Re.pixelStorei(B.UNPACK_SKIP_ROWS,at),Re.pixelStorei(B.UNPACK_SKIP_IMAGES,_t);let hr=T.isDataArrayTexture||T.isData3DTexture,Hr=F.isDataArrayTexture||F.isData3DTexture;if(T.isDepthTexture){let vt=et.get(T),Ri=et.get(F),Rn=et.get(vt.__renderTarget),Kt=et.get(Ri.__renderTarget);Re.bindFramebuffer(B.READ_FRAMEBUFFER,Rn.__webglFramebuffer),Re.bindFramebuffer(B.DRAW_FRAMEBUFFER,Kt.__webglFramebuffer);for(let yi=0;yi<De;yi++){if(hr)B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,et.get(T).__webglTexture,q,_t+yi),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,et.get(F).__webglTexture,Ee,ai+yi);B.blitFramebuffer(Xe,at,Xe+Ge,at+Te,He,yt,He+Ge,yt+Te,B.DEPTH_BUFFER_BIT,B.NEAREST)}Re.bindFramebuffer(B.READ_FRAMEBUFFER,null),Re.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(q!==0||T.isRenderTargetTexture||et.has(T)){let vt=et.get(T),Ri=et.get(F);Re.bindFramebuffer(B.READ_FRAMEBUFFER,te),Re.bindFramebuffer(B.DRAW_FRAMEBUFFER,P);for(let Rn=0;Rn<De;Rn++){if(hr)B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,vt.__webglTexture,q,_t+Rn);else B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,vt.__webglTexture,q);if(Hr)B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Ri.__webglTexture,Ee,ai+Rn);else B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Ri.__webglTexture,Ee);if(q!==0)B.blitFramebuffer(Xe,at,Xe+Ge,at+Te,He,yt,He+Ge,yt+Te,B.COLOR_BUFFER_BIT,B.NEAREST);else if(Hr)B.copyTexSubImage3D(ke,Ee,He,yt,ai+Rn,Xe,at,Ge,Te);else B.copyTexSubImage2D(ke,Ee,He,yt,Xe,at,Ge,Te)}Re.bindFramebuffer(B.READ_FRAMEBUFFER,null),Re.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(Hr)if(T.isDataTexture||T.isData3DTexture)B.texSubImage3D(ke,Ee,He,yt,ai,Ge,Te,De,Ft,Ui,kt.data);else if(F.isCompressedArrayTexture)B.compressedTexSubImage3D(ke,Ee,He,yt,ai,kt.width,kt.height,De,Ft,kt.data);else B.texSubImage3D(ke,Ee,He,yt,ai,Ge,Te,De,Ft,Ui,kt);else if(T.isDataTexture)B.texSubImage2D(B.TEXTURE_2D,Ee,He,yt,Ge,Te,Ft,Ui,kt.data);else if(T.isCompressedTexture)B.compressedTexSubImage2D(B.TEXTURE_2D,Ee,He,yt,kt.width,kt.height,Ft,kt.data);else B.texSubImage2D(B.TEXTURE_2D,Ee,He,yt,Ge,Te,Ft,Ui,kt);if(Re.pixelStorei(B.UNPACK_ROW_LENGTH,ki),Re.pixelStorei(B.UNPACK_IMAGE_HEIGHT,wt),Re.pixelStorei(B.UNPACK_SKIP_PIXELS,Gr),Re.pixelStorei(B.UNPACK_SKIP_ROWS,Fi),Re.pixelStorei(B.UNPACK_SKIP_IMAGES,xl),Ee===0&&F.generateMipmaps===!0&&F.mipmapsAutoUpdate===!0)B.generateMipmap(ke);Re.unbindTexture()},this.initRenderTarget=function(T){if(et.get(T).__webglFramebuffer===void 0)nt.setupRenderTarget(T)},this.initTexture=function(T){if(T.isCubeTexture)nt.setTextureCube(T,0);else if(T.isData3DTexture)nt.setTexture3D(T,0);else if(T.isDataArrayTexture||T.isCompressedArrayTexture)nt.setTexture2DArray(T,0);else nt.setTexture2D(T,0);Re.unbindTexture()},this.resetState=function(){Z=0,L=0,N=null,Re.reset(),ge.reset()},typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Mi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=it._getDrawingBufferColorSpace(e),t.unpackColorSpace=it._getUnpackColorSpace()}}var Ro={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class Sn{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}var Nv=new Pr(-1,1,1,-1,0,1);class dg extends Oe{constructor(){super();this.setAttribute("position",new ye([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ye([0,2,0,0,2,0],2))}}var Uv=new dg;class _s{constructor(e){this._mesh=new ne(Uv,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Nv)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class ff extends Sn{constructor(e,t="tDiffuse"){super();if(this.textureID=t,this.uniforms=null,this.material=null,e instanceof Zt)this.uniforms=e.uniforms,this.material=e;else if(e)this.uniforms=Vn.clone(e.uniforms),this.material=new Zt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader});this._fsQuad=new _s(this.material)}render(e,t,i){if(this.uniforms[this.textureID])this.uniforms[this.textureID].value=i.texture;if(this._fsQuad.material=this.material,this.renderToScreen)e.setRenderTarget(null),this._fsQuad.render(e);else{if(e.setRenderTarget(t),this.clear)e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil);this._fsQuad.render(e)}}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class zc extends Sn{constructor(e,t){super();this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){let n=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let s,o;if(this.inverse)s=0,o=1;else s=1,o=0;if(r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(n.REPLACE,n.REPLACE,n.REPLACE),r.buffers.stencil.setFunc(n.ALWAYS,s,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear)e.clear();if(e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear)e.clear();e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(n.EQUAL,1,4294967295),r.buffers.stencil.setOp(n.KEEP,n.KEEP,n.KEEP),r.buffers.stencil.setLocked(!0)}}class uf extends Sn{constructor(){super();this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class df{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let i=e.getSize(new W);this._width=i.width,this._height=i.height,t=new Wt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Yt}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new ff(Ro),this.copyPass.material.blending=pn,this.timer=new rl}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);if(t!==-1)this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){if(this.timer.update(),e===void 0)e=this.timer.getDelta();let t=this.renderer.getRenderTarget(),i=!1;for(let n=0,r=this.passes.length;n<r;n++){let s=this.passes[n];if(s.enabled===!1)continue;if(s.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(n),s.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),s.needsSwap){if(i){let o=this.renderer.getContext(),a=this.renderer.state.buffers.stencil;a.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),a.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}if(zc!==void 0){if(s instanceof zc)i=!0;else if(s instanceof uf)i=!1}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new W);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let i=this._width*this._pixelRatio,n=this._height*this._pixelRatio;this.renderTarget1.setSize(i,n),this.renderTarget2.setSize(i,n);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,n)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class pf extends Sn{constructor(e,t,i=null,n=null,r=null){super();this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=n,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new ue}render(e,t,i){let n=e.autoClear;e.autoClear=!1;let r,s;if(this.overrideMaterial!==null)s=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial;if(this.clearColor!==null)e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha());if(this.clearAlpha!==null)r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha);if(this.clearDepth==!0)e.clearDepth();if(e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0)e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil);if(e.render(this.scene,this.camera),this.clearColor!==null)e.setClearColor(this._oldClearColor);if(this.clearAlpha!==null)e.setClearAlpha(r);if(this.overrideMaterial!==null)this.scene.overrideMaterial=s;e.autoClear=n}}var pg={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new ue(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class ys extends Sn{constructor(e,t=1,i,n){super();this.strength=t,this.radius=i,this.threshold=n,this.resolution=e!==void 0?new W(e.x,e.y):new W(256,256),this.clearColor=new ue(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),s=Math.round(this.resolution.y/2);this.renderTargetBright=new Wt(r,s,{type:Yt,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let c=0;c<this.nMips;c++){let h=new Wt(r,s,{type:Yt,depthBuffer:!1});h.texture.name="UnrealBloomPass.h"+c,h.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(h);let u=new Wt(r,s,{type:Yt,depthBuffer:!1});u.texture.name="UnrealBloomPass.v"+c,u.texture.generateMipmaps=!1,this.renderTargetsVertical.push(u),r=Math.round(r/2),s=Math.round(s/2)}let o=pg;this.highPassUniforms=Vn.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=n,this.highPassUniforms.smoothWidth.value=0.01,this.materialHighPassFilter=new Zt({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let a=[6,10,14,18,22];r=Math.round(this.resolution.x/2),s=Math.round(this.resolution.y/2);for(let c=0;c<this.nMips;c++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(a[c])),this.separableBlurMaterials[c].uniforms.invSize.value=new W(1/r,1/s),r=Math.round(r/2),s=Math.round(s/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=0.1;let l=[1,0.8,0.6,0.4,0.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new A(1,1,1),new A(1,1,1),new A(1,1,1),new A(1,1,1),new A(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Vn.clone(Ro.uniforms),this.blendMaterial=new Zt({uniforms:this.copyUniforms,vertexShader:Ro.vertexShader,fragmentShader:Ro.fragmentShader,premultipliedAlpha:!0,blending:Oo,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new ue,this._oldClearAlpha=1,this._basic=new Ut,this._fsQuad=new _s(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),n=Math.round(t/2);this.renderTargetBright.setSize(i,n);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(i,n),this.renderTargetsVertical[r].setSize(i,n),this.separableBlurMaterials[r].uniforms.invSize.value=new W(1/i,1/n),i=Math.round(i/2),n=Math.round(n/2)}render(e,t,i,n,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();let s=e.autoClear;if(e.autoClear=!1,e.setClearColor(this.clearColor,0),r)e.state.buffers.stencil.setTest(!1);if(this.renderToScreen)this._fsQuad.material=this._basic,this._basic.map=i.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e);this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let o=this.renderTargetBright;for(let a=0;a<this.nMips;a++)this._fsQuad.material=this.separableBlurMaterials[a],this.separableBlurMaterials[a].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[a].uniforms.direction.value=ys.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[a]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[a].uniforms.colorTexture.value=this.renderTargetsHorizontal[a].texture,this.separableBlurMaterials[a].uniforms.direction.value=ys.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[a]),e.clear(),this._fsQuad.render(e),o=this.renderTargetsVertical[a];if(this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r)e.state.buffers.stencil.setTest(!0);if(this.renderToScreen)e.setRenderTarget(null),this._fsQuad.render(e);else e.setRenderTarget(i),this._fsQuad.render(e);e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=s}_getSeparableBlurMaterial(e){let t=[],i=e/3;for(let s=0;s<e;s++)t.push(0.39894*Math.exp(-0.5*s*s/(i*i))/i);let n=[],r=[];for(let s=1;s<e;s+=2){let o=t[s],a=s+1<e?t[s+1]:0,l=o+a;n.push((s*o+(s+1)*a)/l),r.push(l)}return new Zt({defines:{KERNEL_PAIRS:n.length},uniforms:{colorTexture:{value:null},invSize:{value:new W(0.5,0.5)},direction:{value:new W(0.5,0.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:n},gaussianWeights:{value:r}},vertexShader:`

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

				}`})}_getCompositeMaterial(e){return new Zt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

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

				}`})}}ys.BlurDirectionX=new W(1,0);ys.BlurDirectionY=new W(0,1);var ll={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class mf extends Sn{constructor(){super();this.isOutputPass=!0,this.uniforms=Vn.clone(ll.uniforms),this.material=new us({name:ll.name,uniforms:this.uniforms,vertexShader:ll.vertexShader,fragmentShader:ll.fragmentShader}),this._fsQuad=new _s(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,i){if(this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping){if(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},it.getTransfer(this._outputColorSpace)===gt)this.material.defines.SRGB_TRANSFER="";if(this._toneMapping===bs)this.material.defines.LINEAR_TONE_MAPPING="";else if(this._toneMapping===Es)this.material.defines.REINHARD_TONE_MAPPING="";else if(this._toneMapping===Ts)this.material.defines.CINEON_TONE_MAPPING="";else if(this._toneMapping===pr)this.material.defines.ACES_FILMIC_TONE_MAPPING="";else if(this._toneMapping===As)this.material.defines.AGX_TONE_MAPPING="";else if(this._toneMapping===Rs)this.material.defines.NEUTRAL_TONE_MAPPING="";else if(this._toneMapping===ws)this.material.defines.CUSTOM_TONE_MAPPING="";this.material.needsUpdate=!0}if(this.renderToScreen===!0)e.setRenderTarget(null),this._fsQuad.render(e);else{if(e.setRenderTarget(t),this.clear)e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil);this._fsQuad.render(e)}}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class gf extends es{constructor(){super();this.name="RoomEnvironment",this.position.y=-3.5;let e=new zt;e.deleteAttribute("uv");let t=new ht({side:Bt}),i=new ht,n=new ar(16777215,900,28,2);n.position.set(0.418,16.199,0.3),this.add(n);let r=new ne(e,t);r.position.set(-0.757,13.219,0.717),r.scale.set(31.713,28.305,28.591),this.add(r);let s=new Un(e,i,6),o=new ct;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-0.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),s.setMatrixAt(0,o.matrix),o.position.set(-5.607,-0.754,-0.758),o.rotation.set(0,0.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),s.setMatrixAt(1,o.matrix),o.position.set(6.167,0.857,7.803),o.rotation.set(0,0.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),s.setMatrixAt(2,o.matrix),o.position.set(-2.017,0.018,6.124),o.rotation.set(0,0.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),s.setMatrixAt(3,o.matrix),o.position.set(2.291,-0.756,-2.621),o.rotation.set(0,-0.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),s.setMatrixAt(4,o.matrix),o.position.set(-2.193,-0.369,-5.547),o.rotation.set(0,0.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),s.setMatrixAt(5,o.matrix),this.add(s);let a=new ne(e,Co(50));a.position.set(-16.116,14.37,8.208),a.scale.set(0.1,2.428,2.739),this.add(a);let l=new ne(e,Co(50));l.position.set(-16.109,18.021,-8.207),l.scale.set(0.1,2.425,2.751),this.add(l);let c=new ne(e,Co(17));c.position.set(14.904,12.198,-1.832),c.scale.set(0.15,4.265,6.331),this.add(c);let h=new ne(e,Co(43));h.position.set(-0.462,8.89,14.52),h.scale.set(4.38,5.441,0.088),this.add(h);let u=new ne(e,Co(20));u.position.set(3.235,11.486,-12.541),u.scale.set(2.5,2,0.1),this.add(u);let f=new ne(e,Co(100));f.position.set(0,20,0),f.scale.set(1,0.1,1),this.add(f)}dispose(){let e=new Set;this.traverse((t)=>{if(t.isMesh)e.add(t.geometry),e.add(t.material)});for(let t of e)t.dispose()}}function Co(e){return new Qa({color:0,emissive:16777215,emissiveIntensity:e})}var cl=new A;function bn(e,t,i,n,r,s){let o=2*Math.PI*r/4,a=Math.max(s-2*r,0),l=Math.PI/4;cl.copy(t),cl[n]=0,cl.normalize();let c=0.5*o/(o+a),h=1-cl.angleTo(e)/l;if(Math.sign(cl[i])===1)return h*c;else return a/(o+a)+c+c*(1-h)}class Hi extends zt{constructor(e=1,t=1,i=1,n=2,r=0.1){let s=n*2+1;r=Math.min(e/2,t/2,i/2,r);super(1,1,1,s,s,s);if(this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:i,segments:n,radius:r},s===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let a=new A,l=new A,c=new A(e,t,i).divideScalar(2).subScalar(r),h=this.attributes.position.array,u=this.attributes.normal.array,f=this.attributes.uv.array,m=h.length/6,g=new A,_=0.5/s;for(let d=0,p=0;d<h.length;d+=3,p+=2)switch(a.fromArray(h,d),l.copy(a),l.x-=Math.sign(l.x)*_,l.y-=Math.sign(l.y)*_,l.z-=Math.sign(l.z)*_,l.normalize(),h[d+0]=c.x*Math.sign(a.x)+l.x*r,h[d+1]=c.y*Math.sign(a.y)+l.y*r,h[d+2]=c.z*Math.sign(a.z)+l.z*r,u[d+0]=l.x,u[d+1]=l.y,u[d+2]=l.z,Math.floor(d/m)){case 0:g.set(1,0,0),f[p+0]=bn(g,l,"z","y",r,i),f[p+1]=1-bn(g,l,"y","z",r,t);break;case 1:g.set(-1,0,0),f[p+0]=1-bn(g,l,"z","y",r,i),f[p+1]=1-bn(g,l,"y","z",r,t);break;case 2:g.set(0,1,0),f[p+0]=1-bn(g,l,"x","z",r,e),f[p+1]=bn(g,l,"z","x",r,i);break;case 3:g.set(0,-1,0),f[p+0]=1-bn(g,l,"x","z",r,e),f[p+1]=1-bn(g,l,"z","x",r,i);break;case 4:g.set(0,0,1),f[p+0]=1-bn(g,l,"x","y",r,e),f[p+1]=1-bn(g,l,"y","x",r,t);break;case 5:g.set(0,0,-1),f[p+0]=bn(g,l,"x","y",r,e),f[p+1]=1-bn(g,l,"y","x",r,t);break}}static fromJSON(e){return new Hi(e.width,e.height,e.depth,e.segments,e.radius)}}function gg(e,t=!1){let i=e[0].index!==null,n=new Set(Object.keys(e[0].attributes)),r=new Set(Object.keys(e[0].morphAttributes)),s={},o={},a=e[0].morphTargetsRelative,l=new Oe;l.morphTargetsRelative=a;let c=0;for(let h=0;h<e.length;++h){let u=e[h],f=0,m=0;if(i!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let g in u.attributes){if(!n.has(g))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+g+'" attribute exists among all geometries, or in none of them.'),null;if(s[g]===void 0)s[g]=[];s[g].push(u.attributes[g]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let g in u.morphAttributes){if(!r.has(g))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;if(u.morphAttributes[g].length!==e[0].morphAttributes[g].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have the same number of morph targets for the "'+g+'" morph attribute.'),null;if(o[g]===void 0)o[g]=[];o[g].push(u.morphAttributes[g]),m++}if(m!==r.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of morph attributes."),null;if(t){let g;if(i)g=u.index.count;else if(u.attributes.position!==void 0)g=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,g,h),c+=g}}if(i){let h=0,u=[];for(let f=0;f<e.length;++f){let m=e[f].index;for(let g=0;g<m.count;++g)u.push(m.getX(g)+h);h+=e[f].attributes.position.count}l.setIndex(u)}for(let h in s){let u=mg(s[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(let h in o){let u=o[h][0].length;if(u===0)continue;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let f=0;f<u;++f){let m=[];for(let _=0;_<o[h].length;++_)m.push(o[h][_][f]);let g=mg(m);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}return l}function mg(e){let t,i,n,r=-1,s=0;for(let c=0;c<e.length;++c){let h=e[c];if(t===void 0)t=h.array.constructor;if(t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(i===void 0)i=h.itemSize;if(i!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0)n=h.normalized;if(n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(r===-1)r=h.gpuType;if(r!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=h.count*i}let o=new t(s),a=new $t(o,i,n),l=0;for(let c=0;c<e.length;++c){let h=e[c];if(h.isInterleavedBufferAttribute){let u=l/i;for(let f=0,m=h.count;f<m;f++)for(let g=0;g<i;g++){let _=h.getComponent(f,g);a.setComponent(f+u,g,_)}}else o.set(h.array,l);l+=h.count*i}if(r!==void 0)a.gpuType=r;return a}var wn=window.FUNUI,An=(e)=>document.querySelector(e),Ur=matchMedia("(pointer:coarse)").matches||innerWidth<820;if(Ur)document.body.classList.add("touch");var un=An("#c"),Fr=new Oc({canvas:un,antialias:!Ur,powerPreference:"high-performance"});Fr.setPixelRatio(Math.min(devicePixelRatio||1,Ur?1.5:2));Fr.toneMapping=pr;Fr.toneMappingExposure=1.05;var Ai=new es;Ai.background=new ue(329498);Ai.fog=new Ks(329498,40,95);var Fv=new Lr(Fr);Ai.environment=Fv.fromScene(new gf,0.04).texture;Ai.environmentIntensity=0.18;var $i=new ii(68,1,0.05,120),Nr=null;function Mg(){let e=innerWidth,t=innerHeight;if(Fr.setSize(e,t,!1),$i.aspect=e/t,$i.fov=e/t<1?80:68,$i.updateProjectionMatrix(),Nr)Nr.setSize(e,t)}if(!Ur)Nr=new df(Fr),Nr.addPass(new pf(Ai,$i)),Nr.addPass(new ys(new W(innerWidth,innerHeight),0.2,0.45,1)),Nr.addPass(new mf);addEventListener("resize",Mg);Mg();var Je=(()=>{let e=7;return()=>(e=e*16807%2147483647)/2147483647})();function Ht(e,t){let i=document.createElement("canvas");return i.width=e,i.height=t,i}function Qc(e,t=1,i=1,n=!0){let r=new ln(e);if(r.wrapS=r.wrapT=Qn,r.repeat.set(t,i),r.anisotropy=8,n)r.colorSpace=Rt;return r}function oi(e,t,i,n){let r=e.getImageData(0,0,t,i),s=r.data;for(let o=0;o<s.length;o+=4){let a=(Je()-0.5)*n;s[o]+=a,s[o+1]+=a,s[o+2]+=a}e.putImageData(r,0,0)}var jt={};jt.concrete=(()=>{let e=Ht(512,512),t=e.getContext("2d");t.fillStyle="#7d7e82",t.fillRect(0,0,512,512);for(let i=0;i<40;i++){let n=t.createRadialGradient(Je()*512,Je()*512,5,Je()*512,Je()*512,120),r=Je()*512,s=Je()*512,o=t.createRadialGradient(r,s,5,r,s,90+Je()*90);o.addColorStop(0,Je()>0.5?"rgba(255,255,255,.07)":"rgba(0,0,0,.09)"),o.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=o,t.fillRect(0,0,512,512)}return oi(t,512,512,22),t.strokeStyle="rgba(0,0,0,.35)",t.lineWidth=2,t.strokeRect(1,1,510,510),e})();jt.parquet=(()=>{let e=Ht(512,512),t=e.getContext("2d"),i=256,n=42;for(let r=0;r<12;r++){let s=r%3*85;for(let o=-1;o<3;o++){let a=24+Je()*6,l=28+Je()*12;t.fillStyle=`hsl(${a},48%,${l}%)`,t.fillRect(o*256+s,r*42,254,40);for(let c=0;c<14;c++){t.strokeStyle=`rgba(30,12,0,${0.05+Je()*0.1})`,t.lineWidth=1,t.beginPath();let h=r*42+Je()*42;t.moveTo(o*256+s,h),t.lineTo(o*256+s+256,h+(Je()-0.5)*3),t.stroke()}}}return oi(t,512,512,10),e})();jt.brick=(()=>{let e=Ht(512,512),t=e.getContext("2d");t.fillStyle="#3a2c28",t.fillRect(0,0,512,512);let i=128,n=42;for(let r=0;r<12;r++)for(let s=-1;s<5;s++){let o=r%2*64,a=8+Je()*8,l=30+Je()*14;t.fillStyle=`hsl(${a},${48+Je()*14}%,${l}%)`,t.fillRect(s*i+o+3,r*n+3,i-6,n-6)}return oi(t,512,512,26),e})();jt.carpet=(()=>{let e=Ht(256,256),t=e.getContext("2d");return t.fillStyle="#857f76",t.fillRect(0,0,256,256),oi(t,256,256,26),e})();jt.slats=(()=>{let e=Ht(512,512),t=e.getContext("2d");for(let i=0;i<16;i++)t.fillStyle=`hsl(${28+Je()*5},38%,${24+Je()*8}%)`,t.fillRect(i*32,0,28,512),t.fillStyle="#0c0b0b",t.fillRect(i*32+28,0,4,512);return oi(t,512,512,10),e})();jt.oak=(()=>{let e=Ht(512,512),t=e.getContext("2d"),i=512,n=128;for(let r=0;r<4;r++){let s=r%2*200;for(let o=-1;o<2;o++){t.fillStyle=`hsl(${32+Je()*4},${28+Je()*6}%,${66+Je()*6}%)`,t.fillRect(o*512+s,r*128,510,126);for(let a=0;a<26;a++){t.strokeStyle=`rgba(90,60,30,${0.04+Je()*0.08})`,t.beginPath();let l=r*128+Je()*128;t.moveTo(o*512+s,l),t.lineTo(o*512+s+512,l+(Je()-0.5)*6),t.stroke()}}}return oi(t,512,512,8),e})();jt.greige=(()=>{let e=Ht(256,256),t=e.getContext("2d");return t.fillStyle="#a3a5ab",t.fillRect(0,0,256,256),oi(t,256,256,8),e})();jt.graphite=(()=>{let e=Ht(256,256),t=e.getContext("2d");return t.fillStyle="#26272c",t.fillRect(0,0,256,256),oi(t,256,256,10),e})();jt.plaster=(()=>{let e=Ht(256,256),t=e.getContext("2d");return t.fillStyle="#d9d8d4",t.fillRect(0,0,256,256),oi(t,256,256,10),e})();jt.darkwall=(()=>{let e=Ht(256,256),t=e.getContext("2d");return t.fillStyle="#25252c",t.fillRect(0,0,256,256),oi(t,256,256,12),e})();jt.pvc=(()=>{let e=Ht(256,256),t=e.getContext("2d");return t.fillStyle="#2f6b4f",t.fillRect(0,0,256,256),oi(t,256,256,12),e})();jt.rubber=(()=>{let e=Ht(256,256),t=e.getContext("2d");return t.fillStyle="#23262f",t.fillRect(0,0,256,256),oi(t,256,256,30),e})();jt.tile=(()=>{let e=Ht(256,256),t=e.getContext("2d");return t.fillStyle="#e4e4e2",t.fillRect(0,0,256,256),t.strokeStyle="#a9a9a6",t.lineWidth=3,t.strokeRect(0,0,256,256),oi(t,256,256,8),e})();function ji(e,t,i=0.85,n=0,r=1,s=1,o={}){let a=Qc(jt[e],r/t,s/t);return new ht(Object.assign({map:a,bumpMap:a,bumpScale:e==="brick"?3:0.8,roughness:i,metalness:n},o))}var H=(e,t=0.6,i=0,n)=>new ht(Object.assign({color:e,roughness:t,metalness:i},n||{})),Dt=(e,t=1)=>new ht({color:0,emissive:e,emissiveIntensity:t,toneMapped:!0});function Tf(e,t,i,n=0,r=0,s=0,o=0,a=!0){let l=new ne(t,i);return l.position.set(n,r,s),l.rotation.y=o,l.castShadow=a,l.receiveShadow=!0,e.add(l),l}var z=(e,t,i,n,r,s,o,a,l=0)=>Tf(e,new zt(t,i,n),r,s,o,a,l);var st=(e,t,i,n,r,s,o,a,l=24)=>Tf(e,new Ct(t,i,n,l),r,s,o,a);function Bn(e,t,i,n,r,s,o,a,l=0,c="bold 120px Arial Black, Arial",h,u=!0){let f=Ht(1024,Math.round(1024*n/i)),m=f.getContext("2d");if(h)m.fillStyle=h,m.fillRect(0,0,f.width,f.height);m.font=c,m.textAlign="center",m.textBaseline="middle",m.shadowColor=r,m.shadowBlur=28,m.fillStyle=r,m.fillText(t,f.width/2,f.height/2),m.shadowBlur=8,m.fillText(t,f.width/2,f.height/2);let g=new ln(f);g.colorSpace=Rt;let _=new ne(new Pt(i,n),new Ut({map:g,transparent:!h,toneMapped:!1}));if(_.position.set(s,o,a),_.rotation.y=l,e.add(_),!u)return _;let d=new ar(new ue(r),3,4,2);return d.position.set(s,o,a),d.position.add(new A(Math.sin(l),0,Math.cos(l)).multiplyScalar(0.4)),e.add(d),_}function Di(e,t,i,n,r,s,o=12){let a=new ar(r,s,o,2);return a.position.set(t,i,n),e.add(a),a}var vs=new rt;Ai.add(vs);var qi=new rt;vs.add(qi);var wf=[];function en(e,t,i,n,r,s,o,a=[],l=0.25,c=!1){let h=n-t,u=r-i,f=Math.hypot(h,u),m=-Math.atan2(u,h),g=[],_=0;a.sort((p,y)=>p[0]-y[0]);for(let[p,y]of a){if(p>_)g.push([_,p,0]);g.push([p,y,1]),_=y}if(_<f)g.push([_,f,0]);for(let[p,y,v]of g){let M=y-p,b=t+h/f*(p+y)/2,w=i+u/f*(p+y)/2,x=v?2.2:0,S=v?s-2.2:s;if(S>0.01){let R=new ne(new zt(M,S,l),o(M,S));if(R.position.set(b,x+S/2,w),R.rotation.y=m,R.castShadow=R.receiveShadow=!0,e.add(R),c)wf.push(R)}if(v)for(let R of[p,y]){let U=t+h/f*R,I=i+u/f*R,O=new ne(new zt(0.1,2.2,l+0.06),H(1842208,0.6));O.position.set(U,1.1,I),O.rotation.y=m,e.add(O)}}let d=new ne(new zt(f,0.12,l+0.03),H(1381658,0.7));d.position.set((t+n)/2,0.06,(i+r)/2),d.rotation.y=m,e.add(d)}function ml(e,t,i){let n=new Xi(t.map((o)=>new W(o[0],-o[1]))),r=new _o(n);r.rotateX(-Math.PI/2);let s=new ne(r,i);return s.receiveShadow=!0,e.add(s),s}function Uo(e,t,i){let n=new Xi(e.map((o)=>new W(o[0],-o[1]))),r=new _o(n);r.rotateX(-Math.PI/2),i.side=Ot;let s=new ne(r,i);s.position.y=t,qi.add(s)}jt.carpetDark=(()=>{let e=Ht(256,256),t=e.getContext("2d");t.fillStyle="#1b1c22",t.fillRect(0,0,256,256);for(let i=0;i<6000;i++){let n=20+Je()*22;t.fillStyle=`rgba(${n},${n},${n+7},.5)`,t.fillRect(Je()*256,Je()*256,1+Je()*1.4,1+Je()*2.2)}return oi(t,256,256,12),e})();jt.fabric=(()=>{let e=Ht(256,256),t=e.getContext("2d");t.fillStyle="#3b3e46",t.fillRect(0,0,256,256),t.strokeStyle="rgba(0,0,0,.18)",t.lineWidth=1;for(let i=0;i<256;i+=4)t.beginPath(),t.moveTo(i,0),t.lineTo(i,256),t.stroke(),t.beginPath(),t.moveTo(0,i),t.lineTo(256,i),t.stroke();return oi(t,256,256,14),e})();jt.plywood=(()=>{let e=Ht(512,1024),t=e.getContext("2d"),i=t.createLinearGradient(0,0,512,0);i.addColorStop(0,"#c7a368"),i.addColorStop(0.5,"#d2b077"),i.addColorStop(1,"#c39d62"),t.fillStyle=i,t.fillRect(0,0,512,1024);for(let r=0;r<380;r++){let s=Je()*512,o=Je()*1024;t.strokeStyle=`rgba(${95+Je()*40},${60+Je()*30},25,${0.05+Je()*0.12})`,t.lineWidth=0.6+Je()*1.6,t.beginPath(),t.moveTo(s,o),t.bezierCurveTo(s+Je()*16-8,o+120,s+Je()*16-8,o+260,s+Je()*10-5,o+380+Je()*200),t.stroke()}for(let r=0;r<4;r++){let s=Je()*512,o=Je()*1024;for(let a=3;a<22;a+=4)t.strokeStyle=`rgba(90,55,20,${0.25-a/120})`,t.lineWidth=1.5,t.beginPath(),t.ellipse(s,o,a*0.7,a*1.5,0,0,7),t.stroke()}let n=83.9344262295082;for(let r=0;r<6;r++)for(let s=0;s<12;s++){let o=38+r*n,a=40+s*n;if(o>500)continue;t.fillStyle="rgba(30,18,8,.85)",t.beginPath(),t.arc(o,a,5,0,7),t.fill(),t.fillStyle="rgba(255,230,190,.35)",t.beginPath(),t.arc(o-1,a-1,1.6,0,7),t.fill()}return t.strokeStyle="rgba(40,24,10,.7)",t.lineWidth=3,t.strokeRect(1,1,510,1022),oi(t,512,1024,10),e})();jt.matBlue=(()=>{let e=Ht(256,512),t=e.getContext("2d");return t.fillStyle="#244f9e",t.fillRect(0,0,256,512),oi(t,256,512,26),t.strokeStyle="rgba(8,16,40,.9)",t.lineWidth=6,t.strokeRect(2,2,252,508),t.strokeStyle="rgba(160,190,255,.35)",t.lineWidth=2,t.setLineDash([7,6]),t.strokeRect(12,12,232,488),e})();jt.steel=(()=>{let e=Ht(128,128),t=e.getContext("2d");return t.fillStyle="#5b6068",t.fillRect(0,0,128,128),oi(t,128,128,18),e})();var xt=new rt;vs.add(xt);var Ni=3.2,Sg=[[-8.8,-3.85],[8.8,-3.85],[8.8,3.85],[-8.8,3.85]],bg=[[-3.9,-9.4],[4.3,-9.4],[4.3,-3.85],[-3.9,-3.85]],Br;function jc(e,t,i){let n=ji(e,t,i,0,1,1);return n.map.repeat.set(1/t,1/t),n.bumpMap=n.map,n}var Ms=(e,t)=>ji("darkwall",1.4,0.9,0,e,t),Bv=(e,t)=>ji("graphite",1.4,0.85,0,e,t),Ov=(e,t)=>ji("slats",1,0.7,0,e,t),Eg=jc("carpetDark",0.6,1);ml(xt,Sg,Eg);ml(xt,bg,Eg);en(xt,-8.8,-3.85,-3.9,-3.85,Ni,Ms);en(xt,-3.9,-3.85,-3.9,-9.4,Ni,Ms);en(xt,-3.9,-9.4,4.3,-9.4,Ni,Ov);en(xt,4.3,-9.4,4.3,-3.85,Ni,Ms);en(xt,4.3,-3.85,8.8,-3.85,Ni,Ms);en(xt,8.8,-3.85,8.8,3.85,Ni,Bv);en(xt,8.8,3.85,-8.8,3.85,Ni,Ms,[[9.8,11.6]],0.25,!0);en(xt,-8.8,3.85,-8.8,-3.85,Ni,Ms,[[2.65,4.85]]);for(let[e,t]of[[-3.9,-3.85],[4.3,-3.85]])z(xt,0.5,Ni,0.5,H(2763569,0.7),e,Ni/2,t),z(xt,0.54,0.12,0.54,H(855312,0.6),e,0.06,t);var Tg=()=>H(1908260,0.9);Uo(Sg,Ni,Tg());Uo(bg,Ni,Tg());z(qi,8.6,0.34,0.55,H(1381914,0.85),0.2,Ni-0.17,-3.85);for(let[e,t,i,n,r]of[[0,-3.62,17.2,0.06,6966527],[0,3.62,17.2,0.06,6966527],[-8.58,0,0.06,7.2,6966527],[8.58,0,0.06,7.2,6966527],[0.2,-9.18,8,0.06,16762512],[-3.68,-6.6,0.06,5.2,16762512],[4.08,-6.6,0.06,5.2,16762512]])z(qi,i,0.025,n,Dt(r,3.5),e,Ni-0.015,t);for(let e=0;e<6;e++)for(let t of[-1.8,1.8])st(qi,0.07,0.07,0.02,Dt(16773856,8),-7+e*2.8+1,Ni-0.02,t);for(let e=0;e<3;e++)for(let t of[-5.5,-8])st(qi,0.07,0.07,0.02,Dt(16773856,8),-2.4+e*2.6+0.2,Ni-0.02,t);Ai.add(new nl(16777215,0.34));Fr.toneMappingExposure=0.8;Ai.environmentIntensity=0.3;Di(xt,0.2,2.8,0,16773598,14,14);Di(xt,-6.2,2.8,-2.2,16773340,10,9);Di(xt,-6.2,2.8,2.2,16773340,10,9);Di(xt,0.2,2.9,-6.6,16774116,16,10);Di(xt,2.9,2.5,2.5,16761466,10,8);Di(xt,2.9,0.35,1.6,11554047,3,4);Di(xt,7.3,2.6,0,9071871,5,7);Di(xt,-0.6,2.7,0.4,3725567,3,6);var Io=(e,t,i,n,r=0,s=0,o=0,a=vs)=>{let l=new ne(new zt(e,t,i),n);return l.position.set(r,s,o),a.add(l),l};function wg(e,t,i,n){let r=document.createElement("canvas");r.width=e,r.height=t,i(r.getContext("2d"),e,t);let s=new ln(r);if(s.colorSpace=Rt,s.anisotropy=8,n)s.wrapS=s.wrapT=Qn,s.repeat.set(n[0],n[1]);return s}var eh=(e,t={})=>new ht({color:e,roughness:t.r??0.6,metalness:t.m??0.1,emissive:t.e??0,emissiveIntensity:t.ei??1,side:t.side}),Ag=(e,t=1)=>new Ut({color:new ue(e).multiplyScalar(t),toneMapped:!1});function Rg(e,t,i,n,r,s,o,a=0){let l=new ne(new Pt(e,t),new Ut({map:i,transparent:!0,toneMapped:!1}));return l.position.set(r,s,o),l.rotation.y=a,n.add(l),l}var Do=wg,zv=eh;var Af=Rg,Cg=[];function Gv(e,{w:t=1024,h:i=384,font:n="900 250px Inter,Arial,sans-serif",color:r="#3dff9a",fill:s="#c8ffe2",lw:o=10,blur:a=30}={}){return Do(t,i,(l,c,h)=>{l.clearRect(0,0,c,h),l.font=n,l.textAlign="center",l.textBaseline="middle",l.shadowColor=r,l.shadowBlur=a,l.lineWidth=o,l.strokeStyle=r,l.lineJoin="round",l.strokeText(e,c/2,h/2+6),l.shadowBlur=0,l.fillStyle=s,l.fillText(e,c/2,h/2+6)})}function Hv(e,t="#3dff9a",i=1){let n=Gv(e,{w:768,h:192,font:"800 96px Inter,Arial,sans-serif",color:t,fill:"#ffffff",lw:6,blur:18}),r=new Fa(new rs({map:n,transparent:!0,depthWrite:!1,toneMapped:!1}));return r.scale.set(2.4*i,0.6*i,1),r}(function(){let e=Io,t=wg,i=eh,n=Ag,r=Rg,s={games:[["VAL","Valorant","#ff4655","#fff"],["LoL","League","#1b3a8a","#e9c46a"],["CS2","CS2","#e8793a","#1a0f05"],["RL","Rocket League","#1e7bff","#ff9a4a"],["ARK","Arkheron","#1fb89a","#032a22"],["S2","SMITE 2","#6a3ad0","#ffd68a"]]},o=new rt;o.position.set(8.19,0,0),o.rotation.y=-Math.PI/2,xt.add(o),Br=o;let a=i(790562,{r:0.4,m:0.4});e(1.9,0.05,0.85,a,0,0.75,0,o),[[-0.9,-0.38],[0.9,-0.38],[-0.9,0.38],[0.9,0.38]].forEach(([L,N])=>e(0.05,0.75,0.05,a,L,0.375,N,o)),e(1.9,0.015,0.02,n(3824895,1.4),0,0.72,0.43,o);let l=t(512,300,(L,N,ee)=>{L.fillStyle="#12062a",L.fillRect(0,0,N,ee),L.strokeStyle="#ff4fa6",L.globalAlpha=0.5,L.lineWidth=2,L.beginPath(),L.moveTo(20,40),L.quadraticCurveTo(70,80,40,140),L.moveTo(490,30),L.quadraticCurveTo(440,90,470,150),L.stroke(),L.globalAlpha=1,L.font="900 100px Inter,Arial",L.textAlign="center",L.shadowColor="#ff4f8a",L.shadowBlur=24,L.lineWidth=6,L.strokeStyle="#ff4f8a",L.strokeText("FONGER",N/2,180),L.shadowBlur=0,L.fillStyle="#2a0a2e",L.fillText("FONGER",N/2,180)}),c=s&&s.games||[],h=t(512,300,(L,N,ee)=>{let G=L.createLinearGradient(0,0,N,ee);G.addColorStop(0,"#10163f"),G.addColorStop(0.55,"#2a1a6e"),G.addColorStop(1,"#5a1f78"),L.fillStyle=G,L.fillRect(0,0,N,ee),c.forEach((Y,K)=>{let pe=60+K%3*150,X=40+Math.floor(K/3)*110;L.fillStyle=Y[2],L.beginPath(),L.roundRect(pe,X,90,90,20),L.fill(),L.fillStyle=Y[3],L.font="900 30px Inter,Arial",L.textAlign="center",L.fillText(Y[0],pe+45,X+56)}),L.fillStyle="rgba(5,6,15,.9)",L.fillRect(0,ee-26,N,26),L.fillStyle="#38e8ff",L.fillRect(10,ee-20,14,14)});function u(L,N,ee,G,Y,K,pe,X=0,ie=0,Me=0){new bo().load(L,(Se)=>{Se.colorSpace=Rt,Se.anisotropy=8;let ze=new ne(new Pt(N,ee*(Se.image.height/Se.image.width)/(ee/N)),new Ut({map:Se,transparent:!0,toneMapped:!1}));ze.position.set(Y,K,pe),ze.rotation.set(X,ie,Me),G.add(ze)},void 0,()=>{})}let f=i(460814,{r:0.55,m:0.25}),m=i(724246,{r:0.28,m:0.6}),g=i(15329774,{r:0.45,m:0.05}),_=i(1382175,{m:0.8,r:0.35});function d(L,N,ee){let K=new rt;K.position.set(L,0.775,-0.2),K.rotation.y=N,o.add(K);let pe=new ne(new Hi(0.56,0.32,0.025,3,0.006),m);pe.position.y=0.3,K.add(pe),r(0.542,0.3,ee,K,0,0.3,0.0135),e(0.03,0.006,0.001,i(1777451,{m:0.8}),0,0.146,0.0135,K);let X=new ne(new Er(0.0035,8),n(4063130,2));X.position.set(0.2,0.145,0.0135),K.add(X);let ie=new ne(new Ct(0.012,0.014,0.17,12),g);ie.position.set(0,0.2,-0.03),K.add(ie);let Me=new ne(new Ct(0.11,0.115,0.012,40),g);Me.position.set(0,0.006,-0.02),K.add(Me)}function p(L,N,ee){let K=new rt;K.position.set(L,0.775,-0.2),K.rotation.y=N,o.add(K);let pe=new ne(new Hi(0.62,0.355,0.028,3,0.006),m);pe.position.y=0.36,K.add(pe),e(0.28,0.2,0.03,f,0,0.36,-0.028,K),r(0.604,0.33699999999999997,ee,K,0,0.36,0.0155),e(0.03,0.006,0.001,i(1777451,{m:0.8}),0,0.1875,0.0155,K);let X=new rt;X.position.set(L,0.775,-0.405),o.add(X),e(0.06,0.05,0.05,_,0,-0.012,0,X),e(0.05,0.012,0.085,_,0,-0.035,0,X);let ie=new ne(new Ct(0.014,0.014,0.42,16),_);ie.position.set(0,0.21,0),X.add(ie);let Me=new ne(new Ct(0.02,0.02,0.03,16),_);Me.position.set(0,0.4,0),X.add(Me),e(0.03,0.022,0.12,_,0,0.4,0.06,X);let Se=new ne(new Ct(0.017,0.017,0.03,16),_);Se.position.set(0,0.4,0.12),X.add(Se),e(0.03,0.02,0.06,_,0,0.4,0.15,X),e(0.1,0.1,0.012,_,0,0.36,-0.05,K)}d(-0.52,0.3,l),p(0.12,-0.04,h);{let L=new ne(new Ct(0.045,0.047,0.01,32),g);L.position.set(-0.02,0.78,-0.08),o.add(L);let N=new ne(new xo(0.028,0.033,32),n(8019199,1.2));N.rotation.x=-Math.PI/2,N.position.set(-0.02,0.7855,-0.08),o.add(N);let ee=new ne(new Ct(0.03,0.03,0.15,24),i(657933,{r:0.4,m:0.6}));ee.position.set(0.5,0.85,-0.14),o.add(ee);let G=new ne(new Ct(0.031,0.031,0.012,24),_);G.position.set(0.5,0.92,-0.14),o.add(G)}let y=t(1024,440,(L,N,ee)=>{L.fillStyle="#0c0d11",L.fillRect(0,0,N,ee),L.strokeStyle="#2b2e3a",L.lineWidth=4,L.setLineDash([12,9]),L.strokeRect(12,12,N-24,ee-24),L.setLineDash([]),L.font="700 64px Inter,Arial",L.fillStyle="#9aa0b4",L.textAlign="right",L.fillText("Logitech G",N-52,ee-44)}),v=new ne(new Pt(0.9,0.38),new ht({map:y,roughness:0.95}));v.rotation.x=-Math.PI/2,v.position.set(-0.1,0.7765,0.2),o.add(v);let M=t(1480,570,(L,N,ee)=>{L.fillStyle="#0a0b10",L.fillRect(0,0,N,ee);let G=76,Y=40,K=40,pe="#6a4cff",X=(Se,ze,we,pt,Ne=1)=>{let Ue=Y+Se*G+3,ot=K+ze*G+3,ae=we*G-6,fe=Ne*G-6;L.shadowColor=pe,L.shadowBlur=16,L.fillStyle="#12141c",L.beginPath(),L.roundRect(Ue,ot,ae,fe,10),L.fill(),L.shadowBlur=0,L.strokeStyle="rgba(106,76,255,.65)",L.lineWidth=2,L.stroke(),L.fillStyle="#c4b8ff",L.font="600 21px Inter,Arial",L.textAlign="center",L.textBaseline="middle",L.fillText(pt,Ue+ae/2,ot+fe/2+1)},ie=(Se,ze,we=0)=>{let pt=we;ze.forEach(([Ne,Ue])=>{if(Ne!==null)X(pt,Se,Ue,Ne);pt+=Ue})};ie(0,[["Esc",1],[null,1],["F1",1],["F2",1],["F3",1],["F4",1],[null,0.5],["F5",1],["F6",1],["F7",1],["F8",1],[null,0.5],["F9",1],["F10",1],["F11",1],["F12",1],[null,0.25],["Prt",1],["Scr",1],["Pau",1]]);let Me="1234567890".split("");ie(1.5,[["`",1],...Me.map((Se)=>[Se,1]),["-",1],["=",1],["⌫",2],[null,0.25],["Ins",1],["Hm",1],["Pg↑",1]]),ie(2.5,[["Tab",1.5],..."QWERTYUIOP".split("").map((Se)=>[Se,1]),["[",1],["]",1],["\\",1.5],[null,0.25],["Del",1],["End",1],["Pg↓",1]]),ie(3.5,[["Caps",1.75],..."ASDFGHJKL".split("").map((Se)=>[Se,1]),[";",1],["'",1],["Enter",2.25]]),ie(4.5,[["Shift",2.25],..."ZXCVBNM".split("").map((Se)=>[Se,1]),[",",1],[".",1],["/",1],["Shift",2.75],[null,1.25],["↑",1]]),ie(5.5,[["Ctrl",1.25],["Win",1.25],["Alt",1.25],["",6.25],["Alt",1.25],["Fn",1.25],["Menu",1.25],["Ctrl",1.25],[null,0.25],["←",1],["↓",1],["→",1]])}),b=new rt;b.position.set(-0.2,0.7765,0.22),o.add(b);let w=new ne(new Hi(0.365,0.016,0.142,3,0.006),i(789778,{r:0.4,m:0.55}));w.position.y=0.008,b.add(w);let x=new ne(new Pt(0.352,0.13285621621621618),new ht({map:M,emissiveMap:M,emissive:16777215,emissiveIntensity:0.55,roughness:0.6}));x.rotation.x=-Math.PI/2,x.position.y=0.0166,b.add(x),u("logos/razer.png",0.03,0.03,b,0.14,0.0168,-0.06,-Math.PI/2);let S=new rt;S.position.set(0.27,0.7775,0.21),S.rotation.y=0.12,o.add(S);{let L=new vn(1,40,28),N=L.attributes.position;for(let Y=0;Y<N.count;Y++){let K=N.getX(Y),pe=N.getY(Y),X=N.getZ(Y);pe=Math.max(pe,0);let ie=X*0.5+0.5,Me=0.0225+0.0095*ie;N.setXYZ(Y,K*Me*(1-0.18*Math.max(0,pe)),pe*(0.0115+0.013*ie),X*0.0635)}L.computeVertexNormals(),S.add(new ne(L,i(657932,{r:0.62,m:0.1}))),e(0.0014,0.0008,0.034,i(0),0,0.0185,-0.028,S);let ee=new ne(new Ct(0.0045,0.0045,0.006,14),i(2763830,{r:0.5,m:0.5}));ee.rotation.z=Math.PI/2,ee.position.set(0,0.0215,-0.026),S.add(ee);let G=new ne(new Er(0.0025,10),n(4063130,0.9));G.rotation.x=-Math.PI/2,G.position.set(0,0.0195,0.01),S.add(G),u("logos/logitech-g.png",0.012,0.012,S,0,0.0245,0.032,-Math.PI/2)}let R=new rt;R.position.set(-0.7,0.775,0.26),R.rotation.y=0.5,o.add(R);let U=i(14252331,{r:0.28,m:0.85}),I=i(789518,{r:0.9});{let L=new rt;L.position.y=0.05,L.rotation.x=Math.PI/2-0.15,R.add(L);let N=new ne(new kn(0.088,0.0085,10,40,Math.PI),i(657932,{r:0.7}));N.position.y=0.02,L.add(N),[-1,1].forEach((ee)=>{let G=new ne(new Ct(0.047,0.044,0.03,36),U);G.rotation.z=Math.PI/2,G.position.set(ee*0.093,-0.06,0),L.add(G);let Y=new ne(new kn(0.04,0.005,8,32),i(789518,{m:0.7,r:0.35}));Y.rotation.y=Math.PI/2,Y.position.set(ee*0.108,-0.06,0),L.add(Y);let K=new ne(new Ct(0.048,0.048,0.022,36),I);K.rotation.z=Math.PI/2,K.position.set(ee*0.075,-0.06,0),L.add(K)})}let O=Cg,te="n",P=new rt;P.position.set(0.83,1.025,-0.15),P.rotation.y=0.28,o.add(P);{let G=i(658194,{r:0.4,m:0.55});e(0.22,0.014,0.46,i(658194,{r:0.6,m:0.4}),0,0.243,0,P),e(0.22,0.012,0.46,G,0,-0.244,0,P),e(0.01,0.5,0.46,G,0.105,0,0,P),e(0.22,0.5,0.01,i(460813),0,0,-0.225,P),[-1,1].forEach((Ne)=>e(0.012,0.5,0.012,G,-0.104,0,Ne*0.224,P)),e(0.22,0.5,0.012,i(723988,{r:0.5,m:0.4}),0,0,0.224,P);let Y=t(256,256,(Ne,Ue,ot)=>{Ne.fillStyle="#17104a",Ne.fillRect(0,0,Ue,ot);let ae=Ne.createRadialGradient(Ue/2,ot/2,10,Ue/2,ot/2,Ue/2);ae.addColorStop(0,"#9a7bff"),ae.addColorStop(1,"#4a2cff"),Ne.fillStyle=ae,Ne.fillRect(0,0,Ue,ot),Ne.strokeStyle="#1a0f5a",Ne.lineWidth=3;let fe=14;for(let de=-1;de<14;de++)for(let Pe=-1;Pe<14;Pe++){let Fe=Pe*fe*1.75+de%2*fe*0.87,$e=de*fe*1.5;Ne.beginPath();for(let We=0;We<6;We++){let ft=Math.PI/3*We+Math.PI/6;Ne.lineTo(Fe+Math.cos(ft)*fe,$e+Math.sin(ft)*fe)}Ne.closePath(),Ne.stroke()}Ne.fillStyle="#05061a",Ne.beginPath();for(let de=0;de<6;de++){let Pe=Math.PI/3*de;Ne.lineTo(Ue/2+Math.cos(Pe)*34,ot/2+Math.sin(Pe)*34)}Ne.closePath(),Ne.fill()});e(0.13,0.46,0.004,i(526618),0.02,0,0.2305,P),[0.155,0,-0.155].forEach((Ne)=>{let Ue=new ne(new Er(0.064,40),new Ut({map:Y,toneMapped:!1,color:new ue(1.1,1.1,1.4)}));Ue.position.set(0.02,Ne,0.23320000000000002),P.add(Ue)});let K=-0.08,pe=e(0.006,0.44,0.36,i(1053471,{r:0.6,m:0.3}),0.08,0,-0.03,P),X=new ne(new Ct(0.036,0.036,0.03,32),i(658194,{r:0.3,m:0.7}));X.rotation.z=Math.PI/2,X.position.set(K+0.03,0.09,0.07),P.add(X);let ie=new ne(new xo(0.019,0.03,32),n(4877567,1.8));ie.rotation.y=-Math.PI/2,ie.position.set(K+0.0125,0.09,0.07),P.add(ie);let Me=(Ne)=>P.add(new ne(new $a(new uo(Ne.map((Ue)=>new A(...Ue))),16,0.0075,8),i(14672878,{r:0.5})));Me([[K+0.03,0.12,0.09],[K+0.03,0.2,0.1],[K+0.03,0.235,0.05]]),Me([[K+0.03,0.12,0.05],[K+0.03,0.2,0],[K+0.03,0.235,-0.04]]);let Se=new ne(new Hi(0.04,0.05,0.3,2,0.006),i(658192,{r:0.35,m:0.7}));Se.position.set(K+0.03,-0.06,0.02),P.add(Se),e(0.004,0.004,0.26,n(16054015,0.9),K+0.008,-0.06,0.02,P),[0,0.016].forEach((Ne)=>e(0.012,0.11,0.008,n(6966527,1.2),K+0.03,0.13,-0.09-Ne,P));let ze=e(0.04,0.03,0.3,i(723986,{r:0.5,m:0.5}),0,0.22,-0.02,P),we=new ne(new Pt(0.44,0.48),new yo({color:659488,transparent:!0,opacity:0.2,roughness:0.04,clearcoat:1,side:Ot,depthWrite:!1}));we.rotation.y=-Math.PI/2,we.position.set(-0.108,0,0),P.add(we),((Ne,Ue)=>e(0.006,Ue,0.46,G,-0.107,Ne,0,P))(0.245,0.012)}{let L=new ar(5913855,3.2,3,1.6);L.position.set(0.85,1.2,-0.6),o.add(L)}let Z=new rt;Z.position.set(0.05,0,0.9),Z.rotation.y=0.22,o.add(Z);{let L=i(856356,{r:0.55,m:0.05}),N=i(1716106,{r:0.5,e:662118,ei:0.12}),ee=i(460813,{r:0.4,m:0.7}),G=new ne(new Hi(0.52,0.09,0.5,4,0.04),L);G.position.y=0.5,Z.add(G),[-1,1].forEach((X)=>{let ie=new ne(new Hi(0.06,0.1,0.46,3,0.025),N);ie.position.set(X*0.25,0.54,0),Z.add(ie)});let Y=new ne(new Hi(0.5,0.72,0.09,4,0.04),L);Y.position.set(0,0.92,0.26),Y.rotation.x=-0.12,Z.add(Y),[-1,1].forEach((X)=>{let ie=new ne(new Hi(0.07,0.5,0.1,3,0.03),N);ie.position.set(X*0.235,0.88,0.235),ie.rotation.x=-0.12,Z.add(ie)});let K=new ne(new Hi(0.26,0.17,0.08,3,0.04),N);K.position.set(0,1.28,0.3),K.rotation.x=-0.12,Z.add(K),[-1,1].forEach((X)=>{e(0.04,0.2,0.04,ee,X*0.3,0.68,0.02,Z);let ie=new ne(new Hi(0.07,0.03,0.26,2,0.012),L);ie.position.set(X*0.3,0.79,-0.03),Z.add(ie)});let pe=new ne(new Ct(0.03,0.035,0.34,12),ee);pe.position.y=0.3,Z.add(pe);for(let X=0;X<5;X++){let ie=X/5*Math.PI*2,Me=e(0.3,0.03,0.045,ee,0,0.06,0,Z);Me.position.set(Math.sin(ie)*0.15,0.07,Math.cos(ie)*0.15),Me.rotation.y=ie-Math.PI/2;let Se=new ne(new vn(0.028,10,8),i(1118744,{r:0.8}));Se.position.set(Math.sin(ie)*0.31,0.03,Math.cos(ie)*0.31),Z.add(Se)}}{let L=new ne(new Er(1.5,64),new ht({map:t(512,512,(N,ee,G)=>{let Y=N.createRadialGradient(ee/2,G/2,20,ee/2,G/2,ee/2);Y.addColorStop(0,"#1a1f4e"),Y.addColorStop(1,"#0c0f2a"),N.fillStyle=Y,N.fillRect(0,0,ee,G),N.strokeStyle="#3a5cff",N.globalAlpha=0.6,N.lineWidth=8,N.beginPath(),N.arc(ee/2,G/2,ee/2-14,0,7),N.stroke()}),roughness:1}));L.rotation.x=-Math.PI/2,L.position.set(0.1,0.006,0.75),o.add(L)}})();function kv(){let e=new rt,t=Io,i=eh;{let o=i(723984,{r:0.38,m:0.65}),a=i(328966,{r:0.9}),l=new bo().load("fun-print.jpg");l.colorSpace=Rt,l.anisotropy=8;let c=new ne(new Hi(2.4,0.042,0.6,4,0.014),o);c.position.y=0.6789999999999999,e.add(c);let h=new ne(new Pt(2.364,0.564),new yo({map:l,roughness:0.5,clearcoat:0.35,clearcoatRoughness:0.35}));h.rotation.x=-Math.PI/2,h.position.y=0.7011999999999999,e.add(h);let u=i(460812);[-0.6,0,0.6].forEach((d)=>t(0.005,0.0012,0.58,u,d,0.7016,0,e)),[-1,1].forEach((d)=>t(2.3,0.03,0.02,o,0,0.6399999999999999,d*0.255,e));let f=1.0999999999999999,m=0.255,g=(d,p,y,v,M,b)=>{let w=new ne(new Ct(d,d,p,16),y);return w.position.set(v,M,b),e.add(w),w};[-1,0,1].forEach((d)=>[-1,1].forEach((p)=>{let y=d*f,v=p*m;g(0.0175,0.38,o,y,0.47,v),g(0.024,0.05,o,y,0.36,v),g(0.0145,0.36,o,y,0.18,v),g(0.019,0.02,a,y,0.01,v)}));let _=(d,p,y)=>{let v=new A(...d),M=new A(...p),b=M.clone().sub(v),w=new ne(new Ct(y,y,b.length(),10),o);w.position.copy(v.clone().add(M).multiplyScalar(0.5)),w.quaternion.setFromUnitVectors(new A(0,1,0),b.normalize()),e.add(w)};[-f,0,f].forEach((d)=>_([d,0.2,-m],[d,0.2,m],0.011)),[-f,f].forEach((d)=>_([d,0.56,-m],[d,0.56,m],0.009))}return e}function Vv(e,t,i,n,r){st(e,0.045,0.034,0.11,new ht({color:r,roughness:0.4,side:Ot}),t,i+0.055,n,16)}function vf(e,t,i,n,r=1,s=13936170){let o=[[0.001,0],[0.07,0],[0.07,0.015],[0.03,0.03],[0.02,0.12],[0.05,0.15],[0.07,0.17],[0.09,0.26],[0.1,0.34],[0.08,0.36],[0.075,0.34],[0.07,0.25],[0.05,0.18],[0.001,0.17]].map((l)=>new W(l[0],l[1])),a=Tf(e,new Ka(o,24),new ht({color:s,roughness:0.18,metalness:1}),t,i,n);return a.scale.setScalar(r),a}function Wv(e,t,i){z(e,t,i,0.03,H(921104,0.5),0,i/2+0.2,-0.18);for(let r of[-1,1])z(e,0.05,i,0.4,H(921104,0.5),r*(t/2-0.025),i/2+0.2,0);z(e,t,0.06,0.4,H(921104,0.5),0,i+0.2,0),z(e,t,0.2,0.4,H(921104,0.5),0,0.1,0),z(e,t-0.12,i-0.2,0.02,new ht({color:12577023,transparent:!0,opacity:0.12,roughness:0.02}),0,i/2+0.2,0.2);let n=4;for(let r=0;r<n;r++){let s=0.45+r*((i-0.5)/n);z(e,t-0.1,0.02,0.34,H(3816000,0.3,0.4),0,s,0),z(e,t-0.1,0.01,0.01,Dt(14674687,5),0,s-0.015,0.14);for(let o=0;o<4;o++)if((r+o)%3===0)vf(e,-t/2+0.25+o*(t-0.5)/3,s+0.01,0,0.3+Je()*0.12,[13936170,12633288][o%2]);else z(e,0.16,0.12+Je()*0.05,0.14,H([2838527,16726843,2007130,13206586][o],0.5),-t/2+0.25+o*(t-0.5)/3,s+0.07,0)}}(function(){let e=new rt;e.position.set(-8.675,0,-2.6),e.rotation.y=Math.PI/2,xt.add(e),z(e,1,1,0.1,H(1908258,0.6),0,1.73,0),z(e,0.08,1,0.25,H(1908258,0.6),-0.5,1.73,0.09),z(e,0.08,1,0.25,H(1908258,0.6),0.5,1.73,0.09);let t=Ht(512,512),i=t.getContext("2d");i.translate(256,256);let n=["#e8e1c0","#111"];for(let a=0;a<20;a++)for(let[l,c,h,u]of[[240,215,"#d12","#093"],[215,150,"#e8e1c0","#111"],[150,135,"#d12","#093"],[135,40,"#e8e1c0","#111"]])i.beginPath(),i.moveTo(0,0),i.arc(0,0,l,(a-5.5)*Math.PI/10,(a-4.5)*Math.PI/10),i.closePath(),i.fillStyle=a%2?h:u,i.fill(),i.beginPath(),i.moveTo(0,0),i.arc(0,0,c,(a-5.5)*Math.PI/10,(a-4.5)*Math.PI/10),i.closePath(),i.fillStyle=a%2?c==215||c==135?"#e8e1c0":n[1]:n[0];i.setTransform(1,0,0,1,0,0),i.fillStyle="#111",i.fillRect(0,0,512,512),i.translate(256,256);let r=[20,1,18,4,13,6,10,15,2,17,3,19,7,16,8,11,14,9,12,5];for(let a=0;a<20;a++){let l=(a-0.5)*Math.PI/10-Math.PI/2,c=l+Math.PI/10,h=a%2===0,u=[[250,220,h?"#c8202a":"#0b8a3e"],[220,150,h?"#111":"#e8e1c0"],[150,125,h?"#c8202a":"#0b8a3e"],[125,40,h?"#111":"#e8e1c0"]];for(let[f,m,g]of u)i.beginPath(),i.arc(0,0,f,l,c),i.arc(0,0,m,c,l,!0),i.closePath(),i.fillStyle=g,i.fill()}i.beginPath(),i.arc(0,0,40,0,7),i.fillStyle="#0b8a3e",i.fill(),i.beginPath(),i.arc(0,0,16,0,7),i.fillStyle="#c8202a",i.fill();let s=new ln(t);s.colorSpace=Rt;let o=new ne(new Er(0.225,48),new ht({map:s,roughness:0.8}));o.position.set(0,1.73,0.06),e.add(o),Bn(e,"DARTS",0.8,0.28,"#ff3b3b",0,2.45,0.05,0,"bold 180px Arial Black"),z(e,0.6,0.45,0.04,H(1448984,0.8),0.95,1.6,0.05),z(e,0.01,0.01,0.01,H(0)),z(e,0.9,0.012,0.04,H(15658734,0.5),0,0.007,2.37),z(e,0.9,0.012,0.01,Dt(16726843,3),0,0.012,2.35),Di(e,0,2.5,0.5,16771522,4,5)})();var Gc=(e,t=0.95)=>ji("fabric",0.5,t,0,1,1,{color:e}),Gt=(e,t,i,n,r,s,o,a,l=0.07,c=0,h=0)=>{let u=new ne(new Hi(t,i,n,4,l),r);return u.position.set(s,o,a),u.rotation.x=c,u.rotation.z=h,u.castShadow=u.receiveShadow=!0,e.add(u),u},qc;function Xv(){let e=new rt;e.position.set(0.2,0,-4.3),e.rotation.y=Math.PI,xt.add(e);let t=Gc(4869462),i=Gc(6843512),n=Gc(7567493),s=new Xi([[-2.7,0],[2.7,0],[2.7,2.6],[1.7,2.6],[1.7,1],[-1.7,1],[-1.7,2.6],[-2.7,2.6]].map((p)=>new W(p[0],-p[1]))),o=new go(s,{depth:0.24,bevelEnabled:!0,bevelThickness:0.05,bevelSize:0.05,bevelSegments:4,curveSegments:4});o.rotateX(-Math.PI/2);let a=new ne(o,t);a.position.y=0.1,a.castShadow=a.receiveShadow=!0,e.add(a);for(let[p,y]of[[-2.6,0.1],[2.6,0.1],[-2.6,2.5],[2.6,2.5],[-1.8,0.9],[1.8,0.9]])st(e,0.03,0.03,0.08,H(723725,0.4,0.6),p,0.04,y,10);let l=Dt(6966527,0.9);z(e,5.2,0.012,0.02,l,0,0.075,0.03),Gt(e,5.4,0.58,0.28,t,0,0.67,0.14,0.09);for(let p of[-1,1])Gt(e,0.28,0.58,2.32,t,p*2.56,0.67,1.44,0.09);for(let p=0;p<3;p++)Gt(e,1.1,0.17,0.7,i,-1.13+p*1.13,0.5,0.65,0.07);for(let p of[-1,1])Gt(e,0.72,0.17,0.7,n,p*2.06,0.5,0.65,0.07),Gt(e,0.72,0.17,0.78,i,p*2.06,0.5,1.4,0.07),Gt(e,0.72,0.17,0.78,i,p*2.06,0.5,2.2,0.07),Gt(e,0.22,0.46,0.9,i,p*2.27,0.9,1.2,0.09,0,-p*0.16),Gt(e,0.22,0.46,0.9,i,p*2.27,0.9,2.1,0.09,0,-p*0.16);for(let p=0;p<5;p++)Gt(e,0.95,0.5,0.2,i,-1.9+p*0.95,0.88,0.37,0.09,-0.2);let c=[13208108,2781048,15130834,8007498,2781048,13208108];[[-2.1,0.75,0.98,0.45,-0.5],[-1.3,0.72,0.55,0.4,0.3],[2.15,0.75,0.97,0.45,0.5],[1.3,0.72,0.55,0.4,-0.3],[-2.2,0.72,2.35,0.4,1.4],[2.2,0.72,2.35,0.4,-1.4]].forEach(([p,y,v,M,b],w)=>{let x=Gt(e,M,M,0.13,Gc(c[w],1),p,y,v,0.05,-0.3);x.rotation.y=b});let h=ji("slats",1,0.45,0,1.6,0.9,{color:4862754});Gt(e,1.5,0.1,0.85,h,0,0.44,1.75,0.03),Gt(e,1.2,0.3,0.6,H(1182986,0.6),0,0.24,1.75,0.02),Gt(e,1.4,0.04,0.8,H(1708557,0.7),0,0.1,1.75,0.01),z(e,0.32,0.05,0.22,H(2775690,0.6),-0.35,0.51,1.7),z(e,0.3,0.04,0.2,H(12599338,0.6),-0.35,0.555,1.7),st(e,0.12,0.09,0.08,H(2369067,0.4,0.3),0.35,0.53,1.8,24);let u=Ht(1024,700),f=u.getContext("2d"),m=f.createLinearGradient(0,0,1024,700);m.addColorStop(0,"#16182a"),m.addColorStop(1,"#2a1740"),f.fillStyle=m,f.fillRect(0,0,1024,700),f.strokeStyle="#7a5cff",f.lineWidth=8,f.setLineDash([26,16]),f.strokeRect(40,40,944,620),f.setLineDash([]),f.fillStyle="#9aa0c8",f.textAlign="center",f.textBaseline="middle",f.font="bold 74px Arial",f.fillText("GAME RUG",512,300),f.font="38px Arial",f.fillText('placeholder – window.setRugTexture("moje.jpg")',512,380);let g=new ln(u);g.colorSpace=Rt,g.anisotropy=8,qc=new ht({map:g,roughness:1});let _=new ne(new Pt(3.8,2.6),qc);_.rotation.set(-Math.PI/2,0,Math.PI),_.position.set(0,0.014,1.75),_.receiveShadow=!0,e.add(_);let d=new ne(new Pt(3.86,2.66),H(921362,1));d.rotation.x=-Math.PI/2,d.position.set(0,0.011,1.75),e.add(d)}Xv();window.setRugTexture=(e)=>new bo().load(e,(t)=>{t.colorSpace=Rt,t.anisotropy=8,qc.map=t,qc.needsUpdate=!0});(function(){let t=new rt;t.position.set(0.2,0,-9.2),xt.add(t),z(t,2.5,1.45,0.05,H(328966,0.3,0.5),0,1.65,0);let i=Ht(640,360),n=i.getContext("2d"),r=n.createLinearGradient(0,0,640,360);r.addColorStop(0,"#0b2a4a"),r.addColorStop(0.5,"#4a1f8f"),r.addColorStop(1,"#e8602e"),n.fillStyle=r,n.fillRect(0,0,640,360),n.fillStyle="rgba(255,255,255,.9)",n.font="bold 54px Arial",n.textAlign="center",n.fillText("MAN CAVE",320,190);let s=new ln(i);s.colorSpace=Rt;let o=new ne(new Pt(2.42,1.36),new Ut({map:s,toneMapped:!1}));o.position.set(0,1.65,0.03),t.add(o),z(t,2.8,0.5,0.42,H(1381914,0.55),0,0.3,0.17),z(t,2.8,0.03,0.44,H(4862754,0.45),0,0.565,0.17),z(t,1.2,0.07,0.1,H(723725,0.4,0.5),0,0.62,0.17);for(let a of[-1.75,1.75])z(t,0.3,1.5,0.22,H(1052948,0.5),a,0.78,0.12),z(t,0.22,0.22,0.02,H(657932,0.3,0.6),a,1.2,0.24),st(t,0.09,0.09,0.02,H(1908258,0.5),a,0.6,0.235,24).rotation.x=Math.PI/2;z(t,2.6,0.03,0.03,Dt(16734920,3),0,0.9,0.01).visible=!1,z(t,2.6,0.02,0.02,Dt(6966527,3.5),0,0.88,-0),z(t,2.7,0.012,0.01,Dt(16734920,3),0,0.5,0.39),Bn(t,"MAN CAVE",1.9,0.34,"#ff4fa6",0,2.75,0.03,0,"bold 130px Arial Black",void 0,!1)})();function qv(){let e=Br,t=eh(790562,{r:0.4,m:0.4});for(let l of[-1,1]){let c=l*1.775;Io(1.65,0.05,0.85,t,c,0.75,0,e),Io(0.05,0.75,0.05,t,l*2.575,0.375,-0.38,e),Io(0.05,0.75,0.05,t,l*2.575,0.375,0.38,e),Io(1.65,0.015,0.02,Ag(3824895,1.4),c,0.72,0.43,e)}let i=new ne(new Pt(5.3,0.9),new Ut({color:2768127,transparent:!0,opacity:0.16,toneMapped:!1}));i.rotation.x=-Math.PI/2,i.position.set(0,0.012,0.05),e.add(i);let n=(l,c)=>{st(e,0.012,0.012,0.22,H(855570,0.4,0.8),l,0.86,-0.28,12),z(e,0.2,0.01,0.16,H(855570,0.4,0.8),l,0.78,-0.2)},r=(l,c,h)=>{let u=Ht(1024,Math.round(1024*h/c));l(u.getContext("2d"),u.width,u.height);let f=new ln(u);return f.colorSpace=Rt,f.anisotropy=8,f},s=r((l,c,h)=>{let u=l.createLinearGradient(0,0,c,0);u.addColorStop(0,"#05103a"),u.addColorStop(0.5,"#4a1f8f"),u.addColorStop(1,"#ff4f6a"),l.fillStyle=u,l.fillRect(0,0,c,h),l.fillStyle="rgba(255,255,255,.12)";for(let f=0;f<40;f++)l.fillRect(Je()*c,Je()*h*0.7,40+Je()*120,3);l.fillStyle="#fff",l.font="bold 70px Arial",l.fillText('ULTRAWIDE 49"',60,h-70),l.strokeStyle="#38e8ff",l.lineWidth=4,l.beginPath(),l.arc(c/2,h/2,40,0,7),l.stroke()},1.2,0.34),o=r((l,c,h)=>{l.fillStyle="#0b0d1c",l.fillRect(0,0,c,h),l.fillStyle="#38e8ff";for(let u=0;u<14;u++)l.fillRect(40,60+u*110,200+Je()*600,18);l.fillStyle="#ff4f8a",l.font="bold 56px Arial",l.fillText("STATS",40,46)},0.34,0.6);{let u=new Ct(1.1,1.1,0.34,48,1,!0,Math.PI-0.5454545454545454,1.0909090909090908),f=new ne(u,new Ut({map:s,toneMapped:!1,side:Bt}));f.scale.x=-1,f.position.set(-1.78,1.12,0.8500000000000001),e.add(f);let m=new ne(new Ct(1.12,1.12,0.37,48,1,!0,Math.PI-0.5454545454545454,1.0909090909090908),H(526605,0.4,0.5));m.material.side=Ot,m.scale.x=-1,m.position.copy(f.position),e.add(m),n(-1.78,0),z(e,1.24,0.012,0.03,Dt(6966527,3),-1.78,0.94,-0.3)}for(let[l,c]of[[1.45,0.35],[2.1,0.7]]){let h=new rt;h.position.set(l,0.775,-0.18),h.rotation.y=c,e.add(h),Gt(h,0.36,0.62,0.025,H(460811,0.4,0.5),0,0.5,0,0.006);let u=new ne(new Pt(0.34,0.6),new Ut({map:o,toneMapped:!1}));u.position.set(0,0.5,0.0135),h.add(u),st(h,0.012,0.012,0.25,H(855570,0.4,0.8),0,0.1,-0.03,12),z(h,0.18,0.01,0.14,H(855570,0.4,0.8),0,0.004,-0.02),z(h,0.36,0.012,0.02,Dt(16732042,3),0,0.19,-0.02)}let a=(l,c)=>{let h=new ne(new Pt(0.9,1.6),new Ut({color:new ue(c).multiplyScalar(0.5),transparent:!0,opacity:0.9,toneMapped:!1}));h.position.set(8.665,1.9,l),h.rotation.y=-Math.PI/2,xt.add(h)};[[-2.1,6966527],[-1.05,3717375],[0,16732070],[1.05,3717375],[2.1,6966527]].forEach(([l,c])=>a(l,c)),z(xt,0.03,0.03,5.4,Dt(6966527,3.5),8.66,1.2,0),z(xt,0.03,0.03,5.4,Dt(16732070,3.5),8.66,2.7,0),Bn(xt,"FONGER",2.4,0.5,"#ff4fa6",8.64,2.95,0,-Math.PI/2,"bold 150px Arial Black",void 0,!1)}qv();var xf=[];function Yv(e){if(!xf[e]){let i=[],n=(h,u,f,m,g,_=1,d=1,p=1,y=0,v=0)=>{h.scale(_,d,p),h.rotateX(y),h.rotateZ(v),h.translate(f,m,g);let M=h.attributes.position.count,b=new Float32Array(M*3),w=new ue(u);for(let x=0;x<M;x++)b[x*3]=w.r,b[x*3+1]=w.g,b[x*3+2]=w.b;h.setAttribute("color",new $t(b,3)),i.push(h)},r=15780000,s=(h,u,f)=>new zt(h,u,f),o=(h)=>new vn(h,12,10),a=(h,u)=>new fo(h,u,8),l=(h,u)=>new Ct(h,h,u,12);if(n(l(0.05,0.012),1381658,0,0.006,0),e===0){n(s(0.024,0.07,0.03),1849994,-0.016,0.047,0),n(s(0.024,0.07,0.03),1849994,0.016,0.047,0),n(s(0.07,0.075,0.04),15763996,0,0.12,0),n(s(0.02,0.07,0.02),15763996,-0.045,0.12,0),n(s(0.02,0.07,0.02),15763996,0.045,0.12,0),n(o(0.036),15780000,0,0.19,0),n(s(0.07,0.014,0.04),2767466,0,0.2,0.005);for(let h=0;h<7;h++){let u=h/7*Math.PI*2;n(a(0.014,0.05),16765498,Math.sin(u)*0.026,0.225,Math.cos(u)*0.022,1,1,1,Math.cos(u)*0.5,-Math.sin(u)*0.5)}}else if(e===1)n(s(0.07,0.08,0.04),2772688,0,0.1,0),n(s(0.024,0.06,0.03),1382778,-0.016,0.04,0),n(s(0.024,0.06,0.03),1382778,0.016,0.04,0),n(s(0.09,0.12,0.008),13638698,0,0.1,-0.026,1,1,1,0.1),n(o(0.034),15780000,0,0.17,0),n(o(0.036),1315866,0,0.18,-0.006,1,0.8,1),n(s(0.03,0.03,0.01),16765498,0,0.11,0.022);else if(e===2)n(a(0.05,0.14),6959024,0,0.08,0),n(o(0.032),15780000,0,0.17,0),n(a(0.044,0.1),2757744,0,0.245,0,1,1,1,-0.15),n(l(0.056,0.008),2757744,0,0.2,0),n(l(0.004,0.24),5913120,0.06,0.12,0.02),n(o(0.014),3729663,0.06,0.25,0.02);else if(e===3)n(s(0.07,0.08,0.05),12106952,0,0.1,0),n(s(0.03,0.06,0.035),5922412,-0.02,0.04,0),n(s(0.03,0.06,0.035),5922412,0.02,0.04,0),n(s(0.05,0.045,0.045),15132910,0,0.17,0),n(s(0.036,0.01,0.01),3729663,0,0.175,0.024),n(s(0.025,0.07,0.025),13638698,-0.05,0.11,0),n(s(0.025,0.07,0.025),13638698,0.05,0.11,0),n(a(0.008,0.04),16765498,0,0.215,0);else if(e===4){n(s(0.07,0.085,0.04),1381916,0,0.1,0),n(s(0.024,0.06,0.03),735778,-0.016,0.04,0),n(s(0.024,0.06,0.03),735778,0.016,0.04,0),n(o(0.034),15780000,0,0.17,0);for(let h=0;h<6;h++){let u=h/6*Math.PI*2;n(a(0.012,0.04),3072096,Math.sin(u)*0.022,0.2,Math.cos(u)*0.02,1,1,1,Math.cos(u)*0.6,-Math.sin(u)*0.6)}n(s(0.008,0.2,0.012),14673648,0.06,0.13,0.02,1,1,1,0,-0.25)}else if(e===5)n(s(0.04,0.05,0.03),15755944,0,0.04,0),n(o(0.055),15780000,0,0.12,0),n(o(0.058),15755944,0,0.135,-0.008,1,0.85,1),n(o(0.01),1118481,-0.02,0.12,0.05),n(o(0.01),1118481,0.02,0.12,0.05);else n(s(0.09,0.12,0.06),1908520,0,0.07,0),n(s(0.07,0.07,0.005),16765498,0,0.08,0.031),n(o(0.025),13638698,0,0.08,0.034,1,1,0.3),n(s(0.09,0.015,0.062),3729663,0,0.14,0);let c=gg(i,!1);i.forEach((h)=>h.dispose()),xf[e]=new ne(c,new ht({vertexColors:!0,roughness:0.5,metalness:0.05}))}let t=xf[e].clone();return t.castShadow=!0,t}function Pg(e,t){let i=new rt;i.position.set(e,0,t),i.rotation.y=-Math.PI/2,xt.add(i);let n=3,r=6,s=0.36,o=0.028,a=0.39,l=n*s+o,c=r*s+o,h=H(2367260,0.55,0.05),u=H(1052173,0.8);for(let f=0;f<=n;f++)z(i,o,c,a,h,-l/2+o/2+f*s,c/2,0);for(let f=0;f<=r;f++)z(i,l,o,a,h,0,o/2+f*s,0);z(i,l,c,0.01,u,0,c/2,-a/2+0.01);for(let f=1;f<=r;f++)z(i,l-2*o,0.006,0.014,Dt(16767400,2.2),0,f*s-0.004,a/2-0.05);for(let f=0;f<r;f++)for(let m=0;m<n;m++){let g=-l/2+o/2+(m+0.5)*s,_=o+f*s+(f===0?0:0),d=Je()<0.55?2:1;for(let p=0;p<d;p++){let y=Yv(Math.floor(Je()*7));y.position.set(g+(d===2?p?0.08:-0.08:0),_,0.03+(Je()-0.5)*0.06),y.rotation.y=(Je()-0.5)*0.8,y.scale.setScalar(0.95+Je()*0.25),i.add(y)}if(Je()<0.25)z(i,0.1,0.02,0.07,H([2838527,16726843,2007130][Math.floor(Je()*3)],0.6),g,_+0.2+0,-0.12).visible=!1}}Pg(8.475,3.17);Pg(8.475,-3.17);function Zv(){let t=0.092*Math.sqrt(3)/2;for(let i of[-6.95,-5.75]){let n=new rt;n.position.set(i,0,0),n.rotation.y=Math.PI/2,xt.add(n),n.add(kv());for(let r of[-1,1]){let s=r<0?14692399:3107801;for(let o=0;o<4;o++){let a=4-o;for(let l=0;l<a;l++)Vv(n,r*(1.08-o*t),0.702,(l-(a-1)/2)*0.092,s)}}for(let r of[-0.3,0.3])st(n,0.017,0.017,0.002,H(16777215,0.3),0,0.703,r,12).visible=!1}Di(xt,-6.35,2.6,0,16773336,4,5),z(xt,2.2,0.012,0.012,Dt(16763210,2.5),-6.35,Ni-0.35,0).visible=!0}Zv();(function(){let e=new rt;e.position.set(-6.4,0,3.725),e.rotation.y=Math.PI,xt.add(e),z(e,3.3,2.5,0.06,H(1381143,0.8),0,1.5,0.03);for(let t=0;t<12;t++)z(e,0.02,2.4,0.03,H(2761760,0.5),-1.6+t*0.29,1.5,0.075);for(let t=0;t<3;t++)for(let i=0;i<8;i++){let n=-1.4+i*0.4,r=2.2-t*0.38,s=[13936170,12633288,11692597][(i+t)%3];z(e,0.05,0.22,0.01,H([2838527,16726843,2007130][(i*2+t)%3],0.6),n,r+0.15,0.09),st(e,0.07,0.07,0.015,new ht({color:s,roughness:0.22,metalness:1}),n,r,0.1).rotation.x=Math.PI/2}z(e,3.2,0.03,0.18,H(3812642,0.4),0,1.05,0.14);for(let t=0;t<6;t++)vf(e,-1.3+t*0.5,1.065,0.14,0.38+t%2*0.08,[13936170,12633288,11692597][t%3]);Bn(e,"HALL OF FAME",2.6,0.38,"#ffc94a",0,2.78,0.08,0,"bold 125px Arial Black",void 0,!1);for(let t of[-8.35,-4.45]){let i=new rt;i.position.set(t,0,3.35),xt.add(i),z(i,0.5,1,0.5,H(1052690,0.4),0,0.5,0),z(i,0.5,0.01,0.5,Dt(11462399,3),0,1,0),vf(i,0,1.01,0,1),z(i,0.5,0.7,0.5,new ht({color:12577023,transparent:!0,opacity:0.13,roughness:0.02,metalness:0}),0,1.36,0)}for(let[t,i,n]of[[-7.7,-3.55,0],[-6.15,-3.55,0],[-3.59,-6.6,Math.PI/2],[4,-6.6,-Math.PI/2]]){let r=new rt;r.position.set(t,0,i),r.rotation.y=n,xt.add(r),Wv(r,1.3,2.1)}})();function Jv(){let e=new rt;e.position.set(2.9,0,3.725),e.rotation.y=Math.PI,xt.add(e);let t=H(1447707,0.85,0.1),i=ji("slats",1,0.6,0,3.6,1,{color:11569754}),n=ji("slats",1,0.35,0,4.2,0.9,{color:5978660}),r=H(13225170,0.22,1);Gt(e,3.4,1,0.6,t,-0.3,0.5,1.65,0.02);let s=new ne(new zt(3.3,0.9,0.04),i);s.position.set(-0.3,0.5,1.97),e.add(s),Gt(e,3.8,0.06,0.95,n,-0.3,1.06,1.83,0.02),z(e,3.3,0.014,0.014,Dt(16732120,4),-0.3,1.02,2.28),z(e,3.3,0.02,0.02,Dt(3725567,4),-0.3,0.06,2),z(e,3.4,0.08,0.03,H(723725,0.5),-0.3,0.04,1.96);let o=st(e,0.022,0.022,3.2,r,-0.3,0.22,2.3,12);o.rotation.z=Math.PI/2;for(let R of[-1.7,1.1])st(e,0.018,0.018,0.2,r,R,0.12,2.3,10);Gt(e,3.6,0.9,0.5,t,0,0.45,0.27,0.02);let a=new ne(new zt(3.5,0.8,0.03),i);a.position.set(0,0.45,0.535),e.add(a),z(e,3.7,0.05,0.56,n,0,0.925,0.28),z(e,3.5,0.012,0.012,Dt(6966527,4),0,0.03,0.55);let l=(()=>{let R=Ht(512,256),U=R.getContext("2d"),I=U.createLinearGradient(0,0,512,0);I.addColorStop(0,"#ff3ea0"),I.addColorStop(0.5,"#7a4cff"),I.addColorStop(1,"#2ab8ff"),U.fillStyle=I,U.fillRect(0,0,512,256);let O=new ln(R);return O.colorSpace=Rt,O})();z(e,3.6,1.7,0.05,H(723725,0.6),0,1.85,0.03);let c=new ne(new Pt(3.4,1.55),new Ut({map:l,toneMapped:!1,color:13421772}));c.position.set(0,1.85,0.06),e.add(c);for(let R of[-1,1])z(e,0.04,1.7,0.34,H(723725,0.5),R*1.8,1.85,0.2);z(e,3.64,0.04,0.34,H(723725,0.5),0,2.72,0.2);let h=new Ct(0.036,0.036,0.2,10),u=new Ct(0.012,0.02,0.1,10),f=new Ct(0.036,0.026,0.1,12,1,!0),m=48,g=new Un(h,new ht({roughness:0.15,metalness:0.1,transparent:!0,opacity:0.88}),m),_=new Un(u,g.material,m),d=new Un(f,new ht({color:14674687,roughness:0.05,transparent:!0,opacity:0.45,side:Ot}),20),p=new qe,y=[2787898,8010258,13213738,3824335,12066847,1710618,14673642,9054858],v=0,M=0;for(let R=0;R<3;R++){let U=1.4+R*0.5;z(e,3.4,0.025,0.3,H(855312,0.3,0.3),0,U,0.2),z(e,3.4,0.008,0.01,Dt(16777215,4),0,U-0.02,0.34);for(let I=0;I<16&&v<m;I++){let O=-1.55+I*0.206;if(R===0&&I>9){p.makeTranslation(O,U+0.05,0.2),d.setMatrixAt(M++,p);continue}p.makeTranslation(O,U+0.113,0.2),g.setMatrixAt(v,p),g.setColorAt(v,new ue(y[(I+R*3)%y.length])),p.makeTranslation(O,U+0.263,0.2),_.setMatrixAt(v,p),_.setColorAt(v,new ue(y[(I+R*3)%y.length])),v++}}g.count=v,_.count=v,d.count=M,e.add(g,_,d);let b=new rt;b.position.set(1.2,0.95,0.3),e.add(b),st(b,0.05,0.05,0.3,r,0,0.15,0,20);let w=st(b,0.014,0.014,0.16,r,0,0.3,0.07,10);w.rotation.x=Math.PI/2;for(let[R,U]of[[-0.025,16763210],[0.025,16726843]])st(b,0.007,0.007,0.1,H(U,0.4,0.4),R,0.38,0,8),st(b,0.01,0.01,0.025,r,R,0.26,0.14,8);z(b,0.3,0.02,0.2,r,0,0,0.18),z(b,0.26,0.004,0.16,H(1381914,0.4),0,0.012,0.18),Bn(e,"BAR",0.9,0.3,"#38d8ff",-0.3,2.95,0.05,0,"bold 170px Arial Black",void 0,!1);let x=H(1908001,0.55,0.1),S=H(13619928,0.2,1);for(let R of[-1.6,-0.75,0.1,0.95]){let U=new rt;U.position.set(R,0,2.85),U.rotation.y=Math.PI+(Je()-0.5)*0.3,e.add(U),st(U,0.22,0.2,0.08,x,0,0.74,0,28),st(U,0.21,0.21,0.025,H(723725,0.5),0,0.69,0,24),st(U,0.025,0.025,0.66,S,0,0.35,0,10),st(U,0.2,0.22,0.03,S,0,0.015,0,24);let I=new ne(new kn(0.17,0.012,8,24),S);I.rotation.x=Math.PI/2,I.position.set(0,0.3,0),U.add(I),Gt(U,0.34,0.22,0.06,x,0,1,-0.2,0.03,-0.12);for(let O of[-1,1]){st(U,0.01,0.01,0.26,S,O*0.16,0.86,-0.18,8);let te=Gt(U,0.04,0.03,0.26,x,O*0.18,0.99,-0.06,0.012)}}}Jv();var Ye={cx:-10.8,cz:-11.5,R:7,H:6},Li=new rt;vs.add(Li);var qn=[...Array(6)].map((e,t)=>{let i=t*Math.PI/3;return[Ye.cx+Ye.R*Math.cos(i),Ye.cz+Ye.R*Math.sin(i)]}),wi=(e,t,i)=>new A(e,t,i),Ig=(e=16777215)=>{let t=Qc(jt.plywood,1,1);return new ht({map:t,bumpMap:t,bumpScale:0.6,roughness:0.72,metalness:0,side:Ot,color:e})},Yc=Ig(15917768),xg=Ig(14731684);function Xc(e,t,i){let n=[],r=[];for(let a of e){let[l,c,h,u]=a.p,f=l.distanceTo(c)/1.22,m=l.distanceTo(h)/2.44,g=h.distanceTo(u)/1.22,_=a.ou||0,d=a.ov||0,p=Math.max(f,g);n.push(l.x,l.y,l.z,c.x,c.y,c.z,u.x,u.y,u.z,l.x,l.y,l.z,u.x,u.y,u.z,h.x,h.y,h.z),r.push(_,d,_+f,d,_+g,d+m,_,d,_+g,d+m,_,d+m)}let s=new Oe;s.setAttribute("position",new ye(n,3)),s.setAttribute("uv",new ye(r,2)),s.computeVertexNormals();let o=new ne(s,t);return o.receiveShadow=!0,i.add(o),o}var lr=Math.tan(Math.PI/6);function Hc(e,t,i){let n=qn[e],r=qn[(e+1)%6],s=Math.hypot(r[0]-n[0],r[1]-n[1]),o={x:(r[0]-n[0])/s,z:(r[1]-n[1])/s},a={x:-o.z,z:o.x},l=(n[0]+r[0])/2,c=(n[1]+r[1])/2;if(a.x*(Ye.cx-l)+a.z*(Ye.cz-c)<0)a={x:-a.x,z:-a.z};let[h,u]=i||[0,s],f=(d,p,y)=>wi(n[0]+o.x*p+a.x*d,y,n[1]+o.z*p+a.z*d),m=[],g=[],_=[];for(let d=0;d<t.length-1;d++){let[p,y]=t[d],[v,M]=t[d+1],b={p:[f(p,h+p*lr,y),f(p,u-p*lr,y),f(v,h+v*lr,M),f(v,u-v*lr,M)],ou:(h+p*lr)/1.22,ov:t.slice(0,d).reduce((w,x,S)=>w+Math.hypot(t[S+1][0]-x[0],t[S+1][1]-x[1]),0)/2.44};if(m.push(b),!i)g.push({p:[wi(n[0],y,n[1]),f(p,p*lr,y),wi(n[0],M,n[1]),f(v,v*lr,M)]}),_.push({p:[wi(r[0],y,r[1]),f(p,s-p*lr,y),wi(r[0],M,r[1]),f(v,s-v*lr,M)]})}return{quads:m,caps:[...g,..._],P:f,L:s,n:a,t:o,A:n,prof:t}}var Kv=[[[1,0],[0,3.6],[0,6]],null,[[0,0],[0,1.2],[1.6,3.4],[1.6,4.6],[0.9,6]],[[0,0],[0,1],[0.9,2.4],[0.9,3.4],[2,5],[0.4,6]],[[0,0],[0,0.8],[2,3.6],[2,6]],[[0,0],[0,3],[0.8,4.2],[0.8,6]]],kc=[15213098,2845695,16765482,2273370,16742940,10632432,16736176,15921906,1381658,2806996],Lg=[[],[],[],[],[],[],[]],Po=new ct;function dl(e,t,i){let[n,r,s,o]=e.p,a=n.clone().lerp(r,t),l=s.clone().lerp(o,t);return a.lerp(l,i)}function pl(e,t){let[i,n,r]=e.p,s=n.clone().sub(i).cross(r.clone().sub(i)).normalize();if(s.dot(t)<0)s.negate();return s}function Zc(e,t,i,n,r){Po.position.copy(t).addScaledVector(i,0.004),Po.lookAt(t.clone().add(i)),Po.rotateZ(r),Po.scale.setScalar(1),Po.updateMatrix(),Lg[e].push({m:Po.matrix.clone(),c:new ue(n)})}function Mf(e,t,i,n,r=0.55){let s=e.p[0].distanceTo(e.p[2]);if(s<0.5)return;let o=Math.max(2,Math.round(s/r)),a=pl(e,n);for(let l=0;l<t;l++)for(let c=0;c<o;c++){let h=Math.sin((c+l*1.7)*1.1)*0.5/t,u=(l+0.5)/t+h*0.55,f=(c+0.45)/o,m=dl(e,u,f),g=(c*3+l*5)%7,_=c<1?5:g===6?4:g===5?5:g%5;if(Zc(_===5&&c>0?1:_,m,a,kc[(i+l)%kc.length],(Je()-0.5)*1.6),(c+l)%3===0){let d=dl(e,Math.min(0.97,Math.max(0.03,u+0.07)),Math.min(0.98,f+0.5/o));Zc(5,d,a,kc[(i+l)%kc.length],Je()*3)}}}function $v(){let e=[()=>{let i=new vn(0.07,12,9);return i.scale(1,0.8,0.65),i.translate(0,0,0.035),i},()=>{let i=new Hi(0.11,0.03,0.05,2,0.012);return i.translate(0,0,0.025),i},()=>{let i=new vn(0.1,14,10);return i.scale(1,1,0.38),i},()=>{let i=new Ga(0.028,0.09,4,8);return i.rotateZ(Math.PI/2),i.translate(0,0,0.04),i},()=>{let i=new kn(0.05,0.022,8,14);return i.translate(0,0,0.02),i},()=>{let i=new fo(0.032,0.04,6);return i.rotateX(Math.PI/2),i.translate(0,0,0.02),i},()=>{let i=new fc(0.2);return i.scale(1,1,0.5),i}],t=new ht({color:16777215,roughness:0.5,metalness:0});e.forEach((i,n)=>{let r=Lg[n];if(!r.length)return;let s=new Un(i(),t,r.length);r.forEach((o,a)=>{s.setMatrixAt(a,o.m),s.setColorAt(a,o.c)}),s.castShadow=!0,Li.add(s)})}(function(){let t=(i,n)=>wi(Ye.cx-n.p[0].x,0,Ye.cz-n.p[0].z);for(let i=0;i<6;i++){if(i===1){let r=Hc(1,[[0,0],[0,6]],[0,2.5]),s=Hc(1,[[0,0],[0,6]],[4.1,7]),o=Hc(1,[[0,2.3],[0,6]],[2.5,4.1]);for(let h of[r,s,o])Xc(h.quads,Yc,Li),h.quads.forEach((u)=>Mf(u,h===o?2:2,0,t(h,u),0.6));let a=qn[1],l=-1,c=(h)=>a[0]+l*h;for(let h of[2.5,4.1])z(Li,0.1,2.3,0.3,H(1381914,0.5),c(h),1.15,a[1]+0.02);z(Li,1.7,0.1,0.3,H(1381914,0.5),c(3.3),2.3,a[1]+0.02);continue}let n=Hc(i,Kv[i]);Xc(n.quads,i%2?xg:Yc,Li),Xc(n.caps,xg,Li),n.quads.forEach((r)=>Mf(r,4,i*2,pl(r,wi(Ye.cx-r.p[0].x,0,Ye.cz-r.p[0].z)).add(wi(0,0,0)),0.55))}for(let i=0;i<6;i++){let n=qn[i],r=qn[(i+1)%6],s=Math.hypot(r[0]-n[0],r[1]-n[1]),o=new ne(new zt(s+0.3,Ye.H,0.2),H(1513500,0.9)),a=(n[0]+r[0])/2,l=(n[1]+r[1])/2,c=wi(a-Ye.cx,0,l-Ye.cz).normalize();if(o.position.set(a+c.x*0.12,Ye.H/2,l+c.z*0.12),o.rotation.y=-Math.atan2(r[1]-n[1],r[0]-n[0]),i!==1)Li.add(o)}})();(function(){let i=[{y:0,r:1.75},{y:2.1,r:2.45},{y:4.7,r:1.45}],n=[];i.forEach((h,u)=>{let f=[];for(let m=0;m<7;m++){let g=m/7*Math.PI*2+u*0.12,_=0.9+(m*37+u*11)%10/50;f.push(wi(Ye.cx+Math.sin(g)*h.r*_,h.y,Ye.cz+Math.cos(g)*h.r*_))}n.push(f)});let r=[];for(let h=0;h<2;h++)for(let u=0;u<7;u++){let f=(u+1)%7;r.push({p:[n[h][u],n[h][f],n[h+1][u],n[h+1][f]],ou:u*0.37,ov:h*0.9})}let s=Xc(r,new ht({map:Yc.map,bumpMap:Yc.map,bumpScale:0.6,roughness:0.72,side:Ot,color:15652528,flatShading:!0}),Li);s.castShadow=!0;let o=n[2].map((h)=>new W(h.x,-h.z)),a=new _o(new Xi(o));a.rotateX(-Math.PI/2);let l=new ne(a,H(13216376,0.8));l.position.y=4.7,Li.add(l),r.forEach((h,u)=>{let f=dl(h,0.5,0.5),m=wi(f.x-Ye.cx,0,f.z-Ye.cz).normalize(),g=pl(h,m);Mf(h,u<7?2:2,3+u,g,0.55)});let c=r[0];{let h=dl(c,0.5,0.22),u=pl(c,wi(h.x-Ye.cx,0,h.z-Ye.cz));Zc(6,h,u,2845695,0);let f=dl(r[3],0.5,0.3);Zc(6,f,pl(r[3],wi(f.x-Ye.cx,0,f.z-Ye.cz)),15213098,1)}})();$v();(function(){let i=[...Array(6)].map((h,u)=>{let f=u*Math.PI/3;return[Ye.cx+6.99*Math.cos(f),Ye.cz+6.99*Math.sin(f)]}),n=i[1][1]+0.1,r=[i[0],i[1],[-9.7,n],[-9.7,n-0.95],[-11.5,n-0.95],[-11.5,n],i[2],i[3],i[4],i[5]],s=new Xi(r.map((h)=>new W(h[0],-h[1]))),o=new go(s,{depth:0.26,bevelEnabled:!0,bevelThickness:0.04,bevelSize:0.04,bevelSegments:3});o.rotateX(-Math.PI/2);let a=Qc(jt.matBlue,1,0.5),l=new ne(o,new ht({map:a,bumpMap:a,bumpScale:1.2,roughness:0.85}));l.position.y=0,l.receiveShadow=!0,Li.add(l),ml(Li,[...Array(6)].map((h,u)=>qn[u]),jc("concrete",1.5,0.9));for(let h=0;h<6;h++){if(h===1)continue;let u=qn[h],f=qn[(h+1)%6],m=Math.hypot(f[0]-u[0],f[1]-u[1]),g=new ne(new zt(m-0.3,0.03,0.05),H(16765482,0.5)),_=(u[0]+f[0])/2,d=(u[1]+f[1])/2,p=wi(Ye.cx-_,0,Ye.cz-d).normalize();g.position.set(_+p.x*0.07,0.32,d+p.z*0.07),g.rotation.y=-Math.atan2(f[1]-u[1],f[0]-u[0]),Li.add(g)}let c=new ne(new Ct(3.3,3.4,0.14,7),new ht({map:a,color:6988543,roughness:0.9}));c.position.set(Ye.cx,0.33,Ye.cz),Li.add(c)})();(function(){Uo(qn,Ye.H,H(1776673,0.9));for(let t=0;t<3;t++){let i=t*Math.PI/3,n=new ne(new zt(Ye.R*2-0.3,0.36,0.28),H(5067356,0.45,0.8));n.position.set(Ye.cx,Ye.H-0.2,Ye.cz),n.rotation.y=-i,qi.add(n);let r=new ne(new zt(Ye.R*2-1.2,0.03,0.06),Dt(16773594,7));r.position.set(Ye.cx,Ye.H-0.4,Ye.cz),r.rotation.y=-i,qi.add(r)}for(let t=0;t<6;t++){let i=t*Math.PI/3+Math.PI/6,n=Ye.cx+Math.cos(i)*4.6,r=Ye.cz+Math.sin(i)*4.6;st(qi,0.12,0.12,0.14,H(855312,0.4,0.5),n,Ye.H-0.1,r,14),st(qi,0.1,0.1,0.01,Dt(16774888,9),n,Ye.H-0.18,r,14)}for(let t=0;t<3;t++){let i=t*Math.PI*2/3+0.5;Di(Li,Ye.cx+Math.cos(i)*4.2,Ye.H-0.6,Ye.cz+Math.sin(i)*4.2,16774372,22,14)}Di(Li,Ye.cx,Ye.H-0.8,Ye.cz,16777215,18,12),Bn(Li,"BOULDER",2.6,0.5,"#ffb42a",-10.6,4.4,qn[1][1]-0.12,Math.PI,"bold 170px Arial Black",void 0,!1),z(qi,14,0.02,0.02,Dt(16757802,2.5),Ye.cx,Ye.H-0.02,Ye.cz+5).visible=!1})();var re=new rt;vs.add(re);var Qi=3,Dg=(e,t)=>ji("tile",0.6,0.35,0,e,t),th=(e,t)=>ji("plaster",1.2,0.9,0,e,t);ml(re,[[-12.4,-5.45],[-8.8,-5.45],[-8.8,3.85],[-3.6,3.85],[-3.6,7.7],[-12.4,7.7]],jc("tile",0.6,0.35));ml(re,[[-3.6,3.85],[0.4,3.85],[0.4,7.7],[-3.6,7.7]],jc("graphite",1,0.6));Uo([[-12.4,-5.45],[-8.8,-5.45],[-8.8,3.85],[-12.4,3.85]],Qi,H(15000802,0.9));Uo([[-12.4,3.85],[-3.6,3.85],[-3.6,7.7],[-12.4,7.7]],Qi,H(15000802,0.9));Uo([[-3.6,3.85],[0.4,3.85],[0.4,7.7],[-3.6,7.7]],Qi,H(2434604,0.9));en(re,-12.4,-5.37,-12.4,7.7,Qi,th);en(re,-8.8,-5.37,-8.8,-3.85,Qi,th);en(re,-3.6,3.85,-3.6,7.7,Qi,Dg);en(re,0.4,3.85,0.4,7.7,Qi,Ms);for(let[e,t,i,n]of[[-10.6,-1,3.4,0.08],[-10.6,2.6,3.4,0.08],[-8.2,5.8,0.08,3.4],[-6.2,5.8,3.4,0.08]])z(qi,i,0.03,n,Dt(16054527,6),e,Qi-0.02,t);var It=H(14212064,0.14,1),hl=H(16053489,0.12,0.02),_f=H(11449275,0.3,0.9),a9=H(1447707,0.8),_g=(e,t)=>{let i=parseInt(e.slice(1),16),n=Math.min(255,(i>>16&255)*t)|0,r=Math.min(255,(i>>8&255)*t)|0,s=Math.min(255,(i&255)*t)|0;return`rgb(${n},${r},${s})`},Et=(e,t,i,n,r,s,o=0,a=0,l=0)=>{let c=new ne(t,i);return c.position.set(n,r,s),c.rotation.set(o,a,l),c.castShadow=c.receiveShadow=!0,e.add(c),c},Jt=(e,t,i,n=20)=>new Ct(e,t,i,n);(function(){let s=(_,d,p)=>Do(160,480,(y,v,M)=>{let b=y.createLinearGradient(0,0,v,0);b.addColorStop(0,_g(d,1.18)),b.addColorStop(0.5,d),b.addColorStop(1,_g(d,0.82)),y.fillStyle=b,y.fillRect(0,0,v,M),y.strokeStyle="rgba(0,0,0,.5)",y.lineWidth=5,y.strokeRect(3,3,v-6,M-6),y.strokeStyle="rgba(255,255,255,.07)",y.lineWidth=2,y.strokeRect(9,9,v-18,M-18),y.fillStyle="rgba(0,0,0,.7)";for(let w=0;w<8;w++)y.fillRect(24,30+w*13,v-48,5);for(let w=0;w<6;w++)y.fillRect(24,M-118+w*13,v-48,5);y.fillStyle="#dfe2e7",y.fillRect(v/2-27,156,54,28),y.fillStyle="#12151c",y.font="bold 22px Arial",y.textAlign="center",y.fillText(String(_),v/2,178),y.fillStyle="#c9ccd2",y.fillRect(v-40,222,11,96),y.fillStyle="#7d818a",y.fillRect(v-41,222,2,96),y.fillStyle="#b9bdc5",y.beginPath(),y.arc(v-34,344,9,0,7),y.fill(),y.fillStyle="#1a1a1a",y.fillRect(v-35,338,2.5,12),y.fillStyle="rgba(255,255,255,.05)",y.fillRect(0,0,14,M)}),o=Do(160,480,(_,d,p)=>{let y=_.createLinearGradient(0,0,0,p);y.addColorStop(0,"#2a2f3b"),y.addColorStop(1,"#0f1116"),_.fillStyle=y,_.fillRect(0,0,d,p),_.fillStyle="#4b5160",_.fillRect(8,90,d-16,6),_.fillStyle="#9aa0ab",_.fillRect(8,60,d-16,4),_.fillStyle="#c2c6cf",_.fillRect(d/2-3,60,6,3),_.fillStyle="#c0392b",_.beginPath(),_.moveTo(d/2-40,66),_.lineTo(d/2+40,66),_.lineTo(d/2+50,300),_.lineTo(d/2-50,300),_.closePath(),_.fill(),_.fillStyle="rgba(0,0,0,.25)",_.fillRect(d/2-4,90,8,210),_.fillStyle="#2a2d35",_.fillRect(14,p-90,d-28,50)}),a=H(1449002,0.45,0.4),l=H(2765124,0.4,0.5),c=H(790036,0.6),h=0.46,u=-12.045;for(let _=0;_<14;_++){let d=-4.7+_*0.5,p=_===3||_===9;z(re,0.46,1.9,0.488,a,-12.045,1.05,d);let y=s(_+1,_%2?"#1f3052":"#27406e",p),v=new ht({map:y,roughness:0.4,metalness:0.35,side:Ot});if(!p)Et(re,new Pt(0.472,1.88),v,-11.794,1.05,d,0,Math.PI/2,0);else{Et(re,new Pt(0.46,1.86),new ht({map:o,roughness:0.7}),-11.796000000000001,1.05,d,0,Math.PI/2,0);let M=new rt;if(M.position.set(-11.790000000000001,1.05,d-0.236),M.rotation.y=_===3?1.15:1.5,re.add(M),Et(M,new Pt(0.472,1.88),v,0,0,0.236,0,Math.PI/2,0),z(M,0.012,1.88,0.012,It,0,0,0),_===9)z(re,0.2,0.32,0.26,H(2059076,0.8),-11.985,0.34,d+0.02),z(re,0.2,0.04,0.2,H(1448482,0.6),-11.985,0.52,d+0.02)}z(re,0.012,1.9,0.012,It,-11.797,1.05,d-0.25)}let f=-1.4500000000000002,m=7;z(re,0.5,0.05,m+0.04,l,-12.03,2.03,f),z(re,0.48000000000000004,0.1,m,c,-12.035,0.05,f),z(re,0.46,1.9,0.02,a,-12.045,1.05,-4.955),z(re,0.46,1.9,0.02,a,-12.045,1.05,2.0549999999999997),z(re,0.5,0.88,m+0.04,H(2304829,0.6),-12.03,2.51,f).visible=!1;let g=H(10121026,0.5);for(let _ of[-2.6,1.9]){for(let d=0;d<4;d++)z(re,0.1,0.035,2.6,g,-11.05+d*0.105,0.46,_);for(let d of[-1.2,0,1.2]){z(re,0.42,0.035,0.05,_f,-10.9,0.43,_+d);for(let p of[-0.19,0.19])z(re,0.04,0.43,0.04,_f,-10.9+p,0.215,_+d)}z(re,0.34,0.02,2.4,H(5724511,0.5,0.5),-10.9,0.16,_);for(let d=0;d<4;d++){let p=-10.9+(d%2?0.05:-0.05),y=_-0.9+d*0.55,v=[15263976,14239787,2846681,3092275][d];Gt(re,0.11,0.07,0.29,H(v,0.6),p,0.205,y,0.025),Gt(re,0.09,0.03,0.14,H(14342874,0.7),p,0.245,y-0.07,0.01)}}Gt(re,0.3,0.28,0.5,H(2106413,0.7),-10.88,0.62,-2,0.07),z(re,0.02,0.03,0.46,H(14239787,0.5),-10.74,0.7,-2),st(re,0.035,0.035,0.19,new ht({color:6735615,transparent:!0,opacity:0.6,roughness:0.1}),-10.9,0.58,-3.25,14),st(re,0.036,0.036,0.04,H(15263976,0.4),-10.9,0.69,-3.25,14),z(re,0.34,0.05,0.46,H(15921906,0.95),-10.9,0.5,1.3),z(re,0.34,0.16,0.05,H(15921906,0.95),-10.9,0.43,1.52),z(re,0.04,0.05,1.5,_f,-8.92,1.78,-4.65),[[-5.25,12597547],[-4.95,2842536],[-4.3,3092275],[-4.05,15263976]].forEach(([_,d])=>{st(re,0.012,0.012,0.06,It,-8.88,1.74,_,8).rotation.z=Math.PI/2,Gt(re,0.1,0.62,0.34,H(d,0.9),-8.84,1.4,_,0.04)}),z(re,0.03,1.4,1.2,new ht({color:13625855,roughness:0.04,metalness:0.85}),-8.93,1.4,-2.55),z(re,0.036,1.48,0.05,H(1119000,0.5),-8.925,1.4,-1.97),z(re,0.036,1.48,0.05,H(1119000,0.5),-8.925,1.4,-3.13),z(re,0.036,0.05,1.24,H(1119000,0.5),-8.925,2.12,-2.55),z(re,0.036,0.05,1.24,H(1119000,0.5),-8.925,0.68,-2.55),Bn(re,"ŠATNA",1.5,0.4,"#7fd0ff",-8.93,2.6,0.1,-Math.PI/2,"bold 170px Arial Black",void 0,!1),Di(re,-10.6,2.6,-2,16054527,7,8),Di(re,-10.6,2.6,2.4,16054527,6,8)})();(function(){let e=new ht({color:14939135,transparent:!0,opacity:0.34,roughness:0.12,side:Ot,depthWrite:!1}),t=(l)=>new ht({color:l,roughness:0.35}),i=H(13620185,0.35),n=H(3159098,0.5,0.8);z(re,5.2,0.14,0.012,H(2781048,0.35),-6.2,1.08,3.99);for(let l=0;l<4;l++){let c=-8+l*1.1,h=l===1||l===3;z(re,1.04,0.04,1.02,i,c,0.02,4.5),st(re,0.07,0.07,0.012,n,c,0.046,4.5,18);for(let f=0;f<3;f++)z(re,0.1,0.004,0.012,H(10133672,0.4,1),c,0.053,4.47+f*0.03);z(re,1.04,0.012,0.03,H(16762926,0.6),c,0.046,5),st(re,0.012,0.012,0.36,It,c,2.12,4.17,12).rotation.x=Math.PI/2,Et(re,Jt(0.115,0.115,0.018,28),It,c,2.1,4.38),Et(re,Jt(0.096,0.096,0.004,28),H(2106410,0.5,0.6),c,2.09,4.38);for(let f=0;f<8;f++){let m=f*Math.PI/4;Et(re,Jt(0.007,0.007,0.006,6),H(9146521,0.3,1),c+Math.cos(m)*0.06,2.088,4.38+Math.sin(m)*0.06)}z(re,0.2,0.13,0.025,It,c,1.15,4.012),Et(re,Jt(0.03,0.03,0.03,16),It,c-0.05,1.15,4.04,Math.PI/2),Et(re,Jt(0.022,0.022,0.03,16),It,c+0.055,1.15,4.04,Math.PI/2),z(re,0.012,0.05,0.012,H(14036269,0.4),c+0.055,1.18,4.06),z(re,0.012,0.05,0.012,H(3107801,0.4),c-0.05,1.18,4.06),z(re,0.04,0.4,0.04,It,c+0.28,1.5,4.03),Et(re,Jt(0.014,0.014,0.16,8),It,c+0.28,1.65,4.12,Math.PI/2-0.5),Et(re,Jt(0.03,0.022,0.2,10),H(1776930,0.5),c+0.28,1.42,4.12,Math.PI/2-0.5),Et(re,Jt(0.025,0.025,0.14,10),t([14239787,3107801,4042346,15263976][l]),c-0.36,1.37,4.07),Et(re,Jt(0.028,0.028,0.18,10),t(15921906),c-0.3,1.39,4.07),z(re,0.3,0.012,0.1,H(13625855,0.1,0.3),c-0.33,1.27,4.05),z(re,0.26,0.012,0.14,H(2781048,0.5),c+0.27,0.75,4.065).visible=!1,z(re,0.026,1.9,0.96,e,c+0.55,1.07,4.5),z(re,0.03,0.03,0.98,It,c+0.55,2.04,4.5),z(re,0.03,1.95,0.03,It,c+0.55,1.05,4.99),z(re,0.03,0.03,0.04,It,c+0.55,2,4);let u=new rt;u.position.set(c-0.5,1.05,5),u.rotation.y=h?l===1?-1.2:-0.7:0,re.add(u),z(u,0.98,1.9,0.022,e,0.5,0,0),z(u,0.98,0.03,0.03,It,0.5,0.94,0),z(u,0.03,0.1,0.1,It,0.88,0,0.03).visible=!0;for(let f of[-0.7,0.7])z(u,0.04,0.08,0.04,It,0,f,0)}z(re,0.026,1.9,0.96,e,-8.55,1.07,4.5),z(re,0.03,0.03,0.98,It,-8.55,2.04,4.5);let r=H(8826550,0.5),s=H(4943992,0.5);[4.15,5.15,6.15,7.15].forEach((l)=>{z(re,1.5,1.75,0.04,r,-11.53,1.03,l),z(re,1.52,0.03,0.05,It,-11.53,1.92,l),st(re,0.014,0.014,0.16,It,-10.85,0.08,l,8)});let a=(l)=>{z(re,0.22,0.42,0.4,hl,-12.16,0.64,l),z(re,0.24,0.035,0.42,hl,-12.16,0.86,l),Et(re,Jt(0.028,0.028,0.014,14),It,-12.16,0.885,l);let c=[[0,0],[0.08,0],[0.1,0.12],[0.17,0.28],[0.2,0.4],[0.19,0.43],[0.165,0.43],[0.15,0.36],[0,0.3]].map((g)=>new W(g[0],g[1]));Et(re,new Ka(c,28),new ht({color:16053489,roughness:0.12,side:Ot}),-11.86,0,l).scale.set(1.45,1,1),Et(re,new kn(0.155,0.022,10,28),H(1711395,0.35),-11.86,0.452,l,Math.PI/2).scale.set(1.45,1,1);let f=new rt;f.position.set(-12.01,0.46,l),f.rotation.z=1.38,re.add(f),Et(f,Jt(0.17,0.17,0.02,24),H(1711395,0.35),0.27,0,0).scale.set(1.5,1,1),z(re,0.1,0.12,0.12,It,-11.56,0.7,l+0.46),st(re,0.045,0.045,0.1,H(16777215,0.9),-11.56,0.7,l+0.46,14).rotation.x=Math.PI/2};[4.65,5.65,6.65].forEach((l,c)=>{a(l);let h=new rt;h.position.set(-10.83,1,l-0.45),h.rotation.y=[1.15,0,0.8][c],re.add(h),z(h,0.03,1.72,0.9,s,0,0,0.45),z(h,0.032,0.05,0.1,It,0.002,0,0.78),z(h,0.034,0.03,0.06,H(c===1?14036269:4042346,0.4),-0.002,0.07,0.78),z(h,0.032,0.03,0.9,It,0,0.86,0.45);for(let u of[-0.6,0.6])z(h,0.04,0.07,0.03,It,0,u,0.01);st(re,0.04,0.04,0.02,H(15263976,0.5),-12.25,1.6,l,14).rotation.z=Math.PI/2}),z(re,0.2,0.34,0.2,H(7041144,0.5,0.6),-11,0.17,6.95),[-10.2,-9.6,-9].forEach((l)=>{Et(re,new Ga(0.12,0.24,6,14),hl,l,1,7.46).scale.set(1,1,0.55),z(re,0.2,0.34,0.06,hl,l,0.78,7.52),Et(re,Jt(0.012,0.012,0.5,8),It,l,1.45,7.55),z(re,0.1,0.07,0.03,It,l,1.3,7.55),Et(re,Jt(0.012,0.012,0.06,8),H(3159098,0.6),l,0.7,7.425),st(re,0.06,0.06,0.012,H(3159098,0.5,0.7),l,0.007,7.3,14)}),[-10.5,-9.9,-9.3,-8.7].forEach((l)=>z(re,0.03,0.78,0.34,r,l,1.05,7.38)),[-6,-5.1,-4.2].forEach((l)=>{z(re,0.52,0.1,0.42,hl,l,0.86,7.36),z(re,0.4,0.02,0.3,H(13620442,0.2),l,0.915,7.37),st(re,0.025,0.025,0.004,H(3159098,0.5,0.8),l,0.926,7.4,12),Et(re,Jt(0.014,0.014,0.14,10),It,l,0.99,7.52),Et(re,Jt(0.012,0.012,0.12,10),It,l,1.05,7.46,Math.PI/2),z(re,0.03,0.03,0.03,It,l+0.07,0.95,7.52),z(re,0.7,0.9,0.02,new ht({color:14676479,roughness:0.03,metalness:0.9}),l,1.62,7.56),z(re,0.74,0.94,0.012,H(1382172,0.5),l,1.62,7.572),z(re,0.66,0.012,0.012,Dt(15398143,3),l,2.12,7.55)}),[-5.55,-4.65].forEach((l)=>{z(re,0.07,0.17,0.07,H(16250871,0.3),l,1.14,7.53),Et(re,Jt(0.012,0.012,0.05,8),It,l,1.25,7.5,Math.PI/2)}),Gt(re,0.14,0.36,0.26,H(12106948,0.25,0.9),-3.82,1.42,6.75,0.03),z(re,0.016,0.02,0.18,H(1382172,0.4),-3.74,1.28,6.75),Gt(re,0.16,0.28,0.24,H(15264236,0.3,0.5),-3.82,1.35,5.95,0.05),Et(re,Jt(0.035,0.03,0.08,14),H(2106410,0.4),-3.82,1.2,5.95),st(re,0.15,0.13,0.55,H(7041144,0.35,0.85),-3.95,0.28,7.2,18),st(re,0.155,0.155,0.03,H(3159098,0.5),-3.95,0.57,7.2,18);for(let[l,c]of[[-7.3,6.2],[-5,5.8]]){st(re,0.1,0.1,0.008,H(6975351,0.4,0.8),l,0.006,c,18);for(let h=0;h<3;h++)z(re,0.14,0.004,0.012,H(3159098,0.5),l,0.011,c-0.04+h*0.04)}Bn(re,"SPRCHY · WC",2.4,0.4,"#7fd0ff",-6.2,2.6,4,0,"bold 140px Arial Black",void 0,!1),Di(re,-6.2,2.6,5.7,15398143,7,8)})();(function(){z(re,0.45,0.42,2,H(2763827,0.6),0.15,0.21,6),z(re,0.5,0.06,2,H(8018488,0.45),0.15,0.45,6),Bn(re,"BADMINTON  ›",2.2,0.36,"#6fd0ff",-1.9,2.6,7.45,Math.PI,"bold 140px Arial Black",void 0,!1);for(let e of[-3.3,0.1]){st(re,0.2,0.15,0.4,H(2369067,0.6),e,0.2,4.2,16),st(re,0.03,0.03,0.6,H(2780986,0.8),e,0.7,4.2,6);let t=new ne(new vn(0.28,12,9),H(2058804,0.8));t.scale.y=1.2,t.position.set(e,1.15,4.2),re.add(t)}Di(re,-1.6,2.6,5.8,16771276,6,7)})();z(re,5.2,Qi,0.03,Dg(5.2,Qi),-6.2,Qi/2,3.99);z(re,0.03,2.85,2.85,th(2.85,2.85),-8.94,1.425,-2.425);z(re,0.03,Qi,2.65,th(2.65,Qi),-8.94,Qi/2,2.525);z(re,0.03,0.15,2.2,H(1381914,0.6),-8.94,0.075,0.1).visible=!1;(function(){let e=new rt;e.position.set(-0.6,0,0.4),e.rotation.y=Math.PI/2,xt.add(e);let t=1.2,i=0.68,n=0.93,r=Do(1200,680,(d,p,y)=>{for(let v=0;v<12;v++)d.fillStyle=v%2?"#2d8a40":"#34964a",d.fillRect(v*p/12,0,p/12+1,y);oi(d,p,y,10),d.strokeStyle="rgba(255,255,255,.92)",d.lineWidth=6,d.strokeRect(12,12,p-24,y-24),d.beginPath(),d.moveTo(p/2,12),d.lineTo(p/2,y-12),d.stroke(),d.beginPath(),d.arc(p/2,y/2,82,0,7),d.stroke(),d.fillStyle="#fff",d.beginPath(),d.arc(p/2,y/2,9,0,7),d.fill();for(let v of[0,1]){let M=v?p-12:12,b=v?-1:1;d.strokeRect(v?p-12-150:12,y/2-170,150,340),d.strokeRect(v?p-12-62:12,y/2-92,62,184),d.beginPath(),d.arc(M+b*150,y/2,72,-Math.PI/2,Math.PI/2,v===1),d.stroke(),d.fillStyle="#fff",d.beginPath(),d.arc(M+b*105,y/2,7,0,7),d.fill()}}),s=H(1381914,0.42,0.1),o=H(1974310,0.55),a=14036269,l=3106518;z(e,1.36,0.14,0.72,s,0,n-0.1,0);let c=new ne(new Pt(t,i),new ht({map:r,roughness:0.55}));c.rotation.x=-Math.PI/2,c.position.y=n,e.add(c);for(let d of[-1,1])Gt(e,1.44,0.14,0.07,s,0,n+0.035,d*0.375,0.02),z(e,1.46,0.012,0.075,H(14212064,0.2,1),0,n+0.108,d*0.375);for(let d of[-1,1]){for(let y of[-1,1])Gt(e,0.07,0.14,0.27,s,d*0.665,n+0.035,y*0.2+y*0.02,0.02);z(e,0.07,0.05,0.22,o,d*0.665,n+0.075,0),z(e,0.2,0.012,0.19,H(460810,0.8),d*0.74,n-0.032,0);let p=z(e,0.16,0.02,0.2,H(2763827,0.5),d*0.8,n-0.07,0);p.rotation.z=-d*0.22,z(e,0.012,0.045,0.2,H(2763827,0.5),d*0.875,n-0.04,0),z(e,0.14,0.045,0.012,H(2763827,0.5),d*0.8,n-0.045,0.098),z(e,0.14,0.045,0.012,H(2763827,0.5),d*0.8,n-0.045,-0.098);for(let y of[-1,1]){let v=z(e,0.12,0.05,0.12,o,d*0.6,n+0.025,y*0.3);v.rotation.y=Math.PI/4}z(e,0.016,0.02,0.6,Dt(d>0?14036269:3106518,1.6),d*0.69,n-0.17,0)}z(e,1.3,0.01,0.01,Dt(3725567,2.2),0,n-0.175,0.365),z(e,1.3,0.01,0.01,Dt(3725567,2.2),0,n-0.175,-0.365);for(let[d,p]of[[-0.6,-0.31],[0.6,-0.31],[-0.6,0.31],[0.6,0.31]])st(e,0.036,0.026,0.82,s,d,0.41,p,14),st(e,0.02,0.026,0.03,H(13159378,0.2,1),d,0.014,p,12),z(e,0.07,0.04,0.07,H(2763827,0.5),d,0.84,p);z(e,1.2,0.035,0.03,s,0,0.3,0.31),z(e,1.2,0.035,0.03,s,0,0.3,-0.31),z(e,0.03,0.035,0.62,s,-0.6,0.3,0),z(e,0.03,0.035,0.62,s,0.6,0.3,0);let h=[["A",1],["A",2],["B",3],["A",5],["B",5],["A",3],["B",2],["B",1]],u={1:0,2:0.24,3:0.2,5:0.115},f=n+0.075,m=H(14212064,0.15,1),g=H(789776,0.6);h.forEach(([d,p],y)=>{let v=-0.518+y*0.148,M=d==="A"?a:l,b=d==="A"?1:-1,w=new rt;w.position.set(v,f,(y*37%7-3)*0.012),e.add(w);let x=0.7,S=0.5,R=d==="A"?1:-1;Et(w,Jt(0.0075,0.0075,x+S,10),m,0,0,R*(x-S)/2,Math.PI/2),Et(w,Jt(0.0205,0.0205,0.16,14),g,0,0,R*(x-0.05),Math.PI/2),Et(w,Jt(0.022,0.022,0.012,14),H(15263976,0.4),0,0,R*(x-0.135),Math.PI/2),Et(w,Jt(0.0215,0.0215,0.012,14),m,0,0,R*x,Math.PI/2),Et(w,Jt(0.014,0.014,0.02,12),g,0,0,-R*0.4,Math.PI/2);let U=(y%3-1)*0.35;for(let I=0;I<p;I++){let O=p===1?0:(I-(p-1)/2)*u[p],te=new rt;te.position.set(0,0,O),te.rotation.z=U*b*0.5,w.add(te),z(te,0.03,0.058,0.04,H(M,0.55),0,-0.02,0),z(te,0.026,0.034,0.03,H(_(M),0.6),0,-0.067,0),z(te,0.04,0.012,0.05,g,b*0.008,-0.088,0),Et(te,new vn(0.014,10,8),H(15782832,0.6),0,0.02,0)}});function _(d){return(d>>16&255)*0.55<<16|(d>>8&255)*0.55<<8|(d&255)*0.55}Et(e,new vn(0.019,14,10),H(16250871,0.35),0.08,n+0.02,0.06);for(let[d,p,y]of[[0.44,a,3],[-0.44,l,5]]){Et(e,Jt(0.005,0.005,0.6,8),m,0,n+0.19,d,0,0,Math.PI/2);for(let v of[-1,1])z(e,0.014,0.19,0.014,m,v*0.3,n+0.095,d);for(let v=0;v<10;v++){let M=v<y;Et(e,Jt(0.013,0.013,0.025,12),H(M?p:15263976,0.4),(M?-0.27:0.27)+(M?v:v-10)*0.028+(M?0:0),n+0.19,d,0,0,Math.PI/2)}}for(let[d,p]of[[-0.74,0.34],[0.74,-0.34]])st(e,0.04,0.032,0.09,H(13620186,0.25,0.9),d,n-0.015,p,14),st(e,0.034,0.034,0.004,H(1381914,0.5),d,n+0.031,p,14)})();var bt=new rt;vs.add(bt);var ce={x0:-12.4,x1:5.6,z0:7.7,z1:24.5,Hs:4.2,Hc:9};ce.cx=(ce.x0+ce.x1)/2;ce.a=(ce.x1-ce.x0)/2;ce.b=ce.Hc-ce.Hs;var Dr=(e,t=0)=>{let i=(e-ce.cx)/(ce.a-t);return ce.Hs+(ce.b-t)*Math.sqrt(Math.max(0,1-i*i))};jt.vinylBlue=(()=>{let e=Ht(256,256),t=e.getContext("2d");return t.fillStyle="#1f3f7a",t.fillRect(0,0,256,256),oi(t,256,256,14),e})();{let e=ji("vinylBlue",2,0.35,0,ce.x1-ce.x0,ce.z1-ce.z0),t=new ne(new Pt(ce.x1-ce.x0,ce.z1-ce.z0),e);t.rotation.x=-Math.PI/2,t.position.set(ce.cx,0.002,(ce.z0+ce.z1)/2),t.receiveShadow=!0,bt.add(t)}var Qv=(()=>{let e=Ht(610,1340),t=e.getContext("2d");t.fillStyle="#2c7a4e",t.fillRect(0,0,610,1340),oi(t,610,1340,10),t.strokeStyle="#fff",t.fillStyle="#fff";let i=4,n=(s,o,a,l)=>{t.lineWidth=i,t.beginPath(),t.moveTo(s,o),t.lineTo(a,l),t.stroke()};t.lineWidth=i,t.strokeRect(2,2,606,1336),n(46,0,46,1340),n(564,0,564,1340),n(0,76,610,76),n(0,1264,610,1264),n(0,472,610,472),n(0,868,610,868),n(305,0,305,472),n(305,868,305,1340),t.fillStyle="rgba(255,255,255,.55)",t.fillRect(0,668,610,4);let r=new ln(e);return r.colorSpace=Rt,r.anisotropy=16,r})(),No=[ce.cx-3.9,ce.cx+3.9],Ki=16.1;for(let e of No){let t=new ne(new Pt(6.1,13.4),new ht({map:Qv,roughness:0.32}));t.rotation.x=-Math.PI/2,t.position.set(e,0.012,Ki),t.receiveShadow=!0,bt.add(t);for(let o of[-1,1])st(bt,0.028,0.034,1.55,H(1842207,0.4,0.7),e+o*3.05,0.775,Ki,12),st(bt,0.14,0.16,0.05,H(3816256,0.5,0.5),e+o*3.05,0.025,Ki,16);let i=Ht(512,64),n=i.getContext("2d");n.fillStyle="#fff",n.fillRect(0,0,512,9),n.strokeStyle="rgba(240,240,240,.75)",n.lineWidth=1;for(let o=0;o<512;o+=7)n.beginPath(),n.moveTo(o,0),n.lineTo(o,64),n.stroke();for(let o=9;o<64;o+=7)n.beginPath(),n.moveTo(0,o),n.lineTo(512,o),n.stroke();let r=new ln(i);r.colorSpace=Rt;let s=new ne(new Pt(6.1,0.76),new Ut({map:r,transparent:!0,side:Ot,alphaTest:0.25}));s.position.set(e,1.17,Ki),bt.add(s),z(bt,0.5,0.05,0.5,H(7830146,0.5),e+3.7,1.5,Ki),z(bt,0.06,1.5,0.06,H(7830146,0.3,0.8),e+3.7,0.75,Ki-0.2),z(bt,0.06,1.5,0.06,H(7830146,0.3,0.8),e+3.7,0.75,Ki+0.2)}var Ng=(e,t)=>ji("plaster",1.2,0.9,0,e,t);en(bt,ce.x0,ce.z0,ce.x0,ce.z1,ce.Hs,Ng);en(bt,ce.x1,ce.z0,ce.x1,ce.z1,ce.Hs,Ng);var Ug=(e,t)=>ji("rubber",1.2,0.8,0,e,t,{color:4880127});z(bt,0.1,1.3,ce.z1-ce.z0,Ug(16,1.3),ce.x0+0.1,0.65,(ce.z0+ce.z1)/2);z(bt,0.1,1.3,ce.z1-ce.z0,Ug(16,1.3),ce.x1-0.1,0.65,(ce.z0+ce.z1)/2);function Fg(e,t,i){let n=[[ce.x0,0]];for(let[l,c]of t)n.push([l,0],[l,2.2],[c,2.2],[c,0]);n.push([ce.x1,0]);let r=48;for(let l=r;l>=0;l--){let c=ce.x0+(ce.x1-ce.x0)*l/r;n.push([c,Dr(c)])}let s=new Xi(n.map((l)=>new W(l[0],l[1]))),o=new go(s,{depth:0.22,bevelEnabled:!1}),a=new ne(o,ji("plaster",1.2,0.9,0,6,6));if(a.position.z=e-0.11,a.receiveShadow=!0,bt.add(a),i)wf.push(a);return a}Fg(ce.z0,[[-8.2,-6.8],[-2.8,-1]],!1);Fg(ce.z1,[],!0);for(let[e,t]of[[-8.2,-6.8],[-2.8,-1]])z(bt,0.1,2.2,0.3,H(1381914,0.5),e,1.1,ce.z0),z(bt,0.1,2.2,0.3,H(1381914,0.5),t,1.1,ce.z0),z(bt,t-e,0.1,0.3,H(1381914,0.5),(e+t)/2,2.2,ce.z0);var Bg=new Ut({color:13625087,toneMapped:!1});for(let e=0;e<5;e++){let t=new ne(new Pt(2,3.2),Bg);t.position.set(ce.cx-7.2+e*3.6,5.6,ce.z1-0.115),t.rotation.y=Math.PI,bt.add(t),wf.push(t)}for(let e of[ce.x0+0.13,ce.x1-0.13])for(let t=0;t<6;t++){let i=new ne(new Pt(1.8,0.8),Bg);i.position.set(e,3.3,ce.z0+1.6+t*2.7),i.rotation.y=e<ce.cx?Math.PI/2:-Math.PI/2,bt.add(i)}(function(){let n=new ht({map:Qc(jt.steel,2,2),color:10133674,roughness:0.35,metalness:0.85}),r=[],s=[];for(let b=0;b<=36;b++){let w=ce.x0+0.25+(ce.x1-ce.x0-0.5)*b/36;r.push([w,Dr(w,0.15)]),s.push([w,Dr(w,0.15)-0.7+Math.abs(b-18)/18*0.25])}let o=[],a=wi(0,1,0),l=new qe,c=new li,h=new A,u=new A,f=(b,w,x)=>{let S=wi(b[0],b[1],x),R=wi(w[0],w[1],x),U=R.clone().sub(S),I=U.length();c.setFromUnitVectors(a,U.normalize()),h.copy(S).add(R).multiplyScalar(0.5),u.set(1,I,1),l.compose(h,c,u),o.push(l.clone())};for(let b=0;b<8;b++){let w=ce.z0+0.9+b*(ce.z1-ce.z0-1.8)/7;for(let x of[r,s]){let S=new uo(x.map((U)=>wi(U[0],U[1],w))),R=new ne(new $a(S,72,0.075,8,!1),n);R.castShadow=!0,bt.add(R)}for(let x=0;x<36;x++)f(r[x],s[x],w),f(s[x],r[x+1],w);f(r[36],s[36],w);for(let x of[ce.x0+0.22,ce.x1-0.22])z(bt,0.3,ce.Hs-0.1,0.3,n,x,(ce.Hs-0.1)/2+0.05,w),z(bt,0.45,0.05,0.45,H(3158842,0.5,0.6),x,0.03,w)}let m=new Ct(0.028,0.028,1,6),g=new Un(m,n,o.length);o.forEach((b,w)=>g.setMatrixAt(w,b)),bt.add(g);for(let b=0;b<=12;b++){let w=ce.x0+0.25+(ce.x1-ce.x0-0.5)*b/12,x=Dr(w,0.15),S=st(bt,0.05,0.05,ce.z1-ce.z0-1.4,n,w,x,(ce.z0+ce.z1)/2,8);S.rotation.x=Math.PI/2}let _=60,d=[],p=[],y=[];for(let b=0;b<=_;b++){let w=ce.x0+(ce.x1-ce.x0)*b/_,x=Dr(w)+0.12;if(d.push(w,x,ce.z0,w,x,ce.z1),y.push(b*0.6,0,b*0.6,4),b<_){let S=b*2;p.push(S,S+1,S+2,S+1,S+3,S+2)}}let v=new Oe;v.setAttribute("position",new ye(d,3)),v.setAttribute("uv",new ye(y,2)),v.setIndex(p),v.computeVertexNormals();let M=new ne(v,new ht({color:10331053,roughness:0.7,metalness:0.3,side:Ot}));qi.add(M);for(let b of No)for(let w of[-1.6,1.6])for(let x=0;x<3;x++){let S=ce.z0+3.5+x*4.5+(b>ce.cx?0:0),R=Math.min(Dr(b+w,0.15)-0.9,7.6),U=new ne(new zt(0.16,0.08,2.4),Dt(16775146,9));U.position.set(b+w,R,S),bt.add(U),z(bt,0.02,Dr(b+w,0.15)-R-0.1,0.02,H(546,0.5,0.7),b+w,(Dr(b+w,0.15)+R)/2-0.05,S)}for(let b of No)for(let w=0;w<3;w++)Di(bt,b,7,ce.z0+3.5+w*4.5,16775146,22,26)})();Bn(bt,(window.FUNUI?FUNUI.summary("bad").k[0][0]:"0–0").replace("–"," : "),2.2,0.8,"#ffcf3a",ce.x1-0.14,3.2,Ki,-Math.PI/2,"bold 280px Arial Black","#0b0b0b",!1);Bn(bt,"BADMINTON · LIGA",5,0.6,"#2b4fff",ce.cx,6,ce.z0+0.14,0,"bold 84px Arial Black, Arial",void 0,!1);for(let e of[-9,-3.4,2.2])z(bt,2.6,0.05,0.4,H(3812642,0.5),e,0.45,ce.z1-0.5),z(bt,0.06,0.44,0.35,H(1381653),e-1.2,0.22,ce.z1-0.5),z(bt,0.06,0.44,0.35,H(1381653),e+1.2,0.22,ce.z1-0.5);for(let e=0;e<6;e++){let t=st(bt,0.04,0.04,0.3,H(16766010),-11+e*0.12,0.6,ce.z1-0.6,10);t.rotation.x=0.2}var Or=new rt;Or.position.set(6.5,1.85,-3.6);Or.rotation.y=0;Ai.add(Or);var Og=window.FUNUI?window.FUNUI.summary("strava").k:[["12/20"],["9 400"]],[zg,Gg]=Og[0][0].split("/").map(Number);Or.add(new ne(new kn(0.85,0.1,16,72),zv(2761296,{r:0.6})));var Hg=2*Math.PI*zg/Gg,kg=new ne(new kn(0.85,0.1,16,160,Hg),new Ut({color:new ue(16534530).multiplyScalar(1.5),toneMapped:!1}));kg.rotation.z=Math.PI/2-Hg;Or.add(kg);var jv=Do(512,384,(e,t,i)=>{e.textAlign="center",e.fillStyle="#fff",e.font="800 140px Inter,Arial",e.fillText(zg+"",t/2-40,190),e.fillStyle="#b8a9c9",e.font="700 70px Inter,Arial",e.fillText("/"+Gg,t/2+90,190),e.font="600 34px Inter,Arial",e.fillText("A C T I V E   D A Y S",t/2,250)});Af(1.5,1.12,jv,Or,0,0,0.02);var Vg=(e,t)=>Do(768,96,(i,n,r)=>{i.fillStyle="rgba(10,15,44,.85)",i.beginPath(),i.roundRect(4,4,n-8,r-8,44),i.fill(),i.strokeStyle=t,i.lineWidth=4,i.stroke(),i.fillStyle=t,i.textAlign="center",i.font="700 40px Inter,Arial",i.fillText(e,n/2,62)});Af(1.9,0.24,Vg("\uD83D\uDC63  "+Og[1][0]+" STEPS / DAY","#3dff9a"),Or,0,-1.3,0.02);Af(1.9,0.24,Vg("GYM 3× · YOGA 2× · WALKS","#8a96c4"),Or,0,-1.62,0.02);var yg=(No[0]+No[1])/2,Jc=[{k:"bad",x:yg,z:Ki,r:9.5,c:"#3dff9a",label:"BADMINTON",pos:[yg,3.4,Ki],sc:1.5},{k:"climb",x:Ye.cx,z:Ye.cz,r:6.4,c:"#38e8ff",label:"CLIMBING",pos:[-10.8,3.7,-5.95],sc:1.2,ring:!1},{k:"strava",x:6.5,z:-2.3,r:2.3,c:"#ff7a2a",label:"STRAVA",pos:[6.5,3,-3.5],sc:0.8},{k:"games",x:6.6,z:-0.6,r:2.8,c:"#6d86ff",label:"GAMES",pos:[8.2,2.5,-1.8],sc:1},{k:"beer",x:-6.35,z:0,r:2.6,c:"#ff6a80",label:"BEER PONG",pos:[-6.35,2.55,0],sc:1}];Jc.forEach((e)=>{let t=Hv(e.label,e.c,e.sc);if(t.position.set(...e.pos),Ai.add(t),e.ring!==!1&&e.k!=="bad"){let i=new ne(new xo(e.r*0.55,e.r*0.55+0.05,64),new Ut({color:new ue(e.c).multiplyScalar(1.5),transparent:!0,opacity:0.55,side:Ot,toneMapped:!1}));i.rotation.x=-Math.PI/2,i.position.set(e.x,0.02,e.z),Ai.add(i),e.ring=i}});var Sf=[],Wg=new Map;function Zn(e,t,i,n,r,s,o,a,l,c=5.5,h=!0){let u=new zt(t,i,n),f=new ne(u,new Ut({visible:!1}));f.position.set(r,s,o),f.userData.isHit=!0,l.add(f);let m=new pi({color:new ue(a).multiplyScalar(2),transparent:!0,opacity:0,toneMapped:!1,depthTest:!1}),g={id:e,hit:f,hits:[f],mat:m,outline:h,far:c};if(h){l.updateMatrixWorld(!0);let _=new qe().copy(l.matrixWorld).invert(),d=new bi(new A(r-t/2,s-i/2,o-n/2),new A(r+t/2,s+i/2,o+n/2)),p=Math.max(t,i,n)*1.25,y=[];if(l.traverse((v)=>{if(!v.isMesh||v.isInstancedMesh||v.userData.isHit||v.userData.itemLine||!v.geometry)return;if(!v.geometry.boundingBox)v.geometry.computeBoundingBox();let M=new qe().multiplyMatrices(_,v.matrixWorld),b=v.geometry.boundingBox.clone().applyMatrix4(M),w=b.getSize(new A);if(Math.max(w.x,w.y,w.z)>p||!d.containsPoint(b.getCenter(new A)))return;y.push([v,M])}),y.forEach(([v,M])=>{let b=new Ji(new mc(v.geometry,28),m);b.matrixAutoUpdate=!1,b.matrix.copy(M),b.userData.itemLine=!0,b.renderOrder=5,l.add(b),g.hits.push(v)}),!y.length){let v=new Ji(new mc(u),m);v.position.copy(f.position),v.userData.itemLine=!0,l.add(v)}}g.hits.forEach((_)=>Wg.set(_,g)),Sf.push(g)}Zn("pc",0.3,0.52,0.5,0.83,1.03,-0.15,7177983,Br);Zn("kb",0.39,0.04,0.16,-0.2,0.8,0.22,7177983,Br);Zn("ms",0.075,0.04,0.14,0.27,0.8,0.21,4063130,Br);Zn("hp",0.26,0.12,0.2,-0.7,0.84,0.26,16751178,Br);Zn("mon",0.62,0.36,0.05,0.12,1.135,-0.2,3729663,Br,5.5,!1);Zn("st:games",1.3,0.42,0.3,-1.78,1.12,-0.1,3729663,Br,7,!1);Zn("st:bad",0.4,1,2.4,ce.x1-0.2,3.2,Ki,4063130,Ai,24,!1);Zn("st:strava",2.2,2.4,0.3,6.5,1.7,-3.55,16742954,Ai,9,!1);Zn("st:climb",5,5,5,Ye.cx,2.5,Ye.cz,3729663,Ai,16,!1);Zn("st:beer",1.9,0.9,2.7,-6.35,0.7,0,16738944,Ai,9,!1);var Ve={x:-1.9,z:2.8,yaw:0,pitch:0,vx:0,vz:0},eM=1.65,fl=0.3,tM=[[-8.8,8.8,-3.85,3.85],[-3.9,4.3,-9.4,-3.85],[-12.4,-8.8,-5.45,7.7],[-12.4,-3.6,3.85,7.7],[-3.6,0.4,3.85,7.7],[-12.4,5.6,7.7,24.5]],iM=[[-3.62,4.02,-4.3,-3.4],[-11.3,-9.9,-5.8,-5.1],[-9.25,-8.35,-0.9,1.1],[-2.7,-1.1,3.5,4.2],[-2.7,-1.1,7.35,8.05],[-8.1,-6.9,7.35,8.05]];function nM(e,t){let i=e-Ye.cx,n=t-Ye.cz,r=Ye.R*Math.cos(Math.PI/6)-fl;for(let s=0;s<6;s++){let o=Math.PI/6+s*Math.PI/3;if(i*Math.cos(o)+n*Math.sin(o)>r)return!1}return!0}function ul(e,t){for(let i of tM)if(e>i[0]+fl&&e<i[1]-fl&&t>i[2]+fl&&t<i[3]-fl)return!0;for(let i of iM)if(e>i[0]&&e<i[1]&&t>i[2]&&t<i[3])return!0;return nM(e,t)}var cr=[],ei=(e,t,i,n,r)=>{let s=Math.max(1,Math.ceil(Math.hypot(i-e,n-t)/(r*0.9)));for(let o=0;o<=s;o++)cr.push([e+(i-e)*o/s,t+(n-t)*o/s,r])};ei(-1.95,-4.6,-1.95,-6.9,0.35);ei(2.35,-4.6,2.35,-6.9,0.35);ei(-1.9,-4.6,2.3,-4.6,0.4);cr.push([0.2,-6.05,0.5]);ei(8.25,-2.65,8.25,2.65,0.4);ei(8.35,2.65,8.35,3.7,0.3);ei(8.35,-3.7,8.35,-2.65,0.3);ei(1.5,1.85,4.9,1.85,0.5);ei(1.1,3.45,4.9,3.45,0.3);[4.5,3.65,2.8,1.95].forEach((e)=>cr.push([e,0.875,0.25]));ei(-6.95,-1,-6.95,1,0.42);ei(-5.75,-1,-5.75,1,0.42);ei(-0.6,-0.15,-0.6,0.95,0.42);cr.push([-8.35,3.35,0.32],[-4.45,3.35,0.32],[-3.9,-3.85,0.3],[4.3,-3.85,0.3]);ei(-8.3,-3.45,-5.5,-3.45,0.22);ei(-3.55,-7.2,-3.55,-6,0.15);ei(3.9,-7.2,3.9,-6,0.15);cr.push([Ye.cx,Ye.cz,2.15]);ei(-11.95,-4.7,-11.95,2.3,0.12);ei(-10.9,-3.6,-10.9,-1,0.25);ei(-10.9,0.9,-10.9,3.5,0.25);ei(-8.5,4.35,-4.1,4.35,0.55);ei(-6.4,7.4,-4,7.4,0.3);ei(-11.9,4.4,-11.9,7.4,0.5);ei(0.15,5.1,0.15,6.9,0.3);cr.push([-3.3,4.2,0.3],[0.1,4.2,0.3]);for(let e of No)ei(e-3.05,Ki,e+3.05,Ki,0.22),cr.push([e+3.7,Ki,0.35]);ei(ce.x0+1,ce.z1-0.5,ce.x1-1,ce.z1-0.5,0.25);function Xg(e,t){if(!ul(Ve.x,Ve.z))if(ul(Ve.x,t))Ve.z=t;else if(ul(e,Ve.z))Ve.x=e;else Ve.x=e,Ve.z=t;cr.forEach(([i,n,r])=>{let s=Ve.x-i,o=Ve.z-n,a=Math.hypot(s,o),l=r+0.28;if(a<l&&a>0.0001){let c=i+s/a*l,h=n+o/a*l;if(ul(c,h))Ve.x=c,Ve.z=h;else Ve.x=e,Ve.z=t}})}var En={},Yn=!1,Kc=!1,Lo={x:0,y:0};addEventListener("keydown",(e)=>{if(!Yn||wn.isOpen())return;if(En[e.code]=!0,e.code==="KeyE"||e.code==="Enter")ih();if(e.code.startsWith("Arrow")||e.code==="Space")e.preventDefault()});addEventListener("keyup",(e)=>{En[e.code]=!1});var bf=An("#start"),$c=bf.querySelector(".go"),l9=$c?$c.textContent:"",qg=document.createElement("style");qg.textContent='#start[data-paused="1"] .keys,#start[data-paused="1"] p{display:none!important}#start[data-paused="1"] h1{opacity:.55}';document.head.appendChild(qg);function Yg(){if(bf.classList.add("on"),bf.dataset.paused="1",$c)$c.textContent="POKRAČOVAT · KLIKNI"}function rM(){if(Ur||!un.requestPointerLock)return;try{let e=un.requestPointerLock();if(e&&e.catch)e.catch(()=>{})}catch(e){}setTimeout(()=>{if(Yn&&!wn.isOpen()&&document.pointerLockElement!==un)Yg()},350)}document.addEventListener("pointerlockchange",()=>{if(Kc=document.pointerLockElement===un,!Kc&&Yn&&!wn.isOpen()&&!Ur)Yg()});addEventListener("mousemove",(e)=>{if(!Yn||wn.isOpen())return;if(Kc||Rf)Ve.yaw-=e.movementX*0.0022,Ve.pitch=Math.max(-1.2,Math.min(1.2,Ve.pitch-e.movementY*0.0022))});var Rf=!1;un.addEventListener("mousedown",()=>{if(Rf=!0,Kc&&Yi&&(Yi==="mon"||Yi.startsWith("st:")))return ih()});addEventListener("mouseup",()=>{Rf=!1});function sM(){if(Yn=!0,An("#start").classList.remove("on"),An("#hud").classList.add("on"),!Ur&&un.requestPointerLock)try{let e=un.requestPointerLock();if(e&&e.catch)e.catch(()=>{})}catch(e){}}An("#start").addEventListener("click",sM);wn.setOnClose(()=>{En.KeyE=!1,rM()});if(Ur){let e=An("#joy"),t=An("#knob"),i=null,n=null,r=0,s=0,o=(c)=>{let h=e.getBoundingClientRect(),u=h.left+h.width/2,f=h.top+h.height/2,m=(c.clientX-u)/(h.width/2),g=(c.clientY-f)/(h.height/2),_=Math.hypot(m,g);if(_>1)m/=_,g/=_;Lo.x=m,Lo.y=g,t.style.transform=`translate(${m*34}px,${g*34}px)`};e.addEventListener("pointerdown",(c)=>{i=c.pointerId,e.setPointerCapture(i),o(c)}),e.addEventListener("pointermove",(c)=>{if(c.pointerId===i)o(c)});let a=(c)=>{if(c.pointerId===i)i=null,Lo.x=Lo.y=0,t.style.transform=""};e.addEventListener("pointerup",a),e.addEventListener("pointercancel",a),un.addEventListener("pointerdown",(c)=>{if(!Yn||wn.isOpen()||n!==null)return;n=c.pointerId,r=c.clientX,s=c.clientY,un.setPointerCapture(n)}),un.addEventListener("pointermove",(c)=>{if(c.pointerId!==n)return;Ve.yaw-=(c.clientX-r)*0.005,Ve.pitch=Math.max(-1.1,Math.min(1.1,Ve.pitch-(c.clientY-s)*0.005)),r=c.clientX,s=c.clientY});let l=(c)=>{if(c.pointerId===n)n=null};un.addEventListener("pointerup",l),un.addEventListener("pointercancel",l),An("#act").addEventListener("click",()=>ih())}var Tn=null,Yi=null,Ef=new Ic;Ef.far=26;var Vc=An("#prompt"),Wc=An("#sum");function oM(e){if(e===(Tn&&Tn.k))return;if(Tn=e?Jc.find((i)=>i.k===e):null,!Tn){Vc.classList.remove("on"),Wc.classList.remove("on");return}let t=wn.summary(e);Vc.querySelector("b").textContent=t.t,Vc.style.setProperty("--c",Tn.c),Wc.style.setProperty("--c",Tn.c),Wc.innerHTML=`<h4>${t.t}</h4><p>${t.s}</p><div>${t.k.map((i)=>`<span><b>${i[0]}</b><i>${i[1]}</i></span>`).join("")}</div>`,Vc.classList.add("on"),Wc.classList.add("on")}function ih(){if(wn.isOpen())return;if(document.pointerLockElement)document.exitPointerLock();if(Yi==="mon"||Yi==="st:games")return wn.open("games");if(Yi&&Yi.startsWith("st:"))return wn.open(Yi.slice(3));if(Tn)wn.open(Tn.k)}function vg(e){if(e===Yi)return;Yi=e,["pc","hp","kb","ms"].forEach((t)=>document.body.classList.toggle(t,t===e))}Ai.traverse((e)=>{if(e.isPointLight)e.intensity*=0.56});var aM=new Lc,yf=0;function Zg(){let e=Math.min(aM.getDelta(),0.05);yf+=e;let t=wn.isOpen();if(Yn&&!t){let r=(En.ArrowLeft?1:0)-(En.ArrowRight?1:0);Ve.yaw+=r*1.9*e;let s=(En.KeyW||En.ArrowUp?1:0)-(En.KeyS||En.ArrowDown?1:0)-Lo.y,o=(En.KeyD?1:0)-(En.KeyA?1:0)+Lo.x,a=En.ShiftLeft?5.2:3.2,l=(-Math.sin(Ve.yaw)*s+Math.cos(Ve.yaw)*o)*a,c=(-Math.cos(Ve.yaw)*s-Math.sin(Ve.yaw)*o)*a,h=Math.hypot(l,c);if(h>a)l*=a/h,c*=a/h;let u=1-Math.exp(-10*e);Ve.vx+=(l-Ve.vx)*u,Ve.vz+=(c-Ve.vz)*u;let{x:f,z:m}=Ve;Ve.x+=Ve.vx*e,Ve.z+=Ve.vz*e,Xg(f,m)}if(!window.__camLock)$i.position.set(Ve.x,eM,Ve.z),$i.rotation.order="YXZ",$i.rotation.set(Ve.pitch,Ve.yaw,0);if(Yn&&!t){Ef.setFromCamera(new W(0,0),$i);let r=Ef.intersectObjects(Sf.flatMap((o)=>o.hits),!1),s=null;for(let o of r){let a=Wg.get(o.object);if(a&&o.distance<=a.far){s=a.id;break}}vg(s)}else vg(null);let i=null,n=9;if(Jc.forEach((r)=>{let s=Math.hypot(Ve.x-r.x,Ve.z-r.z)/r.r;if(s<1&&s<n)n=s,i=r.k}),Yi&&Yi.startsWith("st:"))i=Yi.slice(3);else if(Yi==="mon")i="games";if(oM(i&&Yn&&!t?i:t?Tn&&Tn.k:null),Sf.forEach((r)=>{if(r.outline)r.mat.opacity=Yi===r.id?1:0}),Jc.forEach((r)=>{if(r.ring)r.ring.material.opacity=Tn&&Tn.k===r.k?0.95:0.35+0.15*Math.sin(yf*2)}),Cg.forEach((r)=>r(yf)),Nr)Nr.render();else Fr.render(Ai,$i);requestAnimationFrame(Zg)}requestAnimationFrame(Zg);window.__scene=Ai;window.__fun={go(e,t,i=0,n=0){Ve.x=e,Ve.z=t,Ve.yaw=i,Ve.pitch=n,Ve.vx=Ve.vz=0},pos(){return[Ve.x,Ve.z]},blocked(e,t){if(!ul(e,t))return!0;for(let[i,n,r]of cr)if(Math.hypot(e-i,t-n)<r+0.28)return!0;return!1},sim(e,t,i,n,r=400){Ve.x=e,Ve.z=t;for(let s=0;s<r;s++){let{x:o,z:a}=Ve;Ve.x+=Math.sign(i-Ve.x)*Math.min(0.05,Math.abs(i-Ve.x)),Ve.z+=Math.sign(n-Ve.z)*Math.min(0.05,Math.abs(n-Ve.z)),Xg(o,a)}return[+Ve.x.toFixed(2),+Ve.z.toFixed(2)]},start(){Yn=!0,An("#start").classList.remove("on"),An("#hud").classList.add("on")},interact:ih,view(e,t,i,n,r,s,o=68,a=!0){window.__camLock=!0,qi.visible=a,$i.fov=o,$i.updateProjectionMatrix(),$i.position.set(e,t,i),$i.up.set(0,1,0),$i.lookAt(n,r,s)},free(){window.__camLock=!1,qi.visible=!0}};
