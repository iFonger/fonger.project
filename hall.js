var cm=Object.defineProperty;var hm=(e)=>e;function um(e,t){this[e]=hm.bind(null,t)}var fm=(e,t)=>{for(var i in t)cm(e,i,{get:t[i],enumerable:!0,configurable:!0,set:um.bind(t,i)})};var kr={};fm(kr,{ArcCurve:()=>$l,CatmullRomCurve3:()=>rc,CubicBezierCurve:()=>Co,CubicBezierCurve3:()=>sc,EllipseCurve:()=>yn,LineCurve:()=>Po,LineCurve3:()=>Io,QuadraticBezierCurve:()=>Lo,QuadraticBezierCurve3:()=>Do,SplineCurve:()=>No});var ws="187";var Fc=0,_l=1,Bc=2;var Ln=1,Oc=2,$r=3,Hi=0,Lt=1,bi=2,Wi=0,Dr=1,jr=2,vl=3,yl=4,zc=5;var Nr=100,Gc=101,Vc=102,kc=103,Hc=104,Wc=200,Xc=201,qc=202,Yc=203,ta=204,ia=205,Zc=206,Jc=207,Kc=208,Qc=209,$c=210,jc=211,eh=212,th=213,ih=214,As=0,Rs=1,Cs=2,Ur=3,Ps=4,Is=5,Ls=6,Ds=7,en=0,rh=1,nh=2,Ni=0,Dn=1,Nn=2,Un=3,Fr=4,Fn=5,Bn=6,On=7;var ra=300,Xi=301,yr=302,Ns=303,Us=304,zn=1000,ui=1001,Gn=1002,It=1003,Ml=1004;var Vn=1005;var Nt=1006,Fs=1007;var Ti=1008;var Ht=1009,na=1010,sa=1011,Mr=1012,kn=1013,Kt=1014,Wt=1015,wt=1016,Hn=1017,Wn=1018,tr=1020,oa=35902,aa=35899,la=1021,ca=1022,si=1023,Pi=1026,Ui=1027,Xn=1028,tn=1029,Fi=1030,qn=1031;var Yn=1033,Zn=33776,Jn=33777,Kn=33778,Qn=33779,Bs=35840,Os=35841,zs=35842,Gs=35843,Vs=36196,ks=37492,Hs=37496,Ws=37488,Xs=37489,rn=37490,qs=37491,Ys=37808,Zs=37809,Js=37810,Ks=37811,Qs=37812,$s=37813,js=37814,eo=37815,to=37816,io=37817,ro=37818,no=37819,so=37820,oo=37821,ao=36492,lo=36494,co=36495,ho=36283,uo=36284,nn=36285,fo=36286;var sn=2300,ha=2301,ua=2302,Sl=2303,fa=2400,da=2401,pa=2402;var sh=3200;var ir=0,oh=1,qi="",Ot="srgb",on="srgb-linear",an="linear",ut="srgb";var ma=7680;var ah=519,lh=512,ch=513,hh=514,ga=515,uh=516,fh=517,xa=518,_a=519,va=35044;var bl="300 es",oi=2000,fr=2001;function ph(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function Tl(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function ln(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function El(){let e=ln("canvas");return e.style.display="block",e}var dh={},$n=null;function po(...e){let t="THREE."+e.shift();if($n)$n("log",t,...e);else console.log(t,...e)}function mh(e){let t=e[0];if(typeof t==="string"&&t.startsWith("TSL:")){let i=e[1];if(i&&i.isStackTrace)e[0]+=" "+i.getLocation();else e[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return e}function Se(...e){e=mh(e);let t="THREE."+e.shift();if($n)$n("warn",t,...e);else{let i=e[0];if(i&&i.isStackTrace)console.warn(i.getError(t));else console.warn(t,...e)}}function Fe(...e){e=mh(e);let t="THREE."+e.shift();if($n)$n("error",t,...e);else{let i=e[0];if(i&&i.isStackTrace)console.error(i.getError(t));else console.error(t,...e)}}function Yi(...e){let t=e.join(" ");if(t in dh)return;dh[t]=!0,Se(...e)}function gh(e,t,i){return new Promise(function(r,n){function s(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:n();break;case e.TIMEOUT_EXPIRED:setTimeout(s,i);break;default:r()}}setTimeout(s,i)})}var xh={[As]:As,[Cs]:Ls,[Ps]:Ps,[Ur]:Is,[Rs]:Rs,[Ls]:Cs,[Ds]:Ds,[Is]:Ur};class Qt{addEventListener(e,t){if(this._listeners===void 0)this._listeners={};let i=this._listeners;if(i[e]===void 0)i[e]=[];if(i[e].indexOf(t)===-1)i[e].push(t)}hasEventListener(e,t){let i=this._listeners;if(i===void 0)return!1;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let r=i[e];if(r!==void 0){let n=r.indexOf(t);if(n!==-1)r.splice(n,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let r=i.slice(0);for(let n=0,s=r.length;n<s;n++)r[n].call(this,e);e.target=null}}}var gi=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var jn=Math.PI/180,cn=180/Math.PI;function xi(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(gi[e&255]+gi[e>>8&255]+gi[e>>16&255]+gi[e>>24&255]+"-"+gi[t&255]+gi[t>>8&255]+"-"+gi[t>>16&15|64]+gi[t>>24&255]+"-"+gi[i&63|128]+gi[i>>8&255]+"-"+gi[i>>16&255]+gi[i>>24&255]+gi[r&255]+gi[r>>8&255]+gi[r>>16&255]+gi[r>>24&255]).toLowerCase()}function $e(e,t,i){return Math.max(t,Math.min(i,e))}function _h(e,t){return(e%t+t)%t}function ya(e,t,i){return(1-i)*e+i*t}function vh(e){return Math.pow(2,Math.floor(Math.log(e)/Math.LN2))}function mo(e){switch(e.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function wl(e,t){if(t.constructor===Float32Array)return e;let i=mo(t);if(i===void 0)throw Error("THREE.MathUtils: Invalid component type.");return Math.max(e/i,-1)}function Al(e,t){if(t.constructor===Float32Array)return e;let i=mo(t);if(i===void 0)throw Error("THREE.MathUtils: Invalid component type.");return Math.round(e*i)}class K{static{this.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar($e(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos($e(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),r=Math.sin(t),n=this.x-e.x,s=this.y-e.y;return this.x=n*i-s*r+e.x,this.y=n*r+s*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ai{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,n,s,o){let a=i[r+0],l=i[r+1],c=i[r+2],f=i[r+3],u=n[s+0],h=n[s+1],d=n[s+2],x=n[s+3];if(f!==x||a!==u||l!==h||c!==d){let M=a*u+l*h+c*d+f*x;if(M<0)u=-u,h=-h,d=-d,x=-x,M=-M;let p=1-o;if(M<0.9995){let m=Math.acos(M),b=Math.sin(m);p=Math.sin(p*m)/b,o=Math.sin(o*m)/b,a=a*p+u*o,l=l*p+h*o,c=c*p+d*o,f=f*p+x*o}else{a=a*p+u*o,l=l*p+h*o,c=c*p+d*o,f=f*p+x*o;let m=1/Math.sqrt(a*a+l*l+c*c+f*f);a*=m,l*=m,c*=m,f*=m}}e[t]=a,e[t+1]=l,e[t+2]=c,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,n,s){let o=i[r],a=i[r+1],l=i[r+2],c=i[r+3],f=n[s],u=n[s+1],h=n[s+2],d=n[s+3];return e[t]=o*d+c*f+a*h-l*u,e[t+1]=a*d+c*u+l*f-o*h,e[t+2]=l*d+c*h+o*u-a*f,e[t+3]=c*d-o*f-a*u-l*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let{_x:i,_y:r,_z:n,_order:s}=e,{cos:o,sin:a}=Math,l=o(i/2),c=o(r/2),f=o(n/2),u=a(i/2),h=a(r/2),d=a(n/2);switch(s){case"XYZ":this._x=u*c*f+l*h*d,this._y=l*h*f-u*c*d,this._z=l*c*d+u*h*f,this._w=l*c*f-u*h*d;break;case"YXZ":this._x=u*c*f+l*h*d,this._y=l*h*f-u*c*d,this._z=l*c*d-u*h*f,this._w=l*c*f+u*h*d;break;case"ZXY":this._x=u*c*f-l*h*d,this._y=l*h*f+u*c*d,this._z=l*c*d+u*h*f,this._w=l*c*f-u*h*d;break;case"ZYX":this._x=u*c*f-l*h*d,this._y=l*h*f+u*c*d,this._z=l*c*d-u*h*f,this._w=l*c*f+u*h*d;break;case"YZX":this._x=u*c*f+l*h*d,this._y=l*h*f+u*c*d,this._z=l*c*d-u*h*f,this._w=l*c*f-u*h*d;break;case"XZY":this._x=u*c*f-l*h*d,this._y=l*h*f-u*c*d,this._z=l*c*d+u*h*f,this._w=l*c*f+u*h*d;break;default:Se("Quaternion: .setFromEuler() encountered an unknown order: "+s)}if(t===!0)this._onChangeCallback();return this}setFromAxisAngle(e,t){let i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],r=t[4],n=t[8],s=t[1],o=t[5],a=t[9],l=t[2],c=t[6],f=t[10],u=i+o+f;if(u>0){let h=0.5/Math.sqrt(u+1);this._w=0.25/h,this._x=(c-a)*h,this._y=(n-l)*h,this._z=(s-r)*h}else if(i>o&&i>f){let h=2*Math.sqrt(1+i-o-f);this._w=(c-a)/h,this._x=0.25*h,this._y=(r+s)/h,this._z=(n+l)/h}else if(o>f){let h=2*Math.sqrt(1+o-i-f);this._w=(n-l)/h,this._x=(r+s)/h,this._y=0.25*h,this._z=(a+c)/h}else{let h=2*Math.sqrt(1+f-i-o);this._w=(s-r)/h,this._x=(n+l)/h,this._y=(a+c)/h,this._z=0.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;if(i<0.00000001)if(i=0,Math.abs(e.x)>Math.abs(e.z))this._x=-e.y,this._y=e.x,this._z=0,this._w=i;else this._x=0,this._y=-e.z,this._z=e.y,this._w=i;else this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i;return this.normalize()}angleTo(e){return 2*Math.acos(Math.abs($e(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();if(e===0)this._x=0,this._y=0,this._z=0,this._w=1;else e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e;return this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let{_x:i,_y:r,_z:n,_w:s}=e,{_x:o,_y:a,_z:l,_w:c}=t;return this._x=i*c+s*o+r*l-n*a,this._y=r*c+s*a+n*o-i*l,this._z=n*c+s*l+i*a-r*o,this._w=s*c-i*o-r*a-n*l,this._onChangeCallback(),this}slerp(e,t){let{_x:i,_y:r,_z:n,_w:s}=e,o=this.dot(e);if(o<0)i=-i,r=-r,n=-n,s=-s,o=-o;let a=1-t;if(o<0.9995){let l=Math.acos(o),c=Math.sin(l);a=Math.sin(a*l)/c,t=Math.sin(t*l)/c,this._x=this._x*a+i*t,this._y=this._y*a+r*t,this._z=this._z*a+n*t,this._w=this._w*a+s*t,this._onChangeCallback()}else this._x=this._x*a+i*t,this._y=this._y*a+r*t,this._z=this._z*a+n*t,this._w=this._w*a+s*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),n=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),n*Math.sin(t),n*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class w{static{this.prototype.isVector3=!0}constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){if(i===void 0)i=this.z;return this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(yh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(yh.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,r=this.z,n=e.elements;return this.x=n[0]*t+n[3]*i+n[6]*r,this.y=n[1]*t+n[4]*i+n[7]*r,this.z=n[2]*t+n[5]*i+n[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,n=e.elements,s=1/(n[3]*t+n[7]*i+n[11]*r+n[15]);return this.x=(n[0]*t+n[4]*i+n[8]*r+n[12])*s,this.y=(n[1]*t+n[5]*i+n[9]*r+n[13])*s,this.z=(n[2]*t+n[6]*i+n[10]*r+n[14])*s,this}applyQuaternion(e){let t=this.x,i=this.y,r=this.z,{x:n,y:s,z:o,w:a}=e,l=2*(s*r-o*i),c=2*(o*t-n*r),f=2*(n*i-s*t);return this.x=t+a*l+s*f-o*c,this.y=i+a*c+o*l-n*f,this.z=r+a*f+n*c-s*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,r=this.z,n=e.elements;return this.x=n[0]*t+n[4]*i+n[8]*r,this.y=n[1]*t+n[5]*i+n[9]*r,this.z=n[2]*t+n[6]*i+n[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this.z=$e(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this.z=$e(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar($e(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let{x:i,y:r,z:n}=e,{x:s,y:o,z:a}=t;return this.x=r*a-n*o,this.y=n*s-i*a,this.z=i*o-r*s,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Rl.copy(this).projectOnVector(e),this.sub(Rl)}reflect(e){return this.sub(Rl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos($e(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}var Rl=new w,yh=new ai;class We{static{this.prototype.isMatrix3=!0}constructor(e,t,i,r,n,s,o,a,l){if(this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0)this.set(e,t,i,r,n,s,o,a,l)}set(e,t,i,r,n,s,o,a,l){let c=this.elements;return c[0]=e,c[1]=r,c[2]=o,c[3]=t,c[4]=n,c[5]=a,c[6]=i,c[7]=s,c[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,n=this.elements,s=i[0],o=i[3],a=i[6],l=i[1],c=i[4],f=i[7],u=i[2],h=i[5],d=i[8],x=r[0],M=r[3],p=r[6],m=r[1],b=r[4],T=r[7],S=r[2],A=r[5],C=r[8];return n[0]=s*x+o*m+a*S,n[3]=s*M+o*b+a*A,n[6]=s*p+o*T+a*C,n[1]=l*x+c*m+f*S,n[4]=l*M+c*b+f*A,n[7]=l*p+c*T+f*C,n[2]=u*x+h*m+d*S,n[5]=u*M+h*b+d*A,n[8]=u*p+h*T+d*C,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],r=e[2],n=e[3],s=e[4],o=e[5],a=e[6],l=e[7],c=e[8];return t*s*c-t*o*l-i*n*c+i*o*a+r*n*l-r*s*a}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],n=e[3],s=e[4],o=e[5],a=e[6],l=e[7],c=e[8],f=c*s-o*l,u=o*a-c*n,h=l*n-s*a,d=t*f+i*u+r*h;if(d===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/d;return e[0]=f*x,e[1]=(r*l-c*i)*x,e[2]=(o*i-r*s)*x,e[3]=u*x,e[4]=(c*t-r*a)*x,e[5]=(r*n-o*t)*x,e[6]=h*x,e[7]=(i*a-l*t)*x,e[8]=(s*t-i*n)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,n,s,o){let a=Math.cos(n),l=Math.sin(n);return this.set(i*a,i*l,-i*(a*s+l*o)+s+e,-r*l,r*a,-r*(-l*s+a*o)+o+t,0,0,1),this}scale(e,t){return Yi("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Cl.makeScale(e,t)),this}rotate(e){return Yi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Cl.makeRotation(-e)),this}translate(e,t){return Yi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Cl.makeTranslation(e,t)),this}makeTranslation(e,t){if(e.isVector2)this.set(1,0,e.x,0,1,e.y,0,0,1);else this.set(1,0,e,0,1,t,0,0,1);return this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}var Cl=new We;var Mh=new We().set(0.4123908,0.3575843,0.1804808,0.212639,0.7151687,0.0721923,0.0193308,0.1191948,0.9505322),Sh=new We().set(3.2409699,-1.5373832,-0.4986108,-0.9692436,1.8759675,0.0415551,0.0556301,-0.203977,1.0569715);function dm(){let e={enabled:!0,workingColorSpace:on,spaces:{},convert:function(n,s,o){if(this.enabled===!1||s===o||!s||!o)return n;if(this.spaces[s].transfer===ut)n.r=rr(n.r),n.g=rr(n.g),n.b=rr(n.b);if(this.spaces[s].primaries!==this.spaces[o].primaries)n.applyMatrix3(this.spaces[s].toXYZ),n.applyMatrix3(this.spaces[o].fromXYZ);if(this.spaces[o].transfer===ut)n.r=hn(n.r),n.g=hn(n.g),n.b=hn(n.b);return n},workingToColorSpace:function(n,s){return this.convert(n,this.workingColorSpace,s)},colorSpaceToWorking:function(n,s){return this.convert(n,s,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){if(n===qi)return an;return this.spaces[n].transfer},getToneMappingMode:function(n){return this.spaces[n].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(n,s=this.workingColorSpace){return n.fromArray(this.spaces[s].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,s,o){return n.copy(this.spaces[o].fromXYZ).multiply(this.spaces[s].toXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}},t=[0.64,0.33,0.3,0.6,0.15,0.06],i=[0.2126,0.7152,0.0722],r=[0.3127,0.329];return e.define({[on]:{primaries:t,whitePoint:r,transfer:an,toXYZ:Mh,fromXYZ:Sh,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Ot},outputColorSpaceConfig:{drawingBufferColorSpace:Ot}},[Ot]:{primaries:t,whitePoint:r,transfer:ut,toXYZ:Mh,fromXYZ:Sh,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Ot}}}),e}var tt=dm();function rr(e){return e<0.04045?e*0.0773993808:Math.pow(e*0.9478672986+0.0521327014,2.4)}function hn(e){return e<0.0031308?e*12.92:1.055*Math.pow(e,0.41666)-0.055}var es;class Ma{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src))return e.src;if(typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{if(es===void 0)es=ln("canvas");es.width=e.width,es.height=e.height;let r=es.getContext("2d");if(e instanceof ImageData)r.putImageData(e,0,0);else r.drawImage(e,0,0,e.width,e.height);i=es}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=ln("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let r=i.getImageData(0,0,e.width,e.height),n=r.data;for(let s=0;s<n.length;s++)n[s]=rr(n[s]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)if(t instanceof Uint8Array||t instanceof Uint8ClampedArray)t[i]=Math.floor(rr(t[i]/255)*255);else t[i]=rr(t[i]);return{data:t,width:e.width,height:e.height}}else return Se("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}var pm=0;class dr{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:pm++}),this.uuid=xi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;if(typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement)e.set(t.videoWidth,t.videoHeight,0);else if(typeof VideoFrame<"u"&&t instanceof VideoFrame)e.set(t.displayWidth,t.displayHeight,0);else if(t!==null)e.set(t.width||0,t.height||0,t.depth||0);else e.set(0,0,0);return e}set needsUpdate(e){if(e===!0)this.version++}toJSON(e){let t=e===void 0||typeof e==="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let n;if(Array.isArray(r)){n=[];for(let s=0,o=r.length;s<o;s++)if(r[s].isDataTexture)n.push(Pl(r[s].image));else n.push(Pl(r[s]))}else n=Pl(r);i.url=n}if(!t)e.images[this.uuid]=i;return i}}function Pl(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap)return Ma.getDataURL(e);else if(e.data)return{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name};else return Se("Texture: Unable to serialize Texture."),{}}var mm=0,Il=new w;class vt extends Qt{constructor(e=vt.DEFAULT_IMAGE,t=vt.DEFAULT_MAPPING,i=ui,r=ui,n=Nt,s=Ti,o=si,a=Ht,l=vt.DEFAULT_ANISOTROPY,c=qi){super();this.isTexture=!0,Object.defineProperty(this,"id",{value:mm++}),this.uuid=xi(),this.name="",this.source=new dr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=n,this.minFilter=s,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=a,this.offset=new K(0,0),this.repeat=new K(1,1),this.center=new K(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new We,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=e&&e.depth&&e.depth>1?!0:!1,this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Il).x}get height(){return this.source.getSize(Il).y}get depth(){return this.source.getSize(Il).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){Se(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){Se(`Texture.setValues(): property '${t}' does not exist.`);continue}if(r&&i&&(r.isVector2&&i.isVector2))r.copy(i);else if(r&&i&&(r.isVector3&&i.isVector3))r.copy(i);else if(r&&i&&(r.isMatrix3&&i.isMatrix3))r.copy(i);else this[t]=i}}toJSON(e){let t=e===void 0||typeof e==="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(Object.keys(this.userData).length>0)i.userData=this.userData;if(!t)e.textures[this.uuid]=i;return i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ra)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case zn:e.x=e.x-Math.floor(e.x);break;case ui:e.x=e.x<0?0:1;break;case Gn:if(Math.abs(Math.floor(e.x)%2)===1)e.x=Math.ceil(e.x)-e.x;else e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case zn:e.y=e.y-Math.floor(e.y);break;case ui:e.y=e.y<0?0:1;break;case Gn:if(Math.abs(Math.floor(e.y)%2)===1)e.y=Math.ceil(e.y)-e.y;else e.y=e.y-Math.floor(e.y);break}if(this.flipY)e.y=1-e.y;return e}set needsUpdate(e){if(e===!0)this.version++,this.source.needsUpdate=!0}set needsPMREMUpdate(e){if(e===!0)this.pmremVersion++}}vt.DEFAULT_IMAGE=null;vt.DEFAULT_MAPPING=ra;vt.DEFAULT_ANISOTROPY=1;class mt{static{this.prototype.isVector4=!0}constructor(e=0,t=0,i=0,r=1){this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,n=this.w,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r+s[12]*n,this.y=s[1]*t+s[5]*i+s[9]*r+s[13]*n,this.z=s[2]*t+s[6]*i+s[10]*r+s[14]*n,this.w=s[3]*t+s[7]*i+s[11]*r+s[15]*n,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);if(t<0.0001)this.x=1,this.y=0,this.z=0;else this.x=e.x/t,this.y=e.y/t,this.z=e.z/t;return this}setAxisAngleFromRotationMatrix(e){let t,i,r,n,s=0.01,o=0.1,a=e.elements,l=a[0],c=a[4],f=a[8],u=a[1],h=a[5],d=a[9],x=a[2],M=a[6],p=a[10];if(Math.abs(c-u)<0.01&&Math.abs(f-x)<0.01&&Math.abs(d-M)<0.01){if(Math.abs(c+u)<0.1&&Math.abs(f+x)<0.1&&Math.abs(d+M)<0.1&&Math.abs(l+h+p-3)<0.1)return this.set(1,0,0,0),this;t=Math.PI;let b=(l+1)/2,T=(h+1)/2,S=(p+1)/2,A=(c+u)/4,C=(f+x)/4,g=(d+M)/4;if(b>T&&b>S)if(b<0.01)i=0,r=0.707106781,n=0.707106781;else i=Math.sqrt(b),r=A/i,n=C/i;else if(T>S)if(T<0.01)i=0.707106781,r=0,n=0.707106781;else r=Math.sqrt(T),i=A/r,n=g/r;else if(S<0.01)i=0.707106781,r=0.707106781,n=0;else n=Math.sqrt(S),i=C/n,r=g/n;return this.set(i,r,n,t),this}let m=Math.sqrt((M-d)*(M-d)+(f-x)*(f-x)+(u-c)*(u-c));if(Math.abs(m)<0.001)m=1;return this.x=(M-d)/m,this.y=(f-x)/m,this.z=(u-c)/m,this.w=Math.acos((l+h+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this.z=$e(this.z,e.z,t.z),this.w=$e(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this.z=$e(this.z,e,t),this.w=$e(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar($e(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class go extends Qt{constructor(e=1,t=1,i={}){super();i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Nt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new mt(0,0,e,t),this.scissorTest=!1,this.viewport=new mt(0,0,e,t),this.textures=[];let r=i.count;for(let n=0;n<r;n++)this.textures[n]=new vt({width:e,height:t,depth:i.depth}),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Nt,generateMipmaps:!1,flipY:!1,internalFormat:null};if(e.mapping!==void 0)t.mapping=e.mapping;if(e.wrapS!==void 0)t.wrapS=e.wrapS;if(e.wrapT!==void 0)t.wrapT=e.wrapT;if(e.wrapR!==void 0)t.wrapR=e.wrapR;if(e.magFilter!==void 0)t.magFilter=e.magFilter;if(e.minFilter!==void 0)t.minFilter=e.minFilter;if(e.format!==void 0)t.format=e.format;if(e.type!==void 0)t.type=e.type;if(e.anisotropy!==void 0)t.anisotropy=e.anisotropy;if(e.colorSpace!==void 0)t.colorSpace=e.colorSpace;if(e.flipY!==void 0)t.flipY=e.flipY;if(e.generateMipmaps!==void 0)t.generateMipmaps=e.generateMipmaps;if(e.mipmapsAutoUpdate!==void 0)t.mipmapsAutoUpdate=e.mipmapsAutoUpdate;if(e.internalFormat!==void 0)t.internalFormat=e.internalFormat;for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){if(this._depthTexture!==null&&this._depthTexture.renderTarget===this)this._depthTexture.renderTarget=null;if(e!==null&&e.renderTarget===null)e.renderTarget=this;this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,n=this.textures.length;r<n;r++)if(this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0)this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let r=Object.assign({},e.textures[t].image);this.textures[t].source=new dr(r)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Tt extends go{constructor(e=1,t=1,i={}){super(e,t,i);this.isWebGLRenderTarget=!0}}class un extends vt{constructor(e=null,t=1,i=1,r=1){super(null);this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=It,this.minFilter=It,this.wrapR=ui,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class ts extends vt{constructor(e=null,t=1,i=1,r=1){super(null);this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=It,this.minFilter=It,this.wrapR=ui,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}class Xe{static{this.prototype.isMatrix4=!0}constructor(e,t,i,r,n,s,o,a,l,c,f,u,h,d,x,M){if(this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0)this.set(e,t,i,r,n,s,o,a,l,c,f,u,h,d,x,M)}set(e,t,i,r,n,s,o,a,l,c,f,u,h,d,x,M){let p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=r,p[1]=n,p[5]=s,p[9]=o,p[13]=a,p[2]=l,p[6]=c,p[10]=f,p[14]=u,p[3]=h,p[7]=d,p[11]=x,p[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Xe().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){if(this.determinantAffine()===0)return e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this;return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,i=e.elements,r=1/is.setFromMatrixColumn(e,0).length(),n=1/is.setFromMatrixColumn(e,1).length(),s=1/is.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*n,t[5]=i[5]*n,t[6]=i[6]*n,t[7]=0,t[8]=i[8]*s,t[9]=i[9]*s,t[10]=i[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,{x:i,y:r,z:n}=e,s=Math.cos(i),o=Math.sin(i),a=Math.cos(r),l=Math.sin(r),c=Math.cos(n),f=Math.sin(n);if(e.order==="XYZ"){let u=s*c,h=s*f,d=o*c,x=o*f;t[0]=a*c,t[4]=-a*f,t[8]=l,t[1]=h+d*l,t[5]=u-x*l,t[9]=-o*a,t[2]=x-u*l,t[6]=d+h*l,t[10]=s*a}else if(e.order==="YXZ"){let u=a*c,h=a*f,d=l*c,x=l*f;t[0]=u+x*o,t[4]=d*o-h,t[8]=s*l,t[1]=s*f,t[5]=s*c,t[9]=-o,t[2]=h*o-d,t[6]=x+u*o,t[10]=s*a}else if(e.order==="ZXY"){let u=a*c,h=a*f,d=l*c,x=l*f;t[0]=u-x*o,t[4]=-s*f,t[8]=d+h*o,t[1]=h+d*o,t[5]=s*c,t[9]=x-u*o,t[2]=-s*l,t[6]=o,t[10]=s*a}else if(e.order==="ZYX"){let u=s*c,h=s*f,d=o*c,x=o*f;t[0]=a*c,t[4]=d*l-h,t[8]=u*l+x,t[1]=a*f,t[5]=x*l+u,t[9]=h*l-d,t[2]=-l,t[6]=o*a,t[10]=s*a}else if(e.order==="YZX"){let u=s*a,h=s*l,d=o*a,x=o*l;t[0]=a*c,t[4]=x-u*f,t[8]=d*f+h,t[1]=f,t[5]=s*c,t[9]=-o*c,t[2]=-l*c,t[6]=h*f+d,t[10]=u-x*f}else if(e.order==="XZY"){let u=s*a,h=s*l,d=o*a,x=o*l;t[0]=a*c,t[4]=-f,t[8]=l*c,t[1]=u*f+x,t[5]=s*c,t[9]=h*f-d,t[2]=d*f-h,t[6]=o*c,t[10]=x*f+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(gm,e,xm)}lookAt(e,t,i){let r=this.elements;if(Bi.subVectors(e,t),Bi.lengthSq()===0)Bi.z=1;if(Bi.normalize(),Br.crossVectors(i,Bi),Br.lengthSq()===0){if(Math.abs(i.z)===1)Bi.x+=0.0001;else Bi.z+=0.0001;Bi.normalize(),Br.crossVectors(i,Bi)}return Br.normalize(),Sa.crossVectors(Bi,Br),r[0]=Br.x,r[4]=Sa.x,r[8]=Bi.x,r[1]=Br.y,r[5]=Sa.y,r[9]=Bi.y,r[2]=Br.z,r[6]=Sa.z,r[10]=Bi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,n=this.elements,s=i[0],o=i[4],a=i[8],l=i[12],c=i[1],f=i[5],u=i[9],h=i[13],d=i[2],x=i[6],M=i[10],p=i[14],m=i[3],b=i[7],T=i[11],S=i[15],A=r[0],C=r[4],g=r[8],y=r[12],P=r[1],k=r[5],I=r[9],H=r[13],re=r[2],R=r[6],J=r[10],te=r[14],G=r[3],pe=r[7],Q=r[11],ee=r[15];return n[0]=s*A+o*P+a*re+l*G,n[4]=s*C+o*k+a*R+l*pe,n[8]=s*g+o*I+a*J+l*Q,n[12]=s*y+o*H+a*te+l*ee,n[1]=c*A+f*P+u*re+h*G,n[5]=c*C+f*k+u*R+h*pe,n[9]=c*g+f*I+u*J+h*Q,n[13]=c*y+f*H+u*te+h*ee,n[2]=d*A+x*P+M*re+p*G,n[6]=d*C+x*k+M*R+p*pe,n[10]=d*g+x*I+M*J+p*Q,n[14]=d*y+x*H+M*te+p*ee,n[3]=m*A+b*P+T*re+S*G,n[7]=m*C+b*k+T*R+S*pe,n[11]=m*g+b*I+T*J+S*Q,n[15]=m*y+b*H+T*te+S*ee,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],r=e[8],n=e[12],s=e[1],o=e[5],a=e[9],l=e[13],c=e[2],f=e[6],u=e[10],h=e[14],d=e[3],x=e[7],M=e[11],p=e[15],m=a*h-l*u,b=o*h-l*f,T=o*u-a*f,S=s*h-l*c,A=s*u-a*c,C=s*f-o*c;return t*(x*m-M*b+p*T)-i*(d*m-M*S+p*A)+r*(d*b-x*S+p*C)-n*(d*T-x*A+M*C)}determinantAffine(){let e=this.elements,t=e[0],i=e[4],r=e[8],n=e[1],s=e[5],o=e[9],a=e[2],l=e[6],c=e[10];return t*(s*c-o*l)-i*(n*c-o*a)+r*(n*l-s*a)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let r=this.elements;if(e.isVector3)r[12]=e.x,r[13]=e.y,r[14]=e.z;else r[12]=e,r[13]=t,r[14]=i;return this}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],n=e[3],s=e[4],o=e[5],a=e[6],l=e[7],c=e[8],f=e[9],u=e[10],h=e[11],d=e[12],x=e[13],M=e[14],p=e[15],m=t*o-i*s,b=t*a-r*s,T=t*l-n*s,S=i*a-r*o,A=i*l-n*o,C=r*l-n*a,g=c*x-f*d,y=c*M-u*d,P=c*p-h*d,k=f*M-u*x,I=f*p-h*x,H=u*p-h*M,re=m*H-b*I+T*k+S*P-A*y+C*g;if(re===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let R=1/re;return e[0]=(o*H-a*I+l*k)*R,e[1]=(r*I-i*H-n*k)*R,e[2]=(x*C-M*A+p*S)*R,e[3]=(u*A-f*C-h*S)*R,e[4]=(a*P-s*H-l*y)*R,e[5]=(t*H-r*P+n*y)*R,e[6]=(M*T-d*C-p*b)*R,e[7]=(c*C-u*T+h*b)*R,e[8]=(s*I-o*P+l*g)*R,e[9]=(i*P-t*I-n*g)*R,e[10]=(d*A-x*T+p*m)*R,e[11]=(f*T-c*A-h*m)*R,e[12]=(o*y-s*k-a*g)*R,e[13]=(t*k-i*y+r*g)*R,e[14]=(x*b-d*S-M*m)*R,e[15]=(c*S-f*b+u*m)*R,this}scale(e){let t=this.elements,{x:i,y:r,z:n}=e;return t[0]*=i,t[4]*=r,t[8]*=n,t[1]*=i,t[5]*=r,t[9]*=n,t[2]*=i,t[6]*=r,t[10]*=n,t[3]*=i,t[7]*=r,t[11]*=n,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){if(e.isVector3)this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1);else this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1);return this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),r=Math.sin(t),n=1-i,{x:s,y:o,z:a}=e,l=n*s,c=n*o;return this.set(l*s+i,l*o-r*a,l*a+r*o,0,l*o+r*a,c*o+i,c*a-r*s,0,l*a-r*o,c*a+r*s,n*a*a+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,n,s){return this.set(1,i,n,0,e,1,s,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){let r=this.elements,{_x:n,_y:s,_z:o,_w:a}=t,l=n+n,c=s+s,f=o+o,u=n*l,h=n*c,d=n*f,x=s*c,M=s*f,p=o*f,m=a*l,b=a*c,T=a*f,{x:S,y:A,z:C}=i;return r[0]=(1-(x+p))*S,r[1]=(h+T)*S,r[2]=(d-b)*S,r[3]=0,r[4]=(h-T)*A,r[5]=(1-(u+p))*A,r[6]=(M+m)*A,r[7]=0,r[8]=(d+b)*C,r[9]=(M-m)*C,r[10]=(1-(u+x))*C,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let n=this.determinantAffine();if(n===0)return i.set(1,1,1),t.identity(),this;let s=is.set(r[0],r[1],r[2]).length(),o=is.set(r[4],r[5],r[6]).length(),a=is.set(r[8],r[9],r[10]).length();if(n<0)s=-s;nr.copy(this);let l=1/s,c=1/o,f=1/a;return nr.elements[0]*=l,nr.elements[1]*=l,nr.elements[2]*=l,nr.elements[4]*=c,nr.elements[5]*=c,nr.elements[6]*=c,nr.elements[8]*=f,nr.elements[9]*=f,nr.elements[10]*=f,t.setFromRotationMatrix(nr),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,n,s,o=oi,a=!1){let l=this.elements,c=2*n/(t-e),f=2*n/(i-r),u=(t+e)/(t-e),h=(i+r)/(i-r),d,x;if(a)d=n/(s-n),x=s*n/(s-n);else if(o===oi)d=-(s+n)/(s-n),x=-2*s*n/(s-n);else if(o===fr)d=-s/(s-n),x=-s*n/(s-n);else throw Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=f,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,n,s,o=oi,a=!1){let l=this.elements,c=2/(t-e),f=2/(i-r),u=-(t+e)/(t-e),h=-(i+r)/(i-r),d,x;if(a)d=1/(s-n),x=s/(s-n);else if(o===oi)d=-2/(s-n),x=-(s+n)/(s-n);else if(o===fr)d=-1/(s-n),x=-n/(s-n);else throw Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=0,l[12]=u,l[1]=0,l[5]=f,l[9]=0,l[13]=h,l[2]=0,l[6]=0,l[10]=d,l[14]=x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}var is=new w,nr=new Xe,gm=new w(0,0,0),xm=new w(1,1,1),Br=new w,Sa=new w,Bi=new w;var bh=new Xe,Th=new ai;class _i{constructor(e=0,t=0,i=0,r=_i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let r=e.elements,n=r[0],s=r[4],o=r[8],a=r[1],l=r[5],c=r[9],f=r[2],u=r[6],h=r[10];switch(t){case"XYZ":if(this._y=Math.asin($e(o,-1,1)),Math.abs(o)<0.9999999)this._x=Math.atan2(-c,h),this._z=Math.atan2(-s,n);else this._x=Math.atan2(u,l),this._z=0;break;case"YXZ":if(this._x=Math.asin(-$e(c,-1,1)),Math.abs(c)<0.9999999)this._y=Math.atan2(o,h),this._z=Math.atan2(a,l);else this._y=Math.atan2(-f,n),this._z=0;break;case"ZXY":if(this._x=Math.asin($e(u,-1,1)),Math.abs(u)<0.9999999)this._y=Math.atan2(-f,h),this._z=Math.atan2(-s,l);else this._y=0,this._z=Math.atan2(a,n);break;case"ZYX":if(this._y=Math.asin(-$e(f,-1,1)),Math.abs(f)<0.9999999)this._x=Math.atan2(u,h),this._z=Math.atan2(a,n);else this._x=0,this._z=Math.atan2(-s,l);break;case"YZX":if(this._z=Math.asin($e(a,-1,1)),Math.abs(a)<0.9999999)this._x=Math.atan2(-c,l),this._y=Math.atan2(-f,n);else this._x=0,this._y=Math.atan2(o,h);break;case"XZY":if(this._z=Math.asin(-$e(s,-1,1)),Math.abs(s)<0.9999999)this._x=Math.atan2(u,l),this._y=Math.atan2(o,n);else this._x=Math.atan2(-c,h),this._y=0;break;default:Se("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}if(this._order=t,i===!0)this._onChangeCallback();return this}setFromQuaternion(e,t,i){return bh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(bh,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Th.setFromEuler(this),this.setFromQuaternion(Th,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){if(this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0)this._order=e[3];return this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}_i.DEFAULT_ORDER="XYZ";class fn{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}var _m=0,Eh=new w,rs=new ai,Sr=new Xe,ba=new w,xo=new w,vm=new w,ym=new ai,wh=new w(1,0,0),Ah=new w(0,1,0),Rh=new w(0,0,1),Ch={type:"added"},Mm={type:"removed"},ns={type:"childadded",child:null},Ll={type:"childremoved",child:null};class rt extends Qt{constructor(){super();this.isObject3D=!0,Object.defineProperty(this,"id",{value:_m++}),this.uuid=xi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=rt.DEFAULT_UP.clone();let e=new w,t=new _i,i=new ai,r=new w(1,1,1);function n(){i.setFromEuler(t,!1)}function s(){t.setFromQuaternion(i,void 0,!1)}t._onChange(n),i._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Xe},normalMatrix:{value:new We}}),this.matrix=new Xe,this.matrixWorld=new Xe,this.matrixAutoUpdate=rt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=rt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new fn,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null)this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return rs.setFromAxisAngle(e,t),this.quaternion.multiply(rs),this}rotateOnWorldAxis(e,t){return rs.setFromAxisAngle(e,t),this.quaternion.premultiply(rs),this}rotateX(e){return this.rotateOnAxis(wh,e)}rotateY(e){return this.rotateOnAxis(Ah,e)}rotateZ(e){return this.rotateOnAxis(Rh,e)}translateOnAxis(e,t){return Eh.copy(e).applyQuaternion(this.quaternion),this.position.add(Eh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(wh,e)}translateY(e){return this.translateOnAxis(Ah,e)}translateZ(e){return this.translateOnAxis(Rh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Sr.copy(this.matrixWorld).invert())}lookAt(e,t,i){if(e.isVector3)ba.copy(e);else ba.set(e,t,i);let r=this.parent;if(this.updateWorldMatrix(!0,!1),xo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight)Sr.lookAt(xo,ba,this.up);else Sr.lookAt(ba,xo,this.up);if(this.quaternion.setFromRotationMatrix(Sr),r)Sr.extractRotation(r.matrixWorld),rs.setFromRotationMatrix(Sr),this.quaternion.premultiply(rs.invert())}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}if(e===this)return Fe("Object3D.add: object can't be added as a child of itself.",e),this;if(e&&e.isObject3D)e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ch),ns.child=e,this.dispatchEvent(ns),ns.child=null;else Fe("Object3D.add: object not an instance of THREE.Object3D.",e);return this}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);if(t!==-1)e.parent=null,this.children.splice(t,1),e.dispatchEvent(Mm),Ll.child=e,this.dispatchEvent(Ll),Ll.child=null;return this}removeFromParent(){let e=this.parent;if(e!==null)e.remove(this);return this}clear(){return this.remove(...this.children)}attach(e){if(this.updateWorldMatrix(!0,!1),Sr.copy(this.matrixWorld).invert(),e.parent!==null)e.parent.updateWorldMatrix(!0,!1),Sr.multiply(e.parent.matrixWorld);return e.applyMatrix4(Sr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ch),ns.child=e,this.dispatchEvent(ns),ns.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){let s=this.children[i].getObjectByProperty(e,t);if(s!==void 0)return s}return}getObjectsByProperty(e,t,i=[]){if(this[e]===t)i.push(this);let r=this.children;for(let n=0,s=r.length;n<s;n++)r[n].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xo,e,vm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xo,ym,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;if(t!==null)e(t),t.traverseAncestors(e)}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let{x:t,y:i,z:r}=e,n=this.matrix.elements;n[12]+=t-n[0]*t-n[4]*i-n[8]*r,n[13]+=i-n[1]*t-n[5]*i-n[9]*r,n[14]+=r-n[2]*t-n[6]*i-n[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||e){if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,e=!0}let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){let r=this.parent;if(e===!0&&r!==null)r.updateWorldMatrix(!0,!1);if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||i){if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,i=!0}if(t===!0){let n=this.children;for(let s=0,o=n.length;s<o;s++)n[s].updateWorldMatrix(!1,!0,i)}}toJSON(e){let t=e===void 0||typeof e==="string",i={};if(t)e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"};let r={};if(r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0)r.userData=this.userData;if(r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null)r.pivot=this.pivot.toArray();if(this.morphTargetDictionary!==void 0)r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary);if(this.morphTargetInfluences!==void 0)r.morphTargetInfluences=this.morphTargetInfluences.slice();if(this.isInstancedMesh){if(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null)r.instanceColor=this.instanceColor.toJSON()}if(this.isBatchedMesh){if(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map((o)=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map((o)=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null)r.colorsTexture=this._colorsTexture.toJSON(e);if(this.boundingSphere!==null)r.boundingSphere=this.boundingSphere.toJSON();if(this.boundingBox!==null)r.boundingBox=this.boundingBox.toJSON()}function n(o,a){if(o[a.uuid]===void 0)o[a.uuid]=a.toJSON(e);return a.uuid}if(this.isScene){if(this.background){if(this.background.isColor)r.background=this.background.toJSON();else if(this.background.isTexture)r.background=this.background.toJSON(e).uuid}if(this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0)r.environment=this.environment.toJSON(e).uuid}else if(this.isMesh||this.isLine||this.isPoints){r.geometry=n(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let a=o.shapes;if(Array.isArray(a))for(let l=0,c=a.length;l<c;l++){let f=a[l];n(e.shapes,f)}else n(e.shapes,a)}}if(this.isSkinnedMesh){if(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0)n(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid}if(this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let a=0,l=this.material.length;a<l;a++)o.push(n(e.materials,this.material[a]));r.material=o}else r.material=n(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){let a=this.animations[o];r.animations.push(n(e.animations,a))}}if(t){let o=s(e.geometries),a=s(e.materials),l=s(e.textures),c=s(e.images),f=s(e.shapes),u=s(e.skeletons),h=s(e.animations),d=s(e.nodes);if(o.length>0)i.geometries=o;if(a.length>0)i.materials=a;if(l.length>0)i.textures=l;if(c.length>0)i.images=c;if(f.length>0)i.shapes=f;if(u.length>0)i.skeletons=u;if(h.length>0)i.animations=h;if(d.length>0)i.nodes=d}return i.object=r,i;function s(o){let a=[];for(let l in o){let c=o[l];delete c.metadata,a.push(c)}return a}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let r=e.children[i];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}rt.DEFAULT_UP=new w(0,1,0);rt.DEFAULT_MATRIX_AUTO_UPDATE=!0;rt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Zi extends rt{constructor(){super();this.isGroup=!0,this.type="Group"}}var Sm={type:"move"};class ss{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){if(this._hand===null)this._hand=new Zi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1};return this._hand}getTargetRaySpace(){if(this._targetRay===null)this._targetRay=new Zi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new w,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new w;return this._targetRay}getGripSpace(){if(this._grip===null)this._grip=new Zi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new w,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new w,this._grip.eventsEnabled=!1;return this._grip}dispatchEvent(e){if(this._targetRay!==null)this._targetRay.dispatchEvent(e);if(this._grip!==null)this._grip.dispatchEvent(e);if(this._hand!==null)this._hand.dispatchEvent(e);return this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){if(this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null)this._targetRay.visible=!1;if(this._grip!==null)this._grip.visible=!1;if(this._hand!==null)this._hand.visible=!1;return this}update(e,t,i){let r=null,n=null,s=null,o=this._targetRay,a=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){s=!0;for(let x of e.hand.values()){let M=t.getJointPose(x,i),p=this._getHandJoint(l,x);if(M!==null)p.matrix.fromArray(M.transform.matrix),p.matrix.decompose(p.position,p.quaternion,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=M.radius;p.visible=M!==null}let c=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],u=c.position.distanceTo(f.position),h=0.02,d=0.005;if(l.inputState.pinching&&u>h+d)l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this});else if(!l.inputState.pinching&&u<=h-d)l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this})}else if(a!==null&&e.gripSpace){if(n=t.getPose(e.gripSpace,i),n!==null){if(a.matrix.fromArray(n.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,n.linearVelocity)a.hasLinearVelocity=!0,a.linearVelocity.copy(n.linearVelocity);else a.hasLinearVelocity=!1;if(n.angularVelocity)a.hasAngularVelocity=!0,a.angularVelocity.copy(n.angularVelocity);else a.hasAngularVelocity=!1;if(a.eventsEnabled)a.dispatchEvent({type:"gripUpdated",data:e,target:this})}}if(o!==null){if(r=t.getPose(e.targetRaySpace,i),r===null&&n!==null)r=n;if(r!==null){if(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity)o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity);else o.hasLinearVelocity=!1;if(r.angularVelocity)o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity);else o.hasAngularVelocity=!1;this.dispatchEvent(Sm)}}}if(o!==null)o.visible=r!==null;if(a!==null)a.visible=n!==null;if(l!==null)l.visible=s!==null;return this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new Zi;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}var Ph={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Or={h:0,s:0,l:0},Ta={h:0,s:0,l:0};function Dl(e,t,i){if(i<0)i+=1;if(i>1)i-=1;if(i<0.16666666666666666)return e+(t-e)*6*i;if(i<0.5)return t;if(i<0.6666666666666666)return e+(t-e)*6*(0.6666666666666666-i);return e}class fe{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let r=e;if(r&&r.isColor)this.copy(r);else if(typeof r==="number")this.setHex(r);else if(typeof r==="string")this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ot){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,tt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=tt.workingColorSpace){return this.r=e,this.g=t,this.b=i,tt.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=tt.workingColorSpace){if(e=_h(e,1),t=$e(t,0,1),i=$e(i,0,1),t===0)this.r=this.g=this.b=i;else{let n=i<=0.5?i*(1+t):i+t-i*t,s=2*i-n;this.r=Dl(s,n,e+0.3333333333333333),this.g=Dl(s,n,e),this.b=Dl(s,n,e-0.3333333333333333)}return tt.colorSpaceToWorking(this,r),this}setStyle(e,t=Ot){function i(n){if(n===void 0)return;if(parseFloat(n)<1)Se("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let n,s=r[1],o=r[2];switch(s){case"rgb":case"rgba":if(n=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(n[4]),this.setRGB(Math.min(255,parseInt(n[1],10))/255,Math.min(255,parseInt(n[2],10))/255,Math.min(255,parseInt(n[3],10))/255,t);if(n=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(n[4]),this.setRGB(Math.min(100,parseFloat(n[1]))/100,Math.min(100,parseFloat(n[2]))/100,Math.min(100,parseFloat(n[3]))/100,t);break;case"hsl":case"hsla":if(n=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(n[4]),this.setHSL(parseFloat(n[1])/360,parseFloat(n[2])/100,parseFloat(n[3])/100,t);break;default:Se("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let n=r[1],s=n.length;if(s===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);else if(s===6)return this.setHex(parseInt(n,16),t);else Se("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ot){let i=Ph[e.toLowerCase()];if(i!==void 0)this.setHex(i,t);else Se("Color: Unknown color "+e);return this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=rr(e.r),this.g=rr(e.g),this.b=rr(e.b),this}copyLinearToSRGB(e){return this.r=hn(e.r),this.g=hn(e.g),this.b=hn(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ot){return tt.workingToColorSpace(vi.copy(this),e),Math.round($e(vi.r*255,0,255))*65536+Math.round($e(vi.g*255,0,255))*256+Math.round($e(vi.b*255,0,255))}getHexString(e=Ot){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=tt.workingColorSpace){tt.workingToColorSpace(vi.copy(this),t);let{r:i,g:r,b:n}=vi,s=Math.max(i,r,n),o=Math.min(i,r,n),a,l,c=(o+s)/2;if(o===s)a=0,l=0;else{let f=s-o;switch(l=c<=0.5?f/(s+o):f/(2-s-o),s){case i:a=(r-n)/f+(r<n?6:0);break;case r:a=(n-i)/f+2;break;case n:a=(i-r)/f+4;break}a/=6}return e.h=a,e.s=l,e.l=c,e}getRGB(e,t=tt.workingColorSpace){return tt.workingToColorSpace(vi.copy(this),t),e.r=vi.r,e.g=vi.g,e.b=vi.b,e}getStyle(e=Ot){tt.workingToColorSpace(vi.copy(this),e);let{r:t,g:i,b:r}=vi;if(e!==Ot)return`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`;return`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Or),this.setHSL(Or.h+e,Or.s+t,Or.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Or),e.getHSL(Ta);let i=ya(Or.h,Ta.h,t),r=ya(Or.s,Ta.s,t),n=ya(Or.l,Ta.l,t);return this.setHSL(i,r,n),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,r=this.b,n=e.elements;return this.r=n[0]*t+n[3]*i+n[6]*r,this.g=n[1]*t+n[4]*i+n[7]*r,this.b=n[2]*t+n[5]*i+n[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}var vi=new fe;fe.NAMES=Ph;class os{constructor(e,t=1,i=1000){this.isFog=!0,this.name="",this.color=new fe(e),this.near=t,this.far=i}clone(){return new os(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class dn extends rt{constructor(){super();if(this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new _i,this.environmentIntensity=1,this.environmentRotation=new _i,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);if(this.fog!==null)t.object.fog=this.fog.toJSON();return t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}var sr=new w,br=new w,Nl=new w,Tr=new w,as=new w,ls=new w,Ih=new w,Ul=new w,Fl=new w,Bl=new w,Ol=new mt,zl=new mt,Gl=new mt;class Ei{constructor(e=new w,t=new w,i=new w){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),sr.subVectors(e,t),r.cross(sr);let n=r.lengthSq();if(n>0)return r.multiplyScalar(1/Math.sqrt(n));return r.set(0,0,0)}static getBarycoord(e,t,i,r,n){sr.subVectors(r,t),br.subVectors(i,t),Nl.subVectors(e,t);let s=sr.dot(sr),o=sr.dot(br),a=sr.dot(Nl),l=br.dot(br),c=br.dot(Nl),f=s*l-o*o;if(f===0)return n.set(0,0,0),null;let u=1/f,h=(l*a-o*c)*u,d=(s*c-o*a)*u;return n.set(1-h-d,d,h)}static containsPoint(e,t,i,r){if(this.getBarycoord(e,t,i,r,Tr)===null)return!1;return Tr.x>=0&&Tr.y>=0&&Tr.x+Tr.y<=1}static getInterpolation(e,t,i,r,n,s,o,a){if(this.getBarycoord(e,t,i,r,Tr)===null){if(a.x=0,a.y=0,"z"in a)a.z=0;if("w"in a)a.w=0;return null}return a.setScalar(0),a.addScaledVector(n,Tr.x),a.addScaledVector(s,Tr.y),a.addScaledVector(o,Tr.z),a}static getInterpolatedAttribute(e,t,i,r,n,s){return Ol.setScalar(0),zl.setScalar(0),Gl.setScalar(0),Ol.fromBufferAttribute(e,t),zl.fromBufferAttribute(e,i),Gl.fromBufferAttribute(e,r),s.setScalar(0),s.addScaledVector(Ol,n.x),s.addScaledVector(zl,n.y),s.addScaledVector(Gl,n.z),s}static isFrontFacing(e,t,i,r){return sr.subVectors(i,t),br.subVectors(e,t),sr.cross(br).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return sr.subVectors(this.c,this.b),br.subVectors(this.a,this.b),sr.cross(br).length()*0.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(0.3333333333333333)}getNormal(e){return Ei.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ei.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,n){return Ei.getInterpolation(e,this.a,this.b,this.c,t,i,r,n)}containsPoint(e){return Ei.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ei.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,r=this.b,n=this.c,s,o;as.subVectors(r,i),ls.subVectors(n,i),Ul.subVectors(e,i);let a=as.dot(Ul),l=ls.dot(Ul);if(a<=0&&l<=0)return t.copy(i);Fl.subVectors(e,r);let c=as.dot(Fl),f=ls.dot(Fl);if(c>=0&&f<=c)return t.copy(r);let u=a*f-c*l;if(u<=0&&a>=0&&c<=0&&a-c>0)return s=a/(a-c),t.copy(i).addScaledVector(as,s);Bl.subVectors(e,n);let h=as.dot(Bl),d=ls.dot(Bl);if(d>=0&&h<=d)return t.copy(n);let x=h*l-a*d;if(x<=0&&l>=0&&d<=0)return o=l/(l-d),t.copy(i).addScaledVector(ls,o);let M=c*d-h*f;if(M<=0&&f-c>=0&&h-d>=0)return Ih.subVectors(n,r),o=(f-c)/(f-c+(h-d)),t.copy(r).addScaledVector(Ih,o);let p=1/(M+x+u);return s=x*p,o=u*p,t.copy(i).addScaledVector(as,s).addScaledVector(ls,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class yi{constructor(e=new w(1/0,1/0,1/0),t=new w(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(or.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(or.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=or.copy(t).multiplyScalar(0.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(0.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let n=i.getAttribute("position");if(t===!0&&n!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let s=0,o=n.count;s<o;s++){if(e.isMesh===!0)e.getVertexPosition(s,or);else or.fromBufferAttribute(n,s);or.applyMatrix4(e.matrixWorld),this.expandByPoint(or)}else{if(e.boundingBox!==void 0){if(e.boundingBox===null)e.computeBoundingBox();Ea.copy(e.boundingBox)}else{if(i.boundingBox===null)i.computeBoundingBox();Ea.copy(i.boundingBox)}Ea.applyMatrix4(e.matrixWorld),this.union(Ea)}}let r=e.children;for(let n=0,s=r.length;n<s;n++)this.expandByObject(r[n],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,or),or.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;if(e.normal.x>0)t=e.normal.x*this.min.x,i=e.normal.x*this.max.x;else t=e.normal.x*this.max.x,i=e.normal.x*this.min.x;if(e.normal.y>0)t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y;else t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y;if(e.normal.z>0)t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z;else t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z;return t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(_o),wa.subVectors(this.max,_o),cs.subVectors(e.a,_o),hs.subVectors(e.b,_o),us.subVectors(e.c,_o),zr.subVectors(hs,cs),Gr.subVectors(us,hs),pn.subVectors(cs,us);let t=[0,-zr.z,zr.y,0,-Gr.z,Gr.y,0,-pn.z,pn.y,zr.z,0,-zr.x,Gr.z,0,-Gr.x,pn.z,0,-pn.x,-zr.y,zr.x,0,-Gr.y,Gr.x,0,-pn.y,pn.x,0];if(!Vl(t,cs,hs,us,wa))return!1;if(t=[1,0,0,0,1,0,0,0,1],!Vl(t,cs,hs,us,wa))return!1;return Aa.crossVectors(zr,Gr),t=[Aa.x,Aa.y,Aa.z],Vl(t,cs,hs,us,wa)}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,or).distanceTo(e)}getBoundingSphere(e){if(this.isEmpty())e.makeEmpty();else this.getCenter(e.center),e.radius=this.getSize(or).length()*0.5;return e}intersect(e){if(this.min.max(e.min),this.max.min(e.max),this.isEmpty())this.makeEmpty();return this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){if(this.isEmpty())return this;return Er[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Er[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Er[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Er[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Er[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Er[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Er[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Er[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Er),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}var Er=[new w,new w,new w,new w,new w,new w,new w,new w],or=new w,Ea=new yi,cs=new w,hs=new w,us=new w,zr=new w,Gr=new w,pn=new w,_o=new w,wa=new w,Aa=new w,mn=new w;function Vl(e,t,i,r,n){for(let s=0,o=e.length-3;s<=o;s+=3){mn.fromArray(e,s);let a=n.x*Math.abs(mn.x)+n.y*Math.abs(mn.y)+n.z*Math.abs(mn.z),l=t.dot(mn),c=i.dot(mn),f=r.dot(mn);if(Math.max(-Math.max(l,c,f),Math.min(l,c,f))>a)return!1}return!0}var Yt=new w,Ra=new K,bm=0;class Zt extends Qt{constructor(e,t,i=!1){super();if(Array.isArray(e))throw TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:bm++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=va,this.updateRanges=[],this.gpuType=Wt,this.version=0,this._normalizationScale=e!==void 0?mo(e):void 0}onUploadCallback(){}set needsUpdate(e){if(e===!0)this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,n=this.itemSize;r<n;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Ra.fromBufferAttribute(this,t),Ra.applyMatrix3(e),this.setXY(t,Ra.x,Ra.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Yt.fromBufferAttribute(this,t),Yt.applyMatrix3(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Yt.fromBufferAttribute(this,t),Yt.applyMatrix4(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Yt.fromBufferAttribute(this,t),Yt.applyNormalMatrix(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Yt.fromBufferAttribute(this,t),Yt.transformDirection(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];if(this.normalized)i=this._denormalize(i);return i}setComponent(e,t,i){if(this.normalized)i=this._normalize(i);return this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];if(this.normalized)t=this._denormalize(t);return t}setX(e,t){if(this.normalized)t=this._normalize(t);return this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];if(this.normalized)t=this._denormalize(t);return t}setY(e,t){if(this.normalized)t=this._normalize(t);return this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];if(this.normalized)t=this._denormalize(t);return t}setZ(e,t){if(this.normalized)t=this._normalize(t);return this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];if(this.normalized)t=this._denormalize(t);return t}setW(e,t){if(this.normalized)t=this._normalize(t);return this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){if(e*=this.itemSize,this.normalized)t=this._normalize(t),i=this._normalize(i);return this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){if(e*=this.itemSize,this.normalized)t=this._normalize(t),i=this._normalize(i),r=this._normalize(r);return this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,n){if(e*=this.itemSize,this.normalized)t=this._normalize(t),i=this._normalize(i),r=this._normalize(r),n=this._normalize(n);return this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=n,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):wl(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):Al(e,this.array)}}class vo extends Zt{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class yo extends Zt{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Be extends Zt{constructor(e,t,i){super(new Float32Array(e),t,i)}}var Tm=new yi,Mo=new w,kl=new w;class $t{constructor(e=new w,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;if(t!==void 0)i.copy(t);else Tm.setFromPoints(e).getCenter(i);let r=0;for(let n=0,s=e.length;n<s;n++)r=Math.max(r,i.distanceToSquared(e[n]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);if(t.copy(e),i>this.radius*this.radius)t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center);return t}getBoundingBox(e){if(this.isEmpty())return e.makeEmpty(),e;return e.set(this.center,this.center),e.expandByScalar(this.radius),e}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Mo.subVectors(e,this.center);let t=Mo.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),r=(i-this.radius)*0.5;this.center.addScaledVector(Mo,r/i),this.radius+=r}return this}union(e){if(e.isEmpty())return this;if(this.isEmpty())return this.copy(e),this;if(this.center.equals(e.center)===!0)this.radius=Math.max(this.radius,e.radius);else kl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Mo.copy(e.center).add(kl)),this.expandByPoint(Mo.copy(e.center).sub(kl));return this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}var Em=0,Ji=new Xe,Hl=new rt,fs=new w,Oi=new yi,So=new yi,li=new w;class ke extends Qt{constructor(){super();this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Em++}),this.uuid=xi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){if(Array.isArray(e))this.index=new((ph(e))?yo:vo)(e,1);else this.index=e;return this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;if(t!==void 0)t.applyMatrix4(e),t.needsUpdate=!0;let i=this.attributes.normal;if(i!==void 0){let n=new We().getNormalMatrix(e);i.applyNormalMatrix(n),i.needsUpdate=!0}let r=this.attributes.tangent;if(r!==void 0)r.transformDirection(e),r.needsUpdate=!0;if(this.boundingBox!==null)this.computeBoundingBox();if(this.boundingSphere!==null)this.computeBoundingSphere();return this._transformed=!0,this}applyQuaternion(e){return Ji.makeRotationFromQuaternion(e),this.applyMatrix4(Ji),this}rotateX(e){return Ji.makeRotationX(e),this.applyMatrix4(Ji),this}rotateY(e){return Ji.makeRotationY(e),this.applyMatrix4(Ji),this}rotateZ(e){return Ji.makeRotationZ(e),this.applyMatrix4(Ji),this}translate(e,t,i){return Ji.makeTranslation(e,t,i),this.applyMatrix4(Ji),this}scale(e,t,i){return Ji.makeScale(e,t,i),this.applyMatrix4(Ji),this}lookAt(e){return Hl.lookAt(e),Hl.updateMatrix(),this.applyMatrix4(Hl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(fs).negate(),this.translate(fs.x,fs.y,fs.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let r=0,n=e.length;r<n;r++){let s=e[r];i.push(s.x,s.y,s.z||0)}this.setAttribute("position",new Be(i,3))}else{let i=Math.min(e.length,t.count);for(let r=0;r<i;r++){let n=e[r];t.setXYZ(r,n.x,n.y,n.z||0)}if(e.length>t.count)Se("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.");t.needsUpdate=!0}return this}computeBoundingBox(){if(this.boundingBox===null)this.boundingBox=new yi;let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Fe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new w(-1/0,-1/0,-1/0),new w(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){let n=t[i];if(Oi.setFromBufferAttribute(n),this.morphTargetsRelative)li.addVectors(this.boundingBox.min,Oi.min),this.boundingBox.expandByPoint(li),li.addVectors(this.boundingBox.max,Oi.max),this.boundingBox.expandByPoint(li);else this.boundingBox.expandByPoint(Oi.min),this.boundingBox.expandByPoint(Oi.max)}}else this.boundingBox.makeEmpty();if(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))Fe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){if(this.boundingSphere===null)this.boundingSphere=new $t;let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Fe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new w,1/0);return}if(e){let i=this.boundingSphere.center;if(Oi.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let o=t[n];if(So.setFromBufferAttribute(o),this.morphTargetsRelative)li.addVectors(Oi.min,So.min),Oi.expandByPoint(li),li.addVectors(Oi.max,So.max),Oi.expandByPoint(li);else Oi.expandByPoint(So.min),Oi.expandByPoint(So.max)}Oi.getCenter(i);let r=0;for(let n=0,s=e.count;n<s;n++)li.fromBufferAttribute(e,n),r=Math.max(r,i.distanceToSquared(li));if(t)for(let n=0,s=t.length;n<s;n++){let o=t[n],a=this.morphTargetsRelative;for(let l=0,c=o.count;l<c;l++){if(li.fromBufferAttribute(o,l),a)fs.fromBufferAttribute(e,l),li.add(fs);r=Math.max(r,i.distanceToSquared(li))}}if(this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius))Fe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Fe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let{position:i,normal:r,uv:n}=t,s=this.getAttribute("tangent");if(s===void 0||s.count!==i.count)s=new Zt(new Float32Array(4*i.count),4),this.setAttribute("tangent",s);let o=[],a=[],l=new Uint8Array(i.count);for(let y=0;y<i.count;y++)o[y]=new w,a[y]=new w;let c=new w,f=new w,u=new w,h=new K,d=new K,x=new K,M=new w,p=new w;function m(y,P,k){l[y]=l[P]=l[k]=1,c.fromBufferAttribute(i,y),f.fromBufferAttribute(i,P),u.fromBufferAttribute(i,k),h.fromBufferAttribute(n,y),d.fromBufferAttribute(n,P),x.fromBufferAttribute(n,k),f.sub(c),u.sub(c),d.sub(h),x.sub(h);let I=1/(d.x*x.y-x.x*d.y);if(!isFinite(I))return;M.copy(f).multiplyScalar(x.y).addScaledVector(u,-d.y).multiplyScalar(I),p.copy(u).multiplyScalar(d.x).addScaledVector(f,-x.x).multiplyScalar(I),o[y].add(M),o[P].add(M),o[k].add(M),a[y].add(p),a[P].add(p),a[k].add(p)}let b=this.groups;if(b.length===0)b=[{start:0,count:e.count}];for(let y=0,P=b.length;y<P;++y){let k=b[y],{start:I,count:H}=k;for(let re=I,R=I+H;re<R;re+=3)m(e.getX(re+0),e.getX(re+1),e.getX(re+2))}let T=new w,S=new w,A=new w,C=new w;function g(y){A.fromBufferAttribute(r,y),C.copy(A);let P=o[y];T.copy(P),T.sub(A.multiplyScalar(A.dot(P))).normalize(),S.crossVectors(C,P);let I=S.dot(a[y])<0?-1:1;s.setXYZW(y,T.x,T.y,T.z,I)}for(let y=0,P=i.count;y<P;++y)if(l[y])g(y);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new Zt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let u=0,h=i.count;u<h;u++)i.setXYZ(u,0,0,0);let r=new w,n=new w,s=new w,o=new w,a=new w,l=new w,c=new w,f=new w;if(e)for(let u=0,h=e.count;u<h;u+=3){let d=e.getX(u+0),x=e.getX(u+1),M=e.getX(u+2);r.fromBufferAttribute(t,d),n.fromBufferAttribute(t,x),s.fromBufferAttribute(t,M),c.subVectors(s,n),f.subVectors(r,n),c.cross(f),o.fromBufferAttribute(i,d),a.fromBufferAttribute(i,x),l.fromBufferAttribute(i,M),o.add(c),a.add(c),l.add(c),i.setXYZ(d,o.x,o.y,o.z),i.setXYZ(x,a.x,a.y,a.z),i.setXYZ(M,l.x,l.y,l.z)}else for(let u=0,h=t.count;u<h;u+=3)r.fromBufferAttribute(t,u+0),n.fromBufferAttribute(t,u+1),s.fromBufferAttribute(t,u+2),c.subVectors(s,n),f.subVectors(r,n),c.cross(f),i.setXYZ(u+0,c.x,c.y,c.z),i.setXYZ(u+1,c.x,c.y,c.z),i.setXYZ(u+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)li.fromBufferAttribute(e,t),li.normalize(),e.setXYZ(t,li.x,li.y,li.z)}toNonIndexed(){function e(o,a){let{array:l,itemSize:c,normalized:f}=o,u=new l.constructor(a.length*c),h=0,d=0;for(let x=0,M=a.length;x<M;x++){if(o.isInterleavedBufferAttribute)h=a[x]*o.data.stride+o.offset;else h=a[x]*c;for(let p=0;p<c;p++)u[d++]=l[h++]}return new Zt(u,c,f)}if(this.index===null)return Se("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new ke,i=this.index.array,r=this.attributes;for(let o in r){let a=r[o],l=e(a,i);t.setAttribute(o,l)}let n=this.morphAttributes;for(let o in n){let a=[],l=n[o];for(let c=0,f=l.length;c<f;c++){let u=l[c],h=e(u,i);a.push(h)}t.morphAttributes[o]=a}t.morphTargetsRelative=this.morphTargetsRelative;let s=this.groups;for(let o=0,a=s.length;o<a;o++){let l=s[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0)e.userData=this.userData;if(this.parameters!==void 0&&this._transformed!==!0){let a=this.parameters;for(let l in a)if(a[l]!==void 0)e[l]=a[l];return e}e.data={attributes:{}};let t=this.index;if(t!==null)e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)};let i=this.attributes;for(let a in i){let l=i[a];e.data.attributes[a]=l.toJSON(e.data)}let r={},n=!1;for(let a in this.morphAttributes){let l=this.morphAttributes[a],c=[];for(let f=0,u=l.length;f<u;f++){let h=l[f];c.push(h.toJSON(e.data))}if(c.length>0)r[a]=c,n=!0}if(n)e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative;let s=this.groups;if(s.length>0)e.data.groups=JSON.parse(JSON.stringify(s));let o=this.boundingSphere;if(o!==null)e.data.boundingSphere=o.toJSON();return e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;if(i!==null)this.setIndex(i.clone());let r=e.attributes;for(let l in r){let c=r[l];this.setAttribute(l,c.clone(t))}let n=e.morphAttributes;for(let l in n){let c=[],f=n[l];for(let u=0,h=f.length;u<h;u++)c.push(f[u].clone(t));this.morphAttributes[l]=c}this.morphTargetsRelative=e.morphTargetsRelative;let s=e.groups;for(let l=0,c=s.length;l<c;l++){let f=s[l];this.addGroup(f.start,f.count,f.materialIndex)}let o=e.boundingBox;if(o!==null)this.boundingBox=o.clone();let a=e.boundingSphere;if(a!==null)this.boundingSphere=a.clone();return this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}var Wl=new w,wm=new w,Am=new We;class wi{constructor(e=new w(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let r=Wl.subVectors(i,t).cross(wm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let r=e.delta(Wl),n=this.normal.dot(r);if(n===0){if(this.distanceToPoint(e.start)===0)return t.copy(e.start);return null}let s=-(e.start.dot(this.normal)+this.constant)/n;if(i===!0&&(s<0||s>1))return null;return t.copy(e.start).addScaledVector(r,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||Am.getNormalMatrix(e),r=this.coplanarPoint(Wl).applyMatrix4(e),n=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(n),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}var Rm=0;class Dt extends Qt{constructor(){super();this.isMaterial=!0,Object.defineProperty(this,"id",{value:Rm++}),this.uuid=xi(),this.name="",this.type="Material",this.blending=Dr,this.side=Hi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ta,this.blendDst=ia,this.blendEquation=Nr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new fe(0,0,0),this.blendAlpha=0,this.depthFunc=Ur,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ah,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ma,this.stencilZFail=ma,this.stencilZPass=ma,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){if(this._alphaTest>0!==e>0)this.version++;this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e===void 0)return;for(let t in e){let i=e[t];if(i===void 0){Se(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){Se(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}if(r&&r.isColor)r.set(i);else if(r&&r.isVector2&&(i&&i.isVector2)||r&&r.isEuler&&(i&&i.isEuler)||r&&r.isVector3&&(i&&i.isVector3))r.copy(i);else this[t]=i}}toJSON(e){let t=e===void 0||typeof e==="string";if(t)e={textures:{},images:{}};let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};if(i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor)i.color=this.color.getHex();if(this.roughness!==void 0)i.roughness=this.roughness;if(this.metalness!==void 0)i.metalness=this.metalness;if(this.sheen!==void 0)i.sheen=this.sheen;if(this.sheenColor&&this.sheenColor.isColor)i.sheenColor=this.sheenColor.getHex();if(this.sheenRoughness!==void 0)i.sheenRoughness=this.sheenRoughness;if(this.emissive&&this.emissive.isColor)i.emissive=this.emissive.getHex();if(this.emissiveIntensity!==void 0)i.emissiveIntensity=this.emissiveIntensity;if(this.specular&&this.specular.isColor)i.specular=this.specular.getHex();if(this.specularIntensity!==void 0)i.specularIntensity=this.specularIntensity;if(this.specularColor&&this.specularColor.isColor)i.specularColor=this.specularColor.getHex();if(this.shininess!==void 0)i.shininess=this.shininess;if(this.clearcoat!==void 0)i.clearcoat=this.clearcoat;if(this.clearcoatRoughness!==void 0)i.clearcoatRoughness=this.clearcoatRoughness;if(this.diffuseRoughness!==void 0)i.diffuseRoughness=this.diffuseRoughness;if(this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture)i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid;if(this.clearcoatMap&&this.clearcoatMap.isTexture)i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid;if(this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture)i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid;if(this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture)i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray();if(this.sheenColorMap&&this.sheenColorMap.isTexture)i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid;if(this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture)i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid;if(this.dispersion!==void 0)i.dispersion=this.dispersion;if(this.retroreflectivity!==void 0)i.retroreflectivity=this.retroreflectivity;if(this.iridescence!==void 0)i.iridescence=this.iridescence;if(this.iridescenceIOR!==void 0)i.iridescenceIOR=this.iridescenceIOR;if(this.iridescenceThicknessMinimum!==void 0)i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum;if(this.iridescenceThicknessMaximum!==void 0)i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum;if(this.iridescenceMap&&this.iridescenceMap.isTexture)i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid;if(this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture)i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid;if(this.anisotropy!==void 0)i.anisotropy=this.anisotropy;if(this.anisotropyRotation!==void 0)i.anisotropyRotation=this.anisotropyRotation;if(this.anisotropyMap&&this.anisotropyMap.isTexture)i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid;if(this.map&&this.map.isTexture)i.map=this.map.toJSON(e).uuid;if(this.matcap&&this.matcap.isTexture)i.matcap=this.matcap.toJSON(e).uuid;if(this.alphaMap&&this.alphaMap.isTexture)i.alphaMap=this.alphaMap.toJSON(e).uuid;if(this.lightMap&&this.lightMap.isTexture)i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity;if(this.aoMap&&this.aoMap.isTexture)i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity;if(this.bumpMap&&this.bumpMap.isTexture)i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale;if(this.normalMap&&this.normalMap.isTexture)i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray();if(this.displacementMap&&this.displacementMap.isTexture)i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias;if(this.roughnessMap&&this.roughnessMap.isTexture)i.roughnessMap=this.roughnessMap.toJSON(e).uuid;if(this.metalnessMap&&this.metalnessMap.isTexture)i.metalnessMap=this.metalnessMap.toJSON(e).uuid;if(this.emissiveMap&&this.emissiveMap.isTexture)i.emissiveMap=this.emissiveMap.toJSON(e).uuid;if(this.specularMap&&this.specularMap.isTexture)i.specularMap=this.specularMap.toJSON(e).uuid;if(this.specularIntensityMap&&this.specularIntensityMap.isTexture)i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid;if(this.specularColorMap&&this.specularColorMap.isTexture)i.specularColorMap=this.specularColorMap.toJSON(e).uuid;if(this.envMap&&this.envMap.isTexture){if(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0)i.combine=this.combine}if(this.envMapRotation!==void 0)i.envMapRotation=this.envMapRotation.toArray();if(this.envMapIntensity!==void 0)i.envMapIntensity=this.envMapIntensity;if(this.reflectivity!==void 0)i.reflectivity=this.reflectivity;if(this.refractionRatio!==void 0)i.refractionRatio=this.refractionRatio;if(this.gradientMap&&this.gradientMap.isTexture)i.gradientMap=this.gradientMap.toJSON(e).uuid;if(this.transmission!==void 0)i.transmission=this.transmission;if(this.transmissionMap&&this.transmissionMap.isTexture)i.transmissionMap=this.transmissionMap.toJSON(e).uuid;if(this.thickness!==void 0)i.thickness=this.thickness;if(this.thicknessMap&&this.thicknessMap.isTexture)i.thicknessMap=this.thicknessMap.toJSON(e).uuid;if(this.attenuationDistance!==void 0)i.attenuationDistance=this.attenuationDistance;if(this.attenuationColor!==void 0)i.attenuationColor=this.attenuationColor.getHex();if(this.size!==void 0)i.size=this.size;if(this.sizeAttenuation!==void 0)i.sizeAttenuation=this.sizeAttenuation;if(Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0)i.clippingPlanes=this.clippingPlanes.map((n)=>n.toJSON());if(this.rotation!==void 0)i.rotation=this.rotation;if(this.depthPacking!==void 0)i.depthPacking=this.depthPacking;if(this.linewidth!==void 0)i.linewidth=this.linewidth;if(this.linecap!==void 0)i.linecap=this.linecap;if(this.linejoin!==void 0)i.linejoin=this.linejoin;if(this.dashSize!==void 0)i.dashSize=this.dashSize;if(this.gapSize!==void 0)i.gapSize=this.gapSize;if(this.scale!==void 0)i.scale=this.scale;if(this.wireframe!==void 0)i.wireframe=this.wireframe;if(this.wireframeLinewidth!==void 0)i.wireframeLinewidth=this.wireframeLinewidth;if(this.wireframeLinecap!==void 0)i.wireframeLinecap=this.wireframeLinecap;if(this.wireframeLinejoin!==void 0)i.wireframeLinejoin=this.wireframeLinejoin;if(this.flatShading!==void 0)i.flatShading=this.flatShading;if(this.fog!==void 0)i.fog=this.fog;if(Object.keys(this.userData).length>0)i.userData=this.userData;function r(n){let s=[];for(let o in n){let a=n[o];delete a.metadata,s.push(a)}return s}if(t){let n=r(e.textures),s=r(e.images);if(n.length>0)i.textures=n;if(s.length>0)i.images=s}return i}fromJSON(e,t){if(e.uuid!==void 0)this.uuid=e.uuid;if(e.name!==void 0)this.name=e.name;if(e.color!==void 0&&this.color!==void 0)this.color.setHex(e.color);if(e.roughness!==void 0)this.roughness=e.roughness;if(e.metalness!==void 0)this.metalness=e.metalness;if(e.sheen!==void 0)this.sheen=e.sheen;if(e.sheenColor!==void 0)this.sheenColor=new fe().setHex(e.sheenColor);if(e.sheenRoughness!==void 0)this.sheenRoughness=e.sheenRoughness;if(e.emissive!==void 0&&this.emissive!==void 0)this.emissive.setHex(e.emissive);if(e.specular!==void 0&&this.specular!==void 0)this.specular.setHex(e.specular);if(e.specularIntensity!==void 0)this.specularIntensity=e.specularIntensity;if(e.specularColor!==void 0&&this.specularColor!==void 0)this.specularColor.setHex(e.specularColor);if(e.shininess!==void 0)this.shininess=e.shininess;if(e.clearcoat!==void 0)this.clearcoat=e.clearcoat;if(e.clearcoatRoughness!==void 0)this.clearcoatRoughness=e.clearcoatRoughness;if(e.diffuseRoughness!==void 0)this.diffuseRoughness=e.diffuseRoughness;if(e.dispersion!==void 0)this.dispersion=e.dispersion;if(e.retroreflectivity!==void 0)this.retroreflectivity=e.retroreflectivity;if(e.iridescence!==void 0)this.iridescence=e.iridescence;if(e.iridescenceIOR!==void 0)this.iridescenceIOR=e.iridescenceIOR;if(e.iridescenceThicknessMinimum!==void 0)this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum;if(e.iridescenceThicknessMaximum!==void 0)this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum;if(e.iridescenceThicknessRange!==void 0)this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1];if(e.transmission!==void 0)this.transmission=e.transmission;if(e.thickness!==void 0)this.thickness=e.thickness;if(e.attenuationDistance!==void 0)this.attenuationDistance=e.attenuationDistance;if(e.attenuationColor!==void 0&&this.attenuationColor!==void 0)this.attenuationColor.setHex(e.attenuationColor);if(e.anisotropy!==void 0)this.anisotropy=e.anisotropy;if(e.anisotropyRotation!==void 0)this.anisotropyRotation=e.anisotropyRotation;if(e.fog!==void 0)this.fog=e.fog;if(e.flatShading!==void 0)this.flatShading=e.flatShading;if(e.blending!==void 0)this.blending=e.blending;if(e.combine!==void 0)this.combine=e.combine;if(e.side!==void 0)this.side=e.side;if(e.shadowSide!==void 0)this.shadowSide=e.shadowSide;if(e.opacity!==void 0)this.opacity=e.opacity;if(e.transparent!==void 0)this.transparent=e.transparent;if(e.alphaTest!==void 0)this.alphaTest=e.alphaTest;if(e.alphaHash!==void 0)this.alphaHash=e.alphaHash;if(e.depthFunc!==void 0)this.depthFunc=e.depthFunc;if(e.depthTest!==void 0)this.depthTest=e.depthTest;if(e.depthWrite!==void 0)this.depthWrite=e.depthWrite;if(e.colorWrite!==void 0)this.colorWrite=e.colorWrite;if(e.clippingPlanes!==void 0)this.clippingPlanes=e.clippingPlanes.map((i)=>new wi().fromJSON(i));if(e.clipIntersection!==void 0)this.clipIntersection=e.clipIntersection;if(e.clipShadows!==void 0)this.clipShadows=e.clipShadows;if(e.depthPacking!==void 0)this.depthPacking=e.depthPacking;if(e.blendSrc!==void 0)this.blendSrc=e.blendSrc;if(e.blendDst!==void 0)this.blendDst=e.blendDst;if(e.blendEquation!==void 0)this.blendEquation=e.blendEquation;if(e.blendSrcAlpha!==void 0)this.blendSrcAlpha=e.blendSrcAlpha;if(e.blendDstAlpha!==void 0)this.blendDstAlpha=e.blendDstAlpha;if(e.blendEquationAlpha!==void 0)this.blendEquationAlpha=e.blendEquationAlpha;if(e.blendColor!==void 0&&this.blendColor!==void 0)this.blendColor.setHex(e.blendColor);if(e.blendAlpha!==void 0)this.blendAlpha=e.blendAlpha;if(e.stencilWriteMask!==void 0)this.stencilWriteMask=e.stencilWriteMask;if(e.stencilFunc!==void 0)this.stencilFunc=e.stencilFunc;if(e.stencilRef!==void 0)this.stencilRef=e.stencilRef;if(e.stencilFuncMask!==void 0)this.stencilFuncMask=e.stencilFuncMask;if(e.stencilFail!==void 0)this.stencilFail=e.stencilFail;if(e.stencilZFail!==void 0)this.stencilZFail=e.stencilZFail;if(e.stencilZPass!==void 0)this.stencilZPass=e.stencilZPass;if(e.stencilWrite!==void 0)this.stencilWrite=e.stencilWrite;if(e.wireframe!==void 0)this.wireframe=e.wireframe;if(e.wireframeLinewidth!==void 0)this.wireframeLinewidth=e.wireframeLinewidth;if(e.wireframeLinecap!==void 0)this.wireframeLinecap=e.wireframeLinecap;if(e.wireframeLinejoin!==void 0)this.wireframeLinejoin=e.wireframeLinejoin;if(e.rotation!==void 0)this.rotation=e.rotation;if(e.linewidth!==void 0)this.linewidth=e.linewidth;if(e.linecap!==void 0)this.linecap=e.linecap;if(e.linejoin!==void 0)this.linejoin=e.linejoin;if(e.dashSize!==void 0)this.dashSize=e.dashSize;if(e.gapSize!==void 0)this.gapSize=e.gapSize;if(e.scale!==void 0)this.scale=e.scale;if(e.polygonOffset!==void 0)this.polygonOffset=e.polygonOffset;if(e.polygonOffsetFactor!==void 0)this.polygonOffsetFactor=e.polygonOffsetFactor;if(e.polygonOffsetUnits!==void 0)this.polygonOffsetUnits=e.polygonOffsetUnits;if(e.dithering!==void 0)this.dithering=e.dithering;if(e.alphaToCoverage!==void 0)this.alphaToCoverage=e.alphaToCoverage;if(e.premultipliedAlpha!==void 0)this.premultipliedAlpha=e.premultipliedAlpha;if(e.forceSinglePass!==void 0)this.forceSinglePass=e.forceSinglePass;if(e.allowOverride!==void 0)this.allowOverride=e.allowOverride;if(e.visible!==void 0)this.visible=e.visible;if(e.toneMapped!==void 0)this.toneMapped=e.toneMapped;if(e.userData!==void 0)this.userData=e.userData;if(e.vertexColors!==void 0)if(typeof e.vertexColors==="number")this.vertexColors=e.vertexColors>0;else this.vertexColors=e.vertexColors;if(e.size!==void 0)this.size=e.size;if(e.sizeAttenuation!==void 0)this.sizeAttenuation=e.sizeAttenuation;if(e.map!==void 0)this.map=t[e.map]||null;if(e.matcap!==void 0)this.matcap=t[e.matcap]||null;if(e.alphaMap!==void 0)this.alphaMap=t[e.alphaMap]||null;if(e.bumpMap!==void 0)this.bumpMap=t[e.bumpMap]||null;if(e.bumpScale!==void 0)this.bumpScale=e.bumpScale;if(e.normalMap!==void 0)this.normalMap=t[e.normalMap]||null;if(e.normalMapType!==void 0)this.normalMapType=e.normalMapType;if(e.normalScale!==void 0){let i=e.normalScale;if(Array.isArray(i)===!1)i=[i,i];this.normalScale=new K().fromArray(i)}if(e.displacementMap!==void 0)this.displacementMap=t[e.displacementMap]||null;if(e.displacementScale!==void 0)this.displacementScale=e.displacementScale;if(e.displacementBias!==void 0)this.displacementBias=e.displacementBias;if(e.roughnessMap!==void 0)this.roughnessMap=t[e.roughnessMap]||null;if(e.metalnessMap!==void 0)this.metalnessMap=t[e.metalnessMap]||null;if(e.emissiveMap!==void 0)this.emissiveMap=t[e.emissiveMap]||null;if(e.emissiveIntensity!==void 0)this.emissiveIntensity=e.emissiveIntensity;if(e.specularMap!==void 0)this.specularMap=t[e.specularMap]||null;if(e.specularIntensityMap!==void 0)this.specularIntensityMap=t[e.specularIntensityMap]||null;if(e.specularColorMap!==void 0)this.specularColorMap=t[e.specularColorMap]||null;if(e.envMap!==void 0)this.envMap=t[e.envMap]||null;if(e.envMapRotation!==void 0)this.envMapRotation.fromArray(e.envMapRotation);if(e.envMapIntensity!==void 0)this.envMapIntensity=e.envMapIntensity;if(e.reflectivity!==void 0)this.reflectivity=e.reflectivity;if(e.refractionRatio!==void 0)this.refractionRatio=e.refractionRatio;if(e.lightMap!==void 0)this.lightMap=t[e.lightMap]||null;if(e.lightMapIntensity!==void 0)this.lightMapIntensity=e.lightMapIntensity;if(e.aoMap!==void 0)this.aoMap=t[e.aoMap]||null;if(e.aoMapIntensity!==void 0)this.aoMapIntensity=e.aoMapIntensity;if(e.gradientMap!==void 0)this.gradientMap=t[e.gradientMap]||null;if(e.clearcoatMap!==void 0)this.clearcoatMap=t[e.clearcoatMap]||null;if(e.clearcoatRoughnessMap!==void 0)this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null;if(e.clearcoatNormalMap!==void 0)this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null;if(e.clearcoatNormalScale!==void 0)this.clearcoatNormalScale=new K().fromArray(e.clearcoatNormalScale);if(e.diffuseRoughnessMap!==void 0)this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null;if(e.iridescenceMap!==void 0)this.iridescenceMap=t[e.iridescenceMap]||null;if(e.iridescenceThicknessMap!==void 0)this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null;if(e.transmissionMap!==void 0)this.transmissionMap=t[e.transmissionMap]||null;if(e.thicknessMap!==void 0)this.thicknessMap=t[e.thicknessMap]||null;if(e.anisotropyMap!==void 0)this.anisotropyMap=t[e.anisotropyMap]||null;if(e.sheenColorMap!==void 0)this.sheenColorMap=t[e.sheenColorMap]||null;if(e.sheenRoughnessMap!==void 0)this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null;return this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let r=t.length;i=Array(r);for(let n=0;n!==r;++n)i[n]=t[n].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){if(e===!0)this.version++}}var wr=new w,ql=new w,Ca=new w,Pa=new w;class pr{constructor(e=new w,t=new w(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,wr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);if(i<0)return t.copy(this.origin);return t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=wr.subVectors(e,this.origin).dot(this.direction);if(t<0)return this.origin.distanceToSquared(e);return wr.copy(this.origin).addScaledVector(this.direction,t),wr.distanceToSquared(e)}distanceSqToSegment(e,t,i,r){ql.copy(e).add(t).multiplyScalar(0.5),Ca.copy(t).sub(e).normalize(),Pa.copy(this.origin).sub(ql);let n=e.distanceTo(t)*0.5,s=-this.direction.dot(Ca),o=Pa.dot(this.direction),a=-Pa.dot(Ca),l=Pa.lengthSq(),c=Math.abs(1-s*s),f,u,h,d;if(c>0)if(f=s*a-o,u=s*o-a,d=n*c,f>=0)if(u>=-d)if(u<=d){let x=1/c;f*=x,u*=x,h=f*(f+s*u+2*o)+u*(s*f+u+2*a)+l}else u=n,f=Math.max(0,-(s*u+o)),h=-f*f+u*(u+2*a)+l;else u=-n,f=Math.max(0,-(s*u+o)),h=-f*f+u*(u+2*a)+l;else if(u<=-d)f=Math.max(0,-(-s*n+o)),u=f>0?-n:Math.min(Math.max(-n,-a),n),h=-f*f+u*(u+2*a)+l;else if(u<=d)f=0,u=Math.min(Math.max(-n,-a),n),h=u*(u+2*a)+l;else f=Math.max(0,-(s*n+o)),u=f>0?n:Math.min(Math.max(-n,-a),n),h=-f*f+u*(u+2*a)+l;else u=s>0?-n:n,f=Math.max(0,-(s*u+o)),h=-f*f+u*(u+2*a)+l;if(i)i.copy(this.origin).addScaledVector(this.direction,f);if(r)r.copy(ql).addScaledVector(Ca,u);return h}intersectSphere(e,t){if(e.radius<0)return null;wr.subVectors(e.center,this.origin);let i=wr.dot(this.direction),r=wr.dot(wr)-i*i,n=e.radius*e.radius;if(r>n)return null;let s=Math.sqrt(n-r),o=i-s,a=i+s;if(a<0)return null;if(o<0)return this.at(a,t);return this.at(o,t)}intersectsSphere(e){if(e.radius<0)return!1;return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0){if(e.distanceToPoint(this.origin)===0)return 0;return null}let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);if(i===null)return null;return this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);if(t===0)return!0;if(e.normal.dot(this.direction)*t<0)return!0;return!1}intersectBox(e,t){let i,r,n,s,o,a,l=1/this.direction.x,c=1/this.direction.y,f=1/this.direction.z,u=this.origin;if(l>=0)i=(e.min.x-u.x)*l,r=(e.max.x-u.x)*l;else i=(e.max.x-u.x)*l,r=(e.min.x-u.x)*l;if(c>=0)n=(e.min.y-u.y)*c,s=(e.max.y-u.y)*c;else n=(e.max.y-u.y)*c,s=(e.min.y-u.y)*c;if(i>s||n>r)return null;if(n>i||isNaN(i))i=n;if(s<r||isNaN(r))r=s;if(f>=0)o=(e.min.z-u.z)*f,a=(e.max.z-u.z)*f;else o=(e.max.z-u.z)*f,a=(e.min.z-u.z)*f;if(i>a||o>r)return null;if(o>i||i!==i)i=o;if(a<r||r!==r)r=a;if(r<0)return null;return this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,wr)!==null}intersectTriangle(e,t,i,r,n){let s=this.origin,o=this.direction,{x:a,y:l,z:c}=o,f=e.x-s.x,u=e.y-s.y,h=e.z-s.z,d=t.x-s.x,x=t.y-s.y,M=t.z-s.z,p=i.x-s.x,m=i.y-s.y,b=i.z-s.z,T=Math.abs(a),S=Math.abs(l),A=Math.abs(c),C,g,y,P,k,I,H,re,R,J,te,G;if(T>=S&&T>=A)if(y=a,I=f,R=d,G=p,a>=0)C=l,g=c,P=u,k=h,H=x,re=M,J=m,te=b;else C=c,g=l,P=h,k=u,H=M,re=x,J=b,te=m;else if(S>=A)if(y=l,I=u,R=x,G=m,l>=0)C=c,g=a,P=h,k=f,H=M,re=d,J=b,te=p;else C=a,g=c,P=f,k=h,H=d,re=M,J=p,te=b;else if(y=c,I=h,R=M,G=b,c>=0)C=a,g=l,P=f,k=u,H=d,re=x,J=p,te=m;else C=l,g=a,P=u,k=f,H=x,re=d,J=m,te=p;if(y===0)return null;let pe=C/y,Q=g/y,ee=1/y,ce=P-pe*I,De=k-Q*I,q=H-pe*R,he=re-Q*R,Ue=J-pe*G,Pe=te-Q*G,qe=Ue*he-Pe*q,Ae=ce*Pe-De*Ue,ft=q*De-he*ce;if(r){if(qe<0||Ae<0||ft<0)return null}else if((qe<0||Ae<0||ft<0)&&(qe>0||Ae>0||ft>0))return null;let it=qe+Ae+ft;if(it===0)return null;let Ze=ee*(qe*I+Ae*R+ft*G);if(it>0?Ze<0:Ze>0)return null;return this.at(Ze/it,n)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Xt extends Dt{constructor(e){super();this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new fe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _i,this.combine=en,this.reflectivity=1,this.refractionRatio=0.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}var Nh=new Xe,gn=new pr,Ia=new $t,Uh=new w,La=new w,Da=new w,Na=new w,Yl=new w,Ua=new w,Fh=new w,Fa=new w;class je extends rt{constructor(e=new ke,t=new Xt){super();this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){if(super.copy(e,t),e.morphTargetInfluences!==void 0)this.morphTargetInfluences=e.morphTargetInfluences.slice();else this.morphTargetInfluences=void 0;if(e.morphTargetDictionary!==void 0)this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary);else this.morphTargetDictionary=void 0;return this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let n=0,s=r.length;n<s;n++){let o=r[n].name||String(n);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=n}}}}getVertexPosition(e,t){let i=this.geometry,r=i.attributes.position,n=i.morphAttributes.position,s=i.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(n&&o){Ua.set(0,0,0);for(let a=0,l=n.length;a<l;a++){let c=o[a],f=n[a];if(c===0)continue;if(Yl.fromBufferAttribute(f,e),s)Ua.addScaledVector(Yl,c);else Ua.addScaledVector(Yl.sub(t),c)}t.add(Ua)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,r=this.material,n=this.matrixWorld;if(r===void 0)return;if(i.boundingSphere===null)i.computeBoundingSphere();if(Ia.copy(i.boundingSphere),Ia.applyMatrix4(n),gn.copy(e.ray).recast(e.near),Ia.containsPoint(gn.origin)===!1){if(gn.intersectSphere(Ia,Uh)===null)return;if(gn.origin.distanceToSquared(Uh)>(e.far-e.near)**2)return}if(Nh.copy(n).invert(),gn.copy(e.ray).applyMatrix4(Nh),i.boundingBox!==null){if(gn.intersectsBox(i.boundingBox)===!1)return}this._computeIntersections(e,t,gn)}_computeIntersections(e,t,i){let r,n=this.geometry,s=this.material,o=n.index,a=n.attributes.position,l=n.attributes.uv,c=n.attributes.uv1,f=n.attributes.normal,{groups:u,drawRange:h}=n;if(o!==null)if(Array.isArray(s))for(let d=0,x=u.length;d<x;d++){let M=u[d],p=s[M.materialIndex],m=Math.max(M.start,h.start),b=Math.min(o.count,Math.min(M.start+M.count,h.start+h.count));for(let T=m,S=b;T<S;T+=3){let A=o.getX(T),C=o.getX(T+1),g=o.getX(T+2);if(r=Ba(this,p,e,i,l,c,f,A,C,g),r)r.faceIndex=Math.floor(T/3),r.face.materialIndex=M.materialIndex,t.push(r)}}else{let d=Math.max(0,h.start),x=Math.min(o.count,h.start+h.count);for(let M=d,p=x;M<p;M+=3){let m=o.getX(M),b=o.getX(M+1),T=o.getX(M+2);if(r=Ba(this,s,e,i,l,c,f,m,b,T),r)r.faceIndex=Math.floor(M/3),t.push(r)}}else if(a!==void 0)if(Array.isArray(s))for(let d=0,x=u.length;d<x;d++){let M=u[d],p=s[M.materialIndex],m=Math.max(M.start,h.start),b=Math.min(a.count,Math.min(M.start+M.count,h.start+h.count));for(let T=m,S=b;T<S;T+=3){let A=T,C=T+1,g=T+2;if(r=Ba(this,p,e,i,l,c,f,A,C,g),r)r.faceIndex=Math.floor(T/3),r.face.materialIndex=M.materialIndex,t.push(r)}}else{let d=Math.max(0,h.start),x=Math.min(a.count,h.start+h.count);for(let M=d,p=x;M<p;M+=3){let m=M,b=M+1,T=M+2;if(r=Ba(this,s,e,i,l,c,f,m,b,T),r)r.faceIndex=Math.floor(M/3),t.push(r)}}}}function Cm(e,t,i,r,n,s,o,a){let l;if(t.side===Lt)l=r.intersectTriangle(o,s,n,!0,a);else l=r.intersectTriangle(n,s,o,t.side===Hi,a);if(l===null)return null;Fa.copy(a),Fa.applyMatrix4(e.matrixWorld);let c=i.ray.origin.distanceTo(Fa);if(c<i.near||c>i.far)return null;return{distance:c,point:Fa.clone(),object:e}}function Ba(e,t,i,r,n,s,o,a,l,c){e.getVertexPosition(a,La),e.getVertexPosition(l,Da),e.getVertexPosition(c,Na);let f=Cm(e,t,i,r,La,Da,Na,Fh);if(f){let u=new w;if(Ei.getBarycoord(Fh,La,Da,Na,u),n)f.uv=Ei.getInterpolatedAttribute(n,a,l,c,u,new K);if(s)f.uv1=Ei.getInterpolatedAttribute(s,a,l,c,u,new K);if(o){if(f.normal=Ei.getInterpolatedAttribute(o,a,l,c,u,new w),f.normal.dot(r.direction)>0)f.normal.multiplyScalar(-1)}let h={a,b:l,c,normal:new w,materialIndex:0};Ei.getNormal(La,Da,Na,h.normal),f.face=h,f.barycoord=u}return f}class mr extends vt{constructor(e=null,t=1,i=1,r,n,s,o,a,l=It,c=It,f,u){super(null,s,o,a,l,c,r,n,f,u);this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class xn extends Zt{constructor(e,t,i,r=1){super(e,t,i);this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}var ds=new Xe,Oh=new Xe,Oa=[],zh=new yi,Pm=new Xe,bo=new je,To=new $t;class Eo extends je{constructor(e,t,i){super(e,t);this.isInstancedMesh=!0,this.instanceMatrix=new xn(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,Pm)}computeBoundingBox(){let e=this.geometry,t=this.count;if(this.boundingBox===null)this.boundingBox=new yi;if(e.boundingBox===null)e.computeBoundingBox();this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,ds),zh.copy(e.boundingBox).applyMatrix4(ds),this.boundingBox.union(zh)}computeBoundingSphere(){let e=this.geometry,t=this.count;if(this.boundingSphere===null)this.boundingSphere=new $t;if(e.boundingSphere===null)e.computeBoundingSphere();this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,ds),To.copy(e.boundingSphere).applyMatrix4(ds),this.boundingSphere.union(To)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){if(this.instanceColor===null)return t.setRGB(1,1,1);else return t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,r=this.morphTexture.source.data.data,n=i.length+1,s=e*n+1;for(let o=0;o<i.length;o++)i[o]=r[s+o]}raycast(e,t){let i=this.matrixWorld,r=this.count;if(bo.geometry=this.geometry,bo.material=this.material,bo.material===void 0)return;if(this.boundingSphere===null)this.computeBoundingSphere();if(To.copy(this.boundingSphere),To.applyMatrix4(i),e.ray.intersectsSphere(To)===!1)return;for(let n=0;n<r;n++){this.getMatrixAt(n,ds),Oh.multiplyMatrices(i,ds),bo.matrixWorld=Oh,bo.raycast(e,Oa);for(let s=0,o=Oa.length;s<o;s++){let a=Oa[s];a.instanceId=n,a.object=this,t.push(a)}Oa.length=0}}setColorAt(e,t){if(this.instanceColor===null)this.instanceColor=new xn(new Float32Array(this.instanceMatrix.count*3).fill(1),3);return t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let i=t.morphTargetInfluences,r=i.length+1;if(this.morphTexture===null)this.morphTexture=new mr(new Float32Array(r*this.count),r,this.count,Xn,Wt);let n=this.morphTexture.source.data.data,s=0;for(let l=0;l<i.length;l++)s+=i[l];let o=this.geometry.morphTargetsRelative?1:1-s,a=r*e;return n[a]=o,n.set(i,a+1),this}updateMorphTargets(){}dispose(){if(super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null)this.instanceColor.dispose();if(this.morphTexture!==null)this.morphTexture.dispose(),this.morphTexture=null}}var _n=new $t,Im=new K(0.5,0.5),za=new w;class Ki{constructor(e=new wi,t=new wi,i=new wi,r=new wi,n=new wi,s=new wi){this.planes=[e,t,i,r,n,s]}set(e,t,i,r,n,s){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(n),o[5].copy(s),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=oi,i=!1){let r=this.planes,n=e.elements,s=n[0],o=n[1],a=n[2],l=n[3],c=n[4],f=n[5],u=n[6],h=n[7],d=n[8],x=n[9],M=n[10],p=n[11],m=n[12],b=n[13],T=n[14],S=n[15];if(r[0].setComponents(l-s,h-c,p-d,S-m).normalize(),r[1].setComponents(l+s,h+c,p+d,S+m).normalize(),r[2].setComponents(l+o,h+f,p+x,S+b).normalize(),r[3].setComponents(l-o,h-f,p-x,S-b).normalize(),i)r[4].setComponents(a,u,M,T).normalize(),r[5].setComponents(l-a,h-u,p-M,S-T).normalize();else if(r[4].setComponents(l-a,h-u,p-M,S-T).normalize(),t===oi)r[5].setComponents(l+a,h+u,p+M,S+T).normalize();else if(t===fr)r[5].setComponents(a,u,M,T).normalize();else throw Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0){if(e.boundingSphere===null)e.computeBoundingSphere();_n.copy(e.boundingSphere).applyMatrix4(e.matrixWorld)}else{let t=e.geometry;if(t.boundingSphere===null)t.computeBoundingSphere();_n.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(_n)}intersectsSprite(e){_n.center.set(0,0,0);let t=Im.distanceTo(e.center);return _n.radius=0.7071067811865476+t,_n.applyMatrix4(e.matrixWorld),this.intersectsSphere(_n)}intersectsSphere(e){let t=this.planes,i=e.center,r=-e.radius;for(let n=0;n<6;n++)if(t[n].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let r=t[i];if(za.x=r.normal.x>0?e.max.x:e.min.x,za.y=r.normal.y>0?e.max.y:e.min.y,za.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(za)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}var Gh=new Xe;class ps{constructor(){this.coordinateSystem=oi,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,i=this._frustums;for(let r=0;r<t.length;r++){let n=t[r];if(Gh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),i[r]===void 0)i[r]=new Ki;i[r].setFromProjectionMatrix(Gh,n.coordinateSystem,n.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,i=e._frustums;for(let r=0;r<e._count;r++){if(t[r]===void 0)t[r]=new Ki;t[r].copy(i[r])}return this._count=e._count,this}clone(){return new ps().copy(this)}}class fi extends Dt{constructor(e){super();this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new fe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}var ka=new w,Ha=new w,Vh=new Xe,wo=new pr,Ga=new $t,Zl=new w,kh=new w;class Ar extends rt{constructor(e=new ke,t=new fi){super();this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){if(super.copy(e,t),e.morphTargetInfluences!==void 0)this.morphTargetInfluences=e.morphTargetInfluences.slice();else this.morphTargetInfluences=void 0;if(e.morphTargetDictionary!==void 0)this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary);else this.morphTargetDictionary=void 0;return this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let r=1,n=t.count;r<n;r++)ka.fromBufferAttribute(t,r-1),Ha.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=ka.distanceTo(Ha);e.setAttribute("lineDistance",new Be(i,1))}else Se("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,r=this.matrixWorld,n=e.params.Line.threshold,s=i.drawRange;if(i.boundingSphere===null)i.computeBoundingSphere();if(Ga.copy(i.boundingSphere),Ga.applyMatrix4(r),Ga.radius+=n,e.ray.intersectsSphere(Ga)===!1)return;Vh.copy(r).invert(),wo.copy(e.ray).applyMatrix4(Vh);let o=n/((this.scale.x+this.scale.y+this.scale.z)/3),a=o*o,l=this.isLineSegments?2:1,c=i.index,u=i.attributes.position;if(c!==null){let h=Math.max(0,s.start),d=Math.min(c.count,s.start+s.count);for(let x=h,M=d-1;x<M;x+=l){let p=c.getX(x),m=c.getX(x+1),b=Va(this,e,wo,a,p,m,x);if(b)t.push(b)}if(this.isLineLoop){let x=c.getX(d-1),M=c.getX(h),p=Va(this,e,wo,a,x,M,d-1);if(p)t.push(p)}}else{let h=Math.max(0,s.start),d=Math.min(u.count,s.start+s.count);for(let x=h,M=d-1;x<M;x+=l){let p=Va(this,e,wo,a,x,x+1,x);if(p)t.push(p)}if(this.isLineLoop){let x=Va(this,e,wo,a,d-1,h,d-1);if(x)t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let n=0,s=r.length;n<s;n++){let o=r[n].name||String(n);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=n}}}}}function Va(e,t,i,r,n,s,o){let a=e.geometry.attributes.position;if(ka.fromBufferAttribute(a,n),Ha.fromBufferAttribute(a,s),i.distanceSqToSegment(ka,Ha,Zl,kh)>r)return;Zl.applyMatrix4(e.matrixWorld);let c=t.ray.origin.distanceTo(Zl);if(c<t.near||c>t.far)return;return{distance:c,point:kh.clone().applyMatrix4(e.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:e}}var Hh=new w,Wh=new w;class Ii extends Ar{constructor(e,t){super(e,t);this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let r=0,n=t.count;r<n;r+=2)Hh.fromBufferAttribute(t,r),Wh.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Hh.distanceTo(Wh);e.setAttribute("lineDistance",new Be(i,1))}else Se("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class vn extends Dt{constructor(e){super();this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new fe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}var Xh=new Xe,Jl=new pr,Wa=new $t,Xa=new w;class Ao extends rt{constructor(e=new ke,t=new vn){super();this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){if(super.copy(e,t),e.morphTargetInfluences!==void 0)this.morphTargetInfluences=e.morphTargetInfluences.slice();else this.morphTargetInfluences=void 0;if(e.morphTargetDictionary!==void 0)this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary);else this.morphTargetDictionary=void 0;return this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,r=this.matrixWorld,n=e.params.Points.threshold,s=i.drawRange;if(i.boundingSphere===null)i.computeBoundingSphere();if(Wa.copy(i.boundingSphere),Wa.applyMatrix4(r),Wa.radius+=n,e.ray.intersectsSphere(Wa)===!1)return;Xh.copy(r).invert(),Jl.copy(e.ray).applyMatrix4(Xh);let o=n/((this.scale.x+this.scale.y+this.scale.z)/3),a=o*o,l=i.index,f=i.attributes.position;if(l!==null){let u=Math.max(0,s.start),h=Math.min(l.count,s.start+s.count);for(let d=u,x=h;d<x;d++){let M=l.getX(d);Xa.fromBufferAttribute(f,M),qh(Xa,M,a,r,e,t,this)}}else{let u=Math.max(0,s.start),h=Math.min(f.count,s.start+s.count);for(let d=u,x=h;d<x;d++)Xa.fromBufferAttribute(f,d),qh(Xa,d,a,r,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let n=0,s=r.length;n<s;n++){let o=r[n].name||String(n);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=n}}}}}function qh(e,t,i,r,n,s,o){let a=Jl.distanceSqToPoint(e);if(a<i){let l=new w;Jl.closestPointToPoint(e,l),l.applyMatrix4(r);let c=n.ray.origin.distanceTo(l);if(c<n.near||c>n.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class Vr extends vt{constructor(e=[],t=Xi,i,r,n,s,o,a,l,c){super(e,t,i,r,n,s,o,a,l,c);this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ar extends vt{constructor(e,t,i,r,n,s,o,a,l){super(e,t,i,r,n,s,o,a,l);this.isCanvasTexture=!0,this.needsUpdate=!0}}class zi extends vt{constructor(e,t,i=Kt,r,n,s,o=It,a=It,l,c=Pi,f=1){if(c!==Pi&&c!==Ui)throw Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:e,height:t,depth:f};super(u,r,n,s,o,a,c,i,l);this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new dr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class ms extends zi{constructor(e,t=Kt,i=Xi,r,n,s=It,o=It,a,l=Pi){let c={width:e,height:e,depth:1},f=[c,c,c,c,c,c];super(e,e,t,i,r,n,s,o,a,l);this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class gs extends vt{constructor(e=null){super();this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Li extends ke{constructor(e=1,t=1,i=1,r=1,n=1,s=1){super();this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:n,depthSegments:s};let o=this;r=Math.floor(r),n=Math.floor(n),s=Math.floor(s);let a=[],l=[],c=[],f=[],u=0,h=0;d("z","y","x",-1,-1,i,t,e,s,n,0),d("z","y","x",1,-1,i,t,-e,s,n,1),d("x","z","y",1,1,e,i,t,r,s,2),d("x","z","y",1,-1,e,i,-t,r,s,3),d("x","y","z",1,-1,e,t,i,r,n,4),d("x","y","z",-1,-1,e,t,-i,r,n,5),this.setIndex(a),this.setAttribute("position",new Be(l,3)),this.setAttribute("normal",new Be(c,3)),this.setAttribute("uv",new Be(f,2));function d(x,M,p,m,b,T,S,A,C,g,y){let P=T/C,k=S/g,I=T/2,H=S/2,re=A/2,R=C+1,J=g+1,te=0,G=0,pe=new w;for(let Q=0;Q<J;Q++){let ee=Q*k-H;for(let ce=0;ce<R;ce++){let De=ce*P-I;pe[x]=De*m,pe[M]=ee*b,pe[p]=re,l.push(pe.x,pe.y,pe.z),pe[x]=0,pe[M]=0,pe[p]=A>0?1:-1,c.push(pe.x,pe.y,pe.z),f.push(ce/C),f.push(1-Q/g),te+=1}}for(let Q=0;Q<g;Q++)for(let ee=0;ee<C;ee++){let ce=u+ee+R*Q,De=u+ee+R*(Q+1),q=u+(ee+1)+R*(Q+1),he=u+(ee+1)+R*Q;a.push(ce,De,he),a.push(De,q,he),G+=6}o.addGroup(h,G,y),h+=G,u+=te}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Li(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class qa extends ke{constructor(e=1,t=32,i=0,r=Math.PI*2){super();this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:r},t=Math.max(3,t);let n=[],s=[],o=[],a=[],l=new w,c=new K;s.push(0,0,0),o.push(0,0,1),a.push(0.5,0.5);for(let f=0,u=3;f<=t;f++,u+=3){let h=i+f/t*r;l.x=e*Math.cos(h),l.y=e*Math.sin(h),s.push(l.x,l.y,l.z),o.push(0,0,1),c.x=(s[u]/e+1)/2,c.y=(s[u+1]/e+1)/2,a.push(c.x,c.y)}for(let f=1;f<=t;f++)n.push(f,f+1,0);this.setIndex(n),this.setAttribute("position",new Be(s,3)),this.setAttribute("normal",new Be(o,3)),this.setAttribute("uv",new Be(a,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qa(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Ro extends ke{constructor(e=1,t=1,i=1,r=32,n=1,s=!1,o=0,a=Math.PI*2){super();this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:n,openEnded:s,thetaStart:o,thetaLength:a};let l=this;r=Math.floor(r),n=Math.floor(n);let c=[],f=[],u=[],h=[],d=0,x=[],M=i/2,p=0;if(m(),s===!1){if(e>0)b(!0);if(t>0)b(!1)}this.setIndex(c),this.setAttribute("position",new Be(f,3)),this.setAttribute("normal",new Be(u,3)),this.setAttribute("uv",new Be(h,2));function m(){let T=new w,S=new w,A=0,C=(t-e)/i;for(let g=0;g<=n;g++){let y=[],P=g/n,k=P*(t-e)+e;for(let I=0;I<=r;I++){let H=I/r,re=H*a+o,R=Math.sin(re),J=Math.cos(re);S.x=k*R,S.y=-P*i+M,S.z=k*J,f.push(S.x,S.y,S.z),T.set(R,C,J).normalize(),u.push(T.x,T.y,T.z),h.push(H,1-P),y.push(d++)}x.push(y)}for(let g=0;g<r;g++)for(let y=0;y<n;y++){let P=x[y][g],k=x[y+1][g],I=x[y+1][g+1],H=x[y][g+1];if(e>0||y!==0)c.push(P,k,H),A+=3;if(t>0||y!==n-1)c.push(k,I,H),A+=3}l.addGroup(p,A,0),p+=A}function b(T){let S=d,A=new K,C=new w,g=0,y=T===!0?e:t,P=T===!0?1:-1;for(let I=1;I<=r;I++)f.push(0,M*P,0),u.push(0,P,0),h.push(0.5,0.5),d++;let k=d;for(let I=0;I<=r;I++){let re=I/r*a+o,R=Math.cos(re),J=Math.sin(re);C.x=y*J,C.y=M*P,C.z=y*R,f.push(C.x,C.y,C.z),u.push(0,P,0),A.x=R*0.5+0.5,A.y=J*0.5*P+0.5,h.push(A.x,A.y),d++}for(let I=0;I<r;I++){let H=S+I,re=k+I;if(T===!0)c.push(re,re+1,H);else c.push(re+1,re,H);g+=3}l.addGroup(p,g,T===!0?1:2),p+=g}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ro(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Vt{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Se("Curve: .getPoint() not implemented.")}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,r=this.getPoint(0),n=0;t.push(0);for(let s=1;s<=e;s++)i=this.getPoint(s/e),n+=i.distanceTo(r),t.push(n),r=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let i=this.getLengths(),r=0,n=i.length,s;if(t)s=t;else s=e*i[n-1];let o=0,a=n-1,l;while(o<=a)if(r=Math.floor(o+(a-o)/2),l=i[r]-s,l<0)o=r+1;else if(l>0)a=r-1;else{a=r;break}if(r=a,i[r]===s)return r/(n-1);let c=i[r],u=i[r+1]-c,h=(s-c)/u;return(r+h)/(n-1)}getTangent(e,t){let r=e-0.0001,n=e+0.0001;if(r<0)r=0;if(n>1)n=1;let s=this.getPoint(r),o=this.getPoint(n),a=t||(s.isVector2?new K:new w);return a.copy(o).sub(s).normalize(),a}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){let i=new w,r=[],n=[],s=[],o=new w,a=new Xe;for(let h=0;h<=e;h++){let d=h/e;r[h]=this.getTangentAt(d,new w)}n[0]=new w,s[0]=new w;let l=Number.MAX_VALUE,c=Math.abs(r[0].x),f=Math.abs(r[0].y),u=Math.abs(r[0].z);if(c<=l)l=c,i.set(1,0,0);if(f<=l)l=f,i.set(0,1,0);if(u<=l)i.set(0,0,1);o.crossVectors(r[0],i).normalize(),n[0].crossVectors(r[0],o),s[0].crossVectors(r[0],n[0]);for(let h=1;h<=e;h++){if(n[h]=n[h-1].clone(),s[h]=s[h-1].clone(),o.crossVectors(r[h-1],r[h]),o.length()>Number.EPSILON){o.normalize();let d=Math.acos($e(r[h-1].dot(r[h]),-1,1));n[h].applyMatrix4(a.makeRotationAxis(o,d))}s[h].crossVectors(r[h],n[h])}if(t===!0){let h=Math.acos($e(n[0].dot(n[e]),-1,1));if(h/=e,r[0].dot(o.crossVectors(n[0],n[e]))>0)h=-h;for(let d=1;d<=e;d++)n[d].applyMatrix4(a.makeRotationAxis(r[d],h*d)),s[d].crossVectors(r[d],n[d])}return{tangents:r,normals:n,binormals:s}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}}class yn extends Vt{constructor(e=0,t=0,i=1,r=1,n=0,s=Math.PI*2,o=!1,a=0){super();this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=r,this.aStartAngle=n,this.aEndAngle=s,this.aClockwise=o,this.aRotation=a}getPoint(e,t=new K){let i=t,r=Math.PI*2,n=this.aEndAngle-this.aStartAngle,s=Math.abs(n)<Number.EPSILON;while(n<0)n+=r;while(n>r)n-=r;if(n<Number.EPSILON)if(s)n=0;else n=r;if(this.aClockwise===!0&&!s)if(n===r)n=-r;else n=n-r;let o=this.aStartAngle+e*n,a=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let c=Math.cos(this.aRotation),f=Math.sin(this.aRotation),u=a-this.aX,h=l-this.aY;a=u*c-h*f+this.aX,l=u*f+h*c+this.aY}return i.set(a,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class $l extends yn{constructor(e,t,i,r,n,s){super(e,t,i,i,r,n,s);this.isArcCurve=!0,this.type="ArcCurve"}}function ic(){let e=0,t=0,i=0,r=0;function n(s,o,a,l){e=s,t=a,i=-3*s+3*o-2*a-l,r=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){n(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,f,u){let h=(o-s)/c-(a-s)/(c+f)+(a-o)/f,d=(a-o)/f-(l-o)/(f+u)+(l-a)/u;h*=f,d*=f,n(o,a,h,d)},calc:function(s){let o=s*s,a=o*s;return e+t*s+i*o+r*a}}}var Yh=new w,Zh=new w,jl=new ic,ec=new ic,tc=new ic;class rc extends Vt{constructor(e=[],t=!1,i="centripetal",r=0.5){super();this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=r}getPoint(e,t=new w){let i=t,r=this.points,n=r.length,s=(n-(this.closed?0:1))*e,o=Math.floor(s),a=s-o;if(this.closed)o+=o>0?0:(Math.floor(Math.abs(o)/n)+1)*n;else if(a===0&&o===n-1)o=n-2,a=1;let l,c;if(this.closed||o>0)l=r[(o-1)%n];else Zh.subVectors(r[0],r[1]).add(r[0]),l=Zh;let f=r[o%n],u=r[(o+1)%n];if(this.closed||o+2<n)c=r[(o+2)%n];else Yh.subVectors(r[n-1],r[n-2]).add(r[n-1]),c=Yh;if(this.curveType==="centripetal"||this.curveType==="chordal"){let h=this.curveType==="chordal"?0.5:0.25,d=Math.pow(l.distanceToSquared(f),h),x=Math.pow(f.distanceToSquared(u),h),M=Math.pow(u.distanceToSquared(c),h);if(x<0.0001)x=1;if(d<0.0001)d=x;if(M<0.0001)M=x;jl.initNonuniformCatmullRom(l.x,f.x,u.x,c.x,d,x,M),ec.initNonuniformCatmullRom(l.y,f.y,u.y,c.y,d,x,M),tc.initNonuniformCatmullRom(l.z,f.z,u.z,c.z,d,x,M)}else if(this.curveType==="catmullrom")jl.initCatmullRom(l.x,f.x,u.x,c.x,this.tension),ec.initCatmullRom(l.y,f.y,u.y,c.y,this.tension),tc.initCatmullRom(l.z,f.z,u.z,c.z,this.tension);return i.set(jl.calc(a),ec.calc(a),tc.calc(a)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(new w().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function nc(e,t,i,r,n){let s=(r-t)*0.5,o=(n-i)*0.5,a=e*e,l=e*a;return(2*i-2*r+s+o)*l+(-3*i+3*r-2*s-o)*a+s*e+i}function Dm(e,t){let i=1-e;return i*i*t}function Nm(e,t){return 2*(1-e)*e*t}function Um(e,t){return e*e*t}function Mn(e,t,i,r){return Dm(e,t)+Nm(e,i)+Um(e,r)}function Fm(e,t){let i=1-e;return i*i*i*t}function Bm(e,t){let i=1-e;return 3*i*i*e*t}function Om(e,t){return 3*(1-e)*e*e*t}function zm(e,t){return e*e*e*t}function Sn(e,t,i,r,n){return Fm(e,t)+Bm(e,i)+Om(e,r)+zm(e,n)}class Co extends Vt{constructor(e=new K,t=new K,i=new K,r=new K){super();this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new K){let i=t,r=this.v0,n=this.v1,s=this.v2,o=this.v3;return i.set(Sn(e,r.x,n.x,s.x,o.x),Sn(e,r.y,n.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class sc extends Vt{constructor(e=new w,t=new w,i=new w,r=new w){super();this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new w){let i=t,r=this.v0,n=this.v1,s=this.v2,o=this.v3;return i.set(Sn(e,r.x,n.x,s.x,o.x),Sn(e,r.y,n.y,s.y,o.y),Sn(e,r.z,n.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Po extends Vt{constructor(e=new K,t=new K){super();this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new K){let i=t;if(e===1)i.copy(this.v2);else i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1);return i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new K){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Io extends Vt{constructor(e=new w,t=new w){super();this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new w){let i=t;if(e===1)i.copy(this.v2);else i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1);return i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new w){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Lo extends Vt{constructor(e=new K,t=new K,i=new K){super();this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new K){let i=t,r=this.v0,n=this.v1,s=this.v2;return i.set(Mn(e,r.x,n.x,s.x),Mn(e,r.y,n.y,s.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Do extends Vt{constructor(e=new w,t=new w,i=new w){super();this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new w){let i=t,r=this.v0,n=this.v1,s=this.v2;return i.set(Mn(e,r.x,n.x,s.x),Mn(e,r.y,n.y,s.y),Mn(e,r.z,n.z,s.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class No extends Vt{constructor(e=[]){super();this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new K){let i=t,r=this.points,n=(r.length-1)*e,s=Math.floor(n),o=n-s,a=r[s===0?s:s-1],l=r[s],c=r[s>r.length-2?r.length-1:s+1],f=r[s>r.length-3?r.length-1:s+2];return i.set(nc(o,a.x,l.x,c.x,f.x),nc(o,a.y,l.y,c.y,f.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(new K().fromArray(r))}return this}}class xs extends Vt{constructor(){super();this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new kr[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),r=this.getCurveLengths(),n=0;while(n<r.length){if(r[n]>=i){let s=r[n]-i,o=this.curves[n],a=o.getLength(),l=a===0?0:1-s/a;return o.getPointAt(l,t)}n++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,r=this.curves.length;i<r;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));if(this.autoClose)t.push(t[0]);return t}getPoints(e=12){let t=[],i;for(let r=0,n=this.curves;r<n.length;r++){let s=n[r],o=s.isEllipseCurve?e*2:s.isLineCurve||s.isLineCurve3?1:s.isSplineCurve?e*s.points.length:e,a=s.getPoints(o);for(let l=0;l<a.length;l++){let c=a[l];if(i&&i.equals(c))continue;t.push(c),i=c}}if(this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0]))t.push(t[0]);return t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this.cacheLengths=null,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let r=e.curves[t];this.curves.push(new kr[r.type]().fromJSON(r))}return this.cacheLengths=null,this}}class _s extends xs{constructor(e){super();if(this.type="Path",this.currentPoint=new K,e)this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new Po(this.currentPoint.clone(),new K(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,r){let n=new Lo(this.currentPoint.clone(),new K(e,t),new K(i,r));return this.curves.push(n),this.currentPoint.set(i,r),this}bezierCurveTo(e,t,i,r,n,s){let o=new Co(this.currentPoint.clone(),new K(e,t),new K(i,r),new K(n,s));return this.curves.push(o),this.currentPoint.set(n,s),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new No(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,r,n,s){let o=this.currentPoint.x,a=this.currentPoint.y;return this.absarc(e+o,t+a,i,r,n,s),this}absarc(e,t,i,r,n,s){return this.absellipse(e,t,i,i,r,n,s),this}ellipse(e,t,i,r,n,s,o,a){let l=this.currentPoint.x,c=this.currentPoint.y;return this.absellipse(e+l,t+c,i,r,n,s,o,a),this}absellipse(e,t,i,r,n,s,o,a){let l=new yn(e,t,i,r,n,s,o,a);if(this.curves.length>0){let f=l.getPoint(0);if(!f.equals(this.currentPoint))this.lineTo(f.x,f.y)}this.curves.push(l);let c=l.getPoint(1);return this.currentPoint.copy(c),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class gr extends _s{constructor(e){super(e);this.uuid=xi(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,r=this.holes.length;i<r;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let r=e.holes[t];this.holes.push(new _s().fromJSON(r))}return this}}function lc(e,t,i=2){let r=t&&t.length,n=r?t[0]*i:e.length,s=Kh(e,0,n,i,!0),o=[];if(!s||s.next===s.prev)return o;let a,l,c;if(r)s=Wm(e,t,s,i);if(e.length>80*i){a=e[0],l=e[1];let f=a,u=l;for(let h=i;h<n;h+=i){let d=e[h],x=e[h+1];if(d<a)a=d;if(x<l)l=x;if(d>f)f=d;if(x>u)u=x}c=Math.max(f-a,u-l),c=c!==0?32767/c:0}return Fo(s,o,i,a,l,c,0),o}function Kh(e,t,i,r,n){let s;if(n===tg(e,t,i,r)>0)for(let o=t;o<i;o+=r)s=Jh(o/r|0,e[o],e[o+1],s);else for(let o=i-r;o>=t;o-=r)s=Jh(o/r|0,e[o],e[o+1],s);if(s&&vs(s,s.next))Oo(s),s=s.next;return s}function bn(e,t){if(!e)return e;if(!t)t=e;let i=e,r;do if(r=!1,!i.steiner&&(vs(i,i.next)||zt(i.prev,i,i.next)===0)){if(Oo(i),i=t=i.prev,i===i.next)break;r=!0}else i=i.next;while(r||i!==t);return t}function Fo(e,t,i,r,n,s,o){if(!e)return;if(!o&&s)Jm(e,r,n,s);let a=e;while(e.prev!==e.next){let l=e.prev,c=e.next;if(s?Vm(e,r,n,s):Gm(e)){t.push(l.i,e.i,c.i),Oo(e),e=c.next,a=c.next;continue}if(e=c,e===a){if(!o)Fo(bn(e),t,i,r,n,s,1);else if(o===1)e=km(bn(e),t),Fo(e,t,i,r,n,s,2);else if(o===2)Hm(e,t,i,r,n,s);break}}}function Gm(e){let t=e.prev,i=e,r=e.next;if(zt(t,i,r)>=0)return!1;let n=t.x,s=i.x,o=r.x,a=t.y,l=i.y,c=r.y,f=Math.min(n,s,o),u=Math.min(a,l,c),h=Math.max(n,s,o),d=Math.max(a,l,c),x=r.next;while(x!==t){if(x.x>=f&&x.x<=h&&x.y>=u&&x.y<=d&&Uo(n,a,s,l,o,c,x.x,x.y)&&zt(x.prev,x,x.next)>=0)return!1;x=x.next}return!0}function Vm(e,t,i,r){let n=e.prev,s=e,o=e.next;if(zt(n,s,o)>=0)return!1;let a=n.x,l=s.x,c=o.x,f=n.y,u=s.y,h=o.y,d=Math.min(a,l,c),x=Math.min(f,u,h),M=Math.max(a,l,c),p=Math.max(f,u,h),m=oc(d,x,t,i,r),b=oc(M,p,t,i,r),{prevZ:T,nextZ:S}=e;while(T&&T.z>=m&&S&&S.z<=b){if(T.x>=d&&T.x<=M&&T.y>=x&&T.y<=p&&T!==n&&T!==o&&Uo(a,f,l,u,c,h,T.x,T.y)&&zt(T.prev,T,T.next)>=0)return!1;if(T=T.prevZ,S.x>=d&&S.x<=M&&S.y>=x&&S.y<=p&&S!==n&&S!==o&&Uo(a,f,l,u,c,h,S.x,S.y)&&zt(S.prev,S,S.next)>=0)return!1;S=S.nextZ}while(T&&T.z>=m){if(T.x>=d&&T.x<=M&&T.y>=x&&T.y<=p&&T!==n&&T!==o&&Uo(a,f,l,u,c,h,T.x,T.y)&&zt(T.prev,T,T.next)>=0)return!1;T=T.prevZ}while(S&&S.z<=b){if(S.x>=d&&S.x<=M&&S.y>=x&&S.y<=p&&S!==n&&S!==o&&Uo(a,f,l,u,c,h,S.x,S.y)&&zt(S.prev,S,S.next)>=0)return!1;S=S.nextZ}return!0}function km(e,t){let i=e;do{let r=i.prev,n=i.next.next;if(!vs(r,n)&&$h(r,i,i.next,n)&&Bo(r,n)&&Bo(n,r))t.push(r.i,i.i,n.i),Oo(i),Oo(i.next),i=e=n;i=i.next}while(i!==e);return bn(i)}function Hm(e,t,i,r,n,s){let o=e;do{let a=o.next.next;while(a!==o.prev){if(o.i!==a.i&&$m(o,a)){let l=jh(o,a);o=bn(o,o.next),l=bn(l,l.next),Fo(o,t,i,r,n,s,0),Fo(l,t,i,r,n,s,0);return}a=a.next}o=o.next}while(o!==e)}function Wm(e,t,i,r){let n=[];for(let s=0,o=t.length;s<o;s++){let a=t[s]*r,l=s<o-1?t[s+1]*r:e.length,c=Kh(e,a,l,r,!1);if(c===c.next)c.steiner=!0;n.push(Qm(c))}n.sort(Xm);for(let s=0;s<n.length;s++)i=qm(n[s],i);return i}function Xm(e,t){let i=e.x-t.x;if(i===0){if(i=e.y-t.y,i===0){let r=(e.next.y-e.y)/(e.next.x-e.x),n=(t.next.y-t.y)/(t.next.x-t.x);i=r-n}}return i}function qm(e,t){let i=Ym(e,t);if(!i)return t;let r=jh(i,e);return bn(r,r.next),bn(i,i.next)}function Ym(e,t){let i=t,{x:r,y:n}=e,s=-1/0,o;if(vs(e,i))return i;do{if(vs(e,i.next))return i.next;else if(n<=i.y&&n>=i.next.y&&i.next.y!==i.y){let u=i.x+(n-i.y)*(i.next.x-i.x)/(i.next.y-i.y);if(u<=r&&u>s){if(s=u,o=i.x<i.next.x?i:i.next,u===r)return o}}i=i.next}while(i!==t);if(!o)return null;let a=o,l=o.x,c=o.y,f=1/0;i=o;do{if(r>=i.x&&i.x>=l&&r!==i.x&&Qh(n<c?r:s,n,l,c,n<c?s:r,n,i.x,i.y)){let u=Math.abs(n-i.y)/(r-i.x);if(Bo(i,e)&&(u<f||u===f&&(i.x>o.x||i.x===o.x&&Zm(o,i))))o=i,f=u}i=i.next}while(i!==a);return o}function Zm(e,t){return zt(e.prev,e,t.prev)<0&&zt(t.next,e,e.next)<0}function Jm(e,t,i,r){let n=e;do{if(n.z===0)n.z=oc(n.x,n.y,t,i,r);n.prevZ=n.prev,n.nextZ=n.next,n=n.next}while(n!==e);n.prevZ.nextZ=null,n.prevZ=null,Km(n)}function Km(e){let t,i=1;do{let r=e,n;e=null;let s=null;t=0;while(r){t++;let o=r,a=0;for(let c=0;c<i;c++)if(a++,o=o.nextZ,!o)break;let l=i;while(a>0||l>0&&o){if(a!==0&&(l===0||!o||r.z<=o.z))n=r,r=r.nextZ,a--;else n=o,o=o.nextZ,l--;if(s)s.nextZ=n;else e=n;n.prevZ=s,s=n}r=o}s.nextZ=null,i*=2}while(t>1);return e}function oc(e,t,i,r,n){return e=(e-i)*n|0,t=(t-r)*n|0,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e|t<<1}function Qm(e){let t=e,i=e;do{if(t.x<i.x||t.x===i.x&&t.y<i.y)i=t;t=t.next}while(t!==e);return i}function Qh(e,t,i,r,n,s,o,a){return(n-o)*(t-a)>=(e-o)*(s-a)&&(e-o)*(r-a)>=(i-o)*(t-a)&&(i-o)*(s-a)>=(n-o)*(r-a)}function Uo(e,t,i,r,n,s,o,a){return!(e===o&&t===a)&&Qh(e,t,i,r,n,s,o,a)}function $m(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!jm(e,t)&&(Bo(e,t)&&Bo(t,e)&&eg(e,t)&&(zt(e.prev,e,t.prev)||zt(e,t.prev,t))||vs(e,t)&&zt(e.prev,e,e.next)>0&&zt(t.prev,t,t.next)>0)}function zt(e,t,i){return(t.y-e.y)*(i.x-t.x)-(t.x-e.x)*(i.y-t.y)}function vs(e,t){return e.x===t.x&&e.y===t.y}function $h(e,t,i,r){let n=Za(zt(e,t,i)),s=Za(zt(e,t,r)),o=Za(zt(i,r,e)),a=Za(zt(i,r,t));if(n!==s&&o!==a)return!0;if(n===0&&Ya(e,i,t))return!0;if(s===0&&Ya(e,r,t))return!0;if(o===0&&Ya(i,e,r))return!0;if(a===0&&Ya(i,t,r))return!0;return!1}function Ya(e,t,i){return t.x<=Math.max(e.x,i.x)&&t.x>=Math.min(e.x,i.x)&&t.y<=Math.max(e.y,i.y)&&t.y>=Math.min(e.y,i.y)}function Za(e){return e>0?1:e<0?-1:0}function jm(e,t){let i=e;do{if(i.i!==e.i&&i.next.i!==e.i&&i.i!==t.i&&i.next.i!==t.i&&$h(i,i.next,e,t))return!0;i=i.next}while(i!==e);return!1}function Bo(e,t){return zt(e.prev,e,e.next)<0?zt(e,t,e.next)>=0&&zt(e,e.prev,t)>=0:zt(e,t,e.prev)<0||zt(e,e.next,t)<0}function eg(e,t){let i=e,r=!1,n=(e.x+t.x)/2,s=(e.y+t.y)/2;do{if(i.y>s!==i.next.y>s&&i.next.y!==i.y&&n<(i.next.x-i.x)*(s-i.y)/(i.next.y-i.y)+i.x)r=!r;i=i.next}while(i!==e);return r}function jh(e,t){let i=ac(e.i,e.x,e.y),r=ac(t.i,t.x,t.y),n=e.next,s=t.prev;return e.next=t,t.prev=e,i.next=n,n.prev=i,r.next=i,i.prev=r,s.next=r,r.prev=s,r}function Jh(e,t,i,r){let n=ac(e,t,i);if(!r)n.prev=n,n.next=n;else n.next=r.next,n.prev=r,r.next.prev=n,r.next=n;return n}function Oo(e){if(e.next.prev=e.prev,e.prev.next=e.next,e.prevZ)e.prevZ.nextZ=e.nextZ;if(e.nextZ)e.nextZ.prevZ=e.prevZ}function ac(e,t,i){return{i:e,x:t,y:i,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function tg(e,t,i,r){let n=0;for(let s=t,o=i-r;s<i;s+=r)n+=(e[o]-e[s])*(e[s+1]+e[o+1]),o=s;return n}class cc{static triangulate(e,t,i=2){return lc(e,t,i)}}class Gi{static area(e){let t=e.length,i=0;for(let r=t-1,n=0;n<t;r=n++)i+=e[r].x*e[n].y-e[n].x*e[r].y;return i*0.5}static isClockWise(e){return Gi.area(e)<0}static triangulateShape(e,t){let i=[],r=[],n=[];eu(e),tu(i,e);let s=e.length;t.forEach(eu);for(let a=0;a<t.length;a++)r.push(s),s+=t[a].length,tu(i,t[a]);let o=cc.triangulate(i,r);for(let a=0;a<o.length;a+=3)n.push(o.slice(a,a+3));return n}}function eu(e){let t=e.length;if(t>2&&e[t-1].equals(e[0]))e.pop()}function tu(e,t){for(let i=0;i<t.length;i++)e.push(t[i].x),e.push(t[i].y)}class Ja extends ke{constructor(e=new gr([new K(0.5,0.5),new K(-0.5,0.5),new K(-0.5,-0.5),new K(0.5,-0.5)]),t={}){super();this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let i=this,r=[],n=[];for(let o=0,a=e.length;o<a;o++){let l=e[o];s(l)}this.setAttribute("position",new Be(r,3)),this.setAttribute("uv",new Be(n,2)),this.computeVertexNormals();function s(o){let a=[],l=t.curveSegments!==void 0?t.curveSegments:12,c=t.steps!==void 0?t.steps:1,f=t.depth!==void 0?t.depth:1,u=t.bevelEnabled!==void 0?t.bevelEnabled:!0,h=t.bevelThickness!==void 0?t.bevelThickness:0.2,d=t.bevelSize!==void 0?t.bevelSize:h-0.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,M=t.bevelSegments!==void 0?t.bevelSegments:3,p=t.extrudePath,m=t.UVGenerator!==void 0?t.UVGenerator:ig,b,T=!1,S,A,C,g;if(p){b=p.getSpacedPoints(c),T=!0,u=!1;let se=p.isCatmullRomCurve3?p.closed:!1;S=p.computeFrenetFrames(c,se),A=new w,C=new w,g=new w}if(!u)M=0,h=0,d=0,x=0;let y=o.extractPoints(l),{shape:P,holes:k}=y;if(!Gi.isClockWise(P)){P=P.reverse();for(let se=0,me=k.length;se<me;se++){let _e=k[se];if(Gi.isClockWise(_e))k[se]=_e.reverse()}}function H(se){let be=se[0];for(let Re=1;Re<=se.length;Re++){let Ve=Re%se.length,Ge=se[Ve],et=Ge.x-be.x,ot=Ge.y-be.y,gt=et*et+ot*ot,U=Math.max(Math.abs(Ge.x),Math.abs(Ge.y),Math.abs(be.x),Math.abs(be.y)),Ut=0.000000000000000000010000000000000001*U*U;if(gt<=Ut){se.splice(Ve,1),Re--;continue}be=Ge}}H(P),k.forEach(H);let re=k.length,R=P;for(let se=0;se<re;se++){let me=k[se];P=P.concat(me)}function J(se,me,_e){if(!me)Fe("ExtrudeGeometry: vec does not exist");return se.clone().addScaledVector(me,_e)}let te=P.length;function G(se,me,_e){let be,Re,Ve,Ge=se.x-me.x,et=se.y-me.y,ot=_e.x-se.x,gt=_e.y-se.y,U=Ge*Ge+et*et,Ut=Ge*gt-et*ot;if(Math.abs(Ut)>Number.EPSILON){let Qe=Math.sqrt(U),At=Math.sqrt(ot*ot+gt*gt),we=me.x-et/Qe,dt=me.y+Ge/Qe,Je=_e.x-gt/At,Ke=_e.y+ot/At,Rt=((Je-we)*gt-(Ke-dt)*ot)/(Ge*gt-et*ot);be=we+Ge*Rt-se.x,Re=dt+et*Rt-se.y;let E=be*be+Re*Re;if(E<=2)return new K(be,Re);else Ve=Math.sqrt(E/2)}else{let Qe=!1;if(Ge>Number.EPSILON){if(ot>Number.EPSILON)Qe=!0}else if(Ge<-Number.EPSILON){if(ot<-Number.EPSILON)Qe=!0}else if(Math.sign(et)===Math.sign(gt))Qe=!0;if(Qe)be=-et,Re=Ge,Ve=Math.sqrt(U);else be=Ge,Re=et,Ve=Math.sqrt(U/2)}return new K(be/Ve,Re/Ve)}let pe=[];for(let se=0,me=R.length,_e=me-1,be=se+1;se<me;se++,_e++,be++){if(_e===me)_e=0;if(be===me)be=0;pe[se]=G(R[se],R[_e],R[be])}let Q=[],ee,ce=pe.concat();for(let se=0,me=re;se<me;se++){let _e=k[se];ee=[];for(let be=0,Re=_e.length,Ve=Re-1,Ge=be+1;be<Re;be++,Ve++,Ge++){if(Ve===Re)Ve=0;if(Ge===Re)Ge=0;ee[be]=G(_e[be],_e[Ve],_e[Ge])}Q.push(ee),ce=ce.concat(ee)}let De;if(M===0)De=Gi.triangulateShape(R,k);else{let se=[],me=[];for(let _e=0;_e<M;_e++){let be=_e/M,Re=h*Math.cos(be*Math.PI/2),Ve=d*Math.sin(be*Math.PI/2)+x;for(let Ge=0,et=R.length;Ge<et;Ge++){let ot=J(R[Ge],pe[Ge],Ve);if(Ae(ot.x,ot.y,-Re),be===0)se.push(ot)}for(let Ge=0,et=re;Ge<et;Ge++){let ot=k[Ge];ee=Q[Ge];let gt=[];for(let U=0,Ut=ot.length;U<Ut;U++){let Qe=J(ot[U],ee[U],Ve);if(Ae(Qe.x,Qe.y,-Re),be===0)gt.push(Qe)}if(be===0)me.push(gt)}}De=Gi.triangulateShape(se,me)}let q=De.length,he=d+x;for(let se=0;se<te;se++){let me=u?J(P[se],ce[se],he):P[se];if(!T)Ae(me.x,me.y,0);else C.copy(S.normals[0]).multiplyScalar(me.x),A.copy(S.binormals[0]).multiplyScalar(me.y),g.copy(b[0]).add(C).add(A),Ae(g.x,g.y,g.z)}for(let se=1;se<=c;se++)for(let me=0;me<te;me++){let _e=u?J(P[me],ce[me],he):P[me];if(!T)Ae(_e.x,_e.y,f/c*se);else C.copy(S.normals[se]).multiplyScalar(_e.x),A.copy(S.binormals[se]).multiplyScalar(_e.y),g.copy(b[se]).add(C).add(A),Ae(g.x,g.y,g.z)}for(let se=M-1;se>=0;se--){let me=se/M,_e=h*Math.cos(me*Math.PI/2),be=d*Math.sin(me*Math.PI/2)+x;for(let Re=0,Ve=R.length;Re<Ve;Re++){let Ge=J(R[Re],pe[Re],be);Ae(Ge.x,Ge.y,f+_e)}for(let Re=0,Ve=k.length;Re<Ve;Re++){let Ge=k[Re];ee=Q[Re];for(let et=0,ot=Ge.length;et<ot;et++){let gt=J(Ge[et],ee[et],be);if(!T)Ae(gt.x,gt.y,f+_e);else Ae(gt.x,gt.y+b[c-1].y,b[c-1].x+_e)}}}Ue(),Pe();function Ue(){let se=r.length/3;if(u){let me=0,_e=te*me;for(let be=0;be<q;be++){let Re=De[be];ft(Re[2]+_e,Re[1]+_e,Re[0]+_e)}me=c+M*2,_e=te*me;for(let be=0;be<q;be++){let Re=De[be];ft(Re[0]+_e,Re[1]+_e,Re[2]+_e)}}else{for(let me=0;me<q;me++){let _e=De[me];ft(_e[2],_e[1],_e[0])}for(let me=0;me<q;me++){let _e=De[me];ft(_e[0]+te*c,_e[1]+te*c,_e[2]+te*c)}}i.addGroup(se,r.length/3-se,0)}function Pe(){let se=r.length/3,me=0;qe(R,me),me+=R.length;for(let _e=0,be=k.length;_e<be;_e++){let Re=k[_e];qe(Re,me),me+=Re.length}i.addGroup(se,r.length/3-se,1)}function qe(se,me){let _e=se.length;while(--_e>=0){let be=_e,Re=_e-1;if(Re<0)Re=se.length-1;for(let Ve=0,Ge=c+M*2;Ve<Ge;Ve++){let et=te*Ve,ot=te*(Ve+1),gt=me+be+et,U=me+Re+et,Ut=me+Re+ot,Qe=me+be+ot;it(gt,U,Ut,Qe)}}}function Ae(se,me,_e){a.push(se),a.push(me),a.push(_e)}function ft(se,me,_e){Ze(se),Ze(me),Ze(_e);let be=r.length/3,Re=m.generateTopUV(i,r,be-3,be-2,be-1);at(Re[0]),at(Re[1]),at(Re[2])}function it(se,me,_e,be){Ze(se),Ze(me),Ze(be),Ze(me),Ze(_e),Ze(be);let Re=r.length/3,Ve=m.generateSideWallUV(i,r,Re-6,Re-3,Re-2,Re-1);at(Ve[0]),at(Ve[1]),at(Ve[3]),at(Ve[1]),at(Ve[2]),at(Ve[3])}function Ze(se){r.push(a[se*3+0]),r.push(a[se*3+1]),r.push(a[se*3+2])}function at(se){n.push(se.x),n.push(se.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return rg(t,i,e)}static fromJSON(e,t){let i=[];for(let n=0,s=e.shapes.length;n<s;n++){let o=t[e.shapes[n]];i.push(o)}let r=e.options.extrudePath;if(r!==void 0)e.options.extrudePath=new kr[r.type]().fromJSON(r);return new Ja(i,e.options)}}var ig={generateTopUV:function(e,t,i,r,n){let s=t[i*3],o=t[i*3+1],a=t[r*3],l=t[r*3+1],c=t[n*3],f=t[n*3+1];return[new K(s,o),new K(a,l),new K(c,f)]},generateSideWallUV:function(e,t,i,r,n,s){let o=t[i*3],a=t[i*3+1],l=t[i*3+2],c=t[r*3],f=t[r*3+1],u=t[r*3+2],h=t[n*3],d=t[n*3+1],x=t[n*3+2],M=t[s*3],p=t[s*3+1],m=t[s*3+2];if(Math.abs(a-f)<Math.abs(o-c))return[new K(o,1-l),new K(c,1-u),new K(h,1-x),new K(M,1-m)];else return[new K(a,1-l),new K(f,1-u),new K(d,1-x),new K(p,1-m)]}};function rg(e,t,i){if(i.shapes=[],Array.isArray(e))for(let r=0,n=e.length;r<n;r++){let s=e[r];i.shapes.push(s.uuid)}else i.shapes.push(e.uuid);if(i.options=Object.assign({},t),t.extrudePath!==void 0)i.options.extrudePath=t.extrudePath.toJSON();return i}class lr extends ke{constructor(e=1,t=1,i=1,r=1){super();this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};let n=e/2,s=t/2,o=Math.floor(i),a=Math.floor(r),l=o+1,c=a+1,f=e/o,u=t/a,h=[],d=[],x=[],M=[];for(let p=0;p<c;p++){let m=p*u-s;for(let b=0;b<l;b++){let T=b*f-n;d.push(T,-m,0),x.push(0,0,1),M.push(b/o),M.push(1-p/a)}}for(let p=0;p<a;p++)for(let m=0;m<o;m++){let b=m+l*p,T=m+l*(p+1),S=m+1+l*(p+1),A=m+1+l*p;h.push(b,T,A),h.push(T,S,A)}this.setIndex(h),this.setAttribute("position",new Be(d,3)),this.setAttribute("normal",new Be(x,3)),this.setAttribute("uv",new Be(M,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new lr(e.width,e.height,e.widthSegments,e.heightSegments)}}class Ka extends ke{constructor(e=new gr([new K(0,0.5),new K(-0.5,-0.5),new K(0.5,-0.5)]),t=12){super();this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let i=[],r=[],n=[],s=[],o=0,a=0;if(Array.isArray(e)===!1)l(e);else for(let c=0;c<e.length;c++)l(e[c]),this.addGroup(o,a,c),o+=a,a=0;this.setIndex(i),this.setAttribute("position",new Be(r,3)),this.setAttribute("normal",new Be(n,3)),this.setAttribute("uv",new Be(s,2));function l(c){let f=r.length/3,u=c.extractPoints(t),{shape:h,holes:d}=u;if(Gi.isClockWise(h)===!1)h=h.reverse();for(let M=0,p=d.length;M<p;M++){let m=d[M];if(Gi.isClockWise(m)===!0)d[M]=m.reverse()}let x=Gi.triangulateShape(h,d);for(let M=0,p=d.length;M<p;M++){let m=d[M];h=h.concat(m)}for(let M=0,p=h.length;M<p;M++){let m=h[M];r.push(m.x,m.y,0),n.push(0,0,1),s.push(m.x,m.y)}for(let M=0,p=x.length;M<p;M++){let m=x[M],b=m[0]+f,T=m[1]+f,S=m[2]+f;i.push(b,T,S),a+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return ng(t,e)}static fromJSON(e,t){let i=[];for(let r=0,n=e.shapes.length;r<n;r++){let s=t[e.shapes[r]];i.push(s)}return new Ka(i,e.curveSegments)}}function ng(e,t){if(t.shapes=[],Array.isArray(e))for(let i=0,r=e.length;i<r;i++){let n=e[i];t.shapes.push(n.uuid)}else t.shapes.push(e.uuid);return t}class Qa extends ke{constructor(e=1,t=0.4,i=12,r=48,n=Math.PI*2,s=0,o=Math.PI*2){super();this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:r,arc:n,thetaStart:s,thetaLength:o},i=Math.floor(i),r=Math.floor(r);let a=[],l=[],c=[],f=[],u=new w,h=new w,d=new w;for(let x=0;x<=i;x++){let M=s+x/i*o;for(let p=0;p<=r;p++){let m=p/r*n;h.x=(e+t*Math.cos(M))*Math.cos(m),h.y=(e+t*Math.cos(M))*Math.sin(m),h.z=t*Math.sin(M),l.push(h.x,h.y,h.z),u.x=e*Math.cos(m),u.y=e*Math.sin(m),d.subVectors(h,u).normalize(),c.push(d.x,d.y,d.z),f.push(p/r),f.push(x/i)}}for(let x=1;x<=i;x++)for(let M=1;M<=r;M++){let p=(r+1)*x+M-1,m=(r+1)*(x-1)+M-1,b=(r+1)*(x-1)+M,T=(r+1)*x+M;a.push(p,m,T),a.push(m,b,T)}this.setIndex(a),this.setAttribute("position",new Be(l,3)),this.setAttribute("normal",new Be(c,3)),this.setAttribute("uv",new Be(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qa(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}class $a extends ke{constructor(e=new Do(new w(-1,-1,0),new w(-1,1,0),new w(1,1,0)),t=64,i=1,r=8,n=!1){super();this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:r,closed:n};let s=e.computeFrenetFrames(t,n);this.tangents=s.tangents,this.normals=s.normals,this.binormals=s.binormals;let o=new w,a=new w,l=new K,c=new w,f=[],u=[],h=[],d=[];x(),this.setIndex(d),this.setAttribute("position",new Be(f,3)),this.setAttribute("normal",new Be(u,3)),this.setAttribute("uv",new Be(h,2));function x(){for(let b=0;b<t;b++)M(b);M(n===!1?t:0),m(),p()}function M(b){c=e.getPointAt(b/t,c);let T=s.normals[b],S=s.binormals[b];for(let A=0;A<=r;A++){let C=A/r*Math.PI*2,g=Math.sin(C),y=-Math.cos(C);a.x=y*T.x+g*S.x,a.y=y*T.y+g*S.y,a.z=y*T.z+g*S.z,a.normalize(),u.push(a.x,a.y,a.z),o.x=c.x+i*a.x,o.y=c.y+i*a.y,o.z=c.z+i*a.z,f.push(o.x,o.y,o.z)}}function p(){for(let b=1;b<=t;b++)for(let T=1;T<=r;T++){let S=(r+1)*(b-1)+(T-1),A=(r+1)*b+(T-1),C=(r+1)*b+T,g=(r+1)*(b-1)+T;d.push(S,A,g),d.push(A,C,g)}}function m(){for(let b=0;b<=t;b++)for(let T=0;T<=r;T++)l.x=b/t,l.y=T/r,h.push(l.x,l.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new $a(new kr[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}function Rr(e){let t={};for(let i in e){t[i]={};for(let r in e[i]){let n=e[i][r];if(iu(n))if(n.isRenderTargetTexture)Se("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][r]=null;else t[i][r]=n.clone();else if(Array.isArray(n))if(iu(n[0])){let s=[];for(let o=0,a=n.length;o<a;o++)s[o]=n[o].clone();t[i][r]=s}else t[i][r]=n.slice();else t[i][r]=n}}return t}function Mi(e){let t={};for(let i=0;i<e.length;i++){let r=Rr(e[i]);for(let n in r)t[n]=r[n]}return t}function iu(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function ru(e){let t=[];for(let i=0;i<e.length;i++)t.push(e[i].clone());return t}function ja(e){let t=e.getRenderTarget();if(t===null)return e.outputColorSpace;if(t.isXRRenderTarget===!0)return t.texture.colorSpace;return tt.workingColorSpace}var Qi={clone:Rr,merge:Mi};var nu=`
void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}
`;var su=`
void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}
`;class Et extends Dt{constructor(e){super();if(this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=nu,this.fragmentShader=su,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0)this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Rr(e.uniforms),this.uniformsGroups=ru(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let s=this.uniforms[r].value;if(s&&s.isTexture)t.uniforms[r]={type:"t",value:s.toJSON(e).uuid};else if(s&&s.isColor)t.uniforms[r]={type:"c",value:s.getHex()};else if(s&&s.isVector2)t.uniforms[r]={type:"v2",value:s.toArray()};else if(s&&s.isVector3)t.uniforms[r]={type:"v3",value:s.toArray()};else if(s&&s.isVector4)t.uniforms[r]={type:"v4",value:s.toArray()};else if(s&&s.isMatrix3)t.uniforms[r]={type:"m3",value:s.toArray()};else if(s&&s.isMatrix4)t.uniforms[r]={type:"m4",value:s.toArray()};else t.uniforms[r]={value:s}}if(Object.keys(this.defines).length>0)t.defines=this.defines;t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let r in this.extensions)if(this.extensions[r]===!0)i[r]=!0;if(Object.keys(i).length>0)t.extensions=i;return t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let i in e.uniforms){let r=e.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=t[r.value]||null;break;case"c":this.uniforms[i].value=new fe().setHex(r.value);break;case"v2":this.uniforms[i].value=new K().fromArray(r.value);break;case"v3":this.uniforms[i].value=new w().fromArray(r.value);break;case"v4":this.uniforms[i].value=new mt().fromArray(r.value);break;case"m3":this.uniforms[i].value=new We().fromArray(r.value);break;case"m4":this.uniforms[i].value=new Xe().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(e.defines!==void 0)this.defines=e.defines;if(e.vertexShader!==void 0)this.vertexShader=e.vertexShader;if(e.fragmentShader!==void 0)this.fragmentShader=e.fragmentShader;if(e.glslVersion!==void 0)this.glslVersion=e.glslVersion;if(e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];if(e.lights!==void 0)this.lights=e.lights;if(e.clipping!==void 0)this.clipping=e.clipping;return this}}class Tn extends Et{constructor(e){super(e);this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Ai extends Dt{constructor(e){super();this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new fe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ir,this.normalScale=new K(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _i,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class zo extends Ai{constructor(e){super();this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new K(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return $e(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+0.4*t)/(1-0.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new fe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new fe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new fe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){if(this._anisotropy>0!==e>0)this.version++;this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){if(this._clearcoat>0!==e>0)this.version++;this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){if(this._diffuseRoughness>0!==e>0)this.version++;this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){if(this._iridescence>0!==e>0)this.version++;this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){if(this._dispersion>0!==e>0)this.version++;this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){if(this._retroreflectivity>0!==e>0)this.version++;this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){if(this._sheen>0!==e>0)this.version++;this._sheen=e}get transmission(){return this._transmission}set transmission(e){if(this._transmission>0!==e>0)this.version++;this._transmission=e}get iridescenceThicknessRange(){return Yi('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){Yi('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Go extends Dt{constructor(e){super();this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new fe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ir,this.normalScale=new K(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _i,this.combine=en,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=0.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Vo extends Dt{constructor(e){super();this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=sh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class ko extends Dt{constructor(e){super();this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function Hr(e,t){if(!e||e.constructor===t)return e;if(typeof t.BYTES_PER_ELEMENT==="number")return new t(e);return Array.prototype.slice.call(e)}function ys(e){return e!==void 0&&e.inTangents!==void 0&&e.outTangents!==void 0}class $i{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,r=t[i],n=t[i-1];i:{e:{let s;t:{r:if(!(e<r)){for(let o=i+2;;){if(r===void 0){if(e<n)break r;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(n=r,r=t[++i],e<r)break e}s=t.length;break t}if(!(e>=n)){let o=t[1];if(e<o)i=2,n=o;for(let a=i-2;;){if(n===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===a)break;if(r=n,n=t[--i-1],e>=n)break e}s=i,i=0;break t}break i}while(i<s){let o=i+s>>>1;if(e<t[o])s=o;else i=o+1}if(r=t[i],n=t[i-1],n===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,n,r)}return this.interpolate_(i,n,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,n=e*r;for(let s=0;s!==r;++s)t[s]=i[n+s];return t}interpolate_(){throw Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}}class el extends $i{constructor(e,t,i,r){super(e,t,i,r);this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:fa,endingEnd:fa}}intervalChanged_(e,t,i){let r=this.parameterPositions,n=e-2,s=e+1,o=r[n],a=r[s];if(o===void 0)switch(this.getSettings_().endingStart){case da:n=e,o=2*t-i;break;case pa:n=r.length-2,o=t+r[n]-r[n+1];break;default:n=e,o=i}if(a===void 0)switch(this.getSettings_().endingEnd){case da:s=e,a=2*i-t;break;case pa:s=1,a=i+r[1]-r[0];break;default:s=e-1,a=t}let l=(i-t)*0.5,c=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(a-i),this._offsetPrev=n*c,this._offsetNext=s*c}interpolate_(e,t,i,r){let n=this.resultBuffer,s=this.sampleValues,o=this.valueSize,a=e*o,l=a-o,c=this._offsetPrev,f=this._offsetNext,u=this._weightPrev,h=this._weightNext,d=(i-t)/(r-t),x=d*d,M=x*d,p=-u*M+2*u*x-u*d,m=(1+u)*M+(-1.5-2*u)*x+(-0.5+u)*d+1,b=(-1-h)*M+(1.5+h)*x+0.5*d,T=h*M-h*x;for(let S=0;S!==o;++S)n[S]=p*s[c+S]+m*s[l+S]+b*s[a+S]+T*s[f+S];return n}}class Ho extends $i{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let n=this.resultBuffer,s=this.sampleValues,o=this.valueSize,a=e*o,l=a-o,c=(i-t)/(r-t),f=1-c;for(let u=0;u!==o;++u)n[u]=s[l+u]*f+s[a+u]*c;return n}}class tl extends $i{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}}class il extends $i{interpolate_(e,t,i,r){let n=this.resultBuffer,s=this.sampleValues,o=this.valueSize,a=e*o,l=a-o,c=this.inTangents,f=this.outTangents;if(!c||!f){let d=(i-t)/(r-t),x=1-d;for(let M=0;M!==o;++M)n[M]=s[l+M]*x+s[a+M]*d;return n}let u=o*2,h=e-1;for(let d=0;d!==o;++d){let x=s[l+d],M=s[a+d],p=h*u+d*2,m=f[p],b=f[p+1],T=e*u+d*2,S=c[T],A=c[T+1],C=pg(i,t,m,S,r);n[d]=au(C,x,b,A,M)}return n}}function au(e,t,i,r,n){let s=1-e;return s*s*s*t+3*s*s*e*i+3*s*e*e*r+e*e*e*n}function dg(e,t,i,r,n){let s=1-e;return 3*s*s*(i-t)+6*s*e*(r-i)+3*e*e*(n-r)}function pg(e,t,i,r,n){let s=(e-t)/(n-t);for(let o=0;o<8;o++){let a=au(s,t,i,r,n)-e;if(Math.abs(a)<0.0000000001)break;let l=dg(s,t,i,r,n);if(Math.abs(l)<0.0000000001)break;s=Math.max(0,Math.min(1,s-a/l))}return s}class jt{constructor(e,t,i,r){if(e===void 0)throw Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Hr(t,this.TimeBufferType),this.values=Hr(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Hr(e.times,Array),values:Hr(e.values,Array)};let r=e.getInterpolation();if(r!==e.DefaultInterpolation)i.interpolation=r;if(ys(e.settings))i.settings={inTangents:Hr(e.settings.inTangents,Array),outTangents:Hr(e.settings.outTangents,Array)}}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new tl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ho(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new el(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new il(this.times,this.values,this.getValueSize(),e);if(this.settings)t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents;return t}setInterpolation(e){let t;switch(e){case sn:t=this.InterpolantFactoryMethodDiscrete;break;case ha:t=this.InterpolantFactoryMethodLinear;break;case ua:t=this.InterpolantFactoryMethodSmooth;break;case Sl:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(i);return Se("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return sn;case this.InterpolantFactoryMethodLinear:return ha;case this.InterpolantFactoryMethodSmooth:return ua;case this.InterpolantFactoryMethodBezier:return Sl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e;if(ys(this.settings))lu(this.settings.inTangents,e),lu(this.settings.outTangents,e)}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e;if(ys(this.settings))cu(this.settings.inTangents,e),cu(this.settings.outTangents,e)}return this}trim(e,t){let i=this.times,r=i.length,n=0,s=r-1;while(n!==r&&i[n]<e)++n;while(s!==-1&&i[s]>t)--s;if(++s,n!==0||s!==r){if(n>=s)s=Math.max(s,1),n=s-1;let o=this.getValueSize();this.times=i.slice(n,s),this.values=this.values.slice(n*o,s*o)}return this}validate(){let e=!0,t=this.getValueSize();if(t-Math.floor(t)!==0)Fe("KeyframeTrack: Invalid value size in track.",this),e=!1;let i=this.times,r=this.values,n=i.length;if(n===0)Fe("KeyframeTrack: Track is empty.",this),e=!1;let s=null;for(let o=0;o!==n;o++){let a=i[o];if(typeof a==="number"&&isNaN(a)){Fe("KeyframeTrack: Time is not a valid number.",this,o,a),e=!1;break}if(s!==null&&s>a){Fe("KeyframeTrack: Out of order keys.",this,o,a,s),e=!1;break}s=a}if(r!==void 0){if(Tl(r))for(let o=0,a=r.length;o!==a;++o){let l=r[o];if(isNaN(l)){Fe("KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===ua,n=e.length-1,s=1;for(let o=1;o<n;++o){let a=!1,l=e[o],c=e[o+1];if(l!==c&&(o!==1||l!==e[0]))if(!r){let f=o*i,u=f-i,h=f+i;for(let d=0;d!==i;++d){let x=t[f+d];if(x!==t[u+d]||x!==t[h+d]){a=!0;break}}}else a=!0;if(a){if(o!==s){e[s]=e[o];let f=o*i,u=s*i;for(let h=0;h!==i;++h)t[u+h]=t[f+h]}++s}}if(n>0){e[s]=e[n];for(let o=n*i,a=s*i,l=0;l!==i;++l)t[a+l]=t[o+l];++s}if(s!==e.length)this.times=e.slice(0,s),this.values=t.slice(0,s*i);else this.times=e,this.values=t;return this}clone(){let e=this.times.slice(),t=this.values.slice(),r=new this.constructor(this.name,e,t);if(r.createInterpolant=this.createInterpolant,ys(this.settings))r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()};return r}}function lu(e,t){for(let i=0,r=e.length;i!==r;i+=2)e[i]+=t}function cu(e,t){for(let i=0,r=e.length;i!==r;i+=2)e[i]*=t}jt.prototype.ValueTypeName="";jt.prototype.TimeBufferType=Float32Array;jt.prototype.ValueBufferType=Float32Array;jt.prototype.DefaultInterpolation=ha;class Wr extends jt{constructor(e,t,i){super(e,t,i)}}Wr.prototype.ValueTypeName="bool";Wr.prototype.ValueBufferType=Array;Wr.prototype.DefaultInterpolation=sn;Wr.prototype.InterpolantFactoryMethodLinear=void 0;Wr.prototype.InterpolantFactoryMethodSmooth=void 0;class rl extends jt{constructor(e,t,i,r){super(e,t,i,r)}}rl.prototype.ValueTypeName="color";class nl extends jt{constructor(e,t,i,r){super(e,t,i,r)}}nl.prototype.ValueTypeName="number";class sl extends $i{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let n=this.resultBuffer,s=this.sampleValues,o=this.valueSize,a=(i-t)/(r-t),l=e*o;for(let c=l+o;l!==c;l+=4)ai.slerpFlat(n,0,s,l-o,s,l,a);return n}}class Wo extends jt{constructor(e,t,i,r){super(e,t,i,r)}InterpolantFactoryMethodLinear(e){return new sl(this.times,this.values,this.getValueSize(),e)}}Wo.prototype.ValueTypeName="quaternion";Wo.prototype.InterpolantFactoryMethodSmooth=void 0;class Xr extends jt{constructor(e,t,i){super(e,t,i)}}Xr.prototype.ValueTypeName="string";Xr.prototype.ValueBufferType=Array;Xr.prototype.DefaultInterpolation=sn;Xr.prototype.InterpolantFactoryMethodLinear=void 0;Xr.prototype.InterpolantFactoryMethodSmooth=void 0;class ol extends jt{constructor(e,t,i,r){super(e,t,i,r)}}ol.prototype.ValueTypeName="vector";class al{constructor(e,t,i){let r=this,n=!1,s=0,o=0,a=void 0,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(c){if(o++,n===!1){if(r.onStart!==void 0)r.onStart(c,s,o)}n=!0},this.itemEnd=function(c){if(s++,r.onProgress!==void 0)r.onProgress(c,s,o);if(s===o){if(n=!1,r.onLoad!==void 0)r.onLoad()}},this.itemError=function(c){if(r.onError!==void 0)r.onError(c)},this.resolveURL=function(c){if(c=c.normalize("NFC"),a)return a(c);return c},this.setURLModifier=function(c){return a=c,this},this.addHandler=function(c,f){return l.push(c,f),this},this.removeHandler=function(c){let f=l.indexOf(c);if(f!==-1)l.splice(f,2);return this},this.getHandler=function(c){for(let f=0,u=l.length;f<u;f+=2){let h=l[f],d=l[f+1];if(h.global)h.lastIndex=0;if(h.test(c))return d}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){if(!this._abortController)this._abortController=new AbortController;return this._abortController}}var hc=new al;class Ri{constructor(e){if(this.manager=e!==void 0?e:hc,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(r,n){i.load(e,r,t,n)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}}Ri.DEFAULT_MATERIAL_NAME="__DEFAULT";class Vi extends rt{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super();this.isLight=!0,this.type="Light",this.color=new fe(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class Xo extends Vi{constructor(e,t,i){super(e,i);this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(rt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new fe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}var pc=new Xe,uu=new w,fu=new w;class qr{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new K(512,512),this.mapType=Ht,this.map=null,this.mapPass=null,this.matrix=new Xe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ki,this._frameExtents=new K(1,1),this._viewportCount=1,this._viewports=[new mt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;uu.setFromMatrixPosition(e.matrixWorld),t.position.copy(uu),fu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(fu),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,r){pc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(pc,e.coordinateSystem,e.reversedDepth);let n=this._frameExtents,s=r?r.z/n.x:1,o=r?r.w/n.y:1,a=r?r.x/n.x:0,l=r?r.y/n.y:0;if(e.coordinateSystem===fr||e.reversedDepth)t.set(0.5*s,0,0,0.5*s+a,0,0.5*o,0,0.5*o+l,0,0,1,0,0,0,0,1);else t.set(0.5*s,0,0,0.5*s+a,0,0.5*o,0,0.5*o+l,0,0,0.5,0.5,0,0,0,1);t.multiply(pc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){if(this.map)this.map.dispose();if(this.mapPass)this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}var ll=new w,cl=new ai,xr=new w;class wn extends rt{constructor(){super();this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Xe,this.projectionMatrix=new Xe,this.projectionMatrixInverse=new Xe,this.coordinateSystem=oi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){if(super.updateMatrixWorld(e),this.matrixWorld.decompose(ll,cl,xr),xr.x===1&&xr.y===1&&xr.z===1)this.matrixWorldInverse.copy(this.matrixWorld).invert();else this.matrixWorldInverse.compose(ll,cl,xr.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){if(super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(ll,cl,xr),xr.x===1&&xr.y===1&&xr.z===1)this.matrixWorldInverse.copy(this.matrixWorld).invert();else this.matrixWorldInverse.compose(ll,cl,xr.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}var Yr=new w,du=new K,pu=new K;class Gt extends wn{constructor(e=50,t=1,i=0.1,r=2000){super();this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=0.5*this.getFilmHeight()/e;this.fov=cn*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(jn*0.5*this.fov);return 0.5*this.getFilmHeight()/e}getEffectiveFOV(){return cn*2*Math.atan(Math.tan(jn*0.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Yr.set(-1,-1,0.5).applyMatrix4(this.projectionMatrixInverse),t.set(Yr.x,Yr.y).multiplyScalar(-e/Yr.z),Yr.set(1,1,0.5).applyMatrix4(this.projectionMatrixInverse),i.set(Yr.x,Yr.y).multiplyScalar(-e/Yr.z)}getViewSize(e,t){return this.getViewBounds(e,du,pu),t.subVectors(pu,du)}setViewOffset(e,t,i,r,n,s){if(this.aspect=e/t,this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=n,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(jn*0.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,n=-0.5*r,s=this.view;if(this.view!==null&&this.view.enabled){let{fullWidth:a,fullHeight:l}=s;n+=s.offsetX*r/a,t-=s.offsetY*i/l,r*=s.width/a,i*=s.height/l}let o=this.filmOffset;if(o!==0)n+=e*o/this.getFilmWidth();this.projectionMatrix.makePerspective(n,n+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);if(t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null)t.object.view=Object.assign({},this.view);return t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class mc extends qr{constructor(){super(new Gt(50,1,0.5,500));this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,i=cn*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height*this.aspect,n=e.distance||t.far;if(i!==t.fov||r!==t.aspect||n!==t.far)t.fov=i,t.aspect=r,t.far=n,t.updateProjectionMatrix();super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}}class qo extends Vi{constructor(e,t,i=0,r=Math.PI/3,n=0,s=2){super(e,t);this.isSpotLight=!0,this.type="SpotLight",this.position.copy(rt.DEFAULT_UP),this.updateMatrix(),this.target=new rt,this.distance=i,this.angle=r,this.penumbra=n,this.decay=s,this.map=null,this.shadow=new mc}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);if(t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture)t.object.map=this.map.toJSON(e).uuid;return t.object.shadow=this.shadow.toJSON(),t}}class gc extends qr{constructor(){super(new Gt(90,1,0.5,500));this.isPointLightShadow=!0}}class Cr extends Vi{constructor(e,t,i=0,r=2){super(e,t);this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new gc}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class Pr extends wn{constructor(e=-1,t=1,i=1,r=-1,n=0.1,s=2000){super();this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=n,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,n,s){if(this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=n,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2,n=i-e,s=i+e,o=r+t,a=r-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;n+=l*this.view.offsetX,s=n+l*this.view.width,o-=c*this.view.offsetY,a=o-c*this.view.height}this.projectionMatrix.makeOrthographic(n,s,o,a,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);if(t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null)t.object.view=Object.assign({},this.view);return t}}class xc extends qr{constructor(){super(new Pr(-5,5,5,-5,0.5,500));this.isDirectionalLightShadow=!0}}class Yo extends Vi{constructor(e,t){super(e,t);this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(rt.DEFAULT_UP),this.updateMatrix(),this.target=new rt,this.shadow=new xc}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}var Ms=-90,Ss=1;class An extends rt{constructor(e,t,i){super();this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Gt(Ms,Ss,e,t);r.layers=this.layers,this.add(r);let n=new Gt(Ms,Ss,e,t);n.layers=this.layers,this.add(n);let s=new Gt(Ms,Ss,e,t);s.layers=this.layers,this.add(s);let o=new Gt(Ms,Ss,e,t);o.layers=this.layers,this.add(o);let a=new Gt(Ms,Ss,e,t);a.layers=this.layers,this.add(a);let l=new Gt(Ms,Ss,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,r,n,s,o,a]=t;for(let l of t)this.remove(l);if(e===oi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),n.up.set(0,0,-1),n.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),a.up.set(0,1,0),a.lookAt(0,0,-1);else if(e===fr)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),n.up.set(0,0,1),n.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),a.up.set(0,-1,0),a.lookAt(0,0,-1);else throw Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){if(this.parent===null)this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:r}=this;if(this.coordinateSystem!==e.coordinateSystem)this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem();let[n,s,o,a,l,c]=this.children,f=e.getRenderTarget(),u=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),d=e.xr.enabled;e.xr.enabled=!1;let x=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let M=!1;if(e.isWebGLRenderer===!0)M=e.state.buffers.depth.getReversed();else M=e.reversedDepthBuffer;if(e.setRenderTarget(i,0,r),M&&e.autoClear===!1)e.clearDepth();if(e.render(t,n),e.setRenderTarget(i,1,r),M&&e.autoClear===!1)e.clearDepth();if(e.render(t,s),e.setRenderTarget(i,2,r),M&&e.autoClear===!1)e.clearDepth();if(e.render(t,o),e.setRenderTarget(i,3,r),M&&e.autoClear===!1)e.clearDepth();if(e.render(t,a),e.setRenderTarget(i,4,r),M&&e.autoClear===!1)e.clearDepth();if(e.render(t,l),i.texture.mipmapsAutoUpdate=x,e.setRenderTarget(i,5,r),M&&e.autoClear===!1)e.clearDepth();e.render(t,c),e.setRenderTarget(f,u,h),e.xr.enabled=d,i.texture.needsPMREMUpdate=!0}}class hl extends Gt{constructor(e=[]){super();this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}}class Zo{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){if(this._document=e,e.hidden!==void 0)this._pageVisibilityHandler=Pg.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1)}disconnect(){if(this._pageVisibilityHandler!==null)this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null;this._document=null}getDelta(){return this._delta/1000}getElapsed(){return this._elapsed/1000}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){if(this._pageVisibilityHandler!==null&&this._document.hidden===!0)this._delta=0;else this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta;return this}}function Pg(){if(this._document.hidden===!1)this.reset()}var _c="\\[\\]\\.:\\/",Lg=new RegExp("["+_c+"]","g"),vc="[^"+_c+"]",Dg="[^"+_c.replace("\\.","")+"]",Ng=/((?:WC+[\/:])*)/.source.replace("WC",vc),Ug=/(WCOD+)?/.source.replace("WCOD",Dg),Fg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",vc),Bg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",vc),Og=new RegExp("^"+Ng+Ug+Fg+Bg+"$"),zg=["material","materials","bones","map"];class xu{constructor(e,t,i){let r=i||St.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,r=this._bindings[i];if(r!==void 0)r.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,n=i.length;r!==n;++r)i[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}}class St{constructor(e,t,i){this.path=t,this.parsedPath=i||St.parseTrackName(t),this.node=St.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){if(!(e&&e.isAnimationObjectGroup))return new St(e,t,i);else return new St.Composite(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Lg,"")}static parseTrackName(e){let t=Og.exec(e);if(t===null)throw Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=i.nodeName&&i.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let n=i.nodeName.substring(r+1);if(zg.indexOf(n)!==-1)i.nodeName=i.nodeName.substring(0,r),i.objectName=n}if(i.propertyName===null||i.propertyName.length===0)throw Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(n){for(let s=0;s<n.length;s++){let o=n[s];if(o.name===t||o.uuid===t)return o;let a=i(o.children);if(a)return a}return null},r=i(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let r=0,n=i.length;r!==n;++r)e[t++]=i[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let r=0,n=i.length;r!==n;++r)i[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let r=0,n=i.length;r!==n;++r)i[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let r=0,n=i.length;r!==n;++r)i[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,{objectName:i,propertyName:r,propertyIndex:n}=t;if(!e)e=St.findNode(this.rootNode,t.nodeName),this.node=e;if(this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Se("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let l=t.objectIndex;switch(i){case"materials":if(!e.material){Fe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Fe("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Fe("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let c=0;c<e.length;c++)if(e[c].name===l){l=c;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Fe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Fe("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){Fe("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(l!==void 0){if(e[l]===void 0){Fe("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let s=e[r];if(s===void 0){let l=t.nodeName;Fe("PropertyBinding: Trying to update property for track: "+l+"."+r+" but it wasn't found.",e);return}let o=this.Versioning.None;if(this.targetObject=e,e.isMaterial===!0)o=this.Versioning.NeedsUpdate;else if(e.isObject3D===!0)o=this.Versioning.MatrixWorldNeedsUpdate;let a=this.BindingType.Direct;if(n!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){Fe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Fe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}if(e.morphTargetDictionary[n]!==void 0)n=e.morphTargetDictionary[n]}a=this.BindingType.ArrayElement,this.resolvedProperty=s,this.propertyIndex=n}else if(s.fromArray!==void 0&&s.toArray!==void 0)a=this.BindingType.HasFromToArray,this.resolvedProperty=s;else if(Array.isArray(s))a=this.BindingType.EntireArray,this.resolvedProperty=s;else this.propertyName=r;this.getValue=this.GetterByBindingType[a],this.setValue=this.SetterByBindingTypeAndVersioning[a][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}St.Composite=xu;St.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};St.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};St.prototype.GetterByBindingType=[St.prototype._getValue_direct,St.prototype._getValue_array,St.prototype._getValue_arrayElement,St.prototype._getValue_toArray];St.prototype.SetterByBindingTypeAndVersioning=[[St.prototype._setValue_direct,St.prototype._setValue_direct_setNeedsUpdate,St.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[St.prototype._setValue_array,St.prototype._setValue_array_setNeedsUpdate,St.prototype._setValue_array_setMatrixWorldNeedsUpdate],[St.prototype._setValue_arrayElement,St.prototype._setValue_arrayElement_setNeedsUpdate,St.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[St.prototype._setValue_fromArray,St.prototype._setValue_fromArray_setNeedsUpdate,St.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var h2=new Float32Array(1);class _u{static{this.prototype.isMatrix2=!0}constructor(e,t,i,r){if(this.elements=[1,0,0,1],e!==void 0)this.set(e,t,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,r){let n=this.elements;return n[0]=e,n[2]=t,n[1]=i,n[3]=r,this}}function yc(e,t,i,r){let n=Hg(r);switch(i){case la:return e*t;case Xn:return e*t/n.components*n.byteLength;case tn:return e*t/n.components*n.byteLength;case Fi:return e*t*2/n.components*n.byteLength;case qn:return e*t*2/n.components*n.byteLength;case ca:return e*t*3/n.components*n.byteLength;case si:return e*t*4/n.components*n.byteLength;case Yn:return e*t*4/n.components*n.byteLength;case Zn:case Jn:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Kn:case Qn:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Os:case Gs:return Math.max(e,16)*Math.max(t,8)/4;case Bs:case zs:return Math.max(e,8)*Math.max(t,8)/2;case Vs:case ks:case Ws:case Xs:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Hs:case rn:case qs:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Ys:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Zs:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case Js:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case Ks:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case Qs:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case $s:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case js:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case eo:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case to:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case io:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case ro:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case no:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case so:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case oo:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case ao:case lo:case co:return Math.ceil(e/4)*Math.ceil(t/4)*16;case ho:case uo:return Math.ceil(e/4)*Math.ceil(t/4)*8;case nn:case fo:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw Error(`Unable to determine texture byte length for ${i} format.`)}function Hg(e){switch(e){case Ht:case na:return{byteLength:1,components:1};case Mr:case sa:case wt:return{byteLength:2,components:1};case Hn:case Wn:return{byteLength:2,components:4};case Kt:case kn:case Wt:return{byteLength:4,components:1};case oa:case aa:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}if(typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ws}}));if(typeof window<"u")if(window.__THREE__)Se("WARNING: Multiple instances of Three.js being imported.");else window.__THREE__=ws;function ul(){let e=null,t=!1,i=null,r=null;function n(s,o){r=e.requestAnimationFrame(n),i(s,o)}return{start:function(){if(t===!0)return;if(i===null)return;if(e===null)return;r=e.requestAnimationFrame(n),t=!0},stop:function(){if(e!==null)e.cancelAnimationFrame(r);t=!1},setAnimationLoop:function(s){i=s},setContext:function(s){e=s}}}function vu(e){let t=new WeakMap;function i(a,l){let{array:c,usage:f}=a,u=c.byteLength,h=e.createBuffer();e.bindBuffer(l,h),e.bufferData(l,c,f),a.onUploadCallback();let d;if(c instanceof Float32Array)d=e.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=e.HALF_FLOAT;else if(c instanceof Uint16Array)if(a.isFloat16BufferAttribute)d=e.HALF_FLOAT;else d=e.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=e.SHORT;else if(c instanceof Uint32Array)d=e.UNSIGNED_INT;else if(c instanceof Int32Array)d=e.INT;else if(c instanceof Int8Array)d=e.BYTE;else if(c instanceof Uint8Array)d=e.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=e.UNSIGNED_BYTE;else throw Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function r(a,l,c){let{array:f,updateRanges:u}=l;if(e.bindBuffer(c,a),u.length===0)e.bufferSubData(c,0,f);else{u.sort((d,x)=>d.start-x.start);let h=0;for(let d=1;d<u.length;d++){let x=u[h],M=u[d];if(M.start<=x.start+x.count+1)x.count=Math.max(x.count,M.start+M.count-x.start);else++h,u[h]=M}u.length=h+1;for(let d=0,x=u.length;d<x;d++){let M=u[d];e.bufferSubData(c,M.start*f.BYTES_PER_ELEMENT,f,M.start,M.count)}l.clearUpdateRanges()}l.onUploadCallback()}function n(a){if(a.isInterleavedBufferAttribute)a=a.data;return t.get(a)}function s(a){if(a.isInterleavedBufferAttribute)a=a.data;let l=t.get(a);if(l)e.deleteBuffer(l.buffer),t.delete(a)}function o(a,l){if(a.isInterleavedBufferAttribute)a=a.data;if(a.isGLBufferAttribute){let f=t.get(a);if(!f||f.version<a.version)t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,i(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(c.buffer,a,l),c.version=a.version}}return{get:n,remove:s,update:o}}var yu=`
#ifdef USE_ALPHAHASH

	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;

#endif
`;var Mu=`
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
`;var Su=`
#ifdef USE_ALPHAMAP

	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;

#endif
`;var bu=`
#ifdef USE_ALPHAMAP

	uniform sampler2D alphaMap;

#endif
`;var Tu=`
#ifdef USE_ALPHATEST

	#ifdef ALPHA_TO_COVERAGE

	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;

	#else

	if ( diffuseColor.a < alphaTest ) discard;

	#endif

#endif
`;var Eu=`
#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif
`;var wu=`
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
`;var Au=`
#ifdef USE_AOMAP

	uniform sampler2D aoMap;
	uniform float aoMapIntensity;

#endif
`;var Ru=`
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
`;var Cu=`
#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif
`;var Pu=`
vec3 transformed = vec3( position );

#ifdef USE_ALPHAHASH

	vPosition = vec3( position );

#endif
`;var Iu=`
vec3 objectNormal = vec3( normal );

#ifdef USE_TANGENT

	vec3 objectTangent = vec3( tangent.xyz );

#endif
`;var Lu=`

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

`;var Du=`

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

`;var Nu=`
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
`;var Uu=`
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
`;var Fu=`
#if NUM_CLIPPING_PLANES > 0

	varying vec3 vClipPosition;

	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];

#endif
`;var Bu=`
#if NUM_CLIPPING_PLANES > 0

	varying vec3 vClipPosition;

#endif
`;var Ou=`
#if NUM_CLIPPING_PLANES > 0

	vClipPosition = - mvPosition.xyz;

#endif
`;var zu=`
#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )

	diffuseColor *= vColor;

#endif
`;var Gu=`
#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )

	varying vec4 vColor;

#endif
`;var Vu=`
#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )

	varying vec4 vColor;

#endif
`;var ku=`
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
`;var Hu=`
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
`;var Wu=`

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
`;var Xu=`
#ifdef USE_DISPLACEMENTMAP

	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;

#endif
`;var qu=`
#ifdef USE_DISPLACEMENTMAP

	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );

#endif
`;var Yu=`
#ifdef USE_EMISSIVEMAP

	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );

	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE

		// use inline sRGB decode until browsers properly support SRGB8_ALPHA8 with video textures (#26516)

		emissiveColor = sRGBTransferEOTF( emissiveColor );

	#endif

	totalEmissiveRadiance *= emissiveColor.rgb;

#endif
`;var Zu=`
#ifdef USE_EMISSIVEMAP

	uniform sampler2D emissiveMap;

#endif
`;var Ju=`
gl_FragColor = linearToOutputTexel( gl_FragColor );
`;var Ku=`

vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}

vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}

vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}

`;var Qu=`
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
`;var $u=`
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
`;var ju=`
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
`;var ef=`
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
`;var tf=`
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
`;var rf=`
#ifdef USE_FOG

	vFogDepth = - mvPosition.z;

#endif
`;var nf=`
#ifdef USE_FOG

	varying float vFogDepth;

#endif
`;var sf=`
#ifdef USE_FOG

	#ifdef FOG_EXP2

		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );

	#else

		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );

	#endif

	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );

#endif
`;var of=`
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
`;var af=`

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
`;var lf=`
#ifdef USE_LIGHTMAP

	uniform sampler2D lightMap;
	uniform float lightMapIntensity;

#endif
`;var cf=`
LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;
`;var hf=`
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
`;var uf=`
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
`;var ff=`
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
`;var df=`
ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;
`;var pf=`
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
`;var mf=`
BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;
`;var gf=`
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
`;var xf=`
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
`;var _f=`

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
`;var vf=`
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
`;var yf=`
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
`;var Mf=`
#if defined( RE_IndirectDiffuse )

	#if defined( LAMBERT ) || defined( PHONG )

		irradiance += iblIrradiance;

	#endif

	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );

#endif

#if defined( RE_IndirectSpecular )

	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );

#endif
`;var Sf=`
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
`;var bf=`
#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )

	// Doing a strict comparison with == 1.0 can cause noise artifacts
	// on some platforms. See issue #17623.
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;

#endif
`;var Tf=`
#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )

	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;

#endif
`;var Ef=`
#ifdef USE_LOGARITHMIC_DEPTH_BUFFER

	varying float vFragDepth;
	varying float vIsPerspective;

#endif
`;var wf=`
#ifdef USE_LOGARITHMIC_DEPTH_BUFFER

	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );

#endif
`;var Af=`
#ifdef USE_MAP

	vec4 sampledDiffuseColor = texture2D( map, vMapUv );

	#ifdef DECODE_VIDEO_TEXTURE

		// use inline sRGB decode until browsers properly support SRGB8_ALPHA8 with video textures (#26516)

		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );

	#endif

	diffuseColor *= sampledDiffuseColor;

#endif
`;var Rf=`
#ifdef USE_MAP

	uniform sampler2D map;

#endif
`;var Cf=`
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
`;var Pf=`
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
`;var If=`
float metalnessFactor = metalness;

#ifdef USE_METALNESSMAP

	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );

	// reads channel B, compatible with a combined OcclusionRoughnessMetallic (RGB) texture
	metalnessFactor *= texelMetalness.b;

#endif
`;var Lf=`
#ifdef USE_METALNESSMAP

	uniform sampler2D metalnessMap;

#endif
`;var Df=`
#ifdef USE_INSTANCING_MORPH

	float morphTargetInfluences[ MORPHTARGETS_COUNT ];

	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;

	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {

		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;

	}
#endif
`;var Nf=`
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
`;var Uf=`
#ifdef USE_MORPHNORMALS

	// morphTargetBaseInfluence is set based on BufferGeometry.morphTargetsRelative value:
	// When morphTargetsRelative is false, this is set to 1 - sum(influences); this results in normal = sum((target - base) * influence)
	// When morphTargetsRelative is true, this is set to 1; as a result, all morph targets are simply added to the base after weighting
	objectNormal *= morphTargetBaseInfluence;

	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {

		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];

	}

#endif
`;var Ff=`
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
`;var Bf=`
#ifdef USE_MORPHTARGETS

	// morphTargetBaseInfluence is set based on BufferGeometry.morphTargetsRelative value:
	// When morphTargetsRelative is false, this is set to 1 - sum(influences); this results in position = sum((target - base) * influence)
	// When morphTargetsRelative is true, this is set to 1; as a result, all morph targets are simply added to the base after weighting
	transformed *= morphTargetBaseInfluence;

	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {

		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];

	}

#endif
`;var Of=`
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

`;var zf=`

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
`;var Gf=`
#ifndef FLAT_SHADED

	varying vec3 vNormal;

	#ifdef USE_TANGENT

		varying vec3 vTangent;
		varying vec3 vBitangent;

	#endif

#endif
`;var Vf=`
#ifndef FLAT_SHADED

	varying vec3 vNormal;

	#ifdef USE_TANGENT

		varying vec3 vTangent;
		varying vec3 vBitangent;

	#endif

#endif
`;var kf=`
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
`;var Hf=`
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
`;var Wf=`
#ifdef USE_CLEARCOAT

	vec3 clearcoatNormal = nonPerturbedNormal;

#endif
`;var Xf=`
#ifdef USE_CLEARCOAT_NORMALMAP

	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;

	clearcoatNormal = normalize( tbn2 * clearcoatMapN );

#endif
`;var qf=`

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
`;var Yf=`

#ifdef USE_IRIDESCENCEMAP

	uniform sampler2D iridescenceMap;

#endif

#ifdef USE_IRIDESCENCE_THICKNESSMAP

	uniform sampler2D iridescenceThicknessMap;

#endif
`;var Zf=`
#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif

#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif

gl_FragColor = vec4( outgoingLight, diffuseColor.a );
`;var Jf=`
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
`;var Kf=`
#ifdef PREMULTIPLIED_ALPHA

	gl_FragColor.rgb *= gl_FragColor.a;

#endif
`;var Qf=`
vec4 mvPosition = vec4( transformed, 1.0 );

#ifdef USE_BATCHING

	mvPosition = batchingMatrix * mvPosition;

#endif

#ifdef USE_INSTANCING

	mvPosition = instanceMatrix * mvPosition;

#endif

mvPosition = modelViewMatrix * mvPosition;

gl_Position = projectionMatrix * mvPosition;
`;var $f=`
#ifdef DITHERING

	gl_FragColor.rgb = dithering( gl_FragColor.rgb );

#endif
`;var jf=`
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
`;var ed=`
float roughnessFactor = roughness;

#ifdef USE_ROUGHNESSMAP

	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );

	// reads channel G, compatible with a combined OcclusionRoughnessMetallic (RGB) texture
	roughnessFactor *= texelRoughness.g;

#endif
`;var td=`
#ifdef USE_ROUGHNESSMAP

	uniform sampler2D roughnessMap;

#endif
`;var id=`
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
`;var rd=`

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
`;var nd=`

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


`;var sd=`
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
`;var od=`
#ifdef USE_SKINNING

	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );

#endif
`;var ad=`
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
`;var ld=`
#ifdef USE_SKINNING

	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );

	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;

	transformed = ( bindMatrixInverse * skinned ).xyz;

#endif
`;var cd=`
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
`;var hd=`
float specularStrength;

#ifdef USE_SPECULARMAP

	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;

#else

	specularStrength = 1.0;

#endif
`;var ud=`
#ifdef USE_SPECULARMAP

	uniform sampler2D specularMap;

#endif
`;var fd=`
#if defined( TONE_MAPPING )

	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );

#endif
`;var dd=`
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
`;var pd=`
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
`;var md=`
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
`;var gd=`
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
`;var xd=`
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
`;var _d=`
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
`;var vd=`
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
`;var yd=`
varying vec2 vUv;
uniform mat3 uvTransform;

void main() {

	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;

	gl_Position = vec4( position.xy, 1.0, 1.0 );

}
`,Md=`
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
`;var Sd=`
varying vec3 vWorldDirection;

#include <common>

void main() {

	vWorldDirection = transformDirection( position, modelMatrix );

	#include <begin_vertex>
	#include <project_vertex>

	gl_Position.z = gl_Position.w; // set z to camera.far

}
`,bd=`

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
`;var Td=`
varying vec3 vWorldDirection;

#include <common>

void main() {

	vWorldDirection = transformDirection( position, modelMatrix );

	#include <begin_vertex>
	#include <project_vertex>

	gl_Position.z = gl_Position.w; // set z to camera.far

}
`,Ed=`
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
`;var wd=`
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
`,Ad=`
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
`;var Rd=`
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
`,Cd=`
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
`;var Pd=`
varying vec3 vWorldDirection;

#include <common>

void main() {

	vWorldDirection = transformDirection( position, modelMatrix );

	#include <begin_vertex>
	#include <project_vertex>

}
`,Id=`
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
`;var Ld=`
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
`,Dd=`
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
`;var Nd=`
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
`,Ud=`
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
`;var Fd=`
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
`,Bd=`
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
`;var Od=`
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
`,zd=`
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
`;var Gd=`
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
`,Vd=`
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
`;var kd=`
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
`,Hd=`
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
`;var Wd=`
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
`,Xd=`
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
`;var qd=`
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
`,Yd=`
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
`;var Zd=`
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
`,Jd=`
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
`;var Kd=`
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
`,Qd=`
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
`;var $d=`
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
`,jd=`
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
`;var nt={alphahash_fragment:yu,alphahash_pars_fragment:Mu,alphamap_fragment:Su,alphamap_pars_fragment:bu,alphatest_fragment:Tu,alphatest_pars_fragment:Eu,aomap_fragment:wu,aomap_pars_fragment:Au,batching_pars_vertex:Ru,batching_vertex:Cu,begin_vertex:Pu,beginnormal_vertex:Iu,bsdfs:Lu,iridescence_fragment:Du,bumpmap_pars_fragment:Nu,clipping_planes_fragment:Uu,clipping_planes_pars_fragment:Fu,clipping_planes_pars_vertex:Bu,clipping_planes_vertex:Ou,color_fragment:zu,color_pars_fragment:Gu,color_pars_vertex:Vu,color_vertex:ku,common:Hu,defaultnormal_vertex:Wu,displacementmap_pars_vertex:Xu,displacementmap_vertex:qu,emissivemap_fragment:Yu,emissivemap_pars_fragment:Zu,colorspace_fragment:Ju,colorspace_pars_fragment:Ku,envmap_fragment:Qu,envmap_common_pars_fragment:$u,envmap_pars_fragment:ju,envmap_pars_vertex:ef,envmap_physical_pars_fragment:ff,envmap_vertex:tf,fog_vertex:rf,fog_pars_vertex:nf,fog_fragment:sf,fog_pars_fragment:of,gradientmap_pars_fragment:af,lightmap_pars_fragment:lf,lights_lambert_fragment:cf,lights_lambert_pars_fragment:hf,lights_pars_begin:uf,lights_toon_fragment:df,lights_toon_pars_fragment:pf,lights_phong_fragment:mf,lights_phong_pars_fragment:gf,lights_physical_fragment:xf,lights_physical_pars_fragment:_f,lights_fragment_begin:vf,lights_fragment_maps:yf,lights_fragment_end:Mf,lightprobes_pars_fragment:Sf,logdepthbuf_fragment:bf,logdepthbuf_pars_fragment:Tf,logdepthbuf_pars_vertex:Ef,logdepthbuf_vertex:wf,map_fragment:Af,map_pars_fragment:Rf,map_particle_fragment:Cf,map_particle_pars_fragment:Pf,metalnessmap_fragment:If,metalnessmap_pars_fragment:Lf,morphinstance_vertex:Df,morphcolor_vertex:Nf,morphnormal_vertex:Uf,morphtarget_pars_vertex:Ff,morphtarget_vertex:Bf,normal_fragment_begin:Of,normal_fragment_maps:zf,normal_pars_fragment:Gf,normal_pars_vertex:Vf,normal_vertex:kf,normalmap_pars_fragment:Hf,clearcoat_normal_fragment_begin:Wf,clearcoat_normal_fragment_maps:Xf,clearcoat_pars_fragment:qf,iridescence_pars_fragment:Yf,opaque_fragment:Zf,packing:Jf,premultiplied_alpha_fragment:Kf,project_vertex:Qf,dithering_fragment:$f,dithering_pars_fragment:jf,roughnessmap_fragment:ed,roughnessmap_pars_fragment:td,shadowmap_pars_fragment:id,shadowmap_pars_vertex:rd,shadowmap_vertex:nd,shadowmask_pars_fragment:sd,skinbase_vertex:od,skinning_pars_vertex:ad,skinning_vertex:ld,skinnormal_vertex:cd,specularmap_fragment:hd,specularmap_pars_fragment:ud,tonemapping_fragment:fd,tonemapping_pars_fragment:dd,transmission_fragment:pd,transmission_pars_fragment:md,uv_pars_fragment:gd,uv_pars_vertex:xd,uv_vertex:_d,worldpos_vertex:vd,background_vert:yd,background_frag:Md,backgroundCube_vert:Sd,backgroundCube_frag:bd,cube_vert:Td,cube_frag:Ed,depth_vert:wd,depth_frag:Ad,distance_vert:Rd,distance_frag:Cd,equirect_vert:Pd,equirect_frag:Id,linedashed_vert:Ld,linedashed_frag:Dd,meshbasic_vert:Nd,meshbasic_frag:Ud,meshlambert_vert:Fd,meshlambert_frag:Bd,meshmatcap_vert:Od,meshmatcap_frag:zd,meshnormal_vert:Gd,meshnormal_frag:Vd,meshphong_vert:kd,meshphong_frag:Hd,meshphysical_vert:Wd,meshphysical_frag:Xd,meshtoon_vert:qd,meshtoon_frag:Yd,points_vert:Zd,points_frag:Jd,shadow_vert:Kd,shadow_frag:Qd,sprite_vert:$d,sprite_frag:jd};var Ce={common:{diffuse:{value:new fe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new We}},envmap:{envMap:{value:null},envMapRotation:{value:new We},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:0.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new We}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new We}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new We},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new We},normalScale:{value:new K(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new We},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new We}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new We}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new We}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:0.00025},fogNear:{value:1},fogFar:{value:2000},fogColor:{value:new fe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new fe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0},uvTransform:{value:new We}},sprite:{diffuse:{value:new fe(16777215)},opacity:{value:1},center:{value:new K(0.5,0.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}}};var ki={basic:{uniforms:Mi([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.fog]),vertexShader:nt.meshbasic_vert,fragmentShader:nt.meshbasic_frag},lambert:{uniforms:Mi([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new fe(0)},envMapIntensity:{value:1}}]),vertexShader:nt.meshlambert_vert,fragmentShader:nt.meshlambert_frag},phong:{uniforms:Mi([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new fe(0)},specular:{value:new fe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:nt.meshphong_vert,fragmentShader:nt.meshphong_frag},standard:{uniforms:Mi([Ce.common,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.roughnessmap,Ce.metalnessmap,Ce.fog,Ce.lights,{emissive:{value:new fe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag},toon:{uniforms:Mi([Ce.common,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.gradientmap,Ce.fog,Ce.lights,{emissive:{value:new fe(0)}}]),vertexShader:nt.meshtoon_vert,fragmentShader:nt.meshtoon_frag},matcap:{uniforms:Mi([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,{matcap:{value:null}}]),vertexShader:nt.meshmatcap_vert,fragmentShader:nt.meshmatcap_frag},points:{uniforms:Mi([Ce.points,Ce.fog]),vertexShader:nt.points_vert,fragmentShader:nt.points_frag},dashed:{uniforms:Mi([Ce.common,Ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:nt.linedashed_vert,fragmentShader:nt.linedashed_frag},depth:{uniforms:Mi([Ce.common,Ce.displacementmap]),vertexShader:nt.depth_vert,fragmentShader:nt.depth_frag},normal:{uniforms:Mi([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,{opacity:{value:1}}]),vertexShader:nt.meshnormal_vert,fragmentShader:nt.meshnormal_frag},sprite:{uniforms:Mi([Ce.sprite,Ce.fog]),vertexShader:nt.sprite_vert,fragmentShader:nt.sprite_frag},background:{uniforms:{uvTransform:{value:new We},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:nt.background_vert,fragmentShader:nt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new We}},vertexShader:nt.backgroundCube_vert,fragmentShader:nt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:nt.cube_vert,fragmentShader:nt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:nt.equirect_vert,fragmentShader:nt.equirect_frag},distance:{uniforms:Mi([Ce.common,Ce.displacementmap,{referencePosition:{value:new w},nearDistance:{value:1},farDistance:{value:1000}}]),vertexShader:nt.distance_vert,fragmentShader:nt.distance_frag},shadow:{uniforms:Mi([Ce.lights,Ce.fog,{color:{value:new fe(0)},opacity:{value:1}}]),vertexShader:nt.shadow_vert,fragmentShader:nt.shadow_frag}};ki.physical={uniforms:Mi([ki.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new We},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new We},clearcoatNormalScale:{value:new K(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new We},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new We},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new We},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new We},sheen:{value:0},sheenColor:{value:new fe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new We},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new We},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new We},transmissionSamplerSize:{value:new K},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new We},attenuationDistance:{value:0},attenuationColor:{value:new fe(0)},specularColor:{value:new fe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new We},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new We},anisotropyVector:{value:new K},anisotropyMap:{value:null},anisotropyMapTransform:{value:new We}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag};var fl={r:0,b:0,g:0},ax=new Xe,ep=new We;ep.set(-1,0,0,0,1,0,0,0,1);function tp(e,t,i,r,n,s){let o=new fe(0),a=n===!0?0:1,l,c,f=null,u=0,h=null;function d(b){let T=b.isScene===!0?b.background:null;if(T&&T.isTexture){let S=b.backgroundBlurriness>0;T=t.get(T,S)}return T}function x(b){let T=!1,S=d(b);if(S===null)p(o,a);else if(S&&S.isColor)p(S,1),T=!0;let A=e.xr.getEnvironmentBlendMode();if(A==="additive")i.buffers.color.setClear(0,0,0,1,s);else if(A==="alpha-blend")i.buffers.color.setClear(0,0,0,0,s);if(e.autoClear||T)i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil)}function M(b,T){let S=d(T);if(S&&S.isCubeTexture){if(c===void 0)c=new je(new Li(1,1,1),new Et({name:"BackgroundCubeMaterial",uniforms:Rr(ki.backgroundCube.uniforms),vertexShader:ki.backgroundCube.vertexShader,fragmentShader:ki.backgroundCube.fragmentShader,side:Lt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(A,C,g){this.matrixWorld.copyPosition(g.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c);if(c.material.uniforms.envMap.value=S,c.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(ax.makeRotationFromEuler(T.backgroundRotation)).transpose(),S.isRenderTargetTexture===!1)c.material.uniforms.backgroundRotation.value.premultiply(ep);if(c.material.toneMapped=tt.getTransfer(S.colorSpace)!==ut,f!==S||u!==S.version||h!==e.toneMapping)c.material.needsUpdate=!0,f=S,u=S.version,h=e.toneMapping;c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null)}else if(S&&S.isTexture){if(l===void 0)l=new je(new lr(2,2),new Et({name:"BackgroundMaterial",uniforms:Rr(ki.background.uniforms),vertexShader:ki.background.vertexShader,fragmentShader:ki.background.fragmentShader,side:Hi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l);if(l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,l.material.toneMapped=tt.getTransfer(S.colorSpace)!==ut,S.matrixAutoUpdate===!0)S.updateMatrix();if(l.material.uniforms.uvTransform.value.copy(S.matrix),f!==S||u!==S.version||h!==e.toneMapping)l.material.needsUpdate=!0,f=S,u=S.version,h=e.toneMapping;l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null)}}function p(b,T){b.getRGB(fl,ja(e)),i.buffers.color.setClear(fl.r,fl.g,fl.b,T,s)}function m(){if(c!==void 0)c.geometry.dispose(),c.material.dispose(),c=void 0;if(l!==void 0)l.geometry.dispose(),l.material.dispose(),l=void 0}return{getClearColor:function(){return o},setClearColor:function(b,T=1){o.set(b),a=T,p(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(b){a=b,p(o,a)},render:x,addToRenderList:M,dispose:m}}function ip(e,t){let i=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},n=h(null),s=n,o=!1;function a(I,H,re,R,J){let te=!1,G=u(I,R,re,H);if(s!==G)s=G,c(s.object);if(te=d(I,R,re,J),te)x(I,R,re,J);if(J!==null)t.update(J,e.ELEMENT_ARRAY_BUFFER);if(te||o){if(o=!1,S(I,H,re,R),J!==null)e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(J).buffer)}}function l(){return e.createVertexArray()}function c(I){return e.bindVertexArray(I)}function f(I){return e.deleteVertexArray(I)}function u(I,H,re,R){let J=R.wireframe===!0,te=r[H.id];if(te===void 0)te={},r[H.id]=te;let G=I.isInstancedMesh===!0?I.id:0,pe=te[G];if(pe===void 0)pe={},te[G]=pe;let Q=pe[re.id];if(Q===void 0)Q={},pe[re.id]=Q;let ee=Q[J];if(ee===void 0)ee=h(l()),Q[J]=ee;return ee}function h(I){let H=[],re=[],R=[];for(let J=0;J<i;J++)H[J]=0,re[J]=0,R[J]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:re,attributeDivisors:R,object:I,attributes:{},index:null}}function d(I,H,re,R){let J=s.attributes,te=H.attributes,G=0,pe=re.getAttributes();for(let Q in pe)if(pe[Q].location>=0){let ce=J[Q],De=te[Q];if(De===void 0){if(Q==="instanceMatrix"&&I.instanceMatrix)De=I.instanceMatrix;if(Q==="instanceColor"&&I.instanceColor)De=I.instanceColor}if(ce===void 0)return!0;if(ce.attribute!==De)return!0;if(De&&ce.data!==De.data)return!0;G++}if(s.attributesNum!==G)return!0;if(s.index!==R)return!0;return!1}function x(I,H,re,R){let J={},te=H.attributes,G=0,pe=re.getAttributes();for(let Q in pe)if(pe[Q].location>=0){let ce=te[Q];if(ce===void 0){if(Q==="instanceMatrix"&&I.instanceMatrix)ce=I.instanceMatrix;if(Q==="instanceColor"&&I.instanceColor)ce=I.instanceColor}let De={};if(De.attribute=ce,ce&&ce.data)De.data=ce.data;J[Q]=De,G++}s.attributes=J,s.attributesNum=G,s.index=R}function M(){let I=s.newAttributes;for(let H=0,re=I.length;H<re;H++)I[H]=0}function p(I){m(I,0)}function m(I,H){let re=s.newAttributes,R=s.enabledAttributes,J=s.attributeDivisors;if(re[I]=1,R[I]===0)e.enableVertexAttribArray(I),R[I]=1;if(J[I]!==H)e.vertexAttribDivisor(I,H),J[I]=H}function b(){let I=s.newAttributes,H=s.enabledAttributes;for(let re=0,R=H.length;re<R;re++)if(H[re]!==I[re])e.disableVertexAttribArray(re),H[re]=0}function T(I,H,re,R,J,te,G){if(G===!0)e.vertexAttribIPointer(I,H,re,J,te);else e.vertexAttribPointer(I,H,re,R,J,te)}function S(I,H,re,R){M();let J=R.attributes,te=re.getAttributes(),G=H.defaultAttributeValues;for(let pe in te){let Q=te[pe];if(Q.location>=0){let ee=J[pe];if(ee===void 0){if(pe==="instanceMatrix"&&I.instanceMatrix)ee=I.instanceMatrix;if(pe==="instanceColor"&&I.instanceColor)ee=I.instanceColor}if(ee!==void 0){let ce=ee.normalized,De=ee.itemSize,q=t.get(ee);if(q===void 0)continue;let{buffer:he,type:Ue,bytesPerElement:Pe}=q,qe=Ue===e.INT||Ue===e.UNSIGNED_INT||ee.gpuType===kn;if(ee.isInterleavedBufferAttribute){let Ae=ee.data,ft=Ae.isInterleavedBuffer===!0?Ae.stride:Ae.itemSize,it=ee.offset;if(Ae.isInstancedInterleavedBuffer||Ae.isInstancedBufferAttribute){for(let Ze=0;Ze<Q.locationSize;Ze++)m(Q.location+Ze,Ae.meshPerAttribute);if(I.isInstancedMesh!==!0&&R._maxInstanceCount===void 0)R._maxInstanceCount=Ae.meshPerAttribute*Ae.count}else for(let Ze=0;Ze<Q.locationSize;Ze++)p(Q.location+Ze);e.bindBuffer(e.ARRAY_BUFFER,he);for(let Ze=0;Ze<Q.locationSize;Ze++)T(Q.location+Ze,De/Q.locationSize,Ue,ce,ft*Pe,(it+De/Q.locationSize*Ze)*Pe,qe)}else{if(ee.isInstancedBufferAttribute){for(let Ae=0;Ae<Q.locationSize;Ae++)m(Q.location+Ae,ee.meshPerAttribute);if(I.isInstancedMesh!==!0&&R._maxInstanceCount===void 0)R._maxInstanceCount=ee.meshPerAttribute*ee.count}else for(let Ae=0;Ae<Q.locationSize;Ae++)p(Q.location+Ae);e.bindBuffer(e.ARRAY_BUFFER,he);for(let Ae=0;Ae<Q.locationSize;Ae++)T(Q.location+Ae,De/Q.locationSize,Ue,ce,De*Pe,De/Q.locationSize*Ae*Pe,qe)}}else if(G!==void 0){let ce=G[pe];if(ce!==void 0)switch(ce.length){case 2:e.vertexAttrib2fv(Q.location,ce);break;case 3:e.vertexAttrib3fv(Q.location,ce);break;case 4:e.vertexAttrib4fv(Q.location,ce);break;default:e.vertexAttrib1fv(Q.location,ce)}}}}b()}function A(){P();for(let I in r){let H=r[I];for(let re in H){let R=H[re];for(let J in R){let te=R[J];for(let G in te)f(te[G].object),delete te[G];delete R[J]}}delete r[I]}}function C(I){if(r[I.id]===void 0)return;let H=r[I.id];for(let re in H){let R=H[re];for(let J in R){let te=R[J];for(let G in te)f(te[G].object),delete te[G];delete R[J]}}delete r[I.id]}function g(I){for(let H in r){let re=r[H];for(let R in re){let J=re[R];if(J[I.id]===void 0)continue;let te=J[I.id];for(let G in te)f(te[G].object),delete te[G];delete J[I.id]}}}function y(I){for(let H in r){let re=r[H],R=I.isInstancedMesh===!0?I.id:0,J=re[R];if(J===void 0)continue;for(let te in J){let G=J[te];for(let pe in G)f(G[pe].object),delete G[pe];delete J[te]}if(delete re[R],Object.keys(re).length===0)delete r[H]}}function P(){if(k(),o=!0,s===n)return;s=n,c(s.object)}function k(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:a,reset:P,resetDefaultState:k,dispose:A,releaseStatesOfGeometry:C,releaseStatesOfObject:y,releaseStatesOfProgram:g,initAttributes:M,enableAttribute:p,disableUnusedAttributes:b}}function rp(e,t,i){let r;function n(l){r=l}function s(l,c){e.drawArrays(r,l,c),i.update(c,r,1)}function o(l,c,f){if(f===0)return;e.drawArraysInstanced(r,l,c,f),i.update(c,r,f)}function a(l,c,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,l,0,c,0,f);let h=0;for(let d=0;d<f;d++)h+=c[d];i.update(h,r,1)}this.setMode=n,this.render=s,this.renderInstances=o,this.renderMultiDraw=a}function np(e,t,i,r){let n;function s(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){let g=t.get("EXT_texture_filter_anisotropic");n=e.getParameter(g.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function o(g){if(g!==si&&r.convert(g)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))return!1;return!0}function a(g){let y=g===wt&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));if(g!==Ht&&g!==Wt&&!y&&r.convert(g)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))return!1;return!0}function l(g){if(g==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";g="mediump"}if(g==="mediump"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0)return"mediump"}return"lowp"}let c=i.precision!==void 0?i.precision:"highp",f=l(c);if(f!==c)Se("WebGLRenderer:",c,"not supported, using",f,"instead."),c=f;let u=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),h=i.logarithmicDepthBuffer===!0&&u===!1;if(i.reversedDepthBuffer===!0&&u===!1)Se("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");if(i.logarithmicDepthBuffer===!0&&u===!0)Se("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let d=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),x=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=e.getParameter(e.MAX_TEXTURE_SIZE),p=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),m=e.getParameter(e.MAX_VERTEX_ATTRIBS),b=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),T=e.getParameter(e.MAX_VARYING_VECTORS),S=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),A=e.getParameter(e.MAX_SAMPLES),C=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:u,maxTextures:d,maxVertexTextures:x,maxTextureSize:M,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:b,maxVaryings:T,maxFragmentUniforms:S,maxSamples:A,samples:C}}function sp(e){let t=this,i=null,r=0,n=!1,s=!1,o=new wi,a=new We,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,h){let d=u.length!==0||h||r!==0||n;return n=h,r=u.length,d},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,h){i=f(u,h,0)},this.setState=function(u,h,d){let{clippingPlanes:x,clipIntersection:M,clipShadows:p}=u,m=e.get(u);if(!n||x===null||x.length===0||s&&!p)if(s)f(null);else c();else{let b=s?0:r,T=b*4,S=m.clippingState||null;l.value=S,S=f(x,h,T,d);for(let A=0;A!==T;++A)S[A]=i[A];m.clippingState=S,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=b}};function c(){if(l.value!==i)l.value=i,l.needsUpdate=r>0;t.numPlanes=r,t.numIntersection=0}function f(u,h,d,x){let M=u!==null?u.length:0,p=null;if(M!==0){if(p=l.value,x!==!0||p===null){let m=d+M*4,b=h.matrixWorldInverse;if(a.getNormalMatrix(b),p===null||p.length<m)p=new Float32Array(m);for(let T=0,S=d;T!==M;++T,S+=4)o.copy(u[T]).applyMatrix4(b,a),o.normal.toArray(p,S),p[S+3]=o.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=M,t.numIntersection=0,p}}class Zr extends Tt{constructor(e=1,t={}){super(e,e,t);this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Vr(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Li(5,5,5),n=new Et({name:"CubemapFromEquirect",uniforms:Rr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Lt,blending:Wi});n.uniforms.tEquirect.value=t;let s=new je(r,n),o=t.minFilter;if(t.minFilter===Ti)t.minFilter=Nt;return new An(1,10,this).update(e,s),t.minFilter=o,s.geometry.dispose(),s.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){let n=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,i,r);e.setRenderTarget(n)}}var op=256,lx=3,cx=20,hp=256,up=16,hx=3,ux=new w,fx=new fe;class Jr{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new An(1,10,null),this._boxMesh=new je(new Li(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,i=0.1,r=100,n={}){let{size:s=256,position:o=ux}=n,a=this._renderer;this._setSize(s);let l=this._allocateTarget(),c=this._getSourceTarget(!0);if(t>0)c.texture.mipmapsAutoUpdate=!1;let{autoClear:f,autoClearColor:u,autoClearDepth:h,autoClearStencil:d}=a,x=e.background;if(a.autoClear=!0,a.autoClearColor=!0,a.autoClearDepth=!0,a.autoClearStencil=!0,x===null)e.background=a.getClearColor(fx);let M=new An(i,r,c);if(M.position.copy(o),M.update(a,e),a.autoClear=f,a.autoClearColor=u,a.autoClearDepth=h,a.autoClearStencil=d,e.background=x,t>0)c.texture.mipmapsAutoUpdate=!0,this._blur(l,t);return this._applyPMREM(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){if(this._cubemapMaterial===null)this._cubemapMaterial=cp(),this._compileMaterial(this._cubemapMaterial)}compileEquirectangularShader(){if(this._equirectMaterial===null)this._equirectMaterial=lp(),this._compileMaterial(this._equirectMaterial)}dispose(){if(this._sourceTarget!==null)this._sourceTarget.dispose();if(this._cubemapMaterial!==null)this._cubemapMaterial.dispose();if(this._equirectMaterial!==null)this._equirectMaterial.dispose();if(this._blurMaterial!==null)this._blurMaterial.dispose();if(this._ggxMaterial!==null)this._ggxMaterial.dispose();if(this._integrationMaterial!==null)this._integrationMaterial.dispose();this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(op,vh(e))}_fromTexture(e,t){if(e.mapping===Xi||e.mapping===yr)this._setSize(e.image.length===0?op:e.image[0].width||e.image[0].image.width);else this._setSize(e.image.width/4);let i=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(i),i}_allocateTarget(){let e=this._cubeSize,t=ap(e,!1,!1),i=Math.log2(e)-lx;for(let r=0;r<=i;r++)t.texture.mipmaps.push({width:e>>r,height:e>>r});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,i=this._sourceTarget;if(i===null||i.width!==t||e&&i.depthBuffer===!1){if(i!==null)i.dispose();this._sourceTarget=ap(t,!0,e)}return this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,i){let r=this._boxMesh,n=this._cubeCamera;r.material=i,n.renderTarget=e,n.activeMipmapLevel=t;let s=e.width>>t;e.viewport.set(0,0,s,s),n.update(this._renderer,r),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;if(e.mapping===Xi||e.mapping===yr){if(this._cubemapMaterial===null)this._cubemapMaterial=cp();t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1}else{if(this._equirectMaterial===null)this._equirectMaterial=lp();t=this._equirectMaterial}t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){if(this._ggxMaterial===null)this._ggxMaterial=dx(),this._integrationMaterial=px();let t=this._cubeSize,i=e.texture.mipmaps.length-1,r=this._ggxMaterial.uniforms;r.envMap.value=this._sourceTarget.texture;let n=this._integrationMaterial.uniforms;n.envMap.value=this._sourceTarget.texture,n.sourceLod.value=Math.log2(t/up);for(let s=0;s<=i;s++){let o=Jr.lodToRoughness(s,i);if(s>i-hx)n.roughness.value=o,this._renderCube(e,s,this._integrationMaterial);else{let a=o>0?Math.log2(t)+0.5*Math.log2(6/(hp*Math.pow(o,4)))+0.5:0;r.roughness.value=o,r.lodBias.value=a,this._renderCube(e,s,this._ggxMaterial)}}}_blur(e,t){if(this._blurMaterial===null)this._blurMaterial=mx();let i=this._blurMaterial,r=i.uniforms,n=this._sourceTarget;r.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,r.envMap.value=n.texture,this._renderCube(e,0,i),r.envMap.value=e.texture,this._renderCube(n,0,i)}}function ap(e,t,i){return new Zr(e,{minFilter:Ti,generateMipmaps:t,type:wt,colorSpace:on,depthBuffer:i})}function Jo(e,t,i){return new Et({name:e,uniforms:t,vertexShader:nt.cube_vert,fragmentShader:i,side:Lt,blending:Wi,depthTest:!1,depthWrite:!1})}function dx(){return Jo("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${hp}u

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
	`)}function px(){return Jo("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:up}},`

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
	`)}function mx(){return Jo("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${cx}
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
	`)}function lp(){return Jo("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function cp(){return Jo("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function fp(e){let t=new WeakMap,i=new WeakMap,r=null;function n(h,d=!1){if(h===null||h===void 0)return null;if(d)return o(h);return s(h)}function s(h){if(h&&h.isTexture){let d=h.mapping;if(d===Ns||d===Us)if(t.has(h)){let x=t.get(h).texture;return a(x,h.mapping)}else{let x=h.image;if(x&&x.height>0){let M=new Zr(x.height);return M.fromEquirectangularTexture(e,h),t.set(h,M),h.addEventListener("dispose",c),a(M.texture,h.mapping)}else return null}}return h}function o(h){if(h&&h.isTexture&&h.isPMREMTexture!==!0){let d=h.mapping,x=d===Ns||d===Us,M=d===Xi||d===yr;if(x||M){let p=i.get(h),m=p!==void 0?p.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==m){if(r===null)r=new Jr(e);return p=x?r.fromEquirectangular(h,p):r.fromCubemap(h,p),p.texture.pmremVersion=h.pmremVersion,i.set(h,p),p.texture}else if(p!==void 0)return p.texture;else{let b=h.image;if(x&&b&&b.height>0||M&&b&&l(b)){if(r===null)r=new Jr(e);return p=x?r.fromEquirectangular(h):r.fromCubemap(h),p.texture.pmremVersion=h.pmremVersion,i.set(h,p),h.addEventListener("dispose",f),p.texture}else return null}}}return h}function a(h,d){if(d===Ns)h.mapping=Xi;else if(d===Us)h.mapping=yr;return h}function l(h){let d=0,x=6;for(let M=0;M<x;M++)if(h[M]!==void 0)d++;return d===x}function c(h){let d=h.target;d.removeEventListener("dispose",c);let x=t.get(d);if(x!==void 0)t.delete(d),x.dispose()}function f(h){let d=h.target;d.removeEventListener("dispose",f);let x=i.get(d);if(x!==void 0)i.delete(d),x.dispose()}function u(){if(t=new WeakMap,i=new WeakMap,r!==null)r.dispose(),r=null}return{get:n,dispose:u}}function dp(e){let t={};function i(r){if(t[r]!==void 0)return t[r];let n=e.getExtension(r);return t[r]=n,n}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){let n=i(r);if(n===null)Yi("WebGLRenderer: "+r+" extension not supported.");return n}}}function pp(e,t,i,r){let n={},s=new WeakMap,o=new FinalizationRegistry((x)=>delete n[x]);function a(x){l(x.target)}function l(x){if(x.index!==null)t.remove(x.index);for(let p in x.attributes)t.remove(x.attributes[p]);x.removeEventListener("dispose",a),delete n[x.id],o.unregister(x);let M=s.get(x);if(M)t.remove(M),s.delete(x);if(r.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0)delete x._maxInstanceCount;i.memory.geometries--}function c(x,M){if(n[M.id]!==void 0)return M;return M.addEventListener("dispose",a),n[M.id]=new WeakRef(M),o.register(M,M.id,M),i.memory.geometries++,M}function f(x){let M=x.attributes;for(let p in M)t.update(M[p],e.ARRAY_BUFFER)}function u(x){let M=x.index,p=x.attributes.position,m=0;if(p===void 0)return;let b=M!==null?M.array.length:p.array.length/3-1,S=new(p.count>=65535?yo:vo)(Math.ceil(b/3)*6,1),A=S.array;if(M!==null){let g=M.array;m=M.version;for(let y=0,P=0;y<b;y+=3){let k=g[y+0],I=g[y+1],H=g[y+2];A[P++]=k,A[P++]=I,A[P++]=I,A[P++]=H,A[P++]=H,A[P++]=k}}else{m=p.version;for(let g=0,y=0;g<b;g+=3){let P=g+0,k=g+1,I=g+2;A[y++]=P,A[y++]=k,A[y++]=k,A[y++]=I,A[y++]=I,A[y++]=P}}S.version=m;let C=s.get(x);if(C)t.remove(C);s.set(x,S)}function h(x){let M=s.get(x);if(M){let p=x.index;if(p!==null){if(M.version<p.version)u(x)}}else u(x);return s.get(x)}function d(){for(let x in n){let M=n[x].deref();if(M!==void 0)l(M)}}return{get:c,update:f,getWireframeAttribute:h,dispose:d}}function mp(e,t,i){let r;function n(u){r=u}let s,o;function a(u){s=u.type,o=u.bytesPerElement}function l(u,h){e.drawElements(r,h,s,u*o),i.update(h,r,1)}function c(u,h,d){if(d===0)return;e.drawElementsInstanced(r,h,s,u*o,d),i.update(h,r,d)}function f(u,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,h,0,s,u,0,d);let M=0;for(let p=0;p<d;p++)M+=h[p];i.update(M,r,1)}this.setMode=n,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=f}function gp(e){let t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(s,o,a){switch(i.calls++,o){case e.TRIANGLES:i.triangles+=a*(s/3);break;case e.LINES:i.lines+=a*(s/2);break;case e.LINE_STRIP:i.lines+=a*(s-1);break;case e.LINE_LOOP:i.lines+=a*s;break;case e.POINTS:i.points+=a*s;break;default:Fe("WebGLInfo: Unknown draw mode:",o);break}}function n(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:n,update:r}}function xp(e,t,i){let r=new WeakMap,n=new mt;function s(o,a,l){let c=o.morphTargetInfluences,f=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=f!==void 0?f.length:0,h=r.get(a);if(h===void 0||h.count!==u){let P=function(){g.dispose(),r.delete(a),a.removeEventListener("dispose",P)};if(h!==void 0)h.texture.dispose();let d=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,M=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],b=a.morphAttributes.color||[],T=0;if(d===!0)T=1;if(x===!0)T=2;if(M===!0)T=3;let S=a.attributes.position.count*T,A=1;if(S>t.maxTextureSize)A=Math.ceil(S/t.maxTextureSize),S=t.maxTextureSize;let C=new Float32Array(S*A*4*u),g=new un(C,S,A,u);g.type=Wt,g.needsUpdate=!0;let y=T*4;for(let k=0;k<u;k++){let I=p[k],H=m[k],re=b[k],R=S*A*4*k;for(let J=0;J<I.count;J++){let te=J*y;if(d===!0)n.fromBufferAttribute(I,J),C[R+te+0]=n.x,C[R+te+1]=n.y,C[R+te+2]=n.z,C[R+te+3]=0;if(x===!0)n.fromBufferAttribute(H,J),C[R+te+4]=n.x,C[R+te+5]=n.y,C[R+te+6]=n.z,C[R+te+7]=0;if(M===!0)n.fromBufferAttribute(re,J),C[R+te+8]=n.x,C[R+te+9]=n.y,C[R+te+10]=n.z,C[R+te+11]=re.itemSize===4?n.w:1}}h={count:u,texture:g,size:new K(S,A)},r.set(a,h),a.addEventListener("dispose",P)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(e,"morphTexture",o.morphTexture,i);else{let d=0;for(let M=0;M<c.length;M++)d+=c[M];let x=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(e,"morphTargetBaseInfluence",x),l.getUniforms().setValue(e,"morphTargetInfluences",c)}l.getUniforms().setValue(e,"morphTargetsTexture",h.texture,i),l.getUniforms().setValue(e,"morphTargetsTextureSize",h.size)}return{update:s}}function _p(e,t,i,r,n){let s=new WeakMap;function o(c){let f=n.render.frame,u=c.geometry,h=t.get(c,u);if(s.get(h)!==f)t.update(h),s.set(h,f);if(c.isInstancedMesh){if(c.hasEventListener("dispose",l)===!1)c.addEventListener("dispose",l);if(s.get(c)!==f){if(i.update(c.instanceMatrix,e.ARRAY_BUFFER),c.instanceColor!==null)i.update(c.instanceColor,e.ARRAY_BUFFER);s.set(c,f)}}if(c.isSkinnedMesh){let d=c.skeleton;if(s.get(d)!==f)d.update(),s.set(d,f)}return h}function a(){s=new WeakMap}function l(c){let f=c.target;if(f.removeEventListener("dispose",l),r.releaseStatesOfObject(f),i.remove(f.instanceMatrix),f.instanceColor!==null)i.remove(f.instanceColor)}return{update:o,dispose:a}}var gx={[Dn]:"LINEAR_TONE_MAPPING",[Nn]:"REINHARD_TONE_MAPPING",[Un]:"CINEON_TONE_MAPPING",[Fr]:"ACES_FILMIC_TONE_MAPPING",[Bn]:"AGX_TONE_MAPPING",[On]:"NEUTRAL_TONE_MAPPING",[Fn]:"CUSTOM_TONE_MAPPING"};function vp(e,t,i,r,n,s){let o=new Tt(t,i,{type:e,depthBuffer:n,stencilBuffer:s,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=null,f=new ke;f.setAttribute("position",new Be([-1,3,0,-1,-1,0,3,-1,0],3)),f.setAttribute("uv",new Be([0,2,0,0,2,0],2));let u=new Tn({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),h=new je(f,u),d=new Pr(-1,1,1,-1,0,1),x=null,M=null,p=!1,m,b=null,T=[],S=!1;this.setSize=function(A,C){if(o.setSize(A,C),a!==null)a.setSize(A,C);if(l!==null)l.setSize(A,C);for(let g=0;g<T.length;g++){let y=T[g];if(y.setSize)y.setSize(A,C)}},this.setEffects=function(A){T=A,S=T.length>0&&T[0].isRenderPass===!0;let{width:C,height:g}=o;if(T.length>0&&a===null)a=new Tt(C,g,{type:wt,depthBuffer:!1,stencilBuffer:!1}),l=new Tt(C,g,{type:wt,depthBuffer:!1,stencilBuffer:!1});let y=n===!0&&T.some((P)=>P.needsDepthTexture===!0);if(y!==(o.depthTexture!==null)){if(y===!0&&c===null){if(c=new zi(C,g),s===!0)c.format=Ui,c.type=tr}o.dispose(),o.depthTexture=y?c:null,o.resolveDepthBuffer=y,o.storeMultisampledDepthBuffer=y}for(let P=0;P<T.length;P++){let k=T[P];if(k.setSize)k.setSize(C,g);if(y&&k.needsDepthTexture===!0&&k.setDepthTexture)k.setDepthTexture(c)}},this.begin=function(A,C){if(p)return!1;if(A.toneMapping===Ni&&T.length===0)return!1;if(b=C,C!==null){let{width:g,height:y}=C;if(o.width!==g||o.height!==y)this.setSize(g,y)}if(S===!1)A.setRenderTarget(o);return m=A.toneMapping,A.toneMapping=Ni,!0},this.hasRenderPass=function(){return S},this.end=function(A,C){A.toneMapping=m,p=!0;let g=o,y=a;for(let P=0;P<T.length;P++){let k=T[P];if(k.enabled===!1)continue;if(k.render(A,y,g,C),k.needsSwap!==!1)g=y,y=y===a?l:a}if(x!==A.outputColorSpace||M!==A.toneMapping){if(x=A.outputColorSpace,M=A.toneMapping,u.defines={},tt.getTransfer(x)===ut)u.defines.SRGB_TRANSFER="";let P=gx[M];if(P)u.defines[P]="";u.needsUpdate=!0}u.uniforms.tDiffuse.value=g.texture,A.setRenderTarget(b),A.render(h,d),b=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){if(o.dispose(),a!==null)a.dispose();if(l!==null)l.dispose();f.dispose(),u.dispose()}}var wp=new vt,Ap=new zi(1,1),Rp=new ms(1),Cp=new un,Pp=new ts,Ip=new Vr,yp=[],Mp=[],Sp=new Float32Array(16),bp=new Float32Array(9),Tp=new Float32Array(4);function bs(e,t,i){let r=e[0];if(r<=0||r>0)return e;let n=t*i,s=yp[n];if(s===void 0)s=new Float32Array(n),yp[n]=s;if(t!==0){r.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=i,e[o].toArray(s,a)}return s}function ei(e,t){if(e.length!==t.length)return!1;for(let i=0,r=e.length;i<r;i++)if(e[i]!==t[i])return!1;return!0}function ti(e,t){for(let i=0,r=t.length;i<r;i++)e[i]=t[i]}function dl(e,t){let i=Mp[t];if(i===void 0)i=new Int32Array(t),Mp[t]=i;for(let r=0;r!==t;++r)i[r]=e.allocateTextureUnit();return i}function xx(e,t){let i=this.cache;if(i[0]===t)return;e.uniform1f(this.addr,t),i[0]=t}function _x(e,t){let i=this.cache;if(t.x!==void 0){if(i[0]!==t.x||i[1]!==t.y)e.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y}else{if(ei(i,t))return;e.uniform2fv(this.addr,t),ti(i,t)}}function vx(e,t){let i=this.cache;if(t.x!==void 0){if(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)e.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z}else if(t.r!==void 0){if(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)e.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b}else{if(ei(i,t))return;e.uniform3fv(this.addr,t),ti(i,t)}}function yx(e,t){let i=this.cache;if(t.x!==void 0){if(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)e.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w}else{if(ei(i,t))return;e.uniform4fv(this.addr,t),ti(i,t)}}function Mx(e,t){let i=this.cache,r=t.elements;if(r===void 0){if(ei(i,t))return;e.uniformMatrix2fv(this.addr,!1,t),ti(i,t)}else{if(ei(i,r))return;Tp.set(r),e.uniformMatrix2fv(this.addr,!1,Tp),ti(i,r)}}function Sx(e,t){let i=this.cache,r=t.elements;if(r===void 0){if(ei(i,t))return;e.uniformMatrix3fv(this.addr,!1,t),ti(i,t)}else{if(ei(i,r))return;bp.set(r),e.uniformMatrix3fv(this.addr,!1,bp),ti(i,r)}}function bx(e,t){let i=this.cache,r=t.elements;if(r===void 0){if(ei(i,t))return;e.uniformMatrix4fv(this.addr,!1,t),ti(i,t)}else{if(ei(i,r))return;Sp.set(r),e.uniformMatrix4fv(this.addr,!1,Sp),ti(i,r)}}function Tx(e,t){let i=this.cache;if(i[0]===t)return;e.uniform1i(this.addr,t),i[0]=t}function Ex(e,t){let i=this.cache;if(t.x!==void 0){if(i[0]!==t.x||i[1]!==t.y)e.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y}else{if(ei(i,t))return;e.uniform2iv(this.addr,t),ti(i,t)}}function wx(e,t){let i=this.cache;if(t.x!==void 0){if(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)e.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z}else{if(ei(i,t))return;e.uniform3iv(this.addr,t),ti(i,t)}}function Ax(e,t){let i=this.cache;if(t.x!==void 0){if(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)e.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w}else{if(ei(i,t))return;e.uniform4iv(this.addr,t),ti(i,t)}}function Rx(e,t){let i=this.cache;if(i[0]===t)return;e.uniform1ui(this.addr,t),i[0]=t}function Cx(e,t){let i=this.cache;if(t.x!==void 0){if(i[0]!==t.x||i[1]!==t.y)e.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y}else{if(ei(i,t))return;e.uniform2uiv(this.addr,t),ti(i,t)}}function Px(e,t){let i=this.cache;if(t.x!==void 0){if(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)e.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z}else{if(ei(i,t))return;e.uniform3uiv(this.addr,t),ti(i,t)}}function Ix(e,t){let i=this.cache;if(t.x!==void 0){if(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w}else{if(ei(i,t))return;e.uniform4uiv(this.addr,t),ti(i,t)}}function pl(e){if(e.version===0)e.compareFunction=_a,e.needsUpdate=!0;return e}function Lx(e,t,i){let r=this.cache,n=i.allocateTextureUnit();if(r[0]!==n)e.uniform1i(this.addr,n),r[0]=n;let s;if(this.type===e.SAMPLER_2D_SHADOW)s=pl(Ap);else s=wp;i.setTexture2D(t||s,n)}function Dx(e,t,i){let r=this.cache,n=i.allocateTextureUnit();if(r[0]!==n)e.uniform1i(this.addr,n),r[0]=n;i.setTexture3D(t||Pp,n)}function Nx(e,t,i){let r=this.cache,n=i.allocateTextureUnit();if(r[0]!==n)e.uniform1i(this.addr,n),r[0]=n;let s;if(this.type===e.SAMPLER_CUBE_SHADOW)s=pl(Rp);else s=Ip;i.setTextureCube(t||s,n)}function Ux(e,t,i){let r=this.cache,n=i.allocateTextureUnit();if(r[0]!==n)e.uniform1i(this.addr,n),r[0]=n;i.setTexture2DArray(t||Cp,n)}function Fx(e){switch(e){case 5126:return xx;case 35664:return _x;case 35665:return vx;case 35666:return yx;case 35674:return Mx;case 35675:return Sx;case 35676:return bx;case 5124:case 35670:return Tx;case 35667:case 35671:return Ex;case 35668:case 35672:return wx;case 35669:case 35673:return Ax;case 5125:return Rx;case 36294:return Cx;case 36295:return Px;case 36296:return Ix;case 35678:case 36198:case 36298:case 36306:case 35682:return Lx;case 35679:case 36299:case 36307:return Dx;case 35680:case 36300:case 36308:case 36293:return Nx;case 36289:case 36303:case 36311:case 36292:return Ux}}function Bx(e,t){e.uniform1fv(this.addr,t)}function Ox(e,t){let i=bs(t,this.size,2);e.uniform2fv(this.addr,i)}function zx(e,t){let i=bs(t,this.size,3);e.uniform3fv(this.addr,i)}function Gx(e,t){let i=bs(t,this.size,4);e.uniform4fv(this.addr,i)}function Vx(e,t){let i=bs(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,i)}function kx(e,t){let i=bs(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,i)}function Hx(e,t){let i=bs(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,i)}function Wx(e,t){e.uniform1iv(this.addr,t)}function Xx(e,t){e.uniform2iv(this.addr,t)}function qx(e,t){e.uniform3iv(this.addr,t)}function Yx(e,t){e.uniform4iv(this.addr,t)}function Zx(e,t){e.uniform1uiv(this.addr,t)}function Jx(e,t){e.uniform2uiv(this.addr,t)}function Kx(e,t){e.uniform3uiv(this.addr,t)}function Qx(e,t){e.uniform4uiv(this.addr,t)}function $x(e,t,i){let r=this.cache,n=t.length,s=dl(i,n);if(!ei(r,s))e.uniform1iv(this.addr,s),ti(r,s);let o;if(this.type===e.SAMPLER_2D_SHADOW)o=pl(Ap);else o=wp;for(let a=0;a!==n;++a)i.setTexture2D(t[a]||o,s[a])}function jx(e,t,i){let r=this.cache,n=t.length,s=dl(i,n);if(!ei(r,s))e.uniform1iv(this.addr,s),ti(r,s);for(let o=0;o!==n;++o)i.setTexture3D(t[o]||Pp,s[o])}function e0(e,t,i){let r=this.cache,n=t.length,s=dl(i,n);if(!ei(r,s))e.uniform1iv(this.addr,s),ti(r,s);let o;if(this.type===e.SAMPLER_CUBE_SHADOW)o=pl(Rp);else o=Ip;for(let a=0;a!==n;++a)i.setTextureCube(t[a]||o,s[a])}function t0(e,t,i){let r=this.cache,n=t.length,s=dl(i,n);if(!ei(r,s))e.uniform1iv(this.addr,s),ti(r,s);for(let o=0;o!==n;++o)i.setTexture2DArray(t[o]||Cp,s[o])}function i0(e){switch(e){case 5126:return Bx;case 35664:return Ox;case 35665:return zx;case 35666:return Gx;case 35674:return Vx;case 35675:return kx;case 35676:return Hx;case 5124:case 35670:return Wx;case 35667:case 35671:return Xx;case 35668:case 35672:return qx;case 35669:case 35673:return Yx;case 5125:return Zx;case 36294:return Jx;case 36295:return Kx;case 36296:return Qx;case 35678:case 36198:case 36298:case 36306:case 35682:return $x;case 35679:case 36299:case 36307:return jx;case 35680:case 36300:case 36308:case 36293:return e0;case 36289:case 36303:case 36311:case 36292:return t0}}class Lp{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Fx(t.type)}}class Dp{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=i0(t.type)}}class Np{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let r=this.seq;for(let n=0,s=r.length;n!==s;++n){let o=r[n];o.setValue(e,t[o.id],i)}}}var Mc=/(\w+)(\])?(\[|\.)?/g;function Ep(e,t){e.seq.push(t),e.map[t.id]=t}function r0(e,t,i){let r=e.name,n=r.length;Mc.lastIndex=0;while(!0){let s=Mc.exec(r),o=Mc.lastIndex,a=s[1],l=s[2]==="]",c=s[3];if(l)a=a|0;if(c===void 0||c==="["&&o+2===n){Ep(i,c===void 0?new Lp(a,e,t):new Dp(a,e,t));break}else{let u=i.map[a];if(u===void 0)u=new Np(a),Ep(i,u);i=u}}}class Rn{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let o=e.getActiveUniform(t,s),a=e.getUniformLocation(t,o.name);r0(o,a,this)}let r=[],n=[];for(let s of this.seq)if(s.type===e.SAMPLER_2D_SHADOW||s.type===e.SAMPLER_CUBE_SHADOW||s.type===e.SAMPLER_2D_ARRAY_SHADOW)r.push(s);else n.push(s);if(r.length>0)this.seq=r.concat(n)}setValue(e,t,i,r){let n=this.map[t];if(n!==void 0)n.setValue(e,i,r)}setOptional(e,t,i){let r=t[i];if(r!==void 0)this.setValue(e,i,r)}static upload(e,t,i,r){for(let n=0,s=t.length;n!==s;++n){let o=t[n],a=i[o.id];if(a.needsUpdate!==!1)o.setValue(e,a.value,r)}}static seqWithValue(e,t){let i=[];for(let r=0,n=e.length;r!==n;++r){let s=e[r];if(s.id in t)i.push(s)}return i}}function Sc(e,t,i){let r=e.createShader(t);return e.shaderSource(r,i),e.compileShader(r),r}var n0=37297,s0=0;function o0(e,t){let i=e.split(`
`),r=[],n=Math.max(t-6,0),s=Math.min(t+6,i.length);for(let o=n;o<s;o++){let a=o+1;r.push(`${a===t?">":" "} ${a}: ${i[o]}`)}return r.join(`
`)}var Up=new We;function a0(e){tt._getMatrix(Up,tt.workingColorSpace,e);let t=`mat3( ${Up.elements.map((i)=>i.toFixed(4))} )`;switch(tt.getTransfer(e)){case an:return[t,"LinearTransferOETF"];case ut:return[t,"sRGBTransferOETF"];default:return Se("WebGLProgram: Unsupported color space: ",e),[t,"LinearTransferOETF"]}}function Fp(e,t,i){let r=e.getShaderParameter(t,e.COMPILE_STATUS),s=(e.getShaderInfoLog(t)||"").trim();if(r&&s==="")return"";let o=/ERROR: 0:(\d+)/.exec(s);if(o){let a=parseInt(o[1]);return i.toUpperCase()+`

`+s+`

`+o0(e.getShaderSource(t),a)}else return s}function l0(e,t){let i=a0(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${i[1]}( vec4( ${i[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var c0={[Dn]:"Linear",[Nn]:"Reinhard",[Un]:"Cineon",[Fr]:"ACESFilmic",[Bn]:"AgX",[On]:"Neutral",[Fn]:"Custom"};function h0(e,t){let i=c0[t];if(i===void 0)return Se("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+e+"( vec3 color ) { return LinearToneMapping( color ); }";return"vec3 "+e+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}var ml=new w;function u0(){tt.getLuminanceCoefficients(ml);let e=ml.x.toFixed(4),t=ml.y.toFixed(4),i=ml.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${t}, ${i} );`,"\treturn dot( weights, rgb );","}"].join(`
`)}function f0(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ko).join(`
`)}function d0(e){let t=[];for(let i in e){let r=e[i];if(r===!1)continue;t.push("#define "+i+" "+r)}return t.join(`
`)}function p0(e,t){let i={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let n=0;n<r;n++){let s=e.getActiveAttrib(t,n),o=s.name,a=1;if(s.type===e.FLOAT_MAT2)a=2;if(s.type===e.FLOAT_MAT3)a=3;if(s.type===e.FLOAT_MAT4)a=4;i[o]={type:s.type,location:e.getAttribLocation(t,o),locationSize:a}}return i}function Ko(e){return e!==""}function Bp(e,t){let i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function Op(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var m0=/^[ \t]*#include +<([\w\d./]+)>/gm;function bc(e){return e.replace(m0,g0)}function g0(e,t){let i=nt[t];if(i===void 0)throw Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return bc(i)}var x0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function zp(e){return e.replace(x0,_0)}function _0(e,t,i,r){let n="";for(let s=parseInt(t);s<parseInt(i);s++)n+=r.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return n}function Gp(e){let t=`precision ${e.precision} float;
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
#define LOW_PRECISION`;return t}var v0={[Ln]:"SHADOWMAP_TYPE_PCF",[$r]:"SHADOWMAP_TYPE_VSM"};function y0(e){return v0[e.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var M0={[yr]:"ENVMAP_MODE_REFRACTION"};function S0(e){if(e.envMap===!1)return"ENVMAP_MODE_REFLECTION";return M0[e.envMapMode]||"ENVMAP_MODE_REFLECTION"}var b0={[en]:"ENVMAP_BLENDING_MULTIPLY",[rh]:"ENVMAP_BLENDING_MIX",[nh]:"ENVMAP_BLENDING_ADD"};function T0(e){if(e.envMap===!1)return"ENVMAP_BLENDING_NONE";return b0[e.combine]||"ENVMAP_BLENDING_NONE"}function Vp(e,t,i,r){let n=e.getContext(),{defines:s,vertexShader:o,fragmentShader:a}=i,l=y0(i),c=i.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",f=S0(i),u=T0(i),h=f0(i),d=d0(s),x=n.createProgram(),M,p,m=i.glslVersion?"#version "+i.glslVersion+`
`:"";if(i.isRawShaderMaterial){if(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,d].filter(Ko).join(`
`),M.length>0)M+=`
`;if(p=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,d].filter(Ko).join(`
`),p.length>0)p+=`
`}else M=[Gp(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,d,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+f:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+i.diffuseRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexNormals?"#define HAS_NORMAL":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+l:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","\tattribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","\tattribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","\tuniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","\tattribute vec2 uv1;","#endif","#ifdef USE_UV2","\tattribute vec2 uv2;","#endif","#ifdef USE_UV3","\tattribute vec2 uv3;","#endif","#ifdef USE_TANGENT","\tattribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","\tattribute vec4 color;","#elif defined( USE_COLOR )","\tattribute vec3 color;","#endif","#ifdef USE_SKINNING","\tattribute vec4 skinIndex;","\tattribute vec4 skinWeight;","#endif",`
`].filter(Ko).join(`
`),p=[Gp(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,d,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+c:"",i.envMap?"#define "+f:"",i.envMap?"#define "+u:"",i.envMapPMREM?"#define ENVMAP_MAX_LOD "+i.envMapMaxLod+".0":"",i.envMapPMREM?"#define ENVMAP_SIZE "+i.envMapSize+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",i.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.retroreflection?"#define USE_RETROREFLECTION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+l:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Ni?"#define TONE_MAPPING":"",i.toneMapping!==Ni?nt.tonemapping_pars_fragment:"",i.toneMapping!==Ni?h0("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",nt.colorspace_pars_fragment,l0("linearToOutputTexel",i.outputColorSpace),u0(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Ko).join(`
`);if(o=bc(o),o=Bp(o,i),o=Op(o,i),a=bc(a),a=Bp(a,i),a=Op(a,i),o=zp(o),a=zp(a),i.isRawShaderMaterial!==!0)m=`#version 300 es
`,M=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,p=["#define varying in",i.glslVersion===bl?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===bl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p;let b=m+M+o,T=m+p+a,S=Sc(n,n.VERTEX_SHADER,b),A=Sc(n,n.FRAGMENT_SHADER,T);if(n.attachShader(x,S),n.attachShader(x,A),i.index0AttributeName!==void 0)n.bindAttribLocation(x,0,i.index0AttributeName);else if(i.hasPositionAttribute===!0)n.bindAttribLocation(x,0,"position");n.linkProgram(x);function C(k){if(e.debug.checkShaderErrors){let I=n.getProgramInfoLog(x)||"",H=n.getShaderInfoLog(S)||"",re=n.getShaderInfoLog(A)||"",R=I.trim(),J=H.trim(),te=re.trim(),G=!0,pe=!0;if(n.getProgramParameter(x,n.LINK_STATUS)===!1)if(G=!1,typeof e.debug.onShaderError==="function")e.debug.onShaderError(n,x,S,A);else{let Q=Fp(n,S,"vertex"),ee=Fp(n,A,"fragment");Fe("WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(x,n.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+R+`
`+Q+`
`+ee)}else if(R!=="")Se("WebGLProgram: Program Info Log:",R);else if(J===""||te==="")pe=!1;if(pe)k.diagnostics={runnable:G,programLog:R,vertexShader:{log:J,prefix:M},fragmentShader:{log:te,prefix:p}}}n.deleteShader(S),n.deleteShader(A),g=new Rn(n,x),y=p0(n,x)}let g;this.getUniforms=function(){if(g===void 0)C(this);return g};let y;this.getAttributes=function(){if(y===void 0)C(this);return y};let P=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){if(P===!1)P=n.getProgramParameter(x,n0);return P},this.destroy=function(){r.releaseStatesOfProgram(this),n.deleteProgram(x),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=s0++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=S,this.fragmentShader=A,this}var E0=0;class Tc{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){let r=this._getShaderCacheForMaterial(e);if(r.has(t)===!1)r.add(t),t.usedTimes++;if(r.has(i)===!1)r.add(i),i.usedTimes++;return this}remove(e){let t=this.materialCache.get(e);for(let i of t)if(i.usedTimes--,i.usedTimes===0)this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);if(i===void 0)i=new Set,t.set(e,i);return i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);if(i===void 0)i=new kp(e),t.set(e,i);return i}}class kp{constructor(e){this.id=E0++,this.code=e,this.usedTimes=0}}function w0(e){return e===Fi||e===rn||e===nn}function Hp(e,t,i,r,n,s){let o=new fn,a=new Tc,l=new Set,c=[],f=new Map,u=r.logarithmicDepthBuffer,h={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(g){if(l.add(g),g===0)return"uv";return`uv${g}`}function x(g,y,P,k,I,H){let re=k.fog,R=I.geometry,J=g.isMeshStandardMaterial||g.isMeshLambertMaterial||g.isMeshPhongMaterial?k.environment:null,te=g.isMeshStandardMaterial||g.isMeshLambertMaterial&&!g.envMap||g.isMeshPhongMaterial&&!g.envMap,G=t.get(g.envMap||J,te),pe=h[g.type],Q=r.precision;if(g.precision!==null){if(Q=r.getMaxPrecision(g.precision),Q!==g.precision)Se("WebGLProgram.getParameters:",g.precision,"not supported, using",Q,"instead.")}let ee=R.morphAttributes.position||R.morphAttributes.normal||R.morphAttributes.color,ce=ee!==void 0?ee.length:0,De=0;if(R.morphAttributes.position!==void 0)De=1;if(R.morphAttributes.normal!==void 0)De=2;if(R.morphAttributes.color!==void 0)De=3;let q,he,Ue,Pe;if(pe){let F=ki[pe];q=F.vertexShader,he=F.fragmentShader}else{q=g.vertexShader,he=g.fragmentShader;let F=a.getVertexShaderStage(g),ae=a.getFragmentShaderStage(g);a.update(g,F,ae),Ue=F.id,Pe=ae.id}let qe=e.getRenderTarget(),Ae=e.state.buffers.depth.getReversed(),ft=I.isInstancedMesh===!0,it=I.isBatchedMesh===!0,Ze=!!g.map,at=!!g.matcap,se=!!G,me=se&&G.isPMREMTexture===!0,_e=!!g.aoMap,be=!!g.lightMap,Re=!!g.bumpMap&&g.wireframe===!1,Ve=!!g.normalMap,Ge=!!g.displacementMap,et=!!g.emissiveMap,ot=!!g.metalnessMap,gt=!!g.roughnessMap,U=g.anisotropy>0,Ut=g.clearcoat>0,Qe=g.diffuseRoughness>0,At=g.dispersion>0,we=g.retroreflectivity>0,dt=g.iridescence>0,Je=g.sheen>0,Ke=g.transmission>0,Rt=U&&!!g.anisotropyMap,E=Ut&&!!g.clearcoatMap,_=Ut&&!!g.clearcoatNormalMap,O=Ut&&!!g.clearcoatRoughnessMap,le=Qe&&!!g.diffuseRoughnessMap,ne=dt&&!!g.iridescenceMap,xe=dt&&!!g.iridescenceThicknessMap,ue=Je&&!!g.sheenColorMap,Z=Je&&!!g.sheenRoughnessMap,ie=!!g.specularMap,ve=!!g.specularColorMap,L=!!g.specularIntensityMap,j=Ke&&!!g.transmissionMap,Y=Ke&&!!g.thicknessMap,de=!!g.gradientMap,ge=!!g.alphaMap,Te=g.alphaTest>0,He=!!g.alphaHash,ze=!!g.extensions,D=Ni;if(g.toneMapped){if(qe===null||qe.isXRRenderTarget===!0)D=e.toneMapping}let B=me?G.isCompressedCubeTexture?G.image[0].mipmaps:G.mipmaps:null,W={shaderID:pe,shaderType:g.type,shaderName:g.name,vertexShader:q,fragmentShader:he,defines:g.defines,customVertexShaderID:Ue,customFragmentShaderID:Pe,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:Q,batching:it,batchingColor:it&&I._colorsTexture!==null,instancing:ft,instancingColor:ft&&I.instanceColor!==null,instancingMorph:ft&&I.morphTexture!==null,outputColorSpace:qe===null?e.outputColorSpace:qe.isXRRenderTarget===!0?qe.texture.colorSpace:tt.workingColorSpace,alphaToCoverage:!!g.alphaToCoverage,map:Ze,matcap:at,envMap:se,envMapMode:se&&G.mapping,envMapPMREM:me,envMapMaxLod:me?B.length-1:null,envMapSize:me?B[0].width:null,aoMap:_e,lightMap:be,bumpMap:Re,normalMap:Ve,displacementMap:Ge,emissiveMap:et,normalMapObjectSpace:Ve&&g.normalMapType===oh,normalMapTangentSpace:Ve&&g.normalMapType===ir,packedNormalMap:Ve&&g.normalMapType===ir&&w0(g.normalMap.format),metalnessMap:ot,roughnessMap:gt,anisotropy:U,anisotropyMap:Rt,clearcoat:Ut,clearcoatMap:E,clearcoatNormalMap:_,clearcoatRoughnessMap:O,diffuseRoughness:Qe,diffuseRoughnessMap:le,dispersion:At,retroreflection:we,iridescence:dt,iridescenceMap:ne,iridescenceThicknessMap:xe,sheen:Je,sheenColorMap:ue,sheenRoughnessMap:Z,specularMap:ie,specularColorMap:ve,specularIntensityMap:L,transmission:Ke,transmissionMap:j,thicknessMap:Y,gradientMap:de,opaque:g.transparent===!1&&g.blending===Dr&&g.alphaToCoverage===!1,alphaMap:ge,alphaTest:Te,alphaHash:He,combine:g.combine,mapUv:Ze&&d(g.map.channel),aoMapUv:_e&&d(g.aoMap.channel),lightMapUv:be&&d(g.lightMap.channel),bumpMapUv:Re&&d(g.bumpMap.channel),normalMapUv:Ve&&d(g.normalMap.channel),displacementMapUv:Ge&&d(g.displacementMap.channel),emissiveMapUv:et&&d(g.emissiveMap.channel),metalnessMapUv:ot&&d(g.metalnessMap.channel),roughnessMapUv:gt&&d(g.roughnessMap.channel),anisotropyMapUv:Rt&&d(g.anisotropyMap.channel),clearcoatMapUv:E&&d(g.clearcoatMap.channel),clearcoatNormalMapUv:_&&d(g.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:O&&d(g.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:le&&d(g.diffuseRoughnessMap.channel),iridescenceMapUv:ne&&d(g.iridescenceMap.channel),iridescenceThicknessMapUv:xe&&d(g.iridescenceThicknessMap.channel),sheenColorMapUv:ue&&d(g.sheenColorMap.channel),sheenRoughnessMapUv:Z&&d(g.sheenRoughnessMap.channel),specularMapUv:ie&&d(g.specularMap.channel),specularColorMapUv:ve&&d(g.specularColorMap.channel),specularIntensityMapUv:L&&d(g.specularIntensityMap.channel),transmissionMapUv:j&&d(g.transmissionMap.channel),thicknessMapUv:Y&&d(g.thicknessMap.channel),alphaMapUv:ge&&d(g.alphaMap.channel),vertexTangents:!!R.attributes.tangent&&(Ve||U),vertexNormals:!!R.attributes.normal,vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!R.attributes.color&&R.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!R.attributes.uv&&(Ze||ge),fog:!!re,useFog:g.fog===!0,fogExp2:!!re&&re.isFogExp2,flatShading:g.wireframe===!1&&(g.flatShading===!0||R.attributes.normal===void 0&&Ve===!1&&(g.isMeshLambertMaterial||g.isMeshPhongMaterial||g.isMeshStandardMaterial||g.isMeshPhysicalMaterial)),sizeAttenuation:g.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:Ae,skinning:I.isSkinnedMesh===!0,hasPositionAttribute:R.attributes.position!==void 0,morphTargets:R.morphAttributes.position!==void 0,morphNormals:R.morphAttributes.normal!==void 0,morphColors:R.morphAttributes.color!==void 0,morphTargetsCount:ce,morphTextureStride:De,numSunLights:y.sun.length,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numSunLightShadows:y.sunShadowMap.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numLightProbeGrids:H.filter((F)=>F.texture!==null).length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:g.dithering,shadowMapEnabled:e.shadowMap.enabled&&P.length>0,shadowMapType:e.shadowMap.type,toneMapping:D,decodeVideoTexture:Ze&&g.map.isVideoTexture===!0&&tt.getTransfer(g.map.colorSpace)===ut,decodeVideoTextureEmissive:et&&g.emissiveMap.isVideoTexture===!0&&tt.getTransfer(g.emissiveMap.colorSpace)===ut,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===bi,flipSided:g.side===Lt,useDepthPacking:g.depthPacking>=0,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionClipCullDistance:ze&&g.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ze&&g.extensions.multiDraw===!0||it)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:g.customProgramCacheKey()};return W.vertexUv1s=l.has(1),W.vertexUv2s=l.has(2),W.vertexUv3s=l.has(3),l.clear(),W}function M(g){let y=[];if(g.shaderID)y.push(g.shaderID);else y.push(g.customVertexShaderID),y.push(g.customFragmentShaderID);if(g.defines!==void 0)for(let P in g.defines)y.push(P),y.push(g.defines[P]);if(g.isRawShaderMaterial===!1)p(y,g),m(y,g),y.push(e.outputColorSpace);return y.push(g.customProgramCacheKey),y.join()}function p(g,y){g.push(y.precision),g.push(y.outputColorSpace),g.push(y.envMapMode),g.push(y.envMapPMREM),g.push(y.envMapMaxLod),g.push(y.envMapSize),g.push(y.mapUv),g.push(y.alphaMapUv),g.push(y.lightMapUv),g.push(y.aoMapUv),g.push(y.bumpMapUv),g.push(y.normalMapUv),g.push(y.displacementMapUv),g.push(y.emissiveMapUv),g.push(y.metalnessMapUv),g.push(y.roughnessMapUv),g.push(y.anisotropyMapUv),g.push(y.clearcoatMapUv),g.push(y.clearcoatNormalMapUv),g.push(y.clearcoatRoughnessMapUv),g.push(y.diffuseRoughnessMapUv),g.push(y.iridescenceMapUv),g.push(y.iridescenceThicknessMapUv),g.push(y.sheenColorMapUv),g.push(y.sheenRoughnessMapUv),g.push(y.specularMapUv),g.push(y.specularColorMapUv),g.push(y.specularIntensityMapUv),g.push(y.transmissionMapUv),g.push(y.thicknessMapUv),g.push(y.combine),g.push(y.fogExp2),g.push(y.sizeAttenuation),g.push(y.morphTargetsCount),g.push(y.numSunLights),g.push(y.numDirLights),g.push(y.numPointLights),g.push(y.numSpotLights),g.push(y.numSpotLightMaps),g.push(y.numHemiLights),g.push(y.numRectAreaLights),g.push(y.numSunLightShadows),g.push(y.numDirLightShadows),g.push(y.numPointLightShadows),g.push(y.numSpotLightShadows),g.push(y.numSpotLightShadowsWithMaps),g.push(y.numLightProbes),g.push(y.numLightProbeGrids),g.push(y.shadowMapType),g.push(y.toneMapping),g.push(y.numClippingPlanes),g.push(y.numClipIntersection),g.push(y.depthPacking)}function m(g,y){if(o.disableAll(),y.instancing)o.enable(0);if(y.instancingColor)o.enable(1);if(y.instancingMorph)o.enable(2);if(y.matcap)o.enable(3);if(y.envMap)o.enable(4);if(y.normalMapObjectSpace)o.enable(5);if(y.normalMapTangentSpace)o.enable(6);if(y.clearcoat)o.enable(7);if(y.iridescence)o.enable(8);if(y.alphaTest)o.enable(9);if(y.vertexColors)o.enable(10);if(y.vertexAlphas)o.enable(11);if(y.vertexUv1s)o.enable(12);if(y.vertexUv2s)o.enable(13);if(y.vertexUv3s)o.enable(14);if(y.vertexTangents)o.enable(15);if(y.anisotropy)o.enable(16);if(y.alphaHash)o.enable(17);if(y.batching)o.enable(18);if(y.dispersion)o.enable(19);if(y.retroreflection)o.enable(24);if(y.diffuseRoughness)o.enable(25);if(y.batchingColor)o.enable(20);if(y.gradientMap)o.enable(21);if(y.packedNormalMap)o.enable(22);if(y.vertexNormals)o.enable(23);if(g.push(o.mask),o.disableAll(),y.fog)o.enable(0);if(y.useFog)o.enable(1);if(y.flatShading)o.enable(2);if(y.logarithmicDepthBuffer)o.enable(3);if(y.reversedDepthBuffer)o.enable(4);if(y.skinning)o.enable(5);if(y.morphTargets)o.enable(6);if(y.morphNormals)o.enable(7);if(y.morphColors)o.enable(8);if(y.premultipliedAlpha)o.enable(9);if(y.shadowMapEnabled)o.enable(10);if(y.doubleSided)o.enable(11);if(y.flipSided)o.enable(12);if(y.useDepthPacking)o.enable(13);if(y.dithering)o.enable(14);if(y.transmission)o.enable(15);if(y.sheen)o.enable(16);if(y.opaque)o.enable(17);if(y.pointsUvs)o.enable(18);if(y.decodeVideoTexture)o.enable(19);if(y.decodeVideoTextureEmissive)o.enable(20);if(y.alphaToCoverage)o.enable(21);if(y.numLightProbeGrids>0)o.enable(22);if(y.hasPositionAttribute)o.enable(23);g.push(o.mask)}function b(g){let y=h[g.type],P;if(y){let k=ki[y];P=Qi.clone(k.uniforms)}else P=g.uniforms;return P}function T(g,y){let P=f.get(y);if(P!==void 0)++P.usedTimes;else P=new Vp(e,y,g,n),c.push(P),f.set(y,P);return P}function S(g){if(--g.usedTimes===0){let y=c.indexOf(g);c[y]=c[c.length-1],c.pop(),f.delete(g.cacheKey),g.destroy()}}function A(g){a.remove(g)}function C(){a.dispose()}return{getParameters:x,getProgramCacheKey:M,getUniforms:b,acquireProgram:T,releaseProgram:S,releaseShaderCache:A,programs:c,dispose:C}}function Wp(){let e=new WeakMap;function t(o){return e.has(o)}function i(o){let a=e.get(o);if(a===void 0)a={},e.set(o,a);return a}function r(o){e.delete(o)}function n(o,a,l){e.get(o)[a]=l}function s(){e=new WeakMap}return{has:t,get:i,remove:r,update:n,dispose:s}}function A0(e,t){if(e.groupOrder!==t.groupOrder)return e.groupOrder-t.groupOrder;else if(e.renderOrder!==t.renderOrder)return e.renderOrder-t.renderOrder;else if(e.material.id!==t.material.id)return e.material.id-t.material.id;else if(e.materialVariant!==t.materialVariant)return e.materialVariant-t.materialVariant;else if(e.z!==t.z)return e.z-t.z;else return e.id-t.id}function Xp(e,t){if(e.groupOrder!==t.groupOrder)return e.groupOrder-t.groupOrder;else if(e.renderOrder!==t.renderOrder)return e.renderOrder-t.renderOrder;else if(e.z!==t.z)return t.z-e.z;else return e.id-t.id}function qp(){let e=[],t=0,i=[],r=[],n=[];function s(){t=0,i.length=0,r.length=0,n.length=0}function o(h){let d=0;if(h.isInstancedMesh)d+=2;if(h.isSkinnedMesh)d+=1;return d}function a(h,d,x,M,p,m){let b=e[t];if(b===void 0)b={id:h.id,object:h,geometry:d,material:x,materialVariant:o(h),groupOrder:M,renderOrder:h.renderOrder,z:p,group:m},e[t]=b;else b.id=h.id,b.object=h,b.geometry=d,b.material=x,b.materialVariant=o(h),b.groupOrder=M,b.renderOrder=h.renderOrder,b.z=p,b.group=m;return t++,b}function l(h,d,x,M,p,m,b){if(b.reversedDepth===!0)p=-p;let T=a(h,d,x,M,p,m);if(x.transmission>0)r.push(T);else if(x.transparent===!0)n.push(T);else i.push(T)}function c(h,d,x,M,p,m){let b=a(h,d,x,M,p,m);if(x.transmission>0)r.unshift(b);else if(x.transparent===!0)n.unshift(b);else i.unshift(b)}function f(h,d){if(i.length>1)i.sort(h||A0);if(r.length>1)r.sort(d||Xp);if(n.length>1)n.sort(d||Xp)}function u(){for(let h=t,d=e.length;h<d;h++){let x=e[h];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:i,transmissive:r,transparent:n,init:s,push:l,unshift:c,finish:u,sort:f}}function Yp(){let e=new WeakMap;function t(r,n){let s=e.get(r),o;if(s===void 0)o=new qp,e.set(r,[o]);else if(n>=s.length)o=new qp,s.push(o);else o=s[n];return o}function i(){e=new WeakMap}return{get:t,dispose:i}}function R0(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let i;switch(t.type){case"SunLight":case"DirectionalLight":i={direction:new w,color:new fe};break;case"SpotLight":i={position:new w,direction:new w,color:new fe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new w,color:new fe,distance:0,decay:0};break;case"HemisphereLight":i={direction:new w,skyColor:new fe,groundColor:new fe};break;case"RectAreaLight":i={color:new fe,position:new w,halfWidth:new w,halfHeight:new w};break}return e[t.id]=i,i}}}function C0(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let i;switch(t.type){case"SunLight":case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new K};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new K};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new K,shadowCameraNear:1,shadowCameraFar:1000};break}return e[t.id]=i,i}}}var P0=0;function I0(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function Zp(e){let t=new R0,i=C0(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)r.probe.push(new w);let n=new w,s=new Xe,o=new Xe;function a(c){let f=0,u=0,h=0;for(let H=0;H<9;H++)r.probe[H].set(0,0,0);let d=0,x=0,M=0,p=0,m=0,b=0,T=0,S=0,A=0,C=0,g=0,y=0,P=0,k=0;c.sort(I0);for(let H=0,re=c.length;H<re;H++){let R=c[H],{color:J,intensity:te,distance:G}=R,pe=null;if(R.shadow&&R.shadow.map)if(R.shadow.map.texture.format===Fi)pe=R.shadow.map.texture;else pe=R.shadow.map.depthTexture||R.shadow.map.texture;if(R.isAmbientLight)f+=J.r*te,u+=J.g*te,h+=J.b*te;else if(R.isLightProbe){for(let Q=0;Q<9;Q++)r.probe[Q].addScaledVector(R.sh.coefficients[Q],te);k++}else if(R.isSunLight){let Q=t.get(R);if(Q.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let ee=R.shadow,ce=i.get(R);ce.shadowIntensity=ee.intensity,ce.shadowBias=ee.bias,ce.shadowNormalBias=ee.normalBias,ce.shadowRadius=ee.radius,ce.shadowMapSize.copy(ee.mapSize).multiply(ee.getFrameExtents()),r.sunShadow[x]=ce,r.sunShadowMap[x]=pe;let De=ee.getViewportCount();for(let q=0;q<De;q++)r.sunShadowMatrix[M+q]=ee.getMatrix(q),r.sunShadowCascade[M+q]=ee._cascadeData[q];M+=De,x++}r.sun[d]=Q,d++}else if(R.isDirectionalLight){let Q=t.get(R);if(Q.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let ee=R.shadow,ce=i.get(R);ce.shadowIntensity=ee.intensity,ce.shadowBias=ee.bias,ce.shadowNormalBias=ee.normalBias,ce.shadowRadius=ee.radius,ce.shadowMapSize=ee.mapSize,r.directionalShadow[p]=ce,r.directionalShadowMap[p]=pe,r.directionalShadowMatrix[p]=R.shadow.matrix,A++}r.directional[p]=Q,p++}else if(R.isSpotLight){let Q=t.get(R);Q.position.setFromMatrixPosition(R.matrixWorld),Q.color.copy(J).multiplyScalar(te),Q.distance=G,Q.coneCos=Math.cos(R.angle),Q.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),Q.decay=R.decay,r.spot[b]=Q;let ee=R.shadow;if(R.map){if(r.spotLightMap[y]=R.map,y++,ee.updateMatrices(R),R.castShadow)P++}if(r.spotLightMatrix[b]=ee.matrix,R.castShadow){let ce=i.get(R);ce.shadowIntensity=ee.intensity,ce.shadowBias=ee.bias,ce.shadowNormalBias=ee.normalBias,ce.shadowRadius=ee.radius,ce.shadowMapSize=ee.mapSize,r.spotShadow[b]=ce,r.spotShadowMap[b]=pe,g++}b++}else if(R.isRectAreaLight){let Q=t.get(R);Q.color.copy(J).multiplyScalar(te),Q.halfWidth.set(R.width*0.5,0,0),Q.halfHeight.set(0,R.height*0.5,0),r.rectArea[T]=Q,T++}else if(R.isPointLight){let Q=t.get(R);if(Q.color.copy(R.color).multiplyScalar(R.intensity),Q.distance=R.distance,Q.decay=R.decay,R.castShadow){let ee=R.shadow,ce=i.get(R);ce.shadowIntensity=ee.intensity,ce.shadowBias=ee.bias,ce.shadowNormalBias=ee.normalBias,ce.shadowRadius=ee.radius,ce.shadowMapSize=ee.mapSize,ce.shadowCameraNear=ee.camera.near,ce.shadowCameraFar=ee.camera.far,r.pointShadow[m]=ce,r.pointShadowMap[m]=pe,r.pointShadowMatrix[m]=R.shadow.matrix,C++}r.point[m]=Q,m++}else if(R.isHemisphereLight){let Q=t.get(R);Q.skyColor.copy(R.color).multiplyScalar(te),Q.groundColor.copy(R.groundColor).multiplyScalar(te),r.hemi[S]=Q,S++}}if(T>0)if(e.has("OES_texture_float_linear")===!0)r.rectAreaLTC1=Ce.LTC_FLOAT_1,r.rectAreaLTC2=Ce.LTC_FLOAT_2;else r.rectAreaLTC1=Ce.LTC_HALF_1,r.rectAreaLTC2=Ce.LTC_HALF_2;r.ambient[0]=f,r.ambient[1]=u,r.ambient[2]=h;let I=r.hash;if(I.sunLength!==d||I.directionalLength!==p||I.pointLength!==m||I.spotLength!==b||I.rectAreaLength!==T||I.hemiLength!==S||I.numSunShadows!==x||I.numDirectionalShadows!==A||I.numPointShadows!==C||I.numSpotShadows!==g||I.numSpotMaps!==y||I.numLightProbes!==k)r.sun.length=d,r.directional.length=p,r.spot.length=b,r.rectArea.length=T,r.point.length=m,r.hemi.length=S,r.sunShadow.length=x,r.sunShadowMap.length=x,r.sunShadowMatrix.length=M,r.sunShadowCascade.length=M,r.directionalShadow.length=A,r.directionalShadowMap.length=A,r.directionalShadowMatrix.length=A,r.pointShadow.length=C,r.pointShadowMap.length=C,r.pointShadowMatrix.length=C,r.spotShadow.length=g,r.spotShadowMap.length=g,r.spotLightMatrix.length=g+y-P,r.spotLightMap.length=y,r.numSpotLightShadowsWithMaps=P,r.numLightProbes=k,I.sunLength=d,I.directionalLength=p,I.pointLength=m,I.spotLength=b,I.rectAreaLength=T,I.hemiLength=S,I.numSunShadows=x,I.numDirectionalShadows=A,I.numPointShadows=C,I.numSpotShadows=g,I.numSpotMaps=y,I.numLightProbes=k,r.version=P0++}function l(c,f){let u=0,h=0,d=0,x=0,M=0,p=0,m=f.matrixWorldInverse;for(let b=0,T=c.length;b<T;b++){let S=c[b];if(S.isSunLight){let A=r.sun[u];A.direction.setFromMatrixPosition(S.matrixWorld),A.direction.transformDirection(m),u++}else if(S.isDirectionalLight){let A=r.directional[h];A.direction.setFromMatrixPosition(S.matrixWorld),n.setFromMatrixPosition(S.target.matrixWorld),A.direction.sub(n),A.direction.transformDirection(m),h++}else if(S.isSpotLight){let A=r.spot[x];A.position.setFromMatrixPosition(S.matrixWorld),A.position.applyMatrix4(m),A.direction.setFromMatrixPosition(S.matrixWorld),n.setFromMatrixPosition(S.target.matrixWorld),A.direction.sub(n),A.direction.transformDirection(m),x++}else if(S.isRectAreaLight){let A=r.rectArea[M];A.position.setFromMatrixPosition(S.matrixWorld),A.position.applyMatrix4(m),o.identity(),s.copy(S.matrixWorld),s.premultiply(m),o.extractRotation(s),A.halfWidth.set(S.width*0.5,0,0),A.halfHeight.set(0,S.height*0.5,0),A.halfWidth.applyMatrix4(o),A.halfHeight.applyMatrix4(o),M++}else if(S.isPointLight){let A=r.point[d];A.position.setFromMatrixPosition(S.matrixWorld),A.position.applyMatrix4(m),d++}else if(S.isHemisphereLight){let A=r.hemi[p];A.direction.setFromMatrixPosition(S.matrixWorld),A.direction.transformDirection(m),p++}}}return{setup:a,setupView:l,state:r}}function Jp(e){let t=new Zp(e),i=[],r=[],n=[];function s(u){f.camera=u,i.length=0,r.length=0,n.length=0}function o(u){if(u.isLightProbeGrid)n.push(u);else i.push(u)}function a(u){r.push(u)}function l(){t.setup(i),n.sort((u,h)=>u.priority-h.priority||u.id-h.id)}function c(u){t.setupView(i,u)}let f={lightsArray:i,shadowsArray:r,lightProbeGridArray:n,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:f,setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function Kp(e){let t=new WeakMap;function i(n,s=0){let o=t.get(n),a;if(o===void 0)a=new Jp(e),t.set(n,[a]);else if(s>=o.length)a=new Jp(e),o.push(a);else a=o[s];return a}function r(){t=new WeakMap}return{get:i,dispose:r}}var Qp=`
void main() {

	gl_Position = vec4( position, 1.0 );

}
`,$p=`
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
`;var D0=[new w(1,0,0),new w(-1,0,0),new w(0,1,0),new w(0,-1,0),new w(0,0,1),new w(0,0,-1)],N0=[new w(0,-1,0),new w(0,-1,0),new w(0,0,1),new w(0,0,-1),new w(0,-1,0),new w(0,-1,0)],jp=new Xe,Qo=new w,Ec=new w;function em(e,t,i){let r=new Ki,n=new K,s=new K,o=new mt,a=new Vo,l=new ko,c={},f=i.maxTextureSize,u={[Hi]:Lt,[Lt]:Hi,[bi]:bi},h=new Et({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new K},radius:{value:4}},vertexShader:Qp,fragmentShader:$p}),d=h.clone();d.defines.HORIZONTAL_PASS=1;let x=new ke;x.setAttribute("position",new Zt(new Float32Array([-1,-1,0.5,3,-1,0.5,-1,3,0.5]),3));let M=new je(x,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ln;let m=this.type;this.render=function(C,g,y){if(p.enabled===!1)return;if(p.autoUpdate===!1&&p.needsUpdate===!1)return;if(C.length===0)return;if(this.type===Oc)Se("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ln;let P=e.getRenderTarget(),k=e.getActiveCubeFace(),I=e.getActiveMipmapLevel(),H=e.state;if(H.setBlending(Wi),H.buffers.depth.getReversed()===!0)H.buffers.color.setClear(0,0,0,0);else H.buffers.color.setClear(1,1,1,1);H.buffers.depth.setTest(!0),H.setScissorTest(!1);let re=m!==this.type;if(re)g.traverse(function(R){if(R.material)if(Array.isArray(R.material))R.material.forEach((J)=>J.needsUpdate=!0);else R.material.needsUpdate=!0});for(let R=0,J=C.length;R<J;R++){let te=C[R],G=te.shadow;if(G===void 0){Se("WebGLShadowMap:",te,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;n.copy(G.mapSize);let pe=G.getFrameExtents();if(n.multiply(pe),s.copy(G.mapSize),n.x>f||n.y>f){if(n.x>f)s.x=Math.floor(f/pe.x),n.x=s.x*pe.x,G.mapSize.x=s.x;if(n.y>f)s.y=Math.floor(f/pe.y),n.y=s.y*pe.y,G.mapSize.y=s.y}let Q=e.state.buffers.depth.getReversed();if(G.camera._reversedDepth=Q,G.map===null||re===!0){if(G.map!==null){if(G.map.depthTexture!==null)G.map.depthTexture.dispose(),G.map.depthTexture=null;G.map.dispose()}if(this.type===$r){if(te.isPointLight){Se("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new Tt(n.x,n.y,{format:Fi,type:wt,minFilter:Nt,magFilter:Nt,generateMipmaps:!1}),G.map.texture.name=te.name+".shadowMap",G.map.depthTexture=new zi(n.x,n.y,Wt),G.map.depthTexture.name=te.name+".shadowMapDepth",G.map.depthTexture.format=Pi,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=It,G.map.depthTexture.magFilter=It}else{if(te.isPointLight)G.map=new Zr(n.x),G.map.depthTexture=new ms(n.x,Kt);else G.map=new Tt(n.x,n.y),G.map.depthTexture=new zi(n.x,n.y,Kt);if(G.map.depthTexture.name=te.name+".shadowMap",G.map.depthTexture.format=Pi,this.type===Ln)G.map.depthTexture.compareFunction=Q?xa:ga,G.map.depthTexture.minFilter=Nt,G.map.depthTexture.magFilter=Nt;else G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=It,G.map.depthTexture.magFilter=It}G.camera.updateProjectionMatrix()}if(G.map.isWebGLCubeRenderTarget!==!0&&(G.map.width!==n.x||G.map.height!==n.y))G.map.setSize(n.x,n.y);let ee=G.map.isWebGLCubeRenderTarget?6:G.getViewportCount();if(te.isPointLight!==!0)G.updateMatrices(te,y);let ce=(G.camera.layers.mask&4294967294)!==0?G.camera.layers:y.layers;for(let De=0;De<ee;De++){let q=G.getCamera(De);if(te.isPointLight){let{camera:he,matrix:Ue}=G,Pe=te.distance||he.far;if(Pe!==he.far)he.far=Pe,he.updateProjectionMatrix();Qo.setFromMatrixPosition(te.matrixWorld),he.position.copy(Qo),Ec.copy(he.position),Ec.add(D0[De]),he.up.copy(N0[De]),he.lookAt(Ec),he.updateMatrixWorld(),Ue.makeTranslation(-Qo.x,-Qo.y,-Qo.z),jp.multiplyMatrices(he.projectionMatrix,he.matrixWorldInverse),G._frustum.setFromProjectionMatrix(jp,he.coordinateSystem,he.reversedDepth)}if(G.map.isWebGLCubeRenderTarget)e.setRenderTarget(G.map,De),e.clear();else{if(De===0)e.setRenderTarget(G.map),e.clear();let he=G.getViewport(De);o.set(s.x*he.x,s.y*he.y,s.x*he.z,s.y*he.w),H.viewport(o)}r=G.getFrustum(De),S(g,y,q,te,ce,this.type)}if(G.isPointLightShadow!==!0&&this.type===$r)b(G,y);G.needsUpdate=!1}m=this.type,p.needsUpdate=!1,e.setRenderTarget(P,k,I)};function b(C,g){let y=t.update(M);if(h.defines.VSM_SAMPLES!==C.blurSamples)h.defines.VSM_SAMPLES=C.blurSamples,d.defines.VSM_SAMPLES=C.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0;if(C.mapPass===null)C.mapPass=new Tt(n.x,n.y,{format:Fi,type:wt});else if(C.mapPass.width!==C.map.width||C.mapPass.height!==C.map.height)C.mapPass.setSize(C.map.width,C.map.height);h.uniforms.shadow_pass.value=C.map.depthTexture,h.uniforms.resolution.value.set(C.map.width,C.map.height),h.uniforms.radius.value=C.radius,e.setRenderTarget(C.mapPass),e.clear(),e.renderBufferDirect(g,null,y,h,M,null),d.uniforms.shadow_pass.value=C.mapPass.texture,d.uniforms.resolution.value.set(C.map.width,C.map.height),d.uniforms.radius.value=C.radius,e.setRenderTarget(C.map),e.clear(),e.renderBufferDirect(g,null,y,d,M,null)}function T(C,g,y,P){let k=null,I=y.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(I!==void 0)k=I;else if(k=y.isPointLight===!0?l:a,e.localClippingEnabled&&g.clipShadows===!0&&Array.isArray(g.clippingPlanes)&&g.clippingPlanes.length!==0||g.displacementMap&&g.displacementScale!==0||g.alphaMap&&g.alphaTest>0||g.map&&g.alphaTest>0||g.alphaToCoverage===!0){let H=k.uuid,re=g.uuid,R=c[H];if(R===void 0)R={},c[H]=R;let J=R[re];if(J===void 0)J=k.clone(),R[re]=J,g.addEventListener("dispose",A);k=J}if(k.visible=g.visible,k.wireframe=g.wireframe,P===$r)k.side=g.shadowSide!==null?g.shadowSide:g.side;else k.side=g.shadowSide!==null?g.shadowSide:u[g.side];if(k.alphaMap=g.alphaMap,k.alphaTest=g.alphaToCoverage===!0?0.5:g.alphaTest,k.map=g.map,k.clipShadows=g.clipShadows,k.clippingPlanes=g.clippingPlanes,k.clipIntersection=g.clipIntersection,k.displacementMap=g.displacementMap,k.displacementScale=g.displacementScale,k.displacementBias=g.displacementBias,k.wireframeLinewidth=g.wireframeLinewidth,k.linewidth=g.linewidth,y.isPointLight===!0&&k.isMeshDistanceMaterial===!0){let H=e.properties.get(k);H.light=y}return k}function S(C,g,y,P,k,I){if(C.visible===!1)return;if(C.layers.test(k)&&(C.isMesh||C.isLine||C.isPoints)){if((C.castShadow||C.receiveShadow&&I===$r)&&(!C.frustumCulled||C.intersectsFrustum(r))){C.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,C.matrixWorld);let R=t.update(C),J=C.material;if(Array.isArray(J)){let te=R.groups;for(let G=0,pe=te.length;G<pe;G++){let Q=te[G],ee=J[Q.materialIndex];if(ee&&ee.visible){let ce=T(C,ee,P,I);C.onBeforeShadow(e,C,g,y,R,ce,Q),e.renderBufferDirect(y,null,R,ce,C,Q),C.onAfterShadow(e,C,g,y,R,ce,Q)}}}else if(J.visible){let te=T(C,J,P,I);C.onBeforeShadow(e,C,g,y,R,te,null),e.renderBufferDirect(y,null,R,te,C,null),C.onAfterShadow(e,C,g,y,R,te,null)}}}let re=C.children;for(let R=0,J=re.length;R<J;R++)S(re[R],g,y,P,k,I)}function A(C){C.target.removeEventListener("dispose",A);for(let y in c){let P=c[y],k=C.target.uuid;if(k in P)P[k].dispose(),delete P[k]}}}function tm(e,t){function i(){let L=!1,j=new mt,Y=null,de=new mt(0,0,0,0);return{setMask:function(ge){if(Y!==ge&&!L)e.colorMask(ge,ge,ge,ge),Y=ge},setLocked:function(ge){L=ge},setClear:function(ge,Te,He,ze,D){if(D===!0)ge*=ze,Te*=ze,He*=ze;if(j.set(ge,Te,He,ze),de.equals(j)===!1)e.clearColor(ge,Te,He,ze),de.copy(j)},reset:function(){L=!1,Y=null,de.set(-1,0,0,0)}}}function r(){let L=!1,j=!1,Y=null,de=null,ge=null;return{setReversed:function(Te){if(j!==Te){let He=t.get("EXT_clip_control");if(Te)He.clipControlEXT(He.LOWER_LEFT_EXT,He.ZERO_TO_ONE_EXT);else He.clipControlEXT(He.LOWER_LEFT_EXT,He.NEGATIVE_ONE_TO_ONE_EXT);j=Te;let ze=ge;ge=null,this.setClear(ze)}},getReversed:function(){return j},setTest:function(Te){if(Te)Ae(e.DEPTH_TEST);else ft(e.DEPTH_TEST)},setMask:function(Te){if(Y!==Te&&!L)e.depthMask(Te),Y=Te},setFunc:function(Te){if(j)Te=xh[Te];if(de!==Te){switch(Te){case As:e.depthFunc(e.NEVER);break;case Rs:e.depthFunc(e.ALWAYS);break;case Cs:e.depthFunc(e.LESS);break;case Ur:e.depthFunc(e.LEQUAL);break;case Ps:e.depthFunc(e.EQUAL);break;case Is:e.depthFunc(e.GEQUAL);break;case Ls:e.depthFunc(e.GREATER);break;case Ds:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}de=Te}},setLocked:function(Te){L=Te},setClear:function(Te){if(ge!==Te){if(ge=Te,j)Te=1-Te;e.clearDepth(Te)}},reset:function(){L=!1,Y=null,de=null,ge=null,j=!1}}}function n(){let L=!1,j=null,Y=null,de=null,ge=null,Te=null,He=null,ze=null,D=null;return{setTest:function(B){if(!L)if(B)Ae(e.STENCIL_TEST);else ft(e.STENCIL_TEST)},setMask:function(B){if(j!==B&&!L)e.stencilMask(B),j=B},setFunc:function(B,W,F){if(Y!==B||de!==W||ge!==F)e.stencilFunc(B,W,F),Y=B,de=W,ge=F},setOp:function(B,W,F){if(Te!==B||He!==W||ze!==F)e.stencilOp(B,W,F),Te=B,He=W,ze=F},setLocked:function(B){L=B},setClear:function(B){if(D!==B)e.clearStencil(B),D=B},reset:function(){L=!1,j=null,Y=null,de=null,ge=null,Te=null,He=null,ze=null,D=null}}}let s=new i,o=new r,a=new n,l={},c=new WeakMap,f={},u={},h={},d=new WeakMap,x=[],M=null,p=!1,m=null,b=null,T=null,S=null,A=null,C=null,g=null,y=new fe(0,0,0),P=0,k=!1,I=null,H=null,re=null,R=null,J=null,te=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),G=!1,pe=0,Q=e.getParameter(e.VERSION);if(Q.indexOf("WebGL")!==-1)pe=parseFloat(/^WebGL (\d)/.exec(Q)[1]),G=pe>=1;else if(Q.indexOf("OpenGL ES")!==-1)pe=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),G=pe>=2;let ee=null,ce={},De=e.getParameter(e.SCISSOR_BOX),q=e.getParameter(e.VIEWPORT),he=new mt().fromArray(De),Ue=new mt().fromArray(q);function Pe(L,j,Y,de){let ge=new Uint8Array(4),Te=e.createTexture();e.bindTexture(L,Te),e.texParameteri(L,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(L,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let He=0;He<Y;He++)if(L===e.TEXTURE_3D||L===e.TEXTURE_2D_ARRAY)e.texImage3D(j,0,e.RGBA,1,1,de,0,e.RGBA,e.UNSIGNED_BYTE,ge);else e.texImage2D(j+He,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,ge);return Te}let qe={};qe[e.TEXTURE_2D]=Pe(e.TEXTURE_2D,e.TEXTURE_2D,1),qe[e.TEXTURE_CUBE_MAP]=Pe(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),qe[e.TEXTURE_2D_ARRAY]=Pe(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),qe[e.TEXTURE_3D]=Pe(e.TEXTURE_3D,e.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),Ae(e.DEPTH_TEST),o.setFunc(Ur),Re(!1),Ve(_l),Ae(e.CULL_FACE),_e(Wi);function Ae(L){if(f[L]!==!0)e.enable(L),f[L]=!0}function ft(L){if(f[L]!==!1)e.disable(L),f[L]=!1}function it(L,j){if(h[L]!==j){if(e.bindFramebuffer(L,j),h[L]=j,L===e.DRAW_FRAMEBUFFER)h[e.FRAMEBUFFER]=j;if(L===e.FRAMEBUFFER)h[e.DRAW_FRAMEBUFFER]=j;return!0}return!1}function Ze(L,j){let Y=x,de=!1;if(L){if(Y=d.get(j),Y===void 0)Y=[],d.set(j,Y);let ge=L.textures;if(Y.length!==ge.length||Y[0]!==e.COLOR_ATTACHMENT0){for(let Te=0,He=ge.length;Te<He;Te++)Y[Te]=e.COLOR_ATTACHMENT0+Te;Y.length=ge.length,de=!0}}else if(Y[0]!==e.BACK)Y[0]=e.BACK,de=!0;if(de)e.drawBuffers(Y)}function at(L){if(M!==L)return e.useProgram(L),M=L,!0;return!1}let se={[Nr]:e.FUNC_ADD,[Gc]:e.FUNC_SUBTRACT,[Vc]:e.FUNC_REVERSE_SUBTRACT};se[kc]=e.MIN,se[Hc]=e.MAX;let me={[Wc]:e.ZERO,[Xc]:e.ONE,[qc]:e.SRC_COLOR,[ta]:e.SRC_ALPHA,[$c]:e.SRC_ALPHA_SATURATE,[Kc]:e.DST_COLOR,[Zc]:e.DST_ALPHA,[Yc]:e.ONE_MINUS_SRC_COLOR,[ia]:e.ONE_MINUS_SRC_ALPHA,[Qc]:e.ONE_MINUS_DST_COLOR,[Jc]:e.ONE_MINUS_DST_ALPHA,[jc]:e.CONSTANT_COLOR,[eh]:e.ONE_MINUS_CONSTANT_COLOR,[th]:e.CONSTANT_ALPHA,[ih]:e.ONE_MINUS_CONSTANT_ALPHA};function _e(L,j,Y,de,ge,Te,He,ze,D,B){if(L===Wi){if(p===!0)ft(e.BLEND),p=!1;return}if(p===!1)Ae(e.BLEND),p=!0;if(L!==zc){if(L!==m||B!==k){if(b!==Nr||A!==Nr)e.blendEquation(e.FUNC_ADD),b=Nr,A=Nr;if(B)switch(L){case Dr:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case jr:e.blendFunc(e.ONE,e.ONE);break;case vl:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case yl:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:Fe("WebGLState: Invalid blending: ",L);break}else switch(L){case Dr:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case jr:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case vl:Fe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case yl:Fe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Fe("WebGLState: Invalid blending: ",L);break}T=null,S=null,C=null,g=null,y.set(0,0,0),P=0,m=L,k=B}return}if(ge=ge||j,Te=Te||Y,He=He||de,j!==b||ge!==A)e.blendEquationSeparate(se[j],se[ge]),b=j,A=ge;if(Y!==T||de!==S||Te!==C||He!==g)e.blendFuncSeparate(me[Y],me[de],me[Te],me[He]),T=Y,S=de,C=Te,g=He;if(ze.equals(y)===!1||D!==P)e.blendColor(ze.r,ze.g,ze.b,D),y.copy(ze),P=D;m=L,k=!1}function be(L,j){L.side===bi?ft(e.CULL_FACE):Ae(e.CULL_FACE);let Y=L.side===Lt;if(j)Y=!Y;Re(Y),L.blending===Dr&&L.transparent===!1?_e(Wi):_e(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),o.setFunc(L.depthFunc),o.setTest(L.depthTest),o.setMask(L.depthWrite),s.setMask(L.colorWrite);let de=L.stencilWrite;if(a.setTest(de),de)a.setMask(L.stencilWriteMask),a.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),a.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass);et(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?Ae(e.SAMPLE_ALPHA_TO_COVERAGE):ft(e.SAMPLE_ALPHA_TO_COVERAGE)}function Re(L){if(I!==L){if(L)e.frontFace(e.CW);else e.frontFace(e.CCW);I=L}}function Ve(L){if(L!==Fc){if(Ae(e.CULL_FACE),L!==H)if(L===_l)e.cullFace(e.BACK);else if(L===Bc)e.cullFace(e.FRONT);else e.cullFace(e.FRONT_AND_BACK)}else ft(e.CULL_FACE);H=L}function Ge(L){if(L!==re){if(G)e.lineWidth(L);re=L}}function et(L,j,Y){if(L){if(Ae(e.POLYGON_OFFSET_FILL),R!==j||J!==Y){if(R=j,J=Y,o.getReversed())j=-j,Y=-Y;e.polygonOffset(j,Y)}}else ft(e.POLYGON_OFFSET_FILL)}function ot(L){if(L)Ae(e.SCISSOR_TEST);else ft(e.SCISSOR_TEST)}function gt(L){if(L===void 0)L=e.TEXTURE0+te-1;if(ee!==L)e.activeTexture(L),ee=L}function U(L,j,Y){if(Y===void 0)if(ee===null)Y=e.TEXTURE0+te-1;else Y=ee;let de=ce[Y];if(de===void 0)de={type:void 0,texture:void 0},ce[Y]=de;if(de.type!==L||de.texture!==j){if(ee!==Y)e.activeTexture(Y),ee=Y;e.bindTexture(L,j||qe[L]),de.type=L,de.texture=j}}function Ut(){let L=ce[ee];if(L!==void 0&&L.type!==void 0)e.bindTexture(L.type,null),L.type=void 0,L.texture=void 0}function Qe(){try{e.compressedTexImage2D(...arguments)}catch(L){Fe("WebGLState:",L)}}function At(){try{e.compressedTexImage3D(...arguments)}catch(L){Fe("WebGLState:",L)}}function we(){try{e.texSubImage2D(...arguments)}catch(L){Fe("WebGLState:",L)}}function dt(){try{e.texSubImage3D(...arguments)}catch(L){Fe("WebGLState:",L)}}function Je(){try{e.compressedTexSubImage2D(...arguments)}catch(L){Fe("WebGLState:",L)}}function Ke(){try{e.compressedTexSubImage3D(...arguments)}catch(L){Fe("WebGLState:",L)}}function Rt(){try{e.texStorage2D(...arguments)}catch(L){Fe("WebGLState:",L)}}function E(){try{e.texStorage3D(...arguments)}catch(L){Fe("WebGLState:",L)}}function _(){try{e.texImage2D(...arguments)}catch(L){Fe("WebGLState:",L)}}function O(){try{e.texImage3D(...arguments)}catch(L){Fe("WebGLState:",L)}}function le(L){if(u[L]!==void 0)return u[L];else return e.getParameter(L)}function ne(L,j){if(u[L]!==j)e.pixelStorei(L,j),u[L]=j}function xe(L){if(he.equals(L)===!1)e.scissor(L.x,L.y,L.z,L.w),he.copy(L)}function ue(L){if(Ue.equals(L)===!1)e.viewport(L.x,L.y,L.z,L.w),Ue.copy(L)}function Z(L,j){let Y=c.get(j);if(Y===void 0)Y=new WeakMap,c.set(j,Y);let de=Y.get(L);if(de===void 0)de=e.getUniformBlockIndex(j,L.name),e.uniformBlockBinding(j,de,de),Y.set(L,de)}function ie(L,j,Y){let ge=c.get(j).get(L);if(l[ge]!==Y)e.bindBufferBase(e.UNIFORM_BUFFER,ge,Y),l[ge]=Y}function ve(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),f={},u={},ee=null,ce={},h={},l={},d=new WeakMap,x=[],M=null,p=!1,m=null,b=null,T=null,S=null,A=null,C=null,g=null,y=new fe(0,0,0),P=0,k=!1,I=null,H=null,re=null,R=null,J=null,he.set(0,0,e.canvas.width,e.canvas.height),Ue.set(0,0,e.canvas.width,e.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:Ae,disable:ft,bindFramebuffer:it,drawBuffers:Ze,useProgram:at,setBlending:_e,setMaterial:be,setFlipSided:Re,setCullFace:Ve,setLineWidth:Ge,setPolygonOffset:et,setScissorTest:ot,activeTexture:gt,bindTexture:U,unbindTexture:Ut,compressedTexImage2D:Qe,compressedTexImage3D:At,texImage2D:_,texImage3D:O,pixelStorei:ne,getParameter:le,updateUBOMapping:Z,uniformBlockBinding:ie,texStorage2D:Rt,texStorage3D:E,texSubImage2D:we,texSubImage3D:dt,compressedTexSubImage2D:Je,compressedTexSubImage3D:Ke,scissor:xe,viewport:ue,reset:ve}}function im(e,t,i,r,n,s,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new K,f=new WeakMap,u=new Set,h,d=new WeakMap,x=new Set,M=new FinalizationRegistry((E)=>x.delete(E)),p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(E){}function m(E,_){return p?new OffscreenCanvas(E,_):ln("canvas")}function b(E,_,O){let le=1,ne=Rt(E);if(ne.width>O||ne.height>O)le=O/Math.max(ne.width,ne.height);if(le<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){let xe=Math.floor(le*ne.width),ue=Math.floor(le*ne.height);if(h===void 0)h=m(xe,ue);let Z=_?m(xe,ue):h;return Z.width=xe,Z.height=ue,Z.getContext("2d").drawImage(E,0,0,xe,ue),Se("WebGLRenderer: Texture has been resized from ("+ne.width+"x"+ne.height+") to ("+xe+"x"+ue+")."),Z}else{if("data"in E)Se("WebGLRenderer: Image in DataTexture is too big ("+ne.width+"x"+ne.height+").");return E}return E}function T(E){return E.generateMipmaps}function S(E){e.generateMipmap(E)}function A(E){if(E.isWebGLCubeRenderTarget)return e.TEXTURE_CUBE_MAP;if(E.isWebGL3DRenderTarget)return e.TEXTURE_3D;if(E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture)return e.TEXTURE_2D_ARRAY;return e.TEXTURE_2D}function C(E,_,O,le,ne,xe=!1){if(E!==null){if(e[E]!==void 0)return e[E];Se("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let ue;if(le){if(ue=t.get("EXT_texture_norm16"),!ue)Se("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension")}let Z=_;if(_===e.RED){if(O===e.FLOAT)Z=e.R32F;if(O===e.HALF_FLOAT)Z=e.R16F;if(O===e.UNSIGNED_BYTE)Z=e.R8;if(O===e.UNSIGNED_SHORT&&ue)Z=ue.R16_EXT;if(O===e.SHORT&&ue)Z=ue.R16_SNORM_EXT}if(_===e.RED_INTEGER){if(O===e.UNSIGNED_BYTE)Z=e.R8UI;if(O===e.UNSIGNED_SHORT)Z=e.R16UI;if(O===e.UNSIGNED_INT)Z=e.R32UI;if(O===e.BYTE)Z=e.R8I;if(O===e.SHORT)Z=e.R16I;if(O===e.INT)Z=e.R32I}if(_===e.RG){if(O===e.FLOAT)Z=e.RG32F;if(O===e.HALF_FLOAT)Z=e.RG16F;if(O===e.UNSIGNED_BYTE)Z=e.RG8;if(O===e.UNSIGNED_SHORT&&ue)Z=ue.RG16_EXT;if(O===e.SHORT&&ue)Z=ue.RG16_SNORM_EXT}if(_===e.RG_INTEGER){if(O===e.UNSIGNED_BYTE)Z=e.RG8UI;if(O===e.UNSIGNED_SHORT)Z=e.RG16UI;if(O===e.UNSIGNED_INT)Z=e.RG32UI;if(O===e.BYTE)Z=e.RG8I;if(O===e.SHORT)Z=e.RG16I;if(O===e.INT)Z=e.RG32I}if(_===e.RGB_INTEGER){if(O===e.UNSIGNED_BYTE)Z=e.RGB8UI;if(O===e.UNSIGNED_SHORT)Z=e.RGB16UI;if(O===e.UNSIGNED_INT)Z=e.RGB32UI;if(O===e.BYTE)Z=e.RGB8I;if(O===e.SHORT)Z=e.RGB16I;if(O===e.INT)Z=e.RGB32I}if(_===e.RGBA_INTEGER){if(O===e.UNSIGNED_BYTE)Z=e.RGBA8UI;if(O===e.UNSIGNED_SHORT)Z=e.RGBA16UI;if(O===e.UNSIGNED_INT)Z=e.RGBA32UI;if(O===e.BYTE)Z=e.RGBA8I;if(O===e.SHORT)Z=e.RGBA16I;if(O===e.INT)Z=e.RGBA32I}if(_===e.RGB){if(O===e.UNSIGNED_SHORT&&ue)Z=ue.RGB16_EXT;if(O===e.SHORT&&ue)Z=ue.RGB16_SNORM_EXT;if(O===e.UNSIGNED_INT_5_9_9_9_REV)Z=e.RGB9_E5;if(O===e.UNSIGNED_INT_10F_11F_11F_REV)Z=e.R11F_G11F_B10F}if(_===e.RGBA){let ie=xe?an:tt.getTransfer(ne);if(O===e.FLOAT)Z=e.RGBA32F;if(O===e.HALF_FLOAT)Z=e.RGBA16F;if(O===e.UNSIGNED_BYTE)Z=ie===ut?e.SRGB8_ALPHA8:e.RGBA8;if(O===e.UNSIGNED_SHORT&&ue)Z=ue.RGBA16_EXT;if(O===e.SHORT&&ue)Z=ue.RGBA16_SNORM_EXT;if(O===e.UNSIGNED_SHORT_4_4_4_4)Z=e.RGBA4;if(O===e.UNSIGNED_SHORT_5_5_5_1)Z=e.RGB5_A1}if(Z===e.R16F||Z===e.R32F||Z===e.RG16F||Z===e.RG32F||Z===e.RGBA16F||Z===e.RGBA32F)t.get("EXT_color_buffer_float");return Z}function g(E,_){let O;if(E){if(_===null||_===Kt||_===tr)O=e.DEPTH24_STENCIL8;else if(_===Wt)O=e.DEPTH32F_STENCIL8;else if(_===Mr)O=e.DEPTH24_STENCIL8,Se("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")}else if(_===null||_===Kt||_===tr)O=e.DEPTH_COMPONENT24;else if(_===Wt)O=e.DEPTH_COMPONENT32F;else if(_===Mr)O=e.DEPTH_COMPONENT16;return O}function y(E,_){if(T(E)===!0||E.isFramebufferTexture&&E.minFilter!==It&&E.minFilter!==Nt)return Math.log2(Math.max(_.width,_.height))+1;else if(E.mipmaps.length>0)return E.mipmaps.length;else if(E.isCompressedTexture&&Array.isArray(E.image))return _.mipmaps.length;else return 1}function P(E){let _=new WeakRef(E);r.get(E).__ref=_,x.add(_),M.register(E,_,_)}function k(E){let _=r.get(E).__ref;if(_===void 0)return;x.delete(_),M.unregister(_)}function I(E){re(E.target)}function H(E){R(E.target)}function re(E){if(E.removeEventListener("dispose",I),k(E),te(E),E.isVideoTexture)f.delete(E);if(E.isHTMLTexture)u.delete(E)}function R(E){E.removeEventListener("dispose",H),k(E),pe(E)}function J(){for(let E of x){let _=E.deref();if(_===void 0)continue;if(_.isRenderTarget===!0)R(_);else re(_)}x.clear(),u.clear()}function te(E){let _=r.get(E);if(_.__webglInit===void 0)return;let O=E.source,le=d.get(O);if(le){let ne=le[_.__cacheKey];if(ne.usedTimes--,ne.usedTimes===0)G(E);if(Object.keys(le).length===0)d.delete(O)}r.remove(E)}function G(E){let _=r.get(E);e.deleteTexture(_.__webglTexture);let O=E.source,le=d.get(O);delete le[_.__cacheKey],o.memory.textures--}function pe(E){let _=r.get(E);if(_.__depthDisposeCallback)_.__depthDisposeCallback();let O=E.depthTexture;if(O&&O.renderTarget===E)re(O);if(E.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++){if(Array.isArray(_.__webglFramebuffer[ne]))for(let xe=0;xe<_.__webglFramebuffer[ne].length;xe++)e.deleteFramebuffer(_.__webglFramebuffer[ne][xe]);else e.deleteFramebuffer(_.__webglFramebuffer[ne]);if(_.__webglDepthbuffer)e.deleteRenderbuffer(_.__webglDepthbuffer[ne])}else{if(Array.isArray(_.__webglFramebuffer))for(let ne=0;ne<_.__webglFramebuffer.length;ne++)e.deleteFramebuffer(_.__webglFramebuffer[ne]);else e.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer)e.deleteRenderbuffer(_.__webglDepthbuffer);if(_.__webglMultisampledFramebuffer)e.deleteFramebuffer(_.__webglMultisampledFramebuffer);if(_.__webglColorRenderbuffer){for(let ne=0;ne<_.__webglColorRenderbuffer.length;ne++)if(_.__webglColorRenderbuffer[ne])e.deleteRenderbuffer(_.__webglColorRenderbuffer[ne])}if(_.__webglDepthRenderbuffer)e.deleteRenderbuffer(_.__webglDepthRenderbuffer)}let le=E.textures;for(let ne=0,xe=le.length;ne<xe;ne++){let ue=r.get(le[ne]);if(ue.__webglTexture)e.deleteTexture(ue.__webglTexture),o.memory.textures--;r.remove(le[ne])}r.remove(E)}let Q=0;function ee(){Q=0}function ce(){return Q}function De(E){Q=E}function q(){let E=Q;if(E>=n.maxTextures)Se("WebGLTextures: Trying to use "+(E+1)+" texture units while this GPU supports only "+n.maxTextures);return Q+=1,E}function he(E){let _=[];return _.push(E.wrapS),_.push(E.wrapT),_.push(E.wrapR||0),_.push(E.magFilter),_.push(E.minFilter),_.push(E.anisotropy),_.push(E.internalFormat),_.push(E.format),_.push(E.type),_.push(E.generateMipmaps),_.push(E.mipmapsAutoUpdate),_.push(E.premultiplyAlpha),_.push(E.flipY),_.push(E.unpackAlignment),_.push(E.colorSpace),_.join()}function Ue(E,_){let O=r.get(E);if(E.isVideoTexture)Je(E);if(E.isRenderTargetTexture===!1&&E.isExternalTexture!==!0&&E.version>0&&O.__version!==E.version){let le=E.image;if(le===null)Se("WebGLRenderer: Texture marked for update but no image data found.");else if(le.complete===!1)Se("WebGLRenderer: Texture marked for update but image is incomplete");else{be(O,E,_);return}}else if(E.isExternalTexture)O.__webglTexture=E.sourceTexture?E.sourceTexture:null;i.bindTexture(e.TEXTURE_2D,O.__webglTexture,e.TEXTURE0+_)}function Pe(E,_){let O=r.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&O.__version!==E.version){be(O,E,_);return}else if(E.isExternalTexture)O.__webglTexture=E.sourceTexture?E.sourceTexture:null;i.bindTexture(e.TEXTURE_2D_ARRAY,O.__webglTexture,e.TEXTURE0+_)}function qe(E,_){let O=r.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&O.__version!==E.version){be(O,E,_);return}i.bindTexture(e.TEXTURE_3D,O.__webglTexture,e.TEXTURE0+_)}function Ae(E,_){let O=r.get(E);if(E.version>0&&O.__version!==E.version){Re(O,E,_);return}i.bindTexture(e.TEXTURE_CUBE_MAP,O.__webglTexture,e.TEXTURE0+_)}let ft={[zn]:e.REPEAT,[ui]:e.CLAMP_TO_EDGE,[Gn]:e.MIRRORED_REPEAT},it={[It]:e.NEAREST,[Ml]:e.NEAREST_MIPMAP_NEAREST,[Vn]:e.NEAREST_MIPMAP_LINEAR,[Nt]:e.LINEAR,[Fs]:e.LINEAR_MIPMAP_NEAREST,[Ti]:e.LINEAR_MIPMAP_LINEAR},Ze={[lh]:e.NEVER,[_a]:e.ALWAYS,[ch]:e.LESS,[ga]:e.LEQUAL,[hh]:e.EQUAL,[xa]:e.GEQUAL,[uh]:e.GREATER,[fh]:e.NOTEQUAL};function at(E,_){if(_.type===Wt&&t.has("OES_texture_float_linear")===!1&&(_.magFilter===Nt||_.magFilter===Fs||_.magFilter===Vn||_.magFilter===Ti||_.minFilter===Nt||_.minFilter===Fs||_.minFilter===Vn||_.minFilter===Ti))Se("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.");if(e.texParameteri(E,e.TEXTURE_WRAP_S,ft[_.wrapS]),e.texParameteri(E,e.TEXTURE_WRAP_T,ft[_.wrapT]),E===e.TEXTURE_3D||E===e.TEXTURE_2D_ARRAY)e.texParameteri(E,e.TEXTURE_WRAP_R,ft[_.wrapR]);if(e.texParameteri(E,e.TEXTURE_MAG_FILTER,it[_.magFilter]),e.texParameteri(E,e.TEXTURE_MIN_FILTER,it[_.minFilter]),_.compareFunction)e.texParameteri(E,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(E,e.TEXTURE_COMPARE_FUNC,Ze[_.compareFunction]);if(t.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===It)return;if(_.minFilter!==Vn&&_.minFilter!==Ti)return;if(_.type===Wt&&t.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||r.get(_).__currentAnisotropy){let O=t.get("EXT_texture_filter_anisotropic");e.texParameterf(E,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,n.getMaxAnisotropy())),r.get(_).__currentAnisotropy=_.anisotropy}}}function se(E,_){let O=!1;if(E.__webglInit===void 0)E.__webglInit=!0,_.addEventListener("dispose",I),P(_);let le=_.source,ne=d.get(le);if(ne===void 0)ne={},d.set(le,ne);let xe=he(_);if(xe!==E.__cacheKey){if(ne[xe]===void 0)ne[xe]={texture:e.createTexture(),usedTimes:0},o.memory.textures++,O=!0;ne[xe].usedTimes++;let ue=ne[E.__cacheKey];if(ue!==void 0){if(ne[E.__cacheKey].usedTimes--,ue.usedTimes===0)G(_)}E.__cacheKey=xe,E.__webglTexture=ne[xe].texture}return O}function me(E,_,O){return Math.floor(Math.floor(E/O)/_)}function _e(E,_,O,le){let xe=E.updateRanges;if(xe.length===0)i.texSubImage2D(e.TEXTURE_2D,0,0,0,_.width,_.height,O,le,_.data);else{xe.sort((L,j)=>L.start-j.start);let ue=0;for(let L=1;L<xe.length;L++){let j=xe[ue],Y=xe[L],de=j.start+j.count,ge=me(Y.start,_.width,4),Te=me(j.start,_.width,4);if(Y.start<=de+1&&ge===Te&&me(Y.start+Y.count-1,_.width,4)===ge)j.count=Math.max(j.count,Y.start+Y.count-j.start);else++ue,xe[ue]=Y}xe.length=ue+1;let Z=i.getParameter(e.UNPACK_ROW_LENGTH),ie=i.getParameter(e.UNPACK_SKIP_PIXELS),ve=i.getParameter(e.UNPACK_SKIP_ROWS);i.pixelStorei(e.UNPACK_ROW_LENGTH,_.width);for(let L=0,j=xe.length;L<j;L++){let Y=xe[L],de=Math.floor(Y.start/4),ge=Math.ceil(Y.count/4),Te=de%_.width,He=Math.floor(de/_.width),ze=ge,D=1;i.pixelStorei(e.UNPACK_SKIP_PIXELS,Te),i.pixelStorei(e.UNPACK_SKIP_ROWS,He),i.texSubImage2D(e.TEXTURE_2D,0,Te,He,ze,1,O,le,_.data)}E.clearUpdateRanges(),i.pixelStorei(e.UNPACK_ROW_LENGTH,Z),i.pixelStorei(e.UNPACK_SKIP_PIXELS,ie),i.pixelStorei(e.UNPACK_SKIP_ROWS,ve)}}function be(E,_,O){let le=e.TEXTURE_2D;if(_.isDataArrayTexture||_.isCompressedArrayTexture)le=e.TEXTURE_2D_ARRAY;if(_.isData3DTexture)le=e.TEXTURE_3D;let ne=se(E,_),xe=_.source;i.bindTexture(le,E.__webglTexture,e.TEXTURE0+O);let ue=r.get(xe);if(xe.version!==ue.__version||ne===!0){if(i.activeTexture(e.TEXTURE0+O),(typeof ImageBitmap<"u"&&_.image instanceof ImageBitmap)===!1){let D=tt.getPrimaries(tt.workingColorSpace),B=_.colorSpace===qi?null:tt.getPrimaries(_.colorSpace),W=_.colorSpace===qi||D===B?e.NONE:e.BROWSER_DEFAULT_WEBGL;i.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,W)}i.pixelStorei(e.UNPACK_ALIGNMENT,_.unpackAlignment);let ie=b(_.image,!1,n.maxTextureSize);ie=Ke(_,ie);let ve=s.convert(_.format,_.colorSpace),L=s.convert(_.type),j=C(_.internalFormat,ve,L,_.normalized,_.colorSpace,_.isVideoTexture);at(le,_);let Y,de=_.mipmaps,ge=_.isVideoTexture!==!0,Te=ue.__version===void 0||ne===!0,He=xe.dataReady,ze=y(_,ie);if(_.isDepthTexture){if(j=g(_.format===Ui,_.type),Te)if(ge)i.texStorage2D(e.TEXTURE_2D,1,j,ie.width,ie.height);else i.texImage2D(e.TEXTURE_2D,0,j,ie.width,ie.height,0,ve,L,null)}else if(_.isDataTexture)if(de.length>0){if(ge&&Te)i.texStorage2D(e.TEXTURE_2D,ze,j,de[0].width,de[0].height);for(let D=0,B=de.length;D<B;D++)if(Y=de[D],ge){if(He)i.texSubImage2D(e.TEXTURE_2D,D,0,0,Y.width,Y.height,ve,L,Y.data)}else i.texImage2D(e.TEXTURE_2D,D,j,Y.width,Y.height,0,ve,L,Y.data);_.generateMipmaps=!1}else if(ge){if(Te)i.texStorage2D(e.TEXTURE_2D,ze,j,ie.width,ie.height);if(He)_e(_,ie,ve,L)}else i.texImage2D(e.TEXTURE_2D,0,j,ie.width,ie.height,0,ve,L,ie.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){if(ge&&Te)i.texStorage3D(e.TEXTURE_2D_ARRAY,ze,j,de[0].width,de[0].height,ie.depth);for(let D=0,B=de.length;D<B;D++)if(Y=de[D],_.format!==si)if(ve!==null)if(ge){if(He)if(_.layerUpdates.size>0){let W=yc(Y.width,Y.height,_.format,_.type);for(let F of _.layerUpdates){let ae=Y.data.subarray(F*W/Y.data.BYTES_PER_ELEMENT,(F+1)*W/Y.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,D,0,0,F,Y.width,Y.height,1,ve,ae)}}else i.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,D,0,0,0,Y.width,Y.height,ie.depth,ve,Y.data)}else i.compressedTexImage3D(e.TEXTURE_2D_ARRAY,D,j,Y.width,Y.height,ie.depth,0,Y.data,0,0);else Se("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(ge){if(He)i.texSubImage3D(e.TEXTURE_2D_ARRAY,D,0,0,0,Y.width,Y.height,ie.depth,ve,L,Y.data)}else i.texImage3D(e.TEXTURE_2D_ARRAY,D,j,Y.width,Y.height,ie.depth,0,ve,L,Y.data);if(_.layerUpdates.size>0)_.clearLayerUpdates()}else{if(ge&&Te)i.texStorage2D(e.TEXTURE_2D,ze,j,de[0].width,de[0].height);for(let D=0,B=de.length;D<B;D++)if(Y=de[D],_.format!==si)if(ve!==null)if(ge){if(He)i.compressedTexSubImage2D(e.TEXTURE_2D,D,0,0,Y.width,Y.height,ve,Y.data)}else i.compressedTexImage2D(e.TEXTURE_2D,D,j,Y.width,Y.height,0,Y.data);else Se("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(ge){if(He)i.texSubImage2D(e.TEXTURE_2D,D,0,0,Y.width,Y.height,ve,L,Y.data)}else i.texImage2D(e.TEXTURE_2D,D,j,Y.width,Y.height,0,ve,L,Y.data)}else if(_.isDataArrayTexture)if(ge){if(Te)i.texStorage3D(e.TEXTURE_2D_ARRAY,ze,j,ie.width,ie.height,ie.depth);if(He)if(_.layerUpdates.size>0){let D=yc(ie.width,ie.height,_.format,_.type);for(let B of _.layerUpdates){let W=ie.data.subarray(B*D/ie.data.BYTES_PER_ELEMENT,(B+1)*D/ie.data.BYTES_PER_ELEMENT);i.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,B,ie.width,ie.height,1,ve,L,W)}_.clearLayerUpdates()}else i.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,ve,L,ie.data)}else i.texImage3D(e.TEXTURE_2D_ARRAY,0,j,ie.width,ie.height,ie.depth,0,ve,L,ie.data);else if(_.isData3DTexture)if(ge){if(Te)i.texStorage3D(e.TEXTURE_3D,ze,j,ie.width,ie.height,ie.depth);if(He)i.texSubImage3D(e.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,ve,L,ie.data)}else i.texImage3D(e.TEXTURE_3D,0,j,ie.width,ie.height,ie.depth,0,ve,L,ie.data);else if(_.isFramebufferTexture){if(Te)if(ge)i.texStorage2D(e.TEXTURE_2D,ze,j,ie.width,ie.height);else{let D=ie.width,B=ie.height;for(let W=0;W<ze;W++)i.texImage2D(e.TEXTURE_2D,W,j,D,B,0,ve,L,null),D>>=1,B>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in e){let D=e.canvas;if(!D.hasAttribute("layoutsubtree"))D.setAttribute("layoutsubtree","true");if(ie.parentNode!==D){D.appendChild(ie),u.add(_),D.onpaint=(B)=>{let W=B.changedElements;for(let F of u)if(W.includes(F.image))F.needsUpdate=!0},D.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,ie);else{let{RGBA:W,RGBA:F,UNSIGNED_BYTE:ae}=e;e.texElementImage2D(e.TEXTURE_2D,0,W,F,ae,ie)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(de.length>0){if(ge&&Te){let D=Rt(de[0]);i.texStorage2D(e.TEXTURE_2D,ze,j,D.width,D.height)}for(let D=0,B=de.length;D<B;D++)if(Y=de[D],ge){if(He)i.texSubImage2D(e.TEXTURE_2D,D,0,0,ve,L,Y)}else i.texImage2D(e.TEXTURE_2D,D,j,ve,L,Y);_.generateMipmaps=!1}else if(ge){if(Te){let D=Rt(ie);i.texStorage2D(e.TEXTURE_2D,ze,j,D.width,D.height)}if(He)i.texSubImage2D(e.TEXTURE_2D,0,0,0,ve,L,ie)}else i.texImage2D(e.TEXTURE_2D,0,j,ve,L,ie);if(T(_)&&_.mipmapsAutoUpdate===!0)S(le);if(ue.__version=xe.version,_.onUpdate)_.onUpdate(_)}E.__version=_.version}function Re(E,_,O){if(_.image.length!==6)return;let le=se(E,_),ne=_.source;i.bindTexture(e.TEXTURE_CUBE_MAP,E.__webglTexture,e.TEXTURE0+O);let xe=r.get(ne);if(ne.version!==xe.__version||le===!0){i.activeTexture(e.TEXTURE0+O);let ue=tt.getPrimaries(tt.workingColorSpace),Z=_.colorSpace===qi?null:tt.getPrimaries(_.colorSpace),ie=_.colorSpace===qi||ue===Z?e.NONE:e.BROWSER_DEFAULT_WEBGL;i.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(e.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,ie);let ve=_.isCompressedTexture||_.image[0].isCompressedTexture,L=_.image[0]&&_.image[0].isDataTexture,j=[];for(let F=0;F<6;F++){if(!ve&&!L)j[F]=b(_.image[F],!0,n.maxCubemapSize);else j[F]=L?_.image[F].image:_.image[F];j[F]=Ke(_,j[F])}let Y=j[0],de=s.convert(_.format,_.colorSpace),ge=s.convert(_.type),Te=C(_.internalFormat,de,ge,_.normalized,_.colorSpace),He=_.isVideoTexture!==!0,ze=xe.__version===void 0||le===!0,D=ne.dataReady,B=y(_,Y);at(e.TEXTURE_CUBE_MAP,_);let W;if(_.isDepthTexture){if(Te=g(_.format===Ui,_.type),ze)if(He)i.texStorage2D(e.TEXTURE_CUBE_MAP,1,Te,Y.width,Y.height);else for(let F=0;F<6;F++)i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+F,0,Te,Y.width,Y.height,0,de,ge,null)}else if(ve){if(He&&ze)i.texStorage2D(e.TEXTURE_CUBE_MAP,B,Te,Y.width,Y.height);for(let F=0;F<6;F++){W=j[F].mipmaps;for(let ae=0;ae<W.length;ae++){let Ie=W[ae];if(_.format!==si)if(de!==null)if(He){if(D)i.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+F,ae,0,0,Ie.width,Ie.height,de,Ie.data)}else i.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+F,ae,Te,Ie.width,Ie.height,0,Ie.data);else Se("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()");else if(He){if(D)i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+F,ae,0,0,Ie.width,Ie.height,de,ge,Ie.data)}else i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+F,ae,Te,Ie.width,Ie.height,0,de,ge,Ie.data)}}}else{if(W=_.mipmaps,He&&ze){if(W.length>0)B++;let F=Rt(j[0]);i.texStorage2D(e.TEXTURE_CUBE_MAP,B,Te,F.width,F.height)}for(let F=0;F<6;F++)if(L){if(He){if(D)i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+F,0,0,0,j[F].width,j[F].height,de,ge,j[F].data)}else i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+F,0,Te,j[F].width,j[F].height,0,de,ge,j[F].data);for(let ae=0;ae<W.length;ae++){let xt=W[ae].image[F].image;if(He){if(D)i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+F,ae+1,0,0,xt.width,xt.height,de,ge,xt.data)}else i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+F,ae+1,Te,xt.width,xt.height,0,de,ge,xt.data)}}else{if(He){if(D)i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+F,0,0,0,de,ge,j[F])}else i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+F,0,Te,de,ge,j[F]);for(let ae=0;ae<W.length;ae++){let Ie=W[ae];if(He){if(D)i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+F,ae+1,0,0,de,ge,Ie.image[F])}else i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+F,ae+1,Te,de,ge,Ie.image[F])}}}if(T(_)&&_.mipmapsAutoUpdate===!0)S(e.TEXTURE_CUBE_MAP);if(xe.__version=ne.version,_.onUpdate)_.onUpdate(_)}E.__version=_.version}function Ve(E,_,O,le,ne,xe){let ue=s.convert(O.format,O.colorSpace),Z=s.convert(O.type),ie=C(O.internalFormat,ue,Z,O.normalized,O.colorSpace),ve=r.get(_),L=r.get(O);if(L.__renderTarget=_,!ve.__hasExternalTextures){let j=Math.max(1,_.width>>xe),Y=Math.max(1,_.height>>xe);if(ne===e.TEXTURE_3D||ne===e.TEXTURE_2D_ARRAY)i.texImage3D(ne,xe,ie,j,Y,_.depth,0,ue,Z,null);else i.texImage2D(ne,xe,ie,j,Y,0,ue,Z,null)}if(i.bindFramebuffer(e.FRAMEBUFFER,E),dt(_))a.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,le,ne,L.__webglTexture,0,we(_));else if(ne===e.TEXTURE_2D||ne>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)e.framebufferTexture2D(e.FRAMEBUFFER,le,ne,L.__webglTexture,xe);i.bindFramebuffer(e.FRAMEBUFFER,null)}function Ge(E,_,O){if(e.bindRenderbuffer(e.RENDERBUFFER,E),_.depthBuffer){let le=_.depthTexture,ne=le&&le.isDepthTexture?le.type:null,xe=g(_.stencilBuffer,ne),ue=_.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(dt(_))a.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,we(_),xe,_.width,_.height);else if(O)e.renderbufferStorageMultisample(e.RENDERBUFFER,we(_),xe,_.width,_.height);else e.renderbufferStorage(e.RENDERBUFFER,xe,_.width,_.height);e.framebufferRenderbuffer(e.FRAMEBUFFER,ue,e.RENDERBUFFER,E)}else{let le=_.textures;for(let ne=0;ne<le.length;ne++){let xe=le[ne],ue=s.convert(xe.format,xe.colorSpace),Z=s.convert(xe.type),ie=C(xe.internalFormat,ue,Z,xe.normalized,xe.colorSpace);if(dt(_))a.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,we(_),ie,_.width,_.height);else if(O)e.renderbufferStorageMultisample(e.RENDERBUFFER,we(_),ie,_.width,_.height);else e.renderbufferStorage(e.RENDERBUFFER,ie,_.width,_.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function et(E,_,O){let le=_.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(e.FRAMEBUFFER,E),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let ne=r.get(_.depthTexture);ne.__renderTarget=_;let xe=le?_.depthTexture.image[0]:_.depthTexture.image;if(!ne.__webglTexture||xe.width!==_.width||xe.height!==_.height)xe.width=_.width,xe.height=_.height,_.depthTexture.needsUpdate=!0;if(le)Ae(_.depthTexture,0);else Ue(_.depthTexture,0);let ue=ne.__webglTexture,Z=we(_),ie=le?e.TEXTURE_CUBE_MAP_POSITIVE_X+O:e.TEXTURE_2D,ve=_.depthTexture.format===Ui?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(_.depthTexture.format===Pi)if(dt(_))a.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,ve,ie,ue,0,Z);else e.framebufferTexture2D(e.FRAMEBUFFER,ve,ie,ue,0);else if(_.depthTexture.format===Ui)if(dt(_))a.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,ve,ie,ue,0,Z);else e.framebufferTexture2D(e.FRAMEBUFFER,ve,ie,ue,0);else throw Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ot(E){let _=r.get(E),O=E.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==E.depthTexture){let le=E.depthTexture;if(_.__depthDisposeCallback)_.__depthDisposeCallback();if(le){let ne=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,le.removeEventListener("dispose",ne)};le.addEventListener("dispose",ne),_.__depthDisposeCallback=ne}_.__boundDepthTexture=le}if(E.depthTexture&&!_.__autoAllocateDepthBuffer)if(O)for(let le=0;le<6;le++)et(_.__webglFramebuffer[le],E,le);else if(E.texture.mipmaps.length>0)et(_.__webglFramebuffer[0],E,0);else et(_.__webglFramebuffer,E,0);else if(O){_.__webglDepthbuffer=[];for(let le=0;le<6;le++)if(i.bindFramebuffer(e.FRAMEBUFFER,_.__webglFramebuffer[le]),_.__webglDepthbuffer[le]===void 0)_.__webglDepthbuffer[le]=e.createRenderbuffer(),Ge(_.__webglDepthbuffer[le],E,!1);else{let ne=E.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,xe=_.__webglDepthbuffer[le];e.bindRenderbuffer(e.RENDERBUFFER,xe),e.framebufferRenderbuffer(e.FRAMEBUFFER,ne,e.RENDERBUFFER,xe)}}else{if(E.texture.mipmaps.length>0)i.bindFramebuffer(e.FRAMEBUFFER,_.__webglFramebuffer[0]);else i.bindFramebuffer(e.FRAMEBUFFER,_.__webglFramebuffer);if(_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=e.createRenderbuffer(),Ge(_.__webglDepthbuffer,E,!1);else{let ne=E.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,xe=_.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,xe),e.framebufferRenderbuffer(e.FRAMEBUFFER,ne,e.RENDERBUFFER,xe)}}i.bindFramebuffer(e.FRAMEBUFFER,null)}function gt(E,_,O){let le=r.get(E);if(_!==void 0)Ve(le.__webglFramebuffer,E,E.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0);if(O!==void 0)ot(E)}function U(E){let _=E.texture,O=r.get(E),le=r.get(_);E.addEventListener("dispose",H),P(E);let ne=E.textures,xe=E.isWebGLCubeRenderTarget===!0,ue=ne.length>1;if(!ue){if(le.__webglTexture===void 0)le.__webglTexture=e.createTexture();le.__version=_.version,o.memory.textures++}if(xe){O.__webglFramebuffer=[];for(let Z=0;Z<6;Z++)if(_.mipmaps.length>0){O.__webglFramebuffer[Z]=[];for(let ie=0;ie<_.mipmaps.length;ie++)O.__webglFramebuffer[Z][ie]=e.createFramebuffer()}else O.__webglFramebuffer[Z]=e.createFramebuffer()}else{if(_.mipmaps.length>0){O.__webglFramebuffer=[];for(let Z=0;Z<_.mipmaps.length;Z++)O.__webglFramebuffer[Z]=e.createFramebuffer()}else O.__webglFramebuffer=e.createFramebuffer();if(ue)for(let Z=0,ie=ne.length;Z<ie;Z++){let ve=r.get(ne[Z]);if(ve.__webglTexture===void 0)ve.__webglTexture=e.createTexture(),o.memory.textures++}if(E.samples>0&&dt(E)===!1){O.__webglMultisampledFramebuffer=e.createFramebuffer(),O.__webglColorRenderbuffer=[],i.bindFramebuffer(e.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let Z=0;Z<ne.length;Z++){let ie=ne[Z];O.__webglColorRenderbuffer[Z]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,O.__webglColorRenderbuffer[Z]);let ve=s.convert(ie.format,ie.colorSpace),L=s.convert(ie.type),j=C(ie.internalFormat,ve,L,ie.normalized,ie.colorSpace,E.isXRRenderTarget===!0),Y=we(E);e.renderbufferStorageMultisample(e.RENDERBUFFER,Y,j,E.width,E.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+Z,e.RENDERBUFFER,O.__webglColorRenderbuffer[Z])}if(e.bindRenderbuffer(e.RENDERBUFFER,null),E.depthBuffer)O.__webglDepthRenderbuffer=e.createRenderbuffer(),Ge(O.__webglDepthRenderbuffer,E,!0);i.bindFramebuffer(e.FRAMEBUFFER,null)}}if(xe){i.bindTexture(e.TEXTURE_CUBE_MAP,le.__webglTexture),at(e.TEXTURE_CUBE_MAP,_);for(let Z=0;Z<6;Z++)if(_.mipmaps.length>0)for(let ie=0;ie<_.mipmaps.length;ie++)Ve(O.__webglFramebuffer[Z][ie],E,_,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ie);else Ve(O.__webglFramebuffer[Z],E,_,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0);if(T(_))S(e.TEXTURE_CUBE_MAP);else if(_.mipmaps.length>0)e.texParameteri(e.TEXTURE_CUBE_MAP,e.TEXTURE_MAX_LEVEL,_.mipmaps.length-1);i.unbindTexture()}else if(ue){for(let Z=0,ie=ne.length;Z<ie;Z++){let ve=ne[Z],L=r.get(ve),j=e.TEXTURE_2D;if(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)j=E.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY;if(i.bindTexture(j,L.__webglTexture),at(j,ve),Ve(O.__webglFramebuffer,E,ve,e.COLOR_ATTACHMENT0+Z,j,0),T(ve))S(j)}i.unbindTexture()}else{let Z=e.TEXTURE_2D;if(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)Z=E.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY;if(i.bindTexture(Z,le.__webglTexture),at(Z,_),_.mipmaps.length>0)for(let ie=0;ie<_.mipmaps.length;ie++)Ve(O.__webglFramebuffer[ie],E,_,e.COLOR_ATTACHMENT0,Z,ie);else Ve(O.__webglFramebuffer,E,_,e.COLOR_ATTACHMENT0,Z,0);if(T(_))S(Z);else if(_.mipmaps.length>0)e.texParameteri(Z,e.TEXTURE_MAX_LEVEL,_.mipmaps.length-1);i.unbindTexture()}if(E.depthBuffer)ot(E)}function Ut(E){let _=E.textures;for(let O=0,le=_.length;O<le;O++){let ne=_[O];if(T(ne)&&ne.mipmapsAutoUpdate===!0){let xe=A(E),ue=r.get(ne).__webglTexture;i.bindTexture(xe,ue),S(xe),i.unbindTexture()}}}let Qe=[];function At(E){if(E.samples>0){if(dt(E)===!1){let{textures:_,width:O,height:le}=E,ne=e.COLOR_BUFFER_BIT,xe=E.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,ue=r.get(E),Z=_.length>1;if(Z)for(let ve=0;ve<_.length;ve++)i.bindFramebuffer(e.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+ve,e.RENDERBUFFER,null),i.bindFramebuffer(e.FRAMEBUFFER,ue.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+ve,e.TEXTURE_2D,null,0);if(i.bindFramebuffer(e.READ_FRAMEBUFFER,ue.__webglMultisampledFramebuffer),E.texture.mipmaps.length>0)i.bindFramebuffer(e.DRAW_FRAMEBUFFER,ue.__webglFramebuffer[0]);else i.bindFramebuffer(e.DRAW_FRAMEBUFFER,ue.__webglFramebuffer);for(let ve=0;ve<_.length;ve++){if(E.resolveDepthBuffer){if(E.depthBuffer)ne|=e.DEPTH_BUFFER_BIT;if(E.stencilBuffer&&E.resolveStencilBuffer)ne|=e.STENCIL_BUFFER_BIT}if(Z){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,ue.__webglColorRenderbuffer[ve]);let L=r.get(_[ve]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,L,0)}if(e.blitFramebuffer(0,0,O,le,0,0,O,le,ne,e.NEAREST),l===!0){if(Qe.length=0,Qe.push(e.COLOR_ATTACHMENT0+ve),E.depthBuffer&&E.storeMultisampledDepthBuffer===!1)Qe.push(xe);e.invalidateFramebuffer(e.READ_FRAMEBUFFER,Qe)}}if(i.bindFramebuffer(e.READ_FRAMEBUFFER,null),i.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),Z)for(let ve=0;ve<_.length;ve++){i.bindFramebuffer(e.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+ve,e.RENDERBUFFER,ue.__webglColorRenderbuffer[ve]);let L=r.get(_[ve]).__webglTexture;i.bindFramebuffer(e.FRAMEBUFFER,ue.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+ve,e.TEXTURE_2D,L,0)}i.bindFramebuffer(e.DRAW_FRAMEBUFFER,ue.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.storeMultisampledDepthBuffer===!1&&l){let _=E.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[_])}}}function we(E){return Math.min(n.maxSamples,E.samples)}function dt(E){let _=r.get(E);return E.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function Je(E){let _=o.render.frame;if(f.get(E)!==_)f.set(E,_),E.update()}function Ke(E,_){let{colorSpace:O,format:le,type:ne}=E;if(E.isCompressedTexture===!0||E.isVideoTexture===!0)return _;if(O!==on&&O!==qi)if(tt.getTransfer(O)===ut){if(le!==si||ne!==Ht)Se("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.")}else Fe("WebGLTextures: Unsupported texture color space:",O);return _}function Rt(E){if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement)c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height;else if(typeof VideoFrame<"u"&&E instanceof VideoFrame)c.width=E.displayWidth,c.height=E.displayHeight;else c.width=E.width,c.height=E.height;return c}this.allocateTextureUnit=q,this.resetTextureUnits=ee,this.getTextureUnits=ce,this.setTextureUnits=De,this.setTexture2D=Ue,this.setTexture2DArray=Pe,this.setTexture3D=qe,this.setTextureCube=Ae,this.rebindTextures=gt,this.setupRenderTarget=U,this.updateRenderTargetMipmap=Ut,this.updateMultisampleRenderTarget=At,this.setupDepthRenderbuffer=ot,this.setupFrameBufferTexture=Ve,this.useMultisampledRTT=dt,this.dispose=J}function wc(e,t){function i(r,n=qi){let s,o=tt.getTransfer(n);if(r===Ht)return e.UNSIGNED_BYTE;if(r===Hn)return e.UNSIGNED_SHORT_4_4_4_4;if(r===Wn)return e.UNSIGNED_SHORT_5_5_5_1;if(r===oa)return e.UNSIGNED_INT_5_9_9_9_REV;if(r===aa)return e.UNSIGNED_INT_10F_11F_11F_REV;if(r===na)return e.BYTE;if(r===sa)return e.SHORT;if(r===Mr)return e.UNSIGNED_SHORT;if(r===kn)return e.INT;if(r===Kt)return e.UNSIGNED_INT;if(r===Wt)return e.FLOAT;if(r===wt)return e.HALF_FLOAT;if(r===la)return e.ALPHA;if(r===ca)return e.RGB;if(r===si)return e.RGBA;if(r===Pi)return e.DEPTH_COMPONENT;if(r===Ui)return e.DEPTH_STENCIL;if(r===Xn)return e.RED;if(r===tn)return e.RED_INTEGER;if(r===Fi)return e.RG;if(r===qn)return e.RG_INTEGER;if(r===Yn)return e.RGBA_INTEGER;if(r===Zn||r===Jn||r===Kn||r===Qn)if(o===ut)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(r===Zn)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Jn)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Kn)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Qn)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(r===Zn)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Jn)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Kn)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Qn)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Bs||r===Os||r===zs||r===Gs)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(r===Bs)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Os)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===zs)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Gs)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Vs||r===ks||r===Hs||r===Ws||r===Xs||r===rn||r===qs)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(r===Vs||r===ks)return o===ut?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(r===Hs)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(r===Ws)return s.COMPRESSED_R11_EAC;if(r===Xs)return s.COMPRESSED_SIGNED_R11_EAC;if(r===rn)return s.COMPRESSED_RG11_EAC;if(r===qs)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===Ys||r===Zs||r===Js||r===Ks||r===Qs||r===$s||r===js||r===eo||r===to||r===io||r===ro||r===no||r===so||r===oo)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(r===Ys)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Zs)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Js)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Ks)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Qs)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===$s)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===js)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===eo)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===to)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===io)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===ro)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===no)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===so)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===oo)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===ao||r===lo||r===co)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(r===ao)return o===ut?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===lo)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===co)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===ho||r===uo||r===nn||r===fo)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(r===ho)return s.COMPRESSED_RED_RGTC1_EXT;if(r===uo)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===nn)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===fo)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;if(r===tr)return e.UNSIGNED_INT_24_8;return e[r]!==void 0?e[r]:null}return{convert:i}}var U0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,F0=`
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

}`;class Ac{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new gs(e.texture);if(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)this.depthNear=e.depthNear,this.depthFar=e.depthFar;this.texture=i}}getMesh(e){if(this.texture!==null){if(this.mesh===null){let t=e.cameras[0].viewport,i=new Et({vertexShader:U0,fragmentShader:F0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new je(new lr(20,20),i)}}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Rc extends Qt{constructor(e,t){super();let i=this,r=null,n=1,s=null,o="local-floor",a=1,l=null,c=null,f=null,u=null,h=null,d=null,x=typeof XRWebGLBinding<"u",M=new Ac,p={},m=t.getContextAttributes(),b=null,T=null,S=[],A=[],C=new K,g=null,y=null,P=new Gt;P.viewport=new mt;let k=new Gt;k.viewport=new mt;let I=[P,k],H=new hl,re=null,R=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let he=S[q];if(he===void 0)he=new ss,S[q]=he;return he.getTargetRaySpace()},this.getControllerGrip=function(q){let he=S[q];if(he===void 0)he=new ss,S[q]=he;return he.getGripSpace()},this.getHand=function(q){let he=S[q];if(he===void 0)he=new ss,S[q]=he;return he.getHandSpace()};function J(q){let he=A.indexOf(q.inputSource);if(he===-1)return;let Ue=S[he];if(Ue!==void 0)Ue.update(q.inputSource,q.frame,l||s),Ue.dispatchEvent({type:q.type,data:q.inputSource})}function te(){r.removeEventListener("select",J),r.removeEventListener("selectstart",J),r.removeEventListener("selectend",J),r.removeEventListener("squeeze",J),r.removeEventListener("squeezestart",J),r.removeEventListener("squeezeend",J),r.removeEventListener("end",te),r.removeEventListener("inputsourceschange",G);for(let q=0;q<S.length;q++){let he=A[q];if(he===null)continue;A[q]=null,S[q].disconnect(he)}re=null,R=null,M.reset();for(let q in p)delete p[q];if(e.setRenderTarget(b),h=null,u=null,f=null,r=null,T=null,De.stop(),i.isPresenting=!1,e.setPixelRatio(g),e.setSize(C.width,C.height,!1),y!==null){let q=y.camera;q.fov=y.fov,q.zoom=y.zoom,q.updateProjectionMatrix(),y=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){if(n=q,i.isPresenting===!0)Se("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){if(o=q,i.isPresenting===!0)Se("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||s},this.setReferenceSpace=function(q){l=q},this.getBaseLayer=function(){return u!==null?u:h},this.getBinding=function(){if(f===null&&x)f=new XRWebGLBinding(r,t);return f},this.getFrame=function(){return d},this.getSession=function(){return r},this.setSession=async function(q){if(r=q,r!==null){if(b=e.getRenderTarget(),r.addEventListener("select",J),r.addEventListener("selectstart",J),r.addEventListener("selectend",J),r.addEventListener("squeeze",J),r.addEventListener("squeezestart",J),r.addEventListener("squeezeend",J),r.addEventListener("end",te),r.addEventListener("inputsourceschange",G),m.xrCompatible!==!0)await t.makeXRCompatible();if(g=e.getPixelRatio(),e.getSize(C),!(x&&("createProjectionLayer"in XRWebGLBinding.prototype))){let Ue={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:n};h=new XRWebGLLayer(r,t,Ue),r.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),T=new Tt(h.framebufferWidth,h.framebufferHeight,{format:si,type:Ht,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{let Ue=null,Pe=null,qe=null;if(m.depth)qe=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Ue=m.stencil?Ui:Pi,Pe=m.stencil?tr:Kt;let Ae={colorFormat:t.RGBA8,depthFormat:qe,scaleFactor:n};f=this.getBinding(),u=f.createProjectionLayer(Ae),r.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),T=new Tt(u.textureWidth,u.textureHeight,{format:si,type:Ht,depthTexture:new zi(u.textureWidth,u.textureHeight,Pe,void 0,void 0,void 0,void 0,void 0,void 0,Ue),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(a),l=null,s=await r.requestReferenceSpace(o),De.setContext(r),De.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function G(q){for(let he=0;he<q.removed.length;he++){let Ue=q.removed[he],Pe=A.indexOf(Ue);if(Pe>=0)A[Pe]=null,S[Pe].disconnect(Ue)}for(let he=0;he<q.added.length;he++){let Ue=q.added[he],Pe=A.indexOf(Ue);if(Pe===-1){for(let Ae=0;Ae<S.length;Ae++)if(Ae>=A.length){A.push(Ue),Pe=Ae;break}else if(A[Ae]===null){A[Ae]=Ue,Pe=Ae;break}if(Pe===-1)break}let qe=S[Pe];if(qe)qe.connect(Ue)}}function pe(q,he){if(he===null)q.matrixWorld.copy(q.matrix);else q.matrixWorld.multiplyMatrices(he.matrixWorld,q.matrix);q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(r===null)return;let{near:he,far:Ue}=q;if(M.texture!==null){if(M.depthNear>0)he=M.depthNear;if(M.depthFar>0)Ue=M.depthFar}if(H.near=k.near=P.near=he,H.far=k.far=P.far=Ue,re!==H.near||R!==H.far)r.updateRenderState({depthNear:H.near,depthFar:H.far}),re=H.near,R=H.far;H.layers.mask=q.layers.mask|6,P.layers.mask=H.layers.mask&-5,k.layers.mask=H.layers.mask&-3;let Pe=q.parent,qe=H.cameras;pe(H,Pe);for(let Ae=0;Ae<qe.length;Ae++)pe(qe[Ae],Pe);if(H.projectionMatrix.copy(P.projectionMatrix),H.projectionMatrixInverse.copy(P.projectionMatrixInverse),y===null&&q.isPerspectiveCamera)y={camera:q,fov:q.fov,zoom:q.zoom};Q(q,H,Pe)};function Q(q,he,Ue){if(Ue===null)q.matrix.copy(he.matrixWorld);else q.matrix.copy(Ue.matrixWorld),q.matrix.invert(),q.matrix.multiply(he.matrixWorld);if(q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(he.projectionMatrix),q.projectionMatrixInverse.copy(he.projectionMatrixInverse),q.isPerspectiveCamera)q.fov=cn*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1}this.getCamera=function(){return H},this.getFoveation=function(){if(u===null&&h===null)return;return a},this.setFoveation=function(q){if(a=q,u!==null)u.fixedFoveation=q;if(h!==null&&h.fixedFoveation!==void 0)h.fixedFoveation=q},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(H)},this.getCameraTexture=function(q){return p[q]};let ee=null;function ce(q,he){if(c=he.getViewerPose(l||s),d=he,c!==null){let Ue=c.views;if(h!==null)e.setRenderTargetFramebuffer(T,h.framebuffer),e.setRenderTarget(T);let Pe=!1;if(Ue.length!==H.cameras.length)H.cameras.length=0,Pe=!0;for(let it=0;it<Ue.length;it++){let Ze=Ue[it],at=null;if(h!==null)at=h.getViewport(Ze);else{let me=f.getViewSubImage(u,Ze);if(at=me.viewport,it===0)e.setRenderTargetTextures(T,me.colorTexture,me.depthStencilTexture),e.setRenderTarget(T)}let se=I[it];if(se===void 0)se=new Gt,se.layers.enable(it),se.viewport=new mt,I[it]=se;if(se.matrix.fromArray(Ze.transform.matrix),se.matrix.decompose(se.position,se.quaternion,se.scale),se.projectionMatrix.fromArray(Ze.projectionMatrix),se.projectionMatrixInverse.copy(se.projectionMatrix).invert(),se.viewport.set(at.x,at.y,at.width,at.height),it===0)H.matrix.copy(se.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale);if(Pe===!0)H.cameras.push(se)}let qe=r.enabledFeatures;if(qe&&qe.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&x){f=i.getBinding();let it=f.getDepthInformation(Ue[0]);if(it&&it.isValid&&it.texture)M.init(it,r.renderState)}if(qe&&qe.includes("camera-access")&&x){e.state.unbindTexture(),f=i.getBinding();for(let it=0;it<Ue.length;it++){let Ze=Ue[it].camera;if(Ze){let at=p[Ze];if(!at)at=new gs,p[Ze]=at;let se=f.getCameraImage(Ze);at.sourceTexture=se}}}}for(let Ue=0;Ue<S.length;Ue++){let Pe=A[Ue],qe=S[Ue];if(Pe!==null&&qe!==void 0)qe.update(Pe,he,l||s)}if(ee)ee(q,he);if(he.detectedPlanes)i.dispatchEvent({type:"planesdetected",data:he});d=null}let De=new ul;De.setAnimationLoop(ce),this.setAnimationLoop=function(q){ee=q},this.dispose=function(){}}}var B0=new Xe,rm=new We;rm.set(-1,0,0,0,1,0,0,0,1);function nm(e,t){function i(p,m){if(p.matrixAutoUpdate===!0)p.updateMatrix();m.value.copy(p.matrix)}function r(p,m){if(m.color.getRGB(p.fogColor.value,ja(e)),m.isFog)p.fogNear.value=m.near,p.fogFar.value=m.far;else if(m.isFogExp2)p.fogDensity.value=m.density}function n(p,m,b,T,S){if(m.isNodeMaterial)m.uniformsNeedUpdate=!1;else if(m.isMeshBasicMaterial)s(p,m);else if(m.isMeshLambertMaterial){if(s(p,m),m.envMap)p.envMapIntensity.value=m.envMapIntensity}else if(m.isMeshToonMaterial)s(p,m),u(p,m);else if(m.isMeshPhongMaterial){if(s(p,m),f(p,m),m.envMap)p.envMapIntensity.value=m.envMapIntensity}else if(m.isMeshStandardMaterial){if(s(p,m),h(p,m),m.isMeshPhysicalMaterial)d(p,m,S)}else if(m.isMeshMatcapMaterial)s(p,m),x(p,m);else if(m.isMeshDepthMaterial)s(p,m);else if(m.isMeshDistanceMaterial)s(p,m),M(p,m);else if(m.isMeshNormalMaterial)s(p,m);else if(m.isLineBasicMaterial){if(o(p,m),m.isLineDashedMaterial)a(p,m)}else if(m.isPointsMaterial)l(p,m,b,T);else if(m.isSpriteMaterial)c(p,m);else if(m.isShadowMaterial)p.color.value.copy(m.color),p.opacity.value=m.opacity;else if(m.isShaderMaterial)m.uniformsNeedUpdate=!1}function s(p,m){if(p.opacity.value=m.opacity,m.color)p.diffuse.value.copy(m.color);if(m.emissive)p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity);if(m.map)p.map.value=m.map,i(m.map,p.mapTransform);if(m.alphaMap)p.alphaMap.value=m.alphaMap,i(m.alphaMap,p.alphaMapTransform);if(m.bumpMap){if(p.bumpMap.value=m.bumpMap,i(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===Lt)p.bumpScale.value*=-1}if(m.normalMap){if(p.normalMap.value=m.normalMap,i(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===Lt)p.normalScale.value.negate()}if(m.displacementMap)p.displacementMap.value=m.displacementMap,i(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias;if(m.emissiveMap)p.emissiveMap.value=m.emissiveMap,i(m.emissiveMap,p.emissiveMapTransform);if(m.specularMap)p.specularMap.value=m.specularMap,i(m.specularMap,p.specularMapTransform);if(m.alphaTest>0)p.alphaTest.value=m.alphaTest;let b=t.get(m),{envMap:T,envMapRotation:S}=b;if(T){if(p.envMap.value=T,p.envMapRotation.value.setFromMatrix4(B0.makeRotationFromEuler(S)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1)p.envMapRotation.value.premultiply(rm);p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio}if(m.lightMap)p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,i(m.lightMap,p.lightMapTransform);if(m.aoMap)p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,i(m.aoMap,p.aoMapTransform)}function o(p,m){if(p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map)p.map.value=m.map,i(m.map,p.mapTransform)}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,b,T){if(p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*b,p.scale.value=T*0.5,m.map)p.map.value=m.map,i(m.map,p.uvTransform);if(m.alphaMap)p.alphaMap.value=m.alphaMap,i(m.alphaMap,p.alphaMapTransform);if(m.alphaTest>0)p.alphaTest.value=m.alphaTest}function c(p,m){if(p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map)p.map.value=m.map,i(m.map,p.mapTransform);if(m.alphaMap)p.alphaMap.value=m.alphaMap,i(m.alphaMap,p.alphaMapTransform);if(m.alphaTest>0)p.alphaTest.value=m.alphaTest}function f(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,0.0001)}function u(p,m){if(m.gradientMap)p.gradientMap.value=m.gradientMap}function h(p,m){if(p.metalness.value=m.metalness,m.metalnessMap)p.metalnessMap.value=m.metalnessMap,i(m.metalnessMap,p.metalnessMapTransform);if(p.roughness.value=m.roughness,m.roughnessMap)p.roughnessMap.value=m.roughnessMap,i(m.roughnessMap,p.roughnessMapTransform);if(m.envMap)p.envMapIntensity.value=m.envMapIntensity}function d(p,m,b){if(p.ior.value=m.ior,m.diffuseRoughness>0){if(p.diffuseRoughness.value=m.diffuseRoughness,m.diffuseRoughnessMap)p.diffuseRoughnessMap.value=m.diffuseRoughnessMap,i(m.diffuseRoughnessMap,p.diffuseRoughnessMapTransform)}if(m.sheen>0){if(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap)p.sheenColorMap.value=m.sheenColorMap,i(m.sheenColorMap,p.sheenColorMapTransform);if(m.sheenRoughnessMap)p.sheenRoughnessMap.value=m.sheenRoughnessMap,i(m.sheenRoughnessMap,p.sheenRoughnessMapTransform)}if(m.clearcoat>0){if(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap)p.clearcoatMap.value=m.clearcoatMap,i(m.clearcoatMap,p.clearcoatMapTransform);if(m.clearcoatRoughnessMap)p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,i(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform);if(m.clearcoatNormalMap){if(p.clearcoatNormalMap.value=m.clearcoatNormalMap,i(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Lt)p.clearcoatNormalScale.value.negate()}}if(m.dispersion>0)p.dispersion.value=m.dispersion;if(m.retroreflectivity>0)p.retroreflectivity.value=m.retroreflectivity;if(m.iridescence>0){if(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessMinimum,p.iridescenceThicknessMaximum.value=m.iridescenceThicknessMaximum,m.iridescenceMap)p.iridescenceMap.value=m.iridescenceMap,i(m.iridescenceMap,p.iridescenceMapTransform);if(m.iridescenceThicknessMap)p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,i(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform)}if(m.transmission>0){if(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=b.texture,p.transmissionSamplerSize.value.set(b.width,b.height),m.transmissionMap)p.transmissionMap.value=m.transmissionMap,i(m.transmissionMap,p.transmissionMapTransform);if(p.thickness.value=m.thickness,m.thicknessMap)p.thicknessMap.value=m.thicknessMap,i(m.thicknessMap,p.thicknessMapTransform);p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)}if(m.anisotropy>0){if(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap)p.anisotropyMap.value=m.anisotropyMap,i(m.anisotropyMap,p.anisotropyMapTransform)}if(p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap)p.specularColorMap.value=m.specularColorMap,i(m.specularColorMap,p.specularColorMapTransform);if(m.specularIntensityMap)p.specularIntensityMap.value=m.specularIntensityMap,i(m.specularIntensityMap,p.specularIntensityMapTransform)}function x(p,m){if(m.matcap)p.matcap.value=m.matcap}function M(p,m){let b=t.get(m).light;p.referencePosition.value.setFromMatrixPosition(b.matrixWorld),p.nearDistance.value=b.shadow.camera.near,p.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:n}}function sm(e,t,i,r){let n={},s={};function o(b,T){let S=T.program;r.uniformBlockBinding(b,S,n[b.id])}function a(b,T){let S=n[b.id];if(S===void 0)x(b),S=l(b),n[b.id]=S,b.addEventListener("dispose",p);let A=T.program;r.updateUBOMapping(b,A);let C=t.render.frame;if(s[b.id]!==C)c(b),s[b.id]=C}function l(b){let T=e.createBuffer(),{__size:S,usage:A}=b;return e.bindBuffer(e.UNIFORM_BUFFER,T),e.bufferData(e.UNIFORM_BUFFER,S,A),e.bindBuffer(e.UNIFORM_BUFFER,null),T}function c(b){let T=n[b.id],{uniforms:S,__cache:A}=b;e.bindBuffer(e.UNIFORM_BUFFER,T);for(let C=0,g=S.length;C<g;C++){let y=S[C];if(Array.isArray(y))for(let P=0,k=y.length;P<k;P++)f(y[P],C,P,A);else f(y,C,0,A)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function f(b,T,S,A){if(h(b,T,S,A)===!0){let{__offset:C,value:g}=b;if(Array.isArray(g)){let y=0;for(let P=0;P<g.length;P++){let k=g[P],I=M(k,!0);u(k,b.__data,y),y+=I.storage/Float32Array.BYTES_PER_ELEMENT}}else u(g,b.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,C,b.__data)}}function u(b,T,S){if(typeof b==="number"||typeof b==="boolean")T[S]=b;else if(b.isMatrix3)T[S]=b.elements[0],T[S+1]=b.elements[1],T[S+2]=b.elements[2],T[S+3]=0,T[S+4]=b.elements[3],T[S+5]=b.elements[4],T[S+6]=b.elements[5],T[S+7]=0,T[S+8]=b.elements[6],T[S+9]=b.elements[7],T[S+10]=b.elements[8],T[S+11]=0;else if(ArrayBuffer.isView(b))T.set(b.subarray(0,T.length-S),S);else b.toArray(T,S)}function h(b,T,S,A){let C=b.value,g=T+"_"+S;if(Array.isArray(C)){if(A[g]===void 0)A[g]=[];let y=A[g],P=!1;for(let k=0;k<C.length;k++)if(d(C[k],y,k)===!0)P=!0;return P}return d(C,A,g)}function d(b,T,S){if(T[S]===void 0){if(typeof b==="number"||typeof b==="boolean")T[S]=b;else if(ArrayBuffer.isView(b))T[S]=b.slice();else T[S]=b.clone();return!0}else{let A=T[S];if(typeof b==="number"||typeof b==="boolean"){if(A!==b)return T[S]=b,!0}else if(ArrayBuffer.isView(b))return!0;else if(A.equals(b)===!1)return A.copy(b),!0}return!1}function x(b){let T=b.uniforms,S=0,A=16;for(let g=0,y=T.length;g<y;g++){let P=Array.isArray(T[g])?T[g]:[T[g]];for(let k=0,I=P.length;k<I;k++){let H=P[k],re=Array.isArray(H.value)?H.value:[H.value],R=Array.isArray(T[g])||Array.isArray(H.value),J=S;for(let G=0,pe=re.length;G<pe;G++){let Q=re[G],ee=M(Q,R),ce=S%A,De=ce%ee.boundary,q=ce+De;if(S+=De,q!==0&&A-q<ee.storage)S+=A-q;if(G===0)J=S;S+=ee.storage}let te=H.type==="int"?Int32Array:H.type==="uint"?Uint32Array:Float32Array;H.__data=new te((S-J)/Float32Array.BYTES_PER_ELEMENT),H.__offset=J}}let C=S%A;if(C>0)S+=A-C;return b.__size=S,b.__cache={},this}function M(b,T){let S={boundary:0,storage:0};if(typeof b==="number"||typeof b==="boolean")S.boundary=4,S.storage=4;else if(b.isVector2)S.boundary=8,S.storage=8;else if(b.isVector3||b.isColor)S.boundary=16,S.storage=12;else if(b.isVector4)S.boundary=16,S.storage=16;else if(b.isMatrix3)S.boundary=16,S.storage=48;else if(b.isMatrix4)S.boundary=16,S.storage=64;else if(b.isTexture)Se("WebGLRenderer: Texture samplers can not be part of an uniforms group.");else if(ArrayBuffer.isView(b))S.boundary=16,S.storage=b.byteLength;else Se("WebGLRenderer: Unsupported uniform value type.",b);if(T===!0)S.boundary=16,S.storage=Math.ceil(S.storage/16)*16;return S}function p(b){let T=b.target;T.removeEventListener("dispose",p),e.deleteBuffer(n[T.id]),delete n[T.id],delete s[T.id]}function m(){for(let b in n)e.deleteBuffer(n[b]);n={},s={}}return{bind:o,update:a,dispose:m}}var O0=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),_r=null;function om(){if(_r===null)_r=new mr(O0,16,16,Fi,wt),_r.name="DFG_LUT",_r.minFilter=Nt,_r.magFilter=Nt,_r.wrapS=ui,_r.wrapT=ui,_r.generateMipmaps=!1,_r.needsUpdate=!0;return _r}class gl{constructor(e={}){let{canvas:t=El(),context:i=null,depth:r=!0,stencil:n=!1,alpha:s=!1,antialias:o=!1,premultipliedAlpha:a=!0,preserveDrawingBuffer:l=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:u=!1,outputBufferType:h=Ht}=e;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=s;let x=h,M=new Set([Yn,qn,tn]),p=new Set([Ht,Kt,Mr,tr,Hn,Wn]),m=new Uint32Array(4),b=new Int32Array(4),T={textures:[],min:[],max:[],resolution:[]},S=null,A=null,C=[],g=[],y=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ni,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let P=this,k=!1,I=null,H=null,re=null,R=null;this._outputColorSpace=Ot;let J=0,te=0,G=null,pe=-1,Q=null,ee=new mt,ce=new mt,De=null,q=new fe(0),he=0,{width:Ue,height:Pe}=t,qe=1,Ae=null,ft=null,it=new mt(0,0,Ue,Pe),Ze=new mt(0,0,Ue,Pe),at=!1,se=new Ki,me=new ps,_e=!1,be=!1,Re=new Xe,Ve=new w,Ge=new mt,et={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ot=!1;function gt(){return G===null?qe:1}let U=i;function Ut(v,N){return t.getContext(v,N)}let Qe,At,we,dt,Je,Ke,Rt,E,_,O,le,ne,xe,ue,Z,ie,ve,L,j,Y,de,ge,Te;try{let v={alpha:!0,depth:r,stencil:n,antialias:o,premultipliedAlpha:a,preserveDrawingBuffer:l,powerPreference:c,failIfMajorPerformanceCaveat:f};if("setAttribute"in t)t.setAttribute("data-engine",`three.js r${ws}`);if(t.addEventListener("webglcontextlost",D,!1),t.addEventListener("webglcontextrestored",B,!1),t.addEventListener("webglcontextcreationerror",W,!1),U===null){if(U=Ut("webgl2",v),U===null)if(Ut("webgl2"))throw Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.");else throw Error("THREE.WebGLRenderer: Error creating WebGL context.")}He()}catch(v){throw t.removeEventListener("webglcontextlost",D,!1),t.removeEventListener("webglcontextrestored",B,!1),t.removeEventListener("webglcontextcreationerror",W,!1),Fe("WebGLRenderer: "+v.message),v}function He(){if(Qe=new dp(U),Qe.init(),de=new wc(U,Qe),At=new np(U,Qe,e,de),we=new tm(U,Qe),At.reversedDepthBuffer&&u)we.buffers.depth.setReversed(!0);H=U.createFramebuffer(),re=U.createFramebuffer(),R=U.createFramebuffer(),dt=new gp(U),Je=new Wp,Ke=new im(U,Qe,we,Je,At,de,dt),Rt=new fp(P),E=new vu(U),ge=new ip(U,E),_=new pp(U,E,dt,ge),O=new _p(U,_,E,ge,dt),L=new xp(U,At,Ke),Z=new sp(Je),le=new Hp(P,Rt,Qe,At,ge,Z),ne=new nm(P,Je),xe=new Yp,ue=new Kp(Qe),ve=new tp(P,Rt,we,O,d,a),ie=new em(P,O,At),Te=new sm(U,dt,At,we),j=new rp(U,Qe,dt),Y=new mp(U,Qe,dt),dt.programs=le.programs,P.capabilities=At,P.extensions=Qe,P.properties=Je,P.renderLists=xe,P.shadowMap=ie,P.state=we,P.info=dt}if(x!==Ht)y=new vp(x,t.width,t.height,o,r,n);let ze=new Rc(P,U);this.xr=ze,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){let v=Qe.get("WEBGL_lose_context");if(v)v.loseContext()},this.forceContextRestore=function(){let v=Qe.get("WEBGL_lose_context");if(v)v.restoreContext()},this.getPixelRatio=function(){return qe},this.setPixelRatio=function(v){if(v===void 0)return;qe=v,this.setSize(Ue,Pe,!1)},this.getSize=function(v){return v.set(Ue,Pe)},this.setSize=function(v,N,X=!0){if(ze.isPresenting){Se("WebGLRenderer: Can't change size while VR device is presenting.");return}if(Ue=v,Pe=N,t.width=Math.floor(v*qe),t.height=Math.floor(N*qe),X===!0)t.style.width=v+"px",t.style.height=N+"px";if(y!==null)y.setSize(t.width,t.height);this.setViewport(0,0,v,N)},this.getDrawingBufferSize=function(v){return v.set(Ue*qe,Pe*qe).floor()},this.setDrawingBufferSize=function(v,N,X){Ue=v,Pe=N,qe=X,t.width=Math.floor(v*X),t.height=Math.floor(N*X),this.setViewport(0,0,v,N)},this.setEffects=function(v){if(x===Ht){Fe("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(v){for(let N=0;N<v.length;N++)if(v[N].isOutputPass===!0){Se("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}y.setEffects(v||[])},this.getCurrentViewport=function(v){return v.copy(ee)},this.getViewport=function(v){return v.copy(it)},this.setViewport=function(v,N,X,z){if(v.isVector4)it.set(v.x,v.y,v.z,v.w);else it.set(v,N,X,z);we.viewport(ee.copy(it).multiplyScalar(gt()).round())},this.getScissor=function(v){return v.copy(Ze)},this.setScissor=function(v,N,X,z){if(v.isVector4)Ze.set(v.x,v.y,v.z,v.w);else Ze.set(v,N,X,z);we.scissor(ce.copy(Ze).multiplyScalar(gt()).round())},this.getScissorTest=function(){return at},this.setScissorTest=function(v){we.setScissorTest(at=v)},this.setOpaqueSort=function(v){Ae=v},this.setTransparentSort=function(v){ft=v},this.getClearColor=function(v){return v.copy(ve.getClearColor())},this.setClearColor=function(){ve.setClearColor(...arguments)},this.getClearAlpha=function(){return ve.getClearAlpha()},this.setClearAlpha=function(){ve.setClearAlpha(...arguments)},this.clear=function(v=!0,N=!0,X=!0){let z=0;if(v){let V=!1;if(G!==null){let ye=G.texture.format;V=M.has(ye)}if(V){let ye=G.texture.type,Le=p.has(ye),Me=ve.getClearColor(),oe=ve.getClearAlpha(),{r:Ee,g:Ye,b:st}=Me;if(Le)m[0]=Ee,m[1]=Ye,m[2]=st,m[3]=oe,U.clearBufferuiv(U.COLOR,0,m);else b[0]=Ee,b[1]=Ye,b[2]=st,b[3]=oe,U.clearBufferiv(U.COLOR,0,b)}else z|=U.COLOR_BUFFER_BIT}if(N)z|=U.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0);if(X)z|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295);if(z!==0)U.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(v){v.setRenderer(this),I=v},this.dispose=function(){t.removeEventListener("webglcontextlost",D,!1),t.removeEventListener("webglcontextrestored",B,!1),t.removeEventListener("webglcontextcreationerror",W,!1),ve.dispose(),xe.dispose(),ue.dispose(),Ke.dispose(),Je.dispose(),Rt.dispose(),O.dispose(),_.dispose(),ge.dispose(),Te.dispose(),le.dispose(),ze.dispose(),ze.removeEventListener("sessionstart",lt),ze.removeEventListener("sessionend",bt),yt.stop()};function D(v){v.preventDefault(),po("WebGLRenderer: Context Lost."),k=!0}function B(){po("WebGLRenderer: Context Restored."),k=!1;let v=dt.autoReset,N=ie.enabled,X=ie.autoUpdate,z=ie.needsUpdate,V=ie.type;He(),dt.autoReset=v,ie.enabled=N,ie.autoUpdate=X,ie.needsUpdate=z,ie.type=V}function W(v){Fe("WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function F(v){let N=v.target;N.removeEventListener("dispose",F),ae(N)}function ae(v){Ie(v),Je.remove(v)}function Ie(v){let N=Je.get(v).programs;if(N!==void 0){if(N.forEach(function(X){le.releaseProgram(X)}),v.isShaderMaterial)le.releaseShaderCache(v)}}this.renderBufferDirect=function(v,N,X,z,V,ye){if(N===null)N=et;let Le=V.isMesh&&V.matrixWorld.determinantAffine()<0,Me=Di(v,N,X,z,V);we.setMaterial(z,Le);let oe=X.index,Ee=1;if(z.wireframe===!0){if(oe=_.getWireframeAttribute(X),oe===void 0)return;Ee=2}let Ye=X.drawRange,st=X.attributes.position,Ne=Ye.start*Ee,pt=(Ye.start+Ye.count)*Ee;if(ye!==null)Ne=Math.max(Ne,ye.start*Ee),pt=Math.min(pt,(ye.start+ye.count)*Ee);if(oe!==null)Ne=Math.max(Ne,0),pt=Math.min(pt,oe.count);else if(st!==void 0&&st!==null)Ne=Math.max(Ne,0),pt=Math.min(pt,st.count);let qt=pt-Ne;if(qt<0||qt===1/0)return;ge.setup(V,z,Me,X,oe);let Pt,Ct=j;if(oe!==null)Pt=E.get(oe),Ct=Y,Ct.setIndex(Pt);if(V.isMesh)if(z.wireframe===!0)we.setLineWidth(z.wireframeLinewidth*gt()),Ct.setMode(U.LINES);else Ct.setMode(U.TRIANGLES);else if(V.isLine){let pi=z.linewidth;if(pi===void 0)pi=1;if(we.setLineWidth(pi*gt()),V.isLineSegments)Ct.setMode(U.LINES);else if(V.isLineLoop)Ct.setMode(U.LINE_LOOP);else Ct.setMode(U.LINE_STRIP)}else if(V.isPoints)Ct.setMode(U.POINTS);else if(V.isSprite)Ct.setMode(U.TRIANGLES);if(V.isBatchedMesh)if(!Qe.get("WEBGL_multi_draw")){let{_multiDrawStarts:pi,_multiDrawCounts:Oe,_multiDrawCount:Si}=V,Mt=oe?E.get(oe).bytesPerElement:1,Kr=Je.get(z).currentProgram.getUniforms();for(let mi=0;mi<Si;mi++)Kr.setValue(U,"_gl_DrawID",mi),Ct.render(pi[mi]/Mt,Oe[mi])}else Ct.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else if(V.isInstancedMesh)Ct.renderInstances(Ne,qt,V.count);else if(X.isInstancedBufferGeometry){let pi=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,Oe=Math.min(X.instanceCount,pi);Ct.renderInstances(Ne,qt,Oe)}else Ct.render(Ne,qt)};function xt(v,N,X,z){if(I!==null&&v.isNodeMaterial)I.setObject(z,v);if(_e===!0)Z.setState(v,X,!1);if(v.transparent===!0&&v.side===bi&&v.forceSinglePass===!1)v.side=Lt,v.needsUpdate=!0,Ft(v,N,z),v.side=Hi,v.needsUpdate=!0,Ft(v,N,z),v.side=bi;else Ft(v,N,z)}this.compile=function(v,N,X=null){if(X===null)X=v;if(I!==null)I.renderStart(v,N,X);if(A=ue.get(X),A.init(N),g.push(A),X.traverseVisible(function(V){if(V.isLight&&V.layers.test(N.layers)){if(A.pushLight(V),V.castShadow)A.pushShadow(V)}}),v!==X)v.traverseVisible(function(V){if(V.isLight&&V.layers.test(N.layers)){if(A.pushLight(V),V.castShadow)A.pushShadow(V)}});if(A.setupLights(),I!==null)I.updateLights(A.state.lightsArray);if(be=this.localClippingEnabled,_e=Z.init(this.clippingPlanes,be),_e===!0)Z.setGlobalState(this.clippingPlanes,N);if(I!==null)ie.render(A.state.shadowsArray,X,N);let z=new Set;if(v.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;let ye=V.material;if(ye)if(Array.isArray(ye))for(let Le=0;Le<ye.length;Le++){let Me=ye[Le];xt(Me,X,N,V),z.add(Me)}else xt(ye,X,N,V),z.add(ye)}),A=g.pop(),I!==null)I.renderEnd();return z},this.compileAsync=function(v,N,X=null){let z=this.compile(v,N,X);return new Promise((V)=>{function ye(){if(z.forEach(function(Le){let oe=Je.get(Le).currentProgram;if(oe===void 0||oe.isReady())z.delete(Le)}),z.size===0){V(v);return}setTimeout(ye,10)}if(Qe.get("KHR_parallel_shader_compile")!==null)ye();else setTimeout(ye,10)})};let ct=null;function ht(v){if(ct)ct(v)}function lt(){yt.stop()}function bt(){yt.start()}let yt=new ul;if(yt.setAnimationLoop(ht),typeof self<"u")yt.setContext(self);this.setAnimationLoop=function(v){ct=v,ze.setAnimationLoop(v),v===null?yt.stop():yt.start()},ze.addEventListener("sessionstart",lt),ze.addEventListener("sessionend",bt),this.render=function(v,N){if(N!==void 0&&N.isCamera!==!0){Fe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(k===!0)return;if(I!==null)I.renderStart(v,N);let X=ze.enabled===!0&&ze.isPresenting===!0,z=y!==null&&(G===null||X)&&y.begin(P,G);if(v.matrixWorldAutoUpdate===!0)v.updateMatrixWorld();if(N.parent===null&&N.matrixWorldAutoUpdate===!0)N.updateMatrixWorld();if(ze.enabled===!0&&ze.isPresenting===!0&&(y===null||y.isCompositing()===!1)){if(ze.cameraAutoUpdate===!0)ze.updateCamera(N);N=ze.getCamera()}if(v.isScene===!0)v.onBeforeRender(P,v,N,G);if(A=ue.get(v,g.length),A.init(N),A.state.textureUnits=Ke.getTextureUnits(),g.push(A),Re.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),N.isArrayCamera)me.setFromArrayCamera(N);else se.setFromProjectionMatrix(Re,oi,N.reversedDepth);if(be=this.localClippingEnabled,_e=Z.init(this.clippingPlanes,be),S=xe.get(v,C.length),S.init(),C.push(S),this.info.render.frame++,ze.enabled===!0&&ze.isPresenting===!0){let Le=P.xr.getDepthSensingMesh();if(Le!==null)kt(Le,N,-1/0,P.sortObjects)}if(kt(v,N,0,P.sortObjects),S.finish(),I!==null)I.updateLights(A.state.lightsArray);if(P.sortObjects===!0)S.sort(Ae,ft);if(ot=ze.enabled===!1||ze.isPresenting===!1||ze.hasDepthSensing()===!1,ot)ve.addToRenderList(S,v);if(this.info.autoReset===!0)this.info.reset();if(_e===!0)Z.beginShadows();let V=A.state.shadowsArray;if(ie.render(V,v,N),_e===!0)Z.endShadows();if((z&&y.hasRenderPass())===!1){let Le=S.opaque,Me=S.transmissive;if(A.setupLights(),N.isArrayCamera){let oe=N.cameras;if(Me.length>0)for(let Ee=0,Ye=oe.length;Ee<Ye;Ee++){let st=oe[Ee];ci(Le,Me,v,st)}if(ot)ve.render(v);for(let Ee=0,Ye=oe.length;Ee<Ye;Ee++){let st=oe[Ee];Jt(S,v,st,st.viewport)}}else{if(Me.length>0)ci(Le,Me,v,N);if(ot)ve.render(v);Jt(S,v,N)}}if(G!==null&&te===0)Ke.updateMultisampleRenderTarget(G),Ke.updateRenderTargetMipmap(G);if(z)y.end(P);if(v.isScene===!0)v.onAfterRender(P,v,N);if(ge.resetDefaultState(),pe=-1,Q=null,g.pop(),g.length>0){if(A=g[g.length-1],Ke.setTextureUnits(A.state.textureUnits),_e===!0)Z.setGlobalState(P.clippingPlanes,A.state.camera)}else A=null;if(C.pop(),C.length>0)S=C[C.length-1];else S=null;if(I!==null)I.renderEnd()};function kt(v,N,X,z){if(v.visible===!1)return;if(v.layers.test(N.layers)){if(v.isGroup)X=v.renderOrder;else if(v.isLOD){if(v.autoUpdate===!0)v.update(N)}else if(v.isLight){if(A.pushLight(v),v.castShadow)A.pushShadow(v)}else if(v.isSprite){let Le=N.isArrayCamera?me:se;if(!v.frustumCulled||v.intersectsFrustum(Le)){if(z)Ge.setFromMatrixPosition(v.matrixWorld).applyMatrix4(Re);let Me=O.update(v),oe=v.material;if(oe.visible)S.push(v,Me,oe,X,Ge.z,null,N)}}else if(v.isMesh||v.isLine||v.isPoints){let Le=N.isArrayCamera?me:se;if(!v.frustumCulled||v.intersectsFrustum(Le)){let Me=O.update(v),oe=v.material;if(z){if(v.boundingSphere!==void 0){if(v.boundingSphere===null)v.computeBoundingSphere();Ge.copy(v.boundingSphere.center)}else{if(Me.boundingSphere===null)Me.computeBoundingSphere();Ge.copy(Me.boundingSphere.center)}Ge.applyMatrix4(v.matrixWorld).applyMatrix4(Re)}if(Array.isArray(oe)){let Ee=Me.groups;for(let Ye=0,st=Ee.length;Ye<st;Ye++){let Ne=Ee[Ye],pt=oe[Ne.materialIndex];if(pt&&pt.visible)S.push(v,Me,pt,X,Ge.z,Ne,N)}}else if(oe.visible)S.push(v,Me,oe,X,Ge.z,null,N)}}}let ye=v.children;for(let Le=0,Me=ye.length;Le<Me;Le++)kt(ye[Le],N,X,z)}function Jt(v,N,X,z){let{opaque:V,transmissive:ye,transparent:Le}=v;if(A.setupLightsView(X),_e===!0)Z.setGlobalState(P.clippingPlanes,X);if(z)we.viewport(ee.copy(z));if(V.length>0)Ci(V,N,X);if(ye.length>0)Ci(ye,N,X);if(Le.length>0)Ci(Le,N,X);we.buffers.depth.setTest(!0),we.buffers.depth.setMask(!0),we.buffers.color.setMask(!0),we.setPolygonOffset(!1)}function ci(v,N,X,z){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[z.id]===void 0){let Ne=Qe.has("EXT_color_buffer_half_float")||Qe.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[z.id]=new Tt(1,1,{generateMipmaps:!0,type:Ne?wt:Ht,minFilter:Ti,samples:Math.max(4,At.samples),stencilBuffer:n,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:tt.workingColorSpace})}let ye=A.state.transmissionRenderTarget[z.id],Le=z.viewport||ee;ye.setSize(Le.z*P.transmissionResolutionScale,Le.w*P.transmissionResolutionScale);let Me=P.getRenderTarget(),oe=P.getActiveCubeFace(),Ee=P.getActiveMipmapLevel();if(P.setRenderTarget(ye),P.getClearColor(q),he=P.getClearAlpha(),he<1)P.setClearColor(16777215,0.5);if(P.clear(),ot)ve.render(X);let Ye=P.toneMapping;P.toneMapping=Ni;let st=z.viewport;if(z.viewport!==void 0)z.viewport=void 0;if(A.setupLightsView(z),_e===!0)Z.setGlobalState(P.clippingPlanes,z);if(Ci(v,X,z),Ke.updateMultisampleRenderTarget(ye),Ke.updateRenderTargetMipmap(ye),Qe.has("WEBGL_multisampled_render_to_texture")===!1){let Ne=!1;for(let pt=0,qt=N.length;pt<qt;pt++){let Pt=N[pt],{object:Ct,geometry:pi,material:Oe,group:Si}=Pt;if(Oe.side===bi&&Ct.layers.test(z.layers)){let Mt=Oe.side;Oe.side=Lt,Oe.needsUpdate=!0,di(Ct,X,z,pi,Oe,Si),Oe.side=Mt,Oe.needsUpdate=!0,Ne=!0}}if(Ne===!0)Ke.updateMultisampleRenderTarget(ye),Ke.updateRenderTargetMipmap(ye)}if(P.setRenderTarget(Me,oe,Ee),P.setClearColor(q,he),st!==void 0)z.viewport=st;P.toneMapping=Ye}function Ci(v,N,X){let z=N.isScene===!0?N.overrideMaterial:null;for(let V=0,ye=v.length;V<ye;V++){let Le=v[V],{object:Me,geometry:oe,group:Ee}=Le,Ye=Le.material;if(Ye.allowOverride===!0&&z!==null)Ye=z;if(Me.layers.test(X.layers))di(Me,N,X,oe,Ye,Ee)}}function di(v,N,X,z,V,ye){if(I!==null&&V.isNodeMaterial)I.setObject(v,V);if(v.onBeforeRender(P,N,X,z,V,ye),v.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),V.onBeforeRender(P,N,X,z,v,ye),V.transparent===!0&&V.side===bi&&V.forceSinglePass===!1)V.side=Lt,V.needsUpdate=!0,P.renderBufferDirect(X,N,z,V,v,ye),V.side=Hi,V.needsUpdate=!0,P.renderBufferDirect(X,N,z,V,v,ye),V.side=bi;else P.renderBufferDirect(X,N,z,V,v,ye);v.onAfterRender(P,N,X,z,V,ye)}function cr(v){let N=0;for(let X of v)if(X.texture!==null)N++;return N}function Ft(v,N,X){if(N.isScene!==!0)N=et;let z=Je.get(v),V=A.state.lights,ye=A.state.shadowsArray,Le=V.state.version,Me=le.getParameters(v,V.state,ye,N,X,A.state.lightProbeGridArray),oe=le.getProgramCacheKey(Me),Ee=z.programs;z.environment=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?N.environment:null,z.fog=N.fog;let Ye=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap;if(z.envMap=Rt.get(v.envMap||z.environment,Ye),z.envMapRotation=z.environment!==null&&v.envMap===null?N.environmentRotation:v.envMapRotation,Ee===void 0)v.addEventListener("dispose",F),Ee=new Map,z.programs=Ee,z.programVariants=new Map;let st=Ee.get(oe);if(st!==void 0){if(z.currentProgram===st&&z.lightsStateVersion===Le)return ri(v,Me),st}else{if(Me.uniforms=le.getUniforms(v),I!==null&&v.isNodeMaterial)I.build(v,X,Me);v.onBeforeCompile(Me,P),st=le.acquireProgram(Me,oe),Ee.set(oe,st),z.uniforms=Me.uniforms}let Ne=z.uniforms;if(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)Ne.clippingPlanes=Z.uniform;if(ri(v,Me),z.needsLights=ur(v),z.lightsStateVersion=Le,z.needsLights)Ne.ambientLightColor.value=V.state.ambient,Ne.lightProbe.value=V.state.probe,Ne.sunLights.value=V.state.sun,Ne.sunLightShadows.value=V.state.sunShadow,Ne.directionalLights.value=V.state.directional,Ne.directionalLightShadows.value=V.state.directionalShadow,Ne.spotLights.value=V.state.spot,Ne.spotLightShadows.value=V.state.spotShadow,Ne.rectAreaLights.value=V.state.rectArea,Ne.ltc_1.value=V.state.rectAreaLTC1,Ne.ltc_2.value=V.state.rectAreaLTC2,Ne.pointLights.value=V.state.point,Ne.pointLightShadows.value=V.state.pointShadow,Ne.hemisphereLights.value=V.state.hemi,Ne.sunShadowMatrix.value=V.state.sunShadowMatrix,Ne.sunShadowCascade.value=V.state.sunShadowCascade,Ne.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Ne.spotLightMatrix.value=V.state.spotLightMatrix,Ne.spotLightMap.value=V.state.spotLightMap,Ne.pointShadowMatrix.value=V.state.pointShadowMatrix;return z.numLightProbeGrids=cr(A.state.lightProbeGridArray),z.currentProgram=st,z.uniformsList=null,st}function ii(v,N,X,z,V){let ye=Je.get(v),Le=ye.currentProgram.id+","+z+","+V,Me=ye.programVariants.get(Le);if(Me===void 0)Me=Ft(v,N,X),ye.programVariants.set(Le,Me);else ye.currentProgram=Me,ye.uniformsList=null,ye.outputColorSpace=z,ye.toneMapping=V;return Me}function hr(v){if(v.uniformsList===null){let N=v.currentProgram.getUniforms();v.uniformsList=Rn.seqWithValue(N.seq,v.uniforms)}return v.uniformsList}function ri(v,N){let X=Je.get(v);X.outputColorSpace=N.outputColorSpace,X.batching=N.batching,X.batchingColor=N.batchingColor,X.instancing=N.instancing,X.instancingColor=N.instancingColor,X.instancingMorph=N.instancingMorph,X.skinning=N.skinning,X.morphTargets=N.morphTargets,X.morphNormals=N.morphNormals,X.morphColors=N.morphColors,X.morphTargetsCount=N.morphTargetsCount,X.numClippingPlanes=N.numClippingPlanes,X.numIntersection=N.numClipIntersection,X.vertexAlphas=N.vertexAlphas,X.vertexTangents=N.vertexTangents,X.toneMapping=N.toneMapping}function Di(v,N,X,z,V){if(N.isScene!==!0)N=et;Ke.resetTextureUnits();let ye=N.fog,Le=z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial?N.environment:null,Me=G===null?P.outputColorSpace:G.isXRRenderTarget===!0?G.texture.colorSpace:tt.workingColorSpace,oe=z.isMeshStandardMaterial||z.isMeshLambertMaterial&&!z.envMap||z.isMeshPhongMaterial&&!z.envMap,Ee=Rt.get(z.envMap||Le,oe),Ye=z.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,st=!!X.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),Ne=!!X.morphAttributes.position,pt=!!X.morphAttributes.normal,qt=!!X.morphAttributes.color,Pt=Ni;if(z.toneMapped){if(G===null||G.isXRRenderTarget===!0)Pt=P.toneMapping}let Ct=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,pi=Ct!==void 0?Ct.length:0,Oe=Je.get(z),Si=A.state.lights;if(_e===!0){if(be===!0||v!==Q){let Bt=v===Q&&z.id===pe;Z.setState(z,v,Bt)}}let Mt=!1,Kr=!1;if(z.version===Oe.__version){if(Oe.needsLights&&Oe.lightsStateVersion!==Si.state.version)Mt=!0;else if(V.isBatchedMesh&&Oe.batching===!1)Mt=!0;else if(!V.isBatchedMesh&&Oe.batching===!0)Mt=!0;else if(V.isBatchedMesh&&Oe.batchingColor===!0&&V._colorsTexture===null)Mt=!0;else if(V.isBatchedMesh&&Oe.batchingColor===!1&&V._colorsTexture!==null)Mt=!0;else if(V.isInstancedMesh&&Oe.instancing===!1)Mt=!0;else if(!V.isInstancedMesh&&Oe.instancing===!0)Mt=!0;else if(V.isSkinnedMesh&&Oe.skinning===!1)Mt=!0;else if(!V.isSkinnedMesh&&Oe.skinning===!0)Mt=!0;else if(V.isInstancedMesh&&Oe.instancingColor===!0&&V.instanceColor===null)Mt=!0;else if(V.isInstancedMesh&&Oe.instancingColor===!1&&V.instanceColor!==null)Mt=!0;else if(V.isInstancedMesh&&Oe.instancingMorph===!0&&V.morphTexture===null)Mt=!0;else if(V.isInstancedMesh&&Oe.instancingMorph===!1&&V.morphTexture!==null)Mt=!0;else if(Oe.envMap!==Ee)Mt=!0;else if(z.fog===!0&&Oe.fog!==ye)Mt=!0;else if(Oe.numClippingPlanes!==void 0&&(Oe.numClippingPlanes!==Z.numPlanes||Oe.numIntersection!==Z.numIntersection))Mt=!0;else if(Oe.vertexAlphas!==Ye)Mt=!0;else if(Oe.vertexTangents!==st)Mt=!0;else if(Oe.morphTargets!==Ne)Mt=!0;else if(Oe.morphNormals!==pt)Mt=!0;else if(Oe.morphColors!==qt)Mt=!0;else if(Oe.morphTargetsCount!==pi)Mt=!0;else if(Oe.numLightProbeGrids!==cr(A.state.lightProbeGridArray))Mt=!0;else if(Oe.outputColorSpace!==Me||Oe.toneMapping!==Pt)Kr=!0}else Mt=!0,Oe.__version=z.version;let mi=Oe.currentProgram;if(Mt===!0||Kr===!0){if(mi=Kr===!0?ii(z,N,V,Me,Pt):Ft(z,N,V),I&&z.isNodeMaterial)I.onUpdateProgram(z,mi,Oe)}let ea=!1,Lr=!1,Qr=!1,_t=mi.getUniforms(),hi=Oe.uniforms;if(we.useProgram(mi.program))ea=!0,Lr=!0,Qr=!0;if(z.id!==pe)pe=z.id,Lr=!0;if(ea||Q!==v){if(we.buffers.depth.getReversed()&&v.reversedDepth!==!0)v._reversedDepth=!0,v.updateProjectionMatrix();_t.setValue(U,"projectionMatrix",v.projectionMatrix),_t.setValue(U,"viewMatrix",v.matrixWorldInverse);let ni=_t.map.cameraPosition;if(ni!==void 0)ni.setValue(U,Ve.setFromMatrixPosition(v.matrixWorld));if(At.logarithmicDepthBuffer)_t.setValue(U,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2));if(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)_t.setValue(U,"isOrthographic",v.isOrthographicCamera===!0);if(Q!==v)Q=v,Lr=!0,Qr=!0}if(Oe.needsLights){if(Si.state.sunShadowMap.length>0)_t.setValue(U,"sunShadowMap",Si.state.sunShadowMap,Ke);if(Si.state.directionalShadowMap.length>0)_t.setValue(U,"directionalShadowMap",Si.state.directionalShadowMap,Ke);if(Si.state.spotShadowMap.length>0)_t.setValue(U,"spotShadowMap",Si.state.spotShadowMap,Ke);if(Si.state.pointShadowMap.length>0)_t.setValue(U,"pointShadowMap",Si.state.pointShadowMap,Ke)}if(V.isSkinnedMesh){_t.setOptional(U,V,"bindMatrix"),_t.setOptional(U,V,"bindMatrixInverse");let Bt=V.skeleton;if(Bt){if(Bt.boneTexture===null)Bt.computeBoneTexture();_t.setValue(U,"boneTexture",Bt.boneTexture,Ke)}}if(V.isBatchedMesh){if(_t.setOptional(U,V,"batchingTexture"),_t.setValue(U,"batchingTexture",V._matricesTexture,Ke),_t.setOptional(U,V,"batchingIdTexture"),_t.setValue(U,"batchingIdTexture",V._indirectTexture,Ke),_t.setOptional(U,V,"batchingColorTexture"),V._colorsTexture!==null)_t.setValue(U,"batchingColorTexture",V._colorsTexture,Ke)}let er=X.morphAttributes;if(er.position!==void 0||er.normal!==void 0||er.color!==void 0)L.update(V,X,mi);if(Lr||Oe.receiveShadow!==V.receiveShadow)Oe.receiveShadow=V.receiveShadow,_t.setValue(U,"receiveShadow",V.receiveShadow);if((z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial)&&z.envMap===null&&N.environment!==null)hi.envMapIntensity.value=N.environmentIntensity;if(hi.dfgLUT!==void 0)hi.dfgLUT.value=om();if(Lr){if(_t.setValue(U,"toneMappingExposure",P.toneMappingExposure),Oe.needsLights)In(hi,Qr);if(ye&&z.fog===!0)ne.refreshFogUniforms(hi,ye);if(ne.refreshMaterialUniforms(hi,z,qe,Pe,A.state.transmissionRenderTarget[v.id]),Oe.needsLights&&Oe.numLightProbeGrids>0){let Bt=T,ni=0;for(let vr of A.state.lightProbeGridArray){if(vr.texture===null)continue;Bt.textures[ni]=vr.texture,Bt.min[ni]=vr.boundingBox.min,Bt.max[ni]=vr.boundingBox.max,Bt.resolution[ni]=vr.resolution,ni++}for(let vr in Bt)Bt[vr].length=ni;hi.probesSH.value=Bt.textures,hi.probesMin.value=Bt.min,hi.probesMax.value=Bt.max,hi.probesResolution.value=Bt.resolution}Rn.upload(U,hr(Oe),hi,Ke)}if(z.isShaderMaterial&&z.uniformsNeedUpdate===!0)Rn.upload(U,hr(Oe),hi,Ke),z.uniformsNeedUpdate=!1;if(z.isSpriteMaterial)_t.setValue(U,"center",V.center);if(_t.setValue(U,"modelViewMatrix",V.modelViewMatrix),_t.setValue(U,"normalMatrix",V.normalMatrix),_t.setValue(U,"modelMatrix",V.matrixWorld),z.uniformsGroups!==void 0){let Bt=z.uniformsGroups;for(let ni=0,vr=Bt.length;ni<vr;ni++){let Uc=Bt[ni];Te.update(Uc,mi),Te.bind(Uc,mi)}}return mi}function In(v,N){v.ambientLightColor.needsUpdate=N,v.lightProbe.needsUpdate=N,v.sunLights.needsUpdate=N,v.sunLightShadows.needsUpdate=N,v.directionalLights.needsUpdate=N,v.directionalLightShadows.needsUpdate=N,v.pointLights.needsUpdate=N,v.pointLightShadows.needsUpdate=N,v.spotLights.needsUpdate=N,v.spotLightShadows.needsUpdate=N,v.rectAreaLights.needsUpdate=N,v.hemisphereLights.needsUpdate=N}function ur(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return J},this.getActiveMipmapLevel=function(){return te},this.getRenderTarget=function(){return G},this.setRenderTargetTextures=function(v,N,X){let z=Je.get(v);if(z.__autoAllocateDepthBuffer=v.resolveDepthBuffer===!1,z.__autoAllocateDepthBuffer===!1)z.__useRenderToTexture=!1;Je.get(v.texture).__webglTexture=N,Je.get(v.depthTexture).__webglTexture=z.__autoAllocateDepthBuffer?void 0:X,z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(v,N){let X=Je.get(v);X.__webglFramebuffer=N,X.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(v,N=0,X=0){G=v,J=N,te=X;let z=null,V=!1,ye=!1;if(v){let Me=Je.get(v);if(Me.__useDefaultFramebuffer!==void 0){we.bindFramebuffer(U.FRAMEBUFFER,Me.__webglFramebuffer),ee.copy(v.viewport),ce.copy(v.scissor),De=v.scissorTest,we.viewport(ee),we.scissor(ce),we.setScissorTest(De),pe=-1;return}else if(Me.__webglFramebuffer===void 0)Ke.setupRenderTarget(v);else if(Me.__hasExternalTextures)Ke.rebindTextures(v,Je.get(v.texture).__webglTexture,Je.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){let Ye=v.depthTexture;if(Me.__boundDepthTexture!==Ye){if(Ye!==null&&Je.has(Ye)&&(v.width!==Ye.image.width||v.height!==Ye.image.height))throw Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Ke.setupDepthRenderbuffer(v)}}let oe=v.texture;if(oe.isData3DTexture||oe.isDataArrayTexture||oe.isCompressedArrayTexture)ye=!0;let Ee=Je.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget){if(Array.isArray(Ee[N]))z=Ee[N][X];else z=Ee[N];V=!0}else if(v.samples>0&&Ke.useMultisampledRTT(v)===!1)z=Je.get(v).__webglMultisampledFramebuffer;else if(Array.isArray(Ee))z=Ee[X];else z=Ee;ee.copy(v.viewport),ce.copy(v.scissor),De=v.scissorTest}else ee.copy(it).multiplyScalar(qe).floor(),ce.copy(Ze).multiplyScalar(qe).floor(),De=at;if(X!==0)z=H;if(we.bindFramebuffer(U.FRAMEBUFFER,z))we.drawBuffers(v,z);if(we.viewport(ee),we.scissor(ce),we.setScissorTest(De),V){let Me=Je.get(v.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+N,Me.__webglTexture,X)}else if(ye){let Me=N;for(let oe=0;oe<v.textures.length;oe++){let Ee=Je.get(v.textures[oe]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+oe,Ee.__webglTexture,X,Me)}}else if(v!==null&&X!==0){let Me=Je.get(v.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Me.__webglTexture,X)}pe=-1};function Ir(v){let N=Je.get(v);if(N.__readFormat!==v.format||N.__readType!==v.type)N.__readFormat=v.format,N.__readType=v.type,N.__formatReadable=At.textureFormatReadable(v.format),N.__typeReadable=At.textureTypeReadable(v.type);return N}if(this.readRenderTargetPixels=function(v,N,X,z,V,ye,Le,Me=0){if(!(v&&v.isWebGLRenderTarget)){Fe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let oe=Je.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&Le!==void 0){if(oe=oe[Le],Array.isArray(oe))oe=oe[0]}if(oe){we.bindFramebuffer(U.FRAMEBUFFER,oe);try{let Ee=v.textures[Me],{format:Ye,type:st}=Ee;if(v.textures.length>1)U.readBuffer(U.COLOR_ATTACHMENT0+Me);let Ne=Ir(Ee);if(Ne.__formatReadable===!1){Fe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ne.__typeReadable===!1){Fe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}if(N>=0&&N<=v.width-z&&(X>=0&&X<=v.height-V))U.readPixels(N,X,z,V,de.convert(Ye),de.convert(st),ye)}finally{let Ee=G!==null?Je.get(G).__webglFramebuffer:null;we.bindFramebuffer(U.FRAMEBUFFER,Ee)}}},this.readRenderTargetPixelsAsync=async function(v,N,X,z,V,ye,Le,Me=0){if(!(v&&v.isWebGLRenderTarget))throw Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let oe=Je.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&Le!==void 0){if(oe=oe[Le],Array.isArray(oe))oe=oe[0]}if(oe)if(N>=0&&N<=v.width-z&&(X>=0&&X<=v.height-V)){we.bindFramebuffer(U.FRAMEBUFFER,oe);let Ee=v.textures[Me],{format:Ye,type:st}=Ee;if(v.textures.length>1)U.readBuffer(U.COLOR_ATTACHMENT0+Me);let Ne=Ir(Ee);if(Ne.__formatReadable===!1)throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ne.__typeReadable===!1)throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let pt=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,pt),U.bufferData(U.PIXEL_PACK_BUFFER,ye.byteLength,U.STREAM_READ),U.readPixels(N,X,z,V,de.convert(Ye),de.convert(st),0),U.bindBuffer(U.PIXEL_PACK_BUFFER,null);let qt=G!==null?Je.get(G).__webglFramebuffer:null;we.bindFramebuffer(U.FRAMEBUFFER,qt);let Pt=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await gh(U,Pt,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,pt),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,ye),U.bindBuffer(U.PIXEL_PACK_BUFFER,null),U.deleteBuffer(pt),U.deleteSync(Pt),ye}else throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(v,N=null,X=0){let z=Math.pow(2,-X),V=Math.floor(v.image.width*z),ye=Math.floor(v.image.height*z),Le=N!==null?N.x:0,Me=N!==null?N.y:0;Ke.setTexture2D(v,0),U.copyTexSubImage2D(U.TEXTURE_2D,X,0,0,Le,Me,V,ye),we.unbindTexture()},this.copyTextureToTexture=function(v,N,X=null,z=null,V=0,ye=0){let Le,Me,oe,Ee,Ye,st,Ne,pt,qt,Pt=v.isCompressedTexture?v.mipmaps[ye]:v.image;if(X!==null)Le=X.max.x-X.min.x,Me=X.max.y-X.min.y,oe=X.isBox3?X.max.z-X.min.z:1,Ee=X.min.x,Ye=X.min.y,st=X.isBox3?X.min.z:0;else{let _t=Math.pow(2,-V);if(Le=Math.floor(v.width*_t),Me=Math.floor(v.height*_t),v.isDataArrayTexture)oe=Pt.depth;else if(v.isData3DTexture)oe=Math.floor(Pt.depth*_t);else oe=1;Ee=0,Ye=0,st=0}if(z!==null)Ne=z.x,pt=z.y,qt=z.z;else Ne=0,pt=0,qt=0;let Ct=de.convert(N.format),pi=de.convert(N.type),Oe;if(N.isData3DTexture)Ke.setTexture3D(N,0),Oe=U.TEXTURE_3D;else if(N.isDataArrayTexture||N.isCompressedArrayTexture)Ke.setTexture2DArray(N,0),Oe=U.TEXTURE_2D_ARRAY;else Ke.setTexture2D(N,0),Oe=U.TEXTURE_2D;we.activeTexture(U.TEXTURE0),we.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,N.flipY),we.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),we.pixelStorei(U.UNPACK_ALIGNMENT,N.unpackAlignment);let Si=we.getParameter(U.UNPACK_ROW_LENGTH),Mt=we.getParameter(U.UNPACK_IMAGE_HEIGHT),Kr=we.getParameter(U.UNPACK_SKIP_PIXELS),mi=we.getParameter(U.UNPACK_SKIP_ROWS),ea=we.getParameter(U.UNPACK_SKIP_IMAGES);we.pixelStorei(U.UNPACK_ROW_LENGTH,Pt.width),we.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Pt.height),we.pixelStorei(U.UNPACK_SKIP_PIXELS,Ee),we.pixelStorei(U.UNPACK_SKIP_ROWS,Ye),we.pixelStorei(U.UNPACK_SKIP_IMAGES,st);let Lr=v.isDataArrayTexture||v.isData3DTexture,Qr=N.isDataArrayTexture||N.isData3DTexture;if(v.isDepthTexture){let _t=Je.get(v),hi=Je.get(N),er=Je.get(_t.__renderTarget),Bt=Je.get(hi.__renderTarget);we.bindFramebuffer(U.READ_FRAMEBUFFER,er.__webglFramebuffer),we.bindFramebuffer(U.DRAW_FRAMEBUFFER,Bt.__webglFramebuffer);for(let ni=0;ni<oe;ni++){if(Lr)U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Je.get(v).__webglTexture,V,st+ni),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Je.get(N).__webglTexture,ye,qt+ni);U.blitFramebuffer(Ee,Ye,Ee+Le,Ye+Me,Ne,pt,Ne+Le,pt+Me,U.DEPTH_BUFFER_BIT,U.NEAREST)}we.bindFramebuffer(U.READ_FRAMEBUFFER,null),we.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(V!==0||v.isRenderTargetTexture||Je.has(v)){let _t=Je.get(v),hi=Je.get(N);we.bindFramebuffer(U.READ_FRAMEBUFFER,re),we.bindFramebuffer(U.DRAW_FRAMEBUFFER,R);for(let er=0;er<oe;er++){if(Lr)U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,_t.__webglTexture,V,st+er);else U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,_t.__webglTexture,V);if(Qr)U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,hi.__webglTexture,ye,qt+er);else U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,hi.__webglTexture,ye);if(V!==0)U.blitFramebuffer(Ee,Ye,Ee+Le,Ye+Me,Ne,pt,Ne+Le,pt+Me,U.COLOR_BUFFER_BIT,U.NEAREST);else if(Qr)U.copyTexSubImage3D(Oe,ye,Ne,pt,qt+er,Ee,Ye,Le,Me);else U.copyTexSubImage2D(Oe,ye,Ne,pt,Ee,Ye,Le,Me)}we.bindFramebuffer(U.READ_FRAMEBUFFER,null),we.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(Qr)if(v.isDataTexture||v.isData3DTexture)U.texSubImage3D(Oe,ye,Ne,pt,qt,Le,Me,oe,Ct,pi,Pt.data);else if(N.isCompressedArrayTexture)U.compressedTexSubImage3D(Oe,ye,Ne,pt,qt,Pt.width,Pt.height,oe,Ct,Pt.data);else U.texSubImage3D(Oe,ye,Ne,pt,qt,Le,Me,oe,Ct,pi,Pt);else if(v.isDataTexture)U.texSubImage2D(U.TEXTURE_2D,ye,Ne,pt,Le,Me,Ct,pi,Pt.data);else if(v.isCompressedTexture)U.compressedTexSubImage2D(U.TEXTURE_2D,ye,Ne,pt,Pt.width,Pt.height,Ct,Pt.data);else U.texSubImage2D(U.TEXTURE_2D,ye,Ne,pt,Le,Me,Ct,pi,Pt);if(we.pixelStorei(U.UNPACK_ROW_LENGTH,Si),we.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Mt),we.pixelStorei(U.UNPACK_SKIP_PIXELS,Kr),we.pixelStorei(U.UNPACK_SKIP_ROWS,mi),we.pixelStorei(U.UNPACK_SKIP_IMAGES,ea),ye===0&&N.generateMipmaps===!0&&N.mipmapsAutoUpdate===!0)U.generateMipmap(Oe);we.unbindTexture()},this.initRenderTarget=function(v){if(Je.get(v).__webglFramebuffer===void 0)Ke.setupRenderTarget(v)},this.initTexture=function(v){if(v.isCubeTexture)Ke.setTextureCube(v,0);else if(v.isData3DTexture)Ke.setTexture3D(v,0);else if(v.isDataArrayTexture||v.isCompressedArrayTexture)Ke.setTexture2DArray(v,0);else Ke.setTexture2D(v,0);we.unbindTexture()},this.resetState=function(){J=0,te=0,G=null,we.reset(),ge.reset()},typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return oi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=tt._getDrawingBufferColorSpace(e),t.unpackColorSpace=tt._getUnpackColorSpace()}}var Ts={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class ji{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}var G0=new Pr(-1,1,1,-1,0,1);class am extends ke{constructor(){super();this.setAttribute("position",new Be([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Be([0,2,0,0,2,0],2))}}var V0=new am;class Cn{constructor(e){this._mesh=new je(V0,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,G0)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class Cc extends ji{constructor(e,t="tDiffuse"){super();if(this.textureID=t,this.uniforms=null,this.material=null,e instanceof Et)this.uniforms=e.uniforms,this.material=e;else if(e)this.uniforms=Qi.clone(e.uniforms),this.material=new Et({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader});this._fsQuad=new Cn(this.material)}render(e,t,i){if(this.uniforms[this.textureID])this.uniforms[this.textureID].value=i.texture;if(this._fsQuad.material=this.material,this.renderToScreen)e.setRenderTarget(null),this._fsQuad.render(e);else{if(e.setRenderTarget(t),this.clear)e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil);this._fsQuad.render(e)}}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class xl extends ji{constructor(e,t){super();this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){let r=e.getContext(),n=e.state;n.buffers.color.setMask(!1),n.buffers.depth.setMask(!1),n.buffers.color.setLocked(!0),n.buffers.depth.setLocked(!0);let s,o;if(this.inverse)s=0,o=1;else s=1,o=0;if(n.buffers.stencil.setTest(!0),n.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),n.buffers.stencil.setFunc(r.ALWAYS,s,4294967295),n.buffers.stencil.setClear(o),n.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear)e.clear();if(e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear)e.clear();e.render(this.scene,this.camera),n.buffers.color.setLocked(!1),n.buffers.depth.setLocked(!1),n.buffers.color.setMask(!0),n.buffers.depth.setMask(!0),n.buffers.stencil.setLocked(!1),n.buffers.stencil.setFunc(r.EQUAL,1,4294967295),n.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),n.buffers.stencil.setLocked(!0)}}class Pc extends ji{constructor(){super();this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class Ic{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let i=e.getSize(new K);this._width=i.width,this._height=i.height,t=new Tt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:wt}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Cc(Ts),this.copyPass.material.blending=Wi,this.timer=new Zo}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);if(t!==-1)this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){if(this.timer.update(),e===void 0)e=this.timer.getDelta();let t=this.renderer.getRenderTarget(),i=!1;for(let r=0,n=this.passes.length;r<n;r++){let s=this.passes[r];if(s.enabled===!1)continue;if(s.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),s.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),s.needsSwap){if(i){let o=this.renderer.getContext(),a=this.renderer.state.buffers.stencil;a.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),a.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}if(xl!==void 0){if(s instanceof xl)i=!0;else if(s instanceof Pc)i=!1}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new K);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let i=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(i,r),this.renderTarget2.setSize(i,r);for(let n=0;n<this.passes.length;n++)this.passes[n].setSize(i,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Lc extends ji{constructor(e,t,i=null,r=null,n=null){super();this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=r,this.clearAlpha=n,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new fe}render(e,t,i){let r=e.autoClear;e.autoClear=!1;let n,s;if(this.overrideMaterial!==null)s=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial;if(this.clearColor!==null)e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha());if(this.clearAlpha!==null)n=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha);if(this.clearDepth==!0)e.clearDepth();if(e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0)e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil);if(e.render(this.scene,this.camera),this.clearColor!==null)e.setClearColor(this._oldClearColor);if(this.clearAlpha!==null)e.setClearAlpha(n);if(this.overrideMaterial!==null)this.scene.overrideMaterial=s;e.autoClear=r}}var lm={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new fe(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class Pn extends ji{constructor(e,t=1,i,r){super();this.strength=t,this.radius=i,this.threshold=r,this.resolution=e!==void 0?new K(e.x,e.y):new K(256,256),this.clearColor=new fe(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let n=Math.round(this.resolution.x/2),s=Math.round(this.resolution.y/2);this.renderTargetBright=new Tt(n,s,{type:wt,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let c=0;c<this.nMips;c++){let f=new Tt(n,s,{type:wt,depthBuffer:!1});f.texture.name="UnrealBloomPass.h"+c,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);let u=new Tt(n,s,{type:wt,depthBuffer:!1});u.texture.name="UnrealBloomPass.v"+c,u.texture.generateMipmaps=!1,this.renderTargetsVertical.push(u),n=Math.round(n/2),s=Math.round(s/2)}let o=lm;this.highPassUniforms=Qi.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=r,this.highPassUniforms.smoothWidth.value=0.01,this.materialHighPassFilter=new Et({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let a=[6,10,14,18,22];n=Math.round(this.resolution.x/2),s=Math.round(this.resolution.y/2);for(let c=0;c<this.nMips;c++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(a[c])),this.separableBlurMaterials[c].uniforms.invSize.value=new K(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=0.1;let l=[1,0.8,0.6,0.4,0.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new w(1,1,1),new w(1,1,1),new w(1,1,1),new w(1,1,1),new w(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Qi.clone(Ts.uniforms),this.blendMaterial=new Et({uniforms:this.copyUniforms,vertexShader:Ts.vertexShader,fragmentShader:Ts.fragmentShader,premultipliedAlpha:!0,blending:jr,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new fe,this._oldClearAlpha=1,this._basic=new Xt,this._fsQuad=new Cn(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),r=Math.round(t/2);this.renderTargetBright.setSize(i,r);for(let n=0;n<this.nMips;n++)this.renderTargetsHorizontal[n].setSize(i,r),this.renderTargetsVertical[n].setSize(i,r),this.separableBlurMaterials[n].uniforms.invSize.value=new K(1/i,1/r),i=Math.round(i/2),r=Math.round(r/2)}render(e,t,i,r,n){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();let s=e.autoClear;if(e.autoClear=!1,e.setClearColor(this.clearColor,0),n)e.state.buffers.stencil.setTest(!1);if(this.renderToScreen)this._fsQuad.material=this._basic,this._basic.map=i.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e);this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let o=this.renderTargetBright;for(let a=0;a<this.nMips;a++)this._fsQuad.material=this.separableBlurMaterials[a],this.separableBlurMaterials[a].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[a].uniforms.direction.value=Pn.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[a]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[a].uniforms.colorTexture.value=this.renderTargetsHorizontal[a].texture,this.separableBlurMaterials[a].uniforms.direction.value=Pn.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[a]),e.clear(),this._fsQuad.render(e),o=this.renderTargetsVertical[a];if(this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,n)e.state.buffers.stencil.setTest(!0);if(this.renderToScreen)e.setRenderTarget(null),this._fsQuad.render(e);else e.setRenderTarget(i),this._fsQuad.render(e);e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=s}_getSeparableBlurMaterial(e){let t=[],i=e/3;for(let s=0;s<e;s++)t.push(0.39894*Math.exp(-0.5*s*s/(i*i))/i);let r=[],n=[];for(let s=1;s<e;s+=2){let o=t[s],a=s+1<e?t[s+1]:0,l=o+a;r.push((s*o+(s+1)*a)/l),n.push(l)}return new Et({defines:{KERNEL_PAIRS:r.length},uniforms:{colorTexture:{value:null},invSize:{value:new K(0.5,0.5)},direction:{value:new K(0.5,0.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:r},gaussianWeights:{value:n}},vertexShader:`

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

				}`})}_getCompositeMaterial(e){return new Et({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

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

				}`})}}Pn.BlurDirectionX=new K(1,0);Pn.BlurDirectionY=new K(0,1);var $o={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class Dc extends ji{constructor(){super();this.isOutputPass=!0,this.uniforms=Qi.clone($o.uniforms),this.material=new Tn({name:$o.name,uniforms:this.uniforms,vertexShader:$o.vertexShader,fragmentShader:$o.fragmentShader}),this._fsQuad=new Cn(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,i){if(this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping){if(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},tt.getTransfer(this._outputColorSpace)===ut)this.material.defines.SRGB_TRANSFER="";if(this._toneMapping===Dn)this.material.defines.LINEAR_TONE_MAPPING="";else if(this._toneMapping===Nn)this.material.defines.REINHARD_TONE_MAPPING="";else if(this._toneMapping===Un)this.material.defines.CINEON_TONE_MAPPING="";else if(this._toneMapping===Fr)this.material.defines.ACES_FILMIC_TONE_MAPPING="";else if(this._toneMapping===Bn)this.material.defines.AGX_TONE_MAPPING="";else if(this._toneMapping===On)this.material.defines.NEUTRAL_TONE_MAPPING="";else if(this._toneMapping===Fn)this.material.defines.CUSTOM_TONE_MAPPING="";this.material.needsUpdate=!0}if(this.renderToScreen===!0)e.setRenderTarget(null),this._fsQuad.render(e);else{if(e.setRenderTarget(t),this.clear)e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil);this._fsQuad.render(e)}}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class Nc extends dn{constructor(){super();this.name="RoomEnvironment",this.position.y=-3.5;let e=new Li;e.deleteAttribute("uv");let t=new Ai({side:Lt}),i=new Ai,r=new Cr(16777215,900,28,2);r.position.set(0.418,16.199,0.3),this.add(r);let n=new je(e,t);n.position.set(-0.757,13.219,0.717),n.scale.set(31.713,28.305,28.591),this.add(n);let s=new Eo(e,i,6),o=new rt;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-0.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),s.setMatrixAt(0,o.matrix),o.position.set(-5.607,-0.754,-0.758),o.rotation.set(0,0.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),s.setMatrixAt(1,o.matrix),o.position.set(6.167,0.857,7.803),o.rotation.set(0,0.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),s.setMatrixAt(2,o.matrix),o.position.set(-2.017,0.018,6.124),o.rotation.set(0,0.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),s.setMatrixAt(3,o.matrix),o.position.set(2.291,-0.756,-2.621),o.rotation.set(0,-0.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),s.setMatrixAt(4,o.matrix),o.position.set(-2.193,-0.369,-5.547),o.rotation.set(0,0.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),s.setMatrixAt(5,o.matrix),this.add(s);let a=new je(e,Es(50));a.position.set(-16.116,14.37,8.208),a.scale.set(0.1,2.428,2.739),this.add(a);let l=new je(e,Es(50));l.position.set(-16.109,18.021,-8.207),l.scale.set(0.1,2.425,2.751),this.add(l);let c=new je(e,Es(17));c.position.set(14.904,12.198,-1.832),c.scale.set(0.15,4.265,6.331),this.add(c);let f=new je(e,Es(43));f.position.set(-0.462,8.89,14.52),f.scale.set(4.38,5.441,0.088),this.add(f);let u=new je(e,Es(20));u.position.set(3.235,11.486,-12.541),u.scale.set(2.5,2,0.1),this.add(u);let h=new je(e,Es(100));h.position.set(0,20,0),h.scale.set(1,0.1,1),this.add(h)}dispose(){let e=new Set;this.traverse((t)=>{if(t.isMesh)e.add(t.geometry),e.add(t.material)});for(let t of e)t.dispose()}}function Es(e){return new Go({color:0,emissive:16777215,emissiveIntensity:e})}class jo extends je{constructor(e,t={}){super(e);this.isReflector=!0,this.type="Reflector",this.forceUpdate=!1,this._reflectionCameras=new WeakMap;let i=this,r=t.color!==void 0?new fe(t.color):new fe(8355711),n=t.textureWidth||512,s=t.textureHeight||512,o=t.clipBias||0,a=t.shader||jo.ReflectorShader,l=t.multisample!==void 0?t.multisample:4,c=new wi,f=new w,u=new w,h=new w,d=new Xe,x=new w(0,0,-1),M=new mt,p=new w,m=new w,b=new mt,T=new Xe,S=new Tt(n,s,{samples:l,type:wt}),A=new Et({name:a.name!==void 0?a.name:"unspecified",uniforms:Qi.clone(a.uniforms),fragmentShader:a.fragmentShader,vertexShader:a.vertexShader});A.uniforms.tDiffuse.value=S.texture,A.uniforms.color.value=r,A.uniforms.textureMatrix.value=T,this.material=A,this.onBeforeRender=function(C,g,y){let P=this.getReflectionCamera(y);if(u.setFromMatrixPosition(i.matrixWorld),h.setFromMatrixPosition(y.matrixWorld),d.extractRotation(i.matrixWorld),f.set(0,0,1),f.applyMatrix4(d),p.subVectors(u,h),p.dot(f)>0===!0&&this.forceUpdate===!1)return;p.reflect(f).negate(),p.add(u),d.extractRotation(y.matrixWorld),x.set(0,0,-1),x.applyMatrix4(d),x.add(h),m.subVectors(u,x),m.reflect(f).negate(),m.add(u),P.position.copy(p),P.up.set(0,1,0),P.up.applyMatrix4(d),P.up.reflect(f),P.lookAt(m),P.far=y.far,P.updateMatrixWorld(),P.projectionMatrix.copy(y.projectionMatrix),P.projectionMatrix.elements[8]*=-1,P.projectionMatrix.elements[12]*=-1,T.set(0.5,0,0,0.5,0,0.5,0,0.5,0,0,0.5,0.5,0,0,0,1),T.multiply(P.projectionMatrix),T.multiply(P.matrixWorldInverse),T.multiply(i.matrixWorld),c.setFromNormalAndCoplanarPoint(f,u),c.applyMatrix4(P.matrixWorldInverse),M.set(c.normal.x,c.normal.y,c.normal.z,c.constant);let I=P.projectionMatrix;if(P.isOrthographicCamera)b.x=(Math.sign(M.x)+I.elements[8])/I.elements[0],b.y=(Math.sign(M.y)+I.elements[9])/I.elements[5],b.z=-y.far,b.w=1;else b.x=(Math.sign(M.x)+I.elements[8])/I.elements[0],b.y=(Math.sign(M.y)+I.elements[9])/I.elements[5],b.z=-1,b.w=(1+I.elements[10])/I.elements[14];if(M.multiplyScalar(2/M.dot(b)),I.elements[2]=M.x,I.elements[6]=M.y,P.isOrthographicCamera)I.elements[10]=M.z-o,I.elements[14]=M.w-1;else I.elements[10]=M.z+1-o,I.elements[14]=M.w;i.visible=!1;let H=C.getRenderTarget(),re=C.xr.enabled,R=C.shadowMap.autoUpdate;if(C.xr.enabled=!1,C.shadowMap.autoUpdate=!1,C.setRenderTarget(S),C.state.buffers.depth.setMask(!0),C.autoClear===!1)C.clear();C.render(g,P),C.xr.enabled=re,C.shadowMap.autoUpdate=R,C.setRenderTarget(H);let J=y.viewport;if(J!==void 0)C.state.viewport(J);i.visible=!0,this.forceUpdate=!1},this.getRenderTarget=function(){return S},this.dispose=function(){S.dispose(),i.material.dispose()},this.getReflectionCamera=function(C){let g=this._reflectionCameras.get(C);if(g===void 0)g=C.clone(),this._reflectionCameras.set(C,g);return g}}}jo.ReflectorShader={name:"ReflectorShader",uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null}},vertexShader:`
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

		}`};(function(){let e=document.documentElement,t=document.getElementById("hall"),i=document.getElementById("hallCv");if(!t||!i)return;let r=(s)=>{try{console.warn("hall",s)}catch(o){}e.classList.remove("hallon"),window.__hall=null};try{n()}catch(s){r(s)}function n(){let s=matchMedia("(pointer: coarse)").matches,o=/[?&]lite=1/.test(location.search),a=matchMedia("(prefers-reduced-motion: reduce)").matches,l=document.body,c=(D)=>document.getElementById(D),f=new gl({canvas:i,antialias:!s&&!o,powerPreference:"high-performance"});f.toneMapping=Fr,f.toneMappingExposure=1.25;let u=new dn;(function(){let D=document.createElement("canvas");D.width=16,D.height=512;let B=D.getContext("2d"),W=B.createLinearGradient(0,0,0,512);W.addColorStop(0,"#05030d"),W.addColorStop(0.55,"#1d0b33"),W.addColorStop(0.72,"#4a1560"),W.addColorStop(1,"#10081c"),B.fillStyle=W,B.fillRect(0,0,16,512);let F=new ar(D);F.colorSpace=Ot,u.background=F})();let h=new Jr(f);u.environment=h.fromScene(new Nc,0.04).texture,u.environmentIntensity=0.5,u.fog=new os(1706542,9,26);let d=new Gt(30,1.7777777777777777,0.1,60);{let D=[];for(let W=0;W<400;W++){let F=Math.random()*Math.PI*2,ae=20+Math.random()*10;D.push(Math.cos(F)*ae,3+Math.random()*12,-18-Math.random()*8)}let B=new ke;B.setAttribute("position",new Be(D,3)),u.add(new Ao(B,new vn({color:16777215,size:0.05,fog:!1,sizeAttenuation:!0})))}let x=new jo(new lr(60,60),{textureWidth:s||o?512:1024,textureHeight:s||o?512:1024,color:5592422,clipBias:0.003});x.rotation.x=-Math.PI/2,u.add(x);{let D=new je(new lr(60,60),new Xt({color:919066,transparent:!0,opacity:0.78,depthWrite:!1}));D.rotation.x=-Math.PI/2,D.position.y=0.002,u.add(D)}let M={uAge:{value:-1},uAmp:{value:0.13},uC:{value:new K(0,0)},uCol:{value:new fe(16732070)}};{let F=[];for(let ct=-26;ct<=26.000001;ct+=0.5)for(let ht=-26;ht<25.999999;ht+=0.25)F.push(ct,0,ht,ct,0,ht+0.25),F.push(ht,0,ct,ht+0.25,0,ct);let ae=new ke;ae.setAttribute("position",new Be(F,3));let Ie=new Et({transparent:!0,depthWrite:!1,uniforms:M,vertexShader:`uniform float uAge,uAmp; uniform vec2 uC; varying float vA; varying float vW;
        void main(){ vec3 p=position; float r=length(p.xz-uC); float x=r-uAge*9.0;
          float env=uAge<0.0?0.0:exp(-x*x/1.6)*exp(-uAge*.9); p.y+=.004+uAmp*env*sin(x*4.5);
          vW=env; vec4 mv=modelViewMatrix*vec4(p,1.); gl_Position=projectionMatrix*mv;
          float d=length(mv.xyz); vA=1.-smoothstep(9.,26.,d); }`,fragmentShader:`uniform vec3 uCol; varying float vA; varying float vW;
        void main(){ gl_FragColor=vec4(uCol*(1.15+vW*3.),vA*(.7+.6*vW)); }`}),xt=new Ii(ae,Ie);xt.frustumCulled=!1,u.add(xt)}let p={uAge:{value:-1}};{let ae=function(bt,yt,kt,Jt){W.push(bt[0],0.012,bt[1],yt[0],0.012,yt[1]),F.push(kt,Jt)},Ie=function(bt,yt,kt,Jt,ci,Ci){let di=bt,cr=yt,Ft=7;for(let ii=0;ii<Ft;ii++){kt+=(B()-0.5)*1.2;let hr=Jt/Ft,ri=di+Math.cos(kt)*hr,Di=cr+Math.sin(kt)*hr,In=ci+ii/Ft*(1-ci),ur=ci+(ii+1)/Ft*(1-ci);if(ae([di,cr],[ri,Di],In,ur),Ci<1&&B()<0.5&&ii>1)Ie(ri,Di,kt+(B()<0.5?-1:1)*(0.5+B()*0.6),Jt*0.4,ur,Ci+1);di=ri,cr=Di}},D=7,B=()=>(D=D*16807%2147483647)/2147483647,W=[],F=[],xt=17;for(let bt=0;bt<xt;bt++)Ie(0,0,bt/xt*Math.PI*2+B()*0.3,1+B()*1.6,0,0);let ct=new ke;ct.setAttribute("position",new Be(W,3)),ct.setAttribute("along",new Be(F,1));let ht=new Et({transparent:!0,depthWrite:!1,blending:jr,uniforms:p,vertexShader:"attribute float along; varying float vT; void main(){ vT=along; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.); }",fragmentShader:`uniform float uAge; varying float vT;
        void main(){ if(uAge<0.) discard; float grow=clamp(uAge/.5,0.,1.); grow=1.-pow(1.-grow,2.); if(vT>grow) discard;
          float fade=1.-smoothstep(1.6,3.8,uAge); float hot=1.-smoothstep(0.,1.,vT);
          vec3 c=mix(vec3(1.,.25,.62),vec3(1.,.9,.97),hot*.8*(1.-smoothstep(0.,1.2,uAge)));
          gl_FragColor=vec4(c*2.2*fade,1.); }`}),lt=new Ii(ct,ht);lt.frustumCulled=!1,lt.name="cracks",u.add(lt),window.__cracks=lt}function m(D,B){let W=document.createElement("canvas");W.width=512,W.height=512;let F=W.getContext("2d");if(F.fillStyle="#070418",F.fillRect(0,0,512,512),D===1)for(let Ie=0;Ie<6;Ie++)for(let xt=0;xt<4;xt++){if((Ie+xt)%3===0)continue;F.fillStyle=B,F.globalAlpha=0.3+0.1*Ie,F.fillRect(66+xt*100,230+Ie*44,88,36)}if(D===2){F.strokeStyle=B,F.lineWidth=6;for(let Ie=1;Ie<6;Ie++)F.globalAlpha=1-Ie*0.14,F.beginPath(),F.arc(256,290,Ie*52,0,7),F.stroke()}if(D===3)F.fillStyle=B,F.fillRect(46,200,18,120),F.fillRect(448,280,18,120),F.fillStyle="#fff",F.beginPath(),F.arc(290,250,11,0,7),F.fill();F.globalAlpha=1,F.fillStyle=B,F.textAlign="center",F.font="800 40px Inter,Arial,sans-serif",F.fillText("COMING SOON",256,100);let ae=new ar(W);return ae.colorSpace=Ot,ae.anisotropy=8,ae}function b(D,B){let W=document.createElement("canvas");W.width=1024,W.height=256;let F=W.getContext("2d");F.fillStyle="#0b0410",F.fillRect(0,0,1024,256);let ae=F.createLinearGradient(0,0,0,256);ae.addColorStop(0,"rgba(255,255,255,.07)"),ae.addColorStop(1,"rgba(255,255,255,0)"),F.fillStyle=ae,F.fillRect(0,0,1024,256),F.font="900 150px Inter,Arial,sans-serif",F.textAlign="center",F.textBaseline="middle",F.shadowColor=B,F.shadowBlur=40,F.fillStyle="#fff",F.letterSpacing="18px",F.fillText(D,521,138),F.shadowBlur=18,F.fillText(D,521,138),F.strokeStyle=B,F.lineWidth=10,F.shadowBlur=24,F.strokeRect(10,10,1004,236);let Ie=new ar(W);return Ie.colorSpace=Ot,Ie.anisotropy=8,Ie}function T(D,B){let W=document.createElement("canvas");W.width=1024,W.height=1024;let F=W.getContext("2d");F.clearRect(0,0,1024,1024),F.strokeStyle=D,F.lineWidth=26,F.shadowColor=D,F.shadowBlur=30,F.beginPath(),F.moveTo(-50,760),F.lineTo(1100,360),F.stroke(),F.lineWidth=10,F.beginPath(),F.moveTo(-50,820),F.lineTo(1100,420),F.stroke(),F.shadowBlur=0,F.fillStyle="rgba(255,255,255,.85)",F.font="900 150px Inter,Arial",F.save(),F.translate(120,330),F.rotate(-Math.PI/2),F.fillText(B,0,0),F.restore();let ae=new ar(W);return ae.colorSpace=Ot,ae.anisotropy=8,ae}function S(){let D=document.createElement("canvas");D.width=256,D.height=256;let B=D.getContext("2d"),W=B.createRadialGradient(128,110,10,128,128,128);W.addColorStop(0,"#ff9fd0"),W.addColorStop(0.7,"#ff4fa6"),W.addColorStop(1,"#c21a72"),B.fillStyle=W,B.beginPath(),B.arc(128,128,126,0,7),B.fill(),B.fillStyle="#fff",B.font="900 74px Inter,Arial,sans-serif",B.textAlign="center",B.textBaseline="middle",B.letterSpacing="1px",B.shadowColor="rgba(120,0,60,.6)",B.shadowBlur=6,B.fillText("START",129,134);let F=new ar(D);return F.colorSpace=Ot,F.anisotropy=8,F}let A=function(){let D=document.createElement("canvas");D.width=256,D.height=256;let B=D.getContext("2d"),W=B.createLinearGradient(0,0,256,256);return W.addColorStop(0,"rgba(255,255,255,.20)"),W.addColorStop(0.35,"rgba(255,255,255,.04)"),W.addColorStop(0.36,"rgba(255,255,255,0)"),W.addColorStop(1,"rgba(255,255,255,0)"),B.fillStyle=W,B.fillRect(0,0,256,256),new ar(D)}(),C=function(){let D=document.createElement("canvas");D.width=128,D.height=128;let B=D.getContext("2d"),W=B.createRadialGradient(64,64,4,64,64,64);return W.addColorStop(0,"rgba(0,0,0,.75)"),W.addColorStop(1,"rgba(0,0,0,0)"),B.fillStyle=W,B.fillRect(0,0,128,128),new ar(D)}(),g=document.createElement("canvas");g.width=512,g.height=512;let y=g.getContext("2d"),P=new ar(g);P.colorSpace=Ot,P.anisotropy=8;let k=[];for(let D=0;D<40;D++)k.push([Math.random()*512,Math.random()*400,Math.random()*2+1,Math.random()*6]);let I=[];for(let D=0;D<9;D++)I.push([30+D*56+Math.random()*20,Math.random()*500,1.6+Math.random()*1.2,D%3]);function H(D){let B=y.createLinearGradient(0,0,0,512);B.addColorStop(0,"#060c1f"),B.addColorStop(1,"#0e1c45"),y.fillStyle=B,y.fillRect(0,0,512,512),k.forEach((ae)=>{y.globalAlpha=0.35+0.35*Math.sin(D*1.5+ae[3]),y.fillStyle="#8fa8ff",y.fillRect(ae[0],ae[1],ae[2],ae[2])}),y.globalAlpha=1;let W=["#c6e4ff","#43c6ff","#b6ff3c"];I.forEach((ae)=>{let Ie=(ae[1]+D*55*ae[2])%540-20;y.fillStyle=W[ae[3]],y.globalAlpha=0.55,y.fillRect(ae[0],Ie-22,3,22),y.globalAlpha=0.9,y.fillRect(ae[0]-4,Ie,11,11)}),y.globalAlpha=1,y.fillStyle="#16264f",y.fillRect(0,452,512,60),y.fillStyle="#4b6fb5",y.fillRect(0,450,512,3);let F=256+Math.sin(D*0.8)*150;if(y.fillStyle="#e0425a",y.fillRect(F-17,430,34,20),y.fillStyle="#ffd1d8",y.fillRect(F-6,420,12,12),y.textAlign="center",y.font="900 70px Inter,Arial,sans-serif",y.fillStyle="#ff7ac2",y.shadowColor="#ff2e93",y.shadowBlur=18,y.fillText("READY?",256,200),y.shadowBlur=0,y.font="600 26px Inter,Arial,sans-serif",y.fillStyle="#c9d6ff",y.fillText("Drag to run. Don't get hit.",256,250),Math.floor(D*1.6)%2===0)y.font="800 28px Inter,Arial,sans-serif",y.fillStyle="#ff9fd0",y.fillText("PRESS START",256,312);P.needsUpdate=!0}H(0);let re={w:0.74,rough:0.38,metal:0.6,pts:[[-0.42,0],[0.3,0],[0.3,0.62],[0.44,0.66],[0.44,0.74],[0.22,0.94],[0.12,1.56],[0.24,1.58],[0.24,1.95],[-0.2,1.97],[-0.42,1.7]],scr:[[0.21,0.95],[0.12,1.55]],bez:[[0.215,0.9],[0.115,1.6],0.7],mq:[[0.245,1.6],[0.245,1.94],0.72],deck:[[0.44,0.745],[0.22,0.945]],stops:[1708080,722708,722708],neon:16732070};function R(D,B,W,F,ae){let Ie=B[0]-D[0],xt=B[1]-D[1],ct=Math.hypot(Ie,xt),ht=xt/ct,lt=-Ie/ct,bt=new je(new lr(W,ct),ae);return bt.rotation.x=-Math.atan2(lt,ht),bt.position.set(0,(D[1]+B[1])/2+lt*F,(D[0]+B[0])/2+ht*F),bt.userData={len:ct,nz:ht,ny:lt},bt}let J=(D,B)=>new Xt({color:new fe(D).multiplyScalar(B),toneMapped:!1});function te(D){let B=re,W=new Zi,F=new fe(D.acc),{pts:ae,w:Ie}=B,xt=[],ct=(oe,Ee)=>(xt.push({mat:oe,kind:Ee,base:Ee==="color"?oe.color.clone():oe.emissiveIntensity}),oe),ht=new gr;ht.moveTo(-ae[0][0],ae[0][1]);for(let oe=1;oe<ae.length;oe++)ht.lineTo(-ae[oe][0],ae[oe][1]);ht.closePath();let lt=new Ja(ht,{depth:Ie-0.07,bevelEnabled:!0,bevelThickness:0.035,bevelSize:0.035,bevelOffset:-0.035,bevelSegments:6,curveSegments:24});lt.translate(0,0,-(Ie-0.07)/2);let bt=lt.attributes.position,yt=new Float32Array(bt.count*3),kt=B.stops;for(let oe=0;oe<bt.count;oe++){let Ee=Math.min(1,Math.max(0,bt.getY(oe)/2.1)),Ye=Ee*(kt.length-1),st=Math.min(kt.length-2,Math.floor(Ye)),Ne=new fe(kt[st]).lerp(new fe(kt[st+1]),Ye-st);yt[oe*3]=Ne.r,yt[oe*3+1]=Ne.g,yt[oe*3+2]=Ne.b}lt.setAttribute("color",new Zt(yt,3));let Jt=new zo({vertexColors:!0,roughness:B.rough,metalness:B.metal,clearcoat:1,clearcoatRoughness:0.12,envMapIntensity:1.3}),ci=new je(lt,ct(Jt,"color"));ci.rotation.y=Math.PI/2,W.add(ci);let Ci=new je(new lr(2,2),new Xt({map:C,transparent:!0,depthWrite:!1,opacity:0.9}));Ci.rotation.x=-Math.PI/2,Ci.position.y=0.006,W.add(Ci),W.add(R(B.bez[0],B.bez[1],B.bez[2],0.004,new Ai({color:262410,roughness:0.15,metalness:0.8})));let di=0.6,cr=ct(new Xt({map:D.tex,toneMapped:!1}),"color"),Ft=R(B.scr[0],B.scr[1],di,0.009,cr);W.add(Ft),W.add(R(B.scr[0],B.scr[1],di,0.013,new Xt({map:A,transparent:!0,opacity:0.9,depthWrite:!1,toneMapped:!1})));let ii=B.scr;[-1,1].forEach((oe)=>{let Ee=R([ii[0][0],ii[0][1]-0.02],[ii[1][0],ii[1][1]+0.02],0.012,0.015,ct(J(5213695,1.6),"color"));Ee.position.x=oe*(di/2+0.012),W.add(Ee)}),[ii[0],ii[1]].forEach((oe,Ee)=>{let Ye=R([oe[0],oe[1]-0.006],[oe[0],oe[1]+0.006],di+0.04,0.015,ct(J(5213695,1.6),"color"));Ye.position.set(0,oe[1]+(Ee?0.012:-0.012)*0,oe[0]+0.015),Ye.rotation.x=0,W.add(Ye)});let hr=ct(new Xt({map:b(D.title,D.hex),toneMapped:!1}),"color");W.add(R(B.mq[0],B.mq[1],B.mq[2],0.004,hr));let ri=R(B.deck[0],B.deck[1],0.78,0.004,new Ai({color:1708080,roughness:0.3,metalness:0.85}));W.add(ri);let Di=new Zi;Di.rotation.copy(ri.rotation),Di.position.copy(ri.position),W.add(Di);let In=new je(new Qa(0.104,0.009,12,48),new Ai({color:14540253,metalness:1,roughness:0.18}));In.position.z=0.006,Di.add(In);let ur=new Zi;ur.position.z=0.01,Di.add(ur);let Ir=new je(new Ro(0.09,0.095,0.03,48),new Ai({color:F,emissive:F,emissiveIntensity:0.9,roughness:0.25}));Ir.rotation.x=Math.PI/2,Ir.position.z=0,ur.add(Ir),ct(Ir.material,"emissive");let v=D.hero?new Xt({map:S(),toneMapped:!1}):new Xt({color:3814480,toneMapped:!1}),N=new je(new qa(0.084,48),v);N.position.z=0.0165,ur.add(N),ct(v,"color");let X=new je(new Li(0.3,0.3,0.02),new Ai({color:656914,roughness:0.3,metalness:0.9}));X.position.set(0,0.32,ae[1][0]+0.01),W.add(X),[-0.06,0.06].forEach((oe)=>{let Ee=new je(new Li(0.02,0.1,0.01),ct(J(D.hex,1.5),"color"));Ee.position.set(oe,0.33,X.position.z+0.014),W.add(Ee)});let z=new je(new Li(0.7,0.09,0.02),new Ai({color:8949928,metalness:0.7,roughness:0.35}));z.position.set(0,0.07,X.position.z),W.add(z);let V=Ie/2+0.012;[-1,1].forEach((oe)=>{let Ee=new xs;for(let Ye=0;Ye<ae.length;Ye++){let st=ae[Ye],Ne=ae[(Ye+1)%ae.length];Ee.add(new Io(new w(oe*V,st[1],st[0]),new w(oe*V,Ne[1],Ne[0])))}W.add(new je(new $a(Ee,ae.length*8,0.007,6,!0),ct(J(B.neon,1.7),"color")))});let ye=new Ka(ht,24);ye.computeBoundingBox();let Le=ye.boundingBox,Me=T(D.hex,D.title);return Me.repeat.set(1/(Le.max.x-Le.min.x),1/(Le.max.y-Le.min.y)),Me.offset.set(-Le.min.x/(Le.max.x-Le.min.x),-Le.min.y/(Le.max.y-Le.min.y)),[-1,1].forEach((oe)=>{let Ee=new je(ye,ct(new Xt({map:Me,transparent:!0,side:bi,depthWrite:!1,toneMapped:!1,polygonOffset:!0,polygonOffsetFactor:-2}),"color"));if(Ee.rotation.y=oe*Math.PI/2,oe<0)Ee.scale.x=-1;Ee.position.x=oe*(Ie/2+0.004),W.add(Ee)}),W.userData={dimMats:xt,mqMat:hr,btnG:ur,bt:Ir,decal:N,scr:Ft,deckBd:Di},W}u.add(new Xo(9075455,3151946,0.9));let G=new Yo(12570879,1.1);G.position.set(-4,6,5),u.add(G);let pe=new Cr(16732070,40,9,2);pe.position.set(1.6,0.6,2.4),u.add(pe);let Q=new Cr(5213695,30,9,2);Q.position.set(-2.2,1.4,2.4),u.add(Q);let ee=new qo(16766704,60,12,0.5,0.6,1.5);ee.position.set(0,5,3.5),ee.target.position.set(0,1,0),u.add(ee,ee.target);let ce=new Cr(16732070,0,7,2);ce.position.set(0,0.4,0.3),u.add(ce);let De=[["GAME 04",5213695,3,"Coming soon"],["GAME 02",2868384,1,"Coming soon"],["DRIPPY",16732070,0,"Survive the rain"],["GAME 03",11691775,2,"Coming soon"],["GAME 05",2868384,2,"Coming soon"]],q=2,he=De.map((D,B)=>{let W="#"+D[1].toString(16).padStart(6,"0"),F=te({acc:D[1],hex:W,title:D[0],tex:D[2]===0?P:m(D[2],W),hero:B===q});return u.add(F),F}),Ue=()=>{let D=t.getBoundingClientRect();return{w:Math.max(2,Math.round(D.width)),h:Math.max(2,Math.round(D.height))}},Pe=Ue();f.setPixelRatio(o?1:Math.min(devicePixelRatio||1,s?1.5:2)),f.setSize(Pe.w,Pe.h,!1);let qe=new Tt(Pe.w,Pe.h,{type:wt,samples:s||o?0:4}),Ae=new Ic(f,qe);Ae.addPass(new Lc(u,d));let ft=new Pn(new K(Pe.w,Pe.h),0.75,0.55,0.86);Ae.addPass(ft),Ae.addPass(new Dc);let it=1.78,Ze=1.95,at=6.2,se=1.2,me=1;function _e(){Pe=Ue(),it=Pe.w/Pe.h,f.setSize(Pe.w,Pe.h,!1),Ae.setSize(Pe.w,Pe.h),d.aspect=it,d.updateProjectionMatrix(),at=5.8+(Math.min(it,1.7)-0.5);let B=at*0.536*it;if(Ze=Math.max(1,Math.min(1.6,B*0.25)),it<1)at=6.9,se=1.1,me=0.55;else se=1.2,me=1}_e(),new ResizeObserver(_e).observe(t);let be=q,Re=q,Ve=0,Ge=0,et=null,ot=-1,gt=null,U=[0.12,0.12,0.2,0.12,0.12],Ut=(D)=>Math.max(0.3,1-0.45*Math.abs(D)),Qe={hover:!1,press:!1};function At(D){let B=Math.abs(D),W=Math.sign(D);return{x:D*Ze,z:-(0.8*Math.min(B,3)+0.2*Math.max(0,Math.min(B,3)-1)),sc:1-0.08*Math.min(B,3),ry:-0.3*Math.max(0,1-B)-W*Math.min(1,B)*0.2-(B>1?W*0.05*(B-1):0)}}function we(D,B){D.userData.dimMats.forEach((W)=>{if(W.kind==="color")W.mat.color.copy(W.base).multiplyScalar(B);else W.mat.emissiveIntensity=W.base*B})}let dt=[[0.36,0,1,1],[0.42,0,1.09,0.88],[0.54,0.4,0.98,1.03],[0.66,0,1.03,0.97],[0.8,0.07,1,1],[1,0,1,1]];function Je(D){let B=D/1.7;if(B<=0)return{y:12,sx:1,sy:1};if(B<0.36){let Ie=B/0.36;return{y:12*(1-Ie*Ie),sx:1,sy:1}}if(B>=1)return{y:0,sx:1,sy:1};let W=dt[0],F=dt[1];for(let Ie=0;Ie<dt.length-1;Ie++)if(B>=dt[Ie][0]&&B<dt[Ie+1][0]){W=dt[Ie],F=dt[Ie+1];break}let ae=(B-W[0])/(F[0]-W[0]);return ae=ae*ae*(3-2*ae),{y:W[1]+(F[1]-W[1])*ae,sx:W[2]+(F[2]-W[2])*ae,sy:W[3]+(F[3]-W[3])*ae}}let Ke=0.612,Rt=0;function E(D){if(a){for(let B=0;B<5;B++)U[B]=1;et=-1e9,ot=99;return}et=D,ot=0,Rt=0}function _(D,B){let W=D-B*9;return Math.exp(-W*W/1.6)*Math.exp(-B*0.9)}let O=!0;new IntersectionObserver((D)=>{O=D[0].isIntersecting}).observe(t);let le=new w,ne=new w;function xe(D,B){return ne.copy(B),D.localToWorld(ne),ne.project(d),[(ne.x*0.5+0.5)*Pe.w,(-ne.y*0.5+0.5)*Pe.h]}let ue=c("hallStart"),Z=c("hallName"),ie=c("hallSub"),ve=c("hallIdx");function L(){let D=De[be];if(Z)Z.textContent=D[0];if(ie)ie.textContent=D[3];if(ve)ve.textContent="0"+(be+1)+" / 05";if(ue)ue.disabled=be!==q,ue.hidden=be!==q;l.dataset.hall=be===q?"on":"off"}function j(D){let B=Math.max(0,Math.min(4,be+D));if(B!==be)be=B,L()}L(),c("hallPrev")&&c("hallPrev").addEventListener("click",()=>j(-1)),c("hallNext")&&c("hallNext").addEventListener("click",()=>j(1)),c("hallScore")&&c("hallScore").addEventListener("click",()=>document.querySelector('#switch [data-mode="score"]').click()),c("hallRules")&&c("hallRules").addEventListener("click",()=>document.querySelector('#switch [data-mode="rules"]').click()),window.addEventListener("keydown",(D)=>{if(l.classList.contains("big")||l.classList.contains("fs")||D.target.tagName==="INPUT")return;if(document.querySelector(".rmodal:not([hidden])"))return;if(D.key==="ArrowLeft")j(-1);if(D.key==="ArrowRight")j(1)});let Y=null;if(t.addEventListener("pointerdown",(D)=>{if(D.target.closest("button, a"))return;Y={x:D.clientX,y:D.clientY,m:!1}}),window.addEventListener("pointermove",(D)=>{if(Ge=(D.clientX/innerWidth-0.5)*2,Y&&Math.abs(D.clientX-Y.x)>8)Y.m=!0}),window.addEventListener("pointerup",(D)=>{if(!Y)return;let B=D.clientX-Y.x,W=Y.m;if(Y=null,W&&Math.abs(B)>40){j(B<0?1:-1);return}if(!W){let F=t.getBoundingClientRect(),ae=-1,Ie=1e9;if(he.forEach((xt,ct)=>{let ht=xe(xt,new w(0,1,0)),lt=Math.abs(ht[0]+F.left-D.clientX);if(lt<Ie)Ie=lt,ae=ct}),ae>=0&&ae!==be&&Ie<Pe.w*0.12)be=ae,L()}}),ue)ue.addEventListener("pointerenter",()=>{Qe.hover=!0}),ue.addEventListener("pointerleave",()=>{Qe.hover=!1,Qe.press=!1}),ue.addEventListener("pointerdown",()=>{Qe.press=!0}),window.addEventListener("pointerup",()=>{Qe.press=!1}),ue.addEventListener("click",()=>c("btnStart").click());function de(){let D=he[q];D.updateMatrixWorld(!0);let B=[[-0.3,0.95,0.21],[0.3,0.95,0.21],[-0.3,1.55,0.12],[0.3,1.55,0.12]].map((lt)=>xe(D,new w(lt[0],lt[1],lt[2]))),W=B.map((lt)=>lt[0]),F=B.map((lt)=>lt[1]),ae=t.getBoundingClientRect(),Ie=Math.min(...W)+ae.left,xt=Math.min(...F)+ae.top,ct=Math.max(...W)+ae.left,ht=Math.max(...F)+ae.top;return{left:Ie,top:xt,width:ct-Ie,height:ht-xt,right:ct,bottom:ht,x:Ie,y:xt}}window.__hall={ready:!0,screenRect:de,heroActive:()=>be===q,replay:()=>{for(let D=0;D<5;D++)U[D]=D===q?0.2:0.12;E(performance.now())},setActive:(D)=>{be=D,L()},instant:()=>{Re=be},seek:(D)=>{if(gt=D,et===null)et=performance.now()}};let ge=performance.now(),Te=0,He=0;function ze(D){requestAnimationFrame(ze);let B=Math.min(0.05,(D-ge)/1000);if(ge=D,document.hidden||!O||l.classList.contains("big")||l.classList.contains("fs"))return;if(s&&He++&1)return;if(et===null&&l.classList.contains("cabvis"))E(D);let W=et===null?-1:gt!==null?gt:(D-et)/1000;if(ot=W,Re+=(be-Re)*Math.min(1,B*7),D-Te>66)Te=D,H(D/1000);let F=et===null;he.forEach((ht,lt)=>{let bt=lt-Re,yt=At(bt),kt=0,Jt=1,ci=1;if(lt===q){if(F)kt=12;else if(W<1.7&&!a){let ri=Je(W);kt=ri.y,Jt=ri.sx,ci=ri.sy}}let Ci=0,di=Math.hypot(yt.x,yt.z-At(q-Re).z),cr=At(q-Re).x;if(di=Math.hypot(yt.x-cr,yt.z-At(q-Re).z),!F&&W>Ke&&lt!==q&&!a)Ci=Math.max(0,0.09*_(di,W-Ke)*Math.sin((di-(W-Ke)*9)*2));ht.position.set(yt.x,kt+Ci,yt.z),ht.scale.set(yt.sc*Jt,yt.sc*ci,yt.sc*Jt),ht.rotation.y=yt.ry;let Ft;if(a||W>6||W<0&&!1)Ft=1;else if(F)Ft=lt===q?0.2:0.12;else if(lt===q){if(Ft=W<0.6?0.2:Math.min(1,0.2+(W-0.6)/0.5*0.8),W>1.6&&W<2.8){let ri=W-1.6;Ft=[1.5,0.3,1.4,0.4,1,1][Math.min(5,Math.floor(ri/1.2*6))]}}else{let ri=Ke+di/9;Ft=Math.max(0.12,Math.min(1,(W-ri)/0.5))}U[lt]=Ft,we(ht,Ut(bt)*Ft*(lt===q?1:1));let ii=ht.userData,hr=0.8+0.35*Math.sin(D/420);if(lt===q)ii.bt.material.emissiveIntensity=(Qe.hover?2:0.8*hr)*Ut(bt)*Ft,ii.btnG.position.z=Qe.press?0:0.01,ii.decal.material.color.setScalar((Qe.hover?1.25:0.95+0.08*Math.sin(D/420))*Ut(bt)*Ft)});let ae=et===null||a?-1:W-Ke;M.uAge.value=ae<0||ae>6?-1:ae,p.uAge.value=ae<0||ae>5?-1:ae;let Ie=At(q-Re);if(M.uC.value.set(Ie.x,Ie.z),window.__cracks.position.set(Ie.x,0,Ie.z),ae>=0&&ae<1.2)ce.intensity=110*Math.exp(-ae*4.5),Rt=Math.max(Rt,ae<0.08?1:Rt);else ce.intensity=0;Rt*=Math.exp(-B*5),ft.strength=0.75+(ae>=0&&ae<1?0.8*Math.exp(-ae*4):0),Ve+=(Ge*0.35*(it<1?0.3:1)-Ve)*Math.min(1,B*3);let xt=(Math.random()-0.5)*0.09*Rt,ct=(Math.random()-0.5)*0.09*Rt;if(d.position.set(Ve+xt,se+ct,at),d.lookAt(Ve*0.3,me+ct,0),ee.position.x=Ie.x,ee.target.position.x=Ie.x,Ae.render(),ue&&!ue.hidden){let ht=he[q];ht.updateMatrixWorld(!0);let lt=ht.userData,bt=new w;lt.btnG.getWorldPosition(bt),bt.project(d);let yt=(bt.x*0.5+0.5)*Pe.w,kt=(-bt.y*0.5+0.5)*Pe.h,Jt=new w;lt.btnG.getWorldPosition(Jt),Jt.x+=0.1*ht.scale.x*Math.cos(ht.rotation.y),Jt.z-=0.1*ht.scale.x*Math.sin(ht.rotation.y),Jt.project(d);let ci=Math.max(18,Math.abs((Jt.x*0.5+0.5)*Pe.w-yt)*1.15);ue.style.width=ue.style.height=(ci*2).toFixed(0)+"px",ue.style.transform="translate("+(yt-ci).toFixed(1)+"px,"+(kt-ci).toFixed(1)+"px)",ue.style.visibility=F||W<1.9?"hidden":"visible"}}requestAnimationFrame(ze),document.dispatchEvent(new Event("hallready"))}})();
