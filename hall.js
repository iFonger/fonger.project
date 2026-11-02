var wm=Object.defineProperty;var Am=(e)=>e;function Rm(e,t){this[e]=Am.bind(null,t)}var Cm=(e,t)=>{for(var i in t)wm(e,i,{get:t[i],enumerable:!0,configurable:!0,set:Rm.bind(t,i)})};var Wr={};Cm(Wr,{ArcCurve:()=>dc,CatmullRomCurve3:()=>_c,CubicBezierCurve:()=>ko,CubicBezierCurve3:()=>yc,EllipseCurve:()=>Sn,LineCurve:()=>Ho,LineCurve3:()=>Wo,QuadraticBezierCurve:()=>Xo,QuadraticBezierCurve3:()=>qo,SplineCurve:()=>Yo});var Bs="187";var Qc=0,Ul=1,$c=2;var Un=1,jc=2,jr=3,qi=0,Vt=1,Ri=2,Yi=0,Nr=1,Sr=2,Fl=3,Bl=4,eh=5;var Ur=100,th=101,ih=102,rh=103,nh=104,sh=200,oh=201,ah=202,lh=203,pa=204,ma=205,ch=206,hh=207,uh=208,fh=209,dh=210,ph=211,mh=212,gh=213,xh=214,Os=0,zs=1,Gs=2,Fr=3,Vs=4,ks=5,Hs=6,Ws=7,en=0,_h=1,vh=2,Fi=0,Fn=1,Bn=2,On=3,Br=4,zn=5,Gn=6,Vn=7;var ga=300,Zi=301,br=302,Xs=303,qs=304,kn=1000,vi=1001,Hn=1002,Ot=1003,Ol=1004;var Wn=1005;var Ht=1006,Ys=1007;var Ci=1008;var $t=1009,xa=1010,_a=1011,Tr=1012,Xn=1013,ni=1014,jt=1015,Ut=1016,qn=1017,Yn=1018,ar=1020,va=35902,ya=35899,Ma=1021,Sa=1022,ui=1023,Di=1026,Bi=1027,Zn=1028,tn=1029,Oi=1030,Jn=1031;var Kn=1033,Qn=33776,$n=33777,jn=33778,es=33779,Zs=35840,Js=35841,Ks=35842,Qs=35843,$s=36196,js=37492,eo=37496,to=37488,io=37489,rn=37490,ro=37491,no=37808,so=37809,oo=37810,ao=37811,lo=37812,co=37813,ho=37814,uo=37815,fo=37816,po=37817,mo=37818,go=37819,xo=37820,_o=37821,vo=36492,yo=36494,Mo=36495,So=36283,bo=36284,nn=36285,To=36286;var sn=2300,ba=2301,Ta=2302,zl=2303,Ea=2400,wa=2401,Aa=2402;var yh=3200;var lr=0,Mh=1,Ji="",qt="srgb",on="srgb-linear",an="linear",vt="srgb";var Ra=7680;var Sh=519,bh=512,Th=513,Eh=514,Ca=515,wh=516,Ah=517,Pa=518,Ia=519,Eo=35044;var Gl="300 es",fi=2000,pr=2001;function Ch(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function Vl(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function ln(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function kl(){let e=ln("canvas");return e.style.display="block",e}var Rh={},ts=null;function cn(...e){let t="THREE."+e.shift();if(ts)ts("log",t,...e);else console.log(t,...e)}function Ph(e){let t=e[0];if(typeof t==="string"&&t.startsWith("TSL:")){let i=e[1];if(i&&i.isStackTrace)e[0]+=" "+i.getLocation();else e[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return e}function ye(...e){e=Ph(e);let t="THREE."+e.shift();if(ts)ts("warn",t,...e);else{let i=e[0];if(i&&i.isStackTrace)console.warn(i.getError(t));else console.warn(t,...e)}}function Be(...e){e=Ph(e);let t="THREE."+e.shift();if(ts)ts("error",t,...e);else{let i=e[0];if(i&&i.isStackTrace)console.error(i.getError(t));else console.error(t,...e)}}function Ki(...e){let t=e.join(" ");if(t in Rh)return;Rh[t]=!0,ye(...e)}function Ih(e,t,i){return new Promise(function(r,n){function s(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:n();break;case e.TIMEOUT_EXPIRED:setTimeout(s,i);break;default:r()}}setTimeout(s,i)})}var Lh={[Os]:Os,[Gs]:Hs,[Vs]:Vs,[Fr]:ks,[zs]:zs,[Hs]:Gs,[Ws]:Ws,[ks]:Fr};class si{addEventListener(e,t){if(this._listeners===void 0)this._listeners={};let i=this._listeners;if(i[e]===void 0)i[e]=[];if(i[e].indexOf(t)===-1)i[e].push(t)}hasEventListener(e,t){let i=this._listeners;if(i===void 0)return!1;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let r=i[e];if(r!==void 0){let n=r.indexOf(t);if(n!==-1)r.splice(n,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let r=i.slice(0);for(let n=0,s=r.length;n<s;n++)r[n].call(this,e);e.target=null}}}var Mi=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var is=Math.PI/180,hn=180/Math.PI;function di(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Mi[e&255]+Mi[e>>8&255]+Mi[e>>16&255]+Mi[e>>24&255]+"-"+Mi[t&255]+Mi[t>>8&255]+"-"+Mi[t>>16&15|64]+Mi[t>>24&255]+"-"+Mi[i&63|128]+Mi[i>>8&255]+"-"+Mi[i>>16&255]+Mi[i>>24&255]+Mi[r&255]+Mi[r>>8&255]+Mi[r>>16&255]+Mi[r>>24&255]).toLowerCase()}function tt(e,t,i){return Math.max(t,Math.min(i,e))}function Dh(e,t){return(e%t+t)%t}function La(e,t,i){return(1-i)*e+i*t}function Nh(e){return Math.pow(2,Math.floor(Math.log(e)/Math.LN2))}function rs(e){switch(e.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Da(e,t){if(t.constructor===Float32Array)return e;let i=rs(t);if(i===void 0)throw Error("THREE.MathUtils: Invalid component type.");return Math.max(e/i,-1)}function Na(e,t){if(t.constructor===Float32Array)return e;let i=rs(t);if(i===void 0)throw Error("THREE.MathUtils: Invalid component type.");return Math.round(e*i)}class H{static{this.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=tt(this.x,e.x,t.x),this.y=tt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=tt(this.x,e,t),this.y=tt(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(tt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(tt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),r=Math.sin(t),n=this.x-e.x,s=this.y-e.y;return this.x=n*i-s*r+e.x,this.y=n*r+s*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class pi{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,n,s,o){let a=i[r+0],l=i[r+1],c=i[r+2],u=i[r+3],f=n[s+0],h=n[s+1],d=n[s+2],x=n[s+3];if(u!==x||a!==f||l!==h||c!==d){let y=a*f+l*h+c*d+u*x;if(y<0)f=-f,h=-h,d=-d,x=-x,y=-y;let p=1-o;if(y<0.9995){let m=Math.acos(y),b=Math.sin(m);p=Math.sin(p*m)/b,o=Math.sin(o*m)/b,a=a*p+f*o,l=l*p+h*o,c=c*p+d*o,u=u*p+x*o}else{a=a*p+f*o,l=l*p+h*o,c=c*p+d*o,u=u*p+x*o;let m=1/Math.sqrt(a*a+l*l+c*c+u*u);a*=m,l*=m,c*=m,u*=m}}e[t]=a,e[t+1]=l,e[t+2]=c,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,r,n,s){let o=i[r],a=i[r+1],l=i[r+2],c=i[r+3],u=n[s],f=n[s+1],h=n[s+2],d=n[s+3];return e[t]=o*d+c*u+a*h-l*f,e[t+1]=a*d+c*f+l*u-o*h,e[t+2]=l*d+c*h+o*f-a*u,e[t+3]=c*d-o*u-a*f-l*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let{_x:i,_y:r,_z:n,_order:s}=e,{cos:o,sin:a}=Math,l=o(i/2),c=o(r/2),u=o(n/2),f=a(i/2),h=a(r/2),d=a(n/2);switch(s){case"XYZ":this._x=f*c*u+l*h*d,this._y=l*h*u-f*c*d,this._z=l*c*d+f*h*u,this._w=l*c*u-f*h*d;break;case"YXZ":this._x=f*c*u+l*h*d,this._y=l*h*u-f*c*d,this._z=l*c*d-f*h*u,this._w=l*c*u+f*h*d;break;case"ZXY":this._x=f*c*u-l*h*d,this._y=l*h*u+f*c*d,this._z=l*c*d+f*h*u,this._w=l*c*u-f*h*d;break;case"ZYX":this._x=f*c*u-l*h*d,this._y=l*h*u+f*c*d,this._z=l*c*d-f*h*u,this._w=l*c*u+f*h*d;break;case"YZX":this._x=f*c*u+l*h*d,this._y=l*h*u+f*c*d,this._z=l*c*d-f*h*u,this._w=l*c*u-f*h*d;break;case"XZY":this._x=f*c*u-l*h*d,this._y=l*h*u-f*c*d,this._z=l*c*d+f*h*u,this._w=l*c*u+f*h*d;break;default:ye("Quaternion: .setFromEuler() encountered an unknown order: "+s)}if(t===!0)this._onChangeCallback();return this}setFromAxisAngle(e,t){let i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],r=t[4],n=t[8],s=t[1],o=t[5],a=t[9],l=t[2],c=t[6],u=t[10],f=i+o+u;if(f>0){let h=0.5/Math.sqrt(f+1);this._w=0.25/h,this._x=(c-a)*h,this._y=(n-l)*h,this._z=(s-r)*h}else if(i>o&&i>u){let h=2*Math.sqrt(1+i-o-u);this._w=(c-a)/h,this._x=0.25*h,this._y=(r+s)/h,this._z=(n+l)/h}else if(o>u){let h=2*Math.sqrt(1+o-i-u);this._w=(n-l)/h,this._x=(r+s)/h,this._y=0.25*h,this._z=(a+c)/h}else{let h=2*Math.sqrt(1+u-i-o);this._w=(s-r)/h,this._x=(n+l)/h,this._y=(a+c)/h,this._z=0.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;if(i<0.00000001)if(i=0,Math.abs(e.x)>Math.abs(e.z))this._x=-e.y,this._y=e.x,this._z=0,this._w=i;else this._x=0,this._y=-e.z,this._z=e.y,this._w=i;else this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i;return this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(tt(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();if(e===0)this._x=0,this._y=0,this._z=0,this._w=1;else e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e;return this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let{_x:i,_y:r,_z:n,_w:s}=e,{_x:o,_y:a,_z:l,_w:c}=t;return this._x=i*c+s*o+r*l-n*a,this._y=r*c+s*a+n*o-i*l,this._z=n*c+s*l+i*a-r*o,this._w=s*c-i*o-r*a-n*l,this._onChangeCallback(),this}slerp(e,t){let{_x:i,_y:r,_z:n,_w:s}=e,o=this.dot(e);if(o<0)i=-i,r=-r,n=-n,s=-s,o=-o;let a=1-t;if(o<0.9995){let l=Math.acos(o),c=Math.sin(l);a=Math.sin(a*l)/c,t=Math.sin(t*l)/c,this._x=this._x*a+i*t,this._y=this._y*a+r*t,this._z=this._z*a+n*t,this._w=this._w*a+s*t,this._onChangeCallback()}else this._x=this._x*a+i*t,this._y=this._y*a+r*t,this._z=this._z*a+n*t,this._w=this._w*a+s*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),n=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),n*Math.sin(t),n*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class w{static{this.prototype.isVector3=!0}constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){if(i===void 0)i=this.z;return this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Uh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Uh.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,r=this.z,n=e.elements;return this.x=n[0]*t+n[3]*i+n[6]*r,this.y=n[1]*t+n[4]*i+n[7]*r,this.z=n[2]*t+n[5]*i+n[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,n=e.elements,s=1/(n[3]*t+n[7]*i+n[11]*r+n[15]);return this.x=(n[0]*t+n[4]*i+n[8]*r+n[12])*s,this.y=(n[1]*t+n[5]*i+n[9]*r+n[13])*s,this.z=(n[2]*t+n[6]*i+n[10]*r+n[14])*s,this}applyQuaternion(e){let t=this.x,i=this.y,r=this.z,{x:n,y:s,z:o,w:a}=e,l=2*(s*r-o*i),c=2*(o*t-n*r),u=2*(n*i-s*t);return this.x=t+a*l+s*u-o*c,this.y=i+a*c+o*l-n*u,this.z=r+a*u+n*c-s*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,r=this.z,n=e.elements;return this.x=n[0]*t+n[4]*i+n[8]*r,this.y=n[1]*t+n[5]*i+n[9]*r,this.z=n[2]*t+n[6]*i+n[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=tt(this.x,e.x,t.x),this.y=tt(this.y,e.y,t.y),this.z=tt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=tt(this.x,e,t),this.y=tt(this.y,e,t),this.z=tt(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(tt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let{x:i,y:r,z:n}=e,{x:s,y:o,z:a}=t;return this.x=r*a-n*o,this.y=n*s-i*a,this.z=i*o-r*s,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Hl.copy(this).projectOnVector(e),this.sub(Hl)}reflect(e){return this.sub(Hl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(tt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}var Hl=new w,Uh=new pi;class Qe{static{this.prototype.isMatrix3=!0}constructor(e,t,i,r,n,s,o,a,l){if(this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0)this.set(e,t,i,r,n,s,o,a,l)}set(e,t,i,r,n,s,o,a,l){let c=this.elements;return c[0]=e,c[1]=r,c[2]=o,c[3]=t,c[4]=n,c[5]=a,c[6]=i,c[7]=s,c[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,n=this.elements,s=i[0],o=i[3],a=i[6],l=i[1],c=i[4],u=i[7],f=i[2],h=i[5],d=i[8],x=r[0],y=r[3],p=r[6],m=r[1],b=r[4],T=r[7],M=r[2],A=r[5],R=r[8];return n[0]=s*x+o*m+a*M,n[3]=s*y+o*b+a*A,n[6]=s*p+o*T+a*R,n[1]=l*x+c*m+u*M,n[4]=l*y+c*b+u*A,n[7]=l*p+c*T+u*R,n[2]=f*x+h*m+d*M,n[5]=f*y+h*b+d*A,n[8]=f*p+h*T+d*R,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],r=e[2],n=e[3],s=e[4],o=e[5],a=e[6],l=e[7],c=e[8];return t*s*c-t*o*l-i*n*c+i*o*a+r*n*l-r*s*a}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],n=e[3],s=e[4],o=e[5],a=e[6],l=e[7],c=e[8],u=c*s-o*l,f=o*a-c*n,h=l*n-s*a,d=t*u+i*f+r*h;if(d===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/d;return e[0]=u*x,e[1]=(r*l-c*i)*x,e[2]=(o*i-r*s)*x,e[3]=f*x,e[4]=(c*t-r*a)*x,e[5]=(r*n-o*t)*x,e[6]=h*x,e[7]=(i*a-l*t)*x,e[8]=(s*t-i*n)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,n,s,o){let a=Math.cos(n),l=Math.sin(n);return this.set(i*a,i*l,-i*(a*s+l*o)+s+e,-r*l,r*a,-r*(-l*s+a*o)+o+t,0,0,1),this}scale(e,t){return Ki("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Wl.makeScale(e,t)),this}rotate(e){return Ki("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Wl.makeRotation(-e)),this}translate(e,t){return Ki("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Wl.makeTranslation(e,t)),this}makeTranslation(e,t){if(e.isVector2)this.set(1,0,e.x,0,1,e.y,0,0,1);else this.set(1,0,e,0,1,t,0,0,1);return this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}var Wl=new Qe;var Fh=new Qe().set(0.4123908,0.3575843,0.1804808,0.212639,0.7151687,0.0721923,0.0193308,0.1191948,0.9505322),Bh=new Qe().set(3.2409699,-1.5373832,-0.4986108,-0.9692436,1.8759675,0.0415551,0.0556301,-0.203977,1.0569715);function Pm(){let e={enabled:!0,workingColorSpace:on,spaces:{},convert:function(n,s,o){if(this.enabled===!1||s===o||!s||!o)return n;if(this.spaces[s].transfer===vt)n.r=cr(n.r),n.g=cr(n.g),n.b=cr(n.b);if(this.spaces[s].primaries!==this.spaces[o].primaries)n.applyMatrix3(this.spaces[s].toXYZ),n.applyMatrix3(this.spaces[o].fromXYZ);if(this.spaces[o].transfer===vt)n.r=un(n.r),n.g=un(n.g),n.b=un(n.b);return n},workingToColorSpace:function(n,s){return this.convert(n,this.workingColorSpace,s)},colorSpaceToWorking:function(n,s){return this.convert(n,s,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){if(n===Ji)return an;return this.spaces[n].transfer},getToneMappingMode:function(n){return this.spaces[n].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(n,s=this.workingColorSpace){return n.fromArray(this.spaces[s].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,s,o){return n.copy(this.spaces[o].fromXYZ).multiply(this.spaces[s].toXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}},t=[0.64,0.33,0.3,0.6,0.15,0.06],i=[0.2126,0.7152,0.0722],r=[0.3127,0.329];return e.define({[on]:{primaries:t,whitePoint:r,transfer:an,toXYZ:Fh,fromXYZ:Bh,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:qt},outputColorSpaceConfig:{drawingBufferColorSpace:qt}},[qt]:{primaries:t,whitePoint:r,transfer:vt,toXYZ:Fh,fromXYZ:Bh,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:qt}}}),e}var rt=Pm();function cr(e){return e<0.04045?e*0.0773993808:Math.pow(e*0.9478672986+0.0521327014,2.4)}function un(e){return e<0.0031308?e*12.92:1.055*Math.pow(e,0.41666)-0.055}var ns;class Ua{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src))return e.src;if(typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{if(ns===void 0)ns=ln("canvas");ns.width=e.width,ns.height=e.height;let r=ns.getContext("2d");if(e instanceof ImageData)r.putImageData(e,0,0);else r.drawImage(e,0,0,e.width,e.height);i=ns}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=ln("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let r=i.getImageData(0,0,e.width,e.height),n=r.data;for(let s=0;s<n.length;s++)n[s]=cr(n[s]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)if(t instanceof Uint8Array||t instanceof Uint8ClampedArray)t[i]=Math.floor(cr(t[i]/255)*255);else t[i]=cr(t[i]);return{data:t,width:e.width,height:e.height}}else return ye("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}var Im=0;class mr{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Im++}),this.uuid=di(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;if(typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement)e.set(t.videoWidth,t.videoHeight,0);else if(typeof VideoFrame<"u"&&t instanceof VideoFrame)e.set(t.displayWidth,t.displayHeight,0);else if(t!==null)e.set(t.width||0,t.height||0,t.depth||0);else e.set(0,0,0);return e}set needsUpdate(e){if(e===!0)this.version++}toJSON(e){let t=e===void 0||typeof e==="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let n;if(Array.isArray(r)){n=[];for(let s=0,o=r.length;s<o;s++)if(r[s].isDataTexture)n.push(Xl(r[s].image));else n.push(Xl(r[s]))}else n=Xl(r);i.url=n}if(!t)e.images[this.uuid]=i;return i}}function Xl(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap)return Ua.getDataURL(e);else if(e.data)return{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name};else return ye("Texture: Unable to serialize Texture."),{}}var Lm=0,ql=new w;class At extends si{constructor(e=At.DEFAULT_IMAGE,t=At.DEFAULT_MAPPING,i=vi,r=vi,n=Ht,s=Ci,o=ui,a=$t,l=At.DEFAULT_ANISOTROPY,c=Ji){super();this.isTexture=!0,Object.defineProperty(this,"id",{value:Lm++}),this.uuid=di(),this.name="",this.source=new mr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=n,this.minFilter=s,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=a,this.offset=new H(0,0),this.repeat=new H(1,1),this.center=new H(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Qe,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=e&&e.depth&&e.depth>1?!0:!1,this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(ql).x}get height(){return this.source.getSize(ql).y}get depth(){return this.source.getSize(ql).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){ye(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){ye(`Texture.setValues(): property '${t}' does not exist.`);continue}if(r&&i&&(r.isVector2&&i.isVector2))r.copy(i);else if(r&&i&&(r.isVector3&&i.isVector3))r.copy(i);else if(r&&i&&(r.isMatrix3&&i.isMatrix3))r.copy(i);else this[t]=i}}toJSON(e){let t=e===void 0||typeof e==="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(Object.keys(this.userData).length>0)i.userData=this.userData;if(!t)e.textures[this.uuid]=i;return i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ga)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case kn:e.x=e.x-Math.floor(e.x);break;case vi:e.x=e.x<0?0:1;break;case Hn:if(Math.abs(Math.floor(e.x)%2)===1)e.x=Math.ceil(e.x)-e.x;else e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case kn:e.y=e.y-Math.floor(e.y);break;case vi:e.y=e.y<0?0:1;break;case Hn:if(Math.abs(Math.floor(e.y)%2)===1)e.y=Math.ceil(e.y)-e.y;else e.y=e.y-Math.floor(e.y);break}if(this.flipY)e.y=1-e.y;return e}set needsUpdate(e){if(e===!0)this.version++,this.source.needsUpdate=!0}set needsPMREMUpdate(e){if(e===!0)this.pmremVersion++}}At.DEFAULT_IMAGE=null;At.DEFAULT_MAPPING=ga;At.DEFAULT_ANISOTROPY=1;class Mt{static{this.prototype.isVector4=!0}constructor(e=0,t=0,i=0,r=1){this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,n=this.w,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r+s[12]*n,this.y=s[1]*t+s[5]*i+s[9]*r+s[13]*n,this.z=s[2]*t+s[6]*i+s[10]*r+s[14]*n,this.w=s[3]*t+s[7]*i+s[11]*r+s[15]*n,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);if(t<0.0001)this.x=1,this.y=0,this.z=0;else this.x=e.x/t,this.y=e.y/t,this.z=e.z/t;return this}setAxisAngleFromRotationMatrix(e){let t,i,r,n,s=0.01,o=0.1,a=e.elements,l=a[0],c=a[4],u=a[8],f=a[1],h=a[5],d=a[9],x=a[2],y=a[6],p=a[10];if(Math.abs(c-f)<0.01&&Math.abs(u-x)<0.01&&Math.abs(d-y)<0.01){if(Math.abs(c+f)<0.1&&Math.abs(u+x)<0.1&&Math.abs(d+y)<0.1&&Math.abs(l+h+p-3)<0.1)return this.set(1,0,0,0),this;t=Math.PI;let b=(l+1)/2,T=(h+1)/2,M=(p+1)/2,A=(c+f)/4,R=(u+x)/4,g=(d+y)/4;if(b>T&&b>M)if(b<0.01)i=0,r=0.707106781,n=0.707106781;else i=Math.sqrt(b),r=A/i,n=R/i;else if(T>M)if(T<0.01)i=0.707106781,r=0,n=0.707106781;else r=Math.sqrt(T),i=A/r,n=g/r;else if(M<0.01)i=0.707106781,r=0.707106781,n=0;else n=Math.sqrt(M),i=R/n,r=g/n;return this.set(i,r,n,t),this}let m=Math.sqrt((y-d)*(y-d)+(u-x)*(u-x)+(f-c)*(f-c));if(Math.abs(m)<0.001)m=1;return this.x=(y-d)/m,this.y=(u-x)/m,this.z=(f-c)/m,this.w=Math.acos((l+h+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=tt(this.x,e.x,t.x),this.y=tt(this.y,e.y,t.y),this.z=tt(this.z,e.z,t.z),this.w=tt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=tt(this.x,e,t),this.y=tt(this.y,e,t),this.z=tt(this.z,e,t),this.w=tt(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(tt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class wo extends si{constructor(e=1,t=1,i={}){super();i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ht,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Mt(0,0,e,t),this.scissorTest=!1,this.viewport=new Mt(0,0,e,t),this.textures=[];let r=i.count;for(let n=0;n<r;n++)this.textures[n]=new At({width:e,height:t,depth:i.depth}),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Ht,generateMipmaps:!1,flipY:!1,internalFormat:null};if(e.mapping!==void 0)t.mapping=e.mapping;if(e.wrapS!==void 0)t.wrapS=e.wrapS;if(e.wrapT!==void 0)t.wrapT=e.wrapT;if(e.wrapR!==void 0)t.wrapR=e.wrapR;if(e.magFilter!==void 0)t.magFilter=e.magFilter;if(e.minFilter!==void 0)t.minFilter=e.minFilter;if(e.format!==void 0)t.format=e.format;if(e.type!==void 0)t.type=e.type;if(e.anisotropy!==void 0)t.anisotropy=e.anisotropy;if(e.colorSpace!==void 0)t.colorSpace=e.colorSpace;if(e.flipY!==void 0)t.flipY=e.flipY;if(e.generateMipmaps!==void 0)t.generateMipmaps=e.generateMipmaps;if(e.mipmapsAutoUpdate!==void 0)t.mipmapsAutoUpdate=e.mipmapsAutoUpdate;if(e.internalFormat!==void 0)t.internalFormat=e.internalFormat;for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){if(this._depthTexture!==null&&this._depthTexture.renderTarget===this)this._depthTexture.renderTarget=null;if(e!==null&&e.renderTarget===null)e.renderTarget=this;this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,n=this.textures.length;r<n;r++)if(this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0)this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let r=Object.assign({},e.textures[t].image);this.textures[t].source=new mr(r)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Lt extends wo{constructor(e=1,t=1,i={}){super(e,t,i);this.isWebGLRenderTarget=!0}}class fn extends At{constructor(e=null,t=1,i=1,r=1){super(null);this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Ot,this.minFilter=Ot,this.wrapR=vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class ss extends At{constructor(e=null,t=1,i=1,r=1){super(null);this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Ot,this.minFilter=Ot,this.wrapR=vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}class Ye{static{this.prototype.isMatrix4=!0}constructor(e,t,i,r,n,s,o,a,l,c,u,f,h,d,x,y){if(this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0)this.set(e,t,i,r,n,s,o,a,l,c,u,f,h,d,x,y)}set(e,t,i,r,n,s,o,a,l,c,u,f,h,d,x,y){let p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=r,p[1]=n,p[5]=s,p[9]=o,p[13]=a,p[2]=l,p[6]=c,p[10]=u,p[14]=f,p[3]=h,p[7]=d,p[11]=x,p[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ye().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){if(this.determinantAffine()===0)return e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this;return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,i=e.elements,r=1/os.setFromMatrixColumn(e,0).length(),n=1/os.setFromMatrixColumn(e,1).length(),s=1/os.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*n,t[5]=i[5]*n,t[6]=i[6]*n,t[7]=0,t[8]=i[8]*s,t[9]=i[9]*s,t[10]=i[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,{x:i,y:r,z:n}=e,s=Math.cos(i),o=Math.sin(i),a=Math.cos(r),l=Math.sin(r),c=Math.cos(n),u=Math.sin(n);if(e.order==="XYZ"){let f=s*c,h=s*u,d=o*c,x=o*u;t[0]=a*c,t[4]=-a*u,t[8]=l,t[1]=h+d*l,t[5]=f-x*l,t[9]=-o*a,t[2]=x-f*l,t[6]=d+h*l,t[10]=s*a}else if(e.order==="YXZ"){let f=a*c,h=a*u,d=l*c,x=l*u;t[0]=f+x*o,t[4]=d*o-h,t[8]=s*l,t[1]=s*u,t[5]=s*c,t[9]=-o,t[2]=h*o-d,t[6]=x+f*o,t[10]=s*a}else if(e.order==="ZXY"){let f=a*c,h=a*u,d=l*c,x=l*u;t[0]=f-x*o,t[4]=-s*u,t[8]=d+h*o,t[1]=h+d*o,t[5]=s*c,t[9]=x-f*o,t[2]=-s*l,t[6]=o,t[10]=s*a}else if(e.order==="ZYX"){let f=s*c,h=s*u,d=o*c,x=o*u;t[0]=a*c,t[4]=d*l-h,t[8]=f*l+x,t[1]=a*u,t[5]=x*l+f,t[9]=h*l-d,t[2]=-l,t[6]=o*a,t[10]=s*a}else if(e.order==="YZX"){let f=s*a,h=s*l,d=o*a,x=o*l;t[0]=a*c,t[4]=x-f*u,t[8]=d*u+h,t[1]=u,t[5]=s*c,t[9]=-o*c,t[2]=-l*c,t[6]=h*u+d,t[10]=f-x*u}else if(e.order==="XZY"){let f=s*a,h=s*l,d=o*a,x=o*l;t[0]=a*c,t[4]=-u,t[8]=l*c,t[1]=f*u+x,t[5]=s*c,t[9]=h*u-d,t[2]=d*u-h,t[6]=o*c,t[10]=x*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Dm,e,Nm)}lookAt(e,t,i){let r=this.elements;if(zi.subVectors(e,t),zi.lengthSq()===0)zi.z=1;if(zi.normalize(),Or.crossVectors(i,zi),Or.lengthSq()===0){if(Math.abs(i.z)===1)zi.x+=0.0001;else zi.z+=0.0001;zi.normalize(),Or.crossVectors(i,zi)}return Or.normalize(),Fa.crossVectors(zi,Or),r[0]=Or.x,r[4]=Fa.x,r[8]=zi.x,r[1]=Or.y,r[5]=Fa.y,r[9]=zi.y,r[2]=Or.z,r[6]=Fa.z,r[10]=zi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,n=this.elements,s=i[0],o=i[4],a=i[8],l=i[12],c=i[1],u=i[5],f=i[9],h=i[13],d=i[2],x=i[6],y=i[10],p=i[14],m=i[3],b=i[7],T=i[11],M=i[15],A=r[0],R=r[4],g=r[8],S=r[12],P=r[1],V=r[5],I=r[9],U=r[13],j=r[2],C=r[6],Y=r[10],Q=r[14],G=r[3],ge=r[7],X=r[11],te=r[15];return n[0]=s*A+o*P+a*j+l*G,n[4]=s*R+o*V+a*C+l*ge,n[8]=s*g+o*I+a*Y+l*X,n[12]=s*S+o*U+a*Q+l*te,n[1]=c*A+u*P+f*j+h*G,n[5]=c*R+u*V+f*C+h*ge,n[9]=c*g+u*I+f*Y+h*X,n[13]=c*S+u*U+f*Q+h*te,n[2]=d*A+x*P+y*j+p*G,n[6]=d*R+x*V+y*C+p*ge,n[10]=d*g+x*I+y*Y+p*X,n[14]=d*S+x*U+y*Q+p*te,n[3]=m*A+b*P+T*j+M*G,n[7]=m*R+b*V+T*C+M*ge,n[11]=m*g+b*I+T*Y+M*X,n[15]=m*S+b*U+T*Q+M*te,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],r=e[8],n=e[12],s=e[1],o=e[5],a=e[9],l=e[13],c=e[2],u=e[6],f=e[10],h=e[14],d=e[3],x=e[7],y=e[11],p=e[15],m=a*h-l*f,b=o*h-l*u,T=o*f-a*u,M=s*h-l*c,A=s*f-a*c,R=s*u-o*c;return t*(x*m-y*b+p*T)-i*(d*m-y*M+p*A)+r*(d*b-x*M+p*R)-n*(d*T-x*A+y*R)}determinantAffine(){let e=this.elements,t=e[0],i=e[4],r=e[8],n=e[1],s=e[5],o=e[9],a=e[2],l=e[6],c=e[10];return t*(s*c-o*l)-i*(n*c-o*a)+r*(n*l-s*a)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let r=this.elements;if(e.isVector3)r[12]=e.x,r[13]=e.y,r[14]=e.z;else r[12]=e,r[13]=t,r[14]=i;return this}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],n=e[3],s=e[4],o=e[5],a=e[6],l=e[7],c=e[8],u=e[9],f=e[10],h=e[11],d=e[12],x=e[13],y=e[14],p=e[15],m=t*o-i*s,b=t*a-r*s,T=t*l-n*s,M=i*a-r*o,A=i*l-n*o,R=r*l-n*a,g=c*x-u*d,S=c*y-f*d,P=c*p-h*d,V=u*y-f*x,I=u*p-h*x,U=f*p-h*y,j=m*U-b*I+T*V+M*P-A*S+R*g;if(j===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let C=1/j;return e[0]=(o*U-a*I+l*V)*C,e[1]=(r*I-i*U-n*V)*C,e[2]=(x*R-y*A+p*M)*C,e[3]=(f*A-u*R-h*M)*C,e[4]=(a*P-s*U-l*S)*C,e[5]=(t*U-r*P+n*S)*C,e[6]=(y*T-d*R-p*b)*C,e[7]=(c*R-f*T+h*b)*C,e[8]=(s*I-o*P+l*g)*C,e[9]=(i*P-t*I-n*g)*C,e[10]=(d*A-x*T+p*m)*C,e[11]=(u*T-c*A-h*m)*C,e[12]=(o*S-s*V-a*g)*C,e[13]=(t*V-i*S+r*g)*C,e[14]=(x*b-d*M-y*m)*C,e[15]=(c*M-u*b+f*m)*C,this}scale(e){let t=this.elements,{x:i,y:r,z:n}=e;return t[0]*=i,t[4]*=r,t[8]*=n,t[1]*=i,t[5]*=r,t[9]*=n,t[2]*=i,t[6]*=r,t[10]*=n,t[3]*=i,t[7]*=r,t[11]*=n,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){if(e.isVector3)this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1);else this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1);return this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),r=Math.sin(t),n=1-i,{x:s,y:o,z:a}=e,l=n*s,c=n*o;return this.set(l*s+i,l*o-r*a,l*a+r*o,0,l*o+r*a,c*o+i,c*a-r*s,0,l*a-r*o,c*a+r*s,n*a*a+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,n,s){return this.set(1,i,n,0,e,1,s,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){let r=this.elements,{_x:n,_y:s,_z:o,_w:a}=t,l=n+n,c=s+s,u=o+o,f=n*l,h=n*c,d=n*u,x=s*c,y=s*u,p=o*u,m=a*l,b=a*c,T=a*u,{x:M,y:A,z:R}=i;return r[0]=(1-(x+p))*M,r[1]=(h+T)*M,r[2]=(d-b)*M,r[3]=0,r[4]=(h-T)*A,r[5]=(1-(f+p))*A,r[6]=(y+m)*A,r[7]=0,r[8]=(d+b)*R,r[9]=(y-m)*R,r[10]=(1-(f+x))*R,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let n=this.determinantAffine();if(n===0)return i.set(1,1,1),t.identity(),this;let s=os.set(r[0],r[1],r[2]).length(),o=os.set(r[4],r[5],r[6]).length(),a=os.set(r[8],r[9],r[10]).length();if(n<0)s=-s;hr.copy(this);let l=1/s,c=1/o,u=1/a;return hr.elements[0]*=l,hr.elements[1]*=l,hr.elements[2]*=l,hr.elements[4]*=c,hr.elements[5]*=c,hr.elements[6]*=c,hr.elements[8]*=u,hr.elements[9]*=u,hr.elements[10]*=u,t.setFromRotationMatrix(hr),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,n,s,o=fi,a=!1){let l=this.elements,c=2*n/(t-e),u=2*n/(i-r),f=(t+e)/(t-e),h=(i+r)/(i-r),d,x;if(a)d=n/(s-n),x=s*n/(s-n);else if(o===fi)d=-(s+n)/(s-n),x=-2*s*n/(s-n);else if(o===pr)d=-s/(s-n),x=-s*n/(s-n);else throw Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,n,s,o=fi,a=!1){let l=this.elements,c=2/(t-e),u=2/(i-r),f=-(t+e)/(t-e),h=-(i+r)/(i-r),d,x;if(a)d=1/(s-n),x=s/(s-n);else if(o===fi)d=-2/(s-n),x=-(s+n)/(s-n);else if(o===pr)d=-1/(s-n),x=-n/(s-n);else throw Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=0,l[12]=f,l[1]=0,l[5]=u,l[9]=0,l[13]=h,l[2]=0,l[6]=0,l[10]=d,l[14]=x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}var os=new w,hr=new Ye,Dm=new w(0,0,0),Nm=new w(1,1,1),Or=new w,Fa=new w,zi=new w;var Oh=new Ye,zh=new pi;class Si{constructor(e=0,t=0,i=0,r=Si.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let r=e.elements,n=r[0],s=r[4],o=r[8],a=r[1],l=r[5],c=r[9],u=r[2],f=r[6],h=r[10];switch(t){case"XYZ":if(this._y=Math.asin(tt(o,-1,1)),Math.abs(o)<0.9999999)this._x=Math.atan2(-c,h),this._z=Math.atan2(-s,n);else this._x=Math.atan2(f,l),this._z=0;break;case"YXZ":if(this._x=Math.asin(-tt(c,-1,1)),Math.abs(c)<0.9999999)this._y=Math.atan2(o,h),this._z=Math.atan2(a,l);else this._y=Math.atan2(-u,n),this._z=0;break;case"ZXY":if(this._x=Math.asin(tt(f,-1,1)),Math.abs(f)<0.9999999)this._y=Math.atan2(-u,h),this._z=Math.atan2(-s,l);else this._y=0,this._z=Math.atan2(a,n);break;case"ZYX":if(this._y=Math.asin(-tt(u,-1,1)),Math.abs(u)<0.9999999)this._x=Math.atan2(f,h),this._z=Math.atan2(a,n);else this._x=0,this._z=Math.atan2(-s,l);break;case"YZX":if(this._z=Math.asin(tt(a,-1,1)),Math.abs(a)<0.9999999)this._x=Math.atan2(-c,l),this._y=Math.atan2(-u,n);else this._x=0,this._y=Math.atan2(o,h);break;case"XZY":if(this._z=Math.asin(-tt(s,-1,1)),Math.abs(s)<0.9999999)this._x=Math.atan2(f,l),this._y=Math.atan2(o,n);else this._x=Math.atan2(-c,h),this._y=0;break;default:ye("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}if(this._order=t,i===!0)this._onChangeCallback();return this}setFromQuaternion(e,t,i){return Oh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Oh,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return zh.setFromEuler(this),this.setFromQuaternion(zh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){if(this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0)this._order=e[3];return this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Si.DEFAULT_ORDER="XYZ";class dn{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}var Um=0,Gh=new w,as=new pi,Er=new Ye,Ba=new w,Ao=new w,Fm=new w,Bm=new pi,Vh=new w(1,0,0),kh=new w(0,1,0),Hh=new w(0,0,1),Wh={type:"added"},Om={type:"removed"},ls={type:"childadded",child:null},Yl={type:"childremoved",child:null};class nt extends si{constructor(){super();this.isObject3D=!0,Object.defineProperty(this,"id",{value:Um++}),this.uuid=di(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=nt.DEFAULT_UP.clone();let e=new w,t=new Si,i=new pi,r=new w(1,1,1);function n(){i.setFromEuler(t,!1)}function s(){t.setFromQuaternion(i,void 0,!1)}t._onChange(n),i._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ye},normalMatrix:{value:new Qe}}),this.matrix=new Ye,this.matrixWorld=new Ye,this.matrixAutoUpdate=nt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=nt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new dn,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null)this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return as.setFromAxisAngle(e,t),this.quaternion.multiply(as),this}rotateOnWorldAxis(e,t){return as.setFromAxisAngle(e,t),this.quaternion.premultiply(as),this}rotateX(e){return this.rotateOnAxis(Vh,e)}rotateY(e){return this.rotateOnAxis(kh,e)}rotateZ(e){return this.rotateOnAxis(Hh,e)}translateOnAxis(e,t){return Gh.copy(e).applyQuaternion(this.quaternion),this.position.add(Gh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Vh,e)}translateY(e){return this.translateOnAxis(kh,e)}translateZ(e){return this.translateOnAxis(Hh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Er.copy(this.matrixWorld).invert())}lookAt(e,t,i){if(e.isVector3)Ba.copy(e);else Ba.set(e,t,i);let r=this.parent;if(this.updateWorldMatrix(!0,!1),Ao.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight)Er.lookAt(Ao,Ba,this.up);else Er.lookAt(Ba,Ao,this.up);if(this.quaternion.setFromRotationMatrix(Er),r)Er.extractRotation(r.matrixWorld),as.setFromRotationMatrix(Er),this.quaternion.premultiply(as.invert())}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}if(e===this)return Be("Object3D.add: object can't be added as a child of itself.",e),this;if(e&&e.isObject3D)e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Wh),ls.child=e,this.dispatchEvent(ls),ls.child=null;else Be("Object3D.add: object not an instance of THREE.Object3D.",e);return this}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);if(t!==-1)e.parent=null,this.children.splice(t,1),e.dispatchEvent(Om),Yl.child=e,this.dispatchEvent(Yl),Yl.child=null;return this}removeFromParent(){let e=this.parent;if(e!==null)e.remove(this);return this}clear(){return this.remove(...this.children)}attach(e){if(this.updateWorldMatrix(!0,!1),Er.copy(this.matrixWorld).invert(),e.parent!==null)e.parent.updateWorldMatrix(!0,!1),Er.multiply(e.parent.matrixWorld);return e.applyMatrix4(Er),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Wh),ls.child=e,this.dispatchEvent(ls),ls.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){let s=this.children[i].getObjectByProperty(e,t);if(s!==void 0)return s}return}getObjectsByProperty(e,t,i=[]){if(this[e]===t)i.push(this);let r=this.children;for(let n=0,s=r.length;n<s;n++)r[n].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ao,e,Fm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ao,Bm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;if(t!==null)e(t),t.traverseAncestors(e)}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let{x:t,y:i,z:r}=e,n=this.matrix.elements;n[12]+=t-n[0]*t-n[4]*i-n[8]*r,n[13]+=i-n[1]*t-n[5]*i-n[9]*r,n[14]+=r-n[2]*t-n[6]*i-n[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||e){if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,e=!0}let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){let r=this.parent;if(e===!0&&r!==null)r.updateWorldMatrix(!0,!1);if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||i){if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,i=!0}if(t===!0){let n=this.children;for(let s=0,o=n.length;s<o;s++)n[s].updateWorldMatrix(!1,!0,i)}}toJSON(e){let t=e===void 0||typeof e==="string",i={};if(t)e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"};let r={};if(r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0)r.userData=this.userData;if(r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null)r.pivot=this.pivot.toArray();if(this.morphTargetDictionary!==void 0)r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary);if(this.morphTargetInfluences!==void 0)r.morphTargetInfluences=this.morphTargetInfluences.slice();if(this.isInstancedMesh){if(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null)r.instanceColor=this.instanceColor.toJSON()}if(this.isBatchedMesh){if(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map((o)=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map((o)=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null)r.colorsTexture=this._colorsTexture.toJSON(e);if(this.boundingSphere!==null)r.boundingSphere=this.boundingSphere.toJSON();if(this.boundingBox!==null)r.boundingBox=this.boundingBox.toJSON()}function n(o,a){if(o[a.uuid]===void 0)o[a.uuid]=a.toJSON(e);return a.uuid}if(this.isScene){if(this.background){if(this.background.isColor)r.background=this.background.toJSON();else if(this.background.isTexture)r.background=this.background.toJSON(e).uuid}if(this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0)r.environment=this.environment.toJSON(e).uuid}else if(this.isMesh||this.isLine||this.isPoints){r.geometry=n(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let a=o.shapes;if(Array.isArray(a))for(let l=0,c=a.length;l<c;l++){let u=a[l];n(e.shapes,u)}else n(e.shapes,a)}}if(this.isSkinnedMesh){if(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0)n(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid}if(this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let a=0,l=this.material.length;a<l;a++)o.push(n(e.materials,this.material[a]));r.material=o}else r.material=n(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){let a=this.animations[o];r.animations.push(n(e.animations,a))}}if(t){let o=s(e.geometries),a=s(e.materials),l=s(e.textures),c=s(e.images),u=s(e.shapes),f=s(e.skeletons),h=s(e.animations),d=s(e.nodes);if(o.length>0)i.geometries=o;if(a.length>0)i.materials=a;if(l.length>0)i.textures=l;if(c.length>0)i.images=c;if(u.length>0)i.shapes=u;if(f.length>0)i.skeletons=f;if(h.length>0)i.animations=h;if(d.length>0)i.nodes=d}return i.object=r,i;function s(o){let a=[];for(let l in o){let c=o[l];delete c.metadata,a.push(c)}return a}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let r=e.children[i];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}nt.DEFAULT_UP=new w(0,1,0);nt.DEFAULT_MATRIX_AUTO_UPDATE=!0;nt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Qi extends nt{constructor(){super();this.isGroup=!0,this.type="Group"}}var zm={type:"move"};class cs{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){if(this._hand===null)this._hand=new Qi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1};return this._hand}getTargetRaySpace(){if(this._targetRay===null)this._targetRay=new Qi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new w,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new w;return this._targetRay}getGripSpace(){if(this._grip===null)this._grip=new Qi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new w,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new w,this._grip.eventsEnabled=!1;return this._grip}dispatchEvent(e){if(this._targetRay!==null)this._targetRay.dispatchEvent(e);if(this._grip!==null)this._grip.dispatchEvent(e);if(this._hand!==null)this._hand.dispatchEvent(e);return this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){if(this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null)this._targetRay.visible=!1;if(this._grip!==null)this._grip.visible=!1;if(this._hand!==null)this._hand.visible=!1;return this}update(e,t,i){let r=null,n=null,s=null,o=this._targetRay,a=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){s=!0;for(let x of e.hand.values()){let y=t.getJointPose(x,i),p=this._getHandJoint(l,x);if(y!==null)p.matrix.fromArray(y.transform.matrix),p.matrix.decompose(p.position,p.quaternion,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=y.radius;p.visible=y!==null}let c=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],f=c.position.distanceTo(u.position),h=0.02,d=0.005;if(l.inputState.pinching&&f>h+d)l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this});else if(!l.inputState.pinching&&f<=h-d)l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this})}else if(a!==null&&e.gripSpace){if(n=t.getPose(e.gripSpace,i),n!==null){if(a.matrix.fromArray(n.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,n.linearVelocity)a.hasLinearVelocity=!0,a.linearVelocity.copy(n.linearVelocity);else a.hasLinearVelocity=!1;if(n.angularVelocity)a.hasAngularVelocity=!0,a.angularVelocity.copy(n.angularVelocity);else a.hasAngularVelocity=!1;if(a.eventsEnabled)a.dispatchEvent({type:"gripUpdated",data:e,target:this})}}if(o!==null){if(r=t.getPose(e.targetRaySpace,i),r===null&&n!==null)r=n;if(r!==null){if(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity)o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity);else o.hasLinearVelocity=!1;if(r.angularVelocity)o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity);else o.hasAngularVelocity=!1;this.dispatchEvent(zm)}}}if(o!==null)o.visible=r!==null;if(a!==null)a.visible=n!==null;if(l!==null)l.visible=s!==null;return this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new Qi;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}var Xh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},zr={h:0,s:0,l:0},Oa={h:0,s:0,l:0};function Zl(e,t,i){if(i<0)i+=1;if(i>1)i-=1;if(i<0.16666666666666666)return e+(t-e)*6*i;if(i<0.5)return t;if(i<0.6666666666666666)return e+(t-e)*6*(0.6666666666666666-i);return e}class de{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let r=e;if(r&&r.isColor)this.copy(r);else if(typeof r==="number")this.setHex(r);else if(typeof r==="string")this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=qt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,rt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=rt.workingColorSpace){return this.r=e,this.g=t,this.b=i,rt.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=rt.workingColorSpace){if(e=Dh(e,1),t=tt(t,0,1),i=tt(i,0,1),t===0)this.r=this.g=this.b=i;else{let n=i<=0.5?i*(1+t):i+t-i*t,s=2*i-n;this.r=Zl(s,n,e+0.3333333333333333),this.g=Zl(s,n,e),this.b=Zl(s,n,e-0.3333333333333333)}return rt.colorSpaceToWorking(this,r),this}setStyle(e,t=qt){function i(n){if(n===void 0)return;if(parseFloat(n)<1)ye("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let n,s=r[1],o=r[2];switch(s){case"rgb":case"rgba":if(n=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(n[4]),this.setRGB(Math.min(255,parseInt(n[1],10))/255,Math.min(255,parseInt(n[2],10))/255,Math.min(255,parseInt(n[3],10))/255,t);if(n=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(n[4]),this.setRGB(Math.min(100,parseFloat(n[1]))/100,Math.min(100,parseFloat(n[2]))/100,Math.min(100,parseFloat(n[3]))/100,t);break;case"hsl":case"hsla":if(n=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(n[4]),this.setHSL(parseFloat(n[1])/360,parseFloat(n[2])/100,parseFloat(n[3])/100,t);break;default:ye("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let n=r[1],s=n.length;if(s===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);else if(s===6)return this.setHex(parseInt(n,16),t);else ye("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=qt){let i=Xh[e.toLowerCase()];if(i!==void 0)this.setHex(i,t);else ye("Color: Unknown color "+e);return this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=cr(e.r),this.g=cr(e.g),this.b=cr(e.b),this}copyLinearToSRGB(e){return this.r=un(e.r),this.g=un(e.g),this.b=un(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=qt){return rt.workingToColorSpace(bi.copy(this),e),Math.round(tt(bi.r*255,0,255))*65536+Math.round(tt(bi.g*255,0,255))*256+Math.round(tt(bi.b*255,0,255))}getHexString(e=qt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=rt.workingColorSpace){rt.workingToColorSpace(bi.copy(this),t);let{r:i,g:r,b:n}=bi,s=Math.max(i,r,n),o=Math.min(i,r,n),a,l,c=(o+s)/2;if(o===s)a=0,l=0;else{let u=s-o;switch(l=c<=0.5?u/(s+o):u/(2-s-o),s){case i:a=(r-n)/u+(r<n?6:0);break;case r:a=(n-i)/u+2;break;case n:a=(i-r)/u+4;break}a/=6}return e.h=a,e.s=l,e.l=c,e}getRGB(e,t=rt.workingColorSpace){return rt.workingToColorSpace(bi.copy(this),t),e.r=bi.r,e.g=bi.g,e.b=bi.b,e}getStyle(e=qt){rt.workingToColorSpace(bi.copy(this),e);let{r:t,g:i,b:r}=bi;if(e!==qt)return`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`;return`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(zr),this.setHSL(zr.h+e,zr.s+t,zr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(zr),e.getHSL(Oa);let i=La(zr.h,Oa.h,t),r=La(zr.s,Oa.s,t),n=La(zr.l,Oa.l,t);return this.setHSL(i,r,n),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,r=this.b,n=e.elements;return this.r=n[0]*t+n[3]*i+n[6]*r,this.g=n[1]*t+n[4]*i+n[7]*r,this.b=n[2]*t+n[5]*i+n[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}var bi=new de;de.NAMES=Xh;class hs{constructor(e,t=1,i=1000){this.isFog=!0,this.name="",this.color=new de(e),this.near=t,this.far=i}clone(){return new hs(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class pn extends nt{constructor(){super();if(this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Si,this.environmentIntensity=1,this.environmentRotation=new Si,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);if(this.fog!==null)t.object.fog=this.fog.toJSON();return t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}var ur=new w,wr=new w,Jl=new w,Ar=new w,us=new w,fs=new w,qh=new w,Kl=new w,Ql=new w,$l=new w,jl=new Mt,ec=new Mt,tc=new Mt;class Ti{constructor(e=new w,t=new w,i=new w){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),ur.subVectors(e,t),r.cross(ur);let n=r.lengthSq();if(n>0)return r.multiplyScalar(1/Math.sqrt(n));return r.set(0,0,0)}static getBarycoord(e,t,i,r,n){ur.subVectors(r,t),wr.subVectors(i,t),Jl.subVectors(e,t);let s=ur.dot(ur),o=ur.dot(wr),a=ur.dot(Jl),l=wr.dot(wr),c=wr.dot(Jl),u=s*l-o*o;if(u===0)return n.set(0,0,0),null;let f=1/u,h=(l*a-o*c)*f,d=(s*c-o*a)*f;return n.set(1-h-d,d,h)}static containsPoint(e,t,i,r){if(this.getBarycoord(e,t,i,r,Ar)===null)return!1;return Ar.x>=0&&Ar.y>=0&&Ar.x+Ar.y<=1}static getInterpolation(e,t,i,r,n,s,o,a){if(this.getBarycoord(e,t,i,r,Ar)===null){if(a.x=0,a.y=0,"z"in a)a.z=0;if("w"in a)a.w=0;return null}return a.setScalar(0),a.addScaledVector(n,Ar.x),a.addScaledVector(s,Ar.y),a.addScaledVector(o,Ar.z),a}static getInterpolatedAttribute(e,t,i,r,n,s){return jl.setScalar(0),ec.setScalar(0),tc.setScalar(0),jl.fromBufferAttribute(e,t),ec.fromBufferAttribute(e,i),tc.fromBufferAttribute(e,r),s.setScalar(0),s.addScaledVector(jl,n.x),s.addScaledVector(ec,n.y),s.addScaledVector(tc,n.z),s}static isFrontFacing(e,t,i,r){return ur.subVectors(i,t),wr.subVectors(e,t),ur.cross(wr).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ur.subVectors(this.c,this.b),wr.subVectors(this.a,this.b),ur.cross(wr).length()*0.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(0.3333333333333333)}getNormal(e){return Ti.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ti.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,n){return Ti.getInterpolation(e,this.a,this.b,this.c,t,i,r,n)}containsPoint(e){return Ti.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ti.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,r=this.b,n=this.c,s,o;us.subVectors(r,i),fs.subVectors(n,i),Kl.subVectors(e,i);let a=us.dot(Kl),l=fs.dot(Kl);if(a<=0&&l<=0)return t.copy(i);Ql.subVectors(e,r);let c=us.dot(Ql),u=fs.dot(Ql);if(c>=0&&u<=c)return t.copy(r);let f=a*u-c*l;if(f<=0&&a>=0&&c<=0&&a-c>0)return s=a/(a-c),t.copy(i).addScaledVector(us,s);$l.subVectors(e,n);let h=us.dot($l),d=fs.dot($l);if(d>=0&&h<=d)return t.copy(n);let x=h*l-a*d;if(x<=0&&l>=0&&d<=0)return o=l/(l-d),t.copy(i).addScaledVector(fs,o);let y=c*d-h*u;if(y<=0&&u-c>=0&&h-d>=0)return qh.subVectors(n,r),o=(u-c)/(u-c+(h-d)),t.copy(r).addScaledVector(qh,o);let p=1/(y+x+f);return s=x*p,o=f*p,t.copy(i).addScaledVector(us,s).addScaledVector(fs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Ei{constructor(e=new w(1/0,1/0,1/0),t=new w(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(fr.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(fr.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=fr.copy(t).multiplyScalar(0.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(0.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let n=i.getAttribute("position");if(t===!0&&n!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let s=0,o=n.count;s<o;s++){if(e.isMesh===!0)e.getVertexPosition(s,fr);else fr.fromBufferAttribute(n,s);fr.applyMatrix4(e.matrixWorld),this.expandByPoint(fr)}else{if(e.boundingBox!==void 0){if(e.boundingBox===null)e.computeBoundingBox();za.copy(e.boundingBox)}else{if(i.boundingBox===null)i.computeBoundingBox();za.copy(i.boundingBox)}za.applyMatrix4(e.matrixWorld),this.union(za)}}let r=e.children;for(let n=0,s=r.length;n<s;n++)this.expandByObject(r[n],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,fr),fr.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;if(e.normal.x>0)t=e.normal.x*this.min.x,i=e.normal.x*this.max.x;else t=e.normal.x*this.max.x,i=e.normal.x*this.min.x;if(e.normal.y>0)t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y;else t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y;if(e.normal.z>0)t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z;else t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z;return t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ro),Ga.subVectors(this.max,Ro),ds.subVectors(e.a,Ro),ps.subVectors(e.b,Ro),ms.subVectors(e.c,Ro),Gr.subVectors(ps,ds),Vr.subVectors(ms,ps),mn.subVectors(ds,ms);let t=[0,-Gr.z,Gr.y,0,-Vr.z,Vr.y,0,-mn.z,mn.y,Gr.z,0,-Gr.x,Vr.z,0,-Vr.x,mn.z,0,-mn.x,-Gr.y,Gr.x,0,-Vr.y,Vr.x,0,-mn.y,mn.x,0];if(!ic(t,ds,ps,ms,Ga))return!1;if(t=[1,0,0,0,1,0,0,0,1],!ic(t,ds,ps,ms,Ga))return!1;return Va.crossVectors(Gr,Vr),t=[Va.x,Va.y,Va.z],ic(t,ds,ps,ms,Ga)}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,fr).distanceTo(e)}getBoundingSphere(e){if(this.isEmpty())e.makeEmpty();else this.getCenter(e.center),e.radius=this.getSize(fr).length()*0.5;return e}intersect(e){if(this.min.max(e.min),this.max.min(e.max),this.isEmpty())this.makeEmpty();return this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){if(this.isEmpty())return this;return Rr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Rr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Rr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Rr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Rr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Rr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Rr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Rr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Rr),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}var Rr=[new w,new w,new w,new w,new w,new w,new w,new w],fr=new w,za=new Ei,ds=new w,ps=new w,ms=new w,Gr=new w,Vr=new w,mn=new w,Ro=new w,Ga=new w,Va=new w,gn=new w;function ic(e,t,i,r,n){for(let s=0,o=e.length-3;s<=o;s+=3){gn.fromArray(e,s);let a=n.x*Math.abs(gn.x)+n.y*Math.abs(gn.y)+n.z*Math.abs(gn.z),l=t.dot(gn),c=i.dot(gn),u=r.dot(gn);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}var ii=new w,ka=new H,Gm=0;class ei extends si{constructor(e,t,i=!1){super();if(Array.isArray(e))throw TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Gm++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Eo,this.updateRanges=[],this.gpuType=jt,this.version=0,this._normalizationScale=e!==void 0?rs(e):void 0}onUploadCallback(){}set needsUpdate(e){if(e===!0)this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,n=this.itemSize;r<n;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)ka.fromBufferAttribute(this,t),ka.applyMatrix3(e),this.setXY(t,ka.x,ka.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)ii.fromBufferAttribute(this,t),ii.applyMatrix3(e),this.setXYZ(t,ii.x,ii.y,ii.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)ii.fromBufferAttribute(this,t),ii.applyMatrix4(e),this.setXYZ(t,ii.x,ii.y,ii.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)ii.fromBufferAttribute(this,t),ii.applyNormalMatrix(e),this.setXYZ(t,ii.x,ii.y,ii.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)ii.fromBufferAttribute(this,t),ii.transformDirection(e),this.setXYZ(t,ii.x,ii.y,ii.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];if(this.normalized)i=this._denormalize(i);return i}setComponent(e,t,i){if(this.normalized)i=this._normalize(i);return this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];if(this.normalized)t=this._denormalize(t);return t}setX(e,t){if(this.normalized)t=this._normalize(t);return this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];if(this.normalized)t=this._denormalize(t);return t}setY(e,t){if(this.normalized)t=this._normalize(t);return this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];if(this.normalized)t=this._denormalize(t);return t}setZ(e,t){if(this.normalized)t=this._normalize(t);return this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];if(this.normalized)t=this._denormalize(t);return t}setW(e,t){if(this.normalized)t=this._normalize(t);return this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){if(e*=this.itemSize,this.normalized)t=this._normalize(t),i=this._normalize(i);return this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){if(e*=this.itemSize,this.normalized)t=this._normalize(t),i=this._normalize(i),r=this._normalize(r);return this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,n){if(e*=this.itemSize,this.normalized)t=this._normalize(t),i=this._normalize(i),r=this._normalize(r),n=this._normalize(n);return this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=n,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Da(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):Na(e,this.array)}}class Co extends ei{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Po extends ei{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Ge extends ei{constructor(e,t,i){super(new Float32Array(e),t,i)}}var Vm=new Ei,Io=new w,rc=new w;class oi{constructor(e=new w,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;if(t!==void 0)i.copy(t);else Vm.setFromPoints(e).getCenter(i);let r=0;for(let n=0,s=e.length;n<s;n++)r=Math.max(r,i.distanceToSquared(e[n]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);if(t.copy(e),i>this.radius*this.radius)t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center);return t}getBoundingBox(e){if(this.isEmpty())return e.makeEmpty(),e;return e.set(this.center,this.center),e.expandByScalar(this.radius),e}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Io.subVectors(e,this.center);let t=Io.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),r=(i-this.radius)*0.5;this.center.addScaledVector(Io,r/i),this.radius+=r}return this}union(e){if(e.isEmpty())return this;if(this.isEmpty())return this.copy(e),this;if(this.center.equals(e.center)===!0)this.radius=Math.max(this.radius,e.radius);else rc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Io.copy(e.center).add(rc)),this.expandByPoint(Io.copy(e.center).sub(rc));return this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}var km=0,$i=new Ye,nc=new nt,gs=new w,Gi=new Ei,Lo=new Ei,mi=new w;class Xe extends si{constructor(){super();this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:km++}),this.uuid=di(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){if(Array.isArray(e))this.index=new((Ch(e))?Po:Co)(e,1);else this.index=e;return this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;if(t!==void 0)t.applyMatrix4(e),t.needsUpdate=!0;let i=this.attributes.normal;if(i!==void 0){let n=new Qe().getNormalMatrix(e);i.applyNormalMatrix(n),i.needsUpdate=!0}let r=this.attributes.tangent;if(r!==void 0)r.transformDirection(e),r.needsUpdate=!0;if(this.boundingBox!==null)this.computeBoundingBox();if(this.boundingSphere!==null)this.computeBoundingSphere();return this._transformed=!0,this}applyQuaternion(e){return $i.makeRotationFromQuaternion(e),this.applyMatrix4($i),this}rotateX(e){return $i.makeRotationX(e),this.applyMatrix4($i),this}rotateY(e){return $i.makeRotationY(e),this.applyMatrix4($i),this}rotateZ(e){return $i.makeRotationZ(e),this.applyMatrix4($i),this}translate(e,t,i){return $i.makeTranslation(e,t,i),this.applyMatrix4($i),this}scale(e,t,i){return $i.makeScale(e,t,i),this.applyMatrix4($i),this}lookAt(e){return nc.lookAt(e),nc.updateMatrix(),this.applyMatrix4(nc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(gs).negate(),this.translate(gs.x,gs.y,gs.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let r=0,n=e.length;r<n;r++){let s=e[r];i.push(s.x,s.y,s.z||0)}this.setAttribute("position",new Ge(i,3))}else{let i=Math.min(e.length,t.count);for(let r=0;r<i;r++){let n=e[r];t.setXYZ(r,n.x,n.y,n.z||0)}if(e.length>t.count)ye("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.");t.needsUpdate=!0}return this}computeBoundingBox(){if(this.boundingBox===null)this.boundingBox=new Ei;let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Be("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new w(-1/0,-1/0,-1/0),new w(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){let n=t[i];if(Gi.setFromBufferAttribute(n),this.morphTargetsRelative)mi.addVectors(this.boundingBox.min,Gi.min),this.boundingBox.expandByPoint(mi),mi.addVectors(this.boundingBox.max,Gi.max),this.boundingBox.expandByPoint(mi);else this.boundingBox.expandByPoint(Gi.min),this.boundingBox.expandByPoint(Gi.max)}}else this.boundingBox.makeEmpty();if(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))Be('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){if(this.boundingSphere===null)this.boundingSphere=new oi;let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Be("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new w,1/0);return}if(e){let i=this.boundingSphere.center;if(Gi.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let o=t[n];if(Lo.setFromBufferAttribute(o),this.morphTargetsRelative)mi.addVectors(Gi.min,Lo.min),Gi.expandByPoint(mi),mi.addVectors(Gi.max,Lo.max),Gi.expandByPoint(mi);else Gi.expandByPoint(Lo.min),Gi.expandByPoint(Lo.max)}Gi.getCenter(i);let r=0;for(let n=0,s=e.count;n<s;n++)mi.fromBufferAttribute(e,n),r=Math.max(r,i.distanceToSquared(mi));if(t)for(let n=0,s=t.length;n<s;n++){let o=t[n],a=this.morphTargetsRelative;for(let l=0,c=o.count;l<c;l++){if(mi.fromBufferAttribute(o,l),a)gs.fromBufferAttribute(e,l),mi.add(gs);r=Math.max(r,i.distanceToSquared(mi))}}if(this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius))Be('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Be("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let{position:i,normal:r,uv:n}=t,s=this.getAttribute("tangent");if(s===void 0||s.count!==i.count)s=new ei(new Float32Array(4*i.count),4),this.setAttribute("tangent",s);let o=[],a=[],l=new Uint8Array(i.count);for(let S=0;S<i.count;S++)o[S]=new w,a[S]=new w;let c=new w,u=new w,f=new w,h=new H,d=new H,x=new H,y=new w,p=new w;function m(S,P,V){l[S]=l[P]=l[V]=1,c.fromBufferAttribute(i,S),u.fromBufferAttribute(i,P),f.fromBufferAttribute(i,V),h.fromBufferAttribute(n,S),d.fromBufferAttribute(n,P),x.fromBufferAttribute(n,V),u.sub(c),f.sub(c),d.sub(h),x.sub(h);let I=1/(d.x*x.y-x.x*d.y);if(!isFinite(I))return;y.copy(u).multiplyScalar(x.y).addScaledVector(f,-d.y).multiplyScalar(I),p.copy(f).multiplyScalar(d.x).addScaledVector(u,-x.x).multiplyScalar(I),o[S].add(y),o[P].add(y),o[V].add(y),a[S].add(p),a[P].add(p),a[V].add(p)}let b=this.groups;if(b.length===0)b=[{start:0,count:e.count}];for(let S=0,P=b.length;S<P;++S){let V=b[S],{start:I,count:U}=V;for(let j=I,C=I+U;j<C;j+=3)m(e.getX(j+0),e.getX(j+1),e.getX(j+2))}let T=new w,M=new w,A=new w,R=new w;function g(S){A.fromBufferAttribute(r,S),R.copy(A);let P=o[S];T.copy(P),T.sub(A.multiplyScalar(A.dot(P))).normalize(),M.crossVectors(R,P);let I=M.dot(a[S])<0?-1:1;s.setXYZW(S,T.x,T.y,T.z,I)}for(let S=0,P=i.count;S<P;++S)if(l[S])g(S);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new ei(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,h=i.count;f<h;f++)i.setXYZ(f,0,0,0);let r=new w,n=new w,s=new w,o=new w,a=new w,l=new w,c=new w,u=new w;if(e)for(let f=0,h=e.count;f<h;f+=3){let d=e.getX(f+0),x=e.getX(f+1),y=e.getX(f+2);r.fromBufferAttribute(t,d),n.fromBufferAttribute(t,x),s.fromBufferAttribute(t,y),c.subVectors(s,n),u.subVectors(r,n),c.cross(u),o.fromBufferAttribute(i,d),a.fromBufferAttribute(i,x),l.fromBufferAttribute(i,y),o.add(c),a.add(c),l.add(c),i.setXYZ(d,o.x,o.y,o.z),i.setXYZ(x,a.x,a.y,a.z),i.setXYZ(y,l.x,l.y,l.z)}else for(let f=0,h=t.count;f<h;f+=3)r.fromBufferAttribute(t,f+0),n.fromBufferAttribute(t,f+1),s.fromBufferAttribute(t,f+2),c.subVectors(s,n),u.subVectors(r,n),c.cross(u),i.setXYZ(f+0,c.x,c.y,c.z),i.setXYZ(f+1,c.x,c.y,c.z),i.setXYZ(f+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)mi.fromBufferAttribute(e,t),mi.normalize(),e.setXYZ(t,mi.x,mi.y,mi.z)}toNonIndexed(){function e(o,a){let{array:l,itemSize:c,normalized:u}=o,f=new l.constructor(a.length*c),h=0,d=0;for(let x=0,y=a.length;x<y;x++){if(o.isInterleavedBufferAttribute)h=a[x]*o.data.stride+o.offset;else h=a[x]*c;for(let p=0;p<c;p++)f[d++]=l[h++]}return new ei(f,c,u)}if(this.index===null)return ye("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new Xe,i=this.index.array,r=this.attributes;for(let o in r){let a=r[o],l=e(a,i);t.setAttribute(o,l)}let n=this.morphAttributes;for(let o in n){let a=[],l=n[o];for(let c=0,u=l.length;c<u;c++){let f=l[c],h=e(f,i);a.push(h)}t.morphAttributes[o]=a}t.morphTargetsRelative=this.morphTargetsRelative;let s=this.groups;for(let o=0,a=s.length;o<a;o++){let l=s[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0)e.userData=this.userData;if(this.parameters!==void 0&&this._transformed!==!0){let a=this.parameters;for(let l in a)if(a[l]!==void 0)e[l]=a[l];return e}e.data={attributes:{}};let t=this.index;if(t!==null)e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)};let i=this.attributes;for(let a in i){let l=i[a];e.data.attributes[a]=l.toJSON(e.data)}let r={},n=!1;for(let a in this.morphAttributes){let l=this.morphAttributes[a],c=[];for(let u=0,f=l.length;u<f;u++){let h=l[u];c.push(h.toJSON(e.data))}if(c.length>0)r[a]=c,n=!0}if(n)e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative;let s=this.groups;if(s.length>0)e.data.groups=JSON.parse(JSON.stringify(s));let o=this.boundingSphere;if(o!==null)e.data.boundingSphere=o.toJSON();return e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;if(i!==null)this.setIndex(i.clone());let r=e.attributes;for(let l in r){let c=r[l];this.setAttribute(l,c.clone(t))}let n=e.morphAttributes;for(let l in n){let c=[],u=n[l];for(let f=0,h=u.length;f<h;f++)c.push(u[f].clone(t));this.morphAttributes[l]=c}this.morphTargetsRelative=e.morphTargetsRelative;let s=e.groups;for(let l=0,c=s.length;l<c;l++){let u=s[l];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;if(o!==null)this.boundingBox=o.clone();let a=e.boundingSphere;if(a!==null)this.boundingSphere=a.clone();return this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class xs{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Eo,this.updateRanges=[],this.version=0,this.uuid=di()}onUploadCallback(){}set needsUpdate(e){if(e===!0)this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,n=this.stride;r<n;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){if(e.arrayBuffers===void 0)e.arrayBuffers={};let t=Yh(this.array);if(e.arrayBuffers[t]===void 0)e.arrayBuffers[t]=this.array.slice(0).buffer;let i=new this.array.constructor(e.arrayBuffers[t]),r=new this.constructor(i,this.stride);return r.setUsage(this.usage),r}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){if(e.arrayBuffers===void 0)e.arrayBuffers={};let t=Yh(this.array);if(e.arrayBuffers[t]===void 0)e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer));let i={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return i.usage=this.usage,i}}function Yh(e){if(e.buffer._uuid===void 0)e.buffer._uuid=di();if(e.byteOffset===0&&e.byteLength===e.buffer.byteLength)return e.buffer._uuid;return e.buffer._uuid+":"+e.byteOffset+":"+e.byteLength}var Pi=new w;class xn{constructor(e,t,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=r,this._normalizationScale=e!==void 0?rs(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Pi.fromBufferAttribute(this,t),Pi.applyMatrix4(e),this.setXYZ(t,Pi.x,Pi.y,Pi.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Pi.fromBufferAttribute(this,t),Pi.applyNormalMatrix(e),this.setXYZ(t,Pi.x,Pi.y,Pi.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Pi.fromBufferAttribute(this,t),Pi.transformDirection(e),this.setXYZ(t,Pi.x,Pi.y,Pi.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];if(this.normalized)i=this._denormalize(i);return i}setComponent(e,t,i){if(this.normalized)i=this._normalize(i);return this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){if(this.normalized)t=this._normalize(t);return this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){if(this.normalized)t=this._normalize(t);return this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){if(this.normalized)t=this._normalize(t);return this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){if(this.normalized)t=this._normalize(t);return this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];if(this.normalized)t=this._denormalize(t);return t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];if(this.normalized)t=this._denormalize(t);return t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];if(this.normalized)t=this._denormalize(t);return t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];if(this.normalized)t=this._denormalize(t);return t}setXY(e,t,i){if(e=e*this.data.stride+this.offset,this.normalized)t=this._normalize(t),i=this._normalize(i);return this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,r){if(e=e*this.data.stride+this.offset,this.normalized)t=this._normalize(t),i=this._normalize(i),r=this._normalize(r);return this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,t,i,r,n){if(e=e*this.data.stride+this.offset,this.normalized)t=this._normalize(t),i=this._normalize(i),r=this._normalize(r),n=this._normalize(n);return this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=n,this}clone(e){if(e===void 0){cn("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let r=i*this.data.stride+this.offset;for(let n=0;n<this.itemSize;n++)t.push(this.data.array[r+n])}return new ei(new this.array.constructor(t),this.itemSize,this.normalized)}else{if(e.interleavedBuffers===void 0)e.interleavedBuffers={};if(e.interleavedBuffers[this.data.uuid]===void 0)e.interleavedBuffers[this.data.uuid]=this.data.clone(e);return new xn(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}}toJSON(e){if(e===void 0){cn("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let r=i*this.data.stride+this.offset;for(let n=0;n<this.itemSize;n++)t.push(this.data.array[r+n])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else{if(e.interleavedBuffers===void 0)e.interleavedBuffers={};if(e.interleavedBuffers[this.data.uuid]===void 0)e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e);return{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Da(e,this.data.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):Na(e,this.data.array)}}var sc=new w,Hm=new w,Wm=new Qe;class Ii{constructor(e=new w(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let r=sc.subVectors(i,t).cross(Hm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let r=e.delta(sc),n=this.normal.dot(r);if(n===0){if(this.distanceToPoint(e.start)===0)return t.copy(e.start);return null}let s=-(e.start.dot(this.normal)+this.constant)/n;if(i===!0&&(s<0||s>1))return null;return t.copy(e.start).addScaledVector(r,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||Wm.getNormalMatrix(e),r=this.coplanarPoint(sc).applyMatrix4(e),n=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(n),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}var Xm=0;class zt extends si{constructor(){super();this.isMaterial=!0,Object.defineProperty(this,"id",{value:Xm++}),this.uuid=di(),this.name="",this.type="Material",this.blending=Nr,this.side=qi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=pa,this.blendDst=ma,this.blendEquation=Ur,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new de(0,0,0),this.blendAlpha=0,this.depthFunc=Fr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Sh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ra,this.stencilZFail=Ra,this.stencilZPass=Ra,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){if(this._alphaTest>0!==e>0)this.version++;this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e===void 0)return;for(let t in e){let i=e[t];if(i===void 0){ye(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){ye(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}if(r&&r.isColor)r.set(i);else if(r&&r.isVector2&&(i&&i.isVector2)||r&&r.isEuler&&(i&&i.isEuler)||r&&r.isVector3&&(i&&i.isVector3))r.copy(i);else this[t]=i}}toJSON(e){let t=e===void 0||typeof e==="string";if(t)e={textures:{},images:{}};let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};if(i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor)i.color=this.color.getHex();if(this.roughness!==void 0)i.roughness=this.roughness;if(this.metalness!==void 0)i.metalness=this.metalness;if(this.sheen!==void 0)i.sheen=this.sheen;if(this.sheenColor&&this.sheenColor.isColor)i.sheenColor=this.sheenColor.getHex();if(this.sheenRoughness!==void 0)i.sheenRoughness=this.sheenRoughness;if(this.emissive&&this.emissive.isColor)i.emissive=this.emissive.getHex();if(this.emissiveIntensity!==void 0)i.emissiveIntensity=this.emissiveIntensity;if(this.specular&&this.specular.isColor)i.specular=this.specular.getHex();if(this.specularIntensity!==void 0)i.specularIntensity=this.specularIntensity;if(this.specularColor&&this.specularColor.isColor)i.specularColor=this.specularColor.getHex();if(this.shininess!==void 0)i.shininess=this.shininess;if(this.clearcoat!==void 0)i.clearcoat=this.clearcoat;if(this.clearcoatRoughness!==void 0)i.clearcoatRoughness=this.clearcoatRoughness;if(this.diffuseRoughness!==void 0)i.diffuseRoughness=this.diffuseRoughness;if(this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture)i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid;if(this.clearcoatMap&&this.clearcoatMap.isTexture)i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid;if(this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture)i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid;if(this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture)i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray();if(this.sheenColorMap&&this.sheenColorMap.isTexture)i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid;if(this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture)i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid;if(this.dispersion!==void 0)i.dispersion=this.dispersion;if(this.retroreflectivity!==void 0)i.retroreflectivity=this.retroreflectivity;if(this.iridescence!==void 0)i.iridescence=this.iridescence;if(this.iridescenceIOR!==void 0)i.iridescenceIOR=this.iridescenceIOR;if(this.iridescenceThicknessMinimum!==void 0)i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum;if(this.iridescenceThicknessMaximum!==void 0)i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum;if(this.iridescenceMap&&this.iridescenceMap.isTexture)i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid;if(this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture)i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid;if(this.anisotropy!==void 0)i.anisotropy=this.anisotropy;if(this.anisotropyRotation!==void 0)i.anisotropyRotation=this.anisotropyRotation;if(this.anisotropyMap&&this.anisotropyMap.isTexture)i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid;if(this.map&&this.map.isTexture)i.map=this.map.toJSON(e).uuid;if(this.matcap&&this.matcap.isTexture)i.matcap=this.matcap.toJSON(e).uuid;if(this.alphaMap&&this.alphaMap.isTexture)i.alphaMap=this.alphaMap.toJSON(e).uuid;if(this.lightMap&&this.lightMap.isTexture)i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity;if(this.aoMap&&this.aoMap.isTexture)i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity;if(this.bumpMap&&this.bumpMap.isTexture)i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale;if(this.normalMap&&this.normalMap.isTexture)i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray();if(this.displacementMap&&this.displacementMap.isTexture)i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias;if(this.roughnessMap&&this.roughnessMap.isTexture)i.roughnessMap=this.roughnessMap.toJSON(e).uuid;if(this.metalnessMap&&this.metalnessMap.isTexture)i.metalnessMap=this.metalnessMap.toJSON(e).uuid;if(this.emissiveMap&&this.emissiveMap.isTexture)i.emissiveMap=this.emissiveMap.toJSON(e).uuid;if(this.specularMap&&this.specularMap.isTexture)i.specularMap=this.specularMap.toJSON(e).uuid;if(this.specularIntensityMap&&this.specularIntensityMap.isTexture)i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid;if(this.specularColorMap&&this.specularColorMap.isTexture)i.specularColorMap=this.specularColorMap.toJSON(e).uuid;if(this.envMap&&this.envMap.isTexture){if(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0)i.combine=this.combine}if(this.envMapRotation!==void 0)i.envMapRotation=this.envMapRotation.toArray();if(this.envMapIntensity!==void 0)i.envMapIntensity=this.envMapIntensity;if(this.reflectivity!==void 0)i.reflectivity=this.reflectivity;if(this.refractionRatio!==void 0)i.refractionRatio=this.refractionRatio;if(this.gradientMap&&this.gradientMap.isTexture)i.gradientMap=this.gradientMap.toJSON(e).uuid;if(this.transmission!==void 0)i.transmission=this.transmission;if(this.transmissionMap&&this.transmissionMap.isTexture)i.transmissionMap=this.transmissionMap.toJSON(e).uuid;if(this.thickness!==void 0)i.thickness=this.thickness;if(this.thicknessMap&&this.thicknessMap.isTexture)i.thicknessMap=this.thicknessMap.toJSON(e).uuid;if(this.attenuationDistance!==void 0)i.attenuationDistance=this.attenuationDistance;if(this.attenuationColor!==void 0)i.attenuationColor=this.attenuationColor.getHex();if(this.size!==void 0)i.size=this.size;if(this.sizeAttenuation!==void 0)i.sizeAttenuation=this.sizeAttenuation;if(Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0)i.clippingPlanes=this.clippingPlanes.map((n)=>n.toJSON());if(this.rotation!==void 0)i.rotation=this.rotation;if(this.depthPacking!==void 0)i.depthPacking=this.depthPacking;if(this.linewidth!==void 0)i.linewidth=this.linewidth;if(this.linecap!==void 0)i.linecap=this.linecap;if(this.linejoin!==void 0)i.linejoin=this.linejoin;if(this.dashSize!==void 0)i.dashSize=this.dashSize;if(this.gapSize!==void 0)i.gapSize=this.gapSize;if(this.scale!==void 0)i.scale=this.scale;if(this.wireframe!==void 0)i.wireframe=this.wireframe;if(this.wireframeLinewidth!==void 0)i.wireframeLinewidth=this.wireframeLinewidth;if(this.wireframeLinecap!==void 0)i.wireframeLinecap=this.wireframeLinecap;if(this.wireframeLinejoin!==void 0)i.wireframeLinejoin=this.wireframeLinejoin;if(this.flatShading!==void 0)i.flatShading=this.flatShading;if(this.fog!==void 0)i.fog=this.fog;if(Object.keys(this.userData).length>0)i.userData=this.userData;function r(n){let s=[];for(let o in n){let a=n[o];delete a.metadata,s.push(a)}return s}if(t){let n=r(e.textures),s=r(e.images);if(n.length>0)i.textures=n;if(s.length>0)i.images=s}return i}fromJSON(e,t){if(e.uuid!==void 0)this.uuid=e.uuid;if(e.name!==void 0)this.name=e.name;if(e.color!==void 0&&this.color!==void 0)this.color.setHex(e.color);if(e.roughness!==void 0)this.roughness=e.roughness;if(e.metalness!==void 0)this.metalness=e.metalness;if(e.sheen!==void 0)this.sheen=e.sheen;if(e.sheenColor!==void 0)this.sheenColor=new de().setHex(e.sheenColor);if(e.sheenRoughness!==void 0)this.sheenRoughness=e.sheenRoughness;if(e.emissive!==void 0&&this.emissive!==void 0)this.emissive.setHex(e.emissive);if(e.specular!==void 0&&this.specular!==void 0)this.specular.setHex(e.specular);if(e.specularIntensity!==void 0)this.specularIntensity=e.specularIntensity;if(e.specularColor!==void 0&&this.specularColor!==void 0)this.specularColor.setHex(e.specularColor);if(e.shininess!==void 0)this.shininess=e.shininess;if(e.clearcoat!==void 0)this.clearcoat=e.clearcoat;if(e.clearcoatRoughness!==void 0)this.clearcoatRoughness=e.clearcoatRoughness;if(e.diffuseRoughness!==void 0)this.diffuseRoughness=e.diffuseRoughness;if(e.dispersion!==void 0)this.dispersion=e.dispersion;if(e.retroreflectivity!==void 0)this.retroreflectivity=e.retroreflectivity;if(e.iridescence!==void 0)this.iridescence=e.iridescence;if(e.iridescenceIOR!==void 0)this.iridescenceIOR=e.iridescenceIOR;if(e.iridescenceThicknessMinimum!==void 0)this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum;if(e.iridescenceThicknessMaximum!==void 0)this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum;if(e.iridescenceThicknessRange!==void 0)this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1];if(e.transmission!==void 0)this.transmission=e.transmission;if(e.thickness!==void 0)this.thickness=e.thickness;if(e.attenuationDistance!==void 0)this.attenuationDistance=e.attenuationDistance;if(e.attenuationColor!==void 0&&this.attenuationColor!==void 0)this.attenuationColor.setHex(e.attenuationColor);if(e.anisotropy!==void 0)this.anisotropy=e.anisotropy;if(e.anisotropyRotation!==void 0)this.anisotropyRotation=e.anisotropyRotation;if(e.fog!==void 0)this.fog=e.fog;if(e.flatShading!==void 0)this.flatShading=e.flatShading;if(e.blending!==void 0)this.blending=e.blending;if(e.combine!==void 0)this.combine=e.combine;if(e.side!==void 0)this.side=e.side;if(e.shadowSide!==void 0)this.shadowSide=e.shadowSide;if(e.opacity!==void 0)this.opacity=e.opacity;if(e.transparent!==void 0)this.transparent=e.transparent;if(e.alphaTest!==void 0)this.alphaTest=e.alphaTest;if(e.alphaHash!==void 0)this.alphaHash=e.alphaHash;if(e.depthFunc!==void 0)this.depthFunc=e.depthFunc;if(e.depthTest!==void 0)this.depthTest=e.depthTest;if(e.depthWrite!==void 0)this.depthWrite=e.depthWrite;if(e.colorWrite!==void 0)this.colorWrite=e.colorWrite;if(e.clippingPlanes!==void 0)this.clippingPlanes=e.clippingPlanes.map((i)=>new Ii().fromJSON(i));if(e.clipIntersection!==void 0)this.clipIntersection=e.clipIntersection;if(e.clipShadows!==void 0)this.clipShadows=e.clipShadows;if(e.depthPacking!==void 0)this.depthPacking=e.depthPacking;if(e.blendSrc!==void 0)this.blendSrc=e.blendSrc;if(e.blendDst!==void 0)this.blendDst=e.blendDst;if(e.blendEquation!==void 0)this.blendEquation=e.blendEquation;if(e.blendSrcAlpha!==void 0)this.blendSrcAlpha=e.blendSrcAlpha;if(e.blendDstAlpha!==void 0)this.blendDstAlpha=e.blendDstAlpha;if(e.blendEquationAlpha!==void 0)this.blendEquationAlpha=e.blendEquationAlpha;if(e.blendColor!==void 0&&this.blendColor!==void 0)this.blendColor.setHex(e.blendColor);if(e.blendAlpha!==void 0)this.blendAlpha=e.blendAlpha;if(e.stencilWriteMask!==void 0)this.stencilWriteMask=e.stencilWriteMask;if(e.stencilFunc!==void 0)this.stencilFunc=e.stencilFunc;if(e.stencilRef!==void 0)this.stencilRef=e.stencilRef;if(e.stencilFuncMask!==void 0)this.stencilFuncMask=e.stencilFuncMask;if(e.stencilFail!==void 0)this.stencilFail=e.stencilFail;if(e.stencilZFail!==void 0)this.stencilZFail=e.stencilZFail;if(e.stencilZPass!==void 0)this.stencilZPass=e.stencilZPass;if(e.stencilWrite!==void 0)this.stencilWrite=e.stencilWrite;if(e.wireframe!==void 0)this.wireframe=e.wireframe;if(e.wireframeLinewidth!==void 0)this.wireframeLinewidth=e.wireframeLinewidth;if(e.wireframeLinecap!==void 0)this.wireframeLinecap=e.wireframeLinecap;if(e.wireframeLinejoin!==void 0)this.wireframeLinejoin=e.wireframeLinejoin;if(e.rotation!==void 0)this.rotation=e.rotation;if(e.linewidth!==void 0)this.linewidth=e.linewidth;if(e.linecap!==void 0)this.linecap=e.linecap;if(e.linejoin!==void 0)this.linejoin=e.linejoin;if(e.dashSize!==void 0)this.dashSize=e.dashSize;if(e.gapSize!==void 0)this.gapSize=e.gapSize;if(e.scale!==void 0)this.scale=e.scale;if(e.polygonOffset!==void 0)this.polygonOffset=e.polygonOffset;if(e.polygonOffsetFactor!==void 0)this.polygonOffsetFactor=e.polygonOffsetFactor;if(e.polygonOffsetUnits!==void 0)this.polygonOffsetUnits=e.polygonOffsetUnits;if(e.dithering!==void 0)this.dithering=e.dithering;if(e.alphaToCoverage!==void 0)this.alphaToCoverage=e.alphaToCoverage;if(e.premultipliedAlpha!==void 0)this.premultipliedAlpha=e.premultipliedAlpha;if(e.forceSinglePass!==void 0)this.forceSinglePass=e.forceSinglePass;if(e.allowOverride!==void 0)this.allowOverride=e.allowOverride;if(e.visible!==void 0)this.visible=e.visible;if(e.toneMapped!==void 0)this.toneMapped=e.toneMapped;if(e.userData!==void 0)this.userData=e.userData;if(e.vertexColors!==void 0)if(typeof e.vertexColors==="number")this.vertexColors=e.vertexColors>0;else this.vertexColors=e.vertexColors;if(e.size!==void 0)this.size=e.size;if(e.sizeAttenuation!==void 0)this.sizeAttenuation=e.sizeAttenuation;if(e.map!==void 0)this.map=t[e.map]||null;if(e.matcap!==void 0)this.matcap=t[e.matcap]||null;if(e.alphaMap!==void 0)this.alphaMap=t[e.alphaMap]||null;if(e.bumpMap!==void 0)this.bumpMap=t[e.bumpMap]||null;if(e.bumpScale!==void 0)this.bumpScale=e.bumpScale;if(e.normalMap!==void 0)this.normalMap=t[e.normalMap]||null;if(e.normalMapType!==void 0)this.normalMapType=e.normalMapType;if(e.normalScale!==void 0){let i=e.normalScale;if(Array.isArray(i)===!1)i=[i,i];this.normalScale=new H().fromArray(i)}if(e.displacementMap!==void 0)this.displacementMap=t[e.displacementMap]||null;if(e.displacementScale!==void 0)this.displacementScale=e.displacementScale;if(e.displacementBias!==void 0)this.displacementBias=e.displacementBias;if(e.roughnessMap!==void 0)this.roughnessMap=t[e.roughnessMap]||null;if(e.metalnessMap!==void 0)this.metalnessMap=t[e.metalnessMap]||null;if(e.emissiveMap!==void 0)this.emissiveMap=t[e.emissiveMap]||null;if(e.emissiveIntensity!==void 0)this.emissiveIntensity=e.emissiveIntensity;if(e.specularMap!==void 0)this.specularMap=t[e.specularMap]||null;if(e.specularIntensityMap!==void 0)this.specularIntensityMap=t[e.specularIntensityMap]||null;if(e.specularColorMap!==void 0)this.specularColorMap=t[e.specularColorMap]||null;if(e.envMap!==void 0)this.envMap=t[e.envMap]||null;if(e.envMapRotation!==void 0)this.envMapRotation.fromArray(e.envMapRotation);if(e.envMapIntensity!==void 0)this.envMapIntensity=e.envMapIntensity;if(e.reflectivity!==void 0)this.reflectivity=e.reflectivity;if(e.refractionRatio!==void 0)this.refractionRatio=e.refractionRatio;if(e.lightMap!==void 0)this.lightMap=t[e.lightMap]||null;if(e.lightMapIntensity!==void 0)this.lightMapIntensity=e.lightMapIntensity;if(e.aoMap!==void 0)this.aoMap=t[e.aoMap]||null;if(e.aoMapIntensity!==void 0)this.aoMapIntensity=e.aoMapIntensity;if(e.gradientMap!==void 0)this.gradientMap=t[e.gradientMap]||null;if(e.clearcoatMap!==void 0)this.clearcoatMap=t[e.clearcoatMap]||null;if(e.clearcoatRoughnessMap!==void 0)this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null;if(e.clearcoatNormalMap!==void 0)this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null;if(e.clearcoatNormalScale!==void 0)this.clearcoatNormalScale=new H().fromArray(e.clearcoatNormalScale);if(e.diffuseRoughnessMap!==void 0)this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null;if(e.iridescenceMap!==void 0)this.iridescenceMap=t[e.iridescenceMap]||null;if(e.iridescenceThicknessMap!==void 0)this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null;if(e.transmissionMap!==void 0)this.transmissionMap=t[e.transmissionMap]||null;if(e.thicknessMap!==void 0)this.thicknessMap=t[e.thicknessMap]||null;if(e.anisotropyMap!==void 0)this.anisotropyMap=t[e.anisotropyMap]||null;if(e.sheenColorMap!==void 0)this.sheenColorMap=t[e.sheenColorMap]||null;if(e.sheenRoughnessMap!==void 0)this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null;return this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let r=t.length;i=Array(r);for(let n=0;n!==r;++n)i[n]=t[n].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){if(e===!0)this.version++}}class kr extends zt{constructor(e){super();this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new de(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}var _s,Do=new w,vs=new w,ys=new w,Ms=new H,No=new H,Kh=new Ye,Ha=new w,Uo=new w,Wa=new w,Zh=new H,oc=new H,Jh=new H;class Ss extends nt{constructor(e=new kr){super();if(this.isSprite=!0,this.type="Sprite",_s===void 0){_s=new Xe;let t=new Float32Array([-0.5,-0.5,0,0,0,0.5,-0.5,0,1,0,0.5,0.5,0,1,1,-0.5,0.5,0,0,1]),i=new xs(t,5);_s.setIndex([0,1,2,0,2,3]),_s.setAttribute("position",new xn(i,3,0,!1)),_s.setAttribute("uv",new xn(i,2,3,!1))}this.geometry=_s,this.material=e,this.center=new H(0.5,0.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){if(e.camera===null)Be('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.');if(vs.setFromMatrixScale(this.matrixWorld),Kh.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),ys.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1)vs.multiplyScalar(-ys.z);let i=this.material.rotation,r,n;if(i!==0)n=Math.cos(i),r=Math.sin(i);let s=this.center;Xa(Ha.set(-0.5,-0.5,0),ys,s,vs,r,n),Xa(Uo.set(0.5,-0.5,0),ys,s,vs,r,n),Xa(Wa.set(0.5,0.5,0),ys,s,vs,r,n),Zh.set(0,0),oc.set(1,0),Jh.set(1,1);let o=e.ray.intersectTriangle(Ha,Uo,Wa,!1,Do);if(o===null){if(Xa(Uo.set(-0.5,0.5,0),ys,s,vs,r,n),oc.set(0,1),o=e.ray.intersectTriangle(Ha,Wa,Uo,!1,Do),o===null)return}let a=e.ray.origin.distanceTo(Do);if(a<e.near||a>e.far)return;t.push({distance:a,point:Do.clone(),uv:Ti.getInterpolation(Do,Ha,Uo,Wa,Zh,oc,Jh,new H),face:null,object:this})}copy(e,t){if(super.copy(e,t),e.center!==void 0)this.center.copy(e.center);return this.material=e.material,this}toJSON(e){let t=super.toJSON(e);return t.object.center=this.center.toArray(),t}}function Xa(e,t,i,r,n,s){if(Ms.subVectors(e,i).addScalar(0.5).multiply(r),n!==void 0)No.x=s*Ms.x-n*Ms.y,No.y=n*Ms.x+s*Ms.y;else No.copy(Ms);e.copy(t),e.x+=No.x,e.y+=No.y,e.applyMatrix4(Kh)}var Cr=new w,ac=new w,qa=new w,Ya=new w;class gr{constructor(e=new w,t=new w(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Cr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);if(i<0)return t.copy(this.origin);return t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Cr.subVectors(e,this.origin).dot(this.direction);if(t<0)return this.origin.distanceToSquared(e);return Cr.copy(this.origin).addScaledVector(this.direction,t),Cr.distanceToSquared(e)}distanceSqToSegment(e,t,i,r){ac.copy(e).add(t).multiplyScalar(0.5),qa.copy(t).sub(e).normalize(),Ya.copy(this.origin).sub(ac);let n=e.distanceTo(t)*0.5,s=-this.direction.dot(qa),o=Ya.dot(this.direction),a=-Ya.dot(qa),l=Ya.lengthSq(),c=Math.abs(1-s*s),u,f,h,d;if(c>0)if(u=s*a-o,f=s*o-a,d=n*c,u>=0)if(f>=-d)if(f<=d){let x=1/c;u*=x,f*=x,h=u*(u+s*f+2*o)+f*(s*u+f+2*a)+l}else f=n,u=Math.max(0,-(s*f+o)),h=-u*u+f*(f+2*a)+l;else f=-n,u=Math.max(0,-(s*f+o)),h=-u*u+f*(f+2*a)+l;else if(f<=-d)u=Math.max(0,-(-s*n+o)),f=u>0?-n:Math.min(Math.max(-n,-a),n),h=-u*u+f*(f+2*a)+l;else if(f<=d)u=0,f=Math.min(Math.max(-n,-a),n),h=f*(f+2*a)+l;else u=Math.max(0,-(s*n+o)),f=u>0?n:Math.min(Math.max(-n,-a),n),h=-u*u+f*(f+2*a)+l;else f=s>0?-n:n,u=Math.max(0,-(s*f+o)),h=-u*u+f*(f+2*a)+l;if(i)i.copy(this.origin).addScaledVector(this.direction,u);if(r)r.copy(ac).addScaledVector(qa,f);return h}intersectSphere(e,t){if(e.radius<0)return null;Cr.subVectors(e.center,this.origin);let i=Cr.dot(this.direction),r=Cr.dot(Cr)-i*i,n=e.radius*e.radius;if(r>n)return null;let s=Math.sqrt(n-r),o=i-s,a=i+s;if(a<0)return null;if(o<0)return this.at(a,t);return this.at(o,t)}intersectsSphere(e){if(e.radius<0)return!1;return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0){if(e.distanceToPoint(this.origin)===0)return 0;return null}let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);if(i===null)return null;return this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);if(t===0)return!0;if(e.normal.dot(this.direction)*t<0)return!0;return!1}intersectBox(e,t){let i,r,n,s,o,a,l=1/this.direction.x,c=1/this.direction.y,u=1/this.direction.z,f=this.origin;if(l>=0)i=(e.min.x-f.x)*l,r=(e.max.x-f.x)*l;else i=(e.max.x-f.x)*l,r=(e.min.x-f.x)*l;if(c>=0)n=(e.min.y-f.y)*c,s=(e.max.y-f.y)*c;else n=(e.max.y-f.y)*c,s=(e.min.y-f.y)*c;if(i>s||n>r)return null;if(n>i||isNaN(i))i=n;if(s<r||isNaN(r))r=s;if(u>=0)o=(e.min.z-f.z)*u,a=(e.max.z-f.z)*u;else o=(e.max.z-f.z)*u,a=(e.min.z-f.z)*u;if(i>a||o>r)return null;if(o>i||i!==i)i=o;if(a<r||r!==r)r=a;if(r<0)return null;return this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Cr)!==null}intersectTriangle(e,t,i,r,n){let s=this.origin,o=this.direction,{x:a,y:l,z:c}=o,u=e.x-s.x,f=e.y-s.y,h=e.z-s.z,d=t.x-s.x,x=t.y-s.y,y=t.z-s.z,p=i.x-s.x,m=i.y-s.y,b=i.z-s.z,T=Math.abs(a),M=Math.abs(l),A=Math.abs(c),R,g,S,P,V,I,U,j,C,Y,Q,G;if(T>=M&&T>=A)if(S=a,I=u,C=d,G=p,a>=0)R=l,g=c,P=f,V=h,U=x,j=y,Y=m,Q=b;else R=c,g=l,P=h,V=f,U=y,j=x,Y=b,Q=m;else if(M>=A)if(S=l,I=f,C=x,G=m,l>=0)R=c,g=a,P=h,V=u,U=y,j=d,Y=b,Q=p;else R=a,g=c,P=u,V=h,U=d,j=y,Y=p,Q=b;else if(S=c,I=h,C=y,G=b,c>=0)R=a,g=l,P=u,V=f,U=d,j=x,Y=p,Q=m;else R=l,g=a,P=f,V=u,U=x,j=d,Y=m,Q=p;if(S===0)return null;let ge=R/S,X=g/S,te=1/S,ae=P-ge*I,Ue=V-X*I,ie=U-ge*C,le=j-X*C,Fe=Y-ge*G,He=Q-X*G,Ze=Fe*le-He*ie,ue=ae*He-Ue*Fe,mt=ie*Ue-le*ae;if(r){if(Ze<0||ue<0||mt<0)return null}else if((Ze<0||ue<0||mt<0)&&(Ze>0||ue>0||mt>0))return null;let lt=Ze+ue+mt;if(lt===0)return null;let Pe=te*(Ze*I+ue*C+mt*G);if(lt>0?Pe<0:Pe>0)return null;return this.at(Pe/lt,n)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Jt extends zt{constructor(e){super();this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new de(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Si,this.combine=en,this.reflectivity=1,this.refractionRatio=0.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}var Qh=new Ye,_n=new gr,Za=new oi,$h=new w,Ja=new w,Ka=new w,Qa=new w,lc=new w,$a=new w,jh=new w,ja=new w;class et extends nt{constructor(e=new Xe,t=new Jt){super();this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){if(super.copy(e,t),e.morphTargetInfluences!==void 0)this.morphTargetInfluences=e.morphTargetInfluences.slice();else this.morphTargetInfluences=void 0;if(e.morphTargetDictionary!==void 0)this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary);else this.morphTargetDictionary=void 0;return this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let n=0,s=r.length;n<s;n++){let o=r[n].name||String(n);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=n}}}}getVertexPosition(e,t){let i=this.geometry,r=i.attributes.position,n=i.morphAttributes.position,s=i.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(n&&o){$a.set(0,0,0);for(let a=0,l=n.length;a<l;a++){let c=o[a],u=n[a];if(c===0)continue;if(lc.fromBufferAttribute(u,e),s)$a.addScaledVector(lc,c);else $a.addScaledVector(lc.sub(t),c)}t.add($a)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,r=this.material,n=this.matrixWorld;if(r===void 0)return;if(i.boundingSphere===null)i.computeBoundingSphere();if(Za.copy(i.boundingSphere),Za.applyMatrix4(n),_n.copy(e.ray).recast(e.near),Za.containsPoint(_n.origin)===!1){if(_n.intersectSphere(Za,$h)===null)return;if(_n.origin.distanceToSquared($h)>(e.far-e.near)**2)return}if(Qh.copy(n).invert(),_n.copy(e.ray).applyMatrix4(Qh),i.boundingBox!==null){if(_n.intersectsBox(i.boundingBox)===!1)return}this._computeIntersections(e,t,_n)}_computeIntersections(e,t,i){let r,n=this.geometry,s=this.material,o=n.index,a=n.attributes.position,l=n.attributes.uv,c=n.attributes.uv1,u=n.attributes.normal,{groups:f,drawRange:h}=n;if(o!==null)if(Array.isArray(s))for(let d=0,x=f.length;d<x;d++){let y=f[d],p=s[y.materialIndex],m=Math.max(y.start,h.start),b=Math.min(o.count,Math.min(y.start+y.count,h.start+h.count));for(let T=m,M=b;T<M;T+=3){let A=o.getX(T),R=o.getX(T+1),g=o.getX(T+2);if(r=el(this,p,e,i,l,c,u,A,R,g),r)r.faceIndex=Math.floor(T/3),r.face.materialIndex=y.materialIndex,t.push(r)}}else{let d=Math.max(0,h.start),x=Math.min(o.count,h.start+h.count);for(let y=d,p=x;y<p;y+=3){let m=o.getX(y),b=o.getX(y+1),T=o.getX(y+2);if(r=el(this,s,e,i,l,c,u,m,b,T),r)r.faceIndex=Math.floor(y/3),t.push(r)}}else if(a!==void 0)if(Array.isArray(s))for(let d=0,x=f.length;d<x;d++){let y=f[d],p=s[y.materialIndex],m=Math.max(y.start,h.start),b=Math.min(a.count,Math.min(y.start+y.count,h.start+h.count));for(let T=m,M=b;T<M;T+=3){let A=T,R=T+1,g=T+2;if(r=el(this,p,e,i,l,c,u,A,R,g),r)r.faceIndex=Math.floor(T/3),r.face.materialIndex=y.materialIndex,t.push(r)}}else{let d=Math.max(0,h.start),x=Math.min(a.count,h.start+h.count);for(let y=d,p=x;y<p;y+=3){let m=y,b=y+1,T=y+2;if(r=el(this,s,e,i,l,c,u,m,b,T),r)r.faceIndex=Math.floor(y/3),t.push(r)}}}}function qm(e,t,i,r,n,s,o,a){let l;if(t.side===Vt)l=r.intersectTriangle(o,s,n,!0,a);else l=r.intersectTriangle(n,s,o,t.side===qi,a);if(l===null)return null;ja.copy(a),ja.applyMatrix4(e.matrixWorld);let c=i.ray.origin.distanceTo(ja);if(c<i.near||c>i.far)return null;return{distance:c,point:ja.clone(),object:e}}function el(e,t,i,r,n,s,o,a,l,c){e.getVertexPosition(a,Ja),e.getVertexPosition(l,Ka),e.getVertexPosition(c,Qa);let u=qm(e,t,i,r,Ja,Ka,Qa,jh);if(u){let f=new w;if(Ti.getBarycoord(jh,Ja,Ka,Qa,f),n)u.uv=Ti.getInterpolatedAttribute(n,a,l,c,f,new H);if(s)u.uv1=Ti.getInterpolatedAttribute(s,a,l,c,f,new H);if(o){if(u.normal=Ti.getInterpolatedAttribute(o,a,l,c,f,new w),u.normal.dot(r.direction)>0)u.normal.multiplyScalar(-1)}let h={a,b:l,c,normal:new w,materialIndex:0};Ti.getNormal(Ja,Ka,Qa,h.normal),u.face=h,u.barycoord=f}return u}class xr extends At{constructor(e=null,t=1,i=1,r,n,s,o,a,l=Ot,c=Ot,u,f){super(null,s,o,a,l,c,r,n,u,f);this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class vn extends ei{constructor(e,t,i,r=1){super(e,t,i);this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}var bs=new Ye,tu=new Ye,tl=[],iu=new Ei,Ym=new Ye,Fo=new et,Bo=new oi;class Oo extends et{constructor(e,t,i){super(e,t);this.isInstancedMesh=!0,this.instanceMatrix=new vn(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,Ym)}computeBoundingBox(){let e=this.geometry,t=this.count;if(this.boundingBox===null)this.boundingBox=new Ei;if(e.boundingBox===null)e.computeBoundingBox();this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,bs),iu.copy(e.boundingBox).applyMatrix4(bs),this.boundingBox.union(iu)}computeBoundingSphere(){let e=this.geometry,t=this.count;if(this.boundingSphere===null)this.boundingSphere=new oi;if(e.boundingSphere===null)e.computeBoundingSphere();this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,bs),Bo.copy(e.boundingSphere).applyMatrix4(bs),this.boundingSphere.union(Bo)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){if(this.instanceColor===null)return t.setRGB(1,1,1);else return t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,r=this.morphTexture.source.data.data,n=i.length+1,s=e*n+1;for(let o=0;o<i.length;o++)i[o]=r[s+o]}raycast(e,t){let i=this.matrixWorld,r=this.count;if(Fo.geometry=this.geometry,Fo.material=this.material,Fo.material===void 0)return;if(this.boundingSphere===null)this.computeBoundingSphere();if(Bo.copy(this.boundingSphere),Bo.applyMatrix4(i),e.ray.intersectsSphere(Bo)===!1)return;for(let n=0;n<r;n++){this.getMatrixAt(n,bs),tu.multiplyMatrices(i,bs),Fo.matrixWorld=tu,Fo.raycast(e,tl);for(let s=0,o=tl.length;s<o;s++){let a=tl[s];a.instanceId=n,a.object=this,t.push(a)}tl.length=0}}setColorAt(e,t){if(this.instanceColor===null)this.instanceColor=new vn(new Float32Array(this.instanceMatrix.count*3).fill(1),3);return t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let i=t.morphTargetInfluences,r=i.length+1;if(this.morphTexture===null)this.morphTexture=new xr(new Float32Array(r*this.count),r,this.count,Zn,jt);let n=this.morphTexture.source.data.data,s=0;for(let l=0;l<i.length;l++)s+=i[l];let o=this.geometry.morphTargetsRelative?1:1-s,a=r*e;return n[a]=o,n.set(i,a+1),this}updateMorphTargets(){}dispose(){if(super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null)this.instanceColor.dispose();if(this.morphTexture!==null)this.morphTexture.dispose(),this.morphTexture=null}}var yn=new oi,Zm=new H(0.5,0.5),il=new w;class ji{constructor(e=new Ii,t=new Ii,i=new Ii,r=new Ii,n=new Ii,s=new Ii){this.planes=[e,t,i,r,n,s]}set(e,t,i,r,n,s){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(n),o[5].copy(s),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=fi,i=!1){let r=this.planes,n=e.elements,s=n[0],o=n[1],a=n[2],l=n[3],c=n[4],u=n[5],f=n[6],h=n[7],d=n[8],x=n[9],y=n[10],p=n[11],m=n[12],b=n[13],T=n[14],M=n[15];if(r[0].setComponents(l-s,h-c,p-d,M-m).normalize(),r[1].setComponents(l+s,h+c,p+d,M+m).normalize(),r[2].setComponents(l+o,h+u,p+x,M+b).normalize(),r[3].setComponents(l-o,h-u,p-x,M-b).normalize(),i)r[4].setComponents(a,f,y,T).normalize(),r[5].setComponents(l-a,h-f,p-y,M-T).normalize();else if(r[4].setComponents(l-a,h-f,p-y,M-T).normalize(),t===fi)r[5].setComponents(l+a,h+f,p+y,M+T).normalize();else if(t===pr)r[5].setComponents(a,f,y,T).normalize();else throw Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0){if(e.boundingSphere===null)e.computeBoundingSphere();yn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld)}else{let t=e.geometry;if(t.boundingSphere===null)t.computeBoundingSphere();yn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(yn)}intersectsSprite(e){yn.center.set(0,0,0);let t=Zm.distanceTo(e.center);return yn.radius=0.7071067811865476+t,yn.applyMatrix4(e.matrixWorld),this.intersectsSphere(yn)}intersectsSphere(e){let t=this.planes,i=e.center,r=-e.radius;for(let n=0;n<6;n++)if(t[n].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let r=t[i];if(il.x=r.normal.x>0?e.max.x:e.min.x,il.y=r.normal.y>0?e.max.y:e.min.y,il.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(il)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}var ru=new Ye;class Ts{constructor(){this.coordinateSystem=fi,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,i=this._frustums;for(let r=0;r<t.length;r++){let n=t[r];if(ru.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),i[r]===void 0)i[r]=new ji;i[r].setFromProjectionMatrix(ru,n.coordinateSystem,n.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,i=e._frustums;for(let r=0;r<e._count;r++){if(t[r]===void 0)t[r]=new ji;t[r].copy(i[r])}return this._count=e._count,this}clone(){return new Ts().copy(this)}}class yi extends zt{constructor(e){super();this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new de(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}var sl=new w,ol=new w,nu=new Ye,zo=new gr,rl=new oi,cc=new w,su=new w;class Pr extends nt{constructor(e=new Xe,t=new yi){super();this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){if(super.copy(e,t),e.morphTargetInfluences!==void 0)this.morphTargetInfluences=e.morphTargetInfluences.slice();else this.morphTargetInfluences=void 0;if(e.morphTargetDictionary!==void 0)this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary);else this.morphTargetDictionary=void 0;return this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let r=1,n=t.count;r<n;r++)sl.fromBufferAttribute(t,r-1),ol.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=sl.distanceTo(ol);e.setAttribute("lineDistance",new Ge(i,1))}else ye("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,r=this.matrixWorld,n=e.params.Line.threshold,s=i.drawRange;if(i.boundingSphere===null)i.computeBoundingSphere();if(rl.copy(i.boundingSphere),rl.applyMatrix4(r),rl.radius+=n,e.ray.intersectsSphere(rl)===!1)return;nu.copy(r).invert(),zo.copy(e.ray).applyMatrix4(nu);let o=n/((this.scale.x+this.scale.y+this.scale.z)/3),a=o*o,l=this.isLineSegments?2:1,c=i.index,f=i.attributes.position;if(c!==null){let h=Math.max(0,s.start),d=Math.min(c.count,s.start+s.count);for(let x=h,y=d-1;x<y;x+=l){let p=c.getX(x),m=c.getX(x+1),b=nl(this,e,zo,a,p,m,x);if(b)t.push(b)}if(this.isLineLoop){let x=c.getX(d-1),y=c.getX(h),p=nl(this,e,zo,a,x,y,d-1);if(p)t.push(p)}}else{let h=Math.max(0,s.start),d=Math.min(f.count,s.start+s.count);for(let x=h,y=d-1;x<y;x+=l){let p=nl(this,e,zo,a,x,x+1,x);if(p)t.push(p)}if(this.isLineLoop){let x=nl(this,e,zo,a,d-1,h,d-1);if(x)t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let n=0,s=r.length;n<s;n++){let o=r[n].name||String(n);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=n}}}}}function nl(e,t,i,r,n,s,o){let a=e.geometry.attributes.position;if(sl.fromBufferAttribute(a,n),ol.fromBufferAttribute(a,s),i.distanceSqToSegment(sl,ol,cc,su)>r)return;cc.applyMatrix4(e.matrixWorld);let c=t.ray.origin.distanceTo(cc);if(c<t.near||c>t.far)return;return{distance:c,point:su.clone().applyMatrix4(e.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:e}}var ou=new w,au=new w;class Ni extends Pr{constructor(e,t){super(e,t);this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let r=0,n=t.count;r<n;r+=2)ou.fromBufferAttribute(t,r),au.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+ou.distanceTo(au);e.setAttribute("lineDistance",new Ge(i,1))}else ye("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Mn extends zt{constructor(e){super();this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new de(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}var lu=new Ye,hc=new gr,al=new oi,ll=new w;class Go extends nt{constructor(e=new Xe,t=new Mn){super();this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){if(super.copy(e,t),e.morphTargetInfluences!==void 0)this.morphTargetInfluences=e.morphTargetInfluences.slice();else this.morphTargetInfluences=void 0;if(e.morphTargetDictionary!==void 0)this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary);else this.morphTargetDictionary=void 0;return this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,r=this.matrixWorld,n=e.params.Points.threshold,s=i.drawRange;if(i.boundingSphere===null)i.computeBoundingSphere();if(al.copy(i.boundingSphere),al.applyMatrix4(r),al.radius+=n,e.ray.intersectsSphere(al)===!1)return;lu.copy(r).invert(),hc.copy(e.ray).applyMatrix4(lu);let o=n/((this.scale.x+this.scale.y+this.scale.z)/3),a=o*o,l=i.index,u=i.attributes.position;if(l!==null){let f=Math.max(0,s.start),h=Math.min(l.count,s.start+s.count);for(let d=f,x=h;d<x;d++){let y=l.getX(d);ll.fromBufferAttribute(u,y),cu(ll,y,a,r,e,t,this)}}else{let f=Math.max(0,s.start),h=Math.min(u.count,s.start+s.count);for(let d=f,x=h;d<x;d++)ll.fromBufferAttribute(u,d),cu(ll,d,a,r,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let n=0,s=r.length;n<s;n++){let o=r[n].name||String(n);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=n}}}}}function cu(e,t,i,r,n,s,o){let a=hc.distanceSqToPoint(e);if(a<i){let l=new w;hc.closestPointToPoint(e,l),l.applyMatrix4(r);let c=n.ray.origin.distanceTo(l);if(c<n.near||c>n.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class Hr extends At{constructor(e=[],t=Zi,i,r,n,s,o,a,l,c){super(e,t,i,r,n,s,o,a,l,c);this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class er extends At{constructor(e,t,i,r,n,s,o,a,l){super(e,t,i,r,n,s,o,a,l);this.isCanvasTexture=!0,this.needsUpdate=!0}}class Vi extends At{constructor(e,t,i=ni,r,n,s,o=Ot,a=Ot,l,c=Di,u=1){if(c!==Di&&c!==Bi)throw Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:e,height:t,depth:u};super(f,r,n,s,o,a,c,i,l);this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new mr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class Es extends Vi{constructor(e,t=ni,i=Zi,r,n,s=Ot,o=Ot,a,l=Di){let c={width:e,height:e,depth:1},u=[c,c,c,c,c,c];super(e,e,t,i,r,n,s,o,a,l);this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class ws extends At{constructor(e=null){super();this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Ui extends Xe{constructor(e=1,t=1,i=1,r=1,n=1,s=1){super();this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:n,depthSegments:s};let o=this;r=Math.floor(r),n=Math.floor(n),s=Math.floor(s);let a=[],l=[],c=[],u=[],f=0,h=0;d("z","y","x",-1,-1,i,t,e,s,n,0),d("z","y","x",1,-1,i,t,-e,s,n,1),d("x","z","y",1,1,e,i,t,r,s,2),d("x","z","y",1,-1,e,i,-t,r,s,3),d("x","y","z",1,-1,e,t,i,r,n,4),d("x","y","z",-1,-1,e,t,-i,r,n,5),this.setIndex(a),this.setAttribute("position",new Ge(l,3)),this.setAttribute("normal",new Ge(c,3)),this.setAttribute("uv",new Ge(u,2));function d(x,y,p,m,b,T,M,A,R,g,S){let P=T/R,V=M/g,I=T/2,U=M/2,j=A/2,C=R+1,Y=g+1,Q=0,G=0,ge=new w;for(let X=0;X<Y;X++){let te=X*V-U;for(let ae=0;ae<C;ae++){let Ue=ae*P-I;ge[x]=Ue*m,ge[y]=te*b,ge[p]=j,l.push(ge.x,ge.y,ge.z),ge[x]=0,ge[y]=0,ge[p]=A>0?1:-1,c.push(ge.x,ge.y,ge.z),u.push(ae/R),u.push(1-X/g),Q+=1}}for(let X=0;X<g;X++)for(let te=0;te<R;te++){let ae=f+te+C*X,Ue=f+te+C*(X+1),ie=f+(te+1)+C*(X+1),le=f+(te+1)+C*X;a.push(ae,Ue,le),a.push(Ue,ie,le),G+=6}o.addGroup(h,G,S),h+=G,f+=Q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ui(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class cl extends Xe{constructor(e=1,t=32,i=0,r=Math.PI*2){super();this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:r},t=Math.max(3,t);let n=[],s=[],o=[],a=[],l=new w,c=new H;s.push(0,0,0),o.push(0,0,1),a.push(0.5,0.5);for(let u=0,f=3;u<=t;u++,f+=3){let h=i+u/t*r;l.x=e*Math.cos(h),l.y=e*Math.sin(h),s.push(l.x,l.y,l.z),o.push(0,0,1),c.x=(s[f]/e+1)/2,c.y=(s[f+1]/e+1)/2,a.push(c.x,c.y)}for(let u=1;u<=t;u++)n.push(u,u+1,0);this.setIndex(n),this.setAttribute("position",new Ge(s,3)),this.setAttribute("normal",new Ge(o,3)),this.setAttribute("uv",new Ge(a,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new cl(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Vo extends Xe{constructor(e=1,t=1,i=1,r=32,n=1,s=!1,o=0,a=Math.PI*2){super();this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:n,openEnded:s,thetaStart:o,thetaLength:a};let l=this;r=Math.floor(r),n=Math.floor(n);let c=[],u=[],f=[],h=[],d=0,x=[],y=i/2,p=0;if(m(),s===!1){if(e>0)b(!0);if(t>0)b(!1)}this.setIndex(c),this.setAttribute("position",new Ge(u,3)),this.setAttribute("normal",new Ge(f,3)),this.setAttribute("uv",new Ge(h,2));function m(){let T=new w,M=new w,A=0,R=(t-e)/i;for(let g=0;g<=n;g++){let S=[],P=g/n,V=P*(t-e)+e;for(let I=0;I<=r;I++){let U=I/r,j=U*a+o,C=Math.sin(j),Y=Math.cos(j);M.x=V*C,M.y=-P*i+y,M.z=V*Y,u.push(M.x,M.y,M.z),T.set(C,R,Y).normalize(),f.push(T.x,T.y,T.z),h.push(U,1-P),S.push(d++)}x.push(S)}for(let g=0;g<r;g++)for(let S=0;S<n;S++){let P=x[S][g],V=x[S+1][g],I=x[S+1][g+1],U=x[S][g+1];if(e>0||S!==0)c.push(P,V,U),A+=3;if(t>0||S!==n-1)c.push(V,I,U),A+=3}l.addGroup(p,A,0),p+=A}function b(T){let M=d,A=new H,R=new w,g=0,S=T===!0?e:t,P=T===!0?1:-1;for(let I=1;I<=r;I++)u.push(0,y*P,0),f.push(0,P,0),h.push(0.5,0.5),d++;let V=d;for(let I=0;I<=r;I++){let j=I/r*a+o,C=Math.cos(j),Y=Math.sin(j);R.x=S*Y,R.y=y*P,R.z=S*C,u.push(R.x,R.y,R.z),f.push(0,P,0),A.x=C*0.5+0.5,A.y=Y*0.5*P+0.5,h.push(A.x,A.y),d++}for(let I=0;I<r;I++){let U=M+I,j=V+I;if(T===!0)c.push(j,j+1,U);else c.push(j+1,j,U);g+=3}l.addGroup(p,g,T===!0?1:2),p+=g}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vo(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Kt{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){ye("Curve: .getPoint() not implemented.")}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,r=this.getPoint(0),n=0;t.push(0);for(let s=1;s<=e;s++)i=this.getPoint(s/e),n+=i.distanceTo(r),t.push(n),r=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let i=this.getLengths(),r=0,n=i.length,s;if(t)s=t;else s=e*i[n-1];let o=0,a=n-1,l;while(o<=a)if(r=Math.floor(o+(a-o)/2),l=i[r]-s,l<0)o=r+1;else if(l>0)a=r-1;else{a=r;break}if(r=a,i[r]===s)return r/(n-1);let c=i[r],f=i[r+1]-c,h=(s-c)/f;return(r+h)/(n-1)}getTangent(e,t){let r=e-0.0001,n=e+0.0001;if(r<0)r=0;if(n>1)n=1;let s=this.getPoint(r),o=this.getPoint(n),a=t||(s.isVector2?new H:new w);return a.copy(o).sub(s).normalize(),a}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){let i=new w,r=[],n=[],s=[],o=new w,a=new Ye;for(let h=0;h<=e;h++){let d=h/e;r[h]=this.getTangentAt(d,new w)}n[0]=new w,s[0]=new w;let l=Number.MAX_VALUE,c=Math.abs(r[0].x),u=Math.abs(r[0].y),f=Math.abs(r[0].z);if(c<=l)l=c,i.set(1,0,0);if(u<=l)l=u,i.set(0,1,0);if(f<=l)i.set(0,0,1);o.crossVectors(r[0],i).normalize(),n[0].crossVectors(r[0],o),s[0].crossVectors(r[0],n[0]);for(let h=1;h<=e;h++){if(n[h]=n[h-1].clone(),s[h]=s[h-1].clone(),o.crossVectors(r[h-1],r[h]),o.length()>Number.EPSILON){o.normalize();let d=Math.acos(tt(r[h-1].dot(r[h]),-1,1));n[h].applyMatrix4(a.makeRotationAxis(o,d))}s[h].crossVectors(r[h],n[h])}if(t===!0){let h=Math.acos(tt(n[0].dot(n[e]),-1,1));if(h/=e,r[0].dot(o.crossVectors(n[0],n[e]))>0)h=-h;for(let d=1;d<=e;d++)n[d].applyMatrix4(a.makeRotationAxis(r[d],h*d)),s[d].crossVectors(r[d],n[d])}return{tangents:r,normals:n,binormals:s}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}}class Sn extends Kt{constructor(e=0,t=0,i=1,r=1,n=0,s=Math.PI*2,o=!1,a=0){super();this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=r,this.aStartAngle=n,this.aEndAngle=s,this.aClockwise=o,this.aRotation=a}getPoint(e,t=new H){let i=t,r=Math.PI*2,n=this.aEndAngle-this.aStartAngle,s=Math.abs(n)<Number.EPSILON;while(n<0)n+=r;while(n>r)n-=r;if(n<Number.EPSILON)if(s)n=0;else n=r;if(this.aClockwise===!0&&!s)if(n===r)n=-r;else n=n-r;let o=this.aStartAngle+e*n,a=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let c=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=a-this.aX,h=l-this.aY;a=f*c-h*u+this.aX,l=f*u+h*c+this.aY}return i.set(a,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class dc extends Sn{constructor(e,t,i,r,n,s){super(e,t,i,i,r,n,s);this.isArcCurve=!0,this.type="ArcCurve"}}function xc(){let e=0,t=0,i=0,r=0;function n(s,o,a,l){e=s,t=a,i=-3*s+3*o-2*a-l,r=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){n(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,u,f){let h=(o-s)/c-(a-s)/(c+u)+(a-o)/u,d=(a-o)/u-(l-o)/(u+f)+(l-a)/f;h*=u,d*=u,n(o,a,h,d)},calc:function(s){let o=s*s,a=o*s;return e+t*s+i*o+r*a}}}var hu=new w,uu=new w,pc=new xc,mc=new xc,gc=new xc;class _c extends Kt{constructor(e=[],t=!1,i="centripetal",r=0.5){super();this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=r}getPoint(e,t=new w){let i=t,r=this.points,n=r.length,s=(n-(this.closed?0:1))*e,o=Math.floor(s),a=s-o;if(this.closed)o+=o>0?0:(Math.floor(Math.abs(o)/n)+1)*n;else if(a===0&&o===n-1)o=n-2,a=1;let l,c;if(this.closed||o>0)l=r[(o-1)%n];else uu.subVectors(r[0],r[1]).add(r[0]),l=uu;let u=r[o%n],f=r[(o+1)%n];if(this.closed||o+2<n)c=r[(o+2)%n];else hu.subVectors(r[n-1],r[n-2]).add(r[n-1]),c=hu;if(this.curveType==="centripetal"||this.curveType==="chordal"){let h=this.curveType==="chordal"?0.5:0.25,d=Math.pow(l.distanceToSquared(u),h),x=Math.pow(u.distanceToSquared(f),h),y=Math.pow(f.distanceToSquared(c),h);if(x<0.0001)x=1;if(d<0.0001)d=x;if(y<0.0001)y=x;pc.initNonuniformCatmullRom(l.x,u.x,f.x,c.x,d,x,y),mc.initNonuniformCatmullRom(l.y,u.y,f.y,c.y,d,x,y),gc.initNonuniformCatmullRom(l.z,u.z,f.z,c.z,d,x,y)}else if(this.curveType==="catmullrom")pc.initCatmullRom(l.x,u.x,f.x,c.x,this.tension),mc.initCatmullRom(l.y,u.y,f.y,c.y,this.tension),gc.initCatmullRom(l.z,u.z,f.z,c.z,this.tension);return i.set(pc.calc(a),mc.calc(a),gc.calc(a)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(new w().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function vc(e,t,i,r,n){let s=(r-t)*0.5,o=(n-i)*0.5,a=e*e,l=e*a;return(2*i-2*r+s+o)*l+(-3*i+3*r-2*s-o)*a+s*e+i}function Km(e,t){let i=1-e;return i*i*t}function Qm(e,t){return 2*(1-e)*e*t}function $m(e,t){return e*e*t}function bn(e,t,i,r){return Km(e,t)+Qm(e,i)+$m(e,r)}function jm(e,t){let i=1-e;return i*i*i*t}function eg(e,t){let i=1-e;return 3*i*i*e*t}function tg(e,t){return 3*(1-e)*e*e*t}function ig(e,t){return e*e*e*t}function Tn(e,t,i,r,n){return jm(e,t)+eg(e,i)+tg(e,r)+ig(e,n)}class ko extends Kt{constructor(e=new H,t=new H,i=new H,r=new H){super();this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new H){let i=t,r=this.v0,n=this.v1,s=this.v2,o=this.v3;return i.set(Tn(e,r.x,n.x,s.x,o.x),Tn(e,r.y,n.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class yc extends Kt{constructor(e=new w,t=new w,i=new w,r=new w){super();this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new w){let i=t,r=this.v0,n=this.v1,s=this.v2,o=this.v3;return i.set(Tn(e,r.x,n.x,s.x,o.x),Tn(e,r.y,n.y,s.y,o.y),Tn(e,r.z,n.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Ho extends Kt{constructor(e=new H,t=new H){super();this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new H){let i=t;if(e===1)i.copy(this.v2);else i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1);return i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new H){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Wo extends Kt{constructor(e=new w,t=new w){super();this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new w){let i=t;if(e===1)i.copy(this.v2);else i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1);return i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new w){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Xo extends Kt{constructor(e=new H,t=new H,i=new H){super();this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new H){let i=t,r=this.v0,n=this.v1,s=this.v2;return i.set(bn(e,r.x,n.x,s.x),bn(e,r.y,n.y,s.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class qo extends Kt{constructor(e=new w,t=new w,i=new w){super();this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new w){let i=t,r=this.v0,n=this.v1,s=this.v2;return i.set(bn(e,r.x,n.x,s.x),bn(e,r.y,n.y,s.y),bn(e,r.z,n.z,s.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Yo extends Kt{constructor(e=[]){super();this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new H){let i=t,r=this.points,n=(r.length-1)*e,s=Math.floor(n),o=n-s,a=r[s===0?s:s-1],l=r[s],c=r[s>r.length-2?r.length-1:s+1],u=r[s>r.length-3?r.length-1:s+2];return i.set(vc(o,a.x,l.x,c.x,u.x),vc(o,a.y,l.y,c.y,u.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(new H().fromArray(r))}return this}}class As extends Kt{constructor(){super();this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Wr[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),r=this.getCurveLengths(),n=0;while(n<r.length){if(r[n]>=i){let s=r[n]-i,o=this.curves[n],a=o.getLength(),l=a===0?0:1-s/a;return o.getPointAt(l,t)}n++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,r=this.curves.length;i<r;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));if(this.autoClose)t.push(t[0]);return t}getPoints(e=12){let t=[],i;for(let r=0,n=this.curves;r<n.length;r++){let s=n[r],o=s.isEllipseCurve?e*2:s.isLineCurve||s.isLineCurve3?1:s.isSplineCurve?e*s.points.length:e,a=s.getPoints(o);for(let l=0;l<a.length;l++){let c=a[l];if(i&&i.equals(c))continue;t.push(c),i=c}}if(this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0]))t.push(t[0]);return t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this.cacheLengths=null,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let r=e.curves[t];this.curves.push(new Wr[r.type]().fromJSON(r))}return this.cacheLengths=null,this}}class Rs extends As{constructor(e){super();if(this.type="Path",this.currentPoint=new H,e)this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new Ho(this.currentPoint.clone(),new H(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,r){let n=new Xo(this.currentPoint.clone(),new H(e,t),new H(i,r));return this.curves.push(n),this.currentPoint.set(i,r),this}bezierCurveTo(e,t,i,r,n,s){let o=new ko(this.currentPoint.clone(),new H(e,t),new H(i,r),new H(n,s));return this.curves.push(o),this.currentPoint.set(n,s),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new Yo(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,r,n,s){let o=this.currentPoint.x,a=this.currentPoint.y;return this.absarc(e+o,t+a,i,r,n,s),this}absarc(e,t,i,r,n,s){return this.absellipse(e,t,i,i,r,n,s),this}ellipse(e,t,i,r,n,s,o,a){let l=this.currentPoint.x,c=this.currentPoint.y;return this.absellipse(e+l,t+c,i,r,n,s,o,a),this}absellipse(e,t,i,r,n,s,o,a){let l=new Sn(e,t,i,r,n,s,o,a);if(this.curves.length>0){let u=l.getPoint(0);if(!u.equals(this.currentPoint))this.lineTo(u.x,u.y)}this.curves.push(l);let c=l.getPoint(1);return this.currentPoint.copy(c),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class _r extends Rs{constructor(e){super(e);this.uuid=di(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,r=this.holes.length;i<r;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let r=e.holes[t];this.holes.push(new Rs().fromJSON(r))}return this}}function bc(e,t,i=2){let r=t&&t.length,n=r?t[0]*i:e.length,s=du(e,0,n,i,!0),o=[];if(!s||s.next===s.prev)return o;let a,l,c;if(r)s=ag(e,t,s,i);if(e.length>80*i){a=e[0],l=e[1];let u=a,f=l;for(let h=i;h<n;h+=i){let d=e[h],x=e[h+1];if(d<a)a=d;if(x<l)l=x;if(d>u)u=d;if(x>f)f=x}c=Math.max(u-a,f-l),c=c!==0?32767/c:0}return Jo(s,o,i,a,l,c,0),o}function du(e,t,i,r,n){let s;if(n===_g(e,t,i,r)>0)for(let o=t;o<i;o+=r)s=fu(o/r|0,e[o],e[o+1],s);else for(let o=i-r;o>=t;o-=r)s=fu(o/r|0,e[o],e[o+1],s);if(s&&Cs(s,s.next))Qo(s),s=s.next;return s}function En(e,t){if(!e)return e;if(!t)t=e;let i=e,r;do if(r=!1,!i.steiner&&(Cs(i,i.next)||Yt(i.prev,i,i.next)===0)){if(Qo(i),i=t=i.prev,i===i.next)break;r=!0}else i=i.next;while(r||i!==t);return t}function Jo(e,t,i,r,n,s,o){if(!e)return;if(!o&&s)fg(e,r,n,s);let a=e;while(e.prev!==e.next){let l=e.prev,c=e.next;if(s?ng(e,r,n,s):rg(e)){t.push(l.i,e.i,c.i),Qo(e),e=c.next,a=c.next;continue}if(e=c,e===a){if(!o)Jo(En(e),t,i,r,n,s,1);else if(o===1)e=sg(En(e),t),Jo(e,t,i,r,n,s,2);else if(o===2)og(e,t,i,r,n,s);break}}}function rg(e){let t=e.prev,i=e,r=e.next;if(Yt(t,i,r)>=0)return!1;let n=t.x,s=i.x,o=r.x,a=t.y,l=i.y,c=r.y,u=Math.min(n,s,o),f=Math.min(a,l,c),h=Math.max(n,s,o),d=Math.max(a,l,c),x=r.next;while(x!==t){if(x.x>=u&&x.x<=h&&x.y>=f&&x.y<=d&&Zo(n,a,s,l,o,c,x.x,x.y)&&Yt(x.prev,x,x.next)>=0)return!1;x=x.next}return!0}function ng(e,t,i,r){let n=e.prev,s=e,o=e.next;if(Yt(n,s,o)>=0)return!1;let a=n.x,l=s.x,c=o.x,u=n.y,f=s.y,h=o.y,d=Math.min(a,l,c),x=Math.min(u,f,h),y=Math.max(a,l,c),p=Math.max(u,f,h),m=Mc(d,x,t,i,r),b=Mc(y,p,t,i,r),{prevZ:T,nextZ:M}=e;while(T&&T.z>=m&&M&&M.z<=b){if(T.x>=d&&T.x<=y&&T.y>=x&&T.y<=p&&T!==n&&T!==o&&Zo(a,u,l,f,c,h,T.x,T.y)&&Yt(T.prev,T,T.next)>=0)return!1;if(T=T.prevZ,M.x>=d&&M.x<=y&&M.y>=x&&M.y<=p&&M!==n&&M!==o&&Zo(a,u,l,f,c,h,M.x,M.y)&&Yt(M.prev,M,M.next)>=0)return!1;M=M.nextZ}while(T&&T.z>=m){if(T.x>=d&&T.x<=y&&T.y>=x&&T.y<=p&&T!==n&&T!==o&&Zo(a,u,l,f,c,h,T.x,T.y)&&Yt(T.prev,T,T.next)>=0)return!1;T=T.prevZ}while(M&&M.z<=b){if(M.x>=d&&M.x<=y&&M.y>=x&&M.y<=p&&M!==n&&M!==o&&Zo(a,u,l,f,c,h,M.x,M.y)&&Yt(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function sg(e,t){let i=e;do{let r=i.prev,n=i.next.next;if(!Cs(r,n)&&mu(r,i,i.next,n)&&Ko(r,n)&&Ko(n,r))t.push(r.i,i.i,n.i),Qo(i),Qo(i.next),i=e=n;i=i.next}while(i!==e);return En(i)}function og(e,t,i,r,n,s){let o=e;do{let a=o.next.next;while(a!==o.prev){if(o.i!==a.i&&mg(o,a)){let l=gu(o,a);o=En(o,o.next),l=En(l,l.next),Jo(o,t,i,r,n,s,0),Jo(l,t,i,r,n,s,0);return}a=a.next}o=o.next}while(o!==e)}function ag(e,t,i,r){let n=[];for(let s=0,o=t.length;s<o;s++){let a=t[s]*r,l=s<o-1?t[s+1]*r:e.length,c=du(e,a,l,r,!1);if(c===c.next)c.steiner=!0;n.push(pg(c))}n.sort(lg);for(let s=0;s<n.length;s++)i=cg(n[s],i);return i}function lg(e,t){let i=e.x-t.x;if(i===0){if(i=e.y-t.y,i===0){let r=(e.next.y-e.y)/(e.next.x-e.x),n=(t.next.y-t.y)/(t.next.x-t.x);i=r-n}}return i}function cg(e,t){let i=hg(e,t);if(!i)return t;let r=gu(i,e);return En(r,r.next),En(i,i.next)}function hg(e,t){let i=t,{x:r,y:n}=e,s=-1/0,o;if(Cs(e,i))return i;do{if(Cs(e,i.next))return i.next;else if(n<=i.y&&n>=i.next.y&&i.next.y!==i.y){let f=i.x+(n-i.y)*(i.next.x-i.x)/(i.next.y-i.y);if(f<=r&&f>s){if(s=f,o=i.x<i.next.x?i:i.next,f===r)return o}}i=i.next}while(i!==t);if(!o)return null;let a=o,l=o.x,c=o.y,u=1/0;i=o;do{if(r>=i.x&&i.x>=l&&r!==i.x&&pu(n<c?r:s,n,l,c,n<c?s:r,n,i.x,i.y)){let f=Math.abs(n-i.y)/(r-i.x);if(Ko(i,e)&&(f<u||f===u&&(i.x>o.x||i.x===o.x&&ug(o,i))))o=i,u=f}i=i.next}while(i!==a);return o}function ug(e,t){return Yt(e.prev,e,t.prev)<0&&Yt(t.next,e,e.next)<0}function fg(e,t,i,r){let n=e;do{if(n.z===0)n.z=Mc(n.x,n.y,t,i,r);n.prevZ=n.prev,n.nextZ=n.next,n=n.next}while(n!==e);n.prevZ.nextZ=null,n.prevZ=null,dg(n)}function dg(e){let t,i=1;do{let r=e,n;e=null;let s=null;t=0;while(r){t++;let o=r,a=0;for(let c=0;c<i;c++)if(a++,o=o.nextZ,!o)break;let l=i;while(a>0||l>0&&o){if(a!==0&&(l===0||!o||r.z<=o.z))n=r,r=r.nextZ,a--;else n=o,o=o.nextZ,l--;if(s)s.nextZ=n;else e=n;n.prevZ=s,s=n}r=o}s.nextZ=null,i*=2}while(t>1);return e}function Mc(e,t,i,r,n){return e=(e-i)*n|0,t=(t-r)*n|0,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e|t<<1}function pg(e){let t=e,i=e;do{if(t.x<i.x||t.x===i.x&&t.y<i.y)i=t;t=t.next}while(t!==e);return i}function pu(e,t,i,r,n,s,o,a){return(n-o)*(t-a)>=(e-o)*(s-a)&&(e-o)*(r-a)>=(i-o)*(t-a)&&(i-o)*(s-a)>=(n-o)*(r-a)}function Zo(e,t,i,r,n,s,o,a){return!(e===o&&t===a)&&pu(e,t,i,r,n,s,o,a)}function mg(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!gg(e,t)&&(Ko(e,t)&&Ko(t,e)&&xg(e,t)&&(Yt(e.prev,e,t.prev)||Yt(e,t.prev,t))||Cs(e,t)&&Yt(e.prev,e,e.next)>0&&Yt(t.prev,t,t.next)>0)}function Yt(e,t,i){return(t.y-e.y)*(i.x-t.x)-(t.x-e.x)*(i.y-t.y)}function Cs(e,t){return e.x===t.x&&e.y===t.y}function mu(e,t,i,r){let n=ul(Yt(e,t,i)),s=ul(Yt(e,t,r)),o=ul(Yt(i,r,e)),a=ul(Yt(i,r,t));if(n!==s&&o!==a)return!0;if(n===0&&hl(e,i,t))return!0;if(s===0&&hl(e,r,t))return!0;if(o===0&&hl(i,e,r))return!0;if(a===0&&hl(i,t,r))return!0;return!1}function hl(e,t,i){return t.x<=Math.max(e.x,i.x)&&t.x>=Math.min(e.x,i.x)&&t.y<=Math.max(e.y,i.y)&&t.y>=Math.min(e.y,i.y)}function ul(e){return e>0?1:e<0?-1:0}function gg(e,t){let i=e;do{if(i.i!==e.i&&i.next.i!==e.i&&i.i!==t.i&&i.next.i!==t.i&&mu(i,i.next,e,t))return!0;i=i.next}while(i!==e);return!1}function Ko(e,t){return Yt(e.prev,e,e.next)<0?Yt(e,t,e.next)>=0&&Yt(e,e.prev,t)>=0:Yt(e,t,e.prev)<0||Yt(e,e.next,t)<0}function xg(e,t){let i=e,r=!1,n=(e.x+t.x)/2,s=(e.y+t.y)/2;do{if(i.y>s!==i.next.y>s&&i.next.y!==i.y&&n<(i.next.x-i.x)*(s-i.y)/(i.next.y-i.y)+i.x)r=!r;i=i.next}while(i!==e);return r}function gu(e,t){let i=Sc(e.i,e.x,e.y),r=Sc(t.i,t.x,t.y),n=e.next,s=t.prev;return e.next=t,t.prev=e,i.next=n,n.prev=i,r.next=i,i.prev=r,s.next=r,r.prev=s,r}function fu(e,t,i,r){let n=Sc(e,t,i);if(!r)n.prev=n,n.next=n;else n.next=r.next,n.prev=r,r.next.prev=n,r.next=n;return n}function Qo(e){if(e.next.prev=e.prev,e.prev.next=e.next,e.prevZ)e.prevZ.nextZ=e.nextZ;if(e.nextZ)e.nextZ.prevZ=e.prevZ}function Sc(e,t,i){return{i:e,x:t,y:i,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function _g(e,t,i,r){let n=0;for(let s=t,o=i-r;s<i;s+=r)n+=(e[o]-e[s])*(e[s+1]+e[o+1]),o=s;return n}class Tc{static triangulate(e,t,i=2){return bc(e,t,i)}}class ki{static area(e){let t=e.length,i=0;for(let r=t-1,n=0;n<t;r=n++)i+=e[r].x*e[n].y-e[n].x*e[r].y;return i*0.5}static isClockWise(e){return ki.area(e)<0}static triangulateShape(e,t){let i=[],r=[],n=[];xu(e),_u(i,e);let s=e.length;t.forEach(xu);for(let a=0;a<t.length;a++)r.push(s),s+=t[a].length,_u(i,t[a]);let o=Tc.triangulate(i,r);for(let a=0;a<o.length;a+=3)n.push(o.slice(a,a+3));return n}}function xu(e){let t=e.length;if(t>2&&e[t-1].equals(e[0]))e.pop()}function _u(e,t){for(let i=0;i<t.length;i++)e.push(t[i].x),e.push(t[i].y)}class fl extends Xe{constructor(e=new _r([new H(0.5,0.5),new H(-0.5,0.5),new H(-0.5,-0.5),new H(0.5,-0.5)]),t={}){super();this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let i=this,r=[],n=[];for(let o=0,a=e.length;o<a;o++){let l=e[o];s(l)}this.setAttribute("position",new Ge(r,3)),this.setAttribute("uv",new Ge(n,2)),this.computeVertexNormals();function s(o){let a=[],l=t.curveSegments!==void 0?t.curveSegments:12,c=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,h=t.bevelThickness!==void 0?t.bevelThickness:0.2,d=t.bevelSize!==void 0?t.bevelSize:h-0.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,y=t.bevelSegments!==void 0?t.bevelSegments:3,p=t.extrudePath,m=t.UVGenerator!==void 0?t.UVGenerator:vg,b,T=!1,M,A,R,g;if(p){b=p.getSpacedPoints(c),T=!0,f=!1;let re=p.isCatmullRomCurve3?p.closed:!1;M=p.computeFrenetFrames(c,re),A=new w,R=new w,g=new w}if(!f)y=0,h=0,d=0,x=0;let S=o.extractPoints(l),{shape:P,holes:V}=S;if(!ki.isClockWise(P)){P=P.reverse();for(let re=0,fe=V.length;re<fe;re++){let _e=V[re];if(ki.isClockWise(_e))V[re]=_e.reverse()}}function U(re){let Ie=re[0];for(let Le=1;Le<=re.length;Le++){let Je=Le%re.length,We=re[Je],ft=We.x-Ie.x,pt=We.y-Ie.y,st=ft*ft+pt*pt,N=Math.max(Math.abs(We.x),Math.abs(We.y),Math.abs(Ie.x),Math.abs(Ie.y)),kt=0.000000000000000000010000000000000001*N*N;if(st<=kt){re.splice(Je,1),Le--;continue}Ie=We}}U(P),V.forEach(U);let j=V.length,C=P;for(let re=0;re<j;re++){let fe=V[re];P=P.concat(fe)}function Y(re,fe,_e){if(!fe)Be("ExtrudeGeometry: vec does not exist");return re.clone().addScaledVector(fe,_e)}let Q=P.length;function G(re,fe,_e){let Ie,Le,Je,We=re.x-fe.x,ft=re.y-fe.y,pt=_e.x-re.x,st=_e.y-re.y,N=We*We+ft*ft,kt=We*st-ft*pt;if(Math.abs(kt)>Number.EPSILON){let at=Math.sqrt(N),St=Math.sqrt(pt*pt+st*st),Se=fe.x-ft/at,bt=fe.y+We/at,$e=_e.x-st/St,je=_e.y+pt/St,Wt=(($e-Se)*st-(je-bt)*pt)/(We*st-ft*pt);Ie=Se+We*Wt-re.x,Le=bt+ft*Wt-re.y;let E=Ie*Ie+Le*Le;if(E<=2)return new H(Ie,Le);else Je=Math.sqrt(E/2)}else{let at=!1;if(We>Number.EPSILON){if(pt>Number.EPSILON)at=!0}else if(We<-Number.EPSILON){if(pt<-Number.EPSILON)at=!0}else if(Math.sign(ft)===Math.sign(st))at=!0;if(at)Ie=-ft,Le=We,Je=Math.sqrt(N);else Ie=We,Le=ft,Je=Math.sqrt(N/2)}return new H(Ie/Je,Le/Je)}let ge=[];for(let re=0,fe=C.length,_e=fe-1,Ie=re+1;re<fe;re++,_e++,Ie++){if(_e===fe)_e=0;if(Ie===fe)Ie=0;ge[re]=G(C[re],C[_e],C[Ie])}let X=[],te,ae=ge.concat();for(let re=0,fe=j;re<fe;re++){let _e=V[re];te=[];for(let Ie=0,Le=_e.length,Je=Le-1,We=Ie+1;Ie<Le;Ie++,Je++,We++){if(Je===Le)Je=0;if(We===Le)We=0;te[Ie]=G(_e[Ie],_e[Je],_e[We])}X.push(te),ae=ae.concat(te)}let Ue;if(y===0)Ue=ki.triangulateShape(C,V);else{let re=[],fe=[];for(let _e=0;_e<y;_e++){let Ie=_e/y,Le=h*Math.cos(Ie*Math.PI/2),Je=d*Math.sin(Ie*Math.PI/2)+x;for(let We=0,ft=C.length;We<ft;We++){let pt=Y(C[We],ge[We],Je);if(ue(pt.x,pt.y,-Le),Ie===0)re.push(pt)}for(let We=0,ft=j;We<ft;We++){let pt=V[We];te=X[We];let st=[];for(let N=0,kt=pt.length;N<kt;N++){let at=Y(pt[N],te[N],Je);if(ue(at.x,at.y,-Le),Ie===0)st.push(at)}if(Ie===0)fe.push(st)}}Ue=ki.triangulateShape(re,fe)}let ie=Ue.length,le=d+x;for(let re=0;re<Q;re++){let fe=f?Y(P[re],ae[re],le):P[re];if(!T)ue(fe.x,fe.y,0);else R.copy(M.normals[0]).multiplyScalar(fe.x),A.copy(M.binormals[0]).multiplyScalar(fe.y),g.copy(b[0]).add(R).add(A),ue(g.x,g.y,g.z)}for(let re=1;re<=c;re++)for(let fe=0;fe<Q;fe++){let _e=f?Y(P[fe],ae[fe],le):P[fe];if(!T)ue(_e.x,_e.y,u/c*re);else R.copy(M.normals[re]).multiplyScalar(_e.x),A.copy(M.binormals[re]).multiplyScalar(_e.y),g.copy(b[re]).add(R).add(A),ue(g.x,g.y,g.z)}for(let re=y-1;re>=0;re--){let fe=re/y,_e=h*Math.cos(fe*Math.PI/2),Ie=d*Math.sin(fe*Math.PI/2)+x;for(let Le=0,Je=C.length;Le<Je;Le++){let We=Y(C[Le],ge[Le],Ie);ue(We.x,We.y,u+_e)}for(let Le=0,Je=V.length;Le<Je;Le++){let We=V[Le];te=X[Le];for(let ft=0,pt=We.length;ft<pt;ft++){let st=Y(We[ft],te[ft],Ie);if(!T)ue(st.x,st.y,u+_e);else ue(st.x,st.y+b[c-1].y,b[c-1].x+_e)}}}Fe(),He();function Fe(){let re=r.length/3;if(f){let fe=0,_e=Q*fe;for(let Ie=0;Ie<ie;Ie++){let Le=Ue[Ie];mt(Le[2]+_e,Le[1]+_e,Le[0]+_e)}fe=c+y*2,_e=Q*fe;for(let Ie=0;Ie<ie;Ie++){let Le=Ue[Ie];mt(Le[0]+_e,Le[1]+_e,Le[2]+_e)}}else{for(let fe=0;fe<ie;fe++){let _e=Ue[fe];mt(_e[2],_e[1],_e[0])}for(let fe=0;fe<ie;fe++){let _e=Ue[fe];mt(_e[0]+Q*c,_e[1]+Q*c,_e[2]+Q*c)}}i.addGroup(re,r.length/3-re,0)}function He(){let re=r.length/3,fe=0;Ze(C,fe),fe+=C.length;for(let _e=0,Ie=V.length;_e<Ie;_e++){let Le=V[_e];Ze(Le,fe),fe+=Le.length}i.addGroup(re,r.length/3-re,1)}function Ze(re,fe){let _e=re.length;while(--_e>=0){let Ie=_e,Le=_e-1;if(Le<0)Le=re.length-1;for(let Je=0,We=c+y*2;Je<We;Je++){let ft=Q*Je,pt=Q*(Je+1),st=fe+Ie+ft,N=fe+Le+ft,kt=fe+Le+pt,at=fe+Ie+pt;lt(st,N,kt,at)}}}function ue(re,fe,_e){a.push(re),a.push(fe),a.push(_e)}function mt(re,fe,_e){Pe(re),Pe(fe),Pe(_e);let Ie=r.length/3,Le=m.generateTopUV(i,r,Ie-3,Ie-2,Ie-1);ot(Le[0]),ot(Le[1]),ot(Le[2])}function lt(re,fe,_e,Ie){Pe(re),Pe(fe),Pe(Ie),Pe(fe),Pe(_e),Pe(Ie);let Le=r.length/3,Je=m.generateSideWallUV(i,r,Le-6,Le-3,Le-2,Le-1);ot(Je[0]),ot(Je[1]),ot(Je[3]),ot(Je[1]),ot(Je[2]),ot(Je[3])}function Pe(re){r.push(a[re*3+0]),r.push(a[re*3+1]),r.push(a[re*3+2])}function ot(re){n.push(re.x),n.push(re.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return yg(t,i,e)}static fromJSON(e,t){let i=[];for(let n=0,s=e.shapes.length;n<s;n++){let o=t[e.shapes[n]];i.push(o)}let r=e.options.extrudePath;if(r!==void 0)e.options.extrudePath=new Wr[r.type]().fromJSON(r);return new fl(i,e.options)}}var vg={generateTopUV:function(e,t,i,r,n){let s=t[i*3],o=t[i*3+1],a=t[r*3],l=t[r*3+1],c=t[n*3],u=t[n*3+1];return[new H(s,o),new H(a,l),new H(c,u)]},generateSideWallUV:function(e,t,i,r,n,s){let o=t[i*3],a=t[i*3+1],l=t[i*3+2],c=t[r*3],u=t[r*3+1],f=t[r*3+2],h=t[n*3],d=t[n*3+1],x=t[n*3+2],y=t[s*3],p=t[s*3+1],m=t[s*3+2];if(Math.abs(a-u)<Math.abs(o-c))return[new H(o,1-l),new H(c,1-f),new H(h,1-x),new H(y,1-m)];else return[new H(a,1-l),new H(u,1-f),new H(d,1-x),new H(p,1-m)]}};function yg(e,t,i){if(i.shapes=[],Array.isArray(e))for(let r=0,n=e.length;r<n;r++){let s=e[r];i.shapes.push(s.uuid)}else i.shapes.push(e.uuid);if(i.options=Object.assign({},t),t.extrudePath!==void 0)i.options.extrudePath=t.extrudePath.toJSON();return i}class tr extends Xe{constructor(e=1,t=1,i=1,r=1){super();this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};let n=e/2,s=t/2,o=Math.floor(i),a=Math.floor(r),l=o+1,c=a+1,u=e/o,f=t/a,h=[],d=[],x=[],y=[];for(let p=0;p<c;p++){let m=p*f-s;for(let b=0;b<l;b++){let T=b*u-n;d.push(T,-m,0),x.push(0,0,1),y.push(b/o),y.push(1-p/a)}}for(let p=0;p<a;p++)for(let m=0;m<o;m++){let b=m+l*p,T=m+l*(p+1),M=m+1+l*(p+1),A=m+1+l*p;h.push(b,T,A),h.push(T,M,A)}this.setIndex(h),this.setAttribute("position",new Ge(d,3)),this.setAttribute("normal",new Ge(x,3)),this.setAttribute("uv",new Ge(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new tr(e.width,e.height,e.widthSegments,e.heightSegments)}}class dl extends Xe{constructor(e=new _r([new H(0,0.5),new H(-0.5,-0.5),new H(0.5,-0.5)]),t=12){super();this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let i=[],r=[],n=[],s=[],o=0,a=0;if(Array.isArray(e)===!1)l(e);else for(let c=0;c<e.length;c++)l(e[c]),this.addGroup(o,a,c),o+=a,a=0;this.setIndex(i),this.setAttribute("position",new Ge(r,3)),this.setAttribute("normal",new Ge(n,3)),this.setAttribute("uv",new Ge(s,2));function l(c){let u=r.length/3,f=c.extractPoints(t),{shape:h,holes:d}=f;if(ki.isClockWise(h)===!1)h=h.reverse();for(let y=0,p=d.length;y<p;y++){let m=d[y];if(ki.isClockWise(m)===!0)d[y]=m.reverse()}let x=ki.triangulateShape(h,d);for(let y=0,p=d.length;y<p;y++){let m=d[y];h=h.concat(m)}for(let y=0,p=h.length;y<p;y++){let m=h[y];r.push(m.x,m.y,0),n.push(0,0,1),s.push(m.x,m.y)}for(let y=0,p=x.length;y<p;y++){let m=x[y],b=m[0]+u,T=m[1]+u,M=m[2]+u;i.push(b,T,M),a+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return Mg(t,e)}static fromJSON(e,t){let i=[];for(let r=0,n=e.shapes.length;r<n;r++){let s=t[e.shapes[r]];i.push(s)}return new dl(i,e.curveSegments)}}function Mg(e,t){if(t.shapes=[],Array.isArray(e))for(let i=0,r=e.length;i<r;i++){let n=e[i];t.shapes.push(n.uuid)}else t.shapes.push(e.uuid);return t}class pl extends Xe{constructor(e=1,t=0.4,i=12,r=48,n=Math.PI*2,s=0,o=Math.PI*2){super();this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:r,arc:n,thetaStart:s,thetaLength:o},i=Math.floor(i),r=Math.floor(r);let a=[],l=[],c=[],u=[],f=new w,h=new w,d=new w;for(let x=0;x<=i;x++){let y=s+x/i*o;for(let p=0;p<=r;p++){let m=p/r*n;h.x=(e+t*Math.cos(y))*Math.cos(m),h.y=(e+t*Math.cos(y))*Math.sin(m),h.z=t*Math.sin(y),l.push(h.x,h.y,h.z),f.x=e*Math.cos(m),f.y=e*Math.sin(m),d.subVectors(h,f).normalize(),c.push(d.x,d.y,d.z),u.push(p/r),u.push(x/i)}}for(let x=1;x<=i;x++)for(let y=1;y<=r;y++){let p=(r+1)*x+y-1,m=(r+1)*(x-1)+y-1,b=(r+1)*(x-1)+y,T=(r+1)*x+y;a.push(p,m,T),a.push(m,b,T)}this.setIndex(a),this.setAttribute("position",new Ge(l,3)),this.setAttribute("normal",new Ge(c,3)),this.setAttribute("uv",new Ge(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pl(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}class ml extends Xe{constructor(e=new qo(new w(-1,-1,0),new w(-1,1,0),new w(1,1,0)),t=64,i=1,r=8,n=!1){super();this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:r,closed:n};let s=e.computeFrenetFrames(t,n);this.tangents=s.tangents,this.normals=s.normals,this.binormals=s.binormals;let o=new w,a=new w,l=new H,c=new w,u=[],f=[],h=[],d=[];x(),this.setIndex(d),this.setAttribute("position",new Ge(u,3)),this.setAttribute("normal",new Ge(f,3)),this.setAttribute("uv",new Ge(h,2));function x(){for(let b=0;b<t;b++)y(b);y(n===!1?t:0),m(),p()}function y(b){c=e.getPointAt(b/t,c);let T=s.normals[b],M=s.binormals[b];for(let A=0;A<=r;A++){let R=A/r*Math.PI*2,g=Math.sin(R),S=-Math.cos(R);a.x=S*T.x+g*M.x,a.y=S*T.y+g*M.y,a.z=S*T.z+g*M.z,a.normalize(),f.push(a.x,a.y,a.z),o.x=c.x+i*a.x,o.y=c.y+i*a.y,o.z=c.z+i*a.z,u.push(o.x,o.y,o.z)}}function p(){for(let b=1;b<=t;b++)for(let T=1;T<=r;T++){let M=(r+1)*(b-1)+(T-1),A=(r+1)*b+(T-1),R=(r+1)*b+T,g=(r+1)*(b-1)+T;d.push(M,A,g),d.push(A,R,g)}}function m(){for(let b=0;b<=t;b++)for(let T=0;T<=r;T++)l.x=b/t,l.y=T/r,h.push(l.x,l.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new ml(new Wr[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}function Ir(e){let t={};for(let i in e){t[i]={};for(let r in e[i]){let n=e[i][r];if(vu(n))if(n.isRenderTargetTexture)ye("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][r]=null;else t[i][r]=n.clone();else if(Array.isArray(n))if(vu(n[0])){let s=[];for(let o=0,a=n.length;o<a;o++)s[o]=n[o].clone();t[i][r]=s}else t[i][r]=n.slice();else t[i][r]=n}}return t}function wi(e){let t={};for(let i=0;i<e.length;i++){let r=Ir(e[i]);for(let n in r)t[n]=r[n]}return t}function vu(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function yu(e){let t=[];for(let i=0;i<e.length;i++)t.push(e[i].clone());return t}function gl(e){let t=e.getRenderTarget();if(t===null)return e.outputColorSpace;if(t.isXRRenderTarget===!0)return t.texture.colorSpace;return rt.workingColorSpace}var ir={clone:Ir,merge:wi};var Mu=`
void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}
`;var Su=`
void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}
`;class Dt extends zt{constructor(e){super();if(this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Mu,this.fragmentShader=Su,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0)this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ir(e.uniforms),this.uniformsGroups=yu(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let s=this.uniforms[r].value;if(s&&s.isTexture)t.uniforms[r]={type:"t",value:s.toJSON(e).uuid};else if(s&&s.isColor)t.uniforms[r]={type:"c",value:s.getHex()};else if(s&&s.isVector2)t.uniforms[r]={type:"v2",value:s.toArray()};else if(s&&s.isVector3)t.uniforms[r]={type:"v3",value:s.toArray()};else if(s&&s.isVector4)t.uniforms[r]={type:"v4",value:s.toArray()};else if(s&&s.isMatrix3)t.uniforms[r]={type:"m3",value:s.toArray()};else if(s&&s.isMatrix4)t.uniforms[r]={type:"m4",value:s.toArray()};else t.uniforms[r]={value:s}}if(Object.keys(this.defines).length>0)t.defines=this.defines;t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let r in this.extensions)if(this.extensions[r]===!0)i[r]=!0;if(Object.keys(i).length>0)t.extensions=i;return t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let i in e.uniforms){let r=e.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=t[r.value]||null;break;case"c":this.uniforms[i].value=new de().setHex(r.value);break;case"v2":this.uniforms[i].value=new H().fromArray(r.value);break;case"v3":this.uniforms[i].value=new w().fromArray(r.value);break;case"v4":this.uniforms[i].value=new Mt().fromArray(r.value);break;case"m3":this.uniforms[i].value=new Qe().fromArray(r.value);break;case"m4":this.uniforms[i].value=new Ye().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(e.defines!==void 0)this.defines=e.defines;if(e.vertexShader!==void 0)this.vertexShader=e.vertexShader;if(e.fragmentShader!==void 0)this.fragmentShader=e.fragmentShader;if(e.glslVersion!==void 0)this.glslVersion=e.glslVersion;if(e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];if(e.lights!==void 0)this.lights=e.lights;if(e.clipping!==void 0)this.clipping=e.clipping;return this}}class wn extends Dt{constructor(e){super(e);this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Ai extends zt{constructor(e){super();this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new de(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new de(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=lr,this.normalScale=new H(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Si,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class $o extends Ai{constructor(e){super();this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new H(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return tt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+0.4*t)/(1-0.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new de(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new de(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new de(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){if(this._anisotropy>0!==e>0)this.version++;this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){if(this._clearcoat>0!==e>0)this.version++;this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){if(this._diffuseRoughness>0!==e>0)this.version++;this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){if(this._iridescence>0!==e>0)this.version++;this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){if(this._dispersion>0!==e>0)this.version++;this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){if(this._retroreflectivity>0!==e>0)this.version++;this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){if(this._sheen>0!==e>0)this.version++;this._sheen=e}get transmission(){return this._transmission}set transmission(e){if(this._transmission>0!==e>0)this.version++;this._transmission=e}get iridescenceThicknessRange(){return Ki('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){Ki('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class jo extends zt{constructor(e){super();this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new de(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new de(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=lr,this.normalScale=new H(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Si,this.combine=en,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=0.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ea extends zt{constructor(e){super();this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=yh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class ta extends zt{constructor(e){super();this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function Xr(e,t){if(!e||e.constructor===t)return e;if(typeof t.BYTES_PER_ELEMENT==="number")return new t(e);return Array.prototype.slice.call(e)}function Ps(e){return e!==void 0&&e.inTangents!==void 0&&e.outTangents!==void 0}class rr{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,r=t[i],n=t[i-1];i:{e:{let s;t:{r:if(!(e<r)){for(let o=i+2;;){if(r===void 0){if(e<n)break r;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(n=r,r=t[++i],e<r)break e}s=t.length;break t}if(!(e>=n)){let o=t[1];if(e<o)i=2,n=o;for(let a=i-2;;){if(n===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===a)break;if(r=n,n=t[--i-1],e>=n)break e}s=i,i=0;break t}break i}while(i<s){let o=i+s>>>1;if(e<t[o])s=o;else i=o+1}if(r=t[i],n=t[i-1],n===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,n,r)}return this.interpolate_(i,n,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,n=e*r;for(let s=0;s!==r;++s)t[s]=i[n+s];return t}interpolate_(){throw Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}}class xl extends rr{constructor(e,t,i,r){super(e,t,i,r);this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ea,endingEnd:Ea}}intervalChanged_(e,t,i){let r=this.parameterPositions,n=e-2,s=e+1,o=r[n],a=r[s];if(o===void 0)switch(this.getSettings_().endingStart){case wa:n=e,o=2*t-i;break;case Aa:n=r.length-2,o=t+r[n]-r[n+1];break;default:n=e,o=i}if(a===void 0)switch(this.getSettings_().endingEnd){case wa:s=e,a=2*i-t;break;case Aa:s=1,a=i+r[1]-r[0];break;default:s=e-1,a=t}let l=(i-t)*0.5,c=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(a-i),this._offsetPrev=n*c,this._offsetNext=s*c}interpolate_(e,t,i,r){let n=this.resultBuffer,s=this.sampleValues,o=this.valueSize,a=e*o,l=a-o,c=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,h=this._weightNext,d=(i-t)/(r-t),x=d*d,y=x*d,p=-f*y+2*f*x-f*d,m=(1+f)*y+(-1.5-2*f)*x+(-0.5+f)*d+1,b=(-1-h)*y+(1.5+h)*x+0.5*d,T=h*y-h*x;for(let M=0;M!==o;++M)n[M]=p*s[c+M]+m*s[l+M]+b*s[a+M]+T*s[u+M];return n}}class ia extends rr{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let n=this.resultBuffer,s=this.sampleValues,o=this.valueSize,a=e*o,l=a-o,c=(i-t)/(r-t),u=1-c;for(let f=0;f!==o;++f)n[f]=s[l+f]*u+s[a+f]*c;return n}}class _l extends rr{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}}class vl extends rr{interpolate_(e,t,i,r){let n=this.resultBuffer,s=this.sampleValues,o=this.valueSize,a=e*o,l=a-o,c=this.inTangents,u=this.outTangents;if(!c||!u){let d=(i-t)/(r-t),x=1-d;for(let y=0;y!==o;++y)n[y]=s[l+y]*x+s[a+y]*d;return n}let f=o*2,h=e-1;for(let d=0;d!==o;++d){let x=s[l+d],y=s[a+d],p=h*f+d*2,m=u[p],b=u[p+1],T=e*f+d*2,M=c[T],A=c[T+1],R=Ig(i,t,m,M,r);n[d]=Tu(R,x,b,A,y)}return n}}function Tu(e,t,i,r,n){let s=1-e;return s*s*s*t+3*s*s*e*i+3*s*e*e*r+e*e*e*n}function Pg(e,t,i,r,n){let s=1-e;return 3*s*s*(i-t)+6*s*e*(r-i)+3*e*e*(n-r)}function Ig(e,t,i,r,n){let s=(e-t)/(n-t);for(let o=0;o<8;o++){let a=Tu(s,t,i,r,n)-e;if(Math.abs(a)<0.0000000001)break;let l=Pg(s,t,i,r,n);if(Math.abs(l)<0.0000000001)break;s=Math.max(0,Math.min(1,s-a/l))}return s}class ai{constructor(e,t,i,r){if(e===void 0)throw Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Xr(t,this.TimeBufferType),this.values=Xr(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Xr(e.times,Array),values:Xr(e.values,Array)};let r=e.getInterpolation();if(r!==e.DefaultInterpolation)i.interpolation=r;if(Ps(e.settings))i.settings={inTangents:Xr(e.settings.inTangents,Array),outTangents:Xr(e.settings.outTangents,Array)}}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new _l(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ia(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new xl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new vl(this.times,this.values,this.getValueSize(),e);if(this.settings)t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents;return t}setInterpolation(e){let t;switch(e){case sn:t=this.InterpolantFactoryMethodDiscrete;break;case ba:t=this.InterpolantFactoryMethodLinear;break;case Ta:t=this.InterpolantFactoryMethodSmooth;break;case zl:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(i);return ye("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return sn;case this.InterpolantFactoryMethodLinear:return ba;case this.InterpolantFactoryMethodSmooth:return Ta;case this.InterpolantFactoryMethodBezier:return zl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e;if(Ps(this.settings))Eu(this.settings.inTangents,e),Eu(this.settings.outTangents,e)}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e;if(Ps(this.settings))wu(this.settings.inTangents,e),wu(this.settings.outTangents,e)}return this}trim(e,t){let i=this.times,r=i.length,n=0,s=r-1;while(n!==r&&i[n]<e)++n;while(s!==-1&&i[s]>t)--s;if(++s,n!==0||s!==r){if(n>=s)s=Math.max(s,1),n=s-1;let o=this.getValueSize();this.times=i.slice(n,s),this.values=this.values.slice(n*o,s*o)}return this}validate(){let e=!0,t=this.getValueSize();if(t-Math.floor(t)!==0)Be("KeyframeTrack: Invalid value size in track.",this),e=!1;let i=this.times,r=this.values,n=i.length;if(n===0)Be("KeyframeTrack: Track is empty.",this),e=!1;let s=null;for(let o=0;o!==n;o++){let a=i[o];if(typeof a==="number"&&isNaN(a)){Be("KeyframeTrack: Time is not a valid number.",this,o,a),e=!1;break}if(s!==null&&s>a){Be("KeyframeTrack: Out of order keys.",this,o,a,s),e=!1;break}s=a}if(r!==void 0){if(Vl(r))for(let o=0,a=r.length;o!==a;++o){let l=r[o];if(isNaN(l)){Be("KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===Ta,n=e.length-1,s=1;for(let o=1;o<n;++o){let a=!1,l=e[o],c=e[o+1];if(l!==c&&(o!==1||l!==e[0]))if(!r){let u=o*i,f=u-i,h=u+i;for(let d=0;d!==i;++d){let x=t[u+d];if(x!==t[f+d]||x!==t[h+d]){a=!0;break}}}else a=!0;if(a){if(o!==s){e[s]=e[o];let u=o*i,f=s*i;for(let h=0;h!==i;++h)t[f+h]=t[u+h]}++s}}if(n>0){e[s]=e[n];for(let o=n*i,a=s*i,l=0;l!==i;++l)t[a+l]=t[o+l];++s}if(s!==e.length)this.times=e.slice(0,s),this.values=t.slice(0,s*i);else this.times=e,this.values=t;return this}clone(){let e=this.times.slice(),t=this.values.slice(),r=new this.constructor(this.name,e,t);if(r.createInterpolant=this.createInterpolant,Ps(this.settings))r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()};return r}}function Eu(e,t){for(let i=0,r=e.length;i!==r;i+=2)e[i]+=t}function wu(e,t){for(let i=0,r=e.length;i!==r;i+=2)e[i]*=t}ai.prototype.ValueTypeName="";ai.prototype.TimeBufferType=Float32Array;ai.prototype.ValueBufferType=Float32Array;ai.prototype.DefaultInterpolation=ba;class qr extends ai{constructor(e,t,i){super(e,t,i)}}qr.prototype.ValueTypeName="bool";qr.prototype.ValueBufferType=Array;qr.prototype.DefaultInterpolation=sn;qr.prototype.InterpolantFactoryMethodLinear=void 0;qr.prototype.InterpolantFactoryMethodSmooth=void 0;class yl extends ai{constructor(e,t,i,r){super(e,t,i,r)}}yl.prototype.ValueTypeName="color";class Ml extends ai{constructor(e,t,i,r){super(e,t,i,r)}}Ml.prototype.ValueTypeName="number";class Sl extends rr{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let n=this.resultBuffer,s=this.sampleValues,o=this.valueSize,a=(i-t)/(r-t),l=e*o;for(let c=l+o;l!==c;l+=4)pi.slerpFlat(n,0,s,l-o,s,l,a);return n}}class ra extends ai{constructor(e,t,i,r){super(e,t,i,r)}InterpolantFactoryMethodLinear(e){return new Sl(this.times,this.values,this.getValueSize(),e)}}ra.prototype.ValueTypeName="quaternion";ra.prototype.InterpolantFactoryMethodSmooth=void 0;class Yr extends ai{constructor(e,t,i){super(e,t,i)}}Yr.prototype.ValueTypeName="string";Yr.prototype.ValueBufferType=Array;Yr.prototype.DefaultInterpolation=sn;Yr.prototype.InterpolantFactoryMethodLinear=void 0;Yr.prototype.InterpolantFactoryMethodSmooth=void 0;class bl extends ai{constructor(e,t,i,r){super(e,t,i,r)}}bl.prototype.ValueTypeName="vector";class Tl{constructor(e,t,i){let r=this,n=!1,s=0,o=0,a=void 0,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(c){if(o++,n===!1){if(r.onStart!==void 0)r.onStart(c,s,o)}n=!0},this.itemEnd=function(c){if(s++,r.onProgress!==void 0)r.onProgress(c,s,o);if(s===o){if(n=!1,r.onLoad!==void 0)r.onLoad()}},this.itemError=function(c){if(r.onError!==void 0)r.onError(c)},this.resolveURL=function(c){if(c=c.normalize("NFC"),a)return a(c);return c},this.setURLModifier=function(c){return a=c,this},this.addHandler=function(c,u){return l.push(c,u),this},this.removeHandler=function(c){let u=l.indexOf(c);if(u!==-1)l.splice(u,2);return this},this.getHandler=function(c){for(let u=0,f=l.length;u<f;u+=2){let h=l[u],d=l[u+1];if(h.global)h.lastIndex=0;if(h.test(c))return d}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){if(!this._abortController)this._abortController=new AbortController;return this._abortController}}var Ec=new Tl;class Li{constructor(e){if(this.manager=e!==void 0?e:Ec,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(r,n){i.load(e,r,t,n)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}}Li.DEFAULT_MATERIAL_NAME="__DEFAULT";class Hi extends nt{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super();this.isLight=!0,this.type="Light",this.color=new de(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class na extends Hi{constructor(e,t,i){super(e,i);this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(nt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new de(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}var Cc=new Ye,Ru=new w,Cu=new w;class Zr{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new H(512,512),this.mapType=$t,this.map=null,this.mapPass=null,this.matrix=new Ye,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ji,this._frameExtents=new H(1,1),this._viewportCount=1,this._viewports=[new Mt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Ru.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ru),Cu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Cu),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,r){Cc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(Cc,e.coordinateSystem,e.reversedDepth);let n=this._frameExtents,s=r?r.z/n.x:1,o=r?r.w/n.y:1,a=r?r.x/n.x:0,l=r?r.y/n.y:0;if(e.coordinateSystem===pr||e.reversedDepth)t.set(0.5*s,0,0,0.5*s+a,0,0.5*o,0,0.5*o+l,0,0,1,0,0,0,0,1);else t.set(0.5*s,0,0,0.5*s+a,0,0.5*o,0,0.5*o+l,0,0,0.5,0.5,0,0,0,1);t.multiply(Cc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){if(this.map)this.map.dispose();if(this.mapPass)this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}var El=new w,wl=new pi,vr=new w;class Rn extends nt{constructor(){super();this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ye,this.projectionMatrix=new Ye,this.projectionMatrixInverse=new Ye,this.coordinateSystem=fi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){if(super.updateMatrixWorld(e),this.matrixWorld.decompose(El,wl,vr),vr.x===1&&vr.y===1&&vr.z===1)this.matrixWorldInverse.copy(this.matrixWorld).invert();else this.matrixWorldInverse.compose(El,wl,vr.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){if(super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(El,wl,vr),vr.x===1&&vr.y===1&&vr.z===1)this.matrixWorldInverse.copy(this.matrixWorld).invert();else this.matrixWorldInverse.compose(El,wl,vr.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}var Jr=new w,Pu=new H,Iu=new H;class Zt extends Rn{constructor(e=50,t=1,i=0.1,r=2000){super();this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=0.5*this.getFilmHeight()/e;this.fov=hn*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(is*0.5*this.fov);return 0.5*this.getFilmHeight()/e}getEffectiveFOV(){return hn*2*Math.atan(Math.tan(is*0.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Jr.set(-1,-1,0.5).applyMatrix4(this.projectionMatrixInverse),t.set(Jr.x,Jr.y).multiplyScalar(-e/Jr.z),Jr.set(1,1,0.5).applyMatrix4(this.projectionMatrixInverse),i.set(Jr.x,Jr.y).multiplyScalar(-e/Jr.z)}getViewSize(e,t){return this.getViewBounds(e,Pu,Iu),t.subVectors(Iu,Pu)}setViewOffset(e,t,i,r,n,s){if(this.aspect=e/t,this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=n,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(is*0.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,n=-0.5*r,s=this.view;if(this.view!==null&&this.view.enabled){let{fullWidth:a,fullHeight:l}=s;n+=s.offsetX*r/a,t-=s.offsetY*i/l,r*=s.width/a,i*=s.height/l}let o=this.filmOffset;if(o!==0)n+=e*o/this.getFilmWidth();this.projectionMatrix.makePerspective(n,n+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);if(t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null)t.object.view=Object.assign({},this.view);return t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Pc extends Zr{constructor(){super(new Zt(50,1,0.5,500));this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,i=hn*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height*this.aspect,n=e.distance||t.far;if(i!==t.fov||r!==t.aspect||n!==t.far)t.fov=i,t.aspect=r,t.far=n,t.updateProjectionMatrix();super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}}class sa extends Hi{constructor(e,t,i=0,r=Math.PI/3,n=0,s=2){super(e,t);this.isSpotLight=!0,this.type="SpotLight",this.position.copy(nt.DEFAULT_UP),this.updateMatrix(),this.target=new nt,this.distance=i,this.angle=r,this.penumbra=n,this.decay=s,this.map=null,this.shadow=new Pc}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);if(t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture)t.object.map=this.map.toJSON(e).uuid;return t.object.shadow=this.shadow.toJSON(),t}}class Ic extends Zr{constructor(){super(new Zt(90,1,0.5,500));this.isPointLightShadow=!0}}class Lr extends Hi{constructor(e,t,i=0,r=2){super(e,t);this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new Ic}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class Dr extends Rn{constructor(e=-1,t=1,i=1,r=-1,n=0.1,s=2000){super();this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=n,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,n,s){if(this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=n,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2,n=i-e,s=i+e,o=r+t,a=r-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;n+=l*this.view.offsetX,s=n+l*this.view.width,o-=c*this.view.offsetY,a=o-c*this.view.height}this.projectionMatrix.makeOrthographic(n,s,o,a,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);if(t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null)t.object.view=Object.assign({},this.view);return t}}class Lc extends Zr{constructor(){super(new Dr(-5,5,5,-5,0.5,500));this.isDirectionalLightShadow=!0}}class Cn extends Hi{constructor(e,t){super(e,t);this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(nt.DEFAULT_UP),this.updateMatrix(),this.target=new nt,this.shadow=new Lc}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}var Is=-90,Ls=1;class Pn extends nt{constructor(e,t,i){super();this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Zt(Is,Ls,e,t);r.layers=this.layers,this.add(r);let n=new Zt(Is,Ls,e,t);n.layers=this.layers,this.add(n);let s=new Zt(Is,Ls,e,t);s.layers=this.layers,this.add(s);let o=new Zt(Is,Ls,e,t);o.layers=this.layers,this.add(o);let a=new Zt(Is,Ls,e,t);a.layers=this.layers,this.add(a);let l=new Zt(Is,Ls,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,r,n,s,o,a]=t;for(let l of t)this.remove(l);if(e===fi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),n.up.set(0,0,-1),n.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),a.up.set(0,1,0),a.lookAt(0,0,-1);else if(e===pr)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),n.up.set(0,0,1),n.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),a.up.set(0,-1,0),a.lookAt(0,0,-1);else throw Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){if(this.parent===null)this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:r}=this;if(this.coordinateSystem!==e.coordinateSystem)this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem();let[n,s,o,a,l,c]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),d=e.xr.enabled;e.xr.enabled=!1;let x=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let y=!1;if(e.isWebGLRenderer===!0)y=e.state.buffers.depth.getReversed();else y=e.reversedDepthBuffer;if(e.setRenderTarget(i,0,r),y&&e.autoClear===!1)e.clearDepth();if(e.render(t,n),e.setRenderTarget(i,1,r),y&&e.autoClear===!1)e.clearDepth();if(e.render(t,s),e.setRenderTarget(i,2,r),y&&e.autoClear===!1)e.clearDepth();if(e.render(t,o),e.setRenderTarget(i,3,r),y&&e.autoClear===!1)e.clearDepth();if(e.render(t,a),e.setRenderTarget(i,4,r),y&&e.autoClear===!1)e.clearDepth();if(e.render(t,l),i.texture.mipmapsAutoUpdate=x,e.setRenderTarget(i,5,r),y&&e.autoClear===!1)e.clearDepth();e.render(t,c),e.setRenderTarget(u,f,h),e.xr.enabled=d,i.texture.needsPMREMUpdate=!0}}class Al extends Zt{constructor(e=[]){super();this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}}class oa{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){if(this._document=e,e.hidden!==void 0)this._pageVisibilityHandler=qg.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1)}disconnect(){if(this._pageVisibilityHandler!==null)this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null;this._document=null}getDelta(){return this._delta/1000}getElapsed(){return this._elapsed/1000}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){if(this._pageVisibilityHandler!==null&&this._document.hidden===!0)this._delta=0;else this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta;return this}}function qg(){if(this._document.hidden===!1)this.reset()}var Dc="\\[\\]\\.:\\/",Zg=new RegExp("["+Dc+"]","g"),Nc="[^"+Dc+"]",Jg="[^"+Dc.replace("\\.","")+"]",Kg=/((?:WC+[\/:])*)/.source.replace("WC",Nc),Qg=/(WCOD+)?/.source.replace("WCOD",Jg),$g=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Nc),jg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Nc),ex=new RegExp("^"+Kg+Qg+$g+jg+"$"),tx=["material","materials","bones","map"];class Nu{constructor(e,t,i){let r=i||Ct.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,r=this._bindings[i];if(r!==void 0)r.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,n=i.length;r!==n;++r)i[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}}class Ct{constructor(e,t,i){this.path=t,this.parsedPath=i||Ct.parseTrackName(t),this.node=Ct.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){if(!(e&&e.isAnimationObjectGroup))return new Ct(e,t,i);else return new Ct.Composite(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Zg,"")}static parseTrackName(e){let t=ex.exec(e);if(t===null)throw Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=i.nodeName&&i.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let n=i.nodeName.substring(r+1);if(tx.indexOf(n)!==-1)i.nodeName=i.nodeName.substring(0,r),i.objectName=n}if(i.propertyName===null||i.propertyName.length===0)throw Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(n){for(let s=0;s<n.length;s++){let o=n[s];if(o.name===t||o.uuid===t)return o;let a=i(o.children);if(a)return a}return null},r=i(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let r=0,n=i.length;r!==n;++r)e[t++]=i[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let r=0,n=i.length;r!==n;++r)i[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let r=0,n=i.length;r!==n;++r)i[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let r=0,n=i.length;r!==n;++r)i[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,{objectName:i,propertyName:r,propertyIndex:n}=t;if(!e)e=Ct.findNode(this.rootNode,t.nodeName),this.node=e;if(this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){ye("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let l=t.objectIndex;switch(i){case"materials":if(!e.material){Be("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Be("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Be("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let c=0;c<e.length;c++)if(e[c].name===l){l=c;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Be("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Be("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){Be("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(l!==void 0){if(e[l]===void 0){Be("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let s=e[r];if(s===void 0){let l=t.nodeName;Be("PropertyBinding: Trying to update property for track: "+l+"."+r+" but it wasn't found.",e);return}let o=this.Versioning.None;if(this.targetObject=e,e.isMaterial===!0)o=this.Versioning.NeedsUpdate;else if(e.isObject3D===!0)o=this.Versioning.MatrixWorldNeedsUpdate;let a=this.BindingType.Direct;if(n!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){Be("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Be("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}if(e.morphTargetDictionary[n]!==void 0)n=e.morphTargetDictionary[n]}a=this.BindingType.ArrayElement,this.resolvedProperty=s,this.propertyIndex=n}else if(s.fromArray!==void 0&&s.toArray!==void 0)a=this.BindingType.HasFromToArray,this.resolvedProperty=s;else if(Array.isArray(s))a=this.BindingType.EntireArray,this.resolvedProperty=s;else this.propertyName=r;this.getValue=this.GetterByBindingType[a],this.setValue=this.SetterByBindingTypeAndVersioning[a][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Ct.Composite=Nu;Ct.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ct.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ct.prototype.GetterByBindingType=[Ct.prototype._getValue_direct,Ct.prototype._getValue_array,Ct.prototype._getValue_arrayElement,Ct.prototype._getValue_toArray];Ct.prototype.SetterByBindingTypeAndVersioning=[[Ct.prototype._setValue_direct,Ct.prototype._setValue_direct_setNeedsUpdate,Ct.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ct.prototype._setValue_array,Ct.prototype._setValue_array_setNeedsUpdate,Ct.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ct.prototype._setValue_arrayElement,Ct.prototype._setValue_arrayElement_setNeedsUpdate,Ct.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ct.prototype._setValue_fromArray,Ct.prototype._setValue_fromArray_setNeedsUpdate,Ct.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var w2=new Float32Array(1);class Uu{static{this.prototype.isMatrix2=!0}constructor(e,t,i,r){if(this.elements=[1,0,0,1],e!==void 0)this.set(e,t,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,r){let n=this.elements;return n[0]=e,n[2]=t,n[1]=i,n[3]=r,this}}function Uc(e,t,i,r){let n=sx(r);switch(i){case Ma:return e*t;case Zn:return e*t/n.components*n.byteLength;case tn:return e*t/n.components*n.byteLength;case Oi:return e*t*2/n.components*n.byteLength;case Jn:return e*t*2/n.components*n.byteLength;case Sa:return e*t*3/n.components*n.byteLength;case ui:return e*t*4/n.components*n.byteLength;case Kn:return e*t*4/n.components*n.byteLength;case Qn:case $n:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case jn:case es:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Js:case Qs:return Math.max(e,16)*Math.max(t,8)/4;case Zs:case Ks:return Math.max(e,8)*Math.max(t,8)/2;case $s:case js:case to:case io:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case eo:case rn:case ro:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case no:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case so:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case oo:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case ao:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case lo:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case co:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case ho:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case uo:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case fo:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case po:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case mo:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case go:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case xo:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case _o:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case vo:case yo:case Mo:return Math.ceil(e/4)*Math.ceil(t/4)*16;case So:case bo:return Math.ceil(e/4)*Math.ceil(t/4)*8;case nn:case To:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw Error(`Unable to determine texture byte length for ${i} format.`)}function sx(e){switch(e){case $t:case xa:return{byteLength:1,components:1};case Tr:case _a:case Ut:return{byteLength:2,components:1};case qn:case Yn:return{byteLength:2,components:4};case ni:case Xn:case jt:return{byteLength:4,components:1};case va:case ya:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}if(typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Bs}}));if(typeof window<"u")if(window.__THREE__)ye("WARNING: Multiple instances of Three.js being imported.");else window.__THREE__=Bs;function Rl(){let e=null,t=!1,i=null,r=null;function n(s,o){r=e.requestAnimationFrame(n),i(s,o)}return{start:function(){if(t===!0)return;if(i===null)return;if(e===null)return;r=e.requestAnimationFrame(n),t=!0},stop:function(){if(e!==null)e.cancelAnimationFrame(r);t=!1},setAnimationLoop:function(s){i=s},setContext:function(s){e=s}}}function Fu(e){let t=new WeakMap;function i(a,l){let{array:c,usage:u}=a,f=c.byteLength,h=e.createBuffer();e.bindBuffer(l,h),e.bufferData(l,c,u),a.onUploadCallback();let d;if(c instanceof Float32Array)d=e.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=e.HALF_FLOAT;else if(c instanceof Uint16Array)if(a.isFloat16BufferAttribute)d=e.HALF_FLOAT;else d=e.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=e.SHORT;else if(c instanceof Uint32Array)d=e.UNSIGNED_INT;else if(c instanceof Int32Array)d=e.INT;else if(c instanceof Int8Array)d=e.BYTE;else if(c instanceof Uint8Array)d=e.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=e.UNSIGNED_BYTE;else throw Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function r(a,l,c){let{array:u,updateRanges:f}=l;if(e.bindBuffer(c,a),f.length===0)e.bufferSubData(c,0,u);else{f.sort((d,x)=>d.start-x.start);let h=0;for(let d=1;d<f.length;d++){let x=f[h],y=f[d];if(y.start<=x.start+x.count+1)x.count=Math.max(x.count,y.start+y.count-x.start);else++h,f[h]=y}f.length=h+1;for(let d=0,x=f.length;d<x;d++){let y=f[d];e.bufferSubData(c,y.start*u.BYTES_PER_ELEMENT,u,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function n(a){if(a.isInterleavedBufferAttribute)a=a.data;return t.get(a)}function s(a){if(a.isInterleavedBufferAttribute)a=a.data;let l=t.get(a);if(l)e.deleteBuffer(l.buffer),t.delete(a)}function o(a,l){if(a.isInterleavedBufferAttribute)a=a.data;if(a.isGLBufferAttribute){let u=t.get(a);if(!u||u.version<a.version)t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,i(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(c.buffer,a,l),c.version=a.version}}return{get:n,remove:s,update:o}}var Bu=`
#ifdef USE_ALPHAHASH

	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;

#endif
`;var Ou=`
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
`;var zu=`
#ifdef USE_ALPHAMAP

	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;

#endif
`;var Gu=`
#ifdef USE_ALPHAMAP

	uniform sampler2D alphaMap;

#endif
`;var Vu=`
#ifdef USE_ALPHATEST

	#ifdef ALPHA_TO_COVERAGE

	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;

	#else

	if ( diffuseColor.a < alphaTest ) discard;

	#endif

#endif
`;var ku=`
#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif
`;var Hu=`
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
`;var Wu=`
#ifdef USE_AOMAP

	uniform sampler2D aoMap;
	uniform float aoMapIntensity;

#endif
`;var Xu=`
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
`;var qu=`
#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif
`;var Yu=`
vec3 transformed = vec3( position );

#ifdef USE_ALPHAHASH

	vPosition = vec3( position );

#endif
`;var Zu=`
vec3 objectNormal = vec3( normal );

#ifdef USE_TANGENT

	vec3 objectTangent = vec3( tangent.xyz );

#endif
`;var Ju=`

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

`;var Ku=`

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

`;var Qu=`
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
`;var $u=`
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
`;var ju=`
#if NUM_CLIPPING_PLANES > 0

	varying vec3 vClipPosition;

	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];

#endif
`;var ef=`
#if NUM_CLIPPING_PLANES > 0

	varying vec3 vClipPosition;

#endif
`;var tf=`
#if NUM_CLIPPING_PLANES > 0

	vClipPosition = - mvPosition.xyz;

#endif
`;var rf=`
#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )

	diffuseColor *= vColor;

#endif
`;var nf=`
#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )

	varying vec4 vColor;

#endif
`;var sf=`
#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )

	varying vec4 vColor;

#endif
`;var of=`
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
`;var af=`
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
`;var lf=`

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
`;var cf=`
#ifdef USE_DISPLACEMENTMAP

	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;

#endif
`;var hf=`
#ifdef USE_DISPLACEMENTMAP

	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );

#endif
`;var uf=`
#ifdef USE_EMISSIVEMAP

	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );

	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE

		// use inline sRGB decode until browsers properly support SRGB8_ALPHA8 with video textures (#26516)

		emissiveColor = sRGBTransferEOTF( emissiveColor );

	#endif

	totalEmissiveRadiance *= emissiveColor.rgb;

#endif
`;var ff=`
#ifdef USE_EMISSIVEMAP

	uniform sampler2D emissiveMap;

#endif
`;var df=`
gl_FragColor = linearToOutputTexel( gl_FragColor );
`;var pf=`

vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}

vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}

vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}

`;var mf=`
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
`;var gf=`
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
`;var xf=`
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
`;var _f=`
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
`;var vf=`
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
`;var yf=`
#ifdef USE_FOG

	vFogDepth = - mvPosition.z;

#endif
`;var Mf=`
#ifdef USE_FOG

	varying float vFogDepth;

#endif
`;var Sf=`
#ifdef USE_FOG

	#ifdef FOG_EXP2

		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );

	#else

		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );

	#endif

	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );

#endif
`;var bf=`
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
`;var Tf=`

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
`;var Ef=`
#ifdef USE_LIGHTMAP

	uniform sampler2D lightMap;
	uniform float lightMapIntensity;

#endif
`;var wf=`
LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;
`;var Af=`
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
`;var Rf=`
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
`;var Cf=`
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
`;var Pf=`
ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;
`;var If=`
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
`;var Lf=`
BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;
`;var Df=`
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
`;var Nf=`
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
`;var Uf=`

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
`;var Ff=`
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
`;var Bf=`
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
`;var Of=`
#if defined( RE_IndirectDiffuse )

	#if defined( LAMBERT ) || defined( PHONG )

		irradiance += iblIrradiance;

	#endif

	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );

#endif

#if defined( RE_IndirectSpecular )

	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );

#endif
`;var zf=`
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
`;var Gf=`
#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )

	// Doing a strict comparison with == 1.0 can cause noise artifacts
	// on some platforms. See issue #17623.
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;

#endif
`;var Vf=`
#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )

	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;

#endif
`;var kf=`
#ifdef USE_LOGARITHMIC_DEPTH_BUFFER

	varying float vFragDepth;
	varying float vIsPerspective;

#endif
`;var Hf=`
#ifdef USE_LOGARITHMIC_DEPTH_BUFFER

	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );

#endif
`;var Wf=`
#ifdef USE_MAP

	vec4 sampledDiffuseColor = texture2D( map, vMapUv );

	#ifdef DECODE_VIDEO_TEXTURE

		// use inline sRGB decode until browsers properly support SRGB8_ALPHA8 with video textures (#26516)

		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );

	#endif

	diffuseColor *= sampledDiffuseColor;

#endif
`;var Xf=`
#ifdef USE_MAP

	uniform sampler2D map;

#endif
`;var qf=`
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
`;var Yf=`
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
`;var Zf=`
float metalnessFactor = metalness;

#ifdef USE_METALNESSMAP

	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );

	// reads channel B, compatible with a combined OcclusionRoughnessMetallic (RGB) texture
	metalnessFactor *= texelMetalness.b;

#endif
`;var Jf=`
#ifdef USE_METALNESSMAP

	uniform sampler2D metalnessMap;

#endif
`;var Kf=`
#ifdef USE_INSTANCING_MORPH

	float morphTargetInfluences[ MORPHTARGETS_COUNT ];

	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;

	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {

		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;

	}
#endif
`;var Qf=`
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
`;var $f=`
#ifdef USE_MORPHNORMALS

	// morphTargetBaseInfluence is set based on BufferGeometry.morphTargetsRelative value:
	// When morphTargetsRelative is false, this is set to 1 - sum(influences); this results in normal = sum((target - base) * influence)
	// When morphTargetsRelative is true, this is set to 1; as a result, all morph targets are simply added to the base after weighting
	objectNormal *= morphTargetBaseInfluence;

	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {

		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];

	}

#endif
`;var jf=`
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
`;var ed=`
#ifdef USE_MORPHTARGETS

	// morphTargetBaseInfluence is set based on BufferGeometry.morphTargetsRelative value:
	// When morphTargetsRelative is false, this is set to 1 - sum(influences); this results in position = sum((target - base) * influence)
	// When morphTargetsRelative is true, this is set to 1; as a result, all morph targets are simply added to the base after weighting
	transformed *= morphTargetBaseInfluence;

	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {

		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];

	}

#endif
`;var td=`
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

`;var id=`

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
`;var rd=`
#ifndef FLAT_SHADED

	varying vec3 vNormal;

	#ifdef USE_TANGENT

		varying vec3 vTangent;
		varying vec3 vBitangent;

	#endif

#endif
`;var nd=`
#ifndef FLAT_SHADED

	varying vec3 vNormal;

	#ifdef USE_TANGENT

		varying vec3 vTangent;
		varying vec3 vBitangent;

	#endif

#endif
`;var sd=`
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
`;var od=`
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
`;var ad=`
#ifdef USE_CLEARCOAT

	vec3 clearcoatNormal = nonPerturbedNormal;

#endif
`;var ld=`
#ifdef USE_CLEARCOAT_NORMALMAP

	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;

	clearcoatNormal = normalize( tbn2 * clearcoatMapN );

#endif
`;var cd=`

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
`;var hd=`

#ifdef USE_IRIDESCENCEMAP

	uniform sampler2D iridescenceMap;

#endif

#ifdef USE_IRIDESCENCE_THICKNESSMAP

	uniform sampler2D iridescenceThicknessMap;

#endif
`;var ud=`
#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif

#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif

gl_FragColor = vec4( outgoingLight, diffuseColor.a );
`;var fd=`
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
`;var dd=`
#ifdef PREMULTIPLIED_ALPHA

	gl_FragColor.rgb *= gl_FragColor.a;

#endif
`;var pd=`
vec4 mvPosition = vec4( transformed, 1.0 );

#ifdef USE_BATCHING

	mvPosition = batchingMatrix * mvPosition;

#endif

#ifdef USE_INSTANCING

	mvPosition = instanceMatrix * mvPosition;

#endif

mvPosition = modelViewMatrix * mvPosition;

gl_Position = projectionMatrix * mvPosition;
`;var md=`
#ifdef DITHERING

	gl_FragColor.rgb = dithering( gl_FragColor.rgb );

#endif
`;var gd=`
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
`;var xd=`
float roughnessFactor = roughness;

#ifdef USE_ROUGHNESSMAP

	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );

	// reads channel G, compatible with a combined OcclusionRoughnessMetallic (RGB) texture
	roughnessFactor *= texelRoughness.g;

#endif
`;var _d=`
#ifdef USE_ROUGHNESSMAP

	uniform sampler2D roughnessMap;

#endif
`;var vd=`
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
`;var yd=`

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
`;var Md=`

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


`;var Sd=`
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
`;var bd=`
#ifdef USE_SKINNING

	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );

#endif
`;var Td=`
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
`;var Ed=`
#ifdef USE_SKINNING

	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );

	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;

	transformed = ( bindMatrixInverse * skinned ).xyz;

#endif
`;var wd=`
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
`;var Ad=`
float specularStrength;

#ifdef USE_SPECULARMAP

	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;

#else

	specularStrength = 1.0;

#endif
`;var Rd=`
#ifdef USE_SPECULARMAP

	uniform sampler2D specularMap;

#endif
`;var Cd=`
#if defined( TONE_MAPPING )

	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );

#endif
`;var Pd=`
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
`;var Id=`
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
`;var Ld=`
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
`;var Dd=`
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
`;var Nd=`
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
`;var Ud=`
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
`;var Fd=`
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
`;var Bd=`
varying vec2 vUv;
uniform mat3 uvTransform;

void main() {

	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;

	gl_Position = vec4( position.xy, 1.0, 1.0 );

}
`,Od=`
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
`;var zd=`
varying vec3 vWorldDirection;

#include <common>

void main() {

	vWorldDirection = transformDirection( position, modelMatrix );

	#include <begin_vertex>
	#include <project_vertex>

	gl_Position.z = gl_Position.w; // set z to camera.far

}
`,Gd=`

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
`;var Vd=`
varying vec3 vWorldDirection;

#include <common>

void main() {

	vWorldDirection = transformDirection( position, modelMatrix );

	#include <begin_vertex>
	#include <project_vertex>

	gl_Position.z = gl_Position.w; // set z to camera.far

}
`,kd=`
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
`;var Hd=`
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
`,Wd=`
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
`;var Xd=`
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
`,qd=`
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
`;var Yd=`
varying vec3 vWorldDirection;

#include <common>

void main() {

	vWorldDirection = transformDirection( position, modelMatrix );

	#include <begin_vertex>
	#include <project_vertex>

}
`,Zd=`
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
`;var Jd=`
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
`,Kd=`
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
`;var Qd=`
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
`,$d=`
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
`;var jd=`
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
`,ep=`
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
`;var tp=`
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
`,ip=`
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
`;var rp=`
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
`,np=`
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
`;var sp=`
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
`,op=`
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
`;var ap=`
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
`,lp=`
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
`;var cp=`
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
`,hp=`
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
`;var up=`
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
`,fp=`
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
`;var dp=`
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
`,pp=`
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
`;var mp=`
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
`,gp=`
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
`;var ht={alphahash_fragment:Bu,alphahash_pars_fragment:Ou,alphamap_fragment:zu,alphamap_pars_fragment:Gu,alphatest_fragment:Vu,alphatest_pars_fragment:ku,aomap_fragment:Hu,aomap_pars_fragment:Wu,batching_pars_vertex:Xu,batching_vertex:qu,begin_vertex:Yu,beginnormal_vertex:Zu,bsdfs:Ju,iridescence_fragment:Ku,bumpmap_pars_fragment:Qu,clipping_planes_fragment:$u,clipping_planes_pars_fragment:ju,clipping_planes_pars_vertex:ef,clipping_planes_vertex:tf,color_fragment:rf,color_pars_fragment:nf,color_pars_vertex:sf,color_vertex:of,common:af,defaultnormal_vertex:lf,displacementmap_pars_vertex:cf,displacementmap_vertex:hf,emissivemap_fragment:uf,emissivemap_pars_fragment:ff,colorspace_fragment:df,colorspace_pars_fragment:pf,envmap_fragment:mf,envmap_common_pars_fragment:gf,envmap_pars_fragment:xf,envmap_pars_vertex:_f,envmap_physical_pars_fragment:Cf,envmap_vertex:vf,fog_vertex:yf,fog_pars_vertex:Mf,fog_fragment:Sf,fog_pars_fragment:bf,gradientmap_pars_fragment:Tf,lightmap_pars_fragment:Ef,lights_lambert_fragment:wf,lights_lambert_pars_fragment:Af,lights_pars_begin:Rf,lights_toon_fragment:Pf,lights_toon_pars_fragment:If,lights_phong_fragment:Lf,lights_phong_pars_fragment:Df,lights_physical_fragment:Nf,lights_physical_pars_fragment:Uf,lights_fragment_begin:Ff,lights_fragment_maps:Bf,lights_fragment_end:Of,lightprobes_pars_fragment:zf,logdepthbuf_fragment:Gf,logdepthbuf_pars_fragment:Vf,logdepthbuf_pars_vertex:kf,logdepthbuf_vertex:Hf,map_fragment:Wf,map_pars_fragment:Xf,map_particle_fragment:qf,map_particle_pars_fragment:Yf,metalnessmap_fragment:Zf,metalnessmap_pars_fragment:Jf,morphinstance_vertex:Kf,morphcolor_vertex:Qf,morphnormal_vertex:$f,morphtarget_pars_vertex:jf,morphtarget_vertex:ed,normal_fragment_begin:td,normal_fragment_maps:id,normal_pars_fragment:rd,normal_pars_vertex:nd,normal_vertex:sd,normalmap_pars_fragment:od,clearcoat_normal_fragment_begin:ad,clearcoat_normal_fragment_maps:ld,clearcoat_pars_fragment:cd,iridescence_pars_fragment:hd,opaque_fragment:ud,packing:fd,premultiplied_alpha_fragment:dd,project_vertex:pd,dithering_fragment:md,dithering_pars_fragment:gd,roughnessmap_fragment:xd,roughnessmap_pars_fragment:_d,shadowmap_pars_fragment:vd,shadowmap_pars_vertex:yd,shadowmap_vertex:Md,shadowmask_pars_fragment:Sd,skinbase_vertex:bd,skinning_pars_vertex:Td,skinning_vertex:Ed,skinnormal_vertex:wd,specularmap_fragment:Ad,specularmap_pars_fragment:Rd,tonemapping_fragment:Cd,tonemapping_pars_fragment:Pd,transmission_fragment:Id,transmission_pars_fragment:Ld,uv_pars_fragment:Dd,uv_pars_vertex:Nd,uv_vertex:Ud,worldpos_vertex:Fd,background_vert:Bd,background_frag:Od,backgroundCube_vert:zd,backgroundCube_frag:Gd,cube_vert:Vd,cube_frag:kd,depth_vert:Hd,depth_frag:Wd,distance_vert:Xd,distance_frag:qd,equirect_vert:Yd,equirect_frag:Zd,linedashed_vert:Jd,linedashed_frag:Kd,meshbasic_vert:Qd,meshbasic_frag:$d,meshlambert_vert:jd,meshlambert_frag:ep,meshmatcap_vert:tp,meshmatcap_frag:ip,meshnormal_vert:rp,meshnormal_frag:np,meshphong_vert:sp,meshphong_frag:op,meshphysical_vert:ap,meshphysical_frag:lp,meshtoon_vert:cp,meshtoon_frag:hp,points_vert:up,points_frag:fp,shadow_vert:dp,shadow_frag:pp,sprite_vert:mp,sprite_frag:gp};var Ae={common:{diffuse:{value:new de(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Qe}},envmap:{envMap:{value:null},envMapRotation:{value:new Qe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:0.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Qe},normalScale:{value:new H(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:0.00025},fogNear:{value:1},fogFar:{value:2000},fogColor:{value:new de(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new de(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0},uvTransform:{value:new Qe}},sprite:{diffuse:{value:new de(16777215)},opacity:{value:1},center:{value:new H(0.5,0.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}}};var Wi={basic:{uniforms:wi([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.fog]),vertexShader:ht.meshbasic_vert,fragmentShader:ht.meshbasic_frag},lambert:{uniforms:wi([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new de(0)},envMapIntensity:{value:1}}]),vertexShader:ht.meshlambert_vert,fragmentShader:ht.meshlambert_frag},phong:{uniforms:wi([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new de(0)},specular:{value:new de(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ht.meshphong_vert,fragmentShader:ht.meshphong_frag},standard:{uniforms:wi([Ae.common,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.roughnessmap,Ae.metalnessmap,Ae.fog,Ae.lights,{emissive:{value:new de(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag},toon:{uniforms:wi([Ae.common,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.gradientmap,Ae.fog,Ae.lights,{emissive:{value:new de(0)}}]),vertexShader:ht.meshtoon_vert,fragmentShader:ht.meshtoon_frag},matcap:{uniforms:wi([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,{matcap:{value:null}}]),vertexShader:ht.meshmatcap_vert,fragmentShader:ht.meshmatcap_frag},points:{uniforms:wi([Ae.points,Ae.fog]),vertexShader:ht.points_vert,fragmentShader:ht.points_frag},dashed:{uniforms:wi([Ae.common,Ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ht.linedashed_vert,fragmentShader:ht.linedashed_frag},depth:{uniforms:wi([Ae.common,Ae.displacementmap]),vertexShader:ht.depth_vert,fragmentShader:ht.depth_frag},normal:{uniforms:wi([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,{opacity:{value:1}}]),vertexShader:ht.meshnormal_vert,fragmentShader:ht.meshnormal_frag},sprite:{uniforms:wi([Ae.sprite,Ae.fog]),vertexShader:ht.sprite_vert,fragmentShader:ht.sprite_frag},background:{uniforms:{uvTransform:{value:new Qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ht.background_vert,fragmentShader:ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Qe}},vertexShader:ht.backgroundCube_vert,fragmentShader:ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ht.cube_vert,fragmentShader:ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ht.equirect_vert,fragmentShader:ht.equirect_frag},distance:{uniforms:wi([Ae.common,Ae.displacementmap,{referencePosition:{value:new w},nearDistance:{value:1},farDistance:{value:1000}}]),vertexShader:ht.distance_vert,fragmentShader:ht.distance_frag},shadow:{uniforms:wi([Ae.lights,Ae.fog,{color:{value:new de(0)},opacity:{value:1}}]),vertexShader:ht.shadow_vert,fragmentShader:ht.shadow_frag}};Wi.physical={uniforms:wi([Wi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Qe},clearcoatNormalScale:{value:new H(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Qe},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Qe},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Qe},sheen:{value:0},sheenColor:{value:new de(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Qe},transmissionSamplerSize:{value:new H},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Qe},attenuationDistance:{value:0},attenuationColor:{value:new de(0)},specularColor:{value:new de(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Qe},anisotropyVector:{value:new H},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Qe}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag};var Cl={r:0,b:0,g:0},bx=new Ye,xp=new Qe;xp.set(-1,0,0,0,1,0,0,0,1);function _p(e,t,i,r,n,s){let o=new de(0),a=n===!0?0:1,l,c,u=null,f=0,h=null;function d(b){let T=b.isScene===!0?b.background:null;if(T&&T.isTexture){let M=b.backgroundBlurriness>0;T=t.get(T,M)}return T}function x(b){let T=!1,M=d(b);if(M===null)p(o,a);else if(M&&M.isColor)p(M,1),T=!0;let A=e.xr.getEnvironmentBlendMode();if(A==="additive")i.buffers.color.setClear(0,0,0,1,s);else if(A==="alpha-blend")i.buffers.color.setClear(0,0,0,0,s);if(e.autoClear||T)i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil)}function y(b,T){let M=d(T);if(M&&M.isCubeTexture){if(c===void 0)c=new et(new Ui(1,1,1),new Dt({name:"BackgroundCubeMaterial",uniforms:Ir(Wi.backgroundCube.uniforms),vertexShader:Wi.backgroundCube.vertexShader,fragmentShader:Wi.backgroundCube.fragmentShader,side:Vt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(A,R,g){this.matrixWorld.copyPosition(g.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c);if(c.material.uniforms.envMap.value=M,c.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(bx.makeRotationFromEuler(T.backgroundRotation)).transpose(),M.isRenderTargetTexture===!1)c.material.uniforms.backgroundRotation.value.premultiply(xp);if(c.material.toneMapped=rt.getTransfer(M.colorSpace)!==vt,u!==M||f!==M.version||h!==e.toneMapping)c.material.needsUpdate=!0,u=M,f=M.version,h=e.toneMapping;c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null)}else if(M&&M.isTexture){if(l===void 0)l=new et(new tr(2,2),new Dt({name:"BackgroundMaterial",uniforms:Ir(Wi.background.uniforms),vertexShader:Wi.background.vertexShader,fragmentShader:Wi.background.fragmentShader,side:qi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l);if(l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,l.material.toneMapped=rt.getTransfer(M.colorSpace)!==vt,M.matrixAutoUpdate===!0)M.updateMatrix();if(l.material.uniforms.uvTransform.value.copy(M.matrix),u!==M||f!==M.version||h!==e.toneMapping)l.material.needsUpdate=!0,u=M,f=M.version,h=e.toneMapping;l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null)}}function p(b,T){b.getRGB(Cl,gl(e)),i.buffers.color.setClear(Cl.r,Cl.g,Cl.b,T,s)}function m(){if(c!==void 0)c.geometry.dispose(),c.material.dispose(),c=void 0;if(l!==void 0)l.geometry.dispose(),l.material.dispose(),l=void 0}return{getClearColor:function(){return o},setClearColor:function(b,T=1){o.set(b),a=T,p(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(b){a=b,p(o,a)},render:x,addToRenderList:y,dispose:m}}function vp(e,t){let i=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},n=h(null),s=n,o=!1;function a(I,U,j,C,Y){let Q=!1,G=f(I,C,j,U);if(s!==G)s=G,c(s.object);if(Q=d(I,C,j,Y),Q)x(I,C,j,Y);if(Y!==null)t.update(Y,e.ELEMENT_ARRAY_BUFFER);if(Q||o){if(o=!1,M(I,U,j,C),Y!==null)e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(Y).buffer)}}function l(){return e.createVertexArray()}function c(I){return e.bindVertexArray(I)}function u(I){return e.deleteVertexArray(I)}function f(I,U,j,C){let Y=C.wireframe===!0,Q=r[U.id];if(Q===void 0)Q={},r[U.id]=Q;let G=I.isInstancedMesh===!0?I.id:0,ge=Q[G];if(ge===void 0)ge={},Q[G]=ge;let X=ge[j.id];if(X===void 0)X={},ge[j.id]=X;let te=X[Y];if(te===void 0)te=h(l()),X[Y]=te;return te}function h(I){let U=[],j=[],C=[];for(let Y=0;Y<i;Y++)U[Y]=0,j[Y]=0,C[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:j,attributeDivisors:C,object:I,attributes:{},index:null}}function d(I,U,j,C){let Y=s.attributes,Q=U.attributes,G=0,ge=j.getAttributes();for(let X in ge)if(ge[X].location>=0){let ae=Y[X],Ue=Q[X];if(Ue===void 0){if(X==="instanceMatrix"&&I.instanceMatrix)Ue=I.instanceMatrix;if(X==="instanceColor"&&I.instanceColor)Ue=I.instanceColor}if(ae===void 0)return!0;if(ae.attribute!==Ue)return!0;if(Ue&&ae.data!==Ue.data)return!0;G++}if(s.attributesNum!==G)return!0;if(s.index!==C)return!0;return!1}function x(I,U,j,C){let Y={},Q=U.attributes,G=0,ge=j.getAttributes();for(let X in ge)if(ge[X].location>=0){let ae=Q[X];if(ae===void 0){if(X==="instanceMatrix"&&I.instanceMatrix)ae=I.instanceMatrix;if(X==="instanceColor"&&I.instanceColor)ae=I.instanceColor}let Ue={};if(Ue.attribute=ae,ae&&ae.data)Ue.data=ae.data;Y[X]=Ue,G++}s.attributes=Y,s.attributesNum=G,s.index=C}function y(){let I=s.newAttributes;for(let U=0,j=I.length;U<j;U++)I[U]=0}function p(I){m(I,0)}function m(I,U){let j=s.newAttributes,C=s.enabledAttributes,Y=s.attributeDivisors;if(j[I]=1,C[I]===0)e.enableVertexAttribArray(I),C[I]=1;if(Y[I]!==U)e.vertexAttribDivisor(I,U),Y[I]=U}function b(){let I=s.newAttributes,U=s.enabledAttributes;for(let j=0,C=U.length;j<C;j++)if(U[j]!==I[j])e.disableVertexAttribArray(j),U[j]=0}function T(I,U,j,C,Y,Q,G){if(G===!0)e.vertexAttribIPointer(I,U,j,Y,Q);else e.vertexAttribPointer(I,U,j,C,Y,Q)}function M(I,U,j,C){y();let Y=C.attributes,Q=j.getAttributes(),G=U.defaultAttributeValues;for(let ge in Q){let X=Q[ge];if(X.location>=0){let te=Y[ge];if(te===void 0){if(ge==="instanceMatrix"&&I.instanceMatrix)te=I.instanceMatrix;if(ge==="instanceColor"&&I.instanceColor)te=I.instanceColor}if(te!==void 0){let ae=te.normalized,Ue=te.itemSize,ie=t.get(te);if(ie===void 0)continue;let{buffer:le,type:Fe,bytesPerElement:He}=ie,Ze=Fe===e.INT||Fe===e.UNSIGNED_INT||te.gpuType===Xn;if(te.isInterleavedBufferAttribute){let ue=te.data,mt=ue.isInterleavedBuffer===!0?ue.stride:ue.itemSize,lt=te.offset;if(ue.isInstancedInterleavedBuffer||ue.isInstancedBufferAttribute){for(let Pe=0;Pe<X.locationSize;Pe++)m(X.location+Pe,ue.meshPerAttribute);if(I.isInstancedMesh!==!0&&C._maxInstanceCount===void 0)C._maxInstanceCount=ue.meshPerAttribute*ue.count}else for(let Pe=0;Pe<X.locationSize;Pe++)p(X.location+Pe);e.bindBuffer(e.ARRAY_BUFFER,le);for(let Pe=0;Pe<X.locationSize;Pe++)T(X.location+Pe,Ue/X.locationSize,Fe,ae,mt*He,(lt+Ue/X.locationSize*Pe)*He,Ze)}else{if(te.isInstancedBufferAttribute){for(let ue=0;ue<X.locationSize;ue++)m(X.location+ue,te.meshPerAttribute);if(I.isInstancedMesh!==!0&&C._maxInstanceCount===void 0)C._maxInstanceCount=te.meshPerAttribute*te.count}else for(let ue=0;ue<X.locationSize;ue++)p(X.location+ue);e.bindBuffer(e.ARRAY_BUFFER,le);for(let ue=0;ue<X.locationSize;ue++)T(X.location+ue,Ue/X.locationSize,Fe,ae,Ue*He,Ue/X.locationSize*ue*He,Ze)}}else if(G!==void 0){let ae=G[ge];if(ae!==void 0)switch(ae.length){case 2:e.vertexAttrib2fv(X.location,ae);break;case 3:e.vertexAttrib3fv(X.location,ae);break;case 4:e.vertexAttrib4fv(X.location,ae);break;default:e.vertexAttrib1fv(X.location,ae)}}}}b()}function A(){P();for(let I in r){let U=r[I];for(let j in U){let C=U[j];for(let Y in C){let Q=C[Y];for(let G in Q)u(Q[G].object),delete Q[G];delete C[Y]}}delete r[I]}}function R(I){if(r[I.id]===void 0)return;let U=r[I.id];for(let j in U){let C=U[j];for(let Y in C){let Q=C[Y];for(let G in Q)u(Q[G].object),delete Q[G];delete C[Y]}}delete r[I.id]}function g(I){for(let U in r){let j=r[U];for(let C in j){let Y=j[C];if(Y[I.id]===void 0)continue;let Q=Y[I.id];for(let G in Q)u(Q[G].object),delete Q[G];delete Y[I.id]}}}function S(I){for(let U in r){let j=r[U],C=I.isInstancedMesh===!0?I.id:0,Y=j[C];if(Y===void 0)continue;for(let Q in Y){let G=Y[Q];for(let ge in G)u(G[ge].object),delete G[ge];delete Y[Q]}if(delete j[C],Object.keys(j).length===0)delete r[U]}}function P(){if(V(),o=!0,s===n)return;s=n,c(s.object)}function V(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:a,reset:P,resetDefaultState:V,dispose:A,releaseStatesOfGeometry:R,releaseStatesOfObject:S,releaseStatesOfProgram:g,initAttributes:y,enableAttribute:p,disableUnusedAttributes:b}}function yp(e,t,i){let r;function n(l){r=l}function s(l,c){e.drawArrays(r,l,c),i.update(c,r,1)}function o(l,c,u){if(u===0)return;e.drawArraysInstanced(r,l,c,u),i.update(c,r,u)}function a(l,c,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,l,0,c,0,u);let h=0;for(let d=0;d<u;d++)h+=c[d];i.update(h,r,1)}this.setMode=n,this.render=s,this.renderInstances=o,this.renderMultiDraw=a}function Mp(e,t,i,r){let n;function s(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){let g=t.get("EXT_texture_filter_anisotropic");n=e.getParameter(g.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function o(g){if(g!==ui&&r.convert(g)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))return!1;return!0}function a(g){let S=g===Ut&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));if(g!==$t&&g!==jt&&!S&&r.convert(g)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))return!1;return!0}function l(g){if(g==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";g="mediump"}if(g==="mediump"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0)return"mediump"}return"lowp"}let c=i.precision!==void 0?i.precision:"highp",u=l(c);if(u!==c)ye("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u;let f=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),h=i.logarithmicDepthBuffer===!0&&f===!1;if(i.reversedDepthBuffer===!0&&f===!1)ye("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");if(i.logarithmicDepthBuffer===!0&&f===!0)ye("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let d=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),x=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=e.getParameter(e.MAX_TEXTURE_SIZE),p=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),m=e.getParameter(e.MAX_VERTEX_ATTRIBS),b=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),T=e.getParameter(e.MAX_VARYING_VECTORS),M=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),A=e.getParameter(e.MAX_SAMPLES),R=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:x,maxTextureSize:y,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:b,maxVaryings:T,maxFragmentUniforms:M,maxSamples:A,samples:R}}function Sp(e){let t=this,i=null,r=0,n=!1,s=!1,o=new Ii,a=new Qe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){let d=f.length!==0||h||r!==0||n;return n=h,r=f.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){i=u(f,h,0)},this.setState=function(f,h,d){let{clippingPlanes:x,clipIntersection:y,clipShadows:p}=f,m=e.get(f);if(!n||x===null||x.length===0||s&&!p)if(s)u(null);else c();else{let b=s?0:r,T=b*4,M=m.clippingState||null;l.value=M,M=u(x,h,T,d);for(let A=0;A!==T;++A)M[A]=i[A];m.clippingState=M,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=b}};function c(){if(l.value!==i)l.value=i,l.needsUpdate=r>0;t.numPlanes=r,t.numIntersection=0}function u(f,h,d,x){let y=f!==null?f.length:0,p=null;if(y!==0){if(p=l.value,x!==!0||p===null){let m=d+y*4,b=h.matrixWorldInverse;if(a.getNormalMatrix(b),p===null||p.length<m)p=new Float32Array(m);for(let T=0,M=d;T!==y;++T,M+=4)o.copy(f[T]).applyMatrix4(b,a),o.normal.toArray(p,M),p[M+3]=o.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,p}}class Kr extends Lt{constructor(e=1,t={}){super(e,e,t);this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Hr(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Ui(5,5,5),n=new Dt({name:"CubemapFromEquirect",uniforms:Ir(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Vt,blending:Yi});n.uniforms.tEquirect.value=t;let s=new et(r,n),o=t.minFilter;if(t.minFilter===Ci)t.minFilter=Ht;return new Pn(1,10,this).update(e,s),t.minFilter=o,s.geometry.dispose(),s.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){let n=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,i,r);e.setRenderTarget(n)}}var bp=256,Tx=3,Ex=20,Ap=256,Rp=16,wx=3,Ax=new w,Rx=new de;class Qr{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Pn(1,10,null),this._boxMesh=new et(new Ui(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,i=0.1,r=100,n={}){let{size:s=256,position:o=Ax}=n,a=this._renderer;this._setSize(s);let l=this._allocateTarget(),c=this._getSourceTarget(!0);if(t>0)c.texture.mipmapsAutoUpdate=!1;let{autoClear:u,autoClearColor:f,autoClearDepth:h,autoClearStencil:d}=a,x=e.background;if(a.autoClear=!0,a.autoClearColor=!0,a.autoClearDepth=!0,a.autoClearStencil=!0,x===null)e.background=a.getClearColor(Rx);let y=new Pn(i,r,c);if(y.position.copy(o),y.update(a,e),a.autoClear=u,a.autoClearColor=f,a.autoClearDepth=h,a.autoClearStencil=d,e.background=x,t>0)c.texture.mipmapsAutoUpdate=!0,this._blur(l,t);return this._applyPMREM(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){if(this._cubemapMaterial===null)this._cubemapMaterial=wp(),this._compileMaterial(this._cubemapMaterial)}compileEquirectangularShader(){if(this._equirectMaterial===null)this._equirectMaterial=Ep(),this._compileMaterial(this._equirectMaterial)}dispose(){if(this._sourceTarget!==null)this._sourceTarget.dispose();if(this._cubemapMaterial!==null)this._cubemapMaterial.dispose();if(this._equirectMaterial!==null)this._equirectMaterial.dispose();if(this._blurMaterial!==null)this._blurMaterial.dispose();if(this._ggxMaterial!==null)this._ggxMaterial.dispose();if(this._integrationMaterial!==null)this._integrationMaterial.dispose();this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(bp,Nh(e))}_fromTexture(e,t){if(e.mapping===Zi||e.mapping===br)this._setSize(e.image.length===0?bp:e.image[0].width||e.image[0].image.width);else this._setSize(e.image.width/4);let i=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(i),i}_allocateTarget(){let e=this._cubeSize,t=Tp(e,!1,!1),i=Math.log2(e)-Tx;for(let r=0;r<=i;r++)t.texture.mipmaps.push({width:e>>r,height:e>>r});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,i=this._sourceTarget;if(i===null||i.width!==t||e&&i.depthBuffer===!1){if(i!==null)i.dispose();this._sourceTarget=Tp(t,!0,e)}return this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,i){let r=this._boxMesh,n=this._cubeCamera;r.material=i,n.renderTarget=e,n.activeMipmapLevel=t;let s=e.width>>t;e.viewport.set(0,0,s,s),n.update(this._renderer,r),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;if(e.mapping===Zi||e.mapping===br){if(this._cubemapMaterial===null)this._cubemapMaterial=wp();t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1}else{if(this._equirectMaterial===null)this._equirectMaterial=Ep();t=this._equirectMaterial}t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){if(this._ggxMaterial===null)this._ggxMaterial=Cx(),this._integrationMaterial=Px();let t=this._cubeSize,i=e.texture.mipmaps.length-1,r=this._ggxMaterial.uniforms;r.envMap.value=this._sourceTarget.texture;let n=this._integrationMaterial.uniforms;n.envMap.value=this._sourceTarget.texture,n.sourceLod.value=Math.log2(t/Rp);for(let s=0;s<=i;s++){let o=Qr.lodToRoughness(s,i);if(s>i-wx)n.roughness.value=o,this._renderCube(e,s,this._integrationMaterial);else{let a=o>0?Math.log2(t)+0.5*Math.log2(6/(Ap*Math.pow(o,4)))+0.5:0;r.roughness.value=o,r.lodBias.value=a,this._renderCube(e,s,this._ggxMaterial)}}}_blur(e,t){if(this._blurMaterial===null)this._blurMaterial=Ix();let i=this._blurMaterial,r=i.uniforms,n=this._sourceTarget;r.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,r.envMap.value=n.texture,this._renderCube(e,0,i),r.envMap.value=e.texture,this._renderCube(n,0,i)}}function Tp(e,t,i){return new Kr(e,{minFilter:Ci,generateMipmaps:t,type:Ut,colorSpace:on,depthBuffer:i})}function aa(e,t,i){return new Dt({name:e,uniforms:t,vertexShader:ht.cube_vert,fragmentShader:i,side:Vt,blending:Yi,depthTest:!1,depthWrite:!1})}function Cx(){return aa("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Ap}u

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
	`)}function Px(){return aa("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Rp}},`

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
	`)}function Ix(){return aa("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Ex}
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
	`)}function Ep(){return aa("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function wp(){return aa("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Cp(e){let t=new WeakMap,i=new WeakMap,r=null;function n(h,d=!1){if(h===null||h===void 0)return null;if(d)return o(h);return s(h)}function s(h){if(h&&h.isTexture){let d=h.mapping;if(d===Xs||d===qs)if(t.has(h)){let x=t.get(h).texture;return a(x,h.mapping)}else{let x=h.image;if(x&&x.height>0){let y=new Kr(x.height);return y.fromEquirectangularTexture(e,h),t.set(h,y),h.addEventListener("dispose",c),a(y.texture,h.mapping)}else return null}}return h}function o(h){if(h&&h.isTexture&&h.isPMREMTexture!==!0){let d=h.mapping,x=d===Xs||d===qs,y=d===Zi||d===br;if(x||y){let p=i.get(h),m=p!==void 0?p.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==m){if(r===null)r=new Qr(e);return p=x?r.fromEquirectangular(h,p):r.fromCubemap(h,p),p.texture.pmremVersion=h.pmremVersion,i.set(h,p),p.texture}else if(p!==void 0)return p.texture;else{let b=h.image;if(x&&b&&b.height>0||y&&b&&l(b)){if(r===null)r=new Qr(e);return p=x?r.fromEquirectangular(h):r.fromCubemap(h),p.texture.pmremVersion=h.pmremVersion,i.set(h,p),h.addEventListener("dispose",u),p.texture}else return null}}}return h}function a(h,d){if(d===Xs)h.mapping=Zi;else if(d===qs)h.mapping=br;return h}function l(h){let d=0,x=6;for(let y=0;y<x;y++)if(h[y]!==void 0)d++;return d===x}function c(h){let d=h.target;d.removeEventListener("dispose",c);let x=t.get(d);if(x!==void 0)t.delete(d),x.dispose()}function u(h){let d=h.target;d.removeEventListener("dispose",u);let x=i.get(d);if(x!==void 0)i.delete(d),x.dispose()}function f(){if(t=new WeakMap,i=new WeakMap,r!==null)r.dispose(),r=null}return{get:n,dispose:f}}function Pp(e){let t={};function i(r){if(t[r]!==void 0)return t[r];let n=e.getExtension(r);return t[r]=n,n}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){let n=i(r);if(n===null)Ki("WebGLRenderer: "+r+" extension not supported.");return n}}}function Ip(e,t,i,r){let n={},s=new WeakMap,o=new FinalizationRegistry((x)=>delete n[x]);function a(x){l(x.target)}function l(x){if(x.index!==null)t.remove(x.index);for(let p in x.attributes)t.remove(x.attributes[p]);x.removeEventListener("dispose",a),delete n[x.id],o.unregister(x);let y=s.get(x);if(y)t.remove(y),s.delete(x);if(r.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0)delete x._maxInstanceCount;i.memory.geometries--}function c(x,y){if(n[y.id]!==void 0)return y;return y.addEventListener("dispose",a),n[y.id]=new WeakRef(y),o.register(y,y.id,y),i.memory.geometries++,y}function u(x){let y=x.attributes;for(let p in y)t.update(y[p],e.ARRAY_BUFFER)}function f(x){let y=x.index,p=x.attributes.position,m=0;if(p===void 0)return;let b=y!==null?y.array.length:p.array.length/3-1,M=new(p.count>=65535?Po:Co)(Math.ceil(b/3)*6,1),A=M.array;if(y!==null){let g=y.array;m=y.version;for(let S=0,P=0;S<b;S+=3){let V=g[S+0],I=g[S+1],U=g[S+2];A[P++]=V,A[P++]=I,A[P++]=I,A[P++]=U,A[P++]=U,A[P++]=V}}else{m=p.version;for(let g=0,S=0;g<b;g+=3){let P=g+0,V=g+1,I=g+2;A[S++]=P,A[S++]=V,A[S++]=V,A[S++]=I,A[S++]=I,A[S++]=P}}M.version=m;let R=s.get(x);if(R)t.remove(R);s.set(x,M)}function h(x){let y=s.get(x);if(y){let p=x.index;if(p!==null){if(y.version<p.version)f(x)}}else f(x);return s.get(x)}function d(){for(let x in n){let y=n[x].deref();if(y!==void 0)l(y)}}return{get:c,update:u,getWireframeAttribute:h,dispose:d}}function Lp(e,t,i){let r;function n(f){r=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function l(f,h){e.drawElements(r,h,s,f*o),i.update(h,r,1)}function c(f,h,d){if(d===0)return;e.drawElementsInstanced(r,h,s,f*o,d),i.update(h,r,d)}function u(f,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,h,0,s,f,0,d);let y=0;for(let p=0;p<d;p++)y+=h[p];i.update(y,r,1)}this.setMode=n,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function Dp(e){let t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(s,o,a){switch(i.calls++,o){case e.TRIANGLES:i.triangles+=a*(s/3);break;case e.LINES:i.lines+=a*(s/2);break;case e.LINE_STRIP:i.lines+=a*(s-1);break;case e.LINE_LOOP:i.lines+=a*s;break;case e.POINTS:i.points+=a*s;break;default:Be("WebGLInfo: Unknown draw mode:",o);break}}function n(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:n,update:r}}function Np(e,t,i){let r=new WeakMap,n=new Mt;function s(o,a,l){let c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0,h=r.get(a);if(h===void 0||h.count!==f){let P=function(){g.dispose(),r.delete(a),a.removeEventListener("dispose",P)};if(h!==void 0)h.texture.dispose();let d=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,y=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],b=a.morphAttributes.color||[],T=0;if(d===!0)T=1;if(x===!0)T=2;if(y===!0)T=3;let M=a.attributes.position.count*T,A=1;if(M>t.maxTextureSize)A=Math.ceil(M/t.maxTextureSize),M=t.maxTextureSize;let R=new Float32Array(M*A*4*f),g=new fn(R,M,A,f);g.type=jt,g.needsUpdate=!0;let S=T*4;for(let V=0;V<f;V++){let I=p[V],U=m[V],j=b[V],C=M*A*4*V;for(let Y=0;Y<I.count;Y++){let Q=Y*S;if(d===!0)n.fromBufferAttribute(I,Y),R[C+Q+0]=n.x,R[C+Q+1]=n.y,R[C+Q+2]=n.z,R[C+Q+3]=0;if(x===!0)n.fromBufferAttribute(U,Y),R[C+Q+4]=n.x,R[C+Q+5]=n.y,R[C+Q+6]=n.z,R[C+Q+7]=0;if(y===!0)n.fromBufferAttribute(j,Y),R[C+Q+8]=n.x,R[C+Q+9]=n.y,R[C+Q+10]=n.z,R[C+Q+11]=j.itemSize===4?n.w:1}}h={count:f,texture:g,size:new H(M,A)},r.set(a,h),a.addEventListener("dispose",P)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(e,"morphTexture",o.morphTexture,i);else{let d=0;for(let y=0;y<c.length;y++)d+=c[y];let x=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(e,"morphTargetBaseInfluence",x),l.getUniforms().setValue(e,"morphTargetInfluences",c)}l.getUniforms().setValue(e,"morphTargetsTexture",h.texture,i),l.getUniforms().setValue(e,"morphTargetsTextureSize",h.size)}return{update:s}}function Up(e,t,i,r,n){let s=new WeakMap;function o(c){let u=n.render.frame,f=c.geometry,h=t.get(c,f);if(s.get(h)!==u)t.update(h),s.set(h,u);if(c.isInstancedMesh){if(c.hasEventListener("dispose",l)===!1)c.addEventListener("dispose",l);if(s.get(c)!==u){if(i.update(c.instanceMatrix,e.ARRAY_BUFFER),c.instanceColor!==null)i.update(c.instanceColor,e.ARRAY_BUFFER);s.set(c,u)}}if(c.isSkinnedMesh){let d=c.skeleton;if(s.get(d)!==u)d.update(),s.set(d,u)}return h}function a(){s=new WeakMap}function l(c){let u=c.target;if(u.removeEventListener("dispose",l),r.releaseStatesOfObject(u),i.remove(u.instanceMatrix),u.instanceColor!==null)i.remove(u.instanceColor)}return{update:o,dispose:a}}var Lx={[Fn]:"LINEAR_TONE_MAPPING",[Bn]:"REINHARD_TONE_MAPPING",[On]:"CINEON_TONE_MAPPING",[Br]:"ACES_FILMIC_TONE_MAPPING",[Gn]:"AGX_TONE_MAPPING",[Vn]:"NEUTRAL_TONE_MAPPING",[zn]:"CUSTOM_TONE_MAPPING"};function Fp(e,t,i,r,n,s){let o=new Lt(t,i,{type:e,depthBuffer:n,stencilBuffer:s,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=null,u=new Xe;u.setAttribute("position",new Ge([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new Ge([0,2,0,0,2,0],2));let f=new wn({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),h=new et(u,f),d=new Dr(-1,1,1,-1,0,1),x=null,y=null,p=!1,m,b=null,T=[],M=!1;this.setSize=function(A,R){if(o.setSize(A,R),a!==null)a.setSize(A,R);if(l!==null)l.setSize(A,R);for(let g=0;g<T.length;g++){let S=T[g];if(S.setSize)S.setSize(A,R)}},this.setEffects=function(A){T=A,M=T.length>0&&T[0].isRenderPass===!0;let{width:R,height:g}=o;if(T.length>0&&a===null)a=new Lt(R,g,{type:Ut,depthBuffer:!1,stencilBuffer:!1}),l=new Lt(R,g,{type:Ut,depthBuffer:!1,stencilBuffer:!1});let S=n===!0&&T.some((P)=>P.needsDepthTexture===!0);if(S!==(o.depthTexture!==null)){if(S===!0&&c===null){if(c=new Vi(R,g),s===!0)c.format=Bi,c.type=ar}o.dispose(),o.depthTexture=S?c:null,o.resolveDepthBuffer=S,o.storeMultisampledDepthBuffer=S}for(let P=0;P<T.length;P++){let V=T[P];if(V.setSize)V.setSize(R,g);if(S&&V.needsDepthTexture===!0&&V.setDepthTexture)V.setDepthTexture(c)}},this.begin=function(A,R){if(p)return!1;if(A.toneMapping===Fi&&T.length===0)return!1;if(b=R,R!==null){let{width:g,height:S}=R;if(o.width!==g||o.height!==S)this.setSize(g,S)}if(M===!1)A.setRenderTarget(o);return m=A.toneMapping,A.toneMapping=Fi,!0},this.hasRenderPass=function(){return M},this.end=function(A,R){A.toneMapping=m,p=!0;let g=o,S=a;for(let P=0;P<T.length;P++){let V=T[P];if(V.enabled===!1)continue;if(V.render(A,S,g,R),V.needsSwap!==!1)g=S,S=S===a?l:a}if(x!==A.outputColorSpace||y!==A.toneMapping){if(x=A.outputColorSpace,y=A.toneMapping,f.defines={},rt.getTransfer(x)===vt)f.defines.SRGB_TRANSFER="";let P=Lx[y];if(P)f.defines[P]="";f.needsUpdate=!0}f.uniforms.tDiffuse.value=g.texture,A.setRenderTarget(b),A.render(h,d),b=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){if(o.dispose(),a!==null)a.dispose();if(l!==null)l.dispose();u.dispose(),f.dispose()}}var Hp=new At,Wp=new Vi(1,1),Xp=new Es(1),qp=new fn,Yp=new ss,Zp=new Hr,Bp=[],Op=[],zp=new Float32Array(16),Gp=new Float32Array(9),Vp=new Float32Array(4);function Ds(e,t,i){let r=e[0];if(r<=0||r>0)return e;let n=t*i,s=Bp[n];if(s===void 0)s=new Float32Array(n),Bp[n]=s;if(t!==0){r.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=i,e[o].toArray(s,a)}return s}function li(e,t){if(e.length!==t.length)return!1;for(let i=0,r=e.length;i<r;i++)if(e[i]!==t[i])return!1;return!0}function ci(e,t){for(let i=0,r=t.length;i<r;i++)e[i]=t[i]}function Pl(e,t){let i=Op[t];if(i===void 0)i=new Int32Array(t),Op[t]=i;for(let r=0;r!==t;++r)i[r]=e.allocateTextureUnit();return i}function Dx(e,t){let i=this.cache;if(i[0]===t)return;e.uniform1f(this.addr,t),i[0]=t}function Nx(e,t){let i=this.cache;if(t.x!==void 0){if(i[0]!==t.x||i[1]!==t.y)e.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y}else{if(li(i,t))return;e.uniform2fv(this.addr,t),ci(i,t)}}function Ux(e,t){let i=this.cache;if(t.x!==void 0){if(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)e.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z}else if(t.r!==void 0){if(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)e.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b}else{if(li(i,t))return;e.uniform3fv(this.addr,t),ci(i,t)}}function Fx(e,t){let i=this.cache;if(t.x!==void 0){if(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)e.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w}else{if(li(i,t))return;e.uniform4fv(this.addr,t),ci(i,t)}}function Bx(e,t){let i=this.cache,r=t.elements;if(r===void 0){if(li(i,t))return;e.uniformMatrix2fv(this.addr,!1,t),ci(i,t)}else{if(li(i,r))return;Vp.set(r),e.uniformMatrix2fv(this.addr,!1,Vp),ci(i,r)}}function Ox(e,t){let i=this.cache,r=t.elements;if(r===void 0){if(li(i,t))return;e.uniformMatrix3fv(this.addr,!1,t),ci(i,t)}else{if(li(i,r))return;Gp.set(r),e.uniformMatrix3fv(this.addr,!1,Gp),ci(i,r)}}function zx(e,t){let i=this.cache,r=t.elements;if(r===void 0){if(li(i,t))return;e.uniformMatrix4fv(this.addr,!1,t),ci(i,t)}else{if(li(i,r))return;zp.set(r),e.uniformMatrix4fv(this.addr,!1,zp),ci(i,r)}}function Gx(e,t){let i=this.cache;if(i[0]===t)return;e.uniform1i(this.addr,t),i[0]=t}function Vx(e,t){let i=this.cache;if(t.x!==void 0){if(i[0]!==t.x||i[1]!==t.y)e.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y}else{if(li(i,t))return;e.uniform2iv(this.addr,t),ci(i,t)}}function kx(e,t){let i=this.cache;if(t.x!==void 0){if(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)e.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z}else{if(li(i,t))return;e.uniform3iv(this.addr,t),ci(i,t)}}function Hx(e,t){let i=this.cache;if(t.x!==void 0){if(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)e.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w}else{if(li(i,t))return;e.uniform4iv(this.addr,t),ci(i,t)}}function Wx(e,t){let i=this.cache;if(i[0]===t)return;e.uniform1ui(this.addr,t),i[0]=t}function Xx(e,t){let i=this.cache;if(t.x!==void 0){if(i[0]!==t.x||i[1]!==t.y)e.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y}else{if(li(i,t))return;e.uniform2uiv(this.addr,t),ci(i,t)}}function qx(e,t){let i=this.cache;if(t.x!==void 0){if(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)e.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z}else{if(li(i,t))return;e.uniform3uiv(this.addr,t),ci(i,t)}}function Yx(e,t){let i=this.cache;if(t.x!==void 0){if(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w}else{if(li(i,t))return;e.uniform4uiv(this.addr,t),ci(i,t)}}function Il(e){if(e.version===0)e.compareFunction=Ia,e.needsUpdate=!0;return e}function Zx(e,t,i){let r=this.cache,n=i.allocateTextureUnit();if(r[0]!==n)e.uniform1i(this.addr,n),r[0]=n;let s;if(this.type===e.SAMPLER_2D_SHADOW)s=Il(Wp);else s=Hp;i.setTexture2D(t||s,n)}function Jx(e,t,i){let r=this.cache,n=i.allocateTextureUnit();if(r[0]!==n)e.uniform1i(this.addr,n),r[0]=n;i.setTexture3D(t||Yp,n)}function Kx(e,t,i){let r=this.cache,n=i.allocateTextureUnit();if(r[0]!==n)e.uniform1i(this.addr,n),r[0]=n;let s;if(this.type===e.SAMPLER_CUBE_SHADOW)s=Il(Xp);else s=Zp;i.setTextureCube(t||s,n)}function Qx(e,t,i){let r=this.cache,n=i.allocateTextureUnit();if(r[0]!==n)e.uniform1i(this.addr,n),r[0]=n;i.setTexture2DArray(t||qp,n)}function $x(e){switch(e){case 5126:return Dx;case 35664:return Nx;case 35665:return Ux;case 35666:return Fx;case 35674:return Bx;case 35675:return Ox;case 35676:return zx;case 5124:case 35670:return Gx;case 35667:case 35671:return Vx;case 35668:case 35672:return kx;case 35669:case 35673:return Hx;case 5125:return Wx;case 36294:return Xx;case 36295:return qx;case 36296:return Yx;case 35678:case 36198:case 36298:case 36306:case 35682:return Zx;case 35679:case 36299:case 36307:return Jx;case 35680:case 36300:case 36308:case 36293:return Kx;case 36289:case 36303:case 36311:case 36292:return Qx}}function jx(e,t){e.uniform1fv(this.addr,t)}function e0(e,t){let i=Ds(t,this.size,2);e.uniform2fv(this.addr,i)}function t0(e,t){let i=Ds(t,this.size,3);e.uniform3fv(this.addr,i)}function i0(e,t){let i=Ds(t,this.size,4);e.uniform4fv(this.addr,i)}function r0(e,t){let i=Ds(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,i)}function n0(e,t){let i=Ds(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,i)}function s0(e,t){let i=Ds(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,i)}function o0(e,t){e.uniform1iv(this.addr,t)}function a0(e,t){e.uniform2iv(this.addr,t)}function l0(e,t){e.uniform3iv(this.addr,t)}function c0(e,t){e.uniform4iv(this.addr,t)}function h0(e,t){e.uniform1uiv(this.addr,t)}function u0(e,t){e.uniform2uiv(this.addr,t)}function f0(e,t){e.uniform3uiv(this.addr,t)}function d0(e,t){e.uniform4uiv(this.addr,t)}function p0(e,t,i){let r=this.cache,n=t.length,s=Pl(i,n);if(!li(r,s))e.uniform1iv(this.addr,s),ci(r,s);let o;if(this.type===e.SAMPLER_2D_SHADOW)o=Il(Wp);else o=Hp;for(let a=0;a!==n;++a)i.setTexture2D(t[a]||o,s[a])}function m0(e,t,i){let r=this.cache,n=t.length,s=Pl(i,n);if(!li(r,s))e.uniform1iv(this.addr,s),ci(r,s);for(let o=0;o!==n;++o)i.setTexture3D(t[o]||Yp,s[o])}function g0(e,t,i){let r=this.cache,n=t.length,s=Pl(i,n);if(!li(r,s))e.uniform1iv(this.addr,s),ci(r,s);let o;if(this.type===e.SAMPLER_CUBE_SHADOW)o=Il(Xp);else o=Zp;for(let a=0;a!==n;++a)i.setTextureCube(t[a]||o,s[a])}function x0(e,t,i){let r=this.cache,n=t.length,s=Pl(i,n);if(!li(r,s))e.uniform1iv(this.addr,s),ci(r,s);for(let o=0;o!==n;++o)i.setTexture2DArray(t[o]||qp,s[o])}function _0(e){switch(e){case 5126:return jx;case 35664:return e0;case 35665:return t0;case 35666:return i0;case 35674:return r0;case 35675:return n0;case 35676:return s0;case 5124:case 35670:return o0;case 35667:case 35671:return a0;case 35668:case 35672:return l0;case 35669:case 35673:return c0;case 5125:return h0;case 36294:return u0;case 36295:return f0;case 36296:return d0;case 35678:case 36198:case 36298:case 36306:case 35682:return p0;case 35679:case 36299:case 36307:return m0;case 35680:case 36300:case 36308:case 36293:return g0;case 36289:case 36303:case 36311:case 36292:return x0}}class Jp{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=$x(t.type)}}class Kp{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=_0(t.type)}}class Qp{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let r=this.seq;for(let n=0,s=r.length;n!==s;++n){let o=r[n];o.setValue(e,t[o.id],i)}}}var Fc=/(\w+)(\])?(\[|\.)?/g;function kp(e,t){e.seq.push(t),e.map[t.id]=t}function v0(e,t,i){let r=e.name,n=r.length;Fc.lastIndex=0;while(!0){let s=Fc.exec(r),o=Fc.lastIndex,a=s[1],l=s[2]==="]",c=s[3];if(l)a=a|0;if(c===void 0||c==="["&&o+2===n){kp(i,c===void 0?new Jp(a,e,t):new Kp(a,e,t));break}else{let f=i.map[a];if(f===void 0)f=new Qp(a),kp(i,f);i=f}}}class In{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let o=e.getActiveUniform(t,s),a=e.getUniformLocation(t,o.name);v0(o,a,this)}let r=[],n=[];for(let s of this.seq)if(s.type===e.SAMPLER_2D_SHADOW||s.type===e.SAMPLER_CUBE_SHADOW||s.type===e.SAMPLER_2D_ARRAY_SHADOW)r.push(s);else n.push(s);if(r.length>0)this.seq=r.concat(n)}setValue(e,t,i,r){let n=this.map[t];if(n!==void 0)n.setValue(e,i,r)}setOptional(e,t,i){let r=t[i];if(r!==void 0)this.setValue(e,i,r)}static upload(e,t,i,r){for(let n=0,s=t.length;n!==s;++n){let o=t[n],a=i[o.id];if(a.needsUpdate!==!1)o.setValue(e,a.value,r)}}static seqWithValue(e,t){let i=[];for(let r=0,n=e.length;r!==n;++r){let s=e[r];if(s.id in t)i.push(s)}return i}}function Bc(e,t,i){let r=e.createShader(t);return e.shaderSource(r,i),e.compileShader(r),r}var y0=37297,M0=0;function S0(e,t){let i=e.split(`
`),r=[],n=Math.max(t-6,0),s=Math.min(t+6,i.length);for(let o=n;o<s;o++){let a=o+1;r.push(`${a===t?">":" "} ${a}: ${i[o]}`)}return r.join(`
`)}var $p=new Qe;function b0(e){rt._getMatrix($p,rt.workingColorSpace,e);let t=`mat3( ${$p.elements.map((i)=>i.toFixed(4))} )`;switch(rt.getTransfer(e)){case an:return[t,"LinearTransferOETF"];case vt:return[t,"sRGBTransferOETF"];default:return ye("WebGLProgram: Unsupported color space: ",e),[t,"LinearTransferOETF"]}}function jp(e,t,i){let r=e.getShaderParameter(t,e.COMPILE_STATUS),s=(e.getShaderInfoLog(t)||"").trim();if(r&&s==="")return"";let o=/ERROR: 0:(\d+)/.exec(s);if(o){let a=parseInt(o[1]);return i.toUpperCase()+`

`+s+`

`+S0(e.getShaderSource(t),a)}else return s}function T0(e,t){let i=b0(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${i[1]}( vec4( ${i[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var E0={[Fn]:"Linear",[Bn]:"Reinhard",[On]:"Cineon",[Br]:"ACESFilmic",[Gn]:"AgX",[Vn]:"Neutral",[zn]:"Custom"};function w0(e,t){let i=E0[t];if(i===void 0)return ye("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+e+"( vec3 color ) { return LinearToneMapping( color ); }";return"vec3 "+e+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}var Ll=new w;function A0(){rt.getLuminanceCoefficients(Ll);let e=Ll.x.toFixed(4),t=Ll.y.toFixed(4),i=Ll.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${t}, ${i} );`,"\treturn dot( weights, rgb );","}"].join(`
`)}function R0(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(la).join(`
`)}function C0(e){let t=[];for(let i in e){let r=e[i];if(r===!1)continue;t.push("#define "+i+" "+r)}return t.join(`
`)}function P0(e,t){let i={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let n=0;n<r;n++){let s=e.getActiveAttrib(t,n),o=s.name,a=1;if(s.type===e.FLOAT_MAT2)a=2;if(s.type===e.FLOAT_MAT3)a=3;if(s.type===e.FLOAT_MAT4)a=4;i[o]={type:s.type,location:e.getAttribLocation(t,o),locationSize:a}}return i}function la(e){return e!==""}function em(e,t){let i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function tm(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var I0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Oc(e){return e.replace(I0,L0)}function L0(e,t){let i=ht[t];if(i===void 0)throw Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return Oc(i)}var D0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function im(e){return e.replace(D0,N0)}function N0(e,t,i,r){let n="";for(let s=parseInt(t);s<parseInt(i);s++)n+=r.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return n}function rm(e){let t=`precision ${e.precision} float;
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
#define LOW_PRECISION`;return t}var U0={[Un]:"SHADOWMAP_TYPE_PCF",[jr]:"SHADOWMAP_TYPE_VSM"};function F0(e){return U0[e.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var B0={[br]:"ENVMAP_MODE_REFRACTION"};function O0(e){if(e.envMap===!1)return"ENVMAP_MODE_REFLECTION";return B0[e.envMapMode]||"ENVMAP_MODE_REFLECTION"}var z0={[en]:"ENVMAP_BLENDING_MULTIPLY",[_h]:"ENVMAP_BLENDING_MIX",[vh]:"ENVMAP_BLENDING_ADD"};function G0(e){if(e.envMap===!1)return"ENVMAP_BLENDING_NONE";return z0[e.combine]||"ENVMAP_BLENDING_NONE"}function nm(e,t,i,r){let n=e.getContext(),{defines:s,vertexShader:o,fragmentShader:a}=i,l=F0(i),c=i.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",u=O0(i),f=G0(i),h=R0(i),d=C0(s),x=n.createProgram(),y,p,m=i.glslVersion?"#version "+i.glslVersion+`
`:"";if(i.isRawShaderMaterial){if(y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,d].filter(la).join(`
`),y.length>0)y+=`
`;if(p=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,d].filter(la).join(`
`),p.length>0)p+=`
`}else y=[rm(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,d,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+u:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+i.diffuseRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexNormals?"#define HAS_NORMAL":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+l:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","\tattribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","\tattribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","\tuniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","\tattribute vec2 uv1;","#endif","#ifdef USE_UV2","\tattribute vec2 uv2;","#endif","#ifdef USE_UV3","\tattribute vec2 uv3;","#endif","#ifdef USE_TANGENT","\tattribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","\tattribute vec4 color;","#elif defined( USE_COLOR )","\tattribute vec3 color;","#endif","#ifdef USE_SKINNING","\tattribute vec4 skinIndex;","\tattribute vec4 skinWeight;","#endif",`
`].filter(la).join(`
`),p=[rm(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,d,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+c:"",i.envMap?"#define "+u:"",i.envMap?"#define "+f:"",i.envMapPMREM?"#define ENVMAP_MAX_LOD "+i.envMapMaxLod+".0":"",i.envMapPMREM?"#define ENVMAP_SIZE "+i.envMapSize+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",i.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.retroreflection?"#define USE_RETROREFLECTION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+l:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Fi?"#define TONE_MAPPING":"",i.toneMapping!==Fi?ht.tonemapping_pars_fragment:"",i.toneMapping!==Fi?w0("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",ht.colorspace_pars_fragment,T0("linearToOutputTexel",i.outputColorSpace),A0(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(la).join(`
`);if(o=Oc(o),o=em(o,i),o=tm(o,i),a=Oc(a),a=em(a,i),a=tm(a,i),o=im(o),a=im(a),i.isRawShaderMaterial!==!0)m=`#version 300 es
`,y=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,p=["#define varying in",i.glslVersion===Gl?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===Gl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p;let b=m+y+o,T=m+p+a,M=Bc(n,n.VERTEX_SHADER,b),A=Bc(n,n.FRAGMENT_SHADER,T);if(n.attachShader(x,M),n.attachShader(x,A),i.index0AttributeName!==void 0)n.bindAttribLocation(x,0,i.index0AttributeName);else if(i.hasPositionAttribute===!0)n.bindAttribLocation(x,0,"position");n.linkProgram(x);function R(V){if(e.debug.checkShaderErrors){let I=n.getProgramInfoLog(x)||"",U=n.getShaderInfoLog(M)||"",j=n.getShaderInfoLog(A)||"",C=I.trim(),Y=U.trim(),Q=j.trim(),G=!0,ge=!0;if(n.getProgramParameter(x,n.LINK_STATUS)===!1)if(G=!1,typeof e.debug.onShaderError==="function")e.debug.onShaderError(n,x,M,A);else{let X=jp(n,M,"vertex"),te=jp(n,A,"fragment");Be("WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(x,n.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+C+`
`+X+`
`+te)}else if(C!=="")ye("WebGLProgram: Program Info Log:",C);else if(Y===""||Q==="")ge=!1;if(ge)V.diagnostics={runnable:G,programLog:C,vertexShader:{log:Y,prefix:y},fragmentShader:{log:Q,prefix:p}}}n.deleteShader(M),n.deleteShader(A),g=new In(n,x),S=P0(n,x)}let g;this.getUniforms=function(){if(g===void 0)R(this);return g};let S;this.getAttributes=function(){if(S===void 0)R(this);return S};let P=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){if(P===!1)P=n.getProgramParameter(x,y0);return P},this.destroy=function(){r.releaseStatesOfProgram(this),n.deleteProgram(x),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=M0++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=M,this.fragmentShader=A,this}var V0=0;class zc{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){let r=this._getShaderCacheForMaterial(e);if(r.has(t)===!1)r.add(t),t.usedTimes++;if(r.has(i)===!1)r.add(i),i.usedTimes++;return this}remove(e){let t=this.materialCache.get(e);for(let i of t)if(i.usedTimes--,i.usedTimes===0)this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);if(i===void 0)i=new Set,t.set(e,i);return i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);if(i===void 0)i=new sm(e),t.set(e,i);return i}}class sm{constructor(e){this.id=V0++,this.code=e,this.usedTimes=0}}function k0(e){return e===Oi||e===rn||e===nn}function om(e,t,i,r,n,s){let o=new dn,a=new zc,l=new Set,c=[],u=new Map,f=r.logarithmicDepthBuffer,h={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(g){if(l.add(g),g===0)return"uv";return`uv${g}`}function x(g,S,P,V,I,U){let j=V.fog,C=I.geometry,Y=g.isMeshStandardMaterial||g.isMeshLambertMaterial||g.isMeshPhongMaterial?V.environment:null,Q=g.isMeshStandardMaterial||g.isMeshLambertMaterial&&!g.envMap||g.isMeshPhongMaterial&&!g.envMap,G=t.get(g.envMap||Y,Q),ge=h[g.type],X=r.precision;if(g.precision!==null){if(X=r.getMaxPrecision(g.precision),X!==g.precision)ye("WebGLProgram.getParameters:",g.precision,"not supported, using",X,"instead.")}let te=C.morphAttributes.position||C.morphAttributes.normal||C.morphAttributes.color,ae=te!==void 0?te.length:0,Ue=0;if(C.morphAttributes.position!==void 0)Ue=1;if(C.morphAttributes.normal!==void 0)Ue=2;if(C.morphAttributes.color!==void 0)Ue=3;let ie,le,Fe,He;if(ge){let Te=Wi[ge];ie=Te.vertexShader,le=Te.fragmentShader}else{ie=g.vertexShader,le=g.fragmentShader;let Te=a.getVertexShaderStage(g),Tt=a.getFragmentShaderStage(g);a.update(g,Te,Tt),Fe=Te.id,He=Tt.id}let Ze=e.getRenderTarget(),ue=e.state.buffers.depth.getReversed(),mt=I.isInstancedMesh===!0,lt=I.isBatchedMesh===!0,Pe=!!g.map,ot=!!g.matcap,re=!!G,fe=re&&G.isPMREMTexture===!0,_e=!!g.aoMap,Ie=!!g.lightMap,Le=!!g.bumpMap&&g.wireframe===!1,Je=!!g.normalMap,We=!!g.displacementMap,ft=!!g.emissiveMap,pt=!!g.metalnessMap,st=!!g.roughnessMap,N=g.anisotropy>0,kt=g.clearcoat>0,at=g.diffuseRoughness>0,St=g.dispersion>0,Se=g.retroreflectivity>0,bt=g.iridescence>0,$e=g.sheen>0,je=g.transmission>0,Wt=N&&!!g.anisotropyMap,E=kt&&!!g.clearcoatMap,_=kt&&!!g.clearcoatNormalMap,z=kt&&!!g.clearcoatRoughnessMap,oe=at&&!!g.diffuseRoughnessMap,ne=bt&&!!g.iridescenceMap,pe=bt&&!!g.iridescenceThicknessMap,Me=$e&&!!g.sheenColorMap,W=$e&&!!g.sheenRoughnessMap,J=!!g.specularMap,ve=!!g.specularColorMap,D=!!g.specularIntensityMap,ee=je&&!!g.transmissionMap,Z=je&&!!g.thicknessMap,he=!!g.gradientMap,xe=!!g.alphaMap,be=g.alphaTest>0,qe=!!g.alphaHash,De=!!g.extensions,Re=Fi;if(g.toneMapped){if(Ze===null||Ze.isXRRenderTarget===!0)Re=e.toneMapping}let Ke=fe?G.isCompressedCubeTexture?G.image[0].mipmaps:G.mipmaps:null,ct={shaderID:ge,shaderType:g.type,shaderName:g.name,vertexShader:ie,fragmentShader:le,defines:g.defines,customVertexShaderID:Fe,customFragmentShaderID:He,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:X,batching:lt,batchingColor:lt&&I._colorsTexture!==null,instancing:mt,instancingColor:mt&&I.instanceColor!==null,instancingMorph:mt&&I.morphTexture!==null,outputColorSpace:Ze===null?e.outputColorSpace:Ze.isXRRenderTarget===!0?Ze.texture.colorSpace:rt.workingColorSpace,alphaToCoverage:!!g.alphaToCoverage,map:Pe,matcap:ot,envMap:re,envMapMode:re&&G.mapping,envMapPMREM:fe,envMapMaxLod:fe?Ke.length-1:null,envMapSize:fe?Ke[0].width:null,aoMap:_e,lightMap:Ie,bumpMap:Le,normalMap:Je,displacementMap:We,emissiveMap:ft,normalMapObjectSpace:Je&&g.normalMapType===Mh,normalMapTangentSpace:Je&&g.normalMapType===lr,packedNormalMap:Je&&g.normalMapType===lr&&k0(g.normalMap.format),metalnessMap:pt,roughnessMap:st,anisotropy:N,anisotropyMap:Wt,clearcoat:kt,clearcoatMap:E,clearcoatNormalMap:_,clearcoatRoughnessMap:z,diffuseRoughness:at,diffuseRoughnessMap:oe,dispersion:St,retroreflection:Se,iridescence:bt,iridescenceMap:ne,iridescenceThicknessMap:pe,sheen:$e,sheenColorMap:Me,sheenRoughnessMap:W,specularMap:J,specularColorMap:ve,specularIntensityMap:D,transmission:je,transmissionMap:ee,thicknessMap:Z,gradientMap:he,opaque:g.transparent===!1&&g.blending===Nr&&g.alphaToCoverage===!1,alphaMap:xe,alphaTest:be,alphaHash:qe,combine:g.combine,mapUv:Pe&&d(g.map.channel),aoMapUv:_e&&d(g.aoMap.channel),lightMapUv:Ie&&d(g.lightMap.channel),bumpMapUv:Le&&d(g.bumpMap.channel),normalMapUv:Je&&d(g.normalMap.channel),displacementMapUv:We&&d(g.displacementMap.channel),emissiveMapUv:ft&&d(g.emissiveMap.channel),metalnessMapUv:pt&&d(g.metalnessMap.channel),roughnessMapUv:st&&d(g.roughnessMap.channel),anisotropyMapUv:Wt&&d(g.anisotropyMap.channel),clearcoatMapUv:E&&d(g.clearcoatMap.channel),clearcoatNormalMapUv:_&&d(g.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:z&&d(g.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:oe&&d(g.diffuseRoughnessMap.channel),iridescenceMapUv:ne&&d(g.iridescenceMap.channel),iridescenceThicknessMapUv:pe&&d(g.iridescenceThicknessMap.channel),sheenColorMapUv:Me&&d(g.sheenColorMap.channel),sheenRoughnessMapUv:W&&d(g.sheenRoughnessMap.channel),specularMapUv:J&&d(g.specularMap.channel),specularColorMapUv:ve&&d(g.specularColorMap.channel),specularIntensityMapUv:D&&d(g.specularIntensityMap.channel),transmissionMapUv:ee&&d(g.transmissionMap.channel),thicknessMapUv:Z&&d(g.thicknessMap.channel),alphaMapUv:xe&&d(g.alphaMap.channel),vertexTangents:!!C.attributes.tangent&&(Je||N),vertexNormals:!!C.attributes.normal,vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!C.attributes.color&&C.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!C.attributes.uv&&(Pe||xe),fog:!!j,useFog:g.fog===!0,fogExp2:!!j&&j.isFogExp2,flatShading:g.wireframe===!1&&(g.flatShading===!0||C.attributes.normal===void 0&&Je===!1&&(g.isMeshLambertMaterial||g.isMeshPhongMaterial||g.isMeshStandardMaterial||g.isMeshPhysicalMaterial)),sizeAttenuation:g.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:ue,skinning:I.isSkinnedMesh===!0,hasPositionAttribute:C.attributes.position!==void 0,morphTargets:C.morphAttributes.position!==void 0,morphNormals:C.morphAttributes.normal!==void 0,morphColors:C.morphAttributes.color!==void 0,morphTargetsCount:ae,morphTextureStride:Ue,numSunLights:S.sun.length,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numSunLightShadows:S.sunShadowMap.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numLightProbeGrids:U.filter((Te)=>Te.texture!==null).length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:g.dithering,shadowMapEnabled:e.shadowMap.enabled&&P.length>0,shadowMapType:e.shadowMap.type,toneMapping:Re,decodeVideoTexture:Pe&&g.map.isVideoTexture===!0&&rt.getTransfer(g.map.colorSpace)===vt,decodeVideoTextureEmissive:ft&&g.emissiveMap.isVideoTexture===!0&&rt.getTransfer(g.emissiveMap.colorSpace)===vt,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===Ri,flipSided:g.side===Vt,useDepthPacking:g.depthPacking>=0,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionClipCullDistance:De&&g.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(De&&g.extensions.multiDraw===!0||lt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:g.customProgramCacheKey()};return ct.vertexUv1s=l.has(1),ct.vertexUv2s=l.has(2),ct.vertexUv3s=l.has(3),l.clear(),ct}function y(g){let S=[];if(g.shaderID)S.push(g.shaderID);else S.push(g.customVertexShaderID),S.push(g.customFragmentShaderID);if(g.defines!==void 0)for(let P in g.defines)S.push(P),S.push(g.defines[P]);if(g.isRawShaderMaterial===!1)p(S,g),m(S,g),S.push(e.outputColorSpace);return S.push(g.customProgramCacheKey),S.join()}function p(g,S){g.push(S.precision),g.push(S.outputColorSpace),g.push(S.envMapMode),g.push(S.envMapPMREM),g.push(S.envMapMaxLod),g.push(S.envMapSize),g.push(S.mapUv),g.push(S.alphaMapUv),g.push(S.lightMapUv),g.push(S.aoMapUv),g.push(S.bumpMapUv),g.push(S.normalMapUv),g.push(S.displacementMapUv),g.push(S.emissiveMapUv),g.push(S.metalnessMapUv),g.push(S.roughnessMapUv),g.push(S.anisotropyMapUv),g.push(S.clearcoatMapUv),g.push(S.clearcoatNormalMapUv),g.push(S.clearcoatRoughnessMapUv),g.push(S.diffuseRoughnessMapUv),g.push(S.iridescenceMapUv),g.push(S.iridescenceThicknessMapUv),g.push(S.sheenColorMapUv),g.push(S.sheenRoughnessMapUv),g.push(S.specularMapUv),g.push(S.specularColorMapUv),g.push(S.specularIntensityMapUv),g.push(S.transmissionMapUv),g.push(S.thicknessMapUv),g.push(S.combine),g.push(S.fogExp2),g.push(S.sizeAttenuation),g.push(S.morphTargetsCount),g.push(S.numSunLights),g.push(S.numDirLights),g.push(S.numPointLights),g.push(S.numSpotLights),g.push(S.numSpotLightMaps),g.push(S.numHemiLights),g.push(S.numRectAreaLights),g.push(S.numSunLightShadows),g.push(S.numDirLightShadows),g.push(S.numPointLightShadows),g.push(S.numSpotLightShadows),g.push(S.numSpotLightShadowsWithMaps),g.push(S.numLightProbes),g.push(S.numLightProbeGrids),g.push(S.shadowMapType),g.push(S.toneMapping),g.push(S.numClippingPlanes),g.push(S.numClipIntersection),g.push(S.depthPacking)}function m(g,S){if(o.disableAll(),S.instancing)o.enable(0);if(S.instancingColor)o.enable(1);if(S.instancingMorph)o.enable(2);if(S.matcap)o.enable(3);if(S.envMap)o.enable(4);if(S.normalMapObjectSpace)o.enable(5);if(S.normalMapTangentSpace)o.enable(6);if(S.clearcoat)o.enable(7);if(S.iridescence)o.enable(8);if(S.alphaTest)o.enable(9);if(S.vertexColors)o.enable(10);if(S.vertexAlphas)o.enable(11);if(S.vertexUv1s)o.enable(12);if(S.vertexUv2s)o.enable(13);if(S.vertexUv3s)o.enable(14);if(S.vertexTangents)o.enable(15);if(S.anisotropy)o.enable(16);if(S.alphaHash)o.enable(17);if(S.batching)o.enable(18);if(S.dispersion)o.enable(19);if(S.retroreflection)o.enable(24);if(S.diffuseRoughness)o.enable(25);if(S.batchingColor)o.enable(20);if(S.gradientMap)o.enable(21);if(S.packedNormalMap)o.enable(22);if(S.vertexNormals)o.enable(23);if(g.push(o.mask),o.disableAll(),S.fog)o.enable(0);if(S.useFog)o.enable(1);if(S.flatShading)o.enable(2);if(S.logarithmicDepthBuffer)o.enable(3);if(S.reversedDepthBuffer)o.enable(4);if(S.skinning)o.enable(5);if(S.morphTargets)o.enable(6);if(S.morphNormals)o.enable(7);if(S.morphColors)o.enable(8);if(S.premultipliedAlpha)o.enable(9);if(S.shadowMapEnabled)o.enable(10);if(S.doubleSided)o.enable(11);if(S.flipSided)o.enable(12);if(S.useDepthPacking)o.enable(13);if(S.dithering)o.enable(14);if(S.transmission)o.enable(15);if(S.sheen)o.enable(16);if(S.opaque)o.enable(17);if(S.pointsUvs)o.enable(18);if(S.decodeVideoTexture)o.enable(19);if(S.decodeVideoTextureEmissive)o.enable(20);if(S.alphaToCoverage)o.enable(21);if(S.numLightProbeGrids>0)o.enable(22);if(S.hasPositionAttribute)o.enable(23);g.push(o.mask)}function b(g){let S=h[g.type],P;if(S){let V=Wi[S];P=ir.clone(V.uniforms)}else P=g.uniforms;return P}function T(g,S){let P=u.get(S);if(P!==void 0)++P.usedTimes;else P=new nm(e,S,g,n),c.push(P),u.set(S,P);return P}function M(g){if(--g.usedTimes===0){let S=c.indexOf(g);c[S]=c[c.length-1],c.pop(),u.delete(g.cacheKey),g.destroy()}}function A(g){a.remove(g)}function R(){a.dispose()}return{getParameters:x,getProgramCacheKey:y,getUniforms:b,acquireProgram:T,releaseProgram:M,releaseShaderCache:A,programs:c,dispose:R}}function am(){let e=new WeakMap;function t(o){return e.has(o)}function i(o){let a=e.get(o);if(a===void 0)a={},e.set(o,a);return a}function r(o){e.delete(o)}function n(o,a,l){e.get(o)[a]=l}function s(){e=new WeakMap}return{has:t,get:i,remove:r,update:n,dispose:s}}function H0(e,t){if(e.groupOrder!==t.groupOrder)return e.groupOrder-t.groupOrder;else if(e.renderOrder!==t.renderOrder)return e.renderOrder-t.renderOrder;else if(e.material.id!==t.material.id)return e.material.id-t.material.id;else if(e.materialVariant!==t.materialVariant)return e.materialVariant-t.materialVariant;else if(e.z!==t.z)return e.z-t.z;else return e.id-t.id}function lm(e,t){if(e.groupOrder!==t.groupOrder)return e.groupOrder-t.groupOrder;else if(e.renderOrder!==t.renderOrder)return e.renderOrder-t.renderOrder;else if(e.z!==t.z)return t.z-e.z;else return e.id-t.id}function cm(){let e=[],t=0,i=[],r=[],n=[];function s(){t=0,i.length=0,r.length=0,n.length=0}function o(h){let d=0;if(h.isInstancedMesh)d+=2;if(h.isSkinnedMesh)d+=1;return d}function a(h,d,x,y,p,m){let b=e[t];if(b===void 0)b={id:h.id,object:h,geometry:d,material:x,materialVariant:o(h),groupOrder:y,renderOrder:h.renderOrder,z:p,group:m},e[t]=b;else b.id=h.id,b.object=h,b.geometry=d,b.material=x,b.materialVariant=o(h),b.groupOrder=y,b.renderOrder=h.renderOrder,b.z=p,b.group=m;return t++,b}function l(h,d,x,y,p,m,b){if(b.reversedDepth===!0)p=-p;let T=a(h,d,x,y,p,m);if(x.transmission>0)r.push(T);else if(x.transparent===!0)n.push(T);else i.push(T)}function c(h,d,x,y,p,m){let b=a(h,d,x,y,p,m);if(x.transmission>0)r.unshift(b);else if(x.transparent===!0)n.unshift(b);else i.unshift(b)}function u(h,d){if(i.length>1)i.sort(h||H0);if(r.length>1)r.sort(d||lm);if(n.length>1)n.sort(d||lm)}function f(){for(let h=t,d=e.length;h<d;h++){let x=e[h];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:i,transmissive:r,transparent:n,init:s,push:l,unshift:c,finish:f,sort:u}}function hm(){let e=new WeakMap;function t(r,n){let s=e.get(r),o;if(s===void 0)o=new cm,e.set(r,[o]);else if(n>=s.length)o=new cm,s.push(o);else o=s[n];return o}function i(){e=new WeakMap}return{get:t,dispose:i}}function W0(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let i;switch(t.type){case"SunLight":case"DirectionalLight":i={direction:new w,color:new de};break;case"SpotLight":i={position:new w,direction:new w,color:new de,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new w,color:new de,distance:0,decay:0};break;case"HemisphereLight":i={direction:new w,skyColor:new de,groundColor:new de};break;case"RectAreaLight":i={color:new de,position:new w,halfWidth:new w,halfHeight:new w};break}return e[t.id]=i,i}}}function X0(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let i;switch(t.type){case"SunLight":case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new H};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new H};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new H,shadowCameraNear:1,shadowCameraFar:1000};break}return e[t.id]=i,i}}}var q0=0;function Y0(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function um(e){let t=new W0,i=X0(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)r.probe.push(new w);let n=new w,s=new Ye,o=new Ye;function a(c){let u=0,f=0,h=0;for(let U=0;U<9;U++)r.probe[U].set(0,0,0);let d=0,x=0,y=0,p=0,m=0,b=0,T=0,M=0,A=0,R=0,g=0,S=0,P=0,V=0;c.sort(Y0);for(let U=0,j=c.length;U<j;U++){let C=c[U],{color:Y,intensity:Q,distance:G}=C,ge=null;if(C.shadow&&C.shadow.map)if(C.shadow.map.texture.format===Oi)ge=C.shadow.map.texture;else ge=C.shadow.map.depthTexture||C.shadow.map.texture;if(C.isAmbientLight)u+=Y.r*Q,f+=Y.g*Q,h+=Y.b*Q;else if(C.isLightProbe){for(let X=0;X<9;X++)r.probe[X].addScaledVector(C.sh.coefficients[X],Q);V++}else if(C.isSunLight){let X=t.get(C);if(X.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let te=C.shadow,ae=i.get(C);ae.shadowIntensity=te.intensity,ae.shadowBias=te.bias,ae.shadowNormalBias=te.normalBias,ae.shadowRadius=te.radius,ae.shadowMapSize.copy(te.mapSize).multiply(te.getFrameExtents()),r.sunShadow[x]=ae,r.sunShadowMap[x]=ge;let Ue=te.getViewportCount();for(let ie=0;ie<Ue;ie++)r.sunShadowMatrix[y+ie]=te.getMatrix(ie),r.sunShadowCascade[y+ie]=te._cascadeData[ie];y+=Ue,x++}r.sun[d]=X,d++}else if(C.isDirectionalLight){let X=t.get(C);if(X.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let te=C.shadow,ae=i.get(C);ae.shadowIntensity=te.intensity,ae.shadowBias=te.bias,ae.shadowNormalBias=te.normalBias,ae.shadowRadius=te.radius,ae.shadowMapSize=te.mapSize,r.directionalShadow[p]=ae,r.directionalShadowMap[p]=ge,r.directionalShadowMatrix[p]=C.shadow.matrix,A++}r.directional[p]=X,p++}else if(C.isSpotLight){let X=t.get(C);X.position.setFromMatrixPosition(C.matrixWorld),X.color.copy(Y).multiplyScalar(Q),X.distance=G,X.coneCos=Math.cos(C.angle),X.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),X.decay=C.decay,r.spot[b]=X;let te=C.shadow;if(C.map){if(r.spotLightMap[S]=C.map,S++,te.updateMatrices(C),C.castShadow)P++}if(r.spotLightMatrix[b]=te.matrix,C.castShadow){let ae=i.get(C);ae.shadowIntensity=te.intensity,ae.shadowBias=te.bias,ae.shadowNormalBias=te.normalBias,ae.shadowRadius=te.radius,ae.shadowMapSize=te.mapSize,r.spotShadow[b]=ae,r.spotShadowMap[b]=ge,g++}b++}else if(C.isRectAreaLight){let X=t.get(C);X.color.copy(Y).multiplyScalar(Q),X.halfWidth.set(C.width*0.5,0,0),X.halfHeight.set(0,C.height*0.5,0),r.rectArea[T]=X,T++}else if(C.isPointLight){let X=t.get(C);if(X.color.copy(C.color).multiplyScalar(C.intensity),X.distance=C.distance,X.decay=C.decay,C.castShadow){let te=C.shadow,ae=i.get(C);ae.shadowIntensity=te.intensity,ae.shadowBias=te.bias,ae.shadowNormalBias=te.normalBias,ae.shadowRadius=te.radius,ae.shadowMapSize=te.mapSize,ae.shadowCameraNear=te.camera.near,ae.shadowCameraFar=te.camera.far,r.pointShadow[m]=ae,r.pointShadowMap[m]=ge,r.pointShadowMatrix[m]=C.shadow.matrix,R++}r.point[m]=X,m++}else if(C.isHemisphereLight){let X=t.get(C);X.skyColor.copy(C.color).multiplyScalar(Q),X.groundColor.copy(C.groundColor).multiplyScalar(Q),r.hemi[M]=X,M++}}if(T>0)if(e.has("OES_texture_float_linear")===!0)r.rectAreaLTC1=Ae.LTC_FLOAT_1,r.rectAreaLTC2=Ae.LTC_FLOAT_2;else r.rectAreaLTC1=Ae.LTC_HALF_1,r.rectAreaLTC2=Ae.LTC_HALF_2;r.ambient[0]=u,r.ambient[1]=f,r.ambient[2]=h;let I=r.hash;if(I.sunLength!==d||I.directionalLength!==p||I.pointLength!==m||I.spotLength!==b||I.rectAreaLength!==T||I.hemiLength!==M||I.numSunShadows!==x||I.numDirectionalShadows!==A||I.numPointShadows!==R||I.numSpotShadows!==g||I.numSpotMaps!==S||I.numLightProbes!==V)r.sun.length=d,r.directional.length=p,r.spot.length=b,r.rectArea.length=T,r.point.length=m,r.hemi.length=M,r.sunShadow.length=x,r.sunShadowMap.length=x,r.sunShadowMatrix.length=y,r.sunShadowCascade.length=y,r.directionalShadow.length=A,r.directionalShadowMap.length=A,r.directionalShadowMatrix.length=A,r.pointShadow.length=R,r.pointShadowMap.length=R,r.pointShadowMatrix.length=R,r.spotShadow.length=g,r.spotShadowMap.length=g,r.spotLightMatrix.length=g+S-P,r.spotLightMap.length=S,r.numSpotLightShadowsWithMaps=P,r.numLightProbes=V,I.sunLength=d,I.directionalLength=p,I.pointLength=m,I.spotLength=b,I.rectAreaLength=T,I.hemiLength=M,I.numSunShadows=x,I.numDirectionalShadows=A,I.numPointShadows=R,I.numSpotShadows=g,I.numSpotMaps=S,I.numLightProbes=V,r.version=q0++}function l(c,u){let f=0,h=0,d=0,x=0,y=0,p=0,m=u.matrixWorldInverse;for(let b=0,T=c.length;b<T;b++){let M=c[b];if(M.isSunLight){let A=r.sun[f];A.direction.setFromMatrixPosition(M.matrixWorld),A.direction.transformDirection(m),f++}else if(M.isDirectionalLight){let A=r.directional[h];A.direction.setFromMatrixPosition(M.matrixWorld),n.setFromMatrixPosition(M.target.matrixWorld),A.direction.sub(n),A.direction.transformDirection(m),h++}else if(M.isSpotLight){let A=r.spot[x];A.position.setFromMatrixPosition(M.matrixWorld),A.position.applyMatrix4(m),A.direction.setFromMatrixPosition(M.matrixWorld),n.setFromMatrixPosition(M.target.matrixWorld),A.direction.sub(n),A.direction.transformDirection(m),x++}else if(M.isRectAreaLight){let A=r.rectArea[y];A.position.setFromMatrixPosition(M.matrixWorld),A.position.applyMatrix4(m),o.identity(),s.copy(M.matrixWorld),s.premultiply(m),o.extractRotation(s),A.halfWidth.set(M.width*0.5,0,0),A.halfHeight.set(0,M.height*0.5,0),A.halfWidth.applyMatrix4(o),A.halfHeight.applyMatrix4(o),y++}else if(M.isPointLight){let A=r.point[d];A.position.setFromMatrixPosition(M.matrixWorld),A.position.applyMatrix4(m),d++}else if(M.isHemisphereLight){let A=r.hemi[p];A.direction.setFromMatrixPosition(M.matrixWorld),A.direction.transformDirection(m),p++}}}return{setup:a,setupView:l,state:r}}function fm(e){let t=new um(e),i=[],r=[],n=[];function s(f){u.camera=f,i.length=0,r.length=0,n.length=0}function o(f){if(f.isLightProbeGrid)n.push(f);else i.push(f)}function a(f){r.push(f)}function l(){t.setup(i),n.sort((f,h)=>f.priority-h.priority||f.id-h.id)}function c(f){t.setupView(i,f)}let u={lightsArray:i,shadowsArray:r,lightProbeGridArray:n,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:u,setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function dm(e){let t=new WeakMap;function i(n,s=0){let o=t.get(n),a;if(o===void 0)a=new fm(e),t.set(n,[a]);else if(s>=o.length)a=new fm(e),o.push(a);else a=o[s];return a}function r(){t=new WeakMap}return{get:i,dispose:r}}var pm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}
`,mm=`
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
`;var J0=[new w(1,0,0),new w(-1,0,0),new w(0,1,0),new w(0,-1,0),new w(0,0,1),new w(0,0,-1)],K0=[new w(0,-1,0),new w(0,-1,0),new w(0,0,1),new w(0,0,-1),new w(0,-1,0),new w(0,-1,0)],gm=new Ye,ca=new w,Gc=new w;function xm(e,t,i){let r=new ji,n=new H,s=new H,o=new Mt,a=new ea,l=new ta,c={},u=i.maxTextureSize,f={[qi]:Vt,[Vt]:qi,[Ri]:Ri},h=new Dt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new H},radius:{value:4}},vertexShader:pm,fragmentShader:mm}),d=h.clone();d.defines.HORIZONTAL_PASS=1;let x=new Xe;x.setAttribute("position",new ei(new Float32Array([-1,-1,0.5,3,-1,0.5,-1,3,0.5]),3));let y=new et(x,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Un;let m=this.type;this.render=function(R,g,S){if(p.enabled===!1)return;if(p.autoUpdate===!1&&p.needsUpdate===!1)return;if(R.length===0)return;if(this.type===jc)ye("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Un;let P=e.getRenderTarget(),V=e.getActiveCubeFace(),I=e.getActiveMipmapLevel(),U=e.state;if(U.setBlending(Yi),U.buffers.depth.getReversed()===!0)U.buffers.color.setClear(0,0,0,0);else U.buffers.color.setClear(1,1,1,1);U.buffers.depth.setTest(!0),U.setScissorTest(!1);let j=m!==this.type;if(j)g.traverse(function(C){if(C.material)if(Array.isArray(C.material))C.material.forEach((Y)=>Y.needsUpdate=!0);else C.material.needsUpdate=!0});for(let C=0,Y=R.length;C<Y;C++){let Q=R[C],G=Q.shadow;if(G===void 0){ye("WebGLShadowMap:",Q,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;n.copy(G.mapSize);let ge=G.getFrameExtents();if(n.multiply(ge),s.copy(G.mapSize),n.x>u||n.y>u){if(n.x>u)s.x=Math.floor(u/ge.x),n.x=s.x*ge.x,G.mapSize.x=s.x;if(n.y>u)s.y=Math.floor(u/ge.y),n.y=s.y*ge.y,G.mapSize.y=s.y}let X=e.state.buffers.depth.getReversed();if(G.camera._reversedDepth=X,G.map===null||j===!0){if(G.map!==null){if(G.map.depthTexture!==null)G.map.depthTexture.dispose(),G.map.depthTexture=null;G.map.dispose()}if(this.type===jr){if(Q.isPointLight){ye("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new Lt(n.x,n.y,{format:Oi,type:Ut,minFilter:Ht,magFilter:Ht,generateMipmaps:!1}),G.map.texture.name=Q.name+".shadowMap",G.map.depthTexture=new Vi(n.x,n.y,jt),G.map.depthTexture.name=Q.name+".shadowMapDepth",G.map.depthTexture.format=Di,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Ot,G.map.depthTexture.magFilter=Ot}else{if(Q.isPointLight)G.map=new Kr(n.x),G.map.depthTexture=new Es(n.x,ni);else G.map=new Lt(n.x,n.y),G.map.depthTexture=new Vi(n.x,n.y,ni);if(G.map.depthTexture.name=Q.name+".shadowMap",G.map.depthTexture.format=Di,this.type===Un)G.map.depthTexture.compareFunction=X?Pa:Ca,G.map.depthTexture.minFilter=Ht,G.map.depthTexture.magFilter=Ht;else G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Ot,G.map.depthTexture.magFilter=Ot}G.camera.updateProjectionMatrix()}if(G.map.isWebGLCubeRenderTarget!==!0&&(G.map.width!==n.x||G.map.height!==n.y))G.map.setSize(n.x,n.y);let te=G.map.isWebGLCubeRenderTarget?6:G.getViewportCount();if(Q.isPointLight!==!0)G.updateMatrices(Q,S);let ae=(G.camera.layers.mask&4294967294)!==0?G.camera.layers:S.layers;for(let Ue=0;Ue<te;Ue++){let ie=G.getCamera(Ue);if(Q.isPointLight){let{camera:le,matrix:Fe}=G,He=Q.distance||le.far;if(He!==le.far)le.far=He,le.updateProjectionMatrix();ca.setFromMatrixPosition(Q.matrixWorld),le.position.copy(ca),Gc.copy(le.position),Gc.add(J0[Ue]),le.up.copy(K0[Ue]),le.lookAt(Gc),le.updateMatrixWorld(),Fe.makeTranslation(-ca.x,-ca.y,-ca.z),gm.multiplyMatrices(le.projectionMatrix,le.matrixWorldInverse),G._frustum.setFromProjectionMatrix(gm,le.coordinateSystem,le.reversedDepth)}if(G.map.isWebGLCubeRenderTarget)e.setRenderTarget(G.map,Ue),e.clear();else{if(Ue===0)e.setRenderTarget(G.map),e.clear();let le=G.getViewport(Ue);o.set(s.x*le.x,s.y*le.y,s.x*le.z,s.y*le.w),U.viewport(o)}r=G.getFrustum(Ue),M(g,S,ie,Q,ae,this.type)}if(G.isPointLightShadow!==!0&&this.type===jr)b(G,S);G.needsUpdate=!1}m=this.type,p.needsUpdate=!1,e.setRenderTarget(P,V,I)};function b(R,g){let S=t.update(y);if(h.defines.VSM_SAMPLES!==R.blurSamples)h.defines.VSM_SAMPLES=R.blurSamples,d.defines.VSM_SAMPLES=R.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0;if(R.mapPass===null)R.mapPass=new Lt(n.x,n.y,{format:Oi,type:Ut});else if(R.mapPass.width!==R.map.width||R.mapPass.height!==R.map.height)R.mapPass.setSize(R.map.width,R.map.height);h.uniforms.shadow_pass.value=R.map.depthTexture,h.uniforms.resolution.value.set(R.map.width,R.map.height),h.uniforms.radius.value=R.radius,e.setRenderTarget(R.mapPass),e.clear(),e.renderBufferDirect(g,null,S,h,y,null),d.uniforms.shadow_pass.value=R.mapPass.texture,d.uniforms.resolution.value.set(R.map.width,R.map.height),d.uniforms.radius.value=R.radius,e.setRenderTarget(R.map),e.clear(),e.renderBufferDirect(g,null,S,d,y,null)}function T(R,g,S,P){let V=null,I=S.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(I!==void 0)V=I;else if(V=S.isPointLight===!0?l:a,e.localClippingEnabled&&g.clipShadows===!0&&Array.isArray(g.clippingPlanes)&&g.clippingPlanes.length!==0||g.displacementMap&&g.displacementScale!==0||g.alphaMap&&g.alphaTest>0||g.map&&g.alphaTest>0||g.alphaToCoverage===!0){let U=V.uuid,j=g.uuid,C=c[U];if(C===void 0)C={},c[U]=C;let Y=C[j];if(Y===void 0)Y=V.clone(),C[j]=Y,g.addEventListener("dispose",A);V=Y}if(V.visible=g.visible,V.wireframe=g.wireframe,P===jr)V.side=g.shadowSide!==null?g.shadowSide:g.side;else V.side=g.shadowSide!==null?g.shadowSide:f[g.side];if(V.alphaMap=g.alphaMap,V.alphaTest=g.alphaToCoverage===!0?0.5:g.alphaTest,V.map=g.map,V.clipShadows=g.clipShadows,V.clippingPlanes=g.clippingPlanes,V.clipIntersection=g.clipIntersection,V.displacementMap=g.displacementMap,V.displacementScale=g.displacementScale,V.displacementBias=g.displacementBias,V.wireframeLinewidth=g.wireframeLinewidth,V.linewidth=g.linewidth,S.isPointLight===!0&&V.isMeshDistanceMaterial===!0){let U=e.properties.get(V);U.light=S}return V}function M(R,g,S,P,V,I){if(R.visible===!1)return;if(R.layers.test(V)&&(R.isMesh||R.isLine||R.isPoints)){if((R.castShadow||R.receiveShadow&&I===jr)&&(!R.frustumCulled||R.intersectsFrustum(r))){R.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,R.matrixWorld);let C=t.update(R),Y=R.material;if(Array.isArray(Y)){let Q=C.groups;for(let G=0,ge=Q.length;G<ge;G++){let X=Q[G],te=Y[X.materialIndex];if(te&&te.visible){let ae=T(R,te,P,I);R.onBeforeShadow(e,R,g,S,C,ae,X),e.renderBufferDirect(S,null,C,ae,R,X),R.onAfterShadow(e,R,g,S,C,ae,X)}}}else if(Y.visible){let Q=T(R,Y,P,I);R.onBeforeShadow(e,R,g,S,C,Q,null),e.renderBufferDirect(S,null,C,Q,R,null),R.onAfterShadow(e,R,g,S,C,Q,null)}}}let j=R.children;for(let C=0,Y=j.length;C<Y;C++)M(j[C],g,S,P,V,I)}function A(R){R.target.removeEventListener("dispose",A);for(let S in c){let P=c[S],V=R.target.uuid;if(V in P)P[V].dispose(),delete P[V]}}}function _m(e,t){function i(){let D=!1,ee=new Mt,Z=null,he=new Mt(0,0,0,0);return{setMask:function(xe){if(Z!==xe&&!D)e.colorMask(xe,xe,xe,xe),Z=xe},setLocked:function(xe){D=xe},setClear:function(xe,be,qe,De,Re){if(Re===!0)xe*=De,be*=De,qe*=De;if(ee.set(xe,be,qe,De),he.equals(ee)===!1)e.clearColor(xe,be,qe,De),he.copy(ee)},reset:function(){D=!1,Z=null,he.set(-1,0,0,0)}}}function r(){let D=!1,ee=!1,Z=null,he=null,xe=null;return{setReversed:function(be){if(ee!==be){let qe=t.get("EXT_clip_control");if(be)qe.clipControlEXT(qe.LOWER_LEFT_EXT,qe.ZERO_TO_ONE_EXT);else qe.clipControlEXT(qe.LOWER_LEFT_EXT,qe.NEGATIVE_ONE_TO_ONE_EXT);ee=be;let De=xe;xe=null,this.setClear(De)}},getReversed:function(){return ee},setTest:function(be){if(be)ue(e.DEPTH_TEST);else mt(e.DEPTH_TEST)},setMask:function(be){if(Z!==be&&!D)e.depthMask(be),Z=be},setFunc:function(be){if(ee)be=Lh[be];if(he!==be){switch(be){case Os:e.depthFunc(e.NEVER);break;case zs:e.depthFunc(e.ALWAYS);break;case Gs:e.depthFunc(e.LESS);break;case Fr:e.depthFunc(e.LEQUAL);break;case Vs:e.depthFunc(e.EQUAL);break;case ks:e.depthFunc(e.GEQUAL);break;case Hs:e.depthFunc(e.GREATER);break;case Ws:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}he=be}},setLocked:function(be){D=be},setClear:function(be){if(xe!==be){if(xe=be,ee)be=1-be;e.clearDepth(be)}},reset:function(){D=!1,Z=null,he=null,xe=null,ee=!1}}}function n(){let D=!1,ee=null,Z=null,he=null,xe=null,be=null,qe=null,De=null,Re=null;return{setTest:function(Ke){if(!D)if(Ke)ue(e.STENCIL_TEST);else mt(e.STENCIL_TEST)},setMask:function(Ke){if(ee!==Ke&&!D)e.stencilMask(Ke),ee=Ke},setFunc:function(Ke,ct,Te){if(Z!==Ke||he!==ct||xe!==Te)e.stencilFunc(Ke,ct,Te),Z=Ke,he=ct,xe=Te},setOp:function(Ke,ct,Te){if(be!==Ke||qe!==ct||De!==Te)e.stencilOp(Ke,ct,Te),be=Ke,qe=ct,De=Te},setLocked:function(Ke){D=Ke},setClear:function(Ke){if(Re!==Ke)e.clearStencil(Ke),Re=Ke},reset:function(){D=!1,ee=null,Z=null,he=null,xe=null,be=null,qe=null,De=null,Re=null}}}let s=new i,o=new r,a=new n,l={},c=new WeakMap,u={},f={},h={},d=new WeakMap,x=[],y=null,p=!1,m=null,b=null,T=null,M=null,A=null,R=null,g=null,S=new de(0,0,0),P=0,V=!1,I=null,U=null,j=null,C=null,Y=null,Q=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),G=!1,ge=0,X=e.getParameter(e.VERSION);if(X.indexOf("WebGL")!==-1)ge=parseFloat(/^WebGL (\d)/.exec(X)[1]),G=ge>=1;else if(X.indexOf("OpenGL ES")!==-1)ge=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),G=ge>=2;let te=null,ae={},Ue=e.getParameter(e.SCISSOR_BOX),ie=e.getParameter(e.VIEWPORT),le=new Mt().fromArray(Ue),Fe=new Mt().fromArray(ie);function He(D,ee,Z,he){let xe=new Uint8Array(4),be=e.createTexture();e.bindTexture(D,be),e.texParameteri(D,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(D,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let qe=0;qe<Z;qe++)if(D===e.TEXTURE_3D||D===e.TEXTURE_2D_ARRAY)e.texImage3D(ee,0,e.RGBA,1,1,he,0,e.RGBA,e.UNSIGNED_BYTE,xe);else e.texImage2D(ee+qe,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,xe);return be}let Ze={};Ze[e.TEXTURE_2D]=He(e.TEXTURE_2D,e.TEXTURE_2D,1),Ze[e.TEXTURE_CUBE_MAP]=He(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ze[e.TEXTURE_2D_ARRAY]=He(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),Ze[e.TEXTURE_3D]=He(e.TEXTURE_3D,e.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ue(e.DEPTH_TEST),o.setFunc(Fr),Le(!1),Je(Ul),ue(e.CULL_FACE),_e(Yi);function ue(D){if(u[D]!==!0)e.enable(D),u[D]=!0}function mt(D){if(u[D]!==!1)e.disable(D),u[D]=!1}function lt(D,ee){if(h[D]!==ee){if(e.bindFramebuffer(D,ee),h[D]=ee,D===e.DRAW_FRAMEBUFFER)h[e.FRAMEBUFFER]=ee;if(D===e.FRAMEBUFFER)h[e.DRAW_FRAMEBUFFER]=ee;return!0}return!1}function Pe(D,ee){let Z=x,he=!1;if(D){if(Z=d.get(ee),Z===void 0)Z=[],d.set(ee,Z);let xe=D.textures;if(Z.length!==xe.length||Z[0]!==e.COLOR_ATTACHMENT0){for(let be=0,qe=xe.length;be<qe;be++)Z[be]=e.COLOR_ATTACHMENT0+be;Z.length=xe.length,he=!0}}else if(Z[0]!==e.BACK)Z[0]=e.BACK,he=!0;if(he)e.drawBuffers(Z)}function ot(D){if(y!==D)return e.useProgram(D),y=D,!0;return!1}let re={[Ur]:e.FUNC_ADD,[th]:e.FUNC_SUBTRACT,[ih]:e.FUNC_REVERSE_SUBTRACT};re[rh]=e.MIN,re[nh]=e.MAX;let fe={[sh]:e.ZERO,[oh]:e.ONE,[ah]:e.SRC_COLOR,[pa]:e.SRC_ALPHA,[dh]:e.SRC_ALPHA_SATURATE,[uh]:e.DST_COLOR,[ch]:e.DST_ALPHA,[lh]:e.ONE_MINUS_SRC_COLOR,[ma]:e.ONE_MINUS_SRC_ALPHA,[fh]:e.ONE_MINUS_DST_COLOR,[hh]:e.ONE_MINUS_DST_ALPHA,[ph]:e.CONSTANT_COLOR,[mh]:e.ONE_MINUS_CONSTANT_COLOR,[gh]:e.CONSTANT_ALPHA,[xh]:e.ONE_MINUS_CONSTANT_ALPHA};function _e(D,ee,Z,he,xe,be,qe,De,Re,Ke){if(D===Yi){if(p===!0)mt(e.BLEND),p=!1;return}if(p===!1)ue(e.BLEND),p=!0;if(D!==eh){if(D!==m||Ke!==V){if(b!==Ur||A!==Ur)e.blendEquation(e.FUNC_ADD),b=Ur,A=Ur;if(Ke)switch(D){case Nr:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case Sr:e.blendFunc(e.ONE,e.ONE);break;case Fl:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case Bl:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:Be("WebGLState: Invalid blending: ",D);break}else switch(D){case Nr:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case Sr:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case Fl:Be("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Bl:Be("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Be("WebGLState: Invalid blending: ",D);break}T=null,M=null,R=null,g=null,S.set(0,0,0),P=0,m=D,V=Ke}return}if(xe=xe||ee,be=be||Z,qe=qe||he,ee!==b||xe!==A)e.blendEquationSeparate(re[ee],re[xe]),b=ee,A=xe;if(Z!==T||he!==M||be!==R||qe!==g)e.blendFuncSeparate(fe[Z],fe[he],fe[be],fe[qe]),T=Z,M=he,R=be,g=qe;if(De.equals(S)===!1||Re!==P)e.blendColor(De.r,De.g,De.b,Re),S.copy(De),P=Re;m=D,V=!1}function Ie(D,ee){D.side===Ri?mt(e.CULL_FACE):ue(e.CULL_FACE);let Z=D.side===Vt;if(ee)Z=!Z;Le(Z),D.blending===Nr&&D.transparent===!1?_e(Yi):_e(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),o.setFunc(D.depthFunc),o.setTest(D.depthTest),o.setMask(D.depthWrite),s.setMask(D.colorWrite);let he=D.stencilWrite;if(a.setTest(he),he)a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass);ft(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?ue(e.SAMPLE_ALPHA_TO_COVERAGE):mt(e.SAMPLE_ALPHA_TO_COVERAGE)}function Le(D){if(I!==D){if(D)e.frontFace(e.CW);else e.frontFace(e.CCW);I=D}}function Je(D){if(D!==Qc){if(ue(e.CULL_FACE),D!==U)if(D===Ul)e.cullFace(e.BACK);else if(D===$c)e.cullFace(e.FRONT);else e.cullFace(e.FRONT_AND_BACK)}else mt(e.CULL_FACE);U=D}function We(D){if(D!==j){if(G)e.lineWidth(D);j=D}}function ft(D,ee,Z){if(D){if(ue(e.POLYGON_OFFSET_FILL),C!==ee||Y!==Z){if(C=ee,Y=Z,o.getReversed())ee=-ee,Z=-Z;e.polygonOffset(ee,Z)}}else mt(e.POLYGON_OFFSET_FILL)}function pt(D){if(D)ue(e.SCISSOR_TEST);else mt(e.SCISSOR_TEST)}function st(D){if(D===void 0)D=e.TEXTURE0+Q-1;if(te!==D)e.activeTexture(D),te=D}function N(D,ee,Z){if(Z===void 0)if(te===null)Z=e.TEXTURE0+Q-1;else Z=te;let he=ae[Z];if(he===void 0)he={type:void 0,texture:void 0},ae[Z]=he;if(he.type!==D||he.texture!==ee){if(te!==Z)e.activeTexture(Z),te=Z;e.bindTexture(D,ee||Ze[D]),he.type=D,he.texture=ee}}function kt(){let D=ae[te];if(D!==void 0&&D.type!==void 0)e.bindTexture(D.type,null),D.type=void 0,D.texture=void 0}function at(){try{e.compressedTexImage2D(...arguments)}catch(D){Be("WebGLState:",D)}}function St(){try{e.compressedTexImage3D(...arguments)}catch(D){Be("WebGLState:",D)}}function Se(){try{e.texSubImage2D(...arguments)}catch(D){Be("WebGLState:",D)}}function bt(){try{e.texSubImage3D(...arguments)}catch(D){Be("WebGLState:",D)}}function $e(){try{e.compressedTexSubImage2D(...arguments)}catch(D){Be("WebGLState:",D)}}function je(){try{e.compressedTexSubImage3D(...arguments)}catch(D){Be("WebGLState:",D)}}function Wt(){try{e.texStorage2D(...arguments)}catch(D){Be("WebGLState:",D)}}function E(){try{e.texStorage3D(...arguments)}catch(D){Be("WebGLState:",D)}}function _(){try{e.texImage2D(...arguments)}catch(D){Be("WebGLState:",D)}}function z(){try{e.texImage3D(...arguments)}catch(D){Be("WebGLState:",D)}}function oe(D){if(f[D]!==void 0)return f[D];else return e.getParameter(D)}function ne(D,ee){if(f[D]!==ee)e.pixelStorei(D,ee),f[D]=ee}function pe(D){if(le.equals(D)===!1)e.scissor(D.x,D.y,D.z,D.w),le.copy(D)}function Me(D){if(Fe.equals(D)===!1)e.viewport(D.x,D.y,D.z,D.w),Fe.copy(D)}function W(D,ee){let Z=c.get(ee);if(Z===void 0)Z=new WeakMap,c.set(ee,Z);let he=Z.get(D);if(he===void 0)he=e.getUniformBlockIndex(ee,D.name),e.uniformBlockBinding(ee,he,he),Z.set(D,he)}function J(D,ee,Z){let xe=c.get(ee).get(D);if(l[xe]!==Z)e.bindBufferBase(e.UNIFORM_BUFFER,xe,Z),l[xe]=Z}function ve(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),u={},f={},te=null,ae={},h={},l={},d=new WeakMap,x=[],y=null,p=!1,m=null,b=null,T=null,M=null,A=null,R=null,g=null,S=new de(0,0,0),P=0,V=!1,I=null,U=null,j=null,C=null,Y=null,le.set(0,0,e.canvas.width,e.canvas.height),Fe.set(0,0,e.canvas.width,e.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:ue,disable:mt,bindFramebuffer:lt,drawBuffers:Pe,useProgram:ot,setBlending:_e,setMaterial:Ie,setFlipSided:Le,setCullFace:Je,setLineWidth:We,setPolygonOffset:ft,setScissorTest:pt,activeTexture:st,bindTexture:N,unbindTexture:kt,compressedTexImage2D:at,compressedTexImage3D:St,texImage2D:_,texImage3D:z,pixelStorei:ne,getParameter:oe,updateUBOMapping:W,uniformBlockBinding:J,texStorage2D:Wt,texStorage3D:E,texSubImage2D:Se,texSubImage3D:bt,compressedTexSubImage2D:$e,compressedTexSubImage3D:je,scissor:pe,viewport:Me,reset:ve}}function vm(e,t,i,r,n,s,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new H,u=new WeakMap,f=new Set,h,d=new WeakMap,x=new Set,y=new FinalizationRegistry((E)=>x.delete(E)),p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(E){}function m(E,_){return p?new OffscreenCanvas(E,_):ln("canvas")}function b(E,_,z){let oe=1,ne=Wt(E);if(ne.width>z||ne.height>z)oe=z/Math.max(ne.width,ne.height);if(oe<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){let pe=Math.floor(oe*ne.width),Me=Math.floor(oe*ne.height);if(h===void 0)h=m(pe,Me);let W=_?m(pe,Me):h;return W.width=pe,W.height=Me,W.getContext("2d").drawImage(E,0,0,pe,Me),ye("WebGLRenderer: Texture has been resized from ("+ne.width+"x"+ne.height+") to ("+pe+"x"+Me+")."),W}else{if("data"in E)ye("WebGLRenderer: Image in DataTexture is too big ("+ne.width+"x"+ne.height+").");return E}return E}function T(E){return E.generateMipmaps}function M(E){e.generateMipmap(E)}function A(E){if(E.isWebGLCubeRenderTarget)return e.TEXTURE_CUBE_MAP;if(E.isWebGL3DRenderTarget)return e.TEXTURE_3D;if(E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture)return e.TEXTURE_2D_ARRAY;return e.TEXTURE_2D}function R(E,_,z,oe,ne,pe=!1){if(E!==null){if(e[E]!==void 0)return e[E];ye("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let Me;if(oe){if(Me=t.get("EXT_texture_norm16"),!Me)ye("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension")}let W=_;if(_===e.RED){if(z===e.FLOAT)W=e.R32F;if(z===e.HALF_FLOAT)W=e.R16F;if(z===e.UNSIGNED_BYTE)W=e.R8;if(z===e.UNSIGNED_SHORT&&Me)W=Me.R16_EXT;if(z===e.SHORT&&Me)W=Me.R16_SNORM_EXT}if(_===e.RED_INTEGER){if(z===e.UNSIGNED_BYTE)W=e.R8UI;if(z===e.UNSIGNED_SHORT)W=e.R16UI;if(z===e.UNSIGNED_INT)W=e.R32UI;if(z===e.BYTE)W=e.R8I;if(z===e.SHORT)W=e.R16I;if(z===e.INT)W=e.R32I}if(_===e.RG){if(z===e.FLOAT)W=e.RG32F;if(z===e.HALF_FLOAT)W=e.RG16F;if(z===e.UNSIGNED_BYTE)W=e.RG8;if(z===e.UNSIGNED_SHORT&&Me)W=Me.RG16_EXT;if(z===e.SHORT&&Me)W=Me.RG16_SNORM_EXT}if(_===e.RG_INTEGER){if(z===e.UNSIGNED_BYTE)W=e.RG8UI;if(z===e.UNSIGNED_SHORT)W=e.RG16UI;if(z===e.UNSIGNED_INT)W=e.RG32UI;if(z===e.BYTE)W=e.RG8I;if(z===e.SHORT)W=e.RG16I;if(z===e.INT)W=e.RG32I}if(_===e.RGB_INTEGER){if(z===e.UNSIGNED_BYTE)W=e.RGB8UI;if(z===e.UNSIGNED_SHORT)W=e.RGB16UI;if(z===e.UNSIGNED_INT)W=e.RGB32UI;if(z===e.BYTE)W=e.RGB8I;if(z===e.SHORT)W=e.RGB16I;if(z===e.INT)W=e.RGB32I}if(_===e.RGBA_INTEGER){if(z===e.UNSIGNED_BYTE)W=e.RGBA8UI;if(z===e.UNSIGNED_SHORT)W=e.RGBA16UI;if(z===e.UNSIGNED_INT)W=e.RGBA32UI;if(z===e.BYTE)W=e.RGBA8I;if(z===e.SHORT)W=e.RGBA16I;if(z===e.INT)W=e.RGBA32I}if(_===e.RGB){if(z===e.UNSIGNED_SHORT&&Me)W=Me.RGB16_EXT;if(z===e.SHORT&&Me)W=Me.RGB16_SNORM_EXT;if(z===e.UNSIGNED_INT_5_9_9_9_REV)W=e.RGB9_E5;if(z===e.UNSIGNED_INT_10F_11F_11F_REV)W=e.R11F_G11F_B10F}if(_===e.RGBA){let J=pe?an:rt.getTransfer(ne);if(z===e.FLOAT)W=e.RGBA32F;if(z===e.HALF_FLOAT)W=e.RGBA16F;if(z===e.UNSIGNED_BYTE)W=J===vt?e.SRGB8_ALPHA8:e.RGBA8;if(z===e.UNSIGNED_SHORT&&Me)W=Me.RGBA16_EXT;if(z===e.SHORT&&Me)W=Me.RGBA16_SNORM_EXT;if(z===e.UNSIGNED_SHORT_4_4_4_4)W=e.RGBA4;if(z===e.UNSIGNED_SHORT_5_5_5_1)W=e.RGB5_A1}if(W===e.R16F||W===e.R32F||W===e.RG16F||W===e.RG32F||W===e.RGBA16F||W===e.RGBA32F)t.get("EXT_color_buffer_float");return W}function g(E,_){let z;if(E){if(_===null||_===ni||_===ar)z=e.DEPTH24_STENCIL8;else if(_===jt)z=e.DEPTH32F_STENCIL8;else if(_===Tr)z=e.DEPTH24_STENCIL8,ye("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")}else if(_===null||_===ni||_===ar)z=e.DEPTH_COMPONENT24;else if(_===jt)z=e.DEPTH_COMPONENT32F;else if(_===Tr)z=e.DEPTH_COMPONENT16;return z}function S(E,_){if(T(E)===!0||E.isFramebufferTexture&&E.minFilter!==Ot&&E.minFilter!==Ht)return Math.log2(Math.max(_.width,_.height))+1;else if(E.mipmaps.length>0)return E.mipmaps.length;else if(E.isCompressedTexture&&Array.isArray(E.image))return _.mipmaps.length;else return 1}function P(E){let _=new WeakRef(E);r.get(E).__ref=_,x.add(_),y.register(E,_,_)}function V(E){let _=r.get(E).__ref;if(_===void 0)return;x.delete(_),y.unregister(_)}function I(E){j(E.target)}function U(E){C(E.target)}function j(E){if(E.removeEventListener("dispose",I),V(E),Q(E),E.isVideoTexture)u.delete(E);if(E.isHTMLTexture)f.delete(E)}function C(E){E.removeEventListener("dispose",U),V(E),ge(E)}function Y(){for(let E of x){let _=E.deref();if(_===void 0)continue;if(_.isRenderTarget===!0)C(_);else j(_)}x.clear(),f.clear()}function Q(E){let _=r.get(E);if(_.__webglInit===void 0)return;let z=E.source,oe=d.get(z);if(oe){let ne=oe[_.__cacheKey];if(ne.usedTimes--,ne.usedTimes===0)G(E);if(Object.keys(oe).length===0)d.delete(z)}r.remove(E)}function G(E){let _=r.get(E);e.deleteTexture(_.__webglTexture);let z=E.source,oe=d.get(z);delete oe[_.__cacheKey],o.memory.textures--}function ge(E){let _=r.get(E);if(_.__depthDisposeCallback)_.__depthDisposeCallback();let z=E.depthTexture;if(z&&z.renderTarget===E)j(z);if(E.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++){if(Array.isArray(_.__webglFramebuffer[ne]))for(let pe=0;pe<_.__webglFramebuffer[ne].length;pe++)e.deleteFramebuffer(_.__webglFramebuffer[ne][pe]);else e.deleteFramebuffer(_.__webglFramebuffer[ne]);if(_.__webglDepthbuffer)e.deleteRenderbuffer(_.__webglDepthbuffer[ne])}else{if(Array.isArray(_.__webglFramebuffer))for(let ne=0;ne<_.__webglFramebuffer.length;ne++)e.deleteFramebuffer(_.__webglFramebuffer[ne]);else e.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer)e.deleteRenderbuffer(_.__webglDepthbuffer);if(_.__webglMultisampledFramebuffer)e.deleteFramebuffer(_.__webglMultisampledFramebuffer);if(_.__webglColorRenderbuffer){for(let ne=0;ne<_.__webglColorRenderbuffer.length;ne++)if(_.__webglColorRenderbuffer[ne])e.deleteRenderbuffer(_.__webglColorRenderbuffer[ne])}if(_.__webglDepthRenderbuffer)e.deleteRenderbuffer(_.__webglDepthRenderbuffer)}let oe=E.textures;for(let ne=0,pe=oe.length;ne<pe;ne++){let Me=r.get(oe[ne]);if(Me.__webglTexture)e.deleteTexture(Me.__webglTexture),o.memory.textures--;r.remove(oe[ne])}r.remove(E)}let X=0;function te(){X=0}function ae(){return X}function Ue(E){X=E}function ie(){let E=X;if(E>=n.maxTextures)ye("WebGLTextures: Trying to use "+(E+1)+" texture units while this GPU supports only "+n.maxTextures);return X+=1,E}function le(E){let _=[];return _.push(E.wrapS),_.push(E.wrapT),_.push(E.wrapR||0),_.push(E.magFilter),_.push(E.minFilter),_.push(E.anisotropy),_.push(E.internalFormat),_.push(E.format),_.push(E.type),_.push(E.generateMipmaps),_.push(E.mipmapsAutoUpdate),_.push(E.premultiplyAlpha),_.push(E.flipY),_.push(E.unpackAlignment),_.push(E.colorSpace),_.join()}function Fe(E,_){let z=r.get(E);if(E.isVideoTexture)$e(E);if(E.isRenderTargetTexture===!1&&E.isExternalTexture!==!0&&E.version>0&&z.__version!==E.version){let oe=E.image;if(oe===null)ye("WebGLRenderer: Texture marked for update but no image data found.");else if(oe.complete===!1)ye("WebGLRenderer: Texture marked for update but image is incomplete");else{Ie(z,E,_);return}}else if(E.isExternalTexture)z.__webglTexture=E.sourceTexture?E.sourceTexture:null;i.bindTexture(e.TEXTURE_2D,z.__webglTexture,e.TEXTURE0+_)}function He(E,_){let z=r.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&z.__version!==E.version){Ie(z,E,_);return}else if(E.isExternalTexture)z.__webglTexture=E.sourceTexture?E.sourceTexture:null;i.bindTexture(e.TEXTURE_2D_ARRAY,z.__webglTexture,e.TEXTURE0+_)}function Ze(E,_){let z=r.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&z.__version!==E.version){Ie(z,E,_);return}i.bindTexture(e.TEXTURE_3D,z.__webglTexture,e.TEXTURE0+_)}function ue(E,_){let z=r.get(E);if(E.version>0&&z.__version!==E.version){Le(z,E,_);return}i.bindTexture(e.TEXTURE_CUBE_MAP,z.__webglTexture,e.TEXTURE0+_)}let mt={[kn]:e.REPEAT,[vi]:e.CLAMP_TO_EDGE,[Hn]:e.MIRRORED_REPEAT},lt={[Ot]:e.NEAREST,[Ol]:e.NEAREST_MIPMAP_NEAREST,[Wn]:e.NEAREST_MIPMAP_LINEAR,[Ht]:e.LINEAR,[Ys]:e.LINEAR_MIPMAP_NEAREST,[Ci]:e.LINEAR_MIPMAP_LINEAR},Pe={[bh]:e.NEVER,[Ia]:e.ALWAYS,[Th]:e.LESS,[Ca]:e.LEQUAL,[Eh]:e.EQUAL,[Pa]:e.GEQUAL,[wh]:e.GREATER,[Ah]:e.NOTEQUAL};function ot(E,_){if(_.type===jt&&t.has("OES_texture_float_linear")===!1&&(_.magFilter===Ht||_.magFilter===Ys||_.magFilter===Wn||_.magFilter===Ci||_.minFilter===Ht||_.minFilter===Ys||_.minFilter===Wn||_.minFilter===Ci))ye("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.");if(e.texParameteri(E,e.TEXTURE_WRAP_S,mt[_.wrapS]),e.texParameteri(E,e.TEXTURE_WRAP_T,mt[_.wrapT]),E===e.TEXTURE_3D||E===e.TEXTURE_2D_ARRAY)e.texParameteri(E,e.TEXTURE_WRAP_R,mt[_.wrapR]);if(e.texParameteri(E,e.TEXTURE_MAG_FILTER,lt[_.magFilter]),e.texParameteri(E,e.TEXTURE_MIN_FILTER,lt[_.minFilter]),_.compareFunction)e.texParameteri(E,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(E,e.TEXTURE_COMPARE_FUNC,Pe[_.compareFunction]);if(t.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Ot)return;if(_.minFilter!==Wn&&_.minFilter!==Ci)return;if(_.type===jt&&t.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||r.get(_).__currentAnisotropy){let z=t.get("EXT_texture_filter_anisotropic");e.texParameterf(E,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,n.getMaxAnisotropy())),r.get(_).__currentAnisotropy=_.anisotropy}}}function re(E,_){let z=!1;if(E.__webglInit===void 0)E.__webglInit=!0,_.addEventListener("dispose",I),P(_);let oe=_.source,ne=d.get(oe);if(ne===void 0)ne={},d.set(oe,ne);let pe=le(_);if(pe!==E.__cacheKey){if(ne[pe]===void 0)ne[pe]={texture:e.createTexture(),usedTimes:0},o.memory.textures++,z=!0;ne[pe].usedTimes++;let Me=ne[E.__cacheKey];if(Me!==void 0){if(ne[E.__cacheKey].usedTimes--,Me.usedTimes===0)G(_)}E.__cacheKey=pe,E.__webglTexture=ne[pe].texture}return z}function fe(E,_,z){return Math.floor(Math.floor(E/z)/_)}function _e(E,_,z,oe){let pe=E.updateRanges;if(pe.length===0)i.texSubImage2D(e.TEXTURE_2D,0,0,0,_.width,_.height,z,oe,_.data);else{pe.sort((D,ee)=>D.start-ee.start);let Me=0;for(let D=1;D<pe.length;D++){let ee=pe[Me],Z=pe[D],he=ee.start+ee.count,xe=fe(Z.start,_.width,4),be=fe(ee.start,_.width,4);if(Z.start<=he+1&&xe===be&&fe(Z.start+Z.count-1,_.width,4)===xe)ee.count=Math.max(ee.count,Z.start+Z.count-ee.start);else++Me,pe[Me]=Z}pe.length=Me+1;let W=i.getParameter(e.UNPACK_ROW_LENGTH),J=i.getParameter(e.UNPACK_SKIP_PIXELS),ve=i.getParameter(e.UNPACK_SKIP_ROWS);i.pixelStorei(e.UNPACK_ROW_LENGTH,_.width);for(let D=0,ee=pe.length;D<ee;D++){let Z=pe[D],he=Math.floor(Z.start/4),xe=Math.ceil(Z.count/4),be=he%_.width,qe=Math.floor(he/_.width),De=xe,Re=1;i.pixelStorei(e.UNPACK_SKIP_PIXELS,be),i.pixelStorei(e.UNPACK_SKIP_ROWS,qe),i.texSubImage2D(e.TEXTURE_2D,0,be,qe,De,1,z,oe,_.data)}E.clearUpdateRanges(),i.pixelStorei(e.UNPACK_ROW_LENGTH,W),i.pixelStorei(e.UNPACK_SKIP_PIXELS,J),i.pixelStorei(e.UNPACK_SKIP_ROWS,ve)}}function Ie(E,_,z){let oe=e.TEXTURE_2D;if(_.isDataArrayTexture||_.isCompressedArrayTexture)oe=e.TEXTURE_2D_ARRAY;if(_.isData3DTexture)oe=e.TEXTURE_3D;let ne=re(E,_),pe=_.source;i.bindTexture(oe,E.__webglTexture,e.TEXTURE0+z);let Me=r.get(pe);if(pe.version!==Me.__version||ne===!0){if(i.activeTexture(e.TEXTURE0+z),(typeof ImageBitmap<"u"&&_.image instanceof ImageBitmap)===!1){let Re=rt.getPrimaries(rt.workingColorSpace),Ke=_.colorSpace===Ji?null:rt.getPrimaries(_.colorSpace),ct=_.colorSpace===Ji||Re===Ke?e.NONE:e.BROWSER_DEFAULT_WEBGL;i.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,ct)}i.pixelStorei(e.UNPACK_ALIGNMENT,_.unpackAlignment);let J=b(_.image,!1,n.maxTextureSize);J=je(_,J);let ve=s.convert(_.format,_.colorSpace),D=s.convert(_.type),ee=R(_.internalFormat,ve,D,_.normalized,_.colorSpace,_.isVideoTexture);ot(oe,_);let Z,he=_.mipmaps,xe=_.isVideoTexture!==!0,be=Me.__version===void 0||ne===!0,qe=pe.dataReady,De=S(_,J);if(_.isDepthTexture){if(ee=g(_.format===Bi,_.type),be)if(xe)i.texStorage2D(e.TEXTURE_2D,1,ee,J.width,J.height);else i.texImage2D(e.TEXTURE_2D,0,ee,J.width,J.height,0,ve,D,null)}else if(_.isDataTexture)if(he.length>0){if(xe&&be)i.texStorage2D(e.TEXTURE_2D,De,ee,he[0].width,he[0].height);for(let Re=0,Ke=he.length;Re<Ke;Re++)if(Z=he[Re],xe){if(qe)i.texSubImage2D(e.TEXTURE_2D,Re,0,0,Z.width,Z.height,ve,D,Z.data)}else i.texImage2D(e.TEXTURE_2D,Re,ee,Z.width,Z.height,0,ve,D,Z.data);_.generateMipmaps=!1}else if(xe){if(be)i.texStorage2D(e.TEXTURE_2D,De,ee,J.width,J.height);if(qe)_e(_,J,ve,D)}else i.texImage2D(e.TEXTURE_2D,0,ee,J.width,J.height,0,ve,D,J.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){if(xe&&be)i.texStorage3D(e.TEXTURE_2D_ARRAY,De,ee,he[0].width,he[0].height,J.depth);for(let Re=0,Ke=he.length;Re<Ke;Re++)if(Z=he[Re],_.format!==ui)if(ve!==null)if(xe){if(qe)if(_.layerUpdates.size>0){let ct=Uc(Z.width,Z.height,_.format,_.type);for(let Te of _.layerUpdates){let Tt=Z.data.subarray(Te*ct/Z.data.BYTES_PER_ELEMENT,(Te+1)*ct/Z.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,Re,0,0,Te,Z.width,Z.height,1,ve,Tt)}}else i.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,Re,0,0,0,Z.width,Z.height,J.depth,ve,Z.data)}else i.compressedTexImage3D(e.TEXTURE_2D_ARRAY,Re,ee,Z.width,Z.height,J.depth,0,Z.data,0,0);else ye("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(xe){if(qe)i.texSubImage3D(e.TEXTURE_2D_ARRAY,Re,0,0,0,Z.width,Z.height,J.depth,ve,D,Z.data)}else i.texImage3D(e.TEXTURE_2D_ARRAY,Re,ee,Z.width,Z.height,J.depth,0,ve,D,Z.data);if(_.layerUpdates.size>0)_.clearLayerUpdates()}else{if(xe&&be)i.texStorage2D(e.TEXTURE_2D,De,ee,he[0].width,he[0].height);for(let Re=0,Ke=he.length;Re<Ke;Re++)if(Z=he[Re],_.format!==ui)if(ve!==null)if(xe){if(qe)i.compressedTexSubImage2D(e.TEXTURE_2D,Re,0,0,Z.width,Z.height,ve,Z.data)}else i.compressedTexImage2D(e.TEXTURE_2D,Re,ee,Z.width,Z.height,0,Z.data);else ye("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(xe){if(qe)i.texSubImage2D(e.TEXTURE_2D,Re,0,0,Z.width,Z.height,ve,D,Z.data)}else i.texImage2D(e.TEXTURE_2D,Re,ee,Z.width,Z.height,0,ve,D,Z.data)}else if(_.isDataArrayTexture)if(xe){if(be)i.texStorage3D(e.TEXTURE_2D_ARRAY,De,ee,J.width,J.height,J.depth);if(qe)if(_.layerUpdates.size>0){let Re=Uc(J.width,J.height,_.format,_.type);for(let Ke of _.layerUpdates){let ct=J.data.subarray(Ke*Re/J.data.BYTES_PER_ELEMENT,(Ke+1)*Re/J.data.BYTES_PER_ELEMENT);i.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,Ke,J.width,J.height,1,ve,D,ct)}_.clearLayerUpdates()}else i.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,ve,D,J.data)}else i.texImage3D(e.TEXTURE_2D_ARRAY,0,ee,J.width,J.height,J.depth,0,ve,D,J.data);else if(_.isData3DTexture)if(xe){if(be)i.texStorage3D(e.TEXTURE_3D,De,ee,J.width,J.height,J.depth);if(qe)i.texSubImage3D(e.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,ve,D,J.data)}else i.texImage3D(e.TEXTURE_3D,0,ee,J.width,J.height,J.depth,0,ve,D,J.data);else if(_.isFramebufferTexture){if(be)if(xe)i.texStorage2D(e.TEXTURE_2D,De,ee,J.width,J.height);else{let Re=J.width,Ke=J.height;for(let ct=0;ct<De;ct++)i.texImage2D(e.TEXTURE_2D,ct,ee,Re,Ke,0,ve,D,null),Re>>=1,Ke>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in e){let Re=e.canvas;if(!Re.hasAttribute("layoutsubtree"))Re.setAttribute("layoutsubtree","true");if(J.parentNode!==Re){Re.appendChild(J),f.add(_),Re.onpaint=(Ke)=>{let ct=Ke.changedElements;for(let Te of f)if(ct.includes(Te.image))Te.needsUpdate=!0},Re.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,J);else{let{RGBA:ct,RGBA:Te,UNSIGNED_BYTE:Tt}=e;e.texElementImage2D(e.TEXTURE_2D,0,ct,Te,Tt,J)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(he.length>0){if(xe&&be){let Re=Wt(he[0]);i.texStorage2D(e.TEXTURE_2D,De,ee,Re.width,Re.height)}for(let Re=0,Ke=he.length;Re<Ke;Re++)if(Z=he[Re],xe){if(qe)i.texSubImage2D(e.TEXTURE_2D,Re,0,0,ve,D,Z)}else i.texImage2D(e.TEXTURE_2D,Re,ee,ve,D,Z);_.generateMipmaps=!1}else if(xe){if(be){let Re=Wt(J);i.texStorage2D(e.TEXTURE_2D,De,ee,Re.width,Re.height)}if(qe)i.texSubImage2D(e.TEXTURE_2D,0,0,0,ve,D,J)}else i.texImage2D(e.TEXTURE_2D,0,ee,ve,D,J);if(T(_)&&_.mipmapsAutoUpdate===!0)M(oe);if(Me.__version=pe.version,_.onUpdate)_.onUpdate(_)}E.__version=_.version}function Le(E,_,z){if(_.image.length!==6)return;let oe=re(E,_),ne=_.source;i.bindTexture(e.TEXTURE_CUBE_MAP,E.__webglTexture,e.TEXTURE0+z);let pe=r.get(ne);if(ne.version!==pe.__version||oe===!0){i.activeTexture(e.TEXTURE0+z);let Me=rt.getPrimaries(rt.workingColorSpace),W=_.colorSpace===Ji?null:rt.getPrimaries(_.colorSpace),J=_.colorSpace===Ji||Me===W?e.NONE:e.BROWSER_DEFAULT_WEBGL;i.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(e.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,J);let ve=_.isCompressedTexture||_.image[0].isCompressedTexture,D=_.image[0]&&_.image[0].isDataTexture,ee=[];for(let Te=0;Te<6;Te++){if(!ve&&!D)ee[Te]=b(_.image[Te],!0,n.maxCubemapSize);else ee[Te]=D?_.image[Te].image:_.image[Te];ee[Te]=je(_,ee[Te])}let Z=ee[0],he=s.convert(_.format,_.colorSpace),xe=s.convert(_.type),be=R(_.internalFormat,he,xe,_.normalized,_.colorSpace),qe=_.isVideoTexture!==!0,De=pe.__version===void 0||oe===!0,Re=ne.dataReady,Ke=S(_,Z);ot(e.TEXTURE_CUBE_MAP,_);let ct;if(_.isDepthTexture){if(be=g(_.format===Bi,_.type),De)if(qe)i.texStorage2D(e.TEXTURE_CUBE_MAP,1,be,Z.width,Z.height);else for(let Te=0;Te<6;Te++)i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,be,Z.width,Z.height,0,he,xe,null)}else if(ve){if(qe&&De)i.texStorage2D(e.TEXTURE_CUBE_MAP,Ke,be,Z.width,Z.height);for(let Te=0;Te<6;Te++){ct=ee[Te].mipmaps;for(let Tt=0;Tt<ct.length;Tt++){let Ft=ct[Tt];if(_.format!==ui)if(he!==null)if(qe){if(Re)i.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Te,Tt,0,0,Ft.width,Ft.height,he,Ft.data)}else i.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Te,Tt,be,Ft.width,Ft.height,0,Ft.data);else ye("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()");else if(qe){if(Re)i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Te,Tt,0,0,Ft.width,Ft.height,he,xe,Ft.data)}else i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Te,Tt,be,Ft.width,Ft.height,0,he,xe,Ft.data)}}}else{if(ct=_.mipmaps,qe&&De){if(ct.length>0)Ke++;let Te=Wt(ee[0]);i.texStorage2D(e.TEXTURE_CUBE_MAP,Ke,be,Te.width,Te.height)}for(let Te=0;Te<6;Te++)if(D){if(qe){if(Re)i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,0,0,ee[Te].width,ee[Te].height,he,xe,ee[Te].data)}else i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,be,ee[Te].width,ee[Te].height,0,he,xe,ee[Te].data);for(let Tt=0;Tt<ct.length;Tt++){let sr=ct[Tt].image[Te].image;if(qe){if(Re)i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Te,Tt+1,0,0,sr.width,sr.height,he,xe,sr.data)}else i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Te,Tt+1,be,sr.width,sr.height,0,he,xe,sr.data)}}else{if(qe){if(Re)i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,0,0,he,xe,ee[Te])}else i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,be,he,xe,ee[Te]);for(let Tt=0;Tt<ct.length;Tt++){let Ft=ct[Tt];if(qe){if(Re)i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Te,Tt+1,0,0,he,xe,Ft.image[Te])}else i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Te,Tt+1,be,he,xe,Ft.image[Te])}}}if(T(_)&&_.mipmapsAutoUpdate===!0)M(e.TEXTURE_CUBE_MAP);if(pe.__version=ne.version,_.onUpdate)_.onUpdate(_)}E.__version=_.version}function Je(E,_,z,oe,ne,pe){let Me=s.convert(z.format,z.colorSpace),W=s.convert(z.type),J=R(z.internalFormat,Me,W,z.normalized,z.colorSpace),ve=r.get(_),D=r.get(z);if(D.__renderTarget=_,!ve.__hasExternalTextures){let ee=Math.max(1,_.width>>pe),Z=Math.max(1,_.height>>pe);if(ne===e.TEXTURE_3D||ne===e.TEXTURE_2D_ARRAY)i.texImage3D(ne,pe,J,ee,Z,_.depth,0,Me,W,null);else i.texImage2D(ne,pe,J,ee,Z,0,Me,W,null)}if(i.bindFramebuffer(e.FRAMEBUFFER,E),bt(_))a.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,oe,ne,D.__webglTexture,0,Se(_));else if(ne===e.TEXTURE_2D||ne>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)e.framebufferTexture2D(e.FRAMEBUFFER,oe,ne,D.__webglTexture,pe);i.bindFramebuffer(e.FRAMEBUFFER,null)}function We(E,_,z){if(e.bindRenderbuffer(e.RENDERBUFFER,E),_.depthBuffer){let oe=_.depthTexture,ne=oe&&oe.isDepthTexture?oe.type:null,pe=g(_.stencilBuffer,ne),Me=_.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(bt(_))a.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Se(_),pe,_.width,_.height);else if(z)e.renderbufferStorageMultisample(e.RENDERBUFFER,Se(_),pe,_.width,_.height);else e.renderbufferStorage(e.RENDERBUFFER,pe,_.width,_.height);e.framebufferRenderbuffer(e.FRAMEBUFFER,Me,e.RENDERBUFFER,E)}else{let oe=_.textures;for(let ne=0;ne<oe.length;ne++){let pe=oe[ne],Me=s.convert(pe.format,pe.colorSpace),W=s.convert(pe.type),J=R(pe.internalFormat,Me,W,pe.normalized,pe.colorSpace);if(bt(_))a.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Se(_),J,_.width,_.height);else if(z)e.renderbufferStorageMultisample(e.RENDERBUFFER,Se(_),J,_.width,_.height);else e.renderbufferStorage(e.RENDERBUFFER,J,_.width,_.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function ft(E,_,z){let oe=_.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(e.FRAMEBUFFER,E),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let ne=r.get(_.depthTexture);ne.__renderTarget=_;let pe=oe?_.depthTexture.image[0]:_.depthTexture.image;if(!ne.__webglTexture||pe.width!==_.width||pe.height!==_.height)pe.width=_.width,pe.height=_.height,_.depthTexture.needsUpdate=!0;if(oe)ue(_.depthTexture,0);else Fe(_.depthTexture,0);let Me=ne.__webglTexture,W=Se(_),J=oe?e.TEXTURE_CUBE_MAP_POSITIVE_X+z:e.TEXTURE_2D,ve=_.depthTexture.format===Bi?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(_.depthTexture.format===Di)if(bt(_))a.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,ve,J,Me,0,W);else e.framebufferTexture2D(e.FRAMEBUFFER,ve,J,Me,0);else if(_.depthTexture.format===Bi)if(bt(_))a.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,ve,J,Me,0,W);else e.framebufferTexture2D(e.FRAMEBUFFER,ve,J,Me,0);else throw Error("THREE.WebGLTextures: Unknown depthTexture format.")}function pt(E){let _=r.get(E),z=E.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==E.depthTexture){let oe=E.depthTexture;if(_.__depthDisposeCallback)_.__depthDisposeCallback();if(oe){let ne=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,oe.removeEventListener("dispose",ne)};oe.addEventListener("dispose",ne),_.__depthDisposeCallback=ne}_.__boundDepthTexture=oe}if(E.depthTexture&&!_.__autoAllocateDepthBuffer)if(z)for(let oe=0;oe<6;oe++)ft(_.__webglFramebuffer[oe],E,oe);else if(E.texture.mipmaps.length>0)ft(_.__webglFramebuffer[0],E,0);else ft(_.__webglFramebuffer,E,0);else if(z){_.__webglDepthbuffer=[];for(let oe=0;oe<6;oe++)if(i.bindFramebuffer(e.FRAMEBUFFER,_.__webglFramebuffer[oe]),_.__webglDepthbuffer[oe]===void 0)_.__webglDepthbuffer[oe]=e.createRenderbuffer(),We(_.__webglDepthbuffer[oe],E,!1);else{let ne=E.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,pe=_.__webglDepthbuffer[oe];e.bindRenderbuffer(e.RENDERBUFFER,pe),e.framebufferRenderbuffer(e.FRAMEBUFFER,ne,e.RENDERBUFFER,pe)}}else{if(E.texture.mipmaps.length>0)i.bindFramebuffer(e.FRAMEBUFFER,_.__webglFramebuffer[0]);else i.bindFramebuffer(e.FRAMEBUFFER,_.__webglFramebuffer);if(_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=e.createRenderbuffer(),We(_.__webglDepthbuffer,E,!1);else{let ne=E.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,pe=_.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,pe),e.framebufferRenderbuffer(e.FRAMEBUFFER,ne,e.RENDERBUFFER,pe)}}i.bindFramebuffer(e.FRAMEBUFFER,null)}function st(E,_,z){let oe=r.get(E);if(_!==void 0)Je(oe.__webglFramebuffer,E,E.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0);if(z!==void 0)pt(E)}function N(E){let _=E.texture,z=r.get(E),oe=r.get(_);E.addEventListener("dispose",U),P(E);let ne=E.textures,pe=E.isWebGLCubeRenderTarget===!0,Me=ne.length>1;if(!Me){if(oe.__webglTexture===void 0)oe.__webglTexture=e.createTexture();oe.__version=_.version,o.memory.textures++}if(pe){z.__webglFramebuffer=[];for(let W=0;W<6;W++)if(_.mipmaps.length>0){z.__webglFramebuffer[W]=[];for(let J=0;J<_.mipmaps.length;J++)z.__webglFramebuffer[W][J]=e.createFramebuffer()}else z.__webglFramebuffer[W]=e.createFramebuffer()}else{if(_.mipmaps.length>0){z.__webglFramebuffer=[];for(let W=0;W<_.mipmaps.length;W++)z.__webglFramebuffer[W]=e.createFramebuffer()}else z.__webglFramebuffer=e.createFramebuffer();if(Me)for(let W=0,J=ne.length;W<J;W++){let ve=r.get(ne[W]);if(ve.__webglTexture===void 0)ve.__webglTexture=e.createTexture(),o.memory.textures++}if(E.samples>0&&bt(E)===!1){z.__webglMultisampledFramebuffer=e.createFramebuffer(),z.__webglColorRenderbuffer=[],i.bindFramebuffer(e.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let W=0;W<ne.length;W++){let J=ne[W];z.__webglColorRenderbuffer[W]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,z.__webglColorRenderbuffer[W]);let ve=s.convert(J.format,J.colorSpace),D=s.convert(J.type),ee=R(J.internalFormat,ve,D,J.normalized,J.colorSpace,E.isXRRenderTarget===!0),Z=Se(E);e.renderbufferStorageMultisample(e.RENDERBUFFER,Z,ee,E.width,E.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+W,e.RENDERBUFFER,z.__webglColorRenderbuffer[W])}if(e.bindRenderbuffer(e.RENDERBUFFER,null),E.depthBuffer)z.__webglDepthRenderbuffer=e.createRenderbuffer(),We(z.__webglDepthRenderbuffer,E,!0);i.bindFramebuffer(e.FRAMEBUFFER,null)}}if(pe){i.bindTexture(e.TEXTURE_CUBE_MAP,oe.__webglTexture),ot(e.TEXTURE_CUBE_MAP,_);for(let W=0;W<6;W++)if(_.mipmaps.length>0)for(let J=0;J<_.mipmaps.length;J++)Je(z.__webglFramebuffer[W][J],E,_,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+W,J);else Je(z.__webglFramebuffer[W],E,_,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+W,0);if(T(_))M(e.TEXTURE_CUBE_MAP);else if(_.mipmaps.length>0)e.texParameteri(e.TEXTURE_CUBE_MAP,e.TEXTURE_MAX_LEVEL,_.mipmaps.length-1);i.unbindTexture()}else if(Me){for(let W=0,J=ne.length;W<J;W++){let ve=ne[W],D=r.get(ve),ee=e.TEXTURE_2D;if(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)ee=E.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY;if(i.bindTexture(ee,D.__webglTexture),ot(ee,ve),Je(z.__webglFramebuffer,E,ve,e.COLOR_ATTACHMENT0+W,ee,0),T(ve))M(ee)}i.unbindTexture()}else{let W=e.TEXTURE_2D;if(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)W=E.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY;if(i.bindTexture(W,oe.__webglTexture),ot(W,_),_.mipmaps.length>0)for(let J=0;J<_.mipmaps.length;J++)Je(z.__webglFramebuffer[J],E,_,e.COLOR_ATTACHMENT0,W,J);else Je(z.__webglFramebuffer,E,_,e.COLOR_ATTACHMENT0,W,0);if(T(_))M(W);else if(_.mipmaps.length>0)e.texParameteri(W,e.TEXTURE_MAX_LEVEL,_.mipmaps.length-1);i.unbindTexture()}if(E.depthBuffer)pt(E)}function kt(E){let _=E.textures;for(let z=0,oe=_.length;z<oe;z++){let ne=_[z];if(T(ne)&&ne.mipmapsAutoUpdate===!0){let pe=A(E),Me=r.get(ne).__webglTexture;i.bindTexture(pe,Me),M(pe),i.unbindTexture()}}}let at=[];function St(E){if(E.samples>0){if(bt(E)===!1){let{textures:_,width:z,height:oe}=E,ne=e.COLOR_BUFFER_BIT,pe=E.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,Me=r.get(E),W=_.length>1;if(W)for(let ve=0;ve<_.length;ve++)i.bindFramebuffer(e.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+ve,e.RENDERBUFFER,null),i.bindFramebuffer(e.FRAMEBUFFER,Me.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+ve,e.TEXTURE_2D,null,0);if(i.bindFramebuffer(e.READ_FRAMEBUFFER,Me.__webglMultisampledFramebuffer),E.texture.mipmaps.length>0)i.bindFramebuffer(e.DRAW_FRAMEBUFFER,Me.__webglFramebuffer[0]);else i.bindFramebuffer(e.DRAW_FRAMEBUFFER,Me.__webglFramebuffer);for(let ve=0;ve<_.length;ve++){if(E.resolveDepthBuffer){if(E.depthBuffer)ne|=e.DEPTH_BUFFER_BIT;if(E.stencilBuffer&&E.resolveStencilBuffer)ne|=e.STENCIL_BUFFER_BIT}if(W){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,Me.__webglColorRenderbuffer[ve]);let D=r.get(_[ve]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,D,0)}if(e.blitFramebuffer(0,0,z,oe,0,0,z,oe,ne,e.NEAREST),l===!0){if(at.length=0,at.push(e.COLOR_ATTACHMENT0+ve),E.depthBuffer&&E.storeMultisampledDepthBuffer===!1)at.push(pe);e.invalidateFramebuffer(e.READ_FRAMEBUFFER,at)}}if(i.bindFramebuffer(e.READ_FRAMEBUFFER,null),i.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),W)for(let ve=0;ve<_.length;ve++){i.bindFramebuffer(e.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+ve,e.RENDERBUFFER,Me.__webglColorRenderbuffer[ve]);let D=r.get(_[ve]).__webglTexture;i.bindFramebuffer(e.FRAMEBUFFER,Me.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+ve,e.TEXTURE_2D,D,0)}i.bindFramebuffer(e.DRAW_FRAMEBUFFER,Me.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.storeMultisampledDepthBuffer===!1&&l){let _=E.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[_])}}}function Se(E){return Math.min(n.maxSamples,E.samples)}function bt(E){let _=r.get(E);return E.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function $e(E){let _=o.render.frame;if(u.get(E)!==_)u.set(E,_),E.update()}function je(E,_){let{colorSpace:z,format:oe,type:ne}=E;if(E.isCompressedTexture===!0||E.isVideoTexture===!0)return _;if(z!==on&&z!==Ji)if(rt.getTransfer(z)===vt){if(oe!==ui||ne!==$t)ye("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.")}else Be("WebGLTextures: Unsupported texture color space:",z);return _}function Wt(E){if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement)c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height;else if(typeof VideoFrame<"u"&&E instanceof VideoFrame)c.width=E.displayWidth,c.height=E.displayHeight;else c.width=E.width,c.height=E.height;return c}this.allocateTextureUnit=ie,this.resetTextureUnits=te,this.getTextureUnits=ae,this.setTextureUnits=Ue,this.setTexture2D=Fe,this.setTexture2DArray=He,this.setTexture3D=Ze,this.setTextureCube=ue,this.rebindTextures=st,this.setupRenderTarget=N,this.updateRenderTargetMipmap=kt,this.updateMultisampleRenderTarget=St,this.setupDepthRenderbuffer=pt,this.setupFrameBufferTexture=Je,this.useMultisampledRTT=bt,this.dispose=Y}function Vc(e,t){function i(r,n=Ji){let s,o=rt.getTransfer(n);if(r===$t)return e.UNSIGNED_BYTE;if(r===qn)return e.UNSIGNED_SHORT_4_4_4_4;if(r===Yn)return e.UNSIGNED_SHORT_5_5_5_1;if(r===va)return e.UNSIGNED_INT_5_9_9_9_REV;if(r===ya)return e.UNSIGNED_INT_10F_11F_11F_REV;if(r===xa)return e.BYTE;if(r===_a)return e.SHORT;if(r===Tr)return e.UNSIGNED_SHORT;if(r===Xn)return e.INT;if(r===ni)return e.UNSIGNED_INT;if(r===jt)return e.FLOAT;if(r===Ut)return e.HALF_FLOAT;if(r===Ma)return e.ALPHA;if(r===Sa)return e.RGB;if(r===ui)return e.RGBA;if(r===Di)return e.DEPTH_COMPONENT;if(r===Bi)return e.DEPTH_STENCIL;if(r===Zn)return e.RED;if(r===tn)return e.RED_INTEGER;if(r===Oi)return e.RG;if(r===Jn)return e.RG_INTEGER;if(r===Kn)return e.RGBA_INTEGER;if(r===Qn||r===$n||r===jn||r===es)if(o===vt)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(r===Qn)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===$n)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===jn)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===es)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(r===Qn)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===$n)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===jn)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===es)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Zs||r===Js||r===Ks||r===Qs)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(r===Zs)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Js)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Ks)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Qs)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===$s||r===js||r===eo||r===to||r===io||r===rn||r===ro)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(r===$s||r===js)return o===vt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(r===eo)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(r===to)return s.COMPRESSED_R11_EAC;if(r===io)return s.COMPRESSED_SIGNED_R11_EAC;if(r===rn)return s.COMPRESSED_RG11_EAC;if(r===ro)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===no||r===so||r===oo||r===ao||r===lo||r===co||r===ho||r===uo||r===fo||r===po||r===mo||r===go||r===xo||r===_o)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(r===no)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===so)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===oo)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===ao)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===lo)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===co)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===ho)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===uo)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===fo)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===po)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===mo)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===go)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===xo)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===_o)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===vo||r===yo||r===Mo)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(r===vo)return o===vt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===yo)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Mo)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===So||r===bo||r===nn||r===To)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(r===So)return s.COMPRESSED_RED_RGTC1_EXT;if(r===bo)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===nn)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===To)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;if(r===ar)return e.UNSIGNED_INT_24_8;return e[r]!==void 0?e[r]:null}return{convert:i}}var Q0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,$0=`
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

}`;class kc{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new ws(e.texture);if(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)this.depthNear=e.depthNear,this.depthFar=e.depthFar;this.texture=i}}getMesh(e){if(this.texture!==null){if(this.mesh===null){let t=e.cameras[0].viewport,i=new Dt({vertexShader:Q0,fragmentShader:$0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new et(new tr(20,20),i)}}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Hc extends si{constructor(e,t){super();let i=this,r=null,n=1,s=null,o="local-floor",a=1,l=null,c=null,u=null,f=null,h=null,d=null,x=typeof XRWebGLBinding<"u",y=new kc,p={},m=t.getContextAttributes(),b=null,T=null,M=[],A=[],R=new H,g=null,S=null,P=new Zt;P.viewport=new Mt;let V=new Zt;V.viewport=new Mt;let I=[P,V],U=new Al,j=null,C=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ie){let le=M[ie];if(le===void 0)le=new cs,M[ie]=le;return le.getTargetRaySpace()},this.getControllerGrip=function(ie){let le=M[ie];if(le===void 0)le=new cs,M[ie]=le;return le.getGripSpace()},this.getHand=function(ie){let le=M[ie];if(le===void 0)le=new cs,M[ie]=le;return le.getHandSpace()};function Y(ie){let le=A.indexOf(ie.inputSource);if(le===-1)return;let Fe=M[le];if(Fe!==void 0)Fe.update(ie.inputSource,ie.frame,l||s),Fe.dispatchEvent({type:ie.type,data:ie.inputSource})}function Q(){r.removeEventListener("select",Y),r.removeEventListener("selectstart",Y),r.removeEventListener("selectend",Y),r.removeEventListener("squeeze",Y),r.removeEventListener("squeezestart",Y),r.removeEventListener("squeezeend",Y),r.removeEventListener("end",Q),r.removeEventListener("inputsourceschange",G);for(let ie=0;ie<M.length;ie++){let le=A[ie];if(le===null)continue;A[ie]=null,M[ie].disconnect(le)}j=null,C=null,y.reset();for(let ie in p)delete p[ie];if(e.setRenderTarget(b),h=null,f=null,u=null,r=null,T=null,Ue.stop(),i.isPresenting=!1,e.setPixelRatio(g),e.setSize(R.width,R.height,!1),S!==null){let ie=S.camera;ie.fov=S.fov,ie.zoom=S.zoom,ie.updateProjectionMatrix(),S=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ie){if(n=ie,i.isPresenting===!0)ye("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ie){if(o=ie,i.isPresenting===!0)ye("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||s},this.setReferenceSpace=function(ie){l=ie},this.getBaseLayer=function(){return f!==null?f:h},this.getBinding=function(){if(u===null&&x)u=new XRWebGLBinding(r,t);return u},this.getFrame=function(){return d},this.getSession=function(){return r},this.setSession=async function(ie){if(r=ie,r!==null){if(b=e.getRenderTarget(),r.addEventListener("select",Y),r.addEventListener("selectstart",Y),r.addEventListener("selectend",Y),r.addEventListener("squeeze",Y),r.addEventListener("squeezestart",Y),r.addEventListener("squeezeend",Y),r.addEventListener("end",Q),r.addEventListener("inputsourceschange",G),m.xrCompatible!==!0)await t.makeXRCompatible();if(g=e.getPixelRatio(),e.getSize(R),!(x&&("createProjectionLayer"in XRWebGLBinding.prototype))){let Fe={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:n};h=new XRWebGLLayer(r,t,Fe),r.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),T=new Lt(h.framebufferWidth,h.framebufferHeight,{format:ui,type:$t,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{let Fe=null,He=null,Ze=null;if(m.depth)Ze=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Fe=m.stencil?Bi:Di,He=m.stencil?ar:ni;let ue={colorFormat:t.RGBA8,depthFormat:Ze,scaleFactor:n};u=this.getBinding(),f=u.createProjectionLayer(ue),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),T=new Lt(f.textureWidth,f.textureHeight,{format:ui,type:$t,depthTexture:new Vi(f.textureWidth,f.textureHeight,He,void 0,void 0,void 0,void 0,void 0,void 0,Fe),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(a),l=null,s=await r.requestReferenceSpace(o),Ue.setContext(r),Ue.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function G(ie){for(let le=0;le<ie.removed.length;le++){let Fe=ie.removed[le],He=A.indexOf(Fe);if(He>=0)A[He]=null,M[He].disconnect(Fe)}for(let le=0;le<ie.added.length;le++){let Fe=ie.added[le],He=A.indexOf(Fe);if(He===-1){for(let ue=0;ue<M.length;ue++)if(ue>=A.length){A.push(Fe),He=ue;break}else if(A[ue]===null){A[ue]=Fe,He=ue;break}if(He===-1)break}let Ze=M[He];if(Ze)Ze.connect(Fe)}}function ge(ie,le){if(le===null)ie.matrixWorld.copy(ie.matrix);else ie.matrixWorld.multiplyMatrices(le.matrixWorld,ie.matrix);ie.matrixWorldInverse.copy(ie.matrixWorld).invert()}this.updateCamera=function(ie){if(r===null)return;let{near:le,far:Fe}=ie;if(y.texture!==null){if(y.depthNear>0)le=y.depthNear;if(y.depthFar>0)Fe=y.depthFar}if(U.near=V.near=P.near=le,U.far=V.far=P.far=Fe,j!==U.near||C!==U.far)r.updateRenderState({depthNear:U.near,depthFar:U.far}),j=U.near,C=U.far;U.layers.mask=ie.layers.mask|6,P.layers.mask=U.layers.mask&-5,V.layers.mask=U.layers.mask&-3;let He=ie.parent,Ze=U.cameras;ge(U,He);for(let ue=0;ue<Ze.length;ue++)ge(Ze[ue],He);if(U.projectionMatrix.copy(P.projectionMatrix),U.projectionMatrixInverse.copy(P.projectionMatrixInverse),S===null&&ie.isPerspectiveCamera)S={camera:ie,fov:ie.fov,zoom:ie.zoom};X(ie,U,He)};function X(ie,le,Fe){if(Fe===null)ie.matrix.copy(le.matrixWorld);else ie.matrix.copy(Fe.matrixWorld),ie.matrix.invert(),ie.matrix.multiply(le.matrixWorld);if(ie.matrix.decompose(ie.position,ie.quaternion,ie.scale),ie.updateMatrixWorld(!0),ie.projectionMatrix.copy(le.projectionMatrix),ie.projectionMatrixInverse.copy(le.projectionMatrixInverse),ie.isPerspectiveCamera)ie.fov=hn*2*Math.atan(1/ie.projectionMatrix.elements[5]),ie.zoom=1}this.getCamera=function(){return U},this.getFoveation=function(){if(f===null&&h===null)return;return a},this.setFoveation=function(ie){if(a=ie,f!==null)f.fixedFoveation=ie;if(h!==null&&h.fixedFoveation!==void 0)h.fixedFoveation=ie},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(U)},this.getCameraTexture=function(ie){return p[ie]};let te=null;function ae(ie,le){if(c=le.getViewerPose(l||s),d=le,c!==null){let Fe=c.views;if(h!==null)e.setRenderTargetFramebuffer(T,h.framebuffer),e.setRenderTarget(T);let He=!1;if(Fe.length!==U.cameras.length)U.cameras.length=0,He=!0;for(let lt=0;lt<Fe.length;lt++){let Pe=Fe[lt],ot=null;if(h!==null)ot=h.getViewport(Pe);else{let fe=u.getViewSubImage(f,Pe);if(ot=fe.viewport,lt===0)e.setRenderTargetTextures(T,fe.colorTexture,fe.depthStencilTexture),e.setRenderTarget(T)}let re=I[lt];if(re===void 0)re=new Zt,re.layers.enable(lt),re.viewport=new Mt,I[lt]=re;if(re.matrix.fromArray(Pe.transform.matrix),re.matrix.decompose(re.position,re.quaternion,re.scale),re.projectionMatrix.fromArray(Pe.projectionMatrix),re.projectionMatrixInverse.copy(re.projectionMatrix).invert(),re.viewport.set(ot.x,ot.y,ot.width,ot.height),lt===0)U.matrix.copy(re.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale);if(He===!0)U.cameras.push(re)}let Ze=r.enabledFeatures;if(Ze&&Ze.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&x){u=i.getBinding();let lt=u.getDepthInformation(Fe[0]);if(lt&&lt.isValid&&lt.texture)y.init(lt,r.renderState)}if(Ze&&Ze.includes("camera-access")&&x){e.state.unbindTexture(),u=i.getBinding();for(let lt=0;lt<Fe.length;lt++){let Pe=Fe[lt].camera;if(Pe){let ot=p[Pe];if(!ot)ot=new ws,p[Pe]=ot;let re=u.getCameraImage(Pe);ot.sourceTexture=re}}}}for(let Fe=0;Fe<M.length;Fe++){let He=A[Fe],Ze=M[Fe];if(He!==null&&Ze!==void 0)Ze.update(He,le,l||s)}if(te)te(ie,le);if(le.detectedPlanes)i.dispatchEvent({type:"planesdetected",data:le});d=null}let Ue=new Rl;Ue.setAnimationLoop(ae),this.setAnimationLoop=function(ie){te=ie},this.dispose=function(){}}}var j0=new Ye,ym=new Qe;ym.set(-1,0,0,0,1,0,0,0,1);function Mm(e,t){function i(p,m){if(p.matrixAutoUpdate===!0)p.updateMatrix();m.value.copy(p.matrix)}function r(p,m){if(m.color.getRGB(p.fogColor.value,gl(e)),m.isFog)p.fogNear.value=m.near,p.fogFar.value=m.far;else if(m.isFogExp2)p.fogDensity.value=m.density}function n(p,m,b,T,M){if(m.isNodeMaterial)m.uniformsNeedUpdate=!1;else if(m.isMeshBasicMaterial)s(p,m);else if(m.isMeshLambertMaterial){if(s(p,m),m.envMap)p.envMapIntensity.value=m.envMapIntensity}else if(m.isMeshToonMaterial)s(p,m),f(p,m);else if(m.isMeshPhongMaterial){if(s(p,m),u(p,m),m.envMap)p.envMapIntensity.value=m.envMapIntensity}else if(m.isMeshStandardMaterial){if(s(p,m),h(p,m),m.isMeshPhysicalMaterial)d(p,m,M)}else if(m.isMeshMatcapMaterial)s(p,m),x(p,m);else if(m.isMeshDepthMaterial)s(p,m);else if(m.isMeshDistanceMaterial)s(p,m),y(p,m);else if(m.isMeshNormalMaterial)s(p,m);else if(m.isLineBasicMaterial){if(o(p,m),m.isLineDashedMaterial)a(p,m)}else if(m.isPointsMaterial)l(p,m,b,T);else if(m.isSpriteMaterial)c(p,m);else if(m.isShadowMaterial)p.color.value.copy(m.color),p.opacity.value=m.opacity;else if(m.isShaderMaterial)m.uniformsNeedUpdate=!1}function s(p,m){if(p.opacity.value=m.opacity,m.color)p.diffuse.value.copy(m.color);if(m.emissive)p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity);if(m.map)p.map.value=m.map,i(m.map,p.mapTransform);if(m.alphaMap)p.alphaMap.value=m.alphaMap,i(m.alphaMap,p.alphaMapTransform);if(m.bumpMap){if(p.bumpMap.value=m.bumpMap,i(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===Vt)p.bumpScale.value*=-1}if(m.normalMap){if(p.normalMap.value=m.normalMap,i(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===Vt)p.normalScale.value.negate()}if(m.displacementMap)p.displacementMap.value=m.displacementMap,i(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias;if(m.emissiveMap)p.emissiveMap.value=m.emissiveMap,i(m.emissiveMap,p.emissiveMapTransform);if(m.specularMap)p.specularMap.value=m.specularMap,i(m.specularMap,p.specularMapTransform);if(m.alphaTest>0)p.alphaTest.value=m.alphaTest;let b=t.get(m),{envMap:T,envMapRotation:M}=b;if(T){if(p.envMap.value=T,p.envMapRotation.value.setFromMatrix4(j0.makeRotationFromEuler(M)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1)p.envMapRotation.value.premultiply(ym);p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio}if(m.lightMap)p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,i(m.lightMap,p.lightMapTransform);if(m.aoMap)p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,i(m.aoMap,p.aoMapTransform)}function o(p,m){if(p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map)p.map.value=m.map,i(m.map,p.mapTransform)}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,b,T){if(p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*b,p.scale.value=T*0.5,m.map)p.map.value=m.map,i(m.map,p.uvTransform);if(m.alphaMap)p.alphaMap.value=m.alphaMap,i(m.alphaMap,p.alphaMapTransform);if(m.alphaTest>0)p.alphaTest.value=m.alphaTest}function c(p,m){if(p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map)p.map.value=m.map,i(m.map,p.mapTransform);if(m.alphaMap)p.alphaMap.value=m.alphaMap,i(m.alphaMap,p.alphaMapTransform);if(m.alphaTest>0)p.alphaTest.value=m.alphaTest}function u(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,0.0001)}function f(p,m){if(m.gradientMap)p.gradientMap.value=m.gradientMap}function h(p,m){if(p.metalness.value=m.metalness,m.metalnessMap)p.metalnessMap.value=m.metalnessMap,i(m.metalnessMap,p.metalnessMapTransform);if(p.roughness.value=m.roughness,m.roughnessMap)p.roughnessMap.value=m.roughnessMap,i(m.roughnessMap,p.roughnessMapTransform);if(m.envMap)p.envMapIntensity.value=m.envMapIntensity}function d(p,m,b){if(p.ior.value=m.ior,m.diffuseRoughness>0){if(p.diffuseRoughness.value=m.diffuseRoughness,m.diffuseRoughnessMap)p.diffuseRoughnessMap.value=m.diffuseRoughnessMap,i(m.diffuseRoughnessMap,p.diffuseRoughnessMapTransform)}if(m.sheen>0){if(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap)p.sheenColorMap.value=m.sheenColorMap,i(m.sheenColorMap,p.sheenColorMapTransform);if(m.sheenRoughnessMap)p.sheenRoughnessMap.value=m.sheenRoughnessMap,i(m.sheenRoughnessMap,p.sheenRoughnessMapTransform)}if(m.clearcoat>0){if(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap)p.clearcoatMap.value=m.clearcoatMap,i(m.clearcoatMap,p.clearcoatMapTransform);if(m.clearcoatRoughnessMap)p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,i(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform);if(m.clearcoatNormalMap){if(p.clearcoatNormalMap.value=m.clearcoatNormalMap,i(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Vt)p.clearcoatNormalScale.value.negate()}}if(m.dispersion>0)p.dispersion.value=m.dispersion;if(m.retroreflectivity>0)p.retroreflectivity.value=m.retroreflectivity;if(m.iridescence>0){if(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessMinimum,p.iridescenceThicknessMaximum.value=m.iridescenceThicknessMaximum,m.iridescenceMap)p.iridescenceMap.value=m.iridescenceMap,i(m.iridescenceMap,p.iridescenceMapTransform);if(m.iridescenceThicknessMap)p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,i(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform)}if(m.transmission>0){if(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=b.texture,p.transmissionSamplerSize.value.set(b.width,b.height),m.transmissionMap)p.transmissionMap.value=m.transmissionMap,i(m.transmissionMap,p.transmissionMapTransform);if(p.thickness.value=m.thickness,m.thicknessMap)p.thicknessMap.value=m.thicknessMap,i(m.thicknessMap,p.thicknessMapTransform);p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)}if(m.anisotropy>0){if(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap)p.anisotropyMap.value=m.anisotropyMap,i(m.anisotropyMap,p.anisotropyMapTransform)}if(p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap)p.specularColorMap.value=m.specularColorMap,i(m.specularColorMap,p.specularColorMapTransform);if(m.specularIntensityMap)p.specularIntensityMap.value=m.specularIntensityMap,i(m.specularIntensityMap,p.specularIntensityMapTransform)}function x(p,m){if(m.matcap)p.matcap.value=m.matcap}function y(p,m){let b=t.get(m).light;p.referencePosition.value.setFromMatrixPosition(b.matrixWorld),p.nearDistance.value=b.shadow.camera.near,p.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:n}}function Sm(e,t,i,r){let n={},s={};function o(b,T){let M=T.program;r.uniformBlockBinding(b,M,n[b.id])}function a(b,T){let M=n[b.id];if(M===void 0)x(b),M=l(b),n[b.id]=M,b.addEventListener("dispose",p);let A=T.program;r.updateUBOMapping(b,A);let R=t.render.frame;if(s[b.id]!==R)c(b),s[b.id]=R}function l(b){let T=e.createBuffer(),{__size:M,usage:A}=b;return e.bindBuffer(e.UNIFORM_BUFFER,T),e.bufferData(e.UNIFORM_BUFFER,M,A),e.bindBuffer(e.UNIFORM_BUFFER,null),T}function c(b){let T=n[b.id],{uniforms:M,__cache:A}=b;e.bindBuffer(e.UNIFORM_BUFFER,T);for(let R=0,g=M.length;R<g;R++){let S=M[R];if(Array.isArray(S))for(let P=0,V=S.length;P<V;P++)u(S[P],R,P,A);else u(S,R,0,A)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function u(b,T,M,A){if(h(b,T,M,A)===!0){let{__offset:R,value:g}=b;if(Array.isArray(g)){let S=0;for(let P=0;P<g.length;P++){let V=g[P],I=y(V,!0);f(V,b.__data,S),S+=I.storage/Float32Array.BYTES_PER_ELEMENT}}else f(g,b.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,R,b.__data)}}function f(b,T,M){if(typeof b==="number"||typeof b==="boolean")T[M]=b;else if(b.isMatrix3)T[M]=b.elements[0],T[M+1]=b.elements[1],T[M+2]=b.elements[2],T[M+3]=0,T[M+4]=b.elements[3],T[M+5]=b.elements[4],T[M+6]=b.elements[5],T[M+7]=0,T[M+8]=b.elements[6],T[M+9]=b.elements[7],T[M+10]=b.elements[8],T[M+11]=0;else if(ArrayBuffer.isView(b))T.set(b.subarray(0,T.length-M),M);else b.toArray(T,M)}function h(b,T,M,A){let R=b.value,g=T+"_"+M;if(Array.isArray(R)){if(A[g]===void 0)A[g]=[];let S=A[g],P=!1;for(let V=0;V<R.length;V++)if(d(R[V],S,V)===!0)P=!0;return P}return d(R,A,g)}function d(b,T,M){if(T[M]===void 0){if(typeof b==="number"||typeof b==="boolean")T[M]=b;else if(ArrayBuffer.isView(b))T[M]=b.slice();else T[M]=b.clone();return!0}else{let A=T[M];if(typeof b==="number"||typeof b==="boolean"){if(A!==b)return T[M]=b,!0}else if(ArrayBuffer.isView(b))return!0;else if(A.equals(b)===!1)return A.copy(b),!0}return!1}function x(b){let T=b.uniforms,M=0,A=16;for(let g=0,S=T.length;g<S;g++){let P=Array.isArray(T[g])?T[g]:[T[g]];for(let V=0,I=P.length;V<I;V++){let U=P[V],j=Array.isArray(U.value)?U.value:[U.value],C=Array.isArray(T[g])||Array.isArray(U.value),Y=M;for(let G=0,ge=j.length;G<ge;G++){let X=j[G],te=y(X,C),ae=M%A,Ue=ae%te.boundary,ie=ae+Ue;if(M+=Ue,ie!==0&&A-ie<te.storage)M+=A-ie;if(G===0)Y=M;M+=te.storage}let Q=U.type==="int"?Int32Array:U.type==="uint"?Uint32Array:Float32Array;U.__data=new Q((M-Y)/Float32Array.BYTES_PER_ELEMENT),U.__offset=Y}}let R=M%A;if(R>0)M+=A-R;return b.__size=M,b.__cache={},this}function y(b,T){let M={boundary:0,storage:0};if(typeof b==="number"||typeof b==="boolean")M.boundary=4,M.storage=4;else if(b.isVector2)M.boundary=8,M.storage=8;else if(b.isVector3||b.isColor)M.boundary=16,M.storage=12;else if(b.isVector4)M.boundary=16,M.storage=16;else if(b.isMatrix3)M.boundary=16,M.storage=48;else if(b.isMatrix4)M.boundary=16,M.storage=64;else if(b.isTexture)ye("WebGLRenderer: Texture samplers can not be part of an uniforms group.");else if(ArrayBuffer.isView(b))M.boundary=16,M.storage=b.byteLength;else ye("WebGLRenderer: Unsupported uniform value type.",b);if(T===!0)M.boundary=16,M.storage=Math.ceil(M.storage/16)*16;return M}function p(b){let T=b.target;T.removeEventListener("dispose",p),e.deleteBuffer(n[T.id]),delete n[T.id],delete s[T.id]}function m(){for(let b in n)e.deleteBuffer(n[b]);n={},s={}}return{bind:o,update:a,dispose:m}}var e_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),yr=null;function bm(){if(yr===null)yr=new xr(e_,16,16,Oi,Ut),yr.name="DFG_LUT",yr.minFilter=Ht,yr.magFilter=Ht,yr.wrapS=vi,yr.wrapT=vi,yr.generateMipmaps=!1,yr.needsUpdate=!0;return yr}class Dl{constructor(e={}){let{canvas:t=kl(),context:i=null,depth:r=!0,stencil:n=!1,alpha:s=!1,antialias:o=!1,premultipliedAlpha:a=!0,preserveDrawingBuffer:l=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1,outputBufferType:h=$t}=e;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=s;let x=h,y=new Set([Kn,Jn,tn]),p=new Set([$t,ni,Tr,ar,qn,Yn]),m=new Uint32Array(4),b=new Int32Array(4),T={textures:[],min:[],max:[],resolution:[]},M=null,A=null,R=[],g=[],S=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Fi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let P=this,V=!1,I=null,U=null,j=null,C=null;this._outputColorSpace=qt;let Y=0,Q=0,G=null,ge=-1,X=null,te=new Mt,ae=new Mt,Ue=null,ie=new de(0),le=0,{width:Fe,height:He}=t,Ze=1,ue=null,mt=null,lt=new Mt(0,0,Fe,He),Pe=new Mt(0,0,Fe,He),ot=!1,re=new ji,fe=new Ts,_e=!1,Ie=!1,Le=new Ye,Je=new w,We=new Mt,ft={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},pt=!1;function st(){return G===null?Ze:1}let N=i;function kt(v,L){return t.getContext(v,L)}let at,St,Se,bt,$e,je,Wt,E,_,z,oe,ne,pe,Me,W,J,ve,D,ee,Z,he,xe,be;try{let v={alpha:!0,depth:r,stencil:n,antialias:o,premultipliedAlpha:a,preserveDrawingBuffer:l,powerPreference:c,failIfMajorPerformanceCaveat:u};if("setAttribute"in t)t.setAttribute("data-engine",`three.js r${Bs}`);if(t.addEventListener("webglcontextlost",Re,!1),t.addEventListener("webglcontextrestored",Ke,!1),t.addEventListener("webglcontextcreationerror",ct,!1),N===null){if(N=kt("webgl2",v),N===null)if(kt("webgl2"))throw Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.");else throw Error("THREE.WebGLRenderer: Error creating WebGL context.")}qe()}catch(v){throw t.removeEventListener("webglcontextlost",Re,!1),t.removeEventListener("webglcontextrestored",Ke,!1),t.removeEventListener("webglcontextcreationerror",ct,!1),Be("WebGLRenderer: "+v.message),v}function qe(){if(at=new Pp(N),at.init(),he=new Vc(N,at),St=new Mp(N,at,e,he),Se=new _m(N,at),St.reversedDepthBuffer&&f)Se.buffers.depth.setReversed(!0);U=N.createFramebuffer(),j=N.createFramebuffer(),C=N.createFramebuffer(),bt=new Dp(N),$e=new am,je=new vm(N,at,Se,$e,St,he,bt),Wt=new Cp(P),E=new Fu(N),xe=new vp(N,E),_=new Ip(N,E,bt,xe),z=new Up(N,_,E,xe,bt),D=new Np(N,St,je),W=new Sp($e),oe=new om(P,Wt,at,St,xe,W),ne=new Mm(P,$e),pe=new hm,Me=new dm(at),ve=new _p(P,Wt,Se,z,d,a),J=new xm(P,z,St),be=new Sm(N,bt,St,Se),ee=new yp(N,at,bt),Z=new Lp(N,at,bt),bt.programs=oe.programs,P.capabilities=St,P.extensions=at,P.properties=$e,P.renderLists=pe,P.shadowMap=J,P.state=Se,P.info=bt}if(x!==$t)S=new Fp(x,t.width,t.height,o,r,n);let De=new Hc(P,N);this.xr=De,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){let v=at.get("WEBGL_lose_context");if(v)v.loseContext()},this.forceContextRestore=function(){let v=at.get("WEBGL_lose_context");if(v)v.restoreContext()},this.getPixelRatio=function(){return Ze},this.setPixelRatio=function(v){if(v===void 0)return;Ze=v,this.setSize(Fe,He,!1)},this.getSize=function(v){return v.set(Fe,He)},this.setSize=function(v,L,k=!0){if(De.isPresenting){ye("WebGLRenderer: Can't change size while VR device is presenting.");return}if(Fe=v,He=L,t.width=Math.floor(v*Ze),t.height=Math.floor(L*Ze),k===!0)t.style.width=v+"px",t.style.height=L+"px";if(S!==null)S.setSize(t.width,t.height);this.setViewport(0,0,v,L)},this.getDrawingBufferSize=function(v){return v.set(Fe*Ze,He*Ze).floor()},this.setDrawingBufferSize=function(v,L,k){Fe=v,He=L,Ze=k,t.width=Math.floor(v*k),t.height=Math.floor(L*k),this.setViewport(0,0,v,L)},this.setEffects=function(v){if(x===$t){Be("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(v){for(let L=0;L<v.length;L++)if(v[L].isOutputPass===!0){ye("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}S.setEffects(v||[])},this.getCurrentViewport=function(v){return v.copy(te)},this.getViewport=function(v){return v.copy(lt)},this.setViewport=function(v,L,k,O){if(v.isVector4)lt.set(v.x,v.y,v.z,v.w);else lt.set(v,L,k,O);Se.viewport(te.copy(lt).multiplyScalar(st()).round())},this.getScissor=function(v){return v.copy(Pe)},this.setScissor=function(v,L,k,O){if(v.isVector4)Pe.set(v.x,v.y,v.z,v.w);else Pe.set(v,L,k,O);Se.scissor(ae.copy(Pe).multiplyScalar(st()).round())},this.getScissorTest=function(){return ot},this.setScissorTest=function(v){Se.setScissorTest(ot=v)},this.setOpaqueSort=function(v){ue=v},this.setTransparentSort=function(v){mt=v},this.getClearColor=function(v){return v.copy(ve.getClearColor())},this.setClearColor=function(){ve.setClearColor(...arguments)},this.getClearAlpha=function(){return ve.getClearAlpha()},this.setClearAlpha=function(){ve.setClearAlpha(...arguments)},this.clear=function(v=!0,L=!0,k=!0){let O=0;if(v){let F=!1;if(G!==null){let me=G.texture.format;F=y.has(me)}if(F){let me=G.texture.type,Ce=p.has(me),ce=ve.getClearColor(),Ee=ve.getClearAlpha(),{r:Oe,g:it,b:_t}=ce;if(Ce)m[0]=Oe,m[1]=it,m[2]=_t,m[3]=Ee,N.clearBufferuiv(N.COLOR,0,m);else b[0]=Oe,b[1]=it,b[2]=_t,b[3]=Ee,N.clearBufferiv(N.COLOR,0,b)}else O|=N.COLOR_BUFFER_BIT}if(L)O|=N.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0);if(k)O|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295);if(O!==0)N.clear(O)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(v){v.setRenderer(this),I=v},this.dispose=function(){t.removeEventListener("webglcontextlost",Re,!1),t.removeEventListener("webglcontextrestored",Ke,!1),t.removeEventListener("webglcontextcreationerror",ct,!1),ve.dispose(),pe.dispose(),Me.dispose(),je.dispose(),$e.dispose(),Wt.dispose(),z.dispose(),_.dispose(),xe.dispose(),be.dispose(),oe.dispose(),De.dispose(),De.removeEventListener("sessionstart",da),De.removeEventListener("sessionend",Fs),B.stop()};function Re(v){v.preventDefault(),cn("WebGLRenderer: Context Lost."),V=!0}function Ke(){cn("WebGLRenderer: Context Restored."),V=!1;let v=bt.autoReset,L=J.enabled,k=J.autoUpdate,O=J.needsUpdate,F=J.type;qe(),bt.autoReset=v,J.enabled=L,J.autoUpdate=k,J.needsUpdate=O,J.type=F}function ct(v){Be("WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function Te(v){let L=v.target;L.removeEventListener("dispose",Te),Tt(L)}function Tt(v){Ft(v),$e.remove(v)}function Ft(v){let L=$e.get(v).programs;if(L!==void 0){if(L.forEach(function(k){oe.releaseProgram(k)}),v.isShaderMaterial)oe.releaseShaderCache(v)}}this.renderBufferDirect=function(v,L,k,O,F,me){if(L===null)L=ft;let Ce=F.isMesh&&F.matrixWorld.determinantAffine()<0,ce=ri(v,L,k,O,F);Se.setMaterial(O,Ce);let Ee=k.index,Oe=1;if(O.wireframe===!0){if(Ee=_.getWireframeAttribute(k),Ee===void 0)return;Oe=2}let it=k.drawRange,_t=k.attributes.position,ke=it.start*Oe,xt=(it.start+it.count)*Oe;if(me!==null)ke=Math.max(ke,me.start*Oe),xt=Math.min(xt,(me.start+me.count)*Oe);if(Ee!==null)ke=Math.max(ke,0),xt=Math.min(xt,Ee.count);else if(_t!==void 0&&_t!==null)ke=Math.max(ke,0),xt=Math.min(xt,_t.count);let Rt=xt-ke;if(Rt<0||Rt===1/0)return;xe.setup(F,O,ce,k,Ee);let It,ze=ee;if(Ee!==null)It=E.get(Ee),ze=Z,ze.setIndex(It);if(F.isMesh)if(O.wireframe===!0)Se.setLineWidth(O.wireframeLinewidth*st()),ze.setMode(N.LINES);else ze.setMode(N.TRIANGLES);else if(F.isLine){let dt=O.linewidth;if(dt===void 0)dt=1;if(Se.setLineWidth(dt*st()),F.isLineSegments)ze.setMode(N.LINES);else if(F.isLineLoop)ze.setMode(N.LINE_LOOP);else ze.setMode(N.LINE_STRIP)}else if(F.isPoints)ze.setMode(N.POINTS);else if(F.isSprite)ze.setMode(N.TRIANGLES);if(F.isBatchedMesh)if(!at.get("WEBGL_multi_draw")){let{_multiDrawStarts:dt,_multiDrawCounts:we,_multiDrawCount:Gt}=F,ut=Ee?E.get(Ee).bytesPerElement:1,Xi=$e.get(O).currentProgram.getUniforms();for(let Qt=0;Qt<Gt;Qt++)Xi.setValue(N,"_gl_DrawID",Qt),ze.render(dt[Qt]/ut,we[Qt])}else ze.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else if(F.isInstancedMesh)ze.renderInstances(ke,Rt,F.count);else if(k.isInstancedBufferGeometry){let dt=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,we=Math.min(k.instanceCount,dt);ze.renderInstances(ke,Rt,we)}else ze.render(ke,Rt)};function sr(v,L,k,O){if(I!==null&&v.isNodeMaterial)I.setObject(O,v);if(_e===!0)W.setState(v,k,!1);if(v.transparent===!0&&v.side===Ri&&v.forceSinglePass===!1)v.side=Vt,v.needsUpdate=!0,gt(v,L,O),v.side=qi,v.needsUpdate=!0,gt(v,L,O),v.side=Ri;else gt(v,L,O)}this.compile=function(v,L,k=null){if(k===null)k=v;if(I!==null)I.renderStart(v,L,k);if(A=Me.get(k),A.init(L),g.push(A),k.traverseVisible(function(F){if(F.isLight&&F.layers.test(L.layers)){if(A.pushLight(F),F.castShadow)A.pushShadow(F)}}),v!==k)v.traverseVisible(function(F){if(F.isLight&&F.layers.test(L.layers)){if(A.pushLight(F),F.castShadow)A.pushShadow(F)}});if(A.setupLights(),I!==null)I.updateLights(A.state.lightsArray);if(Ie=this.localClippingEnabled,_e=W.init(this.clippingPlanes,Ie),_e===!0)W.setGlobalState(this.clippingPlanes,L);if(I!==null)J.render(A.state.shadowsArray,k,L);let O=new Set;if(v.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;let me=F.material;if(me)if(Array.isArray(me))for(let Ce=0;Ce<me.length;Ce++){let ce=me[Ce];sr(ce,k,L,F),O.add(ce)}else sr(me,k,L,F),O.add(me)}),A=g.pop(),I!==null)I.renderEnd();return O},this.compileAsync=function(v,L,k=null){let O=this.compile(v,L,k);return new Promise((F)=>{function me(){if(O.forEach(function(Ce){let Ee=$e.get(Ce).currentProgram;if(Ee===void 0||Ee.isReady())O.delete(Ce)}),O.size===0){F(v);return}setTimeout(me,10)}if(at.get("KHR_parallel_shader_compile")!==null)me();else setTimeout(me,10)})};let Nn=null;function fa(v){if(Nn)Nn(v)}function da(){B.stop()}function Fs(){B.start()}let B=new Rl;if(B.setAnimationLoop(fa),typeof self<"u")B.setContext(self);this.setAnimationLoop=function(v){Nn=v,De.setAnimationLoop(v),v===null?B.stop():B.start()},De.addEventListener("sessionstart",da),De.addEventListener("sessionend",Fs),this.render=function(v,L){if(L!==void 0&&L.isCamera!==!0){Be("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(V===!0)return;if(I!==null)I.renderStart(v,L);let k=De.enabled===!0&&De.isPresenting===!0,O=S!==null&&(G===null||k)&&S.begin(P,G);if(v.matrixWorldAutoUpdate===!0)v.updateMatrixWorld();if(L.parent===null&&L.matrixWorldAutoUpdate===!0)L.updateMatrixWorld();if(De.enabled===!0&&De.isPresenting===!0&&(S===null||S.isCompositing()===!1)){if(De.cameraAutoUpdate===!0)De.updateCamera(L);L=De.getCamera()}if(v.isScene===!0)v.onBeforeRender(P,v,L,G);if(A=Me.get(v,g.length),A.init(L),A.state.textureUnits=je.getTextureUnits(),g.push(A),Le.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),L.isArrayCamera)fe.setFromArrayCamera(L);else re.setFromProjectionMatrix(Le,fi,L.reversedDepth);if(Ie=this.localClippingEnabled,_e=W.init(this.clippingPlanes,Ie),M=pe.get(v,R.length),M.init(),R.push(M),this.info.render.frame++,De.enabled===!0&&De.isPresenting===!0){let Ce=P.xr.getDepthSensingMesh();if(Ce!==null)q(Ce,L,-1/0,P.sortObjects)}if(q(v,L,0,P.sortObjects),M.finish(),I!==null)I.updateLights(A.state.lightsArray);if(P.sortObjects===!0)M.sort(ue,mt);if(pt=De.enabled===!1||De.isPresenting===!1||De.hasDepthSensing()===!1,pt)ve.addToRenderList(M,v);if(this.info.autoReset===!0)this.info.reset();if(_e===!0)W.beginShadows();let F=A.state.shadowsArray;if(J.render(F,v,L),_e===!0)W.endShadows();if((O&&S.hasRenderPass())===!1){let Ce=M.opaque,ce=M.transmissive;if(A.setupLights(),L.isArrayCamera){let Ee=L.cameras;if(ce.length>0)for(let Oe=0,it=Ee.length;Oe<it;Oe++){let _t=Ee[Oe];K(Ce,ce,v,_t)}if(pt)ve.render(v);for(let Oe=0,it=Ee.length;Oe<it;Oe++){let _t=Ee[Oe];se(M,v,_t,_t.viewport)}}else{if(ce.length>0)K(Ce,ce,v,L);if(pt)ve.render(v);se(M,v,L)}}if(G!==null&&Q===0)je.updateMultisampleRenderTarget(G),je.updateRenderTargetMipmap(G);if(O)S.end(P);if(v.isScene===!0)v.onAfterRender(P,v,L);if(xe.resetDefaultState(),ge=-1,X=null,g.pop(),g.length>0){if(A=g[g.length-1],je.setTextureUnits(A.state.textureUnits),_e===!0)W.setGlobalState(P.clippingPlanes,A.state.camera)}else A=null;if(R.pop(),R.length>0)M=R[R.length-1];else M=null;if(I!==null)I.renderEnd()};function q(v,L,k,O){if(v.visible===!1)return;if(v.layers.test(L.layers)){if(v.isGroup)k=v.renderOrder;else if(v.isLOD){if(v.autoUpdate===!0)v.update(L)}else if(v.isLight){if(A.pushLight(v),v.castShadow)A.pushShadow(v)}else if(v.isSprite){let Ce=L.isArrayCamera?fe:re;if(!v.frustumCulled||v.intersectsFrustum(Ce)){if(O)We.setFromMatrixPosition(v.matrixWorld).applyMatrix4(Le);let ce=z.update(v),Ee=v.material;if(Ee.visible)M.push(v,ce,Ee,k,We.z,null,L)}}else if(v.isMesh||v.isLine||v.isPoints){let Ce=L.isArrayCamera?fe:re;if(!v.frustumCulled||v.intersectsFrustum(Ce)){let ce=z.update(v),Ee=v.material;if(O){if(v.boundingSphere!==void 0){if(v.boundingSphere===null)v.computeBoundingSphere();We.copy(v.boundingSphere.center)}else{if(ce.boundingSphere===null)ce.computeBoundingSphere();We.copy(ce.boundingSphere.center)}We.applyMatrix4(v.matrixWorld).applyMatrix4(Le)}if(Array.isArray(Ee)){let Oe=ce.groups;for(let it=0,_t=Oe.length;it<_t;it++){let ke=Oe[it],xt=Ee[ke.materialIndex];if(xt&&xt.visible)M.push(v,ce,xt,k,We.z,ke,L)}}else if(Ee.visible)M.push(v,ce,Ee,k,We.z,null,L)}}}let me=v.children;for(let Ce=0,ce=me.length;Ce<ce;Ce++)q(me[Ce],L,k,O)}function se(v,L,k,O){let{opaque:F,transmissive:me,transparent:Ce}=v;if(A.setupLightsView(k),_e===!0)W.setGlobalState(P.clippingPlanes,k);if(O)Se.viewport(te.copy(O));if(F.length>0)Ne(F,L,k);if(me.length>0)Ne(me,L,k);if(Ce.length>0)Ne(Ce,L,k);Se.buffers.depth.setTest(!0),Se.buffers.depth.setMask(!0),Se.buffers.color.setMask(!0),Se.setPolygonOffset(!1)}function K(v,L,k,O){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[O.id]===void 0){let ke=at.has("EXT_color_buffer_half_float")||at.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[O.id]=new Lt(1,1,{generateMipmaps:!0,type:ke?Ut:$t,minFilter:Ci,samples:Math.max(4,St.samples),stencilBuffer:n,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:rt.workingColorSpace})}let me=A.state.transmissionRenderTarget[O.id],Ce=O.viewport||te;me.setSize(Ce.z*P.transmissionResolutionScale,Ce.w*P.transmissionResolutionScale);let ce=P.getRenderTarget(),Ee=P.getActiveCubeFace(),Oe=P.getActiveMipmapLevel();if(P.setRenderTarget(me),P.getClearColor(ie),le=P.getClearAlpha(),le<1)P.setClearColor(16777215,0.5);if(P.clear(),pt)ve.render(k);let it=P.toneMapping;P.toneMapping=Fi;let _t=O.viewport;if(O.viewport!==void 0)O.viewport=void 0;if(A.setupLightsView(O),_e===!0)W.setGlobalState(P.clippingPlanes,O);if(Ne(v,k,O),je.updateMultisampleRenderTarget(me),je.updateRenderTargetMipmap(me),at.has("WEBGL_multisampled_render_to_texture")===!1){let ke=!1;for(let xt=0,Rt=L.length;xt<Rt;xt++){let It=L[xt],{object:ze,geometry:dt,material:we,group:Gt}=It;if(we.side===Ri&&ze.layers.test(O.layers)){let ut=we.side;we.side=Vt,we.needsUpdate=!0,Ve(ze,k,O,dt,we,Gt),we.side=ut,we.needsUpdate=!0,ke=!0}}if(ke===!0)je.updateMultisampleRenderTarget(me),je.updateRenderTargetMipmap(me)}if(P.setRenderTarget(ce,Ee,Oe),P.setClearColor(ie,le),_t!==void 0)O.viewport=_t;P.toneMapping=it}function Ne(v,L,k){let O=L.isScene===!0?L.overrideMaterial:null;for(let F=0,me=v.length;F<me;F++){let Ce=v[F],{object:ce,geometry:Ee,group:Oe}=Ce,it=Ce.material;if(it.allowOverride===!0&&O!==null)it=O;if(ce.layers.test(k.layers))Ve(ce,L,k,Ee,it,Oe)}}function Ve(v,L,k,O,F,me){if(I!==null&&F.isNodeMaterial)I.setObject(v,F);if(v.onBeforeRender(P,L,k,O,F,me),v.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),F.onBeforeRender(P,L,k,O,v,me),F.transparent===!0&&F.side===Ri&&F.forceSinglePass===!1)F.side=Vt,F.needsUpdate=!0,P.renderBufferDirect(k,L,O,F,v,me),F.side=qi,F.needsUpdate=!0,P.renderBufferDirect(k,L,O,F,v,me),F.side=Ri;else P.renderBufferDirect(k,L,O,F,v,me);v.onAfterRender(P,L,k,O,F,me)}function Et(v){let L=0;for(let k of v)if(k.texture!==null)L++;return L}function gt(v,L,k){if(L.isScene!==!0)L=ft;let O=$e.get(v),F=A.state.lights,me=A.state.shadowsArray,Ce=F.state.version,ce=oe.getParameters(v,F.state,me,L,k,A.state.lightProbeGridArray),Ee=oe.getProgramCacheKey(ce),Oe=O.programs;O.environment=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?L.environment:null,O.fog=L.fog;let it=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap;if(O.envMap=Wt.get(v.envMap||O.environment,it),O.envMapRotation=O.environment!==null&&v.envMap===null?L.environmentRotation:v.envMapRotation,Oe===void 0)v.addEventListener("dispose",Te),Oe=new Map,O.programs=Oe,O.programVariants=new Map;let _t=Oe.get(Ee);if(_t!==void 0){if(O.currentProgram===_t&&O.lightsStateVersion===Ce)return Pt(v,ce),_t}else{if(ce.uniforms=oe.getUniforms(v),I!==null&&v.isNodeMaterial)I.build(v,k,ce);v.onBeforeCompile(ce,P),_t=oe.acquireProgram(ce,Ee),Oe.set(Ee,_t),O.uniforms=ce.uniforms}let ke=O.uniforms;if(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)ke.clippingPlanes=W.uniform;if(Pt(v,ce),O.needsLights=gi(v),O.lightsStateVersion=Ce,O.needsLights)ke.ambientLightColor.value=F.state.ambient,ke.lightProbe.value=F.state.probe,ke.sunLights.value=F.state.sun,ke.sunLightShadows.value=F.state.sunShadow,ke.directionalLights.value=F.state.directional,ke.directionalLightShadows.value=F.state.directionalShadow,ke.spotLights.value=F.state.spot,ke.spotLightShadows.value=F.state.spotShadow,ke.rectAreaLights.value=F.state.rectArea,ke.ltc_1.value=F.state.rectAreaLTC1,ke.ltc_2.value=F.state.rectAreaLTC2,ke.pointLights.value=F.state.point,ke.pointLightShadows.value=F.state.pointShadow,ke.hemisphereLights.value=F.state.hemi,ke.sunShadowMatrix.value=F.state.sunShadowMatrix,ke.sunShadowCascade.value=F.state.sunShadowCascade,ke.directionalShadowMatrix.value=F.state.directionalShadowMatrix,ke.spotLightMatrix.value=F.state.spotLightMatrix,ke.spotLightMap.value=F.state.spotLightMap,ke.pointShadowMatrix.value=F.state.pointShadowMatrix;return O.numLightProbeGrids=Et(A.state.lightProbeGridArray),O.currentProgram=_t,O.uniformsList=null,_t}function Nt(v,L,k,O,F){let me=$e.get(v),Ce=me.currentProgram.id+","+O+","+F,ce=me.programVariants.get(Ce);if(ce===void 0)ce=gt(v,L,k),me.programVariants.set(Ce,ce);else me.currentProgram=ce,me.uniformsList=null,me.outputColorSpace=O,me.toneMapping=F;return ce}function yt(v){if(v.uniformsList===null){let L=v.currentProgram.getUniforms();v.uniformsList=In.seqWithValue(L.seq,v.uniforms)}return v.uniformsList}function Pt(v,L){let k=$e.get(v);k.outputColorSpace=L.outputColorSpace,k.batching=L.batching,k.batchingColor=L.batchingColor,k.instancing=L.instancing,k.instancingColor=L.instancingColor,k.instancingMorph=L.instancingMorph,k.skinning=L.skinning,k.morphTargets=L.morphTargets,k.morphNormals=L.morphNormals,k.morphColors=L.morphColors,k.morphTargetsCount=L.morphTargetsCount,k.numClippingPlanes=L.numClippingPlanes,k.numIntersection=L.numClipIntersection,k.vertexAlphas=L.vertexAlphas,k.vertexTangents=L.vertexTangents,k.toneMapping=L.toneMapping}function ri(v,L,k,O,F){if(L.isScene!==!0)L=ft;je.resetTextureUnits();let me=L.fog,Ce=O.isMeshStandardMaterial||O.isMeshLambertMaterial||O.isMeshPhongMaterial?L.environment:null,ce=G===null?P.outputColorSpace:G.isXRRenderTarget===!0?G.texture.colorSpace:rt.workingColorSpace,Ee=O.isMeshStandardMaterial||O.isMeshLambertMaterial&&!O.envMap||O.isMeshPhongMaterial&&!O.envMap,Oe=Wt.get(O.envMap||Ce,Ee),it=O.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,_t=!!k.attributes.tangent&&(!!O.normalMap||O.anisotropy>0),ke=!!k.morphAttributes.position,xt=!!k.morphAttributes.normal,Rt=!!k.morphAttributes.color,It=Fi;if(O.toneMapped){if(G===null||G.isXRRenderTarget===!0)It=P.toneMapping}let ze=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,dt=ze!==void 0?ze.length:0,we=$e.get(O),Gt=A.state.lights;if(_e===!0){if(Ie===!0||v!==X){let Xt=v===X&&O.id===ge;W.setState(O,v,Xt)}}let ut=!1,Xi=!1;if(O.version===we.__version){if(we.needsLights&&we.lightsStateVersion!==Gt.state.version)ut=!0;else if(F.isBatchedMesh&&we.batching===!1)ut=!0;else if(!F.isBatchedMesh&&we.batching===!0)ut=!0;else if(F.isBatchedMesh&&we.batchingColor===!0&&F._colorsTexture===null)ut=!0;else if(F.isBatchedMesh&&we.batchingColor===!1&&F._colorsTexture!==null)ut=!0;else if(F.isInstancedMesh&&we.instancing===!1)ut=!0;else if(!F.isInstancedMesh&&we.instancing===!0)ut=!0;else if(F.isSkinnedMesh&&we.skinning===!1)ut=!0;else if(!F.isSkinnedMesh&&we.skinning===!0)ut=!0;else if(F.isInstancedMesh&&we.instancingColor===!0&&F.instanceColor===null)ut=!0;else if(F.isInstancedMesh&&we.instancingColor===!1&&F.instanceColor!==null)ut=!0;else if(F.isInstancedMesh&&we.instancingMorph===!0&&F.morphTexture===null)ut=!0;else if(F.isInstancedMesh&&we.instancingMorph===!1&&F.morphTexture!==null)ut=!0;else if(we.envMap!==Oe)ut=!0;else if(O.fog===!0&&we.fog!==me)ut=!0;else if(we.numClippingPlanes!==void 0&&(we.numClippingPlanes!==W.numPlanes||we.numIntersection!==W.numIntersection))ut=!0;else if(we.vertexAlphas!==it)ut=!0;else if(we.vertexTangents!==_t)ut=!0;else if(we.morphTargets!==ke)ut=!0;else if(we.morphNormals!==xt)ut=!0;else if(we.morphColors!==Rt)ut=!0;else if(we.morphTargetsCount!==dt)ut=!0;else if(we.numLightProbeGrids!==Et(A.state.lightProbeGridArray))ut=!0;else if(we.outputColorSpace!==ce||we.toneMapping!==It)Xi=!0}else ut=!0,we.__version=O.version;let Qt=we.currentProgram;if(ut===!0||Xi===!0){if(Qt=Xi===!0?Nt(O,L,F,ce,It):gt(O,L,F),I&&O.isNodeMaterial)I.onUpdateProgram(O,Qt,we)}let dr=!1,xi=!1,$r=!1,wt=Qt.getUniforms(),_i=we.uniforms;if(Se.useProgram(Qt.program))dr=!0,xi=!0,$r=!0;if(O.id!==ge)ge=O.id,xi=!0;if(dr||X!==v){if(Se.buffers.depth.getReversed()&&v.reversedDepth!==!0)v._reversedDepth=!0,v.updateProjectionMatrix();wt.setValue(N,"projectionMatrix",v.projectionMatrix),wt.setValue(N,"viewMatrix",v.matrixWorldInverse);let hi=wt.map.cameraPosition;if(hi!==void 0)hi.setValue(N,Je.setFromMatrixPosition(v.matrixWorld));if(St.logarithmicDepthBuffer)wt.setValue(N,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2));if(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial)wt.setValue(N,"isOrthographic",v.isOrthographicCamera===!0);if(X!==v)X=v,xi=!0,$r=!0}if(we.needsLights){if(Gt.state.sunShadowMap.length>0)wt.setValue(N,"sunShadowMap",Gt.state.sunShadowMap,je);if(Gt.state.directionalShadowMap.length>0)wt.setValue(N,"directionalShadowMap",Gt.state.directionalShadowMap,je);if(Gt.state.spotShadowMap.length>0)wt.setValue(N,"spotShadowMap",Gt.state.spotShadowMap,je);if(Gt.state.pointShadowMap.length>0)wt.setValue(N,"pointShadowMap",Gt.state.pointShadowMap,je)}if(F.isSkinnedMesh){wt.setOptional(N,F,"bindMatrix"),wt.setOptional(N,F,"bindMatrixInverse");let Xt=F.skeleton;if(Xt){if(Xt.boneTexture===null)Xt.computeBoneTexture();wt.setValue(N,"boneTexture",Xt.boneTexture,je)}}if(F.isBatchedMesh){if(wt.setOptional(N,F,"batchingTexture"),wt.setValue(N,"batchingTexture",F._matricesTexture,je),wt.setOptional(N,F,"batchingIdTexture"),wt.setValue(N,"batchingIdTexture",F._indirectTexture,je),wt.setOptional(N,F,"batchingColorTexture"),F._colorsTexture!==null)wt.setValue(N,"batchingColorTexture",F._colorsTexture,je)}let or=k.morphAttributes;if(or.position!==void 0||or.normal!==void 0||or.color!==void 0)D.update(F,k,Qt);if(xi||we.receiveShadow!==F.receiveShadow)we.receiveShadow=F.receiveShadow,wt.setValue(N,"receiveShadow",F.receiveShadow);if((O.isMeshStandardMaterial||O.isMeshLambertMaterial||O.isMeshPhongMaterial)&&O.envMap===null&&L.environment!==null)_i.envMapIntensity.value=L.environmentIntensity;if(_i.dfgLUT!==void 0)_i.dfgLUT.value=bm();if(xi){if(wt.setValue(N,"toneMappingExposure",P.toneMappingExposure),we.needsLights)Bt(_i,$r);if(me&&O.fog===!0)ne.refreshFogUniforms(_i,me);if(ne.refreshMaterialUniforms(_i,O,Ze,He,A.state.transmissionRenderTarget[v.id]),we.needsLights&&we.numLightProbeGrids>0){let Xt=T,hi=0;for(let Mr of A.state.lightProbeGridArray){if(Mr.texture===null)continue;Xt.textures[hi]=Mr.texture,Xt.min[hi]=Mr.boundingBox.min,Xt.max[hi]=Mr.boundingBox.max,Xt.resolution[hi]=Mr.resolution,hi++}for(let Mr in Xt)Xt[Mr].length=hi;_i.probesSH.value=Xt.textures,_i.probesMin.value=Xt.min,_i.probesMax.value=Xt.max,_i.probesResolution.value=Xt.resolution}In.upload(N,yt(we),_i,je)}if(O.isShaderMaterial&&O.uniformsNeedUpdate===!0)In.upload(N,yt(we),_i,je),O.uniformsNeedUpdate=!1;if(O.isSpriteMaterial)wt.setValue(N,"center",F.center);if(wt.setValue(N,"modelViewMatrix",F.modelViewMatrix),wt.setValue(N,"normalMatrix",F.normalMatrix),wt.setValue(N,"modelMatrix",F.matrixWorld),O.uniformsGroups!==void 0){let Xt=O.uniformsGroups;for(let hi=0,Mr=Xt.length;hi<Mr;hi++){let Kc=Xt[hi];be.update(Kc,Qt),be.bind(Kc,Qt)}}return Qt}function Bt(v,L){v.ambientLightColor.needsUpdate=L,v.lightProbe.needsUpdate=L,v.sunLights.needsUpdate=L,v.sunLightShadows.needsUpdate=L,v.directionalLights.needsUpdate=L,v.directionalLightShadows.needsUpdate=L,v.pointLights.needsUpdate=L,v.pointLightShadows.needsUpdate=L,v.spotLights.needsUpdate=L,v.spotLightShadows.needsUpdate=L,v.rectAreaLights.needsUpdate=L,v.hemisphereLights.needsUpdate=L}function gi(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return Y},this.getActiveMipmapLevel=function(){return Q},this.getRenderTarget=function(){return G},this.setRenderTargetTextures=function(v,L,k){let O=$e.get(v);if(O.__autoAllocateDepthBuffer=v.resolveDepthBuffer===!1,O.__autoAllocateDepthBuffer===!1)O.__useRenderToTexture=!1;$e.get(v.texture).__webglTexture=L,$e.get(v.depthTexture).__webglTexture=O.__autoAllocateDepthBuffer?void 0:k,O.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(v,L){let k=$e.get(v);k.__webglFramebuffer=L,k.__useDefaultFramebuffer=L===void 0},this.setRenderTarget=function(v,L=0,k=0){G=v,Y=L,Q=k;let O=null,F=!1,me=!1;if(v){let ce=$e.get(v);if(ce.__useDefaultFramebuffer!==void 0){Se.bindFramebuffer(N.FRAMEBUFFER,ce.__webglFramebuffer),te.copy(v.viewport),ae.copy(v.scissor),Ue=v.scissorTest,Se.viewport(te),Se.scissor(ae),Se.setScissorTest(Ue),ge=-1;return}else if(ce.__webglFramebuffer===void 0)je.setupRenderTarget(v);else if(ce.__hasExternalTextures)je.rebindTextures(v,$e.get(v.texture).__webglTexture,$e.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){let it=v.depthTexture;if(ce.__boundDepthTexture!==it){if(it!==null&&$e.has(it)&&(v.width!==it.image.width||v.height!==it.image.height))throw Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");je.setupDepthRenderbuffer(v)}}let Ee=v.texture;if(Ee.isData3DTexture||Ee.isDataArrayTexture||Ee.isCompressedArrayTexture)me=!0;let Oe=$e.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget){if(Array.isArray(Oe[L]))O=Oe[L][k];else O=Oe[L];F=!0}else if(v.samples>0&&je.useMultisampledRTT(v)===!1)O=$e.get(v).__webglMultisampledFramebuffer;else if(Array.isArray(Oe))O=Oe[k];else O=Oe;te.copy(v.viewport),ae.copy(v.scissor),Ue=v.scissorTest}else te.copy(lt).multiplyScalar(Ze).floor(),ae.copy(Pe).multiplyScalar(Ze).floor(),Ue=ot;if(k!==0)O=U;if(Se.bindFramebuffer(N.FRAMEBUFFER,O))Se.drawBuffers(v,O);if(Se.viewport(te),Se.scissor(ae),Se.setScissorTest(Ue),F){let ce=$e.get(v.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+L,ce.__webglTexture,k)}else if(me){let ce=L;for(let Ee=0;Ee<v.textures.length;Ee++){let Oe=$e.get(v.textures[Ee]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+Ee,Oe.__webglTexture,k,ce)}}else if(v!==null&&k!==0){let ce=$e.get(v.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,ce.__webglTexture,k)}ge=-1};function ti(v){let L=$e.get(v);if(L.__readFormat!==v.format||L.__readType!==v.type)L.__readFormat=v.format,L.__readType=v.type,L.__formatReadable=St.textureFormatReadable(v.format),L.__typeReadable=St.textureTypeReadable(v.type);return L}if(this.readRenderTargetPixels=function(v,L,k,O,F,me,Ce,ce=0){if(!(v&&v.isWebGLRenderTarget)){Be("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ee=$e.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&Ce!==void 0){if(Ee=Ee[Ce],Array.isArray(Ee))Ee=Ee[0]}if(Ee){Se.bindFramebuffer(N.FRAMEBUFFER,Ee);try{let Oe=v.textures[ce],{format:it,type:_t}=Oe;if(v.textures.length>1)N.readBuffer(N.COLOR_ATTACHMENT0+ce);let ke=ti(Oe);if(ke.__formatReadable===!1){Be("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(ke.__typeReadable===!1){Be("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}if(L>=0&&L<=v.width-O&&(k>=0&&k<=v.height-F))N.readPixels(L,k,O,F,he.convert(it),he.convert(_t),me)}finally{let Oe=G!==null?$e.get(G).__webglFramebuffer:null;Se.bindFramebuffer(N.FRAMEBUFFER,Oe)}}},this.readRenderTargetPixelsAsync=async function(v,L,k,O,F,me,Ce,ce=0){if(!(v&&v.isWebGLRenderTarget))throw Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ee=$e.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&Ce!==void 0){if(Ee=Ee[Ce],Array.isArray(Ee))Ee=Ee[0]}if(Ee)if(L>=0&&L<=v.width-O&&(k>=0&&k<=v.height-F)){Se.bindFramebuffer(N.FRAMEBUFFER,Ee);let Oe=v.textures[ce],{format:it,type:_t}=Oe;if(v.textures.length>1)N.readBuffer(N.COLOR_ATTACHMENT0+ce);let ke=ti(Oe);if(ke.__formatReadable===!1)throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(ke.__typeReadable===!1)throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let xt=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,xt),N.bufferData(N.PIXEL_PACK_BUFFER,me.byteLength,N.STREAM_READ),N.readPixels(L,k,O,F,he.convert(it),he.convert(_t),0),N.bindBuffer(N.PIXEL_PACK_BUFFER,null);let Rt=G!==null?$e.get(G).__webglFramebuffer:null;Se.bindFramebuffer(N.FRAMEBUFFER,Rt);let It=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await Ih(N,It,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,xt),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,me),N.bindBuffer(N.PIXEL_PACK_BUFFER,null),N.deleteBuffer(xt),N.deleteSync(It),me}else throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(v,L=null,k=0){let O=Math.pow(2,-k),F=Math.floor(v.image.width*O),me=Math.floor(v.image.height*O),Ce=L!==null?L.x:0,ce=L!==null?L.y:0;je.setTexture2D(v,0),N.copyTexSubImage2D(N.TEXTURE_2D,k,0,0,Ce,ce,F,me),Se.unbindTexture()},this.copyTextureToTexture=function(v,L,k=null,O=null,F=0,me=0){let Ce,ce,Ee,Oe,it,_t,ke,xt,Rt,It=v.isCompressedTexture?v.mipmaps[me]:v.image;if(k!==null)Ce=k.max.x-k.min.x,ce=k.max.y-k.min.y,Ee=k.isBox3?k.max.z-k.min.z:1,Oe=k.min.x,it=k.min.y,_t=k.isBox3?k.min.z:0;else{let wt=Math.pow(2,-F);if(Ce=Math.floor(v.width*wt),ce=Math.floor(v.height*wt),v.isDataArrayTexture)Ee=It.depth;else if(v.isData3DTexture)Ee=Math.floor(It.depth*wt);else Ee=1;Oe=0,it=0,_t=0}if(O!==null)ke=O.x,xt=O.y,Rt=O.z;else ke=0,xt=0,Rt=0;let ze=he.convert(L.format),dt=he.convert(L.type),we;if(L.isData3DTexture)je.setTexture3D(L,0),we=N.TEXTURE_3D;else if(L.isDataArrayTexture||L.isCompressedArrayTexture)je.setTexture2DArray(L,0),we=N.TEXTURE_2D_ARRAY;else je.setTexture2D(L,0),we=N.TEXTURE_2D;Se.activeTexture(N.TEXTURE0),Se.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,L.flipY),Se.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),Se.pixelStorei(N.UNPACK_ALIGNMENT,L.unpackAlignment);let Gt=Se.getParameter(N.UNPACK_ROW_LENGTH),ut=Se.getParameter(N.UNPACK_IMAGE_HEIGHT),Xi=Se.getParameter(N.UNPACK_SKIP_PIXELS),Qt=Se.getParameter(N.UNPACK_SKIP_ROWS),dr=Se.getParameter(N.UNPACK_SKIP_IMAGES);Se.pixelStorei(N.UNPACK_ROW_LENGTH,It.width),Se.pixelStorei(N.UNPACK_IMAGE_HEIGHT,It.height),Se.pixelStorei(N.UNPACK_SKIP_PIXELS,Oe),Se.pixelStorei(N.UNPACK_SKIP_ROWS,it),Se.pixelStorei(N.UNPACK_SKIP_IMAGES,_t);let xi=v.isDataArrayTexture||v.isData3DTexture,$r=L.isDataArrayTexture||L.isData3DTexture;if(v.isDepthTexture){let wt=$e.get(v),_i=$e.get(L),or=$e.get(wt.__renderTarget),Xt=$e.get(_i.__renderTarget);Se.bindFramebuffer(N.READ_FRAMEBUFFER,or.__webglFramebuffer),Se.bindFramebuffer(N.DRAW_FRAMEBUFFER,Xt.__webglFramebuffer);for(let hi=0;hi<Ee;hi++){if(xi)N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,$e.get(v).__webglTexture,F,_t+hi),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,$e.get(L).__webglTexture,me,Rt+hi);N.blitFramebuffer(Oe,it,Oe+Ce,it+ce,ke,xt,ke+Ce,xt+ce,N.DEPTH_BUFFER_BIT,N.NEAREST)}Se.bindFramebuffer(N.READ_FRAMEBUFFER,null),Se.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(F!==0||v.isRenderTargetTexture||$e.has(v)){let wt=$e.get(v),_i=$e.get(L);Se.bindFramebuffer(N.READ_FRAMEBUFFER,j),Se.bindFramebuffer(N.DRAW_FRAMEBUFFER,C);for(let or=0;or<Ee;or++){if(xi)N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,wt.__webglTexture,F,_t+or);else N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,wt.__webglTexture,F);if($r)N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,_i.__webglTexture,me,Rt+or);else N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,_i.__webglTexture,me);if(F!==0)N.blitFramebuffer(Oe,it,Oe+Ce,it+ce,ke,xt,ke+Ce,xt+ce,N.COLOR_BUFFER_BIT,N.NEAREST);else if($r)N.copyTexSubImage3D(we,me,ke,xt,Rt+or,Oe,it,Ce,ce);else N.copyTexSubImage2D(we,me,ke,xt,Oe,it,Ce,ce)}Se.bindFramebuffer(N.READ_FRAMEBUFFER,null),Se.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if($r)if(v.isDataTexture||v.isData3DTexture)N.texSubImage3D(we,me,ke,xt,Rt,Ce,ce,Ee,ze,dt,It.data);else if(L.isCompressedArrayTexture)N.compressedTexSubImage3D(we,me,ke,xt,Rt,It.width,It.height,Ee,ze,It.data);else N.texSubImage3D(we,me,ke,xt,Rt,Ce,ce,Ee,ze,dt,It);else if(v.isDataTexture)N.texSubImage2D(N.TEXTURE_2D,me,ke,xt,Ce,ce,ze,dt,It.data);else if(v.isCompressedTexture)N.compressedTexSubImage2D(N.TEXTURE_2D,me,ke,xt,It.width,It.height,ze,It.data);else N.texSubImage2D(N.TEXTURE_2D,me,ke,xt,Ce,ce,ze,dt,It);if(Se.pixelStorei(N.UNPACK_ROW_LENGTH,Gt),Se.pixelStorei(N.UNPACK_IMAGE_HEIGHT,ut),Se.pixelStorei(N.UNPACK_SKIP_PIXELS,Xi),Se.pixelStorei(N.UNPACK_SKIP_ROWS,Qt),Se.pixelStorei(N.UNPACK_SKIP_IMAGES,dr),me===0&&L.generateMipmaps===!0&&L.mipmapsAutoUpdate===!0)N.generateMipmap(we);Se.unbindTexture()},this.initRenderTarget=function(v){if($e.get(v).__webglFramebuffer===void 0)je.setupRenderTarget(v)},this.initTexture=function(v){if(v.isCubeTexture)je.setTextureCube(v,0);else if(v.isData3DTexture)je.setTexture3D(v,0);else if(v.isDataArrayTexture||v.isCompressedArrayTexture)je.setTexture2DArray(v,0);else je.setTexture2D(v,0);Se.unbindTexture()},this.resetState=function(){Y=0,Q=0,G=null,Se.reset(),xe.reset()},typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return fi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=rt._getDrawingBufferColorSpace(e),t.unpackColorSpace=rt._getUnpackColorSpace()}}var Ns={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class nr{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}var i_=new Dr(-1,1,1,-1,0,1);class Tm extends Xe{constructor(){super();this.setAttribute("position",new Ge([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Ge([0,2,0,0,2,0],2))}}var r_=new Tm;class Ln{constructor(e){this._mesh=new et(r_,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,i_)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class Wc extends nr{constructor(e,t="tDiffuse"){super();if(this.textureID=t,this.uniforms=null,this.material=null,e instanceof Dt)this.uniforms=e.uniforms,this.material=e;else if(e)this.uniforms=ir.clone(e.uniforms),this.material=new Dt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader});this._fsQuad=new Ln(this.material)}render(e,t,i){if(this.uniforms[this.textureID])this.uniforms[this.textureID].value=i.texture;if(this._fsQuad.material=this.material,this.renderToScreen)e.setRenderTarget(null),this._fsQuad.render(e);else{if(e.setRenderTarget(t),this.clear)e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil);this._fsQuad.render(e)}}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class Nl extends nr{constructor(e,t){super();this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){let r=e.getContext(),n=e.state;n.buffers.color.setMask(!1),n.buffers.depth.setMask(!1),n.buffers.color.setLocked(!0),n.buffers.depth.setLocked(!0);let s,o;if(this.inverse)s=0,o=1;else s=1,o=0;if(n.buffers.stencil.setTest(!0),n.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),n.buffers.stencil.setFunc(r.ALWAYS,s,4294967295),n.buffers.stencil.setClear(o),n.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear)e.clear();if(e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear)e.clear();e.render(this.scene,this.camera),n.buffers.color.setLocked(!1),n.buffers.depth.setLocked(!1),n.buffers.color.setMask(!0),n.buffers.depth.setMask(!0),n.buffers.stencil.setLocked(!1),n.buffers.stencil.setFunc(r.EQUAL,1,4294967295),n.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),n.buffers.stencil.setLocked(!0)}}class Xc extends nr{constructor(){super();this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class qc{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let i=e.getSize(new H);this._width=i.width,this._height=i.height,t=new Lt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Ut}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Wc(Ns),this.copyPass.material.blending=Yi,this.timer=new oa}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);if(t!==-1)this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){if(this.timer.update(),e===void 0)e=this.timer.getDelta();let t=this.renderer.getRenderTarget(),i=!1;for(let r=0,n=this.passes.length;r<n;r++){let s=this.passes[r];if(s.enabled===!1)continue;if(s.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),s.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),s.needsSwap){if(i){let o=this.renderer.getContext(),a=this.renderer.state.buffers.stencil;a.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),a.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}if(Nl!==void 0){if(s instanceof Nl)i=!0;else if(s instanceof Xc)i=!1}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new H);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let i=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(i,r),this.renderTarget2.setSize(i,r);for(let n=0;n<this.passes.length;n++)this.passes[n].setSize(i,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Yc extends nr{constructor(e,t,i=null,r=null,n=null){super();this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=r,this.clearAlpha=n,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new de}render(e,t,i){let r=e.autoClear;e.autoClear=!1;let n,s;if(this.overrideMaterial!==null)s=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial;if(this.clearColor!==null)e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha());if(this.clearAlpha!==null)n=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha);if(this.clearDepth==!0)e.clearDepth();if(e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0)e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil);if(e.render(this.scene,this.camera),this.clearColor!==null)e.setClearColor(this._oldClearColor);if(this.clearAlpha!==null)e.setClearAlpha(n);if(this.overrideMaterial!==null)this.scene.overrideMaterial=s;e.autoClear=r}}var Em={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new de(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class Dn extends nr{constructor(e,t=1,i,r){super();this.strength=t,this.radius=i,this.threshold=r,this.resolution=e!==void 0?new H(e.x,e.y):new H(256,256),this.clearColor=new de(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let n=Math.round(this.resolution.x/2),s=Math.round(this.resolution.y/2);this.renderTargetBright=new Lt(n,s,{type:Ut,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let c=0;c<this.nMips;c++){let u=new Lt(n,s,{type:Ut,depthBuffer:!1});u.texture.name="UnrealBloomPass.h"+c,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);let f=new Lt(n,s,{type:Ut,depthBuffer:!1});f.texture.name="UnrealBloomPass.v"+c,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),n=Math.round(n/2),s=Math.round(s/2)}let o=Em;this.highPassUniforms=ir.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=r,this.highPassUniforms.smoothWidth.value=0.01,this.materialHighPassFilter=new Dt({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let a=[6,10,14,18,22];n=Math.round(this.resolution.x/2),s=Math.round(this.resolution.y/2);for(let c=0;c<this.nMips;c++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(a[c])),this.separableBlurMaterials[c].uniforms.invSize.value=new H(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=0.1;let l=[1,0.8,0.6,0.4,0.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new w(1,1,1),new w(1,1,1),new w(1,1,1),new w(1,1,1),new w(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=ir.clone(Ns.uniforms),this.blendMaterial=new Dt({uniforms:this.copyUniforms,vertexShader:Ns.vertexShader,fragmentShader:Ns.fragmentShader,premultipliedAlpha:!0,blending:Sr,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new de,this._oldClearAlpha=1,this._basic=new Jt,this._fsQuad=new Ln(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),r=Math.round(t/2);this.renderTargetBright.setSize(i,r);for(let n=0;n<this.nMips;n++)this.renderTargetsHorizontal[n].setSize(i,r),this.renderTargetsVertical[n].setSize(i,r),this.separableBlurMaterials[n].uniforms.invSize.value=new H(1/i,1/r),i=Math.round(i/2),r=Math.round(r/2)}render(e,t,i,r,n){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();let s=e.autoClear;if(e.autoClear=!1,e.setClearColor(this.clearColor,0),n)e.state.buffers.stencil.setTest(!1);if(this.renderToScreen)this._fsQuad.material=this._basic,this._basic.map=i.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e);this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let o=this.renderTargetBright;for(let a=0;a<this.nMips;a++)this._fsQuad.material=this.separableBlurMaterials[a],this.separableBlurMaterials[a].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[a].uniforms.direction.value=Dn.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[a]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[a].uniforms.colorTexture.value=this.renderTargetsHorizontal[a].texture,this.separableBlurMaterials[a].uniforms.direction.value=Dn.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[a]),e.clear(),this._fsQuad.render(e),o=this.renderTargetsVertical[a];if(this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,n)e.state.buffers.stencil.setTest(!0);if(this.renderToScreen)e.setRenderTarget(null),this._fsQuad.render(e);else e.setRenderTarget(i),this._fsQuad.render(e);e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=s}_getSeparableBlurMaterial(e){let t=[],i=e/3;for(let s=0;s<e;s++)t.push(0.39894*Math.exp(-0.5*s*s/(i*i))/i);let r=[],n=[];for(let s=1;s<e;s+=2){let o=t[s],a=s+1<e?t[s+1]:0,l=o+a;r.push((s*o+(s+1)*a)/l),n.push(l)}return new Dt({defines:{KERNEL_PAIRS:r.length},uniforms:{colorTexture:{value:null},invSize:{value:new H(0.5,0.5)},direction:{value:new H(0.5,0.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:r},gaussianWeights:{value:n}},vertexShader:`

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

				}`})}_getCompositeMaterial(e){return new Dt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

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

				}`})}}Dn.BlurDirectionX=new H(1,0);Dn.BlurDirectionY=new H(0,1);var ha={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class Zc extends nr{constructor(){super();this.isOutputPass=!0,this.uniforms=ir.clone(ha.uniforms),this.material=new wn({name:ha.name,uniforms:this.uniforms,vertexShader:ha.vertexShader,fragmentShader:ha.fragmentShader}),this._fsQuad=new Ln(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,i){if(this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping){if(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},rt.getTransfer(this._outputColorSpace)===vt)this.material.defines.SRGB_TRANSFER="";if(this._toneMapping===Fn)this.material.defines.LINEAR_TONE_MAPPING="";else if(this._toneMapping===Bn)this.material.defines.REINHARD_TONE_MAPPING="";else if(this._toneMapping===On)this.material.defines.CINEON_TONE_MAPPING="";else if(this._toneMapping===Br)this.material.defines.ACES_FILMIC_TONE_MAPPING="";else if(this._toneMapping===Gn)this.material.defines.AGX_TONE_MAPPING="";else if(this._toneMapping===Vn)this.material.defines.NEUTRAL_TONE_MAPPING="";else if(this._toneMapping===zn)this.material.defines.CUSTOM_TONE_MAPPING="";this.material.needsUpdate=!0}if(this.renderToScreen===!0)e.setRenderTarget(null),this._fsQuad.render(e);else{if(e.setRenderTarget(t),this.clear)e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil);this._fsQuad.render(e)}}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class Jc extends pn{constructor(){super();this.name="RoomEnvironment",this.position.y=-3.5;let e=new Ui;e.deleteAttribute("uv");let t=new Ai({side:Vt}),i=new Ai,r=new Lr(16777215,900,28,2);r.position.set(0.418,16.199,0.3),this.add(r);let n=new et(e,t);n.position.set(-0.757,13.219,0.717),n.scale.set(31.713,28.305,28.591),this.add(n);let s=new Oo(e,i,6),o=new nt;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-0.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),s.setMatrixAt(0,o.matrix),o.position.set(-5.607,-0.754,-0.758),o.rotation.set(0,0.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),s.setMatrixAt(1,o.matrix),o.position.set(6.167,0.857,7.803),o.rotation.set(0,0.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),s.setMatrixAt(2,o.matrix),o.position.set(-2.017,0.018,6.124),o.rotation.set(0,0.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),s.setMatrixAt(3,o.matrix),o.position.set(2.291,-0.756,-2.621),o.rotation.set(0,-0.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),s.setMatrixAt(4,o.matrix),o.position.set(-2.193,-0.369,-5.547),o.rotation.set(0,0.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),s.setMatrixAt(5,o.matrix),this.add(s);let a=new et(e,Us(50));a.position.set(-16.116,14.37,8.208),a.scale.set(0.1,2.428,2.739),this.add(a);let l=new et(e,Us(50));l.position.set(-16.109,18.021,-8.207),l.scale.set(0.1,2.425,2.751),this.add(l);let c=new et(e,Us(17));c.position.set(14.904,12.198,-1.832),c.scale.set(0.15,4.265,6.331),this.add(c);let u=new et(e,Us(43));u.position.set(-0.462,8.89,14.52),u.scale.set(4.38,5.441,0.088),this.add(u);let f=new et(e,Us(20));f.position.set(3.235,11.486,-12.541),f.scale.set(2.5,2,0.1),this.add(f);let h=new et(e,Us(100));h.position.set(0,20,0),h.scale.set(1,0.1,1),this.add(h)}dispose(){let e=new Set;this.traverse((t)=>{if(t.isMesh)e.add(t.geometry),e.add(t.material)});for(let t of e)t.dispose()}}function Us(e){return new jo({color:0,emissive:16777215,emissiveIntensity:e})}class ua extends et{constructor(e,t={}){super(e);this.isReflector=!0,this.type="Reflector",this.forceUpdate=!1,this._reflectionCameras=new WeakMap;let i=this,r=t.color!==void 0?new de(t.color):new de(8355711),n=t.textureWidth||512,s=t.textureHeight||512,o=t.clipBias||0,a=t.shader||ua.ReflectorShader,l=t.multisample!==void 0?t.multisample:4,c=new Ii,u=new w,f=new w,h=new w,d=new Ye,x=new w(0,0,-1),y=new Mt,p=new w,m=new w,b=new Mt,T=new Ye,M=new Lt(n,s,{samples:l,type:Ut}),A=new Dt({name:a.name!==void 0?a.name:"unspecified",uniforms:ir.clone(a.uniforms),fragmentShader:a.fragmentShader,vertexShader:a.vertexShader});A.uniforms.tDiffuse.value=M.texture,A.uniforms.color.value=r,A.uniforms.textureMatrix.value=T,this.material=A,this.onBeforeRender=function(R,g,S){let P=this.getReflectionCamera(S);if(f.setFromMatrixPosition(i.matrixWorld),h.setFromMatrixPosition(S.matrixWorld),d.extractRotation(i.matrixWorld),u.set(0,0,1),u.applyMatrix4(d),p.subVectors(f,h),p.dot(u)>0===!0&&this.forceUpdate===!1)return;p.reflect(u).negate(),p.add(f),d.extractRotation(S.matrixWorld),x.set(0,0,-1),x.applyMatrix4(d),x.add(h),m.subVectors(f,x),m.reflect(u).negate(),m.add(f),P.position.copy(p),P.up.set(0,1,0),P.up.applyMatrix4(d),P.up.reflect(u),P.lookAt(m),P.far=S.far,P.updateMatrixWorld(),P.projectionMatrix.copy(S.projectionMatrix),P.projectionMatrix.elements[8]*=-1,P.projectionMatrix.elements[12]*=-1,T.set(0.5,0,0,0.5,0,0.5,0,0.5,0,0,0.5,0.5,0,0,0,1),T.multiply(P.projectionMatrix),T.multiply(P.matrixWorldInverse),T.multiply(i.matrixWorld),c.setFromNormalAndCoplanarPoint(u,f),c.applyMatrix4(P.matrixWorldInverse),y.set(c.normal.x,c.normal.y,c.normal.z,c.constant);let I=P.projectionMatrix;if(P.isOrthographicCamera)b.x=(Math.sign(y.x)+I.elements[8])/I.elements[0],b.y=(Math.sign(y.y)+I.elements[9])/I.elements[5],b.z=-S.far,b.w=1;else b.x=(Math.sign(y.x)+I.elements[8])/I.elements[0],b.y=(Math.sign(y.y)+I.elements[9])/I.elements[5],b.z=-1,b.w=(1+I.elements[10])/I.elements[14];if(y.multiplyScalar(2/y.dot(b)),I.elements[2]=y.x,I.elements[6]=y.y,P.isOrthographicCamera)I.elements[10]=y.z-o,I.elements[14]=y.w-1;else I.elements[10]=y.z+1-o,I.elements[14]=y.w;i.visible=!1;let U=R.getRenderTarget(),j=R.xr.enabled,C=R.shadowMap.autoUpdate;if(R.xr.enabled=!1,R.shadowMap.autoUpdate=!1,R.setRenderTarget(M),R.state.buffers.depth.setMask(!0),R.autoClear===!1)R.clear();R.render(g,P),R.xr.enabled=j,R.shadowMap.autoUpdate=C,R.setRenderTarget(U);let Y=S.viewport;if(Y!==void 0)R.state.viewport(Y);i.visible=!0,this.forceUpdate=!1},this.getRenderTarget=function(){return M},this.dispose=function(){M.dispose(),i.material.dispose()},this.getReflectionCamera=function(R){let g=this._reflectionCameras.get(R);if(g===void 0)g=R.clone(),this._reflectionCameras.set(R,g);return g}}}ua.ReflectorShader={name:"ReflectorShader",uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null}},vertexShader:`
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

		}`};(function(){let e=document.documentElement,t=document.getElementById("hall"),i=document.getElementById("hallCv");if(!t||!i)return;let r=(s)=>{try{console.warn("hall",s)}catch(o){}e.classList.remove("hallon"),window.__hall=null};try{n()}catch(s){r(s)}function n(){let s=window.__hallT={t0:performance.now()},o=matchMedia("(pointer: coarse)").matches,a=/[?&]lite=1/.test(location.search),l=o||/[?&]low=1/.test(location.search),c=l?0.5:1,u=matchMedia("(prefers-reduced-motion: reduce)").matches,f=document.body,h=(B)=>document.getElementById(B),d=new Dl({canvas:i,antialias:!1,powerPreference:"high-performance"});d.toneMapping=Br,d.toneMappingExposure=1.1;let x=new pn;if(function(){let B=document.createElement("canvas");B.width=16,B.height=512;let q=B.getContext("2d"),se=q.createLinearGradient(0,0,0,512);se.addColorStop(0,"#05030d"),se.addColorStop(0.55,"#1d0b33"),se.addColorStop(0.72,"#4a1560"),se.addColorStop(1,"#10081c"),q.fillStyle=se,q.fillRect(0,0,16,512);let K=new er(B);K.colorSpace=qt,x.background=K}(),!l){let B=new Qr(d);x.environment=B.fromScene(new Jc,0.04).texture,x.environmentIntensity=0.5}x.fog=new hs(1706542,9,26);let y=new Zt(30,1.7777777777777777,0.1,60);{let B=[];for(let se=0;se<400;se++){let K=Math.random()*Math.PI*2,Ne=20+Math.random()*10;B.push(Math.cos(K)*Ne,3+Math.random()*12,-18-Math.random()*8)}let q=new Xe;q.setAttribute("position",new Ge(B,3)),x.add(new Go(q,new Mn({color:16777215,size:0.05,fog:!1,sizeAttenuation:!0})))}let p=null;if(l){let B=new et(new tr(60,60),new Jt({color:1444390}));B.rotation.x=-Math.PI/2,x.add(B)}else p=new ua(new tr(60,60),{textureWidth:512,textureHeight:512,color:5592422,clipBias:0.003});let m=0,b=!1;if(p){p.rotation.x=-Math.PI/2,x.add(p);let B=p.onBeforeRender;p.onBeforeRender=function(){if(b||m++%4!==0)return;B.apply(this,arguments)}}if(!l){let B=new et(new tr(60,60),new Jt({color:919066,transparent:!0,opacity:0.78,depthWrite:!1}));B.rotation.x=-Math.PI/2,B.position.y=0.002,x.add(B)}let T={uAge:{value:-1},uAmp:{value:0.13},uC:{value:new H(0,0)},uCol:{value:new de(16732070)}};{let K=[];for(let gt=-26;gt<=26.000001;gt+=0.5)for(let Nt=-26;Nt<25.999999;Nt+=0.25)K.push(gt,0,Nt,gt,0,Nt+0.25),K.push(Nt,0,gt,Nt+0.25,0,gt);let Ne=new Xe;Ne.setAttribute("position",new Ge(K,3));let Ve=new Dt({transparent:!0,depthWrite:!1,uniforms:T,vertexShader:`uniform float uAge,uAmp; uniform vec2 uC; varying float vA; varying float vW;
        void main(){ vec3 p=position; float r=length(p.xz-uC); float x=r-uAge*9.0;
          float env=uAge<0.0?0.0:exp(-x*x/1.6)*exp(-uAge*.9); p.y+=.004+uAmp*env*sin(x*4.5);
          vW=env; vec4 mv=modelViewMatrix*vec4(p,1.); gl_Position=projectionMatrix*mv;
          float d=length(mv.xyz); vA=1.-smoothstep(9.,26.,d); }`,fragmentShader:`uniform vec3 uCol; varying float vA; varying float vW;
        void main(){ gl_FragColor=vec4(uCol*(1.15+vW*3.),vA*(.7+.6*vW)); }`}),Et=new Ni(Ne,Ve);Et.frustumCulled=!1,x.add(Et)}let M={uAge:{value:-1}};{let Ne=function(Pt,ri,Bt,gi){se.push(Pt[0],0.012,Pt[1],ri[0],0.012,ri[1]),K.push(Bt,gi)},Ve=function(Pt,ri,Bt,gi,ti,v){let L=Pt,k=ri,O=7;for(let F=0;F<O;F++){Bt+=(q()-0.5)*1.2;let me=gi/O,Ce=L+Math.cos(Bt)*me,ce=k+Math.sin(Bt)*me,Ee=ti+F/O*(1-ti),Oe=ti+(F+1)/O*(1-ti);if(Ne([L,k],[Ce,ce],Ee,Oe),v<1&&q()<0.5&&F>1)Ve(Ce,ce,Bt+(q()<0.5?-1:1)*(0.5+q()*0.6),gi*0.4,Oe,v+1);L=Ce,k=ce}},B=7,q=()=>(B=B*16807%2147483647)/2147483647,se=[],K=[],Et=17;for(let Pt=0;Pt<Et;Pt++)Ve(0,0,Pt/Et*Math.PI*2+q()*0.3,1+q()*1.6,0,0);let gt=new Xe;gt.setAttribute("position",new Ge(se,3)),gt.setAttribute("along",new Ge(K,1));let Nt=new Dt({transparent:!0,depthWrite:!1,blending:Sr,uniforms:M,vertexShader:"attribute float along; varying float vT; void main(){ vT=along; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.); }",fragmentShader:`uniform float uAge; varying float vT;
        void main(){ if(uAge<0.) discard; float grow=clamp(uAge/.5,0.,1.); grow=1.-pow(1.-grow,2.); if(vT>grow) discard;
          float fade=1.-smoothstep(1.6,3.8,uAge); float hot=1.-smoothstep(0.,1.,vT);
          vec3 c=mix(vec3(1.,.25,.62),vec3(1.,.9,.97),hot*.8*(1.-smoothstep(0.,1.2,uAge)));
          gl_FragColor=vec4(c*2.2*fade,1.); }`}),yt=new Ni(gt,Nt);yt.frustumCulled=!1,yt.name="cracks",x.add(yt),window.__cracks=yt}function A(B,q){let se=document.createElement("canvas");se.width=512*c,se.height=512*c;let K=se.getContext("2d");if(K.scale(c,c),K.fillStyle="#070418",K.fillRect(0,0,512,512),B===1)for(let Ve=0;Ve<6;Ve++)for(let Et=0;Et<4;Et++){if((Ve+Et)%3===0)continue;K.fillStyle=q,K.globalAlpha=0.3+0.1*Ve,K.fillRect(66+Et*100,230+Ve*44,88,36)}if(B===2){K.strokeStyle=q,K.lineWidth=6;for(let Ve=1;Ve<6;Ve++)K.globalAlpha=1-Ve*0.14,K.beginPath(),K.arc(256,290,Ve*52,0,7),K.stroke()}if(B===3)K.fillStyle=q,K.fillRect(46,200,18,120),K.fillRect(448,280,18,120),K.fillStyle="#fff",K.beginPath(),K.arc(290,250,11,0,7),K.fill();K.globalAlpha=1,K.fillStyle=q,K.textAlign="center",K.font="800 40px Inter,Arial,sans-serif",K.fillText("COMING SOON",256,100);let Ne=new er(se);return Ne.colorSpace=qt,Ne.anisotropy=8,Ne}function R(B,q){let se=document.createElement("canvas");se.width=1024*c,se.height=256*c;let K=se.getContext("2d");K.scale(c,c),K.fillStyle="#0b0410",K.fillRect(0,0,1024,256);let Ne=K.createLinearGradient(0,0,0,256);Ne.addColorStop(0,"rgba(255,255,255,.07)"),Ne.addColorStop(1,"rgba(255,255,255,0)"),K.fillStyle=Ne,K.fillRect(0,0,1024,256),K.font="900 150px Inter,Arial,sans-serif",K.textAlign="center",K.textBaseline="middle",K.shadowColor=q,K.shadowBlur=40,K.fillStyle="#fff",K.letterSpacing="18px",K.fillText(B,521,138),K.shadowBlur=18,K.fillText(B,521,138),K.strokeStyle=q,K.lineWidth=10,K.shadowBlur=24,K.strokeRect(10,10,1004,236);let Ve=new er(se);return Ve.colorSpace=qt,Ve.anisotropy=8,Ve}function g(B,q){let se=document.createElement("canvas");se.width=1024*c,se.height=1024*c;let K=se.getContext("2d");K.scale(c,c),K.clearRect(0,0,1024,1024),K.strokeStyle=B,K.lineWidth=26,K.shadowColor=B,K.shadowBlur=30,K.beginPath(),K.moveTo(-50,760),K.lineTo(1100,360),K.stroke(),K.lineWidth=10,K.beginPath(),K.moveTo(-50,820),K.lineTo(1100,420),K.stroke(),K.shadowBlur=0,K.fillStyle="rgba(255,255,255,.85)",K.font="900 150px Inter,Arial",K.save(),K.translate(120,330),K.rotate(-Math.PI/2),K.fillText(q,0,0),K.restore();let Ne=new er(se);return Ne.colorSpace=qt,Ne.anisotropy=8,Ne}function S(){let B=document.createElement("canvas");B.width=256*c,B.height=256*c;let q=B.getContext("2d");q.scale(c,c);let se=q.createRadialGradient(128,110,10,128,128,128);se.addColorStop(0,"#ff9fd0"),se.addColorStop(0.7,"#ff4fa6"),se.addColorStop(1,"#c21a72"),q.fillStyle=se,q.beginPath(),q.arc(128,128,126,0,7),q.fill(),q.fillStyle="#fff",q.font="900 74px Inter,Arial,sans-serif",q.textAlign="center",q.textBaseline="middle",q.letterSpacing="1px",q.shadowColor="rgba(120,0,60,.6)",q.shadowBlur=6,q.fillText("START",129,134);let K=new er(B);return K.colorSpace=qt,K.anisotropy=8,K}let P=function(){let B=document.createElement("canvas");B.width=256,B.height=256;let q=B.getContext("2d"),se=q.createLinearGradient(0,0,256,256);return se.addColorStop(0,"rgba(255,255,255,.20)"),se.addColorStop(0.35,"rgba(255,255,255,.04)"),se.addColorStop(0.36,"rgba(255,255,255,0)"),se.addColorStop(1,"rgba(255,255,255,0)"),q.fillStyle=se,q.fillRect(0,0,256,256),new er(B)}(),V=function(){let B=document.createElement("canvas");B.width=128,B.height=128;let q=B.getContext("2d"),se=q.createRadialGradient(64,64,4,64,64,64);return se.addColorStop(0,"rgba(0,0,0,.75)"),se.addColorStop(1,"rgba(0,0,0,0)"),q.fillStyle=se,q.fillRect(0,0,128,128),new er(B)}(),I=document.createElement("canvas");I.width=512*c,I.height=512*c;let U=I.getContext("2d");U.scale(c,c);let j=new er(I);j.colorSpace=qt,j.anisotropy=8;let C=[];for(let B=0;B<40;B++)C.push([Math.random()*512,Math.random()*400,Math.random()*2+1,Math.random()*6]);let Y=[];for(let B=0;B<9;B++)Y.push([30+B*56+Math.random()*20,Math.random()*500,1.6+Math.random()*1.2,B%3]);function Q(B){let q=U.createLinearGradient(0,0,0,512);q.addColorStop(0,"#060c1f"),q.addColorStop(1,"#0e1c45"),U.fillStyle=q,U.fillRect(0,0,512,512),C.forEach((Ne)=>{U.globalAlpha=0.35+0.35*Math.sin(B*1.5+Ne[3]),U.fillStyle="#8fa8ff",U.fillRect(Ne[0],Ne[1],Ne[2],Ne[2])}),U.globalAlpha=1;let se=["#c6e4ff","#43c6ff","#b6ff3c"];Y.forEach((Ne)=>{let Ve=(Ne[1]+B*55*Ne[2])%540-20;U.fillStyle=se[Ne[3]],U.globalAlpha=0.55,U.fillRect(Ne[0],Ve-22,3,22),U.globalAlpha=0.9,U.fillRect(Ne[0]-4,Ve,11,11)}),U.globalAlpha=1,U.fillStyle="#16264f",U.fillRect(0,452,512,60),U.fillStyle="#4b6fb5",U.fillRect(0,450,512,3);let K=256+Math.sin(B*0.8)*150;if(U.fillStyle="#e0425a",U.fillRect(K-17,430,34,20),U.fillStyle="#ffd1d8",U.fillRect(K-6,420,12,12),U.textAlign="center",U.font="900 70px Inter,Arial,sans-serif",U.fillStyle="#ff7ac2",!l)U.shadowColor="#ff2e93",U.shadowBlur=18;if(U.fillText("READY?",256,200),U.shadowBlur=0,U.font="600 26px Inter,Arial,sans-serif",U.fillStyle="#c9d6ff",U.fillText("Drag to run. Don't get hit.",256,250),Math.floor(B*1.6)%2===0)U.font="800 28px Inter,Arial,sans-serif",U.fillStyle="#ff9fd0",U.fillText("PRESS START",256,312);j.needsUpdate=!0}Q(0);let G=function(){let B=document.createElement("canvas");B.width=B.height=64;let q=B.getContext("2d"),se=q.createRadialGradient(32,32,0,32,32,32);return se.addColorStop(0,"rgba(255,255,255,.9)"),se.addColorStop(1,"rgba(255,255,255,0)"),q.fillStyle=se,q.fillRect(0,0,64,64),new er(B)}(),ge={w:0.74,rough:0.38,metal:0.6,pts:[[-0.42,0],[0.3,0],[0.3,0.62],[0.44,0.66],[0.44,0.74],[0.22,0.94],[0.12,1.56],[0.24,1.58],[0.24,1.95],[-0.2,1.97],[-0.42,1.7]],scr:[[0.21,0.95],[0.12,1.55]],bez:[[0.215,0.9],[0.115,1.6],0.7],mq:[[0.245,1.6],[0.245,1.94],0.72],deck:[[0.44,0.745],[0.22,0.945]],stops:[1708080,722708,722708],neon:16732070};function X(B,q,se,K,Ne){let Ve=q[0]-B[0],Et=q[1]-B[1],gt=Math.hypot(Ve,Et),Nt=Et/gt,yt=-Ve/gt,Pt=new et(new tr(se,gt),Ne);return Pt.rotation.x=-Math.atan2(yt,Nt),Pt.position.set(0,(B[1]+q[1])/2+yt*K,(B[0]+q[0])/2+Nt*K),Pt.userData={len:gt,nz:Nt,ny:yt},Pt}let te=(B,q)=>new Jt({color:new de(B).multiplyScalar(q),toneMapped:!1}),ae={};function Ue(B){let q=ge,se=new Qi,K=new de(B.acc),{pts:Ne,w:Ve}=q,Et=[],gt=(ze,dt)=>(Et.push({mat:ze,kind:dt,base:dt==="color"?ze.color.clone():dt==="opacity"?ze.opacity:ze.emissiveIntensity}),ze),Nt=new _r;Nt.moveTo(-Ne[0][0],Ne[0][1]);for(let ze=1;ze<Ne.length;ze++)Nt.lineTo(-Ne[ze][0],Ne[ze][1]);if(Nt.closePath(),!ae.geo){let ze=new fl(Nt,{depth:Ve-0.07,bevelEnabled:!0,bevelThickness:0.035,bevelSize:0.035,bevelOffset:-0.035,bevelSegments:l?2:6,curveSegments:l?8:24});ze.translate(0,0,-(Ve-0.07)/2);let dt=ze.attributes.position,we=new Float32Array(dt.count*3),Gt=q.stops;for(let ut=0;ut<dt.count;ut++){let Xi=Math.min(1,Math.max(0,dt.getY(ut)/2.1)),Qt=Xi*(Gt.length-1),dr=Math.min(Gt.length-2,Math.floor(Qt)),xi=new de(Gt[dr]).lerp(new de(Gt[dr+1]),Qt-dr);we[ut*3]=xi.r,we[ut*3+1]=xi.g,we[ut*3+2]=xi.b}ze.setAttribute("color",new ei(we,3)),ae.geo=ze}let yt=ae.geo,Pt=l?new Ai({vertexColors:!0,roughness:0.5,metalness:0.12,envMapIntensity:1.3}):new $o({vertexColors:!0,roughness:q.rough,metalness:q.metal,clearcoat:1,clearcoatRoughness:0.12,envMapIntensity:1.3}),ri=new et(yt,gt(Pt,"color"));ri.rotation.y=Math.PI/2,se.add(ri);let Bt=new et(new tr(2,2),new Jt({map:V,transparent:!0,depthWrite:!1,opacity:0.9}));Bt.rotation.x=-Math.PI/2,Bt.position.y=0.006,se.add(Bt),se.add(X(q.bez[0],q.bez[1],q.bez[2],0.004,new Ai({color:262410,roughness:0.15,metalness:0.8})));let gi=0.6,ti=gt(new Jt({map:B.tex,toneMapped:!1}),"color"),v=X(q.scr[0],q.scr[1],gi,0.009,ti);se.add(v),se.add(X(q.scr[0],q.scr[1],gi,0.013,new Jt({map:P,transparent:!0,opacity:0.9,depthWrite:!1,toneMapped:!1})));let L=q.scr;[-1,1].forEach((ze)=>{let dt=X([L[0][0],L[0][1]-0.02],[L[1][0],L[1][1]+0.02],0.012,0.015,gt(te(5213695,1.6),"color"));dt.position.x=ze*(gi/2+0.012),se.add(dt)}),[L[0],L[1]].forEach((ze,dt)=>{let we=X([ze[0],ze[1]-0.006],[ze[0],ze[1]+0.006],gi+0.04,0.015,gt(te(5213695,1.6),"color"));we.position.set(0,ze[1]+(dt?0.012:-0.012)*0,ze[0]+0.015),we.rotation.x=0,se.add(we)});let k=gt(new Jt({map:R(B.title,B.hex),color:12105912,toneMapped:!1}),"color");se.add(X(q.mq[0],q.mq[1],q.mq[2],0.004,k));let O=X(q.deck[0],q.deck[1],0.78,0.004,new Ai({color:1708080,roughness:0.3,metalness:l?0.3:0.85}));se.add(O);let F=new Qi;F.rotation.copy(O.rotation),F.position.copy(O.position),se.add(F);let me=new et(new pl(0.104,0.009,12,48),new Ai({color:14540253,metalness:l?0.3:1,roughness:0.18}));me.position.z=0.006,F.add(me);let Ce=new Qi;Ce.position.z=0.01,F.add(Ce);let ce=new et(new Vo(0.09,0.095,0.03,48),new Ai({color:K,emissive:K,emissiveIntensity:0.9,roughness:0.25}));ce.rotation.x=Math.PI/2,ce.position.z=0,Ce.add(ce),gt(ce.material,"emissive");let Ee=B.hero?new Jt({map:S(),toneMapped:!1}):new Jt({color:3814480,toneMapped:!1}),Oe=new et(new cl(0.084,48),Ee);Oe.position.z=0.0165,Ce.add(Oe),gt(Ee,"color");let it=new et(new Ui(0.3,0.3,0.02),new Ai({color:656914,roughness:0.3,metalness:l?0.3:0.9}));it.position.set(0,0.32,Ne[1][0]+0.01),se.add(it),[-0.06,0.06].forEach((ze)=>{let dt=new et(new Ui(0.02,0.1,0.01),gt(te(B.hex,1.5),"color"));dt.position.set(ze,0.33,it.position.z+0.014),se.add(dt)});let _t=new et(new Ui(0.7,0.09,0.02),new Ai({color:8949928,metalness:l?0.2:0.7,roughness:0.35}));_t.position.set(0,0.07,it.position.z),se.add(_t);let ke=Ve/2+0.012;[-1,1].forEach((ze)=>{let dt=new As;for(let we=0;we<Ne.length;we++){let Gt=Ne[we],ut=Ne[(we+1)%Ne.length];dt.add(new Wo(new w(ze*ke,Gt[1],Gt[0]),new w(ze*ke,ut[1],ut[0])))}if(!ae.tube)ae.tube={};if(!ae.tube[ze])ae.tube[ze]=new ml(dt,Ne.length*(l?3:8),0.007,5,!0);se.add(new et(ae.tube[ze],gt(te(q.neon,1.7),"color")))});let xt=new dl(Nt,24);xt.computeBoundingBox();let Rt=xt.boundingBox,It=g(B.hex,B.title);if(It.repeat.set(1/(Rt.max.x-Rt.min.x),1/(Rt.max.y-Rt.min.y)),It.offset.set(-Rt.min.x/(Rt.max.x-Rt.min.x),-Rt.min.y/(Rt.max.y-Rt.min.y)),[-1,1].forEach((ze)=>{let dt=new et(xt,gt(new Jt({map:It,transparent:!0,side:Ri,depthWrite:!1,toneMapped:!1,polygonOffset:!0,polygonOffsetFactor:-2}),"color"));if(dt.rotation.y=ze*Math.PI/2,ze<0)dt.scale.x=-1;dt.position.x=ze*(Ve/2+0.004),se.add(dt)}),l){let ze=(dt,we,Gt,ut,Xi,Qt)=>{let dr=gt(new kr({map:G,color:dt,transparent:!0,opacity:Qt,blending:Sr,depthWrite:!1,fog:!1}),"opacity"),xi=new Ss(dr);return xi.position.set(we,Gt,ut),xi.scale.set(Xi,Xi*0.7,1),se.add(xi),xi};ze(B.hex,0,1.78,0.3,1.5,0.55),ze(B.hex,0,0.86,0.36,0.5,0.6)}return se.userData={dimMats:Et,mqMat:k,btnG:Ce,bt:ce,decal:Oe,scr:v,deckBd:F},se}x.add(new na(9075455,3151946,0.9));let ie=new Cn(12570879,1.1);ie.position.set(-4,6,5),x.add(ie);let le=new sa(16766704,l?0:60,12,0.5,0.6,1.5);le.position.set(0,5,3.5),le.target.position.set(0,1,0);let Fe=new Lr(16732070,0,7,2);if(Fe.position.set(0,0.4,0.3),!l){let B=new Lr(16732070,40,9,2);B.position.set(1.6,0.6,2.4),x.add(B);let q=new Lr(5213695,30,9,2);q.position.set(-2.2,1.4,2.4),x.add(q),x.add(le,le.target,Fe)}else{let B=new Cn(16732070,1.1);B.position.set(4,2,3),x.add(B);let q=new Cn(5213695,0.9);q.position.set(-4,2,3),x.add(q)}let He=new Ss(new kr({map:G,color:16732070,transparent:!0,opacity:0,blending:Sr,depthWrite:!1,fog:!1}));if(He.scale.set(7,3.5,1),He.position.set(0,0.5,0.6),l)x.add(He);let Ze=[["GAME 04",5213695,3,"Coming soon"],["GAME 02",2868384,1,"Coming soon"],["DRIPPY",16732070,0,"Survive the rain"],["GAME 03",11691775,2,"Coming soon"],["GAME 05",2868384,2,"Coming soon"]],ue=2,mt=Ze.map((B,q)=>{let se="#"+B[1].toString(16).padStart(6,"0"),K=Ue({acc:B[1],hex:se,title:B[0],tex:B[2]===0?j:A(B[2],se),hero:q===ue});return x.add(K),K}),lt=()=>{let B=t.getBoundingClientRect();return{w:Math.max(2,Math.round(B.width)),h:Math.max(2,Math.round(B.height))}},Pe=lt();d.setPixelRatio(a||l?1:Math.min(devicePixelRatio||1,1.5)),d.setSize(Pe.w,Pe.h,!1);let ot,re;if(!l){let B=new Lt(Pe.w,Pe.h,{type:Ut,samples:0});ot=new qc(d,B),ot.addPass(new Yc(x,y)),re=new Dn(new H(Pe.w/2,Pe.h/2),0.42,0.45,0.92),ot.addPass(re),ot.addPass(new Zc)}else ot={render:()=>d.render(x,y),setSize:()=>{}},re={strength:0};let fe=1.78,_e=1.95,Ie=6.2,Le=1.2,Je=1;function We(){Pe=lt(),fe=Pe.w/Pe.h,d.setSize(Pe.w,Pe.h,!1),ot.setSize(Pe.w,Pe.h),y.aspect=fe,y.updateProjectionMatrix(),Ie=5.8+(Math.min(fe,1.7)-0.5);let q=Ie*0.536*fe;if(_e=Math.max(1,Math.min(1.6,q*0.25)),fe<1)Ie=6.9,Le=1.1,Je=0.55;else Le=1.2,Je=1}We();let ft=Pe.w,pt=Pe.h;new ResizeObserver(()=>{let B=lt();if(Math.abs(B.w-ft)<3&&Math.abs(B.h-pt)<3)return;ft=B.w,pt=B.h,We()}).observe(t);let st=ue,N=ue,kt=0,at=0,St=null,Se=-1,bt=null,$e=!1,je=0,Wt=0,E=[0.12,0.12,0.2,0.12,0.12],_=(B)=>Math.max(0.3,1-0.45*Math.abs(B)),z={hover:!1,press:!1};function oe(B){let q=Math.abs(B),se=Math.sign(B);return{x:B*_e,z:-(0.8*Math.min(q,3)+0.2*Math.max(0,Math.min(q,3)-1)),sc:1-0.08*Math.min(q,3),ry:-0.3*Math.max(0,1-q)-se*Math.min(1,q)*0.2-(q>1?se*0.05*(q-1):0)}}function ne(B,q){if(Math.abs((B.userData.lastK||-1)-q)<0.003)return;B.userData.lastK=q,B.userData.dimMats.forEach((se)=>{if(se.kind==="color")se.mat.color.copy(se.base).multiplyScalar(q);else if(se.kind==="opacity")se.mat.opacity=se.base*q;else se.mat.emissiveIntensity=se.base*q})}let pe=[[0.36,0,1,1],[0.42,0,1.09,0.88],[0.54,0.4,0.98,1.03],[0.66,0,1.03,0.97],[0.8,0.07,1,1],[1,0,1,1]];function Me(B){let q=B/1.7;if(q<=0)return{y:12,sx:1,sy:1};if(q<0.36){let Ve=q/0.36;return{y:12*(1-Ve*Ve),sx:1,sy:1}}if(q>=1)return{y:0,sx:1,sy:1};let se=pe[0],K=pe[1];for(let Ve=0;Ve<pe.length-1;Ve++)if(q>=pe[Ve][0]&&q<pe[Ve+1][0]){se=pe[Ve],K=pe[Ve+1];break}let Ne=(q-se[0])/(K[0]-se[0]);return Ne=Ne*Ne*(3-2*Ne),{y:se[1]+(K[1]-se[1])*Ne,sx:se[2]+(K[2]-se[2])*Ne,sy:se[3]+(K[3]-se[3])*Ne}}let W=0.612,J=0;function ve(B){if(u){for(let q=0;q<5;q++)E[q]=1;St=-1e9,Se=99;return}St=B,Se=0,J=0,s.intro=performance.now()}function D(B,q){let se=B-q*9;return Math.exp(-se*se/1.6)*Math.exp(-q*0.9)}let ee=!0;new IntersectionObserver((B)=>{ee=B[0].isIntersecting}).observe(t);let Z=new w,he=new w,xe=new w,be=new w;function qe(B,q){return he.copy(q),B.localToWorld(he),he.project(y),[(he.x*0.5+0.5)*Pe.w,(-he.y*0.5+0.5)*Pe.h]}let De=h("hallStart"),Re=h("hallName"),Ke=h("hallSub"),ct=h("hallIdx");function Te(){let B=Ze[st];if(Re)Re.textContent=B[0];if(Ke)Ke.textContent=B[3];if(ct)ct.textContent="0"+(st+1)+" / 05";if(De)De.disabled=st!==ue,De.hidden=st!==ue;f.dataset.hall=st===ue?"on":"off"}function Tt(B){let q=Math.max(0,Math.min(4,st+B));if(q!==st)st=q,Te()}Te(),h("hallPrev")&&h("hallPrev").addEventListener("click",()=>Tt(-1)),h("hallNext")&&h("hallNext").addEventListener("click",()=>Tt(1)),h("hallScore")&&h("hallScore").addEventListener("click",()=>document.querySelector('#switch [data-mode="score"]').click()),h("hallRules")&&h("hallRules").addEventListener("click",()=>document.querySelector('#switch [data-mode="rules"]').click()),window.addEventListener("keydown",(B)=>{if(f.classList.contains("big")||f.classList.contains("fs")||B.target.tagName==="INPUT")return;if(document.querySelector(".rmodal:not([hidden])"))return;if(B.key==="ArrowLeft")Tt(-1);if(B.key==="ArrowRight")Tt(1)});let Ft=null;if(t.addEventListener("pointerdown",(B)=>{if(B.target.closest("button, a"))return;Ft={x:B.clientX,y:B.clientY,m:!1}}),window.addEventListener("pointermove",(B)=>{if(at=(B.clientX/innerWidth-0.5)*2,Ft&&Math.abs(B.clientX-Ft.x)>8)Ft.m=!0}),window.addEventListener("pointerup",(B)=>{if(!Ft)return;let q=B.clientX-Ft.x,se=Ft.m;if(Ft=null,se&&Math.abs(q)>40){Tt(q<0?1:-1);return}if(!se){let K=t.getBoundingClientRect(),Ne=-1,Ve=1e9;if(mt.forEach((Et,gt)=>{let Nt=qe(Et,new w(0,1,0)),yt=Math.abs(Nt[0]+K.left-B.clientX);if(yt<Ve)Ve=yt,Ne=gt}),Ne>=0&&Ne!==st&&Ve<Pe.w*0.12)st=Ne,Te()}}),De)De.addEventListener("pointerenter",()=>{z.hover=!0}),De.addEventListener("pointerleave",()=>{z.hover=!1,z.press=!1}),De.addEventListener("pointerdown",()=>{z.press=!0}),window.addEventListener("pointerup",()=>{z.press=!1}),De.addEventListener("click",()=>h("btnStart").click());function sr(){let B=mt[ue];B.updateMatrixWorld(!0);let q=[[-0.3,0.95,0.21],[0.3,0.95,0.21],[-0.3,1.55,0.12],[0.3,1.55,0.12]].map((yt)=>qe(B,new w(yt[0],yt[1],yt[2]))),se=q.map((yt)=>yt[0]),K=q.map((yt)=>yt[1]),Ne=t.getBoundingClientRect(),Ve=Math.min(...se)+Ne.left,Et=Math.min(...K)+Ne.top,gt=Math.max(...se)+Ne.left,Nt=Math.max(...K)+Ne.top;return{left:Ve,top:Et,width:gt-Ve,height:Nt-Et,right:gt,bottom:Nt,x:Ve,y:Et}}window.__hall={ready:!0,screenRect:sr,heroActive:()=>st===ue,replay:()=>{for(let B=0;B<5;B++)E[B]=B===ue?0.2:0.12;ve(performance.now())},setActive:(B)=>{st=B,Te()},instant:()=>{N=st},seek:(B)=>{if(bt=B,St===null)St=performance.now()}};let Nn=performance.now(),fa=0,da=0;function Fs(B){requestAnimationFrame(Fs);let q=Math.min(0.05,(B-Nn)/1000);if(Nn=B,!s.f1)s.f1=performance.now();if(document.hidden||!ee||f.classList.contains("big")||f.classList.contains("fs"))return;let se=St===null||St!==-1e9&&je<6||$e;if(!se&&da++&1)return;if(se)b=!1;if(St===null&&Wt>2&&f.classList.contains("cabvis"))ve(B);if(St!==null&&bt===null&&Wt>2)je+=q;if(St===null)je=0;let K=St===null?-1:bt!==null?bt:je;if(Se=K,N+=(st-N)*Math.min(1,q*7),B-fa>(l?120:66))fa=B,Q(B/1000);let Ne=St===null;mt.forEach((yt,Pt)=>{let ri=Pt-N,Bt=oe(ri),gi=0,ti=1,v=1;if(Pt===ue){if(Ne)gi=0,ti=v=0.001;else if(K<1.7&&!u){let ce=Me(K);gi=ce.y,ti=ce.sx,v=ce.sy}}let L=0,k=Math.hypot(Bt.x,Bt.z-oe(ue-N).z),O=oe(ue-N).x;if(k=Math.hypot(Bt.x-O,Bt.z-oe(ue-N).z),!Ne&&K>W&&Pt!==ue&&!u)L=Math.max(0,0.09*D(k,K-W)*Math.sin((k-(K-W)*9)*2));yt.position.set(Bt.x,gi+L,Bt.z),yt.scale.set(Bt.sc*ti,Bt.sc*v,Bt.sc*ti),yt.rotation.y=Bt.ry;let F;if(u||K>6||K<0&&!1)F=1;else if(Ne)F=Pt===ue?0.2:0.12;else if(Pt===ue){if(F=K<0.6?0.2:Math.min(1,0.2+(K-0.6)/0.5*0.8),K>1.6&&K<2.8){let ce=K-1.6;F=[1.5,0.3,1.4,0.4,1,1][Math.min(5,Math.floor(ce/1.2*6))]}}else{let ce=W+k/9;F=Math.max(0.12,Math.min(1,(K-ce)/0.5))}E[Pt]=F,ne(yt,_(ri)*F*(Pt===ue?1:1));let me=yt.userData,Ce=0.8+0.35*Math.sin(B/420);if(Pt===ue)me.bt.material.emissiveIntensity=(z.hover?1.2:0.45*Ce)*_(ri)*F,me.btnG.position.z=z.press?0:0.01,me.decal.material.color.setScalar((z.hover?0.9:0.7+0.05*Math.sin(B/420))*_(ri)*F)});let Ve=St===null||u?-1:K-W;T.uAge.value=Ve<0||Ve>6?-1:Ve,M.uAge.value=Ve<0||Ve>5?-1:Ve;let Et=oe(ue-N);if(T.uC.value.set(Et.x,Et.z),window.__cracks.position.set(Et.x,0,Et.z),Ve>=0&&Ve<1.2)Fe.intensity=110*Math.exp(-Ve*4.5),He.material.opacity=0.9*Math.exp(-Ve*3.5),J=Math.max(J,Ve<0.08?1:J);else Fe.intensity=0,He.material.opacity=0;J*=Math.exp(-q*5),re.strength=0.42+(Ve>=0&&Ve<1?0.6*Math.exp(-Ve*4):0),kt+=(at*0.35*(fe<1?0.3:1)-kt)*Math.min(1,q*3);let gt=(Math.random()-0.5)*0.09*J,Nt=(Math.random()-0.5)*0.09*J;if(y.position.set(kt+gt,Le+Nt,Ie),y.lookAt(kt*0.3,Je+Nt,0),le.position.x=Et.x,le.target.position.x=Et.x,He.position.x=Et.x,He.position.z=Et.z+0.6,ot.render(),Wt++,De&&!De.hidden){let yt=mt[ue];yt.updateMatrixWorld(!0);let Pt=yt.userData,ri=xe;Pt.btnG.getWorldPosition(ri),ri.project(y);let Bt=(ri.x*0.5+0.5)*Pe.w,gi=(-ri.y*0.5+0.5)*Pe.h,ti=be;Pt.btnG.getWorldPosition(ti),ti.x+=0.1*yt.scale.x*Math.cos(yt.rotation.y),ti.z-=0.1*yt.scale.x*Math.sin(yt.rotation.y),ti.project(y);let v=Math.max(18,Math.abs((ti.x*0.5+0.5)*Pe.w-Bt)*1.15);De.style.width=De.style.height=(v*2).toFixed(0)+"px",De.style.transform="translate("+(Bt-v).toFixed(1)+"px,"+(gi-v).toFixed(1)+"px)",De.style.visibility=Ne||K<1.9?"hidden":"visible"}}try{x.traverse((B)=>{B.frustumCulled=!1}),mt[ue].scale.setScalar(0.001),d.compile(x,y),ot.render(),ot.render()}catch(B){}s.compiled=performance.now(),requestAnimationFrame(Fs),document.dispatchEvent(new Event("hallready"))}})();
