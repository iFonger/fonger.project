var Zg=Object.defineProperty;var Jg=(e)=>e;function Kg(e,t){this[e]=Jg.bind(null,t)}var $g=(e,t)=>{for(var i in t)Zg(e,i,{get:t[i],enumerable:!0,configurable:!0,set:Kg.bind(t,i)})};var Sr={};$g(Sr,{ArcCurve:()=>Ih,CatmullRomCurve3:()=>co,CubicBezierCurve:()=>Fa,CubicBezierCurve3:()=>Bh,EllipseCurve:()=>ss,LineCurve:()=>Ba,LineCurve3:()=>Oh,QuadraticBezierCurve:()=>Oa,QuadraticBezierCurve3:()=>za,SplineCurve:()=>Ga});var Do="187";var Du=0,eh=1,Nu=2;var ys=1,Uu=2,zr=3,hn=0,Nt=1,kt=2,un=0,lr=1,No=2,th=3,ih=4,Fu=5;var cr=100,Bu=101,Ou=102,zu=103,Gu=104,Hu=200,ku=201,Vu=202,Wu=203,ul=204,fl=205,Xu=206,qu=207,Yu=208,Zu=209,Ju=210,Ku=211,$u=212,Qu=213,ju=214,Uo=0,Fo=1,Bo=2,hr=3,Oo=4,zo=5,Go=6,Ho=7,Gr=0,ef=1,tf=2,ji=0,vs=1,Ms=2,Ss=3,ur=4,bs=5,Es=6,Ts=7;var dl=300,fn=301,Yn=302,ko=303,Vo=304,Zn=1000,wi=1001,ws=1002,Ot=1003,nh=1004;var As=1005;var Vt=1006,Wo=1007;var Gi=1008;var ei=1009,pl=1010,ml=1011,Jn=1012,Rs=1013,li=1014,ti=1015,Wt=1016,Cs=1017,Ps=1018,Tn=1020,gl=35902,xl=35899,_l=1021,yl=1022,xi=1023,Xi=1026,en=1027,Is=1028,Hr=1029,tn=1030,Ls=1031;var Ds=1033,Ns=33776,Us=33777,Fs=33778,Bs=33779,Xo=35840,qo=35841,Yo=35842,Zo=35843,Jo=36196,Ko=37492,$o=37496,Qo=37488,jo=37489,kr=37490,ea=37491,ta=37808,ia=37809,na=37810,ra=37811,sa=37812,oa=37813,aa=37814,la=37815,ca=37816,ha=37817,ua=37818,fa=37819,da=37820,pa=37821,ma=36492,ga=36494,xa=36495,_a=36283,ya=36284,Vr=36285,va=36286;var Wr=2300,vl=2301,Ml=2302,rh=2303,Sl=2400,bl=2401,El=2402;var nf=3200;var wn=0,rf=1,dn="",wt="srgb",Xr="srgb-linear",qr="linear",pt="srgb";var Tl=7680;var sf=519,of=512,af=513,lf=514,wl=515,cf=516,hf=517,Al=518,Rl=519,Ma=35044;var sh="300 es",_i=2000,Nn=2001;function ff(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function oh(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function fr(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function ah(){let e=fr("canvas");return e.style.display="block",e}var uf={},Os=null;function Yr(...e){let t="THREE."+e.shift();if(Os)Os("log",t,...e);else console.log(t,...e)}function df(e){let t=e[0];if(typeof t==="string"&&t.startsWith("TSL:")){let i=e[1];if(i&&i.isStackTrace)e[0]+=" "+i.getLocation();else e[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return e}function ge(...e){e=df(e);let t="THREE."+e.shift();if(Os)Os("warn",t,...e);else{let i=e[0];if(i&&i.isStackTrace)console.warn(i.getError(t));else console.warn(t,...e)}}function Fe(...e){e=df(e);let t="THREE."+e.shift();if(Os)Os("error",t,...e);else{let i=e[0];if(i&&i.isStackTrace)console.error(i.getError(t));else console.error(t,...e)}}function pn(...e){let t=e.join(" ");if(t in uf)return;uf[t]=!0,ge(...e)}function pf(e,t,i){return new Promise(function(n,r){function s(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:r();break;case e.TIMEOUT_EXPIRED:setTimeout(s,i);break;default:n()}}setTimeout(s,i)})}var mf={[Uo]:Uo,[Bo]:Go,[Oo]:Oo,[hr]:zo,[Fo]:Fo,[Go]:Bo,[Ho]:Ho,[zo]:hr};class ci{addEventListener(e,t){if(this._listeners===void 0)this._listeners={};let i=this._listeners;if(i[e]===void 0)i[e]=[];if(i[e].indexOf(t)===-1)i[e].push(t)}hasEventListener(e,t){let i=this._listeners;if(i===void 0)return!1;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let n=i[e];if(n!==void 0){let r=n.indexOf(t);if(r!==-1)n.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let n=i.slice(0);for(let r=0,s=n.length;r<s;r++)n[r].call(this,e);e.target=null}}}var Ni=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Zr=Math.PI/180,zs=180/Math.PI;function yi(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ni[e&255]+Ni[e>>8&255]+Ni[e>>16&255]+Ni[e>>24&255]+"-"+Ni[t&255]+Ni[t>>8&255]+"-"+Ni[t>>16&15|64]+Ni[t>>24&255]+"-"+Ni[i&63|128]+Ni[i>>8&255]+"-"+Ni[i>>16&255]+Ni[i>>24&255]+Ni[n&255]+Ni[n>>8&255]+Ni[n>>16&255]+Ni[n>>24&255]).toLowerCase()}function et(e,t,i){return Math.max(t,Math.min(i,e))}function gf(e,t){return(e%t+t)%t}function Cl(e,t,i){return(1-i)*e+i*t}function xf(e){return Math.pow(2,Math.floor(Math.log(e)/Math.LN2))}function Gs(e){switch(e.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Pl(e,t){if(t.constructor===Float32Array)return e;let i=Gs(t);if(i===void 0)throw Error("THREE.MathUtils: Invalid component type.");return Math.max(e/i,-1)}function Il(e,t){if(t.constructor===Float32Array)return e;let i=Gs(t);if(i===void 0)throw Error("THREE.MathUtils: Invalid component type.");return Math.round(e*i)}class k{static{this.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,n=e.elements;return this.x=n[0]*t+n[3]*i+n[6],this.y=n[1]*t+n[4]*i+n[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=et(this.x,e.x,t.x),this.y=et(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=et(this.x,e,t),this.y=et(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(et(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(et(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),n=Math.sin(t),r=this.x-e.x,s=this.y-e.y;return this.x=r*i-s*n+e.x,this.y=r*n+s*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ni{constructor(e=0,t=0,i=0,n=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=n}static slerpFlat(e,t,i,n,r,s,o){let a=i[n+0],l=i[n+1],c=i[n+2],h=i[n+3],f=r[s+0],u=r[s+1],p=r[s+2],g=r[s+3];if(h!==g||a!==f||l!==u||c!==p){let _=a*f+l*u+c*p+h*g;if(_<0)f=-f,u=-u,p=-p,g=-g,_=-_;let m=1-o;if(_<0.9995){let d=Math.acos(_),v=Math.sin(d);m=Math.sin(m*d)/v,o=Math.sin(o*d)/v,a=a*m+f*o,l=l*m+u*o,c=c*m+p*o,h=h*m+g*o}else{a=a*m+f*o,l=l*m+u*o,c=c*m+p*o,h=h*m+g*o;let d=1/Math.sqrt(a*a+l*l+c*c+h*h);a*=d,l*=d,c*=d,h*=d}}e[t]=a,e[t+1]=l,e[t+2]=c,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,n,r,s){let o=i[n],a=i[n+1],l=i[n+2],c=i[n+3],h=r[s],f=r[s+1],u=r[s+2],p=r[s+3];return e[t]=o*p+c*h+a*u-l*f,e[t+1]=a*p+c*f+l*h-o*u,e[t+2]=l*p+c*u+o*f-a*h,e[t+3]=c*p-o*h-a*f-l*u,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,n){return this._x=e,this._y=t,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let{_x:i,_y:n,_z:r,_order:s}=e,{cos:o,sin:a}=Math,l=o(i/2),c=o(n/2),h=o(r/2),f=a(i/2),u=a(n/2),p=a(r/2);switch(s){case"XYZ":this._x=f*c*h+l*u*p,this._y=l*u*h-f*c*p,this._z=l*c*p+f*u*h,this._w=l*c*h-f*u*p;break;case"YXZ":this._x=f*c*h+l*u*p,this._y=l*u*h-f*c*p,this._z=l*c*p-f*u*h,this._w=l*c*h+f*u*p;break;case"ZXY":this._x=f*c*h-l*u*p,this._y=l*u*h+f*c*p,this._z=l*c*p+f*u*h,this._w=l*c*h-f*u*p;break;case"ZYX":this._x=f*c*h-l*u*p,this._y=l*u*h+f*c*p,this._z=l*c*p-f*u*h,this._w=l*c*h+f*u*p;break;case"YZX":this._x=f*c*h+l*u*p,this._y=l*u*h+f*c*p,this._z=l*c*p-f*u*h,this._w=l*c*h-f*u*p;break;case"XZY":this._x=f*c*h-l*u*p,this._y=l*u*h-f*c*p,this._z=l*c*p+f*u*h,this._w=l*c*h+f*u*p;break;default:ge("Quaternion: .setFromEuler() encountered an unknown order: "+s)}if(t===!0)this._onChangeCallback();return this}setFromAxisAngle(e,t){let i=t/2,n=Math.sin(i);return this._x=e.x*n,this._y=e.y*n,this._z=e.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],n=t[4],r=t[8],s=t[1],o=t[5],a=t[9],l=t[2],c=t[6],h=t[10],f=i+o+h;if(f>0){let u=0.5/Math.sqrt(f+1);this._w=0.25/u,this._x=(c-a)*u,this._y=(r-l)*u,this._z=(s-n)*u}else if(i>o&&i>h){let u=2*Math.sqrt(1+i-o-h);this._w=(c-a)/u,this._x=0.25*u,this._y=(n+s)/u,this._z=(r+l)/u}else if(o>h){let u=2*Math.sqrt(1+o-i-h);this._w=(r-l)/u,this._x=(n+s)/u,this._y=0.25*u,this._z=(a+c)/u}else{let u=2*Math.sqrt(1+h-i-o);this._w=(s-n)/u,this._x=(r+l)/u,this._y=(a+c)/u,this._z=0.25*u}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;if(i<0.00000001)if(i=0,Math.abs(e.x)>Math.abs(e.z))this._x=-e.y,this._y=e.x,this._z=0,this._w=i;else this._x=0,this._y=-e.z,this._z=e.y,this._w=i;else this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i;return this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(et(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let n=Math.min(1,t/i);return this.slerp(e,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();if(e===0)this._x=0,this._y=0,this._z=0,this._w=1;else e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e;return this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let{_x:i,_y:n,_z:r,_w:s}=e,{_x:o,_y:a,_z:l,_w:c}=t;return this._x=i*c+s*o+n*l-r*a,this._y=n*c+s*a+r*o-i*l,this._z=r*c+s*l+i*a-n*o,this._w=s*c-i*o-n*a-r*l,this._onChangeCallback(),this}slerp(e,t){let{_x:i,_y:n,_z:r,_w:s}=e,o=this.dot(e);if(o<0)i=-i,n=-n,r=-r,s=-s,o=-o;let a=1-t;if(o<0.9995){let l=Math.acos(o),c=Math.sin(l);a=Math.sin(a*l)/c,t=Math.sin(t*l)/c,this._x=this._x*a+i*t,this._y=this._y*a+n*t,this._z=this._z*a+r*t,this._w=this._w*a+s*t,this._onChangeCallback()}else this._x=this._x*a+i*t,this._y=this._y*a+n*t,this._z=this._z*a+r*t,this._w=this._w*a+s*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),n=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(n*Math.sin(e),n*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class A{static{this.prototype.isVector3=!0}constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){if(i===void 0)i=this.z;return this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(_f.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(_f.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,n=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*n,this.y=r[1]*t+r[4]*i+r[7]*n,this.z=r[2]*t+r[5]*i+r[8]*n,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,n=this.z,r=e.elements,s=1/(r[3]*t+r[7]*i+r[11]*n+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*n+r[12])*s,this.y=(r[1]*t+r[5]*i+r[9]*n+r[13])*s,this.z=(r[2]*t+r[6]*i+r[10]*n+r[14])*s,this}applyQuaternion(e){let t=this.x,i=this.y,n=this.z,{x:r,y:s,z:o,w:a}=e,l=2*(s*n-o*i),c=2*(o*t-r*n),h=2*(r*i-s*t);return this.x=t+a*l+s*h-o*c,this.y=i+a*c+o*l-r*h,this.z=n+a*h+r*c-s*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,n=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*n,this.y=r[1]*t+r[5]*i+r[9]*n,this.z=r[2]*t+r[6]*i+r[10]*n,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=et(this.x,e.x,t.x),this.y=et(this.y,e.y,t.y),this.z=et(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=et(this.x,e,t),this.y=et(this.y,e,t),this.z=et(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(et(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let{x:i,y:n,z:r}=e,{x:s,y:o,z:a}=t;return this.x=n*a-r*o,this.y=r*s-i*a,this.z=i*o-n*s,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return lh.copy(this).projectOnVector(e),this.sub(lh)}reflect(e){return this.sub(lh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(et(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,n=this.z-e.z;return t*t+i*i+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let n=Math.sin(t)*e;return this.x=n*Math.sin(i),this.y=Math.cos(t)*e,this.z=n*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),n=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=n,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}var lh=new A,_f=new ni;class Je{static{this.prototype.isMatrix3=!0}constructor(e,t,i,n,r,s,o,a,l){if(this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0)this.set(e,t,i,n,r,s,o,a,l)}set(e,t,i,n,r,s,o,a,l){let c=this.elements;return c[0]=e,c[1]=n,c[2]=o,c[3]=t,c[4]=r,c[5]=a,c[6]=i,c[7]=s,c[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,n=t.elements,r=this.elements,s=i[0],o=i[3],a=i[6],l=i[1],c=i[4],h=i[7],f=i[2],u=i[5],p=i[8],g=n[0],_=n[3],m=n[6],d=n[1],v=n[4],y=n[7],S=n[2],E=n[5],w=n[8];return r[0]=s*g+o*d+a*S,r[3]=s*_+o*v+a*E,r[6]=s*m+o*y+a*w,r[1]=l*g+c*d+h*S,r[4]=l*_+c*v+h*E,r[7]=l*m+c*y+h*w,r[2]=f*g+u*d+p*S,r[5]=f*_+u*v+p*E,r[8]=f*m+u*y+p*w,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],n=e[2],r=e[3],s=e[4],o=e[5],a=e[6],l=e[7],c=e[8];return t*s*c-t*o*l-i*r*c+i*o*a+n*r*l-n*s*a}invert(){let e=this.elements,t=e[0],i=e[1],n=e[2],r=e[3],s=e[4],o=e[5],a=e[6],l=e[7],c=e[8],h=c*s-o*l,f=o*a-c*r,u=l*r-s*a,p=t*h+i*f+n*u;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let g=1/p;return e[0]=h*g,e[1]=(n*l-c*i)*g,e[2]=(o*i-n*s)*g,e[3]=f*g,e[4]=(c*t-n*a)*g,e[5]=(n*r-o*t)*g,e[6]=u*g,e[7]=(i*a-l*t)*g,e[8]=(s*t-i*r)*g,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,n,r,s,o){let a=Math.cos(r),l=Math.sin(r);return this.set(i*a,i*l,-i*(a*s+l*o)+s+e,-n*l,n*a,-n*(-l*s+a*o)+o+t,0,0,1),this}scale(e,t){return pn("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(ch.makeScale(e,t)),this}rotate(e){return pn("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(ch.makeRotation(-e)),this}translate(e,t){return pn("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(ch.makeTranslation(e,t)),this}makeTranslation(e,t){if(e.isVector2)this.set(1,0,e.x,0,1,e.y,0,0,1);else this.set(1,0,e,0,1,t,0,0,1);return this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let n=0;n<9;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}var ch=new Je;var yf=new Je().set(0.4123908,0.3575843,0.1804808,0.212639,0.7151687,0.0721923,0.0193308,0.1191948,0.9505322),vf=new Je().set(3.2409699,-1.5373832,-0.4986108,-0.9692436,1.8759675,0.0415551,0.0556301,-0.203977,1.0569715);function Qg(){let e={enabled:!0,workingColorSpace:Xr,spaces:{},convert:function(r,s,o){if(this.enabled===!1||s===o||!s||!o)return r;if(this.spaces[s].transfer===pt)r.r=An(r.r),r.g=An(r.g),r.b=An(r.b);if(this.spaces[s].primaries!==this.spaces[o].primaries)r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ);if(this.spaces[o].transfer===pt)r.r=Jr(r.r),r.g=Jr(r.g),r.b=Jr(r.b);return r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){if(r===dn)return qr;return this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[o].fromXYZ).multiply(this.spaces[s].toXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}},t=[0.64,0.33,0.3,0.6,0.15,0.06],i=[0.2126,0.7152,0.0722],n=[0.3127,0.329];return e.define({[Xr]:{primaries:t,whitePoint:n,transfer:qr,toXYZ:yf,fromXYZ:vf,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:wt},outputColorSpaceConfig:{drawingBufferColorSpace:wt}},[wt]:{primaries:t,whitePoint:n,transfer:pt,toXYZ:yf,fromXYZ:vf,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:wt}}}),e}var tt=Qg();function An(e){return e<0.04045?e*0.0773993808:Math.pow(e*0.9478672986+0.0521327014,2.4)}function Jr(e){return e<0.0031308?e*12.92:1.055*Math.pow(e,0.41666)-0.055}var Hs;class Ll{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src))return e.src;if(typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{if(Hs===void 0)Hs=fr("canvas");Hs.width=e.width,Hs.height=e.height;let n=Hs.getContext("2d");if(e instanceof ImageData)n.putImageData(e,0,0);else n.drawImage(e,0,0,e.width,e.height);i=Hs}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=fr("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let n=i.getImageData(0,0,e.width,e.height),r=n.data;for(let s=0;s<r.length;s++)r[s]=An(r[s]/255)*255;return i.putImageData(n,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)if(t instanceof Uint8Array||t instanceof Uint8ClampedArray)t[i]=Math.floor(An(t[i]/255)*255);else t[i]=An(t[i]);return{data:t,width:e.width,height:e.height}}else return ge("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}var jg=0;class Un{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:jg++}),this.uuid=yi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;if(typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement)e.set(t.videoWidth,t.videoHeight,0);else if(typeof VideoFrame<"u"&&t instanceof VideoFrame)e.set(t.displayWidth,t.displayHeight,0);else if(t!==null)e.set(t.width||0,t.height||0,t.depth||0);else e.set(0,0,0);return e}set needsUpdate(e){if(e===!0)this.version++}toJSON(e){let t=e===void 0||typeof e==="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let r;if(Array.isArray(n)){r=[];for(let s=0,o=n.length;s<o;s++)if(n[s].isDataTexture)r.push(hh(n[s].image));else r.push(hh(n[s]))}else r=hh(n);i.url=r}if(!t)e.images[this.uuid]=i;return i}}function hh(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap)return Ll.getDataURL(e);else if(e.data)return{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name};else return ge("Texture: Unable to serialize Texture."),{}}var ex=0,uh=new A;class Mt extends ci{constructor(e=Mt.DEFAULT_IMAGE,t=Mt.DEFAULT_MAPPING,i=wi,n=wi,r=Vt,s=Gi,o=xi,a=ei,l=Mt.DEFAULT_ANISOTROPY,c=dn){super();this.isTexture=!0,Object.defineProperty(this,"id",{value:ex++}),this.uuid=yi(),this.name="",this.source=new Un(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=r,this.minFilter=s,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=a,this.offset=new k(0,0),this.repeat=new k(1,1),this.center=new k(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Je,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=e&&e.depth&&e.depth>1?!0:!1,this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(uh).x}get height(){return this.source.getSize(uh).y}get depth(){return this.source.getSize(uh).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){ge(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let n=this[t];if(n===void 0){ge(`Texture.setValues(): property '${t}' does not exist.`);continue}if(n&&i&&(n.isVector2&&i.isVector2))n.copy(i);else if(n&&i&&(n.isVector3&&i.isVector3))n.copy(i);else if(n&&i&&(n.isMatrix3&&i.isMatrix3))n.copy(i);else this[t]=i}}toJSON(e){let t=e===void 0||typeof e==="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(Object.keys(this.userData).length>0)i.userData=this.userData;if(!t)e.textures[this.uuid]=i;return i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==dl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Zn:e.x=e.x-Math.floor(e.x);break;case wi:e.x=e.x<0?0:1;break;case ws:if(Math.abs(Math.floor(e.x)%2)===1)e.x=Math.ceil(e.x)-e.x;else e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Zn:e.y=e.y-Math.floor(e.y);break;case wi:e.y=e.y<0?0:1;break;case ws:if(Math.abs(Math.floor(e.y)%2)===1)e.y=Math.ceil(e.y)-e.y;else e.y=e.y-Math.floor(e.y);break}if(this.flipY)e.y=1-e.y;return e}set needsUpdate(e){if(e===!0)this.version++,this.source.needsUpdate=!0}set needsPMREMUpdate(e){if(e===!0)this.pmremVersion++}}Mt.DEFAULT_IMAGE=null;Mt.DEFAULT_MAPPING=dl;Mt.DEFAULT_ANISOTROPY=1;class St{static{this.prototype.isVector4=!0}constructor(e=0,t=0,i=0,n=1){this.x=e,this.y=t,this.z=i,this.w=n}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,n){return this.x=e,this.y=t,this.z=i,this.w=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,n=this.z,r=this.w,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*n+s[12]*r,this.y=s[1]*t+s[5]*i+s[9]*n+s[13]*r,this.z=s[2]*t+s[6]*i+s[10]*n+s[14]*r,this.w=s[3]*t+s[7]*i+s[11]*n+s[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);if(t<0.0001)this.x=1,this.y=0,this.z=0;else this.x=e.x/t,this.y=e.y/t,this.z=e.z/t;return this}setAxisAngleFromRotationMatrix(e){let t,i,n,r,s=0.01,o=0.1,a=e.elements,l=a[0],c=a[4],h=a[8],f=a[1],u=a[5],p=a[9],g=a[2],_=a[6],m=a[10];if(Math.abs(c-f)<0.01&&Math.abs(h-g)<0.01&&Math.abs(p-_)<0.01){if(Math.abs(c+f)<0.1&&Math.abs(h+g)<0.1&&Math.abs(p+_)<0.1&&Math.abs(l+u+m-3)<0.1)return this.set(1,0,0,0),this;t=Math.PI;let v=(l+1)/2,y=(u+1)/2,S=(m+1)/2,E=(c+f)/4,w=(h+g)/4,x=(p+_)/4;if(v>y&&v>S)if(v<0.01)i=0,n=0.707106781,r=0.707106781;else i=Math.sqrt(v),n=E/i,r=w/i;else if(y>S)if(y<0.01)i=0.707106781,n=0,r=0.707106781;else n=Math.sqrt(y),i=E/n,r=x/n;else if(S<0.01)i=0.707106781,n=0.707106781,r=0;else r=Math.sqrt(S),i=w/r,n=x/r;return this.set(i,n,r,t),this}let d=Math.sqrt((_-p)*(_-p)+(h-g)*(h-g)+(f-c)*(f-c));if(Math.abs(d)<0.001)d=1;return this.x=(_-p)/d,this.y=(h-g)/d,this.z=(f-c)/d,this.w=Math.acos((l+u+m-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=et(this.x,e.x,t.x),this.y=et(this.y,e.y,t.y),this.z=et(this.z,e.z,t.z),this.w=et(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=et(this.x,e,t),this.y=et(this.y,e,t),this.z=et(this.z,e,t),this.w=et(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(et(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Sa extends ci{constructor(e=1,t=1,i={}){super();i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Vt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new St(0,0,e,t),this.scissorTest=!1,this.viewport=new St(0,0,e,t),this.textures=[];let n=i.count;for(let r=0;r<n;r++)this.textures[r]=new Mt({width:e,height:t,depth:i.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Vt,generateMipmaps:!1,flipY:!1,internalFormat:null};if(e.mapping!==void 0)t.mapping=e.mapping;if(e.wrapS!==void 0)t.wrapS=e.wrapS;if(e.wrapT!==void 0)t.wrapT=e.wrapT;if(e.wrapR!==void 0)t.wrapR=e.wrapR;if(e.magFilter!==void 0)t.magFilter=e.magFilter;if(e.minFilter!==void 0)t.minFilter=e.minFilter;if(e.format!==void 0)t.format=e.format;if(e.type!==void 0)t.type=e.type;if(e.anisotropy!==void 0)t.anisotropy=e.anisotropy;if(e.colorSpace!==void 0)t.colorSpace=e.colorSpace;if(e.flipY!==void 0)t.flipY=e.flipY;if(e.generateMipmaps!==void 0)t.generateMipmaps=e.generateMipmaps;if(e.mipmapsAutoUpdate!==void 0)t.mipmapsAutoUpdate=e.mipmapsAutoUpdate;if(e.internalFormat!==void 0)t.internalFormat=e.internalFormat;for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){if(this._depthTexture!==null&&this._depthTexture.renderTarget===this)this._depthTexture.renderTarget=null;if(e!==null&&e.renderTarget===null)e.renderTarget=this;this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let n=0,r=this.textures.length;n<r;n++)if(this.textures[n].image.width=e,this.textures[n].image.height=t,this.textures[n].image.depth=i,this.textures[n].isData3DTexture!==!0)this.textures[n].isArrayTexture=this.textures[n].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new Un(n)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Gt extends Sa{constructor(e=1,t=1,i={}){super(e,t,i);this.isWebGLRenderTarget=!0}}class Kr extends Mt{constructor(e=null,t=1,i=1,n=1){super(null);this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=Ot,this.minFilter=Ot,this.wrapR=wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class ks extends Mt{constructor(e=null,t=1,i=1,n=1){super(null);this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=Ot,this.minFilter=Ot,this.wrapR=wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}class Xe{static{this.prototype.isMatrix4=!0}constructor(e,t,i,n,r,s,o,a,l,c,h,f,u,p,g,_){if(this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0)this.set(e,t,i,n,r,s,o,a,l,c,h,f,u,p,g,_)}set(e,t,i,n,r,s,o,a,l,c,h,f,u,p,g,_){let m=this.elements;return m[0]=e,m[4]=t,m[8]=i,m[12]=n,m[1]=r,m[5]=s,m[9]=o,m[13]=a,m[2]=l,m[6]=c,m[10]=h,m[14]=f,m[3]=u,m[7]=p,m[11]=g,m[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Xe().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){if(this.determinantAffine()===0)return e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this;return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,i=e.elements,n=1/Vs.setFromMatrixColumn(e,0).length(),r=1/Vs.setFromMatrixColumn(e,1).length(),s=1/Vs.setFromMatrixColumn(e,2).length();return t[0]=i[0]*n,t[1]=i[1]*n,t[2]=i[2]*n,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*s,t[9]=i[9]*s,t[10]=i[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,{x:i,y:n,z:r}=e,s=Math.cos(i),o=Math.sin(i),a=Math.cos(n),l=Math.sin(n),c=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){let f=s*c,u=s*h,p=o*c,g=o*h;t[0]=a*c,t[4]=-a*h,t[8]=l,t[1]=u+p*l,t[5]=f-g*l,t[9]=-o*a,t[2]=g-f*l,t[6]=p+u*l,t[10]=s*a}else if(e.order==="YXZ"){let f=a*c,u=a*h,p=l*c,g=l*h;t[0]=f+g*o,t[4]=p*o-u,t[8]=s*l,t[1]=s*h,t[5]=s*c,t[9]=-o,t[2]=u*o-p,t[6]=g+f*o,t[10]=s*a}else if(e.order==="ZXY"){let f=a*c,u=a*h,p=l*c,g=l*h;t[0]=f-g*o,t[4]=-s*h,t[8]=p+u*o,t[1]=u+p*o,t[5]=s*c,t[9]=g-f*o,t[2]=-s*l,t[6]=o,t[10]=s*a}else if(e.order==="ZYX"){let f=s*c,u=s*h,p=o*c,g=o*h;t[0]=a*c,t[4]=p*l-u,t[8]=f*l+g,t[1]=a*h,t[5]=g*l+f,t[9]=u*l-p,t[2]=-l,t[6]=o*a,t[10]=s*a}else if(e.order==="YZX"){let f=s*a,u=s*l,p=o*a,g=o*l;t[0]=a*c,t[4]=g-f*h,t[8]=p*h+u,t[1]=h,t[5]=s*c,t[9]=-o*c,t[2]=-l*c,t[6]=u*h+p,t[10]=f-g*h}else if(e.order==="XZY"){let f=s*a,u=s*l,p=o*a,g=o*l;t[0]=a*c,t[4]=-h,t[8]=l*c,t[1]=f*h+g,t[5]=s*c,t[9]=u*h-p,t[2]=p*h-u,t[6]=o*c,t[10]=g*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(tx,e,ix)}lookAt(e,t,i){let n=this.elements;if(nn.subVectors(e,t),nn.lengthSq()===0)nn.z=1;if(nn.normalize(),dr.crossVectors(i,nn),dr.lengthSq()===0){if(Math.abs(i.z)===1)nn.x+=0.0001;else nn.z+=0.0001;nn.normalize(),dr.crossVectors(i,nn)}return dr.normalize(),Dl.crossVectors(nn,dr),n[0]=dr.x,n[4]=Dl.x,n[8]=nn.x,n[1]=dr.y,n[5]=Dl.y,n[9]=nn.y,n[2]=dr.z,n[6]=Dl.z,n[10]=nn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,n=t.elements,r=this.elements,s=i[0],o=i[4],a=i[8],l=i[12],c=i[1],h=i[5],f=i[9],u=i[13],p=i[2],g=i[6],_=i[10],m=i[14],d=i[3],v=i[7],y=i[11],S=i[15],E=n[0],w=n[4],x=n[8],M=n[12],R=n[1],U=n[5],I=n[9],O=n[13],te=n[2],P=n[6],q=n[10],L=n[14],N=n[3],Q=n[7],z=n[11],X=n[15];return r[0]=s*E+o*R+a*te+l*N,r[4]=s*w+o*U+a*P+l*Q,r[8]=s*x+o*I+a*q+l*z,r[12]=s*M+o*O+a*L+l*X,r[1]=c*E+h*R+f*te+u*N,r[5]=c*w+h*U+f*P+u*Q,r[9]=c*x+h*I+f*q+u*z,r[13]=c*M+h*O+f*L+u*X,r[2]=p*E+g*R+_*te+m*N,r[6]=p*w+g*U+_*P+m*Q,r[10]=p*x+g*I+_*q+m*z,r[14]=p*M+g*O+_*L+m*X,r[3]=d*E+v*R+y*te+S*N,r[7]=d*w+v*U+y*P+S*Q,r[11]=d*x+v*I+y*q+S*z,r[15]=d*M+v*O+y*L+S*X,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],n=e[8],r=e[12],s=e[1],o=e[5],a=e[9],l=e[13],c=e[2],h=e[6],f=e[10],u=e[14],p=e[3],g=e[7],_=e[11],m=e[15],d=a*u-l*f,v=o*u-l*h,y=o*f-a*h,S=s*u-l*c,E=s*f-a*c,w=s*h-o*c;return t*(g*d-_*v+m*y)-i*(p*d-_*S+m*E)+n*(p*v-g*S+m*w)-r*(p*y-g*E+_*w)}determinantAffine(){let e=this.elements,t=e[0],i=e[4],n=e[8],r=e[1],s=e[5],o=e[9],a=e[2],l=e[6],c=e[10];return t*(s*c-o*l)-i*(r*c-o*a)+n*(r*l-s*a)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let n=this.elements;if(e.isVector3)n[12]=e.x,n[13]=e.y,n[14]=e.z;else n[12]=e,n[13]=t,n[14]=i;return this}invert(){let e=this.elements,t=e[0],i=e[1],n=e[2],r=e[3],s=e[4],o=e[5],a=e[6],l=e[7],c=e[8],h=e[9],f=e[10],u=e[11],p=e[12],g=e[13],_=e[14],m=e[15],d=t*o-i*s,v=t*a-n*s,y=t*l-r*s,S=i*a-n*o,E=i*l-r*o,w=n*l-r*a,x=c*g-h*p,M=c*_-f*p,R=c*m-u*p,U=h*_-f*g,I=h*m-u*g,O=f*m-u*_,te=d*O-v*I+y*U+S*R-E*M+w*x;if(te===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let P=1/te;return e[0]=(o*O-a*I+l*U)*P,e[1]=(n*I-i*O-r*U)*P,e[2]=(g*w-_*E+m*S)*P,e[3]=(f*E-h*w-u*S)*P,e[4]=(a*R-s*O-l*M)*P,e[5]=(t*O-n*R+r*M)*P,e[6]=(_*y-p*w-m*v)*P,e[7]=(c*w-f*y+u*v)*P,e[8]=(s*I-o*R+l*x)*P,e[9]=(i*R-t*I-r*x)*P,e[10]=(p*E-g*y+m*d)*P,e[11]=(h*y-c*E-u*d)*P,e[12]=(o*M-s*U-a*x)*P,e[13]=(t*U-i*M+n*x)*P,e[14]=(g*v-p*S-_*d)*P,e[15]=(c*S-h*v+f*d)*P,this}scale(e){let t=this.elements,{x:i,y:n,z:r}=e;return t[0]*=i,t[4]*=n,t[8]*=r,t[1]*=i,t[5]*=n,t[9]*=r,t[2]*=i,t[6]*=n,t[10]*=r,t[3]*=i,t[7]*=n,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],n=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,n))}makeTranslation(e,t,i){if(e.isVector3)this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1);else this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1);return this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),n=Math.sin(t),r=1-i,{x:s,y:o,z:a}=e,l=r*s,c=r*o;return this.set(l*s+i,l*o-n*a,l*a+n*o,0,l*o+n*a,c*o+i,c*a-n*s,0,l*a-n*o,c*a+n*s,r*a*a+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,n,r,s){return this.set(1,i,r,0,e,1,s,0,t,n,1,0,0,0,0,1),this}compose(e,t,i){let n=this.elements,{_x:r,_y:s,_z:o,_w:a}=t,l=r+r,c=s+s,h=o+o,f=r*l,u=r*c,p=r*h,g=s*c,_=s*h,m=o*h,d=a*l,v=a*c,y=a*h,{x:S,y:E,z:w}=i;return n[0]=(1-(g+m))*S,n[1]=(u+y)*S,n[2]=(p-v)*S,n[3]=0,n[4]=(u-y)*E,n[5]=(1-(f+m))*E,n[6]=(_+d)*E,n[7]=0,n[8]=(p+v)*w,n[9]=(_-d)*w,n[10]=(1-(f+g))*w,n[11]=0,n[12]=e.x,n[13]=e.y,n[14]=e.z,n[15]=1,this}decompose(e,t,i){let n=this.elements;e.x=n[12],e.y=n[13],e.z=n[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),t.identity(),this;let s=Vs.set(n[0],n[1],n[2]).length(),o=Vs.set(n[4],n[5],n[6]).length(),a=Vs.set(n[8],n[9],n[10]).length();if(r<0)s=-s;Rn.copy(this);let l=1/s,c=1/o,h=1/a;return Rn.elements[0]*=l,Rn.elements[1]*=l,Rn.elements[2]*=l,Rn.elements[4]*=c,Rn.elements[5]*=c,Rn.elements[6]*=c,Rn.elements[8]*=h,Rn.elements[9]*=h,Rn.elements[10]*=h,t.setFromRotationMatrix(Rn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,n,r,s,o=_i,a=!1){let l=this.elements,c=2*r/(t-e),h=2*r/(i-n),f=(t+e)/(t-e),u=(i+n)/(i-n),p,g;if(a)p=r/(s-r),g=s*r/(s-r);else if(o===_i)p=-(s+r)/(s-r),g=-2*s*r/(s-r);else if(o===Nn)p=-s/(s-r),g=-s*r/(s-r);else throw Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=h,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,n,r,s,o=_i,a=!1){let l=this.elements,c=2/(t-e),h=2/(i-n),f=-(t+e)/(t-e),u=-(i+n)/(i-n),p,g;if(a)p=1/(s-r),g=s/(s-r);else if(o===_i)p=-2/(s-r),g=-(s+r)/(s-r);else if(o===Nn)p=-1/(s-r),g=-r/(s-r);else throw Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=0,l[12]=f,l[1]=0,l[5]=h,l[9]=0,l[13]=u,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let n=0;n<16;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}var Vs=new A,Rn=new Xe,tx=new A(0,0,0),ix=new A(1,1,1),dr=new A,Dl=new A,nn=new A;var Mf=new Xe,Sf=new ni;class Ui{constructor(e=0,t=0,i=0,n=Ui.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=n}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,n=this._order){return this._x=e,this._y=t,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let n=e.elements,r=n[0],s=n[4],o=n[8],a=n[1],l=n[5],c=n[9],h=n[2],f=n[6],u=n[10];switch(t){case"XYZ":if(this._y=Math.asin(et(o,-1,1)),Math.abs(o)<0.9999999)this._x=Math.atan2(-c,u),this._z=Math.atan2(-s,r);else this._x=Math.atan2(f,l),this._z=0;break;case"YXZ":if(this._x=Math.asin(-et(c,-1,1)),Math.abs(c)<0.9999999)this._y=Math.atan2(o,u),this._z=Math.atan2(a,l);else this._y=Math.atan2(-h,r),this._z=0;break;case"ZXY":if(this._x=Math.asin(et(f,-1,1)),Math.abs(f)<0.9999999)this._y=Math.atan2(-h,u),this._z=Math.atan2(-s,l);else this._y=0,this._z=Math.atan2(a,r);break;case"ZYX":if(this._y=Math.asin(-et(h,-1,1)),Math.abs(h)<0.9999999)this._x=Math.atan2(f,u),this._z=Math.atan2(a,r);else this._x=0,this._z=Math.atan2(-s,l);break;case"YZX":if(this._z=Math.asin(et(a,-1,1)),Math.abs(a)<0.9999999)this._x=Math.atan2(-c,l),this._y=Math.atan2(-h,r);else this._x=0,this._y=Math.atan2(o,u);break;case"XZY":if(this._z=Math.asin(-et(s,-1,1)),Math.abs(s)<0.9999999)this._x=Math.atan2(f,l),this._y=Math.atan2(o,r);else this._x=Math.atan2(-c,u),this._y=0;break;default:ge("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}if(this._order=t,i===!0)this._onChangeCallback();return this}setFromQuaternion(e,t,i){return Mf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Mf,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Sf.setFromEuler(this),this.setFromQuaternion(Sf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){if(this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0)this._order=e[3];return this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ui.DEFAULT_ORDER="XYZ";class pr{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}var nx=0,bf=new A,Ws=new ni,Kn=new Xe,Nl=new A,ba=new A,rx=new A,sx=new ni,Ef=new A(1,0,0),Tf=new A(0,1,0),wf=new A(0,0,1),Af={type:"added"},ox={type:"removed"},Xs={type:"childadded",child:null},fh={type:"childremoved",child:null};class at extends ci{constructor(){super();this.isObject3D=!0,Object.defineProperty(this,"id",{value:nx++}),this.uuid=yi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=at.DEFAULT_UP.clone();let e=new A,t=new Ui,i=new ni,n=new A(1,1,1);function r(){i.setFromEuler(t,!1)}function s(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new Xe},normalMatrix:{value:new Je}}),this.matrix=new Xe,this.matrixWorld=new Xe,this.matrixAutoUpdate=at.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=at.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new pr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null)this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ws.setFromAxisAngle(e,t),this.quaternion.multiply(Ws),this}rotateOnWorldAxis(e,t){return Ws.setFromAxisAngle(e,t),this.quaternion.premultiply(Ws),this}rotateX(e){return this.rotateOnAxis(Ef,e)}rotateY(e){return this.rotateOnAxis(Tf,e)}rotateZ(e){return this.rotateOnAxis(wf,e)}translateOnAxis(e,t){return bf.copy(e).applyQuaternion(this.quaternion),this.position.add(bf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ef,e)}translateY(e){return this.translateOnAxis(Tf,e)}translateZ(e){return this.translateOnAxis(wf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Kn.copy(this.matrixWorld).invert())}lookAt(e,t,i){if(e.isVector3)Nl.copy(e);else Nl.set(e,t,i);let n=this.parent;if(this.updateWorldMatrix(!0,!1),ba.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight)Kn.lookAt(ba,Nl,this.up);else Kn.lookAt(Nl,ba,this.up);if(this.quaternion.setFromRotationMatrix(Kn),n)Kn.extractRotation(n.matrixWorld),Ws.setFromRotationMatrix(Kn),this.quaternion.premultiply(Ws.invert())}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}if(e===this)return Fe("Object3D.add: object can't be added as a child of itself.",e),this;if(e&&e.isObject3D)e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Af),Xs.child=e,this.dispatchEvent(Xs),Xs.child=null;else Fe("Object3D.add: object not an instance of THREE.Object3D.",e);return this}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);if(t!==-1)e.parent=null,this.children.splice(t,1),e.dispatchEvent(ox),fh.child=e,this.dispatchEvent(fh),fh.child=null;return this}removeFromParent(){let e=this.parent;if(e!==null)e.remove(this);return this}clear(){return this.remove(...this.children)}attach(e){if(this.updateWorldMatrix(!0,!1),Kn.copy(this.matrixWorld).invert(),e.parent!==null)e.parent.updateWorldMatrix(!0,!1),Kn.multiply(e.parent.matrixWorld);return e.applyMatrix4(Kn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Af),Xs.child=e,this.dispatchEvent(Xs),Xs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,n=this.children.length;i<n;i++){let s=this.children[i].getObjectByProperty(e,t);if(s!==void 0)return s}return}getObjectsByProperty(e,t,i=[]){if(this[e]===t)i.push(this);let n=this.children;for(let r=0,s=n.length;r<s;r++)n[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ba,e,rx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ba,sx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;if(t!==null)e(t),t.traverseAncestors(e)}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let{x:t,y:i,z:n}=e,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*n,r[13]+=i-r[1]*t-r[5]*i-r[9]*n,r[14]+=n-r[2]*t-r[6]*i-r[10]*n}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||e){if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,e=!0}let t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){let n=this.parent;if(e===!0&&n!==null)n.updateWorldMatrix(!0,!1);if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||i){if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,i=!0}if(t===!0){let r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0,i)}}toJSON(e){let t=e===void 0||typeof e==="string",i={};if(t)e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"};let n={};if(n.uuid=this.uuid,n.type=this.type,n.name=this.name,n.castShadow=this.castShadow,n.receiveShadow=this.receiveShadow,n.visible=this.visible,n.frustumCulled=this.frustumCulled,n.renderOrder=this.renderOrder,n.static=this.static,n.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0)n.userData=this.userData;if(n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.pivot!==null)n.pivot=this.pivot.toArray();if(this.morphTargetDictionary!==void 0)n.morphTargetDictionary=Object.assign({},this.morphTargetDictionary);if(this.morphTargetInfluences!==void 0)n.morphTargetInfluences=this.morphTargetInfluences.slice();if(this.isInstancedMesh){if(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null)n.instanceColor=this.instanceColor.toJSON()}if(this.isBatchedMesh){if(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.geometryInfo=this._geometryInfo.map((o)=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),n.instanceInfo=this._instanceInfo.map((o)=>({...o})),n.availableInstanceIds=this._availableInstanceIds.slice(),n.availableGeometryIds=this._availableGeometryIds.slice(),n.nextIndexStart=this._nextIndexStart,n.nextVertexStart=this._nextVertexStart,n.geometryCount=this._geometryCount,n.maxInstanceCount=this._maxInstanceCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.matricesTexture=this._matricesTexture.toJSON(e),n.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null)n.colorsTexture=this._colorsTexture.toJSON(e);if(this.boundingSphere!==null)n.boundingSphere=this.boundingSphere.toJSON();if(this.boundingBox!==null)n.boundingBox=this.boundingBox.toJSON()}function r(o,a){if(o[a.uuid]===void 0)o[a.uuid]=a.toJSON(e);return a.uuid}if(this.isScene){if(this.background){if(this.background.isColor)n.background=this.background.toJSON();else if(this.background.isTexture)n.background=this.background.toJSON(e).uuid}if(this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0)n.environment=this.environment.toJSON(e).uuid}else if(this.isMesh||this.isLine||this.isPoints){n.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let a=o.shapes;if(Array.isArray(a))for(let l=0,c=a.length;l<c;l++){let h=a[l];r(e.shapes,h)}else r(e.shapes,a)}}if(this.isSkinnedMesh){if(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0)r(e.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid}if(this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let a=0,l=this.material.length;a<l;a++)o.push(r(e.materials,this.material[a]));n.material=o}else n.material=r(e.materials,this.material);if(this.children.length>0){n.children=[];for(let o=0;o<this.children.length;o++)n.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){n.animations=[];for(let o=0;o<this.animations.length;o++){let a=this.animations[o];n.animations.push(r(e.animations,a))}}if(t){let o=s(e.geometries),a=s(e.materials),l=s(e.textures),c=s(e.images),h=s(e.shapes),f=s(e.skeletons),u=s(e.animations),p=s(e.nodes);if(o.length>0)i.geometries=o;if(a.length>0)i.materials=a;if(l.length>0)i.textures=l;if(c.length>0)i.images=c;if(h.length>0)i.shapes=h;if(f.length>0)i.skeletons=f;if(u.length>0)i.animations=u;if(p.length>0)i.nodes=p}return i.object=n,i;function s(o){let a=[];for(let l in o){let c=o[l];delete c.metadata,a.push(c)}return a}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let n=e.children[i];this.add(n.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}at.DEFAULT_UP=new A(0,1,0);at.DEFAULT_MATRIX_AUTO_UPDATE=!0;at.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class ft extends at{constructor(){super();this.isGroup=!0,this.type="Group"}}var ax={type:"move"};class qs{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){if(this._hand===null)this._hand=new ft,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1};return this._hand}getTargetRaySpace(){if(this._targetRay===null)this._targetRay=new ft,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new A,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new A;return this._targetRay}getGripSpace(){if(this._grip===null)this._grip=new ft,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new A,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new A,this._grip.eventsEnabled=!1;return this._grip}dispatchEvent(e){if(this._targetRay!==null)this._targetRay.dispatchEvent(e);if(this._grip!==null)this._grip.dispatchEvent(e);if(this._hand!==null)this._hand.dispatchEvent(e);return this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){if(this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null)this._targetRay.visible=!1;if(this._grip!==null)this._grip.visible=!1;if(this._hand!==null)this._hand.visible=!1;return this}update(e,t,i){let n=null,r=null,s=null,o=this._targetRay,a=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){s=!0;for(let g of e.hand.values()){let _=t.getJointPose(g,i),m=this._getHandJoint(l,g);if(_!==null)m.matrix.fromArray(_.transform.matrix),m.matrix.decompose(m.position,m.quaternion,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=_.radius;m.visible=_!==null}let c=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],f=c.position.distanceTo(h.position),u=0.02,p=0.005;if(l.inputState.pinching&&f>u+p)l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this});else if(!l.inputState.pinching&&f<=u-p)l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this})}else if(a!==null&&e.gripSpace){if(r=t.getPose(e.gripSpace,i),r!==null){if(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity)a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity);else a.hasLinearVelocity=!1;if(r.angularVelocity)a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity);else a.hasAngularVelocity=!1;if(a.eventsEnabled)a.dispatchEvent({type:"gripUpdated",data:e,target:this})}}if(o!==null){if(n=t.getPose(e.targetRaySpace,i),n===null&&r!==null)n=r;if(n!==null){if(o.matrix.fromArray(n.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,n.linearVelocity)o.hasLinearVelocity=!0,o.linearVelocity.copy(n.linearVelocity);else o.hasLinearVelocity=!1;if(n.angularVelocity)o.hasAngularVelocity=!0,o.angularVelocity.copy(n.angularVelocity);else o.hasAngularVelocity=!1;this.dispatchEvent(ax)}}}if(o!==null)o.visible=n!==null;if(a!==null)a.visible=r!==null;if(l!==null)l.visible=s!==null;return this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new ft;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}var Rf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},mr={h:0,s:0,l:0},Ul={h:0,s:0,l:0};function dh(e,t,i){if(i<0)i+=1;if(i>1)i-=1;if(i<0.16666666666666666)return e+(t-e)*6*i;if(i<0.5)return t;if(i<0.6666666666666666)return e+(t-e)*6*(0.6666666666666666-i);return e}class ue{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let n=e;if(n&&n.isColor)this.copy(n);else if(typeof n==="number")this.setHex(n);else if(typeof n==="string")this.setStyle(n)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=wt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,tt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,n=tt.workingColorSpace){return this.r=e,this.g=t,this.b=i,tt.colorSpaceToWorking(this,n),this}setHSL(e,t,i,n=tt.workingColorSpace){if(e=gf(e,1),t=et(t,0,1),i=et(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=0.5?i*(1+t):i+t-i*t,s=2*i-r;this.r=dh(s,r,e+0.3333333333333333),this.g=dh(s,r,e),this.b=dh(s,r,e-0.3333333333333333)}return tt.colorSpaceToWorking(this,n),this}setStyle(e,t=wt){function i(r){if(r===void 0)return;if(parseFloat(r)<1)ge("Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,s=n[1],o=n[2];switch(s){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:ge("Color: Unknown color model "+e)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=n[1],s=r.length;if(s===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);else if(s===6)return this.setHex(parseInt(r,16),t);else ge("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=wt){let i=Rf[e.toLowerCase()];if(i!==void 0)this.setHex(i,t);else ge("Color: Unknown color "+e);return this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=An(e.r),this.g=An(e.g),this.b=An(e.b),this}copyLinearToSRGB(e){return this.r=Jr(e.r),this.g=Jr(e.g),this.b=Jr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=wt){return tt.workingToColorSpace(Fi.copy(this),e),Math.round(et(Fi.r*255,0,255))*65536+Math.round(et(Fi.g*255,0,255))*256+Math.round(et(Fi.b*255,0,255))}getHexString(e=wt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=tt.workingColorSpace){tt.workingToColorSpace(Fi.copy(this),t);let{r:i,g:n,b:r}=Fi,s=Math.max(i,n,r),o=Math.min(i,n,r),a,l,c=(o+s)/2;if(o===s)a=0,l=0;else{let h=s-o;switch(l=c<=0.5?h/(s+o):h/(2-s-o),s){case i:a=(n-r)/h+(n<r?6:0);break;case n:a=(r-i)/h+2;break;case r:a=(i-n)/h+4;break}a/=6}return e.h=a,e.s=l,e.l=c,e}getRGB(e,t=tt.workingColorSpace){return tt.workingToColorSpace(Fi.copy(this),t),e.r=Fi.r,e.g=Fi.g,e.b=Fi.b,e}getStyle(e=wt){tt.workingToColorSpace(Fi.copy(this),e);let{r:t,g:i,b:n}=Fi;if(e!==wt)return`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`;return`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(e,t,i){return this.getHSL(mr),this.setHSL(mr.h+e,mr.s+t,mr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(mr),e.getHSL(Ul);let i=Cl(mr.h,Ul.h,t),n=Cl(mr.s,Ul.s,t),r=Cl(mr.l,Ul.l,t);return this.setHSL(i,n,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,n=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*n,this.g=r[1]*t+r[4]*i+r[7]*n,this.b=r[2]*t+r[5]*i+r[8]*n,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}var Fi=new ue;ue.NAMES=Rf;class Ys{constructor(e,t=1,i=1000){this.isFog=!0,this.name="",this.color=new ue(e),this.near=t,this.far=i}clone(){return new Ys(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class $r extends at{constructor(){super();if(this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ui,this.environmentIntensity=1,this.environmentRotation=new Ui,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);if(this.fog!==null)t.object.fog=this.fog.toJSON();return t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}var Cn=new A,$n=new A,ph=new A,Qn=new A,Zs=new A,Js=new A,Cf=new A,mh=new A,gh=new A,xh=new A,_h=new St,yh=new St,vh=new St;class Ai{constructor(e=new A,t=new A,i=new A){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,n){n.subVectors(i,t),Cn.subVectors(e,t),n.cross(Cn);let r=n.lengthSq();if(r>0)return n.multiplyScalar(1/Math.sqrt(r));return n.set(0,0,0)}static getBarycoord(e,t,i,n,r){Cn.subVectors(n,t),$n.subVectors(i,t),ph.subVectors(e,t);let s=Cn.dot(Cn),o=Cn.dot($n),a=Cn.dot(ph),l=$n.dot($n),c=$n.dot(ph),h=s*l-o*o;if(h===0)return r.set(0,0,0),null;let f=1/h,u=(l*a-o*c)*f,p=(s*c-o*a)*f;return r.set(1-u-p,p,u)}static containsPoint(e,t,i,n){if(this.getBarycoord(e,t,i,n,Qn)===null)return!1;return Qn.x>=0&&Qn.y>=0&&Qn.x+Qn.y<=1}static getInterpolation(e,t,i,n,r,s,o,a){if(this.getBarycoord(e,t,i,n,Qn)===null){if(a.x=0,a.y=0,"z"in a)a.z=0;if("w"in a)a.w=0;return null}return a.setScalar(0),a.addScaledVector(r,Qn.x),a.addScaledVector(s,Qn.y),a.addScaledVector(o,Qn.z),a}static getInterpolatedAttribute(e,t,i,n,r,s){return _h.setScalar(0),yh.setScalar(0),vh.setScalar(0),_h.fromBufferAttribute(e,t),yh.fromBufferAttribute(e,i),vh.fromBufferAttribute(e,n),s.setScalar(0),s.addScaledVector(_h,r.x),s.addScaledVector(yh,r.y),s.addScaledVector(vh,r.z),s}static isFrontFacing(e,t,i,n){return Cn.subVectors(i,t),$n.subVectors(e,t),Cn.cross($n).dot(n)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,n){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[n]),this}setFromAttributeAndIndices(e,t,i,n){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Cn.subVectors(this.c,this.b),$n.subVectors(this.a,this.b),Cn.cross($n).length()*0.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(0.3333333333333333)}getNormal(e){return Ai.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ai.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,n,r){return Ai.getInterpolation(e,this.a,this.b,this.c,t,i,n,r)}containsPoint(e){return Ai.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ai.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,n=this.b,r=this.c,s,o;Zs.subVectors(n,i),Js.subVectors(r,i),mh.subVectors(e,i);let a=Zs.dot(mh),l=Js.dot(mh);if(a<=0&&l<=0)return t.copy(i);gh.subVectors(e,n);let c=Zs.dot(gh),h=Js.dot(gh);if(c>=0&&h<=c)return t.copy(n);let f=a*h-c*l;if(f<=0&&a>=0&&c<=0&&a-c>0)return s=a/(a-c),t.copy(i).addScaledVector(Zs,s);xh.subVectors(e,r);let u=Zs.dot(xh),p=Js.dot(xh);if(p>=0&&u<=p)return t.copy(r);let g=u*l-a*p;if(g<=0&&l>=0&&p<=0)return o=l/(l-p),t.copy(i).addScaledVector(Js,o);let _=c*p-u*h;if(_<=0&&h-c>=0&&u-p>=0)return Cf.subVectors(r,n),o=(h-c)/(h-c+(u-p)),t.copy(n).addScaledVector(Cf,o);let m=1/(_+g+f);return s=g*m,o=f*m,t.copy(i).addScaledVector(Zs,s).addScaledVector(Js,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class vi{constructor(e=new A(1/0,1/0,1/0),t=new A(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Pn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Pn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Pn.copy(t).multiplyScalar(0.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(0.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let s=0,o=r.count;s<o;s++){if(e.isMesh===!0)e.getVertexPosition(s,Pn);else Pn.fromBufferAttribute(r,s);Pn.applyMatrix4(e.matrixWorld),this.expandByPoint(Pn)}else{if(e.boundingBox!==void 0){if(e.boundingBox===null)e.computeBoundingBox();Fl.copy(e.boundingBox)}else{if(i.boundingBox===null)i.computeBoundingBox();Fl.copy(i.boundingBox)}Fl.applyMatrix4(e.matrixWorld),this.union(Fl)}}let n=e.children;for(let r=0,s=n.length;r<s;r++)this.expandByObject(n[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Pn),Pn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;if(e.normal.x>0)t=e.normal.x*this.min.x,i=e.normal.x*this.max.x;else t=e.normal.x*this.max.x,i=e.normal.x*this.min.x;if(e.normal.y>0)t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y;else t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y;if(e.normal.z>0)t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z;else t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z;return t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ea),Bl.subVectors(this.max,Ea),Ks.subVectors(e.a,Ea),$s.subVectors(e.b,Ea),Qs.subVectors(e.c,Ea),gr.subVectors($s,Ks),xr.subVectors(Qs,$s),Qr.subVectors(Ks,Qs);let t=[0,-gr.z,gr.y,0,-xr.z,xr.y,0,-Qr.z,Qr.y,gr.z,0,-gr.x,xr.z,0,-xr.x,Qr.z,0,-Qr.x,-gr.y,gr.x,0,-xr.y,xr.x,0,-Qr.y,Qr.x,0];if(!Mh(t,Ks,$s,Qs,Bl))return!1;if(t=[1,0,0,0,1,0,0,0,1],!Mh(t,Ks,$s,Qs,Bl))return!1;return Ol.crossVectors(gr,xr),t=[Ol.x,Ol.y,Ol.z],Mh(t,Ks,$s,Qs,Bl)}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Pn).distanceTo(e)}getBoundingSphere(e){if(this.isEmpty())e.makeEmpty();else this.getCenter(e.center),e.radius=this.getSize(Pn).length()*0.5;return e}intersect(e){if(this.min.max(e.min),this.max.min(e.max),this.isEmpty())this.makeEmpty();return this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){if(this.isEmpty())return this;return jn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),jn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),jn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),jn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),jn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),jn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),jn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),jn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(jn),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}var jn=[new A,new A,new A,new A,new A,new A,new A,new A],Pn=new A,Fl=new vi,Ks=new A,$s=new A,Qs=new A,gr=new A,xr=new A,Qr=new A,Ea=new A,Bl=new A,Ol=new A,jr=new A;function Mh(e,t,i,n,r){for(let s=0,o=e.length-3;s<=o;s+=3){jr.fromArray(e,s);let a=r.x*Math.abs(jr.x)+r.y*Math.abs(jr.y)+r.z*Math.abs(jr.z),l=t.dot(jr),c=i.dot(jr),h=n.dot(jr);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var ri=new A,zl=new k,lx=0;class Yt extends ci{constructor(e,t,i=!1){super();if(Array.isArray(e))throw TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:lx++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Ma,this.updateRanges=[],this.gpuType=ti,this.version=0,this._normalizationScale=e!==void 0?Gs(e):void 0}onUploadCallback(){}set needsUpdate(e){if(e===!0)this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let n=0,r=this.itemSize;n<r;n++)this.array[e+n]=t.array[i+n];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)zl.fromBufferAttribute(this,t),zl.applyMatrix3(e),this.setXY(t,zl.x,zl.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)ri.fromBufferAttribute(this,t),ri.applyMatrix3(e),this.setXYZ(t,ri.x,ri.y,ri.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)ri.fromBufferAttribute(this,t),ri.applyMatrix4(e),this.setXYZ(t,ri.x,ri.y,ri.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)ri.fromBufferAttribute(this,t),ri.applyNormalMatrix(e),this.setXYZ(t,ri.x,ri.y,ri.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)ri.fromBufferAttribute(this,t),ri.transformDirection(e),this.setXYZ(t,ri.x,ri.y,ri.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];if(this.normalized)i=this._denormalize(i);return i}setComponent(e,t,i){if(this.normalized)i=this._normalize(i);return this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];if(this.normalized)t=this._denormalize(t);return t}setX(e,t){if(this.normalized)t=this._normalize(t);return this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];if(this.normalized)t=this._denormalize(t);return t}setY(e,t){if(this.normalized)t=this._normalize(t);return this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];if(this.normalized)t=this._denormalize(t);return t}setZ(e,t){if(this.normalized)t=this._normalize(t);return this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];if(this.normalized)t=this._denormalize(t);return t}setW(e,t){if(this.normalized)t=this._normalize(t);return this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){if(e*=this.itemSize,this.normalized)t=this._normalize(t),i=this._normalize(i);return this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,n){if(e*=this.itemSize,this.normalized)t=this._normalize(t),i=this._normalize(i),n=this._normalize(n);return this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this}setXYZW(e,t,i,n,r){if(e*=this.itemSize,this.normalized)t=this._normalize(t),i=this._normalize(i),n=this._normalize(n),r=this._normalize(r);return this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Pl(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):Il(e,this.array)}}class Ta extends Yt{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class wa extends Yt{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class _e extends Yt{constructor(e,t,i){super(new Float32Array(e),t,i)}}var cx=new vi,Aa=new A,Sh=new A;class Mi{constructor(e=new A,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;if(t!==void 0)i.copy(t);else cx.setFromPoints(e).getCenter(i);let n=0;for(let r=0,s=e.length;r<s;r++)n=Math.max(n,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(n),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);if(t.copy(e),i>this.radius*this.radius)t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center);return t}getBoundingBox(e){if(this.isEmpty())return e.makeEmpty(),e;return e.set(this.center,this.center),e.expandByScalar(this.radius),e}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Aa.subVectors(e,this.center);let t=Aa.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),n=(i-this.radius)*0.5;this.center.addScaledVector(Aa,n/i),this.radius+=n}return this}union(e){if(e.isEmpty())return this;if(this.isEmpty())return this.copy(e),this;if(this.center.equals(e.center)===!0)this.radius=Math.max(this.radius,e.radius);else Sh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Aa.copy(e.center).add(Sh)),this.expandByPoint(Aa.copy(e.center).sub(Sh));return this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}var hx=0,mn=new Xe,bh=new at,js=new A,rn=new vi,Ra=new vi,Si=new A;class Be extends ci{constructor(){super();this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:hx++}),this.uuid=yi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){if(Array.isArray(e))this.index=new((ff(e))?wa:Ta)(e,1);else this.index=e;return this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;if(t!==void 0)t.applyMatrix4(e),t.needsUpdate=!0;let i=this.attributes.normal;if(i!==void 0){let r=new Je().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let n=this.attributes.tangent;if(n!==void 0)n.transformDirection(e),n.needsUpdate=!0;if(this.boundingBox!==null)this.computeBoundingBox();if(this.boundingSphere!==null)this.computeBoundingSphere();return this._transformed=!0,this}applyQuaternion(e){return mn.makeRotationFromQuaternion(e),this.applyMatrix4(mn),this}rotateX(e){return mn.makeRotationX(e),this.applyMatrix4(mn),this}rotateY(e){return mn.makeRotationY(e),this.applyMatrix4(mn),this}rotateZ(e){return mn.makeRotationZ(e),this.applyMatrix4(mn),this}translate(e,t,i){return mn.makeTranslation(e,t,i),this.applyMatrix4(mn),this}scale(e,t,i){return mn.makeScale(e,t,i),this.applyMatrix4(mn),this}lookAt(e){return bh.lookAt(e),bh.updateMatrix(),this.applyMatrix4(bh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(js).negate(),this.translate(js.x,js.y,js.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let n=0,r=e.length;n<r;n++){let s=e[n];i.push(s.x,s.y,s.z||0)}this.setAttribute("position",new _e(i,3))}else{let i=Math.min(e.length,t.count);for(let n=0;n<i;n++){let r=e[n];t.setXYZ(n,r.x,r.y,r.z||0)}if(e.length>t.count)ge("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.");t.needsUpdate=!0}return this}computeBoundingBox(){if(this.boundingBox===null)this.boundingBox=new vi;let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Fe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new A(-1/0,-1/0,-1/0),new A(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,n=t.length;i<n;i++){let r=t[i];if(rn.setFromBufferAttribute(r),this.morphTargetsRelative)Si.addVectors(this.boundingBox.min,rn.min),this.boundingBox.expandByPoint(Si),Si.addVectors(this.boundingBox.max,rn.max),this.boundingBox.expandByPoint(Si);else this.boundingBox.expandByPoint(rn.min),this.boundingBox.expandByPoint(rn.max)}}else this.boundingBox.makeEmpty();if(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))Fe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){if(this.boundingSphere===null)this.boundingSphere=new Mi;let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Fe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new A,1/0);return}if(e){let i=this.boundingSphere.center;if(rn.setFromBufferAttribute(e),t)for(let r=0,s=t.length;r<s;r++){let o=t[r];if(Ra.setFromBufferAttribute(o),this.morphTargetsRelative)Si.addVectors(rn.min,Ra.min),rn.expandByPoint(Si),Si.addVectors(rn.max,Ra.max),rn.expandByPoint(Si);else rn.expandByPoint(Ra.min),rn.expandByPoint(Ra.max)}rn.getCenter(i);let n=0;for(let r=0,s=e.count;r<s;r++)Si.fromBufferAttribute(e,r),n=Math.max(n,i.distanceToSquared(Si));if(t)for(let r=0,s=t.length;r<s;r++){let o=t[r],a=this.morphTargetsRelative;for(let l=0,c=o.count;l<c;l++){if(Si.fromBufferAttribute(o,l),a)js.fromBufferAttribute(e,l),Si.add(js);n=Math.max(n,i.distanceToSquared(Si))}}if(this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius))Fe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Fe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let{position:i,normal:n,uv:r}=t,s=this.getAttribute("tangent");if(s===void 0||s.count!==i.count)s=new Yt(new Float32Array(4*i.count),4),this.setAttribute("tangent",s);let o=[],a=[],l=new Uint8Array(i.count);for(let M=0;M<i.count;M++)o[M]=new A,a[M]=new A;let c=new A,h=new A,f=new A,u=new k,p=new k,g=new k,_=new A,m=new A;function d(M,R,U){l[M]=l[R]=l[U]=1,c.fromBufferAttribute(i,M),h.fromBufferAttribute(i,R),f.fromBufferAttribute(i,U),u.fromBufferAttribute(r,M),p.fromBufferAttribute(r,R),g.fromBufferAttribute(r,U),h.sub(c),f.sub(c),p.sub(u),g.sub(u);let I=1/(p.x*g.y-g.x*p.y);if(!isFinite(I))return;_.copy(h).multiplyScalar(g.y).addScaledVector(f,-p.y).multiplyScalar(I),m.copy(f).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(I),o[M].add(_),o[R].add(_),o[U].add(_),a[M].add(m),a[R].add(m),a[U].add(m)}let v=this.groups;if(v.length===0)v=[{start:0,count:e.count}];for(let M=0,R=v.length;M<R;++M){let U=v[M],{start:I,count:O}=U;for(let te=I,P=I+O;te<P;te+=3)d(e.getX(te+0),e.getX(te+1),e.getX(te+2))}let y=new A,S=new A,E=new A,w=new A;function x(M){E.fromBufferAttribute(n,M),w.copy(E);let R=o[M];y.copy(R),y.sub(E.multiplyScalar(E.dot(R))).normalize(),S.crossVectors(w,R);let I=S.dot(a[M])<0?-1:1;s.setXYZW(M,y.x,y.y,y.z,I)}for(let M=0,R=i.count;M<R;++M)if(l[M])x(M);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new Yt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,u=i.count;f<u;f++)i.setXYZ(f,0,0,0);let n=new A,r=new A,s=new A,o=new A,a=new A,l=new A,c=new A,h=new A;if(e)for(let f=0,u=e.count;f<u;f+=3){let p=e.getX(f+0),g=e.getX(f+1),_=e.getX(f+2);n.fromBufferAttribute(t,p),r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),c.subVectors(s,r),h.subVectors(n,r),c.cross(h),o.fromBufferAttribute(i,p),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),o.add(c),a.add(c),l.add(c),i.setXYZ(p,o.x,o.y,o.z),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z)}else for(let f=0,u=t.count;f<u;f+=3)n.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),s.fromBufferAttribute(t,f+2),c.subVectors(s,r),h.subVectors(n,r),c.cross(h),i.setXYZ(f+0,c.x,c.y,c.z),i.setXYZ(f+1,c.x,c.y,c.z),i.setXYZ(f+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Si.fromBufferAttribute(e,t),Si.normalize(),e.setXYZ(t,Si.x,Si.y,Si.z)}toNonIndexed(){function e(o,a){let{array:l,itemSize:c,normalized:h}=o,f=new l.constructor(a.length*c),u=0,p=0;for(let g=0,_=a.length;g<_;g++){if(o.isInterleavedBufferAttribute)u=a[g]*o.data.stride+o.offset;else u=a[g]*c;for(let m=0;m<c;m++)f[p++]=l[u++]}return new Yt(f,c,h)}if(this.index===null)return ge("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new Be,i=this.index.array,n=this.attributes;for(let o in n){let a=n[o],l=e(a,i);t.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let a=[],l=r[o];for(let c=0,h=l.length;c<h;c++){let f=l[c],u=e(f,i);a.push(u)}t.morphAttributes[o]=a}t.morphTargetsRelative=this.morphTargetsRelative;let s=this.groups;for(let o=0,a=s.length;o<a;o++){let l=s[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0)e.userData=this.userData;if(this.parameters!==void 0&&this._transformed!==!0){let a=this.parameters;for(let l in a)if(a[l]!==void 0)e[l]=a[l];return e}e.data={attributes:{}};let t=this.index;if(t!==null)e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)};let i=this.attributes;for(let a in i){let l=i[a];e.data.attributes[a]=l.toJSON(e.data)}let n={},r=!1;for(let a in this.morphAttributes){let l=this.morphAttributes[a],c=[];for(let h=0,f=l.length;h<f;h++){let u=l[h];c.push(u.toJSON(e.data))}if(c.length>0)n[a]=c,r=!0}if(r)e.data.morphAttributes=n,e.data.morphTargetsRelative=this.morphTargetsRelative;let s=this.groups;if(s.length>0)e.data.groups=JSON.parse(JSON.stringify(s));let o=this.boundingSphere;if(o!==null)e.data.boundingSphere=o.toJSON();return e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;if(i!==null)this.setIndex(i.clone());let n=e.attributes;for(let l in n){let c=n[l];this.setAttribute(l,c.clone(t))}let r=e.morphAttributes;for(let l in r){let c=[],h=r[l];for(let f=0,u=h.length;f<u;f++)c.push(h[f].clone(t));this.morphAttributes[l]=c}this.morphTargetsRelative=e.morphTargetsRelative;let s=e.groups;for(let l=0,c=s.length;l<c;l++){let h=s[l];this.addGroup(h.start,h.count,h.materialIndex)}let o=e.boundingBox;if(o!==null)this.boundingBox=o.clone();let a=e.boundingSphere;if(a!==null)this.boundingSphere=a.clone();return this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class es{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Ma,this.updateRanges=[],this.version=0,this.uuid=yi()}onUploadCallback(){}set needsUpdate(e){if(e===!0)this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let n=0,r=this.stride;n<r;n++)this.array[e+n]=t.array[i+n];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){if(e.arrayBuffers===void 0)e.arrayBuffers={};let t=Pf(this.array);if(e.arrayBuffers[t]===void 0)e.arrayBuffers[t]=this.array.slice(0).buffer;let i=new this.array.constructor(e.arrayBuffers[t]),n=new this.constructor(i,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){if(e.arrayBuffers===void 0)e.arrayBuffers={};let t=Pf(this.array);if(e.arrayBuffers[t]===void 0)e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer));let i={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return i.usage=this.usage,i}}function Pf(e){if(e.buffer._uuid===void 0)e.buffer._uuid=yi();if(e.byteOffset===0&&e.byteLength===e.buffer.byteLength)return e.buffer._uuid;return e.buffer._uuid+":"+e.byteOffset+":"+e.byteLength}var Hi=new A;class _r{constructor(e,t,i,n=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=n,this._normalizationScale=e!==void 0?Gs(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Hi.fromBufferAttribute(this,t),Hi.applyMatrix4(e),this.setXYZ(t,Hi.x,Hi.y,Hi.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Hi.fromBufferAttribute(this,t),Hi.applyNormalMatrix(e),this.setXYZ(t,Hi.x,Hi.y,Hi.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Hi.fromBufferAttribute(this,t),Hi.transformDirection(e),this.setXYZ(t,Hi.x,Hi.y,Hi.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];if(this.normalized)i=this._denormalize(i);return i}setComponent(e,t,i){if(this.normalized)i=this._normalize(i);return this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){if(this.normalized)t=this._normalize(t);return this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){if(this.normalized)t=this._normalize(t);return this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){if(this.normalized)t=this._normalize(t);return this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){if(this.normalized)t=this._normalize(t);return this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];if(this.normalized)t=this._denormalize(t);return t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];if(this.normalized)t=this._denormalize(t);return t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];if(this.normalized)t=this._denormalize(t);return t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];if(this.normalized)t=this._denormalize(t);return t}setXY(e,t,i){if(e=e*this.data.stride+this.offset,this.normalized)t=this._normalize(t),i=this._normalize(i);return this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,n){if(e=e*this.data.stride+this.offset,this.normalized)t=this._normalize(t),i=this._normalize(i),n=this._normalize(n);return this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=n,this}setXYZW(e,t,i,n,r){if(e=e*this.data.stride+this.offset,this.normalized)t=this._normalize(t),i=this._normalize(i),n=this._normalize(n),r=this._normalize(r);return this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=n,this.data.array[e+3]=r,this}clone(e){if(e===void 0){Yr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let n=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[n+r])}return new Yt(new this.array.constructor(t),this.itemSize,this.normalized)}else{if(e.interleavedBuffers===void 0)e.interleavedBuffers={};if(e.interleavedBuffers[this.data.uuid]===void 0)e.interleavedBuffers[this.data.uuid]=this.data.clone(e);return new _r(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}}toJSON(e){if(e===void 0){Yr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let n=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[n+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else{if(e.interleavedBuffers===void 0)e.interleavedBuffers={};if(e.interleavedBuffers[this.data.uuid]===void 0)e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e);return{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Pl(e,this.data.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):Il(e,this.data.array)}}var Eh=new A,ux=new A,fx=new Je;class sn{constructor(e=new A(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,n){return this.normal.set(e,t,i),this.constant=n,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let n=Eh.subVectors(i,t).cross(ux.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(n,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let n=e.delta(Eh),r=this.normal.dot(n);if(r===0){if(this.distanceToPoint(e.start)===0)return t.copy(e.start);return null}let s=-(e.start.dot(this.normal)+this.constant)/r;if(i===!0&&(s<0||s>1))return null;return t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||fx.getNormalMatrix(e),n=this.coplanarPoint(Eh).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}var dx=0;class Ht extends ci{constructor(){super();this.isMaterial=!0,Object.defineProperty(this,"id",{value:dx++}),this.uuid=yi(),this.name="",this.type="Material",this.blending=lr,this.side=hn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ul,this.blendDst=fl,this.blendEquation=cr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ue(0,0,0),this.blendAlpha=0,this.depthFunc=hr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=sf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Tl,this.stencilZFail=Tl,this.stencilZPass=Tl,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){if(this._alphaTest>0!==e>0)this.version++;this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e===void 0)return;for(let t in e){let i=e[t];if(i===void 0){ge(`Material: parameter '${t}' has value of undefined.`);continue}let n=this[t];if(n===void 0){ge(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}if(n&&n.isColor)n.set(i);else if(n&&n.isVector2&&(i&&i.isVector2)||n&&n.isEuler&&(i&&i.isEuler)||n&&n.isVector3&&(i&&i.isVector3))n.copy(i);else this[t]=i}}toJSON(e){let t=e===void 0||typeof e==="string";if(t)e={textures:{},images:{}};let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};if(i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor)i.color=this.color.getHex();if(this.roughness!==void 0)i.roughness=this.roughness;if(this.metalness!==void 0)i.metalness=this.metalness;if(this.sheen!==void 0)i.sheen=this.sheen;if(this.sheenColor&&this.sheenColor.isColor)i.sheenColor=this.sheenColor.getHex();if(this.sheenRoughness!==void 0)i.sheenRoughness=this.sheenRoughness;if(this.emissive&&this.emissive.isColor)i.emissive=this.emissive.getHex();if(this.emissiveIntensity!==void 0)i.emissiveIntensity=this.emissiveIntensity;if(this.specular&&this.specular.isColor)i.specular=this.specular.getHex();if(this.specularIntensity!==void 0)i.specularIntensity=this.specularIntensity;if(this.specularColor&&this.specularColor.isColor)i.specularColor=this.specularColor.getHex();if(this.shininess!==void 0)i.shininess=this.shininess;if(this.clearcoat!==void 0)i.clearcoat=this.clearcoat;if(this.clearcoatRoughness!==void 0)i.clearcoatRoughness=this.clearcoatRoughness;if(this.diffuseRoughness!==void 0)i.diffuseRoughness=this.diffuseRoughness;if(this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture)i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid;if(this.clearcoatMap&&this.clearcoatMap.isTexture)i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid;if(this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture)i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid;if(this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture)i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray();if(this.sheenColorMap&&this.sheenColorMap.isTexture)i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid;if(this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture)i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid;if(this.dispersion!==void 0)i.dispersion=this.dispersion;if(this.retroreflectivity!==void 0)i.retroreflectivity=this.retroreflectivity;if(this.iridescence!==void 0)i.iridescence=this.iridescence;if(this.iridescenceIOR!==void 0)i.iridescenceIOR=this.iridescenceIOR;if(this.iridescenceThicknessMinimum!==void 0)i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum;if(this.iridescenceThicknessMaximum!==void 0)i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum;if(this.iridescenceMap&&this.iridescenceMap.isTexture)i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid;if(this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture)i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid;if(this.anisotropy!==void 0)i.anisotropy=this.anisotropy;if(this.anisotropyRotation!==void 0)i.anisotropyRotation=this.anisotropyRotation;if(this.anisotropyMap&&this.anisotropyMap.isTexture)i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid;if(this.map&&this.map.isTexture)i.map=this.map.toJSON(e).uuid;if(this.matcap&&this.matcap.isTexture)i.matcap=this.matcap.toJSON(e).uuid;if(this.alphaMap&&this.alphaMap.isTexture)i.alphaMap=this.alphaMap.toJSON(e).uuid;if(this.lightMap&&this.lightMap.isTexture)i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity;if(this.aoMap&&this.aoMap.isTexture)i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity;if(this.bumpMap&&this.bumpMap.isTexture)i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale;if(this.normalMap&&this.normalMap.isTexture)i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray();if(this.displacementMap&&this.displacementMap.isTexture)i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias;if(this.roughnessMap&&this.roughnessMap.isTexture)i.roughnessMap=this.roughnessMap.toJSON(e).uuid;if(this.metalnessMap&&this.metalnessMap.isTexture)i.metalnessMap=this.metalnessMap.toJSON(e).uuid;if(this.emissiveMap&&this.emissiveMap.isTexture)i.emissiveMap=this.emissiveMap.toJSON(e).uuid;if(this.specularMap&&this.specularMap.isTexture)i.specularMap=this.specularMap.toJSON(e).uuid;if(this.specularIntensityMap&&this.specularIntensityMap.isTexture)i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid;if(this.specularColorMap&&this.specularColorMap.isTexture)i.specularColorMap=this.specularColorMap.toJSON(e).uuid;if(this.envMap&&this.envMap.isTexture){if(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0)i.combine=this.combine}if(this.envMapRotation!==void 0)i.envMapRotation=this.envMapRotation.toArray();if(this.envMapIntensity!==void 0)i.envMapIntensity=this.envMapIntensity;if(this.reflectivity!==void 0)i.reflectivity=this.reflectivity;if(this.refractionRatio!==void 0)i.refractionRatio=this.refractionRatio;if(this.gradientMap&&this.gradientMap.isTexture)i.gradientMap=this.gradientMap.toJSON(e).uuid;if(this.transmission!==void 0)i.transmission=this.transmission;if(this.transmissionMap&&this.transmissionMap.isTexture)i.transmissionMap=this.transmissionMap.toJSON(e).uuid;if(this.thickness!==void 0)i.thickness=this.thickness;if(this.thicknessMap&&this.thicknessMap.isTexture)i.thicknessMap=this.thicknessMap.toJSON(e).uuid;if(this.attenuationDistance!==void 0)i.attenuationDistance=this.attenuationDistance;if(this.attenuationColor!==void 0)i.attenuationColor=this.attenuationColor.getHex();if(this.size!==void 0)i.size=this.size;if(this.sizeAttenuation!==void 0)i.sizeAttenuation=this.sizeAttenuation;if(Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0)i.clippingPlanes=this.clippingPlanes.map((r)=>r.toJSON());if(this.rotation!==void 0)i.rotation=this.rotation;if(this.depthPacking!==void 0)i.depthPacking=this.depthPacking;if(this.linewidth!==void 0)i.linewidth=this.linewidth;if(this.linecap!==void 0)i.linecap=this.linecap;if(this.linejoin!==void 0)i.linejoin=this.linejoin;if(this.dashSize!==void 0)i.dashSize=this.dashSize;if(this.gapSize!==void 0)i.gapSize=this.gapSize;if(this.scale!==void 0)i.scale=this.scale;if(this.wireframe!==void 0)i.wireframe=this.wireframe;if(this.wireframeLinewidth!==void 0)i.wireframeLinewidth=this.wireframeLinewidth;if(this.wireframeLinecap!==void 0)i.wireframeLinecap=this.wireframeLinecap;if(this.wireframeLinejoin!==void 0)i.wireframeLinejoin=this.wireframeLinejoin;if(this.flatShading!==void 0)i.flatShading=this.flatShading;if(this.fog!==void 0)i.fog=this.fog;if(Object.keys(this.userData).length>0)i.userData=this.userData;function n(r){let s=[];for(let o in r){let a=r[o];delete a.metadata,s.push(a)}return s}if(t){let r=n(e.textures),s=n(e.images);if(r.length>0)i.textures=r;if(s.length>0)i.images=s}return i}fromJSON(e,t){if(e.uuid!==void 0)this.uuid=e.uuid;if(e.name!==void 0)this.name=e.name;if(e.color!==void 0&&this.color!==void 0)this.color.setHex(e.color);if(e.roughness!==void 0)this.roughness=e.roughness;if(e.metalness!==void 0)this.metalness=e.metalness;if(e.sheen!==void 0)this.sheen=e.sheen;if(e.sheenColor!==void 0)this.sheenColor=new ue().setHex(e.sheenColor);if(e.sheenRoughness!==void 0)this.sheenRoughness=e.sheenRoughness;if(e.emissive!==void 0&&this.emissive!==void 0)this.emissive.setHex(e.emissive);if(e.specular!==void 0&&this.specular!==void 0)this.specular.setHex(e.specular);if(e.specularIntensity!==void 0)this.specularIntensity=e.specularIntensity;if(e.specularColor!==void 0&&this.specularColor!==void 0)this.specularColor.setHex(e.specularColor);if(e.shininess!==void 0)this.shininess=e.shininess;if(e.clearcoat!==void 0)this.clearcoat=e.clearcoat;if(e.clearcoatRoughness!==void 0)this.clearcoatRoughness=e.clearcoatRoughness;if(e.diffuseRoughness!==void 0)this.diffuseRoughness=e.diffuseRoughness;if(e.dispersion!==void 0)this.dispersion=e.dispersion;if(e.retroreflectivity!==void 0)this.retroreflectivity=e.retroreflectivity;if(e.iridescence!==void 0)this.iridescence=e.iridescence;if(e.iridescenceIOR!==void 0)this.iridescenceIOR=e.iridescenceIOR;if(e.iridescenceThicknessMinimum!==void 0)this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum;if(e.iridescenceThicknessMaximum!==void 0)this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum;if(e.iridescenceThicknessRange!==void 0)this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1];if(e.transmission!==void 0)this.transmission=e.transmission;if(e.thickness!==void 0)this.thickness=e.thickness;if(e.attenuationDistance!==void 0)this.attenuationDistance=e.attenuationDistance;if(e.attenuationColor!==void 0&&this.attenuationColor!==void 0)this.attenuationColor.setHex(e.attenuationColor);if(e.anisotropy!==void 0)this.anisotropy=e.anisotropy;if(e.anisotropyRotation!==void 0)this.anisotropyRotation=e.anisotropyRotation;if(e.fog!==void 0)this.fog=e.fog;if(e.flatShading!==void 0)this.flatShading=e.flatShading;if(e.blending!==void 0)this.blending=e.blending;if(e.combine!==void 0)this.combine=e.combine;if(e.side!==void 0)this.side=e.side;if(e.shadowSide!==void 0)this.shadowSide=e.shadowSide;if(e.opacity!==void 0)this.opacity=e.opacity;if(e.transparent!==void 0)this.transparent=e.transparent;if(e.alphaTest!==void 0)this.alphaTest=e.alphaTest;if(e.alphaHash!==void 0)this.alphaHash=e.alphaHash;if(e.depthFunc!==void 0)this.depthFunc=e.depthFunc;if(e.depthTest!==void 0)this.depthTest=e.depthTest;if(e.depthWrite!==void 0)this.depthWrite=e.depthWrite;if(e.colorWrite!==void 0)this.colorWrite=e.colorWrite;if(e.clippingPlanes!==void 0)this.clippingPlanes=e.clippingPlanes.map((i)=>new sn().fromJSON(i));if(e.clipIntersection!==void 0)this.clipIntersection=e.clipIntersection;if(e.clipShadows!==void 0)this.clipShadows=e.clipShadows;if(e.depthPacking!==void 0)this.depthPacking=e.depthPacking;if(e.blendSrc!==void 0)this.blendSrc=e.blendSrc;if(e.blendDst!==void 0)this.blendDst=e.blendDst;if(e.blendEquation!==void 0)this.blendEquation=e.blendEquation;if(e.blendSrcAlpha!==void 0)this.blendSrcAlpha=e.blendSrcAlpha;if(e.blendDstAlpha!==void 0)this.blendDstAlpha=e.blendDstAlpha;if(e.blendEquationAlpha!==void 0)this.blendEquationAlpha=e.blendEquationAlpha;if(e.blendColor!==void 0&&this.blendColor!==void 0)this.blendColor.setHex(e.blendColor);if(e.blendAlpha!==void 0)this.blendAlpha=e.blendAlpha;if(e.stencilWriteMask!==void 0)this.stencilWriteMask=e.stencilWriteMask;if(e.stencilFunc!==void 0)this.stencilFunc=e.stencilFunc;if(e.stencilRef!==void 0)this.stencilRef=e.stencilRef;if(e.stencilFuncMask!==void 0)this.stencilFuncMask=e.stencilFuncMask;if(e.stencilFail!==void 0)this.stencilFail=e.stencilFail;if(e.stencilZFail!==void 0)this.stencilZFail=e.stencilZFail;if(e.stencilZPass!==void 0)this.stencilZPass=e.stencilZPass;if(e.stencilWrite!==void 0)this.stencilWrite=e.stencilWrite;if(e.wireframe!==void 0)this.wireframe=e.wireframe;if(e.wireframeLinewidth!==void 0)this.wireframeLinewidth=e.wireframeLinewidth;if(e.wireframeLinecap!==void 0)this.wireframeLinecap=e.wireframeLinecap;if(e.wireframeLinejoin!==void 0)this.wireframeLinejoin=e.wireframeLinejoin;if(e.rotation!==void 0)this.rotation=e.rotation;if(e.linewidth!==void 0)this.linewidth=e.linewidth;if(e.linecap!==void 0)this.linecap=e.linecap;if(e.linejoin!==void 0)this.linejoin=e.linejoin;if(e.dashSize!==void 0)this.dashSize=e.dashSize;if(e.gapSize!==void 0)this.gapSize=e.gapSize;if(e.scale!==void 0)this.scale=e.scale;if(e.polygonOffset!==void 0)this.polygonOffset=e.polygonOffset;if(e.polygonOffsetFactor!==void 0)this.polygonOffsetFactor=e.polygonOffsetFactor;if(e.polygonOffsetUnits!==void 0)this.polygonOffsetUnits=e.polygonOffsetUnits;if(e.dithering!==void 0)this.dithering=e.dithering;if(e.alphaToCoverage!==void 0)this.alphaToCoverage=e.alphaToCoverage;if(e.premultipliedAlpha!==void 0)this.premultipliedAlpha=e.premultipliedAlpha;if(e.forceSinglePass!==void 0)this.forceSinglePass=e.forceSinglePass;if(e.allowOverride!==void 0)this.allowOverride=e.allowOverride;if(e.visible!==void 0)this.visible=e.visible;if(e.toneMapped!==void 0)this.toneMapped=e.toneMapped;if(e.userData!==void 0)this.userData=e.userData;if(e.vertexColors!==void 0)if(typeof e.vertexColors==="number")this.vertexColors=e.vertexColors>0;else this.vertexColors=e.vertexColors;if(e.size!==void 0)this.size=e.size;if(e.sizeAttenuation!==void 0)this.sizeAttenuation=e.sizeAttenuation;if(e.map!==void 0)this.map=t[e.map]||null;if(e.matcap!==void 0)this.matcap=t[e.matcap]||null;if(e.alphaMap!==void 0)this.alphaMap=t[e.alphaMap]||null;if(e.bumpMap!==void 0)this.bumpMap=t[e.bumpMap]||null;if(e.bumpScale!==void 0)this.bumpScale=e.bumpScale;if(e.normalMap!==void 0)this.normalMap=t[e.normalMap]||null;if(e.normalMapType!==void 0)this.normalMapType=e.normalMapType;if(e.normalScale!==void 0){let i=e.normalScale;if(Array.isArray(i)===!1)i=[i,i];this.normalScale=new k().fromArray(i)}if(e.displacementMap!==void 0)this.displacementMap=t[e.displacementMap]||null;if(e.displacementScale!==void 0)this.displacementScale=e.displacementScale;if(e.displacementBias!==void 0)this.displacementBias=e.displacementBias;if(e.roughnessMap!==void 0)this.roughnessMap=t[e.roughnessMap]||null;if(e.metalnessMap!==void 0)this.metalnessMap=t[e.metalnessMap]||null;if(e.emissiveMap!==void 0)this.emissiveMap=t[e.emissiveMap]||null;if(e.emissiveIntensity!==void 0)this.emissiveIntensity=e.emissiveIntensity;if(e.specularMap!==void 0)this.specularMap=t[e.specularMap]||null;if(e.specularIntensityMap!==void 0)this.specularIntensityMap=t[e.specularIntensityMap]||null;if(e.specularColorMap!==void 0)this.specularColorMap=t[e.specularColorMap]||null;if(e.envMap!==void 0)this.envMap=t[e.envMap]||null;if(e.envMapRotation!==void 0)this.envMapRotation.fromArray(e.envMapRotation);if(e.envMapIntensity!==void 0)this.envMapIntensity=e.envMapIntensity;if(e.reflectivity!==void 0)this.reflectivity=e.reflectivity;if(e.refractionRatio!==void 0)this.refractionRatio=e.refractionRatio;if(e.lightMap!==void 0)this.lightMap=t[e.lightMap]||null;if(e.lightMapIntensity!==void 0)this.lightMapIntensity=e.lightMapIntensity;if(e.aoMap!==void 0)this.aoMap=t[e.aoMap]||null;if(e.aoMapIntensity!==void 0)this.aoMapIntensity=e.aoMapIntensity;if(e.gradientMap!==void 0)this.gradientMap=t[e.gradientMap]||null;if(e.clearcoatMap!==void 0)this.clearcoatMap=t[e.clearcoatMap]||null;if(e.clearcoatRoughnessMap!==void 0)this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null;if(e.clearcoatNormalMap!==void 0)this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null;if(e.clearcoatNormalScale!==void 0)this.clearcoatNormalScale=new k().fromArray(e.clearcoatNormalScale);if(e.diffuseRoughnessMap!==void 0)this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null;if(e.iridescenceMap!==void 0)this.iridescenceMap=t[e.iridescenceMap]||null;if(e.iridescenceThicknessMap!==void 0)this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null;if(e.transmissionMap!==void 0)this.transmissionMap=t[e.transmissionMap]||null;if(e.thicknessMap!==void 0)this.thicknessMap=t[e.thicknessMap]||null;if(e.anisotropyMap!==void 0)this.anisotropyMap=t[e.anisotropyMap]||null;if(e.sheenColorMap!==void 0)this.sheenColorMap=t[e.sheenColorMap]||null;if(e.sheenRoughnessMap!==void 0)this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null;return this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let n=t.length;i=Array(n);for(let r=0;r!==n;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){if(e===!0)this.version++}}class ts extends Ht{constructor(e){super();this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ue(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}var eo,Ca=new A,to=new A,io=new A,no=new k,Pa=new k,Df=new Xe,Gl=new A,Ia=new A,Hl=new A,If=new k,Th=new k,Lf=new k;class La extends at{constructor(e=new ts){super();if(this.isSprite=!0,this.type="Sprite",eo===void 0){eo=new Be;let t=new Float32Array([-0.5,-0.5,0,0,0,0.5,-0.5,0,1,0,0.5,0.5,0,1,1,-0.5,0.5,0,0,1]),i=new es(t,5);eo.setIndex([0,1,2,0,2,3]),eo.setAttribute("position",new _r(i,3,0,!1)),eo.setAttribute("uv",new _r(i,2,3,!1))}this.geometry=eo,this.material=e,this.center=new k(0.5,0.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){if(e.camera===null)Fe('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.');if(to.setFromMatrixScale(this.matrixWorld),Df.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),io.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1)to.multiplyScalar(-io.z);let i=this.material.rotation,n,r;if(i!==0)r=Math.cos(i),n=Math.sin(i);let s=this.center;kl(Gl.set(-0.5,-0.5,0),io,s,to,n,r),kl(Ia.set(0.5,-0.5,0),io,s,to,n,r),kl(Hl.set(0.5,0.5,0),io,s,to,n,r),If.set(0,0),Th.set(1,0),Lf.set(1,1);let o=e.ray.intersectTriangle(Gl,Ia,Hl,!1,Ca);if(o===null){if(kl(Ia.set(-0.5,0.5,0),io,s,to,n,r),Th.set(0,1),o=e.ray.intersectTriangle(Gl,Hl,Ia,!1,Ca),o===null)return}let a=e.ray.origin.distanceTo(Ca);if(a<e.near||a>e.far)return;t.push({distance:a,point:Ca.clone(),uv:Ai.getInterpolation(Ca,Gl,Ia,Hl,If,Th,Lf,new k),face:null,object:this})}copy(e,t){if(super.copy(e,t),e.center!==void 0)this.center.copy(e.center);return this.material=e.material,this}toJSON(e){let t=super.toJSON(e);return t.object.center=this.center.toArray(),t}}function kl(e,t,i,n,r,s){if(no.subVectors(e,i).addScalar(0.5).multiply(n),r!==void 0)Pa.x=s*no.x-r*no.y,Pa.y=r*no.x+s*no.y;else Pa.copy(no);e.copy(t),e.x+=Pa.x,e.y+=Pa.y,e.applyMatrix4(Df)}var er=new A,wh=new A,Vl=new A,Wl=new A;class Fn{constructor(e=new A,t=new A(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,er)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);if(i<0)return t.copy(this.origin);return t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=er.subVectors(e,this.origin).dot(this.direction);if(t<0)return this.origin.distanceToSquared(e);return er.copy(this.origin).addScaledVector(this.direction,t),er.distanceToSquared(e)}distanceSqToSegment(e,t,i,n){wh.copy(e).add(t).multiplyScalar(0.5),Vl.copy(t).sub(e).normalize(),Wl.copy(this.origin).sub(wh);let r=e.distanceTo(t)*0.5,s=-this.direction.dot(Vl),o=Wl.dot(this.direction),a=-Wl.dot(Vl),l=Wl.lengthSq(),c=Math.abs(1-s*s),h,f,u,p;if(c>0)if(h=s*a-o,f=s*o-a,p=r*c,h>=0)if(f>=-p)if(f<=p){let g=1/c;h*=g,f*=g,u=h*(h+s*f+2*o)+f*(s*h+f+2*a)+l}else f=r,h=Math.max(0,-(s*f+o)),u=-h*h+f*(f+2*a)+l;else f=-r,h=Math.max(0,-(s*f+o)),u=-h*h+f*(f+2*a)+l;else if(f<=-p)h=Math.max(0,-(-s*r+o)),f=h>0?-r:Math.min(Math.max(-r,-a),r),u=-h*h+f*(f+2*a)+l;else if(f<=p)h=0,f=Math.min(Math.max(-r,-a),r),u=f*(f+2*a)+l;else h=Math.max(0,-(s*r+o)),f=h>0?r:Math.min(Math.max(-r,-a),r),u=-h*h+f*(f+2*a)+l;else f=s>0?-r:r,h=Math.max(0,-(s*f+o)),u=-h*h+f*(f+2*a)+l;if(i)i.copy(this.origin).addScaledVector(this.direction,h);if(n)n.copy(wh).addScaledVector(Vl,f);return u}intersectSphere(e,t){if(e.radius<0)return null;er.subVectors(e.center,this.origin);let i=er.dot(this.direction),n=er.dot(er)-i*i,r=e.radius*e.radius;if(n>r)return null;let s=Math.sqrt(r-n),o=i-s,a=i+s;if(a<0)return null;if(o<0)return this.at(a,t);return this.at(o,t)}intersectsSphere(e){if(e.radius<0)return!1;return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0){if(e.distanceToPoint(this.origin)===0)return 0;return null}let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);if(i===null)return null;return this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);if(t===0)return!0;if(e.normal.dot(this.direction)*t<0)return!0;return!1}intersectBox(e,t){let i,n,r,s,o,a,l=1/this.direction.x,c=1/this.direction.y,h=1/this.direction.z,f=this.origin;if(l>=0)i=(e.min.x-f.x)*l,n=(e.max.x-f.x)*l;else i=(e.max.x-f.x)*l,n=(e.min.x-f.x)*l;if(c>=0)r=(e.min.y-f.y)*c,s=(e.max.y-f.y)*c;else r=(e.max.y-f.y)*c,s=(e.min.y-f.y)*c;if(i>s||r>n)return null;if(r>i||isNaN(i))i=r;if(s<n||isNaN(n))n=s;if(h>=0)o=(e.min.z-f.z)*h,a=(e.max.z-f.z)*h;else o=(e.max.z-f.z)*h,a=(e.min.z-f.z)*h;if(i>a||o>n)return null;if(o>i||i!==i)i=o;if(a<n||n!==n)n=a;if(n<0)return null;return this.at(i>=0?i:n,t)}intersectsBox(e){return this.intersectBox(e,er)!==null}intersectTriangle(e,t,i,n,r){let s=this.origin,o=this.direction,{x:a,y:l,z:c}=o,h=e.x-s.x,f=e.y-s.y,u=e.z-s.z,p=t.x-s.x,g=t.y-s.y,_=t.z-s.z,m=i.x-s.x,d=i.y-s.y,v=i.z-s.z,y=Math.abs(a),S=Math.abs(l),E=Math.abs(c),w,x,M,R,U,I,O,te,P,q,L,N;if(y>=S&&y>=E)if(M=a,I=h,P=p,N=m,a>=0)w=l,x=c,R=f,U=u,O=g,te=_,q=d,L=v;else w=c,x=l,R=u,U=f,O=_,te=g,q=v,L=d;else if(S>=E)if(M=l,I=f,P=g,N=d,l>=0)w=c,x=a,R=u,U=h,O=_,te=p,q=v,L=m;else w=a,x=c,R=h,U=u,O=p,te=_,q=m,L=v;else if(M=c,I=u,P=_,N=v,c>=0)w=a,x=l,R=h,U=f,O=p,te=g,q=m,L=d;else w=l,x=a,R=f,U=h,O=g,te=p,q=d,L=m;if(M===0)return null;let Q=w/M,z=x/M,X=1/M,Z=R-Q*I,de=U-z*I,V=O-Q*P,j=te-z*P,ve=q-Q*N,Me=L-z*N,Oe=ve*j-Me*V,Te=Z*Me-de*ve,ut=V*de-j*Z;if(n){if(Oe<0||Te<0||ut<0)return null}else if((Oe<0||Te<0||ut<0)&&(Oe>0||Te>0||ut>0))return null;let De=Oe+Te+ut;if(De===0)return null;let Ne=X*(Oe*I+Te*P+ut*N);if(De>0?Ne<0:Ne>0)return null;return this.at(Ne/De,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class It extends Ht{constructor(e){super();this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ue(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ui,this.combine=Gr,this.reflectivity=1,this.refractionRatio=0.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}var Nf=new Xe,is=new Fn,Xl=new Mi,Uf=new A,ql=new A,Yl=new A,Zl=new A,Ah=new A,Jl=new A,Ff=new A,Kl=new A;class ee extends at{constructor(e=new Be,t=new It){super();this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){if(super.copy(e,t),e.morphTargetInfluences!==void 0)this.morphTargetInfluences=e.morphTargetInfluences.slice();else this.morphTargetInfluences=void 0;if(e.morphTargetDictionary!==void 0)this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary);else this.morphTargetDictionary=void 0;return this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=n.length;r<s;r++){let o=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let i=this.geometry,n=i.attributes.position,r=i.morphAttributes.position,s=i.morphTargetsRelative;t.fromBufferAttribute(n,e);let o=this.morphTargetInfluences;if(r&&o){Jl.set(0,0,0);for(let a=0,l=r.length;a<l;a++){let c=o[a],h=r[a];if(c===0)continue;if(Ah.fromBufferAttribute(h,e),s)Jl.addScaledVector(Ah,c);else Jl.addScaledVector(Ah.sub(t),c)}t.add(Jl)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,n=this.material,r=this.matrixWorld;if(n===void 0)return;if(i.boundingSphere===null)i.computeBoundingSphere();if(Xl.copy(i.boundingSphere),Xl.applyMatrix4(r),is.copy(e.ray).recast(e.near),Xl.containsPoint(is.origin)===!1){if(is.intersectSphere(Xl,Uf)===null)return;if(is.origin.distanceToSquared(Uf)>(e.far-e.near)**2)return}if(Nf.copy(r).invert(),is.copy(e.ray).applyMatrix4(Nf),i.boundingBox!==null){if(is.intersectsBox(i.boundingBox)===!1)return}this._computeIntersections(e,t,is)}_computeIntersections(e,t,i){let n,r=this.geometry,s=this.material,o=r.index,a=r.attributes.position,l=r.attributes.uv,c=r.attributes.uv1,h=r.attributes.normal,{groups:f,drawRange:u}=r;if(o!==null)if(Array.isArray(s))for(let p=0,g=f.length;p<g;p++){let _=f[p],m=s[_.materialIndex],d=Math.max(_.start,u.start),v=Math.min(o.count,Math.min(_.start+_.count,u.start+u.count));for(let y=d,S=v;y<S;y+=3){let E=o.getX(y),w=o.getX(y+1),x=o.getX(y+2);if(n=$l(this,m,e,i,l,c,h,E,w,x),n)n.faceIndex=Math.floor(y/3),n.face.materialIndex=_.materialIndex,t.push(n)}}else{let p=Math.max(0,u.start),g=Math.min(o.count,u.start+u.count);for(let _=p,m=g;_<m;_+=3){let d=o.getX(_),v=o.getX(_+1),y=o.getX(_+2);if(n=$l(this,s,e,i,l,c,h,d,v,y),n)n.faceIndex=Math.floor(_/3),t.push(n)}}else if(a!==void 0)if(Array.isArray(s))for(let p=0,g=f.length;p<g;p++){let _=f[p],m=s[_.materialIndex],d=Math.max(_.start,u.start),v=Math.min(a.count,Math.min(_.start+_.count,u.start+u.count));for(let y=d,S=v;y<S;y+=3){let E=y,w=y+1,x=y+2;if(n=$l(this,m,e,i,l,c,h,E,w,x),n)n.faceIndex=Math.floor(y/3),n.face.materialIndex=_.materialIndex,t.push(n)}}else{let p=Math.max(0,u.start),g=Math.min(a.count,u.start+u.count);for(let _=p,m=g;_<m;_+=3){let d=_,v=_+1,y=_+2;if(n=$l(this,s,e,i,l,c,h,d,v,y),n)n.faceIndex=Math.floor(_/3),t.push(n)}}}}function px(e,t,i,n,r,s,o,a){let l;if(t.side===Nt)l=n.intersectTriangle(o,s,r,!0,a);else l=n.intersectTriangle(r,s,o,t.side===hn,a);if(l===null)return null;Kl.copy(a),Kl.applyMatrix4(e.matrixWorld);let c=i.ray.origin.distanceTo(Kl);if(c<i.near||c>i.far)return null;return{distance:c,point:Kl.clone(),object:e}}function $l(e,t,i,n,r,s,o,a,l,c){e.getVertexPosition(a,ql),e.getVertexPosition(l,Yl),e.getVertexPosition(c,Zl);let h=px(e,t,i,n,ql,Yl,Zl,Ff);if(h){let f=new A;if(Ai.getBarycoord(Ff,ql,Yl,Zl,f),r)h.uv=Ai.getInterpolatedAttribute(r,a,l,c,f,new k);if(s)h.uv1=Ai.getInterpolatedAttribute(s,a,l,c,f,new k);if(o){if(h.normal=Ai.getInterpolatedAttribute(o,a,l,c,f,new A),h.normal.dot(n.direction)>0)h.normal.multiplyScalar(-1)}let u={a,b:l,c,normal:new A,materialIndex:0};Ai.getNormal(ql,Yl,Zl,u.normal),h.face=u,h.barycoord=f}return h}class Bn extends Mt{constructor(e=null,t=1,i=1,n,r,s,o,a,l=Ot,c=Ot,h,f){super(null,s,o,a,l,c,n,r,h,f);this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class yr extends Yt{constructor(e,t,i,n=1){super(e,t,i);this.isInstancedBufferAttribute=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}var ro=new Xe,Of=new Xe,Ql=[],zf=new vi,mx=new Xe,Da=new ee,Na=new Mi;class In extends ee{constructor(e,t,i){super(e,t);this.isInstancedMesh=!0,this.instanceMatrix=new yr(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let n=0;n<i;n++)this.setMatrixAt(n,mx)}computeBoundingBox(){let e=this.geometry,t=this.count;if(this.boundingBox===null)this.boundingBox=new vi;if(e.boundingBox===null)e.computeBoundingBox();this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,ro),zf.copy(e.boundingBox).applyMatrix4(ro),this.boundingBox.union(zf)}computeBoundingSphere(){let e=this.geometry,t=this.count;if(this.boundingSphere===null)this.boundingSphere=new Mi;if(e.boundingSphere===null)e.computeBoundingSphere();this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,ro),Na.copy(e.boundingSphere).applyMatrix4(ro),this.boundingSphere.union(Na)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){if(this.instanceColor===null)return t.setRGB(1,1,1);else return t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,n=this.morphTexture.source.data.data,r=i.length+1,s=e*r+1;for(let o=0;o<i.length;o++)i[o]=n[s+o]}raycast(e,t){let i=this.matrixWorld,n=this.count;if(Da.geometry=this.geometry,Da.material=this.material,Da.material===void 0)return;if(this.boundingSphere===null)this.computeBoundingSphere();if(Na.copy(this.boundingSphere),Na.applyMatrix4(i),e.ray.intersectsSphere(Na)===!1)return;for(let r=0;r<n;r++){this.getMatrixAt(r,ro),Of.multiplyMatrices(i,ro),Da.matrixWorld=Of,Da.raycast(e,Ql);for(let s=0,o=Ql.length;s<o;s++){let a=Ql[s];a.instanceId=r,a.object=this,t.push(a)}Ql.length=0}}setColorAt(e,t){if(this.instanceColor===null)this.instanceColor=new yr(new Float32Array(this.instanceMatrix.count*3).fill(1),3);return t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let i=t.morphTargetInfluences,n=i.length+1;if(this.morphTexture===null)this.morphTexture=new Bn(new Float32Array(n*this.count),n,this.count,Is,ti);let r=this.morphTexture.source.data.data,s=0;for(let l=0;l<i.length;l++)s+=i[l];let o=this.geometry.morphTargetsRelative?1:1-s,a=n*e;return r[a]=o,r.set(i,a+1),this}updateMorphTargets(){}dispose(){if(super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null)this.instanceColor.dispose();if(this.morphTexture!==null)this.morphTexture.dispose(),this.morphTexture=null}}var ns=new Mi,gx=new k(0.5,0.5),jl=new A;class gn{constructor(e=new sn,t=new sn,i=new sn,n=new sn,r=new sn,s=new sn){this.planes=[e,t,i,n,r,s]}set(e,t,i,n,r,s){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(n),o[4].copy(r),o[5].copy(s),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=_i,i=!1){let n=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],h=r[5],f=r[6],u=r[7],p=r[8],g=r[9],_=r[10],m=r[11],d=r[12],v=r[13],y=r[14],S=r[15];if(n[0].setComponents(l-s,u-c,m-p,S-d).normalize(),n[1].setComponents(l+s,u+c,m+p,S+d).normalize(),n[2].setComponents(l+o,u+h,m+g,S+v).normalize(),n[3].setComponents(l-o,u-h,m-g,S-v).normalize(),i)n[4].setComponents(a,f,_,y).normalize(),n[5].setComponents(l-a,u-f,m-_,S-y).normalize();else if(n[4].setComponents(l-a,u-f,m-_,S-y).normalize(),t===_i)n[5].setComponents(l+a,u+f,m+_,S+y).normalize();else if(t===Nn)n[5].setComponents(a,f,_,y).normalize();else throw Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0){if(e.boundingSphere===null)e.computeBoundingSphere();ns.copy(e.boundingSphere).applyMatrix4(e.matrixWorld)}else{let t=e.geometry;if(t.boundingSphere===null)t.computeBoundingSphere();ns.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ns)}intersectsSprite(e){ns.center.set(0,0,0);let t=gx.distanceTo(e.center);return ns.radius=0.7071067811865476+t,ns.applyMatrix4(e.matrixWorld),this.intersectsSphere(ns)}intersectsSphere(e){let t=this.planes,i=e.center,n=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<n)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let n=t[i];if(jl.x=n.normal.x>0?e.max.x:e.min.x,jl.y=n.normal.y>0?e.max.y:e.min.y,jl.z=n.normal.z>0?e.max.z:e.min.z,n.distanceToPoint(jl)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}var Gf=new Xe;class so{constructor(){this.coordinateSystem=_i,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,i=this._frustums;for(let n=0;n<t.length;n++){let r=t[n];if(Gf.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),i[n]===void 0)i[n]=new gn;i[n].setFromProjectionMatrix(Gf,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,i=e._frustums;for(let n=0;n<e._count;n++){if(t[n]===void 0)t[n]=new gn;t[n].copy(i[n])}return this._count=e._count,this}clone(){return new so().copy(this)}}class hi extends Ht{constructor(e){super();this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ue(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}var ic=new A,nc=new A,Hf=new Xe,Ua=new Fn,ec=new Mi,Rh=new A,kf=new A;class tr extends at{constructor(e=new Be,t=new hi){super();this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){if(super.copy(e,t),e.morphTargetInfluences!==void 0)this.morphTargetInfluences=e.morphTargetInfluences.slice();else this.morphTargetInfluences=void 0;if(e.morphTargetDictionary!==void 0)this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary);else this.morphTargetDictionary=void 0;return this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let n=1,r=t.count;n<r;n++)ic.fromBufferAttribute(t,n-1),nc.fromBufferAttribute(t,n),i[n]=i[n-1],i[n]+=ic.distanceTo(nc);e.setAttribute("lineDistance",new _e(i,1))}else ge("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,n=this.matrixWorld,r=e.params.Line.threshold,s=i.drawRange;if(i.boundingSphere===null)i.computeBoundingSphere();if(ec.copy(i.boundingSphere),ec.applyMatrix4(n),ec.radius+=r,e.ray.intersectsSphere(ec)===!1)return;Hf.copy(n).invert(),Ua.copy(e.ray).applyMatrix4(Hf);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),a=o*o,l=this.isLineSegments?2:1,c=i.index,f=i.attributes.position;if(c!==null){let u=Math.max(0,s.start),p=Math.min(c.count,s.start+s.count);for(let g=u,_=p-1;g<_;g+=l){let m=c.getX(g),d=c.getX(g+1),v=tc(this,e,Ua,a,m,d,g);if(v)t.push(v)}if(this.isLineLoop){let g=c.getX(p-1),_=c.getX(u),m=tc(this,e,Ua,a,g,_,p-1);if(m)t.push(m)}}else{let u=Math.max(0,s.start),p=Math.min(f.count,s.start+s.count);for(let g=u,_=p-1;g<_;g+=l){let m=tc(this,e,Ua,a,g,g+1,g);if(m)t.push(m)}if(this.isLineLoop){let g=tc(this,e,Ua,a,p-1,u,p-1);if(g)t.push(g)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=n.length;r<s;r++){let o=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function tc(e,t,i,n,r,s,o){let a=e.geometry.attributes.position;if(ic.fromBufferAttribute(a,r),nc.fromBufferAttribute(a,s),i.distanceSqToSegment(ic,nc,Rh,kf)>n)return;Rh.applyMatrix4(e.matrixWorld);let c=t.ray.origin.distanceTo(Rh);if(c<t.near||c>t.far)return;return{distance:c,point:kf.clone().applyMatrix4(e.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:e}}var Vf=new A,Wf=new A;class qi extends tr{constructor(e,t){super(e,t);this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let n=0,r=t.count;n<r;n+=2)Vf.fromBufferAttribute(t,n),Wf.fromBufferAttribute(t,n+1),i[n]=n===0?0:i[n-1],i[n+1]=i[n]+Vf.distanceTo(Wf);e.setAttribute("lineDistance",new _e(i,1))}else ge("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class vr extends Mt{constructor(e=[],t=fn,i,n,r,s,o,a,l,c){super(e,t,i,n,r,s,o,a,l,c);this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Yi extends Mt{constructor(e,t,i,n,r,s,o,a,l){super(e,t,i,n,r,s,o,a,l);this.isCanvasTexture=!0,this.needsUpdate=!0}}class on extends Mt{constructor(e,t,i=li,n,r,s,o=Ot,a=Ot,l,c=Xi,h=1){if(c!==Xi&&c!==en)throw Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:e,height:t,depth:h};super(f,n,r,s,o,a,c,i,l);this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Un(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class oo extends on{constructor(e,t=li,i=fn,n,r,s=Ot,o=Ot,a,l=Xi){let c={width:e,height:e,depth:1},h=[c,c,c,c,c,c];super(e,e,t,i,n,r,s,o,a,l);this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class ao extends Mt{constructor(e=null){super();this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Ut extends Be{constructor(e=1,t=1,i=1,n=1,r=1,s=1){super();this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:n,heightSegments:r,depthSegments:s};let o=this;n=Math.floor(n),r=Math.floor(r),s=Math.floor(s);let a=[],l=[],c=[],h=[],f=0,u=0;p("z","y","x",-1,-1,i,t,e,s,r,0),p("z","y","x",1,-1,i,t,-e,s,r,1),p("x","z","y",1,1,e,i,t,n,s,2),p("x","z","y",1,-1,e,i,-t,n,s,3),p("x","y","z",1,-1,e,t,i,n,r,4),p("x","y","z",-1,-1,e,t,-i,n,r,5),this.setIndex(a),this.setAttribute("position",new _e(l,3)),this.setAttribute("normal",new _e(c,3)),this.setAttribute("uv",new _e(h,2));function p(g,_,m,d,v,y,S,E,w,x,M){let R=y/w,U=S/x,I=y/2,O=S/2,te=E/2,P=w+1,q=x+1,L=0,N=0,Q=new A;for(let z=0;z<q;z++){let X=z*U-O;for(let Z=0;Z<P;Z++){let de=Z*R-I;Q[g]=de*d,Q[_]=X*v,Q[m]=te,l.push(Q.x,Q.y,Q.z),Q[g]=0,Q[_]=0,Q[m]=E>0?1:-1,c.push(Q.x,Q.y,Q.z),h.push(Z/w),h.push(1-z/x),L+=1}}for(let z=0;z<x;z++)for(let X=0;X<w;X++){let Z=f+X+P*z,de=f+X+P*(z+1),V=f+(X+1)+P*(z+1),j=f+(X+1)+P*z;a.push(Z,de,j),a.push(de,V,j),N+=6}o.addGroup(u,N,M),u+=N,f+=L}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ut(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class rc extends Be{constructor(e=1,t=1,i=4,n=8,r=1){super();this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:i,radialSegments:n,heightSegments:r},t=Math.max(0,t),i=Math.max(1,Math.floor(i)),n=Math.max(3,Math.floor(n)),r=Math.max(1,Math.floor(r));let s=[],o=[],a=[],l=[],c=t/2,h=Math.PI/2*e,f=t,u=2*h+f,p=i*2+r,g=n+1,_=new A,m=new A;for(let d=0;d<=p;d++){let v=0,y=0,S=0,E=0;if(d<=i){let M=d/i,R=M*Math.PI/2;y=-c-e*Math.cos(R),S=e*Math.sin(R),E=-e*Math.cos(R),v=M*h}else if(d<=i+r){let M=(d-i)/r;y=-c+M*t,S=e,E=0,v=h+M*f}else{let M=(d-i-r)/i,R=M*Math.PI/2;y=c+e*Math.sin(R),S=e*Math.cos(R),E=e*Math.sin(R),v=h+f+M*h}let w=Math.max(0,Math.min(1,v/u)),x=0;if(d===0)x=0.5/n;else if(d===p)x=-0.5/n;for(let M=0;M<=n;M++){let R=M/n,U=R*Math.PI*2,I=Math.sin(U),O=Math.cos(U);m.x=-S*O,m.y=y,m.z=S*I,o.push(m.x,m.y,m.z),_.set(-S*O,E,S*I),_.normalize(),a.push(_.x,_.y,_.z),l.push(R+x,w)}if(d>0){let M=(d-1)*g;for(let R=0;R<n;R++){let U=M+R,I=M+R+1,O=d*g+R,te=d*g+R+1;s.push(U,I,O),s.push(I,te,O)}}}this.setIndex(s),this.setAttribute("position",new _e(o,3)),this.setAttribute("normal",new _e(a,3)),this.setAttribute("uv",new _e(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new rc(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}}class Mr extends Be{constructor(e=1,t=32,i=0,n=Math.PI*2){super();this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:n},t=Math.max(3,t);let r=[],s=[],o=[],a=[],l=new A,c=new k;s.push(0,0,0),o.push(0,0,1),a.push(0.5,0.5);for(let h=0,f=3;h<=t;h++,f+=3){let u=i+h/t*n;l.x=e*Math.cos(u),l.y=e*Math.sin(u),s.push(l.x,l.y,l.z),o.push(0,0,1),c.x=(s[f]/e+1)/2,c.y=(s[f+1]/e+1)/2,a.push(c.x,c.y)}for(let h=1;h<=t;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new _e(s,3)),this.setAttribute("normal",new _e(o,3)),this.setAttribute("uv",new _e(a,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Mr(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Ct extends Be{constructor(e=1,t=1,i=1,n=32,r=1,s=!1,o=0,a=Math.PI*2){super();this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:n,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a};let l=this;n=Math.floor(n),r=Math.floor(r);let c=[],h=[],f=[],u=[],p=0,g=[],_=i/2,m=0;if(d(),s===!1){if(e>0)v(!0);if(t>0)v(!1)}this.setIndex(c),this.setAttribute("position",new _e(h,3)),this.setAttribute("normal",new _e(f,3)),this.setAttribute("uv",new _e(u,2));function d(){let y=new A,S=new A,E=0,w=(t-e)/i;for(let x=0;x<=r;x++){let M=[],R=x/r,U=R*(t-e)+e;for(let I=0;I<=n;I++){let O=I/n,te=O*a+o,P=Math.sin(te),q=Math.cos(te);S.x=U*P,S.y=-R*i+_,S.z=U*q,h.push(S.x,S.y,S.z),y.set(P,w,q).normalize(),f.push(y.x,y.y,y.z),u.push(O,1-R),M.push(p++)}g.push(M)}for(let x=0;x<n;x++)for(let M=0;M<r;M++){let R=g[M][x],U=g[M+1][x],I=g[M+1][x+1],O=g[M][x+1];if(e>0||M!==0)c.push(R,U,O),E+=3;if(t>0||M!==r-1)c.push(U,I,O),E+=3}l.addGroup(m,E,0),m+=E}function v(y){let S=p,E=new k,w=new A,x=0,M=y===!0?e:t,R=y===!0?1:-1;for(let I=1;I<=n;I++)h.push(0,_*R,0),f.push(0,R,0),u.push(0.5,0.5),p++;let U=p;for(let I=0;I<=n;I++){let te=I/n*a+o,P=Math.cos(te),q=Math.sin(te);w.x=M*q,w.y=_*R,w.z=M*P,h.push(w.x,w.y,w.z),f.push(0,R,0),E.x=P*0.5+0.5,E.y=q*0.5*R+0.5,u.push(E.x,E.y),p++}for(let I=0;I<n;I++){let O=S+I,te=U+I;if(y===!0)c.push(te,te+1,O);else c.push(te+1,te,O);x+=3}l.addGroup(m,x,y===!0?1:2),m+=x}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ct(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class lo extends Ct{constructor(e=1,t=1,i=32,n=1,r=!1,s=0,o=Math.PI*2){super(0,e,t,i,n,r,s,o);this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:n,openEnded:r,thetaStart:s,thetaLength:o}}static fromJSON(e){return new lo(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class rs extends Be{constructor(e=[],t=[],i=1,n=0){super();this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:n};let r=[],s=[];if(o(n),l(i),c(),this.setAttribute("position",new _e(r,3)),this.setAttribute("normal",new _e(r.slice(),3)),this.setAttribute("uv",new _e(s,2)),n===0)this.computeVertexNormals();else this.normalizeNormals();function o(d){let v=new A,y=new A,S=new A;for(let E=0;E<t.length;E+=3)u(t[E+0],v),u(t[E+1],y),u(t[E+2],S),a(v,y,S,d)}function a(d,v,y,S){let E=S+1,w=[];for(let x=0;x<=E;x++){w[x]=[];let M=d.clone().lerp(y,x/E),R=v.clone().lerp(y,x/E),U=E-x;for(let I=0;I<=U;I++)if(I===0&&x===E)w[x][I]=M;else w[x][I]=M.clone().lerp(R,I/U)}for(let x=0;x<E;x++)for(let M=0;M<2*(E-x)-1;M++){let R=Math.floor(M/2);if(M%2===0)f(w[x][R+1]),f(w[x+1][R]),f(w[x][R]);else f(w[x][R+1]),f(w[x+1][R+1]),f(w[x+1][R])}}function l(d){let v=new A;for(let y=0;y<r.length;y+=3)v.x=r[y+0],v.y=r[y+1],v.z=r[y+2],v.normalize().multiplyScalar(d),r[y+0]=v.x,r[y+1]=v.y,r[y+2]=v.z}function c(){let d=new A;for(let v=0;v<r.length;v+=3){d.x=r[v+0],d.y=r[v+1],d.z=r[v+2];let y=_(d)/2/Math.PI+0.5,S=m(d)/Math.PI+0.5;s.push(y,1-S)}p(),h()}function h(){for(let d=0;d<s.length;d+=6){let v=s[d+0],y=s[d+2],S=s[d+4],E=Math.max(v,y,S),w=Math.min(v,y,S);if(E>0.9&&w<0.1){if(v<0.2)s[d+0]+=1;if(y<0.2)s[d+2]+=1;if(S<0.2)s[d+4]+=1}}}function f(d){r.push(d.x,d.y,d.z)}function u(d,v){let y=d*3;v.x=e[y+0],v.y=e[y+1],v.z=e[y+2]}function p(){let d=new A,v=new A,y=new A,S=new A,E=new k,w=new k,x=new k;for(let M=0,R=0;M<r.length;M+=9,R+=6){d.set(r[M+0],r[M+1],r[M+2]),v.set(r[M+3],r[M+4],r[M+5]),y.set(r[M+6],r[M+7],r[M+8]),E.set(s[R+0],s[R+1]),w.set(s[R+2],s[R+3]),x.set(s[R+4],s[R+5]),S.copy(d).add(v).add(y).divideScalar(3);let U=_(S);g(E,R+0,d,U),g(w,R+2,v,U),g(x,R+4,y,U)}}function g(d,v,y,S){if(S<0&&d.x===1)s[v]=d.x-1;if(y.x===0&&y.z===0)s[v]=S/2/Math.PI+0.5}function _(d){return Math.atan2(d.z,-d.x)}function m(d){return Math.atan2(-d.y,Math.sqrt(d.x*d.x+d.z*d.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new rs(e.vertices,e.indices,e.radius,e.detail)}}class sc extends rs{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,n=1/i,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-n,-i,0,-n,i,0,n,-i,0,n,i,-n,-i,0,-n,i,0,n,-i,0,n,i,0,-i,0,-n,i,0,-n,-i,0,n,i,0,n],s=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,s,e,t);this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new sc(e.radius,e.detail)}}var oc=new A,ac=new A,Ph=new A,lc=new Ai;class cc extends Be{constructor(e=null,t=1){super();if(this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let n=Math.pow(10,4),r=Math.cos(Zr*t),s=e.getIndex(),o=e.getAttribute("position"),a=s?s.count:o.count,l=[0,0,0],c=["a","b","c"],h=[,,,],f=new Map,u=[];for(let p=0;p<a;p+=3){if(s)l[0]=s.getX(p),l[1]=s.getX(p+1),l[2]=s.getX(p+2);else l[0]=p,l[1]=p+1,l[2]=p+2;let{a:g,b:_,c:m}=lc;if(g.fromBufferAttribute(o,l[0]),_.fromBufferAttribute(o,l[1]),m.fromBufferAttribute(o,l[2]),lc.getNormal(Ph),h[0]=`${Math.round(g.x*n)},${Math.round(g.y*n)},${Math.round(g.z*n)}`,h[1]=`${Math.round(_.x*n)},${Math.round(_.y*n)},${Math.round(_.z*n)}`,h[2]=`${Math.round(m.x*n)},${Math.round(m.y*n)},${Math.round(m.z*n)}`,h[0]===h[1]||h[1]===h[2]||h[2]===h[0])continue;for(let d=0;d<3;d++){let v=(d+1)%3,y=h[d],S=h[v],E=lc[c[d]],w=lc[c[v]],x=`${y}_${S}`,M=`${S}_${y}`,R=f.get(M);if(R){if(Ph.dot(R.normal)<=r)u.push(E.x,E.y,E.z),u.push(w.x,w.y,w.z);f.set(M,null)}else if(!f.has(x))f.set(x,{index0:l[d],index1:l[v],normal:Ph.clone()})}}for(let p of f.values())if(p){let{index0:g,index1:_}=p;oc.fromBufferAttribute(o,g),ac.fromBufferAttribute(o,_),u.push(oc.x,oc.y,oc.z),u.push(ac.x,ac.y,ac.z)}this.setAttribute("position",new _e(u,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class $t{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){ge("Curve: .getPoint() not implemented.")}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,n=this.getPoint(0),r=0;t.push(0);for(let s=1;s<=e;s++)i=this.getPoint(s/e),r+=i.distanceTo(n),t.push(r),n=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let i=this.getLengths(),n=0,r=i.length,s;if(t)s=t;else s=e*i[r-1];let o=0,a=r-1,l;while(o<=a)if(n=Math.floor(o+(a-o)/2),l=i[n]-s,l<0)o=n+1;else if(l>0)a=n-1;else{a=n;break}if(n=a,i[n]===s)return n/(r-1);let c=i[n],f=i[n+1]-c,u=(s-c)/f;return(n+u)/(r-1)}getTangent(e,t){let n=e-0.0001,r=e+0.0001;if(n<0)n=0;if(r>1)r=1;let s=this.getPoint(n),o=this.getPoint(r),a=t||(s.isVector2?new k:new A);return a.copy(o).sub(s).normalize(),a}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){let i=new A,n=[],r=[],s=[],o=new A,a=new Xe;for(let u=0;u<=e;u++){let p=u/e;n[u]=this.getTangentAt(p,new A)}r[0]=new A,s[0]=new A;let l=Number.MAX_VALUE,c=Math.abs(n[0].x),h=Math.abs(n[0].y),f=Math.abs(n[0].z);if(c<=l)l=c,i.set(1,0,0);if(h<=l)l=h,i.set(0,1,0);if(f<=l)i.set(0,0,1);o.crossVectors(n[0],i).normalize(),r[0].crossVectors(n[0],o),s[0].crossVectors(n[0],r[0]);for(let u=1;u<=e;u++){if(r[u]=r[u-1].clone(),s[u]=s[u-1].clone(),o.crossVectors(n[u-1],n[u]),o.length()>Number.EPSILON){o.normalize();let p=Math.acos(et(n[u-1].dot(n[u]),-1,1));r[u].applyMatrix4(a.makeRotationAxis(o,p))}s[u].crossVectors(n[u],r[u])}if(t===!0){let u=Math.acos(et(r[0].dot(r[e]),-1,1));if(u/=e,n[0].dot(o.crossVectors(r[0],r[e]))>0)u=-u;for(let p=1;p<=e;p++)r[p].applyMatrix4(a.makeRotationAxis(n[p],u*p)),s[p].crossVectors(n[p],r[p])}return{tangents:n,normals:r,binormals:s}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}}class ss extends $t{constructor(e=0,t=0,i=1,n=1,r=0,s=Math.PI*2,o=!1,a=0){super();this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=n,this.aStartAngle=r,this.aEndAngle=s,this.aClockwise=o,this.aRotation=a}getPoint(e,t=new k){let i=t,n=Math.PI*2,r=this.aEndAngle-this.aStartAngle,s=Math.abs(r)<Number.EPSILON;while(r<0)r+=n;while(r>n)r-=n;if(r<Number.EPSILON)if(s)r=0;else r=n;if(this.aClockwise===!0&&!s)if(r===n)r=-n;else r=r-n;let o=this.aStartAngle+e*r,a=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let c=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=a-this.aX,u=l-this.aY;a=f*c-u*h+this.aX,l=f*h+u*c+this.aY}return i.set(a,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Ih extends ss{constructor(e,t,i,n,r,s){super(e,t,i,i,n,r,s);this.isArcCurve=!0,this.type="ArcCurve"}}function Uh(){let e=0,t=0,i=0,n=0;function r(s,o,a,l){e=s,t=a,i=-3*s+3*o-2*a-l,n=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){r(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,h,f){let u=(o-s)/c-(a-s)/(c+h)+(a-o)/h,p=(a-o)/h-(l-o)/(h+f)+(l-a)/f;u*=h,p*=h,r(o,a,u,p)},calc:function(s){let o=s*s,a=o*s;return e+t*s+i*o+n*a}}}var qf=new A,Yf=new A,Lh=new Uh,Dh=new Uh,Nh=new Uh;class co extends $t{constructor(e=[],t=!1,i="centripetal",n=0.5){super();this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=n}getPoint(e,t=new A){let i=t,n=this.points,r=n.length,s=(r-(this.closed?0:1))*e,o=Math.floor(s),a=s-o;if(this.closed)o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r;else if(a===0&&o===r-1)o=r-2,a=1;let l,c;if(this.closed||o>0)l=n[(o-1)%r];else Yf.subVectors(n[0],n[1]).add(n[0]),l=Yf;let h=n[o%r],f=n[(o+1)%r];if(this.closed||o+2<r)c=n[(o+2)%r];else qf.subVectors(n[r-1],n[r-2]).add(n[r-1]),c=qf;if(this.curveType==="centripetal"||this.curveType==="chordal"){let u=this.curveType==="chordal"?0.5:0.25,p=Math.pow(l.distanceToSquared(h),u),g=Math.pow(h.distanceToSquared(f),u),_=Math.pow(f.distanceToSquared(c),u);if(g<0.0001)g=1;if(p<0.0001)p=g;if(_<0.0001)_=g;Lh.initNonuniformCatmullRom(l.x,h.x,f.x,c.x,p,g,_),Dh.initNonuniformCatmullRom(l.y,h.y,f.y,c.y,p,g,_),Nh.initNonuniformCatmullRom(l.z,h.z,f.z,c.z,p,g,_)}else if(this.curveType==="catmullrom")Lh.initCatmullRom(l.x,h.x,f.x,c.x,this.tension),Dh.initCatmullRom(l.y,h.y,f.y,c.y,this.tension),Nh.initCatmullRom(l.z,h.z,f.z,c.z,this.tension);return i.set(Lh.calc(a),Dh.calc(a),Nh.calc(a)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let n=e.points[t];this.points.push(n.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let n=this.points[t];e.points.push(n.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let n=e.points[t];this.points.push(new A().fromArray(n))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Fh(e,t,i,n,r){let s=(n-t)*0.5,o=(r-i)*0.5,a=e*e,l=e*a;return(2*i-2*n+s+o)*l+(-3*i+3*n-2*s-o)*a+s*e+i}function _x(e,t){let i=1-e;return i*i*t}function yx(e,t){return 2*(1-e)*e*t}function vx(e,t){return e*e*t}function os(e,t,i,n){return _x(e,t)+yx(e,i)+vx(e,n)}function Mx(e,t){let i=1-e;return i*i*i*t}function Sx(e,t){let i=1-e;return 3*i*i*e*t}function bx(e,t){return 3*(1-e)*e*e*t}function Ex(e,t){return e*e*e*t}function as(e,t,i,n,r){return Mx(e,t)+Sx(e,i)+bx(e,n)+Ex(e,r)}class Fa extends $t{constructor(e=new k,t=new k,i=new k,n=new k){super();this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=n}getPoint(e,t=new k){let i=t,n=this.v0,r=this.v1,s=this.v2,o=this.v3;return i.set(as(e,n.x,r.x,s.x,o.x),as(e,n.y,r.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Bh extends $t{constructor(e=new A,t=new A,i=new A,n=new A){super();this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=n}getPoint(e,t=new A){let i=t,n=this.v0,r=this.v1,s=this.v2,o=this.v3;return i.set(as(e,n.x,r.x,s.x,o.x),as(e,n.y,r.y,s.y,o.y),as(e,n.z,r.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Ba extends $t{constructor(e=new k,t=new k){super();this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new k){let i=t;if(e===1)i.copy(this.v2);else i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1);return i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new k){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Oh extends $t{constructor(e=new A,t=new A){super();this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new A){let i=t;if(e===1)i.copy(this.v2);else i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1);return i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new A){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Oa extends $t{constructor(e=new k,t=new k,i=new k){super();this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new k){let i=t,n=this.v0,r=this.v1,s=this.v2;return i.set(os(e,n.x,r.x,s.x),os(e,n.y,r.y,s.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class za extends $t{constructor(e=new A,t=new A,i=new A){super();this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new A){let i=t,n=this.v0,r=this.v1,s=this.v2;return i.set(os(e,n.x,r.x,s.x),os(e,n.y,r.y,s.y),os(e,n.z,r.z,s.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Ga extends $t{constructor(e=[]){super();this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new k){let i=t,n=this.points,r=(n.length-1)*e,s=Math.floor(r),o=r-s,a=n[s===0?s:s-1],l=n[s],c=n[s>n.length-2?n.length-1:s+1],h=n[s>n.length-3?n.length-1:s+2];return i.set(Fh(o,a.x,l.x,c.x,h.x),Fh(o,a.y,l.y,c.y,h.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let n=e.points[t];this.points.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let n=this.points[t];e.points.push(n.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let n=e.points[t];this.points.push(new k().fromArray(n))}return this}}class hc extends $t{constructor(){super();this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Sr[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),n=this.getCurveLengths(),r=0;while(r<n.length){if(n[r]>=i){let s=n[r]-i,o=this.curves[r],a=o.getLength(),l=a===0?0:1-s/a;return o.getPointAt(l,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,n=this.curves.length;i<n;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));if(this.autoClose)t.push(t[0]);return t}getPoints(e=12){let t=[],i;for(let n=0,r=this.curves;n<r.length;n++){let s=r[n],o=s.isEllipseCurve?e*2:s.isLineCurve||s.isLineCurve3?1:s.isSplineCurve?e*s.points.length:e,a=s.getPoints(o);for(let l=0;l<a.length;l++){let c=a[l];if(i&&i.equals(c))continue;t.push(c),i=c}}if(this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0]))t.push(t[0]);return t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let n=e.curves[t];this.curves.push(n.clone())}return this.autoClose=e.autoClose,this.cacheLengths=null,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let n=this.curves[t];e.curves.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let n=e.curves[t];this.curves.push(new Sr[n.type]().fromJSON(n))}return this.cacheLengths=null,this}}class ho extends hc{constructor(e){super();if(this.type="Path",this.currentPoint=new k,e)this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new Ba(this.currentPoint.clone(),new k(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,n){let r=new Oa(this.currentPoint.clone(),new k(e,t),new k(i,n));return this.curves.push(r),this.currentPoint.set(i,n),this}bezierCurveTo(e,t,i,n,r,s){let o=new Fa(this.currentPoint.clone(),new k(e,t),new k(i,n),new k(r,s));return this.curves.push(o),this.currentPoint.set(r,s),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new Ga(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,n,r,s){let o=this.currentPoint.x,a=this.currentPoint.y;return this.absarc(e+o,t+a,i,n,r,s),this}absarc(e,t,i,n,r,s){return this.absellipse(e,t,i,i,n,r,s),this}ellipse(e,t,i,n,r,s,o,a){let l=this.currentPoint.x,c=this.currentPoint.y;return this.absellipse(e+l,t+c,i,n,r,s,o,a),this}absellipse(e,t,i,n,r,s,o,a){let l=new ss(e,t,i,n,r,s,o,a);if(this.curves.length>0){let h=l.getPoint(0);if(!h.equals(this.currentPoint))this.lineTo(h.x,h.y)}this.curves.push(l);let c=l.getPoint(1);return this.currentPoint.copy(c),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class ki extends ho{constructor(e){super(e);this.uuid=yi(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,n=this.holes.length;i<n;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let n=e.holes[t];this.holes.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let n=this.holes[t];e.holes.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let n=e.holes[t];this.holes.push(new ho().fromJSON(n))}return this}}function Hh(e,t,i=2){let n=t&&t.length,r=n?t[0]*i:e.length,s=Jf(e,0,r,i,!0),o=[];if(!s||s.next===s.prev)return o;let a,l,c;if(n)s=Cx(e,t,s,i);if(e.length>80*i){a=e[0],l=e[1];let h=a,f=l;for(let u=i;u<r;u+=i){let p=e[u],g=e[u+1];if(p<a)a=p;if(g<l)l=g;if(p>h)h=p;if(g>f)f=g}c=Math.max(h-a,f-l),c=c!==0?32767/c:0}return ka(s,o,i,a,l,c,0),o}function Jf(e,t,i,n,r){let s;if(r===Gx(e,t,i,n)>0)for(let o=t;o<i;o+=n)s=Zf(o/n|0,e[o],e[o+1],s);else for(let o=i-n;o>=t;o-=n)s=Zf(o/n|0,e[o],e[o+1],s);if(s&&uo(s,s.next))Wa(s),s=s.next;return s}function ls(e,t){if(!e)return e;if(!t)t=e;let i=e,n;do if(n=!1,!i.steiner&&(uo(i,i.next)||Zt(i.prev,i,i.next)===0)){if(Wa(i),i=t=i.prev,i===i.next)break;n=!0}else i=i.next;while(n||i!==t);return t}function ka(e,t,i,n,r,s,o){if(!e)return;if(!o&&s)Nx(e,n,r,s);let a=e;while(e.prev!==e.next){let l=e.prev,c=e.next;if(s?wx(e,n,r,s):Tx(e)){t.push(l.i,e.i,c.i),Wa(e),e=c.next,a=c.next;continue}if(e=c,e===a){if(!o)ka(ls(e),t,i,n,r,s,1);else if(o===1)e=Ax(ls(e),t),ka(e,t,i,n,r,s,2);else if(o===2)Rx(e,t,i,n,r,s);break}}}function Tx(e){let t=e.prev,i=e,n=e.next;if(Zt(t,i,n)>=0)return!1;let r=t.x,s=i.x,o=n.x,a=t.y,l=i.y,c=n.y,h=Math.min(r,s,o),f=Math.min(a,l,c),u=Math.max(r,s,o),p=Math.max(a,l,c),g=n.next;while(g!==t){if(g.x>=h&&g.x<=u&&g.y>=f&&g.y<=p&&Ha(r,a,s,l,o,c,g.x,g.y)&&Zt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function wx(e,t,i,n){let r=e.prev,s=e,o=e.next;if(Zt(r,s,o)>=0)return!1;let a=r.x,l=s.x,c=o.x,h=r.y,f=s.y,u=o.y,p=Math.min(a,l,c),g=Math.min(h,f,u),_=Math.max(a,l,c),m=Math.max(h,f,u),d=zh(p,g,t,i,n),v=zh(_,m,t,i,n),{prevZ:y,nextZ:S}=e;while(y&&y.z>=d&&S&&S.z<=v){if(y.x>=p&&y.x<=_&&y.y>=g&&y.y<=m&&y!==r&&y!==o&&Ha(a,h,l,f,c,u,y.x,y.y)&&Zt(y.prev,y,y.next)>=0)return!1;if(y=y.prevZ,S.x>=p&&S.x<=_&&S.y>=g&&S.y<=m&&S!==r&&S!==o&&Ha(a,h,l,f,c,u,S.x,S.y)&&Zt(S.prev,S,S.next)>=0)return!1;S=S.nextZ}while(y&&y.z>=d){if(y.x>=p&&y.x<=_&&y.y>=g&&y.y<=m&&y!==r&&y!==o&&Ha(a,h,l,f,c,u,y.x,y.y)&&Zt(y.prev,y,y.next)>=0)return!1;y=y.prevZ}while(S&&S.z<=v){if(S.x>=p&&S.x<=_&&S.y>=g&&S.y<=m&&S!==r&&S!==o&&Ha(a,h,l,f,c,u,S.x,S.y)&&Zt(S.prev,S,S.next)>=0)return!1;S=S.nextZ}return!0}function Ax(e,t){let i=e;do{let n=i.prev,r=i.next.next;if(!uo(n,r)&&$f(n,i,i.next,r)&&Va(n,r)&&Va(r,n))t.push(n.i,i.i,r.i),Wa(i),Wa(i.next),i=e=r;i=i.next}while(i!==e);return ls(i)}function Rx(e,t,i,n,r,s){let o=e;do{let a=o.next.next;while(a!==o.prev){if(o.i!==a.i&&Bx(o,a)){let l=Qf(o,a);o=ls(o,o.next),l=ls(l,l.next),ka(o,t,i,n,r,s,0),ka(l,t,i,n,r,s,0);return}a=a.next}o=o.next}while(o!==e)}function Cx(e,t,i,n){let r=[];for(let s=0,o=t.length;s<o;s++){let a=t[s]*n,l=s<o-1?t[s+1]*n:e.length,c=Jf(e,a,l,n,!1);if(c===c.next)c.steiner=!0;r.push(Fx(c))}r.sort(Px);for(let s=0;s<r.length;s++)i=Ix(r[s],i);return i}function Px(e,t){let i=e.x-t.x;if(i===0){if(i=e.y-t.y,i===0){let n=(e.next.y-e.y)/(e.next.x-e.x),r=(t.next.y-t.y)/(t.next.x-t.x);i=n-r}}return i}function Ix(e,t){let i=Lx(e,t);if(!i)return t;let n=Qf(i,e);return ls(n,n.next),ls(i,i.next)}function Lx(e,t){let i=t,{x:n,y:r}=e,s=-1/0,o;if(uo(e,i))return i;do{if(uo(e,i.next))return i.next;else if(r<=i.y&&r>=i.next.y&&i.next.y!==i.y){let f=i.x+(r-i.y)*(i.next.x-i.x)/(i.next.y-i.y);if(f<=n&&f>s){if(s=f,o=i.x<i.next.x?i:i.next,f===n)return o}}i=i.next}while(i!==t);if(!o)return null;let a=o,l=o.x,c=o.y,h=1/0;i=o;do{if(n>=i.x&&i.x>=l&&n!==i.x&&Kf(r<c?n:s,r,l,c,r<c?s:n,r,i.x,i.y)){let f=Math.abs(r-i.y)/(n-i.x);if(Va(i,e)&&(f<h||f===h&&(i.x>o.x||i.x===o.x&&Dx(o,i))))o=i,h=f}i=i.next}while(i!==a);return o}function Dx(e,t){return Zt(e.prev,e,t.prev)<0&&Zt(t.next,e,e.next)<0}function Nx(e,t,i,n){let r=e;do{if(r.z===0)r.z=zh(r.x,r.y,t,i,n);r.prevZ=r.prev,r.nextZ=r.next,r=r.next}while(r!==e);r.prevZ.nextZ=null,r.prevZ=null,Ux(r)}function Ux(e){let t,i=1;do{let n=e,r;e=null;let s=null;t=0;while(n){t++;let o=n,a=0;for(let c=0;c<i;c++)if(a++,o=o.nextZ,!o)break;let l=i;while(a>0||l>0&&o){if(a!==0&&(l===0||!o||n.z<=o.z))r=n,n=n.nextZ,a--;else r=o,o=o.nextZ,l--;if(s)s.nextZ=r;else e=r;r.prevZ=s,s=r}n=o}s.nextZ=null,i*=2}while(t>1);return e}function zh(e,t,i,n,r){return e=(e-i)*r|0,t=(t-n)*r|0,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e|t<<1}function Fx(e){let t=e,i=e;do{if(t.x<i.x||t.x===i.x&&t.y<i.y)i=t;t=t.next}while(t!==e);return i}function Kf(e,t,i,n,r,s,o,a){return(r-o)*(t-a)>=(e-o)*(s-a)&&(e-o)*(n-a)>=(i-o)*(t-a)&&(i-o)*(s-a)>=(r-o)*(n-a)}function Ha(e,t,i,n,r,s,o,a){return!(e===o&&t===a)&&Kf(e,t,i,n,r,s,o,a)}function Bx(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!Ox(e,t)&&(Va(e,t)&&Va(t,e)&&zx(e,t)&&(Zt(e.prev,e,t.prev)||Zt(e,t.prev,t))||uo(e,t)&&Zt(e.prev,e,e.next)>0&&Zt(t.prev,t,t.next)>0)}function Zt(e,t,i){return(t.y-e.y)*(i.x-t.x)-(t.x-e.x)*(i.y-t.y)}function uo(e,t){return e.x===t.x&&e.y===t.y}function $f(e,t,i,n){let r=fc(Zt(e,t,i)),s=fc(Zt(e,t,n)),o=fc(Zt(i,n,e)),a=fc(Zt(i,n,t));if(r!==s&&o!==a)return!0;if(r===0&&uc(e,i,t))return!0;if(s===0&&uc(e,n,t))return!0;if(o===0&&uc(i,e,n))return!0;if(a===0&&uc(i,t,n))return!0;return!1}function uc(e,t,i){return t.x<=Math.max(e.x,i.x)&&t.x>=Math.min(e.x,i.x)&&t.y<=Math.max(e.y,i.y)&&t.y>=Math.min(e.y,i.y)}function fc(e){return e>0?1:e<0?-1:0}function Ox(e,t){let i=e;do{if(i.i!==e.i&&i.next.i!==e.i&&i.i!==t.i&&i.next.i!==t.i&&$f(i,i.next,e,t))return!0;i=i.next}while(i!==e);return!1}function Va(e,t){return Zt(e.prev,e,e.next)<0?Zt(e,t,e.next)>=0&&Zt(e,e.prev,t)>=0:Zt(e,t,e.prev)<0||Zt(e,e.next,t)<0}function zx(e,t){let i=e,n=!1,r=(e.x+t.x)/2,s=(e.y+t.y)/2;do{if(i.y>s!==i.next.y>s&&i.next.y!==i.y&&r<(i.next.x-i.x)*(s-i.y)/(i.next.y-i.y)+i.x)n=!n;i=i.next}while(i!==e);return n}function Qf(e,t){let i=Gh(e.i,e.x,e.y),n=Gh(t.i,t.x,t.y),r=e.next,s=t.prev;return e.next=t,t.prev=e,i.next=r,r.prev=i,n.next=i,i.prev=n,s.next=n,n.prev=s,n}function Zf(e,t,i,n){let r=Gh(e,t,i);if(!n)r.prev=r,r.next=r;else r.next=n.next,r.prev=n,n.next.prev=r,n.next=r;return r}function Wa(e){if(e.next.prev=e.prev,e.prev.next=e.next,e.prevZ)e.prevZ.nextZ=e.nextZ;if(e.nextZ)e.nextZ.prevZ=e.prevZ}function Gh(e,t,i){return{i:e,x:t,y:i,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Gx(e,t,i,n){let r=0;for(let s=t,o=i-n;s<i;s+=n)r+=(e[o]-e[s])*(e[s+1]+e[o+1]),o=s;return r}class kh{static triangulate(e,t,i=2){return Hh(e,t,i)}}class an{static area(e){let t=e.length,i=0;for(let n=t-1,r=0;r<t;n=r++)i+=e[n].x*e[r].y-e[r].x*e[n].y;return i*0.5}static isClockWise(e){return an.area(e)<0}static triangulateShape(e,t){let i=[],n=[],r=[];jf(e),ed(i,e);let s=e.length;t.forEach(jf);for(let a=0;a<t.length;a++)n.push(s),s+=t[a].length,ed(i,t[a]);let o=kh.triangulate(i,n);for(let a=0;a<o.length;a+=3)r.push(o.slice(a,a+3));return r}}function jf(e){let t=e.length;if(t>2&&e[t-1].equals(e[0]))e.pop()}function ed(e,t){for(let i=0;i<t.length;i++)e.push(t[i].x),e.push(t[i].y)}class fo extends Be{constructor(e=new ki([new k(0.5,0.5),new k(-0.5,0.5),new k(-0.5,-0.5),new k(0.5,-0.5)]),t={}){super();this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let i=this,n=[],r=[];for(let o=0,a=e.length;o<a;o++){let l=e[o];s(l)}this.setAttribute("position",new _e(n,3)),this.setAttribute("uv",new _e(r,2)),this.computeVertexNormals();function s(o){let a=[],l=t.curveSegments!==void 0?t.curveSegments:12,c=t.steps!==void 0?t.steps:1,h=t.depth!==void 0?t.depth:1,f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,u=t.bevelThickness!==void 0?t.bevelThickness:0.2,p=t.bevelSize!==void 0?t.bevelSize:u-0.1,g=t.bevelOffset!==void 0?t.bevelOffset:0,_=t.bevelSegments!==void 0?t.bevelSegments:3,m=t.extrudePath,d=t.UVGenerator!==void 0?t.UVGenerator:Hx,v,y=!1,S,E,w,x;if(m){v=m.getSpacedPoints(c),y=!0,f=!1;let re=m.isCatmullRomCurve3?m.closed:!1;S=m.computeFrenetFrames(c,re),E=new A,w=new A,x=new A}if(!f)_=0,u=0,p=0,g=0;let M=o.extractPoints(l),{shape:R,holes:U}=M;if(!an.isClockWise(R)){R=R.reverse();for(let re=0,he=U.length;re<he;re++){let fe=U[re];if(an.isClockWise(fe))U[re]=fe.reverse()}}function O(re){let Ce=re[0];for(let Ue=1;Ue<=re.length;Ue++){let Ke=Ue%re.length,Ve=re[Ke],lt=Ve.x-Ce.x,dt=Ve.y-Ce.y,Et=lt*lt+dt*dt,B=Math.max(Math.abs(Ve.x),Math.abs(Ve.y),Math.abs(Ce.x),Math.abs(Ce.y)),oi=0.000000000000000000010000000000000001*B*B;if(Et<=oi){re.splice(Ke,1),Ue--;continue}Ce=Ve}}O(R),U.forEach(O);let te=U.length,P=R;for(let re=0;re<te;re++){let he=U[re];R=R.concat(he)}function q(re,he,fe){if(!he)Fe("ExtrudeGeometry: vec does not exist");return re.clone().addScaledVector(he,fe)}let L=R.length;function N(re,he,fe){let Ce,Ue,Ke,Ve=re.x-he.x,lt=re.y-he.y,dt=fe.x-re.x,Et=fe.y-re.y,B=Ve*Ve+lt*lt,oi=Ve*Et-lt*dt;if(Math.abs(oi)>Number.EPSILON){let ct=Math.sqrt(B),jt=Math.sqrt(dt*dt+Et*Et),Ae=he.x-lt/ct,Rt=he.y+Ve/ct,je=fe.x-Et/jt,nt=fe.y+dt/jt,ai=((je-Ae)*Et-(nt-Rt)*dt)/(Ve*Et-lt*dt);Ce=Ae+Ve*ai-re.x,Ue=Rt+lt*ai-re.y;let C=Ce*Ce+Ue*Ue;if(C<=2)return new k(Ce,Ue);else Ke=Math.sqrt(C/2)}else{let ct=!1;if(Ve>Number.EPSILON){if(dt>Number.EPSILON)ct=!0}else if(Ve<-Number.EPSILON){if(dt<-Number.EPSILON)ct=!0}else if(Math.sign(lt)===Math.sign(Et))ct=!0;if(ct)Ce=-lt,Ue=Ve,Ke=Math.sqrt(B);else Ce=Ve,Ue=lt,Ke=Math.sqrt(B/2)}return new k(Ce/Ke,Ue/Ke)}let Q=[];for(let re=0,he=P.length,fe=he-1,Ce=re+1;re<he;re++,fe++,Ce++){if(fe===he)fe=0;if(Ce===he)Ce=0;Q[re]=N(P[re],P[fe],P[Ce])}let z=[],X,Z=Q.concat();for(let re=0,he=te;re<he;re++){let fe=U[re];X=[];for(let Ce=0,Ue=fe.length,Ke=Ue-1,Ve=Ce+1;Ce<Ue;Ce++,Ke++,Ve++){if(Ke===Ue)Ke=0;if(Ve===Ue)Ve=0;X[Ce]=N(fe[Ce],fe[Ke],fe[Ve])}z.push(X),Z=Z.concat(X)}let de;if(_===0)de=an.triangulateShape(P,U);else{let re=[],he=[];for(let fe=0;fe<_;fe++){let Ce=fe/_,Ue=u*Math.cos(Ce*Math.PI/2),Ke=p*Math.sin(Ce*Math.PI/2)+g;for(let Ve=0,lt=P.length;Ve<lt;Ve++){let dt=q(P[Ve],Q[Ve],Ke);if(Te(dt.x,dt.y,-Ue),Ce===0)re.push(dt)}for(let Ve=0,lt=te;Ve<lt;Ve++){let dt=U[Ve];X=z[Ve];let Et=[];for(let B=0,oi=dt.length;B<oi;B++){let ct=q(dt[B],X[B],Ke);if(Te(ct.x,ct.y,-Ue),Ce===0)Et.push(ct)}if(Ce===0)he.push(Et)}}de=an.triangulateShape(re,he)}let V=de.length,j=p+g;for(let re=0;re<L;re++){let he=f?q(R[re],Z[re],j):R[re];if(!y)Te(he.x,he.y,0);else w.copy(S.normals[0]).multiplyScalar(he.x),E.copy(S.binormals[0]).multiplyScalar(he.y),x.copy(v[0]).add(w).add(E),Te(x.x,x.y,x.z)}for(let re=1;re<=c;re++)for(let he=0;he<L;he++){let fe=f?q(R[he],Z[he],j):R[he];if(!y)Te(fe.x,fe.y,h/c*re);else w.copy(S.normals[re]).multiplyScalar(fe.x),E.copy(S.binormals[re]).multiplyScalar(fe.y),x.copy(v[re]).add(w).add(E),Te(x.x,x.y,x.z)}for(let re=_-1;re>=0;re--){let he=re/_,fe=u*Math.cos(he*Math.PI/2),Ce=p*Math.sin(he*Math.PI/2)+g;for(let Ue=0,Ke=P.length;Ue<Ke;Ue++){let Ve=q(P[Ue],Q[Ue],Ce);Te(Ve.x,Ve.y,h+fe)}for(let Ue=0,Ke=U.length;Ue<Ke;Ue++){let Ve=U[Ue];X=z[Ue];for(let lt=0,dt=Ve.length;lt<dt;lt++){let Et=q(Ve[lt],X[lt],Ce);if(!y)Te(Et.x,Et.y,h+fe);else Te(Et.x,Et.y+v[c-1].y,v[c-1].x+fe)}}}ve(),Me();function ve(){let re=n.length/3;if(f){let he=0,fe=L*he;for(let Ce=0;Ce<V;Ce++){let Ue=de[Ce];ut(Ue[2]+fe,Ue[1]+fe,Ue[0]+fe)}he=c+_*2,fe=L*he;for(let Ce=0;Ce<V;Ce++){let Ue=de[Ce];ut(Ue[0]+fe,Ue[1]+fe,Ue[2]+fe)}}else{for(let he=0;he<V;he++){let fe=de[he];ut(fe[2],fe[1],fe[0])}for(let he=0;he<V;he++){let fe=de[he];ut(fe[0]+L*c,fe[1]+L*c,fe[2]+L*c)}}i.addGroup(re,n.length/3-re,0)}function Me(){let re=n.length/3,he=0;Oe(P,he),he+=P.length;for(let fe=0,Ce=U.length;fe<Ce;fe++){let Ue=U[fe];Oe(Ue,he),he+=Ue.length}i.addGroup(re,n.length/3-re,1)}function Oe(re,he){let fe=re.length;while(--fe>=0){let Ce=fe,Ue=fe-1;if(Ue<0)Ue=re.length-1;for(let Ke=0,Ve=c+_*2;Ke<Ve;Ke++){let lt=L*Ke,dt=L*(Ke+1),Et=he+Ce+lt,B=he+Ue+lt,oi=he+Ue+dt,ct=he+Ce+dt;De(Et,B,oi,ct)}}}function Te(re,he,fe){a.push(re),a.push(he),a.push(fe)}function ut(re,he,fe){Ne(re),Ne(he),Ne(fe);let Ce=n.length/3,Ue=d.generateTopUV(i,n,Ce-3,Ce-2,Ce-1);rt(Ue[0]),rt(Ue[1]),rt(Ue[2])}function De(re,he,fe,Ce){Ne(re),Ne(he),Ne(Ce),Ne(he),Ne(fe),Ne(Ce);let Ue=n.length/3,Ke=d.generateSideWallUV(i,n,Ue-6,Ue-3,Ue-2,Ue-1);rt(Ke[0]),rt(Ke[1]),rt(Ke[3]),rt(Ke[1]),rt(Ke[2]),rt(Ke[3])}function Ne(re){n.push(a[re*3+0]),n.push(a[re*3+1]),n.push(a[re*3+2])}function rt(re){r.push(re.x),r.push(re.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return kx(t,i,e)}static fromJSON(e,t){let i=[];for(let r=0,s=e.shapes.length;r<s;r++){let o=t[e.shapes[r]];i.push(o)}let n=e.options.extrudePath;if(n!==void 0)e.options.extrudePath=new Sr[n.type]().fromJSON(n);return new fo(i,e.options)}}var Hx={generateTopUV:function(e,t,i,n,r){let s=t[i*3],o=t[i*3+1],a=t[n*3],l=t[n*3+1],c=t[r*3],h=t[r*3+1];return[new k(s,o),new k(a,l),new k(c,h)]},generateSideWallUV:function(e,t,i,n,r,s){let o=t[i*3],a=t[i*3+1],l=t[i*3+2],c=t[n*3],h=t[n*3+1],f=t[n*3+2],u=t[r*3],p=t[r*3+1],g=t[r*3+2],_=t[s*3],m=t[s*3+1],d=t[s*3+2];if(Math.abs(a-h)<Math.abs(o-c))return[new k(o,1-l),new k(c,1-f),new k(u,1-g),new k(_,1-d)];else return[new k(a,1-l),new k(h,1-f),new k(p,1-g),new k(m,1-d)]}};function kx(e,t,i){if(i.shapes=[],Array.isArray(e))for(let n=0,r=e.length;n<r;n++){let s=e[n];i.shapes.push(s.uuid)}else i.shapes.push(e.uuid);if(i.options=Object.assign({},t),t.extrudePath!==void 0)i.options.extrudePath=t.extrudePath.toJSON();return i}class dc extends Be{constructor(e=[new k(0,-0.5),new k(0.5,0),new k(0,0.5)],t=12,i=0,n=Math.PI*2){super();this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:n},t=Math.floor(t),n=et(n,0,Math.PI*2);let r=[],s=[],o=[],a=[],l=[],c=1/t,h=new A,f=new k,u=new A,p=new A,g=new A,_=0,m=0;for(let d=0;d<=e.length-1;d++)switch(d){case 0:_=e[d+1].x-e[d].x,m=e[d+1].y-e[d].y,u.x=m*1,u.y=-_,u.z=m*0,g.copy(u),u.normalize(),a.push(u.x,u.y,u.z);break;case e.length-1:g.normalize(),a.push(g.x,g.y,g.z);break;default:_=e[d+1].x-e[d].x,m=e[d+1].y-e[d].y,u.x=m*1,u.y=-_,u.z=m*0,p.copy(u),u.x+=g.x,u.y+=g.y,u.z+=g.z,u.normalize(),a.push(u.x,u.y,u.z),g.copy(p)}for(let d=0;d<=t;d++){let v=i+d*c*n,y=Math.sin(v),S=Math.cos(v);for(let E=0;E<=e.length-1;E++){h.x=e[E].x*y,h.y=e[E].y,h.z=e[E].x*S,s.push(h.x,h.y,h.z),f.x=d/t,f.y=E/(e.length-1),o.push(f.x,f.y);let w=a[3*E+0]*y,x=a[3*E+1],M=a[3*E+0]*S;l.push(w,x,M)}}for(let d=0;d<t;d++)for(let v=0;v<e.length-1;v++){let y=v+d*e.length,S=y,E=y+e.length,w=y+e.length+1,x=y+1;r.push(S,E,x),r.push(w,x,E)}this.setIndex(r),this.setAttribute("position",new _e(s,3)),this.setAttribute("uv",new _e(o,2)),this.setAttribute("normal",new _e(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new dc(e.points,e.segments,e.phiStart,e.phiLength)}}class Ft extends Be{constructor(e=1,t=1,i=1,n=1){super();this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:n};let r=e/2,s=t/2,o=Math.floor(i),a=Math.floor(n),l=o+1,c=a+1,h=e/o,f=t/a,u=[],p=[],g=[],_=[];for(let m=0;m<c;m++){let d=m*f-s;for(let v=0;v<l;v++){let y=v*h-r;p.push(y,-d,0),g.push(0,0,1),_.push(v/o),_.push(1-m/a)}}for(let m=0;m<a;m++)for(let d=0;d<o;d++){let v=d+l*m,y=d+l*(m+1),S=d+1+l*(m+1),E=d+1+l*m;u.push(v,y,E),u.push(y,S,E)}this.setIndex(u),this.setAttribute("position",new _e(p,3)),this.setAttribute("normal",new _e(g,3)),this.setAttribute("uv",new _e(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ft(e.width,e.height,e.widthSegments,e.heightSegments)}}class po extends Be{constructor(e=0.5,t=1,i=32,n=1,r=0,s=Math.PI*2){super();this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:n,thetaStart:r,thetaLength:s},i=Math.max(3,i),n=Math.max(1,n);let o=[],a=[],l=[],c=[],h=e,f=(t-e)/n,u=new A,p=new k;for(let g=0;g<=n;g++){for(let _=0;_<=i;_++){let m=r+_/i*s;u.x=h*Math.cos(m),u.y=h*Math.sin(m),a.push(u.x,u.y,u.z),l.push(0,0,1),p.x=(u.x/t+1)/2,p.y=(u.y/t+1)/2,c.push(p.x,p.y)}h+=f}for(let g=0;g<n;g++){let _=g*(i+1);for(let m=0;m<i;m++){let d=m+_,v=d,y=d+i+1,S=d+i+2,E=d+1;o.push(v,y,E),o.push(y,S,E)}}this.setIndex(o),this.setAttribute("position",new _e(a,3)),this.setAttribute("normal",new _e(l,3)),this.setAttribute("uv",new _e(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new po(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class mo extends Be{constructor(e=new ki([new k(0,0.5),new k(-0.5,-0.5),new k(0.5,-0.5)]),t=12){super();this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let i=[],n=[],r=[],s=[],o=0,a=0;if(Array.isArray(e)===!1)l(e);else for(let c=0;c<e.length;c++)l(e[c]),this.addGroup(o,a,c),o+=a,a=0;this.setIndex(i),this.setAttribute("position",new _e(n,3)),this.setAttribute("normal",new _e(r,3)),this.setAttribute("uv",new _e(s,2));function l(c){let h=n.length/3,f=c.extractPoints(t),{shape:u,holes:p}=f;if(an.isClockWise(u)===!1)u=u.reverse();for(let _=0,m=p.length;_<m;_++){let d=p[_];if(an.isClockWise(d)===!0)p[_]=d.reverse()}let g=an.triangulateShape(u,p);for(let _=0,m=p.length;_<m;_++){let d=p[_];u=u.concat(d)}for(let _=0,m=u.length;_<m;_++){let d=u[_];n.push(d.x,d.y,0),r.push(0,0,1),s.push(d.x,d.y)}for(let _=0,m=g.length;_<m;_++){let d=g[_],v=d[0]+h,y=d[1]+h,S=d[2]+h;i.push(v,y,S),a+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return Vx(t,e)}static fromJSON(e,t){let i=[];for(let n=0,r=e.shapes.length;n<r;n++){let s=t[e.shapes[n]];i.push(s)}return new mo(i,e.curveSegments)}}function Vx(e,t){if(t.shapes=[],Array.isArray(e))for(let i=0,n=e.length;i<n;i++){let r=e[i];t.shapes.push(r.uuid)}else t.shapes.push(e.uuid);return t}class On extends Be{constructor(e=1,t=32,i=16,n=0,r=Math.PI*2,s=0,o=Math.PI){super();this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:n,phiLength:r,thetaStart:s,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let a=Math.min(s+o,Math.PI),l=0,c=[],h=new A,f=new A,u=[],p=[],g=[],_=[];for(let m=0;m<=i;m++){let d=[],v=m/i,y=s+v*o,S=e*Math.cos(y),E=Math.sqrt(e*e-S*S),w=0;if(m===0&&s===0)w=0.5/t;else if(m===i&&a===Math.PI)w=-0.5/t;for(let x=0;x<=t;x++){let M=x/t,R=n+M*r;h.x=-E*Math.cos(R),h.y=S,h.z=E*Math.sin(R),p.push(h.x,h.y,h.z),f.copy(h).normalize(),g.push(f.x,f.y,f.z),_.push(M+w,1-v),d.push(l++)}c.push(d)}for(let m=0;m<i;m++)for(let d=0;d<t;d++){let v=c[m][d+1],y=c[m][d],S=c[m+1][d],E=c[m+1][d+1];if(m!==0||s>0)u.push(v,y,E);if(m!==i-1||a<Math.PI)u.push(y,S,E)}this.setIndex(u),this.setAttribute("position",new _e(p,3)),this.setAttribute("normal",new _e(g,3)),this.setAttribute("uv",new _e(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new On(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class ir extends Be{constructor(e=1,t=0.4,i=12,n=48,r=Math.PI*2,s=0,o=Math.PI*2){super();this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:n,arc:r,thetaStart:s,thetaLength:o},i=Math.floor(i),n=Math.floor(n);let a=[],l=[],c=[],h=[],f=new A,u=new A,p=new A;for(let g=0;g<=i;g++){let _=s+g/i*o;for(let m=0;m<=n;m++){let d=m/n*r;u.x=(e+t*Math.cos(_))*Math.cos(d),u.y=(e+t*Math.cos(_))*Math.sin(d),u.z=t*Math.sin(_),l.push(u.x,u.y,u.z),f.x=e*Math.cos(d),f.y=e*Math.sin(d),p.subVectors(u,f).normalize(),c.push(p.x,p.y,p.z),h.push(m/n),h.push(g/i)}}for(let g=1;g<=i;g++)for(let _=1;_<=n;_++){let m=(n+1)*g+_-1,d=(n+1)*(g-1)+_-1,v=(n+1)*(g-1)+_,y=(n+1)*g+_;a.push(m,d,y),a.push(d,v,y)}this.setIndex(a),this.setAttribute("position",new _e(l,3)),this.setAttribute("normal",new _e(c,3)),this.setAttribute("uv",new _e(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ir(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}class Xa extends Be{constructor(e=new za(new A(-1,-1,0),new A(-1,1,0),new A(1,1,0)),t=64,i=1,n=8,r=!1){super();this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:n,closed:r};let s=e.computeFrenetFrames(t,r);this.tangents=s.tangents,this.normals=s.normals,this.binormals=s.binormals;let o=new A,a=new A,l=new k,c=new A,h=[],f=[],u=[],p=[];g(),this.setIndex(p),this.setAttribute("position",new _e(h,3)),this.setAttribute("normal",new _e(f,3)),this.setAttribute("uv",new _e(u,2));function g(){for(let v=0;v<t;v++)_(v);_(r===!1?t:0),d(),m()}function _(v){c=e.getPointAt(v/t,c);let y=s.normals[v],S=s.binormals[v];for(let E=0;E<=n;E++){let w=E/n*Math.PI*2,x=Math.sin(w),M=-Math.cos(w);a.x=M*y.x+x*S.x,a.y=M*y.y+x*S.y,a.z=M*y.z+x*S.z,a.normalize(),f.push(a.x,a.y,a.z),o.x=c.x+i*a.x,o.y=c.y+i*a.y,o.z=c.z+i*a.z,h.push(o.x,o.y,o.z)}}function m(){for(let v=1;v<=t;v++)for(let y=1;y<=n;y++){let S=(n+1)*(v-1)+(y-1),E=(n+1)*v+(y-1),w=(n+1)*v+y,x=(n+1)*(v-1)+y;p.push(S,E,x),p.push(E,w,x)}}function d(){for(let v=0;v<=t;v++)for(let y=0;y<=n;y++)l.x=v/t,l.y=y/n,u.push(l.x,l.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new Xa(new Sr[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}function nr(e){let t={};for(let i in e){t[i]={};for(let n in e[i]){let r=e[i][n];if(td(r))if(r.isRenderTargetTexture)ge("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][n]=null;else t[i][n]=r.clone();else if(Array.isArray(r))if(td(r[0])){let s=[];for(let o=0,a=r.length;o<a;o++)s[o]=r[o].clone();t[i][n]=s}else t[i][n]=r.slice();else t[i][n]=r}}return t}function Bi(e){let t={};for(let i=0;i<e.length;i++){let n=nr(e[i]);for(let r in n)t[r]=n[r]}return t}function td(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function id(e){let t=[];for(let i=0;i<e.length;i++)t.push(e[i].clone());return t}function pc(e){let t=e.getRenderTarget();if(t===null)return e.outputColorSpace;if(t.isXRRenderTarget===!0)return t.texture.colorSpace;return tt.workingColorSpace}var zn={clone:nr,merge:Bi};var nd=`
void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}
`;var rd=`
void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}
`;class Xt extends Ht{constructor(e){super();if(this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=nd,this.fragmentShader=rd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0)this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=nr(e.uniforms),this.uniformsGroups=id(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let s=this.uniforms[n].value;if(s&&s.isTexture)t.uniforms[n]={type:"t",value:s.toJSON(e).uuid};else if(s&&s.isColor)t.uniforms[n]={type:"c",value:s.getHex()};else if(s&&s.isVector2)t.uniforms[n]={type:"v2",value:s.toArray()};else if(s&&s.isVector3)t.uniforms[n]={type:"v3",value:s.toArray()};else if(s&&s.isVector4)t.uniforms[n]={type:"v4",value:s.toArray()};else if(s&&s.isMatrix3)t.uniforms[n]={type:"m3",value:s.toArray()};else if(s&&s.isMatrix4)t.uniforms[n]={type:"m4",value:s.toArray()};else t.uniforms[n]={value:s}}if(Object.keys(this.defines).length>0)t.defines=this.defines;t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let n in this.extensions)if(this.extensions[n]===!0)i[n]=!0;if(Object.keys(i).length>0)t.extensions=i;return t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let i in e.uniforms){let n=e.uniforms[i];switch(this.uniforms[i]={},n.type){case"t":this.uniforms[i].value=t[n.value]||null;break;case"c":this.uniforms[i].value=new ue().setHex(n.value);break;case"v2":this.uniforms[i].value=new k().fromArray(n.value);break;case"v3":this.uniforms[i].value=new A().fromArray(n.value);break;case"v4":this.uniforms[i].value=new St().fromArray(n.value);break;case"m3":this.uniforms[i].value=new Je().fromArray(n.value);break;case"m4":this.uniforms[i].value=new Xe().fromArray(n.value);break;default:this.uniforms[i].value=n.value}}if(e.defines!==void 0)this.defines=e.defines;if(e.vertexShader!==void 0)this.vertexShader=e.vertexShader;if(e.fragmentShader!==void 0)this.fragmentShader=e.fragmentShader;if(e.glslVersion!==void 0)this.glslVersion=e.glslVersion;if(e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];if(e.lights!==void 0)this.lights=e.lights;if(e.clipping!==void 0)this.clipping=e.clipping;return this}}class cs extends Xt{constructor(e){super(e);this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class mt extends Ht{constructor(e){super();this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ue(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ue(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=wn,this.normalScale=new k(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ui,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class go extends mt{constructor(e){super();this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new k(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return et(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+0.4*t)/(1-0.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new ue(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ue(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ue(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){if(this._anisotropy>0!==e>0)this.version++;this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){if(this._clearcoat>0!==e>0)this.version++;this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){if(this._diffuseRoughness>0!==e>0)this.version++;this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){if(this._iridescence>0!==e>0)this.version++;this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){if(this._dispersion>0!==e>0)this.version++;this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){if(this._retroreflectivity>0!==e>0)this.version++;this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){if(this._sheen>0!==e>0)this.version++;this._sheen=e}get transmission(){return this._transmission}set transmission(e){if(this._transmission>0!==e>0)this.version++;this._transmission=e}get iridescenceThicknessRange(){return pn('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){pn('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class qa extends Ht{constructor(e){super();this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ue(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ue(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=wn,this.normalScale=new k(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ui,this.combine=Gr,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=0.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Ya extends Ht{constructor(e){super();this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=nf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Za extends Ht{constructor(e){super();this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function br(e,t){if(!e||e.constructor===t)return e;if(typeof t.BYTES_PER_ELEMENT==="number")return new t(e);return Array.prototype.slice.call(e)}function xo(e){return e!==void 0&&e.inTangents!==void 0&&e.outTangents!==void 0}class xn{constructor(e,t,i,n){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=n!==void 0?n:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,n=t[i],r=t[i-1];i:{e:{let s;t:{n:if(!(e<n)){for(let o=i+2;;){if(n===void 0){if(e<r)break n;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=n,n=t[++i],e<n)break e}s=t.length;break t}if(!(e>=r)){let o=t[1];if(e<o)i=2,r=o;for(let a=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===a)break;if(n=r,r=t[--i-1],e>=r)break e}s=i,i=0;break t}break i}while(i<s){let o=i+s>>>1;if(e<t[o])s=o;else i=o+1}if(n=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,n)}return this.interpolate_(i,r,e,n)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,n=this.valueSize,r=e*n;for(let s=0;s!==n;++s)t[s]=i[r+s];return t}interpolate_(){throw Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}}class mc extends xn{constructor(e,t,i,n){super(e,t,i,n);this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Sl,endingEnd:Sl}}intervalChanged_(e,t,i){let n=this.parameterPositions,r=e-2,s=e+1,o=n[r],a=n[s];if(o===void 0)switch(this.getSettings_().endingStart){case bl:r=e,o=2*t-i;break;case El:r=n.length-2,o=t+n[r]-n[r+1];break;default:r=e,o=i}if(a===void 0)switch(this.getSettings_().endingEnd){case bl:s=e,a=2*i-t;break;case El:s=1,a=i+n[1]-n[0];break;default:s=e-1,a=t}let l=(i-t)*0.5,c=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(a-i),this._offsetPrev=r*c,this._offsetNext=s*c}interpolate_(e,t,i,n){let r=this.resultBuffer,s=this.sampleValues,o=this.valueSize,a=e*o,l=a-o,c=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,u=this._weightNext,p=(i-t)/(n-t),g=p*p,_=g*p,m=-f*_+2*f*g-f*p,d=(1+f)*_+(-1.5-2*f)*g+(-0.5+f)*p+1,v=(-1-u)*_+(1.5+u)*g+0.5*p,y=u*_-u*g;for(let S=0;S!==o;++S)r[S]=m*s[c+S]+d*s[l+S]+v*s[a+S]+y*s[h+S];return r}}class Ja extends xn{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){let r=this.resultBuffer,s=this.sampleValues,o=this.valueSize,a=e*o,l=a-o,c=(i-t)/(n-t),h=1-c;for(let f=0;f!==o;++f)r[f]=s[l+f]*h+s[a+f]*c;return r}}class gc extends xn{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e){return this.copySampleValue_(e-1)}}class xc extends xn{interpolate_(e,t,i,n){let r=this.resultBuffer,s=this.sampleValues,o=this.valueSize,a=e*o,l=a-o,c=this.inTangents,h=this.outTangents;if(!c||!h){let p=(i-t)/(n-t),g=1-p;for(let _=0;_!==o;++_)r[_]=s[l+_]*g+s[a+_]*p;return r}let f=o*2,u=e-1;for(let p=0;p!==o;++p){let g=s[l+p],_=s[a+p],m=u*f+p*2,d=h[m],v=h[m+1],y=e*f+p*2,S=c[y],E=c[y+1],w=jx(i,t,d,S,n);r[p]=od(w,g,v,E,_)}return r}}function od(e,t,i,n,r){let s=1-e;return s*s*s*t+3*s*s*e*i+3*s*e*e*n+e*e*e*r}function Qx(e,t,i,n,r){let s=1-e;return 3*s*s*(i-t)+6*s*e*(n-i)+3*e*e*(r-n)}function jx(e,t,i,n,r){let s=(e-t)/(r-t);for(let o=0;o<8;o++){let a=od(s,t,i,n,r)-e;if(Math.abs(a)<0.0000000001)break;let l=Qx(s,t,i,n,r);if(Math.abs(l)<0.0000000001)break;s=Math.max(0,Math.min(1,s-a/l))}return s}class ui{constructor(e,t,i,n){if(e===void 0)throw Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=br(t,this.TimeBufferType),this.values=br(i,this.ValueBufferType),this.setInterpolation(n||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:br(e.times,Array),values:br(e.values,Array)};let n=e.getInterpolation();if(n!==e.DefaultInterpolation)i.interpolation=n;if(xo(e.settings))i.settings={inTangents:br(e.settings.inTangents,Array),outTangents:br(e.settings.outTangents,Array)}}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new gc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ja(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new mc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new xc(this.times,this.values,this.getValueSize(),e);if(this.settings)t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents;return t}setInterpolation(e){let t;switch(e){case Wr:t=this.InterpolantFactoryMethodDiscrete;break;case vl:t=this.InterpolantFactoryMethodLinear;break;case Ml:t=this.InterpolantFactoryMethodSmooth;break;case rh:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(i);return ge("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Wr;case this.InterpolantFactoryMethodLinear:return vl;case this.InterpolantFactoryMethodSmooth:return Ml;case this.InterpolantFactoryMethodBezier:return rh}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]+=e;if(xo(this.settings))ad(this.settings.inTangents,e),ad(this.settings.outTangents,e)}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]*=e;if(xo(this.settings))ld(this.settings.inTangents,e),ld(this.settings.outTangents,e)}return this}trim(e,t){let i=this.times,n=i.length,r=0,s=n-1;while(r!==n&&i[r]<e)++r;while(s!==-1&&i[s]>t)--s;if(++s,r!==0||s!==n){if(r>=s)s=Math.max(s,1),r=s-1;let o=this.getValueSize();this.times=i.slice(r,s),this.values=this.values.slice(r*o,s*o)}return this}validate(){let e=!0,t=this.getValueSize();if(t-Math.floor(t)!==0)Fe("KeyframeTrack: Invalid value size in track.",this),e=!1;let i=this.times,n=this.values,r=i.length;if(r===0)Fe("KeyframeTrack: Track is empty.",this),e=!1;let s=null;for(let o=0;o!==r;o++){let a=i[o];if(typeof a==="number"&&isNaN(a)){Fe("KeyframeTrack: Time is not a valid number.",this,o,a),e=!1;break}if(s!==null&&s>a){Fe("KeyframeTrack: Out of order keys.",this,o,a,s),e=!1;break}s=a}if(n!==void 0){if(oh(n))for(let o=0,a=n.length;o!==a;++o){let l=n[o];if(isNaN(l)){Fe("KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),n=this.getInterpolation()===Ml,r=e.length-1,s=1;for(let o=1;o<r;++o){let a=!1,l=e[o],c=e[o+1];if(l!==c&&(o!==1||l!==e[0]))if(!n){let h=o*i,f=h-i,u=h+i;for(let p=0;p!==i;++p){let g=t[h+p];if(g!==t[f+p]||g!==t[u+p]){a=!0;break}}}else a=!0;if(a){if(o!==s){e[s]=e[o];let h=o*i,f=s*i;for(let u=0;u!==i;++u)t[f+u]=t[h+u]}++s}}if(r>0){e[s]=e[r];for(let o=r*i,a=s*i,l=0;l!==i;++l)t[a+l]=t[o+l];++s}if(s!==e.length)this.times=e.slice(0,s),this.values=t.slice(0,s*i);else this.times=e,this.values=t;return this}clone(){let e=this.times.slice(),t=this.values.slice(),n=new this.constructor(this.name,e,t);if(n.createInterpolant=this.createInterpolant,xo(this.settings))n.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()};return n}}function ad(e,t){for(let i=0,n=e.length;i!==n;i+=2)e[i]+=t}function ld(e,t){for(let i=0,n=e.length;i!==n;i+=2)e[i]*=t}ui.prototype.ValueTypeName="";ui.prototype.TimeBufferType=Float32Array;ui.prototype.ValueBufferType=Float32Array;ui.prototype.DefaultInterpolation=vl;class Er extends ui{constructor(e,t,i){super(e,t,i)}}Er.prototype.ValueTypeName="bool";Er.prototype.ValueBufferType=Array;Er.prototype.DefaultInterpolation=Wr;Er.prototype.InterpolantFactoryMethodLinear=void 0;Er.prototype.InterpolantFactoryMethodSmooth=void 0;class _c extends ui{constructor(e,t,i,n){super(e,t,i,n)}}_c.prototype.ValueTypeName="color";class yc extends ui{constructor(e,t,i,n){super(e,t,i,n)}}yc.prototype.ValueTypeName="number";class vc extends xn{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){let r=this.resultBuffer,s=this.sampleValues,o=this.valueSize,a=(i-t)/(n-t),l=e*o;for(let c=l+o;l!==c;l+=4)ni.slerpFlat(r,0,s,l-o,s,l,a);return r}}class Ka extends ui{constructor(e,t,i,n){super(e,t,i,n)}InterpolantFactoryMethodLinear(e){return new vc(this.times,this.values,this.getValueSize(),e)}}Ka.prototype.ValueTypeName="quaternion";Ka.prototype.InterpolantFactoryMethodSmooth=void 0;class Tr extends ui{constructor(e,t,i){super(e,t,i)}}Tr.prototype.ValueTypeName="string";Tr.prototype.ValueBufferType=Array;Tr.prototype.DefaultInterpolation=Wr;Tr.prototype.InterpolantFactoryMethodLinear=void 0;Tr.prototype.InterpolantFactoryMethodSmooth=void 0;class Mc extends ui{constructor(e,t,i,n){super(e,t,i,n)}}Mc.prototype.ValueTypeName="vector";var hs={enabled:!1,files:{},add:function(e,t){if(this.enabled===!1)return;if(hd(e))return;this.files[e]=t},get:function(e){if(this.enabled===!1)return;if(hd(e))return;return this.files[e]},remove:function(e){delete this.files[e]},clear:function(){this.files={}}};function hd(e){try{let t=e.slice(e.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch(t){return!1}}class Sc{constructor(e,t,i){let n=this,r=!1,s=0,o=0,a=void 0,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(c){if(o++,r===!1){if(n.onStart!==void 0)n.onStart(c,s,o)}r=!0},this.itemEnd=function(c){if(s++,n.onProgress!==void 0)n.onProgress(c,s,o);if(s===o){if(r=!1,n.onLoad!==void 0)n.onLoad()}},this.itemError=function(c){if(n.onError!==void 0)n.onError(c)},this.resolveURL=function(c){if(c=c.normalize("NFC"),a)return a(c);return c},this.setURLModifier=function(c){return a=c,this},this.addHandler=function(c,h){return l.push(c,h),this},this.removeHandler=function(c){let h=l.indexOf(c);if(h!==-1)l.splice(h,2);return this},this.getHandler=function(c){for(let h=0,f=l.length;h<f;h+=2){let u=l[h],p=l[h+1];if(u.global)u.lastIndex=0;if(u.test(c))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){if(!this._abortController)this._abortController=new AbortController;return this._abortController}}var Vh=new Sc;class Ri{constructor(e){if(this.manager=e!==void 0?e:Vh,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(n,r){i.load(e,n,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}}Ri.DEFAULT_MATERIAL_NAME="__DEFAULT";var _o=new WeakMap;class yo extends Ri{constructor(e){super(e)}load(e,t,i,n){if(this.path!==void 0)e=this.path+e;e=this.manager.resolveURL(e);let r=this,s=hs.get(`image:${e}`);if(s!==void 0){if(s.complete===!0)r.manager.itemStart(e),setTimeout(function(){if(t)t(s);r.manager.itemEnd(e)},0);else{let h=_o.get(s);if(h===void 0)h=[],_o.set(s,h);h.push({onLoad:t,onError:n})}return s}let o=fr("img");function a(){if(c(),t)t(this);let h=_o.get(this)||[];for(let f=0;f<h.length;f++){let u=h[f];if(u.onLoad)u.onLoad(this)}_o.delete(this),r.manager.itemEnd(e)}function l(h){if(c(),n)n(h);hs.remove(`image:${e}`);let f=_o.get(this)||[];for(let u=0;u<f.length;u++){let p=f[u];if(p.onError)p.onError(h)}_o.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function c(){o.removeEventListener("load",a,!1),o.removeEventListener("error",l,!1)}if(o.addEventListener("load",a,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"){if(this.crossOrigin!==void 0)o.crossOrigin=this.crossOrigin}return hs.add(`image:${e}`,o),r.manager.itemStart(e),o.fetchPriority=this.priority,o.src=e,o}}class vo extends Ri{constructor(e){super(e)}load(e,t,i,n){let r=new Mt,s=new yo(this.manager);return s.setPriority(this.priority),s.setCache(this.cache),s.setCrossOrigin(this.crossOrigin),s.setPath(this.path),s.load(e,function(o){if(r.image=o,r.needsUpdate=!0,t!==void 0)t(r)},i,n),r}}class Ln extends at{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super();this.isLight=!0,this.type="Light",this.color=new ue(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}var Xh=new Xe,ud=new A,fd=new A;class Mo{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new k(512,512),this.mapType=ei,this.map=null,this.mapPass=null,this.matrix=new Xe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new gn,this._frameExtents=new k(1,1),this._viewportCount=1,this._viewports=[new St(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;ud.setFromMatrixPosition(e.matrixWorld),t.position.copy(ud),fd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(fd),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,n){Xh.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(Xh,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,s=n?n.z/r.x:1,o=n?n.w/r.y:1,a=n?n.x/r.x:0,l=n?n.y/r.y:0;if(e.coordinateSystem===Nn||e.reversedDepth)t.set(0.5*s,0,0,0.5*s+a,0,0.5*o,0,0.5*o+l,0,0,1,0,0,0,0,1);else t.set(0.5*s,0,0,0.5*s+a,0,0.5*o,0,0.5*o+l,0,0,0.5,0.5,0,0,0,1);t.multiply(Xh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){if(this.map)this.map.dispose();if(this.mapPass)this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}var bc=new A,Ec=new ni,Gn=new A;class fs extends at{constructor(){super();this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Xe,this.projectionMatrix=new Xe,this.projectionMatrixInverse=new Xe,this.coordinateSystem=_i,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){if(super.updateMatrixWorld(e),this.matrixWorld.decompose(bc,Ec,Gn),Gn.x===1&&Gn.y===1&&Gn.z===1)this.matrixWorldInverse.copy(this.matrixWorld).invert();else this.matrixWorldInverse.compose(bc,Ec,Gn.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){if(super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(bc,Ec,Gn),Gn.x===1&&Gn.y===1&&Gn.z===1)this.matrixWorldInverse.copy(this.matrixWorld).invert();else this.matrixWorldInverse.compose(bc,Ec,Gn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}var wr=new A,dd=new k,pd=new k;class Qt extends fs{constructor(e=50,t=1,i=0.1,n=2000){super();this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=0.5*this.getFilmHeight()/e;this.fov=zs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Zr*0.5*this.fov);return 0.5*this.getFilmHeight()/e}getEffectiveFOV(){return zs*2*Math.atan(Math.tan(Zr*0.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){wr.set(-1,-1,0.5).applyMatrix4(this.projectionMatrixInverse),t.set(wr.x,wr.y).multiplyScalar(-e/wr.z),wr.set(1,1,0.5).applyMatrix4(this.projectionMatrixInverse),i.set(wr.x,wr.y).multiplyScalar(-e/wr.z)}getViewSize(e,t){return this.getViewBounds(e,dd,pd),t.subVectors(pd,dd)}setViewOffset(e,t,i,n,r,s){if(this.aspect=e/t,this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Zr*0.5*this.fov)/this.zoom,i=2*t,n=this.aspect*i,r=-0.5*n,s=this.view;if(this.view!==null&&this.view.enabled){let{fullWidth:a,fullHeight:l}=s;r+=s.offsetX*n/a,t-=s.offsetY*i/l,n*=s.width/a,i*=s.height/l}let o=this.filmOffset;if(o!==0)r+=e*o/this.getFilmWidth();this.projectionMatrix.makePerspective(r,r+n,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);if(t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null)t.object.view=Object.assign({},this.view);return t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class qh extends Mo{constructor(){super(new Qt(90,1,0.5,500));this.isPointLightShadow=!0}}class rr extends Ln{constructor(e,t,i=0,n=2){super(e,t);this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=n,this.shadow=new qh}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class Ar extends fs{constructor(e=-1,t=1,i=1,n=-1,r=0.1,s=2000){super();this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=n,this.near=r,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,n,r,s){if(this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2,r=i-e,s=i+e,o=n+t,a=n-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,s=r+l*this.view.width,o-=c*this.view.offsetY,a=o-c*this.view.height}this.projectionMatrix.makeOrthographic(r,s,o,a,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);if(t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null)t.object.view=Object.assign({},this.view);return t}}class $a extends Ln{constructor(e,t){super(e,t);this.isAmbientLight=!0,this.type="AmbientLight"}}var So=-90,bo=1;class ds extends at{constructor(e,t,i){super();this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let n=new Qt(So,bo,e,t);n.layers=this.layers,this.add(n);let r=new Qt(So,bo,e,t);r.layers=this.layers,this.add(r);let s=new Qt(So,bo,e,t);s.layers=this.layers,this.add(s);let o=new Qt(So,bo,e,t);o.layers=this.layers,this.add(o);let a=new Qt(So,bo,e,t);a.layers=this.layers,this.add(a);let l=new Qt(So,bo,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,n,r,s,o,a]=t;for(let l of t)this.remove(l);if(e===_i)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),a.up.set(0,1,0),a.lookAt(0,0,-1);else if(e===Nn)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),a.up.set(0,-1,0),a.lookAt(0,0,-1);else throw Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){if(this.parent===null)this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:n}=this;if(this.coordinateSystem!==e.coordinateSystem)this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem();let[r,s,o,a,l,c]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),u=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let g=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let _=!1;if(e.isWebGLRenderer===!0)_=e.state.buffers.depth.getReversed();else _=e.reversedDepthBuffer;if(e.setRenderTarget(i,0,n),_&&e.autoClear===!1)e.clearDepth();if(e.render(t,r),e.setRenderTarget(i,1,n),_&&e.autoClear===!1)e.clearDepth();if(e.render(t,s),e.setRenderTarget(i,2,n),_&&e.autoClear===!1)e.clearDepth();if(e.render(t,o),e.setRenderTarget(i,3,n),_&&e.autoClear===!1)e.clearDepth();if(e.render(t,a),e.setRenderTarget(i,4,n),_&&e.autoClear===!1)e.clearDepth();if(e.render(t,l),i.texture.mipmapsAutoUpdate=g,e.setRenderTarget(i,5,n),_&&e.autoClear===!1)e.clearDepth();e.render(t,c),e.setRenderTarget(h,f,u),e.xr.enabled=p,i.texture.needsPMREMUpdate=!0}}class Tc extends Qt{constructor(e=[]){super();this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}}class Qa{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){if(this._document=e,e.hidden!==void 0)this._pageVisibilityHandler=x_.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1)}disconnect(){if(this._pageVisibilityHandler!==null)this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null;this._document=null}getDelta(){return this._delta/1000}getElapsed(){return this._elapsed/1000}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){if(this._pageVisibilityHandler!==null&&this._document.hidden===!0)this._delta=0;else this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta;return this}}function x_(){if(this._document.hidden===!1)this.reset()}var Yh="\\[\\]\\.:\\/",y_=new RegExp("["+Yh+"]","g"),Zh="[^"+Yh+"]",v_="[^"+Yh.replace("\\.","")+"]",M_=/((?:WC+[\/:])*)/.source.replace("WC",Zh),S_=/(WCOD+)?/.source.replace("WCOD",v_),b_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Zh),E_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Zh),T_=new RegExp("^"+M_+S_+b_+E_+"$"),w_=["material","materials","bones","map"];class xd{constructor(e,t,i){let n=i||At.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,n)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,n=this._bindings[i];if(n!==void 0)n.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let n=this._targetGroup.nCachedObjects_,r=i.length;n!==r;++n)i[n].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}}class At{constructor(e,t,i){this.path=t,this.parsedPath=i||At.parseTrackName(t),this.node=At.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){if(!(e&&e.isAnimationObjectGroup))return new At(e,t,i);else return new At.Composite(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(y_,"")}static parseTrackName(e){let t=T_.exec(e);if(t===null)throw Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},n=i.nodeName&&i.nodeName.lastIndexOf(".");if(n!==void 0&&n!==-1){let r=i.nodeName.substring(n+1);if(w_.indexOf(r)!==-1)i.nodeName=i.nodeName.substring(0,n),i.objectName=r}if(i.propertyName===null||i.propertyName.length===0)throw Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let s=0;s<r.length;s++){let o=r[s];if(o.name===t||o.uuid===t)return o;let a=i(o.children);if(a)return a}return null},n=i(e.children);if(n)return n}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)e[t++]=i[n]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,{objectName:i,propertyName:n,propertyIndex:r}=t;if(!e)e=At.findNode(this.rootNode,t.nodeName),this.node=e;if(this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){ge("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let l=t.objectIndex;switch(i){case"materials":if(!e.material){Fe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Fe("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Fe("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let c=0;c<e.length;c++)if(e[c].name===l){l=c;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Fe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Fe("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){Fe("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(l!==void 0){if(e[l]===void 0){Fe("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let s=e[n];if(s===void 0){let l=t.nodeName;Fe("PropertyBinding: Trying to update property for track: "+l+"."+n+" but it wasn't found.",e);return}let o=this.Versioning.None;if(this.targetObject=e,e.isMaterial===!0)o=this.Versioning.NeedsUpdate;else if(e.isObject3D===!0)o=this.Versioning.MatrixWorldNeedsUpdate;let a=this.BindingType.Direct;if(r!==void 0){if(n==="morphTargetInfluences"){if(!e.geometry){Fe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Fe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}if(e.morphTargetDictionary[r]!==void 0)r=e.morphTargetDictionary[r]}a=this.BindingType.ArrayElement,this.resolvedProperty=s,this.propertyIndex=r}else if(s.fromArray!==void 0&&s.toArray!==void 0)a=this.BindingType.HasFromToArray,this.resolvedProperty=s;else if(Array.isArray(s))a=this.BindingType.EntireArray,this.resolvedProperty=s;else this.propertyName=n;this.getValue=this.GetterByBindingType[a],this.setValue=this.SetterByBindingTypeAndVersioning[a][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}At.Composite=xd;At.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};At.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};At.prototype.GetterByBindingType=[At.prototype._getValue_direct,At.prototype._getValue_array,At.prototype._getValue_arrayElement,At.prototype._getValue_toArray];At.prototype.SetterByBindingTypeAndVersioning=[[At.prototype._setValue_direct,At.prototype._setValue_direct_setNeedsUpdate,At.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[At.prototype._setValue_array,At.prototype._setValue_array_setNeedsUpdate,At.prototype._setValue_array_setMatrixWorldNeedsUpdate],[At.prototype._setValue_arrayElement,At.prototype._setValue_arrayElement_setNeedsUpdate,At.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[At.prototype._setValue_fromArray,At.prototype._setValue_fromArray_setNeedsUpdate,At.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var wD=new Float32Array(1);var _d=new Xe;class wc{constructor(e,t,i=0,n=1/0){this.ray=new Fn(e,t),this.near=i,this.far=n,this.camera=null,this.layers=new pr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){if(t.isPerspectiveCamera)this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,0.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t;else if(t.isOrthographicCamera)this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t;else Fe("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return _d.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(_d),this}intersectObject(e,t=!0,i=[]){return Jh(e,this,i,t),i.sort(yd),i}intersectObjects(e,t=!0,i=[]){for(let n=0,r=e.length;n<r;n++)Jh(e[n],this,i,t);return i.sort(yd),i}}function yd(e,t){return e.distance-t.distance}function Jh(e,t,i,n){let r=!0;if(e.layers.test(t.layers)){if(e.raycast(t,i)===!1)r=!1}if(r===!0&&n===!0){let s=e.children;for(let o=0,a=s.length;o<a;o++)Jh(s[o],t,i,!0)}}class Ac{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,ge("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=performance.now();e=(t-this.oldTime)/1000,this.oldTime=t,this.elapsedTime+=e}return e}}class vd{static{this.prototype.isMatrix2=!0}constructor(e,t,i,n){if(this.elements=[1,0,0,1],e!==void 0)this.set(e,t,i,n)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,n){let r=this.elements;return r[0]=e,r[2]=t,r[1]=i,r[3]=n,this}}function Kh(e,t,i,n){let r=P_(n);switch(i){case _l:return e*t;case Is:return e*t/r.components*r.byteLength;case Hr:return e*t/r.components*r.byteLength;case tn:return e*t*2/r.components*r.byteLength;case Ls:return e*t*2/r.components*r.byteLength;case yl:return e*t*3/r.components*r.byteLength;case xi:return e*t*4/r.components*r.byteLength;case Ds:return e*t*4/r.components*r.byteLength;case Ns:case Us:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Fs:case Bs:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case qo:case Zo:return Math.max(e,16)*Math.max(t,8)/4;case Xo:case Yo:return Math.max(e,8)*Math.max(t,8)/2;case Jo:case Ko:case Qo:case jo:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case $o:case kr:case ea:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case ta:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case ia:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case na:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case ra:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case sa:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case oa:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case aa:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case la:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case ca:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case ha:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case ua:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case fa:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case da:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case pa:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case ma:case ga:case xa:return Math.ceil(e/4)*Math.ceil(t/4)*16;case _a:case ya:return Math.ceil(e/4)*Math.ceil(t/4)*8;case Vr:case va:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw Error(`Unable to determine texture byte length for ${i} format.`)}function P_(e){switch(e){case ei:case pl:return{byteLength:1,components:1};case Jn:case ml:case Wt:return{byteLength:2,components:1};case Cs:case Ps:return{byteLength:2,components:4};case li:case Rs:case ti:return{byteLength:4,components:1};case gl:case xl:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}if(typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Do}}));if(typeof window<"u")if(window.__THREE__)ge("WARNING: Multiple instances of Three.js being imported.");else window.__THREE__=Do;function Rc(){let e=null,t=!1,i=null,n=null;function r(s,o){n=e.requestAnimationFrame(r),i(s,o)}return{start:function(){if(t===!0)return;if(i===null)return;if(e===null)return;n=e.requestAnimationFrame(r),t=!0},stop:function(){if(e!==null)e.cancelAnimationFrame(n);t=!1},setAnimationLoop:function(s){i=s},setContext:function(s){e=s}}}function Md(e){let t=new WeakMap;function i(a,l){let{array:c,usage:h}=a,f=c.byteLength,u=e.createBuffer();e.bindBuffer(l,u),e.bufferData(l,c,h),a.onUploadCallback();let p;if(c instanceof Float32Array)p=e.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=e.HALF_FLOAT;else if(c instanceof Uint16Array)if(a.isFloat16BufferAttribute)p=e.HALF_FLOAT;else p=e.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=e.SHORT;else if(c instanceof Uint32Array)p=e.UNSIGNED_INT;else if(c instanceof Int32Array)p=e.INT;else if(c instanceof Int8Array)p=e.BYTE;else if(c instanceof Uint8Array)p=e.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=e.UNSIGNED_BYTE;else throw Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function n(a,l,c){let{array:h,updateRanges:f}=l;if(e.bindBuffer(c,a),f.length===0)e.bufferSubData(c,0,h);else{f.sort((p,g)=>p.start-g.start);let u=0;for(let p=1;p<f.length;p++){let g=f[u],_=f[p];if(_.start<=g.start+g.count+1)g.count=Math.max(g.count,_.start+_.count-g.start);else++u,f[u]=_}f.length=u+1;for(let p=0,g=f.length;p<g;p++){let _=f[p];e.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){if(a.isInterleavedBufferAttribute)a=a.data;return t.get(a)}function s(a){if(a.isInterleavedBufferAttribute)a=a.data;let l=t.get(a);if(l)e.deleteBuffer(l.buffer),t.delete(a)}function o(a,l){if(a.isInterleavedBufferAttribute)a=a.data;if(a.isGLBufferAttribute){let h=t.get(a);if(!h||h.version<a.version)t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,i(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var Sd=`
#ifdef USE_ALPHAHASH

	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;

#endif
`;var bd=`
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
`;var Ed=`
#ifdef USE_ALPHAMAP

	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;

#endif
`;var Td=`
#ifdef USE_ALPHAMAP

	uniform sampler2D alphaMap;

#endif
`;var wd=`
#ifdef USE_ALPHATEST

	#ifdef ALPHA_TO_COVERAGE

	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;

	#else

	if ( diffuseColor.a < alphaTest ) discard;

	#endif

#endif
`;var Ad=`
#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif
`;var Rd=`
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
`;var Cd=`
#ifdef USE_AOMAP

	uniform sampler2D aoMap;
	uniform float aoMapIntensity;

#endif
`;var Pd=`
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
`;var Id=`
#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif
`;var Ld=`
vec3 transformed = vec3( position );

#ifdef USE_ALPHAHASH

	vPosition = vec3( position );

#endif
`;var Dd=`
vec3 objectNormal = vec3( normal );

#ifdef USE_TANGENT

	vec3 objectTangent = vec3( tangent.xyz );

#endif
`;var Nd=`

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

`;var Ud=`

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

`;var Fd=`
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
`;var Bd=`
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
`;var Od=`
#if NUM_CLIPPING_PLANES > 0

	varying vec3 vClipPosition;

	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];

#endif
`;var zd=`
#if NUM_CLIPPING_PLANES > 0

	varying vec3 vClipPosition;

#endif
`;var Gd=`
#if NUM_CLIPPING_PLANES > 0

	vClipPosition = - mvPosition.xyz;

#endif
`;var Hd=`
#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )

	diffuseColor *= vColor;

#endif
`;var kd=`
#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )

	varying vec4 vColor;

#endif
`;var Vd=`
#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )

	varying vec4 vColor;

#endif
`;var Wd=`
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
`;var Xd=`
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
`;var qd=`

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
`;var Yd=`
#ifdef USE_DISPLACEMENTMAP

	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;

#endif
`;var Zd=`
#ifdef USE_DISPLACEMENTMAP

	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );

#endif
`;var Jd=`
#ifdef USE_EMISSIVEMAP

	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );

	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE

		// use inline sRGB decode until browsers properly support SRGB8_ALPHA8 with video textures (#26516)

		emissiveColor = sRGBTransferEOTF( emissiveColor );

	#endif

	totalEmissiveRadiance *= emissiveColor.rgb;

#endif
`;var Kd=`
#ifdef USE_EMISSIVEMAP

	uniform sampler2D emissiveMap;

#endif
`;var $d=`
gl_FragColor = linearToOutputTexel( gl_FragColor );
`;var Qd=`

vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}

vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}

vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}

`;var jd=`
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
`;var ep=`
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
`;var tp=`
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
`;var ip=`
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
`;var np=`
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
`;var rp=`
#ifdef USE_FOG

	vFogDepth = - mvPosition.z;

#endif
`;var sp=`
#ifdef USE_FOG

	varying float vFogDepth;

#endif
`;var op=`
#ifdef USE_FOG

	#ifdef FOG_EXP2

		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );

	#else

		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );

	#endif

	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );

#endif
`;var ap=`
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
`;var lp=`

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
`;var cp=`
#ifdef USE_LIGHTMAP

	uniform sampler2D lightMap;
	uniform float lightMapIntensity;

#endif
`;var hp=`
LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;
`;var up=`
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
`;var fp=`
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
`;var dp=`
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
`;var pp=`
ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;
`;var mp=`
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
`;var gp=`
BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;
`;var xp=`
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
`;var _p=`
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
`;var yp=`

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
`;var vp=`
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
`;var Mp=`
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
`;var Sp=`
#if defined( RE_IndirectDiffuse )

	#if defined( LAMBERT ) || defined( PHONG )

		irradiance += iblIrradiance;

	#endif

	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );

#endif

#if defined( RE_IndirectSpecular )

	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );

#endif
`;var bp=`
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
`;var Ep=`
#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )

	// Doing a strict comparison with == 1.0 can cause noise artifacts
	// on some platforms. See issue #17623.
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;

#endif
`;var Tp=`
#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )

	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;

#endif
`;var wp=`
#ifdef USE_LOGARITHMIC_DEPTH_BUFFER

	varying float vFragDepth;
	varying float vIsPerspective;

#endif
`;var Ap=`
#ifdef USE_LOGARITHMIC_DEPTH_BUFFER

	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );

#endif
`;var Rp=`
#ifdef USE_MAP

	vec4 sampledDiffuseColor = texture2D( map, vMapUv );

	#ifdef DECODE_VIDEO_TEXTURE

		// use inline sRGB decode until browsers properly support SRGB8_ALPHA8 with video textures (#26516)

		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );

	#endif

	diffuseColor *= sampledDiffuseColor;

#endif
`;var Cp=`
#ifdef USE_MAP

	uniform sampler2D map;

#endif
`;var Pp=`
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
`;var Ip=`
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
`;var Lp=`
float metalnessFactor = metalness;

#ifdef USE_METALNESSMAP

	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );

	// reads channel B, compatible with a combined OcclusionRoughnessMetallic (RGB) texture
	metalnessFactor *= texelMetalness.b;

#endif
`;var Dp=`
#ifdef USE_METALNESSMAP

	uniform sampler2D metalnessMap;

#endif
`;var Np=`
#ifdef USE_INSTANCING_MORPH

	float morphTargetInfluences[ MORPHTARGETS_COUNT ];

	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;

	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {

		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;

	}
#endif
`;var Up=`
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
`;var Fp=`
#ifdef USE_MORPHNORMALS

	// morphTargetBaseInfluence is set based on BufferGeometry.morphTargetsRelative value:
	// When morphTargetsRelative is false, this is set to 1 - sum(influences); this results in normal = sum((target - base) * influence)
	// When morphTargetsRelative is true, this is set to 1; as a result, all morph targets are simply added to the base after weighting
	objectNormal *= morphTargetBaseInfluence;

	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {

		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];

	}

#endif
`;var Bp=`
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
`;var Op=`
#ifdef USE_MORPHTARGETS

	// morphTargetBaseInfluence is set based on BufferGeometry.morphTargetsRelative value:
	// When morphTargetsRelative is false, this is set to 1 - sum(influences); this results in position = sum((target - base) * influence)
	// When morphTargetsRelative is true, this is set to 1; as a result, all morph targets are simply added to the base after weighting
	transformed *= morphTargetBaseInfluence;

	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {

		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];

	}

#endif
`;var zp=`
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

`;var Gp=`

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
`;var Hp=`
#ifndef FLAT_SHADED

	varying vec3 vNormal;

	#ifdef USE_TANGENT

		varying vec3 vTangent;
		varying vec3 vBitangent;

	#endif

#endif
`;var kp=`
#ifndef FLAT_SHADED

	varying vec3 vNormal;

	#ifdef USE_TANGENT

		varying vec3 vTangent;
		varying vec3 vBitangent;

	#endif

#endif
`;var Vp=`
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
`;var Wp=`
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
`;var Xp=`
#ifdef USE_CLEARCOAT

	vec3 clearcoatNormal = nonPerturbedNormal;

#endif
`;var qp=`
#ifdef USE_CLEARCOAT_NORMALMAP

	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;

	clearcoatNormal = normalize( tbn2 * clearcoatMapN );

#endif
`;var Yp=`

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
`;var Zp=`

#ifdef USE_IRIDESCENCEMAP

	uniform sampler2D iridescenceMap;

#endif

#ifdef USE_IRIDESCENCE_THICKNESSMAP

	uniform sampler2D iridescenceThicknessMap;

#endif
`;var Jp=`
#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif

#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif

gl_FragColor = vec4( outgoingLight, diffuseColor.a );
`;var Kp=`
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
`;var $p=`
#ifdef PREMULTIPLIED_ALPHA

	gl_FragColor.rgb *= gl_FragColor.a;

#endif
`;var Qp=`
vec4 mvPosition = vec4( transformed, 1.0 );

#ifdef USE_BATCHING

	mvPosition = batchingMatrix * mvPosition;

#endif

#ifdef USE_INSTANCING

	mvPosition = instanceMatrix * mvPosition;

#endif

mvPosition = modelViewMatrix * mvPosition;

gl_Position = projectionMatrix * mvPosition;
`;var jp=`
#ifdef DITHERING

	gl_FragColor.rgb = dithering( gl_FragColor.rgb );

#endif
`;var em=`
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
`;var tm=`
float roughnessFactor = roughness;

#ifdef USE_ROUGHNESSMAP

	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );

	// reads channel G, compatible with a combined OcclusionRoughnessMetallic (RGB) texture
	roughnessFactor *= texelRoughness.g;

#endif
`;var im=`
#ifdef USE_ROUGHNESSMAP

	uniform sampler2D roughnessMap;

#endif
`;var nm=`
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
`;var rm=`

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
`;var sm=`

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


`;var om=`
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
`;var am=`
#ifdef USE_SKINNING

	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );

#endif
`;var lm=`
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
`;var cm=`
#ifdef USE_SKINNING

	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );

	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;

	transformed = ( bindMatrixInverse * skinned ).xyz;

#endif
`;var hm=`
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
`;var um=`
float specularStrength;

#ifdef USE_SPECULARMAP

	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;

#else

	specularStrength = 1.0;

#endif
`;var fm=`
#ifdef USE_SPECULARMAP

	uniform sampler2D specularMap;

#endif
`;var dm=`
#if defined( TONE_MAPPING )

	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );

#endif
`;var pm=`
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
`;var mm=`
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
`;var gm=`
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
`;var xm=`
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
`;var _m=`
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
`;var ym=`
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
`;var vm=`
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
`;var Mm=`
varying vec2 vUv;
uniform mat3 uvTransform;

void main() {

	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;

	gl_Position = vec4( position.xy, 1.0, 1.0 );

}
`,Sm=`
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
`;var bm=`
varying vec3 vWorldDirection;

#include <common>

void main() {

	vWorldDirection = transformDirection( position, modelMatrix );

	#include <begin_vertex>
	#include <project_vertex>

	gl_Position.z = gl_Position.w; // set z to camera.far

}
`,Em=`

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
`;var Tm=`
varying vec3 vWorldDirection;

#include <common>

void main() {

	vWorldDirection = transformDirection( position, modelMatrix );

	#include <begin_vertex>
	#include <project_vertex>

	gl_Position.z = gl_Position.w; // set z to camera.far

}
`,wm=`
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
`;var Am=`
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
`,Rm=`
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
`;var Cm=`
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
`,Pm=`
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
`;var Im=`
varying vec3 vWorldDirection;

#include <common>

void main() {

	vWorldDirection = transformDirection( position, modelMatrix );

	#include <begin_vertex>
	#include <project_vertex>

}
`,Lm=`
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
`;var Dm=`
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
`,Nm=`
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
`;var Um=`
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
`,Fm=`
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
`;var Bm=`
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
`,Om=`
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
`;var zm=`
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
`,Gm=`
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
`;var Hm=`
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
`,km=`
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
`;var Vm=`
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
`,Wm=`
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
`;var Xm=`
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
`,qm=`
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
`;var Ym=`
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
`,Zm=`
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
`;var Jm=`
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
`,Km=`
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
`;var $m=`
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
`,Qm=`
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
`;var jm=`
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
`,e0=`
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
`;var ot={alphahash_fragment:Sd,alphahash_pars_fragment:bd,alphamap_fragment:Ed,alphamap_pars_fragment:Td,alphatest_fragment:wd,alphatest_pars_fragment:Ad,aomap_fragment:Rd,aomap_pars_fragment:Cd,batching_pars_vertex:Pd,batching_vertex:Id,begin_vertex:Ld,beginnormal_vertex:Dd,bsdfs:Nd,iridescence_fragment:Ud,bumpmap_pars_fragment:Fd,clipping_planes_fragment:Bd,clipping_planes_pars_fragment:Od,clipping_planes_pars_vertex:zd,clipping_planes_vertex:Gd,color_fragment:Hd,color_pars_fragment:kd,color_pars_vertex:Vd,color_vertex:Wd,common:Xd,defaultnormal_vertex:qd,displacementmap_pars_vertex:Yd,displacementmap_vertex:Zd,emissivemap_fragment:Jd,emissivemap_pars_fragment:Kd,colorspace_fragment:$d,colorspace_pars_fragment:Qd,envmap_fragment:jd,envmap_common_pars_fragment:ep,envmap_pars_fragment:tp,envmap_pars_vertex:ip,envmap_physical_pars_fragment:dp,envmap_vertex:np,fog_vertex:rp,fog_pars_vertex:sp,fog_fragment:op,fog_pars_fragment:ap,gradientmap_pars_fragment:lp,lightmap_pars_fragment:cp,lights_lambert_fragment:hp,lights_lambert_pars_fragment:up,lights_pars_begin:fp,lights_toon_fragment:pp,lights_toon_pars_fragment:mp,lights_phong_fragment:gp,lights_phong_pars_fragment:xp,lights_physical_fragment:_p,lights_physical_pars_fragment:yp,lights_fragment_begin:vp,lights_fragment_maps:Mp,lights_fragment_end:Sp,lightprobes_pars_fragment:bp,logdepthbuf_fragment:Ep,logdepthbuf_pars_fragment:Tp,logdepthbuf_pars_vertex:wp,logdepthbuf_vertex:Ap,map_fragment:Rp,map_pars_fragment:Cp,map_particle_fragment:Pp,map_particle_pars_fragment:Ip,metalnessmap_fragment:Lp,metalnessmap_pars_fragment:Dp,morphinstance_vertex:Np,morphcolor_vertex:Up,morphnormal_vertex:Fp,morphtarget_pars_vertex:Bp,morphtarget_vertex:Op,normal_fragment_begin:zp,normal_fragment_maps:Gp,normal_pars_fragment:Hp,normal_pars_vertex:kp,normal_vertex:Vp,normalmap_pars_fragment:Wp,clearcoat_normal_fragment_begin:Xp,clearcoat_normal_fragment_maps:qp,clearcoat_pars_fragment:Yp,iridescence_pars_fragment:Zp,opaque_fragment:Jp,packing:Kp,premultiplied_alpha_fragment:$p,project_vertex:Qp,dithering_fragment:jp,dithering_pars_fragment:em,roughnessmap_fragment:tm,roughnessmap_pars_fragment:im,shadowmap_pars_fragment:nm,shadowmap_pars_vertex:rm,shadowmap_vertex:sm,shadowmask_pars_fragment:om,skinbase_vertex:am,skinning_pars_vertex:lm,skinning_vertex:cm,skinnormal_vertex:hm,specularmap_fragment:um,specularmap_pars_fragment:fm,tonemapping_fragment:dm,tonemapping_pars_fragment:pm,transmission_fragment:mm,transmission_pars_fragment:gm,uv_pars_fragment:xm,uv_pars_vertex:_m,uv_vertex:ym,worldpos_vertex:vm,background_vert:Mm,background_frag:Sm,backgroundCube_vert:bm,backgroundCube_frag:Em,cube_vert:Tm,cube_frag:wm,depth_vert:Am,depth_frag:Rm,distance_vert:Cm,distance_frag:Pm,equirect_vert:Im,equirect_frag:Lm,linedashed_vert:Dm,linedashed_frag:Nm,meshbasic_vert:Um,meshbasic_frag:Fm,meshlambert_vert:Bm,meshlambert_frag:Om,meshmatcap_vert:zm,meshmatcap_frag:Gm,meshnormal_vert:Hm,meshnormal_frag:km,meshphong_vert:Vm,meshphong_frag:Wm,meshphysical_vert:Xm,meshphysical_frag:qm,meshtoon_vert:Ym,meshtoon_frag:Zm,points_vert:Jm,points_frag:Km,shadow_vert:$m,shadow_frag:Qm,sprite_vert:jm,sprite_frag:e0};var Re={common:{diffuse:{value:new ue(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Je}},envmap:{envMap:{value:null},envMapRotation:{value:new Je},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:0.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Je},normalScale:{value:new k(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:0.00025},fogNear:{value:1},fogFar:{value:2000},fogColor:{value:new ue(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new ue(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0},uvTransform:{value:new Je}},sprite:{diffuse:{value:new ue(16777215)},opacity:{value:1},center:{value:new k(0.5,0.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}}};var ln={basic:{uniforms:Bi([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.fog]),vertexShader:ot.meshbasic_vert,fragmentShader:ot.meshbasic_frag},lambert:{uniforms:Bi([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new ue(0)},envMapIntensity:{value:1}}]),vertexShader:ot.meshlambert_vert,fragmentShader:ot.meshlambert_frag},phong:{uniforms:Bi([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new ue(0)},specular:{value:new ue(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ot.meshphong_vert,fragmentShader:ot.meshphong_frag},standard:{uniforms:Bi([Re.common,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.roughnessmap,Re.metalnessmap,Re.fog,Re.lights,{emissive:{value:new ue(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ot.meshphysical_vert,fragmentShader:ot.meshphysical_frag},toon:{uniforms:Bi([Re.common,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.gradientmap,Re.fog,Re.lights,{emissive:{value:new ue(0)}}]),vertexShader:ot.meshtoon_vert,fragmentShader:ot.meshtoon_frag},matcap:{uniforms:Bi([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,{matcap:{value:null}}]),vertexShader:ot.meshmatcap_vert,fragmentShader:ot.meshmatcap_frag},points:{uniforms:Bi([Re.points,Re.fog]),vertexShader:ot.points_vert,fragmentShader:ot.points_frag},dashed:{uniforms:Bi([Re.common,Re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ot.linedashed_vert,fragmentShader:ot.linedashed_frag},depth:{uniforms:Bi([Re.common,Re.displacementmap]),vertexShader:ot.depth_vert,fragmentShader:ot.depth_frag},normal:{uniforms:Bi([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,{opacity:{value:1}}]),vertexShader:ot.meshnormal_vert,fragmentShader:ot.meshnormal_frag},sprite:{uniforms:Bi([Re.sprite,Re.fog]),vertexShader:ot.sprite_vert,fragmentShader:ot.sprite_frag},background:{uniforms:{uvTransform:{value:new Je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ot.background_vert,fragmentShader:ot.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Je}},vertexShader:ot.backgroundCube_vert,fragmentShader:ot.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ot.cube_vert,fragmentShader:ot.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ot.equirect_vert,fragmentShader:ot.equirect_frag},distance:{uniforms:Bi([Re.common,Re.displacementmap,{referencePosition:{value:new A},nearDistance:{value:1},farDistance:{value:1000}}]),vertexShader:ot.distance_vert,fragmentShader:ot.distance_frag},shadow:{uniforms:Bi([Re.lights,Re.fog,{color:{value:new ue(0)},opacity:{value:1}}]),vertexShader:ot.shadow_vert,fragmentShader:ot.shadow_frag}};ln.physical={uniforms:Bi([ln.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Je},clearcoatNormalScale:{value:new k(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Je},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Je},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Je},sheen:{value:0},sheenColor:{value:new ue(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Je},transmissionSamplerSize:{value:new k},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Je},attenuationDistance:{value:0},attenuationColor:{value:new ue(0)},specularColor:{value:new ue(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Je},anisotropyVector:{value:new k},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Je}}]),vertexShader:ot.meshphysical_vert,fragmentShader:ot.meshphysical_frag};var Cc={r:0,b:0,g:0},J_=new Xe,t0=new Je;t0.set(-1,0,0,0,1,0,0,0,1);function i0(e,t,i,n,r,s){let o=new ue(0),a=r===!0?0:1,l,c,h=null,f=0,u=null;function p(v){let y=v.isScene===!0?v.background:null;if(y&&y.isTexture){let S=v.backgroundBlurriness>0;y=t.get(y,S)}return y}function g(v){let y=!1,S=p(v);if(S===null)m(o,a);else if(S&&S.isColor)m(S,1),y=!0;let E=e.xr.getEnvironmentBlendMode();if(E==="additive")i.buffers.color.setClear(0,0,0,1,s);else if(E==="alpha-blend")i.buffers.color.setClear(0,0,0,0,s);if(e.autoClear||y)i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil)}function _(v,y){let S=p(y);if(S&&S.isCubeTexture){if(c===void 0)c=new ee(new Ut(1,1,1),new Xt({name:"BackgroundCubeMaterial",uniforms:nr(ln.backgroundCube.uniforms),vertexShader:ln.backgroundCube.vertexShader,fragmentShader:ln.backgroundCube.fragmentShader,side:Nt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(E,w,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c);if(c.material.uniforms.envMap.value=S,c.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(J_.makeRotationFromEuler(y.backgroundRotation)).transpose(),S.isRenderTargetTexture===!1)c.material.uniforms.backgroundRotation.value.premultiply(t0);if(c.material.toneMapped=tt.getTransfer(S.colorSpace)!==pt,h!==S||f!==S.version||u!==e.toneMapping)c.material.needsUpdate=!0,h=S,f=S.version,u=e.toneMapping;c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)}else if(S&&S.isTexture){if(l===void 0)l=new ee(new Ft(2,2),new Xt({name:"BackgroundMaterial",uniforms:nr(ln.background.uniforms),vertexShader:ln.background.vertexShader,fragmentShader:ln.background.fragmentShader,side:hn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l);if(l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=tt.getTransfer(S.colorSpace)!==pt,S.matrixAutoUpdate===!0)S.updateMatrix();if(l.material.uniforms.uvTransform.value.copy(S.matrix),h!==S||f!==S.version||u!==e.toneMapping)l.material.needsUpdate=!0,h=S,f=S.version,u=e.toneMapping;l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null)}}function m(v,y){v.getRGB(Cc,pc(e)),i.buffers.color.setClear(Cc.r,Cc.g,Cc.b,y,s)}function d(){if(c!==void 0)c.geometry.dispose(),c.material.dispose(),c=void 0;if(l!==void 0)l.geometry.dispose(),l.material.dispose(),l=void 0}return{getClearColor:function(){return o},setClearColor:function(v,y=1){o.set(v),a=y,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(v){a=v,m(o,a)},render:g,addToRenderList:_,dispose:d}}function n0(e,t){let i=e.getParameter(e.MAX_VERTEX_ATTRIBS),n={},r=u(null),s=r,o=!1;function a(I,O,te,P,q){let L=!1,N=f(I,P,te,O);if(s!==N)s=N,c(s.object);if(L=p(I,P,te,q),L)g(I,P,te,q);if(q!==null)t.update(q,e.ELEMENT_ARRAY_BUFFER);if(L||o){if(o=!1,S(I,O,te,P),q!==null)e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(q).buffer)}}function l(){return e.createVertexArray()}function c(I){return e.bindVertexArray(I)}function h(I){return e.deleteVertexArray(I)}function f(I,O,te,P){let q=P.wireframe===!0,L=n[O.id];if(L===void 0)L={},n[O.id]=L;let N=I.isInstancedMesh===!0?I.id:0,Q=L[N];if(Q===void 0)Q={},L[N]=Q;let z=Q[te.id];if(z===void 0)z={},Q[te.id]=z;let X=z[q];if(X===void 0)X=u(l()),z[q]=X;return X}function u(I){let O=[],te=[],P=[];for(let q=0;q<i;q++)O[q]=0,te[q]=0,P[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:te,attributeDivisors:P,object:I,attributes:{},index:null}}function p(I,O,te,P){let q=s.attributes,L=O.attributes,N=0,Q=te.getAttributes();for(let z in Q)if(Q[z].location>=0){let Z=q[z],de=L[z];if(de===void 0){if(z==="instanceMatrix"&&I.instanceMatrix)de=I.instanceMatrix;if(z==="instanceColor"&&I.instanceColor)de=I.instanceColor}if(Z===void 0)return!0;if(Z.attribute!==de)return!0;if(de&&Z.data!==de.data)return!0;N++}if(s.attributesNum!==N)return!0;if(s.index!==P)return!0;return!1}function g(I,O,te,P){let q={},L=O.attributes,N=0,Q=te.getAttributes();for(let z in Q)if(Q[z].location>=0){let Z=L[z];if(Z===void 0){if(z==="instanceMatrix"&&I.instanceMatrix)Z=I.instanceMatrix;if(z==="instanceColor"&&I.instanceColor)Z=I.instanceColor}let de={};if(de.attribute=Z,Z&&Z.data)de.data=Z.data;q[z]=de,N++}s.attributes=q,s.attributesNum=N,s.index=P}function _(){let I=s.newAttributes;for(let O=0,te=I.length;O<te;O++)I[O]=0}function m(I){d(I,0)}function d(I,O){let te=s.newAttributes,P=s.enabledAttributes,q=s.attributeDivisors;if(te[I]=1,P[I]===0)e.enableVertexAttribArray(I),P[I]=1;if(q[I]!==O)e.vertexAttribDivisor(I,O),q[I]=O}function v(){let I=s.newAttributes,O=s.enabledAttributes;for(let te=0,P=O.length;te<P;te++)if(O[te]!==I[te])e.disableVertexAttribArray(te),O[te]=0}function y(I,O,te,P,q,L,N){if(N===!0)e.vertexAttribIPointer(I,O,te,q,L);else e.vertexAttribPointer(I,O,te,P,q,L)}function S(I,O,te,P){_();let q=P.attributes,L=te.getAttributes(),N=O.defaultAttributeValues;for(let Q in L){let z=L[Q];if(z.location>=0){let X=q[Q];if(X===void 0){if(Q==="instanceMatrix"&&I.instanceMatrix)X=I.instanceMatrix;if(Q==="instanceColor"&&I.instanceColor)X=I.instanceColor}if(X!==void 0){let Z=X.normalized,de=X.itemSize,V=t.get(X);if(V===void 0)continue;let{buffer:j,type:ve,bytesPerElement:Me}=V,Oe=ve===e.INT||ve===e.UNSIGNED_INT||X.gpuType===Rs;if(X.isInterleavedBufferAttribute){let Te=X.data,ut=Te.isInterleavedBuffer===!0?Te.stride:Te.itemSize,De=X.offset;if(Te.isInstancedInterleavedBuffer||Te.isInstancedBufferAttribute){for(let Ne=0;Ne<z.locationSize;Ne++)d(z.location+Ne,Te.meshPerAttribute);if(I.isInstancedMesh!==!0&&P._maxInstanceCount===void 0)P._maxInstanceCount=Te.meshPerAttribute*Te.count}else for(let Ne=0;Ne<z.locationSize;Ne++)m(z.location+Ne);e.bindBuffer(e.ARRAY_BUFFER,j);for(let Ne=0;Ne<z.locationSize;Ne++)y(z.location+Ne,de/z.locationSize,ve,Z,ut*Me,(De+de/z.locationSize*Ne)*Me,Oe)}else{if(X.isInstancedBufferAttribute){for(let Te=0;Te<z.locationSize;Te++)d(z.location+Te,X.meshPerAttribute);if(I.isInstancedMesh!==!0&&P._maxInstanceCount===void 0)P._maxInstanceCount=X.meshPerAttribute*X.count}else for(let Te=0;Te<z.locationSize;Te++)m(z.location+Te);e.bindBuffer(e.ARRAY_BUFFER,j);for(let Te=0;Te<z.locationSize;Te++)y(z.location+Te,de/z.locationSize,ve,Z,de*Me,de/z.locationSize*Te*Me,Oe)}}else if(N!==void 0){let Z=N[Q];if(Z!==void 0)switch(Z.length){case 2:e.vertexAttrib2fv(z.location,Z);break;case 3:e.vertexAttrib3fv(z.location,Z);break;case 4:e.vertexAttrib4fv(z.location,Z);break;default:e.vertexAttrib1fv(z.location,Z)}}}}v()}function E(){R();for(let I in n){let O=n[I];for(let te in O){let P=O[te];for(let q in P){let L=P[q];for(let N in L)h(L[N].object),delete L[N];delete P[q]}}delete n[I]}}function w(I){if(n[I.id]===void 0)return;let O=n[I.id];for(let te in O){let P=O[te];for(let q in P){let L=P[q];for(let N in L)h(L[N].object),delete L[N];delete P[q]}}delete n[I.id]}function x(I){for(let O in n){let te=n[O];for(let P in te){let q=te[P];if(q[I.id]===void 0)continue;let L=q[I.id];for(let N in L)h(L[N].object),delete L[N];delete q[I.id]}}}function M(I){for(let O in n){let te=n[O],P=I.isInstancedMesh===!0?I.id:0,q=te[P];if(q===void 0)continue;for(let L in q){let N=q[L];for(let Q in N)h(N[Q].object),delete N[Q];delete q[L]}if(delete te[P],Object.keys(te).length===0)delete n[O]}}function R(){if(U(),o=!0,s===r)return;s=r,c(s.object)}function U(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:R,resetDefaultState:U,dispose:E,releaseStatesOfGeometry:w,releaseStatesOfObject:M,releaseStatesOfProgram:x,initAttributes:_,enableAttribute:m,disableUnusedAttributes:v}}function r0(e,t,i){let n;function r(l){n=l}function s(l,c){e.drawArrays(n,l,c),i.update(c,n,1)}function o(l,c,h){if(h===0)return;e.drawArraysInstanced(n,l,c,h),i.update(c,n,h)}function a(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let p=0;p<h;p++)u+=c[p];i.update(u,n,1)}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a}function s0(e,t,i,n){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){let x=t.get("EXT_texture_filter_anisotropic");r=e.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(x){if(x!==xi&&n.convert(x)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))return!1;return!0}function a(x){let M=x===Wt&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));if(x!==ei&&x!==ti&&!M&&n.convert(x)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))return!1;return!0}function l(x){if(x==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";x="mediump"}if(x==="mediump"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0)return"mediump"}return"lowp"}let c=i.precision!==void 0?i.precision:"highp",h=l(c);if(h!==c)ge("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h;let f=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),u=i.logarithmicDepthBuffer===!0&&f===!1;if(i.reversedDepthBuffer===!0&&f===!1)ge("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");if(i.logarithmicDepthBuffer===!0&&f===!0)ge("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),g=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=e.getParameter(e.MAX_TEXTURE_SIZE),m=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),d=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),S=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),E=e.getParameter(e.MAX_SAMPLES),w=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:S,maxSamples:E,samples:w}}function o0(e){let t=this,i=null,n=0,r=!1,s=!1,o=new sn,a=new Je,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){let p=f.length!==0||u||n!==0||r;return r=u,n=f.length,p},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,u){i=h(f,u,0)},this.setState=function(f,u,p){let{clippingPlanes:g,clipIntersection:_,clipShadows:m}=f,d=e.get(f);if(!r||g===null||g.length===0||s&&!m)if(s)h(null);else c();else{let v=s?0:n,y=v*4,S=d.clippingState||null;l.value=S,S=h(g,u,y,p);for(let E=0;E!==y;++E)S[E]=i[E];d.clippingState=S,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function c(){if(l.value!==i)l.value=i,l.needsUpdate=n>0;t.numPlanes=n,t.numIntersection=0}function h(f,u,p,g){let _=f!==null?f.length:0,m=null;if(_!==0){if(m=l.value,g!==!0||m===null){let d=p+_*4,v=u.matrixWorldInverse;if(a.getNormalMatrix(v),m===null||m.length<d)m=new Float32Array(d);for(let y=0,S=p;y!==_;++y,S+=4)o.copy(f[y]).applyMatrix4(v,a),o.normal.toArray(m,S),m[S+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}class Rr extends Gt{constructor(e=1,t={}){super(e,e,t);this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},n=[i,i,i,i,i,i];this.texture=new vr(n),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},n=new Ut(5,5,5),r=new Xt({name:"CubemapFromEquirect",uniforms:nr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Nt,blending:un});r.uniforms.tEquirect.value=t;let s=new ee(n,r),o=t.minFilter;if(t.minFilter===Gi)t.minFilter=Vt;return new ds(1,10,this).update(e,s),t.minFilter=o,s.geometry.dispose(),s.material.dispose(),this}clear(e,t=!0,i=!0,n=!0){let r=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,i,n);e.setRenderTarget(r)}}var a0=256,K_=3,$_=20,u0=256,f0=16,Q_=3,j_=new A,ey=new ue;class Cr{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new ds(1,10,null),this._boxMesh=new ee(new Ut(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,i=0.1,n=100,r={}){let{size:s=256,position:o=j_}=r,a=this._renderer;this._setSize(s);let l=this._allocateTarget(),c=this._getSourceTarget(!0);if(t>0)c.texture.mipmapsAutoUpdate=!1;let{autoClear:h,autoClearColor:f,autoClearDepth:u,autoClearStencil:p}=a,g=e.background;if(a.autoClear=!0,a.autoClearColor=!0,a.autoClearDepth=!0,a.autoClearStencil=!0,g===null)e.background=a.getClearColor(ey);let _=new ds(i,n,c);if(_.position.copy(o),_.update(a,e),a.autoClear=h,a.autoClearColor=f,a.autoClearDepth=u,a.autoClearStencil=p,e.background=g,t>0)c.texture.mipmapsAutoUpdate=!0,this._blur(l,t);return this._applyPMREM(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){if(this._cubemapMaterial===null)this._cubemapMaterial=h0(),this._compileMaterial(this._cubemapMaterial)}compileEquirectangularShader(){if(this._equirectMaterial===null)this._equirectMaterial=c0(),this._compileMaterial(this._equirectMaterial)}dispose(){if(this._sourceTarget!==null)this._sourceTarget.dispose();if(this._cubemapMaterial!==null)this._cubemapMaterial.dispose();if(this._equirectMaterial!==null)this._equirectMaterial.dispose();if(this._blurMaterial!==null)this._blurMaterial.dispose();if(this._ggxMaterial!==null)this._ggxMaterial.dispose();if(this._integrationMaterial!==null)this._integrationMaterial.dispose();this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(a0,xf(e))}_fromTexture(e,t){if(e.mapping===fn||e.mapping===Yn)this._setSize(e.image.length===0?a0:e.image[0].width||e.image[0].image.width);else this._setSize(e.image.width/4);let i=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(i),i}_allocateTarget(){let e=this._cubeSize,t=l0(e,!1,!1),i=Math.log2(e)-K_;for(let n=0;n<=i;n++)t.texture.mipmaps.push({width:e>>n,height:e>>n});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,i=this._sourceTarget;if(i===null||i.width!==t||e&&i.depthBuffer===!1){if(i!==null)i.dispose();this._sourceTarget=l0(t,!0,e)}return this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,i){let n=this._boxMesh,r=this._cubeCamera;n.material=i,r.renderTarget=e,r.activeMipmapLevel=t;let s=e.width>>t;e.viewport.set(0,0,s,s),r.update(this._renderer,n),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;if(e.mapping===fn||e.mapping===Yn){if(this._cubemapMaterial===null)this._cubemapMaterial=h0();t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1}else{if(this._equirectMaterial===null)this._equirectMaterial=c0();t=this._equirectMaterial}t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){if(this._ggxMaterial===null)this._ggxMaterial=ty(),this._integrationMaterial=iy();let t=this._cubeSize,i=e.texture.mipmaps.length-1,n=this._ggxMaterial.uniforms;n.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/f0);for(let s=0;s<=i;s++){let o=Cr.lodToRoughness(s,i);if(s>i-Q_)r.roughness.value=o,this._renderCube(e,s,this._integrationMaterial);else{let a=o>0?Math.log2(t)+0.5*Math.log2(6/(u0*Math.pow(o,4)))+0.5:0;n.roughness.value=o,n.lodBias.value=a,this._renderCube(e,s,this._ggxMaterial)}}}_blur(e,t){if(this._blurMaterial===null)this._blurMaterial=ny();let i=this._blurMaterial,n=i.uniforms,r=this._sourceTarget;n.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,n.envMap.value=r.texture,this._renderCube(e,0,i),n.envMap.value=e.texture,this._renderCube(r,0,i)}}function l0(e,t,i){return new Rr(e,{minFilter:Gi,generateMipmaps:t,type:Wt,colorSpace:Xr,depthBuffer:i})}function ja(e,t,i){return new Xt({name:e,uniforms:t,vertexShader:ot.cube_vert,fragmentShader:i,side:Nt,blending:un,depthTest:!1,depthWrite:!1})}function ty(){return ja("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${u0}u

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
	`)}function iy(){return ja("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:f0}},`

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
	`)}function ny(){return ja("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${$_}
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
	`)}function c0(){return ja("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function h0(){return ja("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function d0(e){let t=new WeakMap,i=new WeakMap,n=null;function r(u,p=!1){if(u===null||u===void 0)return null;if(p)return o(u);return s(u)}function s(u){if(u&&u.isTexture){let p=u.mapping;if(p===ko||p===Vo)if(t.has(u)){let g=t.get(u).texture;return a(g,u.mapping)}else{let g=u.image;if(g&&g.height>0){let _=new Rr(g.height);return _.fromEquirectangularTexture(e,u),t.set(u,_),u.addEventListener("dispose",c),a(_.texture,u.mapping)}else return null}}return u}function o(u){if(u&&u.isTexture&&u.isPMREMTexture!==!0){let p=u.mapping,g=p===ko||p===Vo,_=p===fn||p===Yn;if(g||_){let m=i.get(u),d=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==d){if(n===null)n=new Cr(e);return m=g?n.fromEquirectangular(u,m):n.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,i.set(u,m),m.texture}else if(m!==void 0)return m.texture;else{let v=u.image;if(g&&v&&v.height>0||_&&v&&l(v)){if(n===null)n=new Cr(e);return m=g?n.fromEquirectangular(u):n.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,i.set(u,m),u.addEventListener("dispose",h),m.texture}else return null}}}return u}function a(u,p){if(p===ko)u.mapping=fn;else if(p===Vo)u.mapping=Yn;return u}function l(u){let p=0,g=6;for(let _=0;_<g;_++)if(u[_]!==void 0)p++;return p===g}function c(u){let p=u.target;p.removeEventListener("dispose",c);let g=t.get(p);if(g!==void 0)t.delete(p),g.dispose()}function h(u){let p=u.target;p.removeEventListener("dispose",h);let g=i.get(p);if(g!==void 0)i.delete(p),g.dispose()}function f(){if(t=new WeakMap,i=new WeakMap,n!==null)n.dispose(),n=null}return{get:r,dispose:f}}function p0(e){let t={};function i(n){if(t[n]!==void 0)return t[n];let r=e.getExtension(n);return t[n]=r,r}return{has:function(n){return i(n)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(n){let r=i(n);if(r===null)pn("WebGLRenderer: "+n+" extension not supported.");return r}}}function m0(e,t,i,n){let r={},s=new WeakMap,o=new FinalizationRegistry((g)=>delete r[g]);function a(g){l(g.target)}function l(g){if(g.index!==null)t.remove(g.index);for(let m in g.attributes)t.remove(g.attributes[m]);g.removeEventListener("dispose",a),delete r[g.id],o.unregister(g);let _=s.get(g);if(_)t.remove(_),s.delete(g);if(n.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0)delete g._maxInstanceCount;i.memory.geometries--}function c(g,_){if(r[_.id]!==void 0)return _;return _.addEventListener("dispose",a),r[_.id]=new WeakRef(_),o.register(_,_.id,_),i.memory.geometries++,_}function h(g){let _=g.attributes;for(let m in _)t.update(_[m],e.ARRAY_BUFFER)}function f(g){let _=g.index,m=g.attributes.position,d=0;if(m===void 0)return;let v=_!==null?_.array.length:m.array.length/3-1,S=new(m.count>=65535?wa:Ta)(Math.ceil(v/3)*6,1),E=S.array;if(_!==null){let x=_.array;d=_.version;for(let M=0,R=0;M<v;M+=3){let U=x[M+0],I=x[M+1],O=x[M+2];E[R++]=U,E[R++]=I,E[R++]=I,E[R++]=O,E[R++]=O,E[R++]=U}}else{d=m.version;for(let x=0,M=0;x<v;x+=3){let R=x+0,U=x+1,I=x+2;E[M++]=R,E[M++]=U,E[M++]=U,E[M++]=I,E[M++]=I,E[M++]=R}}S.version=d;let w=s.get(g);if(w)t.remove(w);s.set(g,S)}function u(g){let _=s.get(g);if(_){let m=g.index;if(m!==null){if(_.version<m.version)f(g)}}else f(g);return s.get(g)}function p(){for(let g in r){let _=r[g].deref();if(_!==void 0)l(_)}}return{get:c,update:h,getWireframeAttribute:u,dispose:p}}function g0(e,t,i){let n;function r(f){n=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function l(f,u){e.drawElements(n,u,s,f*o),i.update(u,n,1)}function c(f,u,p){if(p===0)return;e.drawElementsInstanced(n,u,s,f*o,p),i.update(u,n,p)}function h(f,u,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,s,f,0,p);let _=0;for(let m=0;m<p;m++)_+=u[m];i.update(_,n,1)}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function x0(e){let t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(i.calls++,o){case e.TRIANGLES:i.triangles+=a*(s/3);break;case e.LINES:i.lines+=a*(s/2);break;case e.LINE_STRIP:i.lines+=a*(s-1);break;case e.LINE_LOOP:i.lines+=a*s;break;case e.POINTS:i.points+=a*s;break;default:Fe("WebGLInfo: Unknown draw mode:",o);break}}function r(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:r,update:n}}function _0(e,t,i){let n=new WeakMap,r=new St;function s(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=h!==void 0?h.length:0,u=n.get(a);if(u===void 0||u.count!==f){let R=function(){x.dispose(),n.delete(a),a.removeEventListener("dispose",R)};if(u!==void 0)u.texture.dispose();let p=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],d=a.morphAttributes.normal||[],v=a.morphAttributes.color||[],y=0;if(p===!0)y=1;if(g===!0)y=2;if(_===!0)y=3;let S=a.attributes.position.count*y,E=1;if(S>t.maxTextureSize)E=Math.ceil(S/t.maxTextureSize),S=t.maxTextureSize;let w=new Float32Array(S*E*4*f),x=new Kr(w,S,E,f);x.type=ti,x.needsUpdate=!0;let M=y*4;for(let U=0;U<f;U++){let I=m[U],O=d[U],te=v[U],P=S*E*4*U;for(let q=0;q<I.count;q++){let L=q*M;if(p===!0)r.fromBufferAttribute(I,q),w[P+L+0]=r.x,w[P+L+1]=r.y,w[P+L+2]=r.z,w[P+L+3]=0;if(g===!0)r.fromBufferAttribute(O,q),w[P+L+4]=r.x,w[P+L+5]=r.y,w[P+L+6]=r.z,w[P+L+7]=0;if(_===!0)r.fromBufferAttribute(te,q),w[P+L+8]=r.x,w[P+L+9]=r.y,w[P+L+10]=r.z,w[P+L+11]=te.itemSize===4?r.w:1}}u={count:f,texture:x,size:new k(S,E)},n.set(a,u),a.addEventListener("dispose",R)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(e,"morphTexture",o.morphTexture,i);else{let p=0;for(let _=0;_<c.length;_++)p+=c[_];let g=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(e,"morphTargetBaseInfluence",g),l.getUniforms().setValue(e,"morphTargetInfluences",c)}l.getUniforms().setValue(e,"morphTargetsTexture",u.texture,i),l.getUniforms().setValue(e,"morphTargetsTextureSize",u.size)}return{update:s}}function y0(e,t,i,n,r){let s=new WeakMap;function o(c){let h=r.render.frame,f=c.geometry,u=t.get(c,f);if(s.get(u)!==h)t.update(u),s.set(u,h);if(c.isInstancedMesh){if(c.hasEventListener("dispose",l)===!1)c.addEventListener("dispose",l);if(s.get(c)!==h){if(i.update(c.instanceMatrix,e.ARRAY_BUFFER),c.instanceColor!==null)i.update(c.instanceColor,e.ARRAY_BUFFER);s.set(c,h)}}if(c.isSkinnedMesh){let p=c.skeleton;if(s.get(p)!==h)p.update(),s.set(p,h)}return u}function a(){s=new WeakMap}function l(c){let h=c.target;if(h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),i.remove(h.instanceMatrix),h.instanceColor!==null)i.remove(h.instanceColor)}return{update:o,dispose:a}}var ry={[vs]:"LINEAR_TONE_MAPPING",[Ms]:"REINHARD_TONE_MAPPING",[Ss]:"CINEON_TONE_MAPPING",[ur]:"ACES_FILMIC_TONE_MAPPING",[Es]:"AGX_TONE_MAPPING",[Ts]:"NEUTRAL_TONE_MAPPING",[bs]:"CUSTOM_TONE_MAPPING"};function v0(e,t,i,n,r,s){let o=new Gt(t,i,{type:e,depthBuffer:r,stencilBuffer:s,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=null,h=new Be;h.setAttribute("position",new _e([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new _e([0,2,0,0,2,0],2));let f=new cs({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new ee(h,f),p=new Ar(-1,1,1,-1,0,1),g=null,_=null,m=!1,d,v=null,y=[],S=!1;this.setSize=function(E,w){if(o.setSize(E,w),a!==null)a.setSize(E,w);if(l!==null)l.setSize(E,w);for(let x=0;x<y.length;x++){let M=y[x];if(M.setSize)M.setSize(E,w)}},this.setEffects=function(E){y=E,S=y.length>0&&y[0].isRenderPass===!0;let{width:w,height:x}=o;if(y.length>0&&a===null)a=new Gt(w,x,{type:Wt,depthBuffer:!1,stencilBuffer:!1}),l=new Gt(w,x,{type:Wt,depthBuffer:!1,stencilBuffer:!1});let M=r===!0&&y.some((R)=>R.needsDepthTexture===!0);if(M!==(o.depthTexture!==null)){if(M===!0&&c===null){if(c=new on(w,x),s===!0)c.format=en,c.type=Tn}o.dispose(),o.depthTexture=M?c:null,o.resolveDepthBuffer=M,o.storeMultisampledDepthBuffer=M}for(let R=0;R<y.length;R++){let U=y[R];if(U.setSize)U.setSize(w,x);if(M&&U.needsDepthTexture===!0&&U.setDepthTexture)U.setDepthTexture(c)}},this.begin=function(E,w){if(m)return!1;if(E.toneMapping===ji&&y.length===0)return!1;if(v=w,w!==null){let{width:x,height:M}=w;if(o.width!==x||o.height!==M)this.setSize(x,M)}if(S===!1)E.setRenderTarget(o);return d=E.toneMapping,E.toneMapping=ji,!0},this.hasRenderPass=function(){return S},this.end=function(E,w){E.toneMapping=d,m=!0;let x=o,M=a;for(let R=0;R<y.length;R++){let U=y[R];if(U.enabled===!1)continue;if(U.render(E,M,x,w),U.needsSwap!==!1)x=M,M=M===a?l:a}if(g!==E.outputColorSpace||_!==E.toneMapping){if(g=E.outputColorSpace,_=E.toneMapping,f.defines={},tt.getTransfer(g)===pt)f.defines.SRGB_TRANSFER="";let R=ry[_];if(R)f.defines[R]="";f.needsUpdate=!0}f.uniforms.tDiffuse.value=x.texture,E.setRenderTarget(v),E.render(u,p),v=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){if(o.dispose(),a!==null)a.dispose();if(l!==null)l.dispose();h.dispose(),f.dispose()}}var A0=new Mt,R0=new on(1,1),C0=new oo(1),P0=new Kr,I0=new ks,L0=new vr,M0=[],S0=[],b0=new Float32Array(16),E0=new Float32Array(9),T0=new Float32Array(4);function Eo(e,t,i){let n=e[0];if(n<=0||n>0)return e;let r=t*i,s=M0[r];if(s===void 0)s=new Float32Array(r),M0[r]=s;if(t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=i,e[o].toArray(s,a)}return s}function fi(e,t){if(e.length!==t.length)return!1;for(let i=0,n=e.length;i<n;i++)if(e[i]!==t[i])return!1;return!0}function di(e,t){for(let i=0,n=t.length;i<n;i++)e[i]=t[i]}function Pc(e,t){let i=S0[t];if(i===void 0)i=new Int32Array(t),S0[t]=i;for(let n=0;n!==t;++n)i[n]=e.allocateTextureUnit();return i}function sy(e,t){let i=this.cache;if(i[0]===t)return;e.uniform1f(this.addr,t),i[0]=t}function oy(e,t){let i=this.cache;if(t.x!==void 0){if(i[0]!==t.x||i[1]!==t.y)e.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y}else{if(fi(i,t))return;e.uniform2fv(this.addr,t),di(i,t)}}function ay(e,t){let i=this.cache;if(t.x!==void 0){if(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)e.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z}else if(t.r!==void 0){if(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)e.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b}else{if(fi(i,t))return;e.uniform3fv(this.addr,t),di(i,t)}}function ly(e,t){let i=this.cache;if(t.x!==void 0){if(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)e.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w}else{if(fi(i,t))return;e.uniform4fv(this.addr,t),di(i,t)}}function cy(e,t){let i=this.cache,n=t.elements;if(n===void 0){if(fi(i,t))return;e.uniformMatrix2fv(this.addr,!1,t),di(i,t)}else{if(fi(i,n))return;T0.set(n),e.uniformMatrix2fv(this.addr,!1,T0),di(i,n)}}function hy(e,t){let i=this.cache,n=t.elements;if(n===void 0){if(fi(i,t))return;e.uniformMatrix3fv(this.addr,!1,t),di(i,t)}else{if(fi(i,n))return;E0.set(n),e.uniformMatrix3fv(this.addr,!1,E0),di(i,n)}}function uy(e,t){let i=this.cache,n=t.elements;if(n===void 0){if(fi(i,t))return;e.uniformMatrix4fv(this.addr,!1,t),di(i,t)}else{if(fi(i,n))return;b0.set(n),e.uniformMatrix4fv(this.addr,!1,b0),di(i,n)}}function fy(e,t){let i=this.cache;if(i[0]===t)return;e.uniform1i(this.addr,t),i[0]=t}function dy(e,t){let i=this.cache;if(t.x!==void 0){if(i[0]!==t.x||i[1]!==t.y)e.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y}else{if(fi(i,t))return;e.uniform2iv(this.addr,t),di(i,t)}}function py(e,t){let i=this.cache;if(t.x!==void 0){if(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)e.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z}else{if(fi(i,t))return;e.uniform3iv(this.addr,t),di(i,t)}}function my(e,t){let i=this.cache;if(t.x!==void 0){if(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)e.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w}else{if(fi(i,t))return;e.uniform4iv(this.addr,t),di(i,t)}}function gy(e,t){let i=this.cache;if(i[0]===t)return;e.uniform1ui(this.addr,t),i[0]=t}function xy(e,t){let i=this.cache;if(t.x!==void 0){if(i[0]!==t.x||i[1]!==t.y)e.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y}else{if(fi(i,t))return;e.uniform2uiv(this.addr,t),di(i,t)}}function _y(e,t){let i=this.cache;if(t.x!==void 0){if(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)e.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z}else{if(fi(i,t))return;e.uniform3uiv(this.addr,t),di(i,t)}}function yy(e,t){let i=this.cache;if(t.x!==void 0){if(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w}else{if(fi(i,t))return;e.uniform4uiv(this.addr,t),di(i,t)}}function Ic(e){if(e.version===0)e.compareFunction=Rl,e.needsUpdate=!0;return e}function vy(e,t,i){let n=this.cache,r=i.allocateTextureUnit();if(n[0]!==r)e.uniform1i(this.addr,r),n[0]=r;let s;if(this.type===e.SAMPLER_2D_SHADOW)s=Ic(R0);else s=A0;i.setTexture2D(t||s,r)}function My(e,t,i){let n=this.cache,r=i.allocateTextureUnit();if(n[0]!==r)e.uniform1i(this.addr,r),n[0]=r;i.setTexture3D(t||I0,r)}function Sy(e,t,i){let n=this.cache,r=i.allocateTextureUnit();if(n[0]!==r)e.uniform1i(this.addr,r),n[0]=r;let s;if(this.type===e.SAMPLER_CUBE_SHADOW)s=Ic(C0);else s=L0;i.setTextureCube(t||s,r)}function by(e,t,i){let n=this.cache,r=i.allocateTextureUnit();if(n[0]!==r)e.uniform1i(this.addr,r),n[0]=r;i.setTexture2DArray(t||P0,r)}function Ey(e){switch(e){case 5126:return sy;case 35664:return oy;case 35665:return ay;case 35666:return ly;case 35674:return cy;case 35675:return hy;case 35676:return uy;case 5124:case 35670:return fy;case 35667:case 35671:return dy;case 35668:case 35672:return py;case 35669:case 35673:return my;case 5125:return gy;case 36294:return xy;case 36295:return _y;case 36296:return yy;case 35678:case 36198:case 36298:case 36306:case 35682:return vy;case 35679:case 36299:case 36307:return My;case 35680:case 36300:case 36308:case 36293:return Sy;case 36289:case 36303:case 36311:case 36292:return by}}function Ty(e,t){e.uniform1fv(this.addr,t)}function wy(e,t){let i=Eo(t,this.size,2);e.uniform2fv(this.addr,i)}function Ay(e,t){let i=Eo(t,this.size,3);e.uniform3fv(this.addr,i)}function Ry(e,t){let i=Eo(t,this.size,4);e.uniform4fv(this.addr,i)}function Cy(e,t){let i=Eo(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,i)}function Py(e,t){let i=Eo(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,i)}function Iy(e,t){let i=Eo(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,i)}function Ly(e,t){e.uniform1iv(this.addr,t)}function Dy(e,t){e.uniform2iv(this.addr,t)}function Ny(e,t){e.uniform3iv(this.addr,t)}function Uy(e,t){e.uniform4iv(this.addr,t)}function Fy(e,t){e.uniform1uiv(this.addr,t)}function By(e,t){e.uniform2uiv(this.addr,t)}function Oy(e,t){e.uniform3uiv(this.addr,t)}function zy(e,t){e.uniform4uiv(this.addr,t)}function Gy(e,t,i){let n=this.cache,r=t.length,s=Pc(i,r);if(!fi(n,s))e.uniform1iv(this.addr,s),di(n,s);let o;if(this.type===e.SAMPLER_2D_SHADOW)o=Ic(R0);else o=A0;for(let a=0;a!==r;++a)i.setTexture2D(t[a]||o,s[a])}function Hy(e,t,i){let n=this.cache,r=t.length,s=Pc(i,r);if(!fi(n,s))e.uniform1iv(this.addr,s),di(n,s);for(let o=0;o!==r;++o)i.setTexture3D(t[o]||I0,s[o])}function ky(e,t,i){let n=this.cache,r=t.length,s=Pc(i,r);if(!fi(n,s))e.uniform1iv(this.addr,s),di(n,s);let o;if(this.type===e.SAMPLER_CUBE_SHADOW)o=Ic(C0);else o=L0;for(let a=0;a!==r;++a)i.setTextureCube(t[a]||o,s[a])}function Vy(e,t,i){let n=this.cache,r=t.length,s=Pc(i,r);if(!fi(n,s))e.uniform1iv(this.addr,s),di(n,s);for(let o=0;o!==r;++o)i.setTexture2DArray(t[o]||P0,s[o])}function Wy(e){switch(e){case 5126:return Ty;case 35664:return wy;case 35665:return Ay;case 35666:return Ry;case 35674:return Cy;case 35675:return Py;case 35676:return Iy;case 5124:case 35670:return Ly;case 35667:case 35671:return Dy;case 35668:case 35672:return Ny;case 35669:case 35673:return Uy;case 5125:return Fy;case 36294:return By;case 36295:return Oy;case 36296:return zy;case 35678:case 36198:case 36298:case 36306:case 35682:return Gy;case 35679:case 36299:case 36307:return Hy;case 35680:case 36300:case 36308:case 36293:return ky;case 36289:case 36303:case 36311:case 36292:return Vy}}class D0{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Ey(t.type)}}class N0{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Wy(t.type)}}class U0{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let n=this.seq;for(let r=0,s=n.length;r!==s;++r){let o=n[r];o.setValue(e,t[o.id],i)}}}var $h=/(\w+)(\])?(\[|\.)?/g;function w0(e,t){e.seq.push(t),e.map[t.id]=t}function Xy(e,t,i){let n=e.name,r=n.length;$h.lastIndex=0;while(!0){let s=$h.exec(n),o=$h.lastIndex,a=s[1],l=s[2]==="]",c=s[3];if(l)a=a|0;if(c===void 0||c==="["&&o+2===r){w0(i,c===void 0?new D0(a,e,t):new N0(a,e,t));break}else{let f=i.map[a];if(f===void 0)f=new U0(a),w0(i,f);i=f}}}class ps{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let o=e.getActiveUniform(t,s),a=e.getUniformLocation(t,o.name);Xy(o,a,this)}let n=[],r=[];for(let s of this.seq)if(s.type===e.SAMPLER_2D_SHADOW||s.type===e.SAMPLER_CUBE_SHADOW||s.type===e.SAMPLER_2D_ARRAY_SHADOW)n.push(s);else r.push(s);if(n.length>0)this.seq=n.concat(r)}setValue(e,t,i,n){let r=this.map[t];if(r!==void 0)r.setValue(e,i,n)}setOptional(e,t,i){let n=t[i];if(n!==void 0)this.setValue(e,i,n)}static upload(e,t,i,n){for(let r=0,s=t.length;r!==s;++r){let o=t[r],a=i[o.id];if(a.needsUpdate!==!1)o.setValue(e,a.value,n)}}static seqWithValue(e,t){let i=[];for(let n=0,r=e.length;n!==r;++n){let s=e[n];if(s.id in t)i.push(s)}return i}}function Qh(e,t,i){let n=e.createShader(t);return e.shaderSource(n,i),e.compileShader(n),n}var qy=37297,Yy=0;function Zy(e,t){let i=e.split(`
`),n=[],r=Math.max(t-6,0),s=Math.min(t+6,i.length);for(let o=r;o<s;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${i[o]}`)}return n.join(`
`)}var F0=new Je;function Jy(e){tt._getMatrix(F0,tt.workingColorSpace,e);let t=`mat3( ${F0.elements.map((i)=>i.toFixed(4))} )`;switch(tt.getTransfer(e)){case qr:return[t,"LinearTransferOETF"];case pt:return[t,"sRGBTransferOETF"];default:return ge("WebGLProgram: Unsupported color space: ",e),[t,"LinearTransferOETF"]}}function B0(e,t,i){let n=e.getShaderParameter(t,e.COMPILE_STATUS),s=(e.getShaderInfoLog(t)||"").trim();if(n&&s==="")return"";let o=/ERROR: 0:(\d+)/.exec(s);if(o){let a=parseInt(o[1]);return i.toUpperCase()+`

`+s+`

`+Zy(e.getShaderSource(t),a)}else return s}function Ky(e,t){let i=Jy(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${i[1]}( vec4( ${i[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var $y={[vs]:"Linear",[Ms]:"Reinhard",[Ss]:"Cineon",[ur]:"ACESFilmic",[Es]:"AgX",[Ts]:"Neutral",[bs]:"Custom"};function Qy(e,t){let i=$y[t];if(i===void 0)return ge("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+e+"( vec3 color ) { return LinearToneMapping( color ); }";return"vec3 "+e+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}var Lc=new A;function jy(){tt.getLuminanceCoefficients(Lc);let e=Lc.x.toFixed(4),t=Lc.y.toFixed(4),i=Lc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${t}, ${i} );`,"\treturn dot( weights, rgb );","}"].join(`
`)}function ev(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(el).join(`
`)}function tv(e){let t=[];for(let i in e){let n=e[i];if(n===!1)continue;t.push("#define "+i+" "+n)}return t.join(`
`)}function iv(e,t){let i={},n=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){let s=e.getActiveAttrib(t,r),o=s.name,a=1;if(s.type===e.FLOAT_MAT2)a=2;if(s.type===e.FLOAT_MAT3)a=3;if(s.type===e.FLOAT_MAT4)a=4;i[o]={type:s.type,location:e.getAttribLocation(t,o),locationSize:a}}return i}function el(e){return e!==""}function O0(e,t){let i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function z0(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var nv=/^[ \t]*#include +<([\w\d./]+)>/gm;function jh(e){return e.replace(nv,rv)}function rv(e,t){let i=ot[t];if(i===void 0)throw Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return jh(i)}var sv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function G0(e){return e.replace(sv,ov)}function ov(e,t,i,n){let r="";for(let s=parseInt(t);s<parseInt(i);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function H0(e){let t=`precision ${e.precision} float;
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
#define LOW_PRECISION`;return t}var av={[ys]:"SHADOWMAP_TYPE_PCF",[zr]:"SHADOWMAP_TYPE_VSM"};function lv(e){return av[e.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var cv={[Yn]:"ENVMAP_MODE_REFRACTION"};function hv(e){if(e.envMap===!1)return"ENVMAP_MODE_REFLECTION";return cv[e.envMapMode]||"ENVMAP_MODE_REFLECTION"}var uv={[Gr]:"ENVMAP_BLENDING_MULTIPLY",[ef]:"ENVMAP_BLENDING_MIX",[tf]:"ENVMAP_BLENDING_ADD"};function fv(e){if(e.envMap===!1)return"ENVMAP_BLENDING_NONE";return uv[e.combine]||"ENVMAP_BLENDING_NONE"}function k0(e,t,i,n){let r=e.getContext(),{defines:s,vertexShader:o,fragmentShader:a}=i,l=lv(i),c=i.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=hv(i),f=fv(i),u=ev(i),p=tv(s),g=r.createProgram(),_,m,d=i.glslVersion?"#version "+i.glslVersion+`
`:"";if(i.isRawShaderMaterial){if(_=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,p].filter(el).join(`
`),_.length>0)_+=`
`;if(m=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,p].filter(el).join(`
`),m.length>0)m+=`
`}else _=[H0(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,p,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+h:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+i.diffuseRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexNormals?"#define HAS_NORMAL":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+l:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","\tattribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","\tattribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","\tuniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","\tattribute vec2 uv1;","#endif","#ifdef USE_UV2","\tattribute vec2 uv2;","#endif","#ifdef USE_UV3","\tattribute vec2 uv3;","#endif","#ifdef USE_TANGENT","\tattribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","\tattribute vec4 color;","#elif defined( USE_COLOR )","\tattribute vec3 color;","#endif","#ifdef USE_SKINNING","\tattribute vec4 skinIndex;","\tattribute vec4 skinWeight;","#endif",`
`].filter(el).join(`
`),m=[H0(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,p,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+c:"",i.envMap?"#define "+h:"",i.envMap?"#define "+f:"",i.envMapPMREM?"#define ENVMAP_MAX_LOD "+i.envMapMaxLod+".0":"",i.envMapPMREM?"#define ENVMAP_SIZE "+i.envMapSize+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",i.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.retroreflection?"#define USE_RETROREFLECTION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+l:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==ji?"#define TONE_MAPPING":"",i.toneMapping!==ji?ot.tonemapping_pars_fragment:"",i.toneMapping!==ji?Qy("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",ot.colorspace_pars_fragment,Ky("linearToOutputTexel",i.outputColorSpace),jy(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(el).join(`
`);if(o=jh(o),o=O0(o,i),o=z0(o,i),a=jh(a),a=O0(a,i),a=z0(a,i),o=G0(o),a=G0(a),i.isRawShaderMaterial!==!0)d=`#version 300 es
`,_=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,m=["#define varying in",i.glslVersion===sh?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===sh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m;let v=d+_+o,y=d+m+a,S=Qh(r,r.VERTEX_SHADER,v),E=Qh(r,r.FRAGMENT_SHADER,y);if(r.attachShader(g,S),r.attachShader(g,E),i.index0AttributeName!==void 0)r.bindAttribLocation(g,0,i.index0AttributeName);else if(i.hasPositionAttribute===!0)r.bindAttribLocation(g,0,"position");r.linkProgram(g);function w(U){if(e.debug.checkShaderErrors){let I=r.getProgramInfoLog(g)||"",O=r.getShaderInfoLog(S)||"",te=r.getShaderInfoLog(E)||"",P=I.trim(),q=O.trim(),L=te.trim(),N=!0,Q=!0;if(r.getProgramParameter(g,r.LINK_STATUS)===!1)if(N=!1,typeof e.debug.onShaderError==="function")e.debug.onShaderError(r,g,S,E);else{let z=B0(r,S,"vertex"),X=B0(r,E,"fragment");Fe("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(g,r.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+P+`
`+z+`
`+X)}else if(P!=="")ge("WebGLProgram: Program Info Log:",P);else if(q===""||L==="")Q=!1;if(Q)U.diagnostics={runnable:N,programLog:P,vertexShader:{log:q,prefix:_},fragmentShader:{log:L,prefix:m}}}r.deleteShader(S),r.deleteShader(E),x=new ps(r,g),M=iv(r,g)}let x;this.getUniforms=function(){if(x===void 0)w(this);return x};let M;this.getAttributes=function(){if(M===void 0)w(this);return M};let R=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){if(R===!1)R=r.getProgramParameter(g,qy);return R},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(g),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=Yy++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=S,this.fragmentShader=E,this}var dv=0;class eu{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){let n=this._getShaderCacheForMaterial(e);if(n.has(t)===!1)n.add(t),t.usedTimes++;if(n.has(i)===!1)n.add(i),i.usedTimes++;return this}remove(e){let t=this.materialCache.get(e);for(let i of t)if(i.usedTimes--,i.usedTimes===0)this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);if(i===void 0)i=new Set,t.set(e,i);return i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);if(i===void 0)i=new V0(e),t.set(e,i);return i}}class V0{constructor(e){this.id=dv++,this.code=e,this.usedTimes=0}}function pv(e){return e===tn||e===kr||e===Vr}function W0(e,t,i,n,r,s){let o=new pr,a=new eu,l=new Set,c=[],h=new Map,f=n.logarithmicDepthBuffer,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(x){if(l.add(x),x===0)return"uv";return`uv${x}`}function g(x,M,R,U,I,O){let te=U.fog,P=I.geometry,q=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?U.environment:null,L=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,N=t.get(x.envMap||q,L),Q=u[x.type],z=n.precision;if(x.precision!==null){if(z=n.getMaxPrecision(x.precision),z!==x.precision)ge("WebGLProgram.getParameters:",x.precision,"not supported, using",z,"instead.")}let X=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,Z=X!==void 0?X.length:0,de=0;if(P.morphAttributes.position!==void 0)de=1;if(P.morphAttributes.normal!==void 0)de=2;if(P.morphAttributes.color!==void 0)de=3;let V,j,ve,Me;if(Q){let Ie=ln[Q];V=Ie.vertexShader,j=Ie.fragmentShader}else{V=x.vertexShader,j=x.fragmentShader;let Ie=a.getVertexShaderStage(x),Pt=a.getFragmentShaderStage(x);a.update(x,Ie,Pt),ve=Ie.id,Me=Pt.id}let Oe=e.getRenderTarget(),Te=e.state.buffers.depth.getReversed(),ut=I.isInstancedMesh===!0,De=I.isBatchedMesh===!0,Ne=!!x.map,rt=!!x.matcap,re=!!N,he=re&&N.isPMREMTexture===!0,fe=!!x.aoMap,Ce=!!x.lightMap,Ue=!!x.bumpMap&&x.wireframe===!1,Ke=!!x.normalMap,Ve=!!x.displacementMap,lt=!!x.emissiveMap,dt=!!x.metalnessMap,Et=!!x.roughnessMap,B=x.anisotropy>0,oi=x.clearcoat>0,ct=x.diffuseRoughness>0,jt=x.dispersion>0,Ae=x.retroreflectivity>0,Rt=x.iridescence>0,je=x.sheen>0,nt=x.transmission>0,ai=B&&!!x.anisotropyMap,C=oi&&!!x.clearcoatMap,b=oi&&!!x.clearcoatNormalMap,G=oi&&!!x.clearcoatRoughnessMap,ce=ct&&!!x.diffuseRoughnessMap,oe=Rt&&!!x.iridescenceMap,xe=Rt&&!!x.iridescenceThicknessMap,Se=je&&!!x.sheenColorMap,J=je&&!!x.sheenRoughnessMap,ne=!!x.specularMap,ye=!!x.specularColorMap,D=!!x.specularIntensityMap,ie=nt&&!!x.transmissionMap,K=nt&&!!x.thicknessMap,pe=!!x.gradientMap,me=!!x.alphaMap,we=x.alphaTest>0,$e=!!x.alphaHash,Ye=!!x.extensions,Pe=ji;if(x.toneMapped){if(Oe===null||Oe.isXRRenderTarget===!0)Pe=e.toneMapping}let Qe=he?N.isCompressedCubeTexture?N.image[0].mipmaps:N.mipmaps:null,ht={shaderID:Q,shaderType:x.type,shaderName:x.name,vertexShader:V,fragmentShader:j,defines:x.defines,customVertexShaderID:ve,customFragmentShaderID:Me,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:z,batching:De,batchingColor:De&&I._colorsTexture!==null,instancing:ut,instancingColor:ut&&I.instanceColor!==null,instancingMorph:ut&&I.morphTexture!==null,outputColorSpace:Oe===null?e.outputColorSpace:Oe.isXRRenderTarget===!0?Oe.texture.colorSpace:tt.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Ne,matcap:rt,envMap:re,envMapMode:re&&N.mapping,envMapPMREM:he,envMapMaxLod:he?Qe.length-1:null,envMapSize:he?Qe[0].width:null,aoMap:fe,lightMap:Ce,bumpMap:Ue,normalMap:Ke,displacementMap:Ve,emissiveMap:lt,normalMapObjectSpace:Ke&&x.normalMapType===rf,normalMapTangentSpace:Ke&&x.normalMapType===wn,packedNormalMap:Ke&&x.normalMapType===wn&&pv(x.normalMap.format),metalnessMap:dt,roughnessMap:Et,anisotropy:B,anisotropyMap:ai,clearcoat:oi,clearcoatMap:C,clearcoatNormalMap:b,clearcoatRoughnessMap:G,diffuseRoughness:ct,diffuseRoughnessMap:ce,dispersion:jt,retroreflection:Ae,iridescence:Rt,iridescenceMap:oe,iridescenceThicknessMap:xe,sheen:je,sheenColorMap:Se,sheenRoughnessMap:J,specularMap:ne,specularColorMap:ye,specularIntensityMap:D,transmission:nt,transmissionMap:ie,thicknessMap:K,gradientMap:pe,opaque:x.transparent===!1&&x.blending===lr&&x.alphaToCoverage===!1,alphaMap:me,alphaTest:we,alphaHash:$e,combine:x.combine,mapUv:Ne&&p(x.map.channel),aoMapUv:fe&&p(x.aoMap.channel),lightMapUv:Ce&&p(x.lightMap.channel),bumpMapUv:Ue&&p(x.bumpMap.channel),normalMapUv:Ke&&p(x.normalMap.channel),displacementMapUv:Ve&&p(x.displacementMap.channel),emissiveMapUv:lt&&p(x.emissiveMap.channel),metalnessMapUv:dt&&p(x.metalnessMap.channel),roughnessMapUv:Et&&p(x.roughnessMap.channel),anisotropyMapUv:ai&&p(x.anisotropyMap.channel),clearcoatMapUv:C&&p(x.clearcoatMap.channel),clearcoatNormalMapUv:b&&p(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:G&&p(x.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:ce&&p(x.diffuseRoughnessMap.channel),iridescenceMapUv:oe&&p(x.iridescenceMap.channel),iridescenceThicknessMapUv:xe&&p(x.iridescenceThicknessMap.channel),sheenColorMapUv:Se&&p(x.sheenColorMap.channel),sheenRoughnessMapUv:J&&p(x.sheenRoughnessMap.channel),specularMapUv:ne&&p(x.specularMap.channel),specularColorMapUv:ye&&p(x.specularColorMap.channel),specularIntensityMapUv:D&&p(x.specularIntensityMap.channel),transmissionMapUv:ie&&p(x.transmissionMap.channel),thicknessMapUv:K&&p(x.thicknessMap.channel),alphaMapUv:me&&p(x.alphaMap.channel),vertexTangents:!!P.attributes.tangent&&(Ke||B),vertexNormals:!!P.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!P.attributes.uv&&(Ne||me),fog:!!te,useFog:x.fog===!0,fogExp2:!!te&&te.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||P.attributes.normal===void 0&&Ke===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:Te,skinning:I.isSkinnedMesh===!0,hasPositionAttribute:P.attributes.position!==void 0,morphTargets:P.morphAttributes.position!==void 0,morphNormals:P.morphAttributes.normal!==void 0,morphColors:P.morphAttributes.color!==void 0,morphTargetsCount:Z,morphTextureStride:de,numSunLights:M.sun.length,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numSunLightShadows:M.sunShadowMap.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numLightProbeGrids:O.filter((Ie)=>Ie.texture!==null).length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:x.dithering,shadowMapEnabled:e.shadowMap.enabled&&R.length>0,shadowMapType:e.shadowMap.type,toneMapping:Pe,decodeVideoTexture:Ne&&x.map.isVideoTexture===!0&&tt.getTransfer(x.map.colorSpace)===pt,decodeVideoTextureEmissive:lt&&x.emissiveMap.isVideoTexture===!0&&tt.getTransfer(x.emissiveMap.colorSpace)===pt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===kt,flipSided:x.side===Nt,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:Ye&&x.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ye&&x.extensions.multiDraw===!0||De)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return ht.vertexUv1s=l.has(1),ht.vertexUv2s=l.has(2),ht.vertexUv3s=l.has(3),l.clear(),ht}function _(x){let M=[];if(x.shaderID)M.push(x.shaderID);else M.push(x.customVertexShaderID),M.push(x.customFragmentShaderID);if(x.defines!==void 0)for(let R in x.defines)M.push(R),M.push(x.defines[R]);if(x.isRawShaderMaterial===!1)m(M,x),d(M,x),M.push(e.outputColorSpace);return M.push(x.customProgramCacheKey),M.join()}function m(x,M){x.push(M.precision),x.push(M.outputColorSpace),x.push(M.envMapMode),x.push(M.envMapPMREM),x.push(M.envMapMaxLod),x.push(M.envMapSize),x.push(M.mapUv),x.push(M.alphaMapUv),x.push(M.lightMapUv),x.push(M.aoMapUv),x.push(M.bumpMapUv),x.push(M.normalMapUv),x.push(M.displacementMapUv),x.push(M.emissiveMapUv),x.push(M.metalnessMapUv),x.push(M.roughnessMapUv),x.push(M.anisotropyMapUv),x.push(M.clearcoatMapUv),x.push(M.clearcoatNormalMapUv),x.push(M.clearcoatRoughnessMapUv),x.push(M.diffuseRoughnessMapUv),x.push(M.iridescenceMapUv),x.push(M.iridescenceThicknessMapUv),x.push(M.sheenColorMapUv),x.push(M.sheenRoughnessMapUv),x.push(M.specularMapUv),x.push(M.specularColorMapUv),x.push(M.specularIntensityMapUv),x.push(M.transmissionMapUv),x.push(M.thicknessMapUv),x.push(M.combine),x.push(M.fogExp2),x.push(M.sizeAttenuation),x.push(M.morphTargetsCount),x.push(M.numSunLights),x.push(M.numDirLights),x.push(M.numPointLights),x.push(M.numSpotLights),x.push(M.numSpotLightMaps),x.push(M.numHemiLights),x.push(M.numRectAreaLights),x.push(M.numSunLightShadows),x.push(M.numDirLightShadows),x.push(M.numPointLightShadows),x.push(M.numSpotLightShadows),x.push(M.numSpotLightShadowsWithMaps),x.push(M.numLightProbes),x.push(M.numLightProbeGrids),x.push(M.shadowMapType),x.push(M.toneMapping),x.push(M.numClippingPlanes),x.push(M.numClipIntersection),x.push(M.depthPacking)}function d(x,M){if(o.disableAll(),M.instancing)o.enable(0);if(M.instancingColor)o.enable(1);if(M.instancingMorph)o.enable(2);if(M.matcap)o.enable(3);if(M.envMap)o.enable(4);if(M.normalMapObjectSpace)o.enable(5);if(M.normalMapTangentSpace)o.enable(6);if(M.clearcoat)o.enable(7);if(M.iridescence)o.enable(8);if(M.alphaTest)o.enable(9);if(M.vertexColors)o.enable(10);if(M.vertexAlphas)o.enable(11);if(M.vertexUv1s)o.enable(12);if(M.vertexUv2s)o.enable(13);if(M.vertexUv3s)o.enable(14);if(M.vertexTangents)o.enable(15);if(M.anisotropy)o.enable(16);if(M.alphaHash)o.enable(17);if(M.batching)o.enable(18);if(M.dispersion)o.enable(19);if(M.retroreflection)o.enable(24);if(M.diffuseRoughness)o.enable(25);if(M.batchingColor)o.enable(20);if(M.gradientMap)o.enable(21);if(M.packedNormalMap)o.enable(22);if(M.vertexNormals)o.enable(23);if(x.push(o.mask),o.disableAll(),M.fog)o.enable(0);if(M.useFog)o.enable(1);if(M.flatShading)o.enable(2);if(M.logarithmicDepthBuffer)o.enable(3);if(M.reversedDepthBuffer)o.enable(4);if(M.skinning)o.enable(5);if(M.morphTargets)o.enable(6);if(M.morphNormals)o.enable(7);if(M.morphColors)o.enable(8);if(M.premultipliedAlpha)o.enable(9);if(M.shadowMapEnabled)o.enable(10);if(M.doubleSided)o.enable(11);if(M.flipSided)o.enable(12);if(M.useDepthPacking)o.enable(13);if(M.dithering)o.enable(14);if(M.transmission)o.enable(15);if(M.sheen)o.enable(16);if(M.opaque)o.enable(17);if(M.pointsUvs)o.enable(18);if(M.decodeVideoTexture)o.enable(19);if(M.decodeVideoTextureEmissive)o.enable(20);if(M.alphaToCoverage)o.enable(21);if(M.numLightProbeGrids>0)o.enable(22);if(M.hasPositionAttribute)o.enable(23);x.push(o.mask)}function v(x){let M=u[x.type],R;if(M){let U=ln[M];R=zn.clone(U.uniforms)}else R=x.uniforms;return R}function y(x,M){let R=h.get(M);if(R!==void 0)++R.usedTimes;else R=new k0(e,M,x,r),c.push(R),h.set(M,R);return R}function S(x){if(--x.usedTimes===0){let M=c.indexOf(x);c[M]=c[c.length-1],c.pop(),h.delete(x.cacheKey),x.destroy()}}function E(x){a.remove(x)}function w(){a.dispose()}return{getParameters:g,getProgramCacheKey:_,getUniforms:v,acquireProgram:y,releaseProgram:S,releaseShaderCache:E,programs:c,dispose:w}}function X0(){let e=new WeakMap;function t(o){return e.has(o)}function i(o){let a=e.get(o);if(a===void 0)a={},e.set(o,a);return a}function n(o){e.delete(o)}function r(o,a,l){e.get(o)[a]=l}function s(){e=new WeakMap}return{has:t,get:i,remove:n,update:r,dispose:s}}function mv(e,t){if(e.groupOrder!==t.groupOrder)return e.groupOrder-t.groupOrder;else if(e.renderOrder!==t.renderOrder)return e.renderOrder-t.renderOrder;else if(e.material.id!==t.material.id)return e.material.id-t.material.id;else if(e.materialVariant!==t.materialVariant)return e.materialVariant-t.materialVariant;else if(e.z!==t.z)return e.z-t.z;else return e.id-t.id}function q0(e,t){if(e.groupOrder!==t.groupOrder)return e.groupOrder-t.groupOrder;else if(e.renderOrder!==t.renderOrder)return e.renderOrder-t.renderOrder;else if(e.z!==t.z)return t.z-e.z;else return e.id-t.id}function Y0(){let e=[],t=0,i=[],n=[],r=[];function s(){t=0,i.length=0,n.length=0,r.length=0}function o(u){let p=0;if(u.isInstancedMesh)p+=2;if(u.isSkinnedMesh)p+=1;return p}function a(u,p,g,_,m,d){let v=e[t];if(v===void 0)v={id:u.id,object:u,geometry:p,material:g,materialVariant:o(u),groupOrder:_,renderOrder:u.renderOrder,z:m,group:d},e[t]=v;else v.id=u.id,v.object=u,v.geometry=p,v.material=g,v.materialVariant=o(u),v.groupOrder=_,v.renderOrder=u.renderOrder,v.z=m,v.group=d;return t++,v}function l(u,p,g,_,m,d,v){if(v.reversedDepth===!0)m=-m;let y=a(u,p,g,_,m,d);if(g.transmission>0)n.push(y);else if(g.transparent===!0)r.push(y);else i.push(y)}function c(u,p,g,_,m,d){let v=a(u,p,g,_,m,d);if(g.transmission>0)n.unshift(v);else if(g.transparent===!0)r.unshift(v);else i.unshift(v)}function h(u,p){if(i.length>1)i.sort(u||mv);if(n.length>1)n.sort(p||q0);if(r.length>1)r.sort(p||q0)}function f(){for(let u=t,p=e.length;u<p;u++){let g=e[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:i,transmissive:n,transparent:r,init:s,push:l,unshift:c,finish:f,sort:h}}function Z0(){let e=new WeakMap;function t(n,r){let s=e.get(n),o;if(s===void 0)o=new Y0,e.set(n,[o]);else if(r>=s.length)o=new Y0,s.push(o);else o=s[r];return o}function i(){e=new WeakMap}return{get:t,dispose:i}}function gv(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let i;switch(t.type){case"SunLight":case"DirectionalLight":i={direction:new A,color:new ue};break;case"SpotLight":i={position:new A,direction:new A,color:new ue,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new A,color:new ue,distance:0,decay:0};break;case"HemisphereLight":i={direction:new A,skyColor:new ue,groundColor:new ue};break;case"RectAreaLight":i={color:new ue,position:new A,halfWidth:new A,halfHeight:new A};break}return e[t.id]=i,i}}}function xv(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let i;switch(t.type){case"SunLight":case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new k};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new k};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new k,shadowCameraNear:1,shadowCameraFar:1000};break}return e[t.id]=i,i}}}var _v=0;function yv(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function J0(e){let t=new gv,i=xv(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new A);let r=new A,s=new Xe,o=new Xe;function a(c){let h=0,f=0,u=0;for(let O=0;O<9;O++)n.probe[O].set(0,0,0);let p=0,g=0,_=0,m=0,d=0,v=0,y=0,S=0,E=0,w=0,x=0,M=0,R=0,U=0;c.sort(yv);for(let O=0,te=c.length;O<te;O++){let P=c[O],{color:q,intensity:L,distance:N}=P,Q=null;if(P.shadow&&P.shadow.map)if(P.shadow.map.texture.format===tn)Q=P.shadow.map.texture;else Q=P.shadow.map.depthTexture||P.shadow.map.texture;if(P.isAmbientLight)h+=q.r*L,f+=q.g*L,u+=q.b*L;else if(P.isLightProbe){for(let z=0;z<9;z++)n.probe[z].addScaledVector(P.sh.coefficients[z],L);U++}else if(P.isSunLight){let z=t.get(P);if(z.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let X=P.shadow,Z=i.get(P);Z.shadowIntensity=X.intensity,Z.shadowBias=X.bias,Z.shadowNormalBias=X.normalBias,Z.shadowRadius=X.radius,Z.shadowMapSize.copy(X.mapSize).multiply(X.getFrameExtents()),n.sunShadow[g]=Z,n.sunShadowMap[g]=Q;let de=X.getViewportCount();for(let V=0;V<de;V++)n.sunShadowMatrix[_+V]=X.getMatrix(V),n.sunShadowCascade[_+V]=X._cascadeData[V];_+=de,g++}n.sun[p]=z,p++}else if(P.isDirectionalLight){let z=t.get(P);if(z.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let X=P.shadow,Z=i.get(P);Z.shadowIntensity=X.intensity,Z.shadowBias=X.bias,Z.shadowNormalBias=X.normalBias,Z.shadowRadius=X.radius,Z.shadowMapSize=X.mapSize,n.directionalShadow[m]=Z,n.directionalShadowMap[m]=Q,n.directionalShadowMatrix[m]=P.shadow.matrix,E++}n.directional[m]=z,m++}else if(P.isSpotLight){let z=t.get(P);z.position.setFromMatrixPosition(P.matrixWorld),z.color.copy(q).multiplyScalar(L),z.distance=N,z.coneCos=Math.cos(P.angle),z.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),z.decay=P.decay,n.spot[v]=z;let X=P.shadow;if(P.map){if(n.spotLightMap[M]=P.map,M++,X.updateMatrices(P),P.castShadow)R++}if(n.spotLightMatrix[v]=X.matrix,P.castShadow){let Z=i.get(P);Z.shadowIntensity=X.intensity,Z.shadowBias=X.bias,Z.shadowNormalBias=X.normalBias,Z.shadowRadius=X.radius,Z.shadowMapSize=X.mapSize,n.spotShadow[v]=Z,n.spotShadowMap[v]=Q,x++}v++}else if(P.isRectAreaLight){let z=t.get(P);z.color.copy(q).multiplyScalar(L),z.halfWidth.set(P.width*0.5,0,0),z.halfHeight.set(0,P.height*0.5,0),n.rectArea[y]=z,y++}else if(P.isPointLight){let z=t.get(P);if(z.color.copy(P.color).multiplyScalar(P.intensity),z.distance=P.distance,z.decay=P.decay,P.castShadow){let X=P.shadow,Z=i.get(P);Z.shadowIntensity=X.intensity,Z.shadowBias=X.bias,Z.shadowNormalBias=X.normalBias,Z.shadowRadius=X.radius,Z.shadowMapSize=X.mapSize,Z.shadowCameraNear=X.camera.near,Z.shadowCameraFar=X.camera.far,n.pointShadow[d]=Z,n.pointShadowMap[d]=Q,n.pointShadowMatrix[d]=P.shadow.matrix,w++}n.point[d]=z,d++}else if(P.isHemisphereLight){let z=t.get(P);z.skyColor.copy(P.color).multiplyScalar(L),z.groundColor.copy(P.groundColor).multiplyScalar(L),n.hemi[S]=z,S++}}if(y>0)if(e.has("OES_texture_float_linear")===!0)n.rectAreaLTC1=Re.LTC_FLOAT_1,n.rectAreaLTC2=Re.LTC_FLOAT_2;else n.rectAreaLTC1=Re.LTC_HALF_1,n.rectAreaLTC2=Re.LTC_HALF_2;n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=u;let I=n.hash;if(I.sunLength!==p||I.directionalLength!==m||I.pointLength!==d||I.spotLength!==v||I.rectAreaLength!==y||I.hemiLength!==S||I.numSunShadows!==g||I.numDirectionalShadows!==E||I.numPointShadows!==w||I.numSpotShadows!==x||I.numSpotMaps!==M||I.numLightProbes!==U)n.sun.length=p,n.directional.length=m,n.spot.length=v,n.rectArea.length=y,n.point.length=d,n.hemi.length=S,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=_,n.sunShadowCascade.length=_,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.directionalShadowMatrix.length=E,n.pointShadow.length=w,n.pointShadowMap.length=w,n.pointShadowMatrix.length=w,n.spotShadow.length=x,n.spotShadowMap.length=x,n.spotLightMatrix.length=x+M-R,n.spotLightMap.length=M,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=U,I.sunLength=p,I.directionalLength=m,I.pointLength=d,I.spotLength=v,I.rectAreaLength=y,I.hemiLength=S,I.numSunShadows=g,I.numDirectionalShadows=E,I.numPointShadows=w,I.numSpotShadows=x,I.numSpotMaps=M,I.numLightProbes=U,n.version=_v++}function l(c,h){let f=0,u=0,p=0,g=0,_=0,m=0,d=h.matrixWorldInverse;for(let v=0,y=c.length;v<y;v++){let S=c[v];if(S.isSunLight){let E=n.sun[f];E.direction.setFromMatrixPosition(S.matrixWorld),E.direction.transformDirection(d),f++}else if(S.isDirectionalLight){let E=n.directional[u];E.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(d),u++}else if(S.isSpotLight){let E=n.spot[g];E.position.setFromMatrixPosition(S.matrixWorld),E.position.applyMatrix4(d),E.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(d),g++}else if(S.isRectAreaLight){let E=n.rectArea[_];E.position.setFromMatrixPosition(S.matrixWorld),E.position.applyMatrix4(d),o.identity(),s.copy(S.matrixWorld),s.premultiply(d),o.extractRotation(s),E.halfWidth.set(S.width*0.5,0,0),E.halfHeight.set(0,S.height*0.5,0),E.halfWidth.applyMatrix4(o),E.halfHeight.applyMatrix4(o),_++}else if(S.isPointLight){let E=n.point[p];E.position.setFromMatrixPosition(S.matrixWorld),E.position.applyMatrix4(d),p++}else if(S.isHemisphereLight){let E=n.hemi[m];E.direction.setFromMatrixPosition(S.matrixWorld),E.direction.transformDirection(d),m++}}}return{setup:a,setupView:l,state:n}}function K0(e){let t=new J0(e),i=[],n=[],r=[];function s(f){h.camera=f,i.length=0,n.length=0,r.length=0}function o(f){if(f.isLightProbeGrid)r.push(f);else i.push(f)}function a(f){n.push(f)}function l(){t.setup(i),r.sort((f,u)=>f.priority-u.priority||f.id-u.id)}function c(f){t.setupView(i,f)}let h={lightsArray:i,shadowsArray:n,lightProbeGridArray:r,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:h,setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function $0(e){let t=new WeakMap;function i(r,s=0){let o=t.get(r),a;if(o===void 0)a=new K0(e),t.set(r,[a]);else if(s>=o.length)a=new K0(e),o.push(a);else a=o[s];return a}function n(){t=new WeakMap}return{get:i,dispose:n}}var Q0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}
`,j0=`
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
`;var Mv=[new A(1,0,0),new A(-1,0,0),new A(0,1,0),new A(0,-1,0),new A(0,0,1),new A(0,0,-1)],Sv=[new A(0,-1,0),new A(0,-1,0),new A(0,0,1),new A(0,0,-1),new A(0,-1,0),new A(0,-1,0)],eg=new Xe,tl=new A,tu=new A;function tg(e,t,i){let n=new gn,r=new k,s=new k,o=new St,a=new Ya,l=new Za,c={},h=i.maxTextureSize,f={[hn]:Nt,[Nt]:hn,[kt]:kt},u=new Xt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new k},radius:{value:4}},vertexShader:Q0,fragmentShader:j0}),p=u.clone();p.defines.HORIZONTAL_PASS=1;let g=new Be;g.setAttribute("position",new Yt(new Float32Array([-1,-1,0.5,3,-1,0.5,-1,3,0.5]),3));let _=new ee(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ys;let d=this.type;this.render=function(w,x,M){if(m.enabled===!1)return;if(m.autoUpdate===!1&&m.needsUpdate===!1)return;if(w.length===0)return;if(this.type===Uu)ge("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ys;let R=e.getRenderTarget(),U=e.getActiveCubeFace(),I=e.getActiveMipmapLevel(),O=e.state;if(O.setBlending(un),O.buffers.depth.getReversed()===!0)O.buffers.color.setClear(0,0,0,0);else O.buffers.color.setClear(1,1,1,1);O.buffers.depth.setTest(!0),O.setScissorTest(!1);let te=d!==this.type;if(te)x.traverse(function(P){if(P.material)if(Array.isArray(P.material))P.material.forEach((q)=>q.needsUpdate=!0);else P.material.needsUpdate=!0});for(let P=0,q=w.length;P<q;P++){let L=w[P],N=L.shadow;if(N===void 0){ge("WebGLShadowMap:",L,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;r.copy(N.mapSize);let Q=N.getFrameExtents();if(r.multiply(Q),s.copy(N.mapSize),r.x>h||r.y>h){if(r.x>h)s.x=Math.floor(h/Q.x),r.x=s.x*Q.x,N.mapSize.x=s.x;if(r.y>h)s.y=Math.floor(h/Q.y),r.y=s.y*Q.y,N.mapSize.y=s.y}let z=e.state.buffers.depth.getReversed();if(N.camera._reversedDepth=z,N.map===null||te===!0){if(N.map!==null){if(N.map.depthTexture!==null)N.map.depthTexture.dispose(),N.map.depthTexture=null;N.map.dispose()}if(this.type===zr){if(L.isPointLight){ge("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}N.map=new Gt(r.x,r.y,{format:tn,type:Wt,minFilter:Vt,magFilter:Vt,generateMipmaps:!1}),N.map.texture.name=L.name+".shadowMap",N.map.depthTexture=new on(r.x,r.y,ti),N.map.depthTexture.name=L.name+".shadowMapDepth",N.map.depthTexture.format=Xi,N.map.depthTexture.compareFunction=null,N.map.depthTexture.minFilter=Ot,N.map.depthTexture.magFilter=Ot}else{if(L.isPointLight)N.map=new Rr(r.x),N.map.depthTexture=new oo(r.x,li);else N.map=new Gt(r.x,r.y),N.map.depthTexture=new on(r.x,r.y,li);if(N.map.depthTexture.name=L.name+".shadowMap",N.map.depthTexture.format=Xi,this.type===ys)N.map.depthTexture.compareFunction=z?Al:wl,N.map.depthTexture.minFilter=Vt,N.map.depthTexture.magFilter=Vt;else N.map.depthTexture.compareFunction=null,N.map.depthTexture.minFilter=Ot,N.map.depthTexture.magFilter=Ot}N.camera.updateProjectionMatrix()}if(N.map.isWebGLCubeRenderTarget!==!0&&(N.map.width!==r.x||N.map.height!==r.y))N.map.setSize(r.x,r.y);let X=N.map.isWebGLCubeRenderTarget?6:N.getViewportCount();if(L.isPointLight!==!0)N.updateMatrices(L,M);let Z=(N.camera.layers.mask&4294967294)!==0?N.camera.layers:M.layers;for(let de=0;de<X;de++){let V=N.getCamera(de);if(L.isPointLight){let{camera:j,matrix:ve}=N,Me=L.distance||j.far;if(Me!==j.far)j.far=Me,j.updateProjectionMatrix();tl.setFromMatrixPosition(L.matrixWorld),j.position.copy(tl),tu.copy(j.position),tu.add(Mv[de]),j.up.copy(Sv[de]),j.lookAt(tu),j.updateMatrixWorld(),ve.makeTranslation(-tl.x,-tl.y,-tl.z),eg.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),N._frustum.setFromProjectionMatrix(eg,j.coordinateSystem,j.reversedDepth)}if(N.map.isWebGLCubeRenderTarget)e.setRenderTarget(N.map,de),e.clear();else{if(de===0)e.setRenderTarget(N.map),e.clear();let j=N.getViewport(de);o.set(s.x*j.x,s.y*j.y,s.x*j.z,s.y*j.w),O.viewport(o)}n=N.getFrustum(de),S(x,M,V,L,Z,this.type)}if(N.isPointLightShadow!==!0&&this.type===zr)v(N,M);N.needsUpdate=!1}d=this.type,m.needsUpdate=!1,e.setRenderTarget(R,U,I)};function v(w,x){let M=t.update(_);if(u.defines.VSM_SAMPLES!==w.blurSamples)u.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0;if(w.mapPass===null)w.mapPass=new Gt(r.x,r.y,{format:tn,type:Wt});else if(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)w.mapPass.setSize(w.map.width,w.map.height);u.uniforms.shadow_pass.value=w.map.depthTexture,u.uniforms.resolution.value.set(w.map.width,w.map.height),u.uniforms.radius.value=w.radius,e.setRenderTarget(w.mapPass),e.clear(),e.renderBufferDirect(x,null,M,u,_,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value.set(w.map.width,w.map.height),p.uniforms.radius.value=w.radius,e.setRenderTarget(w.map),e.clear(),e.renderBufferDirect(x,null,M,p,_,null)}function y(w,x,M,R){let U=null,I=M.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(I!==void 0)U=I;else if(U=M.isPointLight===!0?l:a,e.localClippingEnabled&&x.clipShadows===!0&&Array.isArray(x.clippingPlanes)&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0||x.map&&x.alphaTest>0||x.alphaToCoverage===!0){let O=U.uuid,te=x.uuid,P=c[O];if(P===void 0)P={},c[O]=P;let q=P[te];if(q===void 0)q=U.clone(),P[te]=q,x.addEventListener("dispose",E);U=q}if(U.visible=x.visible,U.wireframe=x.wireframe,R===zr)U.side=x.shadowSide!==null?x.shadowSide:x.side;else U.side=x.shadowSide!==null?x.shadowSide:f[x.side];if(U.alphaMap=x.alphaMap,U.alphaTest=x.alphaToCoverage===!0?0.5:x.alphaTest,U.map=x.map,U.clipShadows=x.clipShadows,U.clippingPlanes=x.clippingPlanes,U.clipIntersection=x.clipIntersection,U.displacementMap=x.displacementMap,U.displacementScale=x.displacementScale,U.displacementBias=x.displacementBias,U.wireframeLinewidth=x.wireframeLinewidth,U.linewidth=x.linewidth,M.isPointLight===!0&&U.isMeshDistanceMaterial===!0){let O=e.properties.get(U);O.light=M}return U}function S(w,x,M,R,U,I){if(w.visible===!1)return;if(w.layers.test(U)&&(w.isMesh||w.isLine||w.isPoints)){if((w.castShadow||w.receiveShadow&&I===zr)&&(!w.frustumCulled||w.intersectsFrustum(n))){w.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,w.matrixWorld);let P=t.update(w),q=w.material;if(Array.isArray(q)){let L=P.groups;for(let N=0,Q=L.length;N<Q;N++){let z=L[N],X=q[z.materialIndex];if(X&&X.visible){let Z=y(w,X,R,I);w.onBeforeShadow(e,w,x,M,P,Z,z),e.renderBufferDirect(M,null,P,Z,w,z),w.onAfterShadow(e,w,x,M,P,Z,z)}}}else if(q.visible){let L=y(w,q,R,I);w.onBeforeShadow(e,w,x,M,P,L,null),e.renderBufferDirect(M,null,P,L,w,null),w.onAfterShadow(e,w,x,M,P,L,null)}}}let te=w.children;for(let P=0,q=te.length;P<q;P++)S(te[P],x,M,R,U,I)}function E(w){w.target.removeEventListener("dispose",E);for(let M in c){let R=c[M],U=w.target.uuid;if(U in R)R[U].dispose(),delete R[U]}}}function ig(e,t){function i(){let D=!1,ie=new St,K=null,pe=new St(0,0,0,0);return{setMask:function(me){if(K!==me&&!D)e.colorMask(me,me,me,me),K=me},setLocked:function(me){D=me},setClear:function(me,we,$e,Ye,Pe){if(Pe===!0)me*=Ye,we*=Ye,$e*=Ye;if(ie.set(me,we,$e,Ye),pe.equals(ie)===!1)e.clearColor(me,we,$e,Ye),pe.copy(ie)},reset:function(){D=!1,K=null,pe.set(-1,0,0,0)}}}function n(){let D=!1,ie=!1,K=null,pe=null,me=null;return{setReversed:function(we){if(ie!==we){let $e=t.get("EXT_clip_control");if(we)$e.clipControlEXT($e.LOWER_LEFT_EXT,$e.ZERO_TO_ONE_EXT);else $e.clipControlEXT($e.LOWER_LEFT_EXT,$e.NEGATIVE_ONE_TO_ONE_EXT);ie=we;let Ye=me;me=null,this.setClear(Ye)}},getReversed:function(){return ie},setTest:function(we){if(we)Te(e.DEPTH_TEST);else ut(e.DEPTH_TEST)},setMask:function(we){if(K!==we&&!D)e.depthMask(we),K=we},setFunc:function(we){if(ie)we=mf[we];if(pe!==we){switch(we){case Uo:e.depthFunc(e.NEVER);break;case Fo:e.depthFunc(e.ALWAYS);break;case Bo:e.depthFunc(e.LESS);break;case hr:e.depthFunc(e.LEQUAL);break;case Oo:e.depthFunc(e.EQUAL);break;case zo:e.depthFunc(e.GEQUAL);break;case Go:e.depthFunc(e.GREATER);break;case Ho:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}pe=we}},setLocked:function(we){D=we},setClear:function(we){if(me!==we){if(me=we,ie)we=1-we;e.clearDepth(we)}},reset:function(){D=!1,K=null,pe=null,me=null,ie=!1}}}function r(){let D=!1,ie=null,K=null,pe=null,me=null,we=null,$e=null,Ye=null,Pe=null;return{setTest:function(Qe){if(!D)if(Qe)Te(e.STENCIL_TEST);else ut(e.STENCIL_TEST)},setMask:function(Qe){if(ie!==Qe&&!D)e.stencilMask(Qe),ie=Qe},setFunc:function(Qe,ht,Ie){if(K!==Qe||pe!==ht||me!==Ie)e.stencilFunc(Qe,ht,Ie),K=Qe,pe=ht,me=Ie},setOp:function(Qe,ht,Ie){if(we!==Qe||$e!==ht||Ye!==Ie)e.stencilOp(Qe,ht,Ie),we=Qe,$e=ht,Ye=Ie},setLocked:function(Qe){D=Qe},setClear:function(Qe){if(Pe!==Qe)e.clearStencil(Qe),Pe=Qe},reset:function(){D=!1,ie=null,K=null,pe=null,me=null,we=null,$e=null,Ye=null,Pe=null}}}let s=new i,o=new n,a=new r,l={},c=new WeakMap,h={},f={},u={},p=new WeakMap,g=[],_=null,m=!1,d=null,v=null,y=null,S=null,E=null,w=null,x=null,M=new ue(0,0,0),R=0,U=!1,I=null,O=null,te=null,P=null,q=null,L=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),N=!1,Q=0,z=e.getParameter(e.VERSION);if(z.indexOf("WebGL")!==-1)Q=parseFloat(/^WebGL (\d)/.exec(z)[1]),N=Q>=1;else if(z.indexOf("OpenGL ES")!==-1)Q=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),N=Q>=2;let X=null,Z={},de=e.getParameter(e.SCISSOR_BOX),V=e.getParameter(e.VIEWPORT),j=new St().fromArray(de),ve=new St().fromArray(V);function Me(D,ie,K,pe){let me=new Uint8Array(4),we=e.createTexture();e.bindTexture(D,we),e.texParameteri(D,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(D,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let $e=0;$e<K;$e++)if(D===e.TEXTURE_3D||D===e.TEXTURE_2D_ARRAY)e.texImage3D(ie,0,e.RGBA,1,1,pe,0,e.RGBA,e.UNSIGNED_BYTE,me);else e.texImage2D(ie+$e,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,me);return we}let Oe={};Oe[e.TEXTURE_2D]=Me(e.TEXTURE_2D,e.TEXTURE_2D,1),Oe[e.TEXTURE_CUBE_MAP]=Me(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),Oe[e.TEXTURE_2D_ARRAY]=Me(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),Oe[e.TEXTURE_3D]=Me(e.TEXTURE_3D,e.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),Te(e.DEPTH_TEST),o.setFunc(hr),Ue(!1),Ke(eh),Te(e.CULL_FACE),fe(un);function Te(D){if(h[D]!==!0)e.enable(D),h[D]=!0}function ut(D){if(h[D]!==!1)e.disable(D),h[D]=!1}function De(D,ie){if(u[D]!==ie){if(e.bindFramebuffer(D,ie),u[D]=ie,D===e.DRAW_FRAMEBUFFER)u[e.FRAMEBUFFER]=ie;if(D===e.FRAMEBUFFER)u[e.DRAW_FRAMEBUFFER]=ie;return!0}return!1}function Ne(D,ie){let K=g,pe=!1;if(D){if(K=p.get(ie),K===void 0)K=[],p.set(ie,K);let me=D.textures;if(K.length!==me.length||K[0]!==e.COLOR_ATTACHMENT0){for(let we=0,$e=me.length;we<$e;we++)K[we]=e.COLOR_ATTACHMENT0+we;K.length=me.length,pe=!0}}else if(K[0]!==e.BACK)K[0]=e.BACK,pe=!0;if(pe)e.drawBuffers(K)}function rt(D){if(_!==D)return e.useProgram(D),_=D,!0;return!1}let re={[cr]:e.FUNC_ADD,[Bu]:e.FUNC_SUBTRACT,[Ou]:e.FUNC_REVERSE_SUBTRACT};re[zu]=e.MIN,re[Gu]=e.MAX;let he={[Hu]:e.ZERO,[ku]:e.ONE,[Vu]:e.SRC_COLOR,[ul]:e.SRC_ALPHA,[Ju]:e.SRC_ALPHA_SATURATE,[Yu]:e.DST_COLOR,[Xu]:e.DST_ALPHA,[Wu]:e.ONE_MINUS_SRC_COLOR,[fl]:e.ONE_MINUS_SRC_ALPHA,[Zu]:e.ONE_MINUS_DST_COLOR,[qu]:e.ONE_MINUS_DST_ALPHA,[Ku]:e.CONSTANT_COLOR,[$u]:e.ONE_MINUS_CONSTANT_COLOR,[Qu]:e.CONSTANT_ALPHA,[ju]:e.ONE_MINUS_CONSTANT_ALPHA};function fe(D,ie,K,pe,me,we,$e,Ye,Pe,Qe){if(D===un){if(m===!0)ut(e.BLEND),m=!1;return}if(m===!1)Te(e.BLEND),m=!0;if(D!==Fu){if(D!==d||Qe!==U){if(v!==cr||E!==cr)e.blendEquation(e.FUNC_ADD),v=cr,E=cr;if(Qe)switch(D){case lr:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case No:e.blendFunc(e.ONE,e.ONE);break;case th:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case ih:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:Fe("WebGLState: Invalid blending: ",D);break}else switch(D){case lr:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case No:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case th:Fe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ih:Fe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Fe("WebGLState: Invalid blending: ",D);break}y=null,S=null,w=null,x=null,M.set(0,0,0),R=0,d=D,U=Qe}return}if(me=me||ie,we=we||K,$e=$e||pe,ie!==v||me!==E)e.blendEquationSeparate(re[ie],re[me]),v=ie,E=me;if(K!==y||pe!==S||we!==w||$e!==x)e.blendFuncSeparate(he[K],he[pe],he[we],he[$e]),y=K,S=pe,w=we,x=$e;if(Ye.equals(M)===!1||Pe!==R)e.blendColor(Ye.r,Ye.g,Ye.b,Pe),M.copy(Ye),R=Pe;d=D,U=!1}function Ce(D,ie){D.side===kt?ut(e.CULL_FACE):Te(e.CULL_FACE);let K=D.side===Nt;if(ie)K=!K;Ue(K),D.blending===lr&&D.transparent===!1?fe(un):fe(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),o.setFunc(D.depthFunc),o.setTest(D.depthTest),o.setMask(D.depthWrite),s.setMask(D.colorWrite);let pe=D.stencilWrite;if(a.setTest(pe),pe)a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass);lt(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?Te(e.SAMPLE_ALPHA_TO_COVERAGE):ut(e.SAMPLE_ALPHA_TO_COVERAGE)}function Ue(D){if(I!==D){if(D)e.frontFace(e.CW);else e.frontFace(e.CCW);I=D}}function Ke(D){if(D!==Du){if(Te(e.CULL_FACE),D!==O)if(D===eh)e.cullFace(e.BACK);else if(D===Nu)e.cullFace(e.FRONT);else e.cullFace(e.FRONT_AND_BACK)}else ut(e.CULL_FACE);O=D}function Ve(D){if(D!==te){if(N)e.lineWidth(D);te=D}}function lt(D,ie,K){if(D){if(Te(e.POLYGON_OFFSET_FILL),P!==ie||q!==K){if(P=ie,q=K,o.getReversed())ie=-ie,K=-K;e.polygonOffset(ie,K)}}else ut(e.POLYGON_OFFSET_FILL)}function dt(D){if(D)Te(e.SCISSOR_TEST);else ut(e.SCISSOR_TEST)}function Et(D){if(D===void 0)D=e.TEXTURE0+L-1;if(X!==D)e.activeTexture(D),X=D}function B(D,ie,K){if(K===void 0)if(X===null)K=e.TEXTURE0+L-1;else K=X;let pe=Z[K];if(pe===void 0)pe={type:void 0,texture:void 0},Z[K]=pe;if(pe.type!==D||pe.texture!==ie){if(X!==K)e.activeTexture(K),X=K;e.bindTexture(D,ie||Oe[D]),pe.type=D,pe.texture=ie}}function oi(){let D=Z[X];if(D!==void 0&&D.type!==void 0)e.bindTexture(D.type,null),D.type=void 0,D.texture=void 0}function ct(){try{e.compressedTexImage2D(...arguments)}catch(D){Fe("WebGLState:",D)}}function jt(){try{e.compressedTexImage3D(...arguments)}catch(D){Fe("WebGLState:",D)}}function Ae(){try{e.texSubImage2D(...arguments)}catch(D){Fe("WebGLState:",D)}}function Rt(){try{e.texSubImage3D(...arguments)}catch(D){Fe("WebGLState:",D)}}function je(){try{e.compressedTexSubImage2D(...arguments)}catch(D){Fe("WebGLState:",D)}}function nt(){try{e.compressedTexSubImage3D(...arguments)}catch(D){Fe("WebGLState:",D)}}function ai(){try{e.texStorage2D(...arguments)}catch(D){Fe("WebGLState:",D)}}function C(){try{e.texStorage3D(...arguments)}catch(D){Fe("WebGLState:",D)}}function b(){try{e.texImage2D(...arguments)}catch(D){Fe("WebGLState:",D)}}function G(){try{e.texImage3D(...arguments)}catch(D){Fe("WebGLState:",D)}}function ce(D){if(f[D]!==void 0)return f[D];else return e.getParameter(D)}function oe(D,ie){if(f[D]!==ie)e.pixelStorei(D,ie),f[D]=ie}function xe(D){if(j.equals(D)===!1)e.scissor(D.x,D.y,D.z,D.w),j.copy(D)}function Se(D){if(ve.equals(D)===!1)e.viewport(D.x,D.y,D.z,D.w),ve.copy(D)}function J(D,ie){let K=c.get(ie);if(K===void 0)K=new WeakMap,c.set(ie,K);let pe=K.get(D);if(pe===void 0)pe=e.getUniformBlockIndex(ie,D.name),e.uniformBlockBinding(ie,pe,pe),K.set(D,pe)}function ne(D,ie,K){let me=c.get(ie).get(D);if(l[me]!==K)e.bindBufferBase(e.UNIFORM_BUFFER,me,K),l[me]=K}function ye(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),h={},f={},X=null,Z={},u={},l={},p=new WeakMap,g=[],_=null,m=!1,d=null,v=null,y=null,S=null,E=null,w=null,x=null,M=new ue(0,0,0),R=0,U=!1,I=null,O=null,te=null,P=null,q=null,j.set(0,0,e.canvas.width,e.canvas.height),ve.set(0,0,e.canvas.width,e.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:Te,disable:ut,bindFramebuffer:De,drawBuffers:Ne,useProgram:rt,setBlending:fe,setMaterial:Ce,setFlipSided:Ue,setCullFace:Ke,setLineWidth:Ve,setPolygonOffset:lt,setScissorTest:dt,activeTexture:Et,bindTexture:B,unbindTexture:oi,compressedTexImage2D:ct,compressedTexImage3D:jt,texImage2D:b,texImage3D:G,pixelStorei:oe,getParameter:ce,updateUBOMapping:J,uniformBlockBinding:ne,texStorage2D:ai,texStorage3D:C,texSubImage2D:Ae,texSubImage3D:Rt,compressedTexSubImage2D:je,compressedTexSubImage3D:nt,scissor:xe,viewport:Se,reset:ye}}function ng(e,t,i,n,r,s,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new k,h=new WeakMap,f=new Set,u,p=new WeakMap,g=new Set,_=new FinalizationRegistry((C)=>g.delete(C)),m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(C){}function d(C,b){return m?new OffscreenCanvas(C,b):fr("canvas")}function v(C,b,G){let ce=1,oe=ai(C);if(oe.width>G||oe.height>G)ce=G/Math.max(oe.width,oe.height);if(ce<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let xe=Math.floor(ce*oe.width),Se=Math.floor(ce*oe.height);if(u===void 0)u=d(xe,Se);let J=b?d(xe,Se):u;return J.width=xe,J.height=Se,J.getContext("2d").drawImage(C,0,0,xe,Se),ge("WebGLRenderer: Texture has been resized from ("+oe.width+"x"+oe.height+") to ("+xe+"x"+Se+")."),J}else{if("data"in C)ge("WebGLRenderer: Image in DataTexture is too big ("+oe.width+"x"+oe.height+").");return C}return C}function y(C){return C.generateMipmaps}function S(C){e.generateMipmap(C)}function E(C){if(C.isWebGLCubeRenderTarget)return e.TEXTURE_CUBE_MAP;if(C.isWebGL3DRenderTarget)return e.TEXTURE_3D;if(C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture)return e.TEXTURE_2D_ARRAY;return e.TEXTURE_2D}function w(C,b,G,ce,oe,xe=!1){if(C!==null){if(e[C]!==void 0)return e[C];ge("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let Se;if(ce){if(Se=t.get("EXT_texture_norm16"),!Se)ge("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension")}let J=b;if(b===e.RED){if(G===e.FLOAT)J=e.R32F;if(G===e.HALF_FLOAT)J=e.R16F;if(G===e.UNSIGNED_BYTE)J=e.R8;if(G===e.UNSIGNED_SHORT&&Se)J=Se.R16_EXT;if(G===e.SHORT&&Se)J=Se.R16_SNORM_EXT}if(b===e.RED_INTEGER){if(G===e.UNSIGNED_BYTE)J=e.R8UI;if(G===e.UNSIGNED_SHORT)J=e.R16UI;if(G===e.UNSIGNED_INT)J=e.R32UI;if(G===e.BYTE)J=e.R8I;if(G===e.SHORT)J=e.R16I;if(G===e.INT)J=e.R32I}if(b===e.RG){if(G===e.FLOAT)J=e.RG32F;if(G===e.HALF_FLOAT)J=e.RG16F;if(G===e.UNSIGNED_BYTE)J=e.RG8;if(G===e.UNSIGNED_SHORT&&Se)J=Se.RG16_EXT;if(G===e.SHORT&&Se)J=Se.RG16_SNORM_EXT}if(b===e.RG_INTEGER){if(G===e.UNSIGNED_BYTE)J=e.RG8UI;if(G===e.UNSIGNED_SHORT)J=e.RG16UI;if(G===e.UNSIGNED_INT)J=e.RG32UI;if(G===e.BYTE)J=e.RG8I;if(G===e.SHORT)J=e.RG16I;if(G===e.INT)J=e.RG32I}if(b===e.RGB_INTEGER){if(G===e.UNSIGNED_BYTE)J=e.RGB8UI;if(G===e.UNSIGNED_SHORT)J=e.RGB16UI;if(G===e.UNSIGNED_INT)J=e.RGB32UI;if(G===e.BYTE)J=e.RGB8I;if(G===e.SHORT)J=e.RGB16I;if(G===e.INT)J=e.RGB32I}if(b===e.RGBA_INTEGER){if(G===e.UNSIGNED_BYTE)J=e.RGBA8UI;if(G===e.UNSIGNED_SHORT)J=e.RGBA16UI;if(G===e.UNSIGNED_INT)J=e.RGBA32UI;if(G===e.BYTE)J=e.RGBA8I;if(G===e.SHORT)J=e.RGBA16I;if(G===e.INT)J=e.RGBA32I}if(b===e.RGB){if(G===e.UNSIGNED_SHORT&&Se)J=Se.RGB16_EXT;if(G===e.SHORT&&Se)J=Se.RGB16_SNORM_EXT;if(G===e.UNSIGNED_INT_5_9_9_9_REV)J=e.RGB9_E5;if(G===e.UNSIGNED_INT_10F_11F_11F_REV)J=e.R11F_G11F_B10F}if(b===e.RGBA){let ne=xe?qr:tt.getTransfer(oe);if(G===e.FLOAT)J=e.RGBA32F;if(G===e.HALF_FLOAT)J=e.RGBA16F;if(G===e.UNSIGNED_BYTE)J=ne===pt?e.SRGB8_ALPHA8:e.RGBA8;if(G===e.UNSIGNED_SHORT&&Se)J=Se.RGBA16_EXT;if(G===e.SHORT&&Se)J=Se.RGBA16_SNORM_EXT;if(G===e.UNSIGNED_SHORT_4_4_4_4)J=e.RGBA4;if(G===e.UNSIGNED_SHORT_5_5_5_1)J=e.RGB5_A1}if(J===e.R16F||J===e.R32F||J===e.RG16F||J===e.RG32F||J===e.RGBA16F||J===e.RGBA32F)t.get("EXT_color_buffer_float");return J}function x(C,b){let G;if(C){if(b===null||b===li||b===Tn)G=e.DEPTH24_STENCIL8;else if(b===ti)G=e.DEPTH32F_STENCIL8;else if(b===Jn)G=e.DEPTH24_STENCIL8,ge("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")}else if(b===null||b===li||b===Tn)G=e.DEPTH_COMPONENT24;else if(b===ti)G=e.DEPTH_COMPONENT32F;else if(b===Jn)G=e.DEPTH_COMPONENT16;return G}function M(C,b){if(y(C)===!0||C.isFramebufferTexture&&C.minFilter!==Ot&&C.minFilter!==Vt)return Math.log2(Math.max(b.width,b.height))+1;else if(C.mipmaps.length>0)return C.mipmaps.length;else if(C.isCompressedTexture&&Array.isArray(C.image))return b.mipmaps.length;else return 1}function R(C){let b=new WeakRef(C);n.get(C).__ref=b,g.add(b),_.register(C,b,b)}function U(C){let b=n.get(C).__ref;if(b===void 0)return;g.delete(b),_.unregister(b)}function I(C){te(C.target)}function O(C){P(C.target)}function te(C){if(C.removeEventListener("dispose",I),U(C),L(C),C.isVideoTexture)h.delete(C);if(C.isHTMLTexture)f.delete(C)}function P(C){C.removeEventListener("dispose",O),U(C),Q(C)}function q(){for(let C of g){let b=C.deref();if(b===void 0)continue;if(b.isRenderTarget===!0)P(b);else te(b)}g.clear(),f.clear()}function L(C){let b=n.get(C);if(b.__webglInit===void 0)return;let G=C.source,ce=p.get(G);if(ce){let oe=ce[b.__cacheKey];if(oe.usedTimes--,oe.usedTimes===0)N(C);if(Object.keys(ce).length===0)p.delete(G)}n.remove(C)}function N(C){let b=n.get(C);e.deleteTexture(b.__webglTexture);let G=C.source,ce=p.get(G);delete ce[b.__cacheKey],o.memory.textures--}function Q(C){let b=n.get(C);if(b.__depthDisposeCallback)b.__depthDisposeCallback();let G=C.depthTexture;if(G&&G.renderTarget===C)te(G);if(C.isWebGLCubeRenderTarget)for(let oe=0;oe<6;oe++){if(Array.isArray(b.__webglFramebuffer[oe]))for(let xe=0;xe<b.__webglFramebuffer[oe].length;xe++)e.deleteFramebuffer(b.__webglFramebuffer[oe][xe]);else e.deleteFramebuffer(b.__webglFramebuffer[oe]);if(b.__webglDepthbuffer)e.deleteRenderbuffer(b.__webglDepthbuffer[oe])}else{if(Array.isArray(b.__webglFramebuffer))for(let oe=0;oe<b.__webglFramebuffer.length;oe++)e.deleteFramebuffer(b.__webglFramebuffer[oe]);else e.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer)e.deleteRenderbuffer(b.__webglDepthbuffer);if(b.__webglMultisampledFramebuffer)e.deleteFramebuffer(b.__webglMultisampledFramebuffer);if(b.__webglColorRenderbuffer){for(let oe=0;oe<b.__webglColorRenderbuffer.length;oe++)if(b.__webglColorRenderbuffer[oe])e.deleteRenderbuffer(b.__webglColorRenderbuffer[oe])}if(b.__webglDepthRenderbuffer)e.deleteRenderbuffer(b.__webglDepthRenderbuffer)}let ce=C.textures;for(let oe=0,xe=ce.length;oe<xe;oe++){let Se=n.get(ce[oe]);if(Se.__webglTexture)e.deleteTexture(Se.__webglTexture),o.memory.textures--;n.remove(ce[oe])}n.remove(C)}let z=0;function X(){z=0}function Z(){return z}function de(C){z=C}function V(){let C=z;if(C>=r.maxTextures)ge("WebGLTextures: Trying to use "+(C+1)+" texture units while this GPU supports only "+r.maxTextures);return z+=1,C}function j(C){let b=[];return b.push(C.wrapS),b.push(C.wrapT),b.push(C.wrapR||0),b.push(C.magFilter),b.push(C.minFilter),b.push(C.anisotropy),b.push(C.internalFormat),b.push(C.format),b.push(C.type),b.push(C.generateMipmaps),b.push(C.mipmapsAutoUpdate),b.push(C.premultiplyAlpha),b.push(C.flipY),b.push(C.unpackAlignment),b.push(C.colorSpace),b.join()}function ve(C,b){let G=n.get(C);if(C.isVideoTexture)je(C);if(C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&G.__version!==C.version){let ce=C.image;if(ce===null)ge("WebGLRenderer: Texture marked for update but no image data found.");else if(ce.complete===!1)ge("WebGLRenderer: Texture marked for update but image is incomplete");else{Ce(G,C,b);return}}else if(C.isExternalTexture)G.__webglTexture=C.sourceTexture?C.sourceTexture:null;i.bindTexture(e.TEXTURE_2D,G.__webglTexture,e.TEXTURE0+b)}function Me(C,b){let G=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&G.__version!==C.version){Ce(G,C,b);return}else if(C.isExternalTexture)G.__webglTexture=C.sourceTexture?C.sourceTexture:null;i.bindTexture(e.TEXTURE_2D_ARRAY,G.__webglTexture,e.TEXTURE0+b)}function Oe(C,b){let G=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&G.__version!==C.version){Ce(G,C,b);return}i.bindTexture(e.TEXTURE_3D,G.__webglTexture,e.TEXTURE0+b)}function Te(C,b){let G=n.get(C);if(C.version>0&&G.__version!==C.version){Ue(G,C,b);return}i.bindTexture(e.TEXTURE_CUBE_MAP,G.__webglTexture,e.TEXTURE0+b)}let ut={[Zn]:e.REPEAT,[wi]:e.CLAMP_TO_EDGE,[ws]:e.MIRRORED_REPEAT},De={[Ot]:e.NEAREST,[nh]:e.NEAREST_MIPMAP_NEAREST,[As]:e.NEAREST_MIPMAP_LINEAR,[Vt]:e.LINEAR,[Wo]:e.LINEAR_MIPMAP_NEAREST,[Gi]:e.LINEAR_MIPMAP_LINEAR},Ne={[of]:e.NEVER,[Rl]:e.ALWAYS,[af]:e.LESS,[wl]:e.LEQUAL,[lf]:e.EQUAL,[Al]:e.GEQUAL,[cf]:e.GREATER,[hf]:e.NOTEQUAL};function rt(C,b){if(b.type===ti&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===Vt||b.magFilter===Wo||b.magFilter===As||b.magFilter===Gi||b.minFilter===Vt||b.minFilter===Wo||b.minFilter===As||b.minFilter===Gi))ge("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.");if(e.texParameteri(C,e.TEXTURE_WRAP_S,ut[b.wrapS]),e.texParameteri(C,e.TEXTURE_WRAP_T,ut[b.wrapT]),C===e.TEXTURE_3D||C===e.TEXTURE_2D_ARRAY)e.texParameteri(C,e.TEXTURE_WRAP_R,ut[b.wrapR]);if(e.texParameteri(C,e.TEXTURE_MAG_FILTER,De[b.magFilter]),e.texParameteri(C,e.TEXTURE_MIN_FILTER,De[b.minFilter]),b.compareFunction)e.texParameteri(C,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(C,e.TEXTURE_COMPARE_FUNC,Ne[b.compareFunction]);if(t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Ot)return;if(b.minFilter!==As&&b.minFilter!==Gi)return;if(b.type===ti&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){let G=t.get("EXT_texture_filter_anisotropic");e.texParameterf(C,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,r.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function re(C,b){let G=!1;if(C.__webglInit===void 0)C.__webglInit=!0,b.addEventListener("dispose",I),R(b);let ce=b.source,oe=p.get(ce);if(oe===void 0)oe={},p.set(ce,oe);let xe=j(b);if(xe!==C.__cacheKey){if(oe[xe]===void 0)oe[xe]={texture:e.createTexture(),usedTimes:0},o.memory.textures++,G=!0;oe[xe].usedTimes++;let Se=oe[C.__cacheKey];if(Se!==void 0){if(oe[C.__cacheKey].usedTimes--,Se.usedTimes===0)N(b)}C.__cacheKey=xe,C.__webglTexture=oe[xe].texture}return G}function he(C,b,G){return Math.floor(Math.floor(C/G)/b)}function fe(C,b,G,ce){let xe=C.updateRanges;if(xe.length===0)i.texSubImage2D(e.TEXTURE_2D,0,0,0,b.width,b.height,G,ce,b.data);else{xe.sort((D,ie)=>D.start-ie.start);let Se=0;for(let D=1;D<xe.length;D++){let ie=xe[Se],K=xe[D],pe=ie.start+ie.count,me=he(K.start,b.width,4),we=he(ie.start,b.width,4);if(K.start<=pe+1&&me===we&&he(K.start+K.count-1,b.width,4)===me)ie.count=Math.max(ie.count,K.start+K.count-ie.start);else++Se,xe[Se]=K}xe.length=Se+1;let J=i.getParameter(e.UNPACK_ROW_LENGTH),ne=i.getParameter(e.UNPACK_SKIP_PIXELS),ye=i.getParameter(e.UNPACK_SKIP_ROWS);i.pixelStorei(e.UNPACK_ROW_LENGTH,b.width);for(let D=0,ie=xe.length;D<ie;D++){let K=xe[D],pe=Math.floor(K.start/4),me=Math.ceil(K.count/4),we=pe%b.width,$e=Math.floor(pe/b.width),Ye=me,Pe=1;i.pixelStorei(e.UNPACK_SKIP_PIXELS,we),i.pixelStorei(e.UNPACK_SKIP_ROWS,$e),i.texSubImage2D(e.TEXTURE_2D,0,we,$e,Ye,1,G,ce,b.data)}C.clearUpdateRanges(),i.pixelStorei(e.UNPACK_ROW_LENGTH,J),i.pixelStorei(e.UNPACK_SKIP_PIXELS,ne),i.pixelStorei(e.UNPACK_SKIP_ROWS,ye)}}function Ce(C,b,G){let ce=e.TEXTURE_2D;if(b.isDataArrayTexture||b.isCompressedArrayTexture)ce=e.TEXTURE_2D_ARRAY;if(b.isData3DTexture)ce=e.TEXTURE_3D;let oe=re(C,b),xe=b.source;i.bindTexture(ce,C.__webglTexture,e.TEXTURE0+G);let Se=n.get(xe);if(xe.version!==Se.__version||oe===!0){if(i.activeTexture(e.TEXTURE0+G),(typeof ImageBitmap<"u"&&b.image instanceof ImageBitmap)===!1){let Pe=tt.getPrimaries(tt.workingColorSpace),Qe=b.colorSpace===dn?null:tt.getPrimaries(b.colorSpace),ht=b.colorSpace===dn||Pe===Qe?e.NONE:e.BROWSER_DEFAULT_WEBGL;i.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,ht)}i.pixelStorei(e.UNPACK_ALIGNMENT,b.unpackAlignment);let ne=v(b.image,!1,r.maxTextureSize);ne=nt(b,ne);let ye=s.convert(b.format,b.colorSpace),D=s.convert(b.type),ie=w(b.internalFormat,ye,D,b.normalized,b.colorSpace,b.isVideoTexture);rt(ce,b);let K,pe=b.mipmaps,me=b.isVideoTexture!==!0,we=Se.__version===void 0||oe===!0,$e=xe.dataReady,Ye=M(b,ne);if(b.isDepthTexture){if(ie=x(b.format===en,b.type),we)if(me)i.texStorage2D(e.TEXTURE_2D,1,ie,ne.width,ne.height);else i.texImage2D(e.TEXTURE_2D,0,ie,ne.width,ne.height,0,ye,D,null)}else if(b.isDataTexture)if(pe.length>0){if(me&&we)i.texStorage2D(e.TEXTURE_2D,Ye,ie,pe[0].width,pe[0].height);for(let Pe=0,Qe=pe.length;Pe<Qe;Pe++)if(K=pe[Pe],me){if($e)i.texSubImage2D(e.TEXTURE_2D,Pe,0,0,K.width,K.height,ye,D,K.data)}else i.texImage2D(e.TEXTURE_2D,Pe,ie,K.width,K.height,0,ye,D,K.data);b.generateMipmaps=!1}else if(me){if(we)i.texStorage2D(e.TEXTURE_2D,Ye,ie,ne.width,ne.height);if($e)fe(b,ne,ye,D)}else i.texImage2D(e.TEXTURE_2D,0,ie,ne.width,ne.height,0,ye,D,ne.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){if(me&&we)i.texStorage3D(e.TEXTURE_2D_ARRAY,Ye,ie,pe[0].width,pe[0].height,ne.depth);for(let Pe=0,Qe=pe.length;Pe<Qe;Pe++)if(K=pe[Pe],b.format!==xi)if(ye!==null)if(me){if($e)if(b.layerUpdates.size>0){let ht=Kh(K.width,K.height,b.format,b.type);for(let Ie of b.layerUpdates){let Pt=K.data.subarray(Ie*ht/K.data.BYTES_PER_ELEMENT,(Ie+1)*ht/K.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,Pe,0,0,Ie,K.width,K.height,1,ye,Pt)}}else i.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,Pe,0,0,0,K.width,K.height,ne.depth,ye,K.data)}else i.compressedTexImage3D(e.TEXTURE_2D_ARRAY,Pe,ie,K.width,K.height,ne.depth,0,K.data,0,0);else ge("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(me){if($e)i.texSubImage3D(e.TEXTURE_2D_ARRAY,Pe,0,0,0,K.width,K.height,ne.depth,ye,D,K.data)}else i.texImage3D(e.TEXTURE_2D_ARRAY,Pe,ie,K.width,K.height,ne.depth,0,ye,D,K.data);if(b.layerUpdates.size>0)b.clearLayerUpdates()}else{if(me&&we)i.texStorage2D(e.TEXTURE_2D,Ye,ie,pe[0].width,pe[0].height);for(let Pe=0,Qe=pe.length;Pe<Qe;Pe++)if(K=pe[Pe],b.format!==xi)if(ye!==null)if(me){if($e)i.compressedTexSubImage2D(e.TEXTURE_2D,Pe,0,0,K.width,K.height,ye,K.data)}else i.compressedTexImage2D(e.TEXTURE_2D,Pe,ie,K.width,K.height,0,K.data);else ge("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(me){if($e)i.texSubImage2D(e.TEXTURE_2D,Pe,0,0,K.width,K.height,ye,D,K.data)}else i.texImage2D(e.TEXTURE_2D,Pe,ie,K.width,K.height,0,ye,D,K.data)}else if(b.isDataArrayTexture)if(me){if(we)i.texStorage3D(e.TEXTURE_2D_ARRAY,Ye,ie,ne.width,ne.height,ne.depth);if($e)if(b.layerUpdates.size>0){let Pe=Kh(ne.width,ne.height,b.format,b.type);for(let Qe of b.layerUpdates){let ht=ne.data.subarray(Qe*Pe/ne.data.BYTES_PER_ELEMENT,(Qe+1)*Pe/ne.data.BYTES_PER_ELEMENT);i.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,Qe,ne.width,ne.height,1,ye,D,ht)}b.clearLayerUpdates()}else i.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,ye,D,ne.data)}else i.texImage3D(e.TEXTURE_2D_ARRAY,0,ie,ne.width,ne.height,ne.depth,0,ye,D,ne.data);else if(b.isData3DTexture)if(me){if(we)i.texStorage3D(e.TEXTURE_3D,Ye,ie,ne.width,ne.height,ne.depth);if($e)i.texSubImage3D(e.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,ye,D,ne.data)}else i.texImage3D(e.TEXTURE_3D,0,ie,ne.width,ne.height,ne.depth,0,ye,D,ne.data);else if(b.isFramebufferTexture){if(we)if(me)i.texStorage2D(e.TEXTURE_2D,Ye,ie,ne.width,ne.height);else{let Pe=ne.width,Qe=ne.height;for(let ht=0;ht<Ye;ht++)i.texImage2D(e.TEXTURE_2D,ht,ie,Pe,Qe,0,ye,D,null),Pe>>=1,Qe>>=1}}else if(b.isHTMLTexture){if("texElementImage2D"in e){let Pe=e.canvas;if(!Pe.hasAttribute("layoutsubtree"))Pe.setAttribute("layoutsubtree","true");if(ne.parentNode!==Pe){Pe.appendChild(ne),f.add(b),Pe.onpaint=(Qe)=>{let ht=Qe.changedElements;for(let Ie of f)if(ht.includes(Ie.image))Ie.needsUpdate=!0},Pe.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,ne);else{let{RGBA:ht,RGBA:Ie,UNSIGNED_BYTE:Pt}=e;e.texElementImage2D(e.TEXTURE_2D,0,ht,Ie,Pt,ne)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(pe.length>0){if(me&&we){let Pe=ai(pe[0]);i.texStorage2D(e.TEXTURE_2D,Ye,ie,Pe.width,Pe.height)}for(let Pe=0,Qe=pe.length;Pe<Qe;Pe++)if(K=pe[Pe],me){if($e)i.texSubImage2D(e.TEXTURE_2D,Pe,0,0,ye,D,K)}else i.texImage2D(e.TEXTURE_2D,Pe,ie,ye,D,K);b.generateMipmaps=!1}else if(me){if(we){let Pe=ai(ne);i.texStorage2D(e.TEXTURE_2D,Ye,ie,Pe.width,Pe.height)}if($e)i.texSubImage2D(e.TEXTURE_2D,0,0,0,ye,D,ne)}else i.texImage2D(e.TEXTURE_2D,0,ie,ye,D,ne);if(y(b)&&b.mipmapsAutoUpdate===!0)S(ce);if(Se.__version=xe.version,b.onUpdate)b.onUpdate(b)}C.__version=b.version}function Ue(C,b,G){if(b.image.length!==6)return;let ce=re(C,b),oe=b.source;i.bindTexture(e.TEXTURE_CUBE_MAP,C.__webglTexture,e.TEXTURE0+G);let xe=n.get(oe);if(oe.version!==xe.__version||ce===!0){i.activeTexture(e.TEXTURE0+G);let Se=tt.getPrimaries(tt.workingColorSpace),J=b.colorSpace===dn?null:tt.getPrimaries(b.colorSpace),ne=b.colorSpace===dn||Se===J?e.NONE:e.BROWSER_DEFAULT_WEBGL;i.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(e.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,ne);let ye=b.isCompressedTexture||b.image[0].isCompressedTexture,D=b.image[0]&&b.image[0].isDataTexture,ie=[];for(let Ie=0;Ie<6;Ie++){if(!ye&&!D)ie[Ie]=v(b.image[Ie],!0,r.maxCubemapSize);else ie[Ie]=D?b.image[Ie].image:b.image[Ie];ie[Ie]=nt(b,ie[Ie])}let K=ie[0],pe=s.convert(b.format,b.colorSpace),me=s.convert(b.type),we=w(b.internalFormat,pe,me,b.normalized,b.colorSpace),$e=b.isVideoTexture!==!0,Ye=xe.__version===void 0||ce===!0,Pe=oe.dataReady,Qe=M(b,K);rt(e.TEXTURE_CUBE_MAP,b);let ht;if(b.isDepthTexture){if(we=x(b.format===en,b.type),Ye)if($e)i.texStorage2D(e.TEXTURE_CUBE_MAP,1,we,K.width,K.height);else for(let Ie=0;Ie<6;Ie++)i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,0,we,K.width,K.height,0,pe,me,null)}else if(ye){if($e&&Ye)i.texStorage2D(e.TEXTURE_CUBE_MAP,Qe,we,K.width,K.height);for(let Ie=0;Ie<6;Ie++){ht=ie[Ie].mipmaps;for(let Pt=0;Pt<ht.length;Pt++){let mi=ht[Pt];if(b.format!==xi)if(pe!==null)if($e){if(Pe)i.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,Pt,0,0,mi.width,mi.height,pe,mi.data)}else i.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,Pt,we,mi.width,mi.height,0,mi.data);else ge("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()");else if($e){if(Pe)i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,Pt,0,0,mi.width,mi.height,pe,me,mi.data)}else i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,Pt,we,mi.width,mi.height,0,pe,me,mi.data)}}}else{if(ht=b.mipmaps,$e&&Ye){if(ht.length>0)Qe++;let Ie=ai(ie[0]);i.texStorage2D(e.TEXTURE_CUBE_MAP,Qe,we,Ie.width,Ie.height)}for(let Ie=0;Ie<6;Ie++)if(D){if($e){if(Pe)i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,0,0,0,ie[Ie].width,ie[Ie].height,pe,me,ie[Ie].data)}else i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,0,we,ie[Ie].width,ie[Ie].height,0,pe,me,ie[Ie].data);for(let Pt=0;Pt<ht.length;Pt++){let Xn=ht[Pt].image[Ie].image;if($e){if(Pe)i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,Pt+1,0,0,Xn.width,Xn.height,pe,me,Xn.data)}else i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,Pt+1,we,Xn.width,Xn.height,0,pe,me,Xn.data)}}else{if($e){if(Pe)i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,0,0,0,pe,me,ie[Ie])}else i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,0,we,pe,me,ie[Ie]);for(let Pt=0;Pt<ht.length;Pt++){let mi=ht[Pt];if($e){if(Pe)i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,Pt+1,0,0,pe,me,mi.image[Ie])}else i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,Pt+1,we,pe,me,mi.image[Ie])}}}if(y(b)&&b.mipmapsAutoUpdate===!0)S(e.TEXTURE_CUBE_MAP);if(xe.__version=oe.version,b.onUpdate)b.onUpdate(b)}C.__version=b.version}function Ke(C,b,G,ce,oe,xe){let Se=s.convert(G.format,G.colorSpace),J=s.convert(G.type),ne=w(G.internalFormat,Se,J,G.normalized,G.colorSpace),ye=n.get(b),D=n.get(G);if(D.__renderTarget=b,!ye.__hasExternalTextures){let ie=Math.max(1,b.width>>xe),K=Math.max(1,b.height>>xe);if(oe===e.TEXTURE_3D||oe===e.TEXTURE_2D_ARRAY)i.texImage3D(oe,xe,ne,ie,K,b.depth,0,Se,J,null);else i.texImage2D(oe,xe,ne,ie,K,0,Se,J,null)}if(i.bindFramebuffer(e.FRAMEBUFFER,C),Rt(b))a.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,ce,oe,D.__webglTexture,0,Ae(b));else if(oe===e.TEXTURE_2D||oe>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&oe<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)e.framebufferTexture2D(e.FRAMEBUFFER,ce,oe,D.__webglTexture,xe);i.bindFramebuffer(e.FRAMEBUFFER,null)}function Ve(C,b,G){if(e.bindRenderbuffer(e.RENDERBUFFER,C),b.depthBuffer){let ce=b.depthTexture,oe=ce&&ce.isDepthTexture?ce.type:null,xe=x(b.stencilBuffer,oe),Se=b.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(Rt(b))a.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Ae(b),xe,b.width,b.height);else if(G)e.renderbufferStorageMultisample(e.RENDERBUFFER,Ae(b),xe,b.width,b.height);else e.renderbufferStorage(e.RENDERBUFFER,xe,b.width,b.height);e.framebufferRenderbuffer(e.FRAMEBUFFER,Se,e.RENDERBUFFER,C)}else{let ce=b.textures;for(let oe=0;oe<ce.length;oe++){let xe=ce[oe],Se=s.convert(xe.format,xe.colorSpace),J=s.convert(xe.type),ne=w(xe.internalFormat,Se,J,xe.normalized,xe.colorSpace);if(Rt(b))a.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Ae(b),ne,b.width,b.height);else if(G)e.renderbufferStorageMultisample(e.RENDERBUFFER,Ae(b),ne,b.width,b.height);else e.renderbufferStorage(e.RENDERBUFFER,ne,b.width,b.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function lt(C,b,G){let ce=b.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(e.FRAMEBUFFER,C),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let oe=n.get(b.depthTexture);oe.__renderTarget=b;let xe=ce?b.depthTexture.image[0]:b.depthTexture.image;if(!oe.__webglTexture||xe.width!==b.width||xe.height!==b.height)xe.width=b.width,xe.height=b.height,b.depthTexture.needsUpdate=!0;if(ce)Te(b.depthTexture,0);else ve(b.depthTexture,0);let Se=oe.__webglTexture,J=Ae(b),ne=ce?e.TEXTURE_CUBE_MAP_POSITIVE_X+G:e.TEXTURE_2D,ye=b.depthTexture.format===en?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(b.depthTexture.format===Xi)if(Rt(b))a.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,ye,ne,Se,0,J);else e.framebufferTexture2D(e.FRAMEBUFFER,ye,ne,Se,0);else if(b.depthTexture.format===en)if(Rt(b))a.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,ye,ne,Se,0,J);else e.framebufferTexture2D(e.FRAMEBUFFER,ye,ne,Se,0);else throw Error("THREE.WebGLTextures: Unknown depthTexture format.")}function dt(C){let b=n.get(C),G=C.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==C.depthTexture){let ce=C.depthTexture;if(b.__depthDisposeCallback)b.__depthDisposeCallback();if(ce){let oe=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,ce.removeEventListener("dispose",oe)};ce.addEventListener("dispose",oe),b.__depthDisposeCallback=oe}b.__boundDepthTexture=ce}if(C.depthTexture&&!b.__autoAllocateDepthBuffer)if(G)for(let ce=0;ce<6;ce++)lt(b.__webglFramebuffer[ce],C,ce);else if(C.texture.mipmaps.length>0)lt(b.__webglFramebuffer[0],C,0);else lt(b.__webglFramebuffer,C,0);else if(G){b.__webglDepthbuffer=[];for(let ce=0;ce<6;ce++)if(i.bindFramebuffer(e.FRAMEBUFFER,b.__webglFramebuffer[ce]),b.__webglDepthbuffer[ce]===void 0)b.__webglDepthbuffer[ce]=e.createRenderbuffer(),Ve(b.__webglDepthbuffer[ce],C,!1);else{let oe=C.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,xe=b.__webglDepthbuffer[ce];e.bindRenderbuffer(e.RENDERBUFFER,xe),e.framebufferRenderbuffer(e.FRAMEBUFFER,oe,e.RENDERBUFFER,xe)}}else{if(C.texture.mipmaps.length>0)i.bindFramebuffer(e.FRAMEBUFFER,b.__webglFramebuffer[0]);else i.bindFramebuffer(e.FRAMEBUFFER,b.__webglFramebuffer);if(b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=e.createRenderbuffer(),Ve(b.__webglDepthbuffer,C,!1);else{let oe=C.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,xe=b.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,xe),e.framebufferRenderbuffer(e.FRAMEBUFFER,oe,e.RENDERBUFFER,xe)}}i.bindFramebuffer(e.FRAMEBUFFER,null)}function Et(C,b,G){let ce=n.get(C);if(b!==void 0)Ke(ce.__webglFramebuffer,C,C.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0);if(G!==void 0)dt(C)}function B(C){let b=C.texture,G=n.get(C),ce=n.get(b);C.addEventListener("dispose",O),R(C);let oe=C.textures,xe=C.isWebGLCubeRenderTarget===!0,Se=oe.length>1;if(!Se){if(ce.__webglTexture===void 0)ce.__webglTexture=e.createTexture();ce.__version=b.version,o.memory.textures++}if(xe){G.__webglFramebuffer=[];for(let J=0;J<6;J++)if(b.mipmaps.length>0){G.__webglFramebuffer[J]=[];for(let ne=0;ne<b.mipmaps.length;ne++)G.__webglFramebuffer[J][ne]=e.createFramebuffer()}else G.__webglFramebuffer[J]=e.createFramebuffer()}else{if(b.mipmaps.length>0){G.__webglFramebuffer=[];for(let J=0;J<b.mipmaps.length;J++)G.__webglFramebuffer[J]=e.createFramebuffer()}else G.__webglFramebuffer=e.createFramebuffer();if(Se)for(let J=0,ne=oe.length;J<ne;J++){let ye=n.get(oe[J]);if(ye.__webglTexture===void 0)ye.__webglTexture=e.createTexture(),o.memory.textures++}if(C.samples>0&&Rt(C)===!1){G.__webglMultisampledFramebuffer=e.createFramebuffer(),G.__webglColorRenderbuffer=[],i.bindFramebuffer(e.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let J=0;J<oe.length;J++){let ne=oe[J];G.__webglColorRenderbuffer[J]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,G.__webglColorRenderbuffer[J]);let ye=s.convert(ne.format,ne.colorSpace),D=s.convert(ne.type),ie=w(ne.internalFormat,ye,D,ne.normalized,ne.colorSpace,C.isXRRenderTarget===!0),K=Ae(C);e.renderbufferStorageMultisample(e.RENDERBUFFER,K,ie,C.width,C.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+J,e.RENDERBUFFER,G.__webglColorRenderbuffer[J])}if(e.bindRenderbuffer(e.RENDERBUFFER,null),C.depthBuffer)G.__webglDepthRenderbuffer=e.createRenderbuffer(),Ve(G.__webglDepthRenderbuffer,C,!0);i.bindFramebuffer(e.FRAMEBUFFER,null)}}if(xe){i.bindTexture(e.TEXTURE_CUBE_MAP,ce.__webglTexture),rt(e.TEXTURE_CUBE_MAP,b);for(let J=0;J<6;J++)if(b.mipmaps.length>0)for(let ne=0;ne<b.mipmaps.length;ne++)Ke(G.__webglFramebuffer[J][ne],C,b,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+J,ne);else Ke(G.__webglFramebuffer[J],C,b,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+J,0);if(y(b))S(e.TEXTURE_CUBE_MAP);else if(b.mipmaps.length>0)e.texParameteri(e.TEXTURE_CUBE_MAP,e.TEXTURE_MAX_LEVEL,b.mipmaps.length-1);i.unbindTexture()}else if(Se){for(let J=0,ne=oe.length;J<ne;J++){let ye=oe[J],D=n.get(ye),ie=e.TEXTURE_2D;if(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)ie=C.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY;if(i.bindTexture(ie,D.__webglTexture),rt(ie,ye),Ke(G.__webglFramebuffer,C,ye,e.COLOR_ATTACHMENT0+J,ie,0),y(ye))S(ie)}i.unbindTexture()}else{let J=e.TEXTURE_2D;if(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)J=C.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY;if(i.bindTexture(J,ce.__webglTexture),rt(J,b),b.mipmaps.length>0)for(let ne=0;ne<b.mipmaps.length;ne++)Ke(G.__webglFramebuffer[ne],C,b,e.COLOR_ATTACHMENT0,J,ne);else Ke(G.__webglFramebuffer,C,b,e.COLOR_ATTACHMENT0,J,0);if(y(b))S(J);else if(b.mipmaps.length>0)e.texParameteri(J,e.TEXTURE_MAX_LEVEL,b.mipmaps.length-1);i.unbindTexture()}if(C.depthBuffer)dt(C)}function oi(C){let b=C.textures;for(let G=0,ce=b.length;G<ce;G++){let oe=b[G];if(y(oe)&&oe.mipmapsAutoUpdate===!0){let xe=E(C),Se=n.get(oe).__webglTexture;i.bindTexture(xe,Se),S(xe),i.unbindTexture()}}}let ct=[];function jt(C){if(C.samples>0){if(Rt(C)===!1){let{textures:b,width:G,height:ce}=C,oe=e.COLOR_BUFFER_BIT,xe=C.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,Se=n.get(C),J=b.length>1;if(J)for(let ye=0;ye<b.length;ye++)i.bindFramebuffer(e.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+ye,e.RENDERBUFFER,null),i.bindFramebuffer(e.FRAMEBUFFER,Se.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+ye,e.TEXTURE_2D,null,0);if(i.bindFramebuffer(e.READ_FRAMEBUFFER,Se.__webglMultisampledFramebuffer),C.texture.mipmaps.length>0)i.bindFramebuffer(e.DRAW_FRAMEBUFFER,Se.__webglFramebuffer[0]);else i.bindFramebuffer(e.DRAW_FRAMEBUFFER,Se.__webglFramebuffer);for(let ye=0;ye<b.length;ye++){if(C.resolveDepthBuffer){if(C.depthBuffer)oe|=e.DEPTH_BUFFER_BIT;if(C.stencilBuffer&&C.resolveStencilBuffer)oe|=e.STENCIL_BUFFER_BIT}if(J){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,Se.__webglColorRenderbuffer[ye]);let D=n.get(b[ye]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,D,0)}if(e.blitFramebuffer(0,0,G,ce,0,0,G,ce,oe,e.NEAREST),l===!0){if(ct.length=0,ct.push(e.COLOR_ATTACHMENT0+ye),C.depthBuffer&&C.storeMultisampledDepthBuffer===!1)ct.push(xe);e.invalidateFramebuffer(e.READ_FRAMEBUFFER,ct)}}if(i.bindFramebuffer(e.READ_FRAMEBUFFER,null),i.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),J)for(let ye=0;ye<b.length;ye++){i.bindFramebuffer(e.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+ye,e.RENDERBUFFER,Se.__webglColorRenderbuffer[ye]);let D=n.get(b[ye]).__webglTexture;i.bindFramebuffer(e.FRAMEBUFFER,Se.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+ye,e.TEXTURE_2D,D,0)}i.bindFramebuffer(e.DRAW_FRAMEBUFFER,Se.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&l){let b=C.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[b])}}}function Ae(C){return Math.min(r.maxSamples,C.samples)}function Rt(C){let b=n.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function je(C){let b=o.render.frame;if(h.get(C)!==b)h.set(C,b),C.update()}function nt(C,b){let{colorSpace:G,format:ce,type:oe}=C;if(C.isCompressedTexture===!0||C.isVideoTexture===!0)return b;if(G!==Xr&&G!==dn)if(tt.getTransfer(G)===pt){if(ce!==xi||oe!==ei)ge("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.")}else Fe("WebGLTextures: Unsupported texture color space:",G);return b}function ai(C){if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement)c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height;else if(typeof VideoFrame<"u"&&C instanceof VideoFrame)c.width=C.displayWidth,c.height=C.displayHeight;else c.width=C.width,c.height=C.height;return c}this.allocateTextureUnit=V,this.resetTextureUnits=X,this.getTextureUnits=Z,this.setTextureUnits=de,this.setTexture2D=ve,this.setTexture2DArray=Me,this.setTexture3D=Oe,this.setTextureCube=Te,this.rebindTextures=Et,this.setupRenderTarget=B,this.updateRenderTargetMipmap=oi,this.updateMultisampleRenderTarget=jt,this.setupDepthRenderbuffer=dt,this.setupFrameBufferTexture=Ke,this.useMultisampledRTT=Rt,this.dispose=q}function iu(e,t){function i(n,r=dn){let s,o=tt.getTransfer(r);if(n===ei)return e.UNSIGNED_BYTE;if(n===Cs)return e.UNSIGNED_SHORT_4_4_4_4;if(n===Ps)return e.UNSIGNED_SHORT_5_5_5_1;if(n===gl)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===xl)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===pl)return e.BYTE;if(n===ml)return e.SHORT;if(n===Jn)return e.UNSIGNED_SHORT;if(n===Rs)return e.INT;if(n===li)return e.UNSIGNED_INT;if(n===ti)return e.FLOAT;if(n===Wt)return e.HALF_FLOAT;if(n===_l)return e.ALPHA;if(n===yl)return e.RGB;if(n===xi)return e.RGBA;if(n===Xi)return e.DEPTH_COMPONENT;if(n===en)return e.DEPTH_STENCIL;if(n===Is)return e.RED;if(n===Hr)return e.RED_INTEGER;if(n===tn)return e.RG;if(n===Ls)return e.RG_INTEGER;if(n===Ds)return e.RGBA_INTEGER;if(n===Ns||n===Us||n===Fs||n===Bs)if(o===pt)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Ns)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Us)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Fs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Bs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Ns)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Us)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Fs)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Bs)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Xo||n===qo||n===Yo||n===Zo)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Xo)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===qo)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Yo)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Zo)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Jo||n===Ko||n===$o||n===Qo||n===jo||n===kr||n===ea)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Jo||n===Ko)return o===pt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===$o)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===Qo)return s.COMPRESSED_R11_EAC;if(n===jo)return s.COMPRESSED_SIGNED_R11_EAC;if(n===kr)return s.COMPRESSED_RG11_EAC;if(n===ea)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===ta||n===ia||n===na||n===ra||n===sa||n===oa||n===aa||n===la||n===ca||n===ha||n===ua||n===fa||n===da||n===pa)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===ta)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ia)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===na)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ra)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===sa)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===oa)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===aa)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===la)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ca)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ha)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ua)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===fa)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===da)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===pa)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ma||n===ga||n===xa)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===ma)return o===pt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ga)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===xa)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===_a||n===ya||n===Vr||n===va)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===_a)return s.COMPRESSED_RED_RGTC1_EXT;if(n===ya)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Vr)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===va)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;if(n===Tn)return e.UNSIGNED_INT_24_8;return e[n]!==void 0?e[n]:null}return{convert:i}}var bv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ev=`
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

}`;class nu{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new ao(e.texture);if(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)this.depthNear=e.depthNear,this.depthFar=e.depthFar;this.texture=i}}getMesh(e){if(this.texture!==null){if(this.mesh===null){let t=e.cameras[0].viewport,i=new Xt({vertexShader:bv,fragmentShader:Ev,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ee(new Ft(20,20),i)}}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class ru extends ci{constructor(e,t){super();let i=this,n=null,r=1,s=null,o="local-floor",a=1,l=null,c=null,h=null,f=null,u=null,p=null,g=typeof XRWebGLBinding<"u",_=new nu,m={},d=t.getContextAttributes(),v=null,y=null,S=[],E=[],w=new k,x=null,M=null,R=new Qt;R.viewport=new St;let U=new Qt;U.viewport=new St;let I=[R,U],O=new Tc,te=null,P=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let j=S[V];if(j===void 0)j=new qs,S[V]=j;return j.getTargetRaySpace()},this.getControllerGrip=function(V){let j=S[V];if(j===void 0)j=new qs,S[V]=j;return j.getGripSpace()},this.getHand=function(V){let j=S[V];if(j===void 0)j=new qs,S[V]=j;return j.getHandSpace()};function q(V){let j=E.indexOf(V.inputSource);if(j===-1)return;let ve=S[j];if(ve!==void 0)ve.update(V.inputSource,V.frame,l||s),ve.dispatchEvent({type:V.type,data:V.inputSource})}function L(){n.removeEventListener("select",q),n.removeEventListener("selectstart",q),n.removeEventListener("selectend",q),n.removeEventListener("squeeze",q),n.removeEventListener("squeezestart",q),n.removeEventListener("squeezeend",q),n.removeEventListener("end",L),n.removeEventListener("inputsourceschange",N);for(let V=0;V<S.length;V++){let j=E[V];if(j===null)continue;E[V]=null,S[V].disconnect(j)}te=null,P=null,_.reset();for(let V in m)delete m[V];if(e.setRenderTarget(v),u=null,f=null,h=null,n=null,y=null,de.stop(),i.isPresenting=!1,e.setPixelRatio(x),e.setSize(w.width,w.height,!1),M!==null){let V=M.camera;V.fov=M.fov,V.zoom=M.zoom,V.updateProjectionMatrix(),M=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){if(r=V,i.isPresenting===!0)ge("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){if(o=V,i.isPresenting===!0)ge("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||s},this.setReferenceSpace=function(V){l=V},this.getBaseLayer=function(){return f!==null?f:u},this.getBinding=function(){if(h===null&&g)h=new XRWebGLBinding(n,t);return h},this.getFrame=function(){return p},this.getSession=function(){return n},this.setSession=async function(V){if(n=V,n!==null){if(v=e.getRenderTarget(),n.addEventListener("select",q),n.addEventListener("selectstart",q),n.addEventListener("selectend",q),n.addEventListener("squeeze",q),n.addEventListener("squeezestart",q),n.addEventListener("squeezeend",q),n.addEventListener("end",L),n.addEventListener("inputsourceschange",N),d.xrCompatible!==!0)await t.makeXRCompatible();if(x=e.getPixelRatio(),e.getSize(w),!(g&&("createProjectionLayer"in XRWebGLBinding.prototype))){let ve={antialias:d.antialias,alpha:!0,depth:d.depth,stencil:d.stencil,framebufferScaleFactor:r};u=new XRWebGLLayer(n,t,ve),n.updateRenderState({baseLayer:u}),e.setPixelRatio(1),e.setSize(u.framebufferWidth,u.framebufferHeight,!1),y=new Gt(u.framebufferWidth,u.framebufferHeight,{format:xi,type:ei,colorSpace:e.outputColorSpace,stencilBuffer:d.stencil,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let ve=null,Me=null,Oe=null;if(d.depth)Oe=d.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ve=d.stencil?en:Xi,Me=d.stencil?Tn:li;let Te={colorFormat:t.RGBA8,depthFormat:Oe,scaleFactor:r};h=this.getBinding(),f=h.createProjectionLayer(Te),n.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),y=new Gt(f.textureWidth,f.textureHeight,{format:xi,type:ei,depthTexture:new on(f.textureWidth,f.textureHeight,Me,void 0,void 0,void 0,void 0,void 0,void 0,ve),stencilBuffer:d.stencil,colorSpace:e.outputColorSpace,samples:d.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(a),l=null,s=await n.requestReferenceSpace(o),de.setContext(n),de.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function N(V){for(let j=0;j<V.removed.length;j++){let ve=V.removed[j],Me=E.indexOf(ve);if(Me>=0)E[Me]=null,S[Me].disconnect(ve)}for(let j=0;j<V.added.length;j++){let ve=V.added[j],Me=E.indexOf(ve);if(Me===-1){for(let Te=0;Te<S.length;Te++)if(Te>=E.length){E.push(ve),Me=Te;break}else if(E[Te]===null){E[Te]=ve,Me=Te;break}if(Me===-1)break}let Oe=S[Me];if(Oe)Oe.connect(ve)}}function Q(V,j){if(j===null)V.matrixWorld.copy(V.matrix);else V.matrixWorld.multiplyMatrices(j.matrixWorld,V.matrix);V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(n===null)return;let{near:j,far:ve}=V;if(_.texture!==null){if(_.depthNear>0)j=_.depthNear;if(_.depthFar>0)ve=_.depthFar}if(O.near=U.near=R.near=j,O.far=U.far=R.far=ve,te!==O.near||P!==O.far)n.updateRenderState({depthNear:O.near,depthFar:O.far}),te=O.near,P=O.far;O.layers.mask=V.layers.mask|6,R.layers.mask=O.layers.mask&-5,U.layers.mask=O.layers.mask&-3;let Me=V.parent,Oe=O.cameras;Q(O,Me);for(let Te=0;Te<Oe.length;Te++)Q(Oe[Te],Me);if(O.projectionMatrix.copy(R.projectionMatrix),O.projectionMatrixInverse.copy(R.projectionMatrixInverse),M===null&&V.isPerspectiveCamera)M={camera:V,fov:V.fov,zoom:V.zoom};z(V,O,Me)};function z(V,j,ve){if(ve===null)V.matrix.copy(j.matrixWorld);else V.matrix.copy(ve.matrixWorld),V.matrix.invert(),V.matrix.multiply(j.matrixWorld);if(V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy(j.projectionMatrix),V.projectionMatrixInverse.copy(j.projectionMatrixInverse),V.isPerspectiveCamera)V.fov=zs*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1}this.getCamera=function(){return O},this.getFoveation=function(){if(f===null&&u===null)return;return a},this.setFoveation=function(V){if(a=V,f!==null)f.fixedFoveation=V;if(u!==null&&u.fixedFoveation!==void 0)u.fixedFoveation=V},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(O)},this.getCameraTexture=function(V){return m[V]};let X=null;function Z(V,j){if(c=j.getViewerPose(l||s),p=j,c!==null){let ve=c.views;if(u!==null)e.setRenderTargetFramebuffer(y,u.framebuffer),e.setRenderTarget(y);let Me=!1;if(ve.length!==O.cameras.length)O.cameras.length=0,Me=!0;for(let De=0;De<ve.length;De++){let Ne=ve[De],rt=null;if(u!==null)rt=u.getViewport(Ne);else{let he=h.getViewSubImage(f,Ne);if(rt=he.viewport,De===0)e.setRenderTargetTextures(y,he.colorTexture,he.depthStencilTexture),e.setRenderTarget(y)}let re=I[De];if(re===void 0)re=new Qt,re.layers.enable(De),re.viewport=new St,I[De]=re;if(re.matrix.fromArray(Ne.transform.matrix),re.matrix.decompose(re.position,re.quaternion,re.scale),re.projectionMatrix.fromArray(Ne.projectionMatrix),re.projectionMatrixInverse.copy(re.projectionMatrix).invert(),re.viewport.set(rt.x,rt.y,rt.width,rt.height),De===0)O.matrix.copy(re.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale);if(Me===!0)O.cameras.push(re)}let Oe=n.enabledFeatures;if(Oe&&Oe.includes("depth-sensing")&&n.depthUsage=="gpu-optimized"&&g){h=i.getBinding();let De=h.getDepthInformation(ve[0]);if(De&&De.isValid&&De.texture)_.init(De,n.renderState)}if(Oe&&Oe.includes("camera-access")&&g){e.state.unbindTexture(),h=i.getBinding();for(let De=0;De<ve.length;De++){let Ne=ve[De].camera;if(Ne){let rt=m[Ne];if(!rt)rt=new ao,m[Ne]=rt;let re=h.getCameraImage(Ne);rt.sourceTexture=re}}}}for(let ve=0;ve<S.length;ve++){let Me=E[ve],Oe=S[ve];if(Me!==null&&Oe!==void 0)Oe.update(Me,j,l||s)}if(X)X(V,j);if(j.detectedPlanes)i.dispatchEvent({type:"planesdetected",data:j});p=null}let de=new Rc;de.setAnimationLoop(Z),this.setAnimationLoop=function(V){X=V},this.dispose=function(){}}}var Tv=new Xe,rg=new Je;rg.set(-1,0,0,0,1,0,0,0,1);function sg(e,t){function i(m,d){if(m.matrixAutoUpdate===!0)m.updateMatrix();d.value.copy(m.matrix)}function n(m,d){if(d.color.getRGB(m.fogColor.value,pc(e)),d.isFog)m.fogNear.value=d.near,m.fogFar.value=d.far;else if(d.isFogExp2)m.fogDensity.value=d.density}function r(m,d,v,y,S){if(d.isNodeMaterial)d.uniformsNeedUpdate=!1;else if(d.isMeshBasicMaterial)s(m,d);else if(d.isMeshLambertMaterial){if(s(m,d),d.envMap)m.envMapIntensity.value=d.envMapIntensity}else if(d.isMeshToonMaterial)s(m,d),f(m,d);else if(d.isMeshPhongMaterial){if(s(m,d),h(m,d),d.envMap)m.envMapIntensity.value=d.envMapIntensity}else if(d.isMeshStandardMaterial){if(s(m,d),u(m,d),d.isMeshPhysicalMaterial)p(m,d,S)}else if(d.isMeshMatcapMaterial)s(m,d),g(m,d);else if(d.isMeshDepthMaterial)s(m,d);else if(d.isMeshDistanceMaterial)s(m,d),_(m,d);else if(d.isMeshNormalMaterial)s(m,d);else if(d.isLineBasicMaterial){if(o(m,d),d.isLineDashedMaterial)a(m,d)}else if(d.isPointsMaterial)l(m,d,v,y);else if(d.isSpriteMaterial)c(m,d);else if(d.isShadowMaterial)m.color.value.copy(d.color),m.opacity.value=d.opacity;else if(d.isShaderMaterial)d.uniformsNeedUpdate=!1}function s(m,d){if(m.opacity.value=d.opacity,d.color)m.diffuse.value.copy(d.color);if(d.emissive)m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity);if(d.map)m.map.value=d.map,i(d.map,m.mapTransform);if(d.alphaMap)m.alphaMap.value=d.alphaMap,i(d.alphaMap,m.alphaMapTransform);if(d.bumpMap){if(m.bumpMap.value=d.bumpMap,i(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===Nt)m.bumpScale.value*=-1}if(d.normalMap){if(m.normalMap.value=d.normalMap,i(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===Nt)m.normalScale.value.negate()}if(d.displacementMap)m.displacementMap.value=d.displacementMap,i(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias;if(d.emissiveMap)m.emissiveMap.value=d.emissiveMap,i(d.emissiveMap,m.emissiveMapTransform);if(d.specularMap)m.specularMap.value=d.specularMap,i(d.specularMap,m.specularMapTransform);if(d.alphaTest>0)m.alphaTest.value=d.alphaTest;let v=t.get(d),{envMap:y,envMapRotation:S}=v;if(y){if(m.envMap.value=y,m.envMapRotation.value.setFromMatrix4(Tv.makeRotationFromEuler(S)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1)m.envMapRotation.value.premultiply(rg);m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio}if(d.lightMap)m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,i(d.lightMap,m.lightMapTransform);if(d.aoMap)m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,i(d.aoMap,m.aoMapTransform)}function o(m,d){if(m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map)m.map.value=d.map,i(d.map,m.mapTransform)}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,v,y){if(m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*v,m.scale.value=y*0.5,d.map)m.map.value=d.map,i(d.map,m.uvTransform);if(d.alphaMap)m.alphaMap.value=d.alphaMap,i(d.alphaMap,m.alphaMapTransform);if(d.alphaTest>0)m.alphaTest.value=d.alphaTest}function c(m,d){if(m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map)m.map.value=d.map,i(d.map,m.mapTransform);if(d.alphaMap)m.alphaMap.value=d.alphaMap,i(d.alphaMap,m.alphaMapTransform);if(d.alphaTest>0)m.alphaTest.value=d.alphaTest}function h(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,0.0001)}function f(m,d){if(d.gradientMap)m.gradientMap.value=d.gradientMap}function u(m,d){if(m.metalness.value=d.metalness,d.metalnessMap)m.metalnessMap.value=d.metalnessMap,i(d.metalnessMap,m.metalnessMapTransform);if(m.roughness.value=d.roughness,d.roughnessMap)m.roughnessMap.value=d.roughnessMap,i(d.roughnessMap,m.roughnessMapTransform);if(d.envMap)m.envMapIntensity.value=d.envMapIntensity}function p(m,d,v){if(m.ior.value=d.ior,d.diffuseRoughness>0){if(m.diffuseRoughness.value=d.diffuseRoughness,d.diffuseRoughnessMap)m.diffuseRoughnessMap.value=d.diffuseRoughnessMap,i(d.diffuseRoughnessMap,m.diffuseRoughnessMapTransform)}if(d.sheen>0){if(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap)m.sheenColorMap.value=d.sheenColorMap,i(d.sheenColorMap,m.sheenColorMapTransform);if(d.sheenRoughnessMap)m.sheenRoughnessMap.value=d.sheenRoughnessMap,i(d.sheenRoughnessMap,m.sheenRoughnessMapTransform)}if(d.clearcoat>0){if(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap)m.clearcoatMap.value=d.clearcoatMap,i(d.clearcoatMap,m.clearcoatMapTransform);if(d.clearcoatRoughnessMap)m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,i(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform);if(d.clearcoatNormalMap){if(m.clearcoatNormalMap.value=d.clearcoatNormalMap,i(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Nt)m.clearcoatNormalScale.value.negate()}}if(d.dispersion>0)m.dispersion.value=d.dispersion;if(d.retroreflectivity>0)m.retroreflectivity.value=d.retroreflectivity;if(d.iridescence>0){if(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=d.iridescenceThicknessMaximum,d.iridescenceMap)m.iridescenceMap.value=d.iridescenceMap,i(d.iridescenceMap,m.iridescenceMapTransform);if(d.iridescenceThicknessMap)m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,i(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform)}if(d.transmission>0){if(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),d.transmissionMap)m.transmissionMap.value=d.transmissionMap,i(d.transmissionMap,m.transmissionMapTransform);if(m.thickness.value=d.thickness,d.thicknessMap)m.thicknessMap.value=d.thicknessMap,i(d.thicknessMap,m.thicknessMapTransform);m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)}if(d.anisotropy>0){if(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap)m.anisotropyMap.value=d.anisotropyMap,i(d.anisotropyMap,m.anisotropyMapTransform)}if(m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap)m.specularColorMap.value=d.specularColorMap,i(d.specularColorMap,m.specularColorMapTransform);if(d.specularIntensityMap)m.specularIntensityMap.value=d.specularIntensityMap,i(d.specularIntensityMap,m.specularIntensityMapTransform)}function g(m,d){if(d.matcap)m.matcap.value=d.matcap}function _(m,d){let v=t.get(d).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function og(e,t,i,n){let r={},s={};function o(v,y){let S=y.program;n.uniformBlockBinding(v,S,r[v.id])}function a(v,y){let S=r[v.id];if(S===void 0)g(v),S=l(v),r[v.id]=S,v.addEventListener("dispose",m);let E=y.program;n.updateUBOMapping(v,E);let w=t.render.frame;if(s[v.id]!==w)c(v),s[v.id]=w}function l(v){let y=e.createBuffer(),{__size:S,usage:E}=v;return e.bindBuffer(e.UNIFORM_BUFFER,y),e.bufferData(e.UNIFORM_BUFFER,S,E),e.bindBuffer(e.UNIFORM_BUFFER,null),y}function c(v){let y=r[v.id],{uniforms:S,__cache:E}=v;e.bindBuffer(e.UNIFORM_BUFFER,y);for(let w=0,x=S.length;w<x;w++){let M=S[w];if(Array.isArray(M))for(let R=0,U=M.length;R<U;R++)h(M[R],w,R,E);else h(M,w,0,E)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function h(v,y,S,E){if(u(v,y,S,E)===!0){let{__offset:w,value:x}=v;if(Array.isArray(x)){let M=0;for(let R=0;R<x.length;R++){let U=x[R],I=_(U,!0);f(U,v.__data,M),M+=I.storage/Float32Array.BYTES_PER_ELEMENT}}else f(x,v.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,w,v.__data)}}function f(v,y,S){if(typeof v==="number"||typeof v==="boolean")y[S]=v;else if(v.isMatrix3)y[S]=v.elements[0],y[S+1]=v.elements[1],y[S+2]=v.elements[2],y[S+3]=0,y[S+4]=v.elements[3],y[S+5]=v.elements[4],y[S+6]=v.elements[5],y[S+7]=0,y[S+8]=v.elements[6],y[S+9]=v.elements[7],y[S+10]=v.elements[8],y[S+11]=0;else if(ArrayBuffer.isView(v))y.set(v.subarray(0,y.length-S),S);else v.toArray(y,S)}function u(v,y,S,E){let w=v.value,x=y+"_"+S;if(Array.isArray(w)){if(E[x]===void 0)E[x]=[];let M=E[x],R=!1;for(let U=0;U<w.length;U++)if(p(w[U],M,U)===!0)R=!0;return R}return p(w,E,x)}function p(v,y,S){if(y[S]===void 0){if(typeof v==="number"||typeof v==="boolean")y[S]=v;else if(ArrayBuffer.isView(v))y[S]=v.slice();else y[S]=v.clone();return!0}else{let E=y[S];if(typeof v==="number"||typeof v==="boolean"){if(E!==v)return y[S]=v,!0}else if(ArrayBuffer.isView(v))return!0;else if(E.equals(v)===!1)return E.copy(v),!0}return!1}function g(v){let y=v.uniforms,S=0,E=16;for(let x=0,M=y.length;x<M;x++){let R=Array.isArray(y[x])?y[x]:[y[x]];for(let U=0,I=R.length;U<I;U++){let O=R[U],te=Array.isArray(O.value)?O.value:[O.value],P=Array.isArray(y[x])||Array.isArray(O.value),q=S;for(let N=0,Q=te.length;N<Q;N++){let z=te[N],X=_(z,P),Z=S%E,de=Z%X.boundary,V=Z+de;if(S+=de,V!==0&&E-V<X.storage)S+=E-V;if(N===0)q=S;S+=X.storage}let L=O.type==="int"?Int32Array:O.type==="uint"?Uint32Array:Float32Array;O.__data=new L((S-q)/Float32Array.BYTES_PER_ELEMENT),O.__offset=q}}let w=S%E;if(w>0)S+=E-w;return v.__size=S,v.__cache={},this}function _(v,y){let S={boundary:0,storage:0};if(typeof v==="number"||typeof v==="boolean")S.boundary=4,S.storage=4;else if(v.isVector2)S.boundary=8,S.storage=8;else if(v.isVector3||v.isColor)S.boundary=16,S.storage=12;else if(v.isVector4)S.boundary=16,S.storage=16;else if(v.isMatrix3)S.boundary=16,S.storage=48;else if(v.isMatrix4)S.boundary=16,S.storage=64;else if(v.isTexture)ge("WebGLRenderer: Texture samplers can not be part of an uniforms group.");else if(ArrayBuffer.isView(v))S.boundary=16,S.storage=v.byteLength;else ge("WebGLRenderer: Unsupported uniform value type.",v);if(y===!0)S.boundary=16,S.storage=Math.ceil(S.storage/16)*16;return S}function m(v){let y=v.target;y.removeEventListener("dispose",m),e.deleteBuffer(r[y.id]),delete r[y.id],delete s[y.id]}function d(){for(let v in r)e.deleteBuffer(r[v]);r={},s={}}return{bind:o,update:a,dispose:d}}var wv=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Hn=null;function ag(){if(Hn===null)Hn=new Bn(wv,16,16,tn,Wt),Hn.name="DFG_LUT",Hn.minFilter=Vt,Hn.magFilter=Vt,Hn.wrapS=wi,Hn.wrapT=wi,Hn.generateMipmaps=!1,Hn.needsUpdate=!0;return Hn}class Dc{constructor(e={}){let{canvas:t=ah(),context:i=null,depth:n=!0,stencil:r=!1,alpha:s=!1,antialias:o=!1,premultipliedAlpha:a=!0,preserveDrawingBuffer:l=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:f=!1,outputBufferType:u=ei}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=s;let g=u,_=new Set([Ds,Ls,Hr]),m=new Set([ei,li,Jn,Tn,Cs,Ps]),d=new Uint32Array(4),v=new Int32Array(4),y={textures:[],min:[],max:[],resolution:[]},S=null,E=null,w=[],x=[],M=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ji,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,U=!1,I=null,O=null,te=null,P=null;this._outputColorSpace=wt;let q=0,L=0,N=null,Q=-1,z=null,X=new St,Z=new St,de=null,V=new ue(0),j=0,{width:ve,height:Me}=t,Oe=1,Te=null,ut=null,De=new St(0,0,ve,Me),Ne=new St(0,0,ve,Me),rt=!1,re=new gn,he=new so,fe=!1,Ce=!1,Ue=new Xe,Ke=new A,Ve=new St,lt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},dt=!1;function Et(){return N===null?Oe:1}let B=i;function oi(T,F){return t.getContext(T,F)}let ct,jt,Ae,Rt,je,nt,ai,C,b,G,ce,oe,xe,Se,J,ne,ye,D,ie,K,pe,me,we;try{let T={alpha:!0,depth:n,stencil:r,antialias:o,premultipliedAlpha:a,preserveDrawingBuffer:l,powerPreference:c,failIfMajorPerformanceCaveat:h};if("setAttribute"in t)t.setAttribute("data-engine",`three.js r${Do}`);if(t.addEventListener("webglcontextlost",Pe,!1),t.addEventListener("webglcontextrestored",Qe,!1),t.addEventListener("webglcontextcreationerror",ht,!1),B===null){if(B=oi("webgl2",T),B===null)if(oi("webgl2"))throw Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.");else throw Error("THREE.WebGLRenderer: Error creating WebGL context.")}$e()}catch(T){throw t.removeEventListener("webglcontextlost",Pe,!1),t.removeEventListener("webglcontextrestored",Qe,!1),t.removeEventListener("webglcontextcreationerror",ht,!1),Fe("WebGLRenderer: "+T.message),T}function $e(){if(ct=new p0(B),ct.init(),pe=new iu(B,ct),jt=new s0(B,ct,e,pe),Ae=new ig(B,ct),jt.reversedDepthBuffer&&f)Ae.buffers.depth.setReversed(!0);O=B.createFramebuffer(),te=B.createFramebuffer(),P=B.createFramebuffer(),Rt=new x0(B),je=new X0,nt=new ng(B,ct,Ae,je,jt,pe,Rt),ai=new d0(R),C=new Md(B),me=new n0(B,C),b=new m0(B,C,Rt,me),G=new y0(B,b,C,me,Rt),D=new _0(B,jt,nt),J=new o0(je),ce=new W0(R,ai,ct,jt,me,J),oe=new sg(R,je),xe=new Z0,Se=new $0(ct),ye=new i0(R,ai,Ae,G,p,a),ne=new tg(R,G,jt),we=new og(B,Rt,jt,Ae),ie=new r0(B,ct,Rt),K=new g0(B,ct,Rt),Rt.programs=ce.programs,R.capabilities=jt,R.extensions=ct,R.properties=je,R.renderLists=xe,R.shadowMap=ne,R.state=Ae,R.info=Rt}if(g!==ei)M=new v0(g,t.width,t.height,o,n,r);let Ye=new ru(R,B);this.xr=Ye,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){let T=ct.get("WEBGL_lose_context");if(T)T.loseContext()},this.forceContextRestore=function(){let T=ct.get("WEBGL_lose_context");if(T)T.restoreContext()},this.getPixelRatio=function(){return Oe},this.setPixelRatio=function(T){if(T===void 0)return;Oe=T,this.setSize(ve,Me,!1)},this.getSize=function(T){return T.set(ve,Me)},this.setSize=function(T,F,Y=!0){if(Ye.isPresenting){ge("WebGLRenderer: Can't change size while VR device is presenting.");return}if(ve=T,Me=F,t.width=Math.floor(T*Oe),t.height=Math.floor(F*Oe),Y===!0)t.style.width=T+"px",t.style.height=F+"px";if(M!==null)M.setSize(t.width,t.height);this.setViewport(0,0,T,F)},this.getDrawingBufferSize=function(T){return T.set(ve*Oe,Me*Oe).floor()},this.setDrawingBufferSize=function(T,F,Y){ve=T,Me=F,Oe=Y,t.width=Math.floor(T*Y),t.height=Math.floor(F*Y),this.setViewport(0,0,T,F)},this.setEffects=function(T){if(g===ei){Fe("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let F=0;F<T.length;F++)if(T[F].isOutputPass===!0){ge("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}M.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(X)},this.getViewport=function(T){return T.copy(De)},this.setViewport=function(T,F,Y,H){if(T.isVector4)De.set(T.x,T.y,T.z,T.w);else De.set(T,F,Y,H);Ae.viewport(X.copy(De).multiplyScalar(Et()).round())},this.getScissor=function(T){return T.copy(Ne)},this.setScissor=function(T,F,Y,H){if(T.isVector4)Ne.set(T.x,T.y,T.z,T.w);else Ne.set(T,F,Y,H);Ae.scissor(Z.copy(Ne).multiplyScalar(Et()).round())},this.getScissorTest=function(){return rt},this.setScissorTest=function(T){Ae.setScissorTest(rt=T)},this.setOpaqueSort=function(T){Te=T},this.setTransparentSort=function(T){ut=T},this.getClearColor=function(T){return T.copy(ye.getClearColor())},this.setClearColor=function(){ye.setClearColor(...arguments)},this.getClearAlpha=function(){return ye.getClearAlpha()},this.setClearAlpha=function(){ye.setClearAlpha(...arguments)},this.clear=function(T=!0,F=!0,Y=!0){let H=0;if(T){let W=!1;if(N!==null){let be=N.texture.format;W=_.has(be)}if(W){let be=N.texture.type,ze=m.has(be),Ee=ye.getClearColor(),Le=ye.getClearAlpha(),{r:We,g:st,b:xt}=Ee;if(ze)d[0]=We,d[1]=st,d[2]=xt,d[3]=Le,B.clearBufferuiv(B.COLOR,0,d);else v[0]=We,v[1]=st,v[2]=xt,v[3]=Le,B.clearBufferiv(B.COLOR,0,v)}else H|=B.COLOR_BUFFER_BIT}if(F)H|=B.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0);if(Y)H|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295);if(H!==0)B.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(T){T.setRenderer(this),I=T},this.dispose=function(){t.removeEventListener("webglcontextlost",Pe,!1),t.removeEventListener("webglcontextrestored",Qe,!1),t.removeEventListener("webglcontextcreationerror",ht,!1),ye.dispose(),xe.dispose(),Se.dispose(),nt.dispose(),je.dispose(),ai.dispose(),G.dispose(),b.dispose(),me.dispose(),we.dispose(),ce.dispose(),Ye.dispose(),Ye.removeEventListener("sessionstart",bu),Ye.removeEventListener("sessionend",Eu),Fr.stop()};function Pe(T){T.preventDefault(),Yr("WebGLRenderer: Context Lost."),U=!0}function Qe(){Yr("WebGLRenderer: Context Restored."),U=!1;let T=Rt.autoReset,F=ne.enabled,Y=ne.autoUpdate,H=ne.needsUpdate,W=ne.type;$e(),Rt.autoReset=T,ne.enabled=F,ne.autoUpdate=Y,ne.needsUpdate=H,ne.type=W}function ht(T){Fe("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Ie(T){let F=T.target;F.removeEventListener("dispose",Ie),Pt(F)}function Pt(T){mi(T),je.remove(T)}function mi(T){let F=je.get(T).programs;if(F!==void 0){if(F.forEach(function(Y){ce.releaseProgram(Y)}),T.isShaderMaterial)ce.releaseShaderCache(T)}}this.renderBufferDirect=function(T,F,Y,H,W,be){if(F===null)F=lt;let ze=W.isMesh&&W.matrixWorld.determinantAffine()<0,Ee=Xg(T,F,Y,H,W);Ae.setMaterial(H,ze);let Le=Y.index,We=1;if(H.wireframe===!0){if(Le=b.getWireframeAttribute(Y),Le===void 0)return;We=2}let st=Y.drawRange,xt=Y.attributes.position,Ge=st.start*We,_t=(st.start+st.count)*We;if(be!==null)Ge=Math.max(Ge,be.start*We),_t=Math.min(_t,(be.start+be.count)*We);if(Le!==null)Ge=Math.max(Ge,0),_t=Math.min(_t,Le.count);else if(xt!==void 0&&xt!==null)Ge=Math.max(Ge,0),_t=Math.min(_t,xt.count);let ii=_t-Ge;if(ii<0||ii===1/0)return;me.setup(W,H,Ee,Y,Le);let Bt,Dt=ie;if(Le!==null)Bt=C.get(Le),Dt=K,Dt.setIndex(Bt);if(W.isMesh)if(H.wireframe===!0)Ae.setLineWidth(H.wireframeLinewidth*Et()),Dt.setMode(B.LINES);else Dt.setMode(B.TRIANGLES);else if(W.isLine){let Li=H.linewidth;if(Li===void 0)Li=1;if(Ae.setLineWidth(Li*Et()),W.isLineSegments)Dt.setMode(B.LINES);else if(W.isLineLoop)Dt.setMode(B.LINE_LOOP);else Dt.setMode(B.LINE_STRIP)}else if(W.isPoints)Dt.setMode(B.POINTS);else if(W.isSprite)Dt.setMode(B.TRIANGLES);if(W.isBatchedMesh)if(!ct.get("WEBGL_multi_draw")){let{_multiDrawStarts:Li,_multiDrawCounts:He,_multiDrawCount:zi}=W,Tt=Le?C.get(Le).bytesPerElement:1,Br=je.get(H).currentProgram.getUniforms();for(let Di=0;Di<zi;Di++)Br.setValue(B,"_gl_DrawID",Di),Dt.render(Li[Di]/Tt,He[Di])}else Dt.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else if(W.isInstancedMesh)Dt.renderInstances(Ge,ii,W.count);else if(Y.isInstancedBufferGeometry){let Li=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,He=Math.min(Y.instanceCount,Li);Dt.renderInstances(Ge,ii,He)}else Dt.render(Ge,ii)};function Xn(T,F,Y,H){if(I!==null&&T.isNodeMaterial)I.setObject(H,T);if(fe===!0)J.setState(T,Y,!1);if(T.transparent===!0&&T.side===kt&&T.forceSinglePass===!1)T.side=Nt,T.needsUpdate=!0,Lo(T,F,H),T.side=hn,T.needsUpdate=!0,Lo(T,F,H),T.side=kt;else Lo(T,F,H)}this.compile=function(T,F,Y=null){if(Y===null)Y=T;if(I!==null)I.renderStart(T,F,Y);if(E=Se.get(Y),E.init(F),x.push(E),Y.traverseVisible(function(W){if(W.isLight&&W.layers.test(F.layers)){if(E.pushLight(W),W.castShadow)E.pushShadow(W)}}),T!==Y)T.traverseVisible(function(W){if(W.isLight&&W.layers.test(F.layers)){if(E.pushLight(W),W.castShadow)E.pushShadow(W)}});if(E.setupLights(),I!==null)I.updateLights(E.state.lightsArray);if(Ce=this.localClippingEnabled,fe=J.init(this.clippingPlanes,Ce),fe===!0)J.setGlobalState(this.clippingPlanes,F);if(I!==null)ne.render(E.state.shadowsArray,Y,F);let H=new Set;if(T.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;let be=W.material;if(be)if(Array.isArray(be))for(let ze=0;ze<be.length;ze++){let Ee=be[ze];Xn(Ee,Y,F,W),H.add(Ee)}else Xn(be,Y,F,W),H.add(be)}),E=x.pop(),I!==null)I.renderEnd();return H},this.compileAsync=function(T,F,Y=null){let H=this.compile(T,F,Y);return new Promise((W)=>{function be(){if(H.forEach(function(ze){let Le=je.get(ze).currentProgram;if(Le===void 0||Le.isReady())H.delete(ze)}),H.size===0){W(T);return}setTimeout(be,10)}if(ct.get("KHR_parallel_shader_compile")!==null)be();else setTimeout(be,10)})};let Qc=null;function Vg(T){if(Qc)Qc(T)}function bu(){Fr.stop()}function Eu(){Fr.start()}let Fr=new Rc;if(Fr.setAnimationLoop(Vg),typeof self<"u")Fr.setContext(self);this.setAnimationLoop=function(T){Qc=T,Ye.setAnimationLoop(T),T===null?Fr.stop():Fr.start()},Ye.addEventListener("sessionstart",bu),Ye.addEventListener("sessionend",Eu),this.render=function(T,F){if(F!==void 0&&F.isCamera!==!0){Fe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;if(I!==null)I.renderStart(T,F);let Y=Ye.enabled===!0&&Ye.isPresenting===!0,H=M!==null&&(N===null||Y)&&M.begin(R,N);if(T.matrixWorldAutoUpdate===!0)T.updateMatrixWorld();if(F.parent===null&&F.matrixWorldAutoUpdate===!0)F.updateMatrixWorld();if(Ye.enabled===!0&&Ye.isPresenting===!0&&(M===null||M.isCompositing()===!1)){if(Ye.cameraAutoUpdate===!0)Ye.updateCamera(F);F=Ye.getCamera()}if(T.isScene===!0)T.onBeforeRender(R,T,F,N);if(E=Se.get(T,x.length),E.init(F),E.state.textureUnits=nt.getTextureUnits(),x.push(E),Ue.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),F.isArrayCamera)he.setFromArrayCamera(F);else re.setFromProjectionMatrix(Ue,_i,F.reversedDepth);if(Ce=this.localClippingEnabled,fe=J.init(this.clippingPlanes,Ce),S=xe.get(T,w.length),S.init(),w.push(S),this.info.render.frame++,Ye.enabled===!0&&Ye.isPresenting===!0){let ze=R.xr.getDepthSensingMesh();if(ze!==null)jc(ze,F,-1/0,R.sortObjects)}if(jc(T,F,0,R.sortObjects),S.finish(),I!==null)I.updateLights(E.state.lightsArray);if(R.sortObjects===!0)S.sort(Te,ut);if(dt=Ye.enabled===!1||Ye.isPresenting===!1||Ye.hasDepthSensing()===!1,dt)ye.addToRenderList(S,T);if(this.info.autoReset===!0)this.info.reset();if(fe===!0)J.beginShadows();let W=E.state.shadowsArray;if(ne.render(W,T,F),fe===!0)J.endShadows();if((H&&M.hasRenderPass())===!1){let ze=S.opaque,Ee=S.transmissive;if(E.setupLights(),F.isArrayCamera){let Le=F.cameras;if(Ee.length>0)for(let We=0,st=Le.length;We<st;We++){let xt=Le[We];wu(ze,Ee,T,xt)}if(dt)ye.render(T);for(let We=0,st=Le.length;We<st;We++){let xt=Le[We];Tu(S,T,xt,xt.viewport)}}else{if(Ee.length>0)wu(ze,Ee,T,F);if(dt)ye.render(T);Tu(S,T,F)}}if(N!==null&&L===0)nt.updateMultisampleRenderTarget(N),nt.updateRenderTargetMipmap(N);if(H)M.end(R);if(T.isScene===!0)T.onAfterRender(R,T,F);if(me.resetDefaultState(),Q=-1,z=null,x.pop(),x.length>0){if(E=x[x.length-1],nt.setTextureUnits(E.state.textureUnits),fe===!0)J.setGlobalState(R.clippingPlanes,E.state.camera)}else E=null;if(w.pop(),w.length>0)S=w[w.length-1];else S=null;if(I!==null)I.renderEnd()};function jc(T,F,Y,H){if(T.visible===!1)return;if(T.layers.test(F.layers)){if(T.isGroup)Y=T.renderOrder;else if(T.isLOD){if(T.autoUpdate===!0)T.update(F)}else if(T.isLight){if(E.pushLight(T),T.castShadow)E.pushShadow(T)}else if(T.isSprite){let ze=F.isArrayCamera?he:re;if(!T.frustumCulled||T.intersectsFrustum(ze)){if(H)Ve.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Ue);let Ee=G.update(T),Le=T.material;if(Le.visible)S.push(T,Ee,Le,Y,Ve.z,null,F)}}else if(T.isMesh||T.isLine||T.isPoints){let ze=F.isArrayCamera?he:re;if(!T.frustumCulled||T.intersectsFrustum(ze)){let Ee=G.update(T),Le=T.material;if(H){if(T.boundingSphere!==void 0){if(T.boundingSphere===null)T.computeBoundingSphere();Ve.copy(T.boundingSphere.center)}else{if(Ee.boundingSphere===null)Ee.computeBoundingSphere();Ve.copy(Ee.boundingSphere.center)}Ve.applyMatrix4(T.matrixWorld).applyMatrix4(Ue)}if(Array.isArray(Le)){let We=Ee.groups;for(let st=0,xt=We.length;st<xt;st++){let Ge=We[st],_t=Le[Ge.materialIndex];if(_t&&_t.visible)S.push(T,Ee,_t,Y,Ve.z,Ge,F)}}else if(Le.visible)S.push(T,Ee,Le,Y,Ve.z,null,F)}}}let be=T.children;for(let ze=0,Ee=be.length;ze<Ee;ze++)jc(be[ze],F,Y,H)}function Tu(T,F,Y,H){let{opaque:W,transmissive:be,transparent:ze}=T;if(E.setupLightsView(Y),fe===!0)J.setGlobalState(R.clippingPlanes,Y);if(H)Ae.viewport(X.copy(H));if(W.length>0)cl(W,F,Y);if(be.length>0)cl(be,F,Y);if(ze.length>0)cl(ze,F,Y);Ae.buffers.depth.setTest(!0),Ae.buffers.depth.setMask(!0),Ae.buffers.color.setMask(!0),Ae.setPolygonOffset(!1)}function wu(T,F,Y,H){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[H.id]===void 0){let Ge=ct.has("EXT_color_buffer_half_float")||ct.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[H.id]=new Gt(1,1,{generateMipmaps:!0,type:Ge?Wt:ei,minFilter:Gi,samples:Math.max(4,jt.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:tt.workingColorSpace})}let be=E.state.transmissionRenderTarget[H.id],ze=H.viewport||X;be.setSize(ze.z*R.transmissionResolutionScale,ze.w*R.transmissionResolutionScale);let Ee=R.getRenderTarget(),Le=R.getActiveCubeFace(),We=R.getActiveMipmapLevel();if(R.setRenderTarget(be),R.getClearColor(V),j=R.getClearAlpha(),j<1)R.setClearColor(16777215,0.5);if(R.clear(),dt)ye.render(Y);let st=R.toneMapping;R.toneMapping=ji;let xt=H.viewport;if(H.viewport!==void 0)H.viewport=void 0;if(E.setupLightsView(H),fe===!0)J.setGlobalState(R.clippingPlanes,H);if(cl(T,Y,H),nt.updateMultisampleRenderTarget(be),nt.updateRenderTargetMipmap(be),ct.has("WEBGL_multisampled_render_to_texture")===!1){let Ge=!1;for(let _t=0,ii=F.length;_t<ii;_t++){let Bt=F[_t],{object:Dt,geometry:Li,material:He,group:zi}=Bt;if(He.side===kt&&Dt.layers.test(H.layers)){let Tt=He.side;He.side=Nt,He.needsUpdate=!0,Au(Dt,Y,H,Li,He,zi),He.side=Tt,He.needsUpdate=!0,Ge=!0}}if(Ge===!0)nt.updateMultisampleRenderTarget(be),nt.updateRenderTargetMipmap(be)}if(R.setRenderTarget(Ee,Le,We),R.setClearColor(V,j),xt!==void 0)H.viewport=xt;R.toneMapping=st}function cl(T,F,Y){let H=F.isScene===!0?F.overrideMaterial:null;for(let W=0,be=T.length;W<be;W++){let ze=T[W],{object:Ee,geometry:Le,group:We}=ze,st=ze.material;if(st.allowOverride===!0&&H!==null)st=H;if(Ee.layers.test(Y.layers))Au(Ee,F,Y,Le,st,We)}}function Au(T,F,Y,H,W,be){if(I!==null&&W.isNodeMaterial)I.setObject(T,W);if(T.onBeforeRender(R,F,Y,H,W,be),T.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),W.onBeforeRender(R,F,Y,H,T,be),W.transparent===!0&&W.side===kt&&W.forceSinglePass===!1)W.side=Nt,W.needsUpdate=!0,R.renderBufferDirect(Y,F,H,W,T,be),W.side=hn,W.needsUpdate=!0,R.renderBufferDirect(Y,F,H,W,T,be),W.side=kt;else R.renderBufferDirect(Y,F,H,W,T,be);T.onAfterRender(R,F,Y,H,W,be)}function Ru(T){let F=0;for(let Y of T)if(Y.texture!==null)F++;return F}function Lo(T,F,Y){if(F.isScene!==!0)F=lt;let H=je.get(T),W=E.state.lights,be=E.state.shadowsArray,ze=W.state.version,Ee=ce.getParameters(T,W.state,be,F,Y,E.state.lightProbeGridArray),Le=ce.getProgramCacheKey(Ee),We=H.programs;H.environment=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?F.environment:null,H.fog=F.fog;let st=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap;if(H.envMap=ai.get(T.envMap||H.environment,st),H.envMapRotation=H.environment!==null&&T.envMap===null?F.environmentRotation:T.envMapRotation,We===void 0)T.addEventListener("dispose",Ie),We=new Map,H.programs=We,H.programVariants=new Map;let xt=We.get(Le);if(xt!==void 0){if(H.currentProgram===xt&&H.lightsStateVersion===ze)return Pu(T,Ee),xt}else{if(Ee.uniforms=ce.getUniforms(T),I!==null&&T.isNodeMaterial)I.build(T,Y,Ee);T.onBeforeCompile(Ee,R),xt=ce.acquireProgram(Ee,Le),We.set(Le,xt),H.uniforms=Ee.uniforms}let Ge=H.uniforms;if(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)Ge.clippingPlanes=J.uniform;if(Pu(T,Ee),H.needsLights=Yg(T),H.lightsStateVersion=ze,H.needsLights)Ge.ambientLightColor.value=W.state.ambient,Ge.lightProbe.value=W.state.probe,Ge.sunLights.value=W.state.sun,Ge.sunLightShadows.value=W.state.sunShadow,Ge.directionalLights.value=W.state.directional,Ge.directionalLightShadows.value=W.state.directionalShadow,Ge.spotLights.value=W.state.spot,Ge.spotLightShadows.value=W.state.spotShadow,Ge.rectAreaLights.value=W.state.rectArea,Ge.ltc_1.value=W.state.rectAreaLTC1,Ge.ltc_2.value=W.state.rectAreaLTC2,Ge.pointLights.value=W.state.point,Ge.pointLightShadows.value=W.state.pointShadow,Ge.hemisphereLights.value=W.state.hemi,Ge.sunShadowMatrix.value=W.state.sunShadowMatrix,Ge.sunShadowCascade.value=W.state.sunShadowCascade,Ge.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Ge.spotLightMatrix.value=W.state.spotLightMatrix,Ge.spotLightMap.value=W.state.spotLightMap,Ge.pointShadowMatrix.value=W.state.pointShadowMatrix;return H.numLightProbeGrids=Ru(E.state.lightProbeGridArray),H.currentProgram=xt,H.uniformsList=null,xt}function Wg(T,F,Y,H,W){let be=je.get(T),ze=be.currentProgram.id+","+H+","+W,Ee=be.programVariants.get(ze);if(Ee===void 0)Ee=Lo(T,F,Y),be.programVariants.set(ze,Ee);else be.currentProgram=Ee,be.uniformsList=null,be.outputColorSpace=H,be.toneMapping=W;return Ee}function Cu(T){if(T.uniformsList===null){let F=T.currentProgram.getUniforms();T.uniformsList=ps.seqWithValue(F.seq,T.uniforms)}return T.uniformsList}function Pu(T,F){let Y=je.get(T);Y.outputColorSpace=F.outputColorSpace,Y.batching=F.batching,Y.batchingColor=F.batchingColor,Y.instancing=F.instancing,Y.instancingColor=F.instancingColor,Y.instancingMorph=F.instancingMorph,Y.skinning=F.skinning,Y.morphTargets=F.morphTargets,Y.morphNormals=F.morphNormals,Y.morphColors=F.morphColors,Y.morphTargetsCount=F.morphTargetsCount,Y.numClippingPlanes=F.numClippingPlanes,Y.numIntersection=F.numClipIntersection,Y.vertexAlphas=F.vertexAlphas,Y.vertexTangents=F.vertexTangents,Y.toneMapping=F.toneMapping}function Xg(T,F,Y,H,W){if(F.isScene!==!0)F=lt;nt.resetTextureUnits();let be=F.fog,ze=H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial?F.environment:null,Ee=N===null?R.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:tt.workingColorSpace,Le=H.isMeshStandardMaterial||H.isMeshLambertMaterial&&!H.envMap||H.isMeshPhongMaterial&&!H.envMap,We=ai.get(H.envMap||ze,Le),st=H.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,xt=!!Y.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Ge=!!Y.morphAttributes.position,_t=!!Y.morphAttributes.normal,ii=!!Y.morphAttributes.color,Bt=ji;if(H.toneMapped){if(N===null||N.isXRRenderTarget===!0)Bt=R.toneMapping}let Dt=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,Li=Dt!==void 0?Dt.length:0,He=je.get(H),zi=E.state.lights;if(fe===!0){if(Ce===!0||T!==z){let qt=T===z&&H.id===Q;J.setState(H,T,qt)}}let Tt=!1,Br=!1;if(H.version===He.__version){if(He.needsLights&&He.lightsStateVersion!==zi.state.version)Tt=!0;else if(W.isBatchedMesh&&He.batching===!1)Tt=!0;else if(!W.isBatchedMesh&&He.batching===!0)Tt=!0;else if(W.isBatchedMesh&&He.batchingColor===!0&&W._colorsTexture===null)Tt=!0;else if(W.isBatchedMesh&&He.batchingColor===!1&&W._colorsTexture!==null)Tt=!0;else if(W.isInstancedMesh&&He.instancing===!1)Tt=!0;else if(!W.isInstancedMesh&&He.instancing===!0)Tt=!0;else if(W.isSkinnedMesh&&He.skinning===!1)Tt=!0;else if(!W.isSkinnedMesh&&He.skinning===!0)Tt=!0;else if(W.isInstancedMesh&&He.instancingColor===!0&&W.instanceColor===null)Tt=!0;else if(W.isInstancedMesh&&He.instancingColor===!1&&W.instanceColor!==null)Tt=!0;else if(W.isInstancedMesh&&He.instancingMorph===!0&&W.morphTexture===null)Tt=!0;else if(W.isInstancedMesh&&He.instancingMorph===!1&&W.morphTexture!==null)Tt=!0;else if(He.envMap!==We)Tt=!0;else if(H.fog===!0&&He.fog!==be)Tt=!0;else if(He.numClippingPlanes!==void 0&&(He.numClippingPlanes!==J.numPlanes||He.numIntersection!==J.numIntersection))Tt=!0;else if(He.vertexAlphas!==st)Tt=!0;else if(He.vertexTangents!==xt)Tt=!0;else if(He.morphTargets!==Ge)Tt=!0;else if(He.morphNormals!==_t)Tt=!0;else if(He.morphColors!==ii)Tt=!0;else if(He.morphTargetsCount!==Li)Tt=!0;else if(He.numLightProbeGrids!==Ru(E.state.lightProbeGridArray))Tt=!0;else if(He.outputColorSpace!==Ee||He.toneMapping!==Bt)Br=!0}else Tt=!0,He.__version=H.version;let Di=He.currentProgram;if(Tt===!0||Br===!0){if(Di=Br===!0?Wg(H,F,W,Ee,Bt):Lo(H,F,W),I&&H.isNodeMaterial)I.onUpdateProgram(H,Di,He)}let hl=!1,ar=!1,Or=!1,vt=Di.getUniforms(),Ti=He.uniforms;if(Ae.useProgram(Di.program))hl=!0,ar=!0,Or=!0;if(H.id!==Q)Q=H.id,ar=!0;if(hl||z!==T){if(Ae.buffers.depth.getReversed()&&T.reversedDepth!==!0)T._reversedDepth=!0,T.updateProjectionMatrix();vt.setValue(B,"projectionMatrix",T.projectionMatrix),vt.setValue(B,"viewMatrix",T.matrixWorldInverse);let gi=vt.map.cameraPosition;if(gi!==void 0)gi.setValue(B,Ke.setFromMatrixPosition(T.matrixWorld));if(jt.logarithmicDepthBuffer)vt.setValue(B,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2));if(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)vt.setValue(B,"isOrthographic",T.isOrthographicCamera===!0);if(z!==T)z=T,ar=!0,Or=!0}if(He.needsLights){if(zi.state.sunShadowMap.length>0)vt.setValue(B,"sunShadowMap",zi.state.sunShadowMap,nt);if(zi.state.directionalShadowMap.length>0)vt.setValue(B,"directionalShadowMap",zi.state.directionalShadowMap,nt);if(zi.state.spotShadowMap.length>0)vt.setValue(B,"spotShadowMap",zi.state.spotShadowMap,nt);if(zi.state.pointShadowMap.length>0)vt.setValue(B,"pointShadowMap",zi.state.pointShadowMap,nt)}if(W.isSkinnedMesh){vt.setOptional(B,W,"bindMatrix"),vt.setOptional(B,W,"bindMatrixInverse");let qt=W.skeleton;if(qt){if(qt.boneTexture===null)qt.computeBoneTexture();vt.setValue(B,"boneTexture",qt.boneTexture,nt)}}if(W.isBatchedMesh){if(vt.setOptional(B,W,"batchingTexture"),vt.setValue(B,"batchingTexture",W._matricesTexture,nt),vt.setOptional(B,W,"batchingIdTexture"),vt.setValue(B,"batchingIdTexture",W._indirectTexture,nt),vt.setOptional(B,W,"batchingColorTexture"),W._colorsTexture!==null)vt.setValue(B,"batchingColorTexture",W._colorsTexture,nt)}let En=Y.morphAttributes;if(En.position!==void 0||En.normal!==void 0||En.color!==void 0)D.update(W,Y,Di);if(ar||He.receiveShadow!==W.receiveShadow)He.receiveShadow=W.receiveShadow,vt.setValue(B,"receiveShadow",W.receiveShadow);if((H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial)&&H.envMap===null&&F.environment!==null)Ti.envMapIntensity.value=F.environmentIntensity;if(Ti.dfgLUT!==void 0)Ti.dfgLUT.value=ag();if(ar){if(vt.setValue(B,"toneMappingExposure",R.toneMappingExposure),He.needsLights)qg(Ti,Or);if(be&&H.fog===!0)oe.refreshFogUniforms(Ti,be);if(oe.refreshMaterialUniforms(Ti,H,Oe,Me,E.state.transmissionRenderTarget[T.id]),He.needsLights&&He.numLightProbeGrids>0){let qt=y,gi=0;for(let qn of E.state.lightProbeGridArray){if(qn.texture===null)continue;qt.textures[gi]=qn.texture,qt.min[gi]=qn.boundingBox.min,qt.max[gi]=qn.boundingBox.max,qt.resolution[gi]=qn.resolution,gi++}for(let qn in qt)qt[qn].length=gi;Ti.probesSH.value=qt.textures,Ti.probesMin.value=qt.min,Ti.probesMax.value=qt.max,Ti.probesResolution.value=qt.resolution}ps.upload(B,Cu(He),Ti,nt)}if(H.isShaderMaterial&&H.uniformsNeedUpdate===!0)ps.upload(B,Cu(He),Ti,nt),H.uniformsNeedUpdate=!1;if(H.isSpriteMaterial)vt.setValue(B,"center",W.center);if(vt.setValue(B,"modelViewMatrix",W.modelViewMatrix),vt.setValue(B,"normalMatrix",W.normalMatrix),vt.setValue(B,"modelMatrix",W.matrixWorld),H.uniformsGroups!==void 0){let qt=H.uniformsGroups;for(let gi=0,qn=qt.length;gi<qn;gi++){let Lu=qt[gi];we.update(Lu,Di),we.bind(Lu,Di)}}return Di}function qg(T,F){T.ambientLightColor.needsUpdate=F,T.lightProbe.needsUpdate=F,T.sunLights.needsUpdate=F,T.sunLightShadows.needsUpdate=F,T.directionalLights.needsUpdate=F,T.directionalLightShadows.needsUpdate=F,T.pointLights.needsUpdate=F,T.pointLightShadows.needsUpdate=F,T.spotLights.needsUpdate=F,T.spotLightShadows.needsUpdate=F,T.rectAreaLights.needsUpdate=F,T.hemisphereLights.needsUpdate=F}function Yg(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return q},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(T,F,Y){let H=je.get(T);if(H.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1)H.__useRenderToTexture=!1;je.get(T.texture).__webglTexture=F,je.get(T.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:Y,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,F){let Y=je.get(T);Y.__webglFramebuffer=F,Y.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(T,F=0,Y=0){N=T,q=F,L=Y;let H=null,W=!1,be=!1;if(T){let Ee=je.get(T);if(Ee.__useDefaultFramebuffer!==void 0){Ae.bindFramebuffer(B.FRAMEBUFFER,Ee.__webglFramebuffer),X.copy(T.viewport),Z.copy(T.scissor),de=T.scissorTest,Ae.viewport(X),Ae.scissor(Z),Ae.setScissorTest(de),Q=-1;return}else if(Ee.__webglFramebuffer===void 0)nt.setupRenderTarget(T);else if(Ee.__hasExternalTextures)nt.rebindTextures(T,je.get(T.texture).__webglTexture,je.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){let st=T.depthTexture;if(Ee.__boundDepthTexture!==st){if(st!==null&&je.has(st)&&(T.width!==st.image.width||T.height!==st.image.height))throw Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");nt.setupDepthRenderbuffer(T)}}let Le=T.texture;if(Le.isData3DTexture||Le.isDataArrayTexture||Le.isCompressedArrayTexture)be=!0;let We=je.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget){if(Array.isArray(We[F]))H=We[F][Y];else H=We[F];W=!0}else if(T.samples>0&&nt.useMultisampledRTT(T)===!1)H=je.get(T).__webglMultisampledFramebuffer;else if(Array.isArray(We))H=We[Y];else H=We;X.copy(T.viewport),Z.copy(T.scissor),de=T.scissorTest}else X.copy(De).multiplyScalar(Oe).floor(),Z.copy(Ne).multiplyScalar(Oe).floor(),de=rt;if(Y!==0)H=O;if(Ae.bindFramebuffer(B.FRAMEBUFFER,H))Ae.drawBuffers(T,H);if(Ae.viewport(X),Ae.scissor(Z),Ae.setScissorTest(de),W){let Ee=je.get(T.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+F,Ee.__webglTexture,Y)}else if(be){let Ee=F;for(let Le=0;Le<T.textures.length;Le++){let We=je.get(T.textures[Le]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+Le,We.__webglTexture,Y,Ee)}}else if(T!==null&&Y!==0){let Ee=je.get(T.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Ee.__webglTexture,Y)}Q=-1};function Iu(T){let F=je.get(T);if(F.__readFormat!==T.format||F.__readType!==T.type)F.__readFormat=T.format,F.__readType=T.type,F.__formatReadable=jt.textureFormatReadable(T.format),F.__typeReadable=jt.textureTypeReadable(T.type);return F}if(this.readRenderTargetPixels=function(T,F,Y,H,W,be,ze,Ee=0){if(!(T&&T.isWebGLRenderTarget)){Fe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Le=je.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&ze!==void 0){if(Le=Le[ze],Array.isArray(Le))Le=Le[0]}if(Le){Ae.bindFramebuffer(B.FRAMEBUFFER,Le);try{let We=T.textures[Ee],{format:st,type:xt}=We;if(T.textures.length>1)B.readBuffer(B.COLOR_ATTACHMENT0+Ee);let Ge=Iu(We);if(Ge.__formatReadable===!1){Fe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ge.__typeReadable===!1){Fe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}if(F>=0&&F<=T.width-H&&(Y>=0&&Y<=T.height-W))B.readPixels(F,Y,H,W,pe.convert(st),pe.convert(xt),be)}finally{let We=N!==null?je.get(N).__webglFramebuffer:null;Ae.bindFramebuffer(B.FRAMEBUFFER,We)}}},this.readRenderTargetPixelsAsync=async function(T,F,Y,H,W,be,ze,Ee=0){if(!(T&&T.isWebGLRenderTarget))throw Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Le=je.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&ze!==void 0){if(Le=Le[ze],Array.isArray(Le))Le=Le[0]}if(Le)if(F>=0&&F<=T.width-H&&(Y>=0&&Y<=T.height-W)){Ae.bindFramebuffer(B.FRAMEBUFFER,Le);let We=T.textures[Ee],{format:st,type:xt}=We;if(T.textures.length>1)B.readBuffer(B.COLOR_ATTACHMENT0+Ee);let Ge=Iu(We);if(Ge.__formatReadable===!1)throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ge.__typeReadable===!1)throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let _t=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,_t),B.bufferData(B.PIXEL_PACK_BUFFER,be.byteLength,B.STREAM_READ),B.readPixels(F,Y,H,W,pe.convert(st),pe.convert(xt),0),B.bindBuffer(B.PIXEL_PACK_BUFFER,null);let ii=N!==null?je.get(N).__webglFramebuffer:null;Ae.bindFramebuffer(B.FRAMEBUFFER,ii);let Bt=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await pf(B,Bt,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,_t),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,be),B.bindBuffer(B.PIXEL_PACK_BUFFER,null),B.deleteBuffer(_t),B.deleteSync(Bt),be}else throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,F=null,Y=0){let H=Math.pow(2,-Y),W=Math.floor(T.image.width*H),be=Math.floor(T.image.height*H),ze=F!==null?F.x:0,Ee=F!==null?F.y:0;nt.setTexture2D(T,0),B.copyTexSubImage2D(B.TEXTURE_2D,Y,0,0,ze,Ee,W,be),Ae.unbindTexture()},this.copyTextureToTexture=function(T,F,Y=null,H=null,W=0,be=0){let ze,Ee,Le,We,st,xt,Ge,_t,ii,Bt=T.isCompressedTexture?T.mipmaps[be]:T.image;if(Y!==null)ze=Y.max.x-Y.min.x,Ee=Y.max.y-Y.min.y,Le=Y.isBox3?Y.max.z-Y.min.z:1,We=Y.min.x,st=Y.min.y,xt=Y.isBox3?Y.min.z:0;else{let vt=Math.pow(2,-W);if(ze=Math.floor(T.width*vt),Ee=Math.floor(T.height*vt),T.isDataArrayTexture)Le=Bt.depth;else if(T.isData3DTexture)Le=Math.floor(Bt.depth*vt);else Le=1;We=0,st=0,xt=0}if(H!==null)Ge=H.x,_t=H.y,ii=H.z;else Ge=0,_t=0,ii=0;let Dt=pe.convert(F.format),Li=pe.convert(F.type),He;if(F.isData3DTexture)nt.setTexture3D(F,0),He=B.TEXTURE_3D;else if(F.isDataArrayTexture||F.isCompressedArrayTexture)nt.setTexture2DArray(F,0),He=B.TEXTURE_2D_ARRAY;else nt.setTexture2D(F,0),He=B.TEXTURE_2D;Ae.activeTexture(B.TEXTURE0),Ae.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,F.flipY),Ae.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),Ae.pixelStorei(B.UNPACK_ALIGNMENT,F.unpackAlignment);let zi=Ae.getParameter(B.UNPACK_ROW_LENGTH),Tt=Ae.getParameter(B.UNPACK_IMAGE_HEIGHT),Br=Ae.getParameter(B.UNPACK_SKIP_PIXELS),Di=Ae.getParameter(B.UNPACK_SKIP_ROWS),hl=Ae.getParameter(B.UNPACK_SKIP_IMAGES);Ae.pixelStorei(B.UNPACK_ROW_LENGTH,Bt.width),Ae.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Bt.height),Ae.pixelStorei(B.UNPACK_SKIP_PIXELS,We),Ae.pixelStorei(B.UNPACK_SKIP_ROWS,st),Ae.pixelStorei(B.UNPACK_SKIP_IMAGES,xt);let ar=T.isDataArrayTexture||T.isData3DTexture,Or=F.isDataArrayTexture||F.isData3DTexture;if(T.isDepthTexture){let vt=je.get(T),Ti=je.get(F),En=je.get(vt.__renderTarget),qt=je.get(Ti.__renderTarget);Ae.bindFramebuffer(B.READ_FRAMEBUFFER,En.__webglFramebuffer),Ae.bindFramebuffer(B.DRAW_FRAMEBUFFER,qt.__webglFramebuffer);for(let gi=0;gi<Le;gi++){if(ar)B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,je.get(T).__webglTexture,W,xt+gi),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,je.get(F).__webglTexture,be,ii+gi);B.blitFramebuffer(We,st,We+ze,st+Ee,Ge,_t,Ge+ze,_t+Ee,B.DEPTH_BUFFER_BIT,B.NEAREST)}Ae.bindFramebuffer(B.READ_FRAMEBUFFER,null),Ae.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(W!==0||T.isRenderTargetTexture||je.has(T)){let vt=je.get(T),Ti=je.get(F);Ae.bindFramebuffer(B.READ_FRAMEBUFFER,te),Ae.bindFramebuffer(B.DRAW_FRAMEBUFFER,P);for(let En=0;En<Le;En++){if(ar)B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,vt.__webglTexture,W,xt+En);else B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,vt.__webglTexture,W);if(Or)B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Ti.__webglTexture,be,ii+En);else B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Ti.__webglTexture,be);if(W!==0)B.blitFramebuffer(We,st,We+ze,st+Ee,Ge,_t,Ge+ze,_t+Ee,B.COLOR_BUFFER_BIT,B.NEAREST);else if(Or)B.copyTexSubImage3D(He,be,Ge,_t,ii+En,We,st,ze,Ee);else B.copyTexSubImage2D(He,be,Ge,_t,We,st,ze,Ee)}Ae.bindFramebuffer(B.READ_FRAMEBUFFER,null),Ae.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(Or)if(T.isDataTexture||T.isData3DTexture)B.texSubImage3D(He,be,Ge,_t,ii,ze,Ee,Le,Dt,Li,Bt.data);else if(F.isCompressedArrayTexture)B.compressedTexSubImage3D(He,be,Ge,_t,ii,Bt.width,Bt.height,Le,Dt,Bt.data);else B.texSubImage3D(He,be,Ge,_t,ii,ze,Ee,Le,Dt,Li,Bt);else if(T.isDataTexture)B.texSubImage2D(B.TEXTURE_2D,be,Ge,_t,ze,Ee,Dt,Li,Bt.data);else if(T.isCompressedTexture)B.compressedTexSubImage2D(B.TEXTURE_2D,be,Ge,_t,Bt.width,Bt.height,Dt,Bt.data);else B.texSubImage2D(B.TEXTURE_2D,be,Ge,_t,ze,Ee,Dt,Li,Bt);if(Ae.pixelStorei(B.UNPACK_ROW_LENGTH,zi),Ae.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Tt),Ae.pixelStorei(B.UNPACK_SKIP_PIXELS,Br),Ae.pixelStorei(B.UNPACK_SKIP_ROWS,Di),Ae.pixelStorei(B.UNPACK_SKIP_IMAGES,hl),be===0&&F.generateMipmaps===!0&&F.mipmapsAutoUpdate===!0)B.generateMipmap(He);Ae.unbindTexture()},this.initRenderTarget=function(T){if(je.get(T).__webglFramebuffer===void 0)nt.setupRenderTarget(T)},this.initTexture=function(T){if(T.isCubeTexture)nt.setTextureCube(T,0);else if(T.isData3DTexture)nt.setTexture3D(T,0);else if(T.isDataArrayTexture||T.isCompressedArrayTexture)nt.setTexture2DArray(T,0);else nt.setTexture2D(T,0);Ae.unbindTexture()},this.resetState=function(){q=0,L=0,N=null,Ae.reset(),me.reset()},typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return _i}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=tt._getDrawingBufferColorSpace(e),t.unpackColorSpace=tt._getUnpackColorSpace()}}var To={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class _n{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}var Rv=new Ar(-1,1,1,-1,0,1);class lg extends Be{constructor(){super();this.setAttribute("position",new _e([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new _e([0,2,0,0,2,0],2))}}var Cv=new lg;class ms{constructor(e){this._mesh=new ee(Cv,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Rv)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class su extends _n{constructor(e,t="tDiffuse"){super();if(this.textureID=t,this.uniforms=null,this.material=null,e instanceof Xt)this.uniforms=e.uniforms,this.material=e;else if(e)this.uniforms=zn.clone(e.uniforms),this.material=new Xt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader});this._fsQuad=new ms(this.material)}render(e,t,i){if(this.uniforms[this.textureID])this.uniforms[this.textureID].value=i.texture;if(this._fsQuad.material=this.material,this.renderToScreen)e.setRenderTarget(null),this._fsQuad.render(e);else{if(e.setRenderTarget(t),this.clear)e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil);this._fsQuad.render(e)}}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class Nc extends _n{constructor(e,t){super();this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){let n=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let s,o;if(this.inverse)s=0,o=1;else s=1,o=0;if(r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(n.REPLACE,n.REPLACE,n.REPLACE),r.buffers.stencil.setFunc(n.ALWAYS,s,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear)e.clear();if(e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear)e.clear();e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(n.EQUAL,1,4294967295),r.buffers.stencil.setOp(n.KEEP,n.KEEP,n.KEEP),r.buffers.stencil.setLocked(!0)}}class ou extends _n{constructor(){super();this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class au{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let i=e.getSize(new k);this._width=i.width,this._height=i.height,t=new Gt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Wt}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new su(To),this.copyPass.material.blending=un,this.timer=new Qa}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);if(t!==-1)this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){if(this.timer.update(),e===void 0)e=this.timer.getDelta();let t=this.renderer.getRenderTarget(),i=!1;for(let n=0,r=this.passes.length;n<r;n++){let s=this.passes[n];if(s.enabled===!1)continue;if(s.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(n),s.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),s.needsSwap){if(i){let o=this.renderer.getContext(),a=this.renderer.state.buffers.stencil;a.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),a.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}if(Nc!==void 0){if(s instanceof Nc)i=!0;else if(s instanceof ou)i=!1}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new k);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let i=this._width*this._pixelRatio,n=this._height*this._pixelRatio;this.renderTarget1.setSize(i,n),this.renderTarget2.setSize(i,n);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,n)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class lu extends _n{constructor(e,t,i=null,n=null,r=null){super();this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=n,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new ue}render(e,t,i){let n=e.autoClear;e.autoClear=!1;let r,s;if(this.overrideMaterial!==null)s=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial;if(this.clearColor!==null)e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha());if(this.clearAlpha!==null)r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha);if(this.clearDepth==!0)e.clearDepth();if(e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0)e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil);if(e.render(this.scene,this.camera),this.clearColor!==null)e.setClearColor(this._oldClearColor);if(this.clearAlpha!==null)e.setClearAlpha(r);if(this.overrideMaterial!==null)this.scene.overrideMaterial=s;e.autoClear=n}}var cg={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new ue(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class gs extends _n{constructor(e,t=1,i,n){super();this.strength=t,this.radius=i,this.threshold=n,this.resolution=e!==void 0?new k(e.x,e.y):new k(256,256),this.clearColor=new ue(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),s=Math.round(this.resolution.y/2);this.renderTargetBright=new Gt(r,s,{type:Wt,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let c=0;c<this.nMips;c++){let h=new Gt(r,s,{type:Wt,depthBuffer:!1});h.texture.name="UnrealBloomPass.h"+c,h.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(h);let f=new Gt(r,s,{type:Wt,depthBuffer:!1});f.texture.name="UnrealBloomPass.v"+c,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),s=Math.round(s/2)}let o=cg;this.highPassUniforms=zn.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=n,this.highPassUniforms.smoothWidth.value=0.01,this.materialHighPassFilter=new Xt({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let a=[6,10,14,18,22];r=Math.round(this.resolution.x/2),s=Math.round(this.resolution.y/2);for(let c=0;c<this.nMips;c++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(a[c])),this.separableBlurMaterials[c].uniforms.invSize.value=new k(1/r,1/s),r=Math.round(r/2),s=Math.round(s/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=0.1;let l=[1,0.8,0.6,0.4,0.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new A(1,1,1),new A(1,1,1),new A(1,1,1),new A(1,1,1),new A(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=zn.clone(To.uniforms),this.blendMaterial=new Xt({uniforms:this.copyUniforms,vertexShader:To.vertexShader,fragmentShader:To.fragmentShader,premultipliedAlpha:!0,blending:No,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new ue,this._oldClearAlpha=1,this._basic=new It,this._fsQuad=new ms(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),n=Math.round(t/2);this.renderTargetBright.setSize(i,n);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(i,n),this.renderTargetsVertical[r].setSize(i,n),this.separableBlurMaterials[r].uniforms.invSize.value=new k(1/i,1/n),i=Math.round(i/2),n=Math.round(n/2)}render(e,t,i,n,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();let s=e.autoClear;if(e.autoClear=!1,e.setClearColor(this.clearColor,0),r)e.state.buffers.stencil.setTest(!1);if(this.renderToScreen)this._fsQuad.material=this._basic,this._basic.map=i.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e);this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let o=this.renderTargetBright;for(let a=0;a<this.nMips;a++)this._fsQuad.material=this.separableBlurMaterials[a],this.separableBlurMaterials[a].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[a].uniforms.direction.value=gs.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[a]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[a].uniforms.colorTexture.value=this.renderTargetsHorizontal[a].texture,this.separableBlurMaterials[a].uniforms.direction.value=gs.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[a]),e.clear(),this._fsQuad.render(e),o=this.renderTargetsVertical[a];if(this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r)e.state.buffers.stencil.setTest(!0);if(this.renderToScreen)e.setRenderTarget(null),this._fsQuad.render(e);else e.setRenderTarget(i),this._fsQuad.render(e);e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=s}_getSeparableBlurMaterial(e){let t=[],i=e/3;for(let s=0;s<e;s++)t.push(0.39894*Math.exp(-0.5*s*s/(i*i))/i);let n=[],r=[];for(let s=1;s<e;s+=2){let o=t[s],a=s+1<e?t[s+1]:0,l=o+a;n.push((s*o+(s+1)*a)/l),r.push(l)}return new Xt({defines:{KERNEL_PAIRS:n.length},uniforms:{colorTexture:{value:null},invSize:{value:new k(0.5,0.5)},direction:{value:new k(0.5,0.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:n},gaussianWeights:{value:r}},vertexShader:`

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

				}`})}_getCompositeMaterial(e){return new Xt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

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

				}`})}}gs.BlurDirectionX=new k(1,0);gs.BlurDirectionY=new k(0,1);var il={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class cu extends _n{constructor(){super();this.isOutputPass=!0,this.uniforms=zn.clone(il.uniforms),this.material=new cs({name:il.name,uniforms:this.uniforms,vertexShader:il.vertexShader,fragmentShader:il.fragmentShader}),this._fsQuad=new ms(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,i){if(this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping){if(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},tt.getTransfer(this._outputColorSpace)===pt)this.material.defines.SRGB_TRANSFER="";if(this._toneMapping===vs)this.material.defines.LINEAR_TONE_MAPPING="";else if(this._toneMapping===Ms)this.material.defines.REINHARD_TONE_MAPPING="";else if(this._toneMapping===Ss)this.material.defines.CINEON_TONE_MAPPING="";else if(this._toneMapping===ur)this.material.defines.ACES_FILMIC_TONE_MAPPING="";else if(this._toneMapping===Es)this.material.defines.AGX_TONE_MAPPING="";else if(this._toneMapping===Ts)this.material.defines.NEUTRAL_TONE_MAPPING="";else if(this._toneMapping===bs)this.material.defines.CUSTOM_TONE_MAPPING="";this.material.needsUpdate=!0}if(this.renderToScreen===!0)e.setRenderTarget(null),this._fsQuad.render(e);else{if(e.setRenderTarget(t),this.clear)e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil);this._fsQuad.render(e)}}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class hu extends $r{constructor(){super();this.name="RoomEnvironment",this.position.y=-3.5;let e=new Ut;e.deleteAttribute("uv");let t=new mt({side:Nt}),i=new mt,n=new rr(16777215,900,28,2);n.position.set(0.418,16.199,0.3),this.add(n);let r=new ee(e,t);r.position.set(-0.757,13.219,0.717),r.scale.set(31.713,28.305,28.591),this.add(r);let s=new In(e,i,6),o=new at;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-0.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),s.setMatrixAt(0,o.matrix),o.position.set(-5.607,-0.754,-0.758),o.rotation.set(0,0.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),s.setMatrixAt(1,o.matrix),o.position.set(6.167,0.857,7.803),o.rotation.set(0,0.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),s.setMatrixAt(2,o.matrix),o.position.set(-2.017,0.018,6.124),o.rotation.set(0,0.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),s.setMatrixAt(3,o.matrix),o.position.set(2.291,-0.756,-2.621),o.rotation.set(0,-0.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),s.setMatrixAt(4,o.matrix),o.position.set(-2.193,-0.369,-5.547),o.rotation.set(0,0.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),s.setMatrixAt(5,o.matrix),this.add(s);let a=new ee(e,wo(50));a.position.set(-16.116,14.37,8.208),a.scale.set(0.1,2.428,2.739),this.add(a);let l=new ee(e,wo(50));l.position.set(-16.109,18.021,-8.207),l.scale.set(0.1,2.425,2.751),this.add(l);let c=new ee(e,wo(17));c.position.set(14.904,12.198,-1.832),c.scale.set(0.15,4.265,6.331),this.add(c);let h=new ee(e,wo(43));h.position.set(-0.462,8.89,14.52),h.scale.set(4.38,5.441,0.088),this.add(h);let f=new ee(e,wo(20));f.position.set(3.235,11.486,-12.541),f.scale.set(2.5,2,0.1),this.add(f);let u=new ee(e,wo(100));u.position.set(0,20,0),u.scale.set(1,0.1,1),this.add(u)}dispose(){let e=new Set;this.traverse((t)=>{if(t.isMesh)e.add(t.geometry),e.add(t.material)});for(let t of e)t.dispose()}}function wo(e){return new qa({color:0,emissive:16777215,emissiveIntensity:e})}var nl=new A;function yn(e,t,i,n,r,s){let o=2*Math.PI*r/4,a=Math.max(s-2*r,0),l=Math.PI/4;nl.copy(t),nl[n]=0,nl.normalize();let c=0.5*o/(o+a),h=1-nl.angleTo(e)/l;if(Math.sign(nl[i])===1)return h*c;else return a/(o+a)+c+c*(1-h)}class Oi extends Ut{constructor(e=1,t=1,i=1,n=2,r=0.1){let s=n*2+1;r=Math.min(e/2,t/2,i/2,r);super(1,1,1,s,s,s);if(this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:i,segments:n,radius:r},s===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let a=new A,l=new A,c=new A(e,t,i).divideScalar(2).subScalar(r),h=this.attributes.position.array,f=this.attributes.normal.array,u=this.attributes.uv.array,p=h.length/6,g=new A,_=0.5/s;for(let m=0,d=0;m<h.length;m+=3,d+=2)switch(a.fromArray(h,m),l.copy(a),l.x-=Math.sign(l.x)*_,l.y-=Math.sign(l.y)*_,l.z-=Math.sign(l.z)*_,l.normalize(),h[m+0]=c.x*Math.sign(a.x)+l.x*r,h[m+1]=c.y*Math.sign(a.y)+l.y*r,h[m+2]=c.z*Math.sign(a.z)+l.z*r,f[m+0]=l.x,f[m+1]=l.y,f[m+2]=l.z,Math.floor(m/p)){case 0:g.set(1,0,0),u[d+0]=yn(g,l,"z","y",r,i),u[d+1]=1-yn(g,l,"y","z",r,t);break;case 1:g.set(-1,0,0),u[d+0]=1-yn(g,l,"z","y",r,i),u[d+1]=1-yn(g,l,"y","z",r,t);break;case 2:g.set(0,1,0),u[d+0]=1-yn(g,l,"x","z",r,e),u[d+1]=yn(g,l,"z","x",r,i);break;case 3:g.set(0,-1,0),u[d+0]=1-yn(g,l,"x","z",r,e),u[d+1]=1-yn(g,l,"z","x",r,i);break;case 4:g.set(0,0,1),u[d+0]=1-yn(g,l,"x","y",r,e),u[d+1]=1-yn(g,l,"y","x",r,t);break;case 5:g.set(0,0,-1),u[d+0]=yn(g,l,"x","y",r,e),u[d+1]=1-yn(g,l,"y","x",r,t);break}}static fromJSON(e){return new Oi(e.width,e.height,e.depth,e.segments,e.radius)}}function ug(e,t=!1){let i=e[0].index!==null,n=new Set(Object.keys(e[0].attributes)),r=new Set(Object.keys(e[0].morphAttributes)),s={},o={},a=e[0].morphTargetsRelative,l=new Be;l.morphTargetsRelative=a;let c=0;for(let h=0;h<e.length;++h){let f=e[h],u=0,p=0;if(i!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let g in f.attributes){if(!n.has(g))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+g+'" attribute exists among all geometries, or in none of them.'),null;if(s[g]===void 0)s[g]=[];s[g].push(f.attributes[g]),u++}if(u!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let g in f.morphAttributes){if(!r.has(g))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;if(f.morphAttributes[g].length!==e[0].morphAttributes[g].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have the same number of morph targets for the "'+g+'" morph attribute.'),null;if(o[g]===void 0)o[g]=[];o[g].push(f.morphAttributes[g]),p++}if(p!==r.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of morph attributes."),null;if(t){let g;if(i)g=f.index.count;else if(f.attributes.position!==void 0)g=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,g,h),c+=g}}if(i){let h=0,f=[];for(let u=0;u<e.length;++u){let p=e[u].index;for(let g=0;g<p.count;++g)f.push(p.getX(g)+h);h+=e[u].attributes.position.count}l.setIndex(f)}for(let h in s){let f=hg(s[h]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,f)}for(let h in o){let f=o[h][0].length;if(f===0)continue;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let u=0;u<f;++u){let p=[];for(let _=0;_<o[h].length;++_)p.push(o[h][_][u]);let g=hg(p);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}return l}function hg(e){let t,i,n,r=-1,s=0;for(let c=0;c<e.length;++c){let h=e[c];if(t===void 0)t=h.array.constructor;if(t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(i===void 0)i=h.itemSize;if(i!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0)n=h.normalized;if(n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(r===-1)r=h.gpuType;if(r!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=h.count*i}let o=new t(s),a=new Yt(o,i,n),l=0;for(let c=0;c<e.length;++c){let h=e[c];if(h.isInterleavedBufferAttribute){let f=l/i;for(let u=0,p=h.count;u<p;u++)for(let g=0;g<i;g++){let _=h.getComponent(u,g);a.setComponent(u+f,g,_)}}else o.set(h.array,l);l+=h.count*i}if(r!==void 0)a.gpuType=r;return a}var Sn=window.FUNUI,bn=(e)=>document.querySelector(e),Lr=matchMedia("(pointer:coarse)").matches||innerWidth<820;if(Lr)document.body.classList.add("touch");var cn=bn("#c"),Dr=new Dc({canvas:cn,antialias:!Lr,powerPreference:"high-performance"});Dr.setPixelRatio(Math.min(devicePixelRatio||1,Lr?1.5:2));Dr.toneMapping=ur;Dr.toneMappingExposure=1.05;var Ei=new $r;Ei.background=new ue(329498);Ei.fog=new Ys(329498,40,95);var Pv=new Cr(Dr);Ei.environment=Pv.fromScene(new hu,0.04).texture;Ei.environmentIntensity=0.18;var Ji=new Qt(68,1,0.05,120),Ir=null;function mg(){let e=innerWidth,t=innerHeight;if(Dr.setSize(e,t,!1),Ji.aspect=e/t,Ji.fov=e/t<1?80:68,Ji.updateProjectionMatrix(),Ir)Ir.setSize(e,t)}if(!Lr)Ir=new au(Dr),Ir.addPass(new lu(Ei,Ji)),Ir.addPass(new gs(new k(innerWidth,innerHeight),0.2,0.45,1)),Ir.addPass(new cu);addEventListener("resize",mg);mg();var Ze=(()=>{let e=7;return()=>(e=e*16807%2147483647)/2147483647})();function Lt(e,t){let i=document.createElement("canvas");return i.width=e,i.height=t,i}function Yc(e,t=1,i=1,n=!0){let r=new Yi(e);if(r.wrapS=r.wrapT=Zn,r.repeat.set(t,i),r.anisotropy=8,n)r.colorSpace=wt;return r}function si(e,t,i,n){let r=e.getImageData(0,0,t,i),s=r.data;for(let o=0;o<s.length;o+=4){let a=(Ze()-0.5)*n;s[o]+=a,s[o+1]+=a,s[o+2]+=a}e.putImageData(r,0,0)}var Jt={};Jt.concrete=(()=>{let e=Lt(512,512),t=e.getContext("2d");t.fillStyle="#7d7e82",t.fillRect(0,0,512,512);for(let i=0;i<40;i++){let n=t.createRadialGradient(Ze()*512,Ze()*512,5,Ze()*512,Ze()*512,120),r=Ze()*512,s=Ze()*512,o=t.createRadialGradient(r,s,5,r,s,90+Ze()*90);o.addColorStop(0,Ze()>0.5?"rgba(255,255,255,.07)":"rgba(0,0,0,.09)"),o.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=o,t.fillRect(0,0,512,512)}return si(t,512,512,22),t.strokeStyle="rgba(0,0,0,.35)",t.lineWidth=2,t.strokeRect(1,1,510,510),e})();Jt.parquet=(()=>{let e=Lt(512,512),t=e.getContext("2d"),i=256,n=42;for(let r=0;r<12;r++){let s=r%3*85;for(let o=-1;o<3;o++){let a=24+Ze()*6,l=28+Ze()*12;t.fillStyle=`hsl(${a},48%,${l}%)`,t.fillRect(o*256+s,r*42,254,40);for(let c=0;c<14;c++){t.strokeStyle=`rgba(30,12,0,${0.05+Ze()*0.1})`,t.lineWidth=1,t.beginPath();let h=r*42+Ze()*42;t.moveTo(o*256+s,h),t.lineTo(o*256+s+256,h+(Ze()-0.5)*3),t.stroke()}}}return si(t,512,512,10),e})();Jt.brick=(()=>{let e=Lt(512,512),t=e.getContext("2d");t.fillStyle="#3a2c28",t.fillRect(0,0,512,512);let i=128,n=42;for(let r=0;r<12;r++)for(let s=-1;s<5;s++){let o=r%2*64,a=8+Ze()*8,l=30+Ze()*14;t.fillStyle=`hsl(${a},${48+Ze()*14}%,${l}%)`,t.fillRect(s*i+o+3,r*n+3,i-6,n-6)}return si(t,512,512,26),e})();Jt.carpet=(()=>{let e=Lt(256,256),t=e.getContext("2d");return t.fillStyle="#857f76",t.fillRect(0,0,256,256),si(t,256,256,26),e})();Jt.slats=(()=>{let e=Lt(512,512),t=e.getContext("2d");for(let i=0;i<16;i++)t.fillStyle=`hsl(${28+Ze()*5},38%,${24+Ze()*8}%)`,t.fillRect(i*32,0,28,512),t.fillStyle="#0c0b0b",t.fillRect(i*32+28,0,4,512);return si(t,512,512,10),e})();Jt.oak=(()=>{let e=Lt(512,512),t=e.getContext("2d"),i=512,n=128;for(let r=0;r<4;r++){let s=r%2*200;for(let o=-1;o<2;o++){t.fillStyle=`hsl(${32+Ze()*4},${28+Ze()*6}%,${66+Ze()*6}%)`,t.fillRect(o*512+s,r*128,510,126);for(let a=0;a<26;a++){t.strokeStyle=`rgba(90,60,30,${0.04+Ze()*0.08})`,t.beginPath();let l=r*128+Ze()*128;t.moveTo(o*512+s,l),t.lineTo(o*512+s+512,l+(Ze()-0.5)*6),t.stroke()}}}return si(t,512,512,8),e})();Jt.greige=(()=>{let e=Lt(256,256),t=e.getContext("2d");return t.fillStyle="#a3a5ab",t.fillRect(0,0,256,256),si(t,256,256,8),e})();Jt.graphite=(()=>{let e=Lt(256,256),t=e.getContext("2d");return t.fillStyle="#26272c",t.fillRect(0,0,256,256),si(t,256,256,10),e})();Jt.plaster=(()=>{let e=Lt(256,256),t=e.getContext("2d");return t.fillStyle="#d9d8d4",t.fillRect(0,0,256,256),si(t,256,256,10),e})();Jt.darkwall=(()=>{let e=Lt(256,256),t=e.getContext("2d");return t.fillStyle="#25252c",t.fillRect(0,0,256,256),si(t,256,256,12),e})();Jt.pvc=(()=>{let e=Lt(256,256),t=e.getContext("2d");return t.fillStyle="#2f6b4f",t.fillRect(0,0,256,256),si(t,256,256,12),e})();Jt.rubber=(()=>{let e=Lt(256,256),t=e.getContext("2d");return t.fillStyle="#23262f",t.fillRect(0,0,256,256),si(t,256,256,30),e})();Jt.tile=(()=>{let e=Lt(256,256),t=e.getContext("2d");return t.fillStyle="#e4e4e2",t.fillRect(0,0,256,256),t.strokeStyle="#a9a9a6",t.lineWidth=3,t.strokeRect(0,0,256,256),si(t,256,256,8),e})();function $i(e,t,i=0.85,n=0,r=1,s=1,o={}){let a=Yc(Jt[e],r/t,s/t);return new mt(Object.assign({map:a,bumpMap:a,bumpScale:e==="brick"?3:0.8,roughness:i,metalness:n},o))}var se=(e,t=0.6,i=0,n)=>new mt(Object.assign({color:e,roughness:t,metalness:i},n||{})),zt=(e,t=1)=>new mt({color:0,emissive:e,emissiveIntensity:t,toneMapped:!0});function _u(e,t,i,n=0,r=0,s=0,o=0,a=!0){let l=new ee(t,i);return l.position.set(n,r,s),l.rotation.y=o,l.castShadow=a,l.receiveShadow=!0,e.add(l),l}var ae=(e,t,i,n,r,s,o,a,l=0)=>_u(e,new Ut(t,i,n),r,s,o,a,l);var yt=(e,t,i,n,r,s,o,a,l=24)=>_u(e,new Ct(t,i,n,l),r,s,o,a);function Dn(e,t,i,n,r,s,o,a,l=0,c="bold 120px Arial Black, Arial",h,f=!0){let u=Lt(1024,Math.round(1024*n/i)),p=u.getContext("2d");if(h)p.fillStyle=h,p.fillRect(0,0,u.width,u.height);p.font=c,p.textAlign="center",p.textBaseline="middle",p.shadowColor=r,p.shadowBlur=28,p.fillStyle=r,p.fillText(t,u.width/2,u.height/2),p.shadowBlur=8,p.fillText(t,u.width/2,u.height/2);let g=new Yi(u);g.colorSpace=wt;let _=new ee(new Ft(i,n),new It({map:g,transparent:!h,toneMapped:!1}));if(_.position.set(s,o,a),_.rotation.y=l,e.add(_),!f)return _;let m=new rr(new ue(r),3,4,2);return m.position.set(s,o,a),m.position.add(new A(Math.sin(l),0,Math.cos(l)).multiplyScalar(0.4)),e.add(m),_}function Pi(e,t,i,n,r,s,o=12){let a=new rr(r,s,o,2);return a.position.set(t,i,n),e.add(a),a}var xs=new ft;Ei.add(xs);var Vi=new ft;xs.add(Vi);var yu=[];function Qi(e,t,i,n,r,s,o,a=[],l=0.25,c=!1){let h=n-t,f=r-i,u=Math.hypot(h,f),p=-Math.atan2(f,h),g=[],_=0;a.sort((d,v)=>d[0]-v[0]);for(let[d,v]of a){if(d>_)g.push([_,d,0]);g.push([d,v,1]),_=v}if(_<u)g.push([_,u,0]);for(let[d,v,y]of g){let S=v-d,E=t+h/u*(d+v)/2,w=i+f/u*(d+v)/2,x=y?2.2:0,M=y?s-2.2:s;if(M>0.01){let R=new ee(new Ut(S,M,l),o(S,M));if(R.position.set(E,x+M/2,w),R.rotation.y=p,R.castShadow=R.receiveShadow=!0,e.add(R),c)yu.push(R)}if(y)for(let R of[d,v]){let U=t+h/u*R,I=i+f/u*R,O=new ee(new Ut(0.1,2.2,l+0.06),se(1842208,0.6));O.position.set(U,1.1,I),O.rotation.y=p,e.add(O)}}let m=new ee(new Ut(u,0.12,l+0.03),se(1381658,0.7));m.position.set((t+n)/2,0.06,(i+r)/2),m.rotation.y=p,e.add(m)}function ll(e,t,i){let n=new ki(t.map((o)=>new k(o[0],-o[1]))),r=new mo(n);r.rotateX(-Math.PI/2);let s=new ee(r,i);return s.receiveShadow=!0,e.add(s),s}function Io(e,t,i){let n=new ki(e.map((o)=>new k(o[0],-o[1]))),r=new mo(n);r.rotateX(-Math.PI/2),i.side=kt;let s=new ee(r,i);s.position.y=t,Vi.add(s)}Jt.carpetDark=(()=>{let e=Lt(256,256),t=e.getContext("2d");t.fillStyle="#1b1c22",t.fillRect(0,0,256,256);for(let i=0;i<6000;i++){let n=20+Ze()*22;t.fillStyle=`rgba(${n},${n},${n+7},.5)`,t.fillRect(Ze()*256,Ze()*256,1+Ze()*1.4,1+Ze()*2.2)}return si(t,256,256,12),e})();Jt.fabric=(()=>{let e=Lt(256,256),t=e.getContext("2d");t.fillStyle="#3b3e46",t.fillRect(0,0,256,256),t.strokeStyle="rgba(0,0,0,.18)",t.lineWidth=1;for(let i=0;i<256;i+=4)t.beginPath(),t.moveTo(i,0),t.lineTo(i,256),t.stroke(),t.beginPath(),t.moveTo(0,i),t.lineTo(256,i),t.stroke();return si(t,256,256,14),e})();Jt.plywood=(()=>{let e=Lt(512,1024),t=e.getContext("2d"),i=t.createLinearGradient(0,0,512,0);i.addColorStop(0,"#c7a368"),i.addColorStop(0.5,"#d2b077"),i.addColorStop(1,"#c39d62"),t.fillStyle=i,t.fillRect(0,0,512,1024);for(let r=0;r<380;r++){let s=Ze()*512,o=Ze()*1024;t.strokeStyle=`rgba(${95+Ze()*40},${60+Ze()*30},25,${0.05+Ze()*0.12})`,t.lineWidth=0.6+Ze()*1.6,t.beginPath(),t.moveTo(s,o),t.bezierCurveTo(s+Ze()*16-8,o+120,s+Ze()*16-8,o+260,s+Ze()*10-5,o+380+Ze()*200),t.stroke()}for(let r=0;r<4;r++){let s=Ze()*512,o=Ze()*1024;for(let a=3;a<22;a+=4)t.strokeStyle=`rgba(90,55,20,${0.25-a/120})`,t.lineWidth=1.5,t.beginPath(),t.ellipse(s,o,a*0.7,a*1.5,0,0,7),t.stroke()}let n=83.9344262295082;for(let r=0;r<6;r++)for(let s=0;s<12;s++){let o=38+r*n,a=40+s*n;if(o>500)continue;t.fillStyle="rgba(30,18,8,.85)",t.beginPath(),t.arc(o,a,5,0,7),t.fill(),t.fillStyle="rgba(255,230,190,.35)",t.beginPath(),t.arc(o-1,a-1,1.6,0,7),t.fill()}return t.strokeStyle="rgba(40,24,10,.7)",t.lineWidth=3,t.strokeRect(1,1,510,1022),si(t,512,1024,10),e})();Jt.matBlue=(()=>{let e=Lt(256,512),t=e.getContext("2d");return t.fillStyle="#244f9e",t.fillRect(0,0,256,512),si(t,256,512,26),t.strokeStyle="rgba(8,16,40,.9)",t.lineWidth=6,t.strokeRect(2,2,252,508),t.strokeStyle="rgba(160,190,255,.35)",t.lineWidth=2,t.setLineDash([7,6]),t.strokeRect(12,12,232,488),e})();Jt.steel=(()=>{let e=Lt(128,128),t=e.getContext("2d");return t.fillStyle="#5b6068",t.fillRect(0,0,128,128),si(t,128,128,18),e})();var gt=new ft;xs.add(gt);var Ii=3.2,gg=[[-8.8,-3.85],[8.8,-3.85],[8.8,3.85],[-8.8,3.85]],xg=[[-3.9,-9.4],[4.3,-9.4],[4.3,-3.85],[-3.9,-3.85]],Nr;function Zc(e,t,i){let n=$i(e,t,i,0,1,1);return n.map.repeat.set(1/t,1/t),n.bumpMap=n.map,n}var _s=(e,t)=>$i("darkwall",1.4,0.9,0,e,t),Iv=(e,t)=>$i("graphite",1.4,0.85,0,e,t),Lv=(e,t)=>$i("slats",1,0.7,0,e,t),_g=Zc("carpetDark",0.6,1);ll(gt,gg,_g);ll(gt,xg,_g);Qi(gt,-8.8,-3.85,-3.9,-3.85,Ii,_s);Qi(gt,-3.9,-3.85,-3.9,-9.4,Ii,_s);Qi(gt,-3.9,-9.4,4.3,-9.4,Ii,Lv);Qi(gt,4.3,-9.4,4.3,-3.85,Ii,_s);Qi(gt,4.3,-3.85,8.8,-3.85,Ii,_s);Qi(gt,8.8,-3.85,8.8,3.85,Ii,Iv);Qi(gt,8.8,3.85,-8.8,3.85,Ii,_s,[[9.8,11.6]],0.25,!0);Qi(gt,-8.8,3.85,-8.8,-3.85,Ii,_s,[[2.65,4.85]]);for(let[e,t]of[[-3.9,-3.85],[4.3,-3.85]])ae(gt,0.5,Ii,0.5,se(2763569,0.7),e,Ii/2,t),ae(gt,0.54,0.12,0.54,se(855312,0.6),e,0.06,t);var yg=()=>se(1908260,0.9);Io(gg,Ii,yg());Io(xg,Ii,yg());ae(Vi,8.6,0.34,0.55,se(1381914,0.85),0.2,Ii-0.17,-3.85);for(let[e,t,i,n,r]of[[0,-3.62,17.2,0.06,6966527],[0,3.62,17.2,0.06,6966527],[-8.58,0,0.06,7.2,6966527],[8.58,0,0.06,7.2,6966527],[0.2,-9.18,8,0.06,16762512],[-3.68,-6.6,0.06,5.2,16762512],[4.08,-6.6,0.06,5.2,16762512]])ae(Vi,i,0.025,n,zt(r,3.5),e,Ii-0.015,t);for(let e=0;e<6;e++)for(let t of[-1.8,1.8])yt(Vi,0.07,0.07,0.02,zt(16773856,8),-7+e*2.8+1,Ii-0.02,t);for(let e=0;e<3;e++)for(let t of[-5.5,-8])yt(Vi,0.07,0.07,0.02,zt(16773856,8),-2.4+e*2.6+0.2,Ii-0.02,t);Ei.add(new $a(16777215,0.34));Dr.toneMappingExposure=0.8;Ei.environmentIntensity=0.3;Pi(gt,0.2,2.8,0,16773598,14,14);Pi(gt,-6.2,2.8,-2.2,16773340,10,9);Pi(gt,-6.2,2.8,2.2,16773340,10,9);Pi(gt,0.2,2.9,-6.6,16774116,16,10);Pi(gt,2.9,2.5,2.5,16761466,10,8);Pi(gt,2.9,0.35,1.6,11554047,3,4);Pi(gt,7.3,2.6,0,9071871,5,7);Pi(gt,-0.6,2.7,0.4,3725567,3,6);var Ro=(e,t,i,n,r=0,s=0,o=0,a=xs)=>{let l=new ee(new Ut(e,t,i),n);return l.position.set(r,s,o),a.add(l),l};function vg(e,t,i,n){let r=document.createElement("canvas");r.width=e,r.height=t,i(r.getContext("2d"),e,t);let s=new Yi(r);if(s.colorSpace=wt,s.anisotropy=8,n)s.wrapS=s.wrapT=Zn,s.repeat.set(n[0],n[1]);return s}var Jc=(e,t={})=>new mt({color:e,roughness:t.r??0.6,metalness:t.m??0.1,emissive:t.e??0,emissiveIntensity:t.ei??1,side:t.side}),Mg=(e,t=1)=>new It({color:new ue(e).multiplyScalar(t),toneMapped:!1});function Sg(e,t,i,n,r,s,o,a=0){let l=new ee(new Ft(e,t),new It({map:i,transparent:!0,toneMapped:!1}));return l.position.set(r,s,o),l.rotation.y=a,n.add(l),l}var vu=vg,Dv=Jc;var Mu=Sg,bg=[];function Nv(e,{w:t=1024,h:i=384,font:n="900 250px Inter,Arial,sans-serif",color:r="#3dff9a",fill:s="#c8ffe2",lw:o=10,blur:a=30}={}){return vu(t,i,(l,c,h)=>{l.clearRect(0,0,c,h),l.font=n,l.textAlign="center",l.textBaseline="middle",l.shadowColor=r,l.shadowBlur=a,l.lineWidth=o,l.strokeStyle=r,l.lineJoin="round",l.strokeText(e,c/2,h/2+6),l.shadowBlur=0,l.fillStyle=s,l.fillText(e,c/2,h/2+6)})}function Uv(e,t="#3dff9a",i=1){let n=Nv(e,{w:768,h:192,font:"800 96px Inter,Arial,sans-serif",color:t,fill:"#ffffff",lw:6,blur:18}),r=new La(new ts({map:n,transparent:!0,depthWrite:!1,toneMapped:!1}));return r.scale.set(2.4*i,0.6*i,1),r}(function(){let e=Ro,t=vg,i=Jc,n=Mg,r=Sg,s={games:[["VAL","Valorant","#ff4655","#fff"],["LoL","League","#1b3a8a","#e9c46a"],["CS2","CS2","#e8793a","#1a0f05"],["RL","Rocket League","#1e7bff","#ff9a4a"],["ARK","Arkheron","#1fb89a","#032a22"],["S2","SMITE 2","#6a3ad0","#ffd68a"]]},o=new ft;o.position.set(8.19,0,0),o.rotation.y=-Math.PI/2,gt.add(o),Nr=o;let a=i(790562,{r:0.4,m:0.4});e(1.9,0.05,0.85,a,0,0.75,0,o),[[-0.9,-0.38],[0.9,-0.38],[-0.9,0.38],[0.9,0.38]].forEach(([L,N])=>e(0.05,0.75,0.05,a,L,0.375,N,o)),e(1.9,0.015,0.02,n(3824895,1.4),0,0.72,0.43,o);let l=t(512,300,(L,N,Q)=>{L.fillStyle="#12062a",L.fillRect(0,0,N,Q),L.strokeStyle="#ff4fa6",L.globalAlpha=0.5,L.lineWidth=2,L.beginPath(),L.moveTo(20,40),L.quadraticCurveTo(70,80,40,140),L.moveTo(490,30),L.quadraticCurveTo(440,90,470,150),L.stroke(),L.globalAlpha=1,L.font="900 100px Inter,Arial",L.textAlign="center",L.shadowColor="#ff4f8a",L.shadowBlur=24,L.lineWidth=6,L.strokeStyle="#ff4f8a",L.strokeText("FONGER",N/2,180),L.shadowBlur=0,L.fillStyle="#2a0a2e",L.fillText("FONGER",N/2,180)}),c=s&&s.games||[],h=t(512,300,(L,N,Q)=>{let z=L.createLinearGradient(0,0,N,Q);z.addColorStop(0,"#10163f"),z.addColorStop(0.55,"#2a1a6e"),z.addColorStop(1,"#5a1f78"),L.fillStyle=z,L.fillRect(0,0,N,Q),c.forEach((X,Z)=>{let de=60+Z%3*150,V=40+Math.floor(Z/3)*110;L.fillStyle=X[2],L.beginPath(),L.roundRect(de,V,90,90,20),L.fill(),L.fillStyle=X[3],L.font="900 30px Inter,Arial",L.textAlign="center",L.fillText(X[0],de+45,V+56)}),L.fillStyle="rgba(5,6,15,.9)",L.fillRect(0,Q-26,N,26),L.fillStyle="#38e8ff",L.fillRect(10,Q-20,14,14)});function f(L,N,Q,z,X,Z,de,V=0,j=0,ve=0){new vo().load(L,(Me)=>{Me.colorSpace=wt,Me.anisotropy=8;let Oe=new ee(new Ft(N,Q*(Me.image.height/Me.image.width)/(Q/N)),new It({map:Me,transparent:!0,toneMapped:!1}));Oe.position.set(X,Z,de),Oe.rotation.set(V,j,ve),z.add(Oe)},void 0,()=>{})}let u=i(460814,{r:0.55,m:0.25}),p=i(724246,{r:0.28,m:0.6}),g=i(15329774,{r:0.45,m:0.05}),_=i(1382175,{m:0.8,r:0.35});function m(L,N,Q){let Z=new ft;Z.position.set(L,0.775,-0.2),Z.rotation.y=N,o.add(Z);let de=new ee(new Oi(0.56,0.32,0.025,3,0.006),p);de.position.y=0.3,Z.add(de),r(0.542,0.3,Q,Z,0,0.3,0.0135),e(0.03,0.006,0.001,i(1777451,{m:0.8}),0,0.146,0.0135,Z);let V=new ee(new Mr(0.0035,8),n(4063130,2));V.position.set(0.2,0.145,0.0135),Z.add(V);let j=new ee(new Ct(0.012,0.014,0.17,12),g);j.position.set(0,0.2,-0.03),Z.add(j);let ve=new ee(new Ct(0.11,0.115,0.012,40),g);ve.position.set(0,0.006,-0.02),Z.add(ve)}function d(L,N,Q){let Z=new ft;Z.position.set(L,0.775,-0.2),Z.rotation.y=N,o.add(Z);let de=new ee(new Oi(0.62,0.355,0.028,3,0.006),p);de.position.y=0.36,Z.add(de),e(0.28,0.2,0.03,u,0,0.36,-0.028,Z),r(0.604,0.33699999999999997,Q,Z,0,0.36,0.0155),e(0.03,0.006,0.001,i(1777451,{m:0.8}),0,0.1875,0.0155,Z);let V=new ft;V.position.set(L,0.775,-0.405),o.add(V),e(0.06,0.05,0.05,_,0,-0.012,0,V),e(0.05,0.012,0.085,_,0,-0.035,0,V);let j=new ee(new Ct(0.014,0.014,0.42,16),_);j.position.set(0,0.21,0),V.add(j);let ve=new ee(new Ct(0.02,0.02,0.03,16),_);ve.position.set(0,0.4,0),V.add(ve),e(0.03,0.022,0.12,_,0,0.4,0.06,V);let Me=new ee(new Ct(0.017,0.017,0.03,16),_);Me.position.set(0,0.4,0.12),V.add(Me),e(0.03,0.02,0.06,_,0,0.4,0.15,V),e(0.1,0.1,0.012,_,0,0.36,-0.05,Z)}m(-0.52,0.3,l),d(0.12,-0.04,h);{let L=new ee(new Ct(0.045,0.047,0.01,32),g);L.position.set(-0.02,0.78,-0.08),o.add(L);let N=new ee(new po(0.028,0.033,32),n(8019199,1.2));N.rotation.x=-Math.PI/2,N.position.set(-0.02,0.7855,-0.08),o.add(N);let Q=new ee(new Ct(0.03,0.03,0.15,24),i(657933,{r:0.4,m:0.6}));Q.position.set(0.5,0.85,-0.14),o.add(Q);let z=new ee(new Ct(0.031,0.031,0.012,24),_);z.position.set(0.5,0.92,-0.14),o.add(z)}let v=t(1024,440,(L,N,Q)=>{L.fillStyle="#0c0d11",L.fillRect(0,0,N,Q),L.strokeStyle="#2b2e3a",L.lineWidth=4,L.setLineDash([12,9]),L.strokeRect(12,12,N-24,Q-24),L.setLineDash([]),L.font="700 64px Inter,Arial",L.fillStyle="#9aa0b4",L.textAlign="right",L.fillText("Logitech G",N-52,Q-44)}),y=new ee(new Ft(0.9,0.38),new mt({map:v,roughness:0.95}));y.rotation.x=-Math.PI/2,y.position.set(-0.1,0.7765,0.2),o.add(y);let S=t(1480,570,(L,N,Q)=>{L.fillStyle="#0a0b10",L.fillRect(0,0,N,Q);let z=76,X=40,Z=40,de="#6a4cff",V=(Me,Oe,Te,ut,De=1)=>{let Ne=X+Me*z+3,rt=Z+Oe*z+3,re=Te*z-6,he=De*z-6;L.shadowColor=de,L.shadowBlur=16,L.fillStyle="#12141c",L.beginPath(),L.roundRect(Ne,rt,re,he,10),L.fill(),L.shadowBlur=0,L.strokeStyle="rgba(106,76,255,.65)",L.lineWidth=2,L.stroke(),L.fillStyle="#c4b8ff",L.font="600 21px Inter,Arial",L.textAlign="center",L.textBaseline="middle",L.fillText(ut,Ne+re/2,rt+he/2+1)},j=(Me,Oe,Te=0)=>{let ut=Te;Oe.forEach(([De,Ne])=>{if(De!==null)V(ut,Me,Ne,De);ut+=Ne})};j(0,[["Esc",1],[null,1],["F1",1],["F2",1],["F3",1],["F4",1],[null,0.5],["F5",1],["F6",1],["F7",1],["F8",1],[null,0.5],["F9",1],["F10",1],["F11",1],["F12",1],[null,0.25],["Prt",1],["Scr",1],["Pau",1]]);let ve="1234567890".split("");j(1.5,[["`",1],...ve.map((Me)=>[Me,1]),["-",1],["=",1],["⌫",2],[null,0.25],["Ins",1],["Hm",1],["Pg↑",1]]),j(2.5,[["Tab",1.5],..."QWERTYUIOP".split("").map((Me)=>[Me,1]),["[",1],["]",1],["\\",1.5],[null,0.25],["Del",1],["End",1],["Pg↓",1]]),j(3.5,[["Caps",1.75],..."ASDFGHJKL".split("").map((Me)=>[Me,1]),[";",1],["'",1],["Enter",2.25]]),j(4.5,[["Shift",2.25],..."ZXCVBNM".split("").map((Me)=>[Me,1]),[",",1],[".",1],["/",1],["Shift",2.75],[null,1.25],["↑",1]]),j(5.5,[["Ctrl",1.25],["Win",1.25],["Alt",1.25],["",6.25],["Alt",1.25],["Fn",1.25],["Menu",1.25],["Ctrl",1.25],[null,0.25],["←",1],["↓",1],["→",1]])}),E=new ft;E.position.set(-0.2,0.7765,0.22),o.add(E);let w=new ee(new Oi(0.365,0.016,0.142,3,0.006),i(789778,{r:0.4,m:0.55}));w.position.y=0.008,E.add(w);let x=new ee(new Ft(0.352,0.13285621621621618),new mt({map:S,emissiveMap:S,emissive:16777215,emissiveIntensity:0.55,roughness:0.6}));x.rotation.x=-Math.PI/2,x.position.y=0.0166,E.add(x),f("logos/razer.png",0.03,0.03,E,0.14,0.0168,-0.06,-Math.PI/2);let M=new ft;M.position.set(0.27,0.7775,0.21),M.rotation.y=0.12,o.add(M);{let L=new On(1,40,28),N=L.attributes.position;for(let X=0;X<N.count;X++){let Z=N.getX(X),de=N.getY(X),V=N.getZ(X);de=Math.max(de,0);let j=V*0.5+0.5,ve=0.0225+0.0095*j;N.setXYZ(X,Z*ve*(1-0.18*Math.max(0,de)),de*(0.0115+0.013*j),V*0.0635)}L.computeVertexNormals(),M.add(new ee(L,i(657932,{r:0.62,m:0.1}))),e(0.0014,0.0008,0.034,i(0),0,0.0185,-0.028,M);let Q=new ee(new Ct(0.0045,0.0045,0.006,14),i(2763830,{r:0.5,m:0.5}));Q.rotation.z=Math.PI/2,Q.position.set(0,0.0215,-0.026),M.add(Q);let z=new ee(new Mr(0.0025,10),n(4063130,0.9));z.rotation.x=-Math.PI/2,z.position.set(0,0.0195,0.01),M.add(z),f("logos/logitech-g.png",0.012,0.012,M,0,0.0245,0.032,-Math.PI/2)}let R=new ft;R.position.set(-0.7,0.775,0.26),R.rotation.y=0.5,o.add(R);let U=i(14252331,{r:0.28,m:0.85}),I=i(789518,{r:0.9});{let L=new ft;L.position.y=0.05,L.rotation.x=Math.PI/2-0.15,R.add(L);let N=new ee(new ir(0.088,0.0085,10,40,Math.PI),i(657932,{r:0.7}));N.position.y=0.02,L.add(N),[-1,1].forEach((Q)=>{let z=new ee(new Ct(0.047,0.044,0.03,36),U);z.rotation.z=Math.PI/2,z.position.set(Q*0.093,-0.06,0),L.add(z);let X=new ee(new ir(0.04,0.005,8,32),i(789518,{m:0.7,r:0.35}));X.rotation.y=Math.PI/2,X.position.set(Q*0.108,-0.06,0),L.add(X);let Z=new ee(new Ct(0.048,0.048,0.022,36),I);Z.rotation.z=Math.PI/2,Z.position.set(Q*0.075,-0.06,0),L.add(Z)})}let O=bg,te="n",P=new ft;P.position.set(0.83,1.025,-0.15),P.rotation.y=0.28,o.add(P);{let z=i(658194,{r:0.4,m:0.55});e(0.22,0.014,0.46,i(658194,{r:0.6,m:0.4}),0,0.243,0,P),e(0.22,0.012,0.46,z,0,-0.244,0,P),e(0.01,0.5,0.46,z,0.105,0,0,P),e(0.22,0.5,0.01,i(460813),0,0,-0.225,P),[-1,1].forEach((De)=>e(0.012,0.5,0.012,z,-0.104,0,De*0.224,P)),e(0.22,0.5,0.012,i(723988,{r:0.5,m:0.4}),0,0,0.224,P);let X=t(256,256,(De,Ne,rt)=>{De.fillStyle="#17104a",De.fillRect(0,0,Ne,rt);let re=De.createRadialGradient(Ne/2,rt/2,10,Ne/2,rt/2,Ne/2);re.addColorStop(0,"#9a7bff"),re.addColorStop(1,"#4a2cff"),De.fillStyle=re,De.fillRect(0,0,Ne,rt),De.strokeStyle="#1a0f5a",De.lineWidth=3;let he=14;for(let fe=-1;fe<14;fe++)for(let Ce=-1;Ce<14;Ce++){let Ue=Ce*he*1.75+fe%2*he*0.87,Ke=fe*he*1.5;De.beginPath();for(let Ve=0;Ve<6;Ve++){let lt=Math.PI/3*Ve+Math.PI/6;De.lineTo(Ue+Math.cos(lt)*he,Ke+Math.sin(lt)*he)}De.closePath(),De.stroke()}De.fillStyle="#05061a",De.beginPath();for(let fe=0;fe<6;fe++){let Ce=Math.PI/3*fe;De.lineTo(Ne/2+Math.cos(Ce)*34,rt/2+Math.sin(Ce)*34)}De.closePath(),De.fill()});e(0.13,0.46,0.004,i(526618),0.02,0,0.2305,P),[0.155,0,-0.155].forEach((De)=>{let Ne=new ee(new Mr(0.064,40),new It({map:X,toneMapped:!1,color:new ue(1.1,1.1,1.4)}));Ne.position.set(0.02,De,0.23320000000000002),P.add(Ne)});let Z=-0.08,de=e(0.006,0.44,0.36,i(1053471,{r:0.6,m:0.3}),0.08,0,-0.03,P),V=new ee(new Ct(0.036,0.036,0.03,32),i(658194,{r:0.3,m:0.7}));V.rotation.z=Math.PI/2,V.position.set(Z+0.03,0.09,0.07),P.add(V);let j=new ee(new po(0.019,0.03,32),n(4877567,1.8));j.rotation.y=-Math.PI/2,j.position.set(Z+0.0125,0.09,0.07),P.add(j);let ve=(De)=>P.add(new ee(new Xa(new co(De.map((Ne)=>new A(...Ne))),16,0.0075,8),i(14672878,{r:0.5})));ve([[Z+0.03,0.12,0.09],[Z+0.03,0.2,0.1],[Z+0.03,0.235,0.05]]),ve([[Z+0.03,0.12,0.05],[Z+0.03,0.2,0],[Z+0.03,0.235,-0.04]]);let Me=new ee(new Oi(0.04,0.05,0.3,2,0.006),i(658192,{r:0.35,m:0.7}));Me.position.set(Z+0.03,-0.06,0.02),P.add(Me),e(0.004,0.004,0.26,n(16054015,0.9),Z+0.008,-0.06,0.02,P),[0,0.016].forEach((De)=>e(0.012,0.11,0.008,n(6966527,1.2),Z+0.03,0.13,-0.09-De,P));let Oe=e(0.04,0.03,0.3,i(723986,{r:0.5,m:0.5}),0,0.22,-0.02,P),Te=new ee(new Ft(0.44,0.48),new go({color:659488,transparent:!0,opacity:0.2,roughness:0.04,clearcoat:1,side:kt,depthWrite:!1}));Te.rotation.y=-Math.PI/2,Te.position.set(-0.108,0,0),P.add(Te),((De,Ne)=>e(0.006,Ne,0.46,z,-0.107,De,0,P))(0.245,0.012)}{let L=new rr(5913855,3.2,3,1.6);L.position.set(0.85,1.2,-0.6),o.add(L)}let q=new ft;q.position.set(0.05,0,0.9),q.rotation.y=0.22,o.add(q);{let L=i(856356,{r:0.55,m:0.05}),N=i(1716106,{r:0.5,e:662118,ei:0.12}),Q=i(460813,{r:0.4,m:0.7}),z=new ee(new Oi(0.52,0.09,0.5,4,0.04),L);z.position.y=0.5,q.add(z),[-1,1].forEach((V)=>{let j=new ee(new Oi(0.06,0.1,0.46,3,0.025),N);j.position.set(V*0.25,0.54,0),q.add(j)});let X=new ee(new Oi(0.5,0.72,0.09,4,0.04),L);X.position.set(0,0.92,0.26),X.rotation.x=-0.12,q.add(X),[-1,1].forEach((V)=>{let j=new ee(new Oi(0.07,0.5,0.1,3,0.03),N);j.position.set(V*0.235,0.88,0.235),j.rotation.x=-0.12,q.add(j)});let Z=new ee(new Oi(0.26,0.17,0.08,3,0.04),N);Z.position.set(0,1.28,0.3),Z.rotation.x=-0.12,q.add(Z),[-1,1].forEach((V)=>{e(0.04,0.2,0.04,Q,V*0.3,0.68,0.02,q);let j=new ee(new Oi(0.07,0.03,0.26,2,0.012),L);j.position.set(V*0.3,0.79,-0.03),q.add(j)});let de=new ee(new Ct(0.03,0.035,0.34,12),Q);de.position.y=0.3,q.add(de);for(let V=0;V<5;V++){let j=V/5*Math.PI*2,ve=e(0.3,0.03,0.045,Q,0,0.06,0,q);ve.position.set(Math.sin(j)*0.15,0.07,Math.cos(j)*0.15),ve.rotation.y=j-Math.PI/2;let Me=new ee(new On(0.028,10,8),i(1118744,{r:0.8}));Me.position.set(Math.sin(j)*0.31,0.03,Math.cos(j)*0.31),q.add(Me)}}{let L=new ee(new Mr(1.5,64),new mt({map:t(512,512,(N,Q,z)=>{let X=N.createRadialGradient(Q/2,z/2,20,Q/2,z/2,Q/2);X.addColorStop(0,"#1a1f4e"),X.addColorStop(1,"#0c0f2a"),N.fillStyle=X,N.fillRect(0,0,Q,z),N.strokeStyle="#3a5cff",N.globalAlpha=0.6,N.lineWidth=8,N.beginPath(),N.arc(Q/2,z/2,Q/2-14,0,7),N.stroke()}),roughness:1}));L.rotation.x=-Math.PI/2,L.position.set(0.1,0.006,0.75),o.add(L)}})();function Fv(){let e=new ft,t=Ro,i=Jc;{let o=i(723984,{r:0.38,m:0.65}),a=i(328966,{r:0.9}),l=new vo().load("fun-print.jpg");l.colorSpace=wt,l.anisotropy=8;let c=new ee(new Oi(2.4,0.042,0.6,4,0.014),o);c.position.y=0.6789999999999999,e.add(c);let h=new ee(new Ft(2.364,0.564),new go({map:l,roughness:0.5,clearcoat:0.35,clearcoatRoughness:0.35}));h.rotation.x=-Math.PI/2,h.position.y=0.7011999999999999,e.add(h);let f=i(460812);[-0.6,0,0.6].forEach((m)=>t(0.005,0.0012,0.58,f,m,0.7016,0,e)),[-1,1].forEach((m)=>t(2.3,0.03,0.02,o,0,0.6399999999999999,m*0.255,e));let u=1.0999999999999999,p=0.255,g=(m,d,v,y,S,E)=>{let w=new ee(new Ct(m,m,d,16),v);return w.position.set(y,S,E),e.add(w),w};[-1,0,1].forEach((m)=>[-1,1].forEach((d)=>{let v=m*u,y=d*p;g(0.0175,0.38,o,v,0.47,y),g(0.024,0.05,o,v,0.36,y),g(0.0145,0.36,o,v,0.18,y),g(0.019,0.02,a,v,0.01,y)}));let _=(m,d,v)=>{let y=new A(...m),S=new A(...d),E=S.clone().sub(y),w=new ee(new Ct(v,v,E.length(),10),o);w.position.copy(y.clone().add(S).multiplyScalar(0.5)),w.quaternion.setFromUnitVectors(new A(0,1,0),E.normalize()),e.add(w)};[-u,0,u].forEach((m)=>_([m,0.2,-p],[m,0.2,p],0.011)),[-u,u].forEach((m)=>_([m,0.56,-p],[m,0.56,p],0.009))}return e}function Bv(e,t,i,n,r){yt(e,0.045,0.034,0.11,new mt({color:r,roughness:0.4,side:kt}),t,i+0.055,n,16)}function du(e,t,i,n,r=1,s=13936170){let o=[[0.001,0],[0.07,0],[0.07,0.015],[0.03,0.03],[0.02,0.12],[0.05,0.15],[0.07,0.17],[0.09,0.26],[0.1,0.34],[0.08,0.36],[0.075,0.34],[0.07,0.25],[0.05,0.18],[0.001,0.17]].map((l)=>new k(l[0],l[1])),a=_u(e,new dc(o,24),new mt({color:s,roughness:0.18,metalness:1}),t,i,n);return a.scale.setScalar(r),a}function Ov(e,t,i){ae(e,t,i,0.03,se(921104,0.5),0,i/2+0.2,-0.18);for(let r of[-1,1])ae(e,0.05,i,0.4,se(921104,0.5),r*(t/2-0.025),i/2+0.2,0);ae(e,t,0.06,0.4,se(921104,0.5),0,i+0.2,0),ae(e,t,0.2,0.4,se(921104,0.5),0,0.1,0),ae(e,t-0.12,i-0.2,0.02,new mt({color:12577023,transparent:!0,opacity:0.12,roughness:0.02}),0,i/2+0.2,0.2);let n=4;for(let r=0;r<n;r++){let s=0.45+r*((i-0.5)/n);ae(e,t-0.1,0.02,0.34,se(3816000,0.3,0.4),0,s,0),ae(e,t-0.1,0.01,0.01,zt(14674687,5),0,s-0.015,0.14);for(let o=0;o<4;o++)if((r+o)%3===0)du(e,-t/2+0.25+o*(t-0.5)/3,s+0.01,0,0.3+Ze()*0.12,[13936170,12633288][o%2]);else ae(e,0.16,0.12+Ze()*0.05,0.14,se([2838527,16726843,2007130,13206586][o],0.5),-t/2+0.25+o*(t-0.5)/3,s+0.07,0)}}(function(){let e=new ft;e.position.set(-0.6,0,0.4),e.rotation.y=Math.PI/2,gt.add(e);let t=(()=>{let r=Lt(512,256),s=r.getContext("2d");s.fillStyle="#2e7d3a",s.fillRect(0,0,512,256),s.strokeStyle="rgba(255,255,255,.8)",s.lineWidth=3,s.strokeRect(14,14,484,228),s.beginPath(),s.moveTo(256,14),s.lineTo(256,242),s.stroke(),s.beginPath(),s.arc(256,128,34,0,7),s.stroke();let o=new Yi(r);return o.colorSpace=wt,o})();ae(e,1.35,0.22,0.78,se(1710620,0.4),0,0.84,0);let i=new ee(new Ft(1.15,0.58),new mt({map:t,roughness:0.6}));i.rotation.x=-Math.PI/2,i.position.y=0.955,e.add(i);for(let[r,s]of[[-0.62,-0.34],[0.62,-0.34],[-0.62,0.34],[0.62,0.34]])ae(e,0.08,0.84,0.08,se(1710620,0.4),r,0.42,s);[-0.5,-0.25,0,0.25,0.5].forEach((r,s)=>{let o=yt(e,0.009,0.009,0.95,se(13421772,0.15,1),r*1,1.02,0);o.rotation.x=Math.PI/2;for(let a=0;a<(s==1?5:3);a++){let l=-0.2+a*(0.4/(s==1?4:2));ae(e,0.03,0.09,0.04,se(s%2?14692400:3107801,0.5),r,1,l)}for(let a of[-0.5,0.5])yt(e,0.03,0.03,0.08,se(273),r,1.02,a).rotation.x=Math.PI/2})})();(function(){let e=new ft;e.position.set(-8.675,0,-2.6),e.rotation.y=Math.PI/2,gt.add(e),ae(e,1,1,0.1,se(1908258,0.6),0,1.73,0),ae(e,0.08,1,0.25,se(1908258,0.6),-0.5,1.73,0.09),ae(e,0.08,1,0.25,se(1908258,0.6),0.5,1.73,0.09);let t=Lt(512,512),i=t.getContext("2d");i.translate(256,256);let n=["#e8e1c0","#111"];for(let a=0;a<20;a++)for(let[l,c,h,f]of[[240,215,"#d12","#093"],[215,150,"#e8e1c0","#111"],[150,135,"#d12","#093"],[135,40,"#e8e1c0","#111"]])i.beginPath(),i.moveTo(0,0),i.arc(0,0,l,(a-5.5)*Math.PI/10,(a-4.5)*Math.PI/10),i.closePath(),i.fillStyle=a%2?h:f,i.fill(),i.beginPath(),i.moveTo(0,0),i.arc(0,0,c,(a-5.5)*Math.PI/10,(a-4.5)*Math.PI/10),i.closePath(),i.fillStyle=a%2?c==215||c==135?"#e8e1c0":n[1]:n[0];i.setTransform(1,0,0,1,0,0),i.fillStyle="#111",i.fillRect(0,0,512,512),i.translate(256,256);let r=[20,1,18,4,13,6,10,15,2,17,3,19,7,16,8,11,14,9,12,5];for(let a=0;a<20;a++){let l=(a-0.5)*Math.PI/10-Math.PI/2,c=l+Math.PI/10,h=a%2===0,f=[[250,220,h?"#c8202a":"#0b8a3e"],[220,150,h?"#111":"#e8e1c0"],[150,125,h?"#c8202a":"#0b8a3e"],[125,40,h?"#111":"#e8e1c0"]];for(let[u,p,g]of f)i.beginPath(),i.arc(0,0,u,l,c),i.arc(0,0,p,c,l,!0),i.closePath(),i.fillStyle=g,i.fill()}i.beginPath(),i.arc(0,0,40,0,7),i.fillStyle="#0b8a3e",i.fill(),i.beginPath(),i.arc(0,0,16,0,7),i.fillStyle="#c8202a",i.fill();let s=new Yi(t);s.colorSpace=wt;let o=new ee(new Mr(0.225,48),new mt({map:s,roughness:0.8}));o.position.set(0,1.73,0.06),e.add(o),Dn(e,"DARTS",0.8,0.28,"#ff3b3b",0,2.45,0.05,0,"bold 180px Arial Black"),ae(e,0.6,0.45,0.04,se(1448984,0.8),0.95,1.6,0.05),ae(e,0.01,0.01,0.01,se(0)),ae(e,0.9,0.012,0.04,se(15658734,0.5),0,0.007,2.37),ae(e,0.9,0.012,0.01,zt(16726843,3),0,0.012,2.35),Pi(e,0,2.5,0.5,16771522,4,5)})();var Uc=(e,t=0.95)=>$i("fabric",0.5,t,0,1,1,{color:e}),pi=(e,t,i,n,r,s,o,a,l=0.07,c=0,h=0)=>{let f=new ee(new Oi(t,i,n,4,l),r);return f.position.set(s,o,a),f.rotation.x=c,f.rotation.z=h,f.castShadow=f.receiveShadow=!0,e.add(f),f},Hc;function zv(){let e=new ft;e.position.set(0.2,0,-4.3),e.rotation.y=Math.PI,gt.add(e);let t=Uc(4869462),i=Uc(6843512),n=Uc(7567493),s=new ki([[-2.7,0],[2.7,0],[2.7,2.6],[1.7,2.6],[1.7,1],[-1.7,1],[-1.7,2.6],[-2.7,2.6]].map((d)=>new k(d[0],-d[1]))),o=new fo(s,{depth:0.24,bevelEnabled:!0,bevelThickness:0.05,bevelSize:0.05,bevelSegments:4,curveSegments:4});o.rotateX(-Math.PI/2);let a=new ee(o,t);a.position.y=0.1,a.castShadow=a.receiveShadow=!0,e.add(a);for(let[d,v]of[[-2.6,0.1],[2.6,0.1],[-2.6,2.5],[2.6,2.5],[-1.8,0.9],[1.8,0.9]])yt(e,0.03,0.03,0.08,se(723725,0.4,0.6),d,0.04,v,10);let l=zt(6966527,0.9);ae(e,5.2,0.012,0.02,l,0,0.075,0.03),pi(e,5.4,0.58,0.28,t,0,0.67,0.14,0.09);for(let d of[-1,1])pi(e,0.28,0.58,2.32,t,d*2.56,0.67,1.44,0.09);for(let d=0;d<3;d++)pi(e,1.1,0.17,0.7,i,-1.13+d*1.13,0.5,0.65,0.07);for(let d of[-1,1])pi(e,0.72,0.17,0.7,n,d*2.06,0.5,0.65,0.07),pi(e,0.72,0.17,0.78,i,d*2.06,0.5,1.4,0.07),pi(e,0.72,0.17,0.78,i,d*2.06,0.5,2.2,0.07),pi(e,0.22,0.46,0.9,i,d*2.27,0.9,1.2,0.09,0,-d*0.16),pi(e,0.22,0.46,0.9,i,d*2.27,0.9,2.1,0.09,0,-d*0.16);for(let d=0;d<5;d++)pi(e,0.95,0.5,0.2,i,-1.9+d*0.95,0.88,0.37,0.09,-0.2);let c=[13208108,2781048,15130834,8007498,2781048,13208108];[[-2.1,0.75,0.98,0.45,-0.5],[-1.3,0.72,0.55,0.4,0.3],[2.15,0.75,0.97,0.45,0.5],[1.3,0.72,0.55,0.4,-0.3],[-2.2,0.72,2.35,0.4,1.4],[2.2,0.72,2.35,0.4,-1.4]].forEach(([d,v,y,S,E],w)=>{let x=pi(e,S,S,0.13,Uc(c[w],1),d,v,y,0.05,-0.3);x.rotation.y=E});let h=$i("slats",1,0.45,0,1.6,0.9,{color:4862754});pi(e,1.5,0.1,0.85,h,0,0.44,1.75,0.03),pi(e,1.2,0.3,0.6,se(1182986,0.6),0,0.24,1.75,0.02),pi(e,1.4,0.04,0.8,se(1708557,0.7),0,0.1,1.75,0.01),ae(e,0.32,0.05,0.22,se(2775690,0.6),-0.35,0.51,1.7),ae(e,0.3,0.04,0.2,se(12599338,0.6),-0.35,0.555,1.7),yt(e,0.12,0.09,0.08,se(2369067,0.4,0.3),0.35,0.53,1.8,24);let f=Lt(1024,700),u=f.getContext("2d"),p=u.createLinearGradient(0,0,1024,700);p.addColorStop(0,"#16182a"),p.addColorStop(1,"#2a1740"),u.fillStyle=p,u.fillRect(0,0,1024,700),u.strokeStyle="#7a5cff",u.lineWidth=8,u.setLineDash([26,16]),u.strokeRect(40,40,944,620),u.setLineDash([]),u.fillStyle="#9aa0c8",u.textAlign="center",u.textBaseline="middle",u.font="bold 74px Arial",u.fillText("GAME RUG",512,300),u.font="38px Arial",u.fillText('placeholder – window.setRugTexture("moje.jpg")',512,380);let g=new Yi(f);g.colorSpace=wt,g.anisotropy=8,Hc=new mt({map:g,roughness:1});let _=new ee(new Ft(3.8,2.6),Hc);_.rotation.set(-Math.PI/2,0,Math.PI),_.position.set(0,0.014,1.75),_.receiveShadow=!0,e.add(_);let m=new ee(new Ft(3.86,2.66),se(921362,1));m.rotation.x=-Math.PI/2,m.position.set(0,0.011,1.75),e.add(m)}zv();window.setRugTexture=(e)=>new vo().load(e,(t)=>{t.colorSpace=wt,t.anisotropy=8,Hc.map=t,Hc.needsUpdate=!0});(function(){let t=new ft;t.position.set(0.2,0,-9.2),gt.add(t),ae(t,2.5,1.45,0.05,se(328966,0.3,0.5),0,1.65,0);let i=Lt(640,360),n=i.getContext("2d"),r=n.createLinearGradient(0,0,640,360);r.addColorStop(0,"#0b2a4a"),r.addColorStop(0.5,"#4a1f8f"),r.addColorStop(1,"#e8602e"),n.fillStyle=r,n.fillRect(0,0,640,360),n.fillStyle="rgba(255,255,255,.9)",n.font="bold 54px Arial",n.textAlign="center",n.fillText("MAN CAVE",320,190);let s=new Yi(i);s.colorSpace=wt;let o=new ee(new Ft(2.42,1.36),new It({map:s,toneMapped:!1}));o.position.set(0,1.65,0.03),t.add(o),ae(t,2.8,0.5,0.42,se(1381914,0.55),0,0.3,0.17),ae(t,2.8,0.03,0.44,se(4862754,0.45),0,0.565,0.17),ae(t,1.2,0.07,0.1,se(723725,0.4,0.5),0,0.62,0.17);for(let a of[-1.75,1.75])ae(t,0.3,1.5,0.22,se(1052948,0.5),a,0.78,0.12),ae(t,0.22,0.22,0.02,se(657932,0.3,0.6),a,1.2,0.24),yt(t,0.09,0.09,0.02,se(1908258,0.5),a,0.6,0.235,24).rotation.x=Math.PI/2;ae(t,2.6,0.03,0.03,zt(16734920,3),0,0.9,0.01).visible=!1,ae(t,2.6,0.02,0.02,zt(6966527,3.5),0,0.88,-0),ae(t,2.7,0.012,0.01,zt(16734920,3),0,0.5,0.39),Dn(t,"MAN CAVE",1.9,0.34,"#ff4fa6",0,2.75,0.03,0,"bold 130px Arial Black",void 0,!1)})();function Gv(){let e=Nr,t=Jc(790562,{r:0.4,m:0.4});for(let l of[-1,1]){let c=l*1.775;Ro(1.65,0.05,0.85,t,c,0.75,0,e),Ro(0.05,0.75,0.05,t,l*2.575,0.375,-0.38,e),Ro(0.05,0.75,0.05,t,l*2.575,0.375,0.38,e),Ro(1.65,0.015,0.02,Mg(3824895,1.4),c,0.72,0.43,e)}let i=new ee(new Ft(5.3,0.9),new It({color:2768127,transparent:!0,opacity:0.16,toneMapped:!1}));i.rotation.x=-Math.PI/2,i.position.set(0,0.012,0.05),e.add(i);let n=(l,c)=>{yt(e,0.012,0.012,0.22,se(855570,0.4,0.8),l,0.86,-0.28,12),ae(e,0.2,0.01,0.16,se(855570,0.4,0.8),l,0.78,-0.2)},r=(l,c,h)=>{let f=Lt(1024,Math.round(1024*h/c));l(f.getContext("2d"),f.width,f.height);let u=new Yi(f);return u.colorSpace=wt,u.anisotropy=8,u},s=r((l,c,h)=>{let f=l.createLinearGradient(0,0,c,0);f.addColorStop(0,"#05103a"),f.addColorStop(0.5,"#4a1f8f"),f.addColorStop(1,"#ff4f6a"),l.fillStyle=f,l.fillRect(0,0,c,h),l.fillStyle="rgba(255,255,255,.12)";for(let u=0;u<40;u++)l.fillRect(Ze()*c,Ze()*h*0.7,40+Ze()*120,3);l.fillStyle="#fff",l.font="bold 70px Arial",l.fillText('ULTRAWIDE 49"',60,h-70),l.strokeStyle="#38e8ff",l.lineWidth=4,l.beginPath(),l.arc(c/2,h/2,40,0,7),l.stroke()},1.2,0.34),o=r((l,c,h)=>{l.fillStyle="#0b0d1c",l.fillRect(0,0,c,h),l.fillStyle="#38e8ff";for(let f=0;f<14;f++)l.fillRect(40,60+f*110,200+Ze()*600,18);l.fillStyle="#ff4f8a",l.font="bold 56px Arial",l.fillText("STATS",40,46)},0.34,0.6);{let f=new Ct(1.1,1.1,0.34,48,1,!0,Math.PI-0.5454545454545454,1.0909090909090908),u=new ee(f,new It({map:s,toneMapped:!1,side:Nt}));u.scale.x=-1,u.position.set(-1.78,1.12,0.8500000000000001),e.add(u);let p=new ee(new Ct(1.12,1.12,0.37,48,1,!0,Math.PI-0.5454545454545454,1.0909090909090908),se(526605,0.4,0.5));p.material.side=kt,p.scale.x=-1,p.position.copy(u.position),e.add(p),n(-1.78,0),ae(e,1.24,0.012,0.03,zt(6966527,3),-1.78,0.94,-0.3)}for(let[l,c]of[[1.45,0.35],[2.1,0.7]]){let h=new ft;h.position.set(l,0.775,-0.18),h.rotation.y=c,e.add(h),pi(h,0.36,0.62,0.025,se(460811,0.4,0.5),0,0.5,0,0.006);let f=new ee(new Ft(0.34,0.6),new It({map:o,toneMapped:!1}));f.position.set(0,0.5,0.0135),h.add(f),yt(h,0.012,0.012,0.25,se(855570,0.4,0.8),0,0.1,-0.03,12),ae(h,0.18,0.01,0.14,se(855570,0.4,0.8),0,0.004,-0.02),ae(h,0.36,0.012,0.02,zt(16732042,3),0,0.19,-0.02)}let a=(l,c)=>{let h=new ee(new Ft(0.9,1.6),new It({color:new ue(c).multiplyScalar(0.5),transparent:!0,opacity:0.9,toneMapped:!1}));h.position.set(8.665,1.9,l),h.rotation.y=-Math.PI/2,gt.add(h)};[[-2.1,6966527],[-1.05,3717375],[0,16732070],[1.05,3717375],[2.1,6966527]].forEach(([l,c])=>a(l,c)),ae(gt,0.03,0.03,5.4,zt(6966527,3.5),8.66,1.2,0),ae(gt,0.03,0.03,5.4,zt(16732070,3.5),8.66,2.7,0),Dn(gt,"FONGER",2.4,0.5,"#ff4fa6",8.64,2.95,0,-Math.PI/2,"bold 150px Arial Black",void 0,!1)}Gv();var uu=[];function Hv(e){if(!uu[e]){let i=[],n=(h,f,u,p,g,_=1,m=1,d=1,v=0,y=0)=>{h.scale(_,m,d),h.rotateX(v),h.rotateZ(y),h.translate(u,p,g);let S=h.attributes.position.count,E=new Float32Array(S*3),w=new ue(f);for(let x=0;x<S;x++)E[x*3]=w.r,E[x*3+1]=w.g,E[x*3+2]=w.b;h.setAttribute("color",new Yt(E,3)),i.push(h)},r=15780000,s=(h,f,u)=>new Ut(h,f,u),o=(h)=>new On(h,12,10),a=(h,f)=>new lo(h,f,8),l=(h,f)=>new Ct(h,h,f,12);if(n(l(0.05,0.012),1381658,0,0.006,0),e===0){n(s(0.024,0.07,0.03),1849994,-0.016,0.047,0),n(s(0.024,0.07,0.03),1849994,0.016,0.047,0),n(s(0.07,0.075,0.04),15763996,0,0.12,0),n(s(0.02,0.07,0.02),15763996,-0.045,0.12,0),n(s(0.02,0.07,0.02),15763996,0.045,0.12,0),n(o(0.036),15780000,0,0.19,0),n(s(0.07,0.014,0.04),2767466,0,0.2,0.005);for(let h=0;h<7;h++){let f=h/7*Math.PI*2;n(a(0.014,0.05),16765498,Math.sin(f)*0.026,0.225,Math.cos(f)*0.022,1,1,1,Math.cos(f)*0.5,-Math.sin(f)*0.5)}}else if(e===1)n(s(0.07,0.08,0.04),2772688,0,0.1,0),n(s(0.024,0.06,0.03),1382778,-0.016,0.04,0),n(s(0.024,0.06,0.03),1382778,0.016,0.04,0),n(s(0.09,0.12,0.008),13638698,0,0.1,-0.026,1,1,1,0.1),n(o(0.034),15780000,0,0.17,0),n(o(0.036),1315866,0,0.18,-0.006,1,0.8,1),n(s(0.03,0.03,0.01),16765498,0,0.11,0.022);else if(e===2)n(a(0.05,0.14),6959024,0,0.08,0),n(o(0.032),15780000,0,0.17,0),n(a(0.044,0.1),2757744,0,0.245,0,1,1,1,-0.15),n(l(0.056,0.008),2757744,0,0.2,0),n(l(0.004,0.24),5913120,0.06,0.12,0.02),n(o(0.014),3729663,0.06,0.25,0.02);else if(e===3)n(s(0.07,0.08,0.05),12106952,0,0.1,0),n(s(0.03,0.06,0.035),5922412,-0.02,0.04,0),n(s(0.03,0.06,0.035),5922412,0.02,0.04,0),n(s(0.05,0.045,0.045),15132910,0,0.17,0),n(s(0.036,0.01,0.01),3729663,0,0.175,0.024),n(s(0.025,0.07,0.025),13638698,-0.05,0.11,0),n(s(0.025,0.07,0.025),13638698,0.05,0.11,0),n(a(0.008,0.04),16765498,0,0.215,0);else if(e===4){n(s(0.07,0.085,0.04),1381916,0,0.1,0),n(s(0.024,0.06,0.03),735778,-0.016,0.04,0),n(s(0.024,0.06,0.03),735778,0.016,0.04,0),n(o(0.034),15780000,0,0.17,0);for(let h=0;h<6;h++){let f=h/6*Math.PI*2;n(a(0.012,0.04),3072096,Math.sin(f)*0.022,0.2,Math.cos(f)*0.02,1,1,1,Math.cos(f)*0.6,-Math.sin(f)*0.6)}n(s(0.008,0.2,0.012),14673648,0.06,0.13,0.02,1,1,1,0,-0.25)}else if(e===5)n(s(0.04,0.05,0.03),15755944,0,0.04,0),n(o(0.055),15780000,0,0.12,0),n(o(0.058),15755944,0,0.135,-0.008,1,0.85,1),n(o(0.01),1118481,-0.02,0.12,0.05),n(o(0.01),1118481,0.02,0.12,0.05);else n(s(0.09,0.12,0.06),1908520,0,0.07,0),n(s(0.07,0.07,0.005),16765498,0,0.08,0.031),n(o(0.025),13638698,0,0.08,0.034,1,1,0.3),n(s(0.09,0.015,0.062),3729663,0,0.14,0);let c=ug(i,!1);i.forEach((h)=>h.dispose()),uu[e]=new ee(c,new mt({vertexColors:!0,roughness:0.5,metalness:0.05}))}let t=uu[e].clone();return t.castShadow=!0,t}function Eg(e,t){let i=new ft;i.position.set(e,0,t),i.rotation.y=-Math.PI/2,gt.add(i);let n=3,r=6,s=0.36,o=0.028,a=0.39,l=n*s+o,c=r*s+o,h=se(2367260,0.55,0.05),f=se(1052173,0.8);for(let u=0;u<=n;u++)ae(i,o,c,a,h,-l/2+o/2+u*s,c/2,0);for(let u=0;u<=r;u++)ae(i,l,o,a,h,0,o/2+u*s,0);ae(i,l,c,0.01,f,0,c/2,-a/2+0.01);for(let u=1;u<=r;u++)ae(i,l-2*o,0.006,0.014,zt(16767400,2.2),0,u*s-0.004,a/2-0.05);for(let u=0;u<r;u++)for(let p=0;p<n;p++){let g=-l/2+o/2+(p+0.5)*s,_=o+u*s+(u===0?0:0),m=Ze()<0.55?2:1;for(let d=0;d<m;d++){let v=Hv(Math.floor(Ze()*7));v.position.set(g+(m===2?d?0.08:-0.08:0),_,0.03+(Ze()-0.5)*0.06),v.rotation.y=(Ze()-0.5)*0.8,v.scale.setScalar(0.95+Ze()*0.25),i.add(v)}if(Ze()<0.25)ae(i,0.1,0.02,0.07,se([2838527,16726843,2007130][Math.floor(Ze()*3)],0.6),g,_+0.2+0,-0.12).visible=!1}}Eg(8.475,3.17);Eg(8.475,-3.17);function kv(){let t=0.092*Math.sqrt(3)/2;for(let i of[-6.95,-5.75]){let n=new ft;n.position.set(i,0,0),n.rotation.y=Math.PI/2,gt.add(n),n.add(Fv());for(let r of[-1,1]){let s=r<0?14692399:3107801;for(let o=0;o<4;o++){let a=4-o;for(let l=0;l<a;l++)Bv(n,r*(1.08-o*t),0.702,(l-(a-1)/2)*0.092,s)}}for(let r of[-0.3,0.3])yt(n,0.017,0.017,0.002,se(16777215,0.3),0,0.703,r,12).visible=!1}Pi(gt,-6.35,2.6,0,16773336,4,5),ae(gt,2.2,0.012,0.012,zt(16763210,2.5),-6.35,Ii-0.35,0).visible=!0}kv();(function(){let e=new ft;e.position.set(-6.4,0,3.725),e.rotation.y=Math.PI,gt.add(e),ae(e,3.3,2.5,0.06,se(1381143,0.8),0,1.5,0.03);for(let t=0;t<12;t++)ae(e,0.02,2.4,0.03,se(2761760,0.5),-1.6+t*0.29,1.5,0.075);for(let t=0;t<3;t++)for(let i=0;i<8;i++){let n=-1.4+i*0.4,r=2.2-t*0.38,s=[13936170,12633288,11692597][(i+t)%3];ae(e,0.05,0.22,0.01,se([2838527,16726843,2007130][(i*2+t)%3],0.6),n,r+0.15,0.09),yt(e,0.07,0.07,0.015,new mt({color:s,roughness:0.22,metalness:1}),n,r,0.1).rotation.x=Math.PI/2}ae(e,3.2,0.03,0.18,se(3812642,0.4),0,1.05,0.14);for(let t=0;t<6;t++)du(e,-1.3+t*0.5,1.065,0.14,0.38+t%2*0.08,[13936170,12633288,11692597][t%3]);Dn(e,"HALL OF FAME",2.6,0.38,"#ffc94a",0,2.78,0.08,0,"bold 125px Arial Black",void 0,!1);for(let t of[-8.35,-4.45]){let i=new ft;i.position.set(t,0,3.35),gt.add(i),ae(i,0.5,1,0.5,se(1052690,0.4),0,0.5,0),ae(i,0.5,0.01,0.5,zt(11462399,3),0,1,0),du(i,0,1.01,0,1),ae(i,0.5,0.7,0.5,new mt({color:12577023,transparent:!0,opacity:0.13,roughness:0.02,metalness:0}),0,1.36,0)}for(let[t,i,n]of[[-7.7,-3.55,0],[-6.15,-3.55,0],[-3.59,-6.6,Math.PI/2],[4,-6.6,-Math.PI/2]]){let r=new ft;r.position.set(t,0,i),r.rotation.y=n,gt.add(r),Ov(r,1.3,2.1)}})();function Vv(){let e=new ft;e.position.set(2.9,0,3.725),e.rotation.y=Math.PI,gt.add(e);let t=se(1447707,0.85,0.1),i=$i("slats",1,0.6,0,3.6,1,{color:11569754}),n=$i("slats",1,0.35,0,4.2,0.9,{color:5978660}),r=se(13225170,0.22,1);pi(e,3.4,1,0.6,t,-0.3,0.5,1.65,0.02);let s=new ee(new Ut(3.3,0.9,0.04),i);s.position.set(-0.3,0.5,1.97),e.add(s),pi(e,3.8,0.06,0.95,n,-0.3,1.06,1.83,0.02),ae(e,3.3,0.014,0.014,zt(16732120,4),-0.3,1.02,2.28),ae(e,3.3,0.02,0.02,zt(3725567,4),-0.3,0.06,2),ae(e,3.4,0.08,0.03,se(723725,0.5),-0.3,0.04,1.96);let o=yt(e,0.022,0.022,3.2,r,-0.3,0.22,2.3,12);o.rotation.z=Math.PI/2;for(let R of[-1.7,1.1])yt(e,0.018,0.018,0.2,r,R,0.12,2.3,10);pi(e,3.6,0.9,0.5,t,0,0.45,0.27,0.02);let a=new ee(new Ut(3.5,0.8,0.03),i);a.position.set(0,0.45,0.535),e.add(a),ae(e,3.7,0.05,0.56,n,0,0.925,0.28),ae(e,3.5,0.012,0.012,zt(6966527,4),0,0.03,0.55);let l=(()=>{let R=Lt(512,256),U=R.getContext("2d"),I=U.createLinearGradient(0,0,512,0);I.addColorStop(0,"#ff3ea0"),I.addColorStop(0.5,"#7a4cff"),I.addColorStop(1,"#2ab8ff"),U.fillStyle=I,U.fillRect(0,0,512,256);let O=new Yi(R);return O.colorSpace=wt,O})();ae(e,3.6,1.7,0.05,se(723725,0.6),0,1.85,0.03);let c=new ee(new Ft(3.4,1.55),new It({map:l,toneMapped:!1,color:13421772}));c.position.set(0,1.85,0.06),e.add(c);for(let R of[-1,1])ae(e,0.04,1.7,0.34,se(723725,0.5),R*1.8,1.85,0.2);ae(e,3.64,0.04,0.34,se(723725,0.5),0,2.72,0.2);let h=new Ct(0.036,0.036,0.2,10),f=new Ct(0.012,0.02,0.1,10),u=new Ct(0.036,0.026,0.1,12,1,!0),p=48,g=new In(h,new mt({roughness:0.15,metalness:0.1,transparent:!0,opacity:0.88}),p),_=new In(f,g.material,p),m=new In(u,new mt({color:14674687,roughness:0.05,transparent:!0,opacity:0.45,side:kt}),20),d=new Xe,v=[2787898,8010258,13213738,3824335,12066847,1710618,14673642,9054858],y=0,S=0;for(let R=0;R<3;R++){let U=1.4+R*0.5;ae(e,3.4,0.025,0.3,se(855312,0.3,0.3),0,U,0.2),ae(e,3.4,0.008,0.01,zt(16777215,4),0,U-0.02,0.34);for(let I=0;I<16&&y<p;I++){let O=-1.55+I*0.206;if(R===0&&I>9){d.makeTranslation(O,U+0.05,0.2),m.setMatrixAt(S++,d);continue}d.makeTranslation(O,U+0.113,0.2),g.setMatrixAt(y,d),g.setColorAt(y,new ue(v[(I+R*3)%v.length])),d.makeTranslation(O,U+0.263,0.2),_.setMatrixAt(y,d),_.setColorAt(y,new ue(v[(I+R*3)%v.length])),y++}}g.count=y,_.count=y,m.count=S,e.add(g,_,m);let E=new ft;E.position.set(1.2,0.95,0.3),e.add(E),yt(E,0.05,0.05,0.3,r,0,0.15,0,20);let w=yt(E,0.014,0.014,0.16,r,0,0.3,0.07,10);w.rotation.x=Math.PI/2;for(let[R,U]of[[-0.025,16763210],[0.025,16726843]])yt(E,0.007,0.007,0.1,se(U,0.4,0.4),R,0.38,0,8),yt(E,0.01,0.01,0.025,r,R,0.26,0.14,8);ae(E,0.3,0.02,0.2,r,0,0,0.18),ae(E,0.26,0.004,0.16,se(1381914,0.4),0,0.012,0.18),Dn(e,"BAR",0.9,0.3,"#38d8ff",-0.3,2.95,0.05,0,"bold 170px Arial Black",void 0,!1);let x=se(1908001,0.55,0.1),M=se(13619928,0.2,1);for(let R of[-1.6,-0.75,0.1,0.95]){let U=new ft;U.position.set(R,0,2.85),U.rotation.y=Math.PI+(Ze()-0.5)*0.3,e.add(U),yt(U,0.22,0.2,0.08,x,0,0.74,0,28),yt(U,0.21,0.21,0.025,se(723725,0.5),0,0.69,0,24),yt(U,0.025,0.025,0.66,M,0,0.35,0,10),yt(U,0.2,0.22,0.03,M,0,0.015,0,24);let I=new ee(new ir(0.17,0.012,8,24),M);I.rotation.x=Math.PI/2,I.position.set(0,0.3,0),U.add(I),pi(U,0.34,0.22,0.06,x,0,1,-0.2,0.03,-0.12);for(let O of[-1,1]){yt(U,0.01,0.01,0.26,M,O*0.16,0.86,-0.18,8);let te=pi(U,0.04,0.03,0.26,x,O*0.18,0.99,-0.06,0.012)}}}Vv();var qe={cx:-10.8,cz:-11.5,R:7,H:6},Ci=new ft;xs.add(Ci);var kn=[...Array(6)].map((e,t)=>{let i=t*Math.PI/3;return[qe.cx+qe.R*Math.cos(i),qe.cz+qe.R*Math.sin(i)]}),bi=(e,t,i)=>new A(e,t,i),Tg=(e=16777215)=>{let t=Yc(Jt.plywood,1,1);return new mt({map:t,bumpMap:t,bumpScale:0.6,roughness:0.72,metalness:0,side:kt,color:e})},kc=Tg(15917768),fg=Tg(14731684);function Gc(e,t,i){let n=[],r=[];for(let a of e){let[l,c,h,f]=a.p,u=l.distanceTo(c)/1.22,p=l.distanceTo(h)/2.44,g=h.distanceTo(f)/1.22,_=a.ou||0,m=a.ov||0,d=Math.max(u,g);n.push(l.x,l.y,l.z,c.x,c.y,c.z,f.x,f.y,f.z,l.x,l.y,l.z,f.x,f.y,f.z,h.x,h.y,h.z),r.push(_,m,_+u,m,_+g,m+p,_,m,_+g,m+p,_,m+p)}let s=new Be;s.setAttribute("position",new _e(n,3)),s.setAttribute("uv",new _e(r,2)),s.computeVertexNormals();let o=new ee(s,t);return o.receiveShadow=!0,i.add(o),o}var sr=Math.tan(Math.PI/6);function Fc(e,t,i){let n=kn[e],r=kn[(e+1)%6],s=Math.hypot(r[0]-n[0],r[1]-n[1]),o={x:(r[0]-n[0])/s,z:(r[1]-n[1])/s},a={x:-o.z,z:o.x},l=(n[0]+r[0])/2,c=(n[1]+r[1])/2;if(a.x*(qe.cx-l)+a.z*(qe.cz-c)<0)a={x:-a.x,z:-a.z};let[h,f]=i||[0,s],u=(m,d,v)=>bi(n[0]+o.x*d+a.x*m,v,n[1]+o.z*d+a.z*m),p=[],g=[],_=[];for(let m=0;m<t.length-1;m++){let[d,v]=t[m],[y,S]=t[m+1],E={p:[u(d,h+d*sr,v),u(d,f-d*sr,v),u(y,h+y*sr,S),u(y,f-y*sr,S)],ou:(h+d*sr)/1.22,ov:t.slice(0,m).reduce((w,x,M)=>w+Math.hypot(t[M+1][0]-x[0],t[M+1][1]-x[1]),0)/2.44};if(p.push(E),!i)g.push({p:[bi(n[0],v,n[1]),u(d,d*sr,v),bi(n[0],S,n[1]),u(y,y*sr,S)]}),_.push({p:[bi(r[0],v,r[1]),u(d,s-d*sr,v),bi(r[0],S,r[1]),u(y,s-y*sr,S)]})}return{quads:p,caps:[...g,..._],P:u,L:s,n:a,t:o,A:n,prof:t}}var Wv=[[[1,0],[0,3.6],[0,6]],null,[[0,0],[0,1.2],[1.6,3.4],[1.6,4.6],[0.9,6]],[[0,0],[0,1],[0.9,2.4],[0.9,3.4],[2,5],[0.4,6]],[[0,0],[0,0.8],[2,3.6],[2,6]],[[0,0],[0,3],[0.8,4.2],[0.8,6]]],Bc=[15213098,2845695,16765482,2273370,16742940,10632432,16736176,15921906,1381658,2806996],wg=[[],[],[],[],[],[],[]],Ao=new at;function ol(e,t,i){let[n,r,s,o]=e.p,a=n.clone().lerp(r,t),l=s.clone().lerp(o,t);return a.lerp(l,i)}function al(e,t){let[i,n,r]=e.p,s=n.clone().sub(i).cross(r.clone().sub(i)).normalize();if(s.dot(t)<0)s.negate();return s}function Vc(e,t,i,n,r){Ao.position.copy(t).addScaledVector(i,0.004),Ao.lookAt(t.clone().add(i)),Ao.rotateZ(r),Ao.scale.setScalar(1),Ao.updateMatrix(),wg[e].push({m:Ao.matrix.clone(),c:new ue(n)})}function pu(e,t,i,n,r=0.55){let s=e.p[0].distanceTo(e.p[2]);if(s<0.5)return;let o=Math.max(2,Math.round(s/r)),a=al(e,n);for(let l=0;l<t;l++)for(let c=0;c<o;c++){let h=Math.sin((c+l*1.7)*1.1)*0.5/t,f=(l+0.5)/t+h*0.55,u=(c+0.45)/o,p=ol(e,f,u),g=(c*3+l*5)%7,_=c<1?5:g===6?4:g===5?5:g%5;if(Vc(_===5&&c>0?1:_,p,a,Bc[(i+l)%Bc.length],(Ze()-0.5)*1.6),(c+l)%3===0){let m=ol(e,Math.min(0.97,Math.max(0.03,f+0.07)),Math.min(0.98,u+0.5/o));Vc(5,m,a,Bc[(i+l)%Bc.length],Ze()*3)}}}function Xv(){let e=[()=>{let i=new On(0.07,12,9);return i.scale(1,0.8,0.65),i.translate(0,0,0.035),i},()=>{let i=new Oi(0.11,0.03,0.05,2,0.012);return i.translate(0,0,0.025),i},()=>{let i=new On(0.1,14,10);return i.scale(1,1,0.38),i},()=>{let i=new rc(0.028,0.09,4,8);return i.rotateZ(Math.PI/2),i.translate(0,0,0.04),i},()=>{let i=new ir(0.05,0.022,8,14);return i.translate(0,0,0.02),i},()=>{let i=new lo(0.032,0.04,6);return i.rotateX(Math.PI/2),i.translate(0,0,0.02),i},()=>{let i=new sc(0.2);return i.scale(1,1,0.5),i}],t=new mt({color:16777215,roughness:0.5,metalness:0});e.forEach((i,n)=>{let r=wg[n];if(!r.length)return;let s=new In(i(),t,r.length);r.forEach((o,a)=>{s.setMatrixAt(a,o.m),s.setColorAt(a,o.c)}),s.castShadow=!0,Ci.add(s)})}(function(){let t=(i,n)=>bi(qe.cx-n.p[0].x,0,qe.cz-n.p[0].z);for(let i=0;i<6;i++){if(i===1){let r=Fc(1,[[0,0],[0,6]],[0,2.5]),s=Fc(1,[[0,0],[0,6]],[4.1,7]),o=Fc(1,[[0,2.3],[0,6]],[2.5,4.1]);for(let h of[r,s,o])Gc(h.quads,kc,Ci),h.quads.forEach((f)=>pu(f,h===o?2:2,0,t(h,f),0.6));let a=kn[1],l=-1,c=(h)=>a[0]+l*h;for(let h of[2.5,4.1])ae(Ci,0.1,2.3,0.3,se(1381914,0.5),c(h),1.15,a[1]+0.02);ae(Ci,1.7,0.1,0.3,se(1381914,0.5),c(3.3),2.3,a[1]+0.02);continue}let n=Fc(i,Wv[i]);Gc(n.quads,i%2?fg:kc,Ci),Gc(n.caps,fg,Ci),n.quads.forEach((r)=>pu(r,4,i*2,al(r,bi(qe.cx-r.p[0].x,0,qe.cz-r.p[0].z)).add(bi(0,0,0)),0.55))}for(let i=0;i<6;i++){let n=kn[i],r=kn[(i+1)%6],s=Math.hypot(r[0]-n[0],r[1]-n[1]),o=new ee(new Ut(s+0.3,qe.H,0.2),se(1513500,0.9)),a=(n[0]+r[0])/2,l=(n[1]+r[1])/2,c=bi(a-qe.cx,0,l-qe.cz).normalize();if(o.position.set(a+c.x*0.12,qe.H/2,l+c.z*0.12),o.rotation.y=-Math.atan2(r[1]-n[1],r[0]-n[0]),i!==1)Ci.add(o)}})();(function(){let i=[{y:0,r:1.75},{y:2.1,r:2.45},{y:4.7,r:1.45}],n=[];i.forEach((h,f)=>{let u=[];for(let p=0;p<7;p++){let g=p/7*Math.PI*2+f*0.12,_=0.9+(p*37+f*11)%10/50;u.push(bi(qe.cx+Math.sin(g)*h.r*_,h.y,qe.cz+Math.cos(g)*h.r*_))}n.push(u)});let r=[];for(let h=0;h<2;h++)for(let f=0;f<7;f++){let u=(f+1)%7;r.push({p:[n[h][f],n[h][u],n[h+1][f],n[h+1][u]],ou:f*0.37,ov:h*0.9})}let s=Gc(r,new mt({map:kc.map,bumpMap:kc.map,bumpScale:0.6,roughness:0.72,side:kt,color:15652528,flatShading:!0}),Ci);s.castShadow=!0;let o=n[2].map((h)=>new k(h.x,-h.z)),a=new mo(new ki(o));a.rotateX(-Math.PI/2);let l=new ee(a,se(13216376,0.8));l.position.y=4.7,Ci.add(l),r.forEach((h,f)=>{let u=ol(h,0.5,0.5),p=bi(u.x-qe.cx,0,u.z-qe.cz).normalize(),g=al(h,p);pu(h,f<7?2:2,3+f,g,0.55)});let c=r[0];{let h=ol(c,0.5,0.22),f=al(c,bi(h.x-qe.cx,0,h.z-qe.cz));Vc(6,h,f,2845695,0);let u=ol(r[3],0.5,0.3);Vc(6,u,al(r[3],bi(u.x-qe.cx,0,u.z-qe.cz)),15213098,1)}})();Xv();(function(){let i=[...Array(6)].map((h,f)=>{let u=f*Math.PI/3;return[qe.cx+6.99*Math.cos(u),qe.cz+6.99*Math.sin(u)]}),n=i[1][1]+0.1,r=[i[0],i[1],[-9.7,n],[-9.7,n-0.95],[-11.5,n-0.95],[-11.5,n],i[2],i[3],i[4],i[5]],s=new ki(r.map((h)=>new k(h[0],-h[1]))),o=new fo(s,{depth:0.26,bevelEnabled:!0,bevelThickness:0.04,bevelSize:0.04,bevelSegments:3});o.rotateX(-Math.PI/2);let a=Yc(Jt.matBlue,1,0.5),l=new ee(o,new mt({map:a,bumpMap:a,bumpScale:1.2,roughness:0.85}));l.position.y=0,l.receiveShadow=!0,Ci.add(l),ll(Ci,[...Array(6)].map((h,f)=>kn[f]),Zc("concrete",1.5,0.9));for(let h=0;h<6;h++){if(h===1)continue;let f=kn[h],u=kn[(h+1)%6],p=Math.hypot(u[0]-f[0],u[1]-f[1]),g=new ee(new Ut(p-0.3,0.03,0.05),se(16765482,0.5)),_=(f[0]+u[0])/2,m=(f[1]+u[1])/2,d=bi(qe.cx-_,0,qe.cz-m).normalize();g.position.set(_+d.x*0.07,0.32,m+d.z*0.07),g.rotation.y=-Math.atan2(u[1]-f[1],u[0]-f[0]),Ci.add(g)}let c=new ee(new Ct(3.3,3.4,0.14,7),new mt({map:a,color:6988543,roughness:0.9}));c.position.set(qe.cx,0.33,qe.cz),Ci.add(c)})();(function(){Io(kn,qe.H,se(1776673,0.9));for(let t=0;t<3;t++){let i=t*Math.PI/3,n=new ee(new Ut(qe.R*2-0.3,0.36,0.28),se(5067356,0.45,0.8));n.position.set(qe.cx,qe.H-0.2,qe.cz),n.rotation.y=-i,Vi.add(n);let r=new ee(new Ut(qe.R*2-1.2,0.03,0.06),zt(16773594,7));r.position.set(qe.cx,qe.H-0.4,qe.cz),r.rotation.y=-i,Vi.add(r)}for(let t=0;t<6;t++){let i=t*Math.PI/3+Math.PI/6,n=qe.cx+Math.cos(i)*4.6,r=qe.cz+Math.sin(i)*4.6;yt(Vi,0.12,0.12,0.14,se(855312,0.4,0.5),n,qe.H-0.1,r,14),yt(Vi,0.1,0.1,0.01,zt(16774888,9),n,qe.H-0.18,r,14)}for(let t=0;t<3;t++){let i=t*Math.PI*2/3+0.5;Pi(Ci,qe.cx+Math.cos(i)*4.2,qe.H-0.6,qe.cz+Math.sin(i)*4.2,16774372,22,14)}Pi(Ci,qe.cx,qe.H-0.8,qe.cz,16777215,18,12),Dn(Ci,"BOULDER",2.6,0.5,"#ffb42a",-10.6,4.4,kn[1][1]-0.12,Math.PI,"bold 170px Arial Black",void 0,!1),ae(Vi,14,0.02,0.02,zt(16757802,2.5),qe.cx,qe.H-0.02,qe.cz+5).visible=!1})();var it=new ft;xs.add(it);var Ki=3,Ag=(e,t)=>$i("tile",0.6,0.35,0,e,t),Kc=(e,t)=>$i("plaster",1.2,0.9,0,e,t);ll(it,[[-12.4,-5.45],[-8.8,-5.45],[-8.8,3.85],[-3.6,3.85],[-3.6,7.7],[-12.4,7.7]],Zc("tile",0.6,0.35));ll(it,[[-3.6,3.85],[0.4,3.85],[0.4,7.7],[-3.6,7.7]],Zc("graphite",1,0.6));Io([[-12.4,-5.45],[-8.8,-5.45],[-8.8,3.85],[-12.4,3.85]],Ki,se(15000802,0.9));Io([[-12.4,3.85],[-3.6,3.85],[-3.6,7.7],[-12.4,7.7]],Ki,se(15000802,0.9));Io([[-3.6,3.85],[0.4,3.85],[0.4,7.7],[-3.6,7.7]],Ki,se(2434604,0.9));Qi(it,-12.4,-5.45,-12.4,7.7,Ki,Kc);Qi(it,-8.8,-5.45,-8.8,-3.85,Ki,Kc);Qi(it,-3.6,3.85,-3.6,7.7,Ki,Ag);Qi(it,0.4,3.85,0.4,7.7,Ki,_s);for(let[e,t,i,n]of[[-10.6,-1,3.4,0.08],[-10.6,2.6,3.4,0.08],[-8.2,5.8,0.08,3.4],[-6.2,5.8,3.4,0.08]])ae(Vi,i,0.03,n,zt(16054527,6),e,Ki-0.02,t);(function(){let e=se(3885667,0.45,0.35),t=se(2765376,0.5,0.3);for(let i=0;i<14;i++){let n=-4.7+i*0.5+0;ae(it,0.45,1.95,0.48,i%2?e:t,-12.17,1,n),ae(it,0.01,0.55,0.3,se(1778224,0.6),-11.94,1.5,n),ae(it,0.012,0.2,0.012,se(14014428,0.2,1),-11.94,1.1,n+0.12),ae(it,0.012,0.03,0.2,zt(3725567,1.2),-11.94,1.92,n)}ae(it,0.46,0.06,7.1,se(2764602,0.5),-12.17,1.98,-1.1);for(let i of[-3.6,0.9]){ae(it,0.45,0.06,2.6,se(8018488,0.45),-10.9,0.46,i+1);for(let n of[0.1,2])ae(it,0.4,0.44,0.06,se(1381658,0.4,0.5),-10.9,0.22,i+n);ae(it,0.1,0.04,2.6,se(13619928,0.3,1),-10.55,0.9,i+1).visible=!1}for(let i=0;i<6;i++)ae(it,0.04,0.04,0.04,se(13619928,0.3,1),-8.9,1.7,-5.2+i*0.25);ae(it,0.03,1.4,1.2,new mt({color:13625855,roughness:0.04,metalness:0.6}),-8.93,1.4,-4.7),Dn(it,"ŠATNA",1.5,0.4,"#7fd0ff",-8.93,2.6,0.1,-Math.PI/2,"bold 170px Arial Black",void 0,!1),Pi(it,-10.6,2.6,-2,16054527,7,8),Pi(it,-10.6,2.6,2.4,16054527,6,8)})();(function(){let e=new mt({color:12577023,transparent:!0,opacity:0.18,roughness:0.02}),t=se(14014428,0.2,1),i=se(12172482,0.3);for(let n=0;n<4;n++){let r=-8+n*1.1;ae(it,1.05,0.02,1.2,i,r,0.011,4.45),ae(it,0.02,2,1.2,e,r+0.55,1,4.45),ae(it,1.05,2,0.02,e,r,1,5.07),yt(it,0.012,0.012,1,t,r,1.9,3.95,8);let s=yt(it,0.1,0.1,0.012,t,r,2.25,4.1,16);s.rotation.x=0.4,yt(it,0.06,0.06,0.004,se(273,0.5),r,0.016,4.5,14)}ae(it,0.02,2,1.2,e,-8.55,1,4.45);for(let n=0;n<3;n++){let r=-6+n*0.9;ae(it,0.55,0.1,0.4,se(15921906,0.2),r,0.9,7.45),yt(it,0.012,0.012,0.12,t,r,1,7.6,8),ae(it,0.6,0.9,0.02,new mt({color:13625855,roughness:0.04,metalness:0.6}),r,1.55,7.64)}for(let n=0;n<3;n++)ae(it,1,2,0.03,se(15000802,0.6),-9.1,1,7-n*0.9).visible=!1,ae(it,0.03,2,0.88,se(15000802,0.6),-11.8,1,4.6+n*1).visible=!1;for(let n=0;n<3;n++){let r=4.4+n*1;ae(it,1,1.95,0.03,se(15000802,0.6),-11.9,1,r+0.5),ae(it,0.03,1.4,0.8,se(2781048,0.5),-11.4,0.85,r+0.05).visible=!1,yt(it,0.17,0.2,0.4,se(15921906,0.2),-12.1,0.2,r,16)}Dn(it,"SPRCHY · WC",2.4,0.4,"#7fd0ff",-6.2,2.6,4,0,"bold 140px Arial Black",void 0,!1),Pi(it,-6.2,2.6,5.7,15398143,7,8)})();(function(){ae(it,0.45,0.42,2,se(2763827,0.6),0.15,0.21,6),ae(it,0.5,0.06,2,se(8018488,0.45),0.15,0.45,6),Dn(it,"BADMINTON  ›",2.2,0.36,"#6fd0ff",-1.9,2.6,7.45,Math.PI,"bold 140px Arial Black",void 0,!1);for(let e of[-3.3,0.1]){yt(it,0.2,0.15,0.4,se(2369067,0.6),e,0.2,4.2,16),yt(it,0.03,0.03,0.6,se(2780986,0.8),e,0.7,4.2,6);let t=new ee(new On(0.28,12,9),se(2058804,0.8));t.scale.y=1.2,t.position.set(e,1.15,4.2),it.add(t)}Pi(it,-1.6,2.6,5.8,16771276,6,7)})();ae(it,5.2,Ki,0.03,Ag(5.2,Ki),-6.2,Ki/2,3.99);ae(it,0.03,2.85,2.85,Kc(2.85,2.85),-8.94,1.425,-2.425);ae(it,0.03,Ki,2.65,Kc(2.65,Ki),-8.94,Ki/2,2.525);ae(it,0.03,0.15,2.2,se(1381914,0.6),-8.94,0.075,0.1).visible=!1;var bt=new ft;xs.add(bt);var le={x0:-12.4,x1:5.6,z0:7.7,z1:24.5,Hs:4.2,Hc:9};le.cx=(le.x0+le.x1)/2;le.a=(le.x1-le.x0)/2;le.b=le.Hc-le.Hs;var Pr=(e,t=0)=>{let i=(e-le.cx)/(le.a-t);return le.Hs+(le.b-t)*Math.sqrt(Math.max(0,1-i*i))};Jt.vinylBlue=(()=>{let e=Lt(256,256),t=e.getContext("2d");return t.fillStyle="#1f3f7a",t.fillRect(0,0,256,256),si(t,256,256,14),e})();{let e=$i("vinylBlue",2,0.35,0,le.x1-le.x0,le.z1-le.z0),t=new ee(new Ft(le.x1-le.x0,le.z1-le.z0),e);t.rotation.x=-Math.PI/2,t.position.set(le.cx,0.002,(le.z0+le.z1)/2),t.receiveShadow=!0,bt.add(t)}var qv=(()=>{let e=Lt(610,1340),t=e.getContext("2d");t.fillStyle="#2c7a4e",t.fillRect(0,0,610,1340),si(t,610,1340,10),t.strokeStyle="#fff",t.fillStyle="#fff";let i=4,n=(s,o,a,l)=>{t.lineWidth=i,t.beginPath(),t.moveTo(s,o),t.lineTo(a,l),t.stroke()};t.lineWidth=i,t.strokeRect(2,2,606,1336),n(46,0,46,1340),n(564,0,564,1340),n(0,76,610,76),n(0,1264,610,1264),n(0,472,610,472),n(0,868,610,868),n(305,0,305,472),n(305,868,305,1340),t.fillStyle="rgba(255,255,255,.55)",t.fillRect(0,668,610,4);let r=new Yi(e);return r.colorSpace=wt,r.anisotropy=16,r})(),Po=[le.cx-3.9,le.cx+3.9],Zi=16.1;for(let e of Po){let t=new ee(new Ft(6.1,13.4),new mt({map:qv,roughness:0.32}));t.rotation.x=-Math.PI/2,t.position.set(e,0.012,Zi),t.receiveShadow=!0,bt.add(t);for(let o of[-1,1])yt(bt,0.028,0.034,1.55,se(1842207,0.4,0.7),e+o*3.05,0.775,Zi,12),yt(bt,0.14,0.16,0.05,se(3816256,0.5,0.5),e+o*3.05,0.025,Zi,16);let i=Lt(512,64),n=i.getContext("2d");n.fillStyle="#fff",n.fillRect(0,0,512,9),n.strokeStyle="rgba(240,240,240,.75)",n.lineWidth=1;for(let o=0;o<512;o+=7)n.beginPath(),n.moveTo(o,0),n.lineTo(o,64),n.stroke();for(let o=9;o<64;o+=7)n.beginPath(),n.moveTo(0,o),n.lineTo(512,o),n.stroke();let r=new Yi(i);r.colorSpace=wt;let s=new ee(new Ft(6.1,0.76),new It({map:r,transparent:!0,side:kt,alphaTest:0.25}));s.position.set(e,1.17,Zi),bt.add(s),ae(bt,0.5,0.05,0.5,se(7830146,0.5),e+3.7,1.5,Zi),ae(bt,0.06,1.5,0.06,se(7830146,0.3,0.8),e+3.7,0.75,Zi-0.2),ae(bt,0.06,1.5,0.06,se(7830146,0.3,0.8),e+3.7,0.75,Zi+0.2)}var Rg=(e,t)=>$i("plaster",1.2,0.9,0,e,t);Qi(bt,le.x0,le.z0,le.x0,le.z1,le.Hs,Rg);Qi(bt,le.x1,le.z0,le.x1,le.z1,le.Hs,Rg);var Cg=(e,t)=>$i("rubber",1.2,0.8,0,e,t,{color:4880127});ae(bt,0.1,1.3,le.z1-le.z0,Cg(16,1.3),le.x0+0.1,0.65,(le.z0+le.z1)/2);ae(bt,0.1,1.3,le.z1-le.z0,Cg(16,1.3),le.x1-0.1,0.65,(le.z0+le.z1)/2);function Pg(e,t,i){let n=[[le.x0,0]];for(let[l,c]of t)n.push([l,0],[l,2.2],[c,2.2],[c,0]);n.push([le.x1,0]);let r=48;for(let l=r;l>=0;l--){let c=le.x0+(le.x1-le.x0)*l/r;n.push([c,Pr(c)])}let s=new ki(n.map((l)=>new k(l[0],l[1]))),o=new fo(s,{depth:0.22,bevelEnabled:!1}),a=new ee(o,$i("plaster",1.2,0.9,0,6,6));if(a.position.z=e-0.11,a.receiveShadow=!0,bt.add(a),i)yu.push(a);return a}Pg(le.z0,[[-8.2,-6.8],[-2.8,-1]],!1);Pg(le.z1,[],!0);for(let[e,t]of[[-8.2,-6.8],[-2.8,-1]])ae(bt,0.1,2.2,0.3,se(1381914,0.5),e,1.1,le.z0),ae(bt,0.1,2.2,0.3,se(1381914,0.5),t,1.1,le.z0),ae(bt,t-e,0.1,0.3,se(1381914,0.5),(e+t)/2,2.2,le.z0);var Ig=new It({color:13625087,toneMapped:!1});for(let e=0;e<5;e++){let t=new ee(new Ft(2,3.2),Ig);t.position.set(le.cx-7.2+e*3.6,5.6,le.z1-0.115),t.rotation.y=Math.PI,bt.add(t),yu.push(t)}for(let e of[le.x0+0.13,le.x1-0.13])for(let t=0;t<6;t++){let i=new ee(new Ft(1.8,0.8),Ig);i.position.set(e,3.3,le.z0+1.6+t*2.7),i.rotation.y=e<le.cx?Math.PI/2:-Math.PI/2,bt.add(i)}(function(){let n=new mt({map:Yc(Jt.steel,2,2),color:10133674,roughness:0.35,metalness:0.85}),r=[],s=[];for(let E=0;E<=36;E++){let w=le.x0+0.25+(le.x1-le.x0-0.5)*E/36;r.push([w,Pr(w,0.15)]),s.push([w,Pr(w,0.15)-0.7+Math.abs(E-18)/18*0.25])}let o=[],a=bi(0,1,0),l=new Xe,c=new ni,h=new A,f=new A,u=(E,w,x)=>{let M=bi(E[0],E[1],x),R=bi(w[0],w[1],x),U=R.clone().sub(M),I=U.length();c.setFromUnitVectors(a,U.normalize()),h.copy(M).add(R).multiplyScalar(0.5),f.set(1,I,1),l.compose(h,c,f),o.push(l.clone())};for(let E=0;E<8;E++){let w=le.z0+0.9+E*(le.z1-le.z0-1.8)/7;for(let x of[r,s]){let M=new co(x.map((U)=>bi(U[0],U[1],w))),R=new ee(new Xa(M,72,0.075,8,!1),n);R.castShadow=!0,bt.add(R)}for(let x=0;x<36;x++)u(r[x],s[x],w),u(s[x],r[x+1],w);u(r[36],s[36],w);for(let x of[le.x0+0.22,le.x1-0.22])ae(bt,0.3,le.Hs-0.1,0.3,n,x,(le.Hs-0.1)/2+0.05,w),ae(bt,0.45,0.05,0.45,se(3158842,0.5,0.6),x,0.03,w)}let p=new Ct(0.028,0.028,1,6),g=new In(p,n,o.length);o.forEach((E,w)=>g.setMatrixAt(w,E)),bt.add(g);for(let E=0;E<=12;E++){let w=le.x0+0.25+(le.x1-le.x0-0.5)*E/12,x=Pr(w,0.15),M=yt(bt,0.05,0.05,le.z1-le.z0-1.4,n,w,x,(le.z0+le.z1)/2,8);M.rotation.x=Math.PI/2}let _=60,m=[],d=[],v=[];for(let E=0;E<=_;E++){let w=le.x0+(le.x1-le.x0)*E/_,x=Pr(w)+0.12;if(m.push(w,x,le.z0,w,x,le.z1),v.push(E*0.6,0,E*0.6,4),E<_){let M=E*2;d.push(M,M+1,M+2,M+1,M+3,M+2)}}let y=new Be;y.setAttribute("position",new _e(m,3)),y.setAttribute("uv",new _e(v,2)),y.setIndex(d),y.computeVertexNormals();let S=new ee(y,new mt({color:10331053,roughness:0.7,metalness:0.3,side:kt}));Vi.add(S);for(let E of Po)for(let w of[-1.6,1.6])for(let x=0;x<3;x++){let M=le.z0+3.5+x*4.5+(E>le.cx?0:0),R=Math.min(Pr(E+w,0.15)-0.9,7.6),U=new ee(new Ut(0.16,0.08,2.4),zt(16775146,9));U.position.set(E+w,R,M),bt.add(U),ae(bt,0.02,Pr(E+w,0.15)-R-0.1,0.02,se(546,0.5,0.7),E+w,(Pr(E+w,0.15)+R)/2-0.05,M)}for(let E of Po)for(let w=0;w<3;w++)Pi(bt,E,7,le.z0+3.5+w*4.5,16775146,22,26)})();Dn(bt,(window.FUNUI?FUNUI.summary("bad").k[0][0]:"0–0").replace("–"," : "),2.2,0.8,"#ffcf3a",le.x1-0.14,3.2,Zi,-Math.PI/2,"bold 280px Arial Black","#0b0b0b",!1);Dn(bt,"BADMINTON · LIGA",5,0.6,"#2b4fff",le.cx,6,le.z0+0.14,0,"bold 84px Arial Black, Arial",void 0,!1);for(let e of[-9,-3.4,2.2])ae(bt,2.6,0.05,0.4,se(3812642,0.5),e,0.45,le.z1-0.5),ae(bt,0.06,0.44,0.35,se(1381653),e-1.2,0.22,le.z1-0.5),ae(bt,0.06,0.44,0.35,se(1381653),e+1.2,0.22,le.z1-0.5);for(let e=0;e<6;e++){let t=yt(bt,0.04,0.04,0.3,se(16766010),-11+e*0.12,0.6,le.z1-0.6,10);t.rotation.x=0.2}var Ur=new ft;Ur.position.set(6.5,1.85,-3.6);Ur.rotation.y=0;Ei.add(Ur);var Lg=window.FUNUI?window.FUNUI.summary("strava").k:[["12/20"],["9 400"]],[Dg,Ng]=Lg[0][0].split("/").map(Number);Ur.add(new ee(new ir(0.85,0.1,16,72),Dv(2761296,{r:0.6})));var Ug=2*Math.PI*Dg/Ng,Fg=new ee(new ir(0.85,0.1,16,160,Ug),new It({color:new ue(16534530).multiplyScalar(1.5),toneMapped:!1}));Fg.rotation.z=Math.PI/2-Ug;Ur.add(Fg);var Yv=vu(512,384,(e,t,i)=>{e.textAlign="center",e.fillStyle="#fff",e.font="800 140px Inter,Arial",e.fillText(Dg+"",t/2-40,190),e.fillStyle="#b8a9c9",e.font="700 70px Inter,Arial",e.fillText("/"+Ng,t/2+90,190),e.font="600 34px Inter,Arial",e.fillText("A C T I V E   D A Y S",t/2,250)});Mu(1.5,1.12,Yv,Ur,0,0,0.02);var Bg=(e,t)=>vu(768,96,(i,n,r)=>{i.fillStyle="rgba(10,15,44,.85)",i.beginPath(),i.roundRect(4,4,n-8,r-8,44),i.fill(),i.strokeStyle=t,i.lineWidth=4,i.stroke(),i.fillStyle=t,i.textAlign="center",i.font="700 40px Inter,Arial",i.fillText(e,n/2,62)});Mu(1.9,0.24,Bg("\uD83D\uDC63  "+Lg[1][0]+" STEPS / DAY","#3dff9a"),Ur,0,-1.3,0.02);Mu(1.9,0.24,Bg("GYM 3× · YOGA 2× · WALKS","#8a96c4"),Ur,0,-1.62,0.02);var dg=(Po[0]+Po[1])/2,Wc=[{k:"bad",x:dg,z:Zi,r:9.5,c:"#3dff9a",label:"BADMINTON",pos:[dg,3.4,Zi],sc:1.5},{k:"climb",x:qe.cx,z:qe.cz,r:6.4,c:"#38e8ff",label:"CLIMBING",pos:[-10.8,3.7,-5.95],sc:1.2,ring:!1},{k:"strava",x:6.5,z:-2.3,r:2.3,c:"#ff7a2a",label:"STRAVA",pos:[6.5,3,-3.5],sc:0.8},{k:"games",x:6.6,z:-0.6,r:2.8,c:"#6d86ff",label:"GAMES",pos:[8.2,2.5,-1.8],sc:1},{k:"beer",x:-6.35,z:0,r:2.6,c:"#ff6a80",label:"BEER PONG",pos:[-6.35,2.55,0],sc:1}];Wc.forEach((e)=>{let t=Uv(e.label,e.c,e.sc);if(t.position.set(...e.pos),Ei.add(t),e.ring!==!1&&e.k!=="bad"){let i=new ee(new po(e.r*0.55,e.r*0.55+0.05,64),new It({color:new ue(e.c).multiplyScalar(1.5),transparent:!0,opacity:0.55,side:kt,toneMapped:!1}));i.rotation.x=-Math.PI/2,i.position.set(e.x,0.02,e.z),Ei.add(i),e.ring=i}});var mu=[],Og=new Map;function Wn(e,t,i,n,r,s,o,a,l,c=5.5,h=!0){let f=new Ut(t,i,n),u=new ee(f,new It({visible:!1}));u.position.set(r,s,o),u.userData.isHit=!0,l.add(u);let p=new hi({color:new ue(a).multiplyScalar(2),transparent:!0,opacity:0,toneMapped:!1,depthTest:!1}),g={id:e,hit:u,hits:[u],mat:p,outline:h,far:c};if(h){l.updateMatrixWorld(!0);let _=new Xe().copy(l.matrixWorld).invert(),m=new vi(new A(r-t/2,s-i/2,o-n/2),new A(r+t/2,s+i/2,o+n/2)),d=Math.max(t,i,n)*1.25,v=[];if(l.traverse((y)=>{if(!y.isMesh||y.isInstancedMesh||y.userData.isHit||y.userData.itemLine||!y.geometry)return;if(!y.geometry.boundingBox)y.geometry.computeBoundingBox();let S=new Xe().multiplyMatrices(_,y.matrixWorld),E=y.geometry.boundingBox.clone().applyMatrix4(S),w=E.getSize(new A);if(Math.max(w.x,w.y,w.z)>d||!m.containsPoint(E.getCenter(new A)))return;v.push([y,S])}),v.forEach(([y,S])=>{let E=new qi(new cc(y.geometry,28),p);E.matrixAutoUpdate=!1,E.matrix.copy(S),E.userData.itemLine=!0,E.renderOrder=5,l.add(E),g.hits.push(y)}),!v.length){let y=new qi(new cc(f),p);y.position.copy(u.position),y.userData.itemLine=!0,l.add(y)}}g.hits.forEach((_)=>Og.set(_,g)),mu.push(g)}Wn("pc",0.3,0.52,0.5,0.83,1.03,-0.15,7177983,Nr);Wn("kb",0.39,0.04,0.16,-0.2,0.8,0.22,7177983,Nr);Wn("ms",0.075,0.04,0.14,0.27,0.8,0.21,4063130,Nr);Wn("hp",0.26,0.12,0.2,-0.7,0.84,0.26,16751178,Nr);Wn("mon",0.62,0.36,0.05,0.12,1.135,-0.2,3729663,Nr,5.5,!1);Wn("st:games",1.3,0.42,0.3,-1.78,1.12,-0.1,3729663,Nr,7,!1);Wn("st:bad",0.4,1,2.4,le.x1-0.2,3.2,Zi,4063130,Ei,24,!1);Wn("st:strava",2.2,2.4,0.3,6.5,1.7,-3.55,16742954,Ei,9,!1);Wn("st:climb",5,5,5,qe.cx,2.5,qe.cz,3729663,Ei,16,!1);Wn("st:beer",1.9,0.9,2.7,-6.35,0.7,0,16738944,Ei,9,!1);var ke={x:-1.9,z:2.8,yaw:0,pitch:0,vx:0,vz:0},Zv=1.65,rl=0.3,Jv=[[-8.8,8.8,-3.85,3.85],[-3.9,4.3,-9.4,-3.85],[-12.4,-8.8,-5.45,7.7],[-12.4,-3.6,3.85,7.7],[-3.6,0.4,3.85,7.7],[-12.4,5.6,7.7,24.5]],Kv=[[-3.62,4.02,-4.3,-3.4],[-11.3,-9.9,-5.8,-5.1],[-9.25,-8.35,-0.9,1.1],[-2.7,-1.1,3.5,4.2],[-2.7,-1.1,7.35,8.05],[-8.1,-6.9,7.35,8.05]];function $v(e,t){let i=e-qe.cx,n=t-qe.cz,r=qe.R*Math.cos(Math.PI/6)-rl;for(let s=0;s<6;s++){let o=Math.PI/6+s*Math.PI/3;if(i*Math.cos(o)+n*Math.sin(o)>r)return!1}return!0}function sl(e,t){for(let i of Jv)if(e>i[0]+rl&&e<i[1]-rl&&t>i[2]+rl&&t<i[3]-rl)return!0;for(let i of Kv)if(e>i[0]&&e<i[1]&&t>i[2]&&t<i[3])return!0;return $v(e,t)}var or=[],Kt=(e,t,i,n,r)=>{let s=Math.max(1,Math.ceil(Math.hypot(i-e,n-t)/(r*0.9)));for(let o=0;o<=s;o++)or.push([e+(i-e)*o/s,t+(n-t)*o/s,r])};Kt(-1.95,-4.6,-1.95,-6.9,0.35);Kt(2.35,-4.6,2.35,-6.9,0.35);Kt(-1.9,-4.6,2.3,-4.6,0.4);or.push([0.2,-6.05,0.5]);Kt(8.25,-2.65,8.25,2.65,0.4);Kt(8.35,2.65,8.35,3.7,0.3);Kt(8.35,-3.7,8.35,-2.65,0.3);Kt(1.5,1.85,4.9,1.85,0.5);Kt(1.1,3.45,4.9,3.45,0.3);[4.5,3.65,2.8,1.95].forEach((e)=>or.push([e,0.875,0.25]));Kt(-6.95,-1,-6.95,1,0.42);Kt(-5.75,-1,-5.75,1,0.42);Kt(-0.6,-0.15,-0.6,0.95,0.42);or.push([-8.35,3.35,0.32],[-4.45,3.35,0.32],[-3.9,-3.85,0.3],[4.3,-3.85,0.3]);Kt(-8.3,-3.45,-5.5,-3.45,0.22);Kt(-3.55,-7.2,-3.55,-6,0.15);Kt(3.9,-7.2,3.9,-6,0.15);or.push([qe.cx,qe.cz,2.15]);Kt(-11.95,-4.7,-11.95,2.3,0.12);Kt(-10.9,-3.6,-10.9,-1,0.25);Kt(-10.9,0.9,-10.9,3.5,0.25);Kt(-8.5,4.35,-4.1,4.35,0.55);Kt(-6.4,7.4,-4,7.4,0.3);Kt(-11.9,4.4,-11.9,7.4,0.5);Kt(0.15,5.1,0.15,6.9,0.3);or.push([-3.3,4.2,0.3],[0.1,4.2,0.3]);for(let e of Po)Kt(e-3.05,Zi,e+3.05,Zi,0.22),or.push([e+3.7,Zi,0.35]);Kt(le.x0+1,le.z1-0.5,le.x1-1,le.z1-0.5,0.25);function zg(e,t){if(!sl(ke.x,ke.z))if(sl(ke.x,t))ke.z=t;else if(sl(e,ke.z))ke.x=e;else ke.x=e,ke.z=t;or.forEach(([i,n,r])=>{let s=ke.x-i,o=ke.z-n,a=Math.hypot(s,o),l=r+0.28;if(a<l&&a>0.0001){let c=i+s/a*l,h=n+o/a*l;if(sl(c,h))ke.x=c,ke.z=h;else ke.x=e,ke.z=t}})}var vn={},Vn=!1,Xc=!1,Co={x:0,y:0};addEventListener("keydown",(e)=>{if(!Vn||Sn.isOpen())return;if(vn[e.code]=!0,e.code==="KeyE"||e.code==="Enter")$c();if(e.code.startsWith("Arrow")||e.code==="Space")e.preventDefault()});addEventListener("keyup",(e)=>{vn[e.code]=!1});var gu=bn("#start"),qc=gu.querySelector(".go"),t9=qc?qc.textContent:"",Gg=document.createElement("style");Gg.textContent='#start[data-paused="1"] .keys,#start[data-paused="1"] p{display:none!important}#start[data-paused="1"] h1{opacity:.55}';document.head.appendChild(Gg);function Hg(){if(gu.classList.add("on"),gu.dataset.paused="1",qc)qc.textContent="POKRAČOVAT · KLIKNI"}function Qv(){if(Lr||!cn.requestPointerLock)return;try{let e=cn.requestPointerLock();if(e&&e.catch)e.catch(()=>{})}catch(e){}setTimeout(()=>{if(Vn&&!Sn.isOpen()&&document.pointerLockElement!==cn)Hg()},350)}document.addEventListener("pointerlockchange",()=>{if(Xc=document.pointerLockElement===cn,!Xc&&Vn&&!Sn.isOpen()&&!Lr)Hg()});addEventListener("mousemove",(e)=>{if(!Vn||Sn.isOpen())return;if(Xc||Su)ke.yaw-=e.movementX*0.0022,ke.pitch=Math.max(-1.2,Math.min(1.2,ke.pitch-e.movementY*0.0022))});var Su=!1;cn.addEventListener("mousedown",()=>{if(Su=!0,Xc&&Wi&&(Wi==="mon"||Wi.startsWith("st:")))return $c()});addEventListener("mouseup",()=>{Su=!1});function jv(){if(Vn=!0,bn("#start").classList.remove("on"),bn("#hud").classList.add("on"),!Lr&&cn.requestPointerLock)try{let e=cn.requestPointerLock();if(e&&e.catch)e.catch(()=>{})}catch(e){}}bn("#start").addEventListener("click",jv);Sn.setOnClose(()=>{vn.KeyE=!1,Qv()});if(Lr){let e=bn("#joy"),t=bn("#knob"),i=null,n=null,r=0,s=0,o=(c)=>{let h=e.getBoundingClientRect(),f=h.left+h.width/2,u=h.top+h.height/2,p=(c.clientX-f)/(h.width/2),g=(c.clientY-u)/(h.height/2),_=Math.hypot(p,g);if(_>1)p/=_,g/=_;Co.x=p,Co.y=g,t.style.transform=`translate(${p*34}px,${g*34}px)`};e.addEventListener("pointerdown",(c)=>{i=c.pointerId,e.setPointerCapture(i),o(c)}),e.addEventListener("pointermove",(c)=>{if(c.pointerId===i)o(c)});let a=(c)=>{if(c.pointerId===i)i=null,Co.x=Co.y=0,t.style.transform=""};e.addEventListener("pointerup",a),e.addEventListener("pointercancel",a),cn.addEventListener("pointerdown",(c)=>{if(!Vn||Sn.isOpen()||n!==null)return;n=c.pointerId,r=c.clientX,s=c.clientY,cn.setPointerCapture(n)}),cn.addEventListener("pointermove",(c)=>{if(c.pointerId!==n)return;ke.yaw-=(c.clientX-r)*0.005,ke.pitch=Math.max(-1.1,Math.min(1.1,ke.pitch-(c.clientY-s)*0.005)),r=c.clientX,s=c.clientY});let l=(c)=>{if(c.pointerId===n)n=null};cn.addEventListener("pointerup",l),cn.addEventListener("pointercancel",l),bn("#act").addEventListener("click",()=>$c())}var Mn=null,Wi=null,xu=new wc;xu.far=26;var Oc=bn("#prompt"),zc=bn("#sum");function eM(e){if(e===(Mn&&Mn.k))return;if(Mn=e?Wc.find((i)=>i.k===e):null,!Mn){Oc.classList.remove("on"),zc.classList.remove("on");return}let t=Sn.summary(e);Oc.querySelector("b").textContent=t.t,Oc.style.setProperty("--c",Mn.c),zc.style.setProperty("--c",Mn.c),zc.innerHTML=`<h4>${t.t}</h4><p>${t.s}</p><div>${t.k.map((i)=>`<span><b>${i[0]}</b><i>${i[1]}</i></span>`).join("")}</div>`,Oc.classList.add("on"),zc.classList.add("on")}function $c(){if(Sn.isOpen())return;if(document.pointerLockElement)document.exitPointerLock();if(Wi==="mon"||Wi==="st:games")return Sn.open("games");if(Wi&&Wi.startsWith("st:"))return Sn.open(Wi.slice(3));if(Mn)Sn.open(Mn.k)}function pg(e){if(e===Wi)return;Wi=e,["pc","hp","kb","ms"].forEach((t)=>document.body.classList.toggle(t,t===e))}Ei.traverse((e)=>{if(e.isPointLight)e.intensity*=0.56});var tM=new Ac,fu=0;function kg(){let e=Math.min(tM.getDelta(),0.05);fu+=e;let t=Sn.isOpen();if(Vn&&!t){let r=(vn.ArrowLeft?1:0)-(vn.ArrowRight?1:0);ke.yaw+=r*1.9*e;let s=(vn.KeyW||vn.ArrowUp?1:0)-(vn.KeyS||vn.ArrowDown?1:0)-Co.y,o=(vn.KeyD?1:0)-(vn.KeyA?1:0)+Co.x,a=vn.ShiftLeft?5.2:3.2,l=(-Math.sin(ke.yaw)*s+Math.cos(ke.yaw)*o)*a,c=(-Math.cos(ke.yaw)*s-Math.sin(ke.yaw)*o)*a,h=Math.hypot(l,c);if(h>a)l*=a/h,c*=a/h;let f=1-Math.exp(-10*e);ke.vx+=(l-ke.vx)*f,ke.vz+=(c-ke.vz)*f;let{x:u,z:p}=ke;ke.x+=ke.vx*e,ke.z+=ke.vz*e,zg(u,p)}if(!window.__camLock)Ji.position.set(ke.x,Zv,ke.z),Ji.rotation.order="YXZ",Ji.rotation.set(ke.pitch,ke.yaw,0);if(Vn&&!t){xu.setFromCamera(new k(0,0),Ji);let r=xu.intersectObjects(mu.flatMap((o)=>o.hits),!1),s=null;for(let o of r){let a=Og.get(o.object);if(a&&o.distance<=a.far){s=a.id;break}}pg(s)}else pg(null);let i=null,n=9;if(Wc.forEach((r)=>{let s=Math.hypot(ke.x-r.x,ke.z-r.z)/r.r;if(s<1&&s<n)n=s,i=r.k}),Wi&&Wi.startsWith("st:"))i=Wi.slice(3);else if(Wi==="mon")i="games";if(eM(i&&Vn&&!t?i:t?Mn&&Mn.k:null),mu.forEach((r)=>{if(r.outline)r.mat.opacity=Wi===r.id?1:0}),Wc.forEach((r)=>{if(r.ring)r.ring.material.opacity=Mn&&Mn.k===r.k?0.95:0.35+0.15*Math.sin(fu*2)}),bg.forEach((r)=>r(fu)),Ir)Ir.render();else Dr.render(Ei,Ji);requestAnimationFrame(kg)}requestAnimationFrame(kg);window.__scene=Ei;window.__fun={go(e,t,i=0,n=0){ke.x=e,ke.z=t,ke.yaw=i,ke.pitch=n,ke.vx=ke.vz=0},pos(){return[ke.x,ke.z]},blocked(e,t){if(!sl(e,t))return!0;for(let[i,n,r]of or)if(Math.hypot(e-i,t-n)<r+0.28)return!0;return!1},sim(e,t,i,n,r=400){ke.x=e,ke.z=t;for(let s=0;s<r;s++){let{x:o,z:a}=ke;ke.x+=Math.sign(i-ke.x)*Math.min(0.05,Math.abs(i-ke.x)),ke.z+=Math.sign(n-ke.z)*Math.min(0.05,Math.abs(n-ke.z)),zg(o,a)}return[+ke.x.toFixed(2),+ke.z.toFixed(2)]},start(){Vn=!0,bn("#start").classList.remove("on"),bn("#hud").classList.add("on")},interact:$c,view(e,t,i,n,r,s,o=68,a=!0){window.__camLock=!0,Vi.visible=a,Ji.fov=o,Ji.updateProjectionMatrix(),Ji.position.set(e,t,i),Ji.up.set(0,1,0),Ji.lookAt(n,r,s)},free(){window.__camLock=!1,Vi.visible=!0}};
